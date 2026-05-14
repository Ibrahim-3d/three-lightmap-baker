const ab=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}};ab();var Hl,Mt,xg,bg,rs,ap,yg,wg,Pc,dl,zo,Mg,bh,Nu,Uu,Ml={},El=[],lb=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,na=Array.isArray;function Ui(i,e){for(var t in e)i[t]=e[t];return i}function yh(i){i&&i.parentNode&&i.parentNode.removeChild(i)}function Sl(i,e,t){var n,s,r,o={};for(r in e)r=="key"?n=e[r]:r=="ref"?s=e[r]:o[r]=e[r];if(arguments.length>2&&(o.children=arguments.length>3?Hl.call(arguments,2):t),typeof i=="function"&&i.defaultProps!=null)for(r in i.defaultProps)o[r]===void 0&&(o[r]=i.defaultProps[r]);return pl(i,o,n,s,null)}function pl(i,e,t,n,s){var r={type:i,props:e,key:t,ref:n,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:s==null?++xg:s,__i:-1,__u:0};return s==null&&Mt.vnode!=null&&Mt.vnode(r),r}function Gl(i){return i.children}function Ho(i,e){this.props=i,this.context=e}function Fr(i,e){if(e==null)return i.__?Fr(i.__,i.__i+1):null;for(var t;e<i.__k.length;e++)if((t=i.__k[e])!=null&&t.__e!=null)return t.__e;return typeof i.type=="function"?Fr(i):null}function cb(i){if(i.__P&&i.__d){var e=i.__v,t=e.__e,n=[],s=[],r=Ui({},e);r.__v=e.__v+1,Mt.vnode&&Mt.vnode(r),wh(i.__P,r,e,i.__n,i.__P.namespaceURI,32&e.__u?[t]:null,n,t==null?Fr(e):t,!!(32&e.__u),s),r.__v=e.__v,r.__.__k[r.__i]=r,Cg(n,r,s),e.__e=e.__=null,r.__e!=t&&Eg(r)}}function Eg(i){if((i=i.__)!=null&&i.__c!=null)return i.__e=i.__c.base=null,i.__k.some(function(e){if(e!=null&&e.__e!=null)return i.__e=i.__c.base=e.__e}),Eg(i)}function lp(i){(!i.__d&&(i.__d=!0)&&rs.push(i)&&!Tl.__r++||ap!=Mt.debounceRendering)&&((ap=Mt.debounceRendering)||yg)(Tl)}function Tl(){try{for(var i,e=1;rs.length;)rs.length>e&&rs.sort(wg),i=rs.shift(),e=rs.length,cb(i)}finally{rs.length=Tl.__r=0}}function Sg(i,e,t,n,s,r,o,l,c,u,d){var p,m,g,b,w,x,v,M=n&&n.__k||El,y=e.length;for(c=ub(t,e,M,c,y),p=0;p<y;p++)(g=t.__k[p])!=null&&(m=g.__i!=-1&&M[g.__i]||Ml,g.__i=p,x=wh(i,g,m,s,r,o,l,c,u,d),b=g.__e,g.ref&&m.ref!=g.ref&&(m.ref&&Mh(m.ref,null,g),d.push(g.ref,g.__c||b,g)),w==null&&b!=null&&(w=b),(v=!!(4&g.__u))||m.__k===g.__k?(c=Tg(g,c,i,v),v&&m.__e&&(m.__e=null)):typeof g.type=="function"&&x!==void 0?c=x:b&&(c=b.nextSibling),g.__u&=-7);return t.__e=w,c}function ub(i,e,t,n,s){var r,o,l,c,u,d=t.length,p=d,m=0;for(i.__k=new Array(s),r=0;r<s;r++)(o=e[r])!=null&&typeof o!="boolean"&&typeof o!="function"?(typeof o=="string"||typeof o=="number"||typeof o=="bigint"||o.constructor==String?o=i.__k[r]=pl(null,o,null,null,null):na(o)?o=i.__k[r]=pl(Gl,{children:o},null,null,null):o.constructor===void 0&&o.__b>0?o=i.__k[r]=pl(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):i.__k[r]=o,c=r+m,o.__=i,o.__b=i.__b+1,l=null,(u=o.__i=hb(o,t,c,p))!=-1&&(p--,(l=t[u])&&(l.__u|=2)),l==null||l.__v==null?(u==-1&&(s>d?m--:s<d&&m++),typeof o.type!="function"&&(o.__u|=4)):u!=c&&(u==c-1?m--:u==c+1?m++:(u>c?m--:m++,o.__u|=4))):i.__k[r]=null;if(p)for(r=0;r<d;r++)(l=t[r])!=null&&(2&l.__u)==0&&(l.__e==n&&(n=Fr(l)),Rg(l,l));return n}function Tg(i,e,t,n){var s,r;if(typeof i.type=="function"){for(s=i.__k,r=0;s&&r<s.length;r++)s[r]&&(s[r].__=i,e=Tg(s[r],e,t,n));return e}i.__e!=e&&(n&&(e&&i.type&&!e.parentNode&&(e=Fr(i)),t.insertBefore(i.__e,e||null)),e=i.__e);do e=e&&e.nextSibling;while(e!=null&&e.nodeType==8);return e}function Ag(i,e){return e=e||[],i==null||typeof i=="boolean"||(na(i)?i.some(function(t){Ag(t,e)}):e.push(i)),e}function hb(i,e,t,n){var s,r,o,l=i.key,c=i.type,u=e[t],d=u!=null&&(2&u.__u)==0;if(u===null&&l==null||d&&l==u.key&&c==u.type)return t;if(n>(d?1:0)){for(s=t-1,r=t+1;s>=0||r<e.length;)if((u=e[o=s>=0?s--:r++])!=null&&(2&u.__u)==0&&l==u.key&&c==u.type)return o}return-1}function cp(i,e,t){e[0]=="-"?i.setProperty(e,t==null?"":t):i[e]=t==null?"":typeof t!="number"||lb.test(e)?t:t+"px"}function va(i,e,t,n,s){var r,o;e:if(e=="style")if(typeof t=="string")i.style.cssText=t;else{if(typeof n=="string"&&(i.style.cssText=n=""),n)for(e in n)t&&e in t||cp(i.style,e,"");if(t)for(e in t)n&&t[e]==n[e]||cp(i.style,e,t[e])}else if(e[0]=="o"&&e[1]=="n")r=e!=(e=e.replace(Mg,"$1")),o=e.toLowerCase(),e=o in i||e=="onFocusOut"||e=="onFocusIn"?o.slice(2):e.slice(2),i.l||(i.l={}),i.l[e+r]=t,t?n?t[zo]=n[zo]:(t[zo]=bh,i.addEventListener(e,r?Uu:Nu,r)):i.removeEventListener(e,r?Uu:Nu,r);else{if(s=="http://www.w3.org/2000/svg")e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!="width"&&e!="height"&&e!="href"&&e!="list"&&e!="form"&&e!="tabIndex"&&e!="download"&&e!="rowSpan"&&e!="colSpan"&&e!="role"&&e!="popover"&&e in i)try{i[e]=t==null?"":t;break e}catch{}typeof t=="function"||(t==null||t===!1&&e[4]!="-"?i.removeAttribute(e):i.setAttribute(e,e=="popover"&&t==1?"":t))}}function up(i){return function(e){if(this.l){var t=this.l[e.type+i];if(e[dl]==null)e[dl]=bh++;else if(e[dl]<t[zo])return;return t(Mt.event?Mt.event(e):e)}}}function wh(i,e,t,n,s,r,o,l,c,u){var d,p,m,g,b,w,x,v,M,y,S,C,P,T,I,F=e.type;if(e.constructor!==void 0)return null;128&t.__u&&(c=!!(32&t.__u),r=[l=e.__e=t.__e]),(d=Mt.__b)&&d(e);e:if(typeof F=="function")try{if(v=e.props,M=F.prototype&&F.prototype.render,y=(d=F.contextType)&&n[d.__c],S=d?y?y.props.value:d.__:n,t.__c?x=(p=e.__c=t.__c).__=p.__E:(M?e.__c=p=new F(v,S):(e.__c=p=new Ho(v,S),p.constructor=F,p.render=pb),y&&y.sub(p),p.state||(p.state={}),p.__n=n,m=p.__d=!0,p.__h=[],p._sb=[]),M&&p.__s==null&&(p.__s=p.state),M&&F.getDerivedStateFromProps!=null&&(p.__s==p.state&&(p.__s=Ui({},p.__s)),Ui(p.__s,F.getDerivedStateFromProps(v,p.__s))),g=p.props,b=p.state,p.__v=e,m)M&&F.getDerivedStateFromProps==null&&p.componentWillMount!=null&&p.componentWillMount(),M&&p.componentDidMount!=null&&p.__h.push(p.componentDidMount);else{if(M&&F.getDerivedStateFromProps==null&&v!==g&&p.componentWillReceiveProps!=null&&p.componentWillReceiveProps(v,S),e.__v==t.__v||!p.__e&&p.shouldComponentUpdate!=null&&p.shouldComponentUpdate(v,p.__s,S)===!1){e.__v!=t.__v&&(p.props=v,p.state=p.__s,p.__d=!1),e.__e=t.__e,e.__k=t.__k,e.__k.some(function(E){E&&(E.__=e)}),El.push.apply(p.__h,p._sb),p._sb=[],p.__h.length&&o.push(p);break e}p.componentWillUpdate!=null&&p.componentWillUpdate(v,p.__s,S),M&&p.componentDidUpdate!=null&&p.__h.push(function(){p.componentDidUpdate(g,b,w)})}if(p.context=S,p.props=v,p.__P=i,p.__e=!1,C=Mt.__r,P=0,M)p.state=p.__s,p.__d=!1,C&&C(e),d=p.render(p.props,p.state,p.context),El.push.apply(p.__h,p._sb),p._sb=[];else do p.__d=!1,C&&C(e),d=p.render(p.props,p.state,p.context),p.state=p.__s;while(p.__d&&++P<25);p.state=p.__s,p.getChildContext!=null&&(n=Ui(Ui({},n),p.getChildContext())),M&&!m&&p.getSnapshotBeforeUpdate!=null&&(w=p.getSnapshotBeforeUpdate(g,b)),T=d!=null&&d.type===Gl&&d.key==null?Pg(d.props.children):d,l=Sg(i,na(T)?T:[T],e,t,n,s,r,o,l,c,u),p.base=e.__e,e.__u&=-161,p.__h.length&&o.push(p),x&&(p.__E=p.__=null)}catch(E){if(e.__v=null,c||r!=null)if(E.then){for(e.__u|=c?160:128;l&&l.nodeType==8&&l.nextSibling;)l=l.nextSibling;r[r.indexOf(l)]=null,e.__e=l}else{for(I=r.length;I--;)yh(r[I]);ku(e)}else e.__e=t.__e,e.__k=t.__k,E.then||ku(e);Mt.__e(E,e,t)}else r==null&&e.__v==t.__v?(e.__k=t.__k,e.__e=t.__e):l=e.__e=db(t.__e,e,t,n,s,r,o,c,u);return(d=Mt.diffed)&&d(e),128&e.__u?void 0:l}function ku(i){i&&(i.__c&&(i.__c.__e=!0),i.__k&&i.__k.some(ku))}function Cg(i,e,t){for(var n=0;n<t.length;n++)Mh(t[n],t[++n],t[++n]);Mt.__c&&Mt.__c(e,i),i.some(function(s){try{i=s.__h,s.__h=[],i.some(function(r){r.call(s)})}catch(r){Mt.__e(r,s.__v)}})}function Pg(i){return typeof i!="object"||i==null||i.__b>0?i:na(i)?i.map(Pg):Ui({},i)}function db(i,e,t,n,s,r,o,l,c){var u,d,p,m,g,b,w,x=t.props||Ml,v=e.props,M=e.type;if(M=="svg"?s="http://www.w3.org/2000/svg":M=="math"?s="http://www.w3.org/1998/Math/MathML":s||(s="http://www.w3.org/1999/xhtml"),r!=null){for(u=0;u<r.length;u++)if((g=r[u])&&"setAttribute"in g==!!M&&(M?g.localName==M:g.nodeType==3)){i=g,r[u]=null;break}}if(i==null){if(M==null)return document.createTextNode(v);i=document.createElementNS(s,M,v.is&&v),l&&(Mt.__m&&Mt.__m(e,r),l=!1),r=null}if(M==null)x===v||l&&i.data==v||(i.data=v);else{if(r=r&&Hl.call(i.childNodes),!l&&r!=null)for(x={},u=0;u<i.attributes.length;u++)x[(g=i.attributes[u]).name]=g.value;for(u in x)g=x[u],u=="dangerouslySetInnerHTML"?p=g:u=="children"||u in v||u=="value"&&"defaultValue"in v||u=="checked"&&"defaultChecked"in v||va(i,u,null,g,s);for(u in v)g=v[u],u=="children"?m=g:u=="dangerouslySetInnerHTML"?d=g:u=="value"?b=g:u=="checked"?w=g:l&&typeof g!="function"||x[u]===g||va(i,u,g,x[u],s);if(d)l||p&&(d.__html==p.__html||d.__html==i.innerHTML)||(i.innerHTML=d.__html),e.__k=[];else if(p&&(i.innerHTML=""),Sg(e.type=="template"?i.content:i,na(m)?m:[m],e,t,n,M=="foreignObject"?"http://www.w3.org/1999/xhtml":s,r,o,r?r[0]:t.__k&&Fr(t,0),l,c),r!=null)for(u=r.length;u--;)yh(r[u]);l||(u="value",M=="progress"&&b==null?i.removeAttribute("value"):b!=null&&(b!==i[u]||M=="progress"&&!b||M=="option"&&b!=x[u])&&va(i,u,b,x[u],s),u="checked",w!=null&&w!=i[u]&&va(i,u,w,x[u],s))}return i}function Mh(i,e,t){try{if(typeof i=="function"){var n=typeof i.__u=="function";n&&i.__u(),n&&e==null||(i.__u=i(e))}else i.current=e}catch(s){Mt.__e(s,t)}}function Rg(i,e,t){var n,s;if(Mt.unmount&&Mt.unmount(i),(n=i.ref)&&(n.current&&n.current!=i.__e||Mh(n,null,e)),(n=i.__c)!=null){if(n.componentWillUnmount)try{n.componentWillUnmount()}catch(r){Mt.__e(r,e)}n.base=n.__P=null}if(n=i.__k)for(s=0;s<n.length;s++)n[s]&&Rg(n[s],e,t||typeof i.type!="function");t||yh(i.__e),i.__c=i.__=i.__e=void 0}function pb(i,e,t){return this.constructor(i,t)}function fb(i,e,t){var n,s,r,o;e==document&&(e=document.documentElement),Mt.__&&Mt.__(i,e),s=(n=typeof t=="function")?null:t&&t.__k||e.__k,r=[],o=[],wh(e,i=(!n&&t||e).__k=Sl(Gl,null,[i]),s||Ml,Ml,e.namespaceURI,!n&&t?[t]:s?null:e.firstChild?Hl.call(e.childNodes):null,r,!n&&t?t:s?s.__e:e.firstChild,n,o),Cg(r,i,o)}Hl=El.slice,Mt={__e:function(i,e,t,n){for(var s,r,o;e=e.__;)if((s=e.__c)&&!s.__)try{if((r=s.constructor)&&r.getDerivedStateFromError!=null&&(s.setState(r.getDerivedStateFromError(i)),o=s.__d),s.componentDidCatch!=null&&(s.componentDidCatch(i,n||{}),o=s.__d),o)return s.__E=s}catch(l){i=l}throw i}},xg=0,bg=function(i){return i!=null&&i.constructor===void 0},Ho.prototype.setState=function(i,e){var t;t=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=Ui({},this.state),typeof i=="function"&&(i=i(Ui({},t),this.props)),i&&Ui(t,i),i!=null&&this.__v&&(e&&this._sb.push(e),lp(this))},Ho.prototype.forceUpdate=function(i){this.__v&&(this.__e=!0,i&&this.__h.push(i),lp(this))},Ho.prototype.render=Gl,rs=[],yg=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,wg=function(i,e){return i.__v.__b-e.__v.__b},Tl.__r=0,Pc=Math.random().toString(8),dl="__d"+Pc,zo="__a"+Pc,Mg=/(PointerCapture)$|Capture$/i,bh=0,Nu=up(!1),Uu=up(!0);var mb=0;function ve(i,e,t,n,s,r){e||(e={});var o,l,c=e;if("ref"in c)for(l in c={},e)l=="ref"?o=e[l]:c[l]=e[l];var u={type:i,props:c,key:t,ref:o,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--mb,__i:-1,__u:0,__source:s,__self:r};if(typeof i=="function"&&(o=i.defaultProps))for(l in o)c[l]===void 0&&(c[l]=o[l]);return Mt.vnode&&Mt.vnode(u),u}var Al,Pn,Rc,hp,Fu=0,Lg=[],$t=Mt,dp=$t.__b,pp=$t.__r,fp=$t.diffed,mp=$t.__c,gp=$t.unmount,vp=$t.__;function Ig(i,e){$t.__h&&$t.__h(Pn,i,Fu||e),Fu=0;var t=Pn.__H||(Pn.__H={__:[],__h:[]});return i>=t.__.length&&t.__.push({}),t.__[i]}function Dg(i,e){var t=Ig(Al++,3);!$t.__s&&Ng(t.__H,e)&&(t.__=i,t.u=e,Pn.__H.__h.push(t))}function Lc(i){return Fu=5,Eh(function(){return{current:i}},[])}function Eh(i,e){var t=Ig(Al++,7);return Ng(t.__H,e)&&(t.__=i(),t.__H=e,t.__h=i),t.__}function gb(){for(var i;i=Lg.shift();){var e=i.__H;if(i.__P&&e)try{e.__h.some(fl),e.__h.some(Ou),e.__h=[]}catch(t){e.__h=[],$t.__e(t,i.__v)}}}$t.__b=function(i){Pn=null,dp&&dp(i)},$t.__=function(i,e){i&&e.__k&&e.__k.__m&&(i.__m=e.__k.__m),vp&&vp(i,e)},$t.__r=function(i){pp&&pp(i),Al=0;var e=(Pn=i.__c).__H;e&&(Rc===Pn?(e.__h=[],Pn.__h=[],e.__.some(function(t){t.__N&&(t.__=t.__N),t.u=t.__N=void 0})):(e.__h.some(fl),e.__h.some(Ou),e.__h=[],Al=0)),Rc=Pn},$t.diffed=function(i){fp&&fp(i);var e=i.__c;e&&e.__H&&(e.__H.__h.length&&(Lg.push(e)!==1&&hp===$t.requestAnimationFrame||((hp=$t.requestAnimationFrame)||vb)(gb)),e.__H.__.some(function(t){t.u&&(t.__H=t.u),t.u=void 0})),Rc=Pn=null},$t.__c=function(i,e){e.some(function(t){try{t.__h.some(fl),t.__h=t.__h.filter(function(n){return!n.__||Ou(n)})}catch(n){e.some(function(s){s.__h&&(s.__h=[])}),e=[],$t.__e(n,t.__v)}}),mp&&mp(i,e)},$t.unmount=function(i){gp&&gp(i);var e,t=i.__c;t&&t.__H&&(t.__H.__.some(function(n){try{fl(n)}catch(s){e=s}}),t.__H=void 0,e&&$t.__e(e,t.__v))};var _p=typeof requestAnimationFrame=="function";function vb(i){var e,t=function(){clearTimeout(n),_p&&cancelAnimationFrame(e),setTimeout(i)},n=setTimeout(t,35);_p&&(e=requestAnimationFrame(t))}function fl(i){var e=Pn,t=i.__c;typeof t=="function"&&(i.__c=void 0,t()),Pn=e}function Ou(i){var e=Pn;i.__c=i.__(),Pn=e}function Ng(i,e){return!i||i.length!==e.length||e.some(function(t,n){return t!==i[n]})}var _b=Symbol.for("preact-signals");function Sh(){if(Ds>1)Ds--;else{var i,e=!1;for(function(){var s=Pl;for(Pl=void 0;s!==void 0;)s.S.v===s.v&&(s.S.i=s.i),s=s.o}();Go!==void 0;){var t=Go;for(Go=void 0,Cl++;t!==void 0;){var n=t.u;if(t.u=void 0,t.f&=-3,!(8&t.f)&&kg(t))try{t.c()}catch(s){e||(i=s,e=!0)}t=n}}if(Cl=0,Ds--,e)throw i}}var Tt=void 0;function Th(i){var e=Tt;Tt=void 0;try{return i()}finally{Tt=e}}var Go=void 0,Ds=0,Cl=0,xp=0,Pl=void 0,Rl=0;function Ug(i){if(Tt!==void 0){var e=i.n;if(e===void 0||e.t!==Tt)return e={i:0,S:i,p:Tt.s,n:void 0,t:Tt,e:void 0,x:void 0,r:e},Tt.s!==void 0&&(Tt.s.n=e),Tt.s=e,i.n=e,32&Tt.f&&i.S(e),e;if(e.i===-1)return e.i=0,e.n!==void 0&&(e.n.p=e.p,e.p!==void 0&&(e.p.n=e.n),e.p=Tt.s,e.n=void 0,Tt.s.n=e,Tt.s=e),e}}function dn(i,e){this.v=i,this.i=0,this.n=void 0,this.t=void 0,this.l=0,this.W=e==null?void 0:e.watched,this.Z=e==null?void 0:e.unwatched,this.name=e==null?void 0:e.name}dn.prototype.brand=_b;dn.prototype.h=function(){return!0};dn.prototype.S=function(i){var e=this,t=this.t;t!==i&&i.e===void 0&&(i.x=t,this.t=i,t!==void 0?t.e=i:Th(function(){var n;(n=e.W)==null||n.call(e)}))};dn.prototype.U=function(i){var e=this;if(this.t!==void 0){var t=i.e,n=i.x;t!==void 0&&(t.x=n,i.e=void 0),n!==void 0&&(n.e=t,i.x=void 0),i===this.t&&(this.t=n,n===void 0&&Th(function(){var s;(s=e.Z)==null||s.call(e)}))}};dn.prototype.subscribe=function(i){var e=this;return Ko(function(){var t=e.value,n=Tt;Tt=void 0;try{i(t)}finally{Tt=n}},{name:"sub"})};dn.prototype.valueOf=function(){return this.value};dn.prototype.toString=function(){return this.value+""};dn.prototype.toJSON=function(){return this.value};dn.prototype.peek=function(){var i=this;return Th(function(){return i.value})};Object.defineProperty(dn.prototype,"value",{get:function(){var i=Ug(this);return i!==void 0&&(i.i=this.i),this.v},set:function(i){if(i!==this.v){if(Cl>100)throw new Error("Cycle detected");(function(t){Ds!==0&&Cl===0&&t.l!==xp&&(t.l=xp,Pl={S:t,v:t.v,i:t.i,o:Pl})})(this),this.v=i,this.i++,Rl++,Ds++;try{for(var e=this.t;e!==void 0;e=e.x)e.t.N()}finally{Sh()}}}});function On(i,e){return new dn(i,e)}function kg(i){for(var e=i.s;e!==void 0;e=e.n)if(e.S.i!==e.i||!e.S.h()||e.S.i!==e.i)return!0;return!1}function Fg(i){for(var e=i.s;e!==void 0;e=e.n){var t=e.S.n;if(t!==void 0&&(e.r=t),e.S.n=e,e.i=-1,e.n===void 0){i.s=e;break}}}function Og(i){for(var e=i.s,t=void 0;e!==void 0;){var n=e.p;e.i===-1?(e.S.U(e),n!==void 0&&(n.n=e.n),e.n!==void 0&&(e.n.p=n)):t=e,e.S.n=e.r,e.r!==void 0&&(e.r=void 0),e=n}i.s=t}function zs(i,e){dn.call(this,void 0),this.x=i,this.s=void 0,this.g=Rl-1,this.f=4,this.W=e==null?void 0:e.watched,this.Z=e==null?void 0:e.unwatched,this.name=e==null?void 0:e.name}zs.prototype=new dn;zs.prototype.h=function(){if(this.f&=-3,1&this.f)return!1;if((36&this.f)==32||(this.f&=-5,this.g===Rl))return!0;if(this.g=Rl,this.f|=1,this.i>0&&!kg(this))return this.f&=-2,!0;var i=Tt;try{Fg(this),Tt=this;var e=this.x();(16&this.f||this.v!==e||this.i===0)&&(this.v=e,this.f&=-17,this.i++)}catch(t){this.v=t,this.f|=16,this.i++}return Tt=i,Og(this),this.f&=-2,!0};zs.prototype.S=function(i){if(this.t===void 0){this.f|=36;for(var e=this.s;e!==void 0;e=e.n)e.S.S(e)}dn.prototype.S.call(this,i)};zs.prototype.U=function(i){if(this.t!==void 0&&(dn.prototype.U.call(this,i),this.t===void 0)){this.f&=-33;for(var e=this.s;e!==void 0;e=e.n)e.S.U(e)}};zs.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var i=this.t;i!==void 0;i=i.x)i.t.N()}};Object.defineProperty(zs.prototype,"value",{get:function(){if(1&this.f)throw new Error("Cycle detected");var i=Ug(this);if(this.h(),i!==void 0&&(i.i=this.i),16&this.f)throw this.v;return this.v}});function Ah(i,e){return new zs(i,e)}function Bg(i){var e=i.m;if(i.m=void 0,typeof e=="function"){Ds++;var t=Tt;Tt=void 0;try{e()}catch(n){throw i.f&=-2,i.f|=8,Ch(i),n}finally{Tt=t,Sh()}}}function Ch(i){for(var e=i.s;e!==void 0;e=e.n)e.S.U(e);i.x=void 0,i.s=void 0,Bg(i)}function xb(i){if(Tt!==this)throw new Error("Out-of-order effect");Og(this),Tt=i,this.f&=-2,8&this.f&&Ch(this),Sh()}function qr(i,e){this.x=i,this.m=void 0,this.s=void 0,this.u=void 0,this.f=32,this.name=e==null?void 0:e.name}qr.prototype.c=function(){var i=this.S();try{if(8&this.f||this.x===void 0)return;var e=this.x();typeof e=="function"&&(this.m=e)}finally{i()}};qr.prototype.S=function(){if(1&this.f)throw new Error("Cycle detected");this.f|=1,this.f&=-9,Bg(this),Fg(this),Ds++;var i=Tt;return Tt=this,xb.bind(this,i)};qr.prototype.N=function(){2&this.f||(this.f|=2,this.u=Go,Go=this)};qr.prototype.d=function(){this.f|=8,1&this.f||Ch(this)};qr.prototype.dispose=function(){this.d()};function Ko(i,e){var t=new qr(i,e);try{t.c()}catch(s){throw t.d(),s}var n=t.d.bind(t);return n[Symbol.dispose]=n,n}var _a;function Yr(i,e){Mt[i]=e.bind(null,Mt[i]||function(){})}function Ll(i){if(_a){var e=_a;_a=void 0,e()}_a=i&&i.S()}function Vg(i){var e=this,t=i.data,n=yb(t);n.value=t;var s=Eh(function(){for(var r=e.__v;r=r.__;)if(r.__c){r.__c.__$f|=4;break}return e.__$u.c=function(){var o,l=e.__$u.S(),c=s.value;l(),bg(c)||((o=e.base)==null?void 0:o.nodeType)!==3?(e.__$f|=1,e.setState({})):e.base.data=c},Ah(function(){var o=n.value.value;return o===0?0:o===!0?"":o||""})},[]);return s.value}Vg.displayName="_st";Object.defineProperties(dn.prototype,{constructor:{configurable:!0,value:void 0},type:{configurable:!0,value:Vg},props:{configurable:!0,get:function(){return{data:this}}},__b:{configurable:!0,value:1}});Yr("__b",function(i,e){if(typeof e.type=="string"){var t,n=e.props;for(var s in n)if(s!=="children"){var r=n[s];r instanceof dn&&(t||(e.__np=t={}),t[s]=r,n[s]=r.peek())}}i(e)});Yr("__r",function(i,e){i(e),Ll();var t,n=e.__c;n&&(n.__$f&=-2,(t=n.__$u)===void 0&&(n.__$u=t=function(s){var r;return Ko(function(){r=this}),r.c=function(){n.__$f|=1,n.setState({})},r}())),Ll(t)});Yr("__e",function(i,e,t,n){Ll(),i(e,t,n)});Yr("diffed",function(i,e){Ll();var t;if(typeof e.type=="string"&&(t=e.__e)){var n=e.__np,s=e.props;if(n){var r=t.U;if(r)for(var o in r){var l=r[o];l!==void 0&&!(o in n)&&(l.d(),r[o]=void 0)}else t.U=r={};for(var c in n){var u=r[c],d=n[c];u===void 0?(u=bb(t,c,d,s),r[c]=u):u.o(d,s)}}}i(e)});function bb(i,e,t,n){var s=e in i&&i.ownerSVGElement===void 0,r=On(t);return{o:function(o,l){r.value=o,n=l},d:Ko(function(){var o=r.value.value;n[e]!==o&&(n[e]=o,s?i[e]=o:o?i.setAttribute(e,o):i.removeAttribute(e))})}}Yr("unmount",function(i,e){if(typeof e.type=="string"){var t=e.__e;if(t){var n=t.U;if(n){t.U=void 0;for(var s in n){var r=n[s];r&&r.d()}}}}else{var o=e.__c;if(o){var l=o.__$u;l&&(o.__$u=void 0,l.d())}}i(e)});Yr("__h",function(i,e,t,n){(n<3||n===9)&&(e.__$f|=2),i(e,t,n)});Ho.prototype.shouldComponentUpdate=function(i,e){if(this.__R)return!0;var t=this.__$u,n=t&&t.s!==void 0;for(var s in e)return!0;if(this.__f||typeof this.u=="boolean"&&this.u===!0){if(!(n||2&this.__$f||4&this.__$f)||1&this.__$f)return!0}else if(!(n||4&this.__$f)||3&this.__$f)return!0;for(var r in i)if(r!=="__source"&&i[r]!==this.props[r])return!0;for(var o in this.props)if(!(o in i))return!0;return!1};function yb(i){return Eh(function(){return On(i)},[])}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ph="161",Zs={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Qs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},wb=0,bp=1,Mb=2,zg=1,Eb=2,Ii=3,oi=0,Tn=1,wn=2,qn=0,Nr=1,yp=2,wp=3,Mp=4,Sb=5,As=100,Tb=101,Ab=102,Ep=103,Sp=104,Cb=200,Pb=201,Rb=202,Lb=203,Bu=204,Vu=205,Ib=206,Db=207,Nb=208,Ub=209,kb=210,Fb=211,Ob=212,Bb=213,Vb=214,zb=0,Hb=1,Gb=2,Il=3,Wb=4,Xb=5,jb=6,$b=7,Hg=0,qb=1,Yb=2,us=0,Kb=1,Zb=2,Qb=3,Jb=4,ey=5,ty=6,Tp="attached",ny="detached",Gg=300,Or=301,Br=302,zu=303,Hu=304,Wl=306,Vr=1e3,_n=1001,Dl=1002,mt=1003,Gu=1004,Pr=1005,bt=1006,ml=1007,ki=1008,mi=1009,Wu=1010,Wg=1011,Xl=1012,Wo=1013,Un=1014,wt=1015,Yn=1016,Xg=1017,jg=1018,Ns=1020,iy=1021,Yt=1023,sy=1024,ry=1025,Us=1026,zr=1027,$g=1028,Rh=1029,qg=1030,jl=1031,Zo=1033,Ic=33776,Dc=33777,Nc=33778,Uc=33779,Ap=35840,Cp=35841,Pp=35842,Rp=35843,Yg=36196,Lp=37492,Ip=37496,Dp=37808,Np=37809,Up=37810,kp=37811,Fp=37812,Op=37813,Bp=37814,Vp=37815,zp=37816,Hp=37817,Gp=37818,Wp=37819,Xp=37820,jp=37821,kc=36492,$p=36494,qp=36495,oy=36283,Yp=36284,Kp=36285,Zp=36286,Qo=2300,Hr=2301,Fc=2302,Qp=2400,Jp=2401,ef=2402,ay=2500,ly=0,Kg=1,Xu=2,Zg=3e3,ks=3001,cy=3200,uy=3201,Qg=0,hy=1,Xn="",Vt="srgb",ln="srgb-linear",Lh="display-p3",$l="display-p3-linear",Nl="linear",Lt="srgb",Ul="rec709",kl="p3",Js=7680,tf=519,dy=512,py=513,fy=514,Jg=515,my=516,gy=517,vy=518,_y=519,ju=35044,Kn="300 es",$u=1035,Fi=2e3,Fl=2001;class Hs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let nf=1234567;const Xo=Math.PI/180,Gr=180/Math.PI;function ri(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(fn[i&255]+fn[i>>8&255]+fn[i>>16&255]+fn[i>>24&255]+"-"+fn[e&255]+fn[e>>8&255]+"-"+fn[e>>16&15|64]+fn[e>>24&255]+"-"+fn[t&63|128]+fn[t>>8&255]+"-"+fn[t>>16&255]+fn[t>>24&255]+fn[n&255]+fn[n>>8&255]+fn[n>>16&255]+fn[n>>24&255]).toLowerCase()}function en(i,e,t){return Math.max(e,Math.min(t,i))}function Ih(i,e){return(i%e+e)%e}function xy(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function by(i,e,t){return i!==e?(t-i)/(e-i):0}function jo(i,e,t){return(1-t)*i+t*e}function yy(i,e,t,n){return jo(i,e,1-Math.exp(-t*n))}function wy(i,e=1){return e-Math.abs(Ih(i,e*2)-e)}function My(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Ey(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Sy(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Ty(i,e){return i+Math.random()*(e-i)}function Ay(i){return i*(.5-Math.random())}function Cy(i){i!==void 0&&(nf=i);let e=nf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Py(i){return i*Xo}function Ry(i){return i*Gr}function qu(i){return(i&i-1)===0&&i!==0}function Ly(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Ol(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Iy(i,e,t,n,s){const r=Math.cos,o=Math.sin,l=r(t/2),c=o(t/2),u=r((e+n)/2),d=o((e+n)/2),p=r((e-n)/2),m=o((e-n)/2),g=r((n-e)/2),b=o((n-e)/2);switch(s){case"XYX":i.set(l*d,c*p,c*m,l*u);break;case"YZY":i.set(c*m,l*d,c*p,l*u);break;case"ZXZ":i.set(c*p,c*m,l*d,l*u);break;case"XZX":i.set(l*d,c*b,c*g,l*u);break;case"YXY":i.set(c*g,l*d,c*b,l*u);break;case"ZYZ":i.set(c*b,c*g,l*d,l*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function si(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function _t(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const e0={DEG2RAD:Xo,RAD2DEG:Gr,generateUUID:ri,clamp:en,euclideanModulo:Ih,mapLinear:xy,inverseLerp:by,lerp:jo,damp:yy,pingpong:wy,smoothstep:My,smootherstep:Ey,randInt:Sy,randFloat:Ty,randFloatSpread:Ay,seededRandom:Cy,degToRad:Py,radToDeg:Ry,isPowerOfTwo:qu,ceilPowerOfTwo:Ly,floorPowerOfTwo:Ol,setQuaternionFromProperEuler:Iy,normalize:_t,denormalize:si};class Le{constructor(e=0,t=0){Le.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(en(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class st{constructor(e,t,n,s,r,o,l,c,u){st.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,l,c,u)}set(e,t,n,s,r,o,l,c,u){const d=this.elements;return d[0]=e,d[1]=s,d[2]=l,d[3]=t,d[4]=r,d[5]=c,d[6]=n,d[7]=o,d[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],l=n[3],c=n[6],u=n[1],d=n[4],p=n[7],m=n[2],g=n[5],b=n[8],w=s[0],x=s[3],v=s[6],M=s[1],y=s[4],S=s[7],C=s[2],P=s[5],T=s[8];return r[0]=o*w+l*M+c*C,r[3]=o*x+l*y+c*P,r[6]=o*v+l*S+c*T,r[1]=u*w+d*M+p*C,r[4]=u*x+d*y+p*P,r[7]=u*v+d*S+p*T,r[2]=m*w+g*M+b*C,r[5]=m*x+g*y+b*P,r[8]=m*v+g*S+b*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],l=e[5],c=e[6],u=e[7],d=e[8];return t*o*d-t*l*u-n*r*d+n*l*c+s*r*u-s*o*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],l=e[5],c=e[6],u=e[7],d=e[8],p=d*o-l*u,m=l*c-d*r,g=u*r-o*c,b=t*p+n*m+s*g;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/b;return e[0]=p*w,e[1]=(s*u-d*n)*w,e[2]=(l*n-s*o)*w,e[3]=m*w,e[4]=(d*t-s*c)*w,e[5]=(s*r-l*t)*w,e[6]=g*w,e[7]=(n*c-u*t)*w,e[8]=(o*t-n*r)*w,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,l){const c=Math.cos(r),u=Math.sin(r);return this.set(n*c,n*u,-n*(c*o+u*l)+o+e,-s*u,s*c,-s*(-u*o+c*l)+l+t,0,0,1),this}scale(e,t){return this.premultiply(Oc.makeScale(e,t)),this}rotate(e){return this.premultiply(Oc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Oc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Oc=new st;function t0(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Jo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Dy(){const i=Jo("canvas");return i.style.display="block",i}const sf={};function Fs(i){i in sf||(sf[i]=!0,console.warn(i))}const rf=new st().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),of=new st().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),xa={[ln]:{transfer:Nl,primaries:Ul,toReference:i=>i,fromReference:i=>i},[Vt]:{transfer:Lt,primaries:Ul,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[$l]:{transfer:Nl,primaries:kl,toReference:i=>i.applyMatrix3(of),fromReference:i=>i.applyMatrix3(rf)},[Lh]:{transfer:Lt,primaries:kl,toReference:i=>i.convertSRGBToLinear().applyMatrix3(of),fromReference:i=>i.applyMatrix3(rf).convertLinearToSRGB()}},Ny=new Set([ln,$l]),gt={enabled:!0,_workingColorSpace:ln,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Ny.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=xa[e].toReference,s=xa[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return xa[i].primaries},getTransfer:function(i){return i===Xn?Nl:xa[i].transfer}};function Ur(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Bc(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let er;class n0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{er===void 0&&(er=Jo("canvas")),er.width=e.width,er.height=e.height;const n=er.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=er}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){const t=Jo("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ur(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ur(t[n]/255)*255):t[n]=Ur(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Uy=0;class i0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Uy++}),this.uuid=ri(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,l=s.length;o<l;o++)s[o].isDataTexture?r.push(Vc(s[o].image)):r.push(Vc(s[o]))}else r=Vc(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Vc(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?n0.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ky=0;class Zt extends Hs{constructor(e=Zt.DEFAULT_IMAGE,t=Zt.DEFAULT_MAPPING,n=_n,s=_n,r=bt,o=ki,l=Yt,c=mi,u=Zt.DEFAULT_ANISOTROPY,d=Xn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ky++}),this.uuid=ri(),this.name="",this.source=new i0(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=u,this.format=l,this.internalFormat=null,this.type=c,this.offset=new Le(0,0),this.repeat=new Le(1,1),this.center=new Le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof d=="string"?this.colorSpace=d:(Fs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=d===ks?Vt:Xn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Gg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Vr:e.x=e.x-Math.floor(e.x);break;case _n:e.x=e.x<0?0:1;break;case Dl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Vr:e.y=e.y-Math.floor(e.y);break;case _n:e.y=e.y<0?0:1;break;case Dl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Fs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Vt?ks:Zg}set encoding(e){Fs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===ks?Vt:Xn}}Zt.DEFAULT_IMAGE=null;Zt.DEFAULT_MAPPING=Gg;Zt.DEFAULT_ANISOTROPY=1;class yt{constructor(e=0,t=0,n=0,s=1){yt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const c=e.elements,u=c[0],d=c[4],p=c[8],m=c[1],g=c[5],b=c[9],w=c[2],x=c[6],v=c[10];if(Math.abs(d-m)<.01&&Math.abs(p-w)<.01&&Math.abs(b-x)<.01){if(Math.abs(d+m)<.1&&Math.abs(p+w)<.1&&Math.abs(b+x)<.1&&Math.abs(u+g+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(u+1)/2,S=(g+1)/2,C=(v+1)/2,P=(d+m)/4,T=(p+w)/4,I=(b+x)/4;return y>S&&y>C?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=P/n,r=T/n):S>C?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=P/s,r=I/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=T/r,s=I/r),this.set(n,s,r,t),this}let M=Math.sqrt((x-b)*(x-b)+(p-w)*(p-w)+(m-d)*(m-d));return Math.abs(M)<.001&&(M=1),this.x=(x-b)/M,this.y=(p-w)/M,this.z=(m-d)/M,this.w=Math.acos((u+g+v-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Fy extends Hs{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new yt(0,0,e,t),this.scissorTest=!1,this.viewport=new yt(0,0,e,t);const s={width:e,height:t,depth:1};n.encoding!==void 0&&(Fs("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===ks?Vt:Xn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Zt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new i0(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ln extends Fy{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class s0 extends Zt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=mt,this.minFilter=mt,this.wrapR=_n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Oy extends Zt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=mt,this.minFilter=mt,this.wrapR=_n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class By extends Ln{constructor(e=1,t=1,n=1,s={}){super(e,t,s),this.isWebGLMultipleRenderTargets=!0;const r=this.texture;this.texture=[];for(let o=0;o<n;o++)this.texture[o]=r.clone(),this.texture[o].isRenderTargetTexture=!0}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.texture.length;s<r;s++)this.texture[s].image.width=e,this.texture[s].image.height=t,this.texture[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}copy(e){this.dispose(),this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.texture.length=0;for(let t=0,n=e.texture.length;t<n;t++)this.texture[t]=e.texture[t].clone(),this.texture[t].isRenderTargetTexture=!0;return this}}class qt{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,l){let c=n[s+0],u=n[s+1],d=n[s+2],p=n[s+3];const m=r[o+0],g=r[o+1],b=r[o+2],w=r[o+3];if(l===0){e[t+0]=c,e[t+1]=u,e[t+2]=d,e[t+3]=p;return}if(l===1){e[t+0]=m,e[t+1]=g,e[t+2]=b,e[t+3]=w;return}if(p!==w||c!==m||u!==g||d!==b){let x=1-l;const v=c*m+u*g+d*b+p*w,M=v>=0?1:-1,y=1-v*v;if(y>Number.EPSILON){const C=Math.sqrt(y),P=Math.atan2(C,v*M);x=Math.sin(x*P)/C,l=Math.sin(l*P)/C}const S=l*M;if(c=c*x+m*S,u=u*x+g*S,d=d*x+b*S,p=p*x+w*S,x===1-l){const C=1/Math.sqrt(c*c+u*u+d*d+p*p);c*=C,u*=C,d*=C,p*=C}}e[t]=c,e[t+1]=u,e[t+2]=d,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,s,r,o){const l=n[s],c=n[s+1],u=n[s+2],d=n[s+3],p=r[o],m=r[o+1],g=r[o+2],b=r[o+3];return e[t]=l*b+d*p+c*g-u*m,e[t+1]=c*b+d*m+u*p-l*g,e[t+2]=u*b+d*g+l*m-c*p,e[t+3]=d*b-l*p-c*m-u*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,l=Math.cos,c=Math.sin,u=l(n/2),d=l(s/2),p=l(r/2),m=c(n/2),g=c(s/2),b=c(r/2);switch(o){case"XYZ":this._x=m*d*p+u*g*b,this._y=u*g*p-m*d*b,this._z=u*d*b+m*g*p,this._w=u*d*p-m*g*b;break;case"YXZ":this._x=m*d*p+u*g*b,this._y=u*g*p-m*d*b,this._z=u*d*b-m*g*p,this._w=u*d*p+m*g*b;break;case"ZXY":this._x=m*d*p-u*g*b,this._y=u*g*p+m*d*b,this._z=u*d*b+m*g*p,this._w=u*d*p-m*g*b;break;case"ZYX":this._x=m*d*p-u*g*b,this._y=u*g*p+m*d*b,this._z=u*d*b-m*g*p,this._w=u*d*p+m*g*b;break;case"YZX":this._x=m*d*p+u*g*b,this._y=u*g*p+m*d*b,this._z=u*d*b-m*g*p,this._w=u*d*p-m*g*b;break;case"XZY":this._x=m*d*p-u*g*b,this._y=u*g*p-m*d*b,this._z=u*d*b+m*g*p,this._w=u*d*p+m*g*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],l=t[5],c=t[9],u=t[2],d=t[6],p=t[10],m=n+l+p;if(m>0){const g=.5/Math.sqrt(m+1);this._w=.25/g,this._x=(d-c)*g,this._y=(r-u)*g,this._z=(o-s)*g}else if(n>l&&n>p){const g=2*Math.sqrt(1+n-l-p);this._w=(d-c)/g,this._x=.25*g,this._y=(s+o)/g,this._z=(r+u)/g}else if(l>p){const g=2*Math.sqrt(1+l-n-p);this._w=(r-u)/g,this._x=(s+o)/g,this._y=.25*g,this._z=(c+d)/g}else{const g=2*Math.sqrt(1+p-n-l);this._w=(o-s)/g,this._x=(r+u)/g,this._y=(c+d)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(en(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,l=t._x,c=t._y,u=t._z,d=t._w;return this._x=n*d+o*l+s*u-r*c,this._y=s*d+o*c+r*l-n*u,this._z=r*d+o*u+n*c-s*l,this._w=o*d-n*l-s*c-r*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let l=o*e._w+n*e._x+s*e._y+r*e._z;if(l<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,l=-l):this.copy(e),l>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-l*l;if(c<=Number.EPSILON){const g=1-t;return this._w=g*o+t*this._w,this._x=g*n+t*this._x,this._y=g*s+t*this._y,this._z=g*r+t*this._z,this.normalize(),this}const u=Math.sqrt(c),d=Math.atan2(u,l),p=Math.sin((1-t)*d)/u,m=Math.sin(t*d)/u;return this._w=o*p+this._w*m,this._x=n*p+this._x*m,this._y=s*p+this._y*m,this._z=r*p+this._z*m,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(r),n*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,n=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(af.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(af.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,l=e.z,c=e.w,u=2*(o*s-l*n),d=2*(l*t-r*s),p=2*(r*n-o*t);return this.x=t+c*u+o*p-l*d,this.y=n+c*d+l*u-r*p,this.z=s+c*p+r*d-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,l=t.y,c=t.z;return this.x=s*c-r*l,this.y=r*o-n*c,this.z=n*l-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return zc.copy(this).projectOnVector(e),this.sub(zc)}reflect(e){return this.sub(zc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(en(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const zc=new D,af=new qt;class Wt{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Jn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Jn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Jn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,l=r.count;o<l;o++)e.isMesh===!0?e.getVertexPosition(o,Jn):Jn.fromBufferAttribute(r,o),Jn.applyMatrix4(e.matrixWorld),this.expandByPoint(Jn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ba.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ba.copy(n.boundingBox)),ba.applyMatrix4(e.matrixWorld),this.union(ba)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Jn),Jn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(xo),ya.subVectors(this.max,xo),tr.subVectors(e.a,xo),nr.subVectors(e.b,xo),ir.subVectors(e.c,xo),Yi.subVectors(nr,tr),Ki.subVectors(ir,nr),xs.subVectors(tr,ir);let t=[0,-Yi.z,Yi.y,0,-Ki.z,Ki.y,0,-xs.z,xs.y,Yi.z,0,-Yi.x,Ki.z,0,-Ki.x,xs.z,0,-xs.x,-Yi.y,Yi.x,0,-Ki.y,Ki.x,0,-xs.y,xs.x,0];return!Hc(t,tr,nr,ir,ya)||(t=[1,0,0,0,1,0,0,0,1],!Hc(t,tr,nr,ir,ya))?!1:(wa.crossVectors(Yi,Ki),t=[wa.x,wa.y,wa.z],Hc(t,tr,nr,ir,ya))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Jn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Jn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Si),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Si=[new D,new D,new D,new D,new D,new D,new D,new D],Jn=new D,ba=new Wt,tr=new D,nr=new D,ir=new D,Yi=new D,Ki=new D,xs=new D,xo=new D,ya=new D,wa=new D,bs=new D;function Hc(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){bs.fromArray(i,r);const l=s.x*Math.abs(bs.x)+s.y*Math.abs(bs.y)+s.z*Math.abs(bs.z),c=e.dot(bs),u=t.dot(bs),d=n.dot(bs);if(Math.max(-Math.max(c,u,d),Math.min(c,u,d))>l)return!1}return!0}const Vy=new Wt,bo=new D,Gc=new D;class li{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Vy.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;bo.subVectors(e,this.center);const t=bo.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(bo,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Gc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(bo.copy(e.center).add(Gc)),this.expandByPoint(bo.copy(e.center).sub(Gc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ti=new D,Wc=new D,Ma=new D,Zi=new D,Xc=new D,Ea=new D,jc=new D;class Kr{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ti)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ti.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ti.copy(this.origin).addScaledVector(this.direction,t),Ti.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Wc.copy(e).add(t).multiplyScalar(.5),Ma.copy(t).sub(e).normalize(),Zi.copy(this.origin).sub(Wc);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Ma),l=Zi.dot(this.direction),c=-Zi.dot(Ma),u=Zi.lengthSq(),d=Math.abs(1-o*o);let p,m,g,b;if(d>0)if(p=o*c-l,m=o*l-c,b=r*d,p>=0)if(m>=-b)if(m<=b){const w=1/d;p*=w,m*=w,g=p*(p+o*m+2*l)+m*(o*p+m+2*c)+u}else m=r,p=Math.max(0,-(o*m+l)),g=-p*p+m*(m+2*c)+u;else m=-r,p=Math.max(0,-(o*m+l)),g=-p*p+m*(m+2*c)+u;else m<=-b?(p=Math.max(0,-(-o*r+l)),m=p>0?-r:Math.min(Math.max(-r,-c),r),g=-p*p+m*(m+2*c)+u):m<=b?(p=0,m=Math.min(Math.max(-r,-c),r),g=m*(m+2*c)+u):(p=Math.max(0,-(o*r+l)),m=p>0?r:Math.min(Math.max(-r,-c),r),g=-p*p+m*(m+2*c)+u);else m=o>0?-r:r,p=Math.max(0,-(o*m+l)),g=-p*p+m*(m+2*c)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(Wc).addScaledVector(Ma,m),g}intersectSphere(e,t){Ti.subVectors(e.center,this.origin);const n=Ti.dot(this.direction),s=Ti.dot(Ti)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),l=n-o,c=n+o;return c<0?null:l<0?this.at(c,t):this.at(l,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,l,c;const u=1/this.direction.x,d=1/this.direction.y,p=1/this.direction.z,m=this.origin;return u>=0?(n=(e.min.x-m.x)*u,s=(e.max.x-m.x)*u):(n=(e.max.x-m.x)*u,s=(e.min.x-m.x)*u),d>=0?(r=(e.min.y-m.y)*d,o=(e.max.y-m.y)*d):(r=(e.max.y-m.y)*d,o=(e.min.y-m.y)*d),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),p>=0?(l=(e.min.z-m.z)*p,c=(e.max.z-m.z)*p):(l=(e.max.z-m.z)*p,c=(e.min.z-m.z)*p),n>c||l>s)||((l>n||n!==n)&&(n=l),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Ti)!==null}intersectTriangle(e,t,n,s,r){Xc.subVectors(t,e),Ea.subVectors(n,e),jc.crossVectors(Xc,Ea);let o=this.direction.dot(jc),l;if(o>0){if(s)return null;l=1}else if(o<0)l=-1,o=-o;else return null;Zi.subVectors(this.origin,e);const c=l*this.direction.dot(Ea.crossVectors(Zi,Ea));if(c<0)return null;const u=l*this.direction.dot(Xc.cross(Zi));if(u<0||c+u>o)return null;const d=-l*Zi.dot(jc);return d<0?null:this.at(d/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class je{constructor(e,t,n,s,r,o,l,c,u,d,p,m,g,b,w,x){je.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,l,c,u,d,p,m,g,b,w,x)}set(e,t,n,s,r,o,l,c,u,d,p,m,g,b,w,x){const v=this.elements;return v[0]=e,v[4]=t,v[8]=n,v[12]=s,v[1]=r,v[5]=o,v[9]=l,v[13]=c,v[2]=u,v[6]=d,v[10]=p,v[14]=m,v[3]=g,v[7]=b,v[11]=w,v[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new je().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/sr.setFromMatrixColumn(e,0).length(),r=1/sr.setFromMatrixColumn(e,1).length(),o=1/sr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),l=Math.sin(n),c=Math.cos(s),u=Math.sin(s),d=Math.cos(r),p=Math.sin(r);if(e.order==="XYZ"){const m=o*d,g=o*p,b=l*d,w=l*p;t[0]=c*d,t[4]=-c*p,t[8]=u,t[1]=g+b*u,t[5]=m-w*u,t[9]=-l*c,t[2]=w-m*u,t[6]=b+g*u,t[10]=o*c}else if(e.order==="YXZ"){const m=c*d,g=c*p,b=u*d,w=u*p;t[0]=m+w*l,t[4]=b*l-g,t[8]=o*u,t[1]=o*p,t[5]=o*d,t[9]=-l,t[2]=g*l-b,t[6]=w+m*l,t[10]=o*c}else if(e.order==="ZXY"){const m=c*d,g=c*p,b=u*d,w=u*p;t[0]=m-w*l,t[4]=-o*p,t[8]=b+g*l,t[1]=g+b*l,t[5]=o*d,t[9]=w-m*l,t[2]=-o*u,t[6]=l,t[10]=o*c}else if(e.order==="ZYX"){const m=o*d,g=o*p,b=l*d,w=l*p;t[0]=c*d,t[4]=b*u-g,t[8]=m*u+w,t[1]=c*p,t[5]=w*u+m,t[9]=g*u-b,t[2]=-u,t[6]=l*c,t[10]=o*c}else if(e.order==="YZX"){const m=o*c,g=o*u,b=l*c,w=l*u;t[0]=c*d,t[4]=w-m*p,t[8]=b*p+g,t[1]=p,t[5]=o*d,t[9]=-l*d,t[2]=-u*d,t[6]=g*p+b,t[10]=m-w*p}else if(e.order==="XZY"){const m=o*c,g=o*u,b=l*c,w=l*u;t[0]=c*d,t[4]=-p,t[8]=u*d,t[1]=m*p+w,t[5]=o*d,t[9]=g*p-b,t[2]=b*p-g,t[6]=l*d,t[10]=w*p+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(zy,e,Hy)}lookAt(e,t,n){const s=this.elements;return In.subVectors(e,t),In.lengthSq()===0&&(In.z=1),In.normalize(),Qi.crossVectors(n,In),Qi.lengthSq()===0&&(Math.abs(n.z)===1?In.x+=1e-4:In.z+=1e-4,In.normalize(),Qi.crossVectors(n,In)),Qi.normalize(),Sa.crossVectors(In,Qi),s[0]=Qi.x,s[4]=Sa.x,s[8]=In.x,s[1]=Qi.y,s[5]=Sa.y,s[9]=In.y,s[2]=Qi.z,s[6]=Sa.z,s[10]=In.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],l=n[4],c=n[8],u=n[12],d=n[1],p=n[5],m=n[9],g=n[13],b=n[2],w=n[6],x=n[10],v=n[14],M=n[3],y=n[7],S=n[11],C=n[15],P=s[0],T=s[4],I=s[8],F=s[12],E=s[1],R=s[5],B=s[9],W=s[13],U=s[2],H=s[6],G=s[10],X=s[14],Q=s[3],Y=s[7],ie=s[11],ne=s[15];return r[0]=o*P+l*E+c*U+u*Q,r[4]=o*T+l*R+c*H+u*Y,r[8]=o*I+l*B+c*G+u*ie,r[12]=o*F+l*W+c*X+u*ne,r[1]=d*P+p*E+m*U+g*Q,r[5]=d*T+p*R+m*H+g*Y,r[9]=d*I+p*B+m*G+g*ie,r[13]=d*F+p*W+m*X+g*ne,r[2]=b*P+w*E+x*U+v*Q,r[6]=b*T+w*R+x*H+v*Y,r[10]=b*I+w*B+x*G+v*ie,r[14]=b*F+w*W+x*X+v*ne,r[3]=M*P+y*E+S*U+C*Q,r[7]=M*T+y*R+S*H+C*Y,r[11]=M*I+y*B+S*G+C*ie,r[15]=M*F+y*W+S*X+C*ne,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],l=e[5],c=e[9],u=e[13],d=e[2],p=e[6],m=e[10],g=e[14],b=e[3],w=e[7],x=e[11],v=e[15];return b*(+r*c*p-s*u*p-r*l*m+n*u*m+s*l*g-n*c*g)+w*(+t*c*g-t*u*m+r*o*m-s*o*g+s*u*d-r*c*d)+x*(+t*u*p-t*l*g-r*o*p+n*o*g+r*l*d-n*u*d)+v*(-s*l*d-t*c*p+t*l*m+s*o*p-n*o*m+n*c*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],l=e[5],c=e[6],u=e[7],d=e[8],p=e[9],m=e[10],g=e[11],b=e[12],w=e[13],x=e[14],v=e[15],M=p*x*u-w*m*u+w*c*g-l*x*g-p*c*v+l*m*v,y=b*m*u-d*x*u-b*c*g+o*x*g+d*c*v-o*m*v,S=d*w*u-b*p*u+b*l*g-o*w*g-d*l*v+o*p*v,C=b*p*c-d*w*c-b*l*m+o*w*m+d*l*x-o*p*x,P=t*M+n*y+s*S+r*C;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/P;return e[0]=M*T,e[1]=(w*m*r-p*x*r-w*s*g+n*x*g+p*s*v-n*m*v)*T,e[2]=(l*x*r-w*c*r+w*s*u-n*x*u-l*s*v+n*c*v)*T,e[3]=(p*c*r-l*m*r-p*s*u+n*m*u+l*s*g-n*c*g)*T,e[4]=y*T,e[5]=(d*x*r-b*m*r+b*s*g-t*x*g-d*s*v+t*m*v)*T,e[6]=(b*c*r-o*x*r-b*s*u+t*x*u+o*s*v-t*c*v)*T,e[7]=(o*m*r-d*c*r+d*s*u-t*m*u-o*s*g+t*c*g)*T,e[8]=S*T,e[9]=(b*p*r-d*w*r-b*n*g+t*w*g+d*n*v-t*p*v)*T,e[10]=(o*w*r-b*l*r+b*n*u-t*w*u-o*n*v+t*l*v)*T,e[11]=(d*l*r-o*p*r-d*n*u+t*p*u+o*n*g-t*l*g)*T,e[12]=C*T,e[13]=(d*w*s-b*p*s+b*n*m-t*w*m-d*n*x+t*p*x)*T,e[14]=(b*l*s-o*w*s-b*n*c+t*w*c+o*n*x-t*l*x)*T,e[15]=(o*p*s-d*l*s+d*n*c-t*p*c-o*n*m+t*l*m)*T,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,l=e.y,c=e.z,u=r*o,d=r*l;return this.set(u*o+n,u*l-s*c,u*c+s*l,0,u*l+s*c,d*l+n,d*c-s*o,0,u*c-s*l,d*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,l=t._z,c=t._w,u=r+r,d=o+o,p=l+l,m=r*u,g=r*d,b=r*p,w=o*d,x=o*p,v=l*p,M=c*u,y=c*d,S=c*p,C=n.x,P=n.y,T=n.z;return s[0]=(1-(w+v))*C,s[1]=(g+S)*C,s[2]=(b-y)*C,s[3]=0,s[4]=(g-S)*P,s[5]=(1-(m+v))*P,s[6]=(x+M)*P,s[7]=0,s[8]=(b+y)*T,s[9]=(x-M)*T,s[10]=(1-(m+w))*T,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=sr.set(s[0],s[1],s[2]).length();const o=sr.set(s[4],s[5],s[6]).length(),l=sr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],ei.copy(this);const u=1/r,d=1/o,p=1/l;return ei.elements[0]*=u,ei.elements[1]*=u,ei.elements[2]*=u,ei.elements[4]*=d,ei.elements[5]*=d,ei.elements[6]*=d,ei.elements[8]*=p,ei.elements[9]*=p,ei.elements[10]*=p,t.setFromRotationMatrix(ei),n.x=r,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,o,l=Fi){const c=this.elements,u=2*r/(t-e),d=2*r/(n-s),p=(t+e)/(t-e),m=(n+s)/(n-s);let g,b;if(l===Fi)g=-(o+r)/(o-r),b=-2*o*r/(o-r);else if(l===Fl)g=-o/(o-r),b=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return c[0]=u,c[4]=0,c[8]=p,c[12]=0,c[1]=0,c[5]=d,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=b,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,l=Fi){const c=this.elements,u=1/(t-e),d=1/(n-s),p=1/(o-r),m=(t+e)*u,g=(n+s)*d;let b,w;if(l===Fi)b=(o+r)*p,w=-2*p;else if(l===Fl)b=r*p,w=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return c[0]=2*u,c[4]=0,c[8]=0,c[12]=-m,c[1]=0,c[5]=2*d,c[9]=0,c[13]=-g,c[2]=0,c[6]=0,c[10]=w,c[14]=-b,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const sr=new D,ei=new je,zy=new D(0,0,0),Hy=new D(1,1,1),Qi=new D,Sa=new D,In=new D,lf=new je,cf=new qt;class ia{constructor(e=0,t=0,n=0,s=ia.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],l=s[8],c=s[1],u=s[5],d=s[9],p=s[2],m=s[6],g=s[10];switch(t){case"XYZ":this._y=Math.asin(en(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,g),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(m,u),this._z=0);break;case"YXZ":this._x=Math.asin(-en(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(l,g),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(en(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-p,g),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-en(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(m,g),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(en(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,u),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(l,g));break;case"XZY":this._z=Math.asin(-en(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(m,u),this._y=Math.atan2(l,r)):(this._x=Math.atan2(-d,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return lf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(lf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return cf.setFromEuler(this),this.setFromQuaternion(cf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ia.DEFAULT_ORDER="XYZ";class Dh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Gy=0;const uf=new D,rr=new qt,Ai=new je,Ta=new D,yo=new D,Wy=new D,Xy=new qt,hf=new D(1,0,0),df=new D(0,1,0),pf=new D(0,0,1),jy={type:"added"},$y={type:"removed"};class vt extends Hs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Gy++}),this.uuid=ri(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=vt.DEFAULT_UP.clone();const e=new D,t=new ia,n=new qt,s=new D(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new je},normalMatrix:{value:new st}}),this.matrix=new je,this.matrixWorld=new je,this.matrixAutoUpdate=vt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Dh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return rr.setFromAxisAngle(e,t),this.quaternion.multiply(rr),this}rotateOnWorldAxis(e,t){return rr.setFromAxisAngle(e,t),this.quaternion.premultiply(rr),this}rotateX(e){return this.rotateOnAxis(hf,e)}rotateY(e){return this.rotateOnAxis(df,e)}rotateZ(e){return this.rotateOnAxis(pf,e)}translateOnAxis(e,t){return uf.copy(e).applyQuaternion(this.quaternion),this.position.add(uf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(hf,e)}translateY(e){return this.translateOnAxis(df,e)}translateZ(e){return this.translateOnAxis(pf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ai.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ta.copy(e):Ta.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),yo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ai.lookAt(yo,Ta,this.up):Ai.lookAt(Ta,yo,this.up),this.quaternion.setFromRotationMatrix(Ai),s&&(Ai.extractRotation(s.matrixWorld),rr.setFromRotationMatrix(Ai),this.quaternion.premultiply(rr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(jy)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent($y)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ai.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ai.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ai),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yo,e,Wy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yo,Xy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++){const l=s[r];l.matrixWorldAutoUpdate===!0&&l.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(l=>({boxInitialized:l.boxInitialized,boxMin:l.box.min.toArray(),boxMax:l.box.max.toArray(),sphereInitialized:l.sphereInitialized,sphereRadius:l.sphere.radius,sphereCenter:l.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(l,c){return l[c.uuid]===void 0&&(l[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const c=l.shapes;if(Array.isArray(c))for(let u=0,d=c.length;u<d;u++){const p=c[u];r(e.shapes,p)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let c=0,u=this.material.length;c<u;c++)l.push(r(e.materials,this.material[c]));s.material=l}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let l=0;l<this.children.length;l++)s.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let l=0;l<this.animations.length;l++){const c=this.animations[l];s.animations.push(r(e.animations,c))}}if(t){const l=o(e.geometries),c=o(e.materials),u=o(e.textures),d=o(e.images),p=o(e.shapes),m=o(e.skeletons),g=o(e.animations),b=o(e.nodes);l.length>0&&(n.geometries=l),c.length>0&&(n.materials=c),u.length>0&&(n.textures=u),d.length>0&&(n.images=d),p.length>0&&(n.shapes=p),m.length>0&&(n.skeletons=m),g.length>0&&(n.animations=g),b.length>0&&(n.nodes=b)}return n.object=s,n;function o(l){const c=[];for(const u in l){const d=l[u];delete d.metadata,c.push(d)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}vt.DEFAULT_UP=new D(0,1,0);vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ti=new D,Ci=new D,$c=new D,Pi=new D,or=new D,ar=new D,ff=new D,qc=new D,Yc=new D,Kc=new D;class Mn{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),ti.subVectors(e,t),s.cross(ti);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){ti.subVectors(s,t),Ci.subVectors(n,t),$c.subVectors(e,t);const o=ti.dot(ti),l=ti.dot(Ci),c=ti.dot($c),u=Ci.dot(Ci),d=Ci.dot($c),p=o*u-l*l;if(p===0)return r.set(0,0,0),null;const m=1/p,g=(u*c-l*d)*m,b=(o*d-l*c)*m;return r.set(1-g-b,b,g)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Pi)===null?!1:Pi.x>=0&&Pi.y>=0&&Pi.x+Pi.y<=1}static getInterpolation(e,t,n,s,r,o,l,c){return this.getBarycoord(e,t,n,s,Pi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Pi.x),c.addScaledVector(o,Pi.y),c.addScaledVector(l,Pi.z),c)}static isFrontFacing(e,t,n,s){return ti.subVectors(n,t),Ci.subVectors(e,t),ti.cross(Ci).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ti.subVectors(this.c,this.b),Ci.subVectors(this.a,this.b),ti.cross(Ci).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Mn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Mn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return Mn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return Mn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Mn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,l;or.subVectors(s,n),ar.subVectors(r,n),qc.subVectors(e,n);const c=or.dot(qc),u=ar.dot(qc);if(c<=0&&u<=0)return t.copy(n);Yc.subVectors(e,s);const d=or.dot(Yc),p=ar.dot(Yc);if(d>=0&&p<=d)return t.copy(s);const m=c*p-d*u;if(m<=0&&c>=0&&d<=0)return o=c/(c-d),t.copy(n).addScaledVector(or,o);Kc.subVectors(e,r);const g=or.dot(Kc),b=ar.dot(Kc);if(b>=0&&g<=b)return t.copy(r);const w=g*u-c*b;if(w<=0&&u>=0&&b<=0)return l=u/(u-b),t.copy(n).addScaledVector(ar,l);const x=d*b-g*p;if(x<=0&&p-d>=0&&g-b>=0)return ff.subVectors(r,s),l=(p-d)/(p-d+(g-b)),t.copy(s).addScaledVector(ff,l);const v=1/(x+w+m);return o=w*v,l=m*v,t.copy(n).addScaledVector(or,o).addScaledVector(ar,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const r0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ji={h:0,s:0,l:0},Aa={h:0,s:0,l:0};function Zc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class We{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,gt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=gt.workingColorSpace){return this.r=e,this.g=t,this.b=n,gt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=gt.workingColorSpace){if(e=Ih(e,1),t=en(t,0,1),n=en(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Zc(o,r,e+1/3),this.g=Zc(o,r,e),this.b=Zc(o,r,e-1/3)}return gt.toWorkingColorSpace(this,s),this}setStyle(e,t=Vt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],l=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Vt){const n=r0[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ur(e.r),this.g=Ur(e.g),this.b=Ur(e.b),this}copyLinearToSRGB(e){return this.r=Bc(e.r),this.g=Bc(e.g),this.b=Bc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Vt){return gt.fromWorkingColorSpace(mn.copy(this),e),Math.round(en(mn.r*255,0,255))*65536+Math.round(en(mn.g*255,0,255))*256+Math.round(en(mn.b*255,0,255))}getHexString(e=Vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=gt.workingColorSpace){gt.fromWorkingColorSpace(mn.copy(this),t);const n=mn.r,s=mn.g,r=mn.b,o=Math.max(n,s,r),l=Math.min(n,s,r);let c,u;const d=(l+o)/2;if(l===o)c=0,u=0;else{const p=o-l;switch(u=d<=.5?p/(o+l):p/(2-o-l),o){case n:c=(s-r)/p+(s<r?6:0);break;case s:c=(r-n)/p+2;break;case r:c=(n-s)/p+4;break}c/=6}return e.h=c,e.s=u,e.l=d,e}getRGB(e,t=gt.workingColorSpace){return gt.fromWorkingColorSpace(mn.copy(this),t),e.r=mn.r,e.g=mn.g,e.b=mn.b,e}getStyle(e=Vt){gt.fromWorkingColorSpace(mn.copy(this),e);const t=mn.r,n=mn.g,s=mn.b;return e!==Vt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Ji),this.setHSL(Ji.h+e,Ji.s+t,Ji.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ji),e.getHSL(Aa);const n=jo(Ji.h,Aa.h,t),s=jo(Ji.s,Aa.s,t),r=jo(Ji.l,Aa.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const mn=new We;We.NAMES=r0;let qy=0;class gi extends Hs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qy++}),this.uuid=ri(),this.name="",this.type="Material",this.blending=Nr,this.side=oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Bu,this.blendDst=Vu,this.blendEquation=As,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new We(0,0,0),this.blendAlpha=0,this.depthFunc=Il,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=tf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Js,this.stencilZFail=Js,this.stencilZPass=Js,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Nr&&(n.blending=this.blending),this.side!==oi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Bu&&(n.blendSrc=this.blendSrc),this.blendDst!==Vu&&(n.blendDst=this.blendDst),this.blendEquation!==As&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Il&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==tf&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Js&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Js&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Js&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const l in r){const c=r[l];delete c.metadata,o.push(c)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class fi extends gi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Hg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ni=Yy();function Yy(){const i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),s=new Uint32Array(512);for(let c=0;c<256;++c){const u=c-127;u<-27?(n[c]=0,n[c|256]=32768,s[c]=24,s[c|256]=24):u<-14?(n[c]=1024>>-u-14,n[c|256]=1024>>-u-14|32768,s[c]=-u-1,s[c|256]=-u-1):u<=15?(n[c]=u+15<<10,n[c|256]=u+15<<10|32768,s[c]=13,s[c|256]=13):u<128?(n[c]=31744,n[c|256]=64512,s[c]=24,s[c|256]=24):(n[c]=31744,n[c|256]=64512,s[c]=13,s[c|256]=13)}const r=new Uint32Array(2048),o=new Uint32Array(64),l=new Uint32Array(64);for(let c=1;c<1024;++c){let u=c<<13,d=0;for(;(u&8388608)===0;)u<<=1,d-=8388608;u&=-8388609,d+=947912704,r[c]=u|d}for(let c=1024;c<2048;++c)r[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)o[c]=c<<23;o[31]=1199570944,o[32]=2147483648;for(let c=33;c<63;++c)o[c]=2147483648+(c-32<<23);o[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(l[c]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:s,mantissaTable:r,exponentTable:o,offsetTable:l}}function Ky(i){Math.abs(i)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),i=en(i,-65504,65504),Ni.floatView[0]=i;const e=Ni.uint32View[0],t=e>>23&511;return Ni.baseTable[t]+((e&8388607)>>Ni.shiftTable[t])}function Zy(i){const e=i>>10;return Ni.uint32View[0]=Ni.mantissaTable[Ni.offsetTable[e]+(i&1023)]+Ni.exponentTable[e],Ni.floatView[0]}const Qy={toHalfFloat:Ky,fromHalfFloat:Zy},Xt=new D,Ca=new Le;class Dt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ju,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=wt,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Fs("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ca.fromBufferAttribute(this,t),Ca.applyMatrix3(e),this.setXY(t,Ca.x,Ca.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix3(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix4(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.applyNormalMatrix(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.transformDirection(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=si(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=_t(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=si(t,this.array)),t}setX(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=si(t,this.array)),t}setY(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=si(t,this.array)),t}setZ(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=si(t,this.array)),t}setW(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array),s=_t(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array),s=_t(s,this.array),r=_t(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ju&&(e.usage=this.usage),e}}class o0 extends Dt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class a0 extends Dt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class At extends Dt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Jy=0;const Gn=new je,Qc=new vt,lr=new D,Dn=new Wt,wo=new Wt,an=new D;class cn extends Hs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Jy++}),this.uuid=ri(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(t0(e)?a0:o0)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new st().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Gn.makeRotationFromQuaternion(e),this.applyMatrix4(Gn),this}rotateX(e){return Gn.makeRotationX(e),this.applyMatrix4(Gn),this}rotateY(e){return Gn.makeRotationY(e),this.applyMatrix4(Gn),this}rotateZ(e){return Gn.makeRotationZ(e),this.applyMatrix4(Gn),this}translate(e,t,n){return Gn.makeTranslation(e,t,n),this.applyMatrix4(Gn),this}scale(e,t,n){return Gn.makeScale(e,t,n),this.applyMatrix4(Gn),this}lookAt(e){return Qc.lookAt(e),Qc.updateMatrix(),this.applyMatrix4(Qc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(lr).negate(),this.translate(lr.x,lr.y,lr.z),this}setFromPoints(e){const t=[];for(let n=0,s=e.length;n<s;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new At(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Dn.setFromBufferAttribute(r),this.morphTargetsRelative?(an.addVectors(this.boundingBox.min,Dn.min),this.boundingBox.expandByPoint(an),an.addVectors(this.boundingBox.max,Dn.max),this.boundingBox.expandByPoint(an)):(this.boundingBox.expandByPoint(Dn.min),this.boundingBox.expandByPoint(Dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new li);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new D,1/0);return}if(e){const n=this.boundingSphere.center;if(Dn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];wo.setFromBufferAttribute(l),this.morphTargetsRelative?(an.addVectors(Dn.min,wo.min),Dn.expandByPoint(an),an.addVectors(Dn.max,wo.max),Dn.expandByPoint(an)):(Dn.expandByPoint(wo.min),Dn.expandByPoint(wo.max))}Dn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)an.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(an));if(t)for(let r=0,o=t.length;r<o;r++){const l=t[r],c=this.morphTargetsRelative;for(let u=0,d=l.count;u<d;u++)an.fromBufferAttribute(l,u),c&&(lr.fromBufferAttribute(e,u),an.add(lr)),s=Math.max(s,n.distanceToSquared(an))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,s=t.position.array,r=t.normal.array,o=t.uv.array,l=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Dt(new Float32Array(4*l),4));const c=this.getAttribute("tangent").array,u=[],d=[];for(let E=0;E<l;E++)u[E]=new D,d[E]=new D;const p=new D,m=new D,g=new D,b=new Le,w=new Le,x=new Le,v=new D,M=new D;function y(E,R,B){p.fromArray(s,E*3),m.fromArray(s,R*3),g.fromArray(s,B*3),b.fromArray(o,E*2),w.fromArray(o,R*2),x.fromArray(o,B*2),m.sub(p),g.sub(p),w.sub(b),x.sub(b);const W=1/(w.x*x.y-x.x*w.y);!isFinite(W)||(v.copy(m).multiplyScalar(x.y).addScaledVector(g,-w.y).multiplyScalar(W),M.copy(g).multiplyScalar(w.x).addScaledVector(m,-x.x).multiplyScalar(W),u[E].add(v),u[R].add(v),u[B].add(v),d[E].add(M),d[R].add(M),d[B].add(M))}let S=this.groups;S.length===0&&(S=[{start:0,count:n.length}]);for(let E=0,R=S.length;E<R;++E){const B=S[E],W=B.start,U=B.count;for(let H=W,G=W+U;H<G;H+=3)y(n[H+0],n[H+1],n[H+2])}const C=new D,P=new D,T=new D,I=new D;function F(E){T.fromArray(r,E*3),I.copy(T);const R=u[E];C.copy(R),C.sub(T.multiplyScalar(T.dot(R))).normalize(),P.crossVectors(I,R);const W=P.dot(d[E])<0?-1:1;c[E*4]=C.x,c[E*4+1]=C.y,c[E*4+2]=C.z,c[E*4+3]=W}for(let E=0,R=S.length;E<R;++E){const B=S[E],W=B.start,U=B.count;for(let H=W,G=W+U;H<G;H+=3)F(n[H+0]),F(n[H+1]),F(n[H+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Dt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let m=0,g=n.count;m<g;m++)n.setXYZ(m,0,0,0);const s=new D,r=new D,o=new D,l=new D,c=new D,u=new D,d=new D,p=new D;if(e)for(let m=0,g=e.count;m<g;m+=3){const b=e.getX(m+0),w=e.getX(m+1),x=e.getX(m+2);s.fromBufferAttribute(t,b),r.fromBufferAttribute(t,w),o.fromBufferAttribute(t,x),d.subVectors(o,r),p.subVectors(s,r),d.cross(p),l.fromBufferAttribute(n,b),c.fromBufferAttribute(n,w),u.fromBufferAttribute(n,x),l.add(d),c.add(d),u.add(d),n.setXYZ(b,l.x,l.y,l.z),n.setXYZ(w,c.x,c.y,c.z),n.setXYZ(x,u.x,u.y,u.z)}else for(let m=0,g=t.count;m<g;m+=3)s.fromBufferAttribute(t,m+0),r.fromBufferAttribute(t,m+1),o.fromBufferAttribute(t,m+2),d.subVectors(o,r),p.subVectors(s,r),d.cross(p),n.setXYZ(m+0,d.x,d.y,d.z),n.setXYZ(m+1,d.x,d.y,d.z),n.setXYZ(m+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)an.fromBufferAttribute(e,t),an.normalize(),e.setXYZ(t,an.x,an.y,an.z)}toNonIndexed(){function e(l,c){const u=l.array,d=l.itemSize,p=l.normalized,m=new u.constructor(c.length*d);let g=0,b=0;for(let w=0,x=c.length;w<x;w++){l.isInterleavedBufferAttribute?g=c[w]*l.data.stride+l.offset:g=c[w]*d;for(let v=0;v<d;v++)m[b++]=u[g++]}return new Dt(m,d,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new cn,n=this.index.array,s=this.attributes;for(const l in s){const c=s[l],u=e(c,n);t.setAttribute(l,u)}const r=this.morphAttributes;for(const l in r){const c=[],u=r[l];for(let d=0,p=u.length;d<p;d++){const m=u[d],g=e(m,n);c.push(g)}t.morphAttributes[l]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let l=0,c=o.length;l<c;l++){const u=o[l];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const u in c)c[u]!==void 0&&(e[u]=c[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const u=n[c];e.data.attributes[c]=u.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const u=this.morphAttributes[c],d=[];for(let p=0,m=u.length;p<m;p++){const g=u[p];d.push(g.toJSON(e.data))}d.length>0&&(s[c]=d,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const l=this.boundingSphere;return l!==null&&(e.data.boundingSphere={center:l.center.toArray(),radius:l.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const u in s){const d=s[u];this.setAttribute(u,d.clone(t))}const r=e.morphAttributes;for(const u in r){const d=[],p=r[u];for(let m=0,g=p.length;m<g;m++)d.push(p[m].clone(t));this.morphAttributes[u]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,d=o.length;u<d;u++){const p=o[u];this.addGroup(p.start,p.count,p.materialIndex)}const l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const mf=new je,ys=new Kr,Pa=new li,gf=new D,cr=new D,ur=new D,hr=new D,Jc=new D,Ra=new D,La=new Le,Ia=new Le,Da=new Le,vf=new D,_f=new D,xf=new D,Na=new D,Ua=new D;class fe extends vt{constructor(e=new cn,t=new fi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const l=this.morphTargetInfluences;if(r&&l){Ra.set(0,0,0);for(let c=0,u=r.length;c<u;c++){const d=l[c],p=r[c];d!==0&&(Jc.fromBufferAttribute(p,e),o?Ra.addScaledVector(Jc,d):Ra.addScaledVector(Jc.sub(t),d))}t.add(Ra)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Pa.copy(n.boundingSphere),Pa.applyMatrix4(r),ys.copy(e.ray).recast(e.near),!(Pa.containsPoint(ys.origin)===!1&&(ys.intersectSphere(Pa,gf)===null||ys.origin.distanceToSquared(gf)>(e.far-e.near)**2))&&(mf.copy(r).invert(),ys.copy(e.ray).applyMatrix4(mf),!(n.boundingBox!==null&&ys.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ys)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,l=r.index,c=r.attributes.position,u=r.attributes.uv,d=r.attributes.uv1,p=r.attributes.normal,m=r.groups,g=r.drawRange;if(l!==null)if(Array.isArray(o))for(let b=0,w=m.length;b<w;b++){const x=m[b],v=o[x.materialIndex],M=Math.max(x.start,g.start),y=Math.min(l.count,Math.min(x.start+x.count,g.start+g.count));for(let S=M,C=y;S<C;S+=3){const P=l.getX(S),T=l.getX(S+1),I=l.getX(S+2);s=ka(this,v,e,n,u,d,p,P,T,I),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=x.materialIndex,t.push(s))}}else{const b=Math.max(0,g.start),w=Math.min(l.count,g.start+g.count);for(let x=b,v=w;x<v;x+=3){const M=l.getX(x),y=l.getX(x+1),S=l.getX(x+2);s=ka(this,o,e,n,u,d,p,M,y,S),s&&(s.faceIndex=Math.floor(x/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let b=0,w=m.length;b<w;b++){const x=m[b],v=o[x.materialIndex],M=Math.max(x.start,g.start),y=Math.min(c.count,Math.min(x.start+x.count,g.start+g.count));for(let S=M,C=y;S<C;S+=3){const P=S,T=S+1,I=S+2;s=ka(this,v,e,n,u,d,p,P,T,I),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=x.materialIndex,t.push(s))}}else{const b=Math.max(0,g.start),w=Math.min(c.count,g.start+g.count);for(let x=b,v=w;x<v;x+=3){const M=x,y=x+1,S=x+2;s=ka(this,o,e,n,u,d,p,M,y,S),s&&(s.faceIndex=Math.floor(x/3),t.push(s))}}}}function ew(i,e,t,n,s,r,o,l){let c;if(e.side===Tn?c=n.intersectTriangle(o,r,s,!0,l):c=n.intersectTriangle(s,r,o,e.side===oi,l),c===null)return null;Ua.copy(l),Ua.applyMatrix4(i.matrixWorld);const u=t.ray.origin.distanceTo(Ua);return u<t.near||u>t.far?null:{distance:u,point:Ua.clone(),object:i}}function ka(i,e,t,n,s,r,o,l,c,u){i.getVertexPosition(l,cr),i.getVertexPosition(c,ur),i.getVertexPosition(u,hr);const d=ew(i,e,t,n,cr,ur,hr,Na);if(d){s&&(La.fromBufferAttribute(s,l),Ia.fromBufferAttribute(s,c),Da.fromBufferAttribute(s,u),d.uv=Mn.getInterpolation(Na,cr,ur,hr,La,Ia,Da,new Le)),r&&(La.fromBufferAttribute(r,l),Ia.fromBufferAttribute(r,c),Da.fromBufferAttribute(r,u),d.uv1=Mn.getInterpolation(Na,cr,ur,hr,La,Ia,Da,new Le),d.uv2=d.uv1),o&&(vf.fromBufferAttribute(o,l),_f.fromBufferAttribute(o,c),xf.fromBufferAttribute(o,u),d.normal=Mn.getInterpolation(Na,cr,ur,hr,vf,_f,xf,new D),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const p={a:l,b:c,c:u,normal:new D,materialIndex:0};Mn.getNormal(cr,ur,hr,p.normal),d.face=p}return d}class Et extends cn{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const l=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],u=[],d=[],p=[];let m=0,g=0;b("z","y","x",-1,-1,n,t,e,o,r,0),b("z","y","x",1,-1,n,t,-e,o,r,1),b("x","z","y",1,1,e,n,t,s,o,2),b("x","z","y",1,-1,e,n,-t,s,o,3),b("x","y","z",1,-1,e,t,n,s,r,4),b("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new At(u,3)),this.setAttribute("normal",new At(d,3)),this.setAttribute("uv",new At(p,2));function b(w,x,v,M,y,S,C,P,T,I,F){const E=S/T,R=C/I,B=S/2,W=C/2,U=P/2,H=T+1,G=I+1;let X=0,Q=0;const Y=new D;for(let ie=0;ie<G;ie++){const ne=ie*R-W;for(let me=0;me<H;me++){const he=me*E-B;Y[w]=he*M,Y[x]=ne*y,Y[v]=U,u.push(Y.x,Y.y,Y.z),Y[w]=0,Y[x]=0,Y[v]=P>0?1:-1,d.push(Y.x,Y.y,Y.z),p.push(me/T),p.push(1-ie/I),X+=1}}for(let ie=0;ie<I;ie++)for(let ne=0;ne<T;ne++){const me=m+ne+H*ie,he=m+ne+H*(ie+1),$=m+(ne+1)+H*(ie+1),se=m+(ne+1)+H*ie;c.push(me,he,se),c.push(he,$,se),Q+=6}l.addGroup(g,Q,F),g+=Q,m+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Et(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Wr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function bn(i){const e={};for(let t=0;t<i.length;t++){const n=Wr(i[t]);for(const s in n)e[s]=n[s]}return e}function tw(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function l0(i){return i.getRenderTarget()===null?i.outputColorSpace:gt.workingColorSpace}const nw={clone:Wr,merge:bn};var iw=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sw=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class nn extends gi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=iw,this.fragmentShader=sw,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Wr(e.uniforms),this.uniformsGroups=tw(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class c0 extends vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new je,this.projectionMatrix=new je,this.projectionMatrixInverse=new je,this.coordinateSystem=Fi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const es=new D,bf=new Le,yf=new Le;class yn extends c0{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Gr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Xo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Gr*2*Math.atan(Math.tan(Xo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){es.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(es.x,es.y).multiplyScalar(-e/es.z),es.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(es.x,es.y).multiplyScalar(-e/es.z)}getViewSize(e,t){return this.getViewBounds(e,bf,yf),t.subVectors(yf,bf)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Xo*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,u=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/u,s*=o.width/c,n*=o.height/u}const l=this.filmOffset;l!==0&&(r+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const dr=-90,pr=1;class rw extends vt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new yn(dr,pr,e,t);s.layers=this.layers,this.add(s);const r=new yn(dr,pr,e,t);r.layers=this.layers,this.add(r);const o=new yn(dr,pr,e,t);o.layers=this.layers,this.add(o);const l=new yn(dr,pr,e,t);l.layers=this.layers,this.add(l);const c=new yn(dr,pr,e,t);c.layers=this.layers,this.add(c);const u=new yn(dr,pr,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,l,c]=t;for(const u of t)this.remove(u);if(e===Fi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Fl)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,l,c,u,d]=this.children,p=e.getRenderTarget(),m=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const w=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,l),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,u),n.texture.generateMipmaps=w,e.setRenderTarget(n,5,s),e.render(t,d),e.setRenderTarget(p,m,g),e.xr.enabled=b,n.texture.needsPMREMUpdate=!0}}class u0 extends Zt{constructor(e,t,n,s,r,o,l,c,u,d){e=e!==void 0?e:[],t=t!==void 0?t:Or,super(e,t,n,s,r,o,l,c,u,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ow extends Ln{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];t.encoding!==void 0&&(Fs("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===ks?Vt:Xn),this.texture=new u0(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:bt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Et(5,5,5),r=new nn({name:"CubemapFromEquirect",uniforms:Wr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Tn,blending:qn});r.uniforms.tEquirect.value=t;const o=new fe(s,r),l=t.minFilter;return t.minFilter===ki&&(t.minFilter=bt),new rw(1,10,this).update(e,o),t.minFilter=l,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}const eu=new D,aw=new D,lw=new st;class di{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=eu.subVectors(n,t).cross(aw.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(eu),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||lw.getNormalMatrix(e),s=this.coplanarPoint(eu).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ws=new li,Fa=new D;class Nh{constructor(e=new di,t=new di,n=new di,s=new di,r=new di,o=new di){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(n),l[3].copy(s),l[4].copy(r),l[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Fi){const n=this.planes,s=e.elements,r=s[0],o=s[1],l=s[2],c=s[3],u=s[4],d=s[5],p=s[6],m=s[7],g=s[8],b=s[9],w=s[10],x=s[11],v=s[12],M=s[13],y=s[14],S=s[15];if(n[0].setComponents(c-r,m-u,x-g,S-v).normalize(),n[1].setComponents(c+r,m+u,x+g,S+v).normalize(),n[2].setComponents(c+o,m+d,x+b,S+M).normalize(),n[3].setComponents(c-o,m-d,x-b,S-M).normalize(),n[4].setComponents(c-l,m-p,x-w,S-y).normalize(),t===Fi)n[5].setComponents(c+l,m+p,x+w,S+y).normalize();else if(t===Fl)n[5].setComponents(l,p,w,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ws.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ws.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ws)}intersectsSprite(e){return ws.center.set(0,0,0),ws.radius=.7071067811865476,ws.applyMatrix4(e.matrixWorld),this.intersectsSphere(ws)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Fa.x=s.normal.x>0?e.max.x:e.min.x,Fa.y=s.normal.y>0?e.max.y:e.min.y,Fa.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Fa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function h0(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function cw(i,e){const t=e.isWebGL2,n=new WeakMap;function s(u,d){const p=u.array,m=u.usage,g=p.byteLength,b=i.createBuffer();i.bindBuffer(d,b),i.bufferData(d,p,m),u.onUploadCallback();let w;if(p instanceof Float32Array)w=i.FLOAT;else if(p instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(t)w=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else w=i.UNSIGNED_SHORT;else if(p instanceof Int16Array)w=i.SHORT;else if(p instanceof Uint32Array)w=i.UNSIGNED_INT;else if(p instanceof Int32Array)w=i.INT;else if(p instanceof Int8Array)w=i.BYTE;else if(p instanceof Uint8Array)w=i.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)w=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:b,type:w,bytesPerElement:p.BYTES_PER_ELEMENT,version:u.version,size:g}}function r(u,d,p){const m=d.array,g=d._updateRange,b=d.updateRanges;if(i.bindBuffer(p,u),g.count===-1&&b.length===0&&i.bufferSubData(p,0,m),b.length!==0){for(let w=0,x=b.length;w<x;w++){const v=b[w];t?i.bufferSubData(p,v.start*m.BYTES_PER_ELEMENT,m,v.start,v.count):i.bufferSubData(p,v.start*m.BYTES_PER_ELEMENT,m.subarray(v.start,v.start+v.count))}d.clearUpdateRanges()}g.count!==-1&&(t?i.bufferSubData(p,g.offset*m.BYTES_PER_ELEMENT,m,g.offset,g.count):i.bufferSubData(p,g.offset*m.BYTES_PER_ELEMENT,m.subarray(g.offset,g.offset+g.count)),g.count=-1),d.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),n.get(u)}function l(u){u.isInterleavedBufferAttribute&&(u=u.data);const d=n.get(u);d&&(i.deleteBuffer(d.buffer),n.delete(u))}function c(u,d){if(u.isGLBufferAttribute){const m=n.get(u);(!m||m.version<u.version)&&n.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const p=n.get(u);if(p===void 0)n.set(u,s(u,d));else if(p.version<u.version){if(p.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,u,d),p.version=u.version}}return{get:o,remove:l,update:c}}class Bn extends cn{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,l=Math.floor(n),c=Math.floor(s),u=l+1,d=c+1,p=e/l,m=t/c,g=[],b=[],w=[],x=[];for(let v=0;v<d;v++){const M=v*m-o;for(let y=0;y<u;y++){const S=y*p-r;b.push(S,-M,0),w.push(0,0,1),x.push(y/l),x.push(1-v/c)}}for(let v=0;v<c;v++)for(let M=0;M<l;M++){const y=M+u*v,S=M+u*(v+1),C=M+1+u*(v+1),P=M+1+u*v;g.push(y,S,P),g.push(S,C,P)}this.setIndex(g),this.setAttribute("position",new At(b,3)),this.setAttribute("normal",new At(w,3)),this.setAttribute("uv",new At(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bn(e.width,e.height,e.widthSegments,e.heightSegments)}}var uw=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,hw=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,dw=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,pw=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fw=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,mw=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gw=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,vw=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_w=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,xw=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,bw=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,yw=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ww=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Mw=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ew=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Sw=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Tw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Aw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Cw=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Pw=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Rw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Lw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Iw=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Dw=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Nw=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Uw=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,kw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Fw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ow=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Bw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Vw="gl_FragColor = linearToOutputTexel( gl_FragColor );",zw=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Hw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Gw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ww=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Xw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,$w=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Yw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Kw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Zw=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Qw=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Jw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,eM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,nM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,iM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,sM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,oM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,aM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,cM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,uM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,hM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,dM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,pM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,fM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,gM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,vM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_M=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,bM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,MM=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,EM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,SM=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,TM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,AM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,CM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,PM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,RM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,LM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,IM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,DM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,NM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,UM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,kM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,FM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,OM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,BM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,VM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,HM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,GM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,WM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,XM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,jM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,$M=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,qM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,YM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,KM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ZM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,QM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,JM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,eE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,nE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,iE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,sE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,rE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,oE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,aE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,lE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const cE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,uE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,gE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,vE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,_E=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,xE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,wE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ME=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,EE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,SE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,TE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,AE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,CE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,PE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,RE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,LE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,IE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,DE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,NE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,UE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,OE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,BE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,VE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,zE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,HE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,tt={alphahash_fragment:uw,alphahash_pars_fragment:hw,alphamap_fragment:dw,alphamap_pars_fragment:pw,alphatest_fragment:fw,alphatest_pars_fragment:mw,aomap_fragment:gw,aomap_pars_fragment:vw,batching_pars_vertex:_w,batching_vertex:xw,begin_vertex:bw,beginnormal_vertex:yw,bsdfs:ww,iridescence_fragment:Mw,bumpmap_pars_fragment:Ew,clipping_planes_fragment:Sw,clipping_planes_pars_fragment:Tw,clipping_planes_pars_vertex:Aw,clipping_planes_vertex:Cw,color_fragment:Pw,color_pars_fragment:Rw,color_pars_vertex:Lw,color_vertex:Iw,common:Dw,cube_uv_reflection_fragment:Nw,defaultnormal_vertex:Uw,displacementmap_pars_vertex:kw,displacementmap_vertex:Fw,emissivemap_fragment:Ow,emissivemap_pars_fragment:Bw,colorspace_fragment:Vw,colorspace_pars_fragment:zw,envmap_fragment:Hw,envmap_common_pars_fragment:Gw,envmap_pars_fragment:Ww,envmap_pars_vertex:Xw,envmap_physical_pars_fragment:iM,envmap_vertex:jw,fog_vertex:$w,fog_pars_vertex:qw,fog_fragment:Yw,fog_pars_fragment:Kw,gradientmap_pars_fragment:Zw,lightmap_fragment:Qw,lightmap_pars_fragment:Jw,lights_lambert_fragment:eM,lights_lambert_pars_fragment:tM,lights_pars_begin:nM,lights_toon_fragment:sM,lights_toon_pars_fragment:rM,lights_phong_fragment:oM,lights_phong_pars_fragment:aM,lights_physical_fragment:lM,lights_physical_pars_fragment:cM,lights_fragment_begin:uM,lights_fragment_maps:hM,lights_fragment_end:dM,logdepthbuf_fragment:pM,logdepthbuf_pars_fragment:fM,logdepthbuf_pars_vertex:mM,logdepthbuf_vertex:gM,map_fragment:vM,map_pars_fragment:_M,map_particle_fragment:xM,map_particle_pars_fragment:bM,metalnessmap_fragment:yM,metalnessmap_pars_fragment:wM,morphcolor_vertex:MM,morphnormal_vertex:EM,morphtarget_pars_vertex:SM,morphtarget_vertex:TM,normal_fragment_begin:AM,normal_fragment_maps:CM,normal_pars_fragment:PM,normal_pars_vertex:RM,normal_vertex:LM,normalmap_pars_fragment:IM,clearcoat_normal_fragment_begin:DM,clearcoat_normal_fragment_maps:NM,clearcoat_pars_fragment:UM,iridescence_pars_fragment:kM,opaque_fragment:FM,packing:OM,premultiplied_alpha_fragment:BM,project_vertex:VM,dithering_fragment:zM,dithering_pars_fragment:HM,roughnessmap_fragment:GM,roughnessmap_pars_fragment:WM,shadowmap_pars_fragment:XM,shadowmap_pars_vertex:jM,shadowmap_vertex:$M,shadowmask_pars_fragment:qM,skinbase_vertex:YM,skinning_pars_vertex:KM,skinning_vertex:ZM,skinnormal_vertex:QM,specularmap_fragment:JM,specularmap_pars_fragment:eE,tonemapping_fragment:tE,tonemapping_pars_fragment:nE,transmission_fragment:iE,transmission_pars_fragment:sE,uv_pars_fragment:rE,uv_pars_vertex:oE,uv_vertex:aE,worldpos_vertex:lE,background_vert:cE,background_frag:uE,backgroundCube_vert:hE,backgroundCube_frag:dE,cube_vert:pE,cube_frag:fE,depth_vert:mE,depth_frag:gE,distanceRGBA_vert:vE,distanceRGBA_frag:_E,equirect_vert:xE,equirect_frag:bE,linedashed_vert:yE,linedashed_frag:wE,meshbasic_vert:ME,meshbasic_frag:EE,meshlambert_vert:SE,meshlambert_frag:TE,meshmatcap_vert:AE,meshmatcap_frag:CE,meshnormal_vert:PE,meshnormal_frag:RE,meshphong_vert:LE,meshphong_frag:IE,meshphysical_vert:DE,meshphysical_frag:NE,meshtoon_vert:UE,meshtoon_frag:kE,points_vert:FE,points_frag:OE,shadow_vert:BE,shadow_frag:VE,sprite_vert:zE,sprite_frag:HE},ge={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new Le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new Le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},pi={basic:{uniforms:bn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:tt.meshbasic_vert,fragmentShader:tt.meshbasic_frag},lambert:{uniforms:bn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new We(0)}}]),vertexShader:tt.meshlambert_vert,fragmentShader:tt.meshlambert_frag},phong:{uniforms:bn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30}}]),vertexShader:tt.meshphong_vert,fragmentShader:tt.meshphong_frag},standard:{uniforms:bn([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag},toon:{uniforms:bn([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new We(0)}}]),vertexShader:tt.meshtoon_vert,fragmentShader:tt.meshtoon_frag},matcap:{uniforms:bn([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:tt.meshmatcap_vert,fragmentShader:tt.meshmatcap_frag},points:{uniforms:bn([ge.points,ge.fog]),vertexShader:tt.points_vert,fragmentShader:tt.points_frag},dashed:{uniforms:bn([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:tt.linedashed_vert,fragmentShader:tt.linedashed_frag},depth:{uniforms:bn([ge.common,ge.displacementmap]),vertexShader:tt.depth_vert,fragmentShader:tt.depth_frag},normal:{uniforms:bn([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:tt.meshnormal_vert,fragmentShader:tt.meshnormal_frag},sprite:{uniforms:bn([ge.sprite,ge.fog]),vertexShader:tt.sprite_vert,fragmentShader:tt.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:tt.background_vert,fragmentShader:tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:tt.backgroundCube_vert,fragmentShader:tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:tt.cube_vert,fragmentShader:tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:tt.equirect_vert,fragmentShader:tt.equirect_frag},distanceRGBA:{uniforms:bn([ge.common,ge.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:tt.distanceRGBA_vert,fragmentShader:tt.distanceRGBA_frag},shadow:{uniforms:bn([ge.lights,ge.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:tt.shadow_vert,fragmentShader:tt.shadow_frag}};pi.physical={uniforms:bn([pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new Le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new Le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new Le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag};const Oa={r:0,b:0,g:0};function GE(i,e,t,n,s,r,o){const l=new We(0);let c=r===!0?0:1,u,d,p=null,m=0,g=null;function b(x,v){let M=!1,y=v.isScene===!0?v.background:null;y&&y.isTexture&&(y=(v.backgroundBlurriness>0?t:e).get(y)),y===null?w(l,c):y&&y.isColor&&(w(y,1),M=!0);const S=i.xr.getEnvironmentBlendMode();S==="additive"?n.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||M)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),y&&(y.isCubeTexture||y.mapping===Wl)?(d===void 0&&(d=new fe(new Et(1,1,1),new nn({name:"BackgroundCubeMaterial",uniforms:Wr(pi.backgroundCube.uniforms),vertexShader:pi.backgroundCube.vertexShader,fragmentShader:pi.backgroundCube.fragmentShader,side:Tn,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(C,P,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(d)),d.material.uniforms.envMap.value=y,d.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,d.material.toneMapped=gt.getTransfer(y.colorSpace)!==Lt,(p!==y||m!==y.version||g!==i.toneMapping)&&(d.material.needsUpdate=!0,p=y,m=y.version,g=i.toneMapping),d.layers.enableAll(),x.unshift(d,d.geometry,d.material,0,0,null)):y&&y.isTexture&&(u===void 0&&(u=new fe(new Bn(2,2),new nn({name:"BackgroundMaterial",uniforms:Wr(pi.background.uniforms),vertexShader:pi.background.vertexShader,fragmentShader:pi.background.fragmentShader,side:oi,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(u)),u.material.uniforms.t2D.value=y,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.toneMapped=gt.getTransfer(y.colorSpace)!==Lt,y.matrixAutoUpdate===!0&&y.updateMatrix(),u.material.uniforms.uvTransform.value.copy(y.matrix),(p!==y||m!==y.version||g!==i.toneMapping)&&(u.material.needsUpdate=!0,p=y,m=y.version,g=i.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null))}function w(x,v){x.getRGB(Oa,l0(i)),n.buffers.color.setClear(Oa.r,Oa.g,Oa.b,v,o)}return{getClearColor:function(){return l},setClearColor:function(x,v=1){l.set(x),c=v,w(l,c)},getClearAlpha:function(){return c},setClearAlpha:function(x){c=x,w(l,c)},render:b}}function WE(i,e,t,n){const s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,l={},c=x(null);let u=c,d=!1;function p(U,H,G,X,Q){let Y=!1;if(o){const ie=w(X,G,H);u!==ie&&(u=ie,g(u.object)),Y=v(U,X,G,Q),Y&&M(U,X,G,Q)}else{const ie=H.wireframe===!0;(u.geometry!==X.id||u.program!==G.id||u.wireframe!==ie)&&(u.geometry=X.id,u.program=G.id,u.wireframe=ie,Y=!0)}Q!==null&&t.update(Q,i.ELEMENT_ARRAY_BUFFER),(Y||d)&&(d=!1,I(U,H,G,X),Q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(Q).buffer))}function m(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function g(U){return n.isWebGL2?i.bindVertexArray(U):r.bindVertexArrayOES(U)}function b(U){return n.isWebGL2?i.deleteVertexArray(U):r.deleteVertexArrayOES(U)}function w(U,H,G){const X=G.wireframe===!0;let Q=l[U.id];Q===void 0&&(Q={},l[U.id]=Q);let Y=Q[H.id];Y===void 0&&(Y={},Q[H.id]=Y);let ie=Y[X];return ie===void 0&&(ie=x(m()),Y[X]=ie),ie}function x(U){const H=[],G=[],X=[];for(let Q=0;Q<s;Q++)H[Q]=0,G[Q]=0,X[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:G,attributeDivisors:X,object:U,attributes:{},index:null}}function v(U,H,G,X){const Q=u.attributes,Y=H.attributes;let ie=0;const ne=G.getAttributes();for(const me in ne)if(ne[me].location>=0){const $=Q[me];let se=Y[me];if(se===void 0&&(me==="instanceMatrix"&&U.instanceMatrix&&(se=U.instanceMatrix),me==="instanceColor"&&U.instanceColor&&(se=U.instanceColor)),$===void 0||$.attribute!==se||se&&$.data!==se.data)return!0;ie++}return u.attributesNum!==ie||u.index!==X}function M(U,H,G,X){const Q={},Y=H.attributes;let ie=0;const ne=G.getAttributes();for(const me in ne)if(ne[me].location>=0){let $=Y[me];$===void 0&&(me==="instanceMatrix"&&U.instanceMatrix&&($=U.instanceMatrix),me==="instanceColor"&&U.instanceColor&&($=U.instanceColor));const se={};se.attribute=$,$&&$.data&&(se.data=$.data),Q[me]=se,ie++}u.attributes=Q,u.attributesNum=ie,u.index=X}function y(){const U=u.newAttributes;for(let H=0,G=U.length;H<G;H++)U[H]=0}function S(U){C(U,0)}function C(U,H){const G=u.newAttributes,X=u.enabledAttributes,Q=u.attributeDivisors;G[U]=1,X[U]===0&&(i.enableVertexAttribArray(U),X[U]=1),Q[U]!==H&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](U,H),Q[U]=H)}function P(){const U=u.newAttributes,H=u.enabledAttributes;for(let G=0,X=H.length;G<X;G++)H[G]!==U[G]&&(i.disableVertexAttribArray(G),H[G]=0)}function T(U,H,G,X,Q,Y,ie){ie===!0?i.vertexAttribIPointer(U,H,G,Q,Y):i.vertexAttribPointer(U,H,G,X,Q,Y)}function I(U,H,G,X){if(n.isWebGL2===!1&&(U.isInstancedMesh||X.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();const Q=X.attributes,Y=G.getAttributes(),ie=H.defaultAttributeValues;for(const ne in Y){const me=Y[ne];if(me.location>=0){let he=Q[ne];if(he===void 0&&(ne==="instanceMatrix"&&U.instanceMatrix&&(he=U.instanceMatrix),ne==="instanceColor"&&U.instanceColor&&(he=U.instanceColor)),he!==void 0){const $=he.normalized,se=he.itemSize,xe=t.get(he);if(xe===void 0)continue;const we=xe.buffer,Ae=xe.type,_e=xe.bytesPerElement,ke=n.isWebGL2===!0&&(Ae===i.INT||Ae===i.UNSIGNED_INT||he.gpuType===Wo);if(he.isInterleavedBufferAttribute){const Ue=he.data,j=Ue.stride,Ct=he.offset;if(Ue.isInstancedInterleavedBuffer){for(let Pe=0;Pe<me.locationSize;Pe++)C(me.location+Pe,Ue.meshPerAttribute);U.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=Ue.meshPerAttribute*Ue.count)}else for(let Pe=0;Pe<me.locationSize;Pe++)S(me.location+Pe);i.bindBuffer(i.ARRAY_BUFFER,we);for(let Pe=0;Pe<me.locationSize;Pe++)T(me.location+Pe,se/me.locationSize,Ae,$,j*_e,(Ct+se/me.locationSize*Pe)*_e,ke)}else{if(he.isInstancedBufferAttribute){for(let Ue=0;Ue<me.locationSize;Ue++)C(me.location+Ue,he.meshPerAttribute);U.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let Ue=0;Ue<me.locationSize;Ue++)S(me.location+Ue);i.bindBuffer(i.ARRAY_BUFFER,we);for(let Ue=0;Ue<me.locationSize;Ue++)T(me.location+Ue,se/me.locationSize,Ae,$,se*_e,se/me.locationSize*Ue*_e,ke)}}else if(ie!==void 0){const $=ie[ne];if($!==void 0)switch($.length){case 2:i.vertexAttrib2fv(me.location,$);break;case 3:i.vertexAttrib3fv(me.location,$);break;case 4:i.vertexAttrib4fv(me.location,$);break;default:i.vertexAttrib1fv(me.location,$)}}}}P()}function F(){B();for(const U in l){const H=l[U];for(const G in H){const X=H[G];for(const Q in X)b(X[Q].object),delete X[Q];delete H[G]}delete l[U]}}function E(U){if(l[U.id]===void 0)return;const H=l[U.id];for(const G in H){const X=H[G];for(const Q in X)b(X[Q].object),delete X[Q];delete H[G]}delete l[U.id]}function R(U){for(const H in l){const G=l[H];if(G[U.id]===void 0)continue;const X=G[U.id];for(const Q in X)b(X[Q].object),delete X[Q];delete G[U.id]}}function B(){W(),d=!0,u!==c&&(u=c,g(u.object))}function W(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:p,reset:B,resetDefaultState:W,dispose:F,releaseStatesOfGeometry:E,releaseStatesOfProgram:R,initAttributes:y,enableAttribute:S,disableUnusedAttributes:P}}function XE(i,e,t,n){const s=n.isWebGL2;let r;function o(d){r=d}function l(d,p){i.drawArrays(r,d,p),t.update(p,r,1)}function c(d,p,m){if(m===0)return;let g,b;if(s)g=i,b="drawArraysInstanced";else if(g=e.get("ANGLE_instanced_arrays"),b="drawArraysInstancedANGLE",g===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[b](r,d,p,m),t.update(p,r,m)}function u(d,p,m){if(m===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let b=0;b<m;b++)this.render(d[b],p[b]);else{g.multiDrawArraysWEBGL(r,d,0,p,0,m);let b=0;for(let w=0;w<m;w++)b+=p[w];t.update(b,r,1)}}this.setMode=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function jE(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext!="undefined"&&i.constructor.name==="WebGL2RenderingContext";let l=t.precision!==void 0?t.precision:"highp";const c=r(l);c!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",c,"instead."),l=c);const u=o||e.has("WEBGL_draw_buffers"),d=t.logarithmicDepthBuffer===!0,p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),b=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),w=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),y=m>0,S=o||e.has("OES_texture_float"),C=y&&S,P=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:s,getMaxPrecision:r,precision:l,logarithmicDepthBuffer:d,maxTextures:p,maxVertexTextures:m,maxTextureSize:g,maxCubemapSize:b,maxAttributes:w,maxVertexUniforms:x,maxVaryings:v,maxFragmentUniforms:M,vertexTextures:y,floatFragmentTextures:S,floatVertexTextures:C,maxSamples:P}}function $E(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new di,l=new st,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(p,m){const g=p.length!==0||m||n!==0||s;return s=m,n=p.length,g},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,m){t=d(p,m,0)},this.setState=function(p,m,g){const b=p.clippingPlanes,w=p.clipIntersection,x=p.clipShadows,v=i.get(p);if(!s||b===null||b.length===0||r&&!x)r?d(null):u();else{const M=r?0:n,y=M*4;let S=v.clippingState||null;c.value=S,S=d(b,m,y,g);for(let C=0;C!==y;++C)S[C]=t[C];v.clippingState=S,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=M}};function u(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(p,m,g,b){const w=p!==null?p.length:0;let x=null;if(w!==0){if(x=c.value,b!==!0||x===null){const v=g+w*4,M=m.matrixWorldInverse;l.getNormalMatrix(M),(x===null||x.length<v)&&(x=new Float32Array(v));for(let y=0,S=g;y!==w;++y,S+=4)o.copy(p[y]).applyMatrix4(M,l),o.normal.toArray(x,S),x[S+3]=o.constant}c.value=x,c.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,x}}function qE(i){let e=new WeakMap;function t(o,l){return l===zu?o.mapping=Or:l===Hu&&(o.mapping=Br),o}function n(o){if(o&&o.isTexture){const l=o.mapping;if(l===zu||l===Hu)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const u=new ow(c.height);return u.fromEquirectangularTexture(i,o),e.set(o,u),o.addEventListener("dispose",s),t(u.texture,o.mapping)}else return null}}return o}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class ci extends c0{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,l=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=u*this.view.offsetX,o=r+u*this.view.width,l-=d*this.view.offsetY,c=l-d*this.view.height}this.projectionMatrix.makeOrthographic(r,o,l,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Rr=4,wf=[.125,.215,.35,.446,.526,.582],Cs=20,tu=new ci,Mf=new We;let nu=null,iu=0,su=0;const Ss=(1+Math.sqrt(5))/2,fr=1/Ss,Ef=[new D(1,1,1),new D(-1,1,1),new D(1,1,-1),new D(-1,1,-1),new D(0,Ss,fr),new D(0,Ss,-fr),new D(fr,0,Ss),new D(-fr,0,Ss),new D(Ss,fr,0),new D(-Ss,fr,0)];class Sf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){nu=this._renderer.getRenderTarget(),iu=this._renderer.getActiveCubeFace(),su=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Cf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Af(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(nu,iu,su),e.scissorTest=!1,Ba(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Or||e.mapping===Br?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),nu=this._renderer.getRenderTarget(),iu=this._renderer.getActiveCubeFace(),su=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:bt,minFilter:bt,generateMipmaps:!1,type:Yn,format:Yt,colorSpace:ln,depthBuffer:!1},s=Tf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Tf(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=YE(r)),this._blurMaterial=KE(r,e,t)}return s}_compileMaterial(e){const t=new fe(this._lodPlanes[0],e);this._renderer.compile(t,tu)}_sceneToCubeUV(e,t,n,s){const l=new yn(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,p=d.autoClear,m=d.toneMapping;d.getClearColor(Mf),d.toneMapping=us,d.autoClear=!1;const g=new fi({name:"PMREM.Background",side:Tn,depthWrite:!1,depthTest:!1}),b=new fe(new Et,g);let w=!1;const x=e.background;x?x.isColor&&(g.color.copy(x),e.background=null,w=!0):(g.color.copy(Mf),w=!0);for(let v=0;v<6;v++){const M=v%3;M===0?(l.up.set(0,c[v],0),l.lookAt(u[v],0,0)):M===1?(l.up.set(0,0,c[v]),l.lookAt(0,u[v],0)):(l.up.set(0,c[v],0),l.lookAt(0,0,u[v]));const y=this._cubeSize;Ba(s,M*y,v>2?y:0,y,y),d.setRenderTarget(s),w&&d.render(b,l),d.render(e,l)}b.geometry.dispose(),b.material.dispose(),d.toneMapping=m,d.autoClear=p,e.background=x}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Or||e.mapping===Br;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Cf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Af());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new fe(this._lodPlanes[0],r),l=r.uniforms;l.envMap.value=e;const c=this._cubeSize;Ba(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,tu)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Ef[(s-1)%Ef.length];this._blur(e,s-1,s,r,o)}t.autoClear=n}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,l){const c=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,p=new fe(this._lodPlanes[s],u),m=u.uniforms,g=this._sizeLods[n]-1,b=isFinite(r)?Math.PI/(2*g):2*Math.PI/(2*Cs-1),w=r/b,x=isFinite(r)?1+Math.floor(d*w):Cs;x>Cs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Cs}`);const v=[];let M=0;for(let T=0;T<Cs;++T){const I=T/w,F=Math.exp(-I*I/2);v.push(F),T===0?M+=F:T<x&&(M+=2*F)}for(let T=0;T<v.length;T++)v[T]=v[T]/M;m.envMap.value=e.texture,m.samples.value=x,m.weights.value=v,m.latitudinal.value=o==="latitudinal",l&&(m.poleAxis.value=l);const{_lodMax:y}=this;m.dTheta.value=b,m.mipInt.value=y-n;const S=this._sizeLods[s],C=3*S*(s>y-Rr?s-y+Rr:0),P=4*(this._cubeSize-S);Ba(t,C,P,3*S,2*S),c.setRenderTarget(t),c.render(p,tu)}}function YE(i){const e=[],t=[],n=[];let s=i;const r=i-Rr+1+wf.length;for(let o=0;o<r;o++){const l=Math.pow(2,s);t.push(l);let c=1/l;o>i-Rr?c=wf[o-i+Rr-1]:o===0&&(c=0),n.push(c);const u=1/(l-2),d=-u,p=1+u,m=[d,d,p,d,p,p,d,d,p,p,d,p],g=6,b=6,w=3,x=2,v=1,M=new Float32Array(w*b*g),y=new Float32Array(x*b*g),S=new Float32Array(v*b*g);for(let P=0;P<g;P++){const T=P%3*2/3-1,I=P>2?0:-1,F=[T,I,0,T+2/3,I,0,T+2/3,I+1,0,T,I,0,T+2/3,I+1,0,T,I+1,0];M.set(F,w*b*P),y.set(m,x*b*P);const E=[P,P,P,P,P,P];S.set(E,v*b*P)}const C=new cn;C.setAttribute("position",new Dt(M,w)),C.setAttribute("uv",new Dt(y,x)),C.setAttribute("faceIndex",new Dt(S,v)),e.push(C),s>Rr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Tf(i,e,t){const n=new Ln(i,e,t);return n.texture.mapping=Wl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ba(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function KE(i,e,t){const n=new Float32Array(Cs),s=new D(0,1,0);return new nn({name:"SphericalGaussianBlur",defines:{n:Cs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Uh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function Af(){return new nn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Uh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function Cf(){return new nn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Uh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function Uh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ZE(i){let e=new WeakMap,t=null;function n(l){if(l&&l.isTexture){const c=l.mapping,u=c===zu||c===Hu,d=c===Or||c===Br;if(u||d)if(l.isRenderTargetTexture&&l.needsPMREMUpdate===!0){l.needsPMREMUpdate=!1;let p=e.get(l);return t===null&&(t=new Sf(i)),p=u?t.fromEquirectangular(l,p):t.fromCubemap(l,p),e.set(l,p),p.texture}else{if(e.has(l))return e.get(l).texture;{const p=l.image;if(u&&p&&p.height>0||d&&p&&s(p)){t===null&&(t=new Sf(i));const m=u?t.fromEquirectangular(l):t.fromCubemap(l);return e.set(l,m),l.addEventListener("dispose",r),m.texture}else return null}}}return l}function s(l){let c=0;const u=6;for(let d=0;d<u;d++)l[d]!==void 0&&c++;return c===u}function r(l){const c=l.target;c.removeEventListener("dispose",r);const u=e.get(c);u!==void 0&&(e.delete(c),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function QE(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function JE(i,e,t,n){const s={},r=new WeakMap;function o(p){const m=p.target;m.index!==null&&e.remove(m.index);for(const b in m.attributes)e.remove(m.attributes[b]);for(const b in m.morphAttributes){const w=m.morphAttributes[b];for(let x=0,v=w.length;x<v;x++)e.remove(w[x])}m.removeEventListener("dispose",o),delete s[m.id];const g=r.get(m);g&&(e.remove(g),r.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function l(p,m){return s[m.id]===!0||(m.addEventListener("dispose",o),s[m.id]=!0,t.memory.geometries++),m}function c(p){const m=p.attributes;for(const b in m)e.update(m[b],i.ARRAY_BUFFER);const g=p.morphAttributes;for(const b in g){const w=g[b];for(let x=0,v=w.length;x<v;x++)e.update(w[x],i.ARRAY_BUFFER)}}function u(p){const m=[],g=p.index,b=p.attributes.position;let w=0;if(g!==null){const M=g.array;w=g.version;for(let y=0,S=M.length;y<S;y+=3){const C=M[y+0],P=M[y+1],T=M[y+2];m.push(C,P,P,T,T,C)}}else if(b!==void 0){const M=b.array;w=b.version;for(let y=0,S=M.length/3-1;y<S;y+=3){const C=y+0,P=y+1,T=y+2;m.push(C,P,P,T,T,C)}}else return;const x=new(t0(m)?a0:o0)(m,1);x.version=w;const v=r.get(p);v&&e.remove(v),r.set(p,x)}function d(p){const m=r.get(p);if(m){const g=p.index;g!==null&&m.version<g.version&&u(p)}else u(p);return r.get(p)}return{get:l,update:c,getWireframeAttribute:d}}function eS(i,e,t,n){const s=n.isWebGL2;let r;function o(g){r=g}let l,c;function u(g){l=g.type,c=g.bytesPerElement}function d(g,b){i.drawElements(r,b,l,g*c),t.update(b,r,1)}function p(g,b,w){if(w===0)return;let x,v;if(s)x=i,v="drawElementsInstanced";else if(x=e.get("ANGLE_instanced_arrays"),v="drawElementsInstancedANGLE",x===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}x[v](r,b,l,g*c,w),t.update(b,r,w)}function m(g,b,w){if(w===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let v=0;v<w;v++)this.render(g[v]/c,b[v]);else{x.multiDrawElementsWEBGL(r,b,0,l,g,0,w);let v=0;for(let M=0;M<w;M++)v+=b[M];t.update(v,r,1)}}this.setMode=o,this.setIndex=u,this.render=d,this.renderInstances=p,this.renderMultiDraw=m}function tS(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,l){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=l*(r/3);break;case i.LINES:t.lines+=l*(r/2);break;case i.LINE_STRIP:t.lines+=l*(r-1);break;case i.LINE_LOOP:t.lines+=l*r;break;case i.POINTS:t.points+=l*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function nS(i,e){return i[0]-e[0]}function iS(i,e){return Math.abs(e[1])-Math.abs(i[1])}function sS(i,e,t){const n={},s=new Float32Array(8),r=new WeakMap,o=new yt,l=[];for(let u=0;u<8;u++)l[u]=[u,0];function c(u,d,p){const m=u.morphTargetInfluences;if(e.isWebGL2===!0){const g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,b=g!==void 0?g.length:0;let w=r.get(d);if(w===void 0||w.count!==b){let U=function(){B.dispose(),r.delete(d),d.removeEventListener("dispose",U)};w!==void 0&&w.texture.dispose();const M=d.morphAttributes.position!==void 0,y=d.morphAttributes.normal!==void 0,S=d.morphAttributes.color!==void 0,C=d.morphAttributes.position||[],P=d.morphAttributes.normal||[],T=d.morphAttributes.color||[];let I=0;M===!0&&(I=1),y===!0&&(I=2),S===!0&&(I=3);let F=d.attributes.position.count*I,E=1;F>e.maxTextureSize&&(E=Math.ceil(F/e.maxTextureSize),F=e.maxTextureSize);const R=new Float32Array(F*E*4*b),B=new s0(R,F,E,b);B.type=wt,B.needsUpdate=!0;const W=I*4;for(let H=0;H<b;H++){const G=C[H],X=P[H],Q=T[H],Y=F*E*4*H;for(let ie=0;ie<G.count;ie++){const ne=ie*W;M===!0&&(o.fromBufferAttribute(G,ie),R[Y+ne+0]=o.x,R[Y+ne+1]=o.y,R[Y+ne+2]=o.z,R[Y+ne+3]=0),y===!0&&(o.fromBufferAttribute(X,ie),R[Y+ne+4]=o.x,R[Y+ne+5]=o.y,R[Y+ne+6]=o.z,R[Y+ne+7]=0),S===!0&&(o.fromBufferAttribute(Q,ie),R[Y+ne+8]=o.x,R[Y+ne+9]=o.y,R[Y+ne+10]=o.z,R[Y+ne+11]=Q.itemSize===4?o.w:1)}}w={count:b,texture:B,size:new Le(F,E)},r.set(d,w),d.addEventListener("dispose",U)}let x=0;for(let M=0;M<m.length;M++)x+=m[M];const v=d.morphTargetsRelative?1:1-x;p.getUniforms().setValue(i,"morphTargetBaseInfluence",v),p.getUniforms().setValue(i,"morphTargetInfluences",m),p.getUniforms().setValue(i,"morphTargetsTexture",w.texture,t),p.getUniforms().setValue(i,"morphTargetsTextureSize",w.size)}else{const g=m===void 0?0:m.length;let b=n[d.id];if(b===void 0||b.length!==g){b=[];for(let y=0;y<g;y++)b[y]=[y,0];n[d.id]=b}for(let y=0;y<g;y++){const S=b[y];S[0]=y,S[1]=m[y]}b.sort(iS);for(let y=0;y<8;y++)y<g&&b[y][1]?(l[y][0]=b[y][0],l[y][1]=b[y][1]):(l[y][0]=Number.MAX_SAFE_INTEGER,l[y][1]=0);l.sort(nS);const w=d.morphAttributes.position,x=d.morphAttributes.normal;let v=0;for(let y=0;y<8;y++){const S=l[y],C=S[0],P=S[1];C!==Number.MAX_SAFE_INTEGER&&P?(w&&d.getAttribute("morphTarget"+y)!==w[C]&&d.setAttribute("morphTarget"+y,w[C]),x&&d.getAttribute("morphNormal"+y)!==x[C]&&d.setAttribute("morphNormal"+y,x[C]),s[y]=P,v+=P):(w&&d.hasAttribute("morphTarget"+y)===!0&&d.deleteAttribute("morphTarget"+y),x&&d.hasAttribute("morphNormal"+y)===!0&&d.deleteAttribute("morphNormal"+y),s[y]=0)}const M=d.morphTargetsRelative?1:1-v;p.getUniforms().setValue(i,"morphTargetBaseInfluence",M),p.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:c}}function rS(i,e,t,n){let s=new WeakMap;function r(c){const u=n.render.frame,d=c.geometry,p=e.get(c,d);if(s.get(p)!==u&&(e.update(p),s.set(p,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const m=c.skeleton;s.get(m)!==u&&(m.update(),s.set(m,u))}return p}function o(){s=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:r,dispose:o}}class d0 extends Zt{constructor(e,t,n,s,r,o,l,c,u,d){if(d=d!==void 0?d:Us,d!==Us&&d!==zr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===Us&&(n=Un),n===void 0&&d===zr&&(n=Ns),super(null,s,r,o,l,c,d,n,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=l!==void 0?l:mt,this.minFilter=c!==void 0?c:mt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const p0=new Zt,f0=new d0(1,1);f0.compareFunction=Jg;const m0=new s0,g0=new Oy,v0=new u0,Pf=[],Rf=[],Lf=new Float32Array(16),If=new Float32Array(9),Df=new Float32Array(4);function Zr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Pf[s];if(r===void 0&&(r=new Float32Array(s),Pf[s]=r),e!==0){n.toArray(r,0);for(let o=1,l=0;o!==e;++o)l+=t,i[o].toArray(r,l)}return r}function sn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function rn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ql(i,e){let t=Rf[e];t===void 0&&(t=new Int32Array(e),Rf[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function oS(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function aS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;i.uniform2fv(this.addr,e),rn(t,e)}}function lS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(sn(t,e))return;i.uniform3fv(this.addr,e),rn(t,e)}}function cS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;i.uniform4fv(this.addr,e),rn(t,e)}}function uS(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(sn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),rn(t,e)}else{if(sn(t,n))return;Df.set(n),i.uniformMatrix2fv(this.addr,!1,Df),rn(t,n)}}function hS(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(sn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),rn(t,e)}else{if(sn(t,n))return;If.set(n),i.uniformMatrix3fv(this.addr,!1,If),rn(t,n)}}function dS(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(sn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),rn(t,e)}else{if(sn(t,n))return;Lf.set(n),i.uniformMatrix4fv(this.addr,!1,Lf),rn(t,n)}}function pS(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function fS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;i.uniform2iv(this.addr,e),rn(t,e)}}function mS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(sn(t,e))return;i.uniform3iv(this.addr,e),rn(t,e)}}function gS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;i.uniform4iv(this.addr,e),rn(t,e)}}function vS(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function _S(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;i.uniform2uiv(this.addr,e),rn(t,e)}}function xS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(sn(t,e))return;i.uniform3uiv(this.addr,e),rn(t,e)}}function bS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;i.uniform4uiv(this.addr,e),rn(t,e)}}function yS(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);const r=this.type===i.SAMPLER_2D_SHADOW?f0:p0;t.setTexture2D(e||r,s)}function wS(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||g0,s)}function MS(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||v0,s)}function ES(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||m0,s)}function SS(i){switch(i){case 5126:return oS;case 35664:return aS;case 35665:return lS;case 35666:return cS;case 35674:return uS;case 35675:return hS;case 35676:return dS;case 5124:case 35670:return pS;case 35667:case 35671:return fS;case 35668:case 35672:return mS;case 35669:case 35673:return gS;case 5125:return vS;case 36294:return _S;case 36295:return xS;case 36296:return bS;case 35678:case 36198:case 36298:case 36306:case 35682:return yS;case 35679:case 36299:case 36307:return wS;case 35680:case 36300:case 36308:case 36293:return MS;case 36289:case 36303:case 36311:case 36292:return ES}}function TS(i,e){i.uniform1fv(this.addr,e)}function AS(i,e){const t=Zr(e,this.size,2);i.uniform2fv(this.addr,t)}function CS(i,e){const t=Zr(e,this.size,3);i.uniform3fv(this.addr,t)}function PS(i,e){const t=Zr(e,this.size,4);i.uniform4fv(this.addr,t)}function RS(i,e){const t=Zr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function LS(i,e){const t=Zr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function IS(i,e){const t=Zr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function DS(i,e){i.uniform1iv(this.addr,e)}function NS(i,e){i.uniform2iv(this.addr,e)}function US(i,e){i.uniform3iv(this.addr,e)}function kS(i,e){i.uniform4iv(this.addr,e)}function FS(i,e){i.uniform1uiv(this.addr,e)}function OS(i,e){i.uniform2uiv(this.addr,e)}function BS(i,e){i.uniform3uiv(this.addr,e)}function VS(i,e){i.uniform4uiv(this.addr,e)}function zS(i,e,t){const n=this.cache,s=e.length,r=ql(t,s);sn(n,r)||(i.uniform1iv(this.addr,r),rn(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||p0,r[o])}function HS(i,e,t){const n=this.cache,s=e.length,r=ql(t,s);sn(n,r)||(i.uniform1iv(this.addr,r),rn(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||g0,r[o])}function GS(i,e,t){const n=this.cache,s=e.length,r=ql(t,s);sn(n,r)||(i.uniform1iv(this.addr,r),rn(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||v0,r[o])}function WS(i,e,t){const n=this.cache,s=e.length,r=ql(t,s);sn(n,r)||(i.uniform1iv(this.addr,r),rn(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||m0,r[o])}function XS(i){switch(i){case 5126:return TS;case 35664:return AS;case 35665:return CS;case 35666:return PS;case 35674:return RS;case 35675:return LS;case 35676:return IS;case 5124:case 35670:return DS;case 35667:case 35671:return NS;case 35668:case 35672:return US;case 35669:case 35673:return kS;case 5125:return FS;case 36294:return OS;case 36295:return BS;case 36296:return VS;case 35678:case 36198:case 36298:case 36306:case 35682:return zS;case 35679:case 36299:case 36307:return HS;case 35680:case 36300:case 36308:case 36293:return GS;case 36289:case 36303:case 36311:case 36292:return WS}}class jS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=SS(t.type)}}class $S{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=XS(t.type)}}class qS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const l=s[r];l.setValue(e,t[l.id],n)}}}const ru=/(\w+)(\])?(\[|\.)?/g;function Nf(i,e){i.seq.push(e),i.map[e.id]=e}function YS(i,e,t){const n=i.name,s=n.length;for(ru.lastIndex=0;;){const r=ru.exec(n),o=ru.lastIndex;let l=r[1];const c=r[2]==="]",u=r[3];if(c&&(l=l|0),u===void 0||u==="["&&o+2===s){Nf(t,u===void 0?new jS(l,i,e):new $S(l,i,e));break}else{let p=t.map[l];p===void 0&&(p=new qS(l),Nf(t,p)),t=p}}}class gl{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);YS(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const l=t[r],c=n[l.id];c.needsUpdate!==!1&&l.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function Uf(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const KS=37297;let ZS=0;function QS(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const l=o+1;n.push(`${l===e?">":" "} ${l}: ${t[o]}`)}return n.join(`
`)}function JS(i){const e=gt.getPrimaries(gt.workingColorSpace),t=gt.getPrimaries(i);let n;switch(e===t?n="":e===kl&&t===Ul?n="LinearDisplayP3ToLinearSRGB":e===Ul&&t===kl&&(n="LinearSRGBToLinearDisplayP3"),i){case ln:case $l:return[n,"LinearTransferOETF"];case Vt:case Lh:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function kf(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+QS(i.getShaderSource(e),o)}else return s}function eT(i,e){const t=JS(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function tT(i,e){let t;switch(e){case Kb:t="Linear";break;case Zb:t="Reinhard";break;case Qb:t="OptimizedCineon";break;case Jb:t="ACESFilmic";break;case ty:t="AgX";break;case ey:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function nT(i){return[i.extensionDerivatives||!!i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.alphaToCoverage||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Lr).join(`
`)}function iT(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Lr).join(`
`)}function sT(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function rT(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let l=1;r.type===i.FLOAT_MAT2&&(l=2),r.type===i.FLOAT_MAT3&&(l=3),r.type===i.FLOAT_MAT4&&(l=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:l}}return t}function Lr(i){return i!==""}function Ff(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Of(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const oT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yu(i){return i.replace(oT,lT)}const aT=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function lT(i,e){let t=tt[e];if(t===void 0){const n=aT.get(e);if(n!==void 0)t=tt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Yu(t)}const cT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bf(i){return i.replace(cT,uT)}function uT(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Vf(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	`;return i.isWebGL2&&(e+=`precision ${i.precision} sampler3D;
		precision ${i.precision} sampler2DArray;
		precision ${i.precision} sampler2DShadow;
		precision ${i.precision} samplerCubeShadow;
		precision ${i.precision} sampler2DArrayShadow;
		precision ${i.precision} isampler2D;
		precision ${i.precision} isampler3D;
		precision ${i.precision} isamplerCube;
		precision ${i.precision} isampler2DArray;
		precision ${i.precision} usampler2D;
		precision ${i.precision} usampler3D;
		precision ${i.precision} usamplerCube;
		precision ${i.precision} usampler2DArray;
		`),i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function hT(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===zg?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Eb?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Ii&&(e="SHADOWMAP_TYPE_VSM"),e}function dT(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Or:case Br:e="ENVMAP_TYPE_CUBE";break;case Wl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function pT(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Br:e="ENVMAP_MODE_REFRACTION";break}return e}function fT(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Hg:e="ENVMAP_BLENDING_MULTIPLY";break;case qb:e="ENVMAP_BLENDING_MIX";break;case Yb:e="ENVMAP_BLENDING_ADD";break}return e}function mT(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function gT(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,l=t.fragmentShader;const c=hT(t),u=dT(t),d=pT(t),p=fT(t),m=mT(t),g=t.isWebGL2?"":nT(t),b=iT(t),w=sT(r),x=s.createProgram();let v,M,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w].filter(Lr).join(`
`),v.length>0&&(v+=`
`),M=[g,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w].filter(Lr).join(`
`),M.length>0&&(M+=`
`)):(v=[Vf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Lr).join(`
`),M=[g,Vf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",t.envMap?"#define "+p:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==us?"#define TONE_MAPPING":"",t.toneMapping!==us?tt.tonemapping_pars_fragment:"",t.toneMapping!==us?tT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",tt.colorspace_pars_fragment,eT("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Lr).join(`
`)),o=Yu(o),o=Ff(o,t),o=Of(o,t),l=Yu(l),l=Ff(l,t),l=Of(l,t),o=Bf(o),l=Bf(l),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,v=[b,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,M=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Kn?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Kn?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);const S=y+v+o,C=y+M+l,P=Uf(s,s.VERTEX_SHADER,S),T=Uf(s,s.FRAGMENT_SHADER,C);s.attachShader(x,P),s.attachShader(x,T),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function I(B){if(i.debug.checkShaderErrors){const W=s.getProgramInfoLog(x).trim(),U=s.getShaderInfoLog(P).trim(),H=s.getShaderInfoLog(T).trim();let G=!0,X=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,P,T);else{const Q=kf(s,P,"vertex"),Y=kf(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+W+`
`+Q+`
`+Y)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(U===""||H==="")&&(X=!1);X&&(B.diagnostics={runnable:G,programLog:W,vertexShader:{log:U,prefix:v},fragmentShader:{log:H,prefix:M}})}s.deleteShader(P),s.deleteShader(T),F=new gl(s,x),E=rT(s,x)}let F;this.getUniforms=function(){return F===void 0&&I(this),F};let E;this.getAttributes=function(){return E===void 0&&I(this),E};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(x,KS)),R},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ZS++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=P,this.fragmentShader=T,this}let vT=0;class _T{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new xT(e),t.set(e,n)),n}}class xT{constructor(e){this.id=vT++,this.code=e,this.usedTimes=0}}function bT(i,e,t,n,s,r,o){const l=new Dh,c=new _T,u=new Set,d=[],p=s.isWebGL2,m=s.logarithmicDepthBuffer,g=s.vertexTextures;let b=s.precision;const w={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(E){return u.add(E),E===0?"uv":`uv${E}`}function v(E,R,B,W,U){const H=W.fog,G=U.geometry,X=E.isMeshStandardMaterial?W.environment:null,Q=(E.isMeshStandardMaterial?t:e).get(E.envMap||X),Y=!!Q&&Q.mapping===Wl?Q.image.height:null,ie=w[E.type];E.precision!==null&&(b=s.getMaxPrecision(E.precision),b!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",b,"instead."));const ne=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,me=ne!==void 0?ne.length:0;let he=0;G.morphAttributes.position!==void 0&&(he=1),G.morphAttributes.normal!==void 0&&(he=2),G.morphAttributes.color!==void 0&&(he=3);let $,se,xe,we;if(ie){const nt=pi[ie];$=nt.vertexShader,se=nt.fragmentShader}else $=E.vertexShader,se=E.fragmentShader,c.update(E),xe=c.getVertexShaderID(E),we=c.getFragmentShaderID(E);const Ae=i.getRenderTarget(),_e=U.isInstancedMesh===!0,ke=U.isBatchedMesh===!0,Ue=!!E.map,j=!!E.matcap,Ct=!!Q,Pe=!!E.aoMap,Ve=!!E.lightMap,Ce=!!E.bumpMap,ut=!!E.normalMap,ze=!!E.displacementMap,k=!!E.emissiveMap,L=!!E.metalnessMap,Z=!!E.roughnessMap,ue=E.anisotropy>0,re=E.clearcoat>0,ce=E.iridescence>0,Re=E.sheen>0,be=E.transmission>0,Ee=ue&&!!E.anisotropyMap,He=re&&!!E.clearcoatMap,Xe=re&&!!E.clearcoatNormalMap,ae=re&&!!E.clearcoatRoughnessMap,rt=ce&&!!E.iridescenceMap,et=ce&&!!E.iridescenceThicknessMap,$e=Re&&!!E.sheenColorMap,Ie=Re&&!!E.sheenRoughnessMap,Me=!!E.specularMap,Ze=!!E.specularColorMap,V=!!E.specularIntensityMap,pe=be&&!!E.transmissionMap,ye=be&&!!E.thicknessMap,De=!!E.gradientMap,O=!!E.alphaMap,oe=E.alphaTest>0,le=!!E.alphaHash,Te=!!E.extensions;let Oe=us;E.toneMapped&&(Ae===null||Ae.isXRRenderTarget===!0)&&(Oe=i.toneMapping);const it={isWebGL2:p,shaderID:ie,shaderType:E.type,shaderName:E.name,vertexShader:$,fragmentShader:se,defines:E.defines,customVertexShaderID:xe,customFragmentShaderID:we,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:b,batching:ke,instancing:_e,instancingColor:_e&&U.instanceColor!==null,supportsVertexTextures:g,outputColorSpace:Ae===null?i.outputColorSpace:Ae.isXRRenderTarget===!0?Ae.texture.colorSpace:ln,alphaToCoverage:!!E.alphaToCoverage,map:Ue,matcap:j,envMap:Ct,envMapMode:Ct&&Q.mapping,envMapCubeUVHeight:Y,aoMap:Pe,lightMap:Ve,bumpMap:Ce,normalMap:ut,displacementMap:g&&ze,emissiveMap:k,normalMapObjectSpace:ut&&E.normalMapType===hy,normalMapTangentSpace:ut&&E.normalMapType===Qg,metalnessMap:L,roughnessMap:Z,anisotropy:ue,anisotropyMap:Ee,clearcoat:re,clearcoatMap:He,clearcoatNormalMap:Xe,clearcoatRoughnessMap:ae,iridescence:ce,iridescenceMap:rt,iridescenceThicknessMap:et,sheen:Re,sheenColorMap:$e,sheenRoughnessMap:Ie,specularMap:Me,specularColorMap:Ze,specularIntensityMap:V,transmission:be,transmissionMap:pe,thicknessMap:ye,gradientMap:De,opaque:E.transparent===!1&&E.blending===Nr&&E.alphaToCoverage===!1,alphaMap:O,alphaTest:oe,alphaHash:le,combine:E.combine,mapUv:Ue&&x(E.map.channel),aoMapUv:Pe&&x(E.aoMap.channel),lightMapUv:Ve&&x(E.lightMap.channel),bumpMapUv:Ce&&x(E.bumpMap.channel),normalMapUv:ut&&x(E.normalMap.channel),displacementMapUv:ze&&x(E.displacementMap.channel),emissiveMapUv:k&&x(E.emissiveMap.channel),metalnessMapUv:L&&x(E.metalnessMap.channel),roughnessMapUv:Z&&x(E.roughnessMap.channel),anisotropyMapUv:Ee&&x(E.anisotropyMap.channel),clearcoatMapUv:He&&x(E.clearcoatMap.channel),clearcoatNormalMapUv:Xe&&x(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&x(E.clearcoatRoughnessMap.channel),iridescenceMapUv:rt&&x(E.iridescenceMap.channel),iridescenceThicknessMapUv:et&&x(E.iridescenceThicknessMap.channel),sheenColorMapUv:$e&&x(E.sheenColorMap.channel),sheenRoughnessMapUv:Ie&&x(E.sheenRoughnessMap.channel),specularMapUv:Me&&x(E.specularMap.channel),specularColorMapUv:Ze&&x(E.specularColorMap.channel),specularIntensityMapUv:V&&x(E.specularIntensityMap.channel),transmissionMapUv:pe&&x(E.transmissionMap.channel),thicknessMapUv:ye&&x(E.thicknessMap.channel),alphaMapUv:O&&x(E.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(ut||ue),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!G.attributes.uv&&(Ue||O),fog:!!H,useFog:E.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:m,skinning:U.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:me,morphTextureStride:he,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&B.length>0,shadowMapType:i.shadowMap.type,toneMapping:Oe,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Ue&&E.map.isVideoTexture===!0&&gt.getTransfer(E.map.colorSpace)===Lt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===wn,flipSided:E.side===Tn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionDerivatives:Te&&E.extensions.derivatives===!0,extensionFragDepth:Te&&E.extensions.fragDepth===!0,extensionDrawBuffers:Te&&E.extensions.drawBuffers===!0,extensionShaderTextureLOD:Te&&E.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Te&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Te&&E.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionFragDepth:p||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:p||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:p||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return it.vertexUv1s=u.has(1),it.vertexUv2s=u.has(2),it.vertexUv3s=u.has(3),u.clear(),it}function M(E){const R=[];if(E.shaderID?R.push(E.shaderID):(R.push(E.customVertexShaderID),R.push(E.customFragmentShaderID)),E.defines!==void 0)for(const B in E.defines)R.push(B),R.push(E.defines[B]);return E.isRawShaderMaterial===!1&&(y(R,E),S(R,E),R.push(i.outputColorSpace)),R.push(E.customProgramCacheKey),R.join()}function y(E,R){E.push(R.precision),E.push(R.outputColorSpace),E.push(R.envMapMode),E.push(R.envMapCubeUVHeight),E.push(R.mapUv),E.push(R.alphaMapUv),E.push(R.lightMapUv),E.push(R.aoMapUv),E.push(R.bumpMapUv),E.push(R.normalMapUv),E.push(R.displacementMapUv),E.push(R.emissiveMapUv),E.push(R.metalnessMapUv),E.push(R.roughnessMapUv),E.push(R.anisotropyMapUv),E.push(R.clearcoatMapUv),E.push(R.clearcoatNormalMapUv),E.push(R.clearcoatRoughnessMapUv),E.push(R.iridescenceMapUv),E.push(R.iridescenceThicknessMapUv),E.push(R.sheenColorMapUv),E.push(R.sheenRoughnessMapUv),E.push(R.specularMapUv),E.push(R.specularColorMapUv),E.push(R.specularIntensityMapUv),E.push(R.transmissionMapUv),E.push(R.thicknessMapUv),E.push(R.combine),E.push(R.fogExp2),E.push(R.sizeAttenuation),E.push(R.morphTargetsCount),E.push(R.morphAttributeCount),E.push(R.numDirLights),E.push(R.numPointLights),E.push(R.numSpotLights),E.push(R.numSpotLightMaps),E.push(R.numHemiLights),E.push(R.numRectAreaLights),E.push(R.numDirLightShadows),E.push(R.numPointLightShadows),E.push(R.numSpotLightShadows),E.push(R.numSpotLightShadowsWithMaps),E.push(R.numLightProbes),E.push(R.shadowMapType),E.push(R.toneMapping),E.push(R.numClippingPlanes),E.push(R.numClipIntersection),E.push(R.depthPacking)}function S(E,R){l.disableAll(),R.isWebGL2&&l.enable(0),R.supportsVertexTextures&&l.enable(1),R.instancing&&l.enable(2),R.instancingColor&&l.enable(3),R.matcap&&l.enable(4),R.envMap&&l.enable(5),R.normalMapObjectSpace&&l.enable(6),R.normalMapTangentSpace&&l.enable(7),R.clearcoat&&l.enable(8),R.iridescence&&l.enable(9),R.alphaTest&&l.enable(10),R.vertexColors&&l.enable(11),R.vertexAlphas&&l.enable(12),R.vertexUv1s&&l.enable(13),R.vertexUv2s&&l.enable(14),R.vertexUv3s&&l.enable(15),R.vertexTangents&&l.enable(16),R.anisotropy&&l.enable(17),R.alphaHash&&l.enable(18),R.batching&&l.enable(19),E.push(l.mask),l.disableAll(),R.fog&&l.enable(0),R.useFog&&l.enable(1),R.flatShading&&l.enable(2),R.logarithmicDepthBuffer&&l.enable(3),R.skinning&&l.enable(4),R.morphTargets&&l.enable(5),R.morphNormals&&l.enable(6),R.morphColors&&l.enable(7),R.premultipliedAlpha&&l.enable(8),R.shadowMapEnabled&&l.enable(9),R.useLegacyLights&&l.enable(10),R.doubleSided&&l.enable(11),R.flipSided&&l.enable(12),R.useDepthPacking&&l.enable(13),R.dithering&&l.enable(14),R.transmission&&l.enable(15),R.sheen&&l.enable(16),R.opaque&&l.enable(17),R.pointsUvs&&l.enable(18),R.decodeVideoTexture&&l.enable(19),R.alphaToCoverage&&l.enable(20),E.push(l.mask)}function C(E){const R=w[E.type];let B;if(R){const W=pi[R];B=nw.clone(W.uniforms)}else B=E.uniforms;return B}function P(E,R){let B;for(let W=0,U=d.length;W<U;W++){const H=d[W];if(H.cacheKey===R){B=H,++B.usedTimes;break}}return B===void 0&&(B=new gT(i,R,E,r),d.push(B)),B}function T(E){if(--E.usedTimes===0){const R=d.indexOf(E);d[R]=d[d.length-1],d.pop(),E.destroy()}}function I(E){c.remove(E)}function F(){c.dispose()}return{getParameters:v,getProgramCacheKey:M,getUniforms:C,acquireProgram:P,releaseProgram:T,releaseShaderCache:I,programs:d,dispose:F}}function yT(){let i=new WeakMap;function e(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function t(r){i.delete(r)}function n(r,o,l){i.get(r)[o]=l}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function wT(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function zf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Hf(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(p,m,g,b,w,x){let v=i[e];return v===void 0?(v={id:p.id,object:p,geometry:m,material:g,groupOrder:b,renderOrder:p.renderOrder,z:w,group:x},i[e]=v):(v.id=p.id,v.object=p,v.geometry=m,v.material=g,v.groupOrder=b,v.renderOrder=p.renderOrder,v.z=w,v.group=x),e++,v}function l(p,m,g,b,w,x){const v=o(p,m,g,b,w,x);g.transmission>0?n.push(v):g.transparent===!0?s.push(v):t.push(v)}function c(p,m,g,b,w,x){const v=o(p,m,g,b,w,x);g.transmission>0?n.unshift(v):g.transparent===!0?s.unshift(v):t.unshift(v)}function u(p,m){t.length>1&&t.sort(p||wT),n.length>1&&n.sort(m||zf),s.length>1&&s.sort(m||zf)}function d(){for(let p=e,m=i.length;p<m;p++){const g=i[p];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:u}}function MT(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new Hf,i.set(n,[o])):s>=r.length?(o=new Hf,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function ET(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new We};break;case"SpotLight":t={position:new D,direction:new D,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new We,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new We,groundColor:new We};break;case"RectAreaLight":t={color:new We,position:new D,halfWidth:new D,halfHeight:new D};break}return i[e.id]=t,t}}}function ST(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let TT=0;function AT(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function CT(i,e){const t=new ET,n=ST(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)s.probe.push(new D);const r=new D,o=new je,l=new je;function c(d,p){let m=0,g=0,b=0;for(let B=0;B<9;B++)s.probe[B].set(0,0,0);let w=0,x=0,v=0,M=0,y=0,S=0,C=0,P=0,T=0,I=0,F=0;d.sort(AT);const E=p===!0?Math.PI:1;for(let B=0,W=d.length;B<W;B++){const U=d[B],H=U.color,G=U.intensity,X=U.distance,Q=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)m+=H.r*G*E,g+=H.g*G*E,b+=H.b*G*E;else if(U.isLightProbe){for(let Y=0;Y<9;Y++)s.probe[Y].addScaledVector(U.sh.coefficients[Y],G);F++}else if(U.isDirectionalLight){const Y=t.get(U);if(Y.color.copy(U.color).multiplyScalar(U.intensity*E),U.castShadow){const ie=U.shadow,ne=n.get(U);ne.shadowBias=ie.bias,ne.shadowNormalBias=ie.normalBias,ne.shadowRadius=ie.radius,ne.shadowMapSize=ie.mapSize,s.directionalShadow[w]=ne,s.directionalShadowMap[w]=Q,s.directionalShadowMatrix[w]=U.shadow.matrix,S++}s.directional[w]=Y,w++}else if(U.isSpotLight){const Y=t.get(U);Y.position.setFromMatrixPosition(U.matrixWorld),Y.color.copy(H).multiplyScalar(G*E),Y.distance=X,Y.coneCos=Math.cos(U.angle),Y.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),Y.decay=U.decay,s.spot[v]=Y;const ie=U.shadow;if(U.map&&(s.spotLightMap[T]=U.map,T++,ie.updateMatrices(U),U.castShadow&&I++),s.spotLightMatrix[v]=ie.matrix,U.castShadow){const ne=n.get(U);ne.shadowBias=ie.bias,ne.shadowNormalBias=ie.normalBias,ne.shadowRadius=ie.radius,ne.shadowMapSize=ie.mapSize,s.spotShadow[v]=ne,s.spotShadowMap[v]=Q,P++}v++}else if(U.isRectAreaLight){const Y=t.get(U);Y.color.copy(H).multiplyScalar(G),Y.halfWidth.set(U.width*.5,0,0),Y.halfHeight.set(0,U.height*.5,0),s.rectArea[M]=Y,M++}else if(U.isPointLight){const Y=t.get(U);if(Y.color.copy(U.color).multiplyScalar(U.intensity*E),Y.distance=U.distance,Y.decay=U.decay,U.castShadow){const ie=U.shadow,ne=n.get(U);ne.shadowBias=ie.bias,ne.shadowNormalBias=ie.normalBias,ne.shadowRadius=ie.radius,ne.shadowMapSize=ie.mapSize,ne.shadowCameraNear=ie.camera.near,ne.shadowCameraFar=ie.camera.far,s.pointShadow[x]=ne,s.pointShadowMap[x]=Q,s.pointShadowMatrix[x]=U.shadow.matrix,C++}s.point[x]=Y,x++}else if(U.isHemisphereLight){const Y=t.get(U);Y.skyColor.copy(U.color).multiplyScalar(G*E),Y.groundColor.copy(U.groundColor).multiplyScalar(G*E),s.hemi[y]=Y,y++}}M>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ge.LTC_FLOAT_1,s.rectAreaLTC2=ge.LTC_FLOAT_2):(s.rectAreaLTC1=ge.LTC_HALF_1,s.rectAreaLTC2=ge.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ge.LTC_FLOAT_1,s.rectAreaLTC2=ge.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=ge.LTC_HALF_1,s.rectAreaLTC2=ge.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=m,s.ambient[1]=g,s.ambient[2]=b;const R=s.hash;(R.directionalLength!==w||R.pointLength!==x||R.spotLength!==v||R.rectAreaLength!==M||R.hemiLength!==y||R.numDirectionalShadows!==S||R.numPointShadows!==C||R.numSpotShadows!==P||R.numSpotMaps!==T||R.numLightProbes!==F)&&(s.directional.length=w,s.spot.length=v,s.rectArea.length=M,s.point.length=x,s.hemi.length=y,s.directionalShadow.length=S,s.directionalShadowMap.length=S,s.pointShadow.length=C,s.pointShadowMap.length=C,s.spotShadow.length=P,s.spotShadowMap.length=P,s.directionalShadowMatrix.length=S,s.pointShadowMatrix.length=C,s.spotLightMatrix.length=P+T-I,s.spotLightMap.length=T,s.numSpotLightShadowsWithMaps=I,s.numLightProbes=F,R.directionalLength=w,R.pointLength=x,R.spotLength=v,R.rectAreaLength=M,R.hemiLength=y,R.numDirectionalShadows=S,R.numPointShadows=C,R.numSpotShadows=P,R.numSpotMaps=T,R.numLightProbes=F,s.version=TT++)}function u(d,p){let m=0,g=0,b=0,w=0,x=0;const v=p.matrixWorldInverse;for(let M=0,y=d.length;M<y;M++){const S=d[M];if(S.isDirectionalLight){const C=s.directional[m];C.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(v),m++}else if(S.isSpotLight){const C=s.spot[b];C.position.setFromMatrixPosition(S.matrixWorld),C.position.applyMatrix4(v),C.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(v),b++}else if(S.isRectAreaLight){const C=s.rectArea[w];C.position.setFromMatrixPosition(S.matrixWorld),C.position.applyMatrix4(v),l.identity(),o.copy(S.matrixWorld),o.premultiply(v),l.extractRotation(o),C.halfWidth.set(S.width*.5,0,0),C.halfHeight.set(0,S.height*.5,0),C.halfWidth.applyMatrix4(l),C.halfHeight.applyMatrix4(l),w++}else if(S.isPointLight){const C=s.point[g];C.position.setFromMatrixPosition(S.matrixWorld),C.position.applyMatrix4(v),g++}else if(S.isHemisphereLight){const C=s.hemi[x];C.direction.setFromMatrixPosition(S.matrixWorld),C.direction.transformDirection(v),x++}}}return{setup:c,setupView:u,state:s}}function Gf(i,e){const t=new CT(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function o(p){n.push(p)}function l(p){s.push(p)}function c(p){t.setup(n,p)}function u(p){t.setupView(n,p)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:c,setupLightsView:u,pushLight:o,pushShadow:l}}function PT(i,e){let t=new WeakMap;function n(r,o=0){const l=t.get(r);let c;return l===void 0?(c=new Gf(i,e),t.set(r,[c])):o>=l.length?(c=new Gf(i,e),l.push(c)):c=l[o],c}function s(){t=new WeakMap}return{get:n,dispose:s}}class RT extends gi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=cy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class LT extends gi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const IT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,DT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function NT(i,e,t){let n=new Nh;const s=new Le,r=new Le,o=new yt,l=new RT({depthPacking:uy}),c=new LT,u={},d=t.maxTextureSize,p={[oi]:Tn,[Tn]:oi,[wn]:wn},m=new nn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Le},radius:{value:4}},vertexShader:IT,fragmentShader:DT}),g=m.clone();g.defines.HORIZONTAL_PASS=1;const b=new cn;b.setAttribute("position",new Dt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new fe(b,m),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zg;let v=this.type;this.render=function(P,T,I){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||P.length===0)return;const F=i.getRenderTarget(),E=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),B=i.state;B.setBlending(qn),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const W=v!==Ii&&this.type===Ii,U=v===Ii&&this.type!==Ii;for(let H=0,G=P.length;H<G;H++){const X=P[H],Q=X.shadow;if(Q===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(Q.autoUpdate===!1&&Q.needsUpdate===!1)continue;s.copy(Q.mapSize);const Y=Q.getFrameExtents();if(s.multiply(Y),r.copy(Q.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/Y.x),s.x=r.x*Y.x,Q.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/Y.y),s.y=r.y*Y.y,Q.mapSize.y=r.y)),Q.map===null||W===!0||U===!0){const ne=this.type!==Ii?{minFilter:mt,magFilter:mt}:{};Q.map!==null&&Q.map.dispose(),Q.map=new Ln(s.x,s.y,ne),Q.map.texture.name=X.name+".shadowMap",Q.camera.updateProjectionMatrix()}i.setRenderTarget(Q.map),i.clear();const ie=Q.getViewportCount();for(let ne=0;ne<ie;ne++){const me=Q.getViewport(ne);o.set(r.x*me.x,r.y*me.y,r.x*me.z,r.y*me.w),B.viewport(o),Q.updateMatrices(X,ne),n=Q.getFrustum(),S(T,I,Q.camera,X,this.type)}Q.isPointLightShadow!==!0&&this.type===Ii&&M(Q,I),Q.needsUpdate=!1}v=this.type,x.needsUpdate=!1,i.setRenderTarget(F,E,R)};function M(P,T){const I=e.update(w);m.defines.VSM_SAMPLES!==P.blurSamples&&(m.defines.VSM_SAMPLES=P.blurSamples,g.defines.VSM_SAMPLES=P.blurSamples,m.needsUpdate=!0,g.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Ln(s.x,s.y)),m.uniforms.shadow_pass.value=P.map.texture,m.uniforms.resolution.value=P.mapSize,m.uniforms.radius.value=P.radius,i.setRenderTarget(P.mapPass),i.clear(),i.renderBufferDirect(T,null,I,m,w,null),g.uniforms.shadow_pass.value=P.mapPass.texture,g.uniforms.resolution.value=P.mapSize,g.uniforms.radius.value=P.radius,i.setRenderTarget(P.map),i.clear(),i.renderBufferDirect(T,null,I,g,w,null)}function y(P,T,I,F){let E=null;const R=I.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(R!==void 0)E=R;else if(E=I.isPointLight===!0?c:l,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const B=E.uuid,W=T.uuid;let U=u[B];U===void 0&&(U={},u[B]=U);let H=U[W];H===void 0&&(H=E.clone(),U[W]=H,T.addEventListener("dispose",C)),E=H}if(E.visible=T.visible,E.wireframe=T.wireframe,F===Ii?E.side=T.shadowSide!==null?T.shadowSide:T.side:E.side=T.shadowSide!==null?T.shadowSide:p[T.side],E.alphaMap=T.alphaMap,E.alphaTest=T.alphaTest,E.map=T.map,E.clipShadows=T.clipShadows,E.clippingPlanes=T.clippingPlanes,E.clipIntersection=T.clipIntersection,E.displacementMap=T.displacementMap,E.displacementScale=T.displacementScale,E.displacementBias=T.displacementBias,E.wireframeLinewidth=T.wireframeLinewidth,E.linewidth=T.linewidth,I.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const B=i.properties.get(E);B.light=I}return E}function S(P,T,I,F,E){if(P.visible===!1)return;if(P.layers.test(T.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&E===Ii)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,P.matrixWorld);const W=e.update(P),U=P.material;if(Array.isArray(U)){const H=W.groups;for(let G=0,X=H.length;G<X;G++){const Q=H[G],Y=U[Q.materialIndex];if(Y&&Y.visible){const ie=y(P,Y,F,E);P.onBeforeShadow(i,P,T,I,W,ie,Q),i.renderBufferDirect(I,null,W,ie,P,Q),P.onAfterShadow(i,P,T,I,W,ie,Q)}}}else if(U.visible){const H=y(P,U,F,E);P.onBeforeShadow(i,P,T,I,W,H,null),i.renderBufferDirect(I,null,W,H,P,null),P.onAfterShadow(i,P,T,I,W,H,null)}}const B=P.children;for(let W=0,U=B.length;W<U;W++)S(B[W],T,I,F,E)}function C(P){P.target.removeEventListener("dispose",C);for(const I in u){const F=u[I],E=P.target.uuid;E in F&&(F[E].dispose(),delete F[E])}}}function UT(i,e,t){const n=t.isWebGL2;function s(){let O=!1;const oe=new yt;let le=null;const Te=new yt(0,0,0,0);return{setMask:function(Oe){le!==Oe&&!O&&(i.colorMask(Oe,Oe,Oe,Oe),le=Oe)},setLocked:function(Oe){O=Oe},setClear:function(Oe,it,nt,ht,Ht){Ht===!0&&(Oe*=ht,it*=ht,nt*=ht),oe.set(Oe,it,nt,ht),Te.equals(oe)===!1&&(i.clearColor(Oe,it,nt,ht),Te.copy(oe))},reset:function(){O=!1,le=null,Te.set(-1,0,0,0)}}}function r(){let O=!1,oe=null,le=null,Te=null;return{setTest:function(Oe){Oe?_e(i.DEPTH_TEST):ke(i.DEPTH_TEST)},setMask:function(Oe){oe!==Oe&&!O&&(i.depthMask(Oe),oe=Oe)},setFunc:function(Oe){if(le!==Oe){switch(Oe){case zb:i.depthFunc(i.NEVER);break;case Hb:i.depthFunc(i.ALWAYS);break;case Gb:i.depthFunc(i.LESS);break;case Il:i.depthFunc(i.LEQUAL);break;case Wb:i.depthFunc(i.EQUAL);break;case Xb:i.depthFunc(i.GEQUAL);break;case jb:i.depthFunc(i.GREATER);break;case $b:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}le=Oe}},setLocked:function(Oe){O=Oe},setClear:function(Oe){Te!==Oe&&(i.clearDepth(Oe),Te=Oe)},reset:function(){O=!1,oe=null,le=null,Te=null}}}function o(){let O=!1,oe=null,le=null,Te=null,Oe=null,it=null,nt=null,ht=null,Ht=null;return{setTest:function(at){O||(at?_e(i.STENCIL_TEST):ke(i.STENCIL_TEST))},setMask:function(at){oe!==at&&!O&&(i.stencilMask(at),oe=at)},setFunc:function(at,Ot,un){(le!==at||Te!==Ot||Oe!==un)&&(i.stencilFunc(at,Ot,un),le=at,Te=Ot,Oe=un)},setOp:function(at,Ot,un){(it!==at||nt!==Ot||ht!==un)&&(i.stencilOp(at,Ot,un),it=at,nt=Ot,ht=un)},setLocked:function(at){O=at},setClear:function(at){Ht!==at&&(i.clearStencil(at),Ht=at)},reset:function(){O=!1,oe=null,le=null,Te=null,Oe=null,it=null,nt=null,ht=null,Ht=null}}}const l=new s,c=new r,u=new o,d=new WeakMap,p=new WeakMap;let m={},g={},b=new WeakMap,w=[],x=null,v=!1,M=null,y=null,S=null,C=null,P=null,T=null,I=null,F=new We(0,0,0),E=0,R=!1,B=null,W=null,U=null,H=null,G=null;const X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Q=!1,Y=0;const ie=i.getParameter(i.VERSION);ie.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(ie)[1]),Q=Y>=1):ie.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),Q=Y>=2);let ne=null,me={};const he=i.getParameter(i.SCISSOR_BOX),$=i.getParameter(i.VIEWPORT),se=new yt().fromArray(he),xe=new yt().fromArray($);function we(O,oe,le,Te){const Oe=new Uint8Array(4),it=i.createTexture();i.bindTexture(O,it),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let nt=0;nt<le;nt++)n&&(O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY)?i.texImage3D(oe,0,i.RGBA,1,1,Te,0,i.RGBA,i.UNSIGNED_BYTE,Oe):i.texImage2D(oe+nt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Oe);return it}const Ae={};Ae[i.TEXTURE_2D]=we(i.TEXTURE_2D,i.TEXTURE_2D,1),Ae[i.TEXTURE_CUBE_MAP]=we(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Ae[i.TEXTURE_2D_ARRAY]=we(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ae[i.TEXTURE_3D]=we(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),l.setClear(0,0,0,1),c.setClear(1),u.setClear(0),_e(i.DEPTH_TEST),c.setFunc(Il),ze(!1),k(bp),_e(i.CULL_FACE),Ce(qn);function _e(O){m[O]!==!0&&(i.enable(O),m[O]=!0)}function ke(O){m[O]!==!1&&(i.disable(O),m[O]=!1)}function Ue(O,oe){return g[O]!==oe?(i.bindFramebuffer(O,oe),g[O]=oe,n&&(O===i.DRAW_FRAMEBUFFER&&(g[i.FRAMEBUFFER]=oe),O===i.FRAMEBUFFER&&(g[i.DRAW_FRAMEBUFFER]=oe)),!0):!1}function j(O,oe){let le=w,Te=!1;if(O)if(le=b.get(oe),le===void 0&&(le=[],b.set(oe,le)),O.isWebGLMultipleRenderTargets){const Oe=O.texture;if(le.length!==Oe.length||le[0]!==i.COLOR_ATTACHMENT0){for(let it=0,nt=Oe.length;it<nt;it++)le[it]=i.COLOR_ATTACHMENT0+it;le.length=Oe.length,Te=!0}}else le[0]!==i.COLOR_ATTACHMENT0&&(le[0]=i.COLOR_ATTACHMENT0,Te=!0);else le[0]!==i.BACK&&(le[0]=i.BACK,Te=!0);Te&&(t.isWebGL2?i.drawBuffers(le):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(le))}function Ct(O){return x!==O?(i.useProgram(O),x=O,!0):!1}const Pe={[As]:i.FUNC_ADD,[Tb]:i.FUNC_SUBTRACT,[Ab]:i.FUNC_REVERSE_SUBTRACT};if(n)Pe[Ep]=i.MIN,Pe[Sp]=i.MAX;else{const O=e.get("EXT_blend_minmax");O!==null&&(Pe[Ep]=O.MIN_EXT,Pe[Sp]=O.MAX_EXT)}const Ve={[Cb]:i.ZERO,[Pb]:i.ONE,[Rb]:i.SRC_COLOR,[Bu]:i.SRC_ALPHA,[kb]:i.SRC_ALPHA_SATURATE,[Nb]:i.DST_COLOR,[Ib]:i.DST_ALPHA,[Lb]:i.ONE_MINUS_SRC_COLOR,[Vu]:i.ONE_MINUS_SRC_ALPHA,[Ub]:i.ONE_MINUS_DST_COLOR,[Db]:i.ONE_MINUS_DST_ALPHA,[Fb]:i.CONSTANT_COLOR,[Ob]:i.ONE_MINUS_CONSTANT_COLOR,[Bb]:i.CONSTANT_ALPHA,[Vb]:i.ONE_MINUS_CONSTANT_ALPHA};function Ce(O,oe,le,Te,Oe,it,nt,ht,Ht,at){if(O===qn){v===!0&&(ke(i.BLEND),v=!1);return}if(v===!1&&(_e(i.BLEND),v=!0),O!==Sb){if(O!==M||at!==R){if((y!==As||P!==As)&&(i.blendEquation(i.FUNC_ADD),y=As,P=As),at)switch(O){case Nr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case yp:i.blendFunc(i.ONE,i.ONE);break;case wp:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Mp:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Nr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case yp:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case wp:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Mp:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}S=null,C=null,T=null,I=null,F.set(0,0,0),E=0,M=O,R=at}return}Oe=Oe||oe,it=it||le,nt=nt||Te,(oe!==y||Oe!==P)&&(i.blendEquationSeparate(Pe[oe],Pe[Oe]),y=oe,P=Oe),(le!==S||Te!==C||it!==T||nt!==I)&&(i.blendFuncSeparate(Ve[le],Ve[Te],Ve[it],Ve[nt]),S=le,C=Te,T=it,I=nt),(ht.equals(F)===!1||Ht!==E)&&(i.blendColor(ht.r,ht.g,ht.b,Ht),F.copy(ht),E=Ht),M=O,R=!1}function ut(O,oe){O.side===wn?ke(i.CULL_FACE):_e(i.CULL_FACE);let le=O.side===Tn;oe&&(le=!le),ze(le),O.blending===Nr&&O.transparent===!1?Ce(qn):Ce(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),c.setFunc(O.depthFunc),c.setTest(O.depthTest),c.setMask(O.depthWrite),l.setMask(O.colorWrite);const Te=O.stencilWrite;u.setTest(Te),Te&&(u.setMask(O.stencilWriteMask),u.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),u.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Z(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?_e(i.SAMPLE_ALPHA_TO_COVERAGE):ke(i.SAMPLE_ALPHA_TO_COVERAGE)}function ze(O){B!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),B=O)}function k(O){O!==wb?(_e(i.CULL_FACE),O!==W&&(O===bp?i.cullFace(i.BACK):O===Mb?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ke(i.CULL_FACE),W=O}function L(O){O!==U&&(Q&&i.lineWidth(O),U=O)}function Z(O,oe,le){O?(_e(i.POLYGON_OFFSET_FILL),(H!==oe||G!==le)&&(i.polygonOffset(oe,le),H=oe,G=le)):ke(i.POLYGON_OFFSET_FILL)}function ue(O){O?_e(i.SCISSOR_TEST):ke(i.SCISSOR_TEST)}function re(O){O===void 0&&(O=i.TEXTURE0+X-1),ne!==O&&(i.activeTexture(O),ne=O)}function ce(O,oe,le){le===void 0&&(ne===null?le=i.TEXTURE0+X-1:le=ne);let Te=me[le];Te===void 0&&(Te={type:void 0,texture:void 0},me[le]=Te),(Te.type!==O||Te.texture!==oe)&&(ne!==le&&(i.activeTexture(le),ne=le),i.bindTexture(O,oe||Ae[O]),Te.type=O,Te.texture=oe)}function Re(){const O=me[ne];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function be(){try{i.compressedTexImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ee(){try{i.compressedTexImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function He(){try{i.texSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Xe(){try{i.texSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ae(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function rt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function et(){try{i.texStorage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function $e(){try{i.texStorage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ie(){try{i.texImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Me(){try{i.texImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ze(O){se.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),se.copy(O))}function V(O){xe.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),xe.copy(O))}function pe(O,oe){let le=p.get(oe);le===void 0&&(le=new WeakMap,p.set(oe,le));let Te=le.get(O);Te===void 0&&(Te=i.getUniformBlockIndex(oe,O.name),le.set(O,Te))}function ye(O,oe){const Te=p.get(oe).get(O);d.get(oe)!==Te&&(i.uniformBlockBinding(oe,Te,O.__bindingPointIndex),d.set(oe,Te))}function De(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),m={},ne=null,me={},g={},b=new WeakMap,w=[],x=null,v=!1,M=null,y=null,S=null,C=null,P=null,T=null,I=null,F=new We(0,0,0),E=0,R=!1,B=null,W=null,U=null,H=null,G=null,se.set(0,0,i.canvas.width,i.canvas.height),xe.set(0,0,i.canvas.width,i.canvas.height),l.reset(),c.reset(),u.reset()}return{buffers:{color:l,depth:c,stencil:u},enable:_e,disable:ke,bindFramebuffer:Ue,drawBuffers:j,useProgram:Ct,setBlending:Ce,setMaterial:ut,setFlipSided:ze,setCullFace:k,setLineWidth:L,setPolygonOffset:Z,setScissorTest:ue,activeTexture:re,bindTexture:ce,unbindTexture:Re,compressedTexImage2D:be,compressedTexImage3D:Ee,texImage2D:Ie,texImage3D:Me,updateUBOMapping:pe,uniformBlockBinding:ye,texStorage2D:et,texStorage3D:$e,texSubImage2D:He,texSubImage3D:Xe,compressedTexSubImage2D:ae,compressedTexSubImage3D:rt,scissor:Ze,viewport:V,reset:De}}function kT(i,e,t,n,s,r,o){const l=s.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new WeakMap;let p;const m=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(k,L){return g?new OffscreenCanvas(k,L):Jo("canvas")}function w(k,L,Z,ue){let re=1;if((k.width>ue||k.height>ue)&&(re=ue/Math.max(k.width,k.height)),re<1||L===!0)if(typeof HTMLImageElement!="undefined"&&k instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&k instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&k instanceof ImageBitmap){const ce=L?Ol:Math.floor,Re=ce(re*k.width),be=ce(re*k.height);p===void 0&&(p=b(Re,be));const Ee=Z?b(Re,be):p;return Ee.width=Re,Ee.height=be,Ee.getContext("2d").drawImage(k,0,0,Re,be),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+k.width+"x"+k.height+") to ("+Re+"x"+be+")."),Ee}else return"data"in k&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+k.width+"x"+k.height+")."),k;return k}function x(k){return qu(k.width)&&qu(k.height)}function v(k){return l?!1:k.wrapS!==_n||k.wrapT!==_n||k.minFilter!==mt&&k.minFilter!==bt}function M(k,L){return k.generateMipmaps&&L&&k.minFilter!==mt&&k.minFilter!==bt}function y(k){i.generateMipmap(k)}function S(k,L,Z,ue,re=!1){if(l===!1)return L;if(k!==null){if(i[k]!==void 0)return i[k];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+k+"'")}let ce=L;if(L===i.RED&&(Z===i.FLOAT&&(ce=i.R32F),Z===i.HALF_FLOAT&&(ce=i.R16F),Z===i.UNSIGNED_BYTE&&(ce=i.R8)),L===i.RED_INTEGER&&(Z===i.UNSIGNED_BYTE&&(ce=i.R8UI),Z===i.UNSIGNED_SHORT&&(ce=i.R16UI),Z===i.UNSIGNED_INT&&(ce=i.R32UI),Z===i.BYTE&&(ce=i.R8I),Z===i.SHORT&&(ce=i.R16I),Z===i.INT&&(ce=i.R32I)),L===i.RG&&(Z===i.FLOAT&&(ce=i.RG32F),Z===i.HALF_FLOAT&&(ce=i.RG16F),Z===i.UNSIGNED_BYTE&&(ce=i.RG8)),L===i.RGBA){const Re=re?Nl:gt.getTransfer(ue);Z===i.FLOAT&&(ce=i.RGBA32F),Z===i.HALF_FLOAT&&(ce=i.RGBA16F),Z===i.UNSIGNED_BYTE&&(ce=Re===Lt?i.SRGB8_ALPHA8:i.RGBA8),Z===i.UNSIGNED_SHORT_4_4_4_4&&(ce=i.RGBA4),Z===i.UNSIGNED_SHORT_5_5_5_1&&(ce=i.RGB5_A1)}return(ce===i.R16F||ce===i.R32F||ce===i.RG16F||ce===i.RG32F||ce===i.RGBA16F||ce===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function C(k,L,Z){return M(k,Z)===!0||k.isFramebufferTexture&&k.minFilter!==mt&&k.minFilter!==bt?Math.log2(Math.max(L.width,L.height))+1:k.mipmaps!==void 0&&k.mipmaps.length>0?k.mipmaps.length:k.isCompressedTexture&&Array.isArray(k.image)?L.mipmaps.length:1}function P(k){return k===mt||k===Gu||k===Pr?i.NEAREST:i.LINEAR}function T(k){const L=k.target;L.removeEventListener("dispose",T),F(L),L.isVideoTexture&&d.delete(L)}function I(k){const L=k.target;L.removeEventListener("dispose",I),R(L)}function F(k){const L=n.get(k);if(L.__webglInit===void 0)return;const Z=k.source,ue=m.get(Z);if(ue){const re=ue[L.__cacheKey];re.usedTimes--,re.usedTimes===0&&E(k),Object.keys(ue).length===0&&m.delete(Z)}n.remove(k)}function E(k){const L=n.get(k);i.deleteTexture(L.__webglTexture);const Z=k.source,ue=m.get(Z);delete ue[L.__cacheKey],o.memory.textures--}function R(k){const L=k.texture,Z=n.get(k),ue=n.get(L);if(ue.__webglTexture!==void 0&&(i.deleteTexture(ue.__webglTexture),o.memory.textures--),k.depthTexture&&k.depthTexture.dispose(),k.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(Z.__webglFramebuffer[re]))for(let ce=0;ce<Z.__webglFramebuffer[re].length;ce++)i.deleteFramebuffer(Z.__webglFramebuffer[re][ce]);else i.deleteFramebuffer(Z.__webglFramebuffer[re]);Z.__webglDepthbuffer&&i.deleteRenderbuffer(Z.__webglDepthbuffer[re])}else{if(Array.isArray(Z.__webglFramebuffer))for(let re=0;re<Z.__webglFramebuffer.length;re++)i.deleteFramebuffer(Z.__webglFramebuffer[re]);else i.deleteFramebuffer(Z.__webglFramebuffer);if(Z.__webglDepthbuffer&&i.deleteRenderbuffer(Z.__webglDepthbuffer),Z.__webglMultisampledFramebuffer&&i.deleteFramebuffer(Z.__webglMultisampledFramebuffer),Z.__webglColorRenderbuffer)for(let re=0;re<Z.__webglColorRenderbuffer.length;re++)Z.__webglColorRenderbuffer[re]&&i.deleteRenderbuffer(Z.__webglColorRenderbuffer[re]);Z.__webglDepthRenderbuffer&&i.deleteRenderbuffer(Z.__webglDepthRenderbuffer)}if(k.isWebGLMultipleRenderTargets)for(let re=0,ce=L.length;re<ce;re++){const Re=n.get(L[re]);Re.__webglTexture&&(i.deleteTexture(Re.__webglTexture),o.memory.textures--),n.remove(L[re])}n.remove(L),n.remove(k)}let B=0;function W(){B=0}function U(){const k=B;return k>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+k+" texture units while this GPU supports only "+s.maxTextures),B+=1,k}function H(k){const L=[];return L.push(k.wrapS),L.push(k.wrapT),L.push(k.wrapR||0),L.push(k.magFilter),L.push(k.minFilter),L.push(k.anisotropy),L.push(k.internalFormat),L.push(k.format),L.push(k.type),L.push(k.generateMipmaps),L.push(k.premultiplyAlpha),L.push(k.flipY),L.push(k.unpackAlignment),L.push(k.colorSpace),L.join()}function G(k,L){const Z=n.get(k);if(k.isVideoTexture&&ut(k),k.isRenderTargetTexture===!1&&k.version>0&&Z.__version!==k.version){const ue=k.image;if(ue===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ue.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{se(Z,k,L);return}}t.bindTexture(i.TEXTURE_2D,Z.__webglTexture,i.TEXTURE0+L)}function X(k,L){const Z=n.get(k);if(k.version>0&&Z.__version!==k.version){se(Z,k,L);return}t.bindTexture(i.TEXTURE_2D_ARRAY,Z.__webglTexture,i.TEXTURE0+L)}function Q(k,L){const Z=n.get(k);if(k.version>0&&Z.__version!==k.version){se(Z,k,L);return}t.bindTexture(i.TEXTURE_3D,Z.__webglTexture,i.TEXTURE0+L)}function Y(k,L){const Z=n.get(k);if(k.version>0&&Z.__version!==k.version){xe(Z,k,L);return}t.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture,i.TEXTURE0+L)}const ie={[Vr]:i.REPEAT,[_n]:i.CLAMP_TO_EDGE,[Dl]:i.MIRRORED_REPEAT},ne={[mt]:i.NEAREST,[Gu]:i.NEAREST_MIPMAP_NEAREST,[Pr]:i.NEAREST_MIPMAP_LINEAR,[bt]:i.LINEAR,[ml]:i.LINEAR_MIPMAP_NEAREST,[ki]:i.LINEAR_MIPMAP_LINEAR},me={[dy]:i.NEVER,[_y]:i.ALWAYS,[py]:i.LESS,[Jg]:i.LEQUAL,[fy]:i.EQUAL,[vy]:i.GEQUAL,[my]:i.GREATER,[gy]:i.NOTEQUAL};function he(k,L,Z){if(L.type===wt&&e.has("OES_texture_float_linear")===!1&&(L.magFilter===bt||L.magFilter===ml||L.magFilter===Pr||L.magFilter===ki||L.minFilter===bt||L.minFilter===ml||L.minFilter===Pr||L.minFilter===ki)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),Z?(i.texParameteri(k,i.TEXTURE_WRAP_S,ie[L.wrapS]),i.texParameteri(k,i.TEXTURE_WRAP_T,ie[L.wrapT]),(k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY)&&i.texParameteri(k,i.TEXTURE_WRAP_R,ie[L.wrapR]),i.texParameteri(k,i.TEXTURE_MAG_FILTER,ne[L.magFilter]),i.texParameteri(k,i.TEXTURE_MIN_FILTER,ne[L.minFilter])):(i.texParameteri(k,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(k,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY)&&i.texParameteri(k,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(L.wrapS!==_n||L.wrapT!==_n)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(k,i.TEXTURE_MAG_FILTER,P(L.magFilter)),i.texParameteri(k,i.TEXTURE_MIN_FILTER,P(L.minFilter)),L.minFilter!==mt&&L.minFilter!==bt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),L.compareFunction&&(i.texParameteri(k,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(k,i.TEXTURE_COMPARE_FUNC,me[L.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ue=e.get("EXT_texture_filter_anisotropic");if(L.magFilter===mt||L.minFilter!==Pr&&L.minFilter!==ki||L.type===wt&&e.has("OES_texture_float_linear")===!1||l===!1&&L.type===Yn&&e.has("OES_texture_half_float_linear")===!1)return;(L.anisotropy>1||n.get(L).__currentAnisotropy)&&(i.texParameterf(k,ue.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(L.anisotropy,s.getMaxAnisotropy())),n.get(L).__currentAnisotropy=L.anisotropy)}}function $(k,L){let Z=!1;k.__webglInit===void 0&&(k.__webglInit=!0,L.addEventListener("dispose",T));const ue=L.source;let re=m.get(ue);re===void 0&&(re={},m.set(ue,re));const ce=H(L);if(ce!==k.__cacheKey){re[ce]===void 0&&(re[ce]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,Z=!0),re[ce].usedTimes++;const Re=re[k.__cacheKey];Re!==void 0&&(re[k.__cacheKey].usedTimes--,Re.usedTimes===0&&E(L)),k.__cacheKey=ce,k.__webglTexture=re[ce].texture}return Z}function se(k,L,Z){let ue=i.TEXTURE_2D;(L.isDataArrayTexture||L.isCompressedArrayTexture)&&(ue=i.TEXTURE_2D_ARRAY),L.isData3DTexture&&(ue=i.TEXTURE_3D);const re=$(k,L),ce=L.source;t.bindTexture(ue,k.__webglTexture,i.TEXTURE0+Z);const Re=n.get(ce);if(ce.version!==Re.__version||re===!0){t.activeTexture(i.TEXTURE0+Z);const be=gt.getPrimaries(gt.workingColorSpace),Ee=L.colorSpace===Xn?null:gt.getPrimaries(L.colorSpace),He=L.colorSpace===Xn||be===Ee?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,L.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,L.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,He);const Xe=v(L)&&x(L.image)===!1;let ae=w(L.image,Xe,!1,s.maxTextureSize);ae=ze(L,ae);const rt=x(ae)||l,et=r.convert(L.format,L.colorSpace);let $e=r.convert(L.type),Ie=S(L.internalFormat,et,$e,L.colorSpace,L.isVideoTexture);he(ue,L,rt);let Me;const Ze=L.mipmaps,V=l&&L.isVideoTexture!==!0&&Ie!==Yg,pe=Re.__version===void 0||re===!0,ye=ce.dataReady,De=C(L,ae,rt);if(L.isDepthTexture)Ie=i.DEPTH_COMPONENT,l?L.type===wt?Ie=i.DEPTH_COMPONENT32F:L.type===Un?Ie=i.DEPTH_COMPONENT24:L.type===Ns?Ie=i.DEPTH24_STENCIL8:Ie=i.DEPTH_COMPONENT16:L.type===wt&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),L.format===Us&&Ie===i.DEPTH_COMPONENT&&L.type!==Xl&&L.type!==Un&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),L.type=Un,$e=r.convert(L.type)),L.format===zr&&Ie===i.DEPTH_COMPONENT&&(Ie=i.DEPTH_STENCIL,L.type!==Ns&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),L.type=Ns,$e=r.convert(L.type))),pe&&(V?t.texStorage2D(i.TEXTURE_2D,1,Ie,ae.width,ae.height):t.texImage2D(i.TEXTURE_2D,0,Ie,ae.width,ae.height,0,et,$e,null));else if(L.isDataTexture)if(Ze.length>0&&rt){V&&pe&&t.texStorage2D(i.TEXTURE_2D,De,Ie,Ze[0].width,Ze[0].height);for(let O=0,oe=Ze.length;O<oe;O++)Me=Ze[O],V?ye&&t.texSubImage2D(i.TEXTURE_2D,O,0,0,Me.width,Me.height,et,$e,Me.data):t.texImage2D(i.TEXTURE_2D,O,Ie,Me.width,Me.height,0,et,$e,Me.data);L.generateMipmaps=!1}else V?(pe&&t.texStorage2D(i.TEXTURE_2D,De,Ie,ae.width,ae.height),ye&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ae.width,ae.height,et,$e,ae.data)):t.texImage2D(i.TEXTURE_2D,0,Ie,ae.width,ae.height,0,et,$e,ae.data);else if(L.isCompressedTexture)if(L.isCompressedArrayTexture){V&&pe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,De,Ie,Ze[0].width,Ze[0].height,ae.depth);for(let O=0,oe=Ze.length;O<oe;O++)Me=Ze[O],L.format!==Yt?et!==null?V?ye&&t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,O,0,0,0,Me.width,Me.height,ae.depth,et,Me.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,O,Ie,Me.width,Me.height,ae.depth,0,Me.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):V?ye&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,O,0,0,0,Me.width,Me.height,ae.depth,et,$e,Me.data):t.texImage3D(i.TEXTURE_2D_ARRAY,O,Ie,Me.width,Me.height,ae.depth,0,et,$e,Me.data)}else{V&&pe&&t.texStorage2D(i.TEXTURE_2D,De,Ie,Ze[0].width,Ze[0].height);for(let O=0,oe=Ze.length;O<oe;O++)Me=Ze[O],L.format!==Yt?et!==null?V?ye&&t.compressedTexSubImage2D(i.TEXTURE_2D,O,0,0,Me.width,Me.height,et,Me.data):t.compressedTexImage2D(i.TEXTURE_2D,O,Ie,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):V?ye&&t.texSubImage2D(i.TEXTURE_2D,O,0,0,Me.width,Me.height,et,$e,Me.data):t.texImage2D(i.TEXTURE_2D,O,Ie,Me.width,Me.height,0,et,$e,Me.data)}else if(L.isDataArrayTexture)V?(pe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,De,Ie,ae.width,ae.height,ae.depth),ye&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,et,$e,ae.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ie,ae.width,ae.height,ae.depth,0,et,$e,ae.data);else if(L.isData3DTexture)V?(pe&&t.texStorage3D(i.TEXTURE_3D,De,Ie,ae.width,ae.height,ae.depth),ye&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,et,$e,ae.data)):t.texImage3D(i.TEXTURE_3D,0,Ie,ae.width,ae.height,ae.depth,0,et,$e,ae.data);else if(L.isFramebufferTexture){if(pe)if(V)t.texStorage2D(i.TEXTURE_2D,De,Ie,ae.width,ae.height);else{let O=ae.width,oe=ae.height;for(let le=0;le<De;le++)t.texImage2D(i.TEXTURE_2D,le,Ie,O,oe,0,et,$e,null),O>>=1,oe>>=1}}else if(Ze.length>0&&rt){V&&pe&&t.texStorage2D(i.TEXTURE_2D,De,Ie,Ze[0].width,Ze[0].height);for(let O=0,oe=Ze.length;O<oe;O++)Me=Ze[O],V?ye&&t.texSubImage2D(i.TEXTURE_2D,O,0,0,et,$e,Me):t.texImage2D(i.TEXTURE_2D,O,Ie,et,$e,Me);L.generateMipmaps=!1}else V?(pe&&t.texStorage2D(i.TEXTURE_2D,De,Ie,ae.width,ae.height),ye&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,et,$e,ae)):t.texImage2D(i.TEXTURE_2D,0,Ie,et,$e,ae);M(L,rt)&&y(ue),Re.__version=ce.version,L.onUpdate&&L.onUpdate(L)}k.__version=L.version}function xe(k,L,Z){if(L.image.length!==6)return;const ue=$(k,L),re=L.source;t.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+Z);const ce=n.get(re);if(re.version!==ce.__version||ue===!0){t.activeTexture(i.TEXTURE0+Z);const Re=gt.getPrimaries(gt.workingColorSpace),be=L.colorSpace===Xn?null:gt.getPrimaries(L.colorSpace),Ee=L.colorSpace===Xn||Re===be?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,L.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,L.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);const He=L.isCompressedTexture||L.image[0].isCompressedTexture,Xe=L.image[0]&&L.image[0].isDataTexture,ae=[];for(let O=0;O<6;O++)!He&&!Xe?ae[O]=w(L.image[O],!1,!0,s.maxCubemapSize):ae[O]=Xe?L.image[O].image:L.image[O],ae[O]=ze(L,ae[O]);const rt=ae[0],et=x(rt)||l,$e=r.convert(L.format,L.colorSpace),Ie=r.convert(L.type),Me=S(L.internalFormat,$e,Ie,L.colorSpace),Ze=l&&L.isVideoTexture!==!0,V=ce.__version===void 0||ue===!0,pe=re.dataReady;let ye=C(L,rt,et);he(i.TEXTURE_CUBE_MAP,L,et);let De;if(He){Ze&&V&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ye,Me,rt.width,rt.height);for(let O=0;O<6;O++){De=ae[O].mipmaps;for(let oe=0;oe<De.length;oe++){const le=De[oe];L.format!==Yt?$e!==null?Ze?pe&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,oe,0,0,le.width,le.height,$e,le.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,oe,Me,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ze?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,oe,0,0,le.width,le.height,$e,Ie,le.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,oe,Me,le.width,le.height,0,$e,Ie,le.data)}}}else{De=L.mipmaps,Ze&&V&&(De.length>0&&ye++,t.texStorage2D(i.TEXTURE_CUBE_MAP,ye,Me,ae[0].width,ae[0].height));for(let O=0;O<6;O++)if(Xe){Ze?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,0,0,ae[O].width,ae[O].height,$e,Ie,ae[O].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,Me,ae[O].width,ae[O].height,0,$e,Ie,ae[O].data);for(let oe=0;oe<De.length;oe++){const Te=De[oe].image[O].image;Ze?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,oe+1,0,0,Te.width,Te.height,$e,Ie,Te.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,oe+1,Me,Te.width,Te.height,0,$e,Ie,Te.data)}}else{Ze?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,0,0,$e,Ie,ae[O]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,Me,$e,Ie,ae[O]);for(let oe=0;oe<De.length;oe++){const le=De[oe];Ze?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,oe+1,0,0,$e,Ie,le.image[O]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,oe+1,Me,$e,Ie,le.image[O])}}}M(L,et)&&y(i.TEXTURE_CUBE_MAP),ce.__version=re.version,L.onUpdate&&L.onUpdate(L)}k.__version=L.version}function we(k,L,Z,ue,re,ce){const Re=r.convert(Z.format,Z.colorSpace),be=r.convert(Z.type),Ee=S(Z.internalFormat,Re,be,Z.colorSpace);if(!n.get(L).__hasExternalTextures){const Xe=Math.max(1,L.width>>ce),ae=Math.max(1,L.height>>ce);re===i.TEXTURE_3D||re===i.TEXTURE_2D_ARRAY?t.texImage3D(re,ce,Ee,Xe,ae,L.depth,0,Re,be,null):t.texImage2D(re,ce,Ee,Xe,ae,0,Re,be,null)}t.bindFramebuffer(i.FRAMEBUFFER,k),Ce(L)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ue,re,n.get(Z).__webglTexture,0,Ve(L)):(re===i.TEXTURE_2D||re>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ue,re,n.get(Z).__webglTexture,ce),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ae(k,L,Z){if(i.bindRenderbuffer(i.RENDERBUFFER,k),L.depthBuffer&&!L.stencilBuffer){let ue=l===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(Z||Ce(L)){const re=L.depthTexture;re&&re.isDepthTexture&&(re.type===wt?ue=i.DEPTH_COMPONENT32F:re.type===Un&&(ue=i.DEPTH_COMPONENT24));const ce=Ve(L);Ce(L)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ce,ue,L.width,L.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,ce,ue,L.width,L.height)}else i.renderbufferStorage(i.RENDERBUFFER,ue,L.width,L.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,k)}else if(L.depthBuffer&&L.stencilBuffer){const ue=Ve(L);Z&&Ce(L)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ue,i.DEPTH24_STENCIL8,L.width,L.height):Ce(L)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ue,i.DEPTH24_STENCIL8,L.width,L.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,k)}else{const ue=L.isWebGLMultipleRenderTargets===!0?L.texture:[L.texture];for(let re=0;re<ue.length;re++){const ce=ue[re],Re=r.convert(ce.format,ce.colorSpace),be=r.convert(ce.type),Ee=S(ce.internalFormat,Re,be,ce.colorSpace),He=Ve(L);Z&&Ce(L)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,He,Ee,L.width,L.height):Ce(L)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,He,Ee,L.width,L.height):i.renderbufferStorage(i.RENDERBUFFER,Ee,L.width,L.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function _e(k,L){if(L&&L.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,k),!(L.depthTexture&&L.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(L.depthTexture).__webglTexture||L.depthTexture.image.width!==L.width||L.depthTexture.image.height!==L.height)&&(L.depthTexture.image.width=L.width,L.depthTexture.image.height=L.height,L.depthTexture.needsUpdate=!0),G(L.depthTexture,0);const ue=n.get(L.depthTexture).__webglTexture,re=Ve(L);if(L.depthTexture.format===Us)Ce(L)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ue,0,re):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ue,0);else if(L.depthTexture.format===zr)Ce(L)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ue,0,re):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ue,0);else throw new Error("Unknown depthTexture format")}function ke(k){const L=n.get(k),Z=k.isWebGLCubeRenderTarget===!0;if(k.depthTexture&&!L.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");_e(L.__webglFramebuffer,k)}else if(Z){L.__webglDepthbuffer=[];for(let ue=0;ue<6;ue++)t.bindFramebuffer(i.FRAMEBUFFER,L.__webglFramebuffer[ue]),L.__webglDepthbuffer[ue]=i.createRenderbuffer(),Ae(L.__webglDepthbuffer[ue],k,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,L.__webglFramebuffer),L.__webglDepthbuffer=i.createRenderbuffer(),Ae(L.__webglDepthbuffer,k,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ue(k,L,Z){const ue=n.get(k);L!==void 0&&we(ue.__webglFramebuffer,k,k.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Z!==void 0&&ke(k)}function j(k){const L=k.texture,Z=n.get(k),ue=n.get(L);k.addEventListener("dispose",I),k.isWebGLMultipleRenderTargets!==!0&&(ue.__webglTexture===void 0&&(ue.__webglTexture=i.createTexture()),ue.__version=L.version,o.memory.textures++);const re=k.isWebGLCubeRenderTarget===!0,ce=k.isWebGLMultipleRenderTargets===!0,Re=x(k)||l;if(re){Z.__webglFramebuffer=[];for(let be=0;be<6;be++)if(l&&L.mipmaps&&L.mipmaps.length>0){Z.__webglFramebuffer[be]=[];for(let Ee=0;Ee<L.mipmaps.length;Ee++)Z.__webglFramebuffer[be][Ee]=i.createFramebuffer()}else Z.__webglFramebuffer[be]=i.createFramebuffer()}else{if(l&&L.mipmaps&&L.mipmaps.length>0){Z.__webglFramebuffer=[];for(let be=0;be<L.mipmaps.length;be++)Z.__webglFramebuffer[be]=i.createFramebuffer()}else Z.__webglFramebuffer=i.createFramebuffer();if(ce)if(s.drawBuffers){const be=k.texture;for(let Ee=0,He=be.length;Ee<He;Ee++){const Xe=n.get(be[Ee]);Xe.__webglTexture===void 0&&(Xe.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(l&&k.samples>0&&Ce(k)===!1){const be=ce?L:[L];Z.__webglMultisampledFramebuffer=i.createFramebuffer(),Z.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let Ee=0;Ee<be.length;Ee++){const He=be[Ee];Z.__webglColorRenderbuffer[Ee]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Z.__webglColorRenderbuffer[Ee]);const Xe=r.convert(He.format,He.colorSpace),ae=r.convert(He.type),rt=S(He.internalFormat,Xe,ae,He.colorSpace,k.isXRRenderTarget===!0),et=Ve(k);i.renderbufferStorageMultisample(i.RENDERBUFFER,et,rt,k.width,k.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.RENDERBUFFER,Z.__webglColorRenderbuffer[Ee])}i.bindRenderbuffer(i.RENDERBUFFER,null),k.depthBuffer&&(Z.__webglDepthRenderbuffer=i.createRenderbuffer(),Ae(Z.__webglDepthRenderbuffer,k,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(re){t.bindTexture(i.TEXTURE_CUBE_MAP,ue.__webglTexture),he(i.TEXTURE_CUBE_MAP,L,Re);for(let be=0;be<6;be++)if(l&&L.mipmaps&&L.mipmaps.length>0)for(let Ee=0;Ee<L.mipmaps.length;Ee++)we(Z.__webglFramebuffer[be][Ee],k,L,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ee);else we(Z.__webglFramebuffer[be],k,L,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+be,0);M(L,Re)&&y(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ce){const be=k.texture;for(let Ee=0,He=be.length;Ee<He;Ee++){const Xe=be[Ee],ae=n.get(Xe);t.bindTexture(i.TEXTURE_2D,ae.__webglTexture),he(i.TEXTURE_2D,Xe,Re),we(Z.__webglFramebuffer,k,Xe,i.COLOR_ATTACHMENT0+Ee,i.TEXTURE_2D,0),M(Xe,Re)&&y(i.TEXTURE_2D)}t.unbindTexture()}else{let be=i.TEXTURE_2D;if((k.isWebGL3DRenderTarget||k.isWebGLArrayRenderTarget)&&(l?be=k.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(be,ue.__webglTexture),he(be,L,Re),l&&L.mipmaps&&L.mipmaps.length>0)for(let Ee=0;Ee<L.mipmaps.length;Ee++)we(Z.__webglFramebuffer[Ee],k,L,i.COLOR_ATTACHMENT0,be,Ee);else we(Z.__webglFramebuffer,k,L,i.COLOR_ATTACHMENT0,be,0);M(L,Re)&&y(be),t.unbindTexture()}k.depthBuffer&&ke(k)}function Ct(k){const L=x(k)||l,Z=k.isWebGLMultipleRenderTargets===!0?k.texture:[k.texture];for(let ue=0,re=Z.length;ue<re;ue++){const ce=Z[ue];if(M(ce,L)){const Re=k.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,be=n.get(ce).__webglTexture;t.bindTexture(Re,be),y(Re),t.unbindTexture()}}}function Pe(k){if(l&&k.samples>0&&Ce(k)===!1){const L=k.isWebGLMultipleRenderTargets?k.texture:[k.texture],Z=k.width,ue=k.height;let re=i.COLOR_BUFFER_BIT;const ce=[],Re=k.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,be=n.get(k),Ee=k.isWebGLMultipleRenderTargets===!0;if(Ee)for(let He=0;He<L.length;He++)t.bindFramebuffer(i.FRAMEBUFFER,be.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+He,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,be.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+He,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let He=0;He<L.length;He++){ce.push(i.COLOR_ATTACHMENT0+He),k.depthBuffer&&ce.push(Re);const Xe=be.__ignoreDepthValues!==void 0?be.__ignoreDepthValues:!1;if(Xe===!1&&(k.depthBuffer&&(re|=i.DEPTH_BUFFER_BIT),k.stencilBuffer&&(re|=i.STENCIL_BUFFER_BIT)),Ee&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,be.__webglColorRenderbuffer[He]),Xe===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Re]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Re])),Ee){const ae=n.get(L[He]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ae,0)}i.blitFramebuffer(0,0,Z,ue,0,0,Z,ue,re,i.NEAREST),u&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ce)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Ee)for(let He=0;He<L.length;He++){t.bindFramebuffer(i.FRAMEBUFFER,be.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+He,i.RENDERBUFFER,be.__webglColorRenderbuffer[He]);const Xe=n.get(L[He]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,be.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+He,i.TEXTURE_2D,Xe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}}function Ve(k){return Math.min(s.maxSamples,k.samples)}function Ce(k){const L=n.get(k);return l&&k.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&L.__useRenderToTexture!==!1}function ut(k){const L=o.render.frame;d.get(k)!==L&&(d.set(k,L),k.update())}function ze(k,L){const Z=k.colorSpace,ue=k.format,re=k.type;return k.isCompressedTexture===!0||k.isVideoTexture===!0||k.format===$u||Z!==ln&&Z!==Xn&&(gt.getTransfer(Z)===Lt?l===!1?e.has("EXT_sRGB")===!0&&ue===Yt?(k.format=$u,k.minFilter=bt,k.generateMipmaps=!1):L=n0.sRGBToLinear(L):(ue!==Yt||re!==mi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),L}this.allocateTextureUnit=U,this.resetTextureUnits=W,this.setTexture2D=G,this.setTexture2DArray=X,this.setTexture3D=Q,this.setTextureCube=Y,this.rebindTextures=Ue,this.setupRenderTarget=j,this.updateRenderTargetMipmap=Ct,this.updateMultisampleRenderTarget=Pe,this.setupDepthRenderbuffer=ke,this.setupFrameBufferTexture=we,this.useMultisampledRTT=Ce}function FT(i,e,t){const n=t.isWebGL2;function s(r,o=Xn){let l;const c=gt.getTransfer(o);if(r===mi)return i.UNSIGNED_BYTE;if(r===Xg)return i.UNSIGNED_SHORT_4_4_4_4;if(r===jg)return i.UNSIGNED_SHORT_5_5_5_1;if(r===Wu)return i.BYTE;if(r===Wg)return i.SHORT;if(r===Xl)return i.UNSIGNED_SHORT;if(r===Wo)return i.INT;if(r===Un)return i.UNSIGNED_INT;if(r===wt)return i.FLOAT;if(r===Yn)return n?i.HALF_FLOAT:(l=e.get("OES_texture_half_float"),l!==null?l.HALF_FLOAT_OES:null);if(r===iy)return i.ALPHA;if(r===Yt)return i.RGBA;if(r===sy)return i.LUMINANCE;if(r===ry)return i.LUMINANCE_ALPHA;if(r===Us)return i.DEPTH_COMPONENT;if(r===zr)return i.DEPTH_STENCIL;if(r===$u)return l=e.get("EXT_sRGB"),l!==null?l.SRGB_ALPHA_EXT:null;if(r===$g)return i.RED;if(r===Rh)return i.RED_INTEGER;if(r===qg)return i.RG;if(r===jl)return i.RG_INTEGER;if(r===Zo)return i.RGBA_INTEGER;if(r===Ic||r===Dc||r===Nc||r===Uc)if(c===Lt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===Ic)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Dc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Nc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Uc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===Ic)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Dc)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Nc)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Uc)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Ap||r===Cp||r===Pp||r===Rp)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===Ap)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Cp)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Pp)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Rp)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Yg)return l=e.get("WEBGL_compressed_texture_etc1"),l!==null?l.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Lp||r===Ip)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===Lp)return c===Lt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===Ip)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Dp||r===Np||r===Up||r===kp||r===Fp||r===Op||r===Bp||r===Vp||r===zp||r===Hp||r===Gp||r===Wp||r===Xp||r===jp)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===Dp)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Np)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Up)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===kp)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Fp)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Op)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Bp)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Vp)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===zp)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Hp)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Gp)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Wp)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Xp)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===jp)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===kc||r===$p||r===qp)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===kc)return c===Lt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===$p)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===qp)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===oy||r===Yp||r===Kp||r===Zp)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===kc)return l.COMPRESSED_RED_RGTC1_EXT;if(r===Yp)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Kp)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Zp)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ns?n?i.UNSIGNED_INT_24_8:(l=e.get("WEBGL_depth_texture"),l!==null?l.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}class OT extends yn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ls extends vt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const BT={type:"move"};class ou{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ls,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ls,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ls,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const l=this._targetRay,c=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const w of e.hand.values()){const x=t.getJointPose(w,n),v=this._getHandJoint(u,w);x!==null&&(v.matrix.fromArray(x.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=x.radius),v.visible=x!==null}const d=u.joints["index-finger-tip"],p=u.joints["thumb-tip"],m=d.position.distanceTo(p.position),g=.02,b=.005;u.inputState.pinching&&m>g+b?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&m<=g-b&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));l!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(BT)))}return l!==null&&(l.visible=s!==null),c!==null&&(c.visible=r!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ls;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const VT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,zT=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class HT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new Zt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}render(e,t){if(this.texture!==null){if(this.mesh===null){const n=t.cameras[0].viewport,s=new nn({extensions:{fragDepth:!0},vertexShader:VT,fragmentShader:zT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new fe(new Bn(20,20),s)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class GT extends Hs{constructor(e,t){super();const n=this;let s=null,r=1,o=null,l="local-floor",c=1,u=null,d=null,p=null,m=null,g=null,b=null;const w=new HT,x=t.getContextAttributes();let v=null,M=null;const y=[],S=[],C=new Le;let P=null;const T=new yn;T.layers.enable(1),T.viewport=new yt;const I=new yn;I.layers.enable(2),I.viewport=new yt;const F=[T,I],E=new OT;E.layers.enable(1),E.layers.enable(2);let R=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let se=y[$];return se===void 0&&(se=new ou,y[$]=se),se.getTargetRaySpace()},this.getControllerGrip=function($){let se=y[$];return se===void 0&&(se=new ou,y[$]=se),se.getGripSpace()},this.getHand=function($){let se=y[$];return se===void 0&&(se=new ou,y[$]=se),se.getHandSpace()};function W($){const se=S.indexOf($.inputSource);if(se===-1)return;const xe=y[se];xe!==void 0&&(xe.update($.inputSource,$.frame,u||o),xe.dispatchEvent({type:$.type,data:$.inputSource}))}function U(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",U),s.removeEventListener("inputsourceschange",H);for(let $=0;$<y.length;$++){const se=S[$];se!==null&&(S[$]=null,y[$].disconnect(se))}R=null,B=null,w.reset(),e.setRenderTarget(v),g=null,m=null,p=null,s=null,M=null,he.stop(),n.isPresenting=!1,e.setPixelRatio(P),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){l=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function($){u=$},this.getBaseLayer=function(){return m!==null?m:g},this.getBinding=function(){return p},this.getFrame=function(){return b},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(v=e.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",U),s.addEventListener("inputsourceschange",H),x.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(C),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const se={antialias:s.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};g=new XRWebGLLayer(s,t,se),s.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),M=new Ln(g.framebufferWidth,g.framebufferHeight,{format:Yt,type:mi,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let se=null,xe=null,we=null;x.depth&&(we=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,se=x.stencil?zr:Us,xe=x.stencil?Ns:Un);const Ae={colorFormat:t.RGBA8,depthFormat:we,scaleFactor:r};p=new XRWebGLBinding(s,t),m=p.createProjectionLayer(Ae),s.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),M=new Ln(m.textureWidth,m.textureHeight,{format:Yt,type:mi,depthTexture:new d0(m.textureWidth,m.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});const _e=e.properties.get(M);_e.__ignoreDepthValues=m.ignoreDepthValues}M.isXRRenderTarget=!0,this.setFoveation(c),u=null,o=await s.requestReferenceSpace(l),he.setContext(s),he.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function H($){for(let se=0;se<$.removed.length;se++){const xe=$.removed[se],we=S.indexOf(xe);we>=0&&(S[we]=null,y[we].disconnect(xe))}for(let se=0;se<$.added.length;se++){const xe=$.added[se];let we=S.indexOf(xe);if(we===-1){for(let _e=0;_e<y.length;_e++)if(_e>=S.length){S.push(xe),we=_e;break}else if(S[_e]===null){S[_e]=xe,we=_e;break}if(we===-1)break}const Ae=y[we];Ae&&Ae.connect(xe)}}const G=new D,X=new D;function Q($,se,xe){G.setFromMatrixPosition(se.matrixWorld),X.setFromMatrixPosition(xe.matrixWorld);const we=G.distanceTo(X),Ae=se.projectionMatrix.elements,_e=xe.projectionMatrix.elements,ke=Ae[14]/(Ae[10]-1),Ue=Ae[14]/(Ae[10]+1),j=(Ae[9]+1)/Ae[5],Ct=(Ae[9]-1)/Ae[5],Pe=(Ae[8]-1)/Ae[0],Ve=(_e[8]+1)/_e[0],Ce=ke*Pe,ut=ke*Ve,ze=we/(-Pe+Ve),k=ze*-Pe;se.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(k),$.translateZ(ze),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert();const L=ke+ze,Z=Ue+ze,ue=Ce-k,re=ut+(we-k),ce=j*Ue/Z*L,Re=Ct*Ue/Z*L;$.projectionMatrix.makePerspective(ue,re,ce,Re,L,Z),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}function Y($,se){se===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(se.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;w.texture!==null&&($.near=w.depthNear,$.far=w.depthFar),E.near=I.near=T.near=$.near,E.far=I.far=T.far=$.far,(R!==E.near||B!==E.far)&&(s.updateRenderState({depthNear:E.near,depthFar:E.far}),R=E.near,B=E.far,T.near=R,T.far=B,I.near=R,I.far=B,T.updateProjectionMatrix(),I.updateProjectionMatrix(),$.updateProjectionMatrix());const se=$.parent,xe=E.cameras;Y(E,se);for(let we=0;we<xe.length;we++)Y(xe[we],se);xe.length===2?Q(E,T,I):E.projectionMatrix.copy(T.projectionMatrix),ie($,E,se)};function ie($,se,xe){xe===null?$.matrix.copy(se.matrixWorld):($.matrix.copy(xe.matrixWorld),$.matrix.invert(),$.matrix.multiply(se.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(se.projectionMatrix),$.projectionMatrixInverse.copy(se.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Gr*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(m===null&&g===null))return c},this.setFoveation=function($){c=$,m!==null&&(m.fixedFoveation=$),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=$)},this.hasDepthSensing=function(){return w.texture!==null};let ne=null;function me($,se){if(d=se.getViewerPose(u||o),b=se,d!==null){const xe=d.views;g!==null&&(e.setRenderTargetFramebuffer(M,g.framebuffer),e.setRenderTarget(M));let we=!1;xe.length!==E.cameras.length&&(E.cameras.length=0,we=!0);for(let _e=0;_e<xe.length;_e++){const ke=xe[_e];let Ue=null;if(g!==null)Ue=g.getViewport(ke);else{const Ct=p.getViewSubImage(m,ke);Ue=Ct.viewport,_e===0&&(e.setRenderTargetTextures(M,Ct.colorTexture,m.ignoreDepthValues?void 0:Ct.depthStencilTexture),e.setRenderTarget(M))}let j=F[_e];j===void 0&&(j=new yn,j.layers.enable(_e),j.viewport=new yt,F[_e]=j),j.matrix.fromArray(ke.transform.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale),j.projectionMatrix.fromArray(ke.projectionMatrix),j.projectionMatrixInverse.copy(j.projectionMatrix).invert(),j.viewport.set(Ue.x,Ue.y,Ue.width,Ue.height),_e===0&&(E.matrix.copy(j.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),we===!0&&E.cameras.push(j)}const Ae=s.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")){const _e=p.getDepthInformation(xe[0]);_e&&_e.isValid&&_e.texture&&w.init(e,_e,s.renderState)}}for(let xe=0;xe<y.length;xe++){const we=S[xe],Ae=y[xe];we!==null&&Ae!==void 0&&Ae.update(we,se,u||o)}w.render(e,E),ne&&ne($,se),se.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:se}),b=null}const he=new h0;he.setAnimationLoop(me),this.setAnimationLoop=function($){ne=$},this.dispose=function(){}}}function WT(i,e){function t(x,v){x.matrixAutoUpdate===!0&&x.updateMatrix(),v.value.copy(x.matrix)}function n(x,v){v.color.getRGB(x.fogColor.value,l0(i)),v.isFog?(x.fogNear.value=v.near,x.fogFar.value=v.far):v.isFogExp2&&(x.fogDensity.value=v.density)}function s(x,v,M,y,S){v.isMeshBasicMaterial||v.isMeshLambertMaterial?r(x,v):v.isMeshToonMaterial?(r(x,v),p(x,v)):v.isMeshPhongMaterial?(r(x,v),d(x,v)):v.isMeshStandardMaterial?(r(x,v),m(x,v),v.isMeshPhysicalMaterial&&g(x,v,S)):v.isMeshMatcapMaterial?(r(x,v),b(x,v)):v.isMeshDepthMaterial?r(x,v):v.isMeshDistanceMaterial?(r(x,v),w(x,v)):v.isMeshNormalMaterial?r(x,v):v.isLineBasicMaterial?(o(x,v),v.isLineDashedMaterial&&l(x,v)):v.isPointsMaterial?c(x,v,M,y):v.isSpriteMaterial?u(x,v):v.isShadowMaterial?(x.color.value.copy(v.color),x.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function r(x,v){x.opacity.value=v.opacity,v.color&&x.diffuse.value.copy(v.color),v.emissive&&x.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(x.map.value=v.map,t(v.map,x.mapTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,t(v.alphaMap,x.alphaMapTransform)),v.bumpMap&&(x.bumpMap.value=v.bumpMap,t(v.bumpMap,x.bumpMapTransform),x.bumpScale.value=v.bumpScale,v.side===Tn&&(x.bumpScale.value*=-1)),v.normalMap&&(x.normalMap.value=v.normalMap,t(v.normalMap,x.normalMapTransform),x.normalScale.value.copy(v.normalScale),v.side===Tn&&x.normalScale.value.negate()),v.displacementMap&&(x.displacementMap.value=v.displacementMap,t(v.displacementMap,x.displacementMapTransform),x.displacementScale.value=v.displacementScale,x.displacementBias.value=v.displacementBias),v.emissiveMap&&(x.emissiveMap.value=v.emissiveMap,t(v.emissiveMap,x.emissiveMapTransform)),v.specularMap&&(x.specularMap.value=v.specularMap,t(v.specularMap,x.specularMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest);const M=e.get(v).envMap;if(M&&(x.envMap.value=M,x.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=v.reflectivity,x.ior.value=v.ior,x.refractionRatio.value=v.refractionRatio),v.lightMap){x.lightMap.value=v.lightMap;const y=i._useLegacyLights===!0?Math.PI:1;x.lightMapIntensity.value=v.lightMapIntensity*y,t(v.lightMap,x.lightMapTransform)}v.aoMap&&(x.aoMap.value=v.aoMap,x.aoMapIntensity.value=v.aoMapIntensity,t(v.aoMap,x.aoMapTransform))}function o(x,v){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,v.map&&(x.map.value=v.map,t(v.map,x.mapTransform))}function l(x,v){x.dashSize.value=v.dashSize,x.totalSize.value=v.dashSize+v.gapSize,x.scale.value=v.scale}function c(x,v,M,y){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,x.size.value=v.size*M,x.scale.value=y*.5,v.map&&(x.map.value=v.map,t(v.map,x.uvTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,t(v.alphaMap,x.alphaMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest)}function u(x,v){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,x.rotation.value=v.rotation,v.map&&(x.map.value=v.map,t(v.map,x.mapTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,t(v.alphaMap,x.alphaMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest)}function d(x,v){x.specular.value.copy(v.specular),x.shininess.value=Math.max(v.shininess,1e-4)}function p(x,v){v.gradientMap&&(x.gradientMap.value=v.gradientMap)}function m(x,v){x.metalness.value=v.metalness,v.metalnessMap&&(x.metalnessMap.value=v.metalnessMap,t(v.metalnessMap,x.metalnessMapTransform)),x.roughness.value=v.roughness,v.roughnessMap&&(x.roughnessMap.value=v.roughnessMap,t(v.roughnessMap,x.roughnessMapTransform)),e.get(v).envMap&&(x.envMapIntensity.value=v.envMapIntensity)}function g(x,v,M){x.ior.value=v.ior,v.sheen>0&&(x.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),x.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(x.sheenColorMap.value=v.sheenColorMap,t(v.sheenColorMap,x.sheenColorMapTransform)),v.sheenRoughnessMap&&(x.sheenRoughnessMap.value=v.sheenRoughnessMap,t(v.sheenRoughnessMap,x.sheenRoughnessMapTransform))),v.clearcoat>0&&(x.clearcoat.value=v.clearcoat,x.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(x.clearcoatMap.value=v.clearcoatMap,t(v.clearcoatMap,x.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,t(v.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(x.clearcoatNormalMap.value=v.clearcoatNormalMap,t(v.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Tn&&x.clearcoatNormalScale.value.negate())),v.iridescence>0&&(x.iridescence.value=v.iridescence,x.iridescenceIOR.value=v.iridescenceIOR,x.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(x.iridescenceMap.value=v.iridescenceMap,t(v.iridescenceMap,x.iridescenceMapTransform)),v.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=v.iridescenceThicknessMap,t(v.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),v.transmission>0&&(x.transmission.value=v.transmission,x.transmissionSamplerMap.value=M.texture,x.transmissionSamplerSize.value.set(M.width,M.height),v.transmissionMap&&(x.transmissionMap.value=v.transmissionMap,t(v.transmissionMap,x.transmissionMapTransform)),x.thickness.value=v.thickness,v.thicknessMap&&(x.thicknessMap.value=v.thicknessMap,t(v.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=v.attenuationDistance,x.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(x.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(x.anisotropyMap.value=v.anisotropyMap,t(v.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=v.specularIntensity,x.specularColor.value.copy(v.specularColor),v.specularColorMap&&(x.specularColorMap.value=v.specularColorMap,t(v.specularColorMap,x.specularColorMapTransform)),v.specularIntensityMap&&(x.specularIntensityMap.value=v.specularIntensityMap,t(v.specularIntensityMap,x.specularIntensityMapTransform))}function b(x,v){v.matcap&&(x.matcap.value=v.matcap)}function w(x,v){const M=e.get(v).light;x.referencePosition.value.setFromMatrixPosition(M.matrixWorld),x.nearDistance.value=M.shadow.camera.near,x.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function XT(i,e,t,n){let s={},r={},o=[];const l=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(M,y){const S=y.program;n.uniformBlockBinding(M,S)}function u(M,y){let S=s[M.id];S===void 0&&(b(M),S=d(M),s[M.id]=S,M.addEventListener("dispose",x));const C=y.program;n.updateUBOMapping(M,C);const P=e.render.frame;r[M.id]!==P&&(m(M),r[M.id]=P)}function d(M){const y=p();M.__bindingPointIndex=y;const S=i.createBuffer(),C=M.__size,P=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,C,P),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,S),S}function p(){for(let M=0;M<l;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(M){const y=s[M.id],S=M.uniforms,C=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let P=0,T=S.length;P<T;P++){const I=Array.isArray(S[P])?S[P]:[S[P]];for(let F=0,E=I.length;F<E;F++){const R=I[F];if(g(R,P,F,C)===!0){const B=R.__offset,W=Array.isArray(R.value)?R.value:[R.value];let U=0;for(let H=0;H<W.length;H++){const G=W[H],X=w(G);typeof G=="number"||typeof G=="boolean"?(R.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,B+U,R.__data)):G.isMatrix3?(R.__data[0]=G.elements[0],R.__data[1]=G.elements[1],R.__data[2]=G.elements[2],R.__data[3]=0,R.__data[4]=G.elements[3],R.__data[5]=G.elements[4],R.__data[6]=G.elements[5],R.__data[7]=0,R.__data[8]=G.elements[6],R.__data[9]=G.elements[7],R.__data[10]=G.elements[8],R.__data[11]=0):(G.toArray(R.__data,U),U+=X.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,B,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function g(M,y,S,C){const P=M.value,T=y+"_"+S;if(C[T]===void 0)return typeof P=="number"||typeof P=="boolean"?C[T]=P:C[T]=P.clone(),!0;{const I=C[T];if(typeof P=="number"||typeof P=="boolean"){if(I!==P)return C[T]=P,!0}else if(I.equals(P)===!1)return I.copy(P),!0}return!1}function b(M){const y=M.uniforms;let S=0;const C=16;for(let T=0,I=y.length;T<I;T++){const F=Array.isArray(y[T])?y[T]:[y[T]];for(let E=0,R=F.length;E<R;E++){const B=F[E],W=Array.isArray(B.value)?B.value:[B.value];for(let U=0,H=W.length;U<H;U++){const G=W[U],X=w(G),Q=S%C;Q!==0&&C-Q<X.boundary&&(S+=C-Q),B.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=S,S+=X.storage}}}const P=S%C;return P>0&&(S+=C-P),M.__size=S,M.__cache={},this}function w(M){const y={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(y.boundary=4,y.storage=4):M.isVector2?(y.boundary=8,y.storage=8):M.isVector3||M.isColor?(y.boundary=16,y.storage=12):M.isVector4?(y.boundary=16,y.storage=16):M.isMatrix3?(y.boundary=48,y.storage=48):M.isMatrix4?(y.boundary=64,y.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),y}function x(M){const y=M.target;y.removeEventListener("dispose",x);const S=o.indexOf(y.__bindingPointIndex);o.splice(S,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function v(){for(const M in s)i.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:c,update:u,dispose:v}}class _0{constructor(e={}){const{canvas:t=Dy(),context:n=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:l=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:p=!1}=e;this.isWebGLRenderer=!0;let m;n!==null?m=n.getContextAttributes().alpha:m=o;const g=new Uint32Array(4),b=new Int32Array(4);let w=null,x=null;const v=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Vt,this._useLegacyLights=!1,this.toneMapping=us,this.toneMappingExposure=1;const y=this;let S=!1,C=0,P=0,T=null,I=-1,F=null;const E=new yt,R=new yt;let B=null;const W=new We(0);let U=0,H=t.width,G=t.height,X=1,Q=null,Y=null;const ie=new yt(0,0,H,G),ne=new yt(0,0,H,G);let me=!1;const he=new Nh;let $=!1,se=!1,xe=null;const we=new je,Ae=new Le,_e=new D,ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ue(){return T===null?X:1}let j=n;function Ct(N,K){for(let ee=0;ee<N.length;ee++){const te=N[ee],J=t.getContext(te,K);if(J!==null)return J}return null}try{const N={alpha:!0,depth:s,stencil:r,antialias:l,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:d,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ph}`),t.addEventListener("webglcontextlost",De,!1),t.addEventListener("webglcontextrestored",O,!1),t.addEventListener("webglcontextcreationerror",oe,!1),j===null){const K=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&K.shift(),j=Ct(K,N),j===null)throw Ct(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext!="undefined"&&j instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),j.getShaderPrecisionFormat===void 0&&(j.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(N){throw console.error("THREE.WebGLRenderer: "+N.message),N}let Pe,Ve,Ce,ut,ze,k,L,Z,ue,re,ce,Re,be,Ee,He,Xe,ae,rt,et,$e,Ie,Me,Ze,V;function pe(){Pe=new QE(j),Ve=new jE(j,Pe,e),Pe.init(Ve),Me=new FT(j,Pe,Ve),Ce=new UT(j,Pe,Ve),ut=new tS(j),ze=new yT,k=new kT(j,Pe,Ce,ze,Ve,Me,ut),L=new qE(y),Z=new ZE(y),ue=new cw(j,Ve),Ze=new WE(j,Pe,ue,Ve),re=new JE(j,ue,ut,Ze),ce=new rS(j,re,ue,ut),et=new sS(j,Ve,k),Xe=new $E(ze),Re=new bT(y,L,Z,Pe,Ve,Ze,Xe),be=new WT(y,ze),Ee=new MT,He=new PT(Pe,Ve),rt=new GE(y,L,Z,Ce,ce,m,c),ae=new NT(y,ce,Ve),V=new XT(j,ut,Ve,Ce),$e=new XE(j,Pe,ut,Ve),Ie=new eS(j,Pe,ut,Ve),ut.programs=Re.programs,y.capabilities=Ve,y.extensions=Pe,y.properties=ze,y.renderLists=Ee,y.shadowMap=ae,y.state=Ce,y.info=ut}pe();const ye=new GT(y,j);this.xr=ye,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){const N=Pe.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){const N=Pe.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(N){N!==void 0&&(X=N,this.setSize(H,G,!1))},this.getSize=function(N){return N.set(H,G)},this.setSize=function(N,K,ee=!0){if(ye.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=N,G=K,t.width=Math.floor(N*X),t.height=Math.floor(K*X),ee===!0&&(t.style.width=N+"px",t.style.height=K+"px"),this.setViewport(0,0,N,K)},this.getDrawingBufferSize=function(N){return N.set(H*X,G*X).floor()},this.setDrawingBufferSize=function(N,K,ee){H=N,G=K,X=ee,t.width=Math.floor(N*ee),t.height=Math.floor(K*ee),this.setViewport(0,0,N,K)},this.getCurrentViewport=function(N){return N.copy(E)},this.getViewport=function(N){return N.copy(ie)},this.setViewport=function(N,K,ee,te){N.isVector4?ie.set(N.x,N.y,N.z,N.w):ie.set(N,K,ee,te),Ce.viewport(E.copy(ie).multiplyScalar(X).floor())},this.getScissor=function(N){return N.copy(ne)},this.setScissor=function(N,K,ee,te){N.isVector4?ne.set(N.x,N.y,N.z,N.w):ne.set(N,K,ee,te),Ce.scissor(R.copy(ne).multiplyScalar(X).floor())},this.getScissorTest=function(){return me},this.setScissorTest=function(N){Ce.setScissorTest(me=N)},this.setOpaqueSort=function(N){Q=N},this.setTransparentSort=function(N){Y=N},this.getClearColor=function(N){return N.copy(rt.getClearColor())},this.setClearColor=function(){rt.setClearColor.apply(rt,arguments)},this.getClearAlpha=function(){return rt.getClearAlpha()},this.setClearAlpha=function(){rt.setClearAlpha.apply(rt,arguments)},this.clear=function(N=!0,K=!0,ee=!0){let te=0;if(N){let J=!1;if(T!==null){const Se=T.texture.format;J=Se===Zo||Se===jl||Se===Rh}if(J){const Se=T.texture.type,Ne=Se===mi||Se===Un||Se===Xl||Se===Ns||Se===Xg||Se===jg,Ge=rt.getClearColor(),Be=rt.getClearAlpha(),qe=Ge.r,Ke=Ge.g,Qe=Ge.b;Ne?(g[0]=qe,g[1]=Ke,g[2]=Qe,g[3]=Be,j.clearBufferuiv(j.COLOR,0,g)):(b[0]=qe,b[1]=Ke,b[2]=Qe,b[3]=Be,j.clearBufferiv(j.COLOR,0,b))}else te|=j.COLOR_BUFFER_BIT}K&&(te|=j.DEPTH_BUFFER_BIT),ee&&(te|=j.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),j.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",De,!1),t.removeEventListener("webglcontextrestored",O,!1),t.removeEventListener("webglcontextcreationerror",oe,!1),Ee.dispose(),He.dispose(),ze.dispose(),L.dispose(),Z.dispose(),ce.dispose(),Ze.dispose(),V.dispose(),Re.dispose(),ye.dispose(),ye.removeEventListener("sessionstart",Ht),ye.removeEventListener("sessionend",at),xe&&(xe.dispose(),xe=null),Ot.stop()};function De(N){N.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function O(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const N=ut.autoReset,K=ae.enabled,ee=ae.autoUpdate,te=ae.needsUpdate,J=ae.type;pe(),ut.autoReset=N,ae.enabled=K,ae.autoUpdate=ee,ae.needsUpdate=te,ae.type=J}function oe(N){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function le(N){const K=N.target;K.removeEventListener("dispose",le),Te(K)}function Te(N){Oe(N),ze.remove(N)}function Oe(N){const K=ze.get(N).programs;K!==void 0&&(K.forEach(function(ee){Re.releaseProgram(ee)}),N.isShaderMaterial&&Re.releaseShaderCache(N))}this.renderBufferDirect=function(N,K,ee,te,J,Se){K===null&&(K=ke);const Ne=J.isMesh&&J.matrixWorld.determinant()<0,Ge=nc(N,K,ee,te,J);Ce.setMaterial(te,Ne);let Be=ee.index,qe=1;if(te.wireframe===!0){if(Be=re.getWireframeAttribute(ee),Be===void 0)return;qe=2}const Ke=ee.drawRange,Qe=ee.attributes.position;let Ut=Ke.start*qe,pn=(Ke.start+Ke.count)*qe;Se!==null&&(Ut=Math.max(Ut,Se.start*qe),pn=Math.min(pn,(Se.start+Se.count)*qe)),Be!==null?(Ut=Math.max(Ut,0),pn=Math.min(pn,Be.count)):Qe!=null&&(Ut=Math.max(Ut,0),pn=Math.min(pn,Qe.count));const Gt=pn-Ut;if(Gt<0||Gt===1/0)return;Ze.setup(J,te,Ge,ee,Be);let Vn,Pt=$e;if(Be!==null&&(Vn=ue.get(Be),Pt=Ie,Pt.setIndex(Vn)),J.isMesh)te.wireframe===!0?(Ce.setLineWidth(te.wireframeLinewidth*Ue()),Pt.setMode(j.LINES)):Pt.setMode(j.TRIANGLES);else if(J.isLine){let Je=te.linewidth;Je===void 0&&(Je=1),Ce.setLineWidth(Je*Ue()),J.isLineSegments?Pt.setMode(j.LINES):J.isLineLoop?Pt.setMode(j.LINE_LOOP):Pt.setMode(j.LINE_STRIP)}else J.isPoints?Pt.setMode(j.POINTS):J.isSprite&&Pt.setMode(j.TRIANGLES);if(J.isBatchedMesh)Pt.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else if(J.isInstancedMesh)Pt.renderInstances(Ut,Gt,J.count);else if(ee.isInstancedBufferGeometry){const Je=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,so=Math.min(ee.instanceCount,Je);Pt.renderInstances(Ut,Gt,so)}else Pt.render(Ut,Gt)};function it(N,K,ee){N.transparent===!0&&N.side===wn&&N.forceSinglePass===!1?(N.side=Tn,N.needsUpdate=!0,Gs(N,K,ee),N.side=oi,N.needsUpdate=!0,Gs(N,K,ee),N.side=wn):Gs(N,K,ee)}this.compile=function(N,K,ee=null){ee===null&&(ee=N),x=He.get(ee),x.init(),M.push(x),ee.traverseVisible(function(J){J.isLight&&J.layers.test(K.layers)&&(x.pushLight(J),J.castShadow&&x.pushShadow(J))}),N!==ee&&N.traverseVisible(function(J){J.isLight&&J.layers.test(K.layers)&&(x.pushLight(J),J.castShadow&&x.pushShadow(J))}),x.setupLights(y._useLegacyLights);const te=new Set;return N.traverse(function(J){const Se=J.material;if(Se)if(Array.isArray(Se))for(let Ne=0;Ne<Se.length;Ne++){const Ge=Se[Ne];it(Ge,ee,J),te.add(Ge)}else it(Se,ee,J),te.add(Se)}),M.pop(),x=null,te},this.compileAsync=function(N,K,ee=null){const te=this.compile(N,K,ee);return new Promise(J=>{function Se(){if(te.forEach(function(Ne){ze.get(Ne).currentProgram.isReady()&&te.delete(Ne)}),te.size===0){J(N);return}setTimeout(Se,10)}Pe.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let nt=null;function ht(N){nt&&nt(N)}function Ht(){Ot.stop()}function at(){Ot.start()}const Ot=new h0;Ot.setAnimationLoop(ht),typeof self!="undefined"&&Ot.setContext(self),this.setAnimationLoop=function(N){nt=N,ye.setAnimationLoop(N),N===null?Ot.stop():Ot.start()},ye.addEventListener("sessionstart",Ht),ye.addEventListener("sessionend",at),this.render=function(N,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),ye.enabled===!0&&ye.isPresenting===!0&&(ye.cameraAutoUpdate===!0&&ye.updateCamera(K),K=ye.getCamera()),N.isScene===!0&&N.onBeforeRender(y,N,K,T),x=He.get(N,M.length),x.init(),M.push(x),we.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),he.setFromProjectionMatrix(we),se=this.localClippingEnabled,$=Xe.init(this.clippingPlanes,se),w=Ee.get(N,v.length),w.init(),v.push(w),un(N,K,0,y.sortObjects),w.finish(),y.sortObjects===!0&&w.sort(Q,Y),this.info.render.frame++,$===!0&&Xe.beginShadows();const ee=x.state.shadowsArray;if(ae.render(ee,N,K),$===!0&&Xe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ye.enabled===!1||ye.isPresenting===!1||ye.hasDepthSensing()===!1)&&rt.render(w,N),x.setupLights(y._useLegacyLights),K.isArrayCamera){const te=K.cameras;for(let J=0,Se=te.length;J<Se;J++){const Ne=te[J];ra(w,N,Ne,Ne.viewport)}}else ra(w,N,K);T!==null&&(k.updateMultisampleRenderTarget(T),k.updateRenderTargetMipmap(T)),N.isScene===!0&&N.onAfterRender(y,N,K),Ze.resetDefaultState(),I=-1,F=null,M.pop(),M.length>0?x=M[M.length-1]:x=null,v.pop(),v.length>0?w=v[v.length-1]:w=null};function un(N,K,ee,te){if(N.visible===!1)return;if(N.layers.test(K.layers)){if(N.isGroup)ee=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update(K);else if(N.isLight)x.pushLight(N),N.castShadow&&x.pushShadow(N);else if(N.isSprite){if(!N.frustumCulled||he.intersectsSprite(N)){te&&_e.setFromMatrixPosition(N.matrixWorld).applyMatrix4(we);const Ne=ce.update(N),Ge=N.material;Ge.visible&&w.push(N,Ne,Ge,ee,_e.z,null)}}else if((N.isMesh||N.isLine||N.isPoints)&&(!N.frustumCulled||he.intersectsObject(N))){const Ne=ce.update(N),Ge=N.material;if(te&&(N.boundingSphere!==void 0?(N.boundingSphere===null&&N.computeBoundingSphere(),_e.copy(N.boundingSphere.center)):(Ne.boundingSphere===null&&Ne.computeBoundingSphere(),_e.copy(Ne.boundingSphere.center)),_e.applyMatrix4(N.matrixWorld).applyMatrix4(we)),Array.isArray(Ge)){const Be=Ne.groups;for(let qe=0,Ke=Be.length;qe<Ke;qe++){const Qe=Be[qe],Ut=Ge[Qe.materialIndex];Ut&&Ut.visible&&w.push(N,Ne,Ut,ee,_e.z,Qe)}}else Ge.visible&&w.push(N,Ne,Ge,ee,_e.z,null)}}const Se=N.children;for(let Ne=0,Ge=Se.length;Ne<Ge;Ne++)un(Se[Ne],K,ee,te)}function ra(N,K,ee,te){const J=N.opaque,Se=N.transmissive,Ne=N.transparent;x.setupLightsView(ee),$===!0&&Xe.setGlobalState(y.clippingPlanes,ee),Se.length>0&&tc(J,Se,K,ee),te&&Ce.viewport(E.copy(te)),J.length>0&&Vi(J,K,ee),Se.length>0&&Vi(Se,K,ee),Ne.length>0&&Vi(Ne,K,ee),Ce.buffers.depth.setTest(!0),Ce.buffers.depth.setMask(!0),Ce.buffers.color.setMask(!0),Ce.setPolygonOffset(!1)}function tc(N,K,ee,te){if((ee.isScene===!0?ee.overrideMaterial:null)!==null)return;const Se=Ve.isWebGL2;xe===null&&(xe=new Ln(1,1,{generateMipmaps:!0,type:Pe.has("EXT_color_buffer_half_float")?Yn:mi,minFilter:ki,samples:Se?4:0})),y.getDrawingBufferSize(Ae),Se?xe.setSize(Ae.x,Ae.y):xe.setSize(Ol(Ae.x),Ol(Ae.y));const Ne=y.getRenderTarget();y.setRenderTarget(xe),y.getClearColor(W),U=y.getClearAlpha(),U<1&&y.setClearColor(16777215,.5),y.clear();const Ge=y.toneMapping;y.toneMapping=us,Vi(N,ee,te),k.updateMultisampleRenderTarget(xe),k.updateRenderTargetMipmap(xe);let Be=!1;for(let qe=0,Ke=K.length;qe<Ke;qe++){const Qe=K[qe],Ut=Qe.object,pn=Qe.geometry,Gt=Qe.material,Vn=Qe.group;if(Gt.side===wn&&Ut.layers.test(te.layers)){const Pt=Gt.side;Gt.side=Tn,Gt.needsUpdate=!0,oa(Ut,ee,te,pn,Gt,Vn),Gt.side=Pt,Gt.needsUpdate=!0,Be=!0}}Be===!0&&(k.updateMultisampleRenderTarget(xe),k.updateRenderTargetMipmap(xe)),y.setRenderTarget(Ne),y.setClearColor(W,U),y.toneMapping=Ge}function Vi(N,K,ee){const te=K.isScene===!0?K.overrideMaterial:null;for(let J=0,Se=N.length;J<Se;J++){const Ne=N[J],Ge=Ne.object,Be=Ne.geometry,qe=te===null?Ne.material:te,Ke=Ne.group;Ge.layers.test(ee.layers)&&oa(Ge,K,ee,Be,qe,Ke)}}function oa(N,K,ee,te,J,Se){N.onBeforeRender(y,K,ee,te,J,Se),N.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),J.onBeforeRender(y,K,ee,te,N,Se),J.transparent===!0&&J.side===wn&&J.forceSinglePass===!1?(J.side=Tn,J.needsUpdate=!0,y.renderBufferDirect(ee,K,te,J,N,Se),J.side=oi,J.needsUpdate=!0,y.renderBufferDirect(ee,K,te,J,N,Se),J.side=wn):y.renderBufferDirect(ee,K,te,J,N,Se),N.onAfterRender(y,K,ee,te,J,Se)}function Gs(N,K,ee){K.isScene!==!0&&(K=ke);const te=ze.get(N),J=x.state.lights,Se=x.state.shadowsArray,Ne=J.state.version,Ge=Re.getParameters(N,J.state,Se,K,ee),Be=Re.getProgramCacheKey(Ge);let qe=te.programs;te.environment=N.isMeshStandardMaterial?K.environment:null,te.fog=K.fog,te.envMap=(N.isMeshStandardMaterial?Z:L).get(N.envMap||te.environment),qe===void 0&&(N.addEventListener("dispose",le),qe=new Map,te.programs=qe);let Ke=qe.get(Be);if(Ke!==void 0){if(te.currentProgram===Ke&&te.lightsStateVersion===Ne)return no(N,Ge),Ke}else Ge.uniforms=Re.getUniforms(N),N.onBuild(ee,Ge,y),N.onBeforeCompile(Ge,y),Ke=Re.acquireProgram(Ge,Be),qe.set(Be,Ke),te.uniforms=Ge.uniforms;const Qe=te.uniforms;return(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)&&(Qe.clippingPlanes=Xe.uniform),no(N,Ge),te.needsLights=ic(N),te.lightsStateVersion=Ne,te.needsLights&&(Qe.ambientLightColor.value=J.state.ambient,Qe.lightProbe.value=J.state.probe,Qe.directionalLights.value=J.state.directional,Qe.directionalLightShadows.value=J.state.directionalShadow,Qe.spotLights.value=J.state.spot,Qe.spotLightShadows.value=J.state.spotShadow,Qe.rectAreaLights.value=J.state.rectArea,Qe.ltc_1.value=J.state.rectAreaLTC1,Qe.ltc_2.value=J.state.rectAreaLTC2,Qe.pointLights.value=J.state.point,Qe.pointLightShadows.value=J.state.pointShadow,Qe.hemisphereLights.value=J.state.hemi,Qe.directionalShadowMap.value=J.state.directionalShadowMap,Qe.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Qe.spotShadowMap.value=J.state.spotShadowMap,Qe.spotLightMatrix.value=J.state.spotLightMatrix,Qe.spotLightMap.value=J.state.spotLightMap,Qe.pointShadowMap.value=J.state.pointShadowMap,Qe.pointShadowMatrix.value=J.state.pointShadowMatrix),te.currentProgram=Ke,te.uniformsList=null,Ke}function zi(N){if(N.uniformsList===null){const K=N.currentProgram.getUniforms();N.uniformsList=gl.seqWithValue(K.seq,N.uniforms)}return N.uniformsList}function no(N,K){const ee=ze.get(N);ee.outputColorSpace=K.outputColorSpace,ee.batching=K.batching,ee.instancing=K.instancing,ee.instancingColor=K.instancingColor,ee.skinning=K.skinning,ee.morphTargets=K.morphTargets,ee.morphNormals=K.morphNormals,ee.morphColors=K.morphColors,ee.morphTargetsCount=K.morphTargetsCount,ee.numClippingPlanes=K.numClippingPlanes,ee.numIntersection=K.numClipIntersection,ee.vertexAlphas=K.vertexAlphas,ee.vertexTangents=K.vertexTangents,ee.toneMapping=K.toneMapping}function nc(N,K,ee,te,J){K.isScene!==!0&&(K=ke),k.resetTextureUnits();const Se=K.fog,Ne=te.isMeshStandardMaterial?K.environment:null,Ge=T===null?y.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:ln,Be=(te.isMeshStandardMaterial?Z:L).get(te.envMap||Ne),qe=te.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,Ke=!!ee.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),Qe=!!ee.morphAttributes.position,Ut=!!ee.morphAttributes.normal,pn=!!ee.morphAttributes.color;let Gt=us;te.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Gt=y.toneMapping);const Vn=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,Pt=Vn!==void 0?Vn.length:0,Je=ze.get(te),so=x.state.lights;if($===!0&&(se===!0||N!==F)){const Qt=N===F&&te.id===I;Xe.setState(te,N,Qt)}let Rt=!1;te.version===Je.__version?(Je.needsLights&&Je.lightsStateVersion!==so.state.version||Je.outputColorSpace!==Ge||J.isBatchedMesh&&Je.batching===!1||!J.isBatchedMesh&&Je.batching===!0||J.isInstancedMesh&&Je.instancing===!1||!J.isInstancedMesh&&Je.instancing===!0||J.isSkinnedMesh&&Je.skinning===!1||!J.isSkinnedMesh&&Je.skinning===!0||J.isInstancedMesh&&Je.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&Je.instancingColor===!1&&J.instanceColor!==null||Je.envMap!==Be||te.fog===!0&&Je.fog!==Se||Je.numClippingPlanes!==void 0&&(Je.numClippingPlanes!==Xe.numPlanes||Je.numIntersection!==Xe.numIntersection)||Je.vertexAlphas!==qe||Je.vertexTangents!==Ke||Je.morphTargets!==Qe||Je.morphNormals!==Ut||Je.morphColors!==pn||Je.toneMapping!==Gt||Ve.isWebGL2===!0&&Je.morphTargetsCount!==Pt)&&(Rt=!0):(Rt=!0,Je.__version=te.version);let ui=Je.currentProgram;Rt===!0&&(ui=Gs(te,K,J));let aa=!1,ps=!1,ro=!1;const zt=ui.getUniforms(),on=Je.uniforms;if(Ce.useProgram(ui.program)&&(aa=!0,ps=!0,ro=!0),te.id!==I&&(I=te.id,ps=!0),aa||F!==N){zt.setValue(j,"projectionMatrix",N.projectionMatrix),zt.setValue(j,"viewMatrix",N.matrixWorldInverse);const Qt=zt.map.cameraPosition;Qt!==void 0&&Qt.setValue(j,_e.setFromMatrixPosition(N.matrixWorld)),Ve.logarithmicDepthBuffer&&zt.setValue(j,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&zt.setValue(j,"isOrthographic",N.isOrthographicCamera===!0),F!==N&&(F=N,ps=!0,ro=!0)}if(J.isSkinnedMesh){zt.setOptional(j,J,"bindMatrix"),zt.setOptional(j,J,"bindMatrixInverse");const Qt=J.skeleton;Qt&&(Ve.floatVertexTextures?(Qt.boneTexture===null&&Qt.computeBoneTexture(),zt.setValue(j,"boneTexture",Qt.boneTexture,k)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}J.isBatchedMesh&&(zt.setOptional(j,J,"batchingTexture"),zt.setValue(j,"batchingTexture",J._matricesTexture,k));const bi=ee.morphAttributes;if((bi.position!==void 0||bi.normal!==void 0||bi.color!==void 0&&Ve.isWebGL2===!0)&&et.update(J,ee,ui),(ps||Je.receiveShadow!==J.receiveShadow)&&(Je.receiveShadow=J.receiveShadow,zt.setValue(j,"receiveShadow",J.receiveShadow)),te.isMeshGouraudMaterial&&te.envMap!==null&&(on.envMap.value=Be,on.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),ps&&(zt.setValue(j,"toneMappingExposure",y.toneMappingExposure),Je.needsLights&&io(on,ro),Se&&te.fog===!0&&be.refreshFogUniforms(on,Se),be.refreshMaterialUniforms(on,te,X,G,xe),gl.upload(j,zi(Je),on,k)),te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(gl.upload(j,zi(Je),on,k),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&zt.setValue(j,"center",J.center),zt.setValue(j,"modelViewMatrix",J.modelViewMatrix),zt.setValue(j,"normalMatrix",J.normalMatrix),zt.setValue(j,"modelMatrix",J.matrixWorld),te.isShaderMaterial||te.isRawShaderMaterial){const Qt=te.uniformsGroups;for(let Hi=0,oo=Qt.length;Hi<oo;Hi++)if(Ve.isWebGL2){const la=Qt[Hi];V.update(la,ui),V.bind(la,ui)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ui}function io(N,K){N.ambientLightColor.needsUpdate=K,N.lightProbe.needsUpdate=K,N.directionalLights.needsUpdate=K,N.directionalLightShadows.needsUpdate=K,N.pointLights.needsUpdate=K,N.pointLightShadows.needsUpdate=K,N.spotLights.needsUpdate=K,N.spotLightShadows.needsUpdate=K,N.rectAreaLights.needsUpdate=K,N.hemisphereLights.needsUpdate=K}function ic(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(N,K,ee){ze.get(N.texture).__webglTexture=K,ze.get(N.depthTexture).__webglTexture=ee;const te=ze.get(N);te.__hasExternalTextures=!0,te.__hasExternalTextures&&(te.__autoAllocateDepthBuffer=ee===void 0,te.__autoAllocateDepthBuffer||Pe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),te.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(N,K){const ee=ze.get(N);ee.__webglFramebuffer=K,ee.__useDefaultFramebuffer=K===void 0},this.setRenderTarget=function(N,K=0,ee=0){T=N,C=K,P=ee;let te=!0,J=null,Se=!1,Ne=!1;if(N){const Be=ze.get(N);Be.__useDefaultFramebuffer!==void 0?(Ce.bindFramebuffer(j.FRAMEBUFFER,null),te=!1):Be.__webglFramebuffer===void 0?k.setupRenderTarget(N):Be.__hasExternalTextures&&k.rebindTextures(N,ze.get(N.texture).__webglTexture,ze.get(N.depthTexture).__webglTexture);const qe=N.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(Ne=!0);const Ke=ze.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(Array.isArray(Ke[K])?J=Ke[K][ee]:J=Ke[K],Se=!0):Ve.isWebGL2&&N.samples>0&&k.useMultisampledRTT(N)===!1?J=ze.get(N).__webglMultisampledFramebuffer:Array.isArray(Ke)?J=Ke[ee]:J=Ke,E.copy(N.viewport),R.copy(N.scissor),B=N.scissorTest}else E.copy(ie).multiplyScalar(X).floor(),R.copy(ne).multiplyScalar(X).floor(),B=me;if(Ce.bindFramebuffer(j.FRAMEBUFFER,J)&&Ve.drawBuffers&&te&&Ce.drawBuffers(N,J),Ce.viewport(E),Ce.scissor(R),Ce.setScissorTest(B),Se){const Be=ze.get(N.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+K,Be.__webglTexture,ee)}else if(Ne){const Be=ze.get(N.texture),qe=K||0;j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,Be.__webglTexture,ee||0,qe)}I=-1},this.readRenderTargetPixels=function(N,K,ee,te,J,Se,Ne){if(!(N&&N.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=ze.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Ne!==void 0&&(Ge=Ge[Ne]),Ge){Ce.bindFramebuffer(j.FRAMEBUFFER,Ge);try{const Be=N.texture,qe=Be.format,Ke=Be.type;if(qe!==Yt&&Me.convert(qe)!==j.getParameter(j.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Qe=Ke===Yn&&(Pe.has("EXT_color_buffer_half_float")||Ve.isWebGL2&&Pe.has("EXT_color_buffer_float"));if(Ke!==mi&&Me.convert(Ke)!==j.getParameter(j.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ke===wt&&(Ve.isWebGL2||Pe.has("OES_texture_float")||Pe.has("WEBGL_color_buffer_float")))&&!Qe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=N.width-te&&ee>=0&&ee<=N.height-J&&j.readPixels(K,ee,te,J,Me.convert(qe),Me.convert(Ke),Se)}finally{const Be=T!==null?ze.get(T).__webglFramebuffer:null;Ce.bindFramebuffer(j.FRAMEBUFFER,Be)}}},this.copyFramebufferToTexture=function(N,K,ee=0){const te=Math.pow(2,-ee),J=Math.floor(K.image.width*te),Se=Math.floor(K.image.height*te);k.setTexture2D(K,0),j.copyTexSubImage2D(j.TEXTURE_2D,ee,0,0,N.x,N.y,J,Se),Ce.unbindTexture()},this.copyTextureToTexture=function(N,K,ee,te=0){const J=K.image.width,Se=K.image.height,Ne=Me.convert(ee.format),Ge=Me.convert(ee.type);k.setTexture2D(ee,0),j.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,ee.flipY),j.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ee.premultiplyAlpha),j.pixelStorei(j.UNPACK_ALIGNMENT,ee.unpackAlignment),K.isDataTexture?j.texSubImage2D(j.TEXTURE_2D,te,N.x,N.y,J,Se,Ne,Ge,K.image.data):K.isCompressedTexture?j.compressedTexSubImage2D(j.TEXTURE_2D,te,N.x,N.y,K.mipmaps[0].width,K.mipmaps[0].height,Ne,K.mipmaps[0].data):j.texSubImage2D(j.TEXTURE_2D,te,N.x,N.y,Ne,Ge,K.image),te===0&&ee.generateMipmaps&&j.generateMipmap(j.TEXTURE_2D),Ce.unbindTexture()},this.copyTextureToTexture3D=function(N,K,ee,te,J=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Se=N.max.x-N.min.x+1,Ne=N.max.y-N.min.y+1,Ge=N.max.z-N.min.z+1,Be=Me.convert(te.format),qe=Me.convert(te.type);let Ke;if(te.isData3DTexture)k.setTexture3D(te,0),Ke=j.TEXTURE_3D;else if(te.isDataArrayTexture||te.isCompressedArrayTexture)k.setTexture2DArray(te,0),Ke=j.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}j.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,te.flipY),j.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,te.premultiplyAlpha),j.pixelStorei(j.UNPACK_ALIGNMENT,te.unpackAlignment);const Qe=j.getParameter(j.UNPACK_ROW_LENGTH),Ut=j.getParameter(j.UNPACK_IMAGE_HEIGHT),pn=j.getParameter(j.UNPACK_SKIP_PIXELS),Gt=j.getParameter(j.UNPACK_SKIP_ROWS),Vn=j.getParameter(j.UNPACK_SKIP_IMAGES),Pt=ee.isCompressedTexture?ee.mipmaps[J]:ee.image;j.pixelStorei(j.UNPACK_ROW_LENGTH,Pt.width),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,Pt.height),j.pixelStorei(j.UNPACK_SKIP_PIXELS,N.min.x),j.pixelStorei(j.UNPACK_SKIP_ROWS,N.min.y),j.pixelStorei(j.UNPACK_SKIP_IMAGES,N.min.z),ee.isDataTexture||ee.isData3DTexture?j.texSubImage3D(Ke,J,K.x,K.y,K.z,Se,Ne,Ge,Be,qe,Pt.data):ee.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),j.compressedTexSubImage3D(Ke,J,K.x,K.y,K.z,Se,Ne,Ge,Be,Pt.data)):j.texSubImage3D(Ke,J,K.x,K.y,K.z,Se,Ne,Ge,Be,qe,Pt),j.pixelStorei(j.UNPACK_ROW_LENGTH,Qe),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,Ut),j.pixelStorei(j.UNPACK_SKIP_PIXELS,pn),j.pixelStorei(j.UNPACK_SKIP_ROWS,Gt),j.pixelStorei(j.UNPACK_SKIP_IMAGES,Vn),J===0&&te.generateMipmaps&&j.generateMipmap(Ke),Ce.unbindTexture()},this.initTexture=function(N){N.isCubeTexture?k.setTextureCube(N,0):N.isData3DTexture?k.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?k.setTexture2DArray(N,0):k.setTexture2D(N,0),Ce.unbindTexture()},this.resetState=function(){C=0,P=0,T=null,Ce.reset(),Ze.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Lh?"display-p3":"srgb",t.unpackColorSpace=gt.workingColorSpace===$l?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Vt?ks:Zg}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===ks?Vt:ln}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class jT extends _0{}jT.prototype.isWebGL1Renderer=!0;class x0 extends vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class $T{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ju,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=ri()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Fs("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ri()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ri()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const xn=new D;class kh{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)xn.fromBufferAttribute(this,t),xn.applyMatrix4(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)xn.fromBufferAttribute(this,t),xn.applyNormalMatrix(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)xn.fromBufferAttribute(this,t),xn.transformDirection(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=si(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=_t(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=si(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=si(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=si(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=si(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array),s=_t(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array),s=_t(s,this.array),r=_t(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Dt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new kh(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Wf=new D,Xf=new yt,jf=new yt,qT=new D,$f=new je,Va=new D,au=new li,qf=new je,lu=new Kr;class YT extends fe{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Tp,this.bindMatrix=new je,this.bindMatrixInverse=new je,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Wt),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Va),this.boundingBox.expandByPoint(Va)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new li),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Va),this.boundingSphere.expandByPoint(Va)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),au.copy(this.boundingSphere),au.applyMatrix4(s),e.ray.intersectsSphere(au)!==!1&&(qf.copy(s).invert(),lu.copy(e.ray).applyMatrix4(qf),!(this.boundingBox!==null&&lu.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,lu)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new yt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Tp?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===ny?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,s=this.geometry;Xf.fromBufferAttribute(s.attributes.skinIndex,e),jf.fromBufferAttribute(s.attributes.skinWeight,e),Wf.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=jf.getComponent(r);if(o!==0){const l=Xf.getComponent(r);$f.multiplyMatrices(n.bones[l].matrixWorld,n.boneInverses[l]),t.addScaledVector(qT.copy(Wf).applyMatrix4($f),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class b0 extends vt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Os extends Zt{constructor(e=null,t=1,n=1,s,r,o,l,c,u=mt,d=mt,p,m){super(null,o,l,c,u,d,s,r,p,m),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Yf=new je,KT=new je;class Fh{constructor(e=[],t=[]){this.uuid=ri(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new je)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new je;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const l=e[r]?e[r].matrixWorld:KT;Yf.multiplyMatrices(l,t[r]),Yf.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Fh(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Os(t,e,e,Yt,wt);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new b0),this.bones.push(o),this.boneInverses.push(new je().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const o=t[s];e.bones.push(o.uuid);const l=n[s];e.boneInverses.push(l.toArray())}return e}}class Ku extends Dt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const mr=new je,Kf=new je,za=[],Zf=new Wt,ZT=new je,Mo=new fe,Eo=new li;class QT extends fe{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ku(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,ZT)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Wt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,mr),Zf.copy(e.boundingBox).applyMatrix4(mr),this.boundingBox.union(Zf)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new li),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,mr),Eo.copy(e.boundingSphere).applyMatrix4(mr),this.boundingSphere.union(Eo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,s=this.count;if(Mo.geometry=this.geometry,Mo.material=this.material,Mo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Eo.copy(this.boundingSphere),Eo.applyMatrix4(n),e.ray.intersectsSphere(Eo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,mr),Kf.multiplyMatrices(n,mr),Mo.matrixWorld=Kf,Mo.raycast(e,za);for(let o=0,l=za.length;o<l;o++){const c=za[o];c.instanceId=r,c.object=this,t.push(c)}za.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ku(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Oh extends gi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new We(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Qf=new D,Jf=new D,em=new je,cu=new Kr,Ha=new li;class ii extends vt{constructor(e=new cn,t=new Oh){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Qf.fromBufferAttribute(t,s-1),Jf.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Qf.distanceTo(Jf);e.setAttribute("lineDistance",new At(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ha.copy(n.boundingSphere),Ha.applyMatrix4(s),Ha.radius+=r,e.ray.intersectsSphere(Ha)===!1)return;em.copy(s).invert(),cu.copy(e.ray).applyMatrix4(em);const l=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=l*l,u=new D,d=new D,p=new D,m=new D,g=this.isLineSegments?2:1,b=n.index,x=n.attributes.position;if(b!==null){const v=Math.max(0,o.start),M=Math.min(b.count,o.start+o.count);for(let y=v,S=M-1;y<S;y+=g){const C=b.getX(y),P=b.getX(y+1);if(u.fromBufferAttribute(x,C),d.fromBufferAttribute(x,P),cu.distanceSqToSegment(u,d,m,p)>c)continue;m.applyMatrix4(this.matrixWorld);const I=e.ray.origin.distanceTo(m);I<e.near||I>e.far||t.push({distance:I,point:p.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else{const v=Math.max(0,o.start),M=Math.min(x.count,o.start+o.count);for(let y=v,S=M-1;y<S;y+=g){if(u.fromBufferAttribute(x,y),d.fromBufferAttribute(x,y+1),cu.distanceSqToSegment(u,d,m,p)>c)continue;m.applyMatrix4(this.matrixWorld);const P=e.ray.origin.distanceTo(m);P<e.near||P>e.far||t.push({distance:P,point:p.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}}const tm=new D,nm=new D;class JT extends ii{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)tm.fromBufferAttribute(t,s),nm.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+tm.distanceTo(nm);e.setAttribute("lineDistance",new At(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class e1 extends ii{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class y0 extends gi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new We(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const im=new je,Zu=new Kr,Ga=new li,Wa=new D;class t1 extends vt{constructor(e=new cn,t=new y0){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ga.copy(n.boundingSphere),Ga.applyMatrix4(s),Ga.radius+=r,e.ray.intersectsSphere(Ga)===!1)return;im.copy(s).invert(),Zu.copy(e.ray).applyMatrix4(im);const l=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=l*l,u=n.index,p=n.attributes.position;if(u!==null){const m=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let b=m,w=g;b<w;b++){const x=u.getX(b);Wa.fromBufferAttribute(p,x),sm(Wa,x,c,s,e,t,this)}}else{const m=Math.max(0,o.start),g=Math.min(p.count,o.start+o.count);for(let b=m,w=g;b<w;b++)Wa.fromBufferAttribute(p,b),sm(Wa,b,c,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}}function sm(i,e,t,n,s,r,o){const l=Zu.distanceSqToPoint(i);if(l<t){const c=new D;Zu.closestPointToPoint(i,c),c.applyMatrix4(n);const u=s.ray.origin.distanceTo(c);if(u<s.near||u>s.far)return;r.push({distance:u,distanceToRay:Math.sqrt(l),point:c,index:e,face:null,object:o})}}class fR extends Zt{constructor(e,t,n,s,r,o,l,c,u,d,p,m){super(null,o,l,c,u,d,s,r,p,m),this.isCompressedTexture=!0,this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}class mR extends Zt{constructor(e,t,n,s,r,o,l,c,u){super(e,t,n,s,r,o,l,c,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class gn extends cn{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,l=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:l,thetaLength:c};const u=this;s=Math.floor(s),r=Math.floor(r);const d=[],p=[],m=[],g=[];let b=0;const w=[],x=n/2;let v=0;M(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(d),this.setAttribute("position",new At(p,3)),this.setAttribute("normal",new At(m,3)),this.setAttribute("uv",new At(g,2));function M(){const S=new D,C=new D;let P=0;const T=(t-e)/n;for(let I=0;I<=r;I++){const F=[],E=I/r,R=E*(t-e)+e;for(let B=0;B<=s;B++){const W=B/s,U=W*c+l,H=Math.sin(U),G=Math.cos(U);C.x=R*H,C.y=-E*n+x,C.z=R*G,p.push(C.x,C.y,C.z),S.set(H,T,G).normalize(),m.push(S.x,S.y,S.z),g.push(W,1-E),F.push(b++)}w.push(F)}for(let I=0;I<s;I++)for(let F=0;F<r;F++){const E=w[F][I],R=w[F+1][I],B=w[F+1][I+1],W=w[F][I+1];d.push(E,R,W),d.push(R,B,W),P+=6}u.addGroup(v,P,0),v+=P}function y(S){const C=b,P=new Le,T=new D;let I=0;const F=S===!0?e:t,E=S===!0?1:-1;for(let B=1;B<=s;B++)p.push(0,x*E,0),m.push(0,E,0),g.push(.5,.5),b++;const R=b;for(let B=0;B<=s;B++){const U=B/s*c+l,H=Math.cos(U),G=Math.sin(U);T.x=F*G,T.y=x*E,T.z=F*H,p.push(T.x,T.y,T.z),m.push(0,E,0),P.x=H*.5+.5,P.y=G*.5*E+.5,g.push(P.x,P.y),b++}for(let B=0;B<s;B++){const W=C+B,U=R+B;S===!0?d.push(U,U+1,W):d.push(U+1,U,W),I+=3}u.addGroup(v,I,S===!0?1:2),v+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Bh extends cn{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],o=[];l(s),u(n),d(),this.setAttribute("position",new At(r,3)),this.setAttribute("normal",new At(r.slice(),3)),this.setAttribute("uv",new At(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function l(M){const y=new D,S=new D,C=new D;for(let P=0;P<t.length;P+=3)g(t[P+0],y),g(t[P+1],S),g(t[P+2],C),c(y,S,C,M)}function c(M,y,S,C){const P=C+1,T=[];for(let I=0;I<=P;I++){T[I]=[];const F=M.clone().lerp(S,I/P),E=y.clone().lerp(S,I/P),R=P-I;for(let B=0;B<=R;B++)B===0&&I===P?T[I][B]=F:T[I][B]=F.clone().lerp(E,B/R)}for(let I=0;I<P;I++)for(let F=0;F<2*(P-I)-1;F++){const E=Math.floor(F/2);F%2===0?(m(T[I][E+1]),m(T[I+1][E]),m(T[I][E])):(m(T[I][E+1]),m(T[I+1][E+1]),m(T[I+1][E]))}}function u(M){const y=new D;for(let S=0;S<r.length;S+=3)y.x=r[S+0],y.y=r[S+1],y.z=r[S+2],y.normalize().multiplyScalar(M),r[S+0]=y.x,r[S+1]=y.y,r[S+2]=y.z}function d(){const M=new D;for(let y=0;y<r.length;y+=3){M.x=r[y+0],M.y=r[y+1],M.z=r[y+2];const S=x(M)/2/Math.PI+.5,C=v(M)/Math.PI+.5;o.push(S,1-C)}b(),p()}function p(){for(let M=0;M<o.length;M+=6){const y=o[M+0],S=o[M+2],C=o[M+4],P=Math.max(y,S,C),T=Math.min(y,S,C);P>.9&&T<.1&&(y<.2&&(o[M+0]+=1),S<.2&&(o[M+2]+=1),C<.2&&(o[M+4]+=1))}}function m(M){r.push(M.x,M.y,M.z)}function g(M,y){const S=M*3;y.x=e[S+0],y.y=e[S+1],y.z=e[S+2]}function b(){const M=new D,y=new D,S=new D,C=new D,P=new Le,T=new Le,I=new Le;for(let F=0,E=0;F<r.length;F+=9,E+=6){M.set(r[F+0],r[F+1],r[F+2]),y.set(r[F+3],r[F+4],r[F+5]),S.set(r[F+6],r[F+7],r[F+8]),P.set(o[E+0],o[E+1]),T.set(o[E+2],o[E+3]),I.set(o[E+4],o[E+5]),C.copy(M).add(y).add(S).divideScalar(3);const R=x(C);w(P,E+0,M,R),w(T,E+2,y,R),w(I,E+4,S,R)}}function w(M,y,S,C){C<0&&M.x===1&&(o[y]=M.x-1),S.x===0&&S.z===0&&(o[y]=C/2/Math.PI+.5)}function x(M){return Math.atan2(M.z,-M.x)}function v(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bh(e.vertices,e.indices,e.radius,e.details)}}class Ir extends Bh{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ir(e.radius,e.detail)}}class Yl extends cn{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:l},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+l,Math.PI);let u=0;const d=[],p=new D,m=new D,g=[],b=[],w=[],x=[];for(let v=0;v<=n;v++){const M=[],y=v/n;let S=0;v===0&&o===0?S=.5/t:v===n&&c===Math.PI&&(S=-.5/t);for(let C=0;C<=t;C++){const P=C/t;p.x=-e*Math.cos(s+P*r)*Math.sin(o+y*l),p.y=e*Math.cos(o+y*l),p.z=e*Math.sin(s+P*r)*Math.sin(o+y*l),b.push(p.x,p.y,p.z),m.copy(p).normalize(),w.push(m.x,m.y,m.z),x.push(P+S,1-y),M.push(u++)}d.push(M)}for(let v=0;v<n;v++)for(let M=0;M<t;M++){const y=d[v][M+1],S=d[v][M],C=d[v+1][M],P=d[v+1][M+1];(v!==0||o>0)&&g.push(y,S,P),(v!==n-1||c<Math.PI)&&g.push(S,C,P)}this.setIndex(g),this.setAttribute("position",new At(b,3)),this.setAttribute("normal",new At(w,3)),this.setAttribute("uv",new At(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yl(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ps extends cn{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],l=[],c=[],u=[],d=new D,p=new D,m=new D;for(let g=0;g<=n;g++)for(let b=0;b<=s;b++){const w=b/s*r,x=g/n*Math.PI*2;p.x=(e+t*Math.cos(x))*Math.cos(w),p.y=(e+t*Math.cos(x))*Math.sin(w),p.z=t*Math.sin(x),l.push(p.x,p.y,p.z),d.x=e*Math.cos(w),d.y=e*Math.sin(w),m.subVectors(p,d).normalize(),c.push(m.x,m.y,m.z),u.push(b/s),u.push(g/n)}for(let g=1;g<=n;g++)for(let b=1;b<=s;b++){const w=(s+1)*g+b-1,x=(s+1)*(g-1)+b-1,v=(s+1)*(g-1)+b,M=(s+1)*g+b;o.push(w,x,M),o.push(x,v,M)}this.setIndex(o),this.setAttribute("position",new At(l,3)),this.setAttribute("normal",new At(c,3)),this.setAttribute("uv",new At(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ps(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Vh extends cn{constructor(e=1,t=.4,n=64,s=8,r=2,o=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:s,p:r,q:o},n=Math.floor(n),s=Math.floor(s);const l=[],c=[],u=[],d=[],p=new D,m=new D,g=new D,b=new D,w=new D,x=new D,v=new D;for(let y=0;y<=n;++y){const S=y/n*r*Math.PI*2;M(S,r,o,e,g),M(S+.01,r,o,e,b),x.subVectors(b,g),v.addVectors(b,g),w.crossVectors(x,v),v.crossVectors(w,x),w.normalize(),v.normalize();for(let C=0;C<=s;++C){const P=C/s*Math.PI*2,T=-t*Math.cos(P),I=t*Math.sin(P);p.x=g.x+(T*v.x+I*w.x),p.y=g.y+(T*v.y+I*w.y),p.z=g.z+(T*v.z+I*w.z),c.push(p.x,p.y,p.z),m.subVectors(p,g).normalize(),u.push(m.x,m.y,m.z),d.push(y/n),d.push(C/s)}}for(let y=1;y<=n;y++)for(let S=1;S<=s;S++){const C=(s+1)*(y-1)+(S-1),P=(s+1)*y+(S-1),T=(s+1)*y+S,I=(s+1)*(y-1)+S;l.push(C,P,I),l.push(P,T,I)}this.setIndex(l),this.setAttribute("position",new At(c,3)),this.setAttribute("normal",new At(u,3)),this.setAttribute("uv",new At(d,2));function M(y,S,C,P,T){const I=Math.cos(y),F=Math.sin(y),E=C/S*y,R=Math.cos(E);T.x=P*(2+R)*.5*I,T.y=P*(2+R)*F*.5,T.z=P*Math.sin(E)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vh(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class Kl extends gi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new We(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qg,this.normalScale=new Le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Bi extends Kl{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Le(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return en(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new We(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new We(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new We(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function Xa(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function n1(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function i1(i){function e(s,r){return i[s]-i[r]}const t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function rm(i,e,t){const n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){const l=t[r]*e;for(let c=0;c!==e;++c)s[o++]=i[l+c]}return s}function w0(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}class sa{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,s=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<s)){for(let l=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===l)break;if(r=s,s=t[++n],e<s)break t}o=t.length;break n}if(!(e>=r)){const l=t[1];e<l&&(n=2,r=l);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){const l=n+o>>>1;e<t[l]?o=l:n=l+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class s1 extends sa{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Qp,endingEnd:Qp}}intervalChanged_(e,t,n){const s=this.parameterPositions;let r=e-2,o=e+1,l=s[r],c=s[o];if(l===void 0)switch(this.getSettings_().endingStart){case Jp:r=e,l=2*t-n;break;case ef:r=s.length-2,l=t+s[r]-s[r+1];break;default:r=e,l=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Jp:o=e,c=2*n-t;break;case ef:o=1,c=n+s[1]-s[0];break;default:o=e-1,c=t}const u=(n-t)*.5,d=this.valueSize;this._weightPrev=u/(t-l),this._weightNext=u/(c-n),this._offsetPrev=r*d,this._offsetNext=o*d}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,l=this.valueSize,c=e*l,u=c-l,d=this._offsetPrev,p=this._offsetNext,m=this._weightPrev,g=this._weightNext,b=(n-t)/(s-t),w=b*b,x=w*b,v=-m*x+2*m*w-m*b,M=(1+m)*x+(-1.5-2*m)*w+(-.5+m)*b+1,y=(-1-g)*x+(1.5+g)*w+.5*b,S=g*x-g*w;for(let C=0;C!==l;++C)r[C]=v*o[d+C]+M*o[u+C]+y*o[c+C]+S*o[p+C];return r}}class r1 extends sa{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,l=this.valueSize,c=e*l,u=c-l,d=(n-t)/(s-t),p=1-d;for(let m=0;m!==l;++m)r[m]=o[u+m]*p+o[c+m]*d;return r}}class o1 extends sa{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class xi{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Xa(t,this.TimeBufferType),this.values=Xa(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Xa(e.times,Array),values:Xa(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new o1(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new r1(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new s1(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Qo:t=this.InterpolantFactoryMethodDiscrete;break;case Hr:t=this.InterpolantFactoryMethodLinear;break;case Fc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Qo;case this.InterpolantFactoryMethodLinear:return Hr;case this.InterpolantFactoryMethodSmooth:return Fc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const n=this.times,s=n.length;let r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const l=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*l,o*l)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let l=0;l!==r;l++){const c=n[l];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,l,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,l,c,o),e=!1;break}o=c}if(s!==void 0&&n1(s))for(let l=0,c=s.length;l!==c;++l){const u=s[l];if(isNaN(u)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,l,u),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Fc,r=e.length-1;let o=1;for(let l=1;l<r;++l){let c=!1;const u=e[l],d=e[l+1];if(u!==d&&(l!==1||u!==e[0]))if(s)c=!0;else{const p=l*n,m=p-n,g=p+n;for(let b=0;b!==n;++b){const w=t[p+b];if(w!==t[m+b]||w!==t[g+b]){c=!0;break}}}if(c){if(l!==o){e[o]=e[l];const p=l*n,m=o*n;for(let g=0;g!==n;++g)t[m+g]=t[p+g]}++o}}if(r>0){e[o]=e[r];for(let l=r*n,c=o*n,u=0;u!==n;++u)t[c+u]=t[l+u];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}xi.prototype.TimeBufferType=Float32Array;xi.prototype.ValueBufferType=Float32Array;xi.prototype.DefaultInterpolation=Hr;class Qr extends xi{}Qr.prototype.ValueTypeName="bool";Qr.prototype.ValueBufferType=Array;Qr.prototype.DefaultInterpolation=Qo;Qr.prototype.InterpolantFactoryMethodLinear=void 0;Qr.prototype.InterpolantFactoryMethodSmooth=void 0;class M0 extends xi{}M0.prototype.ValueTypeName="color";class Xr extends xi{}Xr.prototype.ValueTypeName="number";class a1 extends sa{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,l=this.valueSize,c=(n-t)/(s-t);let u=e*l;for(let d=u+l;u!==d;u+=4)qt.slerpFlat(r,0,o,u-l,o,u,c);return r}}class Bs extends xi{InterpolantFactoryMethodLinear(e){return new a1(this.times,this.values,this.getValueSize(),e)}}Bs.prototype.ValueTypeName="quaternion";Bs.prototype.DefaultInterpolation=Hr;Bs.prototype.InterpolantFactoryMethodSmooth=void 0;class Jr extends xi{}Jr.prototype.ValueTypeName="string";Jr.prototype.ValueBufferType=Array;Jr.prototype.DefaultInterpolation=Qo;Jr.prototype.InterpolantFactoryMethodLinear=void 0;Jr.prototype.InterpolantFactoryMethodSmooth=void 0;class jr extends xi{}jr.prototype.ValueTypeName="vector";class l1{constructor(e,t=-1,n,s=ay){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=ri(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,l=n.length;o!==l;++o)t.push(u1(n[o]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(xi.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const r=t.length,o=[];for(let l=0;l<r;l++){let c=[],u=[];c.push((l+r-1)%r,l,(l+1)%r),u.push(0,1,0);const d=i1(c);c=rm(c,1,d),u=rm(u,1,d),!s&&c[0]===0&&(c.push(r),u.push(u[0])),o.push(new Xr(".morphTargetInfluences["+t[l].name+"]",c,u).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let l=0,c=e.length;l<c;l++){const u=e[l],d=u.name.match(r);if(d&&d.length>1){const p=d[1];let m=s[p];m||(s[p]=m=[]),m.push(u)}}const o=[];for(const l in s)o.push(this.CreateFromMorphTargetSequence(l,s[l],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(p,m,g,b,w){if(g.length!==0){const x=[],v=[];w0(g,x,v,b),x.length!==0&&w.push(new p(m,x,v))}},s=[],r=e.name||"default",o=e.fps||30,l=e.blendMode;let c=e.length||-1;const u=e.hierarchy||[];for(let p=0;p<u.length;p++){const m=u[p].keys;if(!(!m||m.length===0))if(m[0].morphTargets){const g={};let b;for(b=0;b<m.length;b++)if(m[b].morphTargets)for(let w=0;w<m[b].morphTargets.length;w++)g[m[b].morphTargets[w]]=-1;for(const w in g){const x=[],v=[];for(let M=0;M!==m[b].morphTargets.length;++M){const y=m[b];x.push(y.time),v.push(y.morphTarget===w?1:0)}s.push(new Xr(".morphTargetInfluence["+w+"]",x,v))}c=g.length*o}else{const g=".bones["+t[p].name+"]";n(jr,g+".position",m,"pos",s),n(Bs,g+".quaternion",m,"rot",s),n(jr,g+".scale",m,"scl",s)}}return s.length===0?null:new this(r,c,s,l)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n!==s;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function c1(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Xr;case"vector":case"vector2":case"vector3":case"vector4":return jr;case"color":return M0;case"quaternion":return Bs;case"bool":case"boolean":return Qr;case"string":return Jr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function u1(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=c1(i.type);if(i.times===void 0){const t=[],n=[];w0(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const ls={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class h1{constructor(e,t,n){const s=this;let r=!1,o=0,l=0,c;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(d){l++,r===!1&&s.onStart!==void 0&&s.onStart(d,o,l),r=!0},this.itemEnd=function(d){o++,s.onProgress!==void 0&&s.onProgress(d,o,l),o===l&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return c?c(d):d},this.setURLModifier=function(d){return c=d,this},this.addHandler=function(d,p){return u.push(d,p),this},this.removeHandler=function(d){const p=u.indexOf(d);return p!==-1&&u.splice(p,2),this},this.getHandler=function(d){for(let p=0,m=u.length;p<m;p+=2){const g=u[p],b=u[p+1];if(g.global&&(g.lastIndex=0),g.test(d))return b}return null}}}const d1=new h1;class eo{constructor(e){this.manager=e!==void 0?e:d1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}eo.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ri={};class p1 extends Error{constructor(e,t){super(e),this.response=t}}class E0 extends eo{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=ls.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Ri[e]!==void 0){Ri[e].push({onLoad:t,onProgress:n,onError:s});return}Ri[e]=[],Ri[e].push({onLoad:t,onProgress:n,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),l=this.mimeType,c=this.responseType;fetch(o).then(u=>{if(u.status===200||u.status===0){if(u.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream=="undefined"||u.body===void 0||u.body.getReader===void 0)return u;const d=Ri[e],p=u.body.getReader(),m=u.headers.get("Content-Length")||u.headers.get("X-File-Size"),g=m?parseInt(m):0,b=g!==0;let w=0;const x=new ReadableStream({start(v){M();function M(){p.read().then(({done:y,value:S})=>{if(y)v.close();else{w+=S.byteLength;const C=new ProgressEvent("progress",{lengthComputable:b,loaded:w,total:g});for(let P=0,T=d.length;P<T;P++){const I=d[P];I.onProgress&&I.onProgress(C)}v.enqueue(S),M()}})}}});return new Response(x)}else throw new p1(`fetch for "${u.url}" responded with ${u.status}: ${u.statusText}`,u)}).then(u=>{switch(c){case"arraybuffer":return u.arrayBuffer();case"blob":return u.blob();case"document":return u.text().then(d=>new DOMParser().parseFromString(d,l));case"json":return u.json();default:if(l===void 0)return u.text();{const p=/charset="?([^;"\s]*)"?/i.exec(l),m=p&&p[1]?p[1].toLowerCase():void 0,g=new TextDecoder(m);return u.arrayBuffer().then(b=>g.decode(b))}}}).then(u=>{ls.add(e,u);const d=Ri[e];delete Ri[e];for(let p=0,m=d.length;p<m;p++){const g=d[p];g.onLoad&&g.onLoad(u)}}).catch(u=>{const d=Ri[e];if(d===void 0)throw this.manager.itemError(e),u;delete Ri[e];for(let p=0,m=d.length;p<m;p++){const g=d[p];g.onError&&g.onError(u)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class f1 extends eo{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=ls.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const l=Jo("img");function c(){d(),ls.add(e,this),t&&t(this),r.manager.itemEnd(e)}function u(p){d(),s&&s(p),r.manager.itemError(e),r.manager.itemEnd(e)}function d(){l.removeEventListener("load",c,!1),l.removeEventListener("error",u,!1)}return l.addEventListener("load",c,!1),l.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(l.crossOrigin=this.crossOrigin),r.manager.itemStart(e),l.src=e,l}}class m1 extends eo{constructor(e){super(e)}load(e,t,n,s){const r=new Zt,o=new f1(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(l){r.image=l,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class Zl extends vt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new We(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const uu=new je,om=new D,am=new D;class zh{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Le(512,512),this.map=null,this.mapPass=null,this.matrix=new je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Nh,this._frameExtents=new Le(1,1),this._viewportCount=1,this._viewports=[new yt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;om.setFromMatrixPosition(e.matrixWorld),t.position.copy(om),am.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(am),t.updateMatrixWorld(),uu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(uu),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(uu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class g1 extends zh{constructor(){super(new yn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Gr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class S0 extends Zl{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.target=new vt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new g1}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const lm=new je,So=new D,hu=new D;class v1 extends zh{constructor(){super(new yn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Le(4,2),this._viewportCount=6,this._viewports=[new yt(2,1,1,1),new yt(0,1,1,1),new yt(3,1,1,1),new yt(1,1,1,1),new yt(3,0,1,1),new yt(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),So.setFromMatrixPosition(e.matrixWorld),n.position.copy(So),hu.copy(n.position),hu.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(hu),n.updateMatrixWorld(),s.makeTranslation(-So.x,-So.y,-So.z),lm.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(lm)}}class Hh extends Zl{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new v1}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class _1 extends zh{constructor(){super(new ci(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Gh extends Zl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.target=new vt,this.shadow=new _1}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class x1 extends Zl{constructor(e,t,n=10,s=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=s}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}class $o{static decodeText(e){if(typeof TextDecoder!="undefined")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class b1 extends eo{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap=="undefined"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=ls.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(u=>{t&&t(u),r.manager.itemEnd(e)}).catch(u=>{s&&s(u)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const l={};l.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",l.headers=this.requestHeader;const c=fetch(e,l).then(function(u){return u.blob()}).then(function(u){return createImageBitmap(u,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(u){return ls.add(e,u),t&&t(u),r.manager.itemEnd(e),u}).catch(function(u){s&&s(u),ls.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});ls.add(e,c),r.manager.itemStart(e)}}const Wh="\\[\\]\\.:\\/",y1=new RegExp("["+Wh+"]","g"),Xh="[^"+Wh+"]",w1="[^"+Wh.replace("\\.","")+"]",M1=/((?:WC+[\/:])*)/.source.replace("WC",Xh),E1=/(WCOD+)?/.source.replace("WCOD",w1),S1=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Xh),T1=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Xh),A1=new RegExp("^"+M1+E1+S1+T1+"$"),C1=["material","materials","bones","map"];class P1{constructor(e,t,n){const s=n||xt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class xt{constructor(e,t,n){this.path=t,this.parsedPath=n||xt.parseTrackName(t),this.node=xt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new xt.Composite(e,t,n):new xt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(y1,"")}static parseTrackName(e){const t=A1.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);C1.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const l=r[o];if(l.name===t||l.uuid===t)return l;const c=n(l.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=xt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let u=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let d=0;d<e.length;d++)if(e[d].name===u){u=d;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(u!==void 0){if(e[u]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[u]}}const o=e[s];if(o===void 0){const u=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+u+"."+s+" but it wasn't found.",e);return}let l=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?l=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}xt.Composite=P1;xt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};xt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};xt.prototype.GetterByBindingType=[xt.prototype._getValue_direct,xt.prototype._getValue_array,xt.prototype._getValue_arrayElement,xt.prototype._getValue_toArray];xt.prototype.SetterByBindingTypeAndVersioning=[[xt.prototype._setValue_direct,xt.prototype._setValue_direct_setNeedsUpdate,xt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_array,xt.prototype._setValue_array_setNeedsUpdate,xt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_arrayElement,xt.prototype._setValue_arrayElement_setNeedsUpdate,xt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_fromArray,xt.prototype._setValue_fromArray_setNeedsUpdate,xt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Ql{constructor(e){this.value=e}clone(){return new Ql(this.value.clone===void 0?this.value:this.value.clone())}}class T0{constructor(e,t,n=0,s=1/0){this.ray=new Kr(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Dh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Qu(e,this,n,t),n.sort(cm),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Qu(e[s],this,n,t);return n.sort(cm),n}}function cm(i,e){return i.distance-e.distance}function Qu(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){const s=i.children;for(let r=0,o=s.length;r<o;r++)Qu(s[r],e,t,!0)}}class um{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(en(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const hm=new D,ja=new D;class Oi{constructor(e=new D,t=new D){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){hm.subVectors(e,this.start),ja.subVectors(this.end,this.start);const n=ja.dot(ja);let r=ja.dot(hm)/n;return t&&(r=en(r,0,1)),r}closestPointToPoint(e,t,n){const s=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(s).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ph}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ph);var Ju={d:(i,e)=>{for(var t in e)Ju.o(e,t)&&!Ju.o(i,t)&&Object.defineProperty(i,t,{enumerable:!0,get:e[t]})},o:(i,e)=>Object.prototype.hasOwnProperty.call(i,e)},A0={};Ju.d(A0,{Q:()=>D1});var du=function(i,e,t,n){return new(t||(t=Promise))(function(s,r){function o(u){try{c(n.next(u))}catch(d){r(d)}}function l(u){try{c(n.throw(u))}catch(d){r(d)}}function c(u){var d;u.done?s(u.value):(d=u.value,d instanceof t?d:new t(function(p){p(d)})).then(o,l)}c((n=n.apply(i,e||[])).next())})};const C0=Symbol("Comlink.proxy"),R1=Symbol("Comlink.endpoint"),L1=Symbol("Comlink.releaseProxy"),eh=Symbol("Comlink.thrown"),dm=i=>typeof i=="object"&&i!==null||typeof i=="function",P0=new Map([["proxy",{canHandle:i=>dm(i)&&i[C0],serialize(i){const{port1:e,port2:t}=new MessageChannel;return R0(i,e),[t,[t]]},deserialize:i=>(i.start(),I0(i))}],["throw",{canHandle:i=>dm(i)&&eh in i,serialize({value:i}){let e;return e=i instanceof Error?{isError:!0,value:{message:i.message,name:i.name,stack:i.stack}}:{isError:!1,value:i},[e,[]]},deserialize(i){throw i.isError?Object.assign(new Error(i.value.message),i.value):i.value}}]]);function R0(i,e=self){e.addEventListener("message",function t(n){if(!n||!n.data)return;const{id:s,type:r,path:o}=Object.assign({path:[]},n.data),l=(n.data.argumentList||[]).map(Rs);let c;try{const u=o.slice(0,-1).reduce((p,m)=>p[m],i),d=o.reduce((p,m)=>p[m],i);switch(r){case"GET":c=d;break;case"SET":u[o.slice(-1)[0]]=Rs(n.data.value),c=!0;break;case"APPLY":c=d.apply(u,l);break;case"CONSTRUCT":c=vl(new d(...l));break;case"ENDPOINT":{const{port1:p,port2:m}=new MessageChannel;R0(i,m),c=function(g,b){return D0.set(g,b),g}(p,[p])}break;case"RELEASE":c=void 0;break;default:return}}catch(u){c={value:u,[eh]:0}}Promise.resolve(c).catch(u=>({value:u,[eh]:0})).then(u=>{const[d,p]=jh(u);e.postMessage(Object.assign(Object.assign({},d),{id:s}),p),r==="RELEASE"&&(e.removeEventListener("message",t),L0(e))})}),e.start&&e.start()}function L0(i){(function(e){return e.constructor.name==="MessagePort"})(i)&&i.close()}function I0(i,e){return th(i,[],e)}function $a(i){if(i)throw new Error("Proxy has been released and is not useable")}function th(i,e=[],t=function(){}){let n=!1;const s=new Proxy(t,{get(r,o){if($a(n),o===L1)return()=>gr(i,{type:"RELEASE",path:e.map(l=>l.toString())}).then(()=>{L0(i),n=!0});if(o==="then"){if(e.length===0)return{then:()=>s};const l=gr(i,{type:"GET",path:e.map(c=>c.toString())}).then(Rs);return l.then.bind(l)}return th(i,[...e,o])},set(r,o,l){$a(n);const[c,u]=jh(l);return gr(i,{type:"SET",path:[...e,o].map(d=>d.toString()),value:c},u).then(Rs)},apply(r,o,l){$a(n);const c=e[e.length-1];if(c===R1)return gr(i,{type:"ENDPOINT"}).then(Rs);if(c==="bind")return th(i,e.slice(0,-1));const[u,d]=pm(l);return gr(i,{type:"APPLY",path:e.map(p=>p.toString()),argumentList:u},d).then(Rs)},construct(r,o){$a(n);const[l,c]=pm(o);return gr(i,{type:"CONSTRUCT",path:e.map(u=>u.toString()),argumentList:l},c).then(Rs)}});return s}function pm(i){const e=i.map(jh);return[e.map(n=>n[0]),(t=e.map(n=>n[1]),Array.prototype.concat.apply([],t))];var t}const D0=new WeakMap;function vl(i){return Object.assign(i,{[C0]:!0})}function jh(i){for(const[e,t]of P0)if(t.canHandle(i)){const[n,s]=t.serialize(i);return[{type:"HANDLER",name:e,value:n},s]}return[{type:"RAW",value:i},D0.get(i)||[]]}function Rs(i){switch(i.type){case"HANDLER":return P0.get(i.name).deserialize(i.value);case"RAW":return i.value}}function gr(i,e,t){return new Promise(n=>{const s=new Array(4).fill(0).map(()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16)).join("-");i.addEventListener("message",function r(o){o.data&&o.data.id&&o.data.id===s&&(i.removeEventListener("message",r),n(o.data))}),i.start&&i.start(),i.postMessage(Object.assign({id:s},e),t)})}class I1 extends class{}{init(e,t,n,s){if(!this.api){if(!s)throw new Error("workerFilePath is required");(()=>{var r,o,l,c;r=this,o=void 0,c=function*(){const u=yield fetch(s).then(m=>m.blob()),d=URL.createObjectURL(u),p=new Worker(d,{type:"module"});this.api=yield new(I0(p))(vl(()=>{e(),URL.revokeObjectURL(d)}),vl((m,g)=>m==="xatlas_web.wasm"?n:m+g),vl(t))},new((l=void 0)||(l=Promise))(function(u,d){function p(b){try{g(c.next(b))}catch(w){d(w)}}function m(b){try{g(c.throw(b))}catch(w){d(w)}}function g(b){var w;b.done?u(b.value):(w=b.value,w instanceof l?w:new l(function(x){x(w)})).then(p,m)}g((c=c.apply(r,o||[])).next())})})()}}}class D1 extends class{constructor(e,t={resolution:2048},n={},s=!1,r=!1,o=!1){this.THREE=e,this.packOptions=t,this.chartOptions=n,this.useNormals=s,this.timeUnwrap=r,this.logProgress=o,this._libraryLoaded=!1,this._isUnwrapping=!1,this.xAtlas=this._createXAtlas()}loadLibrary(e,t,n){return du(this,void 0,void 0,function*(){if(!this._libraryLoaded){for(yield new Promise((s,r)=>{try{this.xAtlas.init(()=>{s()},e,t,n)}catch(o){r(o)}});!this.xAtlas.api||!(yield this.xAtlas.api.loaded);)yield new Promise(s=>setTimeout(s,100));this._libraryLoaded=!0}})}packAtlas(e,t="uv2",n="uv"){return du(this,void 0,void 0,function*(){if(!this._libraryLoaded)return console.warn("xatlas-three: library not loaded"),[];if(!e)return[];if(e.length<1)return[];const s=this.chartOptions.useInputMeshUvs;for(;this._isUnwrapping;)console.log("xatlas-three: unwrapping another mesh, waiting 100 ms"),yield new Promise(u=>setTimeout(u,100));this._isUnwrapping=!0,yield this.xAtlas.api.setProgressLogging(this.logProgress),yield this.xAtlas.api.createAtlas();let r=[],o="";for(let u of e){let{uuid:d,index:p,attributes:m}=u;const g=u.userData.worldScale||1;r.push(d),p&&m.position&&m.position.itemSize===3?(o="Mesh"+r.length+" added to atlas: "+d,this.timeUnwrap&&console.time(o),yield this.xAtlas.api.addMesh(p.array,m.position.array,m.normal?m.normal.array:void 0,m.uv?m.uv.array:void 0,d,this.useNormals,s,g),this.timeUnwrap&&console.timeEnd(o)):console.warn("xatlas-three: Geometry not supported: ",u)}o="Generated atlas with "+r.length+" meshes",this.timeUnwrap&&console.time(o);let l=yield this.xAtlas.api.generateAtlas(this.chartOptions,this.packOptions,!0);this.timeUnwrap&&console.timeEnd(o);let c=[];for(let u of l){let d=e.find(p=>p.uuid===u.mesh);d?(u.vertex.vertices&&d.setAttribute("position",new this.THREE.BufferAttribute(u.vertex.vertices,3,!1)),u.vertex.normals&&d.setAttribute("normal",new this.THREE.BufferAttribute(u.vertex.normals,3,!0)),u.vertex.coords1&&d.setAttribute(t,new this.THREE.BufferAttribute(u.vertex.coords1,2,!1)),u.vertex.coords&&t!==n&&d.setAttribute(n,new this.THREE.BufferAttribute(u.vertex.coords,2,!1)),u.index&&d.setIndex(new this.THREE.BufferAttribute(u.index,1,!1)),c.push(d)):console.error("xatlas-three: Mesh not found: ",u.mesh)}return yield this.xAtlas.api.destroyAtlas(),this._isUnwrapping=!1,c})}unwrapGeometry(e,t="uv",n="uv2"){return du(this,void 0,void 0,function*(){return this.packAtlas([e],t,n)})}}{_createXAtlas(){return new I1}}var N1=A0.Q;const _l=new N1({BufferAttribute:Dt}),U1=async()=>{const i=(e,t)=>{};await _l.loadLibrary(i,"https://cdn.jsdelivr.net/npm/xatlasjs@0.1.0/dist/xatlas.wasm","https://cdn.jsdelivr.net/npm/xatlasjs@0.1.0/dist/xatlas.js")},k1=async i=>{const e=i.map(t=>t.geometry);_l.packOptions.padding=16,_l.packOptions.resolution=4096,await _l.packAtlas(e,"uv2","uv")},F1=`
    uniform vec2 offset;
    in vec2 uv2;
    out vec4 vWorldPosition;

    void main() {
        vWorldPosition = modelMatrix * vec4(position, 1.0);
        gl_Position = vec4((uv2 + offset) * 2.0 - 1.0, 0.0, 1.0);
    }
`,O1=`
    in vec4 vWorldPosition;
    out vec4 fragColor;

    void main() {
        fragColor = vWorldPosition;
    }
`,B1=new nn({glslVersion:Kn,vertexShader:F1,fragmentShader:O1,side:wn,fog:!1,uniforms:{offset:new Ql(new Le(0,0))}}),V1=`
    out vec4 vNormal;
    in vec2 uv2;
    uniform vec2 offset;

    void main() {
        // Inverse-transpose of the upper-left 3x3 of the model matrix preserves
        // normal direction under non-uniform scale. mat3(modelMatrix) alone
        // skews normals on stretched axes \u2014 visible as wrong shading falloff
        // on imported GLB content. inverse()/transpose() are GLSL3 built-ins.
        mat3 worldNormalMatrix = transpose(inverse(mat3(modelMatrix)));
        vec3 worldNormal = worldNormalMatrix * normal;
        // Alpha = 0.0 to match the prior modelMatrix * vec4(normal, 0.0) output.
        // The fragment shader emits length-checked xyz and forwards w as the
        // chart-mask convention; keeping it 0 matches the previous wire format.
        vNormal = vec4(worldNormal, 0.0);
        gl_Position = vec4((uv2 + offset) * 2.0 - 1.0, 0.0, 1.0);
    }
`,z1=`
    in vec4 vNormal;
    out vec4 fragColor;

    void main() {
        // Guard against zero-length normals (degenerate geometry) \u2014 produces (0,0,0,0)
        // so the bake shader can detect the miss instead of generating NaN.
        float len = length(vNormal.xyz);
        fragColor = len > 1e-6 ? vec4(vNormal.xyz / len, vNormal.w) : vec4(0.0);
    }
`,H1=new nn({glslVersion:Kn,vertexShader:V1,fragmentShader:z1,side:wn,fog:!1,uniforms:{offset:new Ql(new Le(0,0))}}),G1=[{x:-2,y:-2},{x:2,y:-2},{x:-2,y:2},{x:2,y:2},{x:-1,y:-2},{x:1,y:-2},{x:-2,y:-1},{x:2,y:-1},{x:-2,y:1},{x:2,y:1},{x:-1,y:2},{x:1,y:2},{x:-2,y:0},{x:2,y:0},{x:0,y:-2},{x:0,y:2},{x:-1,y:-1},{x:1,y:-1},{x:-1,y:0},{x:1,y:0},{x:-1,y:1},{x:1,y:1},{x:0,y:-1},{x:0,y:1},{x:0,y:0}],W1=(i,e,t,n=!0)=>{const s=i.autoClear,r=i.getRenderTarget(),o=new We;i.getClearColor(o);const l=i.getClearAlpha(),c=[],u=d=>{const p=new Ln(t,t,{type:wt,magFilter:mt,minFilter:mt});c.push(p);const m=new ci(-100,100,-100,100,-100,200);m.updateMatrix();const g=new vt;g.matrixWorldAutoUpdate=!1;for(const w of e){const x=w.clone();x.material=d,g.add(x)}i.autoClear=!1,i.setRenderTarget(p),i.setClearColor(0,0),i.clear();const b=d.uniforms.offset;if(!b)throw new Error("[baker] atlas material missing `offset` uniform");if(n)for(const w of G1)b.value.x=w.x*(1/t),b.value.y=w.y*(1/t),i.render(g,m);return b.value.x=0,b.value.y=0,i.render(g,m),p.texture};try{const d=u(B1),p=u(H1);return{positionTexture:d,normalTexture:p,dispose:()=>{for(const m of c)m.dispose();c.length=0}}}finally{i.setRenderTarget(r),i.autoClear=s,i.setClearColor(o,l)}},N0=0,X1=1,j1=2,fm=2,pu=1.25,mm=1,hs=6*4+4+4,Jl=65535,$1=Math.pow(2,-24),fu=Symbol("SKIP_GENERATION");function U0(i){return i.index?i.index.count:i.attributes.position.count}function to(i){return U0(i)/3}function k0(i,e=ArrayBuffer){return i>65535?new Uint32Array(new e(4*i)):new Uint16Array(new e(2*i))}function q1(i,e){if(!i.index){const t=i.attributes.position.count,n=e.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,s=k0(t,n);i.setIndex(new Dt(s,1));for(let r=0;r<t;r++)s[r]=r}}function F0(i){const e=to(i),t=i.drawRange,n=t.start/3,s=(t.start+t.count)/3,r=Math.max(0,n),o=Math.min(e,s)-r;return[{offset:Math.floor(r),count:Math.floor(o)}]}function O0(i){if(!i.groups||!i.groups.length)return F0(i);const e=[],t=new Set,n=i.drawRange,s=n.start/3,r=(n.start+n.count)/3;for(const l of i.groups){const c=l.start/3,u=(l.start+l.count)/3;t.add(Math.max(s,c)),t.add(Math.min(r,u))}const o=Array.from(t.values()).sort((l,c)=>l-c);for(let l=0;l<o.length-1;l++){const c=o[l],u=o[l+1];e.push({offset:Math.floor(c),count:Math.floor(u-c)})}return e}function Y1(i){if(i.groups.length===0)return!1;const e=to(i),t=O0(i).sort((r,o)=>r.offset-o.offset),n=t[t.length-1];n.count=Math.min(e-n.offset,n.count);let s=0;return t.forEach(({count:r})=>s+=r),e!==s}function mu(i,e,t,n,s){let r=1/0,o=1/0,l=1/0,c=-1/0,u=-1/0,d=-1/0,p=1/0,m=1/0,g=1/0,b=-1/0,w=-1/0,x=-1/0;for(let v=e*6,M=(e+t)*6;v<M;v+=6){const y=i[v+0],S=i[v+1],C=y-S,P=y+S;C<r&&(r=C),P>c&&(c=P),y<p&&(p=y),y>b&&(b=y);const T=i[v+2],I=i[v+3],F=T-I,E=T+I;F<o&&(o=F),E>u&&(u=E),T<m&&(m=T),T>w&&(w=T);const R=i[v+4],B=i[v+5],W=R-B,U=R+B;W<l&&(l=W),U>d&&(d=U),R<g&&(g=R),R>x&&(x=R)}n[0]=r,n[1]=o,n[2]=l,n[3]=c,n[4]=u,n[5]=d,s[0]=p,s[1]=m,s[2]=g,s[3]=b,s[4]=w,s[5]=x}function K1(i,e=null,t=null,n=null){const s=i.attributes.position,r=i.index?i.index.array:null,o=to(i),l=s.normalized;let c;e===null?(c=new Float32Array(o*6*4),t=0,n=o):(c=e,t=t||0,n=n||o);const u=s.array,d=s.offset||0;let p=3;s.isInterleavedBufferAttribute&&(p=s.data.stride);const m=["getX","getY","getZ"];for(let g=t;g<t+n;g++){const b=g*3,w=g*6;let x=b+0,v=b+1,M=b+2;r&&(x=r[x],v=r[v],M=r[M]),l||(x=x*p+d,v=v*p+d,M=M*p+d);for(let y=0;y<3;y++){let S,C,P;l?(S=s[m[y]](x),C=s[m[y]](v),P=s[m[y]](M)):(S=u[x+y],C=u[v+y],P=u[M+y]);let T=S;C<T&&(T=C),P<T&&(T=P);let I=S;C>I&&(I=C),P>I&&(I=P);const F=(I-T)/2,E=y*2;c[w+E+0]=T+F,c[w+E+1]=F+(Math.abs(T)+F)*$1}}return c}function Bt(i,e,t){return t.min.x=e[i],t.min.y=e[i+1],t.min.z=e[i+2],t.max.x=e[i+3],t.max.y=e[i+4],t.max.z=e[i+5],t}function gm(i){let e=-1,t=-1/0;for(let n=0;n<3;n++){const s=i[n+3]-i[n];s>t&&(t=s,e=n)}return e}function vm(i,e){e.set(i)}function _m(i,e,t){let n,s;for(let r=0;r<3;r++){const o=r+3;n=i[r],s=e[r],t[r]=n<s?n:s,n=i[o],s=e[o],t[o]=n>s?n:s}}function qa(i,e,t){for(let n=0;n<3;n++){const s=e[i+2*n],r=e[i+2*n+1],o=s-r,l=s+r;o<t[n]&&(t[n]=o),l>t[n+3]&&(t[n+3]=l)}}function To(i){const e=i[3]-i[0],t=i[4]-i[1],n=i[5]-i[2];return 2*(e*t+t*n+n*e)}const Di=32,Z1=(i,e)=>i.candidate-e.candidate,ts=new Array(Di).fill().map(()=>({count:0,bounds:new Float32Array(6),rightCacheBounds:new Float32Array(6),leftCacheBounds:new Float32Array(6),candidate:0})),Ya=new Float32Array(6);function Q1(i,e,t,n,s,r){let o=-1,l=0;if(r===N0)o=gm(e),o!==-1&&(l=(e[o]+e[o+3])/2);else if(r===X1)o=gm(i),o!==-1&&(l=J1(t,n,s,o));else if(r===j1){const c=To(i);let u=pu*s;const d=n*6,p=(n+s)*6;for(let m=0;m<3;m++){const g=e[m],x=(e[m+3]-g)/Di;if(s<Di/4){const v=[...ts];v.length=s;let M=0;for(let S=d;S<p;S+=6,M++){const C=v[M];C.candidate=t[S+2*m],C.count=0;const{bounds:P,leftCacheBounds:T,rightCacheBounds:I}=C;for(let F=0;F<3;F++)I[F]=1/0,I[F+3]=-1/0,T[F]=1/0,T[F+3]=-1/0,P[F]=1/0,P[F+3]=-1/0;qa(S,t,P)}v.sort(Z1);let y=s;for(let S=0;S<y;S++){const C=v[S];for(;S+1<y&&v[S+1].candidate===C.candidate;)v.splice(S+1,1),y--}for(let S=d;S<p;S+=6){const C=t[S+2*m];for(let P=0;P<y;P++){const T=v[P];C>=T.candidate?qa(S,t,T.rightCacheBounds):(qa(S,t,T.leftCacheBounds),T.count++)}}for(let S=0;S<y;S++){const C=v[S],P=C.count,T=s-C.count,I=C.leftCacheBounds,F=C.rightCacheBounds;let E=0;P!==0&&(E=To(I)/c);let R=0;T!==0&&(R=To(F)/c);const B=mm+pu*(E*P+R*T);B<u&&(o=m,u=B,l=C.candidate)}}else{for(let y=0;y<Di;y++){const S=ts[y];S.count=0,S.candidate=g+x+y*x;const C=S.bounds;for(let P=0;P<3;P++)C[P]=1/0,C[P+3]=-1/0}for(let y=d;y<p;y+=6){let P=~~((t[y+2*m]-g)/x);P>=Di&&(P=Di-1);const T=ts[P];T.count++,qa(y,t,T.bounds)}const v=ts[Di-1];vm(v.bounds,v.rightCacheBounds);for(let y=Di-2;y>=0;y--){const S=ts[y],C=ts[y+1];_m(S.bounds,C.rightCacheBounds,S.rightCacheBounds)}let M=0;for(let y=0;y<Di-1;y++){const S=ts[y],C=S.count,P=S.bounds,I=ts[y+1].rightCacheBounds;C!==0&&(M===0?vm(P,Ya):_m(P,Ya,Ya)),M+=C;let F=0,E=0;M!==0&&(F=To(Ya)/c);const R=s-M;R!==0&&(E=To(I)/c);const B=mm+pu*(F*M+E*R);B<u&&(o=m,u=B,l=S.candidate)}}}}else console.warn(`MeshBVH: Invalid build strategy value ${r} used.`);return{axis:o,pos:l}}function J1(i,e,t,n){let s=0;for(let r=e,o=e+t;r<o;r++)s+=i[r*6+n*2];return s/t}class gu{constructor(){this.boundingData=new Float32Array(6)}}function eA(i,e,t,n,s,r){let o=n,l=n+s-1;const c=r.pos,u=r.axis*2;for(;;){for(;o<=l&&t[o*6+u]<c;)o++;for(;o<=l&&t[l*6+u]>=c;)l--;if(o<l){for(let d=0;d<3;d++){let p=e[o*3+d];e[o*3+d]=e[l*3+d],e[l*3+d]=p}for(let d=0;d<6;d++){let p=t[o*6+d];t[o*6+d]=t[l*6+d],t[l*6+d]=p}o++,l--}else return o}}function tA(i,e,t,n,s,r){let o=n,l=n+s-1;const c=r.pos,u=r.axis*2;for(;;){for(;o<=l&&t[o*6+u]<c;)o++;for(;o<=l&&t[l*6+u]>=c;)l--;if(o<l){let d=i[o];i[o]=i[l],i[l]=d;for(let p=0;p<6;p++){let m=t[o*6+p];t[o*6+p]=t[l*6+p],t[l*6+p]=m}o++,l--}else return o}}function En(i,e){return e[i+15]===65535}function Rn(i,e){return e[i+6]}function kn(i,e){return e[i+14]}function jn(i){return i+8}function Fn(i,e){return e[i+6]}function $h(i,e){return e[i+7]}let B0,Fo,xl,V0;const nA=Math.pow(2,32);function nh(i){return"count"in i?1:1+nh(i.left)+nh(i.right)}function iA(i,e,t){return B0=new Float32Array(t),Fo=new Uint32Array(t),xl=new Uint16Array(t),V0=new Uint8Array(t),ih(i,e)}function ih(i,e){const t=i/4,n=i/2,s="count"in e,r=e.boundingData;for(let o=0;o<6;o++)B0[t+o]=r[o];if(s)if(e.buffer){const o=e.buffer;V0.set(new Uint8Array(o),i);for(let l=i,c=i+o.byteLength;l<c;l+=hs){const u=l/2;En(u,xl)||(Fo[l/4+6]+=t)}return i+o.byteLength}else{const o=e.offset,l=e.count;return Fo[t+6]=o,xl[n+14]=l,xl[n+15]=Jl,i+hs}else{const o=e.left,l=e.right,c=e.splitAxis;let u;if(u=ih(i+hs,o),u/4>nA)throw new Error("MeshBVH: Cannot store child pointer greater than 32 bits.");return Fo[t+6]=u/4,u=ih(u,l),Fo[t+7]=c,u}}function sA(i,e){const t=(i.index?i.index.count:i.attributes.position.count)/3,n=t>2**16,s=n?4:2,r=e?new SharedArrayBuffer(t*s):new ArrayBuffer(t*s),o=n?new Uint32Array(r):new Uint16Array(r);for(let l=0,c=o.length;l<c;l++)o[l]=l;return o}function rA(i,e,t,n,s){const{maxDepth:r,verbose:o,maxLeafTris:l,strategy:c,onProgress:u,indirect:d}=s,p=i._indirectBuffer,m=i.geometry,g=m.index?m.index.array:null,b=d?tA:eA,w=to(m),x=new Float32Array(6);let v=!1;const M=new gu;return mu(e,t,n,M.boundingData,x),S(M,t,n,x),M;function y(C){u&&u(C/w)}function S(C,P,T,I=null,F=0){if(!v&&F>=r&&(v=!0,o&&(console.warn(`MeshBVH: Max depth of ${r} reached when generating BVH. Consider increasing maxDepth.`),console.warn(m))),T<=l||F>=r)return y(P+T),C.offset=P,C.count=T,C;const E=Q1(C.boundingData,I,e,P,T,c);if(E.axis===-1)return y(P+T),C.offset=P,C.count=T,C;const R=b(p,g,e,P,T,E);if(R===P||R===P+T)y(P+T),C.offset=P,C.count=T;else{C.splitAxis=E.axis;const B=new gu,W=P,U=R-P;C.left=B,mu(e,W,U,B.boundingData,x),S(B,W,U,x,F+1);const H=new gu,G=R,X=T-U;C.right=H,mu(e,G,X,H.boundingData,x),S(H,G,X,x,F+1)}return C}}function oA(i,e){const t=i.geometry;e.indirect&&(i._indirectBuffer=sA(t,e.useSharedArrayBuffer),Y1(t)&&!e.verbose&&console.warn('MeshBVH: Provided geometry contains groups that do not fully span the vertex contents while using the "indirect" option. BVH may incorrectly report intersections on unrendered portions of the geometry.')),i._indirectBuffer||q1(t,e);const n=e.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,s=K1(t),r=e.indirect?F0(t):O0(t);i._roots=r.map(o=>{const l=rA(i,s,o.offset,o.count,e),c=nh(l),u=new n(hs*c);return iA(0,l,u),u})}class vi{constructor(){this.min=1/0,this.max=-1/0}setFromPointsField(e,t){let n=1/0,s=-1/0;for(let r=0,o=e.length;r<o;r++){const c=e[r][t];n=c<n?c:n,s=c>s?c:s}this.min=n,this.max=s}setFromPoints(e,t){let n=1/0,s=-1/0;for(let r=0,o=t.length;r<o;r++){const l=t[r],c=e.dot(l);n=c<n?c:n,s=c>s?c:s}this.min=n,this.max=s}isSeparated(e){return this.min>e.max||e.min>this.max}}vi.prototype.setFromBox=function(){const i=new D;return function(t,n){const s=n.min,r=n.max;let o=1/0,l=-1/0;for(let c=0;c<=1;c++)for(let u=0;u<=1;u++)for(let d=0;d<=1;d++){i.x=s.x*c+r.x*(1-c),i.y=s.y*u+r.y*(1-u),i.z=s.z*d+r.z*(1-d);const p=t.dot(i);o=Math.min(p,o),l=Math.max(p,l)}this.min=o,this.max=l}}();(function(){const i=new vi;return function(t,n){const s=t.points,r=t.satAxes,o=t.satBounds,l=n.points,c=n.satAxes,u=n.satBounds;for(let d=0;d<3;d++){const p=o[d],m=r[d];if(i.setFromPoints(m,l),p.isSeparated(i))return!1}for(let d=0;d<3;d++){const p=u[d],m=c[d];if(i.setFromPoints(m,s),p.isSeparated(i))return!1}}})();const aA=function(){const i=new D,e=new D,t=new D;return function(s,r,o){const l=s.start,c=i,u=r.start,d=e;t.subVectors(l,u),i.subVectors(s.end,s.start),e.subVectors(r.end,r.start);const p=t.dot(d),m=d.dot(c),g=d.dot(d),b=t.dot(c),x=c.dot(c)*g-m*m;let v,M;x!==0?v=(p*m-b*g)/x:v=0,M=(p+v*m)/g,o.x=v,o.y=M}}(),qh=function(){const i=new Le,e=new D,t=new D;return function(s,r,o,l){aA(s,r,i);let c=i.x,u=i.y;if(c>=0&&c<=1&&u>=0&&u<=1){s.at(c,o),r.at(u,l);return}else if(c>=0&&c<=1){u<0?r.at(0,l):r.at(1,l),s.closestPointToPoint(l,!0,o);return}else if(u>=0&&u<=1){c<0?s.at(0,o):s.at(1,o),r.closestPointToPoint(o,!0,l);return}else{let d;c<0?d=s.start:d=s.end;let p;u<0?p=r.start:p=r.end;const m=e,g=t;if(s.closestPointToPoint(p,!0,e),r.closestPointToPoint(d,!0,t),m.distanceToSquared(p)<=g.distanceToSquared(d)){o.copy(m),l.copy(p);return}else{o.copy(d),l.copy(g);return}}}}(),lA=function(){const i=new D,e=new D,t=new di,n=new Oi;return function(r,o){const{radius:l,center:c}=r,{a:u,b:d,c:p}=o;if(n.start=u,n.end=d,n.closestPointToPoint(c,!0,i).distanceTo(c)<=l||(n.start=u,n.end=p,n.closestPointToPoint(c,!0,i).distanceTo(c)<=l)||(n.start=d,n.end=p,n.closestPointToPoint(c,!0,i).distanceTo(c)<=l))return!0;const w=o.getPlane(t);if(Math.abs(w.distanceToPoint(c))<=l){const v=w.projectPoint(c,e);if(o.containsPoint(v))return!0}return!1}}(),cA=1e-15;function vu(i){return Math.abs(i)<cA}class ai extends Mn{constructor(...e){super(...e),this.isExtendedTriangle=!0,this.satAxes=new Array(4).fill().map(()=>new D),this.satBounds=new Array(4).fill().map(()=>new vi),this.points=[this.a,this.b,this.c],this.sphere=new li,this.plane=new di,this.needsUpdate=!0}intersectsSphere(e){return lA(e,this)}update(){const e=this.a,t=this.b,n=this.c,s=this.points,r=this.satAxes,o=this.satBounds,l=r[0],c=o[0];this.getNormal(l),c.setFromPoints(l,s);const u=r[1],d=o[1];u.subVectors(e,t),d.setFromPoints(u,s);const p=r[2],m=o[2];p.subVectors(t,n),m.setFromPoints(p,s);const g=r[3],b=o[3];g.subVectors(n,e),b.setFromPoints(g,s),this.sphere.setFromPoints(this.points),this.plane.setFromNormalAndCoplanarPoint(l,e),this.needsUpdate=!1}}ai.prototype.closestPointToSegment=function(){const i=new D,e=new D,t=new Oi;return function(s,r=null,o=null){const{start:l,end:c}=s,u=this.points;let d,p=1/0;for(let m=0;m<3;m++){const g=(m+1)%3;t.start.copy(u[m]),t.end.copy(u[g]),qh(t,s,i,e),d=i.distanceToSquared(e),d<p&&(p=d,r&&r.copy(i),o&&o.copy(e))}return this.closestPointToPoint(l,i),d=l.distanceToSquared(i),d<p&&(p=d,r&&r.copy(i),o&&o.copy(l)),this.closestPointToPoint(c,i),d=c.distanceToSquared(i),d<p&&(p=d,r&&r.copy(i),o&&o.copy(c)),Math.sqrt(p)}}();ai.prototype.intersectsTriangle=function(){const i=new ai,e=new Array(3),t=new Array(3),n=new vi,s=new vi,r=new D,o=new D,l=new D,c=new D,u=new D,d=new Oi,p=new Oi,m=new Oi,g=new D;function b(w,x,v){const M=w.points;let y=0,S=-1;for(let C=0;C<3;C++){const{start:P,end:T}=d;P.copy(M[C]),T.copy(M[(C+1)%3]),d.delta(o);const I=vu(x.distanceToPoint(P));if(vu(x.normal.dot(o))&&I){v.copy(d),y=2;break}const F=x.intersectLine(d,g);if(!F&&I&&g.copy(P),(F||I)&&!vu(g.distanceTo(T))){if(y<=1)(y===1?v.start:v.end).copy(g),I&&(S=y);else if(y>=2){(S===1?v.start:v.end).copy(g),y=2;break}if(y++,y===2&&S===-1)break}}return y}return function(x,v=null,M=!1){this.needsUpdate&&this.update(),x.isExtendedTriangle?x.needsUpdate&&x.update():(i.copy(x),i.update(),x=i);const y=this.plane,S=x.plane;if(Math.abs(y.normal.dot(S.normal))>1-1e-10){const C=this.satBounds,P=this.satAxes;t[0]=x.a,t[1]=x.b,t[2]=x.c;for(let F=0;F<4;F++){const E=C[F],R=P[F];if(n.setFromPoints(R,t),E.isSeparated(n))return!1}const T=x.satBounds,I=x.satAxes;e[0]=this.a,e[1]=this.b,e[2]=this.c;for(let F=0;F<4;F++){const E=T[F],R=I[F];if(n.setFromPoints(R,e),E.isSeparated(n))return!1}for(let F=0;F<4;F++){const E=P[F];for(let R=0;R<4;R++){const B=I[R];if(r.crossVectors(E,B),n.setFromPoints(r,e),s.setFromPoints(r,t),n.isSeparated(s))return!1}}return v&&(M||console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."),v.start.set(0,0,0),v.end.set(0,0,0)),!0}else{const C=b(this,S,p);if(C===1&&x.containsPoint(p.end))return v&&(v.start.copy(p.end),v.end.copy(p.end)),!0;if(C!==2)return!1;const P=b(x,y,m);if(P===1&&this.containsPoint(m.end))return v&&(v.start.copy(m.end),v.end.copy(m.end)),!0;if(P!==2)return!1;if(p.delta(l),m.delta(c),l.dot(c)<0){let W=m.start;m.start=m.end,m.end=W}const T=p.start.dot(l),I=p.end.dot(l),F=m.start.dot(l),E=m.end.dot(l),R=I<F,B=T<E;return T!==E&&F!==I&&R===B?!1:(v&&(u.subVectors(p.start,m.start),u.dot(l)>0?v.start.copy(p.start):v.start.copy(m.start),u.subVectors(p.end,m.end),u.dot(l)<0?v.end.copy(p.end):v.end.copy(m.end)),!0)}}}();ai.prototype.distanceToPoint=function(){const i=new D;return function(t){return this.closestPointToPoint(t,i),t.distanceTo(i)}}();ai.prototype.distanceToTriangle=function(){const i=new D,e=new D,t=["a","b","c"],n=new Oi,s=new Oi;return function(o,l=null,c=null){const u=l||c?n:null;if(this.intersectsTriangle(o,u))return(l||c)&&(l&&u.getCenter(l),c&&u.getCenter(c)),0;let d=1/0;for(let p=0;p<3;p++){let m;const g=t[p],b=o[g];this.closestPointToPoint(b,i),m=b.distanceToSquared(i),m<d&&(d=m,l&&l.copy(i),c&&c.copy(b));const w=this[g];o.closestPointToPoint(w,i),m=w.distanceToSquared(i),m<d&&(d=m,l&&l.copy(w),c&&c.copy(i))}for(let p=0;p<3;p++){const m=t[p],g=t[(p+1)%3];n.set(this[m],this[g]);for(let b=0;b<3;b++){const w=t[b],x=t[(b+1)%3];s.set(o[w],o[x]),qh(n,s,i,e);const v=i.distanceToSquared(e);v<d&&(d=v,l&&l.copy(i),c&&c.copy(e))}}return Math.sqrt(d)}}();class An{constructor(e,t,n){this.isOrientedBox=!0,this.min=new D,this.max=new D,this.matrix=new je,this.invMatrix=new je,this.points=new Array(8).fill().map(()=>new D),this.satAxes=new Array(3).fill().map(()=>new D),this.satBounds=new Array(3).fill().map(()=>new vi),this.alignedSatBounds=new Array(3).fill().map(()=>new vi),this.needsUpdate=!1,e&&this.min.copy(e),t&&this.max.copy(t),n&&this.matrix.copy(n)}set(e,t,n){this.min.copy(e),this.max.copy(t),this.matrix.copy(n),this.needsUpdate=!0}copy(e){this.min.copy(e.min),this.max.copy(e.max),this.matrix.copy(e.matrix),this.needsUpdate=!0}}An.prototype.update=function(){return function(){const e=this.matrix,t=this.min,n=this.max,s=this.points;for(let u=0;u<=1;u++)for(let d=0;d<=1;d++)for(let p=0;p<=1;p++){const m=1*u|2*d|4*p,g=s[m];g.x=u?n.x:t.x,g.y=d?n.y:t.y,g.z=p?n.z:t.z,g.applyMatrix4(e)}const r=this.satBounds,o=this.satAxes,l=s[0];for(let u=0;u<3;u++){const d=o[u],p=r[u],m=1<<u,g=s[m];d.subVectors(l,g),p.setFromPoints(d,s)}const c=this.alignedSatBounds;c[0].setFromPointsField(s,"x"),c[1].setFromPointsField(s,"y"),c[2].setFromPointsField(s,"z"),this.invMatrix.copy(this.matrix).invert(),this.needsUpdate=!1}}();An.prototype.intersectsBox=function(){const i=new vi;return function(t){this.needsUpdate&&this.update();const n=t.min,s=t.max,r=this.satBounds,o=this.satAxes,l=this.alignedSatBounds;if(i.min=n.x,i.max=s.x,l[0].isSeparated(i)||(i.min=n.y,i.max=s.y,l[1].isSeparated(i))||(i.min=n.z,i.max=s.z,l[2].isSeparated(i)))return!1;for(let c=0;c<3;c++){const u=o[c],d=r[c];if(i.setFromBox(u,t),d.isSeparated(i))return!1}return!0}}();An.prototype.intersectsTriangle=function(){const i=new ai,e=new Array(3),t=new vi,n=new vi,s=new D;return function(o){this.needsUpdate&&this.update(),o.isExtendedTriangle?o.needsUpdate&&o.update():(i.copy(o),i.update(),o=i);const l=this.satBounds,c=this.satAxes;e[0]=o.a,e[1]=o.b,e[2]=o.c;for(let m=0;m<3;m++){const g=l[m],b=c[m];if(t.setFromPoints(b,e),g.isSeparated(t))return!1}const u=o.satBounds,d=o.satAxes,p=this.points;for(let m=0;m<3;m++){const g=u[m],b=d[m];if(t.setFromPoints(b,p),g.isSeparated(t))return!1}for(let m=0;m<3;m++){const g=c[m];for(let b=0;b<4;b++){const w=d[b];if(s.crossVectors(g,w),t.setFromPoints(s,e),n.setFromPoints(s,p),t.isSeparated(n))return!1}}return!0}}();An.prototype.closestPointToPoint=function(){return function(e,t){return this.needsUpdate&&this.update(),t.copy(e).applyMatrix4(this.invMatrix).clamp(this.min,this.max).applyMatrix4(this.matrix),t}}();An.prototype.distanceToPoint=function(){const i=new D;return function(t){return this.closestPointToPoint(t,i),t.distanceTo(i)}}();An.prototype.distanceToBox=function(){const i=["x","y","z"],e=new Array(12).fill().map(()=>new Oi),t=new Array(12).fill().map(()=>new Oi),n=new D,s=new D;return function(o,l=0,c=null,u=null){if(this.needsUpdate&&this.update(),this.intersectsBox(o))return(c||u)&&(o.getCenter(s),this.closestPointToPoint(s,n),o.closestPointToPoint(n,s),c&&c.copy(n),u&&u.copy(s)),0;const d=l*l,p=o.min,m=o.max,g=this.points;let b=1/0;for(let x=0;x<8;x++){const v=g[x];s.copy(v).clamp(p,m);const M=v.distanceToSquared(s);if(M<b&&(b=M,c&&c.copy(v),u&&u.copy(s),M<d))return Math.sqrt(M)}let w=0;for(let x=0;x<3;x++)for(let v=0;v<=1;v++)for(let M=0;M<=1;M++){const y=(x+1)%3,S=(x+2)%3,C=v<<y|M<<S,P=1<<x|v<<y|M<<S,T=g[C],I=g[P];e[w].set(T,I);const E=i[x],R=i[y],B=i[S],W=t[w],U=W.start,H=W.end;U[E]=p[E],U[R]=v?p[R]:m[R],U[B]=M?p[B]:m[R],H[E]=m[E],H[R]=v?p[R]:m[R],H[B]=M?p[B]:m[R],w++}for(let x=0;x<=1;x++)for(let v=0;v<=1;v++)for(let M=0;M<=1;M++){s.x=x?m.x:p.x,s.y=v?m.y:p.y,s.z=M?m.z:p.z,this.closestPointToPoint(s,n);const y=s.distanceToSquared(n);if(y<b&&(b=y,c&&c.copy(n),u&&u.copy(s),y<d))return Math.sqrt(y)}for(let x=0;x<12;x++){const v=e[x];for(let M=0;M<12;M++){const y=t[M];qh(v,y,n,s);const S=n.distanceToSquared(s);if(S<b&&(b=S,c&&c.copy(n),u&&u.copy(s),S<d))return Math.sqrt(S)}}return Math.sqrt(b)}}();class Yh{constructor(e){this._getNewPrimitive=e,this._primitives=[]}getPrimitive(){const e=this._primitives;return e.length===0?this._getNewPrimitive():e.pop()}releasePrimitive(e){this._primitives.push(e)}}class uA extends Yh{constructor(){super(()=>new ai)}}const $n=new uA;class hA{constructor(){this.float32Array=null,this.uint16Array=null,this.uint32Array=null;const e=[];let t=null;this.setBuffer=n=>{t&&e.push(t),t=n,this.float32Array=new Float32Array(n),this.uint16Array=new Uint16Array(n),this.uint32Array=new Uint32Array(n)},this.clearBuffer=()=>{t=null,this.float32Array=null,this.uint16Array=null,this.uint32Array=null,e.length!==0&&this.setBuffer(e.pop())}}}const Nt=new hA;let cs,Dr;const vr=[],Ka=new Yh(()=>new Wt);function dA(i,e,t,n,s,r){cs=Ka.getPrimitive(),Dr=Ka.getPrimitive(),vr.push(cs,Dr),Nt.setBuffer(i._roots[e]);const o=sh(0,i.geometry,t,n,s,r);Nt.clearBuffer(),Ka.releasePrimitive(cs),Ka.releasePrimitive(Dr),vr.pop(),vr.pop();const l=vr.length;return l>0&&(Dr=vr[l-1],cs=vr[l-2]),o}function sh(i,e,t,n,s=null,r=0,o=0){const{float32Array:l,uint16Array:c,uint32Array:u}=Nt;let d=i*2;if(En(d,c)){const m=Rn(i,u),g=kn(d,c);return Bt(i,l,cs),n(m,g,!1,o,r+i,cs)}else{let E=function(B){const{uint16Array:W,uint32Array:U}=Nt;let H=B*2;for(;!En(H,W);)B=jn(B),H=B*2;return Rn(B,U)},R=function(B){const{uint16Array:W,uint32Array:U}=Nt;let H=B*2;for(;!En(H,W);)B=Fn(B,U),H=B*2;return Rn(B,U)+kn(H,W)};const m=jn(i),g=Fn(i,u);let b=m,w=g,x,v,M,y;if(s&&(M=cs,y=Dr,Bt(b,l,M),Bt(w,l,y),x=s(M),v=s(y),v<x)){b=g,w=m;const B=x;x=v,v=B,M=y}M||(M=cs,Bt(b,l,M));const S=En(b*2,c),C=t(M,S,x,o+1,r+b);let P;if(C===fm){const B=E(b),U=R(b)-B;P=n(B,U,!0,o+1,r+b,M)}else P=C&&sh(b,e,t,n,s,r,o+1);if(P)return!0;y=Dr,Bt(w,l,y);const T=En(w*2,c),I=t(y,T,v,o+1,r+w);let F;if(I===fm){const B=E(w),U=R(w)-B;F=n(B,U,!0,o+1,r+w,y)}else F=I&&sh(w,e,t,n,s,r,o+1);return!!F}}const Ao=new D,_u=new D;function pA(i,e,t={},n=0,s=1/0){const r=n*n,o=s*s;let l=1/0,c=null;if(i.shapecast({boundsTraverseOrder:d=>(Ao.copy(e).clamp(d.min,d.max),Ao.distanceToSquared(e)),intersectsBounds:(d,p,m)=>m<l&&m<o,intersectsTriangle:(d,p)=>{d.closestPointToPoint(e,Ao);const m=e.distanceToSquared(Ao);return m<l&&(_u.copy(Ao),l=m,c=p),m<r}}),l===1/0)return null;const u=Math.sqrt(l);return t.point?t.point.copy(_u):t.point=_u.clone(),t.distance=u,t.faceIndex=c,t}const _r=new D,xr=new D,br=new D,Za=new Le,Qa=new Le,Ja=new Le,xm=new D,bm=new D,ym=new D,el=new D;function fA(i,e,t,n,s,r){let o;return r===Tn?o=i.intersectTriangle(n,t,e,!0,s):o=i.intersectTriangle(e,t,n,r!==wn,s),o===null?null:{distance:i.origin.distanceTo(s),point:s.clone()}}function mA(i,e,t,n,s,r,o,l,c){_r.fromBufferAttribute(e,r),xr.fromBufferAttribute(e,o),br.fromBufferAttribute(e,l);const u=fA(i,_r,xr,br,el,c);if(u){n&&(Za.fromBufferAttribute(n,r),Qa.fromBufferAttribute(n,o),Ja.fromBufferAttribute(n,l),u.uv=Mn.getInterpolation(el,_r,xr,br,Za,Qa,Ja,new Le)),s&&(Za.fromBufferAttribute(s,r),Qa.fromBufferAttribute(s,o),Ja.fromBufferAttribute(s,l),u.uv1=Mn.getInterpolation(el,_r,xr,br,Za,Qa,Ja,new Le)),t&&(xm.fromBufferAttribute(t,r),bm.fromBufferAttribute(t,o),ym.fromBufferAttribute(t,l),u.normal=Mn.getInterpolation(el,_r,xr,br,xm,bm,ym,new D),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a:r,b:o,c:l,normal:new D,materialIndex:0};Mn.getNormal(_r,xr,br,d.normal),u.face=d,u.faceIndex=r}return u}function ec(i,e,t,n,s){const r=n*3;let o=r+0,l=r+1,c=r+2;const u=i.index;i.index&&(o=u.getX(o),l=u.getX(l),c=u.getX(c));const{position:d,normal:p,uv:m,uv1:g}=i.attributes,b=mA(t,d,p,m,g,o,l,c,e);return b?(b.faceIndex=n,s&&s.push(b),b):null}function Kt(i,e,t,n){const s=i.a,r=i.b,o=i.c;let l=e,c=e+1,u=e+2;t&&(l=t.getX(l),c=t.getX(c),u=t.getX(u)),s.x=n.getX(l),s.y=n.getY(l),s.z=n.getZ(l),r.x=n.getX(c),r.y=n.getY(c),r.z=n.getZ(c),o.x=n.getX(u),o.y=n.getY(u),o.z=n.getZ(u)}function gA(i,e,t,n,s,r){const{geometry:o,_indirectBuffer:l}=i;for(let c=n,u=n+s;c<u;c++)ec(o,e,t,c,r)}function vA(i,e,t,n,s){const{geometry:r,_indirectBuffer:o}=i;let l=1/0,c=null;for(let u=n,d=n+s;u<d;u++){let p;p=ec(r,e,t,u),p&&p.distance<l&&(c=p,l=p.distance)}return c}function _A(i,e,t,n,s,r,o){const{geometry:l}=t,{index:c}=l,u=l.attributes.position;for(let d=i,p=e+i;d<p;d++){let m;if(m=d,Kt(o,m*3,c,u),o.needsUpdate=!0,n(o,m,s,r))return!0}return!1}function xA(i,e=null){e&&Array.isArray(e)&&(e=new Set(e));const t=i.geometry,n=t.index?t.index.array:null,s=t.attributes.position;let r,o,l,c,u=0;const d=i._roots;for(let m=0,g=d.length;m<g;m++)r=d[m],o=new Uint32Array(r),l=new Uint16Array(r),c=new Float32Array(r),p(0,u),u+=r.byteLength;function p(m,g,b=!1){const w=m*2;if(l[w+15]===Jl){const v=o[m+6],M=l[w+14];let y=1/0,S=1/0,C=1/0,P=-1/0,T=-1/0,I=-1/0;for(let F=3*v,E=3*(v+M);F<E;F++){let R=n[F];const B=s.getX(R),W=s.getY(R),U=s.getZ(R);B<y&&(y=B),B>P&&(P=B),W<S&&(S=W),W>T&&(T=W),U<C&&(C=U),U>I&&(I=U)}return c[m+0]!==y||c[m+1]!==S||c[m+2]!==C||c[m+3]!==P||c[m+4]!==T||c[m+5]!==I?(c[m+0]=y,c[m+1]=S,c[m+2]=C,c[m+3]=P,c[m+4]=T,c[m+5]=I,!0):!1}else{const v=m+8,M=o[m+6],y=v+g,S=M+g;let C=b,P=!1,T=!1;e?C||(P=e.has(y),T=e.has(S),C=!P&&!T):(P=!0,T=!0);const I=C||P,F=C||T;let E=!1;I&&(E=p(v,g,C));let R=!1;F&&(R=p(M,g,C));const B=E||R;if(B)for(let W=0;W<3;W++){const U=v+W,H=M+W,G=c[U],X=c[U+3],Q=c[H],Y=c[H+3];c[m+W]=G<Q?G:Q,c[m+W+3]=X>Y?X:Y}return B}}}const wm=new Wt;function ds(i,e,t,n){return Bt(i,e,wm),t.intersectBox(wm,n)}function bA(i,e,t,n,s,r){const{geometry:o,_indirectBuffer:l}=i;for(let c=n,u=n+s;c<u;c++){let d=l?l[c]:c;ec(o,e,t,d,r)}}function yA(i,e,t,n,s){const{geometry:r,_indirectBuffer:o}=i;let l=1/0,c=null;for(let u=n,d=n+s;u<d;u++){let p;p=ec(r,e,t,o?o[u]:u),p&&p.distance<l&&(c=p,l=p.distance)}return c}function wA(i,e,t,n,s,r,o){const{geometry:l}=t,{index:c}=l,u=l.attributes.position;for(let d=i,p=e+i;d<p;d++){let m;if(m=t.resolveTriangleIndex(d),Kt(o,m*3,c,u),o.needsUpdate=!0,n(o,m,s,r))return!0}return!1}const Mm=new D;function MA(i,e,t,n,s){Nt.setBuffer(i._roots[e]),rh(0,i,t,n,s),Nt.clearBuffer()}function rh(i,e,t,n,s){const{float32Array:r,uint16Array:o,uint32Array:l}=Nt,c=i*2;if(En(c,o)){const d=Rn(i,l),p=kn(c,o);gA(e,t,n,d,p,s)}else{const d=jn(i);ds(d,r,n,Mm)&&rh(d,e,t,n,s);const p=Fn(i,l);ds(p,r,n,Mm)&&rh(p,e,t,n,s)}}const Em=new D,EA=["x","y","z"];function SA(i,e,t,n){Nt.setBuffer(i._roots[e]);const s=oh(0,i,t,n);return Nt.clearBuffer(),s}function oh(i,e,t,n){const{float32Array:s,uint16Array:r,uint32Array:o}=Nt;let l=i*2;if(En(l,r)){const u=Rn(i,o),d=kn(l,r);return vA(e,t,n,u,d)}else{const u=$h(i,o),d=EA[u],m=n.direction[d]>=0;let g,b;m?(g=jn(i),b=Fn(i,o)):(g=Fn(i,o),b=jn(i));const x=ds(g,s,n,Em)?oh(g,e,t,n):null;if(x){const y=x.point[d];if(m?y<=s[b+u]:y>=s[b+u+3])return x}const M=ds(b,s,n,Em)?oh(b,e,t,n):null;return x&&M?x.distance<=M.distance?x:M:x||M||null}}const tl=new Wt,yr=new ai,wr=new ai,Co=new je,Sm=new An,nl=new An;function TA(i,e,t,n){Nt.setBuffer(i._roots[e]);const s=ah(0,i,t,n);return Nt.clearBuffer(),s}function ah(i,e,t,n,s=null){const{float32Array:r,uint16Array:o,uint32Array:l}=Nt;let c=i*2;if(s===null&&(t.boundingBox||t.computeBoundingBox(),Sm.set(t.boundingBox.min,t.boundingBox.max,n),s=Sm),En(c,o)){const d=e.geometry,p=d.index,m=d.attributes.position,g=t.index,b=t.attributes.position,w=Rn(i,l),x=kn(c,o);if(Co.copy(n).invert(),t.boundsTree)return Bt(i,r,nl),nl.matrix.copy(Co),nl.needsUpdate=!0,t.boundsTree.shapecast({intersectsBounds:M=>nl.intersectsBox(M),intersectsTriangle:M=>{M.a.applyMatrix4(n),M.b.applyMatrix4(n),M.c.applyMatrix4(n),M.needsUpdate=!0;for(let y=w*3,S=(x+w)*3;y<S;y+=3)if(Kt(wr,y,p,m),wr.needsUpdate=!0,M.intersectsTriangle(wr))return!0;return!1}});for(let v=w*3,M=(x+w)*3;v<M;v+=3){Kt(yr,v,p,m),yr.a.applyMatrix4(Co),yr.b.applyMatrix4(Co),yr.c.applyMatrix4(Co),yr.needsUpdate=!0;for(let y=0,S=g.count;y<S;y+=3)if(Kt(wr,y,g,b),wr.needsUpdate=!0,yr.intersectsTriangle(wr))return!0}}else{const d=i+8,p=l[i+6];return Bt(d,r,tl),!!(s.intersectsBox(tl)&&ah(d,e,t,n,s)||(Bt(p,r,tl),s.intersectsBox(tl)&&ah(p,e,t,n,s)))}}const il=new je,xu=new An,Po=new An,AA=new D,CA=new D,PA=new D,RA=new D;function LA(i,e,t,n={},s={},r=0,o=1/0){e.boundingBox||e.computeBoundingBox(),xu.set(e.boundingBox.min,e.boundingBox.max,t),xu.needsUpdate=!0;const l=i.geometry,c=l.attributes.position,u=l.index,d=e.attributes.position,p=e.index,m=$n.getPrimitive(),g=$n.getPrimitive();let b=AA,w=CA,x=null,v=null;s&&(x=PA,v=RA);let M=1/0,y=null,S=null;return il.copy(t).invert(),Po.matrix.copy(il),i.shapecast({boundsTraverseOrder:C=>xu.distanceToBox(C),intersectsBounds:(C,P,T)=>T<M&&T<o?(P&&(Po.min.copy(C.min),Po.max.copy(C.max),Po.needsUpdate=!0),!0):!1,intersectsRange:(C,P)=>{if(e.boundsTree)return e.boundsTree.shapecast({boundsTraverseOrder:I=>Po.distanceToBox(I),intersectsBounds:(I,F,E)=>E<M&&E<o,intersectsRange:(I,F)=>{for(let E=I,R=I+F;E<R;E++){Kt(g,3*E,p,d),g.a.applyMatrix4(t),g.b.applyMatrix4(t),g.c.applyMatrix4(t),g.needsUpdate=!0;for(let B=C,W=C+P;B<W;B++){Kt(m,3*B,u,c),m.needsUpdate=!0;const U=m.distanceToTriangle(g,b,x);if(U<M&&(w.copy(b),v&&v.copy(x),M=U,y=B,S=E),U<r)return!0}}}});{const T=to(e);for(let I=0,F=T;I<F;I++){Kt(g,3*I,p,d),g.a.applyMatrix4(t),g.b.applyMatrix4(t),g.c.applyMatrix4(t),g.needsUpdate=!0;for(let E=C,R=C+P;E<R;E++){Kt(m,3*E,u,c),m.needsUpdate=!0;const B=m.distanceToTriangle(g,b,x);if(B<M&&(w.copy(b),v&&v.copy(x),M=B,y=E,S=I),B<r)return!0}}}}}),$n.releasePrimitive(m),$n.releasePrimitive(g),M===1/0?null:(n.point?n.point.copy(w):n.point=w.clone(),n.distance=M,n.faceIndex=y,s&&(s.point?s.point.copy(v):s.point=v.clone(),s.point.applyMatrix4(il),w.applyMatrix4(il),s.distance=w.sub(s.point).length(),s.faceIndex=S),n)}function IA(i,e=null){e&&Array.isArray(e)&&(e=new Set(e));const t=i.geometry,n=t.index?t.index.array:null,s=t.attributes.position;let r,o,l,c,u=0;const d=i._roots;for(let m=0,g=d.length;m<g;m++)r=d[m],o=new Uint32Array(r),l=new Uint16Array(r),c=new Float32Array(r),p(0,u),u+=r.byteLength;function p(m,g,b=!1){const w=m*2;if(l[w+15]===Jl){const v=o[m+6],M=l[w+14];let y=1/0,S=1/0,C=1/0,P=-1/0,T=-1/0,I=-1/0;for(let F=v,E=v+M;F<E;F++){const R=3*i.resolveTriangleIndex(F);for(let B=0;B<3;B++){let W=R+B;W=n?n[W]:W;const U=s.getX(W),H=s.getY(W),G=s.getZ(W);U<y&&(y=U),U>P&&(P=U),H<S&&(S=H),H>T&&(T=H),G<C&&(C=G),G>I&&(I=G)}}return c[m+0]!==y||c[m+1]!==S||c[m+2]!==C||c[m+3]!==P||c[m+4]!==T||c[m+5]!==I?(c[m+0]=y,c[m+1]=S,c[m+2]=C,c[m+3]=P,c[m+4]=T,c[m+5]=I,!0):!1}else{const v=m+8,M=o[m+6],y=v+g,S=M+g;let C=b,P=!1,T=!1;e?C||(P=e.has(y),T=e.has(S),C=!P&&!T):(P=!0,T=!0);const I=C||P,F=C||T;let E=!1;I&&(E=p(v,g,C));let R=!1;F&&(R=p(M,g,C));const B=E||R;if(B)for(let W=0;W<3;W++){const U=v+W,H=M+W,G=c[U],X=c[U+3],Q=c[H],Y=c[H+3];c[m+W]=G<Q?G:Q,c[m+W+3]=X>Y?X:Y}return B}}}const Tm=new D;function DA(i,e,t,n,s){Nt.setBuffer(i._roots[e]),lh(0,i,t,n,s),Nt.clearBuffer()}function lh(i,e,t,n,s){const{float32Array:r,uint16Array:o,uint32Array:l}=Nt,c=i*2;if(En(c,o)){const d=Rn(i,l),p=kn(c,o);bA(e,t,n,d,p,s)}else{const d=jn(i);ds(d,r,n,Tm)&&lh(d,e,t,n,s);const p=Fn(i,l);ds(p,r,n,Tm)&&lh(p,e,t,n,s)}}const Am=new D,NA=["x","y","z"];function UA(i,e,t,n){Nt.setBuffer(i._roots[e]);const s=ch(0,i,t,n);return Nt.clearBuffer(),s}function ch(i,e,t,n){const{float32Array:s,uint16Array:r,uint32Array:o}=Nt;let l=i*2;if(En(l,r)){const u=Rn(i,o),d=kn(l,r);return yA(e,t,n,u,d)}else{const u=$h(i,o),d=NA[u],m=n.direction[d]>=0;let g,b;m?(g=jn(i),b=Fn(i,o)):(g=Fn(i,o),b=jn(i));const x=ds(g,s,n,Am)?ch(g,e,t,n):null;if(x){const y=x.point[d];if(m?y<=s[b+u]:y>=s[b+u+3])return x}const M=ds(b,s,n,Am)?ch(b,e,t,n):null;return x&&M?x.distance<=M.distance?x:M:x||M||null}}const sl=new Wt,Mr=new ai,Er=new ai,Ro=new je,Cm=new An,rl=new An;function kA(i,e,t,n){Nt.setBuffer(i._roots[e]);const s=uh(0,i,t,n);return Nt.clearBuffer(),s}function uh(i,e,t,n,s=null){const{float32Array:r,uint16Array:o,uint32Array:l}=Nt;let c=i*2;if(s===null&&(t.boundingBox||t.computeBoundingBox(),Cm.set(t.boundingBox.min,t.boundingBox.max,n),s=Cm),En(c,o)){const d=e.geometry,p=d.index,m=d.attributes.position,g=t.index,b=t.attributes.position,w=Rn(i,l),x=kn(c,o);if(Ro.copy(n).invert(),t.boundsTree)return Bt(i,r,rl),rl.matrix.copy(Ro),rl.needsUpdate=!0,t.boundsTree.shapecast({intersectsBounds:M=>rl.intersectsBox(M),intersectsTriangle:M=>{M.a.applyMatrix4(n),M.b.applyMatrix4(n),M.c.applyMatrix4(n),M.needsUpdate=!0;for(let y=w,S=x+w;y<S;y++)if(Kt(Er,3*e.resolveTriangleIndex(y),p,m),Er.needsUpdate=!0,M.intersectsTriangle(Er))return!0;return!1}});for(let v=w,M=x+w;v<M;v++){const y=e.resolveTriangleIndex(v);Kt(Mr,3*y,p,m),Mr.a.applyMatrix4(Ro),Mr.b.applyMatrix4(Ro),Mr.c.applyMatrix4(Ro),Mr.needsUpdate=!0;for(let S=0,C=g.count;S<C;S+=3)if(Kt(Er,S,g,b),Er.needsUpdate=!0,Mr.intersectsTriangle(Er))return!0}}else{const d=i+8,p=l[i+6];return Bt(d,r,sl),!!(s.intersectsBox(sl)&&uh(d,e,t,n,s)||(Bt(p,r,sl),s.intersectsBox(sl)&&uh(p,e,t,n,s)))}}const ol=new je,bu=new An,Lo=new An,FA=new D,OA=new D,BA=new D,VA=new D;function zA(i,e,t,n={},s={},r=0,o=1/0){e.boundingBox||e.computeBoundingBox(),bu.set(e.boundingBox.min,e.boundingBox.max,t),bu.needsUpdate=!0;const l=i.geometry,c=l.attributes.position,u=l.index,d=e.attributes.position,p=e.index,m=$n.getPrimitive(),g=$n.getPrimitive();let b=FA,w=OA,x=null,v=null;s&&(x=BA,v=VA);let M=1/0,y=null,S=null;return ol.copy(t).invert(),Lo.matrix.copy(ol),i.shapecast({boundsTraverseOrder:C=>bu.distanceToBox(C),intersectsBounds:(C,P,T)=>T<M&&T<o?(P&&(Lo.min.copy(C.min),Lo.max.copy(C.max),Lo.needsUpdate=!0),!0):!1,intersectsRange:(C,P)=>{if(e.boundsTree){const T=e.boundsTree;return T.shapecast({boundsTraverseOrder:I=>Lo.distanceToBox(I),intersectsBounds:(I,F,E)=>E<M&&E<o,intersectsRange:(I,F)=>{for(let E=I,R=I+F;E<R;E++){const B=T.resolveTriangleIndex(E);Kt(g,3*B,p,d),g.a.applyMatrix4(t),g.b.applyMatrix4(t),g.c.applyMatrix4(t),g.needsUpdate=!0;for(let W=C,U=C+P;W<U;W++){const H=i.resolveTriangleIndex(W);Kt(m,3*H,u,c),m.needsUpdate=!0;const G=m.distanceToTriangle(g,b,x);if(G<M&&(w.copy(b),v&&v.copy(x),M=G,y=W,S=E),G<r)return!0}}}})}else{const T=to(e);for(let I=0,F=T;I<F;I++){Kt(g,3*I,p,d),g.a.applyMatrix4(t),g.b.applyMatrix4(t),g.c.applyMatrix4(t),g.needsUpdate=!0;for(let E=C,R=C+P;E<R;E++){const B=i.resolveTriangleIndex(E);Kt(m,3*B,u,c),m.needsUpdate=!0;const W=m.distanceToTriangle(g,b,x);if(W<M&&(w.copy(b),v&&v.copy(x),M=W,y=E,S=I),W<r)return!0}}}}}),$n.releasePrimitive(m),$n.releasePrimitive(g),M===1/0?null:(n.point?n.point.copy(w):n.point=w.clone(),n.distance=M,n.faceIndex=y,s&&(s.point?s.point.copy(v):s.point=v.clone(),s.point.applyMatrix4(ol),w.applyMatrix4(ol),s.distance=w.sub(s.point).length(),s.faceIndex=S),n)}function HA(){return typeof SharedArrayBuffer!="undefined"}const qo=new Nt.constructor,Bl=new Nt.constructor,os=new Yh(()=>new Wt),Sr=new Wt,Tr=new Wt,yu=new Wt,wu=new Wt;let Mu=!1;function GA(i,e,t,n){if(Mu)throw new Error("MeshBVH: Recursive calls to bvhcast not supported.");Mu=!0;const s=i._roots,r=e._roots;let o,l=0,c=0;const u=new je().copy(t).invert();for(let d=0,p=s.length;d<p;d++){qo.setBuffer(s[d]),c=0;const m=os.getPrimitive();Bt(0,qo.float32Array,m),m.applyMatrix4(u);for(let g=0,b=r.length;g<b&&(Bl.setBuffer(r[d]),o=ni(0,0,t,u,n,l,c,0,0,m),Bl.clearBuffer(),c+=r[g].length,!o);g++);if(os.releasePrimitive(m),qo.clearBuffer(),l+=s[d].length,o)break}return Mu=!1,o}function ni(i,e,t,n,s,r=0,o=0,l=0,c=0,u=null,d=!1){let p,m;d?(p=Bl,m=qo):(p=qo,m=Bl);const g=p.float32Array,b=p.uint32Array,w=p.uint16Array,x=m.float32Array,v=m.uint32Array,M=m.uint16Array,y=i*2,S=e*2,C=En(y,w),P=En(S,M);let T=!1;if(P&&C)d?T=s(Rn(e,v),kn(e*2,M),Rn(i,b),kn(i*2,w),c,o+e,l,r+i):T=s(Rn(i,b),kn(i*2,w),Rn(e,v),kn(e*2,M),l,r+i,c,o+e);else if(P){const I=os.getPrimitive();Bt(e,x,I),I.applyMatrix4(t);const F=jn(i),E=Fn(i,b);Bt(F,g,Sr),Bt(E,g,Tr);const R=I.intersectsBox(Sr),B=I.intersectsBox(Tr);T=R&&ni(e,F,n,t,s,o,r,c,l+1,I,!d)||B&&ni(e,E,n,t,s,o,r,c,l+1,I,!d),os.releasePrimitive(I)}else{const I=jn(e),F=Fn(e,v);Bt(I,x,yu),Bt(F,x,wu);const E=u.intersectsBox(yu),R=u.intersectsBox(wu);if(E&&R)T=ni(i,I,t,n,s,r,o,l,c+1,u,d)||ni(i,F,t,n,s,r,o,l,c+1,u,d);else if(E)if(C)T=ni(i,I,t,n,s,r,o,l,c+1,u,d);else{const B=os.getPrimitive();B.copy(yu).applyMatrix4(t);const W=jn(i),U=Fn(i,b);Bt(W,g,Sr),Bt(U,g,Tr);const H=B.intersectsBox(Sr),G=B.intersectsBox(Tr);T=H&&ni(I,W,n,t,s,o,r,c,l+1,B,!d)||G&&ni(I,U,n,t,s,o,r,c,l+1,B,!d),os.releasePrimitive(B)}else if(R)if(C)T=ni(i,F,t,n,s,r,o,l,c+1,u,d);else{const B=os.getPrimitive();B.copy(wu).applyMatrix4(t);const W=jn(i),U=Fn(i,b);Bt(W,g,Sr),Bt(U,g,Tr);const H=B.intersectsBox(Sr),G=B.intersectsBox(Tr);T=H&&ni(F,W,n,t,s,o,r,c,l+1,B,!d)||G&&ni(F,U,n,t,s,o,r,c,l+1,B,!d),os.releasePrimitive(B)}}return T}const al=new An,Pm=new Wt,WA={strategy:N0,maxDepth:40,maxLeafTris:10,useSharedArrayBuffer:!1,setBoundingBox:!0,onProgress:null,indirect:!1,verbose:!0};class Kh{static serialize(e,t={}){t={cloneBuffers:!0,...t};const n=e.geometry,s=e._roots,r=e._indirectBuffer,o=n.getIndex();let l;return t.cloneBuffers?l={roots:s.map(c=>c.slice()),index:o.array.slice(),indirectBuffer:r?r.slice():null}:l={roots:s,index:o.array,indirectBuffer:r},l}static deserialize(e,t,n={}){n={setIndex:!0,indirect:Boolean(e.indirectBuffer),...n};const{index:s,roots:r,indirectBuffer:o}=e,l=new Kh(t,{...n,[fu]:!0});if(l._roots=r,l._indirectBuffer=o||null,n.setIndex){const c=t.getIndex();if(c===null){const u=new Dt(e.index,1,!1);t.setIndex(u)}else c.array!==s&&(c.array.set(s),c.needsUpdate=!0)}return l}get indirect(){return!!this._indirectBuffer}constructor(e,t={}){if(e.isBufferGeometry){if(e.index&&e.index.isInterleavedBufferAttribute)throw new Error("MeshBVH: InterleavedBufferAttribute is not supported for the index attribute.")}else throw new Error("MeshBVH: Only BufferGeometries are supported.");if(t=Object.assign({...WA,[fu]:!1},t),t.useSharedArrayBuffer&&!HA())throw new Error("MeshBVH: SharedArrayBuffer is not available.");this.geometry=e,this._roots=null,this._indirectBuffer=null,t[fu]||(oA(this,t),!e.boundingBox&&t.setBoundingBox&&(e.boundingBox=this.getBoundingBox(new Wt)));const{_indirectBuffer:n}=this;this.resolveTriangleIndex=t.indirect?s=>n[s]:s=>s}refit(e=null){return(this.indirect?IA:xA)(this,e)}traverse(e,t=0){const n=this._roots[t],s=new Uint32Array(n),r=new Uint16Array(n);o(0);function o(l,c=0){const u=l*2,d=r[u+15]===Jl;if(d){const p=s[l+6],m=r[u+14];e(c,d,new Float32Array(n,l*4,6),p,m)}else{const p=l+hs/4,m=s[l+6],g=s[l+7];e(c,d,new Float32Array(n,l*4,6),g)||(o(p,c+1),o(m,c+1))}}}raycast(e,t=oi){const n=this._roots,s=this.geometry,r=[],o=t.isMaterial,l=Array.isArray(t),c=s.groups,u=o?t.side:t,d=this.indirect?DA:MA;for(let p=0,m=n.length;p<m;p++){const g=l?t[c[p].materialIndex].side:u,b=r.length;if(d(this,p,g,e,r),l){const w=c[p].materialIndex;for(let x=b,v=r.length;x<v;x++)r[x].face.materialIndex=w}}return r}raycastFirst(e,t=oi){const n=this._roots,s=this.geometry,r=t.isMaterial,o=Array.isArray(t);let l=null;const c=s.groups,u=r?t.side:t,d=this.indirect?UA:SA;for(let p=0,m=n.length;p<m;p++){const g=o?t[c[p].materialIndex].side:u,b=d(this,p,g,e);b!=null&&(l==null||b.distance<l.distance)&&(l=b,o&&(b.face.materialIndex=c[p].materialIndex))}return l}intersectsGeometry(e,t){let n=!1;const s=this._roots,r=this.indirect?kA:TA;for(let o=0,l=s.length;o<l&&(n=r(this,o,e,t),!n);o++);return n}shapecast(e){const t=$n.getPrimitive(),n=this.indirect?wA:_A;let{boundsTraverseOrder:s,intersectsBounds:r,intersectsRange:o,intersectsTriangle:l}=e;if(o&&l){const p=o;o=(m,g,b,w,x)=>p(m,g,b,w,x)?!0:n(m,g,this,l,b,w,t)}else o||(l?o=(p,m,g,b)=>n(p,m,this,l,g,b,t):o=(p,m,g)=>g);let c=!1,u=0;const d=this._roots;for(let p=0,m=d.length;p<m;p++){const g=d[p];if(c=dA(this,p,r,o,s,u),c)break;u+=g.byteLength}return $n.releasePrimitive(t),c}bvhcast(e,t,n){let{intersectsRanges:s,intersectsTriangles:r}=n;const o=$n.getPrimitive(),l=this.geometry.index,c=this.geometry.attributes.position,u=this.indirect?b=>{const w=this.resolveTriangleIndex(b);Kt(o,w*3,l,c)}:b=>{Kt(o,b*3,l,c)},d=$n.getPrimitive(),p=e.geometry.index,m=e.geometry.attributes.position,g=e.indirect?b=>{const w=e.resolveTriangleIndex(b);Kt(d,w*3,p,m)}:b=>{Kt(d,b*3,p,m)};if(r){const b=(w,x,v,M,y,S,C,P)=>{for(let T=v,I=v+M;T<I;T++){g(T),d.a.applyMatrix4(t),d.b.applyMatrix4(t),d.c.applyMatrix4(t),d.needsUpdate=!0;for(let F=w,E=w+x;F<E;F++)if(u(F),o.needsUpdate=!0,r(o,d,F,T,y,S,C,P))return!0}return!1};if(s){const w=s;s=function(x,v,M,y,S,C,P,T){return w(x,v,M,y,S,C,P,T)?!0:b(x,v,M,y,S,C,P,T)}}else s=b}return GA(this,e,t,s)}intersectsBox(e,t){return al.set(e.min,e.max,t),al.needsUpdate=!0,this.shapecast({intersectsBounds:n=>al.intersectsBox(n),intersectsTriangle:n=>al.intersectsTriangle(n)})}intersectsSphere(e){return this.shapecast({intersectsBounds:t=>e.intersectsBox(t),intersectsTriangle:t=>t.intersectsSphere(e)})}closestPointToGeometry(e,t,n={},s={},r=0,o=1/0){return(this.indirect?zA:LA)(this,e,t,n,s,r,o)}closestPointToPoint(e,t={},n=0,s=1/0){return pA(this,e,t,n,s)}getBoundingBox(e){return e.makeEmpty(),this._roots.forEach(n=>{Bt(0,new Float32Array(n),Pm),e.union(Pm)}),e}}function XA(i){switch(i){case 1:return"R";case 2:return"RG";case 3:return"RGBA";case 4:return"RGBA"}throw new Error}function jA(i){switch(i){case 1:return $g;case 2:return qg;case 3:return Yt;case 4:return Yt}}function Rm(i){switch(i){case 1:return Rh;case 2:return jl;case 3:return Zo;case 4:return Zo}}class z0 extends Os{constructor(){super(),this.minFilter=mt,this.magFilter=mt,this.generateMipmaps=!1,this.overrideItemSize=null,this._forcedType=null}updateFrom(e){const t=this.overrideItemSize,n=e.itemSize,s=e.count;if(t!==null){if(n*s%t!==0)throw new Error("VertexAttributeTexture: overrideItemSize must divide evenly into buffer length.");e.itemSize=t,e.count=s*n/t}const r=e.itemSize,o=e.count,l=e.normalized,c=e.array.constructor,u=c.BYTES_PER_ELEMENT;let d=this._forcedType,p=r;if(d===null)switch(c){case Float32Array:d=wt;break;case Uint8Array:case Uint16Array:case Uint32Array:d=Un;break;case Int8Array:case Int16Array:case Int32Array:d=Wo;break}let m,g,b,w,x=XA(r);switch(d){case wt:b=1,g=jA(r),l&&u===1?(w=c,x+="8",c===Uint8Array?m=mi:(m=Wu,x+="_SNORM")):(w=Float32Array,x+="32F",m=wt);break;case Wo:x+=u*8+"I",b=l?Math.pow(2,c.BYTES_PER_ELEMENT*8-1):1,g=Rm(r),u===1?(w=Int8Array,m=Wu):u===2?(w=Int16Array,m=Wg):(w=Int32Array,m=Wo);break;case Un:x+=u*8+"UI",b=l?Math.pow(2,c.BYTES_PER_ELEMENT*8-1):1,g=Rm(r),u===1?(w=Uint8Array,m=mi):u===2?(w=Uint16Array,m=Xl):(w=Uint32Array,m=Un);break}p===3&&(g===Yt||g===Zo)&&(p=4);const v=Math.ceil(Math.sqrt(o))||1,M=p*v*v,y=new w(M),S=e.normalized;e.normalized=!1;for(let C=0;C<o;C++){const P=p*C;y[P]=e.getX(C)/b,r>=2&&(y[P+1]=e.getY(C)/b),r>=3&&(y[P+2]=e.getZ(C)/b,p===4&&(y[P+3]=1)),r>=4&&(y[P+3]=e.getW(C)/b)}e.normalized=S,this.internalFormat=x,this.format=g,this.type=m,this.image.width=v,this.image.height=v,this.image.data=y,this.needsUpdate=!0,this.dispose(),e.itemSize=n,e.count=s}}class $A extends z0{constructor(){super(),this._forcedType=Un}}class qA extends z0{constructor(){super(),this._forcedType=wt}}class H0{constructor(){this.index=new $A,this.position=new qA,this.bvhBounds=new Os,this.bvhContents=new Os,this._cachedIndexAttr=null,this.index.overrideItemSize=3}updateFrom(e){const{geometry:t}=e;if(KA(e,this.bvhBounds,this.bvhContents),this.position.updateFrom(t.attributes.position),e.indirect){const n=e._indirectBuffer;if(this._cachedIndexAttr===null||this._cachedIndexAttr.count!==n.length)if(t.index)this._cachedIndexAttr=t.index.clone();else{const s=k0(U0(t));this._cachedIndexAttr=new Dt(s,1,!1)}YA(t,n,this._cachedIndexAttr),this.index.updateFrom(this._cachedIndexAttr)}else this.index.updateFrom(t.index)}dispose(){const{index:e,position:t,bvhBounds:n,bvhContents:s}=this;e&&e.dispose(),t&&t.dispose(),n&&n.dispose(),s&&s.dispose()}}function YA(i,e,t){const n=t.array,s=i.index?i.index.array:null;for(let r=0,o=e.length;r<o;r++){const l=3*r,c=3*e[r];for(let u=0;u<3;u++)n[l+u]=s?s[c+u]:c+u}}function KA(i,e,t){const n=i._roots;if(n.length!==1)throw new Error("MeshBVHUniformStruct: Multi-root BVHs not supported.");const s=n[0],r=new Uint16Array(s),o=new Uint32Array(s),l=new Float32Array(s),c=s.byteLength/hs,u=2*Math.ceil(Math.sqrt(c/2)),d=new Float32Array(4*u*u),p=Math.ceil(Math.sqrt(c)),m=new Uint32Array(2*p*p);for(let g=0;g<c;g++){const b=g*hs/4,w=b*2,x=b;for(let v=0;v<3;v++)d[8*g+0+v]=l[x+0+v],d[8*g+4+v]=l[x+3+v];if(En(w,r)){const v=kn(w,r),M=Rn(b,o),y=4294901760|v;m[g*2+0]=y,m[g*2+1]=M}else{const v=4*Fn(b,o)/hs,M=$h(b,o);m[g*2+0]=M,m[g*2+1]=v}}e.image.data=d,e.image.width=u,e.image.height=u,e.format=Yt,e.type=wt,e.internalFormat="RGBA32F",e.minFilter=mt,e.magFilter=mt,e.generateMipmaps=!1,e.needsUpdate=!0,e.dispose(),t.image.data=m,t.image.width=p,t.image.height=p,t.format=jl,t.type=Un,t.internalFormat="RG32UI",t.minFilter=mt,t.magFilter=mt,t.generateMipmaps=!1,t.needsUpdate=!0,t.dispose()}const ZA=`

// A stack of uint32 indices can can store the indices for
// a perfectly balanced tree with a depth up to 31. Lower stack
// depth gets higher performance.
//
// However not all trees are balanced. Best value to set this to
// is the trees max depth.
#ifndef BVH_STACK_DEPTH
#define BVH_STACK_DEPTH 60
#endif

#ifndef INFINITY
#define INFINITY 1e20
#endif

// Utilities
uvec4 uTexelFetch1D( usampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

ivec4 iTexelFetch1D( isampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

vec4 texelFetch1D( sampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

vec4 textureSampleBarycoord( sampler2D tex, vec3 barycoord, uvec3 faceIndices ) {

	return
		barycoord.x * texelFetch1D( tex, faceIndices.x ) +
		barycoord.y * texelFetch1D( tex, faceIndices.y ) +
		barycoord.z * texelFetch1D( tex, faceIndices.z );

}

void ndcToCameraRay(
	vec2 coord, mat4 cameraWorld, mat4 invProjectionMatrix,
	out vec3 rayOrigin, out vec3 rayDirection
) {

	// get camera look direction and near plane for camera clipping
	vec4 lookDirection = cameraWorld * vec4( 0.0, 0.0, - 1.0, 0.0 );
	vec4 nearVector = invProjectionMatrix * vec4( 0.0, 0.0, - 1.0, 1.0 );
	float near = abs( nearVector.z / nearVector.w );

	// get the camera direction and position from camera matrices
	vec4 origin = cameraWorld * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec4 direction = invProjectionMatrix * vec4( coord, 0.5, 1.0 );
	direction /= direction.w;
	direction = cameraWorld * direction - origin;

	// slide the origin along the ray until it sits at the near clip plane position
	origin.xyz += direction.xyz * near / dot( direction, lookDirection );

	rayOrigin = origin.xyz;
	rayDirection = direction.xyz;

}
`,QA=`

#ifndef TRI_INTERSECT_EPSILON
#define TRI_INTERSECT_EPSILON 1e-5
#endif

// Raycasting
bool intersectsBounds( vec3 rayOrigin, vec3 rayDirection, vec3 boundsMin, vec3 boundsMax, out float dist ) {

	// https://www.reddit.com/r/opengl/comments/8ntzz5/fast_glsl_ray_box_intersection/
	// https://tavianator.com/2011/ray_box.html
	vec3 invDir = 1.0 / rayDirection;

	// find intersection distances for each plane
	vec3 tMinPlane = invDir * ( boundsMin - rayOrigin );
	vec3 tMaxPlane = invDir * ( boundsMax - rayOrigin );

	// get the min and max distances from each intersection
	vec3 tMinHit = min( tMaxPlane, tMinPlane );
	vec3 tMaxHit = max( tMaxPlane, tMinPlane );

	// get the furthest hit distance
	vec2 t = max( tMinHit.xx, tMinHit.yz );
	float t0 = max( t.x, t.y );

	// get the minimum hit distance
	t = min( tMaxHit.xx, tMaxHit.yz );
	float t1 = min( t.x, t.y );

	// set distance to 0.0 if the ray starts inside the box
	dist = max( t0, 0.0 );

	return t1 >= dist;

}

bool intersectsTriangle(
	vec3 rayOrigin, vec3 rayDirection, vec3 a, vec3 b, vec3 c,
	out vec3 barycoord, out vec3 norm, out float dist, out float side
) {

	// https://stackoverflow.com/questions/42740765/intersection-between-line-and-triangle-in-3d
	vec3 edge1 = b - a;
	vec3 edge2 = c - a;
	norm = cross( edge1, edge2 );

	float det = - dot( rayDirection, norm );
	float invdet = 1.0 / det;

	vec3 AO = rayOrigin - a;
	vec3 DAO = cross( AO, rayDirection );

	vec4 uvt;
	uvt.x = dot( edge2, DAO ) * invdet;
	uvt.y = - dot( edge1, DAO ) * invdet;
	uvt.z = dot( AO, norm ) * invdet;
	uvt.w = 1.0 - uvt.x - uvt.y;

	// set the hit information
	barycoord = uvt.wxy; // arranged in A, B, C order
	dist = uvt.z;
	side = sign( det );
	norm = side * normalize( norm );

	// add an epsilon to avoid misses between triangles
	uvt += vec4( TRI_INTERSECT_EPSILON );

	return all( greaterThanEqual( uvt, vec4( 0.0 ) ) );

}

bool intersectTriangles(
	// geometry info and triangle range
	sampler2D positionAttr, usampler2D indexAttr, uint offset, uint count,

	// ray
	vec3 rayOrigin, vec3 rayDirection,

	// outputs
	inout float minDistance, inout uvec4 faceIndices, inout vec3 faceNormal, inout vec3 barycoord,
	inout float side, inout float dist
) {

	bool found = false;
	vec3 localBarycoord, localNormal;
	float localDist, localSide;
	for ( uint i = offset, l = offset + count; i < l; i ++ ) {

		uvec3 indices = uTexelFetch1D( indexAttr, i ).xyz;
		vec3 a = texelFetch1D( positionAttr, indices.x ).rgb;
		vec3 b = texelFetch1D( positionAttr, indices.y ).rgb;
		vec3 c = texelFetch1D( positionAttr, indices.z ).rgb;

		if (
			intersectsTriangle( rayOrigin, rayDirection, a, b, c, localBarycoord, localNormal, localDist, localSide )
			&& localDist < minDistance
		) {

			found = true;
			minDistance = localDist;

			faceIndices = uvec4( indices.xyz, i );
			faceNormal = localNormal;

			side = localSide;
			barycoord = localBarycoord;
			dist = localDist;

		}

	}

	return found;

}

bool intersectsBVHNodeBounds( vec3 rayOrigin, vec3 rayDirection, sampler2D bvhBounds, uint currNodeIndex, out float dist ) {

	uint cni2 = currNodeIndex * 2u;
	vec3 boundsMin = texelFetch1D( bvhBounds, cni2 ).xyz;
	vec3 boundsMax = texelFetch1D( bvhBounds, cni2 + 1u ).xyz;
	return intersectsBounds( rayOrigin, rayDirection, boundsMin, boundsMax, dist );

}

// use a macro to hide the fact that we need to expand the struct into separate fields
#define	bvhIntersectFirstHit(		bvh,		rayOrigin, rayDirection, faceIndices, faceNormal, barycoord, side, dist	)	_bvhIntersectFirstHit(		bvh.position, bvh.index, bvh.bvhBounds, bvh.bvhContents,		rayOrigin, rayDirection, faceIndices, faceNormal, barycoord, side, dist	)

bool _bvhIntersectFirstHit(
	// bvh info
	sampler2D bvh_position, usampler2D bvh_index, sampler2D bvh_bvhBounds, usampler2D bvh_bvhContents,

	// ray
	vec3 rayOrigin, vec3 rayDirection,

	// output variables split into separate variables due to output precision
	inout uvec4 faceIndices, inout vec3 faceNormal, inout vec3 barycoord,
	inout float side, inout float dist
) {

	// stack needs to be twice as long as the deepest tree we expect because
	// we push both the left and right child onto the stack every traversal
	int ptr = 0;
	uint stack[ BVH_STACK_DEPTH ];
	stack[ 0 ] = 0u;

	float triangleDistance = INFINITY;
	bool found = false;
	while ( ptr > - 1 && ptr < BVH_STACK_DEPTH ) {

		uint currNodeIndex = stack[ ptr ];
		ptr --;

		// check if we intersect the current bounds
		float boundsHitDistance;
		if (
			! intersectsBVHNodeBounds( rayOrigin, rayDirection, bvh_bvhBounds, currNodeIndex, boundsHitDistance )
			|| boundsHitDistance > triangleDistance
		) {

			continue;

		}

		uvec2 boundsInfo = uTexelFetch1D( bvh_bvhContents, currNodeIndex ).xy;
		bool isLeaf = bool( boundsInfo.x & 0xffff0000u );

		if ( isLeaf ) {

			uint count = boundsInfo.x & 0x0000ffffu;
			uint offset = boundsInfo.y;

			found = intersectTriangles(
				bvh_position, bvh_index, offset, count,
				rayOrigin, rayDirection, triangleDistance,
				faceIndices, faceNormal, barycoord, side, dist
			) || found;

		} else {

			uint leftIndex = currNodeIndex + 1u;
			uint splitAxis = boundsInfo.x & 0x0000ffffu;
			uint rightIndex = boundsInfo.y;

			bool leftToRight = rayDirection[ splitAxis ] >= 0.0;
			uint c1 = leftToRight ? leftIndex : rightIndex;
			uint c2 = leftToRight ? rightIndex : leftIndex;

			// set c2 in the stack so we traverse it later. We need to keep track of a pointer in
			// the stack while we traverse. The second pointer added is the one that will be
			// traversed first
			ptr ++;
			stack[ ptr ] = c2;

			ptr ++;
			stack[ ptr ] = c1;

		}

	}

	return found;

}
`,JA=`
struct BVH {

	usampler2D index;
	sampler2D position;

	sampler2D bvhBounds;
	usampler2D bvhContents;

};
`,G0=JA,W0=`
	${ZA}
	${QA}
`;class eC extends nn{customProgramCacheKey(){return"LightmapperMaterial|glsl3|mrt2"}constructor(e){const t=new H0;t.updateFrom(e.bvh),super({transparent:!0,glslVersion:Kn,depthTest:!1,depthWrite:!1,uniforms:{bvh:{value:t},positions:{value:e.positions},normals:{value:e.normals},albedoTex:{value:e.albedoTex},emissiveTex:{value:e.emissiveTex},materialTextureSize:{value:e.materialTextureSize},invModelMatrix:{value:e.invModelMatrix},casts:{value:e.casts},bounces:{value:e.bounces},lightsTex:{value:e.lightsTex},lightCount:{value:e.lightCount},skyColor:{value:e.skyColor},skyIntensity:{value:e.skyIntensity},opacity:{value:1},sampleIndex:{value:0},directLightEnabled:{value:e.directLightEnabled},indirectLightEnabled:{value:e.indirectLightEnabled}},vertexShader:`
                out vec2 vUv;
                void main() {
                    gl_Position = vec4( position, 1.0 );
                    vUv = uv;
                }
            `,fragmentShader:`
                /*
                 * Lightmap Bake \u2014 Fragment Shader (GLSL3).
                 *
                 * Inputs:
                 *   positions / normals  : G-buffer textures keyed by lightmap UV
                 *   bvh                  : MeshBVH uniform struct of the merged scene
                 *   albedoTex/emissiveTex: per-triangle material lookup (W\xD7W float)
                 *   lightsTex            : 4-wide \xD7 lightCount-tall RGBA float texture
                 *                         texel(0,i)=pos+type, (1,i)=dir+p0,
                 *                         (2,i)=color+p1, (3,i)=p2,p3,0,0
                 *
                 * Outputs (MRT):
                 *   directOut   : raw direct irradiance (no surface albedo applied)
                 *   indirectOut : N-bounce GI + sky on miss
                 *
                 * AO has been split into a separate pass \u2014 see AOMaterial.ts.
                 *
                 * directOut convention: stores "incoming light per unit albedo".
                 * Material color is applied at composite/view time. This matches
                 * the pre-7C energy balance for the single-light case.
                 *
                 * Progressive accumulation: opacity = 1/(n+1), done by the caller.
                 */
                precision highp float;
                precision highp sampler2D;
                precision highp isampler2D;
                precision highp usampler2D;
                ${G0}
                ${W0}

                uniform mat4 invModelMatrix;
                uniform sampler2D positions;
                uniform sampler2D normals;

                // Per-triangle material lookup (Task 03). Indexed by faceIndices.w.
                uniform sampler2D albedoTex;
                uniform sampler2D emissiveTex;
                uniform float materialTextureSize;

                #define MAX_BOUNCES 4
                // Static upper cap on lights checked per shadow loop iteration.
                // Runtime count is controlled by the lightCount uniform.
                #define MAX_LIGHTS 16

                uniform int casts;
                uniform int bounces;

                // Multi-light texture: 4 texels wide \xD7 lightCount tall, RGBA float.
                uniform sampler2D lightsTex;
                uniform int lightCount;

                uniform vec3 skyColor;
                uniform float skyIntensity;
                uniform int sampleIndex;

                uniform bool directLightEnabled;
                uniform bool indirectLightEnabled;
                uniform float opacity;

                uniform BVH bvh;
                in vec2 vUv;

                layout(location = 0) out vec4 directOut;
                layout(location = 1) out vec4 indirectOut;

                // \u2500\u2500 RNG \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500

                uvec4 s0;
                void rng_initialize(vec2 p, int frame) {
                    s0 = uvec4( uint(p.x), uint(p.y), uint( frame ), uint( p.x ) + uint( p.y ) );
                }
                void pcg4d( inout uvec4 v ) {
                    v = v * 1664525u + 1013904223u;
                    v.x += v.y * v.w; v.y += v.z * v.x;
                    v.z += v.x * v.y; v.w += v.y * v.z;
                    v = v ^ ( v >> 16u );
                    v.x += v.y*v.w; v.y += v.z*v.x;
                    v.z += v.x*v.y; v.w += v.y*v.z;
                }
                float rand()  { pcg4d(s0); return float(s0.x) / float(0xffffffffu); }
                vec2  rand2() { pcg4d(s0); return vec2(s0.xy) / float(0xffffffffu); }
                vec3  rand3() { pcg4d(s0); return vec3(s0.xyz) / float(0xffffffffu); }
                vec4  rand4() { pcg4d(s0); return vec4(s0) / float(0xffffffffu); }

                // \u2500\u2500 Geometry helpers \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500

                vec3 randomSpherePoint(vec3 r) {
                    float ang1 = (r.x + 1.0) * 3.1415;
                    float u = r.y; float u2 = u * u;
                    float s = sqrt(max(0.0, 1.0 - u2));
                    return vec3(s * cos(ang1), s * sin(ang1), u);
                }

                vec3 getHemisphereSample( vec3 n, vec2 uv ) {
                    float s = n.z == 0.0 ? 1.0 : sign(n.z);
                    float a = -1.0 / (s + n.z);
                    float b = n.x * n.y * a;
                    vec3 b1 = vec3(1.0 + s * n.x * n.x * a, s * b, -s * n.x);
                    vec3 b2 = vec3(b, s + n.y * n.y * a, -n.y);
                    float r = sqrt(uv.x);
                    float theta = 2.0 * 3.1415 * uv.y;
                    return r * cos(theta) * b1 + r * sin(theta) * b2 + sqrt(1.0 - uv.x) * n;
                }

                // \u2500\u2500 Material lookup \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500

                vec3 readTriangleMaterial(sampler2D tex, uint triIdx) {
                    uint W = uint(materialTextureSize);
                    vec2 uv = (vec2(triIdx % W, triIdx / W) + 0.5) / materialTextureSize;
                    return texture(tex, uv).rgb;
                }

                // \u2500\u2500 Light texture access \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500

                /**
                 * Read texel (slot, lightIdx) from the 4-wide light texture.
                 * slot \u2208 {0,1,2,3}. Guard: only call when lightCount > 0.
                 */
                vec4 readLight(int lightIdx, int slot) {
                    vec2 uv = (vec2(float(slot), float(lightIdx)) + 0.5)
                              / vec2(4.0, float(lightCount));
                    return texture(lightsTex, uv);
                }

                // \u2500\u2500 Light sampling \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500

                struct LightSample {
                    vec3  L;         // unit direction from hit toward light
                    float distance;  // distance to light (1e6 for directional)
                    vec3  emission;  // color * falloff (0 = skip shadow ray)
                };

                /**
                 * Sample light li at hitPos / hitNormal using 2D random input rnd.
                 * Directional jitter uses tan(angularSize) approximation \u2014 valid for
                 * small angles (sun disc \u2272 5\xB0). Larger values over-bias the direction.
                 */
                LightSample sampleLight(int li, vec3 hitPos, vec3 hitNormal, vec2 rnd) {
                    vec4 t0 = readLight(li, 0);
                    vec4 t1 = readLight(li, 1);
                    vec4 t2 = readLight(li, 2);
                    vec4 t3 = readLight(li, 3);
                    int  ltype  = int(t0.w + 0.5);
                    vec3 lpos   = t0.xyz;
                    vec3 ldir   = normalize(t1.xyz);
                    vec3 lcolor = t2.xyz;
                    float p0 = t1.w, p1 = t2.w; // p2=t3.x, p3=t3.y available if needed

                    LightSample s;
                    s.emission = vec3(0.0);
                    s.distance = 1e6;

                    if (ltype == 0) {
                        // Point \u2014 sphere jitter for soft shadows (radius = p0).
                        vec3 jitter = (p0 > 0.0) ? randomSpherePoint(vec3(rnd, rand())) * p0
                                                  : vec3(0.0);
                        vec3 d = (lpos + jitter) - hitPos;
                        s.distance = max(length(d), 1e-5);
                        s.L        = d / s.distance;
                        s.emission = lcolor;
                    }
                    else if (ltype == 1) {
                        // Directional \u2014 effectively infinite distance.
                        vec3 baseL = -ldir;
                        vec3 jitter = (p0 > 0.0)
                            ? randomSpherePoint(vec3(rnd, rand())) * tan(p0)
                            : vec3(0.0);
                        s.L        = normalize(baseL + jitter);
                        s.distance = 1e6;
                        s.emission = lcolor;
                    }
                    else if (ltype == 2) {
                        // Spot \u2014 point source with angular cone falloff.
                        // p0 = innerAngleCos, p1 = outerAngleCos.
                        vec3 d = lpos - hitPos;
                        s.distance = max(length(d), 1e-5);
                        s.L = d / s.distance;
                        float cosAngle = dot(-s.L, ldir);
                        float falloff  = clamp((cosAngle - p1) / max(p0 - p1, 1e-5), 0.0, 1.0);
                        s.emission = lcolor * falloff;
                    }
                    else {
                        // Area \u2014 rectangle centered at lpos, normal = ldir, width=p0, height=p1.
                        vec3 up = abs(ldir.y) < 0.999 ? vec3(0.0, 1.0, 0.0) : vec3(1.0, 0.0, 0.0);
                        vec3 tu = normalize(cross(up, ldir));
                        vec3 tv = cross(ldir, tu);
                        vec2 luv = rnd - 0.5;
                        vec3 sample_pos = lpos + tu * (luv.x * p0) + tv * (luv.y * p1);
                        vec3 d = sample_pos - hitPos;
                        s.distance = max(length(d), 1e-5);
                        s.L = d / s.distance;
                        // One-sided emission: only emits in -ldir hemisphere.
                        s.emission = lcolor * max(0.0, dot(-s.L, ldir));
                    }
                    return s;
                }

                // \u2500\u2500 NEE (Next Event Estimation) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500

                /**
                 * Sum NEE contributions from ALL lights at a hit point.
                 * One shadow ray per light. hitAlbedo: pass vec3(1.0) for the
                 * direct channel (raw irradiance); pass surface albedo for GI bounces.
                 * NaN guard: bvhIntersectFirstHit out-param sd initialised to 0.
                 */
                vec3 sampleAllLightsNEE(vec3 hitPos, vec3 hitNormal, vec3 hitAlbedo) {
                    if (lightCount <= 0) return vec3(0.0);
                    vec3 sum = vec3(0.0);
                    vec3 bary = vec3(0.0); float sideVal = 1.0;
                    for (int li = 0; li < MAX_LIGHTS; li++) {
                        if (li >= lightCount) break;
                        LightSample ls = sampleLight(li, hitPos, hitNormal, rand4().xy);
                        if (ls.emission == vec3(0.0)) continue;
                        float cosL = max(0.0, dot(hitNormal, ls.L));
                        if (cosL <= 0.0) continue;
                        vec3 shadowOrigin = hitPos + hitNormal * 0.001;
                        uvec4 sfi = uvec4(0u); vec3 sfn = vec3(0.0,0.0,1.0); float sd = 0.0;
                        bool occ = bvhIntersectFirstHit(bvh, shadowOrigin, ls.L, sfi, sfn, bary, sideVal, sd);
                        if (occ && sd < ls.distance - 0.001) continue;
                        // 1/PI dropped \u2014 matches pre-7C energy balance convention.
                        sum += hitAlbedo * cosL * ls.emission;
                    }
                    return sum;
                }

                // \u2500\u2500 Path tracer \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500

                /**
                 * N-bounce path tracer. Called once per hemisphere cast.
                 * faceNormal from three-mesh-bvh is already side-flipped.
                 * DO NOT re-flip \u2014 re-flipping pushes shadow origins into surfaces.
                 */
                vec3 tracePath(
                    vec3 ro, vec3 rd,
                    bool hit, uvec4 fi, vec3 fn, float fd
                ) {
                    vec3 throughput = vec3(1.0);
                    vec3 radiance   = vec3(0.0);
                    vec3 bary = vec3(0.0);
                    float sideVal = 1.0;

                    for (int b = 0; b < MAX_BOUNCES; b++) {
                        if (b >= bounces) break;
                        if (!hit) {
                            if (b == 0) radiance += throughput * skyColor * skyIntensity;
                            break;
                        }

                        vec3 hitAlbedo   = readTriangleMaterial(albedoTex,   fi.w);
                        vec3 hitEmissive = readTriangleMaterial(emissiveTex, fi.w);
                        vec3 hitPos      = ro + rd * fd;
                        vec3 hitNormal   = fn;
                        vec3 hitOrigin   = hitPos + hitNormal * 0.001;

                        // (a) Emissive surface contribution.
                        radiance += throughput * hitEmissive;

                        // (b) NEE \u2014 all lights, with surface albedo (GI bounce).
                        radiance += throughput * sampleAllLightsNEE(hitOrigin, hitNormal, hitAlbedo);

                        // (c) Throughput update \u2014 cosine/PDF cancel.
                        throughput *= hitAlbedo;

                        // (d) Russian Roulette from bounce 2 onward.
                        if (b >= 2) {
                            float p = clamp(max(throughput.r, max(throughput.g, throughput.b)), 0.0, 1.0);
                            if (rand() > p) break;
                            throughput /= max(p, 1e-4);
                        }

                        // (e) Next bounce \u2014 cosine-weighted hemisphere.
                        ro  = hitOrigin;
                        rd  = getHemisphereSample(hitNormal, rand4().xy);
                        fd  = 0.0;
                        hit = bvhIntersectFirstHit(bvh, ro, rd, fi, fn, bary, sideVal, fd);
                    }
                    return radiance;
                }

                // \u2500\u2500 Main \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500

                void main() {
                    vec4 position = texture(positions, vUv);
                    vec4 normal   = texture(normals,   vUv);

                    rng_initialize(gl_FragCoord.xy, sampleIndex);

                    vec3 rayOrigin    = position.rgb;
                    vec3 rayDirection = normal.rgb;
                    rayOrigin += rayDirection * 0.001;

                    uvec4 faceIndices = uvec4(0u);
                    vec3  faceNormal  = vec3(0.0, 0.0, 1.0);
                    vec3  barycoord   = vec3(0.0);
                    float side        = 1.0;
                    float dist        = 0.0;

                    vec3  totalIndirectLight = vec3(0.0);
                    vec3  totalDirectLight   = vec3(0.0);

                    // Indirect bounce loop. AO has been moved to its own pass
                    // (AOMaterial / AOMapper) so AO sliders can be tweaked
                    // without a bounce re-bake.
                    if (indirectLightEnabled) {
                        for (int i = 0; i < casts; i++) {
                            vec3 newDir = getHemisphereSample(normal.xyz, rand4().xy);
                            if (dot(rayDirection, newDir) > 0.0) {
                                bool hit = bvhIntersectFirstHit(bvh, rayOrigin, newDir,
                                    faceIndices, faceNormal, barycoord, side, dist);
                                totalIndirectLight += tracePath(rayOrigin, newDir, hit,
                                                                faceIndices, faceNormal, dist);
                            }
                        }
                    }

                    if (directLightEnabled) {
                        // Direct lighting: NEE over all lights at the primary surface.
                        // hitAlbedo=vec3(1.0) keeps directOut as raw irradiance so the
                        // material color is applied at composite time (bake convention).
                        for (int i = 0; i < casts; i++) {
                            totalDirectLight += sampleAllLightsNEE(rayOrigin, normal.xyz, vec3(1.0));
                        }
                    }

                    vec4 avgDirect   = vec4(totalDirectLight   / float(casts), 1.0);
                    vec4 avgIndirect = vec4(totalIndirectLight / float(casts), 1.0);

                    directOut   = directLightEnabled   ? vec4(avgDirect.rgb,   opacity) : vec4(0.0, 0.0, 0.0, opacity);
                    indirectOut = indirectLightEnabled ? vec4(avgIndirect.rgb, opacity) : vec4(0.0, 0.0, 0.0, opacity);
                }
            `})}}const tC={point:0,directional:1,spot:2,area:3},Eu=4;function nC(i){const e=[];return i.traverse(t=>{var n;if(!!t.visible&&!((n=t.userData)!=null&&n.lightmapIgnore)){if(t instanceof Hh)e.push({type:"point",position:t.getWorldPosition(new D),direction:new D(0,-1,0),color:t.color.clone().multiplyScalar(t.intensity),params:[0,0,0,0]});else if(t instanceof Gh){const s=new D(0,0,-1).transformDirection(t.matrixWorld).normalize();e.push({type:"directional",position:t.getWorldPosition(new D),direction:s,color:t.color.clone().multiplyScalar(t.intensity),params:[0,0,0,0]})}else if(t instanceof S0){const s=new D(0,0,-1).transformDirection(t.matrixWorld).normalize();e.push({type:"spot",position:t.getWorldPosition(new D),direction:s,color:t.color.clone().multiplyScalar(t.intensity),params:[Math.cos(t.angle*(1-t.penumbra)),Math.cos(t.angle),0,0]})}else if(t instanceof x1){const s=new D(0,0,-1).transformDirection(t.matrixWorld).normalize();e.push({type:"area",position:t.getWorldPosition(new D),direction:s,color:t.color.clone().multiplyScalar(t.intensity),params:[t.width,t.height,0,0]})}}}),e}function iC(i){const e=Math.max(1,i.length),t=new Float32Array(Eu*e*4);for(let s=0;s<i.length;s++){const r=i[s],o=s*Eu*4;t[o+0]=r.position.x,t[o+1]=r.position.y,t[o+2]=r.position.z,t[o+3]=tC[r.type],t[o+4]=r.direction.x,t[o+5]=r.direction.y,t[o+6]=r.direction.z,t[o+7]=r.params[0],t[o+8]=r.color.r,t[o+9]=r.color.g,t[o+10]=r.color.b,t[o+11]=r.params[1],t[o+12]=r.params[2],t[o+13]=r.params[3],t[o+14]=0,t[o+15]=0}const n=new Os(t,Eu,e,Yt,wt);return n.minFilter=mt,n.magFilter=mt,n.generateMipmaps=!1,n.wrapS=_n,n.wrapT=_n,n.needsUpdate=!0,{texture:n,count:i.length,capacity:e}}function sC(i){i.dispose()}const rC=(i,e,t,n,s)=>{var X,Q;const r=iC(s.lights),o=r.texture,l=new eC({bvh:n,invModelMatrix:new je().identity(),positions:e,normals:t,albedoTex:s.albedoTexture,emissiveTex:s.emissiveTexture,materialTextureSize:s.materialTextureSize,casts:s.casts,bounces:(X=s.bounces)!=null?X:1,lightsTex:o,lightCount:r.count,skyColor:s.skyColor,skyIntensity:s.skyIntensity,opacity:1,sampleIndex:0,directLightEnabled:s.directLightEnabled,indirectLightEnabled:s.indirectLightEnabled}),c=new By(s.resolution,s.resolution,2,{type:wt,minFilter:bt,magFilter:bt,generateMipmaps:!1}),u=i.getRenderTarget(),d=new We;i.getClearColor(d);const p=i.getClearAlpha();i.setRenderTarget(c),i.setClearColor(0,0),i.clear(),i.setRenderTarget(u),i.setClearColor(d,p);const m=new fe(new Bn(2,2),l),g=new ci;let b=0;const w=s.targetSamples|0,x=s.resolution;let v=Math.max(1,Math.min(x,(Q=s.tileSize)!=null?Q:x)),M=null,y=0;const S=Y=>{const ie=Math.ceil(x/Y);return{tilesX:ie,tilesY:ie,count:ie*ie}};let C=S(v);const P=l.uniforms.sampleIndex,T=l.uniforms.opacity;if(!P||!T)throw new Error("[baker] LightmapperMaterial missing required uniforms");const I=()=>{const Y=performance.now(),ie=i.autoClear,ne=i.getRenderTarget(),me=i.getScissorTest();try{if(i.autoClear=!1,i.setRenderTarget(c),P.value=b,T.value=1/(b+1),v>=x)i.setScissorTest(!1),i.render(m,g);else{const $=y%C.tilesX,se=y/C.tilesX|0,xe=$*v,we=se*v,Ae=Math.min(v,x-xe),_e=Math.min(v,x-we);i.setScissor(xe,we,Ae,_e),i.setScissorTest(!0),i.render(m,g)}}finally{i.setScissorTest(me),i.setRenderTarget(ne),i.autoClear=ie}y++;let he=!1;return y>=C.count&&(y=0,b++,he=!0,M!==null&&(v=M,C=S(v),M=null)),{ms:performance.now()-Y,sampleCompleted:he}},F=()=>{if(w>0&&b>=w)return{samples:b,done:!0,sampleComplete:!0,lastDrawMs:0};let Y=0;for(;;){const ie=I();if(Y=ie.ms,ie.sampleCompleted)break}return{samples:b,done:w>0&&b>=w,sampleComplete:!0,lastDrawMs:Y}},E=Y=>{if(w>0&&b>=w)return{samples:b,done:!0,sampleComplete:!0,lastDrawMs:0};const ie=performance.now()+Math.max(0,Y);let ne=0,me=!1;do{const he=I();if(ne=he.ms,he.sampleCompleted&&(me=!0,w>0&&b>=w))break}while(performance.now()<ie);return{samples:b,done:w>0&&b>=w,sampleComplete:me,lastDrawMs:ne}},R=Y=>{const ie=Math.max(1,Math.min(x,Y|0));ie===v&&M===null||(y===0?(v=ie,C=S(v),M=null):M=ie)},B=()=>{b=0,y=0},W=()=>{sC(o),c.dispose(),l.dispose(),m.geometry.dispose()},[U,H]=c.texture;if(!U||!H)throw new Error("[baker] WebGLMultipleRenderTargets did not allocate 2 textures");return{renderTarget:c,textures:{direct:U,indirect:H},render:F,renderTiled:E,setTileSize:R,reset:B,dispose:W}};class oC extends nn{customProgramCacheKey(){return"AOMaterial|glsl3|single-out"}constructor(e){const t=new H0;t.updateFrom(e.bvh),super({transparent:!0,glslVersion:Kn,depthTest:!1,depthWrite:!1,uniforms:{bvh:{value:t},positions:{value:e.positions},normals:{value:e.normals},invModelMatrix:{value:e.invModelMatrix},aoSamples:{value:e.aoSamples},ambientDistance:{value:e.ambientDistance},opacity:{value:e.opacity},sampleIndex:{value:e.sampleIndex}},vertexShader:`
                out vec2 vUv;
                void main() {
                    gl_Position = vec4( position, 1.0 );
                    vUv = uv;
                }
            `,fragmentShader:`
                /*
                 * Standalone AO bake (GLSL3, single output).
                 *
                 * Stored value: mean of  t = clamp(dist / ambientDistance, 0, 1)
                 * over aoSamples cosine-weighted hemisphere rays. 1.0 on miss
                 * (or hit beyond ambientDistance). 0.0 on hard contact.
                 *
                 * Composite shader applies the intensity/exponent remap. At
                 * intensity=1, exponent=1 the remap is identity so default
                 * output matches pre-separation behavior exactly.
                 */
                precision highp float;
                precision highp sampler2D;
                precision highp isampler2D;
                precision highp usampler2D;
                ${G0}
                ${W0}

                uniform mat4 invModelMatrix;
                uniform sampler2D positions;
                uniform sampler2D normals;
                uniform int aoSamples;
                uniform float ambientDistance;
                uniform int sampleIndex;
                uniform float opacity;
                uniform BVH bvh;
                in vec2 vUv;

                out vec4 aoOut;

                // \u2500\u2500 RNG (matches LightmapperMaterial) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500

                uvec4 s0;
                void rng_initialize(vec2 p, int frame) {
                    s0 = uvec4( uint(p.x), uint(p.y), uint( frame ), uint( p.x ) + uint( p.y ) );
                }
                void pcg4d( inout uvec4 v ) {
                    v = v * 1664525u + 1013904223u;
                    v.x += v.y * v.w; v.y += v.z * v.x;
                    v.z += v.x * v.y; v.w += v.y * v.z;
                    v = v ^ ( v >> 16u );
                    v.x += v.y*v.w; v.y += v.z*v.x;
                    v.z += v.x*v.y; v.w += v.y*v.z;
                }
                vec4 rand4() { pcg4d(s0); return vec4(s0) / float(0xffffffffu); }

                vec3 getHemisphereSample( vec3 n, vec2 uv ) {
                    float s = n.z == 0.0 ? 1.0 : sign(n.z);
                    float a = -1.0 / (s + n.z);
                    float b = n.x * n.y * a;
                    vec3 b1 = vec3(1.0 + s * n.x * n.x * a, s * b, -s * n.x);
                    vec3 b2 = vec3(b, s + n.y * n.y * a, -n.y);
                    float r = sqrt(uv.x);
                    float theta = 2.0 * 3.1415 * uv.y;
                    return r * cos(theta) * b1 + r * sin(theta) * b2 + sqrt(1.0 - uv.x) * n;
                }

                void main() {
                    vec4 position = texture(positions, vUv);
                    vec4 normal   = texture(normals,   vUv);

                    rng_initialize(gl_FragCoord.xy, sampleIndex);

                    vec3 rayOrigin    = position.rgb;
                    vec3 rayDirection = normal.rgb;
                    rayOrigin += rayDirection * 0.001;

                    uvec4 faceIndices = uvec4(0u);
                    vec3  faceNormal  = vec3(0.0, 0.0, 1.0);
                    vec3  barycoord   = vec3(0.0);
                    float side        = 1.0;
                    float dist        = 0.0;

                    float totalT = 0.0;
                    for (int i = 0; i < aoSamples; i++) {
                        vec3 newDir = getHemisphereSample(normal.xyz, rand4().xy);
                        if (dot(rayDirection, newDir) > 0.0) {
                            bool hit = bvhIntersectFirstHit(bvh, rayOrigin, newDir,
                                faceIndices, faceNormal, barycoord, side, dist);
                            float t = (hit && dist < ambientDistance)
                                ? clamp(dist / ambientDistance, 0.0, 1.0)
                                : 1.0;
                            totalT += t;
                        }
                    }

                    float divisor = max(float(aoSamples), 1.0);
                    float avg = aoSamples > 0 ? totalT / divisor : 1.0;
                    aoOut = vec4(vec3(avg), opacity);
                }
            `})}}const X0=(i,e,t,n,s)=>{var B;const r=new oC({bvh:n,invModelMatrix:new je().identity(),positions:e,normals:t,aoSamples:s.aoSamples,ambientDistance:s.ambientDistance,opacity:1,sampleIndex:0}),o=new Ln(s.resolution,s.resolution,{type:wt,minFilter:bt,magFilter:bt,generateMipmaps:!1}),l=i.getRenderTarget(),c=new We;i.getClearColor(c);const u=i.getClearAlpha();i.setRenderTarget(o),i.setClearColor(0,0),i.clear(),i.setRenderTarget(l),i.setClearColor(c,u);const d=new fe(new Bn(2,2),r),p=new ci;let m=0;const g=s.targetSamples|0,b=s.resolution;let w=Math.max(1,Math.min(b,(B=s.tileSize)!=null?B:b)),x=null,v=0;const M=W=>{const U=Math.ceil(b/W);return{tilesX:U,tilesY:U,count:U*U}};let y=M(w);const S=r.uniforms.sampleIndex,C=r.uniforms.opacity;if(!S||!C)throw new Error("[baker] AOMaterial missing required uniforms");const P=()=>{const W=performance.now(),U=i.autoClear,H=i.getRenderTarget(),G=i.getScissorTest();try{if(i.autoClear=!1,i.setRenderTarget(o),S.value=m,C.value=1/(m+1),w>=b)i.setScissorTest(!1),i.render(d,p);else{const Q=v%y.tilesX,Y=v/y.tilesX|0,ie=Q*w,ne=Y*w,me=Math.min(w,b-ie),he=Math.min(w,b-ne);i.setScissor(ie,ne,me,he),i.setScissorTest(!0),i.render(d,p)}}finally{i.setScissorTest(G),i.setRenderTarget(H),i.autoClear=U}v++;let X=!1;return v>=y.count&&(v=0,m++,X=!0,x!==null&&(w=x,y=M(w),x=null)),{ms:performance.now()-W,sampleCompleted:X}},T=()=>{if(g>0&&m>=g)return{samples:m,done:!0,sampleComplete:!0,lastDrawMs:0};let W=0;for(;;){const U=P();if(W=U.ms,U.sampleCompleted)break}return{samples:m,done:g>0&&m>=g,sampleComplete:!0,lastDrawMs:W}},I=W=>{if(g>0&&m>=g)return{samples:m,done:!0,sampleComplete:!0,lastDrawMs:0};const U=performance.now()+Math.max(0,W);let H=0,G=!1;do{const X=P();if(H=X.ms,X.sampleCompleted&&(G=!0,g>0&&m>=g))break}while(performance.now()<U);return{samples:m,done:g>0&&m>=g,sampleComplete:G,lastDrawMs:H}},F=W=>{const U=Math.max(1,Math.min(b,W|0));U===w&&x===null||(v===0?(w=U,y=M(w),x=null):x=U)},E=()=>{m=0,v=0},R=()=>{o.dispose(),r.dispose(),d.geometry.dispose()};return{texture:o.texture,render:T,renderTiled:I,setTileSize:F,reset:E,dispose:R}};class aC extends nn{customProgramCacheKey(){return"CompositeMaterial|glsl3|single-out"}constructor(e){super({glslVersion:Kn,transparent:!1,depthWrite:!1,depthTest:!1,uniforms:{directTex:{value:e.directTex},indirectTex:{value:e.indirectTex},aoTex:{value:e.aoTex},directIntensity:{value:e.directIntensity},giIntensity:{value:e.giIntensity},aoEnabled:{value:e.aoEnabled},aoIntensity:{value:e.aoIntensity},aoExponent:{value:e.aoExponent}},vertexShader:`
                out vec2 vUv;
                void main() {
                    gl_Position = vec4(position, 1.0);
                    vUv = uv;
                }
            `,fragmentShader:`
                precision highp float;
                precision highp sampler2D;

                uniform sampler2D directTex;
                uniform sampler2D indirectTex;
                uniform sampler2D aoTex;
                uniform float directIntensity;
                uniform float giIntensity;
                uniform bool  aoEnabled;
                uniform float aoIntensity;
                uniform float aoExponent;

                in vec2 vUv;
                out vec4 outColor;

                void main() {
                    vec3 d = texture(directTex,   vUv).rgb * directIntensity;
                    vec3 i = texture(indirectTex, vUv).rgb * giIntensity;

                    // AO remap (view-time): aoTex stores raw normalized visibility
                    // t \u2208 [0,1]. Apply exponent + intensity here so tweaking those
                    // sliders does not require re-baking AO.
                    // At intensity=1, exponent=1 the formula collapses to identity.
                    vec3 a = vec3(1.0);
                    if (aoEnabled) {
                        vec3 t = clamp(texture(aoTex, vUv).rgb, vec3(0.0), vec3(1.0));
                        vec3 occ = vec3(1.0) - pow(t, vec3(aoExponent));
                        a = vec3(1.0) - clamp(occ * aoIntensity, vec3(0.0), vec3(1.0));
                    }

                    vec3 lit = (d + i) * a;

                    // Subtle contrast boost / gamma correction
                    // This prevents the "washed out" look of pure linear float textures.
                    // Guard against negative inputs that would make pow() return NaN.
                    lit = pow(max(lit, vec3(0.0)), vec3(1.0 / 1.1));

                    outColor = vec4(lit, 1.0);
                }
            `})}}const j0=(i,e,t,n)=>{const s=new Ln(t,t,{type:Yn,minFilter:bt,magFilter:bt,generateMipmaps:!1}),r=new aC({directTex:e.direct,indirectTex:e.indirect,aoTex:e.ao,directIntensity:n.directIntensity,giIntensity:n.giIntensity,aoEnabled:n.aoEnabled,aoIntensity:n.aoIntensity,aoExponent:n.aoExponent}),o=new fe(new Bn(2,2),r),l=new ci,c=r.uniforms,u=d=>{(d==null?void 0:d.directIntensity)!==void 0&&c.directIntensity&&(c.directIntensity.value=d.directIntensity),(d==null?void 0:d.giIntensity)!==void 0&&c.giIntensity&&(c.giIntensity.value=d.giIntensity),(d==null?void 0:d.aoEnabled)!==void 0&&c.aoEnabled&&(c.aoEnabled.value=d.aoEnabled),(d==null?void 0:d.aoIntensity)!==void 0&&c.aoIntensity&&(c.aoIntensity.value=d.aoIntensity),(d==null?void 0:d.aoExponent)!==void 0&&c.aoExponent&&(c.aoExponent.value=d.aoExponent),(d==null?void 0:d.aoTex)!==void 0&&c.aoTex&&(c.aoTex.value=d.aoTex);const p=i.getRenderTarget(),m=i.autoClear;try{i.autoClear=!0,i.setRenderTarget(s),i.render(o,l)}finally{i.setRenderTarget(p),i.autoClear=m}};return u(),{texture:s.texture,refresh:u,dispose:()=>{s.dispose(),r.dispose(),o.geometry.dispose()}}};class lC extends nn{customProgramCacheKey(){return"DilationMaterial|glsl3|single-out"}constructor(e={}){var t,n,s;super({glslVersion:Kn,blending:qn,transparent:!1,depthWrite:!1,depthTest:!1,uniforms:{map:{value:(t=e.map)!=null?t:null},positions:{value:(n=e.positions)!=null?n:null},resolution:{value:(s=e.resolution)!=null?s:1024}},vertexShader:`
                out vec2 vUv;
                void main() {
                    vUv = uv;
                    gl_Position = vec4(position, 1.0);
                }
            `,fragmentShader:`
                #define DILATION_EMPTY_EPS 1e-6

                uniform sampler2D map;
                uniform sampler2D positions;
                uniform float resolution;
                in vec2 vUv;
                out vec4 fragColor;

                void main() {
                    vec4 here = texture(map, vUv);
                    float chart = texture(positions, vUv).a;

                    // Inside a chart \u2014 pass through.
                    if (chart > 0.0) {
                        fragColor = here;
                        return;
                    }

                    // Outside chart: average non-empty 3x3 neighbours.
                    float texel = 1.0 / max(resolution, 1.0);
                    vec3 sum = vec3(0.0);
                    float n = 0.0;
                    for (int dy = -1; dy <= 1; dy++) {
                        for (int dx = -1; dx <= 1; dx++) {
                            if (dx == 0 && dy == 0) continue;
                            vec2 uv2 = vUv + vec2(float(dx), float(dy)) * texel;
                            vec4 s = texture(map, uv2);
                            // "non-empty" = either inside the chart or already dilated.
                            float w = step(DILATION_EMPTY_EPS, s.r + s.g + s.b);
                            sum += s.rgb * w;
                            n   += w;
                        }
                    }
                    fragColor = n > 0.0
                        ? vec4(sum / n, here.a)
                        : here;
                }
            `})}}class cC extends nn{customProgramCacheKey(){return"DenoiseMaterial|glsl1|single-out"}constructor(e){var t,n,s;super({blending:qn,transparent:!1,depthWrite:!1,depthTest:!1,defines:{USE_SLIDER:0},uniforms:{sigma:{value:(t=e.sigma)!=null?t:5},threshold:{value:(n=e.threshold)!=null?n:.03},kSigma:{value:(s=e.kSigma)!=null?s:1},map:{value:e.map}},vertexShader:`
				varying vec2 vUv;
				void main() {
					vUv = uv;
					// NDC pass-through \u2014 matches DilationMaterial/CompositeMaterial.
					// Using projectionMatrix * modelViewMatrix with the default
					// OrthographicCamera (near=0.1) clips the z=0 quad and produces
					// no output, silently bypassing denoise.
					gl_Position = vec4( position, 1.0 );
				}
			`,fragmentShader:`
				//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
				//  Copyright (c) 2018-2019 Michele Morrone
				//  https://github.com/BrutPitt/glslSmartDeNoise/  (BSD 2-Clause)
				//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
				uniform sampler2D map;
				uniform float sigma;
				uniform float threshold;
				uniform float kSigma;
				varying vec2 vUv;
				#define INV_SQRT_OF_2PI 0.39894228040143267793994605993439
				#define INV_PI 0.31830988618379067153776752674503
				vec4 smartDeNoise( sampler2D tex, vec2 uv, float sigma, float kSigma, float threshold ) {
					float radius = round( kSigma * sigma );
					float radQ = radius * radius;
					float invSigmaQx2 = 0.5 / ( sigma * sigma );
					float invSigmaQx2PI = INV_PI * invSigmaQx2;
					float invThresholdSqx2 = 0.5 / ( threshold * threshold );
					float invThresholdSqrt2PI = INV_SQRT_OF_2PI / threshold;
					vec4 centrPx = texture2D( tex, uv );
					centrPx.rgb *= centrPx.a;
					float zBuff = 0.0;
					vec4 aBuff = vec4( 0.0 );
					vec2 size = vec2( textureSize( tex, 0 ) );
					vec2 d;
					for ( d.x = - radius; d.x <= radius; d.x ++ ) {
						float pt = sqrt( max( 0.0, radQ - d.x * d.x ) );
						for ( d.y = - pt; d.y <= pt; d.y ++ ) {
							float blurFactor = exp( - dot( d, d ) * invSigmaQx2 ) * invSigmaQx2PI;
							vec4 walkPx = texture2D( tex, uv + d / size );
							walkPx.rgb *= walkPx.a;
							vec4 dC = walkPx - centrPx;
							float deltaFactor = exp( - dot( dC.rgba, dC.rgba ) * invThresholdSqx2 ) * invThresholdSqrt2PI * blurFactor;
							zBuff += deltaFactor;
							aBuff += deltaFactor * walkPx;
						}
					}
					return aBuff / max( zBuff, 1e-5 );
				}
				void main() {
					// Internal RT pass: stay in linear space. Downstream MeshStandardMaterial.lightMap
					// expects linear; tonemapping/encoding fragments would double-encode.
					gl_FragColor = smartDeNoise( map, vec2( vUv.x, vUv.y ), sigma, kSigma, threshold );
				}
			`})}}const Lm=new fe(new Bn(2,2)),uC=new ci,Zh=async(i,e,t,n,s,r)=>{var y,S,C;const o=()=>new Ln(n,n,{type:wt,minFilter:bt,magFilter:bt,generateMipmaps:!1}),l=o(),c=o(),u=(P,T)=>{const I=i.getRenderTarget();try{Lm.material=P,i.setRenderTarget(T),i.render(Lm,uC)}finally{i.setRenderTarget(I)}},d=new lC({positions:t,resolution:n});let p=l,m=c,g=e;const b=Math.max(0,s.dilationIterations)+(s.denoiseEnabled?1:0);let w=0;const x=d.uniforms.map;if(!x)throw new Error("[baker] DilationMaterial missing `map` uniform");for(let P=0;P<Math.max(0,s.dilationIterations);P++){x.value=g,u(d,m),g=m.texture;const T=p;p=m,m=T,w++,r==null||r(w/b),await new Promise(I=>requestAnimationFrame(I))}if(s.denoiseEnabled){const P=new cC({map:g,sigma:s.denoiseSigma,threshold:s.denoiseThreshold,kSigma:s.denoiseKSigma});u(P,m),g=m.texture,P.dispose();const T=p;p=m,m=T,w++,r==null||r(w/b),await new Promise(I=>requestAnimationFrame(I))}d.dispose();const v=s.dilationIterations>0||s.denoiseEnabled,M=v?p.texture:e;if(v){const P=Math.max(0,Math.floor(n/2)-2),T=new Float32Array(4*4*4);i.readRenderTargetPixels(p,P,P,4,4,T);let I=0,F=0,E=0;for(let R=0;R<16;R++)I+=(y=T[R*4])!=null?y:0,F+=(S=T[R*4+1])!=null?S:0,E+=(C=T[R*4+2])!=null?C:0}return{texture:M,dispose:()=>{l.dispose(),c.dispose()}}};function hC(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},l=i[0].morphTargetsRelative,c=new cn;let u=0;for(let d=0;d<i.length;++d){const p=i[d];let m=0;if(t!==(p.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const g in p.attributes){if(!n.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+'. All geometries must have compatible attributes; make sure "'+g+'" attribute exists among all geometries, or in none of them.'),null;r[g]===void 0&&(r[g]=[]),r[g].push(p.attributes[g]),m++}if(m!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". Make sure all geometries have the same number of attributes."),null;if(l!==p.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const g in p.morphAttributes){if(!s.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+".  .morphAttributes must be consistent throughout all geometries."),null;o[g]===void 0&&(o[g]=[]),o[g].push(p.morphAttributes[g])}if(e){let g;if(t)g=p.index.count;else if(p.attributes.position!==void 0)g=p.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". The geometry must have either an index or a position attribute"),null;c.addGroup(u,g,d),u+=g}}if(t){let d=0;const p=[];for(let m=0;m<i.length;++m){const g=i[m].index;for(let b=0;b<g.count;++b)p.push(g.getX(b)+d);d+=i[m].attributes.position.count}c.setIndex(p)}for(const d in r){const p=Im(r[d]);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+d+" attribute."),null;c.setAttribute(d,p)}for(const d in o){const p=o[d][0].length;if(p===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[d]=[];for(let m=0;m<p;++m){const g=[];for(let w=0;w<o[d].length;++w)g.push(o[d][w][m]);const b=Im(g);if(!b)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+d+" morphAttribute."),null;c.morphAttributes[d].push(b)}}return c}function Im(i){let e,t,n,s=-1,r=0;for(let u=0;u<i.length;++u){const d=i[u];if(e===void 0&&(e=d.array.constructor),e!==d.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=d.itemSize),t!==d.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=d.normalized),n!==d.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=d.gpuType),s!==d.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=d.count*t}const o=new e(r),l=new Dt(o,t,n);let c=0;for(let u=0;u<i.length;++u){const d=i[u];if(d.isInterleavedBufferAttribute){const p=c/t;for(let m=0,g=d.count;m<g;m++)for(let b=0;b<t;b++){const w=d.getComponent(m,b);l.setComponent(m+p,b,w)}}else o.set(d.array,c);c+=d.count*t}return s!==void 0&&(l.gpuType=s),l}function $0(i,e=1e-4){e=Math.max(e,Number.EPSILON);const t={},n=i.getIndex(),s=i.getAttribute("position"),r=n?n.count:s.count;let o=0;const l=Object.keys(i.attributes),c={},u={},d=[],p=["getX","getY","getZ","getW"],m=["setX","setY","setZ","setW"];for(let M=0,y=l.length;M<y;M++){const S=l[M],C=i.attributes[S];c[S]=new Dt(new C.array.constructor(C.count*C.itemSize),C.itemSize,C.normalized);const P=i.morphAttributes[S];P&&(u[S]=new Dt(new P.array.constructor(P.count*P.itemSize),P.itemSize,P.normalized))}const g=e*.5,b=Math.log10(1/e),w=Math.pow(10,b),x=g*w;for(let M=0;M<r;M++){const y=n?n.getX(M):M;let S="";for(let C=0,P=l.length;C<P;C++){const T=l[C],I=i.getAttribute(T),F=I.itemSize;for(let E=0;E<F;E++)S+=`${~~(I[p[E]](y)*w+x)},`}if(S in t)d.push(t[S]);else{for(let C=0,P=l.length;C<P;C++){const T=l[C],I=i.getAttribute(T),F=i.morphAttributes[T],E=I.itemSize,R=c[T],B=u[T];for(let W=0;W<E;W++){const U=p[W],H=m[W];if(R[H](o,I[U](y)),F)for(let G=0,X=F.length;G<X;G++)B[G][H](o,F[G][U](y))}}t[S]=o,d.push(o),o++}}const v=i.clone();for(const M in i.attributes){const y=c[M];if(v.setAttribute(M,new Dt(y.array.slice(0,o*y.itemSize),y.itemSize,y.normalized)),M in u)for(let S=0;S<u[M].length;S++){const C=u[M][S];v.morphAttributes[M][S]=new Dt(C.array.slice(0,o*C.itemSize),C.itemSize,C.normalized)}}return v.setIndex(d),v}function Dm(i,e){if(e===ly)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Xu||e===Kg){let t=i.getIndex();if(t===null){const o=[],l=i.getAttribute("position");if(l!==void 0){for(let c=0;c<l.count;c++)o.push(c);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,s=[];if(e===Xu)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}class pt extends Error{constructor(e,t,n){super(`[baker:${t}] ${e}${n?` (mesh: ${n})`:""}`),this.name="BakeError",this.phase=t,this.meshName=n}}const dC=new Set(["position","normal","uv","uv2","meshIndex"]),pC=i=>{const e=i.map((n,s)=>{let r=n.geometry.clone();for(const u of Object.keys(r.attributes))dC.has(u)||r.deleteAttribute(u);r.applyMatrix4(n.matrixWorld),r.index||(r=$0(r));const o=r.attributes.position;if(!o)throw new pt("mesh geometry has no position attribute","geometry",n.name);const l=o.count,c=new Float32Array(l);return c.fill(s),r.setAttribute("meshIndex",new Dt(c,1)),r}),t=hC(e);if(!t){const n=i.map((s,r)=>s.name||`<unnamed#${r}>`).join(", ");throw new pt(`mergeGeometries returned null \u2014 incompatible attribute sets across meshes [${n}]`,"geometry")}return t},fC=i=>{const e=i.geometry;if(e.index)return e.index.count/3;const t=e.attributes.position;if(!t)throw new pt("mesh geometry missing position attribute","geometry",i.name);return t.count/3},hh={aR:1,aG:1,aB:1,eR:0,eG:0,eB:0},q0=i=>{var t;if(Array.isArray(i)){console.warn("[baker] material array detected; using slot 0 only \u2014 per-face material groups not yet supported");const n=i[0];return n?q0(n):hh}const e=i;if("emissive"in e&&e.emissive){const n=(t=e.emissiveIntensity)!=null?t:1;return{aR:e.color.r,aG:e.color.g,aB:e.color.b,eR:e.emissive.r*n,eG:e.emissive.g*n,eB:e.emissive.b*n}}return"color"in e&&e.color?{aR:e.color.r,aG:e.color.g,aB:e.color.b,eR:0,eG:0,eB:0}:(console.warn("[baker] material has no .color (likely ShaderMaterial); defaulting to white albedo"),hh)},mC=(i,e)=>{var p,m,g;const t=i.index;if(!t)throw new pt("mergeGeometry must produce an indexed geometry; got non-indexed","geometry");const n=i.attributes.meshIndex;if(!n)throw new pt("merged geometry is missing 'meshIndex' attribute \u2014 did mergeGeometry skip the per-vertex tag?","geometry");const s=e.map(fC),r=t.count/3,o=new Float32Array(r*3),l=new Float32Array(r*3),c=e.map(b=>q0(b.material)),u=t.array,d=n.array;for(let b=0;b<r;b++){const w=(p=u[b*3])!=null?p:0,x=((m=d[w])!=null?m:0)|0,v=(g=c[x])!=null?g:hh,M=b*3;o[M]=v.aR,o[M+1]=v.aG,o[M+2]=v.aB,l[M]=v.eR,l[M+1]=v.eG,l[M+2]=v.eB}return{albedo:o,emissive:l,totalTriangles:r,perMeshTriangleCounts:s}},Nm=(i,e)=>{const t=new Os(i,e,e,Yt,wt);return t.minFilter=mt,t.magFilter=mt,t.wrapS=_n,t.wrapT=_n,t.generateMipmaps=!1,t.needsUpdate=!0,t},gC=i=>{var o,l,c,u,d,p;const e=i.totalTriangles,t=Math.max(1,Math.ceil(Math.sqrt(e))),n=t*t,s=new Float32Array(n*4),r=new Float32Array(n*4);for(let m=0;m<e;m++){const g=m*3,b=m*4;s[b]=(o=i.albedo[g])!=null?o:0,s[b+1]=(l=i.albedo[g+1])!=null?l:0,s[b+2]=(c=i.albedo[g+2])!=null?c:0,s[b+3]=1,r[b]=(u=i.emissive[g])!=null?u:0,r[b+1]=(d=i.emissive[g+1])!=null?d:0,r[b+2]=(p=i.emissive[g+2])!=null?p:0,r[b+3]=1}return{albedoTexture:Nm(s,t),emissiveTexture:Nm(r,t),side:t}},Su=new D,Um=new D,km=new D,Fm=new D,Om=new D,Bm=new D;function vC(i){const e=i.geometry,t=e.attributes.position;if(!t)return 0;const n=i.matrixWorld;let s=0;const r=(o,l,c)=>(Su.fromBufferAttribute(t,o).applyMatrix4(n),Um.fromBufferAttribute(t,l).applyMatrix4(n),km.fromBufferAttribute(t,c).applyMatrix4(n),Fm.subVectors(Um,Su),Om.subVectors(km,Su),Bm.crossVectors(Fm,Om),Bm.length()*.5);if(e.index){const o=e.index.array;for(let l=0;l<o.length;l+=3)s+=r(o[l],o[l+1],o[l+2])}else for(let o=0;o<t.count;o+=3)s+=r(o,o+1,o+2);return s}function _C(i,e){var u;const t=(u=e.fillRatio)!=null?u:.95,n=e.atlasResolution*e.atlasResolution,s=e.texelsPerMeter*e.texelsPerMeter,o=[...i.map((d,p)=>{var x,v;const m=vC(d),g=(v=(x=e.perMeshScale)==null?void 0:x[d.uuid])!=null?v:1,b=m*s*g*g,w=n>0?b/n:0;return{mesh:d,inputIdx:p,surfaceArea:m,uvFraction:w}})].sort((d,p)=>p.uvFraction-d.uvFraction),l=[],c=new Array(i.length);for(const d of o){let p=d.uvFraction;if(p>t){const g=d.mesh.name||`Mesh ${d.inputIdx+1} (${d.mesh.geometry.type.replace("Geometry","")})`;console.warn(`[baker] mesh "${g}" wants ${(p*100).toFixed(0)}% of one ${e.atlasResolution}\xB2 atlas at ${e.texelsPerMeter} texels/m \u2014 clamping to ${(t*100).toFixed(0)}% (effective density reduced)`),p=t}let m=-1;for(let g=0;g<l.length;g++)if(l[g]+p<=t){l[g]=l[g]+p,m=g;break}m<0&&(m=l.length,l.push(p)),c[d.inputIdx]={atlasIdx:m,mesh:d.mesh,uvFraction:p,surfaceArea:d.surfaceArea}}return c}/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.6.9
*/var Vm=function(i){return URL.createObjectURL(new Blob([i],{type:"text/javascript"}))};try{URL.revokeObjectURL(Vm(""))}catch{Vm=function(e){return"data:application/javascript;charset=UTF-8,"+encodeURI(e)}}var _i=Uint8Array,Sn=Uint16Array,ea=Uint32Array,Qh=new _i([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Jh=new _i([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),zm=new _i([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Y0=function(i,e){for(var t=new Sn(31),n=0;n<31;++n)t[n]=e+=1<<i[n-1];for(var s=new ea(t[30]),n=1;n<30;++n)for(var r=t[n];r<t[n+1];++r)s[r]=r-t[n]<<5|n;return[t,s]},K0=Y0(Qh,2),xC=K0[0],dh=K0[1];xC[28]=258,dh[258]=28;var bC=Y0(Jh,0),Hm=bC[1],ph=new Sn(32768);for(var It=0;It<32768;++It){var ns=(It&43690)>>>1|(It&21845)<<1;ns=(ns&52428)>>>2|(ns&13107)<<2,ns=(ns&61680)>>>4|(ns&3855)<<4,ph[It]=((ns&65280)>>>8|(ns&255)<<8)>>>1}var Yo=function(i,e,t){for(var n=i.length,s=0,r=new Sn(e);s<n;++s)++r[i[s]-1];var o=new Sn(e);for(s=0;s<e;++s)o[s]=o[s-1]+r[s-1]<<1;var l;if(t){l=new Sn(1<<e);var c=15-e;for(s=0;s<n;++s)if(i[s])for(var u=s<<4|i[s],d=e-i[s],p=o[i[s]-1]++<<d,m=p|(1<<d)-1;p<=m;++p)l[ph[p]>>>c]=u}else for(l=new Sn(n),s=0;s<n;++s)i[s]&&(l[s]=ph[o[i[s]-1]++]>>>15-i[s]);return l},Vs=new _i(288);for(var It=0;It<144;++It)Vs[It]=8;for(var It=144;It<256;++It)Vs[It]=9;for(var It=256;It<280;++It)Vs[It]=7;for(var It=280;It<288;++It)Vs[It]=8;var Vl=new _i(32);for(var It=0;It<32;++It)Vl[It]=5;var yC=Yo(Vs,9,0),wC=Yo(Vl,5,0),Z0=function(i){return(i/8|0)+(i&7&&1)},MC=function(i,e,t){(e==null||e<0)&&(e=0),(t==null||t>i.length)&&(t=i.length);var n=new(i instanceof Sn?Sn:i instanceof ea?ea:_i)(t-e);return n.set(i.subarray(e,t)),n},Li=function(i,e,t){t<<=e&7;var n=e/8|0;i[n]|=t,i[n+1]|=t>>>8},Io=function(i,e,t){t<<=e&7;var n=e/8|0;i[n]|=t,i[n+1]|=t>>>8,i[n+2]|=t>>>16},Tu=function(i,e){for(var t=[],n=0;n<i.length;++n)i[n]&&t.push({s:n,f:i[n]});var s=t.length,r=t.slice();if(!s)return[ed,0];if(s==1){var o=new _i(t[0].s+1);return o[t[0].s]=1,[o,1]}t.sort(function(C,P){return C.f-P.f}),t.push({s:-1,f:25001});var l=t[0],c=t[1],u=0,d=1,p=2;for(t[0]={s:-1,f:l.f+c.f,l,r:c};d!=s-1;)l=t[t[u].f<t[p].f?u++:p++],c=t[u!=d&&t[u].f<t[p].f?u++:p++],t[d++]={s:-1,f:l.f+c.f,l,r:c};for(var m=r[0].s,n=1;n<s;++n)r[n].s>m&&(m=r[n].s);var g=new Sn(m+1),b=fh(t[d-1],g,0);if(b>e){var n=0,w=0,x=b-e,v=1<<x;for(r.sort(function(P,T){return g[T.s]-g[P.s]||P.f-T.f});n<s;++n){var M=r[n].s;if(g[M]>e)w+=v-(1<<b-g[M]),g[M]=e;else break}for(w>>>=x;w>0;){var y=r[n].s;g[y]<e?w-=1<<e-g[y]++-1:++n}for(;n>=0&&w;--n){var S=r[n].s;g[S]==e&&(--g[S],++w)}b=e}return[new _i(g),b]},fh=function(i,e,t){return i.s==-1?Math.max(fh(i.l,e,t+1),fh(i.r,e,t+1)):e[i.s]=t},Gm=function(i){for(var e=i.length;e&&!i[--e];);for(var t=new Sn(++e),n=0,s=i[0],r=1,o=function(c){t[n++]=c},l=1;l<=e;++l)if(i[l]==s&&l!=e)++r;else{if(!s&&r>2){for(;r>138;r-=138)o(32754);r>2&&(o(r>10?r-11<<5|28690:r-3<<5|12305),r=0)}else if(r>3){for(o(s),--r;r>6;r-=6)o(8304);r>2&&(o(r-3<<5|8208),r=0)}for(;r--;)o(s);r=1,s=i[l]}return[t.subarray(0,n),e]},Do=function(i,e){for(var t=0,n=0;n<e.length;++n)t+=i[n]*e[n];return t},bl=function(i,e,t){var n=t.length,s=Z0(e+2);i[s]=n&255,i[s+1]=n>>>8,i[s+2]=i[s]^255,i[s+3]=i[s+1]^255;for(var r=0;r<n;++r)i[s+r+4]=t[r];return(s+4+n)*8},Wm=function(i,e,t,n,s,r,o,l,c,u,d){Li(e,d++,t),++s[256];for(var p=Tu(s,15),m=p[0],g=p[1],b=Tu(r,15),w=b[0],x=b[1],v=Gm(m),M=v[0],y=v[1],S=Gm(w),C=S[0],P=S[1],T=new Sn(19),I=0;I<M.length;++I)T[M[I]&31]++;for(var I=0;I<C.length;++I)T[C[I]&31]++;for(var F=Tu(T,7),E=F[0],R=F[1],B=19;B>4&&!E[zm[B-1]];--B);var W=u+5<<3,U=Do(s,Vs)+Do(r,Vl)+o,H=Do(s,m)+Do(r,w)+o+14+3*B+Do(T,E)+(2*T[16]+3*T[17]+7*T[18]);if(W<=U&&W<=H)return bl(e,d,i.subarray(c,c+u));var G,X,Q,Y;if(Li(e,d,1+(H<U)),d+=2,H<U){G=Yo(m,g,0),X=m,Q=Yo(w,x,0),Y=w;var ie=Yo(E,R,0);Li(e,d,y-257),Li(e,d+5,P-1),Li(e,d+10,B-4),d+=14;for(var I=0;I<B;++I)Li(e,d+3*I,E[zm[I]]);d+=3*B;for(var ne=[M,C],me=0;me<2;++me)for(var he=ne[me],I=0;I<he.length;++I){var $=he[I]&31;Li(e,d,ie[$]),d+=E[$],$>15&&(Li(e,d,he[I]>>>5&127),d+=he[I]>>>12)}}else G=yC,X=Vs,Q=wC,Y=Vl;for(var I=0;I<l;++I)if(n[I]>255){var $=n[I]>>>18&31;Io(e,d,G[$+257]),d+=X[$+257],$>7&&(Li(e,d,n[I]>>>23&31),d+=Qh[$]);var se=n[I]&31;Io(e,d,Q[se]),d+=Y[se],se>3&&(Io(e,d,n[I]>>>5&8191),d+=Jh[se])}else Io(e,d,G[n[I]]),d+=X[n[I]];return Io(e,d,G[256]),d+X[256]},EC=new ea([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),ed=new _i(0),SC=function(i,e,t,n,s,r){var o=i.length,l=new _i(n+o+5*(1+Math.ceil(o/7e3))+s),c=l.subarray(n,l.length-s),u=0;if(!e||o<8)for(var d=0;d<=o;d+=65535){var p=d+65535;p<o?u=bl(c,u,i.subarray(d,p)):(c[d]=r,u=bl(c,u,i.subarray(d,o)))}else{for(var m=EC[e-1],g=m>>>13,b=m&8191,w=(1<<t)-1,x=new Sn(32768),v=new Sn(w+1),M=Math.ceil(t/3),y=2*M,S=function(Pe){return(i[Pe]^i[Pe+1]<<M^i[Pe+2]<<y)&w},C=new ea(25e3),P=new Sn(288),T=new Sn(32),I=0,F=0,d=0,E=0,R=0,B=0;d<o;++d){var W=S(d),U=d&32767,H=v[W];if(x[U]=H,v[W]=U,R<=d){var G=o-d;if((I>7e3||E>24576)&&G>423){u=Wm(i,c,0,C,P,T,F,E,B,d-B,u),E=I=F=0,B=d;for(var X=0;X<286;++X)P[X]=0;for(var X=0;X<30;++X)T[X]=0}var Q=2,Y=0,ie=b,ne=U-H&32767;if(G>2&&W==S(d-ne))for(var me=Math.min(g,G)-1,he=Math.min(32767,d),$=Math.min(258,G);ne<=he&&--ie&&U!=H;){if(i[d+Q]==i[d+Q-ne]){for(var se=0;se<$&&i[d+se]==i[d+se-ne];++se);if(se>Q){if(Q=se,Y=ne,se>me)break;for(var xe=Math.min(ne,se-2),we=0,X=0;X<xe;++X){var Ae=d-ne+X+32768&32767,_e=x[Ae],ke=Ae-_e+32768&32767;ke>we&&(we=ke,H=Ae)}}}U=H,H=x[U],ne+=U-H+32768&32767}if(Y){C[E++]=268435456|dh[Q]<<18|Hm[Y];var Ue=dh[Q]&31,j=Hm[Y]&31;F+=Qh[Ue]+Jh[j],++P[257+Ue],++T[j],R=d+Q,++I}else C[E++]=i[d],++P[i[d]]}}u=Wm(i,c,r,C,P,T,F,E,B,d-B,u),!r&&u&7&&(u=bl(c,u+1,ed))}return MC(l,0,n+Z0(u)+s)},TC=function(){var i=1,e=0;return{p:function(t){for(var n=i,s=e,r=t.length,o=0;o!=r;){for(var l=Math.min(o+2655,r);o<l;++o)s+=n+=t[o];n=(n&65535)+15*(n>>16),s=(s&65535)+15*(s>>16)}i=n,e=s},d:function(){return i%=65521,e%=65521,(i&255)<<24|i>>>8<<16|(e&255)<<8|e>>>8}}},AC=function(i,e,t,n,s){return SC(i,e.level==null?6:e.level,e.mem==null?Math.ceil(Math.max(8,Math.min(13,Math.log(i.length)))*1.5):12+e.mem,t,n,!s)},CC=function(i,e,t){for(;t;++e)i[e]=t,t>>>=8},PC=function(i,e){var t=e.level,n=t==0?0:t<6?1:t==9?3:2;i[0]=120,i[1]=n<<6|(n?32-2*n:1)};function RC(i,e){e||(e={});var t=TC();t.p(i);var n=AC(i,e,2,4);return PC(n,e),CC(n,n.length-4,t.d()),n}var LC=typeof TextDecoder!="undefined"&&new TextDecoder,IC=0;try{LC.decode(ed,{stream:!0}),IC=1}catch{}const DC=new TextEncoder,Q0=3;class NC{parse(e,t,n){if(!e||!(e.isWebGLRenderer||e.isDataTexture))throw Error("EXRExporter.parse: Unsupported first parameter, expected instance of WebGLRenderer or DataTexture.");if(e.isWebGLRenderer){const s=e,r=t,o=n;UC(r);const l=FC(r,o),c=BC(s,r,l),u=Xm(c,l),d=jm(u,l);return $m(d,l)}else if(e.isDataTexture){const s=e,r=t;kC(s);const o=OC(s,r),l=s.image.data,c=Xm(l,o),u=jm(c,o);return $m(u,o)}}}function UC(i){if(!i||!i.isWebGLRenderTarget)throw Error("EXRExporter.parse: Unsupported second parameter, expected instance of WebGLRenderTarget.");if(i.isWebGLCubeRenderTarget||i.isWebGL3DRenderTarget||i.isWebGLArrayRenderTarget)throw Error("EXRExporter.parse: Unsupported render target type, expected instance of WebGLRenderTarget.");if(i.texture.type!==wt&&i.texture.type!==Yn)throw Error("EXRExporter.parse: Unsupported WebGLRenderTarget texture type.");if(i.texture.format!==Yt)throw Error("EXRExporter.parse: Unsupported WebGLRenderTarget texture format, expected RGBAFormat.")}function kC(i){if(i.type!==wt&&i.type!==Yn)throw Error("EXRExporter.parse: Unsupported DataTexture texture type.");if(i.format!==Yt)throw Error("EXRExporter.parse: Unsupported DataTexture texture format, expected RGBAFormat.");if(!i.image.data)throw Error("EXRExporter.parse: Invalid DataTexture image data.");if(i.type===wt&&i.image.data.constructor.name!=="Float32Array")throw Error("EXRExporter.parse: DataTexture image data doesn't match type, expected 'Float32Array'.");if(i.type===Yn&&i.image.data.constructor.name!=="Uint16Array")throw Error("EXRExporter.parse: DataTexture image data doesn't match type, expected 'Uint16Array'.")}function FC(i,e={}){const t={0:1,2:1,3:16},n=i.width,s=i.height,r=i.texture.type,o=i.texture.format,l=e.compression!==void 0?e.compression:Q0,c=e.type!==void 0?e.type:Yn,u=c===wt?2:1,d=t[l],p=4;return{width:n,height:s,type:r,format:o,compression:l,blockLines:d,dataType:u,dataSize:2*u,numBlocks:Math.ceil(s/d),numInputChannels:4,numOutputChannels:p}}function OC(i,e={}){const t={0:1,2:1,3:16},n=i.image.width,s=i.image.height,r=i.type,o=i.format,l=e.compression!==void 0?e.compression:Q0,c=e.type!==void 0?e.type:Yn,u=c===wt?2:1,d=t[l],p=4;return{width:n,height:s,type:r,format:o,compression:l,blockLines:d,dataType:u,dataSize:2*u,numBlocks:Math.ceil(s/d),numInputChannels:4,numOutputChannels:p}}function BC(i,e,t){let n;return t.type===wt?n=new Float32Array(t.width*t.height*t.numInputChannels):n=new Uint16Array(t.width*t.height*t.numInputChannels),i.readRenderTargetPixels(e,0,0,t.width,t.height,n),n}function Xm(i,e){const t=e.width,n=e.height,s={r:0,g:0,b:0,a:0},r={value:0},o=e.numOutputChannels==4?1:0,l=e.type==wt?qC:$C,c=e.dataType==1?WC:mh,u=new Uint8Array(e.width*e.height*e.numOutputChannels*e.dataSize),d=new DataView(u.buffer);for(let p=0;p<n;++p)for(let m=0;m<t;++m){const g=p*t*4+m*4,b=l(i,g),w=l(i,g+1),x=l(i,g+2),v=l(i,g+3),M=(n-p-1)*t*(3+o)*e.dataSize;GC(s,b,w,x,v),r.value=M+m*e.dataSize,c(d,s.a,r),r.value=M+o*t*e.dataSize+m*e.dataSize,c(d,s.b,r),r.value=M+(1+o)*t*e.dataSize+m*e.dataSize,c(d,s.g,r),r.value=M+(2+o)*t*e.dataSize+m*e.dataSize,c(d,s.r,r)}return u}function jm(i,e){let t,n,s=0;const r={data:new Array,totalSize:0},o=e.width*e.numOutputChannels*e.blockLines*e.dataSize;switch(e.compression){case 0:t=VC;break;case 2:case 3:t=zC;break}e.compression!==0&&(n=new Uint8Array(o));for(let l=0;l<e.numBlocks;++l){const c=i.subarray(o*l,o*(l+1)),u=t(c,n);s+=u.length,r.data.push({dataChunk:u,size:u.length})}return r.totalSize=s,r}function VC(i){return i}function zC(i,e){let t=0,n=Math.floor((i.length+1)/2),s=0;const r=i.length-1;for(;!(s>r||(e[t++]=i[s++],s>r));)e[n++]=i[s++];let o=e[0];for(let c=1;c<e.length;c++){const u=e[c]-o+384;o=e[c],e[c]=u}return RC(e)}function HC(i,e,t){const n={value:0},s=new DataView(i.buffer);ct(s,20000630,n),ct(s,2,n),jt(s,"compression",n),jt(s,"compression",n),ct(s,1,n),Oo(s,t.compression,n),jt(s,"screenWindowCenter",n),jt(s,"v2f",n),ct(s,8,n),ct(s,0,n),ct(s,0,n),jt(s,"screenWindowWidth",n),jt(s,"float",n),ct(s,4,n),mh(s,1,n),jt(s,"pixelAspectRatio",n),jt(s,"float",n),ct(s,4,n),mh(s,1,n),jt(s,"lineOrder",n),jt(s,"lineOrder",n),ct(s,1,n),Oo(s,0,n),jt(s,"dataWindow",n),jt(s,"box2i",n),ct(s,16,n),ct(s,0,n),ct(s,0,n),ct(s,t.width-1,n),ct(s,t.height-1,n),jt(s,"displayWindow",n),jt(s,"box2i",n),ct(s,16,n),ct(s,0,n),ct(s,0,n),ct(s,t.width-1,n),ct(s,t.height-1,n),jt(s,"channels",n),jt(s,"chlist",n),ct(s,t.numOutputChannels*18+1,n),jt(s,"A",n),ct(s,t.dataType,n),n.value+=4,ct(s,1,n),ct(s,1,n),jt(s,"B",n),ct(s,t.dataType,n),n.value+=4,ct(s,1,n),ct(s,1,n),jt(s,"G",n),ct(s,t.dataType,n),n.value+=4,ct(s,1,n),ct(s,1,n),jt(s,"R",n),ct(s,t.dataType,n),n.value+=4,ct(s,1,n),ct(s,1,n),Oo(s,0,n),Oo(s,0,n);let r=n.value+t.numBlocks*8;for(let o=0;o<e.data.length;++o)XC(s,r,n),r+=e.data[o].size+8}function $m(i,e){const t=e.numBlocks*8,n=259+18*e.numOutputChannels,s={value:n+t},r=new Uint8Array(n+t+i.totalSize+e.numBlocks*8),o=new DataView(r.buffer);HC(r,i,e);for(let l=0;l<i.data.length;++l){const c=i.data[l].dataChunk,u=i.data[l].size;ct(o,l*e.blockLines,s),ct(o,u,s),r.set(c,s.value),s.value+=u}return r}function GC(i,e,t,n,s){i.r=e,i.g=t,i.b=n,i.a=s}function Oo(i,e,t){i.setUint8(t.value,e),t.value+=1}function ct(i,e,t){i.setUint32(t.value,e,!0),t.value+=4}function WC(i,e,t){i.setUint16(t.value,Qy.toHalfFloat(e),!0),t.value+=2}function mh(i,e,t){i.setFloat32(t.value,e,!0),t.value+=4}function XC(i,e,t){i.setBigUint64(t.value,BigInt(e),!0),t.value+=8}function jt(i,e,t){const n=DC.encode(e+"\0");for(let s=0;s<n.length;++s)Oo(i,n[s],t)}function jC(i){const e=(i&31744)>>10,t=i&1023;return(i>>15?-1:1)*(e?e===31?t?NaN:1/0:Math.pow(2,e-15)*(1+t/1024):6103515625e-14*(t/1024))}function $C(i,e){return jC(i[e])}function qC(i,e){return i[e]}const qm=new fe(new Bn(2,2)),YC=new ci,Ym=new nn({glslVersion:Kn,blending:qn,transparent:!1,depthWrite:!1,depthTest:!1,uniforms:{map:{value:null}},vertexShader:`
        out vec2 vUv;
        void main() {
            vUv = uv;
            gl_Position = vec4(position, 1.0);
        }
    `,fragmentShader:`
        uniform sampler2D map;
        in vec2 vUv;
        out vec4 fragColor;
        void main() {
            fragColor = texture(map, vUv);
        }
    `});function td(i,e,t){const n=new Ln(t,t,{type:wt,minFilter:bt,magFilter:bt}),s=Ym.uniforms.map;if(!s)throw new Error("[baker] export passthrough material missing `map` uniform");s.value=e,qm.material=Ym;const r=i.getRenderTarget(),o=i.autoClear;try{i.autoClear=!0,i.setRenderTarget(n),i.render(qm,YC)}finally{i.setRenderTarget(r),i.autoClear=o}return n}function nd(i,e){const t=URL.createObjectURL(i),n=document.createElement("a");n.href=t,n.download=e,document.body.appendChild(n),n.click(),n.remove(),setTimeout(()=>URL.revokeObjectURL(t),0)}const id=(i,e)=>i.toLowerCase().endsWith(`.${e}`)?i:`${i}.${e}`;async function KC(i,e,t,n){var u,d,p;const s=td(i,e,t),r=new Float32Array(t*t*4);i.readRenderTargetPixels(s,0,0,t,t,r),s.dispose();const o=new Uint8ClampedArray(t*t*4);for(let m=0;m<t;m++){const g=(t-1-m)*t*4,b=m*t*4;for(let w=0;w<t;w++){const x=g+w*4,v=b+w*4,M=Math.max((u=r[x])!=null?u:0,0),y=Math.max((d=r[x+1])!=null?d:0,0),S=Math.max((p=r[x+2])!=null?p:0,0);o[v]=Math.pow(M/(1+M),1/2.2)*255,o[v+1]=Math.pow(y/(1+y),1/2.2)*255,o[v+2]=Math.pow(S/(1+S),1/2.2)*255,o[v+3]=255}}const l=document.createElement("canvas");l.width=t,l.height=t;const c=l.getContext("2d");if(!c)throw new Error("exportPNG: 2D context unavailable");c.putImageData(new ImageData(o,t,t),0,0),await new Promise((m,g)=>{l.toBlob(b=>{if(!b){g(new Error("exportPNG: toBlob returned null"));return}nd(b,id(n,"png")),m()},"image/png")})}function ZC(i,e,t,n){const s=td(i,e,t),r=new NC().parse(i,s);s.dispose(),nd(new Blob([r],{type:"image/x-exr"}),id(n,"exr"))}function QC(i,e,t,n){const s=td(i,e,t),r=new Float32Array(t*t*4);i.readRenderTargetPixels(s,0,0,t,t,r),s.dispose(),nd(new Blob([r.buffer],{type:"application/octet-stream"}),id(n,"bin"))}async function J0(i,e,t,n,s){switch(s){case"png":await KC(i,e,t,n);return;case"exr":ZC(i,e,t,n);return;case"bin":QC(i,e,t,n);return}}const Ar=22;class JC{constructor(e={}){var t,n,s,r;this.visible=!0,this.collapsed=!1,this.headerEl=null,this.layerLabel="",this.textures=null,this.prevScissor=new yt,this.prevViewport=new yt,this.size=(t=e.size)!=null?t:256,this.margin=(n=e.margin)!=null?n:20,this.corner=(s=e.corner)!=null?s:"br",this.mat=new nn({glslVersion:Kn,blending:qn,transparent:!1,depthTest:!1,depthWrite:!1,uniforms:{map:{value:null},sRGB:{value:(r=e.sRGB)!=null?r:!0},border:{value:.006}},vertexShader:`
                out vec2 vUv;
                void main() {
                    vUv = uv;
                    // NDC pass-through \u2014 bypass camera matrices to dodge the
                    // default-near-plane clipping that bit DenoiseMaterial.
                    gl_Position = vec4(position, 1.0);
                }
            `,fragmentShader:`
                uniform sampler2D map;
                uniform bool sRGB;
                uniform float border;
                in vec2 vUv;
                out vec4 fragColor;
                void main() {
                    // Thin light frame so the panel reads against any 3D background.
                    if (vUv.x < border || vUv.x > 1.0 - border ||
                        vUv.y < border || vUv.y > 1.0 - border) {
                        fragColor = vec4(0.85, 0.85, 0.85, 1.0);
                        return;
                    }
                    vec4 t = texture(map, vUv);
                    vec3 c = max(t.rgb, vec3(0.0));
                    if (sRGB) c = pow(c, vec3(1.0 / 2.2));
                    fragColor = vec4(c, 1.0);
                }
            `}),this.scene=new x0,this.cam=new ci,this.quad=new fe(new Bn(2,2),this.mat),this.scene.add(this.quad)}setTexture(e){this.mat.uniforms.map&&(this.mat.uniforms.map.value=e),this.textures=null}setTextures(e){this.textures=e&&e.length>0?e:null}setSRGB(e){this.mat.uniforms.sRGB&&(this.mat.uniforms.sRGB.value=e)}setSize(e){this.size=e}setMargin(e){this.margin=e}setCorner(e){this.corner=e}setCollapsed(e){this.collapsed=e,this.refreshHeaderText()}setLayerLabel(e){this.layerLabel=e,this.refreshHeaderText()}attachHeader(e=document.body){if(this.headerEl)return;const t=document.createElement("div");Object.assign(t.style,{position:"absolute",boxSizing:"border-box",fontFamily:"monospace",fontSize:"11px",color:"#ddd",backgroundColor:"rgba(0,0,0,0.78)",padding:"4px 8px",cursor:"pointer",userSelect:"none",border:"1px solid #444",borderRadius:"3px",zIndex:"50",display:"none",lineHeight:`${Ar-10}px`}),t.addEventListener("click",()=>this.setCollapsed(!this.collapsed)),e.appendChild(t),this.headerEl=t,this.refreshHeaderText()}detachHeader(){var e;(e=this.headerEl)==null||e.remove(),this.headerEl=null}refreshHeaderText(){if(!this.headerEl)return;const e=this.collapsed?"\u25B8":"\u25BE",t=this.layerLabel?` \xB7 ${this.layerLabel}`:"";this.headerEl.innerText=`${e} Atlas Viewer${t}`}positionHeader(e){if(!this.headerEl)return;if(!this.visible){this.headerEl.style.display="none";return}this.headerEl.style.display="block",this.headerEl.style.width=`${this.size}px`;let t=0,n=0;switch(this.corner){case"tl":t=this.margin,n=this.margin+Ar;break;case"tr":t=e.width-this.size-this.margin,n=this.margin+Ar;break;case"bl":t=this.margin,n=e.height-this.margin-this.size;break;case"br":t=e.width-this.size-this.margin,n=e.height-this.margin-this.size;break}const s=n-Ar;this.headerEl.style.left=`${e.left+t}px`,this.headerEl.style.top=`${e.top+s}px`}render(e){var g,b;if(!this.visible){this.positionHeader(e.domElement.getBoundingClientRect());return}if(this.positionHeader(e.domElement.getBoundingClientRect()),this.collapsed)return;const t=this.textures,n=(g=this.mat.uniforms.map)==null?void 0:g.value;if(!t&&!n)return;const s=e.getPixelRatio(),r=e.domElement.width,o=e.domElement.height,l=Math.max(1,Math.floor(this.size*s)),c=Math.max(0,Math.floor(this.margin*s));let u=0,d=0;switch(this.corner){case"tl":u=c,d=o-l-c-Math.floor(Ar*s);break;case"tr":u=r-l-c,d=o-l-c-Math.floor(Ar*s);break;case"bl":u=c,d=c;break;case"br":u=r-l-c,d=c;break}const p=e.autoClear,m=e.getScissorTest();e.getScissor(this.prevScissor),e.getViewport(this.prevViewport);try{if(e.setScissorTest(!0),e.autoClear=!1,t){const w=t.length,x=Math.ceil(Math.sqrt(w)),v=Math.ceil(w/x),M=Math.max(1,Math.floor(l/Math.max(x,v)));for(let y=0;y<w;y++){const S=y%x,C=Math.floor(y/x),P=u+S*M,T=d+l-(C+1)*M;this.mat.uniforms.map&&(this.mat.uniforms.map.value=(b=t[y])!=null?b:null),e.setScissor(P,T,M,M),e.setViewport(P,T,M,M),e.render(this.scene,this.cam)}}else n&&(e.setScissor(u,d,l,l),e.setViewport(u,d,l,l),e.render(this.scene,this.cam))}finally{e.setScissor(this.prevScissor.x,this.prevScissor.y,this.prevScissor.z,this.prevScissor.w),e.setViewport(this.prevViewport.x,this.prevViewport.y,this.prevViewport.z,this.prevViewport.w),e.setScissorTest(m),e.autoClear=p}}dispose(){this.detachHeader(),this.mat.dispose(),this.quad.geometry.dispose()}}class e2 extends nn{constructor(e){super({glslVersion:Kn,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1,side:0,uniforms:{uTexelsPerMeter:{value:e.texelsPerMeter},uLightmapSize:{value:e.lightmapSize}},vertexShader:`
                in vec2 uv2;
                out vec2 vUv2;
                out vec3 vWorldPos;

                void main() {
                    vUv2 = uv2;
                    vec4 wp = modelMatrix * vec4(position, 1.0);
                    vWorldPos = wp.xyz;
                    gl_Position = projectionMatrix * viewMatrix * wp;
                }
            `,fragmentShader:`
                precision highp float;

                uniform float uTexelsPerMeter;
                uniform float uLightmapSize;

                in vec2 vUv2;
                in vec3 vWorldPos;
                out vec4 fragColor;

                void main() {
                    // dUV/dx in UV2 space, then \xD7 lightmapSize \u2192 texels covered per pixel-step in screen-x.
                    // dWorld/dx \u2192 world-units per pixel-step in screen-x.
                    // texelsPerWorld = (texels per pixel) / (world per pixel) = (dUV * res) / dWorld.
                    vec2 dUVdx = dFdx(vUv2) * uLightmapSize;
                    vec2 dUVdy = dFdy(vUv2) * uLightmapSize;
                    vec3 dWdx = dFdx(vWorldPos);
                    vec3 dWdy = dFdy(vWorldPos);

                    // Detect missing uv2 attribute (pre-bake state). xatlas
                    // writes uv2 only after the bake completes; before that,
                    // the attribute is absent \u2192 vUv2 reads as zero across the
                    // primitive \u2192 derivatives are zero. Without this guard the
                    // density viz is stuck on red and looks like an undersample
                    // bug rather than "atlas not built yet".
                    float uvLen = length(dUVdx) + length(dUVdy);
                    if (uvLen < 1e-6) {
                        // Magenta checker = "bake first to see real density".
                        const float NOATLAS_SQUARE = 0.5;
                        vec3 wc = floor(vWorldPos / NOATLAS_SQUARE);
                        float k = mod(wc.x + wc.y + wc.z, 2.0);
                        fragColor = vec4(vec3(1.0, 0.0, 1.0) * (k > 0.5 ? 1.0 : 0.55), 1.0);
                        return;
                    }

                    float texelsPerWorldX = length(dUVdx) / max(length(dWdx), 1e-6);
                    float texelsPerWorldY = length(dUVdy) / max(length(dWdy), 1e-6);
                    // Geometric mean is robust to anisotropic stretching.
                    float texelDensity = sqrt(texelsPerWorldX * texelsPerWorldY);

                    float ratio = texelDensity / max(uTexelsPerMeter, 1e-6);

                    // Color band selection.
                    vec3 c;
                    if      (ratio < 0.5) c = vec3(1.0, 0.0, 0.0);
                    else if (ratio < 0.8) c = vec3(1.0, 1.0, 0.0);
                    else if (ratio < 1.2) c = vec3(0.0, 1.0, 0.0);
                    else if (ratio < 1.5) c = vec3(0.0, 1.0, 1.0);
                    else                  c = vec3(0.0, 0.0, 1.0);

                    // Checker in WORLD space \u2014 one square = CHECKER_TEXELS target
                    // texels wide. Decoupled from the actual texel size so the
                    // pattern stays readable as density slides up. Triplanar
                    // XOR sum covers all axes \u2014 squares stay UNIFORMLY square
                    // across the scene if density is on-target.
                    const float CHECKER_TEXELS = 4.0;
                    float worldPerSquare = CHECKER_TEXELS / max(uTexelsPerMeter, 1e-6);
                    vec3 wcell = floor(vWorldPos / worldPerSquare);
                    float check = mod(wcell.x + wcell.y + wcell.z, 2.0);
                    float bright = check > 0.5 ? 1.0 : 0.6;

                    fragColor = vec4(c * bright, 1.0);
                }
            `})}setTexelsPerMeter(e){const t=this.uniforms.uTexelsPerMeter;t&&(t.value=e)}setLightmapSize(e){const t=this.uniforms.uLightmapSize;t&&(t.value=e)}}class t2 extends nn{constructor(e){super({glslVersion:Kn,uniforms:{tSource:{value:e}},vertexShader:`
        out vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = vec4(position.xy, 0.0, 1.0);
        }
      `,fragmentShader:`
        precision highp float;
        in vec2 vUv;
        uniform sampler2D tSource;
        out vec4 fragColor;
        void main() {
          fragColor = texture(tSource, vUv);
        }
      `})}customProgramCacheKey(){return"DownscaleMaterial|glsl3|single-out"}}const n2=new ci;function i2(i,e,t){const n=new Ln(t,t,{type:Yn,minFilter:bt,magFilter:bt,generateMipmaps:!1}),s=new t2(e),r=new fe(new Bn(2,2),s),o=()=>{const c=i.getRenderTarget();try{i.setRenderTarget(n),i.render(r,n2)}finally{i.setRenderTarget(c)}},l=c=>{const u=s.uniforms.tSource;if(!u)throw new Error("[baker] DownscaleMaterial missing tSource uniform");u.value=c};return o(),{texture:n.texture,refresh:o,setSource:l,dispose:()=>{n.dispose(),s.dispose(),r.geometry.dispose()}}}function s2(i,e,t){var r,o;const n=[],s=new Map;for(const l of i){const c=(r=e[l.uuid])!=null?r:{};if(c.exclude===!0){n.push(l);continue}const u=(o=c.resolution)!=null?o:t;s.has(u)||s.set(u,[]),s.get(u).push(l)}return s.size===0&&n.length<i.length&&s.set(t,i.filter(l=>{var c;return!((c=e[l.uuid])!=null&&c.exclude)})),{excluded:n,groups:s,resolution:t}}function r2(i,e,t,n){var u,d;const s=[],r=[];for(const p of i)((u=e[p.uuid])==null?void 0:u.exclude)===!0?s.push(p):r.push(p);const o={};for(const p of r){const m=(d=e[p.uuid])==null?void 0:d.density;m!==void 0&&m!==1&&(o[p.uuid]=m)}const l=new Map;if(r.length===0)return{excluded:s,groups:l,resolution:t};const c=_C(r,{atlasResolution:t,texelsPerMeter:n,perMeshScale:o});for(let p=0;p<r.length;p++){const m=c[p];l.has(m.atlasIdx)||l.set(m.atlasIdx,[]),l.get(m.atlasIdx).push(m.mesh)}return{excluded:s,groups:l,resolution:t}}const o2={discrete:{initialTileSize:1024,maxBatchMs:500},integrated:{initialTileSize:256,maxBatchMs:250},unknown:{initialTileSize:256,maxBatchMs:250}};function a2(i){const e=i.toLowerCase();return["intel hd","intel uhd","iris","vega","mali","adreno","powervr"].some(s=>e.includes(s))?"integrated":["geforce","rtx","gtx","quadro","radeon rx","radeon pro","apple m"].some(s=>e.includes(s))?"discrete":"unknown"}function l2(i){var l,c;const e=i.getContext(),t=e.getExtension("WEBGL_debug_renderer_info"),n=t?String((l=e.getParameter(t.UNMASKED_VENDOR_WEBGL))!=null?l:""):"",s=t?String((c=e.getParameter(t.UNMASKED_RENDERER_WEBGL))!=null?c:""):"",r=a2(s),o=o2[r];return{tier:r,vendor:n,renderer:s,initialTileSize:o.initialTileSize,maxBatchMs:o.maxBatchMs,maxFrameMs:16}}const Km=(i,e)=>new We(i!=null?i:e).convertSRGBToLinear(),Zm=i=>i>0&&(i&i-1)===0;function c2(i){var c,u,d,p,m,g,b,w,x,v,M,y;const e=(c=i.samples)!=null?c:96;if(!Number.isFinite(e)||e<1||e>4096)throw new pt(`samples must be 1-4096, got ${e}`,"validation");const t=(u=i.castsPerFrame)!=null?u:5;if(!Number.isFinite(t)||t<1||t>256)throw new pt(`castsPerFrame must be 1-256, got ${t}`,"validation");const n=(d=i.ao)==null?void 0:d.samples;if(n!==void 0&&(!Number.isFinite(n)||n<0||n>64))throw new pt(`ao.samples must be 0-64, got ${n}`,"validation");const s=(p=i.bounces)!=null?p:1;if(!Number.isInteger(s)||s<0||s>8)throw new pt(`bounces must be integer 0-8, got ${s}`,"validation");const r=(m=i.resolution)!=null?m:1024;if(!Number.isFinite(r)||r<16||r>4096)throw new pt(`resolution must be 16-4096, got ${r}`,"validation");if(!Zm(r))throw new pt(`resolution must be a power of two, got ${r}`,"validation");const o=(g=i.superSample)!=null?g:1;if(!Number.isInteger(o)||o<1||o>4)throw new pt(`superSample must be integer 1-4, got ${o}`,"validation");if(r*o>4096)throw new pt(`resolution \xD7 superSample must be \u2264 4096, got ${r*o}`,"validation");if(((b=i.light)==null?void 0:b.intensity)!==void 0&&i.light.intensity<0)throw new pt(`light.intensity must be >= 0, got ${i.light.intensity}`,"validation");if(((w=i.light)==null?void 0:w.size)!==void 0&&i.light.size<0)throw new pt(`light.size must be >= 0, got ${i.light.size}`,"validation");if(((x=i.gi)==null?void 0:x.intensity)!==void 0&&i.gi.intensity<0)throw new pt(`gi.intensity must be >= 0, got ${i.gi.intensity}`,"validation");if(((v=i.gi)==null?void 0:v.skyIntensity)!==void 0&&i.gi.skyIntensity<0)throw new pt(`gi.skyIntensity must be >= 0, got ${i.gi.skyIntensity}`,"validation");if(((M=i.ao)==null?void 0:M.distance)!==void 0&&i.ao.distance<0)throw new pt(`ao.distance must be >= 0, got ${i.ao.distance}`,"validation");if(i.texelsPerMeter!==void 0){const C=i.texelsPerMeter;if(!Number.isFinite(C)||C<=0||C>1024)throw new pt(`texelsPerMeter must be in (0, 1024], got ${C}`,"validation")}for(const[C,P]of Object.entries((y=i.perMesh)!=null?y:{})){const T=P.resolution;if(T!==void 0){if(!Number.isFinite(T)||T<128||T>4096)throw new pt(`perMesh[${C}].resolution must be 128-4096, got ${T}`,"validation");if(!Zm(T))throw new pt(`perMesh[${C}].resolution must be a power of two, got ${T}`,"validation")}const I=P.density;if(I!==void 0&&(!Number.isFinite(I)||I<.1||I>10))throw new pt(`perMesh[${C}].density must be in [0.1, 10], got ${I}`,"validation")}i.texelsPerMeter;const l=i.timeoutProtection;if((l==null?void 0:l.initialTileSize)!==void 0){const C=l.initialTileSize;if(!Number.isFinite(C)||C<16||C>4096)throw new pt(`timeoutProtection.initialTileSize must be 16-4096, got ${C}`,"validation")}if((l==null?void 0:l.maxBatchMs)!==void 0&&(!Number.isFinite(l.maxBatchMs)||l.maxBatchMs<=0))throw new pt(`timeoutProtection.maxBatchMs must be > 0, got ${l.maxBatchMs}`,"validation");if((l==null?void 0:l.maxFrameMs)!==void 0&&(!Number.isFinite(l.maxFrameMs)||l.maxFrameMs<=0))throw new pt(`timeoutProtection.maxFrameMs must be > 0, got ${l.maxFrameMs}`,"validation")}function u2(i,e){var n,s,r,o,l;const t=(n=i==null?void 0:i.safeMode)!=null?n:!1;return{safeMode:t,initialTileSize:(s=i==null?void 0:i.initialTileSize)!=null?s:t?64:e.initialTileSize,maxBatchMs:(r=i==null?void 0:i.maxBatchMs)!=null?r:t?100:e.maxBatchMs,maxFrameMs:(o=i==null?void 0:i.maxFrameMs)!=null?o:e.maxFrameMs,autoAdapt:(l=i==null?void 0:i.autoAdapt)!=null?l:!0}}const Qm={dilationIterations:4,denoiseEnabled:!0,denoiseSigma:2.5,denoiseThreshold:.18,denoiseKSigma:1};class h2{constructor(e,t,n,s,r){this.renderer=e,this.meshLightmaps=t,this.meshResolutions=n,this.stats=s,this.internals=r}get lightmaps(){return new Map(this.meshLightmaps)}get bvh(){return this.internals.bvh}get groups(){return this.internals.groups.map(e=>{var t,n;return{meshes:e.meshes,resolution:e.resolution,internalResolution:e.internalResolution,lightmapper:e.lightmapper,aoMapper:e.aoMapper,textures:{direct:e.lightmapper.textures.direct,indirect:e.lightmapper.textures.indirect,ao:e.aoMapper.texture,composite:e.composite.texture,refinement:(n=(t=e.refinement)==null?void 0:t.texture)!=null?n:null,position:e.positionTex,normal:e.normalTex}}})}getGroupForMesh(e){var t,n;for(const s of this.internals.groups)if(s.meshes.includes(e))return{meshes:s.meshes,resolution:s.resolution,internalResolution:s.internalResolution,lightmapper:s.lightmapper,aoMapper:s.aoMapper,textures:{direct:s.lightmapper.textures.direct,indirect:s.lightmapper.textures.indirect,ao:s.aoMapper.texture,composite:s.composite.texture,refinement:(n=(t=s.refinement)==null?void 0:t.texture)!=null?n:null,position:s.positionTex,normal:s.normalTex}};return null}apply(){for(const[e,t]of this.meshLightmaps){const n=e.material;!n||(n.lightMap=t,t.channel=2,n.lightMapIntensity=1,n.needsUpdate=!0)}}async export(e="lightmap",t={}){var o,l,c,u,d;const n=(o=t.format)!=null?o:"png",s=e.replace(/[\/\\]+$/,"").split(/[\/\\]/).pop()||"lightmap",r=this.internals.groups;for(let p=0;p<r.length;p++){const m=r[p],g=(d=(u=(l=m.downscale)==null?void 0:l.texture)!=null?u:(c=m.refinement)==null?void 0:c.texture)!=null?d:m.composite.texture,b=r.length>1?`${s}_group${p}`:s;await J0(this.renderer,g,m.resolution,b,n)}}dispose(){var e,t;for(const n of this.internals.groups)(e=n.downscale)==null||e.dispose(),(t=n.refinement)==null||t.dispose(),n.composite.dispose(),n.aoMapper.dispose(),n.lightmapper.dispose(),n.atlasDispose();this.internals.matTexDispose()}refreshAO(e){for(const t of this.internals.groups)t.composite.refresh({aoIntensity:e.intensity,aoExponent:e.exponent,aoEnabled:e.enabled})}async rebakeAO(e,t={}){const n=this.internals.groups;for(let s=0;s<n.length;s++){const r=n[s],o={resolution:r.internalResolution,aoSamples:e.samples,ambientDistance:e.distance,targetSamples:e.targetSamples};if(await x2(this.renderer,this.internals.bvh,r,o,t,s,n.length,l=>{var c;return(c=t.onProgress)==null?void 0:c.call(t,"bake",(s+l)/n.length)}),r.refinement)if(r.refinement.dispose(),r.refinement=await Zh(this.renderer,r.composite.texture,r.positionTex,r.internalResolution,this.internals.refinementOptions),r.downscale)r.downscale.setSource(r.refinement.texture),r.downscale.refresh();else{const l=r.refinement.texture;for(const[c,u]of this.meshResolutions)u===r.resolution&&this.meshLightmaps.set(c,l)}else r.downscale&&r.downscale.refresh()}}}class d2{constructor(e,t={}){var n,s,r,o,l,c,u,d,p,m,g,b,w,x,v,M,y,S,C,P,T,I,F,E,R,B,W,U,H,G,X,Q,Y,ie,ne,me,he,$,se,xe;this.renderer=e,c2(t),this.opts={samples:(n=t.samples)!=null?n:96,castsPerFrame:(s=t.castsPerFrame)!=null?s:5,bounces:Math.min(4,Math.max(1,(r=t.bounces)!=null?r:1)),resolution:(o=t.resolution)!=null?o:1024,superSample:(l=t.superSample)!=null?l:1,denoise:(c=t.denoise)!=null?c:!0,filtering:(u=t.filtering)!=null?u:"linear",texelsPerMeter:(d=t.texelsPerMeter)!=null?d:0,perMesh:(p=t.perMesh)!=null?p:{},light:{position:(g=(m=t.light)==null?void 0:m.position)!=null?g:new D(0,10,0),color:(w=(b=t.light)==null?void 0:b.color)!=null?w:16777215,intensity:(v=(x=t.light)==null?void 0:x.intensity)!=null?v:2,size:(y=(M=t.light)==null?void 0:M.size)!=null?y:1,enabled:(C=(S=t.light)==null?void 0:S.enabled)!=null?C:!0},gi:{enabled:(T=(P=t.gi)==null?void 0:P.enabled)!=null?T:!0,intensity:(F=(I=t.gi)==null?void 0:I.intensity)!=null?F:1,skyColor:(R=(E=t.gi)==null?void 0:E.skyColor)!=null?R:16777215,skyIntensity:(W=(B=t.gi)==null?void 0:B.skyIntensity)!=null?W:0},ao:{enabled:(H=(U=t.ao)==null?void 0:U.enabled)!=null?H:!0,distance:(X=(G=t.ao)==null?void 0:G.distance)!=null?X:.5,intensity:(Y=(Q=t.ao)==null?void 0:Q.intensity)!=null?Y:1,exponent:(ne=(ie=t.ao)==null?void 0:ie.exponent)!=null?ne:1.5,samples:($=(he=(me=t.ao)==null?void 0:me.samples)!=null?he:t.castsPerFrame)!=null?$:5},refinementOptions:{...Qm,...(se=t.refinementOptions)!=null?se:{},denoiseEnabled:(xe=t.denoise)!=null?xe:Qm.denoiseEnabled},timeoutProtection:t.timeoutProtection}}async bake(e,t={}){const n=performance.now(),s=p2(e);if(!s.length)throw new pt("no bake-eligible meshes in scene (need Mesh + MeshStandardMaterial-like)","validation");if(!this.renderer.getContext().getExtension("EXT_color_buffer_float"))throw new pt("EXT_color_buffer_float WebGL2 extension is unavailable; FloatType RTs cannot be allocated","validation");const o=l2(this.renderer),l=u2(this.opts.timeoutProtection,o),c={lost:!1},u=this.renderer.domElement,d=g=>{g.preventDefault(),c.lost=!0,console.error("[baker] webglcontextlost during bake \u2014 cancelling")};u.addEventListener("webglcontextlost",d,!1);const p=()=>{u.removeEventListener("webglcontextlost",d,!1)};e.updateMatrixWorld(!0);const m=g=>{var b;if((b=t.signal)!=null&&b.aborted)throw new pt("aborted by signal",g);if(c.lost)throw new pt("webgl context lost","context-loss")};try{return await this.bakeInternal(s,e,t,n,l,c,m)}finally{p()}}async bakeInternal(e,t,n,s,r,o,l){var Q,Y,ie,ne,me,he,$,se,xe;const c=this.opts.texelsPerMeter,u=c>0?r2(e,this.opts.perMesh,this.opts.resolution,c):s2(e,this.opts.perMesh,this.opts.resolution),{excluded:d,groups:p}=u,m=we=>c>0?u.resolution:we,g=performance.now();(Q=n.onProgress)==null||Q.call(n,"uv-unwrap",0);const b=[...p.values()].flat();await k1(b),(Y=n.onProgress)==null||Y.call(n,"uv-unwrap",1),l("unwrap");const w=performance.now(),x=performance.now();(ie=n.onProgress)==null||ie.call(n,"geometry",0);const v=pC(e),M=new Kh(v);(ne=n.onProgress)==null||ne.call(n,"geometry",.5);const y=mC(v,e),S=gC(y);(me=n.onProgress)==null||me.call(n,"geometry",1),l("geometry");const C=performance.now(),P=Km(this.opts.gi.skyColor,16777215);let T=nC(t);if(T.length===0&&this.opts.light.enabled){const we=Km(this.opts.light.color,16777215);T=[{type:"point",position:this.opts.light.position.clone(),direction:new D(0,-1,0),color:we.multiplyScalar(this.opts.light.intensity),params:[this.opts.light.size,0,0,0]}]}const I=performance.now(),F=[...p.keys()],E=[],R=new Map,B=new Map;for(let we=0;we<F.length;we++){const Ae=F[we],_e=m(Ae),ke=_e*this.opts.superSample,Ue=p.get(Ae);(he=n.onProgress)==null||he.call(n,"bake",we/F.length),l("bake");const j=W1(this.renderer,Ue,ke,!0),Ct=f2(this.opts,ke,T,P,S,r),Pe=m2(this.opts,ke,r),Ve=rC(this.renderer,j.positionTexture,j.normalTexture,M,Ct),Ce=X0(this.renderer,j.positionTexture,j.normalTexture,M,Pe),ut=j0(this.renderer,{direct:Ve.textures.direct,indirect:Ve.textures.indirect,ao:Ce.texture},ke,{directIntensity:1,giIntensity:this.opts.gi.intensity,aoEnabled:this.opts.ao.enabled,aoIntensity:this.opts.ao.intensity,aoExponent:this.opts.ao.exponent});await _2(Ve,Ce,ut,this.opts.samples,n,o,r,we,F.length,ue=>{var re;return(re=n.onProgress)==null?void 0:re.call(n,"bake",(we+ue)/F.length)});let ze=null;(this.opts.denoise||this.opts.refinementOptions.dilationIterations>0)&&(ze=await Zh(this.renderer,ut.texture,j.positionTexture,ke,this.opts.refinementOptions));const k=($=ze==null?void 0:ze.texture)!=null?$:ut.texture,L=this.opts.superSample>1?i2(this.renderer,k,_e):null,Z=(se=L==null?void 0:L.texture)!=null?se:k;E.push({lightmapper:Ve,aoMapper:Ce,composite:ut,refinement:ze,atlasDispose:j.dispose,resolution:_e,internalResolution:ke,downscale:L,meshes:Ue,positionTex:j.positionTexture,normalTex:j.normalTexture});for(const ue of Ue)R.set(ue,Z),B.set(ue,_e)}const W=performance.now(),U=performance.now();(xe=n.onProgress)==null||xe.call(n,"refine",1);const H=performance.now();performance.now(),this.renderer.getContext().finish(),performance.now();const G=F.reduce((we,Ae)=>{const _e=m(Ae);return we+_e*_e},0),X={meshCount:b.length,texelCount:G,raysTraced:this.opts.samples*this.opts.castsPerFrame*G,duration:{uvUnwrap:w-g,geometry:C-x,bake:W-I,refine:H-U,total:performance.now()-s}};return new h2(this.renderer,R,B,X,{groups:E,bvh:M,refinementOptions:this.opts.refinementOptions,denoise:this.opts.denoise,matTexDispose:()=>{S.albedoTexture.dispose(),S.emissiveTexture.dispose()}})}}function p2(i){const e=[];return i.traverse(t=>{var r;if(!t.isMesh||!t.visible||(r=t.userData)!=null&&r.lightmapIgnore)return;const n=t;(Array.isArray(n.material)?n.material:[n.material]).some(o=>o&&o.isMeshStandardMaterial)&&e.push(n)}),e}function f2(i,e,t,n,s,r){return{resolution:e,casts:i.castsPerFrame,filterMode:i.filtering==="linear"?bt:mt,lights:t,skyColor:n,skyIntensity:i.gi.skyIntensity,directLightEnabled:i.light.enabled,indirectLightEnabled:i.gi.enabled,albedoTexture:s.albedoTexture,emissiveTexture:s.emissiveTexture,materialTextureSize:s.side,targetSamples:i.samples,bounces:i.bounces,tileSize:r.initialTileSize}}function m2(i,e,t){return{resolution:e,aoSamples:i.ao.samples,ambientDistance:i.ao.distance,targetSamples:i.samples,tileSize:t.initialTileSize}}const g2=64;function v2(i,e,t){return i.length<4?e:i.slice(-4).filter(r=>r>t.maxFrameMs*1.5).length>=3?Math.max(g2,e>>1):e}function _2(i,e,t,n,s,r,o,l,c,u){return new Promise((d,p)=>{const m=[];let g=performance.now(),b=o.initialTileSize;const w=()=>{var C,P;if((C=s.signal)!=null&&C.aborted){p(new pt("aborted by signal","bake"));return}if(r.lost){p(new pt("webgl context lost during bake","context-loss"));return}const x=performance.now();if(m.push(x-g),m.length>8&&m.shift(),g=x,o.autoAdapt){const T=v2(m,b,o);T!==b&&(console.warn(`[baker] adaptive throttle: tileSize ${b} \u2192 ${T}`),b=T,i.setTileSize(b),e.setTileSize(b),m.length=0)}const v=i.renderTiled(o.maxFrameMs),M=e.renderTiled(o.maxFrameMs),y=Math.min(v.samples,M.samples);u(n>0?y/n:1);const S=v.done&&M.done;if((v.sampleComplete||M.sampleComplete)&&t.refresh(),(P=s.onFrame)==null||P.call(s,{groupIndex:l,totalGroups:c,bounceSamples:v.samples,aoSamples:M.samples,targetSamples:n,done:S,compositeTexture:t.texture,directTexture:i.textures.direct,indirectTexture:i.textures.indirect,aoTexture:e.texture}),S){d();return}requestAnimationFrame(w)};requestAnimationFrame(w)})}function x2(i,e,t,n,s,r,o,l){const c=X0(i,t.positionTex,t.normalTex,e,n);return t.aoMapper.dispose(),t.aoMapper=c,t.composite.refresh({aoTex:c.texture}),new Promise((u,d)=>{const p=()=>{var g,b;if((g=s.signal)!=null&&g.aborted){d(new pt("aborted by signal","bake"));return}const m=c.render();if(l(n.targetSamples>0?m.samples/n.targetSamples:1),t.composite.refresh(),(b=s.onFrame)==null||b.call(s,{groupIndex:r,totalGroups:o,bounceSamples:0,aoSamples:m.samples,targetSamples:n.targetSamples,done:m.done,compositeTexture:t.composite.texture,directTexture:t.lightmapper.textures.direct,indirectTexture:t.lightmapper.textures.indirect,aoTexture:c.texture}),m.done){u();return}requestAnimationFrame(p)};requestAnimationFrame(p)})}const Jm={0:"NO_ERROR",1280:"INVALID_ENUM",1281:"INVALID_VALUE",1282:"INVALID_OPERATION",1283:"STACK_OVERFLOW",1284:"STACK_UNDERFLOW",1285:"OUT_OF_MEMORY",1286:"INVALID_FRAMEBUFFER_OPERATION",37442:"CONTEXT_LOST_WEBGL"};class ev{constructor(e){this.renderer=e,this.start=performance.now(),this.snapshots=[],this.lastCalls=0,this.lastTriangles=0}banner(){var d,p;const e=this.renderer.getContext(),t=e.getExtension("WEBGL_debug_renderer_info"),n=t?String((d=e.getParameter(t.UNMASKED_VENDOR_WEBGL))!=null?d:""):"<masked>",s=t?String((p=e.getParameter(t.UNMASKED_RENDERER_WEBGL))!=null?p:""):"<masked>",r=e.getContextAttributes(),o={MAX_TEXTURE_SIZE:e.getParameter(e.MAX_TEXTURE_SIZE),MAX_RENDERBUFFER_SIZE:e.getParameter(e.MAX_RENDERBUFFER_SIZE),MAX_DRAW_BUFFERS:e.getParameter(e.MAX_DRAW_BUFFERS),MAX_COLOR_ATTACHMENTS:e.getParameter(e.MAX_COLOR_ATTACHMENTS),MAX_TEXTURE_IMAGE_UNITS:e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),MAX_FRAGMENT_UNIFORM_VECTORS:e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),MAX_VARYING_VECTORS:e.getParameter(e.MAX_VARYING_VECTORS),MAX_VIEWPORT_DIMS:e.getParameter(e.MAX_VIEWPORT_DIMS)},l=["EXT_color_buffer_float","EXT_color_buffer_half_float","OES_texture_float_linear","OES_texture_half_float_linear","WEBGL_lose_context","EXT_disjoint_timer_query_webgl2","WEBGL_debug_renderer_info"],c={};for(const m of l)c[m]=!!e.getExtension(m);const u=performance.memory;console.group("[diag] === GPU BANNER ==="),console.log("vendor:",n),console.log("renderer:",s),console.log("webgl version:",e.getParameter(e.VERSION)),console.log("GLSL:",e.getParameter(e.SHADING_LANGUAGE_VERSION)),console.log("context attrs:",r),console.log("limits:",o),console.log("extensions:",c),u&&console.log("JS heap (MB):",`used=${(u.usedJSHeapSize/1048576).toFixed(1)}`,`total=${(u.totalJSHeapSize/1048576).toFixed(1)}`,`limit=${(u.jsHeapSizeLimit/1048576).toFixed(1)}`),console.groupEnd()}snap(e){var d,p,m;const t=this.renderer.getContext();let n=0,s=0;do s=t.getError(),s!==0&&(n=s);while(s!==0);const r=this.renderer.info,o=(p=(d=r.programs)==null?void 0:d.length)!=null?p:0,l=r.render.calls-this.lastCalls,c=r.render.triangles-this.lastTriangles;this.lastCalls=r.render.calls,this.lastTriangles=r.render.triangles;const u={label:e,t:performance.now()-this.start,glError:(m=Jm[n])!=null?m:`0x${n.toString(16)}`,threejs:{geometries:r.memory.geometries,textures:r.memory.textures,programs:o,calls:r.render.calls,triangles:r.render.triangles}};return this.snapshots.push(u),console.log(`[diag] ${u.t.toFixed(1).padStart(8)}ms ${e}`,`gl=${u.glError}`,`geo=${u.threejs.geometries} tex=${u.threejs.textures} prog=${u.threejs.programs}`,`\u0394calls=${l} \u0394tris=${c}`),u}measure(e,t){var u;const n=this.renderer.getContext();for(;n.getError()!==0;);const s=performance.now(),r=t();n.finish();const o=performance.now()-s;let l=0,c=0;do c=n.getError(),c!==0&&(l=c);while(c!==0);return console.log(`[diag] MEASURE ${e}: ${o.toFixed(1)}ms gl=${(u=Jm[l])!=null?u:`0x${l.toString(16)}`}`),r}contextLossInfo(){var n,s;const e=this.renderer.getContext(),t=e.getExtension("WEBGL_lose_context");console.group("[diag] === CONTEXT LOSS DUMP ==="),console.log("isContextLost:",(n=e.isContextLost)==null?void 0:n.call(e)),console.log("snapshot history (last 10):",this.snapshots.slice(-10)),console.log("threejs info at loss:",{geometries:this.renderer.info.memory.geometries,textures:this.renderer.info.memory.textures,programs:(s=this.renderer.info.programs)==null?void 0:s.length,autoReset:this.renderer.info.autoReset}),t&&console.log("lose_context ext present"),console.groupEnd()}dump(){return this.snapshots.slice()}}function tv(i){const e=Lc(0),t=Lc(0),n=Lc(!1);return Dg(()=>{const s=o=>{var d,p;if(!n.current)return;const l=o.clientX-e.current,c=i.side==="left"?l:-l,u=Math.max((d=i.min)!=null?d:180,Math.min((p=i.max)!=null?p:500,t.current+c));i.onResize(u)},r=()=>{n.current=!1,document.body.style.cursor=""};return window.addEventListener("mousemove",s),window.addEventListener("mouseup",r),()=>{window.removeEventListener("mousemove",s),window.removeEventListener("mouseup",r)}},[i.side,i.min,i.max,i.onResize]),ve("div",{class:"absolute top-0 bottom-0 w-1 cursor-col-resize bg-border hover:bg-accent/40 transition-colors pointer-events-auto z-10",style:i.side==="left"?{right:"-2px"}:{left:"-2px"},onMouseDown:s=>{s.preventDefault(),e.current=s.clientX,t.current=i.width,n.current=!0,document.body.style.cursor="col-resize"}})}const $r=On(null),ta=On([]),yl=On("translate"),zl=On("idle"),nv=On({pct:0,samples:0,atlas:0,total:0,elapsedMs:0}),iv=On(!1);On("combined");const b2=On("cornell.advanced"),tn=On({outlinerW:280,inspectorW:320,logOpen:!1}),sv=On([]),eg=On("object");Ah(()=>zl.value==="baking");const y2=[{id:"object",label:"Object"},{id:"light",label:"Light"},{id:"material",label:"Material"},{id:"lightmap",label:"Lightmap"},{id:"bake",label:"Bake"},{id:"world",label:"World"}];function w2(){const i=eg.value;return ve("aside",{class:"relative bg-bg-1 border-l border-border flex flex-col text-[12px] pointer-events-auto",style:{width:`${tn.value.inspectorW}px`},children:[ve("div",{class:"border-b border-border bg-bg-2 flex",children:y2.map(e=>ve("button",{type:"button",class:`flex-1 px-2 h-7 text-[11px] font-medium border-r border-border last:border-r-0 ${i===e.id?"text-text-0 bg-bg-1 border-b-2 border-b-accent":"text-text-1 hover:text-text-0 hover:bg-bg-3"}`,onClick:()=>eg.value=e.id,children:e.label}))}),ve("div",{class:"flex-1 overflow-auto p-2 text-text-2",children:ve("div",{class:"italic",children:["Tab '",i,"' lands in T-D5 / T-D6."]})}),ve(tv,{side:"right",width:tn.value.inspectorW,onResize:e=>tn.value={...tn.value,inspectorW:e},min:240,max:520})]})}/**
 * @license lucide-preact v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M2=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),E2=(...i)=>i.filter((e,t,n)=>Boolean(e)&&e.trim()!==""&&n.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-preact v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var S2={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-preact v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T2=({color:i="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:n,children:s,iconNode:r,class:o="",...l})=>Sl("svg",{...S2,width:String(e),height:e,stroke:i,["stroke-width"]:n?Number(t)*24/Number(e):t,class:["lucide",o].join(" "),...l},[...r.map(([c,u])=>Sl(c,u)),...Ag(s)]);/**
 * @license lucide-preact v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zn=(i,e)=>{const t=({class:n="",children:s,...r})=>Sl(T2,{...r,iconNode:e,class:E2(`lucide-${M2(i)}`,n)},s);return t.displayName=`${i}`,t};/**
 * @license lucide-preact v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A2=Zn("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-preact v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C2=Zn("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-preact v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P2=Zn("EyeOff",[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-preact v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R2=Zn("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-preact v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L2=Zn("GitCompareArrows",[["circle",{cx:"5",cy:"6",r:"3",key:"1qnov2"}],["path",{d:"M12 6h5a2 2 0 0 1 2 2v7",key:"1yj91y"}],["path",{d:"m15 9-3-3 3-3",key:"1lwv8l"}],["circle",{cx:"19",cy:"18",r:"3",key:"1qljk2"}],["path",{d:"M12 18H7a2 2 0 0 1-2-2V9",key:"16sdep"}],["path",{d:"m9 15 3 3-3 3",key:"1m3kbl"}]]);/**
 * @license lucide-preact v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I2=Zn("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-preact v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D2=Zn("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-preact v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N2=Zn("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);/**
 * @license lucide-preact v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U2=Zn("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-preact v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k2=Zn("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-preact v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F2=Zn("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-preact v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O2=Zn("Square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]),Qn=i=>i,B2=Qn(A2),V2=Qn(C2),z2=Qn(R2),H2=Qn(P2),G2=Qn(L2),W2=Qn(I2),X2=Qn(D2),j2=Qn(N2),$2=Qn(U2),q2=Qn(k2),Y2=Qn(F2),rv=Qn(O2);let ov=null;function K2(i){ov=i}function av(){return ov}function Z2(){const i=ta.value,e=i.filter(n=>n.kind==="light"),t=i.filter(n=>n.kind==="mesh");return ve("aside",{class:"relative bg-bg-1 border-r border-border flex flex-col text-[12px] pointer-events-auto",style:{width:`${tn.value.outlinerW}px`},children:[ve("div",{class:"flex items-center justify-between px-2 h-7 border-b border-border bg-bg-2",children:[ve("div",{class:"flex items-center gap-1.5 text-text-1",children:[ve(X2,{size:12}),ve("span",{class:"font-medium text-text-0",children:"Outliner"})]}),ve("button",{type:"button",class:"p-1 text-text-1 hover:bg-bg-3 hover:text-text-0 rounded disabled:opacity-50",title:"Add (T-D7)",disabled:!0,children:ve(q2,{size:12})})]}),ve("div",{class:"flex-1 overflow-auto",children:[ve(tg,{label:"Lights",nodes:e}),ve(tg,{label:"Meshes",nodes:t}),i.length===0&&ve("div",{class:"p-2 text-text-2 italic",children:"Empty scene."})]}),ve("div",{class:"border-t border-border bg-bg-2 h-7 px-2 flex items-center text-text-1",children:[ve("span",{class:"font-medium text-text-0",children:"Assets"}),ve("span",{class:"ml-2 text-text-2 italic",children:"(T-D7)"})]}),ve(tv,{side:"left",width:tn.value.outlinerW,onResize:n=>tn.value={...tn.value,outlinerW:n},min:200,max:480})]})}function tg(i){return i.nodes.length===0?null:ve("div",{class:"border-b border-border/40 last:border-b-0",children:[ve("div",{class:"px-2 py-1 text-[10px] uppercase tracking-wider text-text-2 font-semibold",children:i.label}),ve("ul",{children:i.nodes.map(e=>ve(Q2,{node:e},e.id))})]})}function Q2(i){const e=$r.value===i.node.id;return ve("li",{class:`group flex items-center gap-1.5 px-2 h-[22px] cursor-pointer select-none ${e?"bg-accent/20 text-text-0":"text-text-1 hover:bg-bg-3 hover:text-text-0"}`,onClick:()=>{$r.value=i.node.id},children:[ve("span",{class:`flex-shrink-0 ${e?"text-accent":"text-text-2"}`,children:i.node.kind==="light"?ve(j2,{size:12}):ve(rv,{size:12})}),ve("span",{class:"flex-1 truncate text-[12px]",children:i.node.name}),ve("button",{type:"button",class:"p-0.5 opacity-0 group-hover:opacity-100 text-text-2 hover:text-text-0",onClick:t=>{var s;t.stopPropagation();const n=!i.node.visible;(s=av())==null||s.setNodeVisible(i.node.id,n),ta.value=ta.value.map(r=>r.id===i.node.id?{...r,visible:n}:r)},title:i.node.visible?"Hide":"Show",children:i.node.visible?ve(z2,{size:12}):ve(H2,{size:12})})]})}const J2=Ah(()=>zl.value==="baking");function eP(){const i=av();!i||i.requestBake()}function tP(){tn.value={...tn.value,logOpen:!tn.value.logOpen}}function nP(){const i=nv.value,e=J2.value,t=iv.value;return ve("footer",{class:"h-10 bg-bg-1 border-t border-border flex items-center gap-3 px-3 text-[12px] pointer-events-auto relative",children:[ve("button",{type:"button",class:`flex items-center gap-1.5 px-3 py-1.5 rounded font-medium text-[12px] ${e?"bg-stale/20 text-stale border border-stale/40 cursor-wait":t?"bg-stale text-bg-0 hover:bg-stale/90 animate-pulse":"bg-accent text-bg-0 hover:bg-accent/90"}`,onClick:eP,disabled:e,children:[e?ve(rv,{size:12}):ve($2,{size:12,fill:"currentColor"}),ve("span",{children:e?"Baking\u2026":t?"Re-bake":"Bake"})]}),ve("div",{class:"flex-1 max-w-md",children:ve("div",{class:"h-1.5 bg-bg-3 rounded-full overflow-hidden",children:ve("div",{class:"h-full bg-accent transition-[width] duration-150",style:{width:`${i.pct}%`}})})}),ve("div",{class:"flex items-center gap-3 text-text-1 font-mono text-[11px]",children:[ve("span",{children:[i.samples,"/",i.total," frames"]}),i.atlas>0&&ve("span",{children:["Atlas ",i.atlas,"/",i.total>0?i.atlas:0]}),ve("span",{children:[(i.elapsedMs/1e3).toFixed(1),"s"]})]}),ve("button",{type:"button",class:"ml-auto flex items-center gap-1 p-1.5 text-text-1 hover:bg-bg-3 hover:text-text-0 rounded",onClick:tP,title:"Logs",children:[ve(W2,{size:14}),ve("span",{class:"text-[11px]",children:sv.value.length}),ve(V2,{size:12,class:`transition-transform ${tn.value.logOpen?"rotate-180":""}`})]}),tn.value.logOpen&&ve(iP,{})]})}function iP(){const i=sv.value.slice().reverse();return ve("div",{class:"absolute bottom-full right-2 mb-1 w-[420px] max-h-72 overflow-auto bg-bg-1 border border-border rounded shadow-xl font-mono text-[11px] z-50",children:i.length===0?ve("div",{class:"p-3 text-text-2 italic",children:"No log entries yet."}):ve("ul",{children:i.map(e=>ve("li",{class:`px-2 py-1 border-b border-border/40 last:border-b-0 ${e.level==="error"?"text-red-400":e.level==="warn"?"text-stale":"text-text-1"}`,children:[ve("span",{class:"text-text-2 mr-2",children:new Date(e.ts).toLocaleTimeString()}),e.msg]},e.ts))})})}const sP=["File","Edit","View","Render","Help"],ng=[{id:"cornell.advanced",label:"Cornell Advanced"},{id:"cornell.classic",label:"Cornell Classic"}];function rP(){var e;const i=(e=ng.find(t=>t.id===b2.value))!=null?e:ng[0];return ve("header",{class:"h-9 bg-bg-1/95 backdrop-blur border-b border-border flex items-center px-2 select-none pointer-events-auto",children:[ve("div",{class:"flex items-center gap-2 px-2 mr-2",children:[ve("span",{class:"text-accent text-base leading-none",children:"\u2B22"}),ve("span",{class:"font-semibold text-text-0 text-[13px]",children:"Lightmap Studio"})]}),ve("nav",{class:"flex items-center gap-0.5",children:sP.map(t=>ve("button",{type:"button",class:"px-2.5 py-1 text-[12px] text-text-1 hover:bg-bg-3 hover:text-text-0 rounded",disabled:!0,title:"Wired in T-D9",children:t}))}),ve("div",{class:"flex-1"}),ve("div",{class:"flex items-center gap-1",children:[ve("button",{type:"button",class:"flex items-center gap-1.5 px-2.5 py-1 text-[12px] text-text-0 bg-bg-2 hover:bg-bg-3 rounded border border-border",children:[ve("span",{children:i.label}),ve(B2,{size:12,class:"text-text-2"})]}),ve("button",{type:"button",class:"p-1.5 text-text-1 hover:bg-bg-3 hover:text-text-0 rounded",title:"Compare with reference (T-D9)",disabled:!0,children:ve(G2,{size:14})}),ve("button",{type:"button",class:"p-1.5 text-text-1 hover:bg-bg-3 hover:text-text-0 rounded",title:"Settings (T-D9)",disabled:!0,children:ve(Y2,{size:14})})]})]})}const lv="lightmap-studio.layout.v1";function oP(){var i,e,t;try{const n=localStorage.getItem(lv);if(!n)return;const s=JSON.parse(n);tn.value={outlinerW:(i=s.outlinerW)!=null?i:tn.value.outlinerW,inspectorW:(e=s.inspectorW)!=null?e:tn.value.inspectorW,logOpen:(t=s.logOpen)!=null?t:tn.value.logOpen}}catch{}}let Au=null;function aP(){Au&&clearTimeout(Au),Au=setTimeout(()=>{try{localStorage.setItem(lv,JSON.stringify(tn.value))}catch{}},500)}function lP(){return Dg(()=>(oP(),tn.subscribe(()=>aP())),[]),ve("div",{class:"fixed inset-0 flex flex-col pointer-events-none z-40",children:[ve(rP,{}),ve("div",{class:"flex-1 flex min-h-0",children:[ve(Z2,{}),ve("div",{class:"flex-1 pointer-events-none"}),ve(w2,{})]}),ve(nP,{})]})}const cP="modulepreload",ig={},uP="/three-lightmap-baker/",hP=function(e,t){return!t||t.length===0?e():Promise.all(t.map(n=>{if(n=`${uP}${n}`,n in ig)return;ig[n]=!0;const s=n.endsWith(".css"),r=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${r}`))return;const o=document.createElement("link");if(o.rel=s?"stylesheet":cP,s||(o.as="script",o.crossOrigin=""),o.href=n,document.head.appendChild(o),s)return new Promise((l,c)=>{o.addEventListener("load",l),o.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${n}`)))})})).then(()=>e())};var dP=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},gh={exports:{}};/*! Tweakpane 3.1.0 (c) 2016 cocopon, licensed under the MIT license. */(function(i,e){(function(t,n){n(e)})(dP,function(t){class n{constructor(a){const[h,_]=a.split("-"),A=h.split(".");this.major=parseInt(A[0],10),this.minor=parseInt(A[1],10),this.patch=parseInt(A[2],10),this.prerelease=_!=null?_:null}toString(){const a=[this.major,this.minor,this.patch].join(".");return this.prerelease!==null?[a,this.prerelease].join("-"):a}}class s{constructor(a){this.controller_=a}get element(){return this.controller_.view.element}get disabled(){return this.controller_.viewProps.get("disabled")}set disabled(a){this.controller_.viewProps.set("disabled",a)}get hidden(){return this.controller_.viewProps.get("hidden")}set hidden(a){this.controller_.viewProps.set("hidden",a)}dispose(){this.controller_.viewProps.set("disposed",!0)}}class r{constructor(a){this.target=a}}class o extends r{constructor(a,h,_,A){super(a),this.value=h,this.presetKey=_,this.last=A!=null?A:!0}}class l extends r{constructor(a,h,_){super(a),this.value=h,this.presetKey=_}}class c extends r{constructor(a,h){super(a),this.expanded=h}}class u extends r{constructor(a,h){super(a),this.index=h}}function d(f){return f}function p(f){return f==null}function m(f,a){if(f.length!==a.length)return!1;for(let h=0;h<f.length;h++)if(f[h]!==a[h])return!1;return!0}const g={alreadydisposed:()=>"View has been already disposed",invalidparams:f=>`Invalid parameters for '${f.name}'`,nomatchingcontroller:f=>`No matching controller for '${f.key}'`,nomatchingview:f=>`No matching view for '${JSON.stringify(f.params)}'`,notbindable:()=>"Value is not bindable",propertynotfound:f=>`Property '${f.name}' not found`,shouldneverhappen:()=>"This error should never happen"};class b{constructor(a){var h;this.message=(h=g[a.type](a.context))!==null&&h!==void 0?h:"Unexpected error",this.name=this.constructor.name,this.stack=new Error(this.message).stack,this.type=a.type}static alreadyDisposed(){return new b({type:"alreadydisposed"})}static notBindable(){return new b({type:"notbindable"})}static propertyNotFound(a){return new b({type:"propertynotfound",context:{name:a}})}static shouldNeverHappen(){return new b({type:"shouldneverhappen"})}}class w{constructor(a,h,_){this.obj_=a,this.key_=h,this.presetKey_=_!=null?_:h}static isBindable(a){return!(a===null||typeof a!="object")}get key(){return this.key_}get presetKey(){return this.presetKey_}read(){return this.obj_[this.key_]}write(a){this.obj_[this.key_]=a}writeProperty(a,h){const _=this.read();if(!w.isBindable(_))throw b.notBindable();if(!(a in _))throw b.propertyNotFound(a);_[a]=h}}class x extends s{get label(){return this.controller_.props.get("label")}set label(a){this.controller_.props.set("label",a)}get title(){var a;return(a=this.controller_.valueController.props.get("title"))!==null&&a!==void 0?a:""}set title(a){this.controller_.valueController.props.set("title",a)}on(a,h){const _=h.bind(this);return this.controller_.valueController.emitter.on(a,()=>{_(new r(this))}),this}}class v{constructor(){this.observers_={}}on(a,h){let _=this.observers_[a];return _||(_=this.observers_[a]=[]),_.push({handler:h}),this}off(a,h){const _=this.observers_[a];return _&&(this.observers_[a]=_.filter(A=>A.handler!==h)),this}emit(a,h){const _=this.observers_[a];!_||_.forEach(A=>{A.handler(h)})}}const M="tp";function y(f){return(h,_)=>[M,"-",f,"v",h?`_${h}`:"",_?`-${_}`:""].join("")}function S(f,a){return h=>a(f(h))}function C(f){return f.rawValue}function P(f,a){f.emitter.on("change",S(C,a)),a(f.rawValue)}function T(f,a,h){P(f.value(a),h)}function I(f,a,h){h?f.classList.add(a):f.classList.remove(a)}function F(f,a){return h=>{I(f,a,h)}}function E(f,a){P(f,h=>{a.textContent=h!=null?h:""})}const R=y("btn");class B{constructor(a,h){this.element=a.createElement("div"),this.element.classList.add(R()),h.viewProps.bindClassModifiers(this.element);const _=a.createElement("button");_.classList.add(R("b")),h.viewProps.bindDisabled(_),this.element.appendChild(_),this.buttonElement=_;const A=a.createElement("div");A.classList.add(R("t")),E(h.props.value("title"),A),this.buttonElement.appendChild(A)}}class W{constructor(a,h){this.emitter=new v,this.onClick_=this.onClick_.bind(this),this.props=h.props,this.viewProps=h.viewProps,this.view=new B(a,{props:this.props,viewProps:this.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}onClick_(){this.emitter.emit("click",{sender:this})}}class U{constructor(a,h){var _;this.constraint_=h==null?void 0:h.constraint,this.equals_=(_=h==null?void 0:h.equals)!==null&&_!==void 0?_:(A,z)=>A===z,this.emitter=new v,this.rawValue_=a}get constraint(){return this.constraint_}get rawValue(){return this.rawValue_}set rawValue(a){this.setRawValue(a,{forceEmit:!1,last:!0})}setRawValue(a,h){const _=h!=null?h:{forceEmit:!1,last:!0},A=this.constraint_?this.constraint_.constrain(a):a;!!this.equals_(this.rawValue_,A)&&!_.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.rawValue_=A,this.emitter.emit("change",{options:_,rawValue:A,sender:this}))}}class H{constructor(a){this.emitter=new v,this.value_=a}get rawValue(){return this.value_}set rawValue(a){this.setRawValue(a,{forceEmit:!1,last:!0})}setRawValue(a,h){const _=h!=null?h:{forceEmit:!1,last:!0};this.value_===a&&!_.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.value_=a,this.emitter.emit("change",{options:_,rawValue:this.value_,sender:this}))}}function G(f,a){const h=a==null?void 0:a.constraint,_=a==null?void 0:a.equals;return!h&&!_?new H(f):new U(f,a)}class X{constructor(a){this.emitter=new v,this.valMap_=a;for(const h in this.valMap_)this.valMap_[h].emitter.on("change",()=>{this.emitter.emit("change",{key:h,sender:this})})}static createCore(a){return Object.keys(a).reduce((_,A)=>Object.assign(_,{[A]:G(a[A])}),{})}static fromObject(a){const h=this.createCore(a);return new X(h)}get(a){return this.valMap_[a].rawValue}set(a,h){this.valMap_[a].rawValue=h}value(a){return this.valMap_[a]}}function Q(f,a){const _=Object.keys(a).reduce((A,z)=>{if(A===void 0)return;const q=a[z],de=q(f[z]);return de.succeeded?Object.assign(Object.assign({},A),{[z]:de.value}):void 0},{});return _}function Y(f,a){return f.reduce((h,_)=>{if(h===void 0)return;const A=a(_);if(!(!A.succeeded||A.value===void 0))return[...h,A.value]},[])}function ie(f){return f===null?!1:typeof f=="object"}function ne(f){return a=>h=>{if(!a&&h===void 0)return{succeeded:!1,value:void 0};if(a&&h===void 0)return{succeeded:!0,value:void 0};const _=f(h);return _!==void 0?{succeeded:!0,value:_}:{succeeded:!1,value:void 0}}}function me(f){return{custom:a=>ne(a)(f),boolean:ne(a=>typeof a=="boolean"?a:void 0)(f),number:ne(a=>typeof a=="number"?a:void 0)(f),string:ne(a=>typeof a=="string"?a:void 0)(f),function:ne(a=>typeof a=="function"?a:void 0)(f),constant:a=>ne(h=>h===a?a:void 0)(f),raw:ne(a=>a)(f),object:a=>ne(h=>{if(!!ie(h))return Q(h,a)})(f),array:a=>ne(h=>{if(!!Array.isArray(h))return Y(h,a)})(f)}}const he={optional:me(!0),required:me(!1)};function $(f,a){const h=he.required.object(a)(f);return h.succeeded?h.value:void 0}function se(f){return f&&f.parentElement&&f.parentElement.removeChild(f),null}function xe(){return["veryfirst","first","last","verylast"]}const we=y(""),Ae={veryfirst:"vfst",first:"fst",last:"lst",verylast:"vlst"};class _e{constructor(a){this.parent_=null,this.blade=a.blade,this.view=a.view,this.viewProps=a.viewProps;const h=this.view.element;this.blade.value("positions").emitter.on("change",()=>{xe().forEach(_=>{h.classList.remove(we(void 0,Ae[_]))}),this.blade.get("positions").forEach(_=>{h.classList.add(we(void 0,Ae[_]))})}),this.viewProps.handleDispose(()=>{se(h)})}get parent(){return this.parent_}}const ke="http://www.w3.org/2000/svg";function Ue(f){f.offsetHeight}function j(f,a){const h=f.style.transition;f.style.transition="none",a(),f.style.transition=h}function Ct(f){return f.ontouchstart!==void 0}function Pe(){return new Function("return this")()}function Ve(){return Pe().document}function Ce(f){const a=f.ownerDocument.defaultView;return a&&"document"in a?f.getContext("2d"):null}const ut={check:'<path d="M2 8l4 4l8 -8"/>',dropdown:'<path d="M5 7h6l-3 3 z"/>',p2dpad:'<path d="M8 4v8"/><path d="M4 8h8"/><circle cx="12" cy="12" r="1.2"/>'};function ze(f,a){const h=f.createElementNS(ke,"svg");return h.innerHTML=ut[a],h}function k(f,a,h){f.insertBefore(a,f.children[h])}function L(f){f.parentElement&&f.parentElement.removeChild(f)}function Z(f){for(;f.children.length>0;)f.removeChild(f.children[0])}function ue(f){for(;f.childNodes.length>0;)f.removeChild(f.childNodes[0])}function re(f){return f.relatedTarget?f.relatedTarget:"explicitOriginalTarget"in f?f.explicitOriginalTarget:null}const ce=y("lbl");function Re(f,a){const h=f.createDocumentFragment();return a.split(`
`).map(A=>f.createTextNode(A)).forEach((A,z)=>{z>0&&h.appendChild(f.createElement("br")),h.appendChild(A)}),h}class be{constructor(a,h){this.element=a.createElement("div"),this.element.classList.add(ce()),h.viewProps.bindClassModifiers(this.element);const _=a.createElement("div");_.classList.add(ce("l")),T(h.props,"label",z=>{p(z)?this.element.classList.add(ce(void 0,"nol")):(this.element.classList.remove(ce(void 0,"nol")),ue(_),_.appendChild(Re(a,z)))}),this.element.appendChild(_),this.labelElement=_;const A=a.createElement("div");A.classList.add(ce("v")),this.element.appendChild(A),this.valueElement=A}}class Ee extends _e{constructor(a,h){const _=h.valueController.viewProps;super(Object.assign(Object.assign({},h),{view:new be(a,{props:h.props,viewProps:_}),viewProps:_})),this.props=h.props,this.valueController=h.valueController,this.view.valueElement.appendChild(this.valueController.view.element)}}const He={id:"button",type:"blade",accept(f){const a=he,h=$(f,{title:a.required.string,view:a.required.constant("button"),label:a.optional.string});return h?{params:h}:null},controller(f){return new Ee(f.document,{blade:f.blade,props:X.fromObject({label:f.params.label}),valueController:new W(f.document,{props:X.fromObject({title:f.params.title}),viewProps:f.viewProps})})},api(f){return!(f.controller instanceof Ee)||!(f.controller.valueController instanceof W)?null:new x(f.controller)}};class Xe extends _e{constructor(a){super(a),this.value=a.value}}function ae(){return new X({positions:G([],{equals:m})})}class rt extends X{constructor(a){super(a)}static create(a){const h={completed:!0,expanded:a,expandedHeight:null,shouldFixHeight:!1,temporaryExpanded:null},_=X.createCore(h);return new rt(_)}get styleExpanded(){var a;return(a=this.get("temporaryExpanded"))!==null&&a!==void 0?a:this.get("expanded")}get styleHeight(){if(!this.styleExpanded)return"0";const a=this.get("expandedHeight");return this.get("shouldFixHeight")&&!p(a)?`${a}px`:"auto"}bindExpandedClass(a,h){const _=()=>{this.styleExpanded?a.classList.add(h):a.classList.remove(h)};T(this,"expanded",_),T(this,"temporaryExpanded",_)}cleanUpTransition(){this.set("shouldFixHeight",!1),this.set("expandedHeight",null),this.set("completed",!0)}}function et(f,a){let h=0;return j(a,()=>{f.set("expandedHeight",null),f.set("temporaryExpanded",!0),Ue(a),h=a.clientHeight,f.set("temporaryExpanded",null),Ue(a)}),h}function $e(f,a){a.style.height=f.styleHeight}function Ie(f,a){f.value("expanded").emitter.on("beforechange",()=>{f.set("completed",!1),p(f.get("expandedHeight"))&&f.set("expandedHeight",et(f,a)),f.set("shouldFixHeight",!0),Ue(a)}),f.emitter.on("change",()=>{$e(f,a)}),$e(f,a),a.addEventListener("transitionend",h=>{h.propertyName==="height"&&f.cleanUpTransition()})}class Me extends s{constructor(a,h){super(a),this.rackApi_=h}}function Ze(f,a){return f.addBlade(Object.assign(Object.assign({},a),{view:"button"}))}function V(f,a){return f.addBlade(Object.assign(Object.assign({},a),{view:"folder"}))}function pe(f,a){const h=a!=null?a:{};return f.addBlade(Object.assign(Object.assign({},h),{view:"separator"}))}function ye(f,a){return f.addBlade(Object.assign(Object.assign({},a),{view:"tab"}))}class De{constructor(a){this.emitter=new v,this.items_=[],this.cache_=new Set,this.onSubListAdd_=this.onSubListAdd_.bind(this),this.onSubListRemove_=this.onSubListRemove_.bind(this),this.extract_=a}get items(){return this.items_}allItems(){return Array.from(this.cache_)}find(a){for(const h of this.allItems())if(a(h))return h;return null}includes(a){return this.cache_.has(a)}add(a,h){if(this.includes(a))throw b.shouldNeverHappen();const _=h!==void 0?h:this.items_.length;this.items_.splice(_,0,a),this.cache_.add(a);const A=this.extract_(a);A&&(A.emitter.on("add",this.onSubListAdd_),A.emitter.on("remove",this.onSubListRemove_),A.allItems().forEach(z=>{this.cache_.add(z)})),this.emitter.emit("add",{index:_,item:a,root:this,target:this})}remove(a){const h=this.items_.indexOf(a);if(h<0)return;this.items_.splice(h,1),this.cache_.delete(a);const _=this.extract_(a);_&&(_.emitter.off("add",this.onSubListAdd_),_.emitter.off("remove",this.onSubListRemove_)),this.emitter.emit("remove",{index:h,item:a,root:this,target:this})}onSubListAdd_(a){this.cache_.add(a.item),this.emitter.emit("add",{index:a.index,item:a.item,root:this,target:a.target})}onSubListRemove_(a){this.cache_.delete(a.item),this.emitter.emit("remove",{index:a.index,item:a.item,root:this,target:a.target})}}class O extends s{constructor(a){super(a),this.onBindingChange_=this.onBindingChange_.bind(this),this.emitter_=new v,this.controller_.binding.emitter.on("change",this.onBindingChange_)}get label(){return this.controller_.props.get("label")}set label(a){this.controller_.props.set("label",a)}on(a,h){const _=h.bind(this);return this.emitter_.on(a,A=>{_(A.event)}),this}refresh(){this.controller_.binding.read()}onBindingChange_(a){const h=a.sender.target.read();this.emitter_.emit("change",{event:new o(this,h,this.controller_.binding.target.presetKey,a.options.last)})}}class oe extends Ee{constructor(a,h){super(a,h),this.binding=h.binding}}class le extends s{constructor(a){super(a),this.onBindingUpdate_=this.onBindingUpdate_.bind(this),this.emitter_=new v,this.controller_.binding.emitter.on("update",this.onBindingUpdate_)}get label(){return this.controller_.props.get("label")}set label(a){this.controller_.props.set("label",a)}on(a,h){const _=h.bind(this);return this.emitter_.on(a,A=>{_(A.event)}),this}refresh(){this.controller_.binding.read()}onBindingUpdate_(a){const h=a.sender.target.read();this.emitter_.emit("update",{event:new l(this,h,this.controller_.binding.target.presetKey)})}}class Te extends Ee{constructor(a,h){super(a,h),this.binding=h.binding,this.viewProps.bindDisabled(this.binding.ticker),this.viewProps.handleDispose(()=>{this.binding.dispose()})}}function Oe(f){return f instanceof ht?f.apiSet_:f instanceof Me?f.rackApi_.apiSet_:null}function it(f,a){const h=f.find(_=>_.controller_===a);if(!h)throw b.shouldNeverHappen();return h}function nt(f,a,h){if(!w.isBindable(f))throw b.notBindable();return new w(f,a,h)}class ht extends s{constructor(a,h){super(a),this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this),this.onRackInputChange_=this.onRackInputChange_.bind(this),this.onRackMonitorUpdate_=this.onRackMonitorUpdate_.bind(this),this.emitter_=new v,this.apiSet_=new De(Oe),this.pool_=h;const _=this.controller_.rack;_.emitter.on("add",this.onRackAdd_),_.emitter.on("remove",this.onRackRemove_),_.emitter.on("inputchange",this.onRackInputChange_),_.emitter.on("monitorupdate",this.onRackMonitorUpdate_),_.children.forEach(A=>{this.setUpApi_(A)})}get children(){return this.controller_.rack.children.map(a=>it(this.apiSet_,a))}addInput(a,h,_){const A=_!=null?_:{},z=this.controller_.view.element.ownerDocument,q=this.pool_.createInput(z,nt(a,h,A.presetKey),A),de=new O(q);return this.add(de,A.index)}addMonitor(a,h,_){const A=_!=null?_:{},z=this.controller_.view.element.ownerDocument,q=this.pool_.createMonitor(z,nt(a,h),A),de=new le(q);return this.add(de,A.index)}addFolder(a){return V(this,a)}addButton(a){return Ze(this,a)}addSeparator(a){return pe(this,a)}addTab(a){return ye(this,a)}add(a,h){this.controller_.rack.add(a.controller_,h);const _=this.apiSet_.find(A=>A.controller_===a.controller_);return _&&this.apiSet_.remove(_),this.apiSet_.add(a),a}remove(a){this.controller_.rack.remove(a.controller_)}addBlade(a){const h=this.controller_.view.element.ownerDocument,_=this.pool_.createBlade(h,a),A=this.pool_.createBladeApi(_);return this.add(A,a.index)}on(a,h){const _=h.bind(this);return this.emitter_.on(a,A=>{_(A.event)}),this}setUpApi_(a){this.apiSet_.find(_=>_.controller_===a)||this.apiSet_.add(this.pool_.createBladeApi(a))}onRackAdd_(a){this.setUpApi_(a.bladeController)}onRackRemove_(a){if(a.isRoot){const h=it(this.apiSet_,a.bladeController);this.apiSet_.remove(h)}}onRackInputChange_(a){const h=a.bladeController;if(h instanceof oe){const _=it(this.apiSet_,h),A=h.binding;this.emitter_.emit("change",{event:new o(_,A.target.read(),A.target.presetKey,a.options.last)})}else if(h instanceof Xe){const _=it(this.apiSet_,h);this.emitter_.emit("change",{event:new o(_,h.value.rawValue,void 0,a.options.last)})}}onRackMonitorUpdate_(a){if(!(a.bladeController instanceof Te))throw b.shouldNeverHappen();const h=it(this.apiSet_,a.bladeController),_=a.bladeController.binding;this.emitter_.emit("update",{event:new l(h,_.target.read(),_.target.presetKey)})}}class Ht extends Me{constructor(a,h){super(a,new ht(a.rackController,h)),this.emitter_=new v,this.controller_.foldable.value("expanded").emitter.on("change",_=>{this.emitter_.emit("fold",{event:new c(this,_.sender.rawValue)})}),this.rackApi_.on("change",_=>{this.emitter_.emit("change",{event:_})}),this.rackApi_.on("update",_=>{this.emitter_.emit("update",{event:_})})}get expanded(){return this.controller_.foldable.get("expanded")}set expanded(a){this.controller_.foldable.set("expanded",a)}get title(){return this.controller_.props.get("title")}set title(a){this.controller_.props.set("title",a)}get children(){return this.rackApi_.children}addInput(a,h,_){return this.rackApi_.addInput(a,h,_)}addMonitor(a,h,_){return this.rackApi_.addMonitor(a,h,_)}addFolder(a){return this.rackApi_.addFolder(a)}addButton(a){return this.rackApi_.addButton(a)}addSeparator(a){return this.rackApi_.addSeparator(a)}addTab(a){return this.rackApi_.addTab(a)}add(a,h){return this.rackApi_.add(a,h)}remove(a){this.rackApi_.remove(a)}addBlade(a){return this.rackApi_.addBlade(a)}on(a,h){const _=h.bind(this);return this.emitter_.on(a,A=>{_(A.event)}),this}}class at extends _e{constructor(a){super({blade:a.blade,view:a.view,viewProps:a.rackController.viewProps}),this.rackController=a.rackController}}class Ot{constructor(a,h){const _=y(h.viewName);this.element=a.createElement("div"),this.element.classList.add(_()),h.viewProps.bindClassModifiers(this.element)}}function un(f,a){for(let h=0;h<f.length;h++){const _=f[h];if(_ instanceof oe&&_.binding===a)return _}return null}function ra(f,a){for(let h=0;h<f.length;h++){const _=f[h];if(_ instanceof Te&&_.binding===a)return _}return null}function tc(f,a){for(let h=0;h<f.length;h++){const _=f[h];if(_ instanceof Xe&&_.value===a)return _}return null}function Vi(f){return f instanceof zi?f.rack:f instanceof at?f.rackController.rack:null}function oa(f){const a=Vi(f);return a?a.bcSet_:null}class Gs{constructor(a){var h;this.onBladePositionsChange_=this.onBladePositionsChange_.bind(this),this.onSetAdd_=this.onSetAdd_.bind(this),this.onSetRemove_=this.onSetRemove_.bind(this),this.onChildDispose_=this.onChildDispose_.bind(this),this.onChildPositionsChange_=this.onChildPositionsChange_.bind(this),this.onChildInputChange_=this.onChildInputChange_.bind(this),this.onChildMonitorUpdate_=this.onChildMonitorUpdate_.bind(this),this.onChildValueChange_=this.onChildValueChange_.bind(this),this.onChildViewPropsChange_=this.onChildViewPropsChange_.bind(this),this.onDescendantLayout_=this.onDescendantLayout_.bind(this),this.onDescendantInputChange_=this.onDescendantInputChange_.bind(this),this.onDescendantMonitorUpdate_=this.onDescendantMonitorUpdate_.bind(this),this.emitter=new v,this.blade_=a!=null?a:null,(h=this.blade_)===null||h===void 0||h.value("positions").emitter.on("change",this.onBladePositionsChange_),this.bcSet_=new De(oa),this.bcSet_.emitter.on("add",this.onSetAdd_),this.bcSet_.emitter.on("remove",this.onSetRemove_)}get children(){return this.bcSet_.items}add(a,h){a.parent&&a.parent.remove(a),a.parent_=this,this.bcSet_.add(a,h)}remove(a){a.parent_=null,this.bcSet_.remove(a)}find(a){return this.bcSet_.allItems().filter(h=>h instanceof a)}onSetAdd_(a){this.updatePositions_();const h=a.target===a.root;if(this.emitter.emit("add",{bladeController:a.item,index:a.index,isRoot:h,sender:this}),!h)return;const _=a.item;if(_.viewProps.emitter.on("change",this.onChildViewPropsChange_),_.blade.value("positions").emitter.on("change",this.onChildPositionsChange_),_.viewProps.handleDispose(this.onChildDispose_),_ instanceof oe)_.binding.emitter.on("change",this.onChildInputChange_);else if(_ instanceof Te)_.binding.emitter.on("update",this.onChildMonitorUpdate_);else if(_ instanceof Xe)_.value.emitter.on("change",this.onChildValueChange_);else{const A=Vi(_);if(A){const z=A.emitter;z.on("layout",this.onDescendantLayout_),z.on("inputchange",this.onDescendantInputChange_),z.on("monitorupdate",this.onDescendantMonitorUpdate_)}}}onSetRemove_(a){this.updatePositions_();const h=a.target===a.root;if(this.emitter.emit("remove",{bladeController:a.item,isRoot:h,sender:this}),!h)return;const _=a.item;if(_ instanceof oe)_.binding.emitter.off("change",this.onChildInputChange_);else if(_ instanceof Te)_.binding.emitter.off("update",this.onChildMonitorUpdate_);else if(_ instanceof Xe)_.value.emitter.off("change",this.onChildValueChange_);else{const A=Vi(_);if(A){const z=A.emitter;z.off("layout",this.onDescendantLayout_),z.off("inputchange",this.onDescendantInputChange_),z.off("monitorupdate",this.onDescendantMonitorUpdate_)}}}updatePositions_(){const a=this.bcSet_.items.filter(A=>!A.viewProps.get("hidden")),h=a[0],_=a[a.length-1];this.bcSet_.items.forEach(A=>{const z=[];A===h&&(z.push("first"),(!this.blade_||this.blade_.get("positions").includes("veryfirst"))&&z.push("veryfirst")),A===_&&(z.push("last"),(!this.blade_||this.blade_.get("positions").includes("verylast"))&&z.push("verylast")),A.blade.set("positions",z)})}onChildPositionsChange_(){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildViewPropsChange_(a){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildDispose_(){this.bcSet_.items.filter(h=>h.viewProps.get("disposed")).forEach(h=>{this.bcSet_.remove(h)})}onChildInputChange_(a){const h=un(this.find(oe),a.sender);if(!h)throw b.shouldNeverHappen();this.emitter.emit("inputchange",{bladeController:h,options:a.options,sender:this})}onChildMonitorUpdate_(a){const h=ra(this.find(Te),a.sender);if(!h)throw b.shouldNeverHappen();this.emitter.emit("monitorupdate",{bladeController:h,sender:this})}onChildValueChange_(a){const h=tc(this.find(Xe),a.sender);if(!h)throw b.shouldNeverHappen();this.emitter.emit("inputchange",{bladeController:h,options:a.options,sender:this})}onDescendantLayout_(a){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onDescendantInputChange_(a){this.emitter.emit("inputchange",{bladeController:a.bladeController,options:a.options,sender:this})}onDescendantMonitorUpdate_(a){this.emitter.emit("monitorupdate",{bladeController:a.bladeController,sender:this})}onBladePositionsChange_(){this.updatePositions_()}}class zi extends _e{constructor(a,h){super(Object.assign(Object.assign({},h),{view:new Ot(a,{viewName:"brk",viewProps:h.viewProps})})),this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this);const _=new Gs(h.root?void 0:h.blade);_.emitter.on("add",this.onRackAdd_),_.emitter.on("remove",this.onRackRemove_),this.rack=_,this.viewProps.handleDispose(()=>{for(let A=this.rack.children.length-1;A>=0;A--)this.rack.children[A].viewProps.set("disposed",!0)})}onRackAdd_(a){!a.isRoot||k(this.view.element,a.bladeController.view.element,a.index)}onRackRemove_(a){!a.isRoot||L(a.bladeController.view.element)}}const no=y("cnt");class nc{constructor(a,h){var _;this.className_=y((_=h.viewName)!==null&&_!==void 0?_:"fld"),this.element=a.createElement("div"),this.element.classList.add(this.className_(),no()),h.viewProps.bindClassModifiers(this.element),this.foldable_=h.foldable,this.foldable_.bindExpandedClass(this.element,this.className_(void 0,"expanded")),T(this.foldable_,"completed",F(this.element,this.className_(void 0,"cpl")));const A=a.createElement("button");A.classList.add(this.className_("b")),T(h.props,"title",Fe=>{p(Fe)?this.element.classList.add(this.className_(void 0,"not")):this.element.classList.remove(this.className_(void 0,"not"))}),h.viewProps.bindDisabled(A),this.element.appendChild(A),this.buttonElement=A;const z=a.createElement("div");z.classList.add(this.className_("t")),E(h.props.value("title"),z),this.buttonElement.appendChild(z),this.titleElement=z;const q=a.createElement("div");q.classList.add(this.className_("m")),this.buttonElement.appendChild(q);const de=h.containerElement;de.classList.add(this.className_("c")),this.element.appendChild(de),this.containerElement=de}}class io extends at{constructor(a,h){var _;const A=rt.create((_=h.expanded)!==null&&_!==void 0?_:!0),z=new zi(a,{blade:h.blade,root:h.root,viewProps:h.viewProps});super(Object.assign(Object.assign({},h),{rackController:z,view:new nc(a,{containerElement:z.view.element,foldable:A,props:h.props,viewName:h.root?"rot":void 0,viewProps:h.viewProps})})),this.onTitleClick_=this.onTitleClick_.bind(this),this.props=h.props,this.foldable=A,Ie(this.foldable,this.view.containerElement),this.rackController.rack.emitter.on("add",()=>{this.foldable.cleanUpTransition()}),this.rackController.rack.emitter.on("remove",()=>{this.foldable.cleanUpTransition()}),this.view.buttonElement.addEventListener("click",this.onTitleClick_)}get document(){return this.view.element.ownerDocument}onTitleClick_(){this.foldable.set("expanded",!this.foldable.get("expanded"))}}const ic={id:"folder",type:"blade",accept(f){const a=he,h=$(f,{title:a.required.string,view:a.required.constant("folder"),expanded:a.optional.boolean});return h?{params:h}:null},controller(f){return new io(f.document,{blade:f.blade,expanded:f.params.expanded,props:X.fromObject({title:f.params.title}),viewProps:f.viewProps})},api(f){return f.controller instanceof io?new Ht(f.controller,f.pool):null}};class N extends Xe{constructor(a,h){const _=h.valueController.viewProps;super(Object.assign(Object.assign({},h),{value:h.valueController.value,view:new be(a,{props:h.props,viewProps:_}),viewProps:_})),this.props=h.props,this.valueController=h.valueController,this.view.valueElement.appendChild(this.valueController.view.element)}}class K extends s{}const ee=y("spr");class te{constructor(a,h){this.element=a.createElement("div"),this.element.classList.add(ee()),h.viewProps.bindClassModifiers(this.element);const _=a.createElement("hr");_.classList.add(ee("r")),this.element.appendChild(_)}}class J extends _e{constructor(a,h){super(Object.assign(Object.assign({},h),{view:new te(a,{viewProps:h.viewProps})}))}}const Se={id:"separator",type:"blade",accept(f){const h=$(f,{view:he.required.constant("separator")});return h?{params:h}:null},controller(f){return new J(f.document,{blade:f.blade,viewProps:f.viewProps})},api(f){return f.controller instanceof J?new K(f.controller):null}},Ne=y("");function Ge(f,a){return F(f,Ne(void 0,a))}class Be extends X{constructor(a){super(a)}static create(a){var h,_;const A=a!=null?a:{},z={disabled:(h=A.disabled)!==null&&h!==void 0?h:!1,disposed:!1,hidden:(_=A.hidden)!==null&&_!==void 0?_:!1},q=X.createCore(z);return new Be(q)}bindClassModifiers(a){T(this,"disabled",Ge(a,"disabled")),T(this,"hidden",Ge(a,"hidden"))}bindDisabled(a){T(this,"disabled",h=>{a.disabled=h})}bindTabIndex(a){T(this,"disabled",h=>{a.tabIndex=h?-1:0})}handleDispose(a){this.value("disposed").emitter.on("change",h=>{h&&a()})}}const qe=y("tbi");class Ke{constructor(a,h){this.element=a.createElement("div"),this.element.classList.add(qe()),h.viewProps.bindClassModifiers(this.element),T(h.props,"selected",z=>{z?this.element.classList.add(qe(void 0,"sel")):this.element.classList.remove(qe(void 0,"sel"))});const _=a.createElement("button");_.classList.add(qe("b")),h.viewProps.bindDisabled(_),this.element.appendChild(_),this.buttonElement=_;const A=a.createElement("div");A.classList.add(qe("t")),E(h.props.value("title"),A),this.buttonElement.appendChild(A),this.titleElement=A}}class Qe{constructor(a,h){this.emitter=new v,this.onClick_=this.onClick_.bind(this),this.props=h.props,this.viewProps=h.viewProps,this.view=new Ke(a,{props:h.props,viewProps:h.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}onClick_(){this.emitter.emit("click",{sender:this})}}class Ut{constructor(a,h){this.onItemClick_=this.onItemClick_.bind(this),this.ic_=new Qe(a,{props:h.itemProps,viewProps:Be.create()}),this.ic_.emitter.on("click",this.onItemClick_),this.cc_=new zi(a,{blade:ae(),viewProps:Be.create()}),this.props=h.props,T(this.props,"selected",_=>{this.itemController.props.set("selected",_),this.contentController.viewProps.set("hidden",!_)})}get itemController(){return this.ic_}get contentController(){return this.cc_}onItemClick_(){this.props.set("selected",!0)}}class pn{constructor(a,h){this.controller_=a,this.rackApi_=h}get title(){var a;return(a=this.controller_.itemController.props.get("title"))!==null&&a!==void 0?a:""}set title(a){this.controller_.itemController.props.set("title",a)}get selected(){return this.controller_.props.get("selected")}set selected(a){this.controller_.props.set("selected",a)}get children(){return this.rackApi_.children}addButton(a){return this.rackApi_.addButton(a)}addFolder(a){return this.rackApi_.addFolder(a)}addSeparator(a){return this.rackApi_.addSeparator(a)}addTab(a){return this.rackApi_.addTab(a)}add(a,h){this.rackApi_.add(a,h)}remove(a){this.rackApi_.remove(a)}addInput(a,h,_){return this.rackApi_.addInput(a,h,_)}addMonitor(a,h,_){return this.rackApi_.addMonitor(a,h,_)}addBlade(a){return this.rackApi_.addBlade(a)}}class Gt extends Me{constructor(a,h){super(a,new ht(a.rackController,h)),this.onPageAdd_=this.onPageAdd_.bind(this),this.onPageRemove_=this.onPageRemove_.bind(this),this.onSelect_=this.onSelect_.bind(this),this.emitter_=new v,this.pageApiMap_=new Map,this.rackApi_.on("change",_=>{this.emitter_.emit("change",{event:_})}),this.rackApi_.on("update",_=>{this.emitter_.emit("update",{event:_})}),this.controller_.tab.selectedIndex.emitter.on("change",this.onSelect_),this.controller_.pageSet.emitter.on("add",this.onPageAdd_),this.controller_.pageSet.emitter.on("remove",this.onPageRemove_),this.controller_.pageSet.items.forEach(_=>{this.setUpPageApi_(_)})}get pages(){return this.controller_.pageSet.items.map(a=>{const h=this.pageApiMap_.get(a);if(!h)throw b.shouldNeverHappen();return h})}addPage(a){const h=this.controller_.view.element.ownerDocument,_=new Ut(h,{itemProps:X.fromObject({selected:!1,title:a.title}),props:X.fromObject({selected:!1})});this.controller_.add(_,a.index);const A=this.pageApiMap_.get(_);if(!A)throw b.shouldNeverHappen();return A}removePage(a){this.controller_.remove(a)}on(a,h){const _=h.bind(this);return this.emitter_.on(a,A=>{_(A.event)}),this}setUpPageApi_(a){const h=this.rackApi_.apiSet_.find(A=>A.controller_===a.contentController);if(!h)throw b.shouldNeverHappen();const _=new pn(a,h);this.pageApiMap_.set(a,_)}onPageAdd_(a){this.setUpPageApi_(a.item)}onPageRemove_(a){if(!this.pageApiMap_.get(a.item))throw b.shouldNeverHappen();this.pageApiMap_.delete(a.item)}onSelect_(a){this.emitter_.emit("select",{event:new u(this,a.rawValue)})}}const Vn=-1;class Pt{constructor(){this.onItemSelectedChange_=this.onItemSelectedChange_.bind(this),this.empty=G(!0),this.selectedIndex=G(Vn),this.items_=[]}add(a,h){const _=h!=null?h:this.items_.length;this.items_.splice(_,0,a),a.emitter.on("change",this.onItemSelectedChange_),this.keepSelection_()}remove(a){const h=this.items_.indexOf(a);h<0||(this.items_.splice(h,1),a.emitter.off("change",this.onItemSelectedChange_),this.keepSelection_())}keepSelection_(){if(this.items_.length===0){this.selectedIndex.rawValue=Vn,this.empty.rawValue=!0;return}const a=this.items_.findIndex(h=>h.rawValue);a<0?(this.items_.forEach((h,_)=>{h.rawValue=_===0}),this.selectedIndex.rawValue=0):(this.items_.forEach((h,_)=>{h.rawValue=_===a}),this.selectedIndex.rawValue=a),this.empty.rawValue=!1}onItemSelectedChange_(a){if(a.rawValue){const h=this.items_.findIndex(_=>_===a.sender);this.items_.forEach((_,A)=>{_.rawValue=A===h}),this.selectedIndex.rawValue=h}else this.keepSelection_()}}const Je=y("tab");class so{constructor(a,h){this.element=a.createElement("div"),this.element.classList.add(Je(),no()),h.viewProps.bindClassModifiers(this.element),P(h.empty,F(this.element,Je(void 0,"nop")));const _=a.createElement("div");_.classList.add(Je("i")),this.element.appendChild(_),this.itemsElement=_;const A=h.contentsElement;A.classList.add(Je("c")),this.element.appendChild(A),this.contentsElement=A}}class Rt extends at{constructor(a,h){const _=new zi(a,{blade:h.blade,viewProps:h.viewProps}),A=new Pt;super({blade:h.blade,rackController:_,view:new so(a,{contentsElement:_.view.element,empty:A.empty,viewProps:h.viewProps})}),this.onPageAdd_=this.onPageAdd_.bind(this),this.onPageRemove_=this.onPageRemove_.bind(this),this.pageSet_=new De(()=>null),this.pageSet_.emitter.on("add",this.onPageAdd_),this.pageSet_.emitter.on("remove",this.onPageRemove_),this.tab=A}get pageSet(){return this.pageSet_}add(a,h){this.pageSet_.add(a,h)}remove(a){this.pageSet_.remove(this.pageSet_.items[a])}onPageAdd_(a){const h=a.item;k(this.view.itemsElement,h.itemController.view.element,a.index),this.rackController.rack.add(h.contentController,a.index),this.tab.add(h.props.value("selected"))}onPageRemove_(a){const h=a.item;L(h.itemController.view.element),this.rackController.rack.remove(h.contentController),this.tab.remove(h.props.value("selected"))}}const ui={id:"tab",type:"blade",accept(f){const a=he,h=$(f,{pages:a.required.array(a.required.object({title:a.required.string})),view:a.required.constant("tab")});return!h||h.pages.length===0?null:{params:h}},controller(f){const a=new Rt(f.document,{blade:f.blade,viewProps:f.viewProps});return f.params.pages.forEach(h=>{const _=new Ut(f.document,{itemProps:X.fromObject({selected:!1,title:h.title}),props:X.fromObject({selected:!1})});a.add(_)}),a},api(f){return f.controller instanceof Rt?new Gt(f.controller,f.pool):null}};function aa(f,a){const h=f.accept(a.params);if(!h)return null;const _=he.optional.boolean(a.params.disabled).value,A=he.optional.boolean(a.params.hidden).value;return f.controller({blade:ae(),document:a.document,params:Object.assign(Object.assign({},h.params),{disabled:_,hidden:A}),viewProps:Be.create({disabled:_,hidden:A})})}class ps{constructor(){this.disabled=!1,this.emitter=new v}dispose(){}tick(){this.disabled||this.emitter.emit("tick",{sender:this})}}class ro{constructor(a,h){this.disabled_=!1,this.timerId_=null,this.onTick_=this.onTick_.bind(this),this.doc_=a,this.emitter=new v,this.interval_=h,this.setTimer_()}get disabled(){return this.disabled_}set disabled(a){this.disabled_=a,this.disabled_?this.clearTimer_():this.setTimer_()}dispose(){this.clearTimer_()}clearTimer_(){if(this.timerId_===null)return;const a=this.doc_.defaultView;a&&a.clearInterval(this.timerId_),this.timerId_=null}setTimer_(){if(this.clearTimer_(),this.interval_<=0)return;const a=this.doc_.defaultView;a&&(this.timerId_=a.setInterval(this.onTick_,this.interval_))}onTick_(){this.disabled_||this.emitter.emit("tick",{sender:this})}}class zt{constructor(a){this.constraints=a}constrain(a){return this.constraints.reduce((h,_)=>_.constrain(h),a)}}function on(f,a){if(f instanceof a)return f;if(f instanceof zt){const h=f.constraints.reduce((_,A)=>_||(A instanceof a?A:null),null);if(h)return h}return null}class bi{constructor(a){this.options=a}constrain(a){const h=this.options;return h.length===0||h.filter(A=>A.value===a).length>0?a:h[0].value}}class Qt{constructor(a){this.maxValue=a.max,this.minValue=a.min}constrain(a){let h=a;return p(this.minValue)||(h=Math.max(h,this.minValue)),p(this.maxValue)||(h=Math.min(h,this.maxValue)),h}}class Hi{constructor(a,h=0){this.step=a,this.origin=h}constrain(a){const h=this.origin%this.step,_=Math.round((a-h)/this.step);return h+_*this.step}}const oo=y("lst");class la{constructor(a,h){this.onValueChange_=this.onValueChange_.bind(this),this.props_=h.props,this.element=a.createElement("div"),this.element.classList.add(oo()),h.viewProps.bindClassModifiers(this.element);const _=a.createElement("select");_.classList.add(oo("s")),T(this.props_,"options",z=>{Z(_),z.forEach((q,de)=>{const Fe=a.createElement("option");Fe.dataset.index=String(de),Fe.textContent=q.text,Fe.value=String(q.value),_.appendChild(Fe)})}),h.viewProps.bindDisabled(_),this.element.appendChild(_),this.selectElement=_;const A=a.createElement("div");A.classList.add(oo("m")),A.appendChild(ze(a,"dropdown")),this.element.appendChild(A),h.value.emitter.on("change",this.onValueChange_),this.value_=h.value,this.update_()}update_(){this.selectElement.value=String(this.value_.rawValue)}onValueChange_(){this.update_()}}class ao{constructor(a,h){this.onSelectChange_=this.onSelectChange_.bind(this),this.props=h.props,this.value=h.value,this.viewProps=h.viewProps,this.view=new la(a,{props:this.props,value:this.value,viewProps:this.viewProps}),this.view.selectElement.addEventListener("change",this.onSelectChange_)}onSelectChange_(a){const _=a.currentTarget.selectedOptions.item(0);if(!_)return;const A=Number(_.dataset.index);this.value.rawValue=this.props.get("options")[A].value}}const sd=y("pop");class pv{constructor(a,h){this.element=a.createElement("div"),this.element.classList.add(sd()),h.viewProps.bindClassModifiers(this.element),P(h.shows,F(this.element,sd(void 0,"v")))}}class rd{constructor(a,h){this.shows=G(!1),this.viewProps=h.viewProps,this.view=new pv(a,{shows:this.shows,viewProps:this.viewProps})}}const od=y("txt");class fv{constructor(a,h){this.onChange_=this.onChange_.bind(this),this.element=a.createElement("div"),this.element.classList.add(od()),h.viewProps.bindClassModifiers(this.element),this.props_=h.props,this.props_.emitter.on("change",this.onChange_);const _=a.createElement("input");_.classList.add(od("i")),_.type="text",h.viewProps.bindDisabled(_),this.element.appendChild(_),this.inputElement=_,h.value.emitter.on("change",this.onChange_),this.value_=h.value,this.refresh()}refresh(){const a=this.props_.get("formatter");this.inputElement.value=a(this.value_.rawValue)}onChange_(){this.refresh()}}class ca{constructor(a,h){this.onInputChange_=this.onInputChange_.bind(this),this.parser_=h.parser,this.props=h.props,this.value=h.value,this.viewProps=h.viewProps,this.view=new fv(a,{props:h.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_)}onInputChange_(a){const _=a.currentTarget.value,A=this.parser_(_);p(A)||(this.value.rawValue=A),this.view.refresh()}}function mv(f){return String(f)}function ad(f){return f==="false"?!1:!!f}function ld(f){return mv(f)}class gv{constructor(a){this.text=a}evaluate(){return Number(this.text)}toString(){return this.text}}const vv={"**":(f,a)=>Math.pow(f,a),"*":(f,a)=>f*a,"/":(f,a)=>f/a,"%":(f,a)=>f%a,"+":(f,a)=>f+a,"-":(f,a)=>f-a,"<<":(f,a)=>f<<a,">>":(f,a)=>f>>a,">>>":(f,a)=>f>>>a,"&":(f,a)=>f&a,"^":(f,a)=>f^a,"|":(f,a)=>f|a};class _v{constructor(a,h,_){this.left=h,this.operator=a,this.right=_}evaluate(){const a=vv[this.operator];if(!a)throw new Error(`unexpected binary operator: '${this.operator}`);return a(this.left.evaluate(),this.right.evaluate())}toString(){return["b(",this.left.toString(),this.operator,this.right.toString(),")"].join(" ")}}const xv={"+":f=>f,"-":f=>-f,"~":f=>~f};class bv{constructor(a,h){this.operator=a,this.expression=h}evaluate(){const a=xv[this.operator];if(!a)throw new Error(`unexpected unary operator: '${this.operator}`);return a(this.expression.evaluate())}toString(){return["u(",this.operator,this.expression.toString(),")"].join(" ")}}function sc(f){return(a,h)=>{for(let _=0;_<f.length;_++){const A=f[_](a,h);if(A!=="")return A}return""}}function lo(f,a){var h;const _=f.substr(a).match(/^\s+/);return(h=_&&_[0])!==null&&h!==void 0?h:""}function yv(f,a){const h=f.substr(a,1);return h.match(/^[1-9]$/)?h:""}function co(f,a){var h;const _=f.substr(a).match(/^[0-9]+/);return(h=_&&_[0])!==null&&h!==void 0?h:""}function wv(f,a){const h=co(f,a);if(h!=="")return h;const _=f.substr(a,1);if(a+=1,_!=="-"&&_!=="+")return"";const A=co(f,a);return A===""?"":_+A}function rc(f,a){const h=f.substr(a,1);if(a+=1,h.toLowerCase()!=="e")return"";const _=wv(f,a);return _===""?"":h+_}function cd(f,a){const h=f.substr(a,1);if(h==="0")return h;const _=yv(f,a);return a+=_.length,_===""?"":_+co(f,a)}function Mv(f,a){const h=cd(f,a);if(a+=h.length,h==="")return"";const _=f.substr(a,1);if(a+=_.length,_!==".")return"";const A=co(f,a);return a+=A.length,h+_+A+rc(f,a)}function Ev(f,a){const h=f.substr(a,1);if(a+=h.length,h!==".")return"";const _=co(f,a);return a+=_.length,_===""?"":h+_+rc(f,a)}function Sv(f,a){const h=cd(f,a);return a+=h.length,h===""?"":h+rc(f,a)}const Tv=sc([Mv,Ev,Sv]);function Av(f,a){var h;const _=f.substr(a).match(/^[01]+/);return(h=_&&_[0])!==null&&h!==void 0?h:""}function Cv(f,a){const h=f.substr(a,2);if(a+=h.length,h.toLowerCase()!=="0b")return"";const _=Av(f,a);return _===""?"":h+_}function Pv(f,a){var h;const _=f.substr(a).match(/^[0-7]+/);return(h=_&&_[0])!==null&&h!==void 0?h:""}function Rv(f,a){const h=f.substr(a,2);if(a+=h.length,h.toLowerCase()!=="0o")return"";const _=Pv(f,a);return _===""?"":h+_}function Lv(f,a){var h;const _=f.substr(a).match(/^[0-9a-f]+/i);return(h=_&&_[0])!==null&&h!==void 0?h:""}function Iv(f,a){const h=f.substr(a,2);if(a+=h.length,h.toLowerCase()!=="0x")return"";const _=Lv(f,a);return _===""?"":h+_}const Dv=sc([Cv,Rv,Iv]),Nv=sc([Dv,Tv]);function Uv(f,a){const h=Nv(f,a);return a+=h.length,h===""?null:{evaluable:new gv(h),cursor:a}}function kv(f,a){const h=f.substr(a,1);if(a+=h.length,h!=="(")return null;const _=hd(f,a);if(!_)return null;a=_.cursor,a+=lo(f,a).length;const A=f.substr(a,1);return a+=A.length,A!==")"?null:{evaluable:_.evaluable,cursor:a}}function Fv(f,a){var h;return(h=Uv(f,a))!==null&&h!==void 0?h:kv(f,a)}function ud(f,a){const h=Fv(f,a);if(h)return h;const _=f.substr(a,1);if(a+=_.length,_!=="+"&&_!=="-"&&_!=="~")return null;const A=ud(f,a);return A?(a=A.cursor,{cursor:a,evaluable:new bv(_,A.evaluable)}):null}function Ov(f,a,h){h+=lo(a,h).length;const _=f.filter(A=>a.startsWith(A,h))[0];return _?(h+=_.length,h+=lo(a,h).length,{cursor:h,operator:_}):null}function Bv(f,a){return(h,_)=>{const A=f(h,_);if(!A)return null;_=A.cursor;let z=A.evaluable;for(;;){const q=Ov(a,h,_);if(!q)break;_=q.cursor;const de=f(h,_);if(!de)return null;_=de.cursor,z=new _v(q.operator,z,de.evaluable)}return z?{cursor:_,evaluable:z}:null}}const Vv=[["**"],["*","/","%"],["+","-"],["<<",">>>",">>"],["&"],["^"],["|"]].reduce((f,a)=>Bv(f,a),ud);function hd(f,a){return a+=lo(f,a).length,Vv(f,a)}function zv(f){const a=hd(f,0);return!a||a.cursor+lo(f,a.cursor).length!==f.length?null:a.evaluable}function yi(f){var a;const h=zv(f);return(a=h==null?void 0:h.evaluate())!==null&&a!==void 0?a:null}function dd(f){if(typeof f=="number")return f;if(typeof f=="string"){const a=yi(f);if(!p(a))return a}return 0}function Hv(f){return String(f)}function hn(f){return a=>a.toFixed(Math.max(Math.min(f,20),0))}const Gv=hn(0);function ua(f){return Gv(f)+"%"}function pd(f){return String(f)}function oc(f){return f}function fd(f,a){for(;f.length<a;)f.push(void 0)}function Wv(f){const a=[];return fd(a,f),G(a)}function Xv(f){const a=f.indexOf(void 0);return a<0?f:f.slice(0,a)}function jv(f,a){const h=[...Xv(f),a];return h.length>f.length?h.splice(0,h.length-f.length):fd(h,f.length),h}function uo({primary:f,secondary:a,forward:h,backward:_}){let A=!1;function z(q){A||(A=!0,q(),A=!1)}f.emitter.on("change",q=>{z(()=>{a.setRawValue(h(f,a),q.options)})}),a.emitter.on("change",q=>{z(()=>{f.setRawValue(_(f,a),q.options)}),z(()=>{a.setRawValue(h(f,a),q.options)})}),z(()=>{a.setRawValue(h(f,a),{forceEmit:!1,last:!0})})}function Cn(f,a){const h=f*(a.altKey?.1:1)*(a.shiftKey?10:1);return a.upKey?+h:a.downKey?-h:0}function ho(f){return{altKey:f.altKey,downKey:f.key==="ArrowDown",shiftKey:f.shiftKey,upKey:f.key==="ArrowUp"}}function wi(f){return{altKey:f.altKey,downKey:f.key==="ArrowLeft",shiftKey:f.shiftKey,upKey:f.key==="ArrowRight"}}function $v(f){return f==="ArrowUp"||f==="ArrowDown"}function md(f){return $v(f)||f==="ArrowLeft"||f==="ArrowRight"}function ac(f,a){var h,_;const A=a.ownerDocument.defaultView,z=a.getBoundingClientRect();return{x:f.pageX-(((h=A&&A.scrollX)!==null&&h!==void 0?h:0)+z.left),y:f.pageY-(((_=A&&A.scrollY)!==null&&_!==void 0?_:0)+z.top)}}class fs{constructor(a){this.lastTouch_=null,this.onDocumentMouseMove_=this.onDocumentMouseMove_.bind(this),this.onDocumentMouseUp_=this.onDocumentMouseUp_.bind(this),this.onMouseDown_=this.onMouseDown_.bind(this),this.onTouchEnd_=this.onTouchEnd_.bind(this),this.onTouchMove_=this.onTouchMove_.bind(this),this.onTouchStart_=this.onTouchStart_.bind(this),this.elem_=a,this.emitter=new v,a.addEventListener("touchstart",this.onTouchStart_,{passive:!1}),a.addEventListener("touchmove",this.onTouchMove_,{passive:!0}),a.addEventListener("touchend",this.onTouchEnd_),a.addEventListener("mousedown",this.onMouseDown_)}computePosition_(a){const h=this.elem_.getBoundingClientRect();return{bounds:{width:h.width,height:h.height},point:a?{x:a.x,y:a.y}:null}}onMouseDown_(a){var h;a.preventDefault(),(h=a.currentTarget)===null||h===void 0||h.focus();const _=this.elem_.ownerDocument;_.addEventListener("mousemove",this.onDocumentMouseMove_),_.addEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("down",{altKey:a.altKey,data:this.computePosition_(ac(a,this.elem_)),sender:this,shiftKey:a.shiftKey})}onDocumentMouseMove_(a){this.emitter.emit("move",{altKey:a.altKey,data:this.computePosition_(ac(a,this.elem_)),sender:this,shiftKey:a.shiftKey})}onDocumentMouseUp_(a){const h=this.elem_.ownerDocument;h.removeEventListener("mousemove",this.onDocumentMouseMove_),h.removeEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("up",{altKey:a.altKey,data:this.computePosition_(ac(a,this.elem_)),sender:this,shiftKey:a.shiftKey})}onTouchStart_(a){a.preventDefault();const h=a.targetTouches.item(0),_=this.elem_.getBoundingClientRect();this.emitter.emit("down",{altKey:a.altKey,data:this.computePosition_(h?{x:h.clientX-_.left,y:h.clientY-_.top}:void 0),sender:this,shiftKey:a.shiftKey}),this.lastTouch_=h}onTouchMove_(a){const h=a.targetTouches.item(0),_=this.elem_.getBoundingClientRect();this.emitter.emit("move",{altKey:a.altKey,data:this.computePosition_(h?{x:h.clientX-_.left,y:h.clientY-_.top}:void 0),sender:this,shiftKey:a.shiftKey}),this.lastTouch_=h}onTouchEnd_(a){var h;const _=(h=a.targetTouches.item(0))!==null&&h!==void 0?h:this.lastTouch_,A=this.elem_.getBoundingClientRect();this.emitter.emit("up",{altKey:a.altKey,data:this.computePosition_(_?{x:_.clientX-A.left,y:_.clientY-A.top}:void 0),sender:this,shiftKey:a.shiftKey})}}function kt(f,a,h,_,A){const z=(f-a)/(h-a);return _+z*(A-_)}function gd(f){return String(f.toFixed(10)).split(".")[1].replace(/0+$/,"").length}function Jt(f,a,h){return Math.min(Math.max(f,a),h)}function vd(f,a){return(f%a+a)%a}const zn=y("txt");class qv{constructor(a,h){this.onChange_=this.onChange_.bind(this),this.props_=h.props,this.props_.emitter.on("change",this.onChange_),this.element=a.createElement("div"),this.element.classList.add(zn(),zn(void 0,"num")),h.arrayPosition&&this.element.classList.add(zn(void 0,h.arrayPosition)),h.viewProps.bindClassModifiers(this.element);const _=a.createElement("input");_.classList.add(zn("i")),_.type="text",h.viewProps.bindDisabled(_),this.element.appendChild(_),this.inputElement=_,this.onDraggingChange_=this.onDraggingChange_.bind(this),this.dragging_=h.dragging,this.dragging_.emitter.on("change",this.onDraggingChange_),this.element.classList.add(zn()),this.inputElement.classList.add(zn("i"));const A=a.createElement("div");A.classList.add(zn("k")),this.element.appendChild(A),this.knobElement=A;const z=a.createElementNS(ke,"svg");z.classList.add(zn("g")),this.knobElement.appendChild(z);const q=a.createElementNS(ke,"path");q.classList.add(zn("gb")),z.appendChild(q),this.guideBodyElem_=q;const de=a.createElementNS(ke,"path");de.classList.add(zn("gh")),z.appendChild(de),this.guideHeadElem_=de;const Fe=a.createElement("div");Fe.classList.add(y("tt")()),this.knobElement.appendChild(Fe),this.tooltipElem_=Fe,h.value.emitter.on("change",this.onChange_),this.value=h.value,this.refresh()}onDraggingChange_(a){if(a.rawValue===null){this.element.classList.remove(zn(void 0,"drg"));return}this.element.classList.add(zn(void 0,"drg"));const h=a.rawValue/this.props_.get("draggingScale"),_=h+(h>0?-1:h<0?1:0),A=Jt(-_,-4,4);this.guideHeadElem_.setAttributeNS(null,"d",[`M ${_+A},0 L${_},4 L${_+A},8`,`M ${h},-1 L${h},9`].join(" ")),this.guideBodyElem_.setAttributeNS(null,"d",`M 0,4 L${h},4`);const z=this.props_.get("formatter");this.tooltipElem_.textContent=z(this.value.rawValue),this.tooltipElem_.style.left=`${h}px`}refresh(){const a=this.props_.get("formatter");this.inputElement.value=a(this.value.rawValue)}onChange_(){this.refresh()}}class po{constructor(a,h){var _;this.originRawValue_=0,this.onInputChange_=this.onInputChange_.bind(this),this.onInputKeyDown_=this.onInputKeyDown_.bind(this),this.onInputKeyUp_=this.onInputKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.baseStep_=h.baseStep,this.parser_=h.parser,this.props=h.props,this.sliderProps_=(_=h.sliderProps)!==null&&_!==void 0?_:null,this.value=h.value,this.viewProps=h.viewProps,this.dragging_=G(null),this.view=new qv(a,{arrayPosition:h.arrayPosition,dragging:this.dragging_,props:this.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_),this.view.inputElement.addEventListener("keydown",this.onInputKeyDown_),this.view.inputElement.addEventListener("keyup",this.onInputKeyUp_);const A=new fs(this.view.knobElement);A.emitter.on("down",this.onPointerDown_),A.emitter.on("move",this.onPointerMove_),A.emitter.on("up",this.onPointerUp_)}constrainValue_(a){var h,_;const A=(h=this.sliderProps_)===null||h===void 0?void 0:h.get("minValue"),z=(_=this.sliderProps_)===null||_===void 0?void 0:_.get("maxValue");let q=a;return A!==void 0&&(q=Math.max(q,A)),z!==void 0&&(q=Math.min(q,z)),q}onInputChange_(a){const _=a.currentTarget.value,A=this.parser_(_);p(A)||(this.value.rawValue=this.constrainValue_(A)),this.view.refresh()}onInputKeyDown_(a){const h=Cn(this.baseStep_,ho(a));h!==0&&this.value.setRawValue(this.constrainValue_(this.value.rawValue+h),{forceEmit:!1,last:!1})}onInputKeyUp_(a){Cn(this.baseStep_,ho(a))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}onPointerDown_(){this.originRawValue_=this.value.rawValue,this.dragging_.rawValue=0}computeDraggingValue_(a){if(!a.point)return null;const h=a.point.x-a.bounds.width/2;return this.constrainValue_(this.originRawValue_+h*this.props.get("draggingScale"))}onPointerMove_(a){const h=this.computeDraggingValue_(a.data);h!==null&&(this.value.setRawValue(h,{forceEmit:!1,last:!1}),this.dragging_.rawValue=this.value.rawValue-this.originRawValue_)}onPointerUp_(a){const h=this.computeDraggingValue_(a.data);h!==null&&(this.value.setRawValue(h,{forceEmit:!0,last:!0}),this.dragging_.rawValue=null)}}const lc=y("sld");class Yv{constructor(a,h){this.onChange_=this.onChange_.bind(this),this.props_=h.props,this.props_.emitter.on("change",this.onChange_),this.element=a.createElement("div"),this.element.classList.add(lc()),h.viewProps.bindClassModifiers(this.element);const _=a.createElement("div");_.classList.add(lc("t")),h.viewProps.bindTabIndex(_),this.element.appendChild(_),this.trackElement=_;const A=a.createElement("div");A.classList.add(lc("k")),this.trackElement.appendChild(A),this.knobElement=A,h.value.emitter.on("change",this.onChange_),this.value=h.value,this.update_()}update_(){const a=Jt(kt(this.value.rawValue,this.props_.get("minValue"),this.props_.get("maxValue"),0,100),0,100);this.knobElement.style.width=`${a}%`}onChange_(){this.update_()}}class Kv{constructor(a,h){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDownOrMove_=this.onPointerDownOrMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.baseStep_=h.baseStep,this.value=h.value,this.viewProps=h.viewProps,this.props=h.props,this.view=new Yv(a,{props:this.props,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new fs(this.view.trackElement),this.ptHandler_.emitter.on("down",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("move",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.trackElement.addEventListener("keydown",this.onKeyDown_),this.view.trackElement.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(a,h){!a.point||this.value.setRawValue(kt(Jt(a.point.x,0,a.bounds.width),0,a.bounds.width,this.props.get("minValue"),this.props.get("maxValue")),h)}onPointerDownOrMove_(a){this.handlePointerEvent_(a.data,{forceEmit:!1,last:!1})}onPointerUp_(a){this.handlePointerEvent_(a.data,{forceEmit:!0,last:!0})}onKeyDown_(a){const h=Cn(this.baseStep_,wi(a));h!==0&&this.value.setRawValue(this.value.rawValue+h,{forceEmit:!1,last:!1})}onKeyUp_(a){Cn(this.baseStep_,wi(a))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const cc=y("sldtxt");class Zv{constructor(a,h){this.element=a.createElement("div"),this.element.classList.add(cc());const _=a.createElement("div");_.classList.add(cc("s")),this.sliderView_=h.sliderView,_.appendChild(this.sliderView_.element),this.element.appendChild(_);const A=a.createElement("div");A.classList.add(cc("t")),this.textView_=h.textView,A.appendChild(this.textView_.element),this.element.appendChild(A)}}class uc{constructor(a,h){this.value=h.value,this.viewProps=h.viewProps,this.sliderC_=new Kv(a,{baseStep:h.baseStep,props:h.sliderProps,value:h.value,viewProps:this.viewProps}),this.textC_=new po(a,{baseStep:h.baseStep,parser:h.parser,props:h.textProps,sliderProps:h.sliderProps,value:h.value,viewProps:h.viewProps}),this.view=new Zv(a,{sliderView:this.sliderC_.view,textView:this.textC_.view})}get sliderController(){return this.sliderC_}get textController(){return this.textC_}}function fo(f,a){f.write(a)}function ha(f){const a=he;if(Array.isArray(f))return a.required.array(a.required.object({text:a.required.string,value:a.required.raw}))(f).value;if(typeof f=="object")return a.required.raw(f).value}function _d(f){if(f==="inline"||f==="popup")return f}function Gi(f){const a=he;return a.required.object({max:a.optional.number,min:a.optional.number,step:a.optional.number})(f).value}function xd(f){if(Array.isArray(f))return f;const a=[];return Object.keys(f).forEach(h=>{a.push({text:h,value:f[h]})}),a}function hc(f){return p(f)?null:new bi(xd(f))}function dc(f){const a=f?on(f,bi):null;return a?a.options:null}function Qv(f){const a=f?on(f,Hi):null;return a?a.step:null}function da(f,a){const h=f&&on(f,Hi);return h?gd(h.step):Math.max(gd(a),2)}function Ws(f){const a=Qv(f);return a!=null?a:1}function Xs(f,a){var h;const _=f&&on(f,Hi),A=Math.abs((h=_==null?void 0:_.step)!==null&&h!==void 0?h:a);return A===0?.1:Math.pow(10,Math.floor(Math.log10(A))-1)}const pa=y("ckb");class Jv{constructor(a,h){this.onValueChange_=this.onValueChange_.bind(this),this.element=a.createElement("div"),this.element.classList.add(pa()),h.viewProps.bindClassModifiers(this.element);const _=a.createElement("label");_.classList.add(pa("l")),this.element.appendChild(_);const A=a.createElement("input");A.classList.add(pa("i")),A.type="checkbox",_.appendChild(A),this.inputElement=A,h.viewProps.bindDisabled(this.inputElement);const z=a.createElement("div");z.classList.add(pa("w")),_.appendChild(z);const q=ze(a,"check");z.appendChild(q),h.value.emitter.on("change",this.onValueChange_),this.value=h.value,this.update_()}update_(){this.inputElement.checked=this.value.rawValue}onValueChange_(){this.update_()}}class e_{constructor(a,h){this.onInputChange_=this.onInputChange_.bind(this),this.value=h.value,this.viewProps=h.viewProps,this.view=new Jv(a,{value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_)}onInputChange_(a){const h=a.currentTarget;this.value.rawValue=h.checked}}function t_(f){const a=[],h=hc(f.options);return h&&a.push(h),new zt(a)}const n_={id:"input-bool",type:"input",accept:(f,a)=>{if(typeof f!="boolean")return null;const _=$(a,{options:he.optional.custom(ha)});return _?{initialValue:f,params:_}:null},binding:{reader:f=>ad,constraint:f=>t_(f.params),writer:f=>fo},controller:f=>{var a;const h=f.document,_=f.value,A=f.constraint;return A&&on(A,bi)?new ao(h,{props:X.fromObject({options:(a=dc(A))!==null&&a!==void 0?a:[]}),value:_,viewProps:f.viewProps}):new e_(h,{value:_,viewProps:f.viewProps})}},ms=y("col");class i_{constructor(a,h){this.element=a.createElement("div"),this.element.classList.add(ms()),h.foldable.bindExpandedClass(this.element,ms(void 0,"expanded")),T(h.foldable,"completed",F(this.element,ms(void 0,"cpl")));const _=a.createElement("div");_.classList.add(ms("h")),this.element.appendChild(_);const A=a.createElement("div");A.classList.add(ms("s")),_.appendChild(A),this.swatchElement=A;const z=a.createElement("div");if(z.classList.add(ms("t")),_.appendChild(z),this.textElement=z,h.pickerLayout==="inline"){const q=a.createElement("div");q.classList.add(ms("p")),this.element.appendChild(q),this.pickerElement=q}else this.pickerElement=null}}function s_(f,a,h){const _=Jt(f/255,0,1),A=Jt(a/255,0,1),z=Jt(h/255,0,1),q=Math.max(_,A,z),de=Math.min(_,A,z),Fe=q-de;let Ye=0,dt=0;const ft=(de+q)/2;return Fe!==0&&(dt=Fe/(1-Math.abs(q+de-1)),_===q?Ye=(A-z)/Fe:A===q?Ye=2+(z-_)/Fe:Ye=4+(_-A)/Fe,Ye=Ye/6+(Ye<0?1:0)),[Ye*360,dt*100,ft*100]}function r_(f,a,h){const _=(f%360+360)%360,A=Jt(a/100,0,1),z=Jt(h/100,0,1),q=(1-Math.abs(2*z-1))*A,de=q*(1-Math.abs(_/60%2-1)),Fe=z-q/2;let Ye,dt,ft;return _>=0&&_<60?[Ye,dt,ft]=[q,de,0]:_>=60&&_<120?[Ye,dt,ft]=[de,q,0]:_>=120&&_<180?[Ye,dt,ft]=[0,q,de]:_>=180&&_<240?[Ye,dt,ft]=[0,de,q]:_>=240&&_<300?[Ye,dt,ft]=[de,0,q]:[Ye,dt,ft]=[q,0,de],[(Ye+Fe)*255,(dt+Fe)*255,(ft+Fe)*255]}function o_(f,a,h){const _=Jt(f/255,0,1),A=Jt(a/255,0,1),z=Jt(h/255,0,1),q=Math.max(_,A,z),de=Math.min(_,A,z),Fe=q-de;let Ye;Fe===0?Ye=0:q===_?Ye=60*(((A-z)/Fe%6+6)%6):q===A?Ye=60*((z-_)/Fe+2):Ye=60*((_-A)/Fe+4);const dt=q===0?0:Fe/q,ft=q;return[Ye,dt*100,ft*100]}function bd(f,a,h){const _=vd(f,360),A=Jt(a/100,0,1),z=Jt(h/100,0,1),q=z*A,de=q*(1-Math.abs(_/60%2-1)),Fe=z-q;let Ye,dt,ft;return _>=0&&_<60?[Ye,dt,ft]=[q,de,0]:_>=60&&_<120?[Ye,dt,ft]=[de,q,0]:_>=120&&_<180?[Ye,dt,ft]=[0,q,de]:_>=180&&_<240?[Ye,dt,ft]=[0,de,q]:_>=240&&_<300?[Ye,dt,ft]=[de,0,q]:[Ye,dt,ft]=[q,0,de],[(Ye+Fe)*255,(dt+Fe)*255,(ft+Fe)*255]}function a_(f,a,h){const _=h+a*(100-Math.abs(2*h-100))/200;return[f,_!==0?a*(100-Math.abs(2*h-100))/_:0,h+a*(100-Math.abs(2*h-100))/(2*100)]}function l_(f,a,h){const _=100-Math.abs(h*(200-a)/100-100);return[f,_!==0?a*h/_:0,h*(200-a)/(2*100)]}function gs(f){return[f[0],f[1],f[2]]}function yd(f,a){return[f[0],f[1],f[2],a]}const c_={hsl:{hsl:(f,a,h)=>[f,a,h],hsv:a_,rgb:r_},hsv:{hsl:l_,hsv:(f,a,h)=>[f,a,h],rgb:bd},rgb:{hsl:s_,hsv:o_,rgb:(f,a,h)=>[f,a,h]}};function fa(f,a){return[a==="float"?1:f==="rgb"?255:360,a==="float"?1:f==="rgb"?255:100,a==="float"?1:f==="rgb"?255:100]}function u_(f,a,h){var _;const A=fa(a,h);return[a==="rgb"?Jt(f[0],0,A[0]):vd(f[0],A[0]),Jt(f[1],0,A[1]),Jt(f[2],0,A[2]),Jt((_=f[3])!==null&&_!==void 0?_:1,0,1)]}function wd(f,a,h,_){const A=fa(a,h),z=fa(a,_);return f.map((q,de)=>q/A[de]*z[de])}function h_(f,a,h){const _=wd(f,a.mode,a.type,"int"),A=c_[a.mode][h.mode](..._);return wd(A,h.mode,"int",h.type)}function ma(f,a){return typeof f!="object"||p(f)?!1:a in f&&typeof f[a]=="number"}class ot{constructor(a,h,_="int"){this.mode=h,this.type=_,this.comps_=u_(a,h,_)}static black(a="int"){return new ot([0,0,0],"rgb",a)}static fromObject(a,h="int"){const _="a"in a?[a.r,a.g,a.b,a.a]:[a.r,a.g,a.b];return new ot(_,"rgb",h)}static toRgbaObject(a,h="int"){return a.toRgbaObject(h)}static isRgbColorObject(a){return ma(a,"r")&&ma(a,"g")&&ma(a,"b")}static isRgbaColorObject(a){return this.isRgbColorObject(a)&&ma(a,"a")}static isColorObject(a){return this.isRgbColorObject(a)}static equals(a,h){if(a.mode!==h.mode)return!1;const _=a.comps_,A=h.comps_;for(let z=0;z<_.length;z++)if(_[z]!==A[z])return!1;return!0}getComponents(a,h="int"){return yd(h_(gs(this.comps_),{mode:this.mode,type:this.type},{mode:a!=null?a:this.mode,type:h}),this.comps_[3])}toRgbaObject(a="int"){const h=this.getComponents("rgb",a);return{r:h[0],g:h[1],b:h[2],a:h[3]}}}const Wi=y("colp");class d_{constructor(a,h){this.alphaViews_=null,this.element=a.createElement("div"),this.element.classList.add(Wi());const _=a.createElement("div");_.classList.add(Wi("hsv"));const A=a.createElement("div");A.classList.add(Wi("sv")),this.svPaletteView_=h.svPaletteView,A.appendChild(this.svPaletteView_.element),_.appendChild(A);const z=a.createElement("div");z.classList.add(Wi("h")),this.hPaletteView_=h.hPaletteView,z.appendChild(this.hPaletteView_.element),_.appendChild(z),this.element.appendChild(_);const q=a.createElement("div");if(q.classList.add(Wi("rgb")),this.textView_=h.textView,q.appendChild(this.textView_.element),this.element.appendChild(q),h.alphaViews){this.alphaViews_={palette:h.alphaViews.palette,text:h.alphaViews.text};const de=a.createElement("div");de.classList.add(Wi("a"));const Fe=a.createElement("div");Fe.classList.add(Wi("ap")),Fe.appendChild(this.alphaViews_.palette.element),de.appendChild(Fe);const Ye=a.createElement("div");Ye.classList.add(Wi("at")),Ye.appendChild(this.alphaViews_.text.element),de.appendChild(Ye),this.element.appendChild(de)}}get allFocusableElements(){const a=[this.svPaletteView_.element,this.hPaletteView_.element,this.textView_.modeSelectElement,...this.textView_.textViews.map(h=>h.inputElement)];return this.alphaViews_&&a.push(this.alphaViews_.palette.element,this.alphaViews_.text.inputElement),a}}function p_(f){return f==="int"?"int":f==="float"?"float":void 0}function pc(f){const a=he;return $(f,{alpha:a.optional.boolean,color:a.optional.object({alpha:a.optional.boolean,type:a.optional.custom(p_)}),expanded:a.optional.boolean,picker:a.optional.custom(_d)})}function vs(f){return f?.1:1}function _s(f){var a;return(a=f.color)===null||a===void 0?void 0:a.type}function f_(f,a){return f.alpha===a.alpha&&f.mode===a.mode&&f.notation===a.notation&&f.type===a.type}function Hn(f,a){const h=f.match(/^(.+)%$/);return Math.min(h?parseFloat(h[1])*.01*a:parseFloat(f),a)}const m_={deg:f=>f,grad:f=>f*360/400,rad:f=>f*360/(2*Math.PI),turn:f=>f*360};function Md(f){const a=f.match(/^([0-9.]+?)(deg|grad|rad|turn)$/);if(!a)return parseFloat(f);const h=parseFloat(a[1]),_=a[2];return m_[_](h)}function Ed(f){const a=f.match(/^rgb\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!a)return null;const h=[Hn(a[1],255),Hn(a[2],255),Hn(a[3],255)];return isNaN(h[0])||isNaN(h[1])||isNaN(h[2])?null:h}function Sd(f){return a=>{const h=Ed(a);return h?new ot(h,"rgb",f):null}}function Td(f){const a=f.match(/^rgba\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!a)return null;const h=[Hn(a[1],255),Hn(a[2],255),Hn(a[3],255),Hn(a[4],1)];return isNaN(h[0])||isNaN(h[1])||isNaN(h[2])||isNaN(h[3])?null:h}function Ad(f){return a=>{const h=Td(a);return h?new ot(h,"rgb",f):null}}function Cd(f){const a=f.match(/^hsl\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!a)return null;const h=[Md(a[1]),Hn(a[2],100),Hn(a[3],100)];return isNaN(h[0])||isNaN(h[1])||isNaN(h[2])?null:h}function Pd(f){return a=>{const h=Cd(a);return h?new ot(h,"hsl",f):null}}function Rd(f){const a=f.match(/^hsla\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!a)return null;const h=[Md(a[1]),Hn(a[2],100),Hn(a[3],100),Hn(a[4],1)];return isNaN(h[0])||isNaN(h[1])||isNaN(h[2])||isNaN(h[3])?null:h}function Ld(f){return a=>{const h=Rd(a);return h?new ot(h,"hsl",f):null}}function Id(f){const a=f.match(/^#([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(a)return[parseInt(a[1]+a[1],16),parseInt(a[2]+a[2],16),parseInt(a[3]+a[3],16)];const h=f.match(/^(?:#|0x)([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return h?[parseInt(h[1],16),parseInt(h[2],16),parseInt(h[3],16)]:null}function g_(f){const a=Id(f);return a?new ot(a,"rgb","int"):null}function Dd(f){const a=f.match(/^#?([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(a)return[parseInt(a[1]+a[1],16),parseInt(a[2]+a[2],16),parseInt(a[3]+a[3],16),kt(parseInt(a[4]+a[4],16),0,255,0,1)];const h=f.match(/^(?:#|0x)?([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return h?[parseInt(h[1],16),parseInt(h[2],16),parseInt(h[3],16),kt(parseInt(h[4],16),0,255,0,1)]:null}function v_(f){const a=Dd(f);return a?new ot(a,"rgb","int"):null}function Nd(f){const a=f.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!a)return null;const h=[parseFloat(a[1]),parseFloat(a[2]),parseFloat(a[3])];return isNaN(h[0])||isNaN(h[1])||isNaN(h[2])?null:h}function Ud(f){return a=>{const h=Nd(a);return h?new ot(h,"rgb",f):null}}function kd(f){const a=f.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*a\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!a)return null;const h=[parseFloat(a[1]),parseFloat(a[2]),parseFloat(a[3]),parseFloat(a[4])];return isNaN(h[0])||isNaN(h[1])||isNaN(h[2])||isNaN(h[3])?null:h}function Fd(f){return a=>{const h=kd(a);return h?new ot(h,"rgb",f):null}}const __=[{parser:Id,result:{alpha:!1,mode:"rgb",notation:"hex"}},{parser:Dd,result:{alpha:!0,mode:"rgb",notation:"hex"}},{parser:Ed,result:{alpha:!1,mode:"rgb",notation:"func"}},{parser:Td,result:{alpha:!0,mode:"rgb",notation:"func"}},{parser:Cd,result:{alpha:!1,mode:"hsl",notation:"func"}},{parser:Rd,result:{alpha:!0,mode:"hsl",notation:"func"}},{parser:Nd,result:{alpha:!1,mode:"rgb",notation:"object"}},{parser:kd,result:{alpha:!0,mode:"rgb",notation:"object"}}];function x_(f){return __.reduce((a,{parser:h,result:_})=>a||(h(f)?_:null),null)}function fc(f,a="int"){const h=x_(f);return h?h.notation==="hex"&&a!=="float"?Object.assign(Object.assign({},h),{type:"int"}):h.notation==="func"?Object.assign(Object.assign({},h),{type:a}):null:null}const Od={int:[g_,v_,Sd("int"),Ad("int"),Pd("int"),Ld("int"),Ud("int"),Fd("int")],float:[Sd("float"),Ad("float"),Pd("float"),Ld("float"),Ud("float"),Fd("float")]};function b_(f){const a=Od[f];return h=>{if(typeof h!="string")return ot.black(f);const _=a.reduce((A,z)=>A||z(h),null);return _!=null?_:ot.black(f)}}function mc(f){const a=Od[f];return h=>a.reduce((_,A)=>_||A(h),null)}function Bd(f){const a=Jt(Math.floor(f),0,255).toString(16);return a.length===1?`0${a}`:a}function Vd(f,a="#"){const h=gs(f.getComponents("rgb")).map(Bd).join("");return`${a}${h}`}function gc(f,a="#"){const h=f.getComponents("rgb"),_=[h[0],h[1],h[2],h[3]*255].map(Bd).join("");return`${a}${_}`}function zd(f,a){const h=hn(a==="float"?2:0);return`rgb(${gs(f.getComponents("rgb",a)).map(A=>h(A)).join(", ")})`}function y_(f){return a=>zd(a,f)}function ga(f,a){const h=hn(2),_=hn(a==="float"?2:0);return`rgba(${f.getComponents("rgb",a).map((z,q)=>(q===3?h:_)(z)).join(", ")})`}function w_(f){return a=>ga(a,f)}function M_(f){const a=[hn(0),ua,ua];return`hsl(${gs(f.getComponents("hsl")).map((_,A)=>a[A](_)).join(", ")})`}function E_(f){const a=[hn(0),ua,ua,hn(2)];return`hsla(${f.getComponents("hsl").map((_,A)=>a[A](_)).join(", ")})`}function Hd(f,a){const h=hn(a==="float"?2:0),_=["r","g","b"];return`{${gs(f.getComponents("rgb",a)).map((z,q)=>`${_[q]}: ${h(z)}`).join(", ")}}`}function S_(f){return a=>Hd(a,f)}function Gd(f,a){const h=hn(2),_=hn(a==="float"?2:0),A=["r","g","b","a"];return`{${f.getComponents("rgb",a).map((q,de)=>{const Fe=de===3?h:_;return`${A[de]}: ${Fe(q)}`}).join(", ")}}`}function T_(f){return a=>Gd(a,f)}const A_=[{format:{alpha:!1,mode:"rgb",notation:"hex",type:"int"},stringifier:Vd},{format:{alpha:!0,mode:"rgb",notation:"hex",type:"int"},stringifier:gc},{format:{alpha:!1,mode:"hsl",notation:"func",type:"int"},stringifier:M_},{format:{alpha:!0,mode:"hsl",notation:"func",type:"int"},stringifier:E_},...["int","float"].reduce((f,a)=>[...f,{format:{alpha:!1,mode:"rgb",notation:"func",type:a},stringifier:y_(a)},{format:{alpha:!0,mode:"rgb",notation:"func",type:a},stringifier:w_(a)},{format:{alpha:!1,mode:"rgb",notation:"object",type:a},stringifier:S_(a)},{format:{alpha:!0,mode:"rgb",notation:"object",type:a},stringifier:T_(a)}],[])];function vc(f){return A_.reduce((a,h)=>a||(f_(h.format,f)?h.stringifier:null),null)}const mo=y("apl");class C_{constructor(a,h){this.onValueChange_=this.onValueChange_.bind(this),this.value=h.value,this.value.emitter.on("change",this.onValueChange_),this.element=a.createElement("div"),this.element.classList.add(mo()),h.viewProps.bindTabIndex(this.element);const _=a.createElement("div");_.classList.add(mo("b")),this.element.appendChild(_);const A=a.createElement("div");A.classList.add(mo("c")),_.appendChild(A),this.colorElem_=A;const z=a.createElement("div");z.classList.add(mo("m")),this.element.appendChild(z),this.markerElem_=z;const q=a.createElement("div");q.classList.add(mo("p")),this.markerElem_.appendChild(q),this.previewElem_=q,this.update_()}update_(){const a=this.value.rawValue,h=a.getComponents("rgb"),_=new ot([h[0],h[1],h[2],0],"rgb"),A=new ot([h[0],h[1],h[2],255],"rgb"),z=["to right",ga(_),ga(A)];this.colorElem_.style.background=`linear-gradient(${z.join(",")})`,this.previewElem_.style.backgroundColor=ga(a);const q=kt(h[3],0,1,0,100);this.markerElem_.style.left=`${q}%`}onValueChange_(){this.update_()}}class P_{constructor(a,h){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=h.value,this.viewProps=h.viewProps,this.view=new C_(a,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new fs(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(a,h){if(!a.point)return;const _=a.point.x/a.bounds.width,A=this.value.rawValue,[z,q,de]=A.getComponents("hsv");this.value.setRawValue(new ot([z,q,de,_],"hsv"),h)}onPointerDown_(a){this.handlePointerEvent_(a.data,{forceEmit:!1,last:!1})}onPointerMove_(a){this.handlePointerEvent_(a.data,{forceEmit:!1,last:!1})}onPointerUp_(a){this.handlePointerEvent_(a.data,{forceEmit:!0,last:!0})}onKeyDown_(a){const h=Cn(vs(!0),wi(a));if(h===0)return;const _=this.value.rawValue,[A,z,q,de]=_.getComponents("hsv");this.value.setRawValue(new ot([A,z,q,de+h],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(a){Cn(vs(!0),wi(a))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const js=y("coltxt");function R_(f){const a=f.createElement("select"),h=[{text:"RGB",value:"rgb"},{text:"HSL",value:"hsl"},{text:"HSV",value:"hsv"}];return a.appendChild(h.reduce((_,A)=>{const z=f.createElement("option");return z.textContent=A.text,z.value=A.value,_.appendChild(z),_},f.createDocumentFragment())),a}class L_{constructor(a,h){this.element=a.createElement("div"),this.element.classList.add(js());const _=a.createElement("div");_.classList.add(js("m")),this.modeElem_=R_(a),this.modeElem_.classList.add(js("ms")),_.appendChild(this.modeSelectElement);const A=a.createElement("div");A.classList.add(js("mm")),A.appendChild(ze(a,"dropdown")),_.appendChild(A),this.element.appendChild(_);const z=a.createElement("div");z.classList.add(js("w")),this.element.appendChild(z),this.textsElem_=z,this.textViews_=h.textViews,this.applyTextViews_(),P(h.colorMode,q=>{this.modeElem_.value=q})}get modeSelectElement(){return this.modeElem_}get textViews(){return this.textViews_}set textViews(a){this.textViews_=a,this.applyTextViews_()}applyTextViews_(){Z(this.textsElem_);const a=this.element.ownerDocument;this.textViews_.forEach(h=>{const _=a.createElement("div");_.classList.add(js("c")),_.appendChild(h.element),this.textsElem_.appendChild(_)})}}function I_(f){return hn(f==="float"?2:0)}function D_(f,a,h){const _=fa(f,a)[h];return new Qt({min:0,max:_})}function _c(f,a,h){return new po(f,{arrayPosition:h===0?"fst":h===3-1?"lst":"mid",baseStep:vs(!1),parser:a.parser,props:X.fromObject({draggingScale:a.colorType==="float"?.01:1,formatter:I_(a.colorType)}),value:G(0,{constraint:D_(a.colorMode,a.colorType,h)}),viewProps:a.viewProps})}class N_{constructor(a,h){this.onModeSelectChange_=this.onModeSelectChange_.bind(this),this.colorType_=h.colorType,this.parser_=h.parser,this.value=h.value,this.viewProps=h.viewProps,this.colorMode=G(this.value.rawValue.mode),this.ccs_=this.createComponentControllers_(a),this.view=new L_(a,{colorMode:this.colorMode,textViews:[this.ccs_[0].view,this.ccs_[1].view,this.ccs_[2].view]}),this.view.modeSelectElement.addEventListener("change",this.onModeSelectChange_)}createComponentControllers_(a){const h={colorMode:this.colorMode.rawValue,colorType:this.colorType_,parser:this.parser_,viewProps:this.viewProps},_=[_c(a,h,0),_c(a,h,1),_c(a,h,2)];return _.forEach((A,z)=>{uo({primary:this.value,secondary:A.value,forward:q=>q.rawValue.getComponents(this.colorMode.rawValue,this.colorType_)[z],backward:(q,de)=>{const Fe=this.colorMode.rawValue,Ye=q.rawValue.getComponents(Fe,this.colorType_);return Ye[z]=de.rawValue,new ot(yd(gs(Ye),Ye[3]),Fe,this.colorType_)}})}),_}onModeSelectChange_(a){const h=a.currentTarget;this.colorMode.rawValue=h.value,this.ccs_=this.createComponentControllers_(this.view.element.ownerDocument),this.view.textViews=[this.ccs_[0].view,this.ccs_[1].view,this.ccs_[2].view]}}const xc=y("hpl");class U_{constructor(a,h){this.onValueChange_=this.onValueChange_.bind(this),this.value=h.value,this.value.emitter.on("change",this.onValueChange_),this.element=a.createElement("div"),this.element.classList.add(xc()),h.viewProps.bindTabIndex(this.element);const _=a.createElement("div");_.classList.add(xc("c")),this.element.appendChild(_);const A=a.createElement("div");A.classList.add(xc("m")),this.element.appendChild(A),this.markerElem_=A,this.update_()}update_(){const a=this.value.rawValue,[h]=a.getComponents("hsv");this.markerElem_.style.backgroundColor=zd(new ot([h,100,100],"hsv"));const _=kt(h,0,360,0,100);this.markerElem_.style.left=`${_}%`}onValueChange_(){this.update_()}}class k_{constructor(a,h){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=h.value,this.viewProps=h.viewProps,this.view=new U_(a,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new fs(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(a,h){if(!a.point)return;const _=kt(Jt(a.point.x,0,a.bounds.width),0,a.bounds.width,0,359),A=this.value.rawValue,[,z,q,de]=A.getComponents("hsv");this.value.setRawValue(new ot([_,z,q,de],"hsv"),h)}onPointerDown_(a){this.handlePointerEvent_(a.data,{forceEmit:!1,last:!1})}onPointerMove_(a){this.handlePointerEvent_(a.data,{forceEmit:!1,last:!1})}onPointerUp_(a){this.handlePointerEvent_(a.data,{forceEmit:!0,last:!0})}onKeyDown_(a){const h=Cn(vs(!1),wi(a));if(h===0)return;const _=this.value.rawValue,[A,z,q,de]=_.getComponents("hsv");this.value.setRawValue(new ot([A+h,z,q,de],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(a){Cn(vs(!1),wi(a))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const bc=y("svp"),Wd=64;class F_{constructor(a,h){this.onValueChange_=this.onValueChange_.bind(this),this.value=h.value,this.value.emitter.on("change",this.onValueChange_),this.element=a.createElement("div"),this.element.classList.add(bc()),h.viewProps.bindTabIndex(this.element);const _=a.createElement("canvas");_.height=Wd,_.width=Wd,_.classList.add(bc("c")),this.element.appendChild(_),this.canvasElement=_;const A=a.createElement("div");A.classList.add(bc("m")),this.element.appendChild(A),this.markerElem_=A,this.update_()}update_(){const a=Ce(this.canvasElement);if(!a)return;const _=this.value.rawValue.getComponents("hsv"),A=this.canvasElement.width,z=this.canvasElement.height,q=a.getImageData(0,0,A,z),de=q.data;for(let dt=0;dt<z;dt++)for(let ft=0;ft<A;ft++){const Ei=kt(ft,0,A,0,100),vo=kt(dt,0,z,100,0),_o=bd(_[0],Ei,vo),Ks=(dt*A+ft)*4;de[Ks]=_o[0],de[Ks+1]=_o[1],de[Ks+2]=_o[2],de[Ks+3]=255}a.putImageData(q,0,0);const Fe=kt(_[1],0,100,0,100);this.markerElem_.style.left=`${Fe}%`;const Ye=kt(_[2],0,100,100,0);this.markerElem_.style.top=`${Ye}%`}onValueChange_(){this.update_()}}class O_{constructor(a,h){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=h.value,this.viewProps=h.viewProps,this.view=new F_(a,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new fs(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(a,h){if(!a.point)return;const _=kt(a.point.x,0,a.bounds.width,0,100),A=kt(a.point.y,0,a.bounds.height,100,0),[z,,,q]=this.value.rawValue.getComponents("hsv");this.value.setRawValue(new ot([z,_,A,q],"hsv"),h)}onPointerDown_(a){this.handlePointerEvent_(a.data,{forceEmit:!1,last:!1})}onPointerMove_(a){this.handlePointerEvent_(a.data,{forceEmit:!1,last:!1})}onPointerUp_(a){this.handlePointerEvent_(a.data,{forceEmit:!0,last:!0})}onKeyDown_(a){md(a.key)&&a.preventDefault();const[h,_,A,z]=this.value.rawValue.getComponents("hsv"),q=vs(!1),de=Cn(q,wi(a)),Fe=Cn(q,ho(a));de===0&&Fe===0||this.value.setRawValue(new ot([h,_+de,A+Fe,z],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(a){const h=vs(!1),_=Cn(h,wi(a)),A=Cn(h,ho(a));_===0&&A===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class B_{constructor(a,h){this.value=h.value,this.viewProps=h.viewProps,this.hPaletteC_=new k_(a,{value:this.value,viewProps:this.viewProps}),this.svPaletteC_=new O_(a,{value:this.value,viewProps:this.viewProps}),this.alphaIcs_=h.supportsAlpha?{palette:new P_(a,{value:this.value,viewProps:this.viewProps}),text:new po(a,{parser:yi,baseStep:.1,props:X.fromObject({draggingScale:.01,formatter:hn(2)}),value:G(0,{constraint:new Qt({min:0,max:1})}),viewProps:this.viewProps})}:null,this.alphaIcs_&&uo({primary:this.value,secondary:this.alphaIcs_.text.value,forward:_=>_.rawValue.getComponents()[3],backward:(_,A)=>{const z=_.rawValue.getComponents();return z[3]=A.rawValue,new ot(z,_.rawValue.mode)}}),this.textC_=new N_(a,{colorType:h.colorType,parser:yi,value:this.value,viewProps:this.viewProps}),this.view=new d_(a,{alphaViews:this.alphaIcs_?{palette:this.alphaIcs_.palette.view,text:this.alphaIcs_.text.view}:null,hPaletteView:this.hPaletteC_.view,supportsAlpha:h.supportsAlpha,svPaletteView:this.svPaletteC_.view,textView:this.textC_.view})}get textController(){return this.textC_}}const yc=y("colsw");class V_{constructor(a,h){this.onValueChange_=this.onValueChange_.bind(this),h.value.emitter.on("change",this.onValueChange_),this.value=h.value,this.element=a.createElement("div"),this.element.classList.add(yc()),h.viewProps.bindClassModifiers(this.element);const _=a.createElement("div");_.classList.add(yc("sw")),this.element.appendChild(_),this.swatchElem_=_;const A=a.createElement("button");A.classList.add(yc("b")),h.viewProps.bindDisabled(A),this.element.appendChild(A),this.buttonElement=A,this.update_()}update_(){const a=this.value.rawValue;this.swatchElem_.style.backgroundColor=gc(a)}onValueChange_(){this.update_()}}class z_{constructor(a,h){this.value=h.value,this.viewProps=h.viewProps,this.view=new V_(a,{value:this.value,viewProps:this.viewProps})}}class wc{constructor(a,h){this.onButtonBlur_=this.onButtonBlur_.bind(this),this.onButtonClick_=this.onButtonClick_.bind(this),this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.value=h.value,this.viewProps=h.viewProps,this.foldable_=rt.create(h.expanded),this.swatchC_=new z_(a,{value:this.value,viewProps:this.viewProps});const _=this.swatchC_.view.buttonElement;_.addEventListener("blur",this.onButtonBlur_),_.addEventListener("click",this.onButtonClick_),this.textC_=new ca(a,{parser:h.parser,props:X.fromObject({formatter:h.formatter}),value:this.value,viewProps:this.viewProps}),this.view=new i_(a,{foldable:this.foldable_,pickerLayout:h.pickerLayout}),this.view.swatchElement.appendChild(this.swatchC_.view.element),this.view.textElement.appendChild(this.textC_.view.element),this.popC_=h.pickerLayout==="popup"?new rd(a,{viewProps:this.viewProps}):null;const A=new B_(a,{colorType:h.colorType,supportsAlpha:h.supportsAlpha,value:this.value,viewProps:this.viewProps});A.view.allFocusableElements.forEach(z=>{z.addEventListener("blur",this.onPopupChildBlur_),z.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=A,this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(A.view.element),uo({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:z=>z.rawValue,backward:(z,q)=>q.rawValue})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),Ie(this.foldable_,this.view.pickerElement))}get textController(){return this.textC_}onButtonBlur_(a){if(!this.popC_)return;const h=this.view.element,_=a.relatedTarget;(!_||!h.contains(_))&&(this.popC_.shows.rawValue=!1)}onButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(a){if(!this.popC_)return;const h=this.popC_.view.element,_=re(a);_&&h.contains(_)||_&&_===this.swatchC_.view.buttonElement&&!Ct(h.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(a){this.popC_?a.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&a.key==="Escape"&&this.swatchC_.view.buttonElement.focus()}}function H_(f,a){return ot.isColorObject(f)?ot.fromObject(f,a):ot.black(a)}function G_(f){return gs(f.getComponents("rgb")).reduce((a,h)=>a<<8|Math.floor(h)&255,0)}function W_(f){return f.getComponents("rgb").reduce((a,h,_)=>{const A=Math.floor(_===3?h*255:h)&255;return a<<8|A},0)>>>0}function X_(f){return new ot([f>>16&255,f>>8&255,f&255],"rgb")}function j_(f){return new ot([f>>24&255,f>>16&255,f>>8&255,kt(f&255,0,255,0,1)],"rgb")}function $_(f){return typeof f!="number"?ot.black():X_(f)}function q_(f){return typeof f!="number"?ot.black():j_(f)}function Y_(f){const a=vc(f);return a?(h,_)=>{fo(h,a(_))}:null}function K_(f){const a=f?W_:G_;return(h,_)=>{fo(h,a(_))}}function Z_(f,a,h){const _=a.toRgbaObject(h);f.writeProperty("r",_.r),f.writeProperty("g",_.g),f.writeProperty("b",_.b),f.writeProperty("a",_.a)}function Q_(f,a,h){const _=a.toRgbaObject(h);f.writeProperty("r",_.r),f.writeProperty("g",_.g),f.writeProperty("b",_.b)}function J_(f,a){return(h,_)=>{f?Z_(h,_,a):Q_(h,_,a)}}function Mc(f){var a;return!!((f==null?void 0:f.alpha)||((a=f==null?void 0:f.color)===null||a===void 0?void 0:a.alpha))}function ex(f){return f?a=>gc(a,"0x"):a=>Vd(a,"0x")}function tx(f){return"color"in f||"view"in f&&f.view==="color"}const nx={id:"input-color-number",type:"input",accept:(f,a)=>{if(typeof f!="number"||!tx(a))return null;const h=pc(a);return h?{initialValue:f,params:h}:null},binding:{reader:f=>Mc(f.params)?q_:$_,equals:ot.equals,writer:f=>K_(Mc(f.params))},controller:f=>{const a=Mc(f.params),h="expanded"in f.params?f.params.expanded:void 0,_="picker"in f.params?f.params.picker:void 0;return new wc(f.document,{colorType:"int",expanded:h!=null?h:!1,formatter:ex(a),parser:mc("int"),pickerLayout:_!=null?_:"popup",supportsAlpha:a,value:f.value,viewProps:f.viewProps})}};function ix(f){return ot.isRgbaColorObject(f)}function sx(f){return a=>H_(a,f)}function rx(f,a){return h=>f?Gd(h,a):Hd(h,a)}const ox={id:"input-color-object",type:"input",accept:(f,a)=>{if(!ot.isColorObject(f))return null;const h=pc(a);return h?{initialValue:f,params:h}:null},binding:{reader:f=>sx(_s(f.params)),equals:ot.equals,writer:f=>J_(ix(f.initialValue),_s(f.params))},controller:f=>{var a;const h=ot.isRgbaColorObject(f.initialValue),_="expanded"in f.params?f.params.expanded:void 0,A="picker"in f.params?f.params.picker:void 0,z=(a=_s(f.params))!==null&&a!==void 0?a:"int";return new wc(f.document,{colorType:z,expanded:_!=null?_:!1,formatter:rx(h,z),parser:mc(z),pickerLayout:A!=null?A:"popup",supportsAlpha:h,value:f.value,viewProps:f.viewProps})}},ax={id:"input-color-string",type:"input",accept:(f,a)=>{if(typeof f!="string"||"view"in a&&a.view==="text")return null;const h=fc(f,_s(a));if(!h||!vc(h))return null;const A=pc(a);return A?{initialValue:f,params:A}:null},binding:{reader:f=>{var a;return b_((a=_s(f.params))!==null&&a!==void 0?a:"int")},equals:ot.equals,writer:f=>{const a=fc(f.initialValue,_s(f.params));if(!a)throw b.shouldNeverHappen();const h=Y_(a);if(!h)throw b.notBindable();return h}},controller:f=>{const a=fc(f.initialValue,_s(f.params));if(!a)throw b.shouldNeverHappen();const h=vc(a);if(!h)throw b.shouldNeverHappen();const _="expanded"in f.params?f.params.expanded:void 0,A="picker"in f.params?f.params.picker:void 0;return new wc(f.document,{colorType:a.type,expanded:_!=null?_:!1,formatter:h,parser:mc(a.type),pickerLayout:A!=null?A:"popup",supportsAlpha:a.alpha,value:f.value,viewProps:f.viewProps})}};class Xi{constructor(a){this.components=a.components,this.asm_=a.assembly}constrain(a){const h=this.asm_.toComponents(a).map((_,A)=>{var z,q;return(q=(z=this.components[A])===null||z===void 0?void 0:z.constrain(_))!==null&&q!==void 0?q:_});return this.asm_.fromComponents(h)}}const Xd=y("pndtxt");class lx{constructor(a,h){this.textViews=h.textViews,this.element=a.createElement("div"),this.element.classList.add(Xd()),this.textViews.forEach(_=>{const A=a.createElement("div");A.classList.add(Xd("a")),A.appendChild(_.element),this.element.appendChild(A)})}}function cx(f,a,h){return new po(f,{arrayPosition:h===0?"fst":h===a.axes.length-1?"lst":"mid",baseStep:a.axes[h].baseStep,parser:a.parser,props:a.axes[h].textProps,value:G(0,{constraint:a.axes[h].constraint}),viewProps:a.viewProps})}class Ec{constructor(a,h){this.value=h.value,this.viewProps=h.viewProps,this.acs_=h.axes.map((_,A)=>cx(a,h,A)),this.acs_.forEach((_,A)=>{uo({primary:this.value,secondary:_.value,forward:z=>h.assembly.toComponents(z.rawValue)[A],backward:(z,q)=>{const de=h.assembly.toComponents(z.rawValue);return de[A]=q.rawValue,h.assembly.fromComponents(de)}})}),this.view=new lx(a,{textViews:this.acs_.map(_=>_.view)})}}function jd(f,a){return"step"in f&&!p(f.step)?new Hi(f.step,a):null}function $d(f){return"max"in f&&!p(f.max)||"min"in f&&!p(f.min)?new Qt({max:f.max,min:f.min}):null}function ux(f,a){const h=[],_=jd(f,a);_&&h.push(_);const A=$d(f);A&&h.push(A);const z=hc(f.options);return z&&h.push(z),new zt(h)}function hx(f){const a=f?on(f,Qt):null;return a?[a.minValue,a.maxValue]:[void 0,void 0]}function dx(f){const[a,h]=hx(f);return[a!=null?a:0,h!=null?h:100]}const px={id:"input-number",type:"input",accept:(f,a)=>{if(typeof f!="number")return null;const h=he,_=$(a,{format:h.optional.function,max:h.optional.number,min:h.optional.number,options:h.optional.custom(ha),step:h.optional.number});return _?{initialValue:f,params:_}:null},binding:{reader:f=>dd,constraint:f=>ux(f.params,f.initialValue),writer:f=>fo},controller:f=>{var a,h;const _=f.value,A=f.constraint;if(A&&on(A,bi))return new ao(f.document,{props:X.fromObject({options:(a=dc(A))!==null&&a!==void 0?a:[]}),value:_,viewProps:f.viewProps});const z=(h="format"in f.params?f.params.format:void 0)!==null&&h!==void 0?h:hn(da(A,_.rawValue));if(A&&on(A,Qt)){const[q,de]=dx(A);return new uc(f.document,{baseStep:Ws(A),parser:yi,sliderProps:X.fromObject({maxValue:de,minValue:q}),textProps:X.fromObject({draggingScale:Xs(A,_.rawValue),formatter:z}),value:_,viewProps:f.viewProps})}return new po(f.document,{baseStep:Ws(A),parser:yi,props:X.fromObject({draggingScale:Xs(A,_.rawValue),formatter:z}),value:_,viewProps:f.viewProps})}};class ji{constructor(a=0,h=0){this.x=a,this.y=h}getComponents(){return[this.x,this.y]}static isObject(a){if(p(a))return!1;const h=a.x,_=a.y;return!(typeof h!="number"||typeof _!="number")}static equals(a,h){return a.x===h.x&&a.y===h.y}toObject(){return{x:this.x,y:this.y}}}const qd={toComponents:f=>f.getComponents(),fromComponents:f=>new ji(...f)},$s=y("p2d");class fx{constructor(a,h){this.element=a.createElement("div"),this.element.classList.add($s()),h.viewProps.bindClassModifiers(this.element),P(h.expanded,F(this.element,$s(void 0,"expanded")));const _=a.createElement("div");_.classList.add($s("h")),this.element.appendChild(_);const A=a.createElement("button");A.classList.add($s("b")),A.appendChild(ze(a,"p2dpad")),h.viewProps.bindDisabled(A),_.appendChild(A),this.buttonElement=A;const z=a.createElement("div");if(z.classList.add($s("t")),_.appendChild(z),this.textElement=z,h.pickerLayout==="inline"){const q=a.createElement("div");q.classList.add($s("p")),this.element.appendChild(q),this.pickerElement=q}else this.pickerElement=null}}const $i=y("p2dp");class mx{constructor(a,h){this.onFoldableChange_=this.onFoldableChange_.bind(this),this.onValueChange_=this.onValueChange_.bind(this),this.invertsY_=h.invertsY,this.maxValue_=h.maxValue,this.element=a.createElement("div"),this.element.classList.add($i()),h.layout==="popup"&&this.element.classList.add($i(void 0,"p"));const _=a.createElement("div");_.classList.add($i("p")),h.viewProps.bindTabIndex(_),this.element.appendChild(_),this.padElement=_;const A=a.createElementNS(ke,"svg");A.classList.add($i("g")),this.padElement.appendChild(A),this.svgElem_=A;const z=a.createElementNS(ke,"line");z.classList.add($i("ax")),z.setAttributeNS(null,"x1","0"),z.setAttributeNS(null,"y1","50%"),z.setAttributeNS(null,"x2","100%"),z.setAttributeNS(null,"y2","50%"),this.svgElem_.appendChild(z);const q=a.createElementNS(ke,"line");q.classList.add($i("ax")),q.setAttributeNS(null,"x1","50%"),q.setAttributeNS(null,"y1","0"),q.setAttributeNS(null,"x2","50%"),q.setAttributeNS(null,"y2","100%"),this.svgElem_.appendChild(q);const de=a.createElementNS(ke,"line");de.classList.add($i("l")),de.setAttributeNS(null,"x1","50%"),de.setAttributeNS(null,"y1","50%"),this.svgElem_.appendChild(de),this.lineElem_=de;const Fe=a.createElement("div");Fe.classList.add($i("m")),this.padElement.appendChild(Fe),this.markerElem_=Fe,h.value.emitter.on("change",this.onValueChange_),this.value=h.value,this.update_()}get allFocusableElements(){return[this.padElement]}update_(){const[a,h]=this.value.rawValue.getComponents(),_=this.maxValue_,A=kt(a,-_,+_,0,100),z=kt(h,-_,+_,0,100),q=this.invertsY_?100-z:z;this.lineElem_.setAttributeNS(null,"x2",`${A}%`),this.lineElem_.setAttributeNS(null,"y2",`${q}%`),this.markerElem_.style.left=`${A}%`,this.markerElem_.style.top=`${q}%`}onValueChange_(){this.update_()}onFoldableChange_(){this.update_()}}function Yd(f,a,h){return[Cn(a[0],wi(f)),Cn(a[1],ho(f))*(h?1:-1)]}class gx{constructor(a,h){this.onPadKeyDown_=this.onPadKeyDown_.bind(this),this.onPadKeyUp_=this.onPadKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=h.value,this.viewProps=h.viewProps,this.baseSteps_=h.baseSteps,this.maxValue_=h.maxValue,this.invertsY_=h.invertsY,this.view=new mx(a,{invertsY:this.invertsY_,layout:h.layout,maxValue:this.maxValue_,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new fs(this.view.padElement),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.padElement.addEventListener("keydown",this.onPadKeyDown_),this.view.padElement.addEventListener("keyup",this.onPadKeyUp_)}handlePointerEvent_(a,h){if(!a.point)return;const _=this.maxValue_,A=kt(a.point.x,0,a.bounds.width,-_,+_),z=kt(this.invertsY_?a.bounds.height-a.point.y:a.point.y,0,a.bounds.height,-_,+_);this.value.setRawValue(new ji(A,z),h)}onPointerDown_(a){this.handlePointerEvent_(a.data,{forceEmit:!1,last:!1})}onPointerMove_(a){this.handlePointerEvent_(a.data,{forceEmit:!1,last:!1})}onPointerUp_(a){this.handlePointerEvent_(a.data,{forceEmit:!0,last:!0})}onPadKeyDown_(a){md(a.key)&&a.preventDefault();const[h,_]=Yd(a,this.baseSteps_,this.invertsY_);h===0&&_===0||this.value.setRawValue(new ji(this.value.rawValue.x+h,this.value.rawValue.y+_),{forceEmit:!1,last:!1})}onPadKeyUp_(a){const[h,_]=Yd(a,this.baseSteps_,this.invertsY_);h===0&&_===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class vx{constructor(a,h){var _,A;this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.onPadButtonBlur_=this.onPadButtonBlur_.bind(this),this.onPadButtonClick_=this.onPadButtonClick_.bind(this),this.value=h.value,this.viewProps=h.viewProps,this.foldable_=rt.create(h.expanded),this.popC_=h.pickerLayout==="popup"?new rd(a,{viewProps:this.viewProps}):null;const z=new gx(a,{baseSteps:[h.axes[0].baseStep,h.axes[1].baseStep],invertsY:h.invertsY,layout:h.pickerLayout,maxValue:h.maxValue,value:this.value,viewProps:this.viewProps});z.view.allFocusableElements.forEach(q=>{q.addEventListener("blur",this.onPopupChildBlur_),q.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=z,this.textC_=new Ec(a,{assembly:qd,axes:h.axes,parser:h.parser,value:this.value,viewProps:this.viewProps}),this.view=new fx(a,{expanded:this.foldable_.value("expanded"),pickerLayout:h.pickerLayout,viewProps:this.viewProps}),this.view.textElement.appendChild(this.textC_.view.element),(_=this.view.buttonElement)===null||_===void 0||_.addEventListener("blur",this.onPadButtonBlur_),(A=this.view.buttonElement)===null||A===void 0||A.addEventListener("click",this.onPadButtonClick_),this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(this.pickerC_.view.element),uo({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:q=>q.rawValue,backward:(q,de)=>de.rawValue})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),Ie(this.foldable_,this.view.pickerElement))}onPadButtonBlur_(a){if(!this.popC_)return;const h=this.view.element,_=a.relatedTarget;(!_||!h.contains(_))&&(this.popC_.shows.rawValue=!1)}onPadButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(a){if(!this.popC_)return;const h=this.popC_.view.element,_=re(a);_&&h.contains(_)||_&&_===this.view.buttonElement&&!Ct(h.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(a){this.popC_?a.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&a.key==="Escape"&&this.view.buttonElement.focus()}}function _x(f){return ji.isObject(f)?new ji(f.x,f.y):new ji}function xx(f,a){f.writeProperty("x",a.x),f.writeProperty("y",a.y)}function Mi(f,a){if(!f)return;const h=[],_=jd(f,a);_&&h.push(_);const A=$d(f);return A&&h.push(A),new zt(h)}function bx(f,a){return new Xi({assembly:qd,components:[Mi("x"in f?f.x:void 0,a.x),Mi("y"in f?f.y:void 0,a.y)]})}function Kd(f,a){var h,_;const A=f&&on(f,Qt);if(A)return Math.max(Math.abs((h=A.minValue)!==null&&h!==void 0?h:0),Math.abs((_=A.maxValue)!==null&&_!==void 0?_:0));const z=Ws(f);return Math.max(Math.abs(z)*10,Math.abs(a)*10)}function yx(f,a){const h=a instanceof Xi?a.components[0]:void 0,_=a instanceof Xi?a.components[1]:void 0,A=Kd(h,f.x),z=Kd(_,f.y);return Math.max(A,z)}function Zd(f,a){return{baseStep:Ws(a),constraint:a,textProps:X.fromObject({draggingScale:Xs(a,f),formatter:hn(da(a,f))})}}function wx(f){if(!("y"in f))return!1;const a=f.y;return a&&"inverted"in a?!!a.inverted:!1}const Mx={id:"input-point2d",type:"input",accept:(f,a)=>{if(!ji.isObject(f))return null;const h=he,_=$(a,{expanded:h.optional.boolean,picker:h.optional.custom(_d),x:h.optional.custom(Gi),y:h.optional.object({inverted:h.optional.boolean,max:h.optional.number,min:h.optional.number,step:h.optional.number})});return _?{initialValue:f,params:_}:null},binding:{reader:f=>_x,constraint:f=>bx(f.params,f.initialValue),equals:ji.equals,writer:f=>xx},controller:f=>{const a=f.document,h=f.value,_=f.constraint;if(!(_ instanceof Xi))throw b.shouldNeverHappen();const A="expanded"in f.params?f.params.expanded:void 0,z="picker"in f.params?f.params.picker:void 0;return new vx(a,{axes:[Zd(h.rawValue.x,_.components[0]),Zd(h.rawValue.y,_.components[1])],expanded:A!=null?A:!1,invertsY:wx(f.params),maxValue:yx(h.rawValue,_),parser:yi,pickerLayout:z!=null?z:"popup",value:h,viewProps:f.viewProps})}};class qs{constructor(a=0,h=0,_=0){this.x=a,this.y=h,this.z=_}getComponents(){return[this.x,this.y,this.z]}static isObject(a){if(p(a))return!1;const h=a.x,_=a.y,A=a.z;return!(typeof h!="number"||typeof _!="number"||typeof A!="number")}static equals(a,h){return a.x===h.x&&a.y===h.y&&a.z===h.z}toObject(){return{x:this.x,y:this.y,z:this.z}}}const Qd={toComponents:f=>f.getComponents(),fromComponents:f=>new qs(...f)};function Ex(f){return qs.isObject(f)?new qs(f.x,f.y,f.z):new qs}function Sx(f,a){f.writeProperty("x",a.x),f.writeProperty("y",a.y),f.writeProperty("z",a.z)}function Tx(f,a){return new Xi({assembly:Qd,components:[Mi("x"in f?f.x:void 0,a.x),Mi("y"in f?f.y:void 0,a.y),Mi("z"in f?f.z:void 0,a.z)]})}function Sc(f,a){return{baseStep:Ws(a),constraint:a,textProps:X.fromObject({draggingScale:Xs(a,f),formatter:hn(da(a,f))})}}const Ax={id:"input-point3d",type:"input",accept:(f,a)=>{if(!qs.isObject(f))return null;const h=he,_=$(a,{x:h.optional.custom(Gi),y:h.optional.custom(Gi),z:h.optional.custom(Gi)});return _?{initialValue:f,params:_}:null},binding:{reader:f=>Ex,constraint:f=>Tx(f.params,f.initialValue),equals:qs.equals,writer:f=>Sx},controller:f=>{const a=f.value,h=f.constraint;if(!(h instanceof Xi))throw b.shouldNeverHappen();return new Ec(f.document,{assembly:Qd,axes:[Sc(a.rawValue.x,h.components[0]),Sc(a.rawValue.y,h.components[1]),Sc(a.rawValue.z,h.components[2])],parser:yi,value:a,viewProps:f.viewProps})}};class Ys{constructor(a=0,h=0,_=0,A=0){this.x=a,this.y=h,this.z=_,this.w=A}getComponents(){return[this.x,this.y,this.z,this.w]}static isObject(a){if(p(a))return!1;const h=a.x,_=a.y,A=a.z,z=a.w;return!(typeof h!="number"||typeof _!="number"||typeof A!="number"||typeof z!="number")}static equals(a,h){return a.x===h.x&&a.y===h.y&&a.z===h.z&&a.w===h.w}toObject(){return{x:this.x,y:this.y,z:this.z,w:this.w}}}const Jd={toComponents:f=>f.getComponents(),fromComponents:f=>new Ys(...f)};function Cx(f){return Ys.isObject(f)?new Ys(f.x,f.y,f.z,f.w):new Ys}function Px(f,a){f.writeProperty("x",a.x),f.writeProperty("y",a.y),f.writeProperty("z",a.z),f.writeProperty("w",a.w)}function Rx(f,a){return new Xi({assembly:Jd,components:[Mi("x"in f?f.x:void 0,a.x),Mi("y"in f?f.y:void 0,a.y),Mi("z"in f?f.z:void 0,a.z),Mi("w"in f?f.w:void 0,a.w)]})}function Lx(f,a){return{baseStep:Ws(a),constraint:a,textProps:X.fromObject({draggingScale:Xs(a,f),formatter:hn(da(a,f))})}}const Ix={id:"input-point4d",type:"input",accept:(f,a)=>{if(!Ys.isObject(f))return null;const h=he,_=$(a,{x:h.optional.custom(Gi),y:h.optional.custom(Gi),z:h.optional.custom(Gi),w:h.optional.custom(Gi)});return _?{initialValue:f,params:_}:null},binding:{reader:f=>Cx,constraint:f=>Rx(f.params,f.initialValue),equals:Ys.equals,writer:f=>Px},controller:f=>{const a=f.value,h=f.constraint;if(!(h instanceof Xi))throw b.shouldNeverHappen();return new Ec(f.document,{assembly:Jd,axes:a.rawValue.getComponents().map((_,A)=>Lx(_,h.components[A])),parser:yi,value:a,viewProps:f.viewProps})}};function Dx(f){const a=[],h=hc(f.options);return h&&a.push(h),new zt(a)}const Nx={id:"input-string",type:"input",accept:(f,a)=>{if(typeof f!="string")return null;const _=$(a,{options:he.optional.custom(ha)});return _?{initialValue:f,params:_}:null},binding:{reader:f=>pd,constraint:f=>Dx(f.params),writer:f=>fo},controller:f=>{var a;const h=f.document,_=f.value,A=f.constraint;return A&&on(A,bi)?new ao(h,{props:X.fromObject({options:(a=dc(A))!==null&&a!==void 0?a:[]}),value:_,viewProps:f.viewProps}):new ca(h,{parser:z=>z,props:X.fromObject({formatter:oc}),value:_,viewProps:f.viewProps})}},go={monitor:{defaultInterval:200,defaultLineCount:3}},ep=y("mll");class Ux{constructor(a,h){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=h.formatter,this.element=a.createElement("div"),this.element.classList.add(ep()),h.viewProps.bindClassModifiers(this.element);const _=a.createElement("textarea");_.classList.add(ep("i")),_.style.height=`calc(var(--bld-us) * ${h.lineCount})`,_.readOnly=!0,h.viewProps.bindDisabled(_),this.element.appendChild(_),this.textareaElem_=_,h.value.emitter.on("change",this.onValueUpdate_),this.value=h.value,this.update_()}update_(){const a=this.textareaElem_,h=a.scrollTop===a.scrollHeight-a.clientHeight,_=[];this.value.rawValue.forEach(A=>{A!==void 0&&_.push(this.formatter_(A))}),a.textContent=_.join(`
`),h&&(a.scrollTop=a.scrollHeight)}onValueUpdate_(){this.update_()}}class Tc{constructor(a,h){this.value=h.value,this.viewProps=h.viewProps,this.view=new Ux(a,{formatter:h.formatter,lineCount:h.lineCount,value:this.value,viewProps:this.viewProps})}}const tp=y("sgl");class kx{constructor(a,h){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=h.formatter,this.element=a.createElement("div"),this.element.classList.add(tp()),h.viewProps.bindClassModifiers(this.element);const _=a.createElement("input");_.classList.add(tp("i")),_.readOnly=!0,_.type="text",h.viewProps.bindDisabled(_),this.element.appendChild(_),this.inputElement=_,h.value.emitter.on("change",this.onValueUpdate_),this.value=h.value,this.update_()}update_(){const a=this.value.rawValue,h=a[a.length-1];this.inputElement.value=h!==void 0?this.formatter_(h):""}onValueUpdate_(){this.update_()}}class Ac{constructor(a,h){this.value=h.value,this.viewProps=h.viewProps,this.view=new kx(a,{formatter:h.formatter,value:this.value,viewProps:this.viewProps})}}const Fx={id:"monitor-bool",type:"monitor",accept:(f,a)=>{if(typeof f!="boolean")return null;const _=$(a,{lineCount:he.optional.number});return _?{initialValue:f,params:_}:null},binding:{reader:f=>ad},controller:f=>{var a;return f.value.rawValue.length===1?new Ac(f.document,{formatter:ld,value:f.value,viewProps:f.viewProps}):new Tc(f.document,{formatter:ld,lineCount:(a=f.params.lineCount)!==null&&a!==void 0?a:go.monitor.defaultLineCount,value:f.value,viewProps:f.viewProps})}},qi=y("grl");class Ox{constructor(a,h){this.onCursorChange_=this.onCursorChange_.bind(this),this.onValueUpdate_=this.onValueUpdate_.bind(this),this.element=a.createElement("div"),this.element.classList.add(qi()),h.viewProps.bindClassModifiers(this.element),this.formatter_=h.formatter,this.props_=h.props,this.cursor_=h.cursor,this.cursor_.emitter.on("change",this.onCursorChange_);const _=a.createElementNS(ke,"svg");_.classList.add(qi("g")),_.style.height=`calc(var(--bld-us) * ${h.lineCount})`,this.element.appendChild(_),this.svgElem_=_;const A=a.createElementNS(ke,"polyline");this.svgElem_.appendChild(A),this.lineElem_=A;const z=a.createElement("div");z.classList.add(qi("t"),y("tt")()),this.element.appendChild(z),this.tooltipElem_=z,h.value.emitter.on("change",this.onValueUpdate_),this.value=h.value,this.update_()}get graphElement(){return this.svgElem_}update_(){const a=this.svgElem_.getBoundingClientRect(),h=this.value.rawValue.length-1,_=this.props_.get("minValue"),A=this.props_.get("maxValue"),z=[];this.value.rawValue.forEach((dt,ft)=>{if(dt===void 0)return;const Ei=kt(ft,0,h,0,a.width),vo=kt(dt,_,A,a.height,0);z.push([Ei,vo].join(","))}),this.lineElem_.setAttributeNS(null,"points",z.join(" "));const q=this.tooltipElem_,de=this.value.rawValue[this.cursor_.rawValue];if(de===void 0){q.classList.remove(qi("t","a"));return}const Fe=kt(this.cursor_.rawValue,0,h,0,a.width),Ye=kt(de,_,A,a.height,0);q.style.left=`${Fe}px`,q.style.top=`${Ye}px`,q.textContent=`${this.formatter_(de)}`,q.classList.contains(qi("t","a"))||(q.classList.add(qi("t","a"),qi("t","in")),Ue(q),q.classList.remove(qi("t","in")))}onValueUpdate_(){this.update_()}onCursorChange_(){this.update_()}}class Bx{constructor(a,h){if(this.onGraphMouseMove_=this.onGraphMouseMove_.bind(this),this.onGraphMouseLeave_=this.onGraphMouseLeave_.bind(this),this.onGraphPointerDown_=this.onGraphPointerDown_.bind(this),this.onGraphPointerMove_=this.onGraphPointerMove_.bind(this),this.onGraphPointerUp_=this.onGraphPointerUp_.bind(this),this.props_=h.props,this.value=h.value,this.viewProps=h.viewProps,this.cursor_=G(-1),this.view=new Ox(a,{cursor:this.cursor_,formatter:h.formatter,lineCount:h.lineCount,props:this.props_,value:this.value,viewProps:this.viewProps}),!Ct(a))this.view.element.addEventListener("mousemove",this.onGraphMouseMove_),this.view.element.addEventListener("mouseleave",this.onGraphMouseLeave_);else{const _=new fs(this.view.element);_.emitter.on("down",this.onGraphPointerDown_),_.emitter.on("move",this.onGraphPointerMove_),_.emitter.on("up",this.onGraphPointerUp_)}}onGraphMouseLeave_(){this.cursor_.rawValue=-1}onGraphMouseMove_(a){const h=this.view.element.getBoundingClientRect();this.cursor_.rawValue=Math.floor(kt(a.offsetX,0,h.width,0,this.value.rawValue.length))}onGraphPointerDown_(a){this.onGraphPointerMove_(a)}onGraphPointerMove_(a){if(!a.data.point){this.cursor_.rawValue=-1;return}this.cursor_.rawValue=Math.floor(kt(a.data.point.x,0,a.data.bounds.width,0,this.value.rawValue.length))}onGraphPointerUp_(){this.cursor_.rawValue=-1}}function Cc(f){return"format"in f&&!p(f.format)?f.format:hn(2)}function Vx(f){var a;return f.value.rawValue.length===1?new Ac(f.document,{formatter:Cc(f.params),value:f.value,viewProps:f.viewProps}):new Tc(f.document,{formatter:Cc(f.params),lineCount:(a=f.params.lineCount)!==null&&a!==void 0?a:go.monitor.defaultLineCount,value:f.value,viewProps:f.viewProps})}function zx(f){var a,h,_;return new Bx(f.document,{formatter:Cc(f.params),lineCount:(a=f.params.lineCount)!==null&&a!==void 0?a:go.monitor.defaultLineCount,props:X.fromObject({maxValue:(h="max"in f.params?f.params.max:null)!==null&&h!==void 0?h:100,minValue:(_="min"in f.params?f.params.min:null)!==null&&_!==void 0?_:0}),value:f.value,viewProps:f.viewProps})}function np(f){return"view"in f&&f.view==="graph"}const Hx={id:"monitor-number",type:"monitor",accept:(f,a)=>{if(typeof f!="number")return null;const h=he,_=$(a,{format:h.optional.function,lineCount:h.optional.number,max:h.optional.number,min:h.optional.number,view:h.optional.string});return _?{initialValue:f,params:_}:null},binding:{defaultBufferSize:f=>np(f)?64:1,reader:f=>dd},controller:f=>np(f.params)?zx(f):Vx(f)},Gx={id:"monitor-string",type:"monitor",accept:(f,a)=>{if(typeof f!="string")return null;const h=he,_=$(a,{lineCount:h.optional.number,multiline:h.optional.boolean});return _?{initialValue:f,params:_}:null},binding:{reader:f=>pd},controller:f=>{var a;const h=f.value;return h.rawValue.length>1||"multiline"in f.params&&f.params.multiline?new Tc(f.document,{formatter:oc,lineCount:(a=f.params.lineCount)!==null&&a!==void 0?a:go.monitor.defaultLineCount,value:h,viewProps:f.viewProps}):new Ac(f.document,{formatter:oc,value:h,viewProps:f.viewProps})}};class Wx{constructor(a){this.onValueChange_=this.onValueChange_.bind(this),this.reader=a.reader,this.writer=a.writer,this.emitter=new v,this.value=a.value,this.value.emitter.on("change",this.onValueChange_),this.target=a.target,this.read()}read(){const a=this.target.read();a!==void 0&&(this.value.rawValue=this.reader(a))}write_(a){this.writer(this.target,a)}onValueChange_(a){this.write_(a.rawValue),this.emitter.emit("change",{options:a.options,rawValue:a.rawValue,sender:this})}}function Xx(f,a){const h=f.accept(a.target.read(),a.params);if(p(h))return null;const _=he,A={target:a.target,initialValue:h.initialValue,params:h.params},z=f.binding.reader(A),q=f.binding.constraint?f.binding.constraint(A):void 0,de=G(z(h.initialValue),{constraint:q,equals:f.binding.equals}),Fe=new Wx({reader:z,target:a.target,value:de,writer:f.binding.writer(A)}),Ye=_.optional.boolean(a.params.disabled).value,dt=_.optional.boolean(a.params.hidden).value,ft=f.controller({constraint:q,document:a.document,initialValue:h.initialValue,params:h.params,value:Fe.value,viewProps:Be.create({disabled:Ye,hidden:dt})}),Ei=_.optional.string(a.params.label).value;return new oe(a.document,{binding:Fe,blade:ae(),props:X.fromObject({label:Ei!=null?Ei:a.target.key}),valueController:ft})}class jx{constructor(a){this.onTick_=this.onTick_.bind(this),this.reader_=a.reader,this.target=a.target,this.emitter=new v,this.value=a.value,this.ticker=a.ticker,this.ticker.emitter.on("tick",this.onTick_),this.read()}dispose(){this.ticker.dispose()}read(){const a=this.target.read();if(a===void 0)return;const h=this.value.rawValue,_=this.reader_(a);this.value.rawValue=jv(h,_),this.emitter.emit("update",{rawValue:_,sender:this})}onTick_(a){this.read()}}function $x(f,a){return a===0?new ps:new ro(f,a!=null?a:go.monitor.defaultInterval)}function qx(f,a){var h,_,A;const z=he,q=f.accept(a.target.read(),a.params);if(p(q))return null;const de={target:a.target,initialValue:q.initialValue,params:q.params},Fe=f.binding.reader(de),Ye=(_=(h=z.optional.number(a.params.bufferSize).value)!==null&&h!==void 0?h:f.binding.defaultBufferSize&&f.binding.defaultBufferSize(q.params))!==null&&_!==void 0?_:1,dt=z.optional.number(a.params.interval).value,ft=new jx({reader:Fe,target:a.target,ticker:$x(a.document,dt),value:Wv(Ye)}),Ei=z.optional.boolean(a.params.disabled).value,vo=z.optional.boolean(a.params.hidden).value,_o=f.controller({document:a.document,params:q.params,value:ft.value,viewProps:Be.create({disabled:Ei,hidden:vo})}),Ks=(A=z.optional.string(a.params.label).value)!==null&&A!==void 0?A:a.target.key;return new Te(a.document,{binding:ft,blade:ae(),props:X.fromObject({label:Ks}),valueController:_o})}class Yx{constructor(){this.pluginsMap_={blades:[],inputs:[],monitors:[]}}getAll(){return[...this.pluginsMap_.blades,...this.pluginsMap_.inputs,...this.pluginsMap_.monitors]}register(a){a.type==="blade"?this.pluginsMap_.blades.unshift(a):a.type==="input"?this.pluginsMap_.inputs.unshift(a):a.type==="monitor"&&this.pluginsMap_.monitors.unshift(a)}createInput(a,h,_){const A=h.read();if(p(A))throw new b({context:{key:h.key},type:"nomatchingcontroller"});const z=this.pluginsMap_.inputs.reduce((q,de)=>q!=null?q:Xx(de,{document:a,target:h,params:_}),null);if(z)return z;throw new b({context:{key:h.key},type:"nomatchingcontroller"})}createMonitor(a,h,_){const A=this.pluginsMap_.monitors.reduce((z,q)=>z!=null?z:qx(q,{document:a,params:_,target:h}),null);if(A)return A;throw new b({context:{key:h.key},type:"nomatchingcontroller"})}createBlade(a,h){const _=this.pluginsMap_.blades.reduce((A,z)=>A!=null?A:aa(z,{document:a,params:h}),null);if(!_)throw new b({type:"nomatchingview",context:{params:h}});return _}createBladeApi(a){if(a instanceof oe)return new O(a);if(a instanceof Te)return new le(a);if(a instanceof zi)return new ht(a,this);const h=this.pluginsMap_.blades.reduce((_,A)=>_!=null?_:A.api({controller:a,pool:this}),null);if(!h)throw b.shouldNeverHappen();return h}}function Kx(){const f=new Yx;return[Mx,Ax,Ix,Nx,px,ax,ox,nx,n_,Fx,Gx,Hx,He,ic,Se,ui].forEach(a=>{f.register(a)}),f}class ip extends s{constructor(a){super(a),this.emitter_=new v,this.controller_.valueController.value.emitter.on("change",h=>{this.emitter_.emit("change",{event:new o(this,h.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(a){this.controller_.props.set("label",a)}get options(){return this.controller_.valueController.props.get("options")}set options(a){this.controller_.valueController.props.set("options",a)}get value(){return this.controller_.valueController.value.rawValue}set value(a){this.controller_.valueController.value.rawValue=a}on(a,h){const _=h.bind(this);return this.emitter_.on(a,A=>{_(A.event)}),this}}class sp extends s{constructor(a){super(a),this.emitter_=new v,this.controller_.valueController.value.emitter.on("change",h=>{this.emitter_.emit("change",{event:new o(this,h.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(a){this.controller_.props.set("label",a)}get maxValue(){return this.controller_.valueController.sliderController.props.get("maxValue")}set maxValue(a){this.controller_.valueController.sliderController.props.set("maxValue",a)}get minValue(){return this.controller_.valueController.sliderController.props.get("minValue")}set minValue(a){this.controller_.valueController.sliderController.props.set("minValue",a)}get value(){return this.controller_.valueController.value.rawValue}set value(a){this.controller_.valueController.value.rawValue=a}on(a,h){const _=h.bind(this);return this.emitter_.on(a,A=>{_(A.event)}),this}}class rp extends s{constructor(a){super(a),this.emitter_=new v,this.controller_.valueController.value.emitter.on("change",h=>{this.emitter_.emit("change",{event:new o(this,h.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(a){this.controller_.props.set("label",a)}get formatter(){return this.controller_.valueController.props.get("formatter")}set formatter(a){this.controller_.valueController.props.set("formatter",a)}get value(){return this.controller_.valueController.value.rawValue}set value(a){this.controller_.valueController.value.rawValue=a}on(a,h){const _=h.bind(this);return this.emitter_.on(a,A=>{_(A.event)}),this}}const Zx=function(){return{id:"list",type:"blade",accept(f){const a=he,h=$(f,{options:a.required.custom(ha),value:a.required.raw,view:a.required.constant("list"),label:a.optional.string});return h?{params:h}:null},controller(f){const a=new ao(f.document,{props:X.fromObject({options:xd(f.params.options)}),value:G(f.params.value),viewProps:f.viewProps});return new N(f.document,{blade:f.blade,props:X.fromObject({label:f.params.label}),valueController:a})},api(f){return!(f.controller instanceof N)||!(f.controller.valueController instanceof ao)?null:new ip(f.controller)}}}();function Qx(f){return f.reduce((a,h)=>Object.assign(a,{[h.presetKey]:h.read()}),{})}function Jx(f,a){f.forEach(h=>{const _=a[h.presetKey];_!==void 0&&h.write(_)})}class eb extends Ht{constructor(a,h){super(a,h)}get element(){return this.controller_.view.element}importPreset(a){const h=this.controller_.rackController.rack.find(oe).map(_=>_.binding.target);Jx(h,a),this.refresh()}exportPreset(){const a=this.controller_.rackController.rack.find(oe).map(h=>h.binding.target);return Qx(a)}refresh(){this.controller_.rackController.rack.find(oe).forEach(a=>{a.binding.read()}),this.controller_.rackController.rack.find(Te).forEach(a=>{a.binding.read()})}}class tb extends io{constructor(a,h){super(a,{expanded:h.expanded,blade:h.blade,props:h.props,root:!0,viewProps:h.viewProps})}}const nb={id:"slider",type:"blade",accept(f){const a=he,h=$(f,{max:a.required.number,min:a.required.number,view:a.required.constant("slider"),format:a.optional.function,label:a.optional.string,value:a.optional.number});return h?{params:h}:null},controller(f){var a,h;const _=(a=f.params.value)!==null&&a!==void 0?a:0,A=new uc(f.document,{baseStep:1,parser:yi,sliderProps:X.fromObject({maxValue:f.params.max,minValue:f.params.min}),textProps:X.fromObject({draggingScale:Xs(void 0,_),formatter:(h=f.params.format)!==null&&h!==void 0?h:Hv}),value:G(_),viewProps:f.viewProps});return new N(f.document,{blade:f.blade,props:X.fromObject({label:f.params.label}),valueController:A})},api(f){return!(f.controller instanceof N)||!(f.controller.valueController instanceof uc)?null:new sp(f.controller)}},ib=function(){return{id:"text",type:"blade",accept(f){const a=he,h=$(f,{parse:a.required.function,value:a.required.raw,view:a.required.constant("text"),format:a.optional.function,label:a.optional.string});return h?{params:h}:null},controller(f){var a;const h=new ca(f.document,{parser:f.params.parse,props:X.fromObject({formatter:(a=f.params.format)!==null&&a!==void 0?a:_=>String(_)}),value:G(f.params.value),viewProps:f.viewProps});return new N(f.document,{blade:f.blade,props:X.fromObject({label:f.params.label}),valueController:h})},api(f){return!(f.controller instanceof N)||!(f.controller.valueController instanceof ca)?null:new rp(f.controller)}}}();function sb(f){const a=f.createElement("div");return a.classList.add(y("dfw")()),f.body&&f.body.appendChild(a),a}function op(f,a,h){if(f.querySelector(`style[data-tp-style=${a}]`))return;const _=f.createElement("style");_.dataset.tpStyle=a,_.textContent=h,f.head.appendChild(_)}class rb extends eb{constructor(a){var h,_;const A=a!=null?a:{},z=(h=A.document)!==null&&h!==void 0?h:Ve(),q=Kx(),de=new tb(z,{expanded:A.expanded,blade:ae(),props:X.fromObject({title:A.title}),viewProps:Be.create()});super(de,q),this.pool_=q,this.containerElem_=(_=A.container)!==null&&_!==void 0?_:sb(z),this.containerElem_.appendChild(this.element),this.doc_=z,this.usesDefaultWrapper_=!A.container,this.setUpDefaultPlugins_()}get document(){if(!this.doc_)throw b.alreadyDisposed();return this.doc_}dispose(){const a=this.containerElem_;if(!a)throw b.alreadyDisposed();if(this.usesDefaultWrapper_){const h=a.parentElement;h&&h.removeChild(a)}this.containerElem_=null,this.doc_=null,super.dispose()}registerPlugin(a){("plugin"in a?[a.plugin]:"plugins"in a?a.plugins:[]).forEach(_=>{this.pool_.register(_),this.embedPluginStyle_(_)})}embedPluginStyle_(a){a.css&&op(this.document,`plugin-${a.id}`,a.css)}setUpDefaultPlugins_(){op(this.document,"default",'.tp-tbiv_b,.tp-coltxtv_ms,.tp-ckbv_i,.tp-rotv_b,.tp-fldv_b,.tp-mllv_i,.tp-sglv_i,.tp-grlv_g,.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw,.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0}.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{background-color:var(--btn-bg);border-radius:var(--elm-br);color:var(--btn-fg);cursor:pointer;display:block;font-weight:bold;height:var(--bld-us);line-height:var(--bld-us);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tp-p2dv_b:hover,.tp-btnv_b:hover,.tp-lstv_s:hover{background-color:var(--btn-bg-h)}.tp-p2dv_b:focus,.tp-btnv_b:focus,.tp-lstv_s:focus{background-color:var(--btn-bg-f)}.tp-p2dv_b:active,.tp-btnv_b:active,.tp-lstv_s:active{background-color:var(--btn-bg-a)}.tp-p2dv_b:disabled,.tp-btnv_b:disabled,.tp-lstv_s:disabled{opacity:.5}.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw{background-color:var(--in-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--in-fg);font-family:inherit;height:var(--bld-us);line-height:var(--bld-us);min-width:0;width:100%}.tp-txtv_i:hover,.tp-p2dpv_p:hover,.tp-colswv_sw:hover{background-color:var(--in-bg-h)}.tp-txtv_i:focus,.tp-p2dpv_p:focus,.tp-colswv_sw:focus{background-color:var(--in-bg-f)}.tp-txtv_i:active,.tp-p2dpv_p:active,.tp-colswv_sw:active{background-color:var(--in-bg-a)}.tp-txtv_i:disabled,.tp-p2dpv_p:disabled,.tp-colswv_sw:disabled{opacity:.5}.tp-mllv_i,.tp-sglv_i,.tp-grlv_g{background-color:var(--mo-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--mo-fg);height:var(--bld-us);scrollbar-color:currentColor transparent;scrollbar-width:thin;width:100%}.tp-mllv_i::-webkit-scrollbar,.tp-sglv_i::-webkit-scrollbar,.tp-grlv_g::-webkit-scrollbar{height:8px;width:8px}.tp-mllv_i::-webkit-scrollbar-corner,.tp-sglv_i::-webkit-scrollbar-corner,.tp-grlv_g::-webkit-scrollbar-corner{background-color:transparent}.tp-mllv_i::-webkit-scrollbar-thumb,.tp-sglv_i::-webkit-scrollbar-thumb,.tp-grlv_g::-webkit-scrollbar-thumb{background-clip:padding-box;background-color:currentColor;border:transparent solid 2px;border-radius:4px}.tp-rotv{--font-family: var(--tp-font-family, Roboto Mono, Source Code Pro, Menlo, Courier, monospace);--bs-br: var(--tp-base-border-radius, 6px);--cnt-h-p: var(--tp-container-horizontal-padding, 4px);--cnt-v-p: var(--tp-container-vertical-padding, 4px);--elm-br: var(--tp-element-border-radius, 2px);--bld-s: var(--tp-blade-spacing, 4px);--bld-us: var(--tp-blade-unit-size, 20px);--bs-bg: var(--tp-base-background-color, #28292e);--bs-sh: var(--tp-base-shadow-color, rgba(0, 0, 0, 0.2));--btn-bg: var(--tp-button-background-color, #adafb8);--btn-bg-a: var(--tp-button-background-color-active, #d6d7db);--btn-bg-f: var(--tp-button-background-color-focus, #c8cad0);--btn-bg-h: var(--tp-button-background-color-hover, #bbbcc4);--btn-fg: var(--tp-button-foreground-color, #28292e);--cnt-bg: var(--tp-container-background-color, rgba(187, 188, 196, 0.1));--cnt-bg-a: var(--tp-container-background-color-active, rgba(187, 188, 196, 0.25));--cnt-bg-f: var(--tp-container-background-color-focus, rgba(187, 188, 196, 0.2));--cnt-bg-h: var(--tp-container-background-color-hover, rgba(187, 188, 196, 0.15));--cnt-fg: var(--tp-container-foreground-color, #bbbcc4);--in-bg: var(--tp-input-background-color, rgba(187, 188, 196, 0.1));--in-bg-a: var(--tp-input-background-color-active, rgba(187, 188, 196, 0.25));--in-bg-f: var(--tp-input-background-color-focus, rgba(187, 188, 196, 0.2));--in-bg-h: var(--tp-input-background-color-hover, rgba(187, 188, 196, 0.15));--in-fg: var(--tp-input-foreground-color, #bbbcc4);--lbl-fg: var(--tp-label-foreground-color, rgba(187, 188, 196, 0.7));--mo-bg: var(--tp-monitor-background-color, rgba(0, 0, 0, 0.2));--mo-fg: var(--tp-monitor-foreground-color, rgba(187, 188, 196, 0.7));--grv-fg: var(--tp-groove-foreground-color, rgba(187, 188, 196, 0.1))}.tp-rotv_c>.tp-cntv.tp-v-lst,.tp-tabv_c .tp-brkv>.tp-cntv.tp-v-lst,.tp-fldv_c>.tp-cntv.tp-v-lst{margin-bottom:calc(-1*var(--cnt-v-p))}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-tabv_c .tp-brkv>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_c{border-bottom-left-radius:0}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-tabv_c .tp-brkv>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_b{border-bottom-left-radius:0}.tp-rotv_c>*:not(.tp-v-fst),.tp-tabv_c .tp-brkv>*:not(.tp-v-fst),.tp-fldv_c>*:not(.tp-v-fst){margin-top:var(--bld-s)}.tp-rotv_c>.tp-sprv:not(.tp-v-fst),.tp-tabv_c .tp-brkv>.tp-sprv:not(.tp-v-fst),.tp-fldv_c>.tp-sprv:not(.tp-v-fst),.tp-rotv_c>.tp-cntv:not(.tp-v-fst),.tp-tabv_c .tp-brkv>.tp-cntv:not(.tp-v-fst),.tp-fldv_c>.tp-cntv:not(.tp-v-fst){margin-top:var(--cnt-v-p)}.tp-rotv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-tabv_c .tp-brkv>.tp-sprv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-rotv_c>.tp-cntv+*:not(.tp-v-hidden),.tp-tabv_c .tp-brkv>.tp-cntv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-cntv+*:not(.tp-v-hidden){margin-top:var(--cnt-v-p)}.tp-rotv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-tabv_c .tp-brkv>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-fldv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-rotv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-tabv_c .tp-brkv>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-fldv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv{margin-top:0}.tp-tabv_c .tp-brkv>.tp-cntv,.tp-fldv_c>.tp-cntv{margin-left:4px}.tp-tabv_c .tp-brkv>.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-fldv>.tp-fldv_b{border-top-left-radius:var(--elm-br);border-bottom-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv>.tp-fldv.tp-fldv-expanded>.tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-fldv-expanded>.tp-fldv_b{border-bottom-left-radius:0}.tp-tabv_c .tp-brkv .tp-fldv>.tp-fldv_c,.tp-fldv_c .tp-fldv>.tp-fldv_c{border-bottom-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv>.tp-tabv>.tp-tabv_i,.tp-fldv_c>.tp-tabv>.tp-tabv_i{border-top-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv .tp-tabv>.tp-tabv_c,.tp-fldv_c .tp-tabv>.tp-tabv_c{border-bottom-left-radius:var(--elm-br)}.tp-rotv_b,.tp-fldv_b{background-color:var(--cnt-bg);color:var(--cnt-fg);cursor:pointer;display:block;height:calc(var(--bld-us) + 4px);line-height:calc(var(--bld-us) + 4px);overflow:hidden;padding-left:var(--cnt-h-p);padding-right:calc(4px + var(--bld-us) + var(--cnt-h-p));position:relative;text-align:left;text-overflow:ellipsis;white-space:nowrap;width:100%;transition:border-radius .2s ease-in-out .2s}.tp-rotv_b:hover,.tp-fldv_b:hover{background-color:var(--cnt-bg-h)}.tp-rotv_b:focus,.tp-fldv_b:focus{background-color:var(--cnt-bg-f)}.tp-rotv_b:active,.tp-fldv_b:active{background-color:var(--cnt-bg-a)}.tp-rotv_b:disabled,.tp-fldv_b:disabled{opacity:.5}.tp-rotv_m,.tp-fldv_m{background:linear-gradient(to left, var(--cnt-fg), var(--cnt-fg) 2px, transparent 2px, transparent 4px, var(--cnt-fg) 4px);border-radius:2px;bottom:0;content:"";display:block;height:6px;right:calc(var(--cnt-h-p) + (var(--bld-us) + 4px - 6px)/2 - 2px);margin:auto;opacity:.5;position:absolute;top:0;transform:rotate(90deg);transition:transform .2s ease-in-out;width:6px}.tp-rotv.tp-rotv-expanded .tp-rotv_m,.tp-fldv.tp-fldv-expanded>.tp-fldv_b>.tp-fldv_m{transform:none}.tp-rotv_c,.tp-fldv_c{box-sizing:border-box;height:0;opacity:0;overflow:hidden;padding-bottom:0;padding-top:0;position:relative;transition:height .2s ease-in-out,opacity .2s linear,padding .2s ease-in-out}.tp-rotv.tp-rotv-cpl:not(.tp-rotv-expanded) .tp-rotv_c,.tp-fldv.tp-fldv-cpl:not(.tp-fldv-expanded)>.tp-fldv_c{display:none}.tp-rotv.tp-rotv-expanded .tp-rotv_c,.tp-fldv.tp-fldv-expanded>.tp-fldv_c{opacity:1;padding-bottom:var(--cnt-v-p);padding-top:var(--cnt-v-p);transform:none;overflow:visible;transition:height .2s ease-in-out,opacity .2s linear .2s,padding .2s ease-in-out}.tp-lstv,.tp-coltxtv_m{position:relative}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m,.tp-coltxtv_mm{bottom:0;margin:auto;pointer-events:none;position:absolute;right:2px;top:0}.tp-lstv_m svg,.tp-coltxtv_mm svg{bottom:0;height:16px;margin:auto;position:absolute;right:0;top:0;width:16px}.tp-lstv_m svg path,.tp-coltxtv_mm svg path{fill:currentColor}.tp-pndtxtv,.tp-coltxtv_w{display:flex}.tp-pndtxtv_a,.tp-coltxtv_c{width:100%}.tp-pndtxtv_a+.tp-pndtxtv_a,.tp-coltxtv_c+.tp-pndtxtv_a,.tp-pndtxtv_a+.tp-coltxtv_c,.tp-coltxtv_c+.tp-coltxtv_c{margin-left:2px}.tp-btnv_b{width:100%}.tp-btnv_t{text-align:center}.tp-ckbv_l{display:block;position:relative}.tp-ckbv_i{left:0;opacity:0;position:absolute;top:0}.tp-ckbv_w{background-color:var(--in-bg);border-radius:var(--elm-br);cursor:pointer;display:block;height:var(--bld-us);position:relative;width:var(--bld-us)}.tp-ckbv_w svg{bottom:0;display:block;height:16px;left:0;margin:auto;opacity:0;position:absolute;right:0;top:0;width:16px}.tp-ckbv_w svg path{fill:none;stroke:var(--in-fg);stroke-width:2}.tp-ckbv_i:hover+.tp-ckbv_w{background-color:var(--in-bg-h)}.tp-ckbv_i:focus+.tp-ckbv_w{background-color:var(--in-bg-f)}.tp-ckbv_i:active+.tp-ckbv_w{background-color:var(--in-bg-a)}.tp-ckbv_i:checked+.tp-ckbv_w svg{opacity:1}.tp-ckbv.tp-v-disabled .tp-ckbv_w{opacity:.5}.tp-colv{position:relative}.tp-colv_h{display:flex}.tp-colv_s{flex-grow:0;flex-shrink:0;width:var(--bld-us)}.tp-colv_t{flex:1;margin-left:4px}.tp-colv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-colv.tp-colv-cpl .tp-colv_p{overflow:visible}.tp-colv.tp-colv-expanded .tp-colv_p{margin-top:var(--bld-s);opacity:1}.tp-colv .tp-popv{left:calc(-1*var(--cnt-h-p));right:calc(-1*var(--cnt-h-p));top:var(--bld-us)}.tp-colpv_h,.tp-colpv_ap{margin-left:6px;margin-right:6px}.tp-colpv_h{margin-top:var(--bld-s)}.tp-colpv_rgb{display:flex;margin-top:var(--bld-s);width:100%}.tp-colpv_a{display:flex;margin-top:var(--cnt-v-p);padding-top:calc(var(--cnt-v-p) + 2px);position:relative}.tp-colpv_a:before{background-color:var(--grv-fg);content:"";height:2px;left:calc(-1*var(--cnt-h-p));position:absolute;right:calc(-1*var(--cnt-h-p));top:0}.tp-colpv_ap{align-items:center;display:flex;flex:3}.tp-colpv_at{flex:1;margin-left:4px}.tp-svpv{border-radius:var(--elm-br);outline:none;overflow:hidden;position:relative}.tp-svpv_c{cursor:crosshair;display:block;height:calc(var(--bld-us)*4);width:100%}.tp-svpv_m{border-radius:100%;border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;filter:drop-shadow(0 0 1px rgba(0, 0, 0, 0.3));height:12px;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;width:12px}.tp-svpv:focus .tp-svpv_m{border-color:#fff}.tp-hplv{cursor:pointer;height:var(--bld-us);outline:none;position:relative}.tp-hplv_c{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAABCAYAAABubagXAAAAQ0lEQVQoU2P8z8Dwn0GCgQEDi2OK/RBgYHjBgIpfovFh8j8YBIgzFGQxuqEgPhaDOT5gOhPkdCxOZeBg+IDFZZiGAgCaSSMYtcRHLgAAAABJRU5ErkJggg==);background-position:left top;background-repeat:no-repeat;background-size:100% 100%;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;position:absolute;top:50%;width:100%}.tp-hplv_m{border-radius:var(--elm-br);border:rgba(255,255,255,.75) solid 2px;box-shadow:0 0 2px rgba(0,0,0,.1);box-sizing:border-box;height:12px;left:50%;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;top:50%;width:12px}.tp-hplv:focus .tp-hplv_m{border-color:#fff}.tp-aplv{cursor:pointer;height:var(--bld-us);outline:none;position:relative;width:100%}.tp-aplv_b{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:4px 4px;background-position:0 0,2px 2px;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;overflow:hidden;position:absolute;top:50%;width:100%}.tp-aplv_c{bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv_m{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:12px 12px;background-position:0 0,6px 6px;border-radius:var(--elm-br);box-shadow:0 0 2px rgba(0,0,0,.1);height:12px;left:50%;margin-left:-6px;margin-top:-6px;overflow:hidden;pointer-events:none;position:absolute;top:50%;width:12px}.tp-aplv_p{border-radius:var(--elm-br);border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv:focus .tp-aplv_p{border-color:#fff}.tp-colswv{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:10px 10px;background-position:0 0,5px 5px;border-radius:var(--elm-br);overflow:hidden}.tp-colswv.tp-v-disabled{opacity:.5}.tp-colswv_sw{border-radius:0}.tp-colswv_b{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;border-width:0;cursor:pointer;display:block;height:var(--bld-us);left:0;margin:0;outline:none;padding:0;position:absolute;top:0;width:var(--bld-us)}.tp-colswv_b:focus::after{border:rgba(255,255,255,.75) solid 2px;border-radius:var(--elm-br);bottom:0;content:"";display:block;left:0;position:absolute;right:0;top:0}.tp-coltxtv{display:flex;width:100%}.tp-coltxtv_m{margin-right:4px}.tp-coltxtv_ms{border-radius:var(--elm-br);color:var(--lbl-fg);cursor:pointer;height:var(--bld-us);line-height:var(--bld-us);padding:0 18px 0 4px}.tp-coltxtv_ms:hover{background-color:var(--in-bg-h)}.tp-coltxtv_ms:focus{background-color:var(--in-bg-f)}.tp-coltxtv_ms:active{background-color:var(--in-bg-a)}.tp-coltxtv_mm{color:var(--lbl-fg)}.tp-coltxtv_w{flex:1}.tp-dfwv{position:absolute;top:8px;right:8px;width:256px}.tp-fldv.tp-fldv-not .tp-fldv_b{display:none}.tp-fldv_t{padding-left:4px}.tp-fldv_c{border-left:var(--cnt-bg) solid 4px}.tp-fldv_b:hover+.tp-fldv_c{border-left-color:var(--cnt-bg-h)}.tp-fldv_b:focus+.tp-fldv_c{border-left-color:var(--cnt-bg-f)}.tp-fldv_b:active+.tp-fldv_c{border-left-color:var(--cnt-bg-a)}.tp-grlv{position:relative}.tp-grlv_g{display:block;height:calc(var(--bld-us)*3)}.tp-grlv_g polyline{fill:none;stroke:var(--mo-fg);stroke-linejoin:round}.tp-grlv_t{margin-top:-4px;transition:left .05s,top .05s;visibility:hidden}.tp-grlv_t.tp-grlv_t-a{visibility:visible}.tp-grlv_t.tp-grlv_t-in{transition:none}.tp-grlv.tp-v-disabled .tp-grlv_g{opacity:.5}.tp-grlv .tp-ttv{background-color:var(--mo-fg)}.tp-grlv .tp-ttv::before{border-top-color:var(--mo-fg)}.tp-lblv{align-items:center;display:flex;line-height:1.3;padding-left:var(--cnt-h-p);padding-right:var(--cnt-h-p)}.tp-lblv.tp-lblv-nol{display:block}.tp-lblv_l{color:var(--lbl-fg);flex:1;-webkit-hyphens:auto;-ms-hyphens:auto;hyphens:auto;overflow:hidden;padding-left:4px;padding-right:16px}.tp-lblv.tp-v-disabled .tp-lblv_l{opacity:.5}.tp-lblv.tp-lblv-nol .tp-lblv_l{display:none}.tp-lblv_v{align-self:flex-start;flex-grow:0;flex-shrink:0;width:160px}.tp-lblv.tp-lblv-nol .tp-lblv_v{width:100%}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m{color:var(--btn-fg)}.tp-sglv_i{padding:0 4px}.tp-sglv.tp-v-disabled .tp-sglv_i{opacity:.5}.tp-mllv_i{display:block;height:calc(var(--bld-us)*3);line-height:var(--bld-us);padding:0 4px;resize:none;white-space:pre}.tp-mllv.tp-v-disabled .tp-mllv_i{opacity:.5}.tp-p2dv{position:relative}.tp-p2dv_h{display:flex}.tp-p2dv_b{height:var(--bld-us);margin-right:4px;position:relative;width:var(--bld-us)}.tp-p2dv_b svg{display:block;height:16px;left:50%;margin-left:-8px;margin-top:-8px;position:absolute;top:50%;width:16px}.tp-p2dv_b svg path{stroke:currentColor;stroke-width:2}.tp-p2dv_b svg circle{fill:currentColor}.tp-p2dv_t{flex:1}.tp-p2dv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-p2dv.tp-p2dv-expanded .tp-p2dv_p{margin-top:var(--bld-s);opacity:1}.tp-p2dv .tp-popv{left:calc(-1*var(--cnt-h-p));right:calc(-1*var(--cnt-h-p));top:var(--bld-us)}.tp-p2dpv{padding-left:calc(var(--bld-us) + 4px)}.tp-p2dpv_p{cursor:crosshair;height:0;overflow:hidden;padding-bottom:100%;position:relative}.tp-p2dpv_g{display:block;height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}.tp-p2dpv_ax{opacity:.1;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_l{opacity:.5;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_m{border:var(--in-fg) solid 1px;border-radius:50%;box-sizing:border-box;height:4px;margin-left:-2px;margin-top:-2px;position:absolute;width:4px}.tp-p2dpv_p:focus .tp-p2dpv_m{background-color:var(--in-fg);border-width:0}.tp-popv{background-color:var(--bs-bg);border-radius:6px;box-shadow:0 2px 4px var(--bs-sh);display:none;max-width:168px;padding:var(--cnt-v-p) var(--cnt-h-p);position:absolute;visibility:hidden;z-index:1000}.tp-popv.tp-popv-v{display:block;visibility:visible}.tp-sprv_r{background-color:var(--grv-fg);border-width:0;display:block;height:2px;margin:0;width:100%}.tp-sldv.tp-v-disabled{opacity:.5}.tp-sldv_t{box-sizing:border-box;cursor:pointer;height:var(--bld-us);margin:0 6px;outline:none;position:relative}.tp-sldv_t::before{background-color:var(--in-bg);border-radius:1px;bottom:0;content:"";display:block;height:2px;left:0;margin:auto;position:absolute;right:0;top:0}.tp-sldv_k{height:100%;left:0;position:absolute;top:0}.tp-sldv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";display:block;height:2px;left:0;margin-bottom:auto;margin-top:auto;position:absolute;right:0;top:0}.tp-sldv_k::after{background-color:var(--btn-bg);border-radius:var(--elm-br);bottom:0;content:"";display:block;height:12px;margin-bottom:auto;margin-top:auto;position:absolute;right:-6px;top:0;width:12px}.tp-sldv_t:hover .tp-sldv_k::after{background-color:var(--btn-bg-h)}.tp-sldv_t:focus .tp-sldv_k::after{background-color:var(--btn-bg-f)}.tp-sldv_t:active .tp-sldv_k::after{background-color:var(--btn-bg-a)}.tp-sldtxtv{display:flex}.tp-sldtxtv_s{flex:2}.tp-sldtxtv_t{flex:1;margin-left:4px}.tp-tabv.tp-v-disabled{opacity:.5}.tp-tabv_i{align-items:flex-end;display:flex;overflow:hidden}.tp-tabv.tp-tabv-nop .tp-tabv_i{height:calc(var(--bld-us) + 4px);position:relative}.tp-tabv.tp-tabv-nop .tp-tabv_i::before{background-color:var(--cnt-bg);bottom:0;content:"";height:2px;left:0;position:absolute;right:0}.tp-tabv_c{border-left:var(--cnt-bg) solid 4px;padding-bottom:var(--cnt-v-p);padding-top:var(--cnt-v-p)}.tp-tbiv{flex:1;min-width:0;position:relative}.tp-tbiv+.tp-tbiv{margin-left:2px}.tp-tbiv+.tp-tbiv::before{background-color:var(--cnt-bg);bottom:0;content:"";height:2px;left:-2px;position:absolute;width:2px}.tp-tbiv_b{background-color:var(--cnt-bg);display:block;padding-left:calc(var(--cnt-h-p) + 4px);padding-right:calc(var(--cnt-h-p) + 4px);width:100%}.tp-tbiv_b:hover{background-color:var(--cnt-bg-h)}.tp-tbiv_b:focus{background-color:var(--cnt-bg-f)}.tp-tbiv_b:active{background-color:var(--cnt-bg-a)}.tp-tbiv_b:disabled{opacity:.5}.tp-tbiv_t{color:var(--cnt-fg);height:calc(var(--bld-us) + 4px);line-height:calc(var(--bld-us) + 4px);opacity:.5;overflow:hidden;text-overflow:ellipsis}.tp-tbiv.tp-tbiv-sel .tp-tbiv_t{opacity:1}.tp-txtv{position:relative}.tp-txtv_i{padding:0 4px}.tp-txtv.tp-txtv-fst .tp-txtv_i{border-bottom-right-radius:0;border-top-right-radius:0}.tp-txtv.tp-txtv-mid .tp-txtv_i{border-radius:0}.tp-txtv.tp-txtv-lst .tp-txtv_i{border-bottom-left-radius:0;border-top-left-radius:0}.tp-txtv.tp-txtv-num .tp-txtv_i{text-align:right}.tp-txtv.tp-txtv-drg .tp-txtv_i{opacity:.3}.tp-txtv_k{cursor:pointer;height:100%;left:-3px;position:absolute;top:0;width:12px}.tp-txtv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";height:calc(var(--bld-us) - 4px);left:50%;margin-bottom:auto;margin-left:-1px;margin-top:auto;opacity:.1;position:absolute;top:0;transition:border-radius .1s,height .1s,transform .1s,width .1s;width:2px}.tp-txtv_k:hover::before,.tp-txtv.tp-txtv-drg .tp-txtv_k::before{opacity:1}.tp-txtv.tp-txtv-drg .tp-txtv_k::before{border-radius:50%;height:4px;transform:translateX(-1px);width:4px}.tp-txtv_g{bottom:0;display:block;height:8px;left:50%;margin:auto;overflow:visible;pointer-events:none;position:absolute;top:0;visibility:hidden;width:100%}.tp-txtv.tp-txtv-drg .tp-txtv_g{visibility:visible}.tp-txtv_gb{fill:none;stroke:var(--in-fg);stroke-dasharray:1}.tp-txtv_gh{fill:none;stroke:var(--in-fg)}.tp-txtv .tp-ttv{margin-left:6px;visibility:hidden}.tp-txtv.tp-txtv-drg .tp-ttv{visibility:visible}.tp-ttv{background-color:var(--in-fg);border-radius:var(--elm-br);color:var(--bs-bg);padding:2px 4px;pointer-events:none;position:absolute;transform:translate(-50%, -100%)}.tp-ttv::before{border-color:var(--in-fg) transparent transparent transparent;border-style:solid;border-width:2px;box-sizing:border-box;content:"";font-size:.9em;height:4px;left:50%;margin-left:-2px;position:absolute;top:100%;width:4px}.tp-rotv{background-color:var(--bs-bg);border-radius:var(--bs-br);box-shadow:0 2px 4px var(--bs-sh);font-family:var(--font-family);font-size:11px;font-weight:500;line-height:1;text-align:left}.tp-rotv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br);border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br);padding-left:calc(4px + var(--bld-us) + var(--cnt-h-p));text-align:center}.tp-rotv.tp-rotv-expanded .tp-rotv_b{border-bottom-left-radius:0;border-bottom-right-radius:0}.tp-rotv.tp-rotv-not .tp-rotv_b{display:none}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_c,.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c .tp-fldv.tp-v-vlst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-right-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst{margin-top:calc(-1*var(--cnt-v-p))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst>.tp-fldv_b{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst{margin-top:calc(-1*var(--cnt-v-p))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst>.tp-tabv_i{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv.tp-v-disabled,.tp-rotv .tp-v-disabled{pointer-events:none}.tp-rotv.tp-v-hidden,.tp-rotv .tp-v-hidden{display:none}'),this.pool_.getAll().forEach(a=>{this.embedPluginStyle_(a)}),this.registerPlugin({plugins:[nb,Zx,ui,ib]})}}const ob=new n("3.1.0");t.BladeApi=s,t.ButtonApi=x,t.FolderApi=Ht,t.InputBindingApi=O,t.ListApi=ip,t.MonitorBindingApi=le,t.Pane=rb,t.SeparatorApi=K,t.SliderApi=sp,t.TabApi=Gt,t.TabPageApi=pn,t.TextApi=rp,t.TpChangeEvent=o,t.VERSION=ob,Object.defineProperty(t,"__esModule",{value:!0})})})(gh,gh.exports);class pP{constructor(e,t){this.renderer=e,this.scene=t,this.bakeGroups=[],this.meshToGroup=new Map,this.matTexDispose=null,this.bakeResult=null,this.firstPostBakeRender=!1,this.onProgress=null,this.dummyLightmap=null,this.diag=new ev(e)}getDummyLightmap(){if(this.dummyLightmap)return this.dummyLightmap;const e=new Uint8Array([255,255,255,255]),t=new Os(e,1,1);return t.needsUpdate=!0,t.channel=2,this.dummyLightmap=t,t}installDummyLightmaps(e){const t=this.getDummyLightmap();for(const n of e){const s=n.material;!s||(s.lightMap=t,s.lightMapIntensity=0,s.needsUpdate=!0)}}disposeAllGroups(){var e;for(const t of this.bakeGroups)(e=t.refinement)==null||e.dispose(),t.composite.dispose(),t.aoMapper.dispose(),t.lightmapper.dispose(),t.atlasDispose();this.bakeGroups=[],this.meshToGroup.clear()}async runBake(e,t,n){var d;if(!e.length)return;this.diag.snap("bake() entry");const s=n.lightMapSize;if(this.scene.updateMatrixWorld(!0),!e.filter(p=>{var m;return((m=n.perMesh[p.uuid])==null?void 0:m.exclude)!==!0}).length){console.warn("[baker] all meshes excluded \u2014 nothing to bake");return}this.disposeAllGroups(),(d=this.matTexDispose)==null||d.call(this),this.matTexDispose=null;let o=null;if(n.secondaryLightEnabled){o=new Gh(new We(n.secondaryColor).convertSRGBToLinear(),n.secondaryIntensity);const p=new D(n.secondaryDirX,n.secondaryDirY,n.secondaryDirZ).normalize();o.position.copy(p).multiplyScalar(-10),this.scene.add(o)}const l={};for(const p of e){const m=n.perMesh[p.uuid];if(!m)continue;const g={};m.scaleInLightmap!==void 0&&m.scaleInLightmap!==1&&(g.density=m.scaleInLightmap),m.exclude&&(g.exclude=!0),(g.density!==void 0||g.exclude)&&(l[p.uuid]=g)}const c={resolution:s,samples:n.targetSamples,castsPerFrame:n.casts,bounces:n.bounces,filtering:n.filterMode==="linear"?"linear":"nearest",texelsPerMeter:n.texelsPerMeter,perMesh:l,denoise:!1,refinementOptions:{dilationIterations:0,denoiseEnabled:!1},light:{position:t.clone(),color:n.lightColor,intensity:n.lightIntensity,size:n.lightSize,enabled:n.directLightEnabled},gi:{enabled:n.indirectLightEnabled,intensity:n.giIntensity,skyColor:n.skyColor,skyIntensity:n.skyIntensity},ao:{enabled:n.ambientLightEnabled,distance:n.ambientDistance,intensity:n.aoIntensity,exponent:n.aoExponent,samples:n.aoSamples},timeoutProtection:{safeMode:n.safeMode}};let u;try{u=await new d2(this.renderer,c).bake(this.scene,{onFrame:m=>{var b;const g=this.bakeGroups[m.groupIndex];g&&g.composite.refresh(),(m.bounceSamples%30===0||m.done)&&this.diag.snap(`bake RAF samples=${m.bounceSamples}/${m.targetSamples} done=${m.done}`),(b=this.onProgress)==null||b.call(this,m)}})}finally{o&&this.scene.remove(o)}this.bakeResult=u,this.bakeGroups=[],this.meshToGroup.clear();for(let p=0;p<u.groups.length;p++){const m=u.groups[p],g=j0(this.renderer,{direct:m.lightmapper.textures.direct,indirect:m.lightmapper.textures.indirect,ao:m.aoMapper.texture},m.resolution,{directIntensity:n.directIntensity,giIntensity:n.giIntensity,aoEnabled:n.ambientLightEnabled,aoIntensity:n.aoIntensity,aoExponent:n.aoExponent}),b={atlasIdx:p,meshes:[...m.meshes],positionTexture:m.textures.position,normalTexture:m.textures.normal,atlasDispose:()=>g.dispose(),lightmapper:m.lightmapper,aoMapper:m.aoMapper,composite:g,refinement:null};this.bakeGroups.push(b);for(const w of b.meshes)this.meshToGroup.set(w,b)}this.matTexDispose=()=>u.dispose(),this.diag.snap("after baker.bake() return, before applyRenderMode"),this.firstPostBakeRender=!0}tick(){if(!this.bakeGroups.length)return null;let e=!0,t=1/0;const n=[];for(const s of this.bakeGroups){const r=s.lightmapper.render(),o=s.aoMapper.render();(!r.done||!o.done)&&(e=!1);const l=Math.min(r.samples,o.samples);l<t&&(t=l),n.push(l)}if(Number.isFinite(t)||(t=0),!e)for(const s of this.bakeGroups)s.composite.refresh();return{active:!e,allDone:e,minSamples:t,perAtlasSamples:n}}refreshAllComposites(e){for(const t of this.bakeGroups)t.composite.refresh(e)}async runAOOnly(e){if(!this.bakeGroups.length||!this.bakeResult)return;await this.bakeResult.rebakeAO(e);const t=this.bakeResult.groups;for(let n=0;n<this.bakeGroups.length;n++){const s=this.bakeGroups[n],r=t[n];!r||(s.aoMapper=r.aoMapper,s.composite.refresh({aoTex:r.aoMapper.texture}))}}async runRefinement(e,t,n){var s;if(!!this.bakeGroups.length)for(let r=0;r<this.bakeGroups.length;r++){const o=this.bakeGroups[r];(s=o.refinement)==null||s.dispose(),o.refinement=await Zh(this.renderer,o.composite.texture,o.positionTexture,t,e,l=>n(r,l))}}clearRefinement(){var e;for(const t of this.bakeGroups)(e=t.refinement)==null||e.dispose(),t.refinement=null}}const sg={type:"change"},Cu={type:"start"},rg={type:"end"},ll=new Kr,og=new di,fP=Math.cos(70*e0.DEG2RAD);class mP extends Hs{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Zs.ROTATE,MIDDLE:Zs.DOLLY,RIGHT:Zs.PAN},this.touches={ONE:Qs.ROTATE,TWO:Qs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return l.phi},this.getAzimuthalAngle=function(){return l.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(V){V.addEventListener("keydown",He),this._domElementKeyEvents=V},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",He),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(sg),n.update(),r=s.NONE},this.update=function(){const V=new D,pe=new qt().setFromUnitVectors(e.up,new D(0,1,0)),ye=pe.clone().invert(),De=new D,O=new qt,oe=new D,le=2*Math.PI;return function(Oe=null){const it=n.object.position;V.copy(it).sub(n.target),V.applyQuaternion(pe),l.setFromVector3(V),n.autoRotate&&r===s.NONE&&B(E(Oe)),n.enableDamping?(l.theta+=c.theta*n.dampingFactor,l.phi+=c.phi*n.dampingFactor):(l.theta+=c.theta,l.phi+=c.phi);let nt=n.minAzimuthAngle,ht=n.maxAzimuthAngle;isFinite(nt)&&isFinite(ht)&&(nt<-Math.PI?nt+=le:nt>Math.PI&&(nt-=le),ht<-Math.PI?ht+=le:ht>Math.PI&&(ht-=le),nt<=ht?l.theta=Math.max(nt,Math.min(ht,l.theta)):l.theta=l.theta>(nt+ht)/2?Math.max(nt,l.theta):Math.min(ht,l.theta)),l.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,l.phi)),l.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(d,n.dampingFactor):n.target.add(d),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&P||n.object.isOrthographicCamera?l.radius=ie(l.radius):l.radius=ie(l.radius*u),V.setFromSpherical(l),V.applyQuaternion(ye),it.copy(n.target).add(V),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,d.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),d.set(0,0,0));let Ht=!1;if(n.zoomToCursor&&P){let at=null;if(n.object.isPerspectiveCamera){const Ot=V.length();at=ie(Ot*u);const un=Ot-at;n.object.position.addScaledVector(S,un),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const Ot=new D(C.x,C.y,0);Ot.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/u)),n.object.updateProjectionMatrix(),Ht=!0;const un=new D(C.x,C.y,0);un.unproject(n.object),n.object.position.sub(un).add(Ot),n.object.updateMatrixWorld(),at=V.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;at!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(at).add(n.object.position):(ll.origin.copy(n.object.position),ll.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(ll.direction))<fP?e.lookAt(n.target):(og.setFromNormalAndCoplanarPoint(n.object.up,n.target),ll.intersectPlane(og,n.target))))}else n.object.isOrthographicCamera&&(Ht=u!==1,Ht&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/u)),n.object.updateProjectionMatrix()));return u=1,P=!1,Ht||De.distanceToSquared(n.object.position)>o||8*(1-O.dot(n.object.quaternion))>o||oe.distanceToSquared(n.target)>0?(n.dispatchEvent(sg),De.copy(n.object.position),O.copy(n.object.quaternion),oe.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",rt),n.domElement.removeEventListener("pointerdown",k),n.domElement.removeEventListener("pointercancel",Z),n.domElement.removeEventListener("wheel",ce),n.domElement.removeEventListener("pointermove",L),n.domElement.removeEventListener("pointerup",Z),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",He),n._domElementKeyEvents=null)};const n=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=s.NONE;const o=1e-6,l=new um,c=new um;let u=1;const d=new D,p=new Le,m=new Le,g=new Le,b=new Le,w=new Le,x=new Le,v=new Le,M=new Le,y=new Le,S=new D,C=new Le;let P=!1;const T=[],I={};let F=!1;function E(V){return V!==null?2*Math.PI/60*n.autoRotateSpeed*V:2*Math.PI/60/60*n.autoRotateSpeed}function R(V){const pe=Math.abs(V*.01);return Math.pow(.95,n.zoomSpeed*pe)}function B(V){c.theta-=V}function W(V){c.phi-=V}const U=function(){const V=new D;return function(ye,De){V.setFromMatrixColumn(De,0),V.multiplyScalar(-ye),d.add(V)}}(),H=function(){const V=new D;return function(ye,De){n.screenSpacePanning===!0?V.setFromMatrixColumn(De,1):(V.setFromMatrixColumn(De,0),V.crossVectors(n.object.up,V)),V.multiplyScalar(ye),d.add(V)}}(),G=function(){const V=new D;return function(ye,De){const O=n.domElement;if(n.object.isPerspectiveCamera){const oe=n.object.position;V.copy(oe).sub(n.target);let le=V.length();le*=Math.tan(n.object.fov/2*Math.PI/180),U(2*ye*le/O.clientHeight,n.object.matrix),H(2*De*le/O.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(U(ye*(n.object.right-n.object.left)/n.object.zoom/O.clientWidth,n.object.matrix),H(De*(n.object.top-n.object.bottom)/n.object.zoom/O.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function X(V){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?u/=V:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Q(V){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?u*=V:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Y(V,pe){if(!n.zoomToCursor)return;P=!0;const ye=n.domElement.getBoundingClientRect(),De=V-ye.left,O=pe-ye.top,oe=ye.width,le=ye.height;C.x=De/oe*2-1,C.y=-(O/le)*2+1,S.set(C.x,C.y,1).unproject(n.object).sub(n.object.position).normalize()}function ie(V){return Math.max(n.minDistance,Math.min(n.maxDistance,V))}function ne(V){p.set(V.clientX,V.clientY)}function me(V){Y(V.clientX,V.clientX),v.set(V.clientX,V.clientY)}function he(V){b.set(V.clientX,V.clientY)}function $(V){m.set(V.clientX,V.clientY),g.subVectors(m,p).multiplyScalar(n.rotateSpeed);const pe=n.domElement;B(2*Math.PI*g.x/pe.clientHeight),W(2*Math.PI*g.y/pe.clientHeight),p.copy(m),n.update()}function se(V){M.set(V.clientX,V.clientY),y.subVectors(M,v),y.y>0?X(R(y.y)):y.y<0&&Q(R(y.y)),v.copy(M),n.update()}function xe(V){w.set(V.clientX,V.clientY),x.subVectors(w,b).multiplyScalar(n.panSpeed),G(x.x,x.y),b.copy(w),n.update()}function we(V){Y(V.clientX,V.clientY),V.deltaY<0?Q(R(V.deltaY)):V.deltaY>0&&X(R(V.deltaY)),n.update()}function Ae(V){let pe=!1;switch(V.code){case n.keys.UP:V.ctrlKey||V.metaKey||V.shiftKey?W(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):G(0,n.keyPanSpeed),pe=!0;break;case n.keys.BOTTOM:V.ctrlKey||V.metaKey||V.shiftKey?W(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):G(0,-n.keyPanSpeed),pe=!0;break;case n.keys.LEFT:V.ctrlKey||V.metaKey||V.shiftKey?B(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):G(n.keyPanSpeed,0),pe=!0;break;case n.keys.RIGHT:V.ctrlKey||V.metaKey||V.shiftKey?B(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):G(-n.keyPanSpeed,0),pe=!0;break}pe&&(V.preventDefault(),n.update())}function _e(V){if(T.length===1)p.set(V.pageX,V.pageY);else{const pe=Me(V),ye=.5*(V.pageX+pe.x),De=.5*(V.pageY+pe.y);p.set(ye,De)}}function ke(V){if(T.length===1)b.set(V.pageX,V.pageY);else{const pe=Me(V),ye=.5*(V.pageX+pe.x),De=.5*(V.pageY+pe.y);b.set(ye,De)}}function Ue(V){const pe=Me(V),ye=V.pageX-pe.x,De=V.pageY-pe.y,O=Math.sqrt(ye*ye+De*De);v.set(0,O)}function j(V){n.enableZoom&&Ue(V),n.enablePan&&ke(V)}function Ct(V){n.enableZoom&&Ue(V),n.enableRotate&&_e(V)}function Pe(V){if(T.length==1)m.set(V.pageX,V.pageY);else{const ye=Me(V),De=.5*(V.pageX+ye.x),O=.5*(V.pageY+ye.y);m.set(De,O)}g.subVectors(m,p).multiplyScalar(n.rotateSpeed);const pe=n.domElement;B(2*Math.PI*g.x/pe.clientHeight),W(2*Math.PI*g.y/pe.clientHeight),p.copy(m)}function Ve(V){if(T.length===1)w.set(V.pageX,V.pageY);else{const pe=Me(V),ye=.5*(V.pageX+pe.x),De=.5*(V.pageY+pe.y);w.set(ye,De)}x.subVectors(w,b).multiplyScalar(n.panSpeed),G(x.x,x.y),b.copy(w)}function Ce(V){const pe=Me(V),ye=V.pageX-pe.x,De=V.pageY-pe.y,O=Math.sqrt(ye*ye+De*De);M.set(0,O),y.set(0,Math.pow(M.y/v.y,n.zoomSpeed)),X(y.y),v.copy(M);const oe=(V.pageX+pe.x)*.5,le=(V.pageY+pe.y)*.5;Y(oe,le)}function ut(V){n.enableZoom&&Ce(V),n.enablePan&&Ve(V)}function ze(V){n.enableZoom&&Ce(V),n.enableRotate&&Pe(V)}function k(V){n.enabled!==!1&&(T.length===0&&(n.domElement.setPointerCapture(V.pointerId),n.domElement.addEventListener("pointermove",L),n.domElement.addEventListener("pointerup",Z)),et(V),V.pointerType==="touch"?Xe(V):ue(V))}function L(V){n.enabled!==!1&&(V.pointerType==="touch"?ae(V):re(V))}function Z(V){switch($e(V),T.length){case 0:n.domElement.releasePointerCapture(V.pointerId),n.domElement.removeEventListener("pointermove",L),n.domElement.removeEventListener("pointerup",Z),n.dispatchEvent(rg),r=s.NONE;break;case 1:const pe=T[0],ye=I[pe];Xe({pointerId:pe,pageX:ye.x,pageY:ye.y});break}}function ue(V){let pe;switch(V.button){case 0:pe=n.mouseButtons.LEFT;break;case 1:pe=n.mouseButtons.MIDDLE;break;case 2:pe=n.mouseButtons.RIGHT;break;default:pe=-1}switch(pe){case Zs.DOLLY:if(n.enableZoom===!1)return;me(V),r=s.DOLLY;break;case Zs.ROTATE:if(V.ctrlKey||V.metaKey||V.shiftKey){if(n.enablePan===!1)return;he(V),r=s.PAN}else{if(n.enableRotate===!1)return;ne(V),r=s.ROTATE}break;case Zs.PAN:if(V.ctrlKey||V.metaKey||V.shiftKey){if(n.enableRotate===!1)return;ne(V),r=s.ROTATE}else{if(n.enablePan===!1)return;he(V),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(Cu)}function re(V){switch(r){case s.ROTATE:if(n.enableRotate===!1)return;$(V);break;case s.DOLLY:if(n.enableZoom===!1)return;se(V);break;case s.PAN:if(n.enablePan===!1)return;xe(V);break}}function ce(V){n.enabled===!1||n.enableZoom===!1||r!==s.NONE||(V.preventDefault(),n.dispatchEvent(Cu),we(Re(V)),n.dispatchEvent(rg))}function Re(V){const pe=V.deltaMode,ye={clientX:V.clientX,clientY:V.clientY,deltaY:V.deltaY};switch(pe){case 1:ye.deltaY*=16;break;case 2:ye.deltaY*=100;break}return V.ctrlKey&&!F&&(ye.deltaY*=10),ye}function be(V){V.key==="Control"&&(F=!0,n.domElement.getRootNode().addEventListener("keyup",Ee,{passive:!0,capture:!0}))}function Ee(V){V.key==="Control"&&(F=!1,n.domElement.getRootNode().removeEventListener("keyup",Ee,{passive:!0,capture:!0}))}function He(V){n.enabled===!1||n.enablePan===!1||Ae(V)}function Xe(V){switch(Ie(V),T.length){case 1:switch(n.touches.ONE){case Qs.ROTATE:if(n.enableRotate===!1)return;_e(V),r=s.TOUCH_ROTATE;break;case Qs.PAN:if(n.enablePan===!1)return;ke(V),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(n.touches.TWO){case Qs.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;j(V),r=s.TOUCH_DOLLY_PAN;break;case Qs.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Ct(V),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(Cu)}function ae(V){switch(Ie(V),r){case s.TOUCH_ROTATE:if(n.enableRotate===!1)return;Pe(V),n.update();break;case s.TOUCH_PAN:if(n.enablePan===!1)return;Ve(V),n.update();break;case s.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;ut(V),n.update();break;case s.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ze(V),n.update();break;default:r=s.NONE}}function rt(V){n.enabled!==!1&&V.preventDefault()}function et(V){T.push(V.pointerId)}function $e(V){delete I[V.pointerId];for(let pe=0;pe<T.length;pe++)if(T[pe]==V.pointerId){T.splice(pe,1);return}}function Ie(V){let pe=I[V.pointerId];pe===void 0&&(pe=new Le,I[V.pointerId]=pe),pe.set(V.pageX,V.pageY)}function Me(V){const pe=V.pointerId===T[0]?T[1]:T[0];return I[pe]}n.domElement.addEventListener("contextmenu",rt),n.domElement.addEventListener("pointerdown",k),n.domElement.addEventListener("pointercancel",Z),n.domElement.addEventListener("wheel",ce,{passive:!1}),n.domElement.getRootNode().addEventListener("keydown",be,{passive:!0,capture:!0}),this.update()}}const Ms=new T0,vn=new D,is=new D,Ft=new qt,ag={X:new D(1,0,0),Y:new D(0,1,0),Z:new D(0,0,1)},Pu={type:"change"},lg={type:"mouseDown"},cg={type:"mouseUp",mode:null},ug={type:"objectChange"};class gP extends vt{constructor(e,t){super(),t===void 0&&(console.warn('THREE.TransformControls: The second parameter "domElement" is now mandatory.'),t=document),this.isTransformControls=!0,this.visible=!1,this.domElement=t,this.domElement.style.touchAction="none";const n=new wP;this._gizmo=n,this.add(n);const s=new MP;this._plane=s,this.add(s);const r=this;function o(M,y){let S=y;Object.defineProperty(r,M,{get:function(){return S!==void 0?S:y},set:function(C){S!==C&&(S=C,s[M]=C,n[M]=C,r.dispatchEvent({type:M+"-changed",value:C}),r.dispatchEvent(Pu))}}),r[M]=y,s[M]=y,n[M]=y}o("camera",e),o("object",void 0),o("enabled",!0),o("axis",null),o("mode","translate"),o("translationSnap",null),o("rotationSnap",null),o("scaleSnap",null),o("space","world"),o("size",1),o("dragging",!1),o("showX",!0),o("showY",!0),o("showZ",!0);const l=new D,c=new D,u=new qt,d=new qt,p=new D,m=new qt,g=new D,b=new D,w=new D,x=0,v=new D;o("worldPosition",l),o("worldPositionStart",c),o("worldQuaternion",u),o("worldQuaternionStart",d),o("cameraPosition",p),o("cameraQuaternion",m),o("pointStart",g),o("pointEnd",b),o("rotationAxis",w),o("rotationAngle",x),o("eye",v),this._offset=new D,this._startNorm=new D,this._endNorm=new D,this._cameraScale=new D,this._parentPosition=new D,this._parentQuaternion=new qt,this._parentQuaternionInv=new qt,this._parentScale=new D,this._worldScaleStart=new D,this._worldQuaternionInv=new qt,this._worldScale=new D,this._positionStart=new D,this._quaternionStart=new qt,this._scaleStart=new D,this._getPointer=vP.bind(this),this._onPointerDown=xP.bind(this),this._onPointerHover=_P.bind(this),this._onPointerMove=bP.bind(this),this._onPointerUp=yP.bind(this),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointermove",this._onPointerHover),this.domElement.addEventListener("pointerup",this._onPointerUp)}updateMatrixWorld(){this.object!==void 0&&(this.object.updateMatrixWorld(),this.object.parent===null?console.error("TransformControls: The attached 3D object must be a part of the scene graph."):this.object.parent.matrixWorld.decompose(this._parentPosition,this._parentQuaternion,this._parentScale),this.object.matrixWorld.decompose(this.worldPosition,this.worldQuaternion,this._worldScale),this._parentQuaternionInv.copy(this._parentQuaternion).invert(),this._worldQuaternionInv.copy(this.worldQuaternion).invert()),this.camera.updateMatrixWorld(),this.camera.matrixWorld.decompose(this.cameraPosition,this.cameraQuaternion,this._cameraScale),this.camera.isOrthographicCamera?this.camera.getWorldDirection(this.eye).negate():this.eye.copy(this.cameraPosition).sub(this.worldPosition).normalize(),super.updateMatrixWorld(this)}pointerHover(e){if(this.object===void 0||this.dragging===!0)return;Ms.setFromCamera(e,this.camera);const t=Ru(this._gizmo.picker[this.mode],Ms);t?this.axis=t.object.name:this.axis=null}pointerDown(e){if(!(this.object===void 0||this.dragging===!0||e.button!==0)&&this.axis!==null){Ms.setFromCamera(e,this.camera);const t=Ru(this._plane,Ms,!0);t&&(this.object.updateMatrixWorld(),this.object.parent.updateMatrixWorld(),this._positionStart.copy(this.object.position),this._quaternionStart.copy(this.object.quaternion),this._scaleStart.copy(this.object.scale),this.object.matrixWorld.decompose(this.worldPositionStart,this.worldQuaternionStart,this._worldScaleStart),this.pointStart.copy(t.point).sub(this.worldPositionStart)),this.dragging=!0,lg.mode=this.mode,this.dispatchEvent(lg)}}pointerMove(e){const t=this.axis,n=this.mode,s=this.object;let r=this.space;if(n==="scale"?r="local":(t==="E"||t==="XYZE"||t==="XYZ")&&(r="world"),s===void 0||t===null||this.dragging===!1||e.button!==-1)return;Ms.setFromCamera(e,this.camera);const o=Ru(this._plane,Ms,!0);if(!!o){if(this.pointEnd.copy(o.point).sub(this.worldPositionStart),n==="translate")this._offset.copy(this.pointEnd).sub(this.pointStart),r==="local"&&t!=="XYZ"&&this._offset.applyQuaternion(this._worldQuaternionInv),t.indexOf("X")===-1&&(this._offset.x=0),t.indexOf("Y")===-1&&(this._offset.y=0),t.indexOf("Z")===-1&&(this._offset.z=0),r==="local"&&t!=="XYZ"?this._offset.applyQuaternion(this._quaternionStart).divide(this._parentScale):this._offset.applyQuaternion(this._parentQuaternionInv).divide(this._parentScale),s.position.copy(this._offset).add(this._positionStart),this.translationSnap&&(r==="local"&&(s.position.applyQuaternion(Ft.copy(this._quaternionStart).invert()),t.search("X")!==-1&&(s.position.x=Math.round(s.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(s.position.y=Math.round(s.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(s.position.z=Math.round(s.position.z/this.translationSnap)*this.translationSnap),s.position.applyQuaternion(this._quaternionStart)),r==="world"&&(s.parent&&s.position.add(vn.setFromMatrixPosition(s.parent.matrixWorld)),t.search("X")!==-1&&(s.position.x=Math.round(s.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(s.position.y=Math.round(s.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(s.position.z=Math.round(s.position.z/this.translationSnap)*this.translationSnap),s.parent&&s.position.sub(vn.setFromMatrixPosition(s.parent.matrixWorld))));else if(n==="scale"){if(t.search("XYZ")!==-1){let l=this.pointEnd.length()/this.pointStart.length();this.pointEnd.dot(this.pointStart)<0&&(l*=-1),is.set(l,l,l)}else vn.copy(this.pointStart),is.copy(this.pointEnd),vn.applyQuaternion(this._worldQuaternionInv),is.applyQuaternion(this._worldQuaternionInv),is.divide(vn),t.search("X")===-1&&(is.x=1),t.search("Y")===-1&&(is.y=1),t.search("Z")===-1&&(is.z=1);s.scale.copy(this._scaleStart).multiply(is),this.scaleSnap&&(t.search("X")!==-1&&(s.scale.x=Math.round(s.scale.x/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Y")!==-1&&(s.scale.y=Math.round(s.scale.y/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Z")!==-1&&(s.scale.z=Math.round(s.scale.z/this.scaleSnap)*this.scaleSnap||this.scaleSnap))}else if(n==="rotate"){this._offset.copy(this.pointEnd).sub(this.pointStart);const l=20/this.worldPosition.distanceTo(vn.setFromMatrixPosition(this.camera.matrixWorld));let c=!1;t==="XYZE"?(this.rotationAxis.copy(this._offset).cross(this.eye).normalize(),this.rotationAngle=this._offset.dot(vn.copy(this.rotationAxis).cross(this.eye))*l):(t==="X"||t==="Y"||t==="Z")&&(this.rotationAxis.copy(ag[t]),vn.copy(ag[t]),r==="local"&&vn.applyQuaternion(this.worldQuaternion),vn.cross(this.eye),vn.length()===0?c=!0:this.rotationAngle=this._offset.dot(vn.normalize())*l),(t==="E"||c)&&(this.rotationAxis.copy(this.eye),this.rotationAngle=this.pointEnd.angleTo(this.pointStart),this._startNorm.copy(this.pointStart).normalize(),this._endNorm.copy(this.pointEnd).normalize(),this.rotationAngle*=this._endNorm.cross(this._startNorm).dot(this.eye)<0?1:-1),this.rotationSnap&&(this.rotationAngle=Math.round(this.rotationAngle/this.rotationSnap)*this.rotationSnap),r==="local"&&t!=="E"&&t!=="XYZE"?(s.quaternion.copy(this._quaternionStart),s.quaternion.multiply(Ft.setFromAxisAngle(this.rotationAxis,this.rotationAngle)).normalize()):(this.rotationAxis.applyQuaternion(this._parentQuaternionInv),s.quaternion.copy(Ft.setFromAxisAngle(this.rotationAxis,this.rotationAngle)),s.quaternion.multiply(this._quaternionStart).normalize())}this.dispatchEvent(Pu),this.dispatchEvent(ug)}}pointerUp(e){e.button===0&&(this.dragging&&this.axis!==null&&(cg.mode=this.mode,this.dispatchEvent(cg)),this.dragging=!1,this.axis=null)}dispose(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerHover),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.traverse(function(e){e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()})}attach(e){return this.object=e,this.visible=!0,this}detach(){return this.object=void 0,this.visible=!1,this.axis=null,this}reset(){!this.enabled||this.dragging&&(this.object.position.copy(this._positionStart),this.object.quaternion.copy(this._quaternionStart),this.object.scale.copy(this._scaleStart),this.dispatchEvent(Pu),this.dispatchEvent(ug),this.pointStart.copy(this.pointEnd))}getRaycaster(){return Ms}getMode(){return this.mode}setMode(e){this.mode=e}setTranslationSnap(e){this.translationSnap=e}setRotationSnap(e){this.rotationSnap=e}setScaleSnap(e){this.scaleSnap=e}setSize(e){this.size=e}setSpace(e){this.space=e}}function vP(i){if(this.domElement.ownerDocument.pointerLockElement)return{x:0,y:0,button:i.button};{const e=this.domElement.getBoundingClientRect();return{x:(i.clientX-e.left)/e.width*2-1,y:-(i.clientY-e.top)/e.height*2+1,button:i.button}}}function _P(i){if(!!this.enabled)switch(i.pointerType){case"mouse":case"pen":this.pointerHover(this._getPointer(i));break}}function xP(i){!this.enabled||(document.pointerLockElement||this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.pointerHover(this._getPointer(i)),this.pointerDown(this._getPointer(i)))}function bP(i){!this.enabled||this.pointerMove(this._getPointer(i))}function yP(i){!this.enabled||(this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.pointerUp(this._getPointer(i)))}function Ru(i,e,t){const n=e.intersectObject(i,!0);for(let s=0;s<n.length;s++)if(n[s].object.visible||t)return n[s];return!1}const cl=new ia,St=new D(0,1,0),hg=new D(0,0,0),dg=new je,ul=new qt,wl=new qt,hi=new D,pg=new je,Bo=new D(1,0,0),Ts=new D(0,1,0),Vo=new D(0,0,1),hl=new D,No=new D,Uo=new D;class wP extends vt{constructor(){super(),this.isTransformControlsGizmo=!0,this.type="TransformControlsGizmo";const e=new fi({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),t=new Oh({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),n=e.clone();n.opacity=.15;const s=t.clone();s.opacity=.5;const r=e.clone();r.color.setHex(16711680);const o=e.clone();o.color.setHex(65280);const l=e.clone();l.color.setHex(255);const c=e.clone();c.color.setHex(16711680),c.opacity=.5;const u=e.clone();u.color.setHex(65280),u.opacity=.5;const d=e.clone();d.color.setHex(255),d.opacity=.5;const p=e.clone();p.opacity=.25;const m=e.clone();m.color.setHex(16776960),m.opacity=.25,e.clone().color.setHex(16776960);const b=e.clone();b.color.setHex(7895160);const w=new gn(0,.04,.1,12);w.translate(0,.05,0);const x=new Et(.08,.08,.08);x.translate(0,.04,0);const v=new cn;v.setAttribute("position",new At([0,0,0,1,0,0],3));const M=new gn(.0075,.0075,.5,3);M.translate(0,.25,0);function y(H,G){const X=new Ps(H,.0075,3,64,G*Math.PI*2);return X.rotateY(Math.PI/2),X.rotateX(Math.PI/2),X}function S(){const H=new cn;return H.setAttribute("position",new At([0,0,0,1,1,1],3)),H}const C={X:[[new fe(w,r),[.5,0,0],[0,0,-Math.PI/2]],[new fe(w,r),[-.5,0,0],[0,0,Math.PI/2]],[new fe(M,r),[0,0,0],[0,0,-Math.PI/2]]],Y:[[new fe(w,o),[0,.5,0]],[new fe(w,o),[0,-.5,0],[Math.PI,0,0]],[new fe(M,o)]],Z:[[new fe(w,l),[0,0,.5],[Math.PI/2,0,0]],[new fe(w,l),[0,0,-.5],[-Math.PI/2,0,0]],[new fe(M,l),null,[Math.PI/2,0,0]]],XYZ:[[new fe(new Ir(.1,0),p.clone()),[0,0,0]]],XY:[[new fe(new Et(.15,.15,.01),d.clone()),[.15,.15,0]]],YZ:[[new fe(new Et(.15,.15,.01),c.clone()),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new fe(new Et(.15,.15,.01),u.clone()),[.15,0,.15],[-Math.PI/2,0,0]]]},P={X:[[new fe(new gn(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new fe(new gn(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new fe(new gn(.2,0,.6,4),n),[0,.3,0]],[new fe(new gn(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new fe(new gn(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new fe(new gn(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XYZ:[[new fe(new Ir(.2,0),n)]],XY:[[new fe(new Et(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new fe(new Et(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new fe(new Et(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]]},T={START:[[new fe(new Ir(.01,2),s),null,null,null,"helper"]],END:[[new fe(new Ir(.01,2),s),null,null,null,"helper"]],DELTA:[[new ii(S(),s),null,null,null,"helper"]],X:[[new ii(v,s.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new ii(v,s.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new ii(v,s.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]},I={XYZE:[[new fe(y(.5,1),b),null,[0,Math.PI/2,0]]],X:[[new fe(y(.5,.5),r)]],Y:[[new fe(y(.5,.5),o),null,[0,0,-Math.PI/2]]],Z:[[new fe(y(.5,.5),l),null,[0,Math.PI/2,0]]],E:[[new fe(y(.75,1),m),null,[0,Math.PI/2,0]]]},F={AXIS:[[new ii(v,s.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]]},E={XYZE:[[new fe(new Yl(.25,10,8),n)]],X:[[new fe(new Ps(.5,.1,4,24),n),[0,0,0],[0,-Math.PI/2,-Math.PI/2]]],Y:[[new fe(new Ps(.5,.1,4,24),n),[0,0,0],[Math.PI/2,0,0]]],Z:[[new fe(new Ps(.5,.1,4,24),n),[0,0,0],[0,0,-Math.PI/2]]],E:[[new fe(new Ps(.75,.1,2,24),n)]]},R={X:[[new fe(x,r),[.5,0,0],[0,0,-Math.PI/2]],[new fe(M,r),[0,0,0],[0,0,-Math.PI/2]],[new fe(x,r),[-.5,0,0],[0,0,Math.PI/2]]],Y:[[new fe(x,o),[0,.5,0]],[new fe(M,o)],[new fe(x,o),[0,-.5,0],[0,0,Math.PI]]],Z:[[new fe(x,l),[0,0,.5],[Math.PI/2,0,0]],[new fe(M,l),[0,0,0],[Math.PI/2,0,0]],[new fe(x,l),[0,0,-.5],[-Math.PI/2,0,0]]],XY:[[new fe(new Et(.15,.15,.01),d),[.15,.15,0]]],YZ:[[new fe(new Et(.15,.15,.01),c),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new fe(new Et(.15,.15,.01),u),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new fe(new Et(.1,.1,.1),p.clone())]]},B={X:[[new fe(new gn(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new fe(new gn(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new fe(new gn(.2,0,.6,4),n),[0,.3,0]],[new fe(new gn(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new fe(new gn(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new fe(new gn(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XY:[[new fe(new Et(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new fe(new Et(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new fe(new Et(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new fe(new Et(.2,.2,.2),n),[0,0,0]]]},W={X:[[new ii(v,s.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new ii(v,s.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new ii(v,s.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]};function U(H){const G=new vt;for(const X in H)for(let Q=H[X].length;Q--;){const Y=H[X][Q][0].clone(),ie=H[X][Q][1],ne=H[X][Q][2],me=H[X][Q][3],he=H[X][Q][4];Y.name=X,Y.tag=he,ie&&Y.position.set(ie[0],ie[1],ie[2]),ne&&Y.rotation.set(ne[0],ne[1],ne[2]),me&&Y.scale.set(me[0],me[1],me[2]),Y.updateMatrix();const $=Y.geometry.clone();$.applyMatrix4(Y.matrix),Y.geometry=$,Y.renderOrder=1/0,Y.position.set(0,0,0),Y.rotation.set(0,0,0),Y.scale.set(1,1,1),G.add(Y)}return G}this.gizmo={},this.picker={},this.helper={},this.add(this.gizmo.translate=U(C)),this.add(this.gizmo.rotate=U(I)),this.add(this.gizmo.scale=U(R)),this.add(this.picker.translate=U(P)),this.add(this.picker.rotate=U(E)),this.add(this.picker.scale=U(B)),this.add(this.helper.translate=U(T)),this.add(this.helper.rotate=U(F)),this.add(this.helper.scale=U(W)),this.picker.translate.visible=!1,this.picker.rotate.visible=!1,this.picker.scale.visible=!1}updateMatrixWorld(e){const n=(this.mode==="scale"?"local":this.space)==="local"?this.worldQuaternion:wl;this.gizmo.translate.visible=this.mode==="translate",this.gizmo.rotate.visible=this.mode==="rotate",this.gizmo.scale.visible=this.mode==="scale",this.helper.translate.visible=this.mode==="translate",this.helper.rotate.visible=this.mode==="rotate",this.helper.scale.visible=this.mode==="scale";let s=[];s=s.concat(this.picker[this.mode].children),s=s.concat(this.gizmo[this.mode].children),s=s.concat(this.helper[this.mode].children);for(let r=0;r<s.length;r++){const o=s[r];o.visible=!0,o.rotation.set(0,0,0),o.position.copy(this.worldPosition);let l;if(this.camera.isOrthographicCamera?l=(this.camera.top-this.camera.bottom)/this.camera.zoom:l=this.worldPosition.distanceTo(this.cameraPosition)*Math.min(1.9*Math.tan(Math.PI*this.camera.fov/360)/this.camera.zoom,7),o.scale.set(1,1,1).multiplyScalar(l*this.size/4),o.tag==="helper"){o.visible=!1,o.name==="AXIS"?(o.visible=!!this.axis,this.axis==="X"&&(Ft.setFromEuler(cl.set(0,0,0)),o.quaternion.copy(n).multiply(Ft),Math.abs(St.copy(Bo).applyQuaternion(n).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Y"&&(Ft.setFromEuler(cl.set(0,0,Math.PI/2)),o.quaternion.copy(n).multiply(Ft),Math.abs(St.copy(Ts).applyQuaternion(n).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Z"&&(Ft.setFromEuler(cl.set(0,Math.PI/2,0)),o.quaternion.copy(n).multiply(Ft),Math.abs(St.copy(Vo).applyQuaternion(n).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="XYZE"&&(Ft.setFromEuler(cl.set(0,Math.PI/2,0)),St.copy(this.rotationAxis),o.quaternion.setFromRotationMatrix(dg.lookAt(hg,St,Ts)),o.quaternion.multiply(Ft),o.visible=this.dragging),this.axis==="E"&&(o.visible=!1)):o.name==="START"?(o.position.copy(this.worldPositionStart),o.visible=this.dragging):o.name==="END"?(o.position.copy(this.worldPosition),o.visible=this.dragging):o.name==="DELTA"?(o.position.copy(this.worldPositionStart),o.quaternion.copy(this.worldQuaternionStart),vn.set(1e-10,1e-10,1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1),vn.applyQuaternion(this.worldQuaternionStart.clone().invert()),o.scale.copy(vn),o.visible=this.dragging):(o.quaternion.copy(n),this.dragging?o.position.copy(this.worldPositionStart):o.position.copy(this.worldPosition),this.axis&&(o.visible=this.axis.search(o.name)!==-1));continue}o.quaternion.copy(n),this.mode==="translate"||this.mode==="scale"?(o.name==="X"&&Math.abs(St.copy(Bo).applyQuaternion(n).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Y"&&Math.abs(St.copy(Ts).applyQuaternion(n).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Z"&&Math.abs(St.copy(Vo).applyQuaternion(n).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XY"&&Math.abs(St.copy(Vo).applyQuaternion(n).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="YZ"&&Math.abs(St.copy(Bo).applyQuaternion(n).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XZ"&&Math.abs(St.copy(Ts).applyQuaternion(n).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1)):this.mode==="rotate"&&(ul.copy(n),St.copy(this.eye).applyQuaternion(Ft.copy(n).invert()),o.name.search("E")!==-1&&o.quaternion.setFromRotationMatrix(dg.lookAt(this.eye,hg,Ts)),o.name==="X"&&(Ft.setFromAxisAngle(Bo,Math.atan2(-St.y,St.z)),Ft.multiplyQuaternions(ul,Ft),o.quaternion.copy(Ft)),o.name==="Y"&&(Ft.setFromAxisAngle(Ts,Math.atan2(St.x,St.z)),Ft.multiplyQuaternions(ul,Ft),o.quaternion.copy(Ft)),o.name==="Z"&&(Ft.setFromAxisAngle(Vo,Math.atan2(St.y,St.x)),Ft.multiplyQuaternions(ul,Ft),o.quaternion.copy(Ft))),o.visible=o.visible&&(o.name.indexOf("X")===-1||this.showX),o.visible=o.visible&&(o.name.indexOf("Y")===-1||this.showY),o.visible=o.visible&&(o.name.indexOf("Z")===-1||this.showZ),o.visible=o.visible&&(o.name.indexOf("E")===-1||this.showX&&this.showY&&this.showZ),o.material._color=o.material._color||o.material.color.clone(),o.material._opacity=o.material._opacity||o.material.opacity,o.material.color.copy(o.material._color),o.material.opacity=o.material._opacity,this.enabled&&this.axis&&(o.name===this.axis||this.axis.split("").some(function(c){return o.name===c}))&&(o.material.color.setHex(16776960),o.material.opacity=1)}super.updateMatrixWorld(e)}}class MP extends fe{constructor(){super(new Bn(1e5,1e5,2,2),new fi({visible:!1,wireframe:!0,side:wn,transparent:!0,opacity:.1,toneMapped:!1})),this.isTransformControlsPlane=!0,this.type="TransformControlsPlane"}updateMatrixWorld(e){let t=this.space;switch(this.position.copy(this.worldPosition),this.mode==="scale"&&(t="local"),hl.copy(Bo).applyQuaternion(t==="local"?this.worldQuaternion:wl),No.copy(Ts).applyQuaternion(t==="local"?this.worldQuaternion:wl),Uo.copy(Vo).applyQuaternion(t==="local"?this.worldQuaternion:wl),St.copy(No),this.mode){case"translate":case"scale":switch(this.axis){case"X":St.copy(this.eye).cross(hl),hi.copy(hl).cross(St);break;case"Y":St.copy(this.eye).cross(No),hi.copy(No).cross(St);break;case"Z":St.copy(this.eye).cross(Uo),hi.copy(Uo).cross(St);break;case"XY":hi.copy(Uo);break;case"YZ":hi.copy(hl);break;case"XZ":St.copy(Uo),hi.copy(No);break;case"XYZ":case"E":hi.set(0,0,0);break}break;case"rotate":default:hi.set(0,0,0)}hi.length()===0?this.quaternion.copy(this.cameraQuaternion):(pg.lookAt(vn.set(0,0,0),hi,St),this.quaternion.setFromRotationMatrix(pg)),super.updateMatrixWorld(e)}}class EP extends eo{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new PP(t)}),this.register(function(t){return new OP(t)}),this.register(function(t){return new BP(t)}),this.register(function(t){return new VP(t)}),this.register(function(t){return new LP(t)}),this.register(function(t){return new IP(t)}),this.register(function(t){return new DP(t)}),this.register(function(t){return new NP(t)}),this.register(function(t){return new CP(t)}),this.register(function(t){return new UP(t)}),this.register(function(t){return new RP(t)}),this.register(function(t){return new FP(t)}),this.register(function(t){return new kP(t)}),this.register(function(t){return new TP(t)}),this.register(function(t){return new zP(t)}),this.register(function(t){return new HP(t)})}load(e,t,n,s){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const u=$o.extractUrlBase(e);o=$o.resolveURL(u,this.path)}else o=$o.extractUrlBase(e);this.manager.itemStart(e);const l=function(u){s?s(u):console.error(u),r.manager.itemError(e),r.manager.itemEnd(e)},c=new E0(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(u){try{r.parse(u,o,function(d){t(d),r.manager.itemEnd(e)},l)}catch(d){l(d)}},n,l)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r;const o={},l={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===cv){try{o[lt.KHR_BINARY_GLTF]=new GP(e)}catch(p){s&&s(p);return}r=JSON.parse(o[lt.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const u=new nR(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});u.fileLoader.setRequestHeader(this.requestHeader);for(let d=0;d<this.pluginCallbacks.length;d++){const p=this.pluginCallbacks[d](u);p.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),l[p.name]=p,o[p.name]=!0}if(r.extensionsUsed)for(let d=0;d<r.extensionsUsed.length;++d){const p=r.extensionsUsed[d],m=r.extensionsRequired||[];switch(p){case lt.KHR_MATERIALS_UNLIT:o[p]=new AP;break;case lt.KHR_DRACO_MESH_COMPRESSION:o[p]=new WP(r,this.dracoLoader);break;case lt.KHR_TEXTURE_TRANSFORM:o[p]=new XP;break;case lt.KHR_MESH_QUANTIZATION:o[p]=new jP;break;default:m.indexOf(p)>=0&&l[p]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+p+'".')}}u.setExtensions(o),u.setPlugins(l),u.parse(n,s)}parseAsync(e,t){const n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}}function SP(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const lt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class TP{constructor(e){this.parser=e,this.name=lt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let s=t.cache.get(n);if(s)return s;const r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let u;const d=new We(16777215);c.color!==void 0&&d.setRGB(c.color[0],c.color[1],c.color[2],ln);const p=c.range!==void 0?c.range:0;switch(c.type){case"directional":u=new Gh(d),u.target.position.set(0,0,-1),u.add(u.target);break;case"point":u=new Hh(d),u.distance=p;break;case"spot":u=new S0(d),u.distance=p,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,u.angle=c.spot.outerConeAngle,u.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,u.target.position.set(0,0,-1),u.add(u.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return u.position.set(0,0,0),u.decay=2,as(u,c),c.intensity!==void 0&&(u.intensity=c.intensity),u.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(u),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],l=(r.extensions&&r.extensions[this.name]||{}).light;return l===void 0?null:this._loadLight(l).then(function(c){return n._getNodeRef(t.cache,l,c)})}}class AP{constructor(){this.name=lt.KHR_MATERIALS_UNLIT}getMaterialType(){return fi}extendParams(e,t,n){const s=[];e.color=new We(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],ln),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,Vt))}return Promise.all(s)}}class CP{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class PP{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Bi}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const l=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Le(l,l)}return Promise.all(r)}}class RP{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Bi}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class LP{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Bi}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new We(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){const l=o.sheenColorFactor;t.sheenColor.setRGB(l[0],l[1],l[2],ln)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Vt)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class IP{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Bi}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class DP{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Bi}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const l=o.attenuationColor||[1,1,1];return t.attenuationColor=new We().setRGB(l[0],l[1],l[2],ln),Promise.all(r)}}class NP{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Bi}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class UP{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Bi}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const l=o.specularColorFactor||[1,1,1];return t.specularColor=new We().setRGB(l[0],l[1],l[2],ln),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Vt)),Promise.all(r)}}class kP{constructor(e){this.parser=e,this.name=lt.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Bi}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class FP{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Bi}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class OP{constructor(e){this.parser=e,this.name=lt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class BP{constructor(e){this.parser=e,this.name=lt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],l=s.images[o.source];let c=n.textureLoader;if(l.uri){const u=n.options.manager.getHandler(l.uri);u!==null&&(c=u)}return this.detectSupport().then(function(u){if(u)return n.loadTextureImage(e,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class VP{constructor(e){this.parser=e,this.name=lt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],l=s.images[o.source];let c=n.textureLoader;if(l.uri){const u=n.options.manager.getHandler(l.uri);u!==null&&(c=u)}return this.detectSupport().then(function(u){if(u)return n.loadTextureImage(e,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class zP{constructor(e){this.name=lt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(l){const c=s.byteOffset||0,u=s.byteLength||0,d=s.count,p=s.byteStride,m=new Uint8Array(l,c,u);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(d,p,m,s.mode,s.filter).then(function(g){return g.buffer}):o.ready.then(function(){const g=new ArrayBuffer(d*p);return o.decodeGltfBuffer(new Uint8Array(g),d,p,m,s.mode,s.filter),g})})}else return null}}class HP{constructor(e){this.name=lt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=t.meshes[n.mesh];for(const u of s.primitives)if(u.mode!==Wn.TRIANGLES&&u.mode!==Wn.TRIANGLE_STRIP&&u.mode!==Wn.TRIANGLE_FAN&&u.mode!==void 0)return null;const o=n.extensions[this.name].attributes,l=[],c={};for(const u in o)l.push(this.parser.getDependency("accessor",o[u]).then(d=>(c[u]=d,c[u])));return l.length<1?null:(l.push(this.parser.createNodeMesh(e)),Promise.all(l).then(u=>{const d=u.pop(),p=d.isGroup?d.children:[d],m=u[0].count,g=[];for(const b of p){const w=new je,x=new D,v=new qt,M=new D(1,1,1),y=new QT(b.geometry,b.material,m);for(let S=0;S<m;S++)c.TRANSLATION&&x.fromBufferAttribute(c.TRANSLATION,S),c.ROTATION&&v.fromBufferAttribute(c.ROTATION,S),c.SCALE&&M.fromBufferAttribute(c.SCALE,S),y.setMatrixAt(S,w.compose(x,v,M));for(const S in c)if(S==="_COLOR_0"){const C=c[S];y.instanceColor=new Ku(C.array,C.itemSize,C.normalized)}else S!=="TRANSLATION"&&S!=="ROTATION"&&S!=="SCALE"&&b.geometry.setAttribute(S,c[S]);vt.prototype.copy.call(y,b),this.parser.assignFinalMaterial(y),g.push(y)}return d.isGroup?(d.clear(),d.add(...g),d):g[0]}))}}const cv="glTF",ko=12,fg={JSON:1313821514,BIN:5130562};class GP{constructor(e){this.name=lt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,ko),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==cv)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-ko,r=new DataView(e,ko);let o=0;for(;o<s;){const l=r.getUint32(o,!0);o+=4;const c=r.getUint32(o,!0);if(o+=4,c===fg.JSON){const u=new Uint8Array(e,ko+o,l);this.content=n.decode(u)}else if(c===fg.BIN){const u=ko+o;this.body=e.slice(u,u+l)}o+=l}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class WP{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=lt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,l={},c={},u={};for(const d in o){const p=vh[d]||d.toLowerCase();l[p]=o[d]}for(const d in e.attributes){const p=vh[d]||d.toLowerCase();if(o[d]!==void 0){const m=n.accessors[e.attributes[d]],g=kr[m.componentType];u[p]=g.name,c[p]=m.normalized===!0}}return t.getDependency("bufferView",r).then(function(d){return new Promise(function(p,m){s.decodeDracoFile(d,function(g){for(const b in g.attributes){const w=g.attributes[b],x=c[b];x!==void 0&&(w.normalized=x)}p(g)},l,u,ln,m)})})}}class XP{constructor(){this.name=lt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class jP{constructor(){this.name=lt.KHR_MESH_QUANTIZATION}}class uv extends sa{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,l=this.valueSize,c=l*2,u=l*3,d=s-t,p=(n-t)/d,m=p*p,g=m*p,b=e*u,w=b-u,x=-2*g+3*m,v=g-m,M=1-x,y=v-m+p;for(let S=0;S!==l;S++){const C=o[w+S+l],P=o[w+S+c]*d,T=o[b+S+l],I=o[b+S]*d;r[S]=M*C+y*P+x*T+v*I}return r}}const $P=new qt;class qP extends uv{interpolate_(e,t,n,s){const r=super.interpolate_(e,t,n,s);return $P.fromArray(r).normalize().toArray(r),r}}const Wn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},kr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},mg={9728:mt,9729:bt,9984:Gu,9985:ml,9986:Pr,9987:ki},gg={33071:_n,33648:Dl,10497:Vr},Lu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},vh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ss={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},YP={CUBICSPLINE:void 0,LINEAR:Hr,STEP:Qo},Iu={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function KP(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Kl({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:oi})),i.DefaultMaterial}function Es(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function as(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function ZP(i,e,t){let n=!1,s=!1,r=!1;for(let u=0,d=e.length;u<d;u++){const p=e[u];if(p.POSITION!==void 0&&(n=!0),p.NORMAL!==void 0&&(s=!0),p.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);const o=[],l=[],c=[];for(let u=0,d=e.length;u<d;u++){const p=e[u];if(n){const m=p.POSITION!==void 0?t.getDependency("accessor",p.POSITION):i.attributes.position;o.push(m)}if(s){const m=p.NORMAL!==void 0?t.getDependency("accessor",p.NORMAL):i.attributes.normal;l.push(m)}if(r){const m=p.COLOR_0!==void 0?t.getDependency("accessor",p.COLOR_0):i.attributes.color;c.push(m)}}return Promise.all([Promise.all(o),Promise.all(l),Promise.all(c)]).then(function(u){const d=u[0],p=u[1],m=u[2];return n&&(i.morphAttributes.position=d),s&&(i.morphAttributes.normal=p),r&&(i.morphAttributes.color=m),i.morphTargetsRelative=!0,i})}function QP(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function JP(i){let e;const t=i.extensions&&i.extensions[lt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Du(t.attributes):e=i.indices+":"+Du(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Du(i.targets[n]);return e}function Du(i){let e="";const t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function _h(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function eR(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const tR=new je;class nR{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new SP,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=!1,r=-1;typeof navigator!="undefined"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,s=navigator.userAgent.indexOf("Firefox")>-1,r=s?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap=="undefined"||n||s&&r<98?this.textureLoader=new m1(this.options.manager):this.textureLoader=new b1(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new E0(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const l={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return Es(r,l,s),as(l,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(l)})).then(function(){e(l)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const o=t[s].joints;for(let l=0,c=o.length;l<c;l++)e[o[l]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const s=n.clone(),r=(o,l)=>{const c=this.associations.get(o);c!=null&&this.associations.set(l,c);for(const[u,d]of o.children.entries())r(d,l.children[u])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const s=e(t[n]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[lt.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,o){n.load($o.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){const t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const o=Lu[s.type],l=kr[s.componentType],c=s.normalized===!0,u=new l(s.count*o);return Promise.resolve(new Dt(u,o,c))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){const l=o[0],c=Lu[s.type],u=kr[s.componentType],d=u.BYTES_PER_ELEMENT,p=d*c,m=s.byteOffset||0,g=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,b=s.normalized===!0;let w,x;if(g&&g!==p){const v=Math.floor(m/g),M="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+v+":"+s.count;let y=t.cache.get(M);y||(w=new u(l,v*g,s.count*g/d),y=new $T(w,g/d),t.cache.add(M,y)),x=new kh(y,c,m%g/d,b)}else l===null?w=new u(s.count*c):w=new u(l,m,s.count*c),x=new Dt(w,c,b);if(s.sparse!==void 0){const v=Lu.SCALAR,M=kr[s.sparse.indices.componentType],y=s.sparse.indices.byteOffset||0,S=s.sparse.values.byteOffset||0,C=new M(o[1],y,s.sparse.count*v),P=new u(o[2],S,s.sparse.count*c);l!==null&&(x=new Dt(x.array.slice(),x.itemSize,x.normalized));for(let T=0,I=C.length;T<I;T++){const F=C[T];if(x.setX(F,P[T*c]),c>=2&&x.setY(F,P[T*c+1]),c>=3&&x.setZ(F,P[T*c+2]),c>=4&&x.setW(F,P[T*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return x})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let l=this.textureLoader;if(o.uri){const c=n.manager.getHandler(o.uri);c!==null&&(l=c)}return this.loadTextureImage(e,r,l)}loadTextureImage(e,t,n){const s=this,r=this.json,o=r.textures[e],l=r.images[t],c=(l.uri||l.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const u=this.loadImageSource(t,n).then(function(d){d.flipY=!1,d.name=o.name||l.name||"",d.name===""&&typeof l.uri=="string"&&l.uri.startsWith("data:image/")===!1&&(d.name=l.uri);const m=(r.samplers||{})[o.sampler]||{};return d.magFilter=mg[m.magFilter]||bt,d.minFilter=mg[m.minFilter]||ki,d.wrapS=gg[m.wrapS]||Vr,d.wrapT=gg[m.wrapT]||Vr,s.associations.set(d,{textures:e}),d}).catch(function(){return null});return this.textureCache[c]=u,u}loadImageSource(e,t){const n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(p=>p.clone());const o=s.images[e],l=self.URL||self.webkitURL;let c=o.uri||"",u=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(p){u=!0;const m=new Blob([p],{type:o.mimeType});return c=l.createObjectURL(m),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const d=Promise.resolve(c).then(function(p){return new Promise(function(m,g){let b=m;t.isImageBitmapLoader===!0&&(b=function(w){const x=new Zt(w);x.needsUpdate=!0,m(x)}),t.load($o.resolveURL(p,r.path),b,void 0,g)})}).then(function(p){return u===!0&&l.revokeObjectURL(c),p.userData.mimeType=o.mimeType||eR(o.uri),p}).catch(function(p){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),p});return this.sourceCache[e]=d,d}assignTexture(e,t,n,s){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[lt.KHR_TEXTURE_TRANSFORM]){const l=n.extensions!==void 0?n.extensions[lt.KHR_TEXTURE_TRANSFORM]:void 0;if(l){const c=r.associations.get(o);o=r.extensions[lt.KHR_TEXTURE_TRANSFORM].extendTexture(o,l),r.associations.set(o,c)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const l="PointsMaterial:"+n.uuid;let c=this.cache.get(l);c||(c=new y0,gi.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(l,c)),n=c}else if(e.isLine){const l="LineBasicMaterial:"+n.uuid;let c=this.cache.get(l);c||(c=new Oh,gi.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(l,c)),n=c}if(s||r||o){let l="ClonedMaterial:"+n.uuid+":";s&&(l+="derivative-tangents:"),r&&(l+="vertex-colors:"),o&&(l+="flat-shading:");let c=this.cache.get(l);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(l,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Kl}loadMaterial(e){const t=this,n=this.json,s=this.extensions,r=n.materials[e];let o;const l={},c=r.extensions||{},u=[];if(c[lt.KHR_MATERIALS_UNLIT]){const p=s[lt.KHR_MATERIALS_UNLIT];o=p.getMaterialType(),u.push(p.extendParams(l,r,t))}else{const p=r.pbrMetallicRoughness||{};if(l.color=new We(1,1,1),l.opacity=1,Array.isArray(p.baseColorFactor)){const m=p.baseColorFactor;l.color.setRGB(m[0],m[1],m[2],ln),l.opacity=m[3]}p.baseColorTexture!==void 0&&u.push(t.assignTexture(l,"map",p.baseColorTexture,Vt)),l.metalness=p.metallicFactor!==void 0?p.metallicFactor:1,l.roughness=p.roughnessFactor!==void 0?p.roughnessFactor:1,p.metallicRoughnessTexture!==void 0&&(u.push(t.assignTexture(l,"metalnessMap",p.metallicRoughnessTexture)),u.push(t.assignTexture(l,"roughnessMap",p.metallicRoughnessTexture))),o=this._invokeOne(function(m){return m.getMaterialType&&m.getMaterialType(e)}),u.push(Promise.all(this._invokeAll(function(m){return m.extendMaterialParams&&m.extendMaterialParams(e,l)})))}r.doubleSided===!0&&(l.side=wn);const d=r.alphaMode||Iu.OPAQUE;if(d===Iu.BLEND?(l.transparent=!0,l.depthWrite=!1):(l.transparent=!1,d===Iu.MASK&&(l.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==fi&&(u.push(t.assignTexture(l,"normalMap",r.normalTexture)),l.normalScale=new Le(1,1),r.normalTexture.scale!==void 0)){const p=r.normalTexture.scale;l.normalScale.set(p,p)}if(r.occlusionTexture!==void 0&&o!==fi&&(u.push(t.assignTexture(l,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(l.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==fi){const p=r.emissiveFactor;l.emissive=new We().setRGB(p[0],p[1],p[2],ln)}return r.emissiveTexture!==void 0&&o!==fi&&u.push(t.assignTexture(l,"emissiveMap",r.emissiveTexture,Vt)),Promise.all(u).then(function(){const p=new o(l);return r.name&&(p.name=r.name),as(p,r),t.associations.set(p,{materials:e}),r.extensions&&Es(s,p,r),p})}createUniqueName(e){const t=xt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,s=this.primitiveCache;function r(l){return n[lt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(l,t).then(function(c){return vg(c,l,t)})}const o=[];for(let l=0,c=e.length;l<c;l++){const u=e[l],d=JP(u),p=s[d];if(p)o.push(p.promise);else{let m;u.extensions&&u.extensions[lt.KHR_DRACO_MESH_COMPRESSION]?m=r(u):m=vg(new cn,u,t),s[d]={primitive:u,promise:m},o.push(m)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,l=[];for(let c=0,u=o.length;c<u;c++){const d=o[c].material===void 0?KP(this.cache):this.getDependency("material",o[c].material);l.push(d)}return l.push(t.loadGeometries(o)),Promise.all(l).then(function(c){const u=c.slice(0,c.length-1),d=c[c.length-1],p=[];for(let g=0,b=d.length;g<b;g++){const w=d[g],x=o[g];let v;const M=u[g];if(x.mode===Wn.TRIANGLES||x.mode===Wn.TRIANGLE_STRIP||x.mode===Wn.TRIANGLE_FAN||x.mode===void 0)v=r.isSkinnedMesh===!0?new YT(w,M):new fe(w,M),v.isSkinnedMesh===!0&&v.normalizeSkinWeights(),x.mode===Wn.TRIANGLE_STRIP?v.geometry=Dm(v.geometry,Kg):x.mode===Wn.TRIANGLE_FAN&&(v.geometry=Dm(v.geometry,Xu));else if(x.mode===Wn.LINES)v=new JT(w,M);else if(x.mode===Wn.LINE_STRIP)v=new ii(w,M);else if(x.mode===Wn.LINE_LOOP)v=new e1(w,M);else if(x.mode===Wn.POINTS)v=new t1(w,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+x.mode);Object.keys(v.geometry.morphAttributes).length>0&&QP(v,r),v.name=t.createUniqueName(r.name||"mesh_"+e),as(v,r),x.extensions&&Es(s,v,x),t.assignFinalMaterial(v),p.push(v)}for(let g=0,b=p.length;g<b;g++)t.associations.set(p[g],{meshes:e,primitives:g});if(p.length===1)return r.extensions&&Es(s,p[0],r),p[0];const m=new Ls;r.extensions&&Es(s,m,r),t.associations.set(m,{meshes:e});for(let g=0,b=p.length;g<b;g++)m.add(p[g]);return m})}loadCamera(e){let t;const n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new yn(e0.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new ci(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),as(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){const r=s.pop(),o=s,l=[],c=[];for(let u=0,d=o.length;u<d;u++){const p=o[u];if(p){l.push(p);const m=new je;r!==null&&m.fromArray(r.array,u*16),c.push(m)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[u])}return new Fh(l,c)})}loadAnimation(e){const t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],l=[],c=[],u=[],d=[];for(let p=0,m=s.channels.length;p<m;p++){const g=s.channels[p],b=s.samplers[g.sampler],w=g.target,x=w.node,v=s.parameters!==void 0?s.parameters[b.input]:b.input,M=s.parameters!==void 0?s.parameters[b.output]:b.output;w.node!==void 0&&(o.push(this.getDependency("node",x)),l.push(this.getDependency("accessor",v)),c.push(this.getDependency("accessor",M)),u.push(b),d.push(w))}return Promise.all([Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(u),Promise.all(d)]).then(function(p){const m=p[0],g=p[1],b=p[2],w=p[3],x=p[4],v=[];for(let M=0,y=m.length;M<y;M++){const S=m[M],C=g[M],P=b[M],T=w[M],I=x[M];if(S===void 0)continue;S.updateMatrix&&S.updateMatrix();const F=n._createAnimationTracks(S,C,P,T,I);if(F)for(let E=0;E<F.length;E++)v.push(F[E])}return new l1(r,void 0,v)})}createNodeMesh(e){const t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(l){if(!!l.isMesh)for(let c=0,u=s.weights.length;c<u;c++)l.morphTargetInfluences[c]=s.weights[c]}),o})}loadNode(e){const t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],l=s.children||[];for(let u=0,d=l.length;u<d;u++)o.push(n.getDependency("node",l[u]));const c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),c]).then(function(u){const d=u[0],p=u[1],m=u[2];m!==null&&d.traverse(function(g){!g.isSkinnedMesh||g.bind(m,tR)});for(let g=0,b=p.length;g<b;g++)d.add(p[g]);return d})}_loadNodeShallow(e){const t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",l=[],c=s._invokeOne(function(u){return u.createNodeMesh&&u.createNodeMesh(e)});return c&&l.push(c),r.camera!==void 0&&l.push(s.getDependency("camera",r.camera).then(function(u){return s._getNodeRef(s.cameraCache,r.camera,u)})),s._invokeAll(function(u){return u.createNodeAttachment&&u.createNodeAttachment(e)}).forEach(function(u){l.push(u)}),this.nodeCache[e]=Promise.all(l).then(function(u){let d;if(r.isBone===!0?d=new b0:u.length>1?d=new Ls:u.length===1?d=u[0]:d=new vt,d!==u[0])for(let p=0,m=u.length;p<m;p++)d.add(u[p]);if(r.name&&(d.userData.name=r.name,d.name=o),as(d,r),r.extensions&&Es(n,d,r),r.matrix!==void 0){const p=new je;p.fromArray(r.matrix),d.applyMatrix4(p)}else r.translation!==void 0&&d.position.fromArray(r.translation),r.rotation!==void 0&&d.quaternion.fromArray(r.rotation),r.scale!==void 0&&d.scale.fromArray(r.scale);return s.associations.has(d)||s.associations.set(d,{}),s.associations.get(d).nodes=e,d}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],s=this,r=new Ls;n.name&&(r.name=s.createUniqueName(n.name)),as(r,n),n.extensions&&Es(t,r,n);const o=n.nodes||[],l=[];for(let c=0,u=o.length;c<u;c++)l.push(s.getDependency("node",o[c]));return Promise.all(l).then(function(c){for(let d=0,p=c.length;d<p;d++)r.add(c[d]);const u=d=>{const p=new Map;for(const[m,g]of s.associations)(m instanceof gi||m instanceof Zt)&&p.set(m,g);return d.traverse(m=>{const g=s.associations.get(m);g!=null&&p.set(m,g)}),p};return s.associations=u(r),r})}_createAnimationTracks(e,t,n,s,r){const o=[],l=e.name?e.name:e.uuid,c=[];ss[r.path]===ss.weights?e.traverse(function(m){m.morphTargetInfluences&&c.push(m.name?m.name:m.uuid)}):c.push(l);let u;switch(ss[r.path]){case ss.weights:u=Xr;break;case ss.rotation:u=Bs;break;case ss.position:case ss.scale:u=jr;break;default:switch(n.itemSize){case 1:u=Xr;break;case 2:case 3:default:u=jr;break}break}const d=s.interpolation!==void 0?YP[s.interpolation]:Hr,p=this._getArrayFromAccessor(n);for(let m=0,g=c.length;m<g;m++){const b=new u(c[m]+"."+ss[r.path],t.array,p,d);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(b),o.push(b)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=_h(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const s=this instanceof Bs?qP:uv;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function iR(i,e,t){const n=e.attributes,s=new Wt;if(n.POSITION!==void 0){const l=t.json.accessors[n.POSITION],c=l.min,u=l.max;if(c!==void 0&&u!==void 0){if(s.set(new D(c[0],c[1],c[2]),new D(u[0],u[1],u[2])),l.normalized){const d=_h(kr[l.componentType]);s.min.multiplyScalar(d),s.max.multiplyScalar(d)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const l=new D,c=new D;for(let u=0,d=r.length;u<d;u++){const p=r[u];if(p.POSITION!==void 0){const m=t.json.accessors[p.POSITION],g=m.min,b=m.max;if(g!==void 0&&b!==void 0){if(c.setX(Math.max(Math.abs(g[0]),Math.abs(b[0]))),c.setY(Math.max(Math.abs(g[1]),Math.abs(b[1]))),c.setZ(Math.max(Math.abs(g[2]),Math.abs(b[2]))),m.normalized){const w=_h(kr[m.componentType]);c.multiplyScalar(w)}l.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(l)}i.boundingBox=s;const o=new li;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function vg(i,e,t){const n=e.attributes,s=[];function r(o,l){return t.getDependency("accessor",o).then(function(c){i.setAttribute(l,c)})}for(const o in n){const l=vh[o]||o.toLowerCase();l in i.attributes||s.push(r(n[o],l))}if(e.indices!==void 0&&!i.index){const o=t.getDependency("accessor",e.indices).then(function(l){i.setIndex(l)});s.push(o)}return gt.workingColorSpace!==ln&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${gt.workingColorSpace}" not supported.`),as(i,e),iR(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?ZP(i,e.targets,t):i})}const Nn=10,Cr=Nn/2,xh="light:dummy";class sR{constructor(e){this.hooks=e,this.cornellRoot=null,this.meshes=[],this.raycaster=new T0,this.pointer=new Le,this.scene=new x0,this.scene.background=new We(657930),this.camera=new yn(45,window.innerWidth/window.innerHeight,.1,1e3),this.camera.position.set(0,5,18),this.camera.lookAt(0,5,0);const t=typeof window!="undefined"&&new URLSearchParams(window.location.search).get("test")==="1";this.renderer=new _0({antialias:!0,powerPreference:"low-power",failIfMajorPerformanceCaveat:!1,preserveDrawingBuffer:t}),this.renderer.outputColorSpace=Vt,this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(window.devicePixelRatio),document.body.appendChild(this.renderer.domElement),this.diag=new ev(this.renderer),this.diag.banner(),this.diag.snap("after renderer construction"),this.renderer.domElement.addEventListener("webglcontextlost",r=>{var o,l,c;console.error("[baker:debug] CONTEXT LOST",{meshes:this.meshes.length,firstMeshLM:(c=(l=(o=this.meshes[0])==null?void 0:o.material)==null?void 0:l.lightMap)==null?void 0:c.uuid}),this.diag.contextLossInfo(),r.preventDefault()}),this.renderer.domElement.addEventListener("webglcontextrestored",()=>{console.error("[baker:debug] CONTEXT RESTORED \u2014 RT data lost, lightmap textures are now empty",{meshes:this.meshes.length})}),this.controls=new mP(this.camera,this.renderer.domElement),this.controls.target.set(0,5,0),this.controls.update(),this.lightDummy=new vt,this.lightDummy.position.set(0,Nn-.001,0),this.scene.add(this.lightDummy),this.lightMarker=new fe(new Bn(2.5,2.5),new fi({color:16777215,side:wn})),this.lightMarker.rotation.x=Math.PI/2,this.lightDummy.add(this.lightMarker),this.visualLight=new Hh(16777215,80,0,2),this.visualLight.userData.lightmapIgnore=!0,this.lightDummy.add(this.visualLight),this.lightTransformController=new gP(this.camera,this.renderer.domElement),this.lightTransformController.addEventListener("dragging-changed",r=>{var o,l;if(this.controls.enabled=!r.value,!r.value){const c=this.lightTransformController.object;c&&c!==this.lightDummy&&((l=(o=this.hooks).onStaleChange)==null||l.call(o))}}),this.lightTransformController.attach(this.lightDummy),this.scene.add(this.lightTransformController);let n=0,s=0;this.renderer.domElement.addEventListener("pointerdown",r=>{n=r.clientX,s=r.clientY}),this.renderer.domElement.addEventListener("pointerup",r=>{var l,c;if(r.button!==0||this.lightTransformController.dragging||Math.abs(r.clientX-n)>3||Math.abs(r.clientY-s)>3)return;const o=this.pickAt(r.clientX,r.clientY);(c=(l=this.hooks).onViewportPick)==null||c.call(l,o)})}pickAt(e,t){const n=this.renderer.domElement.getBoundingClientRect();this.pointer.x=(e-n.left)/n.width*2-1,this.pointer.y=-((t-n.top)/n.height)*2+1,this.raycaster.setFromCamera(this.pointer,this.camera);const s=this.raycaster.intersectObjects(this.meshes,!1);return s.length>0?s[0].object.uuid:null}lookupObject(e){var t;return e?e===xh?this.lightDummy:(t=this.meshes.find(n=>n.uuid===e))!=null?t:null:null}attachGizmoTo(e){e?(this.lightTransformController.attach(e),this.lightTransformController.visible=!0):(this.lightTransformController.detach(),this.lightTransformController.visible=!1)}setGizmoMode(e){this.lightTransformController.setMode(e)}buildSceneTree(){const e=[{id:xh,name:"Scene Light",kind:"light",visible:this.lightDummy.visible}];for(const t of this.meshes)e.push({id:t.uuid,name:t.name||`Mesh (${t.geometry.type.replace("Geometry","")})`,kind:"mesh",visible:t.visible});return e}setVisible(e,t){const n=this.lookupObject(e);n&&(n.visible=t)}mat(e,t=.95,n=0){const s=new Kl({color:e,roughness:t,metalness:n});return s._originalMap=null,s}addMesh(e){const t=e;return this.meshes.push(t),this.cornellRoot.add(t),t}buildWalls(){const t=this.mat(15790320),n=this.mat(14034728),s=this.mat(2924588),r=new fe(new Et(Nn,.2,Nn),t);r.name="Floor",r.position.set(0,-.2/2,0),this.addMesh(r);const o=new fe(new Et(Nn,.2,Nn),t.clone());o.name="Ceiling",o.material._originalMap=null,o.position.set(0,Nn+.2/2,0),this.addMesh(o);const l=new fe(new Et(Nn,Nn,.2),t.clone());l.name="Back Wall",l.material._originalMap=null,l.position.set(0,Cr,-Cr-.2/2),this.addMesh(l);const c=new fe(new Et(.2,Nn,Nn),n);c.name="Left Wall (Red)",c.position.set(-Cr-.2/2,Cr,0),this.addMesh(c);const u=new fe(new Et(.2,Nn,Nn),s);u.name="Right Wall (Green)",u.position.set(Cr+.2/2,Cr,0),this.addMesh(u)}buildClassicBlocks(){const e=this.mat(15263976),t=new fe(new Et(3,6,3),e);t.name="Tall Block",t.position.set(-1.8,3,-1.5),t.rotation.y=.29,this.addMesh(t);const n=new fe(new Et(3,3,3),e.clone());n.name="Short Block",n.material._originalMap=null,n.position.set(1.8,1.5,1.5),n.rotation.y=-.29,this.addMesh(n)}buildAdvancedExtras(){const e=new fe(new Yl(1,48,32),this.mat(16119285,.4,0));e.name="Sphere",e.position.set(2.4,1,3),this.addMesh(e);const t=new fe(new Vh(.55,.18,160,24),this.mat(16765286,.55,0));t.name="Torus Knot",t.position.set(0,1,2.8),t.rotation.x=Math.PI/2,this.addMesh(t);const n=new fe(new Et(1.2,1.2,1.2),this.mat(13072954,.8,0));n.name="Accent Block",n.position.set(-3.5,.6,2.8),n.rotation.y=.45,this.addMesh(n)}rebuildScene(e){this.hooks.disposeBake(),this.cornellRoot&&this.scene.remove(this.cornellRoot),this.cornellRoot=new vt,this.scene.add(this.cornellRoot),this.meshes=[],this.buildWalls(),this.buildClassicBlocks(),e==="advanced"&&this.buildAdvancedExtras(),this.hooks.installDummyLightmaps(this.meshes),this.hooks.onSceneChanged(this.meshes)}async importGLB(e){const t=await e.arrayBuffer(),n=new EP;let s;try{s=await new Promise((r,o)=>{n.parse(t,"",r,o)})}catch(r){console.error("[baker] GLB parse failed:",r);return}if(this.hooks.disposeBake(),this.cornellRoot&&this.scene.remove(this.cornellRoot),this.cornellRoot=new vt,this.scene.add(this.cornellRoot),this.cornellRoot.add(s.scene),this.meshes=[],s.scene.traverse(r=>{const o=r;if(!o.isMesh)return;const l=o.material;Array.isArray(l)||!l||!("lightMap"in l)||(o.geometry.index||(o.geometry=$0(o.geometry)),this.meshes.push(o))}),!this.meshes.length){console.warn("[baker] imported GLB has no bake-eligible meshes (need MeshStandard*)"),this.hooks.onSceneChanged(this.meshes);return}this.cornellRoot.updateMatrixWorld(!0),this.fitCameraAndLightToScene(),this.hooks.installDummyLightmaps(this.meshes),this.hooks.onSceneChanged(this.meshes)}fitCameraAndLightToScene(){const e=new Wt;for(const r of this.meshes)e.expandByObject(r);if(e.isEmpty())return;const t=e.getSize(new D),n=e.getCenter(new D),s=Math.max(t.x,t.y,t.z)||1;this.lightDummy.position.set(n.x,e.max.y+s*.1,n.z),this.camera.position.set(n.x,n.y,n.z+s*2.5),this.controls.target.copy(n),this.controls.update()}updateSize(){this.renderer.setSize(window.innerWidth,window.innerHeight),this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setPixelRatio(window.devicePixelRatio)}syncGizmo(e){this.lightTransformController.visible=e,this.lightTransformController.enabled=e}syncVisualLight(e,t){const n=new We(e).convertSRGBToLinear();this.visualLight.color.copy(n),this.visualLight.intensity=30*t}}const Is=[{id:"combined",label:"Combined",group:"output",showAlbedo:!0,getLightMap:i=>{var e,t;return(t=(e=i.group.refinement)==null?void 0:e.texture)!=null?t:i.group.composite.texture}},{id:"combinedPost",label:"Combined (Refined)",group:"output",showAlbedo:!0,getLightMap:i=>{var e,t;return(t=(e=i.group.refinement)==null?void 0:e.texture)!=null?t:i.group.composite.texture}},{id:"combinedRaw",label:"Combined (Raw)",group:"output",showAlbedo:!0,getLightMap:i=>i.group.composite.texture},{id:"direct",label:"Direct",group:"output",showAlbedo:!1,getLightMap:i=>i.group.lightmapper.textures.direct},{id:"indirect",label:"Indirect (GI)",group:"output",showAlbedo:!1,getLightMap:i=>i.group.lightmapper.textures.indirect},{id:"ao",label:"Ambient Occlusion",group:"output",showAlbedo:!1,getLightMap:i=>i.group.aoMapper.texture},{id:"lightmapRaw",label:"Lightmap (Raw)",group:"debug",showAlbedo:!1,getLightMap:i=>i.group.composite.texture},{id:"albedo",label:"Albedo",group:"debug",showAlbedo:!0,getLightMap:()=>null},{id:"positions",label:"World Position",group:"debug",showAlbedo:!1,getLightMap:i=>i.group.positionTexture},{id:"normals",label:"World Normal",group:"debug",showAlbedo:!1,getLightMap:i=>i.group.normalTexture},{id:"texelDensity",label:"Texel Density",group:"debug",showAlbedo:!1,getLightMap:()=>null}],rR=Object.fromEntries(Is.map(i=>[i.label,i.id])),oR={Linear:"linear",Nearest:"nearest"};class aR{constructor(e){this.deps=e,this.texelDensityMats=new Map,this.originalMaterials=new WeakMap}apply(){var c,u;const e=this.deps.getOptions(),t=this.deps.getMeshes();this.deps.getBakeGroups();const n=this.deps.getMeshToGroup(),s=this.deps.getVisualLight(),r=this.deps.getLightMarker(),o=(c=Is.find(d=>d.id===e.layer))!=null?c:Is[0];if(o.id==="texelDensity"){this.refreshTexelDensityMaterials();for(const d of t){this.originalMaterials.has(d)||this.originalMaterials.set(d,d.material);const p=this.texelDensityMats.get(d);p&&(d.material=p)}s.visible=!1;return}for(const d of t){const p=this.originalMaterials.get(d);p&&d.material!==p&&(d.material=p)}const l=this.deps.getDummyLightmap();for(const d of t){const p=d.material;p.map=o.showAlbedo&&(u=p._originalMap)!=null?u:null;const m=n.get(d),g=m?o.getLightMap({group:m}):null;g?(p.lightMap=g,p.lightMap.channel=2,p.lightMapIntensity=1):(p.lightMap=l,p.lightMapIntensity=0)}r.material.color=new We(16777215),s.visible=o.id==="albedo"}refreshTexelDensityMaterials(){var s,r,o;const e=this.deps.getOptions(),t=this.deps.getMeshes(),n=new Set(t);for(const l of this.texelDensityMats.keys())n.has(l)||((s=this.texelDensityMats.get(l))==null||s.dispose(),this.texelDensityMats.delete(l));for(const l of t){const c=(o=(r=e.perMesh[l.uuid])==null?void 0:r.scaleInLightmap)!=null?o:1,u=e.texelsPerMeter*c;let d=this.texelDensityMats.get(l);d?(d.setTexelsPerMeter(u),d.setLightmapSize(e.lightMapSize)):(d=new e2({texelsPerMeter:u,lightmapSize:e.lightMapSize}),this.texelDensityMats.set(l,d))}}dispose(){for(const e of this.texelDensityMats.values())e.dispose();this.texelDensityMats.clear()}}const lR={"Cornell Classic":"classic","Cornell Advanced":"advanced"},_g={Custom:null,Draft:{lightMapSize:256,casts:4,targetSamples:32},Preview:{lightMapSize:512,casts:5,targetSamples:96},Production:{lightMapSize:1024,casts:6,targetSamples:256},Final:{lightMapSize:2048,casts:8,targetSamples:512}},hv=class{constructor(){this.options={preset:"advanced",layer:"combined",quality:"Custom",lightMapSize:1024,casts:5,targetSamples:256,bounces:2,safeMode:!0,filterMode:"linear",directLightEnabled:!0,indirectLightEnabled:!0,ambientLightEnabled:!0,ambientDistance:.5,aoIntensity:1,aoExponent:1.5,aoSamples:5,texelsPerMeter:10,lightSize:2.9,lightIntensity:2,lightColor:"#ffffff",directIntensity:1.4,giIntensity:2.7,skyColor:"#ffffff",skyIntensity:0,pause:!1,showGizmo:!0,autoBake:!1,autoApplyRefinement:!1,dilationIterations:1,denoiseEnabled:!1,denoiseSigma:2.5,denoiseThreshold:.18,denoiseKSigma:1,secondaryLightEnabled:!1,secondaryDirX:-.5,secondaryDirY:-1,secondaryDirZ:-.5,secondaryIntensity:.8,secondaryColor:"#ffffcc",samples:0,spp:0,etaSec:0,refinementStatus:"idle",exportFormat:"png",perMesh:{},atlasViewerEnabled:!0,atlasViewerSize:256,atlasViewerCorner:"br",atlasViewerSRGB:!0},this.perMeshFolder=null,this.atlasViewer=(()=>{const m=new JC({size:256,corner:"br",sRGB:!0});return m.attachHeader(),m})(),this.looping=!1,this.bakeStartTime=0,this.bakeBatchHistory=[],this.externalHooks={},this.maybeBake=m=>{(m==null?void 0:m.last)!==!1&&(!this.options.autoBake||this.bake())};const i={onSceneChanged:()=>this.onSceneChanged(),installDummyLightmaps:m=>this.bakeController.installDummyLightmaps(m),disposeBake:()=>{var m,g;this.bakeController.disposeAllGroups(),(g=(m=this.bakeController).matTexDispose)==null||g.call(m),this.bakeController.matTexDispose=null},onStaleChange:()=>{var m,g;return(g=(m=this.externalHooks).onStaleChange)==null?void 0:g.call(m)},onViewportPick:m=>{var g,b;return(b=(g=this.externalHooks).onViewportPick)==null?void 0:b.call(g,m)}};this.sceneController=new sR(i),this.bakeController=new pP(this.sceneController.renderer,this.sceneController.scene),this.renderModeRunner=new aR({getMeshes:()=>this.sceneController.meshes,getBakeGroups:()=>this.bakeController.bakeGroups,getMeshToGroup:()=>this.bakeController.meshToGroup,getOptions:()=>({layer:this.options.layer,texelsPerMeter:this.options.texelsPerMeter,lightMapSize:this.options.lightMapSize,perMesh:this.options.perMesh}),getVisualLight:()=>this.sceneController.visualLight,getLightMarker:()=>this.sceneController.lightMarker,getDummyLightmap:()=>this.bakeController.getDummyLightmap()}),this.bakeController.onProgress=m=>this.onBakeFrame(m),this.pane=new gh.exports.Pane({title:"\u{1F506} Lightbaker"});const e=this.pane.addFolder({title:"View",expanded:!0});e.element.classList.add("tp-view"),e.addInput(this.options,"layer",{options:rR,label:"Layer"}).on("change",()=>this.renderModeRunner.apply()),e.addInput(this.options,"filterMode",{options:oR,label:"Filtering"}).on("change",()=>this.renderModeRunner.apply()),e.addInput(this.options,"showGizmo",{label:"Show Gizmo"}),e.addInput(this.options,"pause",{label:"Pause"});const t=this.pane.addFolder({title:"Bake Settings",expanded:!1});t.element.classList.add("tp-bake"),t.addInput(this.options,"quality",{options:Object.fromEntries(Object.keys(_g).map(m=>[m,m])),label:"Preset"}).on("change",m=>this.applyQualityPreset(m.value)),t.addInput(this.options,"lightMapSize",{min:128,max:2048,step:128,label:"Atlas Size"}).on("change",m=>{this.options.quality="Custom",this.pane.refresh(),this.maybeBake(m)}),t.addInput(this.options,"texelsPerMeter",{min:1,max:50,step:.5,label:"Density (px/m)"}).on("change",m=>{this.renderModeRunner.refreshTexelDensityMaterials(),this.maybeBake(m)}),t.addInput(this.options,"casts",{min:1,max:16,step:1,label:"Casts/Frame"}).on("change",m=>{this.options.quality="Custom",this.pane.refresh(),this.maybeBake(m)}),t.addInput(this.options,"targetSamples",{min:16,max:1024,step:16,label:"Target Frames"}).on("change",m=>{this.options.quality="Custom",this.pane.refresh(),this.maybeBake(m)}),t.addInput(this.options,"bounces",{min:1,max:4,step:1,label:"Bounces"}).on("change",m=>{this.options.quality="Custom",this.pane.refresh(),this.maybeBake(m)}),t.addInput(this.options,"autoBake",{label:"Auto-bake"}),t.addInput(this.options,"safeMode",{label:"Safe Mode (TDR)"}).on("change",m=>{this.options.quality="Custom",this.pane.refresh(),this.maybeBake(m)}),t.addButton({title:"Bake Now"}).on("click",()=>void this.bake());const n=this.pane.addFolder({title:"Lighting & GI",expanded:!1});n.element.classList.add("tp-light");const s=n.addFolder({title:"Direct Light"});s.addInput(this.options,"directLightEnabled",{label:"Enabled"}).on("change",this.maybeBake),s.addInput(this.options,"lightColor",{view:"color",label:"Color"}).on("change",this.maybeBake),s.addInput(this.options,"lightIntensity",{min:0,max:15,step:.1,label:"Bake Power"}).on("change",this.maybeBake),s.addInput(this.options,"lightSize",{min:.1,max:5,step:.1,label:"Source Size"}).on("change",this.maybeBake),s.addInput(this.options,"directIntensity",{min:0,max:4,step:.05,label:"View Multiplier"}).on("change",()=>this.bakeController.refreshAllComposites({directIntensity:this.options.directIntensity}));const r=n.addFolder({title:"Global Illumination"});r.addInput(this.options,"indirectLightEnabled",{label:"Enabled"}).on("change",this.maybeBake),r.addInput(this.options,"giIntensity",{min:0,max:4,step:.05,label:"Bounce Power"}).on("change",()=>this.bakeController.refreshAllComposites({giIntensity:this.options.giIntensity})),r.addInput(this.options,"skyColor",{view:"color",label:"Sky Color"}).on("change",this.maybeBake),r.addInput(this.options,"skyIntensity",{min:0,max:4,step:.05,label:"Sky Intensity"}).on("change",this.maybeBake);const o=n.addFolder({title:"Ambient Occlusion"});o.addInput(this.options,"ambientLightEnabled",{label:"Enabled"}).on("change",()=>this.bakeController.refreshAllComposites({aoEnabled:this.options.ambientLightEnabled})),o.addInput(this.options,"ambientDistance",{min:.05,max:2,step:.05,label:"Max Distance"}).on("change",()=>void this.rebakeAO()),o.addInput(this.options,"aoIntensity",{min:0,max:3,step:.05,label:"Intensity"}).on("change",()=>this.bakeController.refreshAllComposites({aoIntensity:this.options.aoIntensity})),o.addInput(this.options,"aoExponent",{min:.5,max:4,step:.1,label:"Exponent"}).on("change",()=>this.bakeController.refreshAllComposites({aoExponent:this.options.aoExponent})),o.addInput(this.options,"aoSamples",{min:0,max:32,step:1,label:"Samples"}).on("change",()=>void this.rebakeAO());const l=this.pane.addFolder({title:"Refinement",expanded:!1});l.element.classList.add("tp-post"),l.addInput(this.options,"autoApplyRefinement",{label:"Auto-apply"}),l.addInput(this.options,"dilationIterations",{min:0,max:8,step:1,label:"Dilate Iters"}),l.addInput(this.options,"denoiseEnabled",{label:"Denoise"}),l.addInput(this.options,"denoiseSigma",{min:.1,max:8,step:.1,label:"Spatial Sigma"}),l.addInput(this.options,"denoiseThreshold",{min:.01,max:1,step:.01,label:"Edge Thresh"}),l.addInput(this.options,"denoiseKSigma",{min:.5,max:3,step:.1,label:"Range Sigma"}),l.addButton({title:"Run Refinement"}).on("click",()=>void this.applyRefinement()),l.addButton({title:"Revert to Raw"}).on("click",()=>this.showUnrefined());const c=n.addFolder({title:"Secondary Light (Directional)"});c.addInput(this.options,"secondaryLightEnabled",{label:"Enabled"}).on("change",this.maybeBake),c.addInput(this.options,"secondaryDirX",{min:-1,max:1,step:.05,label:"Dir X"}).on("change",this.maybeBake),c.addInput(this.options,"secondaryDirY",{min:-1,max:1,step:.05,label:"Dir Y"}).on("change",this.maybeBake),c.addInput(this.options,"secondaryDirZ",{min:-1,max:1,step:.05,label:"Dir Z"}).on("change",this.maybeBake),c.addInput(this.options,"secondaryIntensity",{min:0,max:5,step:.1,label:"Intensity"}).on("change",this.maybeBake),c.addInput(this.options,"secondaryColor",{view:"color",label:"Color"}).on("change",this.maybeBake);const u=this.pane.addFolder({title:"Export",expanded:!1});u.element.classList.add("tp-export"),u.addInput(this.options,"exportFormat",{options:{"PNG (LDR preview)":"png","EXR (HDR linear)":"exr","Raw Float32 (.bin)":"bin"},label:"Format"}),u.addButton({title:"Export Final Lightmap"}).on("click",()=>void this.exportFinal()),u.addButton({title:"Export Current Layer"}).on("click",()=>void this.exportCurrent());const d=this.pane.addFolder({title:"Atlas Viewer",expanded:!1});d.element.classList.add("tp-viewer"),d.addInput(this.options,"atlasViewerEnabled",{label:"Enabled"}).on("change",m=>{this.atlasViewer.visible=m.value}),d.addInput(this.options,"atlasViewerSize",{min:128,max:768,step:32,label:"Size"}).on("change",m=>this.atlasViewer.setSize(m.value)),d.addInput(this.options,"atlasViewerCorner",{options:{"Top-Left":"tl","Top-Right":"tr","Bot-Left":"bl","Bot-Right":"br"},label:"Corner"}).on("change",m=>this.atlasViewer.setCorner(m.value)),d.addInput(this.options,"atlasViewerSRGB",{label:"sRGB Encode"}).on("change",m=>this.atlasViewer.setSRGB(m.value));const p=this.pane.addFolder({title:"Scene",expanded:!1});p.element.classList.add("tp-scene"),p.addInput(this.options,"preset",{options:lR,label:"Complexity"}).on("change",()=>this.rebuildScene()),p.addButton({title:"Import GLB..."}).on("click",()=>{this.glbFileInput.value="",this.glbFileInput.click()}),p.addButton({title:"Reset to Cornell"}).on("click",()=>this.rebuildScene()),p.addButton({title:"Export Scene as GLB"}).on("click",()=>void this.exportSceneGLB()),this.initUI(),this.rebuildScene()}onSceneChanged(){var e,t;const i=new Set(this.sceneController.meshes.map(n=>n.uuid));for(const n of Object.keys(this.options.perMesh))i.has(n)||delete this.options.perMesh[n];this.buildPerMeshUI(),(t=(e=this.externalHooks).onSceneChanged)==null||t.call(e)}buildPerMeshUI(){var t;(t=this.perMeshFolder)==null||t.dispose();const i=this.pane.addFolder({title:"Per-Mesh",expanded:!1});this.perMeshFolder=i;const e=this.sceneController.meshes;for(let n=0;n<e.length;n++){const s=e[n],r=s.uuid;this.options.perMesh[r]||(this.options.perMesh[r]={scaleInLightmap:1,exclude:!1});const o=this.options.perMesh[r],l=s.name||`Mesh ${n+1} (${s.geometry.type.replace("Geometry","")})`,c=i.addFolder({title:l,expanded:!1});c.addInput(o,"exclude",{label:"Exclude"}).on("change",this.maybeBake),c.addInput(o,"scaleInLightmap",{label:"Density \xD7",min:.25,max:4,step:.25}).on("change",u=>{this.renderModeRunner.refreshTexelDensityMaterials(),this.maybeBake(u)})}}initUI(){this.fpsElement=document.createElement("div"),this.fpsElement.style.cssText="position:absolute;top:10px;left:10px;color:#0f0;font-family:monospace;font-size:12px;line-height:1.4;pointer-events:none;z-index:100;padding:8px;background-color:rgba(0,0,0,0.5);border-radius:4px;",document.body.appendChild(this.fpsElement),this.progressContainer=document.createElement("div"),this.progressContainer.style.cssText="position:absolute;bottom:20px;left:20px;width:300px;background-color:rgba(0,0,0,0.7);padding:12px;border-radius:4px;font-family:monospace;font-size:11px;color:#fff;display:none;z-index:100;border:1px solid #444;",document.body.appendChild(this.progressContainer);const i=document.createElement("div");i.style.cssText="width:100%;height:4px;background-color:#222;margin-top:8px;border-radius:2px;overflow:hidden;",this.progressContainer.appendChild(i),this.progressBar=document.createElement("div"),this.progressBar.className="progress-pulse",this.progressBar.style.cssText="width:0%;height:100%;background-color:#0f0;",i.appendChild(this.progressBar),this.progressText=document.createElement("div"),this.progressText.style.cssText="margin-top:8px;white-space:pre;",this.progressContainer.appendChild(this.progressText),this.glbFileInput=document.createElement("input"),this.glbFileInput.type="file",this.glbFileInput.accept=".glb,.gltf",this.glbFileInput.style.display="none",this.glbFileInput.addEventListener("change",()=>{var t;const e=(t=this.glbFileInput.files)==null?void 0:t[0];e&&this.importGLB(e)}),document.body.appendChild(this.glbFileInput)}updateSize(){this.sceneController.updateSize()}async rebuildScene(){this.sceneController.rebuildScene(this.options.preset),this.options.autoBake&&await this.bake(),this.startLoop()}async importGLB(i){await this.sceneController.importGLB(i),this.options.perMesh={},this.buildPerMeshUI(),this.options.autoBake&&await this.bake(),this.startLoop()}async bake(){var i;!this.sceneController.meshes.length||(this.progressContainer.style.display="block",this.bakeStartTime=performance.now(),this.bakeBatchHistory=[],this.sceneController.syncVisualLight(this.options.lightColor,this.options.lightIntensity),await this.bakeController.runBake(this.sceneController.meshes,this.sceneController.lightDummy.position,this.options),this.options.refinementStatus="idle",this.options.samples=this.options.targetSamples,this.options.spp=this.options.targetSamples*this.options.casts,this.options.etaSec=0,this.options.pause=!1,this.progressBar.style.width="100%",this.pane.refresh(),console.info("[baker:debug] bake() returned, calling applyRenderMode",{groups:this.bakeController.bakeGroups.length,result:!!this.bakeController.bakeResult,meshes:this.sceneController.meshes.length,firstGroupComposite:(i=this.bakeController.bakeGroups[0])==null?void 0:i.composite.texture.uuid}),this.renderModeRunner.apply(),this.bakeController.diag.snap("after applyRenderMode (lightmaps mounted)"))}onBakeFrame(i){const e=i.targetSamples,t=Math.min(i.bounceSamples,i.aoSamples),n=i.totalGroups>0?(i.groupIndex+t/Math.max(1,e))/i.totalGroups:0;this.progressBar.style.width=`${Math.min(100,n*100)}%`;const s=(performance.now()-this.bakeStartTime)/1e3,r=t*this.options.casts;this.options.samples=t,this.options.spp=r;let o="";i.totalGroups>1&&(o=`
Atlas ${i.groupIndex+1}/${i.totalGroups}`),this.progressText.innerText=`Baking: ${t}/${e} frames (${r} spp)
Elapsed: ${s.toFixed(1)}s`+o}applyQualityPreset(i){const e=_g[i];!e||(this.options.lightMapSize=e.lightMapSize,this.options.casts=e.casts,this.options.targetSamples=e.targetSamples,this.pane.refresh(),this.bake())}async applyRefinement(){!this.bakeController.bakeGroups.length||(this.options.refinementStatus="running",this.pane.refresh(),await this.bakeController.runRefinement(this.options,this.options.lightMapSize,(i,e)=>{const t=(i+e)/this.bakeController.bakeGroups.length;this.progressBar.style.width=`${Math.min(100,t*100)}%`,this.progressText.innerText=`Refinement: atlas ${i+1}/${this.bakeController.bakeGroups.length} (${Math.round(e*100)}%)
Dilation & Bilateral Denoise...`}),this.options.refinementStatus=this.options.dilationIterations>0||this.options.denoiseEnabled?"applied":"skipped",this.pane.refresh(),this.renderModeRunner.apply(),this.progressText.innerText=`Baking & Refinement complete!
Ready.`,setTimeout(()=>{this.progressContainer.style.display="none"},3e3))}showUnrefined(){this.bakeController.clearRefinement(),this.options.refinementStatus="idle",this.pane.refresh(),this.renderModeRunner.apply()}async rebakeAO(){!this.bakeController.bakeGroups.length||!this.bakeController.bakeResult||(await this.bakeController.runAOOnly({samples:this.options.aoSamples,distance:this.options.ambientDistance,targetSamples:this.options.targetSamples}),this.options.pause=!1)}async exportFinal(){var t,n;const i=this.bakeController.bakeGroups;if(!i.length){console.warn("[baker] export: no bake to export \u2014 bake first");return}const e=i[0].refinement?"refined":"composite";for(let s=0;s<i.length;s++){const r=i[s],o=(n=(t=r.refinement)==null?void 0:t.texture)!=null?n:r.composite.texture,l=i.length>1?`_atlas${s}`:"";await this.runExport(o,`lightmap_${e}_${this.options.lightMapSize}${l}`)}}async exportCurrent(){var n;const i=this.bakeController.bakeGroups,e=(n=Is.find(s=>s.id===this.options.layer))!=null?n:Is[0];if(!i.length){console.warn("[baker] export: no bake to export \u2014 bake first");return}let t=0;for(let s=0;s<i.length;s++){const r=i[s],o=e.getLightMap({group:r});if(!o)continue;const l=i.length>1?`_atlas${s}`:"";await this.runExport(o,`lightmap_${e.id}_${this.options.lightMapSize}${l}`),t++}t||console.warn(`[baker] export: layer "${e.id}" has no exportable texture`)}async runExport(i,e){const t=this.options.exportFormat,n=this.options.lightMapSize,s=performance.now();try{await J0(this.sceneController.renderer,i,n,e,t),console.info(`[baker] exported ${e}.${t} (${n}\xD7${n}) in ${(performance.now()-s).toFixed(0)}ms`)}catch(r){throw console.error("[baker] export failed:",r),r}}async exportSceneGLB(){if(!this.sceneController.meshes.length){console.warn("[baker] no meshes to export");return}if(!this.bakeController.bakeGroups.length){console.warn("[baker] no baked lightmap available \u2014 bake first");return}const i=this.options.layer;this.options.layer="combined",this.renderModeRunner.apply(),this.options.layer=i;const{GLTFExporter:e}=await hP(()=>import("./GLTFExporter.8928c69c.js"),[]),t=new e,n=await new Promise((l,c)=>{t.parse(this.sceneController.cornellRoot,u=>{u instanceof ArrayBuffer?l(u):c(new Error("expected binary GLB output"))},u=>c(u),{binary:!0,embedImages:!0})}),s=new Blob([n],{type:"model/gltf-binary"}),r=URL.createObjectURL(s),o=document.createElement("a");o.href=r,o.download="scene-baked.glb",o.click(),URL.revokeObjectURL(r)}estimateTimeRemaining(i,e){if(e<=0||i>=e)return 0;const t=this.bakeBatchHistory;if(t.length<2)return 0;const n=t[0],s=t[t.length-1],r=s.samples-n.samples,o=s.t-n.t;if(r<=0||o<=0)return 0;const l=o/r;return(e-i)*l/1e3}startLoop(){if(this.looping)return;this.looping=!0;let i=performance.now(),e=0,t=0;const n=()=>{var r,o,l;requestAnimationFrame(n),this.sceneController.syncGizmo(this.options.showGizmo);const s=performance.now();if(e++,s>=i+1e3){t=Math.round(e*1e3/(s-i));let c=0,u=0;const d=this.sceneController.renderer.info.memory.textures;for(const b of this.bakeController.bakeGroups){const w=this.options.lightMapSize;c+=w*w*16*2,c+=w*w*8,c+=w*w*16*3,b.refinement&&(c+=w*w*8)}for(const b of this.sceneController.meshes){const w=b.geometry;if(w.index)u+=w.index.count/3;else{const x=w.attributes.position;x&&(u+=x.count/3)}}const p=(c/(1024*1024)).toFixed(1),m=(u/1e3).toFixed(1);let g=`FPS: ${t}
VRAM: ${p} MB (${d} tex)
TRIS: ${m}k
`;this.bakeController.bakeGroups.length&&!this.options.pause?g+=`RAYS: ${(this.bakeController.bakeGroups.length*this.options.lightMapSize*this.options.lightMapSize*this.options.casts*t/1e6).toFixed(1)}M/s`:g+="RAYS: 0.0M/s",this.fpsElement.innerText=g,e=0,i=s}if(this.bakeController.bakeGroups.length&&!this.options.pause){const c=this.bakeController.tick();if(c)if(c.allDone){this.options.pause=!0,this.options.etaSec=0;const u=(performance.now()-this.bakeStartTime)/1e3;console.info(`[baker] done in ${u.toFixed(2)}s (${this.bakeController.bakeGroups.length} atlas${this.bakeController.bakeGroups.length===1?"":"es"})`),this.progressText.innerText=`Baking complete! ${u.toFixed(1)}s
Running post-process...`,console.info("[baker:debug] post-bake done",{groups:this.bakeController.bakeGroups.length,firstCompositeUuid:(r=this.bakeController.bakeGroups[0])==null?void 0:r.composite.texture.uuid}),this.pane.refresh(),this.options.autoApplyRefinement&&this.applyRefinement()}else{const u=this.options.targetSamples,d=u>0?c.minSamples/u:0;this.progressBar.style.width=`${Math.min(100,d*100)}%`;const p=(performance.now()-this.bakeStartTime)/1e3,m=performance.now(),g=this.bakeBatchHistory[this.bakeBatchHistory.length-1];(!g||g.samples!==c.minSamples)&&(this.bakeBatchHistory.push({samples:c.minSamples,t:m}),this.bakeBatchHistory.length>hv.BAKE_ETA_WINDOW&&this.bakeBatchHistory.shift());const b=this.estimateTimeRemaining(c.minSamples,u),w=c.minSamples*this.options.casts;this.options.samples=c.minSamples,this.options.spp=w,this.options.etaSec=Math.ceil(b);let x;this.bakeController.bakeGroups.length===1?x="":this.bakeController.bakeGroups.length<=6?x=`
Atlases: [`+c.perAtlasSamples.map(v=>v>=u?`${u}\u2713`:String(v)).join(", ")+"]":x=`
Atlases: ${c.perAtlasSamples.filter(M=>M>=u).length}/${this.bakeController.bakeGroups.length} done`,this.progressText.innerText=`Baking: ${c.minSamples}/${u} frames (${w} spp)
Elapsed: ${p.toFixed(1)}s | ETA: ${this.options.etaSec}s`+x}}if(this.sceneController.controls.update(),this.bakeController.firstPostBakeRender?(this.bakeController.firstPostBakeRender=!1,this.bakeController.diag.snap("about to do FIRST post-bake scene render"),this.bakeController.diag.measure("FIRST post-bake renderer.render",()=>this.sceneController.renderer.render(this.sceneController.scene,this.sceneController.camera)),this.bakeController.diag.snap("after FIRST post-bake scene render")):this.sceneController.renderer.render(this.sceneController.scene,this.sceneController.camera),this.atlasViewer.visible=this.options.atlasViewerEnabled,this.atlasViewer.visible){const c=(o=Is.find(p=>p.id===this.options.layer))!=null?o:Is[0],u=this.bakeController.bakeGroups;if(u.length===0)this.atlasViewer.setTexture(null);else{const p=[];for(const m of u)p.push((l=c.getLightMap({group:m}))!=null?l:m.composite.texture);this.atlasViewer.setTextures(p)}const d=this.bakeController.bakeGroups.length>1?` (${this.bakeController.bakeGroups.length} atlases)`:"";this.atlasViewer.setLayerLabel(c.label+d)}this.atlasViewer.render(this.sceneController.renderer)};n()}get meshes(){return this.sceneController.meshes}get scene(){return this.sceneController.scene}requestBake(){return this.bake()}requestAORebake(){return this.rebakeAO()}setQuality(i){this.options.quality=i,this.applyQualityPreset(i)}setLayer(i){this.options.layer=i,this.renderModeRunner.apply()}setAutoBake(i){this.options.autoBake=i}getBakeStatus(){return this.bakeController.bakeGroups.length?this.options.pause?"done":"baking":"idle"}getMeshCount(){return this.sceneController.meshes.length}getSceneTree(){return this.sceneController.buildSceneTree()}pickAt(i,e){return this.sceneController.pickAt(i,e)}setSelection(i){this.sceneController.attachGizmoTo(this.sceneController.lookupObject(i))}setGizmoMode(i){this.sceneController.setGizmoMode(i)}setNodeVisible(i,e){this.sceneController.setVisible(i,e)}getBakeGroupCount(){return this.bakeController.bakeGroups.length}sampleCanvasPixel(i,e){const t=this.sceneController.renderer,n=t.getContext();if(n.isContextLost())return null;t.setRenderTarget(null),t.render(this.sceneController.scene,this.sceneController.camera),n.bindFramebuffer(n.FRAMEBUFFER,null);const s=new Uint8Array(4),r=n.drawingBufferHeight;return n.readPixels(i,r-e,1,1,n.RGBA,n.UNSIGNED_BYTE,s),[s[0],s[1],s[2],s[3]]}getRenderDiag(){const i=this.sceneController.renderer.getContext();return{canvasW:this.sceneController.renderer.domElement.width,canvasH:this.sceneController.renderer.domElement.height,gbW:i.drawingBufferWidth,gbH:i.drawingBufferHeight,glError:i.getError()}}};let dv=hv;dv.BAKE_ETA_WINDOW=16;function cR(){return new URLSearchParams(window.location.search).get("legacy")==="1"}function uR(){return new URLSearchParams(window.location.search).get("test")==="1"}function hR(i){setInterval(()=>{const e=i.getBakeStatus();zl.value!==e&&(zl.value=e);const t=i.options,n=t.targetSamples,s=n>0?Math.min(100,t.samples/n*100):0;nv.value={pct:s,samples:t.samples,atlas:i.getBakeGroupCount(),total:n,elapsedMs:0}},250)}function dR(i){Ko(()=>{i.setSelection($r.value)}),Ko(()=>{i.setGizmoMode(yl.value)})}function pR(){window.addEventListener("keydown",i=>{i.target instanceof HTMLInputElement||i.target instanceof HTMLTextAreaElement||(i.key==="w"||i.key==="W"?yl.value="translate":i.key==="e"||i.key==="E"?yl.value="rotate":i.key==="r"||i.key==="R"?yl.value="scale":i.key==="Escape"&&($r.value=null))})}(async()=>{await U1();const i=new dv;if(K2(i),i.externalHooks={onSceneChanged:()=>{ta.value=i.getSceneTree()},onStaleChange:()=>{iv.value=!0},onViewportPick:e=>{$r.value=e}},ta.value=i.getSceneTree(),$r.value=xh,window.addEventListener("resize",()=>i.updateSize()),!cR()){const e=document.createElement("div");e.id="app",document.body.appendChild(e),fb(ve(lP,{}),e),hR(i),dR(i),pR()}uR()&&(window.__baker=i,document.body.setAttribute("data-baker-ready","1"))})();export{Dt as B,mR as C,wn as D,Qo as I,bt as L,fe as M,Xn as N,Bn as P,qt as Q,Yt as R,nn as S,Ql as U,D as V,_0 as W,Vt as a,yn as b,x0 as c,We as d,fR as e,i0 as f,e0 as g,xt as h,je as i,Hr as j,mt as k,Gu as l,Pr as m,ml as n,ki as o,_n as p,Vr as q,Dl as r};
