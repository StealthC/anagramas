(this["webpackJsonpanagrama-app"]=this["webpackJsonpanagrama-app"]||[]).push([[0],{51:function(e,t,a){},52:function(e,t,a){},81:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(18),s=a.n(c),o=(a(51),a(84)),i=a(9),u=a(6),l=(a(52),a(5)),d=a.n(l),j=a(11),b=a(15),m=a(83),f=a(10),p=a(33),O=a.n(p),g=a(26),h=a.n(g);function v(e){var t=localStorage.getItem("saved:"+e);return t?JSON.parse(t):null}function x(){var e=Object.keys(localStorage).filter((function(e){return e.startsWith("saved")})).map((function(e){return JSON.parse(localStorage.getItem(e))})).sort((function(e,t){return e.updated.localeCompare(t.updated)}));return 0===e.length?null:e[e.length-1].anagram}function w(e){var t=v(e);return t?{saved:!0,solved:t.solved}:{saved:!1,solved:!1}}function k(e){var t=v(e.word.anagram);t?(t.game=e,t.updated=(new Date).toJSON(),t.solved=void 0===e.solutions.find((function(e){return!e.solved})),localStorage.setItem("saved:"+e.word.anagram,JSON.stringify(t))):localStorage.setItem("saved:"+e.word.anagram,JSON.stringify({anagram:e.word.anagram,created:(new Date).toJSON(),updated:(new Date).toJSON(),game:e,solved:void 0===e.solutions.find((function(e){return!e.solved}))}))}function y(e){return N.apply(this,arguments)}function N(){return(N=Object(j.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("".concat("https://stealthc.github.io/anagramas","/dump/").concat(t,".json?timestamp=").concat((new Date).getTime()));case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(){return C.apply(this,arguments)}function C(){return(C=Object(j.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("".concat("https://stealthc.github.io/anagramas","/dump/index.json?timestamp=").concat((new Date).getTime()));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function L(){return W.apply(this,arguments)}function W(){return(W=Object(j.a)(d.a.mark((function e(){var t,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S();case 2:return t=e.sent,a=[],t.byDate.reverse().forEach((function(e){a.find((function(t){return e.anagram===t.anagrama}))||a.push(Object(f.a)(Object(f.a)({},w(e.anagram)),{},{anagrama:e.anagram}))})),t.anagrams.forEach((function(e){a.find((function(t){return e===t.anagrama}))||a.push(Object(f.a)(Object(f.a)({},w(e)),{},{anagrama:e}))})),e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function D(){return J.apply(this,arguments)}function J(){return(J=Object(j.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S();case 2:return t=e.sent,e.abrupt("return",t.byDate[t.byDate.length-1].anagram);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function E(e){return{word:{anagram:e.palavra,currentWord:"",letters:h.a.shuffle(e.palavra.split("")).map((function(e,t){return{letter:e,used:!1,index:t}}))},solutions:e.palavras.map((function(t,a){return{solution:t,normalizedSolution:e.palavras_normalized[a],solved:!1}}))}}var U=a(4),I=a.n(U),G=a(1);function z(){var e=Object(n.useState)(null),t=Object(b.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(null),s=Object(b.a)(c,2),o=s[0],u=s[1];return Object(n.useEffect)((function(){Object(j.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=r,e.next=4,L();case 4:e.t1=e.sent,(0,e.t0)(e.t1),e.next=11;break;case 8:e.prev=8,e.t2=e.catch(0),u("N\xe3o foi poss\xedvel carregar a lista de jogos.");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()}),[]),o?Object(G.jsx)("div",{children:o}):a?Object(G.jsx)("div",{className:"row",children:a.map((function(e){return Object(G.jsx)(m.a,{className:I()(["btn-lg btn-block",{"btn-primary":e.saved,"btn-secondary":!e.saved,"btn-success":e.solved}]),as:i.b,to:"/game/".concat(e.anagrama),children:e.anagrama.toUpperCase()},e.anagrama)}))}):Object(G.jsx)("div",{children:"Carregando..."})}var A=a(13),B=a(24),H=function(){return function(){var e=Object(j.a)(d.a.mark((function e(t,a){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:k(a().anagramaGame);case 1:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()},T=Object(B.b)("anagramas/shuffleLetters",function(){var e=Object(j.a)(d.a.mark((function e(t,a){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.getState().anagramaGame.word.letters,e.abrupt("return",h.a.shuffle(n).map((function(e,t){return Object(f.a)(Object(f.a)({},e),{},{index:t})})));case 2:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),M=Object(B.c)({name:"anagramaGame",initialState:{solutions:[],word:{anagram:"",currentWord:"",letters:[]}},reducers:{setAnagramaData:function(e,t){return t.payload},clearLetters:function(e){e.word.currentWord="",e.word.letters=e.word.letters.map((function(e){return Object(f.a)(Object(f.a)({},e),{},{used:!1})}))},selectLetter:function(e,t){var a=t.payload,n=a.letter,r=a.index;if(void 0===r&&(r=e.word.letters.findIndex((function(e){return!e.used&&e.letter.toUpperCase()===n.toUpperCase()}))),r>=0){e.word.letters[r].used=!0,e.word.currentWord+=n.toUpperCase();var c=e.solutions.findIndex((function(t){return!t.solved&&t.normalizedSolution.toUpperCase()===e.word.currentWord.toUpperCase()}));c>=0&&(e.solutions[c].solved=!0,e.word.currentWord="",e.word.letters=e.word.letters.map((function(e){return Object(f.a)(Object(f.a)({},e),{},{used:!1})})))}}},extraReducers:function(e){e.addCase(T.fulfilled,(function(e,t){var a=t.payload;e.word.letters=a}))}}),F=M.actions,P=F.setAnagramaData,R=F.clearLetters,$=F.selectLetter,_=function(e){return e.anagramaGame.word},q=function(e){return e.anagramaGame.solutions},K=M.reducer;function Q(e){var t=e.solution,a=e.solved;return Object(G.jsx)("div",{className:I()(["mx-1",{"font-weight-bold":a}]),style:{lineBreak:"loose",maxWidth:"10em",display:"block"},children:a?t.toUpperCase():"?".repeat(t.length)})}function V(){var e=Object(A.c)(q);return Object(G.jsx)("div",{className:"card",children:Object(G.jsx)("div",{className:" card-body",children:Object(G.jsx)("div",{className:"row d-flex align-items-start text-center flex-column",style:{minHeight:"5em",maxHeight:"calc(100vh - 25rem)",overflow:"auto"},children:e.map((function(e){return Object(G.jsx)(Q,Object(f.a)({},e),e.solution)}))})})})}function X(e){var t=Object(A.b)(),a=e.letter,n=e.index,r=e.used;return Object(G.jsx)(m.a,{className:"mx-1 mt-2 pd-0 btn-lg shadow",style:{width:"2em",height:"2em",lineHeight:"2em",textAlign:"center",verticalAlign:"middle",padding:"0",fontSize:"2em"},disabled:r,onClick:function(){t($({letter:a,index:n})),t(H())},children:a.toUpperCase()})}function Y(){var e=Object(A.b)(),t=Object(A.c)(_),a=t.currentWord,n=t.letters;return Object(G.jsxs)("div",{children:[Object(G.jsx)("div",{className:"row",children:Object(G.jsxs)("div",{className:"col-12 text-center",children:[n.map((function(e){return Object(G.jsx)(X,Object(f.a)({},e),e.letter+e.index)})),Object(G.jsx)(m.a,{className:"btn-warning mt-2",onClick:function(){e(T()),e(H())},children:"Misturar"})]})}),Object(G.jsx)("div",{className:"row justify-content-md-center mt-2",children:Object(G.jsxs)("div",{className:"col-12 col-md-6 text-center h2 alert alert-info",children:[a," ",Object(G.jsx)(m.a,{className:"btn-danger float-right",onClick:function(){e(R()),e(H())},disabled:""===t.currentWord,children:"Limpar"})]})})]})}function Z(){var e=Object(A.b)(),t=Object(n.useCallback)((function(t){if(1===t.key.length){var a=t.key.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toUpperCase();e($({letter:a})),e(H())}else"Backspace"===t.key&&(e(R()),e(H()))}),[e]);return Object(n.useEffect)((function(){return window.addEventListener("keydown",t),function(){window.removeEventListener("keydown",t)}}),[t]),Object(G.jsxs)("div",{className:"mt-2",children:[Object(G.jsx)(Y,{}),Object(G.jsx)(V,{})]})}function ee(){var e=Object(A.b)(),t=Object(u.g)().anagrama,a=Object(n.useState)(!1),r=Object(b.a)(a,2),c=r[0],s=r[1],o=Object(n.useState)(null),i=Object(b.a)(o,2),l=i[0],m=i[1];return Object(n.useEffect)((function(){Object(j.a)(d.a.mark((function a(){var n,r,c;return d.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(n=t.split("").sort().join(""),!(r=v(n))){a.next=7;break}e(P(r.game)),s(!0),a.next=20;break;case 7:return a.prev=7,a.t0=E,a.next=11,y(n);case 11:a.t1=a.sent,c=(0,a.t0)(a.t1),e(P(c)),s(!0),a.next=20;break;case 17:a.prev=17,a.t2=a.catch(7),m("Os dados deste jogo n\xe3o puderam ser carregados.");case 20:case"end":return a.stop()}}),a,null,[[7,17]])})))()}),[t,e]),null!==l?Object(G.jsx)("div",{children:l}):c?Object(G.jsx)("div",{children:Object(G.jsx)(Z,{})}):Object(G.jsxs)("div",{children:["Carregando: ",t]})}function te(){var e=Object(n.useState)(null),t=Object(b.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(null),s=Object(b.a)(c,2),o=s[0],i=s[1];return Object(n.useEffect)((function(){Object(j.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=r,e.next=4,D();case 4:e.t1=e.sent,(0,e.t0)(e.t1),e.next=11;break;case 8:e.prev=8,e.t2=e.catch(0),i("Ocorreu um erro!");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()}),[]),null!=o?Object(G.jsx)(u.a,{to:"/"}):null!=a?Object(G.jsx)(u.a,{to:"/game/".concat(a)}):Object(G.jsx)("div",{children:"carregando..."})}function ae(){var e=Object(n.useState)(null),t=Object(b.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(null),s=Object(b.a)(c,2),o=s[0],i=s[1];return Object(n.useEffect)((function(){null===x()?i("N\xe3o h\xe1 jogos salvos!"):r(x())}),[]),null!=o?Object(G.jsx)(u.a,{to:"/"}):null!=a?Object(G.jsx)(u.a,{to:"/game/".concat(a)}):Object(G.jsx)("div",{children:"carregando..."})}function ne(){return Object(G.jsxs)("div",{className:"mt-5",children:[Object(G.jsx)(m.a,{className:"btn-lg btn-block",as:i.b,to:"/game/latest",children:"Ir para a palavra mais recente"}),Object(G.jsx)(m.a,{className:"btn-lg btn-block",as:i.b,to:"/game/continue",children:"Continuar o \xfaltimo jogo salvo"}),Object(G.jsx)(m.a,{className:"btn-lg btn-block",as:i.b,to:"/game/list",children:"Listar todos os jogos"})]})}var re=a(85),ce=a(86);function se(){return Object(G.jsxs)(re.a,{bg:"light",variant:"light",expand:"md",children:[Object(G.jsx)(re.a.Brand,{as:i.b,to:"/",children:"Anagramas"}),Object(G.jsx)(re.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(G.jsx)(re.a.Collapse,{id:"basic-navbar-nav",children:Object(G.jsxs)(ce.a,{className:"mr-auto",children:[Object(G.jsx)(ce.a.Link,{as:i.b,to:"/game/latest",children:"\xdaltima Palavra"}),Object(G.jsx)(ce.a.Link,{as:i.b,to:"/game/continue",children:"Continuar Jogo Salvo"}),Object(G.jsx)(ce.a.Link,{as:i.b,to:"/game/list",children:"Lista de Jogos"})]})})]})}var oe=function(){return Object(G.jsxs)(i.a,{children:[Object(G.jsx)(se,{}),Object(G.jsx)(o.a,{fluid:!0,children:Object(G.jsxs)(u.d,{children:[Object(G.jsx)(u.b,{path:"/",exact:!0,children:Object(G.jsx)(ne,{})}),Object(G.jsx)(u.b,{path:"/game/continue",exact:!0,children:Object(G.jsx)(ae,{})}),Object(G.jsx)(u.b,{path:"/game/list",exact:!0,children:Object(G.jsx)(z,{})}),Object(G.jsx)(u.b,{path:"/game/latest",exact:!0,children:Object(G.jsx)(te,{})}),Object(G.jsx)(u.b,{path:"/game/:anagrama",children:Object(G.jsx)(ee,{})})]})})]})},ie=Object(B.a)({reducer:{anagramaGame:K}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(G.jsx)(r.a.StrictMode,{children:Object(G.jsx)(A.a,{store:ie,children:Object(G.jsx)(oe,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[81,1,2]]]);
//# sourceMappingURL=main.d0169e4b.chunk.js.map