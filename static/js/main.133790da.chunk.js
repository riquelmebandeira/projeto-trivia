(this["webpackJsonptrivia-test"]=this["webpackJsonptrivia-test"]||[]).push([[0],{17:function(e,t,a){e.exports=a.p+"static/media/trivia.466d153e.png"},37:function(e,t){e.exports={NUMBER:3}},38:function(e,t,a){e.exports=a(63)},43:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},54:function(e,t){},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(20),s=a.n(c),o=(a(43),a(24)),i=a(7),l=a(14),u=a(33),m=a(34),d=a(19),p=a(11),h=a.n(p),b=function(){var e,t;return h.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return"https://opentdb.com/api_token.php?command=request",a.next=3,h.a.awrap(fetch("https://opentdb.com/api_token.php?command=request"));case 3:return e=a.sent,t=e.json(),a.abrupt("return",t);case 6:case"end":return a.stop()}}))},v=function(){var e,t,a,n;return h.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return e=localStorage.getItem("token"),t="https://opentdb.com/api.php?amount=5&token=".concat(e),r.next=4,h.a.awrap(fetch(t));case 4:return a=r.sent,r.next=7,h.a.awrap(a.json());case 7:return n=r.sent,r.abrupt("return",n);case 9:case"end":return r.stop()}}))};var f={token:""};var g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_TOKEN":return Object(d.a)({},e,{token:t.payload.token});default:return e}},E=Object(l.combineReducers)({user:g}),O=Object(l.createStore)(E,Object(u.composeWithDevTools)(Object(l.applyMiddleware)(m.a)));window.Cypress&&(window.store=O);var y=O,k=a(15),j=(a(49),a(22)),S=a(2),I=a(3),N=a(5),w=a(4),T=a(9),_=a(6),C=function(e){function t(){return Object(S.a)(this,t),Object(N.a)(this,Object(w.a)(t).apply(this,arguments))}return Object(_.a)(t,e),Object(I.a)(t,[{key:"render",value:function(){var e=this.props,t=e.id,a=e.label,n=e.type,c=e.name,s=e.value,o=e.onChange,i=e.className,l=e.dataTestId;return r.a.createElement("label",{htmlFor:t},r.a.createElement("h5",null,a),r.a.createElement("input",{type:n,name:c,value:s,id:t,onChange:o,className:i,"data-testid":l}))}}]),t}(n.Component);C.defaultProps={type:"text"};var x=C,q=function(e){function t(){return Object(S.a)(this,t),Object(N.a)(this,Object(w.a)(t).apply(this,arguments))}return Object(_.a)(t,e),Object(I.a)(t,[{key:"render",value:function(){var e=this.props,t=e.value,a=e.className,n=e.onClick,c=e.dataTestId,s=e.disabled;return r.a.createElement("button",{type:"button",className:a,onClick:n,disabled:s,"data-testid":c},t)}}]),t}(n.Component);q.defaultProps={disabled:!1,className:""};var J=q,Q=a(17),R=a.n(Q),A=(a(50),a(51),function(e){function t(){return Object(S.a)(this,t),Object(N.a)(this,Object(w.a)(t).apply(this,arguments))}return Object(_.a)(t,e),Object(I.a)(t,[{key:"render",value:function(){return r.a.createElement("footer",null,r.a.createElement("p",null,"\xa9 2021 Copyright - Todos os direitos reservados",r.a.createElement("br",null),"Grupo 16 - Turma 14 Tribo A - Trybe Amanda Zotelli, Dandara Dias, Fl\xe1vio Pires, Maur\xedcio Leite e Riquelme Bandeira"))}}]),t}(n.Component)),B=function(e){function t(){var e;return Object(S.a)(this,t),(e=Object(N.a)(this,Object(w.a)(t).call(this))).state={nameInput:"",emailInput:""},e.handleInput=e.handleInput.bind(Object(T.a)(e)),e.handleClick=e.handleClick.bind(Object(T.a)(e)),e}return Object(_.a)(t,e),Object(I.a)(t,[{key:"handleInput",value:function(e){var t=e.target,a=t.value,n=t.name;this.setState(Object(j.a)({},n,a))}},{key:"handleClick",value:function(){var e=this.state,t=e.nameInput,a=e.emailInput;(0,this.props.addToken)(),localStorage.setItem("state",JSON.stringify({player:{name:t,assertions:0,score:0,gravatarEmail:a}}))}},{key:"render",value:function(){var e=this.handleInput,t=this.handleClick,a=this.state,n=a.nameInput,c=a.emailInput;return r.a.createElement("div",{className:"login__container"},r.a.createElement("div",{className:"login"},r.a.createElement("img",{src:R.a,className:"logo",alt:"Logo",height:"80px"}),r.a.createElement(x,{dataTestId:"input-player-name",id:"name",name:"nameInput",label:"Nome",onChange:e}),r.a.createElement(x,{dataTestId:"input-gravatar-email",id:"email",name:"emailInput",label:"Email",onChange:e,type:"email"}),r.a.createElement(i.b,{to:"/game"},r.a.createElement(J,{dataTestId:"btn-play",disabled:0===n.length||0===c.length,onClick:t,value:"Jogar"})),r.a.createElement(i.b,{to:"/config"},r.a.createElement(J,{dataTestId:"btn-settings",value:"Configura\xe7\xf5es"}))),r.a.createElement(A,null))}}]),t}(n.Component),L=Object(o.b)(null,(function(e){return{addToken:function(t){return e((function(e){var t;return h.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,h.a.awrap(b());case 2:t=a.sent,e({type:"SET_TOKEN",payload:t}),localStorage.setItem("token",t.token);case 5:case"end":return a.stop()}}))}))}}}))(B),M=a(25),D=a(36),F=a(23),P=a.n(F),U=(a(55),function(e){function t(){return Object(S.a)(this,t),Object(N.a)(this,Object(w.a)(t).apply(this,arguments))}return Object(_.a)(t,e),Object(I.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"loading"},"Loading..."),r.a.createElement(A,null))}}]),t}(r.a.Component)),V=function(e){function t(){return Object(S.a)(this,t),Object(N.a)(this,Object(w.a)(t).apply(this,arguments))}return Object(_.a)(t,e),Object(I.a)(t,[{key:"render",value:function(){var e=this.props,t=e.src,a=e.alt,n=e.dataTestId;return r.a.createElement("img",{src:t,alt:a,"data-testid":n})}}]),t}(n.Component);V.defaultProps={dataTestId:""};var W=V,K=(a(56),function(e){function t(){return Object(S.a)(this,t),Object(N.a)(this,Object(w.a)(t).apply(this,arguments))}return Object(_.a)(t,e),Object(I.a)(t,[{key:"render",value:function(){var e=this.props,t=e.player,a=e.score,n=e.src;return r.a.createElement("header",null,r.a.createElement("div",{className:"header__container"},r.a.createElement("div",{className:"header__left"},r.a.createElement(i.b,{to:"/"},r.a.createElement(W,{src:R.a,alt:"Logo"})),r.a.createElement("span",null,"Score:"," "),r.a.createElement("span",{"data-testid":"header-score"},a)),r.a.createElement("div",{className:"header__right"},r.a.createElement("span",{"data-testid":"header-player-name"},"Jogador:"," ",t),r.a.createElement(W,{dataTestId:"header-profile-picture",src:n,alt:"Avatar"}))))}}]),t}(n.Component)),G=(a(57),function(e){function t(){var e;return Object(S.a)(this,t),(e=Object(N.a)(this,Object(w.a)(t).call(this))).state={currentQuestion:0,questionsList:[],seconds:30,disabled:!1,classname:"",userResponse:!1,redirect:!1},e.setQuestionsInState=e.setQuestionsInState.bind(Object(T.a)(e)),e.handleNextBtn=e.handleNextBtn.bind(Object(T.a)(e)),e.handleAlternative=e.handleAlternative.bind(Object(T.a)(e)),e.resetSeconds=e.resetSeconds.bind(Object(T.a)(e)),e.shuffle=e.shuffle.bind(Object(T.a)(e)),e.createTimer=e.createTimer.bind(Object(T.a)(e)),e.calculateScore=e.calculateScore.bind(Object(T.a)(e)),e}return Object(_.a)(t,e),Object(I.a)(t,[{key:"componentDidMount",value:function(){this.createTimer()}},{key:"componentDidUpdate",value:function(e,t){var a=this.state.currentQuestion;1===t.seconds&&this.resetSeconds(),t.currentQuestion!==a&&this.createTimer()}},{key:"setQuestionsInState",value:function(){var e,t;return h.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,h.a.awrap(v());case 2:e=a.sent,t=e.results,this.setState({questionsList:t});case 5:case"end":return a.stop()}}),null,this)}},{key:"setScoreOnStorage",value:function(e){var t=JSON.parse(localStorage.getItem("state")).player,a={player:Object(d.a)({},t,{assertions:t.assertions+1,score:t.score+e})};localStorage.setItem("state",JSON.stringify(a))}},{key:"calculateScore",value:function(){var e,t=this.state,a=t.currentQuestion,n=t.questionsList,r=t.seconds;switch(n[a].difficulty){case"easy":e=1;break;case"medium":e=2;break;case"hard":e=3;break;default:return null}this.setScoreOnStorage(10+r*e)}},{key:"treatAnswersData",value:function(e){var t={value:"correct-answer",alternative:e.correct_answer},a=e.incorrect_answers.map((function(e,t){return{value:"wrong-answer-".concat(t),alternative:e}}));return[Object(d.a)({},t)].concat(Object(M.a)(a))}},{key:"resetSeconds",value:function(){this.setState({seconds:0,disabled:!0,userResponse:!0}),clearInterval(this.cronometerInterval)}},{key:"shuffle",value:function(e){var t=e.map((function(e){return{value:e,sort:Math.random()}})).sort((function(e,t){return e.sort-t.sort})).map((function(e){return e.value}));this.setState({isShuffled:!0,answers:t})}},{key:"createTimer",value:function(){var e=this;this.cronometerInterval=setInterval((function(){e.setState((function(e){return{seconds:e.seconds-1}}))}),1e3)}},{key:"handleNextBtn",value:function(){var e=this.state.currentQuestion;e<4?this.setState((function(e){return{currentQuestion:e.currentQuestion+1,classname:"",userResponse:!1,seconds:30,disabled:!1,isShuffled:!1}})):4===e&&this.setState({redirect:!0})}},{key:"handleAlternative",value:function(e){"correct-answer"===e.target.getAttribute("data-testid")&&this.calculateScore(),this.setState({classname:"answers-reveal",userResponse:!0,disabled:!0}),clearInterval(this.cronometerInterval)}},{key:"renderTimer",value:function(){var e=this.state.seconds;return r.a.createElement("p",null,"Tempo restante: ".concat(e))}},{key:"render",value:function(){var e=this,t=JSON.parse(localStorage.getItem("state")).player,a=P()(t.gravatarEmail).toString(),n=this.state,c=n.currentQuestion,s=n.questionsList,o=n.disabled,i=n.isShuffled,l=n.classname,u=n.userResponse,m=n.answers,d=n.redirect;if(s.length<1)return this.setQuestionsInState(),r.a.createElement(U,null);var p=s[c],h=this.treatAnswersData(p);return i||this.shuffle(h),r.a.createElement(r.a.Fragment,null,d&&r.a.createElement(k.a,{to:"/feedback"}),r.a.createElement(K,{player:t.name,score:t.score,src:"https://www.gravatar.com/avatar/".concat(a)}),r.a.createElement("main",{className:"game__container"},r.a.createElement("div",{className:l},r.a.createElement("div",{className:"game__headings"},r.a.createElement("h4",{"data-testid":"question-category"},p.category),r.a.createElement("p",{"data-testid":"question-text"},Object(D.decode)(p.question))),r.a.createElement("div",{className:"game__alternatives"},m&&m.map((function(t,a){var n=t.value,c=t.alternative;return r.a.createElement(J,{key:a,dataTestId:n,onClick:e.handleAlternative,disabled:o,value:c})}))),r.a.createElement("div",{className:"game__options"},this.renderTimer(),u&&r.a.createElement(J,{dataTestId:"btn-next",value:"Next Question",className:"next-question-btn",onClick:this.handleNextBtn})))),r.a.createElement(A,null))}}]),t}(n.Component)),Z=function(e){function t(){return Object(S.a)(this,t),Object(N.a)(this,Object(w.a)(t).apply(this,arguments))}return Object(_.a)(t,e),Object(I.a)(t,[{key:"render",value:function(){return r.a.createElement("h2",{"data-testid":"settings-title"},"Configura\xe7\xf5es")}}]),t}(n.Component),$=a(37),z=(a(61),function(e){function t(){return Object(S.a)(this,t),Object(N.a)(this,Object(w.a)(t).apply(this,arguments))}return Object(_.a)(t,e),Object(I.a)(t,[{key:"updateRanking",value:function(e,t){var a=e.name,n=e.score,r=JSON.parse(localStorage.getItem("ranking"))||[],c=[].concat(Object(M.a)(r),[{name:a,score:n,picture:t}]);localStorage.setItem("ranking",JSON.stringify(c))}},{key:"feedbackMessage",value:function(){var e=JSON.parse(localStorage.getItem("state")).player,t=e.score,a=e.assertions;return r.a.createElement("p",null,"Voc\xea acertou"," ",r.a.createElement("span",{"data-testid":"feedback-total-question"},a)," ","quest\xf5es. Um total de"," ",r.a.createElement("span",{"data-testid":"feedback-total-score"},t)," ","pontos.")}},{key:"render",value:function(){var e=JSON.parse(localStorage.getItem("state")).player,t=P()(e.gravatarEmail).toString(),a="https://www.gravatar.com/avatar/".concat(t),n=e.score,c=e.assertions;this.updateRanking(e,a);"Voc\xea acertou ".concat(c," quest\xf5es"),"Um total de ".concat(n," pontos");var s="Podia ser melhor...",o="Mandou bem!";return r.a.createElement(r.a.Fragment,null,r.a.createElement(K,{player:e.name,score:n,src:a}),r.a.createElement("main",{className:"feedback__container"},r.a.createElement("section",null,r.a.createElement("h2",{"data-testid":"feedback-text"},c<$.NUMBER?s:o),r.a.createElement("div",{className:"feedback__text"},this.feedbackMessage()),r.a.createElement(i.b,{to:"/ranking"},r.a.createElement(J,{value:"Ver Ranking",dataTestId:"btn-ranking"})),r.a.createElement(i.b,{to:"/"},r.a.createElement(J,{value:"Jogar Novamente",className:"btn-play-again",dataTestId:"btn-play-again"})))),r.a.createElement(A,null))}}]),t}(n.Component)),H=(a(62),function(e){function t(){return Object(S.a)(this,t),Object(N.a)(this,Object(w.a)(t).apply(this,arguments))}return Object(_.a)(t,e),Object(I.a)(t,[{key:"render",value:function(){var e=JSON.parse(localStorage.getItem("ranking")).sort((function(e,t){return t.score-e.score}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("main",{className:"ranking__container"},r.a.createElement("div",{className:"ranking"},r.a.createElement("img",{src:R.a,className:"logo",alt:"Logo",height:"80px"}),r.a.createElement("h2",{"data-testid":"ranking-title"},"Ranking"),r.a.createElement("div",null,e.map((function(e,t){var a=e.name,n=e.score,c=e.picture;return r.a.createElement("div",{className:"ranking__item",key:t},r.a.createElement(W,{src:c,alt:"Avatar"}),r.a.createElement("p",{"data-testid":"player-name"},a),r.a.createElement("p",{"data-testid":"player-score"},n))}))),r.a.createElement(i.b,{to:"/"},r.a.createElement(J,{value:"In\xedcio",dataTestId:"btn-go-home"})))),r.a.createElement(A,null))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(i.a,null,r.a.createElement(o.a,{store:y},r.a.createElement((function(){return r.a.createElement(k.d,null,r.a.createElement(k.b,{exact:!0,path:"/",component:L}),r.a.createElement(k.b,{path:"/game",component:G}),r.a.createElement(k.b,{path:"/config",component:Z}),r.a.createElement(k.b,{path:"/feedback",component:z}),r.a.createElement(k.b,{path:"/ranking",component:H}))}),null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[38,1,2]]]);
//# sourceMappingURL=main.133790da.chunk.js.map