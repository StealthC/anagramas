(this["webpackJsonpanagrama-app"]=this["webpackJsonpanagrama-app"]||[]).push([[0],{42:function(e,t,a){},43:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(19),s=a.n(c),o=(a(42),a(70)),u=a(14),i=a(3),l=(a(43),a(5)),d=a.n(l),j=a(11),b=a(13),p=a(7),f=a(12),m=a(18),O=a(21),h=a.n(O);function g(e){var t=localStorage.getItem("saved:"+e);return t?JSON.parse(t):null}function v(){var e=Object.keys(localStorage).filter((function(e){return e.startsWith("saved")})).map((function(e){return JSON.parse(localStorage.getItem(e))})).sort((function(e,t){return e.updated.localeCompare(t.updated)}));return 0===e.length?null:e[e.length-1].anagram}function x(e){var t=g(e.word.anagram);t?(t.game=e,t.updated=(new Date).toJSON(),localStorage.setItem("saved:"+e.word.anagram,JSON.stringify(t))):localStorage.setItem("saved:"+e.word.anagram,JSON.stringify({anagram:e.word.anagram,created:(new Date).toJSON(),updated:(new Date).toJSON(),game:e,solved:null===e.solutions.find((function(e){return!e.solved}))}))}var w=function(){return function(){var e=Object(j.a)(d.a.mark((function e(t,a){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:x(a().anagramaGame);case 1:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()},k=Object(m.b)("anagramas/shuffleLetters",function(){var e=Object(j.a)(d.a.mark((function e(t,a){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.getState().anagramaGame.word.letters,e.abrupt("return",h.a.shuffle(n).map((function(e,t){return Object(f.a)(Object(f.a)({},e),{},{index:t})})));case 2:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),y=Object(m.c)({name:"anagramaGame",initialState:{solutions:[],word:{anagram:"",currentWord:"",letters:[]}},reducers:{setAnagramaData:function(e,t){return t.payload},clearLetters:function(e){e.word.currentWord="",e.word.letters=e.word.letters.map((function(e){return Object(f.a)(Object(f.a)({},e),{},{used:!1})}))},selectLetter:function(e,t){var a=t.payload,n=a.letter,r=a.index;if(void 0===r&&(r=e.word.letters.findIndex((function(e){return!e.used&&e.letter.toUpperCase()===n.toUpperCase()}))),r>=0){e.word.letters[r].used=!0,e.word.currentWord+=n.toUpperCase();var c=e.solutions.findIndex((function(t){return!t.solved&&t.normalizedSolution.toUpperCase()===e.word.currentWord.toUpperCase()}));c>=0&&(e.solutions[c].solved=!0,e.word.currentWord="",e.word.letters=e.word.letters.map((function(e){return Object(f.a)(Object(f.a)({},e),{},{used:!1})})))}}},extraReducers:function(e){e.addCase(k.fulfilled,(function(e,t){var a=t.payload;e.word.letters=a}))}}),S=y.actions,N=S.setAnagramaData,C=S.clearLetters,W=S.selectLetter,J=function(e){return e.anagramaGame.word},L=function(e){return e.anagramaGame.solutions},D=y.reducer,I=a(26),U=a.n(I);function E(e){return G.apply(this,arguments)}function G(){return(G=Object(j.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U.a.get("".concat("https://stealthc.github.io/anagramas","/dump/").concat(t,".json"));case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function z(){return A.apply(this,arguments)}function A(){return(A=Object(j.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U.a.get("".concat("https://stealthc.github.io/anagramas","/dump/index.json"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function B(){return H.apply(this,arguments)}function H(){return(H=Object(j.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z();case 2:return t=e.sent,e.abrupt("return",t.byDate[t.byDate.length-1].anagram);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function M(e){return{word:{anagram:e.palavra,currentWord:"",letters:h.a.shuffle(e.palavra.split("").map((function(e,t){return{letter:e,used:!1,index:t}})))},solutions:e.palavras.map((function(t,a){return{solution:t,normalizedSolution:e.palavras_normalized[a],solved:!1}}))}}var F=a(15),R=a.n(F),$=a(1);function _(e){var t=e.solution,a=e.solved;return Object($.jsx)("div",{className:R()(["col-3",{"font-weight-bold":a}]),children:a?t.toUpperCase():"?".repeat(t.length)})}function q(){var e=Object(p.c)(L);return Object($.jsx)("div",{className:"row",style:{maxHeight:"50vh"},children:e.map((function(e){return Object($.jsx)(_,Object(f.a)({},e),e.solution)}))})}var K=a(71);function P(e){var t=Object(p.b)(),a=e.letter,n=e.index,r=e.used;return Object($.jsx)(K.a,{className:"mr-2 pd-0 btn-lg",style:{width:"2em",height:"2em",lineHeight:"2em",textAlign:"center",verticalAlign:"middle",padding:"0",fontSize:"2em"},disabled:r,onClick:function(){t(W({letter:a,index:n})),t(w())},children:a.toUpperCase()})}function Q(){var e=Object(p.b)(),t=Object(p.c)(J),a=t.currentWord,n=t.letters;return Object($.jsxs)("div",{children:[Object($.jsx)("div",{className:"row",children:Object($.jsxs)("div",{className:"col-12 text-center",children:[n.map((function(e){return Object($.jsx)(P,Object(f.a)({},e),e.letter+e.index)})),Object($.jsx)(K.a,{className:"btn-warning",onClick:function(){e(k()),e(w())},children:"Misturar"})]})}),Object($.jsx)("div",{className:"row",children:Object($.jsxs)("div",{className:"col-12 text-center h2",children:[a," ",Object($.jsx)(K.a,{className:"btn-danger",onClick:function(){e(C()),e(w())},disabled:""===t.currentWord,children:"Limpar"})]})})]})}function T(){var e=Object(p.b)(),t=Object(n.useCallback)((function(t){if(1===t.key.length){var a=t.key.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toUpperCase();e(W({letter:a}))}else"Backspace"===t.key&&e(C())}),[e]);return Object(n.useEffect)((function(){return window.addEventListener("keydown",t),function(){window.removeEventListener("keydown",t)}}),[t]),Object($.jsxs)("div",{className:"mt-5",children:[Object($.jsx)(Q,{}),Object($.jsx)(q,{})]})}function V(){var e=Object(p.b)(),t=Object(i.g)().anagrama,a=Object(n.useState)(!1),r=Object(b.a)(a,2),c=r[0],s=r[1],o=Object(n.useState)(null),u=Object(b.a)(o,2),l=u[0],f=u[1];return Object(n.useEffect)((function(){Object(j.a)(d.a.mark((function a(){var n,r,c;return d.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(n=t.split("").sort().join(""),!(r=g(n))){a.next=7;break}e(N(r.game)),s(!0),a.next=20;break;case 7:return a.prev=7,a.t0=M,a.next=11,E(n);case 11:a.t1=a.sent,c=(0,a.t0)(a.t1),e(N(c)),s(!0),a.next=20;break;case 17:a.prev=17,a.t2=a.catch(7),f("Os dados deste jogo n\xe3o puderam ser carregados.");case 20:case"end":return a.stop()}}),a,null,[[7,17]])})))()}),[t,e]),null!==l?Object($.jsx)("div",{children:l}):c?Object($.jsx)("div",{children:Object($.jsx)(T,{})}):Object($.jsxs)("div",{children:["Carregando: ",t]})}function X(){var e=Object(n.useState)(null),t=Object(b.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(null),s=Object(b.a)(c,2),o=s[0],u=s[1];return Object(n.useEffect)((function(){Object(j.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=r,e.next=4,B();case 4:e.t1=e.sent,(0,e.t0)(e.t1),e.next=11;break;case 8:e.prev=8,e.t2=e.catch(0),u("Ocorreu um erro!");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()}),[]),null!=o?Object($.jsx)(i.a,{to:"/"}):null!=a?Object($.jsx)(i.a,{to:"/game/".concat(a)}):Object($.jsx)("div",{children:"carregando..."})}function Y(){var e=Object(n.useState)(null),t=Object(b.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(null),s=Object(b.a)(c,2),o=s[0],u=s[1];return Object(n.useEffect)((function(){null===v()?u("N\xe3o h\xe1 jogos salvos!"):r(v())}),[]),null!=o?Object($.jsx)(i.a,{to:"/"}):null!=a?Object($.jsx)(i.a,{to:"/game/".concat(a)}):Object($.jsx)("div",{children:"carregando..."})}function Z(){return Object($.jsxs)("div",{className:"mt-5",children:[Object($.jsx)(K.a,{className:"btn-lg btn-block",as:u.b,to:"/game/latest",children:"Ir para a palavra mais recente"}),Object($.jsx)(K.a,{className:"btn-lg btn-block",as:u.b,to:"/game/continue",children:"Continuar o \xfaltimo jogo salvo"}),Object($.jsx)(K.a,{className:"btn-lg btn-block",children:"Listar todos os jogos"})]})}var ee=function(){return Object($.jsx)(u.a,{children:Object($.jsx)(o.a,{children:Object($.jsxs)(i.d,{children:[Object($.jsx)(i.b,{path:"/",exact:!0,children:Object($.jsx)(Z,{})}),Object($.jsx)(i.b,{path:"/game/continue",exact:!0,children:Object($.jsx)(Y,{})}),Object($.jsx)(i.b,{path:"/game/latest",exact:!0,children:Object($.jsx)(X,{})}),Object($.jsx)(i.b,{path:"/game/:anagrama",children:Object($.jsx)(V,{})})]})})})},te=Object(m.a)({reducer:{anagramaGame:D}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object($.jsx)(r.a.StrictMode,{children:Object($.jsx)(p.a,{store:te,children:Object($.jsx)(ee,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[69,1,2]]]);
//# sourceMappingURL=main.ff8d96e3.chunk.js.map