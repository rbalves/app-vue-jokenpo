(function(t){function e(e){for(var r,s,o=e[0],l=e[1],c=e[2],u=0,d=[];u<o.length;u++)s=o[u],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&d.push(n[s][0]),n[s]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);p&&p(e);while(d.length)d.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],r=!0,o=1;o<a.length;o++){var l=a[o];0!==n[l]&&(r=!1)}r&&(i.splice(e--,1),t=s(s.s=a[0]))}return t}var r={},n={app:0},i=[];function s(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=r,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(a,r,function(e){return t[e]}.bind(null,r));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="<app-vue-jokenpo>/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var p=l;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("e623"),a("e379"),a("5dc8"),a("37e1");var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[a("div",{staticClass:"d-flex align-center"},[a("h1",[t._v("JokenPo")])])]),a("v-content",[a("Game")],1)],1)},i=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-layout",{attrs:{"text-center":"",wrap:""}},[a("v-flex",{attrs:{"mb-4":""}},[a("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v(" Rodada "+t._s(t.round)+" / "+t._s(t.rounds)+" ")]),a("h2",[t._v(t._s(t.messageGame))])])],1),a("v-layout",{attrs:{wrap:"","text-center":"","align-center":""}},[a("v-flex",{attrs:{xs5:""}},[a("v-card",{staticClass:"mx-auto",attrs:{"max-width":"344",color:"#385F73"}},[a("v-card-text",[a("p",{staticClass:"display-1 text--primary"},[a("span",{staticStyle:{color:"white"}},[t._v(t._s(t.player1.name))])]),a("p",{staticClass:"display-1 text--primary"},[a("span",{staticStyle:{color:"white"}},[t._v(t._s(t.player1.choice))])]),a("p",{staticClass:"display-1 text--primary"},[a("span",{staticStyle:{color:"white"}},[t._v(t._s(t.player1.points))])])])],1)],1),a("v-flex",{attrs:{xs2:""}},[a("h1",[t._v("X")])]),a("v-flex",{attrs:{xs5:""}},[a("v-card",{staticClass:"mx-auto",attrs:{"max-width":"344",color:"#1F7087"}},[a("v-card-text",[a("p",{staticClass:"display-1 text--primary"},[a("span",{staticStyle:{color:"white"}},[t._v(t._s(t.player2.name))])]),a("p",{staticClass:"display-1 text--primary"},[a("span",{staticStyle:{color:"white"}},[t._v(t._s(t.player2.choice))])]),a("p",{staticClass:"display-1 text--primary"},[a("span",{staticStyle:{color:"white"}},[t._v(t._s(t.player2.points))])])])],1)],1)],1),a("v-layout",{attrs:{wrap:"","text-center":""}},[a("v-flex",{attrs:{xs12:""}},[a("v-btn",{staticStyle:{margin:"1%"},attrs:{color:"primary",large:"",disabled:t.disableButton},on:{click:function(e){return t.clickButtonChoice("Pedra")}}},[t._v(" Pedra ")]),a("v-btn",{staticStyle:{margin:"1%"},attrs:{color:"error",large:"",disabled:t.disableButton},on:{click:function(e){return t.clickButtonChoice("Papel")}}},[t._v(" Papel ")]),a("v-btn",{staticStyle:{margin:"1%"},attrs:{color:"info",large:"",disabled:t.disableButton},on:{click:function(e){return t.clickButtonChoice("Tesoura")}}},[t._v(" Tesoura ")])],1)],1),a("v-layout",{attrs:{wrap:"","text-center":""}},[a("v-flex",{attrs:{xs12:""}},[a("v-btn",{staticStyle:{margin:"1%"},attrs:{color:"success","x-large":"",disabled:t.disableButtonNewGame},on:{click:function(e){return t.newGame()}}},[t._v(" Novo jogo ")])],1)],1),a("v-layout",{attrs:{wrap:"","text-center":""}},[a("v-flex",{attrs:{xs12:""}},[a("h3",[t._v("Desenvolvido por "),a("a",{attrs:{href:"http://rbalves.github.io",target:"_blank"}},[t._v("Rafael Alves")])])])],1)],1)},o=[],l=(a("caad6"),a("2532"),{name:"HelloWorld",data:function(){return{round:1,rounds:5,messageGame:"Aguardando sua escolha...",player1:{name:"Você",choice:"?",points:0},player2:{name:"Máquina",choice:"?",points:0},disableButton:!1,disableButtonNewGame:!1}},methods:{clickButtonChoice:function(t){this.player1.choice=t,this.player2.choice=this.randomChoice(),this.disableButton=!0,this.disableButtonNewGame=!0,this.checkWinnerRound(),setTimeout(this.nextRound,2e3)},randomChoice:function(){var t=["Pedra","Papel","Tesoura"],e=Math.ceil(0),a=Math.floor(2),r=Math.floor(Math.random()*(a-e+1))+e;return t[r]},player1Win:function(){this.player1.points++,this.messageGame="Você ganhou a rodada!"},player2Win:function(){this.player2.points++,this.messageGame="Você perdeu a rodada!"},checkWinnerRound:function(){if(this.player1.choice.includes(this.player2.choice))this.player1.points++,this.player2.points++,this.messageGame="Rodada empatada!";else switch(this.player1.choice){case"Pedra":this.player2.choice.includes("Tesoura")?this.player1Win():this.player2Win();break;case"Papel":this.player2.choice.includes("Pedra")?this.player1Win():this.player2Win();break;default:this.player2.choice.includes("Papel")?this.player1Win():this.player2Win();break}},nextRound:function(){this.round++,this.round<=this.rounds?(this.player1.choice="?",this.player2.choice="?",this.messageGame="Aguardando sua escolha...",this.disableButton=!1,this.disableButtonNewGame=!1):(this.player1.points>this.player2.points?alert("Você ganhou a partida!"):this.player1.points<this.player2.points?alert("Você perdeu a partida!"):alert("Partida empatada!"),this.round--,this.disableButtonNewGame=!1)},newGame:function(){this.round=1,this.player1.choice="?",this.player1.points=0,this.player2.choice="?",this.player2.points=0,this.messageGame="Aguardando sua escolha...",this.disableButton=!1,this.disableButtonNewGame=!1}}}),c=l,p=a("2877"),u=a("6544"),d=a.n(u),h=a("8336"),y=a("b0af"),f=a("99d9"),v=a("a523"),m=a("0e8f"),b=a("a722"),x=Object(p["a"])(c,s,o,!1,null,null,null),g=x.exports;d()(x,{VBtn:h["a"],VCard:y["a"],VCardText:f["a"],VContainer:v["a"],VFlex:m["a"],VLayout:b["a"]});var _={name:"App",components:{Game:g},data:function(){return{}}},w=_,k=a("7496"),C=a("40dc"),B=a("a75b"),P=Object(p["a"])(w,n,i,!1,null,null,null),G=P.exports;d()(P,{VApp:k["a"],VAppBar:C["a"],VContent:B["a"]});a("15f5");var S=a("f309");r["a"].use(S["a"]);var V=new S["a"]({icons:{iconfont:"fa"}});r["a"].config.productionTip=!1,new r["a"]({vuetify:V,render:function(t){return t(G)}}).$mount("#app")}});
//# sourceMappingURL=app.edc91955.js.map