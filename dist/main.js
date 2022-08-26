"use strict";(self.webpackChunkwebpack_template=self.webpackChunkwebpack_template||[]).push([[179],{426:(e,n,r)=>{r.d(n,{Z:()=>i});var t=r(81),a=r.n(t),o=r(645),s=r.n(o)()(a());s.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap);"]),s.push([e.id,":root {\r\n  --font-lato: 'Lato', sans-serif;\r\n}\r\n\r\nbody {\r\n  background-color: rgba(255, 245, 202, 0.6);\r\n  font-family: var(--font-lato);\r\n  height: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n#main-sec {\r\n  display: flex;\r\n  flex-direction: row;\r\n  gap: 24px;\r\n  align-items: flex-start;\r\n  justify-content: center;\r\n}\r\n\r\n#rec-scores {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  height: 100%;\r\n}\r\n\r\n#add-score-form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 24px;\r\n}\r\n\r\n#score-list {\r\n  list-style-type: none;\r\n  margin: 0;\r\n  padding: 0;\r\n  display: flex;\r\n  flex-direction: column;\r\n  box-shadow: 0 0 4px 2px rgba(39, 39, 39, 0.2);\r\n  gap: 2px;\r\n}\r\n\r\n#btn-sub {\r\n  width: 24%;\r\n  align-self: flex-end;\r\n}\r\n",""]);const i=s},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var r="",t=void 0!==n[5];return n[4]&&(r+="@supports (".concat(n[4],") {")),n[2]&&(r+="@media ".concat(n[2]," {")),t&&(r+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),r+=e(n),t&&(r+="}"),n[2]&&(r+="}"),n[4]&&(r+="}"),r})).join("")},n.i=function(e,r,t,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(t)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(s[c]=!0)}for(var l=0;l<e.length;l++){var u=[].concat(e[l]);t&&s[u[0]]||(void 0!==o&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=o),r&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=r):u[2]=r),a&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=a):u[4]="".concat(a)),n.push(u))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function r(e){for(var r=-1,t=0;t<n.length;t++)if(n[t].identifier===e){r=t;break}return r}function t(e,t){for(var o={},s=[],i=0;i<e.length;i++){var c=e[i],l=t.base?c[0]+t.base:c[0],u=o[l]||0,p="".concat(l," ").concat(u);o[l]=u+1;var d=r(p),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==d)n[d].references++,n[d].updater(f);else{var h=a(f,t);t.byIndex=i,n.splice(i,0,{identifier:p,updater:h,references:1})}s.push(p)}return s}function a(e,n){var r=n.domAPI(n);return r.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;r.update(e=n)}else r.remove()}}e.exports=function(e,a){var o=t(e=e||[],a=a||{});return function(e){e=e||[];for(var s=0;s<o.length;s++){var i=r(o[s]);n[i].references--}for(var c=t(e,a),l=0;l<o.length;l++){var u=r(o[l]);0===n[u].references&&(n[u].updater(),n.splice(u,1))}o=c}}},569:e=>{var n={};e.exports=function(e,r){var t=function(e){if(void 0===n[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}n[e]=r}return n[e]}(e);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(r)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,r)=>{e.exports=function(e){var n=r.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(r){!function(e,n,r){var t="";r.supports&&(t+="@supports (".concat(r.supports,") {")),r.media&&(t+="@media ".concat(r.media," {"));var a=void 0!==r.layer;a&&(t+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),t+=r.css,a&&(t+="}"),r.media&&(t+="}"),r.supports&&(t+="}");var o=r.sourceMap;o&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(t,e,n.options)}(n,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},508:(e,n,r)=>{var t=r(379),a=r.n(t),o=r(795),s=r.n(o),i=r(569),c=r.n(i),l=r(565),u=r.n(l),p=r(216),d=r.n(p),f=r(589),h=r.n(f),m=r(426),v={};v.styleTagTransform=h(),v.setAttributes=u(),v.insert=c().bind(null,"head"),v.domAPI=s(),v.insertStyleElement=d(),a()(m.Z,v),m.Z&&m.Z.locals&&m.Z.locals;const g=new class{constructor(){this.Scores=[]}newScore(e,n,r){const t=new class{constructor(e,n,r){this.name=e,this.val=n,this.index=r}get scoreDesc(){return this.desc}get scoreVal(){return this.val}}(e,n,r);return this.Scores.push(t),t}get allScores(){return this.Scores}changeVal(e,n){this.allScores[e].val=n}},y=(e,n,r)=>{g.newScore(e,n,r);const t=document.getElementById("score-list"),a=document.createElement("li");a.setAttribute("id",`id${r}`),a.innerText=`${e}: ${n}`,t.appendChild(a)};y("mario",99,1),y("alan",101,2),y("luigi",104,3),y("wario",94,4),y("richard",81,5),y("pamela",109,6),y("erika",106,7),g.allScores.forEach(((e,n)=>{const r=document.getElementById(`id${n+1}`);n%2==0&&(r.style.backgroundColor="rgba(255, 229, 111, 0.6)")}))}},e=>{e(e.s=508)}]);