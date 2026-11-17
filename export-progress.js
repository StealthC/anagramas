/*
 * Aviso de migração + exportador de progresso do jogo antigo (build React de 2022).
 *
 * Este arquivo é injetado no index.html do build antigo e NÃO depende do React nem de rebuild:
 * - lê localStorage["saved:*"] (formato SavedGame do app antigo);
 * - converte para o envelope versionado "anagramas-progress" v1;
 * - mostra um aviso no topo e um modal com o código em base64 (copiar/baixar).
 *
 * Prefixo do código: ANAGRAMAS-PROGRESS:v1:<base64 do JSON UTF-8>
 * Formato documentado em docs/09-export-import-progresso.md.
 */
(function () {
  "use strict";

  var ENVELOPE_FORMAT = "anagramas-progress";
  var ENVELOPE_VERSION = 1;
  var PREFIX = "ANAGRAMAS-PROGRESS:v1:";
  var NEW_SITE_URL = "https://anagramas.pensemais.net/";
  var LEGACY_APP_VERSION = "2022-08-22";
  var DISMISS_KEY = "legacy-migration-notice-dismissed-v1";

  var BANNER_ID = "legacy-migration-banner";
  var MODAL_ID = "legacy-migration-modal";
  var STYLE_ID = "legacy-migration-style";

  var state = { code: "", games: 0, skipped: 0 };

  // ---------- dados ----------

  function normalizeAnagram(word) {
    return String(word || "")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .split("")
      .sort()
      .join("");
  }

  function validIso(value, fallback) {
    var d = new Date(value);
    return isNaN(d.getTime()) ? fallback : d.toISOString();
  }

  function readSaves() {
    var result = { games: [], skipped: 0 };
    if (!window.localStorage) return result;
    for (var i = 0; i < localStorage.length; i++) {
      var key = localStorage.key(i);
      if (!key || key.indexOf("saved:") !== 0) continue;
      try {
        var raw = JSON.parse(localStorage.getItem(key));
        if (
          !raw ||
          typeof raw !== "object" ||
          !raw.game ||
          !Array.isArray(raw.game.solutions)
        ) {
          result.skipped++;
          continue;
        }
        var anagram =
          typeof raw.anagram === "string" && raw.anagram
            ? normalizeAnagram(raw.anagram)
            : normalizeAnagram(raw.game.word && raw.game.word.anagram);
        if (!/^[a-z]{3,}$/.test(anagram)) {
          result.skipped++;
          continue;
        }
        result.games.push({ raw: raw, anagram: anagram });
      } catch (e) {
        result.skipped++;
      }
    }
    return result;
  }

  function toExportGame(item) {
    var raw = item.raw;
    var solutions = raw.game.solutions;
    var purchased = {};
    var solved = [];
    var index;

    for (index = 0; index < solutions.length; index++) {
      var s = solutions[index] || {};
      if (s.solved && typeof s.solution === "string") {
        solved.push(s.solution);
        continue;
      }
      if (typeof s.partial === "string" && s.solution) {
        var positions = [];
        for (var i = 0; i < s.partial.length; i++) {
          if (s.partial[i] !== "?" && i < s.solution.length) positions.push(i);
        }
        if (positions.length > 0) purchased[s.solution] = positions;
      }
    }

    var fallbackNow = new Date().toISOString();
    var updatedAt = validIso(raw.updated, validIso(raw.created, fallbackNow));
    var startedAt = validIso(raw.created, updatedAt);
    var allSolved =
      solutions.length > 0 &&
      solutions.every(function (s) {
        return !!(s && s.solved);
      });

    return {
      anagram: item.anagram,
      totalWords: solutions.length,
      solved: solved,
      purchasedLetters: purchased,
      triesCount: 0,
      playTimeMs: 0,
      startedAt: startedAt,
      updatedAt: updatedAt,
      completed: !!raw.solved || allSolved,
    };
  }

  function buildEnvelope() {
    var found = readSaves();
    var games = found.games
      .map(toExportGame)
      .sort(function (a, b) {
        return b.updatedAt.localeCompare(a.updatedAt);
      });
    state.games = games.length;
    state.skipped = found.skipped;
    return {
      format: ENVELOPE_FORMAT,
      schemaVersion: ENVELOPE_VERSION,
      exportedAt: new Date().toISOString(),
      source: {
        app: "anagramas-legacy",
        version: LEGACY_APP_VERSION,
        origin: location.origin,
        path: location.pathname,
      },
      games: games,
    };
  }

  function bytesToBase64(bytes) {
    var binary = "";
    var chunk = 0x8000;
    for (var i = 0; i < bytes.length; i += chunk) {
      binary += String.fromCharCode.apply(
        null,
        bytes.subarray(i, i + chunk)
      );
    }
    return btoa(binary);
  }

  function buildCode() {
    var envelope = buildEnvelope();
    var json = JSON.stringify(envelope);
    var bytes = new TextEncoder().encode(json);
    state.code = PREFIX + bytesToBase64(bytes);
    return state.code;
  }

  // ---------- UI ----------

  function injectStyles() {
    if (document.getElementById(STYLE_ID)) return;
    var style = document.createElement("style");
    style.id = STYLE_ID;
    style.textContent = [
      "#" + BANNER_ID + "{position:sticky;top:0;z-index:2000;display:flex;flex-wrap:wrap;",
      "align-items:center;justify-content:center;gap:.5rem .75rem;padding:.55rem .75rem;",
      "background:#0b3d91;color:#fff;font:600 14px/1.35 system-ui,-apple-system,'Segoe UI',sans-serif;",
      "text-align:center;box-shadow:0 2px 10px rgba(0,0,0,.25)}",
      "#" + BANNER_ID + " .lm-text{max-width:46rem}",
      "#" + BANNER_ID + " .lm-actions{display:flex;flex-wrap:wrap;gap:.4rem;justify-content:center}",
      "." + "lm-btn{display:inline-flex;align-items:center;justify-content:center;min-height:36px;",
      "padding:.35rem .8rem;border-radius:999px;border:1px solid rgba(255,255,255,.75);",
      "background:transparent;color:#fff;font:inherit;text-decoration:none;cursor:pointer}",
      "." + "lm-btn.lm-primary{background:#ffd166;border-color:#ffd166;color:#3d2c00}",
      "." + "lm-btn:hover{filter:brightness(1.08)}",
      "#" + MODAL_ID + "{position:fixed;inset:0;z-index:3000;display:flex;align-items:center;",
      "justify-content:center;padding:1rem;background:rgba(0,0,0,.6)}",
      "#" + MODAL_ID + "[hidden]{display:none}",
      "#" + MODAL_ID + " .lm-dialog{width:min(720px,100%);max-height:92vh;overflow:auto;",
      "background:#fff;color:#1f2937;border-radius:16px;padding:1rem 1.1rem;",
      "box-shadow:0 20px 60px rgba(0,0,0,.35);font:400 15px/1.45 system-ui,-apple-system,'Segoe UI',sans-serif}",
      "#" + MODAL_ID + " h2{margin:.1rem 0 .5rem;font-size:1.2rem}",
      "#" + MODAL_ID + " p{margin:.45rem 0}",
      "#" + MODAL_ID + " ol{margin:.5rem 0 .75rem 1.15rem;padding:0}",
      "#" + MODAL_ID + " li{margin:.2rem 0}",
      "#" + MODAL_ID + " textarea{width:100%;min-height:9rem;resize:vertical;padding:.6rem;",
      "border:1px solid #cbd5e1;border-radius:10px;font:12px/1.35 ui-monospace,monospace;",
      "background:#f8fafc;color:#0f172a;word-break:break-all}",
      "#" + MODAL_ID + " .lm-actions{display:flex;flex-wrap:wrap;gap:.5rem;margin-top:.7rem}",
      "#" + MODAL_ID + " .lm-btn{border-color:#94a3b8;color:#1f2937}",
      "#" + MODAL_ID + " .lm-btn.lm-primary{background:#0b3d91;border-color:#0b3d91;color:#fff}",
      "#" + MODAL_ID + " .lm-status{font-size:.85rem;color:#475569;margin-top:.35rem}",
      "#" + MODAL_ID + " .lm-error{color:#b91c1c;font-weight:600}",
      "@media (max-width:520px){#" + BANNER_ID + "{font-size:13px;padding:.5rem}",
      "#" + MODAL_ID + " .lm-dialog{padding:.85rem}}",
    ].join("");
    document.head.appendChild(style);
  }

  function makeButton(label, className) {
    var b = document.createElement("button");
    b.type = "button";
    b.className = "lm-btn" + (className ? " " + className : "");
    b.textContent = label;
    return b;
  }

  function makeLink(label, href, className) {
    var a = document.createElement("a");
    a.className = "lm-btn" + (className ? " " + className : "");
    a.href = href;
    a.target = "_blank";
    a.rel = "noopener";
    a.textContent = label;
    return a;
  }

  function showBanner() {
    if (document.getElementById(BANNER_ID)) return;
    var dismissed = false;
    try {
      dismissed = !!localStorage.getItem(DISMISS_KEY);
    } catch (e) {}
    if (dismissed && location.search.indexOf("migrar=1") === -1) return;

    var banner = document.createElement("div");
    banner.id = BANNER_ID;
    banner.setAttribute("role", "region");
    banner.setAttribute("aria-label", "Aviso de migração");

    var text = document.createElement("div");
    text.className = "lm-text";
    text.textContent =
      "O jogo mudou! Agora ele está em anagramas.pensemais.net. Antes de ir, exporte seu progresso.";

    var actions = document.createElement("div");
    actions.className = "lm-actions";

    var go = makeLink("Ir para o novo site", NEW_SITE_URL, "lm-primary");
    var exportBtn = makeButton("Exportar progresso");
    exportBtn.addEventListener("click", openModal);

    var close = makeButton("Agora não");
    close.setAttribute("aria-label", "Fechar aviso");
    close.addEventListener("click", function () {
      try {
        localStorage.setItem(DISMISS_KEY, new Date().toISOString());
      } catch (e) {}
      banner.remove();
    });

    actions.appendChild(go);
    actions.appendChild(exportBtn);
    actions.appendChild(close);
    banner.appendChild(text);
    banner.appendChild(actions);
    // impede que teclas do aviso cheguem ao handler global do jogo
    banner.addEventListener("keydown", function (e) {
      e.stopPropagation();
    });
    document.body.insertBefore(banner, document.body.firstChild);
  }

  function addNavItems() {
    var nav = document.querySelector(".navbar-nav");
    if (!nav || nav.querySelector("[data-lm-nav]")) return;
    var li = document.createElement("li");
    li.className = "nav-item";
    li.setAttribute("data-lm-nav", "1");
    var link = document.createElement("a");
    link.className = "nav-link";
    link.href = NEW_SITE_URL;
    link.target = "_blank";
    link.rel = "noopener";
    link.textContent = "Novo site";
    li.appendChild(link);
    nav.appendChild(li);

    var li2 = document.createElement("li");
    li2.className = "nav-item";
    li2.setAttribute("data-lm-nav", "1");
    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "nav-link";
    btn.textContent = "Exportar progresso";
    btn.style.background = "none";
    btn.style.border = "0";
    btn.addEventListener("click", openModal);
    li2.appendChild(btn);
    nav.appendChild(li2);
  }

  function openModal() {
    injectStyles();
    var code;
    try {
      code = buildCode();
    } catch (e) {
      window.alert("Não foi possível ler o progresso salvo neste navegador.");
      return;
    }

    var modal = document.getElementById(MODAL_ID);
    if (modal) modal.remove();

    modal = document.createElement("div");
    modal.id = MODAL_ID;
    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-modal", "true");
    modal.setAttribute("aria-labelledby", MODAL_ID + "-title");

    var dialog = document.createElement("div");
    dialog.className = "lm-dialog";

    var title = document.createElement("h2");
    title.id = MODAL_ID + "-title";
    title.textContent = "Leve seu progresso para o novo jogo";

    var intro = document.createElement("p");
    intro.textContent =
      state.games > 0
        ? "Encontramos " +
          state.games +
          " jogo(s) salvo(s) neste navegador. O código abaixo contém todo o seu progresso."
        : "Não encontramos jogos salvos neste navegador. Você pode ir direto para o novo site.";

    var steps = document.createElement("ol");
    [
      "Copie o código abaixo (ou baixe o arquivo).",
      "Abra anagramas.pensemais.net e vá em Opções → Importar progresso.",
      "Cole o código (ou envie o arquivo) e confirme a importação.",
    ].forEach(function (t) {
      var li = document.createElement("li");
      li.textContent = t;
      steps.appendChild(li);
    });

    var textarea = document.createElement("textarea");
    textarea.readOnly = true;
    textarea.spellcheck = false;
    textarea.value = code;
    textarea.setAttribute("aria-label", "Código de exportação do progresso");
    textarea.addEventListener("keydown", function (e) {
      e.stopPropagation();
      if (e.key === "Escape") closeModal();
    });
    textarea.addEventListener("click", function () {
      textarea.select();
    });

    var status = document.createElement("div");
    status.className = "lm-status";
    status.textContent =
      "Formato " +
      ENVELOPE_FORMAT +
      " v" +
      ENVELOPE_VERSION +
      " • " +
      code.length.toLocaleString("pt-BR") +
      " caracteres" +
      (state.skipped ? " • " + state.skipped + " save(s) ignorado(s)" : "");

    var actions = document.createElement("div");
    actions.className = "lm-actions";

    var copy = makeButton("Copiar código", "lm-primary");
    copy.addEventListener("click", function () {
      var done = function () {
        status.textContent = "Código copiado.";
        status.className = "lm-status";
      };
      var fail = function () {
        textarea.focus();
        textarea.select();
        status.textContent =
          "Não foi possível copiar automaticamente. O código está selecionado: use Ctrl+C.";
        status.className = "lm-status lm-error";
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(code).then(done, fail);
      } else {
        try {
          textarea.focus();
          textarea.select();
          document.execCommand("copy") ? done() : fail();
        } catch (e) {
          fail();
        }
      }
    });

    var download = makeButton("Baixar arquivo .txt");
    download.addEventListener("click", function () {
      try {
        var blob = new Blob([code], { type: "text/plain;charset=utf-8" });
        var url = URL.createObjectURL(blob);
        var a = document.createElement("a");
        var stamp = new Date().toISOString().slice(0, 10).replace(/-/g, "");
        a.href = url;
        a.download = "anagramas-progresso-" + stamp + ".txt";
        document.body.appendChild(a);
        a.click();
        a.remove();
        setTimeout(function () {
          URL.revokeObjectURL(url);
        }, 2000);
      } catch (e) {
        status.textContent = "Não foi possível baixar o arquivo.";
        status.className = "lm-status lm-error";
      }
    });

    var go = makeLink("Ir para o novo site", NEW_SITE_URL, "lm-primary");

    var close = makeButton("Fechar");
    close.addEventListener("click", closeModal);

    actions.appendChild(copy);
    actions.appendChild(download);
    actions.appendChild(go);
    actions.appendChild(close);

    dialog.appendChild(title);
    dialog.appendChild(intro);
    dialog.appendChild(steps);
    dialog.appendChild(textarea);
    dialog.appendChild(status);
    dialog.appendChild(actions);
    modal.appendChild(dialog);

    modal.addEventListener("click", function (e) {
      if (e.target === modal) closeModal();
    });
    modal.addEventListener("keydown", function (e) {
      e.stopPropagation();
      if (e.key === "Escape") closeModal();
    });

    document.body.appendChild(modal);
    textarea.focus();
    textarea.select();
    setTimeout(function () {
      textarea.scrollTop = 0;
    }, 0);
  }

  function closeModal() {
    var modal = document.getElementById(MODAL_ID);
    if (modal) modal.remove();
  }

  function init() {
    injectStyles();
    showBanner();
    addNavItems();
  }

  // exposto para depuração/testes automatizados
  window.AnagramasProgressExport = {
    buildCode: function () {
      return buildCode();
    },
    readSaves: readSaves,
    version: ENVELOPE_VERSION,
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
