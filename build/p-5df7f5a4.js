let e,l,t=!1,n=!1,o=!1,s=!1;const i="undefined"!=typeof window?window:{},r=i.document||{head:{}},c={l:0,t:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,l,t,n)=>e.addEventListener(l,t,n),rel:(e,l,t,n)=>e.removeEventListener(l,t,n),ce:(e,l)=>new CustomEvent(e,l)},$=e=>Promise.resolve(e),f=(()=>{try{return new CSSStyleSheet,"function"==typeof(new CSSStyleSheet).replace}catch(e){}return!1})(),u=new WeakMap,a=e=>"sc-"+e.o,d={},y=e=>"object"==(e=typeof e)||"function"===e,h=(e,l,...t)=>{let n=null,o=null,s=!1,i=!1,r=[];const c=l=>{for(let t=0;t<l.length;t++)n=l[t],Array.isArray(n)?c(n):null!=n&&"boolean"!=typeof n&&((s="function"!=typeof e&&!y(n))&&(n+=""),s&&i?r[r.length-1].i+=n:r.push(s?p(null,n):n),i=s)};if(c(t),l){l.name&&(o=l.name);{const e=l.className||l.class;e&&(l.class="object"!=typeof e?e:Object.keys(e).filter((l=>e[l])).join(" "))}}const $=p(e,null);return $.$=l,r.length>0&&($.u=r),$.h=o,$},p=(e,l)=>({l:0,p:e,i:l,m:null,u:null,$:null,h:null}),m={},b=(e,l,t,n,o,s)=>{if(t!==n){let i=Z(e,l);if(l.toLowerCase(),"class"===l){const l=e.classList,o=g(t),s=g(n);l.remove(...o.filter((e=>e&&!s.includes(e)))),l.add(...s.filter((e=>e&&!o.includes(e))))}else{const r=y(n);if((i||r&&null!==n)&&!o)try{if(e.tagName.includes("-"))e[l]=n;else{let o=null==n?"":n;"list"===l?i=!1:null!=t&&e[l]==o||(e[l]=o)}}catch(e){}null==n||!1===n?!1===n&&""!==e.getAttribute(l)||e.removeAttribute(l):(!i||4&s||o)&&!r&&e.setAttribute(l,n=!0===n?"":n)}}},w=/\s/,g=e=>e?e.split(w):[],S=(e,l,t,n)=>{const o=11===l.m.nodeType&&l.m.host?l.m.host:l.m,s=e&&e.$||d,i=l.$||d;for(n in s)n in i||b(o,n,s[n],void 0,t,l.l);for(n in i)b(o,n,s[n],i[n],t,l.l)},k=(n,s,i)=>{let c,$,f,u=s.u[i],a=0;if(t||(o=!0,"slot"===u.p&&(u.l|=u.u?2:1)),null!==u.i)c=u.m=r.createTextNode(u.i);else if(1&u.l)c=u.m=r.createTextNode("");else if(c=u.m=r.createElement(2&u.l?"slot-fb":u.p),S(null,u,!1),u.u)for(a=0;a<u.u.length;++a)$=k(n,u,a),$&&c.appendChild($);return c["s-hn"]=l,3&u.l&&(c["s-sr"]=!0,c["s-cr"]=e,c["s-sn"]=u.h||"",f=n&&n.u&&n.u[i],f&&f.p===u.p&&n.m&&j(n.m,!1)),c},j=(e,t)=>{c.l|=1;const n=e.childNodes;for(let e=n.length-1;e>=0;e--){const s=n[e];s["s-hn"]!==l&&s["s-ol"]&&(O(s).insertBefore(s,C(s)),s["s-ol"].remove(),s["s-ol"]=void 0,o=!0),t&&j(s,t)}c.l&=-2},v=(e,l,t,n,o,s)=>{let i,r=e["s-cr"]&&e["s-cr"].parentNode||e;for(;o<=s;++o)n[o]&&(i=k(null,t,o),i&&(n[o].m=i,r.insertBefore(i,C(l))))},M=(e,l,t,o,s)=>{for(;l<=t;++l)(o=e[l])&&(n=!0,(s=o.m)["s-ol"]?s["s-ol"].remove():j(s,!0),s.remove())},x=(e,l)=>e.p===l.p&&("slot"!==e.p||e.h===l.h),C=e=>e&&e["s-ol"]||e,O=e=>(e["s-ol"]?e["s-ol"]:e).parentNode,R=(e,l)=>{const t=l.m=e.m,n=e.u,o=l.u,s=l.i;let i;null===s?("slot"===l.p||S(e,l,!1),null!==n&&null!==o?((e,l,t,n)=>{let o,s=0,i=0,r=l.length-1,c=l[0],$=l[r],f=n.length-1,u=n[0],a=n[f];for(;s<=r&&i<=f;)null==c?c=l[++s]:null==$?$=l[--r]:null==u?u=n[++i]:null==a?a=n[--f]:x(c,u)?(R(c,u),c=l[++s],u=n[++i]):x($,a)?(R($,a),$=l[--r],a=n[--f]):x(c,a)?("slot"!==c.p&&"slot"!==a.p||j(c.m.parentNode,!1),R(c,a),e.insertBefore(c.m,$.m.nextSibling),c=l[++s],a=n[--f]):x($,u)?("slot"!==c.p&&"slot"!==a.p||j($.m.parentNode,!1),R($,u),e.insertBefore($.m,c.m),$=l[--r],u=n[++i]):(o=k(l&&l[i],t,i),u=n[++i],o&&O(c.m).insertBefore(o,C(c.m)));s>r?v(e,null==n[f+1]?null:n[f+1].m,t,n,i,f):i>f&&M(l,s,r)})(t,n,l,o):null!==o?(null!==e.i&&(t.textContent=""),v(t,null,l,o,0,o.length-1)):null!==n&&M(n,0,n.length-1)):(i=t["s-cr"])?i.parentNode.textContent=s:e.i!==s&&(t.data=s)},T=e=>{let l,t,n,o,s,i,r=e.childNodes;for(t=0,n=r.length;t<n;t++)if(l=r[t],1===l.nodeType){if(l["s-sr"])for(s=l["s-sn"],l.hidden=!1,o=0;o<n;o++)if(i=r[o].nodeType,r[o]["s-hn"]!==l["s-hn"]||""!==s){if(1===i&&s===r[o].getAttribute("slot")){l.hidden=!0;break}}else if(1===i||3===i&&""!==r[o].textContent.trim()){l.hidden=!0;break}T(l)}},I=[],P=e=>{let l,t,o,s,i,r,c=0,$=e.childNodes,f=$.length;for(;c<f;c++){if(l=$[c],l["s-sr"]&&(t=l["s-cr"])&&t.parentNode)for(o=t.parentNode.childNodes,s=l["s-sn"],r=o.length-1;r>=0;r--)t=o[r],t["s-cn"]||t["s-nr"]||t["s-hn"]===l["s-hn"]||(E(t,s)?(i=I.find((e=>e.g===t)),n=!0,t["s-sn"]=t["s-sn"]||s,i?i.S=l:I.push({S:l,g:t}),t["s-sr"]&&I.map((e=>{E(e.g,t["s-sn"])&&(i=I.find((e=>e.g===t)),i&&!e.S&&(e.S=i.S))}))):I.some((e=>e.g===t))||I.push({g:t}));1===l.nodeType&&P(l)}},E=(e,l)=>1===e.nodeType?null===e.getAttribute("slot")&&""===l||e.getAttribute("slot")===l:e["s-sn"]===l||""===l,A=(e,l)=>{l&&!e.k&&l["s-p"]&&l["s-p"].push(new Promise((l=>e.k=l)))},L=(e,l)=>{if(e.l|=16,!(4&e.l))return A(e,e.j),fe((()=>N(e,l)));e.l|=512},N=(e,l)=>{const t=e.v;return H(void 0,(()=>U(e,t,l)))},U=async(e,l,t)=>{const n=e.M,o=n["s-rc"];t&&(e=>{const l=e.C;((e,l)=>{let t=a(l),n=ne.get(t);if(e=11===e.nodeType?e:r,n)if("string"==typeof n){let l,o=u.get(e=e.head||e);o||u.set(e,o=new Set),o.has(t)||(e.host&&(l=e.querySelector(`[sty-id="${t}"]`))?l.innerHTML=n:(l=r.createElement("style"),l.innerHTML=n,e.insertBefore(l,e.querySelector("link"))),o&&o.add(t))}else e.adoptedStyleSheets.includes(n)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,n])})(e.M.getRootNode(),l)})(e);W(e,l),o&&(o.map((e=>e())),n["s-rc"]=void 0);{const l=n["s-p"],t=()=>q(e);0===l.length?t():(Promise.all(l).then(t),e.l|=4,l.length=0)}},W=(s,i)=>{try{i=i.render(),s.l&=-17,s.l|=2,((s,i)=>{const $=s.M,f=s.C,u=s.O||p(null,null),a=(e=>e&&e.p===m)(i)?i:h(null,null,i);if(l=$.tagName,a.p=null,a.l|=4,s.O=a,a.m=u.m=$,e=$["s-cr"],t=0!=(1&f.l),n=!1,R(u,a),c.l|=1,o){let e,l,t,n,o,s;P(a.m);let i=0;for(;i<I.length;i++)e=I[i],l=e.g,l["s-ol"]||(t=r.createTextNode(""),t["s-nr"]=l,l.parentNode.insertBefore(l["s-ol"]=t,l));for(i=0;i<I.length;i++)if(e=I[i],l=e.g,e.S){for(n=e.S.parentNode,o=e.S.nextSibling,t=l["s-ol"];t=t.previousSibling;)if(s=t["s-nr"],s&&s["s-sn"]===l["s-sn"]&&n===s.parentNode&&(s=s.nextSibling,!s||!s["s-nr"])){o=s;break}(!o&&n!==l.parentNode||l.nextSibling!==o)&&l!==o&&(!l["s-hn"]&&l["s-ol"]&&(l["s-hn"]=l["s-ol"].parentNode.nodeName),n.insertBefore(l,o))}else 1===l.nodeType&&(l.hidden=!0)}n&&T(a.m),c.l&=-2,I.length=0})(s,i)}catch(e){ee(e,s.M)}return null},q=e=>{const l=e.M,t=e.j;64&e.l||(e.l|=64,V(l),e.R(l),t||F()),e.k&&(e.k(),e.k=void 0),512&e.l&&$e((()=>L(e,!1))),e.l&=-517},F=()=>{V(r.documentElement),$e((()=>(e=>{const l=c.ce("appload",{detail:{namespace:"app"}});return e.dispatchEvent(l),l})(i)))},H=(e,l)=>e&&e.then?e.then(l):l(),V=e=>e.classList.add("hydrated"),_=(e,l,t,n,o,s,i)=>{let r,c,$,f;if(1===s.nodeType){for(r=s.getAttribute("c-id"),r&&(c=r.split("."),c[0]!==i&&"0"!==c[0]||($={l:0,T:c[0],I:c[1],P:c[2],A:c[3],p:s.tagName.toLowerCase(),m:s,$:null,u:null,L:null,h:null,i:null},l.push($),s.removeAttribute("c-id"),e.u||(e.u=[]),e.u[$.A]=$,e=$,n&&"0"===$.P&&(n[$.A]=$.m))),f=s.childNodes.length-1;f>=0;f--)_(e,l,t,n,o,s.childNodes[f],i);if(s.shadowRoot)for(f=s.shadowRoot.childNodes.length-1;f>=0;f--)_(e,l,t,n,o,s.shadowRoot.childNodes[f],i)}else if(8===s.nodeType)c=s.nodeValue.split("."),c[1]!==i&&"0"!==c[1]||(r=c[0],$={l:0,T:c[1],I:c[2],P:c[3],A:c[4],m:s,$:null,u:null,L:null,h:null,p:null,i:null},"t"===r?($.m=s.nextSibling,$.m&&3===$.m.nodeType&&($.i=$.m.textContent,l.push($),s.remove(),e.u||(e.u=[]),e.u[$.A]=$,n&&"0"===$.P&&(n[$.A]=$.m))):$.T===i&&("s"===r?($.p="slot",s["s-sn"]=c[5]?$.h=c[5]:"",s["s-sr"]=!0,t.push($),e.u||(e.u=[]),e.u[$.A]=$):"r"===r&&(o["s-cr"]=s,s["s-cn"]=!0)));else if(e&&"style"===e.p){const l=p(null,s.textContent);l.m=s,l.A="0",e.u=[l]}},z=(e,l)=>{if(1===e.nodeType){let t=0;for(;t<e.childNodes.length;t++)z(e.childNodes[t],l);if(e.shadowRoot)for(t=0;t<e.shadowRoot.childNodes.length;t++)z(e.shadowRoot.childNodes[t],l)}else if(8===e.nodeType){const t=e.nodeValue.split(".");"o"===t[0]&&(l.set(t[1]+"."+t[2],e),e.nodeValue="",e["s-en"]=t[3])}},B=(e,l,t)=>{if(l.N){const n=Object.entries(l.N),o=e.prototype;if(n.map((([e,[n]])=>{(31&n||2&t&&32&n)&&Object.defineProperty(o,e,{get(){return((e,l)=>Q(this).U.get(l))(0,e)},set(t){((e,l,t,n)=>{const o=Q(e),s=o.U.get(l),i=o.l,r=o.v;t=((e,l)=>null==e||y(e)?e:4&l?"false"!==e&&(""===e||!!e):1&l?e+"":e)(t,n.N[l][0]),8&i&&void 0!==s||t===s||(o.U.set(l,t),r&&2==(18&i)&&L(o,!1))})(this,e,t,l)},configurable:!0,enumerable:!0})})),1&t){const l=new Map;o.attributeChangedCallback=function(e,t,n){c.jmp((()=>{const t=l.get(e);this[t]=(null!==n||"boolean"!=typeof this[t])&&n}))},e.observedAttributes=n.filter((([e,l])=>15&l[0])).map((([e,t])=>{const n=t[1]||e;return l.set(n,e),n}))}}return e},D=e=>{if(0==(1&c.l)){const l=Q(e),t=l.C,n=()=>{};if(!(1&l.l)){let n;l.l|=1,n=e.getAttribute("s-id"),n&&((e,l,t,n)=>{const o=e.shadowRoot,s=[],i=n.O=p(l,null);c.W||z(r.body,c.W=new Map),e["s-id"]=t,e.removeAttribute("s-id"),_(i,s,[],null,e,e,t),s.map((e=>{const t=e.T+"."+e.I,n=c.W.get(t),s=e.m;n&&""===n["s-en"]&&n.parentNode.insertBefore(s,n.nextSibling),o||(s["s-hn"]=l,n&&(s["s-ol"]=n,s["s-ol"]["s-nr"]=s)),c.W.delete(t)}))})(e,t.o,n,l),n||12&t.l&&G(e);{let t=e;for(;t=t.parentNode||t.host;)if(1===t.nodeType&&t.hasAttribute("s-id")&&t["s-p"]||t["s-p"]){A(l,l.j=t);break}}t.N&&Object.entries(t.N).map((([l,[t]])=>{if(31&t&&e.hasOwnProperty(l)){const t=e[l];delete e[l],e[l]=t}})),(async(e,l,t,n,o)=>{if(0==(32&l.l)){{if(l.l|=32,(o=te(t)).then){const e=()=>{};o=await o,e()}o.isProxied||(B(o,t,2),o.isProxied=!0);const e=()=>{};l.l|=8;try{new o(l)}catch(e){ee(e)}l.l&=-9,e()}if(o.style){let e=o.style;const l=a(t);if(!ne.has(l)){const n=()=>{};((e,l,t)=>{let n=ne.get(e);f&&t?(n=n||new CSSStyleSheet,n.replace(l)):n=l,ne.set(e,n)})(l,e,!!(1&t.l)),n()}}}const s=l.j,i=()=>L(l,!0);s&&s["s-rc"]?s["s-rc"].push(i):i()})(0,l,t)}n()}},G=e=>{const l=e["s-cr"]=r.createComment("");l["s-cn"]=!0,e.insertBefore(l,e.firstChild)},J=(e,l={})=>{const t=[],n=l.exclude||[],o=i.customElements,s=r.head,$=s.querySelector("meta[charset]"),f=r.createElement("style"),u=[];let a,d=!0;Object.assign(c,l),c.t=new URL(l.resourcesUrl||"./",r.baseURI).href,c.l|=2,e.map((e=>e[1].map((l=>{const s={l:l[0],o:l[1],N:l[2],q:l[3]};s.N=l[2];const i=s.o,r=class extends HTMLElement{constructor(e){super(e),Y(e=this,s)}connectedCallback(){a&&(clearTimeout(a),a=null),d?u.push(this):c.jmp((()=>D(this)))}disconnectedCallback(){c.jmp((()=>{}))}componentOnReady(){return Q(this).F}};s.H=e[0],n.includes(i)||o.get(i)||(t.push(i),o.define(i,B(r,s,1)))})))),f.innerHTML=t+"{visibility:hidden}.hydrated{visibility:inherit}",f.setAttribute("data-styles",""),s.insertBefore(f,$?$.nextSibling:s.firstChild),d=!1,u.length?u.map((e=>e.connectedCallback())):c.jmp((()=>a=setTimeout(F,30)))},K=new WeakMap,Q=e=>K.get(e),X=(e,l)=>K.set(l.v=e,l),Y=(e,l)=>{const t={l:0,M:e,C:l,U:new Map};return t.F=new Promise((e=>t.R=e)),e["s-p"]=[],e["s-rc"]=[],K.set(e,t)},Z=(e,l)=>l in e,ee=(e,l)=>(0,console.error)(e,l),le=new Map,te=e=>{const l=e.o.replace(/-/g,"_"),t=e.H,n=le.get(t);return n?n[l]:import(`./${t}.entry.js`).then((e=>(le.set(t,e),e[l])),ee)},ne=new Map,oe=[],se=[],ie=(e,l)=>t=>{e.push(t),s||(s=!0,l&&4&c.l?$e(ce):c.raf(ce))},re=e=>{for(let l=0;l<e.length;l++)try{e[l](performance.now())}catch(e){ee(e)}e.length=0},ce=()=>{re(oe),re(se),(s=oe.length>0)&&c.raf(ce)},$e=e=>$().then(e),fe=ie(se,!0);export{J as b,h,$ as p,X as r}