(this["webpackJsonpanagrama-app"]=this["webpackJsonpanagrama-app"]||[]).push([[0],{57:function(e,t,a){},58:function(e,t,a){},87:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(19),s=a.n(c),o=(a(57),a(12)),i=a(7),l=(a(58),a(6)),u=a.n(l),d=a(13),j=a(17),b=a(2),f=a(37),m=a.n(f),x=a(25),p=a.n(x);function h(e){var t=localStorage.getItem("saved:"+e);return t?JSON.parse(t):null}function O(){var e=Object.keys(localStorage).filter((function(e){return e.startsWith("saved")})).map((function(e){return JSON.parse(localStorage.getItem(e))})).sort((function(e,t){return e.updated.localeCompare(t.updated)}));return 0===e.length?null:e[e.length-1].anagram}function v(e){var t=h(e);return t?{saved:!0,solved:t.solved}:{saved:!1,solved:!1}}function g(e){var t=h(e.word.anagram);t?(t.game=e,t.updated=(new Date).toJSON(),t.solved=void 0===e.solutions.find((function(e){return!e.solved})),localStorage.setItem("saved:"+e.word.anagram,JSON.stringify(t))):localStorage.setItem("saved:"+e.word.anagram,JSON.stringify({anagram:e.word.anagram,created:(new Date).toJSON(),updated:(new Date).toJSON(),game:e,solved:void 0===e.solutions.find((function(e){return!e.solved}))}))}function w(e){return y.apply(this,arguments)}function y(){return(y=Object(d.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("".concat("https://stealthc.github.io/anagramas","/dump/").concat(t,".json?timestamp=").concat((new Date).getTime()));case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function N(){return k.apply(this,arguments)}function k(){return(k=Object(d.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("".concat("https://stealthc.github.io/anagramas","/dump/index.json?timestamp=").concat((new Date).getTime()));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(){return L.apply(this,arguments)}function L(){return(L=Object(d.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N();case 2:return t=e.sent,a=[],t.byDate.reverse().forEach((function(e){a.find((function(t){return e.anagram===t.anagrama}))||a.push(Object(b.a)(Object(b.a)({},v(e.anagram)),{},{anagrama:e.anagram,date:e.date}))})),t.anagrams.forEach((function(e){a.find((function(t){return e===t.anagrama}))||a.push(Object(b.a)(Object(b.a)({},v(e)),{},{anagrama:e}))})),e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function C(){return D.apply(this,arguments)}function D(){return(D=Object(d.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N();case 2:return t=e.sent,e.abrupt("return",t.byDate[t.byDate.length-1].anagram);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function W(e){return{word:{anagram:e.palavra,currentWord:"",letters:p.a.shuffle(e.palavra.split("")).map((function(e,t){return{letter:e,used:!1,index:t}}))},solutions:e.palavras.map((function(t,a){return{solution:t,normalizedSolution:e.palavras_normalized[a],solved:!1}}))}}var J=a(4),M=a.n(J),E=a(1);function U(e){var t=e,a=t.date?new Date(t.date).toLocaleDateString():"Desconhecido";return Object(E.jsx)("div",{className:"row",children:Object(E.jsx)("div",{className:"col my-1",children:Object(E.jsxs)("div",{className:M()(["card","text-light",{"bg-primary":t.saved,"bg-secondary":!t.saved,"bg-success":t.solved}]),children:[Object(E.jsxs)("div",{className:"card-header",children:[" ",t.anagrama.toUpperCase()," (",t.anagrama.length," Letras)",Object(E.jsx)(o.b,{className:"btn text-light float-end m-0 p-0",to:"/game/".concat(t.anagrama),children:"Jogar"})]}),Object(E.jsx)("div",{className:"card-body",children:Object(E.jsxs)("ul",{children:[Object(E.jsxs)("li",{children:["Data: ",a]}),Object(E.jsxs)("li",{children:["Salvo: ",t.saved?"Sim":"N\xe3o"]}),Object(E.jsxs)("li",{children:["Finalizado: ",t.solved?"Sim":"N\xe3o"]})]})})]})})},t.anagrama)}function B(){var e=Object(n.useState)(null),t=Object(j.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(null),s=Object(j.a)(c,2),o=s[0],i=s[1];return Object(n.useEffect)((function(){Object(d.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=r,e.next=4,S();case 4:e.t1=e.sent,(0,e.t0)(e.t1),e.next=11;break;case 8:e.prev=8,e.t2=e.catch(0),i("N\xe3o foi poss\xedvel carregar a lista de jogos.");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()}),[]),o?Object(E.jsx)("div",{children:o}):a?Object(E.jsx)("div",{className:"d-flex flex-column",children:a.map(U)}):Object(E.jsx)("div",{children:"Carregando..."})}var I=a(9),G=a(22),z=function(){return function(){var e=Object(d.a)(u.a.mark((function e(t,a){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:g(a().anagramaGame);case 1:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()},A=Object(G.b)("anagramas/shuffleLetters",function(){var e=Object(d.a)(u.a.mark((function e(t,a){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.getState().anagramaGame.word.letters,e.abrupt("return",p.a.shuffle(n).map((function(e,t){return Object(b.a)(Object(b.a)({},e),{},{index:t})})));case 2:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),T=Object(G.b)("anagramas/buySolutionLetter",function(){var e=Object(d.a)(u.a.mark((function e(t,a){var n,r,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n=K(a.getState(),t))||n.solved){e.next=14;break}if(n.partial){e.next=7;break}r=p.a.random(0,n.solution.length-1),a.dispatch(F.actions.buyLetter({solution:t,index:r})),e.next=14;break;case 7:if(!n.partial.includes("?")){e.next=14;break}if(c=p.a.random(0,n.solution.length-1),"?"!==n.partial[c]){e.next=12;break}return a.dispatch(F.actions.buyLetter({solution:t,index:c})),e.abrupt("break",14);case 12:e.next=7;break;case 14:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),F=Object(G.c)({name:"anagramaGame",initialState:{solutions:[],word:{anagram:"",currentWord:"",letters:[]}},reducers:{setAnagramaData:function(e,t){return t.payload},clearLetters:function(e){e.word.currentWord="",e.word.letters=e.word.letters.map((function(e){return Object(b.a)(Object(b.a)({},e),{},{used:!1})}))},selectLetter:function(e,t){var a=t.payload,n=a.letter,r=a.index;if(void 0===r&&(r=e.word.letters.findIndex((function(e){return!e.used&&e.letter.toUpperCase()===n.toUpperCase()}))),r>=0){e.word.letters[r].used=!0,e.word.currentWord+=n.toUpperCase();var c=e.solutions.findIndex((function(t){return!t.solved&&t.normalizedSolution.toUpperCase()===e.word.currentWord.toUpperCase()}));c>=0&&(e.solutions[c].solved=!0,e.word.currentWord="",e.word.letters=e.word.letters.map((function(e){return Object(b.a)(Object(b.a)({},e),{},{used:!1})})))}},buyLetter:function(e,t){var a=t.payload,n=a.solution,r=a.index,c=e.solutions.findIndex((function(e){return e.solution===n})),s=e.solutions[c];if(s&&!s.solved&&r>=0&&r<s.solution.length){s.partial||(s.partial="?".repeat(n.length));var o=s.partial.split("");o[r]=n[r].toUpperCase(),s.partial=o.join(""),s.partial.includes("?")||(s.solved=!0)}}},extraReducers:function(e){e.addCase(A.fulfilled,(function(e,t){var a=t.payload;e.word.letters=a}))}});var P=F.actions,H=P.setAnagramaData,R=P.clearLetters,$=P.selectLetter,_=(P.buyLetter,function(e){return e.anagramaGame.word}),q=function(e){return e.anagramaGame.solutions},K=function(e,t){return e.anagramaGame.solutions.find((function(e){return e.solution===t}))},Q=F.reducer,V=function(){return Object(I.b)()},X=(I.c,Object(G.c)({name:"shop",initialState:{buyLetterMode:!1},reducers:{setBuyMode:function(e,t){e.buyLetterMode=t.payload},toggleBuyMode:function(e){e.buyLetterMode=!e.buyLetterMode}}})),Y=X.actions,Z=Y.setBuyMode,ee=Y.toggleBuyMode,te=function(e){return e.shop.buyLetterMode},ae=X.reducer;function ne(){var e=Object(I.c)(te),t=V();return Object(E.jsx)("button",{onClick:function(){t(ee())},className:M()(["btn","btn-outline-primary","float-end",{active:e}]),style:{lineBreak:"loose",maxWidth:"10em",display:"block"},children:Object(E.jsx)("i",{className:"bi bi-cart"})})}function re(e){var t=V(),a=e.letter,n=e.index,r=e.used;return Object(E.jsx)("button",{className:M()(["m-1 fs-1 btn btn-lg btn-outline-dark shadow letter-box",{active:r}]),style:{width:"2em",height:"2em",lineHeight:"2em",textAlign:"center",verticalAlign:"middle",padding:"0"},onClick:function(e){r||(e.currentTarget.disabled=!0,e.currentTarget.disabled=!1,t($({letter:a,index:n})),t(z()))},children:a.toUpperCase()})}function ce(){var e=V(),t=Object(I.c)(_).letters;return Object(E.jsxs)("div",{className:"d-flex flex-row text-center my-3",children:[Object(E.jsx)("div",{className:"row flex-fill",children:Object(E.jsx)("div",{className:"col",children:t.map((function(e){return Object(E.jsx)(re,Object(b.a)({},e),e.letter+e.index)}))})}),Object(E.jsx)("button",{className:"btn btn-outline-warning mt-2",onClick:function(){e(A()).then((function(){e(z())}))},children:"Misturar"})]})}function se(e){var t=e.solution,a=t.solution,n=t.solved,r=t.partial,c=e.index,s=Object(I.c)(te),o=V();return Object(E.jsx)("div",{className:"col-3 col-md-2 d-grid",children:Object(E.jsx)("button",{id:"sol"+c,onClick:function(){o(T(a)).then((function(){o(Z(!1)),o(z())}))},disabled:!s||n,className:M()(["btn",{"btn-outline-primary":s&&!n},{"btn-success":n},{"btn-outline-danger":r&&!n}]),children:n?a.toUpperCase():r||"?".repeat(a.length)})})}function oe(){var e=Object(I.c)(q);return Object(E.jsx)("div",{className:"row d-flex align-items-start flex-row text-center overflow-auto g-1",children:e.map((function(e,t){return Object(E.jsx)(se,{index:t,solution:e},e.solution)}))})}var ie=a(89);function le(){var e=V(),t=Object(I.c)(_),a=t.currentWord;return""!==t.currentWord?Object(E.jsxs)("div",{className:"d-flex flex-row border border-info text-info",children:[Object(E.jsx)("div",{className:"row flex-fill p-0 m-0",children:Object(E.jsxs)("div",{className:"col text-center my-2",children:[a,"\xa0"]})}),""!==t.currentWord?Object(E.jsx)("div",{className:"row",children:Object(E.jsx)("div",{className:"col",children:Object(E.jsx)(ie.a,{type:"button",className:"btn-close float-end my-3 me-2",onClick:function(){e(R()),e(z())}})})}):null]}):null}function ue(){var e=V(),t=Object(I.c)(q),a=t.length,r=t.filter((function(e){return e.solved})).length,c=Object(n.useCallback)((function(t){if(1===t.key.length){var a=t.key.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toUpperCase();e($({letter:a})),e(z())}else"Backspace"===t.key&&(e(R()),e(z()))}),[e]);return Object(n.useEffect)((function(){return window.addEventListener("keydown",c),function(){window.removeEventListener("keydown",c)}}),[c]),Object(E.jsxs)("div",{className:"container flex-fill d-flex flex-column",children:[Object(E.jsxs)("div",{className:"row card flex-fill bg-light d-flex my-2",children:[Object(E.jsx)("div",{className:"card-header py-0",children:Object(E.jsxs)("div",{className:"row",children:[Object(E.jsxs)("h5",{className:"col-6 my-3",children:["Palavras (",r,"/",a,")"]}),Object(E.jsx)("div",{className:"col-6 my-2",children:Object(E.jsx)(ne,{})})]})}),Object(E.jsx)("div",{className:"row flex-fill",style:{position:"relative"},children:Object(E.jsx)("div",{className:"overflow-auto h-100 w-100 d-flex flex-column p-2",style:{position:"absolute"},children:Object(E.jsx)(oe,{})})})]}),Object(E.jsx)("div",{className:"row",children:Object(E.jsx)("div",{className:"col text-center h1",children:Object(E.jsx)(le,{})})}),Object(E.jsx)("div",{className:"row",children:Object(E.jsx)("div",{className:"col text-center h1",children:Object(E.jsx)(ce,{})})})]})}function de(){var e=Object(I.b)(),t=Object(i.g)().anagrama,a=Object(n.useState)(!1),r=Object(j.a)(a,2),c=r[0],s=r[1],o=Object(n.useState)(null),l=Object(j.a)(o,2),b=l[0],f=l[1];return Object(n.useEffect)((function(){Object(d.a)(u.a.mark((function a(){var n,r,c;return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(n=t.split("").sort().join(""),!(r=h(n))){a.next=7;break}e(H(r.game)),s(!0),a.next=20;break;case 7:return a.prev=7,a.t0=W,a.next=11,w(n);case 11:a.t1=a.sent,c=(0,a.t0)(a.t1),e(H(c)),s(!0),a.next=20;break;case 17:a.prev=17,a.t2=a.catch(7),f("Os dados deste jogo n\xe3o puderam ser carregados.");case 20:case"end":return a.stop()}}),a,null,[[7,17]])})))()}),[t,e]),null!==b?Object(E.jsx)("div",{children:b}):c?Object(E.jsx)(ue,{}):Object(E.jsxs)("div",{children:["Carregando: ",t]})}function je(){var e=Object(n.useState)(null),t=Object(j.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(null),s=Object(j.a)(c,2),o=s[0],l=s[1];return Object(n.useEffect)((function(){Object(d.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=r,e.next=4,C();case 4:e.t1=e.sent,(0,e.t0)(e.t1),e.next=11;break;case 8:e.prev=8,e.t2=e.catch(0),l("Ocorreu um erro!");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()}),[]),null!=o?Object(E.jsx)(i.a,{to:"/"}):null!=a?Object(E.jsx)(i.a,{to:"/game/".concat(a)}):Object(E.jsx)("div",{children:"carregando..."})}function be(){var e=Object(n.useState)(null),t=Object(j.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(null),s=Object(j.a)(c,2),o=s[0],l=s[1];return Object(n.useEffect)((function(){null===O()?l("N\xe3o h\xe1 jogos salvos!"):r(O())}),[]),null!=o?Object(E.jsx)(i.a,{to:"/"}):null!=a?Object(E.jsx)(i.a,{to:"/game/".concat(a)}):Object(E.jsx)("div",{children:"carregando..."})}function fe(){return Object(E.jsx)("div",{className:"d-flex justify-content-center flex-column flex-fill",children:Object(E.jsxs)("div",{className:"d-grid gap-2",children:[Object(E.jsx)(ie.a,{className:"btn-lg",as:o.b,to:"/game/latest",children:"Ir para a palavra mais recente"}),Object(E.jsx)(ie.a,{className:"btn-lg",as:o.b,to:"/game/continue",children:"Continuar o \xfaltimo jogo salvo"}),Object(E.jsx)(ie.a,{className:"btn-lg",as:o.b,to:"/game/list",children:"Listar todos os jogos"})]})})}var me=a(90),xe=a(91);function pe(){return Object(E.jsxs)(me.a,{bg:"light",variant:"light",expand:"md",children:[Object(E.jsx)(me.a.Brand,{as:o.b,to:"/",children:"Anagramas"}),Object(E.jsx)(me.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(E.jsx)(me.a.Collapse,{id:"basic-navbar-nav",children:Object(E.jsxs)(xe.a,{className:"mr-auto",children:[Object(E.jsx)(xe.a.Link,{as:o.b,to:"/game/latest",children:"\xdaltima Palavra"}),Object(E.jsx)(xe.a.Link,{as:o.b,to:"/game/continue",children:"Continuar Jogo Salvo"}),Object(E.jsx)(xe.a.Link,{as:o.b,to:"/game/list",children:"Lista de Jogos"})]})})]})}var he=function(){return Object(E.jsx)(o.a,{children:Object(E.jsxs)("div",{className:"container-fluid h-100 d-flex flex-column",children:[Object(E.jsx)("div",{className:"row",children:Object(E.jsx)("div",{className:"col",children:Object(E.jsx)(pe,{})})}),Object(E.jsx)("div",{className:"row flex-fill",children:Object(E.jsx)("div",{className:"col d-flex flex-column",children:Object(E.jsxs)(i.d,{children:[Object(E.jsx)(i.b,{path:"/",exact:!0,children:Object(E.jsx)(fe,{})}),Object(E.jsx)(i.b,{path:"/game/continue",exact:!0,children:Object(E.jsx)(be,{})}),Object(E.jsx)(i.b,{path:"/game/list",exact:!0,children:Object(E.jsx)(B,{})}),Object(E.jsx)(i.b,{path:"/game/latest",exact:!0,children:Object(E.jsx)(je,{})}),Object(E.jsx)(i.b,{path:"/game/:anagrama",component:de})]})})})]})})},Oe=Object(G.a)({reducer:{anagramaGame:Q,shop:ae}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(E.jsx)(r.a.StrictMode,{children:Object(E.jsx)(I.a,{store:Oe,children:Object(E.jsx)(he,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[87,1,2]]]);
//# sourceMappingURL=main.45ab3a5e.chunk.js.map