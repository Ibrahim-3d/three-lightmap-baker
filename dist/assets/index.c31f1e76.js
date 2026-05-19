const v0=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}};v0();var Ul,ft,xm,vm,er,$h,ym,bm,Kl,el,Io,Mm,eh,lu,cu,dl={},fl=[],y0=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,$o=Array.isArray;function zi(i,e){for(var t in e)i[t]=e[t];return i}function th(i){i&&i.parentNode&&i.parentNode.removeChild(i)}function pl(i,e,t){var n,r,s,o={};for(s in e)s=="key"?n=e[s]:s=="ref"?r=e[s]:o[s]=e[s];if(arguments.length>2&&(o.children=arguments.length>3?Ul.call(arguments,2):t),typeof i=="function"&&i.defaultProps!=null)for(s in i.defaultProps)o[s]===void 0&&(o[s]=i.defaultProps[s]);return tl(i,o,n,r,null)}function tl(i,e,t,n,r){var s={type:i,props:e,key:t,ref:n,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:r==null?++xm:r,__i:-1,__u:0};return r==null&&ft.vnode!=null&&ft.vnode(s),s}function Ur(i){return i.children}function Do(i,e){this.props=i,this.context=e}function Ns(i,e){if(e==null)return i.__?Ns(i.__,i.__i+1):null;for(var t;e<i.__k.length;e++)if((t=i.__k[e])!=null&&t.__e!=null)return t.__e;return typeof i.type=="function"?Ns(i):null}function b0(i){if(i.__P&&i.__d){var e=i.__v,t=e.__e,n=[],r=[],s=zi({},e);s.__v=e.__v+1,ft.vnode&&ft.vnode(s),nh(i.__P,s,e,i.__n,i.__P.namespaceURI,32&e.__u?[t]:null,n,t==null?Ns(e):t,!!(32&e.__u),r),s.__v=e.__v,s.__.__k[s.__i]=s,Am(n,s,r),e.__e=e.__=null,s.__e!=t&&Tm(s)}}function Tm(i){if((i=i.__)!=null&&i.__c!=null)return i.__e=i.__c.base=null,i.__k.some(function(e){if(e!=null&&e.__e!=null)return i.__e=i.__c.base=e.__e}),Tm(i)}function jh(i){(!i.__d&&(i.__d=!0)&&er.push(i)&&!ml.__r++||$h!=ft.debounceRendering)&&(($h=ft.debounceRendering)||ym)(ml)}function ml(){try{for(var i,e=1;er.length;)er.length>e&&er.sort(bm),i=er.shift(),e=er.length,b0(i)}finally{er.length=ml.__r=0}}function Sm(i,e,t,n,r,s,o,a,l,c,u){var h,d,f,g,x,m,p,v=n&&n.__k||fl,_=e.length;for(l=M0(t,e,v,l,_),h=0;h<_;h++)(f=t.__k[h])!=null&&(d=f.__i!=-1&&v[f.__i]||dl,f.__i=h,m=nh(i,f,d,r,s,o,a,l,c,u),g=f.__e,f.ref&&d.ref!=f.ref&&(d.ref&&ih(d.ref,null,f),u.push(f.ref,f.__c||g,f)),x==null&&g!=null&&(x=g),(p=!!(4&f.__u))||d.__k===f.__k?(l=wm(f,l,i,p),p&&d.__e&&(d.__e=null)):typeof f.type=="function"&&m!==void 0?l=m:g&&(l=g.nextSibling),f.__u&=-7);return t.__e=x,l}function M0(i,e,t,n,r){var s,o,a,l,c,u=t.length,h=u,d=0;for(i.__k=new Array(r),s=0;s<r;s++)(o=e[s])!=null&&typeof o!="boolean"&&typeof o!="function"?(typeof o=="string"||typeof o=="number"||typeof o=="bigint"||o.constructor==String?o=i.__k[s]=tl(null,o,null,null,null):$o(o)?o=i.__k[s]=tl(Ur,{children:o},null,null,null):o.constructor===void 0&&o.__b>0?o=i.__k[s]=tl(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):i.__k[s]=o,l=s+d,o.__=i,o.__b=i.__b+1,a=null,(c=o.__i=T0(o,t,l,h))!=-1&&(h--,(a=t[c])&&(a.__u|=2)),a==null||a.__v==null?(c==-1&&(r>u?d--:r<u&&d++),typeof o.type!="function"&&(o.__u|=4)):c!=l&&(c==l-1?d--:c==l+1?d++:(c>l?d--:d++,o.__u|=4))):i.__k[s]=null;if(h)for(s=0;s<u;s++)(a=t[s])!=null&&(2&a.__u)==0&&(a.__e==n&&(n=Ns(a)),Cm(a,a));return n}function wm(i,e,t,n){var r,s;if(typeof i.type=="function"){for(r=i.__k,s=0;r&&s<r.length;s++)r[s]&&(r[s].__=i,e=wm(r[s],e,t,n));return e}i.__e!=e&&(n&&(e&&i.type&&!e.parentNode&&(e=Ns(i)),t.insertBefore(i.__e,e||null)),e=i.__e);do e=e&&e.nextSibling;while(e!=null&&e.nodeType==8);return e}function Em(i,e){return e=e||[],i==null||typeof i=="boolean"||($o(i)?i.some(function(t){Em(t,e)}):e.push(i)),e}function T0(i,e,t,n){var r,s,o,a=i.key,l=i.type,c=e[t],u=c!=null&&(2&c.__u)==0;if(c===null&&a==null||u&&a==c.key&&l==c.type)return t;if(n>(u?1:0)){for(r=t-1,s=t+1;r>=0||s<e.length;)if((c=e[o=r>=0?r--:s++])!=null&&(2&c.__u)==0&&a==c.key&&l==c.type)return o}return-1}function Kh(i,e,t){e[0]=="-"?i.setProperty(e,t==null?"":t):i[e]=t==null?"":typeof t!="number"||y0.test(e)?t:t+"px"}function ia(i,e,t,n,r){var s,o;e:if(e=="style")if(typeof t=="string")i.style.cssText=t;else{if(typeof n=="string"&&(i.style.cssText=n=""),n)for(e in n)t&&e in t||Kh(i.style,e,"");if(t)for(e in t)n&&t[e]==n[e]||Kh(i.style,e,t[e])}else if(e[0]=="o"&&e[1]=="n")s=e!=(e=e.replace(Mm,"$1")),o=e.toLowerCase(),e=o in i||e=="onFocusOut"||e=="onFocusIn"?o.slice(2):e.slice(2),i.l||(i.l={}),i.l[e+s]=t,t?n?t[Io]=n[Io]:(t[Io]=eh,i.addEventListener(e,s?cu:lu,s)):i.removeEventListener(e,s?cu:lu,s);else{if(r=="http://www.w3.org/2000/svg")e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!="width"&&e!="height"&&e!="href"&&e!="list"&&e!="form"&&e!="tabIndex"&&e!="download"&&e!="rowSpan"&&e!="colSpan"&&e!="role"&&e!="popover"&&e in i)try{i[e]=t==null?"":t;break e}catch{}typeof t=="function"||(t==null||t===!1&&e[4]!="-"?i.removeAttribute(e):i.setAttribute(e,e=="popover"&&t==1?"":t))}}function Zh(i){return function(e){if(this.l){var t=this.l[e.type+i];if(e[el]==null)e[el]=eh++;else if(e[el]<t[Io])return;return t(ft.event?ft.event(e):e)}}}function nh(i,e,t,n,r,s,o,a,l,c){var u,h,d,f,g,x,m,p,v,_,y,M,T,S,E,L=e.type;if(e.constructor!==void 0)return null;128&t.__u&&(l=!!(32&t.__u),s=[a=e.__e=t.__e]),(u=ft.__b)&&u(e);e:if(typeof L=="function")try{if(p=e.props,v=L.prototype&&L.prototype.render,_=(u=L.contextType)&&n[u.__c],y=u?_?_.props.value:u.__:n,t.__c?m=(h=e.__c=t.__c).__=h.__E:(v?e.__c=h=new L(p,y):(e.__c=h=new Do(p,y),h.constructor=L,h.render=w0),_&&_.sub(h),h.state||(h.state={}),h.__n=n,d=h.__d=!0,h.__h=[],h._sb=[]),v&&h.__s==null&&(h.__s=h.state),v&&L.getDerivedStateFromProps!=null&&(h.__s==h.state&&(h.__s=zi({},h.__s)),zi(h.__s,L.getDerivedStateFromProps(p,h.__s))),f=h.props,g=h.state,h.__v=e,d)v&&L.getDerivedStateFromProps==null&&h.componentWillMount!=null&&h.componentWillMount(),v&&h.componentDidMount!=null&&h.__h.push(h.componentDidMount);else{if(v&&L.getDerivedStateFromProps==null&&p!==f&&h.componentWillReceiveProps!=null&&h.componentWillReceiveProps(p,y),e.__v==t.__v||!h.__e&&h.shouldComponentUpdate!=null&&h.shouldComponentUpdate(p,h.__s,y)===!1){e.__v!=t.__v&&(h.props=p,h.state=h.__s,h.__d=!1),e.__e=t.__e,e.__k=t.__k,e.__k.some(function(b){b&&(b.__=e)}),fl.push.apply(h.__h,h._sb),h._sb=[],h.__h.length&&o.push(h);break e}h.componentWillUpdate!=null&&h.componentWillUpdate(p,h.__s,y),v&&h.componentDidUpdate!=null&&h.__h.push(function(){h.componentDidUpdate(f,g,x)})}if(h.context=y,h.props=p,h.__P=i,h.__e=!1,M=ft.__r,T=0,v)h.state=h.__s,h.__d=!1,M&&M(e),u=h.render(h.props,h.state,h.context),fl.push.apply(h.__h,h._sb),h._sb=[];else do h.__d=!1,M&&M(e),u=h.render(h.props,h.state,h.context),h.state=h.__s;while(h.__d&&++T<25);h.state=h.__s,h.getChildContext!=null&&(n=zi(zi({},n),h.getChildContext())),v&&!d&&h.getSnapshotBeforeUpdate!=null&&(x=h.getSnapshotBeforeUpdate(f,g)),S=u!=null&&u.type===Ur&&u.key==null?Rm(u.props.children):u,a=Sm(i,$o(S)?S:[S],e,t,n,r,s,o,a,l,c),h.base=e.__e,e.__u&=-161,h.__h.length&&o.push(h),m&&(h.__E=h.__=null)}catch(b){if(e.__v=null,l||s!=null)if(b.then){for(e.__u|=l?160:128;a&&a.nodeType==8&&a.nextSibling;)a=a.nextSibling;s[s.indexOf(a)]=null,e.__e=a}else{for(E=s.length;E--;)th(s[E]);uu(e)}else e.__e=t.__e,e.__k=t.__k,b.then||uu(e);ft.__e(b,e,t)}else s==null&&e.__v==t.__v?(e.__k=t.__k,e.__e=t.__e):a=e.__e=S0(t.__e,e,t,n,r,s,o,l,c);return(u=ft.diffed)&&u(e),128&e.__u?void 0:a}function uu(i){i&&(i.__c&&(i.__c.__e=!0),i.__k&&i.__k.some(uu))}function Am(i,e,t){for(var n=0;n<t.length;n++)ih(t[n],t[++n],t[++n]);ft.__c&&ft.__c(e,i),i.some(function(r){try{i=r.__h,r.__h=[],i.some(function(s){s.call(r)})}catch(s){ft.__e(s,r.__v)}})}function Rm(i){return typeof i!="object"||i==null||i.__b>0?i:$o(i)?i.map(Rm):zi({},i)}function S0(i,e,t,n,r,s,o,a,l){var c,u,h,d,f,g,x,m=t.props||dl,p=e.props,v=e.type;if(v=="svg"?r="http://www.w3.org/2000/svg":v=="math"?r="http://www.w3.org/1998/Math/MathML":r||(r="http://www.w3.org/1999/xhtml"),s!=null){for(c=0;c<s.length;c++)if((f=s[c])&&"setAttribute"in f==!!v&&(v?f.localName==v:f.nodeType==3)){i=f,s[c]=null;break}}if(i==null){if(v==null)return document.createTextNode(p);i=document.createElementNS(r,v,p.is&&p),a&&(ft.__m&&ft.__m(e,s),a=!1),s=null}if(v==null)m===p||a&&i.data==p||(i.data=p);else{if(s=s&&Ul.call(i.childNodes),!a&&s!=null)for(m={},c=0;c<i.attributes.length;c++)m[(f=i.attributes[c]).name]=f.value;for(c in m)f=m[c],c=="dangerouslySetInnerHTML"?h=f:c=="children"||c in p||c=="value"&&"defaultValue"in p||c=="checked"&&"defaultChecked"in p||ia(i,c,null,f,r);for(c in p)f=p[c],c=="children"?d=f:c=="dangerouslySetInnerHTML"?u=f:c=="value"?g=f:c=="checked"?x=f:a&&typeof f!="function"||m[c]===f||ia(i,c,f,m[c],r);if(u)a||h&&(u.__html==h.__html||u.__html==i.innerHTML)||(i.innerHTML=u.__html),e.__k=[];else if(h&&(i.innerHTML=""),Sm(e.type=="template"?i.content:i,$o(d)?d:[d],e,t,n,v=="foreignObject"?"http://www.w3.org/1999/xhtml":r,s,o,s?s[0]:t.__k&&Ns(t,0),a,l),s!=null)for(c=s.length;c--;)th(s[c]);a||(c="value",v=="progress"&&g==null?i.removeAttribute("value"):g!=null&&(g!==i[c]||v=="progress"&&!g||v=="option"&&g!=m[c])&&ia(i,c,g,m[c],r),c="checked",x!=null&&x!=i[c]&&ia(i,c,x,m[c],r))}return i}function ih(i,e,t){try{if(typeof i=="function"){var n=typeof i.__u=="function";n&&i.__u(),n&&e==null||(i.__u=i(e))}else i.current=e}catch(r){ft.__e(r,t)}}function Cm(i,e,t){var n,r;if(ft.unmount&&ft.unmount(i),(n=i.ref)&&(n.current&&n.current!=i.__e||ih(n,null,e)),(n=i.__c)!=null){if(n.componentWillUnmount)try{n.componentWillUnmount()}catch(s){ft.__e(s,e)}n.base=n.__P=null}if(n=i.__k)for(r=0;r<n.length;r++)n[r]&&Cm(n[r],e,t||typeof i.type!="function");t||th(i.__e),i.__c=i.__=i.__e=void 0}function w0(i,e,t){return this.constructor(i,t)}function E0(i,e,t){var n,r,s,o;e==document&&(e=document.documentElement),ft.__&&ft.__(i,e),r=(n=typeof t=="function")?null:t&&t.__k||e.__k,s=[],o=[],nh(e,i=(!n&&t||e).__k=pl(Ur,null,[i]),r||dl,dl,e.namespaceURI,!n&&t?[t]:r?null:e.firstChild?Ul.call(e.childNodes):null,s,!n&&t?t:r?r.__e:e.firstChild,n,o),Am(s,i,o)}Ul=fl.slice,ft={__e:function(i,e,t,n){for(var r,s,o;e=e.__;)if((r=e.__c)&&!r.__)try{if((s=r.constructor)&&s.getDerivedStateFromError!=null&&(r.setState(s.getDerivedStateFromError(i)),o=r.__d),r.componentDidCatch!=null&&(r.componentDidCatch(i,n||{}),o=r.__d),o)return r.__E=r}catch(a){i=a}throw i}},xm=0,vm=function(i){return i!=null&&i.constructor===void 0},Do.prototype.setState=function(i,e){var t;t=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=zi({},this.state),typeof i=="function"&&(i=i(zi({},t),this.props)),i&&zi(t,i),i!=null&&this.__v&&(e&&this._sb.push(e),jh(this))},Do.prototype.forceUpdate=function(i){this.__v&&(this.__e=!0,i&&this.__h.push(i),jh(this))},Do.prototype.render=Ur,er=[],ym=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,bm=function(i,e){return i.__v.__b-e.__v.__b},ml.__r=0,Kl=Math.random().toString(8),el="__d"+Kl,Io="__a"+Kl,Mm=/(PointerCapture)$|Capture$/i,eh=0,lu=Zh(!1),cu=Zh(!0);var A0=0;function P(i,e,t,n,r,s){e||(e={});var o,a,l=e;if("ref"in l)for(a in l={},e)a=="ref"?o=e[a]:l[a]=e[a];var c={type:i,props:l,key:t,ref:o,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--A0,__i:-1,__u:0,__source:r,__self:s};if(typeof i=="function"&&(o=i.defaultProps))for(a in o)l[a]===void 0&&(l[a]=o[a]);return ft.vnode&&ft.vnode(c),c}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const rh="161",kr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},zr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},R0=0,Qh=1,C0=2,Pm=1,P0=2,Oi=3,ai=0,Tn=1,vn=2,ri=0,Ls=1,Jh=2,ed=3,td=4,L0=5,Tr=100,I0=101,D0=102,nd=103,id=104,U0=200,N0=201,F0=202,O0=203,hu=204,du=205,B0=206,k0=207,z0=208,H0=209,G0=210,V0=211,W0=212,X0=213,q0=214,Y0=0,$0=1,j0=2,gl=3,K0=4,Z0=5,Q0=6,J0=7,Lm=0,e_=1,t_=2,ar=0,n_=1,i_=2,r_=3,s_=4,o_=5,a_=6,rd="attached",l_="detached",Im=300,Fs=301,Os=302,_l=303,fu=304,Nl=306,Bs=1e3,Yt=1001,xl=1002,Qe=1003,pu=1004,Ss=1005,it=1006,nl=1007,yi=1008,si=1009,mu=1010,Dm=1011,Fl=1012,Uo=1013,On=1014,Je=1015,fn=1016,Um=1017,Nm=1018,Ar=1020,c_=1021,vt=1023,u_=1024,h_=1025,Rr=1026,ks=1027,Fm=1028,sh=1029,Om=1030,Ol=1031,Go=1033,Zl=33776,Ql=33777,Jl=33778,ec=33779,sd=35840,od=35841,ad=35842,ld=35843,Bm=36196,cd=37492,ud=37496,hd=37808,dd=37809,fd=37810,pd=37811,md=37812,gd=37813,_d=37814,xd=37815,vd=37816,yd=37817,bd=37818,Md=37819,Td=37820,Sd=37821,tc=36492,wd=36494,Ed=36495,d_=36283,Ad=36284,Rd=36285,Cd=36286,Vo=2300,zs=2301,nc=2302,Pd=2400,Ld=2401,Id=2402,f_=2500,p_=0,km=1,gu=2,zm=3e3,Cr=3001,m_=3200,g_=3201,Hm=0,__=1,rn="",Rt="srgb",Qt="srgb-linear",oh="display-p3",Bl="display-p3-linear",vl="linear",bt="srgb",yl="rec709",bl="p3",Hr=7680,Dd=519,x_=512,v_=513,y_=514,Gm=515,b_=516,M_=517,T_=518,S_=519,_u=35044,li="300 es",xu=1035,Hi=2e3,Ml=2001;class Nr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ud=1234567;const No=Math.PI/180,Hs=180/Math.PI;function oi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(un[i&255]+un[i>>8&255]+un[i>>16&255]+un[i>>24&255]+"-"+un[e&255]+un[e>>8&255]+"-"+un[e>>16&15|64]+un[e>>24&255]+"-"+un[t&63|128]+un[t>>8&255]+"-"+un[t>>16&255]+un[t>>24&255]+un[n&255]+un[n>>8&255]+un[n>>16&255]+un[n>>24&255]).toLowerCase()}function Zt(i,e,t){return Math.max(e,Math.min(t,i))}function ah(i,e){return(i%e+e)%e}function w_(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function E_(i,e,t){return i!==e?(t-i)/(e-i):0}function Fo(i,e,t){return(1-t)*i+t*e}function A_(i,e,t,n){return Fo(i,e,1-Math.exp(-t*n))}function R_(i,e=1){return e-Math.abs(ah(i,e*2)-e)}function C_(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function P_(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function L_(i,e){return i+Math.floor(Math.random()*(e-i+1))}function I_(i,e){return i+Math.random()*(e-i)}function D_(i){return i*(.5-Math.random())}function U_(i){i!==void 0&&(Ud=i);let e=Ud+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function N_(i){return i*No}function F_(i){return i*Hs}function vu(i){return(i&i-1)===0&&i!==0}function O_(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Tl(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function B_(i,e,t,n,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),u=o((e+n)/2),h=s((e-n)/2),d=o((e-n)/2),f=s((n-e)/2),g=o((n-e)/2);switch(r){case"XYX":i.set(a*u,l*h,l*d,a*c);break;case"YZY":i.set(l*d,a*u,l*h,a*c);break;case"ZXZ":i.set(l*h,l*d,a*u,a*c);break;case"XZX":i.set(a*u,l*g,l*f,a*c);break;case"YXY":i.set(l*f,a*u,l*g,a*c);break;case"ZYZ":i.set(l*g,l*f,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function ni(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ht(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Vm={DEG2RAD:No,RAD2DEG:Hs,generateUUID:oi,clamp:Zt,euclideanModulo:ah,mapLinear:w_,inverseLerp:E_,lerp:Fo,damp:A_,pingpong:R_,smoothstep:C_,smootherstep:P_,randInt:L_,randFloat:I_,randFloatSpread:D_,seededRandom:U_,degToRad:N_,radToDeg:F_,isPowerOfTwo:vu,ceilPowerOfTwo:O_,floorPowerOfTwo:Tl,setQuaternionFromProperEuler:B_,normalize:ht,denormalize:ni};class Me{constructor(e=0,t=0){Me.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Zt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ze{constructor(e,t,n,r,s,o,a,l,c){Ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c)}set(e,t,n,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],g=n[8],x=r[0],m=r[3],p=r[6],v=r[1],_=r[4],y=r[7],M=r[2],T=r[5],S=r[8];return s[0]=o*x+a*v+l*M,s[3]=o*m+a*_+l*T,s[6]=o*p+a*y+l*S,s[1]=c*x+u*v+h*M,s[4]=c*m+u*_+h*T,s[7]=c*p+u*y+h*S,s[2]=d*x+f*v+g*M,s[5]=d*m+f*_+g*T,s[8]=d*p+f*y+g*S,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*s,f=c*s-o*l,g=t*h+n*d+r*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=h*x,e[1]=(r*c-u*n)*x,e[2]=(a*n-r*o)*x,e[3]=d*x,e[4]=(u*t-r*l)*x,e[5]=(r*s-a*t)*x,e[6]=f*x,e[7]=(n*l-c*t)*x,e[8]=(o*t-n*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ic.makeScale(e,t)),this}rotate(e){return this.premultiply(ic.makeRotation(-e)),this}translate(e,t){return this.premultiply(ic.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ic=new Ze;function Wm(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Wo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function k_(){const i=Wo("canvas");return i.style.display="block",i}const Nd={};function Pr(i){i in Nd||(Nd[i]=!0,console.warn(i))}const Fd=new Ze().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Od=new Ze().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ra={[Qt]:{transfer:vl,primaries:yl,toReference:i=>i,fromReference:i=>i},[Rt]:{transfer:bt,primaries:yl,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Bl]:{transfer:vl,primaries:bl,toReference:i=>i.applyMatrix3(Od),fromReference:i=>i.applyMatrix3(Fd)},[oh]:{transfer:bt,primaries:bl,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Od),fromReference:i=>i.applyMatrix3(Fd).convertLinearToSRGB()}},z_=new Set([Qt,Bl]),ut={enabled:!0,_workingColorSpace:Qt,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!z_.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=ra[e].toReference,r=ra[t].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return ra[i].primaries},getTransfer:function(i){return i===rn?vl:ra[i].transfer}};function Is(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function rc(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Gr;class Xm{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Gr===void 0&&(Gr=Wo("canvas")),Gr.width=e.width,Gr.height=e.height;const n=Gr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Gr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){const t=Wo("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Is(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Is(t[n]/255)*255):t[n]=Is(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let H_=0;class qm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:H_++}),this.uuid=oi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(sc(r[o].image)):s.push(sc(r[o]))}else s=sc(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function sc(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?Xm.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let G_=0;class jt extends Nr{constructor(e=jt.DEFAULT_IMAGE,t=jt.DEFAULT_MAPPING,n=Yt,r=Yt,s=it,o=yi,a=vt,l=si,c=jt.DEFAULT_ANISOTROPY,u=rn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:G_++}),this.uuid=oi(),this.name="",this.source=new qm(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Me(0,0),this.repeat=new Me(1,1),this.center=new Me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Pr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Cr?Rt:rn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Im)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Bs:e.x=e.x-Math.floor(e.x);break;case Yt:e.x=e.x<0?0:1;break;case xl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Bs:e.y=e.y-Math.floor(e.y);break;case Yt:e.y=e.y<0?0:1;break;case xl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Pr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Rt?Cr:zm}set encoding(e){Pr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Cr?Rt:rn}}jt.DEFAULT_IMAGE=null;jt.DEFAULT_MAPPING=Im;jt.DEFAULT_ANISOTROPY=1;class _t{constructor(e=0,t=0,n=0,r=1){_t.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(c+1)/2,y=(f+1)/2,M=(p+1)/2,T=(u+d)/4,S=(h+x)/4,E=(g+m)/4;return _>y&&_>M?_<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(_),r=T/n,s=S/n):y>M?y<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),n=T/r,s=E/r):M<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(M),n=S/s,r=E/s),this.set(n,r,s,t),this}let v=Math.sqrt((m-g)*(m-g)+(h-x)*(h-x)+(d-u)*(d-u));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(h-x)/v,this.z=(d-u)/v,this.w=Math.acos((c+f+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class V_ extends Nr{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new _t(0,0,e,t),this.scissorTest=!1,this.viewport=new _t(0,0,e,t);const r={width:e,height:t,depth:1};n.encoding!==void 0&&(Pr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Cr?Rt:rn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:it,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new jt(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new qm(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class pn extends V_{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Ym extends jt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Qe,this.minFilter=Qe,this.wrapR=Yt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class W_ extends jt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Qe,this.minFilter=Qe,this.wrapR=Yt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class X_ extends pn{constructor(e=1,t=1,n=1,r={}){super(e,t,r),this.isWebGLMultipleRenderTargets=!0;const s=this.texture;this.texture=[];for(let o=0;o<n;o++)this.texture[o]=s.clone(),this.texture[o].isRenderTargetTexture=!0}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.texture.length;r<s;r++)this.texture[r].image.width=e,this.texture[r].image.height=t,this.texture[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}copy(e){this.dispose(),this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.texture.length=0;for(let t=0,n=e.texture.length;t<n;t++)this.texture[t]=e.texture[t].clone(),this.texture[t].isRenderTargetTexture=!0;return this}}class qt{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],c=n[r+1],u=n[r+2],h=n[r+3];const d=s[o+0],f=s[o+1],g=s[o+2],x=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=x;return}if(h!==x||l!==d||c!==f||u!==g){let m=1-a;const p=l*d+c*f+u*g+h*x,v=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){const M=Math.sqrt(_),T=Math.atan2(M,p*v);m=Math.sin(m*T)/M,a=Math.sin(a*T)/M}const y=a*v;if(l=l*m+d*y,c=c*m+f*y,u=u*m+g*y,h=h*m+x*y,m===1-a){const M=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=M,c*=M,u*=M,h*=M}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],h=s[o],d=s[o+1],f=s[o+2],g=s[o+3];return e[t]=a*g+u*h+l*f-c*d,e[t+1]=l*g+u*d+c*h-a*f,e[t+2]=c*g+u*f+a*d-l*h,e[t+3]=u*g-a*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),h=a(s/2),d=l(n/2),f=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"YZX":this._x=d*u*h+c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h-d*f*g;break;case"XZY":this._x=d*u*h-c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(s-c)*f,this._z=(o-r)*f}else if(n>a&&n>h){const f=2*Math.sqrt(1+n-a-h);this._w=(u-l)/f,this._x=.25*f,this._y=(r+o)/f,this._z=(s+c)/f}else if(a>h){const f=2*Math.sqrt(1+a-n-h);this._w=(s-c)/f,this._x=(r+o)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+h-n-a);this._w=(o-r)/f,this._x=(s+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Zt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-r*a,this._w=o*u-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*r+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(s),n*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(e=0,t=0,n=0){C.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Bd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Bd.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*n),u=2*(a*t-s*r),h=2*(s*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-s*h,this.z=r+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return oc.copy(this).projectOnVector(e),this.sub(oc)}reflect(e){return this.sub(oc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Zt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const oc=new C,Bd=new qt;class zt{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(jn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(jn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=jn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,jn):jn.fromBufferAttribute(s,o),jn.applyMatrix4(e.matrixWorld),this.expandByPoint(jn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),sa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),sa.copy(n.boundingBox)),sa.applyMatrix4(e.matrixWorld),this.union(sa)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,jn),jn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(no),oa.subVectors(this.max,no),Vr.subVectors(e.a,no),Wr.subVectors(e.b,no),Xr.subVectors(e.c,no),Vi.subVectors(Wr,Vr),Wi.subVectors(Xr,Wr),mr.subVectors(Vr,Xr);let t=[0,-Vi.z,Vi.y,0,-Wi.z,Wi.y,0,-mr.z,mr.y,Vi.z,0,-Vi.x,Wi.z,0,-Wi.x,mr.z,0,-mr.x,-Vi.y,Vi.x,0,-Wi.y,Wi.x,0,-mr.y,mr.x,0];return!ac(t,Vr,Wr,Xr,oa)||(t=[1,0,0,0,1,0,0,0,1],!ac(t,Vr,Wr,Xr,oa))?!1:(aa.crossVectors(Vi,Wi),t=[aa.x,aa.y,aa.z],ac(t,Vr,Wr,Xr,oa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,jn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(jn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Pi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Pi=[new C,new C,new C,new C,new C,new C,new C,new C],jn=new C,sa=new zt,Vr=new C,Wr=new C,Xr=new C,Vi=new C,Wi=new C,mr=new C,no=new C,oa=new C,aa=new C,gr=new C;function ac(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){gr.fromArray(i,s);const a=r.x*Math.abs(gr.x)+r.y*Math.abs(gr.y)+r.z*Math.abs(gr.z),l=e.dot(gr),c=t.dot(gr),u=n.dot(gr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const q_=new zt,io=new C,lc=new C;class hi{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):q_.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;io.subVectors(e,this.center);const t=io.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(io,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(lc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(io.copy(e.center).add(lc)),this.expandByPoint(io.copy(e.center).sub(lc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Li=new C,cc=new C,la=new C,Xi=new C,uc=new C,ca=new C,hc=new C;class Ys{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Li)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Li.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Li.copy(this.origin).addScaledVector(this.direction,t),Li.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){cc.copy(e).add(t).multiplyScalar(.5),la.copy(t).sub(e).normalize(),Xi.copy(this.origin).sub(cc);const s=e.distanceTo(t)*.5,o=-this.direction.dot(la),a=Xi.dot(this.direction),l=-Xi.dot(la),c=Xi.lengthSq(),u=Math.abs(1-o*o);let h,d,f,g;if(u>0)if(h=o*l-a,d=o*a-l,g=s*u,h>=0)if(d>=-g)if(d<=g){const x=1/u;h*=x,d*=x,f=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(cc).addScaledVector(la,d),f}intersectSphere(e,t){Li.subVectors(e.center,this.origin);const n=Li.dot(this.direction),r=Li.dot(Li)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Li)!==null}intersectTriangle(e,t,n,r,s){uc.subVectors(t,e),ca.subVectors(n,e),hc.crossVectors(uc,ca);let o=this.direction.dot(hc),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Xi.subVectors(this.origin,e);const l=a*this.direction.dot(ca.crossVectors(Xi,ca));if(l<0)return null;const c=a*this.direction.dot(uc.cross(Xi));if(c<0||l+c>o)return null;const u=-a*Xi.dot(hc);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Fe{constructor(e,t,n,r,s,o,a,l,c,u,h,d,f,g,x,m){Fe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c,u,h,d,f,g,x,m)}set(e,t,n,r,s,o,a,l,c,u,h,d,f,g,x,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Fe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/qr.setFromMatrixColumn(e,0).length(),s=1/qr.setFromMatrixColumn(e,1).length(),o=1/qr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=o*u,f=o*h,g=a*u,x=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+g*c,t[5]=d-x*c,t[9]=-a*l,t[2]=x-d*c,t[6]=g+f*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,f=l*h,g=c*u,x=c*h;t[0]=d+x*a,t[4]=g*a-f,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-g,t[6]=x+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,f=l*h,g=c*u,x=c*h;t[0]=d-x*a,t[4]=-o*h,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*u,t[9]=x-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,f=o*h,g=a*u,x=a*h;t[0]=l*u,t[4]=g*c-f,t[8]=d*c+x,t[1]=l*h,t[5]=x*c+d,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,f=o*c,g=a*l,x=a*c;t[0]=l*u,t[4]=x-d*h,t[8]=g*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=f*h+g,t[10]=d-x*h}else if(e.order==="XZY"){const d=o*l,f=o*c,g=a*l,x=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+x,t[5]=o*u,t[9]=f*h-g,t[2]=g*h-f,t[6]=a*u,t[10]=x*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Y_,e,$_)}lookAt(e,t,n){const r=this.elements;return Pn.subVectors(e,t),Pn.lengthSq()===0&&(Pn.z=1),Pn.normalize(),qi.crossVectors(n,Pn),qi.lengthSq()===0&&(Math.abs(n.z)===1?Pn.x+=1e-4:Pn.z+=1e-4,Pn.normalize(),qi.crossVectors(n,Pn)),qi.normalize(),ua.crossVectors(Pn,qi),r[0]=qi.x,r[4]=ua.x,r[8]=Pn.x,r[1]=qi.y,r[5]=ua.y,r[9]=Pn.y,r[2]=qi.z,r[6]=ua.z,r[10]=Pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],g=n[2],x=n[6],m=n[10],p=n[14],v=n[3],_=n[7],y=n[11],M=n[15],T=r[0],S=r[4],E=r[8],L=r[12],b=r[1],w=r[5],U=r[9],k=r[13],R=r[2],F=r[6],B=r[10],V=r[14],X=r[3],G=r[7],Y=r[11],J=r[15];return s[0]=o*T+a*b+l*R+c*X,s[4]=o*S+a*w+l*F+c*G,s[8]=o*E+a*U+l*B+c*Y,s[12]=o*L+a*k+l*V+c*J,s[1]=u*T+h*b+d*R+f*X,s[5]=u*S+h*w+d*F+f*G,s[9]=u*E+h*U+d*B+f*Y,s[13]=u*L+h*k+d*V+f*J,s[2]=g*T+x*b+m*R+p*X,s[6]=g*S+x*w+m*F+p*G,s[10]=g*E+x*U+m*B+p*Y,s[14]=g*L+x*k+m*V+p*J,s[3]=v*T+_*b+y*R+M*X,s[7]=v*S+_*w+y*F+M*G,s[11]=v*E+_*U+y*B+M*Y,s[15]=v*L+_*k+y*V+M*J,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],g=e[3],x=e[7],m=e[11],p=e[15];return g*(+s*l*h-r*c*h-s*a*d+n*c*d+r*a*f-n*l*f)+x*(+t*l*f-t*c*d+s*o*d-r*o*f+r*c*u-s*l*u)+m*(+t*c*h-t*a*f-s*o*h+n*o*f+s*a*u-n*c*u)+p*(-r*a*u-t*l*h+t*a*d+r*o*h-n*o*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],g=e[12],x=e[13],m=e[14],p=e[15],v=h*m*c-x*d*c+x*l*f-a*m*f-h*l*p+a*d*p,_=g*d*c-u*m*c-g*l*f+o*m*f+u*l*p-o*d*p,y=u*x*c-g*h*c+g*a*f-o*x*f-u*a*p+o*h*p,M=g*h*l-u*x*l-g*a*d+o*x*d+u*a*m-o*h*m,T=t*v+n*_+r*y+s*M;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const S=1/T;return e[0]=v*S,e[1]=(x*d*s-h*m*s-x*r*f+n*m*f+h*r*p-n*d*p)*S,e[2]=(a*m*s-x*l*s+x*r*c-n*m*c-a*r*p+n*l*p)*S,e[3]=(h*l*s-a*d*s-h*r*c+n*d*c+a*r*f-n*l*f)*S,e[4]=_*S,e[5]=(u*m*s-g*d*s+g*r*f-t*m*f-u*r*p+t*d*p)*S,e[6]=(g*l*s-o*m*s-g*r*c+t*m*c+o*r*p-t*l*p)*S,e[7]=(o*d*s-u*l*s+u*r*c-t*d*c-o*r*f+t*l*f)*S,e[8]=y*S,e[9]=(g*h*s-u*x*s-g*n*f+t*x*f+u*n*p-t*h*p)*S,e[10]=(o*x*s-g*a*s+g*n*c-t*x*c-o*n*p+t*a*p)*S,e[11]=(u*a*s-o*h*s-u*n*c+t*h*c+o*n*f-t*a*f)*S,e[12]=M*S,e[13]=(u*x*r-g*h*r+g*n*d-t*x*d-u*n*m+t*h*m)*S,e[14]=(g*a*r-o*x*r-g*n*l+t*x*l+o*n*m-t*a*m)*S,e[15]=(o*h*r-u*a*r+u*n*l-t*h*l-o*n*d+t*a*d)*S,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,d=s*c,f=s*u,g=s*h,x=o*u,m=o*h,p=a*h,v=l*c,_=l*u,y=l*h,M=n.x,T=n.y,S=n.z;return r[0]=(1-(x+p))*M,r[1]=(f+y)*M,r[2]=(g-_)*M,r[3]=0,r[4]=(f-y)*T,r[5]=(1-(d+p))*T,r[6]=(m+v)*T,r[7]=0,r[8]=(g+_)*S,r[9]=(m-v)*S,r[10]=(1-(d+x))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=qr.set(r[0],r[1],r[2]).length();const o=qr.set(r[4],r[5],r[6]).length(),a=qr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Kn.copy(this);const c=1/s,u=1/o,h=1/a;return Kn.elements[0]*=c,Kn.elements[1]*=c,Kn.elements[2]*=c,Kn.elements[4]*=u,Kn.elements[5]*=u,Kn.elements[6]*=u,Kn.elements[8]*=h,Kn.elements[9]*=h,Kn.elements[10]*=h,t.setFromRotationMatrix(Kn),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o,a=Hi){const l=this.elements,c=2*s/(t-e),u=2*s/(n-r),h=(t+e)/(t-e),d=(n+r)/(n-r);let f,g;if(a===Hi)f=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Ml)f=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=Hi){const l=this.elements,c=1/(t-e),u=1/(n-r),h=1/(o-s),d=(t+e)*c,f=(n+r)*u;let g,x;if(a===Hi)g=(o+s)*h,x=-2*h;else if(a===Ml)g=s*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const qr=new C,Kn=new Fe,Y_=new C(0,0,0),$_=new C(1,1,1),qi=new C,ua=new C,Pn=new C,kd=new Fe,zd=new qt;class jo{constructor(e=0,t=0,n=0,r=jo.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],d=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(Zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Zt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Zt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Zt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Zt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return kd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(kd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return zd.setFromEuler(this),this.setFromQuaternion(zd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}jo.DEFAULT_ORDER="XYZ";class lh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let j_=0;const Hd=new C,Yr=new qt,Ii=new Fe,ha=new C,ro=new C,K_=new C,Z_=new qt,Gd=new C(1,0,0),Vd=new C(0,1,0),Wd=new C(0,0,1),Q_={type:"added"},J_={type:"removed"};class Ye extends Nr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:j_++}),this.uuid=oi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ye.DEFAULT_UP.clone();const e=new C,t=new jo,n=new qt,r=new C(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Fe},normalMatrix:{value:new Ze}}),this.matrix=new Fe,this.matrixWorld=new Fe,this.matrixAutoUpdate=Ye.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new lh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Yr.setFromAxisAngle(e,t),this.quaternion.multiply(Yr),this}rotateOnWorldAxis(e,t){return Yr.setFromAxisAngle(e,t),this.quaternion.premultiply(Yr),this}rotateX(e){return this.rotateOnAxis(Gd,e)}rotateY(e){return this.rotateOnAxis(Vd,e)}rotateZ(e){return this.rotateOnAxis(Wd,e)}translateOnAxis(e,t){return Hd.copy(e).applyQuaternion(this.quaternion),this.position.add(Hd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Gd,e)}translateY(e){return this.translateOnAxis(Vd,e)}translateZ(e){return this.translateOnAxis(Wd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ii.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ha.copy(e):ha.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),ro.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ii.lookAt(ro,ha,this.up):Ii.lookAt(ha,ro,this.up),this.quaternion.setFromRotationMatrix(Ii),r&&(Ii.extractRotation(r.matrixWorld),Yr.setFromRotationMatrix(Ii),this.quaternion.premultiply(Yr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Q_)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(J_)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ii.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ii.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ii),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ro,e,K_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ro,Z_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=r,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Ye.DEFAULT_UP=new C(0,1,0);Ye.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Zn=new C,Di=new C,dc=new C,Ui=new C,$r=new C,jr=new C,Xd=new C,fc=new C,pc=new C,mc=new C;class yn{constructor(e=new C,t=new C,n=new C){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Zn.subVectors(e,t),r.cross(Zn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Zn.subVectors(r,t),Di.subVectors(n,t),dc.subVectors(e,t);const o=Zn.dot(Zn),a=Zn.dot(Di),l=Zn.dot(dc),c=Di.dot(Di),u=Di.dot(dc),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const d=1/h,f=(c*l-a*u)*d,g=(o*u-a*l)*d;return s.set(1-f-g,g,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Ui)===null?!1:Ui.x>=0&&Ui.y>=0&&Ui.x+Ui.y<=1}static getInterpolation(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,Ui)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ui.x),l.addScaledVector(o,Ui.y),l.addScaledVector(a,Ui.z),l)}static isFrontFacing(e,t,n,r){return Zn.subVectors(n,t),Di.subVectors(e,t),Zn.cross(Di).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Zn.subVectors(this.c,this.b),Di.subVectors(this.a,this.b),Zn.cross(Di).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return yn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return yn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return yn.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return yn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return yn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;$r.subVectors(r,n),jr.subVectors(s,n),fc.subVectors(e,n);const l=$r.dot(fc),c=jr.dot(fc);if(l<=0&&c<=0)return t.copy(n);pc.subVectors(e,r);const u=$r.dot(pc),h=jr.dot(pc);if(u>=0&&h<=u)return t.copy(r);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector($r,o);mc.subVectors(e,s);const f=$r.dot(mc),g=jr.dot(mc);if(g>=0&&f<=g)return t.copy(s);const x=f*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(jr,a);const m=u*g-f*h;if(m<=0&&h-u>=0&&f-g>=0)return Xd.subVectors(s,r),a=(h-u)/(h-u+(f-g)),t.copy(r).addScaledVector(Xd,a);const p=1/(m+x+d);return o=x*p,a=d*p,t.copy(n).addScaledVector($r,o).addScaledVector(jr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const $m={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yi={h:0,s:0,l:0},da={h:0,s:0,l:0};function gc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Re{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Rt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ut.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=ut.workingColorSpace){return this.r=e,this.g=t,this.b=n,ut.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=ut.workingColorSpace){if(e=ah(e,1),t=Zt(t,0,1),n=Zt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=gc(o,s,e+1/3),this.g=gc(o,s,e),this.b=gc(o,s,e-1/3)}return ut.toWorkingColorSpace(this,r),this}setStyle(e,t=Rt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Rt){const n=$m[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Is(e.r),this.g=Is(e.g),this.b=Is(e.b),this}copyLinearToSRGB(e){return this.r=rc(e.r),this.g=rc(e.g),this.b=rc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Rt){return ut.fromWorkingColorSpace(hn.copy(this),e),Math.round(Zt(hn.r*255,0,255))*65536+Math.round(Zt(hn.g*255,0,255))*256+Math.round(Zt(hn.b*255,0,255))}getHexString(e=Rt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ut.workingColorSpace){ut.fromWorkingColorSpace(hn.copy(this),t);const n=hn.r,r=hn.g,s=hn.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-n)/h+2;break;case s:l=(n-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ut.workingColorSpace){return ut.fromWorkingColorSpace(hn.copy(this),t),e.r=hn.r,e.g=hn.g,e.b=hn.b,e}getStyle(e=Rt){ut.fromWorkingColorSpace(hn.copy(this),e);const t=hn.r,n=hn.g,r=hn.b;return e!==Rt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Yi),this.setHSL(Yi.h+e,Yi.s+t,Yi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Yi),e.getHSL(da);const n=Fo(Yi.h,da.h,t),r=Fo(Yi.s,da.s,t),s=Fo(Yi.l,da.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const hn=new Re;Re.NAMES=$m;let ex=0;class Ti extends Nr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ex++}),this.uuid=oi(),this.name="",this.type="Material",this.blending=Ls,this.side=ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=hu,this.blendDst=du,this.blendEquation=Tr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Re(0,0,0),this.blendAlpha=0,this.depthFunc=gl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Dd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hr,this.stencilZFail=Hr,this.stencilZPass=Hr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ls&&(n.blending=this.blending),this.side!==ai&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==hu&&(n.blendSrc=this.blendSrc),this.blendDst!==du&&(n.blendDst=this.blendDst),this.blendEquation!==Tr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==gl&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Dd&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Hr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Hr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Hr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class bi extends Ti{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Lm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ki=tx();function tx(){const i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),r=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,r[l]=24,r[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,r[l]=-c-1,r[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,r[l]=13,r[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,r[l]=24,r[l|256]=24):(n[l]=31744,n[l|256]=64512,r[l]=13,r[l|256]=13)}const s=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;(c&8388608)===0;)c<<=1,u-=8388608;c&=-8388609,u+=947912704,s[l]=c|u}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:r,mantissaTable:s,exponentTable:o,offsetTable:a}}function nx(i){Math.abs(i)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),i=Zt(i,-65504,65504),ki.floatView[0]=i;const e=ki.uint32View[0],t=e>>23&511;return ki.baseTable[t]+((e&8388607)>>ki.shiftTable[t])}function ix(i){const e=i>>10;return ki.uint32View[0]=ki.mantissaTable[ki.offsetTable[e]+(i&1023)]+ki.exponentTable[e],ki.floatView[0]}const wo={toHalfFloat:nx,fromHalfFloat:ix},Gt=new C,fa=new Me;class Tt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=_u,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Je,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Pr("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)fa.fromBufferAttribute(this,t),fa.applyMatrix3(e),this.setXY(t,fa.x,fa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix3(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix4(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyNormalMatrix(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.transformDirection(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ni(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ht(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ni(t,this.array)),t}setX(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ni(t,this.array)),t}setY(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ni(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ni(t,this.array)),t}setW(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),r=ht(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),r=ht(r,this.array),s=ht(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==_u&&(e.usage=this.usage),e}}class jm extends Tt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Km extends Tt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class yt extends Tt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let rx=0;const Vn=new Fe,_c=new Ye,Kr=new C,Ln=new zt,so=new zt,nn=new C;class sn extends Nr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:rx++}),this.uuid=oi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Wm(e)?Km:jm)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ze().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Vn.makeRotationFromQuaternion(e),this.applyMatrix4(Vn),this}rotateX(e){return Vn.makeRotationX(e),this.applyMatrix4(Vn),this}rotateY(e){return Vn.makeRotationY(e),this.applyMatrix4(Vn),this}rotateZ(e){return Vn.makeRotationZ(e),this.applyMatrix4(Vn),this}translate(e,t,n){return Vn.makeTranslation(e,t,n),this.applyMatrix4(Vn),this}scale(e,t,n){return Vn.makeScale(e,t,n),this.applyMatrix4(Vn),this}lookAt(e){return _c.lookAt(e),_c.updateMatrix(),this.applyMatrix4(_c.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Kr).negate(),this.translate(Kr.x,Kr.y,Kr.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new yt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Ln.setFromBufferAttribute(s),this.morphTargetsRelative?(nn.addVectors(this.boundingBox.min,Ln.min),this.boundingBox.expandByPoint(nn),nn.addVectors(this.boundingBox.max,Ln.max),this.boundingBox.expandByPoint(nn)):(this.boundingBox.expandByPoint(Ln.min),this.boundingBox.expandByPoint(Ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new C,1/0);return}if(e){const n=this.boundingSphere.center;if(Ln.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];so.setFromBufferAttribute(a),this.morphTargetsRelative?(nn.addVectors(Ln.min,so.min),Ln.expandByPoint(nn),nn.addVectors(Ln.max,so.max),Ln.expandByPoint(nn)):(Ln.expandByPoint(so.min),Ln.expandByPoint(so.max))}Ln.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)nn.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(nn));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)nn.fromBufferAttribute(a,c),l&&(Kr.fromBufferAttribute(e,c),nn.add(Kr)),r=Math.max(r,n.distanceToSquared(nn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Tt(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let b=0;b<a;b++)c[b]=new C,u[b]=new C;const h=new C,d=new C,f=new C,g=new Me,x=new Me,m=new Me,p=new C,v=new C;function _(b,w,U){h.fromArray(r,b*3),d.fromArray(r,w*3),f.fromArray(r,U*3),g.fromArray(o,b*2),x.fromArray(o,w*2),m.fromArray(o,U*2),d.sub(h),f.sub(h),x.sub(g),m.sub(g);const k=1/(x.x*m.y-m.x*x.y);!isFinite(k)||(p.copy(d).multiplyScalar(m.y).addScaledVector(f,-x.y).multiplyScalar(k),v.copy(f).multiplyScalar(x.x).addScaledVector(d,-m.x).multiplyScalar(k),c[b].add(p),c[w].add(p),c[U].add(p),u[b].add(v),u[w].add(v),u[U].add(v))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let b=0,w=y.length;b<w;++b){const U=y[b],k=U.start,R=U.count;for(let F=k,B=k+R;F<B;F+=3)_(n[F+0],n[F+1],n[F+2])}const M=new C,T=new C,S=new C,E=new C;function L(b){S.fromArray(s,b*3),E.copy(S);const w=c[b];M.copy(w),M.sub(S.multiplyScalar(S.dot(w))).normalize(),T.crossVectors(E,w);const k=T.dot(u[b])<0?-1:1;l[b*4]=M.x,l[b*4+1]=M.y,l[b*4+2]=M.z,l[b*4+3]=k}for(let b=0,w=y.length;b<w;++b){const U=y[b],k=U.start,R=U.count;for(let F=k,B=k+R;F<B;F+=3)L(n[F+0]),L(n[F+1]),L(n[F+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Tt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const r=new C,s=new C,o=new C,a=new C,l=new C,c=new C,u=new C,h=new C;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)nn.fromBufferAttribute(e,t),nn.normalize(),e.setXYZ(t,nn.x,nn.y,nn.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let f=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*u;for(let p=0;p<u;p++)d[g++]=c[f++]}return new Tt(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new sn,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const qd=new Fe,_r=new Ys,pa=new hi,Yd=new C,Zr=new C,Qr=new C,Jr=new C,xc=new C,ma=new C,ga=new Me,_a=new Me,xa=new Me,$d=new C,jd=new C,Kd=new C,va=new C,ya=new C;class $ extends Ye{constructor(e=new sn,t=new bi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){ma.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(xc.fromBufferAttribute(h,e),o?ma.addScaledVector(xc,u):ma.addScaledVector(xc.sub(t),u))}t.add(ma)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),pa.copy(n.boundingSphere),pa.applyMatrix4(s),_r.copy(e.ray).recast(e.near),!(pa.containsPoint(_r.origin)===!1&&(_r.intersectSphere(pa,Yd)===null||_r.origin.distanceToSquared(Yd)>(e.far-e.near)**2))&&(qd.copy(s).invert(),_r.copy(e.ray).applyMatrix4(qd),!(n.boundingBox!==null&&_r.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,_r)))}_computeIntersections(e,t,n){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){const m=d[g],p=o[m.materialIndex],v=Math.max(m.start,f.start),_=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let y=v,M=_;y<M;y+=3){const T=a.getX(y),S=a.getX(y+1),E=a.getX(y+2);r=ba(this,p,e,n,c,u,h,T,S,E),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){const v=a.getX(m),_=a.getX(m+1),y=a.getX(m+2);r=ba(this,o,e,n,c,u,h,v,_,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){const m=d[g],p=o[m.materialIndex],v=Math.max(m.start,f.start),_=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let y=v,M=_;y<M;y+=3){const T=y,S=y+1,E=y+2;r=ba(this,p,e,n,c,u,h,T,S,E),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){const v=m,_=m+1,y=m+2;r=ba(this,o,e,n,c,u,h,v,_,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function sx(i,e,t,n,r,s,o,a){let l;if(e.side===Tn?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side===ai,a),l===null)return null;ya.copy(a),ya.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(ya);return c<t.near||c>t.far?null:{distance:c,point:ya.clone(),object:i}}function ba(i,e,t,n,r,s,o,a,l,c){i.getVertexPosition(a,Zr),i.getVertexPosition(l,Qr),i.getVertexPosition(c,Jr);const u=sx(i,e,t,n,Zr,Qr,Jr,va);if(u){r&&(ga.fromBufferAttribute(r,a),_a.fromBufferAttribute(r,l),xa.fromBufferAttribute(r,c),u.uv=yn.getInterpolation(va,Zr,Qr,Jr,ga,_a,xa,new Me)),s&&(ga.fromBufferAttribute(s,a),_a.fromBufferAttribute(s,l),xa.fromBufferAttribute(s,c),u.uv1=yn.getInterpolation(va,Zr,Qr,Jr,ga,_a,xa,new Me),u.uv2=u.uv1),o&&($d.fromBufferAttribute(o,a),jd.fromBufferAttribute(o,l),Kd.fromBufferAttribute(o,c),u.normal=yn.getInterpolation(va,Zr,Qr,Jr,$d,jd,Kd,new C),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new C,materialIndex:0};yn.getNormal(Zr,Qr,Jr,h.normal),u.face=h}return u}class _e extends sn{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,r,o,2),g("x","z","y",1,-1,e,n,-t,r,o,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new yt(c,3)),this.setAttribute("normal",new yt(u,3)),this.setAttribute("uv",new yt(h,2));function g(x,m,p,v,_,y,M,T,S,E,L){const b=y/S,w=M/E,U=y/2,k=M/2,R=T/2,F=S+1,B=E+1;let V=0,X=0;const G=new C;for(let Y=0;Y<B;Y++){const J=Y*w-k;for(let ne=0;ne<F;ne++){const ee=ne*b-U;G[x]=ee*v,G[m]=J*_,G[p]=R,c.push(G.x,G.y,G.z),G[x]=0,G[m]=0,G[p]=T>0?1:-1,u.push(G.x,G.y,G.z),h.push(ne/S),h.push(1-Y/E),V+=1}}for(let Y=0;Y<E;Y++)for(let J=0;J<S;J++){const ne=d+J+F*Y,ee=d+J+F*(Y+1),z=d+(J+1)+F*(Y+1),j=d+(J+1)+F*Y;l.push(ne,ee,j),l.push(ee,z,j),X+=6}a.addGroup(f,X,L),f+=X,d+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _e(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Gs(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function _n(i){const e={};for(let t=0;t<i.length;t++){const n=Gs(i[t]);for(const r in n)e[r]=n[r]}return e}function ox(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Zm(i){return i.getRenderTarget()===null?i.outputColorSpace:ut.workingColorSpace}const ax={clone:Gs,merge:_n};var lx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class kt extends Ti{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=lx,this.fragmentShader=cx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Gs(e.uniforms),this.uniformsGroups=ox(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Qm extends Ye{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Fe,this.projectionMatrix=new Fe,this.projectionMatrixInverse=new Fe,this.coordinateSystem=Hi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const $i=new C,Zd=new Me,Qd=new Me;class xn extends Qm{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Hs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(No*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Hs*2*Math.atan(Math.tan(No*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){$i.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set($i.x,$i.y).multiplyScalar(-e/$i.z),$i.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set($i.x,$i.y).multiplyScalar(-e/$i.z)}getViewSize(e,t){return this.getViewBounds(e,Zd,Qd),t.subVectors(Qd,Zd)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(No*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const es=-90,ts=1;class ux extends Ye{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new xn(es,ts,e,t);r.layers=this.layers,this.add(r);const s=new xn(es,ts,e,t);s.layers=this.layers,this.add(s);const o=new xn(es,ts,e,t);o.layers=this.layers,this.add(o);const a=new xn(es,ts,e,t);a.layers=this.layers,this.add(a);const l=new xn(es,ts,e,t);l.layers=this.layers,this.add(l);const c=new xn(es,ts,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Hi)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ml)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Jm extends jt{constructor(e,t,n,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Fs,super(e,t,n,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class hx extends pn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];t.encoding!==void 0&&(Pr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Cr?Rt:rn),this.texture=new Jm(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:it}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new _e(5,5,5),s=new kt({name:"CubemapFromEquirect",uniforms:Gs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Tn,blending:ri});s.uniforms.tEquirect.value=t;const o=new $(r,s),a=t.minFilter;return t.minFilter===yi&&(t.minFilter=it),new ux(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}const vc=new C,dx=new C,fx=new Ze;class ti{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=vc.subVectors(n,t).cross(dx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(vc),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||fx.getNormalMatrix(e),r=this.coplanarPoint(vc).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const xr=new hi,Ma=new C;class ch{constructor(e=new ti,t=new ti,n=new ti,r=new ti,s=new ti,o=new ti){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Hi){const n=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],h=r[6],d=r[7],f=r[8],g=r[9],x=r[10],m=r[11],p=r[12],v=r[13],_=r[14],y=r[15];if(n[0].setComponents(l-s,d-c,m-f,y-p).normalize(),n[1].setComponents(l+s,d+c,m+f,y+p).normalize(),n[2].setComponents(l+o,d+u,m+g,y+v).normalize(),n[3].setComponents(l-o,d-u,m-g,y-v).normalize(),n[4].setComponents(l-a,d-h,m-x,y-_).normalize(),t===Hi)n[5].setComponents(l+a,d+h,m+x,y+_).normalize();else if(t===Ml)n[5].setComponents(a,h,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),xr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),xr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(xr)}intersectsSprite(e){return xr.center.set(0,0,0),xr.radius=.7071067811865476,xr.applyMatrix4(e.matrixWorld),this.intersectsSphere(xr)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Ma.x=r.normal.x>0?e.max.x:e.min.x,Ma.y=r.normal.y>0?e.max.y:e.min.y,Ma.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ma)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function eg(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function px(i,e){const t=e.isWebGL2,n=new WeakMap;function r(c,u){const h=c.array,d=c.usage,f=h.byteLength,g=i.createBuffer();i.bindBuffer(u,g),i.bufferData(u,h,d),c.onUploadCallback();let x;if(h instanceof Float32Array)x=i.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)x=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)x=i.SHORT;else if(h instanceof Uint32Array)x=i.UNSIGNED_INT;else if(h instanceof Int32Array)x=i.INT;else if(h instanceof Int8Array)x=i.BYTE;else if(h instanceof Uint8Array)x=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)x=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:x,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:f}}function s(c,u,h){const d=u.array,f=u._updateRange,g=u.updateRanges;if(i.bindBuffer(h,c),f.count===-1&&g.length===0&&i.bufferSubData(h,0,d),g.length!==0){for(let x=0,m=g.length;x<m;x++){const p=g[x];t?i.bufferSubData(h,p.start*d.BYTES_PER_ELEMENT,d,p.start,p.count):i.bufferSubData(h,p.start*d.BYTES_PER_ELEMENT,d.subarray(p.start,p.start+p.count))}u.clearUpdateRanges()}f.count!==-1&&(t?i.bufferSubData(h,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):i.bufferSubData(h,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(i.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);if(h===void 0)n.set(c,r(c,u));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,c,u),h.version=c.version}}return{get:o,remove:a,update:l}}class Rn extends sn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,h=e/a,d=t/l,f=[],g=[],x=[],m=[];for(let p=0;p<u;p++){const v=p*d-o;for(let _=0;_<c;_++){const y=_*h-s;g.push(y,-v,0),x.push(0,0,1),m.push(_/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<a;v++){const _=v+c*p,y=v+c*(p+1),M=v+1+c*(p+1),T=v+1+c*p;f.push(_,y,T),f.push(y,M,T)}this.setIndex(f),this.setAttribute("position",new yt(g,3)),this.setAttribute("normal",new yt(x,3)),this.setAttribute("uv",new yt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rn(e.width,e.height,e.widthSegments,e.heightSegments)}}var mx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,gx=`#ifdef USE_ALPHAHASH
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
#endif`,_x=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,yx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bx=`#ifdef USE_AOMAP
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
#endif`,Mx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Tx=`#ifdef USE_BATCHING
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
#endif`,Sx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,wx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ex=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ax=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Rx=`#ifdef USE_IRIDESCENCE
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
#endif`,Cx=`#ifdef USE_BUMPMAP
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
#endif`,Px=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Lx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ix=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Dx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ux=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Nx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Fx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Ox=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Bx=`#define PI 3.141592653589793
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
} // validated`,kx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,zx=`vec3 transformedNormal = objectNormal;
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
#endif`,Hx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Gx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Vx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Wx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Xx="gl_FragColor = linearToOutputTexel( gl_FragColor );",qx=`
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
}`,Yx=`#ifdef USE_ENVMAP
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
#endif`,$x=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,jx=`#ifdef USE_ENVMAP
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
#endif`,Kx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Zx=`#ifdef USE_ENVMAP
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
#endif`,Qx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Jx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ev=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,tv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,nv=`#ifdef USE_GRADIENTMAP
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
}`,iv=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,rv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,sv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ov=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,av=`uniform bool receiveShadow;
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
#endif`,lv=`#ifdef USE_ENVMAP
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
#endif`,cv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,uv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,hv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,dv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,fv=`PhysicalMaterial material;
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
#endif`,pv=`struct PhysicalMaterial {
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
}`,mv=`
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
#endif`,gv=`#if defined( RE_IndirectDiffuse )
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
#endif`,_v=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xv=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,vv=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yv=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,bv=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Mv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Tv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Sv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,wv=`#if defined( USE_POINTS_UV )
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
#endif`,Ev=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Av=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Rv=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Cv=`#ifdef USE_MORPHNORMALS
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
#endif`,Pv=`#ifdef USE_MORPHTARGETS
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
#endif`,Lv=`#ifdef USE_MORPHTARGETS
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
#endif`,Iv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Dv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Uv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Nv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ov=`#ifdef USE_NORMALMAP
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
#endif`,Bv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,kv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Hv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Gv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Vv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Wv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Xv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,qv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Yv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$v=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,jv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Kv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Zv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Qv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Jv=`float getShadowMask() {
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
}`,ey=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ty=`#ifdef USE_SKINNING
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
#endif`,ny=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,iy=`#ifdef USE_SKINNING
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
#endif`,ry=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,sy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,oy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ay=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ly=`#ifdef USE_TRANSMISSION
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
#endif`,cy=`#ifdef USE_TRANSMISSION
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
#endif`,uy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const py=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,my=`uniform sampler2D t2D;
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
}`,gy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_y=`#ifdef ENVMAP_TYPE_CUBE
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
}`,xy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yy=`#include <common>
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
}`,by=`#if DEPTH_PACKING == 3200
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
}`,My=`#define DISTANCE
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
}`,Ty=`#define DISTANCE
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
}`,Sy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ey=`uniform float scale;
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
}`,Ay=`uniform vec3 diffuse;
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
}`,Ry=`#include <common>
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
}`,Cy=`uniform vec3 diffuse;
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
}`,Py=`#define LAMBERT
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
}`,Ly=`#define LAMBERT
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
}`,Iy=`#define MATCAP
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
}`,Dy=`#define MATCAP
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
}`,Uy=`#define NORMAL
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
}`,Ny=`#define NORMAL
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
}`,Fy=`#define PHONG
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
}`,Oy=`#define PHONG
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
}`,By=`#define STANDARD
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
}`,ky=`#define STANDARD
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
}`,zy=`#define TOON
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
}`,Hy=`#define TOON
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
}`,Gy=`uniform float size;
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
}`,Vy=`uniform vec3 diffuse;
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
}`,Wy=`#include <common>
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
}`,Xy=`uniform vec3 color;
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
}`,qy=`uniform float rotation;
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
}`,Yy=`uniform vec3 diffuse;
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
}`,Ge={alphahash_fragment:mx,alphahash_pars_fragment:gx,alphamap_fragment:_x,alphamap_pars_fragment:xx,alphatest_fragment:vx,alphatest_pars_fragment:yx,aomap_fragment:bx,aomap_pars_fragment:Mx,batching_pars_vertex:Tx,batching_vertex:Sx,begin_vertex:wx,beginnormal_vertex:Ex,bsdfs:Ax,iridescence_fragment:Rx,bumpmap_pars_fragment:Cx,clipping_planes_fragment:Px,clipping_planes_pars_fragment:Lx,clipping_planes_pars_vertex:Ix,clipping_planes_vertex:Dx,color_fragment:Ux,color_pars_fragment:Nx,color_pars_vertex:Fx,color_vertex:Ox,common:Bx,cube_uv_reflection_fragment:kx,defaultnormal_vertex:zx,displacementmap_pars_vertex:Hx,displacementmap_vertex:Gx,emissivemap_fragment:Vx,emissivemap_pars_fragment:Wx,colorspace_fragment:Xx,colorspace_pars_fragment:qx,envmap_fragment:Yx,envmap_common_pars_fragment:$x,envmap_pars_fragment:jx,envmap_pars_vertex:Kx,envmap_physical_pars_fragment:lv,envmap_vertex:Zx,fog_vertex:Qx,fog_pars_vertex:Jx,fog_fragment:ev,fog_pars_fragment:tv,gradientmap_pars_fragment:nv,lightmap_fragment:iv,lightmap_pars_fragment:rv,lights_lambert_fragment:sv,lights_lambert_pars_fragment:ov,lights_pars_begin:av,lights_toon_fragment:cv,lights_toon_pars_fragment:uv,lights_phong_fragment:hv,lights_phong_pars_fragment:dv,lights_physical_fragment:fv,lights_physical_pars_fragment:pv,lights_fragment_begin:mv,lights_fragment_maps:gv,lights_fragment_end:_v,logdepthbuf_fragment:xv,logdepthbuf_pars_fragment:vv,logdepthbuf_pars_vertex:yv,logdepthbuf_vertex:bv,map_fragment:Mv,map_pars_fragment:Tv,map_particle_fragment:Sv,map_particle_pars_fragment:wv,metalnessmap_fragment:Ev,metalnessmap_pars_fragment:Av,morphcolor_vertex:Rv,morphnormal_vertex:Cv,morphtarget_pars_vertex:Pv,morphtarget_vertex:Lv,normal_fragment_begin:Iv,normal_fragment_maps:Dv,normal_pars_fragment:Uv,normal_pars_vertex:Nv,normal_vertex:Fv,normalmap_pars_fragment:Ov,clearcoat_normal_fragment_begin:Bv,clearcoat_normal_fragment_maps:kv,clearcoat_pars_fragment:zv,iridescence_pars_fragment:Hv,opaque_fragment:Gv,packing:Vv,premultiplied_alpha_fragment:Wv,project_vertex:Xv,dithering_fragment:qv,dithering_pars_fragment:Yv,roughnessmap_fragment:$v,roughnessmap_pars_fragment:jv,shadowmap_pars_fragment:Kv,shadowmap_pars_vertex:Zv,shadowmap_vertex:Qv,shadowmask_pars_fragment:Jv,skinbase_vertex:ey,skinning_pars_vertex:ty,skinning_vertex:ny,skinnormal_vertex:iy,specularmap_fragment:ry,specularmap_pars_fragment:sy,tonemapping_fragment:oy,tonemapping_pars_fragment:ay,transmission_fragment:ly,transmission_pars_fragment:cy,uv_pars_fragment:uy,uv_pars_vertex:hy,uv_vertex:dy,worldpos_vertex:fy,background_vert:py,background_frag:my,backgroundCube_vert:gy,backgroundCube_frag:_y,cube_vert:xy,cube_frag:vy,depth_vert:yy,depth_frag:by,distanceRGBA_vert:My,distanceRGBA_frag:Ty,equirect_vert:Sy,equirect_frag:wy,linedashed_vert:Ey,linedashed_frag:Ay,meshbasic_vert:Ry,meshbasic_frag:Cy,meshlambert_vert:Py,meshlambert_frag:Ly,meshmatcap_vert:Iy,meshmatcap_frag:Dy,meshnormal_vert:Uy,meshnormal_frag:Ny,meshphong_vert:Fy,meshphong_frag:Oy,meshphysical_vert:By,meshphysical_frag:ky,meshtoon_vert:zy,meshtoon_frag:Hy,points_vert:Gy,points_frag:Vy,shadow_vert:Wy,shadow_frag:Xy,sprite_vert:qy,sprite_frag:Yy},fe={common:{diffuse:{value:new Re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new Me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new Re(16777215)},opacity:{value:1},center:{value:new Me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},vi={basic:{uniforms:_n([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:_n([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Re(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:_n([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Re(0)},specular:{value:new Re(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:_n([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new Re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:_n([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new Re(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:_n([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:_n([fe.points,fe.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:_n([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:_n([fe.common,fe.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:_n([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:_n([fe.sprite,fe.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:_n([fe.common,fe.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:_n([fe.lights,fe.fog,{color:{value:new Re(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};vi.physical={uniforms:_n([vi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new Me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new Re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new Me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new Re(0)},specularColor:{value:new Re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new Me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const Ta={r:0,b:0,g:0};function $y(i,e,t,n,r,s,o){const a=new Re(0);let l=s===!0?0:1,c,u,h=null,d=0,f=null;function g(m,p){let v=!1,_=p.isScene===!0?p.background:null;_&&_.isTexture&&(_=(p.backgroundBlurriness>0?t:e).get(_)),_===null?x(a,l):_&&_.isColor&&(x(_,1),v=!0);const y=i.xr.getEnvironmentBlendMode();y==="additive"?n.buffers.color.setClear(0,0,0,1,o):y==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||v)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),_&&(_.isCubeTexture||_.mapping===Nl)?(u===void 0&&(u=new $(new _e(1,1,1),new kt({name:"BackgroundCubeMaterial",uniforms:Gs(vi.backgroundCube.uniforms),vertexShader:vi.backgroundCube.vertexShader,fragmentShader:vi.backgroundCube.fragmentShader,side:Tn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(M,T,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.toneMapped=ut.getTransfer(_.colorSpace)!==bt,(h!==_||d!==_.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,h=_,d=_.version,f=i.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new $(new Rn(2,2),new kt({name:"BackgroundMaterial",uniforms:Gs(vi.background.uniforms),vertexShader:vi.background.vertexShader,fragmentShader:vi.background.fragmentShader,side:ai,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=ut.getTransfer(_.colorSpace)!==bt,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||d!==_.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=_,d=_.version,f=i.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function x(m,p){m.getRGB(Ta,Zm(i)),n.buffers.color.setClear(Ta.r,Ta.g,Ta.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(m,p=1){a.set(m),l=p,x(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,x(a,l)},render:g}}function jy(i,e,t,n){const r=i.getParameter(i.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=m(null);let c=l,u=!1;function h(R,F,B,V,X){let G=!1;if(o){const Y=x(V,B,F);c!==Y&&(c=Y,f(c.object)),G=p(R,V,B,X),G&&v(R,V,B,X)}else{const Y=F.wireframe===!0;(c.geometry!==V.id||c.program!==B.id||c.wireframe!==Y)&&(c.geometry=V.id,c.program=B.id,c.wireframe=Y,G=!0)}X!==null&&t.update(X,i.ELEMENT_ARRAY_BUFFER),(G||u)&&(u=!1,E(R,F,B,V),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function d(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function f(R){return n.isWebGL2?i.bindVertexArray(R):s.bindVertexArrayOES(R)}function g(R){return n.isWebGL2?i.deleteVertexArray(R):s.deleteVertexArrayOES(R)}function x(R,F,B){const V=B.wireframe===!0;let X=a[R.id];X===void 0&&(X={},a[R.id]=X);let G=X[F.id];G===void 0&&(G={},X[F.id]=G);let Y=G[V];return Y===void 0&&(Y=m(d()),G[V]=Y),Y}function m(R){const F=[],B=[],V=[];for(let X=0;X<r;X++)F[X]=0,B[X]=0,V[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:B,attributeDivisors:V,object:R,attributes:{},index:null}}function p(R,F,B,V){const X=c.attributes,G=F.attributes;let Y=0;const J=B.getAttributes();for(const ne in J)if(J[ne].location>=0){const z=X[ne];let j=G[ne];if(j===void 0&&(ne==="instanceMatrix"&&R.instanceMatrix&&(j=R.instanceMatrix),ne==="instanceColor"&&R.instanceColor&&(j=R.instanceColor)),z===void 0||z.attribute!==j||j&&z.data!==j.data)return!0;Y++}return c.attributesNum!==Y||c.index!==V}function v(R,F,B,V){const X={},G=F.attributes;let Y=0;const J=B.getAttributes();for(const ne in J)if(J[ne].location>=0){let z=G[ne];z===void 0&&(ne==="instanceMatrix"&&R.instanceMatrix&&(z=R.instanceMatrix),ne==="instanceColor"&&R.instanceColor&&(z=R.instanceColor));const j={};j.attribute=z,z&&z.data&&(j.data=z.data),X[ne]=j,Y++}c.attributes=X,c.attributesNum=Y,c.index=V}function _(){const R=c.newAttributes;for(let F=0,B=R.length;F<B;F++)R[F]=0}function y(R){M(R,0)}function M(R,F){const B=c.newAttributes,V=c.enabledAttributes,X=c.attributeDivisors;B[R]=1,V[R]===0&&(i.enableVertexAttribArray(R),V[R]=1),X[R]!==F&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](R,F),X[R]=F)}function T(){const R=c.newAttributes,F=c.enabledAttributes;for(let B=0,V=F.length;B<V;B++)F[B]!==R[B]&&(i.disableVertexAttribArray(B),F[B]=0)}function S(R,F,B,V,X,G,Y){Y===!0?i.vertexAttribIPointer(R,F,B,X,G):i.vertexAttribPointer(R,F,B,V,X,G)}function E(R,F,B,V){if(n.isWebGL2===!1&&(R.isInstancedMesh||V.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();const X=V.attributes,G=B.getAttributes(),Y=F.defaultAttributeValues;for(const J in G){const ne=G[J];if(ne.location>=0){let ee=X[J];if(ee===void 0&&(J==="instanceMatrix"&&R.instanceMatrix&&(ee=R.instanceMatrix),J==="instanceColor"&&R.instanceColor&&(ee=R.instanceColor)),ee!==void 0){const z=ee.normalized,j=ee.itemSize,ue=t.get(ee);if(ue===void 0)continue;const pe=ue.buffer,he=ue.type,ce=ue.bytesPerElement,de=n.isWebGL2===!0&&(he===i.INT||he===i.UNSIGNED_INT||ee.gpuType===Uo);if(ee.isInterleavedBufferAttribute){const Ee=ee.data,H=Ee.stride,xt=ee.offset;if(Ee.isInstancedInterleavedBuffer){for(let be=0;be<ne.locationSize;be++)M(ne.location+be,Ee.meshPerAttribute);R.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=Ee.meshPerAttribute*Ee.count)}else for(let be=0;be<ne.locationSize;be++)y(ne.location+be);i.bindBuffer(i.ARRAY_BUFFER,pe);for(let be=0;be<ne.locationSize;be++)S(ne.location+be,j/ne.locationSize,he,z,H*ce,(xt+j/ne.locationSize*be)*ce,de)}else{if(ee.isInstancedBufferAttribute){for(let Ee=0;Ee<ne.locationSize;Ee++)M(ne.location+Ee,ee.meshPerAttribute);R.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let Ee=0;Ee<ne.locationSize;Ee++)y(ne.location+Ee);i.bindBuffer(i.ARRAY_BUFFER,pe);for(let Ee=0;Ee<ne.locationSize;Ee++)S(ne.location+Ee,j/ne.locationSize,he,z,j*ce,j/ne.locationSize*Ee*ce,de)}}else if(Y!==void 0){const z=Y[J];if(z!==void 0)switch(z.length){case 2:i.vertexAttrib2fv(ne.location,z);break;case 3:i.vertexAttrib3fv(ne.location,z);break;case 4:i.vertexAttrib4fv(ne.location,z);break;default:i.vertexAttrib1fv(ne.location,z)}}}}T()}function L(){U();for(const R in a){const F=a[R];for(const B in F){const V=F[B];for(const X in V)g(V[X].object),delete V[X];delete F[B]}delete a[R]}}function b(R){if(a[R.id]===void 0)return;const F=a[R.id];for(const B in F){const V=F[B];for(const X in V)g(V[X].object),delete V[X];delete F[B]}delete a[R.id]}function w(R){for(const F in a){const B=a[F];if(B[R.id]===void 0)continue;const V=B[R.id];for(const X in V)g(V[X].object),delete V[X];delete B[R.id]}}function U(){k(),u=!0,c!==l&&(c=l,f(c.object))}function k(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:U,resetDefaultState:k,dispose:L,releaseStatesOfGeometry:b,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:y,disableUnusedAttributes:T}}function Ky(i,e,t,n){const r=n.isWebGL2;let s;function o(u){s=u}function a(u,h){i.drawArrays(s,u,h),t.update(h,s,1)}function l(u,h,d){if(d===0)return;let f,g;if(r)f=i,g="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[g](s,u,h,d),t.update(h,s,d)}function c(u,h,d){if(d===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<d;g++)this.render(u[g],h[g]);else{f.multiDrawArraysWEBGL(s,u,0,h,0,d);let g=0;for(let x=0;x<d;x++)g+=h[x];t.update(g,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function Zy(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const S=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(S){if(S==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext!="undefined"&&i.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),x=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),p=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),_=d>0,y=o||e.has("OES_texture_float"),M=_&&y,T=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:g,maxAttributes:x,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:v,vertexTextures:_,floatFragmentTextures:y,floatVertexTextures:M,maxSamples:T}}function Qy(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new ti,a=new Ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||r;return r=d,n=h.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const g=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,p=i.get(h);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const v=s?0:n,_=v*4;let y=p.clippingState||null;l.value=y,y=u(g,d,_,f);for(let M=0;M!==_;++M)y[M]=t[M];p.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,g){const x=h!==null?h.length:0;let m=null;if(x!==0){if(m=l.value,g!==!0||m===null){const p=f+x*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let _=0,y=f;_!==x;++_,y+=4)o.copy(h[_]).applyMatrix4(v,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function Jy(i){let e=new WeakMap;function t(o,a){return a===_l?o.mapping=Fs:a===fu&&(o.mapping=Os),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===_l||a===fu)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new hx(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class di extends Qm{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Es=4,Jd=[.125,.215,.35,.446,.526,.582],Sr=20,yc=new di,ef=new Re;let bc=null,Mc=0,Tc=0;const br=(1+Math.sqrt(5))/2,ns=1/br,tf=[new C(1,1,1),new C(-1,1,1),new C(1,1,-1),new C(-1,1,-1),new C(0,br,ns),new C(0,br,-ns),new C(ns,0,br),new C(-ns,0,br),new C(br,ns,0),new C(-br,ns,0)];class nf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){bc=this._renderer.getRenderTarget(),Mc=this._renderer.getActiveCubeFace(),Tc=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=of(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=sf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(bc,Mc,Tc),e.scissorTest=!1,Sa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Fs||e.mapping===Os?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),bc=this._renderer.getRenderTarget(),Mc=this._renderer.getActiveCubeFace(),Tc=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:it,minFilter:it,generateMipmaps:!1,type:fn,format:vt,colorSpace:Qt,depthBuffer:!1},r=rf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=rf(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=eb(s)),this._blurMaterial=tb(s,e,t)}return r}_compileMaterial(e){const t=new $(this._lodPlanes[0],e);this._renderer.compile(t,yc)}_sceneToCubeUV(e,t,n,r){const a=new xn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(ef),u.toneMapping=ar,u.autoClear=!1;const f=new bi({name:"PMREM.Background",side:Tn,depthWrite:!1,depthTest:!1}),g=new $(new _e,f);let x=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,x=!0):(f.color.copy(ef),x=!0);for(let p=0;p<6;p++){const v=p%3;v===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):v===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const _=this._cubeSize;Sa(r,v*_,p>2?_:0,_,_),u.setRenderTarget(r),x&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Fs||e.mapping===Os;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=of()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=sf());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new $(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Sa(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,yc)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=tf[(r-1)%tf.length];this._blur(e,r-1,r,s,o)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new $(this._lodPlanes[r],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Sr-1),x=s/g,m=isFinite(s)?1+Math.floor(u*x):Sr;m>Sr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Sr}`);const p=[];let v=0;for(let S=0;S<Sr;++S){const E=S/x,L=Math.exp(-E*E/2);p.push(L),S===0?v+=L:S<m&&(v+=2*L)}for(let S=0;S<p.length;S++)p[S]=p[S]/v;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:_}=this;d.dTheta.value=g,d.mipInt.value=_-n;const y=this._sizeLods[r],M=3*y*(r>_-Es?r-_+Es:0),T=4*(this._cubeSize-y);Sa(t,M,T,3*y,2*y),l.setRenderTarget(t),l.render(h,yc)}}function eb(i){const e=[],t=[],n=[];let r=i;const s=i-Es+1+Jd.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>i-Es?l=Jd[o-i+Es-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,x=3,m=2,p=1,v=new Float32Array(x*g*f),_=new Float32Array(m*g*f),y=new Float32Array(p*g*f);for(let T=0;T<f;T++){const S=T%3*2/3-1,E=T>2?0:-1,L=[S,E,0,S+2/3,E,0,S+2/3,E+1,0,S,E,0,S+2/3,E+1,0,S,E+1,0];v.set(L,x*g*T),_.set(d,m*g*T);const b=[T,T,T,T,T,T];y.set(b,p*g*T)}const M=new sn;M.setAttribute("position",new Tt(v,x)),M.setAttribute("uv",new Tt(_,m)),M.setAttribute("faceIndex",new Tt(y,p)),e.push(M),r>Es&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function rf(i,e,t){const n=new pn(i,e,t);return n.texture.mapping=Nl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Sa(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function tb(i,e,t){const n=new Float32Array(Sr),r=new C(0,1,0);return new kt({name:"SphericalGaussianBlur",defines:{n:Sr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:uh(),fragmentShader:`

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
		`,blending:ri,depthTest:!1,depthWrite:!1})}function sf(){return new kt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:uh(),fragmentShader:`

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
		`,blending:ri,depthTest:!1,depthWrite:!1})}function of(){return new kt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:uh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function uh(){return`

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
	`}function nb(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===_l||l===fu,u=l===Fs||l===Os;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new nf(i)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||u&&h&&r(h)){t===null&&(t=new nf(i));const d=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function ib(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function rb(i,e,t,n){const r={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const x=d.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)e.remove(x[m])}d.removeEventListener("dispose",o),delete r[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const g in d)e.update(d[g],i.ARRAY_BUFFER);const f=h.morphAttributes;for(const g in f){const x=f[g];for(let m=0,p=x.length;m<p;m++)e.update(x[m],i.ARRAY_BUFFER)}}function c(h){const d=[],f=h.index,g=h.attributes.position;let x=0;if(f!==null){const v=f.array;x=f.version;for(let _=0,y=v.length;_<y;_+=3){const M=v[_+0],T=v[_+1],S=v[_+2];d.push(M,T,T,S,S,M)}}else if(g!==void 0){const v=g.array;x=g.version;for(let _=0,y=v.length/3-1;_<y;_+=3){const M=_+0,T=_+1,S=_+2;d.push(M,T,T,S,S,M)}}else return;const m=new(Wm(d)?Km:jm)(d,1);m.version=x;const p=s.get(h);p&&e.remove(p),s.set(h,m)}function u(h){const d=s.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function sb(i,e,t,n){const r=n.isWebGL2;let s;function o(f){s=f}let a,l;function c(f){a=f.type,l=f.bytesPerElement}function u(f,g){i.drawElements(s,g,a,f*l),t.update(g,s,1)}function h(f,g,x){if(x===0)return;let m,p;if(r)m=i,p="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](s,g,a,f*l,x),t.update(g,s,x)}function d(f,g,x){if(x===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<x;p++)this.render(f[p]/l,g[p]);else{m.multiDrawElementsWEBGL(s,g,0,a,f,0,x);let p=0;for(let v=0;v<x;v++)p+=g[v];t.update(p,s,1)}}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=h,this.renderMultiDraw=d}function ob(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function ab(i,e){return i[0]-e[0]}function lb(i,e){return Math.abs(e[1])-Math.abs(i[1])}function cb(i,e,t){const n={},r=new Float32Array(8),s=new WeakMap,o=new _t,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,h){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const f=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=f!==void 0?f.length:0;let x=s.get(u);if(x===void 0||x.count!==g){let R=function(){U.dispose(),s.delete(u),u.removeEventListener("dispose",R)};x!==void 0&&x.texture.dispose();const v=u.morphAttributes.position!==void 0,_=u.morphAttributes.normal!==void 0,y=u.morphAttributes.color!==void 0,M=u.morphAttributes.position||[],T=u.morphAttributes.normal||[],S=u.morphAttributes.color||[];let E=0;v===!0&&(E=1),_===!0&&(E=2),y===!0&&(E=3);let L=u.attributes.position.count*E,b=1;L>e.maxTextureSize&&(b=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const w=new Float32Array(L*b*4*g),U=new Ym(w,L,b,g);U.type=Je,U.needsUpdate=!0;const k=E*4;for(let F=0;F<g;F++){const B=M[F],V=T[F],X=S[F],G=L*b*4*F;for(let Y=0;Y<B.count;Y++){const J=Y*k;v===!0&&(o.fromBufferAttribute(B,Y),w[G+J+0]=o.x,w[G+J+1]=o.y,w[G+J+2]=o.z,w[G+J+3]=0),_===!0&&(o.fromBufferAttribute(V,Y),w[G+J+4]=o.x,w[G+J+5]=o.y,w[G+J+6]=o.z,w[G+J+7]=0),y===!0&&(o.fromBufferAttribute(X,Y),w[G+J+8]=o.x,w[G+J+9]=o.y,w[G+J+10]=o.z,w[G+J+11]=X.itemSize===4?o.w:1)}}x={count:g,texture:U,size:new Me(L,b)},s.set(u,x),u.addEventListener("dispose",R)}let m=0;for(let v=0;v<d.length;v++)m+=d[v];const p=u.morphTargetsRelative?1:1-m;h.getUniforms().setValue(i,"morphTargetBaseInfluence",p),h.getUniforms().setValue(i,"morphTargetInfluences",d),h.getUniforms().setValue(i,"morphTargetsTexture",x.texture,t),h.getUniforms().setValue(i,"morphTargetsTextureSize",x.size)}else{const f=d===void 0?0:d.length;let g=n[u.id];if(g===void 0||g.length!==f){g=[];for(let _=0;_<f;_++)g[_]=[_,0];n[u.id]=g}for(let _=0;_<f;_++){const y=g[_];y[0]=_,y[1]=d[_]}g.sort(lb);for(let _=0;_<8;_++)_<f&&g[_][1]?(a[_][0]=g[_][0],a[_][1]=g[_][1]):(a[_][0]=Number.MAX_SAFE_INTEGER,a[_][1]=0);a.sort(ab);const x=u.morphAttributes.position,m=u.morphAttributes.normal;let p=0;for(let _=0;_<8;_++){const y=a[_],M=y[0],T=y[1];M!==Number.MAX_SAFE_INTEGER&&T?(x&&u.getAttribute("morphTarget"+_)!==x[M]&&u.setAttribute("morphTarget"+_,x[M]),m&&u.getAttribute("morphNormal"+_)!==m[M]&&u.setAttribute("morphNormal"+_,m[M]),r[_]=T,p+=T):(x&&u.hasAttribute("morphTarget"+_)===!0&&u.deleteAttribute("morphTarget"+_),m&&u.hasAttribute("morphNormal"+_)===!0&&u.deleteAttribute("morphNormal"+_),r[_]=0)}const v=u.morphTargetsRelative?1:1-p;h.getUniforms().setValue(i,"morphTargetBaseInfluence",v),h.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:l}}function ub(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class tg extends jt{constructor(e,t,n,r,s,o,a,l,c,u){if(u=u!==void 0?u:Rr,u!==Rr&&u!==ks)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Rr&&(n=On),n===void 0&&u===ks&&(n=Ar),super(null,r,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Qe,this.minFilter=l!==void 0?l:Qe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const ng=new jt,ig=new tg(1,1);ig.compareFunction=Gm;const rg=new Ym,sg=new W_,og=new Jm,af=[],lf=[],cf=new Float32Array(16),uf=new Float32Array(9),hf=new Float32Array(4);function $s(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=af[r];if(s===void 0&&(s=new Float32Array(r),af[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function Jt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function en(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function kl(i,e){let t=lf[e];t===void 0&&(t=new Int32Array(e),lf[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function hb(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function db(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;i.uniform2fv(this.addr,e),en(t,e)}}function fb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Jt(t,e))return;i.uniform3fv(this.addr,e),en(t,e)}}function pb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;i.uniform4fv(this.addr,e),en(t,e)}}function mb(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Jt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),en(t,e)}else{if(Jt(t,n))return;hf.set(n),i.uniformMatrix2fv(this.addr,!1,hf),en(t,n)}}function gb(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Jt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),en(t,e)}else{if(Jt(t,n))return;uf.set(n),i.uniformMatrix3fv(this.addr,!1,uf),en(t,n)}}function _b(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Jt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),en(t,e)}else{if(Jt(t,n))return;cf.set(n),i.uniformMatrix4fv(this.addr,!1,cf),en(t,n)}}function xb(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function vb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;i.uniform2iv(this.addr,e),en(t,e)}}function yb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Jt(t,e))return;i.uniform3iv(this.addr,e),en(t,e)}}function bb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;i.uniform4iv(this.addr,e),en(t,e)}}function Mb(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Tb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;i.uniform2uiv(this.addr,e),en(t,e)}}function Sb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Jt(t,e))return;i.uniform3uiv(this.addr,e),en(t,e)}}function wb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;i.uniform4uiv(this.addr,e),en(t,e)}}function Eb(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);const s=this.type===i.SAMPLER_2D_SHADOW?ig:ng;t.setTexture2D(e||s,r)}function Ab(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||sg,r)}function Rb(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||og,r)}function Cb(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||rg,r)}function Pb(i){switch(i){case 5126:return hb;case 35664:return db;case 35665:return fb;case 35666:return pb;case 35674:return mb;case 35675:return gb;case 35676:return _b;case 5124:case 35670:return xb;case 35667:case 35671:return vb;case 35668:case 35672:return yb;case 35669:case 35673:return bb;case 5125:return Mb;case 36294:return Tb;case 36295:return Sb;case 36296:return wb;case 35678:case 36198:case 36298:case 36306:case 35682:return Eb;case 35679:case 36299:case 36307:return Ab;case 35680:case 36300:case 36308:case 36293:return Rb;case 36289:case 36303:case 36311:case 36292:return Cb}}function Lb(i,e){i.uniform1fv(this.addr,e)}function Ib(i,e){const t=$s(e,this.size,2);i.uniform2fv(this.addr,t)}function Db(i,e){const t=$s(e,this.size,3);i.uniform3fv(this.addr,t)}function Ub(i,e){const t=$s(e,this.size,4);i.uniform4fv(this.addr,t)}function Nb(i,e){const t=$s(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Fb(i,e){const t=$s(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Ob(i,e){const t=$s(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Bb(i,e){i.uniform1iv(this.addr,e)}function kb(i,e){i.uniform2iv(this.addr,e)}function zb(i,e){i.uniform3iv(this.addr,e)}function Hb(i,e){i.uniform4iv(this.addr,e)}function Gb(i,e){i.uniform1uiv(this.addr,e)}function Vb(i,e){i.uniform2uiv(this.addr,e)}function Wb(i,e){i.uniform3uiv(this.addr,e)}function Xb(i,e){i.uniform4uiv(this.addr,e)}function qb(i,e,t){const n=this.cache,r=e.length,s=kl(t,r);Jt(n,s)||(i.uniform1iv(this.addr,s),en(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||ng,s[o])}function Yb(i,e,t){const n=this.cache,r=e.length,s=kl(t,r);Jt(n,s)||(i.uniform1iv(this.addr,s),en(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||sg,s[o])}function $b(i,e,t){const n=this.cache,r=e.length,s=kl(t,r);Jt(n,s)||(i.uniform1iv(this.addr,s),en(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||og,s[o])}function jb(i,e,t){const n=this.cache,r=e.length,s=kl(t,r);Jt(n,s)||(i.uniform1iv(this.addr,s),en(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||rg,s[o])}function Kb(i){switch(i){case 5126:return Lb;case 35664:return Ib;case 35665:return Db;case 35666:return Ub;case 35674:return Nb;case 35675:return Fb;case 35676:return Ob;case 5124:case 35670:return Bb;case 35667:case 35671:return kb;case 35668:case 35672:return zb;case 35669:case 35673:return Hb;case 5125:return Gb;case 36294:return Vb;case 36295:return Wb;case 36296:return Xb;case 35678:case 36198:case 36298:case 36306:case 35682:return qb;case 35679:case 36299:case 36307:return Yb;case 35680:case 36300:case 36308:case 36293:return $b;case 36289:case 36303:case 36311:case 36292:return jb}}class Zb{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Pb(t.type)}}class Qb{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Kb(t.type)}}class Jb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const Sc=/(\w+)(\])?(\[|\.)?/g;function df(i,e){i.seq.push(e),i.map[e.id]=e}function eM(i,e,t){const n=i.name,r=n.length;for(Sc.lastIndex=0;;){const s=Sc.exec(n),o=Sc.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){df(t,c===void 0?new Zb(a,i,e):new Qb(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new Jb(a),df(t,h)),t=h}}}class il{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);eM(s,o,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function ff(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const tM=37297;let nM=0;function iM(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function rM(i){const e=ut.getPrimaries(ut.workingColorSpace),t=ut.getPrimaries(i);let n;switch(e===t?n="":e===bl&&t===yl?n="LinearDisplayP3ToLinearSRGB":e===yl&&t===bl&&(n="LinearSRGBToLinearDisplayP3"),i){case Qt:case Bl:return[n,"LinearTransferOETF"];case Rt:case oh:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function pf(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+iM(i.getShaderSource(e),o)}else return r}function sM(i,e){const t=rM(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function oM(i,e){let t;switch(e){case n_:t="Linear";break;case i_:t="Reinhard";break;case r_:t="OptimizedCineon";break;case s_:t="ACESFilmic";break;case a_:t="AgX";break;case o_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function aM(i){return[i.extensionDerivatives||!!i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.alphaToCoverage||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(As).join(`
`)}function lM(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(As).join(`
`)}function cM(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function uM(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function As(i){return i!==""}function mf(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function gf(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const hM=/^[ \t]*#include +<([\w\d./]+)>/gm;function yu(i){return i.replace(hM,fM)}const dM=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function fM(i,e){let t=Ge[e];if(t===void 0){const n=dM.get(e);if(n!==void 0)t=Ge[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return yu(t)}const pM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _f(i){return i.replace(pM,mM)}function mM(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function xf(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function gM(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Pm?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===P0?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Oi&&(e="SHADOWMAP_TYPE_VSM"),e}function _M(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Fs:case Os:e="ENVMAP_TYPE_CUBE";break;case Nl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function xM(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Os:e="ENVMAP_MODE_REFRACTION";break}return e}function vM(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Lm:e="ENVMAP_BLENDING_MULTIPLY";break;case e_:e="ENVMAP_BLENDING_MIX";break;case t_:e="ENVMAP_BLENDING_ADD";break}return e}function yM(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function bM(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=gM(t),c=_M(t),u=xM(t),h=vM(t),d=yM(t),f=t.isWebGL2?"":aM(t),g=lM(t),x=cM(s),m=r.createProgram();let p,v,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(As).join(`
`),p.length>0&&(p+=`
`),v=[f,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(As).join(`
`),v.length>0&&(v+=`
`)):(p=[xf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(As).join(`
`),v=[f,xf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ar?"#define TONE_MAPPING":"",t.toneMapping!==ar?Ge.tonemapping_pars_fragment:"",t.toneMapping!==ar?oM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,sM("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(As).join(`
`)),o=yu(o),o=mf(o,t),o=gf(o,t),a=yu(a),a=mf(a,t),a=gf(a,t),o=_f(o),a=_f(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,v=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===li?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===li?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const y=_+p+o,M=_+v+a,T=ff(r,r.VERTEX_SHADER,y),S=ff(r,r.FRAGMENT_SHADER,M);r.attachShader(m,T),r.attachShader(m,S),t.index0AttributeName!==void 0?r.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function E(U){if(i.debug.checkShaderErrors){const k=r.getProgramInfoLog(m).trim(),R=r.getShaderInfoLog(T).trim(),F=r.getShaderInfoLog(S).trim();let B=!0,V=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(B=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,m,T,S);else{const X=pf(r,T,"vertex"),G=pf(r,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+k+`
`+X+`
`+G)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(R===""||F==="")&&(V=!1);V&&(U.diagnostics={runnable:B,programLog:k,vertexShader:{log:R,prefix:p},fragmentShader:{log:F,prefix:v}})}r.deleteShader(T),r.deleteShader(S),L=new il(r,m),b=uM(r,m)}let L;this.getUniforms=function(){return L===void 0&&E(this),L};let b;this.getAttributes=function(){return b===void 0&&E(this),b};let w=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=r.getProgramParameter(m,tM)),w},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=nM++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=T,this.fragmentShader=S,this}let MM=0;class TM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new SM(e),t.set(e,n)),n}}class SM{constructor(e){this.id=MM++,this.code=e,this.usedTimes=0}}function wM(i,e,t,n,r,s,o){const a=new lh,l=new TM,c=new Set,u=[],h=r.isWebGL2,d=r.logarithmicDepthBuffer,f=r.vertexTextures;let g=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(b){return c.add(b),b===0?"uv":`uv${b}`}function p(b,w,U,k,R){const F=k.fog,B=R.geometry,V=b.isMeshStandardMaterial?k.environment:null,X=(b.isMeshStandardMaterial?t:e).get(b.envMap||V),G=!!X&&X.mapping===Nl?X.image.height:null,Y=x[b.type];b.precision!==null&&(g=r.getMaxPrecision(b.precision),g!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",g,"instead."));const J=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ne=J!==void 0?J.length:0;let ee=0;B.morphAttributes.position!==void 0&&(ee=1),B.morphAttributes.normal!==void 0&&(ee=2),B.morphAttributes.color!==void 0&&(ee=3);let z,j,ue,pe;if(Y){const et=vi[Y];z=et.vertexShader,j=et.fragmentShader}else z=b.vertexShader,j=b.fragmentShader,l.update(b),ue=l.getVertexShaderID(b),pe=l.getFragmentShaderID(b);const he=i.getRenderTarget(),ce=R.isInstancedMesh===!0,de=R.isBatchedMesh===!0,Ee=!!b.map,H=!!b.matcap,xt=!!X,be=!!b.aoMap,Ie=!!b.lightMap,Te=!!b.bumpMap,qe=!!b.normalMap,De=!!b.displacementMap,D=!!b.emissiveMap,A=!!b.metalnessMap,q=!!b.roughnessMap,ie=b.anisotropy>0,te=b.clearcoat>0,re=b.iridescence>0,Se=b.sheen>0,me=b.transmission>0,ve=ie&&!!b.anisotropyMap,Ce=te&&!!b.clearcoatMap,Be=te&&!!b.clearcoatNormalMap,se=te&&!!b.clearcoatRoughnessMap,at=re&&!!b.iridescenceMap,$e=re&&!!b.iridescenceThicknessMap,ke=Se&&!!b.sheenColorMap,Pe=Se&&!!b.sheenRoughnessMap,xe=!!b.specularMap,Ve=!!b.specularColorMap,O=!!b.specularIntensityMap,le=me&&!!b.transmissionMap,ge=me&&!!b.thicknessMap,Le=!!b.gradientMap,N=!!b.alphaMap,ae=b.alphaTest>0,oe=!!b.alphaHash,we=!!b.extensions;let Ue=ar;b.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(Ue=i.toneMapping);const rt={isWebGL2:h,shaderID:Y,shaderType:b.type,shaderName:b.name,vertexShader:z,fragmentShader:j,defines:b.defines,customVertexShaderID:ue,customFragmentShaderID:pe,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:g,batching:de,instancing:ce,instancingColor:ce&&R.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:he===null?i.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:Qt,alphaToCoverage:!!b.alphaToCoverage,map:Ee,matcap:H,envMap:xt,envMapMode:xt&&X.mapping,envMapCubeUVHeight:G,aoMap:be,lightMap:Ie,bumpMap:Te,normalMap:qe,displacementMap:f&&De,emissiveMap:D,normalMapObjectSpace:qe&&b.normalMapType===__,normalMapTangentSpace:qe&&b.normalMapType===Hm,metalnessMap:A,roughnessMap:q,anisotropy:ie,anisotropyMap:ve,clearcoat:te,clearcoatMap:Ce,clearcoatNormalMap:Be,clearcoatRoughnessMap:se,iridescence:re,iridescenceMap:at,iridescenceThicknessMap:$e,sheen:Se,sheenColorMap:ke,sheenRoughnessMap:Pe,specularMap:xe,specularColorMap:Ve,specularIntensityMap:O,transmission:me,transmissionMap:le,thicknessMap:ge,gradientMap:Le,opaque:b.transparent===!1&&b.blending===Ls&&b.alphaToCoverage===!1,alphaMap:N,alphaTest:ae,alphaHash:oe,combine:b.combine,mapUv:Ee&&m(b.map.channel),aoMapUv:be&&m(b.aoMap.channel),lightMapUv:Ie&&m(b.lightMap.channel),bumpMapUv:Te&&m(b.bumpMap.channel),normalMapUv:qe&&m(b.normalMap.channel),displacementMapUv:De&&m(b.displacementMap.channel),emissiveMapUv:D&&m(b.emissiveMap.channel),metalnessMapUv:A&&m(b.metalnessMap.channel),roughnessMapUv:q&&m(b.roughnessMap.channel),anisotropyMapUv:ve&&m(b.anisotropyMap.channel),clearcoatMapUv:Ce&&m(b.clearcoatMap.channel),clearcoatNormalMapUv:Be&&m(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:se&&m(b.clearcoatRoughnessMap.channel),iridescenceMapUv:at&&m(b.iridescenceMap.channel),iridescenceThicknessMapUv:$e&&m(b.iridescenceThicknessMap.channel),sheenColorMapUv:ke&&m(b.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&m(b.sheenRoughnessMap.channel),specularMapUv:xe&&m(b.specularMap.channel),specularColorMapUv:Ve&&m(b.specularColorMap.channel),specularIntensityMapUv:O&&m(b.specularIntensityMap.channel),transmissionMapUv:le&&m(b.transmissionMap.channel),thicknessMapUv:ge&&m(b.thicknessMap.channel),alphaMapUv:N&&m(b.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(qe||ie),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:R.isPoints===!0&&!!B.attributes.uv&&(Ee||N),fog:!!F,useFog:b.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:R.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:ee,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&U.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ue,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Ee&&b.map.isVideoTexture===!0&&ut.getTransfer(b.map.colorSpace)===bt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===vn,flipSided:b.side===Tn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:we&&b.extensions.derivatives===!0,extensionFragDepth:we&&b.extensions.fragDepth===!0,extensionDrawBuffers:we&&b.extensions.drawBuffers===!0,extensionShaderTextureLOD:we&&b.extensions.shaderTextureLOD===!0,extensionClipCullDistance:we&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:we&&b.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return rt.vertexUv1s=c.has(1),rt.vertexUv2s=c.has(2),rt.vertexUv3s=c.has(3),c.clear(),rt}function v(b){const w=[];if(b.shaderID?w.push(b.shaderID):(w.push(b.customVertexShaderID),w.push(b.customFragmentShaderID)),b.defines!==void 0)for(const U in b.defines)w.push(U),w.push(b.defines[U]);return b.isRawShaderMaterial===!1&&(_(w,b),y(w,b),w.push(i.outputColorSpace)),w.push(b.customProgramCacheKey),w.join()}function _(b,w){b.push(w.precision),b.push(w.outputColorSpace),b.push(w.envMapMode),b.push(w.envMapCubeUVHeight),b.push(w.mapUv),b.push(w.alphaMapUv),b.push(w.lightMapUv),b.push(w.aoMapUv),b.push(w.bumpMapUv),b.push(w.normalMapUv),b.push(w.displacementMapUv),b.push(w.emissiveMapUv),b.push(w.metalnessMapUv),b.push(w.roughnessMapUv),b.push(w.anisotropyMapUv),b.push(w.clearcoatMapUv),b.push(w.clearcoatNormalMapUv),b.push(w.clearcoatRoughnessMapUv),b.push(w.iridescenceMapUv),b.push(w.iridescenceThicknessMapUv),b.push(w.sheenColorMapUv),b.push(w.sheenRoughnessMapUv),b.push(w.specularMapUv),b.push(w.specularColorMapUv),b.push(w.specularIntensityMapUv),b.push(w.transmissionMapUv),b.push(w.thicknessMapUv),b.push(w.combine),b.push(w.fogExp2),b.push(w.sizeAttenuation),b.push(w.morphTargetsCount),b.push(w.morphAttributeCount),b.push(w.numDirLights),b.push(w.numPointLights),b.push(w.numSpotLights),b.push(w.numSpotLightMaps),b.push(w.numHemiLights),b.push(w.numRectAreaLights),b.push(w.numDirLightShadows),b.push(w.numPointLightShadows),b.push(w.numSpotLightShadows),b.push(w.numSpotLightShadowsWithMaps),b.push(w.numLightProbes),b.push(w.shadowMapType),b.push(w.toneMapping),b.push(w.numClippingPlanes),b.push(w.numClipIntersection),b.push(w.depthPacking)}function y(b,w){a.disableAll(),w.isWebGL2&&a.enable(0),w.supportsVertexTextures&&a.enable(1),w.instancing&&a.enable(2),w.instancingColor&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),b.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.useLegacyLights&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.alphaToCoverage&&a.enable(20),b.push(a.mask)}function M(b){const w=x[b.type];let U;if(w){const k=vi[w];U=ax.clone(k.uniforms)}else U=b.uniforms;return U}function T(b,w){let U;for(let k=0,R=u.length;k<R;k++){const F=u[k];if(F.cacheKey===w){U=F,++U.usedTimes;break}}return U===void 0&&(U=new bM(i,w,b,s),u.push(U)),U}function S(b){if(--b.usedTimes===0){const w=u.indexOf(b);u[w]=u[u.length-1],u.pop(),b.destroy()}}function E(b){l.remove(b)}function L(){l.dispose()}return{getParameters:p,getProgramCacheKey:v,getUniforms:M,acquireProgram:T,releaseProgram:S,releaseShaderCache:E,programs:u,dispose:L}}function EM(){let i=new WeakMap;function e(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function t(s){i.delete(s)}function n(s,o,a){i.get(s)[o]=a}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function AM(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function vf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function yf(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(h,d,f,g,x,m){let p=i[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:x,group:m},i[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=x,p.group=m),e++,p}function a(h,d,f,g,x,m){const p=o(h,d,f,g,x,m);f.transmission>0?n.push(p):f.transparent===!0?r.push(p):t.push(p)}function l(h,d,f,g,x,m){const p=o(h,d,f,g,x,m);f.transmission>0?n.unshift(p):f.transparent===!0?r.unshift(p):t.unshift(p)}function c(h,d){t.length>1&&t.sort(h||AM),n.length>1&&n.sort(d||vf),r.length>1&&r.sort(d||vf)}function u(){for(let h=e,d=i.length;h<d;h++){const f=i[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function RM(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new yf,i.set(n,[o])):r>=s.length?(o=new yf,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function CM(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new Re};break;case"SpotLight":t={position:new C,direction:new C,color:new Re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new Re,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new Re,groundColor:new Re};break;case"RectAreaLight":t={color:new Re,position:new C,halfWidth:new C,halfHeight:new C};break}return i[e.id]=t,t}}}function PM(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let LM=0;function IM(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function DM(i,e){const t=new CM,n=PM(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new C);const s=new C,o=new Fe,a=new Fe;function l(u,h){let d=0,f=0,g=0;for(let U=0;U<9;U++)r.probe[U].set(0,0,0);let x=0,m=0,p=0,v=0,_=0,y=0,M=0,T=0,S=0,E=0,L=0;u.sort(IM);const b=h===!0?Math.PI:1;for(let U=0,k=u.length;U<k;U++){const R=u[U],F=R.color,B=R.intensity,V=R.distance,X=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)d+=F.r*B*b,f+=F.g*B*b,g+=F.b*B*b;else if(R.isLightProbe){for(let G=0;G<9;G++)r.probe[G].addScaledVector(R.sh.coefficients[G],B);L++}else if(R.isDirectionalLight){const G=t.get(R);if(G.color.copy(R.color).multiplyScalar(R.intensity*b),R.castShadow){const Y=R.shadow,J=n.get(R);J.shadowBias=Y.bias,J.shadowNormalBias=Y.normalBias,J.shadowRadius=Y.radius,J.shadowMapSize=Y.mapSize,r.directionalShadow[x]=J,r.directionalShadowMap[x]=X,r.directionalShadowMatrix[x]=R.shadow.matrix,y++}r.directional[x]=G,x++}else if(R.isSpotLight){const G=t.get(R);G.position.setFromMatrixPosition(R.matrixWorld),G.color.copy(F).multiplyScalar(B*b),G.distance=V,G.coneCos=Math.cos(R.angle),G.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),G.decay=R.decay,r.spot[p]=G;const Y=R.shadow;if(R.map&&(r.spotLightMap[S]=R.map,S++,Y.updateMatrices(R),R.castShadow&&E++),r.spotLightMatrix[p]=Y.matrix,R.castShadow){const J=n.get(R);J.shadowBias=Y.bias,J.shadowNormalBias=Y.normalBias,J.shadowRadius=Y.radius,J.shadowMapSize=Y.mapSize,r.spotShadow[p]=J,r.spotShadowMap[p]=X,T++}p++}else if(R.isRectAreaLight){const G=t.get(R);G.color.copy(F).multiplyScalar(B),G.halfWidth.set(R.width*.5,0,0),G.halfHeight.set(0,R.height*.5,0),r.rectArea[v]=G,v++}else if(R.isPointLight){const G=t.get(R);if(G.color.copy(R.color).multiplyScalar(R.intensity*b),G.distance=R.distance,G.decay=R.decay,R.castShadow){const Y=R.shadow,J=n.get(R);J.shadowBias=Y.bias,J.shadowNormalBias=Y.normalBias,J.shadowRadius=Y.radius,J.shadowMapSize=Y.mapSize,J.shadowCameraNear=Y.camera.near,J.shadowCameraFar=Y.camera.far,r.pointShadow[m]=J,r.pointShadowMap[m]=X,r.pointShadowMatrix[m]=R.shadow.matrix,M++}r.point[m]=G,m++}else if(R.isHemisphereLight){const G=t.get(R);G.skyColor.copy(R.color).multiplyScalar(B*b),G.groundColor.copy(R.groundColor).multiplyScalar(B*b),r.hemi[_]=G,_++}}v>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=fe.LTC_FLOAT_1,r.rectAreaLTC2=fe.LTC_FLOAT_2):(r.rectAreaLTC1=fe.LTC_HALF_1,r.rectAreaLTC2=fe.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=fe.LTC_FLOAT_1,r.rectAreaLTC2=fe.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=fe.LTC_HALF_1,r.rectAreaLTC2=fe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=f,r.ambient[2]=g;const w=r.hash;(w.directionalLength!==x||w.pointLength!==m||w.spotLength!==p||w.rectAreaLength!==v||w.hemiLength!==_||w.numDirectionalShadows!==y||w.numPointShadows!==M||w.numSpotShadows!==T||w.numSpotMaps!==S||w.numLightProbes!==L)&&(r.directional.length=x,r.spot.length=p,r.rectArea.length=v,r.point.length=m,r.hemi.length=_,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=M,r.pointShadowMap.length=M,r.spotShadow.length=T,r.spotShadowMap.length=T,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=M,r.spotLightMatrix.length=T+S-E,r.spotLightMap.length=S,r.numSpotLightShadowsWithMaps=E,r.numLightProbes=L,w.directionalLength=x,w.pointLength=m,w.spotLength=p,w.rectAreaLength=v,w.hemiLength=_,w.numDirectionalShadows=y,w.numPointShadows=M,w.numSpotShadows=T,w.numSpotMaps=S,w.numLightProbes=L,r.version=LM++)}function c(u,h){let d=0,f=0,g=0,x=0,m=0;const p=h.matrixWorldInverse;for(let v=0,_=u.length;v<_;v++){const y=u[v];if(y.isDirectionalLight){const M=r.directional[d];M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),d++}else if(y.isSpotLight){const M=r.spot[g];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),g++}else if(y.isRectAreaLight){const M=r.rectArea[x];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(p),a.identity(),o.copy(y.matrixWorld),o.premultiply(p),a.extractRotation(o),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),x++}else if(y.isPointLight){const M=r.point[f];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(p),f++}else if(y.isHemisphereLight){const M=r.hemi[m];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(p),m++}}}return{setup:l,setupView:c,state:r}}function bf(i,e){const t=new DM(i,e),n=[],r=[];function s(){n.length=0,r.length=0}function o(h){n.push(h)}function a(h){r.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function UM(i,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new bf(i,e),t.set(s,[l])):o>=a.length?(l=new bf(i,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:n,dispose:r}}class NM extends Ti{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=m_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class FM extends Ti{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const OM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,BM=`uniform sampler2D shadow_pass;
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
}`;function kM(i,e,t){let n=new ch;const r=new Me,s=new Me,o=new _t,a=new NM({depthPacking:g_}),l=new FM,c={},u=t.maxTextureSize,h={[ai]:Tn,[Tn]:ai,[vn]:vn},d=new kt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Me},radius:{value:4}},vertexShader:OM,fragmentShader:BM}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new sn;g.setAttribute("position",new Tt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new $(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Pm;let p=this.type;this.render=function(T,S,E){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const L=i.getRenderTarget(),b=i.getActiveCubeFace(),w=i.getActiveMipmapLevel(),U=i.state;U.setBlending(ri),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const k=p!==Oi&&this.type===Oi,R=p===Oi&&this.type!==Oi;for(let F=0,B=T.length;F<B;F++){const V=T[F],X=V.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",V,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;r.copy(X.mapSize);const G=X.getFrameExtents();if(r.multiply(G),s.copy(X.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/G.x),r.x=s.x*G.x,X.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/G.y),r.y=s.y*G.y,X.mapSize.y=s.y)),X.map===null||k===!0||R===!0){const J=this.type!==Oi?{minFilter:Qe,magFilter:Qe}:{};X.map!==null&&X.map.dispose(),X.map=new pn(r.x,r.y,J),X.map.texture.name=V.name+".shadowMap",X.camera.updateProjectionMatrix()}i.setRenderTarget(X.map),i.clear();const Y=X.getViewportCount();for(let J=0;J<Y;J++){const ne=X.getViewport(J);o.set(s.x*ne.x,s.y*ne.y,s.x*ne.z,s.y*ne.w),U.viewport(o),X.updateMatrices(V,J),n=X.getFrustum(),y(S,E,X.camera,V,this.type)}X.isPointLightShadow!==!0&&this.type===Oi&&v(X,E),X.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(L,b,w)};function v(T,S){const E=e.update(x);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new pn(r.x,r.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(S,null,E,d,x,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(S,null,E,f,x,null)}function _(T,S,E,L){let b=null;const w=E.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(w!==void 0)b=w;else if(b=E.isPointLight===!0?l:a,i.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){const U=b.uuid,k=S.uuid;let R=c[U];R===void 0&&(R={},c[U]=R);let F=R[k];F===void 0&&(F=b.clone(),R[k]=F,S.addEventListener("dispose",M)),b=F}if(b.visible=S.visible,b.wireframe=S.wireframe,L===Oi?b.side=S.shadowSide!==null?S.shadowSide:S.side:b.side=S.shadowSide!==null?S.shadowSide:h[S.side],b.alphaMap=S.alphaMap,b.alphaTest=S.alphaTest,b.map=S.map,b.clipShadows=S.clipShadows,b.clippingPlanes=S.clippingPlanes,b.clipIntersection=S.clipIntersection,b.displacementMap=S.displacementMap,b.displacementScale=S.displacementScale,b.displacementBias=S.displacementBias,b.wireframeLinewidth=S.wireframeLinewidth,b.linewidth=S.linewidth,E.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const U=i.properties.get(b);U.light=E}return b}function y(T,S,E,L,b){if(T.visible===!1)return;if(T.layers.test(S.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&b===Oi)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,T.matrixWorld);const k=e.update(T),R=T.material;if(Array.isArray(R)){const F=k.groups;for(let B=0,V=F.length;B<V;B++){const X=F[B],G=R[X.materialIndex];if(G&&G.visible){const Y=_(T,G,L,b);T.onBeforeShadow(i,T,S,E,k,Y,X),i.renderBufferDirect(E,null,k,Y,T,X),T.onAfterShadow(i,T,S,E,k,Y,X)}}}else if(R.visible){const F=_(T,R,L,b);T.onBeforeShadow(i,T,S,E,k,F,null),i.renderBufferDirect(E,null,k,F,T,null),T.onAfterShadow(i,T,S,E,k,F,null)}}const U=T.children;for(let k=0,R=U.length;k<R;k++)y(U[k],S,E,L,b)}function M(T){T.target.removeEventListener("dispose",M);for(const E in c){const L=c[E],b=T.target.uuid;b in L&&(L[b].dispose(),delete L[b])}}}function zM(i,e,t){const n=t.isWebGL2;function r(){let N=!1;const ae=new _t;let oe=null;const we=new _t(0,0,0,0);return{setMask:function(Ue){oe!==Ue&&!N&&(i.colorMask(Ue,Ue,Ue,Ue),oe=Ue)},setLocked:function(Ue){N=Ue},setClear:function(Ue,rt,et,pt,on){on===!0&&(Ue*=pt,rt*=pt,et*=pt),ae.set(Ue,rt,et,pt),we.equals(ae)===!1&&(i.clearColor(Ue,rt,et,pt),we.copy(ae))},reset:function(){N=!1,oe=null,we.set(-1,0,0,0)}}}function s(){let N=!1,ae=null,oe=null,we=null;return{setTest:function(Ue){Ue?ce(i.DEPTH_TEST):de(i.DEPTH_TEST)},setMask:function(Ue){ae!==Ue&&!N&&(i.depthMask(Ue),ae=Ue)},setFunc:function(Ue){if(oe!==Ue){switch(Ue){case Y0:i.depthFunc(i.NEVER);break;case $0:i.depthFunc(i.ALWAYS);break;case j0:i.depthFunc(i.LESS);break;case gl:i.depthFunc(i.LEQUAL);break;case K0:i.depthFunc(i.EQUAL);break;case Z0:i.depthFunc(i.GEQUAL);break;case Q0:i.depthFunc(i.GREATER);break;case J0:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}oe=Ue}},setLocked:function(Ue){N=Ue},setClear:function(Ue){we!==Ue&&(i.clearDepth(Ue),we=Ue)},reset:function(){N=!1,ae=null,oe=null,we=null}}}function o(){let N=!1,ae=null,oe=null,we=null,Ue=null,rt=null,et=null,pt=null,on=null;return{setTest:function(st){N||(st?ce(i.STENCIL_TEST):de(i.STENCIL_TEST))},setMask:function(st){ae!==st&&!N&&(i.stencilMask(st),ae=st)},setFunc:function(st,Nt,mn){(oe!==st||we!==Nt||Ue!==mn)&&(i.stencilFunc(st,Nt,mn),oe=st,we=Nt,Ue=mn)},setOp:function(st,Nt,mn){(rt!==st||et!==Nt||pt!==mn)&&(i.stencilOp(st,Nt,mn),rt=st,et=Nt,pt=mn)},setLocked:function(st){N=st},setClear:function(st){on!==st&&(i.clearStencil(st),on=st)},reset:function(){N=!1,ae=null,oe=null,we=null,Ue=null,rt=null,et=null,pt=null,on=null}}}const a=new r,l=new s,c=new o,u=new WeakMap,h=new WeakMap;let d={},f={},g=new WeakMap,x=[],m=null,p=!1,v=null,_=null,y=null,M=null,T=null,S=null,E=null,L=new Re(0,0,0),b=0,w=!1,U=null,k=null,R=null,F=null,B=null;const V=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,G=0;const Y=i.getParameter(i.VERSION);Y.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(Y)[1]),X=G>=1):Y.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),X=G>=2);let J=null,ne={};const ee=i.getParameter(i.SCISSOR_BOX),z=i.getParameter(i.VIEWPORT),j=new _t().fromArray(ee),ue=new _t().fromArray(z);function pe(N,ae,oe,we){const Ue=new Uint8Array(4),rt=i.createTexture();i.bindTexture(N,rt),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let et=0;et<oe;et++)n&&(N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY)?i.texImage3D(ae,0,i.RGBA,1,1,we,0,i.RGBA,i.UNSIGNED_BYTE,Ue):i.texImage2D(ae+et,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ue);return rt}const he={};he[i.TEXTURE_2D]=pe(i.TEXTURE_2D,i.TEXTURE_2D,1),he[i.TEXTURE_CUBE_MAP]=pe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(he[i.TEXTURE_2D_ARRAY]=pe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),he[i.TEXTURE_3D]=pe(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),ce(i.DEPTH_TEST),l.setFunc(gl),De(!1),D(Qh),ce(i.CULL_FACE),Te(ri);function ce(N){d[N]!==!0&&(i.enable(N),d[N]=!0)}function de(N){d[N]!==!1&&(i.disable(N),d[N]=!1)}function Ee(N,ae){return f[N]!==ae?(i.bindFramebuffer(N,ae),f[N]=ae,n&&(N===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=ae),N===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=ae)),!0):!1}function H(N,ae){let oe=x,we=!1;if(N)if(oe=g.get(ae),oe===void 0&&(oe=[],g.set(ae,oe)),N.isWebGLMultipleRenderTargets){const Ue=N.texture;if(oe.length!==Ue.length||oe[0]!==i.COLOR_ATTACHMENT0){for(let rt=0,et=Ue.length;rt<et;rt++)oe[rt]=i.COLOR_ATTACHMENT0+rt;oe.length=Ue.length,we=!0}}else oe[0]!==i.COLOR_ATTACHMENT0&&(oe[0]=i.COLOR_ATTACHMENT0,we=!0);else oe[0]!==i.BACK&&(oe[0]=i.BACK,we=!0);we&&(t.isWebGL2?i.drawBuffers(oe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(oe))}function xt(N){return m!==N?(i.useProgram(N),m=N,!0):!1}const be={[Tr]:i.FUNC_ADD,[I0]:i.FUNC_SUBTRACT,[D0]:i.FUNC_REVERSE_SUBTRACT};if(n)be[nd]=i.MIN,be[id]=i.MAX;else{const N=e.get("EXT_blend_minmax");N!==null&&(be[nd]=N.MIN_EXT,be[id]=N.MAX_EXT)}const Ie={[U0]:i.ZERO,[N0]:i.ONE,[F0]:i.SRC_COLOR,[hu]:i.SRC_ALPHA,[G0]:i.SRC_ALPHA_SATURATE,[z0]:i.DST_COLOR,[B0]:i.DST_ALPHA,[O0]:i.ONE_MINUS_SRC_COLOR,[du]:i.ONE_MINUS_SRC_ALPHA,[H0]:i.ONE_MINUS_DST_COLOR,[k0]:i.ONE_MINUS_DST_ALPHA,[V0]:i.CONSTANT_COLOR,[W0]:i.ONE_MINUS_CONSTANT_COLOR,[X0]:i.CONSTANT_ALPHA,[q0]:i.ONE_MINUS_CONSTANT_ALPHA};function Te(N,ae,oe,we,Ue,rt,et,pt,on,st){if(N===ri){p===!0&&(de(i.BLEND),p=!1);return}if(p===!1&&(ce(i.BLEND),p=!0),N!==L0){if(N!==v||st!==w){if((_!==Tr||T!==Tr)&&(i.blendEquation(i.FUNC_ADD),_=Tr,T=Tr),st)switch(N){case Ls:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Jh:i.blendFunc(i.ONE,i.ONE);break;case ed:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case td:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Ls:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Jh:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case ed:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case td:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}y=null,M=null,S=null,E=null,L.set(0,0,0),b=0,v=N,w=st}return}Ue=Ue||ae,rt=rt||oe,et=et||we,(ae!==_||Ue!==T)&&(i.blendEquationSeparate(be[ae],be[Ue]),_=ae,T=Ue),(oe!==y||we!==M||rt!==S||et!==E)&&(i.blendFuncSeparate(Ie[oe],Ie[we],Ie[rt],Ie[et]),y=oe,M=we,S=rt,E=et),(pt.equals(L)===!1||on!==b)&&(i.blendColor(pt.r,pt.g,pt.b,on),L.copy(pt),b=on),v=N,w=!1}function qe(N,ae){N.side===vn?de(i.CULL_FACE):ce(i.CULL_FACE);let oe=N.side===Tn;ae&&(oe=!oe),De(oe),N.blending===Ls&&N.transparent===!1?Te(ri):Te(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),l.setFunc(N.depthFunc),l.setTest(N.depthTest),l.setMask(N.depthWrite),a.setMask(N.colorWrite);const we=N.stencilWrite;c.setTest(we),we&&(c.setMask(N.stencilWriteMask),c.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),c.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),q(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?ce(i.SAMPLE_ALPHA_TO_COVERAGE):de(i.SAMPLE_ALPHA_TO_COVERAGE)}function De(N){U!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),U=N)}function D(N){N!==R0?(ce(i.CULL_FACE),N!==k&&(N===Qh?i.cullFace(i.BACK):N===C0?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):de(i.CULL_FACE),k=N}function A(N){N!==R&&(X&&i.lineWidth(N),R=N)}function q(N,ae,oe){N?(ce(i.POLYGON_OFFSET_FILL),(F!==ae||B!==oe)&&(i.polygonOffset(ae,oe),F=ae,B=oe)):de(i.POLYGON_OFFSET_FILL)}function ie(N){N?ce(i.SCISSOR_TEST):de(i.SCISSOR_TEST)}function te(N){N===void 0&&(N=i.TEXTURE0+V-1),J!==N&&(i.activeTexture(N),J=N)}function re(N,ae,oe){oe===void 0&&(J===null?oe=i.TEXTURE0+V-1:oe=J);let we=ne[oe];we===void 0&&(we={type:void 0,texture:void 0},ne[oe]=we),(we.type!==N||we.texture!==ae)&&(J!==oe&&(i.activeTexture(oe),J=oe),i.bindTexture(N,ae||he[N]),we.type=N,we.texture=ae)}function Se(){const N=ne[J];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function me(){try{i.compressedTexImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ve(){try{i.compressedTexImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ce(){try{i.texSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Be(){try{i.texSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function se(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function at(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function $e(){try{i.texStorage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ke(){try{i.texStorage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Pe(){try{i.texImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function xe(){try{i.texImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ve(N){j.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),j.copy(N))}function O(N){ue.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),ue.copy(N))}function le(N,ae){let oe=h.get(ae);oe===void 0&&(oe=new WeakMap,h.set(ae,oe));let we=oe.get(N);we===void 0&&(we=i.getUniformBlockIndex(ae,N.name),oe.set(N,we))}function ge(N,ae){const we=h.get(ae).get(N);u.get(ae)!==we&&(i.uniformBlockBinding(ae,we,N.__bindingPointIndex),u.set(ae,we))}function Le(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},J=null,ne={},f={},g=new WeakMap,x=[],m=null,p=!1,v=null,_=null,y=null,M=null,T=null,S=null,E=null,L=new Re(0,0,0),b=0,w=!1,U=null,k=null,R=null,F=null,B=null,j.set(0,0,i.canvas.width,i.canvas.height),ue.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:ce,disable:de,bindFramebuffer:Ee,drawBuffers:H,useProgram:xt,setBlending:Te,setMaterial:qe,setFlipSided:De,setCullFace:D,setLineWidth:A,setPolygonOffset:q,setScissorTest:ie,activeTexture:te,bindTexture:re,unbindTexture:Se,compressedTexImage2D:me,compressedTexImage3D:ve,texImage2D:Pe,texImage3D:xe,updateUBOMapping:le,uniformBlockBinding:ge,texStorage2D:$e,texStorage3D:ke,texSubImage2D:Ce,texSubImage3D:Be,compressedTexSubImage2D:se,compressedTexSubImage3D:at,scissor:Ve,viewport:O,reset:Le}}function HM(i,e,t,n,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(D,A){return f?new OffscreenCanvas(D,A):Wo("canvas")}function x(D,A,q,ie){let te=1;if((D.width>ie||D.height>ie)&&(te=ie/Math.max(D.width,D.height)),te<1||A===!0)if(typeof HTMLImageElement!="undefined"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&D instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&D instanceof ImageBitmap){const re=A?Tl:Math.floor,Se=re(te*D.width),me=re(te*D.height);h===void 0&&(h=g(Se,me));const ve=q?g(Se,me):h;return ve.width=Se,ve.height=me,ve.getContext("2d").drawImage(D,0,0,Se,me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+D.width+"x"+D.height+") to ("+Se+"x"+me+")."),ve}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+D.width+"x"+D.height+")."),D;return D}function m(D){return vu(D.width)&&vu(D.height)}function p(D){return a?!1:D.wrapS!==Yt||D.wrapT!==Yt||D.minFilter!==Qe&&D.minFilter!==it}function v(D,A){return D.generateMipmaps&&A&&D.minFilter!==Qe&&D.minFilter!==it}function _(D){i.generateMipmap(D)}function y(D,A,q,ie,te=!1){if(a===!1)return A;if(D!==null){if(i[D]!==void 0)return i[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let re=A;if(A===i.RED&&(q===i.FLOAT&&(re=i.R32F),q===i.HALF_FLOAT&&(re=i.R16F),q===i.UNSIGNED_BYTE&&(re=i.R8)),A===i.RED_INTEGER&&(q===i.UNSIGNED_BYTE&&(re=i.R8UI),q===i.UNSIGNED_SHORT&&(re=i.R16UI),q===i.UNSIGNED_INT&&(re=i.R32UI),q===i.BYTE&&(re=i.R8I),q===i.SHORT&&(re=i.R16I),q===i.INT&&(re=i.R32I)),A===i.RG&&(q===i.FLOAT&&(re=i.RG32F),q===i.HALF_FLOAT&&(re=i.RG16F),q===i.UNSIGNED_BYTE&&(re=i.RG8)),A===i.RGBA){const Se=te?vl:ut.getTransfer(ie);q===i.FLOAT&&(re=i.RGBA32F),q===i.HALF_FLOAT&&(re=i.RGBA16F),q===i.UNSIGNED_BYTE&&(re=Se===bt?i.SRGB8_ALPHA8:i.RGBA8),q===i.UNSIGNED_SHORT_4_4_4_4&&(re=i.RGBA4),q===i.UNSIGNED_SHORT_5_5_5_1&&(re=i.RGB5_A1)}return(re===i.R16F||re===i.R32F||re===i.RG16F||re===i.RG32F||re===i.RGBA16F||re===i.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function M(D,A,q){return v(D,q)===!0||D.isFramebufferTexture&&D.minFilter!==Qe&&D.minFilter!==it?Math.log2(Math.max(A.width,A.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?A.mipmaps.length:1}function T(D){return D===Qe||D===pu||D===Ss?i.NEAREST:i.LINEAR}function S(D){const A=D.target;A.removeEventListener("dispose",S),L(A),A.isVideoTexture&&u.delete(A)}function E(D){const A=D.target;A.removeEventListener("dispose",E),w(A)}function L(D){const A=n.get(D);if(A.__webglInit===void 0)return;const q=D.source,ie=d.get(q);if(ie){const te=ie[A.__cacheKey];te.usedTimes--,te.usedTimes===0&&b(D),Object.keys(ie).length===0&&d.delete(q)}n.remove(D)}function b(D){const A=n.get(D);i.deleteTexture(A.__webglTexture);const q=D.source,ie=d.get(q);delete ie[A.__cacheKey],o.memory.textures--}function w(D){const A=D.texture,q=n.get(D),ie=n.get(A);if(ie.__webglTexture!==void 0&&(i.deleteTexture(ie.__webglTexture),o.memory.textures--),D.depthTexture&&D.depthTexture.dispose(),D.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(q.__webglFramebuffer[te]))for(let re=0;re<q.__webglFramebuffer[te].length;re++)i.deleteFramebuffer(q.__webglFramebuffer[te][re]);else i.deleteFramebuffer(q.__webglFramebuffer[te]);q.__webglDepthbuffer&&i.deleteRenderbuffer(q.__webglDepthbuffer[te])}else{if(Array.isArray(q.__webglFramebuffer))for(let te=0;te<q.__webglFramebuffer.length;te++)i.deleteFramebuffer(q.__webglFramebuffer[te]);else i.deleteFramebuffer(q.__webglFramebuffer);if(q.__webglDepthbuffer&&i.deleteRenderbuffer(q.__webglDepthbuffer),q.__webglMultisampledFramebuffer&&i.deleteFramebuffer(q.__webglMultisampledFramebuffer),q.__webglColorRenderbuffer)for(let te=0;te<q.__webglColorRenderbuffer.length;te++)q.__webglColorRenderbuffer[te]&&i.deleteRenderbuffer(q.__webglColorRenderbuffer[te]);q.__webglDepthRenderbuffer&&i.deleteRenderbuffer(q.__webglDepthRenderbuffer)}if(D.isWebGLMultipleRenderTargets)for(let te=0,re=A.length;te<re;te++){const Se=n.get(A[te]);Se.__webglTexture&&(i.deleteTexture(Se.__webglTexture),o.memory.textures--),n.remove(A[te])}n.remove(A),n.remove(D)}let U=0;function k(){U=0}function R(){const D=U;return D>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+r.maxTextures),U+=1,D}function F(D){const A=[];return A.push(D.wrapS),A.push(D.wrapT),A.push(D.wrapR||0),A.push(D.magFilter),A.push(D.minFilter),A.push(D.anisotropy),A.push(D.internalFormat),A.push(D.format),A.push(D.type),A.push(D.generateMipmaps),A.push(D.premultiplyAlpha),A.push(D.flipY),A.push(D.unpackAlignment),A.push(D.colorSpace),A.join()}function B(D,A){const q=n.get(D);if(D.isVideoTexture&&qe(D),D.isRenderTargetTexture===!1&&D.version>0&&q.__version!==D.version){const ie=D.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(q,D,A);return}}t.bindTexture(i.TEXTURE_2D,q.__webglTexture,i.TEXTURE0+A)}function V(D,A){const q=n.get(D);if(D.version>0&&q.__version!==D.version){j(q,D,A);return}t.bindTexture(i.TEXTURE_2D_ARRAY,q.__webglTexture,i.TEXTURE0+A)}function X(D,A){const q=n.get(D);if(D.version>0&&q.__version!==D.version){j(q,D,A);return}t.bindTexture(i.TEXTURE_3D,q.__webglTexture,i.TEXTURE0+A)}function G(D,A){const q=n.get(D);if(D.version>0&&q.__version!==D.version){ue(q,D,A);return}t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture,i.TEXTURE0+A)}const Y={[Bs]:i.REPEAT,[Yt]:i.CLAMP_TO_EDGE,[xl]:i.MIRRORED_REPEAT},J={[Qe]:i.NEAREST,[pu]:i.NEAREST_MIPMAP_NEAREST,[Ss]:i.NEAREST_MIPMAP_LINEAR,[it]:i.LINEAR,[nl]:i.LINEAR_MIPMAP_NEAREST,[yi]:i.LINEAR_MIPMAP_LINEAR},ne={[x_]:i.NEVER,[S_]:i.ALWAYS,[v_]:i.LESS,[Gm]:i.LEQUAL,[y_]:i.EQUAL,[T_]:i.GEQUAL,[b_]:i.GREATER,[M_]:i.NOTEQUAL};function ee(D,A,q){if(A.type===Je&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===it||A.magFilter===nl||A.magFilter===Ss||A.magFilter===yi||A.minFilter===it||A.minFilter===nl||A.minFilter===Ss||A.minFilter===yi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),q?(i.texParameteri(D,i.TEXTURE_WRAP_S,Y[A.wrapS]),i.texParameteri(D,i.TEXTURE_WRAP_T,Y[A.wrapT]),(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)&&i.texParameteri(D,i.TEXTURE_WRAP_R,Y[A.wrapR]),i.texParameteri(D,i.TEXTURE_MAG_FILTER,J[A.magFilter]),i.texParameteri(D,i.TEXTURE_MIN_FILTER,J[A.minFilter])):(i.texParameteri(D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)&&i.texParameteri(D,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(A.wrapS!==Yt||A.wrapT!==Yt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(D,i.TEXTURE_MAG_FILTER,T(A.magFilter)),i.texParameteri(D,i.TEXTURE_MIN_FILTER,T(A.minFilter)),A.minFilter!==Qe&&A.minFilter!==it&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),A.compareFunction&&(i.texParameteri(D,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(D,i.TEXTURE_COMPARE_FUNC,ne[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ie=e.get("EXT_texture_filter_anisotropic");if(A.magFilter===Qe||A.minFilter!==Ss&&A.minFilter!==yi||A.type===Je&&e.has("OES_texture_float_linear")===!1||a===!1&&A.type===fn&&e.has("OES_texture_half_float_linear")===!1)return;(A.anisotropy>1||n.get(A).__currentAnisotropy)&&(i.texParameterf(D,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,r.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy)}}function z(D,A){let q=!1;D.__webglInit===void 0&&(D.__webglInit=!0,A.addEventListener("dispose",S));const ie=A.source;let te=d.get(ie);te===void 0&&(te={},d.set(ie,te));const re=F(A);if(re!==D.__cacheKey){te[re]===void 0&&(te[re]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,q=!0),te[re].usedTimes++;const Se=te[D.__cacheKey];Se!==void 0&&(te[D.__cacheKey].usedTimes--,Se.usedTimes===0&&b(A)),D.__cacheKey=re,D.__webglTexture=te[re].texture}return q}function j(D,A,q){let ie=i.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(ie=i.TEXTURE_2D_ARRAY),A.isData3DTexture&&(ie=i.TEXTURE_3D);const te=z(D,A),re=A.source;t.bindTexture(ie,D.__webglTexture,i.TEXTURE0+q);const Se=n.get(re);if(re.version!==Se.__version||te===!0){t.activeTexture(i.TEXTURE0+q);const me=ut.getPrimaries(ut.workingColorSpace),ve=A.colorSpace===rn?null:ut.getPrimaries(A.colorSpace),Ce=A.colorSpace===rn||me===ve?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);const Be=p(A)&&m(A.image)===!1;let se=x(A.image,Be,!1,r.maxTextureSize);se=De(A,se);const at=m(se)||a,$e=s.convert(A.format,A.colorSpace);let ke=s.convert(A.type),Pe=y(A.internalFormat,$e,ke,A.colorSpace,A.isVideoTexture);ee(ie,A,at);let xe;const Ve=A.mipmaps,O=a&&A.isVideoTexture!==!0&&Pe!==Bm,le=Se.__version===void 0||te===!0,ge=re.dataReady,Le=M(A,se,at);if(A.isDepthTexture)Pe=i.DEPTH_COMPONENT,a?A.type===Je?Pe=i.DEPTH_COMPONENT32F:A.type===On?Pe=i.DEPTH_COMPONENT24:A.type===Ar?Pe=i.DEPTH24_STENCIL8:Pe=i.DEPTH_COMPONENT16:A.type===Je&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),A.format===Rr&&Pe===i.DEPTH_COMPONENT&&A.type!==Fl&&A.type!==On&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),A.type=On,ke=s.convert(A.type)),A.format===ks&&Pe===i.DEPTH_COMPONENT&&(Pe=i.DEPTH_STENCIL,A.type!==Ar&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),A.type=Ar,ke=s.convert(A.type))),le&&(O?t.texStorage2D(i.TEXTURE_2D,1,Pe,se.width,se.height):t.texImage2D(i.TEXTURE_2D,0,Pe,se.width,se.height,0,$e,ke,null));else if(A.isDataTexture)if(Ve.length>0&&at){O&&le&&t.texStorage2D(i.TEXTURE_2D,Le,Pe,Ve[0].width,Ve[0].height);for(let N=0,ae=Ve.length;N<ae;N++)xe=Ve[N],O?ge&&t.texSubImage2D(i.TEXTURE_2D,N,0,0,xe.width,xe.height,$e,ke,xe.data):t.texImage2D(i.TEXTURE_2D,N,Pe,xe.width,xe.height,0,$e,ke,xe.data);A.generateMipmaps=!1}else O?(le&&t.texStorage2D(i.TEXTURE_2D,Le,Pe,se.width,se.height),ge&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,se.width,se.height,$e,ke,se.data)):t.texImage2D(i.TEXTURE_2D,0,Pe,se.width,se.height,0,$e,ke,se.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){O&&le&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Le,Pe,Ve[0].width,Ve[0].height,se.depth);for(let N=0,ae=Ve.length;N<ae;N++)xe=Ve[N],A.format!==vt?$e!==null?O?ge&&t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,N,0,0,0,xe.width,xe.height,se.depth,$e,xe.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,N,Pe,xe.width,xe.height,se.depth,0,xe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?ge&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,N,0,0,0,xe.width,xe.height,se.depth,$e,ke,xe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,N,Pe,xe.width,xe.height,se.depth,0,$e,ke,xe.data)}else{O&&le&&t.texStorage2D(i.TEXTURE_2D,Le,Pe,Ve[0].width,Ve[0].height);for(let N=0,ae=Ve.length;N<ae;N++)xe=Ve[N],A.format!==vt?$e!==null?O?ge&&t.compressedTexSubImage2D(i.TEXTURE_2D,N,0,0,xe.width,xe.height,$e,xe.data):t.compressedTexImage2D(i.TEXTURE_2D,N,Pe,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?ge&&t.texSubImage2D(i.TEXTURE_2D,N,0,0,xe.width,xe.height,$e,ke,xe.data):t.texImage2D(i.TEXTURE_2D,N,Pe,xe.width,xe.height,0,$e,ke,xe.data)}else if(A.isDataArrayTexture)O?(le&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Le,Pe,se.width,se.height,se.depth),ge&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,$e,ke,se.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,Pe,se.width,se.height,se.depth,0,$e,ke,se.data);else if(A.isData3DTexture)O?(le&&t.texStorage3D(i.TEXTURE_3D,Le,Pe,se.width,se.height,se.depth),ge&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,$e,ke,se.data)):t.texImage3D(i.TEXTURE_3D,0,Pe,se.width,se.height,se.depth,0,$e,ke,se.data);else if(A.isFramebufferTexture){if(le)if(O)t.texStorage2D(i.TEXTURE_2D,Le,Pe,se.width,se.height);else{let N=se.width,ae=se.height;for(let oe=0;oe<Le;oe++)t.texImage2D(i.TEXTURE_2D,oe,Pe,N,ae,0,$e,ke,null),N>>=1,ae>>=1}}else if(Ve.length>0&&at){O&&le&&t.texStorage2D(i.TEXTURE_2D,Le,Pe,Ve[0].width,Ve[0].height);for(let N=0,ae=Ve.length;N<ae;N++)xe=Ve[N],O?ge&&t.texSubImage2D(i.TEXTURE_2D,N,0,0,$e,ke,xe):t.texImage2D(i.TEXTURE_2D,N,Pe,$e,ke,xe);A.generateMipmaps=!1}else O?(le&&t.texStorage2D(i.TEXTURE_2D,Le,Pe,se.width,se.height),ge&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,$e,ke,se)):t.texImage2D(i.TEXTURE_2D,0,Pe,$e,ke,se);v(A,at)&&_(ie),Se.__version=re.version,A.onUpdate&&A.onUpdate(A)}D.__version=A.version}function ue(D,A,q){if(A.image.length!==6)return;const ie=z(D,A),te=A.source;t.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+q);const re=n.get(te);if(te.version!==re.__version||ie===!0){t.activeTexture(i.TEXTURE0+q);const Se=ut.getPrimaries(ut.workingColorSpace),me=A.colorSpace===rn?null:ut.getPrimaries(A.colorSpace),ve=A.colorSpace===rn||Se===me?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const Ce=A.isCompressedTexture||A.image[0].isCompressedTexture,Be=A.image[0]&&A.image[0].isDataTexture,se=[];for(let N=0;N<6;N++)!Ce&&!Be?se[N]=x(A.image[N],!1,!0,r.maxCubemapSize):se[N]=Be?A.image[N].image:A.image[N],se[N]=De(A,se[N]);const at=se[0],$e=m(at)||a,ke=s.convert(A.format,A.colorSpace),Pe=s.convert(A.type),xe=y(A.internalFormat,ke,Pe,A.colorSpace),Ve=a&&A.isVideoTexture!==!0,O=re.__version===void 0||ie===!0,le=te.dataReady;let ge=M(A,at,$e);ee(i.TEXTURE_CUBE_MAP,A,$e);let Le;if(Ce){Ve&&O&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ge,xe,at.width,at.height);for(let N=0;N<6;N++){Le=se[N].mipmaps;for(let ae=0;ae<Le.length;ae++){const oe=Le[ae];A.format!==vt?ke!==null?Ve?le&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+N,ae,0,0,oe.width,oe.height,ke,oe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+N,ae,xe,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ve?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+N,ae,0,0,oe.width,oe.height,ke,Pe,oe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+N,ae,xe,oe.width,oe.height,0,ke,Pe,oe.data)}}}else{Le=A.mipmaps,Ve&&O&&(Le.length>0&&ge++,t.texStorage2D(i.TEXTURE_CUBE_MAP,ge,xe,se[0].width,se[0].height));for(let N=0;N<6;N++)if(Be){Ve?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+N,0,0,0,se[N].width,se[N].height,ke,Pe,se[N].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+N,0,xe,se[N].width,se[N].height,0,ke,Pe,se[N].data);for(let ae=0;ae<Le.length;ae++){const we=Le[ae].image[N].image;Ve?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+N,ae+1,0,0,we.width,we.height,ke,Pe,we.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+N,ae+1,xe,we.width,we.height,0,ke,Pe,we.data)}}else{Ve?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+N,0,0,0,ke,Pe,se[N]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+N,0,xe,ke,Pe,se[N]);for(let ae=0;ae<Le.length;ae++){const oe=Le[ae];Ve?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+N,ae+1,0,0,ke,Pe,oe.image[N]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+N,ae+1,xe,ke,Pe,oe.image[N])}}}v(A,$e)&&_(i.TEXTURE_CUBE_MAP),re.__version=te.version,A.onUpdate&&A.onUpdate(A)}D.__version=A.version}function pe(D,A,q,ie,te,re){const Se=s.convert(q.format,q.colorSpace),me=s.convert(q.type),ve=y(q.internalFormat,Se,me,q.colorSpace);if(!n.get(A).__hasExternalTextures){const Be=Math.max(1,A.width>>re),se=Math.max(1,A.height>>re);te===i.TEXTURE_3D||te===i.TEXTURE_2D_ARRAY?t.texImage3D(te,re,ve,Be,se,A.depth,0,Se,me,null):t.texImage2D(te,re,ve,Be,se,0,Se,me,null)}t.bindFramebuffer(i.FRAMEBUFFER,D),Te(A)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ie,te,n.get(q).__webglTexture,0,Ie(A)):(te===i.TEXTURE_2D||te>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ie,te,n.get(q).__webglTexture,re),t.bindFramebuffer(i.FRAMEBUFFER,null)}function he(D,A,q){if(i.bindRenderbuffer(i.RENDERBUFFER,D),A.depthBuffer&&!A.stencilBuffer){let ie=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(q||Te(A)){const te=A.depthTexture;te&&te.isDepthTexture&&(te.type===Je?ie=i.DEPTH_COMPONENT32F:te.type===On&&(ie=i.DEPTH_COMPONENT24));const re=Ie(A);Te(A)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,re,ie,A.width,A.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,re,ie,A.width,A.height)}else i.renderbufferStorage(i.RENDERBUFFER,ie,A.width,A.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,D)}else if(A.depthBuffer&&A.stencilBuffer){const ie=Ie(A);q&&Te(A)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ie,i.DEPTH24_STENCIL8,A.width,A.height):Te(A)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ie,i.DEPTH24_STENCIL8,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,D)}else{const ie=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let te=0;te<ie.length;te++){const re=ie[te],Se=s.convert(re.format,re.colorSpace),me=s.convert(re.type),ve=y(re.internalFormat,Se,me,re.colorSpace),Ce=Ie(A);q&&Te(A)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ce,ve,A.width,A.height):Te(A)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ce,ve,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,ve,A.width,A.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ce(D,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,D),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),B(A.depthTexture,0);const ie=n.get(A.depthTexture).__webglTexture,te=Ie(A);if(A.depthTexture.format===Rr)Te(A)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ie,0,te):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ie,0);else if(A.depthTexture.format===ks)Te(A)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ie,0,te):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function de(D){const A=n.get(D),q=D.isWebGLCubeRenderTarget===!0;if(D.depthTexture&&!A.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");ce(A.__webglFramebuffer,D)}else if(q){A.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[ie]),A.__webglDepthbuffer[ie]=i.createRenderbuffer(),he(A.__webglDepthbuffer[ie],D,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=i.createRenderbuffer(),he(A.__webglDepthbuffer,D,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ee(D,A,q){const ie=n.get(D);A!==void 0&&pe(ie.__webglFramebuffer,D,D.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),q!==void 0&&de(D)}function H(D){const A=D.texture,q=n.get(D),ie=n.get(A);D.addEventListener("dispose",E),D.isWebGLMultipleRenderTargets!==!0&&(ie.__webglTexture===void 0&&(ie.__webglTexture=i.createTexture()),ie.__version=A.version,o.memory.textures++);const te=D.isWebGLCubeRenderTarget===!0,re=D.isWebGLMultipleRenderTargets===!0,Se=m(D)||a;if(te){q.__webglFramebuffer=[];for(let me=0;me<6;me++)if(a&&A.mipmaps&&A.mipmaps.length>0){q.__webglFramebuffer[me]=[];for(let ve=0;ve<A.mipmaps.length;ve++)q.__webglFramebuffer[me][ve]=i.createFramebuffer()}else q.__webglFramebuffer[me]=i.createFramebuffer()}else{if(a&&A.mipmaps&&A.mipmaps.length>0){q.__webglFramebuffer=[];for(let me=0;me<A.mipmaps.length;me++)q.__webglFramebuffer[me]=i.createFramebuffer()}else q.__webglFramebuffer=i.createFramebuffer();if(re)if(r.drawBuffers){const me=D.texture;for(let ve=0,Ce=me.length;ve<Ce;ve++){const Be=n.get(me[ve]);Be.__webglTexture===void 0&&(Be.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&D.samples>0&&Te(D)===!1){const me=re?A:[A];q.__webglMultisampledFramebuffer=i.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let ve=0;ve<me.length;ve++){const Ce=me[ve];q.__webglColorRenderbuffer[ve]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,q.__webglColorRenderbuffer[ve]);const Be=s.convert(Ce.format,Ce.colorSpace),se=s.convert(Ce.type),at=y(Ce.internalFormat,Be,se,Ce.colorSpace,D.isXRRenderTarget===!0),$e=Ie(D);i.renderbufferStorageMultisample(i.RENDERBUFFER,$e,at,D.width,D.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,q.__webglColorRenderbuffer[ve])}i.bindRenderbuffer(i.RENDERBUFFER,null),D.depthBuffer&&(q.__webglDepthRenderbuffer=i.createRenderbuffer(),he(q.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(te){t.bindTexture(i.TEXTURE_CUBE_MAP,ie.__webglTexture),ee(i.TEXTURE_CUBE_MAP,A,Se);for(let me=0;me<6;me++)if(a&&A.mipmaps&&A.mipmaps.length>0)for(let ve=0;ve<A.mipmaps.length;ve++)pe(q.__webglFramebuffer[me][ve],D,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+me,ve);else pe(q.__webglFramebuffer[me],D,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0);v(A,Se)&&_(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(re){const me=D.texture;for(let ve=0,Ce=me.length;ve<Ce;ve++){const Be=me[ve],se=n.get(Be);t.bindTexture(i.TEXTURE_2D,se.__webglTexture),ee(i.TEXTURE_2D,Be,Se),pe(q.__webglFramebuffer,D,Be,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,0),v(Be,Se)&&_(i.TEXTURE_2D)}t.unbindTexture()}else{let me=i.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(a?me=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(me,ie.__webglTexture),ee(me,A,Se),a&&A.mipmaps&&A.mipmaps.length>0)for(let ve=0;ve<A.mipmaps.length;ve++)pe(q.__webglFramebuffer[ve],D,A,i.COLOR_ATTACHMENT0,me,ve);else pe(q.__webglFramebuffer,D,A,i.COLOR_ATTACHMENT0,me,0);v(A,Se)&&_(me),t.unbindTexture()}D.depthBuffer&&de(D)}function xt(D){const A=m(D)||a,q=D.isWebGLMultipleRenderTargets===!0?D.texture:[D.texture];for(let ie=0,te=q.length;ie<te;ie++){const re=q[ie];if(v(re,A)){const Se=D.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,me=n.get(re).__webglTexture;t.bindTexture(Se,me),_(Se),t.unbindTexture()}}}function be(D){if(a&&D.samples>0&&Te(D)===!1){const A=D.isWebGLMultipleRenderTargets?D.texture:[D.texture],q=D.width,ie=D.height;let te=i.COLOR_BUFFER_BIT;const re=[],Se=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,me=n.get(D),ve=D.isWebGLMultipleRenderTargets===!0;if(ve)for(let Ce=0;Ce<A.length;Ce++)t.bindFramebuffer(i.FRAMEBUFFER,me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let Ce=0;Ce<A.length;Ce++){re.push(i.COLOR_ATTACHMENT0+Ce),D.depthBuffer&&re.push(Se);const Be=me.__ignoreDepthValues!==void 0?me.__ignoreDepthValues:!1;if(Be===!1&&(D.depthBuffer&&(te|=i.DEPTH_BUFFER_BIT),D.stencilBuffer&&(te|=i.STENCIL_BUFFER_BIT)),ve&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,me.__webglColorRenderbuffer[Ce]),Be===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Se]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Se])),ve){const se=n.get(A[Ce]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,se,0)}i.blitFramebuffer(0,0,q,ie,0,0,q,ie,te,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,re)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ve)for(let Ce=0;Ce<A.length;Ce++){t.bindFramebuffer(i.FRAMEBUFFER,me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.RENDERBUFFER,me.__webglColorRenderbuffer[Ce]);const Be=n.get(A[Ce]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.TEXTURE_2D,Be,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}}function Ie(D){return Math.min(r.maxSamples,D.samples)}function Te(D){const A=n.get(D);return a&&D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function qe(D){const A=o.render.frame;u.get(D)!==A&&(u.set(D,A),D.update())}function De(D,A){const q=D.colorSpace,ie=D.format,te=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||D.format===xu||q!==Qt&&q!==rn&&(ut.getTransfer(q)===bt?a===!1?e.has("EXT_sRGB")===!0&&ie===vt?(D.format=xu,D.minFilter=it,D.generateMipmaps=!1):A=Xm.sRGBToLinear(A):(ie!==vt||te!==si)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),A}this.allocateTextureUnit=R,this.resetTextureUnits=k,this.setTexture2D=B,this.setTexture2DArray=V,this.setTexture3D=X,this.setTextureCube=G,this.rebindTextures=Ee,this.setupRenderTarget=H,this.updateRenderTargetMipmap=xt,this.updateMultisampleRenderTarget=be,this.setupDepthRenderbuffer=de,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=Te}function GM(i,e,t){const n=t.isWebGL2;function r(s,o=rn){let a;const l=ut.getTransfer(o);if(s===si)return i.UNSIGNED_BYTE;if(s===Um)return i.UNSIGNED_SHORT_4_4_4_4;if(s===Nm)return i.UNSIGNED_SHORT_5_5_5_1;if(s===mu)return i.BYTE;if(s===Dm)return i.SHORT;if(s===Fl)return i.UNSIGNED_SHORT;if(s===Uo)return i.INT;if(s===On)return i.UNSIGNED_INT;if(s===Je)return i.FLOAT;if(s===fn)return n?i.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===c_)return i.ALPHA;if(s===vt)return i.RGBA;if(s===u_)return i.LUMINANCE;if(s===h_)return i.LUMINANCE_ALPHA;if(s===Rr)return i.DEPTH_COMPONENT;if(s===ks)return i.DEPTH_STENCIL;if(s===xu)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Fm)return i.RED;if(s===sh)return i.RED_INTEGER;if(s===Om)return i.RG;if(s===Ol)return i.RG_INTEGER;if(s===Go)return i.RGBA_INTEGER;if(s===Zl||s===Ql||s===Jl||s===ec)if(l===bt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Zl)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Ql)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Jl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===ec)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Zl)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Ql)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Jl)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===ec)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===sd||s===od||s===ad||s===ld)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===sd)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===od)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===ad)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===ld)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Bm)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===cd||s===ud)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===cd)return l===bt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===ud)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===hd||s===dd||s===fd||s===pd||s===md||s===gd||s===_d||s===xd||s===vd||s===yd||s===bd||s===Md||s===Td||s===Sd)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===hd)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===dd)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===fd)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===pd)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===md)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===gd)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===_d)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===xd)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===vd)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===yd)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===bd)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Md)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Td)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Sd)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===tc||s===wd||s===Ed)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===tc)return l===bt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===wd)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Ed)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===d_||s===Ad||s===Rd||s===Cd)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===tc)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Ad)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Rd)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Cd)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Ar?n?i.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class VM extends xn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Er extends Ye{constructor(){super(),this.isGroup=!0,this.type="Group"}}const WM={type:"move"};class wc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Er,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Er,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Er,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,n),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(WM)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Er;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const XM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qM=`
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

}`;class YM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new jt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}render(e,t){if(this.texture!==null){if(this.mesh===null){const n=t.cameras[0].viewport,r=new kt({extensions:{fragDepth:!0},vertexShader:XM,fragmentShader:qM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new $(new Rn(20,20),r)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class $M extends Nr{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,g=null;const x=new YM,m=t.getContextAttributes();let p=null,v=null;const _=[],y=[],M=new Me;let T=null;const S=new xn;S.layers.enable(1),S.viewport=new _t;const E=new xn;E.layers.enable(2),E.viewport=new _t;const L=[S,E],b=new VM;b.layers.enable(1),b.layers.enable(2);let w=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let j=_[z];return j===void 0&&(j=new wc,_[z]=j),j.getTargetRaySpace()},this.getControllerGrip=function(z){let j=_[z];return j===void 0&&(j=new wc,_[z]=j),j.getGripSpace()},this.getHand=function(z){let j=_[z];return j===void 0&&(j=new wc,_[z]=j),j.getHandSpace()};function k(z){const j=y.indexOf(z.inputSource);if(j===-1)return;const ue=_[j];ue!==void 0&&(ue.update(z.inputSource,z.frame,c||o),ue.dispatchEvent({type:z.type,data:z.inputSource}))}function R(){r.removeEventListener("select",k),r.removeEventListener("selectstart",k),r.removeEventListener("selectend",k),r.removeEventListener("squeeze",k),r.removeEventListener("squeezestart",k),r.removeEventListener("squeezeend",k),r.removeEventListener("end",R),r.removeEventListener("inputsourceschange",F);for(let z=0;z<_.length;z++){const j=y[z];j!==null&&(y[z]=null,_[z].disconnect(j))}w=null,U=null,x.reset(),e.setRenderTarget(p),f=null,d=null,h=null,r=null,v=null,ee.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(M.width,M.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){s=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){a=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(z){c=z},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(z){if(r=z,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",k),r.addEventListener("selectstart",k),r.addEventListener("selectend",k),r.addEventListener("squeeze",k),r.addEventListener("squeezestart",k),r.addEventListener("squeezeend",k),r.addEventListener("end",R),r.addEventListener("inputsourceschange",F),m.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(M),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const j={antialias:r.renderState.layers===void 0?m.antialias:!0,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,j),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new pn(f.framebufferWidth,f.framebufferHeight,{format:vt,type:si,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let j=null,ue=null,pe=null;m.depth&&(pe=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,j=m.stencil?ks:Rr,ue=m.stencil?Ar:On);const he={colorFormat:t.RGBA8,depthFormat:pe,scaleFactor:s};h=new XRWebGLBinding(r,t),d=h.createProjectionLayer(he),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new pn(d.textureWidth,d.textureHeight,{format:vt,type:si,depthTexture:new tg(d.textureWidth,d.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0});const ce=e.properties.get(v);ce.__ignoreDepthValues=d.ignoreDepthValues}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),ee.setContext(r),ee.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function F(z){for(let j=0;j<z.removed.length;j++){const ue=z.removed[j],pe=y.indexOf(ue);pe>=0&&(y[pe]=null,_[pe].disconnect(ue))}for(let j=0;j<z.added.length;j++){const ue=z.added[j];let pe=y.indexOf(ue);if(pe===-1){for(let ce=0;ce<_.length;ce++)if(ce>=y.length){y.push(ue),pe=ce;break}else if(y[ce]===null){y[ce]=ue,pe=ce;break}if(pe===-1)break}const he=_[pe];he&&he.connect(ue)}}const B=new C,V=new C;function X(z,j,ue){B.setFromMatrixPosition(j.matrixWorld),V.setFromMatrixPosition(ue.matrixWorld);const pe=B.distanceTo(V),he=j.projectionMatrix.elements,ce=ue.projectionMatrix.elements,de=he[14]/(he[10]-1),Ee=he[14]/(he[10]+1),H=(he[9]+1)/he[5],xt=(he[9]-1)/he[5],be=(he[8]-1)/he[0],Ie=(ce[8]+1)/ce[0],Te=de*be,qe=de*Ie,De=pe/(-be+Ie),D=De*-be;j.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(D),z.translateZ(De),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert();const A=de+De,q=Ee+De,ie=Te-D,te=qe+(pe-D),re=H*Ee/q*A,Se=xt*Ee/q*A;z.projectionMatrix.makePerspective(ie,te,re,Se,A,q),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}function G(z,j){j===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(j.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(r===null)return;x.texture!==null&&(z.near=x.depthNear,z.far=x.depthFar),b.near=E.near=S.near=z.near,b.far=E.far=S.far=z.far,(w!==b.near||U!==b.far)&&(r.updateRenderState({depthNear:b.near,depthFar:b.far}),w=b.near,U=b.far,S.near=w,S.far=U,E.near=w,E.far=U,S.updateProjectionMatrix(),E.updateProjectionMatrix(),z.updateProjectionMatrix());const j=z.parent,ue=b.cameras;G(b,j);for(let pe=0;pe<ue.length;pe++)G(ue[pe],j);ue.length===2?X(b,S,E):b.projectionMatrix.copy(S.projectionMatrix),Y(z,b,j)};function Y(z,j,ue){ue===null?z.matrix.copy(j.matrixWorld):(z.matrix.copy(ue.matrixWorld),z.matrix.invert(),z.matrix.multiply(j.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy(j.projectionMatrix),z.projectionMatrixInverse.copy(j.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=Hs*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(z){l=z,d!==null&&(d.fixedFoveation=z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=z)},this.hasDepthSensing=function(){return x.texture!==null};let J=null;function ne(z,j){if(u=j.getViewerPose(c||o),g=j,u!==null){const ue=u.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let pe=!1;ue.length!==b.cameras.length&&(b.cameras.length=0,pe=!0);for(let ce=0;ce<ue.length;ce++){const de=ue[ce];let Ee=null;if(f!==null)Ee=f.getViewport(de);else{const xt=h.getViewSubImage(d,de);Ee=xt.viewport,ce===0&&(e.setRenderTargetTextures(v,xt.colorTexture,d.ignoreDepthValues?void 0:xt.depthStencilTexture),e.setRenderTarget(v))}let H=L[ce];H===void 0&&(H=new xn,H.layers.enable(ce),H.viewport=new _t,L[ce]=H),H.matrix.fromArray(de.transform.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale),H.projectionMatrix.fromArray(de.projectionMatrix),H.projectionMatrixInverse.copy(H.projectionMatrix).invert(),H.viewport.set(Ee.x,Ee.y,Ee.width,Ee.height),ce===0&&(b.matrix.copy(H.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),pe===!0&&b.cameras.push(H)}const he=r.enabledFeatures;if(he&&he.includes("depth-sensing")){const ce=h.getDepthInformation(ue[0]);ce&&ce.isValid&&ce.texture&&x.init(e,ce,r.renderState)}}for(let ue=0;ue<_.length;ue++){const pe=y[ue],he=_[ue];pe!==null&&he!==void 0&&he.update(pe,j,c||o)}x.render(e,b),J&&J(z,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),g=null}const ee=new eg;ee.setAnimationLoop(ne),this.setAnimationLoop=function(z){J=z},this.dispose=function(){}}}function jM(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Zm(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,v,_,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),h(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,y)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),x(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,v,_):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Tn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Tn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const v=e.get(p).envMap;if(v&&(m.envMap.value=v,m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const _=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*_,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,v,_){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=_*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Tn&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){const v=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function KM(i,e,t,n){let r={},s={},o=[];const a=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(v,_){const y=_.program;n.uniformBlockBinding(v,y)}function c(v,_){let y=r[v.id];y===void 0&&(g(v),y=u(v),r[v.id]=y,v.addEventListener("dispose",m));const M=_.program;n.updateUBOMapping(v,M);const T=e.render.frame;s[v.id]!==T&&(d(v),s[v.id]=T)}function u(v){const _=h();v.__bindingPointIndex=_;const y=i.createBuffer(),M=v.__size,T=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,M,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,y),y}function h(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const _=r[v.id],y=v.uniforms,M=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let T=0,S=y.length;T<S;T++){const E=Array.isArray(y[T])?y[T]:[y[T]];for(let L=0,b=E.length;L<b;L++){const w=E[L];if(f(w,T,L,M)===!0){const U=w.__offset,k=Array.isArray(w.value)?w.value:[w.value];let R=0;for(let F=0;F<k.length;F++){const B=k[F],V=x(B);typeof B=="number"||typeof B=="boolean"?(w.__data[0]=B,i.bufferSubData(i.UNIFORM_BUFFER,U+R,w.__data)):B.isMatrix3?(w.__data[0]=B.elements[0],w.__data[1]=B.elements[1],w.__data[2]=B.elements[2],w.__data[3]=0,w.__data[4]=B.elements[3],w.__data[5]=B.elements[4],w.__data[6]=B.elements[5],w.__data[7]=0,w.__data[8]=B.elements[6],w.__data[9]=B.elements[7],w.__data[10]=B.elements[8],w.__data[11]=0):(B.toArray(w.__data,R),R+=V.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,U,w.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(v,_,y,M){const T=v.value,S=_+"_"+y;if(M[S]===void 0)return typeof T=="number"||typeof T=="boolean"?M[S]=T:M[S]=T.clone(),!0;{const E=M[S];if(typeof T=="number"||typeof T=="boolean"){if(E!==T)return M[S]=T,!0}else if(E.equals(T)===!1)return E.copy(T),!0}return!1}function g(v){const _=v.uniforms;let y=0;const M=16;for(let S=0,E=_.length;S<E;S++){const L=Array.isArray(_[S])?_[S]:[_[S]];for(let b=0,w=L.length;b<w;b++){const U=L[b],k=Array.isArray(U.value)?U.value:[U.value];for(let R=0,F=k.length;R<F;R++){const B=k[R],V=x(B),X=y%M;X!==0&&M-X<V.boundary&&(y+=M-X),U.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=y,y+=V.storage}}}const T=y%M;return T>0&&(y+=M-T),v.__size=y,v.__cache={},this}function x(v){const _={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=48,_.storage=48):v.isMatrix4?(_.boundary=64,_.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),_}function m(v){const _=v.target;_.removeEventListener("dispose",m);const y=o.indexOf(_.__bindingPointIndex);o.splice(y,1),i.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function p(){for(const v in r)i.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:c,dispose:p}}class ag{constructor(e={}){const{canvas:t=k_(),context:n=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=o;const f=new Uint32Array(4),g=new Int32Array(4);let x=null,m=null;const p=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Rt,this._useLegacyLights=!1,this.toneMapping=ar,this.toneMappingExposure=1;const _=this;let y=!1,M=0,T=0,S=null,E=-1,L=null;const b=new _t,w=new _t;let U=null;const k=new Re(0);let R=0,F=t.width,B=t.height,V=1,X=null,G=null;const Y=new _t(0,0,F,B),J=new _t(0,0,F,B);let ne=!1;const ee=new ch;let z=!1,j=!1,ue=null;const pe=new Fe,he=new Me,ce=new C,de={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ee(){return S===null?V:1}let H=n;function xt(I,W){for(let Z=0;Z<I.length;Z++){const Q=I[Z],K=t.getContext(Q,W);if(K!==null)return K}return null}try{const I={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${rh}`),t.addEventListener("webglcontextlost",Le,!1),t.addEventListener("webglcontextrestored",N,!1),t.addEventListener("webglcontextcreationerror",ae,!1),H===null){const W=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&W.shift(),H=xt(W,I),H===null)throw xt(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext!="undefined"&&H instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),H.getShaderPrecisionFormat===void 0&&(H.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(I){throw console.error("THREE.WebGLRenderer: "+I.message),I}let be,Ie,Te,qe,De,D,A,q,ie,te,re,Se,me,ve,Ce,Be,se,at,$e,ke,Pe,xe,Ve,O;function le(){be=new ib(H),Ie=new Zy(H,be,e),be.init(Ie),xe=new GM(H,be,Ie),Te=new zM(H,be,Ie),qe=new ob(H),De=new EM,D=new HM(H,be,Te,De,Ie,xe,qe),A=new Jy(_),q=new nb(_),ie=new px(H,Ie),Ve=new jy(H,be,ie,Ie),te=new rb(H,ie,qe,Ve),re=new ub(H,te,ie,qe),$e=new cb(H,Ie,D),Be=new Qy(De),Se=new wM(_,A,q,be,Ie,Ve,Be),me=new jM(_,De),ve=new RM,Ce=new UM(be,Ie),at=new $y(_,A,q,Te,re,d,l),se=new kM(_,re,Ie),O=new KM(H,qe,Ie,Te),ke=new Ky(H,be,qe,Ie),Pe=new sb(H,be,qe,Ie),qe.programs=Se.programs,_.capabilities=Ie,_.extensions=be,_.properties=De,_.renderLists=ve,_.shadowMap=se,_.state=Te,_.info=qe}le();const ge=new $M(_,H);this.xr=ge,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const I=be.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){const I=be.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(I){I!==void 0&&(V=I,this.setSize(F,B,!1))},this.getSize=function(I){return I.set(F,B)},this.setSize=function(I,W,Z=!0){if(ge.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=I,B=W,t.width=Math.floor(I*V),t.height=Math.floor(W*V),Z===!0&&(t.style.width=I+"px",t.style.height=W+"px"),this.setViewport(0,0,I,W)},this.getDrawingBufferSize=function(I){return I.set(F*V,B*V).floor()},this.setDrawingBufferSize=function(I,W,Z){F=I,B=W,V=Z,t.width=Math.floor(I*Z),t.height=Math.floor(W*Z),this.setViewport(0,0,I,W)},this.getCurrentViewport=function(I){return I.copy(b)},this.getViewport=function(I){return I.copy(Y)},this.setViewport=function(I,W,Z,Q){I.isVector4?Y.set(I.x,I.y,I.z,I.w):Y.set(I,W,Z,Q),Te.viewport(b.copy(Y).multiplyScalar(V).floor())},this.getScissor=function(I){return I.copy(J)},this.setScissor=function(I,W,Z,Q){I.isVector4?J.set(I.x,I.y,I.z,I.w):J.set(I,W,Z,Q),Te.scissor(w.copy(J).multiplyScalar(V).floor())},this.getScissorTest=function(){return ne},this.setScissorTest=function(I){Te.setScissorTest(ne=I)},this.setOpaqueSort=function(I){X=I},this.setTransparentSort=function(I){G=I},this.getClearColor=function(I){return I.copy(at.getClearColor())},this.setClearColor=function(){at.setClearColor.apply(at,arguments)},this.getClearAlpha=function(){return at.getClearAlpha()},this.setClearAlpha=function(){at.setClearAlpha.apply(at,arguments)},this.clear=function(I=!0,W=!0,Z=!0){let Q=0;if(I){let K=!1;if(S!==null){const ye=S.texture.format;K=ye===Go||ye===Ol||ye===sh}if(K){const ye=S.texture.type,Ae=ye===si||ye===On||ye===Fl||ye===Ar||ye===Um||ye===Nm,Oe=at.getClearColor(),ze=at.getClearAlpha(),je=Oe.r,He=Oe.g,We=Oe.b;Ae?(f[0]=je,f[1]=He,f[2]=We,f[3]=ze,H.clearBufferuiv(H.COLOR,0,f)):(g[0]=je,g[1]=He,g[2]=We,g[3]=ze,H.clearBufferiv(H.COLOR,0,g))}else Q|=H.COLOR_BUFFER_BIT}W&&(Q|=H.DEPTH_BUFFER_BIT),Z&&(Q|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Le,!1),t.removeEventListener("webglcontextrestored",N,!1),t.removeEventListener("webglcontextcreationerror",ae,!1),ve.dispose(),Ce.dispose(),De.dispose(),A.dispose(),q.dispose(),re.dispose(),Ve.dispose(),O.dispose(),Se.dispose(),ge.dispose(),ge.removeEventListener("sessionstart",on),ge.removeEventListener("sessionend",st),ue&&(ue.dispose(),ue=null),Nt.stop()};function Le(I){I.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function N(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const I=qe.autoReset,W=se.enabled,Z=se.autoUpdate,Q=se.needsUpdate,K=se.type;le(),qe.autoReset=I,se.enabled=W,se.autoUpdate=Z,se.needsUpdate=Q,se.type=K}function ae(I){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function oe(I){const W=I.target;W.removeEventListener("dispose",oe),we(W)}function we(I){Ue(I),De.remove(I)}function Ue(I){const W=De.get(I).programs;W!==void 0&&(W.forEach(function(Z){Se.releaseProgram(Z)}),I.isShaderMaterial&&Se.releaseShaderCache(I))}this.renderBufferDirect=function(I,W,Z,Q,K,ye){W===null&&(W=de);const Ae=K.isMesh&&K.matrixWorld.determinant()<0,Oe=m0(I,W,Z,Q,K);Te.setMaterial(Q,Ae);let ze=Z.index,je=1;if(Q.wireframe===!0){if(ze=te.getWireframeAttribute(Z),ze===void 0)return;je=2}const He=Z.drawRange,We=Z.attributes.position;let Ft=He.start*je,Cn=(He.start+He.count)*je;ye!==null&&(Ft=Math.max(Ft,ye.start*je),Cn=Math.min(Cn,(ye.start+ye.count)*je)),ze!==null?(Ft=Math.max(Ft,0),Cn=Math.min(Cn,ze.count)):We!=null&&(Ft=Math.max(Ft,0),Cn=Math.min(Cn,We.count));const tn=Cn-Ft;if(tn<0||tn===1/0)return;Ve.setup(K,Q,Oe,Z,ze);let Ci,Et=ke;if(ze!==null&&(Ci=ie.get(ze),Et=Pe,Et.setIndex(Ci)),K.isMesh)Q.wireframe===!0?(Te.setLineWidth(Q.wireframeLinewidth*Ee()),Et.setMode(H.LINES)):Et.setMode(H.TRIANGLES);else if(K.isLine){let Ke=Q.linewidth;Ke===void 0&&(Ke=1),Te.setLineWidth(Ke*Ee()),K.isLineSegments?Et.setMode(H.LINES):K.isLineLoop?Et.setMode(H.LINE_LOOP):Et.setMode(H.LINE_STRIP)}else K.isPoints?Et.setMode(H.POINTS):K.isSprite&&Et.setMode(H.TRIANGLES);if(K.isBatchedMesh)Et.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else if(K.isInstancedMesh)Et.renderInstances(Ft,tn,K.count);else if(Z.isInstancedBufferGeometry){const Ke=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,ql=Math.min(Z.instanceCount,Ke);Et.renderInstances(Ft,tn,ql)}else Et.render(Ft,tn)};function rt(I,W,Z){I.transparent===!0&&I.side===vn&&I.forceSinglePass===!1?(I.side=Tn,I.needsUpdate=!0,na(I,W,Z),I.side=ai,I.needsUpdate=!0,na(I,W,Z),I.side=vn):na(I,W,Z)}this.compile=function(I,W,Z=null){Z===null&&(Z=I),m=Ce.get(Z),m.init(),v.push(m),Z.traverseVisible(function(K){K.isLight&&K.layers.test(W.layers)&&(m.pushLight(K),K.castShadow&&m.pushShadow(K))}),I!==Z&&I.traverseVisible(function(K){K.isLight&&K.layers.test(W.layers)&&(m.pushLight(K),K.castShadow&&m.pushShadow(K))}),m.setupLights(_._useLegacyLights);const Q=new Set;return I.traverse(function(K){const ye=K.material;if(ye)if(Array.isArray(ye))for(let Ae=0;Ae<ye.length;Ae++){const Oe=ye[Ae];rt(Oe,Z,K),Q.add(Oe)}else rt(ye,Z,K),Q.add(ye)}),v.pop(),m=null,Q},this.compileAsync=function(I,W,Z=null){const Q=this.compile(I,W,Z);return new Promise(K=>{function ye(){if(Q.forEach(function(Ae){De.get(Ae).currentProgram.isReady()&&Q.delete(Ae)}),Q.size===0){K(I);return}setTimeout(ye,10)}be.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let et=null;function pt(I){et&&et(I)}function on(){Nt.stop()}function st(){Nt.start()}const Nt=new eg;Nt.setAnimationLoop(pt),typeof self!="undefined"&&Nt.setContext(self),this.setAnimationLoop=function(I){et=I,ge.setAnimationLoop(I),I===null?Nt.stop():Nt.start()},ge.addEventListener("sessionstart",on),ge.addEventListener("sessionend",st),this.render=function(I,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),ge.enabled===!0&&ge.isPresenting===!0&&(ge.cameraAutoUpdate===!0&&ge.updateCamera(W),W=ge.getCamera()),I.isScene===!0&&I.onBeforeRender(_,I,W,S),m=Ce.get(I,v.length),m.init(),v.push(m),pe.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),ee.setFromProjectionMatrix(pe),j=this.localClippingEnabled,z=Be.init(this.clippingPlanes,j),x=ve.get(I,p.length),x.init(),p.push(x),mn(I,W,0,_.sortObjects),x.finish(),_.sortObjects===!0&&x.sort(X,G),this.info.render.frame++,z===!0&&Be.beginShadows();const Z=m.state.shadowsArray;if(se.render(Z,I,W),z===!0&&Be.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ge.enabled===!1||ge.isPresenting===!1||ge.hasDepthSensing()===!1)&&at.render(x,I),m.setupLights(_._useLegacyLights),W.isArrayCamera){const Q=W.cameras;for(let K=0,ye=Q.length;K<ye;K++){const Ae=Q[K];Gh(x,I,Ae,Ae.viewport)}}else Gh(x,I,W);S!==null&&(D.updateMultisampleRenderTarget(S),D.updateRenderTargetMipmap(S)),I.isScene===!0&&I.onAfterRender(_,I,W),Ve.resetDefaultState(),E=-1,L=null,v.pop(),v.length>0?m=v[v.length-1]:m=null,p.pop(),p.length>0?x=p[p.length-1]:x=null};function mn(I,W,Z,Q){if(I.visible===!1)return;if(I.layers.test(W.layers)){if(I.isGroup)Z=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(W);else if(I.isLight)m.pushLight(I),I.castShadow&&m.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||ee.intersectsSprite(I)){Q&&ce.setFromMatrixPosition(I.matrixWorld).applyMatrix4(pe);const Ae=re.update(I),Oe=I.material;Oe.visible&&x.push(I,Ae,Oe,Z,ce.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||ee.intersectsObject(I))){const Ae=re.update(I),Oe=I.material;if(Q&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),ce.copy(I.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),ce.copy(Ae.boundingSphere.center)),ce.applyMatrix4(I.matrixWorld).applyMatrix4(pe)),Array.isArray(Oe)){const ze=Ae.groups;for(let je=0,He=ze.length;je<He;je++){const We=ze[je],Ft=Oe[We.materialIndex];Ft&&Ft.visible&&x.push(I,Ae,Ft,Z,ce.z,We)}}else Oe.visible&&x.push(I,Ae,Oe,Z,ce.z,null)}}const ye=I.children;for(let Ae=0,Oe=ye.length;Ae<Oe;Ae++)mn(ye[Ae],W,Z,Q)}function Gh(I,W,Z,Q){const K=I.opaque,ye=I.transmissive,Ae=I.transparent;m.setupLightsView(Z),z===!0&&Be.setGlobalState(_.clippingPlanes,Z),ye.length>0&&p0(K,ye,W,Z),Q&&Te.viewport(b.copy(Q)),K.length>0&&ta(K,W,Z),ye.length>0&&ta(ye,W,Z),Ae.length>0&&ta(Ae,W,Z),Te.buffers.depth.setTest(!0),Te.buffers.depth.setMask(!0),Te.buffers.color.setMask(!0),Te.setPolygonOffset(!1)}function p0(I,W,Z,Q){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;const ye=Ie.isWebGL2;ue===null&&(ue=new pn(1,1,{generateMipmaps:!0,type:be.has("EXT_color_buffer_half_float")?fn:si,minFilter:yi,samples:ye?4:0})),_.getDrawingBufferSize(he),ye?ue.setSize(he.x,he.y):ue.setSize(Tl(he.x),Tl(he.y));const Ae=_.getRenderTarget();_.setRenderTarget(ue),_.getClearColor(k),R=_.getClearAlpha(),R<1&&_.setClearColor(16777215,.5),_.clear();const Oe=_.toneMapping;_.toneMapping=ar,ta(I,Z,Q),D.updateMultisampleRenderTarget(ue),D.updateRenderTargetMipmap(ue);let ze=!1;for(let je=0,He=W.length;je<He;je++){const We=W[je],Ft=We.object,Cn=We.geometry,tn=We.material,Ci=We.group;if(tn.side===vn&&Ft.layers.test(Q.layers)){const Et=tn.side;tn.side=Tn,tn.needsUpdate=!0,Vh(Ft,Z,Q,Cn,tn,Ci),tn.side=Et,tn.needsUpdate=!0,ze=!0}}ze===!0&&(D.updateMultisampleRenderTarget(ue),D.updateRenderTargetMipmap(ue)),_.setRenderTarget(Ae),_.setClearColor(k,R),_.toneMapping=Oe}function ta(I,W,Z){const Q=W.isScene===!0?W.overrideMaterial:null;for(let K=0,ye=I.length;K<ye;K++){const Ae=I[K],Oe=Ae.object,ze=Ae.geometry,je=Q===null?Ae.material:Q,He=Ae.group;Oe.layers.test(Z.layers)&&Vh(Oe,W,Z,ze,je,He)}}function Vh(I,W,Z,Q,K,ye){I.onBeforeRender(_,W,Z,Q,K,ye),I.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),K.onBeforeRender(_,W,Z,Q,I,ye),K.transparent===!0&&K.side===vn&&K.forceSinglePass===!1?(K.side=Tn,K.needsUpdate=!0,_.renderBufferDirect(Z,W,Q,K,I,ye),K.side=ai,K.needsUpdate=!0,_.renderBufferDirect(Z,W,Q,K,I,ye),K.side=vn):_.renderBufferDirect(Z,W,Q,K,I,ye),I.onAfterRender(_,W,Z,Q,K,ye)}function na(I,W,Z){W.isScene!==!0&&(W=de);const Q=De.get(I),K=m.state.lights,ye=m.state.shadowsArray,Ae=K.state.version,Oe=Se.getParameters(I,K.state,ye,W,Z),ze=Se.getProgramCacheKey(Oe);let je=Q.programs;Q.environment=I.isMeshStandardMaterial?W.environment:null,Q.fog=W.fog,Q.envMap=(I.isMeshStandardMaterial?q:A).get(I.envMap||Q.environment),je===void 0&&(I.addEventListener("dispose",oe),je=new Map,Q.programs=je);let He=je.get(ze);if(He!==void 0){if(Q.currentProgram===He&&Q.lightsStateVersion===Ae)return Xh(I,Oe),He}else Oe.uniforms=Se.getUniforms(I),I.onBuild(Z,Oe,_),I.onBeforeCompile(Oe,_),He=Se.acquireProgram(Oe,ze),je.set(ze,He),Q.uniforms=Oe.uniforms;const We=Q.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(We.clippingPlanes=Be.uniform),Xh(I,Oe),Q.needsLights=_0(I),Q.lightsStateVersion=Ae,Q.needsLights&&(We.ambientLightColor.value=K.state.ambient,We.lightProbe.value=K.state.probe,We.directionalLights.value=K.state.directional,We.directionalLightShadows.value=K.state.directionalShadow,We.spotLights.value=K.state.spot,We.spotLightShadows.value=K.state.spotShadow,We.rectAreaLights.value=K.state.rectArea,We.ltc_1.value=K.state.rectAreaLTC1,We.ltc_2.value=K.state.rectAreaLTC2,We.pointLights.value=K.state.point,We.pointLightShadows.value=K.state.pointShadow,We.hemisphereLights.value=K.state.hemi,We.directionalShadowMap.value=K.state.directionalShadowMap,We.directionalShadowMatrix.value=K.state.directionalShadowMatrix,We.spotShadowMap.value=K.state.spotShadowMap,We.spotLightMatrix.value=K.state.spotLightMatrix,We.spotLightMap.value=K.state.spotLightMap,We.pointShadowMap.value=K.state.pointShadowMap,We.pointShadowMatrix.value=K.state.pointShadowMatrix),Q.currentProgram=He,Q.uniformsList=null,He}function Wh(I){if(I.uniformsList===null){const W=I.currentProgram.getUniforms();I.uniformsList=il.seqWithValue(W.seq,I.uniforms)}return I.uniformsList}function Xh(I,W){const Z=De.get(I);Z.outputColorSpace=W.outputColorSpace,Z.batching=W.batching,Z.instancing=W.instancing,Z.instancingColor=W.instancingColor,Z.skinning=W.skinning,Z.morphTargets=W.morphTargets,Z.morphNormals=W.morphNormals,Z.morphColors=W.morphColors,Z.morphTargetsCount=W.morphTargetsCount,Z.numClippingPlanes=W.numClippingPlanes,Z.numIntersection=W.numClipIntersection,Z.vertexAlphas=W.vertexAlphas,Z.vertexTangents=W.vertexTangents,Z.toneMapping=W.toneMapping}function m0(I,W,Z,Q,K){W.isScene!==!0&&(W=de),D.resetTextureUnits();const ye=W.fog,Ae=Q.isMeshStandardMaterial?W.environment:null,Oe=S===null?_.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:Qt,ze=(Q.isMeshStandardMaterial?q:A).get(Q.envMap||Ae),je=Q.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,He=!!Z.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),We=!!Z.morphAttributes.position,Ft=!!Z.morphAttributes.normal,Cn=!!Z.morphAttributes.color;let tn=ar;Q.toneMapped&&(S===null||S.isXRRenderTarget===!0)&&(tn=_.toneMapping);const Ci=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Et=Ci!==void 0?Ci.length:0,Ke=De.get(Q),ql=m.state.lights;if(z===!0&&(j===!0||I!==L)){const Gn=I===L&&Q.id===E;Be.setState(Q,I,Gn)}let Lt=!1;Q.version===Ke.__version?(Ke.needsLights&&Ke.lightsStateVersion!==ql.state.version||Ke.outputColorSpace!==Oe||K.isBatchedMesh&&Ke.batching===!1||!K.isBatchedMesh&&Ke.batching===!0||K.isInstancedMesh&&Ke.instancing===!1||!K.isInstancedMesh&&Ke.instancing===!0||K.isSkinnedMesh&&Ke.skinning===!1||!K.isSkinnedMesh&&Ke.skinning===!0||K.isInstancedMesh&&Ke.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Ke.instancingColor===!1&&K.instanceColor!==null||Ke.envMap!==ze||Q.fog===!0&&Ke.fog!==ye||Ke.numClippingPlanes!==void 0&&(Ke.numClippingPlanes!==Be.numPlanes||Ke.numIntersection!==Be.numIntersection)||Ke.vertexAlphas!==je||Ke.vertexTangents!==He||Ke.morphTargets!==We||Ke.morphNormals!==Ft||Ke.morphColors!==Cn||Ke.toneMapping!==tn||Ie.isWebGL2===!0&&Ke.morphTargetsCount!==Et)&&(Lt=!0):(Lt=!0,Ke.__version=Q.version);let fr=Ke.currentProgram;Lt===!0&&(fr=na(Q,W,K));let qh=!1,to=!1,Yl=!1;const cn=fr.getUniforms(),pr=Ke.uniforms;if(Te.useProgram(fr.program)&&(qh=!0,to=!0,Yl=!0),Q.id!==E&&(E=Q.id,to=!0),qh||L!==I){cn.setValue(H,"projectionMatrix",I.projectionMatrix),cn.setValue(H,"viewMatrix",I.matrixWorldInverse);const Gn=cn.map.cameraPosition;Gn!==void 0&&Gn.setValue(H,ce.setFromMatrixPosition(I.matrixWorld)),Ie.logarithmicDepthBuffer&&cn.setValue(H,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&cn.setValue(H,"isOrthographic",I.isOrthographicCamera===!0),L!==I&&(L=I,to=!0,Yl=!0)}if(K.isSkinnedMesh){cn.setOptional(H,K,"bindMatrix"),cn.setOptional(H,K,"bindMatrixInverse");const Gn=K.skeleton;Gn&&(Ie.floatVertexTextures?(Gn.boneTexture===null&&Gn.computeBoneTexture(),cn.setValue(H,"boneTexture",Gn.boneTexture,D)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}K.isBatchedMesh&&(cn.setOptional(H,K,"batchingTexture"),cn.setValue(H,"batchingTexture",K._matricesTexture,D));const $l=Z.morphAttributes;if(($l.position!==void 0||$l.normal!==void 0||$l.color!==void 0&&Ie.isWebGL2===!0)&&$e.update(K,Z,fr),(to||Ke.receiveShadow!==K.receiveShadow)&&(Ke.receiveShadow=K.receiveShadow,cn.setValue(H,"receiveShadow",K.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(pr.envMap.value=ze,pr.flipEnvMap.value=ze.isCubeTexture&&ze.isRenderTargetTexture===!1?-1:1),to&&(cn.setValue(H,"toneMappingExposure",_.toneMappingExposure),Ke.needsLights&&g0(pr,Yl),ye&&Q.fog===!0&&me.refreshFogUniforms(pr,ye),me.refreshMaterialUniforms(pr,Q,V,B,ue),il.upload(H,Wh(Ke),pr,D)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(il.upload(H,Wh(Ke),pr,D),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&cn.setValue(H,"center",K.center),cn.setValue(H,"modelViewMatrix",K.modelViewMatrix),cn.setValue(H,"normalMatrix",K.normalMatrix),cn.setValue(H,"modelMatrix",K.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const Gn=Q.uniformsGroups;for(let jl=0,x0=Gn.length;jl<x0;jl++)if(Ie.isWebGL2){const Yh=Gn[jl];O.update(Yh,fr),O.bind(Yh,fr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return fr}function g0(I,W){I.ambientLightColor.needsUpdate=W,I.lightProbe.needsUpdate=W,I.directionalLights.needsUpdate=W,I.directionalLightShadows.needsUpdate=W,I.pointLights.needsUpdate=W,I.pointLightShadows.needsUpdate=W,I.spotLights.needsUpdate=W,I.spotLightShadows.needsUpdate=W,I.rectAreaLights.needsUpdate=W,I.hemisphereLights.needsUpdate=W}function _0(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(I,W,Z){De.get(I.texture).__webglTexture=W,De.get(I.depthTexture).__webglTexture=Z;const Q=De.get(I);Q.__hasExternalTextures=!0,Q.__hasExternalTextures&&(Q.__autoAllocateDepthBuffer=Z===void 0,Q.__autoAllocateDepthBuffer||be.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Q.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(I,W){const Z=De.get(I);Z.__webglFramebuffer=W,Z.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(I,W=0,Z=0){S=I,M=W,T=Z;let Q=!0,K=null,ye=!1,Ae=!1;if(I){const ze=De.get(I);ze.__useDefaultFramebuffer!==void 0?(Te.bindFramebuffer(H.FRAMEBUFFER,null),Q=!1):ze.__webglFramebuffer===void 0?D.setupRenderTarget(I):ze.__hasExternalTextures&&D.rebindTextures(I,De.get(I.texture).__webglTexture,De.get(I.depthTexture).__webglTexture);const je=I.texture;(je.isData3DTexture||je.isDataArrayTexture||je.isCompressedArrayTexture)&&(Ae=!0);const He=De.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(He[W])?K=He[W][Z]:K=He[W],ye=!0):Ie.isWebGL2&&I.samples>0&&D.useMultisampledRTT(I)===!1?K=De.get(I).__webglMultisampledFramebuffer:Array.isArray(He)?K=He[Z]:K=He,b.copy(I.viewport),w.copy(I.scissor),U=I.scissorTest}else b.copy(Y).multiplyScalar(V).floor(),w.copy(J).multiplyScalar(V).floor(),U=ne;if(Te.bindFramebuffer(H.FRAMEBUFFER,K)&&Ie.drawBuffers&&Q&&Te.drawBuffers(I,K),Te.viewport(b),Te.scissor(w),Te.setScissorTest(U),ye){const ze=De.get(I.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+W,ze.__webglTexture,Z)}else if(Ae){const ze=De.get(I.texture),je=W||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,ze.__webglTexture,Z||0,je)}E=-1},this.readRenderTargetPixels=function(I,W,Z,Q,K,ye,Ae){if(!(I&&I.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=De.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Ae!==void 0&&(Oe=Oe[Ae]),Oe){Te.bindFramebuffer(H.FRAMEBUFFER,Oe);try{const ze=I.texture,je=ze.format,He=ze.type;if(je!==vt&&xe.convert(je)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const We=He===fn&&(be.has("EXT_color_buffer_half_float")||Ie.isWebGL2&&be.has("EXT_color_buffer_float"));if(He!==si&&xe.convert(He)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_TYPE)&&!(He===Je&&(Ie.isWebGL2||be.has("OES_texture_float")||be.has("WEBGL_color_buffer_float")))&&!We){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=I.width-Q&&Z>=0&&Z<=I.height-K&&H.readPixels(W,Z,Q,K,xe.convert(je),xe.convert(He),ye)}finally{const ze=S!==null?De.get(S).__webglFramebuffer:null;Te.bindFramebuffer(H.FRAMEBUFFER,ze)}}},this.copyFramebufferToTexture=function(I,W,Z=0){const Q=Math.pow(2,-Z),K=Math.floor(W.image.width*Q),ye=Math.floor(W.image.height*Q);D.setTexture2D(W,0),H.copyTexSubImage2D(H.TEXTURE_2D,Z,0,0,I.x,I.y,K,ye),Te.unbindTexture()},this.copyTextureToTexture=function(I,W,Z,Q=0){const K=W.image.width,ye=W.image.height,Ae=xe.convert(Z.format),Oe=xe.convert(Z.type);D.setTexture2D(Z,0),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,Z.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,Z.unpackAlignment),W.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Q,I.x,I.y,K,ye,Ae,Oe,W.image.data):W.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Q,I.x,I.y,W.mipmaps[0].width,W.mipmaps[0].height,Ae,W.mipmaps[0].data):H.texSubImage2D(H.TEXTURE_2D,Q,I.x,I.y,Ae,Oe,W.image),Q===0&&Z.generateMipmaps&&H.generateMipmap(H.TEXTURE_2D),Te.unbindTexture()},this.copyTextureToTexture3D=function(I,W,Z,Q,K=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ye=I.max.x-I.min.x+1,Ae=I.max.y-I.min.y+1,Oe=I.max.z-I.min.z+1,ze=xe.convert(Q.format),je=xe.convert(Q.type);let He;if(Q.isData3DTexture)D.setTexture3D(Q,0),He=H.TEXTURE_3D;else if(Q.isDataArrayTexture||Q.isCompressedArrayTexture)D.setTexture2DArray(Q,0),He=H.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,Q.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,Q.unpackAlignment);const We=H.getParameter(H.UNPACK_ROW_LENGTH),Ft=H.getParameter(H.UNPACK_IMAGE_HEIGHT),Cn=H.getParameter(H.UNPACK_SKIP_PIXELS),tn=H.getParameter(H.UNPACK_SKIP_ROWS),Ci=H.getParameter(H.UNPACK_SKIP_IMAGES),Et=Z.isCompressedTexture?Z.mipmaps[K]:Z.image;H.pixelStorei(H.UNPACK_ROW_LENGTH,Et.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Et.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,I.min.x),H.pixelStorei(H.UNPACK_SKIP_ROWS,I.min.y),H.pixelStorei(H.UNPACK_SKIP_IMAGES,I.min.z),Z.isDataTexture||Z.isData3DTexture?H.texSubImage3D(He,K,W.x,W.y,W.z,ye,Ae,Oe,ze,je,Et.data):Z.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),H.compressedTexSubImage3D(He,K,W.x,W.y,W.z,ye,Ae,Oe,ze,Et.data)):H.texSubImage3D(He,K,W.x,W.y,W.z,ye,Ae,Oe,ze,je,Et),H.pixelStorei(H.UNPACK_ROW_LENGTH,We),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Ft),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Cn),H.pixelStorei(H.UNPACK_SKIP_ROWS,tn),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Ci),K===0&&Q.generateMipmaps&&H.generateMipmap(He),Te.unbindTexture()},this.initTexture=function(I){I.isCubeTexture?D.setTextureCube(I,0):I.isData3DTexture?D.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?D.setTexture2DArray(I,0):D.setTexture2D(I,0),Te.unbindTexture()},this.resetState=function(){M=0,T=0,S=null,Te.reset(),Ve.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===oh?"display-p3":"srgb",t.unpackColorSpace=ut.workingColorSpace===Bl?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Rt?Cr:zm}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Cr?Rt:Qt}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class ZM extends ag{}ZM.prototype.isWebGL1Renderer=!0;class rl extends Ye{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class QM{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=_u,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=oi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Pr("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=oi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=oi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const gn=new C;class hh{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)gn.fromBufferAttribute(this,t),gn.applyMatrix4(e),this.setXYZ(t,gn.x,gn.y,gn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)gn.fromBufferAttribute(this,t),gn.applyNormalMatrix(e),this.setXYZ(t,gn.x,gn.y,gn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)gn.fromBufferAttribute(this,t),gn.transformDirection(e),this.setXYZ(t,gn.x,gn.y,gn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=ni(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ht(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ni(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ni(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ni(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ni(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),r=ht(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),r=ht(r,this.array),s=ht(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Tt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new hh(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Mf=new C,Tf=new _t,Sf=new _t,JM=new C,wf=new Fe,wa=new C,Ec=new hi,Ef=new Fe,Ac=new Ys;class e1 extends ${constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=rd,this.bindMatrix=new Fe,this.bindMatrixInverse=new Fe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new zt),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,wa),this.boundingBox.expandByPoint(wa)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new hi),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,wa),this.boundingSphere.expandByPoint(wa)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ec.copy(this.boundingSphere),Ec.applyMatrix4(r),e.ray.intersectsSphere(Ec)!==!1&&(Ef.copy(r).invert(),Ac.copy(e.ray).applyMatrix4(Ef),!(this.boundingBox!==null&&Ac.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Ac)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new _t,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===rd?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===l_?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,r=this.geometry;Tf.fromBufferAttribute(r.attributes.skinIndex,e),Sf.fromBufferAttribute(r.attributes.skinWeight,e),Mf.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=Sf.getComponent(s);if(o!==0){const a=Tf.getComponent(s);wf.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(JM.copy(Mf).applyMatrix4(wf),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class lg extends Ye{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Hn extends jt{constructor(e=null,t=1,n=1,r,s,o,a,l,c=Qe,u=Qe,h,d){super(null,o,a,l,c,u,r,s,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Af=new Fe,t1=new Fe;class dh{constructor(e=[],t=[]){this.uuid=oi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,r=this.bones.length;n<r;n++)this.boneInverses.push(new Fe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Fe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:t1;Af.multiplyMatrices(a,t[s]),Af.toArray(n,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new dh(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Hn(t,e,e,vt,Je);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){const s=e.bones[n];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new lg),this.bones.push(o),this.boneInverses.push(new Fe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let r=0,s=t.length;r<s;r++){const o=t[r];e.bones.push(o.uuid);const a=n[r];e.boneInverses.push(a.toArray())}return e}}class bu extends Tt{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const is=new Fe,Rf=new Fe,Ea=[],Cf=new zt,n1=new Fe,oo=new $,ao=new hi;class i1 extends ${constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new bu(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,n1)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new zt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,is),Cf.copy(e.boundingBox).applyMatrix4(is),this.boundingBox.union(Cf)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new hi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,is),ao.copy(e.boundingSphere).applyMatrix4(is),this.boundingSphere.union(ao)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,r=this.count;if(oo.geometry=this.geometry,oo.material=this.material,oo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ao.copy(this.boundingSphere),ao.applyMatrix4(n),e.ray.intersectsSphere(ao)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,is),Rf.multiplyMatrices(n,is),oo.matrixWorld=Rf,oo.raycast(e,Ea);for(let o=0,a=Ea.length;o<a;o++){const l=Ea[o];l.instanceId=s,l.object=this,t.push(l)}Ea.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new bu(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class fh extends Ti{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Re(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Pf=new C,Lf=new C,If=new Fe,Rc=new Ys,Aa=new hi;class ei extends Ye{constructor(e=new sn,t=new fh){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)Pf.fromBufferAttribute(t,r-1),Lf.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Pf.distanceTo(Lf);e.setAttribute("lineDistance",new yt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Aa.copy(n.boundingSphere),Aa.applyMatrix4(r),Aa.radius+=s,e.ray.intersectsSphere(Aa)===!1)return;If.copy(r).invert(),Rc.copy(e.ray).applyMatrix4(If);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new C,u=new C,h=new C,d=new C,f=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){const p=Math.max(0,o.start),v=Math.min(g.count,o.start+o.count);for(let _=p,y=v-1;_<y;_+=f){const M=g.getX(_),T=g.getX(_+1);if(c.fromBufferAttribute(m,M),u.fromBufferAttribute(m,T),Rc.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const E=e.ray.origin.distanceTo(d);E<e.near||E>e.far||t.push({distance:E,point:h.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,o.start),v=Math.min(m.count,o.start+o.count);for(let _=p,y=v-1;_<y;_+=f){if(c.fromBufferAttribute(m,_),u.fromBufferAttribute(m,_+1),Rc.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const T=e.ray.origin.distanceTo(d);T<e.near||T>e.far||t.push({distance:T,point:h.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const Df=new C,Uf=new C;class r1 extends ei{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)Df.fromBufferAttribute(t,r),Uf.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Df.distanceTo(Uf);e.setAttribute("lineDistance",new yt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class s1 extends ei{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class cg extends Ti{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Re(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Nf=new Fe,Mu=new Ys,Ra=new hi,Ca=new C;class o1 extends Ye{constructor(e=new sn,t=new cg){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ra.copy(n.boundingSphere),Ra.applyMatrix4(r),Ra.radius+=s,e.ray.intersectsSphere(Ra)===!1)return;Nf.copy(r).invert(),Mu.copy(e.ray).applyMatrix4(Nf);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=d,x=f;g<x;g++){const m=c.getX(g);Ca.fromBufferAttribute(h,m),Ff(Ca,m,l,r,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let g=d,x=f;g<x;g++)Ca.fromBufferAttribute(h,g),Ff(Ca,g,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Ff(i,e,t,n,r,s,o){const a=Mu.distanceSqToPoint(i);if(a<t){const l=new C;Mu.closestPointToPoint(i,l),l.applyMatrix4(n);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class J2 extends jt{constructor(e,t,n,r,s,o,a,l,c,u,h,d){super(null,o,a,l,c,u,r,s,h,d),this.isCompressedTexture=!0,this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}class eR extends jt{constructor(e,t,n,r,s,o,a,l,c){super(e,t,n,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Kt extends sn{constructor(e=1,t=1,n=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],h=[],d=[],f=[];let g=0;const x=[],m=n/2;let p=0;v(),o===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(u),this.setAttribute("position",new yt(h,3)),this.setAttribute("normal",new yt(d,3)),this.setAttribute("uv",new yt(f,2));function v(){const y=new C,M=new C;let T=0;const S=(t-e)/n;for(let E=0;E<=s;E++){const L=[],b=E/s,w=b*(t-e)+e;for(let U=0;U<=r;U++){const k=U/r,R=k*l+a,F=Math.sin(R),B=Math.cos(R);M.x=w*F,M.y=-b*n+m,M.z=w*B,h.push(M.x,M.y,M.z),y.set(F,S,B).normalize(),d.push(y.x,y.y,y.z),f.push(k,1-b),L.push(g++)}x.push(L)}for(let E=0;E<r;E++)for(let L=0;L<s;L++){const b=x[L][E],w=x[L+1][E],U=x[L+1][E+1],k=x[L][E+1];u.push(b,w,k),u.push(w,U,k),T+=6}c.addGroup(p,T,0),p+=T}function _(y){const M=g,T=new Me,S=new C;let E=0;const L=y===!0?e:t,b=y===!0?1:-1;for(let U=1;U<=r;U++)h.push(0,m*b,0),d.push(0,b,0),f.push(.5,.5),g++;const w=g;for(let U=0;U<=r;U++){const R=U/r*l+a,F=Math.cos(R),B=Math.sin(R);S.x=L*B,S.y=m*b,S.z=L*F,h.push(S.x,S.y,S.z),d.push(0,b,0),T.x=F*.5+.5,T.y=B*.5*b+.5,f.push(T.x,T.y),g++}for(let U=0;U<r;U++){const k=M+U,R=w+U;y===!0?u.push(R,R+1,k):u.push(R+1,R,k),E+=3}c.addGroup(p,E,y===!0?1:2),p+=E}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class zl extends Kt{constructor(e=1,t=1,n=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,n,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new zl(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ph extends sn{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};const s=[],o=[];a(r),c(n),u(),this.setAttribute("position",new yt(s,3)),this.setAttribute("normal",new yt(s.slice(),3)),this.setAttribute("uv",new yt(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(v){const _=new C,y=new C,M=new C;for(let T=0;T<t.length;T+=3)f(t[T+0],_),f(t[T+1],y),f(t[T+2],M),l(_,y,M,v)}function l(v,_,y,M){const T=M+1,S=[];for(let E=0;E<=T;E++){S[E]=[];const L=v.clone().lerp(y,E/T),b=_.clone().lerp(y,E/T),w=T-E;for(let U=0;U<=w;U++)U===0&&E===T?S[E][U]=L:S[E][U]=L.clone().lerp(b,U/w)}for(let E=0;E<T;E++)for(let L=0;L<2*(T-E)-1;L++){const b=Math.floor(L/2);L%2===0?(d(S[E][b+1]),d(S[E+1][b]),d(S[E][b])):(d(S[E][b+1]),d(S[E+1][b+1]),d(S[E+1][b]))}}function c(v){const _=new C;for(let y=0;y<s.length;y+=3)_.x=s[y+0],_.y=s[y+1],_.z=s[y+2],_.normalize().multiplyScalar(v),s[y+0]=_.x,s[y+1]=_.y,s[y+2]=_.z}function u(){const v=new C;for(let _=0;_<s.length;_+=3){v.x=s[_+0],v.y=s[_+1],v.z=s[_+2];const y=m(v)/2/Math.PI+.5,M=p(v)/Math.PI+.5;o.push(y,1-M)}g(),h()}function h(){for(let v=0;v<o.length;v+=6){const _=o[v+0],y=o[v+2],M=o[v+4],T=Math.max(_,y,M),S=Math.min(_,y,M);T>.9&&S<.1&&(_<.2&&(o[v+0]+=1),y<.2&&(o[v+2]+=1),M<.2&&(o[v+4]+=1))}}function d(v){s.push(v.x,v.y,v.z)}function f(v,_){const y=v*3;_.x=e[y+0],_.y=e[y+1],_.z=e[y+2]}function g(){const v=new C,_=new C,y=new C,M=new C,T=new Me,S=new Me,E=new Me;for(let L=0,b=0;L<s.length;L+=9,b+=6){v.set(s[L+0],s[L+1],s[L+2]),_.set(s[L+3],s[L+4],s[L+5]),y.set(s[L+6],s[L+7],s[L+8]),T.set(o[b+0],o[b+1]),S.set(o[b+2],o[b+3]),E.set(o[b+4],o[b+5]),M.copy(v).add(_).add(y).divideScalar(3);const w=m(M);x(T,b+0,v,w),x(S,b+2,_,w),x(E,b+4,y,w)}}function x(v,_,y,M){M<0&&v.x===1&&(o[_]=v.x-1),y.x===0&&y.z===0&&(o[_]=M/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ph(e.vertices,e.indices,e.radius,e.details)}}class Rs extends ph{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,r,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Rs(e.radius,e.detail)}}class Ei extends sn{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new C,d=new C,f=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){const v=[],_=p/n;let y=0;p===0&&o===0?y=.5/t:p===n&&l===Math.PI&&(y=-.5/t);for(let M=0;M<=t;M++){const T=M/t;h.x=-e*Math.cos(r+T*s)*Math.sin(o+_*a),h.y=e*Math.cos(o+_*a),h.z=e*Math.sin(r+T*s)*Math.sin(o+_*a),g.push(h.x,h.y,h.z),d.copy(h).normalize(),x.push(d.x,d.y,d.z),m.push(T+y,1-_),v.push(c++)}u.push(v)}for(let p=0;p<n;p++)for(let v=0;v<t;v++){const _=u[p][v+1],y=u[p][v],M=u[p+1][v],T=u[p+1][v+1];(p!==0||o>0)&&f.push(_,y,T),(p!==n-1||l<Math.PI)&&f.push(y,M,T)}this.setIndex(f),this.setAttribute("position",new yt(g,3)),this.setAttribute("normal",new yt(x,3)),this.setAttribute("uv",new yt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ei(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ir extends sn{constructor(e=1,t=.4,n=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);const o=[],a=[],l=[],c=[],u=new C,h=new C,d=new C;for(let f=0;f<=n;f++)for(let g=0;g<=r;g++){const x=g/r*s,m=f/n*Math.PI*2;h.x=(e+t*Math.cos(m))*Math.cos(x),h.y=(e+t*Math.cos(m))*Math.sin(x),h.z=t*Math.sin(m),a.push(h.x,h.y,h.z),u.x=e*Math.cos(x),u.y=e*Math.sin(x),d.subVectors(h,u).normalize(),l.push(d.x,d.y,d.z),c.push(g/r),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=r;g++){const x=(r+1)*f+g-1,m=(r+1)*(f-1)+g-1,p=(r+1)*(f-1)+g,v=(r+1)*f+g;o.push(x,m,v),o.push(m,p,v)}this.setIndex(o),this.setAttribute("position",new yt(a,3)),this.setAttribute("normal",new yt(l,3)),this.setAttribute("uv",new yt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ir(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Ko extends sn{constructor(e=1,t=.4,n=64,r=8,s=2,o=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:r,p:s,q:o},n=Math.floor(n),r=Math.floor(r);const a=[],l=[],c=[],u=[],h=new C,d=new C,f=new C,g=new C,x=new C,m=new C,p=new C;for(let _=0;_<=n;++_){const y=_/n*s*Math.PI*2;v(y,s,o,e,f),v(y+.01,s,o,e,g),m.subVectors(g,f),p.addVectors(g,f),x.crossVectors(m,p),p.crossVectors(x,m),x.normalize(),p.normalize();for(let M=0;M<=r;++M){const T=M/r*Math.PI*2,S=-t*Math.cos(T),E=t*Math.sin(T);h.x=f.x+(S*p.x+E*x.x),h.y=f.y+(S*p.y+E*x.y),h.z=f.z+(S*p.z+E*x.z),l.push(h.x,h.y,h.z),d.subVectors(h,f).normalize(),c.push(d.x,d.y,d.z),u.push(_/n),u.push(M/r)}}for(let _=1;_<=n;_++)for(let y=1;y<=r;y++){const M=(r+1)*(_-1)+(y-1),T=(r+1)*_+(y-1),S=(r+1)*_+y,E=(r+1)*(_-1)+y;a.push(M,T,E),a.push(T,S,E)}this.setIndex(a),this.setAttribute("position",new yt(l,3)),this.setAttribute("normal",new yt(c,3)),this.setAttribute("uv",new yt(u,2));function v(_,y,M,T,S){const E=Math.cos(_),L=Math.sin(_),b=M/y*_,w=Math.cos(b);S.x=T*(2+w)*.5*E,S.y=T*(2+w)*L*.5,S.z=T*Math.sin(b)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ko(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class Ut extends Ti{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hm,this.normalScale=new Me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ai extends Ut{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Me(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Zt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Re(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Re(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Re(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function Pa(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function a1(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function l1(i){function e(r,s){return i[r]-i[s]}const t=i.length,n=new Array(t);for(let r=0;r!==t;++r)n[r]=r;return n.sort(e),n}function Of(i,e,t){const n=i.length,r=new i.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let l=0;l!==e;++l)r[o++]=i[a+l]}return r}function ug(i,e,t,n){let r=1,s=i[0];for(;s!==void 0&&s[n]===void 0;)s=i[r++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=i[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=i[r++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=i[r++];while(s!==void 0)}class Zo{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,r=t[n],s=t[n-1];e:{t:{let o;n:{i:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=t[++n],e<r)break t}o=t.length;break n}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=s,s=t[--n-1],e>=s)break t}o=n,n=0;break n}break e}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class c1 extends Zo{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Pd,endingEnd:Pd}}intervalChanged_(e,t,n){const r=this.parameterPositions;let s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Ld:s=e,a=2*t-n;break;case Id:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ld:o=e,l=2*n-t;break;case Id:o=1,l=n+r[1]-r[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(r-t),x=g*g,m=x*g,p=-d*m+2*d*x-d*g,v=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*g+1,_=(-1-f)*m+(1.5+f)*x+.5*g,y=f*m-f*x;for(let M=0;M!==a;++M)s[M]=p*o[u+M]+v*o[c+M]+_*o[l+M]+y*o[h+M];return s}}class u1 extends Zo{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(r-t),h=1-u;for(let d=0;d!==a;++d)s[d]=o[c+d]*h+o[l+d]*u;return s}}class h1 extends Zo{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class Ri{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Pa(t,this.TimeBufferType),this.values=Pa(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Pa(e.times,Array),values:Pa(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new h1(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new u1(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new c1(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Vo:t=this.InterpolantFactoryMethodDiscrete;break;case zs:t=this.InterpolantFactoryMethodLinear;break;case nc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Vo;case this.InterpolantFactoryMethodLinear:return zs;case this.InterpolantFactoryMethodSmooth:return nc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){const n=this.times,r=n.length;let s=0,o=r-1;for(;s!==r&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&a1(r))for(let a=0,l=r.length;a!==l;++a){const c=r[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===nc,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(r)l=!0;else{const h=a*n,d=h-n,f=h+n;for(let g=0;g!==n;++g){const x=t[h+g];if(x!==t[d+g]||x!==t[f+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}Ri.prototype.TimeBufferType=Float32Array;Ri.prototype.ValueBufferType=Float32Array;Ri.prototype.DefaultInterpolation=zs;class js extends Ri{}js.prototype.ValueTypeName="bool";js.prototype.ValueBufferType=Array;js.prototype.DefaultInterpolation=Vo;js.prototype.InterpolantFactoryMethodLinear=void 0;js.prototype.InterpolantFactoryMethodSmooth=void 0;class hg extends Ri{}hg.prototype.ValueTypeName="color";class Vs extends Ri{}Vs.prototype.ValueTypeName="number";class d1 extends Zo{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(r-t);let c=e*a;for(let u=c+a;c!==u;c+=4)qt.slerpFlat(s,0,o,c-a,o,c,l);return s}}class Ir extends Ri{InterpolantFactoryMethodLinear(e){return new d1(this.times,this.values,this.getValueSize(),e)}}Ir.prototype.ValueTypeName="quaternion";Ir.prototype.DefaultInterpolation=zs;Ir.prototype.InterpolantFactoryMethodSmooth=void 0;class Ks extends Ri{}Ks.prototype.ValueTypeName="string";Ks.prototype.ValueBufferType=Array;Ks.prototype.DefaultInterpolation=Vo;Ks.prototype.InterpolantFactoryMethodLinear=void 0;Ks.prototype.InterpolantFactoryMethodSmooth=void 0;class Ws extends Ri{}Ws.prototype.ValueTypeName="vector";class f1{constructor(e,t=-1,n,r=f_){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=oi(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,r=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(m1(n[o]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=n.length;s!==o;++s)t.push(Ri.toJSON(n[s]));return r}static CreateFromMorphTargetSequence(e,t,n,r){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const u=l1(l);l=Of(l,1,u),c=Of(c,1,u),!r&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new Vs(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const r=e;n=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<n.length;r++)if(n[r].name===t)return n[r];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const r={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(s);if(u&&u.length>1){const h=u[1];let d=r[h];d||(r[h]=d=[]),d.push(c)}}const o=[];for(const a in r)o.push(this.CreateFromMorphTargetSequence(a,r[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,d,f,g,x){if(f.length!==0){const m=[],p=[];ug(f,m,p,g),m.length!==0&&x.push(new h(d,m,p))}},r=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const d=c[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let x=0;x<d[g].morphTargets.length;x++)f[d[g].morphTargets[x]]=-1;for(const x in f){const m=[],p=[];for(let v=0;v!==d[g].morphTargets.length;++v){const _=d[g];m.push(_.time),p.push(_.morphTarget===x?1:0)}r.push(new Vs(".morphTargetInfluence["+x+"]",m,p))}l=f.length*o}else{const f=".bones["+t[h].name+"]";n(Ws,f+".position",d,"pos",r),n(Ir,f+".quaternion",d,"rot",r),n(Ws,f+".scale",d,"scl",r)}}return r.length===0?null:new this(s,l,r,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,r=e.length;n!==r;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function p1(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Vs;case"vector":case"vector2":case"vector3":case"vector4":return Ws;case"color":return hg;case"quaternion":return Ir;case"bool":case"boolean":return js;case"string":return Ks}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function m1(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=p1(i.type);if(i.times===void 0){const t=[],n=[];ug(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const rr={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class g1{constructor(e,t,n){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const f=c[h],g=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null}}}const _1=new g1;class Fr{constructor(e){this.manager=e!==void 0?e:_1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Fr.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ni={};class x1 extends Error{constructor(e,t){super(e),this.response=t}}class mh extends Fr{constructor(e){super(e)}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=rr.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Ni[e]!==void 0){Ni[e].push({onLoad:t,onProgress:n,onError:r});return}Ni[e]=[],Ni[e].push({onLoad:t,onProgress:n,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream=="undefined"||c.body===void 0||c.body.getReader===void 0)return c;const u=Ni[e],h=c.body.getReader(),d=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),f=d?parseInt(d):0,g=f!==0;let x=0;const m=new ReadableStream({start(p){v();function v(){h.read().then(({done:_,value:y})=>{if(_)p.close();else{x+=y.byteLength;const M=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:f});for(let T=0,S=u.length;T<S;T++){const E=u[T];E.onProgress&&E.onProgress(M)}p.enqueue(y),v()}})}}});return new Response(m)}else throw new x1(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{rr.add(e,c);const u=Ni[e];delete Ni[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onLoad&&f.onLoad(c)}}).catch(c=>{const u=Ni[e];if(u===void 0)throw this.manager.itemError(e),c;delete Ni[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class v1 extends Fr{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=rr.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=Wo("img");function l(){u(),rr.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(h){u(),r&&r(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class y1 extends Fr{constructor(e){super(e)}load(e,t,n,r){const s=this,o=new Hn,a=new mh(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(s.withCredentials),a.load(e,function(l){let c;try{c=s.parse(l)}catch(u){if(r!==void 0)r(u);else{console.error(u);return}}c.image!==void 0?o.image=c.image:c.data!==void 0&&(o.image.width=c.width,o.image.height=c.height,o.image.data=c.data),o.wrapS=c.wrapS!==void 0?c.wrapS:Yt,o.wrapT=c.wrapT!==void 0?c.wrapT:Yt,o.magFilter=c.magFilter!==void 0?c.magFilter:it,o.minFilter=c.minFilter!==void 0?c.minFilter:it,o.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0?o.colorSpace=c.colorSpace:c.encoding!==void 0&&(o.encoding=c.encoding),c.flipY!==void 0&&(o.flipY=c.flipY),c.format!==void 0&&(o.format=c.format),c.type!==void 0&&(o.type=c.type),c.mipmaps!==void 0&&(o.mipmaps=c.mipmaps,o.minFilter=yi),c.mipmapCount===1&&(o.minFilter=it),c.generateMipmaps!==void 0&&(o.generateMipmaps=c.generateMipmaps),o.needsUpdate=!0,t&&t(o,c)},n,r),o}}class dg extends Fr{constructor(e){super(e)}load(e,t,n,r){const s=new jt,o=new v1(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class Hl extends Ye{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Re(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Cc=new Fe,Bf=new C,kf=new C;class gh{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Me(512,512),this.map=null,this.mapPass=null,this.matrix=new Fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ch,this._frameExtents=new Me(1,1),this._viewportCount=1,this._viewports=[new _t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Bf.setFromMatrixPosition(e.matrixWorld),t.position.copy(Bf),kf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(kf),t.updateMatrixWorld(),Cc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Cc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Cc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class b1 extends gh{constructor(){super(new xn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Hs*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class _h extends Hl{constructor(e,t,n=0,r=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ye.DEFAULT_UP),this.updateMatrix(),this.target=new Ye,this.distance=n,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new b1}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const zf=new Fe,lo=new C,Pc=new C;class M1 extends gh{constructor(){super(new xn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Me(4,2),this._viewportCount=6,this._viewports=[new _t(2,1,1,1),new _t(0,1,1,1),new _t(3,1,1,1),new _t(1,1,1,1),new _t(3,0,1,1),new _t(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),lo.setFromMatrixPosition(e.matrixWorld),n.position.copy(lo),Pc.copy(n.position),Pc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Pc),n.updateMatrixWorld(),r.makeTranslation(-lo.x,-lo.y,-lo.z),zf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zf)}}class Or extends Hl{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new M1}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class T1 extends gh{constructor(){super(new di(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Qo extends Hl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ye.DEFAULT_UP),this.updateMatrix(),this.target=new Ye,this.shadow=new T1}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class fg extends Hl{constructor(e,t,n=10,r=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=r}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}class Oo{static decodeText(e){if(typeof TextDecoder!="undefined")return new TextDecoder().decode(e);let t="";for(let n=0,r=e.length;n<r;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class S1 extends Fr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap=="undefined"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=rr.get(e);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),s.manager.itemEnd(e)}).catch(c=>{r&&r(c)});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return rr.add(e,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){r&&r(c),rr.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});rr.add(e,l),s.manager.itemStart(e)}}const xh="\\[\\]\\.:\\/",w1=new RegExp("["+xh+"]","g"),vh="[^"+xh+"]",E1="[^"+xh.replace("\\.","")+"]",A1=/((?:WC+[\/:])*)/.source.replace("WC",vh),R1=/(WCOD+)?/.source.replace("WCOD",E1),C1=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",vh),P1=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",vh),L1=new RegExp("^"+A1+R1+C1+P1+"$"),I1=["material","materials","bones","map"];class D1{constructor(e,t,n){const r=n||dt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class dt{constructor(e,t,n){this.path=t,this.parsedPath=n||dt.parseTrackName(t),this.node=dt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new dt.Composite(e,t,n):new dt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(w1,"")}static parseTrackName(e){const t=L1.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=n.nodeName.substring(r+1);I1.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=dt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[r];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}dt.Composite=D1;dt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};dt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};dt.prototype.GetterByBindingType=[dt.prototype._getValue_direct,dt.prototype._getValue_array,dt.prototype._getValue_arrayElement,dt.prototype._getValue_toArray];dt.prototype.SetterByBindingTypeAndVersioning=[[dt.prototype._setValue_direct,dt.prototype._setValue_direct_setNeedsUpdate,dt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_array,dt.prototype._setValue_array_setNeedsUpdate,dt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_arrayElement,dt.prototype._setValue_arrayElement_setNeedsUpdate,dt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_fromArray,dt.prototype._setValue_fromArray_setNeedsUpdate,dt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Gl{constructor(e){this.value=e}clone(){return new Gl(this.value.clone===void 0?this.value:this.value.clone())}}class pg{constructor(e,t,n=0,r=1/0){this.ray=new Ys(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new lh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Tu(e,this,n,t),n.sort(Hf),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)Tu(e[r],this,n,t);return n.sort(Hf),n}}function Hf(i,e){return i.distance-e.distance}function Tu(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){const r=i.children;for(let s=0,o=r.length;s<o;s++)Tu(r[s],e,t,!0)}}class Gf{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Zt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Vf=new C,La=new C;class Gi{constructor(e=new C,t=new C){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Vf.subVectors(e,this.start),La.subVectors(this.end,this.start);const n=La.dot(La);let s=La.dot(Vf)/n;return t&&(s=Zt(s,0,1)),s}closestPointToPoint(e,t,n){const r=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(r).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:rh}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=rh);var Xo,Ot,Lc,Wf,Sl=0,mg=[],Wt=ft,Xf=Wt.__b,qf=Wt.__r,Yf=Wt.diffed,$f=Wt.__c,jf=Wt.unmount,Kf=Wt.__;function yh(i,e){Wt.__h&&Wt.__h(Ot,i,Sl||e),Sl=0;var t=Ot.__H||(Ot.__H={__:[],__h:[]});return i>=t.__.length&&t.__.push({}),t.__[i]}function bh(i){return Sl=1,U1(_g,i)}function U1(i,e,t){var n=yh(Xo++,2);if(n.t=i,!n.__c&&(n.__=[t?t(e):_g(void 0,e),function(a){var l=n.__N?n.__N[0]:n.__[0],c=n.t(l,a);l!==c&&(n.__N=[c,n.__[1]],n.__c.setState({}))}],n.__c=Ot,!Ot.__f)){var r=function(a,l,c){if(!n.__c.__H)return!0;var u=n.__c.__H.__.filter(function(d){return d.__c});if(u.every(function(d){return!d.__N}))return!s||s.call(this,a,l,c);var h=n.__c.props!==a;return u.some(function(d){if(d.__N){var f=d.__[0];d.__=d.__N,d.__N=void 0,f!==d.__[0]&&(h=!0)}}),s&&s.call(this,a,l,c)||h};Ot.__f=!0;var s=Ot.shouldComponentUpdate,o=Ot.componentWillUpdate;Ot.componentWillUpdate=function(a,l,c){if(this.__e){var u=s;s=void 0,r(a,l,c),s=u}o&&o.call(this,a,l,c)},Ot.shouldComponentUpdate=r}return n.__N||n.__}function Zs(i,e){var t=yh(Xo++,3);!Wt.__s&&gg(t.__H,e)&&(t.__=i,t.u=e,Ot.__H.__h.push(t))}function Ds(i){return Sl=5,Mh(function(){return{current:i}},[])}function Mh(i,e){var t=yh(Xo++,7);return gg(t.__H,e)&&(t.__=i(),t.__H=e,t.__h=i),t.__}function N1(){for(var i;i=mg.shift();){var e=i.__H;if(i.__P&&e)try{e.__h.some(sl),e.__h.some(Su),e.__h=[]}catch(t){e.__h=[],Wt.__e(t,i.__v)}}}Wt.__b=function(i){Ot=null,Xf&&Xf(i)},Wt.__=function(i,e){i&&e.__k&&e.__k.__m&&(i.__m=e.__k.__m),Kf&&Kf(i,e)},Wt.__r=function(i){qf&&qf(i),Xo=0;var e=(Ot=i.__c).__H;e&&(Lc===Ot?(e.__h=[],Ot.__h=[],e.__.some(function(t){t.__N&&(t.__=t.__N),t.u=t.__N=void 0})):(e.__h.some(sl),e.__h.some(Su),e.__h=[],Xo=0)),Lc=Ot},Wt.diffed=function(i){Yf&&Yf(i);var e=i.__c;e&&e.__H&&(e.__H.__h.length&&(mg.push(e)!==1&&Wf===Wt.requestAnimationFrame||((Wf=Wt.requestAnimationFrame)||F1)(N1)),e.__H.__.some(function(t){t.u&&(t.__H=t.u),t.u=void 0})),Lc=Ot=null},Wt.__c=function(i,e){e.some(function(t){try{t.__h.some(sl),t.__h=t.__h.filter(function(n){return!n.__||Su(n)})}catch(n){e.some(function(r){r.__h&&(r.__h=[])}),e=[],Wt.__e(n,t.__v)}}),$f&&$f(i,e)},Wt.unmount=function(i){jf&&jf(i);var e,t=i.__c;t&&t.__H&&(t.__H.__.some(function(n){try{sl(n)}catch(r){e=r}}),t.__H=void 0,e&&Wt.__e(e,t.__v))};var Zf=typeof requestAnimationFrame=="function";function F1(i){var e,t=function(){clearTimeout(n),Zf&&cancelAnimationFrame(e),setTimeout(i)},n=setTimeout(t,35);Zf&&(e=requestAnimationFrame(t))}function sl(i){var e=Ot,t=i.__c;typeof t=="function"&&(i.__c=void 0,t()),Ot=e}function Su(i){var e=Ot;i.__c=i.__(),Ot=e}function gg(i,e){return!i||i.length!==e.length||e.some(function(t,n){return t!==i[n]})}function _g(i,e){return typeof e=="function"?e(i):e}var O1=Symbol.for("preact-signals");function Th(){if(Lr>1)Lr--;else{var i,e=!1;for(function(){var r=El;for(El=void 0;r!==void 0;)r.S.v===r.v&&(r.S.i=r.i),r=r.o}();Bo!==void 0;){var t=Bo;for(Bo=void 0,wl++;t!==void 0;){var n=t.u;if(t.u=void 0,t.f&=-3,!(8&t.f)&&vg(t))try{t.c()}catch(r){e||(i=r,e=!0)}t=n}}if(wl=0,Lr--,e)throw i}}var gt=void 0;function Sh(i){var e=gt;gt=void 0;try{return i()}finally{gt=e}}var Bo=void 0,Lr=0,wl=0,Qf=0,El=void 0,Al=0;function xg(i){if(gt!==void 0){var e=i.n;if(e===void 0||e.t!==gt)return e={i:0,S:i,p:gt.s,n:void 0,t:gt,e:void 0,x:void 0,r:e},gt.s!==void 0&&(gt.s.n=e),gt.s=e,i.n=e,32&gt.f&&i.S(e),e;if(e.i===-1)return e.i=0,e.n!==void 0&&(e.n.p=e.p,e.p!==void 0&&(e.p.n=e.n),e.p=gt.s,e.n=void 0,gt.s.n=e,gt.s=e),e}}function ln(i,e){this.v=i,this.i=0,this.n=void 0,this.t=void 0,this.l=0,this.W=e==null?void 0:e.watched,this.Z=e==null?void 0:e.unwatched,this.name=e==null?void 0:e.name}ln.prototype.brand=O1;ln.prototype.h=function(){return!0};ln.prototype.S=function(i){var e=this,t=this.t;t!==i&&i.e===void 0&&(i.x=t,this.t=i,t!==void 0?t.e=i:Sh(function(){var n;(n=e.W)==null||n.call(e)}))};ln.prototype.U=function(i){var e=this;if(this.t!==void 0){var t=i.e,n=i.x;t!==void 0&&(t.x=n,i.e=void 0),n!==void 0&&(n.e=t,i.x=void 0),i===this.t&&(this.t=n,n===void 0&&Sh(function(){var r;(r=e.Z)==null||r.call(e)}))}};ln.prototype.subscribe=function(i){var e=this;return qo(function(){var t=e.value,n=gt;gt=void 0;try{i(t)}finally{gt=n}},{name:"sub"})};ln.prototype.valueOf=function(){return this.value};ln.prototype.toString=function(){return this.value+""};ln.prototype.toJSON=function(){return this.value};ln.prototype.peek=function(){var i=this;return Sh(function(){return i.value})};Object.defineProperty(ln.prototype,"value",{get:function(){var i=xg(this);return i!==void 0&&(i.i=this.i),this.v},set:function(i){if(i!==this.v){if(wl>100)throw new Error("Cycle detected");(function(t){Lr!==0&&wl===0&&t.l!==Qf&&(t.l=Qf,El={S:t,v:t.v,i:t.i,o:El})})(this),this.v=i,this.i++,Al++,Lr++;try{for(var e=this.t;e!==void 0;e=e.x)e.t.N()}finally{Th()}}}});function Ht(i,e){return new ln(i,e)}function vg(i){for(var e=i.s;e!==void 0;e=e.n)if(e.S.i!==e.i||!e.S.h()||e.S.i!==e.i)return!0;return!1}function yg(i){for(var e=i.s;e!==void 0;e=e.n){var t=e.S.n;if(t!==void 0&&(e.r=t),e.S.n=e,e.i=-1,e.n===void 0){i.s=e;break}}}function bg(i){for(var e=i.s,t=void 0;e!==void 0;){var n=e.p;e.i===-1?(e.S.U(e),n!==void 0&&(n.n=e.n),e.n!==void 0&&(e.n.p=n)):t=e,e.S.n=e.r,e.r!==void 0&&(e.r=void 0),e=n}i.s=t}function Br(i,e){ln.call(this,void 0),this.x=i,this.s=void 0,this.g=Al-1,this.f=4,this.W=e==null?void 0:e.watched,this.Z=e==null?void 0:e.unwatched,this.name=e==null?void 0:e.name}Br.prototype=new ln;Br.prototype.h=function(){if(this.f&=-3,1&this.f)return!1;if((36&this.f)==32||(this.f&=-5,this.g===Al))return!0;if(this.g=Al,this.f|=1,this.i>0&&!vg(this))return this.f&=-2,!0;var i=gt;try{yg(this),gt=this;var e=this.x();(16&this.f||this.v!==e||this.i===0)&&(this.v=e,this.f&=-17,this.i++)}catch(t){this.v=t,this.f|=16,this.i++}return gt=i,bg(this),this.f&=-2,!0};Br.prototype.S=function(i){if(this.t===void 0){this.f|=36;for(var e=this.s;e!==void 0;e=e.n)e.S.S(e)}ln.prototype.S.call(this,i)};Br.prototype.U=function(i){if(this.t!==void 0&&(ln.prototype.U.call(this,i),this.t===void 0)){this.f&=-33;for(var e=this.s;e!==void 0;e=e.n)e.S.U(e)}};Br.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var i=this.t;i!==void 0;i=i.x)i.t.N()}};Object.defineProperty(Br.prototype,"value",{get:function(){if(1&this.f)throw new Error("Cycle detected");var i=xg(this);if(this.h(),i!==void 0&&(i.i=this.i),16&this.f)throw this.v;return this.v}});function wh(i,e){return new Br(i,e)}function Mg(i){var e=i.m;if(i.m=void 0,typeof e=="function"){Lr++;var t=gt;gt=void 0;try{e()}catch(n){throw i.f&=-2,i.f|=8,Eh(i),n}finally{gt=t,Th()}}}function Eh(i){for(var e=i.s;e!==void 0;e=e.n)e.S.U(e);i.x=void 0,i.s=void 0,Mg(i)}function B1(i){if(gt!==this)throw new Error("Out-of-order effect");bg(this),gt=i,this.f&=-2,8&this.f&&Eh(this),Th()}function Qs(i,e){this.x=i,this.m=void 0,this.s=void 0,this.u=void 0,this.f=32,this.name=e==null?void 0:e.name}Qs.prototype.c=function(){var i=this.S();try{if(8&this.f||this.x===void 0)return;var e=this.x();typeof e=="function"&&(this.m=e)}finally{i()}};Qs.prototype.S=function(){if(1&this.f)throw new Error("Cycle detected");this.f|=1,this.f&=-9,Mg(this),yg(this),Lr++;var i=gt;return gt=this,B1.bind(this,i)};Qs.prototype.N=function(){2&this.f||(this.f|=2,this.u=Bo,Bo=this)};Qs.prototype.d=function(){this.f|=8,1&this.f||Eh(this)};Qs.prototype.dispose=function(){this.d()};function qo(i,e){var t=new Qs(i,e);try{t.c()}catch(r){throw t.d(),r}var n=t.d.bind(t);return n[Symbol.dispose]=n,n}var Ia;function Js(i,e){ft[i]=e.bind(null,ft[i]||function(){})}function Rl(i){if(Ia){var e=Ia;Ia=void 0,e()}Ia=i&&i.S()}function Tg(i){var e=this,t=i.data,n=z1(t);n.value=t;var r=Mh(function(){for(var s=e.__v;s=s.__;)if(s.__c){s.__c.__$f|=4;break}return e.__$u.c=function(){var o,a=e.__$u.S(),l=r.value;a(),vm(l)||((o=e.base)==null?void 0:o.nodeType)!==3?(e.__$f|=1,e.setState({})):e.base.data=l},wh(function(){var o=n.value.value;return o===0?0:o===!0?"":o||""})},[]);return r.value}Tg.displayName="_st";Object.defineProperties(ln.prototype,{constructor:{configurable:!0,value:void 0},type:{configurable:!0,value:Tg},props:{configurable:!0,get:function(){return{data:this}}},__b:{configurable:!0,value:1}});Js("__b",function(i,e){if(typeof e.type=="string"){var t,n=e.props;for(var r in n)if(r!=="children"){var s=n[r];s instanceof ln&&(t||(e.__np=t={}),t[r]=s,n[r]=s.peek())}}i(e)});Js("__r",function(i,e){i(e),Rl();var t,n=e.__c;n&&(n.__$f&=-2,(t=n.__$u)===void 0&&(n.__$u=t=function(r){var s;return qo(function(){s=this}),s.c=function(){n.__$f|=1,n.setState({})},s}())),Rl(t)});Js("__e",function(i,e,t,n){Rl(),i(e,t,n)});Js("diffed",function(i,e){Rl();var t;if(typeof e.type=="string"&&(t=e.__e)){var n=e.__np,r=e.props;if(n){var s=t.U;if(s)for(var o in s){var a=s[o];a!==void 0&&!(o in n)&&(a.d(),s[o]=void 0)}else t.U=s={};for(var l in n){var c=s[l],u=n[l];c===void 0?(c=k1(t,l,u,r),s[l]=c):c.o(u,r)}}}i(e)});function k1(i,e,t,n){var r=e in i&&i.ownerSVGElement===void 0,s=Ht(t);return{o:function(o,a){s.value=o,n=a},d:qo(function(){var o=s.value.value;n[e]!==o&&(n[e]=o,r?i[e]=o:o?i.setAttribute(e,o):i.removeAttribute(e))})}}Js("unmount",function(i,e){if(typeof e.type=="string"){var t=e.__e;if(t){var n=t.U;if(n){t.U=void 0;for(var r in n){var s=n[r];s&&s.d()}}}}else{var o=e.__c;if(o){var a=o.__$u;a&&(o.__$u=void 0,a.d())}}i(e)});Js("__h",function(i,e,t,n){(n<3||n===9)&&(e.__$f|=2),i(e,t,n)});Do.prototype.shouldComponentUpdate=function(i,e){if(this.__R)return!0;var t=this.__$u,n=t&&t.s!==void 0;for(var r in e)return!0;if(this.__f||typeof this.u=="boolean"&&this.u===!0){if(!(n||2&this.__$f||4&this.__$f)||1&this.__$f)return!0}else if(!(n||4&this.__$f)||3&this.__$f)return!0;for(var s in i)if(s!=="__source"&&i[s]!==this.props[s])return!0;for(var o in this.props)if(!(o in i))return!0;return!1};function z1(i){return Mh(function(){return Ht(i)},[])}class H1{constructor(){this.items=[]}register(e){const t=this.items.findIndex(n=>n.id===e.id);t>=0?this.items[t]=e:this.items.push(e),wu.value++}unregister(e){this.items=this.items.filter(t=>t.id!==e),wu.value++}all(){return this.items}}const Cs=new H1,wu=Ht(0);class G1{constructor(){this.items=new Map}register(e,t){var s;const r=((s=this.items.get(e))!=null?s:[]).filter(o=>o.id!==t.id);r.push(t),this.items.set(e,r),Eu.value++}items_for(e){var t;return(t=this.items.get(e))!=null?t:[]}unregister(e,t){const n=this.items.get(e);!n||(this.items.set(e,n.filter(r=>r.id!==t)),Eu.value++)}}const an=new G1,Eu=Ht(0);let Ah=null;function V1(i){Ah=i}function dr(){return Ah}function W1(){return Ah}class X1{constructor(){this.presets=[]}register(e){this.presets.find(t=>t.id===e.id)&&(this.presets=this.presets.filter(t=>t.id!==e.id)),this.presets.push(e)}list(){return this.presets}get(e){return this.presets.find(t=>t.id===e)}listByCategory(){var t;const e=new Map;for(const n of this.presets){const r=(t=e.get(n.category))!=null?t:[];r.push(n),e.set(n.category,r)}return e}}const ci=new X1;function q1(){const i=new Ut({color:11579568,roughness:.8,metalness:0});return i._originalMap=null,i}function rs(i,e){const t=new $(e,q1());return t.name=i,t}const Cl={primitives:[{id:"cube",label:"Cube",icon:"box",create:()=>rs("Cube",new _e(1,1,1))},{id:"sphere",label:"Sphere",icon:"sphere",create:()=>rs("Sphere",new Ei(.5,32,24))},{id:"plane",label:"Plane",icon:"plane",create:()=>{const i=rs("Plane",new Rn(1,1));return i.rotation.x=-Math.PI/2,i}},{id:"cylinder",label:"Cylinder",icon:"cylinder",create:()=>rs("Cylinder",new Kt(.5,.5,1,32))},{id:"cone",label:"Cone",icon:"cone",create:()=>rs("Cone",new zl(.5,1,32))},{id:"torus",label:"Torus",icon:"torus",create:()=>rs("Torus",new ir(.5,.18,16,48))}],lights:[{id:"point",label:"Point",icon:"lightbulb",enabled:!0,create:()=>{const i=new Or(16777215,2,0,2);return i.name="Point Light",i}},{id:"spot",label:"Spot",icon:"spot",enabled:!1,create:null},{id:"sun",label:"Sun",icon:"sun",enabled:!1,create:null},{id:"area",label:"Area",icon:"area",enabled:!1,create:null}]};function Y1(i){if(i.kind==="primitive"){const e=Cl.primitives.find(t=>t.id===i.id);return e?e.create():null}if(i.kind==="light"){const e=Cl.lights.find(t=>t.id===i.id);return e&&e.enabled&&e.create?e.create():null}return null}const zn=Ht(null),Xs=Ht([]),ol=Ht("translate"),Jo=Ht(0),Vl=Ht(0),Da=Ht("cornell.advanced"),ct=Ht({outlinerW:280,inspectorW:320,logOpen:!1}),Sg=Ht([]),Jf=Ht("object"),ur=Ht("idle"),Pl=Ht({pct:0,samples:0,atlas:0,total:0,elapsedMs:0}),ea=Ht(!1),lr=Ht("combined"),Au=Ht(!1);wh(()=>ur.value==="baking");const Xt=Ht({skyIntensity:1,lightScale:.15,aperture:0,focusDist:100}),ws=Ht(null);function Ne(i){var e;return P("div",{class:"flex items-center gap-2 px-2 h-6 hover:bg-bg-2",children:[P("label",{class:"text-[11px] text-text-1 w-28 flex-shrink-0 truncate",title:(e=i.hint)!=null?e:i.label,children:i.label}),P("div",{class:"flex-1 flex items-center gap-1",children:i.children})]})}function Dt(i){return P("div",{class:"mb-1",children:[P("div",{class:"px-2 py-1 text-[10px] uppercase tracking-wider text-text-2 font-semibold bg-bg-2/40",children:i.title}),i.children]})}function $1(i){return P("input",{type:"text",class:"flex-1 px-1.5 py-0.5 text-[12px] bg-bg-2 border border-border rounded text-text-0 focus:border-accent focus:outline-none",value:i.value,placeholder:i.placeholder,onInput:e=>i.onChange(e.target.value)})}function ii(i){var e;return P("input",{type:"number",class:"flex-1 w-0 min-w-0 px-1.5 py-0.5 text-[12px] bg-bg-2 border border-border rounded text-text-0 focus:border-accent focus:outline-none font-mono",value:Number.isFinite(i.value)?i.value:0,step:(e=i.step)!=null?e:.1,min:i.min,max:i.max,onInput:t=>{const n=parseFloat(t.target.value);Number.isNaN(n)||i.onChange(n)}})}function Bt(i){var e;return P(Ur,{children:[P("input",{type:"range",class:"flex-1 accent-accent",value:i.value,min:i.min,max:i.max,step:(e=i.step)!=null?e:.01,onInput:t=>i.onChange(parseFloat(t.target.value))}),P("span",{class:"text-[10px] text-text-2 w-10 text-right font-mono",children:i.value.toFixed(2)})]})}function qs(i){return P("input",{type:"color",class:"w-8 h-5 bg-bg-2 border border-border rounded cursor-pointer",value:i.value,onInput:e=>i.onChange(e.target.value)})}function Mi(i){return P("label",{class:"flex items-center gap-1.5 cursor-pointer text-[11px] text-text-1",children:[P("input",{type:"checkbox",class:"accent-accent",checked:i.value,onChange:e=>i.onChange(e.target.checked)}),i.label&&P("span",{children:i.label})]})}function j1(i){return P("select",{class:"flex-1 px-1.5 py-0.5 text-[12px] bg-bg-2 border border-border rounded text-text-0 focus:border-accent focus:outline-none",value:i.value,onChange:e=>i.onChange(e.target.value),children:i.options.map(e=>P("option",{value:e.value,children:e.label},e.value))})}function Rh(i){if(!i)return null;const e=dr();return e?e.lookupObject(i):null}function wg(i){return!!i&&i.isMesh===!0}function K1(i){const e=i.material;return Array.isArray(e)?null:e}function ep(i){return`#${i.getHexString()}`}function tp(i,e){i.set(e).convertSRGBToLinear()}function lt(){Jo.value++}function qn(){Vl.value++}function np(){const i=dr();!i||(Xs.value=i.getSceneTree())}function It(){ea.value=!0}const In=10,ss=In/2,fi=.2;function Ua(i,e=.95,t=0){return new Ut({color:i,roughness:e,metalness:t})}function Z1(i){const e=new Ye;e.name="sceneRoot",i.add(e);const t=()=>Ua(15790320),n=()=>Ua(14034728),r=()=>Ua(2924588),s=()=>Ua(15263976),o=new $(new _e(In,fi,In),t());o.name="Floor",o.position.set(0,-fi/2,0),e.add(o);const a=new $(new _e(In,fi,In),t());a.name="Ceiling",a.position.set(0,In+fi/2,0),e.add(a);const l=new $(new _e(In,In,fi),t());l.name="Back Wall",l.position.set(0,ss,-ss-fi/2),e.add(l);const c=new $(new _e(fi,In,In),n());c.name="Left Wall (Red)",c.position.set(-ss-fi/2,ss,0),e.add(c);const u=new $(new _e(fi,In,In),r());u.name="Right Wall (Green)",u.position.set(ss+fi/2,ss,0),e.add(u);const h=new $(new _e(3,6,3),s());h.name="Tall Block",h.position.set(-1.8,3,-1.5),h.rotation.y=.29,e.add(h);const d=new $(new _e(3,3,3),s());return d.name="Short Block",d.position.set(1.8,1.5,1.5),d.rotation.y=-.29,e.add(d),{camera:{position:[0,5,18],target:[0,5,0]},lightDummy:{position:[0,In-.001,0]},background:657930}}ci.register({id:"cornell.classic",label:"Cornell \u2014 Classic",category:"cornell",description:"Classic Cornell Box: 5 walls + tall block + short block. No extras.",build:Z1,defaultBakeSettings:{lightMapSize:1024,targetSamples:256,bounces:2,casts:5,texelsPerMeter:10},schemaVersion:1});const Dn=10,os=Dn/2,pi=.2;function mi(i,e=.95,t=0){return new Ut({color:i,roughness:e,metalness:t})}function Q1(i){const e=new Ye;e.name="sceneRoot",i.add(e);const t=new $(new _e(Dn,pi,Dn),mi(15790320));t.name="Floor",t.position.set(0,-pi/2,0),e.add(t);const n=new $(new _e(Dn,pi,Dn),mi(15790320));n.name="Ceiling",n.position.set(0,Dn+pi/2,0),e.add(n);const r=new $(new _e(Dn,Dn,pi),mi(15790320));r.name="Back Wall",r.position.set(0,os,-os-pi/2),e.add(r);const s=new $(new _e(pi,Dn,Dn),mi(14034728));s.name="Left Wall (Red)",s.position.set(-os-pi/2,os,0),e.add(s);const o=new $(new _e(pi,Dn,Dn),mi(2924588));o.name="Right Wall (Green)",o.position.set(os+pi/2,os,0),e.add(o);const a=new $(new _e(3,6,3),mi(15263976));a.name="Tall Block",a.position.set(-1.8,3,-1.5),a.rotation.y=.29,e.add(a);const l=new $(new _e(3,3,3),mi(15263976));l.name="Short Block",l.position.set(1.8,1.5,1.5),l.rotation.y=-.29,e.add(l);const c=new $(new Ei(1,48,32),mi(16119285,.4,0));c.name="Sphere",c.position.set(2.4,1,3),e.add(c);const u=new $(new Ko(.55,.18,160,24),mi(16765286,.55,0));u.name="Torus Knot",u.position.set(0,1,2.8),u.rotation.x=Math.PI/2,e.add(u);const h=new $(new _e(1.2,1.2,1.2),mi(13072954,.8,0));return h.name="Accent Block",h.position.set(-3.5,.6,2.8),h.rotation.y=.45,e.add(h),{camera:{position:[0,5,18],target:[0,5,0]},lightDummy:{position:[0,Dn-.001,0]},background:657930}}ci.register({id:"cornell.advanced",label:"Cornell \u2014 Advanced",category:"cornell",description:"Cornell Box + sphere + torus knot + accent block. Matches today\u2019s default.",build:Q1,defaultBakeSettings:{lightMapSize:1024,targetSamples:256,bounces:2,casts:5,texelsPerMeter:10},schemaVersion:1});const Un=10,as=Un/2,gi=.2;function co(i,e=.95,t=0){return new Ut({color:i,roughness:e,metalness:t})}function J1(i){const e=new Ye;e.name="sceneRoot",i.add(e);const t=new $(new _e(Un,gi,Un),co(15790320));t.name="Floor",t.position.set(0,-gi/2,0),e.add(t);const n=new $(new _e(Un,gi,Un),co(15790320));n.name="Ceiling",n.position.set(0,Un+gi/2,0),e.add(n);const r=new $(new _e(Un,Un,gi),co(15790320));r.name="Back Wall",r.position.set(0,as,-as-gi/2),e.add(r);const s=new $(new _e(gi,Un,Un),co(14034728));s.name="Left Wall (Red)",s.position.set(-as-gi/2,as,0),e.add(s);const o=new $(new _e(gi,Un,Un),co(2924588));o.name="Right Wall (Green)",o.position.set(as+gi/2,as,0),e.add(o);const a=new $(new _e(2.5,5,2.5),new Ut({color:16777215,roughness:.05,metalness:1}));a.name="Mirror Cube",a.position.set(-2.2,2.5,-1.5),a.rotation.y=.3,a.userData.lightmapIgnore=!0,e.add(a);const l=new $(new Ei(1.2,48,32),new Ai({color:16777215,roughness:0,metalness:0,transmission:1,thickness:.5,ior:1.5,transparent:!0}));return l.name="Glass Sphere",l.position.set(2.4,1.2,1.5),l.userData.lightmapIgnore=!0,e.add(l),{camera:{position:[0,5,18],target:[0,5,0]},lightDummy:{position:[0,Un-.001,0]},background:657930}}ci.register({id:"cornell.glass-mirror",label:"Cornell \u2014 Glass + Mirror",category:"cornell",description:"Cornell with a mirror cube + glass sphere (excluded from bake; rendered view-time only).",build:J1,defaultBakeSettings:{lightMapSize:1024,targetSamples:256,bounces:2,casts:5,texelsPerMeter:10},schemaVersion:1});const wn=10,ls=wn/2,_i=.2;function uo(i,e=.95,t=0){return new Ut({color:i,roughness:e,metalness:t})}function eT(i){const e=new Ye;e.name="sceneRoot",i.add(e);const t=new $(new _e(wn,_i,wn),uo(15790320));t.name="Floor",t.position.set(0,-_i/2,0),e.add(t);const n=new $(new _e(wn,_i,wn),uo(15790320));n.name="Ceiling",n.position.set(0,wn+_i/2,0),e.add(n);const r=new $(new _e(wn,wn,_i),uo(15790320));r.name="Back Wall",r.position.set(0,ls,-ls-_i/2),e.add(r);const s=new $(new _e(_i,wn,wn),uo(14034728));s.name="Left Wall (Red)",s.position.set(-ls-_i/2,ls,0),e.add(s);const o=new $(new _e(_i,wn,wn),uo(2924588));o.name="Right Wall (Green)",o.position.set(ls+_i/2,ls,0),e.add(o);const a=new Ut({color:0,emissive:new Re(16773328),emissiveIntensity:5}),l=new $(new _e(6,.05,.6),a);return l.name="Emissive Strip",l.position.set(0,wn-.05,0),l.userData.lightmapIgnore=!0,e.add(l),{camera:{position:[0,5,18],target:[0,5,0]},lightDummy:{position:[0,wn-.1,0]},background:657930}}ci.register({id:"cornell.emissive-strip",label:"Cornell \u2014 Emissive Strip",category:"cornell",description:"Cornell lit by a long emissive ceiling strip instead of a point light.",build:eT,defaultBakeSettings:{lightMapSize:1024,targetSamples:256,bounces:2,casts:5,texelsPerMeter:10},schemaVersion:1});const Nn=12,cs=Nn/2,Wn=.2;function tT(i,e=.9,t=0){return new Ut({color:i,roughness:e,metalness:t})}function nT(i){const e=new Ye;e.name="sceneRoot",i.add(e);const t=()=>tT(14737632),n=new $(new _e(Nn,Wn,Nn),t());n.name="Floor",n.position.set(0,-Wn/2,0),e.add(n);const r=new $(new _e(Nn,Wn,Nn),t());r.name="Ceiling",r.position.set(0,Nn+Wn/2,0),e.add(r);for(const[o,a,l,c,u]of[["Back Wall",0,-cs-Wn/2,Nn,Wn],["Front Wall",0,cs+Wn/2,Nn,Wn]]){const h=new $(new _e(c,Nn,u),t());h.name=o,h.position.set(a,cs,l),e.add(h)}for(const[o,a,l,c]of[["Left Wall",-cs-Wn/2,Wn,Nn],["Right Wall",cs+Wn/2,Wn,Nn]]){const u=new $(new _e(l,Nn,c),t());u.name=o,u.position.set(a,cs,0),e.add(u)}const s=[[16728128,-3,3,0],[4259648,3,6,-2],[4227327,0,4.5,3]];for(let o=0;o<s.length;o++){const[a,l,c,u]=s[o],h=new Or(a,60,0,2);h.position.set(l,c,u),e.add(h);const d=new $(new Ei(.18,16,12),new Ut({color:0,emissive:a,emissiveIntensity:3}));d.name=`Point Light ${o+1}`,d.position.set(l,c,u),d.userData.lightmapIgnore=!0,e.add(d)}return{camera:{position:[0,6,20],target:[0,5,0]},lightDummy:{position:[0,Nn-.5,0]},background:328968}}ci.register({id:"threejs.pointlights",label:"three.js \u2014 Point Lights",category:"threejs-port",description:"Port of the three.js webgl_lights_pointlights example: 3 colored point lights in a closed room.",source:{name:"three.js / webgl_lights_pointlights",url:"https://threejs.org/examples/?q=pointlights#webgl_lights_pointlights",license:"MIT",author:"three.js authors"},referenceUrl:"https://threejs.org/examples/?q=pointlights#webgl_lights_pointlights",build:nT,defaultBakeSettings:{lightMapSize:1024,targetSamples:256,bounces:2,casts:5,texelsPerMeter:8},schemaVersion:1});function us(i,e=.85,t=0){return new Ut({color:i,roughness:e,metalness:t})}function iT(i){const e=new Ye;e.name="sceneRoot",i.add(e);const t=new $(new _e(40,.4,40),us(8421504));t.name="Ground",t.position.set(0,-.2,0),e.add(t);const n=[["Cube A",new $(new _e(2,2,2),us(13789470))],["Cube B",new $(new _e(1.5,3,1.5),us(4620980))],["Sphere",new $(new Ei(1.2,32,24),us(16113331))],["Cone",new $(new zl(1.3,3,24),us(5597999))],["Pillar",new $(new Kt(.6,.6,4,24),us(12632256))]],r=[[-4,1,2],[3,1.5,-3],[-2,1.2,-3.5],[5,1.5,3],[0,2,5]];for(let o=0;o<n.length;o++){const[a,l]=n[o],[c,u,h]=r[o];l.name=a,l.position.set(c,u,h),e.add(l)}const s=new Qo(16774352,1.5);return s.position.set(10,18,8),s.userData.lightmapIgnore=!0,e.add(s),{camera:{position:[12,10,18],target:[0,1,0]},lightDummy:{position:[10,18,8]},background:8900331}}ci.register({id:"threejs.shadowmap",label:"three.js \u2014 Shadow Map",category:"threejs-port",description:"Port of webgl_shadowmap: outdoor scene with directional sun + ground + a few obstacles.",source:{name:"three.js / webgl_shadowmap",url:"https://threejs.org/examples/?q=shadowmap#webgl_shadowmap",license:"MIT",author:"three.js authors"},referenceUrl:"https://threejs.org/examples/?q=shadowmap#webgl_shadowmap",build:iT,defaultBakeSettings:{lightMapSize:1024,targetSamples:256,bounces:2,casts:5,texelsPerMeter:4},schemaVersion:1});function Ic(i,e=.6,t=0){return new Ut({color:i,roughness:e,metalness:t})}function rT(i){const e=new Ye;e.name="sceneRoot",i.add(e);const t=new $(new _e(20,.2,20),Ic(3158064,.9));t.name="Floor",t.position.set(0,-.1,0),e.add(t);const n=new $(new _e(20,12,.2),Ic(4210752,.9));n.name="Backdrop",n.position.set(0,6,-6),e.add(n);const r=new $(new Ko(1.3,.42,200,32),Ic(13218448,.55,0));r.name="Subject",r.position.set(0,3,0),e.add(r);const s=[["Key (warm)",16763018,4,5,3.5,80],["Fill (cool)",8956159,-4,3.5,2.5,40],["Rim",16777215,0,4.5,-3.5,60]];for(const[o,a,l,c,u,h]of s){const d=new Or(a,h,0,2);d.position.set(l,c,u),d.userData.lightmapIgnore=!0,e.add(d);const f=new $(new Ei(.12,12,8),new Ut({color:0,emissive:a,emissiveIntensity:2}));f.name=o,f.position.set(l,c,u),f.userData.lightmapIgnore=!0,e.add(f)}return{camera:{position:[0,4,10],target:[0,3,0]},lightDummy:{position:[4,5,3.5]},background:1710623}}ci.register({id:"threejs.decals",label:"three.js \u2014 Decals (3-Point Lighting)",category:"threejs-port",description:"Port of the webgl_decals lighting setup: warm key + cool fill + rim around a centered subject.",source:{name:"three.js / webgl_decals",url:"https://threejs.org/examples/?q=decals#webgl_decals",license:"MIT",author:"three.js authors"},referenceUrl:"https://threejs.org/examples/?q=decals#webgl_decals",build:rT,defaultBakeSettings:{lightMapSize:1024,targetSamples:256,bounces:2,casts:5,texelsPerMeter:8},schemaVersion:1});const Eo=6,ip=Eo/2,ho=4,hs=.15;function ji(i,e=.9,t=0){return new Ut({color:i,roughness:e,metalness:t})}function sT(i){const e=new Ye;e.name="sceneRoot",i.add(e);const t=new $(new _e(Eo,hs,Eo),ji(13608570));t.name="Floor",t.position.set(0,-hs/2,0),e.add(t);const n=new $(new _e(Eo,ho,hs),ji(15720904));n.name="Back Wall",n.position.set(0,ho/2,-ip-hs/2),e.add(n);const r=new $(new _e(hs,ho,Eo),ji(14799539));r.name="Left Wall",r.position.set(-ip-hs/2,ho/2,0),e.add(r);const s=new $(new _e(2.4,.6,1.4),ji(7109257));s.name="Bed",s.position.set(-1.5,.3,-1.8),e.add(s);const o=new $(new _e(.7,.2,1.2),ji(16315364));o.name="Pillow",o.position.set(-2.4,.7,-1.8),e.add(o);const a=new $(new _e(1.4,.9,.8),ji(9132587));a.name="Table",a.position.set(1.4,.45,-1.6),e.add(a);const l=new $(new _e(.6,.6,.6),ji(10910802));l.name="Stool",l.position.set(.6,.3,.6),e.add(l);const c=new $(new _e(.3,.6,.3),ji(2763306));return c.name="Lamp Base",c.position.set(1.4,1.2,-1.6),e.add(c),{camera:{position:[9,9,9],target:[0,1,0]},lightDummy:{position:[2,ho-.2,1]},background:2105384}}ci.register({id:"isometric.room",label:"Isometric \u2014 Low-Poly Room",category:"isometric",description:"CC0 low-poly isometric room: floor + 2 walls + bed/table/stool. Locked iso camera.",source:{name:"three-lightmap-baker built-in",url:"https://github.com/lucas-jones/three-lightmap-baker",license:"CC0",author:"three-lightmap-baker"},build:sT,defaultBakeSettings:{lightMapSize:1024,targetSamples:256,bounces:2,casts:5,texelsPerMeter:12},schemaVersion:1});var Ru={d:(i,e)=>{for(var t in e)Ru.o(e,t)&&!Ru.o(i,t)&&Object.defineProperty(i,t,{enumerable:!0,get:e[t]})},o:(i,e)=>Object.prototype.hasOwnProperty.call(i,e)},Eg={};Ru.d(Eg,{Q:()=>cT});var Dc=function(i,e,t,n){return new(t||(t=Promise))(function(r,s){function o(c){try{l(n.next(c))}catch(u){s(u)}}function a(c){try{l(n.throw(c))}catch(u){s(u)}}function l(c){var u;c.done?r(c.value):(u=c.value,u instanceof t?u:new t(function(h){h(u)})).then(o,a)}l((n=n.apply(i,e||[])).next())})};const Ag=Symbol("Comlink.proxy"),oT=Symbol("Comlink.endpoint"),aT=Symbol("Comlink.releaseProxy"),Cu=Symbol("Comlink.thrown"),rp=i=>typeof i=="object"&&i!==null||typeof i=="function",Rg=new Map([["proxy",{canHandle:i=>rp(i)&&i[Ag],serialize(i){const{port1:e,port2:t}=new MessageChannel;return Cg(i,e),[t,[t]]},deserialize:i=>(i.start(),Lg(i))}],["throw",{canHandle:i=>rp(i)&&Cu in i,serialize({value:i}){let e;return e=i instanceof Error?{isError:!0,value:{message:i.message,name:i.name,stack:i.stack}}:{isError:!1,value:i},[e,[]]},deserialize(i){throw i.isError?Object.assign(new Error(i.value.message),i.value):i.value}}]]);function Cg(i,e=self){e.addEventListener("message",function t(n){if(!n||!n.data)return;const{id:r,type:s,path:o}=Object.assign({path:[]},n.data),a=(n.data.argumentList||[]).map(wr);let l;try{const c=o.slice(0,-1).reduce((h,d)=>h[d],i),u=o.reduce((h,d)=>h[d],i);switch(s){case"GET":l=u;break;case"SET":c[o.slice(-1)[0]]=wr(n.data.value),l=!0;break;case"APPLY":l=u.apply(c,a);break;case"CONSTRUCT":l=al(new u(...a));break;case"ENDPOINT":{const{port1:h,port2:d}=new MessageChannel;Cg(i,d),l=function(f,g){return Ig.set(f,g),f}(h,[h])}break;case"RELEASE":l=void 0;break;default:return}}catch(c){l={value:c,[Cu]:0}}Promise.resolve(l).catch(c=>({value:c,[Cu]:0})).then(c=>{const[u,h]=Ch(c);e.postMessage(Object.assign(Object.assign({},u),{id:r}),h),s==="RELEASE"&&(e.removeEventListener("message",t),Pg(e))})}),e.start&&e.start()}function Pg(i){(function(e){return e.constructor.name==="MessagePort"})(i)&&i.close()}function Lg(i,e){return Pu(i,[],e)}function Na(i){if(i)throw new Error("Proxy has been released and is not useable")}function Pu(i,e=[],t=function(){}){let n=!1;const r=new Proxy(t,{get(s,o){if(Na(n),o===aT)return()=>ds(i,{type:"RELEASE",path:e.map(a=>a.toString())}).then(()=>{Pg(i),n=!0});if(o==="then"){if(e.length===0)return{then:()=>r};const a=ds(i,{type:"GET",path:e.map(l=>l.toString())}).then(wr);return a.then.bind(a)}return Pu(i,[...e,o])},set(s,o,a){Na(n);const[l,c]=Ch(a);return ds(i,{type:"SET",path:[...e,o].map(u=>u.toString()),value:l},c).then(wr)},apply(s,o,a){Na(n);const l=e[e.length-1];if(l===oT)return ds(i,{type:"ENDPOINT"}).then(wr);if(l==="bind")return Pu(i,e.slice(0,-1));const[c,u]=sp(a);return ds(i,{type:"APPLY",path:e.map(h=>h.toString()),argumentList:c},u).then(wr)},construct(s,o){Na(n);const[a,l]=sp(o);return ds(i,{type:"CONSTRUCT",path:e.map(c=>c.toString()),argumentList:a},l).then(wr)}});return r}function sp(i){const e=i.map(Ch);return[e.map(n=>n[0]),(t=e.map(n=>n[1]),Array.prototype.concat.apply([],t))];var t}const Ig=new WeakMap;function al(i){return Object.assign(i,{[Ag]:!0})}function Ch(i){for(const[e,t]of Rg)if(t.canHandle(i)){const[n,r]=t.serialize(i);return[{type:"HANDLER",name:e,value:n},r]}return[{type:"RAW",value:i},Ig.get(i)||[]]}function wr(i){switch(i.type){case"HANDLER":return Rg.get(i.name).deserialize(i.value);case"RAW":return i.value}}function ds(i,e,t){return new Promise(n=>{const r=new Array(4).fill(0).map(()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16)).join("-");i.addEventListener("message",function s(o){o.data&&o.data.id&&o.data.id===r&&(i.removeEventListener("message",s),n(o.data))}),i.start&&i.start(),i.postMessage(Object.assign({id:r},e),t)})}class lT extends class{}{init(e,t,n,r){if(!this.api){if(!r)throw new Error("workerFilePath is required");(()=>{var s,o,a,l;s=this,o=void 0,l=function*(){const c=yield fetch(r).then(d=>d.blob()),u=URL.createObjectURL(c),h=new Worker(u,{type:"module"});this.api=yield new(Lg(h))(al(()=>{e(),URL.revokeObjectURL(u)}),al((d,f)=>d==="xatlas_web.wasm"?n:d+f),al(t))},new((a=void 0)||(a=Promise))(function(c,u){function h(g){try{f(l.next(g))}catch(x){u(x)}}function d(g){try{f(l.throw(g))}catch(x){u(x)}}function f(g){var x;g.done?c(g.value):(x=g.value,x instanceof a?x:new a(function(m){m(x)})).then(h,d)}f((l=l.apply(s,o||[])).next())})})()}}}class cT extends class{constructor(e,t={resolution:2048},n={},r=!1,s=!1,o=!1){this.THREE=e,this.packOptions=t,this.chartOptions=n,this.useNormals=r,this.timeUnwrap=s,this.logProgress=o,this._libraryLoaded=!1,this._isUnwrapping=!1,this.xAtlas=this._createXAtlas()}loadLibrary(e,t,n){return Dc(this,void 0,void 0,function*(){if(!this._libraryLoaded){for(yield new Promise((r,s)=>{try{this.xAtlas.init(()=>{r()},e,t,n)}catch(o){s(o)}});!this.xAtlas.api||!(yield this.xAtlas.api.loaded);)yield new Promise(r=>setTimeout(r,100));this._libraryLoaded=!0}})}packAtlas(e,t="uv2",n="uv"){return Dc(this,void 0,void 0,function*(){if(!this._libraryLoaded)return console.warn("xatlas-three: library not loaded"),[];if(!e)return[];if(e.length<1)return[];const r=this.chartOptions.useInputMeshUvs;for(;this._isUnwrapping;)console.log("xatlas-three: unwrapping another mesh, waiting 100 ms"),yield new Promise(c=>setTimeout(c,100));this._isUnwrapping=!0,yield this.xAtlas.api.setProgressLogging(this.logProgress),yield this.xAtlas.api.createAtlas();let s=[],o="";for(let c of e){let{uuid:u,index:h,attributes:d}=c;const f=c.userData.worldScale||1;s.push(u),h&&d.position&&d.position.itemSize===3?(o="Mesh"+s.length+" added to atlas: "+u,this.timeUnwrap&&console.time(o),yield this.xAtlas.api.addMesh(h.array,d.position.array,d.normal?d.normal.array:void 0,d.uv?d.uv.array:void 0,u,this.useNormals,r,f),this.timeUnwrap&&console.timeEnd(o)):console.warn("xatlas-three: Geometry not supported: ",c)}o="Generated atlas with "+s.length+" meshes",this.timeUnwrap&&console.time(o);let a=yield this.xAtlas.api.generateAtlas(this.chartOptions,this.packOptions,!0);this.timeUnwrap&&console.timeEnd(o);let l=[];for(let c of a){let u=e.find(h=>h.uuid===c.mesh);u?(c.vertex.vertices&&u.setAttribute("position",new this.THREE.BufferAttribute(c.vertex.vertices,3,!1)),c.vertex.normals&&u.setAttribute("normal",new this.THREE.BufferAttribute(c.vertex.normals,3,!0)),c.vertex.coords1&&u.setAttribute(t,new this.THREE.BufferAttribute(c.vertex.coords1,2,!1)),c.vertex.coords&&t!==n&&u.setAttribute(n,new this.THREE.BufferAttribute(c.vertex.coords,2,!1)),c.index&&u.setIndex(new this.THREE.BufferAttribute(c.index,1,!1)),l.push(u)):console.error("xatlas-three: Mesh not found: ",c.mesh)}return yield this.xAtlas.api.destroyAtlas(),this._isUnwrapping=!1,l})}unwrapGeometry(e,t="uv",n="uv2"){return Dc(this,void 0,void 0,function*(){return this.packAtlas([e],t,n)})}}{_createXAtlas(){return new lT}}var uT=Eg.Q;const ll=new uT({BufferAttribute:Tt}),hT=async()=>{const i=(e,t)=>{};await ll.loadLibrary(i,"https://cdn.jsdelivr.net/npm/xatlasjs@0.1.0/dist/xatlas.wasm","https://cdn.jsdelivr.net/npm/xatlasjs@0.1.0/dist/xatlas.js")},Dg=async i=>{const e=i.map(t=>t.geometry);ll.packOptions.padding=16,ll.packOptions.resolution=4096,await ll.packAtlas(e,"uv2","uv")},tR=async i=>{for(let e=0;e<i.length;e++){const t=i[e];!t||t.length===0||await Dg(t)}},dT=`
    uniform vec2 offset;
    in vec2 uv2;
    out vec4 vWorldPosition;

    void main() {
        vWorldPosition = modelMatrix * vec4(position, 1.0);
        gl_Position = vec4((uv2 + offset) * 2.0 - 1.0, 0.0, 1.0);
    }
`,fT=`
    in vec4 vWorldPosition;
    out vec4 fragColor;

    void main() {
        fragColor = vWorldPosition;
    }
`,pT=new kt({glslVersion:li,vertexShader:dT,fragmentShader:fT,side:vn,fog:!1,uniforms:{offset:new Gl(new Me(0,0))}}),mT=`
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
`,gT=`
    in vec4 vNormal;
    out vec4 fragColor;

    void main() {
        // Guard against zero-length normals (degenerate geometry) \u2014 produces (0,0,0,0)
        // so the bake shader can detect the miss instead of generating NaN.
        float len = length(vNormal.xyz);
        fragColor = len > 1e-6 ? vec4(vNormal.xyz / len, vNormal.w) : vec4(0.0);
    }
`,_T=new kt({glslVersion:li,vertexShader:mT,fragmentShader:gT,side:vn,fog:!1,uniforms:{offset:new Gl(new Me(0,0))}}),xT=[{x:-2,y:-2},{x:2,y:-2},{x:-2,y:2},{x:2,y:2},{x:-1,y:-2},{x:1,y:-2},{x:-2,y:-1},{x:2,y:-1},{x:-2,y:1},{x:2,y:1},{x:-1,y:2},{x:1,y:2},{x:-2,y:0},{x:2,y:0},{x:0,y:-2},{x:0,y:2},{x:-1,y:-1},{x:1,y:-1},{x:-1,y:0},{x:1,y:0},{x:-1,y:1},{x:1,y:1},{x:0,y:-1},{x:0,y:1},{x:0,y:0}],vT=(i,e,t,n=!0)=>{const r=i.autoClear,s=i.getRenderTarget(),o=new Re;i.getClearColor(o);const a=i.getClearAlpha(),l=[],c=u=>{const h=new pn(t,t,{type:Je,magFilter:Qe,minFilter:Qe});l.push(h);const d=new di(-100,100,-100,100,-100,200);d.updateMatrix();const f=new Ye;f.matrixWorldAutoUpdate=!1;for(const x of e){const m=x.clone();m.material=u,f.add(m)}i.autoClear=!1,i.setRenderTarget(h),i.setClearColor(0,0),i.clear();const g=u.uniforms.offset;if(!g)throw new Error("[baker] atlas material missing `offset` uniform");if(n)for(const x of xT)g.value.x=x.x*(1/t),g.value.y=x.y*(1/t),i.render(f,d);return g.value.x=0,g.value.y=0,i.render(f,d),h.texture};try{const u=c(pT),h=c(_T);return{positionTexture:u,normalTexture:h,dispose:()=>{for(const d of l)d.dispose();l.length=0}}}finally{i.setRenderTarget(s),i.autoClear=r,i.setClearColor(o,a)}},Ug=0,yT=1,bT=2,op=2,Uc=1.25,ap=1,cr=6*4+4+4,Wl=65535,MT=Math.pow(2,-24),Nc=Symbol("SKIP_GENERATION");function Ng(i){return i.index?i.index.count:i.attributes.position.count}function eo(i){return Ng(i)/3}function Fg(i,e=ArrayBuffer){return i>65535?new Uint32Array(new e(4*i)):new Uint16Array(new e(2*i))}function TT(i,e){if(!i.index){const t=i.attributes.position.count,n=e.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,r=Fg(t,n);i.setIndex(new Tt(r,1));for(let s=0;s<t;s++)r[s]=s}}function Og(i){const e=eo(i),t=i.drawRange,n=t.start/3,r=(t.start+t.count)/3,s=Math.max(0,n),o=Math.min(e,r)-s;return[{offset:Math.floor(s),count:Math.floor(o)}]}function Bg(i){if(!i.groups||!i.groups.length)return Og(i);const e=[],t=new Set,n=i.drawRange,r=n.start/3,s=(n.start+n.count)/3;for(const a of i.groups){const l=a.start/3,c=(a.start+a.count)/3;t.add(Math.max(r,l)),t.add(Math.min(s,c))}const o=Array.from(t.values()).sort((a,l)=>a-l);for(let a=0;a<o.length-1;a++){const l=o[a],c=o[a+1];e.push({offset:Math.floor(l),count:Math.floor(c-l)})}return e}function ST(i){if(i.groups.length===0)return!1;const e=eo(i),t=Bg(i).sort((s,o)=>s.offset-o.offset),n=t[t.length-1];n.count=Math.min(e-n.offset,n.count);let r=0;return t.forEach(({count:s})=>r+=s),e!==r}function Fc(i,e,t,n,r){let s=1/0,o=1/0,a=1/0,l=-1/0,c=-1/0,u=-1/0,h=1/0,d=1/0,f=1/0,g=-1/0,x=-1/0,m=-1/0;for(let p=e*6,v=(e+t)*6;p<v;p+=6){const _=i[p+0],y=i[p+1],M=_-y,T=_+y;M<s&&(s=M),T>l&&(l=T),_<h&&(h=_),_>g&&(g=_);const S=i[p+2],E=i[p+3],L=S-E,b=S+E;L<o&&(o=L),b>c&&(c=b),S<d&&(d=S),S>x&&(x=S);const w=i[p+4],U=i[p+5],k=w-U,R=w+U;k<a&&(a=k),R>u&&(u=R),w<f&&(f=w),w>m&&(m=w)}n[0]=s,n[1]=o,n[2]=a,n[3]=l,n[4]=c,n[5]=u,r[0]=h,r[1]=d,r[2]=f,r[3]=g,r[4]=x,r[5]=m}function wT(i,e=null,t=null,n=null){const r=i.attributes.position,s=i.index?i.index.array:null,o=eo(i),a=r.normalized;let l;e===null?(l=new Float32Array(o*6*4),t=0,n=o):(l=e,t=t||0,n=n||o);const c=r.array,u=r.offset||0;let h=3;r.isInterleavedBufferAttribute&&(h=r.data.stride);const d=["getX","getY","getZ"];for(let f=t;f<t+n;f++){const g=f*3,x=f*6;let m=g+0,p=g+1,v=g+2;s&&(m=s[m],p=s[p],v=s[v]),a||(m=m*h+u,p=p*h+u,v=v*h+u);for(let _=0;_<3;_++){let y,M,T;a?(y=r[d[_]](m),M=r[d[_]](p),T=r[d[_]](v)):(y=c[m+_],M=c[p+_],T=c[v+_]);let S=y;M<S&&(S=M),T<S&&(S=T);let E=y;M>E&&(E=M),T>E&&(E=T);const L=(E-S)/2,b=_*2;l[x+b+0]=S+L,l[x+b+1]=L+(Math.abs(S)+L)*MT}}return l}function At(i,e,t){return t.min.x=e[i],t.min.y=e[i+1],t.min.z=e[i+2],t.max.x=e[i+3],t.max.y=e[i+4],t.max.z=e[i+5],t}function lp(i){let e=-1,t=-1/0;for(let n=0;n<3;n++){const r=i[n+3]-i[n];r>t&&(t=r,e=n)}return e}function cp(i,e){e.set(i)}function up(i,e,t){let n,r;for(let s=0;s<3;s++){const o=s+3;n=i[s],r=e[s],t[s]=n<r?n:r,n=i[o],r=e[o],t[o]=n>r?n:r}}function Fa(i,e,t){for(let n=0;n<3;n++){const r=e[i+2*n],s=e[i+2*n+1],o=r-s,a=r+s;o<t[n]&&(t[n]=o),a>t[n+3]&&(t[n+3]=a)}}function fo(i){const e=i[3]-i[0],t=i[4]-i[1],n=i[5]-i[2];return 2*(e*t+t*n+n*e)}const Bi=32,ET=(i,e)=>i.candidate-e.candidate,Ki=new Array(Bi).fill().map(()=>({count:0,bounds:new Float32Array(6),rightCacheBounds:new Float32Array(6),leftCacheBounds:new Float32Array(6),candidate:0})),Oa=new Float32Array(6);function AT(i,e,t,n,r,s){let o=-1,a=0;if(s===Ug)o=lp(e),o!==-1&&(a=(e[o]+e[o+3])/2);else if(s===yT)o=lp(i),o!==-1&&(a=RT(t,n,r,o));else if(s===bT){const l=fo(i);let c=Uc*r;const u=n*6,h=(n+r)*6;for(let d=0;d<3;d++){const f=e[d],m=(e[d+3]-f)/Bi;if(r<Bi/4){const p=[...Ki];p.length=r;let v=0;for(let y=u;y<h;y+=6,v++){const M=p[v];M.candidate=t[y+2*d],M.count=0;const{bounds:T,leftCacheBounds:S,rightCacheBounds:E}=M;for(let L=0;L<3;L++)E[L]=1/0,E[L+3]=-1/0,S[L]=1/0,S[L+3]=-1/0,T[L]=1/0,T[L+3]=-1/0;Fa(y,t,T)}p.sort(ET);let _=r;for(let y=0;y<_;y++){const M=p[y];for(;y+1<_&&p[y+1].candidate===M.candidate;)p.splice(y+1,1),_--}for(let y=u;y<h;y+=6){const M=t[y+2*d];for(let T=0;T<_;T++){const S=p[T];M>=S.candidate?Fa(y,t,S.rightCacheBounds):(Fa(y,t,S.leftCacheBounds),S.count++)}}for(let y=0;y<_;y++){const M=p[y],T=M.count,S=r-M.count,E=M.leftCacheBounds,L=M.rightCacheBounds;let b=0;T!==0&&(b=fo(E)/l);let w=0;S!==0&&(w=fo(L)/l);const U=ap+Uc*(b*T+w*S);U<c&&(o=d,c=U,a=M.candidate)}}else{for(let _=0;_<Bi;_++){const y=Ki[_];y.count=0,y.candidate=f+m+_*m;const M=y.bounds;for(let T=0;T<3;T++)M[T]=1/0,M[T+3]=-1/0}for(let _=u;_<h;_+=6){let T=~~((t[_+2*d]-f)/m);T>=Bi&&(T=Bi-1);const S=Ki[T];S.count++,Fa(_,t,S.bounds)}const p=Ki[Bi-1];cp(p.bounds,p.rightCacheBounds);for(let _=Bi-2;_>=0;_--){const y=Ki[_],M=Ki[_+1];up(y.bounds,M.rightCacheBounds,y.rightCacheBounds)}let v=0;for(let _=0;_<Bi-1;_++){const y=Ki[_],M=y.count,T=y.bounds,E=Ki[_+1].rightCacheBounds;M!==0&&(v===0?cp(T,Oa):up(T,Oa,Oa)),v+=M;let L=0,b=0;v!==0&&(L=fo(Oa)/l);const w=r-v;w!==0&&(b=fo(E)/l);const U=ap+Uc*(L*v+b*w);U<c&&(o=d,c=U,a=y.candidate)}}}}else console.warn(`MeshBVH: Invalid build strategy value ${s} used.`);return{axis:o,pos:a}}function RT(i,e,t,n){let r=0;for(let s=e,o=e+t;s<o;s++)r+=i[s*6+n*2];return r/t}class Oc{constructor(){this.boundingData=new Float32Array(6)}}function CT(i,e,t,n,r,s){let o=n,a=n+r-1;const l=s.pos,c=s.axis*2;for(;;){for(;o<=a&&t[o*6+c]<l;)o++;for(;o<=a&&t[a*6+c]>=l;)a--;if(o<a){for(let u=0;u<3;u++){let h=e[o*3+u];e[o*3+u]=e[a*3+u],e[a*3+u]=h}for(let u=0;u<6;u++){let h=t[o*6+u];t[o*6+u]=t[a*6+u],t[a*6+u]=h}o++,a--}else return o}}function PT(i,e,t,n,r,s){let o=n,a=n+r-1;const l=s.pos,c=s.axis*2;for(;;){for(;o<=a&&t[o*6+c]<l;)o++;for(;o<=a&&t[a*6+c]>=l;)a--;if(o<a){let u=i[o];i[o]=i[a],i[a]=u;for(let h=0;h<6;h++){let d=t[o*6+h];t[o*6+h]=t[a*6+h],t[a*6+h]=d}o++,a--}else return o}}function bn(i,e){return e[i+15]===65535}function An(i,e){return e[i+6]}function Bn(i,e){return e[i+14]}function Yn(i){return i+8}function kn(i,e){return e[i+6]}function Ph(i,e){return e[i+7]}let kg,Ao,cl,zg;const LT=Math.pow(2,32);function Lu(i){return"count"in i?1:1+Lu(i.left)+Lu(i.right)}function IT(i,e,t){return kg=new Float32Array(t),Ao=new Uint32Array(t),cl=new Uint16Array(t),zg=new Uint8Array(t),Iu(i,e)}function Iu(i,e){const t=i/4,n=i/2,r="count"in e,s=e.boundingData;for(let o=0;o<6;o++)kg[t+o]=s[o];if(r)if(e.buffer){const o=e.buffer;zg.set(new Uint8Array(o),i);for(let a=i,l=i+o.byteLength;a<l;a+=cr){const c=a/2;bn(c,cl)||(Ao[a/4+6]+=t)}return i+o.byteLength}else{const o=e.offset,a=e.count;return Ao[t+6]=o,cl[n+14]=a,cl[n+15]=Wl,i+cr}else{const o=e.left,a=e.right,l=e.splitAxis;let c;if(c=Iu(i+cr,o),c/4>LT)throw new Error("MeshBVH: Cannot store child pointer greater than 32 bits.");return Ao[t+6]=c/4,c=Iu(c,a),Ao[t+7]=l,c}}function DT(i,e){const t=(i.index?i.index.count:i.attributes.position.count)/3,n=t>2**16,r=n?4:2,s=e?new SharedArrayBuffer(t*r):new ArrayBuffer(t*r),o=n?new Uint32Array(s):new Uint16Array(s);for(let a=0,l=o.length;a<l;a++)o[a]=a;return o}function UT(i,e,t,n,r){const{maxDepth:s,verbose:o,maxLeafTris:a,strategy:l,onProgress:c,indirect:u}=r,h=i._indirectBuffer,d=i.geometry,f=d.index?d.index.array:null,g=u?PT:CT,x=eo(d),m=new Float32Array(6);let p=!1;const v=new Oc;return Fc(e,t,n,v.boundingData,m),y(v,t,n,m),v;function _(M){c&&c(M/x)}function y(M,T,S,E=null,L=0){if(!p&&L>=s&&(p=!0,o&&(console.warn(`MeshBVH: Max depth of ${s} reached when generating BVH. Consider increasing maxDepth.`),console.warn(d))),S<=a||L>=s)return _(T+S),M.offset=T,M.count=S,M;const b=AT(M.boundingData,E,e,T,S,l);if(b.axis===-1)return _(T+S),M.offset=T,M.count=S,M;const w=g(h,f,e,T,S,b);if(w===T||w===T+S)_(T+S),M.offset=T,M.count=S;else{M.splitAxis=b.axis;const U=new Oc,k=T,R=w-T;M.left=U,Fc(e,k,R,U.boundingData,m),y(U,k,R,m,L+1);const F=new Oc,B=w,V=S-R;M.right=F,Fc(e,B,V,F.boundingData,m),y(F,B,V,m,L+1)}return M}}function NT(i,e){const t=i.geometry;e.indirect&&(i._indirectBuffer=DT(t,e.useSharedArrayBuffer),ST(t)&&!e.verbose&&console.warn('MeshBVH: Provided geometry contains groups that do not fully span the vertex contents while using the "indirect" option. BVH may incorrectly report intersections on unrendered portions of the geometry.')),i._indirectBuffer||TT(t,e);const n=e.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,r=wT(t),s=e.indirect?Og(t):Bg(t);i._roots=s.map(o=>{const a=UT(i,r,o.offset,o.count,e),l=Lu(a),c=new n(cr*l);return IT(0,a,c),c})}class Si{constructor(){this.min=1/0,this.max=-1/0}setFromPointsField(e,t){let n=1/0,r=-1/0;for(let s=0,o=e.length;s<o;s++){const l=e[s][t];n=l<n?l:n,r=l>r?l:r}this.min=n,this.max=r}setFromPoints(e,t){let n=1/0,r=-1/0;for(let s=0,o=t.length;s<o;s++){const a=t[s],l=e.dot(a);n=l<n?l:n,r=l>r?l:r}this.min=n,this.max=r}isSeparated(e){return this.min>e.max||e.min>this.max}}Si.prototype.setFromBox=function(){const i=new C;return function(t,n){const r=n.min,s=n.max;let o=1/0,a=-1/0;for(let l=0;l<=1;l++)for(let c=0;c<=1;c++)for(let u=0;u<=1;u++){i.x=r.x*l+s.x*(1-l),i.y=r.y*c+s.y*(1-c),i.z=r.z*u+s.z*(1-u);const h=t.dot(i);o=Math.min(h,o),a=Math.max(h,a)}this.min=o,this.max=a}}();(function(){const i=new Si;return function(t,n){const r=t.points,s=t.satAxes,o=t.satBounds,a=n.points,l=n.satAxes,c=n.satBounds;for(let u=0;u<3;u++){const h=o[u],d=s[u];if(i.setFromPoints(d,a),h.isSeparated(i))return!1}for(let u=0;u<3;u++){const h=c[u],d=l[u];if(i.setFromPoints(d,r),h.isSeparated(i))return!1}}})();const FT=function(){const i=new C,e=new C,t=new C;return function(r,s,o){const a=r.start,l=i,c=s.start,u=e;t.subVectors(a,c),i.subVectors(r.end,r.start),e.subVectors(s.end,s.start);const h=t.dot(u),d=u.dot(l),f=u.dot(u),g=t.dot(l),m=l.dot(l)*f-d*d;let p,v;m!==0?p=(h*d-g*f)/m:p=0,v=(h+p*d)/f,o.x=p,o.y=v}}(),Lh=function(){const i=new Me,e=new C,t=new C;return function(r,s,o,a){FT(r,s,i);let l=i.x,c=i.y;if(l>=0&&l<=1&&c>=0&&c<=1){r.at(l,o),s.at(c,a);return}else if(l>=0&&l<=1){c<0?s.at(0,a):s.at(1,a),r.closestPointToPoint(a,!0,o);return}else if(c>=0&&c<=1){l<0?r.at(0,o):r.at(1,o),s.closestPointToPoint(o,!0,a);return}else{let u;l<0?u=r.start:u=r.end;let h;c<0?h=s.start:h=s.end;const d=e,f=t;if(r.closestPointToPoint(h,!0,e),s.closestPointToPoint(u,!0,t),d.distanceToSquared(h)<=f.distanceToSquared(u)){o.copy(d),a.copy(h);return}else{o.copy(u),a.copy(f);return}}}}(),OT=function(){const i=new C,e=new C,t=new ti,n=new Gi;return function(s,o){const{radius:a,center:l}=s,{a:c,b:u,c:h}=o;if(n.start=c,n.end=u,n.closestPointToPoint(l,!0,i).distanceTo(l)<=a||(n.start=c,n.end=h,n.closestPointToPoint(l,!0,i).distanceTo(l)<=a)||(n.start=u,n.end=h,n.closestPointToPoint(l,!0,i).distanceTo(l)<=a))return!0;const x=o.getPlane(t);if(Math.abs(x.distanceToPoint(l))<=a){const p=x.projectPoint(l,e);if(o.containsPoint(p))return!0}return!1}}(),BT=1e-15;function Bc(i){return Math.abs(i)<BT}class ui extends yn{constructor(...e){super(...e),this.isExtendedTriangle=!0,this.satAxes=new Array(4).fill().map(()=>new C),this.satBounds=new Array(4).fill().map(()=>new Si),this.points=[this.a,this.b,this.c],this.sphere=new hi,this.plane=new ti,this.needsUpdate=!0}intersectsSphere(e){return OT(e,this)}update(){const e=this.a,t=this.b,n=this.c,r=this.points,s=this.satAxes,o=this.satBounds,a=s[0],l=o[0];this.getNormal(a),l.setFromPoints(a,r);const c=s[1],u=o[1];c.subVectors(e,t),u.setFromPoints(c,r);const h=s[2],d=o[2];h.subVectors(t,n),d.setFromPoints(h,r);const f=s[3],g=o[3];f.subVectors(n,e),g.setFromPoints(f,r),this.sphere.setFromPoints(this.points),this.plane.setFromNormalAndCoplanarPoint(a,e),this.needsUpdate=!1}}ui.prototype.closestPointToSegment=function(){const i=new C,e=new C,t=new Gi;return function(r,s=null,o=null){const{start:a,end:l}=r,c=this.points;let u,h=1/0;for(let d=0;d<3;d++){const f=(d+1)%3;t.start.copy(c[d]),t.end.copy(c[f]),Lh(t,r,i,e),u=i.distanceToSquared(e),u<h&&(h=u,s&&s.copy(i),o&&o.copy(e))}return this.closestPointToPoint(a,i),u=a.distanceToSquared(i),u<h&&(h=u,s&&s.copy(i),o&&o.copy(a)),this.closestPointToPoint(l,i),u=l.distanceToSquared(i),u<h&&(h=u,s&&s.copy(i),o&&o.copy(l)),Math.sqrt(h)}}();ui.prototype.intersectsTriangle=function(){const i=new ui,e=new Array(3),t=new Array(3),n=new Si,r=new Si,s=new C,o=new C,a=new C,l=new C,c=new C,u=new Gi,h=new Gi,d=new Gi,f=new C;function g(x,m,p){const v=x.points;let _=0,y=-1;for(let M=0;M<3;M++){const{start:T,end:S}=u;T.copy(v[M]),S.copy(v[(M+1)%3]),u.delta(o);const E=Bc(m.distanceToPoint(T));if(Bc(m.normal.dot(o))&&E){p.copy(u),_=2;break}const L=m.intersectLine(u,f);if(!L&&E&&f.copy(T),(L||E)&&!Bc(f.distanceTo(S))){if(_<=1)(_===1?p.start:p.end).copy(f),E&&(y=_);else if(_>=2){(y===1?p.start:p.end).copy(f),_=2;break}if(_++,_===2&&y===-1)break}}return _}return function(m,p=null,v=!1){this.needsUpdate&&this.update(),m.isExtendedTriangle?m.needsUpdate&&m.update():(i.copy(m),i.update(),m=i);const _=this.plane,y=m.plane;if(Math.abs(_.normal.dot(y.normal))>1-1e-10){const M=this.satBounds,T=this.satAxes;t[0]=m.a,t[1]=m.b,t[2]=m.c;for(let L=0;L<4;L++){const b=M[L],w=T[L];if(n.setFromPoints(w,t),b.isSeparated(n))return!1}const S=m.satBounds,E=m.satAxes;e[0]=this.a,e[1]=this.b,e[2]=this.c;for(let L=0;L<4;L++){const b=S[L],w=E[L];if(n.setFromPoints(w,e),b.isSeparated(n))return!1}for(let L=0;L<4;L++){const b=T[L];for(let w=0;w<4;w++){const U=E[w];if(s.crossVectors(b,U),n.setFromPoints(s,e),r.setFromPoints(s,t),n.isSeparated(r))return!1}}return p&&(v||console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."),p.start.set(0,0,0),p.end.set(0,0,0)),!0}else{const M=g(this,y,h);if(M===1&&m.containsPoint(h.end))return p&&(p.start.copy(h.end),p.end.copy(h.end)),!0;if(M!==2)return!1;const T=g(m,_,d);if(T===1&&this.containsPoint(d.end))return p&&(p.start.copy(d.end),p.end.copy(d.end)),!0;if(T!==2)return!1;if(h.delta(a),d.delta(l),a.dot(l)<0){let k=d.start;d.start=d.end,d.end=k}const S=h.start.dot(a),E=h.end.dot(a),L=d.start.dot(a),b=d.end.dot(a),w=E<L,U=S<b;return S!==b&&L!==E&&w===U?!1:(p&&(c.subVectors(h.start,d.start),c.dot(a)>0?p.start.copy(h.start):p.start.copy(d.start),c.subVectors(h.end,d.end),c.dot(a)<0?p.end.copy(h.end):p.end.copy(d.end)),!0)}}}();ui.prototype.distanceToPoint=function(){const i=new C;return function(t){return this.closestPointToPoint(t,i),t.distanceTo(i)}}();ui.prototype.distanceToTriangle=function(){const i=new C,e=new C,t=["a","b","c"],n=new Gi,r=new Gi;return function(o,a=null,l=null){const c=a||l?n:null;if(this.intersectsTriangle(o,c))return(a||l)&&(a&&c.getCenter(a),l&&c.getCenter(l)),0;let u=1/0;for(let h=0;h<3;h++){let d;const f=t[h],g=o[f];this.closestPointToPoint(g,i),d=g.distanceToSquared(i),d<u&&(u=d,a&&a.copy(i),l&&l.copy(g));const x=this[f];o.closestPointToPoint(x,i),d=x.distanceToSquared(i),d<u&&(u=d,a&&a.copy(x),l&&l.copy(i))}for(let h=0;h<3;h++){const d=t[h],f=t[(h+1)%3];n.set(this[d],this[f]);for(let g=0;g<3;g++){const x=t[g],m=t[(g+1)%3];r.set(o[x],o[m]),Lh(n,r,i,e);const p=i.distanceToSquared(e);p<u&&(u=p,a&&a.copy(i),l&&l.copy(e))}}return Math.sqrt(u)}}();class Sn{constructor(e,t,n){this.isOrientedBox=!0,this.min=new C,this.max=new C,this.matrix=new Fe,this.invMatrix=new Fe,this.points=new Array(8).fill().map(()=>new C),this.satAxes=new Array(3).fill().map(()=>new C),this.satBounds=new Array(3).fill().map(()=>new Si),this.alignedSatBounds=new Array(3).fill().map(()=>new Si),this.needsUpdate=!1,e&&this.min.copy(e),t&&this.max.copy(t),n&&this.matrix.copy(n)}set(e,t,n){this.min.copy(e),this.max.copy(t),this.matrix.copy(n),this.needsUpdate=!0}copy(e){this.min.copy(e.min),this.max.copy(e.max),this.matrix.copy(e.matrix),this.needsUpdate=!0}}Sn.prototype.update=function(){return function(){const e=this.matrix,t=this.min,n=this.max,r=this.points;for(let c=0;c<=1;c++)for(let u=0;u<=1;u++)for(let h=0;h<=1;h++){const d=1*c|2*u|4*h,f=r[d];f.x=c?n.x:t.x,f.y=u?n.y:t.y,f.z=h?n.z:t.z,f.applyMatrix4(e)}const s=this.satBounds,o=this.satAxes,a=r[0];for(let c=0;c<3;c++){const u=o[c],h=s[c],d=1<<c,f=r[d];u.subVectors(a,f),h.setFromPoints(u,r)}const l=this.alignedSatBounds;l[0].setFromPointsField(r,"x"),l[1].setFromPointsField(r,"y"),l[2].setFromPointsField(r,"z"),this.invMatrix.copy(this.matrix).invert(),this.needsUpdate=!1}}();Sn.prototype.intersectsBox=function(){const i=new Si;return function(t){this.needsUpdate&&this.update();const n=t.min,r=t.max,s=this.satBounds,o=this.satAxes,a=this.alignedSatBounds;if(i.min=n.x,i.max=r.x,a[0].isSeparated(i)||(i.min=n.y,i.max=r.y,a[1].isSeparated(i))||(i.min=n.z,i.max=r.z,a[2].isSeparated(i)))return!1;for(let l=0;l<3;l++){const c=o[l],u=s[l];if(i.setFromBox(c,t),u.isSeparated(i))return!1}return!0}}();Sn.prototype.intersectsTriangle=function(){const i=new ui,e=new Array(3),t=new Si,n=new Si,r=new C;return function(o){this.needsUpdate&&this.update(),o.isExtendedTriangle?o.needsUpdate&&o.update():(i.copy(o),i.update(),o=i);const a=this.satBounds,l=this.satAxes;e[0]=o.a,e[1]=o.b,e[2]=o.c;for(let d=0;d<3;d++){const f=a[d],g=l[d];if(t.setFromPoints(g,e),f.isSeparated(t))return!1}const c=o.satBounds,u=o.satAxes,h=this.points;for(let d=0;d<3;d++){const f=c[d],g=u[d];if(t.setFromPoints(g,h),f.isSeparated(t))return!1}for(let d=0;d<3;d++){const f=l[d];for(let g=0;g<4;g++){const x=u[g];if(r.crossVectors(f,x),t.setFromPoints(r,e),n.setFromPoints(r,h),t.isSeparated(n))return!1}}return!0}}();Sn.prototype.closestPointToPoint=function(){return function(e,t){return this.needsUpdate&&this.update(),t.copy(e).applyMatrix4(this.invMatrix).clamp(this.min,this.max).applyMatrix4(this.matrix),t}}();Sn.prototype.distanceToPoint=function(){const i=new C;return function(t){return this.closestPointToPoint(t,i),t.distanceTo(i)}}();Sn.prototype.distanceToBox=function(){const i=["x","y","z"],e=new Array(12).fill().map(()=>new Gi),t=new Array(12).fill().map(()=>new Gi),n=new C,r=new C;return function(o,a=0,l=null,c=null){if(this.needsUpdate&&this.update(),this.intersectsBox(o))return(l||c)&&(o.getCenter(r),this.closestPointToPoint(r,n),o.closestPointToPoint(n,r),l&&l.copy(n),c&&c.copy(r)),0;const u=a*a,h=o.min,d=o.max,f=this.points;let g=1/0;for(let m=0;m<8;m++){const p=f[m];r.copy(p).clamp(h,d);const v=p.distanceToSquared(r);if(v<g&&(g=v,l&&l.copy(p),c&&c.copy(r),v<u))return Math.sqrt(v)}let x=0;for(let m=0;m<3;m++)for(let p=0;p<=1;p++)for(let v=0;v<=1;v++){const _=(m+1)%3,y=(m+2)%3,M=p<<_|v<<y,T=1<<m|p<<_|v<<y,S=f[M],E=f[T];e[x].set(S,E);const b=i[m],w=i[_],U=i[y],k=t[x],R=k.start,F=k.end;R[b]=h[b],R[w]=p?h[w]:d[w],R[U]=v?h[U]:d[w],F[b]=d[b],F[w]=p?h[w]:d[w],F[U]=v?h[U]:d[w],x++}for(let m=0;m<=1;m++)for(let p=0;p<=1;p++)for(let v=0;v<=1;v++){r.x=m?d.x:h.x,r.y=p?d.y:h.y,r.z=v?d.z:h.z,this.closestPointToPoint(r,n);const _=r.distanceToSquared(n);if(_<g&&(g=_,l&&l.copy(n),c&&c.copy(r),_<u))return Math.sqrt(_)}for(let m=0;m<12;m++){const p=e[m];for(let v=0;v<12;v++){const _=t[v];Lh(p,_,n,r);const y=n.distanceToSquared(r);if(y<g&&(g=y,l&&l.copy(n),c&&c.copy(r),y<u))return Math.sqrt(y)}}return Math.sqrt(g)}}();class Ih{constructor(e){this._getNewPrimitive=e,this._primitives=[]}getPrimitive(){const e=this._primitives;return e.length===0?this._getNewPrimitive():e.pop()}releasePrimitive(e){this._primitives.push(e)}}class kT extends Ih{constructor(){super(()=>new ui)}}const $n=new kT;class zT{constructor(){this.float32Array=null,this.uint16Array=null,this.uint32Array=null;const e=[];let t=null;this.setBuffer=n=>{t&&e.push(t),t=n,this.float32Array=new Float32Array(n),this.uint16Array=new Uint16Array(n),this.uint32Array=new Uint32Array(n)},this.clearBuffer=()=>{t=null,this.float32Array=null,this.uint16Array=null,this.uint32Array=null,e.length!==0&&this.setBuffer(e.pop())}}}const St=new zT;let sr,Ps;const fs=[],Ba=new Ih(()=>new zt);function HT(i,e,t,n,r,s){sr=Ba.getPrimitive(),Ps=Ba.getPrimitive(),fs.push(sr,Ps),St.setBuffer(i._roots[e]);const o=Du(0,i.geometry,t,n,r,s);St.clearBuffer(),Ba.releasePrimitive(sr),Ba.releasePrimitive(Ps),fs.pop(),fs.pop();const a=fs.length;return a>0&&(Ps=fs[a-1],sr=fs[a-2]),o}function Du(i,e,t,n,r=null,s=0,o=0){const{float32Array:a,uint16Array:l,uint32Array:c}=St;let u=i*2;if(bn(u,l)){const d=An(i,c),f=Bn(u,l);return At(i,a,sr),n(d,f,!1,o,s+i,sr)}else{let b=function(U){const{uint16Array:k,uint32Array:R}=St;let F=U*2;for(;!bn(F,k);)U=Yn(U),F=U*2;return An(U,R)},w=function(U){const{uint16Array:k,uint32Array:R}=St;let F=U*2;for(;!bn(F,k);)U=kn(U,R),F=U*2;return An(U,R)+Bn(F,k)};const d=Yn(i),f=kn(i,c);let g=d,x=f,m,p,v,_;if(r&&(v=sr,_=Ps,At(g,a,v),At(x,a,_),m=r(v),p=r(_),p<m)){g=f,x=d;const U=m;m=p,p=U,v=_}v||(v=sr,At(g,a,v));const y=bn(g*2,l),M=t(v,y,m,o+1,s+g);let T;if(M===op){const U=b(g),R=w(g)-U;T=n(U,R,!0,o+1,s+g,v)}else T=M&&Du(g,e,t,n,r,s,o+1);if(T)return!0;_=Ps,At(x,a,_);const S=bn(x*2,l),E=t(_,S,p,o+1,s+x);let L;if(E===op){const U=b(x),R=w(x)-U;L=n(U,R,!0,o+1,s+x,_)}else L=E&&Du(x,e,t,n,r,s,o+1);return!!L}}const po=new C,kc=new C;function GT(i,e,t={},n=0,r=1/0){const s=n*n,o=r*r;let a=1/0,l=null;if(i.shapecast({boundsTraverseOrder:u=>(po.copy(e).clamp(u.min,u.max),po.distanceToSquared(e)),intersectsBounds:(u,h,d)=>d<a&&d<o,intersectsTriangle:(u,h)=>{u.closestPointToPoint(e,po);const d=e.distanceToSquared(po);return d<a&&(kc.copy(po),a=d,l=h),d<s}}),a===1/0)return null;const c=Math.sqrt(a);return t.point?t.point.copy(kc):t.point=kc.clone(),t.distance=c,t.faceIndex=l,t}const ps=new C,ms=new C,gs=new C,ka=new Me,za=new Me,Ha=new Me,hp=new C,dp=new C,fp=new C,Ga=new C;function VT(i,e,t,n,r,s){let o;return s===Tn?o=i.intersectTriangle(n,t,e,!0,r):o=i.intersectTriangle(e,t,n,s!==vn,r),o===null?null:{distance:i.origin.distanceTo(r),point:r.clone()}}function WT(i,e,t,n,r,s,o,a,l){ps.fromBufferAttribute(e,s),ms.fromBufferAttribute(e,o),gs.fromBufferAttribute(e,a);const c=VT(i,ps,ms,gs,Ga,l);if(c){n&&(ka.fromBufferAttribute(n,s),za.fromBufferAttribute(n,o),Ha.fromBufferAttribute(n,a),c.uv=yn.getInterpolation(Ga,ps,ms,gs,ka,za,Ha,new Me)),r&&(ka.fromBufferAttribute(r,s),za.fromBufferAttribute(r,o),Ha.fromBufferAttribute(r,a),c.uv1=yn.getInterpolation(Ga,ps,ms,gs,ka,za,Ha,new Me)),t&&(hp.fromBufferAttribute(t,s),dp.fromBufferAttribute(t,o),fp.fromBufferAttribute(t,a),c.normal=yn.getInterpolation(Ga,ps,ms,gs,hp,dp,fp,new C),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const u={a:s,b:o,c:a,normal:new C,materialIndex:0};yn.getNormal(ps,ms,gs,u.normal),c.face=u,c.faceIndex=s}return c}function Xl(i,e,t,n,r){const s=n*3;let o=s+0,a=s+1,l=s+2;const c=i.index;i.index&&(o=c.getX(o),a=c.getX(a),l=c.getX(l));const{position:u,normal:h,uv:d,uv1:f}=i.attributes,g=WT(t,u,h,d,f,o,a,l,e);return g?(g.faceIndex=n,r&&r.push(g),g):null}function $t(i,e,t,n){const r=i.a,s=i.b,o=i.c;let a=e,l=e+1,c=e+2;t&&(a=t.getX(a),l=t.getX(l),c=t.getX(c)),r.x=n.getX(a),r.y=n.getY(a),r.z=n.getZ(a),s.x=n.getX(l),s.y=n.getY(l),s.z=n.getZ(l),o.x=n.getX(c),o.y=n.getY(c),o.z=n.getZ(c)}function XT(i,e,t,n,r,s){const{geometry:o,_indirectBuffer:a}=i;for(let l=n,c=n+r;l<c;l++)Xl(o,e,t,l,s)}function qT(i,e,t,n,r){const{geometry:s,_indirectBuffer:o}=i;let a=1/0,l=null;for(let c=n,u=n+r;c<u;c++){let h;h=Xl(s,e,t,c),h&&h.distance<a&&(l=h,a=h.distance)}return l}function YT(i,e,t,n,r,s,o){const{geometry:a}=t,{index:l}=a,c=a.attributes.position;for(let u=i,h=e+i;u<h;u++){let d;if(d=u,$t(o,d*3,l,c),o.needsUpdate=!0,n(o,d,r,s))return!0}return!1}function $T(i,e=null){e&&Array.isArray(e)&&(e=new Set(e));const t=i.geometry,n=t.index?t.index.array:null,r=t.attributes.position;let s,o,a,l,c=0;const u=i._roots;for(let d=0,f=u.length;d<f;d++)s=u[d],o=new Uint32Array(s),a=new Uint16Array(s),l=new Float32Array(s),h(0,c),c+=s.byteLength;function h(d,f,g=!1){const x=d*2;if(a[x+15]===Wl){const p=o[d+6],v=a[x+14];let _=1/0,y=1/0,M=1/0,T=-1/0,S=-1/0,E=-1/0;for(let L=3*p,b=3*(p+v);L<b;L++){let w=n[L];const U=r.getX(w),k=r.getY(w),R=r.getZ(w);U<_&&(_=U),U>T&&(T=U),k<y&&(y=k),k>S&&(S=k),R<M&&(M=R),R>E&&(E=R)}return l[d+0]!==_||l[d+1]!==y||l[d+2]!==M||l[d+3]!==T||l[d+4]!==S||l[d+5]!==E?(l[d+0]=_,l[d+1]=y,l[d+2]=M,l[d+3]=T,l[d+4]=S,l[d+5]=E,!0):!1}else{const p=d+8,v=o[d+6],_=p+f,y=v+f;let M=g,T=!1,S=!1;e?M||(T=e.has(_),S=e.has(y),M=!T&&!S):(T=!0,S=!0);const E=M||T,L=M||S;let b=!1;E&&(b=h(p,f,M));let w=!1;L&&(w=h(v,f,M));const U=b||w;if(U)for(let k=0;k<3;k++){const R=p+k,F=v+k,B=l[R],V=l[R+3],X=l[F],G=l[F+3];l[d+k]=B<X?B:X,l[d+k+3]=V>G?V:G}return U}}}const pp=new zt;function hr(i,e,t,n){return At(i,e,pp),t.intersectBox(pp,n)}function jT(i,e,t,n,r,s){const{geometry:o,_indirectBuffer:a}=i;for(let l=n,c=n+r;l<c;l++){let u=a?a[l]:l;Xl(o,e,t,u,s)}}function KT(i,e,t,n,r){const{geometry:s,_indirectBuffer:o}=i;let a=1/0,l=null;for(let c=n,u=n+r;c<u;c++){let h;h=Xl(s,e,t,o?o[c]:c),h&&h.distance<a&&(l=h,a=h.distance)}return l}function ZT(i,e,t,n,r,s,o){const{geometry:a}=t,{index:l}=a,c=a.attributes.position;for(let u=i,h=e+i;u<h;u++){let d;if(d=t.resolveTriangleIndex(u),$t(o,d*3,l,c),o.needsUpdate=!0,n(o,d,r,s))return!0}return!1}const mp=new C;function QT(i,e,t,n,r){St.setBuffer(i._roots[e]),Uu(0,i,t,n,r),St.clearBuffer()}function Uu(i,e,t,n,r){const{float32Array:s,uint16Array:o,uint32Array:a}=St,l=i*2;if(bn(l,o)){const u=An(i,a),h=Bn(l,o);XT(e,t,n,u,h,r)}else{const u=Yn(i);hr(u,s,n,mp)&&Uu(u,e,t,n,r);const h=kn(i,a);hr(h,s,n,mp)&&Uu(h,e,t,n,r)}}const gp=new C,JT=["x","y","z"];function eS(i,e,t,n){St.setBuffer(i._roots[e]);const r=Nu(0,i,t,n);return St.clearBuffer(),r}function Nu(i,e,t,n){const{float32Array:r,uint16Array:s,uint32Array:o}=St;let a=i*2;if(bn(a,s)){const c=An(i,o),u=Bn(a,s);return qT(e,t,n,c,u)}else{const c=Ph(i,o),u=JT[c],d=n.direction[u]>=0;let f,g;d?(f=Yn(i),g=kn(i,o)):(f=kn(i,o),g=Yn(i));const m=hr(f,r,n,gp)?Nu(f,e,t,n):null;if(m){const _=m.point[u];if(d?_<=r[g+c]:_>=r[g+c+3])return m}const v=hr(g,r,n,gp)?Nu(g,e,t,n):null;return m&&v?m.distance<=v.distance?m:v:m||v||null}}const Va=new zt,_s=new ui,xs=new ui,mo=new Fe,_p=new Sn,Wa=new Sn;function tS(i,e,t,n){St.setBuffer(i._roots[e]);const r=Fu(0,i,t,n);return St.clearBuffer(),r}function Fu(i,e,t,n,r=null){const{float32Array:s,uint16Array:o,uint32Array:a}=St;let l=i*2;if(r===null&&(t.boundingBox||t.computeBoundingBox(),_p.set(t.boundingBox.min,t.boundingBox.max,n),r=_p),bn(l,o)){const u=e.geometry,h=u.index,d=u.attributes.position,f=t.index,g=t.attributes.position,x=An(i,a),m=Bn(l,o);if(mo.copy(n).invert(),t.boundsTree)return At(i,s,Wa),Wa.matrix.copy(mo),Wa.needsUpdate=!0,t.boundsTree.shapecast({intersectsBounds:v=>Wa.intersectsBox(v),intersectsTriangle:v=>{v.a.applyMatrix4(n),v.b.applyMatrix4(n),v.c.applyMatrix4(n),v.needsUpdate=!0;for(let _=x*3,y=(m+x)*3;_<y;_+=3)if($t(xs,_,h,d),xs.needsUpdate=!0,v.intersectsTriangle(xs))return!0;return!1}});for(let p=x*3,v=(m+x)*3;p<v;p+=3){$t(_s,p,h,d),_s.a.applyMatrix4(mo),_s.b.applyMatrix4(mo),_s.c.applyMatrix4(mo),_s.needsUpdate=!0;for(let _=0,y=f.count;_<y;_+=3)if($t(xs,_,f,g),xs.needsUpdate=!0,_s.intersectsTriangle(xs))return!0}}else{const u=i+8,h=a[i+6];return At(u,s,Va),!!(r.intersectsBox(Va)&&Fu(u,e,t,n,r)||(At(h,s,Va),r.intersectsBox(Va)&&Fu(h,e,t,n,r)))}}const Xa=new Fe,zc=new Sn,go=new Sn,nS=new C,iS=new C,rS=new C,sS=new C;function oS(i,e,t,n={},r={},s=0,o=1/0){e.boundingBox||e.computeBoundingBox(),zc.set(e.boundingBox.min,e.boundingBox.max,t),zc.needsUpdate=!0;const a=i.geometry,l=a.attributes.position,c=a.index,u=e.attributes.position,h=e.index,d=$n.getPrimitive(),f=$n.getPrimitive();let g=nS,x=iS,m=null,p=null;r&&(m=rS,p=sS);let v=1/0,_=null,y=null;return Xa.copy(t).invert(),go.matrix.copy(Xa),i.shapecast({boundsTraverseOrder:M=>zc.distanceToBox(M),intersectsBounds:(M,T,S)=>S<v&&S<o?(T&&(go.min.copy(M.min),go.max.copy(M.max),go.needsUpdate=!0),!0):!1,intersectsRange:(M,T)=>{if(e.boundsTree)return e.boundsTree.shapecast({boundsTraverseOrder:E=>go.distanceToBox(E),intersectsBounds:(E,L,b)=>b<v&&b<o,intersectsRange:(E,L)=>{for(let b=E,w=E+L;b<w;b++){$t(f,3*b,h,u),f.a.applyMatrix4(t),f.b.applyMatrix4(t),f.c.applyMatrix4(t),f.needsUpdate=!0;for(let U=M,k=M+T;U<k;U++){$t(d,3*U,c,l),d.needsUpdate=!0;const R=d.distanceToTriangle(f,g,m);if(R<v&&(x.copy(g),p&&p.copy(m),v=R,_=U,y=b),R<s)return!0}}}});{const S=eo(e);for(let E=0,L=S;E<L;E++){$t(f,3*E,h,u),f.a.applyMatrix4(t),f.b.applyMatrix4(t),f.c.applyMatrix4(t),f.needsUpdate=!0;for(let b=M,w=M+T;b<w;b++){$t(d,3*b,c,l),d.needsUpdate=!0;const U=d.distanceToTriangle(f,g,m);if(U<v&&(x.copy(g),p&&p.copy(m),v=U,_=b,y=E),U<s)return!0}}}}}),$n.releasePrimitive(d),$n.releasePrimitive(f),v===1/0?null:(n.point?n.point.copy(x):n.point=x.clone(),n.distance=v,n.faceIndex=_,r&&(r.point?r.point.copy(p):r.point=p.clone(),r.point.applyMatrix4(Xa),x.applyMatrix4(Xa),r.distance=x.sub(r.point).length(),r.faceIndex=y),n)}function aS(i,e=null){e&&Array.isArray(e)&&(e=new Set(e));const t=i.geometry,n=t.index?t.index.array:null,r=t.attributes.position;let s,o,a,l,c=0;const u=i._roots;for(let d=0,f=u.length;d<f;d++)s=u[d],o=new Uint32Array(s),a=new Uint16Array(s),l=new Float32Array(s),h(0,c),c+=s.byteLength;function h(d,f,g=!1){const x=d*2;if(a[x+15]===Wl){const p=o[d+6],v=a[x+14];let _=1/0,y=1/0,M=1/0,T=-1/0,S=-1/0,E=-1/0;for(let L=p,b=p+v;L<b;L++){const w=3*i.resolveTriangleIndex(L);for(let U=0;U<3;U++){let k=w+U;k=n?n[k]:k;const R=r.getX(k),F=r.getY(k),B=r.getZ(k);R<_&&(_=R),R>T&&(T=R),F<y&&(y=F),F>S&&(S=F),B<M&&(M=B),B>E&&(E=B)}}return l[d+0]!==_||l[d+1]!==y||l[d+2]!==M||l[d+3]!==T||l[d+4]!==S||l[d+5]!==E?(l[d+0]=_,l[d+1]=y,l[d+2]=M,l[d+3]=T,l[d+4]=S,l[d+5]=E,!0):!1}else{const p=d+8,v=o[d+6],_=p+f,y=v+f;let M=g,T=!1,S=!1;e?M||(T=e.has(_),S=e.has(y),M=!T&&!S):(T=!0,S=!0);const E=M||T,L=M||S;let b=!1;E&&(b=h(p,f,M));let w=!1;L&&(w=h(v,f,M));const U=b||w;if(U)for(let k=0;k<3;k++){const R=p+k,F=v+k,B=l[R],V=l[R+3],X=l[F],G=l[F+3];l[d+k]=B<X?B:X,l[d+k+3]=V>G?V:G}return U}}}const xp=new C;function lS(i,e,t,n,r){St.setBuffer(i._roots[e]),Ou(0,i,t,n,r),St.clearBuffer()}function Ou(i,e,t,n,r){const{float32Array:s,uint16Array:o,uint32Array:a}=St,l=i*2;if(bn(l,o)){const u=An(i,a),h=Bn(l,o);jT(e,t,n,u,h,r)}else{const u=Yn(i);hr(u,s,n,xp)&&Ou(u,e,t,n,r);const h=kn(i,a);hr(h,s,n,xp)&&Ou(h,e,t,n,r)}}const vp=new C,cS=["x","y","z"];function uS(i,e,t,n){St.setBuffer(i._roots[e]);const r=Bu(0,i,t,n);return St.clearBuffer(),r}function Bu(i,e,t,n){const{float32Array:r,uint16Array:s,uint32Array:o}=St;let a=i*2;if(bn(a,s)){const c=An(i,o),u=Bn(a,s);return KT(e,t,n,c,u)}else{const c=Ph(i,o),u=cS[c],d=n.direction[u]>=0;let f,g;d?(f=Yn(i),g=kn(i,o)):(f=kn(i,o),g=Yn(i));const m=hr(f,r,n,vp)?Bu(f,e,t,n):null;if(m){const _=m.point[u];if(d?_<=r[g+c]:_>=r[g+c+3])return m}const v=hr(g,r,n,vp)?Bu(g,e,t,n):null;return m&&v?m.distance<=v.distance?m:v:m||v||null}}const qa=new zt,vs=new ui,ys=new ui,_o=new Fe,yp=new Sn,Ya=new Sn;function hS(i,e,t,n){St.setBuffer(i._roots[e]);const r=ku(0,i,t,n);return St.clearBuffer(),r}function ku(i,e,t,n,r=null){const{float32Array:s,uint16Array:o,uint32Array:a}=St;let l=i*2;if(r===null&&(t.boundingBox||t.computeBoundingBox(),yp.set(t.boundingBox.min,t.boundingBox.max,n),r=yp),bn(l,o)){const u=e.geometry,h=u.index,d=u.attributes.position,f=t.index,g=t.attributes.position,x=An(i,a),m=Bn(l,o);if(_o.copy(n).invert(),t.boundsTree)return At(i,s,Ya),Ya.matrix.copy(_o),Ya.needsUpdate=!0,t.boundsTree.shapecast({intersectsBounds:v=>Ya.intersectsBox(v),intersectsTriangle:v=>{v.a.applyMatrix4(n),v.b.applyMatrix4(n),v.c.applyMatrix4(n),v.needsUpdate=!0;for(let _=x,y=m+x;_<y;_++)if($t(ys,3*e.resolveTriangleIndex(_),h,d),ys.needsUpdate=!0,v.intersectsTriangle(ys))return!0;return!1}});for(let p=x,v=m+x;p<v;p++){const _=e.resolveTriangleIndex(p);$t(vs,3*_,h,d),vs.a.applyMatrix4(_o),vs.b.applyMatrix4(_o),vs.c.applyMatrix4(_o),vs.needsUpdate=!0;for(let y=0,M=f.count;y<M;y+=3)if($t(ys,y,f,g),ys.needsUpdate=!0,vs.intersectsTriangle(ys))return!0}}else{const u=i+8,h=a[i+6];return At(u,s,qa),!!(r.intersectsBox(qa)&&ku(u,e,t,n,r)||(At(h,s,qa),r.intersectsBox(qa)&&ku(h,e,t,n,r)))}}const $a=new Fe,Hc=new Sn,xo=new Sn,dS=new C,fS=new C,pS=new C,mS=new C;function gS(i,e,t,n={},r={},s=0,o=1/0){e.boundingBox||e.computeBoundingBox(),Hc.set(e.boundingBox.min,e.boundingBox.max,t),Hc.needsUpdate=!0;const a=i.geometry,l=a.attributes.position,c=a.index,u=e.attributes.position,h=e.index,d=$n.getPrimitive(),f=$n.getPrimitive();let g=dS,x=fS,m=null,p=null;r&&(m=pS,p=mS);let v=1/0,_=null,y=null;return $a.copy(t).invert(),xo.matrix.copy($a),i.shapecast({boundsTraverseOrder:M=>Hc.distanceToBox(M),intersectsBounds:(M,T,S)=>S<v&&S<o?(T&&(xo.min.copy(M.min),xo.max.copy(M.max),xo.needsUpdate=!0),!0):!1,intersectsRange:(M,T)=>{if(e.boundsTree){const S=e.boundsTree;return S.shapecast({boundsTraverseOrder:E=>xo.distanceToBox(E),intersectsBounds:(E,L,b)=>b<v&&b<o,intersectsRange:(E,L)=>{for(let b=E,w=E+L;b<w;b++){const U=S.resolveTriangleIndex(b);$t(f,3*U,h,u),f.a.applyMatrix4(t),f.b.applyMatrix4(t),f.c.applyMatrix4(t),f.needsUpdate=!0;for(let k=M,R=M+T;k<R;k++){const F=i.resolveTriangleIndex(k);$t(d,3*F,c,l),d.needsUpdate=!0;const B=d.distanceToTriangle(f,g,m);if(B<v&&(x.copy(g),p&&p.copy(m),v=B,_=k,y=b),B<s)return!0}}}})}else{const S=eo(e);for(let E=0,L=S;E<L;E++){$t(f,3*E,h,u),f.a.applyMatrix4(t),f.b.applyMatrix4(t),f.c.applyMatrix4(t),f.needsUpdate=!0;for(let b=M,w=M+T;b<w;b++){const U=i.resolveTriangleIndex(b);$t(d,3*U,c,l),d.needsUpdate=!0;const k=d.distanceToTriangle(f,g,m);if(k<v&&(x.copy(g),p&&p.copy(m),v=k,_=b,y=E),k<s)return!0}}}}}),$n.releasePrimitive(d),$n.releasePrimitive(f),v===1/0?null:(n.point?n.point.copy(x):n.point=x.clone(),n.distance=v,n.faceIndex=_,r&&(r.point?r.point.copy(p):r.point=p.clone(),r.point.applyMatrix4($a),x.applyMatrix4($a),r.distance=x.sub(r.point).length(),r.faceIndex=y),n)}function _S(){return typeof SharedArrayBuffer!="undefined"}const ko=new St.constructor,Ll=new St.constructor,tr=new Ih(()=>new zt),bs=new zt,Ms=new zt,Gc=new zt,Vc=new zt;let Wc=!1;function xS(i,e,t,n){if(Wc)throw new Error("MeshBVH: Recursive calls to bvhcast not supported.");Wc=!0;const r=i._roots,s=e._roots;let o,a=0,l=0;const c=new Fe().copy(t).invert();for(let u=0,h=r.length;u<h;u++){ko.setBuffer(r[u]),l=0;const d=tr.getPrimitive();At(0,ko.float32Array,d),d.applyMatrix4(c);for(let f=0,g=s.length;f<g&&(Ll.setBuffer(s[u]),o=Jn(0,0,t,c,n,a,l,0,0,d),Ll.clearBuffer(),l+=s[f].length,!o);f++);if(tr.releasePrimitive(d),ko.clearBuffer(),a+=r[u].length,o)break}return Wc=!1,o}function Jn(i,e,t,n,r,s=0,o=0,a=0,l=0,c=null,u=!1){let h,d;u?(h=Ll,d=ko):(h=ko,d=Ll);const f=h.float32Array,g=h.uint32Array,x=h.uint16Array,m=d.float32Array,p=d.uint32Array,v=d.uint16Array,_=i*2,y=e*2,M=bn(_,x),T=bn(y,v);let S=!1;if(T&&M)u?S=r(An(e,p),Bn(e*2,v),An(i,g),Bn(i*2,x),l,o+e,a,s+i):S=r(An(i,g),Bn(i*2,x),An(e,p),Bn(e*2,v),a,s+i,l,o+e);else if(T){const E=tr.getPrimitive();At(e,m,E),E.applyMatrix4(t);const L=Yn(i),b=kn(i,g);At(L,f,bs),At(b,f,Ms);const w=E.intersectsBox(bs),U=E.intersectsBox(Ms);S=w&&Jn(e,L,n,t,r,o,s,l,a+1,E,!u)||U&&Jn(e,b,n,t,r,o,s,l,a+1,E,!u),tr.releasePrimitive(E)}else{const E=Yn(e),L=kn(e,p);At(E,m,Gc),At(L,m,Vc);const b=c.intersectsBox(Gc),w=c.intersectsBox(Vc);if(b&&w)S=Jn(i,E,t,n,r,s,o,a,l+1,c,u)||Jn(i,L,t,n,r,s,o,a,l+1,c,u);else if(b)if(M)S=Jn(i,E,t,n,r,s,o,a,l+1,c,u);else{const U=tr.getPrimitive();U.copy(Gc).applyMatrix4(t);const k=Yn(i),R=kn(i,g);At(k,f,bs),At(R,f,Ms);const F=U.intersectsBox(bs),B=U.intersectsBox(Ms);S=F&&Jn(E,k,n,t,r,o,s,l,a+1,U,!u)||B&&Jn(E,R,n,t,r,o,s,l,a+1,U,!u),tr.releasePrimitive(U)}else if(w)if(M)S=Jn(i,L,t,n,r,s,o,a,l+1,c,u);else{const U=tr.getPrimitive();U.copy(Vc).applyMatrix4(t);const k=Yn(i),R=kn(i,g);At(k,f,bs),At(R,f,Ms);const F=U.intersectsBox(bs),B=U.intersectsBox(Ms);S=F&&Jn(L,k,n,t,r,o,s,l,a+1,U,!u)||B&&Jn(L,R,n,t,r,o,s,l,a+1,U,!u),tr.releasePrimitive(U)}}return S}const ja=new Sn,bp=new zt,vS={strategy:Ug,maxDepth:40,maxLeafTris:10,useSharedArrayBuffer:!1,setBoundingBox:!0,onProgress:null,indirect:!1,verbose:!0};class Dh{static serialize(e,t={}){t={cloneBuffers:!0,...t};const n=e.geometry,r=e._roots,s=e._indirectBuffer,o=n.getIndex();let a;return t.cloneBuffers?a={roots:r.map(l=>l.slice()),index:o.array.slice(),indirectBuffer:s?s.slice():null}:a={roots:r,index:o.array,indirectBuffer:s},a}static deserialize(e,t,n={}){n={setIndex:!0,indirect:Boolean(e.indirectBuffer),...n};const{index:r,roots:s,indirectBuffer:o}=e,a=new Dh(t,{...n,[Nc]:!0});if(a._roots=s,a._indirectBuffer=o||null,n.setIndex){const l=t.getIndex();if(l===null){const c=new Tt(e.index,1,!1);t.setIndex(c)}else l.array!==r&&(l.array.set(r),l.needsUpdate=!0)}return a}get indirect(){return!!this._indirectBuffer}constructor(e,t={}){if(e.isBufferGeometry){if(e.index&&e.index.isInterleavedBufferAttribute)throw new Error("MeshBVH: InterleavedBufferAttribute is not supported for the index attribute.")}else throw new Error("MeshBVH: Only BufferGeometries are supported.");if(t=Object.assign({...vS,[Nc]:!1},t),t.useSharedArrayBuffer&&!_S())throw new Error("MeshBVH: SharedArrayBuffer is not available.");this.geometry=e,this._roots=null,this._indirectBuffer=null,t[Nc]||(NT(this,t),!e.boundingBox&&t.setBoundingBox&&(e.boundingBox=this.getBoundingBox(new zt)));const{_indirectBuffer:n}=this;this.resolveTriangleIndex=t.indirect?r=>n[r]:r=>r}refit(e=null){return(this.indirect?aS:$T)(this,e)}traverse(e,t=0){const n=this._roots[t],r=new Uint32Array(n),s=new Uint16Array(n);o(0);function o(a,l=0){const c=a*2,u=s[c+15]===Wl;if(u){const h=r[a+6],d=s[c+14];e(l,u,new Float32Array(n,a*4,6),h,d)}else{const h=a+cr/4,d=r[a+6],f=r[a+7];e(l,u,new Float32Array(n,a*4,6),f)||(o(h,l+1),o(d,l+1))}}}raycast(e,t=ai){const n=this._roots,r=this.geometry,s=[],o=t.isMaterial,a=Array.isArray(t),l=r.groups,c=o?t.side:t,u=this.indirect?lS:QT;for(let h=0,d=n.length;h<d;h++){const f=a?t[l[h].materialIndex].side:c,g=s.length;if(u(this,h,f,e,s),a){const x=l[h].materialIndex;for(let m=g,p=s.length;m<p;m++)s[m].face.materialIndex=x}}return s}raycastFirst(e,t=ai){const n=this._roots,r=this.geometry,s=t.isMaterial,o=Array.isArray(t);let a=null;const l=r.groups,c=s?t.side:t,u=this.indirect?uS:eS;for(let h=0,d=n.length;h<d;h++){const f=o?t[l[h].materialIndex].side:c,g=u(this,h,f,e);g!=null&&(a==null||g.distance<a.distance)&&(a=g,o&&(g.face.materialIndex=l[h].materialIndex))}return a}intersectsGeometry(e,t){let n=!1;const r=this._roots,s=this.indirect?hS:tS;for(let o=0,a=r.length;o<a&&(n=s(this,o,e,t),!n);o++);return n}shapecast(e){const t=$n.getPrimitive(),n=this.indirect?ZT:YT;let{boundsTraverseOrder:r,intersectsBounds:s,intersectsRange:o,intersectsTriangle:a}=e;if(o&&a){const h=o;o=(d,f,g,x,m)=>h(d,f,g,x,m)?!0:n(d,f,this,a,g,x,t)}else o||(a?o=(h,d,f,g)=>n(h,d,this,a,f,g,t):o=(h,d,f)=>f);let l=!1,c=0;const u=this._roots;for(let h=0,d=u.length;h<d;h++){const f=u[h];if(l=HT(this,h,s,o,r,c),l)break;c+=f.byteLength}return $n.releasePrimitive(t),l}bvhcast(e,t,n){let{intersectsRanges:r,intersectsTriangles:s}=n;const o=$n.getPrimitive(),a=this.geometry.index,l=this.geometry.attributes.position,c=this.indirect?g=>{const x=this.resolveTriangleIndex(g);$t(o,x*3,a,l)}:g=>{$t(o,g*3,a,l)},u=$n.getPrimitive(),h=e.geometry.index,d=e.geometry.attributes.position,f=e.indirect?g=>{const x=e.resolveTriangleIndex(g);$t(u,x*3,h,d)}:g=>{$t(u,g*3,h,d)};if(s){const g=(x,m,p,v,_,y,M,T)=>{for(let S=p,E=p+v;S<E;S++){f(S),u.a.applyMatrix4(t),u.b.applyMatrix4(t),u.c.applyMatrix4(t),u.needsUpdate=!0;for(let L=x,b=x+m;L<b;L++)if(c(L),o.needsUpdate=!0,s(o,u,L,S,_,y,M,T))return!0}return!1};if(r){const x=r;r=function(m,p,v,_,y,M,T,S){return x(m,p,v,_,y,M,T,S)?!0:g(m,p,v,_,y,M,T,S)}}else r=g}return xS(this,e,t,r)}intersectsBox(e,t){return ja.set(e.min,e.max,t),ja.needsUpdate=!0,this.shapecast({intersectsBounds:n=>ja.intersectsBox(n),intersectsTriangle:n=>ja.intersectsTriangle(n)})}intersectsSphere(e){return this.shapecast({intersectsBounds:t=>e.intersectsBox(t),intersectsTriangle:t=>t.intersectsSphere(e)})}closestPointToGeometry(e,t,n={},r={},s=0,o=1/0){return(this.indirect?gS:oS)(this,e,t,n,r,s,o)}closestPointToPoint(e,t={},n=0,r=1/0){return GT(this,e,t,n,r)}getBoundingBox(e){return e.makeEmpty(),this._roots.forEach(n=>{At(0,new Float32Array(n),bp),e.union(bp)}),e}}function yS(i){switch(i){case 1:return"R";case 2:return"RG";case 3:return"RGBA";case 4:return"RGBA"}throw new Error}function bS(i){switch(i){case 1:return Fm;case 2:return Om;case 3:return vt;case 4:return vt}}function Mp(i){switch(i){case 1:return sh;case 2:return Ol;case 3:return Go;case 4:return Go}}class Hg extends Hn{constructor(){super(),this.minFilter=Qe,this.magFilter=Qe,this.generateMipmaps=!1,this.overrideItemSize=null,this._forcedType=null}updateFrom(e){const t=this.overrideItemSize,n=e.itemSize,r=e.count;if(t!==null){if(n*r%t!==0)throw new Error("VertexAttributeTexture: overrideItemSize must divide evenly into buffer length.");e.itemSize=t,e.count=r*n/t}const s=e.itemSize,o=e.count,a=e.normalized,l=e.array.constructor,c=l.BYTES_PER_ELEMENT;let u=this._forcedType,h=s;if(u===null)switch(l){case Float32Array:u=Je;break;case Uint8Array:case Uint16Array:case Uint32Array:u=On;break;case Int8Array:case Int16Array:case Int32Array:u=Uo;break}let d,f,g,x,m=yS(s);switch(u){case Je:g=1,f=bS(s),a&&c===1?(x=l,m+="8",l===Uint8Array?d=si:(d=mu,m+="_SNORM")):(x=Float32Array,m+="32F",d=Je);break;case Uo:m+=c*8+"I",g=a?Math.pow(2,l.BYTES_PER_ELEMENT*8-1):1,f=Mp(s),c===1?(x=Int8Array,d=mu):c===2?(x=Int16Array,d=Dm):(x=Int32Array,d=Uo);break;case On:m+=c*8+"UI",g=a?Math.pow(2,l.BYTES_PER_ELEMENT*8-1):1,f=Mp(s),c===1?(x=Uint8Array,d=si):c===2?(x=Uint16Array,d=Fl):(x=Uint32Array,d=On);break}h===3&&(f===vt||f===Go)&&(h=4);const p=Math.ceil(Math.sqrt(o))||1,v=h*p*p,_=new x(v),y=e.normalized;e.normalized=!1;for(let M=0;M<o;M++){const T=h*M;_[T]=e.getX(M)/g,s>=2&&(_[T+1]=e.getY(M)/g),s>=3&&(_[T+2]=e.getZ(M)/g,h===4&&(_[T+3]=1)),s>=4&&(_[T+3]=e.getW(M)/g)}e.normalized=y,this.internalFormat=m,this.format=f,this.type=d,this.image.width=p,this.image.height=p,this.image.data=_,this.needsUpdate=!0,this.dispose(),e.itemSize=n,e.count=r}}class MS extends Hg{constructor(){super(),this._forcedType=On}}class TS extends Hg{constructor(){super(),this._forcedType=Je}}class Gg{constructor(){this.index=new MS,this.position=new TS,this.bvhBounds=new Hn,this.bvhContents=new Hn,this._cachedIndexAttr=null,this.index.overrideItemSize=3}updateFrom(e){const{geometry:t}=e;if(wS(e,this.bvhBounds,this.bvhContents),this.position.updateFrom(t.attributes.position),e.indirect){const n=e._indirectBuffer;if(this._cachedIndexAttr===null||this._cachedIndexAttr.count!==n.length)if(t.index)this._cachedIndexAttr=t.index.clone();else{const r=Fg(Ng(t));this._cachedIndexAttr=new Tt(r,1,!1)}SS(t,n,this._cachedIndexAttr),this.index.updateFrom(this._cachedIndexAttr)}else this.index.updateFrom(t.index)}dispose(){const{index:e,position:t,bvhBounds:n,bvhContents:r}=this;e&&e.dispose(),t&&t.dispose(),n&&n.dispose(),r&&r.dispose()}}function SS(i,e,t){const n=t.array,r=i.index?i.index.array:null;for(let s=0,o=e.length;s<o;s++){const a=3*s,l=3*e[s];for(let c=0;c<3;c++)n[a+c]=r?r[l+c]:l+c}}function wS(i,e,t){const n=i._roots;if(n.length!==1)throw new Error("MeshBVHUniformStruct: Multi-root BVHs not supported.");const r=n[0],s=new Uint16Array(r),o=new Uint32Array(r),a=new Float32Array(r),l=r.byteLength/cr,c=2*Math.ceil(Math.sqrt(l/2)),u=new Float32Array(4*c*c),h=Math.ceil(Math.sqrt(l)),d=new Uint32Array(2*h*h);for(let f=0;f<l;f++){const g=f*cr/4,x=g*2,m=g;for(let p=0;p<3;p++)u[8*f+0+p]=a[m+0+p],u[8*f+4+p]=a[m+3+p];if(bn(x,s)){const p=Bn(x,s),v=An(g,o),_=4294901760|p;d[f*2+0]=_,d[f*2+1]=v}else{const p=4*kn(g,o)/cr,v=Ph(g,o);d[f*2+0]=v,d[f*2+1]=p}}e.image.data=u,e.image.width=c,e.image.height=c,e.format=vt,e.type=Je,e.internalFormat="RGBA32F",e.minFilter=Qe,e.magFilter=Qe,e.generateMipmaps=!1,e.needsUpdate=!0,e.dispose(),t.image.data=d,t.image.width=h,t.image.height=h,t.format=Ol,t.type=On,t.internalFormat="RG32UI",t.minFilter=Qe,t.magFilter=Qe,t.generateMipmaps=!1,t.needsUpdate=!0,t.dispose()}const ES=`

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
`,AS=`

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
`,RS=`
struct BVH {

	usampler2D index;
	sampler2D position;

	sampler2D bvhBounds;
	usampler2D bvhContents;

};
`,Vg=RS,Wg=`
	${ES}
	${AS}
`;class CS extends kt{customProgramCacheKey(){return"LightmapperMaterial|glsl3|mrt2"}constructor(e){const t=new Gg;t.updateFrom(e.bvh),super({transparent:!0,glslVersion:li,depthTest:!1,depthWrite:!1,uniforms:{bvh:{value:t},positions:{value:e.positions},normals:{value:e.normals},albedoTex:{value:e.albedoTex},emissiveTex:{value:e.emissiveTex},materialTextureSize:{value:e.materialTextureSize},invModelMatrix:{value:e.invModelMatrix},casts:{value:e.casts},bounces:{value:e.bounces},lightsTex:{value:e.lightsTex},lightCount:{value:e.lightCount},skyColor:{value:e.skyColor},skyIntensity:{value:e.skyIntensity},opacity:{value:1},sampleIndex:{value:0},directLightEnabled:{value:e.directLightEnabled},indirectLightEnabled:{value:e.indirectLightEnabled}},vertexShader:`
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
                ${Vg}
                ${Wg}

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
            `})}}const PS={point:0,directional:1,spot:2,area:3},Xc=4;function LS(i){const e=[];return i.traverse(t=>{var n;if(!!t.visible&&!((n=t.userData)!=null&&n.lightmapIgnore)){if(t instanceof Or)e.push({type:"point",position:t.getWorldPosition(new C),direction:new C(0,-1,0),color:t.color.clone().multiplyScalar(t.intensity),params:[0,0,0,0]});else if(t instanceof Qo){const r=new C(0,0,-1).transformDirection(t.matrixWorld).normalize();e.push({type:"directional",position:t.getWorldPosition(new C),direction:r,color:t.color.clone().multiplyScalar(t.intensity),params:[0,0,0,0]})}else if(t instanceof _h){const r=new C(0,0,-1).transformDirection(t.matrixWorld).normalize();e.push({type:"spot",position:t.getWorldPosition(new C),direction:r,color:t.color.clone().multiplyScalar(t.intensity),params:[Math.cos(t.angle*(1-t.penumbra)),Math.cos(t.angle),0,0]})}else if(t instanceof fg){const r=new C(0,0,-1).transformDirection(t.matrixWorld).normalize();e.push({type:"area",position:t.getWorldPosition(new C),direction:r,color:t.color.clone().multiplyScalar(t.intensity),params:[t.width,t.height,0,0]})}}}),e}function IS(i){const e=Math.max(1,i.length),t=new Float32Array(Xc*e*4);for(let r=0;r<i.length;r++){const s=i[r],o=r*Xc*4;t[o+0]=s.position.x,t[o+1]=s.position.y,t[o+2]=s.position.z,t[o+3]=PS[s.type],t[o+4]=s.direction.x,t[o+5]=s.direction.y,t[o+6]=s.direction.z,t[o+7]=s.params[0],t[o+8]=s.color.r,t[o+9]=s.color.g,t[o+10]=s.color.b,t[o+11]=s.params[1],t[o+12]=s.params[2],t[o+13]=s.params[3],t[o+14]=0,t[o+15]=0}const n=new Hn(t,Xc,e,vt,Je);return n.minFilter=Qe,n.magFilter=Qe,n.generateMipmaps=!1,n.wrapS=Yt,n.wrapT=Yt,n.needsUpdate=!0,{texture:n,count:i.length,capacity:e}}function DS(i){i.dispose()}const US=(i,e,t,n,r)=>{var V,X;const s=IS(r.lights),o=s.texture,a=new CS({bvh:n,invModelMatrix:new Fe().identity(),positions:e,normals:t,albedoTex:r.albedoTexture,emissiveTex:r.emissiveTexture,materialTextureSize:r.materialTextureSize,casts:r.casts,bounces:(V=r.bounces)!=null?V:1,lightsTex:o,lightCount:s.count,skyColor:r.skyColor,skyIntensity:r.skyIntensity,opacity:1,sampleIndex:0,directLightEnabled:r.directLightEnabled,indirectLightEnabled:r.indirectLightEnabled}),l=new X_(r.resolution,r.resolution,2,{type:Je,minFilter:it,magFilter:it,generateMipmaps:!1}),c=i.getRenderTarget(),u=new Re;i.getClearColor(u);const h=i.getClearAlpha();i.setRenderTarget(l),i.setClearColor(0,0),i.clear(),i.setRenderTarget(c),i.setClearColor(u,h);const d=new $(new Rn(2,2),a),f=new di;let g=0;const x=r.targetSamples|0,m=r.resolution;let p=Math.max(1,Math.min(m,(X=r.tileSize)!=null?X:m)),v=null,_=0;const y=G=>{const Y=Math.ceil(m/G);return{tilesX:Y,tilesY:Y,count:Y*Y}};let M=y(p);const T=a.uniforms.sampleIndex,S=a.uniforms.opacity;if(!T||!S)throw new Error("[baker] LightmapperMaterial missing required uniforms");const E=()=>{const G=performance.now(),Y=i.autoClear,J=i.getRenderTarget(),ne=i.getScissorTest();try{if(i.autoClear=!1,i.setRenderTarget(l),T.value=g,S.value=1/(g+1),p>=m)i.setScissorTest(!1),i.render(d,f);else{const z=_%M.tilesX,j=_/M.tilesX|0,ue=z*p,pe=j*p,he=Math.min(p,m-ue),ce=Math.min(p,m-pe);i.setScissor(ue,pe,he,ce),i.setScissorTest(!0),i.render(d,f)}}finally{i.setScissorTest(ne),i.setRenderTarget(J),i.autoClear=Y}_++;let ee=!1;return _>=M.count&&(_=0,g++,ee=!0,v!==null&&(p=v,M=y(p),v=null)),{ms:performance.now()-G,sampleCompleted:ee}},L=()=>{if(x>0&&g>=x)return{samples:g,done:!0,sampleComplete:!0,lastDrawMs:0};let G=0;for(;;){const Y=E();if(G=Y.ms,Y.sampleCompleted)break}return{samples:g,done:x>0&&g>=x,sampleComplete:!0,lastDrawMs:G}},b=G=>{if(x>0&&g>=x)return{samples:g,done:!0,sampleComplete:!0,lastDrawMs:0};const Y=performance.now()+Math.max(0,G);let J=0,ne=!1;do{const ee=E();if(J=ee.ms,ee.sampleCompleted&&(ne=!0,x>0&&g>=x))break}while(performance.now()<Y);return{samples:g,done:x>0&&g>=x,sampleComplete:ne,lastDrawMs:J}},w=G=>{const Y=Math.max(1,Math.min(m,G|0));Y===p&&v===null||(_===0?(p=Y,M=y(p),v=null):v=Y)},U=()=>{g=0,_=0},k=()=>{DS(o),l.dispose(),a.dispose(),d.geometry.dispose()},[R,F]=l.texture;if(!R||!F)throw new Error("[baker] WebGLMultipleRenderTargets did not allocate 2 textures");return{renderTarget:l,textures:{direct:R,indirect:F},render:L,renderTiled:b,setTileSize:w,reset:U,dispose:k}};class NS extends kt{customProgramCacheKey(){return"AOMaterial|glsl3|single-out"}constructor(e){const t=new Gg;t.updateFrom(e.bvh),super({transparent:!0,glslVersion:li,depthTest:!1,depthWrite:!1,uniforms:{bvh:{value:t},positions:{value:e.positions},normals:{value:e.normals},invModelMatrix:{value:e.invModelMatrix},aoSamples:{value:e.aoSamples},ambientDistance:{value:e.ambientDistance},opacity:{value:e.opacity},sampleIndex:{value:e.sampleIndex}},vertexShader:`
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
                ${Vg}
                ${Wg}

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
            `})}}const Xg=(i,e,t,n,r)=>{var U;const s=new NS({bvh:n,invModelMatrix:new Fe().identity(),positions:e,normals:t,aoSamples:r.aoSamples,ambientDistance:r.ambientDistance,opacity:1,sampleIndex:0}),o=new pn(r.resolution,r.resolution,{type:Je,minFilter:it,magFilter:it,generateMipmaps:!1}),a=i.getRenderTarget(),l=new Re;i.getClearColor(l);const c=i.getClearAlpha();i.setRenderTarget(o),i.setClearColor(0,0),i.clear(),i.setRenderTarget(a),i.setClearColor(l,c);const u=new $(new Rn(2,2),s),h=new di;let d=0;const f=r.targetSamples|0,g=r.resolution;let x=Math.max(1,Math.min(g,(U=r.tileSize)!=null?U:g)),m=null,p=0;const v=k=>{const R=Math.ceil(g/k);return{tilesX:R,tilesY:R,count:R*R}};let _=v(x);const y=s.uniforms.sampleIndex,M=s.uniforms.opacity;if(!y||!M)throw new Error("[baker] AOMaterial missing required uniforms");const T=()=>{const k=performance.now(),R=i.autoClear,F=i.getRenderTarget(),B=i.getScissorTest();try{if(i.autoClear=!1,i.setRenderTarget(o),y.value=d,M.value=1/(d+1),x>=g)i.setScissorTest(!1),i.render(u,h);else{const X=p%_.tilesX,G=p/_.tilesX|0,Y=X*x,J=G*x,ne=Math.min(x,g-Y),ee=Math.min(x,g-J);i.setScissor(Y,J,ne,ee),i.setScissorTest(!0),i.render(u,h)}}finally{i.setScissorTest(B),i.setRenderTarget(F),i.autoClear=R}p++;let V=!1;return p>=_.count&&(p=0,d++,V=!0,m!==null&&(x=m,_=v(x),m=null)),{ms:performance.now()-k,sampleCompleted:V}},S=()=>{if(f>0&&d>=f)return{samples:d,done:!0,sampleComplete:!0,lastDrawMs:0};let k=0;for(;;){const R=T();if(k=R.ms,R.sampleCompleted)break}return{samples:d,done:f>0&&d>=f,sampleComplete:!0,lastDrawMs:k}},E=k=>{if(f>0&&d>=f)return{samples:d,done:!0,sampleComplete:!0,lastDrawMs:0};const R=performance.now()+Math.max(0,k);let F=0,B=!1;do{const V=T();if(F=V.ms,V.sampleCompleted&&(B=!0,f>0&&d>=f))break}while(performance.now()<R);return{samples:d,done:f>0&&d>=f,sampleComplete:B,lastDrawMs:F}},L=k=>{const R=Math.max(1,Math.min(g,k|0));R===x&&m===null||(p===0?(x=R,_=v(x),m=null):m=R)},b=()=>{d=0,p=0},w=()=>{o.dispose(),s.dispose(),u.geometry.dispose()};return{texture:o.texture,render:S,renderTiled:E,setTileSize:L,reset:b,dispose:w}};class FS extends kt{customProgramCacheKey(){return"CompositeMaterial|glsl3|single-out"}constructor(e){super({glslVersion:li,transparent:!1,depthWrite:!1,depthTest:!1,uniforms:{directTex:{value:e.directTex},indirectTex:{value:e.indirectTex},aoTex:{value:e.aoTex},directIntensity:{value:e.directIntensity},giIntensity:{value:e.giIntensity},aoEnabled:{value:e.aoEnabled},aoIntensity:{value:e.aoIntensity},aoExponent:{value:e.aoExponent}},vertexShader:`
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
            `})}}const qg=(i,e,t,n)=>{const r=new pn(t,t,{type:fn,minFilter:it,magFilter:it,generateMipmaps:!1}),s=new FS({directTex:e.direct,indirectTex:e.indirect,aoTex:e.ao,directIntensity:n.directIntensity,giIntensity:n.giIntensity,aoEnabled:n.aoEnabled,aoIntensity:n.aoIntensity,aoExponent:n.aoExponent}),o=new $(new Rn(2,2),s),a=new di,l=s.uniforms,c=u=>{(u==null?void 0:u.directIntensity)!==void 0&&l.directIntensity&&(l.directIntensity.value=u.directIntensity),(u==null?void 0:u.giIntensity)!==void 0&&l.giIntensity&&(l.giIntensity.value=u.giIntensity),(u==null?void 0:u.aoEnabled)!==void 0&&l.aoEnabled&&(l.aoEnabled.value=u.aoEnabled),(u==null?void 0:u.aoIntensity)!==void 0&&l.aoIntensity&&(l.aoIntensity.value=u.aoIntensity),(u==null?void 0:u.aoExponent)!==void 0&&l.aoExponent&&(l.aoExponent.value=u.aoExponent),(u==null?void 0:u.aoTex)!==void 0&&l.aoTex&&(l.aoTex.value=u.aoTex);const h=i.getRenderTarget(),d=i.autoClear;try{i.autoClear=!0,i.setRenderTarget(r),i.render(o,a)}finally{i.setRenderTarget(h),i.autoClear=d}};return c(),{texture:r.texture,refresh:c,dispose:()=>{r.dispose(),s.dispose(),o.geometry.dispose()}}};class OS extends kt{customProgramCacheKey(){return"DilationMaterial|glsl3|single-out"}constructor(e={}){var t,n,r;super({glslVersion:li,blending:ri,transparent:!1,depthWrite:!1,depthTest:!1,uniforms:{map:{value:(t=e.map)!=null?t:null},positions:{value:(n=e.positions)!=null?n:null},resolution:{value:(r=e.resolution)!=null?r:1024}},vertexShader:`
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
            `})}}class BS extends kt{customProgramCacheKey(){return"DenoiseMaterial|glsl1|single-out"}constructor(e){var t,n,r;super({blending:ri,transparent:!1,depthWrite:!1,depthTest:!1,defines:{USE_SLIDER:0},uniforms:{sigma:{value:(t=e.sigma)!=null?t:5},threshold:{value:(n=e.threshold)!=null?n:.03},kSigma:{value:(r=e.kSigma)!=null?r:1},map:{value:e.map}},vertexShader:`
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
			`})}}const Tp=new $(new Rn(2,2)),kS=new di,Uh=async(i,e,t,n,r,s)=>{var _,y,M;const o=()=>new pn(n,n,{type:Je,minFilter:it,magFilter:it,generateMipmaps:!1}),a=o(),l=o(),c=(T,S)=>{const E=i.getRenderTarget();try{Tp.material=T,i.setRenderTarget(S),i.render(Tp,kS)}finally{i.setRenderTarget(E)}},u=new OS({positions:t,resolution:n});let h=a,d=l,f=e;const g=Math.max(0,r.dilationIterations)+(r.denoiseEnabled?1:0);let x=0;const m=u.uniforms.map;if(!m)throw new Error("[baker] DilationMaterial missing `map` uniform");for(let T=0;T<Math.max(0,r.dilationIterations);T++){m.value=f,c(u,d),f=d.texture;const S=h;h=d,d=S,x++,s==null||s(x/g),await new Promise(E=>requestAnimationFrame(E))}if(r.denoiseEnabled){const T=new BS({map:f,sigma:r.denoiseSigma,threshold:r.denoiseThreshold,kSigma:r.denoiseKSigma});c(T,d),f=d.texture,T.dispose();const S=h;h=d,d=S,x++,s==null||s(x/g),await new Promise(E=>requestAnimationFrame(E))}u.dispose();const p=r.dilationIterations>0||r.denoiseEnabled,v=p?h.texture:e;if(p){const T=Math.max(0,Math.floor(n/2)-2),S=new Float32Array(4*4*4);i.readRenderTargetPixels(h,T,T,4,4,S);let E=0,L=0,b=0;for(let w=0;w<16;w++)E+=(_=S[w*4])!=null?_:0,L+=(y=S[w*4+1])!=null?y:0,b+=(M=S[w*4+2])!=null?M:0}return{texture:v,dispose:()=>{a.dispose(),l.dispose()}}};function Yg(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),r=new Set(Object.keys(i[0].morphAttributes)),s={},o={},a=i[0].morphTargetsRelative,l=new sn;let c=0;for(let u=0;u<i.length;++u){const h=i[u];let d=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in h.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;s[f]===void 0&&(s[f]=[]),s[f].push(h.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in h.morphAttributes){if(!r.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(h.morphAttributes[f])}if(e){let f;if(t)f=h.index.count;else if(h.attributes.position!==void 0)f=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,u),c+=f}}if(t){let u=0;const h=[];for(let d=0;d<i.length;++d){const f=i[d].index;for(let g=0;g<f.count;++g)h.push(f.getX(g)+u);u+=i[d].attributes.position.count}l.setIndex(h)}for(const u in s){const h=Sp(s[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(const u in o){const h=o[u][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let d=0;d<h;++d){const f=[];for(let x=0;x<o[u].length;++x)f.push(o[u][x][d]);const g=Sp(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(g)}}return l}function Sp(i){let e,t,n,r=-1,s=0;for(let c=0;c<i.length;++c){const u=i[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=u.gpuType),r!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=u.count*t}const o=new e(s),a=new Tt(o,t,n);let l=0;for(let c=0;c<i.length;++c){const u=i[c];if(u.isInterleavedBufferAttribute){const h=l/t;for(let d=0,f=u.count;d<f;d++)for(let g=0;g<t;g++){const x=u.getComponent(d,g);a.setComponent(d+h,g,x)}}else o.set(u.array,l);l+=u.count*t}return r!==void 0&&(a.gpuType=r),a}function $g(i,e=1e-4){e=Math.max(e,Number.EPSILON);const t={},n=i.getIndex(),r=i.getAttribute("position"),s=n?n.count:r.count;let o=0;const a=Object.keys(i.attributes),l={},c={},u=[],h=["getX","getY","getZ","getW"],d=["setX","setY","setZ","setW"];for(let v=0,_=a.length;v<_;v++){const y=a[v],M=i.attributes[y];l[y]=new Tt(new M.array.constructor(M.count*M.itemSize),M.itemSize,M.normalized);const T=i.morphAttributes[y];T&&(c[y]=new Tt(new T.array.constructor(T.count*T.itemSize),T.itemSize,T.normalized))}const f=e*.5,g=Math.log10(1/e),x=Math.pow(10,g),m=f*x;for(let v=0;v<s;v++){const _=n?n.getX(v):v;let y="";for(let M=0,T=a.length;M<T;M++){const S=a[M],E=i.getAttribute(S),L=E.itemSize;for(let b=0;b<L;b++)y+=`${~~(E[h[b]](_)*x+m)},`}if(y in t)u.push(t[y]);else{for(let M=0,T=a.length;M<T;M++){const S=a[M],E=i.getAttribute(S),L=i.morphAttributes[S],b=E.itemSize,w=l[S],U=c[S];for(let k=0;k<b;k++){const R=h[k],F=d[k];if(w[F](o,E[R](_)),L)for(let B=0,V=L.length;B<V;B++)U[B][F](o,L[B][R](_))}}t[y]=o,u.push(o),o++}}const p=i.clone();for(const v in i.attributes){const _=l[v];if(p.setAttribute(v,new Tt(_.array.slice(0,o*_.itemSize),_.itemSize,_.normalized)),v in c)for(let y=0;y<c[v].length;y++){const M=c[v][y];p.morphAttributes[v][y]=new Tt(M.array.slice(0,o*M.itemSize),M.itemSize,M.normalized)}}return p.setIndex(u),p}function wp(i,e){if(e===p_)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===gu||e===km){let t=i.getIndex();if(t===null){const o=[],a=i.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,r=[];if(e===gu)for(let o=1;o<=n;o++)r.push(t.getX(0)),r.push(t.getX(o)),r.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(r.push(t.getX(o)),r.push(t.getX(o+1)),r.push(t.getX(o+2))):(r.push(t.getX(o+2)),r.push(t.getX(o+1)),r.push(t.getX(o)));r.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=i.clone();return s.setIndex(r),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}class ot extends Error{constructor(e,t,n){super(`[baker:${t}] ${e}${n?` (mesh: ${n})`:""}`),this.name="BakeError",this.phase=t,this.meshName=n}}const zS=new Set(["position","normal","uv","uv2","meshIndex"]),HS=i=>{const e=i.map((n,r)=>{let s=n.geometry.clone();for(const c of Object.keys(s.attributes))zS.has(c)||s.deleteAttribute(c);s.applyMatrix4(n.matrixWorld),s.index||(s=$g(s));const o=s.attributes.position;if(!o)throw new ot("mesh geometry has no position attribute","geometry",n.name);const a=o.count,l=new Float32Array(a);return l.fill(r),s.setAttribute("meshIndex",new Tt(l,1)),s}),t=Yg(e);if(!t){const n=i.map((r,s)=>r.name||`<unnamed#${s}>`).join(", ");throw new ot(`mergeGeometries returned null \u2014 incompatible attribute sets across meshes [${n}]`,"geometry")}return t},GS=i=>{const e=i.geometry;if(e.index)return e.index.count/3;const t=e.attributes.position;if(!t)throw new ot("mesh geometry missing position attribute","geometry",i.name);return t.count/3},zu={aR:1,aG:1,aB:1,eR:0,eG:0,eB:0},jg=i=>{var t;if(Array.isArray(i)){console.warn("[baker] material array detected; using slot 0 only \u2014 per-face material groups not yet supported");const n=i[0];return n?jg(n):zu}const e=i;if("emissive"in e&&e.emissive){const n=(t=e.emissiveIntensity)!=null?t:1;return{aR:e.color.r,aG:e.color.g,aB:e.color.b,eR:e.emissive.r*n,eG:e.emissive.g*n,eB:e.emissive.b*n}}return"color"in e&&e.color?{aR:e.color.r,aG:e.color.g,aB:e.color.b,eR:0,eG:0,eB:0}:(console.warn("[baker] material has no .color (likely ShaderMaterial); defaulting to white albedo"),zu)},VS=(i,e)=>{var h,d,f;const t=i.index;if(!t)throw new ot("mergeGeometry must produce an indexed geometry; got non-indexed","geometry");const n=i.attributes.meshIndex;if(!n)throw new ot("merged geometry is missing 'meshIndex' attribute \u2014 did mergeGeometry skip the per-vertex tag?","geometry");const r=e.map(GS),s=t.count/3,o=new Float32Array(s*3),a=new Float32Array(s*3),l=e.map(g=>jg(g.material)),c=t.array,u=n.array;for(let g=0;g<s;g++){const x=(h=c[g*3])!=null?h:0,m=((d=u[x])!=null?d:0)|0,p=(f=l[m])!=null?f:zu,v=g*3;o[v]=p.aR,o[v+1]=p.aG,o[v+2]=p.aB,a[v]=p.eR,a[v+1]=p.eG,a[v+2]=p.eB}return{albedo:o,emissive:a,totalTriangles:s,perMeshTriangleCounts:r}},Ep=(i,e)=>{const t=new Hn(i,e,e,vt,Je);return t.minFilter=Qe,t.magFilter=Qe,t.wrapS=Yt,t.wrapT=Yt,t.generateMipmaps=!1,t.needsUpdate=!0,t},WS=i=>{var o,a,l,c,u,h;const e=i.totalTriangles,t=Math.max(1,Math.ceil(Math.sqrt(e))),n=t*t,r=new Float32Array(n*4),s=new Float32Array(n*4);for(let d=0;d<e;d++){const f=d*3,g=d*4;r[g]=(o=i.albedo[f])!=null?o:0,r[g+1]=(a=i.albedo[f+1])!=null?a:0,r[g+2]=(l=i.albedo[f+2])!=null?l:0,r[g+3]=1,s[g]=(c=i.emissive[f])!=null?c:0,s[g+1]=(u=i.emissive[f+1])!=null?u:0,s[g+2]=(h=i.emissive[f+2])!=null?h:0,s[g+3]=1}return{albedoTexture:Ep(r,t),emissiveTexture:Ep(s,t),side:t}},qc=new C,Ap=new C,Rp=new C,Cp=new C,Pp=new C,Lp=new C;function XS(i){const e=i.geometry,t=e.attributes.position;if(!t)return 0;const n=i.matrixWorld;let r=0;const s=(o,a,l)=>(qc.fromBufferAttribute(t,o).applyMatrix4(n),Ap.fromBufferAttribute(t,a).applyMatrix4(n),Rp.fromBufferAttribute(t,l).applyMatrix4(n),Cp.subVectors(Ap,qc),Pp.subVectors(Rp,qc),Lp.crossVectors(Cp,Pp),Lp.length()*.5);if(e.index){const o=e.index.array;for(let a=0;a<o.length;a+=3)r+=s(o[a],o[a+1],o[a+2])}else for(let o=0;o<t.count;o+=3)r+=s(o,o+1,o+2);return r}function qS(i,e){var c;const t=(c=e.fillRatio)!=null?c:.95,n=e.atlasResolution*e.atlasResolution,r=e.texelsPerMeter*e.texelsPerMeter,o=[...i.map((u,h)=>{var m,p;const d=XS(u),f=(p=(m=e.perMeshScale)==null?void 0:m[u.uuid])!=null?p:1,g=d*r*f*f,x=n>0?g/n:0;return{mesh:u,inputIdx:h,surfaceArea:d,uvFraction:x}})].sort((u,h)=>h.uvFraction-u.uvFraction),a=[],l=new Array(i.length);for(const u of o){let h=u.uvFraction;if(h>t){const f=u.mesh.name||`Mesh ${u.inputIdx+1} (${u.mesh.geometry.type.replace("Geometry","")})`;console.warn(`[baker] mesh "${f}" wants ${(h*100).toFixed(0)}% of one ${e.atlasResolution}\xB2 atlas at ${e.texelsPerMeter} texels/m \u2014 clamping to ${(t*100).toFixed(0)}% (effective density reduced)`),h=t}let d=-1;for(let f=0;f<a.length;f++)if(a[f]+h<=t){a[f]=a[f]+h,d=f;break}d<0&&(d=a.length,a.push(h)),l[u.inputIdx]={atlasIdx:d,mesh:u.mesh,uvFraction:h,surfaceArea:u.surfaceArea}}return l}/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.6.9
*/var Ip=function(i){return URL.createObjectURL(new Blob([i],{type:"text/javascript"}))};try{URL.revokeObjectURL(Ip(""))}catch{Ip=function(e){return"data:application/javascript;charset=UTF-8,"+encodeURI(e)}}var wi=Uint8Array,Mn=Uint16Array,Yo=Uint32Array,Nh=new wi([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Fh=new wi([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Dp=new wi([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Kg=function(i,e){for(var t=new Mn(31),n=0;n<31;++n)t[n]=e+=1<<i[n-1];for(var r=new Yo(t[30]),n=1;n<30;++n)for(var s=t[n];s<t[n+1];++s)r[s]=s-t[n]<<5|n;return[t,r]},Zg=Kg(Nh,2),YS=Zg[0],Hu=Zg[1];YS[28]=258,Hu[258]=28;var $S=Kg(Fh,0),Up=$S[1],Gu=new Mn(32768);for(var Mt=0;Mt<32768;++Mt){var Zi=(Mt&43690)>>>1|(Mt&21845)<<1;Zi=(Zi&52428)>>>2|(Zi&13107)<<2,Zi=(Zi&61680)>>>4|(Zi&3855)<<4,Gu[Mt]=((Zi&65280)>>>8|(Zi&255)<<8)>>>1}var zo=function(i,e,t){for(var n=i.length,r=0,s=new Mn(e);r<n;++r)++s[i[r]-1];var o=new Mn(e);for(r=0;r<e;++r)o[r]=o[r-1]+s[r-1]<<1;var a;if(t){a=new Mn(1<<e);var l=15-e;for(r=0;r<n;++r)if(i[r])for(var c=r<<4|i[r],u=e-i[r],h=o[i[r]-1]++<<u,d=h|(1<<u)-1;h<=d;++h)a[Gu[h]>>>l]=c}else for(a=new Mn(n),r=0;r<n;++r)i[r]&&(a[r]=Gu[o[i[r]-1]++]>>>15-i[r]);return a},Dr=new wi(288);for(var Mt=0;Mt<144;++Mt)Dr[Mt]=8;for(var Mt=144;Mt<256;++Mt)Dr[Mt]=9;for(var Mt=256;Mt<280;++Mt)Dr[Mt]=7;for(var Mt=280;Mt<288;++Mt)Dr[Mt]=8;var Il=new wi(32);for(var Mt=0;Mt<32;++Mt)Il[Mt]=5;var jS=zo(Dr,9,0),KS=zo(Il,5,0),Qg=function(i){return(i/8|0)+(i&7&&1)},ZS=function(i,e,t){(e==null||e<0)&&(e=0),(t==null||t>i.length)&&(t=i.length);var n=new(i instanceof Mn?Mn:i instanceof Yo?Yo:wi)(t-e);return n.set(i.subarray(e,t)),n},Fi=function(i,e,t){t<<=e&7;var n=e/8|0;i[n]|=t,i[n+1]|=t>>>8},vo=function(i,e,t){t<<=e&7;var n=e/8|0;i[n]|=t,i[n+1]|=t>>>8,i[n+2]|=t>>>16},Yc=function(i,e){for(var t=[],n=0;n<i.length;++n)i[n]&&t.push({s:n,f:i[n]});var r=t.length,s=t.slice();if(!r)return[Oh,0];if(r==1){var o=new wi(t[0].s+1);return o[t[0].s]=1,[o,1]}t.sort(function(M,T){return M.f-T.f}),t.push({s:-1,f:25001});var a=t[0],l=t[1],c=0,u=1,h=2;for(t[0]={s:-1,f:a.f+l.f,l:a,r:l};u!=r-1;)a=t[t[c].f<t[h].f?c++:h++],l=t[c!=u&&t[c].f<t[h].f?c++:h++],t[u++]={s:-1,f:a.f+l.f,l:a,r:l};for(var d=s[0].s,n=1;n<r;++n)s[n].s>d&&(d=s[n].s);var f=new Mn(d+1),g=Vu(t[u-1],f,0);if(g>e){var n=0,x=0,m=g-e,p=1<<m;for(s.sort(function(T,S){return f[S.s]-f[T.s]||T.f-S.f});n<r;++n){var v=s[n].s;if(f[v]>e)x+=p-(1<<g-f[v]),f[v]=e;else break}for(x>>>=m;x>0;){var _=s[n].s;f[_]<e?x-=1<<e-f[_]++-1:++n}for(;n>=0&&x;--n){var y=s[n].s;f[y]==e&&(--f[y],++x)}g=e}return[new wi(f),g]},Vu=function(i,e,t){return i.s==-1?Math.max(Vu(i.l,e,t+1),Vu(i.r,e,t+1)):e[i.s]=t},Np=function(i){for(var e=i.length;e&&!i[--e];);for(var t=new Mn(++e),n=0,r=i[0],s=1,o=function(l){t[n++]=l},a=1;a<=e;++a)if(i[a]==r&&a!=e)++s;else{if(!r&&s>2){for(;s>138;s-=138)o(32754);s>2&&(o(s>10?s-11<<5|28690:s-3<<5|12305),s=0)}else if(s>3){for(o(r),--s;s>6;s-=6)o(8304);s>2&&(o(s-3<<5|8208),s=0)}for(;s--;)o(r);s=1,r=i[a]}return[t.subarray(0,n),e]},yo=function(i,e){for(var t=0,n=0;n<e.length;++n)t+=i[n]*e[n];return t},ul=function(i,e,t){var n=t.length,r=Qg(e+2);i[r]=n&255,i[r+1]=n>>>8,i[r+2]=i[r]^255,i[r+3]=i[r+1]^255;for(var s=0;s<n;++s)i[r+s+4]=t[s];return(r+4+n)*8},Fp=function(i,e,t,n,r,s,o,a,l,c,u){Fi(e,u++,t),++r[256];for(var h=Yc(r,15),d=h[0],f=h[1],g=Yc(s,15),x=g[0],m=g[1],p=Np(d),v=p[0],_=p[1],y=Np(x),M=y[0],T=y[1],S=new Mn(19),E=0;E<v.length;++E)S[v[E]&31]++;for(var E=0;E<M.length;++E)S[M[E]&31]++;for(var L=Yc(S,7),b=L[0],w=L[1],U=19;U>4&&!b[Dp[U-1]];--U);var k=c+5<<3,R=yo(r,Dr)+yo(s,Il)+o,F=yo(r,d)+yo(s,x)+o+14+3*U+yo(S,b)+(2*S[16]+3*S[17]+7*S[18]);if(k<=R&&k<=F)return ul(e,u,i.subarray(l,l+c));var B,V,X,G;if(Fi(e,u,1+(F<R)),u+=2,F<R){B=zo(d,f,0),V=d,X=zo(x,m,0),G=x;var Y=zo(b,w,0);Fi(e,u,_-257),Fi(e,u+5,T-1),Fi(e,u+10,U-4),u+=14;for(var E=0;E<U;++E)Fi(e,u+3*E,b[Dp[E]]);u+=3*U;for(var J=[v,M],ne=0;ne<2;++ne)for(var ee=J[ne],E=0;E<ee.length;++E){var z=ee[E]&31;Fi(e,u,Y[z]),u+=b[z],z>15&&(Fi(e,u,ee[E]>>>5&127),u+=ee[E]>>>12)}}else B=jS,V=Dr,X=KS,G=Il;for(var E=0;E<a;++E)if(n[E]>255){var z=n[E]>>>18&31;vo(e,u,B[z+257]),u+=V[z+257],z>7&&(Fi(e,u,n[E]>>>23&31),u+=Nh[z]);var j=n[E]&31;vo(e,u,X[j]),u+=G[j],j>3&&(vo(e,u,n[E]>>>5&8191),u+=Fh[j])}else vo(e,u,B[n[E]]),u+=V[n[E]];return vo(e,u,B[256]),u+V[256]},QS=new Yo([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),Oh=new wi(0),JS=function(i,e,t,n,r,s){var o=i.length,a=new wi(n+o+5*(1+Math.ceil(o/7e3))+r),l=a.subarray(n,a.length-r),c=0;if(!e||o<8)for(var u=0;u<=o;u+=65535){var h=u+65535;h<o?c=ul(l,c,i.subarray(u,h)):(l[u]=s,c=ul(l,c,i.subarray(u,o)))}else{for(var d=QS[e-1],f=d>>>13,g=d&8191,x=(1<<t)-1,m=new Mn(32768),p=new Mn(x+1),v=Math.ceil(t/3),_=2*v,y=function(be){return(i[be]^i[be+1]<<v^i[be+2]<<_)&x},M=new Yo(25e3),T=new Mn(288),S=new Mn(32),E=0,L=0,u=0,b=0,w=0,U=0;u<o;++u){var k=y(u),R=u&32767,F=p[k];if(m[R]=F,p[k]=R,w<=u){var B=o-u;if((E>7e3||b>24576)&&B>423){c=Fp(i,l,0,M,T,S,L,b,U,u-U,c),b=E=L=0,U=u;for(var V=0;V<286;++V)T[V]=0;for(var V=0;V<30;++V)S[V]=0}var X=2,G=0,Y=g,J=R-F&32767;if(B>2&&k==y(u-J))for(var ne=Math.min(f,B)-1,ee=Math.min(32767,u),z=Math.min(258,B);J<=ee&&--Y&&R!=F;){if(i[u+X]==i[u+X-J]){for(var j=0;j<z&&i[u+j]==i[u+j-J];++j);if(j>X){if(X=j,G=J,j>ne)break;for(var ue=Math.min(J,j-2),pe=0,V=0;V<ue;++V){var he=u-J+V+32768&32767,ce=m[he],de=he-ce+32768&32767;de>pe&&(pe=de,F=he)}}}R=F,F=m[R],J+=R-F+32768&32767}if(G){M[b++]=268435456|Hu[X]<<18|Up[G];var Ee=Hu[X]&31,H=Up[G]&31;L+=Nh[Ee]+Fh[H],++T[257+Ee],++S[H],w=u+X,++E}else M[b++]=i[u],++T[i[u]]}}c=Fp(i,l,s,M,T,S,L,b,U,u-U,c),!s&&c&7&&(c=ul(l,c+1,Oh))}return ZS(a,0,n+Qg(c)+r)},ew=function(){var i=1,e=0;return{p:function(t){for(var n=i,r=e,s=t.length,o=0;o!=s;){for(var a=Math.min(o+2655,s);o<a;++o)r+=n+=t[o];n=(n&65535)+15*(n>>16),r=(r&65535)+15*(r>>16)}i=n,e=r},d:function(){return i%=65521,e%=65521,(i&255)<<24|i>>>8<<16|(e&255)<<8|e>>>8}}},tw=function(i,e,t,n,r){return JS(i,e.level==null?6:e.level,e.mem==null?Math.ceil(Math.max(8,Math.min(13,Math.log(i.length)))*1.5):12+e.mem,t,n,!r)},nw=function(i,e,t){for(;t;++e)i[e]=t,t>>>=8},iw=function(i,e){var t=e.level,n=t==0?0:t<6?1:t==9?3:2;i[0]=120,i[1]=n<<6|(n?32-2*n:1)};function rw(i,e){e||(e={});var t=ew();t.p(i);var n=tw(i,e,2,4);return iw(n,e),nw(n,n.length-4,t.d()),n}var sw=typeof TextDecoder!="undefined"&&new TextDecoder,ow=0;try{sw.decode(Oh,{stream:!0}),ow=1}catch{}const aw=new TextEncoder,Jg=3;class lw{parse(e,t,n){if(!e||!(e.isWebGLRenderer||e.isDataTexture))throw Error("EXRExporter.parse: Unsupported first parameter, expected instance of WebGLRenderer or DataTexture.");if(e.isWebGLRenderer){const r=e,s=t,o=n;cw(s);const a=hw(s,o),l=fw(r,s,a),c=Op(l,a),u=Bp(c,a);return kp(u,a)}else if(e.isDataTexture){const r=e,s=t;uw(r);const o=dw(r,s),a=r.image.data,l=Op(a,o),c=Bp(l,o);return kp(c,o)}}}function cw(i){if(!i||!i.isWebGLRenderTarget)throw Error("EXRExporter.parse: Unsupported second parameter, expected instance of WebGLRenderTarget.");if(i.isWebGLCubeRenderTarget||i.isWebGL3DRenderTarget||i.isWebGLArrayRenderTarget)throw Error("EXRExporter.parse: Unsupported render target type, expected instance of WebGLRenderTarget.");if(i.texture.type!==Je&&i.texture.type!==fn)throw Error("EXRExporter.parse: Unsupported WebGLRenderTarget texture type.");if(i.texture.format!==vt)throw Error("EXRExporter.parse: Unsupported WebGLRenderTarget texture format, expected RGBAFormat.")}function uw(i){if(i.type!==Je&&i.type!==fn)throw Error("EXRExporter.parse: Unsupported DataTexture texture type.");if(i.format!==vt)throw Error("EXRExporter.parse: Unsupported DataTexture texture format, expected RGBAFormat.");if(!i.image.data)throw Error("EXRExporter.parse: Invalid DataTexture image data.");if(i.type===Je&&i.image.data.constructor.name!=="Float32Array")throw Error("EXRExporter.parse: DataTexture image data doesn't match type, expected 'Float32Array'.");if(i.type===fn&&i.image.data.constructor.name!=="Uint16Array")throw Error("EXRExporter.parse: DataTexture image data doesn't match type, expected 'Uint16Array'.")}function hw(i,e={}){const t={0:1,2:1,3:16},n=i.width,r=i.height,s=i.texture.type,o=i.texture.format,a=e.compression!==void 0?e.compression:Jg,l=e.type!==void 0?e.type:fn,c=l===Je?2:1,u=t[a],h=4;return{width:n,height:r,type:s,format:o,compression:a,blockLines:u,dataType:c,dataSize:2*c,numBlocks:Math.ceil(r/u),numInputChannels:4,numOutputChannels:h}}function dw(i,e={}){const t={0:1,2:1,3:16},n=i.image.width,r=i.image.height,s=i.type,o=i.format,a=e.compression!==void 0?e.compression:Jg,l=e.type!==void 0?e.type:fn,c=l===Je?2:1,u=t[a],h=4;return{width:n,height:r,type:s,format:o,compression:a,blockLines:u,dataType:c,dataSize:2*c,numBlocks:Math.ceil(r/u),numInputChannels:4,numOutputChannels:h}}function fw(i,e,t){let n;return t.type===Je?n=new Float32Array(t.width*t.height*t.numInputChannels):n=new Uint16Array(t.width*t.height*t.numInputChannels),i.readRenderTargetPixels(e,0,0,t.width,t.height,n),n}function Op(i,e){const t=e.width,n=e.height,r={r:0,g:0,b:0,a:0},s={value:0},o=e.numOutputChannels==4?1:0,a=e.type==Je?Mw:bw,l=e.dataType==1?xw:Wu,c=new Uint8Array(e.width*e.height*e.numOutputChannels*e.dataSize),u=new DataView(c.buffer);for(let h=0;h<n;++h)for(let d=0;d<t;++d){const f=h*t*4+d*4,g=a(i,f),x=a(i,f+1),m=a(i,f+2),p=a(i,f+3),v=(n-h-1)*t*(3+o)*e.dataSize;_w(r,g,x,m,p),s.value=v+d*e.dataSize,l(u,r.a,s),s.value=v+o*t*e.dataSize+d*e.dataSize,l(u,r.b,s),s.value=v+(1+o)*t*e.dataSize+d*e.dataSize,l(u,r.g,s),s.value=v+(2+o)*t*e.dataSize+d*e.dataSize,l(u,r.r,s)}return c}function Bp(i,e){let t,n,r=0;const s={data:new Array,totalSize:0},o=e.width*e.numOutputChannels*e.blockLines*e.dataSize;switch(e.compression){case 0:t=pw;break;case 2:case 3:t=mw;break}e.compression!==0&&(n=new Uint8Array(o));for(let a=0;a<e.numBlocks;++a){const l=i.subarray(o*a,o*(a+1)),c=t(l,n);r+=c.length,s.data.push({dataChunk:c,size:c.length})}return s.totalSize=r,s}function pw(i){return i}function mw(i,e){let t=0,n=Math.floor((i.length+1)/2),r=0;const s=i.length-1;for(;!(r>s||(e[t++]=i[r++],r>s));)e[n++]=i[r++];let o=e[0];for(let l=1;l<e.length;l++){const c=e[l]-o+384;o=e[l],e[l]=c}return rw(e)}function gw(i,e,t){const n={value:0},r=new DataView(i.buffer);nt(r,20000630,n),nt(r,2,n),Vt(r,"compression",n),Vt(r,"compression",n),nt(r,1,n),Ro(r,t.compression,n),Vt(r,"screenWindowCenter",n),Vt(r,"v2f",n),nt(r,8,n),nt(r,0,n),nt(r,0,n),Vt(r,"screenWindowWidth",n),Vt(r,"float",n),nt(r,4,n),Wu(r,1,n),Vt(r,"pixelAspectRatio",n),Vt(r,"float",n),nt(r,4,n),Wu(r,1,n),Vt(r,"lineOrder",n),Vt(r,"lineOrder",n),nt(r,1,n),Ro(r,0,n),Vt(r,"dataWindow",n),Vt(r,"box2i",n),nt(r,16,n),nt(r,0,n),nt(r,0,n),nt(r,t.width-1,n),nt(r,t.height-1,n),Vt(r,"displayWindow",n),Vt(r,"box2i",n),nt(r,16,n),nt(r,0,n),nt(r,0,n),nt(r,t.width-1,n),nt(r,t.height-1,n),Vt(r,"channels",n),Vt(r,"chlist",n),nt(r,t.numOutputChannels*18+1,n),Vt(r,"A",n),nt(r,t.dataType,n),n.value+=4,nt(r,1,n),nt(r,1,n),Vt(r,"B",n),nt(r,t.dataType,n),n.value+=4,nt(r,1,n),nt(r,1,n),Vt(r,"G",n),nt(r,t.dataType,n),n.value+=4,nt(r,1,n),nt(r,1,n),Vt(r,"R",n),nt(r,t.dataType,n),n.value+=4,nt(r,1,n),nt(r,1,n),Ro(r,0,n),Ro(r,0,n);let s=n.value+t.numBlocks*8;for(let o=0;o<e.data.length;++o)vw(r,s,n),s+=e.data[o].size+8}function kp(i,e){const t=e.numBlocks*8,n=259+18*e.numOutputChannels,r={value:n+t},s=new Uint8Array(n+t+i.totalSize+e.numBlocks*8),o=new DataView(s.buffer);gw(s,i,e);for(let a=0;a<i.data.length;++a){const l=i.data[a].dataChunk,c=i.data[a].size;nt(o,a*e.blockLines,r),nt(o,c,r),s.set(l,r.value),r.value+=c}return s}function _w(i,e,t,n,r){i.r=e,i.g=t,i.b=n,i.a=r}function Ro(i,e,t){i.setUint8(t.value,e),t.value+=1}function nt(i,e,t){i.setUint32(t.value,e,!0),t.value+=4}function xw(i,e,t){i.setUint16(t.value,wo.toHalfFloat(e),!0),t.value+=2}function Wu(i,e,t){i.setFloat32(t.value,e,!0),t.value+=4}function vw(i,e,t){i.setBigUint64(t.value,BigInt(e),!0),t.value+=8}function Vt(i,e,t){const n=aw.encode(e+"\0");for(let r=0;r<n.length;++r)Ro(i,n[r],t)}function yw(i){const e=(i&31744)>>10,t=i&1023;return(i>>15?-1:1)*(e?e===31?t?NaN:1/0:Math.pow(2,e-15)*(1+t/1024):6103515625e-14*(t/1024))}function bw(i,e){return yw(i[e])}function Mw(i,e){return i[e]}const zp=new $(new Rn(2,2)),Tw=new di,Hp=new kt({glslVersion:li,blending:ri,transparent:!1,depthWrite:!1,depthTest:!1,uniforms:{map:{value:null}},vertexShader:`
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
    `});function Bh(i,e,t){const n=new pn(t,t,{type:Je,minFilter:it,magFilter:it}),r=Hp.uniforms.map;if(!r)throw new Error("[baker] export passthrough material missing `map` uniform");r.value=e,zp.material=Hp;const s=i.getRenderTarget(),o=i.autoClear;try{i.autoClear=!0,i.setRenderTarget(n),i.render(zp,Tw)}finally{i.setRenderTarget(s),i.autoClear=o}return n}function kh(i,e){const t=URL.createObjectURL(i),n=document.createElement("a");n.href=t,n.download=e,document.body.appendChild(n),n.click(),n.remove(),setTimeout(()=>URL.revokeObjectURL(t),0)}const zh=(i,e)=>i.toLowerCase().endsWith(`.${e}`)?i:`${i}.${e}`;async function Sw(i,e,t,n){var c,u,h;const r=Bh(i,e,t),s=new Float32Array(t*t*4);i.readRenderTargetPixels(r,0,0,t,t,s),r.dispose();const o=new Uint8ClampedArray(t*t*4);for(let d=0;d<t;d++){const f=(t-1-d)*t*4,g=d*t*4;for(let x=0;x<t;x++){const m=f+x*4,p=g+x*4,v=Math.max((c=s[m])!=null?c:0,0),_=Math.max((u=s[m+1])!=null?u:0,0),y=Math.max((h=s[m+2])!=null?h:0,0);o[p]=Math.pow(v/(1+v),1/2.2)*255,o[p+1]=Math.pow(_/(1+_),1/2.2)*255,o[p+2]=Math.pow(y/(1+y),1/2.2)*255,o[p+3]=255}}const a=document.createElement("canvas");a.width=t,a.height=t;const l=a.getContext("2d");if(!l)throw new Error("exportPNG: 2D context unavailable");l.putImageData(new ImageData(o,t,t),0,0),await new Promise((d,f)=>{a.toBlob(g=>{if(!g){f(new Error("exportPNG: toBlob returned null"));return}kh(g,zh(n,"png")),d()},"image/png")})}function ww(i,e,t,n){const r=Bh(i,e,t),s=new lw().parse(i,r);r.dispose(),kh(new Blob([s],{type:"image/x-exr"}),zh(n,"exr"))}function Ew(i,e,t,n){const r=Bh(i,e,t),s=new Float32Array(t*t*4);i.readRenderTargetPixels(r,0,0,t,t,s),r.dispose(),kh(new Blob([s.buffer],{type:"application/octet-stream"}),zh(n,"bin"))}async function e0(i,e,t,n,r){switch(r){case"png":await Sw(i,e,t,n);return;case"exr":ww(i,e,t,n);return;case"bin":Ew(i,e,t,n);return}}class Aw extends kt{constructor(e){super({glslVersion:li,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1,side:0,uniforms:{uTexelsPerMeter:{value:e.texelsPerMeter},uLightmapSize:{value:e.lightmapSize}},vertexShader:`
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
            `})}setTexelsPerMeter(e){const t=this.uniforms.uTexelsPerMeter;t&&(t.value=e)}setLightmapSize(e){const t=this.uniforms.uLightmapSize;t&&(t.value=e)}}class Rw extends kt{constructor(e){super({glslVersion:li,uniforms:{tSource:{value:e}},vertexShader:`
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
      `})}customProgramCacheKey(){return"DownscaleMaterial|glsl3|single-out"}}const Cw=new di;function Pw(i,e,t){const n=new pn(t,t,{type:fn,minFilter:it,magFilter:it,generateMipmaps:!1}),r=new Rw(e),s=new $(new Rn(2,2),r),o=()=>{const l=i.getRenderTarget();try{i.setRenderTarget(n),i.render(s,Cw)}finally{i.setRenderTarget(l)}},a=l=>{const c=r.uniforms.tSource;if(!c)throw new Error("[baker] DownscaleMaterial missing tSource uniform");c.value=l};return o(),{texture:n.texture,refresh:o,setSource:a,dispose:()=>{n.dispose(),r.dispose(),s.geometry.dispose()}}}function Lw(i,e,t){var s,o;const n=[],r=new Map;for(const a of i){const l=(s=e[a.uuid])!=null?s:{};if(l.exclude===!0){n.push(a);continue}const c=(o=l.resolution)!=null?o:t;r.has(c)||r.set(c,[]),r.get(c).push(a)}return r.size===0&&n.length<i.length&&r.set(t,i.filter(a=>{var l;return!((l=e[a.uuid])!=null&&l.exclude)})),{excluded:n,groups:r,resolution:t}}function Iw(i,e,t,n){var c,u;const r=[],s=[];for(const h of i)((c=e[h.uuid])==null?void 0:c.exclude)===!0?r.push(h):s.push(h);const o={};for(const h of s){const d=(u=e[h.uuid])==null?void 0:u.density;d!==void 0&&d!==1&&(o[h.uuid]=d)}const a=new Map;if(s.length===0)return{excluded:r,groups:a,resolution:t};const l=qS(s,{atlasResolution:t,texelsPerMeter:n,perMeshScale:o});for(let h=0;h<s.length;h++){const d=l[h];a.has(d.atlasIdx)||a.set(d.atlasIdx,[]),a.get(d.atlasIdx).push(d.mesh)}return{excluded:r,groups:a,resolution:t}}const Dw={discrete:{initialTileSize:1024,maxBatchMs:500},integrated:{initialTileSize:256,maxBatchMs:250},unknown:{initialTileSize:256,maxBatchMs:250}};function Uw(i){const e=i.toLowerCase();return["intel hd","intel uhd","iris","vega","mali","adreno","powervr"].some(r=>e.includes(r))?"integrated":["geforce","rtx","gtx","quadro","radeon rx","radeon pro","apple m"].some(r=>e.includes(r))?"discrete":"unknown"}function Nw(i){var a,l;const e=i.getContext(),t=e.getExtension("WEBGL_debug_renderer_info"),n=t?String((a=e.getParameter(t.UNMASKED_VENDOR_WEBGL))!=null?a:""):"",r=t?String((l=e.getParameter(t.UNMASKED_RENDERER_WEBGL))!=null?l:""):"",s=Uw(r),o=Dw[s];return{tier:s,vendor:n,renderer:r,initialTileSize:o.initialTileSize,maxBatchMs:o.maxBatchMs,maxFrameMs:16}}const Gp=(i,e)=>new Re(i!=null?i:e).convertSRGBToLinear(),Vp=i=>i>0&&(i&i-1)===0;function Fw(i){var l,c,u,h,d,f,g,x,m,p,v,_;const e=(l=i.samples)!=null?l:96;if(!Number.isFinite(e)||e<1||e>4096)throw new ot(`samples must be 1-4096, got ${e}`,"validation");const t=(c=i.castsPerFrame)!=null?c:5;if(!Number.isFinite(t)||t<1||t>256)throw new ot(`castsPerFrame must be 1-256, got ${t}`,"validation");const n=(u=i.ao)==null?void 0:u.samples;if(n!==void 0&&(!Number.isFinite(n)||n<0||n>64))throw new ot(`ao.samples must be 0-64, got ${n}`,"validation");const r=(h=i.bounces)!=null?h:1;if(!Number.isInteger(r)||r<0||r>8)throw new ot(`bounces must be integer 0-8, got ${r}`,"validation");const s=(d=i.resolution)!=null?d:1024;if(!Number.isFinite(s)||s<16||s>4096)throw new ot(`resolution must be 16-4096, got ${s}`,"validation");if(!Vp(s))throw new ot(`resolution must be a power of two, got ${s}`,"validation");const o=(f=i.superSample)!=null?f:1;if(!Number.isInteger(o)||o<1||o>4)throw new ot(`superSample must be integer 1-4, got ${o}`,"validation");if(s*o>4096)throw new ot(`resolution \xD7 superSample must be \u2264 4096, got ${s*o}`,"validation");if(((g=i.light)==null?void 0:g.intensity)!==void 0&&i.light.intensity<0)throw new ot(`light.intensity must be >= 0, got ${i.light.intensity}`,"validation");if(((x=i.light)==null?void 0:x.size)!==void 0&&i.light.size<0)throw new ot(`light.size must be >= 0, got ${i.light.size}`,"validation");if(((m=i.gi)==null?void 0:m.intensity)!==void 0&&i.gi.intensity<0)throw new ot(`gi.intensity must be >= 0, got ${i.gi.intensity}`,"validation");if(((p=i.gi)==null?void 0:p.skyIntensity)!==void 0&&i.gi.skyIntensity<0)throw new ot(`gi.skyIntensity must be >= 0, got ${i.gi.skyIntensity}`,"validation");if(((v=i.ao)==null?void 0:v.distance)!==void 0&&i.ao.distance<0)throw new ot(`ao.distance must be >= 0, got ${i.ao.distance}`,"validation");if(i.texelsPerMeter!==void 0){const M=i.texelsPerMeter;if(!Number.isFinite(M)||M<=0||M>1024)throw new ot(`texelsPerMeter must be in (0, 1024], got ${M}`,"validation")}for(const[M,T]of Object.entries((_=i.perMesh)!=null?_:{})){const S=T.resolution;if(S!==void 0){if(!Number.isFinite(S)||S<128||S>4096)throw new ot(`perMesh[${M}].resolution must be 128-4096, got ${S}`,"validation");if(!Vp(S))throw new ot(`perMesh[${M}].resolution must be a power of two, got ${S}`,"validation")}const E=T.density;if(E!==void 0&&(!Number.isFinite(E)||E<.1||E>10))throw new ot(`perMesh[${M}].density must be in [0.1, 10], got ${E}`,"validation")}i.texelsPerMeter;const a=i.timeoutProtection;if((a==null?void 0:a.initialTileSize)!==void 0){const M=a.initialTileSize;if(!Number.isFinite(M)||M<16||M>4096)throw new ot(`timeoutProtection.initialTileSize must be 16-4096, got ${M}`,"validation")}if((a==null?void 0:a.maxBatchMs)!==void 0&&(!Number.isFinite(a.maxBatchMs)||a.maxBatchMs<=0))throw new ot(`timeoutProtection.maxBatchMs must be > 0, got ${a.maxBatchMs}`,"validation");if((a==null?void 0:a.maxFrameMs)!==void 0&&(!Number.isFinite(a.maxFrameMs)||a.maxFrameMs<=0))throw new ot(`timeoutProtection.maxFrameMs must be > 0, got ${a.maxFrameMs}`,"validation")}function Ow(i,e){var n,r,s,o,a;const t=(n=i==null?void 0:i.safeMode)!=null?n:!1;return{safeMode:t,initialTileSize:(r=i==null?void 0:i.initialTileSize)!=null?r:t?64:e.initialTileSize,maxBatchMs:(s=i==null?void 0:i.maxBatchMs)!=null?s:t?100:e.maxBatchMs,maxFrameMs:(o=i==null?void 0:i.maxFrameMs)!=null?o:e.maxFrameMs,autoAdapt:(a=i==null?void 0:i.autoAdapt)!=null?a:!0}}const Wp={dilationIterations:4,denoiseEnabled:!0,denoiseSigma:2.5,denoiseThreshold:.18,denoiseKSigma:1};class Bw{constructor(e,t,n,r,s){this.renderer=e,this.meshLightmaps=t,this.meshResolutions=n,this.stats=r,this.internals=s}get lightmaps(){return new Map(this.meshLightmaps)}get bvh(){return this.internals.bvh}get groups(){return this.internals.groups.map(e=>{var t,n;return{meshes:e.meshes,resolution:e.resolution,internalResolution:e.internalResolution,lightmapper:e.lightmapper,aoMapper:e.aoMapper,textures:{direct:e.lightmapper.textures.direct,indirect:e.lightmapper.textures.indirect,ao:e.aoMapper.texture,composite:e.composite.texture,refinement:(n=(t=e.refinement)==null?void 0:t.texture)!=null?n:null,position:e.positionTex,normal:e.normalTex}}})}getGroupForMesh(e){var t,n;for(const r of this.internals.groups)if(r.meshes.includes(e))return{meshes:r.meshes,resolution:r.resolution,internalResolution:r.internalResolution,lightmapper:r.lightmapper,aoMapper:r.aoMapper,textures:{direct:r.lightmapper.textures.direct,indirect:r.lightmapper.textures.indirect,ao:r.aoMapper.texture,composite:r.composite.texture,refinement:(n=(t=r.refinement)==null?void 0:t.texture)!=null?n:null,position:r.positionTex,normal:r.normalTex}};return null}apply(){for(const[e,t]of this.meshLightmaps){const n=e.material;!n||(n.lightMap=t,t.channel=2,n.lightMapIntensity=1,n.needsUpdate=!0)}}async export(e="lightmap",t={}){var o,a,l,c,u;const n=(o=t.format)!=null?o:"png",r=e.replace(/[\/\\]+$/,"").split(/[\/\\]/).pop()||"lightmap",s=this.internals.groups;for(let h=0;h<s.length;h++){const d=s[h],f=(u=(c=(a=d.downscale)==null?void 0:a.texture)!=null?c:(l=d.refinement)==null?void 0:l.texture)!=null?u:d.composite.texture,g=s.length>1?`${r}_group${h}`:r;await e0(this.renderer,f,d.resolution,g,n)}}dispose(){var e,t;for(const n of this.internals.groups)(e=n.downscale)==null||e.dispose(),(t=n.refinement)==null||t.dispose(),n.composite.dispose(),n.aoMapper.dispose(),n.lightmapper.dispose(),n.atlasDispose();this.internals.matTexDispose()}refreshAO(e){for(const t of this.internals.groups)t.composite.refresh({aoIntensity:e.intensity,aoExponent:e.exponent,aoEnabled:e.enabled})}async rebakeAO(e,t={}){const n=this.internals.groups;for(let r=0;r<n.length;r++){const s=n[r],o={resolution:s.internalResolution,aoSamples:e.samples,ambientDistance:e.distance,targetSamples:e.targetSamples};if(await qw(this.renderer,this.internals.bvh,s,o,t,r,n.length,a=>{var l;return(l=t.onProgress)==null?void 0:l.call(t,"bake",(r+a)/n.length)}),s.refinement)if(s.refinement.dispose(),s.refinement=await Uh(this.renderer,s.composite.texture,s.positionTex,s.internalResolution,this.internals.refinementOptions),s.downscale)s.downscale.setSource(s.refinement.texture),s.downscale.refresh();else{const a=s.refinement.texture;for(const[l,c]of this.meshResolutions)c===s.resolution&&this.meshLightmaps.set(l,a)}else s.downscale&&s.downscale.refresh()}}}class kw{constructor(e,t={}){var n,r,s,o,a,l,c,u,h,d,f,g,x,m,p,v,_,y,M,T,S,E,L,b,w,U,k,R,F,B,V,X,G,Y,J,ne,ee,z,j,ue;this.renderer=e,Fw(t),this.opts={samples:(n=t.samples)!=null?n:96,castsPerFrame:(r=t.castsPerFrame)!=null?r:5,bounces:Math.min(4,Math.max(1,(s=t.bounces)!=null?s:1)),resolution:(o=t.resolution)!=null?o:1024,superSample:(a=t.superSample)!=null?a:1,denoise:(l=t.denoise)!=null?l:!0,filtering:(c=t.filtering)!=null?c:"linear",texelsPerMeter:(u=t.texelsPerMeter)!=null?u:0,perMesh:(h=t.perMesh)!=null?h:{},light:{position:(f=(d=t.light)==null?void 0:d.position)!=null?f:new C(0,10,0),color:(x=(g=t.light)==null?void 0:g.color)!=null?x:16777215,intensity:(p=(m=t.light)==null?void 0:m.intensity)!=null?p:2,size:(_=(v=t.light)==null?void 0:v.size)!=null?_:1,enabled:(M=(y=t.light)==null?void 0:y.enabled)!=null?M:!0},gi:{enabled:(S=(T=t.gi)==null?void 0:T.enabled)!=null?S:!0,intensity:(L=(E=t.gi)==null?void 0:E.intensity)!=null?L:1,skyColor:(w=(b=t.gi)==null?void 0:b.skyColor)!=null?w:16777215,skyIntensity:(k=(U=t.gi)==null?void 0:U.skyIntensity)!=null?k:0},ao:{enabled:(F=(R=t.ao)==null?void 0:R.enabled)!=null?F:!0,distance:(V=(B=t.ao)==null?void 0:B.distance)!=null?V:.5,intensity:(G=(X=t.ao)==null?void 0:X.intensity)!=null?G:1,exponent:(J=(Y=t.ao)==null?void 0:Y.exponent)!=null?J:1.5,samples:(z=(ee=(ne=t.ao)==null?void 0:ne.samples)!=null?ee:t.castsPerFrame)!=null?z:5},refinementOptions:{...Wp,...(j=t.refinementOptions)!=null?j:{},denoiseEnabled:(ue=t.denoise)!=null?ue:Wp.denoiseEnabled},timeoutProtection:t.timeoutProtection}}async bake(e,t={}){const n=performance.now(),r=zw(e);if(!r.length)throw new ot("no bake-eligible meshes in scene (need Mesh + MeshStandardMaterial-like)","validation");if(!this.renderer.getContext().getExtension("EXT_color_buffer_float"))throw new ot("EXT_color_buffer_float WebGL2 extension is unavailable; FloatType RTs cannot be allocated","validation");const o=Nw(this.renderer),a=Ow(this.opts.timeoutProtection,o),l={lost:!1},c=this.renderer.domElement,u=f=>{f.preventDefault(),l.lost=!0,console.error("[baker] webglcontextlost during bake \u2014 cancelling")};c.addEventListener("webglcontextlost",u,!1);const h=()=>{c.removeEventListener("webglcontextlost",u,!1)};e.updateMatrixWorld(!0);const d=f=>{var g;if((g=t.signal)!=null&&g.aborted)throw new ot("aborted by signal",f);if(l.lost)throw new ot("webgl context lost","context-loss")};try{return await this.bakeInternal(r,e,t,n,a,l,d)}finally{h()}}async bakeInternal(e,t,n,r,s,o,a){var X,G,Y,J,ne,ee,z,j,ue;const l=this.opts.texelsPerMeter,c=l>0?Iw(e,this.opts.perMesh,this.opts.resolution,l):Lw(e,this.opts.perMesh,this.opts.resolution),{excluded:u,groups:h}=c,d=pe=>l>0?c.resolution:pe,f=performance.now();(X=n.onProgress)==null||X.call(n,"uv-unwrap",0);const g=[...h.values()].flat();await Dg(g),(G=n.onProgress)==null||G.call(n,"uv-unwrap",1),a("unwrap");const x=performance.now(),m=performance.now();(Y=n.onProgress)==null||Y.call(n,"geometry",0);const p=HS(e),v=new Dh(p);(J=n.onProgress)==null||J.call(n,"geometry",.5);const _=VS(p,e),y=WS(_);(ne=n.onProgress)==null||ne.call(n,"geometry",1),a("geometry");const M=performance.now(),T=Gp(this.opts.gi.skyColor,16777215);let S=LS(t);if(S.length===0&&this.opts.light.enabled){const pe=Gp(this.opts.light.color,16777215);S=[{type:"point",position:this.opts.light.position.clone(),direction:new C(0,-1,0),color:pe.multiplyScalar(this.opts.light.intensity),params:[this.opts.light.size,0,0,0]}]}const E=performance.now(),L=[...h.keys()],b=[],w=new Map,U=new Map;for(let pe=0;pe<L.length;pe++){const he=L[pe],ce=d(he),de=ce*this.opts.superSample,Ee=h.get(he);(ee=n.onProgress)==null||ee.call(n,"bake",pe/L.length),a("bake");const H=vT(this.renderer,Ee,de,!0),xt=Hw(this.opts,de,S,T,y,s),be=Gw(this.opts,de,s),Ie=US(this.renderer,H.positionTexture,H.normalTexture,v,xt),Te=Xg(this.renderer,H.positionTexture,H.normalTexture,v,be),qe=qg(this.renderer,{direct:Ie.textures.direct,indirect:Ie.textures.indirect,ao:Te.texture},de,{directIntensity:1,giIntensity:this.opts.gi.intensity,aoEnabled:this.opts.ao.enabled,aoIntensity:this.opts.ao.intensity,aoExponent:this.opts.ao.exponent});await Xw(Ie,Te,qe,this.opts.samples,n,o,s,pe,L.length,ie=>{var te;return(te=n.onProgress)==null?void 0:te.call(n,"bake",(pe+ie)/L.length)});let De=null;(this.opts.denoise||this.opts.refinementOptions.dilationIterations>0)&&(De=await Uh(this.renderer,qe.texture,H.positionTexture,de,this.opts.refinementOptions));const D=(z=De==null?void 0:De.texture)!=null?z:qe.texture,A=this.opts.superSample>1?Pw(this.renderer,D,ce):null,q=(j=A==null?void 0:A.texture)!=null?j:D;b.push({lightmapper:Ie,aoMapper:Te,composite:qe,refinement:De,atlasDispose:H.dispose,resolution:ce,internalResolution:de,downscale:A,meshes:Ee,positionTex:H.positionTexture,normalTex:H.normalTexture});for(const ie of Ee)w.set(ie,q),U.set(ie,ce)}const k=performance.now(),R=performance.now();(ue=n.onProgress)==null||ue.call(n,"refine",1);const F=performance.now();performance.now(),this.renderer.getContext().finish(),performance.now();const B=L.reduce((pe,he)=>{const ce=d(he);return pe+ce*ce},0),V={meshCount:g.length,texelCount:B,raysTraced:this.opts.samples*this.opts.castsPerFrame*B,duration:{uvUnwrap:x-f,geometry:M-m,bake:k-E,refine:F-R,total:performance.now()-r}};return new Bw(this.renderer,w,U,V,{groups:b,bvh:v,refinementOptions:this.opts.refinementOptions,denoise:this.opts.denoise,matTexDispose:()=>{y.albedoTexture.dispose(),y.emissiveTexture.dispose()}})}}function zw(i){const e=[];return i.traverse(t=>{var s;if(!t.isMesh||!t.visible||(s=t.userData)!=null&&s.lightmapIgnore)return;const n=t;(Array.isArray(n.material)?n.material:[n.material]).some(o=>o&&o.isMeshStandardMaterial)&&e.push(n)}),e}function Hw(i,e,t,n,r,s){return{resolution:e,casts:i.castsPerFrame,filterMode:i.filtering==="linear"?it:Qe,lights:t,skyColor:n,skyIntensity:i.gi.skyIntensity,directLightEnabled:i.light.enabled,indirectLightEnabled:i.gi.enabled,albedoTexture:r.albedoTexture,emissiveTexture:r.emissiveTexture,materialTextureSize:r.side,targetSamples:i.samples,bounces:i.bounces,tileSize:s.initialTileSize}}function Gw(i,e,t){return{resolution:e,aoSamples:i.ao.samples,ambientDistance:i.ao.distance,targetSamples:i.samples,tileSize:t.initialTileSize}}const Vw=64;function Ww(i,e,t){return i.length<4?e:i.slice(-4).filter(s=>s>t.maxFrameMs*1.5).length>=3?Math.max(Vw,e>>1):e}function Xw(i,e,t,n,r,s,o,a,l,c){return new Promise((u,h)=>{const d=[];let f=performance.now(),g=o.initialTileSize;const x=()=>{var M,T;if((M=r.signal)!=null&&M.aborted){h(new ot("aborted by signal","bake"));return}if(s.lost){h(new ot("webgl context lost during bake","context-loss"));return}const m=performance.now();if(d.push(m-f),d.length>8&&d.shift(),f=m,o.autoAdapt){const S=Ww(d,g,o);S!==g&&(console.warn(`[baker] adaptive throttle: tileSize ${g} \u2192 ${S}`),g=S,i.setTileSize(g),e.setTileSize(g),d.length=0)}const p=i.renderTiled(o.maxFrameMs),v=e.renderTiled(o.maxFrameMs),_=Math.min(p.samples,v.samples);c(n>0?_/n:1);const y=p.done&&v.done;if((p.sampleComplete||v.sampleComplete)&&t.refresh(),(T=r.onFrame)==null||T.call(r,{groupIndex:a,totalGroups:l,bounceSamples:p.samples,aoSamples:v.samples,targetSamples:n,done:y,compositeTexture:t.texture,directTexture:i.textures.direct,indirectTexture:i.textures.indirect,aoTexture:e.texture}),y){u();return}requestAnimationFrame(x)};requestAnimationFrame(x)})}function qw(i,e,t,n,r,s,o,a){const l=Xg(i,t.positionTex,t.normalTex,e,n);return t.aoMapper.dispose(),t.aoMapper=l,t.composite.refresh({aoTex:l.texture}),new Promise((c,u)=>{const h=()=>{var f,g;if((f=r.signal)!=null&&f.aborted){u(new ot("aborted by signal","bake"));return}const d=l.render();if(a(n.targetSamples>0?d.samples/n.targetSamples:1),t.composite.refresh(),(g=r.onFrame)==null||g.call(r,{groupIndex:s,totalGroups:o,bounceSamples:0,aoSamples:d.samples,targetSamples:n.targetSamples,done:d.done,compositeTexture:t.composite.texture,directTexture:t.lightmapper.textures.direct,indirectTexture:t.lightmapper.textures.indirect,aoTexture:l.texture}),d.done){c();return}requestAnimationFrame(h)};requestAnimationFrame(h)})}const Xp={0:"NO_ERROR",1280:"INVALID_ENUM",1281:"INVALID_VALUE",1282:"INVALID_OPERATION",1283:"STACK_OVERFLOW",1284:"STACK_UNDERFLOW",1285:"OUT_OF_MEMORY",1286:"INVALID_FRAMEBUFFER_OPERATION",37442:"CONTEXT_LOST_WEBGL"};class t0{constructor(e){this.renderer=e,this.start=performance.now(),this.snapshots=[],this.lastCalls=0,this.lastTriangles=0}banner(){var u,h;const e=this.renderer.getContext(),t=e.getExtension("WEBGL_debug_renderer_info"),n=t?String((u=e.getParameter(t.UNMASKED_VENDOR_WEBGL))!=null?u:""):"<masked>",r=t?String((h=e.getParameter(t.UNMASKED_RENDERER_WEBGL))!=null?h:""):"<masked>",s=e.getContextAttributes(),o={MAX_TEXTURE_SIZE:e.getParameter(e.MAX_TEXTURE_SIZE),MAX_RENDERBUFFER_SIZE:e.getParameter(e.MAX_RENDERBUFFER_SIZE),MAX_DRAW_BUFFERS:e.getParameter(e.MAX_DRAW_BUFFERS),MAX_COLOR_ATTACHMENTS:e.getParameter(e.MAX_COLOR_ATTACHMENTS),MAX_TEXTURE_IMAGE_UNITS:e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),MAX_FRAGMENT_UNIFORM_VECTORS:e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),MAX_VARYING_VECTORS:e.getParameter(e.MAX_VARYING_VECTORS),MAX_VIEWPORT_DIMS:e.getParameter(e.MAX_VIEWPORT_DIMS)},a=["EXT_color_buffer_float","EXT_color_buffer_half_float","OES_texture_float_linear","OES_texture_half_float_linear","WEBGL_lose_context","EXT_disjoint_timer_query_webgl2","WEBGL_debug_renderer_info"],l={};for(const d of a)l[d]=!!e.getExtension(d);const c=performance.memory;console.group("[diag] === GPU BANNER ==="),console.log("vendor:",n),console.log("renderer:",r),console.log("webgl version:",e.getParameter(e.VERSION)),console.log("GLSL:",e.getParameter(e.SHADING_LANGUAGE_VERSION)),console.log("context attrs:",s),console.log("limits:",o),console.log("extensions:",l),c&&console.log("JS heap (MB):",`used=${(c.usedJSHeapSize/1048576).toFixed(1)}`,`total=${(c.totalJSHeapSize/1048576).toFixed(1)}`,`limit=${(c.jsHeapSizeLimit/1048576).toFixed(1)}`),console.groupEnd()}snap(e){var u,h,d;const t=this.renderer.getContext();let n=0,r=0;do r=t.getError(),r!==0&&(n=r);while(r!==0);const s=this.renderer.info,o=(h=(u=s.programs)==null?void 0:u.length)!=null?h:0,a=s.render.calls-this.lastCalls,l=s.render.triangles-this.lastTriangles;this.lastCalls=s.render.calls,this.lastTriangles=s.render.triangles;const c={label:e,t:performance.now()-this.start,glError:(d=Xp[n])!=null?d:`0x${n.toString(16)}`,threejs:{geometries:s.memory.geometries,textures:s.memory.textures,programs:o,calls:s.render.calls,triangles:s.render.triangles}};return this.snapshots.push(c),console.log(`[diag] ${c.t.toFixed(1).padStart(8)}ms ${e}`,`gl=${c.glError}`,`geo=${c.threejs.geometries} tex=${c.threejs.textures} prog=${c.threejs.programs}`,`\u0394calls=${a} \u0394tris=${l}`),c}measure(e,t){var c;const n=this.renderer.getContext();for(;n.getError()!==0;);const r=performance.now(),s=t();n.finish();const o=performance.now()-r;let a=0,l=0;do l=n.getError(),l!==0&&(a=l);while(l!==0);return console.log(`[diag] MEASURE ${e}: ${o.toFixed(1)}ms gl=${(c=Xp[a])!=null?c:`0x${a.toString(16)}`}`),s}contextLossInfo(){var n,r;const e=this.renderer.getContext(),t=e.getExtension("WEBGL_lose_context");console.group("[diag] === CONTEXT LOSS DUMP ==="),console.log("isContextLost:",(n=e.isContextLost)==null?void 0:n.call(e)),console.log("snapshot history (last 10):",this.snapshots.slice(-10)),console.log("threejs info at loss:",{geometries:this.renderer.info.memory.geometries,textures:this.renderer.info.memory.textures,programs:(r=this.renderer.info.programs)==null?void 0:r.length,autoReset:this.renderer.info.autoReset}),t&&console.log("lose_context ext present"),console.groupEnd()}dump(){return this.snapshots.slice()}}function or(){return W1()}function Yw(){Jo.value;const i=or();if(!i)return null;const e=i.options;return P("div",{class:"text-[12px]",children:[P(Dt,{title:"Quality",children:[P(Ne,{label:"Preset",children:P(j1,{value:e.quality,options:[{value:"Custom",label:"Custom"},{value:"Draft",label:"Draft"},{value:"Preview",label:"Preview"},{value:"Production",label:"Production"},{value:"Final",label:"Final"}],onChange:t=>{i.setQuality(t),lt()}})}),P(Ne,{label:"Atlas size",children:P(ii,{value:e.lightMapSize,min:128,max:2048,step:128,onChange:t=>{e.lightMapSize=t,e.quality="Custom",lt()}})}),P(Ne,{label:"Density (px/m)",children:P(Bt,{value:e.texelsPerMeter,min:1,max:50,step:.5,onChange:t=>{e.texelsPerMeter=t,lt()}})})]}),P(Dt,{title:"Path tracer",children:[P(Ne,{label:"Casts/frame",children:P(ii,{value:e.casts,min:1,max:16,step:1,onChange:t=>{e.casts=t,e.quality="Custom",lt()}})}),P(Ne,{label:"Target frames",children:P(ii,{value:e.targetSamples,min:16,max:1024,step:16,onChange:t=>{e.targetSamples=t,e.quality="Custom",lt()}})}),P(Ne,{label:"Bounces",children:P(ii,{value:e.bounces,min:1,max:4,step:1,onChange:t=>{e.bounces=t,lt()}})}),P(Ne,{label:"Safe mode (TDR)",hint:"Tile the path-tracer draw into 64\xD764 scissored blocks to stay under the GPU watchdog.",children:P(Mi,{value:e.safeMode,onChange:t=>{e.safeMode=t,lt()}})})]}),P(Dt,{title:"Ambient occlusion",children:[P(Ne,{label:"Enabled",children:P(Mi,{value:e.ambientLightEnabled,onChange:t=>{e.ambientLightEnabled=t,lt()}})}),P(Ne,{label:"Distance",children:P(Bt,{value:e.ambientDistance,min:.05,max:2,step:.05,onChange:t=>{e.ambientDistance=t,lt()}})}),P(Ne,{label:"Samples",children:P(ii,{value:e.aoSamples,min:0,max:32,step:1,onChange:t=>{e.aoSamples=t,lt()}})}),P(Ne,{label:"Intensity",children:P(Bt,{value:e.aoIntensity,min:0,max:3,step:.05,onChange:t=>{e.aoIntensity=t,lt()}})}),P(Ne,{label:"Exponent",children:P(Bt,{value:e.aoExponent,min:.5,max:4,step:.1,onChange:t=>{e.aoExponent=t,lt()}})})]}),P(Dt,{title:"Refinement",children:[P(Ne,{label:"Denoise",children:P(Mi,{value:e.denoiseEnabled,onChange:t=>{e.denoiseEnabled=t,lt()}})}),P(Ne,{label:"Spatial sigma",children:P(Bt,{value:e.denoiseSigma,min:.1,max:8,step:.1,onChange:t=>{e.denoiseSigma=t,lt()}})})]}),P(Dt,{title:"Workflow",children:P(Ne,{label:"Auto-bake on edit",children:P(Mi,{value:e.autoBake,onChange:t=>{e.autoBake=t,lt()}})})})]})}function $w(){Jo.value;const i=Rh(zn.value);if(!wg(i))return P("div",{class:"p-2 italic text-text-2 text-[12px]",children:"Lightmap settings need a mesh selected."});const e=or();if(!e)return null;const t=e.options;t.perMesh[i.uuid]||(t.perMesh[i.uuid]={scaleInLightmap:1,exclude:!1});const n=t.perMesh[i.uuid];return P("div",{class:"text-[12px]",children:[P(Dt,{title:"Bake settings (per mesh)",children:[P(Ne,{label:"Density \xD7",hint:"Multiplier on the global texels/m density for this mesh. Higher = more atlas area.",children:P(Bt,{value:n.scaleInLightmap,min:.25,max:4,step:.25,onChange:r=>{n.scaleInLightmap=r,lt(),It()}})}),P(Ne,{label:"Exclude",hint:"Skip this mesh during UV unwrap + bake. It still contributes to BVH (shadows/GI for other meshes).",children:P(Mi,{value:n.exclude,onChange:r=>{n.exclude=r,lt(),It()}})})]}),P(Dt,{title:"UV2 status",children:P(Ne,{label:"UV2 channel",children:P("span",{class:"text-[11px] text-text-1 font-mono",children:i.geometry.attributes.uv2?"present":"rebake to generate"})})})]})}const jw="light:dummy";function Kw(){Jo.value;const i=zn.value,e=or();if(!e||i!==jw)return P("div",{class:"p-2 italic text-text-2 text-[12px]",children:"Select the Scene Light in the Outliner to edit it."});const t=e.options;return P("div",{class:"text-[12px]",children:[P(Dt,{title:"Primary (Area)",children:[P(Ne,{label:"Enabled",children:P(Mi,{value:t.directLightEnabled,onChange:n=>{t.directLightEnabled=n,lt(),It()}})}),P(Ne,{label:"Color",children:P(qs,{value:t.lightColor,onChange:n=>{t.lightColor=n,lt(),It()}})}),P(Ne,{label:"Intensity",children:P(Bt,{value:t.lightIntensity,min:0,max:15,step:.1,onChange:n=>{t.lightIntensity=n,lt(),It()}})}),P(Ne,{label:"Source size",hint:"Radius of the disc-shaped emitter. Larger = softer shadows.",children:P(Bt,{value:t.lightSize,min:.1,max:5,step:.1,onChange:n=>{t.lightSize=n,lt(),It()}})})]}),P(Dt,{title:"Global Illumination",children:[P(Ne,{label:"Indirect on",children:P(Mi,{value:t.indirectLightEnabled,onChange:n=>{t.indirectLightEnabled=n,lt(),It()}})}),P(Ne,{label:"Bounce power",children:P(Bt,{value:t.giIntensity,min:0,max:4,step:.05,onChange:n=>{t.giIntensity=n,lt()}})})]}),P(Dt,{title:"Secondary (Directional / Sun)",children:[P(Ne,{label:"Enabled",children:P(Mi,{value:t.secondaryLightEnabled,onChange:n=>{t.secondaryLightEnabled=n,lt(),It()}})}),P(Ne,{label:"Color",children:P(qs,{value:t.secondaryColor,onChange:n=>{t.secondaryColor=n,lt(),It()}})}),P(Ne,{label:"Intensity",children:P(Bt,{value:t.secondaryIntensity,min:0,max:5,step:.1,onChange:n=>{t.secondaryIntensity=n,lt(),It()}})}),P(Ne,{label:"Dir X",children:P(ii,{value:t.secondaryDirX,min:-1,max:1,step:.05,onChange:n=>{t.secondaryDirX=n,lt(),It()}})}),P(Ne,{label:"Dir Y",children:P(ii,{value:t.secondaryDirY,min:-1,max:1,step:.05,onChange:n=>{t.secondaryDirY=n,lt(),It()}})}),P(Ne,{label:"Dir Z",children:P(ii,{value:t.secondaryDirZ,min:-1,max:1,step:.05,onChange:n=>{t.secondaryDirZ=n,lt(),It()}})})]})]})}class Zw extends y1{constructor(e){super(e),this.type=fn}parse(e){const o=function(E,L){switch(E){case 1:throw new Error("THREE.RGBELoader: Read Error: "+(L||""));case 2:throw new Error("THREE.RGBELoader: Write Error: "+(L||""));case 3:throw new Error("THREE.RGBELoader: Bad File Format: "+(L||""));default:case 4:throw new Error("THREE.RGBELoader: Memory Error: "+(L||""))}},u=`
`,h=function(E,L,b){L=L||1024;let U=E.pos,k=-1,R=0,F="",B=String.fromCharCode.apply(null,new Uint16Array(E.subarray(U,U+128)));for(;0>(k=B.indexOf(u))&&R<L&&U<E.byteLength;)F+=B,R+=B.length,U+=128,B+=String.fromCharCode.apply(null,new Uint16Array(E.subarray(U,U+128)));return-1<k?(b!==!1&&(E.pos+=R+k+1),F+B.slice(0,k)):!1},d=function(E){const L=/^#\?(\S+)/,b=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,w=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,U=/^\s*FORMAT=(\S+)\s*$/,k=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,R={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let F,B;for((E.pos>=E.byteLength||!(F=h(E)))&&o(1,"no header found"),(B=F.match(L))||o(3,"bad initial token"),R.valid|=1,R.programtype=B[1],R.string+=F+`
`;F=h(E),F!==!1;){if(R.string+=F+`
`,F.charAt(0)==="#"){R.comments+=F+`
`;continue}if((B=F.match(b))&&(R.gamma=parseFloat(B[1])),(B=F.match(w))&&(R.exposure=parseFloat(B[1])),(B=F.match(U))&&(R.valid|=2,R.format=B[1]),(B=F.match(k))&&(R.valid|=4,R.height=parseInt(B[1],10),R.width=parseInt(B[2],10)),R.valid&2&&R.valid&4)break}return R.valid&2||o(3,"missing format specifier"),R.valid&4||o(3,"missing image size specifier"),R},f=function(E,L,b){const w=L;if(w<8||w>32767||E[0]!==2||E[1]!==2||E[2]&128)return new Uint8Array(E);w!==(E[2]<<8|E[3])&&o(3,"wrong scanline width");const U=new Uint8Array(4*L*b);U.length||o(4,"unable to allocate buffer space");let k=0,R=0;const F=4*w,B=new Uint8Array(4),V=new Uint8Array(F);let X=b;for(;X>0&&R<E.byteLength;){R+4>E.byteLength&&o(1),B[0]=E[R++],B[1]=E[R++],B[2]=E[R++],B[3]=E[R++],(B[0]!=2||B[1]!=2||(B[2]<<8|B[3])!=w)&&o(3,"bad rgbe scanline format");let G=0,Y;for(;G<F&&R<E.byteLength;){Y=E[R++];const ne=Y>128;if(ne&&(Y-=128),(Y===0||G+Y>F)&&o(3,"bad scanline data"),ne){const ee=E[R++];for(let z=0;z<Y;z++)V[G++]=ee}else V.set(E.subarray(R,R+Y),G),G+=Y,R+=Y}const J=w;for(let ne=0;ne<J;ne++){let ee=0;U[k]=V[ne+ee],ee+=w,U[k+1]=V[ne+ee],ee+=w,U[k+2]=V[ne+ee],ee+=w,U[k+3]=V[ne+ee],k+=4}X--}return U},g=function(E,L,b,w){const U=E[L+3],k=Math.pow(2,U-128)/255;b[w+0]=E[L+0]*k,b[w+1]=E[L+1]*k,b[w+2]=E[L+2]*k,b[w+3]=1},x=function(E,L,b,w){const U=E[L+3],k=Math.pow(2,U-128)/255;b[w+0]=wo.toHalfFloat(Math.min(E[L+0]*k,65504)),b[w+1]=wo.toHalfFloat(Math.min(E[L+1]*k,65504)),b[w+2]=wo.toHalfFloat(Math.min(E[L+2]*k,65504)),b[w+3]=wo.toHalfFloat(1)},m=new Uint8Array(e);m.pos=0;const p=d(m),v=p.width,_=p.height,y=f(m.subarray(m.pos),v,_);let M,T,S;switch(this.type){case Je:S=y.length/4;const E=new Float32Array(S*4);for(let b=0;b<S;b++)g(y,b*4,E,b*4);M=E,T=Je;break;case fn:S=y.length/4;const L=new Uint16Array(S*4);for(let b=0;b<S;b++)x(y,b*4,L,b*4);M=L,T=fn;break;default:throw new Error("THREE.RGBELoader: Unsupported type: "+this.type)}return{width:v,height:_,data:M,header:p.string,gamma:p.gamma,exposure:p.exposure,type:T}}setDataType(e){return this.type=e,this}load(e,t,n,r){function s(o,a){switch(o.type){case Je:case fn:o.colorSpace=Qt,o.minFilter=it,o.magFilter=it,o.generateMipmaps=!1,o.flipY=!0;break}t&&t(o,a)}return super.load(e,s,n,r)}}function Qw(){Vl.value,Jo.value;const i=Ds(null),e=or();if(!e)return null;const t=e.getScene(),n=e.options,r=Xt.value,s=lr.value==="pathtraced",o=ws.value!==null,a=t.background instanceof Re?`#${t.background.getHexString()}`:"#000000",l=c=>{const u=URL.createObjectURL(c);new Zw().load(u,d=>{var f;URL.revokeObjectURL(u),d.mapping=_l,(f=ws.value)==null||f.dispose(),ws.value=d},void 0,d=>{URL.revokeObjectURL(u),console.error("[WorldPage] HDRI load failed:",d)})};return P("div",{class:"text-[12px]",children:[P(Dt,{title:"Viewport background",children:P(Ne,{label:"Color",children:P(qs,{value:a,onChange:c=>{const u=new Re(c);t.background=u,qn()}})})}),P(Dt,{title:"Sky / Environment  (baker + PT)",children:[P(Ne,{label:"Color",hint:"Ambient sky tint \u2014 GI miss-hit fill in bake and sky color in path tracer.",children:P(qs,{value:n.skyColor,onChange:c=>{n.skyColor=c,lt(),It()}})}),P(Ne,{label:"Intensity",hint:"Fill added when GI rays miss the scene. Also controls PT sky brightness.",children:P(Bt,{value:n.skyIntensity,min:0,max:4,step:.05,onChange:c=>{n.skyIntensity=c,Xt.value={...Xt.value,skyIntensity:c},lt(),It()}})})]}),P(Dt,{title:"Environment HDRI  (PT only)",children:P(Ne,{label:"File",hint:"Load a .hdr equirectangular environment map for PT mode.",children:[P("div",{class:"flex gap-1 items-center",children:[P("button",{type:"button",class:"px-2 py-0.5 rounded text-[11px] bg-bg-3 hover:bg-accent hover:text-white border border-border transition-colors",onClick:()=>{var c;return(c=i.current)==null?void 0:c.click()},children:o?"Replace":"Load .hdr"}),o&&P("button",{type:"button",class:"px-2 py-0.5 rounded text-[11px] bg-bg-3 hover:bg-red-700 hover:text-white border border-border transition-colors",onClick:()=>{var c;(c=ws.value)==null||c.dispose(),ws.value=null},title:"Remove HDRI (use procedural sky)",children:"\u2715"}),P("span",{class:"text-text-2 text-[10px]",children:o?"loaded":"none"})]}),P("input",{ref:i,type:"file",accept:".hdr",class:"hidden",onChange:c=>{var h;const u=(h=c.target.files)==null?void 0:h[0];u&&l(u)}})]})}),s&&P(Dt,{title:"Path Tracer \u2014 Depth of Field",children:[P(Ne,{label:"Aperture",hint:"0 = pinhole (sharp everywhere); increase for lens blur.",children:P(Bt,{value:r.aperture,min:0,max:.05,step:.001,onChange:c=>{Xt.value={...Xt.value,aperture:c}}})}),P(Ne,{label:"Focus dist",hint:"Distance to the focal plane in world units.",children:P(Bt,{value:r.focusDist,min:1,max:500,step:1,onChange:c=>{Xt.value={...Xt.value,focusDist:c}}})}),P(Ne,{label:"Light scale",hint:"Global multiplier for scene lights in PT mode (default 0.15).",children:P(Bt,{value:r.lightScale,min:0,max:2,step:.01,onChange:c=>{Xt.value={...Xt.value,lightScale:c}}})})]}),P(Dt,{title:"Light Probes (SH)",children:P(Ne,{label:"Probes",children:P("span",{class:"text-[11px] text-text-2 italic",children:"Task 11 \u2014 Spherical Harmonics"})})})]})}function Jw(){an.register("Render",{id:"render.rebake",label:"Quick Bake",hotkey:"B",action:()=>{var i;(i=or())==null||i.requestBake()}}),an.register("Render",{id:"render.rebake-ao",label:"Re-bake AO only",action:()=>{var i;(i=or())==null||i.requestAORebake()}}),an.register("Render",{id:"render.pt-bake",label:"Path-Traced Bake",separatorBefore:!0,action:()=>{var e;const i=or();(e=i==null?void 0:i.requestPTBake)==null||e.call(i)}}),an.register("File",{id:"file.export-lightmap",label:"Export Lightmap PNG",separatorBefore:!0,action:()=>{var i;(i=or())==null||i.exportFinal()}})}function eE(){Cs.register({id:"lightmap",label:"Lightmap",component:$w}),Cs.register({id:"bake",label:"Bake",component:Yw}),Cs.register({id:"light",label:"Light",component:Kw}),Cs.register({id:"world",label:"World",component:Qw}),Jw()}function tE(){const i=Xt.value;return P("div",{class:"text-[12px]",children:[P(Dt,{title:"Sampling",children:[P(Ne,{label:"Light scale",hint:"Global multiplier for all scene lights in PT mode. 0.15 works for most THREE.js scenes.",children:P(Bt,{value:i.lightScale,min:0,max:2,step:.01,onChange:e=>{Xt.value={...Xt.value,lightScale:e}}})}),P(Ne,{label:"Sky intensity",hint:"Environment sky brightness. Also drives baker GI fill.",children:P(Bt,{value:i.skyIntensity,min:0,max:4,step:.05,onChange:e=>{Xt.value={...Xt.value,skyIntensity:e}}})})]}),P(Dt,{title:"Depth of Field",children:[P(Ne,{label:"Aperture",hint:"0 = pinhole. Increase for background blur.",children:P(Bt,{value:i.aperture,min:0,max:.05,step:.001,onChange:e=>{Xt.value={...Xt.value,aperture:e}}})}),P(Ne,{label:"Focus dist",hint:"Focal plane distance in world units.",children:P(Bt,{value:i.focusDist,min:1,max:500,step:1,onChange:e=>{Xt.value={...Xt.value,focusDist:e}}})})]})]})}let qp=!1;function nE(){qp||(qp=!0,Cs.register({id:"pathtracer",label:"Path Tracer",component:tE,when:()=>lr.value==="pathtraced"}),an.register("Render",{id:"toggle-pathtracer",label:"Path Traced",separatorBefore:!0,action:()=>{lr.value=lr.value==="pathtraced"?"combined":"pathtraced"}}))}function iE(){Vl.value;const i=Rh(zn.value);if(!wg(i))return P(Yp,{msg:"Material editor needs a mesh selected."});const e=K1(i);return e?P("div",{class:"text-[12px]",children:[P(Dt,{title:"Base",children:[P(Ne,{label:"Color",children:P(qs,{value:ep(e.color),onChange:t=>{tp(e.color,t),qn(),It()}})}),P(Ne,{label:"Roughness",children:P(Bt,{value:e.roughness,min:0,max:1,step:.01,onChange:t=>{e.roughness=t,qn()}})}),P(Ne,{label:"Metalness",children:P(Bt,{value:e.metalness,min:0,max:1,step:.01,onChange:t=>{e.metalness=t,qn()}})})]}),P(Dt,{title:"Emissive",children:[P(Ne,{label:"Color",children:P(qs,{value:ep(e.emissive),onChange:t=>{tp(e.emissive,t),qn(),It()}})}),P(Ne,{label:"Intensity",children:P(Bt,{value:e.emissiveIntensity,min:0,max:10,step:.1,onChange:t=>{e.emissiveIntensity=t,qn(),It()}})})]}),P(Dt,{title:"Bake",children:P(Ne,{label:"Receive only",hint:"Receive lighting but do not contribute to GI bounces.",children:P(Mi,{value:i.userData.receiveOnly===!0,onChange:t=>{i.userData.receiveOnly=t,qn(),It()}})})})]}):P(Yp,{msg:"Selected mesh has no editable material."})}function Yp(i){return P("div",{class:"p-2 italic text-text-2 text-[12px]",children:i.msg})}function rE(){Vl.value;const i=Rh(zn.value);return i?P("div",{class:"text-[12px]",children:[P(Dt,{title:"Object",children:[P(Ne,{label:"Name",children:P($1,{value:i.name,onChange:e=>{i.name=e,qn(),np()}})}),P(Ne,{label:"Visible",children:P(Mi,{value:i.visible,onChange:e=>{i.visible=e,qn(),np()}})})]}),P(Dt,{title:"Transform",children:[P($c,{label:"Position",x:i.position.x,y:i.position.y,z:i.position.z,onChange:(e,t,n)=>{i.position.set(e,t,n),qn(),It()}}),P($c,{label:"Rotation",x:i.rotation.x,y:i.rotation.y,z:i.rotation.z,onChange:(e,t,n)=>{i.rotation.set(e,t,n),qn(),It()}}),P($c,{label:"Scale",x:i.scale.x,y:i.scale.y,z:i.scale.z,onChange:(e,t,n)=>{i.scale.set(e,t,n),qn(),It()}})]})]}):P(sE,{})}function $c(i){return P(Ne,{label:i.label,children:[P(ii,{value:i.x,step:.1,onChange:e=>i.onChange(e,i.y,i.z)}),P(ii,{value:i.y,step:.1,onChange:e=>i.onChange(i.x,e,i.z)}),P(ii,{value:i.z,step:.1,onChange:e=>i.onChange(i.x,i.y,e)})]})}function sE(){return P("div",{class:"p-2 italic text-text-2 text-[12px]",children:"Nothing selected."})}function n0(i){const e=Ds(0),t=Ds(0),n=Ds(!1);return Zs(()=>{const r=o=>{var u,h;if(!n.current)return;const a=o.clientX-e.current,l=i.side==="left"?a:-a,c=Math.max((u=i.min)!=null?u:180,Math.min((h=i.max)!=null?h:500,t.current+l));i.onResize(c)},s=()=>{n.current=!1,document.body.style.cursor=""};return window.addEventListener("mousemove",r),window.addEventListener("mouseup",s),()=>{window.removeEventListener("mousemove",r),window.removeEventListener("mouseup",s)}},[i.side,i.min,i.max,i.onResize]),P("div",{class:"absolute top-0 bottom-0 w-1 cursor-col-resize bg-border hover:bg-accent/40 transition-colors pointer-events-auto z-10",style:i.side==="left"?{right:"-2px"}:{left:"-2px"},onMouseDown:r=>{r.preventDefault(),e.current=r.clientX,t.current=i.width,n.current=!0,document.body.style.cursor="col-resize"}})}const oE=[{id:"object",label:"Object",component:rE},{id:"material",label:"Material",component:iE}];function aE(){var s;wu.value;const i=Jf.value,e=Cs.all().filter(o=>{var a,l;return(l=(a=o.when)==null?void 0:a.call(o))!=null?l:!0}),t=[...oE,...e],n=(s=t.find(o=>o.id===i))!=null?s:t[0],r=n==null?void 0:n.component;return P("aside",{class:"relative bg-bg-1 border-l border-border flex flex-col text-[12px] pointer-events-auto",style:{width:`${ct.value.inspectorW}px`},children:[P("div",{class:"border-b border-border bg-bg-2 flex",children:t.map(o=>P("button",{type:"button",class:`flex-1 px-2 h-7 text-[11px] font-medium border-r border-border last:border-r-0 ${i===o.id?"text-text-0 bg-bg-1 border-b-2 border-b-accent":"text-text-1 hover:text-text-0 hover:bg-bg-3"}`,onClick:()=>Jf.value=o.id,children:o.label}))}),P("div",{class:"flex-1 overflow-auto",children:r&&P(r,{})}),P(n0,{side:"right",width:ct.value.inspectorW,onResize:o=>ct.value={...ct.value,inspectorW:o},min:240,max:520})]})}/**
 * @license lucide-preact v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lE=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),cE=(...i)=>i.filter((e,t,n)=>Boolean(e)&&e.trim()!==""&&n.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-preact v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var uE={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-preact v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hE=({color:i="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:n,children:r,iconNode:s,class:o="",...a})=>pl("svg",{...uE,width:String(e),height:e,stroke:i,["stroke-width"]:n?Number(t)*24/Number(e):t,class:["lucide",o].join(" "),...a},[...s.map(([l,c])=>pl(l,c)),...Em(r)]);/**
 * @license lucide-preact v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ct=(i,e)=>{const t=({class:n="",children:r,...s})=>pl(hE,{...s,iconNode:e,class:cE(`lucide-${lE(i)}`,n)},r);return t.displayName=`${i}`,t};/**
 * @license lucide-preact v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dE=Ct("Box",[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-preact v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fE=Ct("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-preact v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pE=Ct("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-preact v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mE=Ct("Circle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-preact v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gE=Ct("Cylinder",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5v14a9 3 0 0 0 18 0V5",key:"aqi0yr"}]]);/**
 * @license lucide-preact v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _E=Ct("Disc",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-preact v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xE=Ct("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-preact v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vE=Ct("EyeOff",[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-preact v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yE=Ct("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-preact v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bE=Ct("FolderOpen",[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]]);/**
 * @license lucide-preact v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ME=Ct("GitCompareArrows",[["circle",{cx:"5",cy:"6",r:"3",key:"1qnov2"}],["path",{d:"M12 6h5a2 2 0 0 1 2 2v7",key:"1yj91y"}],["path",{d:"m15 9-3-3 3-3",key:"1lwv8l"}],["circle",{cx:"19",cy:"18",r:"3",key:"1qljk2"}],["path",{d:"M12 18H7a2 2 0 0 1-2-2V9",key:"16sdep"}],["path",{d:"m9 15 3 3-3 3",key:"1m3kbl"}]]);/**
 * @license lucide-preact v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TE=Ct("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-preact v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SE=Ct("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-preact v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wE=Ct("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-preact v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EE=Ct("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);/**
 * @license lucide-preact v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AE=Ct("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-preact v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RE=Ct("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-preact v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CE=Ct("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]);/**
 * @license lucide-preact v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PE=Ct("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-preact v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LE=Ct("Square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-preact v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IE=Ct("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-preact v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DE=Ct("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-preact v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UE=Ct("Triangle",[["path",{d:"M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"14u9p9"}]]),Pt=i=>i,Hh=Pt(DE),$p=Pt(dE),NE=Pt(fE),FE=Pt(pE),OE=Pt(mE),BE=Pt(gE),kE=Pt(_E);Pt(xE);const zE=Pt(yE),HE=Pt(vE);Pt(bE);Pt(TE);const GE=Pt(ME),i0=Pt(SE),VE=Pt(wE),Xu=Pt(EE),WE=Pt(AE),XE=Pt(RE);Pt(CE);const qE=Pt(PE),Dl=Pt(LE),YE=Pt(IE),$E=Pt(UE);function jE(){const[i,e]=bh(()=>jp());return Zs(()=>{var r;const t=()=>e(jp());window.addEventListener("resize",t);const n=window.matchMedia("(pointer: coarse)");return(r=n.addEventListener)==null||r.call(n,"change",t),()=>{var s;window.removeEventListener("resize",t),(s=n.removeEventListener)==null||s.call(n,"change",t)}},[]),i?P("div",{class:"fixed inset-0 z-[100] bg-bg-0/95 backdrop-blur flex items-center justify-center p-6 pointer-events-auto",children:P("div",{class:"max-w-md text-center",children:[P("div",{class:"inline-flex items-center justify-center w-14 h-14 rounded-full bg-stale/20 text-stale mb-4",children:P(Hh,{size:28})}),P("h1",{class:"text-xl font-semibold text-text-0 mb-2",children:"Desktop only"}),P("p",{class:"text-sm text-text-1 leading-relaxed",children:"Lightmap Studio needs WebGL2, a mouse, and a wide viewport. Touch and small screens aren't supported. Open this URL on a laptop or desktop."}),P("p",{class:"mt-6 text-[11px] text-text-2 font-mono",children:"\u2265 1024px \xB7 fine pointer"})]})}):null}function jp(){var t,n;if(typeof window=="undefined")return!1;const i=window.innerWidth<1024,e=(n=(t=window.matchMedia)==null?void 0:t.call(window,"(pointer: coarse)").matches)!=null?n:!1;return i||e}function KE(){return P("div",{class:"flex-1 overflow-auto bg-bg-1 text-[12px]",children:[P(Kp,{label:"Primitives",children:Cl.primitives.map(i=>P(Zp,{label:i.label,icon:i.icon,spec:{kind:"primitive",id:i.id},enabled:!0},i.id))}),P(Kp,{label:"Lights",children:Cl.lights.map(i=>P(Zp,{label:i.label,icon:i.icon,spec:{kind:"light",id:i.id},enabled:i.enabled},i.id))})]})}function Kp(i){return P("div",{class:"border-b border-border/40 last:border-b-0",children:[P("div",{class:"px-2 py-1 text-[10px] uppercase tracking-wider text-text-2 font-semibold",children:i.label}),P("div",{class:"grid grid-cols-3 gap-1 p-1.5",children:i.children})]})}function Zp(i){const e=n=>{if(!i.enabled){n.preventDefault();return}!n.dataTransfer||(n.dataTransfer.setData("application/x-baker-asset",JSON.stringify(i.spec)),n.dataTransfer.effectAllowed="copy")},t=ZE(i.icon);return P("div",{"data-asset-tile":i.spec.id,draggable:i.enabled,onDragStart:e,title:i.enabled?`Drag ${i.label} to viewport`:`${i.label} (coming soon)`,class:`flex flex-col items-center justify-center gap-1 p-1.5 rounded border border-transparent text-[10px] select-none ${i.enabled?"bg-bg-2 hover:bg-bg-3 hover:border-border text-text-1 hover:text-text-0 cursor-grab active:cursor-grabbing":"bg-bg-2/40 text-text-2 cursor-not-allowed opacity-50"}`,children:[P(t,{size:18}),P("span",{class:"truncate w-full text-center",children:i.label})]})}function ZE(i){switch(i){case"box":return $p;case"sphere":return OE;case"plane":return Dl;case"cylinder":return BE;case"cone":return $E;case"torus":return kE;case"lightbulb":return Xu;case"sun":return YE;case"spot":return Xu;case"area":return Dl;default:return $p}}function QE(){const i=Xs.value,e=i.filter(n=>n.kind==="light"),t=i.filter(n=>n.kind==="mesh");return P("aside",{class:"relative bg-bg-1 border-r border-border flex flex-col text-[12px] pointer-events-auto",style:{width:`${ct.value.outlinerW}px`},children:[P("div",{class:"flex items-center justify-between px-2 h-7 border-b border-border bg-bg-2",children:[P("div",{class:"flex items-center gap-1.5 text-text-1",children:[P(VE,{size:12}),P("span",{class:"font-medium text-text-0",children:"Outliner"})]}),P("button",{type:"button",class:"p-1 text-text-1 hover:bg-bg-3 hover:text-text-0 rounded disabled:opacity-50",title:"Add (T-D7)",disabled:!0,children:P(XE,{size:12})})]}),P("div",{class:"flex-1 overflow-auto",children:[P(Qp,{label:"Lights",nodes:e}),P(Qp,{label:"Meshes",nodes:t}),i.length===0&&P("div",{class:"p-2 text-text-2 italic",children:"Empty scene."})]}),P("div",{class:"border-t border-border bg-bg-2 h-7 px-2 flex items-center text-text-1 flex-shrink-0",children:P("span",{class:"font-medium text-text-0",children:"Assets"})}),P("div",{class:"flex-1 min-h-0 max-h-[50%] flex flex-col border-t border-border/40",children:P(KE,{})}),P(n0,{side:"left",width:ct.value.outlinerW,onResize:n=>ct.value={...ct.value,outlinerW:n},min:200,max:480})]})}function Qp(i){return i.nodes.length===0?null:P("div",{class:"border-b border-border/40 last:border-b-0",children:[P("div",{class:"px-2 py-1 text-[10px] uppercase tracking-wider text-text-2 font-semibold",children:i.label}),P("ul",{children:i.nodes.map(e=>P(JE,{node:e},e.id))})]})}function JE(i){const e=zn.value===i.node.id;return P("li",{class:`group flex items-center gap-1.5 px-2 h-[22px] cursor-pointer select-none ${e?"bg-accent/20 text-text-0":"text-text-1 hover:bg-bg-3 hover:text-text-0"}`,onClick:()=>{zn.value=i.node.id},children:[P("span",{class:`flex-shrink-0 ${e?"text-accent":"text-text-2"}`,children:i.node.kind==="light"?P(Xu,{size:12}):P(Dl,{size:12})}),P("span",{class:"flex-1 truncate text-[12px]",children:i.node.name}),P("button",{type:"button",class:"p-0.5 opacity-0 group-hover:opacity-100 text-text-2 hover:text-text-0",onClick:t=>{var r;t.stopPropagation();const n=!i.node.visible;(r=dr())==null||r.setNodeVisible(i.node.id,n),Xs.value=Xs.value.map(s=>s.id===i.node.id?{...s,visible:n}:s)},title:i.node.visible?"Hide":"Show",children:i.node.visible?P(zE,{size:12}):P(HE,{size:12})})]})}function eA(){const i=ea.value,e=ur.value==="baking";return!i||e?null:P("button",{type:"button","data-stale-banner":!0,onClick:()=>{const n=dr();!(n!=null&&n.requestBake)||n.requestBake()},class:"absolute bottom-2 left-1/2 -translate-x-1/2 z-30 bg-stale text-bg-0 rounded-full px-4 py-1.5 text-[12px] font-medium shadow-lg cursor-pointer hover:bg-stale/90 flex items-center gap-2 pointer-events-auto",title:"Re-bake the lightmap (B)",children:[P(Hh,{size:14}),P("span",{children:"Scene changed \u2014 Re-bake (B)"})]})}const tA=wh(()=>ur.value==="baking");function nA(){const i=dr();!(i!=null&&i.requestBake)||i.requestBake()}function iA(){ct.value={...ct.value,logOpen:!ct.value.logOpen}}function rA(){const i=Pl.value,e=tA.value,t=ea.value;return P("footer",{class:"h-10 bg-bg-1 border-t border-border flex items-center gap-3 px-3 text-[12px] pointer-events-auto relative",children:[P("button",{type:"button",class:`flex items-center gap-1.5 px-3 py-1.5 rounded font-medium text-[12px] ${e?"bg-stale/20 text-stale border border-stale/40 cursor-wait":t?"bg-stale text-bg-0 hover:bg-stale/90 animate-pulse":"bg-accent text-bg-0 hover:bg-accent/90"}`,onClick:nA,disabled:e,children:[e?P(Dl,{size:12}):P(WE,{size:12,fill:"currentColor"}),P("span",{children:e?"Baking\u2026":t?"Re-bake":"Bake"})]}),P("div",{class:"flex-1 max-w-md",children:P("div",{class:"h-1.5 bg-bg-3 rounded-full overflow-hidden",children:P("div",{class:"h-full bg-accent transition-[width] duration-150",style:{width:`${i.pct}%`}})})}),P("div",{class:"flex items-center gap-3 text-text-1 font-mono text-[11px]",children:[P("span",{children:[i.samples,"/",i.total," frames"]}),i.atlas>0&&P("span",{children:["Atlases: ",i.atlas]}),P("span",{children:[(i.elapsedMs/1e3).toFixed(1),"s"]})]}),P("button",{type:"button",class:"ml-auto flex items-center gap-1 p-1.5 text-text-1 hover:bg-bg-3 hover:text-text-0 rounded",onClick:iA,title:"Logs",children:[P(i0,{size:14}),P("span",{class:"text-[11px]",children:Sg.value.length}),P(FE,{size:12,class:`transition-transform ${ct.value.logOpen?"rotate-180":""}`})]}),ct.value.logOpen&&P(sA,{})]})}function sA(){const i=Sg.value.slice().reverse();return P("div",{class:"absolute bottom-full right-2 mb-1 w-[420px] max-h-72 overflow-auto bg-bg-1 border border-border rounded shadow-xl font-mono text-[11px] z-50",children:i.length===0?P("div",{class:"p-3 text-text-2 italic",children:"No log entries yet."}):P("ul",{children:i.map(e=>P("li",{class:`px-2 py-1 border-b border-border/40 last:border-b-0 ${e.level==="error"?"text-red-400":e.level==="warn"?"text-stale":"text-text-1"}`,children:[P("span",{class:"text-text-2 mr-2",children:new Date(e.ts).toLocaleTimeString()}),e.msg]},e.ts))})})}const Co=Ht(null);let oA=1;function aA(i,e){Co.value={id:oA++,kind:i,text:e}}function lA(){const i=Co.value;if(Zs(()=>{if(!i)return;const n=setTimeout(()=>{var r;((r=Co.value)==null?void 0:r.id)===i.id&&(Co.value=null)},4e3);return()=>clearTimeout(n)},[i==null?void 0:i.id]),!i)return null;const e=i.kind==="error";return P("div",{class:`fixed top-12 left-1/2 -translate-x-1/2 z-[90] px-4 py-2 rounded-lg shadow-xl flex items-center gap-2 text-[12px] font-medium pointer-events-auto cursor-pointer ${e?"bg-red-900/95 text-red-100 border border-red-700":"bg-bg-1/95 backdrop-blur text-text-0 border border-border"}`,onClick:()=>Co.value=null,role:"status",children:[P(e?Hh:i0,{size:14}),P("span",{children:i.text})]})}function cA(){const i=document.getElementById("baker-glb-input"),e=i!=null?i:document.querySelector('input[type="file"][accept=".glb,.gltf"]');e==null||e.click()}an.register("File",{id:"file.new",label:"New Scene",action:()=>{console.log("[demo] File \u2192 New Scene (stub)")}});an.register("File",{id:"file.open-glb",label:"Open .glb\u2026",hotkey:"Ctrl+O",action:cA});an.register("File",{id:"file.export-glb",label:"Export Scene as GLB",separatorBefore:!0,action:()=>{const i=dr();!(i!=null&&i.exportSceneGLB)||i.exportSceneGLB()}});an.register("Edit",{id:"edit.undo",label:"Undo",hotkey:"Ctrl+Z",disabled:!0,action:()=>{}});an.register("Edit",{id:"edit.redo",label:"Redo",hotkey:"Ctrl+Shift+Z",disabled:!0,action:()=>{}});an.register("Edit",{id:"edit.prefs",label:"Preferences",separatorBefore:!0,action:()=>{console.log("[demo] Edit \u2192 Preferences (stub)")}});let qu=280,Yu=320;an.register("View",{id:"view.toggle-outliner",label:"Toggle Outliner",action:()=>{const i=ct.value.outlinerW;i>0?(qu=i,ct.value={...ct.value,outlinerW:0}):ct.value={...ct.value,outlinerW:qu||280}}});an.register("View",{id:"view.toggle-inspector",label:"Toggle Inspector",action:()=>{const i=ct.value.inspectorW;i>0?(Yu=i,ct.value={...ct.value,inspectorW:0}):ct.value={...ct.value,inspectorW:Yu||320}}});an.register("View",{id:"view.reset-layout",label:"Reset Layout",separatorBefore:!0,action:()=>{qu=280,Yu=320,ct.value={...ct.value,outlinerW:280,inspectorW:320}}});an.register("Help",{id:"help.github",label:"GitHub",action:()=>{window.open("https://github.com/lucas-jones/three-lightmap-baker","_blank")}});an.register("Help",{id:"help.about",label:"About",separatorBefore:!0,action:()=>{console.log("[demo] Help \u2192 About (stub)")}});function uA(i){const[e,t]=bh(!1),n=Ds(null);Eu.value;const r=an.items_for(i.menuId);Zs(()=>{if(!e)return;const o=l=>{const c=n.current;c&&!c.contains(l.target)&&t(!1)},a=l=>{l.key==="Escape"&&t(!1)};return window.addEventListener("mousedown",o),window.addEventListener("keydown",a),()=>{window.removeEventListener("mousedown",o),window.removeEventListener("keydown",a)}},[e]);const s=o=>{if(!o.disabled){try{o.action()}catch(a){console.error(`[demo] menu item ${o.id} failed`,a)}t(!1)}};return P("div",{ref:n,class:"relative",children:[P("button",{type:"button","aria-haspopup":"menu","aria-expanded":e,"data-menu-id":i.menuId,class:`px-2.5 py-1 text-[12px] rounded ${e?"bg-bg-3 text-text-0":"text-text-1 hover:bg-bg-3 hover:text-text-0"}`,onClick:()=>t(o=>!o),children:i.menuId}),e&&P("div",{role:"menu","data-menu-popover":i.menuId,class:"absolute top-full mt-0.5 left-0 w-56 bg-bg-1 border border-border rounded shadow-xl z-50",children:r.length===0?P("div",{class:"px-3 h-6 flex items-center text-[12px] text-text-2 italic",children:"(empty)"}):r.map(o=>P(hA,{item:o,onClick:s},o.id))})]})}function hA(i){const e=i.item;if(e.when&&!e.when())return null;const t=e.separatorBefore?"border-t border-border/40 my-0.5":"";return P(Ur,{children:[e.separatorBefore&&P("div",{class:t}),P("div",{role:"menuitem","data-menu-item-id":e.id,"aria-disabled":e.disabled?!0:void 0,class:`flex items-center justify-between px-3 h-6 text-[12px] text-text-1 ${e.disabled?"opacity-50 cursor-not-allowed":"hover:bg-bg-3 cursor-pointer"}`,onClick:()=>i.onClick(e),children:[P("span",{class:"truncate",children:e.label}),e.hotkey&&P("span",{class:"text-text-2 text-[10px] ml-2",children:e.hotkey})]})]})}const dA={cornell:"Cornell","threejs-port":"three.js Ports",interior:"Interior",isometric:"Isometric",showcase:"Showcase"};function fA(){var l;const[i,e]=bh(!1),t=Ds(null),n=ci.list(),r=ci.listByCategory(),s=n.find(c=>c.id===Da.value),o=(l=s==null?void 0:s.label)!=null?l:Da.value;Zs(()=>{if(!i)return;const c=h=>{const d=t.current;d&&!d.contains(h.target)&&e(!1)},u=h=>{h.key==="Escape"&&e(!1)};return window.addEventListener("mousedown",c),window.addEventListener("keydown",u),()=>{window.removeEventListener("mousedown",c),window.removeEventListener("keydown",u)}},[i]);const a=c=>{var u;Da.value=c,(u=dr())==null||u.loadScenePreset(c),e(!1)};return P("div",{ref:t,class:"relative",children:[P("button",{type:"button","aria-haspopup":"menu","aria-expanded":i,"data-testid":"scene-picker",class:"flex items-center gap-1.5 px-2.5 py-1 text-[12px] text-text-0 bg-bg-2 hover:bg-bg-3 rounded border border-border",onClick:()=>e(c=>!c),children:[P("span",{class:"truncate max-w-[180px]",children:o}),P(NE,{size:12,class:"text-text-2"})]}),i&&P("div",{role:"menu",class:"absolute top-full mt-0.5 right-0 w-64 bg-bg-1 border border-border rounded shadow-xl z-50 max-h-[60vh] overflow-auto",children:n.length===0?P("div",{class:"px-3 h-6 flex items-center text-[12px] text-text-2 italic opacity-50 cursor-not-allowed",children:"No scenes registered yet"}):Array.from(r.entries()).map(([c,u])=>{var h;return P("div",{class:"border-b border-border/40 last:border-b-0",children:[P("div",{class:"px-3 py-1 text-[10px] uppercase tracking-wider text-text-2 font-semibold",children:(h=dA[c])!=null?h:c}),u.map(d=>{const f=d.id===Da.value;return P("div",{role:"menuitem","data-scene-id":d.id,class:`flex items-center justify-between px-3 h-6 text-[12px] cursor-pointer ${f?"bg-accent/20 text-text-0":"text-text-1 hover:bg-bg-3 hover:text-text-0"}`,onClick:()=>a(d.id),children:P("span",{class:"truncate",children:d.label})},d.id)})]},c)})})]})}const pA=["File","Edit","View","Render","Help"];function mA(){Au.value=!Au.value}function gA(){const i=Au.value;return P("header",{class:"h-9 bg-bg-1/95 backdrop-blur border-b border-border flex items-center px-2 select-none pointer-events-auto",children:[P("div",{class:"flex items-center gap-2 px-2 mr-2",children:[P("span",{class:"text-accent text-base leading-none",children:"\u2B22"}),P("span",{class:"font-semibold text-text-0 text-[13px]",children:"Lightmap Studio"})]}),P("nav",{class:"flex items-center gap-0.5",children:pA.map(e=>P(uA,{menuId:e},e))}),P("div",{class:"flex-1"}),P("div",{class:"flex items-center gap-1",children:[P(fA,{}),P("button",{type:"button","aria-pressed":i,"data-testid":"compare-toggle",class:`p-1.5 rounded ${i?"bg-accent/20 text-accent":"text-text-1 hover:bg-bg-3 hover:text-text-0"}`,title:"Compare with reference",onClick:mA,children:P(GE,{size:14})}),P("button",{type:"button",class:"p-1.5 text-text-1 hover:bg-bg-3 hover:text-text-0 rounded",title:"Settings (T-D9)",disabled:!0,children:P(qE,{size:14})})]})]})}function _A(){const e=lr.value==="pathtraced",t=n=>{var s;lr.value=n;const r=dr();(s=r==null?void 0:r.setRenderMode)==null||s.call(r,n)};return P("div",{class:"pointer-events-auto absolute top-3 right-3 flex items-center rounded-full border border-border bg-bg-1 text-[11px] font-medium select-none overflow-hidden shadow-md",style:"z-index:10",children:[P("button",{type:"button",onClick:()=>t("combined"),class:["px-3 py-1 transition-colors",e?"text-text-1 hover:text-text-0 hover:bg-bg-2":"bg-accent text-white"].join(" "),title:"Fast Preview \u2014 standard rasterisation (hotkey: P)",children:"Fast Preview"}),P("button",{type:"button",onClick:()=>t("pathtraced"),class:["px-3 py-1 transition-colors",e?"bg-accent text-white":"text-text-1 hover:text-text-0 hover:bg-bg-2"].join(" "),title:"Path Traced \u2014 progressive BVH path tracer (hotkey: P)",children:"Path Traced"})]})}const r0="lightmap-studio.layout.v1";function xA(){var i,e,t;try{const n=localStorage.getItem(r0);if(!n)return;const r=JSON.parse(n);ct.value={outlinerW:(i=r.outlinerW)!=null?i:ct.value.outlinerW,inspectorW:(e=r.inspectorW)!=null?e:ct.value.inspectorW,logOpen:(t=r.logOpen)!=null?t:ct.value.logOpen}}catch{}}let jc=null;function vA(){jc&&clearTimeout(jc),jc=setTimeout(()=>{try{localStorage.setItem(r0,JSON.stringify(ct.value))}catch{}},500)}function yA(){return Zs(()=>(xA(),ct.subscribe(()=>vA())),[]),P(Ur,{children:[P("div",{class:"fixed inset-0 flex flex-col pointer-events-none z-40",children:[P(gA,{}),P("div",{class:"flex-1 flex min-h-0 relative",children:[P(QE,{}),P("div",{class:"flex-1 relative pointer-events-none",children:P(_A,{})}),P(aE,{}),P(eA,{})]}),P(rA,{})]}),P(lA,{}),P(jE,{})]})}const bA="modulepreload",Jp={},MA="/three-lightmap-baker/",bo=function(e,t){return!t||t.length===0?e():Promise.all(t.map(n=>{if(n=`${MA}${n}`,n in Jp)return;Jp[n]=!0;const r=n.endsWith(".css"),s=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${s}`))return;const o=document.createElement("link");if(o.rel=r?"stylesheet":bA,r||(o.as="script",o.crossOrigin=""),o.href=n,document.head.appendChild(o),r)return new Promise((a,l)=>{o.addEventListener("load",a),o.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${n}`)))})})).then(()=>e())};class TA{constructor(e,t){this.renderer=e,this.scene=t,this.bakeGroups=[],this.meshToGroup=new Map,this.bakeResult=null,this.firstPostBakeRender=!1,this.onProgress=null,this.dummyLightmap=null,this.diag=new t0(e)}getDummyLightmap(){if(this.dummyLightmap)return this.dummyLightmap;const e=new Uint8Array([255,255,255,255]),t=new Hn(e,1,1);return t.needsUpdate=!0,t.channel=2,this.dummyLightmap=t,t}installDummyLightmaps(e){const t=this.getDummyLightmap();for(const n of e){const r=n.material;!r||(r.lightMap=t,r.lightMapIntensity=0,r.needsUpdate=!0)}}disposeAllGroups(){var e,t;for(const n of this.bakeGroups)(e=n.refinement)==null||e.dispose(),n.composite.dispose();this.bakeGroups=[],this.meshToGroup.clear(),(t=this.bakeResult)==null||t.dispose(),this.bakeResult=null}async runBake(e,t,n){if(!e.length)return;this.diag.snap("bake() entry");const r=n.lightMapSize;if(this.scene.updateMatrixWorld(!0),!e.filter(u=>{var h;return((h=n.perMesh[u.uuid])==null?void 0:h.exclude)!==!0}).length){console.warn("[baker] all meshes excluded \u2014 nothing to bake");return}this.disposeAllGroups();let o=null;if(n.secondaryLightEnabled){o=new Qo(new Re(n.secondaryColor).convertSRGBToLinear(),n.secondaryIntensity);const u=new C(n.secondaryDirX,n.secondaryDirY,n.secondaryDirZ).normalize();o.position.copy(u).multiplyScalar(-10),this.scene.add(o)}const a={};for(const u of e){const h=n.perMesh[u.uuid];if(!h)continue;const d={};h.scaleInLightmap!==void 0&&h.scaleInLightmap!==1&&(d.density=h.scaleInLightmap),h.exclude&&(d.exclude=!0),(d.density!==void 0||d.exclude)&&(a[u.uuid]=d)}const l={resolution:r,samples:n.targetSamples,castsPerFrame:n.casts,bounces:n.bounces,filtering:n.filterMode==="linear"?"linear":"nearest",texelsPerMeter:n.texelsPerMeter,perMesh:a,denoise:!1,refinementOptions:{dilationIterations:0,denoiseEnabled:!1},light:{position:t.clone(),color:n.lightColor,intensity:n.lightIntensity,size:n.lightSize,enabled:n.directLightEnabled},gi:{enabled:n.indirectLightEnabled,intensity:n.giIntensity,skyColor:n.skyColor,skyIntensity:n.skyIntensity},ao:{enabled:n.ambientLightEnabled,distance:n.ambientDistance,intensity:n.aoIntensity,exponent:n.aoExponent,samples:n.aoSamples},timeoutProtection:{safeMode:n.safeMode}};let c;try{c=await new kw(this.renderer,l).bake(this.scene,{onFrame:h=>{var f;const d=this.bakeGroups[h.groupIndex];d&&d.composite.refresh(),(h.bounceSamples%30===0||h.done)&&this.diag.snap(`bake RAF samples=${h.bounceSamples}/${h.targetSamples} done=${h.done}`),(f=this.onProgress)==null||f.call(this,h)}})}finally{o&&this.scene.remove(o)}this.bakeResult=c,this.bakeGroups=[],this.meshToGroup.clear();for(let u=0;u<c.groups.length;u++){const h=c.groups[u],d=qg(this.renderer,{direct:h.lightmapper.textures.direct,indirect:h.lightmapper.textures.indirect,ao:h.aoMapper.texture},h.resolution,{directIntensity:n.directIntensity,giIntensity:n.giIntensity,aoEnabled:n.ambientLightEnabled,aoIntensity:n.aoIntensity,aoExponent:n.aoExponent}),f={atlasIdx:u,meshes:[...h.meshes],positionTexture:h.textures.position,normalTexture:h.textures.normal,lightmapper:h.lightmapper,aoMapper:h.aoMapper,composite:d,refinement:null};this.bakeGroups.push(f);for(const g of f.meshes)this.meshToGroup.set(g,f)}this.diag.snap("after baker.bake() return, before applyRenderMode"),this.firstPostBakeRender=!0}tick(){if(!this.bakeGroups.length)return null;let e=!0,t=1/0;const n=[];for(const r of this.bakeGroups){const s=r.lightmapper.render(),o=r.aoMapper.render();(!s.done||!o.done)&&(e=!1);const a=Math.min(s.samples,o.samples);a<t&&(t=a),n.push(a)}if(Number.isFinite(t)||(t=0),!e)for(const r of this.bakeGroups)r.composite.refresh();return{active:!e,allDone:e,minSamples:t,perAtlasSamples:n}}refreshAllComposites(e){for(const t of this.bakeGroups)t.composite.refresh(e)}async runAOOnly(e){if(!this.bakeGroups.length||!this.bakeResult)return;await this.bakeResult.rebakeAO(e);const t=this.bakeResult.groups;for(let n=0;n<this.bakeGroups.length;n++){const r=this.bakeGroups[n],s=t[n];!s||(r.aoMapper=s.aoMapper,r.composite.refresh({aoTex:s.aoMapper.texture}))}}async runRefinement(e,t,n){var r;if(!!this.bakeGroups.length)for(let s=0;s<this.bakeGroups.length;s++){const o=this.bakeGroups[s];(r=o.refinement)==null||r.dispose(),o.refinement=await Uh(this.renderer,o.composite.texture,o.positionTexture,t,e,a=>n(s,a))}}clearRefinement(){var e;for(const t of this.bakeGroups)(e=t.refinement)==null||e.dispose(),t.refinement=null}}const em={type:"change"},Kc={type:"start"},tm={type:"end"},Ka=new Ys,nm=new ti,SA=Math.cos(70*Vm.DEG2RAD);class wA extends Nr{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new C,this.cursor=new C,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:kr.ROTATE,MIDDLE:kr.DOLLY,RIGHT:kr.PAN},this.touches={ONE:zr.ROTATE,TWO:zr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(O){O.addEventListener("keydown",Ce),this._domElementKeyEvents=O},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Ce),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(em),n.update(),s=r.NONE},this.update=function(){const O=new C,le=new qt().setFromUnitVectors(e.up,new C(0,1,0)),ge=le.clone().invert(),Le=new C,N=new qt,ae=new C,oe=2*Math.PI;return function(Ue=null){const rt=n.object.position;O.copy(rt).sub(n.target),O.applyQuaternion(le),a.setFromVector3(O),n.autoRotate&&s===r.NONE&&U(b(Ue)),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let et=n.minAzimuthAngle,pt=n.maxAzimuthAngle;isFinite(et)&&isFinite(pt)&&(et<-Math.PI?et+=oe:et>Math.PI&&(et-=oe),pt<-Math.PI?pt+=oe:pt>Math.PI&&(pt-=oe),et<=pt?a.theta=Math.max(et,Math.min(pt,a.theta)):a.theta=a.theta>(et+pt)/2?Math.max(et,a.theta):Math.min(pt,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&T||n.object.isOrthographicCamera?a.radius=Y(a.radius):a.radius=Y(a.radius*c),O.setFromSpherical(a),O.applyQuaternion(ge),rt.copy(n.target).add(O),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0));let on=!1;if(n.zoomToCursor&&T){let st=null;if(n.object.isPerspectiveCamera){const Nt=O.length();st=Y(Nt*c);const mn=Nt-st;n.object.position.addScaledVector(y,mn),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const Nt=new C(M.x,M.y,0);Nt.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),on=!0;const mn=new C(M.x,M.y,0);mn.unproject(n.object),n.object.position.sub(mn).add(Nt),n.object.updateMatrixWorld(),st=O.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;st!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(st).add(n.object.position):(Ka.origin.copy(n.object.position),Ka.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Ka.direction))<SA?e.lookAt(n.target):(nm.setFromNormalAndCoplanarPoint(n.object.up,n.target),Ka.intersectPlane(nm,n.target))))}else n.object.isOrthographicCamera&&(on=c!==1,on&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix()));return c=1,T=!1,on||Le.distanceToSquared(n.object.position)>o||8*(1-N.dot(n.object.quaternion))>o||ae.distanceToSquared(n.target)>0?(n.dispatchEvent(em),Le.copy(n.object.position),N.copy(n.object.quaternion),ae.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",at),n.domElement.removeEventListener("pointerdown",D),n.domElement.removeEventListener("pointercancel",q),n.domElement.removeEventListener("wheel",re),n.domElement.removeEventListener("pointermove",A),n.domElement.removeEventListener("pointerup",q),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Ce),n._domElementKeyEvents=null)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new Gf,l=new Gf;let c=1;const u=new C,h=new Me,d=new Me,f=new Me,g=new Me,x=new Me,m=new Me,p=new Me,v=new Me,_=new Me,y=new C,M=new Me;let T=!1;const S=[],E={};let L=!1;function b(O){return O!==null?2*Math.PI/60*n.autoRotateSpeed*O:2*Math.PI/60/60*n.autoRotateSpeed}function w(O){const le=Math.abs(O*.01);return Math.pow(.95,n.zoomSpeed*le)}function U(O){l.theta-=O}function k(O){l.phi-=O}const R=function(){const O=new C;return function(ge,Le){O.setFromMatrixColumn(Le,0),O.multiplyScalar(-ge),u.add(O)}}(),F=function(){const O=new C;return function(ge,Le){n.screenSpacePanning===!0?O.setFromMatrixColumn(Le,1):(O.setFromMatrixColumn(Le,0),O.crossVectors(n.object.up,O)),O.multiplyScalar(ge),u.add(O)}}(),B=function(){const O=new C;return function(ge,Le){const N=n.domElement;if(n.object.isPerspectiveCamera){const ae=n.object.position;O.copy(ae).sub(n.target);let oe=O.length();oe*=Math.tan(n.object.fov/2*Math.PI/180),R(2*ge*oe/N.clientHeight,n.object.matrix),F(2*Le*oe/N.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(R(ge*(n.object.right-n.object.left)/n.object.zoom/N.clientWidth,n.object.matrix),F(Le*(n.object.top-n.object.bottom)/n.object.zoom/N.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function V(O){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=O:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function X(O){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=O:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function G(O,le){if(!n.zoomToCursor)return;T=!0;const ge=n.domElement.getBoundingClientRect(),Le=O-ge.left,N=le-ge.top,ae=ge.width,oe=ge.height;M.x=Le/ae*2-1,M.y=-(N/oe)*2+1,y.set(M.x,M.y,1).unproject(n.object).sub(n.object.position).normalize()}function Y(O){return Math.max(n.minDistance,Math.min(n.maxDistance,O))}function J(O){h.set(O.clientX,O.clientY)}function ne(O){G(O.clientX,O.clientX),p.set(O.clientX,O.clientY)}function ee(O){g.set(O.clientX,O.clientY)}function z(O){d.set(O.clientX,O.clientY),f.subVectors(d,h).multiplyScalar(n.rotateSpeed);const le=n.domElement;U(2*Math.PI*f.x/le.clientHeight),k(2*Math.PI*f.y/le.clientHeight),h.copy(d),n.update()}function j(O){v.set(O.clientX,O.clientY),_.subVectors(v,p),_.y>0?V(w(_.y)):_.y<0&&X(w(_.y)),p.copy(v),n.update()}function ue(O){x.set(O.clientX,O.clientY),m.subVectors(x,g).multiplyScalar(n.panSpeed),B(m.x,m.y),g.copy(x),n.update()}function pe(O){G(O.clientX,O.clientY),O.deltaY<0?X(w(O.deltaY)):O.deltaY>0&&V(w(O.deltaY)),n.update()}function he(O){let le=!1;switch(O.code){case n.keys.UP:O.ctrlKey||O.metaKey||O.shiftKey?k(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):B(0,n.keyPanSpeed),le=!0;break;case n.keys.BOTTOM:O.ctrlKey||O.metaKey||O.shiftKey?k(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):B(0,-n.keyPanSpeed),le=!0;break;case n.keys.LEFT:O.ctrlKey||O.metaKey||O.shiftKey?U(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):B(n.keyPanSpeed,0),le=!0;break;case n.keys.RIGHT:O.ctrlKey||O.metaKey||O.shiftKey?U(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):B(-n.keyPanSpeed,0),le=!0;break}le&&(O.preventDefault(),n.update())}function ce(O){if(S.length===1)h.set(O.pageX,O.pageY);else{const le=xe(O),ge=.5*(O.pageX+le.x),Le=.5*(O.pageY+le.y);h.set(ge,Le)}}function de(O){if(S.length===1)g.set(O.pageX,O.pageY);else{const le=xe(O),ge=.5*(O.pageX+le.x),Le=.5*(O.pageY+le.y);g.set(ge,Le)}}function Ee(O){const le=xe(O),ge=O.pageX-le.x,Le=O.pageY-le.y,N=Math.sqrt(ge*ge+Le*Le);p.set(0,N)}function H(O){n.enableZoom&&Ee(O),n.enablePan&&de(O)}function xt(O){n.enableZoom&&Ee(O),n.enableRotate&&ce(O)}function be(O){if(S.length==1)d.set(O.pageX,O.pageY);else{const ge=xe(O),Le=.5*(O.pageX+ge.x),N=.5*(O.pageY+ge.y);d.set(Le,N)}f.subVectors(d,h).multiplyScalar(n.rotateSpeed);const le=n.domElement;U(2*Math.PI*f.x/le.clientHeight),k(2*Math.PI*f.y/le.clientHeight),h.copy(d)}function Ie(O){if(S.length===1)x.set(O.pageX,O.pageY);else{const le=xe(O),ge=.5*(O.pageX+le.x),Le=.5*(O.pageY+le.y);x.set(ge,Le)}m.subVectors(x,g).multiplyScalar(n.panSpeed),B(m.x,m.y),g.copy(x)}function Te(O){const le=xe(O),ge=O.pageX-le.x,Le=O.pageY-le.y,N=Math.sqrt(ge*ge+Le*Le);v.set(0,N),_.set(0,Math.pow(v.y/p.y,n.zoomSpeed)),V(_.y),p.copy(v);const ae=(O.pageX+le.x)*.5,oe=(O.pageY+le.y)*.5;G(ae,oe)}function qe(O){n.enableZoom&&Te(O),n.enablePan&&Ie(O)}function De(O){n.enableZoom&&Te(O),n.enableRotate&&be(O)}function D(O){n.enabled!==!1&&(S.length===0&&(n.domElement.setPointerCapture(O.pointerId),n.domElement.addEventListener("pointermove",A),n.domElement.addEventListener("pointerup",q)),$e(O),O.pointerType==="touch"?Be(O):ie(O))}function A(O){n.enabled!==!1&&(O.pointerType==="touch"?se(O):te(O))}function q(O){switch(ke(O),S.length){case 0:n.domElement.releasePointerCapture(O.pointerId),n.domElement.removeEventListener("pointermove",A),n.domElement.removeEventListener("pointerup",q),n.dispatchEvent(tm),s=r.NONE;break;case 1:const le=S[0],ge=E[le];Be({pointerId:le,pageX:ge.x,pageY:ge.y});break}}function ie(O){let le;switch(O.button){case 0:le=n.mouseButtons.LEFT;break;case 1:le=n.mouseButtons.MIDDLE;break;case 2:le=n.mouseButtons.RIGHT;break;default:le=-1}switch(le){case kr.DOLLY:if(n.enableZoom===!1)return;ne(O),s=r.DOLLY;break;case kr.ROTATE:if(O.ctrlKey||O.metaKey||O.shiftKey){if(n.enablePan===!1)return;ee(O),s=r.PAN}else{if(n.enableRotate===!1)return;J(O),s=r.ROTATE}break;case kr.PAN:if(O.ctrlKey||O.metaKey||O.shiftKey){if(n.enableRotate===!1)return;J(O),s=r.ROTATE}else{if(n.enablePan===!1)return;ee(O),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(Kc)}function te(O){switch(s){case r.ROTATE:if(n.enableRotate===!1)return;z(O);break;case r.DOLLY:if(n.enableZoom===!1)return;j(O);break;case r.PAN:if(n.enablePan===!1)return;ue(O);break}}function re(O){n.enabled===!1||n.enableZoom===!1||s!==r.NONE||(O.preventDefault(),n.dispatchEvent(Kc),pe(Se(O)),n.dispatchEvent(tm))}function Se(O){const le=O.deltaMode,ge={clientX:O.clientX,clientY:O.clientY,deltaY:O.deltaY};switch(le){case 1:ge.deltaY*=16;break;case 2:ge.deltaY*=100;break}return O.ctrlKey&&!L&&(ge.deltaY*=10),ge}function me(O){O.key==="Control"&&(L=!0,n.domElement.getRootNode().addEventListener("keyup",ve,{passive:!0,capture:!0}))}function ve(O){O.key==="Control"&&(L=!1,n.domElement.getRootNode().removeEventListener("keyup",ve,{passive:!0,capture:!0}))}function Ce(O){n.enabled===!1||n.enablePan===!1||he(O)}function Be(O){switch(Pe(O),S.length){case 1:switch(n.touches.ONE){case zr.ROTATE:if(n.enableRotate===!1)return;ce(O),s=r.TOUCH_ROTATE;break;case zr.PAN:if(n.enablePan===!1)return;de(O),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(n.touches.TWO){case zr.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;H(O),s=r.TOUCH_DOLLY_PAN;break;case zr.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;xt(O),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(Kc)}function se(O){switch(Pe(O),s){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;be(O),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;Ie(O),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;qe(O),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;De(O),n.update();break;default:s=r.NONE}}function at(O){n.enabled!==!1&&O.preventDefault()}function $e(O){S.push(O.pointerId)}function ke(O){delete E[O.pointerId];for(let le=0;le<S.length;le++)if(S[le]==O.pointerId){S.splice(le,1);return}}function Pe(O){let le=E[O.pointerId];le===void 0&&(le=new Me,E[O.pointerId]=le),le.set(O.pageX,O.pageY)}function xe(O){const le=O.pointerId===S[0]?S[1]:S[0];return E[le]}n.domElement.addEventListener("contextmenu",at),n.domElement.addEventListener("pointerdown",D),n.domElement.addEventListener("pointercancel",q),n.domElement.addEventListener("wheel",re,{passive:!1}),n.domElement.getRootNode().addEventListener("keydown",me,{passive:!0,capture:!0}),this.update()}}const vr=new pg,dn=new C,Qi=new C,wt=new qt,im={X:new C(1,0,0),Y:new C(0,1,0),Z:new C(0,0,1)},Zc={type:"change"},rm={type:"mouseDown"},sm={type:"mouseUp",mode:null},om={type:"objectChange"};class EA extends Ye{constructor(e,t){super(),t===void 0&&(console.warn('THREE.TransformControls: The second parameter "domElement" is now mandatory.'),t=document),this.isTransformControls=!0,this.visible=!1,this.domElement=t,this.domElement.style.touchAction="none";const n=new IA;this._gizmo=n,this.add(n);const r=new DA;this._plane=r,this.add(r);const s=this;function o(v,_){let y=_;Object.defineProperty(s,v,{get:function(){return y!==void 0?y:_},set:function(M){y!==M&&(y=M,r[v]=M,n[v]=M,s.dispatchEvent({type:v+"-changed",value:M}),s.dispatchEvent(Zc))}}),s[v]=_,r[v]=_,n[v]=_}o("camera",e),o("object",void 0),o("enabled",!0),o("axis",null),o("mode","translate"),o("translationSnap",null),o("rotationSnap",null),o("scaleSnap",null),o("space","world"),o("size",1),o("dragging",!1),o("showX",!0),o("showY",!0),o("showZ",!0);const a=new C,l=new C,c=new qt,u=new qt,h=new C,d=new qt,f=new C,g=new C,x=new C,m=0,p=new C;o("worldPosition",a),o("worldPositionStart",l),o("worldQuaternion",c),o("worldQuaternionStart",u),o("cameraPosition",h),o("cameraQuaternion",d),o("pointStart",f),o("pointEnd",g),o("rotationAxis",x),o("rotationAngle",m),o("eye",p),this._offset=new C,this._startNorm=new C,this._endNorm=new C,this._cameraScale=new C,this._parentPosition=new C,this._parentQuaternion=new qt,this._parentQuaternionInv=new qt,this._parentScale=new C,this._worldScaleStart=new C,this._worldQuaternionInv=new qt,this._worldScale=new C,this._positionStart=new C,this._quaternionStart=new qt,this._scaleStart=new C,this._getPointer=AA.bind(this),this._onPointerDown=CA.bind(this),this._onPointerHover=RA.bind(this),this._onPointerMove=PA.bind(this),this._onPointerUp=LA.bind(this),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointermove",this._onPointerHover),this.domElement.addEventListener("pointerup",this._onPointerUp)}updateMatrixWorld(){this.object!==void 0&&(this.object.updateMatrixWorld(),this.object.parent===null?console.error("TransformControls: The attached 3D object must be a part of the scene graph."):this.object.parent.matrixWorld.decompose(this._parentPosition,this._parentQuaternion,this._parentScale),this.object.matrixWorld.decompose(this.worldPosition,this.worldQuaternion,this._worldScale),this._parentQuaternionInv.copy(this._parentQuaternion).invert(),this._worldQuaternionInv.copy(this.worldQuaternion).invert()),this.camera.updateMatrixWorld(),this.camera.matrixWorld.decompose(this.cameraPosition,this.cameraQuaternion,this._cameraScale),this.camera.isOrthographicCamera?this.camera.getWorldDirection(this.eye).negate():this.eye.copy(this.cameraPosition).sub(this.worldPosition).normalize(),super.updateMatrixWorld(this)}pointerHover(e){if(this.object===void 0||this.dragging===!0)return;vr.setFromCamera(e,this.camera);const t=Qc(this._gizmo.picker[this.mode],vr);t?this.axis=t.object.name:this.axis=null}pointerDown(e){if(!(this.object===void 0||this.dragging===!0||e.button!==0)&&this.axis!==null){vr.setFromCamera(e,this.camera);const t=Qc(this._plane,vr,!0);t&&(this.object.updateMatrixWorld(),this.object.parent.updateMatrixWorld(),this._positionStart.copy(this.object.position),this._quaternionStart.copy(this.object.quaternion),this._scaleStart.copy(this.object.scale),this.object.matrixWorld.decompose(this.worldPositionStart,this.worldQuaternionStart,this._worldScaleStart),this.pointStart.copy(t.point).sub(this.worldPositionStart)),this.dragging=!0,rm.mode=this.mode,this.dispatchEvent(rm)}}pointerMove(e){const t=this.axis,n=this.mode,r=this.object;let s=this.space;if(n==="scale"?s="local":(t==="E"||t==="XYZE"||t==="XYZ")&&(s="world"),r===void 0||t===null||this.dragging===!1||e.button!==-1)return;vr.setFromCamera(e,this.camera);const o=Qc(this._plane,vr,!0);if(!!o){if(this.pointEnd.copy(o.point).sub(this.worldPositionStart),n==="translate")this._offset.copy(this.pointEnd).sub(this.pointStart),s==="local"&&t!=="XYZ"&&this._offset.applyQuaternion(this._worldQuaternionInv),t.indexOf("X")===-1&&(this._offset.x=0),t.indexOf("Y")===-1&&(this._offset.y=0),t.indexOf("Z")===-1&&(this._offset.z=0),s==="local"&&t!=="XYZ"?this._offset.applyQuaternion(this._quaternionStart).divide(this._parentScale):this._offset.applyQuaternion(this._parentQuaternionInv).divide(this._parentScale),r.position.copy(this._offset).add(this._positionStart),this.translationSnap&&(s==="local"&&(r.position.applyQuaternion(wt.copy(this._quaternionStart).invert()),t.search("X")!==-1&&(r.position.x=Math.round(r.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(r.position.y=Math.round(r.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(r.position.z=Math.round(r.position.z/this.translationSnap)*this.translationSnap),r.position.applyQuaternion(this._quaternionStart)),s==="world"&&(r.parent&&r.position.add(dn.setFromMatrixPosition(r.parent.matrixWorld)),t.search("X")!==-1&&(r.position.x=Math.round(r.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(r.position.y=Math.round(r.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(r.position.z=Math.round(r.position.z/this.translationSnap)*this.translationSnap),r.parent&&r.position.sub(dn.setFromMatrixPosition(r.parent.matrixWorld))));else if(n==="scale"){if(t.search("XYZ")!==-1){let a=this.pointEnd.length()/this.pointStart.length();this.pointEnd.dot(this.pointStart)<0&&(a*=-1),Qi.set(a,a,a)}else dn.copy(this.pointStart),Qi.copy(this.pointEnd),dn.applyQuaternion(this._worldQuaternionInv),Qi.applyQuaternion(this._worldQuaternionInv),Qi.divide(dn),t.search("X")===-1&&(Qi.x=1),t.search("Y")===-1&&(Qi.y=1),t.search("Z")===-1&&(Qi.z=1);r.scale.copy(this._scaleStart).multiply(Qi),this.scaleSnap&&(t.search("X")!==-1&&(r.scale.x=Math.round(r.scale.x/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Y")!==-1&&(r.scale.y=Math.round(r.scale.y/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Z")!==-1&&(r.scale.z=Math.round(r.scale.z/this.scaleSnap)*this.scaleSnap||this.scaleSnap))}else if(n==="rotate"){this._offset.copy(this.pointEnd).sub(this.pointStart);const a=20/this.worldPosition.distanceTo(dn.setFromMatrixPosition(this.camera.matrixWorld));let l=!1;t==="XYZE"?(this.rotationAxis.copy(this._offset).cross(this.eye).normalize(),this.rotationAngle=this._offset.dot(dn.copy(this.rotationAxis).cross(this.eye))*a):(t==="X"||t==="Y"||t==="Z")&&(this.rotationAxis.copy(im[t]),dn.copy(im[t]),s==="local"&&dn.applyQuaternion(this.worldQuaternion),dn.cross(this.eye),dn.length()===0?l=!0:this.rotationAngle=this._offset.dot(dn.normalize())*a),(t==="E"||l)&&(this.rotationAxis.copy(this.eye),this.rotationAngle=this.pointEnd.angleTo(this.pointStart),this._startNorm.copy(this.pointStart).normalize(),this._endNorm.copy(this.pointEnd).normalize(),this.rotationAngle*=this._endNorm.cross(this._startNorm).dot(this.eye)<0?1:-1),this.rotationSnap&&(this.rotationAngle=Math.round(this.rotationAngle/this.rotationSnap)*this.rotationSnap),s==="local"&&t!=="E"&&t!=="XYZE"?(r.quaternion.copy(this._quaternionStart),r.quaternion.multiply(wt.setFromAxisAngle(this.rotationAxis,this.rotationAngle)).normalize()):(this.rotationAxis.applyQuaternion(this._parentQuaternionInv),r.quaternion.copy(wt.setFromAxisAngle(this.rotationAxis,this.rotationAngle)),r.quaternion.multiply(this._quaternionStart).normalize())}this.dispatchEvent(Zc),this.dispatchEvent(om)}}pointerUp(e){e.button===0&&(this.dragging&&this.axis!==null&&(sm.mode=this.mode,this.dispatchEvent(sm)),this.dragging=!1,this.axis=null)}dispose(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerHover),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.traverse(function(e){e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()})}attach(e){return this.object=e,this.visible=!0,this}detach(){return this.object=void 0,this.visible=!1,this.axis=null,this}reset(){!this.enabled||this.dragging&&(this.object.position.copy(this._positionStart),this.object.quaternion.copy(this._quaternionStart),this.object.scale.copy(this._scaleStart),this.dispatchEvent(Zc),this.dispatchEvent(om),this.pointStart.copy(this.pointEnd))}getRaycaster(){return vr}getMode(){return this.mode}setMode(e){this.mode=e}setTranslationSnap(e){this.translationSnap=e}setRotationSnap(e){this.rotationSnap=e}setScaleSnap(e){this.scaleSnap=e}setSize(e){this.size=e}setSpace(e){this.space=e}}function AA(i){if(this.domElement.ownerDocument.pointerLockElement)return{x:0,y:0,button:i.button};{const e=this.domElement.getBoundingClientRect();return{x:(i.clientX-e.left)/e.width*2-1,y:-(i.clientY-e.top)/e.height*2+1,button:i.button}}}function RA(i){if(!!this.enabled)switch(i.pointerType){case"mouse":case"pen":this.pointerHover(this._getPointer(i));break}}function CA(i){!this.enabled||(document.pointerLockElement||this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.pointerHover(this._getPointer(i)),this.pointerDown(this._getPointer(i)))}function PA(i){!this.enabled||this.pointerMove(this._getPointer(i))}function LA(i){!this.enabled||(this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.pointerUp(this._getPointer(i)))}function Qc(i,e,t){const n=e.intersectObject(i,!0);for(let r=0;r<n.length;r++)if(n[r].object.visible||t)return n[r];return!1}const Za=new jo,mt=new C(0,1,0),am=new C(0,0,0),lm=new Fe,Qa=new qt,hl=new qt,xi=new C,cm=new Fe,Po=new C(1,0,0),Mr=new C(0,1,0),Lo=new C(0,0,1),Ja=new C,Mo=new C,To=new C;class IA extends Ye{constructor(){super(),this.isTransformControlsGizmo=!0,this.type="TransformControlsGizmo";const e=new bi({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),t=new fh({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),n=e.clone();n.opacity=.15;const r=t.clone();r.opacity=.5;const s=e.clone();s.color.setHex(16711680);const o=e.clone();o.color.setHex(65280);const a=e.clone();a.color.setHex(255);const l=e.clone();l.color.setHex(16711680),l.opacity=.5;const c=e.clone();c.color.setHex(65280),c.opacity=.5;const u=e.clone();u.color.setHex(255),u.opacity=.5;const h=e.clone();h.opacity=.25;const d=e.clone();d.color.setHex(16776960),d.opacity=.25,e.clone().color.setHex(16776960);const g=e.clone();g.color.setHex(7895160);const x=new Kt(0,.04,.1,12);x.translate(0,.05,0);const m=new _e(.08,.08,.08);m.translate(0,.04,0);const p=new sn;p.setAttribute("position",new yt([0,0,0,1,0,0],3));const v=new Kt(.0075,.0075,.5,3);v.translate(0,.25,0);function _(F,B){const V=new ir(F,.0075,3,64,B*Math.PI*2);return V.rotateY(Math.PI/2),V.rotateX(Math.PI/2),V}function y(){const F=new sn;return F.setAttribute("position",new yt([0,0,0,1,1,1],3)),F}const M={X:[[new $(x,s),[.5,0,0],[0,0,-Math.PI/2]],[new $(x,s),[-.5,0,0],[0,0,Math.PI/2]],[new $(v,s),[0,0,0],[0,0,-Math.PI/2]]],Y:[[new $(x,o),[0,.5,0]],[new $(x,o),[0,-.5,0],[Math.PI,0,0]],[new $(v,o)]],Z:[[new $(x,a),[0,0,.5],[Math.PI/2,0,0]],[new $(x,a),[0,0,-.5],[-Math.PI/2,0,0]],[new $(v,a),null,[Math.PI/2,0,0]]],XYZ:[[new $(new Rs(.1,0),h.clone()),[0,0,0]]],XY:[[new $(new _e(.15,.15,.01),u.clone()),[.15,.15,0]]],YZ:[[new $(new _e(.15,.15,.01),l.clone()),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new $(new _e(.15,.15,.01),c.clone()),[.15,0,.15],[-Math.PI/2,0,0]]]},T={X:[[new $(new Kt(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new $(new Kt(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new $(new Kt(.2,0,.6,4),n),[0,.3,0]],[new $(new Kt(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new $(new Kt(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new $(new Kt(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XYZ:[[new $(new Rs(.2,0),n)]],XY:[[new $(new _e(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new $(new _e(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new $(new _e(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]]},S={START:[[new $(new Rs(.01,2),r),null,null,null,"helper"]],END:[[new $(new Rs(.01,2),r),null,null,null,"helper"]],DELTA:[[new ei(y(),r),null,null,null,"helper"]],X:[[new ei(p,r.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new ei(p,r.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new ei(p,r.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]},E={XYZE:[[new $(_(.5,1),g),null,[0,Math.PI/2,0]]],X:[[new $(_(.5,.5),s)]],Y:[[new $(_(.5,.5),o),null,[0,0,-Math.PI/2]]],Z:[[new $(_(.5,.5),a),null,[0,Math.PI/2,0]]],E:[[new $(_(.75,1),d),null,[0,Math.PI/2,0]]]},L={AXIS:[[new ei(p,r.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]]},b={XYZE:[[new $(new Ei(.25,10,8),n)]],X:[[new $(new ir(.5,.1,4,24),n),[0,0,0],[0,-Math.PI/2,-Math.PI/2]]],Y:[[new $(new ir(.5,.1,4,24),n),[0,0,0],[Math.PI/2,0,0]]],Z:[[new $(new ir(.5,.1,4,24),n),[0,0,0],[0,0,-Math.PI/2]]],E:[[new $(new ir(.75,.1,2,24),n)]]},w={X:[[new $(m,s),[.5,0,0],[0,0,-Math.PI/2]],[new $(v,s),[0,0,0],[0,0,-Math.PI/2]],[new $(m,s),[-.5,0,0],[0,0,Math.PI/2]]],Y:[[new $(m,o),[0,.5,0]],[new $(v,o)],[new $(m,o),[0,-.5,0],[0,0,Math.PI]]],Z:[[new $(m,a),[0,0,.5],[Math.PI/2,0,0]],[new $(v,a),[0,0,0],[Math.PI/2,0,0]],[new $(m,a),[0,0,-.5],[-Math.PI/2,0,0]]],XY:[[new $(new _e(.15,.15,.01),u),[.15,.15,0]]],YZ:[[new $(new _e(.15,.15,.01),l),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new $(new _e(.15,.15,.01),c),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new $(new _e(.1,.1,.1),h.clone())]]},U={X:[[new $(new Kt(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new $(new Kt(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new $(new Kt(.2,0,.6,4),n),[0,.3,0]],[new $(new Kt(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new $(new Kt(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new $(new Kt(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XY:[[new $(new _e(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new $(new _e(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new $(new _e(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new $(new _e(.2,.2,.2),n),[0,0,0]]]},k={X:[[new ei(p,r.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new ei(p,r.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new ei(p,r.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]};function R(F){const B=new Ye;for(const V in F)for(let X=F[V].length;X--;){const G=F[V][X][0].clone(),Y=F[V][X][1],J=F[V][X][2],ne=F[V][X][3],ee=F[V][X][4];G.name=V,G.tag=ee,Y&&G.position.set(Y[0],Y[1],Y[2]),J&&G.rotation.set(J[0],J[1],J[2]),ne&&G.scale.set(ne[0],ne[1],ne[2]),G.updateMatrix();const z=G.geometry.clone();z.applyMatrix4(G.matrix),G.geometry=z,G.renderOrder=1/0,G.position.set(0,0,0),G.rotation.set(0,0,0),G.scale.set(1,1,1),B.add(G)}return B}this.gizmo={},this.picker={},this.helper={},this.add(this.gizmo.translate=R(M)),this.add(this.gizmo.rotate=R(E)),this.add(this.gizmo.scale=R(w)),this.add(this.picker.translate=R(T)),this.add(this.picker.rotate=R(b)),this.add(this.picker.scale=R(U)),this.add(this.helper.translate=R(S)),this.add(this.helper.rotate=R(L)),this.add(this.helper.scale=R(k)),this.picker.translate.visible=!1,this.picker.rotate.visible=!1,this.picker.scale.visible=!1}updateMatrixWorld(e){const n=(this.mode==="scale"?"local":this.space)==="local"?this.worldQuaternion:hl;this.gizmo.translate.visible=this.mode==="translate",this.gizmo.rotate.visible=this.mode==="rotate",this.gizmo.scale.visible=this.mode==="scale",this.helper.translate.visible=this.mode==="translate",this.helper.rotate.visible=this.mode==="rotate",this.helper.scale.visible=this.mode==="scale";let r=[];r=r.concat(this.picker[this.mode].children),r=r.concat(this.gizmo[this.mode].children),r=r.concat(this.helper[this.mode].children);for(let s=0;s<r.length;s++){const o=r[s];o.visible=!0,o.rotation.set(0,0,0),o.position.copy(this.worldPosition);let a;if(this.camera.isOrthographicCamera?a=(this.camera.top-this.camera.bottom)/this.camera.zoom:a=this.worldPosition.distanceTo(this.cameraPosition)*Math.min(1.9*Math.tan(Math.PI*this.camera.fov/360)/this.camera.zoom,7),o.scale.set(1,1,1).multiplyScalar(a*this.size/4),o.tag==="helper"){o.visible=!1,o.name==="AXIS"?(o.visible=!!this.axis,this.axis==="X"&&(wt.setFromEuler(Za.set(0,0,0)),o.quaternion.copy(n).multiply(wt),Math.abs(mt.copy(Po).applyQuaternion(n).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Y"&&(wt.setFromEuler(Za.set(0,0,Math.PI/2)),o.quaternion.copy(n).multiply(wt),Math.abs(mt.copy(Mr).applyQuaternion(n).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Z"&&(wt.setFromEuler(Za.set(0,Math.PI/2,0)),o.quaternion.copy(n).multiply(wt),Math.abs(mt.copy(Lo).applyQuaternion(n).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="XYZE"&&(wt.setFromEuler(Za.set(0,Math.PI/2,0)),mt.copy(this.rotationAxis),o.quaternion.setFromRotationMatrix(lm.lookAt(am,mt,Mr)),o.quaternion.multiply(wt),o.visible=this.dragging),this.axis==="E"&&(o.visible=!1)):o.name==="START"?(o.position.copy(this.worldPositionStart),o.visible=this.dragging):o.name==="END"?(o.position.copy(this.worldPosition),o.visible=this.dragging):o.name==="DELTA"?(o.position.copy(this.worldPositionStart),o.quaternion.copy(this.worldQuaternionStart),dn.set(1e-10,1e-10,1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1),dn.applyQuaternion(this.worldQuaternionStart.clone().invert()),o.scale.copy(dn),o.visible=this.dragging):(o.quaternion.copy(n),this.dragging?o.position.copy(this.worldPositionStart):o.position.copy(this.worldPosition),this.axis&&(o.visible=this.axis.search(o.name)!==-1));continue}o.quaternion.copy(n),this.mode==="translate"||this.mode==="scale"?(o.name==="X"&&Math.abs(mt.copy(Po).applyQuaternion(n).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Y"&&Math.abs(mt.copy(Mr).applyQuaternion(n).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Z"&&Math.abs(mt.copy(Lo).applyQuaternion(n).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XY"&&Math.abs(mt.copy(Lo).applyQuaternion(n).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="YZ"&&Math.abs(mt.copy(Po).applyQuaternion(n).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XZ"&&Math.abs(mt.copy(Mr).applyQuaternion(n).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1)):this.mode==="rotate"&&(Qa.copy(n),mt.copy(this.eye).applyQuaternion(wt.copy(n).invert()),o.name.search("E")!==-1&&o.quaternion.setFromRotationMatrix(lm.lookAt(this.eye,am,Mr)),o.name==="X"&&(wt.setFromAxisAngle(Po,Math.atan2(-mt.y,mt.z)),wt.multiplyQuaternions(Qa,wt),o.quaternion.copy(wt)),o.name==="Y"&&(wt.setFromAxisAngle(Mr,Math.atan2(mt.x,mt.z)),wt.multiplyQuaternions(Qa,wt),o.quaternion.copy(wt)),o.name==="Z"&&(wt.setFromAxisAngle(Lo,Math.atan2(mt.y,mt.x)),wt.multiplyQuaternions(Qa,wt),o.quaternion.copy(wt))),o.visible=o.visible&&(o.name.indexOf("X")===-1||this.showX),o.visible=o.visible&&(o.name.indexOf("Y")===-1||this.showY),o.visible=o.visible&&(o.name.indexOf("Z")===-1||this.showZ),o.visible=o.visible&&(o.name.indexOf("E")===-1||this.showX&&this.showY&&this.showZ),o.material._color=o.material._color||o.material.color.clone(),o.material._opacity=o.material._opacity||o.material.opacity,o.material.color.copy(o.material._color),o.material.opacity=o.material._opacity,this.enabled&&this.axis&&(o.name===this.axis||this.axis.split("").some(function(l){return o.name===l}))&&(o.material.color.setHex(16776960),o.material.opacity=1)}super.updateMatrixWorld(e)}}class DA extends ${constructor(){super(new Rn(1e5,1e5,2,2),new bi({visible:!1,wireframe:!0,side:vn,transparent:!0,opacity:.1,toneMapped:!1})),this.isTransformControlsPlane=!0,this.type="TransformControlsPlane"}updateMatrixWorld(e){let t=this.space;switch(this.position.copy(this.worldPosition),this.mode==="scale"&&(t="local"),Ja.copy(Po).applyQuaternion(t==="local"?this.worldQuaternion:hl),Mo.copy(Mr).applyQuaternion(t==="local"?this.worldQuaternion:hl),To.copy(Lo).applyQuaternion(t==="local"?this.worldQuaternion:hl),mt.copy(Mo),this.mode){case"translate":case"scale":switch(this.axis){case"X":mt.copy(this.eye).cross(Ja),xi.copy(Ja).cross(mt);break;case"Y":mt.copy(this.eye).cross(Mo),xi.copy(Mo).cross(mt);break;case"Z":mt.copy(this.eye).cross(To),xi.copy(To).cross(mt);break;case"XY":xi.copy(To);break;case"YZ":xi.copy(Ja);break;case"XZ":mt.copy(To),xi.copy(Mo);break;case"XYZ":case"E":xi.set(0,0,0);break}break;case"rotate":default:xi.set(0,0,0)}xi.length()===0?this.quaternion.copy(this.cameraQuaternion):(cm.lookAt(dn.set(0,0,0),xi,mt),this.quaternion.setFromRotationMatrix(cm)),super.updateMatrixWorld(e)}}class UA extends Fr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new kA(t)}),this.register(function(t){return new $A(t)}),this.register(function(t){return new jA(t)}),this.register(function(t){return new KA(t)}),this.register(function(t){return new HA(t)}),this.register(function(t){return new GA(t)}),this.register(function(t){return new VA(t)}),this.register(function(t){return new WA(t)}),this.register(function(t){return new BA(t)}),this.register(function(t){return new XA(t)}),this.register(function(t){return new zA(t)}),this.register(function(t){return new YA(t)}),this.register(function(t){return new qA(t)}),this.register(function(t){return new FA(t)}),this.register(function(t){return new ZA(t)}),this.register(function(t){return new QA(t)})}load(e,t,n,r){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=Oo.extractUrlBase(e);o=Oo.resolveURL(c,this.path)}else o=Oo.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){r?r(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new mh(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,o,function(u){t(u),s.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,r){let s;const o={},a={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===s0){try{o[tt.KHR_BINARY_GLTF]=new JA(e)}catch(h){r&&r(h);return}s=JSON.parse(o[tt.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new d2(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const h=s.extensionsUsed[u],d=s.extensionsRequired||[];switch(h){case tt.KHR_MATERIALS_UNLIT:o[h]=new OA;break;case tt.KHR_DRACO_MESH_COMPRESSION:o[h]=new e2(s,this.dracoLoader);break;case tt.KHR_TEXTURE_TRANSFORM:o[h]=new t2;break;case tt.KHR_MESH_QUANTIZATION:o[h]=new n2;break;default:d.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,r)}parseAsync(e,t){const n=this;return new Promise(function(r,s){n.parse(e,t,r,s)})}}function NA(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const tt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class FA{constructor(e){this.parser=e,this.name=tt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,r=t.length;n<r;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let r=t.cache.get(n);if(r)return r;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const u=new Re(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],Qt);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Qo(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Or(u),c.distance=h;break;case"spot":c=new _h(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,nr(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),r=Promise.resolve(c),t.cache.add(n,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class OA{constructor(){this.name=tt.KHR_MATERIALS_UNLIT}getMaterialType(){return bi}extendParams(e,t,n){const r=[];e.color=new Re(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Qt),e.opacity=o[3]}s.baseColorTexture!==void 0&&r.push(n.assignTexture(e,"map",s.baseColorTexture,Rt))}return Promise.all(r)}}class BA{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class kA{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ai}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Me(a,a)}return Promise.all(s)}}class zA{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ai}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class HA{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ai}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Re(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=r.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Qt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Rt)),o.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class GA{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ai}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class VA{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ai}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Re().setRGB(a[0],a[1],a[2],Qt),Promise.all(s)}}class WA{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ai}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class XA{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ai}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Re().setRGB(a[0],a[1],a[2],Qt),o.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Rt)),Promise.all(s)}}class qA{constructor(e){this.parser=e,this.name=tt.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ai}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(s)}}class YA{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ai}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class $A{constructor(e){this.parser=e,this.name=tt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,r=n.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const s=r.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class jA{constructor(e){this.parser=e,this.name=tt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,r=n.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=r.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class KA{constructor(e){this.parser=e,this.name=tt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,r=n.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=r.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class ZA{constructor(e){this.name=tt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const r=n.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=r.byteOffset||0,c=r.byteLength||0,u=r.count,h=r.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,d,r.mode,r.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(f),u,h,d,r.mode,r.filter),f})})}else return null}}class QA{constructor(e){this.name=tt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const r=t.meshes[n.mesh];for(const c of r.primitives)if(c.mode!==Xn.TRIANGLES&&c.mode!==Xn.TRIANGLE_STRIP&&c.mode!==Xn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],d=c[0].count,f=[];for(const g of h){const x=new Fe,m=new C,p=new qt,v=new C(1,1,1),_=new i1(g.geometry,g.material,d);for(let y=0;y<d;y++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,y),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,y),l.SCALE&&v.fromBufferAttribute(l.SCALE,y),_.setMatrixAt(y,x.compose(m,p,v));for(const y in l)if(y==="_COLOR_0"){const M=l[y];_.instanceColor=new bu(M.array,M.itemSize,M.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&g.geometry.setAttribute(y,l[y]);Ye.prototype.copy.call(_,g),this.parser.assignFinalMaterial(_),f.push(_)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}}const s0="glTF",So=12,um={JSON:1313821514,BIN:5130562};class JA{constructor(e){this.name=tt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,So),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==s0)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-So,s=new DataView(e,So);let o=0;for(;o<r;){const a=s.getUint32(o,!0);o+=4;const l=s.getUint32(o,!0);if(o+=4,l===um.JSON){const c=new Uint8Array(e,So+o,a);this.content=n.decode(c)}else if(l===um.BIN){const c=So+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class e2{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=tt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const h=$u[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=$u[u]||u.toLowerCase();if(o[u]!==void 0){const d=n.accessors[e.attributes[u]],f=Us[d.componentType];c[h]=f.name,l[h]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(h,d){r.decodeDracoFile(u,function(f){for(const g in f.attributes){const x=f.attributes[g],m=l[g];m!==void 0&&(x.normalized=m)}h(f)},a,c,Qt,d)})})}}class t2{constructor(){this.name=tt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class n2{constructor(){this.name=tt.KHR_MESH_QUANTIZATION}}class o0 extends Zo{constructor(e,t,n,r){super(e,t,n,r)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let o=0;o!==r;o++)t[o]=n[s+o];return t}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=r-t,h=(n-t)/u,d=h*h,f=d*h,g=e*c,x=g-c,m=-2*f+3*d,p=f-d,v=1-m,_=p-d+h;for(let y=0;y!==a;y++){const M=o[x+y+a],T=o[x+y+l]*u,S=o[g+y+a],E=o[g+y]*u;s[y]=v*M+_*T+m*S+p*E}return s}}const i2=new qt;class r2 extends o0{interpolate_(e,t,n,r){const s=super.interpolate_(e,t,n,r);return i2.fromArray(s).normalize().toArray(s),s}}const Xn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Us={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},hm={9728:Qe,9729:it,9984:pu,9985:nl,9986:Ss,9987:yi},dm={33071:Yt,33648:xl,10497:Bs},Jc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},$u={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ji={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},s2={CUBICSPLINE:void 0,LINEAR:zs,STEP:Vo},eu={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function o2(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Ut({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ai})),i.DefaultMaterial}function yr(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function nr(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function a2(i,e,t){let n=!1,r=!1,s=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(r=!0),h.COLOR_0!==void 0&&(s=!0),n&&r&&s)break}if(!n&&!r&&!s)return Promise.resolve(i);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(n){const d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;o.push(d)}if(r){const d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;a.push(d)}if(s){const d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],d=c[2];return n&&(i.morphAttributes.position=u),r&&(i.morphAttributes.normal=h),s&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function l2(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,r=t.length;n<r;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function c2(i){let e;const t=i.extensions&&i.extensions[tt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+tu(t.attributes):e=i.indices+":"+tu(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,r=i.targets.length;n<r;n++)e+=":"+tu(i.targets[n]);return e}function tu(i){let e="";const t=Object.keys(i).sort();for(let n=0,r=t.length;n<r;n++)e+=t[n]+":"+i[t[n]]+";";return e}function ju(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function u2(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const h2=new Fe;class d2{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new NA,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,r=!1,s=-1;typeof navigator!="undefined"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,r=navigator.userAgent.indexOf("Firefox")>-1,s=r?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap=="undefined"||n||r&&s<98?this.textureLoader=new dg(this.options.manager):this.textureLoader=new S1(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new mh(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,r=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][r.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:r.asset,parser:n,userData:{}};return yr(s,a,r),nr(a,r),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let r=0,s=t.length;r<s;r++){const o=t[r].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let r=0,s=e.length;r<s;r++){const o=e[r];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const r=n.clone(),s=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())s(u,a.children[c])};return s(n,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const r=e(t[n]);if(r)return r}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let r=0;r<t.length;r++){const s=e(t[r]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let r=this.cache.get(n);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(n,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[tt.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(s,o){n.load(Oo.resolveURL(t.uri,r.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const r=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+r)})}loadAccessor(e){const t=this,n=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){const o=Jc[r.type],a=Us[r.componentType],l=r.normalized===!0,c=new a(r.count*o);return Promise.resolve(new Tt(c,o,l))}const s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],l=Jc[r.type],c=Us[r.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,d=r.byteOffset||0,f=r.bufferView!==void 0?n.bufferViews[r.bufferView].byteStride:void 0,g=r.normalized===!0;let x,m;if(f&&f!==h){const p=Math.floor(d/f),v="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+p+":"+r.count;let _=t.cache.get(v);_||(x=new c(a,p*f,r.count*f/u),_=new QM(x,f/u),t.cache.add(v,_)),m=new hh(_,l,d%f/u,g)}else a===null?x=new c(r.count*l):x=new c(a,d,r.count*l),m=new Tt(x,l,g);if(r.sparse!==void 0){const p=Jc.SCALAR,v=Us[r.sparse.indices.componentType],_=r.sparse.indices.byteOffset||0,y=r.sparse.values.byteOffset||0,M=new v(o[1],_,r.sparse.count*p),T=new c(o[2],y,r.sparse.count*l);a!==null&&(m=new Tt(m.array.slice(),m.itemSize,m.normalized));for(let S=0,E=M.length;S<E;S++){const L=M[S];if(m.setX(L,T[S*l]),l>=2&&m.setY(L,T[S*l+1]),l>=3&&m.setZ(L,T[S*l+2]),l>=4&&m.setW(L,T[S*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){const r=this,s=this.json,o=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const d=(s.samplers||{})[o.sampler]||{};return u.magFilter=hm[d.magFilter]||it,u.minFilter=hm[d.minFilter]||yi,u.wrapS=dm[d.wrapS]||Bs,u.wrapT=dm[d.wrapT]||Bs,r.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=r.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(h){c=!0;const d=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(x){const m=new jt(x);m.needsUpdate=!0,d(m)}),t.load(Oo.resolveURL(h,s.path),g,void 0,f)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),h.userData.mimeType=o.mimeType||u2(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,r){const s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),s.extensions[tt.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[tt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(o);o=s.extensions[tt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return r!==void 0&&(o.colorSpace=r),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const r=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new cg,Ti.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new fh,Ti.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(r||s||o){let a="ClonedMaterial:"+n.uuid+":";r&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),r&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Ut}loadMaterial(e){const t=this,n=this.json,r=this.extensions,s=n.materials[e];let o;const a={},l=s.extensions||{},c=[];if(l[tt.KHR_MATERIALS_UNLIT]){const h=r[tt.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,s,t))}else{const h=s.pbrMetallicRoughness||{};if(a.color=new Re(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const d=h.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Qt),a.opacity=d[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,Rt)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=vn);const u=s.alphaMode||eu.OPAQUE;if(u===eu.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===eu.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==bi&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new Me(1,1),s.normalTexture.scale!==void 0)){const h=s.normalTexture.scale;a.normalScale.set(h,h)}if(s.occlusionTexture!==void 0&&o!==bi&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==bi){const h=s.emissiveFactor;a.emissive=new Re().setRGB(h[0],h[1],h[2],Qt)}return s.emissiveTexture!==void 0&&o!==bi&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,Rt)),Promise.all(c).then(function(){const h=new o(a);return s.name&&(h.name=s.name),nr(h,s),t.associations.set(h,{materials:e}),s.extensions&&yr(r,h,s),h})}createUniqueName(e){const t=dt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,r=this.primitiveCache;function s(a){return n[tt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return fm(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c2(c),h=r[u];if(h)o.push(h.promise);else{let d;c.extensions&&c.extensions[tt.KHR_DRACO_MESH_COMPRESSION]?d=s(c):d=fm(new sn,c,t),r[u]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,r=this.extensions,s=n.meshes[e],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?o2(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let f=0,g=u.length;f<g;f++){const x=u[f],m=o[f];let p;const v=c[f];if(m.mode===Xn.TRIANGLES||m.mode===Xn.TRIANGLE_STRIP||m.mode===Xn.TRIANGLE_FAN||m.mode===void 0)p=s.isSkinnedMesh===!0?new e1(x,v):new $(x,v),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Xn.TRIANGLE_STRIP?p.geometry=wp(p.geometry,km):m.mode===Xn.TRIANGLE_FAN&&(p.geometry=wp(p.geometry,gu));else if(m.mode===Xn.LINES)p=new r1(x,v);else if(m.mode===Xn.LINE_STRIP)p=new ei(x,v);else if(m.mode===Xn.LINE_LOOP)p=new s1(x,v);else if(m.mode===Xn.POINTS)p=new o1(x,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&l2(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),nr(p,s),m.extensions&&yr(r,p,m),t.assignFinalMaterial(p),h.push(p)}for(let f=0,g=h.length;f<g;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return s.extensions&&yr(r,h[0],s),h[0];const d=new Er;s.extensions&&yr(r,d,s),t.associations.set(d,{meshes:e});for(let f=0,g=h.length;f<g;f++)d.add(h[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],r=n[n.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new xn(Vm.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):n.type==="orthographic"&&(t=new di(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),nr(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let r=0,s=t.joints.length;r<s;r++)n.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(r){const s=r.pop(),o=r,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const h=o[c];if(h){a.push(h);const d=new Fe;s!==null&&d.fromArray(s.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new dh(a,l)})}loadAnimation(e){const t=this.json,n=this,r=t.animations[e],s=r.name?r.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,d=r.channels.length;h<d;h++){const f=r.channels[h],g=r.samplers[f.sampler],x=f.target,m=x.node,p=r.parameters!==void 0?r.parameters[g.input]:g.input,v=r.parameters!==void 0?r.parameters[g.output]:g.output;x.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",v)),c.push(g),u.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){const d=h[0],f=h[1],g=h[2],x=h[3],m=h[4],p=[];for(let v=0,_=d.length;v<_;v++){const y=d[v],M=f[v],T=g[v],S=x[v],E=m[v];if(y===void 0)continue;y.updateMatrix&&y.updateMatrix();const L=n._createAnimationTracks(y,M,T,S,E);if(L)for(let b=0;b<L.length;b++)p.push(L[b])}return new f1(s,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,r=t.nodes[e];return r.mesh===void 0?null:n.getDependency("mesh",r.mesh).then(function(s){const o=n._getNodeRef(n.meshCache,r.mesh,s);return r.weights!==void 0&&o.traverse(function(a){if(!!a.isMesh)for(let l=0,c=r.weights.length;l<c;l++)a.morphTargetInfluences[l]=r.weights[l]}),o})}loadNode(e){const t=this.json,n=this,r=t.nodes[e],s=n._loadNodeShallow(e),o=[],a=r.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));const l=r.skin===void 0?Promise.resolve(null):n.getDependency("skin",r.skin);return Promise.all([s,Promise.all(o),l]).then(function(c){const u=c[0],h=c[1],d=c[2];d!==null&&u.traverse(function(f){!f.isSkinnedMesh||f.bind(d,h2)});for(let f=0,g=h.length;f<g;f++)u.add(h[f]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?r.createUniqueName(s.name):"",a=[],l=r._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(r.getDependency("camera",s.camera).then(function(c){return r._getNodeRef(r.cameraCache,s.camera,c)})),r._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(s.isBone===!0?u=new lg:c.length>1?u=new Er:c.length===1?u=c[0]:u=new Ye,u!==c[0])for(let h=0,d=c.length;h<d;h++)u.add(c[h]);if(s.name&&(u.userData.name=s.name,u.name=o),nr(u,s),s.extensions&&yr(n,u,s),s.matrix!==void 0){const h=new Fe;h.fromArray(s.matrix),u.applyMatrix4(h)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);return r.associations.has(u)||r.associations.set(u,{}),r.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],r=this,s=new Er;n.name&&(s.name=r.createUniqueName(n.name)),nr(s,n),n.extensions&&yr(t,s,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(r.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++)s.add(l[u]);const c=u=>{const h=new Map;for(const[d,f]of r.associations)(d instanceof Ti||d instanceof jt)&&h.set(d,f);return u.traverse(d=>{const f=r.associations.get(d);f!=null&&h.set(d,f)}),h};return r.associations=c(s),s})}_createAnimationTracks(e,t,n,r,s){const o=[],a=e.name?e.name:e.uuid,l=[];Ji[s.path]===Ji.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let c;switch(Ji[s.path]){case Ji.weights:c=Vs;break;case Ji.rotation:c=Ir;break;case Ji.position:case Ji.scale:c=Ws;break;default:switch(n.itemSize){case 1:c=Vs;break;case 2:case 3:default:c=Ws;break}break}const u=r.interpolation!==void 0?s2[r.interpolation]:zs,h=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){const g=new c(l[d]+"."+Ji[s.path],t.array,h,u);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=ju(t.constructor),r=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)r[s]=t[s]*n;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const r=this instanceof Ir?r2:o0;return new r(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function f2(i,e,t){const n=e.attributes,r=new zt;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(r.set(new C(l[0],l[1],l[2]),new C(c[0],c[1],c[2])),a.normalized){const u=ju(Us[a.componentType]);r.min.multiplyScalar(u),r.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new C,l=new C;for(let c=0,u=s.length;c<u;c++){const h=s[c];if(h.POSITION!==void 0){const d=t.json.accessors[h.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const x=ju(Us[d.componentType]);l.multiplyScalar(x)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(a)}i.boundingBox=r;const o=new hi;r.getCenter(o.center),o.radius=r.min.distanceTo(r.max)/2,i.boundingSphere=o}function fm(i,e,t){const n=e.attributes,r=[];function s(o,a){return t.getDependency("accessor",o).then(function(l){i.setAttribute(a,l)})}for(const o in n){const a=$u[o]||o.toLowerCase();a in i.attributes||r.push(s(n[o],a))}if(e.indices!==void 0&&!i.index){const o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});r.push(o)}return ut.workingColorSpace!==Qt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ut.workingColorSpace}" not supported.`),nr(i,e),f2(i,e,t),Promise.all(r).then(function(){return e.targets!==void 0?a2(i,e.targets,t):i})}const Fn=10,Ts=Fn/2,Ho="light:dummy";class p2{constructor(e){this.hooks=e,this.cornellRoot=null,this.meshes=[],this._preDragSnap=null,this.raycaster=new pg,this.pointer=new Me,this.groundPlane=new ti(new C(0,1,0),0),this.scene=new rl,this.scene.background=new Re(657930),this.camera=new xn(45,window.innerWidth/window.innerHeight,.1,1e3),this.camera.position.set(0,5,18),this.camera.lookAt(0,5,0);const t=typeof window!="undefined"&&new URLSearchParams(window.location.search).get("test")==="1";this.renderer=new ag({antialias:!0,powerPreference:"low-power",failIfMajorPerformanceCaveat:!1,preserveDrawingBuffer:t}),this.renderer.outputColorSpace=Rt,this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(window.devicePixelRatio),document.body.appendChild(this.renderer.domElement),this.diag=new t0(this.renderer),this.diag.banner(),this.diag.snap("after renderer construction"),this.renderer.domElement.addEventListener("webglcontextlost",s=>{var o,a,l;console.error("[baker:debug] CONTEXT LOST",{meshes:this.meshes.length,firstMeshLM:(l=(a=(o=this.meshes[0])==null?void 0:o.material)==null?void 0:a.lightMap)==null?void 0:l.uuid}),this.diag.contextLossInfo(),s.preventDefault()}),this.renderer.domElement.addEventListener("webglcontextrestored",()=>{console.error("[baker:debug] CONTEXT RESTORED \u2014 RT data lost, lightmap textures are now empty",{meshes:this.meshes.length})}),this.controls=new wA(this.camera,this.renderer.domElement),this.controls.target.set(0,5,0),this.controls.update(),this.lightDummy=new Ye,this.lightDummy.position.set(0,Fn-.001,0),this.scene.add(this.lightDummy),this.lightMarker=new $(new Rn(2.5,2.5),new bi({color:16777215,side:vn})),this.lightMarker.rotation.x=Math.PI/2,this.lightDummy.add(this.lightMarker),this.visualLight=new Or(16777215,80,0,2),this.visualLight.userData.lightmapIgnore=!0,this.lightDummy.add(this.visualLight),this.lightTransformController=new EA(this.camera,this.renderer.domElement),this.lightTransformController.addEventListener("dragging-changed",s=>{var o,a,l,c;if(this.controls.enabled=!s.value,s.value){const u=this.lightTransformController.object;u&&(this._preDragSnap={pos:u.position.clone(),rot:u.rotation.clone(),scale:u.scale.clone()})}else{const u=this.lightTransformController.object;if(u&&this._preDragSnap){const h=this._preDragSnap;this._preDragSnap=null;const d={pos:u.position.clone(),rot:u.rotation.clone(),scale:u.scale.clone()};u!==this.lightDummy&&((a=(o=this.hooks).onStaleChange)==null||a.call(o)),(c=(l=this.hooks).onTransformChange)==null||c.call(l,u,h,d)}}}),this.lightTransformController.attach(this.lightDummy),this.scene.add(this.lightTransformController);let n=0,r=0;this.renderer.domElement.addEventListener("pointerdown",s=>{n=s.clientX,r=s.clientY}),this.renderer.domElement.addEventListener("pointerup",s=>{var a,l;if(s.button!==0||this.lightTransformController.dragging||Math.abs(s.clientX-n)>3||Math.abs(s.clientY-r)>3)return;const o=this.pickAt(s.clientX,s.clientY);(l=(a=this.hooks).onViewportPick)==null||l.call(a,o)})}pickAt(e,t){const n=this.renderer.domElement.getBoundingClientRect();this.pointer.x=(e-n.left)/n.width*2-1,this.pointer.y=-((t-n.top)/n.height)*2+1,this.raycaster.setFromCamera(this.pointer,this.camera);const r=this.raycaster.intersectObjects(this.meshes,!1);return r.length>0?r[0].object.uuid:null}lookupObject(e){var t;return e?e===Ho?this.lightDummy:(t=this.meshes.find(n=>n.uuid===e))!=null?t:null:null}attachGizmoTo(e){e?(this.lightTransformController.attach(e),this.lightTransformController.visible=!0):(this.lightTransformController.detach(),this.lightTransformController.visible=!1)}setGizmoMode(e){this.lightTransformController.setMode(e)}buildSceneTree(){const e=[{id:Ho,name:"Scene Light",kind:"light",visible:this.lightDummy.visible}];for(const t of this.meshes)e.push({id:t.uuid,name:t.name||`Mesh (${t.geometry.type.replace("Geometry","")})`,kind:"mesh",visible:t.visible});return e}setVisible(e,t){const n=this.lookupObject(e);n&&(n.visible=t)}mat(e,t=.95,n=0){const r=new Ut({color:e,roughness:t,metalness:n});return r._originalMap=null,r}addMesh(e){const t=e;return this.meshes.push(t),this.cornellRoot.add(t),t}buildWalls(){const t=this.mat(15790320),n=this.mat(14034728),r=this.mat(2924588),s=new $(new _e(Fn,.2,Fn),t);s.name="Floor",s.position.set(0,-.2/2,0),this.addMesh(s);const o=new $(new _e(Fn,.2,Fn),t.clone());o.name="Ceiling",o.material._originalMap=null,o.position.set(0,Fn+.2/2,0),this.addMesh(o);const a=new $(new _e(Fn,Fn,.2),t.clone());a.name="Back Wall",a.material._originalMap=null,a.position.set(0,Ts,-Ts-.2/2),this.addMesh(a);const l=new $(new _e(.2,Fn,Fn),n);l.name="Left Wall (Red)",l.position.set(-Ts-.2/2,Ts,0),this.addMesh(l);const c=new $(new _e(.2,Fn,Fn),r);c.name="Right Wall (Green)",c.position.set(Ts+.2/2,Ts,0),this.addMesh(c)}buildClassicBlocks(){const e=this.mat(15263976),t=new $(new _e(3,6,3),e);t.name="Tall Block",t.position.set(-1.8,3,-1.5),t.rotation.y=.29,this.addMesh(t);const n=new $(new _e(3,3,3),e.clone());n.name="Short Block",n.material._originalMap=null,n.position.set(1.8,1.5,1.5),n.rotation.y=-.29,this.addMesh(n)}buildAdvancedExtras(){const e=new $(new Ei(1,48,32),this.mat(16119285,.4,0));e.name="Sphere",e.position.set(2.4,1,3),this.addMesh(e);const t=new $(new Ko(.55,.18,160,24),this.mat(16765286,.55,0));t.name="Torus Knot",t.position.set(0,1,2.8),t.rotation.x=Math.PI/2,this.addMesh(t);const n=new $(new _e(1.2,1.2,1.2),this.mat(13072954,.8,0));n.name="Accent Block",n.position.set(-3.5,.6,2.8),n.rotation.y=.45,this.addMesh(n)}disposeCornellRoot(){!this.cornellRoot||(this.cornellRoot.traverse(e=>{var r;const t=e;if(!t.isMesh)return;(r=t.geometry)==null||r.dispose();const n=t.material;Array.isArray(n)?n.forEach(s=>s.dispose()):n==null||n.dispose()}),this.scene.remove(this.cornellRoot),this.cornellRoot=null,this.meshes=[])}rebuildScene(e){this.hooks.disposeBake(),this.disposeCornellRoot(),this.cornellRoot=new Ye,this.scene.add(this.cornellRoot),this.buildWalls(),this.buildClassicBlocks(),e==="advanced"&&this.buildAdvancedExtras(),this.hooks.installDummyLightmaps(this.meshes),this.hooks.onSceneChanged(this.meshes)}async importGLB(e){const t=await e.arrayBuffer(),n=new UA;let r;try{r=await new Promise((s,o)=>{n.parse(t,"",s,o)})}catch(s){console.error("[baker] GLB parse failed:",s);return}if(this.hooks.disposeBake(),this.disposeCornellRoot(),this.cornellRoot=new Ye,this.scene.add(this.cornellRoot),this.cornellRoot.add(r.scene),r.scene.traverse(s=>{const o=s;if(!o.isMesh)return;const a=o.material;Array.isArray(a)||!a||!("lightMap"in a)||(o.geometry.index||(o.geometry=$g(o.geometry)),this.meshes.push(o))}),!this.meshes.length){console.warn("[baker] imported GLB has no bake-eligible meshes (need MeshStandard*)"),this.hooks.onSceneChanged(this.meshes);return}this.cornellRoot.updateMatrixWorld(!0),this.fitCameraAndLightToScene(),this.hooks.installDummyLightmaps(this.meshes),this.hooks.onSceneChanged(this.meshes)}fitCameraAndLightToScene(){const e=new zt;for(const s of this.meshes)e.expandByObject(s);if(e.isEmpty())return;const t=e.getSize(new C),n=e.getCenter(new C),r=Math.max(t.x,t.y,t.z)||1;this.lightDummy.position.set(n.x,e.max.y+r*.1,n.z),this.camera.position.set(n.x,n.y,n.z+r*2.5),this.controls.target.copy(n),this.controls.update()}updateSize(){this.renderer.setSize(window.innerWidth,window.innerHeight),this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setPixelRatio(window.devicePixelRatio)}syncGizmo(e){this.lightTransformController.visible=e,this.lightTransformController.enabled=e}syncVisualLight(e,t){const n=new Re(e).convertSRGBToLinear();this.visualLight.color.copy(n),this.visualLight.intensity=30*t}pickGroundPoint(e,t){const n=this.renderer.domElement.getBoundingClientRect();this.pointer.x=(e-n.left)/n.width*2-1,this.pointer.y=-((t-n.top)/n.height)*2+1,this.raycaster.setFromCamera(this.pointer,this.camera);const r=new C;return this.raycaster.ray.intersectPlane(this.groundPlane,r)?r:new C(0,0,0)}addAsset(e,t){var r,s;const n=Y1(e);if(!n)return console.warn("[baker] addAsset: unknown or disabled asset spec",e),"";if(n.position.copy(t),e.kind==="primitive"){this.cornellRoot||(this.cornellRoot=new Ye,this.scene.add(this.cornellRoot));const o=n;e.id!=="plane"&&(n.position.y=Math.max(n.position.y,.5)),this.cornellRoot.add(o),this.meshes.push(o),this.hooks.installDummyLightmaps([o])}else this.scene.add(n);return this.hooks.onSceneChanged(this.meshes),(s=(r=this.hooks).onStaleChange)==null||s.call(r),n.uuid}removeNode(e){var r,s,o,a,l,c;if(!e||e===Ho)return;const t=this.meshes.findIndex(u=>u.uuid===e);if(t!==-1){const u=this.meshes[t];(r=u.parent)==null||r.remove(u),(s=u.geometry)==null||s.dispose();const h=u.material;Array.isArray(h)?h.forEach(d=>d.dispose()):h==null||h.dispose(),this.meshes.splice(t,1),this.hooks.onSceneChanged(this.meshes),(a=(o=this.hooks).onStaleChange)==null||a.call(o);return}const n=this.scene.children.find(u=>u.uuid===e);n&&n!==this.lightDummy&&(this.scene.remove(n),this.hooks.onSceneChanged(this.meshes),(c=(l=this.hooks).onStaleChange)==null||c.call(l))}async loadPresetById(e){const t=ci.get(e);if(!t){console.warn(`[scene-loader] unknown preset id: ${e}`);return}this.hooks.disposeBake(),this.disposeCornellRoot(),this.cornellRoot=new Ye,this.cornellRoot.name=`preset:${e}`,this.scene.add(this.cornellRoot);const n=await t.build(this.cornellRoot);this.cornellRoot.traverse(r=>{const s=r;!s.isMesh||s.userData.lightmapIgnore!==!0&&this.meshes.push(s)}),n.background!==void 0&&(this.scene.background=new Re(n.background)),n.camera&&(this.camera.position.set(...n.camera.position),this.controls.target.set(...n.camera.target),this.controls.update()),n.lightDummy&&this.lightDummy.position.set(...n.lightDummy.position),this.hooks.installDummyLightmaps(this.meshes),this.hooks.onSceneChanged(this.meshes)}}const Ku=[{id:"combined",label:"Combined",group:"output",showAlbedo:!0,getLightMap:i=>{var e,t;return(t=(e=i.group.refinement)==null?void 0:e.texture)!=null?t:i.group.composite.texture}},{id:"combinedPost",label:"Combined (Refined)",group:"output",showAlbedo:!0,getLightMap:i=>{var e,t;return(t=(e=i.group.refinement)==null?void 0:e.texture)!=null?t:i.group.composite.texture}},{id:"combinedRaw",label:"Combined (Raw)",group:"output",showAlbedo:!0,getLightMap:i=>i.group.composite.texture},{id:"direct",label:"Direct",group:"output",showAlbedo:!1,getLightMap:i=>i.group.lightmapper.textures.direct},{id:"indirect",label:"Indirect (GI)",group:"output",showAlbedo:!1,getLightMap:i=>i.group.lightmapper.textures.indirect},{id:"ao",label:"Ambient Occlusion",group:"output",showAlbedo:!1,getLightMap:i=>i.group.aoMapper.texture},{id:"lightmapRaw",label:"Lightmap (Raw)",group:"debug",showAlbedo:!1,getLightMap:i=>i.group.composite.texture},{id:"albedo",label:"Albedo",group:"debug",showAlbedo:!0,getLightMap:()=>null},{id:"positions",label:"World Position",group:"debug",showAlbedo:!1,getLightMap:i=>i.group.positionTexture},{id:"normals",label:"World Normal",group:"debug",showAlbedo:!1,getLightMap:i=>i.group.normalTexture},{id:"texelDensity",label:"Texel Density",group:"debug",showAlbedo:!1,getLightMap:()=>null}];Object.fromEntries(Ku.map(i=>[i.label,i.id]));class m2{constructor(e){this.deps=e,this.texelDensityMats=new Map,this.originalMaterials=new WeakMap}apply(){var l,c;const e=this.deps.getOptions(),t=this.deps.getMeshes();this.deps.getBakeGroups();const n=this.deps.getMeshToGroup(),r=this.deps.getVisualLight(),s=this.deps.getLightMarker(),o=(l=Ku.find(u=>u.id===e.layer))!=null?l:Ku[0];if(o.id==="texelDensity"){this.refreshTexelDensityMaterials();for(const u of t){this.originalMaterials.has(u)||this.originalMaterials.set(u,u.material);const h=this.texelDensityMats.get(u);h&&(u.material=h)}r.visible=!1;return}for(const u of t){const h=this.originalMaterials.get(u);h&&u.material!==h&&(u.material=h)}const a=this.deps.getDummyLightmap();for(const u of t){const h=u.material;h.map=o.showAlbedo&&(c=h._originalMap)!=null?c:null;const d=n.get(u),f=d?o.getLightMap({group:d}):null;f?(h.lightMap=f,h.lightMap.channel=2,h.lightMapIntensity=1):(h.lightMap=a,h.lightMapIntensity=0)}s.material.color=new Re(16777215),r.visible=o.id==="albedo"}refreshTexelDensityMaterials(){var r,s,o;const e=this.deps.getOptions(),t=this.deps.getMeshes(),n=new Set(t);for(const a of this.texelDensityMats.keys())n.has(a)||((r=this.texelDensityMats.get(a))==null||r.dispose(),this.texelDensityMats.delete(a));for(const a of t){const l=(o=(s=e.perMesh[a.uuid])==null?void 0:s.scaleInLightmap)!=null?o:1,c=e.texelsPerMeter*l;let u=this.texelDensityMats.get(a);u?(u.setTexelsPerMeter(c),u.setLightmapSize(e.lightMapSize)):(u=new Aw({texelsPerMeter:c,lightmapSize:e.lightMapSize}),this.texelDensityMats.set(a,u))}}dispose(){for(const e of this.texelDensityMats.values())e.dispose();this.texelDensityMats.clear()}}var g2=`\r
uniform sampler2D tPreviousTexture;\r
uniform sampler2D tBlueNoiseTexture;\r
uniform mat4 uCameraMatrix;\r
uniform vec2 uResolution;\r
uniform vec2 uRandomVec2;\r
uniform float uEPS_intersect;\r
uniform float uTime;\r
uniform float uSampleCounter;\r
uniform float uFrameCounter;\r
uniform float uULen;\r
uniform float uVLen;\r
uniform float uApertureSize;\r
uniform float uFocusDistance;\r
uniform float uPreviousSampleCount;\r
uniform bool uCameraIsMoving;\r
uniform bool uUseOrthographicCamera;\r
uniform bool uSceneIsDynamic;\r
\r
#define PI               3.14159265358979323\r
#define TWO_PI           6.28318530717958648\r
#define FOUR_PI          12.5663706143591729\r
#define ONE_OVER_PI      0.31830988618379067\r
#define ONE_OVER_TWO_PI  0.15915494309\r
#define ONE_OVER_FOUR_PI 0.07957747154594767\r
#define PI_OVER_TWO      1.57079632679489662\r
#define ONE_OVER_THREE   0.33333333333333333\r
#define ONE_OVER_NINE    0.11111111111111111\r
#define ONE_OVER_54      0.01851851851851851\r
#define E                2.71828182845904524\r
#define INFINITY         1000000.0\r
#define QUADRIC_EPSILON  0.00001\r
#define SPOT_LIGHT -2\r
#define POINT_LIGHT -1\r
#define LIGHT 0\r
#define DIFF 1\r
#define REFR 2\r
#define SPEC 3\r
#define COAT 4\r
#define CARCOAT 5\r
#define TRANSLUCENT 6\r
#define SPECSUB 7\r
#define CHECK 8\r
#define WATER 9\r
#define PBR_MATERIAL 10\r
#define WOOD 11\r
#define SEAFLOOR 12\r
#define TERRAIN 13\r
#define CLOTH 14\r
#define LIGHTWOOD 15\r
#define DARKWOOD 16\r
#define PAINTING 17\r
#define METALCOAT 18\r
#define TRUE 1\r
#define FALSE 0\r
#define ONE_OVER_MAX_INT 1.0 / float(0xffffffffU)\r
`,_2=`\r
// globals used in rand() function\r
float blueNoise;\r
float randNumber;\r
// the following rand() is from a 2024 article by the great Jacco Bikker (og behind Brigade Path Tracer)\r
// https://jacco.ompf2.com/2024/05/15/ray-tracing-with-voxels-in-c-series-part-4/ \r
float rand()\r
{\r
	// ensure randNumber keeps evolving (even when called multiple times during the same animation Frame),\r
	// by adding to itself the blueNoise texture lookup (which does not change), and FrameCounter multiplied with Golden Ratio\r
	randNumber += (blueNoise + (mod(uFrameCounter, 32.0) * 0.61803399));\r
	return fract(randNumber); // we only want the fractional portion, so [0.0 to 1.0) (but not including 1.0)\r
}\r
\r
// from iq https://www.shadertoy.com/view/4tXyWN\r
// global seed used in rng() function\r
uvec2 seed;\r
float rng()\r
{\r
	seed += uvec2(1);\r
    	uvec2 q = 1103515245U * ( (seed >> 1U) ^ (seed.yx) );\r
    	uint  n = 1103515245U * ( (q.x) ^ (q.y >> 3U) );\r
	return float(n) * ONE_OVER_MAX_INT;// (1.0 / float(0xffffffffU));\r
}\r
\r
vec3 randomSphereDirection()\r
{\r
	float phi = rng() * TWO_PI;\r
    	float theta = (rng() * 2.0) - 1.0; // range: -1 to +1\r
	float r = sqrt(1.0 - (theta * theta));\r
	return normalize(vec3(r * cos(phi), r * sin(phi), theta));	\r
}\r
\r
//the following alternative skips the creation of tangent and bi-tangent vectors T and B\r
vec3 randomCosWeightedDirectionInHemisphere(vec3 nl)\r
{\r
	float phi = rng() * TWO_PI;\r
	float theta = (rng() * 2.0) - 1.0;\r
	float r = sqrt(1.0 - (theta * theta));\r
    	return normalize(nl + vec3(r * cos(phi), r * sin(phi), theta));\r
}\r
\r
vec3 randomDirectionInSpecularLobe(vec3 normal, vec3 reflectionDir, float roughness)\r
{\r
	float phi = rng() * TWO_PI;\r
	float theta = (rng() * 2.0) - 1.0;\r
	float r = sqrt(1.0 - (theta * theta));\r
    	vec3 cosDiffuseDir = normalize(reflectionDir + vec3(r * cos(phi), r * sin(phi), theta));\r
	vec3 sampleDirection = normalize( mix(reflectionDir, cosDiffuseDir, roughness * roughness) );\r
	return dot(sampleDirection, normal) > 0.0 ? sampleDirection : reflect(sampleDirection, reflectionDir);\r
}\r
\r
/* vec3 randomDirectionInPhongSpecular(vec3 reflectionDir, float shininess)\r
{\r
	float cosTheta = pow(rng(), 1.0 / (2.0 + shininess));\r
	float sinTheta = sqrt(1.0 - cosTheta * cosTheta);\r
	float phi = rng() * TWO_PI;\r
	float x = sinTheta * cos(phi);\r
	float y = sinTheta * sin(phi);\r
	vec3 T = normalize(cross(reflectionDir.yzx, reflectionDir));\r
	vec3 B = cross(reflectionDir, T);\r
	return normalize(T * x + B * y + reflectionDir * cosTheta);\r
} */\r
\r
/* \r
// this is my crude attempt at a Fibonacci-spiral sample point pattern on a hemisphere above a diffuse surface\r
#define N_POINTS 64.0 //64.0\r
vec3 randomCosWeightedDirectionInHemisphere(vec3 nl)\r
{\r
	float i = N_POINTS * rng();\r
			// the Golden angle in radians\r
	float phi = mod(i * 2.39996322972865332, TWO_PI);\r
	float r = sqrt(i / N_POINTS); // sqrt pushes points outward to prevent clumping in center of disk\r
	float x = r * cos(phi);\r
	float y = r * sin(phi);\r
	float z = sqrt(1.0 - r * r);\r
	\r
	vec3 U = normalize( cross( abs(nl.y) < 0.9 ? vec3(0, 1, 0) : vec3(0, 0, 1), nl ) );\r
	vec3 V = cross(nl, U);\r
	return normalize(x * U + y * V + z * nl);\r
} */\r
\r
/* \r
// like the function several functions above, \r
// the following alternative skips the creation of tangent and bi-tangent vectors T and B \r
vec3 randomCosWeightedDirectionInHemisphere(vec3 nl)\r
{\r
	float phi = rng() * TWO_PI;\r
	float theta = rng() * 2.0 - 1.0;\r
	return normalize(nl + vec3(sqrt(1.0 - theta * theta) * vec2(cos(phi), sin(phi)), theta));\r
} */\r
\r
`,x2=`\r
/* int solveQuadratic(float A, float B, float C, out float t0, out float t1)\r
{\r
	float discrim = B * B - 4.0 * A * C;\r
    \r
	if (discrim < 0.0)\r
        	return FALSE;\r
    \r
	float rootDiscrim = sqrt(discrim);\r
	float Q = (B > 0.0) ? -0.5 * (B + rootDiscrim) : -0.5 * (B - rootDiscrim); \r
	// float t_0 = Q / A; \r
	// float t_1 = C / Q;\r
	// t0 = min( t_0, t_1 );\r
	// t1 = max( t_0, t_1 );\r
	t1 = Q / A; \r
	t0 = C / Q;\r
	\r
	return TRUE;\r
} */\r
// optimized algorithm for solving quadratic equations developed by Dr. Po-Shen Loh -> https://youtu.be/XKBX0r3J-9Y\r
// Adapted to root finding (ray t0/t1) for all quadric shapes (sphere, ellipsoid, cylinder, cone, etc.) by Erich Loftis\r
void solveQuadratic(float A, float B, float C, out float t0, out float t1)\r
{\r
	float invA = 1.0 / A;\r
	B *= invA;\r
	C *= invA;\r
	float neg_halfB = -B * 0.5;\r
	float u2 = neg_halfB * neg_halfB - C;\r
	float u = u2 < 0.0 ? neg_halfB = 0.0 : sqrt(u2);\r
	t0 = neg_halfB - u;\r
	t1 = neg_halfB + u;\r
}\r
\r
//-----------------------------------------------------------------------------\r
float SphereIntersect( float rad, vec3 pos, vec3 rayOrigin, vec3 rayDirection )\r
//-----------------------------------------------------------------------------\r
{	\r
	float t0, t1;\r
	vec3 L = rayOrigin - pos;\r
	float a = dot( rayDirection, rayDirection );\r
	float b = 2.0 * dot( rayDirection, L );\r
	float c = dot( L, L ) - (rad * rad);\r
	solveQuadratic(a, b, c, t0, t1);\r
	return t0 > 0.0 ? t0 : t1 > 0.0 ? t1 : INFINITY;\r
}\r
`,v2=`\r
//-----------------------------------------------------------------------------------------------------------------------------\r
float BoxIntersect( vec3 minCorner, vec3 maxCorner, vec3 rayOrigin, vec3 rayDirection, out vec3 normal, out int isRayExiting )\r
//-----------------------------------------------------------------------------------------------------------------------------\r
{\r
	vec3 invDir = 1.0 / rayDirection;\r
	vec3 near = (minCorner - rayOrigin) * invDir;\r
	vec3 far  = (maxCorner - rayOrigin) * invDir;\r
\r
	vec3 tmin = min(near, far);\r
	vec3 tmax = max(near, far);\r
\r
	float t0 = max( max(tmin.x, tmin.y), tmin.z);\r
	float t1 = min( min(tmax.x, tmax.y), tmax.z);\r
\r
	if (t0 > t1) return INFINITY;\r
	if (t0 > 0.0) // if we are outside the box\r
	{\r
		normal = -sign(rayDirection) * step(tmin.yzx, tmin) * step(tmin.zxy, tmin);\r
		isRayExiting = FALSE;\r
		return t0;\r
	}\r
	if (t1 > 0.0) // if we are inside the box\r
	{\r
		normal = -sign(rayDirection) * step(tmax, tmax.yzx) * step(tmax, tmax.zxy);\r
		isRayExiting = TRUE;\r
		return t1;\r
	}\r
	return INFINITY;\r
}\r
`,y2=`\r
//--------------------------------------------------------------------------------------------------------------\r
float BoxInteriorIntersect( vec3 minCorner, vec3 maxCorner, vec3 rayOrigin, vec3 rayDirection, out vec3 normal )\r
//--------------------------------------------------------------------------------------------------------------\r
{\r
	vec3 invDir = 1.0 / rayDirection;\r
	vec3 near = (minCorner - rayOrigin) * invDir;\r
	vec3 far  = (maxCorner - rayOrigin) * invDir;\r
	\r
	vec3 tmin = min(near, far);\r
	vec3 tmax = max(near, far);\r
	\r
	float t0 = max( max(tmin.x, tmin.y), tmin.z);\r
	float t1 = min( min(tmax.x, tmax.y), tmax.z);\r
	\r
	if (t0 > t1) return INFINITY;\r
\r
	/*\r
	if (t0 > 0.0) // if we are outside the box\r
	{\r
		normal = -sign(rayDirection) * step(tmin.yzx, tmin) * step(tmin.zxy, tmin);\r
		return t0;	\r
	}\r
	*/\r
\r
	if (t1 > 0.0) // if we are inside the box\r
	{\r
		normal = -sign(rayDirection) * step(tmax, tmax.yzx) * step(tmax, tmax.zxy);\r
		return t1;\r
	}\r
\r
	return INFINITY;\r
}\r
`,b2=`\r
float TriangleIntersect( vec3 v0, vec3 v1, vec3 v2, vec3 rayOrigin, vec3 rayDirection, int isDoubleSided )\r
{\r
	vec3 edge1 = v1 - v0;\r
	vec3 edge2 = v2 - v0;\r
	vec3 pvec = cross(rayDirection, edge2);\r
	float det = 1.0 / dot(edge1, pvec);\r
	if ( isDoubleSided == FALSE && det < 0.0 ) \r
		return INFINITY;\r
	vec3 tvec = rayOrigin - v0;\r
	float u = dot(tvec, pvec) * det;\r
	vec3 qvec = cross(tvec, edge1);\r
	float v = dot(rayDirection, qvec) * det;\r
	float t = dot(edge2, qvec) * det;\r
	return (t <= 0.0 || u < 0.0 || u > 1.0 || v < 0.0 || u + v > 1.0) ? INFINITY : t;\r
}\r
//--------------------------------------------------------------------------------------------------------------\r
float QuadIntersect( vec3 v0, vec3 v1, vec3 v2, vec3 v3, vec3 rayOrigin, vec3 rayDirection, int isDoubleSided )\r
//--------------------------------------------------------------------------------------------------------------\r
{\r
	return min(TriangleIntersect(v0, v1, v2, rayOrigin, rayDirection, isDoubleSided), \r
		   TriangleIntersect(v0, v2, v3, rayOrigin, rayDirection, isDoubleSided));\r
}\r
`,M2=`\r
vec3 sampleQuadLight(vec3 x, vec3 nl, Quad light, out float weight)\r
{\r
	vec3 randPointOnLight;\r
	randPointOnLight.x = mix(light.v0.x, light.v2.x, clamp(rng(), 0.1, 0.9));\r
	randPointOnLight.y = light.v0.y;\r
	randPointOnLight.z = mix(light.v0.z, light.v2.z, clamp(rng(), 0.1, 0.9));\r
	vec3 dirToLight = randPointOnLight - x;\r
	float r2 = distance(light.v0, light.v1) * distance(light.v0, light.v3);\r
	float d2 = 1.0 / dot(dirToLight, dirToLight);\r
	float cos_a_max = sqrt(1.0 - clamp( r2 * d2, 0.0, 1.0));\r
	dirToLight = normalize(dirToLight);\r
	float dotNlRayDir = max(0.0, dot(nl, dirToLight)); \r
	weight =  2.0 * (1.0 - cos_a_max) * max(0.0, -dot(dirToLight, light.normal)) * dotNlRayDir; \r
	weight = clamp(weight, 0.0, 1.0);\r
	return dirToLight;\r
}\r
`,T2=`\r
float calcFresnelReflectance(vec3 rayDirection, vec3 n, float etaI, float etaT, out float IoR_ratio)\r
{\r
	float cosThetaI = clamp(dot(-rayDirection, n), -1.0, 1.0);\r
	float temp = etaI;\r
	if (cosThetaI < 0.0)\r
	{	\r
		etaI = etaT;\r
		etaT = temp;\r
	}\r
	IoR_ratio = etaI / etaT;\r
	cosThetaI = abs(cosThetaI);\r
	float sin2ThetaT = (IoR_ratio * IoR_ratio) * (1.0 - (cosThetaI * cosThetaI));\r
	if (sin2ThetaT >= 1.0) // handle total internal reflection\r
		return 1.0; \r
	float cosThetaT = sqrt(1.0 - sin2ThetaT);\r
\r
	float Rparl = ((etaT * cosThetaI) - (etaI * cosThetaT)) / ((etaT * cosThetaI) + (etaI * cosThetaT));\r
    	float Rperp = ((etaI * cosThetaI) - (etaT * cosThetaT)) / ((etaI * cosThetaI) + (etaT * cosThetaT));\r
    	return clamp(0.5 * ((Rparl * Rparl) + (Rperp * Rperp)), 0.0, 1.0);\r
}\r
`,S2=`\r
// tentFilter from Peter Shirley's 'Realistic Ray Tracing (2nd Edition)' book, pg. 60\r
float tentFilter(float x) // input: x: a random float(0.0 to 1.0), output: a filtered float (-1.0 to +1.0)\r
{\r
	return (x < 0.5) ? sqrt(2.0 * x) - 1.0 : 1.0 - sqrt(2.0 - (2.0 * x));\r
}\r
\r
void main( void )\r
{\r
	vec3 camRight   = vec3( uCameraMatrix[0][0],  uCameraMatrix[0][1],  uCameraMatrix[0][2]);\r
	vec3 camUp      = vec3( uCameraMatrix[1][0],  uCameraMatrix[1][1],  uCameraMatrix[1][2]);\r
	vec3 camForward = vec3(-uCameraMatrix[2][0], -uCameraMatrix[2][1], -uCameraMatrix[2][2]);\r
	// the following is not needed - three.js has a built-in uniform named cameraPosition\r
	//vec3 camPos   = vec3( uCameraMatrix[3][0],  uCameraMatrix[3][1],  uCameraMatrix[3][2]);\r
\r
	// calculate unique seed for rng() function\r
	seed = uvec2(uFrameCounter, uFrameCounter + 1.0) * uvec2(gl_FragCoord);\r
	// initialize rand() variables\r
	randNumber = 0.0; // the final randomly-generated number (range: 0.0 to 1.0)\r
	blueNoise = texelFetch(tBlueNoiseTexture, ivec2(mod(floor(gl_FragCoord.xy), 128.0)), 0).r;\r
\r
	vec2 pixelOffset;\r
\r
	if (uSampleCounter < 50.0)\r
	{\r
		pixelOffset = vec2( tentFilter(rand()), tentFilter(rand()) );\r
		pixelOffset *= uCameraIsMoving ? 0.5 : 1.0;\r
	}\r
	else pixelOffset = vec2( tentFilter(uRandomVec2.x), tentFilter(uRandomVec2.y) );\r
\r
	// we must map pixelPos into the range -1.0 to +1.0: (-1.0,-1.0) is bottom-left screen corner, (1.0,1.0) is top-right\r
	vec2 pixelPos = ((gl_FragCoord.xy + vec2(0.5) + pixelOffset) / uResolution) * 2.0 - 1.0;\r
\r
	vec3 rayDir = uUseOrthographicCamera ? camForward :\r
		      normalize( (camRight * pixelPos.x * uULen) + (camUp * pixelPos.y * uVLen) + camForward );\r
\r
	// depth of field\r
	vec3 focalPoint = uFocusDistance * rayDir;\r
	float randomAngle = rng() * TWO_PI; // pick random point on aperture\r
	float randomRadius = rng() * uApertureSize;\r
	vec3  randomAperturePos = ((camRight * cos(randomAngle)) + (camUp * sin(randomAngle))) * sqrt(randomRadius);\r
	// point on aperture to focal point\r
	vec3 finalRayDir = normalize(focalPoint - randomAperturePos);\r
\r
	rayOrigin = cameraPosition + randomAperturePos;\r
	rayOrigin += !uUseOrthographicCamera ? vec3(0) :\r
		     (camRight * pixelPos.x * uULen * 100.0) + (camUp * pixelPos.y * uVLen * 100.0);\r
\r
	rayDirection = finalRayDir;\r
\r
\r
	SetupScene();\r
\r
	// Edge Detection - don't want to blur edges where either surface normals change abruptly (i.e. room wall corners), objects overlap each other (i.e. edge of a foreground sphere in front of another sphere right behind it),\r
	// or an abrupt color variation on the same smooth surface, even if it has similar surface normals (i.e. checkerboard pattern). Want to keep all of these cases as sharp as possible - no blur filter will be applied.\r
	vec3 objectNormal = vec3(0);\r
	vec3 objectColor = vec3(0);\r
	float objectID = -INFINITY;\r
	float pixelSharpness = 0.0;\r
\r
	// perform path tracing and get resulting pixel color\r
	vec4 currentPixel = vec4( vec3(CalculateRadiance(objectNormal, objectColor, objectID, pixelSharpness)), 0.0 );\r
\r
	// if difference between normals of neighboring pixels is less than the first edge0 threshold, the white edge line effect is considered off (0.0)\r
	float edge0 = 0.2; // edge0 is the minimum difference required between normals of neighboring pixels to start becoming a white edge line\r
	// any difference between normals of neighboring pixels that is between edge0 and edge1 smoothly ramps up the white edge line brightness (smoothstep 0.0-1.0)\r
	float edge1 = 0.6; // once the difference between normals of neighboring pixels is >= this edge1 threshold, the white edge line is considered fully bright (1.0)\r
	float difference_Nx = fwidth(objectNormal.x);\r
	float difference_Ny = fwidth(objectNormal.y);\r
	float difference_Nz = fwidth(objectNormal.z);\r
	float normalDifference = smoothstep(edge0, edge1, difference_Nx) + smoothstep(edge0, edge1, difference_Ny) + smoothstep(edge0, edge1, difference_Nz);\r
\r
	float objectDifference = min(fwidth(objectID), 1.0);\r
\r
	float colorDifference = (fwidth(objectColor.r) + fwidth(objectColor.g) + fwidth(objectColor.b)) > 0.0 ? 1.0 : 0.0;\r
\r
	vec4 previousPixel = texelFetch(tPreviousTexture, ivec2(gl_FragCoord.xy), 0);\r
\r
\r
	if (uFrameCounter == 1.0) // camera just moved after being still\r
	{\r
		previousPixel.rgb *= (1.0 / uPreviousSampleCount) * 0.5;\r
		previousPixel.a = 0.0;\r
		currentPixel.rgb *= 0.5;\r
	}\r
	else if (uCameraIsMoving) // camera is currently moving\r
	{\r
		previousPixel.rgb *= 0.5; // motion-blur trail amount (old image)\r
		previousPixel.a = 0.0;\r
		currentPixel.rgb *= 0.5; // brightness of new image (noisy)\r
	}\r
	else if (uSceneIsDynamic) // dynamic scene, sampleCounter always 1 \u2014 need stable blend\r
	{\r
		// 0.9/0.1 exponential blend: converges to the true 1-sample radiance.\r
		// Without this, prev*1.0 + cur*1.0 diverges to infinity each frame.\r
		previousPixel.rgb *= 0.9;\r
		currentPixel.rgb  *= 0.1;\r
	}\r
	// Implicit else (static scene): both at 1.0, screen-output divides by sampleCounter \u2192 correct.\r
\r
	if (colorDifference > 0.0 || normalDifference >= 0.9 || objectDifference >= 1.0)\r
		pixelSharpness = 1.0; // 1.0 means an edge pixel\r
\r
	currentPixel.a = pixelSharpness;\r
\r
	// Eventually, all edge-containing pixels' .a (alpha channel) values will converge to 1.0,\r
	//   which keeps them from getting blurred by the box-blur filter, thus retaining sharpness over time.\r
	if (previousPixel.a == 1.0) // an edge or a light source\r
		currentPixel.a = 1.0;\r
\r
	pc_fragColor = vec4(previousPixel.rgb + currentPixel.rgb, currentPixel.a);\r
}\r
`,w2=`//--------------------------------------------------------------------------------------\r
float BoundingBoxIntersect( vec3 minCorner, vec3 maxCorner, vec3 rayOrigin, vec3 invDir )\r
//--------------------------------------------------------------------------------------\r
{\r
	vec3 near = (minCorner - rayOrigin) * invDir;\r
	vec3 far  = (maxCorner - rayOrigin) * invDir;\r
\r
	vec3 tmin = min(near, far);\r
	vec3 tmax = max(near, far);\r
\r
	float t0 = max( max(tmin.x, tmin.y), tmin.z);\r
	float t1 = min( min(tmax.x, tmax.y), tmax.z);\r
\r
	return max(t0, 0.0) > t1 ? INFINITY : t0;\r
}\r
`,E2=`//-------------------------------------------------------------------------------------------------------------------\r
float BVH_TriangleIntersect( vec3 v0, vec3 v1, vec3 v2, vec3 rayOrigin, vec3 rayDirection, out float u, out float v )\r
//-------------------------------------------------------------------------------------------------------------------\r
{	// M\xF6ller\u2013Trumbore triangle intersection\r
	vec3 edge1 = v1 - v0;\r
	vec3 edge2 = v2 - v0;\r
	vec3 pvec  = cross(rayDirection, edge2);\r
	float det  = 1.0 / dot(edge1, pvec);\r
	vec3 tvec  = rayOrigin - v0;\r
	u = dot(tvec, pvec) * det;\r
	vec3 qvec  = cross(tvec, edge1);\r
	v = dot(rayDirection, qvec) * det;\r
	float t    = dot(edge2, qvec) * det;\r
	return (det < 0.0 || t <= 0.0 || u < 0.0 || u > 1.0 || v < 0.0 || u + v > 1.0) ? INFINITY : t;\r
}\r
`;const Qn=Ge;let pm=!1;function A2(){pm||(pm=!0,Qn.pathtracing_uniforms_and_defines=g2,Qn.pathtracing_random_functions=_2,Qn.pathtracing_sphere_intersect=x2,Qn.pathtracing_box_intersect=v2,Qn.pathtracing_box_interior_intersect=y2,Qn.pathtracing_quad_intersect=b2,Qn.pathtracing_sample_quad_light=M2,Qn.pathtracing_calc_fresnel_reflectance=T2,Qn.pathtracing_main=S2,Qn.pathtracing_boundingbox_intersect=w2,Qn.pathtracing_bvhTriangle_intersect=E2)}const R2=Ge;function a0(i){return i.replace(/#include\s+<([\w_]+)>/g,(e,t)=>{const n=R2[t];if(n==null)throw new Error(`[pathtracer] missing ShaderChunk: "${t}"`);return a0(n)})}var nu=`precision highp float;\r
precision highp int;\r
\r
out vec2 vUv;\r
\r
void main() {\r
  // Compute UV from position (PlaneGeometry spans [-1,1], map to [0,1])\r
  // Avoids depending on Three.js injecting the 'uv' attribute\r
  vUv = position.xy * 0.5 + 0.5;\r
  gl_Position = vec4(position, 1.0);\r
}\r
`,C2="/three-lightmap-baker/assets/BlueNoise_R_128.b046bae7.png",P2=`precision highp float;\r
precision highp int;\r
precision highp sampler2D;\r
\r
uniform sampler2D tPathTracedImageTexture;\r
\r
void main()\r
{	\r
	pc_fragColor = texelFetch(tPathTracedImageTexture, ivec2(gl_FragCoord.xy), 0);	\r
} \r
`,L2=`precision highp float;\r
precision highp int;\r
precision highp sampler2D;\r
\r
uniform sampler2D tPathTracedImageTexture;\r
uniform float uSampleCounter;\r
uniform float uOneOverSampleCounter;\r
uniform float uPixelEdgeSharpness;\r
uniform float uEdgeSharpenSpeed;\r
//uniform float uFilterDecaySpeed;\r
uniform bool uCameraIsMoving;\r
uniform bool uSceneIsDynamic;\r
uniform bool uUseToneMapping;\r
\r
#define TRUE 1\r
#define FALSE 0\r
\r
\r
// Inline Reinhard \u2014 not injected by Three.js when toneMapping=NoToneMapping\r
vec3 ReinhardToneMapping(vec3 color) {\r
	return color / (color + vec3(1.0));\r
}\r
\r
void main()\r
{\r
	// First, start with a large blur kernel, which will be used on all diffuse\r
	// surfaces.  It will blur out the noise, giving a smoother, more uniform color.\r
	// Starting at the current pixel (centerPixel), the algorithm performs an outward search/walk\r
	// moving to the immediate neighbor pixels around the center pixel, and then out farther to \r
	// more distant neighbors.  If the outward walk doesn't encounter any 'edge' pixels, it will continue\r
	// until it reaches the maximum extents of the large kernel (a little less than 7x7 pixels, minus the 4\r
	// corners to give a more rounded kernel filter shape). However, while walking/searching outward from\r
	// the center pixel, if the walk encounters an 'edge' boundary pixel, it will not blend (average in) with \r
	// that pixel, and will stop the search/walk from going any further in that direction. This keeps the edge \r
	// boundary pixels non-blurred, and these edges remain sharp in the final image.\r
\r
	vec4 m37[37];\r
\r
	vec2 glFragCoord_xy = gl_FragCoord.xy;\r
\r
	\r
	m37[ 0] = texelFetch(tPathTracedImageTexture, ivec2(glFragCoord_xy + vec2(-1, 3)), 0);\r
	m37[ 1] = texelFetch(tPathTracedImageTexture, ivec2(glFragCoord_xy + vec2( 0, 3)), 0);\r
	m37[ 2] = texelFetch(tPathTracedImageTexture, ivec2(glFragCoord_xy + vec2( 1, 3)), 0);\r
	m37[ 3] = texelFetch(tPathTracedImageTexture, ivec2(glFragCoord_xy + vec2(-2, 2)), 0);\r
	m37[ 4] = texelFetch(tPathTracedImageTexture, ivec2(glFragCoord_xy + vec2(-1, 2)), 0);\r
	m37[ 5] = texelFetch(tPathTracedImageTexture, ivec2(glFragCoord_xy + vec2( 0, 2)), 0);\r
	m37[ 6] = texelFetch(tPathTracedImageTexture, ivec2(glFragCoord_xy + vec2( 1, 2)), 0);\r
	m37[ 7] = texelFetch(tPathTracedImageTexture, ivec2(glFragCoord_xy + vec2( 2, 2)), 0);\r
	m37[ 8] = texelFetch(tPathTracedImageTexture, ivec2(glFragCoord_xy + vec2(-3, 1)), 0);\r
	m37[ 9] = texelFetch(tPathTracedImageTexture, ivec2(glFragCoord_xy + vec2(-2, 1)), 0);\r
	m37[10] = texelFetch(tPathTracedImageTexture, ivec2(glFragCoord_xy + vec2(-1, 1)), 0);\r
	m37[11] = texelFetch(tPathTracedImageTexture, ivec2(glFragCoord_xy + vec2( 0, 1)), 0);\r
	m37[12] = texelFetch(tPathTracedImageTexture, ivec2(glFragCoord_xy + vec2( 1, 1)), 0);\r
	m37[13] = texelFetch(tPathTracedImageTexture, ivec2(glFragCoord_xy + vec2( 2, 1)), 0);\r
	m37[14] = texelFetch(tPathTracedImageTexture, ivec2(glFragCoord_xy + vec2( 3, 1)), 0);\r
	m37[15] = texelFetch(tPathTracedImageTexture, ivec2(glFragCoord_xy + vec2(-3, 0)), 0);\r
	m37[16] = texelFetch(tPathTracedImageTexture, ivec2(glFragCoord_xy + vec2(-2, 0)), 0);\r
	m37[17] = texelFetch(tPathTracedImageTexture, ivec2(glFragCoord_xy + vec2(-1, 0)), 0);\r
	m37[18] = texelFetch(tPathTracedImageTexture, ivec2(glFragCoord_xy + vec2( 0, 0)), 0); // center pixel\r
	m37[19] = texelFetch(tPathTracedImageTexture, ivec2(glFragCoord_xy + vec2( 1, 0)), 0);\r
	m37[20] = texelFetch(tPathTracedImageTexture, ivec2(glFragCoord_xy + vec2( 2, 0)), 0);\r
	m37[21] = texelFetch(tPathTracedImageTexture, ivec2(glFragCoord_xy + vec2( 3, 0)), 0);\r
	m37[22] = texelFetch(tPathTracedImageTexture, ivec2(glFragCoord_xy + vec2(-3,-1)), 0);\r
	m37[23] = texelFetch(tPathTracedImageTexture, ivec2(glFragCoord_xy + vec2(-2,-1)), 0);\r
	m37[24] = texelFetch(tPathTracedImageTexture, ivec2(glFragCoord_xy + vec2(-1,-1)), 0);\r
	m37[25] = texelFetch(tPathTracedImageTexture, ivec2(glFragCoord_xy + vec2( 0,-1)), 0);\r
	m37[26] = texelFetch(tPathTracedImageTexture, ivec2(glFragCoord_xy + vec2( 1,-1)), 0);\r
	m37[27] = texelFetch(tPathTracedImageTexture, ivec2(glFragCoord_xy + vec2( 2,-1)), 0);\r
	m37[28] = texelFetch(tPathTracedImageTexture, ivec2(glFragCoord_xy + vec2( 3,-1)), 0);\r
	m37[29] = texelFetch(tPathTracedImageTexture, ivec2(glFragCoord_xy + vec2(-2,-2)), 0);\r
	m37[30] = texelFetch(tPathTracedImageTexture, ivec2(glFragCoord_xy + vec2(-1,-2)), 0);\r
	m37[31] = texelFetch(tPathTracedImageTexture, ivec2(glFragCoord_xy + vec2( 0,-2)), 0);\r
	m37[32] = texelFetch(tPathTracedImageTexture, ivec2(glFragCoord_xy + vec2( 1,-2)), 0);\r
	m37[33] = texelFetch(tPathTracedImageTexture, ivec2(glFragCoord_xy + vec2( 2,-2)), 0);\r
	m37[34] = texelFetch(tPathTracedImageTexture, ivec2(glFragCoord_xy + vec2(-1,-3)), 0);\r
	m37[35] = texelFetch(tPathTracedImageTexture, ivec2(glFragCoord_xy + vec2( 0,-3)), 0);\r
	m37[36] = texelFetch(tPathTracedImageTexture, ivec2(glFragCoord_xy + vec2( 1,-3)), 0);\r
\r
	\r
	vec4 centerPixel = m37[18];\r
	vec3 filteredPixelColor, edgePixelColor;\r
	float threshold = 1.0;\r
	int count = 1;\r
	int nextToAnEdgePixel = FALSE;\r
\r
	// start with center pixel rgb color\r
	filteredPixelColor = centerPixel.rgb;\r
\r
	// search above\r
	if (m37[11].a < threshold)\r
	{\r
		filteredPixelColor += m37[11].rgb;\r
		count++; \r
		if (m37[5].a < threshold)\r
		{\r
			filteredPixelColor += m37[5].rgb;\r
			count++;\r
			if (m37[1].a < threshold)\r
			{\r
				filteredPixelColor += m37[1].rgb;\r
				count++;\r
				if (m37[0].a < threshold)\r
				{\r
					filteredPixelColor += m37[0].rgb;\r
					count++; \r
				}\r
				if (m37[2].a < threshold)\r
				{\r
					filteredPixelColor += m37[2].rgb;\r
					count++; \r
				}\r
			}\r
		}		\r
	}\r
	else\r
	{\r
		nextToAnEdgePixel = TRUE;\r
	}\r
\r
	\r
\r
	// search left\r
	if (m37[17].a < threshold)\r
	{\r
		filteredPixelColor += m37[17].rgb;\r
		count++; \r
		if (m37[16].a < threshold)\r
		{\r
			filteredPixelColor += m37[16].rgb;\r
			count++;\r
			if (m37[15].a < threshold)\r
			{\r
				filteredPixelColor += m37[15].rgb;\r
				count++;\r
				if (m37[8].a < threshold)\r
				{\r
					filteredPixelColor += m37[8].rgb;\r
					count++; \r
				}\r
				if (m37[22].a < threshold)\r
				{\r
					filteredPixelColor += m37[22].rgb;\r
					count++; \r
				}\r
			}\r
		}	\r
	}\r
	else\r
	{\r
		nextToAnEdgePixel = TRUE;\r
	}\r
\r
	// search right\r
	if (m37[19].a < threshold)\r
	{\r
		filteredPixelColor += m37[19].rgb;\r
		count++; \r
		if (m37[20].a < threshold)\r
		{\r
			filteredPixelColor += m37[20].rgb;\r
			count++;\r
			if (m37[21].a < threshold)\r
			{\r
				filteredPixelColor += m37[21].rgb;\r
				count++;\r
				if (m37[14].a < threshold)\r
				{\r
					filteredPixelColor += m37[14].rgb;\r
					count++; \r
				}\r
				if (m37[28].a < threshold)\r
				{\r
					filteredPixelColor += m37[28].rgb;\r
					count++; \r
				}\r
			}\r
		}		\r
	}\r
	else\r
	{\r
		nextToAnEdgePixel = TRUE;\r
	}\r
\r
	// search below\r
	if (m37[25].a < threshold)\r
	{\r
		filteredPixelColor += m37[25].rgb;\r
		count++; \r
		if (m37[31].a < threshold)\r
		{\r
			filteredPixelColor += m37[31].rgb;\r
			count++;\r
			if (m37[35].a < threshold)\r
			{\r
				filteredPixelColor += m37[35].rgb;\r
				count++;\r
				if (m37[34].a < threshold)\r
				{\r
					filteredPixelColor += m37[34].rgb;\r
					count++; \r
				}\r
				if (m37[36].a < threshold)\r
				{\r
					filteredPixelColor += m37[36].rgb;\r
					count++; \r
				}\r
			}\r
		}		\r
	}\r
	else\r
	{\r
		nextToAnEdgePixel = TRUE;\r
	}\r
\r
	// search upper-left diagonal\r
	if (m37[10].a < threshold)\r
	{\r
		filteredPixelColor += m37[10].rgb;\r
		count++; \r
		if (m37[3].a < threshold)\r
		{\r
			filteredPixelColor += m37[3].rgb;\r
			count++;\r
		}		\r
		if (m37[4].a < threshold)\r
		{\r
			filteredPixelColor += m37[4].rgb;\r
			count++; \r
		}\r
		if (m37[9].a < threshold)\r
		{\r
			filteredPixelColor += m37[9].rgb;\r
			count++; \r
		}		\r
	}\r
\r
	// search upper-right diagonal\r
	if (m37[12].a < threshold)\r
	{\r
		filteredPixelColor += m37[12].rgb;\r
		count++; \r
		if (m37[6].a < threshold)\r
		{\r
			filteredPixelColor += m37[6].rgb;\r
			count++;\r
		}		\r
		if (m37[7].a < threshold)\r
		{\r
			filteredPixelColor += m37[7].rgb;\r
			count++; \r
		}\r
		if (m37[13].a < threshold)\r
		{\r
			filteredPixelColor += m37[13].rgb;\r
			count++; \r
		}		\r
	}\r
\r
	// search lower-left diagonal\r
	if (m37[24].a < threshold)\r
	{\r
		filteredPixelColor += m37[24].rgb;\r
		count++; \r
		if (m37[23].a < threshold)\r
		{\r
			filteredPixelColor += m37[23].rgb;\r
			count++;\r
		}		\r
		if (m37[29].a < threshold)\r
		{\r
			filteredPixelColor += m37[29].rgb;\r
			count++; \r
		}\r
		if (m37[30].a < threshold)\r
		{\r
			filteredPixelColor += m37[30].rgb;\r
			count++; \r
		}		\r
	}\r
\r
	// search lower-right diagonal\r
	if (m37[26].a < threshold)\r
	{\r
		filteredPixelColor += m37[26].rgb;\r
		count++; \r
		if (m37[27].a < threshold)\r
		{\r
			filteredPixelColor += m37[27].rgb;\r
			count++;\r
		}		\r
		if (m37[32].a < threshold)\r
		{\r
			filteredPixelColor += m37[32].rgb;\r
			count++; \r
		}\r
		if (m37[33].a < threshold)\r
		{\r
			filteredPixelColor += m37[33].rgb;\r
			count++; \r
		}		\r
	}\r
	\r
\r
	// divide by total count to get the average\r
	filteredPixelColor *= (1.0 / float(count));\r
	\r
	\r
\r
	// next, use a smaller blur kernel (13 pixels in roughly circular shape), to help blend the noisy, sharp edge pixels\r
\r
				    // m37[18] is the center pixel\r
	edgePixelColor = 	       m37[ 5].rgb +\r
			 m37[10].rgb + m37[11].rgb + m37[12].rgb + \r
	   m37[16].rgb + m37[17].rgb + m37[18].rgb + m37[19].rgb + m37[20].rgb +\r
			 m37[24].rgb + m37[25].rgb + m37[26].rgb +\r
				       m37[31].rgb;\r
\r
	// if not averaged, the above additions produce white outlines along edges\r
	edgePixelColor *= 0.0769230769; // same as dividing by 13 pixels (1 / 13), to get the average\r
\r
	if (uSceneIsDynamic) // dynamic scene with moving objects and camera (i.e. a game)\r
	{\r
		if (uCameraIsMoving)\r
		{\r
			if (nextToAnEdgePixel == TRUE)\r
				filteredPixelColor = mix(edgePixelColor, centerPixel.rgb, 0.25);\r
		}\r
		else if (centerPixel.a == 1.0 || nextToAnEdgePixel == TRUE)\r
			filteredPixelColor = mix(edgePixelColor, centerPixel.rgb, 0.5);\r
		\r
	}\r
	if (!uSceneIsDynamic) // static scene (only camera can move)\r
	{\r
		if (uCameraIsMoving)\r
		{\r
			if (nextToAnEdgePixel == TRUE)\r
				filteredPixelColor = mix(edgePixelColor, centerPixel.rgb, 0.25);\r
		}\r
		else if (centerPixel.a == 1.0)\r
			filteredPixelColor = mix(filteredPixelColor, centerPixel.rgb, clamp(uSampleCounter * uEdgeSharpenSpeed, 0.0, 1.0));\r
		// the following statement helps smooth out jagged stairstepping where the blurred filteredPixelColor pixels meet the sharp edges\r
		else if (uSampleCounter > 250.0 && nextToAnEdgePixel == TRUE)\r
		 	filteredPixelColor = centerPixel.rgb;\r
		\r
	}\r
\r
	// if the .a value comes into this shader as 1.01, this is an outdoor raymarching demo, and no denoising/blended is needed \r
	if (centerPixel.a == 1.01) \r
		filteredPixelColor = centerPixel.rgb; // no blending, maximum sharpness\r
	\r
	\r
	// final filteredPixelColor processing ////////////////////////////////////\r
\r
	// average accumulation buffer\r
	filteredPixelColor *= uOneOverSampleCounter;\r
\r
	// apply tone mapping (brings pixel into 0.0-1.0 rgb color range)\r
	filteredPixelColor = uUseToneMapping ? ReinhardToneMapping(filteredPixelColor) : filteredPixelColor;\r
\r
	// lastly, apply gamma correction (gives more intensity/brightness range where it's needed)\r
	pc_fragColor = vec4(sqrt(filteredPixelColor), 1.0);\r
}\r
`;const I2=new Rn(2,2),iu=i=>new $(I2,i);class D2{constructor(e){var t,n;this.opts=e,this.ptScene=new rl,this.copyScene=new rl,this.outputScene=new rl,this.orthoCamera=new di(-1,1,1,-1,0,1),this.sampleCounter=1,this.frameCounter=1,this.elapsedTime=0,this._cameraIsMoving=!1,this._cameraRecentlyMoving=!1,this._w=0,this._h=0,this._ready=!1,this._disposed=!1,A2(),this.sceneIsDynamic=(t=e.sceneIsDynamic)!=null?t:!1,this.renderScale=(n=e.renderScale)!=null?n:1}async init(e){var l,c;const t=await new dg().loadAsync((l=this.opts.blueNoiseUrl)!=null?l:C2);t.minFilter=t.magFilter=Qe,t.generateMipmaps=!1;const n=Math.floor(e.domElement.width*this.renderScale),r=Math.floor(e.domElement.height*this.renderScale);this._w=n,this._h=r;const s={minFilter:Qe,magFilter:Qe,format:vt,type:Je,colorSpace:rn,depthBuffer:!1,stencilBuffer:!1};this.ptRT=new pn(n,r,s),this.copyRT=new pn(n,r,s);const a={...{tPreviousTexture:{value:this.copyRT.texture},tBlueNoiseTexture:{value:t},uCameraMatrix:{value:new Fe},uResolution:{value:new Me(n,r)},uRandomVec2:{value:new Me},uEPS_intersect:{value:.01},uTime:{value:0},uSampleCounter:{value:1},uFrameCounter:{value:1},uULen:{value:1},uVLen:{value:1},uApertureSize:{value:0},uFocusDistance:{value:100},uCameraIsMoving:{value:!1},uPreviousSampleCount:{value:1},uSceneIsDynamic:{value:this.sceneIsDynamic},uUseOrthographicCamera:{value:!1}},...(c=this.opts.sceneUniforms)!=null?c:{}};this.ptMat=new kt({uniforms:a,defines:{NUM_ALBEDO_TEXTURES:0},vertexShader:nu,fragmentShader:a0(this.opts.fragmentShader),depthTest:!1,depthWrite:!1}),this.ptScene.add(iu(this.ptMat)),this.copyMat=new kt({uniforms:{tPathTracedImageTexture:{value:this.ptRT.texture}},vertexShader:nu,fragmentShader:P2,depthTest:!1,depthWrite:!1}),this.copyScene.add(iu(this.copyMat)),this.outputMat=new kt({uniforms:{tPathTracedImageTexture:{value:this.ptRT.texture},uSampleCounter:{value:1},uOneOverSampleCounter:{value:1},uPixelEdgeSharpness:{value:1},uEdgeSharpenSpeed:{value:.05},uCameraIsMoving:{value:!1},uSceneIsDynamic:{value:this.sceneIsDynamic},uUseToneMapping:{value:!0}},vertexShader:nu,fragmentShader:L2,depthTest:!1,depthWrite:!1}),this.outputScene.add(iu(this.outputMat)),this._ready=!0}notifyCameraMoving(){this._cameraIsMoving=!0}resetAccumulation(){this.sampleCounter=1,this.frameCounter=1,this._cameraRecentlyMoving=!0}setDefine(e,t){!this.ptMat||(this.ptMat.defines[e]=t,this.ptMat.needsUpdate=!0)}render(e,t,n){!this._ready||this._disposed||(this.elapsedTime+=n*.001,this._syncResize(e),this._updateSampleCounter(),this._updateUniforms(t),e.autoClear=!1,e.setRenderTarget(this.ptRT),e.render(this.ptScene,t),e.setRenderTarget(this.copyRT),e.render(this.copyScene,this.orthoCamera),e.setRenderTarget(null),e.render(this.outputScene,this.orthoCamera),e.autoClear=!0,this._cameraIsMoving=!1)}get uniforms(){var e,t;return(t=(e=this.ptMat)==null?void 0:e.uniforms)!=null?t:{}}dispose(){var e,t,n,r,s;this._disposed||(this._disposed=!0,(e=this.ptRT)==null||e.dispose(),(t=this.copyRT)==null||t.dispose(),(n=this.ptMat)==null||n.dispose(),(r=this.copyMat)==null||r.dispose(),(s=this.outputMat)==null||s.dispose())}_syncResize(e){const t=Math.floor(e.domElement.width*this.renderScale),n=Math.floor(e.domElement.height*this.renderScale);t===this._w&&n===this._h||(this._w=t,this._h=n,this.ptRT.setSize(t,n),this.copyRT.setSize(t,n),this.ptMat.uniforms.uResolution.value.set(t,n),this.resetAccumulation())}_updateSampleCounter(){this._cameraIsMoving?(this.frameCounter+=1,this._cameraRecentlyMoving||(this.ptMat.uniforms.uPreviousSampleCount.value=this.sampleCounter,this.frameCounter=1,this._cameraRecentlyMoving=!0),this.sampleCounter=1):(this.sampleCounter=this.sceneIsDynamic?1:this.sampleCounter+1,this.frameCounter+=1,this._cameraRecentlyMoving=!1)}_updateUniforms(e){e.updateMatrixWorld();const t=this.ptMat.uniforms;t.uCameraMatrix.value.copy(e.matrixWorld);const n=e.fov*.5*(Math.PI/180),r=Math.tan(n);t.uVLen.value=r,t.uULen.value=r*e.aspect,t.uTime.value=this.elapsedTime,t.uSampleCounter.value=this.sampleCounter,t.uFrameCounter.value=this.frameCounter,t.uCameraIsMoving.value=this._cameraIsMoving,t.uSceneIsDynamic.value=this.sceneIsDynamic,t.uRandomVec2.value.set(Math.random(),Math.random());const s=this.outputMat.uniforms;s.uSampleCounter.value=this.sampleCounter,s.uOneOverSampleCounter.value=1/this.sampleCounter,s.uCameraIsMoving.value=this._cameraIsMoving,s.uSceneIsDynamic.value=this.sceneIsDynamic}}const Xe=1/0;function l0(){return{minX:Xe,minY:Xe,minZ:Xe,maxX:-Xe,maxY:-Xe,maxZ:-Xe,triCount:0,leftFirst:0}}function U2(){return{minX:Xe,minY:Xe,minZ:Xe,maxX:-Xe,maxY:-Xe,maxZ:-Xe,triCount:0}}function N2(i){i.minX=Xe,i.minY=Xe,i.minZ=Xe,i.maxX=-Xe,i.maxY=-Xe,i.maxZ=-Xe,i.triCount=0}function ru(i,e,t,n,r,s){const o=n-i,a=r-e,l=s-t;return o*a+a*l+l*o}function Zu(i,e,t){i.minX=Xe,i.minY=Xe,i.minZ=Xe,i.maxX=-Xe,i.maxY=-Xe,i.maxZ=-Xe;const n=i.leftFirst;for(let r=0;r<i.triCount;r++){const s=9*e[n+r],o=t[s],a=t[s+1],l=t[s+2],c=t[s+3],u=t[s+4],h=t[s+5];o<i.minX&&(i.minX=o),a<i.minY&&(i.minY=a),l<i.minZ&&(i.minZ=l),c>i.maxX&&(i.maxX=c),u>i.maxY&&(i.maxY=u),h>i.maxZ&&(i.maxZ=h)}}function Qu(i,e,t,n,r,s,o,a,l,c,u){const h=e[i];if(h.triCount<2){h.leftFirst=t[h.leftFirst];return}let d=Xe,f=0,g=Xe;for(let _=0;_<3;_++){let y=Xe,M=-Xe;const T=h.leftFirst;for(let ee=0;ee<h.triCount;ee++){const z=n[9*t[T+ee]+6+_];z<y&&(y=z),z>M&&(M=z)}if(y===M)continue;for(let ee=0;ee<u;ee++)N2(r[ee]);const S=u/(M-y);for(let ee=0;ee<h.triCount;ee++){const z=t[T+ee],j=9*z,ue=n[j+6+_],pe=Math.min(u-1,Math.floor((ue-y)*S)),he=r[pe];he.triCount++;const ce=n[j],de=n[j+1],Ee=n[j+2],H=n[j+3],xt=n[j+4],be=n[j+5];ce<he.minX&&(he.minX=ce),de<he.minY&&(he.minY=de),Ee<he.minZ&&(he.minZ=Ee),H>he.maxX&&(he.maxX=H),xt>he.maxY&&(he.maxY=xt),be>he.maxZ&&(he.maxZ=be)}let E=0,L=Xe,b=Xe,w=Xe,U=-Xe,k=-Xe,R=-Xe,F=0,B=Xe,V=Xe,X=Xe,G=-Xe,Y=-Xe,J=-Xe;for(let ee=0;ee<u-1;ee++){const z=r[ee];E+=z.triCount,a[ee]=E,z.minX<L&&(L=z.minX),z.minY<b&&(b=z.minY),z.minZ<w&&(w=z.minZ),z.maxX>U&&(U=z.maxX),z.maxY>k&&(k=z.maxY),z.maxZ>R&&(R=z.maxZ),s[ee]=ru(L,b,w,U,k,R);const j=r[u-1-ee];F+=j.triCount,l[u-2-ee]=F,j.minX<B&&(B=j.minX),j.minY<V&&(V=j.minY),j.minZ<X&&(X=j.minZ),j.maxX>G&&(G=j.maxX),j.maxY>Y&&(Y=j.maxY),j.maxZ>J&&(J=j.maxZ),o[u-2-ee]=ru(B,V,X,G,Y,J)}const ne=(M-y)/u;for(let ee=0;ee<u-1;ee++){const z=a[ee]*s[ee]+l[ee]*o[ee];z<d&&(d=z,f=_,g=y+ne*(ee+1))}}const x=ru(h.minX,h.minY,h.minZ,h.maxX,h.maxY,h.maxZ);d>=h.triCount*x&&(g=Xe);let m=su(h,t,n,f,g);if(m===0||m===h.triCount){const _=h.maxX-h.minX,y=h.maxY-h.minY,M=h.maxZ-h.minZ;let T=0;y>_&&(T=1),M>(T===0?_:y)&&(T=2);const S=T===0?h.minX:T===1?h.minY:h.minZ,E=T===0?h.maxX:T===1?h.maxY:h.maxZ;m=su(h,t,n,T,S+(E-S)*.5)}for(let _=0;(m===0||m===h.triCount)&&_<3;_++){let y=0;const M=h.leftFirst;for(let T=0;T<h.triCount;T++)y+=n[9*t[M+T]+6+_];m=su(h,t,n,_,y/h.triCount)}if(m===0||m===h.triCount){h.leftFirst=t[h.leftFirst];return}const p=c.value++,v=c.value++;for(;e.length<=v;)e.push(l0());e[p].leftFirst=h.leftFirst,e[p].triCount=m,e[v].leftFirst=h.leftFirst+m,e[v].triCount=h.triCount-m,h.leftFirst=p,h.triCount=0,Zu(e[p],t,n),Zu(e[v],t,n),Qu(p,e,t,n,r,s,o,a,l,c,u),Qu(v,e,t,n,r,s,o,a,l,c,u)}function su(i,e,t,n,r){let s=i.leftFirst,o=s+i.triCount-1;for(;s<=o;)if(t[9*e[s]+6+n]<r)s++;else{const a=e[s];e[s]=e[o],e[o]=a,o--}return s-i.leftFirst}function F2(i,e,t=32){if(e===0)return;const n=new Float32Array(i.buffer.slice(0,e*9*4)),r=new Uint32Array(e);for(let g=0;g<e;g++)r[g]=g;const s=Array.from({length:t},U2),o=new Float32Array(t-1),a=new Float32Array(t-1),l=new Uint32Array(t-1),c=new Uint32Array(t-1),u=Array.from({length:Math.max(4,e*2)},l0),h={value:2},d=u[0];d.leftFirst=0,d.triCount=e,Zu(d,r,n),Qu(0,u,r,n,s,o,a,l,c,h,t);const f=u.length;for(let g=0;g<f;g++){const x=u[g],m=8*g;i[m+0]=x.minX,i[m+1]=x.minY,i[m+2]=x.minZ,i[m+3]=x.maxX,i[m+4]=x.maxY,i[m+5]=x.maxZ,i[m+6]=x.triCount,i[m+7]=x.leftFirst}}const O2=0,B2=2,Ju=10,En=2048,ou=En*En/8;function k2(i){var v,_;const e=[];if(i.traverse(y=>{!(y instanceof $)||!y.geometry||!y.visible||y.userData.lightmapIgnore||!(Array.isArray(y.material)?y.material:[y.material]).some(S=>S instanceof Ut)||e.push(y)}),e.length===0)return au();const t=[];for(const y of e){const M=Array.isArray(y.material)?y.material:[y.material];for(const T of M)T instanceof Ut&&T.map&&!t.includes(T.map)&&t.length<16&&t.push(T.map)}const n=[],r=[];let s=0;const o=[];for(const y of e){const M=y.geometry.clone();M.applyMatrix4(y.matrixWorld);const T=M.index?M.toNonIndexed():M;if(!T.attributes.position){M.dispose();continue}T.attributes.normal||T.computeVertexNormals();const S=new Set(["position","normal","uv"]);for(const b of Object.keys(T.attributes))S.has(b)||T.deleteAttribute(b);const E=T.attributes.position.count/3,L=Array.isArray(y.material)?y.material:[y.material];if(T.groups.length>0)for(const b of T.groups){const w=b.count/3,U=L[(v=b.materialIndex)!=null?v:0];n.push(gm(U instanceof Ut?U:null,t)),s+=w,r.push(s)}else{const b=L[0];n.push(gm(b instanceof Ut?b:null,t)),s+=E,r.push(s)}o.push(T),M.dispose()}if(o.length===0)return au();const a=Yg(o,!1);for(const y of o)y.dispose();if(!a)return au();const l=a.attributes.position,c=a.attributes.normal,u=a.attributes.uv,h=l.count/3;h>ou&&console.warn(`[PTSceneBuilder] Scene has ${h} triangles \u2014 exceeds 2048\xB2 limit of ${ou}. Extra triangles will be ignored.`);const d=Math.min(h,ou),f=new Float32Array(En*En*4),g=new Float32Array(En*En*4);let x=0;for(let y=0;y<d;y++){const M=l.getX(y*3+0),T=l.getY(y*3+0),S=l.getZ(y*3+0),E=l.getX(y*3+1),L=l.getY(y*3+1),b=l.getZ(y*3+1),w=l.getX(y*3+2),U=l.getY(y*3+2),k=l.getZ(y*3+2);let R=0,F=1,B=0,V=0,X=1,G=0,Y=0,J=1,ne=0;c&&(R=c.getX(y*3+0),F=c.getY(y*3+0),B=c.getZ(y*3+0),V=c.getX(y*3+1),X=c.getY(y*3+1),G=c.getZ(y*3+1),Y=c.getX(y*3+2),J=c.getY(y*3+2),ne=c.getZ(y*3+2));let ee=-1,z=-1,j=-1,ue=-1,pe=-1,he=-1;for(u&&(ee=u.getX(y*3+0),z=u.getY(y*3+0),j=u.getX(y*3+1),ue=u.getY(y*3+1),pe=u.getX(y*3+2),he=u.getY(y*3+2));x<r.length-1&&y>=r[x];)x++;const ce=(_=n[x])!=null?_:{type:Ju,r:.8,g:.8,b:.8,opacity:1,texID:-1,roughness:.8,metalness:0,uvTransform:null};if(u&&ce.uvTransform){const[De,D,A,q,ie,te]=ce.uvTransform,re=ee,Se=z,me=j,ve=ue,Ce=pe,Be=he;ee=De*re+A*Se+ie,z=D*re+q*Se+te,j=De*me+A*ve+ie,ue=D*me+q*ve+te,pe=De*Ce+A*Be+ie,he=D*Ce+q*Be+te}const de=32*y;f[de+0]=M,f[de+1]=T,f[de+2]=S,f[de+3]=E,f[de+4]=L,f[de+5]=b,f[de+6]=w,f[de+7]=U,f[de+8]=k,f[de+9]=R,f[de+10]=F,f[de+11]=B,f[de+12]=V,f[de+13]=X,f[de+14]=G,f[de+15]=Y,f[de+16]=J,f[de+17]=ne,f[de+18]=ee,f[de+19]=z,f[de+20]=j,f[de+21]=ue,f[de+22]=pe,f[de+23]=he,f[de+24]=ce.type,f[de+25]=ce.r,f[de+26]=ce.g,f[de+27]=ce.b,f[de+28]=ce.texID,f[de+29]=ce.opacity,f[de+30]=ce.roughness,f[de+31]=ce.metalness;const Ee=Math.min(M,E,w),H=Math.min(T,L,U),xt=Math.min(S,b,k),be=Math.max(M,E,w),Ie=Math.max(T,L,U),Te=Math.max(S,b,k),qe=9*y;g[qe+0]=Ee,g[qe+1]=H,g[qe+2]=xt,g[qe+3]=be,g[qe+4]=Ie,g[qe+5]=Te,g[qe+6]=(M+E+w)*.333333333,g[qe+7]=(T+L+U)*.333333333,g[qe+8]=(S+b+k)*.333333333}a.dispose(),console.time("[PTSceneBuilder] BVH build"),F2(g,d,64),console.timeEnd("[PTSceneBuilder] BVH build");const m=new Hn(f,En,En,vt,Je);m.wrapS=m.wrapT=Yt,m.magFilter=m.minFilter=Qe,m.colorSpace=rn,m.flipY=!1,m.generateMipmaps=!1,m.needsUpdate=!0;const p=new Hn(g,En,En,vt,Je);return p.wrapS=p.wrapT=Yt,p.magFilter=p.minFilter=Qe,p.colorSpace=rn,p.flipY=!1,p.generateMipmaps=!1,p.needsUpdate=!0,console.log(`[PTSceneBuilder] ${d} triangles, ${t.length} textures`),{triangleTexture:m,aabbTexture:p,albedoTextures:t,triangleCount:d}}function mm(i){!i||(i.triangleTexture.dispose(),i.aabbTexture.dispose())}function z2(i){if(!i)return null;i.matrixAutoUpdate&&i.updateMatrix();const e=i.matrix.elements,[t=1,n=0,,r=0,s=1,,o=0,a=0]=e;return Math.abs(t-1)<1e-5&&Math.abs(n)<1e-5&&Math.abs(r)<1e-5&&Math.abs(s-1)<1e-5&&Math.abs(o)<1e-5&&Math.abs(a)<1e-5?null:[t,n,r,s,o,a]}function au(){const i=new Hn(new Float32Array(En*En*4),En,En,vt,Je);return i.colorSpace=rn,i.flipY=!1,i.generateMipmaps=!1,{triangleTexture:i,aabbTexture:i.clone(),albedoTextures:[],triangleCount:0}}function gm(i,e){var a,l;if(!i)return{type:Ju,r:.8,g:.8,b:.8,opacity:1,texID:-1,roughness:.8,metalness:0,uvTransform:null};if(i.emissiveIntensity>0&&i.emissive.r+i.emissive.g+i.emissive.b>.001){const c=i.emissive,u=i.emissiveIntensity;return{type:O2,r:c.r*u,g:c.g*u,b:c.b*u,opacity:1,texID:-1,roughness:0,metalness:0,uvTransform:null}}const t=i,n=typeof t.transmission=="number"&&t.transmission>.1,r=i.transparent&&i.opacity<.99||n,s=z2(i.map);if(r){const c=i.map?e.indexOf(i.map):-1;return{type:B2,r:i.color.r,g:i.color.g,b:i.color.b,opacity:i.opacity,texID:c,roughness:0,metalness:0,uvTransform:s}}const o=i.map?e.indexOf(i.map):-1;return{type:Ju,r:i.color.r,g:i.color.g,b:i.color.b,opacity:i.opacity,texID:o,roughness:(a=i.roughness)!=null?a:1,metalness:(l=i.metalness)!=null?l:0,uvTransform:s}}var H2=`precision highp float;\r
precision highp int;\r
precision highp sampler2D;\r
\r
#include <pathtracing_uniforms_and_defines>\r
\r
// \u2500\u2500 BVH scene data \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\r
uniform sampler2D tTriangleTexture;\r
uniform sampler2D tAABBTexture;\r
\r
// \u2500\u2500 Albedo textures \u2014 16 individual named samplers (ANGLE/SM5 safe) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\r
uniform sampler2D tAlbedoTex0,  tAlbedoTex1,  tAlbedoTex2,  tAlbedoTex3;\r
uniform sampler2D tAlbedoTex4,  tAlbedoTex5,  tAlbedoTex6,  tAlbedoTex7;\r
uniform sampler2D tAlbedoTex8,  tAlbedoTex9,  tAlbedoTex10, tAlbedoTex11;\r
uniform sampler2D tAlbedoTex12, tAlbedoTex13, tAlbedoTex14, tAlbedoTex15;\r
\r
vec3 sampleAlbedo(int id, vec2 uv) {\r
    vec3 c = vec3(1.0);\r
    if      (id ==  0) c = texture(tAlbedoTex0,  uv).rgb;\r
    else if (id ==  1) c = texture(tAlbedoTex1,  uv).rgb;\r
    else if (id ==  2) c = texture(tAlbedoTex2,  uv).rgb;\r
    else if (id ==  3) c = texture(tAlbedoTex3,  uv).rgb;\r
    else if (id ==  4) c = texture(tAlbedoTex4,  uv).rgb;\r
    else if (id ==  5) c = texture(tAlbedoTex5,  uv).rgb;\r
    else if (id ==  6) c = texture(tAlbedoTex6,  uv).rgb;\r
    else if (id ==  7) c = texture(tAlbedoTex7,  uv).rgb;\r
    else if (id ==  8) c = texture(tAlbedoTex8,  uv).rgb;\r
    else if (id ==  9) c = texture(tAlbedoTex9,  uv).rgb;\r
    else if (id == 10) c = texture(tAlbedoTex10, uv).rgb;\r
    else if (id == 11) c = texture(tAlbedoTex11, uv).rgb;\r
    else if (id == 12) c = texture(tAlbedoTex12, uv).rgb;\r
    else if (id == 13) c = texture(tAlbedoTex13, uv).rgb;\r
    else if (id == 14) c = texture(tAlbedoTex14, uv).rgb;\r
    else if (id == 15) c = texture(tAlbedoTex15, uv).rgb;\r
    return c;\r
}\r
\r
// \u2500\u2500 Scene lights \u2014 packed into a DataTexture, 4 RGBA texels per light \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\r
//\r
// Layout (each light at offset i*4 in a 64\xD71 RGBA32F texture):\r
//   texel i*4+0 : pos.xyz,   type     (0=directional, 1=point, 2=spot, 3=rectarea)\r
//   texel i*4+1 : color.rgb, dist\r
//   texel i*4+2 : dir.xyz,   spotCos\r
//   texel i*4+3 : width,     height,  reserved, reserved   (RectAreaLight)\r
//\r
// Max 16 lights (64 texels / 4 = 16).\r
uniform sampler2D tLightTexture;\r
uniform int       uNumPTLights;\r
\r
struct PTLight {\r
    vec3  pos;   float type;\r
    vec3  color; float dist;\r
    vec3  dir;   float spotCos;\r
    float width; float height;\r
};\r
\r
PTLight getLight(int i) {\r
    vec4 t0 = texelFetch(tLightTexture, ivec2(i * 4 + 0, 0), 0);\r
    vec4 t1 = texelFetch(tLightTexture, ivec2(i * 4 + 1, 0), 0);\r
    vec4 t2 = texelFetch(tLightTexture, ivec2(i * 4 + 2, 0), 0);\r
    vec4 t3 = texelFetch(tLightTexture, ivec2(i * 4 + 3, 0), 0);\r
    return PTLight(t0.xyz, t0.w, t1.xyz, t1.w, t2.xyz, t2.w, t3.x, t3.y);\r
}\r
\r
// \u2500\u2500 Sky \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\r
uniform sampler2D tHDRTexture;\r
uniform bool      uHasSkyTexture;\r
uniform float     uSkyLightIntensity;\r
\r
#define INV_TEXTURE_WIDTH 0.00048828125\r
\r
// \u2500\u2500 Hit record globals \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\r
vec3  rayOrigin, rayDirection;\r
vec3  hitNormal, hitColor;\r
vec2  hitUV;\r
float hitObjectID = -INFINITY;\r
float hitOpacity;\r
int   hitType, hitAlbedoTextureID;\r
float hitRoughness, hitMetalness;\r
\r
// Fresnel Schlick approximation.\r
vec3 F_Schlick(float cosTheta, vec3 F0) {\r
    return F0 + (1.0 - F0) * pow(max(1.0 - cosTheta, 0.0), 5.0);\r
}\r
\r
\r
float SceneIntersect() {\r
    vec4 cur0, cur1, nA0, nA1, nB0, nB1, tmp0, tmp1;\r
    vec4 vd0, vd1, vd2, vd3, vd4, vd5, vd6, vd7;\r
    vec3 invDir = 1.0 / rayDirection;\r
\r
    float stack[32];\r
    float idA, idB, tA, tB, tmpF;\r
    float d, t = INFINITY, ptr = 0.0, id = 0.0;\r
    float triID = 0.0, triU = 0.0, triV = 0.0, triW = 0.0, tu, tv;\r
    int   popNext = TRUE, triLookup = FALSE;\r
    hitObjectID = -INFINITY;\r
\r
    GetBoxNodeData(ptr, cur0, cur1);\r
    d = BoundingBoxIntersect(cur0.xyz, vec3(cur0.w, cur1.xy), rayOrigin, invDir);\r
    popNext = (d < t) ? FALSE : TRUE;\r
\r
    while (true) {\r
        if (popNext == TRUE) {\r
            if (--ptr < 0.0) break;\r
            GetBoxNodeData(stack[int(ptr)], cur0, cur1);\r
        }\r
        popNext = TRUE;\r
\r
        if (cur1.z == 0.0) {\r
            GetBoxNodeData(cur1.w,       nA0, nA1);\r
            GetBoxNodeData(cur1.w + 1.0, nB0, nB1);\r
            idA = cur1.w; idB = cur1.w + 1.0;\r
            tA = BoundingBoxIntersect(nA0.xyz, vec3(nA0.w, nA1.xy), rayOrigin, invDir);\r
            tB = BoundingBoxIntersect(nB0.xyz, vec3(nB0.w, nB1.xy), rayOrigin, invDir);\r
            if (tB < tA) {\r
                tmpF = idA; idA = idB; idB = tmpF;\r
                tmpF = tA;  tA  = tB;  tB  = tmpF;\r
                tmp0 = nA0; tmp1 = nA1; nA0 = nB0; nA1 = nB1; nB0 = tmp0; nB1 = tmp1;\r
            }\r
            if (tB < t) { cur0 = nB0; cur1 = nB1; popNext = FALSE; }\r
            if (tA < t) {\r
                if (popNext == FALSE) stack[int(ptr++)] = idB;\r
                cur0 = nA0; cur1 = nA1; popNext = FALSE;\r
            }\r
            continue;\r
        }\r
\r
        id  = 8.0 * cur1.w;\r
        vd0 = texelFetch(tTriangleTexture, ivec2(mod(id,     2048.0), floor(id     * INV_TEXTURE_WIDTH)), 0);\r
        vd1 = texelFetch(tTriangleTexture, ivec2(mod(id+1.0, 2048.0), floor((id+1.0)*INV_TEXTURE_WIDTH)), 0);\r
        vd2 = texelFetch(tTriangleTexture, ivec2(mod(id+2.0, 2048.0), floor((id+2.0)*INV_TEXTURE_WIDTH)), 0);\r
        d = BVH_TriangleIntersect(vec3(vd0.xyz), vec3(vd0.w, vd1.xy), vec3(vd1.zw, vd2.x),\r
                                  rayOrigin, rayDirection, tu, tv);\r
        if (d < t) { t = d; triID = id; triU = tu; triV = tv; triLookup = TRUE; }\r
    }\r
\r
    if (triLookup == TRUE) {\r
        ivec2 u0=ivec2(mod(triID+0.0,2048.0),floor((triID+0.0)*INV_TEXTURE_WIDTH));\r
        ivec2 u1=ivec2(mod(triID+1.0,2048.0),floor((triID+1.0)*INV_TEXTURE_WIDTH));\r
        ivec2 u2=ivec2(mod(triID+2.0,2048.0),floor((triID+2.0)*INV_TEXTURE_WIDTH));\r
        ivec2 u3=ivec2(mod(triID+3.0,2048.0),floor((triID+3.0)*INV_TEXTURE_WIDTH));\r
        ivec2 u4=ivec2(mod(triID+4.0,2048.0),floor((triID+4.0)*INV_TEXTURE_WIDTH));\r
        ivec2 u5=ivec2(mod(triID+5.0,2048.0),floor((triID+5.0)*INV_TEXTURE_WIDTH));\r
        ivec2 u6=ivec2(mod(triID+6.0,2048.0),floor((triID+6.0)*INV_TEXTURE_WIDTH));\r
        ivec2 u7=ivec2(mod(triID+7.0,2048.0),floor((triID+7.0)*INV_TEXTURE_WIDTH));\r
        vd0=texelFetch(tTriangleTexture,u0,0); vd1=texelFetch(tTriangleTexture,u1,0);\r
        vd2=texelFetch(tTriangleTexture,u2,0); vd3=texelFetch(tTriangleTexture,u3,0);\r
        vd4=texelFetch(tTriangleTexture,u4,0); vd5=texelFetch(tTriangleTexture,u5,0);\r
        vd6=texelFetch(tTriangleTexture,u6,0); vd7=texelFetch(tTriangleTexture,u7,0);\r
\r
        triW = 1.0 - triU - triV;\r
        hitNormal    = normalize(triW*vec3(vd2.yzw) + triU*vec3(vd3.xyz) + triV*vec3(vd3.w,vd4.xy));\r
        hitColor     = vd6.yzw;\r
        hitOpacity   = vd7.y;\r
        hitUV        = triW*vec2(vd4.zw) + triU*vec2(vd5.xy) + triV*vec2(vd5.zw);\r
        hitType      = int(vd6.x);\r
        hitAlbedoTextureID = int(vd7.x);\r
        hitRoughness = vd7.z;\r
        hitMetalness = vd7.w;\r
        hitObjectID  = 0.0;\r
    }\r
    return t;\r
}\r
\r
\r
// \u2500\u2500 Sky \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\r
vec3 GetSkyColor(vec3 dir) {\r
    vec3 sky = vec3(0.0);\r
    if (uHasSkyTexture) {\r
        vec2 uv = vec2(atan(dir.z, dir.x)*ONE_OVER_TWO_PI + 0.5,\r
                       asin(clamp(dir.y,-1.0,1.0))*ONE_OVER_PI + 0.5);\r
        sky = texture(tHDRTexture, uv).rgb;\r
    } else {\r
        float t = clamp(dir.y * 0.5 + 0.5, 0.0, 1.0);\r
        sky = mix(vec3(0.55, 0.65, 0.9), vec3(0.05, 0.1, 0.3), t);\r
    }\r
    return sky * uSkyLightIntensity;\r
}\r
\r
\r
// \u2500\u2500 NEE \u2014 Next Event Estimation \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\r
// Picks one light uniformly. Returns lColor * numLights (PDF cancels).\r
// toLightDist: INFINITY = directional; >0 = finite distance.\r
// cosNL: cosine of angle to light at surface normal nl.\r
//\r
// RectAreaLight (type 3): samples a random point on the rectangle surface.\r
// The rect face normal is -dir; right = arbitrary perpendicular; up = cross.\r
vec3 SetupNEE(vec3 x, vec3 nl, out float toLightDist, out float cosNL) {\r
    toLightDist = INFINITY; cosNL = 0.0;\r
    if (uNumPTLights < 1) return vec3(0.0);\r
\r
    int li = clamp(int(rand() * float(uNumPTLights)), 0, uNumPTLights - 1);\r
    PTLight L = getLight(li);\r
    vec3 toLight = vec3(0.0);\r
\r
    if (L.type < 0.5) {\r
        // Directional\r
        toLight     = -L.dir;\r
        toLightDist = INFINITY;\r
        cosNL       = max(0.0, dot(toLight, nl));\r
\r
    } else if (L.type < 1.5) {\r
        // Point\r
        vec3 delta = L.pos - x;\r
        float d    = max(length(delta), 0.001);\r
        toLight    = delta / d;\r
        toLightDist = d;\r
        cosNL       = max(0.0, dot(toLight, nl));\r
        float range = L.dist;\r
        L.color    *= (range > 0.0)\r
            ? pow(max(0.0, 1.0 - d/range), 2.0) / (d*d + 1.0)\r
            : 1.0 / (d*d + 1.0);\r
\r
    } else if (L.type < 2.5) {\r
        // Spot\r
        vec3 delta = L.pos - x;\r
        float d    = max(length(delta), 0.001);\r
        toLight    = delta / d;\r
        toLightDist = d;\r
        cosNL       = max(0.0, dot(toLight, nl));\r
        float ct    = dot(toLight, -L.dir);\r
        float cc    = L.spotCos;\r
        if (ct < cc * 0.9) return vec3(0.0);\r
        float range = L.dist;\r
        L.color    *= smoothstep(cc*0.9, cc, ct) *\r
                      ((range > 0.0) ? pow(max(0.0, 1.0-d/range), 2.0)/(d*d+1.0) : 1.0/(d*d+1.0));\r
\r
    } else {\r
        // RectAreaLight \u2014 sample random point on face.\r
        // Face normal = -L.dir (light faces -dir direction).\r
        // Build local orthonormal frame around the face normal.\r
        vec3 faceNorm = normalize(-L.dir);\r
        vec3 right    = normalize(cross(abs(faceNorm.y) < 0.9 ? vec3(0,1,0) : vec3(1,0,0), faceNorm));\r
        vec3 up       = cross(faceNorm, right);\r
\r
        // Random point on the rect in [-w/2..w/2] \xD7 [-h/2..h/2]\r
        vec2 r = vec2(rand() - 0.5, rand() - 0.5);\r
        vec3 samplePos = L.pos + right * (r.x * L.width) + up * (r.y * L.height);\r
\r
        vec3 delta  = samplePos - x;\r
        float d     = max(length(delta), 0.001);\r
        toLight     = delta / d;\r
        toLightDist = d;\r
        cosNL       = max(0.0, dot(toLight, nl));\r
\r
        // Geometric factor: cos(angle to surface) / d\xB2 * area\r
        float cosFace = max(0.0, dot(-toLight, faceNorm));\r
        float area    = L.width * L.height;\r
        L.color      *= cosFace * area / (d * d + 1.0);\r
    }\r
\r
    if (cosNL <= 0.0) return vec3(0.0);\r
\r
    rayDirection = normalize(toLight + vec3(rand()-0.5, rand()-0.5, rand()-0.5) * 0.02);\r
    rayOrigin    = x + nl * uEPS_intersect;\r
    return L.color * float(uNumPTLights); // compensate for 1/N selection\r
}\r
\r
\r
// \u2500\u2500 Path integrator \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\r
vec3 CalculateRadiance(out vec3 objectNormal, out vec3 objectColor,\r
                       out float objectID,    out float pixelSharpness)\r
{\r
    vec3  accumCol = vec3(0.0);\r
    vec3  mask     = vec3(1.0);\r
    vec3  n, nl, x;\r
    float ratioIoR, Re, Tr;\r
\r
    bool  nee_active     = false;\r
    bool  nee_isInfinite = true;\r
    float nee_lightDist  = INFINITY;\r
    vec3  nee_lightColor = vec3(0.0);\r
\r
    bool lastWasDiffuse = false;\r
    int  diffuseCount   = 0;\r
    hitType = -100;\r
    int bounceIsSpecular = TRUE;\r
\r
    for (int bounce = 0; bounce < 8; bounce++)\r
    {\r
        float t = SceneIntersect();\r
\r
        // \u2500\u2500 Resolve shadow ray \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\r
        if (nee_active) {\r
            bool reached = nee_isInfinite ? (t == INFINITY)\r
                                          : (t > nee_lightDist - uEPS_intersect * 20.0);\r
            if (reached) accumCol += mask * nee_lightColor;\r
            break;\r
        }\r
\r
        // \u2500\u2500 Miss \u2014 sky / environment \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\r
        if (t == INFINITY) {\r
            if (bounce == 0) { pixelSharpness = 1.0; accumCol += GetSkyColor(rayDirection); break; }\r
            if (lastWasDiffuse) {\r
                accumCol += mask * GetSkyColor(rayDirection) * 0.5;\r
            } else {\r
                accumCol += mask * GetSkyColor(rayDirection);\r
            }\r
            break;\r
        }\r
\r
        // \u2500\u2500 Emissive area light \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\r
        if (hitType == LIGHT) { accumCol += mask * hitColor; break; }\r
\r
        n  = normalize(hitNormal);\r
        nl = dot(n, rayDirection) < 0.0 ? n : -n;\r
        x  = rayOrigin + rayDirection * t;\r
\r
        vec3 albedo = hitColor;\r
        if (hitAlbedoTextureID >= 0 && hitUV.x > -0.5)\r
            albedo *= sampleAlbedo(hitAlbedoTextureID, hitUV);\r
\r
        if (bounce == 0) { objectNormal += n; objectColor += albedo; objectID += hitObjectID; }\r
\r
        // \u2500\u2500 REFR \u2014 glass / dielectric \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\r
        if (hitType == REFR) {\r
            float nc = 1.0, nt = 1.5;\r
            Re = calcFresnelReflectance(rayDirection, n, nc, nt, ratioIoR);\r
            Tr = 1.0 - Re;\r
            if (rand() < Re) {\r
                rayDirection = reflect(rayDirection, nl);\r
                rayOrigin    = x + nl * uEPS_intersect;\r
            } else {\r
                vec3 refractDir = refract(rayDirection, nl, ratioIoR);\r
                if (dot(refractDir, refractDir) < 0.5) {\r
                    rayDirection = reflect(rayDirection, nl);\r
                    rayOrigin    = x + nl * uEPS_intersect;\r
                } else {\r
                    rayDirection = normalize(refractDir);\r
                    rayOrigin    = x - nl * uEPS_intersect;\r
                    mask        *= albedo;\r
                }\r
            }\r
            if (diffuseCount < 2) bounceIsSpecular = TRUE;\r
            lastWasDiffuse = false;\r
            continue;\r
        }\r
\r
        // \u2500\u2500 PBR_MATERIAL \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\r
        {\r
            vec3  F0   = mix(vec3(0.04), albedo, hitMetalness);\r
            float cosV = max(dot(nl, -rayDirection), 0.0);\r
            vec3  F    = F_Schlick(cosV, F0);\r
            float pSpec = clamp(max(F.r, max(F.g, F.b)), 0.04, 0.96);\r
\r
            if (rand() < pSpec) {\r
                vec3 reflDir = reflect(rayDirection, nl);\r
                if (hitRoughness < 0.001) {\r
                    rayDirection = reflDir;\r
                } else {\r
                    rayDirection = randomDirectionInSpecularLobe(nl, reflDir, hitRoughness);\r
                }\r
                mask        *= F / pSpec;\r
                rayOrigin    = x + nl * uEPS_intersect;\r
                bounceIsSpecular = TRUE;\r
                lastWasDiffuse   = false;\r
            } else {\r
                float oneMinusP = max(1.0 - pSpec, 0.001);\r
                vec3  kd        = (vec3(1.0) - F) * (1.0 - hitMetalness);\r
                mask *= albedo * kd / oneMinusP;\r
\r
                diffuseCount++;\r
                bounceIsSpecular = FALSE;\r
                lastWasDiffuse   = true;\r
\r
                if (uNumPTLights > 0 && rand() < 0.5) {\r
                    float nee_cosNL, nee_dist;\r
                    vec3 lightRad = SetupNEE(x, nl, nee_dist, nee_cosNL);\r
                    if (nee_cosNL > 0.0 && length(lightRad) > 0.0) {\r
                        nee_active     = true;\r
                        nee_isInfinite = (nee_dist == INFINITY);\r
                        nee_lightDist  = nee_dist;\r
                        nee_lightColor = lightRad * nee_cosNL * 2.0;\r
                        continue;\r
                    }\r
                }\r
\r
                mask        *= 2.0;\r
                rayDirection = randomCosWeightedDirectionInHemisphere(nl);\r
                rayOrigin    = x + nl * uEPS_intersect;\r
            }\r
            continue;\r
        }\r
\r
    } // end bounce loop\r
\r
    return max(vec3(0.0), accumCol);\r
}\r
\r
\r
void SetupScene(void) { /* all geometry lives in the BVH DataTextures */ }\r
\r
#include <pathtracing_main>\r
`;const c0=16,u0=16,h0=4,_m=u0*h0;function G2(){const i=new Hn(new Uint8Array([255,255,255,255]),1,1,vt,si);return i.colorSpace=rn,i.minFilter=i.magFilter=Qe,i.generateMipmaps=!1,i.needsUpdate=!0,i}function V2(){const i=new Float32Array(_m*4),e=new Hn(i,_m,1,vt,Je);return e.colorSpace=rn,e.minFilter=e.magFilter=Qe,e.generateMipmaps=!1,e.needsUpdate=!0,e}function W2(i,e){var n;const t={};for(let r=0;r<c0;r++)t[`tAlbedoTex${r}`]={value:(n=i[r])!=null?n:e};return t}class X2{constructor(e){this.deps=e,this.pt=null,this.sceneData=null,this.whiteTex=null,this.lightTex=null,this._lightData=new Float32Array(0),this.active=!1,this.rafId=0,this.lastMs=0,this._lightPos=new C,this._lightTgt=new C,this._lightDir=new C,this._loop=()=>{if(!this.active)return;this.rafId=requestAnimationFrame(this._loop);const t=performance.now(),n=t-this.lastMs;this.lastMs=t,this._syncLights(),this._syncSettings(),this.pt.render(this.deps.renderer,this.deps.camera,n)},this._onCameraChange=()=>{var t;(t=this.pt)==null||t.notifyCameraMoving()},this._prevSkyIntensity=-1,this._prevHdri=null,this._prevLightCount=0}async init(){this.whiteTex=G2(),this.lightTex=V2(),this._lightData=this.lightTex.image.data,this.pt=new D2({fragmentShader:H2,sceneIsDynamic:!1,renderScale:1,sceneUniforms:{tTriangleTexture:{value:null},tAABBTexture:{value:null},uHasSkyTexture:{value:!1},tHDRTexture:{value:null},uSkyLightIntensity:{value:1},tLightTexture:{value:this.lightTex},uNumPTLights:{value:0},...W2([],this.whiteTex)}}),await this.pt.init(this.deps.renderer),this.deps.controls.addEventListener("change",this._onCameraChange)}async setScene(e,t){var o;if(!this.pt)return;e.updateMatrixWorld(!0),console.time("[PTController] setScene");const n=k2(e);console.timeEnd("[PTController] setScene"),mm(this.sceneData),this.sceneData=n;const r=this.pt.uniforms;if(!r.tTriangleTexture||!r.tAABBTexture){console.warn("[PTController] setScene before init() \u2014 skipping");return}r.tTriangleTexture.value=n.triangleTexture,r.tAABBTexture.value=n.aabbTexture;const s=this.whiteTex;for(let a=0;a<c0;a++){const l=r[`tAlbedoTex${a}`];l&&(l.value=(o=n.albedoTextures[a])!=null?o:s)}this.pt.resetAccumulation()}activate(){this.active||!this.pt||(this.active=!0,this.lastMs=performance.now(),this._loop())}deactivate(){this.active=!1,this.rafId&&cancelAnimationFrame(this.rafId),this.rafId=0}get isActive(){return this.active}get lightTextureState(){var t,n,r;if(!this.lightTex)return null;const e=(r=(n=(t=this.pt)==null?void 0:t.uniforms.uNumPTLights)==null?void 0:n.value)!=null?r:0;return{tex:this.lightTex,count:e}}dispose(){var e,t,n;this.deactivate(),this.deps.controls.removeEventListener("change",this._onCameraChange),(e=this.pt)==null||e.dispose(),this.pt=null,mm(this.sceneData),this.sceneData=null,(t=this.whiteTex)==null||t.dispose(),this.whiteTex=null,(n=this.lightTex)==null||n.dispose(),this.lightTex=null}_syncSettings(){if(!this.pt)return;const e=this.pt.uniforms,t=Xt.value;e.uSkyLightIntensity&&t.skyIntensity!==this._prevSkyIntensity&&(e.uSkyLightIntensity.value=t.skyIntensity,this._prevSkyIntensity=t.skyIntensity,this.pt.resetAccumulation()),e.uApertureSize&&(e.uApertureSize.value=t.aperture),e.uFocusDistance&&(e.uFocusDistance.value=t.focusDist);const n=ws.value;n!==this._prevHdri&&(this._prevHdri=n,e.tHDRTexture&&(e.tHDRTexture.value=n),e.uHasSkyTexture&&(e.uHasSkyTexture.value=n!==null),this.pt.resetAccumulation())}_syncLights(){if(!this.pt||!this.lightTex)return;const e=this.pt.uniforms,t=this._lightData;t.fill(0);let n=0;const r=Xt.value.lightScale;this.deps.getScene().traverse(o=>{if(n>=u0)return;const a=n*h0*4;if(o instanceof Qo){if(o.userData.lightmapIgnore)return;o.getWorldPosition(this._lightPos),o.target.getWorldPosition(this._lightTgt),this._lightDir.subVectors(this._lightTgt,this._lightPos).normalize(),t[a+0]=this._lightPos.x,t[a+1]=this._lightPos.y,t[a+2]=this._lightPos.z,t[a+3]=0,t[a+4]=o.color.r*o.intensity*r,t[a+5]=o.color.g*o.intensity*r,t[a+6]=o.color.b*o.intensity*r,t[a+7]=0,t[a+8]=this._lightDir.x,t[a+9]=this._lightDir.y,t[a+10]=this._lightDir.z,t[a+11]=0,n++}else if(o instanceof _h){if(o.userData.lightmapIgnore)return;o.getWorldPosition(this._lightPos),o.target.getWorldPosition(this._lightTgt),this._lightDir.subVectors(this._lightTgt,this._lightPos).normalize(),t[a+0]=this._lightPos.x,t[a+1]=this._lightPos.y,t[a+2]=this._lightPos.z,t[a+3]=2,t[a+4]=o.color.r*o.intensity*r,t[a+5]=o.color.g*o.intensity*r,t[a+6]=o.color.b*o.intensity*r,t[a+7]=o.distance||0,t[a+8]=this._lightDir.x,t[a+9]=this._lightDir.y,t[a+10]=this._lightDir.z,t[a+11]=Math.cos(o.angle),n++}else if(o instanceof Or){if(o.userData.lightmapIgnore)return;o.getWorldPosition(this._lightPos),t[a+0]=this._lightPos.x,t[a+1]=this._lightPos.y,t[a+2]=this._lightPos.z,t[a+3]=1,t[a+4]=o.color.r*o.intensity*r,t[a+5]=o.color.g*o.intensity*r,t[a+6]=o.color.b*o.intensity*r,t[a+7]=o.distance||0,t[a+8]=0,t[a+9]=-1,t[a+10]=0,t[a+11]=0,n++}else o instanceof fg&&(o.getWorldPosition(this._lightPos),this._lightDir.set(0,0,-1).applyQuaternion(o.quaternion).normalize(),t[a+0]=this._lightPos.x,t[a+1]=this._lightPos.y,t[a+2]=this._lightPos.z,t[a+3]=3,t[a+4]=o.color.r*o.intensity*r,t[a+5]=o.color.g*o.intensity*r,t[a+6]=o.color.b*o.intensity*r,t[a+7]=0,t[a+8]=this._lightDir.x,t[a+9]=this._lightDir.y,t[a+10]=this._lightDir.z,t[a+11]=0,t[a+12]=o.width,t[a+13]=o.height,n++)}),e.uNumPTLights&&(e.uNumPTLights.value=n),(n>0||this._prevLightCount!==n)&&(this.lightTex.needsUpdate=!0),this._prevLightCount=n}}const q2={Custom:null,Draft:{lightMapSize:256,casts:4,targetSamples:32},Preview:{lightMapSize:512,casts:5,targetSamples:96},Production:{lightMapSize:1024,casts:6,targetSamples:256},Final:{lightMapSize:2048,casts:8,targetSamples:512}},d0=class{constructor(){this.ptController=null,this.options={preset:"advanced",layer:"combined",quality:"Custom",lightMapSize:1024,casts:5,targetSamples:256,bounces:2,safeMode:!0,filterMode:"linear",directLightEnabled:!0,indirectLightEnabled:!0,ambientLightEnabled:!0,ambientDistance:.5,aoIntensity:1,aoExponent:1.5,aoSamples:5,texelsPerMeter:10,lightSize:2.9,lightIntensity:2,lightColor:"#ffffff",directIntensity:1.4,giIntensity:2.7,skyColor:"#ffffff",skyIntensity:0,pause:!1,showGizmo:!0,autoBake:!1,autoApplyRefinement:!1,dilationIterations:1,denoiseEnabled:!1,denoiseSigma:2.5,denoiseThreshold:.18,denoiseKSigma:1,secondaryLightEnabled:!1,secondaryDirX:-.5,secondaryDirY:-1,secondaryDirZ:-.5,secondaryIntensity:.8,secondaryColor:"#ffffcc",samples:0,spp:0,etaSec:0,refinementStatus:"idle",exportFormat:"png",perMesh:{}},this.looping=!1,this.bakeStartTime=0,this.bakeBatchHistory=[],this.externalHooks={},this.maybeBake=e=>{(e==null?void 0:e.last)!==!1&&(!this.options.autoBake||this.bake())};const i={onSceneChanged:()=>this.onSceneChanged(),installDummyLightmaps:e=>this.bakeController.installDummyLightmaps(e),disposeBake:()=>{this.bakeController.disposeAllGroups()},onStaleChange:()=>{var e,t;return(t=(e=this.externalHooks).onStaleChange)==null?void 0:t.call(e)},onViewportPick:e=>{var t,n;return(n=(t=this.externalHooks).onViewportPick)==null?void 0:n.call(t,e)},onTransformChange:(e,t,n)=>{var r,s;return(s=(r=this.externalHooks).onTransformChange)==null?void 0:s.call(r,e,t,n)}};this.sceneController=new p2(i),this.bakeController=new TA(this.sceneController.renderer,this.sceneController.scene),this.renderModeRunner=new m2({getMeshes:()=>this.sceneController.meshes,getBakeGroups:()=>this.bakeController.bakeGroups,getMeshToGroup:()=>this.bakeController.meshToGroup,getOptions:()=>({layer:this.options.layer,texelsPerMeter:this.options.texelsPerMeter,lightMapSize:this.options.lightMapSize,perMesh:this.options.perMesh}),getVisualLight:()=>this.sceneController.visualLight,getLightMarker:()=>this.sceneController.lightMarker,getDummyLightmap:()=>this.bakeController.getDummyLightmap()}),this.bakeController.onProgress=e=>this.onBakeFrame(e),this.initGLBInput(),this.rebuildScene(),this._initPT().catch(e=>console.error("[PT] init failed:",e))}async _initPT(){const i=this.sceneController;i.scene.updateMatrixWorld(!0),this.ptController=new X2({renderer:i.renderer,camera:i.camera,controls:i.controls,getScene:()=>i.scene}),await this.ptController.init(),await this.ptController.setScene(i.scene,i.camera)}onSceneChanged(){var e,t;const i=new Set(this.sceneController.meshes.map(n=>n.uuid));for(const n of Object.keys(this.options.perMesh))i.has(n)||delete this.options.perMesh[n];(t=(e=this.externalHooks).onSceneChanged)==null||t.call(e)}initGLBInput(){this.glbFileInput=document.createElement("input"),this.glbFileInput.type="file",this.glbFileInput.accept=".glb,.gltf",this.glbFileInput.style.display="none",this.glbFileInput.addEventListener("change",()=>{var e;const i=(e=this.glbFileInput.files)==null?void 0:e[0];i&&this.importGLB(i)}),document.body.appendChild(this.glbFileInput)}updateSize(){this.sceneController.updateSize()}async rebuildScene(){this.sceneController.rebuildScene(this.options.preset),this.options.autoBake&&await this.bake(),this.startLoop()}async importGLB(i){var e,t;(t=(e=this.externalHooks).onSceneLoad)==null||t.call(e),await this.sceneController.importGLB(i),this.options.perMesh={},this.options.autoBake&&await this.bake(),this.startLoop()}async bake(){var i,e;if(!!this.sceneController.meshes.length){this.bakeStartTime=performance.now(),this.bakeBatchHistory=[],this.sceneController.syncVisualLight(this.options.lightColor,this.options.lightIntensity);try{await this.bakeController.runBake(this.sceneController.meshes,this.sceneController.lightDummy.position,this.options)}catch(t){const n=t instanceof Error?t.message:String(t);console.error("[baker] bake failed:",t),(e=(i=this.externalHooks).onBakeError)==null||e.call(i,n),this.options.pause=!0;return}this.options.refinementStatus="idle",this.options.samples=this.options.targetSamples,this.options.spp=this.options.targetSamples*this.options.casts,this.options.etaSec=0,this.options.pause=!1,this.renderModeRunner.apply(),this.bakeController.diag.snap("after applyRenderMode (lightmaps mounted)")}}onBakeFrame(i){const e=Math.min(i.bounceSamples,i.aoSamples);this.options.samples=e,this.options.spp=e*this.options.casts}applyQualityPreset(i){const e=q2[i];!e||(this.options.lightMapSize=e.lightMapSize,this.options.casts=e.casts,this.options.targetSamples=e.targetSamples,this.bake())}async applyRefinement(){!this.bakeController.bakeGroups.length||(this.options.refinementStatus="running",await this.bakeController.runRefinement(this.options,this.options.lightMapSize,()=>{}),this.options.refinementStatus=this.options.dilationIterations>0||this.options.denoiseEnabled?"applied":"skipped",this.renderModeRunner.apply())}showUnrefined(){this.bakeController.clearRefinement(),this.options.refinementStatus="idle",this.renderModeRunner.apply()}async rebakeAO(){!this.bakeController.bakeGroups.length||!this.bakeController.bakeResult||(await this.bakeController.runAOOnly({samples:this.options.aoSamples,distance:this.options.ambientDistance,targetSamples:this.options.targetSamples}),this.options.pause=!1)}exportFinal(){return this.exportFinalImpl()}async exportFinalImpl(){var t,n;const i=this.bakeController.bakeGroups;if(!i.length){console.warn("[baker] export: no bake to export \u2014 bake first");return}const e=i[0].refinement?"refined":"composite";for(let r=0;r<i.length;r++){const s=i[r],o=(n=(t=s.refinement)==null?void 0:t.texture)!=null?n:s.composite.texture,a=i.length>1?`_atlas${r}`:"";await this.runExport(o,`lightmap_${e}_${this.options.lightMapSize}${a}`)}}async runExport(i,e){const t=this.options.exportFormat,n=this.options.lightMapSize,r=performance.now();try{await e0(this.sceneController.renderer,i,n,e,t),console.info(`[baker] exported ${e}.${t} (${n}\xD7${n}) in ${(performance.now()-r).toFixed(0)}ms`)}catch(s){throw console.error("[baker] export failed:",s),s}}exportSceneGLB(){return this.exportSceneGLBImpl()}async exportSceneGLBImpl(){if(!this.sceneController.meshes.length){console.warn("[baker] no meshes to export");return}if(!this.bakeController.bakeGroups.length){console.warn("[baker] no baked lightmap available \u2014 bake first");return}const i=this.options.layer;this.options.layer="combined",this.renderModeRunner.apply(),this.options.layer=i;const{GLTFExporter:e}=await bo(()=>import("./GLTFExporter.b262b736.js"),[]),t=new e,n=await new Promise((a,l)=>{t.parse(this.sceneController.cornellRoot,c=>{c instanceof ArrayBuffer?a(c):l(new Error("expected binary GLB output"))},c=>l(c),{binary:!0,embedImages:!0})}),r=new Blob([n],{type:"model/gltf-binary"}),s=URL.createObjectURL(r),o=document.createElement("a");o.href=s,o.download="scene-baked.glb",o.click(),URL.revokeObjectURL(s)}estimateTimeRemaining(i,e){if(e<=0||i>=e)return 0;const t=this.bakeBatchHistory;if(t.length<2)return 0;const n=t[0],r=t[t.length-1],s=r.samples-n.samples,o=r.t-n.t;if(s<=0||o<=0)return 0;const a=o/s;return(e-i)*a/1e3}startLoop(){if(this.looping)return;this.looping=!0;const i=()=>{var e;if(requestAnimationFrame(i),this.sceneController.syncGizmo(this.options.showGizmo),this.bakeController.bakeGroups.length&&!this.options.pause){const t=this.bakeController.tick();if(t)if(t.allDone){this.options.pause=!0,this.options.etaSec=0;const n=(performance.now()-this.bakeStartTime)/1e3;console.info(`[baker] done in ${n.toFixed(2)}s (${this.bakeController.bakeGroups.length} atlas${this.bakeController.bakeGroups.length===1?"":"es"})`),this.options.autoApplyRefinement&&this.applyRefinement()}else{const n=this.options.targetSamples,r=performance.now(),s=this.bakeBatchHistory[this.bakeBatchHistory.length-1];(!s||s.samples!==t.minSamples)&&(this.bakeBatchHistory.push({samples:t.minSamples,t:r}),this.bakeBatchHistory.length>d0.BAKE_ETA_WINDOW&&this.bakeBatchHistory.shift());const o=this.estimateTimeRemaining(t.minSamples,n),a=t.minSamples*this.options.casts;this.options.samples=t.minSamples,this.options.spp=a,this.options.etaSec=Math.ceil(o)}}this.sceneController.controls.update(),this.bakeController.firstPostBakeRender?(this.bakeController.firstPostBakeRender=!1,this.bakeController.diag.snap("about to do FIRST post-bake scene render"),this.bakeController.diag.measure("FIRST post-bake renderer.render",()=>this.sceneController.renderer.render(this.sceneController.scene,this.sceneController.camera)),this.bakeController.diag.snap("after FIRST post-bake scene render")):(e=this.ptController)!=null&&e.isActive||this.sceneController.renderer.render(this.sceneController.scene,this.sceneController.camera)};i()}get meshes(){return this.sceneController.meshes}get scene(){return this.sceneController.scene}requestBake(){return this.bake()}requestAORebake(){return this.rebakeAO()}setQuality(i){this.options.quality=i,this.applyQualityPreset(i)}setLayer(i){this.options.layer=i,this.renderModeRunner.apply()}setRenderMode(i){var e,t;if(i==="pathtraced"){const n=this.sceneController;(e=this.ptController)==null||e.setScene(n.scene,n.camera).then(()=>{var r;(r=this.ptController)==null||r.activate()})}else(t=this.ptController)==null||t.deactivate()}setAutoBake(i){this.options.autoBake=i}getBakeStatus(){return this.bakeController.bakeGroups.length?this.options.pause?"done":"baking":"idle"}getMeshCount(){return this.sceneController.meshes.length}getBakeGroupCount(){return this.bakeController.bakeGroups.length}getBakeElapsedMs(){return this.bakeStartTime?performance.now()-this.bakeStartTime:0}getSceneTree(){return this.sceneController.buildSceneTree()}pickAt(i,e){return this.sceneController.pickAt(i,e)}setSelection(i){this.sceneController.attachGizmoTo(this.sceneController.lookupObject(i))}lookupObject(i){return this.sceneController.lookupObject(i)}getScene(){return this.sceneController.scene}setGizmoMode(i){this.sceneController.setGizmoMode(i)}setNodeVisible(i,e){this.sceneController.setVisible(i,e)}applyRefinementNow(){return this.applyRefinement()}showUnrefinedNow(){this.showUnrefined()}sampleCanvasPixel(i,e){const t=this.sceneController.renderer,n=t.getContext();if(n.isContextLost())return null;t.setRenderTarget(null),t.render(this.sceneController.scene,this.sceneController.camera),n.bindFramebuffer(n.FRAMEBUFFER,null);const r=new Uint8Array(4),s=n.drawingBufferHeight;return n.readPixels(i,s-e,1,1,n.RGBA,n.UNSIGNED_BYTE,r),[r[0],r[1],r[2],r[3]]}getRenderDiag(){const i=this.sceneController.renderer.getContext();return{canvasW:this.sceneController.renderer.domElement.width,canvasH:this.sceneController.renderer.domElement.height,gbW:i.drawingBufferWidth,gbH:i.drawingBufferHeight,glError:i.getError()}}async loadScenePreset(i){var t,n,r,s,o;(n=(t=this.externalHooks).onSceneLoad)==null||n.call(t);const e=(s=(r=this.ptController)==null?void 0:r.isActive)!=null?s:!1;(o=this.ptController)==null||o.deactivate(),await this.sceneController.loadPresetById(i),this.options.perMesh={},this.ptController&&(await this.ptController.setScene(this.sceneController.scene,this.sceneController.camera),e&&this.ptController.activate()),this.startLoop()}addAsset(i,e){const t=Array.isArray(e)?new C(e[0],e[1],e[2]):e;return this.sceneController.addAsset(i,t)}removeNode(i){this.sceneController.removeNode(i)}pickGroundPoint(i,e){return this.sceneController.pickGroundPoint(i,e)}triggerImportGLB(){this.glbFileInput.value="",this.glbFileInput.click()}async requestPTBake(){var h,d,f,g,x,m;const i=this.sceneController.meshes;if(!i.length)return;if(!i.every(p=>p.geometry.hasAttribute("uv2"))){console.warn("[PTBaker] UV2 missing \u2014 run Quick Bake first to generate UV2 coords."),(d=(h=this.externalHooks).onBakeError)==null||d.call(h,"UV2 missing \u2014 run Quick Bake first.");return}const{PTBaker:t}=await bo(()=>import("./index.1a3243b8.js"),[]),{buildBVHScene:n,disposeBVHSceneData:r}=await bo(()=>import("./index.88727855.js"),[]),{renderAtlas:s}=await bo(()=>import("./index.537cdcf8.js"),[]),{runRefinement:o}=await bo(()=>import("./index.537cdcf8.js"),[]),a=this.sceneController,l=(f=this.ptController)==null?void 0:f.lightTextureState;ur.value="baking",Pl.value={pct:0,samples:0,atlas:1,total:1,elapsedMs:0};const c=n(a.scene),u=new t;try{const p=await u.bake(a.renderer,i,c,{size:this.options.lightMapSize,samples:this.options.targetSamples,skyIntensity:this.options.skyIntensity,lightTex:l==null?void 0:l.tex,numLights:(g=l==null?void 0:l.count)!=null?g:0,onProgress:y=>{Pl.value={pct:y*100,samples:Math.round(y*this.options.targetSamples),atlas:1,total:1,elapsedMs:0}}}),v=s(a.renderer,i,this.options.lightMapSize),_=await o(a.renderer,p.texture.texture,v.positionTexture,this.options.lightMapSize,{dilationIterations:Math.max(1,this.options.dilationIterations),denoiseEnabled:this.options.denoiseEnabled,denoiseSigma:this.options.denoiseSigma,denoiseThreshold:this.options.denoiseThreshold,denoiseKSigma:this.options.denoiseKSigma});v.positionTexture.dispose(),v.normalTexture.dispose();for(const y of i){const M=Array.isArray(y.material)?y.material:[y.material];for(const T of M)T instanceof Ut&&(T.lightMap=_.texture,T.lightMapIntensity=1,T.needsUpdate=!0)}console.info("[PTBaker] done \u2014 "+this.options.targetSamples+" samples, "+this.options.lightMapSize+"\xD7"+this.options.lightMapSize)}catch(p){const v=p instanceof Error?p.message:String(p);console.error("[PTBaker] bake failed:",p),(m=(x=this.externalHooks).onBakeError)==null||m.call(x,v)}finally{r(c),u.dispose(),ur.value="done"}}};let f0=d0;f0.BAKE_ETA_WINDOW=16;function Y2(){return new URLSearchParams(window.location.search).get("legacy")==="1"}function $2(){return new URLSearchParams(window.location.search).get("test")==="1"}function j2(i){setInterval(()=>{const e=i.getBakeStatus();ur.value!==e&&(ur.value=e);const t=i.options,n=t.targetSamples,r=n>0?Math.min(100,t.samples/n*100):0;Pl.value={pct:r,samples:t.samples,atlas:i.getBakeGroupCount(),total:n,elapsedMs:e==="baking"?i.getBakeElapsedMs():0}},250)}function K2(i){qo(()=>{i.setSelection(zn.value)}),qo(()=>{i.setGizmoMode(ol.value)})}function Z2(i){window.addEventListener("keydown",e=>{if(e.target instanceof HTMLInputElement||e.target instanceof HTMLTextAreaElement)return;const t=e.key.toLowerCase();if(t==="w")ol.value="translate";else if(t==="e")ol.value="rotate";else if(t==="r")ol.value="scale";else if(e.key==="Escape")zn.value=null;else if(e.key==="Delete"||e.key==="Backspace"){const n=zn.value;if(!n||n===Ho)return;i.removeNode(n),zn.value=null}else if(t==="b")ea.value&&ur.value!=="baking"&&i.requestBake();else if(t==="p"){const n=lr.value==="pathtraced"?"combined":"pathtraced";lr.value=n,i.setRenderMode(n)}})}function Q2(i){const e=i.sceneController.renderer.domElement;e.addEventListener("dragover",t=>{!t.dataTransfer||!Array.from(t.dataTransfer.types).includes("application/x-baker-asset")||(t.preventDefault(),t.dataTransfer.dropEffect="copy")}),e.addEventListener("drop",t=>{if(!t.dataTransfer)return;const n=t.dataTransfer.getData("application/x-baker-asset");if(!n)return;t.preventDefault();let r;try{r=JSON.parse(n)}catch{console.warn("[baker] bad asset drop payload",n);return}const s=i.pickGroundPoint(t.clientX,t.clientY),o=i.addAsset(r,s);o&&(zn.value=o)})}(async()=>{await hT();const i=new f0;if(V1(i),eE(),nE(),i.externalHooks={onSceneChanged:()=>{Xs.value=i.getSceneTree()},onStaleChange:()=>{ea.value=!0},onViewportPick:e=>{zn.value=e},onBakeError:e=>{aA("error",`Bake failed: ${e}`)}},Xs.value=i.getSceneTree(),zn.value=Ho,window.addEventListener("resize",()=>i.updateSize()),!Y2()){const e=document.createElement("div");e.id="app",document.body.appendChild(e),E0(P(yA,{}),e),j2(i),K2(i),Z2(i),Q2(i)}$2()&&(window.__baker=i,document.body.setAttribute("data-baker-ready","1"))})();export{Uh as $,F2 as A,Tt as B,eR as C,vn as D,_t as E,Je as F,li as G,ri as H,Vo as I,Dg as J,tR as K,it as L,$ as M,rn as N,di as O,Rn as P,qt as Q,vt as R,kt as S,hT as T,Gl as U,C as V,ag as W,vT as X,US as Y,Xg as Z,qg as _,Rt as a,HS as a0,VS as a1,WS as a2,XS as a3,qS as a4,e0 as a5,Sw as a6,ww as a7,Ew as a8,LS as a9,IS as aa,DS as ab,Aw as ac,ot as ad,kw as ae,Bw as af,Nw as ag,Uw as ah,t0 as ai,xn as b,rl as c,Re as d,J2 as e,qm as f,Vm as g,dt as h,Fe as i,zs as j,Qe as k,pu as l,Ss as m,nl as n,yi as o,Yt as p,Bs as q,xl as r,A2 as s,a0 as t,k2 as u,Hn as v,si as w,pn as x,mm as y,D2 as z};
