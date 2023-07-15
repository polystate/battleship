(()=>{"use strict";var e={28:(e,t,r)=>{r.d(t,{Z:()=>c});var n=r(81),o=r.n(n),i=r(645),a=r.n(i)()(o());a.push([e.id,":root{\n  --background: #333333;\n  --grid-bg: #222222;\n  --complementary: 255, 140, 0;\n  --border-col: #555555;\n  --ship-found: whitesmoke;\n  --grid-size: 10;\n  --grid-cell-size: 10%;\n}\n\nhtml, body{\n  margin: 0;\n  padding: 0;\n  height: 100%;\n}\n\nbody {\n    background-color: var(--background);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n}\n  \n.grid-container {\n    display: flex;\n    height: 40vh; \n    gap: var(--grid-cell-size);\n    width: 75%;\n}\n  \n.grid {\n    display: grid;\n    grid-template-rows: repeat(10, 1fr);\n    grid-template-columns: repeat(10, 1fr);\n    width: 75%;\n    max-width: 65%; \n    background-color: var(--grid-bg); \n    border: 1px solid var(--border-col); \n    border-bottom: 4px solid black;\n    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3); \n}\n  \n  .grid-cell {\n    /* flex-basis: calc(10% - 8px);  */\n    height: 2rem;\n    /* padding-bottom: calc(10% - 8px); */\n    background-color: var(--grid-bg); \n    border: 1px solid var(--border-col); \n}\n\n.grid-cell:hover {\n  background-color: rgba(var(--complementary), 0.25);\n  cursor: pointer;\n}\n\n\n  ",""]);const c=a},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r="",n=void 0!==t[5];return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),n&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=e(t),n&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r})).join("")},t.i=function(e,r,n,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(n)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);n&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),r&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=r):d[2]=r),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),t.push(d))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function r(e){for(var r=-1,n=0;n<t.length;n++)if(t[n].identifier===e){r=n;break}return r}function n(e,n){for(var i={},a=[],c=0;c<e.length;c++){var s=e[c],l=n.base?s[0]+n.base:s[0],d=i[l]||0,u="".concat(l," ").concat(d);i[l]=d+1;var p=r(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var h=o(f,n);n.byIndex=c,t.splice(c,0,{identifier:u,updater:h,references:1})}a.push(u)}return a}function o(e,t){var r=t.domAPI(t);return r.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;r.update(e=t)}else r.remove()}}e.exports=function(e,o){var i=n(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var c=r(i[a]);t[c].references--}for(var s=n(e,o),l=0;l<i.length;l++){var d=r(i[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}i=s}}},569:e=>{var t={};e.exports=function(e,r){var n=function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,r)=>{e.exports=function(e){var t=r.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(r){!function(e,t,r){var n="";r.supports&&(n+="@supports (".concat(r.supports,") {")),r.media&&(n+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),n+=r.css,o&&(n+="}"),r.media&&(n+="}"),r.supports&&(n+="}");var i=r.sourceMap;i&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(n,e,t.options)}(t,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={id:n,exports:{}};return e[n](i,i.exports,r),i.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.nc=void 0,(()=>{var e=r(379),t=r.n(e),n=r(795),o=r.n(n),i=r(569),a=r.n(i),c=r(565),s=r.n(c),l=r(216),d=r.n(l),u=r(589),p=r.n(u),f=r(28),h={};h.styleTagTransform=p(),h.setAttributes=s(),h.insert=a().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=d(),t()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals;const g=(e=!0)=>{const t=Object.create((()=>{const e=Array.from({length:10},(()=>Array(10).fill(!1)));let t=0;const r=()=>({hits:t}),n=(t,r)=>((e,t)=>e<0||e>9||t<0||t>9)(t,r)||!1!==e[t][r],o=(t,[r,o])=>{if(!n(r,o))return e[r][o]=t,[r,o]},i=(e,t,r)=>{const i=o(e,t);if(!i)return;const[a,c]=i,s=e.logInfo().length-1;for(let e=1;e<=s;e++){let t=a,o=c;if("vertical"===r?o+=e:t+=e,n(t,o))return}return!0},a=(t,r,n)=>{if(!i(t,r,n))return;const[o,a]=r,c=t.logInfo().length-1;return t.logInfo().locations.push([o,a]),((t,r,n,o)=>{const[i,a]=r;for(let r=1;r<=o;r++)"vertical"===n?(e[i][a+r]=t,t.logInfo().locations.push([i,a+r])):"horizontal"===n&&(e[i+r][a]=t,t.logInfo().locations.push([i+r,a]))})(t,r,n,c),!0};return{grid:e,logBoardData:r,selectOrigin:o,isTailValid:i,placeShip:a,placeShipVertical:(e,t)=>{a(e,t,"vertical")},placeShipHorizontal:(e,t)=>{a(e,t,"horizontal")},receiveAttack:r=>{const[n,o]=r;if(e[n][o]){if("object"==typeof e[n][o]){if(e[n][o].isSunk())return;return e[n][o].getHit(),t++,!0}}else e[n][o]=null},isGameOver:()=>17==r().hits,shipPartsHit:t}})()),r=[];let n=e;return t.switchTurn=()=>{n=!n},t.isTurn=()=>n,t.attackEnemy=(e,n)=>{e.receiveAttack(n),t.switchTurn(),e.switchTurn(),r.push(n)},t.getAttempts=()=>r,t.filterMoves=()=>{const e=t.getAttempts(),r=(()=>{let e=[];for(let t=0;t<10;t++)for(let r=0;r<10;r++)e.push([t,r]);return e})().filter((t=>!e.some((e=>e[0]===t[0]&&e[1]===t[1]))));return t.randomAttack=()=>{const e=t.filterMoves();return e[Math.floor(Math.random()*e.length)]},r},t},v=g(!0),m=g(!1),b=()=>{var e,t;y(),x(),e=v.grid,t=m.grid,document.querySelectorAll(".grid-cell").forEach((r=>{const n=r.id,[o,i]=n.split(",");e[o][i].hasShip?r.classList.add("ship"):r.classList.remove("ship"),t[o][i].hasShip?r.classList.add("enemy-ship"):r.classList.remove("enemy-ship")})),requestAnimationFrame(b),A()&&w()},y=()=>{},x=()=>{},A=()=>{},w=()=>{},S=b;document.querySelectorAll(".grid").forEach((e=>{for(let t=0;t<10;t++)for(let r=0;r<10;r++){const n=document.createElement("div");n.setAttribute("class","grid-cell"),n.setAttribute("id",`${t},${r}`),e.appendChild(n)}})),document.querySelectorAll(".grid-cell").forEach((e=>{e.addEventListener("click",(e=>{const t=e.target.id;console.log(t)}))})),S()})()})();