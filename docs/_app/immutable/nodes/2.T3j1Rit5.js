import{s as G,n as z,x as te,y as Le,o as De,z as ke}from"../chunks/scheduler.lsIeK0xN.js";import{S as V,i as x,e as g,j as T,z as Re,c as y,d as u,o as f,g as b,A as de,f as E,H as pe,h as _e,t as ue,a as Z,y as ge,k as ye,b as me,s as Fe,n as v,q as K,m as O,l as A,r as se,u as X,v as ne,w as Y,x as q,B as we}from"../chunks/index.OCa_w-Sk.js";function Q(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}function oe(t,e){const o={},n={},r={$$scope:1};let a=t.length;for(;a--;){const s=t[a],l=e[a];if(l){for(const i in s)i in l||(n[i]=1);for(const i in l)r[i]||(o[i]=l[i],r[i]=1);t[a]=l}else for(const i in s)r[i]=1}for(const s in n)s in o||(o[s]=void 0);return o}function le(t){return typeof t=="object"&&t!==null?t:{}}function Me(t,e,o){const n=t.slice();return n[5]=e[o],n}function ve(t){let e,o;return{c(){e=g("link"),this.h()},l(n){e=y(n,"LINK",{rel:!0,href:!0,as:!0,type:!0,crossorigin:!0}),this.h()},h(){f(e,"rel","preload"),f(e,"href",o=t[5]),f(e,"as","font"),f(e,"type","font/woff2"),f(e,"crossorigin","")},m(n,r){E(n,e,r)},p(n,r){r&16&&o!==(o=n[5])&&f(e,"href",o)},d(n){n&&u(e)}}}function We(t){let e,o,n,r,a,s,l,i,c,h,_,C,P,$,j,N,I,F,S,B,M,U,R,H,J,L;document.title=e=t[0];let d=Q(t[4]),k=[];for(let p=0;p<d.length;p+=1)k[p]=ve(Me(t,d,p));return{c(){o=g("meta"),n=g("meta"),r=g("meta"),a=g("meta"),s=g("meta"),l=g("meta"),i=g("meta"),c=g("meta"),h=g("meta"),_=g("meta"),P=g("meta"),$=g("meta"),j=g("meta"),N=g("meta"),I=g("meta"),F=g("meta"),S=g("meta"),B=g("meta"),M=g("meta"),R=g("meta"),H=g("link");for(let p=0;p<k.length;p+=1)k[p].c();L=T(),this.h()},l(p){const m=Re("svelte-1htu80s",document.head);o=y(m,"META",{name:!0,content:!0}),n=y(m,"META",{name:!0,content:!0}),r=y(m,"META",{name:!0,content:!0}),a=y(m,"META",{property:!0,content:!0}),s=y(m,"META",{property:!0,content:!0}),l=y(m,"META",{property:!0,content:!0}),i=y(m,"META",{property:!0,content:!0}),c=y(m,"META",{property:!0,content:!0}),h=y(m,"META",{property:!0,content:!0}),_=y(m,"META",{property:!0,content:!0}),P=y(m,"META",{property:!0,content:!0}),$=y(m,"META",{property:!0,content:!0}),j=y(m,"META",{property:!0,content:!0}),N=y(m,"META",{name:!0,content:!0}),I=y(m,"META",{name:!0,content:!0}),F=y(m,"META",{name:!0,content:!0}),S=y(m,"META",{name:!0,content:!0}),B=y(m,"META",{name:!0,content:!0}),M=y(m,"META",{name:!0,content:!0}),R=y(m,"META",{name:!0,content:!0}),H=y(m,"LINK",{rel:!0,href:!0});for(let w=0;w<k.length;w+=1)k[w].l(m);L=T(),m.forEach(u),this.h()},h(){f(o,"name","description"),f(o,"content",t[1]),f(n,"name","author"),f(n,"content","The Pudding"),f(r,"name","news_keywords"),f(r,"content",t[3]),f(a,"property","og:title"),f(a,"content",t[0]),f(s,"property","og:site_name"),f(s,"content","The Pudding"),f(l,"property","og:url"),f(l,"content",t[2]),f(i,"property","og:description"),f(i,"content",t[1]),f(c,"property","og:type"),f(c,"content","article"),f(h,"property","og:locale"),f(h,"content","en_US"),f(_,"property","og:image"),f(_,"content",C=t[2]+"/assets/social-facebook.jpg"),f(P,"property","og:image:type"),f(P,"content","image/jpeg"),f($,"property","og:image:width"),f($,"content","1200"),f(j,"property","og:image:height"),f(j,"content","600"),f(N,"name","twitter:card"),f(N,"content","summary_large_image"),f(I,"name","twitter:site"),f(I,"content","https://pudding.cool"),f(F,"name","twitter:creator"),f(F,"content","@puddingviz"),f(S,"name","twitter:title"),f(S,"content",t[0]),f(B,"name","twitter:description"),f(B,"content",t[1]),f(M,"name","twitter:image:src"),f(M,"content",U=t[2]+"/assets/social-twitter.jpg"),f(R,"name","robots"),f(R,"content","max-image-preview:large"),f(H,"rel","canonical"),f(H,"href",J=t[2]+"/")},m(p,m){b(document.head,o),b(document.head,n),b(document.head,r),b(document.head,a),b(document.head,s),b(document.head,l),b(document.head,i),b(document.head,c),b(document.head,h),b(document.head,_),b(document.head,P),b(document.head,$),b(document.head,j),b(document.head,N),b(document.head,I),b(document.head,F),b(document.head,S),b(document.head,B),b(document.head,M),b(document.head,R),b(document.head,H);for(let w=0;w<k.length;w+=1)k[w]&&k[w].m(document.head,null);b(document.head,L)},p(p,[m]){if(m&1&&e!==(e=p[0])&&(document.title=e),m&2&&f(o,"content",p[1]),m&8&&f(r,"content",p[3]),m&1&&f(a,"content",p[0]),m&4&&f(l,"content",p[2]),m&2&&f(i,"content",p[1]),m&4&&C!==(C=p[2]+"/assets/social-facebook.jpg")&&f(_,"content",C),m&1&&f(S,"content",p[0]),m&2&&f(B,"content",p[1]),m&4&&U!==(U=p[2]+"/assets/social-twitter.jpg")&&f(M,"content",U),m&4&&J!==(J=p[2]+"/")&&f(H,"href",J),m&16){d=Q(p[4]);let w;for(w=0;w<d.length;w+=1){const W=Me(p,d,w);k[w]?k[w].p(W,m):(k[w]=ve(W),k[w].c(),k[w].m(L.parentNode,L))}for(;w<k.length;w+=1)k[w].d(1);k.length=d.length}},i:z,o:z,d(p){u(o),u(n),u(r),u(a),u(s),u(l),u(i),u(c),u(h),u(_),u(P),u($),u(j),u(N),u(I),u(F),u(S),u(B),u(M),u(R),u(H),de(k,p),u(L)}}}function Xe(t,e,o){let{title:n="Title TK"}=e,{description:r="Description TK"}=e,{url:a="https://pudding.cool"}=e,{keywords:s=""}=e,{preloadFont:l=[]}=e;return t.$$set=i=>{"title"in i&&o(0,n=i.title),"description"in i&&o(1,r=i.description),"url"in i&&o(2,a=i.url),"keywords"in i&&o(3,s=i.keywords),"preloadFont"in i&&o(4,l=i.preloadFont)},[n,r,a,s,l]}class Ye extends V{constructor(e){super(),x(this,e,Xe,We,G,{title:0,description:1,url:2,keywords:3,preloadFont:4})}}function qe(t){return Math.abs(t=Math.round(t))>=1e21?t.toLocaleString("en").replace(/,/g,""):t.toString(10)}function ce(t,e){if((o=(t=e?t.toExponential(e-1):t.toExponential()).indexOf("e"))<0)return null;var o,n=t.slice(0,o);return[n.length>1?n[0]+n.slice(2):n,+t.slice(o+1)]}function Ge(t){return t=ce(Math.abs(t)),t?t[1]:NaN}function Ke(t,e){return function(o,n){for(var r=o.length,a=[],s=0,l=t[0],i=0;r>0&&l>0&&(i+l+1>n&&(l=Math.max(1,n-i)),a.push(o.substring(r-=l,r+l)),!((i+=l+1)>n));)l=t[s=(s+1)%t.length];return a.reverse().join(e)}}function Oe(t){return function(e){return e.replace(/[0-9]/g,function(o){return t[+o]})}}var Ue=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function he(t){if(!(e=Ue.exec(t)))throw new Error("invalid format: "+t);var e;return new be({fill:e[1],align:e[2],sign:e[3],symbol:e[4],zero:e[5],width:e[6],comma:e[7],precision:e[8]&&e[8].slice(1),trim:e[9],type:e[10]})}he.prototype=be.prototype;function be(t){this.fill=t.fill===void 0?" ":t.fill+"",this.align=t.align===void 0?">":t.align+"",this.sign=t.sign===void 0?"-":t.sign+"",this.symbol=t.symbol===void 0?"":t.symbol+"",this.zero=!!t.zero,this.width=t.width===void 0?void 0:+t.width,this.comma=!!t.comma,this.precision=t.precision===void 0?void 0:+t.precision,this.trim=!!t.trim,this.type=t.type===void 0?"":t.type+""}be.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(this.width===void 0?"":Math.max(1,this.width|0))+(this.comma?",":"")+(this.precision===void 0?"":"."+Math.max(0,this.precision|0))+(this.trim?"~":"")+this.type};function Je(t){e:for(var e=t.length,o=1,n=-1,r;o<e;++o)switch(t[o]){case".":n=r=o;break;case"0":n===0&&(n=o),r=o;break;default:if(!+t[o])break e;n>0&&(n=0);break}return n>0?t.slice(0,n)+t.slice(r+1):t}var Be;function Ze(t,e){var o=ce(t,e);if(!o)return t+"";var n=o[0],r=o[1],a=r-(Be=Math.max(-8,Math.min(8,Math.floor(r/3)))*3)+1,s=n.length;return a===s?n:a>s?n+new Array(a-s+1).join("0"):a>0?n.slice(0,a)+"."+n.slice(a):"0."+new Array(1-a).join("0")+ce(t,Math.max(0,e+a-1))[0]}function Te(t,e){var o=ce(t,e);if(!o)return t+"";var n=o[0],r=o[1];return r<0?"0."+new Array(-r).join("0")+n:n.length>r+1?n.slice(0,r+1)+"."+n.slice(r+1):n+new Array(r-n.length+2).join("0")}const $e={"%":(t,e)=>(t*100).toFixed(e),b:t=>Math.round(t).toString(2),c:t=>t+"",d:qe,e:(t,e)=>t.toExponential(e),f:(t,e)=>t.toFixed(e),g:(t,e)=>t.toPrecision(e),o:t=>Math.round(t).toString(8),p:(t,e)=>Te(t*100,e),r:Te,s:Ze,X:t=>Math.round(t).toString(16).toUpperCase(),x:t=>Math.round(t).toString(16)};function Ee(t){return t}var Ae=Array.prototype.map,Se=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function Qe(t){var e=t.grouping===void 0||t.thousands===void 0?Ee:Ke(Ae.call(t.grouping,Number),t.thousands+""),o=t.currency===void 0?"":t.currency[0]+"",n=t.currency===void 0?"":t.currency[1]+"",r=t.decimal===void 0?".":t.decimal+"",a=t.numerals===void 0?Ee:Oe(Ae.call(t.numerals,String)),s=t.percent===void 0?"%":t.percent+"",l=t.minus===void 0?"−":t.minus+"",i=t.nan===void 0?"NaN":t.nan+"";function c(_){_=he(_);var C=_.fill,P=_.align,$=_.sign,j=_.symbol,N=_.zero,I=_.width,F=_.comma,S=_.precision,B=_.trim,M=_.type;M==="n"?(F=!0,M="g"):$e[M]||(S===void 0&&(S=12),B=!0,M="g"),(N||C==="0"&&P==="=")&&(N=!0,C="0",P="=");var U=j==="$"?o:j==="#"&&/[boxX]/.test(M)?"0"+M.toLowerCase():"",R=j==="$"?n:/[%p]/.test(M)?s:"",H=$e[M],J=/[defgprs%]/.test(M);S=S===void 0?6:/[gprs]/.test(M)?Math.max(1,Math.min(21,S)):Math.max(0,Math.min(20,S));function L(d){var k=U,p=R,m,w,W;if(M==="c")p=H(d)+p,d="";else{d=+d;var re=d<0||1/d<0;if(d=isNaN(d)?i:H(Math.abs(d),S),B&&(d=Je(d)),re&&+d==0&&$!=="+"&&(re=!1),k=(re?$==="("?$:l:$==="-"||$==="("?"":$)+k,p=(M==="s"?Se[8+Be/3]:"")+p+(re&&$==="("?")":""),J){for(m=-1,w=d.length;++m<w;)if(W=d.charCodeAt(m),48>W||W>57){p=(W===46?r+d.slice(m+1):d.slice(m))+p,d=d.slice(0,m);break}}}F&&!N&&(d=e(d,1/0));var ie=k.length+d.length+p.length,D=ie<I?new Array(I-ie+1).join(C):"";switch(F&&N&&(d=e(D+d,D.length?I-p.length:1/0),D=""),P){case"<":d=k+d+p+D;break;case"=":d=k+D+d+p;break;case"^":d=D.slice(0,ie=D.length>>1)+k+d+p+D.slice(ie);break;default:d=D+k+d+p;break}return a(d)}return L.toString=function(){return _+""},L}function h(_,C){var P=c((_=he(_),_.type="f",_)),$=Math.max(-8,Math.min(8,Math.floor(Ge(C)/3)))*3,j=Math.pow(10,-$),N=Se[8+$/3];return function(I){return P(j*I)+N}}return{format:c,formatPrefix:h}}var ae,He;Ve({thousands:",",grouping:[3],currency:["$",""]});function Ve(t){return ae=Qe(t),He=ae.format,ae.formatPrefix,ae}function ee(t,e,o){this.k=t,this.x=e,this.y=o}ee.prototype={constructor:ee,scale:function(t){return t===1?this:new ee(this.k*t,this.x,this.y)},translate:function(t,e){return t===0&e===0?this:new ee(this.k,this.x+this.k*t,this.y+this.k*e)},apply:function(t){return[t[0]*this.k+this.x,t[1]*this.k+this.y]},applyX:function(t){return t*this.k+this.x},applyY:function(t){return t*this.k+this.y},invert:function(t){return[(t[0]-this.x)/this.k,(t[1]-this.y)/this.k]},invertX:function(t){return(t-this.x)/this.k},invertY:function(t){return(t-this.y)/this.k},rescaleX:function(t){return t.copy().domain(t.range().map(this.invertX,this).map(t.invert,t))},rescaleY:function(t){return t.copy().domain(t.range().map(this.invertY,this).map(t.invert,t))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};ee.prototype;class xe extends V{constructor(e){super(),x(this,e,null,null,G,{})}}function et(t){let e,o,n=t[0].author+"",r,a,s=t[0].date+"",l;return{c(){e=g("p"),o=new pe(!1),r=_e(),a=g("datetime"),l=ue(s),this.h()},l(i){e=y(i,"P",{});var c=Z(e);o=ge(c,!1),c.forEach(u),r=ye(i),a=y(i,"DATETIME",{});var h=Z(a);l=me(h,s),h.forEach(u),this.h()},h(){o.a=null},m(i,c){E(i,e,c),o.m(n,e),E(i,r,c),E(i,a,c),b(a,l)},p(i,[c]){c&1&&n!==(n=i[0].author+"")&&o.p(n),c&1&&s!==(s=i[0].date+"")&&Fe(l,s)},i:z,o:z,d(i){i&&(u(e),u(r),u(a))}}}function tt(t,e,o){let{content:n}=e;return t.$$set=r=>{"content"in r&&o(0,n=r.content)},[n]}class nt extends V{constructor(e){super(),x(this,e,tt,et,G,{content:0})}}function Ce(t,e,o){const n=t.slice();n[2]=e[o].section,n[3]=e[o].content;const r=n[2].toLowerCase();n[4]=r;const a=n[0][n[2]];return n[5]=a,n}function Ne(t,e,o){var a;const n=t.slice();n[8]=e[o].type,n[9]=e[o].value;const r=n[0][(a=n[9])==null?void 0:a.name];return n[5]=r,n}function ot(t){let e,o,n=Q(t[3]),r=[];for(let s=0;s<n.length;s+=1)r[s]=je(Ne(t,n,s));const a=s=>A(r[s],1,1,()=>{r[s]=null});return{c(){for(let s=0;s<r.length;s+=1)r[s].c();e=T()},l(s){for(let l=0;l<r.length;l+=1)r[l].l(s);e=T()},m(s,l){for(let i=0;i<r.length;i+=1)r[i]&&r[i].m(s,l);E(s,e,l),o=!0},p(s,l){if(l&3){n=Q(s[3]);let i;for(i=0;i<n.length;i+=1){const c=Ne(s,n,i);r[i]?(r[i].p(c,l),v(r[i],1)):(r[i]=je(c),r[i].c(),v(r[i],1),r[i].m(e.parentNode,e))}for(K(),i=n.length;i<r.length;i+=1)a(i);O()}},i(s){if(!o){for(let l=0;l<n.length;l+=1)v(r[l]);o=!0}},o(s){r=r.filter(Boolean);for(let l=0;l<r.length;l+=1)A(r[l]);o=!1},d(s){s&&u(e),de(r,s)}}}function rt(t){let e,o,n;const r=[t[3]];var a=t[5];function s(l,i){let c={};for(let h=0;h<r.length;h+=1)c=te(c,r[h]);return i!==void 0&&i&2&&(c=te(c,oe(r,[le(l[3])]))),{props:c}}return a&&(e=se(a,s(t))),{c(){e&&X(e.$$.fragment),o=T()},l(l){e&&ne(e.$$.fragment,l),o=T()},m(l,i){e&&Y(e,l,i),E(l,o,i),n=!0},p(l,i){if(i&3&&a!==(a=l[5])){if(e){K();const c=e;A(c.$$.fragment,1,0,()=>{q(c,1)}),O()}a?(e=se(a,s(l,i)),X(e.$$.fragment),v(e.$$.fragment,1),Y(e,o.parentNode,o)):e=null}else if(a){const c=i&2?oe(r,[le(l[3])]):{};e.$set(c)}},i(l){n||(e&&v(e.$$.fragment,l),n=!0)},o(l){e&&A(e.$$.fragment,l),n=!1},d(l){l&&u(o),e&&q(e,l)}}}function it(t){let e=t[8],o,n=t[8]&&fe(t);return{c(){n&&n.c(),o=T()},l(r){n&&n.l(r),o=T()},m(r,a){n&&n.m(r,a),E(r,o,a)},p(r,a){r[8]?e?G(e,r[8])?(n.d(1),n=fe(r),e=r[8],n.c(),n.m(o.parentNode,o)):n.p(r,a):(n=fe(r),e=r[8],n.c(),n.m(o.parentNode,o)):e&&(n.d(1),n=null,e=r[8])},i:z,o:z,d(r){r&&u(o),n&&n.d(r)}}}function at(t){let e,o,n=t[9]+"";return{c(){e=g("p"),o=new pe(!1),this.h()},l(r){e=y(r,"P",{});var a=Z(e);o=ge(a,!1),a.forEach(u),this.h()},h(){o.a=null},m(r,a){E(r,e,a),o.m(n,e)},p(r,a){a&2&&n!==(n=r[9]+"")&&o.p(n)},i:z,o:z,d(r){r&&u(e)}}}function st(t){let e,o,n,r;const a=[ct,lt],s=[];function l(i,c){return i[5]?0:1}return e=l(t),o=s[e]=a[e](t),{c(){o.c(),n=T()},l(i){o.l(i),n=T()},m(i,c){s[e].m(i,c),E(i,n,c),r=!0},p(i,c){let h=e;e=l(i),e===h?s[e].p(i,c):(K(),A(s[h],1,1,()=>{s[h]=null}),O(),o=s[e],o?o.p(i,c):(o=s[e]=a[e](i),o.c()),v(o,1),o.m(n.parentNode,n))},i(i){r||(v(o),r=!0)},o(i){A(o),r=!1},d(i){i&&u(n),s[e].d(i)}}}function Pe(t){let e,o=t[9]+"",n;return{c(){e=new pe(!1),n=T(),this.h()},l(r){e=ge(r,!1),n=T(),this.h()},h(){e.a=n},m(r,a){e.m(o,r,a),E(r,n,a)},p(r,a){a&2&&o!==(o=r[9]+"")&&e.p(o)},d(r){r&&(u(n),e.d())}}}function fe(t){let e,o=typeof t[9]=="string"&&Pe(t),n=[t[9].attributes],r={};for(let a=0;a<n.length;a+=1)r=te(r,n[a]);return{c(){e=g(t[8]),o&&o.c(),this.h()},l(a){e=y(a,(t[8]||"null").toUpperCase(),{});var s=Z(e);o&&o.l(s),s.forEach(u),this.h()},h(){we(t[8])(e,r)},m(a,s){E(a,e,s),o&&o.m(e,null)},p(a,s){typeof a[9]=="string"?o?o.p(a,s):(o=Pe(a),o.c(),o.m(e,null)):o&&(o.d(1),o=null),we(a[8])(e,r=oe(n,[s&2&&a[9].attributes]))},d(a){a&&u(e),o&&o.d()}}}function lt(t){var a;let e,o,n=((a=t[9])==null?void 0:a.name)+"",r;return{c(){e=g("p"),o=ue("Missing component: "),r=ue(n)},l(s){e=y(s,"P",{});var l=Z(e);o=me(l,"Missing component: "),r=me(l,n),l.forEach(u)},m(s,l){E(s,e,l),b(e,o),b(e,r)},p(s,l){var i;l&2&&n!==(n=((i=s[9])==null?void 0:i.name)+"")&&Fe(r,n)},i:z,o:z,d(s){s&&u(e)}}}function ct(t){let e,o,n;const r=[t[9]];var a=t[5];function s(l,i){let c={};for(let h=0;h<r.length;h+=1)c=te(c,r[h]);return i!==void 0&&i&2&&(c=te(c,oe(r,[le(l[9])]))),{props:c}}return a&&(e=se(a,s(t))),{c(){e&&X(e.$$.fragment),o=T()},l(l){e&&ne(e.$$.fragment,l),o=T()},m(l,i){e&&Y(e,l,i),E(l,o,i),n=!0},p(l,i){if(i&3&&a!==(a=l[5])){if(e){K();const c=e;A(c.$$.fragment,1,0,()=>{q(c,1)}),O()}a?(e=se(a,s(l,i)),X(e.$$.fragment),v(e.$$.fragment,1),Y(e,o.parentNode,o)):e=null}else if(a){const c=i&2?oe(r,[le(l[9])]):{};e.$set(c)}},i(l){n||(e&&v(e.$$.fragment,l),n=!0)},o(l){e&&A(e.$$.fragment,l),n=!1},d(l){l&&u(o),e&&q(e,l)}}}function je(t){let e,o,n,r;const a=[st,at,it],s=[];function l(i,c){return i[8]==="component"?0:i[8]==="text"?1:2}return e=l(t),o=s[e]=a[e](t),{c(){o.c(),n=T()},l(i){o.l(i),n=T()},m(i,c){s[e].m(i,c),E(i,n,c),r=!0},p(i,c){let h=e;e=l(i),e===h?s[e].p(i,c):(K(),A(s[h],1,1,()=>{s[h]=null}),O(),o=s[e],o?o.p(i,c):(o=s[e]=a[e](i),o.c()),v(o,1),o.m(n.parentNode,n))},i(i){r||(v(o),r=!0)},o(i){A(o),r=!1},d(i){i&&u(n),s[e].d(i)}}}function Ie(t){let e,o,n,r,a,s;const l=[rt,ot],i=[];function c(h,_){return h[5]?0:1}return o=c(t),n=i[o]=l[o](t),{c(){e=g("section"),n.c(),r=_e(),this.h()},l(h){e=y(h,"SECTION",{id:!0});var _=Z(e);n.l(_),r=ye(_),_.forEach(u),this.h()},h(){f(e,"id",a=t[4])},m(h,_){E(h,e,_),i[o].m(e,null),b(e,r),s=!0},p(h,_){let C=o;o=c(h),o===C?i[o].p(h,_):(K(),A(i[C],1,1,()=>{i[C]=null}),O(),n=i[o],n?n.p(h,_):(n=i[o]=l[o](h),n.c()),v(n,1),n.m(e,r)),(!s||_&2&&a!==(a=h[4]))&&f(e,"id",a)},i(h){s||(v(n),s=!0)},o(h){A(n),s=!1},d(h){h&&u(e),i[o].d()}}}function ft(t){let e,o,n=Q(t[1]),r=[];for(let s=0;s<n.length;s+=1)r[s]=Ie(Ce(t,n,s));const a=s=>A(r[s],1,1,()=>{r[s]=null});return{c(){for(let s=0;s<r.length;s+=1)r[s].c();e=T()},l(s){for(let l=0;l<r.length;l+=1)r[l].l(s);e=T()},m(s,l){for(let i=0;i<r.length;i+=1)r[i]&&r[i].m(s,l);E(s,e,l),o=!0},p(s,[l]){if(l&3){n=Q(s[1]);let i;for(i=0;i<n.length;i+=1){const c=Ce(s,n,i);r[i]?(r[i].p(c,l),v(r[i],1)):(r[i]=Ie(c),r[i].c(),v(r[i],1),r[i].m(e.parentNode,e))}for(K(),i=n.length;i<r.length;i+=1)a(i);O()}},i(s){if(!o){for(let l=0;l<n.length;l+=1)v(r[l]);o=!0}},o(s){r=r.filter(Boolean);for(let l=0;l<r.length;l+=1)A(r[l]);o=!1},d(s){s&&u(e),de(r,s)}}}function ut(t,e,o){let{components:n={}}=e,{body:r=[]}=e;return t.$$set=a=>{"components"in a&&o(0,n=a.components),"body"in a&&o(1,r=a.body)},[n,r]}class mt extends V{constructor(e){super(),x(this,e,ut,ft,G,{components:0,body:1})}}function ht(t){let e,o;return e=new mt({props:{body:t[0],components:t[1]}}),{c(){X(e.$$.fragment)},l(n){ne(e.$$.fragment,n)},m(n,r){Y(e,n,r),o=!0},p(n,[r]){const a={};r&1&&(a.body=n[0]),e.$set(a)},i(n){o||(v(e.$$.fragment,n),o=!0)},o(n){A(e.$$.fragment,n),o=!1},d(n){q(e,n)}}}function dt(t,e,o){let n;const r={Hero:xe,Byline:nt},a=Le("copy");return De(()=>{const s=Math.floor((new Date-new Date(2024,7,1))/1e3/60/60/24);document.querySelector(".elapsed").textContent=`about ${He(",")(s)} days since I wrote this`}),o(0,n=a.body),[n,r]}class pt extends V{constructor(e){super(),x(this,e,dt,ht,G,{})}}const _t=[{section:"Hero",content:{hed:"Tk",dek:"Tk"}},{section:"Intro",content:[{type:"text",value:"In a mesmerizing 56 seconds of the semifinals at the 2024 World Crokinole Championship, Connor Reinman and Jason Slater both secured perfect games in the same round, sinking eight 20s each. A rare gem of Crokinole perfection on display when the stakes couldn’t be higher."},{type:"video",value:{attributes:{src:"assets/videos/perfect.mp4",preload:"true",autoplay:"true",muted:"true",loop:"true"}}},{type:"text",value:"How did we get here? How rare is a perfect game? Is Slater vs. Reinman the modern day Magic vs. Bird? Was this one of those obscure new Olympic events? You may even be asking, wtf is Cronikole? If you find yourself sitting with any of these questions, then you’ve come to the right place."},{type:"text",value:"<strong>This is Crokinole</strong>. I am <a href=https://pudding.cool/author/russell-samora target=_blank rel=noreferrer>Russell Samora</a>. And you are reading this <span class=elapsed>now</span>."}]},{section:"act1",content:[{type:"text",value:"If you are from the Canadian Province of Ontario, you might already be well-versed in Crokinole. But for the uninitiated, Crokinole is like a mashup of Shuffleboard and Curling, played on a tabletop board. It’s been around since the 19th century as a family-friendly game, but has been gaining competitive popularity globally in the past decade."}]}],ze={body:_t};function gt(){console.log("--- --- --- --- --- ---"),console.log("svelte-starter: 5.19.0"),console.log("build: 2024-08-20-15:31"),console.log("--- --- --- --- --- ---")}function yt(t){let e,o,n,r;return e=new Ye({props:{title:t[1],description:t[2],url:t[3],preloadFont:t[0],keywords:t[4]}}),n=new pt({}),{c(){X(e.$$.fragment),o=_e(),X(n.$$.fragment)},l(a){ne(e.$$.fragment,a),o=ye(a),ne(n.$$.fragment,a)},m(a,s){Y(e,a,s),E(a,o,s),Y(n,a,s),r=!0},p:z,i(a){r||(v(e.$$.fragment,a),v(n.$$.fragment,a),r=!0)},o(a){A(e.$$.fragment,a),A(n.$$.fragment,a),r=!1},d(a){a&&u(o),q(e,a),q(n,a)}}}function bt(t,e,o){let{data:n}=e;gt();const r=["https://pudding.cool/assets/fonts/tiempos/TiemposTextWeb-Regular.woff2","https://pudding.cool/assets/fonts/tiempos/TiemposTextWeb-Bold.woff2","https://pudding.cool/assets/fonts/atlas/AtlasGrotesk-Regular-Web.woff2","https://pudding.cool/assets/fonts/atlas/AtlasGrotesk-Bold-Web.woff2"],{title:a,description:s,url:l,keywords:i}=ze;return ke("copy",ze),ke("data",n.data),t.$$set=c=>{"data"in c&&o(5,n=c.data)},[r,a,s,l,i,n]}class Mt extends V{constructor(e){super(),x(this,e,bt,yt,G,{data:5})}}export{Mt as component};
