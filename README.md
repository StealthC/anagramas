# Anagramas — app antigo (build estático)

Build do app React publicado em <https://stealthc.net/anagramas/>. Este repositório contém **apenas
o build**; não há código-fonte para rebuildar.

## Migração para o novo app

- O app novo está em <https://anagramas.pensemais.net/> (web + Android).
- `export-progress.js` e a tag `<script src="export-progress.js?v=1" defer></script>` no
  `index.html` são o **aviso de migração + exportador de progresso** (envelope
  `ANAGRAMAS-PROGRESS:v1`), adicionados em 2026-11-17.
- **Não remova** `export-progress.js` nem a tag em pushes de dados: o coletor deve alterar apenas
  `dump/`. Os saves dos jogadores vivem no `localStorage` do navegador e continuam intactos.
- Ao mudar o exportador, atualize o `?v=` da tag para invalidar o cache.
- Rollback: remova a tag e o `export-progress.js` (ou use `tools/legacy-export/install.mjs --remove`
  no monorepo `StealthC/anagramas2`).

O código-fonte do exportador e o instalador ficam em
[`StealthC/anagramas2/tools/legacy-export`](https://github.com/StealthC/anagramas2/tree/main/tools/legacy-export).
