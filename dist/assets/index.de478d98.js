const Bg=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}};Bg();var bl,dt,Gp,Vp,Ki,Sh,Wp,Xp,Bl,Va,bo,qp,Iu,Wc,Xc,tl={},nl=[],kg=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Bo=Array.isArray;function Ni(i,e){for(var t in e)i[t]=e[t];return i}function Du(i){i&&i.parentNode&&i.parentNode.removeChild(i)}function il(i,e,t){var n,s,r,o={};for(r in e)r=="key"?n=e[r]:r=="ref"?s=e[r]:o[r]=e[r];if(arguments.length>2&&(o.children=arguments.length>3?bl.call(arguments,2):t),typeof i=="function"&&i.defaultProps!=null)for(r in i.defaultProps)o[r]===void 0&&(o[r]=i.defaultProps[r]);return Wa(i,o,n,s,null)}function Wa(i,e,t,n,s){var r={type:i,props:e,key:t,ref:n,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:s==null?++Gp:s,__i:-1,__u:0};return s==null&&dt.vnode!=null&&dt.vnode(r),r}function As(i){return i.children}function Mo(i,e){this.props=i,this.context=e}function Sr(i,e){if(e==null)return i.__?Sr(i.__,i.__i+1):null;for(var t;e<i.__k.length;e++)if((t=i.__k[e])!=null&&t.__e!=null)return t.__e;return typeof i.type=="function"?Sr(i):null}function zg(i){if(i.__P&&i.__d){var e=i.__v,t=e.__e,n=[],s=[],r=Ni({},e);r.__v=e.__v+1,dt.vnode&&dt.vnode(r),Uu(i.__P,r,e,i.__n,i.__P.namespaceURI,32&e.__u?[t]:null,n,t==null?Sr(e):t,!!(32&e.__u),s),r.__v=e.__v,r.__.__k[r.__i]=r,Zp(n,r,s),e.__e=e.__=null,r.__e!=t&&jp(r)}}function jp(i){if((i=i.__)!=null&&i.__c!=null)return i.__e=i.__c.base=null,i.__k.some(function(e){if(e!=null&&e.__e!=null)return i.__e=i.__c.base=e.__e}),jp(i)}function wh(i){(!i.__d&&(i.__d=!0)&&Ki.push(i)&&!sl.__r++||Sh!=dt.debounceRendering)&&((Sh=dt.debounceRendering)||Wp)(sl)}function sl(){try{for(var i,e=1;Ki.length;)Ki.length>e&&Ki.sort(Xp),i=Ki.shift(),e=Ki.length,zg(i)}finally{Ki.length=sl.__r=0}}function $p(i,e,t,n,s,r,o,a,l,c,u){var h,d,f,g,x,m,p,v=n&&n.__k||nl,_=e.length;for(l=Hg(t,e,v,l,_),h=0;h<_;h++)(f=t.__k[h])!=null&&(d=f.__i!=-1&&v[f.__i]||tl,f.__i=h,m=Uu(i,f,d,s,r,o,a,l,c,u),g=f.__e,f.ref&&d.ref!=f.ref&&(d.ref&&Nu(d.ref,null,f),u.push(f.ref,f.__c||g,f)),x==null&&g!=null&&(x=g),(p=!!(4&f.__u))||d.__k===f.__k?(l=Yp(f,l,i,p),p&&d.__e&&(d.__e=null)):typeof f.type=="function"&&m!==void 0?l=m:g&&(l=g.nextSibling),f.__u&=-7);return t.__e=x,l}function Hg(i,e,t,n,s){var r,o,a,l,c,u=t.length,h=u,d=0;for(i.__k=new Array(s),r=0;r<s;r++)(o=e[r])!=null&&typeof o!="boolean"&&typeof o!="function"?(typeof o=="string"||typeof o=="number"||typeof o=="bigint"||o.constructor==String?o=i.__k[r]=Wa(null,o,null,null,null):Bo(o)?o=i.__k[r]=Wa(As,{children:o},null,null,null):o.constructor===void 0&&o.__b>0?o=i.__k[r]=Wa(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):i.__k[r]=o,l=r+d,o.__=i,o.__b=i.__b+1,a=null,(c=o.__i=Gg(o,t,l,h))!=-1&&(h--,(a=t[c])&&(a.__u|=2)),a==null||a.__v==null?(c==-1&&(s>u?d--:s<u&&d++),typeof o.type!="function"&&(o.__u|=4)):c!=l&&(c==l-1?d--:c==l+1?d++:(c>l?d--:d++,o.__u|=4))):i.__k[r]=null;if(h)for(r=0;r<u;r++)(a=t[r])!=null&&(2&a.__u)==0&&(a.__e==n&&(n=Sr(a)),Jp(a,a));return n}function Yp(i,e,t,n){var s,r;if(typeof i.type=="function"){for(s=i.__k,r=0;s&&r<s.length;r++)s[r]&&(s[r].__=i,e=Yp(s[r],e,t,n));return e}i.__e!=e&&(n&&(e&&i.type&&!e.parentNode&&(e=Sr(i)),t.insertBefore(i.__e,e||null)),e=i.__e);do e=e&&e.nextSibling;while(e!=null&&e.nodeType==8);return e}function Kp(i,e){return e=e||[],i==null||typeof i=="boolean"||(Bo(i)?i.some(function(t){Kp(t,e)}):e.push(i)),e}function Gg(i,e,t,n){var s,r,o,a=i.key,l=i.type,c=e[t],u=c!=null&&(2&c.__u)==0;if(c===null&&a==null||u&&a==c.key&&l==c.type)return t;if(n>(u?1:0)){for(s=t-1,r=t+1;s>=0||r<e.length;)if((c=e[o=s>=0?s--:r++])!=null&&(2&c.__u)==0&&a==c.key&&l==c.type)return o}return-1}function Eh(i,e,t){e[0]=="-"?i.setProperty(e,t==null?"":t):i[e]=t==null?"":typeof t!="number"||kg.test(e)?t:t+"px"}function qo(i,e,t,n,s){var r,o;e:if(e=="style")if(typeof t=="string")i.style.cssText=t;else{if(typeof n=="string"&&(i.style.cssText=n=""),n)for(e in n)t&&e in t||Eh(i.style,e,"");if(t)for(e in t)n&&t[e]==n[e]||Eh(i.style,e,t[e])}else if(e[0]=="o"&&e[1]=="n")r=e!=(e=e.replace(qp,"$1")),o=e.toLowerCase(),e=o in i||e=="onFocusOut"||e=="onFocusIn"?o.slice(2):e.slice(2),i.l||(i.l={}),i.l[e+r]=t,t?n?t[bo]=n[bo]:(t[bo]=Iu,i.addEventListener(e,r?Xc:Wc,r)):i.removeEventListener(e,r?Xc:Wc,r);else{if(s=="http://www.w3.org/2000/svg")e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!="width"&&e!="height"&&e!="href"&&e!="list"&&e!="form"&&e!="tabIndex"&&e!="download"&&e!="rowSpan"&&e!="colSpan"&&e!="role"&&e!="popover"&&e in i)try{i[e]=t==null?"":t;break e}catch{}typeof t=="function"||(t==null||t===!1&&e[4]!="-"?i.removeAttribute(e):i.setAttribute(e,e=="popover"&&t==1?"":t))}}function Th(i){return function(e){if(this.l){var t=this.l[e.type+i];if(e[Va]==null)e[Va]=Iu++;else if(e[Va]<t[bo])return;return t(dt.event?dt.event(e):e)}}}function Uu(i,e,t,n,s,r,o,a,l,c){var u,h,d,f,g,x,m,p,v,_,b,S,w,M,A,U=e.type;if(e.constructor!==void 0)return null;128&t.__u&&(l=!!(32&t.__u),r=[a=e.__e=t.__e]),(u=dt.__b)&&u(e);e:if(typeof U=="function")try{if(p=e.props,v=U.prototype&&U.prototype.render,_=(u=U.contextType)&&n[u.__c],b=u?_?_.props.value:u.__:n,t.__c?m=(h=e.__c=t.__c).__=h.__E:(v?e.__c=h=new U(p,b):(e.__c=h=new Mo(p,b),h.constructor=U,h.render=Wg),_&&_.sub(h),h.state||(h.state={}),h.__n=n,d=h.__d=!0,h.__h=[],h._sb=[]),v&&h.__s==null&&(h.__s=h.state),v&&U.getDerivedStateFromProps!=null&&(h.__s==h.state&&(h.__s=Ni({},h.__s)),Ni(h.__s,U.getDerivedStateFromProps(p,h.__s))),f=h.props,g=h.state,h.__v=e,d)v&&U.getDerivedStateFromProps==null&&h.componentWillMount!=null&&h.componentWillMount(),v&&h.componentDidMount!=null&&h.__h.push(h.componentDidMount);else{if(v&&U.getDerivedStateFromProps==null&&p!==f&&h.componentWillReceiveProps!=null&&h.componentWillReceiveProps(p,b),e.__v==t.__v||!h.__e&&h.shouldComponentUpdate!=null&&h.shouldComponentUpdate(p,h.__s,b)===!1){e.__v!=t.__v&&(h.props=p,h.state=h.__s,h.__d=!1),e.__e=t.__e,e.__k=t.__k,e.__k.some(function(y){y&&(y.__=e)}),nl.push.apply(h.__h,h._sb),h._sb=[],h.__h.length&&o.push(h);break e}h.componentWillUpdate!=null&&h.componentWillUpdate(p,h.__s,b),v&&h.componentDidUpdate!=null&&h.__h.push(function(){h.componentDidUpdate(f,g,x)})}if(h.context=b,h.props=p,h.__P=i,h.__e=!1,S=dt.__r,w=0,v)h.state=h.__s,h.__d=!1,S&&S(e),u=h.render(h.props,h.state,h.context),nl.push.apply(h.__h,h._sb),h._sb=[];else do h.__d=!1,S&&S(e),u=h.render(h.props,h.state,h.context),h.state=h.__s;while(h.__d&&++w<25);h.state=h.__s,h.getChildContext!=null&&(n=Ni(Ni({},n),h.getChildContext())),v&&!d&&h.getSnapshotBeforeUpdate!=null&&(x=h.getSnapshotBeforeUpdate(f,g)),M=u!=null&&u.type===As&&u.key==null?Qp(u.props.children):u,a=$p(i,Bo(M)?M:[M],e,t,n,s,r,o,a,l,c),h.base=e.__e,e.__u&=-161,h.__h.length&&o.push(h),m&&(h.__E=h.__=null)}catch(y){if(e.__v=null,l||r!=null)if(y.then){for(e.__u|=l?160:128;a&&a.nodeType==8&&a.nextSibling;)a=a.nextSibling;r[r.indexOf(a)]=null,e.__e=a}else{for(A=r.length;A--;)Du(r[A]);qc(e)}else e.__e=t.__e,e.__k=t.__k,y.then||qc(e);dt.__e(y,e,t)}else r==null&&e.__v==t.__v?(e.__k=t.__k,e.__e=t.__e):a=e.__e=Vg(t.__e,e,t,n,s,r,o,l,c);return(u=dt.diffed)&&u(e),128&e.__u?void 0:a}function qc(i){i&&(i.__c&&(i.__c.__e=!0),i.__k&&i.__k.some(qc))}function Zp(i,e,t){for(var n=0;n<t.length;n++)Nu(t[n],t[++n],t[++n]);dt.__c&&dt.__c(e,i),i.some(function(s){try{i=s.__h,s.__h=[],i.some(function(r){r.call(s)})}catch(r){dt.__e(r,s.__v)}})}function Qp(i){return typeof i!="object"||i==null||i.__b>0?i:Bo(i)?i.map(Qp):Ni({},i)}function Vg(i,e,t,n,s,r,o,a,l){var c,u,h,d,f,g,x,m=t.props||tl,p=e.props,v=e.type;if(v=="svg"?s="http://www.w3.org/2000/svg":v=="math"?s="http://www.w3.org/1998/Math/MathML":s||(s="http://www.w3.org/1999/xhtml"),r!=null){for(c=0;c<r.length;c++)if((f=r[c])&&"setAttribute"in f==!!v&&(v?f.localName==v:f.nodeType==3)){i=f,r[c]=null;break}}if(i==null){if(v==null)return document.createTextNode(p);i=document.createElementNS(s,v,p.is&&p),a&&(dt.__m&&dt.__m(e,r),a=!1),r=null}if(v==null)m===p||a&&i.data==p||(i.data=p);else{if(r=r&&bl.call(i.childNodes),!a&&r!=null)for(m={},c=0;c<i.attributes.length;c++)m[(f=i.attributes[c]).name]=f.value;for(c in m)f=m[c],c=="dangerouslySetInnerHTML"?h=f:c=="children"||c in p||c=="value"&&"defaultValue"in p||c=="checked"&&"defaultChecked"in p||qo(i,c,null,f,s);for(c in p)f=p[c],c=="children"?d=f:c=="dangerouslySetInnerHTML"?u=f:c=="value"?g=f:c=="checked"?x=f:a&&typeof f!="function"||m[c]===f||qo(i,c,f,m[c],s);if(u)a||h&&(u.__html==h.__html||u.__html==i.innerHTML)||(i.innerHTML=u.__html),e.__k=[];else if(h&&(i.innerHTML=""),$p(e.type=="template"?i.content:i,Bo(d)?d:[d],e,t,n,v=="foreignObject"?"http://www.w3.org/1999/xhtml":s,r,o,r?r[0]:t.__k&&Sr(t,0),a,l),r!=null)for(c=r.length;c--;)Du(r[c]);a||(c="value",v=="progress"&&g==null?i.removeAttribute("value"):g!=null&&(g!==i[c]||v=="progress"&&!g||v=="option"&&g!=m[c])&&qo(i,c,g,m[c],s),c="checked",x!=null&&x!=i[c]&&qo(i,c,x,m[c],s))}return i}function Nu(i,e,t){try{if(typeof i=="function"){var n=typeof i.__u=="function";n&&i.__u(),n&&e==null||(i.__u=i(e))}else i.current=e}catch(s){dt.__e(s,t)}}function Jp(i,e,t){var n,s;if(dt.unmount&&dt.unmount(i),(n=i.ref)&&(n.current&&n.current!=i.__e||Nu(n,null,e)),(n=i.__c)!=null){if(n.componentWillUnmount)try{n.componentWillUnmount()}catch(r){dt.__e(r,e)}n.base=n.__P=null}if(n=i.__k)for(s=0;s<n.length;s++)n[s]&&Jp(n[s],e,t||typeof i.type!="function");t||Du(i.__e),i.__c=i.__=i.__e=void 0}function Wg(i,e,t){return this.constructor(i,t)}function Xg(i,e,t){var n,s,r,o;e==document&&(e=document.documentElement),dt.__&&dt.__(i,e),s=(n=typeof t=="function")?null:t&&t.__k||e.__k,r=[],o=[],Uu(e,i=(!n&&t||e).__k=il(As,null,[i]),s||tl,tl,e.namespaceURI,!n&&t?[t]:s?null:e.firstChild?bl.call(e.childNodes):null,r,!n&&t?t:s?s.__e:e.firstChild,n,o),Zp(r,i,o)}bl=nl.slice,dt={__e:function(i,e,t,n){for(var s,r,o;e=e.__;)if((s=e.__c)&&!s.__)try{if((r=s.constructor)&&r.getDerivedStateFromError!=null&&(s.setState(r.getDerivedStateFromError(i)),o=s.__d),s.componentDidCatch!=null&&(s.componentDidCatch(i,n||{}),o=s.__d),o)return s.__E=s}catch(a){i=a}throw i}},Gp=0,Vp=function(i){return i!=null&&i.constructor===void 0},Mo.prototype.setState=function(i,e){var t;t=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=Ni({},this.state),typeof i=="function"&&(i=i(Ni({},t),this.props)),i&&Ni(t,i),i!=null&&this.__v&&(e&&this._sb.push(e),wh(this))},Mo.prototype.forceUpdate=function(i){this.__v&&(this.__e=!0,i&&this.__h.push(i),wh(this))},Mo.prototype.render=As,Ki=[],Wp=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Xp=function(i,e){return i.__v.__b-e.__v.__b},sl.__r=0,Bl=Math.random().toString(8),Va="__d"+Bl,bo="__a"+Bl,qp=/(PointerCapture)$|Capture$/i,Iu=0,Wc=Th(!1),Xc=Th(!0);var qg=0;function I(i,e,t,n,s,r){e||(e={});var o,a,l=e;if("ref"in l)for(a in l={},e)a=="ref"?o=e[a]:l[a]=e[a];var c={type:i,props:l,key:t,ref:o,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--qg,__i:-1,__u:0,__source:s,__self:r};if(typeof i=="function"&&(o=i.defaultProps))for(a in o)l[a]===void 0&&(l[a]=o[a]);return dt.vnode&&dt.vnode(c),c}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Fu="161",Ps={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ls={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},jg=0,Ah=1,$g=2,em=1,Yg=2,Ii=3,ni=0,gn=1,dn=2,ei=0,yr=1,Rh=2,Ch=3,Ph=4,Kg=5,ms=100,Zg=101,Qg=102,Lh=103,Ih=104,Jg=200,e0=201,t0=202,n0=203,jc=204,$c=205,i0=206,s0=207,r0=208,o0=209,a0=210,l0=211,c0=212,u0=213,h0=214,d0=0,f0=1,p0=2,rl=3,m0=4,g0=5,_0=6,x0=7,tm=0,v0=1,y0=2,ns=0,b0=1,M0=2,S0=3,w0=4,E0=5,T0=6,Dh="attached",A0="detached",nm=300,wr=301,Er=302,Yc=303,Kc=304,Ml=306,Tr=1e3,an=1001,ol=1002,st=1003,Zc=1004,mr=1005,ut=1006,Xa=1007,Fi=1008,gi=1009,Qc=1010,im=1011,Sl=1012,So=1013,In=1014,ht=1015,Xn=1016,sm=1017,rm=1018,vs=1020,R0=1021,kt=1023,C0=1024,P0=1025,ys=1026,Ar=1027,om=1028,Ou=1029,am=1030,wl=1031,Io=1033,kl=33776,zl=33777,Hl=33778,Gl=33779,Uh=35840,Nh=35841,Fh=35842,Oh=35843,lm=36196,Bh=37492,kh=37496,zh=37808,Hh=37809,Gh=37810,Vh=37811,Wh=37812,Xh=37813,qh=37814,jh=37815,$h=37816,Yh=37817,Kh=37818,Zh=37819,Qh=37820,Jh=37821,Vl=36492,ed=36494,td=36495,L0=36283,nd=36284,id=36285,sd=36286,Do=2300,Rr=2301,Wl=2302,rd=2400,od=2401,ad=2402,I0=2500,D0=0,cm=1,Jc=2,um=3e3,bs=3001,U0=3200,N0=3201,hm=0,F0=1,Gn="",Et="srgb",Yt="srgb-linear",Bu="display-p3",El="display-p3-linear",al="linear",xt="srgb",ll="rec709",cl="p3",Is=7680,ld=519,O0=512,B0=513,k0=514,dm=515,z0=516,H0=517,G0=518,V0=519,eu=35044,ii="300 es",tu=1035,Oi=2e3,ul=2001;class Rs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let cd=1234567;const wo=Math.PI/180,Cr=180/Math.PI;function ti(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(sn[i&255]+sn[i>>8&255]+sn[i>>16&255]+sn[i>>24&255]+"-"+sn[e&255]+sn[e>>8&255]+"-"+sn[e>>16&15|64]+sn[e>>24&255]+"-"+sn[t&63|128]+sn[t>>8&255]+"-"+sn[t>>16&255]+sn[t>>24&255]+sn[n&255]+sn[n>>8&255]+sn[n>>16&255]+sn[n>>24&255]).toLowerCase()}function Vt(i,e,t){return Math.max(e,Math.min(t,i))}function ku(i,e){return(i%e+e)%e}function W0(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function X0(i,e,t){return i!==e?(t-i)/(e-i):0}function Eo(i,e,t){return(1-t)*i+t*e}function q0(i,e,t,n){return Eo(i,e,1-Math.exp(-t*n))}function j0(i,e=1){return e-Math.abs(ku(i,e*2)-e)}function $0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Y0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function K0(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Z0(i,e){return i+Math.random()*(e-i)}function Q0(i){return i*(.5-Math.random())}function J0(i){i!==void 0&&(cd=i);let e=cd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function e_(i){return i*wo}function t_(i){return i*Cr}function nu(i){return(i&i-1)===0&&i!==0}function n_(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function hl(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function i_(i,e,t,n,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*u,l*h,l*d,a*c);break;case"YZY":i.set(l*d,a*u,l*h,a*c);break;case"ZXZ":i.set(l*h,l*d,a*u,a*c);break;case"XZX":i.set(a*u,l*g,l*f,a*c);break;case"YXY":i.set(l*f,a*u,l*g,a*c);break;case"ZYZ":i.set(l*g,l*f,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Qn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function lt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const fm={DEG2RAD:wo,RAD2DEG:Cr,generateUUID:ti,clamp:Vt,euclideanModulo:ku,mapLinear:W0,inverseLerp:X0,lerp:Eo,damp:q0,pingpong:j0,smoothstep:$0,smootherstep:Y0,randInt:K0,randFloat:Z0,randFloatSpread:Q0,seededRandom:J0,degToRad:e_,radToDeg:t_,isPowerOfTwo:nu,ceilPowerOfTwo:n_,floorPowerOfTwo:hl,setQuaternionFromProperEuler:i_,normalize:lt,denormalize:Qn};class ye{constructor(e=0,t=0){ye.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Vt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ye{constructor(e,t,n,s,r,o,a,l,c){Ye.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],g=n[8],x=s[0],m=s[3],p=s[6],v=s[1],_=s[4],b=s[7],S=s[2],w=s[5],M=s[8];return r[0]=o*x+a*v+l*S,r[3]=o*m+a*_+l*w,r[6]=o*p+a*b+l*M,r[1]=c*x+u*v+h*S,r[4]=c*m+u*_+h*w,r[7]=c*p+u*b+h*M,r[2]=d*x+f*v+g*S,r[5]=d*m+f*_+g*w,r[8]=d*p+f*b+g*M,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*r,f=c*r-o*l,g=t*h+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=h*x,e[1]=(s*c-u*n)*x,e[2]=(a*n-s*o)*x,e[3]=d*x,e[4]=(u*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=f*x,e[7]=(n*l-c*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Xl.makeScale(e,t)),this}rotate(e){return this.premultiply(Xl.makeRotation(-e)),this}translate(e,t){return this.premultiply(Xl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Xl=new Ye;function pm(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Uo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function s_(){const i=Uo("canvas");return i.style.display="block",i}const ud={};function Ms(i){i in ud||(ud[i]=!0,console.warn(i))}const hd=new Ye().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),dd=new Ye().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),jo={[Yt]:{transfer:al,primaries:ll,toReference:i=>i,fromReference:i=>i},[Et]:{transfer:xt,primaries:ll,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[El]:{transfer:al,primaries:cl,toReference:i=>i.applyMatrix3(dd),fromReference:i=>i.applyMatrix3(hd)},[Bu]:{transfer:xt,primaries:cl,toReference:i=>i.convertSRGBToLinear().applyMatrix3(dd),fromReference:i=>i.applyMatrix3(hd).convertLinearToSRGB()}},r_=new Set([Yt,El]),at={enabled:!0,_workingColorSpace:Yt,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!r_.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=jo[e].toReference,s=jo[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return jo[i].primaries},getTransfer:function(i){return i===Gn?al:jo[i].transfer}};function br(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ql(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ds;class mm{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ds===void 0&&(Ds=Uo("canvas")),Ds.width=e.width,Ds.height=e.height;const n=Ds.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ds}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){const t=Uo("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=br(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(br(t[n]/255)*255):t[n]=br(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let o_=0;class gm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:o_++}),this.uuid=ti(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(jl(s[o].image)):r.push(jl(s[o]))}else r=jl(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function jl(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?mm.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let a_=0;class Ht extends Rs{constructor(e=Ht.DEFAULT_IMAGE,t=Ht.DEFAULT_MAPPING,n=an,s=an,r=ut,o=Fi,a=kt,l=gi,c=Ht.DEFAULT_ANISOTROPY,u=Gn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:a_++}),this.uuid=ti(),this.name="",this.source=new gm(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ye(0,0),this.repeat=new ye(1,1),this.center=new ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Ms("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===bs?Et:Gn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==nm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Tr:e.x=e.x-Math.floor(e.x);break;case an:e.x=e.x<0?0:1;break;case ol:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Tr:e.y=e.y-Math.floor(e.y);break;case an:e.y=e.y<0?0:1;break;case ol:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ms("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Et?bs:um}set encoding(e){Ms("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===bs?Et:Gn}}Ht.DEFAULT_IMAGE=null;Ht.DEFAULT_MAPPING=nm;Ht.DEFAULT_ANISOTROPY=1;class gt{constructor(e=0,t=0,n=0,s=1){gt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(c+1)/2,b=(f+1)/2,S=(p+1)/2,w=(u+d)/4,M=(h+x)/4,A=(g+m)/4;return _>b&&_>S?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=w/n,r=M/n):b>S?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=w/s,r=A/s):S<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),n=M/r,s=A/r),this.set(n,s,r,t),this}let v=Math.sqrt((m-g)*(m-g)+(h-x)*(h-x)+(d-u)*(d-u));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(h-x)/v,this.z=(d-u)/v,this.w=Math.acos((c+f+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class l_ extends Rs{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new gt(0,0,e,t),this.scissorTest=!1,this.viewport=new gt(0,0,e,t);const s={width:e,height:t,depth:1};n.encoding!==void 0&&(Ms("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===bs?Et:Gn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ut,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Ht(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new gm(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Mn extends l_{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class _m extends Ht{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=st,this.minFilter=st,this.wrapR=an,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class c_ extends Ht{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=st,this.minFilter=st,this.wrapR=an,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class u_ extends Mn{constructor(e=1,t=1,n=1,s={}){super(e,t,s),this.isWebGLMultipleRenderTargets=!0;const r=this.texture;this.texture=[];for(let o=0;o<n;o++)this.texture[o]=r.clone(),this.texture[o].isRenderTargetTexture=!0}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.texture.length;s<r;s++)this.texture[s].image.width=e,this.texture[s].image.height=t,this.texture[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}copy(e){this.dispose(),this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.texture.length=0;for(let t=0,n=e.texture.length;t<n;t++)this.texture[t]=e.texture[t].clone(),this.texture[t].isRenderTargetTexture=!0;return this}}class Bt{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3];const d=r[o+0],f=r[o+1],g=r[o+2],x=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=x;return}if(h!==x||l!==d||c!==f||u!==g){let m=1-a;const p=l*d+c*f+u*g+h*x,v=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){const S=Math.sqrt(_),w=Math.atan2(S,p*v);m=Math.sin(m*w)/S,a=Math.sin(a*w)/S}const b=a*v;if(l=l*m+d*b,c=c*m+f*b,u=u*m+g*b,h=h*m+x*b,m===1-a){const S=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=S,c*=S,u*=S,h*=S}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+u*h+l*f-c*d,e[t+1]=l*g+u*d+c*h-a*f,e[t+2]=c*g+u*f+a*d-l*h,e[t+3]=u*g-a*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),h=a(r/2),d=l(n/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"YZX":this._x=d*u*h+c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h-d*f*g;break;case"XZY":this._x=d*u*h-c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>h){const f=2*Math.sqrt(1+n-a-h);this._w=(u-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>h){const f=2*Math.sqrt(1+a-n-h);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+h-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Vt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(r),n*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(e=0,t=0,n=0){R.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(fd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(fd.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),u=2*(a*t-r*s),h=2*(r*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return $l.copy(this).projectOnVector(e),this.sub($l)}reflect(e){return this.sub($l.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Vt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const $l=new R,fd=new Bt;class Ut{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(qn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(qn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=qn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,qn):qn.fromBufferAttribute(r,o),qn.applyMatrix4(e.matrixWorld),this.expandByPoint(qn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),$o.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),$o.copy(n.boundingBox)),$o.applyMatrix4(e.matrixWorld),this.union($o)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,qn),qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(jr),Yo.subVectors(this.max,jr),Us.subVectors(e.a,jr),Ns.subVectors(e.b,jr),Fs.subVectors(e.c,jr),ki.subVectors(Ns,Us),zi.subVectors(Fs,Ns),as.subVectors(Us,Fs);let t=[0,-ki.z,ki.y,0,-zi.z,zi.y,0,-as.z,as.y,ki.z,0,-ki.x,zi.z,0,-zi.x,as.z,0,-as.x,-ki.y,ki.x,0,-zi.y,zi.x,0,-as.y,as.x,0];return!Yl(t,Us,Ns,Fs,Yo)||(t=[1,0,0,0,1,0,0,0,1],!Yl(t,Us,Ns,Fs,Yo))?!1:(Ko.crossVectors(ki,zi),t=[Ko.x,Ko.y,Ko.z],Yl(t,Us,Ns,Fs,Yo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,qn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(qn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ei),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ei=[new R,new R,new R,new R,new R,new R,new R,new R],qn=new R,$o=new Ut,Us=new R,Ns=new R,Fs=new R,ki=new R,zi=new R,as=new R,jr=new R,Yo=new R,Ko=new R,ls=new R;function Yl(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ls.fromArray(i,r);const a=s.x*Math.abs(ls.x)+s.y*Math.abs(ls.y)+s.z*Math.abs(ls.z),l=e.dot(ls),c=t.dot(ls),u=n.dot(ls);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const h_=new Ut,$r=new R,Kl=new R;class oi{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):h_.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;$r.subVectors(e,this.center);const t=$r.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector($r,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Kl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint($r.copy(e.center).add(Kl)),this.expandByPoint($r.copy(e.center).sub(Kl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ti=new R,Zl=new R,Zo=new R,Hi=new R,Ql=new R,Qo=new R,Jl=new R;class Fr{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ti)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ti.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ti.copy(this.origin).addScaledVector(this.direction,t),Ti.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Zl.copy(e).add(t).multiplyScalar(.5),Zo.copy(t).sub(e).normalize(),Hi.copy(this.origin).sub(Zl);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Zo),a=Hi.dot(this.direction),l=-Hi.dot(Zo),c=Hi.lengthSq(),u=Math.abs(1-o*o);let h,d,f,g;if(u>0)if(h=o*l-a,d=o*a-l,g=r*u,h>=0)if(d>=-g)if(d<=g){const x=1/u;h*=x,d*=x,f=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Zl).addScaledVector(Zo,d),f}intersectSphere(e,t){Ti.subVectors(e.center,this.origin);const n=Ti.dot(this.direction),s=Ti.dot(Ti)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Ti)!==null}intersectTriangle(e,t,n,s,r){Ql.subVectors(t,e),Qo.subVectors(n,e),Jl.crossVectors(Ql,Qo);let o=this.direction.dot(Jl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Hi.subVectors(this.origin,e);const l=a*this.direction.dot(Qo.crossVectors(Hi,Qo));if(l<0)return null;const c=a*this.direction.dot(Ql.cross(Hi));if(c<0||l+c>o)return null;const u=-a*Hi.dot(Jl);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class De{constructor(e,t,n,s,r,o,a,l,c,u,h,d,f,g,x,m){De.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,u,h,d,f,g,x,m)}set(e,t,n,s,r,o,a,l,c,u,h,d,f,g,x,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new De().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/Os.setFromMatrixColumn(e,0).length(),r=1/Os.setFromMatrixColumn(e,1).length(),o=1/Os.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=o*u,f=o*h,g=a*u,x=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+g*c,t[5]=d-x*c,t[9]=-a*l,t[2]=x-d*c,t[6]=g+f*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,f=l*h,g=c*u,x=c*h;t[0]=d+x*a,t[4]=g*a-f,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-g,t[6]=x+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,f=l*h,g=c*u,x=c*h;t[0]=d-x*a,t[4]=-o*h,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*u,t[9]=x-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,f=o*h,g=a*u,x=a*h;t[0]=l*u,t[4]=g*c-f,t[8]=d*c+x,t[1]=l*h,t[5]=x*c+d,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,f=o*c,g=a*l,x=a*c;t[0]=l*u,t[4]=x-d*h,t[8]=g*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=f*h+g,t[10]=d-x*h}else if(e.order==="XZY"){const d=o*l,f=o*c,g=a*l,x=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+x,t[5]=o*u,t[9]=f*h-g,t[2]=g*h-f,t[6]=a*u,t[10]=x*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(d_,e,f_)}lookAt(e,t,n){const s=this.elements;return En.subVectors(e,t),En.lengthSq()===0&&(En.z=1),En.normalize(),Gi.crossVectors(n,En),Gi.lengthSq()===0&&(Math.abs(n.z)===1?En.x+=1e-4:En.z+=1e-4,En.normalize(),Gi.crossVectors(n,En)),Gi.normalize(),Jo.crossVectors(En,Gi),s[0]=Gi.x,s[4]=Jo.x,s[8]=En.x,s[1]=Gi.y,s[5]=Jo.y,s[9]=En.y,s[2]=Gi.z,s[6]=Jo.z,s[10]=En.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],g=n[2],x=n[6],m=n[10],p=n[14],v=n[3],_=n[7],b=n[11],S=n[15],w=s[0],M=s[4],A=s[8],U=s[12],y=s[1],E=s[5],N=s[9],B=s[13],P=s[2],O=s[6],k=s[10],V=s[14],q=s[3],H=s[7],Z=s[11],Q=s[15];return r[0]=o*w+a*y+l*P+c*q,r[4]=o*M+a*E+l*O+c*H,r[8]=o*A+a*N+l*k+c*Z,r[12]=o*U+a*B+l*V+c*Q,r[1]=u*w+h*y+d*P+f*q,r[5]=u*M+h*E+d*O+f*H,r[9]=u*A+h*N+d*k+f*Z,r[13]=u*U+h*B+d*V+f*Q,r[2]=g*w+x*y+m*P+p*q,r[6]=g*M+x*E+m*O+p*H,r[10]=g*A+x*N+m*k+p*Z,r[14]=g*U+x*B+m*V+p*Q,r[3]=v*w+_*y+b*P+S*q,r[7]=v*M+_*E+b*O+S*H,r[11]=v*A+_*N+b*k+S*Z,r[15]=v*U+_*B+b*V+S*Q,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],g=e[3],x=e[7],m=e[11],p=e[15];return g*(+r*l*h-s*c*h-r*a*d+n*c*d+s*a*f-n*l*f)+x*(+t*l*f-t*c*d+r*o*d-s*o*f+s*c*u-r*l*u)+m*(+t*c*h-t*a*f-r*o*h+n*o*f+r*a*u-n*c*u)+p*(-s*a*u-t*l*h+t*a*d+s*o*h-n*o*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],g=e[12],x=e[13],m=e[14],p=e[15],v=h*m*c-x*d*c+x*l*f-a*m*f-h*l*p+a*d*p,_=g*d*c-u*m*c-g*l*f+o*m*f+u*l*p-o*d*p,b=u*x*c-g*h*c+g*a*f-o*x*f-u*a*p+o*h*p,S=g*h*l-u*x*l-g*a*d+o*x*d+u*a*m-o*h*m,w=t*v+n*_+s*b+r*S;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const M=1/w;return e[0]=v*M,e[1]=(x*d*r-h*m*r-x*s*f+n*m*f+h*s*p-n*d*p)*M,e[2]=(a*m*r-x*l*r+x*s*c-n*m*c-a*s*p+n*l*p)*M,e[3]=(h*l*r-a*d*r-h*s*c+n*d*c+a*s*f-n*l*f)*M,e[4]=_*M,e[5]=(u*m*r-g*d*r+g*s*f-t*m*f-u*s*p+t*d*p)*M,e[6]=(g*l*r-o*m*r-g*s*c+t*m*c+o*s*p-t*l*p)*M,e[7]=(o*d*r-u*l*r+u*s*c-t*d*c-o*s*f+t*l*f)*M,e[8]=b*M,e[9]=(g*h*r-u*x*r-g*n*f+t*x*f+u*n*p-t*h*p)*M,e[10]=(o*x*r-g*a*r+g*n*c-t*x*c-o*n*p+t*a*p)*M,e[11]=(u*a*r-o*h*r-u*n*c+t*h*c+o*n*f-t*a*f)*M,e[12]=S*M,e[13]=(u*x*s-g*h*s+g*n*d-t*x*d-u*n*m+t*h*m)*M,e[14]=(g*a*s-o*x*s-g*n*l+t*x*l+o*n*m-t*a*m)*M,e[15]=(o*h*s-u*a*s+u*n*l-t*h*l-o*n*d+t*a*d)*M,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,d=r*c,f=r*u,g=r*h,x=o*u,m=o*h,p=a*h,v=l*c,_=l*u,b=l*h,S=n.x,w=n.y,M=n.z;return s[0]=(1-(x+p))*S,s[1]=(f+b)*S,s[2]=(g-_)*S,s[3]=0,s[4]=(f-b)*w,s[5]=(1-(d+p))*w,s[6]=(m+v)*w,s[7]=0,s[8]=(g+_)*M,s[9]=(m-v)*M,s[10]=(1-(d+x))*M,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=Os.set(s[0],s[1],s[2]).length();const o=Os.set(s[4],s[5],s[6]).length(),a=Os.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],jn.copy(this);const c=1/r,u=1/o,h=1/a;return jn.elements[0]*=c,jn.elements[1]*=c,jn.elements[2]*=c,jn.elements[4]*=u,jn.elements[5]*=u,jn.elements[6]*=u,jn.elements[8]*=h,jn.elements[9]*=h,jn.elements[10]*=h,t.setFromRotationMatrix(jn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=Oi){const l=this.elements,c=2*r/(t-e),u=2*r/(n-s),h=(t+e)/(t-e),d=(n+s)/(n-s);let f,g;if(a===Oi)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===ul)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Oi){const l=this.elements,c=1/(t-e),u=1/(n-s),h=1/(o-r),d=(t+e)*c,f=(n+s)*u;let g,x;if(a===Oi)g=(o+r)*h,x=-2*h;else if(a===ul)g=r*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Os=new R,jn=new De,d_=new R(0,0,0),f_=new R(1,1,1),Gi=new R,Jo=new R,En=new R,pd=new De,md=new Bt;class ko{constructor(e=0,t=0,n=0,s=ko.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Vt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Vt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Vt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Vt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Vt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Vt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return pd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(pd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return md.setFromEuler(this),this.setFromQuaternion(md,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ko.DEFAULT_ORDER="XYZ";class zu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let p_=0;const gd=new R,Bs=new Bt,Ai=new De,ea=new R,Yr=new R,m_=new R,g_=new Bt,_d=new R(1,0,0),xd=new R(0,1,0),vd=new R(0,0,1),__={type:"added"},x_={type:"removed"};class Xe extends Rs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:p_++}),this.uuid=ti(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Xe.DEFAULT_UP.clone();const e=new R,t=new ko,n=new Bt,s=new R(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new De},normalMatrix:{value:new Ye}}),this.matrix=new De,this.matrixWorld=new De,this.matrixAutoUpdate=Xe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Bs.setFromAxisAngle(e,t),this.quaternion.multiply(Bs),this}rotateOnWorldAxis(e,t){return Bs.setFromAxisAngle(e,t),this.quaternion.premultiply(Bs),this}rotateX(e){return this.rotateOnAxis(_d,e)}rotateY(e){return this.rotateOnAxis(xd,e)}rotateZ(e){return this.rotateOnAxis(vd,e)}translateOnAxis(e,t){return gd.copy(e).applyQuaternion(this.quaternion),this.position.add(gd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(_d,e)}translateY(e){return this.translateOnAxis(xd,e)}translateZ(e){return this.translateOnAxis(vd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ai.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ea.copy(e):ea.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Yr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ai.lookAt(Yr,ea,this.up):Ai.lookAt(ea,Yr,this.up),this.quaternion.setFromRotationMatrix(Ai),s&&(Ai.extractRotation(s.matrixWorld),Bs.setFromRotationMatrix(Ai),this.quaternion.premultiply(Bs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(__)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(x_)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ai.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ai.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ai),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yr,e,m_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yr,g_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++){const a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}Xe.DEFAULT_UP=new R(0,1,0);Xe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const $n=new R,Ri=new R,ec=new R,Ci=new R,ks=new R,zs=new R,yd=new R,tc=new R,nc=new R,ic=new R;class fn{constructor(e=new R,t=new R,n=new R){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),$n.subVectors(e,t),s.cross($n);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){$n.subVectors(s,t),Ri.subVectors(n,t),ec.subVectors(e,t);const o=$n.dot($n),a=$n.dot(Ri),l=$n.dot(ec),c=Ri.dot(Ri),u=Ri.dot(ec),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const d=1/h,f=(c*l-a*u)*d,g=(o*u-a*l)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Ci)===null?!1:Ci.x>=0&&Ci.y>=0&&Ci.x+Ci.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,Ci)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ci.x),l.addScaledVector(o,Ci.y),l.addScaledVector(a,Ci.z),l)}static isFrontFacing(e,t,n,s){return $n.subVectors(n,t),Ri.subVectors(e,t),$n.cross(Ri).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $n.subVectors(this.c,this.b),Ri.subVectors(this.a,this.b),$n.cross(Ri).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return fn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return fn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return fn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return fn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return fn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;ks.subVectors(s,n),zs.subVectors(r,n),tc.subVectors(e,n);const l=ks.dot(tc),c=zs.dot(tc);if(l<=0&&c<=0)return t.copy(n);nc.subVectors(e,s);const u=ks.dot(nc),h=zs.dot(nc);if(u>=0&&h<=u)return t.copy(s);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(ks,o);ic.subVectors(e,r);const f=ks.dot(ic),g=zs.dot(ic);if(g>=0&&f<=g)return t.copy(r);const x=f*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(zs,a);const m=u*g-f*h;if(m<=0&&h-u>=0&&f-g>=0)return yd.subVectors(r,s),a=(h-u)/(h-u+(f-g)),t.copy(s).addScaledVector(yd,a);const p=1/(m+x+d);return o=x*p,a=d*p,t.copy(n).addScaledVector(ks,o).addScaledVector(zs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const xm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vi={h:0,s:0,l:0},ta={h:0,s:0,l:0};function sc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Te{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Et){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,at.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=at.workingColorSpace){return this.r=e,this.g=t,this.b=n,at.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=at.workingColorSpace){if(e=ku(e,1),t=Vt(t,0,1),n=Vt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=sc(o,r,e+1/3),this.g=sc(o,r,e),this.b=sc(o,r,e-1/3)}return at.toWorkingColorSpace(this,s),this}setStyle(e,t=Et){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Et){const n=xm[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=br(e.r),this.g=br(e.g),this.b=br(e.b),this}copyLinearToSRGB(e){return this.r=ql(e.r),this.g=ql(e.g),this.b=ql(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Et){return at.fromWorkingColorSpace(rn.copy(this),e),Math.round(Vt(rn.r*255,0,255))*65536+Math.round(Vt(rn.g*255,0,255))*256+Math.round(Vt(rn.b*255,0,255))}getHexString(e=Et){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=at.workingColorSpace){at.fromWorkingColorSpace(rn.copy(this),t);const n=rn.r,s=rn.g,r=rn.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=at.workingColorSpace){return at.fromWorkingColorSpace(rn.copy(this),t),e.r=rn.r,e.g=rn.g,e.b=rn.b,e}getStyle(e=Et){at.fromWorkingColorSpace(rn.copy(this),e);const t=rn.r,n=rn.g,s=rn.b;return e!==Et?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Vi),this.setHSL(Vi.h+e,Vi.s+t,Vi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Vi),e.getHSL(ta);const n=Eo(Vi.h,ta.h,t),s=Eo(Vi.s,ta.s,t),r=Eo(Vi.l,ta.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const rn=new Te;Te.NAMES=xm;let v_=0;class _i extends Rs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:v_++}),this.uuid=ti(),this.name="",this.type="Material",this.blending=yr,this.side=ni,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=jc,this.blendDst=$c,this.blendEquation=ms,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Te(0,0,0),this.blendAlpha=0,this.depthFunc=rl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ld,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Is,this.stencilZFail=Is,this.stencilZPass=Is,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==yr&&(n.blending=this.blending),this.side!==ni&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==jc&&(n.blendSrc=this.blendSrc),this.blendDst!==$c&&(n.blendDst=this.blendDst),this.blendEquation!==ms&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==rl&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ld&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Is&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Is&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Is&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class pi extends _i{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=tm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ui=y_();function y_(){const i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),s=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,s[l]=24,s[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,s[l]=-c-1,s[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,s[l]=13,s[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,s[l]=24,s[l|256]=24):(n[l]=31744,n[l|256]=64512,s[l]=13,s[l|256]=13)}const r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;(c&8388608)===0;)c<<=1,u-=8388608;c&=-8388609,u+=947912704,r[l]=c|u}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:s,mantissaTable:r,exponentTable:o,offsetTable:a}}function b_(i){Math.abs(i)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),i=Vt(i,-65504,65504),Ui.floatView[0]=i;const e=Ui.uint32View[0],t=e>>23&511;return Ui.baseTable[t]+((e&8388607)>>Ui.shiftTable[t])}function M_(i){const e=i>>10;return Ui.uint32View[0]=Ui.mantissaTable[Ui.offsetTable[e]+(i&1023)]+Ui.exponentTable[e],Ui.floatView[0]}const S_={toHalfFloat:b_,fromHalfFloat:M_},Nt=new R,na=new ye;class yt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=eu,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ht,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Ms("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)na.fromBufferAttribute(this,t),na.applyMatrix3(e),this.setXY(t,na.x,na.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix3(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix4(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyNormalMatrix(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.transformDirection(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Qn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=lt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Qn(t,this.array)),t}setX(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Qn(t,this.array)),t}setY(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Qn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Qn(t,this.array)),t}setW(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),s=lt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),s=lt(s,this.array),r=lt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==eu&&(e.usage=this.usage),e}}class vm extends yt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class ym extends yt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class _t extends yt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let w_=0;const Bn=new De,rc=new Xe,Hs=new R,Tn=new Ut,Kr=new Ut,$t=new R;class Kt extends Rs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:w_++}),this.uuid=ti(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(pm(e)?ym:vm)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ye().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Bn.makeRotationFromQuaternion(e),this.applyMatrix4(Bn),this}rotateX(e){return Bn.makeRotationX(e),this.applyMatrix4(Bn),this}rotateY(e){return Bn.makeRotationY(e),this.applyMatrix4(Bn),this}rotateZ(e){return Bn.makeRotationZ(e),this.applyMatrix4(Bn),this}translate(e,t,n){return Bn.makeTranslation(e,t,n),this.applyMatrix4(Bn),this}scale(e,t,n){return Bn.makeScale(e,t,n),this.applyMatrix4(Bn),this}lookAt(e){return rc.lookAt(e),rc.updateMatrix(),this.applyMatrix4(rc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hs).negate(),this.translate(Hs.x,Hs.y,Hs.z),this}setFromPoints(e){const t=[];for(let n=0,s=e.length;n<s;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new _t(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ut);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Tn.setFromBufferAttribute(r),this.morphTargetsRelative?($t.addVectors(this.boundingBox.min,Tn.min),this.boundingBox.expandByPoint($t),$t.addVectors(this.boundingBox.max,Tn.max),this.boundingBox.expandByPoint($t)):(this.boundingBox.expandByPoint(Tn.min),this.boundingBox.expandByPoint(Tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new oi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new R,1/0);return}if(e){const n=this.boundingSphere.center;if(Tn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Kr.setFromBufferAttribute(a),this.morphTargetsRelative?($t.addVectors(Tn.min,Kr.min),Tn.expandByPoint($t),$t.addVectors(Tn.max,Kr.max),Tn.expandByPoint($t)):(Tn.expandByPoint(Kr.min),Tn.expandByPoint(Kr.max))}Tn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)$t.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared($t));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)$t.fromBufferAttribute(a,c),l&&(Hs.fromBufferAttribute(e,c),$t.add(Hs)),s=Math.max(s,n.distanceToSquared($t))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,s=t.position.array,r=t.normal.array,o=t.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new yt(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let y=0;y<a;y++)c[y]=new R,u[y]=new R;const h=new R,d=new R,f=new R,g=new ye,x=new ye,m=new ye,p=new R,v=new R;function _(y,E,N){h.fromArray(s,y*3),d.fromArray(s,E*3),f.fromArray(s,N*3),g.fromArray(o,y*2),x.fromArray(o,E*2),m.fromArray(o,N*2),d.sub(h),f.sub(h),x.sub(g),m.sub(g);const B=1/(x.x*m.y-m.x*x.y);!isFinite(B)||(p.copy(d).multiplyScalar(m.y).addScaledVector(f,-x.y).multiplyScalar(B),v.copy(f).multiplyScalar(x.x).addScaledVector(d,-m.x).multiplyScalar(B),c[y].add(p),c[E].add(p),c[N].add(p),u[y].add(v),u[E].add(v),u[N].add(v))}let b=this.groups;b.length===0&&(b=[{start:0,count:n.length}]);for(let y=0,E=b.length;y<E;++y){const N=b[y],B=N.start,P=N.count;for(let O=B,k=B+P;O<k;O+=3)_(n[O+0],n[O+1],n[O+2])}const S=new R,w=new R,M=new R,A=new R;function U(y){M.fromArray(r,y*3),A.copy(M);const E=c[y];S.copy(E),S.sub(M.multiplyScalar(M.dot(E))).normalize(),w.crossVectors(A,E);const B=w.dot(u[y])<0?-1:1;l[y*4]=S.x,l[y*4+1]=S.y,l[y*4+2]=S.z,l[y*4+3]=B}for(let y=0,E=b.length;y<E;++y){const N=b[y],B=N.start,P=N.count;for(let O=B,k=B+P;O<k;O+=3)U(n[O+0]),U(n[O+1]),U(n[O+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new yt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new R,r=new R,o=new R,a=new R,l=new R,c=new R,u=new R,h=new R;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)$t.fromBufferAttribute(e,t),$t.normalize(),e.setXYZ(t,$t.x,$t.y,$t.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let f=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*u;for(let p=0;p<u;p++)d[g++]=c[f++]}return new yt(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Kt,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const bd=new De,cs=new Fr,ia=new oi,Md=new R,Gs=new R,Vs=new R,Ws=new R,oc=new R,sa=new R,ra=new ye,oa=new ye,aa=new ye,Sd=new R,wd=new R,Ed=new R,la=new R,ca=new R;class j extends Xe{constructor(e=new Kt,t=new pi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){sa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(oc.fromBufferAttribute(h,e),o?sa.addScaledVector(oc,u):sa.addScaledVector(oc.sub(t),u))}t.add(sa)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ia.copy(n.boundingSphere),ia.applyMatrix4(r),cs.copy(e.ray).recast(e.near),!(ia.containsPoint(cs.origin)===!1&&(cs.intersectSphere(ia,Md)===null||cs.origin.distanceToSquared(Md)>(e.far-e.near)**2))&&(bd.copy(r).invert(),cs.copy(e.ray).applyMatrix4(bd),!(n.boundingBox!==null&&cs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,cs)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){const m=d[g],p=o[m.materialIndex],v=Math.max(m.start,f.start),_=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let b=v,S=_;b<S;b+=3){const w=a.getX(b),M=a.getX(b+1),A=a.getX(b+2);s=ua(this,p,e,n,c,u,h,w,M,A),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){const v=a.getX(m),_=a.getX(m+1),b=a.getX(m+2);s=ua(this,o,e,n,c,u,h,v,_,b),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){const m=d[g],p=o[m.materialIndex],v=Math.max(m.start,f.start),_=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let b=v,S=_;b<S;b+=3){const w=b,M=b+1,A=b+2;s=ua(this,p,e,n,c,u,h,w,M,A),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){const v=m,_=m+1,b=m+2;s=ua(this,o,e,n,c,u,h,v,_,b),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function E_(i,e,t,n,s,r,o,a){let l;if(e.side===gn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===ni,a),l===null)return null;ca.copy(a),ca.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(ca);return c<t.near||c>t.far?null:{distance:c,point:ca.clone(),object:i}}function ua(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,Gs),i.getVertexPosition(l,Vs),i.getVertexPosition(c,Ws);const u=E_(i,e,t,n,Gs,Vs,Ws,la);if(u){s&&(ra.fromBufferAttribute(s,a),oa.fromBufferAttribute(s,l),aa.fromBufferAttribute(s,c),u.uv=fn.getInterpolation(la,Gs,Vs,Ws,ra,oa,aa,new ye)),r&&(ra.fromBufferAttribute(r,a),oa.fromBufferAttribute(r,l),aa.fromBufferAttribute(r,c),u.uv1=fn.getInterpolation(la,Gs,Vs,Ws,ra,oa,aa,new ye),u.uv2=u.uv1),o&&(Sd.fromBufferAttribute(o,a),wd.fromBufferAttribute(o,l),Ed.fromBufferAttribute(o,c),u.normal=fn.getInterpolation(la,Gs,Vs,Ws,Sd,wd,Ed,new R),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new R,materialIndex:0};fn.getNormal(Gs,Vs,Ws,h.normal),u.face=h}return u}class de extends Kt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new _t(c,3)),this.setAttribute("normal",new _t(u,3)),this.setAttribute("uv",new _t(h,2));function g(x,m,p,v,_,b,S,w,M,A,U){const y=b/M,E=S/A,N=b/2,B=S/2,P=w/2,O=M+1,k=A+1;let V=0,q=0;const H=new R;for(let Z=0;Z<k;Z++){const Q=Z*E-B;for(let ae=0;ae<O;ae++){const pe=ae*y-N;H[x]=pe*v,H[m]=Q*_,H[p]=P,c.push(H.x,H.y,H.z),H[x]=0,H[m]=0,H[p]=w>0?1:-1,u.push(H.x,H.y,H.z),h.push(ae/M),h.push(1-Z/A),V+=1}}for(let Z=0;Z<A;Z++)for(let Q=0;Q<M;Q++){const ae=d+Q+O*Z,pe=d+Q+O*(Z+1),W=d+(Q+1)+O*(Z+1),J=d+(Q+1)+O*Z;l.push(ae,pe,J),l.push(pe,W,J),q+=6}a.addGroup(f,q,U),f+=q,d+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new de(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Pr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function un(i){const e={};for(let t=0;t<i.length;t++){const n=Pr(i[t]);for(const s in n)e[s]=n[s]}return e}function T_(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function bm(i){return i.getRenderTarget()===null?i.outputColorSpace:at.workingColorSpace}const A_={clone:Pr,merge:un};var R_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,C_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Zt extends _i{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=R_,this.fragmentShader=C_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Pr(e.uniforms),this.uniformsGroups=T_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Mm extends Xe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new De,this.projectionMatrix=new De,this.projectionMatrixInverse=new De,this.coordinateSystem=Oi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Wi=new R,Td=new ye,Ad=new ye;class hn extends Mm{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Cr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(wo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Cr*2*Math.atan(Math.tan(wo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Wi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Wi.x,Wi.y).multiplyScalar(-e/Wi.z),Wi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Wi.x,Wi.y).multiplyScalar(-e/Wi.z)}getViewSize(e,t){return this.getViewBounds(e,Td,Ad),t.subVectors(Ad,Td)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(wo*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Xs=-90,qs=1;class P_ extends Xe{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new hn(Xs,qs,e,t);s.layers=this.layers,this.add(s);const r=new hn(Xs,qs,e,t);r.layers=this.layers,this.add(r);const o=new hn(Xs,qs,e,t);o.layers=this.layers,this.add(o);const a=new hn(Xs,qs,e,t);a.layers=this.layers,this.add(a);const l=new hn(Xs,qs,e,t);l.layers=this.layers,this.add(l);const c=new hn(Xs,qs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===Oi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ul)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Sm extends Ht{constructor(e,t,n,s,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:wr,super(e,t,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class L_ extends Mn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];t.encoding!==void 0&&(Ms("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===bs?Et:Gn),this.texture=new Sm(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ut}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new de(5,5,5),r=new Zt({name:"CubemapFromEquirect",uniforms:Pr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:gn,blending:ei});r.uniforms.tEquirect.value=t;const o=new j(s,r),a=t.minFilter;return t.minFilter===Fi&&(t.minFilter=ut),new P_(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}const ac=new R,I_=new R,D_=new Ye;class Zn{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=ac.subVectors(n,t).cross(I_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ac),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||D_.getNormalMatrix(e),s=this.coplanarPoint(ac).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const us=new oi,ha=new R;class Hu{constructor(e=new Zn,t=new Zn,n=new Zn,s=new Zn,r=new Zn,o=new Zn){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Oi){const n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],h=s[6],d=s[7],f=s[8],g=s[9],x=s[10],m=s[11],p=s[12],v=s[13],_=s[14],b=s[15];if(n[0].setComponents(l-r,d-c,m-f,b-p).normalize(),n[1].setComponents(l+r,d+c,m+f,b+p).normalize(),n[2].setComponents(l+o,d+u,m+g,b+v).normalize(),n[3].setComponents(l-o,d-u,m-g,b-v).normalize(),n[4].setComponents(l-a,d-h,m-x,b-_).normalize(),t===Oi)n[5].setComponents(l+a,d+h,m+x,b+_).normalize();else if(t===ul)n[5].setComponents(a,h,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),us.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),us.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(us)}intersectsSprite(e){return us.center.set(0,0,0),us.radius=.7071067811865476,us.applyMatrix4(e.matrixWorld),this.intersectsSphere(us)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(ha.x=s.normal.x>0?e.max.x:e.min.x,ha.y=s.normal.y>0?e.max.y:e.min.y,ha.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ha)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function wm(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function U_(i,e){const t=e.isWebGL2,n=new WeakMap;function s(c,u){const h=c.array,d=c.usage,f=h.byteLength,g=i.createBuffer();i.bindBuffer(u,g),i.bufferData(u,h,d),c.onUploadCallback();let x;if(h instanceof Float32Array)x=i.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)x=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)x=i.SHORT;else if(h instanceof Uint32Array)x=i.UNSIGNED_INT;else if(h instanceof Int32Array)x=i.INT;else if(h instanceof Int8Array)x=i.BYTE;else if(h instanceof Uint8Array)x=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)x=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:x,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:f}}function r(c,u,h){const d=u.array,f=u._updateRange,g=u.updateRanges;if(i.bindBuffer(h,c),f.count===-1&&g.length===0&&i.bufferSubData(h,0,d),g.length!==0){for(let x=0,m=g.length;x<m;x++){const p=g[x];t?i.bufferSubData(h,p.start*d.BYTES_PER_ELEMENT,d,p.start,p.count):i.bufferSubData(h,p.start*d.BYTES_PER_ELEMENT,d.subarray(p.start,p.start+p.count))}u.clearUpdateRanges()}f.count!==-1&&(t?i.bufferSubData(h,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):i.bufferSubData(h,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(i.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);if(h===void 0)n.set(c,s(c,u));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,c,u),h.version=c.version}}return{get:o,remove:a,update:l}}class Fn extends Kt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,h=e/a,d=t/l,f=[],g=[],x=[],m=[];for(let p=0;p<u;p++){const v=p*d-o;for(let _=0;_<c;_++){const b=_*h-r;g.push(b,-v,0),x.push(0,0,1),m.push(_/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<a;v++){const _=v+c*p,b=v+c*(p+1),S=v+1+c*(p+1),w=v+1+c*p;f.push(_,b,w),f.push(b,S,w)}this.setIndex(f),this.setAttribute("position",new _t(g,3)),this.setAttribute("normal",new _t(x,3)),this.setAttribute("uv",new _t(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fn(e.width,e.height,e.widthSegments,e.heightSegments)}}var N_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,F_=`#ifdef USE_ALPHAHASH
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
#endif`,O_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,B_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,k_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,z_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,H_=`#ifdef USE_AOMAP
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
#endif`,G_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,V_=`#ifdef USE_BATCHING
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
#endif`,W_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,X_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,q_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,j_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,$_=`#ifdef USE_IRIDESCENCE
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
#endif`,Y_=`#ifdef USE_BUMPMAP
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
#endif`,K_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Z_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Q_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,J_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ex=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,tx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,nx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,ix=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,sx=`#define PI 3.141592653589793
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
} // validated`,rx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ox=`vec3 transformedNormal = objectNormal;
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
#endif`,ax=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,lx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ux=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,hx="gl_FragColor = linearToOutputTexel( gl_FragColor );",dx=`
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
}`,fx=`#ifdef USE_ENVMAP
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
#endif`,px=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,mx=`#ifdef USE_ENVMAP
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
#endif`,gx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_x=`#ifdef USE_ENVMAP
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
#endif`,xx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,yx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Mx=`#ifdef USE_GRADIENTMAP
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
}`,Sx=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,wx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ex=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Tx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ax=`uniform bool receiveShadow;
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
#endif`,Rx=`#ifdef USE_ENVMAP
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
#endif`,Cx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Px=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Lx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ix=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Dx=`PhysicalMaterial material;
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
#endif`,Ux=`struct PhysicalMaterial {
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
}`,Nx=`
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
#endif`,Fx=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ox=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Bx=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,kx=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zx=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Hx=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Gx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Vx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Wx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Xx=`#if defined( USE_POINTS_UV )
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
#endif`,qx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$x=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Yx=`#ifdef USE_MORPHNORMALS
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
#endif`,Kx=`#ifdef USE_MORPHTARGETS
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
#endif`,Zx=`#ifdef USE_MORPHTARGETS
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
#endif`,Qx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Jx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ev=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,iv=`#ifdef USE_NORMALMAP
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
#endif`,sv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,rv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ov=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,av=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,lv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,uv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,hv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,pv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,mv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,gv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_v=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,xv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,vv=`float getShadowMask() {
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
}`,yv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bv=`#ifdef USE_SKINNING
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
#endif`,Mv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Sv=`#ifdef USE_SKINNING
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
#endif`,wv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ev=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Tv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Av=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Rv=`#ifdef USE_TRANSMISSION
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
#endif`,Cv=`#ifdef USE_TRANSMISSION
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
#endif`,Pv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Iv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Uv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Nv=`uniform sampler2D t2D;
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
}`,Fv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ov=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Bv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zv=`#include <common>
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
}`,Hv=`#if DEPTH_PACKING == 3200
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
}`,Gv=`#define DISTANCE
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
}`,Vv=`#define DISTANCE
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
}`,Wv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Xv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qv=`uniform float scale;
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
}`,jv=`uniform vec3 diffuse;
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
}`,$v=`#include <common>
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
}`,Yv=`uniform vec3 diffuse;
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
}`,Kv=`#define LAMBERT
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
}`,Zv=`#define LAMBERT
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
}`,Qv=`#define MATCAP
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
}`,Jv=`#define MATCAP
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
}`,ey=`#define NORMAL
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
}`,ty=`#define NORMAL
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
}`,ny=`#define PHONG
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
}`,iy=`#define PHONG
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
}`,sy=`#define STANDARD
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
}`,ry=`#define STANDARD
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
}`,oy=`#define TOON
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
}`,ay=`#define TOON
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
}`,ly=`uniform float size;
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
}`,cy=`uniform vec3 diffuse;
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
}`,uy=`#include <common>
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
}`,hy=`uniform vec3 color;
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
}`,dy=`uniform float rotation;
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
}`,fy=`uniform vec3 diffuse;
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
}`,We={alphahash_fragment:N_,alphahash_pars_fragment:F_,alphamap_fragment:O_,alphamap_pars_fragment:B_,alphatest_fragment:k_,alphatest_pars_fragment:z_,aomap_fragment:H_,aomap_pars_fragment:G_,batching_pars_vertex:V_,batching_vertex:W_,begin_vertex:X_,beginnormal_vertex:q_,bsdfs:j_,iridescence_fragment:$_,bumpmap_pars_fragment:Y_,clipping_planes_fragment:K_,clipping_planes_pars_fragment:Z_,clipping_planes_pars_vertex:Q_,clipping_planes_vertex:J_,color_fragment:ex,color_pars_fragment:tx,color_pars_vertex:nx,color_vertex:ix,common:sx,cube_uv_reflection_fragment:rx,defaultnormal_vertex:ox,displacementmap_pars_vertex:ax,displacementmap_vertex:lx,emissivemap_fragment:cx,emissivemap_pars_fragment:ux,colorspace_fragment:hx,colorspace_pars_fragment:dx,envmap_fragment:fx,envmap_common_pars_fragment:px,envmap_pars_fragment:mx,envmap_pars_vertex:gx,envmap_physical_pars_fragment:Rx,envmap_vertex:_x,fog_vertex:xx,fog_pars_vertex:vx,fog_fragment:yx,fog_pars_fragment:bx,gradientmap_pars_fragment:Mx,lightmap_fragment:Sx,lightmap_pars_fragment:wx,lights_lambert_fragment:Ex,lights_lambert_pars_fragment:Tx,lights_pars_begin:Ax,lights_toon_fragment:Cx,lights_toon_pars_fragment:Px,lights_phong_fragment:Lx,lights_phong_pars_fragment:Ix,lights_physical_fragment:Dx,lights_physical_pars_fragment:Ux,lights_fragment_begin:Nx,lights_fragment_maps:Fx,lights_fragment_end:Ox,logdepthbuf_fragment:Bx,logdepthbuf_pars_fragment:kx,logdepthbuf_pars_vertex:zx,logdepthbuf_vertex:Hx,map_fragment:Gx,map_pars_fragment:Vx,map_particle_fragment:Wx,map_particle_pars_fragment:Xx,metalnessmap_fragment:qx,metalnessmap_pars_fragment:jx,morphcolor_vertex:$x,morphnormal_vertex:Yx,morphtarget_pars_vertex:Kx,morphtarget_vertex:Zx,normal_fragment_begin:Qx,normal_fragment_maps:Jx,normal_pars_fragment:ev,normal_pars_vertex:tv,normal_vertex:nv,normalmap_pars_fragment:iv,clearcoat_normal_fragment_begin:sv,clearcoat_normal_fragment_maps:rv,clearcoat_pars_fragment:ov,iridescence_pars_fragment:av,opaque_fragment:lv,packing:cv,premultiplied_alpha_fragment:uv,project_vertex:hv,dithering_fragment:dv,dithering_pars_fragment:fv,roughnessmap_fragment:pv,roughnessmap_pars_fragment:mv,shadowmap_pars_fragment:gv,shadowmap_pars_vertex:_v,shadowmap_vertex:xv,shadowmask_pars_fragment:vv,skinbase_vertex:yv,skinning_pars_vertex:bv,skinning_vertex:Mv,skinnormal_vertex:Sv,specularmap_fragment:wv,specularmap_pars_fragment:Ev,tonemapping_fragment:Tv,tonemapping_pars_fragment:Av,transmission_fragment:Rv,transmission_pars_fragment:Cv,uv_pars_fragment:Pv,uv_pars_vertex:Lv,uv_vertex:Iv,worldpos_vertex:Dv,background_vert:Uv,background_frag:Nv,backgroundCube_vert:Fv,backgroundCube_frag:Ov,cube_vert:Bv,cube_frag:kv,depth_vert:zv,depth_frag:Hv,distanceRGBA_vert:Gv,distanceRGBA_frag:Vv,equirect_vert:Wv,equirect_frag:Xv,linedashed_vert:qv,linedashed_frag:jv,meshbasic_vert:$v,meshbasic_frag:Yv,meshlambert_vert:Kv,meshlambert_frag:Zv,meshmatcap_vert:Qv,meshmatcap_frag:Jv,meshnormal_vert:ey,meshnormal_frag:ty,meshphong_vert:ny,meshphong_frag:iy,meshphysical_vert:sy,meshphysical_frag:ry,meshtoon_vert:oy,meshtoon_frag:ay,points_vert:ly,points_frag:cy,shadow_vert:uy,shadow_frag:hy,sprite_vert:dy,sprite_frag:fy},le={common:{diffuse:{value:new Te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new Te(16777215)},opacity:{value:1},center:{value:new ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},fi={basic:{uniforms:un([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:un([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Te(0)}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:un([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Te(0)},specular:{value:new Te(1118481)},shininess:{value:30}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:un([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new Te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:un([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new Te(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:un([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:un([le.points,le.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:un([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:un([le.common,le.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:un([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:un([le.sprite,le.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distanceRGBA:{uniforms:un([le.common,le.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distanceRGBA_vert,fragmentShader:We.distanceRGBA_frag},shadow:{uniforms:un([le.lights,le.fog,{color:{value:new Te(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};fi.physical={uniforms:un([fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new Te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new Te(0)},specularColor:{value:new Te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};const da={r:0,b:0,g:0};function py(i,e,t,n,s,r,o){const a=new Te(0);let l=r===!0?0:1,c,u,h=null,d=0,f=null;function g(m,p){let v=!1,_=p.isScene===!0?p.background:null;_&&_.isTexture&&(_=(p.backgroundBlurriness>0?t:e).get(_)),_===null?x(a,l):_&&_.isColor&&(x(_,1),v=!0);const b=i.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||v)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),_&&(_.isCubeTexture||_.mapping===Ml)?(u===void 0&&(u=new j(new de(1,1,1),new Zt({name:"BackgroundCubeMaterial",uniforms:Pr(fi.backgroundCube.uniforms),vertexShader:fi.backgroundCube.vertexShader,fragmentShader:fi.backgroundCube.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(S,w,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.toneMapped=at.getTransfer(_.colorSpace)!==xt,(h!==_||d!==_.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,h=_,d=_.version,f=i.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new j(new Fn(2,2),new Zt({name:"BackgroundMaterial",uniforms:Pr(fi.background.uniforms),vertexShader:fi.background.vertexShader,fragmentShader:fi.background.fragmentShader,side:ni,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=at.getTransfer(_.colorSpace)!==xt,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||d!==_.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=_,d=_.version,f=i.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function x(m,p){m.getRGB(da,bm(i)),n.buffers.color.setClear(da.r,da.g,da.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(m,p=1){a.set(m),l=p,x(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,x(a,l)},render:g}}function my(i,e,t,n){const s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=m(null);let c=l,u=!1;function h(P,O,k,V,q){let H=!1;if(o){const Z=x(V,k,O);c!==Z&&(c=Z,f(c.object)),H=p(P,V,k,q),H&&v(P,V,k,q)}else{const Z=O.wireframe===!0;(c.geometry!==V.id||c.program!==k.id||c.wireframe!==Z)&&(c.geometry=V.id,c.program=k.id,c.wireframe=Z,H=!0)}q!==null&&t.update(q,i.ELEMENT_ARRAY_BUFFER),(H||u)&&(u=!1,A(P,O,k,V),q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function d(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function f(P){return n.isWebGL2?i.bindVertexArray(P):r.bindVertexArrayOES(P)}function g(P){return n.isWebGL2?i.deleteVertexArray(P):r.deleteVertexArrayOES(P)}function x(P,O,k){const V=k.wireframe===!0;let q=a[P.id];q===void 0&&(q={},a[P.id]=q);let H=q[O.id];H===void 0&&(H={},q[O.id]=H);let Z=H[V];return Z===void 0&&(Z=m(d()),H[V]=Z),Z}function m(P){const O=[],k=[],V=[];for(let q=0;q<s;q++)O[q]=0,k[q]=0,V[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:k,attributeDivisors:V,object:P,attributes:{},index:null}}function p(P,O,k,V){const q=c.attributes,H=O.attributes;let Z=0;const Q=k.getAttributes();for(const ae in Q)if(Q[ae].location>=0){const W=q[ae];let J=H[ae];if(J===void 0&&(ae==="instanceMatrix"&&P.instanceMatrix&&(J=P.instanceMatrix),ae==="instanceColor"&&P.instanceColor&&(J=P.instanceColor)),W===void 0||W.attribute!==J||J&&W.data!==J.data)return!0;Z++}return c.attributesNum!==Z||c.index!==V}function v(P,O,k,V){const q={},H=O.attributes;let Z=0;const Q=k.getAttributes();for(const ae in Q)if(Q[ae].location>=0){let W=H[ae];W===void 0&&(ae==="instanceMatrix"&&P.instanceMatrix&&(W=P.instanceMatrix),ae==="instanceColor"&&P.instanceColor&&(W=P.instanceColor));const J={};J.attribute=W,W&&W.data&&(J.data=W.data),q[ae]=J,Z++}c.attributes=q,c.attributesNum=Z,c.index=V}function _(){const P=c.newAttributes;for(let O=0,k=P.length;O<k;O++)P[O]=0}function b(P){S(P,0)}function S(P,O){const k=c.newAttributes,V=c.enabledAttributes,q=c.attributeDivisors;k[P]=1,V[P]===0&&(i.enableVertexAttribArray(P),V[P]=1),q[P]!==O&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,O),q[P]=O)}function w(){const P=c.newAttributes,O=c.enabledAttributes;for(let k=0,V=O.length;k<V;k++)O[k]!==P[k]&&(i.disableVertexAttribArray(k),O[k]=0)}function M(P,O,k,V,q,H,Z){Z===!0?i.vertexAttribIPointer(P,O,k,q,H):i.vertexAttribPointer(P,O,k,V,q,H)}function A(P,O,k,V){if(n.isWebGL2===!1&&(P.isInstancedMesh||V.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();const q=V.attributes,H=k.getAttributes(),Z=O.defaultAttributeValues;for(const Q in H){const ae=H[Q];if(ae.location>=0){let pe=q[Q];if(pe===void 0&&(Q==="instanceMatrix"&&P.instanceMatrix&&(pe=P.instanceMatrix),Q==="instanceColor"&&P.instanceColor&&(pe=P.instanceColor)),pe!==void 0){const W=pe.normalized,J=pe.itemSize,ce=t.get(pe);if(ce===void 0)continue;const me=ce.buffer,ve=ce.type,fe=ce.bytesPerElement,Be=n.isWebGL2===!0&&(ve===i.INT||ve===i.UNSIGNED_INT||pe.gpuType===So);if(pe.isInterleavedBufferAttribute){const Pe=pe.data,z=Pe.stride,Pt=pe.offset;if(Pe.isInstancedInterleavedBuffer){for(let Me=0;Me<ae.locationSize;Me++)S(ae.location+Me,Pe.meshPerAttribute);P.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=Pe.meshPerAttribute*Pe.count)}else for(let Me=0;Me<ae.locationSize;Me++)b(ae.location+Me);i.bindBuffer(i.ARRAY_BUFFER,me);for(let Me=0;Me<ae.locationSize;Me++)M(ae.location+Me,J/ae.locationSize,ve,W,z*fe,(Pt+J/ae.locationSize*Me)*fe,Be)}else{if(pe.isInstancedBufferAttribute){for(let Pe=0;Pe<ae.locationSize;Pe++)S(ae.location+Pe,pe.meshPerAttribute);P.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let Pe=0;Pe<ae.locationSize;Pe++)b(ae.location+Pe);i.bindBuffer(i.ARRAY_BUFFER,me);for(let Pe=0;Pe<ae.locationSize;Pe++)M(ae.location+Pe,J/ae.locationSize,ve,W,J*fe,J/ae.locationSize*Pe*fe,Be)}}else if(Z!==void 0){const W=Z[Q];if(W!==void 0)switch(W.length){case 2:i.vertexAttrib2fv(ae.location,W);break;case 3:i.vertexAttrib3fv(ae.location,W);break;case 4:i.vertexAttrib4fv(ae.location,W);break;default:i.vertexAttrib1fv(ae.location,W)}}}}w()}function U(){N();for(const P in a){const O=a[P];for(const k in O){const V=O[k];for(const q in V)g(V[q].object),delete V[q];delete O[k]}delete a[P]}}function y(P){if(a[P.id]===void 0)return;const O=a[P.id];for(const k in O){const V=O[k];for(const q in V)g(V[q].object),delete V[q];delete O[k]}delete a[P.id]}function E(P){for(const O in a){const k=a[O];if(k[P.id]===void 0)continue;const V=k[P.id];for(const q in V)g(V[q].object),delete V[q];delete k[P.id]}}function N(){B(),u=!0,c!==l&&(c=l,f(c.object))}function B(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:N,resetDefaultState:B,dispose:U,releaseStatesOfGeometry:y,releaseStatesOfProgram:E,initAttributes:_,enableAttribute:b,disableUnusedAttributes:w}}function gy(i,e,t,n){const s=n.isWebGL2;let r;function o(u){r=u}function a(u,h){i.drawArrays(r,u,h),t.update(h,r,1)}function l(u,h,d){if(d===0)return;let f,g;if(s)f=i,g="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[g](r,u,h,d),t.update(h,r,d)}function c(u,h,d){if(d===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<d;g++)this.render(u[g],h[g]);else{f.multiDrawArraysWEBGL(r,u,0,h,0,d);let g=0;for(let x=0;x<d;x++)g+=h[x];t.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function _y(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const M=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(M){if(M==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext!="undefined"&&i.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),x=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),p=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),_=d>0,b=o||e.has("OES_texture_float"),S=_&&b,w=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:g,maxAttributes:x,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:v,vertexTextures:_,floatFragmentTextures:b,floatVertexTextures:S,maxSamples:w}}function xy(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new Zn,a=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||s;return s=d,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const g=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,p=i.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const v=r?0:n,_=v*4;let b=p.clippingState||null;l.value=b,b=u(g,d,_,f);for(let S=0;S!==_;++S)b[S]=t[S];p.clippingState=b,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,g){const x=h!==null?h.length:0;let m=null;if(x!==0){if(m=l.value,g!==!0||m===null){const p=f+x*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let _=0,b=f;_!==x;++_,b+=4)o.copy(h[_]).applyMatrix4(v,a),o.normal.toArray(m,b),m[b+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function vy(i){let e=new WeakMap;function t(o,a){return a===Yc?o.mapping=wr:a===Kc&&(o.mapping=Er),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Yc||a===Kc)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new L_(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class yi extends Mm{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const gr=4,Rd=[.125,.215,.35,.446,.526,.582],gs=20,lc=new yi,Cd=new Te;let cc=null,uc=0,hc=0;const fs=(1+Math.sqrt(5))/2,js=1/fs,Pd=[new R(1,1,1),new R(-1,1,1),new R(1,1,-1),new R(-1,1,-1),new R(0,fs,js),new R(0,fs,-js),new R(js,0,fs),new R(-js,0,fs),new R(fs,js,0),new R(-fs,js,0)];class Ld{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){cc=this._renderer.getRenderTarget(),uc=this._renderer.getActiveCubeFace(),hc=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ud(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Dd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(cc,uc,hc),e.scissorTest=!1,fa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===wr||e.mapping===Er?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),cc=this._renderer.getRenderTarget(),uc=this._renderer.getActiveCubeFace(),hc=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:ut,minFilter:ut,generateMipmaps:!1,type:Xn,format:kt,colorSpace:Yt,depthBuffer:!1},s=Id(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Id(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=yy(r)),this._blurMaterial=by(r,e,t)}return s}_compileMaterial(e){const t=new j(this._lodPlanes[0],e);this._renderer.compile(t,lc)}_sceneToCubeUV(e,t,n,s){const a=new hn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Cd),u.toneMapping=ns,u.autoClear=!1;const f=new pi({name:"PMREM.Background",side:gn,depthWrite:!1,depthTest:!1}),g=new j(new de,f);let x=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,x=!0):(f.color.copy(Cd),x=!0);for(let p=0;p<6;p++){const v=p%3;v===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):v===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const _=this._cubeSize;fa(s,v*_,p>2?_:0,_,_),u.setRenderTarget(s),x&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===wr||e.mapping===Er;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ud()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Dd());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new j(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;fa(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,lc)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Pd[(s-1)%Pd.length];this._blur(e,s-1,s,r,o)}t.autoClear=n}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new j(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*gs-1),x=r/g,m=isFinite(r)?1+Math.floor(u*x):gs;m>gs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${gs}`);const p=[];let v=0;for(let M=0;M<gs;++M){const A=M/x,U=Math.exp(-A*A/2);p.push(U),M===0?v+=U:M<m&&(v+=2*U)}for(let M=0;M<p.length;M++)p[M]=p[M]/v;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:_}=this;d.dTheta.value=g,d.mipInt.value=_-n;const b=this._sizeLods[s],S=3*b*(s>_-gr?s-_+gr:0),w=4*(this._cubeSize-b);fa(t,S,w,3*b,2*b),l.setRenderTarget(t),l.render(h,lc)}}function yy(i){const e=[],t=[],n=[];let s=i;const r=i-gr+1+Rd.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>i-gr?l=Rd[o-i+gr-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,x=3,m=2,p=1,v=new Float32Array(x*g*f),_=new Float32Array(m*g*f),b=new Float32Array(p*g*f);for(let w=0;w<f;w++){const M=w%3*2/3-1,A=w>2?0:-1,U=[M,A,0,M+2/3,A,0,M+2/3,A+1,0,M,A,0,M+2/3,A+1,0,M,A+1,0];v.set(U,x*g*w),_.set(d,m*g*w);const y=[w,w,w,w,w,w];b.set(y,p*g*w)}const S=new Kt;S.setAttribute("position",new yt(v,x)),S.setAttribute("uv",new yt(_,m)),S.setAttribute("faceIndex",new yt(b,p)),e.push(S),s>gr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Id(i,e,t){const n=new Mn(i,e,t);return n.texture.mapping=Ml,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function fa(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function by(i,e,t){const n=new Float32Array(gs),s=new R(0,1,0);return new Zt({name:"SphericalGaussianBlur",defines:{n:gs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Gu(),fragmentShader:`

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
		`,blending:ei,depthTest:!1,depthWrite:!1})}function Dd(){return new Zt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Gu(),fragmentShader:`

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
		`,blending:ei,depthTest:!1,depthWrite:!1})}function Ud(){return new Zt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Gu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ei,depthTest:!1,depthWrite:!1})}function Gu(){return`

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
	`}function My(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Yc||l===Kc,u=l===wr||l===Er;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new Ld(i)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||u&&h&&s(h)){t===null&&(t=new Ld(i));const d=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",r),d.texture}else return null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Sy(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function wy(i,e,t,n){const s={},r=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const x=d.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)e.remove(x[m])}d.removeEventListener("dispose",o),delete s[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const g in d)e.update(d[g],i.ARRAY_BUFFER);const f=h.morphAttributes;for(const g in f){const x=f[g];for(let m=0,p=x.length;m<p;m++)e.update(x[m],i.ARRAY_BUFFER)}}function c(h){const d=[],f=h.index,g=h.attributes.position;let x=0;if(f!==null){const v=f.array;x=f.version;for(let _=0,b=v.length;_<b;_+=3){const S=v[_+0],w=v[_+1],M=v[_+2];d.push(S,w,w,M,M,S)}}else if(g!==void 0){const v=g.array;x=g.version;for(let _=0,b=v.length/3-1;_<b;_+=3){const S=_+0,w=_+1,M=_+2;d.push(S,w,w,M,M,S)}}else return;const m=new(pm(d)?ym:vm)(d,1);m.version=x;const p=r.get(h);p&&e.remove(p),r.set(h,m)}function u(h){const d=r.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function Ey(i,e,t,n){const s=n.isWebGL2;let r;function o(f){r=f}let a,l;function c(f){a=f.type,l=f.bytesPerElement}function u(f,g){i.drawElements(r,g,a,f*l),t.update(g,r,1)}function h(f,g,x){if(x===0)return;let m,p;if(s)m=i,p="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](r,g,a,f*l,x),t.update(g,r,x)}function d(f,g,x){if(x===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<x;p++)this.render(f[p]/l,g[p]);else{m.multiDrawElementsWEBGL(r,g,0,a,f,0,x);let p=0;for(let v=0;v<x;v++)p+=g[v];t.update(p,r,1)}}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=h,this.renderMultiDraw=d}function Ty(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Ay(i,e){return i[0]-e[0]}function Ry(i,e){return Math.abs(e[1])-Math.abs(i[1])}function Cy(i,e,t){const n={},s=new Float32Array(8),r=new WeakMap,o=new gt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,h){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const f=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=f!==void 0?f.length:0;let x=r.get(u);if(x===void 0||x.count!==g){let P=function(){N.dispose(),r.delete(u),u.removeEventListener("dispose",P)};x!==void 0&&x.texture.dispose();const v=u.morphAttributes.position!==void 0,_=u.morphAttributes.normal!==void 0,b=u.morphAttributes.color!==void 0,S=u.morphAttributes.position||[],w=u.morphAttributes.normal||[],M=u.morphAttributes.color||[];let A=0;v===!0&&(A=1),_===!0&&(A=2),b===!0&&(A=3);let U=u.attributes.position.count*A,y=1;U>e.maxTextureSize&&(y=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const E=new Float32Array(U*y*4*g),N=new _m(E,U,y,g);N.type=ht,N.needsUpdate=!0;const B=A*4;for(let O=0;O<g;O++){const k=S[O],V=w[O],q=M[O],H=U*y*4*O;for(let Z=0;Z<k.count;Z++){const Q=Z*B;v===!0&&(o.fromBufferAttribute(k,Z),E[H+Q+0]=o.x,E[H+Q+1]=o.y,E[H+Q+2]=o.z,E[H+Q+3]=0),_===!0&&(o.fromBufferAttribute(V,Z),E[H+Q+4]=o.x,E[H+Q+5]=o.y,E[H+Q+6]=o.z,E[H+Q+7]=0),b===!0&&(o.fromBufferAttribute(q,Z),E[H+Q+8]=o.x,E[H+Q+9]=o.y,E[H+Q+10]=o.z,E[H+Q+11]=q.itemSize===4?o.w:1)}}x={count:g,texture:N,size:new ye(U,y)},r.set(u,x),u.addEventListener("dispose",P)}let m=0;for(let v=0;v<d.length;v++)m+=d[v];const p=u.morphTargetsRelative?1:1-m;h.getUniforms().setValue(i,"morphTargetBaseInfluence",p),h.getUniforms().setValue(i,"morphTargetInfluences",d),h.getUniforms().setValue(i,"morphTargetsTexture",x.texture,t),h.getUniforms().setValue(i,"morphTargetsTextureSize",x.size)}else{const f=d===void 0?0:d.length;let g=n[u.id];if(g===void 0||g.length!==f){g=[];for(let _=0;_<f;_++)g[_]=[_,0];n[u.id]=g}for(let _=0;_<f;_++){const b=g[_];b[0]=_,b[1]=d[_]}g.sort(Ry);for(let _=0;_<8;_++)_<f&&g[_][1]?(a[_][0]=g[_][0],a[_][1]=g[_][1]):(a[_][0]=Number.MAX_SAFE_INTEGER,a[_][1]=0);a.sort(Ay);const x=u.morphAttributes.position,m=u.morphAttributes.normal;let p=0;for(let _=0;_<8;_++){const b=a[_],S=b[0],w=b[1];S!==Number.MAX_SAFE_INTEGER&&w?(x&&u.getAttribute("morphTarget"+_)!==x[S]&&u.setAttribute("morphTarget"+_,x[S]),m&&u.getAttribute("morphNormal"+_)!==m[S]&&u.setAttribute("morphNormal"+_,m[S]),s[_]=w,p+=w):(x&&u.hasAttribute("morphTarget"+_)===!0&&u.deleteAttribute("morphTarget"+_),m&&u.hasAttribute("morphNormal"+_)===!0&&u.deleteAttribute("morphNormal"+_),s[_]=0)}const v=u.morphTargetsRelative?1:1-p;h.getUniforms().setValue(i,"morphTargetBaseInfluence",v),h.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function Py(i,e,t,n){let s=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return h}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}class Em extends Ht{constructor(e,t,n,s,r,o,a,l,c,u){if(u=u!==void 0?u:ys,u!==ys&&u!==Ar)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===ys&&(n=In),n===void 0&&u===Ar&&(n=vs),super(null,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:st,this.minFilter=l!==void 0?l:st,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Tm=new Ht,Am=new Em(1,1);Am.compareFunction=dm;const Rm=new _m,Cm=new c_,Pm=new Sm,Nd=[],Fd=[],Od=new Float32Array(16),Bd=new Float32Array(9),kd=new Float32Array(4);function Or(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Nd[s];if(r===void 0&&(r=new Float32Array(s),Nd[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Xt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function qt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Tl(i,e){let t=Fd[e];t===void 0&&(t=new Int32Array(e),Fd[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Ly(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Iy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;i.uniform2fv(this.addr,e),qt(t,e)}}function Dy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Xt(t,e))return;i.uniform3fv(this.addr,e),qt(t,e)}}function Uy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;i.uniform4fv(this.addr,e),qt(t,e)}}function Ny(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Xt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),qt(t,e)}else{if(Xt(t,n))return;kd.set(n),i.uniformMatrix2fv(this.addr,!1,kd),qt(t,n)}}function Fy(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Xt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),qt(t,e)}else{if(Xt(t,n))return;Bd.set(n),i.uniformMatrix3fv(this.addr,!1,Bd),qt(t,n)}}function Oy(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Xt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),qt(t,e)}else{if(Xt(t,n))return;Od.set(n),i.uniformMatrix4fv(this.addr,!1,Od),qt(t,n)}}function By(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function ky(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;i.uniform2iv(this.addr,e),qt(t,e)}}function zy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;i.uniform3iv(this.addr,e),qt(t,e)}}function Hy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;i.uniform4iv(this.addr,e),qt(t,e)}}function Gy(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Vy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;i.uniform2uiv(this.addr,e),qt(t,e)}}function Wy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;i.uniform3uiv(this.addr,e),qt(t,e)}}function Xy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;i.uniform4uiv(this.addr,e),qt(t,e)}}function qy(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);const r=this.type===i.SAMPLER_2D_SHADOW?Am:Tm;t.setTexture2D(e||r,s)}function jy(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Cm,s)}function $y(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Pm,s)}function Yy(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Rm,s)}function Ky(i){switch(i){case 5126:return Ly;case 35664:return Iy;case 35665:return Dy;case 35666:return Uy;case 35674:return Ny;case 35675:return Fy;case 35676:return Oy;case 5124:case 35670:return By;case 35667:case 35671:return ky;case 35668:case 35672:return zy;case 35669:case 35673:return Hy;case 5125:return Gy;case 36294:return Vy;case 36295:return Wy;case 36296:return Xy;case 35678:case 36198:case 36298:case 36306:case 35682:return qy;case 35679:case 36299:case 36307:return jy;case 35680:case 36300:case 36308:case 36293:return $y;case 36289:case 36303:case 36311:case 36292:return Yy}}function Zy(i,e){i.uniform1fv(this.addr,e)}function Qy(i,e){const t=Or(e,this.size,2);i.uniform2fv(this.addr,t)}function Jy(i,e){const t=Or(e,this.size,3);i.uniform3fv(this.addr,t)}function eb(i,e){const t=Or(e,this.size,4);i.uniform4fv(this.addr,t)}function tb(i,e){const t=Or(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function nb(i,e){const t=Or(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function ib(i,e){const t=Or(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function sb(i,e){i.uniform1iv(this.addr,e)}function rb(i,e){i.uniform2iv(this.addr,e)}function ob(i,e){i.uniform3iv(this.addr,e)}function ab(i,e){i.uniform4iv(this.addr,e)}function lb(i,e){i.uniform1uiv(this.addr,e)}function cb(i,e){i.uniform2uiv(this.addr,e)}function ub(i,e){i.uniform3uiv(this.addr,e)}function hb(i,e){i.uniform4uiv(this.addr,e)}function db(i,e,t){const n=this.cache,s=e.length,r=Tl(t,s);Xt(n,r)||(i.uniform1iv(this.addr,r),qt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Tm,r[o])}function fb(i,e,t){const n=this.cache,s=e.length,r=Tl(t,s);Xt(n,r)||(i.uniform1iv(this.addr,r),qt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Cm,r[o])}function pb(i,e,t){const n=this.cache,s=e.length,r=Tl(t,s);Xt(n,r)||(i.uniform1iv(this.addr,r),qt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Pm,r[o])}function mb(i,e,t){const n=this.cache,s=e.length,r=Tl(t,s);Xt(n,r)||(i.uniform1iv(this.addr,r),qt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Rm,r[o])}function gb(i){switch(i){case 5126:return Zy;case 35664:return Qy;case 35665:return Jy;case 35666:return eb;case 35674:return tb;case 35675:return nb;case 35676:return ib;case 5124:case 35670:return sb;case 35667:case 35671:return rb;case 35668:case 35672:return ob;case 35669:case 35673:return ab;case 5125:return lb;case 36294:return cb;case 36295:return ub;case 36296:return hb;case 35678:case 36198:case 36298:case 36306:case 35682:return db;case 35679:case 36299:case 36307:return fb;case 35680:case 36300:case 36308:case 36293:return pb;case 36289:case 36303:case 36311:case 36292:return mb}}class _b{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Ky(t.type)}}class xb{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=gb(t.type)}}class vb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const dc=/(\w+)(\])?(\[|\.)?/g;function zd(i,e){i.seq.push(e),i.map[e.id]=e}function yb(i,e,t){const n=i.name,s=n.length;for(dc.lastIndex=0;;){const r=dc.exec(n),o=dc.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){zd(t,c===void 0?new _b(a,i,e):new xb(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new vb(a),zd(t,h)),t=h}}}class qa{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);yb(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function Hd(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const bb=37297;let Mb=0;function Sb(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function wb(i){const e=at.getPrimaries(at.workingColorSpace),t=at.getPrimaries(i);let n;switch(e===t?n="":e===cl&&t===ll?n="LinearDisplayP3ToLinearSRGB":e===ll&&t===cl&&(n="LinearSRGBToLinearDisplayP3"),i){case Yt:case El:return[n,"LinearTransferOETF"];case Et:case Bu:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Gd(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Sb(i.getShaderSource(e),o)}else return s}function Eb(i,e){const t=wb(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Tb(i,e){let t;switch(e){case b0:t="Linear";break;case M0:t="Reinhard";break;case S0:t="OptimizedCineon";break;case w0:t="ACESFilmic";break;case T0:t="AgX";break;case E0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Ab(i){return[i.extensionDerivatives||!!i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.alphaToCoverage||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(_r).join(`
`)}function Rb(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(_r).join(`
`)}function Cb(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Pb(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function _r(i){return i!==""}function Vd(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Wd(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Lb=/^[ \t]*#include +<([\w\d./]+)>/gm;function iu(i){return i.replace(Lb,Db)}const Ib=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Db(i,e){let t=We[e];if(t===void 0){const n=Ib.get(e);if(n!==void 0)t=We[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return iu(t)}const Ub=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xd(i){return i.replace(Ub,Nb)}function Nb(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function qd(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function Fb(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===em?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Yg?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Ii&&(e="SHADOWMAP_TYPE_VSM"),e}function Ob(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case wr:case Er:e="ENVMAP_TYPE_CUBE";break;case Ml:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Bb(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Er:e="ENVMAP_MODE_REFRACTION";break}return e}function kb(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case tm:e="ENVMAP_BLENDING_MULTIPLY";break;case v0:e="ENVMAP_BLENDING_MIX";break;case y0:e="ENVMAP_BLENDING_ADD";break}return e}function zb(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Hb(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Fb(t),c=Ob(t),u=Bb(t),h=kb(t),d=zb(t),f=t.isWebGL2?"":Ab(t),g=Rb(t),x=Cb(r),m=s.createProgram();let p,v,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(_r).join(`
`),p.length>0&&(p+=`
`),v=[f,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(_r).join(`
`),v.length>0&&(v+=`
`)):(p=[qd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_r).join(`
`),v=[f,qd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ns?"#define TONE_MAPPING":"",t.toneMapping!==ns?We.tonemapping_pars_fragment:"",t.toneMapping!==ns?Tb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,Eb("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(_r).join(`
`)),o=iu(o),o=Vd(o,t),o=Wd(o,t),a=iu(a),a=Vd(a,t),a=Wd(a,t),o=Xd(o),a=Xd(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,v=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===ii?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ii?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const b=_+p+o,S=_+v+a,w=Hd(s,s.VERTEX_SHADER,b),M=Hd(s,s.FRAGMENT_SHADER,S);s.attachShader(m,w),s.attachShader(m,M),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function A(N){if(i.debug.checkShaderErrors){const B=s.getProgramInfoLog(m).trim(),P=s.getShaderInfoLog(w).trim(),O=s.getShaderInfoLog(M).trim();let k=!0,V=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(k=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,w,M);else{const q=Gd(s,w,"vertex"),H=Gd(s,M,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+B+`
`+q+`
`+H)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(P===""||O==="")&&(V=!1);V&&(N.diagnostics={runnable:k,programLog:B,vertexShader:{log:P,prefix:p},fragmentShader:{log:O,prefix:v}})}s.deleteShader(w),s.deleteShader(M),U=new qa(s,m),y=Pb(s,m)}let U;this.getUniforms=function(){return U===void 0&&A(this),U};let y;this.getAttributes=function(){return y===void 0&&A(this),y};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=s.getProgramParameter(m,bb)),E},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Mb++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=w,this.fragmentShader=M,this}let Gb=0;class Vb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Wb(e),t.set(e,n)),n}}class Wb{constructor(e){this.id=Gb++,this.code=e,this.usedTimes=0}}function Xb(i,e,t,n,s,r,o){const a=new zu,l=new Vb,c=new Set,u=[],h=s.isWebGL2,d=s.logarithmicDepthBuffer,f=s.vertexTextures;let g=s.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(y){return c.add(y),y===0?"uv":`uv${y}`}function p(y,E,N,B,P){const O=B.fog,k=P.geometry,V=y.isMeshStandardMaterial?B.environment:null,q=(y.isMeshStandardMaterial?t:e).get(y.envMap||V),H=!!q&&q.mapping===Ml?q.image.height:null,Z=x[y.type];y.precision!==null&&(g=s.getMaxPrecision(y.precision),g!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",g,"instead."));const Q=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,ae=Q!==void 0?Q.length:0;let pe=0;k.morphAttributes.position!==void 0&&(pe=1),k.morphAttributes.normal!==void 0&&(pe=2),k.morphAttributes.color!==void 0&&(pe=3);let W,J,ce,me;if(Z){const Ke=fi[Z];W=Ke.vertexShader,J=Ke.fragmentShader}else W=y.vertexShader,J=y.fragmentShader,l.update(y),ce=l.getVertexShaderID(y),me=l.getFragmentShaderID(y);const ve=i.getRenderTarget(),fe=P.isInstancedMesh===!0,Be=P.isBatchedMesh===!0,Pe=!!y.map,z=!!y.matcap,Pt=!!q,Me=!!y.aoMap,Le=!!y.lightMap,be=!!y.bumpMap,ot=!!y.normalMap,Ue=!!y.displacementMap,L=!!y.emissiveMap,T=!!y.metalnessMap,X=!!y.roughnessMap,te=y.anisotropy>0,ee=y.clearcoat>0,se=y.iridescence>0,Se=y.sheen>0,ue=y.transmission>0,xe=te&&!!y.anisotropyMap,Ie=ee&&!!y.clearcoatMap,ze=ee&&!!y.clearcoatNormalMap,ne=ee&&!!y.clearcoatRoughnessMap,nt=se&&!!y.iridescenceMap,qe=se&&!!y.iridescenceThicknessMap,Fe=Se&&!!y.sheenColorMap,Ae=Se&&!!y.sheenRoughnessMap,ge=!!y.specularMap,Ge=!!y.specularColorMap,F=!!y.specularIntensityMap,oe=ue&&!!y.transmissionMap,he=ue&&!!y.thicknessMap,Re=!!y.gradientMap,D=!!y.alphaMap,re=y.alphaTest>0,ie=!!y.alphaHash,we=!!y.extensions;let Ce=ns;y.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(Ce=i.toneMapping);const Je={isWebGL2:h,shaderID:Z,shaderType:y.type,shaderName:y.name,vertexShader:W,fragmentShader:J,defines:y.defines,customVertexShaderID:ce,customFragmentShaderID:me,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:g,batching:Be,instancing:fe,instancingColor:fe&&P.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:ve===null?i.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:Yt,alphaToCoverage:!!y.alphaToCoverage,map:Pe,matcap:z,envMap:Pt,envMapMode:Pt&&q.mapping,envMapCubeUVHeight:H,aoMap:Me,lightMap:Le,bumpMap:be,normalMap:ot,displacementMap:f&&Ue,emissiveMap:L,normalMapObjectSpace:ot&&y.normalMapType===F0,normalMapTangentSpace:ot&&y.normalMapType===hm,metalnessMap:T,roughnessMap:X,anisotropy:te,anisotropyMap:xe,clearcoat:ee,clearcoatMap:Ie,clearcoatNormalMap:ze,clearcoatRoughnessMap:ne,iridescence:se,iridescenceMap:nt,iridescenceThicknessMap:qe,sheen:Se,sheenColorMap:Fe,sheenRoughnessMap:Ae,specularMap:ge,specularColorMap:Ge,specularIntensityMap:F,transmission:ue,transmissionMap:oe,thicknessMap:he,gradientMap:Re,opaque:y.transparent===!1&&y.blending===yr&&y.alphaToCoverage===!1,alphaMap:D,alphaTest:re,alphaHash:ie,combine:y.combine,mapUv:Pe&&m(y.map.channel),aoMapUv:Me&&m(y.aoMap.channel),lightMapUv:Le&&m(y.lightMap.channel),bumpMapUv:be&&m(y.bumpMap.channel),normalMapUv:ot&&m(y.normalMap.channel),displacementMapUv:Ue&&m(y.displacementMap.channel),emissiveMapUv:L&&m(y.emissiveMap.channel),metalnessMapUv:T&&m(y.metalnessMap.channel),roughnessMapUv:X&&m(y.roughnessMap.channel),anisotropyMapUv:xe&&m(y.anisotropyMap.channel),clearcoatMapUv:Ie&&m(y.clearcoatMap.channel),clearcoatNormalMapUv:ze&&m(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ne&&m(y.clearcoatRoughnessMap.channel),iridescenceMapUv:nt&&m(y.iridescenceMap.channel),iridescenceThicknessMapUv:qe&&m(y.iridescenceThicknessMap.channel),sheenColorMapUv:Fe&&m(y.sheenColorMap.channel),sheenRoughnessMapUv:Ae&&m(y.sheenRoughnessMap.channel),specularMapUv:ge&&m(y.specularMap.channel),specularColorMapUv:Ge&&m(y.specularColorMap.channel),specularIntensityMapUv:F&&m(y.specularIntensityMap.channel),transmissionMapUv:oe&&m(y.transmissionMap.channel),thicknessMapUv:he&&m(y.thicknessMap.channel),alphaMapUv:D&&m(y.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(ot||te),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!k.attributes.uv&&(Pe||D),fog:!!O,useFog:y.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:P.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:pe,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ce,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Pe&&y.map.isVideoTexture===!0&&at.getTransfer(y.map.colorSpace)===xt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===dn,flipSided:y.side===gn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:we&&y.extensions.derivatives===!0,extensionFragDepth:we&&y.extensions.fragDepth===!0,extensionDrawBuffers:we&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:we&&y.extensions.shaderTextureLOD===!0,extensionClipCullDistance:we&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:we&&y.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Je.vertexUv1s=c.has(1),Je.vertexUv2s=c.has(2),Je.vertexUv3s=c.has(3),c.clear(),Je}function v(y){const E=[];if(y.shaderID?E.push(y.shaderID):(E.push(y.customVertexShaderID),E.push(y.customFragmentShaderID)),y.defines!==void 0)for(const N in y.defines)E.push(N),E.push(y.defines[N]);return y.isRawShaderMaterial===!1&&(_(E,y),b(E,y),E.push(i.outputColorSpace)),E.push(y.customProgramCacheKey),E.join()}function _(y,E){y.push(E.precision),y.push(E.outputColorSpace),y.push(E.envMapMode),y.push(E.envMapCubeUVHeight),y.push(E.mapUv),y.push(E.alphaMapUv),y.push(E.lightMapUv),y.push(E.aoMapUv),y.push(E.bumpMapUv),y.push(E.normalMapUv),y.push(E.displacementMapUv),y.push(E.emissiveMapUv),y.push(E.metalnessMapUv),y.push(E.roughnessMapUv),y.push(E.anisotropyMapUv),y.push(E.clearcoatMapUv),y.push(E.clearcoatNormalMapUv),y.push(E.clearcoatRoughnessMapUv),y.push(E.iridescenceMapUv),y.push(E.iridescenceThicknessMapUv),y.push(E.sheenColorMapUv),y.push(E.sheenRoughnessMapUv),y.push(E.specularMapUv),y.push(E.specularColorMapUv),y.push(E.specularIntensityMapUv),y.push(E.transmissionMapUv),y.push(E.thicknessMapUv),y.push(E.combine),y.push(E.fogExp2),y.push(E.sizeAttenuation),y.push(E.morphTargetsCount),y.push(E.morphAttributeCount),y.push(E.numDirLights),y.push(E.numPointLights),y.push(E.numSpotLights),y.push(E.numSpotLightMaps),y.push(E.numHemiLights),y.push(E.numRectAreaLights),y.push(E.numDirLightShadows),y.push(E.numPointLightShadows),y.push(E.numSpotLightShadows),y.push(E.numSpotLightShadowsWithMaps),y.push(E.numLightProbes),y.push(E.shadowMapType),y.push(E.toneMapping),y.push(E.numClippingPlanes),y.push(E.numClipIntersection),y.push(E.depthPacking)}function b(y,E){a.disableAll(),E.isWebGL2&&a.enable(0),E.supportsVertexTextures&&a.enable(1),E.instancing&&a.enable(2),E.instancingColor&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),y.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.skinning&&a.enable(4),E.morphTargets&&a.enable(5),E.morphNormals&&a.enable(6),E.morphColors&&a.enable(7),E.premultipliedAlpha&&a.enable(8),E.shadowMapEnabled&&a.enable(9),E.useLegacyLights&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.alphaToCoverage&&a.enable(20),y.push(a.mask)}function S(y){const E=x[y.type];let N;if(E){const B=fi[E];N=A_.clone(B.uniforms)}else N=y.uniforms;return N}function w(y,E){let N;for(let B=0,P=u.length;B<P;B++){const O=u[B];if(O.cacheKey===E){N=O,++N.usedTimes;break}}return N===void 0&&(N=new Hb(i,E,y,r),u.push(N)),N}function M(y){if(--y.usedTimes===0){const E=u.indexOf(y);u[E]=u[u.length-1],u.pop(),y.destroy()}}function A(y){l.remove(y)}function U(){l.dispose()}return{getParameters:p,getProgramCacheKey:v,getUniforms:S,acquireProgram:w,releaseProgram:M,releaseShaderCache:A,programs:u,dispose:U}}function qb(){let i=new WeakMap;function e(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function t(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function jb(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function jd(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function $d(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(h,d,f,g,x,m){let p=i[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:x,group:m},i[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=x,p.group=m),e++,p}function a(h,d,f,g,x,m){const p=o(h,d,f,g,x,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):t.push(p)}function l(h,d,f,g,x,m){const p=o(h,d,f,g,x,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function c(h,d){t.length>1&&t.sort(h||jb),n.length>1&&n.sort(d||jd),s.length>1&&s.sort(d||jd)}function u(){for(let h=e,d=i.length;h<d;h++){const f=i[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function $b(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new $d,i.set(n,[o])):s>=r.length?(o=new $d,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Yb(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new R,color:new Te};break;case"SpotLight":t={position:new R,direction:new R,color:new Te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new Te,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new Te,groundColor:new Te};break;case"RectAreaLight":t={color:new Te,position:new R,halfWidth:new R,halfHeight:new R};break}return i[e.id]=t,t}}}function Kb(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Zb=0;function Qb(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Jb(i,e){const t=new Yb,n=Kb(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)s.probe.push(new R);const r=new R,o=new De,a=new De;function l(u,h){let d=0,f=0,g=0;for(let N=0;N<9;N++)s.probe[N].set(0,0,0);let x=0,m=0,p=0,v=0,_=0,b=0,S=0,w=0,M=0,A=0,U=0;u.sort(Qb);const y=h===!0?Math.PI:1;for(let N=0,B=u.length;N<B;N++){const P=u[N],O=P.color,k=P.intensity,V=P.distance,q=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)d+=O.r*k*y,f+=O.g*k*y,g+=O.b*k*y;else if(P.isLightProbe){for(let H=0;H<9;H++)s.probe[H].addScaledVector(P.sh.coefficients[H],k);U++}else if(P.isDirectionalLight){const H=t.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity*y),P.castShadow){const Z=P.shadow,Q=n.get(P);Q.shadowBias=Z.bias,Q.shadowNormalBias=Z.normalBias,Q.shadowRadius=Z.radius,Q.shadowMapSize=Z.mapSize,s.directionalShadow[x]=Q,s.directionalShadowMap[x]=q,s.directionalShadowMatrix[x]=P.shadow.matrix,b++}s.directional[x]=H,x++}else if(P.isSpotLight){const H=t.get(P);H.position.setFromMatrixPosition(P.matrixWorld),H.color.copy(O).multiplyScalar(k*y),H.distance=V,H.coneCos=Math.cos(P.angle),H.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),H.decay=P.decay,s.spot[p]=H;const Z=P.shadow;if(P.map&&(s.spotLightMap[M]=P.map,M++,Z.updateMatrices(P),P.castShadow&&A++),s.spotLightMatrix[p]=Z.matrix,P.castShadow){const Q=n.get(P);Q.shadowBias=Z.bias,Q.shadowNormalBias=Z.normalBias,Q.shadowRadius=Z.radius,Q.shadowMapSize=Z.mapSize,s.spotShadow[p]=Q,s.spotShadowMap[p]=q,w++}p++}else if(P.isRectAreaLight){const H=t.get(P);H.color.copy(O).multiplyScalar(k),H.halfWidth.set(P.width*.5,0,0),H.halfHeight.set(0,P.height*.5,0),s.rectArea[v]=H,v++}else if(P.isPointLight){const H=t.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity*y),H.distance=P.distance,H.decay=P.decay,P.castShadow){const Z=P.shadow,Q=n.get(P);Q.shadowBias=Z.bias,Q.shadowNormalBias=Z.normalBias,Q.shadowRadius=Z.radius,Q.shadowMapSize=Z.mapSize,Q.shadowCameraNear=Z.camera.near,Q.shadowCameraFar=Z.camera.far,s.pointShadow[m]=Q,s.pointShadowMap[m]=q,s.pointShadowMatrix[m]=P.shadow.matrix,S++}s.point[m]=H,m++}else if(P.isHemisphereLight){const H=t.get(P);H.skyColor.copy(P.color).multiplyScalar(k*y),H.groundColor.copy(P.groundColor).multiplyScalar(k*y),s.hemi[_]=H,_++}}v>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=le.LTC_FLOAT_1,s.rectAreaLTC2=le.LTC_FLOAT_2):(s.rectAreaLTC1=le.LTC_HALF_1,s.rectAreaLTC2=le.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=le.LTC_FLOAT_1,s.rectAreaLTC2=le.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=le.LTC_HALF_1,s.rectAreaLTC2=le.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=f,s.ambient[2]=g;const E=s.hash;(E.directionalLength!==x||E.pointLength!==m||E.spotLength!==p||E.rectAreaLength!==v||E.hemiLength!==_||E.numDirectionalShadows!==b||E.numPointShadows!==S||E.numSpotShadows!==w||E.numSpotMaps!==M||E.numLightProbes!==U)&&(s.directional.length=x,s.spot.length=p,s.rectArea.length=v,s.point.length=m,s.hemi.length=_,s.directionalShadow.length=b,s.directionalShadowMap.length=b,s.pointShadow.length=S,s.pointShadowMap.length=S,s.spotShadow.length=w,s.spotShadowMap.length=w,s.directionalShadowMatrix.length=b,s.pointShadowMatrix.length=S,s.spotLightMatrix.length=w+M-A,s.spotLightMap.length=M,s.numSpotLightShadowsWithMaps=A,s.numLightProbes=U,E.directionalLength=x,E.pointLength=m,E.spotLength=p,E.rectAreaLength=v,E.hemiLength=_,E.numDirectionalShadows=b,E.numPointShadows=S,E.numSpotShadows=w,E.numSpotMaps=M,E.numLightProbes=U,s.version=Zb++)}function c(u,h){let d=0,f=0,g=0,x=0,m=0;const p=h.matrixWorldInverse;for(let v=0,_=u.length;v<_;v++){const b=u[v];if(b.isDirectionalLight){const S=s.directional[d];S.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(p),d++}else if(b.isSpotLight){const S=s.spot[g];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(p),g++}else if(b.isRectAreaLight){const S=s.rectArea[x];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(p),a.identity(),o.copy(b.matrixWorld),o.premultiply(p),a.extractRotation(o),S.halfWidth.set(b.width*.5,0,0),S.halfHeight.set(0,b.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),x++}else if(b.isPointLight){const S=s.point[f];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(p),f++}else if(b.isHemisphereLight){const S=s.hemi[m];S.direction.setFromMatrixPosition(b.matrixWorld),S.direction.transformDirection(p),m++}}}return{setup:l,setupView:c,state:s}}function Yd(i,e){const t=new Jb(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function o(h){n.push(h)}function a(h){s.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function eM(i,e){let t=new WeakMap;function n(r,o=0){const a=t.get(r);let l;return a===void 0?(l=new Yd(i,e),t.set(r,[l])):o>=a.length?(l=new Yd(i,e),a.push(l)):l=a[o],l}function s(){t=new WeakMap}return{get:n,dispose:s}}class tM extends _i{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=U0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class nM extends _i{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const iM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,sM=`uniform sampler2D shadow_pass;
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
}`;function rM(i,e,t){let n=new Hu;const s=new ye,r=new ye,o=new gt,a=new tM({depthPacking:N0}),l=new nM,c={},u=t.maxTextureSize,h={[ni]:gn,[gn]:ni,[dn]:dn},d=new Zt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ye},radius:{value:4}},vertexShader:iM,fragmentShader:sM}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Kt;g.setAttribute("position",new yt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new j(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=em;let p=this.type;this.render=function(w,M,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const U=i.getRenderTarget(),y=i.getActiveCubeFace(),E=i.getActiveMipmapLevel(),N=i.state;N.setBlending(ei),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const B=p!==Ii&&this.type===Ii,P=p===Ii&&this.type!==Ii;for(let O=0,k=w.length;O<k;O++){const V=w[O],q=V.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",V,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);const H=q.getFrameExtents();if(s.multiply(H),r.copy(q.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/H.x),s.x=r.x*H.x,q.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/H.y),s.y=r.y*H.y,q.mapSize.y=r.y)),q.map===null||B===!0||P===!0){const Q=this.type!==Ii?{minFilter:st,magFilter:st}:{};q.map!==null&&q.map.dispose(),q.map=new Mn(s.x,s.y,Q),q.map.texture.name=V.name+".shadowMap",q.camera.updateProjectionMatrix()}i.setRenderTarget(q.map),i.clear();const Z=q.getViewportCount();for(let Q=0;Q<Z;Q++){const ae=q.getViewport(Q);o.set(r.x*ae.x,r.y*ae.y,r.x*ae.z,r.y*ae.w),N.viewport(o),q.updateMatrices(V,Q),n=q.getFrustum(),b(M,A,q.camera,V,this.type)}q.isPointLightShadow!==!0&&this.type===Ii&&v(q,A),q.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(U,y,E)};function v(w,M){const A=e.update(x);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Mn(s.x,s.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(M,null,A,d,x,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(M,null,A,f,x,null)}function _(w,M,A,U){let y=null;const E=A.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(E!==void 0)y=E;else if(y=A.isPointLight===!0?l:a,i.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const N=y.uuid,B=M.uuid;let P=c[N];P===void 0&&(P={},c[N]=P);let O=P[B];O===void 0&&(O=y.clone(),P[B]=O,M.addEventListener("dispose",S)),y=O}if(y.visible=M.visible,y.wireframe=M.wireframe,U===Ii?y.side=M.shadowSide!==null?M.shadowSide:M.side:y.side=M.shadowSide!==null?M.shadowSide:h[M.side],y.alphaMap=M.alphaMap,y.alphaTest=M.alphaTest,y.map=M.map,y.clipShadows=M.clipShadows,y.clippingPlanes=M.clippingPlanes,y.clipIntersection=M.clipIntersection,y.displacementMap=M.displacementMap,y.displacementScale=M.displacementScale,y.displacementBias=M.displacementBias,y.wireframeLinewidth=M.wireframeLinewidth,y.linewidth=M.linewidth,A.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const N=i.properties.get(y);N.light=A}return y}function b(w,M,A,U,y){if(w.visible===!1)return;if(w.layers.test(M.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&y===Ii)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,w.matrixWorld);const B=e.update(w),P=w.material;if(Array.isArray(P)){const O=B.groups;for(let k=0,V=O.length;k<V;k++){const q=O[k],H=P[q.materialIndex];if(H&&H.visible){const Z=_(w,H,U,y);w.onBeforeShadow(i,w,M,A,B,Z,q),i.renderBufferDirect(A,null,B,Z,w,q),w.onAfterShadow(i,w,M,A,B,Z,q)}}}else if(P.visible){const O=_(w,P,U,y);w.onBeforeShadow(i,w,M,A,B,O,null),i.renderBufferDirect(A,null,B,O,w,null),w.onAfterShadow(i,w,M,A,B,O,null)}}const N=w.children;for(let B=0,P=N.length;B<P;B++)b(N[B],M,A,U,y)}function S(w){w.target.removeEventListener("dispose",S);for(const A in c){const U=c[A],y=w.target.uuid;y in U&&(U[y].dispose(),delete U[y])}}}function oM(i,e,t){const n=t.isWebGL2;function s(){let D=!1;const re=new gt;let ie=null;const we=new gt(0,0,0,0);return{setMask:function(Ce){ie!==Ce&&!D&&(i.colorMask(Ce,Ce,Ce,Ce),ie=Ce)},setLocked:function(Ce){D=Ce},setClear:function(Ce,Je,Ke,ft,Jt){Jt===!0&&(Ce*=ft,Je*=ft,Ke*=ft),re.set(Ce,Je,Ke,ft),we.equals(re)===!1&&(i.clearColor(Ce,Je,Ke,ft),we.copy(re))},reset:function(){D=!1,ie=null,we.set(-1,0,0,0)}}}function r(){let D=!1,re=null,ie=null,we=null;return{setTest:function(Ce){Ce?fe(i.DEPTH_TEST):Be(i.DEPTH_TEST)},setMask:function(Ce){re!==Ce&&!D&&(i.depthMask(Ce),re=Ce)},setFunc:function(Ce){if(ie!==Ce){switch(Ce){case d0:i.depthFunc(i.NEVER);break;case f0:i.depthFunc(i.ALWAYS);break;case p0:i.depthFunc(i.LESS);break;case rl:i.depthFunc(i.LEQUAL);break;case m0:i.depthFunc(i.EQUAL);break;case g0:i.depthFunc(i.GEQUAL);break;case _0:i.depthFunc(i.GREATER);break;case x0:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ie=Ce}},setLocked:function(Ce){D=Ce},setClear:function(Ce){we!==Ce&&(i.clearDepth(Ce),we=Ce)},reset:function(){D=!1,re=null,ie=null,we=null}}}function o(){let D=!1,re=null,ie=null,we=null,Ce=null,Je=null,Ke=null,ft=null,Jt=null;return{setTest:function(et){D||(et?fe(i.STENCIL_TEST):Be(i.STENCIL_TEST))},setMask:function(et){re!==et&&!D&&(i.stencilMask(et),re=et)},setFunc:function(et,Lt,ln){(ie!==et||we!==Lt||Ce!==ln)&&(i.stencilFunc(et,Lt,ln),ie=et,we=Lt,Ce=ln)},setOp:function(et,Lt,ln){(Je!==et||Ke!==Lt||ft!==ln)&&(i.stencilOp(et,Lt,ln),Je=et,Ke=Lt,ft=ln)},setLocked:function(et){D=et},setClear:function(et){Jt!==et&&(i.clearStencil(et),Jt=et)},reset:function(){D=!1,re=null,ie=null,we=null,Ce=null,Je=null,Ke=null,ft=null,Jt=null}}}const a=new s,l=new r,c=new o,u=new WeakMap,h=new WeakMap;let d={},f={},g=new WeakMap,x=[],m=null,p=!1,v=null,_=null,b=null,S=null,w=null,M=null,A=null,U=new Te(0,0,0),y=0,E=!1,N=null,B=null,P=null,O=null,k=null;const V=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,H=0;const Z=i.getParameter(i.VERSION);Z.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(Z)[1]),q=H>=1):Z.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),q=H>=2);let Q=null,ae={};const pe=i.getParameter(i.SCISSOR_BOX),W=i.getParameter(i.VIEWPORT),J=new gt().fromArray(pe),ce=new gt().fromArray(W);function me(D,re,ie,we){const Ce=new Uint8Array(4),Je=i.createTexture();i.bindTexture(D,Je),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ke=0;Ke<ie;Ke++)n&&(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)?i.texImage3D(re,0,i.RGBA,1,1,we,0,i.RGBA,i.UNSIGNED_BYTE,Ce):i.texImage2D(re+Ke,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ce);return Je}const ve={};ve[i.TEXTURE_2D]=me(i.TEXTURE_2D,i.TEXTURE_2D,1),ve[i.TEXTURE_CUBE_MAP]=me(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(ve[i.TEXTURE_2D_ARRAY]=me(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ve[i.TEXTURE_3D]=me(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),fe(i.DEPTH_TEST),l.setFunc(rl),Ue(!1),L(Ah),fe(i.CULL_FACE),be(ei);function fe(D){d[D]!==!0&&(i.enable(D),d[D]=!0)}function Be(D){d[D]!==!1&&(i.disable(D),d[D]=!1)}function Pe(D,re){return f[D]!==re?(i.bindFramebuffer(D,re),f[D]=re,n&&(D===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=re),D===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=re)),!0):!1}function z(D,re){let ie=x,we=!1;if(D)if(ie=g.get(re),ie===void 0&&(ie=[],g.set(re,ie)),D.isWebGLMultipleRenderTargets){const Ce=D.texture;if(ie.length!==Ce.length||ie[0]!==i.COLOR_ATTACHMENT0){for(let Je=0,Ke=Ce.length;Je<Ke;Je++)ie[Je]=i.COLOR_ATTACHMENT0+Je;ie.length=Ce.length,we=!0}}else ie[0]!==i.COLOR_ATTACHMENT0&&(ie[0]=i.COLOR_ATTACHMENT0,we=!0);else ie[0]!==i.BACK&&(ie[0]=i.BACK,we=!0);we&&(t.isWebGL2?i.drawBuffers(ie):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ie))}function Pt(D){return m!==D?(i.useProgram(D),m=D,!0):!1}const Me={[ms]:i.FUNC_ADD,[Zg]:i.FUNC_SUBTRACT,[Qg]:i.FUNC_REVERSE_SUBTRACT};if(n)Me[Lh]=i.MIN,Me[Ih]=i.MAX;else{const D=e.get("EXT_blend_minmax");D!==null&&(Me[Lh]=D.MIN_EXT,Me[Ih]=D.MAX_EXT)}const Le={[Jg]:i.ZERO,[e0]:i.ONE,[t0]:i.SRC_COLOR,[jc]:i.SRC_ALPHA,[a0]:i.SRC_ALPHA_SATURATE,[r0]:i.DST_COLOR,[i0]:i.DST_ALPHA,[n0]:i.ONE_MINUS_SRC_COLOR,[$c]:i.ONE_MINUS_SRC_ALPHA,[o0]:i.ONE_MINUS_DST_COLOR,[s0]:i.ONE_MINUS_DST_ALPHA,[l0]:i.CONSTANT_COLOR,[c0]:i.ONE_MINUS_CONSTANT_COLOR,[u0]:i.CONSTANT_ALPHA,[h0]:i.ONE_MINUS_CONSTANT_ALPHA};function be(D,re,ie,we,Ce,Je,Ke,ft,Jt,et){if(D===ei){p===!0&&(Be(i.BLEND),p=!1);return}if(p===!1&&(fe(i.BLEND),p=!0),D!==Kg){if(D!==v||et!==E){if((_!==ms||w!==ms)&&(i.blendEquation(i.FUNC_ADD),_=ms,w=ms),et)switch(D){case yr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Rh:i.blendFunc(i.ONE,i.ONE);break;case Ch:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ph:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case yr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Rh:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ch:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ph:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}b=null,S=null,M=null,A=null,U.set(0,0,0),y=0,v=D,E=et}return}Ce=Ce||re,Je=Je||ie,Ke=Ke||we,(re!==_||Ce!==w)&&(i.blendEquationSeparate(Me[re],Me[Ce]),_=re,w=Ce),(ie!==b||we!==S||Je!==M||Ke!==A)&&(i.blendFuncSeparate(Le[ie],Le[we],Le[Je],Le[Ke]),b=ie,S=we,M=Je,A=Ke),(ft.equals(U)===!1||Jt!==y)&&(i.blendColor(ft.r,ft.g,ft.b,Jt),U.copy(ft),y=Jt),v=D,E=!1}function ot(D,re){D.side===dn?Be(i.CULL_FACE):fe(i.CULL_FACE);let ie=D.side===gn;re&&(ie=!ie),Ue(ie),D.blending===yr&&D.transparent===!1?be(ei):be(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),l.setFunc(D.depthFunc),l.setTest(D.depthTest),l.setMask(D.depthWrite),a.setMask(D.colorWrite);const we=D.stencilWrite;c.setTest(we),we&&(c.setMask(D.stencilWriteMask),c.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),c.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),X(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?fe(i.SAMPLE_ALPHA_TO_COVERAGE):Be(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ue(D){N!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),N=D)}function L(D){D!==jg?(fe(i.CULL_FACE),D!==B&&(D===Ah?i.cullFace(i.BACK):D===$g?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Be(i.CULL_FACE),B=D}function T(D){D!==P&&(q&&i.lineWidth(D),P=D)}function X(D,re,ie){D?(fe(i.POLYGON_OFFSET_FILL),(O!==re||k!==ie)&&(i.polygonOffset(re,ie),O=re,k=ie)):Be(i.POLYGON_OFFSET_FILL)}function te(D){D?fe(i.SCISSOR_TEST):Be(i.SCISSOR_TEST)}function ee(D){D===void 0&&(D=i.TEXTURE0+V-1),Q!==D&&(i.activeTexture(D),Q=D)}function se(D,re,ie){ie===void 0&&(Q===null?ie=i.TEXTURE0+V-1:ie=Q);let we=ae[ie];we===void 0&&(we={type:void 0,texture:void 0},ae[ie]=we),(we.type!==D||we.texture!==re)&&(Q!==ie&&(i.activeTexture(ie),Q=ie),i.bindTexture(D,re||ve[D]),we.type=D,we.texture=re)}function Se(){const D=ae[Q];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function ue(){try{i.compressedTexImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function xe(){try{i.compressedTexImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ie(){try{i.texSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ze(){try{i.texSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ne(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function nt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function qe(){try{i.texStorage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Fe(){try{i.texStorage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ae(){try{i.texImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ge(){try{i.texImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ge(D){J.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),J.copy(D))}function F(D){ce.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),ce.copy(D))}function oe(D,re){let ie=h.get(re);ie===void 0&&(ie=new WeakMap,h.set(re,ie));let we=ie.get(D);we===void 0&&(we=i.getUniformBlockIndex(re,D.name),ie.set(D,we))}function he(D,re){const we=h.get(re).get(D);u.get(re)!==we&&(i.uniformBlockBinding(re,we,D.__bindingPointIndex),u.set(re,we))}function Re(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},Q=null,ae={},f={},g=new WeakMap,x=[],m=null,p=!1,v=null,_=null,b=null,S=null,w=null,M=null,A=null,U=new Te(0,0,0),y=0,E=!1,N=null,B=null,P=null,O=null,k=null,J.set(0,0,i.canvas.width,i.canvas.height),ce.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:fe,disable:Be,bindFramebuffer:Pe,drawBuffers:z,useProgram:Pt,setBlending:be,setMaterial:ot,setFlipSided:Ue,setCullFace:L,setLineWidth:T,setPolygonOffset:X,setScissorTest:te,activeTexture:ee,bindTexture:se,unbindTexture:Se,compressedTexImage2D:ue,compressedTexImage3D:xe,texImage2D:Ae,texImage3D:ge,updateUBOMapping:oe,uniformBlockBinding:he,texStorage2D:qe,texStorage3D:Fe,texSubImage2D:Ie,texSubImage3D:ze,compressedTexSubImage2D:ne,compressedTexSubImage3D:nt,scissor:Ge,viewport:F,reset:Re}}function aM(i,e,t,n,s,r,o){const a=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(L,T){return f?new OffscreenCanvas(L,T):Uo("canvas")}function x(L,T,X,te){let ee=1;if((L.width>te||L.height>te)&&(ee=te/Math.max(L.width,L.height)),ee<1||T===!0)if(typeof HTMLImageElement!="undefined"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&L instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&L instanceof ImageBitmap){const se=T?hl:Math.floor,Se=se(ee*L.width),ue=se(ee*L.height);h===void 0&&(h=g(Se,ue));const xe=X?g(Se,ue):h;return xe.width=Se,xe.height=ue,xe.getContext("2d").drawImage(L,0,0,Se,ue),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+L.width+"x"+L.height+") to ("+Se+"x"+ue+")."),xe}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+L.width+"x"+L.height+")."),L;return L}function m(L){return nu(L.width)&&nu(L.height)}function p(L){return a?!1:L.wrapS!==an||L.wrapT!==an||L.minFilter!==st&&L.minFilter!==ut}function v(L,T){return L.generateMipmaps&&T&&L.minFilter!==st&&L.minFilter!==ut}function _(L){i.generateMipmap(L)}function b(L,T,X,te,ee=!1){if(a===!1)return T;if(L!==null){if(i[L]!==void 0)return i[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let se=T;if(T===i.RED&&(X===i.FLOAT&&(se=i.R32F),X===i.HALF_FLOAT&&(se=i.R16F),X===i.UNSIGNED_BYTE&&(se=i.R8)),T===i.RED_INTEGER&&(X===i.UNSIGNED_BYTE&&(se=i.R8UI),X===i.UNSIGNED_SHORT&&(se=i.R16UI),X===i.UNSIGNED_INT&&(se=i.R32UI),X===i.BYTE&&(se=i.R8I),X===i.SHORT&&(se=i.R16I),X===i.INT&&(se=i.R32I)),T===i.RG&&(X===i.FLOAT&&(se=i.RG32F),X===i.HALF_FLOAT&&(se=i.RG16F),X===i.UNSIGNED_BYTE&&(se=i.RG8)),T===i.RGBA){const Se=ee?al:at.getTransfer(te);X===i.FLOAT&&(se=i.RGBA32F),X===i.HALF_FLOAT&&(se=i.RGBA16F),X===i.UNSIGNED_BYTE&&(se=Se===xt?i.SRGB8_ALPHA8:i.RGBA8),X===i.UNSIGNED_SHORT_4_4_4_4&&(se=i.RGBA4),X===i.UNSIGNED_SHORT_5_5_5_1&&(se=i.RGB5_A1)}return(se===i.R16F||se===i.R32F||se===i.RG16F||se===i.RG32F||se===i.RGBA16F||se===i.RGBA32F)&&e.get("EXT_color_buffer_float"),se}function S(L,T,X){return v(L,X)===!0||L.isFramebufferTexture&&L.minFilter!==st&&L.minFilter!==ut?Math.log2(Math.max(T.width,T.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?T.mipmaps.length:1}function w(L){return L===st||L===Zc||L===mr?i.NEAREST:i.LINEAR}function M(L){const T=L.target;T.removeEventListener("dispose",M),U(T),T.isVideoTexture&&u.delete(T)}function A(L){const T=L.target;T.removeEventListener("dispose",A),E(T)}function U(L){const T=n.get(L);if(T.__webglInit===void 0)return;const X=L.source,te=d.get(X);if(te){const ee=te[T.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&y(L),Object.keys(te).length===0&&d.delete(X)}n.remove(L)}function y(L){const T=n.get(L);i.deleteTexture(T.__webglTexture);const X=L.source,te=d.get(X);delete te[T.__cacheKey],o.memory.textures--}function E(L){const T=L.texture,X=n.get(L),te=n.get(T);if(te.__webglTexture!==void 0&&(i.deleteTexture(te.__webglTexture),o.memory.textures--),L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(X.__webglFramebuffer[ee]))for(let se=0;se<X.__webglFramebuffer[ee].length;se++)i.deleteFramebuffer(X.__webglFramebuffer[ee][se]);else i.deleteFramebuffer(X.__webglFramebuffer[ee]);X.__webglDepthbuffer&&i.deleteRenderbuffer(X.__webglDepthbuffer[ee])}else{if(Array.isArray(X.__webglFramebuffer))for(let ee=0;ee<X.__webglFramebuffer.length;ee++)i.deleteFramebuffer(X.__webglFramebuffer[ee]);else i.deleteFramebuffer(X.__webglFramebuffer);if(X.__webglDepthbuffer&&i.deleteRenderbuffer(X.__webglDepthbuffer),X.__webglMultisampledFramebuffer&&i.deleteFramebuffer(X.__webglMultisampledFramebuffer),X.__webglColorRenderbuffer)for(let ee=0;ee<X.__webglColorRenderbuffer.length;ee++)X.__webglColorRenderbuffer[ee]&&i.deleteRenderbuffer(X.__webglColorRenderbuffer[ee]);X.__webglDepthRenderbuffer&&i.deleteRenderbuffer(X.__webglDepthRenderbuffer)}if(L.isWebGLMultipleRenderTargets)for(let ee=0,se=T.length;ee<se;ee++){const Se=n.get(T[ee]);Se.__webglTexture&&(i.deleteTexture(Se.__webglTexture),o.memory.textures--),n.remove(T[ee])}n.remove(T),n.remove(L)}let N=0;function B(){N=0}function P(){const L=N;return L>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+s.maxTextures),N+=1,L}function O(L){const T=[];return T.push(L.wrapS),T.push(L.wrapT),T.push(L.wrapR||0),T.push(L.magFilter),T.push(L.minFilter),T.push(L.anisotropy),T.push(L.internalFormat),T.push(L.format),T.push(L.type),T.push(L.generateMipmaps),T.push(L.premultiplyAlpha),T.push(L.flipY),T.push(L.unpackAlignment),T.push(L.colorSpace),T.join()}function k(L,T){const X=n.get(L);if(L.isVideoTexture&&ot(L),L.isRenderTargetTexture===!1&&L.version>0&&X.__version!==L.version){const te=L.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(X,L,T);return}}t.bindTexture(i.TEXTURE_2D,X.__webglTexture,i.TEXTURE0+T)}function V(L,T){const X=n.get(L);if(L.version>0&&X.__version!==L.version){J(X,L,T);return}t.bindTexture(i.TEXTURE_2D_ARRAY,X.__webglTexture,i.TEXTURE0+T)}function q(L,T){const X=n.get(L);if(L.version>0&&X.__version!==L.version){J(X,L,T);return}t.bindTexture(i.TEXTURE_3D,X.__webglTexture,i.TEXTURE0+T)}function H(L,T){const X=n.get(L);if(L.version>0&&X.__version!==L.version){ce(X,L,T);return}t.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture,i.TEXTURE0+T)}const Z={[Tr]:i.REPEAT,[an]:i.CLAMP_TO_EDGE,[ol]:i.MIRRORED_REPEAT},Q={[st]:i.NEAREST,[Zc]:i.NEAREST_MIPMAP_NEAREST,[mr]:i.NEAREST_MIPMAP_LINEAR,[ut]:i.LINEAR,[Xa]:i.LINEAR_MIPMAP_NEAREST,[Fi]:i.LINEAR_MIPMAP_LINEAR},ae={[O0]:i.NEVER,[V0]:i.ALWAYS,[B0]:i.LESS,[dm]:i.LEQUAL,[k0]:i.EQUAL,[G0]:i.GEQUAL,[z0]:i.GREATER,[H0]:i.NOTEQUAL};function pe(L,T,X){if(T.type===ht&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===ut||T.magFilter===Xa||T.magFilter===mr||T.magFilter===Fi||T.minFilter===ut||T.minFilter===Xa||T.minFilter===mr||T.minFilter===Fi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),X?(i.texParameteri(L,i.TEXTURE_WRAP_S,Z[T.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,Z[T.wrapT]),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,Z[T.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,Q[T.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,Q[T.minFilter])):(i.texParameteri(L,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(L,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(T.wrapS!==an||T.wrapT!==an)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(L,i.TEXTURE_MAG_FILTER,w(T.magFilter)),i.texParameteri(L,i.TEXTURE_MIN_FILTER,w(T.minFilter)),T.minFilter!==st&&T.minFilter!==ut&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),T.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,ae[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const te=e.get("EXT_texture_filter_anisotropic");if(T.magFilter===st||T.minFilter!==mr&&T.minFilter!==Fi||T.type===ht&&e.has("OES_texture_float_linear")===!1||a===!1&&T.type===Xn&&e.has("OES_texture_half_float_linear")===!1)return;(T.anisotropy>1||n.get(T).__currentAnisotropy)&&(i.texParameterf(L,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy)}}function W(L,T){let X=!1;L.__webglInit===void 0&&(L.__webglInit=!0,T.addEventListener("dispose",M));const te=T.source;let ee=d.get(te);ee===void 0&&(ee={},d.set(te,ee));const se=O(T);if(se!==L.__cacheKey){ee[se]===void 0&&(ee[se]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,X=!0),ee[se].usedTimes++;const Se=ee[L.__cacheKey];Se!==void 0&&(ee[L.__cacheKey].usedTimes--,Se.usedTimes===0&&y(T)),L.__cacheKey=se,L.__webglTexture=ee[se].texture}return X}function J(L,T,X){let te=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(te=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(te=i.TEXTURE_3D);const ee=W(L,T),se=T.source;t.bindTexture(te,L.__webglTexture,i.TEXTURE0+X);const Se=n.get(se);if(se.version!==Se.__version||ee===!0){t.activeTexture(i.TEXTURE0+X);const ue=at.getPrimaries(at.workingColorSpace),xe=T.colorSpace===Gn?null:at.getPrimaries(T.colorSpace),Ie=T.colorSpace===Gn||ue===xe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);const ze=p(T)&&m(T.image)===!1;let ne=x(T.image,ze,!1,s.maxTextureSize);ne=Ue(T,ne);const nt=m(ne)||a,qe=r.convert(T.format,T.colorSpace);let Fe=r.convert(T.type),Ae=b(T.internalFormat,qe,Fe,T.colorSpace,T.isVideoTexture);pe(te,T,nt);let ge;const Ge=T.mipmaps,F=a&&T.isVideoTexture!==!0&&Ae!==lm,oe=Se.__version===void 0||ee===!0,he=se.dataReady,Re=S(T,ne,nt);if(T.isDepthTexture)Ae=i.DEPTH_COMPONENT,a?T.type===ht?Ae=i.DEPTH_COMPONENT32F:T.type===In?Ae=i.DEPTH_COMPONENT24:T.type===vs?Ae=i.DEPTH24_STENCIL8:Ae=i.DEPTH_COMPONENT16:T.type===ht&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===ys&&Ae===i.DEPTH_COMPONENT&&T.type!==Sl&&T.type!==In&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=In,Fe=r.convert(T.type)),T.format===Ar&&Ae===i.DEPTH_COMPONENT&&(Ae=i.DEPTH_STENCIL,T.type!==vs&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=vs,Fe=r.convert(T.type))),oe&&(F?t.texStorage2D(i.TEXTURE_2D,1,Ae,ne.width,ne.height):t.texImage2D(i.TEXTURE_2D,0,Ae,ne.width,ne.height,0,qe,Fe,null));else if(T.isDataTexture)if(Ge.length>0&&nt){F&&oe&&t.texStorage2D(i.TEXTURE_2D,Re,Ae,Ge[0].width,Ge[0].height);for(let D=0,re=Ge.length;D<re;D++)ge=Ge[D],F?he&&t.texSubImage2D(i.TEXTURE_2D,D,0,0,ge.width,ge.height,qe,Fe,ge.data):t.texImage2D(i.TEXTURE_2D,D,Ae,ge.width,ge.height,0,qe,Fe,ge.data);T.generateMipmaps=!1}else F?(oe&&t.texStorage2D(i.TEXTURE_2D,Re,Ae,ne.width,ne.height),he&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ne.width,ne.height,qe,Fe,ne.data)):t.texImage2D(i.TEXTURE_2D,0,Ae,ne.width,ne.height,0,qe,Fe,ne.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){F&&oe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Re,Ae,Ge[0].width,Ge[0].height,ne.depth);for(let D=0,re=Ge.length;D<re;D++)ge=Ge[D],T.format!==kt?qe!==null?F?he&&t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,D,0,0,0,ge.width,ge.height,ne.depth,qe,ge.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,D,Ae,ge.width,ge.height,ne.depth,0,ge.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?he&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,D,0,0,0,ge.width,ge.height,ne.depth,qe,Fe,ge.data):t.texImage3D(i.TEXTURE_2D_ARRAY,D,Ae,ge.width,ge.height,ne.depth,0,qe,Fe,ge.data)}else{F&&oe&&t.texStorage2D(i.TEXTURE_2D,Re,Ae,Ge[0].width,Ge[0].height);for(let D=0,re=Ge.length;D<re;D++)ge=Ge[D],T.format!==kt?qe!==null?F?he&&t.compressedTexSubImage2D(i.TEXTURE_2D,D,0,0,ge.width,ge.height,qe,ge.data):t.compressedTexImage2D(i.TEXTURE_2D,D,Ae,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?he&&t.texSubImage2D(i.TEXTURE_2D,D,0,0,ge.width,ge.height,qe,Fe,ge.data):t.texImage2D(i.TEXTURE_2D,D,Ae,ge.width,ge.height,0,qe,Fe,ge.data)}else if(T.isDataArrayTexture)F?(oe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Re,Ae,ne.width,ne.height,ne.depth),he&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,qe,Fe,ne.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ae,ne.width,ne.height,ne.depth,0,qe,Fe,ne.data);else if(T.isData3DTexture)F?(oe&&t.texStorage3D(i.TEXTURE_3D,Re,Ae,ne.width,ne.height,ne.depth),he&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,qe,Fe,ne.data)):t.texImage3D(i.TEXTURE_3D,0,Ae,ne.width,ne.height,ne.depth,0,qe,Fe,ne.data);else if(T.isFramebufferTexture){if(oe)if(F)t.texStorage2D(i.TEXTURE_2D,Re,Ae,ne.width,ne.height);else{let D=ne.width,re=ne.height;for(let ie=0;ie<Re;ie++)t.texImage2D(i.TEXTURE_2D,ie,Ae,D,re,0,qe,Fe,null),D>>=1,re>>=1}}else if(Ge.length>0&&nt){F&&oe&&t.texStorage2D(i.TEXTURE_2D,Re,Ae,Ge[0].width,Ge[0].height);for(let D=0,re=Ge.length;D<re;D++)ge=Ge[D],F?he&&t.texSubImage2D(i.TEXTURE_2D,D,0,0,qe,Fe,ge):t.texImage2D(i.TEXTURE_2D,D,Ae,qe,Fe,ge);T.generateMipmaps=!1}else F?(oe&&t.texStorage2D(i.TEXTURE_2D,Re,Ae,ne.width,ne.height),he&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,qe,Fe,ne)):t.texImage2D(i.TEXTURE_2D,0,Ae,qe,Fe,ne);v(T,nt)&&_(te),Se.__version=se.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function ce(L,T,X){if(T.image.length!==6)return;const te=W(L,T),ee=T.source;t.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+X);const se=n.get(ee);if(ee.version!==se.__version||te===!0){t.activeTexture(i.TEXTURE0+X);const Se=at.getPrimaries(at.workingColorSpace),ue=T.colorSpace===Gn?null:at.getPrimaries(T.colorSpace),xe=T.colorSpace===Gn||Se===ue?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const Ie=T.isCompressedTexture||T.image[0].isCompressedTexture,ze=T.image[0]&&T.image[0].isDataTexture,ne=[];for(let D=0;D<6;D++)!Ie&&!ze?ne[D]=x(T.image[D],!1,!0,s.maxCubemapSize):ne[D]=ze?T.image[D].image:T.image[D],ne[D]=Ue(T,ne[D]);const nt=ne[0],qe=m(nt)||a,Fe=r.convert(T.format,T.colorSpace),Ae=r.convert(T.type),ge=b(T.internalFormat,Fe,Ae,T.colorSpace),Ge=a&&T.isVideoTexture!==!0,F=se.__version===void 0||te===!0,oe=ee.dataReady;let he=S(T,nt,qe);pe(i.TEXTURE_CUBE_MAP,T,qe);let Re;if(Ie){Ge&&F&&t.texStorage2D(i.TEXTURE_CUBE_MAP,he,ge,nt.width,nt.height);for(let D=0;D<6;D++){Re=ne[D].mipmaps;for(let re=0;re<Re.length;re++){const ie=Re[re];T.format!==kt?Fe!==null?Ge?oe&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,re,0,0,ie.width,ie.height,Fe,ie.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,re,ge,ie.width,ie.height,0,ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ge?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,re,0,0,ie.width,ie.height,Fe,Ae,ie.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,re,ge,ie.width,ie.height,0,Fe,Ae,ie.data)}}}else{Re=T.mipmaps,Ge&&F&&(Re.length>0&&he++,t.texStorage2D(i.TEXTURE_CUBE_MAP,he,ge,ne[0].width,ne[0].height));for(let D=0;D<6;D++)if(ze){Ge?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,0,0,0,ne[D].width,ne[D].height,Fe,Ae,ne[D].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,0,ge,ne[D].width,ne[D].height,0,Fe,Ae,ne[D].data);for(let re=0;re<Re.length;re++){const we=Re[re].image[D].image;Ge?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,re+1,0,0,we.width,we.height,Fe,Ae,we.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,re+1,ge,we.width,we.height,0,Fe,Ae,we.data)}}else{Ge?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,0,0,0,Fe,Ae,ne[D]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,0,ge,Fe,Ae,ne[D]);for(let re=0;re<Re.length;re++){const ie=Re[re];Ge?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,re+1,0,0,Fe,Ae,ie.image[D]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,re+1,ge,Fe,Ae,ie.image[D])}}}v(T,qe)&&_(i.TEXTURE_CUBE_MAP),se.__version=ee.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function me(L,T,X,te,ee,se){const Se=r.convert(X.format,X.colorSpace),ue=r.convert(X.type),xe=b(X.internalFormat,Se,ue,X.colorSpace);if(!n.get(T).__hasExternalTextures){const ze=Math.max(1,T.width>>se),ne=Math.max(1,T.height>>se);ee===i.TEXTURE_3D||ee===i.TEXTURE_2D_ARRAY?t.texImage3D(ee,se,xe,ze,ne,T.depth,0,Se,ue,null):t.texImage2D(ee,se,xe,ze,ne,0,Se,ue,null)}t.bindFramebuffer(i.FRAMEBUFFER,L),be(T)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,te,ee,n.get(X).__webglTexture,0,Le(T)):(ee===i.TEXTURE_2D||ee>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,te,ee,n.get(X).__webglTexture,se),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ve(L,T,X){if(i.bindRenderbuffer(i.RENDERBUFFER,L),T.depthBuffer&&!T.stencilBuffer){let te=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(X||be(T)){const ee=T.depthTexture;ee&&ee.isDepthTexture&&(ee.type===ht?te=i.DEPTH_COMPONENT32F:ee.type===In&&(te=i.DEPTH_COMPONENT24));const se=Le(T);be(T)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,se,te,T.width,T.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,se,te,T.width,T.height)}else i.renderbufferStorage(i.RENDERBUFFER,te,T.width,T.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,L)}else if(T.depthBuffer&&T.stencilBuffer){const te=Le(T);X&&be(T)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,te,i.DEPTH24_STENCIL8,T.width,T.height):be(T)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,te,i.DEPTH24_STENCIL8,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,L)}else{const te=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let ee=0;ee<te.length;ee++){const se=te[ee],Se=r.convert(se.format,se.colorSpace),ue=r.convert(se.type),xe=b(se.internalFormat,Se,ue,se.colorSpace),Ie=Le(T);X&&be(T)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ie,xe,T.width,T.height):be(T)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ie,xe,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,xe,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function fe(L,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,L),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),k(T.depthTexture,0);const te=n.get(T.depthTexture).__webglTexture,ee=Le(T);if(T.depthTexture.format===ys)be(T)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,te,0,ee):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,te,0);else if(T.depthTexture.format===Ar)be(T)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,te,0,ee):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function Be(L){const T=n.get(L),X=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture&&!T.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");fe(T.__webglFramebuffer,L)}else if(X){T.__webglDepthbuffer=[];for(let te=0;te<6;te++)t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[te]),T.__webglDepthbuffer[te]=i.createRenderbuffer(),ve(T.__webglDepthbuffer[te],L,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=i.createRenderbuffer(),ve(T.__webglDepthbuffer,L,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Pe(L,T,X){const te=n.get(L);T!==void 0&&me(te.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),X!==void 0&&Be(L)}function z(L){const T=L.texture,X=n.get(L),te=n.get(T);L.addEventListener("dispose",A),L.isWebGLMultipleRenderTargets!==!0&&(te.__webglTexture===void 0&&(te.__webglTexture=i.createTexture()),te.__version=T.version,o.memory.textures++);const ee=L.isWebGLCubeRenderTarget===!0,se=L.isWebGLMultipleRenderTargets===!0,Se=m(L)||a;if(ee){X.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(a&&T.mipmaps&&T.mipmaps.length>0){X.__webglFramebuffer[ue]=[];for(let xe=0;xe<T.mipmaps.length;xe++)X.__webglFramebuffer[ue][xe]=i.createFramebuffer()}else X.__webglFramebuffer[ue]=i.createFramebuffer()}else{if(a&&T.mipmaps&&T.mipmaps.length>0){X.__webglFramebuffer=[];for(let ue=0;ue<T.mipmaps.length;ue++)X.__webglFramebuffer[ue]=i.createFramebuffer()}else X.__webglFramebuffer=i.createFramebuffer();if(se)if(s.drawBuffers){const ue=L.texture;for(let xe=0,Ie=ue.length;xe<Ie;xe++){const ze=n.get(ue[xe]);ze.__webglTexture===void 0&&(ze.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&L.samples>0&&be(L)===!1){const ue=se?T:[T];X.__webglMultisampledFramebuffer=i.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let xe=0;xe<ue.length;xe++){const Ie=ue[xe];X.__webglColorRenderbuffer[xe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,X.__webglColorRenderbuffer[xe]);const ze=r.convert(Ie.format,Ie.colorSpace),ne=r.convert(Ie.type),nt=b(Ie.internalFormat,ze,ne,Ie.colorSpace,L.isXRRenderTarget===!0),qe=Le(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,qe,nt,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.RENDERBUFFER,X.__webglColorRenderbuffer[xe])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&(X.__webglDepthRenderbuffer=i.createRenderbuffer(),ve(X.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ee){t.bindTexture(i.TEXTURE_CUBE_MAP,te.__webglTexture),pe(i.TEXTURE_CUBE_MAP,T,Se);for(let ue=0;ue<6;ue++)if(a&&T.mipmaps&&T.mipmaps.length>0)for(let xe=0;xe<T.mipmaps.length;xe++)me(X.__webglFramebuffer[ue][xe],L,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,xe);else me(X.__webglFramebuffer[ue],L,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);v(T,Se)&&_(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(se){const ue=L.texture;for(let xe=0,Ie=ue.length;xe<Ie;xe++){const ze=ue[xe],ne=n.get(ze);t.bindTexture(i.TEXTURE_2D,ne.__webglTexture),pe(i.TEXTURE_2D,ze,Se),me(X.__webglFramebuffer,L,ze,i.COLOR_ATTACHMENT0+xe,i.TEXTURE_2D,0),v(ze,Se)&&_(i.TEXTURE_2D)}t.unbindTexture()}else{let ue=i.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(a?ue=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ue,te.__webglTexture),pe(ue,T,Se),a&&T.mipmaps&&T.mipmaps.length>0)for(let xe=0;xe<T.mipmaps.length;xe++)me(X.__webglFramebuffer[xe],L,T,i.COLOR_ATTACHMENT0,ue,xe);else me(X.__webglFramebuffer,L,T,i.COLOR_ATTACHMENT0,ue,0);v(T,Se)&&_(ue),t.unbindTexture()}L.depthBuffer&&Be(L)}function Pt(L){const T=m(L)||a,X=L.isWebGLMultipleRenderTargets===!0?L.texture:[L.texture];for(let te=0,ee=X.length;te<ee;te++){const se=X[te];if(v(se,T)){const Se=L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,ue=n.get(se).__webglTexture;t.bindTexture(Se,ue),_(Se),t.unbindTexture()}}}function Me(L){if(a&&L.samples>0&&be(L)===!1){const T=L.isWebGLMultipleRenderTargets?L.texture:[L.texture],X=L.width,te=L.height;let ee=i.COLOR_BUFFER_BIT;const se=[],Se=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ue=n.get(L),xe=L.isWebGLMultipleRenderTargets===!0;if(xe)for(let Ie=0;Ie<T.length;Ie++)t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let Ie=0;Ie<T.length;Ie++){se.push(i.COLOR_ATTACHMENT0+Ie),L.depthBuffer&&se.push(Se);const ze=ue.__ignoreDepthValues!==void 0?ue.__ignoreDepthValues:!1;if(ze===!1&&(L.depthBuffer&&(ee|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&(ee|=i.STENCIL_BUFFER_BIT)),xe&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ue.__webglColorRenderbuffer[Ie]),ze===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Se]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Se])),xe){const ne=n.get(T[Ie]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ne,0)}i.blitFramebuffer(0,0,X,te,0,0,X,te,ee,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,se)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),xe)for(let Ie=0;Ie<T.length;Ie++){t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.RENDERBUFFER,ue.__webglColorRenderbuffer[Ie]);const ze=n.get(T[Ie]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.TEXTURE_2D,ze,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}}function Le(L){return Math.min(s.maxSamples,L.samples)}function be(L){const T=n.get(L);return a&&L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function ot(L){const T=o.render.frame;u.get(L)!==T&&(u.set(L,T),L.update())}function Ue(L,T){const X=L.colorSpace,te=L.format,ee=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||L.format===tu||X!==Yt&&X!==Gn&&(at.getTransfer(X)===xt?a===!1?e.has("EXT_sRGB")===!0&&te===kt?(L.format=tu,L.minFilter=ut,L.generateMipmaps=!1):T=mm.sRGBToLinear(T):(te!==kt||ee!==gi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),T}this.allocateTextureUnit=P,this.resetTextureUnits=B,this.setTexture2D=k,this.setTexture2DArray=V,this.setTexture3D=q,this.setTextureCube=H,this.rebindTextures=Pe,this.setupRenderTarget=z,this.updateRenderTargetMipmap=Pt,this.updateMultisampleRenderTarget=Me,this.setupDepthRenderbuffer=Be,this.setupFrameBufferTexture=me,this.useMultisampledRTT=be}function lM(i,e,t){const n=t.isWebGL2;function s(r,o=Gn){let a;const l=at.getTransfer(o);if(r===gi)return i.UNSIGNED_BYTE;if(r===sm)return i.UNSIGNED_SHORT_4_4_4_4;if(r===rm)return i.UNSIGNED_SHORT_5_5_5_1;if(r===Qc)return i.BYTE;if(r===im)return i.SHORT;if(r===Sl)return i.UNSIGNED_SHORT;if(r===So)return i.INT;if(r===In)return i.UNSIGNED_INT;if(r===ht)return i.FLOAT;if(r===Xn)return n?i.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===R0)return i.ALPHA;if(r===kt)return i.RGBA;if(r===C0)return i.LUMINANCE;if(r===P0)return i.LUMINANCE_ALPHA;if(r===ys)return i.DEPTH_COMPONENT;if(r===Ar)return i.DEPTH_STENCIL;if(r===tu)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===om)return i.RED;if(r===Ou)return i.RED_INTEGER;if(r===am)return i.RG;if(r===wl)return i.RG_INTEGER;if(r===Io)return i.RGBA_INTEGER;if(r===kl||r===zl||r===Hl||r===Gl)if(l===xt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===kl)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===zl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Hl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Gl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===kl)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===zl)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Hl)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Gl)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Uh||r===Nh||r===Fh||r===Oh)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Uh)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Nh)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Fh)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Oh)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===lm)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Bh||r===kh)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Bh)return l===xt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===kh)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===zh||r===Hh||r===Gh||r===Vh||r===Wh||r===Xh||r===qh||r===jh||r===$h||r===Yh||r===Kh||r===Zh||r===Qh||r===Jh)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===zh)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Hh)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Gh)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Vh)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Wh)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Xh)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===qh)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===jh)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===$h)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Yh)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Kh)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Zh)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Qh)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Jh)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Vl||r===ed||r===td)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===Vl)return l===xt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===ed)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===td)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===L0||r===nd||r===id||r===sd)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===Vl)return a.COMPRESSED_RED_RGTC1_EXT;if(r===nd)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===id)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===sd)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===vs?n?i.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}class cM extends hn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class xs extends Xe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const uM={type:"move"};class fc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,n),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(uM)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new xs;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const hM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,dM=`
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

}`;class fM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new Ht,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}render(e,t){if(this.texture!==null){if(this.mesh===null){const n=t.cameras[0].viewport,s=new Zt({extensions:{fragDepth:!0},vertexShader:hM,fragmentShader:dM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new j(new Fn(20,20),s)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class pM extends Rs{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,g=null;const x=new fM,m=t.getContextAttributes();let p=null,v=null;const _=[],b=[],S=new ye;let w=null;const M=new hn;M.layers.enable(1),M.viewport=new gt;const A=new hn;A.layers.enable(2),A.viewport=new gt;const U=[M,A],y=new cM;y.layers.enable(1),y.layers.enable(2);let E=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let J=_[W];return J===void 0&&(J=new fc,_[W]=J),J.getTargetRaySpace()},this.getControllerGrip=function(W){let J=_[W];return J===void 0&&(J=new fc,_[W]=J),J.getGripSpace()},this.getHand=function(W){let J=_[W];return J===void 0&&(J=new fc,_[W]=J),J.getHandSpace()};function B(W){const J=b.indexOf(W.inputSource);if(J===-1)return;const ce=_[J];ce!==void 0&&(ce.update(W.inputSource,W.frame,c||o),ce.dispatchEvent({type:W.type,data:W.inputSource}))}function P(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",P),s.removeEventListener("inputsourceschange",O);for(let W=0;W<_.length;W++){const J=b[W];J!==null&&(b[W]=null,_[W].disconnect(J))}E=null,N=null,x.reset(),e.setRenderTarget(p),f=null,d=null,h=null,s=null,v=null,pe.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(S.width,S.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(W){if(s=W,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",P),s.addEventListener("inputsourceschange",O),m.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(S),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const J={antialias:s.renderState.layers===void 0?m.antialias:!0,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,J),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new Mn(f.framebufferWidth,f.framebufferHeight,{format:kt,type:gi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let J=null,ce=null,me=null;m.depth&&(me=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,J=m.stencil?Ar:ys,ce=m.stencil?vs:In);const ve={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:r};h=new XRWebGLBinding(s,t),d=h.createProjectionLayer(ve),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new Mn(d.textureWidth,d.textureHeight,{format:kt,type:gi,depthTexture:new Em(d.textureWidth,d.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0});const fe=e.properties.get(v);fe.__ignoreDepthValues=d.ignoreDepthValues}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),pe.setContext(s),pe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function O(W){for(let J=0;J<W.removed.length;J++){const ce=W.removed[J],me=b.indexOf(ce);me>=0&&(b[me]=null,_[me].disconnect(ce))}for(let J=0;J<W.added.length;J++){const ce=W.added[J];let me=b.indexOf(ce);if(me===-1){for(let fe=0;fe<_.length;fe++)if(fe>=b.length){b.push(ce),me=fe;break}else if(b[fe]===null){b[fe]=ce,me=fe;break}if(me===-1)break}const ve=_[me];ve&&ve.connect(ce)}}const k=new R,V=new R;function q(W,J,ce){k.setFromMatrixPosition(J.matrixWorld),V.setFromMatrixPosition(ce.matrixWorld);const me=k.distanceTo(V),ve=J.projectionMatrix.elements,fe=ce.projectionMatrix.elements,Be=ve[14]/(ve[10]-1),Pe=ve[14]/(ve[10]+1),z=(ve[9]+1)/ve[5],Pt=(ve[9]-1)/ve[5],Me=(ve[8]-1)/ve[0],Le=(fe[8]+1)/fe[0],be=Be*Me,ot=Be*Le,Ue=me/(-Me+Le),L=Ue*-Me;J.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(L),W.translateZ(Ue),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();const T=Be+Ue,X=Pe+Ue,te=be-L,ee=ot+(me-L),se=z*Pe/X*T,Se=Pt*Pe/X*T;W.projectionMatrix.makePerspective(te,ee,se,Se,T,X),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}function H(W,J){J===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(J.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(s===null)return;x.texture!==null&&(W.near=x.depthNear,W.far=x.depthFar),y.near=A.near=M.near=W.near,y.far=A.far=M.far=W.far,(E!==y.near||N!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),E=y.near,N=y.far,M.near=E,M.far=N,A.near=E,A.far=N,M.updateProjectionMatrix(),A.updateProjectionMatrix(),W.updateProjectionMatrix());const J=W.parent,ce=y.cameras;H(y,J);for(let me=0;me<ce.length;me++)H(ce[me],J);ce.length===2?q(y,M,A):y.projectionMatrix.copy(M.projectionMatrix),Z(W,y,J)};function Z(W,J,ce){ce===null?W.matrix.copy(J.matrixWorld):(W.matrix.copy(ce.matrixWorld),W.matrix.invert(),W.matrix.multiply(J.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(J.projectionMatrix),W.projectionMatrixInverse.copy(J.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Cr*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(W){l=W,d!==null&&(d.fixedFoveation=W),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=W)},this.hasDepthSensing=function(){return x.texture!==null};let Q=null;function ae(W,J){if(u=J.getViewerPose(c||o),g=J,u!==null){const ce=u.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let me=!1;ce.length!==y.cameras.length&&(y.cameras.length=0,me=!0);for(let fe=0;fe<ce.length;fe++){const Be=ce[fe];let Pe=null;if(f!==null)Pe=f.getViewport(Be);else{const Pt=h.getViewSubImage(d,Be);Pe=Pt.viewport,fe===0&&(e.setRenderTargetTextures(v,Pt.colorTexture,d.ignoreDepthValues?void 0:Pt.depthStencilTexture),e.setRenderTarget(v))}let z=U[fe];z===void 0&&(z=new hn,z.layers.enable(fe),z.viewport=new gt,U[fe]=z),z.matrix.fromArray(Be.transform.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale),z.projectionMatrix.fromArray(Be.projectionMatrix),z.projectionMatrixInverse.copy(z.projectionMatrix).invert(),z.viewport.set(Pe.x,Pe.y,Pe.width,Pe.height),fe===0&&(y.matrix.copy(z.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),me===!0&&y.cameras.push(z)}const ve=s.enabledFeatures;if(ve&&ve.includes("depth-sensing")){const fe=h.getDepthInformation(ce[0]);fe&&fe.isValid&&fe.texture&&x.init(e,fe,s.renderState)}}for(let ce=0;ce<_.length;ce++){const me=b[ce],ve=_[ce];me!==null&&ve!==void 0&&ve.update(me,J,c||o)}x.render(e,y),Q&&Q(W,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),g=null}const pe=new wm;pe.setAnimationLoop(ae),this.setAnimationLoop=function(W){Q=W},this.dispose=function(){}}}function mM(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,bm(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,v,_,b){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,b)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,v,_):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===gn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===gn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const v=e.get(p).envMap;if(v&&(m.envMap.value=v,m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const _=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*_,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,v,_){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=_*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===gn&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){const v=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function gM(i,e,t,n){let s={},r={},o=[];const a=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(v,_){const b=_.program;n.uniformBlockBinding(v,b)}function c(v,_){let b=s[v.id];b===void 0&&(g(v),b=u(v),s[v.id]=b,v.addEventListener("dispose",m));const S=_.program;n.updateUBOMapping(v,S);const w=e.render.frame;r[v.id]!==w&&(d(v),r[v.id]=w)}function u(v){const _=h();v.__bindingPointIndex=_;const b=i.createBuffer(),S=v.__size,w=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,S,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,b),b}function h(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const _=s[v.id],b=v.uniforms,S=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let w=0,M=b.length;w<M;w++){const A=Array.isArray(b[w])?b[w]:[b[w]];for(let U=0,y=A.length;U<y;U++){const E=A[U];if(f(E,w,U,S)===!0){const N=E.__offset,B=Array.isArray(E.value)?E.value:[E.value];let P=0;for(let O=0;O<B.length;O++){const k=B[O],V=x(k);typeof k=="number"||typeof k=="boolean"?(E.__data[0]=k,i.bufferSubData(i.UNIFORM_BUFFER,N+P,E.__data)):k.isMatrix3?(E.__data[0]=k.elements[0],E.__data[1]=k.elements[1],E.__data[2]=k.elements[2],E.__data[3]=0,E.__data[4]=k.elements[3],E.__data[5]=k.elements[4],E.__data[6]=k.elements[5],E.__data[7]=0,E.__data[8]=k.elements[6],E.__data[9]=k.elements[7],E.__data[10]=k.elements[8],E.__data[11]=0):(k.toArray(E.__data,P),P+=V.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,N,E.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(v,_,b,S){const w=v.value,M=_+"_"+b;if(S[M]===void 0)return typeof w=="number"||typeof w=="boolean"?S[M]=w:S[M]=w.clone(),!0;{const A=S[M];if(typeof w=="number"||typeof w=="boolean"){if(A!==w)return S[M]=w,!0}else if(A.equals(w)===!1)return A.copy(w),!0}return!1}function g(v){const _=v.uniforms;let b=0;const S=16;for(let M=0,A=_.length;M<A;M++){const U=Array.isArray(_[M])?_[M]:[_[M]];for(let y=0,E=U.length;y<E;y++){const N=U[y],B=Array.isArray(N.value)?N.value:[N.value];for(let P=0,O=B.length;P<O;P++){const k=B[P],V=x(k),q=b%S;q!==0&&S-q<V.boundary&&(b+=S-q),N.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=b,b+=V.storage}}}const w=b%S;return w>0&&(b+=S-w),v.__size=b,v.__cache={},this}function x(v){const _={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=48,_.storage=48):v.isMatrix4?(_.boundary=64,_.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),_}function m(v){const _=v.target;_.removeEventListener("dispose",m);const b=o.indexOf(_.__bindingPointIndex);o.splice(b,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function p(){for(const v in s)i.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}class Lm{constructor(e={}){const{canvas:t=s_(),context:n=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=o;const f=new Uint32Array(4),g=new Int32Array(4);let x=null,m=null;const p=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Et,this._useLegacyLights=!1,this.toneMapping=ns,this.toneMappingExposure=1;const _=this;let b=!1,S=0,w=0,M=null,A=-1,U=null;const y=new gt,E=new gt;let N=null;const B=new Te(0);let P=0,O=t.width,k=t.height,V=1,q=null,H=null;const Z=new gt(0,0,O,k),Q=new gt(0,0,O,k);let ae=!1;const pe=new Hu;let W=!1,J=!1,ce=null;const me=new De,ve=new ye,fe=new R,Be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Pe(){return M===null?V:1}let z=n;function Pt(C,G){for(let Y=0;Y<C.length;Y++){const K=C[Y],$=t.getContext(K,G);if($!==null)return $}return null}try{const C={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Fu}`),t.addEventListener("webglcontextlost",Re,!1),t.addEventListener("webglcontextrestored",D,!1),t.addEventListener("webglcontextcreationerror",re,!1),z===null){const G=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&G.shift(),z=Pt(G,C),z===null)throw Pt(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext!="undefined"&&z instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),z.getShaderPrecisionFormat===void 0&&(z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Me,Le,be,ot,Ue,L,T,X,te,ee,se,Se,ue,xe,Ie,ze,ne,nt,qe,Fe,Ae,ge,Ge,F;function oe(){Me=new Sy(z),Le=new _y(z,Me,e),Me.init(Le),ge=new lM(z,Me,Le),be=new oM(z,Me,Le),ot=new Ty(z),Ue=new qb,L=new aM(z,Me,be,Ue,Le,ge,ot),T=new vy(_),X=new My(_),te=new U_(z,Le),Ge=new my(z,Me,te,Le),ee=new wy(z,te,ot,Ge),se=new Py(z,ee,te,ot),qe=new Cy(z,Le,L),ze=new xy(Ue),Se=new Xb(_,T,X,Me,Le,Ge,ze),ue=new mM(_,Ue),xe=new $b,Ie=new eM(Me,Le),nt=new py(_,T,X,be,se,d,l),ne=new rM(_,se,Le),F=new gM(z,ot,Le,be),Fe=new gy(z,Me,ot,Le),Ae=new Ey(z,Me,ot,Le),ot.programs=Se.programs,_.capabilities=Le,_.extensions=Me,_.properties=Ue,_.renderLists=xe,_.shadowMap=ne,_.state=be,_.info=ot}oe();const he=new pM(_,z);this.xr=he,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const C=Me.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Me.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(C){C!==void 0&&(V=C,this.setSize(O,k,!1))},this.getSize=function(C){return C.set(O,k)},this.setSize=function(C,G,Y=!0){if(he.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=C,k=G,t.width=Math.floor(C*V),t.height=Math.floor(G*V),Y===!0&&(t.style.width=C+"px",t.style.height=G+"px"),this.setViewport(0,0,C,G)},this.getDrawingBufferSize=function(C){return C.set(O*V,k*V).floor()},this.setDrawingBufferSize=function(C,G,Y){O=C,k=G,V=Y,t.width=Math.floor(C*Y),t.height=Math.floor(G*Y),this.setViewport(0,0,C,G)},this.getCurrentViewport=function(C){return C.copy(y)},this.getViewport=function(C){return C.copy(Z)},this.setViewport=function(C,G,Y,K){C.isVector4?Z.set(C.x,C.y,C.z,C.w):Z.set(C,G,Y,K),be.viewport(y.copy(Z).multiplyScalar(V).floor())},this.getScissor=function(C){return C.copy(Q)},this.setScissor=function(C,G,Y,K){C.isVector4?Q.set(C.x,C.y,C.z,C.w):Q.set(C,G,Y,K),be.scissor(E.copy(Q).multiplyScalar(V).floor())},this.getScissorTest=function(){return ae},this.setScissorTest=function(C){be.setScissorTest(ae=C)},this.setOpaqueSort=function(C){q=C},this.setTransparentSort=function(C){H=C},this.getClearColor=function(C){return C.copy(nt.getClearColor())},this.setClearColor=function(){nt.setClearColor.apply(nt,arguments)},this.getClearAlpha=function(){return nt.getClearAlpha()},this.setClearAlpha=function(){nt.setClearAlpha.apply(nt,arguments)},this.clear=function(C=!0,G=!0,Y=!0){let K=0;if(C){let $=!1;if(M!==null){const _e=M.texture.format;$=_e===Io||_e===wl||_e===Ou}if($){const _e=M.texture.type,Ee=_e===gi||_e===In||_e===Sl||_e===vs||_e===sm||_e===rm,Ne=nt.getClearColor(),Oe=nt.getClearAlpha(),je=Ne.r,He=Ne.g,Ve=Ne.b;Ee?(f[0]=je,f[1]=He,f[2]=Ve,f[3]=Oe,z.clearBufferuiv(z.COLOR,0,f)):(g[0]=je,g[1]=He,g[2]=Ve,g[3]=Oe,z.clearBufferiv(z.COLOR,0,g))}else K|=z.COLOR_BUFFER_BIT}G&&(K|=z.DEPTH_BUFFER_BIT),Y&&(K|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Re,!1),t.removeEventListener("webglcontextrestored",D,!1),t.removeEventListener("webglcontextcreationerror",re,!1),xe.dispose(),Ie.dispose(),Ue.dispose(),T.dispose(),X.dispose(),se.dispose(),Ge.dispose(),F.dispose(),Se.dispose(),he.dispose(),he.removeEventListener("sessionstart",Jt),he.removeEventListener("sessionend",et),ce&&(ce.dispose(),ce=null),Lt.stop()};function Re(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function D(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const C=ot.autoReset,G=ne.enabled,Y=ne.autoUpdate,K=ne.needsUpdate,$=ne.type;oe(),ot.autoReset=C,ne.enabled=G,ne.autoUpdate=Y,ne.needsUpdate=K,ne.type=$}function re(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ie(C){const G=C.target;G.removeEventListener("dispose",ie),we(G)}function we(C){Ce(C),Ue.remove(C)}function Ce(C){const G=Ue.get(C).programs;G!==void 0&&(G.forEach(function(Y){Se.releaseProgram(Y)}),C.isShaderMaterial&&Se.releaseShaderCache(C))}this.renderBufferDirect=function(C,G,Y,K,$,_e){G===null&&(G=Be);const Ee=$.isMesh&&$.matrixWorld.determinant()<0,Ne=Ug(C,G,Y,K,$);be.setMaterial(K,Ee);let Oe=Y.index,je=1;if(K.wireframe===!0){if(Oe=ee.getWireframeAttribute(Y),Oe===void 0)return;je=2}const He=Y.drawRange,Ve=Y.attributes.position;let It=He.start*je,wn=(He.start+He.count)*je;_e!==null&&(It=Math.max(It,_e.start*je),wn=Math.min(wn,(_e.start+_e.count)*je)),Oe!==null?(It=Math.max(It,0),wn=Math.min(wn,Oe.count)):Ve!=null&&(It=Math.max(It,0),wn=Math.min(wn,Ve.count));const jt=wn-It;if(jt<0||jt===1/0)return;Ge.setup($,K,Ne,Y,Oe);let wi,St=Fe;if(Oe!==null&&(wi=te.get(Oe),St=Ae,St.setIndex(wi)),$.isMesh)K.wireframe===!0?(be.setLineWidth(K.wireframeLinewidth*Pe()),St.setMode(z.LINES)):St.setMode(z.TRIANGLES);else if($.isLine){let $e=K.linewidth;$e===void 0&&($e=1),be.setLineWidth($e*Pe()),$.isLineSegments?St.setMode(z.LINES):$.isLineLoop?St.setMode(z.LINE_LOOP):St.setMode(z.LINE_STRIP)}else $.isPoints?St.setMode(z.POINTS):$.isSprite&&St.setMode(z.TRIANGLES);if($.isBatchedMesh)St.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else if($.isInstancedMesh)St.renderInstances(It,jt,$.count);else if(Y.isInstancedBufferGeometry){const $e=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Ul=Math.min(Y.instanceCount,$e);St.renderInstances(It,jt,Ul)}else St.render(It,jt)};function Je(C,G,Y){C.transparent===!0&&C.side===dn&&C.forceSinglePass===!1?(C.side=gn,C.needsUpdate=!0,Xo(C,G,Y),C.side=ni,C.needsUpdate=!0,Xo(C,G,Y),C.side=dn):Xo(C,G,Y)}this.compile=function(C,G,Y=null){Y===null&&(Y=C),m=Ie.get(Y),m.init(),v.push(m),Y.traverseVisible(function($){$.isLight&&$.layers.test(G.layers)&&(m.pushLight($),$.castShadow&&m.pushShadow($))}),C!==Y&&C.traverseVisible(function($){$.isLight&&$.layers.test(G.layers)&&(m.pushLight($),$.castShadow&&m.pushShadow($))}),m.setupLights(_._useLegacyLights);const K=new Set;return C.traverse(function($){const _e=$.material;if(_e)if(Array.isArray(_e))for(let Ee=0;Ee<_e.length;Ee++){const Ne=_e[Ee];Je(Ne,Y,$),K.add(Ne)}else Je(_e,Y,$),K.add(_e)}),v.pop(),m=null,K},this.compileAsync=function(C,G,Y=null){const K=this.compile(C,G,Y);return new Promise($=>{function _e(){if(K.forEach(function(Ee){Ue.get(Ee).currentProgram.isReady()&&K.delete(Ee)}),K.size===0){$(C);return}setTimeout(_e,10)}Me.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let Ke=null;function ft(C){Ke&&Ke(C)}function Jt(){Lt.stop()}function et(){Lt.start()}const Lt=new wm;Lt.setAnimationLoop(ft),typeof self!="undefined"&&Lt.setContext(self),this.setAnimationLoop=function(C){Ke=C,he.setAnimationLoop(C),C===null?Lt.stop():Lt.start()},he.addEventListener("sessionstart",Jt),he.addEventListener("sessionend",et),this.render=function(C,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),he.enabled===!0&&he.isPresenting===!0&&(he.cameraAutoUpdate===!0&&he.updateCamera(G),G=he.getCamera()),C.isScene===!0&&C.onBeforeRender(_,C,G,M),m=Ie.get(C,v.length),m.init(),v.push(m),me.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),pe.setFromProjectionMatrix(me),J=this.localClippingEnabled,W=ze.init(this.clippingPlanes,J),x=xe.get(C,p.length),x.init(),p.push(x),ln(C,G,0,_.sortObjects),x.finish(),_.sortObjects===!0&&x.sort(q,H),this.info.render.frame++,W===!0&&ze.beginShadows();const Y=m.state.shadowsArray;if(ne.render(Y,C,G),W===!0&&ze.endShadows(),this.info.autoReset===!0&&this.info.reset(),(he.enabled===!1||he.isPresenting===!1||he.hasDepthSensing()===!1)&&nt.render(x,C),m.setupLights(_._useLegacyLights),G.isArrayCamera){const K=G.cameras;for(let $=0,_e=K.length;$<_e;$++){const Ee=K[$];_h(x,C,Ee,Ee.viewport)}}else _h(x,C,G);M!==null&&(L.updateMultisampleRenderTarget(M),L.updateRenderTargetMipmap(M)),C.isScene===!0&&C.onAfterRender(_,C,G),Ge.resetDefaultState(),A=-1,U=null,v.pop(),v.length>0?m=v[v.length-1]:m=null,p.pop(),p.length>0?x=p[p.length-1]:x=null};function ln(C,G,Y,K){if(C.visible===!1)return;if(C.layers.test(G.layers)){if(C.isGroup)Y=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(G);else if(C.isLight)m.pushLight(C),C.castShadow&&m.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||pe.intersectsSprite(C)){K&&fe.setFromMatrixPosition(C.matrixWorld).applyMatrix4(me);const Ee=se.update(C),Ne=C.material;Ne.visible&&x.push(C,Ee,Ne,Y,fe.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||pe.intersectsObject(C))){const Ee=se.update(C),Ne=C.material;if(K&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),fe.copy(C.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),fe.copy(Ee.boundingSphere.center)),fe.applyMatrix4(C.matrixWorld).applyMatrix4(me)),Array.isArray(Ne)){const Oe=Ee.groups;for(let je=0,He=Oe.length;je<He;je++){const Ve=Oe[je],It=Ne[Ve.materialIndex];It&&It.visible&&x.push(C,Ee,It,Y,fe.z,Ve)}}else Ne.visible&&x.push(C,Ee,Ne,Y,fe.z,null)}}const _e=C.children;for(let Ee=0,Ne=_e.length;Ee<Ne;Ee++)ln(_e[Ee],G,Y,K)}function _h(C,G,Y,K){const $=C.opaque,_e=C.transmissive,Ee=C.transparent;m.setupLightsView(Y),W===!0&&ze.setGlobalState(_.clippingPlanes,Y),_e.length>0&&Dg($,_e,G,Y),K&&be.viewport(y.copy(K)),$.length>0&&Wo($,G,Y),_e.length>0&&Wo(_e,G,Y),Ee.length>0&&Wo(Ee,G,Y),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function Dg(C,G,Y,K){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;const _e=Le.isWebGL2;ce===null&&(ce=new Mn(1,1,{generateMipmaps:!0,type:Me.has("EXT_color_buffer_half_float")?Xn:gi,minFilter:Fi,samples:_e?4:0})),_.getDrawingBufferSize(ve),_e?ce.setSize(ve.x,ve.y):ce.setSize(hl(ve.x),hl(ve.y));const Ee=_.getRenderTarget();_.setRenderTarget(ce),_.getClearColor(B),P=_.getClearAlpha(),P<1&&_.setClearColor(16777215,.5),_.clear();const Ne=_.toneMapping;_.toneMapping=ns,Wo(C,Y,K),L.updateMultisampleRenderTarget(ce),L.updateRenderTargetMipmap(ce);let Oe=!1;for(let je=0,He=G.length;je<He;je++){const Ve=G[je],It=Ve.object,wn=Ve.geometry,jt=Ve.material,wi=Ve.group;if(jt.side===dn&&It.layers.test(K.layers)){const St=jt.side;jt.side=gn,jt.needsUpdate=!0,xh(It,Y,K,wn,jt,wi),jt.side=St,jt.needsUpdate=!0,Oe=!0}}Oe===!0&&(L.updateMultisampleRenderTarget(ce),L.updateRenderTargetMipmap(ce)),_.setRenderTarget(Ee),_.setClearColor(B,P),_.toneMapping=Ne}function Wo(C,G,Y){const K=G.isScene===!0?G.overrideMaterial:null;for(let $=0,_e=C.length;$<_e;$++){const Ee=C[$],Ne=Ee.object,Oe=Ee.geometry,je=K===null?Ee.material:K,He=Ee.group;Ne.layers.test(Y.layers)&&xh(Ne,G,Y,Oe,je,He)}}function xh(C,G,Y,K,$,_e){C.onBeforeRender(_,G,Y,K,$,_e),C.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),$.onBeforeRender(_,G,Y,K,C,_e),$.transparent===!0&&$.side===dn&&$.forceSinglePass===!1?($.side=gn,$.needsUpdate=!0,_.renderBufferDirect(Y,G,K,$,C,_e),$.side=ni,$.needsUpdate=!0,_.renderBufferDirect(Y,G,K,$,C,_e),$.side=dn):_.renderBufferDirect(Y,G,K,$,C,_e),C.onAfterRender(_,G,Y,K,$,_e)}function Xo(C,G,Y){G.isScene!==!0&&(G=Be);const K=Ue.get(C),$=m.state.lights,_e=m.state.shadowsArray,Ee=$.state.version,Ne=Se.getParameters(C,$.state,_e,G,Y),Oe=Se.getProgramCacheKey(Ne);let je=K.programs;K.environment=C.isMeshStandardMaterial?G.environment:null,K.fog=G.fog,K.envMap=(C.isMeshStandardMaterial?X:T).get(C.envMap||K.environment),je===void 0&&(C.addEventListener("dispose",ie),je=new Map,K.programs=je);let He=je.get(Oe);if(He!==void 0){if(K.currentProgram===He&&K.lightsStateVersion===Ee)return yh(C,Ne),He}else Ne.uniforms=Se.getUniforms(C),C.onBuild(Y,Ne,_),C.onBeforeCompile(Ne,_),He=Se.acquireProgram(Ne,Oe),je.set(Oe,He),K.uniforms=Ne.uniforms;const Ve=K.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ve.clippingPlanes=ze.uniform),yh(C,Ne),K.needsLights=Fg(C),K.lightsStateVersion=Ee,K.needsLights&&(Ve.ambientLightColor.value=$.state.ambient,Ve.lightProbe.value=$.state.probe,Ve.directionalLights.value=$.state.directional,Ve.directionalLightShadows.value=$.state.directionalShadow,Ve.spotLights.value=$.state.spot,Ve.spotLightShadows.value=$.state.spotShadow,Ve.rectAreaLights.value=$.state.rectArea,Ve.ltc_1.value=$.state.rectAreaLTC1,Ve.ltc_2.value=$.state.rectAreaLTC2,Ve.pointLights.value=$.state.point,Ve.pointLightShadows.value=$.state.pointShadow,Ve.hemisphereLights.value=$.state.hemi,Ve.directionalShadowMap.value=$.state.directionalShadowMap,Ve.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Ve.spotShadowMap.value=$.state.spotShadowMap,Ve.spotLightMatrix.value=$.state.spotLightMatrix,Ve.spotLightMap.value=$.state.spotLightMap,Ve.pointShadowMap.value=$.state.pointShadowMap,Ve.pointShadowMatrix.value=$.state.pointShadowMatrix),K.currentProgram=He,K.uniformsList=null,He}function vh(C){if(C.uniformsList===null){const G=C.currentProgram.getUniforms();C.uniformsList=qa.seqWithValue(G.seq,C.uniforms)}return C.uniformsList}function yh(C,G){const Y=Ue.get(C);Y.outputColorSpace=G.outputColorSpace,Y.batching=G.batching,Y.instancing=G.instancing,Y.instancingColor=G.instancingColor,Y.skinning=G.skinning,Y.morphTargets=G.morphTargets,Y.morphNormals=G.morphNormals,Y.morphColors=G.morphColors,Y.morphTargetsCount=G.morphTargetsCount,Y.numClippingPlanes=G.numClippingPlanes,Y.numIntersection=G.numClipIntersection,Y.vertexAlphas=G.vertexAlphas,Y.vertexTangents=G.vertexTangents,Y.toneMapping=G.toneMapping}function Ug(C,G,Y,K,$){G.isScene!==!0&&(G=Be),L.resetTextureUnits();const _e=G.fog,Ee=K.isMeshStandardMaterial?G.environment:null,Ne=M===null?_.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:Yt,Oe=(K.isMeshStandardMaterial?X:T).get(K.envMap||Ee),je=K.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,He=!!Y.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Ve=!!Y.morphAttributes.position,It=!!Y.morphAttributes.normal,wn=!!Y.morphAttributes.color;let jt=ns;K.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(jt=_.toneMapping);const wi=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,St=wi!==void 0?wi.length:0,$e=Ue.get(K),Ul=m.state.lights;if(W===!0&&(J===!0||C!==U)){const On=C===U&&K.id===A;ze.setState(K,C,On)}let Rt=!1;K.version===$e.__version?($e.needsLights&&$e.lightsStateVersion!==Ul.state.version||$e.outputColorSpace!==Ne||$.isBatchedMesh&&$e.batching===!1||!$.isBatchedMesh&&$e.batching===!0||$.isInstancedMesh&&$e.instancing===!1||!$.isInstancedMesh&&$e.instancing===!0||$.isSkinnedMesh&&$e.skinning===!1||!$.isSkinnedMesh&&$e.skinning===!0||$.isInstancedMesh&&$e.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&$e.instancingColor===!1&&$.instanceColor!==null||$e.envMap!==Oe||K.fog===!0&&$e.fog!==_e||$e.numClippingPlanes!==void 0&&($e.numClippingPlanes!==ze.numPlanes||$e.numIntersection!==ze.numIntersection)||$e.vertexAlphas!==je||$e.vertexTangents!==He||$e.morphTargets!==Ve||$e.morphNormals!==It||$e.morphColors!==wn||$e.toneMapping!==jt||Le.isWebGL2===!0&&$e.morphTargetsCount!==St)&&(Rt=!0):(Rt=!0,$e.__version=K.version);let rs=$e.currentProgram;Rt===!0&&(rs=Xo(K,G,$));let bh=!1,qr=!1,Nl=!1;const nn=rs.getUniforms(),os=$e.uniforms;if(be.useProgram(rs.program)&&(bh=!0,qr=!0,Nl=!0),K.id!==A&&(A=K.id,qr=!0),bh||U!==C){nn.setValue(z,"projectionMatrix",C.projectionMatrix),nn.setValue(z,"viewMatrix",C.matrixWorldInverse);const On=nn.map.cameraPosition;On!==void 0&&On.setValue(z,fe.setFromMatrixPosition(C.matrixWorld)),Le.logarithmicDepthBuffer&&nn.setValue(z,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&nn.setValue(z,"isOrthographic",C.isOrthographicCamera===!0),U!==C&&(U=C,qr=!0,Nl=!0)}if($.isSkinnedMesh){nn.setOptional(z,$,"bindMatrix"),nn.setOptional(z,$,"bindMatrixInverse");const On=$.skeleton;On&&(Le.floatVertexTextures?(On.boneTexture===null&&On.computeBoneTexture(),nn.setValue(z,"boneTexture",On.boneTexture,L)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}$.isBatchedMesh&&(nn.setOptional(z,$,"batchingTexture"),nn.setValue(z,"batchingTexture",$._matricesTexture,L));const Fl=Y.morphAttributes;if((Fl.position!==void 0||Fl.normal!==void 0||Fl.color!==void 0&&Le.isWebGL2===!0)&&qe.update($,Y,rs),(qr||$e.receiveShadow!==$.receiveShadow)&&($e.receiveShadow=$.receiveShadow,nn.setValue(z,"receiveShadow",$.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(os.envMap.value=Oe,os.flipEnvMap.value=Oe.isCubeTexture&&Oe.isRenderTargetTexture===!1?-1:1),qr&&(nn.setValue(z,"toneMappingExposure",_.toneMappingExposure),$e.needsLights&&Ng(os,Nl),_e&&K.fog===!0&&ue.refreshFogUniforms(os,_e),ue.refreshMaterialUniforms(os,K,V,k,ce),qa.upload(z,vh($e),os,L)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(qa.upload(z,vh($e),os,L),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&nn.setValue(z,"center",$.center),nn.setValue(z,"modelViewMatrix",$.modelViewMatrix),nn.setValue(z,"normalMatrix",$.normalMatrix),nn.setValue(z,"modelMatrix",$.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const On=K.uniformsGroups;for(let Ol=0,Og=On.length;Ol<Og;Ol++)if(Le.isWebGL2){const Mh=On[Ol];F.update(Mh,rs),F.bind(Mh,rs)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return rs}function Ng(C,G){C.ambientLightColor.needsUpdate=G,C.lightProbe.needsUpdate=G,C.directionalLights.needsUpdate=G,C.directionalLightShadows.needsUpdate=G,C.pointLights.needsUpdate=G,C.pointLightShadows.needsUpdate=G,C.spotLights.needsUpdate=G,C.spotLightShadows.needsUpdate=G,C.rectAreaLights.needsUpdate=G,C.hemisphereLights.needsUpdate=G}function Fg(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(C,G,Y){Ue.get(C.texture).__webglTexture=G,Ue.get(C.depthTexture).__webglTexture=Y;const K=Ue.get(C);K.__hasExternalTextures=!0,K.__hasExternalTextures&&(K.__autoAllocateDepthBuffer=Y===void 0,K.__autoAllocateDepthBuffer||Me.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,G){const Y=Ue.get(C);Y.__webglFramebuffer=G,Y.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(C,G=0,Y=0){M=C,S=G,w=Y;let K=!0,$=null,_e=!1,Ee=!1;if(C){const Oe=Ue.get(C);Oe.__useDefaultFramebuffer!==void 0?(be.bindFramebuffer(z.FRAMEBUFFER,null),K=!1):Oe.__webglFramebuffer===void 0?L.setupRenderTarget(C):Oe.__hasExternalTextures&&L.rebindTextures(C,Ue.get(C.texture).__webglTexture,Ue.get(C.depthTexture).__webglTexture);const je=C.texture;(je.isData3DTexture||je.isDataArrayTexture||je.isCompressedArrayTexture)&&(Ee=!0);const He=Ue.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(He[G])?$=He[G][Y]:$=He[G],_e=!0):Le.isWebGL2&&C.samples>0&&L.useMultisampledRTT(C)===!1?$=Ue.get(C).__webglMultisampledFramebuffer:Array.isArray(He)?$=He[Y]:$=He,y.copy(C.viewport),E.copy(C.scissor),N=C.scissorTest}else y.copy(Z).multiplyScalar(V).floor(),E.copy(Q).multiplyScalar(V).floor(),N=ae;if(be.bindFramebuffer(z.FRAMEBUFFER,$)&&Le.drawBuffers&&K&&be.drawBuffers(C,$),be.viewport(y),be.scissor(E),be.setScissorTest(N),_e){const Oe=Ue.get(C.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+G,Oe.__webglTexture,Y)}else if(Ee){const Oe=Ue.get(C.texture),je=G||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,Oe.__webglTexture,Y||0,je)}A=-1},this.readRenderTargetPixels=function(C,G,Y,K,$,_e,Ee){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=Ue.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ee!==void 0&&(Ne=Ne[Ee]),Ne){be.bindFramebuffer(z.FRAMEBUFFER,Ne);try{const Oe=C.texture,je=Oe.format,He=Oe.type;if(je!==kt&&ge.convert(je)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ve=He===Xn&&(Me.has("EXT_color_buffer_half_float")||Le.isWebGL2&&Me.has("EXT_color_buffer_float"));if(He!==gi&&ge.convert(He)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_TYPE)&&!(He===ht&&(Le.isWebGL2||Me.has("OES_texture_float")||Me.has("WEBGL_color_buffer_float")))&&!Ve){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=C.width-K&&Y>=0&&Y<=C.height-$&&z.readPixels(G,Y,K,$,ge.convert(je),ge.convert(He),_e)}finally{const Oe=M!==null?Ue.get(M).__webglFramebuffer:null;be.bindFramebuffer(z.FRAMEBUFFER,Oe)}}},this.copyFramebufferToTexture=function(C,G,Y=0){const K=Math.pow(2,-Y),$=Math.floor(G.image.width*K),_e=Math.floor(G.image.height*K);L.setTexture2D(G,0),z.copyTexSubImage2D(z.TEXTURE_2D,Y,0,0,C.x,C.y,$,_e),be.unbindTexture()},this.copyTextureToTexture=function(C,G,Y,K=0){const $=G.image.width,_e=G.image.height,Ee=ge.convert(Y.format),Ne=ge.convert(Y.type);L.setTexture2D(Y,0),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,Y.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,Y.unpackAlignment),G.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,K,C.x,C.y,$,_e,Ee,Ne,G.image.data):G.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,K,C.x,C.y,G.mipmaps[0].width,G.mipmaps[0].height,Ee,G.mipmaps[0].data):z.texSubImage2D(z.TEXTURE_2D,K,C.x,C.y,Ee,Ne,G.image),K===0&&Y.generateMipmaps&&z.generateMipmap(z.TEXTURE_2D),be.unbindTexture()},this.copyTextureToTexture3D=function(C,G,Y,K,$=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const _e=C.max.x-C.min.x+1,Ee=C.max.y-C.min.y+1,Ne=C.max.z-C.min.z+1,Oe=ge.convert(K.format),je=ge.convert(K.type);let He;if(K.isData3DTexture)L.setTexture3D(K,0),He=z.TEXTURE_3D;else if(K.isDataArrayTexture||K.isCompressedArrayTexture)L.setTexture2DArray(K,0),He=z.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,K.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,K.unpackAlignment);const Ve=z.getParameter(z.UNPACK_ROW_LENGTH),It=z.getParameter(z.UNPACK_IMAGE_HEIGHT),wn=z.getParameter(z.UNPACK_SKIP_PIXELS),jt=z.getParameter(z.UNPACK_SKIP_ROWS),wi=z.getParameter(z.UNPACK_SKIP_IMAGES),St=Y.isCompressedTexture?Y.mipmaps[$]:Y.image;z.pixelStorei(z.UNPACK_ROW_LENGTH,St.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,St.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,C.min.x),z.pixelStorei(z.UNPACK_SKIP_ROWS,C.min.y),z.pixelStorei(z.UNPACK_SKIP_IMAGES,C.min.z),Y.isDataTexture||Y.isData3DTexture?z.texSubImage3D(He,$,G.x,G.y,G.z,_e,Ee,Ne,Oe,je,St.data):Y.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),z.compressedTexSubImage3D(He,$,G.x,G.y,G.z,_e,Ee,Ne,Oe,St.data)):z.texSubImage3D(He,$,G.x,G.y,G.z,_e,Ee,Ne,Oe,je,St),z.pixelStorei(z.UNPACK_ROW_LENGTH,Ve),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,It),z.pixelStorei(z.UNPACK_SKIP_PIXELS,wn),z.pixelStorei(z.UNPACK_SKIP_ROWS,jt),z.pixelStorei(z.UNPACK_SKIP_IMAGES,wi),$===0&&K.generateMipmaps&&z.generateMipmap(He),be.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?L.setTextureCube(C,0):C.isData3DTexture?L.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?L.setTexture2DArray(C,0):L.setTexture2D(C,0),be.unbindTexture()},this.resetState=function(){S=0,w=0,M=null,be.reset(),Ge.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Bu?"display-p3":"srgb",t.unpackColorSpace=at.workingColorSpace===El?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Et?bs:um}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===bs?Et:Yt}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class _M extends Lm{}_M.prototype.isWebGL1Renderer=!0;class xM extends Xe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class vM{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=eu,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=ti()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Ms("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ti()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ti()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const cn=new R;class Vu{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)cn.fromBufferAttribute(this,t),cn.applyMatrix4(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)cn.fromBufferAttribute(this,t),cn.applyNormalMatrix(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)cn.fromBufferAttribute(this,t),cn.transformDirection(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Qn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=lt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Qn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Qn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Qn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Qn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),s=lt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),s=lt(s,this.array),r=lt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new yt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Vu(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Kd=new R,Zd=new gt,Qd=new gt,yM=new R,Jd=new De,pa=new R,pc=new oi,ef=new De,mc=new Fr;class bM extends j{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Dh,this.bindMatrix=new De,this.bindMatrixInverse=new De,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ut),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,pa),this.boundingBox.expandByPoint(pa)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new oi),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,pa),this.boundingSphere.expandByPoint(pa)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),pc.copy(this.boundingSphere),pc.applyMatrix4(s),e.ray.intersectsSphere(pc)!==!1&&(ef.copy(s).invert(),mc.copy(e.ray).applyMatrix4(ef),!(this.boundingBox!==null&&mc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,mc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new gt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Dh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===A0?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,s=this.geometry;Zd.fromBufferAttribute(s.attributes.skinIndex,e),Qd.fromBufferAttribute(s.attributes.skinWeight,e),Kd.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=Qd.getComponent(r);if(o!==0){const a=Zd.getComponent(r);Jd.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(yM.copy(Kd).applyMatrix4(Jd),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Im extends Xe{constructor(){super(),this.isBone=!0,this.type="Bone"}}class ws extends Ht{constructor(e=null,t=1,n=1,s,r,o,a,l,c=st,u=st,h,d){super(null,o,a,l,c,u,s,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const tf=new De,MM=new De;class Wu{constructor(e=[],t=[]){this.uuid=ti(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new De)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new De;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:MM;tf.multiplyMatrices(a,t[r]),tf.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Wu(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new ws(t,e,e,kt,ht);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Im),this.bones.push(o),this.boneInverses.push(new De().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const o=t[s];e.bones.push(o.uuid);const a=n[s];e.boneInverses.push(a.toArray())}return e}}class su extends yt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const $s=new De,nf=new De,ma=[],sf=new Ut,SM=new De,Zr=new j,Qr=new oi;class wM extends j{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new su(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,SM)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ut),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,$s),sf.copy(e.boundingBox).applyMatrix4($s),this.boundingBox.union(sf)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new oi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,$s),Qr.copy(e.boundingSphere).applyMatrix4($s),this.boundingSphere.union(Qr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,s=this.count;if(Zr.geometry=this.geometry,Zr.material=this.material,Zr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Qr.copy(this.boundingSphere),Qr.applyMatrix4(n),e.ray.intersectsSphere(Qr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,$s),nf.multiplyMatrices(n,$s),Zr.matrixWorld=nf,Zr.raycast(e,ma);for(let o=0,a=ma.length;o<a;o++){const l=ma[o];l.instanceId=r,l.object=this,t.push(l)}ma.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new su(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Xu extends _i{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Te(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const rf=new R,of=new R,af=new De,gc=new Fr,ga=new oi;class Kn extends Xe{constructor(e=new Kt,t=new Xu){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)rf.fromBufferAttribute(t,s-1),of.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=rf.distanceTo(of);e.setAttribute("lineDistance",new _t(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ga.copy(n.boundingSphere),ga.applyMatrix4(s),ga.radius+=r,e.ray.intersectsSphere(ga)===!1)return;af.copy(s).invert(),gc.copy(e.ray).applyMatrix4(af);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new R,u=new R,h=new R,d=new R,f=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){const p=Math.max(0,o.start),v=Math.min(g.count,o.start+o.count);for(let _=p,b=v-1;_<b;_+=f){const S=g.getX(_),w=g.getX(_+1);if(c.fromBufferAttribute(m,S),u.fromBufferAttribute(m,w),gc.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const A=e.ray.origin.distanceTo(d);A<e.near||A>e.far||t.push({distance:A,point:h.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,o.start),v=Math.min(m.count,o.start+o.count);for(let _=p,b=v-1;_<b;_+=f){if(c.fromBufferAttribute(m,_),u.fromBufferAttribute(m,_+1),gc.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const w=e.ray.origin.distanceTo(d);w<e.near||w>e.far||t.push({distance:w,point:h.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}const lf=new R,cf=new R;class EM extends Kn{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)lf.fromBufferAttribute(t,s),cf.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+lf.distanceTo(cf);e.setAttribute("lineDistance",new _t(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class TM extends Kn{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Dm extends _i{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Te(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const uf=new De,ru=new Fr,_a=new oi,xa=new R;class AM extends Xe{constructor(e=new Kt,t=new Dm){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),_a.copy(n.boundingSphere),_a.applyMatrix4(s),_a.radius+=r,e.ray.intersectsSphere(_a)===!1)return;uf.copy(s).invert(),ru.copy(e.ray).applyMatrix4(uf);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=d,x=f;g<x;g++){const m=c.getX(g);xa.fromBufferAttribute(h,m),hf(xa,m,l,s,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let g=d,x=f;g<x;g++)xa.fromBufferAttribute(h,g),hf(xa,g,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function hf(i,e,t,n,s,r,o){const a=ru.distanceSqToPoint(i);if(a<t){const l=new R;ru.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class zA extends Ht{constructor(e,t,n,s,r,o,a,l,c,u,h,d){super(null,o,a,l,c,u,s,r,h,d),this.isCompressedTexture=!0,this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}class HA extends Ht{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Gt extends Kt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],d=[],f=[];let g=0;const x=[],m=n/2;let p=0;v(),o===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(u),this.setAttribute("position",new _t(h,3)),this.setAttribute("normal",new _t(d,3)),this.setAttribute("uv",new _t(f,2));function v(){const b=new R,S=new R;let w=0;const M=(t-e)/n;for(let A=0;A<=r;A++){const U=[],y=A/r,E=y*(t-e)+e;for(let N=0;N<=s;N++){const B=N/s,P=B*l+a,O=Math.sin(P),k=Math.cos(P);S.x=E*O,S.y=-y*n+m,S.z=E*k,h.push(S.x,S.y,S.z),b.set(O,M,k).normalize(),d.push(b.x,b.y,b.z),f.push(B,1-y),U.push(g++)}x.push(U)}for(let A=0;A<s;A++)for(let U=0;U<r;U++){const y=x[U][A],E=x[U+1][A],N=x[U+1][A+1],B=x[U][A+1];u.push(y,E,B),u.push(E,N,B),w+=6}c.addGroup(p,w,0),p+=w}function _(b){const S=g,w=new ye,M=new R;let A=0;const U=b===!0?e:t,y=b===!0?1:-1;for(let N=1;N<=s;N++)h.push(0,m*y,0),d.push(0,y,0),f.push(.5,.5),g++;const E=g;for(let N=0;N<=s;N++){const P=N/s*l+a,O=Math.cos(P),k=Math.sin(P);M.x=U*k,M.y=m*y,M.z=U*O,h.push(M.x,M.y,M.z),d.push(0,y,0),w.x=O*.5+.5,w.y=k*.5*y+.5,f.push(w.x,w.y),g++}for(let N=0;N<s;N++){const B=S+N,P=E+N;b===!0?u.push(P,P+1,B):u.push(P+1,P,B),A+=3}c.addGroup(p,A,b===!0?1:2),p+=A}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Al extends Gt{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Al(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class qu extends Kt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],o=[];a(s),c(n),u(),this.setAttribute("position",new _t(r,3)),this.setAttribute("normal",new _t(r.slice(),3)),this.setAttribute("uv",new _t(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(v){const _=new R,b=new R,S=new R;for(let w=0;w<t.length;w+=3)f(t[w+0],_),f(t[w+1],b),f(t[w+2],S),l(_,b,S,v)}function l(v,_,b,S){const w=S+1,M=[];for(let A=0;A<=w;A++){M[A]=[];const U=v.clone().lerp(b,A/w),y=_.clone().lerp(b,A/w),E=w-A;for(let N=0;N<=E;N++)N===0&&A===w?M[A][N]=U:M[A][N]=U.clone().lerp(y,N/E)}for(let A=0;A<w;A++)for(let U=0;U<2*(w-A)-1;U++){const y=Math.floor(U/2);U%2===0?(d(M[A][y+1]),d(M[A+1][y]),d(M[A][y])):(d(M[A][y+1]),d(M[A+1][y+1]),d(M[A+1][y]))}}function c(v){const _=new R;for(let b=0;b<r.length;b+=3)_.x=r[b+0],_.y=r[b+1],_.z=r[b+2],_.normalize().multiplyScalar(v),r[b+0]=_.x,r[b+1]=_.y,r[b+2]=_.z}function u(){const v=new R;for(let _=0;_<r.length;_+=3){v.x=r[_+0],v.y=r[_+1],v.z=r[_+2];const b=m(v)/2/Math.PI+.5,S=p(v)/Math.PI+.5;o.push(b,1-S)}g(),h()}function h(){for(let v=0;v<o.length;v+=6){const _=o[v+0],b=o[v+2],S=o[v+4],w=Math.max(_,b,S),M=Math.min(_,b,S);w>.9&&M<.1&&(_<.2&&(o[v+0]+=1),b<.2&&(o[v+2]+=1),S<.2&&(o[v+4]+=1))}}function d(v){r.push(v.x,v.y,v.z)}function f(v,_){const b=v*3;_.x=e[b+0],_.y=e[b+1],_.z=e[b+2]}function g(){const v=new R,_=new R,b=new R,S=new R,w=new ye,M=new ye,A=new ye;for(let U=0,y=0;U<r.length;U+=9,y+=6){v.set(r[U+0],r[U+1],r[U+2]),_.set(r[U+3],r[U+4],r[U+5]),b.set(r[U+6],r[U+7],r[U+8]),w.set(o[y+0],o[y+1]),M.set(o[y+2],o[y+3]),A.set(o[y+4],o[y+5]),S.copy(v).add(_).add(b).divideScalar(3);const E=m(S);x(w,y+0,v,E),x(M,y+2,_,E),x(A,y+4,b,E)}}function x(v,_,b,S){S<0&&v.x===1&&(o[_]=v.x-1),b.x===0&&b.z===0&&(o[_]=S/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qu(e.vertices,e.indices,e.radius,e.details)}}class xr extends qu{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new xr(e.radius,e.detail)}}class bi extends Kt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new R,d=new R,f=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){const v=[],_=p/n;let b=0;p===0&&o===0?b=.5/t:p===n&&l===Math.PI&&(b=-.5/t);for(let S=0;S<=t;S++){const w=S/t;h.x=-e*Math.cos(s+w*r)*Math.sin(o+_*a),h.y=e*Math.cos(o+_*a),h.z=e*Math.sin(s+w*r)*Math.sin(o+_*a),g.push(h.x,h.y,h.z),d.copy(h).normalize(),x.push(d.x,d.y,d.z),m.push(w+b,1-_),v.push(c++)}u.push(v)}for(let p=0;p<n;p++)for(let v=0;v<t;v++){const _=u[p][v+1],b=u[p][v],S=u[p+1][v],w=u[p+1][v+1];(p!==0||o>0)&&f.push(_,b,w),(p!==n-1||l<Math.PI)&&f.push(b,S,w)}this.setIndex(f),this.setAttribute("position",new _t(g,3)),this.setAttribute("normal",new _t(x,3)),this.setAttribute("uv",new _t(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bi(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ji extends Kt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],l=[],c=[],u=new R,h=new R,d=new R;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){const x=g/s*r,m=f/n*Math.PI*2;h.x=(e+t*Math.cos(m))*Math.cos(x),h.y=(e+t*Math.cos(m))*Math.sin(x),h.z=t*Math.sin(m),a.push(h.x,h.y,h.z),u.x=e*Math.cos(x),u.y=e*Math.sin(x),d.subVectors(h,u).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){const x=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,v=(s+1)*f+g;o.push(x,m,v),o.push(m,p,v)}this.setIndex(o),this.setAttribute("position",new _t(a,3)),this.setAttribute("normal",new _t(l,3)),this.setAttribute("uv",new _t(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ji(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class zo extends Kt{constructor(e=1,t=.4,n=64,s=8,r=2,o=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:s,p:r,q:o},n=Math.floor(n),s=Math.floor(s);const a=[],l=[],c=[],u=[],h=new R,d=new R,f=new R,g=new R,x=new R,m=new R,p=new R;for(let _=0;_<=n;++_){const b=_/n*r*Math.PI*2;v(b,r,o,e,f),v(b+.01,r,o,e,g),m.subVectors(g,f),p.addVectors(g,f),x.crossVectors(m,p),p.crossVectors(x,m),x.normalize(),p.normalize();for(let S=0;S<=s;++S){const w=S/s*Math.PI*2,M=-t*Math.cos(w),A=t*Math.sin(w);h.x=f.x+(M*p.x+A*x.x),h.y=f.y+(M*p.y+A*x.y),h.z=f.z+(M*p.z+A*x.z),l.push(h.x,h.y,h.z),d.subVectors(h,f).normalize(),c.push(d.x,d.y,d.z),u.push(_/n),u.push(S/s)}}for(let _=1;_<=n;_++)for(let b=1;b<=s;b++){const S=(s+1)*(_-1)+(b-1),w=(s+1)*_+(b-1),M=(s+1)*_+b,A=(s+1)*(_-1)+b;a.push(S,w,A),a.push(w,M,A)}this.setIndex(a),this.setAttribute("position",new _t(l,3)),this.setAttribute("normal",new _t(c,3)),this.setAttribute("uv",new _t(u,2));function v(_,b,S,w,M){const A=Math.cos(_),U=Math.sin(_),y=S/b*_,E=Math.cos(y);M.x=w*(2+E)*.5*A,M.y=w*(2+E)*U*.5,M.z=w*Math.sin(y)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zo(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class en extends _i{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Te(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hm,this.normalScale=new ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Mi extends en{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ye(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Vt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Te(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Te(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Te(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function va(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function RM(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function CM(i){function e(s,r){return i[s]-i[r]}const t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function df(i,e,t){const n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=i[a+l]}return s}function Um(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}class Ho{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,s=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break t}o=t.length;break n}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class PM extends Ho{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:rd,endingEnd:rd}}intervalChanged_(e,t,n){const s=this.parameterPositions;let r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case od:r=e,a=2*t-n;break;case ad:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case od:o=e,l=2*n-t;break;case ad:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),x=g*g,m=x*g,p=-d*m+2*d*x-d*g,v=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*g+1,_=(-1-f)*m+(1.5+f)*x+.5*g,b=f*m-f*x;for(let S=0;S!==a;++S)r[S]=p*o[u+S]+v*o[c+S]+_*o[l+S]+b*o[h+S];return r}}class LM extends Ho{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(s-t),h=1-u;for(let d=0;d!==a;++d)r[d]=o[c+d]*h+o[l+d]*u;return r}}class IM extends Ho{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class Si{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=va(t,this.TimeBufferType),this.values=va(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:va(e.times,Array),values:va(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new IM(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new LM(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new PM(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Do:t=this.InterpolantFactoryMethodDiscrete;break;case Rr:t=this.InterpolantFactoryMethodLinear;break;case Wl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Do;case this.InterpolantFactoryMethodLinear:return Rr;case this.InterpolantFactoryMethodSmooth:return Wl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const n=this.times,s=n.length;let r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&RM(s))for(let a=0,l=s.length;a!==l;++a){const c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Wl,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{const h=a*n,d=h-n,f=h+n;for(let g=0;g!==n;++g){const x=t[h+g];if(x!==t[d+g]||x!==t[f+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}Si.prototype.TimeBufferType=Float32Array;Si.prototype.ValueBufferType=Float32Array;Si.prototype.DefaultInterpolation=Rr;class Br extends Si{}Br.prototype.ValueTypeName="bool";Br.prototype.ValueBufferType=Array;Br.prototype.DefaultInterpolation=Do;Br.prototype.InterpolantFactoryMethodLinear=void 0;Br.prototype.InterpolantFactoryMethodSmooth=void 0;class Nm extends Si{}Nm.prototype.ValueTypeName="color";class Lr extends Si{}Lr.prototype.ValueTypeName="number";class DM extends Ho{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t);let c=e*a;for(let u=c+a;c!==u;c+=4)Bt.slerpFlat(r,0,o,c-a,o,c,l);return r}}class Es extends Si{InterpolantFactoryMethodLinear(e){return new DM(this.times,this.values,this.getValueSize(),e)}}Es.prototype.ValueTypeName="quaternion";Es.prototype.DefaultInterpolation=Rr;Es.prototype.InterpolantFactoryMethodSmooth=void 0;class kr extends Si{}kr.prototype.ValueTypeName="string";kr.prototype.ValueBufferType=Array;kr.prototype.DefaultInterpolation=Do;kr.prototype.InterpolantFactoryMethodLinear=void 0;kr.prototype.InterpolantFactoryMethodSmooth=void 0;class Ir extends Si{}Ir.prototype.ValueTypeName="vector";class UM{constructor(e,t=-1,n,s=I0){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=ti(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(FM(n[o]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(Si.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const u=CM(l);l=df(l,1,u),c=df(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Lr(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(r);if(u&&u.length>1){const h=u[1];let d=s[h];d||(s[h]=d=[]),d.push(c)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,d,f,g,x){if(f.length!==0){const m=[],p=[];Um(f,m,p,g),m.length!==0&&x.push(new h(d,m,p))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const d=c[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let x=0;x<d[g].morphTargets.length;x++)f[d[g].morphTargets[x]]=-1;for(const x in f){const m=[],p=[];for(let v=0;v!==d[g].morphTargets.length;++v){const _=d[g];m.push(_.time),p.push(_.morphTarget===x?1:0)}s.push(new Lr(".morphTargetInfluence["+x+"]",m,p))}l=f.length*o}else{const f=".bones["+t[h].name+"]";n(Ir,f+".position",d,"pos",s),n(Es,f+".quaternion",d,"rot",s),n(Ir,f+".scale",d,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n!==s;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function NM(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Lr;case"vector":case"vector2":case"vector3":case"vector4":return Ir;case"color":return Nm;case"quaternion":return Es;case"bool":case"boolean":return Br;case"string":return kr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function FM(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=NM(i.type);if(i.times===void 0){const t=[],n=[];Um(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const es={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class OM{constructor(e,t,n){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const f=c[h],g=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null}}}const BM=new OM;class zr{constructor(e){this.manager=e!==void 0?e:BM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}zr.DEFAULT_MATERIAL_NAME="__DEFAULT";const Pi={};class kM extends Error{constructor(e,t){super(e),this.response=t}}class Fm extends zr{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=es.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Pi[e]!==void 0){Pi[e].push({onLoad:t,onProgress:n,onError:s});return}Pi[e]=[],Pi[e].push({onLoad:t,onProgress:n,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream=="undefined"||c.body===void 0||c.body.getReader===void 0)return c;const u=Pi[e],h=c.body.getReader(),d=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),f=d?parseInt(d):0,g=f!==0;let x=0;const m=new ReadableStream({start(p){v();function v(){h.read().then(({done:_,value:b})=>{if(_)p.close();else{x+=b.byteLength;const S=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:f});for(let w=0,M=u.length;w<M;w++){const A=u[w];A.onProgress&&A.onProgress(S)}p.enqueue(b),v()}})}}});return new Response(m)}else throw new kM(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{es.add(e,c);const u=Pi[e];delete Pi[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onLoad&&f.onLoad(c)}}).catch(c=>{const u=Pi[e];if(u===void 0)throw this.manager.itemError(e),c;delete Pi[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class zM extends zr{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=es.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=Uo("img");function l(){u(),es.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),s&&s(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class HM extends zr{constructor(e){super(e)}load(e,t,n,s){const r=new Ht,o=new zM(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class Rl extends Xe{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Te(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const _c=new De,ff=new R,pf=new R;class ju{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ye(512,512),this.map=null,this.mapPass=null,this.matrix=new De,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Hu,this._frameExtents=new ye(1,1),this._viewportCount=1,this._viewports=[new gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;ff.setFromMatrixPosition(e.matrixWorld),t.position.copy(ff),pf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(pf),t.updateMatrixWorld(),_c.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_c),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(_c)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class GM extends ju{constructor(){super(new hn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Cr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Om extends Rl{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Xe.DEFAULT_UP),this.updateMatrix(),this.target=new Xe,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new GM}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const mf=new De,Jr=new R,xc=new R;class VM extends ju{constructor(){super(new hn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ye(4,2),this._viewportCount=6,this._viewports=[new gt(2,1,1,1),new gt(0,1,1,1),new gt(3,1,1,1),new gt(1,1,1,1),new gt(3,0,1,1),new gt(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Jr.setFromMatrixPosition(e.matrixWorld),n.position.copy(Jr),xc.copy(n.position),xc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(xc),n.updateMatrixWorld(),s.makeTranslation(-Jr.x,-Jr.y,-Jr.z),mf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(mf)}}class Hr extends Rl{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new VM}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class WM extends ju{constructor(){super(new yi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Cl extends Rl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Xe.DEFAULT_UP),this.updateMatrix(),this.target=new Xe,this.shadow=new WM}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class XM extends Rl{constructor(e,t,n=10,s=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=s}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}class To{static decodeText(e){if(typeof TextDecoder!="undefined")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class qM extends zr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap=="undefined"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=es.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{s&&s(c)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return es.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),es.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});es.add(e,l),r.manager.itemStart(e)}}const $u="\\[\\]\\.:\\/",jM=new RegExp("["+$u+"]","g"),Yu="[^"+$u+"]",$M="[^"+$u.replace("\\.","")+"]",YM=/((?:WC+[\/:])*)/.source.replace("WC",Yu),KM=/(WCOD+)?/.source.replace("WCOD",$M),ZM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Yu),QM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Yu),JM=new RegExp("^"+YM+KM+ZM+QM+"$"),eS=["material","materials","bones","map"];class tS{constructor(e,t,n){const s=n||ct.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class ct{constructor(e,t,n){this.path=t,this.parsedPath=n||ct.parseTrackName(t),this.node=ct.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new ct.Composite(e,t,n):new ct(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(jM,"")}static parseTrackName(e){const t=JM.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);eS.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=ct.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[s];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ct.Composite=tS;ct.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ct.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ct.prototype.GetterByBindingType=[ct.prototype._getValue_direct,ct.prototype._getValue_array,ct.prototype._getValue_arrayElement,ct.prototype._getValue_toArray];ct.prototype.SetterByBindingTypeAndVersioning=[[ct.prototype._setValue_direct,ct.prototype._setValue_direct_setNeedsUpdate,ct.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_array,ct.prototype._setValue_array_setNeedsUpdate,ct.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_arrayElement,ct.prototype._setValue_arrayElement_setNeedsUpdate,ct.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_fromArray,ct.prototype._setValue_fromArray_setNeedsUpdate,ct.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Pl{constructor(e){this.value=e}clone(){return new Pl(this.value.clone===void 0?this.value:this.value.clone())}}class Bm{constructor(e,t,n=0,s=1/0){this.ray=new Fr(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new zu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return ou(e,this,n,t),n.sort(gf),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)ou(e[s],this,n,t);return n.sort(gf),n}}function gf(i,e){return i.distance-e.distance}function ou(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){const s=i.children;for(let r=0,o=s.length;r<o;r++)ou(s[r],e,t,!0)}}class _f{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Vt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const xf=new R,ya=new R;class Bi{constructor(e=new R,t=new R){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){xf.subVectors(e,this.start),ya.subVectors(this.end,this.start);const n=ya.dot(ya);let r=ya.dot(xf)/n;return t&&(r=Vt(r,0,1)),r}closestPointToPoint(e,t,n){const s=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(s).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Fu}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Fu);class nS{constructor(){this.presets=[]}register(e){this.presets.find(t=>t.id===e.id)&&(console.warn(`[scene-registry] duplicate id ${e.id} \u2014 replacing`),this.presets=this.presets.filter(t=>t.id!==e.id)),this.presets.push(e)}list(){return this.presets}get(e){return this.presets.find(t=>t.id===e)}listByCategory(){var t;const e=new Map;for(const n of this.presets){const s=(t=e.get(n.category))!=null?t:[];s.push(n),e.set(n.category,s)}return e}}const si=new nS,An=10,Ys=An/2,ai=.2;function ba(i,e=.95,t=0){return new en({color:i,roughness:e,metalness:t})}function iS(i){const e=new Xe;e.name="sceneRoot",i.add(e);const t=()=>ba(15790320),n=()=>ba(14034728),s=()=>ba(2924588),r=()=>ba(15263976),o=new j(new de(An,ai,An),t());o.name="Floor",o.position.set(0,-ai/2,0),e.add(o);const a=new j(new de(An,ai,An),t());a.name="Ceiling",a.position.set(0,An+ai/2,0),e.add(a);const l=new j(new de(An,An,ai),t());l.name="Back Wall",l.position.set(0,Ys,-Ys-ai/2),e.add(l);const c=new j(new de(ai,An,An),n());c.name="Left Wall (Red)",c.position.set(-Ys-ai/2,Ys,0),e.add(c);const u=new j(new de(ai,An,An),s());u.name="Right Wall (Green)",u.position.set(Ys+ai/2,Ys,0),e.add(u);const h=new j(new de(3,6,3),r());h.name="Tall Block",h.position.set(-1.8,3,-1.5),h.rotation.y=.29,e.add(h);const d=new j(new de(3,3,3),r());return d.name="Short Block",d.position.set(1.8,1.5,1.5),d.rotation.y=-.29,e.add(d),{camera:{position:[0,5,18],target:[0,5,0]},lightDummy:{position:[0,An-.001,0]},background:657930}}si.register({id:"cornell.classic",label:"Cornell \u2014 Classic",category:"cornell",description:"Classic Cornell Box: 5 walls + tall block + short block. No extras.",build:iS,defaultBakeSettings:{lightMapSize:1024,targetSamples:256,bounces:2,casts:5,texelsPerMeter:10},schemaVersion:1});const Rn=10,Ks=Rn/2,li=.2;function ci(i,e=.95,t=0){return new en({color:i,roughness:e,metalness:t})}function sS(i){const e=new Xe;e.name="sceneRoot",i.add(e);const t=new j(new de(Rn,li,Rn),ci(15790320));t.name="Floor",t.position.set(0,-li/2,0),e.add(t);const n=new j(new de(Rn,li,Rn),ci(15790320));n.name="Ceiling",n.position.set(0,Rn+li/2,0),e.add(n);const s=new j(new de(Rn,Rn,li),ci(15790320));s.name="Back Wall",s.position.set(0,Ks,-Ks-li/2),e.add(s);const r=new j(new de(li,Rn,Rn),ci(14034728));r.name="Left Wall (Red)",r.position.set(-Ks-li/2,Ks,0),e.add(r);const o=new j(new de(li,Rn,Rn),ci(2924588));o.name="Right Wall (Green)",o.position.set(Ks+li/2,Ks,0),e.add(o);const a=new j(new de(3,6,3),ci(15263976));a.name="Tall Block",a.position.set(-1.8,3,-1.5),a.rotation.y=.29,e.add(a);const l=new j(new de(3,3,3),ci(15263976));l.name="Short Block",l.position.set(1.8,1.5,1.5),l.rotation.y=-.29,e.add(l);const c=new j(new bi(1,48,32),ci(16119285,.4,0));c.name="Sphere",c.position.set(2.4,1,3),e.add(c);const u=new j(new zo(.55,.18,160,24),ci(16765286,.55,0));u.name="Torus Knot",u.position.set(0,1,2.8),u.rotation.x=Math.PI/2,e.add(u);const h=new j(new de(1.2,1.2,1.2),ci(13072954,.8,0));return h.name="Accent Block",h.position.set(-3.5,.6,2.8),h.rotation.y=.45,e.add(h),{camera:{position:[0,5,18],target:[0,5,0]},lightDummy:{position:[0,Rn-.001,0]},background:657930}}si.register({id:"cornell.advanced",label:"Cornell \u2014 Advanced",category:"cornell",description:"Cornell Box + sphere + torus knot + accent block. Matches today\u2019s default.",build:sS,defaultBakeSettings:{lightMapSize:1024,targetSamples:256,bounces:2,casts:5,texelsPerMeter:10},schemaVersion:1});const Cn=10,Zs=Cn/2,ui=.2;function eo(i,e=.95,t=0){return new en({color:i,roughness:e,metalness:t})}function rS(i){const e=new Xe;e.name="sceneRoot",i.add(e);const t=new j(new de(Cn,ui,Cn),eo(15790320));t.name="Floor",t.position.set(0,-ui/2,0),e.add(t);const n=new j(new de(Cn,ui,Cn),eo(15790320));n.name="Ceiling",n.position.set(0,Cn+ui/2,0),e.add(n);const s=new j(new de(Cn,Cn,ui),eo(15790320));s.name="Back Wall",s.position.set(0,Zs,-Zs-ui/2),e.add(s);const r=new j(new de(ui,Cn,Cn),eo(14034728));r.name="Left Wall (Red)",r.position.set(-Zs-ui/2,Zs,0),e.add(r);const o=new j(new de(ui,Cn,Cn),eo(2924588));o.name="Right Wall (Green)",o.position.set(Zs+ui/2,Zs,0),e.add(o);const a=new j(new de(2.5,5,2.5),new en({color:16777215,roughness:.05,metalness:1}));a.name="Mirror Cube",a.position.set(-2.2,2.5,-1.5),a.rotation.y=.3,a.userData.lightmapIgnore=!0,e.add(a);const l=new j(new bi(1.2,48,32),new Mi({color:16777215,roughness:0,metalness:0,transmission:1,thickness:.5,ior:1.5,transparent:!0}));return l.name="Glass Sphere",l.position.set(2.4,1.2,1.5),l.userData.lightmapIgnore=!0,e.add(l),{camera:{position:[0,5,18],target:[0,5,0]},lightDummy:{position:[0,Cn-.001,0]},background:657930}}si.register({id:"cornell.glass-mirror",label:"Cornell \u2014 Glass + Mirror",category:"cornell",description:"Cornell with a mirror cube + glass sphere (excluded from bake; rendered view-time only).",build:rS,defaultBakeSettings:{lightMapSize:1024,targetSamples:256,bounces:2,casts:5,texelsPerMeter:10},schemaVersion:1});const vn=10,Qs=vn/2,hi=.2;function to(i,e=.95,t=0){return new en({color:i,roughness:e,metalness:t})}function oS(i){const e=new Xe;e.name="sceneRoot",i.add(e);const t=new j(new de(vn,hi,vn),to(15790320));t.name="Floor",t.position.set(0,-hi/2,0),e.add(t);const n=new j(new de(vn,hi,vn),to(15790320));n.name="Ceiling",n.position.set(0,vn+hi/2,0),e.add(n);const s=new j(new de(vn,vn,hi),to(15790320));s.name="Back Wall",s.position.set(0,Qs,-Qs-hi/2),e.add(s);const r=new j(new de(hi,vn,vn),to(14034728));r.name="Left Wall (Red)",r.position.set(-Qs-hi/2,Qs,0),e.add(r);const o=new j(new de(hi,vn,vn),to(2924588));o.name="Right Wall (Green)",o.position.set(Qs+hi/2,Qs,0),e.add(o);const a=new en({color:0,emissive:new Te(16773328),emissiveIntensity:5}),l=new j(new de(6,.05,.6),a);return l.name="Emissive Strip",l.position.set(0,vn-.05,0),l.userData.lightmapIgnore=!0,e.add(l),{camera:{position:[0,5,18],target:[0,5,0]},lightDummy:{position:[0,vn-.1,0]},background:657930}}si.register({id:"cornell.emissive-strip",label:"Cornell \u2014 Emissive Strip",category:"cornell",description:"Cornell lit by a long emissive ceiling strip instead of a point light.",build:oS,defaultBakeSettings:{lightMapSize:1024,targetSamples:256,bounces:2,casts:5,texelsPerMeter:10},schemaVersion:1});const Pn=12,Js=Pn/2,kn=.2;function aS(i,e=.9,t=0){return new en({color:i,roughness:e,metalness:t})}function lS(i){const e=new Xe;e.name="sceneRoot",i.add(e);const t=()=>aS(14737632),n=new j(new de(Pn,kn,Pn),t());n.name="Floor",n.position.set(0,-kn/2,0),e.add(n);const s=new j(new de(Pn,kn,Pn),t());s.name="Ceiling",s.position.set(0,Pn+kn/2,0),e.add(s);for(const[o,a,l,c,u]of[["Back Wall",0,-Js-kn/2,Pn,kn],["Front Wall",0,Js+kn/2,Pn,kn]]){const h=new j(new de(c,Pn,u),t());h.name=o,h.position.set(a,Js,l),e.add(h)}for(const[o,a,l,c]of[["Left Wall",-Js-kn/2,kn,Pn],["Right Wall",Js+kn/2,kn,Pn]]){const u=new j(new de(l,Pn,c),t());u.name=o,u.position.set(a,Js,0),e.add(u)}const r=[[16728128,-3,3,0],[4259648,3,6,-2],[4227327,0,4.5,3]];for(let o=0;o<r.length;o++){const[a,l,c,u]=r[o],h=new Hr(a,60,0,2);h.position.set(l,c,u),e.add(h);const d=new j(new bi(.18,16,12),new en({color:0,emissive:a,emissiveIntensity:3}));d.name=`Point Light ${o+1}`,d.position.set(l,c,u),d.userData.lightmapIgnore=!0,e.add(d)}return{camera:{position:[0,6,20],target:[0,5,0]},lightDummy:{position:[0,Pn-.5,0]},background:328968}}si.register({id:"threejs.pointlights",label:"three.js \u2014 Point Lights",category:"threejs-port",description:"Port of the three.js webgl_lights_pointlights example: 3 colored point lights in a closed room.",source:{name:"three.js / webgl_lights_pointlights",url:"https://threejs.org/examples/?q=pointlights#webgl_lights_pointlights",license:"MIT",author:"three.js authors"},referenceUrl:"https://threejs.org/examples/?q=pointlights#webgl_lights_pointlights",build:lS,defaultBakeSettings:{lightMapSize:1024,targetSamples:256,bounces:2,casts:5,texelsPerMeter:8},schemaVersion:1});function er(i,e=.85,t=0){return new en({color:i,roughness:e,metalness:t})}function cS(i){const e=new Xe;e.name="sceneRoot",i.add(e);const t=new j(new de(40,.4,40),er(8421504));t.name="Ground",t.position.set(0,-.2,0),e.add(t);const n=[["Cube A",new j(new de(2,2,2),er(13789470))],["Cube B",new j(new de(1.5,3,1.5),er(4620980))],["Sphere",new j(new bi(1.2,32,24),er(16113331))],["Cone",new j(new Al(1.3,3,24),er(5597999))],["Pillar",new j(new Gt(.6,.6,4,24),er(12632256))]],s=[[-4,1,2],[3,1.5,-3],[-2,1.2,-3.5],[5,1.5,3],[0,2,5]];for(let o=0;o<n.length;o++){const[a,l]=n[o],[c,u,h]=s[o];l.name=a,l.position.set(c,u,h),e.add(l)}const r=new Cl(16774352,1.5);return r.position.set(10,18,8),r.userData.lightmapIgnore=!0,e.add(r),{camera:{position:[12,10,18],target:[0,1,0]},lightDummy:{position:[10,18,8]},background:8900331}}si.register({id:"threejs.shadowmap",label:"three.js \u2014 Shadow Map",category:"threejs-port",description:"Port of webgl_shadowmap: outdoor scene with directional sun + ground + a few obstacles.",source:{name:"three.js / webgl_shadowmap",url:"https://threejs.org/examples/?q=shadowmap#webgl_shadowmap",license:"MIT",author:"three.js authors"},referenceUrl:"https://threejs.org/examples/?q=shadowmap#webgl_shadowmap",build:cS,defaultBakeSettings:{lightMapSize:1024,targetSamples:256,bounces:2,casts:5,texelsPerMeter:4},schemaVersion:1});function vc(i,e=.6,t=0){return new en({color:i,roughness:e,metalness:t})}function uS(i){const e=new Xe;e.name="sceneRoot",i.add(e);const t=new j(new de(20,.2,20),vc(3158064,.9));t.name="Floor",t.position.set(0,-.1,0),e.add(t);const n=new j(new de(20,12,.2),vc(4210752,.9));n.name="Backdrop",n.position.set(0,6,-6),e.add(n);const s=new j(new zo(1.3,.42,200,32),vc(13218448,.55,0));s.name="Subject",s.position.set(0,3,0),e.add(s);const r=[["Key (warm)",16763018,4,5,3.5,80],["Fill (cool)",8956159,-4,3.5,2.5,40],["Rim",16777215,0,4.5,-3.5,60]];for(const[o,a,l,c,u,h]of r){const d=new Hr(a,h,0,2);d.position.set(l,c,u),d.userData.lightmapIgnore=!0,e.add(d);const f=new j(new bi(.12,12,8),new en({color:0,emissive:a,emissiveIntensity:2}));f.name=o,f.position.set(l,c,u),f.userData.lightmapIgnore=!0,e.add(f)}return{camera:{position:[0,4,10],target:[0,3,0]},lightDummy:{position:[4,5,3.5]},background:1710623}}si.register({id:"threejs.decals",label:"three.js \u2014 Decals (3-Point Lighting)",category:"threejs-port",description:"Port of the webgl_decals lighting setup: warm key + cool fill + rim around a centered subject.",source:{name:"three.js / webgl_decals",url:"https://threejs.org/examples/?q=decals#webgl_decals",license:"MIT",author:"three.js authors"},referenceUrl:"https://threejs.org/examples/?q=decals#webgl_decals",build:uS,defaultBakeSettings:{lightMapSize:1024,targetSamples:256,bounces:2,casts:5,texelsPerMeter:8},schemaVersion:1});const mo=6,vf=mo/2,no=4,tr=.15;function Xi(i,e=.9,t=0){return new en({color:i,roughness:e,metalness:t})}function hS(i){const e=new Xe;e.name="sceneRoot",i.add(e);const t=new j(new de(mo,tr,mo),Xi(13608570));t.name="Floor",t.position.set(0,-tr/2,0),e.add(t);const n=new j(new de(mo,no,tr),Xi(15720904));n.name="Back Wall",n.position.set(0,no/2,-vf-tr/2),e.add(n);const s=new j(new de(tr,no,mo),Xi(14799539));s.name="Left Wall",s.position.set(-vf-tr/2,no/2,0),e.add(s);const r=new j(new de(2.4,.6,1.4),Xi(7109257));r.name="Bed",r.position.set(-1.5,.3,-1.8),e.add(r);const o=new j(new de(.7,.2,1.2),Xi(16315364));o.name="Pillow",o.position.set(-2.4,.7,-1.8),e.add(o);const a=new j(new de(1.4,.9,.8),Xi(9132587));a.name="Table",a.position.set(1.4,.45,-1.6),e.add(a);const l=new j(new de(.6,.6,.6),Xi(10910802));l.name="Stool",l.position.set(.6,.3,.6),e.add(l);const c=new j(new de(.3,.6,.3),Xi(2763306));return c.name="Lamp Base",c.position.set(1.4,1.2,-1.6),e.add(c),{camera:{position:[9,9,9],target:[0,1,0]},lightDummy:{position:[2,no-.2,1]},background:2105384}}si.register({id:"isometric.room",label:"Isometric \u2014 Low-Poly Room",category:"isometric",description:"CC0 low-poly isometric room: floor + 2 walls + bed/table/stool. Locked iso camera.",source:{name:"three-lightmap-baker built-in",url:"https://github.com/lucas-jones/three-lightmap-baker",license:"CC0",author:"three-lightmap-baker"},build:hS,defaultBakeSettings:{lightMapSize:1024,targetSamples:256,bounces:2,casts:5,texelsPerMeter:12},schemaVersion:1});var No,Dt,yc,yf,dl=0,km=[],Ot=dt,bf=Ot.__b,Mf=Ot.__r,Sf=Ot.diffed,wf=Ot.__c,Ef=Ot.unmount,Tf=Ot.__;function Ku(i,e){Ot.__h&&Ot.__h(Dt,i,dl||e),dl=0;var t=Dt.__H||(Dt.__H={__:[],__h:[]});return i>=t.__.length&&t.__.push({}),t.__[i]}function Zu(i){return dl=1,dS(Hm,i)}function dS(i,e,t){var n=Ku(No++,2);if(n.t=i,!n.__c&&(n.__=[t?t(e):Hm(void 0,e),function(a){var l=n.__N?n.__N[0]:n.__[0],c=n.t(l,a);l!==c&&(n.__N=[c,n.__[1]],n.__c.setState({}))}],n.__c=Dt,!Dt.__f)){var s=function(a,l,c){if(!n.__c.__H)return!0;var u=n.__c.__H.__.filter(function(d){return d.__c});if(u.every(function(d){return!d.__N}))return!r||r.call(this,a,l,c);var h=n.__c.props!==a;return u.some(function(d){if(d.__N){var f=d.__[0];d.__=d.__N,d.__N=void 0,f!==d.__[0]&&(h=!0)}}),r&&r.call(this,a,l,c)||h};Dt.__f=!0;var r=Dt.shouldComponentUpdate,o=Dt.componentWillUpdate;Dt.componentWillUpdate=function(a,l,c){if(this.__e){var u=r;r=void 0,s(a,l,c),r=u}o&&o.call(this,a,l,c)},Dt.shouldComponentUpdate=s}return n.__N||n.__}function Gr(i,e){var t=Ku(No++,3);!Ot.__s&&zm(t.__H,e)&&(t.__=i,t.u=e,Dt.__H.__h.push(t))}function Ao(i){return dl=5,Qu(function(){return{current:i}},[])}function Qu(i,e){var t=Ku(No++,7);return zm(t.__H,e)&&(t.__=i(),t.__H=e,t.__h=i),t.__}function fS(){for(var i;i=km.shift();){var e=i.__H;if(i.__P&&e)try{e.__h.some(ja),e.__h.some(au),e.__h=[]}catch(t){e.__h=[],Ot.__e(t,i.__v)}}}Ot.__b=function(i){Dt=null,bf&&bf(i)},Ot.__=function(i,e){i&&e.__k&&e.__k.__m&&(i.__m=e.__k.__m),Tf&&Tf(i,e)},Ot.__r=function(i){Mf&&Mf(i),No=0;var e=(Dt=i.__c).__H;e&&(yc===Dt?(e.__h=[],Dt.__h=[],e.__.some(function(t){t.__N&&(t.__=t.__N),t.u=t.__N=void 0})):(e.__h.some(ja),e.__h.some(au),e.__h=[],No=0)),yc=Dt},Ot.diffed=function(i){Sf&&Sf(i);var e=i.__c;e&&e.__H&&(e.__H.__h.length&&(km.push(e)!==1&&yf===Ot.requestAnimationFrame||((yf=Ot.requestAnimationFrame)||pS)(fS)),e.__H.__.some(function(t){t.u&&(t.__H=t.u),t.u=void 0})),yc=Dt=null},Ot.__c=function(i,e){e.some(function(t){try{t.__h.some(ja),t.__h=t.__h.filter(function(n){return!n.__||au(n)})}catch(n){e.some(function(s){s.__h&&(s.__h=[])}),e=[],Ot.__e(n,t.__v)}}),wf&&wf(i,e)},Ot.unmount=function(i){Ef&&Ef(i);var e,t=i.__c;t&&t.__H&&(t.__H.__.some(function(n){try{ja(n)}catch(s){e=s}}),t.__H=void 0,e&&Ot.__e(e,t.__v))};var Af=typeof requestAnimationFrame=="function";function pS(i){var e,t=function(){clearTimeout(n),Af&&cancelAnimationFrame(e),setTimeout(i)},n=setTimeout(t,35);Af&&(e=requestAnimationFrame(t))}function ja(i){var e=Dt,t=i.__c;typeof t=="function"&&(i.__c=void 0,t()),Dt=e}function au(i){var e=Dt;i.__c=i.__(),Dt=e}function zm(i,e){return!i||i.length!==e.length||e.some(function(t,n){return t!==i[n]})}function Hm(i,e){return typeof e=="function"?e(i):e}var mS=Symbol.for("preact-signals");function Ju(){if(Ss>1)Ss--;else{var i,e=!1;for(function(){var s=pl;for(pl=void 0;s!==void 0;)s.S.v===s.v&&(s.S.i=s.i),s=s.o}();Ro!==void 0;){var t=Ro;for(Ro=void 0,fl++;t!==void 0;){var n=t.u;if(t.u=void 0,t.f&=-3,!(8&t.f)&&Vm(t))try{t.c()}catch(s){e||(i=s,e=!0)}t=n}}if(fl=0,Ss--,e)throw i}}var mt=void 0;function eh(i){var e=mt;mt=void 0;try{return i()}finally{mt=e}}var Ro=void 0,Ss=0,fl=0,Rf=0,pl=void 0,ml=0;function Gm(i){if(mt!==void 0){var e=i.n;if(e===void 0||e.t!==mt)return e={i:0,S:i,p:mt.s,n:void 0,t:mt,e:void 0,x:void 0,r:e},mt.s!==void 0&&(mt.s.n=e),mt.s=e,i.n=e,32&mt.f&&i.S(e),e;if(e.i===-1)return e.i=0,e.n!==void 0&&(e.n.p=e.p,e.p!==void 0&&(e.p.n=e.n),e.p=mt.s,e.n=void 0,mt.s.n=e,mt.s=e),e}}function tn(i,e){this.v=i,this.i=0,this.n=void 0,this.t=void 0,this.l=0,this.W=e==null?void 0:e.watched,this.Z=e==null?void 0:e.unwatched,this.name=e==null?void 0:e.name}tn.prototype.brand=mS;tn.prototype.h=function(){return!0};tn.prototype.S=function(i){var e=this,t=this.t;t!==i&&i.e===void 0&&(i.x=t,this.t=i,t!==void 0?t.e=i:eh(function(){var n;(n=e.W)==null||n.call(e)}))};tn.prototype.U=function(i){var e=this;if(this.t!==void 0){var t=i.e,n=i.x;t!==void 0&&(t.x=n,i.e=void 0),n!==void 0&&(n.e=t,i.x=void 0),i===this.t&&(this.t=n,n===void 0&&eh(function(){var s;(s=e.Z)==null||s.call(e)}))}};tn.prototype.subscribe=function(i){var e=this;return Fo(function(){var t=e.value,n=mt;mt=void 0;try{i(t)}finally{mt=n}},{name:"sub"})};tn.prototype.valueOf=function(){return this.value};tn.prototype.toString=function(){return this.value+""};tn.prototype.toJSON=function(){return this.value};tn.prototype.peek=function(){var i=this;return eh(function(){return i.value})};Object.defineProperty(tn.prototype,"value",{get:function(){var i=Gm(this);return i!==void 0&&(i.i=this.i),this.v},set:function(i){if(i!==this.v){if(fl>100)throw new Error("Cycle detected");(function(t){Ss!==0&&fl===0&&t.l!==Rf&&(t.l=Rf,pl={S:t,v:t.v,i:t.i,o:pl})})(this),this.v=i,this.i++,ml++,Ss++;try{for(var e=this.t;e!==void 0;e=e.x)e.t.N()}finally{Ju()}}}});function Qt(i,e){return new tn(i,e)}function Vm(i){for(var e=i.s;e!==void 0;e=e.n)if(e.S.i!==e.i||!e.S.h()||e.S.i!==e.i)return!0;return!1}function Wm(i){for(var e=i.s;e!==void 0;e=e.n){var t=e.S.n;if(t!==void 0&&(e.r=t),e.S.n=e,e.i=-1,e.n===void 0){i.s=e;break}}}function Xm(i){for(var e=i.s,t=void 0;e!==void 0;){var n=e.p;e.i===-1?(e.S.U(e),n!==void 0&&(n.n=e.n),e.n!==void 0&&(e.n.p=n)):t=e,e.S.n=e.r,e.r!==void 0&&(e.r=void 0),e=n}i.s=t}function Cs(i,e){tn.call(this,void 0),this.x=i,this.s=void 0,this.g=ml-1,this.f=4,this.W=e==null?void 0:e.watched,this.Z=e==null?void 0:e.unwatched,this.name=e==null?void 0:e.name}Cs.prototype=new tn;Cs.prototype.h=function(){if(this.f&=-3,1&this.f)return!1;if((36&this.f)==32||(this.f&=-5,this.g===ml))return!0;if(this.g=ml,this.f|=1,this.i>0&&!Vm(this))return this.f&=-2,!0;var i=mt;try{Wm(this),mt=this;var e=this.x();(16&this.f||this.v!==e||this.i===0)&&(this.v=e,this.f&=-17,this.i++)}catch(t){this.v=t,this.f|=16,this.i++}return mt=i,Xm(this),this.f&=-2,!0};Cs.prototype.S=function(i){if(this.t===void 0){this.f|=36;for(var e=this.s;e!==void 0;e=e.n)e.S.S(e)}tn.prototype.S.call(this,i)};Cs.prototype.U=function(i){if(this.t!==void 0&&(tn.prototype.U.call(this,i),this.t===void 0)){this.f&=-33;for(var e=this.s;e!==void 0;e=e.n)e.S.U(e)}};Cs.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var i=this.t;i!==void 0;i=i.x)i.t.N()}};Object.defineProperty(Cs.prototype,"value",{get:function(){if(1&this.f)throw new Error("Cycle detected");var i=Gm(this);if(this.h(),i!==void 0&&(i.i=this.i),16&this.f)throw this.v;return this.v}});function th(i,e){return new Cs(i,e)}function qm(i){var e=i.m;if(i.m=void 0,typeof e=="function"){Ss++;var t=mt;mt=void 0;try{e()}catch(n){throw i.f&=-2,i.f|=8,nh(i),n}finally{mt=t,Ju()}}}function nh(i){for(var e=i.s;e!==void 0;e=e.n)e.S.U(e);i.x=void 0,i.s=void 0,qm(i)}function gS(i){if(mt!==this)throw new Error("Out-of-order effect");Xm(this),mt=i,this.f&=-2,8&this.f&&nh(this),Ju()}function Vr(i,e){this.x=i,this.m=void 0,this.s=void 0,this.u=void 0,this.f=32,this.name=e==null?void 0:e.name}Vr.prototype.c=function(){var i=this.S();try{if(8&this.f||this.x===void 0)return;var e=this.x();typeof e=="function"&&(this.m=e)}finally{i()}};Vr.prototype.S=function(){if(1&this.f)throw new Error("Cycle detected");this.f|=1,this.f&=-9,qm(this),Wm(this),Ss++;var i=mt;return mt=this,gS.bind(this,i)};Vr.prototype.N=function(){2&this.f||(this.f|=2,this.u=Ro,Ro=this)};Vr.prototype.d=function(){this.f|=8,1&this.f||nh(this)};Vr.prototype.dispose=function(){this.d()};function Fo(i,e){var t=new Vr(i,e);try{t.c()}catch(s){throw t.d(),s}var n=t.d.bind(t);return n[Symbol.dispose]=n,n}var Ma;function Wr(i,e){dt[i]=e.bind(null,dt[i]||function(){})}function gl(i){if(Ma){var e=Ma;Ma=void 0,e()}Ma=i&&i.S()}function jm(i){var e=this,t=i.data,n=xS(t);n.value=t;var s=Qu(function(){for(var r=e.__v;r=r.__;)if(r.__c){r.__c.__$f|=4;break}return e.__$u.c=function(){var o,a=e.__$u.S(),l=s.value;a(),Vp(l)||((o=e.base)==null?void 0:o.nodeType)!==3?(e.__$f|=1,e.setState({})):e.base.data=l},th(function(){var o=n.value.value;return o===0?0:o===!0?"":o||""})},[]);return s.value}jm.displayName="_st";Object.defineProperties(tn.prototype,{constructor:{configurable:!0,value:void 0},type:{configurable:!0,value:jm},props:{configurable:!0,get:function(){return{data:this}}},__b:{configurable:!0,value:1}});Wr("__b",function(i,e){if(typeof e.type=="string"){var t,n=e.props;for(var s in n)if(s!=="children"){var r=n[s];r instanceof tn&&(t||(e.__np=t={}),t[s]=r,n[s]=r.peek())}}i(e)});Wr("__r",function(i,e){i(e),gl();var t,n=e.__c;n&&(n.__$f&=-2,(t=n.__$u)===void 0&&(n.__$u=t=function(s){var r;return Fo(function(){r=this}),r.c=function(){n.__$f|=1,n.setState({})},r}())),gl(t)});Wr("__e",function(i,e,t,n){gl(),i(e,t,n)});Wr("diffed",function(i,e){gl();var t;if(typeof e.type=="string"&&(t=e.__e)){var n=e.__np,s=e.props;if(n){var r=t.U;if(r)for(var o in r){var a=r[o];a!==void 0&&!(o in n)&&(a.d(),r[o]=void 0)}else t.U=r={};for(var l in n){var c=r[l],u=n[l];c===void 0?(c=_S(t,l,u,s),r[l]=c):c.o(u,s)}}}i(e)});function _S(i,e,t,n){var s=e in i&&i.ownerSVGElement===void 0,r=Qt(t);return{o:function(o,a){r.value=o,n=a},d:Fo(function(){var o=r.value.value;n[e]!==o&&(n[e]=o,s?i[e]=o:o?i.setAttribute(e,o):i.removeAttribute(e))})}}Wr("unmount",function(i,e){if(typeof e.type=="string"){var t=e.__e;if(t){var n=t.U;if(n){t.U=void 0;for(var s in n){var r=n[s];r&&r.d()}}}}else{var o=e.__c;if(o){var a=o.__$u;a&&(o.__$u=void 0,a.d())}}i(e)});Wr("__h",function(i,e,t,n){(n<3||n===9)&&(e.__$f|=2),i(e,t,n)});Mo.prototype.shouldComponentUpdate=function(i,e){if(this.__R)return!0;var t=this.__$u,n=t&&t.s!==void 0;for(var s in e)return!0;if(this.__f||typeof this.u=="boolean"&&this.u===!0){if(!(n||2&this.__$f||4&this.__$f)||1&this.__$f)return!0}else if(!(n||4&this.__$f)||3&this.__$f)return!0;for(var r in i)if(r!=="__source"&&i[r]!==this.props[r])return!0;for(var o in this.props)if(!(o in i))return!0;return!1};function xS(i){return Qu(function(){return Qt(i)},[])}var lu={d:(i,e)=>{for(var t in e)lu.o(e,t)&&!lu.o(i,t)&&Object.defineProperty(i,t,{enumerable:!0,get:e[t]})},o:(i,e)=>Object.prototype.hasOwnProperty.call(i,e)},$m={};lu.d($m,{Q:()=>MS});var bc=function(i,e,t,n){return new(t||(t=Promise))(function(s,r){function o(c){try{l(n.next(c))}catch(u){r(u)}}function a(c){try{l(n.throw(c))}catch(u){r(u)}}function l(c){var u;c.done?s(c.value):(u=c.value,u instanceof t?u:new t(function(h){h(u)})).then(o,a)}l((n=n.apply(i,e||[])).next())})};const Ym=Symbol("Comlink.proxy"),vS=Symbol("Comlink.endpoint"),yS=Symbol("Comlink.releaseProxy"),cu=Symbol("Comlink.thrown"),Cf=i=>typeof i=="object"&&i!==null||typeof i=="function",Km=new Map([["proxy",{canHandle:i=>Cf(i)&&i[Ym],serialize(i){const{port1:e,port2:t}=new MessageChannel;return Zm(i,e),[t,[t]]},deserialize:i=>(i.start(),Jm(i))}],["throw",{canHandle:i=>Cf(i)&&cu in i,serialize({value:i}){let e;return e=i instanceof Error?{isError:!0,value:{message:i.message,name:i.name,stack:i.stack}}:{isError:!1,value:i},[e,[]]},deserialize(i){throw i.isError?Object.assign(new Error(i.value.message),i.value):i.value}}]]);function Zm(i,e=self){e.addEventListener("message",function t(n){if(!n||!n.data)return;const{id:s,type:r,path:o}=Object.assign({path:[]},n.data),a=(n.data.argumentList||[]).map(_s);let l;try{const c=o.slice(0,-1).reduce((h,d)=>h[d],i),u=o.reduce((h,d)=>h[d],i);switch(r){case"GET":l=u;break;case"SET":c[o.slice(-1)[0]]=_s(n.data.value),l=!0;break;case"APPLY":l=u.apply(c,a);break;case"CONSTRUCT":l=$a(new u(...a));break;case"ENDPOINT":{const{port1:h,port2:d}=new MessageChannel;Zm(i,d),l=function(f,g){return eg.set(f,g),f}(h,[h])}break;case"RELEASE":l=void 0;break;default:return}}catch(c){l={value:c,[cu]:0}}Promise.resolve(l).catch(c=>({value:c,[cu]:0})).then(c=>{const[u,h]=ih(c);e.postMessage(Object.assign(Object.assign({},u),{id:s}),h),r==="RELEASE"&&(e.removeEventListener("message",t),Qm(e))})}),e.start&&e.start()}function Qm(i){(function(e){return e.constructor.name==="MessagePort"})(i)&&i.close()}function Jm(i,e){return uu(i,[],e)}function Sa(i){if(i)throw new Error("Proxy has been released and is not useable")}function uu(i,e=[],t=function(){}){let n=!1;const s=new Proxy(t,{get(r,o){if(Sa(n),o===yS)return()=>nr(i,{type:"RELEASE",path:e.map(a=>a.toString())}).then(()=>{Qm(i),n=!0});if(o==="then"){if(e.length===0)return{then:()=>s};const a=nr(i,{type:"GET",path:e.map(l=>l.toString())}).then(_s);return a.then.bind(a)}return uu(i,[...e,o])},set(r,o,a){Sa(n);const[l,c]=ih(a);return nr(i,{type:"SET",path:[...e,o].map(u=>u.toString()),value:l},c).then(_s)},apply(r,o,a){Sa(n);const l=e[e.length-1];if(l===vS)return nr(i,{type:"ENDPOINT"}).then(_s);if(l==="bind")return uu(i,e.slice(0,-1));const[c,u]=Pf(a);return nr(i,{type:"APPLY",path:e.map(h=>h.toString()),argumentList:c},u).then(_s)},construct(r,o){Sa(n);const[a,l]=Pf(o);return nr(i,{type:"CONSTRUCT",path:e.map(c=>c.toString()),argumentList:a},l).then(_s)}});return s}function Pf(i){const e=i.map(ih);return[e.map(n=>n[0]),(t=e.map(n=>n[1]),Array.prototype.concat.apply([],t))];var t}const eg=new WeakMap;function $a(i){return Object.assign(i,{[Ym]:!0})}function ih(i){for(const[e,t]of Km)if(t.canHandle(i)){const[n,s]=t.serialize(i);return[{type:"HANDLER",name:e,value:n},s]}return[{type:"RAW",value:i},eg.get(i)||[]]}function _s(i){switch(i.type){case"HANDLER":return Km.get(i.name).deserialize(i.value);case"RAW":return i.value}}function nr(i,e,t){return new Promise(n=>{const s=new Array(4).fill(0).map(()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16)).join("-");i.addEventListener("message",function r(o){o.data&&o.data.id&&o.data.id===s&&(i.removeEventListener("message",r),n(o.data))}),i.start&&i.start(),i.postMessage(Object.assign({id:s},e),t)})}class bS extends class{}{init(e,t,n,s){if(!this.api){if(!s)throw new Error("workerFilePath is required");(()=>{var r,o,a,l;r=this,o=void 0,l=function*(){const c=yield fetch(s).then(d=>d.blob()),u=URL.createObjectURL(c),h=new Worker(u,{type:"module"});this.api=yield new(Jm(h))($a(()=>{e(),URL.revokeObjectURL(u)}),$a((d,f)=>d==="xatlas_web.wasm"?n:d+f),$a(t))},new((a=void 0)||(a=Promise))(function(c,u){function h(g){try{f(l.next(g))}catch(x){u(x)}}function d(g){try{f(l.throw(g))}catch(x){u(x)}}function f(g){var x;g.done?c(g.value):(x=g.value,x instanceof a?x:new a(function(m){m(x)})).then(h,d)}f((l=l.apply(r,o||[])).next())})})()}}}class MS extends class{constructor(e,t={resolution:2048},n={},s=!1,r=!1,o=!1){this.THREE=e,this.packOptions=t,this.chartOptions=n,this.useNormals=s,this.timeUnwrap=r,this.logProgress=o,this._libraryLoaded=!1,this._isUnwrapping=!1,this.xAtlas=this._createXAtlas()}loadLibrary(e,t,n){return bc(this,void 0,void 0,function*(){if(!this._libraryLoaded){for(yield new Promise((s,r)=>{try{this.xAtlas.init(()=>{s()},e,t,n)}catch(o){r(o)}});!this.xAtlas.api||!(yield this.xAtlas.api.loaded);)yield new Promise(s=>setTimeout(s,100));this._libraryLoaded=!0}})}packAtlas(e,t="uv2",n="uv"){return bc(this,void 0,void 0,function*(){if(!this._libraryLoaded)return console.warn("xatlas-three: library not loaded"),[];if(!e)return[];if(e.length<1)return[];const s=this.chartOptions.useInputMeshUvs;for(;this._isUnwrapping;)console.log("xatlas-three: unwrapping another mesh, waiting 100 ms"),yield new Promise(c=>setTimeout(c,100));this._isUnwrapping=!0,yield this.xAtlas.api.setProgressLogging(this.logProgress),yield this.xAtlas.api.createAtlas();let r=[],o="";for(let c of e){let{uuid:u,index:h,attributes:d}=c;const f=c.userData.worldScale||1;r.push(u),h&&d.position&&d.position.itemSize===3?(o="Mesh"+r.length+" added to atlas: "+u,this.timeUnwrap&&console.time(o),yield this.xAtlas.api.addMesh(h.array,d.position.array,d.normal?d.normal.array:void 0,d.uv?d.uv.array:void 0,u,this.useNormals,s,f),this.timeUnwrap&&console.timeEnd(o)):console.warn("xatlas-three: Geometry not supported: ",c)}o="Generated atlas with "+r.length+" meshes",this.timeUnwrap&&console.time(o);let a=yield this.xAtlas.api.generateAtlas(this.chartOptions,this.packOptions,!0);this.timeUnwrap&&console.timeEnd(o);let l=[];for(let c of a){let u=e.find(h=>h.uuid===c.mesh);u?(c.vertex.vertices&&u.setAttribute("position",new this.THREE.BufferAttribute(c.vertex.vertices,3,!1)),c.vertex.normals&&u.setAttribute("normal",new this.THREE.BufferAttribute(c.vertex.normals,3,!0)),c.vertex.coords1&&u.setAttribute(t,new this.THREE.BufferAttribute(c.vertex.coords1,2,!1)),c.vertex.coords&&t!==n&&u.setAttribute(n,new this.THREE.BufferAttribute(c.vertex.coords,2,!1)),c.index&&u.setIndex(new this.THREE.BufferAttribute(c.index,1,!1)),l.push(u)):console.error("xatlas-three: Mesh not found: ",c.mesh)}return yield this.xAtlas.api.destroyAtlas(),this._isUnwrapping=!1,l})}unwrapGeometry(e,t="uv",n="uv2"){return bc(this,void 0,void 0,function*(){return this.packAtlas([e],t,n)})}}{_createXAtlas(){return new bS}}var SS=$m.Q;const Ya=new SS({BufferAttribute:yt}),wS=async()=>{const i=(e,t)=>{};await Ya.loadLibrary(i,"https://cdn.jsdelivr.net/npm/xatlasjs@0.1.0/dist/xatlas.wasm","https://cdn.jsdelivr.net/npm/xatlasjs@0.1.0/dist/xatlas.js")},ES=async i=>{const e=i.map(t=>t.geometry);Ya.packOptions.padding=16,Ya.packOptions.resolution=4096,await Ya.packAtlas(e,"uv2","uv")},TS=`
    uniform vec2 offset;
    in vec2 uv2;
    out vec4 vWorldPosition;

    void main() {
        vWorldPosition = modelMatrix * vec4(position, 1.0);
        gl_Position = vec4((uv2 + offset) * 2.0 - 1.0, 0.0, 1.0);
    }
`,AS=`
    in vec4 vWorldPosition;
    out vec4 fragColor;

    void main() {
        fragColor = vWorldPosition;
    }
`,RS=new Zt({glslVersion:ii,vertexShader:TS,fragmentShader:AS,side:dn,fog:!1,uniforms:{offset:new Pl(new ye(0,0))}}),CS=`
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
`,PS=`
    in vec4 vNormal;
    out vec4 fragColor;

    void main() {
        // Guard against zero-length normals (degenerate geometry) \u2014 produces (0,0,0,0)
        // so the bake shader can detect the miss instead of generating NaN.
        float len = length(vNormal.xyz);
        fragColor = len > 1e-6 ? vec4(vNormal.xyz / len, vNormal.w) : vec4(0.0);
    }
`,LS=new Zt({glslVersion:ii,vertexShader:CS,fragmentShader:PS,side:dn,fog:!1,uniforms:{offset:new Pl(new ye(0,0))}}),IS=[{x:-2,y:-2},{x:2,y:-2},{x:-2,y:2},{x:2,y:2},{x:-1,y:-2},{x:1,y:-2},{x:-2,y:-1},{x:2,y:-1},{x:-2,y:1},{x:2,y:1},{x:-1,y:2},{x:1,y:2},{x:-2,y:0},{x:2,y:0},{x:0,y:-2},{x:0,y:2},{x:-1,y:-1},{x:1,y:-1},{x:-1,y:0},{x:1,y:0},{x:-1,y:1},{x:1,y:1},{x:0,y:-1},{x:0,y:1},{x:0,y:0}],DS=(i,e,t,n=!0)=>{const s=i.autoClear,r=i.getRenderTarget(),o=new Te;i.getClearColor(o);const a=i.getClearAlpha(),l=[],c=u=>{const h=new Mn(t,t,{type:ht,magFilter:st,minFilter:st});l.push(h);const d=new yi(-100,100,-100,100,-100,200);d.updateMatrix();const f=new Xe;f.matrixWorldAutoUpdate=!1;for(const x of e){const m=x.clone();m.material=u,f.add(m)}i.autoClear=!1,i.setRenderTarget(h),i.setClearColor(0,0),i.clear();const g=u.uniforms.offset;if(!g)throw new Error("[baker] atlas material missing `offset` uniform");if(n)for(const x of IS)g.value.x=x.x*(1/t),g.value.y=x.y*(1/t),i.render(f,d);return g.value.x=0,g.value.y=0,i.render(f,d),h.texture};try{const u=c(RS),h=c(LS);return{positionTexture:u,normalTexture:h,dispose:()=>{for(const d of l)d.dispose();l.length=0}}}finally{i.setRenderTarget(r),i.autoClear=s,i.setClearColor(o,a)}},tg=0,US=1,NS=2,Lf=2,Mc=1.25,If=1,is=6*4+4+4,Ll=65535,FS=Math.pow(2,-24),Sc=Symbol("SKIP_GENERATION");function ng(i){return i.index?i.index.count:i.attributes.position.count}function Xr(i){return ng(i)/3}function ig(i,e=ArrayBuffer){return i>65535?new Uint32Array(new e(4*i)):new Uint16Array(new e(2*i))}function OS(i,e){if(!i.index){const t=i.attributes.position.count,n=e.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,s=ig(t,n);i.setIndex(new yt(s,1));for(let r=0;r<t;r++)s[r]=r}}function sg(i){const e=Xr(i),t=i.drawRange,n=t.start/3,s=(t.start+t.count)/3,r=Math.max(0,n),o=Math.min(e,s)-r;return[{offset:Math.floor(r),count:Math.floor(o)}]}function rg(i){if(!i.groups||!i.groups.length)return sg(i);const e=[],t=new Set,n=i.drawRange,s=n.start/3,r=(n.start+n.count)/3;for(const a of i.groups){const l=a.start/3,c=(a.start+a.count)/3;t.add(Math.max(s,l)),t.add(Math.min(r,c))}const o=Array.from(t.values()).sort((a,l)=>a-l);for(let a=0;a<o.length-1;a++){const l=o[a],c=o[a+1];e.push({offset:Math.floor(l),count:Math.floor(c-l)})}return e}function BS(i){if(i.groups.length===0)return!1;const e=Xr(i),t=rg(i).sort((r,o)=>r.offset-o.offset),n=t[t.length-1];n.count=Math.min(e-n.offset,n.count);let s=0;return t.forEach(({count:r})=>s+=r),e!==s}function wc(i,e,t,n,s){let r=1/0,o=1/0,a=1/0,l=-1/0,c=-1/0,u=-1/0,h=1/0,d=1/0,f=1/0,g=-1/0,x=-1/0,m=-1/0;for(let p=e*6,v=(e+t)*6;p<v;p+=6){const _=i[p+0],b=i[p+1],S=_-b,w=_+b;S<r&&(r=S),w>l&&(l=w),_<h&&(h=_),_>g&&(g=_);const M=i[p+2],A=i[p+3],U=M-A,y=M+A;U<o&&(o=U),y>c&&(c=y),M<d&&(d=M),M>x&&(x=M);const E=i[p+4],N=i[p+5],B=E-N,P=E+N;B<a&&(a=B),P>u&&(u=P),E<f&&(f=E),E>m&&(m=E)}n[0]=r,n[1]=o,n[2]=a,n[3]=l,n[4]=c,n[5]=u,s[0]=h,s[1]=d,s[2]=f,s[3]=g,s[4]=x,s[5]=m}function kS(i,e=null,t=null,n=null){const s=i.attributes.position,r=i.index?i.index.array:null,o=Xr(i),a=s.normalized;let l;e===null?(l=new Float32Array(o*6*4),t=0,n=o):(l=e,t=t||0,n=n||o);const c=s.array,u=s.offset||0;let h=3;s.isInterleavedBufferAttribute&&(h=s.data.stride);const d=["getX","getY","getZ"];for(let f=t;f<t+n;f++){const g=f*3,x=f*6;let m=g+0,p=g+1,v=g+2;r&&(m=r[m],p=r[p],v=r[v]),a||(m=m*h+u,p=p*h+u,v=v*h+u);for(let _=0;_<3;_++){let b,S,w;a?(b=s[d[_]](m),S=s[d[_]](p),w=s[d[_]](v)):(b=c[m+_],S=c[p+_],w=c[v+_]);let M=b;S<M&&(M=S),w<M&&(M=w);let A=b;S>A&&(A=S),w>A&&(A=w);const U=(A-M)/2,y=_*2;l[x+y+0]=M+U,l[x+y+1]=U+(Math.abs(M)+U)*FS}}return l}function wt(i,e,t){return t.min.x=e[i],t.min.y=e[i+1],t.min.z=e[i+2],t.max.x=e[i+3],t.max.y=e[i+4],t.max.z=e[i+5],t}function Df(i){let e=-1,t=-1/0;for(let n=0;n<3;n++){const s=i[n+3]-i[n];s>t&&(t=s,e=n)}return e}function Uf(i,e){e.set(i)}function Nf(i,e,t){let n,s;for(let r=0;r<3;r++){const o=r+3;n=i[r],s=e[r],t[r]=n<s?n:s,n=i[o],s=e[o],t[o]=n>s?n:s}}function wa(i,e,t){for(let n=0;n<3;n++){const s=e[i+2*n],r=e[i+2*n+1],o=s-r,a=s+r;o<t[n]&&(t[n]=o),a>t[n+3]&&(t[n+3]=a)}}function io(i){const e=i[3]-i[0],t=i[4]-i[1],n=i[5]-i[2];return 2*(e*t+t*n+n*e)}const Di=32,zS=(i,e)=>i.candidate-e.candidate,qi=new Array(Di).fill().map(()=>({count:0,bounds:new Float32Array(6),rightCacheBounds:new Float32Array(6),leftCacheBounds:new Float32Array(6),candidate:0})),Ea=new Float32Array(6);function HS(i,e,t,n,s,r){let o=-1,a=0;if(r===tg)o=Df(e),o!==-1&&(a=(e[o]+e[o+3])/2);else if(r===US)o=Df(i),o!==-1&&(a=GS(t,n,s,o));else if(r===NS){const l=io(i);let c=Mc*s;const u=n*6,h=(n+s)*6;for(let d=0;d<3;d++){const f=e[d],m=(e[d+3]-f)/Di;if(s<Di/4){const p=[...qi];p.length=s;let v=0;for(let b=u;b<h;b+=6,v++){const S=p[v];S.candidate=t[b+2*d],S.count=0;const{bounds:w,leftCacheBounds:M,rightCacheBounds:A}=S;for(let U=0;U<3;U++)A[U]=1/0,A[U+3]=-1/0,M[U]=1/0,M[U+3]=-1/0,w[U]=1/0,w[U+3]=-1/0;wa(b,t,w)}p.sort(zS);let _=s;for(let b=0;b<_;b++){const S=p[b];for(;b+1<_&&p[b+1].candidate===S.candidate;)p.splice(b+1,1),_--}for(let b=u;b<h;b+=6){const S=t[b+2*d];for(let w=0;w<_;w++){const M=p[w];S>=M.candidate?wa(b,t,M.rightCacheBounds):(wa(b,t,M.leftCacheBounds),M.count++)}}for(let b=0;b<_;b++){const S=p[b],w=S.count,M=s-S.count,A=S.leftCacheBounds,U=S.rightCacheBounds;let y=0;w!==0&&(y=io(A)/l);let E=0;M!==0&&(E=io(U)/l);const N=If+Mc*(y*w+E*M);N<c&&(o=d,c=N,a=S.candidate)}}else{for(let _=0;_<Di;_++){const b=qi[_];b.count=0,b.candidate=f+m+_*m;const S=b.bounds;for(let w=0;w<3;w++)S[w]=1/0,S[w+3]=-1/0}for(let _=u;_<h;_+=6){let w=~~((t[_+2*d]-f)/m);w>=Di&&(w=Di-1);const M=qi[w];M.count++,wa(_,t,M.bounds)}const p=qi[Di-1];Uf(p.bounds,p.rightCacheBounds);for(let _=Di-2;_>=0;_--){const b=qi[_],S=qi[_+1];Nf(b.bounds,S.rightCacheBounds,b.rightCacheBounds)}let v=0;for(let _=0;_<Di-1;_++){const b=qi[_],S=b.count,w=b.bounds,A=qi[_+1].rightCacheBounds;S!==0&&(v===0?Uf(w,Ea):Nf(w,Ea,Ea)),v+=S;let U=0,y=0;v!==0&&(U=io(Ea)/l);const E=s-v;E!==0&&(y=io(A)/l);const N=If+Mc*(U*v+y*E);N<c&&(o=d,c=N,a=b.candidate)}}}}else console.warn(`MeshBVH: Invalid build strategy value ${r} used.`);return{axis:o,pos:a}}function GS(i,e,t,n){let s=0;for(let r=e,o=e+t;r<o;r++)s+=i[r*6+n*2];return s/t}class Ec{constructor(){this.boundingData=new Float32Array(6)}}function VS(i,e,t,n,s,r){let o=n,a=n+s-1;const l=r.pos,c=r.axis*2;for(;;){for(;o<=a&&t[o*6+c]<l;)o++;for(;o<=a&&t[a*6+c]>=l;)a--;if(o<a){for(let u=0;u<3;u++){let h=e[o*3+u];e[o*3+u]=e[a*3+u],e[a*3+u]=h}for(let u=0;u<6;u++){let h=t[o*6+u];t[o*6+u]=t[a*6+u],t[a*6+u]=h}o++,a--}else return o}}function WS(i,e,t,n,s,r){let o=n,a=n+s-1;const l=r.pos,c=r.axis*2;for(;;){for(;o<=a&&t[o*6+c]<l;)o++;for(;o<=a&&t[a*6+c]>=l;)a--;if(o<a){let u=i[o];i[o]=i[a],i[a]=u;for(let h=0;h<6;h++){let d=t[o*6+h];t[o*6+h]=t[a*6+h],t[a*6+h]=d}o++,a--}else return o}}function pn(i,e){return e[i+15]===65535}function bn(i,e){return e[i+6]}function Dn(i,e){return e[i+14]}function Vn(i){return i+8}function Un(i,e){return e[i+6]}function sh(i,e){return e[i+7]}let og,go,Ka,ag;const XS=Math.pow(2,32);function hu(i){return"count"in i?1:1+hu(i.left)+hu(i.right)}function qS(i,e,t){return og=new Float32Array(t),go=new Uint32Array(t),Ka=new Uint16Array(t),ag=new Uint8Array(t),du(i,e)}function du(i,e){const t=i/4,n=i/2,s="count"in e,r=e.boundingData;for(let o=0;o<6;o++)og[t+o]=r[o];if(s)if(e.buffer){const o=e.buffer;ag.set(new Uint8Array(o),i);for(let a=i,l=i+o.byteLength;a<l;a+=is){const c=a/2;pn(c,Ka)||(go[a/4+6]+=t)}return i+o.byteLength}else{const o=e.offset,a=e.count;return go[t+6]=o,Ka[n+14]=a,Ka[n+15]=Ll,i+is}else{const o=e.left,a=e.right,l=e.splitAxis;let c;if(c=du(i+is,o),c/4>XS)throw new Error("MeshBVH: Cannot store child pointer greater than 32 bits.");return go[t+6]=c/4,c=du(c,a),go[t+7]=l,c}}function jS(i,e){const t=(i.index?i.index.count:i.attributes.position.count)/3,n=t>2**16,s=n?4:2,r=e?new SharedArrayBuffer(t*s):new ArrayBuffer(t*s),o=n?new Uint32Array(r):new Uint16Array(r);for(let a=0,l=o.length;a<l;a++)o[a]=a;return o}function $S(i,e,t,n,s){const{maxDepth:r,verbose:o,maxLeafTris:a,strategy:l,onProgress:c,indirect:u}=s,h=i._indirectBuffer,d=i.geometry,f=d.index?d.index.array:null,g=u?WS:VS,x=Xr(d),m=new Float32Array(6);let p=!1;const v=new Ec;return wc(e,t,n,v.boundingData,m),b(v,t,n,m),v;function _(S){c&&c(S/x)}function b(S,w,M,A=null,U=0){if(!p&&U>=r&&(p=!0,o&&(console.warn(`MeshBVH: Max depth of ${r} reached when generating BVH. Consider increasing maxDepth.`),console.warn(d))),M<=a||U>=r)return _(w+M),S.offset=w,S.count=M,S;const y=HS(S.boundingData,A,e,w,M,l);if(y.axis===-1)return _(w+M),S.offset=w,S.count=M,S;const E=g(h,f,e,w,M,y);if(E===w||E===w+M)_(w+M),S.offset=w,S.count=M;else{S.splitAxis=y.axis;const N=new Ec,B=w,P=E-w;S.left=N,wc(e,B,P,N.boundingData,m),b(N,B,P,m,U+1);const O=new Ec,k=E,V=M-P;S.right=O,wc(e,k,V,O.boundingData,m),b(O,k,V,m,U+1)}return S}}function YS(i,e){const t=i.geometry;e.indirect&&(i._indirectBuffer=jS(t,e.useSharedArrayBuffer),BS(t)&&!e.verbose&&console.warn('MeshBVH: Provided geometry contains groups that do not fully span the vertex contents while using the "indirect" option. BVH may incorrectly report intersections on unrendered portions of the geometry.')),i._indirectBuffer||OS(t,e);const n=e.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,s=kS(t),r=e.indirect?sg(t):rg(t);i._roots=r.map(o=>{const a=$S(i,s,o.offset,o.count,e),l=hu(a),c=new n(is*l);return qS(0,a,c),c})}class xi{constructor(){this.min=1/0,this.max=-1/0}setFromPointsField(e,t){let n=1/0,s=-1/0;for(let r=0,o=e.length;r<o;r++){const l=e[r][t];n=l<n?l:n,s=l>s?l:s}this.min=n,this.max=s}setFromPoints(e,t){let n=1/0,s=-1/0;for(let r=0,o=t.length;r<o;r++){const a=t[r],l=e.dot(a);n=l<n?l:n,s=l>s?l:s}this.min=n,this.max=s}isSeparated(e){return this.min>e.max||e.min>this.max}}xi.prototype.setFromBox=function(){const i=new R;return function(t,n){const s=n.min,r=n.max;let o=1/0,a=-1/0;for(let l=0;l<=1;l++)for(let c=0;c<=1;c++)for(let u=0;u<=1;u++){i.x=s.x*l+r.x*(1-l),i.y=s.y*c+r.y*(1-c),i.z=s.z*u+r.z*(1-u);const h=t.dot(i);o=Math.min(h,o),a=Math.max(h,a)}this.min=o,this.max=a}}();(function(){const i=new xi;return function(t,n){const s=t.points,r=t.satAxes,o=t.satBounds,a=n.points,l=n.satAxes,c=n.satBounds;for(let u=0;u<3;u++){const h=o[u],d=r[u];if(i.setFromPoints(d,a),h.isSeparated(i))return!1}for(let u=0;u<3;u++){const h=c[u],d=l[u];if(i.setFromPoints(d,s),h.isSeparated(i))return!1}}})();const KS=function(){const i=new R,e=new R,t=new R;return function(s,r,o){const a=s.start,l=i,c=r.start,u=e;t.subVectors(a,c),i.subVectors(s.end,s.start),e.subVectors(r.end,r.start);const h=t.dot(u),d=u.dot(l),f=u.dot(u),g=t.dot(l),m=l.dot(l)*f-d*d;let p,v;m!==0?p=(h*d-g*f)/m:p=0,v=(h+p*d)/f,o.x=p,o.y=v}}(),rh=function(){const i=new ye,e=new R,t=new R;return function(s,r,o,a){KS(s,r,i);let l=i.x,c=i.y;if(l>=0&&l<=1&&c>=0&&c<=1){s.at(l,o),r.at(c,a);return}else if(l>=0&&l<=1){c<0?r.at(0,a):r.at(1,a),s.closestPointToPoint(a,!0,o);return}else if(c>=0&&c<=1){l<0?s.at(0,o):s.at(1,o),r.closestPointToPoint(o,!0,a);return}else{let u;l<0?u=s.start:u=s.end;let h;c<0?h=r.start:h=r.end;const d=e,f=t;if(s.closestPointToPoint(h,!0,e),r.closestPointToPoint(u,!0,t),d.distanceToSquared(h)<=f.distanceToSquared(u)){o.copy(d),a.copy(h);return}else{o.copy(u),a.copy(f);return}}}}(),ZS=function(){const i=new R,e=new R,t=new Zn,n=new Bi;return function(r,o){const{radius:a,center:l}=r,{a:c,b:u,c:h}=o;if(n.start=c,n.end=u,n.closestPointToPoint(l,!0,i).distanceTo(l)<=a||(n.start=c,n.end=h,n.closestPointToPoint(l,!0,i).distanceTo(l)<=a)||(n.start=u,n.end=h,n.closestPointToPoint(l,!0,i).distanceTo(l)<=a))return!0;const x=o.getPlane(t);if(Math.abs(x.distanceToPoint(l))<=a){const p=x.projectPoint(l,e);if(o.containsPoint(p))return!0}return!1}}(),QS=1e-15;function Tc(i){return Math.abs(i)<QS}class ri extends fn{constructor(...e){super(...e),this.isExtendedTriangle=!0,this.satAxes=new Array(4).fill().map(()=>new R),this.satBounds=new Array(4).fill().map(()=>new xi),this.points=[this.a,this.b,this.c],this.sphere=new oi,this.plane=new Zn,this.needsUpdate=!0}intersectsSphere(e){return ZS(e,this)}update(){const e=this.a,t=this.b,n=this.c,s=this.points,r=this.satAxes,o=this.satBounds,a=r[0],l=o[0];this.getNormal(a),l.setFromPoints(a,s);const c=r[1],u=o[1];c.subVectors(e,t),u.setFromPoints(c,s);const h=r[2],d=o[2];h.subVectors(t,n),d.setFromPoints(h,s);const f=r[3],g=o[3];f.subVectors(n,e),g.setFromPoints(f,s),this.sphere.setFromPoints(this.points),this.plane.setFromNormalAndCoplanarPoint(a,e),this.needsUpdate=!1}}ri.prototype.closestPointToSegment=function(){const i=new R,e=new R,t=new Bi;return function(s,r=null,o=null){const{start:a,end:l}=s,c=this.points;let u,h=1/0;for(let d=0;d<3;d++){const f=(d+1)%3;t.start.copy(c[d]),t.end.copy(c[f]),rh(t,s,i,e),u=i.distanceToSquared(e),u<h&&(h=u,r&&r.copy(i),o&&o.copy(e))}return this.closestPointToPoint(a,i),u=a.distanceToSquared(i),u<h&&(h=u,r&&r.copy(i),o&&o.copy(a)),this.closestPointToPoint(l,i),u=l.distanceToSquared(i),u<h&&(h=u,r&&r.copy(i),o&&o.copy(l)),Math.sqrt(h)}}();ri.prototype.intersectsTriangle=function(){const i=new ri,e=new Array(3),t=new Array(3),n=new xi,s=new xi,r=new R,o=new R,a=new R,l=new R,c=new R,u=new Bi,h=new Bi,d=new Bi,f=new R;function g(x,m,p){const v=x.points;let _=0,b=-1;for(let S=0;S<3;S++){const{start:w,end:M}=u;w.copy(v[S]),M.copy(v[(S+1)%3]),u.delta(o);const A=Tc(m.distanceToPoint(w));if(Tc(m.normal.dot(o))&&A){p.copy(u),_=2;break}const U=m.intersectLine(u,f);if(!U&&A&&f.copy(w),(U||A)&&!Tc(f.distanceTo(M))){if(_<=1)(_===1?p.start:p.end).copy(f),A&&(b=_);else if(_>=2){(b===1?p.start:p.end).copy(f),_=2;break}if(_++,_===2&&b===-1)break}}return _}return function(m,p=null,v=!1){this.needsUpdate&&this.update(),m.isExtendedTriangle?m.needsUpdate&&m.update():(i.copy(m),i.update(),m=i);const _=this.plane,b=m.plane;if(Math.abs(_.normal.dot(b.normal))>1-1e-10){const S=this.satBounds,w=this.satAxes;t[0]=m.a,t[1]=m.b,t[2]=m.c;for(let U=0;U<4;U++){const y=S[U],E=w[U];if(n.setFromPoints(E,t),y.isSeparated(n))return!1}const M=m.satBounds,A=m.satAxes;e[0]=this.a,e[1]=this.b,e[2]=this.c;for(let U=0;U<4;U++){const y=M[U],E=A[U];if(n.setFromPoints(E,e),y.isSeparated(n))return!1}for(let U=0;U<4;U++){const y=w[U];for(let E=0;E<4;E++){const N=A[E];if(r.crossVectors(y,N),n.setFromPoints(r,e),s.setFromPoints(r,t),n.isSeparated(s))return!1}}return p&&(v||console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."),p.start.set(0,0,0),p.end.set(0,0,0)),!0}else{const S=g(this,b,h);if(S===1&&m.containsPoint(h.end))return p&&(p.start.copy(h.end),p.end.copy(h.end)),!0;if(S!==2)return!1;const w=g(m,_,d);if(w===1&&this.containsPoint(d.end))return p&&(p.start.copy(d.end),p.end.copy(d.end)),!0;if(w!==2)return!1;if(h.delta(a),d.delta(l),a.dot(l)<0){let B=d.start;d.start=d.end,d.end=B}const M=h.start.dot(a),A=h.end.dot(a),U=d.start.dot(a),y=d.end.dot(a),E=A<U,N=M<y;return M!==y&&U!==A&&E===N?!1:(p&&(c.subVectors(h.start,d.start),c.dot(a)>0?p.start.copy(h.start):p.start.copy(d.start),c.subVectors(h.end,d.end),c.dot(a)<0?p.end.copy(h.end):p.end.copy(d.end)),!0)}}}();ri.prototype.distanceToPoint=function(){const i=new R;return function(t){return this.closestPointToPoint(t,i),t.distanceTo(i)}}();ri.prototype.distanceToTriangle=function(){const i=new R,e=new R,t=["a","b","c"],n=new Bi,s=new Bi;return function(o,a=null,l=null){const c=a||l?n:null;if(this.intersectsTriangle(o,c))return(a||l)&&(a&&c.getCenter(a),l&&c.getCenter(l)),0;let u=1/0;for(let h=0;h<3;h++){let d;const f=t[h],g=o[f];this.closestPointToPoint(g,i),d=g.distanceToSquared(i),d<u&&(u=d,a&&a.copy(i),l&&l.copy(g));const x=this[f];o.closestPointToPoint(x,i),d=x.distanceToSquared(i),d<u&&(u=d,a&&a.copy(x),l&&l.copy(i))}for(let h=0;h<3;h++){const d=t[h],f=t[(h+1)%3];n.set(this[d],this[f]);for(let g=0;g<3;g++){const x=t[g],m=t[(g+1)%3];s.set(o[x],o[m]),rh(n,s,i,e);const p=i.distanceToSquared(e);p<u&&(u=p,a&&a.copy(i),l&&l.copy(e))}}return Math.sqrt(u)}}();class _n{constructor(e,t,n){this.isOrientedBox=!0,this.min=new R,this.max=new R,this.matrix=new De,this.invMatrix=new De,this.points=new Array(8).fill().map(()=>new R),this.satAxes=new Array(3).fill().map(()=>new R),this.satBounds=new Array(3).fill().map(()=>new xi),this.alignedSatBounds=new Array(3).fill().map(()=>new xi),this.needsUpdate=!1,e&&this.min.copy(e),t&&this.max.copy(t),n&&this.matrix.copy(n)}set(e,t,n){this.min.copy(e),this.max.copy(t),this.matrix.copy(n),this.needsUpdate=!0}copy(e){this.min.copy(e.min),this.max.copy(e.max),this.matrix.copy(e.matrix),this.needsUpdate=!0}}_n.prototype.update=function(){return function(){const e=this.matrix,t=this.min,n=this.max,s=this.points;for(let c=0;c<=1;c++)for(let u=0;u<=1;u++)for(let h=0;h<=1;h++){const d=1*c|2*u|4*h,f=s[d];f.x=c?n.x:t.x,f.y=u?n.y:t.y,f.z=h?n.z:t.z,f.applyMatrix4(e)}const r=this.satBounds,o=this.satAxes,a=s[0];for(let c=0;c<3;c++){const u=o[c],h=r[c],d=1<<c,f=s[d];u.subVectors(a,f),h.setFromPoints(u,s)}const l=this.alignedSatBounds;l[0].setFromPointsField(s,"x"),l[1].setFromPointsField(s,"y"),l[2].setFromPointsField(s,"z"),this.invMatrix.copy(this.matrix).invert(),this.needsUpdate=!1}}();_n.prototype.intersectsBox=function(){const i=new xi;return function(t){this.needsUpdate&&this.update();const n=t.min,s=t.max,r=this.satBounds,o=this.satAxes,a=this.alignedSatBounds;if(i.min=n.x,i.max=s.x,a[0].isSeparated(i)||(i.min=n.y,i.max=s.y,a[1].isSeparated(i))||(i.min=n.z,i.max=s.z,a[2].isSeparated(i)))return!1;for(let l=0;l<3;l++){const c=o[l],u=r[l];if(i.setFromBox(c,t),u.isSeparated(i))return!1}return!0}}();_n.prototype.intersectsTriangle=function(){const i=new ri,e=new Array(3),t=new xi,n=new xi,s=new R;return function(o){this.needsUpdate&&this.update(),o.isExtendedTriangle?o.needsUpdate&&o.update():(i.copy(o),i.update(),o=i);const a=this.satBounds,l=this.satAxes;e[0]=o.a,e[1]=o.b,e[2]=o.c;for(let d=0;d<3;d++){const f=a[d],g=l[d];if(t.setFromPoints(g,e),f.isSeparated(t))return!1}const c=o.satBounds,u=o.satAxes,h=this.points;for(let d=0;d<3;d++){const f=c[d],g=u[d];if(t.setFromPoints(g,h),f.isSeparated(t))return!1}for(let d=0;d<3;d++){const f=l[d];for(let g=0;g<4;g++){const x=u[g];if(s.crossVectors(f,x),t.setFromPoints(s,e),n.setFromPoints(s,h),t.isSeparated(n))return!1}}return!0}}();_n.prototype.closestPointToPoint=function(){return function(e,t){return this.needsUpdate&&this.update(),t.copy(e).applyMatrix4(this.invMatrix).clamp(this.min,this.max).applyMatrix4(this.matrix),t}}();_n.prototype.distanceToPoint=function(){const i=new R;return function(t){return this.closestPointToPoint(t,i),t.distanceTo(i)}}();_n.prototype.distanceToBox=function(){const i=["x","y","z"],e=new Array(12).fill().map(()=>new Bi),t=new Array(12).fill().map(()=>new Bi),n=new R,s=new R;return function(o,a=0,l=null,c=null){if(this.needsUpdate&&this.update(),this.intersectsBox(o))return(l||c)&&(o.getCenter(s),this.closestPointToPoint(s,n),o.closestPointToPoint(n,s),l&&l.copy(n),c&&c.copy(s)),0;const u=a*a,h=o.min,d=o.max,f=this.points;let g=1/0;for(let m=0;m<8;m++){const p=f[m];s.copy(p).clamp(h,d);const v=p.distanceToSquared(s);if(v<g&&(g=v,l&&l.copy(p),c&&c.copy(s),v<u))return Math.sqrt(v)}let x=0;for(let m=0;m<3;m++)for(let p=0;p<=1;p++)for(let v=0;v<=1;v++){const _=(m+1)%3,b=(m+2)%3,S=p<<_|v<<b,w=1<<m|p<<_|v<<b,M=f[S],A=f[w];e[x].set(M,A);const y=i[m],E=i[_],N=i[b],B=t[x],P=B.start,O=B.end;P[y]=h[y],P[E]=p?h[E]:d[E],P[N]=v?h[N]:d[E],O[y]=d[y],O[E]=p?h[E]:d[E],O[N]=v?h[N]:d[E],x++}for(let m=0;m<=1;m++)for(let p=0;p<=1;p++)for(let v=0;v<=1;v++){s.x=m?d.x:h.x,s.y=p?d.y:h.y,s.z=v?d.z:h.z,this.closestPointToPoint(s,n);const _=s.distanceToSquared(n);if(_<g&&(g=_,l&&l.copy(n),c&&c.copy(s),_<u))return Math.sqrt(_)}for(let m=0;m<12;m++){const p=e[m];for(let v=0;v<12;v++){const _=t[v];rh(p,_,n,s);const b=n.distanceToSquared(s);if(b<g&&(g=b,l&&l.copy(n),c&&c.copy(s),b<u))return Math.sqrt(b)}}return Math.sqrt(g)}}();class oh{constructor(e){this._getNewPrimitive=e,this._primitives=[]}getPrimitive(){const e=this._primitives;return e.length===0?this._getNewPrimitive():e.pop()}releasePrimitive(e){this._primitives.push(e)}}class JS extends oh{constructor(){super(()=>new ri)}}const Wn=new JS;class ew{constructor(){this.float32Array=null,this.uint16Array=null,this.uint32Array=null;const e=[];let t=null;this.setBuffer=n=>{t&&e.push(t),t=n,this.float32Array=new Float32Array(n),this.uint16Array=new Uint16Array(n),this.uint32Array=new Uint32Array(n)},this.clearBuffer=()=>{t=null,this.float32Array=null,this.uint16Array=null,this.uint32Array=null,e.length!==0&&this.setBuffer(e.pop())}}}const bt=new ew;let ts,vr;const ir=[],Ta=new oh(()=>new Ut);function tw(i,e,t,n,s,r){ts=Ta.getPrimitive(),vr=Ta.getPrimitive(),ir.push(ts,vr),bt.setBuffer(i._roots[e]);const o=fu(0,i.geometry,t,n,s,r);bt.clearBuffer(),Ta.releasePrimitive(ts),Ta.releasePrimitive(vr),ir.pop(),ir.pop();const a=ir.length;return a>0&&(vr=ir[a-1],ts=ir[a-2]),o}function fu(i,e,t,n,s=null,r=0,o=0){const{float32Array:a,uint16Array:l,uint32Array:c}=bt;let u=i*2;if(pn(u,l)){const d=bn(i,c),f=Dn(u,l);return wt(i,a,ts),n(d,f,!1,o,r+i,ts)}else{let y=function(N){const{uint16Array:B,uint32Array:P}=bt;let O=N*2;for(;!pn(O,B);)N=Vn(N),O=N*2;return bn(N,P)},E=function(N){const{uint16Array:B,uint32Array:P}=bt;let O=N*2;for(;!pn(O,B);)N=Un(N,P),O=N*2;return bn(N,P)+Dn(O,B)};const d=Vn(i),f=Un(i,c);let g=d,x=f,m,p,v,_;if(s&&(v=ts,_=vr,wt(g,a,v),wt(x,a,_),m=s(v),p=s(_),p<m)){g=f,x=d;const N=m;m=p,p=N,v=_}v||(v=ts,wt(g,a,v));const b=pn(g*2,l),S=t(v,b,m,o+1,r+g);let w;if(S===Lf){const N=y(g),P=E(g)-N;w=n(N,P,!0,o+1,r+g,v)}else w=S&&fu(g,e,t,n,s,r,o+1);if(w)return!0;_=vr,wt(x,a,_);const M=pn(x*2,l),A=t(_,M,p,o+1,r+x);let U;if(A===Lf){const N=y(x),P=E(x)-N;U=n(N,P,!0,o+1,r+x,_)}else U=A&&fu(x,e,t,n,s,r,o+1);return!!U}}const so=new R,Ac=new R;function nw(i,e,t={},n=0,s=1/0){const r=n*n,o=s*s;let a=1/0,l=null;if(i.shapecast({boundsTraverseOrder:u=>(so.copy(e).clamp(u.min,u.max),so.distanceToSquared(e)),intersectsBounds:(u,h,d)=>d<a&&d<o,intersectsTriangle:(u,h)=>{u.closestPointToPoint(e,so);const d=e.distanceToSquared(so);return d<a&&(Ac.copy(so),a=d,l=h),d<r}}),a===1/0)return null;const c=Math.sqrt(a);return t.point?t.point.copy(Ac):t.point=Ac.clone(),t.distance=c,t.faceIndex=l,t}const sr=new R,rr=new R,or=new R,Aa=new ye,Ra=new ye,Ca=new ye,Ff=new R,Of=new R,Bf=new R,Pa=new R;function iw(i,e,t,n,s,r){let o;return r===gn?o=i.intersectTriangle(n,t,e,!0,s):o=i.intersectTriangle(e,t,n,r!==dn,s),o===null?null:{distance:i.origin.distanceTo(s),point:s.clone()}}function sw(i,e,t,n,s,r,o,a,l){sr.fromBufferAttribute(e,r),rr.fromBufferAttribute(e,o),or.fromBufferAttribute(e,a);const c=iw(i,sr,rr,or,Pa,l);if(c){n&&(Aa.fromBufferAttribute(n,r),Ra.fromBufferAttribute(n,o),Ca.fromBufferAttribute(n,a),c.uv=fn.getInterpolation(Pa,sr,rr,or,Aa,Ra,Ca,new ye)),s&&(Aa.fromBufferAttribute(s,r),Ra.fromBufferAttribute(s,o),Ca.fromBufferAttribute(s,a),c.uv1=fn.getInterpolation(Pa,sr,rr,or,Aa,Ra,Ca,new ye)),t&&(Ff.fromBufferAttribute(t,r),Of.fromBufferAttribute(t,o),Bf.fromBufferAttribute(t,a),c.normal=fn.getInterpolation(Pa,sr,rr,or,Ff,Of,Bf,new R),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const u={a:r,b:o,c:a,normal:new R,materialIndex:0};fn.getNormal(sr,rr,or,u.normal),c.face=u,c.faceIndex=r}return c}function Il(i,e,t,n,s){const r=n*3;let o=r+0,a=r+1,l=r+2;const c=i.index;i.index&&(o=c.getX(o),a=c.getX(a),l=c.getX(l));const{position:u,normal:h,uv:d,uv1:f}=i.attributes,g=sw(t,u,h,d,f,o,a,l,e);return g?(g.faceIndex=n,s&&s.push(g),g):null}function zt(i,e,t,n){const s=i.a,r=i.b,o=i.c;let a=e,l=e+1,c=e+2;t&&(a=t.getX(a),l=t.getX(l),c=t.getX(c)),s.x=n.getX(a),s.y=n.getY(a),s.z=n.getZ(a),r.x=n.getX(l),r.y=n.getY(l),r.z=n.getZ(l),o.x=n.getX(c),o.y=n.getY(c),o.z=n.getZ(c)}function rw(i,e,t,n,s,r){const{geometry:o,_indirectBuffer:a}=i;for(let l=n,c=n+s;l<c;l++)Il(o,e,t,l,r)}function ow(i,e,t,n,s){const{geometry:r,_indirectBuffer:o}=i;let a=1/0,l=null;for(let c=n,u=n+s;c<u;c++){let h;h=Il(r,e,t,c),h&&h.distance<a&&(l=h,a=h.distance)}return l}function aw(i,e,t,n,s,r,o){const{geometry:a}=t,{index:l}=a,c=a.attributes.position;for(let u=i,h=e+i;u<h;u++){let d;if(d=u,zt(o,d*3,l,c),o.needsUpdate=!0,n(o,d,s,r))return!0}return!1}function lw(i,e=null){e&&Array.isArray(e)&&(e=new Set(e));const t=i.geometry,n=t.index?t.index.array:null,s=t.attributes.position;let r,o,a,l,c=0;const u=i._roots;for(let d=0,f=u.length;d<f;d++)r=u[d],o=new Uint32Array(r),a=new Uint16Array(r),l=new Float32Array(r),h(0,c),c+=r.byteLength;function h(d,f,g=!1){const x=d*2;if(a[x+15]===Ll){const p=o[d+6],v=a[x+14];let _=1/0,b=1/0,S=1/0,w=-1/0,M=-1/0,A=-1/0;for(let U=3*p,y=3*(p+v);U<y;U++){let E=n[U];const N=s.getX(E),B=s.getY(E),P=s.getZ(E);N<_&&(_=N),N>w&&(w=N),B<b&&(b=B),B>M&&(M=B),P<S&&(S=P),P>A&&(A=P)}return l[d+0]!==_||l[d+1]!==b||l[d+2]!==S||l[d+3]!==w||l[d+4]!==M||l[d+5]!==A?(l[d+0]=_,l[d+1]=b,l[d+2]=S,l[d+3]=w,l[d+4]=M,l[d+5]=A,!0):!1}else{const p=d+8,v=o[d+6],_=p+f,b=v+f;let S=g,w=!1,M=!1;e?S||(w=e.has(_),M=e.has(b),S=!w&&!M):(w=!0,M=!0);const A=S||w,U=S||M;let y=!1;A&&(y=h(p,f,S));let E=!1;U&&(E=h(v,f,S));const N=y||E;if(N)for(let B=0;B<3;B++){const P=p+B,O=v+B,k=l[P],V=l[P+3],q=l[O],H=l[O+3];l[d+B]=k<q?k:q,l[d+B+3]=V>H?V:H}return N}}}const kf=new Ut;function ss(i,e,t,n){return wt(i,e,kf),t.intersectBox(kf,n)}function cw(i,e,t,n,s,r){const{geometry:o,_indirectBuffer:a}=i;for(let l=n,c=n+s;l<c;l++){let u=a?a[l]:l;Il(o,e,t,u,r)}}function uw(i,e,t,n,s){const{geometry:r,_indirectBuffer:o}=i;let a=1/0,l=null;for(let c=n,u=n+s;c<u;c++){let h;h=Il(r,e,t,o?o[c]:c),h&&h.distance<a&&(l=h,a=h.distance)}return l}function hw(i,e,t,n,s,r,o){const{geometry:a}=t,{index:l}=a,c=a.attributes.position;for(let u=i,h=e+i;u<h;u++){let d;if(d=t.resolveTriangleIndex(u),zt(o,d*3,l,c),o.needsUpdate=!0,n(o,d,s,r))return!0}return!1}const zf=new R;function dw(i,e,t,n,s){bt.setBuffer(i._roots[e]),pu(0,i,t,n,s),bt.clearBuffer()}function pu(i,e,t,n,s){const{float32Array:r,uint16Array:o,uint32Array:a}=bt,l=i*2;if(pn(l,o)){const u=bn(i,a),h=Dn(l,o);rw(e,t,n,u,h,s)}else{const u=Vn(i);ss(u,r,n,zf)&&pu(u,e,t,n,s);const h=Un(i,a);ss(h,r,n,zf)&&pu(h,e,t,n,s)}}const Hf=new R,fw=["x","y","z"];function pw(i,e,t,n){bt.setBuffer(i._roots[e]);const s=mu(0,i,t,n);return bt.clearBuffer(),s}function mu(i,e,t,n){const{float32Array:s,uint16Array:r,uint32Array:o}=bt;let a=i*2;if(pn(a,r)){const c=bn(i,o),u=Dn(a,r);return ow(e,t,n,c,u)}else{const c=sh(i,o),u=fw[c],d=n.direction[u]>=0;let f,g;d?(f=Vn(i),g=Un(i,o)):(f=Un(i,o),g=Vn(i));const m=ss(f,s,n,Hf)?mu(f,e,t,n):null;if(m){const _=m.point[u];if(d?_<=s[g+c]:_>=s[g+c+3])return m}const v=ss(g,s,n,Hf)?mu(g,e,t,n):null;return m&&v?m.distance<=v.distance?m:v:m||v||null}}const La=new Ut,ar=new ri,lr=new ri,ro=new De,Gf=new _n,Ia=new _n;function mw(i,e,t,n){bt.setBuffer(i._roots[e]);const s=gu(0,i,t,n);return bt.clearBuffer(),s}function gu(i,e,t,n,s=null){const{float32Array:r,uint16Array:o,uint32Array:a}=bt;let l=i*2;if(s===null&&(t.boundingBox||t.computeBoundingBox(),Gf.set(t.boundingBox.min,t.boundingBox.max,n),s=Gf),pn(l,o)){const u=e.geometry,h=u.index,d=u.attributes.position,f=t.index,g=t.attributes.position,x=bn(i,a),m=Dn(l,o);if(ro.copy(n).invert(),t.boundsTree)return wt(i,r,Ia),Ia.matrix.copy(ro),Ia.needsUpdate=!0,t.boundsTree.shapecast({intersectsBounds:v=>Ia.intersectsBox(v),intersectsTriangle:v=>{v.a.applyMatrix4(n),v.b.applyMatrix4(n),v.c.applyMatrix4(n),v.needsUpdate=!0;for(let _=x*3,b=(m+x)*3;_<b;_+=3)if(zt(lr,_,h,d),lr.needsUpdate=!0,v.intersectsTriangle(lr))return!0;return!1}});for(let p=x*3,v=(m+x)*3;p<v;p+=3){zt(ar,p,h,d),ar.a.applyMatrix4(ro),ar.b.applyMatrix4(ro),ar.c.applyMatrix4(ro),ar.needsUpdate=!0;for(let _=0,b=f.count;_<b;_+=3)if(zt(lr,_,f,g),lr.needsUpdate=!0,ar.intersectsTriangle(lr))return!0}}else{const u=i+8,h=a[i+6];return wt(u,r,La),!!(s.intersectsBox(La)&&gu(u,e,t,n,s)||(wt(h,r,La),s.intersectsBox(La)&&gu(h,e,t,n,s)))}}const Da=new De,Rc=new _n,oo=new _n,gw=new R,_w=new R,xw=new R,vw=new R;function yw(i,e,t,n={},s={},r=0,o=1/0){e.boundingBox||e.computeBoundingBox(),Rc.set(e.boundingBox.min,e.boundingBox.max,t),Rc.needsUpdate=!0;const a=i.geometry,l=a.attributes.position,c=a.index,u=e.attributes.position,h=e.index,d=Wn.getPrimitive(),f=Wn.getPrimitive();let g=gw,x=_w,m=null,p=null;s&&(m=xw,p=vw);let v=1/0,_=null,b=null;return Da.copy(t).invert(),oo.matrix.copy(Da),i.shapecast({boundsTraverseOrder:S=>Rc.distanceToBox(S),intersectsBounds:(S,w,M)=>M<v&&M<o?(w&&(oo.min.copy(S.min),oo.max.copy(S.max),oo.needsUpdate=!0),!0):!1,intersectsRange:(S,w)=>{if(e.boundsTree)return e.boundsTree.shapecast({boundsTraverseOrder:A=>oo.distanceToBox(A),intersectsBounds:(A,U,y)=>y<v&&y<o,intersectsRange:(A,U)=>{for(let y=A,E=A+U;y<E;y++){zt(f,3*y,h,u),f.a.applyMatrix4(t),f.b.applyMatrix4(t),f.c.applyMatrix4(t),f.needsUpdate=!0;for(let N=S,B=S+w;N<B;N++){zt(d,3*N,c,l),d.needsUpdate=!0;const P=d.distanceToTriangle(f,g,m);if(P<v&&(x.copy(g),p&&p.copy(m),v=P,_=N,b=y),P<r)return!0}}}});{const M=Xr(e);for(let A=0,U=M;A<U;A++){zt(f,3*A,h,u),f.a.applyMatrix4(t),f.b.applyMatrix4(t),f.c.applyMatrix4(t),f.needsUpdate=!0;for(let y=S,E=S+w;y<E;y++){zt(d,3*y,c,l),d.needsUpdate=!0;const N=d.distanceToTriangle(f,g,m);if(N<v&&(x.copy(g),p&&p.copy(m),v=N,_=y,b=A),N<r)return!0}}}}}),Wn.releasePrimitive(d),Wn.releasePrimitive(f),v===1/0?null:(n.point?n.point.copy(x):n.point=x.clone(),n.distance=v,n.faceIndex=_,s&&(s.point?s.point.copy(p):s.point=p.clone(),s.point.applyMatrix4(Da),x.applyMatrix4(Da),s.distance=x.sub(s.point).length(),s.faceIndex=b),n)}function bw(i,e=null){e&&Array.isArray(e)&&(e=new Set(e));const t=i.geometry,n=t.index?t.index.array:null,s=t.attributes.position;let r,o,a,l,c=0;const u=i._roots;for(let d=0,f=u.length;d<f;d++)r=u[d],o=new Uint32Array(r),a=new Uint16Array(r),l=new Float32Array(r),h(0,c),c+=r.byteLength;function h(d,f,g=!1){const x=d*2;if(a[x+15]===Ll){const p=o[d+6],v=a[x+14];let _=1/0,b=1/0,S=1/0,w=-1/0,M=-1/0,A=-1/0;for(let U=p,y=p+v;U<y;U++){const E=3*i.resolveTriangleIndex(U);for(let N=0;N<3;N++){let B=E+N;B=n?n[B]:B;const P=s.getX(B),O=s.getY(B),k=s.getZ(B);P<_&&(_=P),P>w&&(w=P),O<b&&(b=O),O>M&&(M=O),k<S&&(S=k),k>A&&(A=k)}}return l[d+0]!==_||l[d+1]!==b||l[d+2]!==S||l[d+3]!==w||l[d+4]!==M||l[d+5]!==A?(l[d+0]=_,l[d+1]=b,l[d+2]=S,l[d+3]=w,l[d+4]=M,l[d+5]=A,!0):!1}else{const p=d+8,v=o[d+6],_=p+f,b=v+f;let S=g,w=!1,M=!1;e?S||(w=e.has(_),M=e.has(b),S=!w&&!M):(w=!0,M=!0);const A=S||w,U=S||M;let y=!1;A&&(y=h(p,f,S));let E=!1;U&&(E=h(v,f,S));const N=y||E;if(N)for(let B=0;B<3;B++){const P=p+B,O=v+B,k=l[P],V=l[P+3],q=l[O],H=l[O+3];l[d+B]=k<q?k:q,l[d+B+3]=V>H?V:H}return N}}}const Vf=new R;function Mw(i,e,t,n,s){bt.setBuffer(i._roots[e]),_u(0,i,t,n,s),bt.clearBuffer()}function _u(i,e,t,n,s){const{float32Array:r,uint16Array:o,uint32Array:a}=bt,l=i*2;if(pn(l,o)){const u=bn(i,a),h=Dn(l,o);cw(e,t,n,u,h,s)}else{const u=Vn(i);ss(u,r,n,Vf)&&_u(u,e,t,n,s);const h=Un(i,a);ss(h,r,n,Vf)&&_u(h,e,t,n,s)}}const Wf=new R,Sw=["x","y","z"];function ww(i,e,t,n){bt.setBuffer(i._roots[e]);const s=xu(0,i,t,n);return bt.clearBuffer(),s}function xu(i,e,t,n){const{float32Array:s,uint16Array:r,uint32Array:o}=bt;let a=i*2;if(pn(a,r)){const c=bn(i,o),u=Dn(a,r);return uw(e,t,n,c,u)}else{const c=sh(i,o),u=Sw[c],d=n.direction[u]>=0;let f,g;d?(f=Vn(i),g=Un(i,o)):(f=Un(i,o),g=Vn(i));const m=ss(f,s,n,Wf)?xu(f,e,t,n):null;if(m){const _=m.point[u];if(d?_<=s[g+c]:_>=s[g+c+3])return m}const v=ss(g,s,n,Wf)?xu(g,e,t,n):null;return m&&v?m.distance<=v.distance?m:v:m||v||null}}const Ua=new Ut,cr=new ri,ur=new ri,ao=new De,Xf=new _n,Na=new _n;function Ew(i,e,t,n){bt.setBuffer(i._roots[e]);const s=vu(0,i,t,n);return bt.clearBuffer(),s}function vu(i,e,t,n,s=null){const{float32Array:r,uint16Array:o,uint32Array:a}=bt;let l=i*2;if(s===null&&(t.boundingBox||t.computeBoundingBox(),Xf.set(t.boundingBox.min,t.boundingBox.max,n),s=Xf),pn(l,o)){const u=e.geometry,h=u.index,d=u.attributes.position,f=t.index,g=t.attributes.position,x=bn(i,a),m=Dn(l,o);if(ao.copy(n).invert(),t.boundsTree)return wt(i,r,Na),Na.matrix.copy(ao),Na.needsUpdate=!0,t.boundsTree.shapecast({intersectsBounds:v=>Na.intersectsBox(v),intersectsTriangle:v=>{v.a.applyMatrix4(n),v.b.applyMatrix4(n),v.c.applyMatrix4(n),v.needsUpdate=!0;for(let _=x,b=m+x;_<b;_++)if(zt(ur,3*e.resolveTriangleIndex(_),h,d),ur.needsUpdate=!0,v.intersectsTriangle(ur))return!0;return!1}});for(let p=x,v=m+x;p<v;p++){const _=e.resolveTriangleIndex(p);zt(cr,3*_,h,d),cr.a.applyMatrix4(ao),cr.b.applyMatrix4(ao),cr.c.applyMatrix4(ao),cr.needsUpdate=!0;for(let b=0,S=f.count;b<S;b+=3)if(zt(ur,b,f,g),ur.needsUpdate=!0,cr.intersectsTriangle(ur))return!0}}else{const u=i+8,h=a[i+6];return wt(u,r,Ua),!!(s.intersectsBox(Ua)&&vu(u,e,t,n,s)||(wt(h,r,Ua),s.intersectsBox(Ua)&&vu(h,e,t,n,s)))}}const Fa=new De,Cc=new _n,lo=new _n,Tw=new R,Aw=new R,Rw=new R,Cw=new R;function Pw(i,e,t,n={},s={},r=0,o=1/0){e.boundingBox||e.computeBoundingBox(),Cc.set(e.boundingBox.min,e.boundingBox.max,t),Cc.needsUpdate=!0;const a=i.geometry,l=a.attributes.position,c=a.index,u=e.attributes.position,h=e.index,d=Wn.getPrimitive(),f=Wn.getPrimitive();let g=Tw,x=Aw,m=null,p=null;s&&(m=Rw,p=Cw);let v=1/0,_=null,b=null;return Fa.copy(t).invert(),lo.matrix.copy(Fa),i.shapecast({boundsTraverseOrder:S=>Cc.distanceToBox(S),intersectsBounds:(S,w,M)=>M<v&&M<o?(w&&(lo.min.copy(S.min),lo.max.copy(S.max),lo.needsUpdate=!0),!0):!1,intersectsRange:(S,w)=>{if(e.boundsTree){const M=e.boundsTree;return M.shapecast({boundsTraverseOrder:A=>lo.distanceToBox(A),intersectsBounds:(A,U,y)=>y<v&&y<o,intersectsRange:(A,U)=>{for(let y=A,E=A+U;y<E;y++){const N=M.resolveTriangleIndex(y);zt(f,3*N,h,u),f.a.applyMatrix4(t),f.b.applyMatrix4(t),f.c.applyMatrix4(t),f.needsUpdate=!0;for(let B=S,P=S+w;B<P;B++){const O=i.resolveTriangleIndex(B);zt(d,3*O,c,l),d.needsUpdate=!0;const k=d.distanceToTriangle(f,g,m);if(k<v&&(x.copy(g),p&&p.copy(m),v=k,_=B,b=y),k<r)return!0}}}})}else{const M=Xr(e);for(let A=0,U=M;A<U;A++){zt(f,3*A,h,u),f.a.applyMatrix4(t),f.b.applyMatrix4(t),f.c.applyMatrix4(t),f.needsUpdate=!0;for(let y=S,E=S+w;y<E;y++){const N=i.resolveTriangleIndex(y);zt(d,3*N,c,l),d.needsUpdate=!0;const B=d.distanceToTriangle(f,g,m);if(B<v&&(x.copy(g),p&&p.copy(m),v=B,_=y,b=A),B<r)return!0}}}}}),Wn.releasePrimitive(d),Wn.releasePrimitive(f),v===1/0?null:(n.point?n.point.copy(x):n.point=x.clone(),n.distance=v,n.faceIndex=_,s&&(s.point?s.point.copy(p):s.point=p.clone(),s.point.applyMatrix4(Fa),x.applyMatrix4(Fa),s.distance=x.sub(s.point).length(),s.faceIndex=b),n)}function Lw(){return typeof SharedArrayBuffer!="undefined"}const Co=new bt.constructor,_l=new bt.constructor,Zi=new oh(()=>new Ut),hr=new Ut,dr=new Ut,Pc=new Ut,Lc=new Ut;let Ic=!1;function Iw(i,e,t,n){if(Ic)throw new Error("MeshBVH: Recursive calls to bvhcast not supported.");Ic=!0;const s=i._roots,r=e._roots;let o,a=0,l=0;const c=new De().copy(t).invert();for(let u=0,h=s.length;u<h;u++){Co.setBuffer(s[u]),l=0;const d=Zi.getPrimitive();wt(0,Co.float32Array,d),d.applyMatrix4(c);for(let f=0,g=r.length;f<g&&(_l.setBuffer(r[u]),o=Yn(0,0,t,c,n,a,l,0,0,d),_l.clearBuffer(),l+=r[f].length,!o);f++);if(Zi.releasePrimitive(d),Co.clearBuffer(),a+=s[u].length,o)break}return Ic=!1,o}function Yn(i,e,t,n,s,r=0,o=0,a=0,l=0,c=null,u=!1){let h,d;u?(h=_l,d=Co):(h=Co,d=_l);const f=h.float32Array,g=h.uint32Array,x=h.uint16Array,m=d.float32Array,p=d.uint32Array,v=d.uint16Array,_=i*2,b=e*2,S=pn(_,x),w=pn(b,v);let M=!1;if(w&&S)u?M=s(bn(e,p),Dn(e*2,v),bn(i,g),Dn(i*2,x),l,o+e,a,r+i):M=s(bn(i,g),Dn(i*2,x),bn(e,p),Dn(e*2,v),a,r+i,l,o+e);else if(w){const A=Zi.getPrimitive();wt(e,m,A),A.applyMatrix4(t);const U=Vn(i),y=Un(i,g);wt(U,f,hr),wt(y,f,dr);const E=A.intersectsBox(hr),N=A.intersectsBox(dr);M=E&&Yn(e,U,n,t,s,o,r,l,a+1,A,!u)||N&&Yn(e,y,n,t,s,o,r,l,a+1,A,!u),Zi.releasePrimitive(A)}else{const A=Vn(e),U=Un(e,p);wt(A,m,Pc),wt(U,m,Lc);const y=c.intersectsBox(Pc),E=c.intersectsBox(Lc);if(y&&E)M=Yn(i,A,t,n,s,r,o,a,l+1,c,u)||Yn(i,U,t,n,s,r,o,a,l+1,c,u);else if(y)if(S)M=Yn(i,A,t,n,s,r,o,a,l+1,c,u);else{const N=Zi.getPrimitive();N.copy(Pc).applyMatrix4(t);const B=Vn(i),P=Un(i,g);wt(B,f,hr),wt(P,f,dr);const O=N.intersectsBox(hr),k=N.intersectsBox(dr);M=O&&Yn(A,B,n,t,s,o,r,l,a+1,N,!u)||k&&Yn(A,P,n,t,s,o,r,l,a+1,N,!u),Zi.releasePrimitive(N)}else if(E)if(S)M=Yn(i,U,t,n,s,r,o,a,l+1,c,u);else{const N=Zi.getPrimitive();N.copy(Lc).applyMatrix4(t);const B=Vn(i),P=Un(i,g);wt(B,f,hr),wt(P,f,dr);const O=N.intersectsBox(hr),k=N.intersectsBox(dr);M=O&&Yn(U,B,n,t,s,o,r,l,a+1,N,!u)||k&&Yn(U,P,n,t,s,o,r,l,a+1,N,!u),Zi.releasePrimitive(N)}}return M}const Oa=new _n,qf=new Ut,Dw={strategy:tg,maxDepth:40,maxLeafTris:10,useSharedArrayBuffer:!1,setBoundingBox:!0,onProgress:null,indirect:!1,verbose:!0};class ah{static serialize(e,t={}){t={cloneBuffers:!0,...t};const n=e.geometry,s=e._roots,r=e._indirectBuffer,o=n.getIndex();let a;return t.cloneBuffers?a={roots:s.map(l=>l.slice()),index:o.array.slice(),indirectBuffer:r?r.slice():null}:a={roots:s,index:o.array,indirectBuffer:r},a}static deserialize(e,t,n={}){n={setIndex:!0,indirect:Boolean(e.indirectBuffer),...n};const{index:s,roots:r,indirectBuffer:o}=e,a=new ah(t,{...n,[Sc]:!0});if(a._roots=r,a._indirectBuffer=o||null,n.setIndex){const l=t.getIndex();if(l===null){const c=new yt(e.index,1,!1);t.setIndex(c)}else l.array!==s&&(l.array.set(s),l.needsUpdate=!0)}return a}get indirect(){return!!this._indirectBuffer}constructor(e,t={}){if(e.isBufferGeometry){if(e.index&&e.index.isInterleavedBufferAttribute)throw new Error("MeshBVH: InterleavedBufferAttribute is not supported for the index attribute.")}else throw new Error("MeshBVH: Only BufferGeometries are supported.");if(t=Object.assign({...Dw,[Sc]:!1},t),t.useSharedArrayBuffer&&!Lw())throw new Error("MeshBVH: SharedArrayBuffer is not available.");this.geometry=e,this._roots=null,this._indirectBuffer=null,t[Sc]||(YS(this,t),!e.boundingBox&&t.setBoundingBox&&(e.boundingBox=this.getBoundingBox(new Ut)));const{_indirectBuffer:n}=this;this.resolveTriangleIndex=t.indirect?s=>n[s]:s=>s}refit(e=null){return(this.indirect?bw:lw)(this,e)}traverse(e,t=0){const n=this._roots[t],s=new Uint32Array(n),r=new Uint16Array(n);o(0);function o(a,l=0){const c=a*2,u=r[c+15]===Ll;if(u){const h=s[a+6],d=r[c+14];e(l,u,new Float32Array(n,a*4,6),h,d)}else{const h=a+is/4,d=s[a+6],f=s[a+7];e(l,u,new Float32Array(n,a*4,6),f)||(o(h,l+1),o(d,l+1))}}}raycast(e,t=ni){const n=this._roots,s=this.geometry,r=[],o=t.isMaterial,a=Array.isArray(t),l=s.groups,c=o?t.side:t,u=this.indirect?Mw:dw;for(let h=0,d=n.length;h<d;h++){const f=a?t[l[h].materialIndex].side:c,g=r.length;if(u(this,h,f,e,r),a){const x=l[h].materialIndex;for(let m=g,p=r.length;m<p;m++)r[m].face.materialIndex=x}}return r}raycastFirst(e,t=ni){const n=this._roots,s=this.geometry,r=t.isMaterial,o=Array.isArray(t);let a=null;const l=s.groups,c=r?t.side:t,u=this.indirect?ww:pw;for(let h=0,d=n.length;h<d;h++){const f=o?t[l[h].materialIndex].side:c,g=u(this,h,f,e);g!=null&&(a==null||g.distance<a.distance)&&(a=g,o&&(g.face.materialIndex=l[h].materialIndex))}return a}intersectsGeometry(e,t){let n=!1;const s=this._roots,r=this.indirect?Ew:mw;for(let o=0,a=s.length;o<a&&(n=r(this,o,e,t),!n);o++);return n}shapecast(e){const t=Wn.getPrimitive(),n=this.indirect?hw:aw;let{boundsTraverseOrder:s,intersectsBounds:r,intersectsRange:o,intersectsTriangle:a}=e;if(o&&a){const h=o;o=(d,f,g,x,m)=>h(d,f,g,x,m)?!0:n(d,f,this,a,g,x,t)}else o||(a?o=(h,d,f,g)=>n(h,d,this,a,f,g,t):o=(h,d,f)=>f);let l=!1,c=0;const u=this._roots;for(let h=0,d=u.length;h<d;h++){const f=u[h];if(l=tw(this,h,r,o,s,c),l)break;c+=f.byteLength}return Wn.releasePrimitive(t),l}bvhcast(e,t,n){let{intersectsRanges:s,intersectsTriangles:r}=n;const o=Wn.getPrimitive(),a=this.geometry.index,l=this.geometry.attributes.position,c=this.indirect?g=>{const x=this.resolveTriangleIndex(g);zt(o,x*3,a,l)}:g=>{zt(o,g*3,a,l)},u=Wn.getPrimitive(),h=e.geometry.index,d=e.geometry.attributes.position,f=e.indirect?g=>{const x=e.resolveTriangleIndex(g);zt(u,x*3,h,d)}:g=>{zt(u,g*3,h,d)};if(r){const g=(x,m,p,v,_,b,S,w)=>{for(let M=p,A=p+v;M<A;M++){f(M),u.a.applyMatrix4(t),u.b.applyMatrix4(t),u.c.applyMatrix4(t),u.needsUpdate=!0;for(let U=x,y=x+m;U<y;U++)if(c(U),o.needsUpdate=!0,r(o,u,U,M,_,b,S,w))return!0}return!1};if(s){const x=s;s=function(m,p,v,_,b,S,w,M){return x(m,p,v,_,b,S,w,M)?!0:g(m,p,v,_,b,S,w,M)}}else s=g}return Iw(this,e,t,s)}intersectsBox(e,t){return Oa.set(e.min,e.max,t),Oa.needsUpdate=!0,this.shapecast({intersectsBounds:n=>Oa.intersectsBox(n),intersectsTriangle:n=>Oa.intersectsTriangle(n)})}intersectsSphere(e){return this.shapecast({intersectsBounds:t=>e.intersectsBox(t),intersectsTriangle:t=>t.intersectsSphere(e)})}closestPointToGeometry(e,t,n={},s={},r=0,o=1/0){return(this.indirect?Pw:yw)(this,e,t,n,s,r,o)}closestPointToPoint(e,t={},n=0,s=1/0){return nw(this,e,t,n,s)}getBoundingBox(e){return e.makeEmpty(),this._roots.forEach(n=>{wt(0,new Float32Array(n),qf),e.union(qf)}),e}}function Uw(i){switch(i){case 1:return"R";case 2:return"RG";case 3:return"RGBA";case 4:return"RGBA"}throw new Error}function Nw(i){switch(i){case 1:return om;case 2:return am;case 3:return kt;case 4:return kt}}function jf(i){switch(i){case 1:return Ou;case 2:return wl;case 3:return Io;case 4:return Io}}class lg extends ws{constructor(){super(),this.minFilter=st,this.magFilter=st,this.generateMipmaps=!1,this.overrideItemSize=null,this._forcedType=null}updateFrom(e){const t=this.overrideItemSize,n=e.itemSize,s=e.count;if(t!==null){if(n*s%t!==0)throw new Error("VertexAttributeTexture: overrideItemSize must divide evenly into buffer length.");e.itemSize=t,e.count=s*n/t}const r=e.itemSize,o=e.count,a=e.normalized,l=e.array.constructor,c=l.BYTES_PER_ELEMENT;let u=this._forcedType,h=r;if(u===null)switch(l){case Float32Array:u=ht;break;case Uint8Array:case Uint16Array:case Uint32Array:u=In;break;case Int8Array:case Int16Array:case Int32Array:u=So;break}let d,f,g,x,m=Uw(r);switch(u){case ht:g=1,f=Nw(r),a&&c===1?(x=l,m+="8",l===Uint8Array?d=gi:(d=Qc,m+="_SNORM")):(x=Float32Array,m+="32F",d=ht);break;case So:m+=c*8+"I",g=a?Math.pow(2,l.BYTES_PER_ELEMENT*8-1):1,f=jf(r),c===1?(x=Int8Array,d=Qc):c===2?(x=Int16Array,d=im):(x=Int32Array,d=So);break;case In:m+=c*8+"UI",g=a?Math.pow(2,l.BYTES_PER_ELEMENT*8-1):1,f=jf(r),c===1?(x=Uint8Array,d=gi):c===2?(x=Uint16Array,d=Sl):(x=Uint32Array,d=In);break}h===3&&(f===kt||f===Io)&&(h=4);const p=Math.ceil(Math.sqrt(o))||1,v=h*p*p,_=new x(v),b=e.normalized;e.normalized=!1;for(let S=0;S<o;S++){const w=h*S;_[w]=e.getX(S)/g,r>=2&&(_[w+1]=e.getY(S)/g),r>=3&&(_[w+2]=e.getZ(S)/g,h===4&&(_[w+3]=1)),r>=4&&(_[w+3]=e.getW(S)/g)}e.normalized=b,this.internalFormat=m,this.format=f,this.type=d,this.image.width=p,this.image.height=p,this.image.data=_,this.needsUpdate=!0,this.dispose(),e.itemSize=n,e.count=s}}class Fw extends lg{constructor(){super(),this._forcedType=In}}class Ow extends lg{constructor(){super(),this._forcedType=ht}}class cg{constructor(){this.index=new Fw,this.position=new Ow,this.bvhBounds=new ws,this.bvhContents=new ws,this._cachedIndexAttr=null,this.index.overrideItemSize=3}updateFrom(e){const{geometry:t}=e;if(kw(e,this.bvhBounds,this.bvhContents),this.position.updateFrom(t.attributes.position),e.indirect){const n=e._indirectBuffer;if(this._cachedIndexAttr===null||this._cachedIndexAttr.count!==n.length)if(t.index)this._cachedIndexAttr=t.index.clone();else{const s=ig(ng(t));this._cachedIndexAttr=new yt(s,1,!1)}Bw(t,n,this._cachedIndexAttr),this.index.updateFrom(this._cachedIndexAttr)}else this.index.updateFrom(t.index)}dispose(){const{index:e,position:t,bvhBounds:n,bvhContents:s}=this;e&&e.dispose(),t&&t.dispose(),n&&n.dispose(),s&&s.dispose()}}function Bw(i,e,t){const n=t.array,s=i.index?i.index.array:null;for(let r=0,o=e.length;r<o;r++){const a=3*r,l=3*e[r];for(let c=0;c<3;c++)n[a+c]=s?s[l+c]:l+c}}function kw(i,e,t){const n=i._roots;if(n.length!==1)throw new Error("MeshBVHUniformStruct: Multi-root BVHs not supported.");const s=n[0],r=new Uint16Array(s),o=new Uint32Array(s),a=new Float32Array(s),l=s.byteLength/is,c=2*Math.ceil(Math.sqrt(l/2)),u=new Float32Array(4*c*c),h=Math.ceil(Math.sqrt(l)),d=new Uint32Array(2*h*h);for(let f=0;f<l;f++){const g=f*is/4,x=g*2,m=g;for(let p=0;p<3;p++)u[8*f+0+p]=a[m+0+p],u[8*f+4+p]=a[m+3+p];if(pn(x,r)){const p=Dn(x,r),v=bn(g,o),_=4294901760|p;d[f*2+0]=_,d[f*2+1]=v}else{const p=4*Un(g,o)/is,v=sh(g,o);d[f*2+0]=v,d[f*2+1]=p}}e.image.data=u,e.image.width=c,e.image.height=c,e.format=kt,e.type=ht,e.internalFormat="RGBA32F",e.minFilter=st,e.magFilter=st,e.generateMipmaps=!1,e.needsUpdate=!0,e.dispose(),t.image.data=d,t.image.width=h,t.image.height=h,t.format=wl,t.type=In,t.internalFormat="RG32UI",t.minFilter=st,t.magFilter=st,t.generateMipmaps=!1,t.needsUpdate=!0,t.dispose()}const zw=`

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
`,Hw=`

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
`,Gw=`
struct BVH {

	usampler2D index;
	sampler2D position;

	sampler2D bvhBounds;
	usampler2D bvhContents;

};
`,ug=Gw,hg=`
	${zw}
	${Hw}
`;class Vw extends Zt{customProgramCacheKey(){return"LightmapperMaterial|glsl3|mrt2"}constructor(e){const t=new cg;t.updateFrom(e.bvh),super({transparent:!0,glslVersion:ii,depthTest:!1,depthWrite:!1,uniforms:{bvh:{value:t},positions:{value:e.positions},normals:{value:e.normals},albedoTex:{value:e.albedoTex},emissiveTex:{value:e.emissiveTex},materialTextureSize:{value:e.materialTextureSize},invModelMatrix:{value:e.invModelMatrix},casts:{value:e.casts},bounces:{value:e.bounces},lightsTex:{value:e.lightsTex},lightCount:{value:e.lightCount},skyColor:{value:e.skyColor},skyIntensity:{value:e.skyIntensity},opacity:{value:1},sampleIndex:{value:0},directLightEnabled:{value:e.directLightEnabled},indirectLightEnabled:{value:e.indirectLightEnabled}},vertexShader:`
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
                ${ug}
                ${hg}

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
            `})}}const Ww={point:0,directional:1,spot:2,area:3},Dc=4;function Xw(i){const e=[];return i.traverse(t=>{var n;if(!!t.visible&&!((n=t.userData)!=null&&n.lightmapIgnore)){if(t instanceof Hr)e.push({type:"point",position:t.getWorldPosition(new R),direction:new R(0,-1,0),color:t.color.clone().multiplyScalar(t.intensity),params:[0,0,0,0]});else if(t instanceof Cl){const s=new R(0,0,-1).transformDirection(t.matrixWorld).normalize();e.push({type:"directional",position:t.getWorldPosition(new R),direction:s,color:t.color.clone().multiplyScalar(t.intensity),params:[0,0,0,0]})}else if(t instanceof Om){const s=new R(0,0,-1).transformDirection(t.matrixWorld).normalize();e.push({type:"spot",position:t.getWorldPosition(new R),direction:s,color:t.color.clone().multiplyScalar(t.intensity),params:[Math.cos(t.angle*(1-t.penumbra)),Math.cos(t.angle),0,0]})}else if(t instanceof XM){const s=new R(0,0,-1).transformDirection(t.matrixWorld).normalize();e.push({type:"area",position:t.getWorldPosition(new R),direction:s,color:t.color.clone().multiplyScalar(t.intensity),params:[t.width,t.height,0,0]})}}}),e}function qw(i){const e=Math.max(1,i.length),t=new Float32Array(Dc*e*4);for(let s=0;s<i.length;s++){const r=i[s],o=s*Dc*4;t[o+0]=r.position.x,t[o+1]=r.position.y,t[o+2]=r.position.z,t[o+3]=Ww[r.type],t[o+4]=r.direction.x,t[o+5]=r.direction.y,t[o+6]=r.direction.z,t[o+7]=r.params[0],t[o+8]=r.color.r,t[o+9]=r.color.g,t[o+10]=r.color.b,t[o+11]=r.params[1],t[o+12]=r.params[2],t[o+13]=r.params[3],t[o+14]=0,t[o+15]=0}const n=new ws(t,Dc,e,kt,ht);return n.minFilter=st,n.magFilter=st,n.generateMipmaps=!1,n.wrapS=an,n.wrapT=an,n.needsUpdate=!0,{texture:n,count:i.length,capacity:e}}function jw(i){i.dispose()}const $w=(i,e,t,n,s)=>{var V,q;const r=qw(s.lights),o=r.texture,a=new Vw({bvh:n,invModelMatrix:new De().identity(),positions:e,normals:t,albedoTex:s.albedoTexture,emissiveTex:s.emissiveTexture,materialTextureSize:s.materialTextureSize,casts:s.casts,bounces:(V=s.bounces)!=null?V:1,lightsTex:o,lightCount:r.count,skyColor:s.skyColor,skyIntensity:s.skyIntensity,opacity:1,sampleIndex:0,directLightEnabled:s.directLightEnabled,indirectLightEnabled:s.indirectLightEnabled}),l=new u_(s.resolution,s.resolution,2,{type:ht,minFilter:ut,magFilter:ut,generateMipmaps:!1}),c=i.getRenderTarget(),u=new Te;i.getClearColor(u);const h=i.getClearAlpha();i.setRenderTarget(l),i.setClearColor(0,0),i.clear(),i.setRenderTarget(c),i.setClearColor(u,h);const d=new j(new Fn(2,2),a),f=new yi;let g=0;const x=s.targetSamples|0,m=s.resolution;let p=Math.max(1,Math.min(m,(q=s.tileSize)!=null?q:m)),v=null,_=0;const b=H=>{const Z=Math.ceil(m/H);return{tilesX:Z,tilesY:Z,count:Z*Z}};let S=b(p);const w=a.uniforms.sampleIndex,M=a.uniforms.opacity;if(!w||!M)throw new Error("[baker] LightmapperMaterial missing required uniforms");const A=()=>{const H=performance.now(),Z=i.autoClear,Q=i.getRenderTarget(),ae=i.getScissorTest();try{if(i.autoClear=!1,i.setRenderTarget(l),w.value=g,M.value=1/(g+1),p>=m)i.setScissorTest(!1),i.render(d,f);else{const W=_%S.tilesX,J=_/S.tilesX|0,ce=W*p,me=J*p,ve=Math.min(p,m-ce),fe=Math.min(p,m-me);i.setScissor(ce,me,ve,fe),i.setScissorTest(!0),i.render(d,f)}}finally{i.setScissorTest(ae),i.setRenderTarget(Q),i.autoClear=Z}_++;let pe=!1;return _>=S.count&&(_=0,g++,pe=!0,v!==null&&(p=v,S=b(p),v=null)),{ms:performance.now()-H,sampleCompleted:pe}},U=()=>{if(x>0&&g>=x)return{samples:g,done:!0,sampleComplete:!0,lastDrawMs:0};let H=0;for(;;){const Z=A();if(H=Z.ms,Z.sampleCompleted)break}return{samples:g,done:x>0&&g>=x,sampleComplete:!0,lastDrawMs:H}},y=H=>{if(x>0&&g>=x)return{samples:g,done:!0,sampleComplete:!0,lastDrawMs:0};const Z=performance.now()+Math.max(0,H);let Q=0,ae=!1;do{const pe=A();if(Q=pe.ms,pe.sampleCompleted&&(ae=!0,x>0&&g>=x))break}while(performance.now()<Z);return{samples:g,done:x>0&&g>=x,sampleComplete:ae,lastDrawMs:Q}},E=H=>{const Z=Math.max(1,Math.min(m,H|0));Z===p&&v===null||(_===0?(p=Z,S=b(p),v=null):v=Z)},N=()=>{g=0,_=0},B=()=>{jw(o),l.dispose(),a.dispose(),d.geometry.dispose()},[P,O]=l.texture;if(!P||!O)throw new Error("[baker] WebGLMultipleRenderTargets did not allocate 2 textures");return{renderTarget:l,textures:{direct:P,indirect:O},render:U,renderTiled:y,setTileSize:E,reset:N,dispose:B}};class Yw extends Zt{customProgramCacheKey(){return"AOMaterial|glsl3|single-out"}constructor(e){const t=new cg;t.updateFrom(e.bvh),super({transparent:!0,glslVersion:ii,depthTest:!1,depthWrite:!1,uniforms:{bvh:{value:t},positions:{value:e.positions},normals:{value:e.normals},invModelMatrix:{value:e.invModelMatrix},aoSamples:{value:e.aoSamples},ambientDistance:{value:e.ambientDistance},opacity:{value:e.opacity},sampleIndex:{value:e.sampleIndex}},vertexShader:`
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
                ${ug}
                ${hg}

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
            `})}}const dg=(i,e,t,n,s)=>{var N;const r=new Yw({bvh:n,invModelMatrix:new De().identity(),positions:e,normals:t,aoSamples:s.aoSamples,ambientDistance:s.ambientDistance,opacity:1,sampleIndex:0}),o=new Mn(s.resolution,s.resolution,{type:ht,minFilter:ut,magFilter:ut,generateMipmaps:!1}),a=i.getRenderTarget(),l=new Te;i.getClearColor(l);const c=i.getClearAlpha();i.setRenderTarget(o),i.setClearColor(0,0),i.clear(),i.setRenderTarget(a),i.setClearColor(l,c);const u=new j(new Fn(2,2),r),h=new yi;let d=0;const f=s.targetSamples|0,g=s.resolution;let x=Math.max(1,Math.min(g,(N=s.tileSize)!=null?N:g)),m=null,p=0;const v=B=>{const P=Math.ceil(g/B);return{tilesX:P,tilesY:P,count:P*P}};let _=v(x);const b=r.uniforms.sampleIndex,S=r.uniforms.opacity;if(!b||!S)throw new Error("[baker] AOMaterial missing required uniforms");const w=()=>{const B=performance.now(),P=i.autoClear,O=i.getRenderTarget(),k=i.getScissorTest();try{if(i.autoClear=!1,i.setRenderTarget(o),b.value=d,S.value=1/(d+1),x>=g)i.setScissorTest(!1),i.render(u,h);else{const q=p%_.tilesX,H=p/_.tilesX|0,Z=q*x,Q=H*x,ae=Math.min(x,g-Z),pe=Math.min(x,g-Q);i.setScissor(Z,Q,ae,pe),i.setScissorTest(!0),i.render(u,h)}}finally{i.setScissorTest(k),i.setRenderTarget(O),i.autoClear=P}p++;let V=!1;return p>=_.count&&(p=0,d++,V=!0,m!==null&&(x=m,_=v(x),m=null)),{ms:performance.now()-B,sampleCompleted:V}},M=()=>{if(f>0&&d>=f)return{samples:d,done:!0,sampleComplete:!0,lastDrawMs:0};let B=0;for(;;){const P=w();if(B=P.ms,P.sampleCompleted)break}return{samples:d,done:f>0&&d>=f,sampleComplete:!0,lastDrawMs:B}},A=B=>{if(f>0&&d>=f)return{samples:d,done:!0,sampleComplete:!0,lastDrawMs:0};const P=performance.now()+Math.max(0,B);let O=0,k=!1;do{const V=w();if(O=V.ms,V.sampleCompleted&&(k=!0,f>0&&d>=f))break}while(performance.now()<P);return{samples:d,done:f>0&&d>=f,sampleComplete:k,lastDrawMs:O}},U=B=>{const P=Math.max(1,Math.min(g,B|0));P===x&&m===null||(p===0?(x=P,_=v(x),m=null):m=P)},y=()=>{d=0,p=0},E=()=>{o.dispose(),r.dispose(),u.geometry.dispose()};return{texture:o.texture,render:M,renderTiled:A,setTileSize:U,reset:y,dispose:E}};class Kw extends Zt{customProgramCacheKey(){return"CompositeMaterial|glsl3|single-out"}constructor(e){super({glslVersion:ii,transparent:!1,depthWrite:!1,depthTest:!1,uniforms:{directTex:{value:e.directTex},indirectTex:{value:e.indirectTex},aoTex:{value:e.aoTex},directIntensity:{value:e.directIntensity},giIntensity:{value:e.giIntensity},aoEnabled:{value:e.aoEnabled},aoIntensity:{value:e.aoIntensity},aoExponent:{value:e.aoExponent}},vertexShader:`
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
            `})}}const fg=(i,e,t,n)=>{const s=new Mn(t,t,{type:Xn,minFilter:ut,magFilter:ut,generateMipmaps:!1}),r=new Kw({directTex:e.direct,indirectTex:e.indirect,aoTex:e.ao,directIntensity:n.directIntensity,giIntensity:n.giIntensity,aoEnabled:n.aoEnabled,aoIntensity:n.aoIntensity,aoExponent:n.aoExponent}),o=new j(new Fn(2,2),r),a=new yi,l=r.uniforms,c=u=>{(u==null?void 0:u.directIntensity)!==void 0&&l.directIntensity&&(l.directIntensity.value=u.directIntensity),(u==null?void 0:u.giIntensity)!==void 0&&l.giIntensity&&(l.giIntensity.value=u.giIntensity),(u==null?void 0:u.aoEnabled)!==void 0&&l.aoEnabled&&(l.aoEnabled.value=u.aoEnabled),(u==null?void 0:u.aoIntensity)!==void 0&&l.aoIntensity&&(l.aoIntensity.value=u.aoIntensity),(u==null?void 0:u.aoExponent)!==void 0&&l.aoExponent&&(l.aoExponent.value=u.aoExponent),(u==null?void 0:u.aoTex)!==void 0&&l.aoTex&&(l.aoTex.value=u.aoTex);const h=i.getRenderTarget(),d=i.autoClear;try{i.autoClear=!0,i.setRenderTarget(s),i.render(o,a)}finally{i.setRenderTarget(h),i.autoClear=d}};return c(),{texture:s.texture,refresh:c,dispose:()=>{s.dispose(),r.dispose(),o.geometry.dispose()}}};class Zw extends Zt{customProgramCacheKey(){return"DilationMaterial|glsl3|single-out"}constructor(e={}){var t,n,s;super({glslVersion:ii,blending:ei,transparent:!1,depthWrite:!1,depthTest:!1,uniforms:{map:{value:(t=e.map)!=null?t:null},positions:{value:(n=e.positions)!=null?n:null},resolution:{value:(s=e.resolution)!=null?s:1024}},vertexShader:`
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
            `})}}class Qw extends Zt{customProgramCacheKey(){return"DenoiseMaterial|glsl1|single-out"}constructor(e){var t,n,s;super({blending:ei,transparent:!1,depthWrite:!1,depthTest:!1,defines:{USE_SLIDER:0},uniforms:{sigma:{value:(t=e.sigma)!=null?t:5},threshold:{value:(n=e.threshold)!=null?n:.03},kSigma:{value:(s=e.kSigma)!=null?s:1},map:{value:e.map}},vertexShader:`
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
			`})}}const $f=new j(new Fn(2,2)),Jw=new yi,lh=async(i,e,t,n,s,r)=>{var _,b,S;const o=()=>new Mn(n,n,{type:ht,minFilter:ut,magFilter:ut,generateMipmaps:!1}),a=o(),l=o(),c=(w,M)=>{const A=i.getRenderTarget();try{$f.material=w,i.setRenderTarget(M),i.render($f,Jw)}finally{i.setRenderTarget(A)}},u=new Zw({positions:t,resolution:n});let h=a,d=l,f=e;const g=Math.max(0,s.dilationIterations)+(s.denoiseEnabled?1:0);let x=0;const m=u.uniforms.map;if(!m)throw new Error("[baker] DilationMaterial missing `map` uniform");for(let w=0;w<Math.max(0,s.dilationIterations);w++){m.value=f,c(u,d),f=d.texture;const M=h;h=d,d=M,x++,r==null||r(x/g),await new Promise(A=>requestAnimationFrame(A))}if(s.denoiseEnabled){const w=new Qw({map:f,sigma:s.denoiseSigma,threshold:s.denoiseThreshold,kSigma:s.denoiseKSigma});c(w,d),f=d.texture,w.dispose();const M=h;h=d,d=M,x++,r==null||r(x/g),await new Promise(A=>requestAnimationFrame(A))}u.dispose();const p=s.dilationIterations>0||s.denoiseEnabled,v=p?h.texture:e;if(p){const w=Math.max(0,Math.floor(n/2)-2),M=new Float32Array(4*4*4);i.readRenderTargetPixels(h,w,w,4,4,M);let A=0,U=0,y=0;for(let E=0;E<16;E++)A+=(_=M[E*4])!=null?_:0,U+=(b=M[E*4+1])!=null?b:0,y+=(S=M[E*4+2])!=null?S:0}return{texture:v,dispose:()=>{a.dispose(),l.dispose()}}};function eE(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new Kt;let c=0;for(let u=0;u<i.length;++u){const h=i[u];let d=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in h.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(h.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in h.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(h.morphAttributes[f])}if(e){let f;if(t)f=h.index.count;else if(h.attributes.position!==void 0)f=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,u),c+=f}}if(t){let u=0;const h=[];for(let d=0;d<i.length;++d){const f=i[d].index;for(let g=0;g<f.count;++g)h.push(f.getX(g)+u);u+=i[d].attributes.position.count}l.setIndex(h)}for(const u in r){const h=Yf(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(const u in o){const h=o[u][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let d=0;d<h;++d){const f=[];for(let x=0;x<o[u].length;++x)f.push(o[u][x][d]);const g=Yf(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(g)}}return l}function Yf(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){const u=i[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}const o=new e(r),a=new yt(o,t,n);let l=0;for(let c=0;c<i.length;++c){const u=i[c];if(u.isInterleavedBufferAttribute){const h=l/t;for(let d=0,f=u.count;d<f;d++)for(let g=0;g<t;g++){const x=u.getComponent(d,g);a.setComponent(d+h,g,x)}}else o.set(u.array,l);l+=u.count*t}return s!==void 0&&(a.gpuType=s),a}function pg(i,e=1e-4){e=Math.max(e,Number.EPSILON);const t={},n=i.getIndex(),s=i.getAttribute("position"),r=n?n.count:s.count;let o=0;const a=Object.keys(i.attributes),l={},c={},u=[],h=["getX","getY","getZ","getW"],d=["setX","setY","setZ","setW"];for(let v=0,_=a.length;v<_;v++){const b=a[v],S=i.attributes[b];l[b]=new yt(new S.array.constructor(S.count*S.itemSize),S.itemSize,S.normalized);const w=i.morphAttributes[b];w&&(c[b]=new yt(new w.array.constructor(w.count*w.itemSize),w.itemSize,w.normalized))}const f=e*.5,g=Math.log10(1/e),x=Math.pow(10,g),m=f*x;for(let v=0;v<r;v++){const _=n?n.getX(v):v;let b="";for(let S=0,w=a.length;S<w;S++){const M=a[S],A=i.getAttribute(M),U=A.itemSize;for(let y=0;y<U;y++)b+=`${~~(A[h[y]](_)*x+m)},`}if(b in t)u.push(t[b]);else{for(let S=0,w=a.length;S<w;S++){const M=a[S],A=i.getAttribute(M),U=i.morphAttributes[M],y=A.itemSize,E=l[M],N=c[M];for(let B=0;B<y;B++){const P=h[B],O=d[B];if(E[O](o,A[P](_)),U)for(let k=0,V=U.length;k<V;k++)N[k][O](o,U[k][P](_))}}t[b]=o,u.push(o),o++}}const p=i.clone();for(const v in i.attributes){const _=l[v];if(p.setAttribute(v,new yt(_.array.slice(0,o*_.itemSize),_.itemSize,_.normalized)),v in c)for(let b=0;b<c[v].length;b++){const S=c[v][b];p.morphAttributes[v][b]=new yt(S.array.slice(0,o*S.itemSize),S.itemSize,S.normalized)}}return p.setIndex(u),p}function Kf(i,e){if(e===D0)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Jc||e===cm){let t=i.getIndex();if(t===null){const o=[],a=i.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,s=[];if(e===Jc)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}class tt extends Error{constructor(e,t,n){super(`[baker:${t}] ${e}${n?` (mesh: ${n})`:""}`),this.name="BakeError",this.phase=t,this.meshName=n}}const tE=new Set(["position","normal","uv","uv2","meshIndex"]),nE=i=>{const e=i.map((n,s)=>{let r=n.geometry.clone();for(const c of Object.keys(r.attributes))tE.has(c)||r.deleteAttribute(c);r.applyMatrix4(n.matrixWorld),r.index||(r=pg(r));const o=r.attributes.position;if(!o)throw new tt("mesh geometry has no position attribute","geometry",n.name);const a=o.count,l=new Float32Array(a);return l.fill(s),r.setAttribute("meshIndex",new yt(l,1)),r}),t=eE(e);if(!t){const n=i.map((s,r)=>s.name||`<unnamed#${r}>`).join(", ");throw new tt(`mergeGeometries returned null \u2014 incompatible attribute sets across meshes [${n}]`,"geometry")}return t},iE=i=>{const e=i.geometry;if(e.index)return e.index.count/3;const t=e.attributes.position;if(!t)throw new tt("mesh geometry missing position attribute","geometry",i.name);return t.count/3},yu={aR:1,aG:1,aB:1,eR:0,eG:0,eB:0},mg=i=>{var t;if(Array.isArray(i)){console.warn("[baker] material array detected; using slot 0 only \u2014 per-face material groups not yet supported");const n=i[0];return n?mg(n):yu}const e=i;if("emissive"in e&&e.emissive){const n=(t=e.emissiveIntensity)!=null?t:1;return{aR:e.color.r,aG:e.color.g,aB:e.color.b,eR:e.emissive.r*n,eG:e.emissive.g*n,eB:e.emissive.b*n}}return"color"in e&&e.color?{aR:e.color.r,aG:e.color.g,aB:e.color.b,eR:0,eG:0,eB:0}:(console.warn("[baker] material has no .color (likely ShaderMaterial); defaulting to white albedo"),yu)},sE=(i,e)=>{var h,d,f;const t=i.index;if(!t)throw new tt("mergeGeometry must produce an indexed geometry; got non-indexed","geometry");const n=i.attributes.meshIndex;if(!n)throw new tt("merged geometry is missing 'meshIndex' attribute \u2014 did mergeGeometry skip the per-vertex tag?","geometry");const s=e.map(iE),r=t.count/3,o=new Float32Array(r*3),a=new Float32Array(r*3),l=e.map(g=>mg(g.material)),c=t.array,u=n.array;for(let g=0;g<r;g++){const x=(h=c[g*3])!=null?h:0,m=((d=u[x])!=null?d:0)|0,p=(f=l[m])!=null?f:yu,v=g*3;o[v]=p.aR,o[v+1]=p.aG,o[v+2]=p.aB,a[v]=p.eR,a[v+1]=p.eG,a[v+2]=p.eB}return{albedo:o,emissive:a,totalTriangles:r,perMeshTriangleCounts:s}},Zf=(i,e)=>{const t=new ws(i,e,e,kt,ht);return t.minFilter=st,t.magFilter=st,t.wrapS=an,t.wrapT=an,t.generateMipmaps=!1,t.needsUpdate=!0,t},rE=i=>{var o,a,l,c,u,h;const e=i.totalTriangles,t=Math.max(1,Math.ceil(Math.sqrt(e))),n=t*t,s=new Float32Array(n*4),r=new Float32Array(n*4);for(let d=0;d<e;d++){const f=d*3,g=d*4;s[g]=(o=i.albedo[f])!=null?o:0,s[g+1]=(a=i.albedo[f+1])!=null?a:0,s[g+2]=(l=i.albedo[f+2])!=null?l:0,s[g+3]=1,r[g]=(c=i.emissive[f])!=null?c:0,r[g+1]=(u=i.emissive[f+1])!=null?u:0,r[g+2]=(h=i.emissive[f+2])!=null?h:0,r[g+3]=1}return{albedoTexture:Zf(s,t),emissiveTexture:Zf(r,t),side:t}},Uc=new R,Qf=new R,Jf=new R,ep=new R,tp=new R,np=new R;function oE(i){const e=i.geometry,t=e.attributes.position;if(!t)return 0;const n=i.matrixWorld;let s=0;const r=(o,a,l)=>(Uc.fromBufferAttribute(t,o).applyMatrix4(n),Qf.fromBufferAttribute(t,a).applyMatrix4(n),Jf.fromBufferAttribute(t,l).applyMatrix4(n),ep.subVectors(Qf,Uc),tp.subVectors(Jf,Uc),np.crossVectors(ep,tp),np.length()*.5);if(e.index){const o=e.index.array;for(let a=0;a<o.length;a+=3)s+=r(o[a],o[a+1],o[a+2])}else for(let o=0;o<t.count;o+=3)s+=r(o,o+1,o+2);return s}function aE(i,e){var c;const t=(c=e.fillRatio)!=null?c:.95,n=e.atlasResolution*e.atlasResolution,s=e.texelsPerMeter*e.texelsPerMeter,o=[...i.map((u,h)=>{var m,p;const d=oE(u),f=(p=(m=e.perMeshScale)==null?void 0:m[u.uuid])!=null?p:1,g=d*s*f*f,x=n>0?g/n:0;return{mesh:u,inputIdx:h,surfaceArea:d,uvFraction:x}})].sort((u,h)=>h.uvFraction-u.uvFraction),a=[],l=new Array(i.length);for(const u of o){let h=u.uvFraction;if(h>t){const f=u.mesh.name||`Mesh ${u.inputIdx+1} (${u.mesh.geometry.type.replace("Geometry","")})`;console.warn(`[baker] mesh "${f}" wants ${(h*100).toFixed(0)}% of one ${e.atlasResolution}\xB2 atlas at ${e.texelsPerMeter} texels/m \u2014 clamping to ${(t*100).toFixed(0)}% (effective density reduced)`),h=t}let d=-1;for(let f=0;f<a.length;f++)if(a[f]+h<=t){a[f]=a[f]+h,d=f;break}d<0&&(d=a.length,a.push(h)),l[u.inputIdx]={atlasIdx:d,mesh:u.mesh,uvFraction:h,surfaceArea:u.surfaceArea}}return l}/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.6.9
*/var ip=function(i){return URL.createObjectURL(new Blob([i],{type:"text/javascript"}))};try{URL.revokeObjectURL(ip(""))}catch{ip=function(e){return"data:application/javascript;charset=UTF-8,"+encodeURI(e)}}var vi=Uint8Array,mn=Uint16Array,Oo=Uint32Array,ch=new vi([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),uh=new vi([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),sp=new vi([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),gg=function(i,e){for(var t=new mn(31),n=0;n<31;++n)t[n]=e+=1<<i[n-1];for(var s=new Oo(t[30]),n=1;n<30;++n)for(var r=t[n];r<t[n+1];++r)s[r]=r-t[n]<<5|n;return[t,s]},_g=gg(ch,2),lE=_g[0],bu=_g[1];lE[28]=258,bu[258]=28;var cE=gg(uh,0),rp=cE[1],Mu=new mn(32768);for(var vt=0;vt<32768;++vt){var ji=(vt&43690)>>>1|(vt&21845)<<1;ji=(ji&52428)>>>2|(ji&13107)<<2,ji=(ji&61680)>>>4|(ji&3855)<<4,Mu[vt]=((ji&65280)>>>8|(ji&255)<<8)>>>1}var Po=function(i,e,t){for(var n=i.length,s=0,r=new mn(e);s<n;++s)++r[i[s]-1];var o=new mn(e);for(s=0;s<e;++s)o[s]=o[s-1]+r[s-1]<<1;var a;if(t){a=new mn(1<<e);var l=15-e;for(s=0;s<n;++s)if(i[s])for(var c=s<<4|i[s],u=e-i[s],h=o[i[s]-1]++<<u,d=h|(1<<u)-1;h<=d;++h)a[Mu[h]>>>l]=c}else for(a=new mn(n),s=0;s<n;++s)i[s]&&(a[s]=Mu[o[i[s]-1]++]>>>15-i[s]);return a},Ts=new vi(288);for(var vt=0;vt<144;++vt)Ts[vt]=8;for(var vt=144;vt<256;++vt)Ts[vt]=9;for(var vt=256;vt<280;++vt)Ts[vt]=7;for(var vt=280;vt<288;++vt)Ts[vt]=8;var xl=new vi(32);for(var vt=0;vt<32;++vt)xl[vt]=5;var uE=Po(Ts,9,0),hE=Po(xl,5,0),xg=function(i){return(i/8|0)+(i&7&&1)},dE=function(i,e,t){(e==null||e<0)&&(e=0),(t==null||t>i.length)&&(t=i.length);var n=new(i instanceof mn?mn:i instanceof Oo?Oo:vi)(t-e);return n.set(i.subarray(e,t)),n},Li=function(i,e,t){t<<=e&7;var n=e/8|0;i[n]|=t,i[n+1]|=t>>>8},co=function(i,e,t){t<<=e&7;var n=e/8|0;i[n]|=t,i[n+1]|=t>>>8,i[n+2]|=t>>>16},Nc=function(i,e){for(var t=[],n=0;n<i.length;++n)i[n]&&t.push({s:n,f:i[n]});var s=t.length,r=t.slice();if(!s)return[hh,0];if(s==1){var o=new vi(t[0].s+1);return o[t[0].s]=1,[o,1]}t.sort(function(S,w){return S.f-w.f}),t.push({s:-1,f:25001});var a=t[0],l=t[1],c=0,u=1,h=2;for(t[0]={s:-1,f:a.f+l.f,l:a,r:l};u!=s-1;)a=t[t[c].f<t[h].f?c++:h++],l=t[c!=u&&t[c].f<t[h].f?c++:h++],t[u++]={s:-1,f:a.f+l.f,l:a,r:l};for(var d=r[0].s,n=1;n<s;++n)r[n].s>d&&(d=r[n].s);var f=new mn(d+1),g=Su(t[u-1],f,0);if(g>e){var n=0,x=0,m=g-e,p=1<<m;for(r.sort(function(w,M){return f[M.s]-f[w.s]||w.f-M.f});n<s;++n){var v=r[n].s;if(f[v]>e)x+=p-(1<<g-f[v]),f[v]=e;else break}for(x>>>=m;x>0;){var _=r[n].s;f[_]<e?x-=1<<e-f[_]++-1:++n}for(;n>=0&&x;--n){var b=r[n].s;f[b]==e&&(--f[b],++x)}g=e}return[new vi(f),g]},Su=function(i,e,t){return i.s==-1?Math.max(Su(i.l,e,t+1),Su(i.r,e,t+1)):e[i.s]=t},op=function(i){for(var e=i.length;e&&!i[--e];);for(var t=new mn(++e),n=0,s=i[0],r=1,o=function(l){t[n++]=l},a=1;a<=e;++a)if(i[a]==s&&a!=e)++r;else{if(!s&&r>2){for(;r>138;r-=138)o(32754);r>2&&(o(r>10?r-11<<5|28690:r-3<<5|12305),r=0)}else if(r>3){for(o(s),--r;r>6;r-=6)o(8304);r>2&&(o(r-3<<5|8208),r=0)}for(;r--;)o(s);r=1,s=i[a]}return[t.subarray(0,n),e]},uo=function(i,e){for(var t=0,n=0;n<e.length;++n)t+=i[n]*e[n];return t},Za=function(i,e,t){var n=t.length,s=xg(e+2);i[s]=n&255,i[s+1]=n>>>8,i[s+2]=i[s]^255,i[s+3]=i[s+1]^255;for(var r=0;r<n;++r)i[s+r+4]=t[r];return(s+4+n)*8},ap=function(i,e,t,n,s,r,o,a,l,c,u){Li(e,u++,t),++s[256];for(var h=Nc(s,15),d=h[0],f=h[1],g=Nc(r,15),x=g[0],m=g[1],p=op(d),v=p[0],_=p[1],b=op(x),S=b[0],w=b[1],M=new mn(19),A=0;A<v.length;++A)M[v[A]&31]++;for(var A=0;A<S.length;++A)M[S[A]&31]++;for(var U=Nc(M,7),y=U[0],E=U[1],N=19;N>4&&!y[sp[N-1]];--N);var B=c+5<<3,P=uo(s,Ts)+uo(r,xl)+o,O=uo(s,d)+uo(r,x)+o+14+3*N+uo(M,y)+(2*M[16]+3*M[17]+7*M[18]);if(B<=P&&B<=O)return Za(e,u,i.subarray(l,l+c));var k,V,q,H;if(Li(e,u,1+(O<P)),u+=2,O<P){k=Po(d,f,0),V=d,q=Po(x,m,0),H=x;var Z=Po(y,E,0);Li(e,u,_-257),Li(e,u+5,w-1),Li(e,u+10,N-4),u+=14;for(var A=0;A<N;++A)Li(e,u+3*A,y[sp[A]]);u+=3*N;for(var Q=[v,S],ae=0;ae<2;++ae)for(var pe=Q[ae],A=0;A<pe.length;++A){var W=pe[A]&31;Li(e,u,Z[W]),u+=y[W],W>15&&(Li(e,u,pe[A]>>>5&127),u+=pe[A]>>>12)}}else k=uE,V=Ts,q=hE,H=xl;for(var A=0;A<a;++A)if(n[A]>255){var W=n[A]>>>18&31;co(e,u,k[W+257]),u+=V[W+257],W>7&&(Li(e,u,n[A]>>>23&31),u+=ch[W]);var J=n[A]&31;co(e,u,q[J]),u+=H[J],J>3&&(co(e,u,n[A]>>>5&8191),u+=uh[J])}else co(e,u,k[n[A]]),u+=V[n[A]];return co(e,u,k[256]),u+V[256]},fE=new Oo([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),hh=new vi(0),pE=function(i,e,t,n,s,r){var o=i.length,a=new vi(n+o+5*(1+Math.ceil(o/7e3))+s),l=a.subarray(n,a.length-s),c=0;if(!e||o<8)for(var u=0;u<=o;u+=65535){var h=u+65535;h<o?c=Za(l,c,i.subarray(u,h)):(l[u]=r,c=Za(l,c,i.subarray(u,o)))}else{for(var d=fE[e-1],f=d>>>13,g=d&8191,x=(1<<t)-1,m=new mn(32768),p=new mn(x+1),v=Math.ceil(t/3),_=2*v,b=function(Me){return(i[Me]^i[Me+1]<<v^i[Me+2]<<_)&x},S=new Oo(25e3),w=new mn(288),M=new mn(32),A=0,U=0,u=0,y=0,E=0,N=0;u<o;++u){var B=b(u),P=u&32767,O=p[B];if(m[P]=O,p[B]=P,E<=u){var k=o-u;if((A>7e3||y>24576)&&k>423){c=ap(i,l,0,S,w,M,U,y,N,u-N,c),y=A=U=0,N=u;for(var V=0;V<286;++V)w[V]=0;for(var V=0;V<30;++V)M[V]=0}var q=2,H=0,Z=g,Q=P-O&32767;if(k>2&&B==b(u-Q))for(var ae=Math.min(f,k)-1,pe=Math.min(32767,u),W=Math.min(258,k);Q<=pe&&--Z&&P!=O;){if(i[u+q]==i[u+q-Q]){for(var J=0;J<W&&i[u+J]==i[u+J-Q];++J);if(J>q){if(q=J,H=Q,J>ae)break;for(var ce=Math.min(Q,J-2),me=0,V=0;V<ce;++V){var ve=u-Q+V+32768&32767,fe=m[ve],Be=ve-fe+32768&32767;Be>me&&(me=Be,O=ve)}}}P=O,O=m[P],Q+=P-O+32768&32767}if(H){S[y++]=268435456|bu[q]<<18|rp[H];var Pe=bu[q]&31,z=rp[H]&31;U+=ch[Pe]+uh[z],++w[257+Pe],++M[z],E=u+q,++A}else S[y++]=i[u],++w[i[u]]}}c=ap(i,l,r,S,w,M,U,y,N,u-N,c),!r&&c&7&&(c=Za(l,c+1,hh))}return dE(a,0,n+xg(c)+s)},mE=function(){var i=1,e=0;return{p:function(t){for(var n=i,s=e,r=t.length,o=0;o!=r;){for(var a=Math.min(o+2655,r);o<a;++o)s+=n+=t[o];n=(n&65535)+15*(n>>16),s=(s&65535)+15*(s>>16)}i=n,e=s},d:function(){return i%=65521,e%=65521,(i&255)<<24|i>>>8<<16|(e&255)<<8|e>>>8}}},gE=function(i,e,t,n,s){return pE(i,e.level==null?6:e.level,e.mem==null?Math.ceil(Math.max(8,Math.min(13,Math.log(i.length)))*1.5):12+e.mem,t,n,!s)},_E=function(i,e,t){for(;t;++e)i[e]=t,t>>>=8},xE=function(i,e){var t=e.level,n=t==0?0:t<6?1:t==9?3:2;i[0]=120,i[1]=n<<6|(n?32-2*n:1)};function vE(i,e){e||(e={});var t=mE();t.p(i);var n=gE(i,e,2,4);return xE(n,e),_E(n,n.length-4,t.d()),n}var yE=typeof TextDecoder!="undefined"&&new TextDecoder,bE=0;try{yE.decode(hh,{stream:!0}),bE=1}catch{}const ME=new TextEncoder,vg=3;class SE{parse(e,t,n){if(!e||!(e.isWebGLRenderer||e.isDataTexture))throw Error("EXRExporter.parse: Unsupported first parameter, expected instance of WebGLRenderer or DataTexture.");if(e.isWebGLRenderer){const s=e,r=t,o=n;wE(r);const a=TE(r,o),l=RE(s,r,a),c=lp(l,a),u=cp(c,a);return up(u,a)}else if(e.isDataTexture){const s=e,r=t;EE(s);const o=AE(s,r),a=s.image.data,l=lp(a,o),c=cp(l,o);return up(c,o)}}}function wE(i){if(!i||!i.isWebGLRenderTarget)throw Error("EXRExporter.parse: Unsupported second parameter, expected instance of WebGLRenderTarget.");if(i.isWebGLCubeRenderTarget||i.isWebGL3DRenderTarget||i.isWebGLArrayRenderTarget)throw Error("EXRExporter.parse: Unsupported render target type, expected instance of WebGLRenderTarget.");if(i.texture.type!==ht&&i.texture.type!==Xn)throw Error("EXRExporter.parse: Unsupported WebGLRenderTarget texture type.");if(i.texture.format!==kt)throw Error("EXRExporter.parse: Unsupported WebGLRenderTarget texture format, expected RGBAFormat.")}function EE(i){if(i.type!==ht&&i.type!==Xn)throw Error("EXRExporter.parse: Unsupported DataTexture texture type.");if(i.format!==kt)throw Error("EXRExporter.parse: Unsupported DataTexture texture format, expected RGBAFormat.");if(!i.image.data)throw Error("EXRExporter.parse: Invalid DataTexture image data.");if(i.type===ht&&i.image.data.constructor.name!=="Float32Array")throw Error("EXRExporter.parse: DataTexture image data doesn't match type, expected 'Float32Array'.");if(i.type===Xn&&i.image.data.constructor.name!=="Uint16Array")throw Error("EXRExporter.parse: DataTexture image data doesn't match type, expected 'Uint16Array'.")}function TE(i,e={}){const t={0:1,2:1,3:16},n=i.width,s=i.height,r=i.texture.type,o=i.texture.format,a=e.compression!==void 0?e.compression:vg,l=e.type!==void 0?e.type:Xn,c=l===ht?2:1,u=t[a],h=4;return{width:n,height:s,type:r,format:o,compression:a,blockLines:u,dataType:c,dataSize:2*c,numBlocks:Math.ceil(s/u),numInputChannels:4,numOutputChannels:h}}function AE(i,e={}){const t={0:1,2:1,3:16},n=i.image.width,s=i.image.height,r=i.type,o=i.format,a=e.compression!==void 0?e.compression:vg,l=e.type!==void 0?e.type:Xn,c=l===ht?2:1,u=t[a],h=4;return{width:n,height:s,type:r,format:o,compression:a,blockLines:u,dataType:c,dataSize:2*c,numBlocks:Math.ceil(s/u),numInputChannels:4,numOutputChannels:h}}function RE(i,e,t){let n;return t.type===ht?n=new Float32Array(t.width*t.height*t.numInputChannels):n=new Uint16Array(t.width*t.height*t.numInputChannels),i.readRenderTargetPixels(e,0,0,t.width,t.height,n),n}function lp(i,e){const t=e.width,n=e.height,s={r:0,g:0,b:0,a:0},r={value:0},o=e.numOutputChannels==4?1:0,a=e.type==ht?OE:FE,l=e.dataType==1?DE:wu,c=new Uint8Array(e.width*e.height*e.numOutputChannels*e.dataSize),u=new DataView(c.buffer);for(let h=0;h<n;++h)for(let d=0;d<t;++d){const f=h*t*4+d*4,g=a(i,f),x=a(i,f+1),m=a(i,f+2),p=a(i,f+3),v=(n-h-1)*t*(3+o)*e.dataSize;IE(s,g,x,m,p),r.value=v+d*e.dataSize,l(u,s.a,r),r.value=v+o*t*e.dataSize+d*e.dataSize,l(u,s.b,r),r.value=v+(1+o)*t*e.dataSize+d*e.dataSize,l(u,s.g,r),r.value=v+(2+o)*t*e.dataSize+d*e.dataSize,l(u,s.r,r)}return c}function cp(i,e){let t,n,s=0;const r={data:new Array,totalSize:0},o=e.width*e.numOutputChannels*e.blockLines*e.dataSize;switch(e.compression){case 0:t=CE;break;case 2:case 3:t=PE;break}e.compression!==0&&(n=new Uint8Array(o));for(let a=0;a<e.numBlocks;++a){const l=i.subarray(o*a,o*(a+1)),c=t(l,n);s+=c.length,r.data.push({dataChunk:c,size:c.length})}return r.totalSize=s,r}function CE(i){return i}function PE(i,e){let t=0,n=Math.floor((i.length+1)/2),s=0;const r=i.length-1;for(;!(s>r||(e[t++]=i[s++],s>r));)e[n++]=i[s++];let o=e[0];for(let l=1;l<e.length;l++){const c=e[l]-o+384;o=e[l],e[l]=c}return vE(e)}function LE(i,e,t){const n={value:0},s=new DataView(i.buffer);Qe(s,20000630,n),Qe(s,2,n),Ft(s,"compression",n),Ft(s,"compression",n),Qe(s,1,n),_o(s,t.compression,n),Ft(s,"screenWindowCenter",n),Ft(s,"v2f",n),Qe(s,8,n),Qe(s,0,n),Qe(s,0,n),Ft(s,"screenWindowWidth",n),Ft(s,"float",n),Qe(s,4,n),wu(s,1,n),Ft(s,"pixelAspectRatio",n),Ft(s,"float",n),Qe(s,4,n),wu(s,1,n),Ft(s,"lineOrder",n),Ft(s,"lineOrder",n),Qe(s,1,n),_o(s,0,n),Ft(s,"dataWindow",n),Ft(s,"box2i",n),Qe(s,16,n),Qe(s,0,n),Qe(s,0,n),Qe(s,t.width-1,n),Qe(s,t.height-1,n),Ft(s,"displayWindow",n),Ft(s,"box2i",n),Qe(s,16,n),Qe(s,0,n),Qe(s,0,n),Qe(s,t.width-1,n),Qe(s,t.height-1,n),Ft(s,"channels",n),Ft(s,"chlist",n),Qe(s,t.numOutputChannels*18+1,n),Ft(s,"A",n),Qe(s,t.dataType,n),n.value+=4,Qe(s,1,n),Qe(s,1,n),Ft(s,"B",n),Qe(s,t.dataType,n),n.value+=4,Qe(s,1,n),Qe(s,1,n),Ft(s,"G",n),Qe(s,t.dataType,n),n.value+=4,Qe(s,1,n),Qe(s,1,n),Ft(s,"R",n),Qe(s,t.dataType,n),n.value+=4,Qe(s,1,n),Qe(s,1,n),_o(s,0,n),_o(s,0,n);let r=n.value+t.numBlocks*8;for(let o=0;o<e.data.length;++o)UE(s,r,n),r+=e.data[o].size+8}function up(i,e){const t=e.numBlocks*8,n=259+18*e.numOutputChannels,s={value:n+t},r=new Uint8Array(n+t+i.totalSize+e.numBlocks*8),o=new DataView(r.buffer);LE(r,i,e);for(let a=0;a<i.data.length;++a){const l=i.data[a].dataChunk,c=i.data[a].size;Qe(o,a*e.blockLines,s),Qe(o,c,s),r.set(l,s.value),s.value+=c}return r}function IE(i,e,t,n,s){i.r=e,i.g=t,i.b=n,i.a=s}function _o(i,e,t){i.setUint8(t.value,e),t.value+=1}function Qe(i,e,t){i.setUint32(t.value,e,!0),t.value+=4}function DE(i,e,t){i.setUint16(t.value,S_.toHalfFloat(e),!0),t.value+=2}function wu(i,e,t){i.setFloat32(t.value,e,!0),t.value+=4}function UE(i,e,t){i.setBigUint64(t.value,BigInt(e),!0),t.value+=8}function Ft(i,e,t){const n=ME.encode(e+"\0");for(let s=0;s<n.length;++s)_o(i,n[s],t)}function NE(i){const e=(i&31744)>>10,t=i&1023;return(i>>15?-1:1)*(e?e===31?t?NaN:1/0:Math.pow(2,e-15)*(1+t/1024):6103515625e-14*(t/1024))}function FE(i,e){return NE(i[e])}function OE(i,e){return i[e]}const hp=new j(new Fn(2,2)),BE=new yi,dp=new Zt({glslVersion:ii,blending:ei,transparent:!1,depthWrite:!1,depthTest:!1,uniforms:{map:{value:null}},vertexShader:`
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
    `});function dh(i,e,t){const n=new Mn(t,t,{type:ht,minFilter:ut,magFilter:ut}),s=dp.uniforms.map;if(!s)throw new Error("[baker] export passthrough material missing `map` uniform");s.value=e,hp.material=dp;const r=i.getRenderTarget(),o=i.autoClear;try{i.autoClear=!0,i.setRenderTarget(n),i.render(hp,BE)}finally{i.setRenderTarget(r),i.autoClear=o}return n}function fh(i,e){const t=URL.createObjectURL(i),n=document.createElement("a");n.href=t,n.download=e,document.body.appendChild(n),n.click(),n.remove(),setTimeout(()=>URL.revokeObjectURL(t),0)}const ph=(i,e)=>i.toLowerCase().endsWith(`.${e}`)?i:`${i}.${e}`;async function kE(i,e,t,n){var c,u,h;const s=dh(i,e,t),r=new Float32Array(t*t*4);i.readRenderTargetPixels(s,0,0,t,t,r),s.dispose();const o=new Uint8ClampedArray(t*t*4);for(let d=0;d<t;d++){const f=(t-1-d)*t*4,g=d*t*4;for(let x=0;x<t;x++){const m=f+x*4,p=g+x*4,v=Math.max((c=r[m])!=null?c:0,0),_=Math.max((u=r[m+1])!=null?u:0,0),b=Math.max((h=r[m+2])!=null?h:0,0);o[p]=Math.pow(v/(1+v),1/2.2)*255,o[p+1]=Math.pow(_/(1+_),1/2.2)*255,o[p+2]=Math.pow(b/(1+b),1/2.2)*255,o[p+3]=255}}const a=document.createElement("canvas");a.width=t,a.height=t;const l=a.getContext("2d");if(!l)throw new Error("exportPNG: 2D context unavailable");l.putImageData(new ImageData(o,t,t),0,0),await new Promise((d,f)=>{a.toBlob(g=>{if(!g){f(new Error("exportPNG: toBlob returned null"));return}fh(g,ph(n,"png")),d()},"image/png")})}function zE(i,e,t,n){const s=dh(i,e,t),r=new SE().parse(i,s);s.dispose(),fh(new Blob([r],{type:"image/x-exr"}),ph(n,"exr"))}function HE(i,e,t,n){const s=dh(i,e,t),r=new Float32Array(t*t*4);i.readRenderTargetPixels(s,0,0,t,t,r),s.dispose(),fh(new Blob([r.buffer],{type:"application/octet-stream"}),ph(n,"bin"))}async function yg(i,e,t,n,s){switch(s){case"png":await kE(i,e,t,n);return;case"exr":zE(i,e,t,n);return;case"bin":HE(i,e,t,n);return}}class GE extends Zt{constructor(e){super({glslVersion:ii,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1,side:0,uniforms:{uTexelsPerMeter:{value:e.texelsPerMeter},uLightmapSize:{value:e.lightmapSize}},vertexShader:`
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
            `})}setTexelsPerMeter(e){const t=this.uniforms.uTexelsPerMeter;t&&(t.value=e)}setLightmapSize(e){const t=this.uniforms.uLightmapSize;t&&(t.value=e)}}class VE extends Zt{constructor(e){super({glslVersion:ii,uniforms:{tSource:{value:e}},vertexShader:`
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
      `})}customProgramCacheKey(){return"DownscaleMaterial|glsl3|single-out"}}const WE=new yi;function XE(i,e,t){const n=new Mn(t,t,{type:Xn,minFilter:ut,magFilter:ut,generateMipmaps:!1}),s=new VE(e),r=new j(new Fn(2,2),s),o=()=>{const l=i.getRenderTarget();try{i.setRenderTarget(n),i.render(r,WE)}finally{i.setRenderTarget(l)}},a=l=>{const c=s.uniforms.tSource;if(!c)throw new Error("[baker] DownscaleMaterial missing tSource uniform");c.value=l};return o(),{texture:n.texture,refresh:o,setSource:a,dispose:()=>{n.dispose(),s.dispose(),r.geometry.dispose()}}}function qE(i,e,t){var r,o;const n=[],s=new Map;for(const a of i){const l=(r=e[a.uuid])!=null?r:{};if(l.exclude===!0){n.push(a);continue}const c=(o=l.resolution)!=null?o:t;s.has(c)||s.set(c,[]),s.get(c).push(a)}return s.size===0&&n.length<i.length&&s.set(t,i.filter(a=>{var l;return!((l=e[a.uuid])!=null&&l.exclude)})),{excluded:n,groups:s,resolution:t}}function jE(i,e,t,n){var c,u;const s=[],r=[];for(const h of i)((c=e[h.uuid])==null?void 0:c.exclude)===!0?s.push(h):r.push(h);const o={};for(const h of r){const d=(u=e[h.uuid])==null?void 0:u.density;d!==void 0&&d!==1&&(o[h.uuid]=d)}const a=new Map;if(r.length===0)return{excluded:s,groups:a,resolution:t};const l=aE(r,{atlasResolution:t,texelsPerMeter:n,perMeshScale:o});for(let h=0;h<r.length;h++){const d=l[h];a.has(d.atlasIdx)||a.set(d.atlasIdx,[]),a.get(d.atlasIdx).push(d.mesh)}return{excluded:s,groups:a,resolution:t}}const $E={discrete:{initialTileSize:1024,maxBatchMs:500},integrated:{initialTileSize:256,maxBatchMs:250},unknown:{initialTileSize:256,maxBatchMs:250}};function YE(i){const e=i.toLowerCase();return["intel hd","intel uhd","iris","vega","mali","adreno","powervr"].some(s=>e.includes(s))?"integrated":["geforce","rtx","gtx","quadro","radeon rx","radeon pro","apple m"].some(s=>e.includes(s))?"discrete":"unknown"}function KE(i){var a,l;const e=i.getContext(),t=e.getExtension("WEBGL_debug_renderer_info"),n=t?String((a=e.getParameter(t.UNMASKED_VENDOR_WEBGL))!=null?a:""):"",s=t?String((l=e.getParameter(t.UNMASKED_RENDERER_WEBGL))!=null?l:""):"",r=YE(s),o=$E[r];return{tier:r,vendor:n,renderer:s,initialTileSize:o.initialTileSize,maxBatchMs:o.maxBatchMs,maxFrameMs:16}}const fp=(i,e)=>new Te(i!=null?i:e).convertSRGBToLinear(),pp=i=>i>0&&(i&i-1)===0;function ZE(i){var l,c,u,h,d,f,g,x,m,p,v,_;const e=(l=i.samples)!=null?l:96;if(!Number.isFinite(e)||e<1||e>4096)throw new tt(`samples must be 1-4096, got ${e}`,"validation");const t=(c=i.castsPerFrame)!=null?c:5;if(!Number.isFinite(t)||t<1||t>256)throw new tt(`castsPerFrame must be 1-256, got ${t}`,"validation");const n=(u=i.ao)==null?void 0:u.samples;if(n!==void 0&&(!Number.isFinite(n)||n<0||n>64))throw new tt(`ao.samples must be 0-64, got ${n}`,"validation");const s=(h=i.bounces)!=null?h:1;if(!Number.isInteger(s)||s<0||s>8)throw new tt(`bounces must be integer 0-8, got ${s}`,"validation");const r=(d=i.resolution)!=null?d:1024;if(!Number.isFinite(r)||r<16||r>4096)throw new tt(`resolution must be 16-4096, got ${r}`,"validation");if(!pp(r))throw new tt(`resolution must be a power of two, got ${r}`,"validation");const o=(f=i.superSample)!=null?f:1;if(!Number.isInteger(o)||o<1||o>4)throw new tt(`superSample must be integer 1-4, got ${o}`,"validation");if(r*o>4096)throw new tt(`resolution \xD7 superSample must be \u2264 4096, got ${r*o}`,"validation");if(((g=i.light)==null?void 0:g.intensity)!==void 0&&i.light.intensity<0)throw new tt(`light.intensity must be >= 0, got ${i.light.intensity}`,"validation");if(((x=i.light)==null?void 0:x.size)!==void 0&&i.light.size<0)throw new tt(`light.size must be >= 0, got ${i.light.size}`,"validation");if(((m=i.gi)==null?void 0:m.intensity)!==void 0&&i.gi.intensity<0)throw new tt(`gi.intensity must be >= 0, got ${i.gi.intensity}`,"validation");if(((p=i.gi)==null?void 0:p.skyIntensity)!==void 0&&i.gi.skyIntensity<0)throw new tt(`gi.skyIntensity must be >= 0, got ${i.gi.skyIntensity}`,"validation");if(((v=i.ao)==null?void 0:v.distance)!==void 0&&i.ao.distance<0)throw new tt(`ao.distance must be >= 0, got ${i.ao.distance}`,"validation");if(i.texelsPerMeter!==void 0){const S=i.texelsPerMeter;if(!Number.isFinite(S)||S<=0||S>1024)throw new tt(`texelsPerMeter must be in (0, 1024], got ${S}`,"validation")}for(const[S,w]of Object.entries((_=i.perMesh)!=null?_:{})){const M=w.resolution;if(M!==void 0){if(!Number.isFinite(M)||M<128||M>4096)throw new tt(`perMesh[${S}].resolution must be 128-4096, got ${M}`,"validation");if(!pp(M))throw new tt(`perMesh[${S}].resolution must be a power of two, got ${M}`,"validation")}const A=w.density;if(A!==void 0&&(!Number.isFinite(A)||A<.1||A>10))throw new tt(`perMesh[${S}].density must be in [0.1, 10], got ${A}`,"validation")}i.texelsPerMeter;const a=i.timeoutProtection;if((a==null?void 0:a.initialTileSize)!==void 0){const S=a.initialTileSize;if(!Number.isFinite(S)||S<16||S>4096)throw new tt(`timeoutProtection.initialTileSize must be 16-4096, got ${S}`,"validation")}if((a==null?void 0:a.maxBatchMs)!==void 0&&(!Number.isFinite(a.maxBatchMs)||a.maxBatchMs<=0))throw new tt(`timeoutProtection.maxBatchMs must be > 0, got ${a.maxBatchMs}`,"validation");if((a==null?void 0:a.maxFrameMs)!==void 0&&(!Number.isFinite(a.maxFrameMs)||a.maxFrameMs<=0))throw new tt(`timeoutProtection.maxFrameMs must be > 0, got ${a.maxFrameMs}`,"validation")}function QE(i,e){var n,s,r,o,a;const t=(n=i==null?void 0:i.safeMode)!=null?n:!1;return{safeMode:t,initialTileSize:(s=i==null?void 0:i.initialTileSize)!=null?s:t?64:e.initialTileSize,maxBatchMs:(r=i==null?void 0:i.maxBatchMs)!=null?r:t?100:e.maxBatchMs,maxFrameMs:(o=i==null?void 0:i.maxFrameMs)!=null?o:e.maxFrameMs,autoAdapt:(a=i==null?void 0:i.autoAdapt)!=null?a:!0}}const mp={dilationIterations:4,denoiseEnabled:!0,denoiseSigma:2.5,denoiseThreshold:.18,denoiseKSigma:1};class JE{constructor(e,t,n,s,r){this.renderer=e,this.meshLightmaps=t,this.meshResolutions=n,this.stats=s,this.internals=r}get lightmaps(){return new Map(this.meshLightmaps)}get bvh(){return this.internals.bvh}get groups(){return this.internals.groups.map(e=>{var t,n;return{meshes:e.meshes,resolution:e.resolution,internalResolution:e.internalResolution,lightmapper:e.lightmapper,aoMapper:e.aoMapper,textures:{direct:e.lightmapper.textures.direct,indirect:e.lightmapper.textures.indirect,ao:e.aoMapper.texture,composite:e.composite.texture,refinement:(n=(t=e.refinement)==null?void 0:t.texture)!=null?n:null,position:e.positionTex,normal:e.normalTex}}})}getGroupForMesh(e){var t,n;for(const s of this.internals.groups)if(s.meshes.includes(e))return{meshes:s.meshes,resolution:s.resolution,internalResolution:s.internalResolution,lightmapper:s.lightmapper,aoMapper:s.aoMapper,textures:{direct:s.lightmapper.textures.direct,indirect:s.lightmapper.textures.indirect,ao:s.aoMapper.texture,composite:s.composite.texture,refinement:(n=(t=s.refinement)==null?void 0:t.texture)!=null?n:null,position:s.positionTex,normal:s.normalTex}};return null}apply(){for(const[e,t]of this.meshLightmaps){const n=e.material;!n||(n.lightMap=t,t.channel=2,n.lightMapIntensity=1,n.needsUpdate=!0)}}async export(e="lightmap",t={}){var o,a,l,c,u;const n=(o=t.format)!=null?o:"png",s=e.replace(/[\/\\]+$/,"").split(/[\/\\]/).pop()||"lightmap",r=this.internals.groups;for(let h=0;h<r.length;h++){const d=r[h],f=(u=(c=(a=d.downscale)==null?void 0:a.texture)!=null?c:(l=d.refinement)==null?void 0:l.texture)!=null?u:d.composite.texture,g=r.length>1?`${s}_group${h}`:s;await yg(this.renderer,f,d.resolution,g,n)}}dispose(){var e,t;for(const n of this.internals.groups)(e=n.downscale)==null||e.dispose(),(t=n.refinement)==null||t.dispose(),n.composite.dispose(),n.aoMapper.dispose(),n.lightmapper.dispose(),n.atlasDispose();this.internals.matTexDispose()}refreshAO(e){for(const t of this.internals.groups)t.composite.refresh({aoIntensity:e.intensity,aoExponent:e.exponent,aoEnabled:e.enabled})}async rebakeAO(e,t={}){const n=this.internals.groups;for(let s=0;s<n.length;s++){const r=n[s],o={resolution:r.internalResolution,aoSamples:e.samples,ambientDistance:e.distance,targetSamples:e.targetSamples};if(await aT(this.renderer,this.internals.bvh,r,o,t,s,n.length,a=>{var l;return(l=t.onProgress)==null?void 0:l.call(t,"bake",(s+a)/n.length)}),r.refinement)if(r.refinement.dispose(),r.refinement=await lh(this.renderer,r.composite.texture,r.positionTex,r.internalResolution,this.internals.refinementOptions),r.downscale)r.downscale.setSource(r.refinement.texture),r.downscale.refresh();else{const a=r.refinement.texture;for(const[l,c]of this.meshResolutions)c===r.resolution&&this.meshLightmaps.set(l,a)}else r.downscale&&r.downscale.refresh()}}}class eT{constructor(e,t={}){var n,s,r,o,a,l,c,u,h,d,f,g,x,m,p,v,_,b,S,w,M,A,U,y,E,N,B,P,O,k,V,q,H,Z,Q,ae,pe,W,J,ce;this.renderer=e,ZE(t),this.opts={samples:(n=t.samples)!=null?n:96,castsPerFrame:(s=t.castsPerFrame)!=null?s:5,bounces:Math.min(4,Math.max(1,(r=t.bounces)!=null?r:1)),resolution:(o=t.resolution)!=null?o:1024,superSample:(a=t.superSample)!=null?a:1,denoise:(l=t.denoise)!=null?l:!0,filtering:(c=t.filtering)!=null?c:"linear",texelsPerMeter:(u=t.texelsPerMeter)!=null?u:0,perMesh:(h=t.perMesh)!=null?h:{},light:{position:(f=(d=t.light)==null?void 0:d.position)!=null?f:new R(0,10,0),color:(x=(g=t.light)==null?void 0:g.color)!=null?x:16777215,intensity:(p=(m=t.light)==null?void 0:m.intensity)!=null?p:2,size:(_=(v=t.light)==null?void 0:v.size)!=null?_:1,enabled:(S=(b=t.light)==null?void 0:b.enabled)!=null?S:!0},gi:{enabled:(M=(w=t.gi)==null?void 0:w.enabled)!=null?M:!0,intensity:(U=(A=t.gi)==null?void 0:A.intensity)!=null?U:1,skyColor:(E=(y=t.gi)==null?void 0:y.skyColor)!=null?E:16777215,skyIntensity:(B=(N=t.gi)==null?void 0:N.skyIntensity)!=null?B:0},ao:{enabled:(O=(P=t.ao)==null?void 0:P.enabled)!=null?O:!0,distance:(V=(k=t.ao)==null?void 0:k.distance)!=null?V:.5,intensity:(H=(q=t.ao)==null?void 0:q.intensity)!=null?H:1,exponent:(Q=(Z=t.ao)==null?void 0:Z.exponent)!=null?Q:1.5,samples:(W=(pe=(ae=t.ao)==null?void 0:ae.samples)!=null?pe:t.castsPerFrame)!=null?W:5},refinementOptions:{...mp,...(J=t.refinementOptions)!=null?J:{},denoiseEnabled:(ce=t.denoise)!=null?ce:mp.denoiseEnabled},timeoutProtection:t.timeoutProtection}}async bake(e,t={}){const n=performance.now(),s=tT(e);if(!s.length)throw new tt("no bake-eligible meshes in scene (need Mesh + MeshStandardMaterial-like)","validation");if(!this.renderer.getContext().getExtension("EXT_color_buffer_float"))throw new tt("EXT_color_buffer_float WebGL2 extension is unavailable; FloatType RTs cannot be allocated","validation");const o=KE(this.renderer),a=QE(this.opts.timeoutProtection,o),l={lost:!1},c=this.renderer.domElement,u=f=>{f.preventDefault(),l.lost=!0,console.error("[baker] webglcontextlost during bake \u2014 cancelling")};c.addEventListener("webglcontextlost",u,!1);const h=()=>{c.removeEventListener("webglcontextlost",u,!1)};e.updateMatrixWorld(!0);const d=f=>{var g;if((g=t.signal)!=null&&g.aborted)throw new tt("aborted by signal",f);if(l.lost)throw new tt("webgl context lost","context-loss")};try{return await this.bakeInternal(s,e,t,n,a,l,d)}finally{h()}}async bakeInternal(e,t,n,s,r,o,a){var q,H,Z,Q,ae,pe,W,J,ce;const l=this.opts.texelsPerMeter,c=l>0?jE(e,this.opts.perMesh,this.opts.resolution,l):qE(e,this.opts.perMesh,this.opts.resolution),{excluded:u,groups:h}=c,d=me=>l>0?c.resolution:me,f=performance.now();(q=n.onProgress)==null||q.call(n,"uv-unwrap",0);const g=[...h.values()].flat();await ES(g),(H=n.onProgress)==null||H.call(n,"uv-unwrap",1),a("unwrap");const x=performance.now(),m=performance.now();(Z=n.onProgress)==null||Z.call(n,"geometry",0);const p=nE(e),v=new ah(p);(Q=n.onProgress)==null||Q.call(n,"geometry",.5);const _=sE(p,e),b=rE(_);(ae=n.onProgress)==null||ae.call(n,"geometry",1),a("geometry");const S=performance.now(),w=fp(this.opts.gi.skyColor,16777215);let M=Xw(t);if(M.length===0&&this.opts.light.enabled){const me=fp(this.opts.light.color,16777215);M=[{type:"point",position:this.opts.light.position.clone(),direction:new R(0,-1,0),color:me.multiplyScalar(this.opts.light.intensity),params:[this.opts.light.size,0,0,0]}]}const A=performance.now(),U=[...h.keys()],y=[],E=new Map,N=new Map;for(let me=0;me<U.length;me++){const ve=U[me],fe=d(ve),Be=fe*this.opts.superSample,Pe=h.get(ve);(pe=n.onProgress)==null||pe.call(n,"bake",me/U.length),a("bake");const z=DS(this.renderer,Pe,Be,!0),Pt=nT(this.opts,Be,M,w,b,r),Me=iT(this.opts,Be,r),Le=$w(this.renderer,z.positionTexture,z.normalTexture,v,Pt),be=dg(this.renderer,z.positionTexture,z.normalTexture,v,Me),ot=fg(this.renderer,{direct:Le.textures.direct,indirect:Le.textures.indirect,ao:be.texture},Be,{directIntensity:1,giIntensity:this.opts.gi.intensity,aoEnabled:this.opts.ao.enabled,aoIntensity:this.opts.ao.intensity,aoExponent:this.opts.ao.exponent});await oT(Le,be,ot,this.opts.samples,n,o,r,me,U.length,te=>{var ee;return(ee=n.onProgress)==null?void 0:ee.call(n,"bake",(me+te)/U.length)});let Ue=null;(this.opts.denoise||this.opts.refinementOptions.dilationIterations>0)&&(Ue=await lh(this.renderer,ot.texture,z.positionTexture,Be,this.opts.refinementOptions));const L=(W=Ue==null?void 0:Ue.texture)!=null?W:ot.texture,T=this.opts.superSample>1?XE(this.renderer,L,fe):null,X=(J=T==null?void 0:T.texture)!=null?J:L;y.push({lightmapper:Le,aoMapper:be,composite:ot,refinement:Ue,atlasDispose:z.dispose,resolution:fe,internalResolution:Be,downscale:T,meshes:Pe,positionTex:z.positionTexture,normalTex:z.normalTexture});for(const te of Pe)E.set(te,X),N.set(te,fe)}const B=performance.now(),P=performance.now();(ce=n.onProgress)==null||ce.call(n,"refine",1);const O=performance.now();performance.now(),this.renderer.getContext().finish(),performance.now();const k=U.reduce((me,ve)=>{const fe=d(ve);return me+fe*fe},0),V={meshCount:g.length,texelCount:k,raysTraced:this.opts.samples*this.opts.castsPerFrame*k,duration:{uvUnwrap:x-f,geometry:S-m,bake:B-A,refine:O-P,total:performance.now()-s}};return new JE(this.renderer,E,N,V,{groups:y,bvh:v,refinementOptions:this.opts.refinementOptions,denoise:this.opts.denoise,matTexDispose:()=>{b.albedoTexture.dispose(),b.emissiveTexture.dispose()}})}}function tT(i){const e=[];return i.traverse(t=>{var r;if(!t.isMesh||!t.visible||(r=t.userData)!=null&&r.lightmapIgnore)return;const n=t;(Array.isArray(n.material)?n.material:[n.material]).some(o=>o&&o.isMeshStandardMaterial)&&e.push(n)}),e}function nT(i,e,t,n,s,r){return{resolution:e,casts:i.castsPerFrame,filterMode:i.filtering==="linear"?ut:st,lights:t,skyColor:n,skyIntensity:i.gi.skyIntensity,directLightEnabled:i.light.enabled,indirectLightEnabled:i.gi.enabled,albedoTexture:s.albedoTexture,emissiveTexture:s.emissiveTexture,materialTextureSize:s.side,targetSamples:i.samples,bounces:i.bounces,tileSize:r.initialTileSize}}function iT(i,e,t){return{resolution:e,aoSamples:i.ao.samples,ambientDistance:i.ao.distance,targetSamples:i.samples,tileSize:t.initialTileSize}}const sT=64;function rT(i,e,t){return i.length<4?e:i.slice(-4).filter(r=>r>t.maxFrameMs*1.5).length>=3?Math.max(sT,e>>1):e}function oT(i,e,t,n,s,r,o,a,l,c){return new Promise((u,h)=>{const d=[];let f=performance.now(),g=o.initialTileSize;const x=()=>{var S,w;if((S=s.signal)!=null&&S.aborted){h(new tt("aborted by signal","bake"));return}if(r.lost){h(new tt("webgl context lost during bake","context-loss"));return}const m=performance.now();if(d.push(m-f),d.length>8&&d.shift(),f=m,o.autoAdapt){const M=rT(d,g,o);M!==g&&(console.warn(`[baker] adaptive throttle: tileSize ${g} \u2192 ${M}`),g=M,i.setTileSize(g),e.setTileSize(g),d.length=0)}const p=i.renderTiled(o.maxFrameMs),v=e.renderTiled(o.maxFrameMs),_=Math.min(p.samples,v.samples);c(n>0?_/n:1);const b=p.done&&v.done;if((p.sampleComplete||v.sampleComplete)&&t.refresh(),(w=s.onFrame)==null||w.call(s,{groupIndex:a,totalGroups:l,bounceSamples:p.samples,aoSamples:v.samples,targetSamples:n,done:b,compositeTexture:t.texture,directTexture:i.textures.direct,indirectTexture:i.textures.indirect,aoTexture:e.texture}),b){u();return}requestAnimationFrame(x)};requestAnimationFrame(x)})}function aT(i,e,t,n,s,r,o,a){const l=dg(i,t.positionTex,t.normalTex,e,n);return t.aoMapper.dispose(),t.aoMapper=l,t.composite.refresh({aoTex:l.texture}),new Promise((c,u)=>{const h=()=>{var f,g;if((f=s.signal)!=null&&f.aborted){u(new tt("aborted by signal","bake"));return}const d=l.render();if(a(n.targetSamples>0?d.samples/n.targetSamples:1),t.composite.refresh(),(g=s.onFrame)==null||g.call(s,{groupIndex:r,totalGroups:o,bounceSamples:0,aoSamples:d.samples,targetSamples:n.targetSamples,done:d.done,compositeTexture:t.composite.texture,directTexture:t.lightmapper.textures.direct,indirectTexture:t.lightmapper.textures.indirect,aoTexture:l.texture}),d.done){c();return}requestAnimationFrame(h)};requestAnimationFrame(h)})}const gp={0:"NO_ERROR",1280:"INVALID_ENUM",1281:"INVALID_VALUE",1282:"INVALID_OPERATION",1283:"STACK_OVERFLOW",1284:"STACK_UNDERFLOW",1285:"OUT_OF_MEMORY",1286:"INVALID_FRAMEBUFFER_OPERATION",37442:"CONTEXT_LOST_WEBGL"};class bg{constructor(e){this.renderer=e,this.start=performance.now(),this.snapshots=[],this.lastCalls=0,this.lastTriangles=0}banner(){var u,h;const e=this.renderer.getContext(),t=e.getExtension("WEBGL_debug_renderer_info"),n=t?String((u=e.getParameter(t.UNMASKED_VENDOR_WEBGL))!=null?u:""):"<masked>",s=t?String((h=e.getParameter(t.UNMASKED_RENDERER_WEBGL))!=null?h:""):"<masked>",r=e.getContextAttributes(),o={MAX_TEXTURE_SIZE:e.getParameter(e.MAX_TEXTURE_SIZE),MAX_RENDERBUFFER_SIZE:e.getParameter(e.MAX_RENDERBUFFER_SIZE),MAX_DRAW_BUFFERS:e.getParameter(e.MAX_DRAW_BUFFERS),MAX_COLOR_ATTACHMENTS:e.getParameter(e.MAX_COLOR_ATTACHMENTS),MAX_TEXTURE_IMAGE_UNITS:e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),MAX_FRAGMENT_UNIFORM_VECTORS:e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),MAX_VARYING_VECTORS:e.getParameter(e.MAX_VARYING_VECTORS),MAX_VIEWPORT_DIMS:e.getParameter(e.MAX_VIEWPORT_DIMS)},a=["EXT_color_buffer_float","EXT_color_buffer_half_float","OES_texture_float_linear","OES_texture_half_float_linear","WEBGL_lose_context","EXT_disjoint_timer_query_webgl2","WEBGL_debug_renderer_info"],l={};for(const d of a)l[d]=!!e.getExtension(d);const c=performance.memory;console.group("[diag] === GPU BANNER ==="),console.log("vendor:",n),console.log("renderer:",s),console.log("webgl version:",e.getParameter(e.VERSION)),console.log("GLSL:",e.getParameter(e.SHADING_LANGUAGE_VERSION)),console.log("context attrs:",r),console.log("limits:",o),console.log("extensions:",l),c&&console.log("JS heap (MB):",`used=${(c.usedJSHeapSize/1048576).toFixed(1)}`,`total=${(c.totalJSHeapSize/1048576).toFixed(1)}`,`limit=${(c.jsHeapSizeLimit/1048576).toFixed(1)}`),console.groupEnd()}snap(e){var u,h,d;const t=this.renderer.getContext();let n=0,s=0;do s=t.getError(),s!==0&&(n=s);while(s!==0);const r=this.renderer.info,o=(h=(u=r.programs)==null?void 0:u.length)!=null?h:0,a=r.render.calls-this.lastCalls,l=r.render.triangles-this.lastTriangles;this.lastCalls=r.render.calls,this.lastTriangles=r.render.triangles;const c={label:e,t:performance.now()-this.start,glError:(d=gp[n])!=null?d:`0x${n.toString(16)}`,threejs:{geometries:r.memory.geometries,textures:r.memory.textures,programs:o,calls:r.render.calls,triangles:r.render.triangles}};return this.snapshots.push(c),console.log(`[diag] ${c.t.toFixed(1).padStart(8)}ms ${e}`,`gl=${c.glError}`,`geo=${c.threejs.geometries} tex=${c.threejs.textures} prog=${c.threejs.programs}`,`\u0394calls=${a} \u0394tris=${l}`),c}measure(e,t){var c;const n=this.renderer.getContext();for(;n.getError()!==0;);const s=performance.now(),r=t();n.finish();const o=performance.now()-s;let a=0,l=0;do l=n.getError(),l!==0&&(a=l);while(l!==0);return console.log(`[diag] MEASURE ${e}: ${o.toFixed(1)}ms gl=${(c=gp[a])!=null?c:`0x${a.toString(16)}`}`),r}contextLossInfo(){var n,s;const e=this.renderer.getContext(),t=e.getExtension("WEBGL_lose_context");console.group("[diag] === CONTEXT LOSS DUMP ==="),console.log("isContextLost:",(n=e.isContextLost)==null?void 0:n.call(e)),console.log("snapshot history (last 10):",this.snapshots.slice(-10)),console.log("threejs info at loss:",{geometries:this.renderer.info.memory.geometries,textures:this.renderer.info.memory.textures,programs:(s=this.renderer.info.programs)==null?void 0:s.length,autoReset:this.renderer.info.autoReset}),t&&console.log("lose_context ext present"),console.groupEnd()}dump(){return this.snapshots.slice()}}let Mg=null;function lT(i){Mg=i}function Sn(){return Mg}const Nn=Qt(null),Dr=Qt([]),Qa=Qt("translate"),Ja=Qt(!1),Go=Qt(0),Dl=Qt(0),Ur=Qt("idle"),Sg=Qt({pct:0,samples:0,atlas:0,total:0,elapsedMs:0}),Vo=Qt(!1);Qt("combined");const Ba=Qt("cornell.advanced"),rt=Qt({outlinerW:280,inspectorW:320,logOpen:!1}),wg=Qt([]),_p=Qt("object");th(()=>Ur.value==="baking");function ke(i){var e;return I("div",{class:"flex items-center gap-2 px-2 h-6 hover:bg-bg-2",children:[I("label",{class:"text-[11px] text-text-1 w-28 flex-shrink-0 truncate",title:(e=i.hint)!=null?e:i.label,children:i.label}),I("div",{class:"flex-1 flex items-center gap-1",children:i.children})]})}function Wt(i){return I("div",{class:"mb-1",children:[I("div",{class:"px-2 py-1 text-[10px] uppercase tracking-wider text-text-2 font-semibold bg-bg-2/40",children:i.title}),i.children]})}function cT(i){return I("input",{type:"text",class:"flex-1 px-1.5 py-0.5 text-[12px] bg-bg-2 border border-border rounded text-text-0 focus:border-accent focus:outline-none",value:i.value,placeholder:i.placeholder,onInput:e=>i.onChange(e.target.value)})}function Jn(i){var e;return I("input",{type:"number",class:"flex-1 w-0 min-w-0 px-1.5 py-0.5 text-[12px] bg-bg-2 border border-border rounded text-text-0 focus:border-accent focus:outline-none font-mono",value:Number.isFinite(i.value)?i.value:0,step:(e=i.step)!=null?e:.1,min:i.min,max:i.max,onInput:t=>{const n=parseFloat(t.target.value);Number.isNaN(n)||i.onChange(n)}})}function yn(i){var e;return I(As,{children:[I("input",{type:"range",class:"flex-1 accent-accent",value:i.value,min:i.min,max:i.max,step:(e=i.step)!=null?e:.01,onInput:t=>i.onChange(parseFloat(t.target.value))}),I("span",{class:"text-[10px] text-text-2 w-10 text-right font-mono",children:i.value.toFixed(2)})]})}function Nr(i){return I("input",{type:"color",class:"w-8 h-5 bg-bg-2 border border-border rounded cursor-pointer",value:i.value,onInput:e=>i.onChange(e.target.value)})}function mi(i){return I("label",{class:"flex items-center gap-1.5 cursor-pointer text-[11px] text-text-1",children:[I("input",{type:"checkbox",class:"accent-accent",checked:i.value,onChange:e=>i.onChange(e.target.checked)}),i.label&&I("span",{children:i.label})]})}function uT(i){return I("select",{class:"flex-1 px-1.5 py-0.5 text-[12px] bg-bg-2 border border-border rounded text-text-0 focus:border-accent focus:outline-none",value:i.value,onChange:e=>i.onChange(e.target.value),children:i.options.map(e=>I("option",{value:e.value,children:e.label},e.value))})}function mh(i){if(!i)return null;const e=Sn();return e?e.sceneController.lookupObject(i):null}function Eg(i){return!!i&&i.isMesh===!0}function hT(i){const e=i.material;return Array.isArray(e)?null:e}function xp(i){return`#${i.getHexString()}`}function vp(i,e){i.set(e).convertSRGBToLinear()}function it(){Go.value++}function Hn(){Dl.value++}function yp(){const i=Sn();!i||(Dr.value=i.getSceneTree())}function Ct(){Vo.value=!0}function dT(){Go.value;const i=Sn();if(!i)return null;const e=i.options;return I("div",{class:"text-[12px]",children:[I(Wt,{title:"Quality",children:[I(ke,{label:"Preset",children:I(uT,{value:e.quality,options:[{value:"Custom",label:"Custom"},{value:"Draft",label:"Draft"},{value:"Preview",label:"Preview"},{value:"Production",label:"Production"},{value:"Final",label:"Final"}],onChange:t=>{i.setQuality(t),it()}})}),I(ke,{label:"Atlas size",children:I(Jn,{value:e.lightMapSize,min:128,max:2048,step:128,onChange:t=>{e.lightMapSize=t,e.quality="Custom",it()}})}),I(ke,{label:"Density (px/m)",children:I(yn,{value:e.texelsPerMeter,min:1,max:50,step:.5,onChange:t=>{e.texelsPerMeter=t,it()}})})]}),I(Wt,{title:"Path tracer",children:[I(ke,{label:"Casts/frame",children:I(Jn,{value:e.casts,min:1,max:16,step:1,onChange:t=>{e.casts=t,e.quality="Custom",it()}})}),I(ke,{label:"Target frames",children:I(Jn,{value:e.targetSamples,min:16,max:1024,step:16,onChange:t=>{e.targetSamples=t,e.quality="Custom",it()}})}),I(ke,{label:"Bounces",children:I(Jn,{value:e.bounces,min:1,max:4,step:1,onChange:t=>{e.bounces=t,it()}})}),I(ke,{label:"Safe mode (TDR)",hint:"Tile the path-tracer draw into 64\xD764 scissored blocks to stay under the GPU watchdog.",children:I(mi,{value:e.safeMode,onChange:t=>{e.safeMode=t,it()}})})]}),I(Wt,{title:"Ambient occlusion",children:[I(ke,{label:"Enabled",children:I(mi,{value:e.ambientLightEnabled,onChange:t=>{e.ambientLightEnabled=t,it()}})}),I(ke,{label:"Distance",children:I(yn,{value:e.ambientDistance,min:.05,max:2,step:.05,onChange:t=>{e.ambientDistance=t,it()}})}),I(ke,{label:"Samples",children:I(Jn,{value:e.aoSamples,min:0,max:32,step:1,onChange:t=>{e.aoSamples=t,it()}})}),I(ke,{label:"Intensity",children:I(yn,{value:e.aoIntensity,min:0,max:3,step:.05,onChange:t=>{e.aoIntensity=t,it()}})}),I(ke,{label:"Exponent",children:I(yn,{value:e.aoExponent,min:.5,max:4,step:.1,onChange:t=>{e.aoExponent=t,it()}})})]}),I(Wt,{title:"Refinement",children:[I(ke,{label:"Denoise",children:I(mi,{value:e.denoiseEnabled,onChange:t=>{e.denoiseEnabled=t,it()}})}),I(ke,{label:"Spatial sigma",children:I(yn,{value:e.denoiseSigma,min:.1,max:8,step:.1,onChange:t=>{e.denoiseSigma=t,it()}})})]}),I(Wt,{title:"Workflow",children:I(ke,{label:"Auto-bake on edit",children:I(mi,{value:e.autoBake,onChange:t=>{e.autoBake=t,it()}})})})]})}const fT="light:dummy";function pT(){Go.value;const i=Nn.value,e=Sn();if(!e||i!==fT)return I("div",{class:"p-2 italic text-text-2 text-[12px]",children:"Select the Scene Light in the Outliner to edit it."});const t=e.options;return I("div",{class:"text-[12px]",children:[I(Wt,{title:"Primary (Area)",children:[I(ke,{label:"Enabled",children:I(mi,{value:t.directLightEnabled,onChange:n=>{t.directLightEnabled=n,it(),Ct()}})}),I(ke,{label:"Color",children:I(Nr,{value:t.lightColor,onChange:n=>{t.lightColor=n,it(),Ct()}})}),I(ke,{label:"Intensity",children:I(yn,{value:t.lightIntensity,min:0,max:15,step:.1,onChange:n=>{t.lightIntensity=n,it(),Ct()}})}),I(ke,{label:"Source size",hint:"Radius of the disc-shaped emitter. Larger = softer shadows.",children:I(yn,{value:t.lightSize,min:.1,max:5,step:.1,onChange:n=>{t.lightSize=n,it(),Ct()}})})]}),I(Wt,{title:"Global Illumination",children:[I(ke,{label:"Indirect on",children:I(mi,{value:t.indirectLightEnabled,onChange:n=>{t.indirectLightEnabled=n,it(),Ct()}})}),I(ke,{label:"Bounce power",children:I(yn,{value:t.giIntensity,min:0,max:4,step:.05,onChange:n=>{t.giIntensity=n,it()}})})]}),I(Wt,{title:"Secondary (Directional / Sun)",children:[I(ke,{label:"Enabled",children:I(mi,{value:t.secondaryLightEnabled,onChange:n=>{t.secondaryLightEnabled=n,it(),Ct()}})}),I(ke,{label:"Color",children:I(Nr,{value:t.secondaryColor,onChange:n=>{t.secondaryColor=n,it(),Ct()}})}),I(ke,{label:"Intensity",children:I(yn,{value:t.secondaryIntensity,min:0,max:5,step:.1,onChange:n=>{t.secondaryIntensity=n,it(),Ct()}})}),I(ke,{label:"Dir X",children:I(Jn,{value:t.secondaryDirX,min:-1,max:1,step:.05,onChange:n=>{t.secondaryDirX=n,it(),Ct()}})}),I(ke,{label:"Dir Y",children:I(Jn,{value:t.secondaryDirY,min:-1,max:1,step:.05,onChange:n=>{t.secondaryDirY=n,it(),Ct()}})}),I(ke,{label:"Dir Z",children:I(Jn,{value:t.secondaryDirZ,min:-1,max:1,step:.05,onChange:n=>{t.secondaryDirZ=n,it(),Ct()}})})]})]})}function mT(){Go.value;const i=mh(Nn.value);if(!Eg(i))return I("div",{class:"p-2 italic text-text-2 text-[12px]",children:"Lightmap settings need a mesh selected."});const e=Sn();if(!e)return null;const t=e.options;t.perMesh[i.uuid]||(t.perMesh[i.uuid]={scaleInLightmap:1,exclude:!1});const n=t.perMesh[i.uuid];return I("div",{class:"text-[12px]",children:[I(Wt,{title:"Bake settings (per mesh)",children:[I(ke,{label:"Density \xD7",hint:"Multiplier on the global texels/m density for this mesh. Higher = more atlas area.",children:I(yn,{value:n.scaleInLightmap,min:.25,max:4,step:.25,onChange:s=>{n.scaleInLightmap=s,it(),Ct()}})}),I(ke,{label:"Exclude",hint:"Skip this mesh during UV unwrap + bake. It still contributes to BVH (shadows/GI for other meshes).",children:I(mi,{value:n.exclude,onChange:s=>{n.exclude=s,it(),Ct()}})})]}),I(Wt,{title:"UV2 status",children:I(ke,{label:"UV2 channel",children:I("span",{class:"text-[11px] text-text-1 font-mono",children:i.geometry.attributes.uv2?"present":"rebake to generate"})})})]})}function gT(){Dl.value;const i=mh(Nn.value);if(!Eg(i))return I(bp,{msg:"Material editor needs a mesh selected."});const e=hT(i);return e?I("div",{class:"text-[12px]",children:[I(Wt,{title:"Base",children:[I(ke,{label:"Color",children:I(Nr,{value:xp(e.color),onChange:t=>{vp(e.color,t),Hn(),Ct()}})}),I(ke,{label:"Roughness",children:I(yn,{value:e.roughness,min:0,max:1,step:.01,onChange:t=>{e.roughness=t,Hn()}})}),I(ke,{label:"Metalness",children:I(yn,{value:e.metalness,min:0,max:1,step:.01,onChange:t=>{e.metalness=t,Hn()}})})]}),I(Wt,{title:"Emissive",children:[I(ke,{label:"Color",children:I(Nr,{value:xp(e.emissive),onChange:t=>{vp(e.emissive,t),Hn(),Ct()}})}),I(ke,{label:"Intensity",children:I(yn,{value:e.emissiveIntensity,min:0,max:10,step:.1,onChange:t=>{e.emissiveIntensity=t,Hn(),Ct()}})})]}),I(Wt,{title:"Bake",children:I(ke,{label:"Receive only",hint:"Receive lighting but do not contribute to GI bounces.",children:I(mi,{value:i.userData.receiveOnly===!0,onChange:t=>{i.userData.receiveOnly=t,Hn(),Ct()}})})})]}):I(bp,{msg:"Selected mesh has no editable material."})}function bp(i){return I("div",{class:"p-2 italic text-text-2 text-[12px]",children:i.msg})}function _T(){Dl.value;const i=mh(Nn.value);return i?I("div",{class:"text-[12px]",children:[I(Wt,{title:"Object",children:[I(ke,{label:"Name",children:I(cT,{value:i.name,onChange:e=>{i.name=e,Hn(),yp()}})}),I(ke,{label:"Visible",children:I(mi,{value:i.visible,onChange:e=>{i.visible=e,Hn(),yp()}})})]}),I(Wt,{title:"Transform",children:[I(Fc,{label:"Position",x:i.position.x,y:i.position.y,z:i.position.z,onChange:(e,t,n)=>{i.position.set(e,t,n),Hn(),Ct()}}),I(Fc,{label:"Rotation",x:i.rotation.x,y:i.rotation.y,z:i.rotation.z,onChange:(e,t,n)=>{i.rotation.set(e,t,n),Hn(),Ct()}}),I(Fc,{label:"Scale",x:i.scale.x,y:i.scale.y,z:i.scale.z,onChange:(e,t,n)=>{i.scale.set(e,t,n),Hn(),Ct()}})]})]}):I(xT,{})}function Fc(i){return I(ke,{label:i.label,children:[I(Jn,{value:i.x,step:.1,onChange:e=>i.onChange(e,i.y,i.z)}),I(Jn,{value:i.y,step:.1,onChange:e=>i.onChange(i.x,e,i.z)}),I(Jn,{value:i.z,step:.1,onChange:e=>i.onChange(i.x,i.y,e)})]})}function xT(){return I("div",{class:"p-2 italic text-text-2 text-[12px]",children:"Nothing selected."})}function vT(){Dl.value,Go.value;const i=Sn();if(!i)return null;const e=i.sceneController,t=i.options,n=e.scene.background instanceof Te?`#${e.scene.background.getHexString()}`:"#000000";return I("div",{class:"text-[12px]",children:[I(Wt,{title:"Viewport background",children:I(ke,{label:"Color",children:I(Nr,{value:n,onChange:s=>{const r=new Te(s);e.scene.background=r,Hn()}})})}),I(Wt,{title:"Sky (GI miss-hit fill)",children:[I(ke,{label:"Color",children:I(Nr,{value:t.skyColor,onChange:s=>{t.skyColor=s,it(),Ct()}})}),I(ke,{label:"Intensity",hint:"Fill added when GI rays miss the scene. Bumping it lights up otherwise-dark holes; 0 keeps the room closed.",children:I(yn,{value:t.skyIntensity,min:0,max:4,step:.05,onChange:s=>{t.skyIntensity=s,it(),Ct()}})})]}),I(Wt,{title:"Environment HDRI",children:I(ke,{label:"HDRI",children:I("span",{class:"text-[11px] text-text-2 italic",children:"slot \u2014 wired in a later phase"})})}),I(Wt,{title:"Light Probes (SH)",children:I(ke,{label:"Probes",children:I("span",{class:"text-[11px] text-text-2 italic",children:"Task 11 \u2014 Spherical Harmonics"})})})]})}function Tg(i){const e=Ao(0),t=Ao(0),n=Ao(!1);return Gr(()=>{const s=o=>{var u,h;if(!n.current)return;const a=o.clientX-e.current,l=i.side==="left"?a:-a,c=Math.max((u=i.min)!=null?u:180,Math.min((h=i.max)!=null?h:500,t.current+l));i.onResize(c)},r=()=>{n.current=!1,document.body.style.cursor=""};return window.addEventListener("mousemove",s),window.addEventListener("mouseup",r),()=>{window.removeEventListener("mousemove",s),window.removeEventListener("mouseup",r)}},[i.side,i.min,i.max,i.onResize]),I("div",{class:"absolute top-0 bottom-0 w-1 cursor-col-resize bg-border hover:bg-accent/40 transition-colors pointer-events-auto z-10",style:i.side==="left"?{right:"-2px"}:{left:"-2px"},onMouseDown:s=>{s.preventDefault(),e.current=s.clientX,t.current=i.width,n.current=!0,document.body.style.cursor="col-resize"}})}const yT=[{id:"object",label:"Object"},{id:"material",label:"Material"},{id:"lightmap",label:"Lightmap"},{id:"bake",label:"Bake"},{id:"light",label:"Light"},{id:"world",label:"World"}];function bT(){const i=_p.value;return I("aside",{class:"relative bg-bg-1 border-l border-border flex flex-col text-[12px] pointer-events-auto",style:{width:`${rt.value.inspectorW}px`},children:[I("div",{class:"border-b border-border bg-bg-2 flex",children:yT.map(e=>I("button",{type:"button",class:`flex-1 px-2 h-7 text-[11px] font-medium border-r border-border last:border-r-0 ${i===e.id?"text-text-0 bg-bg-1 border-b-2 border-b-accent":"text-text-1 hover:text-text-0 hover:bg-bg-3"}`,onClick:()=>_p.value=e.id,children:e.label}))}),I("div",{class:"flex-1 overflow-auto",children:[i==="object"&&I(_T,{}),i==="material"&&I(gT,{}),i==="lightmap"&&I(mT,{}),i==="bake"&&I(dT,{}),i==="light"&&I(pT,{}),i==="world"&&I(vT,{})]}),I(Tg,{side:"right",width:rt.value.inspectorW,onResize:e=>rt.value={...rt.value,inspectorW:e},min:240,max:520})]})}/**
 * @license lucide-preact v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MT=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),ST=(...i)=>i.filter((e,t,n)=>Boolean(e)&&e.trim()!==""&&n.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-preact v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var wT={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-preact v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ET=({color:i="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:n,children:s,iconNode:r,class:o="",...a})=>il("svg",{...wT,width:String(e),height:e,stroke:i,["stroke-width"]:n?Number(t)*24/Number(e):t,class:["lucide",o].join(" "),...a},[...r.map(([l,c])=>il(l,c)),...Kp(s)]);/**
 * @license lucide-preact v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tt=(i,e)=>{const t=({class:n="",children:s,...r})=>il(ET,{...r,iconNode:e,class:ST(`lucide-${MT(i)}`,n)},s);return t.displayName=`${i}`,t};/**
 * @license lucide-preact v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TT=Tt("Box",[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-preact v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AT=Tt("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-preact v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RT=Tt("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-preact v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CT=Tt("Circle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-preact v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PT=Tt("Cylinder",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5v14a9 3 0 0 0 18 0V5",key:"aqi0yr"}]]);/**
 * @license lucide-preact v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LT=Tt("Disc",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-preact v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IT=Tt("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-preact v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DT=Tt("EyeOff",[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-preact v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UT=Tt("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-preact v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NT=Tt("FolderOpen",[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]]);/**
 * @license lucide-preact v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FT=Tt("GitCompareArrows",[["circle",{cx:"5",cy:"6",r:"3",key:"1qnov2"}],["path",{d:"M12 6h5a2 2 0 0 1 2 2v7",key:"1yj91y"}],["path",{d:"m15 9-3-3 3-3",key:"1lwv8l"}],["circle",{cx:"19",cy:"18",r:"3",key:"1qljk2"}],["path",{d:"M12 18H7a2 2 0 0 1-2-2V9",key:"16sdep"}],["path",{d:"m9 15 3 3-3 3",key:"1m3kbl"}]]);/**
 * @license lucide-preact v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OT=Tt("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-preact v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BT=Tt("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-preact v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kT=Tt("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-preact v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zT=Tt("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);/**
 * @license lucide-preact v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HT=Tt("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-preact v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GT=Tt("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-preact v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VT=Tt("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]);/**
 * @license lucide-preact v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WT=Tt("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-preact v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XT=Tt("Square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-preact v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qT=Tt("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-preact v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jT=Tt("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-preact v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $T=Tt("Triangle",[["path",{d:"M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"14u9p9"}]]),At=i=>i,gh=At(jT),Mp=At(TT),YT=At(AT),KT=At(RT),ZT=At(CT),QT=At(PT),JT=At(LT);At(IT);const e1=At(UT),t1=At(DT);At(NT);At(OT);const n1=At(FT),Ag=At(BT),i1=At(kT),Eu=At(zT),s1=At(HT),r1=At(GT);At(VT);const o1=At(WT),vl=At(XT),a1=At(qT),l1=At($T);function c1(){const[i,e]=Zu(()=>Sp());return Gr(()=>{var s;const t=()=>e(Sp());window.addEventListener("resize",t);const n=window.matchMedia("(pointer: coarse)");return(s=n.addEventListener)==null||s.call(n,"change",t),()=>{var r;window.removeEventListener("resize",t),(r=n.removeEventListener)==null||r.call(n,"change",t)}},[]),i?I("div",{class:"fixed inset-0 z-[100] bg-bg-0/95 backdrop-blur flex items-center justify-center p-6 pointer-events-auto",children:I("div",{class:"max-w-md text-center",children:[I("div",{class:"inline-flex items-center justify-center w-14 h-14 rounded-full bg-stale/20 text-stale mb-4",children:I(gh,{size:28})}),I("h1",{class:"text-xl font-semibold text-text-0 mb-2",children:"Desktop only"}),I("p",{class:"text-sm text-text-1 leading-relaxed",children:"Lightmap Studio needs WebGL2, a mouse, and a wide viewport. Touch and small screens aren't supported. Open this URL on a laptop or desktop."}),I("p",{class:"mt-6 text-[11px] text-text-2 font-mono",children:"\u2265 1024px \xB7 fine pointer"})]})}):null}function Sp(){var t,n;if(typeof window=="undefined")return!1;const i=window.innerWidth<1024,e=(n=(t=window.matchMedia)==null?void 0:t.call(window,"(pointer: coarse)").matches)!=null?n:!1;return i||e}function u1(){const i=new en({color:11579568,roughness:.8,metalness:0});return i._originalMap=null,i}function fr(i,e){const t=new j(e,u1());return t.name=i,t}const yl={primitives:[{id:"cube",label:"Cube",icon:"box",create:()=>fr("Cube",new de(1,1,1))},{id:"sphere",label:"Sphere",icon:"sphere",create:()=>fr("Sphere",new bi(.5,32,24))},{id:"plane",label:"Plane",icon:"plane",create:()=>{const i=fr("Plane",new Fn(1,1));return i.rotation.x=-Math.PI/2,i}},{id:"cylinder",label:"Cylinder",icon:"cylinder",create:()=>fr("Cylinder",new Gt(.5,.5,1,32))},{id:"cone",label:"Cone",icon:"cone",create:()=>fr("Cone",new Al(.5,1,32))},{id:"torus",label:"Torus",icon:"torus",create:()=>fr("Torus",new Ji(.5,.18,16,48))}],lights:[{id:"point",label:"Point",icon:"lightbulb",enabled:!0,create:()=>{const i=new Hr(16777215,2,0,2);return i.name="Point Light",i}},{id:"spot",label:"Spot",icon:"spot",enabled:!1,create:null},{id:"sun",label:"Sun",icon:"sun",enabled:!1,create:null},{id:"area",label:"Area",icon:"area",enabled:!1,create:null}]};function h1(i){if(i.kind==="primitive"){const e=yl.primitives.find(t=>t.id===i.id);return e?e.create():null}if(i.kind==="light"){const e=yl.lights.find(t=>t.id===i.id);return e&&e.enabled&&e.create?e.create():null}return null}function d1(){return I("div",{class:"flex-1 overflow-auto bg-bg-1 text-[12px]",children:[I(wp,{label:"Primitives",children:yl.primitives.map(i=>I(Ep,{label:i.label,icon:i.icon,spec:{kind:"primitive",id:i.id},enabled:!0},i.id))}),I(wp,{label:"Lights",children:yl.lights.map(i=>I(Ep,{label:i.label,icon:i.icon,spec:{kind:"light",id:i.id},enabled:i.enabled},i.id))})]})}function wp(i){return I("div",{class:"border-b border-border/40 last:border-b-0",children:[I("div",{class:"px-2 py-1 text-[10px] uppercase tracking-wider text-text-2 font-semibold",children:i.label}),I("div",{class:"grid grid-cols-3 gap-1 p-1.5",children:i.children})]})}function Ep(i){const e=n=>{if(!i.enabled){n.preventDefault();return}!n.dataTransfer||(n.dataTransfer.setData("application/x-baker-asset",JSON.stringify(i.spec)),n.dataTransfer.effectAllowed="copy")},t=f1(i.icon);return I("div",{"data-asset-tile":i.spec.id,draggable:i.enabled,onDragStart:e,title:i.enabled?`Drag ${i.label} to viewport`:`${i.label} (coming soon)`,class:`flex flex-col items-center justify-center gap-1 p-1.5 rounded border border-transparent text-[10px] select-none ${i.enabled?"bg-bg-2 hover:bg-bg-3 hover:border-border text-text-1 hover:text-text-0 cursor-grab active:cursor-grabbing":"bg-bg-2/40 text-text-2 cursor-not-allowed opacity-50"}`,children:[I(t,{size:18}),I("span",{class:"truncate w-full text-center",children:i.label})]})}function f1(i){switch(i){case"box":return Mp;case"sphere":return ZT;case"plane":return vl;case"cylinder":return QT;case"cone":return l1;case"torus":return JT;case"lightbulb":return Eu;case"sun":return a1;case"spot":return Eu;case"area":return vl;default:return Mp}}function p1(){const i=Dr.value,e=i.filter(n=>n.kind==="light"),t=i.filter(n=>n.kind==="mesh");return I("aside",{class:"relative bg-bg-1 border-r border-border flex flex-col text-[12px] pointer-events-auto",style:{width:`${rt.value.outlinerW}px`},children:[I("div",{class:"flex items-center justify-between px-2 h-7 border-b border-border bg-bg-2",children:[I("div",{class:"flex items-center gap-1.5 text-text-1",children:[I(i1,{size:12}),I("span",{class:"font-medium text-text-0",children:"Outliner"})]}),I("button",{type:"button",class:"p-1 text-text-1 hover:bg-bg-3 hover:text-text-0 rounded disabled:opacity-50",title:"Add (T-D7)",disabled:!0,children:I(r1,{size:12})})]}),I("div",{class:"flex-1 overflow-auto",children:[I(Tp,{label:"Lights",nodes:e}),I(Tp,{label:"Meshes",nodes:t}),i.length===0&&I("div",{class:"p-2 text-text-2 italic",children:"Empty scene."})]}),I("div",{class:"border-t border-border bg-bg-2 h-7 px-2 flex items-center text-text-1 flex-shrink-0",children:I("span",{class:"font-medium text-text-0",children:"Assets"})}),I("div",{class:"flex-1 min-h-0 max-h-[50%] flex flex-col border-t border-border/40",children:I(d1,{})}),I(Tg,{side:"left",width:rt.value.outlinerW,onResize:n=>rt.value={...rt.value,outlinerW:n},min:200,max:480})]})}function Tp(i){return i.nodes.length===0?null:I("div",{class:"border-b border-border/40 last:border-b-0",children:[I("div",{class:"px-2 py-1 text-[10px] uppercase tracking-wider text-text-2 font-semibold",children:i.label}),I("ul",{children:i.nodes.map(e=>I(m1,{node:e},e.id))})]})}function m1(i){const e=Nn.value===i.node.id;return I("li",{class:`group flex items-center gap-1.5 px-2 h-[22px] cursor-pointer select-none ${e?"bg-accent/20 text-text-0":"text-text-1 hover:bg-bg-3 hover:text-text-0"}`,onClick:()=>{Nn.value=i.node.id},children:[I("span",{class:`flex-shrink-0 ${e?"text-accent":"text-text-2"}`,children:i.node.kind==="light"?I(Eu,{size:12}):I(vl,{size:12})}),I("span",{class:"flex-1 truncate text-[12px]",children:i.node.name}),I("button",{type:"button",class:"p-0.5 opacity-0 group-hover:opacity-100 text-text-2 hover:text-text-0",onClick:t=>{var s;t.stopPropagation();const n=!i.node.visible;(s=Sn())==null||s.setNodeVisible(i.node.id,n),Dr.value=Dr.value.map(r=>r.id===i.node.id?{...r,visible:n}:r)},title:i.node.visible?"Hide":"Show",children:i.node.visible?I(e1,{size:12}):I(t1,{size:12})})]})}function g1(){const i=Vo.value,e=Ur.value==="baking";return!i||e?null:I("button",{type:"button","data-stale-banner":!0,onClick:()=>{const n=Sn();!n||n.requestBake()},class:"absolute bottom-2 left-1/2 -translate-x-1/2 z-30 bg-stale text-bg-0 rounded-full px-4 py-1.5 text-[12px] font-medium shadow-lg cursor-pointer hover:bg-stale/90 flex items-center gap-2 pointer-events-auto",title:"Re-bake the lightmap (B)",children:[I(gh,{size:14}),I("span",{children:"Scene changed \u2014 Re-bake (B)"})]})}const _1=th(()=>Ur.value==="baking");function x1(){const i=Sn();!i||i.requestBake()}function v1(){rt.value={...rt.value,logOpen:!rt.value.logOpen}}function y1(){const i=Sg.value,e=_1.value,t=Vo.value;return I("footer",{class:"h-10 bg-bg-1 border-t border-border flex items-center gap-3 px-3 text-[12px] pointer-events-auto relative",children:[I("button",{type:"button",class:`flex items-center gap-1.5 px-3 py-1.5 rounded font-medium text-[12px] ${e?"bg-stale/20 text-stale border border-stale/40 cursor-wait":t?"bg-stale text-bg-0 hover:bg-stale/90 animate-pulse":"bg-accent text-bg-0 hover:bg-accent/90"}`,onClick:x1,disabled:e,children:[e?I(vl,{size:12}):I(s1,{size:12,fill:"currentColor"}),I("span",{children:e?"Baking\u2026":t?"Re-bake":"Bake"})]}),I("div",{class:"flex-1 max-w-md",children:I("div",{class:"h-1.5 bg-bg-3 rounded-full overflow-hidden",children:I("div",{class:"h-full bg-accent transition-[width] duration-150",style:{width:`${i.pct}%`}})})}),I("div",{class:"flex items-center gap-3 text-text-1 font-mono text-[11px]",children:[I("span",{children:[i.samples,"/",i.total," frames"]}),i.atlas>0&&I("span",{children:["Atlas ",i.atlas,"/",i.total>0?i.atlas:0]}),I("span",{children:[(i.elapsedMs/1e3).toFixed(1),"s"]})]}),I("button",{type:"button",class:"ml-auto flex items-center gap-1 p-1.5 text-text-1 hover:bg-bg-3 hover:text-text-0 rounded",onClick:v1,title:"Logs",children:[I(Ag,{size:14}),I("span",{class:"text-[11px]",children:wg.value.length}),I(KT,{size:12,class:`transition-transform ${rt.value.logOpen?"rotate-180":""}`})]}),rt.value.logOpen&&I(b1,{})]})}function b1(){const i=wg.value.slice().reverse();return I("div",{class:"absolute bottom-full right-2 mb-1 w-[420px] max-h-72 overflow-auto bg-bg-1 border border-border rounded shadow-xl font-mono text-[11px] z-50",children:i.length===0?I("div",{class:"p-3 text-text-2 italic",children:"No log entries yet."}):I("ul",{children:i.map(e=>I("li",{class:`px-2 py-1 border-b border-border/40 last:border-b-0 ${e.level==="error"?"text-red-400":e.level==="warn"?"text-stale":"text-text-1"}`,children:[I("span",{class:"text-text-2 mr-2",children:new Date(e.ts).toLocaleTimeString()}),e.msg]},e.ts))})})}const xo=Qt(null);let M1=1;function S1(i,e){xo.value={id:M1++,kind:i,text:e}}function w1(){const i=xo.value;if(Gr(()=>{if(!i)return;const n=setTimeout(()=>{var s;((s=xo.value)==null?void 0:s.id)===i.id&&(xo.value=null)},4e3);return()=>clearTimeout(n)},[i==null?void 0:i.id]),!i)return null;const e=i.kind==="error";return I("div",{class:`fixed top-12 left-1/2 -translate-x-1/2 z-[90] px-4 py-2 rounded-lg shadow-xl flex items-center gap-2 text-[12px] font-medium pointer-events-auto cursor-pointer ${e?"bg-red-900/95 text-red-100 border border-red-700":"bg-bg-1/95 backdrop-blur text-text-0 border border-border"}`,onClick:()=>xo.value=null,role:"status",children:[I(e?gh:Ag,{size:14}),I("span",{children:i.text})]})}class E1{constructor(){this.items=new Map}register(e,t){var r;const s=((r=this.items.get(e))!=null?r:[]).filter(o=>o.id!==t.id);s.push(t),this.items.set(e,s),Tu.value++}items_for(e){var t;return(t=this.items.get(e))!=null?t:[]}unregister(e,t){const n=this.items.get(e);!n||(this.items.set(e,n.filter(s=>s.id!==t)),Tu.value++)}}const xn=new E1,Tu=Qt(0);function T1(){const i=document.getElementById("baker-glb-input"),e=i!=null?i:document.querySelector('input[type="file"][accept=".glb,.gltf"]');e==null||e.click()}xn.register("File",{id:"file.new",label:"New Scene",action:()=>{console.log("[demo] File \u2192 New Scene (stub)")}});xn.register("File",{id:"file.open-glb",label:"Open .glb\u2026",hotkey:"Ctrl+O",action:T1});xn.register("File",{id:"file.export-lightmap",label:"Export Lightmap PNG",separatorBefore:!0,action:()=>{var e;const i=Sn();(e=i==null?void 0:i.exportFinal)==null||e.call(i)}});xn.register("File",{id:"file.export-glb",label:"Export Scene as GLB",action:()=>{var e;const i=Sn();(e=i==null?void 0:i.exportSceneGLB)==null||e.call(i)}});xn.register("Edit",{id:"edit.undo",label:"Undo",hotkey:"Ctrl+Z",disabled:!0,action:()=>{}});xn.register("Edit",{id:"edit.redo",label:"Redo",hotkey:"Ctrl+Shift+Z",disabled:!0,action:()=>{}});xn.register("Edit",{id:"edit.prefs",label:"Preferences",separatorBefore:!0,action:()=>{console.log("[demo] Edit \u2192 Preferences (stub)")}});let Au=280,Ru=320;xn.register("View",{id:"view.toggle-outliner",label:"Toggle Outliner",action:()=>{const i=rt.value.outlinerW;i>0?(Au=i,rt.value={...rt.value,outlinerW:0}):rt.value={...rt.value,outlinerW:Au||280}}});xn.register("View",{id:"view.toggle-inspector",label:"Toggle Inspector",action:()=>{const i=rt.value.inspectorW;i>0?(Ru=i,rt.value={...rt.value,inspectorW:0}):rt.value={...rt.value,inspectorW:Ru||320}}});xn.register("View",{id:"view.reset-layout",label:"Reset Layout",separatorBefore:!0,action:()=>{Au=280,Ru=320,rt.value={...rt.value,outlinerW:280,inspectorW:320}}});xn.register("Render",{id:"render.rebake",label:"Re-bake",hotkey:"B",action:()=>{var i;(i=Sn())==null||i.requestBake()}});xn.register("Render",{id:"render.rebake-ao",label:"Re-bake AO only",action:()=>{var i;(i=Sn())==null||i.requestAORebake()}});xn.register("Help",{id:"help.github",label:"GitHub",action:()=>{window.open("https://github.com/lucas-jones/three-lightmap-baker","_blank")}});xn.register("Help",{id:"help.about",label:"About",separatorBefore:!0,action:()=>{console.log("[demo] Help \u2192 About (stub)")}});function A1(i){const[e,t]=Zu(!1),n=Ao(null);Tu.value;const s=xn.items_for(i.menuId);Gr(()=>{if(!e)return;const o=l=>{const c=n.current;c&&!c.contains(l.target)&&t(!1)},a=l=>{l.key==="Escape"&&t(!1)};return window.addEventListener("mousedown",o),window.addEventListener("keydown",a),()=>{window.removeEventListener("mousedown",o),window.removeEventListener("keydown",a)}},[e]);const r=o=>{if(!o.disabled){try{o.action()}catch(a){console.error(`[demo] menu item ${o.id} failed`,a)}t(!1)}};return I("div",{ref:n,class:"relative",children:[I("button",{type:"button","aria-haspopup":"menu","aria-expanded":e,"data-menu-id":i.menuId,class:`px-2.5 py-1 text-[12px] rounded ${e?"bg-bg-3 text-text-0":"text-text-1 hover:bg-bg-3 hover:text-text-0"}`,onClick:()=>t(o=>!o),children:i.menuId}),e&&I("div",{role:"menu","data-menu-popover":i.menuId,class:"absolute top-full mt-0.5 left-0 w-56 bg-bg-1 border border-border rounded shadow-xl z-50",children:s.length===0?I("div",{class:"px-3 h-6 flex items-center text-[12px] text-text-2 italic",children:"(empty)"}):s.map(o=>I(R1,{item:o,onClick:r},o.id))})]})}function R1(i){const e=i.item;if(e.when&&!e.when())return null;const t=e.separatorBefore?"border-t border-border/40 my-0.5":"";return I(As,{children:[e.separatorBefore&&I("div",{class:t}),I("div",{role:"menuitem","data-menu-item-id":e.id,"aria-disabled":e.disabled?!0:void 0,class:`flex items-center justify-between px-3 h-6 text-[12px] text-text-1 ${e.disabled?"opacity-50 cursor-not-allowed":"hover:bg-bg-3 cursor-pointer"}`,onClick:()=>i.onClick(e),children:[I("span",{class:"truncate",children:e.label}),e.hotkey&&I("span",{class:"text-text-2 text-[10px] ml-2",children:e.hotkey})]})]})}const C1={cornell:"Cornell","threejs-port":"three.js Ports",interior:"Interior",isometric:"Isometric",showcase:"Showcase"};function P1(){var l;const[i,e]=Zu(!1),t=Ao(null),n=si.list(),s=si.listByCategory(),r=n.find(c=>c.id===Ba.value),o=(l=r==null?void 0:r.label)!=null?l:Ba.value;Gr(()=>{if(!i)return;const c=h=>{const d=t.current;d&&!d.contains(h.target)&&e(!1)},u=h=>{h.key==="Escape"&&e(!1)};return window.addEventListener("mousedown",c),window.addEventListener("keydown",u),()=>{window.removeEventListener("mousedown",c),window.removeEventListener("keydown",u)}},[i]);const a=c=>{var h;Ba.value=c;const u=Sn();(h=u==null?void 0:u.loadScenePreset)==null||h.call(u,c),e(!1)};return I("div",{ref:t,class:"relative",children:[I("button",{type:"button","aria-haspopup":"menu","aria-expanded":i,"data-testid":"scene-picker",class:"flex items-center gap-1.5 px-2.5 py-1 text-[12px] text-text-0 bg-bg-2 hover:bg-bg-3 rounded border border-border",onClick:()=>e(c=>!c),children:[I("span",{class:"truncate max-w-[180px]",children:o}),I(YT,{size:12,class:"text-text-2"})]}),i&&I("div",{role:"menu",class:"absolute top-full mt-0.5 right-0 w-64 bg-bg-1 border border-border rounded shadow-xl z-50 max-h-[60vh] overflow-auto",children:n.length===0?I("div",{class:"px-3 h-6 flex items-center text-[12px] text-text-2 italic opacity-50 cursor-not-allowed",children:"No scenes registered yet"}):Array.from(s.entries()).map(([c,u])=>{var h;return I("div",{class:"border-b border-border/40 last:border-b-0",children:[I("div",{class:"px-3 py-1 text-[10px] uppercase tracking-wider text-text-2 font-semibold",children:(h=C1[c])!=null?h:c}),u.map(d=>{const f=d.id===Ba.value;return I("div",{role:"menuitem","data-scene-id":d.id,class:`flex items-center justify-between px-3 h-6 text-[12px] cursor-pointer ${f?"bg-accent/20 text-text-0":"text-text-1 hover:bg-bg-3 hover:text-text-0"}`,onClick:()=>a(d.id),children:I("span",{class:"truncate",children:d.label})},d.id)})]},c)})})]})}const L1=["File","Edit","View","Render","Help"];function I1(){Ja.value=!Ja.value,console.log("[demo] compare toggled",Ja.value)}function D1(){const i=Ja.value;return I("header",{class:"h-9 bg-bg-1/95 backdrop-blur border-b border-border flex items-center px-2 select-none pointer-events-auto",children:[I("div",{class:"flex items-center gap-2 px-2 mr-2",children:[I("span",{class:"text-accent text-base leading-none",children:"\u2B22"}),I("span",{class:"font-semibold text-text-0 text-[13px]",children:"Lightmap Studio"})]}),I("nav",{class:"flex items-center gap-0.5",children:L1.map(e=>I(A1,{menuId:e},e))}),I("div",{class:"flex-1"}),I("div",{class:"flex items-center gap-1",children:[I(P1,{}),I("button",{type:"button","aria-pressed":i,"data-testid":"compare-toggle",class:`p-1.5 rounded ${i?"bg-accent/20 text-accent":"text-text-1 hover:bg-bg-3 hover:text-text-0"}`,title:"Compare with reference",onClick:I1,children:I(n1,{size:14})}),I("button",{type:"button",class:"p-1.5 text-text-1 hover:bg-bg-3 hover:text-text-0 rounded",title:"Settings (T-D9)",disabled:!0,children:I(o1,{size:14})})]})]})}const Rg="lightmap-studio.layout.v1";function U1(){var i,e,t;try{const n=localStorage.getItem(Rg);if(!n)return;const s=JSON.parse(n);rt.value={outlinerW:(i=s.outlinerW)!=null?i:rt.value.outlinerW,inspectorW:(e=s.inspectorW)!=null?e:rt.value.inspectorW,logOpen:(t=s.logOpen)!=null?t:rt.value.logOpen}}catch{}}let Oc=null;function N1(){Oc&&clearTimeout(Oc),Oc=setTimeout(()=>{try{localStorage.setItem(Rg,JSON.stringify(rt.value))}catch{}},500)}function F1(){return Gr(()=>(U1(),rt.subscribe(()=>N1())),[]),I(As,{children:[I("div",{class:"fixed inset-0 flex flex-col pointer-events-none z-40",children:[I(D1,{}),I("div",{class:"flex-1 flex min-h-0 relative",children:[I(p1,{}),I("div",{class:"flex-1 pointer-events-none"}),I(bT,{}),I(g1,{})]}),I(y1,{})]}),I(w1,{}),I(c1,{})]})}const O1="modulepreload",Ap={},B1="/three-lightmap-baker/",k1=function(e,t){return!t||t.length===0?e():Promise.all(t.map(n=>{if(n=`${B1}${n}`,n in Ap)return;Ap[n]=!0;const s=n.endsWith(".css"),r=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${r}`))return;const o=document.createElement("link");if(o.rel=s?"stylesheet":O1,s||(o.as="script",o.crossOrigin=""),o.href=n,document.head.appendChild(o),s)return new Promise((a,l)=>{o.addEventListener("load",a),o.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${n}`)))})})).then(()=>e())};class z1{constructor(e,t){this.renderer=e,this.scene=t,this.bakeGroups=[],this.meshToGroup=new Map,this.matTexDispose=null,this.bakeResult=null,this.firstPostBakeRender=!1,this.onProgress=null,this.dummyLightmap=null,this.diag=new bg(e)}getDummyLightmap(){if(this.dummyLightmap)return this.dummyLightmap;const e=new Uint8Array([255,255,255,255]),t=new ws(e,1,1);return t.needsUpdate=!0,t.channel=2,this.dummyLightmap=t,t}installDummyLightmaps(e){const t=this.getDummyLightmap();for(const n of e){const s=n.material;!s||(s.lightMap=t,s.lightMapIntensity=0,s.needsUpdate=!0)}}disposeAllGroups(){var e;for(const t of this.bakeGroups)(e=t.refinement)==null||e.dispose(),t.composite.dispose(),t.aoMapper.dispose(),t.lightmapper.dispose(),t.atlasDispose();this.bakeGroups=[],this.meshToGroup.clear()}async runBake(e,t,n){var u;if(!e.length)return;this.diag.snap("bake() entry");const s=n.lightMapSize;if(this.scene.updateMatrixWorld(!0),!e.filter(h=>{var d;return((d=n.perMesh[h.uuid])==null?void 0:d.exclude)!==!0}).length){console.warn("[baker] all meshes excluded \u2014 nothing to bake");return}this.disposeAllGroups(),(u=this.matTexDispose)==null||u.call(this),this.matTexDispose=null;let o=null;if(n.secondaryLightEnabled){o=new Cl(new Te(n.secondaryColor).convertSRGBToLinear(),n.secondaryIntensity);const h=new R(n.secondaryDirX,n.secondaryDirY,n.secondaryDirZ).normalize();o.position.copy(h).multiplyScalar(-10),this.scene.add(o)}const a={};for(const h of e){const d=n.perMesh[h.uuid];if(!d)continue;const f={};d.scaleInLightmap!==void 0&&d.scaleInLightmap!==1&&(f.density=d.scaleInLightmap),d.exclude&&(f.exclude=!0),(f.density!==void 0||f.exclude)&&(a[h.uuid]=f)}const l={resolution:s,samples:n.targetSamples,castsPerFrame:n.casts,bounces:n.bounces,filtering:n.filterMode==="linear"?"linear":"nearest",texelsPerMeter:n.texelsPerMeter,perMesh:a,denoise:!1,refinementOptions:{dilationIterations:0,denoiseEnabled:!1},light:{position:t.clone(),color:n.lightColor,intensity:n.lightIntensity,size:n.lightSize,enabled:n.directLightEnabled},gi:{enabled:n.indirectLightEnabled,intensity:n.giIntensity,skyColor:n.skyColor,skyIntensity:n.skyIntensity},ao:{enabled:n.ambientLightEnabled,distance:n.ambientDistance,intensity:n.aoIntensity,exponent:n.aoExponent,samples:n.aoSamples},timeoutProtection:{safeMode:n.safeMode}};let c;try{c=await new eT(this.renderer,l).bake(this.scene,{onFrame:d=>{var g;const f=this.bakeGroups[d.groupIndex];f&&f.composite.refresh(),(d.bounceSamples%30===0||d.done)&&this.diag.snap(`bake RAF samples=${d.bounceSamples}/${d.targetSamples} done=${d.done}`),(g=this.onProgress)==null||g.call(this,d)}})}finally{o&&this.scene.remove(o)}this.bakeResult=c,this.bakeGroups=[],this.meshToGroup.clear();for(let h=0;h<c.groups.length;h++){const d=c.groups[h],f=fg(this.renderer,{direct:d.lightmapper.textures.direct,indirect:d.lightmapper.textures.indirect,ao:d.aoMapper.texture},d.resolution,{directIntensity:n.directIntensity,giIntensity:n.giIntensity,aoEnabled:n.ambientLightEnabled,aoIntensity:n.aoIntensity,aoExponent:n.aoExponent}),g={atlasIdx:h,meshes:[...d.meshes],positionTexture:d.textures.position,normalTexture:d.textures.normal,atlasDispose:()=>f.dispose(),lightmapper:d.lightmapper,aoMapper:d.aoMapper,composite:f,refinement:null};this.bakeGroups.push(g);for(const x of g.meshes)this.meshToGroup.set(x,g)}this.matTexDispose=()=>c.dispose(),this.diag.snap("after baker.bake() return, before applyRenderMode"),this.firstPostBakeRender=!0}tick(){if(!this.bakeGroups.length)return null;let e=!0,t=1/0;const n=[];for(const s of this.bakeGroups){const r=s.lightmapper.render(),o=s.aoMapper.render();(!r.done||!o.done)&&(e=!1);const a=Math.min(r.samples,o.samples);a<t&&(t=a),n.push(a)}if(Number.isFinite(t)||(t=0),!e)for(const s of this.bakeGroups)s.composite.refresh();return{active:!e,allDone:e,minSamples:t,perAtlasSamples:n}}refreshAllComposites(e){for(const t of this.bakeGroups)t.composite.refresh(e)}async runAOOnly(e){if(!this.bakeGroups.length||!this.bakeResult)return;await this.bakeResult.rebakeAO(e);const t=this.bakeResult.groups;for(let n=0;n<this.bakeGroups.length;n++){const s=this.bakeGroups[n],r=t[n];!r||(s.aoMapper=r.aoMapper,s.composite.refresh({aoTex:r.aoMapper.texture}))}}async runRefinement(e,t,n){var s;if(!!this.bakeGroups.length)for(let r=0;r<this.bakeGroups.length;r++){const o=this.bakeGroups[r];(s=o.refinement)==null||s.dispose(),o.refinement=await lh(this.renderer,o.composite.texture,o.positionTexture,t,e,a=>n(r,a))}}clearRefinement(){var e;for(const t of this.bakeGroups)(e=t.refinement)==null||e.dispose(),t.refinement=null}}const Rp={type:"change"},Bc={type:"start"},Cp={type:"end"},ka=new Fr,Pp=new Zn,H1=Math.cos(70*fm.DEG2RAD);class G1 extends Rs{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new R,this.cursor=new R,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ps.ROTATE,MIDDLE:Ps.DOLLY,RIGHT:Ps.PAN},this.touches={ONE:Ls.ROTATE,TWO:Ls.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(F){F.addEventListener("keydown",Ie),this._domElementKeyEvents=F},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Ie),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Rp),n.update(),r=s.NONE},this.update=function(){const F=new R,oe=new Bt().setFromUnitVectors(e.up,new R(0,1,0)),he=oe.clone().invert(),Re=new R,D=new Bt,re=new R,ie=2*Math.PI;return function(Ce=null){const Je=n.object.position;F.copy(Je).sub(n.target),F.applyQuaternion(oe),a.setFromVector3(F),n.autoRotate&&r===s.NONE&&N(y(Ce)),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let Ke=n.minAzimuthAngle,ft=n.maxAzimuthAngle;isFinite(Ke)&&isFinite(ft)&&(Ke<-Math.PI?Ke+=ie:Ke>Math.PI&&(Ke-=ie),ft<-Math.PI?ft+=ie:ft>Math.PI&&(ft-=ie),Ke<=ft?a.theta=Math.max(Ke,Math.min(ft,a.theta)):a.theta=a.theta>(Ke+ft)/2?Math.max(Ke,a.theta):Math.min(ft,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&w||n.object.isOrthographicCamera?a.radius=Z(a.radius):a.radius=Z(a.radius*c),F.setFromSpherical(a),F.applyQuaternion(he),Je.copy(n.target).add(F),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0));let Jt=!1;if(n.zoomToCursor&&w){let et=null;if(n.object.isPerspectiveCamera){const Lt=F.length();et=Z(Lt*c);const ln=Lt-et;n.object.position.addScaledVector(b,ln),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const Lt=new R(S.x,S.y,0);Lt.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),Jt=!0;const ln=new R(S.x,S.y,0);ln.unproject(n.object),n.object.position.sub(ln).add(Lt),n.object.updateMatrixWorld(),et=F.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;et!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(et).add(n.object.position):(ka.origin.copy(n.object.position),ka.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(ka.direction))<H1?e.lookAt(n.target):(Pp.setFromNormalAndCoplanarPoint(n.object.up,n.target),ka.intersectPlane(Pp,n.target))))}else n.object.isOrthographicCamera&&(Jt=c!==1,Jt&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix()));return c=1,w=!1,Jt||Re.distanceToSquared(n.object.position)>o||8*(1-D.dot(n.object.quaternion))>o||re.distanceToSquared(n.target)>0?(n.dispatchEvent(Rp),Re.copy(n.object.position),D.copy(n.object.quaternion),re.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",nt),n.domElement.removeEventListener("pointerdown",L),n.domElement.removeEventListener("pointercancel",X),n.domElement.removeEventListener("wheel",se),n.domElement.removeEventListener("pointermove",T),n.domElement.removeEventListener("pointerup",X),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Ie),n._domElementKeyEvents=null)};const n=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=s.NONE;const o=1e-6,a=new _f,l=new _f;let c=1;const u=new R,h=new ye,d=new ye,f=new ye,g=new ye,x=new ye,m=new ye,p=new ye,v=new ye,_=new ye,b=new R,S=new ye;let w=!1;const M=[],A={};let U=!1;function y(F){return F!==null?2*Math.PI/60*n.autoRotateSpeed*F:2*Math.PI/60/60*n.autoRotateSpeed}function E(F){const oe=Math.abs(F*.01);return Math.pow(.95,n.zoomSpeed*oe)}function N(F){l.theta-=F}function B(F){l.phi-=F}const P=function(){const F=new R;return function(he,Re){F.setFromMatrixColumn(Re,0),F.multiplyScalar(-he),u.add(F)}}(),O=function(){const F=new R;return function(he,Re){n.screenSpacePanning===!0?F.setFromMatrixColumn(Re,1):(F.setFromMatrixColumn(Re,0),F.crossVectors(n.object.up,F)),F.multiplyScalar(he),u.add(F)}}(),k=function(){const F=new R;return function(he,Re){const D=n.domElement;if(n.object.isPerspectiveCamera){const re=n.object.position;F.copy(re).sub(n.target);let ie=F.length();ie*=Math.tan(n.object.fov/2*Math.PI/180),P(2*he*ie/D.clientHeight,n.object.matrix),O(2*Re*ie/D.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(P(he*(n.object.right-n.object.left)/n.object.zoom/D.clientWidth,n.object.matrix),O(Re*(n.object.top-n.object.bottom)/n.object.zoom/D.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function V(F){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=F:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function q(F){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=F:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function H(F,oe){if(!n.zoomToCursor)return;w=!0;const he=n.domElement.getBoundingClientRect(),Re=F-he.left,D=oe-he.top,re=he.width,ie=he.height;S.x=Re/re*2-1,S.y=-(D/ie)*2+1,b.set(S.x,S.y,1).unproject(n.object).sub(n.object.position).normalize()}function Z(F){return Math.max(n.minDistance,Math.min(n.maxDistance,F))}function Q(F){h.set(F.clientX,F.clientY)}function ae(F){H(F.clientX,F.clientX),p.set(F.clientX,F.clientY)}function pe(F){g.set(F.clientX,F.clientY)}function W(F){d.set(F.clientX,F.clientY),f.subVectors(d,h).multiplyScalar(n.rotateSpeed);const oe=n.domElement;N(2*Math.PI*f.x/oe.clientHeight),B(2*Math.PI*f.y/oe.clientHeight),h.copy(d),n.update()}function J(F){v.set(F.clientX,F.clientY),_.subVectors(v,p),_.y>0?V(E(_.y)):_.y<0&&q(E(_.y)),p.copy(v),n.update()}function ce(F){x.set(F.clientX,F.clientY),m.subVectors(x,g).multiplyScalar(n.panSpeed),k(m.x,m.y),g.copy(x),n.update()}function me(F){H(F.clientX,F.clientY),F.deltaY<0?q(E(F.deltaY)):F.deltaY>0&&V(E(F.deltaY)),n.update()}function ve(F){let oe=!1;switch(F.code){case n.keys.UP:F.ctrlKey||F.metaKey||F.shiftKey?B(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):k(0,n.keyPanSpeed),oe=!0;break;case n.keys.BOTTOM:F.ctrlKey||F.metaKey||F.shiftKey?B(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):k(0,-n.keyPanSpeed),oe=!0;break;case n.keys.LEFT:F.ctrlKey||F.metaKey||F.shiftKey?N(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):k(n.keyPanSpeed,0),oe=!0;break;case n.keys.RIGHT:F.ctrlKey||F.metaKey||F.shiftKey?N(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):k(-n.keyPanSpeed,0),oe=!0;break}oe&&(F.preventDefault(),n.update())}function fe(F){if(M.length===1)h.set(F.pageX,F.pageY);else{const oe=ge(F),he=.5*(F.pageX+oe.x),Re=.5*(F.pageY+oe.y);h.set(he,Re)}}function Be(F){if(M.length===1)g.set(F.pageX,F.pageY);else{const oe=ge(F),he=.5*(F.pageX+oe.x),Re=.5*(F.pageY+oe.y);g.set(he,Re)}}function Pe(F){const oe=ge(F),he=F.pageX-oe.x,Re=F.pageY-oe.y,D=Math.sqrt(he*he+Re*Re);p.set(0,D)}function z(F){n.enableZoom&&Pe(F),n.enablePan&&Be(F)}function Pt(F){n.enableZoom&&Pe(F),n.enableRotate&&fe(F)}function Me(F){if(M.length==1)d.set(F.pageX,F.pageY);else{const he=ge(F),Re=.5*(F.pageX+he.x),D=.5*(F.pageY+he.y);d.set(Re,D)}f.subVectors(d,h).multiplyScalar(n.rotateSpeed);const oe=n.domElement;N(2*Math.PI*f.x/oe.clientHeight),B(2*Math.PI*f.y/oe.clientHeight),h.copy(d)}function Le(F){if(M.length===1)x.set(F.pageX,F.pageY);else{const oe=ge(F),he=.5*(F.pageX+oe.x),Re=.5*(F.pageY+oe.y);x.set(he,Re)}m.subVectors(x,g).multiplyScalar(n.panSpeed),k(m.x,m.y),g.copy(x)}function be(F){const oe=ge(F),he=F.pageX-oe.x,Re=F.pageY-oe.y,D=Math.sqrt(he*he+Re*Re);v.set(0,D),_.set(0,Math.pow(v.y/p.y,n.zoomSpeed)),V(_.y),p.copy(v);const re=(F.pageX+oe.x)*.5,ie=(F.pageY+oe.y)*.5;H(re,ie)}function ot(F){n.enableZoom&&be(F),n.enablePan&&Le(F)}function Ue(F){n.enableZoom&&be(F),n.enableRotate&&Me(F)}function L(F){n.enabled!==!1&&(M.length===0&&(n.domElement.setPointerCapture(F.pointerId),n.domElement.addEventListener("pointermove",T),n.domElement.addEventListener("pointerup",X)),qe(F),F.pointerType==="touch"?ze(F):te(F))}function T(F){n.enabled!==!1&&(F.pointerType==="touch"?ne(F):ee(F))}function X(F){switch(Fe(F),M.length){case 0:n.domElement.releasePointerCapture(F.pointerId),n.domElement.removeEventListener("pointermove",T),n.domElement.removeEventListener("pointerup",X),n.dispatchEvent(Cp),r=s.NONE;break;case 1:const oe=M[0],he=A[oe];ze({pointerId:oe,pageX:he.x,pageY:he.y});break}}function te(F){let oe;switch(F.button){case 0:oe=n.mouseButtons.LEFT;break;case 1:oe=n.mouseButtons.MIDDLE;break;case 2:oe=n.mouseButtons.RIGHT;break;default:oe=-1}switch(oe){case Ps.DOLLY:if(n.enableZoom===!1)return;ae(F),r=s.DOLLY;break;case Ps.ROTATE:if(F.ctrlKey||F.metaKey||F.shiftKey){if(n.enablePan===!1)return;pe(F),r=s.PAN}else{if(n.enableRotate===!1)return;Q(F),r=s.ROTATE}break;case Ps.PAN:if(F.ctrlKey||F.metaKey||F.shiftKey){if(n.enableRotate===!1)return;Q(F),r=s.ROTATE}else{if(n.enablePan===!1)return;pe(F),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(Bc)}function ee(F){switch(r){case s.ROTATE:if(n.enableRotate===!1)return;W(F);break;case s.DOLLY:if(n.enableZoom===!1)return;J(F);break;case s.PAN:if(n.enablePan===!1)return;ce(F);break}}function se(F){n.enabled===!1||n.enableZoom===!1||r!==s.NONE||(F.preventDefault(),n.dispatchEvent(Bc),me(Se(F)),n.dispatchEvent(Cp))}function Se(F){const oe=F.deltaMode,he={clientX:F.clientX,clientY:F.clientY,deltaY:F.deltaY};switch(oe){case 1:he.deltaY*=16;break;case 2:he.deltaY*=100;break}return F.ctrlKey&&!U&&(he.deltaY*=10),he}function ue(F){F.key==="Control"&&(U=!0,n.domElement.getRootNode().addEventListener("keyup",xe,{passive:!0,capture:!0}))}function xe(F){F.key==="Control"&&(U=!1,n.domElement.getRootNode().removeEventListener("keyup",xe,{passive:!0,capture:!0}))}function Ie(F){n.enabled===!1||n.enablePan===!1||ve(F)}function ze(F){switch(Ae(F),M.length){case 1:switch(n.touches.ONE){case Ls.ROTATE:if(n.enableRotate===!1)return;fe(F),r=s.TOUCH_ROTATE;break;case Ls.PAN:if(n.enablePan===!1)return;Be(F),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(n.touches.TWO){case Ls.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;z(F),r=s.TOUCH_DOLLY_PAN;break;case Ls.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Pt(F),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(Bc)}function ne(F){switch(Ae(F),r){case s.TOUCH_ROTATE:if(n.enableRotate===!1)return;Me(F),n.update();break;case s.TOUCH_PAN:if(n.enablePan===!1)return;Le(F),n.update();break;case s.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;ot(F),n.update();break;case s.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Ue(F),n.update();break;default:r=s.NONE}}function nt(F){n.enabled!==!1&&F.preventDefault()}function qe(F){M.push(F.pointerId)}function Fe(F){delete A[F.pointerId];for(let oe=0;oe<M.length;oe++)if(M[oe]==F.pointerId){M.splice(oe,1);return}}function Ae(F){let oe=A[F.pointerId];oe===void 0&&(oe=new ye,A[F.pointerId]=oe),oe.set(F.pageX,F.pageY)}function ge(F){const oe=F.pointerId===M[0]?M[1]:M[0];return A[oe]}n.domElement.addEventListener("contextmenu",nt),n.domElement.addEventListener("pointerdown",L),n.domElement.addEventListener("pointercancel",X),n.domElement.addEventListener("wheel",se,{passive:!1}),n.domElement.getRootNode().addEventListener("keydown",ue,{passive:!0,capture:!0}),this.update()}}const hs=new Bm,on=new R,$i=new R,Mt=new Bt,Lp={X:new R(1,0,0),Y:new R(0,1,0),Z:new R(0,0,1)},kc={type:"change"},Ip={type:"mouseDown"},Dp={type:"mouseUp",mode:null},Up={type:"objectChange"};class V1 extends Xe{constructor(e,t){super(),t===void 0&&(console.warn('THREE.TransformControls: The second parameter "domElement" is now mandatory.'),t=document),this.isTransformControls=!0,this.visible=!1,this.domElement=t,this.domElement.style.touchAction="none";const n=new Y1;this._gizmo=n,this.add(n);const s=new K1;this._plane=s,this.add(s);const r=this;function o(v,_){let b=_;Object.defineProperty(r,v,{get:function(){return b!==void 0?b:_},set:function(S){b!==S&&(b=S,s[v]=S,n[v]=S,r.dispatchEvent({type:v+"-changed",value:S}),r.dispatchEvent(kc))}}),r[v]=_,s[v]=_,n[v]=_}o("camera",e),o("object",void 0),o("enabled",!0),o("axis",null),o("mode","translate"),o("translationSnap",null),o("rotationSnap",null),o("scaleSnap",null),o("space","world"),o("size",1),o("dragging",!1),o("showX",!0),o("showY",!0),o("showZ",!0);const a=new R,l=new R,c=new Bt,u=new Bt,h=new R,d=new Bt,f=new R,g=new R,x=new R,m=0,p=new R;o("worldPosition",a),o("worldPositionStart",l),o("worldQuaternion",c),o("worldQuaternionStart",u),o("cameraPosition",h),o("cameraQuaternion",d),o("pointStart",f),o("pointEnd",g),o("rotationAxis",x),o("rotationAngle",m),o("eye",p),this._offset=new R,this._startNorm=new R,this._endNorm=new R,this._cameraScale=new R,this._parentPosition=new R,this._parentQuaternion=new Bt,this._parentQuaternionInv=new Bt,this._parentScale=new R,this._worldScaleStart=new R,this._worldQuaternionInv=new Bt,this._worldScale=new R,this._positionStart=new R,this._quaternionStart=new Bt,this._scaleStart=new R,this._getPointer=W1.bind(this),this._onPointerDown=q1.bind(this),this._onPointerHover=X1.bind(this),this._onPointerMove=j1.bind(this),this._onPointerUp=$1.bind(this),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointermove",this._onPointerHover),this.domElement.addEventListener("pointerup",this._onPointerUp)}updateMatrixWorld(){this.object!==void 0&&(this.object.updateMatrixWorld(),this.object.parent===null?console.error("TransformControls: The attached 3D object must be a part of the scene graph."):this.object.parent.matrixWorld.decompose(this._parentPosition,this._parentQuaternion,this._parentScale),this.object.matrixWorld.decompose(this.worldPosition,this.worldQuaternion,this._worldScale),this._parentQuaternionInv.copy(this._parentQuaternion).invert(),this._worldQuaternionInv.copy(this.worldQuaternion).invert()),this.camera.updateMatrixWorld(),this.camera.matrixWorld.decompose(this.cameraPosition,this.cameraQuaternion,this._cameraScale),this.camera.isOrthographicCamera?this.camera.getWorldDirection(this.eye).negate():this.eye.copy(this.cameraPosition).sub(this.worldPosition).normalize(),super.updateMatrixWorld(this)}pointerHover(e){if(this.object===void 0||this.dragging===!0)return;hs.setFromCamera(e,this.camera);const t=zc(this._gizmo.picker[this.mode],hs);t?this.axis=t.object.name:this.axis=null}pointerDown(e){if(!(this.object===void 0||this.dragging===!0||e.button!==0)&&this.axis!==null){hs.setFromCamera(e,this.camera);const t=zc(this._plane,hs,!0);t&&(this.object.updateMatrixWorld(),this.object.parent.updateMatrixWorld(),this._positionStart.copy(this.object.position),this._quaternionStart.copy(this.object.quaternion),this._scaleStart.copy(this.object.scale),this.object.matrixWorld.decompose(this.worldPositionStart,this.worldQuaternionStart,this._worldScaleStart),this.pointStart.copy(t.point).sub(this.worldPositionStart)),this.dragging=!0,Ip.mode=this.mode,this.dispatchEvent(Ip)}}pointerMove(e){const t=this.axis,n=this.mode,s=this.object;let r=this.space;if(n==="scale"?r="local":(t==="E"||t==="XYZE"||t==="XYZ")&&(r="world"),s===void 0||t===null||this.dragging===!1||e.button!==-1)return;hs.setFromCamera(e,this.camera);const o=zc(this._plane,hs,!0);if(!!o){if(this.pointEnd.copy(o.point).sub(this.worldPositionStart),n==="translate")this._offset.copy(this.pointEnd).sub(this.pointStart),r==="local"&&t!=="XYZ"&&this._offset.applyQuaternion(this._worldQuaternionInv),t.indexOf("X")===-1&&(this._offset.x=0),t.indexOf("Y")===-1&&(this._offset.y=0),t.indexOf("Z")===-1&&(this._offset.z=0),r==="local"&&t!=="XYZ"?this._offset.applyQuaternion(this._quaternionStart).divide(this._parentScale):this._offset.applyQuaternion(this._parentQuaternionInv).divide(this._parentScale),s.position.copy(this._offset).add(this._positionStart),this.translationSnap&&(r==="local"&&(s.position.applyQuaternion(Mt.copy(this._quaternionStart).invert()),t.search("X")!==-1&&(s.position.x=Math.round(s.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(s.position.y=Math.round(s.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(s.position.z=Math.round(s.position.z/this.translationSnap)*this.translationSnap),s.position.applyQuaternion(this._quaternionStart)),r==="world"&&(s.parent&&s.position.add(on.setFromMatrixPosition(s.parent.matrixWorld)),t.search("X")!==-1&&(s.position.x=Math.round(s.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(s.position.y=Math.round(s.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(s.position.z=Math.round(s.position.z/this.translationSnap)*this.translationSnap),s.parent&&s.position.sub(on.setFromMatrixPosition(s.parent.matrixWorld))));else if(n==="scale"){if(t.search("XYZ")!==-1){let a=this.pointEnd.length()/this.pointStart.length();this.pointEnd.dot(this.pointStart)<0&&(a*=-1),$i.set(a,a,a)}else on.copy(this.pointStart),$i.copy(this.pointEnd),on.applyQuaternion(this._worldQuaternionInv),$i.applyQuaternion(this._worldQuaternionInv),$i.divide(on),t.search("X")===-1&&($i.x=1),t.search("Y")===-1&&($i.y=1),t.search("Z")===-1&&($i.z=1);s.scale.copy(this._scaleStart).multiply($i),this.scaleSnap&&(t.search("X")!==-1&&(s.scale.x=Math.round(s.scale.x/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Y")!==-1&&(s.scale.y=Math.round(s.scale.y/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Z")!==-1&&(s.scale.z=Math.round(s.scale.z/this.scaleSnap)*this.scaleSnap||this.scaleSnap))}else if(n==="rotate"){this._offset.copy(this.pointEnd).sub(this.pointStart);const a=20/this.worldPosition.distanceTo(on.setFromMatrixPosition(this.camera.matrixWorld));let l=!1;t==="XYZE"?(this.rotationAxis.copy(this._offset).cross(this.eye).normalize(),this.rotationAngle=this._offset.dot(on.copy(this.rotationAxis).cross(this.eye))*a):(t==="X"||t==="Y"||t==="Z")&&(this.rotationAxis.copy(Lp[t]),on.copy(Lp[t]),r==="local"&&on.applyQuaternion(this.worldQuaternion),on.cross(this.eye),on.length()===0?l=!0:this.rotationAngle=this._offset.dot(on.normalize())*a),(t==="E"||l)&&(this.rotationAxis.copy(this.eye),this.rotationAngle=this.pointEnd.angleTo(this.pointStart),this._startNorm.copy(this.pointStart).normalize(),this._endNorm.copy(this.pointEnd).normalize(),this.rotationAngle*=this._endNorm.cross(this._startNorm).dot(this.eye)<0?1:-1),this.rotationSnap&&(this.rotationAngle=Math.round(this.rotationAngle/this.rotationSnap)*this.rotationSnap),r==="local"&&t!=="E"&&t!=="XYZE"?(s.quaternion.copy(this._quaternionStart),s.quaternion.multiply(Mt.setFromAxisAngle(this.rotationAxis,this.rotationAngle)).normalize()):(this.rotationAxis.applyQuaternion(this._parentQuaternionInv),s.quaternion.copy(Mt.setFromAxisAngle(this.rotationAxis,this.rotationAngle)),s.quaternion.multiply(this._quaternionStart).normalize())}this.dispatchEvent(kc),this.dispatchEvent(Up)}}pointerUp(e){e.button===0&&(this.dragging&&this.axis!==null&&(Dp.mode=this.mode,this.dispatchEvent(Dp)),this.dragging=!1,this.axis=null)}dispose(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerHover),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.traverse(function(e){e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()})}attach(e){return this.object=e,this.visible=!0,this}detach(){return this.object=void 0,this.visible=!1,this.axis=null,this}reset(){!this.enabled||this.dragging&&(this.object.position.copy(this._positionStart),this.object.quaternion.copy(this._quaternionStart),this.object.scale.copy(this._scaleStart),this.dispatchEvent(kc),this.dispatchEvent(Up),this.pointStart.copy(this.pointEnd))}getRaycaster(){return hs}getMode(){return this.mode}setMode(e){this.mode=e}setTranslationSnap(e){this.translationSnap=e}setRotationSnap(e){this.rotationSnap=e}setScaleSnap(e){this.scaleSnap=e}setSize(e){this.size=e}setSpace(e){this.space=e}}function W1(i){if(this.domElement.ownerDocument.pointerLockElement)return{x:0,y:0,button:i.button};{const e=this.domElement.getBoundingClientRect();return{x:(i.clientX-e.left)/e.width*2-1,y:-(i.clientY-e.top)/e.height*2+1,button:i.button}}}function X1(i){if(!!this.enabled)switch(i.pointerType){case"mouse":case"pen":this.pointerHover(this._getPointer(i));break}}function q1(i){!this.enabled||(document.pointerLockElement||this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.pointerHover(this._getPointer(i)),this.pointerDown(this._getPointer(i)))}function j1(i){!this.enabled||this.pointerMove(this._getPointer(i))}function $1(i){!this.enabled||(this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.pointerUp(this._getPointer(i)))}function zc(i,e,t){const n=e.intersectObject(i,!0);for(let s=0;s<n.length;s++)if(n[s].object.visible||t)return n[s];return!1}const za=new ko,pt=new R(0,1,0),Np=new R(0,0,0),Fp=new De,Ha=new Bt,el=new Bt,di=new R,Op=new De,vo=new R(1,0,0),ps=new R(0,1,0),yo=new R(0,0,1),Ga=new R,ho=new R,fo=new R;class Y1 extends Xe{constructor(){super(),this.isTransformControlsGizmo=!0,this.type="TransformControlsGizmo";const e=new pi({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),t=new Xu({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),n=e.clone();n.opacity=.15;const s=t.clone();s.opacity=.5;const r=e.clone();r.color.setHex(16711680);const o=e.clone();o.color.setHex(65280);const a=e.clone();a.color.setHex(255);const l=e.clone();l.color.setHex(16711680),l.opacity=.5;const c=e.clone();c.color.setHex(65280),c.opacity=.5;const u=e.clone();u.color.setHex(255),u.opacity=.5;const h=e.clone();h.opacity=.25;const d=e.clone();d.color.setHex(16776960),d.opacity=.25,e.clone().color.setHex(16776960);const g=e.clone();g.color.setHex(7895160);const x=new Gt(0,.04,.1,12);x.translate(0,.05,0);const m=new de(.08,.08,.08);m.translate(0,.04,0);const p=new Kt;p.setAttribute("position",new _t([0,0,0,1,0,0],3));const v=new Gt(.0075,.0075,.5,3);v.translate(0,.25,0);function _(O,k){const V=new Ji(O,.0075,3,64,k*Math.PI*2);return V.rotateY(Math.PI/2),V.rotateX(Math.PI/2),V}function b(){const O=new Kt;return O.setAttribute("position",new _t([0,0,0,1,1,1],3)),O}const S={X:[[new j(x,r),[.5,0,0],[0,0,-Math.PI/2]],[new j(x,r),[-.5,0,0],[0,0,Math.PI/2]],[new j(v,r),[0,0,0],[0,0,-Math.PI/2]]],Y:[[new j(x,o),[0,.5,0]],[new j(x,o),[0,-.5,0],[Math.PI,0,0]],[new j(v,o)]],Z:[[new j(x,a),[0,0,.5],[Math.PI/2,0,0]],[new j(x,a),[0,0,-.5],[-Math.PI/2,0,0]],[new j(v,a),null,[Math.PI/2,0,0]]],XYZ:[[new j(new xr(.1,0),h.clone()),[0,0,0]]],XY:[[new j(new de(.15,.15,.01),u.clone()),[.15,.15,0]]],YZ:[[new j(new de(.15,.15,.01),l.clone()),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new j(new de(.15,.15,.01),c.clone()),[.15,0,.15],[-Math.PI/2,0,0]]]},w={X:[[new j(new Gt(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new j(new Gt(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new j(new Gt(.2,0,.6,4),n),[0,.3,0]],[new j(new Gt(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new j(new Gt(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new j(new Gt(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XYZ:[[new j(new xr(.2,0),n)]],XY:[[new j(new de(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new j(new de(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new j(new de(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]]},M={START:[[new j(new xr(.01,2),s),null,null,null,"helper"]],END:[[new j(new xr(.01,2),s),null,null,null,"helper"]],DELTA:[[new Kn(b(),s),null,null,null,"helper"]],X:[[new Kn(p,s.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new Kn(p,s.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new Kn(p,s.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]},A={XYZE:[[new j(_(.5,1),g),null,[0,Math.PI/2,0]]],X:[[new j(_(.5,.5),r)]],Y:[[new j(_(.5,.5),o),null,[0,0,-Math.PI/2]]],Z:[[new j(_(.5,.5),a),null,[0,Math.PI/2,0]]],E:[[new j(_(.75,1),d),null,[0,Math.PI/2,0]]]},U={AXIS:[[new Kn(p,s.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]]},y={XYZE:[[new j(new bi(.25,10,8),n)]],X:[[new j(new Ji(.5,.1,4,24),n),[0,0,0],[0,-Math.PI/2,-Math.PI/2]]],Y:[[new j(new Ji(.5,.1,4,24),n),[0,0,0],[Math.PI/2,0,0]]],Z:[[new j(new Ji(.5,.1,4,24),n),[0,0,0],[0,0,-Math.PI/2]]],E:[[new j(new Ji(.75,.1,2,24),n)]]},E={X:[[new j(m,r),[.5,0,0],[0,0,-Math.PI/2]],[new j(v,r),[0,0,0],[0,0,-Math.PI/2]],[new j(m,r),[-.5,0,0],[0,0,Math.PI/2]]],Y:[[new j(m,o),[0,.5,0]],[new j(v,o)],[new j(m,o),[0,-.5,0],[0,0,Math.PI]]],Z:[[new j(m,a),[0,0,.5],[Math.PI/2,0,0]],[new j(v,a),[0,0,0],[Math.PI/2,0,0]],[new j(m,a),[0,0,-.5],[-Math.PI/2,0,0]]],XY:[[new j(new de(.15,.15,.01),u),[.15,.15,0]]],YZ:[[new j(new de(.15,.15,.01),l),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new j(new de(.15,.15,.01),c),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new j(new de(.1,.1,.1),h.clone())]]},N={X:[[new j(new Gt(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new j(new Gt(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new j(new Gt(.2,0,.6,4),n),[0,.3,0]],[new j(new Gt(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new j(new Gt(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new j(new Gt(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XY:[[new j(new de(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new j(new de(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new j(new de(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new j(new de(.2,.2,.2),n),[0,0,0]]]},B={X:[[new Kn(p,s.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new Kn(p,s.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new Kn(p,s.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]};function P(O){const k=new Xe;for(const V in O)for(let q=O[V].length;q--;){const H=O[V][q][0].clone(),Z=O[V][q][1],Q=O[V][q][2],ae=O[V][q][3],pe=O[V][q][4];H.name=V,H.tag=pe,Z&&H.position.set(Z[0],Z[1],Z[2]),Q&&H.rotation.set(Q[0],Q[1],Q[2]),ae&&H.scale.set(ae[0],ae[1],ae[2]),H.updateMatrix();const W=H.geometry.clone();W.applyMatrix4(H.matrix),H.geometry=W,H.renderOrder=1/0,H.position.set(0,0,0),H.rotation.set(0,0,0),H.scale.set(1,1,1),k.add(H)}return k}this.gizmo={},this.picker={},this.helper={},this.add(this.gizmo.translate=P(S)),this.add(this.gizmo.rotate=P(A)),this.add(this.gizmo.scale=P(E)),this.add(this.picker.translate=P(w)),this.add(this.picker.rotate=P(y)),this.add(this.picker.scale=P(N)),this.add(this.helper.translate=P(M)),this.add(this.helper.rotate=P(U)),this.add(this.helper.scale=P(B)),this.picker.translate.visible=!1,this.picker.rotate.visible=!1,this.picker.scale.visible=!1}updateMatrixWorld(e){const n=(this.mode==="scale"?"local":this.space)==="local"?this.worldQuaternion:el;this.gizmo.translate.visible=this.mode==="translate",this.gizmo.rotate.visible=this.mode==="rotate",this.gizmo.scale.visible=this.mode==="scale",this.helper.translate.visible=this.mode==="translate",this.helper.rotate.visible=this.mode==="rotate",this.helper.scale.visible=this.mode==="scale";let s=[];s=s.concat(this.picker[this.mode].children),s=s.concat(this.gizmo[this.mode].children),s=s.concat(this.helper[this.mode].children);for(let r=0;r<s.length;r++){const o=s[r];o.visible=!0,o.rotation.set(0,0,0),o.position.copy(this.worldPosition);let a;if(this.camera.isOrthographicCamera?a=(this.camera.top-this.camera.bottom)/this.camera.zoom:a=this.worldPosition.distanceTo(this.cameraPosition)*Math.min(1.9*Math.tan(Math.PI*this.camera.fov/360)/this.camera.zoom,7),o.scale.set(1,1,1).multiplyScalar(a*this.size/4),o.tag==="helper"){o.visible=!1,o.name==="AXIS"?(o.visible=!!this.axis,this.axis==="X"&&(Mt.setFromEuler(za.set(0,0,0)),o.quaternion.copy(n).multiply(Mt),Math.abs(pt.copy(vo).applyQuaternion(n).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Y"&&(Mt.setFromEuler(za.set(0,0,Math.PI/2)),o.quaternion.copy(n).multiply(Mt),Math.abs(pt.copy(ps).applyQuaternion(n).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Z"&&(Mt.setFromEuler(za.set(0,Math.PI/2,0)),o.quaternion.copy(n).multiply(Mt),Math.abs(pt.copy(yo).applyQuaternion(n).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="XYZE"&&(Mt.setFromEuler(za.set(0,Math.PI/2,0)),pt.copy(this.rotationAxis),o.quaternion.setFromRotationMatrix(Fp.lookAt(Np,pt,ps)),o.quaternion.multiply(Mt),o.visible=this.dragging),this.axis==="E"&&(o.visible=!1)):o.name==="START"?(o.position.copy(this.worldPositionStart),o.visible=this.dragging):o.name==="END"?(o.position.copy(this.worldPosition),o.visible=this.dragging):o.name==="DELTA"?(o.position.copy(this.worldPositionStart),o.quaternion.copy(this.worldQuaternionStart),on.set(1e-10,1e-10,1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1),on.applyQuaternion(this.worldQuaternionStart.clone().invert()),o.scale.copy(on),o.visible=this.dragging):(o.quaternion.copy(n),this.dragging?o.position.copy(this.worldPositionStart):o.position.copy(this.worldPosition),this.axis&&(o.visible=this.axis.search(o.name)!==-1));continue}o.quaternion.copy(n),this.mode==="translate"||this.mode==="scale"?(o.name==="X"&&Math.abs(pt.copy(vo).applyQuaternion(n).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Y"&&Math.abs(pt.copy(ps).applyQuaternion(n).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Z"&&Math.abs(pt.copy(yo).applyQuaternion(n).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XY"&&Math.abs(pt.copy(yo).applyQuaternion(n).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="YZ"&&Math.abs(pt.copy(vo).applyQuaternion(n).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XZ"&&Math.abs(pt.copy(ps).applyQuaternion(n).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1)):this.mode==="rotate"&&(Ha.copy(n),pt.copy(this.eye).applyQuaternion(Mt.copy(n).invert()),o.name.search("E")!==-1&&o.quaternion.setFromRotationMatrix(Fp.lookAt(this.eye,Np,ps)),o.name==="X"&&(Mt.setFromAxisAngle(vo,Math.atan2(-pt.y,pt.z)),Mt.multiplyQuaternions(Ha,Mt),o.quaternion.copy(Mt)),o.name==="Y"&&(Mt.setFromAxisAngle(ps,Math.atan2(pt.x,pt.z)),Mt.multiplyQuaternions(Ha,Mt),o.quaternion.copy(Mt)),o.name==="Z"&&(Mt.setFromAxisAngle(yo,Math.atan2(pt.y,pt.x)),Mt.multiplyQuaternions(Ha,Mt),o.quaternion.copy(Mt))),o.visible=o.visible&&(o.name.indexOf("X")===-1||this.showX),o.visible=o.visible&&(o.name.indexOf("Y")===-1||this.showY),o.visible=o.visible&&(o.name.indexOf("Z")===-1||this.showZ),o.visible=o.visible&&(o.name.indexOf("E")===-1||this.showX&&this.showY&&this.showZ),o.material._color=o.material._color||o.material.color.clone(),o.material._opacity=o.material._opacity||o.material.opacity,o.material.color.copy(o.material._color),o.material.opacity=o.material._opacity,this.enabled&&this.axis&&(o.name===this.axis||this.axis.split("").some(function(l){return o.name===l}))&&(o.material.color.setHex(16776960),o.material.opacity=1)}super.updateMatrixWorld(e)}}class K1 extends j{constructor(){super(new Fn(1e5,1e5,2,2),new pi({visible:!1,wireframe:!0,side:dn,transparent:!0,opacity:.1,toneMapped:!1})),this.isTransformControlsPlane=!0,this.type="TransformControlsPlane"}updateMatrixWorld(e){let t=this.space;switch(this.position.copy(this.worldPosition),this.mode==="scale"&&(t="local"),Ga.copy(vo).applyQuaternion(t==="local"?this.worldQuaternion:el),ho.copy(ps).applyQuaternion(t==="local"?this.worldQuaternion:el),fo.copy(yo).applyQuaternion(t==="local"?this.worldQuaternion:el),pt.copy(ho),this.mode){case"translate":case"scale":switch(this.axis){case"X":pt.copy(this.eye).cross(Ga),di.copy(Ga).cross(pt);break;case"Y":pt.copy(this.eye).cross(ho),di.copy(ho).cross(pt);break;case"Z":pt.copy(this.eye).cross(fo),di.copy(fo).cross(pt);break;case"XY":di.copy(fo);break;case"YZ":di.copy(Ga);break;case"XZ":pt.copy(fo),di.copy(ho);break;case"XYZ":case"E":di.set(0,0,0);break}break;case"rotate":default:di.set(0,0,0)}di.length()===0?this.quaternion.copy(this.cameraQuaternion):(Op.lookAt(on.set(0,0,0),di,pt),this.quaternion.setFromRotationMatrix(Op)),super.updateMatrixWorld(e)}}class Z1 extends zr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new nA(t)}),this.register(function(t){return new hA(t)}),this.register(function(t){return new dA(t)}),this.register(function(t){return new fA(t)}),this.register(function(t){return new sA(t)}),this.register(function(t){return new rA(t)}),this.register(function(t){return new oA(t)}),this.register(function(t){return new aA(t)}),this.register(function(t){return new tA(t)}),this.register(function(t){return new lA(t)}),this.register(function(t){return new iA(t)}),this.register(function(t){return new uA(t)}),this.register(function(t){return new cA(t)}),this.register(function(t){return new J1(t)}),this.register(function(t){return new pA(t)}),this.register(function(t){return new mA(t)})}load(e,t,n,s){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=To.extractUrlBase(e);o=To.resolveURL(c,this.path)}else o=To.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Fm(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r;const o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Cg){try{o[Ze.KHR_BINARY_GLTF]=new gA(e)}catch(h){s&&s(h);return}r=JSON.parse(o[Ze.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new CA(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(h){case Ze.KHR_MATERIALS_UNLIT:o[h]=new eA;break;case Ze.KHR_DRACO_MESH_COMPRESSION:o[h]=new _A(r,this.dracoLoader);break;case Ze.KHR_TEXTURE_TRANSFORM:o[h]=new xA;break;case Ze.KHR_MESH_QUANTIZATION:o[h]=new vA;break;default:d.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,s)}parseAsync(e,t){const n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}}function Q1(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const Ze={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class J1{constructor(e){this.parser=e,this.name=Ze.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let s=t.cache.get(n);if(s)return s;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const u=new Te(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],Yt);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Cl(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Hr(u),c.distance=h;break;case"spot":c=new Om(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Qi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class eA{constructor(){this.name=Ze.KHR_MATERIALS_UNLIT}getMaterialType(){return pi}extendParams(e,t,n){const s=[];e.color=new Te(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Yt),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,Et))}return Promise.all(s)}}class tA{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class nA{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mi}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ye(a,a)}return Promise.all(r)}}class iA{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mi}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class sA{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mi}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Te(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Yt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Et)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class rA{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mi}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class oA{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mi}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Te().setRGB(a[0],a[1],a[2],Yt),Promise.all(r)}}class aA{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mi}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class lA{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mi}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Te().setRGB(a[0],a[1],a[2],Yt),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Et)),Promise.all(r)}}class cA{constructor(e){this.parser=e,this.name=Ze.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mi}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class uA{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mi}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class hA{constructor(e){this.parser=e,this.name=Ze.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class dA{constructor(e){this.parser=e,this.name=Ze.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class fA{constructor(e){this.parser=e,this.name=Ze.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class pA{constructor(e){this.name=Ze.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=s.byteOffset||0,c=s.byteLength||0,u=s.count,h=s.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,d,s.mode,s.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(f),u,h,d,s.mode,s.filter),f})})}else return null}}class mA{constructor(e){this.name=Ze.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=t.meshes[n.mesh];for(const c of s.primitives)if(c.mode!==zn.TRIANGLES&&c.mode!==zn.TRIANGLE_STRIP&&c.mode!==zn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],d=c[0].count,f=[];for(const g of h){const x=new De,m=new R,p=new Bt,v=new R(1,1,1),_=new wM(g.geometry,g.material,d);for(let b=0;b<d;b++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,b),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,b),l.SCALE&&v.fromBufferAttribute(l.SCALE,b),_.setMatrixAt(b,x.compose(m,p,v));for(const b in l)if(b==="_COLOR_0"){const S=l[b];_.instanceColor=new su(S.array,S.itemSize,S.normalized)}else b!=="TRANSLATION"&&b!=="ROTATION"&&b!=="SCALE"&&g.geometry.setAttribute(b,l[b]);Xe.prototype.copy.call(_,g),this.parser.assignFinalMaterial(_),f.push(_)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}}const Cg="glTF",po=12,Bp={JSON:1313821514,BIN:5130562};class gA{constructor(e){this.name=Ze.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,po),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Cg)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-po,r=new DataView(e,po);let o=0;for(;o<s;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===Bp.JSON){const c=new Uint8Array(e,po+o,a);this.content=n.decode(c)}else if(l===Bp.BIN){const c=po+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class _A{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ze.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const h=Cu[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=Cu[u]||u.toLowerCase();if(o[u]!==void 0){const d=n.accessors[e.attributes[u]],f=Mr[d.componentType];c[h]=f.name,l[h]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,d){s.decodeDracoFile(u,function(f){for(const g in f.attributes){const x=f.attributes[g],m=l[g];m!==void 0&&(x.normalized=m)}h(f)},a,c,Yt,d)})})}}class xA{constructor(){this.name=Ze.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class vA{constructor(){this.name=Ze.KHR_MESH_QUANTIZATION}}class Pg extends Ho{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=s-t,h=(n-t)/u,d=h*h,f=d*h,g=e*c,x=g-c,m=-2*f+3*d,p=f-d,v=1-m,_=p-d+h;for(let b=0;b!==a;b++){const S=o[x+b+a],w=o[x+b+l]*u,M=o[g+b+a],A=o[g+b]*u;r[b]=v*S+_*w+m*M+p*A}return r}}const yA=new Bt;class bA extends Pg{interpolate_(e,t,n,s){const r=super.interpolate_(e,t,n,s);return yA.fromArray(r).normalize().toArray(r),r}}const zn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Mr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},kp={9728:st,9729:ut,9984:Zc,9985:Xa,9986:mr,9987:Fi},zp={33071:an,33648:ol,10497:Tr},Hc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Cu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Yi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},MA={CUBICSPLINE:void 0,LINEAR:Rr,STEP:Do},Gc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function SA(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new en({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ni})),i.DefaultMaterial}function ds(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Qi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function wA(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(n){const d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;o.push(d)}if(s){const d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;a.push(d)}if(r){const d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],d=c[2];return n&&(i.morphAttributes.position=u),s&&(i.morphAttributes.normal=h),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function EA(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function TA(i){let e;const t=i.extensions&&i.extensions[Ze.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Vc(t.attributes):e=i.indices+":"+Vc(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Vc(i.targets[n]);return e}function Vc(i){let e="";const t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Pu(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function AA(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const RA=new De;class CA{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Q1,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=!1,r=-1;typeof navigator!="undefined"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,s=navigator.userAgent.indexOf("Firefox")>-1,r=s?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap=="undefined"||n||s&&r<98?this.textureLoader=new HM(this.options.manager):this.textureLoader=new qM(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Fm(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return ds(r,a,s),Qi(a,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const s=n.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())r(u,a.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const s=e(t[n]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ze.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,o){n.load(To.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){const t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const o=Hc[s.type],a=Mr[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new yt(c,o,l))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=Hc[s.type],c=Mr[s.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0;let x,m;if(f&&f!==h){const p=Math.floor(d/f),v="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count;let _=t.cache.get(v);_||(x=new c(a,p*f,s.count*f/u),_=new vM(x,f/u),t.cache.add(v,_)),m=new Vu(_,l,d%f/u,g)}else a===null?x=new c(s.count*l):x=new c(a,d,s.count*l),m=new yt(x,l,g);if(s.sparse!==void 0){const p=Hc.SCALAR,v=Mr[s.sparse.indices.componentType],_=s.sparse.indices.byteOffset||0,b=s.sparse.values.byteOffset||0,S=new v(o[1],_,s.sparse.count*p),w=new c(o[2],b,s.sparse.count*l);a!==null&&(m=new yt(m.array.slice(),m.itemSize,m.normalized));for(let M=0,A=S.length;M<A;M++){const U=S[M];if(m.setX(U,w[M*l]),l>=2&&m.setY(U,w[M*l+1]),l>=3&&m.setZ(U,w[M*l+2]),l>=4&&m.setW(U,w[M*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const d=(r.samplers||{})[o.sampler]||{};return u.magFilter=kp[d.magFilter]||ut,u.minFilter=kp[d.minFilter]||Fi,u.wrapS=zp[d.wrapS]||Tr,u.wrapT=zp[d.wrapT]||Tr,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=s.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(h){c=!0;const d=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(x){const m=new Ht(x);m.needsUpdate=!0,d(m)}),t.load(To.resolveURL(h,r.path),g,void 0,f)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),h.userData.mimeType=o.mimeType||AA(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[Ze.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[Ze.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[Ze.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Dm,_i.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Xu,_i.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return en}loadMaterial(e){const t=this,n=this.json,s=this.extensions,r=n.materials[e];let o;const a={},l=r.extensions||{},c=[];if(l[Ze.KHR_MATERIALS_UNLIT]){const h=s[Ze.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,r,t))}else{const h=r.pbrMetallicRoughness||{};if(a.color=new Te(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const d=h.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Yt),a.opacity=d[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,Et)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=dn);const u=r.alphaMode||Gc.OPAQUE;if(u===Gc.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Gc.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==pi&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new ye(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==pi&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==pi){const h=r.emissiveFactor;a.emissive=new Te().setRGB(h[0],h[1],h[2],Yt)}return r.emissiveTexture!==void 0&&o!==pi&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Et)),Promise.all(c).then(function(){const h=new o(a);return r.name&&(h.name=r.name),Qi(h,r),t.associations.set(h,{materials:e}),r.extensions&&ds(s,h,r),h})}createUniqueName(e){const t=ct.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[Ze.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Hp(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=TA(c),h=s[u];if(h)o.push(h.promise);else{let d;c.extensions&&c.extensions[Ze.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=Hp(new Kt,c,t),s[u]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?SA(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let f=0,g=u.length;f<g;f++){const x=u[f],m=o[f];let p;const v=c[f];if(m.mode===zn.TRIANGLES||m.mode===zn.TRIANGLE_STRIP||m.mode===zn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new bM(x,v):new j(x,v),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===zn.TRIANGLE_STRIP?p.geometry=Kf(p.geometry,cm):m.mode===zn.TRIANGLE_FAN&&(p.geometry=Kf(p.geometry,Jc));else if(m.mode===zn.LINES)p=new EM(x,v);else if(m.mode===zn.LINE_STRIP)p=new Kn(x,v);else if(m.mode===zn.LINE_LOOP)p=new TM(x,v);else if(m.mode===zn.POINTS)p=new AM(x,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&EA(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Qi(p,r),m.extensions&&ds(s,p,m),t.assignFinalMaterial(p),h.push(p)}for(let f=0,g=h.length;f<g;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return r.extensions&&ds(s,h[0],r),h[0];const d=new xs;r.extensions&&ds(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=h.length;f<g;f++)d.add(h[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new hn(fm.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new yi(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Qi(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){const r=s.pop(),o=s,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const h=o[c];if(h){a.push(h);const d=new De;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Wu(a,l)})}loadAnimation(e){const t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,d=s.channels.length;h<d;h++){const f=s.channels[h],g=s.samplers[f.sampler],x=f.target,m=x.node,p=s.parameters!==void 0?s.parameters[g.input]:g.input,v=s.parameters!==void 0?s.parameters[g.output]:g.output;x.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",v)),c.push(g),u.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){const d=h[0],f=h[1],g=h[2],x=h[3],m=h[4],p=[];for(let v=0,_=d.length;v<_;v++){const b=d[v],S=f[v],w=g[v],M=x[v],A=m[v];if(b===void 0)continue;b.updateMatrix&&b.updateMatrix();const U=n._createAnimationTracks(b,S,w,M,A);if(U)for(let y=0;y<U.length;y++)p.push(U[y])}return new UM(r,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(!!a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){const t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));const l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){const u=c[0],h=c[1],d=c[2];d!==null&&u.traverse(function(f){!f.isSkinnedMesh||f.bind(d,RA)});for(let f=0,g=h.length;f<g;f++)u.add(h[f]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(r.isBone===!0?u=new Im:c.length>1?u=new xs:c.length===1?u=c[0]:u=new Xe,u!==c[0])for(let h=0,d=c.length;h<d;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=o),Qi(u,r),r.extensions&&ds(n,u,r),r.matrix!==void 0){const h=new De;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return s.associations.has(u)||s.associations.set(u,{}),s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],s=this,r=new xs;n.name&&(r.name=s.createUniqueName(n.name)),Qi(r,n),n.extensions&&ds(t,r,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++)r.add(l[u]);const c=u=>{const h=new Map;for(const[d,f]of s.associations)(d instanceof _i||d instanceof Ht)&&h.set(d,f);return u.traverse(d=>{const f=s.associations.get(d);f!=null&&h.set(d,f)}),h};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){const o=[],a=e.name?e.name:e.uuid,l=[];Yi[r.path]===Yi.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let c;switch(Yi[r.path]){case Yi.weights:c=Lr;break;case Yi.rotation:c=Es;break;case Yi.position:case Yi.scale:c=Ir;break;default:switch(n.itemSize){case 1:c=Lr;break;case 2:case 3:default:c=Ir;break}break}const u=s.interpolation!==void 0?MA[s.interpolation]:Rr,h=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){const g=new c(l[d]+"."+Yi[r.path],t.array,h,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Pu(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const s=this instanceof Es?bA:Pg;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function PA(i,e,t){const n=e.attributes,s=new Ut;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new R(l[0],l[1],l[2]),new R(c[0],c[1],c[2])),a.normalized){const u=Pu(Mr[a.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new R,l=new R;for(let c=0,u=r.length;c<u;c++){const h=r[c];if(h.POSITION!==void 0){const d=t.json.accessors[h.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const x=Pu(Mr[d.componentType]);l.multiplyScalar(x)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;const o=new oi;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function Hp(i,e,t){const n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){i.setAttribute(a,l)})}for(const o in n){const a=Cu[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){const o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return at.workingColorSpace!==Yt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${at.workingColorSpace}" not supported.`),Qi(i,e),PA(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?wA(i,e.targets,t):i})}const Ln=10,pr=Ln/2,Lo="light:dummy";class LA{constructor(e){this.hooks=e,this.cornellRoot=null,this.meshes=[],this.raycaster=new Bm,this.pointer=new ye,this.groundPlane=new Zn(new R(0,1,0),0),this.scene=new xM,this.scene.background=new Te(657930),this.camera=new hn(45,window.innerWidth/window.innerHeight,.1,1e3),this.camera.position.set(0,5,18),this.camera.lookAt(0,5,0);const t=typeof window!="undefined"&&new URLSearchParams(window.location.search).get("test")==="1";this.renderer=new Lm({antialias:!0,powerPreference:"low-power",failIfMajorPerformanceCaveat:!1,preserveDrawingBuffer:t}),this.renderer.outputColorSpace=Et,this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(window.devicePixelRatio),document.body.appendChild(this.renderer.domElement),this.diag=new bg(this.renderer),this.diag.banner(),this.diag.snap("after renderer construction"),this.renderer.domElement.addEventListener("webglcontextlost",r=>{var o,a,l;console.error("[baker:debug] CONTEXT LOST",{meshes:this.meshes.length,firstMeshLM:(l=(a=(o=this.meshes[0])==null?void 0:o.material)==null?void 0:a.lightMap)==null?void 0:l.uuid}),this.diag.contextLossInfo(),r.preventDefault()}),this.renderer.domElement.addEventListener("webglcontextrestored",()=>{console.error("[baker:debug] CONTEXT RESTORED \u2014 RT data lost, lightmap textures are now empty",{meshes:this.meshes.length})}),this.controls=new G1(this.camera,this.renderer.domElement),this.controls.target.set(0,5,0),this.controls.update(),this.lightDummy=new Xe,this.lightDummy.position.set(0,Ln-.001,0),this.scene.add(this.lightDummy),this.lightMarker=new j(new Fn(2.5,2.5),new pi({color:16777215,side:dn})),this.lightMarker.rotation.x=Math.PI/2,this.lightDummy.add(this.lightMarker),this.visualLight=new Hr(16777215,80,0,2),this.visualLight.userData.lightmapIgnore=!0,this.lightDummy.add(this.visualLight),this.lightTransformController=new V1(this.camera,this.renderer.domElement),this.lightTransformController.addEventListener("dragging-changed",r=>{var o,a;if(this.controls.enabled=!r.value,!r.value){const l=this.lightTransformController.object;l&&l!==this.lightDummy&&((a=(o=this.hooks).onStaleChange)==null||a.call(o))}}),this.lightTransformController.attach(this.lightDummy),this.scene.add(this.lightTransformController);let n=0,s=0;this.renderer.domElement.addEventListener("pointerdown",r=>{n=r.clientX,s=r.clientY}),this.renderer.domElement.addEventListener("pointerup",r=>{var a,l;if(r.button!==0||this.lightTransformController.dragging||Math.abs(r.clientX-n)>3||Math.abs(r.clientY-s)>3)return;const o=this.pickAt(r.clientX,r.clientY);(l=(a=this.hooks).onViewportPick)==null||l.call(a,o)})}pickAt(e,t){const n=this.renderer.domElement.getBoundingClientRect();this.pointer.x=(e-n.left)/n.width*2-1,this.pointer.y=-((t-n.top)/n.height)*2+1,this.raycaster.setFromCamera(this.pointer,this.camera);const s=this.raycaster.intersectObjects(this.meshes,!1);return s.length>0?s[0].object.uuid:null}lookupObject(e){var t;return e?e===Lo?this.lightDummy:(t=this.meshes.find(n=>n.uuid===e))!=null?t:null:null}attachGizmoTo(e){e?(this.lightTransformController.attach(e),this.lightTransformController.visible=!0):(this.lightTransformController.detach(),this.lightTransformController.visible=!1)}setGizmoMode(e){this.lightTransformController.setMode(e)}buildSceneTree(){const e=[{id:Lo,name:"Scene Light",kind:"light",visible:this.lightDummy.visible}];for(const t of this.meshes)e.push({id:t.uuid,name:t.name||`Mesh (${t.geometry.type.replace("Geometry","")})`,kind:"mesh",visible:t.visible});return e}setVisible(e,t){const n=this.lookupObject(e);n&&(n.visible=t)}mat(e,t=.95,n=0){const s=new en({color:e,roughness:t,metalness:n});return s._originalMap=null,s}addMesh(e){const t=e;return this.meshes.push(t),this.cornellRoot.add(t),t}buildWalls(){const t=this.mat(15790320),n=this.mat(14034728),s=this.mat(2924588),r=new j(new de(Ln,.2,Ln),t);r.name="Floor",r.position.set(0,-.2/2,0),this.addMesh(r);const o=new j(new de(Ln,.2,Ln),t.clone());o.name="Ceiling",o.material._originalMap=null,o.position.set(0,Ln+.2/2,0),this.addMesh(o);const a=new j(new de(Ln,Ln,.2),t.clone());a.name="Back Wall",a.material._originalMap=null,a.position.set(0,pr,-pr-.2/2),this.addMesh(a);const l=new j(new de(.2,Ln,Ln),n);l.name="Left Wall (Red)",l.position.set(-pr-.2/2,pr,0),this.addMesh(l);const c=new j(new de(.2,Ln,Ln),s);c.name="Right Wall (Green)",c.position.set(pr+.2/2,pr,0),this.addMesh(c)}buildClassicBlocks(){const e=this.mat(15263976),t=new j(new de(3,6,3),e);t.name="Tall Block",t.position.set(-1.8,3,-1.5),t.rotation.y=.29,this.addMesh(t);const n=new j(new de(3,3,3),e.clone());n.name="Short Block",n.material._originalMap=null,n.position.set(1.8,1.5,1.5),n.rotation.y=-.29,this.addMesh(n)}buildAdvancedExtras(){const e=new j(new bi(1,48,32),this.mat(16119285,.4,0));e.name="Sphere",e.position.set(2.4,1,3),this.addMesh(e);const t=new j(new zo(.55,.18,160,24),this.mat(16765286,.55,0));t.name="Torus Knot",t.position.set(0,1,2.8),t.rotation.x=Math.PI/2,this.addMesh(t);const n=new j(new de(1.2,1.2,1.2),this.mat(13072954,.8,0));n.name="Accent Block",n.position.set(-3.5,.6,2.8),n.rotation.y=.45,this.addMesh(n)}rebuildScene(e){this.hooks.disposeBake(),this.cornellRoot&&this.scene.remove(this.cornellRoot),this.cornellRoot=new Xe,this.scene.add(this.cornellRoot),this.meshes=[],this.buildWalls(),this.buildClassicBlocks(),e==="advanced"&&this.buildAdvancedExtras(),this.hooks.installDummyLightmaps(this.meshes),this.hooks.onSceneChanged(this.meshes)}async importGLB(e){const t=await e.arrayBuffer(),n=new Z1;let s;try{s=await new Promise((r,o)=>{n.parse(t,"",r,o)})}catch(r){console.error("[baker] GLB parse failed:",r);return}if(this.hooks.disposeBake(),this.cornellRoot&&this.scene.remove(this.cornellRoot),this.cornellRoot=new Xe,this.scene.add(this.cornellRoot),this.cornellRoot.add(s.scene),this.meshes=[],s.scene.traverse(r=>{const o=r;if(!o.isMesh)return;const a=o.material;Array.isArray(a)||!a||!("lightMap"in a)||(o.geometry.index||(o.geometry=pg(o.geometry)),this.meshes.push(o))}),!this.meshes.length){console.warn("[baker] imported GLB has no bake-eligible meshes (need MeshStandard*)"),this.hooks.onSceneChanged(this.meshes);return}this.cornellRoot.updateMatrixWorld(!0),this.fitCameraAndLightToScene(),this.hooks.installDummyLightmaps(this.meshes),this.hooks.onSceneChanged(this.meshes)}fitCameraAndLightToScene(){const e=new Ut;for(const r of this.meshes)e.expandByObject(r);if(e.isEmpty())return;const t=e.getSize(new R),n=e.getCenter(new R),s=Math.max(t.x,t.y,t.z)||1;this.lightDummy.position.set(n.x,e.max.y+s*.1,n.z),this.camera.position.set(n.x,n.y,n.z+s*2.5),this.controls.target.copy(n),this.controls.update()}updateSize(){this.renderer.setSize(window.innerWidth,window.innerHeight),this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setPixelRatio(window.devicePixelRatio)}syncGizmo(e){this.lightTransformController.visible=e,this.lightTransformController.enabled=e}syncVisualLight(e,t){const n=new Te(e).convertSRGBToLinear();this.visualLight.color.copy(n),this.visualLight.intensity=30*t}pickGroundPoint(e,t){const n=this.renderer.domElement.getBoundingClientRect();this.pointer.x=(e-n.left)/n.width*2-1,this.pointer.y=-((t-n.top)/n.height)*2+1,this.raycaster.setFromCamera(this.pointer,this.camera);const s=new R;return this.raycaster.ray.intersectPlane(this.groundPlane,s)?s:new R(0,0,0)}addAsset(e,t){var s,r;const n=h1(e);if(!n)return console.warn("[baker] addAsset: unknown or disabled asset spec",e),"";if(n.position.copy(t),e.kind==="primitive"){this.cornellRoot||(this.cornellRoot=new Xe,this.scene.add(this.cornellRoot));const o=n;e.id!=="plane"&&(n.position.y=Math.max(n.position.y,.5)),this.cornellRoot.add(o),this.meshes.push(o),this.hooks.installDummyLightmaps([o])}else this.scene.add(n);return this.hooks.onSceneChanged(this.meshes),(r=(s=this.hooks).onStaleChange)==null||r.call(s),n.uuid}removeNode(e){var s,r,o,a,l,c;if(!e||e===Lo)return;const t=this.meshes.findIndex(u=>u.uuid===e);if(t!==-1){const u=this.meshes[t];(s=u.parent)==null||s.remove(u),(r=u.geometry)==null||r.dispose();const h=u.material;Array.isArray(h)?h.forEach(d=>d.dispose()):h==null||h.dispose(),this.meshes.splice(t,1),this.hooks.onSceneChanged(this.meshes),(a=(o=this.hooks).onStaleChange)==null||a.call(o);return}const n=this.scene.children.find(u=>u.uuid===e);n&&n!==this.lightDummy&&(this.scene.remove(n),this.hooks.onSceneChanged(this.meshes),(c=(l=this.hooks).onStaleChange)==null||c.call(l))}async loadPresetById(e){const t=si.get(e);if(!t){console.warn(`[scene-loader] unknown preset id: ${e}`);return}this.hooks.disposeBake(),this.cornellRoot&&this.scene.remove(this.cornellRoot);for(const r of[...this.scene.children])r.name==="sceneRoot"&&this.scene.remove(r);this.cornellRoot=new Xe,this.cornellRoot.name=`preset:${e}`,this.scene.add(this.cornellRoot),this.meshes=[];const n=new Set;this.scene.traverse(r=>{r.isMesh&&n.add(r)});const s=await t.build(this.scene);this.scene.traverse(r=>{const o=r;if(!o.isMesh||n.has(o)||o.userData.lightmapIgnore===!0)return;let a=o.parent;for(;a;){if(a===this.lightDummy)return;a=a.parent}this.meshes.includes(o)||this.meshes.push(o)}),s.background!==void 0&&(this.scene.background=new Te(s.background)),s.camera&&(this.camera.position.set(...s.camera.position),this.controls.target.set(...s.camera.target),this.controls.update()),s.lightDummy&&this.lightDummy.position.set(...s.lightDummy.position),this.hooks.installDummyLightmaps(this.meshes),this.hooks.onSceneChanged(this.meshes)}}const Lu=[{id:"combined",label:"Combined",group:"output",showAlbedo:!0,getLightMap:i=>{var e,t;return(t=(e=i.group.refinement)==null?void 0:e.texture)!=null?t:i.group.composite.texture}},{id:"combinedPost",label:"Combined (Refined)",group:"output",showAlbedo:!0,getLightMap:i=>{var e,t;return(t=(e=i.group.refinement)==null?void 0:e.texture)!=null?t:i.group.composite.texture}},{id:"combinedRaw",label:"Combined (Raw)",group:"output",showAlbedo:!0,getLightMap:i=>i.group.composite.texture},{id:"direct",label:"Direct",group:"output",showAlbedo:!1,getLightMap:i=>i.group.lightmapper.textures.direct},{id:"indirect",label:"Indirect (GI)",group:"output",showAlbedo:!1,getLightMap:i=>i.group.lightmapper.textures.indirect},{id:"ao",label:"Ambient Occlusion",group:"output",showAlbedo:!1,getLightMap:i=>i.group.aoMapper.texture},{id:"lightmapRaw",label:"Lightmap (Raw)",group:"debug",showAlbedo:!1,getLightMap:i=>i.group.composite.texture},{id:"albedo",label:"Albedo",group:"debug",showAlbedo:!0,getLightMap:()=>null},{id:"positions",label:"World Position",group:"debug",showAlbedo:!1,getLightMap:i=>i.group.positionTexture},{id:"normals",label:"World Normal",group:"debug",showAlbedo:!1,getLightMap:i=>i.group.normalTexture},{id:"texelDensity",label:"Texel Density",group:"debug",showAlbedo:!1,getLightMap:()=>null}];Object.fromEntries(Lu.map(i=>[i.label,i.id]));class IA{constructor(e){this.deps=e,this.texelDensityMats=new Map,this.originalMaterials=new WeakMap}apply(){var l,c;const e=this.deps.getOptions(),t=this.deps.getMeshes();this.deps.getBakeGroups();const n=this.deps.getMeshToGroup(),s=this.deps.getVisualLight(),r=this.deps.getLightMarker(),o=(l=Lu.find(u=>u.id===e.layer))!=null?l:Lu[0];if(o.id==="texelDensity"){this.refreshTexelDensityMaterials();for(const u of t){this.originalMaterials.has(u)||this.originalMaterials.set(u,u.material);const h=this.texelDensityMats.get(u);h&&(u.material=h)}s.visible=!1;return}for(const u of t){const h=this.originalMaterials.get(u);h&&u.material!==h&&(u.material=h)}const a=this.deps.getDummyLightmap();for(const u of t){const h=u.material;h.map=o.showAlbedo&&(c=h._originalMap)!=null?c:null;const d=n.get(u),f=d?o.getLightMap({group:d}):null;f?(h.lightMap=f,h.lightMap.channel=2,h.lightMapIntensity=1):(h.lightMap=a,h.lightMapIntensity=0)}r.material.color=new Te(16777215),s.visible=o.id==="albedo"}refreshTexelDensityMaterials(){var s,r,o;const e=this.deps.getOptions(),t=this.deps.getMeshes(),n=new Set(t);for(const a of this.texelDensityMats.keys())n.has(a)||((s=this.texelDensityMats.get(a))==null||s.dispose(),this.texelDensityMats.delete(a));for(const a of t){const l=(o=(r=e.perMesh[a.uuid])==null?void 0:r.scaleInLightmap)!=null?o:1,c=e.texelsPerMeter*l;let u=this.texelDensityMats.get(a);u?(u.setTexelsPerMeter(c),u.setLightmapSize(e.lightMapSize)):(u=new GE({texelsPerMeter:c,lightmapSize:e.lightMapSize}),this.texelDensityMats.set(a,u))}}dispose(){for(const e of this.texelDensityMats.values())e.dispose();this.texelDensityMats.clear()}}const DA={Custom:null,Draft:{lightMapSize:256,casts:4,targetSamples:32},Preview:{lightMapSize:512,casts:5,targetSamples:96},Production:{lightMapSize:1024,casts:6,targetSamples:256},Final:{lightMapSize:2048,casts:8,targetSamples:512}},Lg=class{constructor(){this.options={preset:"advanced",layer:"combined",quality:"Custom",lightMapSize:1024,casts:5,targetSamples:256,bounces:2,safeMode:!0,filterMode:"linear",directLightEnabled:!0,indirectLightEnabled:!0,ambientLightEnabled:!0,ambientDistance:.5,aoIntensity:1,aoExponent:1.5,aoSamples:5,texelsPerMeter:10,lightSize:2.9,lightIntensity:2,lightColor:"#ffffff",directIntensity:1.4,giIntensity:2.7,skyColor:"#ffffff",skyIntensity:0,pause:!1,showGizmo:!0,autoBake:!1,autoApplyRefinement:!1,dilationIterations:1,denoiseEnabled:!1,denoiseSigma:2.5,denoiseThreshold:.18,denoiseKSigma:1,secondaryLightEnabled:!1,secondaryDirX:-.5,secondaryDirY:-1,secondaryDirZ:-.5,secondaryIntensity:.8,secondaryColor:"#ffffcc",samples:0,spp:0,etaSec:0,refinementStatus:"idle",exportFormat:"png",perMesh:{}},this.looping=!1,this.bakeStartTime=0,this.bakeBatchHistory=[],this.externalHooks={},this.maybeBake=e=>{(e==null?void 0:e.last)!==!1&&(!this.options.autoBake||this.bake())};const i={onSceneChanged:()=>this.onSceneChanged(),installDummyLightmaps:e=>this.bakeController.installDummyLightmaps(e),disposeBake:()=>{var e,t;this.bakeController.disposeAllGroups(),(t=(e=this.bakeController).matTexDispose)==null||t.call(e),this.bakeController.matTexDispose=null},onStaleChange:()=>{var e,t;return(t=(e=this.externalHooks).onStaleChange)==null?void 0:t.call(e)},onViewportPick:e=>{var t,n;return(n=(t=this.externalHooks).onViewportPick)==null?void 0:n.call(t,e)}};this.sceneController=new LA(i),this.bakeController=new z1(this.sceneController.renderer,this.sceneController.scene),this.renderModeRunner=new IA({getMeshes:()=>this.sceneController.meshes,getBakeGroups:()=>this.bakeController.bakeGroups,getMeshToGroup:()=>this.bakeController.meshToGroup,getOptions:()=>({layer:this.options.layer,texelsPerMeter:this.options.texelsPerMeter,lightMapSize:this.options.lightMapSize,perMesh:this.options.perMesh}),getVisualLight:()=>this.sceneController.visualLight,getLightMarker:()=>this.sceneController.lightMarker,getDummyLightmap:()=>this.bakeController.getDummyLightmap()}),this.bakeController.onProgress=e=>this.onBakeFrame(e),this.initGLBInput(),this.rebuildScene()}onSceneChanged(){var e,t;const i=new Set(this.sceneController.meshes.map(n=>n.uuid));for(const n of Object.keys(this.options.perMesh))i.has(n)||delete this.options.perMesh[n];(t=(e=this.externalHooks).onSceneChanged)==null||t.call(e)}initGLBInput(){this.glbFileInput=document.createElement("input"),this.glbFileInput.type="file",this.glbFileInput.accept=".glb,.gltf",this.glbFileInput.style.display="none",this.glbFileInput.addEventListener("change",()=>{var e;const i=(e=this.glbFileInput.files)==null?void 0:e[0];i&&this.importGLB(i)}),document.body.appendChild(this.glbFileInput)}updateSize(){this.sceneController.updateSize()}async rebuildScene(){this.sceneController.rebuildScene(this.options.preset),this.options.autoBake&&await this.bake(),this.startLoop()}async importGLB(i){await this.sceneController.importGLB(i),this.options.perMesh={},this.options.autoBake&&await this.bake(),this.startLoop()}async bake(){var i,e;if(!!this.sceneController.meshes.length){this.bakeStartTime=performance.now(),this.bakeBatchHistory=[],this.sceneController.syncVisualLight(this.options.lightColor,this.options.lightIntensity);try{await this.bakeController.runBake(this.sceneController.meshes,this.sceneController.lightDummy.position,this.options)}catch(t){const n=t instanceof Error?t.message:String(t);console.error("[baker] bake failed:",t),(e=(i=this.externalHooks).onBakeError)==null||e.call(i,n),this.options.pause=!0;return}this.options.refinementStatus="idle",this.options.samples=this.options.targetSamples,this.options.spp=this.options.targetSamples*this.options.casts,this.options.etaSec=0,this.options.pause=!1,this.renderModeRunner.apply(),this.bakeController.diag.snap("after applyRenderMode (lightmaps mounted)")}}onBakeFrame(i){i.targetSamples;const e=Math.min(i.bounceSamples,i.aoSamples),t=e*this.options.casts;this.options.samples=e,this.options.spp=t}applyQualityPreset(i){const e=DA[i];!e||(this.options.lightMapSize=e.lightMapSize,this.options.casts=e.casts,this.options.targetSamples=e.targetSamples,this.bake())}async applyRefinement(){!this.bakeController.bakeGroups.length||(this.options.refinementStatus="running",await this.bakeController.runRefinement(this.options,this.options.lightMapSize,()=>{}),this.options.refinementStatus=this.options.dilationIterations>0||this.options.denoiseEnabled?"applied":"skipped",this.renderModeRunner.apply())}showUnrefined(){this.bakeController.clearRefinement(),this.options.refinementStatus="idle",this.renderModeRunner.apply()}async rebakeAO(){!this.bakeController.bakeGroups.length||!this.bakeController.bakeResult||(await this.bakeController.runAOOnly({samples:this.options.aoSamples,distance:this.options.ambientDistance,targetSamples:this.options.targetSamples}),this.options.pause=!1)}exportFinal(){return this.exportFinalImpl()}async exportFinalImpl(){var t,n;const i=this.bakeController.bakeGroups;if(!i.length){console.warn("[baker] export: no bake to export \u2014 bake first");return}const e=i[0].refinement?"refined":"composite";for(let s=0;s<i.length;s++){const r=i[s],o=(n=(t=r.refinement)==null?void 0:t.texture)!=null?n:r.composite.texture,a=i.length>1?`_atlas${s}`:"";await this.runExport(o,`lightmap_${e}_${this.options.lightMapSize}${a}`)}}async runExport(i,e){const t=this.options.exportFormat,n=this.options.lightMapSize,s=performance.now();try{await yg(this.sceneController.renderer,i,n,e,t),console.info(`[baker] exported ${e}.${t} (${n}\xD7${n}) in ${(performance.now()-s).toFixed(0)}ms`)}catch(r){throw console.error("[baker] export failed:",r),r}}exportSceneGLB(){return this.exportSceneGLBImpl()}async exportSceneGLBImpl(){if(!this.sceneController.meshes.length){console.warn("[baker] no meshes to export");return}if(!this.bakeController.bakeGroups.length){console.warn("[baker] no baked lightmap available \u2014 bake first");return}const i=this.options.layer;this.options.layer="combined",this.renderModeRunner.apply(),this.options.layer=i;const{GLTFExporter:e}=await k1(()=>import("./GLTFExporter.9fa00bb7.js"),[]),t=new e,n=await new Promise((a,l)=>{t.parse(this.sceneController.cornellRoot,c=>{c instanceof ArrayBuffer?a(c):l(new Error("expected binary GLB output"))},c=>l(c),{binary:!0,embedImages:!0})}),s=new Blob([n],{type:"model/gltf-binary"}),r=URL.createObjectURL(s),o=document.createElement("a");o.href=r,o.download="scene-baked.glb",o.click(),URL.revokeObjectURL(r)}estimateTimeRemaining(i,e){if(e<=0||i>=e)return 0;const t=this.bakeBatchHistory;if(t.length<2)return 0;const n=t[0],s=t[t.length-1],r=s.samples-n.samples,o=s.t-n.t;if(r<=0||o<=0)return 0;const a=o/r;return(e-i)*a/1e3}startLoop(){if(this.looping)return;this.looping=!0;const i=()=>{if(requestAnimationFrame(i),this.sceneController.syncGizmo(this.options.showGizmo),this.bakeController.bakeGroups.length&&!this.options.pause){const e=this.bakeController.tick();if(e)if(e.allDone){this.options.pause=!0,this.options.etaSec=0;const t=(performance.now()-this.bakeStartTime)/1e3;console.info(`[baker] done in ${t.toFixed(2)}s (${this.bakeController.bakeGroups.length} atlas${this.bakeController.bakeGroups.length===1?"":"es"})`),this.options.autoApplyRefinement&&this.applyRefinement()}else{const t=this.options.targetSamples,n=performance.now(),s=this.bakeBatchHistory[this.bakeBatchHistory.length-1];(!s||s.samples!==e.minSamples)&&(this.bakeBatchHistory.push({samples:e.minSamples,t:n}),this.bakeBatchHistory.length>Lg.BAKE_ETA_WINDOW&&this.bakeBatchHistory.shift());const r=this.estimateTimeRemaining(e.minSamples,t),o=e.minSamples*this.options.casts;this.options.samples=e.minSamples,this.options.spp=o,this.options.etaSec=Math.ceil(r)}}this.sceneController.controls.update(),this.bakeController.firstPostBakeRender?(this.bakeController.firstPostBakeRender=!1,this.bakeController.diag.snap("about to do FIRST post-bake scene render"),this.bakeController.diag.measure("FIRST post-bake renderer.render",()=>this.sceneController.renderer.render(this.sceneController.scene,this.sceneController.camera)),this.bakeController.diag.snap("after FIRST post-bake scene render")):this.sceneController.renderer.render(this.sceneController.scene,this.sceneController.camera)};i()}get meshes(){return this.sceneController.meshes}get scene(){return this.sceneController.scene}requestBake(){return this.bake()}requestAORebake(){return this.rebakeAO()}setQuality(i){this.options.quality=i,this.applyQualityPreset(i)}setLayer(i){this.options.layer=i,this.renderModeRunner.apply()}setAutoBake(i){this.options.autoBake=i}getBakeStatus(){return this.bakeController.bakeGroups.length?this.options.pause?"done":"baking":"idle"}getMeshCount(){return this.sceneController.meshes.length}getBakeGroupCount(){return this.bakeController.bakeGroups.length}getSceneTree(){return this.sceneController.buildSceneTree()}pickAt(i,e){return this.sceneController.pickAt(i,e)}setSelection(i){this.sceneController.attachGizmoTo(this.sceneController.lookupObject(i))}setGizmoMode(i){this.sceneController.setGizmoMode(i)}setNodeVisible(i,e){this.sceneController.setVisible(i,e)}applyRefinementNow(){return this.applyRefinement()}showUnrefinedNow(){this.showUnrefined()}sampleCanvasPixel(i,e){const t=this.sceneController.renderer,n=t.getContext();if(n.isContextLost())return null;t.setRenderTarget(null),t.render(this.sceneController.scene,this.sceneController.camera),n.bindFramebuffer(n.FRAMEBUFFER,null);const s=new Uint8Array(4),r=n.drawingBufferHeight;return n.readPixels(i,r-e,1,1,n.RGBA,n.UNSIGNED_BYTE,s),[s[0],s[1],s[2],s[3]]}getRenderDiag(){const i=this.sceneController.renderer.getContext();return{canvasW:this.sceneController.renderer.domElement.width,canvasH:this.sceneController.renderer.domElement.height,gbW:i.drawingBufferWidth,gbH:i.drawingBufferHeight,glError:i.getError()}}async loadScenePreset(i){await this.sceneController.loadPresetById(i),this.options.perMesh={},this.startLoop()}addAsset(i,e){const t=Array.isArray(e)?new R(e[0],e[1],e[2]):e;return this.sceneController.addAsset(i,t)}removeNode(i){this.sceneController.removeNode(i)}pickGroundPoint(i,e){return this.sceneController.pickGroundPoint(i,e)}triggerImportGLB(){this.glbFileInput.value="",this.glbFileInput.click()}};let Ig=Lg;Ig.BAKE_ETA_WINDOW=16;function UA(){return new URLSearchParams(window.location.search).get("legacy")==="1"}function NA(){return new URLSearchParams(window.location.search).get("test")==="1"}function FA(i){setInterval(()=>{const e=i.getBakeStatus();Ur.value!==e&&(Ur.value=e);const t=i.options,n=t.targetSamples,s=n>0?Math.min(100,t.samples/n*100):0;Sg.value={pct:s,samples:t.samples,atlas:i.getBakeGroupCount(),total:n,elapsedMs:0}},250)}function OA(i){Fo(()=>{i.setSelection(Nn.value)}),Fo(()=>{i.setGizmoMode(Qa.value)})}function BA(i){window.addEventListener("keydown",e=>{if(!(e.target instanceof HTMLInputElement||e.target instanceof HTMLTextAreaElement))if(e.key==="w"||e.key==="W")Qa.value="translate";else if(e.key==="e"||e.key==="E")Qa.value="rotate";else if(e.key==="r"||e.key==="R")Qa.value="scale";else if(e.key==="Escape")Nn.value=null;else if(e.key==="Delete"||e.key==="Backspace"){const t=Nn.value;if(!t||t===Lo)return;i.removeNode(t),Nn.value=null}else(e.key==="b"||e.key==="B")&&Vo.value&&Ur.value!=="baking"&&i.requestBake()})}function kA(i){const e=i.sceneController.renderer.domElement;e.addEventListener("dragover",t=>{!t.dataTransfer||!Array.from(t.dataTransfer.types).includes("application/x-baker-asset")||(t.preventDefault(),t.dataTransfer.dropEffect="copy")}),e.addEventListener("drop",t=>{if(!t.dataTransfer)return;const n=t.dataTransfer.getData("application/x-baker-asset");if(!n)return;t.preventDefault();let s;try{s=JSON.parse(n)}catch{console.warn("[baker] bad asset drop payload",n);return}const r=i.pickGroundPoint(t.clientX,t.clientY),o=i.addAsset(s,r);o&&(Nn.value=o)})}(async()=>{await wS();const i=new Ig;if(lT(i),i.externalHooks={onSceneChanged:()=>{Dr.value=i.getSceneTree()},onStaleChange:()=>{Vo.value=!0},onViewportPick:e=>{Nn.value=e},onBakeError:e=>{S1("error",`Bake failed: ${e}`)}},Dr.value=i.getSceneTree(),Nn.value=Lo,window.addEventListener("resize",()=>i.updateSize()),!UA()){const e=document.createElement("div");e.id="app",document.body.appendChild(e),Xg(I(F1,{}),e),FA(i),OA(i),BA(i),kA(i)}NA()&&(window.__baker=i,document.body.setAttribute("data-baker-ready","1"))})();export{yt as B,HA as C,dn as D,Do as I,ut as L,j as M,Gn as N,Fn as P,Bt as Q,kt as R,Zt as S,Pl as U,R as V,Lm as W,Et as a,hn as b,xM as c,Te as d,zA as e,gm as f,fm as g,ct as h,De as i,Rr as j,st as k,Zc as l,mr as m,Xa as n,Fi as o,an as p,Tr as q,ol as r};
