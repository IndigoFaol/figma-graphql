!function(e){function r(r){for(var t,o,a=r[0],i=r[1],d=r[2],c=r[3]||[],s=0,l=[];s<a.length;s++)o=a[s],q[o]&&l.push(q[o][0]),q[o]=0;for(t in i)Object.prototype.hasOwnProperty.call(i,t)&&(e[t]=i[t]);for(U&&U(r),c.forEach(function(e){if(void 0===q[e]){q[e]=null;var r=document.createElement("link");r.crossOrigin="anonymous",I.nc&&r.setAttribute("nonce",I.nc),r.rel="prefetch",r.as="script",r.href=A(e),document.head.appendChild(r)}});l.length;)l.shift()();return H.push.apply(H,d||[]),n()}function n(){for(var e,r=0;r<H.length;r++){for(var n=H[r],t=!0,o=1;o<n.length;o++){var a=n[o];0!==q[a]&&(t=!1)}t&&(H.splice(r--,1),e=I(I.s=n[0]))}return e}var t=window.webpackHotUpdate;window.webpackHotUpdate=function(e,r){!function(e,r){if(!O[e]||!w[e])return;for(var n in w[e]=!1,r)Object.prototype.hasOwnProperty.call(r,n)&&(v[n]=r[n]);0===--y&&0===b&&k()}(e,r),t&&t(e,r)};var o,a=!0,i="ef180f62e3249766dfd3",d=1e4,c={},s=[],l=[];function u(e){var r={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:o!==e,active:!0,accept:function(e,n){if(void 0===e)r._selfAccepted=!0;else if("function"===typeof e)r._selfAccepted=e;else if("object"===typeof e)for(var t=0;t<e.length;t++)r._acceptedDependencies[e[t]]=n||function(){};else r._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)r._selfDeclined=!0;else if("object"===typeof e)for(var n=0;n<e.length;n++)r._declinedDependencies[e[n]]=!0;else r._declinedDependencies[e]=!0},dispose:function(e){r._disposeHandlers.push(e)},addDisposeHandler:function(e){r._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=r._disposeHandlers.indexOf(e);n>=0&&r._disposeHandlers.splice(n,1)},check:j,apply:P,status:function(e){if(!e)return f;p.push(e)},addStatusHandler:function(e){p.push(e)},removeStatusHandler:function(e){var r=p.indexOf(e);r>=0&&p.splice(r,1)},data:c[e]};return o=void 0,r}var p=[],f="idle";function h(e){f=e;for(var r=0;r<p.length;r++)p[r].call(null,e)}var m,v,g,y=0,b=0,x={},w={},O={};function _(e){return+e+""===e?+e:e}function j(e){if("idle"!==f)throw new Error("check() is only allowed in idle status");return a=e,h("check"),(r=d,r=r||1e4,new Promise(function(e,n){if("undefined"===typeof XMLHttpRequest)return n(new Error("No browser support"));try{var t=new XMLHttpRequest,o=I.p+""+i+".hot-update.json";t.open("GET",o,!0),t.timeout=r,t.send(null)}catch(a){return n(a)}t.onreadystatechange=function(){if(4===t.readyState)if(0===t.status)n(new Error("Manifest request to "+o+" timed out."));else if(404===t.status)e();else if(200!==t.status&&304!==t.status)n(new Error("Manifest request to "+o+" failed."));else{try{var r=JSON.parse(t.responseText)}catch(a){return void n(a)}e(r)}}})).then(function(e){if(!e)return h("idle"),null;w={},x={},O=e.c,g=e.h,h("prepare");var r=new Promise(function(e,r){m={resolve:e,reject:r}});for(var n in v={},q)E(n);return"prepare"===f&&0===b&&0===y&&k(),r});var r}function E(e){O[e]?(w[e]=!0,y++,function(e){var r=document.createElement("script");r.charset="utf-8",r.src=I.p+""+e+"."+i+".hot-update.js",r.crossOrigin="anonymous",document.head.appendChild(r)}(e)):x[e]=!0}function k(){h("ready");var e=m;if(m=null,e)if(a)Promise.resolve().then(function(){return P(a)}).then(function(r){e.resolve(r)},function(r){e.reject(r)});else{var r=[];for(var n in v)Object.prototype.hasOwnProperty.call(v,n)&&r.push(_(n));e.resolve(r)}}function P(r){if("ready"!==f)throw new Error("apply() is only allowed in ready status");var n,t,o,a,d;function l(e){for(var r=[e],n={},t=r.slice().map(function(e){return{chain:[e],id:e}});t.length>0;){var o=t.pop(),i=o.id,d=o.chain;if((a=D[i])&&!a.hot._selfAccepted){if(a.hot._selfDeclined)return{type:"self-declined",chain:d,moduleId:i};if(a.hot._main)return{type:"unaccepted",chain:d,moduleId:i};for(var c=0;c<a.parents.length;c++){var s=a.parents[c],l=D[s];if(l){if(l.hot._declinedDependencies[i])return{type:"declined",chain:d.concat([s]),moduleId:i,parentId:s};-1===r.indexOf(s)&&(l.hot._acceptedDependencies[i]?(n[s]||(n[s]=[]),u(n[s],[i])):(delete n[s],r.push(s),t.push({chain:d.concat([s]),id:s})))}}}}return{type:"accepted",moduleId:e,outdatedModules:r,outdatedDependencies:n}}function u(e,r){for(var n=0;n<r.length;n++){var t=r[n];-1===e.indexOf(t)&&e.push(t)}}r=r||{};var p={},m=[],y={},b=function(){console.warn("[HMR] unexpected require("+w.moduleId+") to disposed module")};for(var x in v)if(Object.prototype.hasOwnProperty.call(v,x)){var w;d=_(x);var j=!1,E=!1,k=!1,P="";switch((w=v[x]?l(d):{type:"disposed",moduleId:x}).chain&&(P="\nUpdate propagation: "+w.chain.join(" -> ")),w.type){case"self-declined":r.onDeclined&&r.onDeclined(w),r.ignoreDeclined||(j=new Error("Aborted because of self decline: "+w.moduleId+P));break;case"declined":r.onDeclined&&r.onDeclined(w),r.ignoreDeclined||(j=new Error("Aborted because of declined dependency: "+w.moduleId+" in "+w.parentId+P));break;case"unaccepted":r.onUnaccepted&&r.onUnaccepted(w),r.ignoreUnaccepted||(j=new Error("Aborted because "+d+" is not accepted"+P));break;case"accepted":r.onAccepted&&r.onAccepted(w),E=!0;break;case"disposed":r.onDisposed&&r.onDisposed(w),k=!0;break;default:throw new Error("Unexception type "+w.type)}if(j)return h("abort"),Promise.reject(j);if(E)for(d in y[d]=v[d],u(m,w.outdatedModules),w.outdatedDependencies)Object.prototype.hasOwnProperty.call(w.outdatedDependencies,d)&&(p[d]||(p[d]=[]),u(p[d],w.outdatedDependencies[d]));k&&(u(m,[w.moduleId]),y[d]=b)}var H,A=[];for(t=0;t<m.length;t++)d=m[t],D[d]&&D[d].hot._selfAccepted&&A.push({module:d,errorHandler:D[d].hot._selfAccepted});h("dispose"),Object.keys(O).forEach(function(e){!1===O[e]&&function(e){delete q[e]}(e)});for(var M,S,T=m.slice();T.length>0;)if(d=T.pop(),a=D[d]){var U={},F=a.hot._disposeHandlers;for(o=0;o<F.length;o++)(n=F[o])(U);for(c[d]=U,a.hot.active=!1,delete D[d],delete p[d],o=0;o<a.children.length;o++){var z=D[a.children[o]];z&&((H=z.parents.indexOf(d))>=0&&z.parents.splice(H,1))}}for(d in p)if(Object.prototype.hasOwnProperty.call(p,d)&&(a=D[d]))for(S=p[d],o=0;o<S.length;o++)M=S[o],(H=a.children.indexOf(M))>=0&&a.children.splice(H,1);for(d in h("apply"),i=g,y)Object.prototype.hasOwnProperty.call(y,d)&&(e[d]=y[d]);var C=null;for(d in p)if(Object.prototype.hasOwnProperty.call(p,d)&&(a=D[d])){S=p[d];var R=[];for(t=0;t<S.length;t++)if(M=S[t],n=a.hot._acceptedDependencies[M]){if(-1!==R.indexOf(n))continue;R.push(n)}for(t=0;t<R.length;t++){n=R[t];try{n(S)}catch(G){r.onErrored&&r.onErrored({type:"accept-errored",moduleId:d,dependencyId:S[t],error:G}),r.ignoreErrored||C||(C=G)}}}for(t=0;t<A.length;t++){var L=A[t];d=L.module,s=[d];try{I(d)}catch(G){if("function"===typeof L.errorHandler)try{L.errorHandler(G)}catch(J){r.onErrored&&r.onErrored({type:"self-accept-error-handler-errored",moduleId:d,error:J,originalError:G}),r.ignoreErrored||C||(C=J),C||(C=G)}else r.onErrored&&r.onErrored({type:"self-accept-errored",moduleId:d,error:G}),r.ignoreErrored||C||(C=G)}}return C?(h("fail"),Promise.reject(C)):(h("idle"),new Promise(function(e){e(m)}))}var D={},q={1:0},H=[];function A(e){return I.p+"static/js/"+({2:"examples",3:"home",4:"road-to-v2"}[e]||e)+"."+{2:"94c663b2",3:"34c956fb",4:"59230eef"}[e]+".js"}function I(r){if(D[r])return D[r].exports;var n=D[r]={i:r,l:!1,exports:{},hot:u(r),parents:(l=s,s=[],l),children:[]};return e[r].call(n.exports,n,n.exports,function(e){var r=D[e];if(!r)return I;var n=function(n){return r.hot.active?(D[n]?-1===D[n].parents.indexOf(e)&&D[n].parents.push(e):(s=[e],o=n),-1===r.children.indexOf(n)&&r.children.push(n)):(console.warn("[HMR] unexpected require("+n+") from disposed module "+e),s=[]),I(n)},t=function(e){return{configurable:!0,enumerable:!0,get:function(){return I[e]},set:function(r){I[e]=r}}};for(var a in I)Object.prototype.hasOwnProperty.call(I,a)&&"e"!==a&&"t"!==a&&Object.defineProperty(n,a,t(a));return n.e=function(e){return"ready"===f&&h("prepare"),b++,I.e(e).then(r,function(e){throw r(),e});function r(){b--,"prepare"===f&&(x[e]||E(e),0===b&&0===y&&k())}},n.t=function(e,r){return 1&r&&(e=n(e)),I.t(e,-2&r)},n}(r)),n.l=!0,n.exports}I.e=function(e){var r=[],n=q[e];if(0!==n)if(n)r.push(n[2]);else{var t=new Promise(function(r,t){n=q[e]=[r,t]});r.push(n[2]=t);var o,a=document.createElement("script");a.charset="utf-8",a.timeout=120,I.nc&&a.setAttribute("nonce",I.nc),a.src=A(e),0!==a.src.indexOf(window.location.origin+"/")&&(a.crossOrigin="anonymous"),o=function(r){a.onerror=a.onload=null,clearTimeout(i);var n=q[e];if(0!==n){if(n){var t=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src,d=new Error("Loading chunk "+e+" failed.\n("+t+": "+o+")");d.type=t,d.request=o,n[1](d)}q[e]=void 0}};var i=setTimeout(function(){o({type:"timeout",target:a})},12e4);a.onerror=a.onload=o,document.head.appendChild(a)}return Promise.all(r)},I.m=e,I.c=D,I.d=function(e,r,n){I.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},I.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},I.t=function(e,r){if(1&r&&(e=I(e)),8&r)return e;if(4&r&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(I.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var t in e)I.d(n,t,function(r){return e[r]}.bind(null,t));return n},I.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return I.d(r,"a",r),r},I.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},I.p="/",I.oe=function(e){throw console.error(e),e},I.h=function(){return i};var M=window.webpackJsonp=window.webpackJsonp||[],S=M.push.bind(M);M.push=r,M=M.slice();for(var T=0;T<M.length;T++)r(M[T]);var U=S;r([[],{},0,[0,2,3,4]]),H.push([0,0]),n()}({"./.docz/app/db.json":function(e){e.exports={config:{title:"figma-graphql",description:"The reimagined Figma API (super)powered by GraphQL",menu:[],version:"1.3.0",repository:"https://github.com/braposo/figma-graphql",native:!1,codeSandbox:!0,themeConfig:{colors:{link:"#1ABCFE",primary:"#FF7262"}},separator:"-",src:"./docs"},props:[],entries:[{key:"examples.mdx",value:{name:"Practical Examples",route:"/practical-examples",id:"a0261923c9f3e006856d399286472d9c",filepath:"examples.mdx",link:"https://github.com/braposo/figma-graphql/edit/master/docs/examples.mdx",slug:"examples",menu:"",headings:[{slug:"practical-examples",depth:1,value:"Practical examples"},{slug:"designers",depth:2,value:"Designers"},{slug:"developers",depth:2,value:"Developers"},{slug:"product-managers",depth:2,value:"Product Managers"}]}},{key:"home.mdx",value:{name:"Home",route:"/",id:"7e165ea34e00ef78451a64f9e321a429",filepath:"home.mdx",link:"https://github.com/braposo/figma-graphql/edit/master/docs/home.mdx",slug:"home",menu:"",headings:[{slug:"figma-graphql-logo",depth:1,value:""},{slug:"figma-graphql",depth:1,value:"figma-graphql"},{slug:"quick-start",depth:2,value:"Quick start"},{slug:"1-open-figma-graphql-sandbox-and-fork-it",depth:3,value:"1. Open figma-graphql  sandbox  and fork it"},{slug:"2-add-your-figma-api-token-as-figma_token-in-the-codesandbox-secret-keys",depth:3,value:"2. Add your  Figma API Token  as  FIGMA_TOKEN  in the  codesandbox secret keys"},{slug:"3-try-your-first-query",depth:3,value:"3. Try your first query!"},{slug:"why-use-figma-graphql",depth:2,value:"Why use figma-graphql?"},{slug:"examples",depth:2,value:"Examples"},{slug:"migrating-to-v2",depth:2,value:"Migrating to v2"}]}},{key:"road-to-v2.mdx",value:{name:"Road to v2",route:"/road-to-v2",id:"e574618259bee44809f2652a916fb970",filepath:"road-to-v2.mdx",link:"https://github.com/braposo/figma-graphql/edit/master/docs/road-to-v2.mdx",slug:"road-to-v2",menu:"",headings:[{slug:"from-v1-to-v2",depth:1,value:"From v1 to v2"},{slug:"shortcuts",depth:2,value:"Shortcuts"},{slug:"unified-query",depth:2,value:"Unified query"}]}}]}},"./.docz/app/index.jsx":function(e,r,n){"use strict";n.r(r);var t=n("./node_modules/react/index.js"),o=n.n(t),a=n("./node_modules/react-dom/index.js"),i=n.n(a),d=n("./node_modules/docz/dist/index.esm.js"),c=n("./node_modules/docz-theme-default/dist/index.esm.js"),s={"examples.mdx":function(){return Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"./docs/examples.mdx"))},"home.mdx":function(){return Promise.all([n.e(0),n.e(3)]).then(n.bind(null,"./docs/home.mdx"))},"road-to-v2.mdx":function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,"./docs/road-to-v2.mdx"))}},l=n("./.docz/app/db.json"),u=function(){return o.a.createElement(c.a,{linkComponent:d.b,db:l},o.a.createElement(d.c,{imports:s}))},p=[],f=[],h=function(){return f.forEach(function(e){return e&&e()})},m=document.querySelector("#root");!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u;p.forEach(function(e){return e&&e()}),i.a.render(o.a.createElement(e,null),m,h)}(u)},0:function(e,r,n){e.exports=n("./.docz/app/index.jsx")}});
//# sourceMappingURL=app.ef180f62e3249766dfd3.js.map