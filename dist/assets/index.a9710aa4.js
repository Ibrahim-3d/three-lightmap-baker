const Zv=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}};Zv();const Qv="modulepreload",Qh={},Jv="/three-lightmap-baker/",e_=function(e,t){return!t||t.length===0?e():Promise.all(t.map(n=>{if(n=`${Jv}${n}`,n in Qh)return;Qh[n]=!0;const i=n.endsWith(".css"),r=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${r}`))return;const a=document.createElement("link");if(a.rel=i?"stylesheet":Qv,i||(a.as="script",a.crossOrigin=""),a.href=n,document.head.appendChild(a),i)return new Promise((l,c)=>{a.addEventListener("load",l),a.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${n}`)))})})).then(()=>e())};/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const wu="161",Us={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Fs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},t_=0,Jh=1,n_=2,Xf=1,i_=2,yi=3,qn=0,xn=1,mn=2,Bn=0,_r=1,ed=2,td=3,nd=4,s_=5,ms=100,r_=101,o_=102,id=103,sd=104,a_=200,l_=201,c_=202,u_=203,Hc=204,Gc=205,h_=206,d_=207,p_=208,f_=209,m_=210,g_=211,v_=212,__=213,x_=214,b_=0,y_=1,w_=2,ja=3,M_=4,E_=5,S_=6,T_=7,jf=0,A_=1,C_=2,Zi=0,P_=1,R_=2,L_=3,I_=4,D_=5,N_=6,rd="attached",U_="detached",qf=300,yr=301,wr=302,Wc=303,Xc=304,il=306,Mr=1e3,hn=1001,qa=1002,dt=1003,jc=1004,pr=1005,Tt=1006,ka=1007,Ei=1008,Ya=1008,ni=1009,qc=1010,Yf=1011,sl=1012,wo=1013,Tn=1014,ft=1015,si=1016,Kf=1017,$f=1018,bs=1020,F_=1021,Wt=1023,O_=1024,B_=1025,ys=1026,Er=1027,Zf=1028,Mu=1029,Qf=1030,rl=1031,Co=1033,zl=33776,Hl=33777,Gl=33778,Wl=33779,od=35840,ad=35841,ld=35842,cd=35843,Jf=36196,ud=37492,hd=37496,dd=37808,pd=37809,fd=37810,md=37811,gd=37812,vd=37813,_d=37814,xd=37815,bd=37816,yd=37817,wd=37818,Md=37819,Ed=37820,Sd=37821,Xl=36492,Td=36494,Ad=36495,k_=36283,Cd=36284,Pd=36285,Rd=36286,Po=2300,Sr=2301,jl=2302,Ld=2400,Id=2401,Dd=2402,V_=2500,z_=0,em=1,Yc=2,tm=3e3,ws=3001,H_=3200,G_=3201,nm=0,W_=1,Un="",Ft="srgb",en="srgb-linear",Eu="display-p3",ol="display-p3-linear",Ka="linear",St="srgb",$a="rec709",Za="p3",Os=7680,Nd=519,X_=512,j_=513,q_=514,im=515,Y_=516,K_=517,$_=518,Z_=519,Kc=35044,Yn="300 es",$c=1035,Si=2e3,Qa=2001;class Ts{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const an=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ud=1234567;const Mo=Math.PI/180,Tr=180/Math.PI;function jn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(an[s&255]+an[s>>8&255]+an[s>>16&255]+an[s>>24&255]+"-"+an[e&255]+an[e>>8&255]+"-"+an[e>>16&15|64]+an[e>>24&255]+"-"+an[t&63|128]+an[t>>8&255]+"-"+an[t>>16&255]+an[t>>24&255]+an[n&255]+an[n>>8&255]+an[n>>16&255]+an[n>>24&255]).toLowerCase()}function Kt(s,e,t){return Math.max(e,Math.min(t,s))}function Su(s,e){return(s%e+e)%e}function Q_(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function J_(s,e,t){return s!==e?(t-s)/(e-s):0}function Eo(s,e,t){return(1-t)*s+t*e}function ex(s,e,t,n){return Eo(s,e,1-Math.exp(-t*n))}function tx(s,e=1){return e-Math.abs(Su(s,e*2)-e)}function nx(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function ix(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function sx(s,e){return s+Math.floor(Math.random()*(e-s+1))}function rx(s,e){return s+Math.random()*(e-s)}function ox(s){return s*(.5-Math.random())}function ax(s){s!==void 0&&(Ud=s);let e=Ud+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function lx(s){return s*Mo}function cx(s){return s*Tr}function Zc(s){return(s&s-1)===0&&s!==0}function ux(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Ja(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function hx(s,e,t,n,i){const r=Math.cos,a=Math.sin,l=r(t/2),c=a(t/2),h=r((e+n)/2),d=a((e+n)/2),f=r((e-n)/2),m=a((e-n)/2),g=r((n-e)/2),b=a((n-e)/2);switch(i){case"XYX":s.set(l*d,c*f,c*m,l*h);break;case"YZY":s.set(c*m,l*d,c*f,l*h);break;case"ZXZ":s.set(c*f,c*m,l*d,l*h);break;case"XZX":s.set(l*d,c*b,c*g,l*h);break;case"YXY":s.set(c*g,l*d,c*b,l*h);break;case"ZYZ":s.set(c*b,c*g,l*d,l*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Xn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function gt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const sm={DEG2RAD:Mo,RAD2DEG:Tr,generateUUID:jn,clamp:Kt,euclideanModulo:Su,mapLinear:Q_,inverseLerp:J_,lerp:Eo,damp:ex,pingpong:tx,smoothstep:nx,smootherstep:ix,randInt:sx,randFloat:rx,randFloatSpread:ox,seededRandom:ax,degToRad:lx,radToDeg:cx,isPowerOfTwo:Zc,ceilPowerOfTwo:ux,floorPowerOfTwo:Ja,setQuaternionFromProperEuler:hx,normalize:gt,denormalize:Xn};class Ae{constructor(e=0,t=0){Ae.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Kt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class it{constructor(e,t,n,i,r,a,l,c,h){it.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,l,c,h)}set(e,t,n,i,r,a,l,c,h){const d=this.elements;return d[0]=e,d[1]=i,d[2]=l,d[3]=t,d[4]=r,d[5]=c,d[6]=n,d[7]=a,d[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],l=n[3],c=n[6],h=n[1],d=n[4],f=n[7],m=n[2],g=n[5],b=n[8],M=i[0],x=i[3],v=i[6],w=i[1],y=i[4],S=i[7],C=i[2],P=i[5],A=i[8];return r[0]=a*M+l*w+c*C,r[3]=a*x+l*y+c*P,r[6]=a*v+l*S+c*A,r[1]=h*M+d*w+f*C,r[4]=h*x+d*y+f*P,r[7]=h*v+d*S+f*A,r[2]=m*M+g*w+b*C,r[5]=m*x+g*y+b*P,r[8]=m*v+g*S+b*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],l=e[5],c=e[6],h=e[7],d=e[8];return t*a*d-t*l*h-n*r*d+n*l*c+i*r*h-i*a*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],l=e[5],c=e[6],h=e[7],d=e[8],f=d*a-l*h,m=l*c-d*r,g=h*r-a*c,b=t*f+n*m+i*g;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/b;return e[0]=f*M,e[1]=(i*h-d*n)*M,e[2]=(l*n-i*a)*M,e[3]=m*M,e[4]=(d*t-i*c)*M,e[5]=(i*r-l*t)*M,e[6]=g*M,e[7]=(n*c-h*t)*M,e[8]=(a*t-n*r)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,l){const c=Math.cos(r),h=Math.sin(r);return this.set(n*c,n*h,-n*(c*a+h*l)+a+e,-i*h,i*c,-i*(-h*a+c*l)+l+t,0,0,1),this}scale(e,t){return this.premultiply(ql.makeScale(e,t)),this}rotate(e){return this.premultiply(ql.makeRotation(-e)),this}translate(e,t){return this.premultiply(ql.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ql=new it;function rm(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Ro(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function dx(){const s=Ro("canvas");return s.style.display="block",s}const Fd={};function Ms(s){s in Fd||(Fd[s]=!0,console.warn(s))}const Od=new it().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Bd=new it().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),jo={[en]:{transfer:Ka,primaries:$a,toReference:s=>s,fromReference:s=>s},[Ft]:{transfer:St,primaries:$a,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[ol]:{transfer:Ka,primaries:Za,toReference:s=>s.applyMatrix3(Bd),fromReference:s=>s.applyMatrix3(Od)},[Eu]:{transfer:St,primaries:Za,toReference:s=>s.convertSRGBToLinear().applyMatrix3(Bd),fromReference:s=>s.applyMatrix3(Od).convertLinearToSRGB()}},px=new Set([en,ol]),pt={enabled:!0,_workingColorSpace:en,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!px.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const n=jo[e].toReference,i=jo[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return jo[s].primaries},getTransfer:function(s){return s===Un?Ka:jo[s].transfer}};function xr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Yl(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Bs;class om{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Bs===void 0&&(Bs=Ro("canvas")),Bs.width=e.width,Bs.height=e.height;const n=Bs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Bs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){const t=Ro("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=xr(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(xr(t[n]/255)*255):t[n]=xr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let fx=0;class am{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:fx++}),this.uuid=jn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,l=i.length;a<l;a++)i[a].isDataTexture?r.push(Kl(i[a].image)):r.push(Kl(i[a]))}else r=Kl(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Kl(s){return typeof HTMLImageElement!="undefined"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&s instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&s instanceof ImageBitmap?om.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let mx=0;class jt extends Ts{constructor(e=jt.DEFAULT_IMAGE,t=jt.DEFAULT_MAPPING,n=hn,i=hn,r=Tt,a=Ei,l=Wt,c=ni,h=jt.DEFAULT_ANISOTROPY,d=Un){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:mx++}),this.uuid=jn(),this.name="",this.source=new am(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=h,this.format=l,this.internalFormat=null,this.type=c,this.offset=new Ae(0,0),this.repeat=new Ae(1,1),this.center=new Ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new it,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof d=="string"?this.colorSpace=d:(Ms("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=d===ws?Ft:Un),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==qf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Mr:e.x=e.x-Math.floor(e.x);break;case hn:e.x=e.x<0?0:1;break;case qa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Mr:e.y=e.y-Math.floor(e.y);break;case hn:e.y=e.y<0?0:1;break;case qa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ms("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ft?ws:tm}set encoding(e){Ms("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===ws?Ft:Un}}jt.DEFAULT_IMAGE=null;jt.DEFAULT_MAPPING=qf;jt.DEFAULT_ANISOTROPY=1;class _t{constructor(e=0,t=0,n=0,i=1){_t.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const c=e.elements,h=c[0],d=c[4],f=c[8],m=c[1],g=c[5],b=c[9],M=c[2],x=c[6],v=c[10];if(Math.abs(d-m)<.01&&Math.abs(f-M)<.01&&Math.abs(b-x)<.01){if(Math.abs(d+m)<.1&&Math.abs(f+M)<.1&&Math.abs(b+x)<.1&&Math.abs(h+g+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(h+1)/2,S=(g+1)/2,C=(v+1)/2,P=(d+m)/4,A=(f+M)/4,I=(b+x)/4;return y>S&&y>C?y<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(y),i=P/n,r=A/n):S>C?S<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(S),n=P/i,r=I/i):C<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(C),n=A/r,i=I/r),this.set(n,i,r,t),this}let w=Math.sqrt((x-b)*(x-b)+(f-M)*(f-M)+(m-d)*(m-d));return Math.abs(w)<.001&&(w=1),this.x=(x-b)/w,this.y=(f-M)/w,this.z=(m-d)/w,this.w=Math.acos((h+g+v-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class gx extends Ts{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new _t(0,0,e,t),this.scissorTest=!1,this.viewport=new _t(0,0,e,t);const i={width:e,height:t,depth:1};n.encoding!==void 0&&(Ms("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===ws?Ft:Un),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Tt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new jt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new am(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Pn extends gx{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class lm extends jt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=dt,this.minFilter=dt,this.wrapR=hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vx extends jt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=dt,this.minFilter=dt,this.wrapR=hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _x extends Pn{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isWebGLMultipleRenderTargets=!0;const r=this.texture;this.texture=[];for(let a=0;a<n;a++)this.texture[a]=r.clone(),this.texture[a].isRenderTargetTexture=!0}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.texture.length;i<r;i++)this.texture[i].image.width=e,this.texture[i].image.height=t,this.texture[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}copy(e){this.dispose(),this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.texture.length=0;for(let t=0,n=e.texture.length;t<n;t++)this.texture[t]=e.texture[t].clone(),this.texture[t].isRenderTargetTexture=!0;return this}}class Gt{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,l){let c=n[i+0],h=n[i+1],d=n[i+2],f=n[i+3];const m=r[a+0],g=r[a+1],b=r[a+2],M=r[a+3];if(l===0){e[t+0]=c,e[t+1]=h,e[t+2]=d,e[t+3]=f;return}if(l===1){e[t+0]=m,e[t+1]=g,e[t+2]=b,e[t+3]=M;return}if(f!==M||c!==m||h!==g||d!==b){let x=1-l;const v=c*m+h*g+d*b+f*M,w=v>=0?1:-1,y=1-v*v;if(y>Number.EPSILON){const C=Math.sqrt(y),P=Math.atan2(C,v*w);x=Math.sin(x*P)/C,l=Math.sin(l*P)/C}const S=l*w;if(c=c*x+m*S,h=h*x+g*S,d=d*x+b*S,f=f*x+M*S,x===1-l){const C=1/Math.sqrt(c*c+h*h+d*d+f*f);c*=C,h*=C,d*=C,f*=C}}e[t]=c,e[t+1]=h,e[t+2]=d,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,r,a){const l=n[i],c=n[i+1],h=n[i+2],d=n[i+3],f=r[a],m=r[a+1],g=r[a+2],b=r[a+3];return e[t]=l*b+d*f+c*g-h*m,e[t+1]=c*b+d*m+h*f-l*g,e[t+2]=h*b+d*g+l*m-c*f,e[t+3]=d*b-l*f-c*m-h*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,a=e._order,l=Math.cos,c=Math.sin,h=l(n/2),d=l(i/2),f=l(r/2),m=c(n/2),g=c(i/2),b=c(r/2);switch(a){case"XYZ":this._x=m*d*f+h*g*b,this._y=h*g*f-m*d*b,this._z=h*d*b+m*g*f,this._w=h*d*f-m*g*b;break;case"YXZ":this._x=m*d*f+h*g*b,this._y=h*g*f-m*d*b,this._z=h*d*b-m*g*f,this._w=h*d*f+m*g*b;break;case"ZXY":this._x=m*d*f-h*g*b,this._y=h*g*f+m*d*b,this._z=h*d*b+m*g*f,this._w=h*d*f-m*g*b;break;case"ZYX":this._x=m*d*f-h*g*b,this._y=h*g*f+m*d*b,this._z=h*d*b-m*g*f,this._w=h*d*f+m*g*b;break;case"YZX":this._x=m*d*f+h*g*b,this._y=h*g*f+m*d*b,this._z=h*d*b-m*g*f,this._w=h*d*f-m*g*b;break;case"XZY":this._x=m*d*f-h*g*b,this._y=h*g*f-m*d*b,this._z=h*d*b+m*g*f,this._w=h*d*f+m*g*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],l=t[5],c=t[9],h=t[2],d=t[6],f=t[10],m=n+l+f;if(m>0){const g=.5/Math.sqrt(m+1);this._w=.25/g,this._x=(d-c)*g,this._y=(r-h)*g,this._z=(a-i)*g}else if(n>l&&n>f){const g=2*Math.sqrt(1+n-l-f);this._w=(d-c)/g,this._x=.25*g,this._y=(i+a)/g,this._z=(r+h)/g}else if(l>f){const g=2*Math.sqrt(1+l-n-f);this._w=(r-h)/g,this._x=(i+a)/g,this._y=.25*g,this._z=(c+d)/g}else{const g=2*Math.sqrt(1+f-n-l);this._w=(a-i)/g,this._x=(r+h)/g,this._y=(c+d)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Kt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,l=t._x,c=t._y,h=t._z,d=t._w;return this._x=n*d+a*l+i*h-r*c,this._y=i*d+a*c+r*l-n*h,this._z=r*d+a*h+n*c-i*l,this._w=a*d-n*l-i*c-r*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,a=this._w;let l=a*e._w+n*e._x+i*e._y+r*e._z;if(l<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,l=-l):this.copy(e),l>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const c=1-l*l;if(c<=Number.EPSILON){const g=1-t;return this._w=g*a+t*this._w,this._x=g*n+t*this._x,this._y=g*i+t*this._y,this._z=g*r+t*this._z,this.normalize(),this}const h=Math.sqrt(c),d=Math.atan2(h,l),f=Math.sin((1-t)*d)/h,m=Math.sin(t*d)/h;return this._w=a*f+this._w*m,this._x=n*f+this._x*m,this._y=i*f+this._y*m,this._z=r*f+this._z*m,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,n=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(kd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(kd.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,l=e.z,c=e.w,h=2*(a*i-l*n),d=2*(l*t-r*i),f=2*(r*n-a*t);return this.x=t+c*h+a*f-l*d,this.y=n+c*d+l*h-r*f,this.z=i+c*f+r*d-a*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,l=t.y,c=t.z;return this.x=i*c-r*l,this.y=r*a-n*c,this.z=n*l-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return $l.copy(this).projectOnVector(e),this.sub($l)}reflect(e){return this.sub($l.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Kt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const $l=new D,kd=new Gt;class Vt{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Vn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Vn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Vn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,l=r.count;a<l;a++)e.isMesh===!0?e.getVertexPosition(a,Vn):Vn.fromBufferAttribute(r,a),Vn.applyMatrix4(e.matrixWorld),this.expandByPoint(Vn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),qo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),qo.copy(n.boundingBox)),qo.applyMatrix4(e.matrixWorld),this.union(qo)}const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Vn),Vn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Jr),Yo.subVectors(this.max,Jr),ks.subVectors(e.a,Jr),Vs.subVectors(e.b,Jr),zs.subVectors(e.c,Jr),Oi.subVectors(Vs,ks),Bi.subVectors(zs,Vs),os.subVectors(ks,zs);let t=[0,-Oi.z,Oi.y,0,-Bi.z,Bi.y,0,-os.z,os.y,Oi.z,0,-Oi.x,Bi.z,0,-Bi.x,os.z,0,-os.x,-Oi.y,Oi.x,0,-Bi.y,Bi.x,0,-os.y,os.x,0];return!Zl(t,ks,Vs,zs,Yo)||(t=[1,0,0,0,1,0,0,0,1],!Zl(t,ks,Vs,zs,Yo))?!1:(Ko.crossVectors(Oi,Bi),t=[Ko.x,Ko.y,Ko.z],Zl(t,ks,Vs,zs,Yo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Vn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Vn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(fi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const fi=[new D,new D,new D,new D,new D,new D,new D,new D],Vn=new D,qo=new Vt,ks=new D,Vs=new D,zs=new D,Oi=new D,Bi=new D,os=new D,Jr=new D,Yo=new D,Ko=new D,as=new D;function Zl(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){as.fromArray(s,r);const l=i.x*Math.abs(as.x)+i.y*Math.abs(as.y)+i.z*Math.abs(as.z),c=e.dot(as),h=t.dot(as),d=n.dot(as);if(Math.max(-Math.max(c,h,d),Math.min(c,h,d))>l)return!1}return!0}const xx=new Vt,eo=new D,Ql=new D;class $n{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):xx.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;eo.subVectors(e,this.center);const t=eo.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(eo,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ql.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(eo.copy(e.center).add(Ql)),this.expandByPoint(eo.copy(e.center).sub(Ql))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const mi=new D,Jl=new D,$o=new D,ki=new D,ec=new D,Zo=new D,tc=new D;class Lr{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,mi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=mi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(mi.copy(this.origin).addScaledVector(this.direction,t),mi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Jl.copy(e).add(t).multiplyScalar(.5),$o.copy(t).sub(e).normalize(),ki.copy(this.origin).sub(Jl);const r=e.distanceTo(t)*.5,a=-this.direction.dot($o),l=ki.dot(this.direction),c=-ki.dot($o),h=ki.lengthSq(),d=Math.abs(1-a*a);let f,m,g,b;if(d>0)if(f=a*c-l,m=a*l-c,b=r*d,f>=0)if(m>=-b)if(m<=b){const M=1/d;f*=M,m*=M,g=f*(f+a*m+2*l)+m*(a*f+m+2*c)+h}else m=r,f=Math.max(0,-(a*m+l)),g=-f*f+m*(m+2*c)+h;else m=-r,f=Math.max(0,-(a*m+l)),g=-f*f+m*(m+2*c)+h;else m<=-b?(f=Math.max(0,-(-a*r+l)),m=f>0?-r:Math.min(Math.max(-r,-c),r),g=-f*f+m*(m+2*c)+h):m<=b?(f=0,m=Math.min(Math.max(-r,-c),r),g=m*(m+2*c)+h):(f=Math.max(0,-(a*r+l)),m=f>0?r:Math.min(Math.max(-r,-c),r),g=-f*f+m*(m+2*c)+h);else m=a>0?-r:r,f=Math.max(0,-(a*m+l)),g=-f*f+m*(m+2*c)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(Jl).addScaledVector($o,m),g}intersectSphere(e,t){mi.subVectors(e.center,this.origin);const n=mi.dot(this.direction),i=mi.dot(mi)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),l=n-a,c=n+a;return c<0?null:l<0?this.at(c,t):this.at(l,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,l,c;const h=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,m=this.origin;return h>=0?(n=(e.min.x-m.x)*h,i=(e.max.x-m.x)*h):(n=(e.max.x-m.x)*h,i=(e.min.x-m.x)*h),d>=0?(r=(e.min.y-m.y)*d,a=(e.max.y-m.y)*d):(r=(e.max.y-m.y)*d,a=(e.min.y-m.y)*d),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),f>=0?(l=(e.min.z-m.z)*f,c=(e.max.z-m.z)*f):(l=(e.max.z-m.z)*f,c=(e.min.z-m.z)*f),n>c||l>i)||((l>n||n!==n)&&(n=l),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,mi)!==null}intersectTriangle(e,t,n,i,r){ec.subVectors(t,e),Zo.subVectors(n,e),tc.crossVectors(ec,Zo);let a=this.direction.dot(tc),l;if(a>0){if(i)return null;l=1}else if(a<0)l=-1,a=-a;else return null;ki.subVectors(this.origin,e);const c=l*this.direction.dot(Zo.crossVectors(ki,Zo));if(c<0)return null;const h=l*this.direction.dot(ec.cross(ki));if(h<0||c+h>a)return null;const d=-l*ki.dot(tc);return d<0?null:this.at(d/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class He{constructor(e,t,n,i,r,a,l,c,h,d,f,m,g,b,M,x){He.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,l,c,h,d,f,m,g,b,M,x)}set(e,t,n,i,r,a,l,c,h,d,f,m,g,b,M,x){const v=this.elements;return v[0]=e,v[4]=t,v[8]=n,v[12]=i,v[1]=r,v[5]=a,v[9]=l,v[13]=c,v[2]=h,v[6]=d,v[10]=f,v[14]=m,v[3]=g,v[7]=b,v[11]=M,v[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new He().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Hs.setFromMatrixColumn(e,0).length(),r=1/Hs.setFromMatrixColumn(e,1).length(),a=1/Hs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),l=Math.sin(n),c=Math.cos(i),h=Math.sin(i),d=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const m=a*d,g=a*f,b=l*d,M=l*f;t[0]=c*d,t[4]=-c*f,t[8]=h,t[1]=g+b*h,t[5]=m-M*h,t[9]=-l*c,t[2]=M-m*h,t[6]=b+g*h,t[10]=a*c}else if(e.order==="YXZ"){const m=c*d,g=c*f,b=h*d,M=h*f;t[0]=m+M*l,t[4]=b*l-g,t[8]=a*h,t[1]=a*f,t[5]=a*d,t[9]=-l,t[2]=g*l-b,t[6]=M+m*l,t[10]=a*c}else if(e.order==="ZXY"){const m=c*d,g=c*f,b=h*d,M=h*f;t[0]=m-M*l,t[4]=-a*f,t[8]=b+g*l,t[1]=g+b*l,t[5]=a*d,t[9]=M-m*l,t[2]=-a*h,t[6]=l,t[10]=a*c}else if(e.order==="ZYX"){const m=a*d,g=a*f,b=l*d,M=l*f;t[0]=c*d,t[4]=b*h-g,t[8]=m*h+M,t[1]=c*f,t[5]=M*h+m,t[9]=g*h-b,t[2]=-h,t[6]=l*c,t[10]=a*c}else if(e.order==="YZX"){const m=a*c,g=a*h,b=l*c,M=l*h;t[0]=c*d,t[4]=M-m*f,t[8]=b*f+g,t[1]=f,t[5]=a*d,t[9]=-l*d,t[2]=-h*d,t[6]=g*f+b,t[10]=m-M*f}else if(e.order==="XZY"){const m=a*c,g=a*h,b=l*c,M=l*h;t[0]=c*d,t[4]=-f,t[8]=h*d,t[1]=m*f+M,t[5]=a*d,t[9]=g*f-b,t[2]=b*f-g,t[6]=l*d,t[10]=M*f+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(bx,e,yx)}lookAt(e,t,n){const i=this.elements;return Mn.subVectors(e,t),Mn.lengthSq()===0&&(Mn.z=1),Mn.normalize(),Vi.crossVectors(n,Mn),Vi.lengthSq()===0&&(Math.abs(n.z)===1?Mn.x+=1e-4:Mn.z+=1e-4,Mn.normalize(),Vi.crossVectors(n,Mn)),Vi.normalize(),Qo.crossVectors(Mn,Vi),i[0]=Vi.x,i[4]=Qo.x,i[8]=Mn.x,i[1]=Vi.y,i[5]=Qo.y,i[9]=Mn.y,i[2]=Vi.z,i[6]=Qo.z,i[10]=Mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],l=n[4],c=n[8],h=n[12],d=n[1],f=n[5],m=n[9],g=n[13],b=n[2],M=n[6],x=n[10],v=n[14],w=n[3],y=n[7],S=n[11],C=n[15],P=i[0],A=i[4],I=i[8],B=i[12],E=i[1],R=i[5],k=i[9],W=i[13],U=i[2],G=i[6],H=i[10],X=i[14],J=i[3],$=i[7],ie=i[11],ne=i[15];return r[0]=a*P+l*E+c*U+h*J,r[4]=a*A+l*R+c*G+h*$,r[8]=a*I+l*k+c*H+h*ie,r[12]=a*B+l*W+c*X+h*ne,r[1]=d*P+f*E+m*U+g*J,r[5]=d*A+f*R+m*G+g*$,r[9]=d*I+f*k+m*H+g*ie,r[13]=d*B+f*W+m*X+g*ne,r[2]=b*P+M*E+x*U+v*J,r[6]=b*A+M*R+x*G+v*$,r[10]=b*I+M*k+x*H+v*ie,r[14]=b*B+M*W+x*X+v*ne,r[3]=w*P+y*E+S*U+C*J,r[7]=w*A+y*R+S*G+C*$,r[11]=w*I+y*k+S*H+C*ie,r[15]=w*B+y*W+S*X+C*ne,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],l=e[5],c=e[9],h=e[13],d=e[2],f=e[6],m=e[10],g=e[14],b=e[3],M=e[7],x=e[11],v=e[15];return b*(+r*c*f-i*h*f-r*l*m+n*h*m+i*l*g-n*c*g)+M*(+t*c*g-t*h*m+r*a*m-i*a*g+i*h*d-r*c*d)+x*(+t*h*f-t*l*g-r*a*f+n*a*g+r*l*d-n*h*d)+v*(-i*l*d-t*c*f+t*l*m+i*a*f-n*a*m+n*c*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],l=e[5],c=e[6],h=e[7],d=e[8],f=e[9],m=e[10],g=e[11],b=e[12],M=e[13],x=e[14],v=e[15],w=f*x*h-M*m*h+M*c*g-l*x*g-f*c*v+l*m*v,y=b*m*h-d*x*h-b*c*g+a*x*g+d*c*v-a*m*v,S=d*M*h-b*f*h+b*l*g-a*M*g-d*l*v+a*f*v,C=b*f*c-d*M*c-b*l*m+a*M*m+d*l*x-a*f*x,P=t*w+n*y+i*S+r*C;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/P;return e[0]=w*A,e[1]=(M*m*r-f*x*r-M*i*g+n*x*g+f*i*v-n*m*v)*A,e[2]=(l*x*r-M*c*r+M*i*h-n*x*h-l*i*v+n*c*v)*A,e[3]=(f*c*r-l*m*r-f*i*h+n*m*h+l*i*g-n*c*g)*A,e[4]=y*A,e[5]=(d*x*r-b*m*r+b*i*g-t*x*g-d*i*v+t*m*v)*A,e[6]=(b*c*r-a*x*r-b*i*h+t*x*h+a*i*v-t*c*v)*A,e[7]=(a*m*r-d*c*r+d*i*h-t*m*h-a*i*g+t*c*g)*A,e[8]=S*A,e[9]=(b*f*r-d*M*r-b*n*g+t*M*g+d*n*v-t*f*v)*A,e[10]=(a*M*r-b*l*r+b*n*h-t*M*h-a*n*v+t*l*v)*A,e[11]=(d*l*r-a*f*r-d*n*h+t*f*h+a*n*g-t*l*g)*A,e[12]=C*A,e[13]=(d*M*i-b*f*i+b*n*m-t*M*m-d*n*x+t*f*x)*A,e[14]=(b*l*i-a*M*i-b*n*c+t*M*c+a*n*x-t*l*x)*A,e[15]=(a*f*i-d*l*i+d*n*c-t*f*c-a*n*m+t*l*m)*A,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,l=e.y,c=e.z,h=r*a,d=r*l;return this.set(h*a+n,h*l-i*c,h*c+i*l,0,h*l+i*c,d*l+n,d*c-i*a,0,h*c-i*l,d*c+i*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,l=t._z,c=t._w,h=r+r,d=a+a,f=l+l,m=r*h,g=r*d,b=r*f,M=a*d,x=a*f,v=l*f,w=c*h,y=c*d,S=c*f,C=n.x,P=n.y,A=n.z;return i[0]=(1-(M+v))*C,i[1]=(g+S)*C,i[2]=(b-y)*C,i[3]=0,i[4]=(g-S)*P,i[5]=(1-(m+v))*P,i[6]=(x+w)*P,i[7]=0,i[8]=(b+y)*A,i[9]=(x-w)*A,i[10]=(1-(m+M))*A,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Hs.set(i[0],i[1],i[2]).length();const a=Hs.set(i[4],i[5],i[6]).length(),l=Hs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],zn.copy(this);const h=1/r,d=1/a,f=1/l;return zn.elements[0]*=h,zn.elements[1]*=h,zn.elements[2]*=h,zn.elements[4]*=d,zn.elements[5]*=d,zn.elements[6]*=d,zn.elements[8]*=f,zn.elements[9]*=f,zn.elements[10]*=f,t.setFromRotationMatrix(zn),n.x=r,n.y=a,n.z=l,this}makePerspective(e,t,n,i,r,a,l=Si){const c=this.elements,h=2*r/(t-e),d=2*r/(n-i),f=(t+e)/(t-e),m=(n+i)/(n-i);let g,b;if(l===Si)g=-(a+r)/(a-r),b=-2*a*r/(a-r);else if(l===Qa)g=-a/(a-r),b=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=b,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,a,l=Si){const c=this.elements,h=1/(t-e),d=1/(n-i),f=1/(a-r),m=(t+e)*h,g=(n+i)*d;let b,M;if(l===Si)b=(a+r)*f,M=-2*f;else if(l===Qa)b=r*f,M=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return c[0]=2*h,c[4]=0,c[8]=0,c[12]=-m,c[1]=0,c[5]=2*d,c[9]=0,c[13]=-g,c[2]=0,c[6]=0,c[10]=M,c[14]=-b,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Hs=new D,zn=new He,bx=new D(0,0,0),yx=new D(1,1,1),Vi=new D,Qo=new D,Mn=new D,Vd=new He,zd=new Gt;class Io{constructor(e=0,t=0,n=0,i=Io.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],l=i[8],c=i[1],h=i[5],d=i[9],f=i[2],m=i[6],g=i[10];switch(t){case"XYZ":this._y=Math.asin(Kt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,g),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(m,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Kt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(l,g),this._z=Math.atan2(c,h)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Kt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-f,g),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Kt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(m,g),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(Kt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,h),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(l,g));break;case"XZY":this._z=Math.asin(-Kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(m,h),this._y=Math.atan2(l,r)):(this._x=Math.atan2(-d,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Vd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Vd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return zd.setFromEuler(this),this.setFromQuaternion(zd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Io.DEFAULT_ORDER="XYZ";class Tu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let wx=0;const Hd=new D,Gs=new Gt,gi=new He,Jo=new D,to=new D,Mx=new D,Ex=new Gt,Gd=new D(1,0,0),Wd=new D(0,1,0),Xd=new D(0,0,1),Sx={type:"added"},Tx={type:"removed"};class mt extends Ts{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wx++}),this.uuid=jn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=mt.DEFAULT_UP.clone();const e=new D,t=new Io,n=new Gt,i=new D(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new He},normalMatrix:{value:new it}}),this.matrix=new He,this.matrixWorld=new He,this.matrixAutoUpdate=mt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Tu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Gs.setFromAxisAngle(e,t),this.quaternion.multiply(Gs),this}rotateOnWorldAxis(e,t){return Gs.setFromAxisAngle(e,t),this.quaternion.premultiply(Gs),this}rotateX(e){return this.rotateOnAxis(Gd,e)}rotateY(e){return this.rotateOnAxis(Wd,e)}rotateZ(e){return this.rotateOnAxis(Xd,e)}translateOnAxis(e,t){return Hd.copy(e).applyQuaternion(this.quaternion),this.position.add(Hd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Gd,e)}translateY(e){return this.translateOnAxis(Wd,e)}translateZ(e){return this.translateOnAxis(Xd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(gi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Jo.copy(e):Jo.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),to.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gi.lookAt(to,Jo,this.up):gi.lookAt(Jo,to,this.up),this.quaternion.setFromRotationMatrix(gi),i&&(gi.extractRotation(i.matrixWorld),Gs.setFromRotationMatrix(gi),this.quaternion.premultiply(Gs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Sx)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Tx)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),gi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),gi.multiply(e.parent.matrixWorld)),e.applyMatrix4(gi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(to,e,Mx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(to,Ex,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++){const l=i[r];l.matrixWorldAutoUpdate===!0&&l.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(l=>({boxInitialized:l.boxInitialized,boxMin:l.box.min.toArray(),boxMax:l.box.max.toArray(),sphereInitialized:l.sphereInitialized,sphereRadius:l.sphere.radius,sphereCenter:l.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(l,c){return l[c.uuid]===void 0&&(l[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const c=l.shapes;if(Array.isArray(c))for(let h=0,d=c.length;h<d;h++){const f=c[h];r(e.shapes,f)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let c=0,h=this.material.length;c<h;c++)l.push(r(e.materials,this.material[c]));i.material=l}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let l=0;l<this.children.length;l++)i.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let l=0;l<this.animations.length;l++){const c=this.animations[l];i.animations.push(r(e.animations,c))}}if(t){const l=a(e.geometries),c=a(e.materials),h=a(e.textures),d=a(e.images),f=a(e.shapes),m=a(e.skeletons),g=a(e.animations),b=a(e.nodes);l.length>0&&(n.geometries=l),c.length>0&&(n.materials=c),h.length>0&&(n.textures=h),d.length>0&&(n.images=d),f.length>0&&(n.shapes=f),m.length>0&&(n.skeletons=m),g.length>0&&(n.animations=g),b.length>0&&(n.nodes=b)}return n.object=i,n;function a(l){const c=[];for(const h in l){const d=l[h];delete d.metadata,c.push(d)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}mt.DEFAULT_UP=new D(0,1,0);mt.DEFAULT_MATRIX_AUTO_UPDATE=!0;mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Hn=new D,vi=new D,nc=new D,_i=new D,Ws=new D,Xs=new D,jd=new D,ic=new D,sc=new D,rc=new D;class gn{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Hn.subVectors(e,t),i.cross(Hn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Hn.subVectors(i,t),vi.subVectors(n,t),nc.subVectors(e,t);const a=Hn.dot(Hn),l=Hn.dot(vi),c=Hn.dot(nc),h=vi.dot(vi),d=vi.dot(nc),f=a*h-l*l;if(f===0)return r.set(0,0,0),null;const m=1/f,g=(h*c-l*d)*m,b=(a*d-l*c)*m;return r.set(1-g-b,b,g)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,_i)===null?!1:_i.x>=0&&_i.y>=0&&_i.x+_i.y<=1}static getInterpolation(e,t,n,i,r,a,l,c){return this.getBarycoord(e,t,n,i,_i)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,_i.x),c.addScaledVector(a,_i.y),c.addScaledVector(l,_i.z),c)}static isFrontFacing(e,t,n,i){return Hn.subVectors(n,t),vi.subVectors(e,t),Hn.cross(vi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Hn.subVectors(this.c,this.b),vi.subVectors(this.a,this.b),Hn.cross(vi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return gn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return gn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return gn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return gn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return gn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,l;Ws.subVectors(i,n),Xs.subVectors(r,n),ic.subVectors(e,n);const c=Ws.dot(ic),h=Xs.dot(ic);if(c<=0&&h<=0)return t.copy(n);sc.subVectors(e,i);const d=Ws.dot(sc),f=Xs.dot(sc);if(d>=0&&f<=d)return t.copy(i);const m=c*f-d*h;if(m<=0&&c>=0&&d<=0)return a=c/(c-d),t.copy(n).addScaledVector(Ws,a);rc.subVectors(e,r);const g=Ws.dot(rc),b=Xs.dot(rc);if(b>=0&&g<=b)return t.copy(r);const M=g*h-c*b;if(M<=0&&h>=0&&b<=0)return l=h/(h-b),t.copy(n).addScaledVector(Xs,l);const x=d*b-g*f;if(x<=0&&f-d>=0&&g-b>=0)return jd.subVectors(r,i),l=(f-d)/(f-d+(g-b)),t.copy(i).addScaledVector(jd,l);const v=1/(x+M+m);return a=M*v,l=m*v,t.copy(n).addScaledVector(Ws,a).addScaledVector(Xs,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const cm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zi={h:0,s:0,l:0},ea={h:0,s:0,l:0};function oc(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Ve{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ft){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,pt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=pt.workingColorSpace){return this.r=e,this.g=t,this.b=n,pt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=pt.workingColorSpace){if(e=Su(e,1),t=Kt(t,0,1),n=Kt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=oc(a,r,e+1/3),this.g=oc(a,r,e),this.b=oc(a,r,e-1/3)}return pt.toWorkingColorSpace(this,i),this}setStyle(e,t=Ft){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],l=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ft){const n=cm[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xr(e.r),this.g=xr(e.g),this.b=xr(e.b),this}copyLinearToSRGB(e){return this.r=Yl(e.r),this.g=Yl(e.g),this.b=Yl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ft){return pt.fromWorkingColorSpace(ln.copy(this),e),Math.round(Kt(ln.r*255,0,255))*65536+Math.round(Kt(ln.g*255,0,255))*256+Math.round(Kt(ln.b*255,0,255))}getHexString(e=Ft){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=pt.workingColorSpace){pt.fromWorkingColorSpace(ln.copy(this),t);const n=ln.r,i=ln.g,r=ln.b,a=Math.max(n,i,r),l=Math.min(n,i,r);let c,h;const d=(l+a)/2;if(l===a)c=0,h=0;else{const f=a-l;switch(h=d<=.5?f/(a+l):f/(2-a-l),a){case n:c=(i-r)/f+(i<r?6:0);break;case i:c=(r-n)/f+2;break;case r:c=(n-i)/f+4;break}c/=6}return e.h=c,e.s=h,e.l=d,e}getRGB(e,t=pt.workingColorSpace){return pt.fromWorkingColorSpace(ln.copy(this),t),e.r=ln.r,e.g=ln.g,e.b=ln.b,e}getStyle(e=Ft){pt.fromWorkingColorSpace(ln.copy(this),e);const t=ln.r,n=ln.g,i=ln.b;return e!==Ft?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(zi),this.setHSL(zi.h+e,zi.s+t,zi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(zi),e.getHSL(ea);const n=Eo(zi.h,ea.h,t),i=Eo(zi.s,ea.s,t),r=Eo(zi.l,ea.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ln=new Ve;Ve.NAMES=cm;let Ax=0;class ii extends Ts{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ax++}),this.uuid=jn(),this.name="",this.type="Material",this.blending=_r,this.side=qn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Hc,this.blendDst=Gc,this.blendEquation=ms,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ve(0,0,0),this.blendAlpha=0,this.depthFunc=ja,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Nd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Os,this.stencilZFail=Os,this.stencilZPass=Os,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==_r&&(n.blending=this.blending),this.side!==qn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Hc&&(n.blendSrc=this.blendSrc),this.blendDst!==Gc&&(n.blendDst=this.blendDst),this.blendEquation!==ms&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ja&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Nd&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Os&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Os&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Os&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const l in r){const c=r[l];delete c.metadata,a.push(c)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ti extends ii{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=jf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Mi=Cx();function Cx(){const s=new ArrayBuffer(4),e=new Float32Array(s),t=new Uint32Array(s),n=new Uint32Array(512),i=new Uint32Array(512);for(let c=0;c<256;++c){const h=c-127;h<-27?(n[c]=0,n[c|256]=32768,i[c]=24,i[c|256]=24):h<-14?(n[c]=1024>>-h-14,n[c|256]=1024>>-h-14|32768,i[c]=-h-1,i[c|256]=-h-1):h<=15?(n[c]=h+15<<10,n[c|256]=h+15<<10|32768,i[c]=13,i[c|256]=13):h<128?(n[c]=31744,n[c|256]=64512,i[c]=24,i[c|256]=24):(n[c]=31744,n[c|256]=64512,i[c]=13,i[c|256]=13)}const r=new Uint32Array(2048),a=new Uint32Array(64),l=new Uint32Array(64);for(let c=1;c<1024;++c){let h=c<<13,d=0;for(;(h&8388608)===0;)h<<=1,d-=8388608;h&=-8388609,d+=947912704,r[c]=h|d}for(let c=1024;c<2048;++c)r[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)a[c]=c<<23;a[31]=1199570944,a[32]=2147483648;for(let c=33;c<63;++c)a[c]=2147483648+(c-32<<23);a[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(l[c]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:r,exponentTable:a,offsetTable:l}}function Px(s){Math.abs(s)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),s=Kt(s,-65504,65504),Mi.floatView[0]=s;const e=Mi.uint32View[0],t=e>>23&511;return Mi.baseTable[t]+((e&8388607)>>Mi.shiftTable[t])}function Rx(s){const e=s>>10;return Mi.uint32View[0]=Mi.mantissaTable[Mi.offsetTable[e]+(s&1023)]+Mi.exponentTable[e],Mi.floatView[0]}const Lx={toHalfFloat:Px,fromHalfFloat:Rx},zt=new D,ta=new Ae;class Ct{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Kc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ft,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Ms("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ta.fromBufferAttribute(this,t),ta.applyMatrix3(e),this.setXY(t,ta.x,ta.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix3(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix4(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyNormalMatrix(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.transformDirection(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Xn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=gt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Xn(t,this.array)),t}setX(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Xn(t,this.array)),t}setY(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Xn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Xn(t,this.array)),t}setW(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),i=gt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),i=gt(i,this.array),r=gt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Kc&&(e.usage=this.usage),e}}class um extends Ct{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class hm extends Ct{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class wt extends Ct{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Ix=0;const Dn=new He,ac=new mt,js=new D,En=new Vt,no=new Vt,Jt=new D;class tn extends Ts{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ix++}),this.uuid=jn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(rm(e)?hm:um)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new it().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Dn.makeRotationFromQuaternion(e),this.applyMatrix4(Dn),this}rotateX(e){return Dn.makeRotationX(e),this.applyMatrix4(Dn),this}rotateY(e){return Dn.makeRotationY(e),this.applyMatrix4(Dn),this}rotateZ(e){return Dn.makeRotationZ(e),this.applyMatrix4(Dn),this}translate(e,t,n){return Dn.makeTranslation(e,t,n),this.applyMatrix4(Dn),this}scale(e,t,n){return Dn.makeScale(e,t,n),this.applyMatrix4(Dn),this}lookAt(e){return ac.lookAt(e),ac.updateMatrix(),this.applyMatrix4(ac.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(js).negate(),this.translate(js.x,js.y,js.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new wt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];En.setFromBufferAttribute(r),this.morphTargetsRelative?(Jt.addVectors(this.boundingBox.min,En.min),this.boundingBox.expandByPoint(Jt),Jt.addVectors(this.boundingBox.max,En.max),this.boundingBox.expandByPoint(Jt)):(this.boundingBox.expandByPoint(En.min),this.boundingBox.expandByPoint(En.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $n);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new D,1/0);return}if(e){const n=this.boundingSphere.center;if(En.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const l=t[r];no.setFromBufferAttribute(l),this.morphTargetsRelative?(Jt.addVectors(En.min,no.min),En.expandByPoint(Jt),Jt.addVectors(En.max,no.max),En.expandByPoint(Jt)):(En.expandByPoint(no.min),En.expandByPoint(no.max))}En.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)Jt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Jt));if(t)for(let r=0,a=t.length;r<a;r++){const l=t[r],c=this.morphTargetsRelative;for(let h=0,d=l.count;h<d;h++)Jt.fromBufferAttribute(l,h),c&&(js.fromBufferAttribute(e,h),Jt.add(js)),i=Math.max(i,n.distanceToSquared(Jt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,a=t.uv.array,l=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ct(new Float32Array(4*l),4));const c=this.getAttribute("tangent").array,h=[],d=[];for(let E=0;E<l;E++)h[E]=new D,d[E]=new D;const f=new D,m=new D,g=new D,b=new Ae,M=new Ae,x=new Ae,v=new D,w=new D;function y(E,R,k){f.fromArray(i,E*3),m.fromArray(i,R*3),g.fromArray(i,k*3),b.fromArray(a,E*2),M.fromArray(a,R*2),x.fromArray(a,k*2),m.sub(f),g.sub(f),M.sub(b),x.sub(b);const W=1/(M.x*x.y-x.x*M.y);!isFinite(W)||(v.copy(m).multiplyScalar(x.y).addScaledVector(g,-M.y).multiplyScalar(W),w.copy(g).multiplyScalar(M.x).addScaledVector(m,-x.x).multiplyScalar(W),h[E].add(v),h[R].add(v),h[k].add(v),d[E].add(w),d[R].add(w),d[k].add(w))}let S=this.groups;S.length===0&&(S=[{start:0,count:n.length}]);for(let E=0,R=S.length;E<R;++E){const k=S[E],W=k.start,U=k.count;for(let G=W,H=W+U;G<H;G+=3)y(n[G+0],n[G+1],n[G+2])}const C=new D,P=new D,A=new D,I=new D;function B(E){A.fromArray(r,E*3),I.copy(A);const R=h[E];C.copy(R),C.sub(A.multiplyScalar(A.dot(R))).normalize(),P.crossVectors(I,R);const W=P.dot(d[E])<0?-1:1;c[E*4]=C.x,c[E*4+1]=C.y,c[E*4+2]=C.z,c[E*4+3]=W}for(let E=0,R=S.length;E<R;++E){const k=S[E],W=k.start,U=k.count;for(let G=W,H=W+U;G<H;G+=3)B(n[G+0]),B(n[G+1]),B(n[G+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ct(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let m=0,g=n.count;m<g;m++)n.setXYZ(m,0,0,0);const i=new D,r=new D,a=new D,l=new D,c=new D,h=new D,d=new D,f=new D;if(e)for(let m=0,g=e.count;m<g;m+=3){const b=e.getX(m+0),M=e.getX(m+1),x=e.getX(m+2);i.fromBufferAttribute(t,b),r.fromBufferAttribute(t,M),a.fromBufferAttribute(t,x),d.subVectors(a,r),f.subVectors(i,r),d.cross(f),l.fromBufferAttribute(n,b),c.fromBufferAttribute(n,M),h.fromBufferAttribute(n,x),l.add(d),c.add(d),h.add(d),n.setXYZ(b,l.x,l.y,l.z),n.setXYZ(M,c.x,c.y,c.z),n.setXYZ(x,h.x,h.y,h.z)}else for(let m=0,g=t.count;m<g;m+=3)i.fromBufferAttribute(t,m+0),r.fromBufferAttribute(t,m+1),a.fromBufferAttribute(t,m+2),d.subVectors(a,r),f.subVectors(i,r),d.cross(f),n.setXYZ(m+0,d.x,d.y,d.z),n.setXYZ(m+1,d.x,d.y,d.z),n.setXYZ(m+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Jt.fromBufferAttribute(e,t),Jt.normalize(),e.setXYZ(t,Jt.x,Jt.y,Jt.z)}toNonIndexed(){function e(l,c){const h=l.array,d=l.itemSize,f=l.normalized,m=new h.constructor(c.length*d);let g=0,b=0;for(let M=0,x=c.length;M<x;M++){l.isInterleavedBufferAttribute?g=c[M]*l.data.stride+l.offset:g=c[M]*d;for(let v=0;v<d;v++)m[b++]=h[g++]}return new Ct(m,d,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new tn,n=this.index.array,i=this.attributes;for(const l in i){const c=i[l],h=e(c,n);t.setAttribute(l,h)}const r=this.morphAttributes;for(const l in r){const c=[],h=r[l];for(let d=0,f=h.length;d<f;d++){const m=h[d],g=e(m,n);c.push(g)}t.morphAttributes[l]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let l=0,c=a.length;l<c;l++){const h=a[l];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const h in c)c[h]!==void 0&&(e[h]=c[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const h=n[c];e.data.attributes[c]=h.toJSON(e.data)}const i={};let r=!1;for(const c in this.morphAttributes){const h=this.morphAttributes[c],d=[];for(let f=0,m=h.length;f<m;f++){const g=h[f];d.push(g.toJSON(e.data))}d.length>0&&(i[c]=d,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const l=this.boundingSphere;return l!==null&&(e.data.boundingSphere={center:l.center.toArray(),radius:l.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const h in i){const d=i[h];this.setAttribute(h,d.clone(t))}const r=e.morphAttributes;for(const h in r){const d=[],f=r[h];for(let m=0,g=f.length;m<g;m++)d.push(f[m].clone(t));this.morphAttributes[h]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let h=0,d=a.length;h<d;h++){const f=a[h];this.addGroup(f.start,f.count,f.materialIndex)}const l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const qd=new He,ls=new Lr,na=new $n,Yd=new D,qs=new D,Ys=new D,Ks=new D,lc=new D,ia=new D,sa=new Ae,ra=new Ae,oa=new Ae,Kd=new D,$d=new D,Zd=new D,aa=new D,la=new D;class fe extends mt{constructor(e=new tn,t=new ti){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const l=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const l=this.morphTargetInfluences;if(r&&l){ia.set(0,0,0);for(let c=0,h=r.length;c<h;c++){const d=l[c],f=r[c];d!==0&&(lc.fromBufferAttribute(f,e),a?ia.addScaledVector(lc,d):ia.addScaledVector(lc.sub(t),d))}t.add(ia)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),na.copy(n.boundingSphere),na.applyMatrix4(r),ls.copy(e.ray).recast(e.near),!(na.containsPoint(ls.origin)===!1&&(ls.intersectSphere(na,Yd)===null||ls.origin.distanceToSquared(Yd)>(e.far-e.near)**2))&&(qd.copy(r).invert(),ls.copy(e.ray).applyMatrix4(qd),!(n.boundingBox!==null&&ls.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ls)))}_computeIntersections(e,t,n){let i;const r=this.geometry,a=this.material,l=r.index,c=r.attributes.position,h=r.attributes.uv,d=r.attributes.uv1,f=r.attributes.normal,m=r.groups,g=r.drawRange;if(l!==null)if(Array.isArray(a))for(let b=0,M=m.length;b<M;b++){const x=m[b],v=a[x.materialIndex],w=Math.max(x.start,g.start),y=Math.min(l.count,Math.min(x.start+x.count,g.start+g.count));for(let S=w,C=y;S<C;S+=3){const P=l.getX(S),A=l.getX(S+1),I=l.getX(S+2);i=ca(this,v,e,n,h,d,f,P,A,I),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=x.materialIndex,t.push(i))}}else{const b=Math.max(0,g.start),M=Math.min(l.count,g.start+g.count);for(let x=b,v=M;x<v;x+=3){const w=l.getX(x),y=l.getX(x+1),S=l.getX(x+2);i=ca(this,a,e,n,h,d,f,w,y,S),i&&(i.faceIndex=Math.floor(x/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let b=0,M=m.length;b<M;b++){const x=m[b],v=a[x.materialIndex],w=Math.max(x.start,g.start),y=Math.min(c.count,Math.min(x.start+x.count,g.start+g.count));for(let S=w,C=y;S<C;S+=3){const P=S,A=S+1,I=S+2;i=ca(this,v,e,n,h,d,f,P,A,I),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=x.materialIndex,t.push(i))}}else{const b=Math.max(0,g.start),M=Math.min(c.count,g.start+g.count);for(let x=b,v=M;x<v;x+=3){const w=x,y=x+1,S=x+2;i=ca(this,a,e,n,h,d,f,w,y,S),i&&(i.faceIndex=Math.floor(x/3),t.push(i))}}}}function Dx(s,e,t,n,i,r,a,l){let c;if(e.side===xn?c=n.intersectTriangle(a,r,i,!0,l):c=n.intersectTriangle(i,r,a,e.side===qn,l),c===null)return null;la.copy(l),la.applyMatrix4(s.matrixWorld);const h=t.ray.origin.distanceTo(la);return h<t.near||h>t.far?null:{distance:h,point:la.clone(),object:s}}function ca(s,e,t,n,i,r,a,l,c,h){s.getVertexPosition(l,qs),s.getVertexPosition(c,Ys),s.getVertexPosition(h,Ks);const d=Dx(s,e,t,n,qs,Ys,Ks,aa);if(d){i&&(sa.fromBufferAttribute(i,l),ra.fromBufferAttribute(i,c),oa.fromBufferAttribute(i,h),d.uv=gn.getInterpolation(aa,qs,Ys,Ks,sa,ra,oa,new Ae)),r&&(sa.fromBufferAttribute(r,l),ra.fromBufferAttribute(r,c),oa.fromBufferAttribute(r,h),d.uv1=gn.getInterpolation(aa,qs,Ys,Ks,sa,ra,oa,new Ae),d.uv2=d.uv1),a&&(Kd.fromBufferAttribute(a,l),$d.fromBufferAttribute(a,c),Zd.fromBufferAttribute(a,h),d.normal=gn.getInterpolation(aa,qs,Ys,Ks,Kd,$d,Zd,new D),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const f={a:l,b:c,c:h,normal:new D,materialIndex:0};gn.getNormal(qs,Ys,Ks,f.normal),d.face=f}return d}class xt extends tn{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const l=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const c=[],h=[],d=[],f=[];let m=0,g=0;b("z","y","x",-1,-1,n,t,e,a,r,0),b("z","y","x",1,-1,n,t,-e,a,r,1),b("x","z","y",1,1,e,n,t,i,a,2),b("x","z","y",1,-1,e,n,-t,i,a,3),b("x","y","z",1,-1,e,t,n,i,r,4),b("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new wt(h,3)),this.setAttribute("normal",new wt(d,3)),this.setAttribute("uv",new wt(f,2));function b(M,x,v,w,y,S,C,P,A,I,B){const E=S/A,R=C/I,k=S/2,W=C/2,U=P/2,G=A+1,H=I+1;let X=0,J=0;const $=new D;for(let ie=0;ie<H;ie++){const ne=ie*R-W;for(let me=0;me<G;me++){const pe=me*E-k;$[M]=pe*w,$[x]=ne*y,$[v]=U,h.push($.x,$.y,$.z),$[M]=0,$[x]=0,$[v]=P>0?1:-1,d.push($.x,$.y,$.z),f.push(me/A),f.push(1-ie/I),X+=1}}for(let ie=0;ie<I;ie++)for(let ne=0;ne<A;ne++){const me=m+ne+G*ie,pe=m+ne+G*(ie+1),K=m+(ne+1)+G*(ie+1),se=m+(ne+1)+G*ie;c.push(me,pe,se),c.push(pe,K,se),J+=6}l.addGroup(g,J,B),g+=J,m+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ar(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function pn(s){const e={};for(let t=0;t<s.length;t++){const n=Ar(s[t]);for(const i in n)e[i]=n[i]}return e}function Nx(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function dm(s){return s.getRenderTarget()===null?s.outputColorSpace:pt.workingColorSpace}const Ux={clone:Ar,merge:pn};var Fx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ox=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class nn extends ii{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Fx,this.fragmentShader=Ox,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ar(e.uniforms),this.uniformsGroups=Nx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class pm extends mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new He,this.projectionMatrix=new He,this.projectionMatrixInverse=new He,this.coordinateSystem=Si}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Hi=new D,Qd=new Ae,Jd=new Ae;class fn extends pm{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Tr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Mo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Tr*2*Math.atan(Math.tan(Mo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Hi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Hi.x,Hi.y).multiplyScalar(-e/Hi.z),Hi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Hi.x,Hi.y).multiplyScalar(-e/Hi.z)}getViewSize(e,t){return this.getViewBounds(e,Qd,Jd),t.subVectors(Jd,Qd)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Mo*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,h=a.fullHeight;r+=a.offsetX*i/c,t-=a.offsetY*n/h,i*=a.width/c,n*=a.height/h}const l=this.filmOffset;l!==0&&(r+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const $s=-90,Zs=1;class Bx extends mt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new fn($s,Zs,e,t);i.layers=this.layers,this.add(i);const r=new fn($s,Zs,e,t);r.layers=this.layers,this.add(r);const a=new fn($s,Zs,e,t);a.layers=this.layers,this.add(a);const l=new fn($s,Zs,e,t);l.layers=this.layers,this.add(l);const c=new fn($s,Zs,e,t);c.layers=this.layers,this.add(c);const h=new fn($s,Zs,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,l,c]=t;for(const h of t)this.remove(h);if(e===Si)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Qa)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,l,c,h,d]=this.children,f=e.getRenderTarget(),m=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,l),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,h),n.texture.generateMipmaps=M,e.setRenderTarget(n,5,i),e.render(t,d),e.setRenderTarget(f,m,g),e.xr.enabled=b,n.texture.needsPMREMUpdate=!0}}class fm extends jt{constructor(e,t,n,i,r,a,l,c,h,d){e=e!==void 0?e:[],t=t!==void 0?t:yr,super(e,t,n,i,r,a,l,c,h,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class kx extends Pn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(Ms("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===ws?Ft:Un),this.texture=new fm(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Tt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new xt(5,5,5),r=new nn({name:"CubemapFromEquirect",uniforms:Ar(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:xn,blending:Bn});r.uniforms.tEquirect.value=t;const a=new fe(i,r),l=t.minFilter;return t.minFilter===Ei&&(t.minFilter=Tt),new Bx(1,10,this).update(e,a),t.minFilter=l,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}const cc=new D,Vx=new D,zx=new it;class Jn{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=cc.subVectors(n,t).cross(Vx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(cc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||zx.getNormalMatrix(e),i=this.coplanarPoint(cc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const cs=new $n,ua=new D;class Au{constructor(e=new Jn,t=new Jn,n=new Jn,i=new Jn,r=new Jn,a=new Jn){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(n),l[3].copy(i),l[4].copy(r),l[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Si){const n=this.planes,i=e.elements,r=i[0],a=i[1],l=i[2],c=i[3],h=i[4],d=i[5],f=i[6],m=i[7],g=i[8],b=i[9],M=i[10],x=i[11],v=i[12],w=i[13],y=i[14],S=i[15];if(n[0].setComponents(c-r,m-h,x-g,S-v).normalize(),n[1].setComponents(c+r,m+h,x+g,S+v).normalize(),n[2].setComponents(c+a,m+d,x+b,S+w).normalize(),n[3].setComponents(c-a,m-d,x-b,S-w).normalize(),n[4].setComponents(c-l,m-f,x-M,S-y).normalize(),t===Si)n[5].setComponents(c+l,m+f,x+M,S+y).normalize();else if(t===Qa)n[5].setComponents(l,f,M,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),cs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),cs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(cs)}intersectsSprite(e){return cs.center.set(0,0,0),cs.radius=.7071067811865476,cs.applyMatrix4(e.matrixWorld),this.intersectsSphere(cs)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(ua.x=i.normal.x>0?e.max.x:e.min.x,ua.y=i.normal.y>0?e.max.y:e.min.y,ua.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ua)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function mm(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Hx(s,e){const t=e.isWebGL2,n=new WeakMap;function i(h,d){const f=h.array,m=h.usage,g=f.byteLength,b=s.createBuffer();s.bindBuffer(d,b),s.bufferData(d,f,m),h.onUploadCallback();let M;if(f instanceof Float32Array)M=s.FLOAT;else if(f instanceof Uint16Array)if(h.isFloat16BufferAttribute)if(t)M=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else M=s.UNSIGNED_SHORT;else if(f instanceof Int16Array)M=s.SHORT;else if(f instanceof Uint32Array)M=s.UNSIGNED_INT;else if(f instanceof Int32Array)M=s.INT;else if(f instanceof Int8Array)M=s.BYTE;else if(f instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:b,type:M,bytesPerElement:f.BYTES_PER_ELEMENT,version:h.version,size:g}}function r(h,d,f){const m=d.array,g=d._updateRange,b=d.updateRanges;if(s.bindBuffer(f,h),g.count===-1&&b.length===0&&s.bufferSubData(f,0,m),b.length!==0){for(let M=0,x=b.length;M<x;M++){const v=b[M];t?s.bufferSubData(f,v.start*m.BYTES_PER_ELEMENT,m,v.start,v.count):s.bufferSubData(f,v.start*m.BYTES_PER_ELEMENT,m.subarray(v.start,v.start+v.count))}d.clearUpdateRanges()}g.count!==-1&&(t?s.bufferSubData(f,g.offset*m.BYTES_PER_ELEMENT,m,g.offset,g.count):s.bufferSubData(f,g.offset*m.BYTES_PER_ELEMENT,m.subarray(g.offset,g.offset+g.count)),g.count=-1),d.onUploadCallback()}function a(h){return h.isInterleavedBufferAttribute&&(h=h.data),n.get(h)}function l(h){h.isInterleavedBufferAttribute&&(h=h.data);const d=n.get(h);d&&(s.deleteBuffer(d.buffer),n.delete(h))}function c(h,d){if(h.isGLBufferAttribute){const m=n.get(h);(!m||m.version<h.version)&&n.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}h.isInterleavedBufferAttribute&&(h=h.data);const f=n.get(h);if(f===void 0)n.set(h,i(h,d));else if(f.version<h.version){if(f.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(f.buffer,h,d),f.version=h.version}}return{get:a,remove:l,update:c}}class kn extends tn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,l=Math.floor(n),c=Math.floor(i),h=l+1,d=c+1,f=e/l,m=t/c,g=[],b=[],M=[],x=[];for(let v=0;v<d;v++){const w=v*m-a;for(let y=0;y<h;y++){const S=y*f-r;b.push(S,-w,0),M.push(0,0,1),x.push(y/l),x.push(1-v/c)}}for(let v=0;v<c;v++)for(let w=0;w<l;w++){const y=w+h*v,S=w+h*(v+1),C=w+1+h*(v+1),P=w+1+h*v;g.push(y,S,P),g.push(S,C,P)}this.setIndex(g),this.setAttribute("position",new wt(b,3)),this.setAttribute("normal",new wt(M,3)),this.setAttribute("uv",new wt(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kn(e.width,e.height,e.widthSegments,e.heightSegments)}}var Gx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Wx=`#ifdef USE_ALPHAHASH
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
#endif`,Xx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Yx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Kx=`#ifdef USE_AOMAP
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
#endif`,$x=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Zx=`#ifdef USE_BATCHING
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
#endif`,Qx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Jx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,eb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,tb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,nb=`#ifdef USE_IRIDESCENCE
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
#endif`,ib=`#ifdef USE_BUMPMAP
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
#endif`,sb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,rb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ob=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ab=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,cb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ub=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,hb=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,db=`#define PI 3.141592653589793
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
} // validated`,pb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,fb=`vec3 transformedNormal = objectNormal;
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
#endif`,mb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_b=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xb="gl_FragColor = linearToOutputTexel( gl_FragColor );",bb=`
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
}`,yb=`#ifdef USE_ENVMAP
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
#endif`,wb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Mb=`#ifdef USE_ENVMAP
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
#endif`,Eb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Sb=`#ifdef USE_ENVMAP
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
#endif`,Tb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ab=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Cb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Pb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Rb=`#ifdef USE_GRADIENTMAP
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
}`,Lb=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Ib=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Db=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Nb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ub=`uniform bool receiveShadow;
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
#endif`,Fb=`#ifdef USE_ENVMAP
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
#endif`,Ob=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Bb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,kb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Vb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zb=`PhysicalMaterial material;
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
#endif`,Hb=`struct PhysicalMaterial {
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
}`,Gb=`
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
#endif`,Wb=`#if defined( RE_IndirectDiffuse )
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
#endif`,Xb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,jb=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qb=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yb=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Kb=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,$b=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Zb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Qb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Jb=`#if defined( USE_POINTS_UV )
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
#endif`,ey=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ty=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ny=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,iy=`#ifdef USE_MORPHNORMALS
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
#endif`,sy=`#ifdef USE_MORPHTARGETS
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
#endif`,ry=`#ifdef USE_MORPHTARGETS
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
#endif`,oy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ay=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ly=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,hy=`#ifdef USE_NORMALMAP
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
#endif`,dy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,py=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,fy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,my=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vy=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,_y=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,by=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,My=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ey=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Sy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ty=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ay=`float getShadowMask() {
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
}`,Cy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Py=`#ifdef USE_SKINNING
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
#endif`,Ry=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ly=`#ifdef USE_SKINNING
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
#endif`,Iy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Dy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ny=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Uy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Fy=`#ifdef USE_TRANSMISSION
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
#endif`,Oy=`#ifdef USE_TRANSMISSION
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
#endif`,By=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ky=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Hy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Gy=`uniform sampler2D t2D;
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
}`,Wy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xy=`#ifdef ENVMAP_TYPE_CUBE
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
}`,jy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yy=`#include <common>
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
}`,Ky=`#if DEPTH_PACKING == 3200
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
}`,$y=`#define DISTANCE
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
}`,Zy=`#define DISTANCE
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
}`,Qy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Jy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ew=`uniform float scale;
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
}`,tw=`uniform vec3 diffuse;
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
}`,nw=`#include <common>
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
}`,iw=`uniform vec3 diffuse;
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
}`,sw=`#define LAMBERT
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
}`,rw=`#define LAMBERT
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
}`,ow=`#define MATCAP
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
}`,aw=`#define MATCAP
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
}`,lw=`#define NORMAL
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
}`,cw=`#define NORMAL
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
}`,uw=`#define PHONG
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
}`,hw=`#define PHONG
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
}`,dw=`#define STANDARD
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
}`,pw=`#define STANDARD
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
}`,fw=`#define TOON
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
}`,mw=`#define TOON
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
}`,gw=`uniform float size;
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
}`,vw=`uniform vec3 diffuse;
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
}`,_w=`#include <common>
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
}`,xw=`uniform vec3 color;
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
}`,bw=`uniform float rotation;
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
}`,yw=`uniform vec3 diffuse;
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
}`,et={alphahash_fragment:Gx,alphahash_pars_fragment:Wx,alphamap_fragment:Xx,alphamap_pars_fragment:jx,alphatest_fragment:qx,alphatest_pars_fragment:Yx,aomap_fragment:Kx,aomap_pars_fragment:$x,batching_pars_vertex:Zx,batching_vertex:Qx,begin_vertex:Jx,beginnormal_vertex:eb,bsdfs:tb,iridescence_fragment:nb,bumpmap_pars_fragment:ib,clipping_planes_fragment:sb,clipping_planes_pars_fragment:rb,clipping_planes_pars_vertex:ob,clipping_planes_vertex:ab,color_fragment:lb,color_pars_fragment:cb,color_pars_vertex:ub,color_vertex:hb,common:db,cube_uv_reflection_fragment:pb,defaultnormal_vertex:fb,displacementmap_pars_vertex:mb,displacementmap_vertex:gb,emissivemap_fragment:vb,emissivemap_pars_fragment:_b,colorspace_fragment:xb,colorspace_pars_fragment:bb,envmap_fragment:yb,envmap_common_pars_fragment:wb,envmap_pars_fragment:Mb,envmap_pars_vertex:Eb,envmap_physical_pars_fragment:Fb,envmap_vertex:Sb,fog_vertex:Tb,fog_pars_vertex:Ab,fog_fragment:Cb,fog_pars_fragment:Pb,gradientmap_pars_fragment:Rb,lightmap_fragment:Lb,lightmap_pars_fragment:Ib,lights_lambert_fragment:Db,lights_lambert_pars_fragment:Nb,lights_pars_begin:Ub,lights_toon_fragment:Ob,lights_toon_pars_fragment:Bb,lights_phong_fragment:kb,lights_phong_pars_fragment:Vb,lights_physical_fragment:zb,lights_physical_pars_fragment:Hb,lights_fragment_begin:Gb,lights_fragment_maps:Wb,lights_fragment_end:Xb,logdepthbuf_fragment:jb,logdepthbuf_pars_fragment:qb,logdepthbuf_pars_vertex:Yb,logdepthbuf_vertex:Kb,map_fragment:$b,map_pars_fragment:Zb,map_particle_fragment:Qb,map_particle_pars_fragment:Jb,metalnessmap_fragment:ey,metalnessmap_pars_fragment:ty,morphcolor_vertex:ny,morphnormal_vertex:iy,morphtarget_pars_vertex:sy,morphtarget_vertex:ry,normal_fragment_begin:oy,normal_fragment_maps:ay,normal_pars_fragment:ly,normal_pars_vertex:cy,normal_vertex:uy,normalmap_pars_fragment:hy,clearcoat_normal_fragment_begin:dy,clearcoat_normal_fragment_maps:py,clearcoat_pars_fragment:fy,iridescence_pars_fragment:my,opaque_fragment:gy,packing:vy,premultiplied_alpha_fragment:_y,project_vertex:xy,dithering_fragment:by,dithering_pars_fragment:yy,roughnessmap_fragment:wy,roughnessmap_pars_fragment:My,shadowmap_pars_fragment:Ey,shadowmap_pars_vertex:Sy,shadowmap_vertex:Ty,shadowmask_pars_fragment:Ay,skinbase_vertex:Cy,skinning_pars_vertex:Py,skinning_vertex:Ry,skinnormal_vertex:Ly,specularmap_fragment:Iy,specularmap_pars_fragment:Dy,tonemapping_fragment:Ny,tonemapping_pars_fragment:Uy,transmission_fragment:Fy,transmission_pars_fragment:Oy,uv_pars_fragment:By,uv_pars_vertex:ky,uv_vertex:Vy,worldpos_vertex:zy,background_vert:Hy,background_frag:Gy,backgroundCube_vert:Wy,backgroundCube_frag:Xy,cube_vert:jy,cube_frag:qy,depth_vert:Yy,depth_frag:Ky,distanceRGBA_vert:$y,distanceRGBA_frag:Zy,equirect_vert:Qy,equirect_frag:Jy,linedashed_vert:ew,linedashed_frag:tw,meshbasic_vert:nw,meshbasic_frag:iw,meshlambert_vert:sw,meshlambert_frag:rw,meshmatcap_vert:ow,meshmatcap_frag:aw,meshnormal_vert:lw,meshnormal_frag:cw,meshphong_vert:uw,meshphong_frag:hw,meshphysical_vert:dw,meshphysical_frag:pw,meshtoon_vert:fw,meshtoon_frag:mw,points_vert:gw,points_frag:vw,shadow_vert:_w,shadow_frag:xw,sprite_vert:bw,sprite_frag:yw},ge={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new it}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new it}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new it}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new it},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new it},normalScale:{value:new Ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new it},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new it}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new it}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new it}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0},uvTransform:{value:new it}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new Ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}}},ei={basic:{uniforms:pn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:pn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Ve(0)}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:pn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:pn([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:pn([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new Ve(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:pn([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:pn([ge.points,ge.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:pn([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:pn([ge.common,ge.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:pn([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:pn([ge.sprite,ge.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new it},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:et.background_vert,fragmentShader:et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:et.backgroundCube_vert,fragmentShader:et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distanceRGBA:{uniforms:pn([ge.common,ge.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distanceRGBA_vert,fragmentShader:et.distanceRGBA_frag},shadow:{uniforms:pn([ge.lights,ge.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};ei.physical={uniforms:pn([ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new it},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new it},clearcoatNormalScale:{value:new Ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new it},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new it},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new it},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new it},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new it},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new it},transmissionSamplerSize:{value:new Ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new it},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new it},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new it},anisotropyVector:{value:new Ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new it}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};const ha={r:0,b:0,g:0};function ww(s,e,t,n,i,r,a){const l=new Ve(0);let c=r===!0?0:1,h,d,f=null,m=0,g=null;function b(x,v){let w=!1,y=v.isScene===!0?v.background:null;y&&y.isTexture&&(y=(v.backgroundBlurriness>0?t:e).get(y)),y===null?M(l,c):y&&y.isColor&&(M(y,1),w=!0);const S=s.xr.getEnvironmentBlendMode();S==="additive"?n.buffers.color.setClear(0,0,0,1,a):S==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||w)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),y&&(y.isCubeTexture||y.mapping===il)?(d===void 0&&(d=new fe(new xt(1,1,1),new nn({name:"BackgroundCubeMaterial",uniforms:Ar(ei.backgroundCube.uniforms),vertexShader:ei.backgroundCube.vertexShader,fragmentShader:ei.backgroundCube.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(C,P,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(d)),d.material.uniforms.envMap.value=y,d.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,d.material.toneMapped=pt.getTransfer(y.colorSpace)!==St,(f!==y||m!==y.version||g!==s.toneMapping)&&(d.material.needsUpdate=!0,f=y,m=y.version,g=s.toneMapping),d.layers.enableAll(),x.unshift(d,d.geometry,d.material,0,0,null)):y&&y.isTexture&&(h===void 0&&(h=new fe(new kn(2,2),new nn({name:"BackgroundMaterial",uniforms:Ar(ei.background.uniforms),vertexShader:ei.background.vertexShader,fragmentShader:ei.background.fragmentShader,side:qn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(h)),h.material.uniforms.t2D.value=y,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.toneMapped=pt.getTransfer(y.colorSpace)!==St,y.matrixAutoUpdate===!0&&y.updateMatrix(),h.material.uniforms.uvTransform.value.copy(y.matrix),(f!==y||m!==y.version||g!==s.toneMapping)&&(h.material.needsUpdate=!0,f=y,m=y.version,g=s.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null))}function M(x,v){x.getRGB(ha,dm(s)),n.buffers.color.setClear(ha.r,ha.g,ha.b,v,a)}return{getClearColor:function(){return l},setClearColor:function(x,v=1){l.set(x),c=v,M(l,c)},getClearAlpha:function(){return c},setClearAlpha:function(x){c=x,M(l,c)},render:b}}function Mw(s,e,t,n){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,l={},c=x(null);let h=c,d=!1;function f(U,G,H,X,J){let $=!1;if(a){const ie=M(X,H,G);h!==ie&&(h=ie,g(h.object)),$=v(U,X,H,J),$&&w(U,X,H,J)}else{const ie=G.wireframe===!0;(h.geometry!==X.id||h.program!==H.id||h.wireframe!==ie)&&(h.geometry=X.id,h.program=H.id,h.wireframe=ie,$=!0)}J!==null&&t.update(J,s.ELEMENT_ARRAY_BUFFER),($||d)&&(d=!1,I(U,G,H,X),J!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(J).buffer))}function m(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function g(U){return n.isWebGL2?s.bindVertexArray(U):r.bindVertexArrayOES(U)}function b(U){return n.isWebGL2?s.deleteVertexArray(U):r.deleteVertexArrayOES(U)}function M(U,G,H){const X=H.wireframe===!0;let J=l[U.id];J===void 0&&(J={},l[U.id]=J);let $=J[G.id];$===void 0&&($={},J[G.id]=$);let ie=$[X];return ie===void 0&&(ie=x(m()),$[X]=ie),ie}function x(U){const G=[],H=[],X=[];for(let J=0;J<i;J++)G[J]=0,H[J]=0,X[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:H,attributeDivisors:X,object:U,attributes:{},index:null}}function v(U,G,H,X){const J=h.attributes,$=G.attributes;let ie=0;const ne=H.getAttributes();for(const me in ne)if(ne[me].location>=0){const K=J[me];let se=$[me];if(se===void 0&&(me==="instanceMatrix"&&U.instanceMatrix&&(se=U.instanceMatrix),me==="instanceColor"&&U.instanceColor&&(se=U.instanceColor)),K===void 0||K.attribute!==se||se&&K.data!==se.data)return!0;ie++}return h.attributesNum!==ie||h.index!==X}function w(U,G,H,X){const J={},$=G.attributes;let ie=0;const ne=H.getAttributes();for(const me in ne)if(ne[me].location>=0){let K=$[me];K===void 0&&(me==="instanceMatrix"&&U.instanceMatrix&&(K=U.instanceMatrix),me==="instanceColor"&&U.instanceColor&&(K=U.instanceColor));const se={};se.attribute=K,K&&K.data&&(se.data=K.data),J[me]=se,ie++}h.attributes=J,h.attributesNum=ie,h.index=X}function y(){const U=h.newAttributes;for(let G=0,H=U.length;G<H;G++)U[G]=0}function S(U){C(U,0)}function C(U,G){const H=h.newAttributes,X=h.enabledAttributes,J=h.attributeDivisors;H[U]=1,X[U]===0&&(s.enableVertexAttribArray(U),X[U]=1),J[U]!==G&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](U,G),J[U]=G)}function P(){const U=h.newAttributes,G=h.enabledAttributes;for(let H=0,X=G.length;H<X;H++)G[H]!==U[H]&&(s.disableVertexAttribArray(H),G[H]=0)}function A(U,G,H,X,J,$,ie){ie===!0?s.vertexAttribIPointer(U,G,H,J,$):s.vertexAttribPointer(U,G,H,X,J,$)}function I(U,G,H,X){if(n.isWebGL2===!1&&(U.isInstancedMesh||X.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();const J=X.attributes,$=H.getAttributes(),ie=G.defaultAttributeValues;for(const ne in $){const me=$[ne];if(me.location>=0){let pe=J[ne];if(pe===void 0&&(ne==="instanceMatrix"&&U.instanceMatrix&&(pe=U.instanceMatrix),ne==="instanceColor"&&U.instanceColor&&(pe=U.instanceColor)),pe!==void 0){const K=pe.normalized,se=pe.itemSize,be=t.get(pe);if(be===void 0)continue;const Te=be.buffer,Ce=be.type,ye=be.bytesPerElement,Ge=n.isWebGL2===!0&&(Ce===s.INT||Ce===s.UNSIGNED_INT||pe.gpuType===wo);if(pe.isInterleavedBufferAttribute){const Be=pe.data,q=Be.stride,Dt=pe.offset;if(Be.isInstancedInterleavedBuffer){for(let Pe=0;Pe<me.locationSize;Pe++)C(me.location+Pe,Be.meshPerAttribute);U.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=Be.meshPerAttribute*Be.count)}else for(let Pe=0;Pe<me.locationSize;Pe++)S(me.location+Pe);s.bindBuffer(s.ARRAY_BUFFER,Te);for(let Pe=0;Pe<me.locationSize;Pe++)A(me.location+Pe,se/me.locationSize,Ce,K,q*ye,(Dt+se/me.locationSize*Pe)*ye,Ge)}else{if(pe.isInstancedBufferAttribute){for(let Be=0;Be<me.locationSize;Be++)C(me.location+Be,pe.meshPerAttribute);U.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let Be=0;Be<me.locationSize;Be++)S(me.location+Be);s.bindBuffer(s.ARRAY_BUFFER,Te);for(let Be=0;Be<me.locationSize;Be++)A(me.location+Be,se/me.locationSize,Ce,K,se*ye,se/me.locationSize*Be*ye,Ge)}}else if(ie!==void 0){const K=ie[ne];if(K!==void 0)switch(K.length){case 2:s.vertexAttrib2fv(me.location,K);break;case 3:s.vertexAttrib3fv(me.location,K);break;case 4:s.vertexAttrib4fv(me.location,K);break;default:s.vertexAttrib1fv(me.location,K)}}}}P()}function B(){k();for(const U in l){const G=l[U];for(const H in G){const X=G[H];for(const J in X)b(X[J].object),delete X[J];delete G[H]}delete l[U]}}function E(U){if(l[U.id]===void 0)return;const G=l[U.id];for(const H in G){const X=G[H];for(const J in X)b(X[J].object),delete X[J];delete G[H]}delete l[U.id]}function R(U){for(const G in l){const H=l[G];if(H[U.id]===void 0)continue;const X=H[U.id];for(const J in X)b(X[J].object),delete X[J];delete H[U.id]}}function k(){W(),d=!0,h!==c&&(h=c,g(h.object))}function W(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:f,reset:k,resetDefaultState:W,dispose:B,releaseStatesOfGeometry:E,releaseStatesOfProgram:R,initAttributes:y,enableAttribute:S,disableUnusedAttributes:P}}function Ew(s,e,t,n){const i=n.isWebGL2;let r;function a(d){r=d}function l(d,f){s.drawArrays(r,d,f),t.update(f,r,1)}function c(d,f,m){if(m===0)return;let g,b;if(i)g=s,b="drawArraysInstanced";else if(g=e.get("ANGLE_instanced_arrays"),b="drawArraysInstancedANGLE",g===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[b](r,d,f,m),t.update(f,r,m)}function h(d,f,m){if(m===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let b=0;b<m;b++)this.render(d[b],f[b]);else{g.multiDrawArraysWEBGL(r,d,0,f,0,m);let b=0;for(let M=0;M<m;M++)b+=f[M];t.update(b,r,1)}}this.setMode=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Sw(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(A){if(A==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext!="undefined"&&s.constructor.name==="WebGL2RenderingContext";let l=t.precision!==void 0?t.precision:"highp";const c=r(l);c!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",c,"instead."),l=c);const h=a||e.has("WEBGL_draw_buffers"),d=t.logarithmicDepthBuffer===!0,f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_TEXTURE_SIZE),b=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),M=s.getParameter(s.MAX_VERTEX_ATTRIBS),x=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),v=s.getParameter(s.MAX_VARYING_VECTORS),w=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),y=m>0,S=a||e.has("OES_texture_float"),C=y&&S,P=a?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:h,getMaxAnisotropy:i,getMaxPrecision:r,precision:l,logarithmicDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:g,maxCubemapSize:b,maxAttributes:M,maxVertexUniforms:x,maxVaryings:v,maxFragmentUniforms:w,vertexTextures:y,floatFragmentTextures:S,floatVertexTextures:C,maxSamples:P}}function Tw(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new Jn,l=new it,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,m){const g=f.length!==0||m||n!==0||i;return i=m,n=f.length,g},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,m){t=d(f,m,0)},this.setState=function(f,m,g){const b=f.clippingPlanes,M=f.clipIntersection,x=f.clipShadows,v=s.get(f);if(!i||b===null||b.length===0||r&&!x)r?d(null):h();else{const w=r?0:n,y=w*4;let S=v.clippingState||null;c.value=S,S=d(b,m,y,g);for(let C=0;C!==y;++C)S[C]=t[C];v.clippingState=S,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=w}};function h(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(f,m,g,b){const M=f!==null?f.length:0;let x=null;if(M!==0){if(x=c.value,b!==!0||x===null){const v=g+M*4,w=m.matrixWorldInverse;l.getNormalMatrix(w),(x===null||x.length<v)&&(x=new Float32Array(v));for(let y=0,S=g;y!==M;++y,S+=4)a.copy(f[y]).applyMatrix4(w,l),a.normal.toArray(x,S),x[S+3]=a.constant}c.value=x,c.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,x}}function Aw(s){let e=new WeakMap;function t(a,l){return l===Wc?a.mapping=yr:l===Xc&&(a.mapping=wr),a}function n(a){if(a&&a.isTexture){const l=a.mapping;if(l===Wc||l===Xc)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const h=new kx(c.height);return h.fromEquirectangularTexture(s,a),e.set(a,h),a.addEventListener("dispose",i),t(h.texture,a.mapping)}else return null}}return a}function i(a){const l=a.target;l.removeEventListener("dispose",i);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class ai extends pm{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,l=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,a=r+h*this.view.width,l-=d*this.view.offsetY,c=l-d*this.view.height}this.projectionMatrix.makeOrthographic(r,a,l,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const fr=4,ep=[.125,.215,.35,.446,.526,.582],gs=20,uc=new ai,tp=new Ve;let hc=null,dc=0,pc=0;const ds=(1+Math.sqrt(5))/2,Qs=1/ds,np=[new D(1,1,1),new D(-1,1,1),new D(1,1,-1),new D(-1,1,-1),new D(0,ds,Qs),new D(0,ds,-Qs),new D(Qs,0,ds),new D(-Qs,0,ds),new D(ds,Qs,0),new D(-ds,Qs,0)];class ip{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){hc=this._renderer.getRenderTarget(),dc=this._renderer.getActiveCubeFace(),pc=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=op(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(hc,dc,pc),e.scissorTest=!1,da(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===yr||e.mapping===wr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),hc=this._renderer.getRenderTarget(),dc=this._renderer.getActiveCubeFace(),pc=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Tt,minFilter:Tt,generateMipmaps:!1,type:si,format:Wt,colorSpace:en,depthBuffer:!1},i=sp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sp(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Cw(r)),this._blurMaterial=Pw(r,e,t)}return i}_compileMaterial(e){const t=new fe(this._lodPlanes[0],e);this._renderer.compile(t,uc)}_sceneToCubeUV(e,t,n,i){const l=new fn(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,m=d.toneMapping;d.getClearColor(tp),d.toneMapping=Zi,d.autoClear=!1;const g=new ti({name:"PMREM.Background",side:xn,depthWrite:!1,depthTest:!1}),b=new fe(new xt,g);let M=!1;const x=e.background;x?x.isColor&&(g.color.copy(x),e.background=null,M=!0):(g.color.copy(tp),M=!0);for(let v=0;v<6;v++){const w=v%3;w===0?(l.up.set(0,c[v],0),l.lookAt(h[v],0,0)):w===1?(l.up.set(0,0,c[v]),l.lookAt(0,h[v],0)):(l.up.set(0,c[v],0),l.lookAt(0,0,h[v]));const y=this._cubeSize;da(i,w*y,v>2?y:0,y,y),d.setRenderTarget(i),M&&d.render(b,l),d.render(e,l)}b.geometry.dispose(),b.material.dispose(),d.toneMapping=m,d.autoClear=f,e.background=x}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===yr||e.mapping===wr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=op()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rp());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new fe(this._lodPlanes[0],r),l=r.uniforms;l.envMap.value=e;const c=this._cubeSize;da(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,uc)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=np[(i-1)%np.length];this._blur(e,i-1,i,r,a)}t.autoClear=n}_blur(e,t,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,l){const c=this._renderer,h=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,f=new fe(this._lodPlanes[i],h),m=h.uniforms,g=this._sizeLods[n]-1,b=isFinite(r)?Math.PI/(2*g):2*Math.PI/(2*gs-1),M=r/b,x=isFinite(r)?1+Math.floor(d*M):gs;x>gs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${gs}`);const v=[];let w=0;for(let A=0;A<gs;++A){const I=A/M,B=Math.exp(-I*I/2);v.push(B),A===0?w+=B:A<x&&(w+=2*B)}for(let A=0;A<v.length;A++)v[A]=v[A]/w;m.envMap.value=e.texture,m.samples.value=x,m.weights.value=v,m.latitudinal.value=a==="latitudinal",l&&(m.poleAxis.value=l);const{_lodMax:y}=this;m.dTheta.value=b,m.mipInt.value=y-n;const S=this._sizeLods[i],C=3*S*(i>y-fr?i-y+fr:0),P=4*(this._cubeSize-S);da(t,C,P,3*S,2*S),c.setRenderTarget(t),c.render(f,uc)}}function Cw(s){const e=[],t=[],n=[];let i=s;const r=s-fr+1+ep.length;for(let a=0;a<r;a++){const l=Math.pow(2,i);t.push(l);let c=1/l;a>s-fr?c=ep[a-s+fr-1]:a===0&&(c=0),n.push(c);const h=1/(l-2),d=-h,f=1+h,m=[d,d,f,d,f,f,d,d,f,f,d,f],g=6,b=6,M=3,x=2,v=1,w=new Float32Array(M*b*g),y=new Float32Array(x*b*g),S=new Float32Array(v*b*g);for(let P=0;P<g;P++){const A=P%3*2/3-1,I=P>2?0:-1,B=[A,I,0,A+2/3,I,0,A+2/3,I+1,0,A,I,0,A+2/3,I+1,0,A,I+1,0];w.set(B,M*b*P),y.set(m,x*b*P);const E=[P,P,P,P,P,P];S.set(E,v*b*P)}const C=new tn;C.setAttribute("position",new Ct(w,M)),C.setAttribute("uv",new Ct(y,x)),C.setAttribute("faceIndex",new Ct(S,v)),e.push(C),i>fr&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function sp(s,e,t){const n=new Pn(s,e,t);return n.texture.mapping=il,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function da(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Pw(s,e,t){const n=new Float32Array(gs),i=new D(0,1,0);return new nn({name:"SphericalGaussianBlur",defines:{n:gs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Cu(),fragmentShader:`

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
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function rp(){return new nn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Cu(),fragmentShader:`

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
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function op(){return new nn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Cu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function Cu(){return`

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
	`}function Rw(s){let e=new WeakMap,t=null;function n(l){if(l&&l.isTexture){const c=l.mapping,h=c===Wc||c===Xc,d=c===yr||c===wr;if(h||d)if(l.isRenderTargetTexture&&l.needsPMREMUpdate===!0){l.needsPMREMUpdate=!1;let f=e.get(l);return t===null&&(t=new ip(s)),f=h?t.fromEquirectangular(l,f):t.fromCubemap(l,f),e.set(l,f),f.texture}else{if(e.has(l))return e.get(l).texture;{const f=l.image;if(h&&f&&f.height>0||d&&f&&i(f)){t===null&&(t=new ip(s));const m=h?t.fromEquirectangular(l):t.fromCubemap(l);return e.set(l,m),l.addEventListener("dispose",r),m.texture}else return null}}}return l}function i(l){let c=0;const h=6;for(let d=0;d<h;d++)l[d]!==void 0&&c++;return c===h}function r(l){const c=l.target;c.removeEventListener("dispose",r);const h=e.get(c);h!==void 0&&(e.delete(c),h.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Lw(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Iw(s,e,t,n){const i={},r=new WeakMap;function a(f){const m=f.target;m.index!==null&&e.remove(m.index);for(const b in m.attributes)e.remove(m.attributes[b]);for(const b in m.morphAttributes){const M=m.morphAttributes[b];for(let x=0,v=M.length;x<v;x++)e.remove(M[x])}m.removeEventListener("dispose",a),delete i[m.id];const g=r.get(m);g&&(e.remove(g),r.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function l(f,m){return i[m.id]===!0||(m.addEventListener("dispose",a),i[m.id]=!0,t.memory.geometries++),m}function c(f){const m=f.attributes;for(const b in m)e.update(m[b],s.ARRAY_BUFFER);const g=f.morphAttributes;for(const b in g){const M=g[b];for(let x=0,v=M.length;x<v;x++)e.update(M[x],s.ARRAY_BUFFER)}}function h(f){const m=[],g=f.index,b=f.attributes.position;let M=0;if(g!==null){const w=g.array;M=g.version;for(let y=0,S=w.length;y<S;y+=3){const C=w[y+0],P=w[y+1],A=w[y+2];m.push(C,P,P,A,A,C)}}else if(b!==void 0){const w=b.array;M=b.version;for(let y=0,S=w.length/3-1;y<S;y+=3){const C=y+0,P=y+1,A=y+2;m.push(C,P,P,A,A,C)}}else return;const x=new(rm(m)?hm:um)(m,1);x.version=M;const v=r.get(f);v&&e.remove(v),r.set(f,x)}function d(f){const m=r.get(f);if(m){const g=f.index;g!==null&&m.version<g.version&&h(f)}else h(f);return r.get(f)}return{get:l,update:c,getWireframeAttribute:d}}function Dw(s,e,t,n){const i=n.isWebGL2;let r;function a(g){r=g}let l,c;function h(g){l=g.type,c=g.bytesPerElement}function d(g,b){s.drawElements(r,b,l,g*c),t.update(b,r,1)}function f(g,b,M){if(M===0)return;let x,v;if(i)x=s,v="drawElementsInstanced";else if(x=e.get("ANGLE_instanced_arrays"),v="drawElementsInstancedANGLE",x===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}x[v](r,b,l,g*c,M),t.update(b,r,M)}function m(g,b,M){if(M===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let v=0;v<M;v++)this.render(g[v]/c,b[v]);else{x.multiDrawElementsWEBGL(r,b,0,l,g,0,M);let v=0;for(let w=0;w<M;w++)v+=b[w];t.update(v,r,1)}}this.setMode=a,this.setIndex=h,this.render=d,this.renderInstances=f,this.renderMultiDraw=m}function Nw(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,l){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=l*(r/3);break;case s.LINES:t.lines+=l*(r/2);break;case s.LINE_STRIP:t.lines+=l*(r-1);break;case s.LINE_LOOP:t.lines+=l*r;break;case s.POINTS:t.points+=l*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Uw(s,e){return s[0]-e[0]}function Fw(s,e){return Math.abs(e[1])-Math.abs(s[1])}function Ow(s,e,t){const n={},i=new Float32Array(8),r=new WeakMap,a=new _t,l=[];for(let h=0;h<8;h++)l[h]=[h,0];function c(h,d,f){const m=h.morphTargetInfluences;if(e.isWebGL2===!0){const g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,b=g!==void 0?g.length:0;let M=r.get(d);if(M===void 0||M.count!==b){let U=function(){k.dispose(),r.delete(d),d.removeEventListener("dispose",U)};M!==void 0&&M.texture.dispose();const w=d.morphAttributes.position!==void 0,y=d.morphAttributes.normal!==void 0,S=d.morphAttributes.color!==void 0,C=d.morphAttributes.position||[],P=d.morphAttributes.normal||[],A=d.morphAttributes.color||[];let I=0;w===!0&&(I=1),y===!0&&(I=2),S===!0&&(I=3);let B=d.attributes.position.count*I,E=1;B>e.maxTextureSize&&(E=Math.ceil(B/e.maxTextureSize),B=e.maxTextureSize);const R=new Float32Array(B*E*4*b),k=new lm(R,B,E,b);k.type=ft,k.needsUpdate=!0;const W=I*4;for(let G=0;G<b;G++){const H=C[G],X=P[G],J=A[G],$=B*E*4*G;for(let ie=0;ie<H.count;ie++){const ne=ie*W;w===!0&&(a.fromBufferAttribute(H,ie),R[$+ne+0]=a.x,R[$+ne+1]=a.y,R[$+ne+2]=a.z,R[$+ne+3]=0),y===!0&&(a.fromBufferAttribute(X,ie),R[$+ne+4]=a.x,R[$+ne+5]=a.y,R[$+ne+6]=a.z,R[$+ne+7]=0),S===!0&&(a.fromBufferAttribute(J,ie),R[$+ne+8]=a.x,R[$+ne+9]=a.y,R[$+ne+10]=a.z,R[$+ne+11]=J.itemSize===4?a.w:1)}}M={count:b,texture:k,size:new Ae(B,E)},r.set(d,M),d.addEventListener("dispose",U)}let x=0;for(let w=0;w<m.length;w++)x+=m[w];const v=d.morphTargetsRelative?1:1-x;f.getUniforms().setValue(s,"morphTargetBaseInfluence",v),f.getUniforms().setValue(s,"morphTargetInfluences",m),f.getUniforms().setValue(s,"morphTargetsTexture",M.texture,t),f.getUniforms().setValue(s,"morphTargetsTextureSize",M.size)}else{const g=m===void 0?0:m.length;let b=n[d.id];if(b===void 0||b.length!==g){b=[];for(let y=0;y<g;y++)b[y]=[y,0];n[d.id]=b}for(let y=0;y<g;y++){const S=b[y];S[0]=y,S[1]=m[y]}b.sort(Fw);for(let y=0;y<8;y++)y<g&&b[y][1]?(l[y][0]=b[y][0],l[y][1]=b[y][1]):(l[y][0]=Number.MAX_SAFE_INTEGER,l[y][1]=0);l.sort(Uw);const M=d.morphAttributes.position,x=d.morphAttributes.normal;let v=0;for(let y=0;y<8;y++){const S=l[y],C=S[0],P=S[1];C!==Number.MAX_SAFE_INTEGER&&P?(M&&d.getAttribute("morphTarget"+y)!==M[C]&&d.setAttribute("morphTarget"+y,M[C]),x&&d.getAttribute("morphNormal"+y)!==x[C]&&d.setAttribute("morphNormal"+y,x[C]),i[y]=P,v+=P):(M&&d.hasAttribute("morphTarget"+y)===!0&&d.deleteAttribute("morphTarget"+y),x&&d.hasAttribute("morphNormal"+y)===!0&&d.deleteAttribute("morphNormal"+y),i[y]=0)}const w=d.morphTargetsRelative?1:1-v;f.getUniforms().setValue(s,"morphTargetBaseInfluence",w),f.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:c}}function Bw(s,e,t,n){let i=new WeakMap;function r(c){const h=n.render.frame,d=c.geometry,f=e.get(c,d);if(i.get(f)!==h&&(e.update(f),i.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),i.get(c)!==h&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,h))),c.isSkinnedMesh){const m=c.skeleton;i.get(m)!==h&&(m.update(),i.set(m,h))}return f}function a(){i=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:r,dispose:a}}class gm extends jt{constructor(e,t,n,i,r,a,l,c,h,d){if(d=d!==void 0?d:ys,d!==ys&&d!==Er)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===ys&&(n=Tn),n===void 0&&d===Er&&(n=bs),super(null,i,r,a,l,c,d,n,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=l!==void 0?l:dt,this.minFilter=c!==void 0?c:dt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const vm=new jt,_m=new gm(1,1);_m.compareFunction=im;const xm=new lm,bm=new vx,ym=new fm,ap=[],lp=[],cp=new Float32Array(16),up=new Float32Array(9),hp=new Float32Array(4);function Ir(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=ap[i];if(r===void 0&&(r=new Float32Array(i),ap[i]=r),e!==0){n.toArray(r,0);for(let a=1,l=0;a!==e;++a)l+=t,s[a].toArray(r,l)}return r}function $t(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Zt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function al(s,e){let t=lp[e];t===void 0&&(t=new Int32Array(e),lp[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function kw(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Vw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;s.uniform2fv(this.addr,e),Zt(t,e)}}function zw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if($t(t,e))return;s.uniform3fv(this.addr,e),Zt(t,e)}}function Hw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;s.uniform4fv(this.addr,e),Zt(t,e)}}function Gw(s,e){const t=this.cache,n=e.elements;if(n===void 0){if($t(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Zt(t,e)}else{if($t(t,n))return;hp.set(n),s.uniformMatrix2fv(this.addr,!1,hp),Zt(t,n)}}function Ww(s,e){const t=this.cache,n=e.elements;if(n===void 0){if($t(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Zt(t,e)}else{if($t(t,n))return;up.set(n),s.uniformMatrix3fv(this.addr,!1,up),Zt(t,n)}}function Xw(s,e){const t=this.cache,n=e.elements;if(n===void 0){if($t(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Zt(t,e)}else{if($t(t,n))return;cp.set(n),s.uniformMatrix4fv(this.addr,!1,cp),Zt(t,n)}}function jw(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function qw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;s.uniform2iv(this.addr,e),Zt(t,e)}}function Yw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($t(t,e))return;s.uniform3iv(this.addr,e),Zt(t,e)}}function Kw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;s.uniform4iv(this.addr,e),Zt(t,e)}}function $w(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Zw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;s.uniform2uiv(this.addr,e),Zt(t,e)}}function Qw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($t(t,e))return;s.uniform3uiv(this.addr,e),Zt(t,e)}}function Jw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;s.uniform4uiv(this.addr,e),Zt(t,e)}}function eM(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);const r=this.type===s.SAMPLER_2D_SHADOW?_m:vm;t.setTexture2D(e||r,i)}function tM(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||bm,i)}function nM(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||ym,i)}function iM(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||xm,i)}function sM(s){switch(s){case 5126:return kw;case 35664:return Vw;case 35665:return zw;case 35666:return Hw;case 35674:return Gw;case 35675:return Ww;case 35676:return Xw;case 5124:case 35670:return jw;case 35667:case 35671:return qw;case 35668:case 35672:return Yw;case 35669:case 35673:return Kw;case 5125:return $w;case 36294:return Zw;case 36295:return Qw;case 36296:return Jw;case 35678:case 36198:case 36298:case 36306:case 35682:return eM;case 35679:case 36299:case 36307:return tM;case 35680:case 36300:case 36308:case 36293:return nM;case 36289:case 36303:case 36311:case 36292:return iM}}function rM(s,e){s.uniform1fv(this.addr,e)}function oM(s,e){const t=Ir(e,this.size,2);s.uniform2fv(this.addr,t)}function aM(s,e){const t=Ir(e,this.size,3);s.uniform3fv(this.addr,t)}function lM(s,e){const t=Ir(e,this.size,4);s.uniform4fv(this.addr,t)}function cM(s,e){const t=Ir(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function uM(s,e){const t=Ir(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function hM(s,e){const t=Ir(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function dM(s,e){s.uniform1iv(this.addr,e)}function pM(s,e){s.uniform2iv(this.addr,e)}function fM(s,e){s.uniform3iv(this.addr,e)}function mM(s,e){s.uniform4iv(this.addr,e)}function gM(s,e){s.uniform1uiv(this.addr,e)}function vM(s,e){s.uniform2uiv(this.addr,e)}function _M(s,e){s.uniform3uiv(this.addr,e)}function xM(s,e){s.uniform4uiv(this.addr,e)}function bM(s,e,t){const n=this.cache,i=e.length,r=al(t,i);$t(n,r)||(s.uniform1iv(this.addr,r),Zt(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||vm,r[a])}function yM(s,e,t){const n=this.cache,i=e.length,r=al(t,i);$t(n,r)||(s.uniform1iv(this.addr,r),Zt(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||bm,r[a])}function wM(s,e,t){const n=this.cache,i=e.length,r=al(t,i);$t(n,r)||(s.uniform1iv(this.addr,r),Zt(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||ym,r[a])}function MM(s,e,t){const n=this.cache,i=e.length,r=al(t,i);$t(n,r)||(s.uniform1iv(this.addr,r),Zt(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||xm,r[a])}function EM(s){switch(s){case 5126:return rM;case 35664:return oM;case 35665:return aM;case 35666:return lM;case 35674:return cM;case 35675:return uM;case 35676:return hM;case 5124:case 35670:return dM;case 35667:case 35671:return pM;case 35668:case 35672:return fM;case 35669:case 35673:return mM;case 5125:return gM;case 36294:return vM;case 36295:return _M;case 36296:return xM;case 35678:case 36198:case 36298:case 36306:case 35682:return bM;case 35679:case 36299:case 36307:return yM;case 35680:case 36300:case 36308:case 36293:return wM;case 36289:case 36303:case 36311:case 36292:return MM}}class SM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=sM(t.type)}}class TM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=EM(t.type)}}class AM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const l=i[r];l.setValue(e,t[l.id],n)}}}const fc=/(\w+)(\])?(\[|\.)?/g;function dp(s,e){s.seq.push(e),s.map[e.id]=e}function CM(s,e,t){const n=s.name,i=n.length;for(fc.lastIndex=0;;){const r=fc.exec(n),a=fc.lastIndex;let l=r[1];const c=r[2]==="]",h=r[3];if(c&&(l=l|0),h===void 0||h==="["&&a+2===i){dp(t,h===void 0?new SM(l,s,e):new TM(l,s,e));break}else{let f=t.map[l];f===void 0&&(f=new AM(l),dp(t,f)),t=f}}}class Va{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);CM(r,a,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const l=t[r],c=n[l.id];c.needsUpdate!==!1&&l.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function pp(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const PM=37297;let RM=0;function LM(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const l=a+1;n.push(`${l===e?">":" "} ${l}: ${t[a]}`)}return n.join(`
`)}function IM(s){const e=pt.getPrimaries(pt.workingColorSpace),t=pt.getPrimaries(s);let n;switch(e===t?n="":e===Za&&t===$a?n="LinearDisplayP3ToLinearSRGB":e===$a&&t===Za&&(n="LinearSRGBToLinearDisplayP3"),s){case en:case ol:return[n,"LinearTransferOETF"];case Ft:case Eu:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function fp(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+LM(s.getShaderSource(e),a)}else return i}function DM(s,e){const t=IM(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function NM(s,e){let t;switch(e){case P_:t="Linear";break;case R_:t="Reinhard";break;case L_:t="OptimizedCineon";break;case I_:t="ACESFilmic";break;case N_:t="AgX";break;case D_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function UM(s){return[s.extensionDerivatives||!!s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.alphaToCoverage||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(mr).join(`
`)}function FM(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(mr).join(`
`)}function OM(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function BM(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),a=r.name;let l=1;r.type===s.FLOAT_MAT2&&(l=2),r.type===s.FLOAT_MAT3&&(l=3),r.type===s.FLOAT_MAT4&&(l=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:l}}return t}function mr(s){return s!==""}function mp(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function gp(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const kM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qc(s){return s.replace(kM,zM)}const VM=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function zM(s,e){let t=et[e];if(t===void 0){const n=VM.get(e);if(n!==void 0)t=et[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Qc(t)}const HM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vp(s){return s.replace(HM,GM)}function GM(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function _p(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	`;return s.isWebGL2&&(e+=`precision ${s.precision} sampler3D;
		precision ${s.precision} sampler2DArray;
		precision ${s.precision} sampler2DShadow;
		precision ${s.precision} samplerCubeShadow;
		precision ${s.precision} sampler2DArrayShadow;
		precision ${s.precision} isampler2D;
		precision ${s.precision} isampler3D;
		precision ${s.precision} isamplerCube;
		precision ${s.precision} isampler2DArray;
		precision ${s.precision} usampler2D;
		precision ${s.precision} usampler3D;
		precision ${s.precision} usamplerCube;
		precision ${s.precision} usampler2DArray;
		`),s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function WM(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Xf?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===i_?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===yi&&(e="SHADOWMAP_TYPE_VSM"),e}function XM(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case yr:case wr:e="ENVMAP_TYPE_CUBE";break;case il:e="ENVMAP_TYPE_CUBE_UV";break}return e}function jM(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case wr:e="ENVMAP_MODE_REFRACTION";break}return e}function qM(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case jf:e="ENVMAP_BLENDING_MULTIPLY";break;case A_:e="ENVMAP_BLENDING_MIX";break;case C_:e="ENVMAP_BLENDING_ADD";break}return e}function YM(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function KM(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,l=t.fragmentShader;const c=WM(t),h=XM(t),d=jM(t),f=qM(t),m=YM(t),g=t.isWebGL2?"":UM(t),b=FM(t),M=OM(r),x=i.createProgram();let v,w,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(mr).join(`
`),v.length>0&&(v+=`
`),w=[g,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(mr).join(`
`),w.length>0&&(w+=`
`)):(v=[_p(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(mr).join(`
`),w=[g,_p(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",t.envMap?"#define "+f:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Zi?"#define TONE_MAPPING":"",t.toneMapping!==Zi?et.tonemapping_pars_fragment:"",t.toneMapping!==Zi?NM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",et.colorspace_pars_fragment,DM("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(mr).join(`
`)),a=Qc(a),a=mp(a,t),a=gp(a,t),l=Qc(l),l=mp(l,t),l=gp(l,t),a=vp(a),l=vp(l),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,v=[b,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,w=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Yn?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Yn?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+w);const S=y+v+a,C=y+w+l,P=pp(i,i.VERTEX_SHADER,S),A=pp(i,i.FRAGMENT_SHADER,C);i.attachShader(x,P),i.attachShader(x,A),t.index0AttributeName!==void 0?i.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function I(k){if(s.debug.checkShaderErrors){const W=i.getProgramInfoLog(x).trim(),U=i.getShaderInfoLog(P).trim(),G=i.getShaderInfoLog(A).trim();let H=!0,X=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(H=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,P,A);else{const J=fp(i,P,"vertex"),$=fp(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+W+`
`+J+`
`+$)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(U===""||G==="")&&(X=!1);X&&(k.diagnostics={runnable:H,programLog:W,vertexShader:{log:U,prefix:v},fragmentShader:{log:G,prefix:w}})}i.deleteShader(P),i.deleteShader(A),B=new Va(i,x),E=BM(i,x)}let B;this.getUniforms=function(){return B===void 0&&I(this),B};let E;this.getAttributes=function(){return E===void 0&&I(this),E};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=i.getProgramParameter(x,PM)),R},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=RM++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=P,this.fragmentShader=A,this}let $M=0;class ZM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new QM(e),t.set(e,n)),n}}class QM{constructor(e){this.id=$M++,this.code=e,this.usedTimes=0}}function JM(s,e,t,n,i,r,a){const l=new Tu,c=new ZM,h=new Set,d=[],f=i.isWebGL2,m=i.logarithmicDepthBuffer,g=i.vertexTextures;let b=i.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(E){return h.add(E),E===0?"uv":`uv${E}`}function v(E,R,k,W,U){const G=W.fog,H=U.geometry,X=E.isMeshStandardMaterial?W.environment:null,J=(E.isMeshStandardMaterial?t:e).get(E.envMap||X),$=!!J&&J.mapping===il?J.image.height:null,ie=M[E.type];E.precision!==null&&(b=i.getMaxPrecision(E.precision),b!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",b,"instead."));const ne=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,me=ne!==void 0?ne.length:0;let pe=0;H.morphAttributes.position!==void 0&&(pe=1),H.morphAttributes.normal!==void 0&&(pe=2),H.morphAttributes.color!==void 0&&(pe=3);let K,se,be,Te;if(ie){const tt=ei[ie];K=tt.vertexShader,se=tt.fragmentShader}else K=E.vertexShader,se=E.fragmentShader,c.update(E),be=c.getVertexShaderID(E),Te=c.getFragmentShaderID(E);const Ce=s.getRenderTarget(),ye=U.isInstancedMesh===!0,Ge=U.isBatchedMesh===!0,Be=!!E.map,q=!!E.matcap,Dt=!!J,Pe=!!E.aoMap,We=!!E.lightMap,Re=!!E.bumpMap,bt=!!E.normalMap,je=!!E.displacementMap,F=!!E.emissiveMap,L=!!E.metalnessMap,Z=!!E.roughnessMap,he=E.anisotropy>0,ae=E.clearcoat>0,ce=E.iridescence>0,Se=E.sheen>0,ve=E.transmission>0,we=he&&!!E.anisotropyMap,Oe=ae&&!!E.clearcoatMap,ze=ae&&!!E.clearcoatNormalMap,oe=ae&&!!E.clearcoatRoughnessMap,st=ce&&!!E.iridescenceMap,Je=ce&&!!E.iridescenceThicknessMap,Xe=Se&&!!E.sheenColorMap,Le=Se&&!!E.sheenRoughnessMap,xe=!!E.specularMap,$e=!!E.specularColorMap,V=!!E.specularIntensityMap,de=ve&&!!E.transmissionMap,_e=ve&&!!E.thicknessMap,Ie=!!E.gradientMap,O=!!E.alphaMap,re=E.alphaTest>0,le=!!E.alphaHash,Ee=!!E.extensions;let Ue=Zi;E.toneMapped&&(Ce===null||Ce.isXRRenderTarget===!0)&&(Ue=s.toneMapping);const nt={isWebGL2:f,shaderID:ie,shaderType:E.type,shaderName:E.name,vertexShader:K,fragmentShader:se,defines:E.defines,customVertexShaderID:be,customFragmentShaderID:Te,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:b,batching:Ge,instancing:ye,instancingColor:ye&&U.instanceColor!==null,supportsVertexTextures:g,outputColorSpace:Ce===null?s.outputColorSpace:Ce.isXRRenderTarget===!0?Ce.texture.colorSpace:en,alphaToCoverage:!!E.alphaToCoverage,map:Be,matcap:q,envMap:Dt,envMapMode:Dt&&J.mapping,envMapCubeUVHeight:$,aoMap:Pe,lightMap:We,bumpMap:Re,normalMap:bt,displacementMap:g&&je,emissiveMap:F,normalMapObjectSpace:bt&&E.normalMapType===W_,normalMapTangentSpace:bt&&E.normalMapType===nm,metalnessMap:L,roughnessMap:Z,anisotropy:he,anisotropyMap:we,clearcoat:ae,clearcoatMap:Oe,clearcoatNormalMap:ze,clearcoatRoughnessMap:oe,iridescence:ce,iridescenceMap:st,iridescenceThicknessMap:Je,sheen:Se,sheenColorMap:Xe,sheenRoughnessMap:Le,specularMap:xe,specularColorMap:$e,specularIntensityMap:V,transmission:ve,transmissionMap:de,thicknessMap:_e,gradientMap:Ie,opaque:E.transparent===!1&&E.blending===_r&&E.alphaToCoverage===!1,alphaMap:O,alphaTest:re,alphaHash:le,combine:E.combine,mapUv:Be&&x(E.map.channel),aoMapUv:Pe&&x(E.aoMap.channel),lightMapUv:We&&x(E.lightMap.channel),bumpMapUv:Re&&x(E.bumpMap.channel),normalMapUv:bt&&x(E.normalMap.channel),displacementMapUv:je&&x(E.displacementMap.channel),emissiveMapUv:F&&x(E.emissiveMap.channel),metalnessMapUv:L&&x(E.metalnessMap.channel),roughnessMapUv:Z&&x(E.roughnessMap.channel),anisotropyMapUv:we&&x(E.anisotropyMap.channel),clearcoatMapUv:Oe&&x(E.clearcoatMap.channel),clearcoatNormalMapUv:ze&&x(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&x(E.clearcoatRoughnessMap.channel),iridescenceMapUv:st&&x(E.iridescenceMap.channel),iridescenceThicknessMapUv:Je&&x(E.iridescenceThicknessMap.channel),sheenColorMapUv:Xe&&x(E.sheenColorMap.channel),sheenRoughnessMapUv:Le&&x(E.sheenRoughnessMap.channel),specularMapUv:xe&&x(E.specularMap.channel),specularColorMapUv:$e&&x(E.specularColorMap.channel),specularIntensityMapUv:V&&x(E.specularIntensityMap.channel),transmissionMapUv:de&&x(E.transmissionMap.channel),thicknessMapUv:_e&&x(E.thicknessMap.channel),alphaMapUv:O&&x(E.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(bt||he),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!H.attributes.uv&&(Be||O),fog:!!G,useFog:E.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:m,skinning:U.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:me,morphTextureStride:pe,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:s.shadowMap.enabled&&k.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ue,useLegacyLights:s._useLegacyLights,decodeVideoTexture:Be&&E.map.isVideoTexture===!0&&pt.getTransfer(E.map.colorSpace)===St,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===mn,flipSided:E.side===xn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionDerivatives:Ee&&E.extensions.derivatives===!0,extensionFragDepth:Ee&&E.extensions.fragDepth===!0,extensionDrawBuffers:Ee&&E.extensions.drawBuffers===!0,extensionShaderTextureLOD:Ee&&E.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Ee&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Ee&&E.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionFragDepth:f||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return nt.vertexUv1s=h.has(1),nt.vertexUv2s=h.has(2),nt.vertexUv3s=h.has(3),h.clear(),nt}function w(E){const R=[];if(E.shaderID?R.push(E.shaderID):(R.push(E.customVertexShaderID),R.push(E.customFragmentShaderID)),E.defines!==void 0)for(const k in E.defines)R.push(k),R.push(E.defines[k]);return E.isRawShaderMaterial===!1&&(y(R,E),S(R,E),R.push(s.outputColorSpace)),R.push(E.customProgramCacheKey),R.join()}function y(E,R){E.push(R.precision),E.push(R.outputColorSpace),E.push(R.envMapMode),E.push(R.envMapCubeUVHeight),E.push(R.mapUv),E.push(R.alphaMapUv),E.push(R.lightMapUv),E.push(R.aoMapUv),E.push(R.bumpMapUv),E.push(R.normalMapUv),E.push(R.displacementMapUv),E.push(R.emissiveMapUv),E.push(R.metalnessMapUv),E.push(R.roughnessMapUv),E.push(R.anisotropyMapUv),E.push(R.clearcoatMapUv),E.push(R.clearcoatNormalMapUv),E.push(R.clearcoatRoughnessMapUv),E.push(R.iridescenceMapUv),E.push(R.iridescenceThicknessMapUv),E.push(R.sheenColorMapUv),E.push(R.sheenRoughnessMapUv),E.push(R.specularMapUv),E.push(R.specularColorMapUv),E.push(R.specularIntensityMapUv),E.push(R.transmissionMapUv),E.push(R.thicknessMapUv),E.push(R.combine),E.push(R.fogExp2),E.push(R.sizeAttenuation),E.push(R.morphTargetsCount),E.push(R.morphAttributeCount),E.push(R.numDirLights),E.push(R.numPointLights),E.push(R.numSpotLights),E.push(R.numSpotLightMaps),E.push(R.numHemiLights),E.push(R.numRectAreaLights),E.push(R.numDirLightShadows),E.push(R.numPointLightShadows),E.push(R.numSpotLightShadows),E.push(R.numSpotLightShadowsWithMaps),E.push(R.numLightProbes),E.push(R.shadowMapType),E.push(R.toneMapping),E.push(R.numClippingPlanes),E.push(R.numClipIntersection),E.push(R.depthPacking)}function S(E,R){l.disableAll(),R.isWebGL2&&l.enable(0),R.supportsVertexTextures&&l.enable(1),R.instancing&&l.enable(2),R.instancingColor&&l.enable(3),R.matcap&&l.enable(4),R.envMap&&l.enable(5),R.normalMapObjectSpace&&l.enable(6),R.normalMapTangentSpace&&l.enable(7),R.clearcoat&&l.enable(8),R.iridescence&&l.enable(9),R.alphaTest&&l.enable(10),R.vertexColors&&l.enable(11),R.vertexAlphas&&l.enable(12),R.vertexUv1s&&l.enable(13),R.vertexUv2s&&l.enable(14),R.vertexUv3s&&l.enable(15),R.vertexTangents&&l.enable(16),R.anisotropy&&l.enable(17),R.alphaHash&&l.enable(18),R.batching&&l.enable(19),E.push(l.mask),l.disableAll(),R.fog&&l.enable(0),R.useFog&&l.enable(1),R.flatShading&&l.enable(2),R.logarithmicDepthBuffer&&l.enable(3),R.skinning&&l.enable(4),R.morphTargets&&l.enable(5),R.morphNormals&&l.enable(6),R.morphColors&&l.enable(7),R.premultipliedAlpha&&l.enable(8),R.shadowMapEnabled&&l.enable(9),R.useLegacyLights&&l.enable(10),R.doubleSided&&l.enable(11),R.flipSided&&l.enable(12),R.useDepthPacking&&l.enable(13),R.dithering&&l.enable(14),R.transmission&&l.enable(15),R.sheen&&l.enable(16),R.opaque&&l.enable(17),R.pointsUvs&&l.enable(18),R.decodeVideoTexture&&l.enable(19),R.alphaToCoverage&&l.enable(20),E.push(l.mask)}function C(E){const R=M[E.type];let k;if(R){const W=ei[R];k=Ux.clone(W.uniforms)}else k=E.uniforms;return k}function P(E,R){let k;for(let W=0,U=d.length;W<U;W++){const G=d[W];if(G.cacheKey===R){k=G,++k.usedTimes;break}}return k===void 0&&(k=new KM(s,R,E,r),d.push(k)),k}function A(E){if(--E.usedTimes===0){const R=d.indexOf(E);d[R]=d[d.length-1],d.pop(),E.destroy()}}function I(E){c.remove(E)}function B(){c.dispose()}return{getParameters:v,getProgramCacheKey:w,getUniforms:C,acquireProgram:P,releaseProgram:A,releaseShaderCache:I,programs:d,dispose:B}}function eE(){let s=new WeakMap;function e(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function t(r){s.delete(r)}function n(r,a,l){s.get(r)[a]=l}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function tE(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function xp(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function bp(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(f,m,g,b,M,x){let v=s[e];return v===void 0?(v={id:f.id,object:f,geometry:m,material:g,groupOrder:b,renderOrder:f.renderOrder,z:M,group:x},s[e]=v):(v.id=f.id,v.object=f,v.geometry=m,v.material=g,v.groupOrder=b,v.renderOrder=f.renderOrder,v.z=M,v.group=x),e++,v}function l(f,m,g,b,M,x){const v=a(f,m,g,b,M,x);g.transmission>0?n.push(v):g.transparent===!0?i.push(v):t.push(v)}function c(f,m,g,b,M,x){const v=a(f,m,g,b,M,x);g.transmission>0?n.unshift(v):g.transparent===!0?i.unshift(v):t.unshift(v)}function h(f,m){t.length>1&&t.sort(f||tE),n.length>1&&n.sort(m||xp),i.length>1&&i.sort(m||xp)}function d(){for(let f=e,m=s.length;f<m;f++){const g=s[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:d,sort:h}}function nE(){let s=new WeakMap;function e(n,i){const r=s.get(n);let a;return r===void 0?(a=new bp,s.set(n,[a])):i>=r.length?(a=new bp,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function iE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new Ve};break;case"SpotLight":t={position:new D,direction:new D,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":t={color:new Ve,position:new D,halfWidth:new D,halfHeight:new D};break}return s[e.id]=t,t}}}function sE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let rE=0;function oE(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function aE(s,e){const t=new iE,n=sE(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)i.probe.push(new D);const r=new D,a=new He,l=new He;function c(d,f){let m=0,g=0,b=0;for(let k=0;k<9;k++)i.probe[k].set(0,0,0);let M=0,x=0,v=0,w=0,y=0,S=0,C=0,P=0,A=0,I=0,B=0;d.sort(oE);const E=f===!0?Math.PI:1;for(let k=0,W=d.length;k<W;k++){const U=d[k],G=U.color,H=U.intensity,X=U.distance,J=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)m+=G.r*H*E,g+=G.g*H*E,b+=G.b*H*E;else if(U.isLightProbe){for(let $=0;$<9;$++)i.probe[$].addScaledVector(U.sh.coefficients[$],H);B++}else if(U.isDirectionalLight){const $=t.get(U);if($.color.copy(U.color).multiplyScalar(U.intensity*E),U.castShadow){const ie=U.shadow,ne=n.get(U);ne.shadowBias=ie.bias,ne.shadowNormalBias=ie.normalBias,ne.shadowRadius=ie.radius,ne.shadowMapSize=ie.mapSize,i.directionalShadow[M]=ne,i.directionalShadowMap[M]=J,i.directionalShadowMatrix[M]=U.shadow.matrix,S++}i.directional[M]=$,M++}else if(U.isSpotLight){const $=t.get(U);$.position.setFromMatrixPosition(U.matrixWorld),$.color.copy(G).multiplyScalar(H*E),$.distance=X,$.coneCos=Math.cos(U.angle),$.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),$.decay=U.decay,i.spot[v]=$;const ie=U.shadow;if(U.map&&(i.spotLightMap[A]=U.map,A++,ie.updateMatrices(U),U.castShadow&&I++),i.spotLightMatrix[v]=ie.matrix,U.castShadow){const ne=n.get(U);ne.shadowBias=ie.bias,ne.shadowNormalBias=ie.normalBias,ne.shadowRadius=ie.radius,ne.shadowMapSize=ie.mapSize,i.spotShadow[v]=ne,i.spotShadowMap[v]=J,P++}v++}else if(U.isRectAreaLight){const $=t.get(U);$.color.copy(G).multiplyScalar(H),$.halfWidth.set(U.width*.5,0,0),$.halfHeight.set(0,U.height*.5,0),i.rectArea[w]=$,w++}else if(U.isPointLight){const $=t.get(U);if($.color.copy(U.color).multiplyScalar(U.intensity*E),$.distance=U.distance,$.decay=U.decay,U.castShadow){const ie=U.shadow,ne=n.get(U);ne.shadowBias=ie.bias,ne.shadowNormalBias=ie.normalBias,ne.shadowRadius=ie.radius,ne.shadowMapSize=ie.mapSize,ne.shadowCameraNear=ie.camera.near,ne.shadowCameraFar=ie.camera.far,i.pointShadow[x]=ne,i.pointShadowMap[x]=J,i.pointShadowMatrix[x]=U.shadow.matrix,C++}i.point[x]=$,x++}else if(U.isHemisphereLight){const $=t.get(U);$.skyColor.copy(U.color).multiplyScalar(H*E),$.groundColor.copy(U.groundColor).multiplyScalar(H*E),i.hemi[y]=$,y++}}w>0&&(e.isWebGL2?s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ge.LTC_FLOAT_1,i.rectAreaLTC2=ge.LTC_FLOAT_2):(i.rectAreaLTC1=ge.LTC_HALF_1,i.rectAreaLTC2=ge.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ge.LTC_FLOAT_1,i.rectAreaLTC2=ge.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ge.LTC_HALF_1,i.rectAreaLTC2=ge.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=m,i.ambient[1]=g,i.ambient[2]=b;const R=i.hash;(R.directionalLength!==M||R.pointLength!==x||R.spotLength!==v||R.rectAreaLength!==w||R.hemiLength!==y||R.numDirectionalShadows!==S||R.numPointShadows!==C||R.numSpotShadows!==P||R.numSpotMaps!==A||R.numLightProbes!==B)&&(i.directional.length=M,i.spot.length=v,i.rectArea.length=w,i.point.length=x,i.hemi.length=y,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=C,i.pointShadowMap.length=C,i.spotShadow.length=P,i.spotShadowMap.length=P,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=C,i.spotLightMatrix.length=P+A-I,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=I,i.numLightProbes=B,R.directionalLength=M,R.pointLength=x,R.spotLength=v,R.rectAreaLength=w,R.hemiLength=y,R.numDirectionalShadows=S,R.numPointShadows=C,R.numSpotShadows=P,R.numSpotMaps=A,R.numLightProbes=B,i.version=rE++)}function h(d,f){let m=0,g=0,b=0,M=0,x=0;const v=f.matrixWorldInverse;for(let w=0,y=d.length;w<y;w++){const S=d[w];if(S.isDirectionalLight){const C=i.directional[m];C.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(v),m++}else if(S.isSpotLight){const C=i.spot[b];C.position.setFromMatrixPosition(S.matrixWorld),C.position.applyMatrix4(v),C.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(v),b++}else if(S.isRectAreaLight){const C=i.rectArea[M];C.position.setFromMatrixPosition(S.matrixWorld),C.position.applyMatrix4(v),l.identity(),a.copy(S.matrixWorld),a.premultiply(v),l.extractRotation(a),C.halfWidth.set(S.width*.5,0,0),C.halfHeight.set(0,S.height*.5,0),C.halfWidth.applyMatrix4(l),C.halfHeight.applyMatrix4(l),M++}else if(S.isPointLight){const C=i.point[g];C.position.setFromMatrixPosition(S.matrixWorld),C.position.applyMatrix4(v),g++}else if(S.isHemisphereLight){const C=i.hemi[x];C.direction.setFromMatrixPosition(S.matrixWorld),C.direction.transformDirection(v),x++}}}return{setup:c,setupView:h,state:i}}function yp(s,e){const t=new aE(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function a(f){n.push(f)}function l(f){i.push(f)}function c(f){t.setup(n,f)}function h(f){t.setupView(n,f)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:c,setupLightsView:h,pushLight:a,pushShadow:l}}function lE(s,e){let t=new WeakMap;function n(r,a=0){const l=t.get(r);let c;return l===void 0?(c=new yp(s,e),t.set(r,[c])):a>=l.length?(c=new yp(s,e),l.push(c)):c=l[a],c}function i(){t=new WeakMap}return{get:n,dispose:i}}class cE extends ii{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=H_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class uE extends ii{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const hE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,dE=`uniform sampler2D shadow_pass;
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
}`;function pE(s,e,t){let n=new Au;const i=new Ae,r=new Ae,a=new _t,l=new cE({depthPacking:G_}),c=new uE,h={},d=t.maxTextureSize,f={[qn]:xn,[xn]:qn,[mn]:mn},m=new nn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ae},radius:{value:4}},vertexShader:hE,fragmentShader:dE}),g=m.clone();g.defines.HORIZONTAL_PASS=1;const b=new tn;b.setAttribute("position",new Ct(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new fe(b,m),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xf;let v=this.type;this.render=function(P,A,I){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||P.length===0)return;const B=s.getRenderTarget(),E=s.getActiveCubeFace(),R=s.getActiveMipmapLevel(),k=s.state;k.setBlending(Bn),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const W=v!==yi&&this.type===yi,U=v===yi&&this.type!==yi;for(let G=0,H=P.length;G<H;G++){const X=P[G],J=X.shadow;if(J===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;i.copy(J.mapSize);const $=J.getFrameExtents();if(i.multiply($),r.copy(J.mapSize),(i.x>d||i.y>d)&&(i.x>d&&(r.x=Math.floor(d/$.x),i.x=r.x*$.x,J.mapSize.x=r.x),i.y>d&&(r.y=Math.floor(d/$.y),i.y=r.y*$.y,J.mapSize.y=r.y)),J.map===null||W===!0||U===!0){const ne=this.type!==yi?{minFilter:dt,magFilter:dt}:{};J.map!==null&&J.map.dispose(),J.map=new Pn(i.x,i.y,ne),J.map.texture.name=X.name+".shadowMap",J.camera.updateProjectionMatrix()}s.setRenderTarget(J.map),s.clear();const ie=J.getViewportCount();for(let ne=0;ne<ie;ne++){const me=J.getViewport(ne);a.set(r.x*me.x,r.y*me.y,r.x*me.z,r.y*me.w),k.viewport(a),J.updateMatrices(X,ne),n=J.getFrustum(),S(A,I,J.camera,X,this.type)}J.isPointLightShadow!==!0&&this.type===yi&&w(J,I),J.needsUpdate=!1}v=this.type,x.needsUpdate=!1,s.setRenderTarget(B,E,R)};function w(P,A){const I=e.update(M);m.defines.VSM_SAMPLES!==P.blurSamples&&(m.defines.VSM_SAMPLES=P.blurSamples,g.defines.VSM_SAMPLES=P.blurSamples,m.needsUpdate=!0,g.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Pn(i.x,i.y)),m.uniforms.shadow_pass.value=P.map.texture,m.uniforms.resolution.value=P.mapSize,m.uniforms.radius.value=P.radius,s.setRenderTarget(P.mapPass),s.clear(),s.renderBufferDirect(A,null,I,m,M,null),g.uniforms.shadow_pass.value=P.mapPass.texture,g.uniforms.resolution.value=P.mapSize,g.uniforms.radius.value=P.radius,s.setRenderTarget(P.map),s.clear(),s.renderBufferDirect(A,null,I,g,M,null)}function y(P,A,I,B){let E=null;const R=I.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(R!==void 0)E=R;else if(E=I.isPointLight===!0?c:l,s.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const k=E.uuid,W=A.uuid;let U=h[k];U===void 0&&(U={},h[k]=U);let G=U[W];G===void 0&&(G=E.clone(),U[W]=G,A.addEventListener("dispose",C)),E=G}if(E.visible=A.visible,E.wireframe=A.wireframe,B===yi?E.side=A.shadowSide!==null?A.shadowSide:A.side:E.side=A.shadowSide!==null?A.shadowSide:f[A.side],E.alphaMap=A.alphaMap,E.alphaTest=A.alphaTest,E.map=A.map,E.clipShadows=A.clipShadows,E.clippingPlanes=A.clippingPlanes,E.clipIntersection=A.clipIntersection,E.displacementMap=A.displacementMap,E.displacementScale=A.displacementScale,E.displacementBias=A.displacementBias,E.wireframeLinewidth=A.wireframeLinewidth,E.linewidth=A.linewidth,I.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const k=s.properties.get(E);k.light=I}return E}function S(P,A,I,B,E){if(P.visible===!1)return;if(P.layers.test(A.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&E===yi)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,P.matrixWorld);const W=e.update(P),U=P.material;if(Array.isArray(U)){const G=W.groups;for(let H=0,X=G.length;H<X;H++){const J=G[H],$=U[J.materialIndex];if($&&$.visible){const ie=y(P,$,B,E);P.onBeforeShadow(s,P,A,I,W,ie,J),s.renderBufferDirect(I,null,W,ie,P,J),P.onAfterShadow(s,P,A,I,W,ie,J)}}}else if(U.visible){const G=y(P,U,B,E);P.onBeforeShadow(s,P,A,I,W,G,null),s.renderBufferDirect(I,null,W,G,P,null),P.onAfterShadow(s,P,A,I,W,G,null)}}const k=P.children;for(let W=0,U=k.length;W<U;W++)S(k[W],A,I,B,E)}function C(P){P.target.removeEventListener("dispose",C);for(const I in h){const B=h[I],E=P.target.uuid;E in B&&(B[E].dispose(),delete B[E])}}}function fE(s,e,t){const n=t.isWebGL2;function i(){let O=!1;const re=new _t;let le=null;const Ee=new _t(0,0,0,0);return{setMask:function(Ue){le!==Ue&&!O&&(s.colorMask(Ue,Ue,Ue,Ue),le=Ue)},setLocked:function(Ue){O=Ue},setClear:function(Ue,nt,tt,ct,Bt){Bt===!0&&(Ue*=ct,nt*=ct,tt*=ct),re.set(Ue,nt,tt,ct),Ee.equals(re)===!1&&(s.clearColor(Ue,nt,tt,ct),Ee.copy(re))},reset:function(){O=!1,le=null,Ee.set(-1,0,0,0)}}}function r(){let O=!1,re=null,le=null,Ee=null;return{setTest:function(Ue){Ue?ye(s.DEPTH_TEST):Ge(s.DEPTH_TEST)},setMask:function(Ue){re!==Ue&&!O&&(s.depthMask(Ue),re=Ue)},setFunc:function(Ue){if(le!==Ue){switch(Ue){case b_:s.depthFunc(s.NEVER);break;case y_:s.depthFunc(s.ALWAYS);break;case w_:s.depthFunc(s.LESS);break;case ja:s.depthFunc(s.LEQUAL);break;case M_:s.depthFunc(s.EQUAL);break;case E_:s.depthFunc(s.GEQUAL);break;case S_:s.depthFunc(s.GREATER);break;case T_:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}le=Ue}},setLocked:function(Ue){O=Ue},setClear:function(Ue){Ee!==Ue&&(s.clearDepth(Ue),Ee=Ue)},reset:function(){O=!1,re=null,le=null,Ee=null}}}function a(){let O=!1,re=null,le=null,Ee=null,Ue=null,nt=null,tt=null,ct=null,Bt=null;return{setTest:function(ot){O||(ot?ye(s.STENCIL_TEST):Ge(s.STENCIL_TEST))},setMask:function(ot){re!==ot&&!O&&(s.stencilMask(ot),re=ot)},setFunc:function(ot,Nt,sn){(le!==ot||Ee!==Nt||Ue!==sn)&&(s.stencilFunc(ot,Nt,sn),le=ot,Ee=Nt,Ue=sn)},setOp:function(ot,Nt,sn){(nt!==ot||tt!==Nt||ct!==sn)&&(s.stencilOp(ot,Nt,sn),nt=ot,tt=Nt,ct=sn)},setLocked:function(ot){O=ot},setClear:function(ot){Bt!==ot&&(s.clearStencil(ot),Bt=ot)},reset:function(){O=!1,re=null,le=null,Ee=null,Ue=null,nt=null,tt=null,ct=null,Bt=null}}}const l=new i,c=new r,h=new a,d=new WeakMap,f=new WeakMap;let m={},g={},b=new WeakMap,M=[],x=null,v=!1,w=null,y=null,S=null,C=null,P=null,A=null,I=null,B=new Ve(0,0,0),E=0,R=!1,k=null,W=null,U=null,G=null,H=null;const X=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,$=0;const ie=s.getParameter(s.VERSION);ie.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(ie)[1]),J=$>=1):ie.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),J=$>=2);let ne=null,me={};const pe=s.getParameter(s.SCISSOR_BOX),K=s.getParameter(s.VIEWPORT),se=new _t().fromArray(pe),be=new _t().fromArray(K);function Te(O,re,le,Ee){const Ue=new Uint8Array(4),nt=s.createTexture();s.bindTexture(O,nt),s.texParameteri(O,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(O,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let tt=0;tt<le;tt++)n&&(O===s.TEXTURE_3D||O===s.TEXTURE_2D_ARRAY)?s.texImage3D(re,0,s.RGBA,1,1,Ee,0,s.RGBA,s.UNSIGNED_BYTE,Ue):s.texImage2D(re+tt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ue);return nt}const Ce={};Ce[s.TEXTURE_2D]=Te(s.TEXTURE_2D,s.TEXTURE_2D,1),Ce[s.TEXTURE_CUBE_MAP]=Te(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Ce[s.TEXTURE_2D_ARRAY]=Te(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Ce[s.TEXTURE_3D]=Te(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),l.setClear(0,0,0,1),c.setClear(1),h.setClear(0),ye(s.DEPTH_TEST),c.setFunc(ja),je(!1),F(Jh),ye(s.CULL_FACE),Re(Bn);function ye(O){m[O]!==!0&&(s.enable(O),m[O]=!0)}function Ge(O){m[O]!==!1&&(s.disable(O),m[O]=!1)}function Be(O,re){return g[O]!==re?(s.bindFramebuffer(O,re),g[O]=re,n&&(O===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=re),O===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=re)),!0):!1}function q(O,re){let le=M,Ee=!1;if(O)if(le=b.get(re),le===void 0&&(le=[],b.set(re,le)),O.isWebGLMultipleRenderTargets){const Ue=O.texture;if(le.length!==Ue.length||le[0]!==s.COLOR_ATTACHMENT0){for(let nt=0,tt=Ue.length;nt<tt;nt++)le[nt]=s.COLOR_ATTACHMENT0+nt;le.length=Ue.length,Ee=!0}}else le[0]!==s.COLOR_ATTACHMENT0&&(le[0]=s.COLOR_ATTACHMENT0,Ee=!0);else le[0]!==s.BACK&&(le[0]=s.BACK,Ee=!0);Ee&&(t.isWebGL2?s.drawBuffers(le):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(le))}function Dt(O){return x!==O?(s.useProgram(O),x=O,!0):!1}const Pe={[ms]:s.FUNC_ADD,[r_]:s.FUNC_SUBTRACT,[o_]:s.FUNC_REVERSE_SUBTRACT};if(n)Pe[id]=s.MIN,Pe[sd]=s.MAX;else{const O=e.get("EXT_blend_minmax");O!==null&&(Pe[id]=O.MIN_EXT,Pe[sd]=O.MAX_EXT)}const We={[a_]:s.ZERO,[l_]:s.ONE,[c_]:s.SRC_COLOR,[Hc]:s.SRC_ALPHA,[m_]:s.SRC_ALPHA_SATURATE,[p_]:s.DST_COLOR,[h_]:s.DST_ALPHA,[u_]:s.ONE_MINUS_SRC_COLOR,[Gc]:s.ONE_MINUS_SRC_ALPHA,[f_]:s.ONE_MINUS_DST_COLOR,[d_]:s.ONE_MINUS_DST_ALPHA,[g_]:s.CONSTANT_COLOR,[v_]:s.ONE_MINUS_CONSTANT_COLOR,[__]:s.CONSTANT_ALPHA,[x_]:s.ONE_MINUS_CONSTANT_ALPHA};function Re(O,re,le,Ee,Ue,nt,tt,ct,Bt,ot){if(O===Bn){v===!0&&(Ge(s.BLEND),v=!1);return}if(v===!1&&(ye(s.BLEND),v=!0),O!==s_){if(O!==w||ot!==R){if((y!==ms||P!==ms)&&(s.blendEquation(s.FUNC_ADD),y=ms,P=ms),ot)switch(O){case _r:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ed:s.blendFunc(s.ONE,s.ONE);break;case td:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case nd:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case _r:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ed:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case td:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case nd:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}S=null,C=null,A=null,I=null,B.set(0,0,0),E=0,w=O,R=ot}return}Ue=Ue||re,nt=nt||le,tt=tt||Ee,(re!==y||Ue!==P)&&(s.blendEquationSeparate(Pe[re],Pe[Ue]),y=re,P=Ue),(le!==S||Ee!==C||nt!==A||tt!==I)&&(s.blendFuncSeparate(We[le],We[Ee],We[nt],We[tt]),S=le,C=Ee,A=nt,I=tt),(ct.equals(B)===!1||Bt!==E)&&(s.blendColor(ct.r,ct.g,ct.b,Bt),B.copy(ct),E=Bt),w=O,R=!1}function bt(O,re){O.side===mn?Ge(s.CULL_FACE):ye(s.CULL_FACE);let le=O.side===xn;re&&(le=!le),je(le),O.blending===_r&&O.transparent===!1?Re(Bn):Re(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),c.setFunc(O.depthFunc),c.setTest(O.depthTest),c.setMask(O.depthWrite),l.setMask(O.colorWrite);const Ee=O.stencilWrite;h.setTest(Ee),Ee&&(h.setMask(O.stencilWriteMask),h.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),h.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Z(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?ye(s.SAMPLE_ALPHA_TO_COVERAGE):Ge(s.SAMPLE_ALPHA_TO_COVERAGE)}function je(O){k!==O&&(O?s.frontFace(s.CW):s.frontFace(s.CCW),k=O)}function F(O){O!==t_?(ye(s.CULL_FACE),O!==W&&(O===Jh?s.cullFace(s.BACK):O===n_?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ge(s.CULL_FACE),W=O}function L(O){O!==U&&(J&&s.lineWidth(O),U=O)}function Z(O,re,le){O?(ye(s.POLYGON_OFFSET_FILL),(G!==re||H!==le)&&(s.polygonOffset(re,le),G=re,H=le)):Ge(s.POLYGON_OFFSET_FILL)}function he(O){O?ye(s.SCISSOR_TEST):Ge(s.SCISSOR_TEST)}function ae(O){O===void 0&&(O=s.TEXTURE0+X-1),ne!==O&&(s.activeTexture(O),ne=O)}function ce(O,re,le){le===void 0&&(ne===null?le=s.TEXTURE0+X-1:le=ne);let Ee=me[le];Ee===void 0&&(Ee={type:void 0,texture:void 0},me[le]=Ee),(Ee.type!==O||Ee.texture!==re)&&(ne!==le&&(s.activeTexture(le),ne=le),s.bindTexture(O,re||Ce[O]),Ee.type=O,Ee.texture=re)}function Se(){const O=me[ne];O!==void 0&&O.type!==void 0&&(s.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function ve(){try{s.compressedTexImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function we(){try{s.compressedTexImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Oe(){try{s.texSubImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ze(){try{s.texSubImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function oe(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function st(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Je(){try{s.texStorage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Xe(){try{s.texStorage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Le(){try{s.texImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function xe(){try{s.texImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function $e(O){se.equals(O)===!1&&(s.scissor(O.x,O.y,O.z,O.w),se.copy(O))}function V(O){be.equals(O)===!1&&(s.viewport(O.x,O.y,O.z,O.w),be.copy(O))}function de(O,re){let le=f.get(re);le===void 0&&(le=new WeakMap,f.set(re,le));let Ee=le.get(O);Ee===void 0&&(Ee=s.getUniformBlockIndex(re,O.name),le.set(O,Ee))}function _e(O,re){const Ee=f.get(re).get(O);d.get(re)!==Ee&&(s.uniformBlockBinding(re,Ee,O.__bindingPointIndex),d.set(re,Ee))}function Ie(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),m={},ne=null,me={},g={},b=new WeakMap,M=[],x=null,v=!1,w=null,y=null,S=null,C=null,P=null,A=null,I=null,B=new Ve(0,0,0),E=0,R=!1,k=null,W=null,U=null,G=null,H=null,se.set(0,0,s.canvas.width,s.canvas.height),be.set(0,0,s.canvas.width,s.canvas.height),l.reset(),c.reset(),h.reset()}return{buffers:{color:l,depth:c,stencil:h},enable:ye,disable:Ge,bindFramebuffer:Be,drawBuffers:q,useProgram:Dt,setBlending:Re,setMaterial:bt,setFlipSided:je,setCullFace:F,setLineWidth:L,setPolygonOffset:Z,setScissorTest:he,activeTexture:ae,bindTexture:ce,unbindTexture:Se,compressedTexImage2D:ve,compressedTexImage3D:we,texImage2D:Le,texImage3D:xe,updateUBOMapping:de,uniformBlockBinding:_e,texStorage2D:Je,texStorage3D:Xe,texSubImage2D:Oe,texSubImage3D:ze,compressedTexSubImage2D:oe,compressedTexSubImage3D:st,scissor:$e,viewport:V,reset:Ie}}function mE(s,e,t,n,i,r,a){const l=i.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new WeakMap;let f;const m=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(F,L){return g?new OffscreenCanvas(F,L):Ro("canvas")}function M(F,L,Z,he){let ae=1;if((F.width>he||F.height>he)&&(ae=he/Math.max(F.width,F.height)),ae<1||L===!0)if(typeof HTMLImageElement!="undefined"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&F instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&F instanceof ImageBitmap){const ce=L?Ja:Math.floor,Se=ce(ae*F.width),ve=ce(ae*F.height);f===void 0&&(f=b(Se,ve));const we=Z?b(Se,ve):f;return we.width=Se,we.height=ve,we.getContext("2d").drawImage(F,0,0,Se,ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+F.width+"x"+F.height+") to ("+Se+"x"+ve+")."),we}else return"data"in F&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+F.width+"x"+F.height+")."),F;return F}function x(F){return Zc(F.width)&&Zc(F.height)}function v(F){return l?!1:F.wrapS!==hn||F.wrapT!==hn||F.minFilter!==dt&&F.minFilter!==Tt}function w(F,L){return F.generateMipmaps&&L&&F.minFilter!==dt&&F.minFilter!==Tt}function y(F){s.generateMipmap(F)}function S(F,L,Z,he,ae=!1){if(l===!1)return L;if(F!==null){if(s[F]!==void 0)return s[F];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let ce=L;if(L===s.RED&&(Z===s.FLOAT&&(ce=s.R32F),Z===s.HALF_FLOAT&&(ce=s.R16F),Z===s.UNSIGNED_BYTE&&(ce=s.R8)),L===s.RED_INTEGER&&(Z===s.UNSIGNED_BYTE&&(ce=s.R8UI),Z===s.UNSIGNED_SHORT&&(ce=s.R16UI),Z===s.UNSIGNED_INT&&(ce=s.R32UI),Z===s.BYTE&&(ce=s.R8I),Z===s.SHORT&&(ce=s.R16I),Z===s.INT&&(ce=s.R32I)),L===s.RG&&(Z===s.FLOAT&&(ce=s.RG32F),Z===s.HALF_FLOAT&&(ce=s.RG16F),Z===s.UNSIGNED_BYTE&&(ce=s.RG8)),L===s.RGBA){const Se=ae?Ka:pt.getTransfer(he);Z===s.FLOAT&&(ce=s.RGBA32F),Z===s.HALF_FLOAT&&(ce=s.RGBA16F),Z===s.UNSIGNED_BYTE&&(ce=Se===St?s.SRGB8_ALPHA8:s.RGBA8),Z===s.UNSIGNED_SHORT_4_4_4_4&&(ce=s.RGBA4),Z===s.UNSIGNED_SHORT_5_5_5_1&&(ce=s.RGB5_A1)}return(ce===s.R16F||ce===s.R32F||ce===s.RG16F||ce===s.RG32F||ce===s.RGBA16F||ce===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function C(F,L,Z){return w(F,Z)===!0||F.isFramebufferTexture&&F.minFilter!==dt&&F.minFilter!==Tt?Math.log2(Math.max(L.width,L.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?L.mipmaps.length:1}function P(F){return F===dt||F===jc||F===pr?s.NEAREST:s.LINEAR}function A(F){const L=F.target;L.removeEventListener("dispose",A),B(L),L.isVideoTexture&&d.delete(L)}function I(F){const L=F.target;L.removeEventListener("dispose",I),R(L)}function B(F){const L=n.get(F);if(L.__webglInit===void 0)return;const Z=F.source,he=m.get(Z);if(he){const ae=he[L.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&E(F),Object.keys(he).length===0&&m.delete(Z)}n.remove(F)}function E(F){const L=n.get(F);s.deleteTexture(L.__webglTexture);const Z=F.source,he=m.get(Z);delete he[L.__cacheKey],a.memory.textures--}function R(F){const L=F.texture,Z=n.get(F),he=n.get(L);if(he.__webglTexture!==void 0&&(s.deleteTexture(he.__webglTexture),a.memory.textures--),F.depthTexture&&F.depthTexture.dispose(),F.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++){if(Array.isArray(Z.__webglFramebuffer[ae]))for(let ce=0;ce<Z.__webglFramebuffer[ae].length;ce++)s.deleteFramebuffer(Z.__webglFramebuffer[ae][ce]);else s.deleteFramebuffer(Z.__webglFramebuffer[ae]);Z.__webglDepthbuffer&&s.deleteRenderbuffer(Z.__webglDepthbuffer[ae])}else{if(Array.isArray(Z.__webglFramebuffer))for(let ae=0;ae<Z.__webglFramebuffer.length;ae++)s.deleteFramebuffer(Z.__webglFramebuffer[ae]);else s.deleteFramebuffer(Z.__webglFramebuffer);if(Z.__webglDepthbuffer&&s.deleteRenderbuffer(Z.__webglDepthbuffer),Z.__webglMultisampledFramebuffer&&s.deleteFramebuffer(Z.__webglMultisampledFramebuffer),Z.__webglColorRenderbuffer)for(let ae=0;ae<Z.__webglColorRenderbuffer.length;ae++)Z.__webglColorRenderbuffer[ae]&&s.deleteRenderbuffer(Z.__webglColorRenderbuffer[ae]);Z.__webglDepthRenderbuffer&&s.deleteRenderbuffer(Z.__webglDepthRenderbuffer)}if(F.isWebGLMultipleRenderTargets)for(let ae=0,ce=L.length;ae<ce;ae++){const Se=n.get(L[ae]);Se.__webglTexture&&(s.deleteTexture(Se.__webglTexture),a.memory.textures--),n.remove(L[ae])}n.remove(L),n.remove(F)}let k=0;function W(){k=0}function U(){const F=k;return F>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+F+" texture units while this GPU supports only "+i.maxTextures),k+=1,F}function G(F){const L=[];return L.push(F.wrapS),L.push(F.wrapT),L.push(F.wrapR||0),L.push(F.magFilter),L.push(F.minFilter),L.push(F.anisotropy),L.push(F.internalFormat),L.push(F.format),L.push(F.type),L.push(F.generateMipmaps),L.push(F.premultiplyAlpha),L.push(F.flipY),L.push(F.unpackAlignment),L.push(F.colorSpace),L.join()}function H(F,L){const Z=n.get(F);if(F.isVideoTexture&&bt(F),F.isRenderTargetTexture===!1&&F.version>0&&Z.__version!==F.version){const he=F.image;if(he===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(he.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{se(Z,F,L);return}}t.bindTexture(s.TEXTURE_2D,Z.__webglTexture,s.TEXTURE0+L)}function X(F,L){const Z=n.get(F);if(F.version>0&&Z.__version!==F.version){se(Z,F,L);return}t.bindTexture(s.TEXTURE_2D_ARRAY,Z.__webglTexture,s.TEXTURE0+L)}function J(F,L){const Z=n.get(F);if(F.version>0&&Z.__version!==F.version){se(Z,F,L);return}t.bindTexture(s.TEXTURE_3D,Z.__webglTexture,s.TEXTURE0+L)}function $(F,L){const Z=n.get(F);if(F.version>0&&Z.__version!==F.version){be(Z,F,L);return}t.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture,s.TEXTURE0+L)}const ie={[Mr]:s.REPEAT,[hn]:s.CLAMP_TO_EDGE,[qa]:s.MIRRORED_REPEAT},ne={[dt]:s.NEAREST,[jc]:s.NEAREST_MIPMAP_NEAREST,[pr]:s.NEAREST_MIPMAP_LINEAR,[Tt]:s.LINEAR,[ka]:s.LINEAR_MIPMAP_NEAREST,[Ei]:s.LINEAR_MIPMAP_LINEAR},me={[X_]:s.NEVER,[Z_]:s.ALWAYS,[j_]:s.LESS,[im]:s.LEQUAL,[q_]:s.EQUAL,[$_]:s.GEQUAL,[Y_]:s.GREATER,[K_]:s.NOTEQUAL};function pe(F,L,Z){if(L.type===ft&&e.has("OES_texture_float_linear")===!1&&(L.magFilter===Tt||L.magFilter===ka||L.magFilter===pr||L.magFilter===Ei||L.minFilter===Tt||L.minFilter===ka||L.minFilter===pr||L.minFilter===Ei)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),Z?(s.texParameteri(F,s.TEXTURE_WRAP_S,ie[L.wrapS]),s.texParameteri(F,s.TEXTURE_WRAP_T,ie[L.wrapT]),(F===s.TEXTURE_3D||F===s.TEXTURE_2D_ARRAY)&&s.texParameteri(F,s.TEXTURE_WRAP_R,ie[L.wrapR]),s.texParameteri(F,s.TEXTURE_MAG_FILTER,ne[L.magFilter]),s.texParameteri(F,s.TEXTURE_MIN_FILTER,ne[L.minFilter])):(s.texParameteri(F,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(F,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(F===s.TEXTURE_3D||F===s.TEXTURE_2D_ARRAY)&&s.texParameteri(F,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(L.wrapS!==hn||L.wrapT!==hn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(F,s.TEXTURE_MAG_FILTER,P(L.magFilter)),s.texParameteri(F,s.TEXTURE_MIN_FILTER,P(L.minFilter)),L.minFilter!==dt&&L.minFilter!==Tt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),L.compareFunction&&(s.texParameteri(F,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(F,s.TEXTURE_COMPARE_FUNC,me[L.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const he=e.get("EXT_texture_filter_anisotropic");if(L.magFilter===dt||L.minFilter!==pr&&L.minFilter!==Ei||L.type===ft&&e.has("OES_texture_float_linear")===!1||l===!1&&L.type===si&&e.has("OES_texture_half_float_linear")===!1)return;(L.anisotropy>1||n.get(L).__currentAnisotropy)&&(s.texParameterf(F,he.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(L.anisotropy,i.getMaxAnisotropy())),n.get(L).__currentAnisotropy=L.anisotropy)}}function K(F,L){let Z=!1;F.__webglInit===void 0&&(F.__webglInit=!0,L.addEventListener("dispose",A));const he=L.source;let ae=m.get(he);ae===void 0&&(ae={},m.set(he,ae));const ce=G(L);if(ce!==F.__cacheKey){ae[ce]===void 0&&(ae[ce]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,Z=!0),ae[ce].usedTimes++;const Se=ae[F.__cacheKey];Se!==void 0&&(ae[F.__cacheKey].usedTimes--,Se.usedTimes===0&&E(L)),F.__cacheKey=ce,F.__webglTexture=ae[ce].texture}return Z}function se(F,L,Z){let he=s.TEXTURE_2D;(L.isDataArrayTexture||L.isCompressedArrayTexture)&&(he=s.TEXTURE_2D_ARRAY),L.isData3DTexture&&(he=s.TEXTURE_3D);const ae=K(F,L),ce=L.source;t.bindTexture(he,F.__webglTexture,s.TEXTURE0+Z);const Se=n.get(ce);if(ce.version!==Se.__version||ae===!0){t.activeTexture(s.TEXTURE0+Z);const ve=pt.getPrimaries(pt.workingColorSpace),we=L.colorSpace===Un?null:pt.getPrimaries(L.colorSpace),Oe=L.colorSpace===Un||ve===we?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,L.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,L.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe);const ze=v(L)&&x(L.image)===!1;let oe=M(L.image,ze,!1,i.maxTextureSize);oe=je(L,oe);const st=x(oe)||l,Je=r.convert(L.format,L.colorSpace);let Xe=r.convert(L.type),Le=S(L.internalFormat,Je,Xe,L.colorSpace,L.isVideoTexture);pe(he,L,st);let xe;const $e=L.mipmaps,V=l&&L.isVideoTexture!==!0&&Le!==Jf,de=Se.__version===void 0||ae===!0,_e=ce.dataReady,Ie=C(L,oe,st);if(L.isDepthTexture)Le=s.DEPTH_COMPONENT,l?L.type===ft?Le=s.DEPTH_COMPONENT32F:L.type===Tn?Le=s.DEPTH_COMPONENT24:L.type===bs?Le=s.DEPTH24_STENCIL8:Le=s.DEPTH_COMPONENT16:L.type===ft&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),L.format===ys&&Le===s.DEPTH_COMPONENT&&L.type!==sl&&L.type!==Tn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),L.type=Tn,Xe=r.convert(L.type)),L.format===Er&&Le===s.DEPTH_COMPONENT&&(Le=s.DEPTH_STENCIL,L.type!==bs&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),L.type=bs,Xe=r.convert(L.type))),de&&(V?t.texStorage2D(s.TEXTURE_2D,1,Le,oe.width,oe.height):t.texImage2D(s.TEXTURE_2D,0,Le,oe.width,oe.height,0,Je,Xe,null));else if(L.isDataTexture)if($e.length>0&&st){V&&de&&t.texStorage2D(s.TEXTURE_2D,Ie,Le,$e[0].width,$e[0].height);for(let O=0,re=$e.length;O<re;O++)xe=$e[O],V?_e&&t.texSubImage2D(s.TEXTURE_2D,O,0,0,xe.width,xe.height,Je,Xe,xe.data):t.texImage2D(s.TEXTURE_2D,O,Le,xe.width,xe.height,0,Je,Xe,xe.data);L.generateMipmaps=!1}else V?(de&&t.texStorage2D(s.TEXTURE_2D,Ie,Le,oe.width,oe.height),_e&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,oe.width,oe.height,Je,Xe,oe.data)):t.texImage2D(s.TEXTURE_2D,0,Le,oe.width,oe.height,0,Je,Xe,oe.data);else if(L.isCompressedTexture)if(L.isCompressedArrayTexture){V&&de&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ie,Le,$e[0].width,$e[0].height,oe.depth);for(let O=0,re=$e.length;O<re;O++)xe=$e[O],L.format!==Wt?Je!==null?V?_e&&t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,O,0,0,0,xe.width,xe.height,oe.depth,Je,xe.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,O,Le,xe.width,xe.height,oe.depth,0,xe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):V?_e&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,O,0,0,0,xe.width,xe.height,oe.depth,Je,Xe,xe.data):t.texImage3D(s.TEXTURE_2D_ARRAY,O,Le,xe.width,xe.height,oe.depth,0,Je,Xe,xe.data)}else{V&&de&&t.texStorage2D(s.TEXTURE_2D,Ie,Le,$e[0].width,$e[0].height);for(let O=0,re=$e.length;O<re;O++)xe=$e[O],L.format!==Wt?Je!==null?V?_e&&t.compressedTexSubImage2D(s.TEXTURE_2D,O,0,0,xe.width,xe.height,Je,xe.data):t.compressedTexImage2D(s.TEXTURE_2D,O,Le,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):V?_e&&t.texSubImage2D(s.TEXTURE_2D,O,0,0,xe.width,xe.height,Je,Xe,xe.data):t.texImage2D(s.TEXTURE_2D,O,Le,xe.width,xe.height,0,Je,Xe,xe.data)}else if(L.isDataArrayTexture)V?(de&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ie,Le,oe.width,oe.height,oe.depth),_e&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,Je,Xe,oe.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,Le,oe.width,oe.height,oe.depth,0,Je,Xe,oe.data);else if(L.isData3DTexture)V?(de&&t.texStorage3D(s.TEXTURE_3D,Ie,Le,oe.width,oe.height,oe.depth),_e&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,Je,Xe,oe.data)):t.texImage3D(s.TEXTURE_3D,0,Le,oe.width,oe.height,oe.depth,0,Je,Xe,oe.data);else if(L.isFramebufferTexture){if(de)if(V)t.texStorage2D(s.TEXTURE_2D,Ie,Le,oe.width,oe.height);else{let O=oe.width,re=oe.height;for(let le=0;le<Ie;le++)t.texImage2D(s.TEXTURE_2D,le,Le,O,re,0,Je,Xe,null),O>>=1,re>>=1}}else if($e.length>0&&st){V&&de&&t.texStorage2D(s.TEXTURE_2D,Ie,Le,$e[0].width,$e[0].height);for(let O=0,re=$e.length;O<re;O++)xe=$e[O],V?_e&&t.texSubImage2D(s.TEXTURE_2D,O,0,0,Je,Xe,xe):t.texImage2D(s.TEXTURE_2D,O,Le,Je,Xe,xe);L.generateMipmaps=!1}else V?(de&&t.texStorage2D(s.TEXTURE_2D,Ie,Le,oe.width,oe.height),_e&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Je,Xe,oe)):t.texImage2D(s.TEXTURE_2D,0,Le,Je,Xe,oe);w(L,st)&&y(he),Se.__version=ce.version,L.onUpdate&&L.onUpdate(L)}F.__version=L.version}function be(F,L,Z){if(L.image.length!==6)return;const he=K(F,L),ae=L.source;t.bindTexture(s.TEXTURE_CUBE_MAP,F.__webglTexture,s.TEXTURE0+Z);const ce=n.get(ae);if(ae.version!==ce.__version||he===!0){t.activeTexture(s.TEXTURE0+Z);const Se=pt.getPrimaries(pt.workingColorSpace),ve=L.colorSpace===Un?null:pt.getPrimaries(L.colorSpace),we=L.colorSpace===Un||Se===ve?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,L.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,L.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);const Oe=L.isCompressedTexture||L.image[0].isCompressedTexture,ze=L.image[0]&&L.image[0].isDataTexture,oe=[];for(let O=0;O<6;O++)!Oe&&!ze?oe[O]=M(L.image[O],!1,!0,i.maxCubemapSize):oe[O]=ze?L.image[O].image:L.image[O],oe[O]=je(L,oe[O]);const st=oe[0],Je=x(st)||l,Xe=r.convert(L.format,L.colorSpace),Le=r.convert(L.type),xe=S(L.internalFormat,Xe,Le,L.colorSpace),$e=l&&L.isVideoTexture!==!0,V=ce.__version===void 0||he===!0,de=ae.dataReady;let _e=C(L,st,Je);pe(s.TEXTURE_CUBE_MAP,L,Je);let Ie;if(Oe){$e&&V&&t.texStorage2D(s.TEXTURE_CUBE_MAP,_e,xe,st.width,st.height);for(let O=0;O<6;O++){Ie=oe[O].mipmaps;for(let re=0;re<Ie.length;re++){const le=Ie[re];L.format!==Wt?Xe!==null?$e?de&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,re,0,0,le.width,le.height,Xe,le.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,re,xe,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$e?de&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,re,0,0,le.width,le.height,Xe,Le,le.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,re,xe,le.width,le.height,0,Xe,Le,le.data)}}}else{Ie=L.mipmaps,$e&&V&&(Ie.length>0&&_e++,t.texStorage2D(s.TEXTURE_CUBE_MAP,_e,xe,oe[0].width,oe[0].height));for(let O=0;O<6;O++)if(ze){$e?de&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,0,0,oe[O].width,oe[O].height,Xe,Le,oe[O].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,xe,oe[O].width,oe[O].height,0,Xe,Le,oe[O].data);for(let re=0;re<Ie.length;re++){const Ee=Ie[re].image[O].image;$e?de&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,re+1,0,0,Ee.width,Ee.height,Xe,Le,Ee.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,re+1,xe,Ee.width,Ee.height,0,Xe,Le,Ee.data)}}else{$e?de&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,0,0,Xe,Le,oe[O]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,xe,Xe,Le,oe[O]);for(let re=0;re<Ie.length;re++){const le=Ie[re];$e?de&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,re+1,0,0,Xe,Le,le.image[O]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,re+1,xe,Xe,Le,le.image[O])}}}w(L,Je)&&y(s.TEXTURE_CUBE_MAP),ce.__version=ae.version,L.onUpdate&&L.onUpdate(L)}F.__version=L.version}function Te(F,L,Z,he,ae,ce){const Se=r.convert(Z.format,Z.colorSpace),ve=r.convert(Z.type),we=S(Z.internalFormat,Se,ve,Z.colorSpace);if(!n.get(L).__hasExternalTextures){const ze=Math.max(1,L.width>>ce),oe=Math.max(1,L.height>>ce);ae===s.TEXTURE_3D||ae===s.TEXTURE_2D_ARRAY?t.texImage3D(ae,ce,we,ze,oe,L.depth,0,Se,ve,null):t.texImage2D(ae,ce,we,ze,oe,0,Se,ve,null)}t.bindFramebuffer(s.FRAMEBUFFER,F),Re(L)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,he,ae,n.get(Z).__webglTexture,0,We(L)):(ae===s.TEXTURE_2D||ae>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,he,ae,n.get(Z).__webglTexture,ce),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ce(F,L,Z){if(s.bindRenderbuffer(s.RENDERBUFFER,F),L.depthBuffer&&!L.stencilBuffer){let he=l===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(Z||Re(L)){const ae=L.depthTexture;ae&&ae.isDepthTexture&&(ae.type===ft?he=s.DEPTH_COMPONENT32F:ae.type===Tn&&(he=s.DEPTH_COMPONENT24));const ce=We(L);Re(L)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ce,he,L.width,L.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,ce,he,L.width,L.height)}else s.renderbufferStorage(s.RENDERBUFFER,he,L.width,L.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,F)}else if(L.depthBuffer&&L.stencilBuffer){const he=We(L);Z&&Re(L)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,he,s.DEPTH24_STENCIL8,L.width,L.height):Re(L)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,he,s.DEPTH24_STENCIL8,L.width,L.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,F)}else{const he=L.isWebGLMultipleRenderTargets===!0?L.texture:[L.texture];for(let ae=0;ae<he.length;ae++){const ce=he[ae],Se=r.convert(ce.format,ce.colorSpace),ve=r.convert(ce.type),we=S(ce.internalFormat,Se,ve,ce.colorSpace),Oe=We(L);Z&&Re(L)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Oe,we,L.width,L.height):Re(L)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Oe,we,L.width,L.height):s.renderbufferStorage(s.RENDERBUFFER,we,L.width,L.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ye(F,L){if(L&&L.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,F),!(L.depthTexture&&L.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(L.depthTexture).__webglTexture||L.depthTexture.image.width!==L.width||L.depthTexture.image.height!==L.height)&&(L.depthTexture.image.width=L.width,L.depthTexture.image.height=L.height,L.depthTexture.needsUpdate=!0),H(L.depthTexture,0);const he=n.get(L.depthTexture).__webglTexture,ae=We(L);if(L.depthTexture.format===ys)Re(L)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,he,0,ae):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,he,0);else if(L.depthTexture.format===Er)Re(L)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,he,0,ae):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,he,0);else throw new Error("Unknown depthTexture format")}function Ge(F){const L=n.get(F),Z=F.isWebGLCubeRenderTarget===!0;if(F.depthTexture&&!L.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");ye(L.__webglFramebuffer,F)}else if(Z){L.__webglDepthbuffer=[];for(let he=0;he<6;he++)t.bindFramebuffer(s.FRAMEBUFFER,L.__webglFramebuffer[he]),L.__webglDepthbuffer[he]=s.createRenderbuffer(),Ce(L.__webglDepthbuffer[he],F,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,L.__webglFramebuffer),L.__webglDepthbuffer=s.createRenderbuffer(),Ce(L.__webglDepthbuffer,F,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function Be(F,L,Z){const he=n.get(F);L!==void 0&&Te(he.__webglFramebuffer,F,F.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Z!==void 0&&Ge(F)}function q(F){const L=F.texture,Z=n.get(F),he=n.get(L);F.addEventListener("dispose",I),F.isWebGLMultipleRenderTargets!==!0&&(he.__webglTexture===void 0&&(he.__webglTexture=s.createTexture()),he.__version=L.version,a.memory.textures++);const ae=F.isWebGLCubeRenderTarget===!0,ce=F.isWebGLMultipleRenderTargets===!0,Se=x(F)||l;if(ae){Z.__webglFramebuffer=[];for(let ve=0;ve<6;ve++)if(l&&L.mipmaps&&L.mipmaps.length>0){Z.__webglFramebuffer[ve]=[];for(let we=0;we<L.mipmaps.length;we++)Z.__webglFramebuffer[ve][we]=s.createFramebuffer()}else Z.__webglFramebuffer[ve]=s.createFramebuffer()}else{if(l&&L.mipmaps&&L.mipmaps.length>0){Z.__webglFramebuffer=[];for(let ve=0;ve<L.mipmaps.length;ve++)Z.__webglFramebuffer[ve]=s.createFramebuffer()}else Z.__webglFramebuffer=s.createFramebuffer();if(ce)if(i.drawBuffers){const ve=F.texture;for(let we=0,Oe=ve.length;we<Oe;we++){const ze=n.get(ve[we]);ze.__webglTexture===void 0&&(ze.__webglTexture=s.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(l&&F.samples>0&&Re(F)===!1){const ve=ce?L:[L];Z.__webglMultisampledFramebuffer=s.createFramebuffer(),Z.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let we=0;we<ve.length;we++){const Oe=ve[we];Z.__webglColorRenderbuffer[we]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Z.__webglColorRenderbuffer[we]);const ze=r.convert(Oe.format,Oe.colorSpace),oe=r.convert(Oe.type),st=S(Oe.internalFormat,ze,oe,Oe.colorSpace,F.isXRRenderTarget===!0),Je=We(F);s.renderbufferStorageMultisample(s.RENDERBUFFER,Je,st,F.width,F.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+we,s.RENDERBUFFER,Z.__webglColorRenderbuffer[we])}s.bindRenderbuffer(s.RENDERBUFFER,null),F.depthBuffer&&(Z.__webglDepthRenderbuffer=s.createRenderbuffer(),Ce(Z.__webglDepthRenderbuffer,F,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ae){t.bindTexture(s.TEXTURE_CUBE_MAP,he.__webglTexture),pe(s.TEXTURE_CUBE_MAP,L,Se);for(let ve=0;ve<6;ve++)if(l&&L.mipmaps&&L.mipmaps.length>0)for(let we=0;we<L.mipmaps.length;we++)Te(Z.__webglFramebuffer[ve][we],F,L,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,we);else Te(Z.__webglFramebuffer[ve],F,L,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0);w(L,Se)&&y(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ce){const ve=F.texture;for(let we=0,Oe=ve.length;we<Oe;we++){const ze=ve[we],oe=n.get(ze);t.bindTexture(s.TEXTURE_2D,oe.__webglTexture),pe(s.TEXTURE_2D,ze,Se),Te(Z.__webglFramebuffer,F,ze,s.COLOR_ATTACHMENT0+we,s.TEXTURE_2D,0),w(ze,Se)&&y(s.TEXTURE_2D)}t.unbindTexture()}else{let ve=s.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(l?ve=F.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ve,he.__webglTexture),pe(ve,L,Se),l&&L.mipmaps&&L.mipmaps.length>0)for(let we=0;we<L.mipmaps.length;we++)Te(Z.__webglFramebuffer[we],F,L,s.COLOR_ATTACHMENT0,ve,we);else Te(Z.__webglFramebuffer,F,L,s.COLOR_ATTACHMENT0,ve,0);w(L,Se)&&y(ve),t.unbindTexture()}F.depthBuffer&&Ge(F)}function Dt(F){const L=x(F)||l,Z=F.isWebGLMultipleRenderTargets===!0?F.texture:[F.texture];for(let he=0,ae=Z.length;he<ae;he++){const ce=Z[he];if(w(ce,L)){const Se=F.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,ve=n.get(ce).__webglTexture;t.bindTexture(Se,ve),y(Se),t.unbindTexture()}}}function Pe(F){if(l&&F.samples>0&&Re(F)===!1){const L=F.isWebGLMultipleRenderTargets?F.texture:[F.texture],Z=F.width,he=F.height;let ae=s.COLOR_BUFFER_BIT;const ce=[],Se=F.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ve=n.get(F),we=F.isWebGLMultipleRenderTargets===!0;if(we)for(let Oe=0;Oe<L.length;Oe++)t.bindFramebuffer(s.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Oe,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,ve.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Oe,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let Oe=0;Oe<L.length;Oe++){ce.push(s.COLOR_ATTACHMENT0+Oe),F.depthBuffer&&ce.push(Se);const ze=ve.__ignoreDepthValues!==void 0?ve.__ignoreDepthValues:!1;if(ze===!1&&(F.depthBuffer&&(ae|=s.DEPTH_BUFFER_BIT),F.stencilBuffer&&(ae|=s.STENCIL_BUFFER_BIT)),we&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ve.__webglColorRenderbuffer[Oe]),ze===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[Se]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[Se])),we){const oe=n.get(L[Oe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,oe,0)}s.blitFramebuffer(0,0,Z,he,0,0,Z,he,ae,s.NEAREST),h&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ce)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),we)for(let Oe=0;Oe<L.length;Oe++){t.bindFramebuffer(s.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Oe,s.RENDERBUFFER,ve.__webglColorRenderbuffer[Oe]);const ze=n.get(L[Oe]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,ve.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Oe,s.TEXTURE_2D,ze,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}}function We(F){return Math.min(i.maxSamples,F.samples)}function Re(F){const L=n.get(F);return l&&F.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&L.__useRenderToTexture!==!1}function bt(F){const L=a.render.frame;d.get(F)!==L&&(d.set(F,L),F.update())}function je(F,L){const Z=F.colorSpace,he=F.format,ae=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||F.format===$c||Z!==en&&Z!==Un&&(pt.getTransfer(Z)===St?l===!1?e.has("EXT_sRGB")===!0&&he===Wt?(F.format=$c,F.minFilter=Tt,F.generateMipmaps=!1):L=om.sRGBToLinear(L):(he!==Wt||ae!==ni)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),L}this.allocateTextureUnit=U,this.resetTextureUnits=W,this.setTexture2D=H,this.setTexture2DArray=X,this.setTexture3D=J,this.setTextureCube=$,this.rebindTextures=Be,this.setupRenderTarget=q,this.updateRenderTargetMipmap=Dt,this.updateMultisampleRenderTarget=Pe,this.setupDepthRenderbuffer=Ge,this.setupFrameBufferTexture=Te,this.useMultisampledRTT=Re}function gE(s,e,t){const n=t.isWebGL2;function i(r,a=Un){let l;const c=pt.getTransfer(a);if(r===ni)return s.UNSIGNED_BYTE;if(r===Kf)return s.UNSIGNED_SHORT_4_4_4_4;if(r===$f)return s.UNSIGNED_SHORT_5_5_5_1;if(r===qc)return s.BYTE;if(r===Yf)return s.SHORT;if(r===sl)return s.UNSIGNED_SHORT;if(r===wo)return s.INT;if(r===Tn)return s.UNSIGNED_INT;if(r===ft)return s.FLOAT;if(r===si)return n?s.HALF_FLOAT:(l=e.get("OES_texture_half_float"),l!==null?l.HALF_FLOAT_OES:null);if(r===F_)return s.ALPHA;if(r===Wt)return s.RGBA;if(r===O_)return s.LUMINANCE;if(r===B_)return s.LUMINANCE_ALPHA;if(r===ys)return s.DEPTH_COMPONENT;if(r===Er)return s.DEPTH_STENCIL;if(r===$c)return l=e.get("EXT_sRGB"),l!==null?l.SRGB_ALPHA_EXT:null;if(r===Zf)return s.RED;if(r===Mu)return s.RED_INTEGER;if(r===Qf)return s.RG;if(r===rl)return s.RG_INTEGER;if(r===Co)return s.RGBA_INTEGER;if(r===zl||r===Hl||r===Gl||r===Wl)if(c===St)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===zl)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Hl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Gl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Wl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===zl)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Hl)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Gl)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Wl)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===od||r===ad||r===ld||r===cd)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===od)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===ad)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===ld)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===cd)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Jf)return l=e.get("WEBGL_compressed_texture_etc1"),l!==null?l.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===ud||r===hd)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===ud)return c===St?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===hd)return c===St?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===dd||r===pd||r===fd||r===md||r===gd||r===vd||r===_d||r===xd||r===bd||r===yd||r===wd||r===Md||r===Ed||r===Sd)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===dd)return c===St?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===pd)return c===St?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===fd)return c===St?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===md)return c===St?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===gd)return c===St?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===vd)return c===St?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===_d)return c===St?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===xd)return c===St?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===bd)return c===St?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===yd)return c===St?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===wd)return c===St?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Md)return c===St?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Ed)return c===St?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Sd)return c===St?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Xl||r===Td||r===Ad)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===Xl)return c===St?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Td)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Ad)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===k_||r===Cd||r===Pd||r===Rd)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===Xl)return l.COMPRESSED_RED_RGTC1_EXT;if(r===Cd)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Pd)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Rd)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===bs?n?s.UNSIGNED_INT_24_8:(l=e.get("WEBGL_depth_texture"),l!==null?l.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class vE extends fn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class xs extends mt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const _E={type:"move"};class mc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const l=this._targetRay,c=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){a=!0;for(const M of e.hand.values()){const x=t.getJointPose(M,n),v=this._getHandJoint(h,M);x!==null&&(v.matrix.fromArray(x.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=x.radius),v.visible=x!==null}const d=h.joints["index-finger-tip"],f=h.joints["thumb-tip"],m=d.position.distanceTo(f.position),g=.02,b=.005;h.inputState.pinching&&m>g+b?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&m<=g-b&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));l!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(l.matrix.fromArray(i.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,i.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(i.linearVelocity)):l.hasLinearVelocity=!1,i.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(i.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(_E)))}return l!==null&&(l.visible=i!==null),c!==null&&(c.visible=r!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new xs;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const xE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,bE=`
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

}`;class yE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new jt,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}render(e,t){if(this.texture!==null){if(this.mesh===null){const n=t.cameras[0].viewport,i=new nn({extensions:{fragDepth:!0},vertexShader:xE,fragmentShader:bE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new fe(new kn(20,20),i)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class wE extends Ts{constructor(e,t){super();const n=this;let i=null,r=1,a=null,l="local-floor",c=1,h=null,d=null,f=null,m=null,g=null,b=null;const M=new yE,x=t.getContextAttributes();let v=null,w=null;const y=[],S=[],C=new Ae;let P=null;const A=new fn;A.layers.enable(1),A.viewport=new _t;const I=new fn;I.layers.enable(2),I.viewport=new _t;const B=[A,I],E=new vE;E.layers.enable(1),E.layers.enable(2);let R=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let se=y[K];return se===void 0&&(se=new mc,y[K]=se),se.getTargetRaySpace()},this.getControllerGrip=function(K){let se=y[K];return se===void 0&&(se=new mc,y[K]=se),se.getGripSpace()},this.getHand=function(K){let se=y[K];return se===void 0&&(se=new mc,y[K]=se),se.getHandSpace()};function W(K){const se=S.indexOf(K.inputSource);if(se===-1)return;const be=y[se];be!==void 0&&(be.update(K.inputSource,K.frame,h||a),be.dispatchEvent({type:K.type,data:K.inputSource}))}function U(){i.removeEventListener("select",W),i.removeEventListener("selectstart",W),i.removeEventListener("selectend",W),i.removeEventListener("squeeze",W),i.removeEventListener("squeezestart",W),i.removeEventListener("squeezeend",W),i.removeEventListener("end",U),i.removeEventListener("inputsourceschange",G);for(let K=0;K<y.length;K++){const se=S[K];se!==null&&(S[K]=null,y[K].disconnect(se))}R=null,k=null,M.reset(),e.setRenderTarget(v),g=null,m=null,f=null,i=null,w=null,pe.stop(),n.isPresenting=!1,e.setPixelRatio(P),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){l=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(K){h=K},this.getBaseLayer=function(){return m!==null?m:g},this.getBinding=function(){return f},this.getFrame=function(){return b},this.getSession=function(){return i},this.setSession=async function(K){if(i=K,i!==null){if(v=e.getRenderTarget(),i.addEventListener("select",W),i.addEventListener("selectstart",W),i.addEventListener("selectend",W),i.addEventListener("squeeze",W),i.addEventListener("squeezestart",W),i.addEventListener("squeezeend",W),i.addEventListener("end",U),i.addEventListener("inputsourceschange",G),x.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(C),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const se={antialias:i.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};g=new XRWebGLLayer(i,t,se),i.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),w=new Pn(g.framebufferWidth,g.framebufferHeight,{format:Wt,type:ni,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let se=null,be=null,Te=null;x.depth&&(Te=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,se=x.stencil?Er:ys,be=x.stencil?bs:Tn);const Ce={colorFormat:t.RGBA8,depthFormat:Te,scaleFactor:r};f=new XRWebGLBinding(i,t),m=f.createProjectionLayer(Ce),i.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),w=new Pn(m.textureWidth,m.textureHeight,{format:Wt,type:ni,depthTexture:new gm(m.textureWidth,m.textureHeight,be,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});const ye=e.properties.get(w);ye.__ignoreDepthValues=m.ignoreDepthValues}w.isXRRenderTarget=!0,this.setFoveation(c),h=null,a=await i.requestReferenceSpace(l),pe.setContext(i),pe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function G(K){for(let se=0;se<K.removed.length;se++){const be=K.removed[se],Te=S.indexOf(be);Te>=0&&(S[Te]=null,y[Te].disconnect(be))}for(let se=0;se<K.added.length;se++){const be=K.added[se];let Te=S.indexOf(be);if(Te===-1){for(let ye=0;ye<y.length;ye++)if(ye>=S.length){S.push(be),Te=ye;break}else if(S[ye]===null){S[ye]=be,Te=ye;break}if(Te===-1)break}const Ce=y[Te];Ce&&Ce.connect(be)}}const H=new D,X=new D;function J(K,se,be){H.setFromMatrixPosition(se.matrixWorld),X.setFromMatrixPosition(be.matrixWorld);const Te=H.distanceTo(X),Ce=se.projectionMatrix.elements,ye=be.projectionMatrix.elements,Ge=Ce[14]/(Ce[10]-1),Be=Ce[14]/(Ce[10]+1),q=(Ce[9]+1)/Ce[5],Dt=(Ce[9]-1)/Ce[5],Pe=(Ce[8]-1)/Ce[0],We=(ye[8]+1)/ye[0],Re=Ge*Pe,bt=Ge*We,je=Te/(-Pe+We),F=je*-Pe;se.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(F),K.translateZ(je),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert();const L=Ge+je,Z=Be+je,he=Re-F,ae=bt+(Te-F),ce=q*Be/Z*L,Se=Dt*Be/Z*L;K.projectionMatrix.makePerspective(he,ae,ce,Se,L,Z),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}function $(K,se){se===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(se.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(i===null)return;M.texture!==null&&(K.near=M.depthNear,K.far=M.depthFar),E.near=I.near=A.near=K.near,E.far=I.far=A.far=K.far,(R!==E.near||k!==E.far)&&(i.updateRenderState({depthNear:E.near,depthFar:E.far}),R=E.near,k=E.far,A.near=R,A.far=k,I.near=R,I.far=k,A.updateProjectionMatrix(),I.updateProjectionMatrix(),K.updateProjectionMatrix());const se=K.parent,be=E.cameras;$(E,se);for(let Te=0;Te<be.length;Te++)$(be[Te],se);be.length===2?J(E,A,I):E.projectionMatrix.copy(A.projectionMatrix),ie(K,E,se)};function ie(K,se,be){be===null?K.matrix.copy(se.matrixWorld):(K.matrix.copy(be.matrixWorld),K.matrix.invert(),K.matrix.multiply(se.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(se.projectionMatrix),K.projectionMatrixInverse.copy(se.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Tr*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(m===null&&g===null))return c},this.setFoveation=function(K){c=K,m!==null&&(m.fixedFoveation=K),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=K)},this.hasDepthSensing=function(){return M.texture!==null};let ne=null;function me(K,se){if(d=se.getViewerPose(h||a),b=se,d!==null){const be=d.views;g!==null&&(e.setRenderTargetFramebuffer(w,g.framebuffer),e.setRenderTarget(w));let Te=!1;be.length!==E.cameras.length&&(E.cameras.length=0,Te=!0);for(let ye=0;ye<be.length;ye++){const Ge=be[ye];let Be=null;if(g!==null)Be=g.getViewport(Ge);else{const Dt=f.getViewSubImage(m,Ge);Be=Dt.viewport,ye===0&&(e.setRenderTargetTextures(w,Dt.colorTexture,m.ignoreDepthValues?void 0:Dt.depthStencilTexture),e.setRenderTarget(w))}let q=B[ye];q===void 0&&(q=new fn,q.layers.enable(ye),q.viewport=new _t,B[ye]=q),q.matrix.fromArray(Ge.transform.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale),q.projectionMatrix.fromArray(Ge.projectionMatrix),q.projectionMatrixInverse.copy(q.projectionMatrix).invert(),q.viewport.set(Be.x,Be.y,Be.width,Be.height),ye===0&&(E.matrix.copy(q.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),Te===!0&&E.cameras.push(q)}const Ce=i.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")){const ye=f.getDepthInformation(be[0]);ye&&ye.isValid&&ye.texture&&M.init(e,ye,i.renderState)}}for(let be=0;be<y.length;be++){const Te=S[be],Ce=y[be];Te!==null&&Ce!==void 0&&Ce.update(Te,se,h||a)}M.render(e,E),ne&&ne(K,se),se.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:se}),b=null}const pe=new mm;pe.setAnimationLoop(me),this.setAnimationLoop=function(K){ne=K},this.dispose=function(){}}}function ME(s,e){function t(x,v){x.matrixAutoUpdate===!0&&x.updateMatrix(),v.value.copy(x.matrix)}function n(x,v){v.color.getRGB(x.fogColor.value,dm(s)),v.isFog?(x.fogNear.value=v.near,x.fogFar.value=v.far):v.isFogExp2&&(x.fogDensity.value=v.density)}function i(x,v,w,y,S){v.isMeshBasicMaterial||v.isMeshLambertMaterial?r(x,v):v.isMeshToonMaterial?(r(x,v),f(x,v)):v.isMeshPhongMaterial?(r(x,v),d(x,v)):v.isMeshStandardMaterial?(r(x,v),m(x,v),v.isMeshPhysicalMaterial&&g(x,v,S)):v.isMeshMatcapMaterial?(r(x,v),b(x,v)):v.isMeshDepthMaterial?r(x,v):v.isMeshDistanceMaterial?(r(x,v),M(x,v)):v.isMeshNormalMaterial?r(x,v):v.isLineBasicMaterial?(a(x,v),v.isLineDashedMaterial&&l(x,v)):v.isPointsMaterial?c(x,v,w,y):v.isSpriteMaterial?h(x,v):v.isShadowMaterial?(x.color.value.copy(v.color),x.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function r(x,v){x.opacity.value=v.opacity,v.color&&x.diffuse.value.copy(v.color),v.emissive&&x.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(x.map.value=v.map,t(v.map,x.mapTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,t(v.alphaMap,x.alphaMapTransform)),v.bumpMap&&(x.bumpMap.value=v.bumpMap,t(v.bumpMap,x.bumpMapTransform),x.bumpScale.value=v.bumpScale,v.side===xn&&(x.bumpScale.value*=-1)),v.normalMap&&(x.normalMap.value=v.normalMap,t(v.normalMap,x.normalMapTransform),x.normalScale.value.copy(v.normalScale),v.side===xn&&x.normalScale.value.negate()),v.displacementMap&&(x.displacementMap.value=v.displacementMap,t(v.displacementMap,x.displacementMapTransform),x.displacementScale.value=v.displacementScale,x.displacementBias.value=v.displacementBias),v.emissiveMap&&(x.emissiveMap.value=v.emissiveMap,t(v.emissiveMap,x.emissiveMapTransform)),v.specularMap&&(x.specularMap.value=v.specularMap,t(v.specularMap,x.specularMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest);const w=e.get(v).envMap;if(w&&(x.envMap.value=w,x.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=v.reflectivity,x.ior.value=v.ior,x.refractionRatio.value=v.refractionRatio),v.lightMap){x.lightMap.value=v.lightMap;const y=s._useLegacyLights===!0?Math.PI:1;x.lightMapIntensity.value=v.lightMapIntensity*y,t(v.lightMap,x.lightMapTransform)}v.aoMap&&(x.aoMap.value=v.aoMap,x.aoMapIntensity.value=v.aoMapIntensity,t(v.aoMap,x.aoMapTransform))}function a(x,v){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,v.map&&(x.map.value=v.map,t(v.map,x.mapTransform))}function l(x,v){x.dashSize.value=v.dashSize,x.totalSize.value=v.dashSize+v.gapSize,x.scale.value=v.scale}function c(x,v,w,y){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,x.size.value=v.size*w,x.scale.value=y*.5,v.map&&(x.map.value=v.map,t(v.map,x.uvTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,t(v.alphaMap,x.alphaMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest)}function h(x,v){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,x.rotation.value=v.rotation,v.map&&(x.map.value=v.map,t(v.map,x.mapTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,t(v.alphaMap,x.alphaMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest)}function d(x,v){x.specular.value.copy(v.specular),x.shininess.value=Math.max(v.shininess,1e-4)}function f(x,v){v.gradientMap&&(x.gradientMap.value=v.gradientMap)}function m(x,v){x.metalness.value=v.metalness,v.metalnessMap&&(x.metalnessMap.value=v.metalnessMap,t(v.metalnessMap,x.metalnessMapTransform)),x.roughness.value=v.roughness,v.roughnessMap&&(x.roughnessMap.value=v.roughnessMap,t(v.roughnessMap,x.roughnessMapTransform)),e.get(v).envMap&&(x.envMapIntensity.value=v.envMapIntensity)}function g(x,v,w){x.ior.value=v.ior,v.sheen>0&&(x.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),x.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(x.sheenColorMap.value=v.sheenColorMap,t(v.sheenColorMap,x.sheenColorMapTransform)),v.sheenRoughnessMap&&(x.sheenRoughnessMap.value=v.sheenRoughnessMap,t(v.sheenRoughnessMap,x.sheenRoughnessMapTransform))),v.clearcoat>0&&(x.clearcoat.value=v.clearcoat,x.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(x.clearcoatMap.value=v.clearcoatMap,t(v.clearcoatMap,x.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,t(v.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(x.clearcoatNormalMap.value=v.clearcoatNormalMap,t(v.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===xn&&x.clearcoatNormalScale.value.negate())),v.iridescence>0&&(x.iridescence.value=v.iridescence,x.iridescenceIOR.value=v.iridescenceIOR,x.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(x.iridescenceMap.value=v.iridescenceMap,t(v.iridescenceMap,x.iridescenceMapTransform)),v.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=v.iridescenceThicknessMap,t(v.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),v.transmission>0&&(x.transmission.value=v.transmission,x.transmissionSamplerMap.value=w.texture,x.transmissionSamplerSize.value.set(w.width,w.height),v.transmissionMap&&(x.transmissionMap.value=v.transmissionMap,t(v.transmissionMap,x.transmissionMapTransform)),x.thickness.value=v.thickness,v.thicknessMap&&(x.thicknessMap.value=v.thicknessMap,t(v.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=v.attenuationDistance,x.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(x.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(x.anisotropyMap.value=v.anisotropyMap,t(v.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=v.specularIntensity,x.specularColor.value.copy(v.specularColor),v.specularColorMap&&(x.specularColorMap.value=v.specularColorMap,t(v.specularColorMap,x.specularColorMapTransform)),v.specularIntensityMap&&(x.specularIntensityMap.value=v.specularIntensityMap,t(v.specularIntensityMap,x.specularIntensityMapTransform))}function b(x,v){v.matcap&&(x.matcap.value=v.matcap)}function M(x,v){const w=e.get(v).light;x.referencePosition.value.setFromMatrixPosition(w.matrixWorld),x.nearDistance.value=w.shadow.camera.near,x.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function EE(s,e,t,n){let i={},r={},a=[];const l=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(w,y){const S=y.program;n.uniformBlockBinding(w,S)}function h(w,y){let S=i[w.id];S===void 0&&(b(w),S=d(w),i[w.id]=S,w.addEventListener("dispose",x));const C=y.program;n.updateUBOMapping(w,C);const P=e.render.frame;r[w.id]!==P&&(m(w),r[w.id]=P)}function d(w){const y=f();w.__bindingPointIndex=y;const S=s.createBuffer(),C=w.__size,P=w.usage;return s.bindBuffer(s.UNIFORM_BUFFER,S),s.bufferData(s.UNIFORM_BUFFER,C,P),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,y,S),S}function f(){for(let w=0;w<l;w++)if(a.indexOf(w)===-1)return a.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(w){const y=i[w.id],S=w.uniforms,C=w.__cache;s.bindBuffer(s.UNIFORM_BUFFER,y);for(let P=0,A=S.length;P<A;P++){const I=Array.isArray(S[P])?S[P]:[S[P]];for(let B=0,E=I.length;B<E;B++){const R=I[B];if(g(R,P,B,C)===!0){const k=R.__offset,W=Array.isArray(R.value)?R.value:[R.value];let U=0;for(let G=0;G<W.length;G++){const H=W[G],X=M(H);typeof H=="number"||typeof H=="boolean"?(R.__data[0]=H,s.bufferSubData(s.UNIFORM_BUFFER,k+U,R.__data)):H.isMatrix3?(R.__data[0]=H.elements[0],R.__data[1]=H.elements[1],R.__data[2]=H.elements[2],R.__data[3]=0,R.__data[4]=H.elements[3],R.__data[5]=H.elements[4],R.__data[6]=H.elements[5],R.__data[7]=0,R.__data[8]=H.elements[6],R.__data[9]=H.elements[7],R.__data[10]=H.elements[8],R.__data[11]=0):(H.toArray(R.__data,U),U+=X.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,k,R.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function g(w,y,S,C){const P=w.value,A=y+"_"+S;if(C[A]===void 0)return typeof P=="number"||typeof P=="boolean"?C[A]=P:C[A]=P.clone(),!0;{const I=C[A];if(typeof P=="number"||typeof P=="boolean"){if(I!==P)return C[A]=P,!0}else if(I.equals(P)===!1)return I.copy(P),!0}return!1}function b(w){const y=w.uniforms;let S=0;const C=16;for(let A=0,I=y.length;A<I;A++){const B=Array.isArray(y[A])?y[A]:[y[A]];for(let E=0,R=B.length;E<R;E++){const k=B[E],W=Array.isArray(k.value)?k.value:[k.value];for(let U=0,G=W.length;U<G;U++){const H=W[U],X=M(H),J=S%C;J!==0&&C-J<X.boundary&&(S+=C-J),k.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=S,S+=X.storage}}}const P=S%C;return P>0&&(S+=C-P),w.__size=S,w.__cache={},this}function M(w){const y={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(y.boundary=4,y.storage=4):w.isVector2?(y.boundary=8,y.storage=8):w.isVector3||w.isColor?(y.boundary=16,y.storage=12):w.isVector4?(y.boundary=16,y.storage=16):w.isMatrix3?(y.boundary=48,y.storage=48):w.isMatrix4?(y.boundary=64,y.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),y}function x(w){const y=w.target;y.removeEventListener("dispose",x);const S=a.indexOf(y.__bindingPointIndex);a.splice(S,1),s.deleteBuffer(i[y.id]),delete i[y.id],delete r[y.id]}function v(){for(const w in i)s.deleteBuffer(i[w]);a=[],i={},r={}}return{bind:c,update:h,dispose:v}}class wm{constructor(e={}){const{canvas:t=dx(),context:n=null,depth:i=!0,stencil:r=!0,alpha:a=!1,antialias:l=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:h=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let m;n!==null?m=n.getContextAttributes().alpha:m=a;const g=new Uint32Array(4),b=new Int32Array(4);let M=null,x=null;const v=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ft,this._useLegacyLights=!1,this.toneMapping=Zi,this.toneMappingExposure=1;const y=this;let S=!1,C=0,P=0,A=null,I=-1,B=null;const E=new _t,R=new _t;let k=null;const W=new Ve(0);let U=0,G=t.width,H=t.height,X=1,J=null,$=null;const ie=new _t(0,0,G,H),ne=new _t(0,0,G,H);let me=!1;const pe=new Au;let K=!1,se=!1,be=null;const Te=new He,Ce=new Ae,ye=new D,Ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Be(){return A===null?X:1}let q=n;function Dt(N,Y){for(let ee=0;ee<N.length;ee++){const te=N[ee],Q=t.getContext(te,Y);if(Q!==null)return Q}return null}try{const N={alpha:!0,depth:i,stencil:r,antialias:l,premultipliedAlpha:c,preserveDrawingBuffer:h,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${wu}`),t.addEventListener("webglcontextlost",Ie,!1),t.addEventListener("webglcontextrestored",O,!1),t.addEventListener("webglcontextcreationerror",re,!1),q===null){const Y=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&Y.shift(),q=Dt(Y,N),q===null)throw Dt(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext!="undefined"&&q instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),q.getShaderPrecisionFormat===void 0&&(q.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(N){throw console.error("THREE.WebGLRenderer: "+N.message),N}let Pe,We,Re,bt,je,F,L,Z,he,ae,ce,Se,ve,we,Oe,ze,oe,st,Je,Xe,Le,xe,$e,V;function de(){Pe=new Lw(q),We=new Sw(q,Pe,e),Pe.init(We),xe=new gE(q,Pe,We),Re=new fE(q,Pe,We),bt=new Nw(q),je=new eE,F=new mE(q,Pe,Re,je,We,xe,bt),L=new Aw(y),Z=new Rw(y),he=new Hx(q,We),$e=new Mw(q,Pe,he,We),ae=new Iw(q,he,bt,$e),ce=new Bw(q,ae,he,bt),Je=new Ow(q,We,F),ze=new Tw(je),Se=new JM(y,L,Z,Pe,We,$e,ze),ve=new ME(y,je),we=new nE,Oe=new lE(Pe,We),st=new ww(y,L,Z,Re,ce,m,c),oe=new pE(y,ce,We),V=new EE(q,bt,We,Re),Xe=new Ew(q,Pe,bt,We),Le=new Dw(q,Pe,bt,We),bt.programs=Se.programs,y.capabilities=We,y.extensions=Pe,y.properties=je,y.renderLists=we,y.shadowMap=oe,y.state=Re,y.info=bt}de();const _e=new wE(y,q);this.xr=_e,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){const N=Pe.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){const N=Pe.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(N){N!==void 0&&(X=N,this.setSize(G,H,!1))},this.getSize=function(N){return N.set(G,H)},this.setSize=function(N,Y,ee=!0){if(_e.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=N,H=Y,t.width=Math.floor(N*X),t.height=Math.floor(Y*X),ee===!0&&(t.style.width=N+"px",t.style.height=Y+"px"),this.setViewport(0,0,N,Y)},this.getDrawingBufferSize=function(N){return N.set(G*X,H*X).floor()},this.setDrawingBufferSize=function(N,Y,ee){G=N,H=Y,X=ee,t.width=Math.floor(N*ee),t.height=Math.floor(Y*ee),this.setViewport(0,0,N,Y)},this.getCurrentViewport=function(N){return N.copy(E)},this.getViewport=function(N){return N.copy(ie)},this.setViewport=function(N,Y,ee,te){N.isVector4?ie.set(N.x,N.y,N.z,N.w):ie.set(N,Y,ee,te),Re.viewport(E.copy(ie).multiplyScalar(X).floor())},this.getScissor=function(N){return N.copy(ne)},this.setScissor=function(N,Y,ee,te){N.isVector4?ne.set(N.x,N.y,N.z,N.w):ne.set(N,Y,ee,te),Re.scissor(R.copy(ne).multiplyScalar(X).floor())},this.getScissorTest=function(){return me},this.setScissorTest=function(N){Re.setScissorTest(me=N)},this.setOpaqueSort=function(N){J=N},this.setTransparentSort=function(N){$=N},this.getClearColor=function(N){return N.copy(st.getClearColor())},this.setClearColor=function(){st.setClearColor.apply(st,arguments)},this.getClearAlpha=function(){return st.getClearAlpha()},this.setClearAlpha=function(){st.setClearAlpha.apply(st,arguments)},this.clear=function(N=!0,Y=!0,ee=!0){let te=0;if(N){let Q=!1;if(A!==null){const Me=A.texture.format;Q=Me===Co||Me===rl||Me===Mu}if(Q){const Me=A.texture.type,De=Me===ni||Me===Tn||Me===sl||Me===bs||Me===Kf||Me===$f,ke=st.getClearColor(),Fe=st.getClearAlpha(),qe=ke.r,Ke=ke.g,Ze=ke.b;De?(g[0]=qe,g[1]=Ke,g[2]=Ze,g[3]=Fe,q.clearBufferuiv(q.COLOR,0,g)):(b[0]=qe,b[1]=Ke,b[2]=Ze,b[3]=Fe,q.clearBufferiv(q.COLOR,0,b))}else te|=q.COLOR_BUFFER_BIT}Y&&(te|=q.DEPTH_BUFFER_BIT),ee&&(te|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ie,!1),t.removeEventListener("webglcontextrestored",O,!1),t.removeEventListener("webglcontextcreationerror",re,!1),we.dispose(),Oe.dispose(),je.dispose(),L.dispose(),Z.dispose(),ce.dispose(),$e.dispose(),V.dispose(),Se.dispose(),_e.dispose(),_e.removeEventListener("sessionstart",Bt),_e.removeEventListener("sessionend",ot),be&&(be.dispose(),be=null),Nt.stop()};function Ie(N){N.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function O(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const N=bt.autoReset,Y=oe.enabled,ee=oe.autoUpdate,te=oe.needsUpdate,Q=oe.type;de(),bt.autoReset=N,oe.enabled=Y,oe.autoUpdate=ee,oe.needsUpdate=te,oe.type=Q}function re(N){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function le(N){const Y=N.target;Y.removeEventListener("dispose",le),Ee(Y)}function Ee(N){Ue(N),je.remove(N)}function Ue(N){const Y=je.get(N).programs;Y!==void 0&&(Y.forEach(function(ee){Se.releaseProgram(ee)}),N.isShaderMaterial&&Se.releaseShaderCache(N))}this.renderBufferDirect=function(N,Y,ee,te,Q,Me){Y===null&&(Y=Ge);const De=Q.isMesh&&Q.matrixWorld.determinant()<0,ke=fl(N,Y,ee,te,Q);Re.setMaterial(te,De);let Fe=ee.index,qe=1;if(te.wireframe===!0){if(Fe=ae.getWireframeAttribute(ee),Fe===void 0)return;qe=2}const Ke=ee.drawRange,Ze=ee.attributes.position;let Rt=Ke.start*qe,on=(Ke.start+Ke.count)*qe;Me!==null&&(Rt=Math.max(Rt,Me.start*qe),on=Math.min(on,(Me.start+Me.count)*qe)),Fe!==null?(Rt=Math.max(Rt,0),on=Math.min(on,Fe.count)):Ze!=null&&(Rt=Math.max(Rt,0),on=Math.min(on,Ze.count));const kt=on-Rt;if(kt<0||kt===1/0)return;$e.setup(Q,te,ke,ee,Fe);let Rn,Mt=Xe;if(Fe!==null&&(Rn=he.get(Fe),Mt=Le,Mt.setIndex(Rn)),Q.isMesh)te.wireframe===!0?(Re.setLineWidth(te.wireframeLinewidth*Be()),Mt.setMode(q.LINES)):Mt.setMode(q.TRIANGLES);else if(Q.isLine){let Qe=te.linewidth;Qe===void 0&&(Qe=1),Re.setLineWidth(Qe*Be()),Q.isLineSegments?Mt.setMode(q.LINES):Q.isLineLoop?Mt.setMode(q.LINE_LOOP):Mt.setMode(q.LINE_STRIP)}else Q.isPoints?Mt.setMode(q.POINTS):Q.isSprite&&Mt.setMode(q.TRIANGLES);if(Q.isBatchedMesh)Mt.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else if(Q.isInstancedMesh)Mt.renderInstances(Rt,kt,Q.count);else if(ee.isInstancedBufferGeometry){const Qe=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,kr=Math.min(ee.instanceCount,Qe);Mt.renderInstances(Rt,kt,kr)}else Mt.render(Rt,kt)};function nt(N,Y,ee){N.transparent===!0&&N.side===mn&&N.forceSinglePass===!1?(N.side=xn,N.needsUpdate=!0,As(N,Y,ee),N.side=qn,N.needsUpdate=!0,As(N,Y,ee),N.side=mn):As(N,Y,ee)}this.compile=function(N,Y,ee=null){ee===null&&(ee=N),x=Oe.get(ee),x.init(),w.push(x),ee.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Y.layers)&&(x.pushLight(Q),Q.castShadow&&x.pushShadow(Q))}),N!==ee&&N.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Y.layers)&&(x.pushLight(Q),Q.castShadow&&x.pushShadow(Q))}),x.setupLights(y._useLegacyLights);const te=new Set;return N.traverse(function(Q){const Me=Q.material;if(Me)if(Array.isArray(Me))for(let De=0;De<Me.length;De++){const ke=Me[De];nt(ke,ee,Q),te.add(ke)}else nt(Me,ee,Q),te.add(Me)}),w.pop(),x=null,te},this.compileAsync=function(N,Y,ee=null){const te=this.compile(N,Y,ee);return new Promise(Q=>{function Me(){if(te.forEach(function(De){je.get(De).currentProgram.isReady()&&te.delete(De)}),te.size===0){Q(N);return}setTimeout(Me,10)}Pe.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let tt=null;function ct(N){tt&&tt(N)}function Bt(){Nt.stop()}function ot(){Nt.start()}const Nt=new mm;Nt.setAnimationLoop(ct),typeof self!="undefined"&&Nt.setContext(self),this.setAnimationLoop=function(N){tt=N,_e.setAnimationLoop(N),N===null?Nt.stop():Nt.start()},_e.addEventListener("sessionstart",Bt),_e.addEventListener("sessionend",ot),this.render=function(N,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),_e.enabled===!0&&_e.isPresenting===!0&&(_e.cameraAutoUpdate===!0&&_e.updateCamera(Y),Y=_e.getCamera()),N.isScene===!0&&N.onBeforeRender(y,N,Y,A),x=Oe.get(N,w.length),x.init(),w.push(x),Te.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),pe.setFromProjectionMatrix(Te),se=this.localClippingEnabled,K=ze.init(this.clippingPlanes,se),M=we.get(N,v.length),M.init(),v.push(M),sn(N,Y,0,y.sortObjects),M.finish(),y.sortObjects===!0&&M.sort(J,$),this.info.render.frame++,K===!0&&ze.beginShadows();const ee=x.state.shadowsArray;if(oe.render(ee,N,Y),K===!0&&ze.endShadows(),this.info.autoReset===!0&&this.info.reset(),(_e.enabled===!1||_e.isPresenting===!1||_e.hasDepthSensing()===!1)&&st.render(M,N),x.setupLights(y._useLegacyLights),Y.isArrayCamera){const te=Y.cameras;for(let Q=0,Me=te.length;Q<Me;Q++){const De=te[Q];No(M,N,De,De.viewport)}}else No(M,N,Y);A!==null&&(F.updateMultisampleRenderTarget(A),F.updateRenderTargetMipmap(A)),N.isScene===!0&&N.onAfterRender(y,N,Y),$e.resetDefaultState(),I=-1,B=null,w.pop(),w.length>0?x=w[w.length-1]:x=null,v.pop(),v.length>0?M=v[v.length-1]:M=null};function sn(N,Y,ee,te){if(N.visible===!1)return;if(N.layers.test(Y.layers)){if(N.isGroup)ee=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update(Y);else if(N.isLight)x.pushLight(N),N.castShadow&&x.pushShadow(N);else if(N.isSprite){if(!N.frustumCulled||pe.intersectsSprite(N)){te&&ye.setFromMatrixPosition(N.matrixWorld).applyMatrix4(Te);const De=ce.update(N),ke=N.material;ke.visible&&M.push(N,De,ke,ee,ye.z,null)}}else if((N.isMesh||N.isLine||N.isPoints)&&(!N.frustumCulled||pe.intersectsObject(N))){const De=ce.update(N),ke=N.material;if(te&&(N.boundingSphere!==void 0?(N.boundingSphere===null&&N.computeBoundingSphere(),ye.copy(N.boundingSphere.center)):(De.boundingSphere===null&&De.computeBoundingSphere(),ye.copy(De.boundingSphere.center)),ye.applyMatrix4(N.matrixWorld).applyMatrix4(Te)),Array.isArray(ke)){const Fe=De.groups;for(let qe=0,Ke=Fe.length;qe<Ke;qe++){const Ze=Fe[qe],Rt=ke[Ze.materialIndex];Rt&&Rt.visible&&M.push(N,De,Rt,ee,ye.z,Ze)}}else ke.visible&&M.push(N,De,ke,ee,ye.z,null)}}const Me=N.children;for(let De=0,ke=Me.length;De<ke;De++)sn(Me[De],Y,ee,te)}function No(N,Y,ee,te){const Q=N.opaque,Me=N.transmissive,De=N.transparent;x.setupLightsView(ee),K===!0&&ze.setGlobalState(y.clippingPlanes,ee),Me.length>0&&pl(Q,Me,Y,ee),te&&Re.viewport(E.copy(te)),Q.length>0&&Ci(Q,Y,ee),Me.length>0&&Ci(Me,Y,ee),De.length>0&&Ci(De,Y,ee),Re.buffers.depth.setTest(!0),Re.buffers.depth.setMask(!0),Re.buffers.color.setMask(!0),Re.setPolygonOffset(!1)}function pl(N,Y,ee,te){if((ee.isScene===!0?ee.overrideMaterial:null)!==null)return;const Me=We.isWebGL2;be===null&&(be=new Pn(1,1,{generateMipmaps:!0,type:Pe.has("EXT_color_buffer_half_float")?si:ni,minFilter:Ei,samples:Me?4:0})),y.getDrawingBufferSize(Ce),Me?be.setSize(Ce.x,Ce.y):be.setSize(Ja(Ce.x),Ja(Ce.y));const De=y.getRenderTarget();y.setRenderTarget(be),y.getClearColor(W),U=y.getClearAlpha(),U<1&&y.setClearColor(16777215,.5),y.clear();const ke=y.toneMapping;y.toneMapping=Zi,Ci(N,ee,te),F.updateMultisampleRenderTarget(be),F.updateRenderTargetMipmap(be);let Fe=!1;for(let qe=0,Ke=Y.length;qe<Ke;qe++){const Ze=Y[qe],Rt=Ze.object,on=Ze.geometry,kt=Ze.material,Rn=Ze.group;if(kt.side===mn&&Rt.layers.test(te.layers)){const Mt=kt.side;kt.side=xn,kt.needsUpdate=!0,Uo(Rt,ee,te,on,kt,Rn),kt.side=Mt,kt.needsUpdate=!0,Fe=!0}}Fe===!0&&(F.updateMultisampleRenderTarget(be),F.updateRenderTargetMipmap(be)),y.setRenderTarget(De),y.setClearColor(W,U),y.toneMapping=ke}function Ci(N,Y,ee){const te=Y.isScene===!0?Y.overrideMaterial:null;for(let Q=0,Me=N.length;Q<Me;Q++){const De=N[Q],ke=De.object,Fe=De.geometry,qe=te===null?De.material:te,Ke=De.group;ke.layers.test(ee.layers)&&Uo(ke,Y,ee,Fe,qe,Ke)}}function Uo(N,Y,ee,te,Q,Me){N.onBeforeRender(y,Y,ee,te,Q,Me),N.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),Q.onBeforeRender(y,Y,ee,te,N,Me),Q.transparent===!0&&Q.side===mn&&Q.forceSinglePass===!1?(Q.side=xn,Q.needsUpdate=!0,y.renderBufferDirect(ee,Y,te,Q,N,Me),Q.side=qn,Q.needsUpdate=!0,y.renderBufferDirect(ee,Y,te,Q,N,Me),Q.side=mn):y.renderBufferDirect(ee,Y,te,Q,N,Me),N.onAfterRender(y,Y,ee,te,Q,Me)}function As(N,Y,ee){Y.isScene!==!0&&(Y=Ge);const te=je.get(N),Q=x.state.lights,Me=x.state.shadowsArray,De=Q.state.version,ke=Se.getParameters(N,Q.state,Me,Y,ee),Fe=Se.getProgramCacheKey(ke);let qe=te.programs;te.environment=N.isMeshStandardMaterial?Y.environment:null,te.fog=Y.fog,te.envMap=(N.isMeshStandardMaterial?Z:L).get(N.envMap||te.environment),qe===void 0&&(N.addEventListener("dispose",le),qe=new Map,te.programs=qe);let Ke=qe.get(Fe);if(Ke!==void 0){if(te.currentProgram===Ke&&te.lightsStateVersion===De)return Or(N,ke),Ke}else ke.uniforms=Se.getUniforms(N),N.onBuild(ee,ke,y),N.onBeforeCompile(ke,y),Ke=Se.acquireProgram(ke,Fe),qe.set(Fe,Ke),te.uniforms=ke.uniforms;const Ze=te.uniforms;return(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)&&(Ze.clippingPlanes=ze.uniform),Or(N,ke),te.needsLights=ml(N),te.lightsStateVersion=De,te.needsLights&&(Ze.ambientLightColor.value=Q.state.ambient,Ze.lightProbe.value=Q.state.probe,Ze.directionalLights.value=Q.state.directional,Ze.directionalLightShadows.value=Q.state.directionalShadow,Ze.spotLights.value=Q.state.spot,Ze.spotLightShadows.value=Q.state.spotShadow,Ze.rectAreaLights.value=Q.state.rectArea,Ze.ltc_1.value=Q.state.rectAreaLTC1,Ze.ltc_2.value=Q.state.rectAreaLTC2,Ze.pointLights.value=Q.state.point,Ze.pointLightShadows.value=Q.state.pointShadow,Ze.hemisphereLights.value=Q.state.hemi,Ze.directionalShadowMap.value=Q.state.directionalShadowMap,Ze.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Ze.spotShadowMap.value=Q.state.spotShadowMap,Ze.spotLightMatrix.value=Q.state.spotLightMatrix,Ze.spotLightMap.value=Q.state.spotLightMap,Ze.pointShadowMap.value=Q.state.pointShadowMap,Ze.pointShadowMatrix.value=Q.state.pointShadowMatrix),te.currentProgram=Ke,te.uniformsList=null,Ke}function Pi(N){if(N.uniformsList===null){const Y=N.currentProgram.getUniforms();N.uniformsList=Va.seqWithValue(Y.seq,N.uniforms)}return N.uniformsList}function Or(N,Y){const ee=je.get(N);ee.outputColorSpace=Y.outputColorSpace,ee.batching=Y.batching,ee.instancing=Y.instancing,ee.instancingColor=Y.instancingColor,ee.skinning=Y.skinning,ee.morphTargets=Y.morphTargets,ee.morphNormals=Y.morphNormals,ee.morphColors=Y.morphColors,ee.morphTargetsCount=Y.morphTargetsCount,ee.numClippingPlanes=Y.numClippingPlanes,ee.numIntersection=Y.numClipIntersection,ee.vertexAlphas=Y.vertexAlphas,ee.vertexTangents=Y.vertexTangents,ee.toneMapping=Y.toneMapping}function fl(N,Y,ee,te,Q){Y.isScene!==!0&&(Y=Ge),F.resetTextureUnits();const Me=Y.fog,De=te.isMeshStandardMaterial?Y.environment:null,ke=A===null?y.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:en,Fe=(te.isMeshStandardMaterial?Z:L).get(te.envMap||De),qe=te.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,Ke=!!ee.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),Ze=!!ee.morphAttributes.position,Rt=!!ee.morphAttributes.normal,on=!!ee.morphAttributes.color;let kt=Zi;te.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(kt=y.toneMapping);const Rn=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,Mt=Rn!==void 0?Rn.length:0,Qe=je.get(te),kr=x.state.lights;if(K===!0&&(se===!0||N!==B)){const qt=N===B&&te.id===I;ze.setState(te,N,qt)}let Et=!1;te.version===Qe.__version?(Qe.needsLights&&Qe.lightsStateVersion!==kr.state.version||Qe.outputColorSpace!==ke||Q.isBatchedMesh&&Qe.batching===!1||!Q.isBatchedMesh&&Qe.batching===!0||Q.isInstancedMesh&&Qe.instancing===!1||!Q.isInstancedMesh&&Qe.instancing===!0||Q.isSkinnedMesh&&Qe.skinning===!1||!Q.isSkinnedMesh&&Qe.skinning===!0||Q.isInstancedMesh&&Qe.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&Qe.instancingColor===!1&&Q.instanceColor!==null||Qe.envMap!==Fe||te.fog===!0&&Qe.fog!==Me||Qe.numClippingPlanes!==void 0&&(Qe.numClippingPlanes!==ze.numPlanes||Qe.numIntersection!==ze.numIntersection)||Qe.vertexAlphas!==qe||Qe.vertexTangents!==Ke||Qe.morphTargets!==Ze||Qe.morphNormals!==Rt||Qe.morphColors!==on||Qe.toneMapping!==kt||We.isWebGL2===!0&&Qe.morphTargetsCount!==Mt)&&(Et=!0):(Et=!0,Qe.__version=te.version);let Zn=Qe.currentProgram;Et===!0&&(Zn=As(te,Y,Q));let Fo=!1,es=!1,Vr=!1;const Ot=Zn.getUniforms(),Qt=Qe.uniforms;if(Re.useProgram(Zn.program)&&(Fo=!0,es=!0,Vr=!0),te.id!==I&&(I=te.id,es=!0),Fo||B!==N){Ot.setValue(q,"projectionMatrix",N.projectionMatrix),Ot.setValue(q,"viewMatrix",N.matrixWorldInverse);const qt=Ot.map.cameraPosition;qt!==void 0&&qt.setValue(q,ye.setFromMatrixPosition(N.matrixWorld)),We.logarithmicDepthBuffer&&Ot.setValue(q,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&Ot.setValue(q,"isOrthographic",N.isOrthographicCamera===!0),B!==N&&(B=N,es=!0,Vr=!0)}if(Q.isSkinnedMesh){Ot.setOptional(q,Q,"bindMatrix"),Ot.setOptional(q,Q,"bindMatrixInverse");const qt=Q.skeleton;qt&&(We.floatVertexTextures?(qt.boneTexture===null&&qt.computeBoneTexture(),Ot.setValue(q,"boneTexture",qt.boneTexture,F)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}Q.isBatchedMesh&&(Ot.setOptional(q,Q,"batchingTexture"),Ot.setValue(q,"batchingTexture",Q._matricesTexture,F));const ci=ee.morphAttributes;if((ci.position!==void 0||ci.normal!==void 0||ci.color!==void 0&&We.isWebGL2===!0)&&Je.update(Q,ee,Zn),(es||Qe.receiveShadow!==Q.receiveShadow)&&(Qe.receiveShadow=Q.receiveShadow,Ot.setValue(q,"receiveShadow",Q.receiveShadow)),te.isMeshGouraudMaterial&&te.envMap!==null&&(Qt.envMap.value=Fe,Qt.flipEnvMap.value=Fe.isCubeTexture&&Fe.isRenderTargetTexture===!1?-1:1),es&&(Ot.setValue(q,"toneMappingExposure",y.toneMappingExposure),Qe.needsLights&&Br(Qt,Vr),Me&&te.fog===!0&&ve.refreshFogUniforms(Qt,Me),ve.refreshMaterialUniforms(Qt,te,X,H,be),Va.upload(q,Pi(Qe),Qt,F)),te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(Va.upload(q,Pi(Qe),Qt,F),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&Ot.setValue(q,"center",Q.center),Ot.setValue(q,"modelViewMatrix",Q.modelViewMatrix),Ot.setValue(q,"normalMatrix",Q.normalMatrix),Ot.setValue(q,"modelMatrix",Q.matrixWorld),te.isShaderMaterial||te.isRawShaderMaterial){const qt=te.uniformsGroups;for(let Ri=0,zr=qt.length;Ri<zr;Ri++)if(We.isWebGL2){const Oo=qt[Ri];V.update(Oo,Zn),V.bind(Oo,Zn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Zn}function Br(N,Y){N.ambientLightColor.needsUpdate=Y,N.lightProbe.needsUpdate=Y,N.directionalLights.needsUpdate=Y,N.directionalLightShadows.needsUpdate=Y,N.pointLights.needsUpdate=Y,N.pointLightShadows.needsUpdate=Y,N.spotLights.needsUpdate=Y,N.spotLightShadows.needsUpdate=Y,N.rectAreaLights.needsUpdate=Y,N.hemisphereLights.needsUpdate=Y}function ml(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(N,Y,ee){je.get(N.texture).__webglTexture=Y,je.get(N.depthTexture).__webglTexture=ee;const te=je.get(N);te.__hasExternalTextures=!0,te.__hasExternalTextures&&(te.__autoAllocateDepthBuffer=ee===void 0,te.__autoAllocateDepthBuffer||Pe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),te.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(N,Y){const ee=je.get(N);ee.__webglFramebuffer=Y,ee.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(N,Y=0,ee=0){A=N,C=Y,P=ee;let te=!0,Q=null,Me=!1,De=!1;if(N){const Fe=je.get(N);Fe.__useDefaultFramebuffer!==void 0?(Re.bindFramebuffer(q.FRAMEBUFFER,null),te=!1):Fe.__webglFramebuffer===void 0?F.setupRenderTarget(N):Fe.__hasExternalTextures&&F.rebindTextures(N,je.get(N.texture).__webglTexture,je.get(N.depthTexture).__webglTexture);const qe=N.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(De=!0);const Ke=je.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(Array.isArray(Ke[Y])?Q=Ke[Y][ee]:Q=Ke[Y],Me=!0):We.isWebGL2&&N.samples>0&&F.useMultisampledRTT(N)===!1?Q=je.get(N).__webglMultisampledFramebuffer:Array.isArray(Ke)?Q=Ke[ee]:Q=Ke,E.copy(N.viewport),R.copy(N.scissor),k=N.scissorTest}else E.copy(ie).multiplyScalar(X).floor(),R.copy(ne).multiplyScalar(X).floor(),k=me;if(Re.bindFramebuffer(q.FRAMEBUFFER,Q)&&We.drawBuffers&&te&&Re.drawBuffers(N,Q),Re.viewport(E),Re.scissor(R),Re.setScissorTest(k),Me){const Fe=je.get(N.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Fe.__webglTexture,ee)}else if(De){const Fe=je.get(N.texture),qe=Y||0;q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,Fe.__webglTexture,ee||0,qe)}I=-1},this.readRenderTargetPixels=function(N,Y,ee,te,Q,Me,De){if(!(N&&N.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ke=je.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&De!==void 0&&(ke=ke[De]),ke){Re.bindFramebuffer(q.FRAMEBUFFER,ke);try{const Fe=N.texture,qe=Fe.format,Ke=Fe.type;if(qe!==Wt&&xe.convert(qe)!==q.getParameter(q.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ze=Ke===si&&(Pe.has("EXT_color_buffer_half_float")||We.isWebGL2&&Pe.has("EXT_color_buffer_float"));if(Ke!==ni&&xe.convert(Ke)!==q.getParameter(q.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ke===ft&&(We.isWebGL2||Pe.has("OES_texture_float")||Pe.has("WEBGL_color_buffer_float")))&&!Ze){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=N.width-te&&ee>=0&&ee<=N.height-Q&&q.readPixels(Y,ee,te,Q,xe.convert(qe),xe.convert(Ke),Me)}finally{const Fe=A!==null?je.get(A).__webglFramebuffer:null;Re.bindFramebuffer(q.FRAMEBUFFER,Fe)}}},this.copyFramebufferToTexture=function(N,Y,ee=0){const te=Math.pow(2,-ee),Q=Math.floor(Y.image.width*te),Me=Math.floor(Y.image.height*te);F.setTexture2D(Y,0),q.copyTexSubImage2D(q.TEXTURE_2D,ee,0,0,N.x,N.y,Q,Me),Re.unbindTexture()},this.copyTextureToTexture=function(N,Y,ee,te=0){const Q=Y.image.width,Me=Y.image.height,De=xe.convert(ee.format),ke=xe.convert(ee.type);F.setTexture2D(ee,0),q.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,ee.flipY),q.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ee.premultiplyAlpha),q.pixelStorei(q.UNPACK_ALIGNMENT,ee.unpackAlignment),Y.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,te,N.x,N.y,Q,Me,De,ke,Y.image.data):Y.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,te,N.x,N.y,Y.mipmaps[0].width,Y.mipmaps[0].height,De,Y.mipmaps[0].data):q.texSubImage2D(q.TEXTURE_2D,te,N.x,N.y,De,ke,Y.image),te===0&&ee.generateMipmaps&&q.generateMipmap(q.TEXTURE_2D),Re.unbindTexture()},this.copyTextureToTexture3D=function(N,Y,ee,te,Q=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Me=N.max.x-N.min.x+1,De=N.max.y-N.min.y+1,ke=N.max.z-N.min.z+1,Fe=xe.convert(te.format),qe=xe.convert(te.type);let Ke;if(te.isData3DTexture)F.setTexture3D(te,0),Ke=q.TEXTURE_3D;else if(te.isDataArrayTexture||te.isCompressedArrayTexture)F.setTexture2DArray(te,0),Ke=q.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}q.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,te.flipY),q.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,te.premultiplyAlpha),q.pixelStorei(q.UNPACK_ALIGNMENT,te.unpackAlignment);const Ze=q.getParameter(q.UNPACK_ROW_LENGTH),Rt=q.getParameter(q.UNPACK_IMAGE_HEIGHT),on=q.getParameter(q.UNPACK_SKIP_PIXELS),kt=q.getParameter(q.UNPACK_SKIP_ROWS),Rn=q.getParameter(q.UNPACK_SKIP_IMAGES),Mt=ee.isCompressedTexture?ee.mipmaps[Q]:ee.image;q.pixelStorei(q.UNPACK_ROW_LENGTH,Mt.width),q.pixelStorei(q.UNPACK_IMAGE_HEIGHT,Mt.height),q.pixelStorei(q.UNPACK_SKIP_PIXELS,N.min.x),q.pixelStorei(q.UNPACK_SKIP_ROWS,N.min.y),q.pixelStorei(q.UNPACK_SKIP_IMAGES,N.min.z),ee.isDataTexture||ee.isData3DTexture?q.texSubImage3D(Ke,Q,Y.x,Y.y,Y.z,Me,De,ke,Fe,qe,Mt.data):ee.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),q.compressedTexSubImage3D(Ke,Q,Y.x,Y.y,Y.z,Me,De,ke,Fe,Mt.data)):q.texSubImage3D(Ke,Q,Y.x,Y.y,Y.z,Me,De,ke,Fe,qe,Mt),q.pixelStorei(q.UNPACK_ROW_LENGTH,Ze),q.pixelStorei(q.UNPACK_IMAGE_HEIGHT,Rt),q.pixelStorei(q.UNPACK_SKIP_PIXELS,on),q.pixelStorei(q.UNPACK_SKIP_ROWS,kt),q.pixelStorei(q.UNPACK_SKIP_IMAGES,Rn),Q===0&&te.generateMipmaps&&q.generateMipmap(Ke),Re.unbindTexture()},this.initTexture=function(N){N.isCubeTexture?F.setTextureCube(N,0):N.isData3DTexture?F.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?F.setTexture2DArray(N,0):F.setTexture2D(N,0),Re.unbindTexture()},this.resetState=function(){C=0,P=0,A=null,Re.reset(),$e.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Eu?"display-p3":"srgb",t.unpackColorSpace=pt.workingColorSpace===ol?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ft?ws:tm}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===ws?Ft:en}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class SE extends wm{}SE.prototype.isWebGL1Renderer=!0;class Mm extends mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class TE{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Kc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=jn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Ms("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=jn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=jn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const dn=new D;class Pu{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.applyMatrix4(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.applyNormalMatrix(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.transformDirection(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Xn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=gt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Xn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Xn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Xn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Xn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),i=gt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),i=gt(i,this.array),r=gt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Ct(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Pu(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const wp=new D,Mp=new _t,Ep=new _t,AE=new D,Sp=new He,pa=new D,gc=new $n,Tp=new He,vc=new Lr;class CE extends fe{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=rd,this.bindMatrix=new He,this.bindMatrixInverse=new He,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Vt),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,pa),this.boundingBox.expandByPoint(pa)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new $n),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,pa),this.boundingSphere.expandByPoint(pa)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),gc.copy(this.boundingSphere),gc.applyMatrix4(i),e.ray.intersectsSphere(gc)!==!1&&(Tp.copy(i).invert(),vc.copy(e.ray).applyMatrix4(Tp),!(this.boundingBox!==null&&vc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,vc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new _t,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===rd?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===U_?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Mp.fromBufferAttribute(i.attributes.skinIndex,e),Ep.fromBufferAttribute(i.attributes.skinWeight,e),wp.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const a=Ep.getComponent(r);if(a!==0){const l=Mp.getComponent(r);Sp.multiplyMatrices(n.bones[l].matrixWorld,n.boneInverses[l]),t.addScaledVector(AE.copy(wp).applyMatrix4(Sp),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Em extends mt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Cr extends jt{constructor(e=null,t=1,n=1,i,r,a,l,c,h=dt,d=dt,f,m){super(null,a,l,c,h,d,i,r,f,m),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ap=new He,PE=new He;class Ru{constructor(e=[],t=[]){this.uuid=jn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new He)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new He;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const l=e[r]?e[r].matrixWorld:PE;Ap.multiplyMatrices(l,t[r]),Ap.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Ru(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Cr(t,e,e,Wt,ft);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new Em),this.bones.push(a),this.boneInverses.push(new He().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const a=t[i];e.bones.push(a.uuid);const l=n[i];e.boneInverses.push(l.toArray())}return e}}class Jc extends Ct{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Js=new He,Cp=new He,fa=[],Pp=new Vt,RE=new He,io=new fe,so=new $n;class LE extends fe{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Jc(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,RE)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Vt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Js),Pp.copy(e.boundingBox).applyMatrix4(Js),this.boundingBox.union(Pp)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new $n),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Js),so.copy(e.boundingSphere).applyMatrix4(Js),this.boundingSphere.union(so)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(io.geometry=this.geometry,io.material=this.material,io.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),so.copy(this.boundingSphere),so.applyMatrix4(n),e.ray.intersectsSphere(so)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Js),Cp.multiplyMatrices(n,Js),io.matrixWorld=Cp,io.raycast(e,fa);for(let a=0,l=fa.length;a<l;a++){const c=fa[a];c.instanceId=r,c.object=this,t.push(c)}fa.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Jc(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Lu extends ii{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ve(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Rp=new D,Lp=new D,Ip=new He,_c=new Lr,ma=new $n;class Wn extends mt{constructor(e=new tn,t=new Lu){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Rp.fromBufferAttribute(t,i-1),Lp.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Rp.distanceTo(Lp);e.setAttribute("lineDistance",new wt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ma.copy(n.boundingSphere),ma.applyMatrix4(i),ma.radius+=r,e.ray.intersectsSphere(ma)===!1)return;Ip.copy(i).invert(),_c.copy(e.ray).applyMatrix4(Ip);const l=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=l*l,h=new D,d=new D,f=new D,m=new D,g=this.isLineSegments?2:1,b=n.index,x=n.attributes.position;if(b!==null){const v=Math.max(0,a.start),w=Math.min(b.count,a.start+a.count);for(let y=v,S=w-1;y<S;y+=g){const C=b.getX(y),P=b.getX(y+1);if(h.fromBufferAttribute(x,C),d.fromBufferAttribute(x,P),_c.distanceSqToSegment(h,d,m,f)>c)continue;m.applyMatrix4(this.matrixWorld);const I=e.ray.origin.distanceTo(m);I<e.near||I>e.far||t.push({distance:I,point:f.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else{const v=Math.max(0,a.start),w=Math.min(x.count,a.start+a.count);for(let y=v,S=w-1;y<S;y+=g){if(h.fromBufferAttribute(x,y),d.fromBufferAttribute(x,y+1),_c.distanceSqToSegment(h,d,m,f)>c)continue;m.applyMatrix4(this.matrixWorld);const P=e.ray.origin.distanceTo(m);P<e.near||P>e.far||t.push({distance:P,point:f.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const l=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}}const Dp=new D,Np=new D;class IE extends Wn{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Dp.fromBufferAttribute(t,i),Np.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Dp.distanceTo(Np);e.setAttribute("lineDistance",new wt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class DE extends Wn{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Sm extends ii{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ve(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Up=new He,eu=new Lr,ga=new $n,va=new D;class NE extends mt{constructor(e=new tn,t=new Sm){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ga.copy(n.boundingSphere),ga.applyMatrix4(i),ga.radius+=r,e.ray.intersectsSphere(ga)===!1)return;Up.copy(i).invert(),eu.copy(e.ray).applyMatrix4(Up);const l=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=l*l,h=n.index,f=n.attributes.position;if(h!==null){const m=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let b=m,M=g;b<M;b++){const x=h.getX(b);va.fromBufferAttribute(f,x),Fp(va,x,c,i,e,t,this)}}else{const m=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let b=m,M=g;b<M;b++)va.fromBufferAttribute(f,b),Fp(va,b,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const l=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}}function Fp(s,e,t,n,i,r,a){const l=eu.distanceSqToPoint(s);if(l<t){const c=new D;eu.closestPointToPoint(s,c),c.applyMatrix4(n);const h=i.ray.origin.distanceTo(c);if(h<i.near||h>i.far)return;r.push({distance:h,distanceToRay:Math.sqrt(l),point:c,index:e,face:null,object:a})}}class D1 extends jt{constructor(e,t,n,i,r,a,l,c,h,d,f,m){super(null,a,l,c,h,d,i,r,f,m),this.isCompressedTexture=!0,this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}class N1 extends jt{constructor(e,t,n,i,r,a,l,c,h){super(e,t,n,i,r,a,l,c,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class cn extends tn{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,l=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:l,thetaLength:c};const h=this;i=Math.floor(i),r=Math.floor(r);const d=[],f=[],m=[],g=[];let b=0;const M=[],x=n/2;let v=0;w(),a===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(d),this.setAttribute("position",new wt(f,3)),this.setAttribute("normal",new wt(m,3)),this.setAttribute("uv",new wt(g,2));function w(){const S=new D,C=new D;let P=0;const A=(t-e)/n;for(let I=0;I<=r;I++){const B=[],E=I/r,R=E*(t-e)+e;for(let k=0;k<=i;k++){const W=k/i,U=W*c+l,G=Math.sin(U),H=Math.cos(U);C.x=R*G,C.y=-E*n+x,C.z=R*H,f.push(C.x,C.y,C.z),S.set(G,A,H).normalize(),m.push(S.x,S.y,S.z),g.push(W,1-E),B.push(b++)}M.push(B)}for(let I=0;I<i;I++)for(let B=0;B<r;B++){const E=M[B][I],R=M[B+1][I],k=M[B+1][I+1],W=M[B][I+1];d.push(E,R,W),d.push(R,k,W),P+=6}h.addGroup(v,P,0),v+=P}function y(S){const C=b,P=new Ae,A=new D;let I=0;const B=S===!0?e:t,E=S===!0?1:-1;for(let k=1;k<=i;k++)f.push(0,x*E,0),m.push(0,E,0),g.push(.5,.5),b++;const R=b;for(let k=0;k<=i;k++){const U=k/i*c+l,G=Math.cos(U),H=Math.sin(U);A.x=B*H,A.y=x*E,A.z=B*G,f.push(A.x,A.y,A.z),m.push(0,E,0),P.x=G*.5+.5,P.y=H*.5*E+.5,g.push(P.x,P.y),b++}for(let k=0;k<i;k++){const W=C+k,U=R+k;S===!0?d.push(U,U+1,W):d.push(U+1,U,W),I+=3}h.addGroup(v,I,S===!0?1:2),v+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Iu extends tn{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const r=[],a=[];l(i),h(n),d(),this.setAttribute("position",new wt(r,3)),this.setAttribute("normal",new wt(r.slice(),3)),this.setAttribute("uv",new wt(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function l(w){const y=new D,S=new D,C=new D;for(let P=0;P<t.length;P+=3)g(t[P+0],y),g(t[P+1],S),g(t[P+2],C),c(y,S,C,w)}function c(w,y,S,C){const P=C+1,A=[];for(let I=0;I<=P;I++){A[I]=[];const B=w.clone().lerp(S,I/P),E=y.clone().lerp(S,I/P),R=P-I;for(let k=0;k<=R;k++)k===0&&I===P?A[I][k]=B:A[I][k]=B.clone().lerp(E,k/R)}for(let I=0;I<P;I++)for(let B=0;B<2*(P-I)-1;B++){const E=Math.floor(B/2);B%2===0?(m(A[I][E+1]),m(A[I+1][E]),m(A[I][E])):(m(A[I][E+1]),m(A[I+1][E+1]),m(A[I+1][E]))}}function h(w){const y=new D;for(let S=0;S<r.length;S+=3)y.x=r[S+0],y.y=r[S+1],y.z=r[S+2],y.normalize().multiplyScalar(w),r[S+0]=y.x,r[S+1]=y.y,r[S+2]=y.z}function d(){const w=new D;for(let y=0;y<r.length;y+=3){w.x=r[y+0],w.y=r[y+1],w.z=r[y+2];const S=x(w)/2/Math.PI+.5,C=v(w)/Math.PI+.5;a.push(S,1-C)}b(),f()}function f(){for(let w=0;w<a.length;w+=6){const y=a[w+0],S=a[w+2],C=a[w+4],P=Math.max(y,S,C),A=Math.min(y,S,C);P>.9&&A<.1&&(y<.2&&(a[w+0]+=1),S<.2&&(a[w+2]+=1),C<.2&&(a[w+4]+=1))}}function m(w){r.push(w.x,w.y,w.z)}function g(w,y){const S=w*3;y.x=e[S+0],y.y=e[S+1],y.z=e[S+2]}function b(){const w=new D,y=new D,S=new D,C=new D,P=new Ae,A=new Ae,I=new Ae;for(let B=0,E=0;B<r.length;B+=9,E+=6){w.set(r[B+0],r[B+1],r[B+2]),y.set(r[B+3],r[B+4],r[B+5]),S.set(r[B+6],r[B+7],r[B+8]),P.set(a[E+0],a[E+1]),A.set(a[E+2],a[E+3]),I.set(a[E+4],a[E+5]),C.copy(w).add(y).add(S).divideScalar(3);const R=x(C);M(P,E+0,w,R),M(A,E+2,y,R),M(I,E+4,S,R)}}function M(w,y,S,C){C<0&&w.x===1&&(a[y]=w.x-1),S.x===0&&S.z===0&&(a[y]=C/2/Math.PI+.5)}function x(w){return Math.atan2(w.z,-w.x)}function v(w){return Math.atan2(-w.y,Math.sqrt(w.x*w.x+w.z*w.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Iu(e.vertices,e.indices,e.radius,e.details)}}class gr extends Iu{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new gr(e.radius,e.detail)}}class ll extends tn{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:l},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(a+l,Math.PI);let h=0;const d=[],f=new D,m=new D,g=[],b=[],M=[],x=[];for(let v=0;v<=n;v++){const w=[],y=v/n;let S=0;v===0&&a===0?S=.5/t:v===n&&c===Math.PI&&(S=-.5/t);for(let C=0;C<=t;C++){const P=C/t;f.x=-e*Math.cos(i+P*r)*Math.sin(a+y*l),f.y=e*Math.cos(a+y*l),f.z=e*Math.sin(i+P*r)*Math.sin(a+y*l),b.push(f.x,f.y,f.z),m.copy(f).normalize(),M.push(m.x,m.y,m.z),x.push(P+S,1-y),w.push(h++)}d.push(w)}for(let v=0;v<n;v++)for(let w=0;w<t;w++){const y=d[v][w+1],S=d[v][w],C=d[v+1][w],P=d[v+1][w+1];(v!==0||a>0)&&g.push(y,S,P),(v!==n-1||c<Math.PI)&&g.push(S,C,P)}this.setIndex(g),this.setAttribute("position",new wt(b,3)),this.setAttribute("normal",new wt(M,3)),this.setAttribute("uv",new wt(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ll(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class vs extends tn{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const a=[],l=[],c=[],h=[],d=new D,f=new D,m=new D;for(let g=0;g<=n;g++)for(let b=0;b<=i;b++){const M=b/i*r,x=g/n*Math.PI*2;f.x=(e+t*Math.cos(x))*Math.cos(M),f.y=(e+t*Math.cos(x))*Math.sin(M),f.z=t*Math.sin(x),l.push(f.x,f.y,f.z),d.x=e*Math.cos(M),d.y=e*Math.sin(M),m.subVectors(f,d).normalize(),c.push(m.x,m.y,m.z),h.push(b/i),h.push(g/n)}for(let g=1;g<=n;g++)for(let b=1;b<=i;b++){const M=(i+1)*g+b-1,x=(i+1)*(g-1)+b-1,v=(i+1)*(g-1)+b,w=(i+1)*g+b;a.push(M,x,w),a.push(x,v,w)}this.setIndex(a),this.setAttribute("position",new wt(l,3)),this.setAttribute("normal",new wt(c,3)),this.setAttribute("uv",new wt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vs(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Du extends tn{constructor(e=1,t=.4,n=64,i=8,r=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:i,p:r,q:a},n=Math.floor(n),i=Math.floor(i);const l=[],c=[],h=[],d=[],f=new D,m=new D,g=new D,b=new D,M=new D,x=new D,v=new D;for(let y=0;y<=n;++y){const S=y/n*r*Math.PI*2;w(S,r,a,e,g),w(S+.01,r,a,e,b),x.subVectors(b,g),v.addVectors(b,g),M.crossVectors(x,v),v.crossVectors(M,x),M.normalize(),v.normalize();for(let C=0;C<=i;++C){const P=C/i*Math.PI*2,A=-t*Math.cos(P),I=t*Math.sin(P);f.x=g.x+(A*v.x+I*M.x),f.y=g.y+(A*v.y+I*M.y),f.z=g.z+(A*v.z+I*M.z),c.push(f.x,f.y,f.z),m.subVectors(f,g).normalize(),h.push(m.x,m.y,m.z),d.push(y/n),d.push(C/i)}}for(let y=1;y<=n;y++)for(let S=1;S<=i;S++){const C=(i+1)*(y-1)+(S-1),P=(i+1)*y+(S-1),A=(i+1)*y+S,I=(i+1)*(y-1)+S;l.push(C,P,I),l.push(P,A,I)}this.setIndex(l),this.setAttribute("position",new wt(c,3)),this.setAttribute("normal",new wt(h,3)),this.setAttribute("uv",new wt(d,2));function w(y,S,C,P,A){const I=Math.cos(y),B=Math.sin(y),E=C/S*y,R=Math.cos(E);A.x=P*(2+R)*.5*I,A.y=P*(2+R)*B*.5,A.z=P*Math.sin(E)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Du(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class cl extends ii{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ve(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nm,this.normalScale=new Ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ai extends cl{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ae(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Kt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ve(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ve(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ve(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function _a(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function UE(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function FE(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Op(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){const l=t[r]*e;for(let c=0;c!==e;++c)i[a++]=s[l+c]}return i}function Tm(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}class Do{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let l=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===l)break;if(r=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=r)){const l=t[1];e<l&&(n=2,r=l);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){const l=n+a>>>1;e<t[l]?a=l:n=l+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class OE extends Do{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ld,endingEnd:Ld}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,a=e+1,l=i[r],c=i[a];if(l===void 0)switch(this.getSettings_().endingStart){case Id:r=e,l=2*t-n;break;case Dd:r=i.length-2,l=t+i[r]-i[r+1];break;default:r=e,l=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Id:a=e,c=2*n-t;break;case Dd:a=1,c=n+i[1]-i[0];break;default:a=e-1,c=t}const h=(n-t)*.5,d=this.valueSize;this._weightPrev=h/(t-l),this._weightNext=h/(c-n),this._offsetPrev=r*d,this._offsetNext=a*d}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,c=e*l,h=c-l,d=this._offsetPrev,f=this._offsetNext,m=this._weightPrev,g=this._weightNext,b=(n-t)/(i-t),M=b*b,x=M*b,v=-m*x+2*m*M-m*b,w=(1+m)*x+(-1.5-2*m)*M+(-.5+m)*b+1,y=(-1-g)*x+(1.5+g)*M+.5*b,S=g*x-g*M;for(let C=0;C!==l;++C)r[C]=v*a[d+C]+w*a[h+C]+y*a[c+C]+S*a[f+C];return r}}class BE extends Do{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,c=e*l,h=c-l,d=(n-t)/(i-t),f=1-d;for(let m=0;m!==l;++m)r[m]=a[h+m]*f+a[c+m]*d;return r}}class kE extends Do{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class li{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=_a(t,this.TimeBufferType),this.values=_a(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:_a(e.times,Array),values:_a(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new kE(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new BE(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new OE(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Po:t=this.InterpolantFactoryMethodDiscrete;break;case Sr:t=this.InterpolantFactoryMethodLinear;break;case jl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Po;case this.InterpolantFactoryMethodLinear:return Sr;case this.InterpolantFactoryMethodSmooth:return jl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);const l=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*l,a*l)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let l=0;l!==r;l++){const c=n[l];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,l,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,l,c,a),e=!1;break}a=c}if(i!==void 0&&UE(i))for(let l=0,c=i.length;l!==c;++l){const h=i[l];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,l,h),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===jl,r=e.length-1;let a=1;for(let l=1;l<r;++l){let c=!1;const h=e[l],d=e[l+1];if(h!==d&&(l!==1||h!==e[0]))if(i)c=!0;else{const f=l*n,m=f-n,g=f+n;for(let b=0;b!==n;++b){const M=t[f+b];if(M!==t[m+b]||M!==t[g+b]){c=!0;break}}}if(c){if(l!==a){e[a]=e[l];const f=l*n,m=a*n;for(let g=0;g!==n;++g)t[m+g]=t[f+g]}++a}}if(r>0){e[a]=e[r];for(let l=r*n,c=a*n,h=0;h!==n;++h)t[c+h]=t[l+h];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}li.prototype.TimeBufferType=Float32Array;li.prototype.ValueBufferType=Float32Array;li.prototype.DefaultInterpolation=Sr;class Dr extends li{}Dr.prototype.ValueTypeName="bool";Dr.prototype.ValueBufferType=Array;Dr.prototype.DefaultInterpolation=Po;Dr.prototype.InterpolantFactoryMethodLinear=void 0;Dr.prototype.InterpolantFactoryMethodSmooth=void 0;class Am extends li{}Am.prototype.ValueTypeName="color";class Pr extends li{}Pr.prototype.ValueTypeName="number";class VE extends Do{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,c=(n-t)/(i-t);let h=e*l;for(let d=h+l;h!==d;h+=4)Gt.slerpFlat(r,0,a,h-l,a,h,c);return r}}class Es extends li{InterpolantFactoryMethodLinear(e){return new VE(this.times,this.values,this.getValueSize(),e)}}Es.prototype.ValueTypeName="quaternion";Es.prototype.DefaultInterpolation=Sr;Es.prototype.InterpolantFactoryMethodSmooth=void 0;class Nr extends li{}Nr.prototype.ValueTypeName="string";Nr.prototype.ValueBufferType=Array;Nr.prototype.DefaultInterpolation=Po;Nr.prototype.InterpolantFactoryMethodLinear=void 0;Nr.prototype.InterpolantFactoryMethodSmooth=void 0;class Rr extends li{}Rr.prototype.ValueTypeName="vector";class zE{constructor(e,t=-1,n,i=V_){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=jn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,l=n.length;a!==l;++a)t.push(GE(n[a]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=n.length;r!==a;++r)t.push(li.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,a=[];for(let l=0;l<r;l++){let c=[],h=[];c.push((l+r-1)%r,l,(l+1)%r),h.push(0,1,0);const d=FE(c);c=Op(c,1,d),h=Op(h,1,d),!i&&c[0]===0&&(c.push(r),h.push(h[0])),a.push(new Pr(".morphTargetInfluences["+t[l].name+"]",c,h).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let l=0,c=e.length;l<c;l++){const h=e[l],d=h.name.match(r);if(d&&d.length>1){const f=d[1];let m=i[f];m||(i[f]=m=[]),m.push(h)}}const a=[];for(const l in i)a.push(this.CreateFromMorphTargetSequence(l,i[l],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(f,m,g,b,M){if(g.length!==0){const x=[],v=[];Tm(g,x,v,b),x.length!==0&&M.push(new f(m,x,v))}},i=[],r=e.name||"default",a=e.fps||30,l=e.blendMode;let c=e.length||-1;const h=e.hierarchy||[];for(let f=0;f<h.length;f++){const m=h[f].keys;if(!(!m||m.length===0))if(m[0].morphTargets){const g={};let b;for(b=0;b<m.length;b++)if(m[b].morphTargets)for(let M=0;M<m[b].morphTargets.length;M++)g[m[b].morphTargets[M]]=-1;for(const M in g){const x=[],v=[];for(let w=0;w!==m[b].morphTargets.length;++w){const y=m[b];x.push(y.time),v.push(y.morphTarget===M?1:0)}i.push(new Pr(".morphTargetInfluence["+M+"]",x,v))}c=g.length*a}else{const g=".bones["+t[f].name+"]";n(Rr,g+".position",m,"pos",i),n(Es,g+".quaternion",m,"rot",i),n(Rr,g+".scale",m,"scl",i)}}return i.length===0?null:new this(r,c,i,l)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function HE(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Pr;case"vector":case"vector2":case"vector3":case"vector4":return Rr;case"color":return Am;case"quaternion":return Es;case"bool":case"boolean":return Dr;case"string":return Nr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function GE(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=HE(s.type);if(s.times===void 0){const t=[],n=[];Tm(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const Ki={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class WE{constructor(e,t,n){const i=this;let r=!1,a=0,l=0,c;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(d){l++,r===!1&&i.onStart!==void 0&&i.onStart(d,a,l),r=!0},this.itemEnd=function(d){a++,i.onProgress!==void 0&&i.onProgress(d,a,l),a===l&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(d){i.onError!==void 0&&i.onError(d)},this.resolveURL=function(d){return c?c(d):d},this.setURLModifier=function(d){return c=d,this},this.addHandler=function(d,f){return h.push(d,f),this},this.removeHandler=function(d){const f=h.indexOf(d);return f!==-1&&h.splice(f,2),this},this.getHandler=function(d){for(let f=0,m=h.length;f<m;f+=2){const g=h[f],b=h[f+1];if(g.global&&(g.lastIndex=0),g.test(d))return b}return null}}}const XE=new WE;class Ur{constructor(e){this.manager=e!==void 0?e:XE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Ur.DEFAULT_MATERIAL_NAME="__DEFAULT";const xi={};class jE extends Error{constructor(e,t){super(e),this.response=t}}class Cm extends Ur{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Ki.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(xi[e]!==void 0){xi[e].push({onLoad:t,onProgress:n,onError:i});return}xi[e]=[],xi[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),l=this.mimeType,c=this.responseType;fetch(a).then(h=>{if(h.status===200||h.status===0){if(h.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream=="undefined"||h.body===void 0||h.body.getReader===void 0)return h;const d=xi[e],f=h.body.getReader(),m=h.headers.get("Content-Length")||h.headers.get("X-File-Size"),g=m?parseInt(m):0,b=g!==0;let M=0;const x=new ReadableStream({start(v){w();function w(){f.read().then(({done:y,value:S})=>{if(y)v.close();else{M+=S.byteLength;const C=new ProgressEvent("progress",{lengthComputable:b,loaded:M,total:g});for(let P=0,A=d.length;P<A;P++){const I=d[P];I.onProgress&&I.onProgress(C)}v.enqueue(S),w()}})}}});return new Response(x)}else throw new jE(`fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`,h)}).then(h=>{switch(c){case"arraybuffer":return h.arrayBuffer();case"blob":return h.blob();case"document":return h.text().then(d=>new DOMParser().parseFromString(d,l));case"json":return h.json();default:if(l===void 0)return h.text();{const f=/charset="?([^;"\s]*)"?/i.exec(l),m=f&&f[1]?f[1].toLowerCase():void 0,g=new TextDecoder(m);return h.arrayBuffer().then(b=>g.decode(b))}}}).then(h=>{Ki.add(e,h);const d=xi[e];delete xi[e];for(let f=0,m=d.length;f<m;f++){const g=d[f];g.onLoad&&g.onLoad(h)}}).catch(h=>{const d=xi[e];if(d===void 0)throw this.manager.itemError(e),h;delete xi[e];for(let f=0,m=d.length;f<m;f++){const g=d[f];g.onError&&g.onError(h)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class qE extends Ur{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Ki.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const l=Ro("img");function c(){d(),Ki.add(e,this),t&&t(this),r.manager.itemEnd(e)}function h(f){d(),i&&i(f),r.manager.itemError(e),r.manager.itemEnd(e)}function d(){l.removeEventListener("load",c,!1),l.removeEventListener("error",h,!1)}return l.addEventListener("load",c,!1),l.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(l.crossOrigin=this.crossOrigin),r.manager.itemStart(e),l.src=e,l}}class YE extends Ur{constructor(e){super(e)}load(e,t,n,i){const r=new jt,a=new qE(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(l){r.image=l,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class Nu extends mt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ve(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const xc=new He,Bp=new D,kp=new D;class Uu{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ae(512,512),this.map=null,this.mapPass=null,this.matrix=new He,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Au,this._frameExtents=new Ae(1,1),this._viewportCount=1,this._viewports=[new _t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Bp.setFromMatrixPosition(e.matrixWorld),t.position.copy(Bp),kp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(kp),t.updateMatrixWorld(),xc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(xc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class KE extends Uu{constructor(){super(new fn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Tr*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class $E extends Nu{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.target=new mt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new KE}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Vp=new He,ro=new D,bc=new D;class ZE extends Uu{constructor(){super(new fn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ae(4,2),this._viewportCount=6,this._viewports=[new _t(2,1,1,1),new _t(0,1,1,1),new _t(3,1,1,1),new _t(1,1,1,1),new _t(3,0,1,1),new _t(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ro.setFromMatrixPosition(e.matrixWorld),n.position.copy(ro),bc.copy(n.position),bc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(bc),n.updateMatrixWorld(),i.makeTranslation(-ro.x,-ro.y,-ro.z),Vp.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vp)}}class Pm extends Nu{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new ZE}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class QE extends Uu{constructor(){super(new ai(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class JE extends Nu{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.target=new mt,this.shadow=new QE}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class So{static decodeText(e){if(typeof TextDecoder!="undefined")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class eS extends Ur{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap=="undefined"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Ki.get(e);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(h=>{t&&t(h),r.manager.itemEnd(e)}).catch(h=>{i&&i(h)});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}const l={};l.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",l.headers=this.requestHeader;const c=fetch(e,l).then(function(h){return h.blob()}).then(function(h){return createImageBitmap(h,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(h){return Ki.add(e,h),t&&t(h),r.manager.itemEnd(e),h}).catch(function(h){i&&i(h),Ki.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Ki.add(e,c),r.manager.itemStart(e)}}const Fu="\\[\\]\\.:\\/",tS=new RegExp("["+Fu+"]","g"),Ou="[^"+Fu+"]",nS="[^"+Fu.replace("\\.","")+"]",iS=/((?:WC+[\/:])*)/.source.replace("WC",Ou),sS=/(WCOD+)?/.source.replace("WCOD",nS),rS=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ou),oS=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ou),aS=new RegExp("^"+iS+sS+rS+oS+"$"),lS=["material","materials","bones","map"];class cS{constructor(e,t,n){const i=n||vt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class vt{constructor(e,t,n){this.path=t,this.parsedPath=n||vt.parseTrackName(t),this.node=vt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new vt.Composite(e,t,n):new vt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(tS,"")}static parseTrackName(e){const t=aS.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);lS.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const l=r[a];if(l.name===t||l.uuid===t)return l;const c=n(l.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=vt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let d=0;d<e.length;d++)if(e[d].name===h){h=d;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(h!==void 0){if(e[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[h]}}const a=e[i];if(a===void 0){const h=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+i+" but it wasn't found.",e);return}let l=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?l=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}vt.Composite=cS;vt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};vt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};vt.prototype.GetterByBindingType=[vt.prototype._getValue_direct,vt.prototype._getValue_array,vt.prototype._getValue_arrayElement,vt.prototype._getValue_toArray];vt.prototype.SetterByBindingTypeAndVersioning=[[vt.prototype._setValue_direct,vt.prototype._setValue_direct_setNeedsUpdate,vt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_array,vt.prototype._setValue_array_setNeedsUpdate,vt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_arrayElement,vt.prototype._setValue_arrayElement_setNeedsUpdate,vt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_fromArray,vt.prototype._setValue_fromArray_setNeedsUpdate,vt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class ul{constructor(e){this.value=e}clone(){return new ul(this.value.clone===void 0?this.value:this.value.clone())}}class uS{constructor(e,t,n=0,i=1/0){this.ray=new Lr(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Tu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return tu(e,this,n,t),n.sort(zp),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)tu(e[i],this,n,t);return n.sort(zp),n}}function zp(s,e){return s.distance-e.distance}function tu(s,e,t,n){if(s.layers.test(e.layers)&&s.raycast(e,t),n===!0){const i=s.children;for(let r=0,a=i.length;r<a;r++)tu(i[r],e,t,!0)}}class Hp{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Kt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Gp=new D,xa=new D;class Ti{constructor(e=new D,t=new D){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Gp.subVectors(e,this.start),xa.subVectors(this.end,this.start);const n=xa.dot(xa);let r=xa.dot(Gp)/n;return t&&(r=Kt(r,0,1)),r}closestPointToPoint(e,t,n){const i=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(i).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wu}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wu);const Rm=0,hS=1,dS=2,Wp=2,yc=1.25,Xp=1,Qi=6*4+4+4,hl=65535,pS=Math.pow(2,-24),wc=Symbol("SKIP_GENERATION");function Lm(s){return s.index?s.index.count:s.attributes.position.count}function Fr(s){return Lm(s)/3}function Im(s,e=ArrayBuffer){return s>65535?new Uint32Array(new e(4*s)):new Uint16Array(new e(2*s))}function fS(s,e){if(!s.index){const t=s.attributes.position.count,n=e.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,i=Im(t,n);s.setIndex(new Ct(i,1));for(let r=0;r<t;r++)i[r]=r}}function Dm(s){const e=Fr(s),t=s.drawRange,n=t.start/3,i=(t.start+t.count)/3,r=Math.max(0,n),a=Math.min(e,i)-r;return[{offset:Math.floor(r),count:Math.floor(a)}]}function Nm(s){if(!s.groups||!s.groups.length)return Dm(s);const e=[],t=new Set,n=s.drawRange,i=n.start/3,r=(n.start+n.count)/3;for(const l of s.groups){const c=l.start/3,h=(l.start+l.count)/3;t.add(Math.max(i,c)),t.add(Math.min(r,h))}const a=Array.from(t.values()).sort((l,c)=>l-c);for(let l=0;l<a.length-1;l++){const c=a[l],h=a[l+1];e.push({offset:Math.floor(c),count:Math.floor(h-c)})}return e}function mS(s){if(s.groups.length===0)return!1;const e=Fr(s),t=Nm(s).sort((r,a)=>r.offset-a.offset),n=t[t.length-1];n.count=Math.min(e-n.offset,n.count);let i=0;return t.forEach(({count:r})=>i+=r),e!==i}function Mc(s,e,t,n,i){let r=1/0,a=1/0,l=1/0,c=-1/0,h=-1/0,d=-1/0,f=1/0,m=1/0,g=1/0,b=-1/0,M=-1/0,x=-1/0;for(let v=e*6,w=(e+t)*6;v<w;v+=6){const y=s[v+0],S=s[v+1],C=y-S,P=y+S;C<r&&(r=C),P>c&&(c=P),y<f&&(f=y),y>b&&(b=y);const A=s[v+2],I=s[v+3],B=A-I,E=A+I;B<a&&(a=B),E>h&&(h=E),A<m&&(m=A),A>M&&(M=A);const R=s[v+4],k=s[v+5],W=R-k,U=R+k;W<l&&(l=W),U>d&&(d=U),R<g&&(g=R),R>x&&(x=R)}n[0]=r,n[1]=a,n[2]=l,n[3]=c,n[4]=h,n[5]=d,i[0]=f,i[1]=m,i[2]=g,i[3]=b,i[4]=M,i[5]=x}function gS(s,e=null,t=null,n=null){const i=s.attributes.position,r=s.index?s.index.array:null,a=Fr(s),l=i.normalized;let c;e===null?(c=new Float32Array(a*6*4),t=0,n=a):(c=e,t=t||0,n=n||a);const h=i.array,d=i.offset||0;let f=3;i.isInterleavedBufferAttribute&&(f=i.data.stride);const m=["getX","getY","getZ"];for(let g=t;g<t+n;g++){const b=g*3,M=g*6;let x=b+0,v=b+1,w=b+2;r&&(x=r[x],v=r[v],w=r[w]),l||(x=x*f+d,v=v*f+d,w=w*f+d);for(let y=0;y<3;y++){let S,C,P;l?(S=i[m[y]](x),C=i[m[y]](v),P=i[m[y]](w)):(S=h[x+y],C=h[v+y],P=h[w+y]);let A=S;C<A&&(A=C),P<A&&(A=P);let I=S;C>I&&(I=C),P>I&&(I=P);const B=(I-A)/2,E=y*2;c[M+E+0]=A+B,c[M+E+1]=B+(Math.abs(A)+B)*pS}}return c}function Ut(s,e,t){return t.min.x=e[s],t.min.y=e[s+1],t.min.z=e[s+2],t.max.x=e[s+3],t.max.y=e[s+4],t.max.z=e[s+5],t}function jp(s){let e=-1,t=-1/0;for(let n=0;n<3;n++){const i=s[n+3]-s[n];i>t&&(t=i,e=n)}return e}function qp(s,e){e.set(s)}function Yp(s,e,t){let n,i;for(let r=0;r<3;r++){const a=r+3;n=s[r],i=e[r],t[r]=n<i?n:i,n=s[a],i=e[a],t[a]=n>i?n:i}}function ba(s,e,t){for(let n=0;n<3;n++){const i=e[s+2*n],r=e[s+2*n+1],a=i-r,l=i+r;a<t[n]&&(t[n]=a),l>t[n+3]&&(t[n+3]=l)}}function oo(s){const e=s[3]-s[0],t=s[4]-s[1],n=s[5]-s[2];return 2*(e*t+t*n+n*e)}const wi=32,vS=(s,e)=>s.candidate-e.candidate,Gi=new Array(wi).fill().map(()=>({count:0,bounds:new Float32Array(6),rightCacheBounds:new Float32Array(6),leftCacheBounds:new Float32Array(6),candidate:0})),ya=new Float32Array(6);function _S(s,e,t,n,i,r){let a=-1,l=0;if(r===Rm)a=jp(e),a!==-1&&(l=(e[a]+e[a+3])/2);else if(r===hS)a=jp(s),a!==-1&&(l=xS(t,n,i,a));else if(r===dS){const c=oo(s);let h=yc*i;const d=n*6,f=(n+i)*6;for(let m=0;m<3;m++){const g=e[m],x=(e[m+3]-g)/wi;if(i<wi/4){const v=[...Gi];v.length=i;let w=0;for(let S=d;S<f;S+=6,w++){const C=v[w];C.candidate=t[S+2*m],C.count=0;const{bounds:P,leftCacheBounds:A,rightCacheBounds:I}=C;for(let B=0;B<3;B++)I[B]=1/0,I[B+3]=-1/0,A[B]=1/0,A[B+3]=-1/0,P[B]=1/0,P[B+3]=-1/0;ba(S,t,P)}v.sort(vS);let y=i;for(let S=0;S<y;S++){const C=v[S];for(;S+1<y&&v[S+1].candidate===C.candidate;)v.splice(S+1,1),y--}for(let S=d;S<f;S+=6){const C=t[S+2*m];for(let P=0;P<y;P++){const A=v[P];C>=A.candidate?ba(S,t,A.rightCacheBounds):(ba(S,t,A.leftCacheBounds),A.count++)}}for(let S=0;S<y;S++){const C=v[S],P=C.count,A=i-C.count,I=C.leftCacheBounds,B=C.rightCacheBounds;let E=0;P!==0&&(E=oo(I)/c);let R=0;A!==0&&(R=oo(B)/c);const k=Xp+yc*(E*P+R*A);k<h&&(a=m,h=k,l=C.candidate)}}else{for(let y=0;y<wi;y++){const S=Gi[y];S.count=0,S.candidate=g+x+y*x;const C=S.bounds;for(let P=0;P<3;P++)C[P]=1/0,C[P+3]=-1/0}for(let y=d;y<f;y+=6){let P=~~((t[y+2*m]-g)/x);P>=wi&&(P=wi-1);const A=Gi[P];A.count++,ba(y,t,A.bounds)}const v=Gi[wi-1];qp(v.bounds,v.rightCacheBounds);for(let y=wi-2;y>=0;y--){const S=Gi[y],C=Gi[y+1];Yp(S.bounds,C.rightCacheBounds,S.rightCacheBounds)}let w=0;for(let y=0;y<wi-1;y++){const S=Gi[y],C=S.count,P=S.bounds,I=Gi[y+1].rightCacheBounds;C!==0&&(w===0?qp(P,ya):Yp(P,ya,ya)),w+=C;let B=0,E=0;w!==0&&(B=oo(ya)/c);const R=i-w;R!==0&&(E=oo(I)/c);const k=Xp+yc*(B*w+E*R);k<h&&(a=m,h=k,l=S.candidate)}}}}else console.warn(`MeshBVH: Invalid build strategy value ${r} used.`);return{axis:a,pos:l}}function xS(s,e,t,n){let i=0;for(let r=e,a=e+t;r<a;r++)i+=s[r*6+n*2];return i/t}class Ec{constructor(){this.boundingData=new Float32Array(6)}}function bS(s,e,t,n,i,r){let a=n,l=n+i-1;const c=r.pos,h=r.axis*2;for(;;){for(;a<=l&&t[a*6+h]<c;)a++;for(;a<=l&&t[l*6+h]>=c;)l--;if(a<l){for(let d=0;d<3;d++){let f=e[a*3+d];e[a*3+d]=e[l*3+d],e[l*3+d]=f}for(let d=0;d<6;d++){let f=t[a*6+d];t[a*6+d]=t[l*6+d],t[l*6+d]=f}a++,l--}else return a}}function yS(s,e,t,n,i,r){let a=n,l=n+i-1;const c=r.pos,h=r.axis*2;for(;;){for(;a<=l&&t[a*6+h]<c;)a++;for(;a<=l&&t[l*6+h]>=c;)l--;if(a<l){let d=s[a];s[a]=s[l],s[l]=d;for(let f=0;f<6;f++){let m=t[a*6+f];t[a*6+f]=t[l*6+f],t[l*6+f]=m}a++,l--}else return a}}function vn(s,e){return e[s+15]===65535}function wn(s,e){return e[s+6]}function An(s,e){return e[s+14]}function Fn(s){return s+8}function Cn(s,e){return e[s+6]}function Bu(s,e){return e[s+7]}let Um,_o,za,Fm;const wS=Math.pow(2,32);function nu(s){return"count"in s?1:1+nu(s.left)+nu(s.right)}function MS(s,e,t){return Um=new Float32Array(t),_o=new Uint32Array(t),za=new Uint16Array(t),Fm=new Uint8Array(t),iu(s,e)}function iu(s,e){const t=s/4,n=s/2,i="count"in e,r=e.boundingData;for(let a=0;a<6;a++)Um[t+a]=r[a];if(i)if(e.buffer){const a=e.buffer;Fm.set(new Uint8Array(a),s);for(let l=s,c=s+a.byteLength;l<c;l+=Qi){const h=l/2;vn(h,za)||(_o[l/4+6]+=t)}return s+a.byteLength}else{const a=e.offset,l=e.count;return _o[t+6]=a,za[n+14]=l,za[n+15]=hl,s+Qi}else{const a=e.left,l=e.right,c=e.splitAxis;let h;if(h=iu(s+Qi,a),h/4>wS)throw new Error("MeshBVH: Cannot store child pointer greater than 32 bits.");return _o[t+6]=h/4,h=iu(h,l),_o[t+7]=c,h}}function ES(s,e){const t=(s.index?s.index.count:s.attributes.position.count)/3,n=t>2**16,i=n?4:2,r=e?new SharedArrayBuffer(t*i):new ArrayBuffer(t*i),a=n?new Uint32Array(r):new Uint16Array(r);for(let l=0,c=a.length;l<c;l++)a[l]=l;return a}function SS(s,e,t,n,i){const{maxDepth:r,verbose:a,maxLeafTris:l,strategy:c,onProgress:h,indirect:d}=i,f=s._indirectBuffer,m=s.geometry,g=m.index?m.index.array:null,b=d?yS:bS,M=Fr(m),x=new Float32Array(6);let v=!1;const w=new Ec;return Mc(e,t,n,w.boundingData,x),S(w,t,n,x),w;function y(C){h&&h(C/M)}function S(C,P,A,I=null,B=0){if(!v&&B>=r&&(v=!0,a&&(console.warn(`MeshBVH: Max depth of ${r} reached when generating BVH. Consider increasing maxDepth.`),console.warn(m))),A<=l||B>=r)return y(P+A),C.offset=P,C.count=A,C;const E=_S(C.boundingData,I,e,P,A,c);if(E.axis===-1)return y(P+A),C.offset=P,C.count=A,C;const R=b(f,g,e,P,A,E);if(R===P||R===P+A)y(P+A),C.offset=P,C.count=A;else{C.splitAxis=E.axis;const k=new Ec,W=P,U=R-P;C.left=k,Mc(e,W,U,k.boundingData,x),S(k,W,U,x,B+1);const G=new Ec,H=R,X=A-U;C.right=G,Mc(e,H,X,G.boundingData,x),S(G,H,X,x,B+1)}return C}}function TS(s,e){const t=s.geometry;e.indirect&&(s._indirectBuffer=ES(t,e.useSharedArrayBuffer),mS(t)&&!e.verbose&&console.warn('MeshBVH: Provided geometry contains groups that do not fully span the vertex contents while using the "indirect" option. BVH may incorrectly report intersections on unrendered portions of the geometry.')),s._indirectBuffer||fS(t,e);const n=e.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,i=gS(t),r=e.indirect?Dm(t):Nm(t);s._roots=r.map(a=>{const l=SS(s,i,a.offset,a.count,e),c=nu(l),h=new n(Qi*c);return MS(0,l,h),h})}class ri{constructor(){this.min=1/0,this.max=-1/0}setFromPointsField(e,t){let n=1/0,i=-1/0;for(let r=0,a=e.length;r<a;r++){const c=e[r][t];n=c<n?c:n,i=c>i?c:i}this.min=n,this.max=i}setFromPoints(e,t){let n=1/0,i=-1/0;for(let r=0,a=t.length;r<a;r++){const l=t[r],c=e.dot(l);n=c<n?c:n,i=c>i?c:i}this.min=n,this.max=i}isSeparated(e){return this.min>e.max||e.min>this.max}}ri.prototype.setFromBox=function(){const s=new D;return function(t,n){const i=n.min,r=n.max;let a=1/0,l=-1/0;for(let c=0;c<=1;c++)for(let h=0;h<=1;h++)for(let d=0;d<=1;d++){s.x=i.x*c+r.x*(1-c),s.y=i.y*h+r.y*(1-h),s.z=i.z*d+r.z*(1-d);const f=t.dot(s);a=Math.min(f,a),l=Math.max(f,l)}this.min=a,this.max=l}}();(function(){const s=new ri;return function(t,n){const i=t.points,r=t.satAxes,a=t.satBounds,l=n.points,c=n.satAxes,h=n.satBounds;for(let d=0;d<3;d++){const f=a[d],m=r[d];if(s.setFromPoints(m,l),f.isSeparated(s))return!1}for(let d=0;d<3;d++){const f=h[d],m=c[d];if(s.setFromPoints(m,i),f.isSeparated(s))return!1}}})();const AS=function(){const s=new D,e=new D,t=new D;return function(i,r,a){const l=i.start,c=s,h=r.start,d=e;t.subVectors(l,h),s.subVectors(i.end,i.start),e.subVectors(r.end,r.start);const f=t.dot(d),m=d.dot(c),g=d.dot(d),b=t.dot(c),x=c.dot(c)*g-m*m;let v,w;x!==0?v=(f*m-b*g)/x:v=0,w=(f+v*m)/g,a.x=v,a.y=w}}(),ku=function(){const s=new Ae,e=new D,t=new D;return function(i,r,a,l){AS(i,r,s);let c=s.x,h=s.y;if(c>=0&&c<=1&&h>=0&&h<=1){i.at(c,a),r.at(h,l);return}else if(c>=0&&c<=1){h<0?r.at(0,l):r.at(1,l),i.closestPointToPoint(l,!0,a);return}else if(h>=0&&h<=1){c<0?i.at(0,a):i.at(1,a),r.closestPointToPoint(a,!0,l);return}else{let d;c<0?d=i.start:d=i.end;let f;h<0?f=r.start:f=r.end;const m=e,g=t;if(i.closestPointToPoint(f,!0,e),r.closestPointToPoint(d,!0,t),m.distanceToSquared(f)<=g.distanceToSquared(d)){a.copy(m),l.copy(f);return}else{a.copy(d),l.copy(g);return}}}}(),CS=function(){const s=new D,e=new D,t=new Jn,n=new Ti;return function(r,a){const{radius:l,center:c}=r,{a:h,b:d,c:f}=a;if(n.start=h,n.end=d,n.closestPointToPoint(c,!0,s).distanceTo(c)<=l||(n.start=h,n.end=f,n.closestPointToPoint(c,!0,s).distanceTo(c)<=l)||(n.start=d,n.end=f,n.closestPointToPoint(c,!0,s).distanceTo(c)<=l))return!0;const M=a.getPlane(t);if(Math.abs(M.distanceToPoint(c))<=l){const v=M.projectPoint(c,e);if(a.containsPoint(v))return!0}return!1}}(),PS=1e-15;function Sc(s){return Math.abs(s)<PS}class Kn extends gn{constructor(...e){super(...e),this.isExtendedTriangle=!0,this.satAxes=new Array(4).fill().map(()=>new D),this.satBounds=new Array(4).fill().map(()=>new ri),this.points=[this.a,this.b,this.c],this.sphere=new $n,this.plane=new Jn,this.needsUpdate=!0}intersectsSphere(e){return CS(e,this)}update(){const e=this.a,t=this.b,n=this.c,i=this.points,r=this.satAxes,a=this.satBounds,l=r[0],c=a[0];this.getNormal(l),c.setFromPoints(l,i);const h=r[1],d=a[1];h.subVectors(e,t),d.setFromPoints(h,i);const f=r[2],m=a[2];f.subVectors(t,n),m.setFromPoints(f,i);const g=r[3],b=a[3];g.subVectors(n,e),b.setFromPoints(g,i),this.sphere.setFromPoints(this.points),this.plane.setFromNormalAndCoplanarPoint(l,e),this.needsUpdate=!1}}Kn.prototype.closestPointToSegment=function(){const s=new D,e=new D,t=new Ti;return function(i,r=null,a=null){const{start:l,end:c}=i,h=this.points;let d,f=1/0;for(let m=0;m<3;m++){const g=(m+1)%3;t.start.copy(h[m]),t.end.copy(h[g]),ku(t,i,s,e),d=s.distanceToSquared(e),d<f&&(f=d,r&&r.copy(s),a&&a.copy(e))}return this.closestPointToPoint(l,s),d=l.distanceToSquared(s),d<f&&(f=d,r&&r.copy(s),a&&a.copy(l)),this.closestPointToPoint(c,s),d=c.distanceToSquared(s),d<f&&(f=d,r&&r.copy(s),a&&a.copy(c)),Math.sqrt(f)}}();Kn.prototype.intersectsTriangle=function(){const s=new Kn,e=new Array(3),t=new Array(3),n=new ri,i=new ri,r=new D,a=new D,l=new D,c=new D,h=new D,d=new Ti,f=new Ti,m=new Ti,g=new D;function b(M,x,v){const w=M.points;let y=0,S=-1;for(let C=0;C<3;C++){const{start:P,end:A}=d;P.copy(w[C]),A.copy(w[(C+1)%3]),d.delta(a);const I=Sc(x.distanceToPoint(P));if(Sc(x.normal.dot(a))&&I){v.copy(d),y=2;break}const B=x.intersectLine(d,g);if(!B&&I&&g.copy(P),(B||I)&&!Sc(g.distanceTo(A))){if(y<=1)(y===1?v.start:v.end).copy(g),I&&(S=y);else if(y>=2){(S===1?v.start:v.end).copy(g),y=2;break}if(y++,y===2&&S===-1)break}}return y}return function(x,v=null,w=!1){this.needsUpdate&&this.update(),x.isExtendedTriangle?x.needsUpdate&&x.update():(s.copy(x),s.update(),x=s);const y=this.plane,S=x.plane;if(Math.abs(y.normal.dot(S.normal))>1-1e-10){const C=this.satBounds,P=this.satAxes;t[0]=x.a,t[1]=x.b,t[2]=x.c;for(let B=0;B<4;B++){const E=C[B],R=P[B];if(n.setFromPoints(R,t),E.isSeparated(n))return!1}const A=x.satBounds,I=x.satAxes;e[0]=this.a,e[1]=this.b,e[2]=this.c;for(let B=0;B<4;B++){const E=A[B],R=I[B];if(n.setFromPoints(R,e),E.isSeparated(n))return!1}for(let B=0;B<4;B++){const E=P[B];for(let R=0;R<4;R++){const k=I[R];if(r.crossVectors(E,k),n.setFromPoints(r,e),i.setFromPoints(r,t),n.isSeparated(i))return!1}}return v&&(w||console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."),v.start.set(0,0,0),v.end.set(0,0,0)),!0}else{const C=b(this,S,f);if(C===1&&x.containsPoint(f.end))return v&&(v.start.copy(f.end),v.end.copy(f.end)),!0;if(C!==2)return!1;const P=b(x,y,m);if(P===1&&this.containsPoint(m.end))return v&&(v.start.copy(m.end),v.end.copy(m.end)),!0;if(P!==2)return!1;if(f.delta(l),m.delta(c),l.dot(c)<0){let W=m.start;m.start=m.end,m.end=W}const A=f.start.dot(l),I=f.end.dot(l),B=m.start.dot(l),E=m.end.dot(l),R=I<B,k=A<E;return A!==E&&B!==I&&R===k?!1:(v&&(h.subVectors(f.start,m.start),h.dot(l)>0?v.start.copy(f.start):v.start.copy(m.start),h.subVectors(f.end,m.end),h.dot(l)<0?v.end.copy(f.end):v.end.copy(m.end)),!0)}}}();Kn.prototype.distanceToPoint=function(){const s=new D;return function(t){return this.closestPointToPoint(t,s),t.distanceTo(s)}}();Kn.prototype.distanceToTriangle=function(){const s=new D,e=new D,t=["a","b","c"],n=new Ti,i=new Ti;return function(a,l=null,c=null){const h=l||c?n:null;if(this.intersectsTriangle(a,h))return(l||c)&&(l&&h.getCenter(l),c&&h.getCenter(c)),0;let d=1/0;for(let f=0;f<3;f++){let m;const g=t[f],b=a[g];this.closestPointToPoint(b,s),m=b.distanceToSquared(s),m<d&&(d=m,l&&l.copy(s),c&&c.copy(b));const M=this[g];a.closestPointToPoint(M,s),m=M.distanceToSquared(s),m<d&&(d=m,l&&l.copy(M),c&&c.copy(s))}for(let f=0;f<3;f++){const m=t[f],g=t[(f+1)%3];n.set(this[m],this[g]);for(let b=0;b<3;b++){const M=t[b],x=t[(b+1)%3];i.set(a[M],a[x]),ku(n,i,s,e);const v=s.distanceToSquared(e);v<d&&(d=v,l&&l.copy(s),c&&c.copy(e))}}return Math.sqrt(d)}}();class bn{constructor(e,t,n){this.isOrientedBox=!0,this.min=new D,this.max=new D,this.matrix=new He,this.invMatrix=new He,this.points=new Array(8).fill().map(()=>new D),this.satAxes=new Array(3).fill().map(()=>new D),this.satBounds=new Array(3).fill().map(()=>new ri),this.alignedSatBounds=new Array(3).fill().map(()=>new ri),this.needsUpdate=!1,e&&this.min.copy(e),t&&this.max.copy(t),n&&this.matrix.copy(n)}set(e,t,n){this.min.copy(e),this.max.copy(t),this.matrix.copy(n),this.needsUpdate=!0}copy(e){this.min.copy(e.min),this.max.copy(e.max),this.matrix.copy(e.matrix),this.needsUpdate=!0}}bn.prototype.update=function(){return function(){const e=this.matrix,t=this.min,n=this.max,i=this.points;for(let h=0;h<=1;h++)for(let d=0;d<=1;d++)for(let f=0;f<=1;f++){const m=1*h|2*d|4*f,g=i[m];g.x=h?n.x:t.x,g.y=d?n.y:t.y,g.z=f?n.z:t.z,g.applyMatrix4(e)}const r=this.satBounds,a=this.satAxes,l=i[0];for(let h=0;h<3;h++){const d=a[h],f=r[h],m=1<<h,g=i[m];d.subVectors(l,g),f.setFromPoints(d,i)}const c=this.alignedSatBounds;c[0].setFromPointsField(i,"x"),c[1].setFromPointsField(i,"y"),c[2].setFromPointsField(i,"z"),this.invMatrix.copy(this.matrix).invert(),this.needsUpdate=!1}}();bn.prototype.intersectsBox=function(){const s=new ri;return function(t){this.needsUpdate&&this.update();const n=t.min,i=t.max,r=this.satBounds,a=this.satAxes,l=this.alignedSatBounds;if(s.min=n.x,s.max=i.x,l[0].isSeparated(s)||(s.min=n.y,s.max=i.y,l[1].isSeparated(s))||(s.min=n.z,s.max=i.z,l[2].isSeparated(s)))return!1;for(let c=0;c<3;c++){const h=a[c],d=r[c];if(s.setFromBox(h,t),d.isSeparated(s))return!1}return!0}}();bn.prototype.intersectsTriangle=function(){const s=new Kn,e=new Array(3),t=new ri,n=new ri,i=new D;return function(a){this.needsUpdate&&this.update(),a.isExtendedTriangle?a.needsUpdate&&a.update():(s.copy(a),s.update(),a=s);const l=this.satBounds,c=this.satAxes;e[0]=a.a,e[1]=a.b,e[2]=a.c;for(let m=0;m<3;m++){const g=l[m],b=c[m];if(t.setFromPoints(b,e),g.isSeparated(t))return!1}const h=a.satBounds,d=a.satAxes,f=this.points;for(let m=0;m<3;m++){const g=h[m],b=d[m];if(t.setFromPoints(b,f),g.isSeparated(t))return!1}for(let m=0;m<3;m++){const g=c[m];for(let b=0;b<4;b++){const M=d[b];if(i.crossVectors(g,M),t.setFromPoints(i,e),n.setFromPoints(i,f),t.isSeparated(n))return!1}}return!0}}();bn.prototype.closestPointToPoint=function(){return function(e,t){return this.needsUpdate&&this.update(),t.copy(e).applyMatrix4(this.invMatrix).clamp(this.min,this.max).applyMatrix4(this.matrix),t}}();bn.prototype.distanceToPoint=function(){const s=new D;return function(t){return this.closestPointToPoint(t,s),t.distanceTo(s)}}();bn.prototype.distanceToBox=function(){const s=["x","y","z"],e=new Array(12).fill().map(()=>new Ti),t=new Array(12).fill().map(()=>new Ti),n=new D,i=new D;return function(a,l=0,c=null,h=null){if(this.needsUpdate&&this.update(),this.intersectsBox(a))return(c||h)&&(a.getCenter(i),this.closestPointToPoint(i,n),a.closestPointToPoint(n,i),c&&c.copy(n),h&&h.copy(i)),0;const d=l*l,f=a.min,m=a.max,g=this.points;let b=1/0;for(let x=0;x<8;x++){const v=g[x];i.copy(v).clamp(f,m);const w=v.distanceToSquared(i);if(w<b&&(b=w,c&&c.copy(v),h&&h.copy(i),w<d))return Math.sqrt(w)}let M=0;for(let x=0;x<3;x++)for(let v=0;v<=1;v++)for(let w=0;w<=1;w++){const y=(x+1)%3,S=(x+2)%3,C=v<<y|w<<S,P=1<<x|v<<y|w<<S,A=g[C],I=g[P];e[M].set(A,I);const E=s[x],R=s[y],k=s[S],W=t[M],U=W.start,G=W.end;U[E]=f[E],U[R]=v?f[R]:m[R],U[k]=w?f[k]:m[R],G[E]=m[E],G[R]=v?f[R]:m[R],G[k]=w?f[k]:m[R],M++}for(let x=0;x<=1;x++)for(let v=0;v<=1;v++)for(let w=0;w<=1;w++){i.x=x?m.x:f.x,i.y=v?m.y:f.y,i.z=w?m.z:f.z,this.closestPointToPoint(i,n);const y=i.distanceToSquared(n);if(y<b&&(b=y,c&&c.copy(n),h&&h.copy(i),y<d))return Math.sqrt(y)}for(let x=0;x<12;x++){const v=e[x];for(let w=0;w<12;w++){const y=t[w];ku(v,y,n,i);const S=n.distanceToSquared(i);if(S<b&&(b=S,c&&c.copy(n),h&&h.copy(i),S<d))return Math.sqrt(S)}}return Math.sqrt(b)}}();class Vu{constructor(e){this._getNewPrimitive=e,this._primitives=[]}getPrimitive(){const e=this._primitives;return e.length===0?this._getNewPrimitive():e.pop()}releasePrimitive(e){this._primitives.push(e)}}class RS extends Vu{constructor(){super(()=>new Kn)}}const On=new RS;class LS{constructor(){this.float32Array=null,this.uint16Array=null,this.uint32Array=null;const e=[];let t=null;this.setBuffer=n=>{t&&e.push(t),t=n,this.float32Array=new Float32Array(n),this.uint16Array=new Uint16Array(n),this.uint32Array=new Uint32Array(n)},this.clearBuffer=()=>{t=null,this.float32Array=null,this.uint16Array=null,this.uint32Array=null,e.length!==0&&this.setBuffer(e.pop())}}}const Pt=new LS;let $i,vr;const er=[],wa=new Vu(()=>new Vt);function IS(s,e,t,n,i,r){$i=wa.getPrimitive(),vr=wa.getPrimitive(),er.push($i,vr),Pt.setBuffer(s._roots[e]);const a=su(0,s.geometry,t,n,i,r);Pt.clearBuffer(),wa.releasePrimitive($i),wa.releasePrimitive(vr),er.pop(),er.pop();const l=er.length;return l>0&&(vr=er[l-1],$i=er[l-2]),a}function su(s,e,t,n,i=null,r=0,a=0){const{float32Array:l,uint16Array:c,uint32Array:h}=Pt;let d=s*2;if(vn(d,c)){const m=wn(s,h),g=An(d,c);return Ut(s,l,$i),n(m,g,!1,a,r+s,$i)}else{let E=function(k){const{uint16Array:W,uint32Array:U}=Pt;let G=k*2;for(;!vn(G,W);)k=Fn(k),G=k*2;return wn(k,U)},R=function(k){const{uint16Array:W,uint32Array:U}=Pt;let G=k*2;for(;!vn(G,W);)k=Cn(k,U),G=k*2;return wn(k,U)+An(G,W)};const m=Fn(s),g=Cn(s,h);let b=m,M=g,x,v,w,y;if(i&&(w=$i,y=vr,Ut(b,l,w),Ut(M,l,y),x=i(w),v=i(y),v<x)){b=g,M=m;const k=x;x=v,v=k,w=y}w||(w=$i,Ut(b,l,w));const S=vn(b*2,c),C=t(w,S,x,a+1,r+b);let P;if(C===Wp){const k=E(b),U=R(b)-k;P=n(k,U,!0,a+1,r+b,w)}else P=C&&su(b,e,t,n,i,r,a+1);if(P)return!0;y=vr,Ut(M,l,y);const A=vn(M*2,c),I=t(y,A,v,a+1,r+M);let B;if(I===Wp){const k=E(M),U=R(M)-k;B=n(k,U,!0,a+1,r+M,y)}else B=I&&su(M,e,t,n,i,r,a+1);return!!B}}const ao=new D,Tc=new D;function DS(s,e,t={},n=0,i=1/0){const r=n*n,a=i*i;let l=1/0,c=null;if(s.shapecast({boundsTraverseOrder:d=>(ao.copy(e).clamp(d.min,d.max),ao.distanceToSquared(e)),intersectsBounds:(d,f,m)=>m<l&&m<a,intersectsTriangle:(d,f)=>{d.closestPointToPoint(e,ao);const m=e.distanceToSquared(ao);return m<l&&(Tc.copy(ao),l=m,c=f),m<r}}),l===1/0)return null;const h=Math.sqrt(l);return t.point?t.point.copy(Tc):t.point=Tc.clone(),t.distance=h,t.faceIndex=c,t}const tr=new D,nr=new D,ir=new D,Ma=new Ae,Ea=new Ae,Sa=new Ae,Kp=new D,$p=new D,Zp=new D,Ta=new D;function NS(s,e,t,n,i,r){let a;return r===xn?a=s.intersectTriangle(n,t,e,!0,i):a=s.intersectTriangle(e,t,n,r!==mn,i),a===null?null:{distance:s.origin.distanceTo(i),point:i.clone()}}function US(s,e,t,n,i,r,a,l,c){tr.fromBufferAttribute(e,r),nr.fromBufferAttribute(e,a),ir.fromBufferAttribute(e,l);const h=NS(s,tr,nr,ir,Ta,c);if(h){n&&(Ma.fromBufferAttribute(n,r),Ea.fromBufferAttribute(n,a),Sa.fromBufferAttribute(n,l),h.uv=gn.getInterpolation(Ta,tr,nr,ir,Ma,Ea,Sa,new Ae)),i&&(Ma.fromBufferAttribute(i,r),Ea.fromBufferAttribute(i,a),Sa.fromBufferAttribute(i,l),h.uv1=gn.getInterpolation(Ta,tr,nr,ir,Ma,Ea,Sa,new Ae)),t&&(Kp.fromBufferAttribute(t,r),$p.fromBufferAttribute(t,a),Zp.fromBufferAttribute(t,l),h.normal=gn.getInterpolation(Ta,tr,nr,ir,Kp,$p,Zp,new D),h.normal.dot(s.direction)>0&&h.normal.multiplyScalar(-1));const d={a:r,b:a,c:l,normal:new D,materialIndex:0};gn.getNormal(tr,nr,ir,d.normal),h.face=d,h.faceIndex=r}return h}function dl(s,e,t,n,i){const r=n*3;let a=r+0,l=r+1,c=r+2;const h=s.index;s.index&&(a=h.getX(a),l=h.getX(l),c=h.getX(c));const{position:d,normal:f,uv:m,uv1:g}=s.attributes,b=US(t,d,f,m,g,a,l,c,e);return b?(b.faceIndex=n,i&&i.push(b),b):null}function Xt(s,e,t,n){const i=s.a,r=s.b,a=s.c;let l=e,c=e+1,h=e+2;t&&(l=t.getX(l),c=t.getX(c),h=t.getX(h)),i.x=n.getX(l),i.y=n.getY(l),i.z=n.getZ(l),r.x=n.getX(c),r.y=n.getY(c),r.z=n.getZ(c),a.x=n.getX(h),a.y=n.getY(h),a.z=n.getZ(h)}function FS(s,e,t,n,i,r){const{geometry:a,_indirectBuffer:l}=s;for(let c=n,h=n+i;c<h;c++)dl(a,e,t,c,r)}function OS(s,e,t,n,i){const{geometry:r,_indirectBuffer:a}=s;let l=1/0,c=null;for(let h=n,d=n+i;h<d;h++){let f;f=dl(r,e,t,h),f&&f.distance<l&&(c=f,l=f.distance)}return c}function BS(s,e,t,n,i,r,a){const{geometry:l}=t,{index:c}=l,h=l.attributes.position;for(let d=s,f=e+s;d<f;d++){let m;if(m=d,Xt(a,m*3,c,h),a.needsUpdate=!0,n(a,m,i,r))return!0}return!1}function kS(s,e=null){e&&Array.isArray(e)&&(e=new Set(e));const t=s.geometry,n=t.index?t.index.array:null,i=t.attributes.position;let r,a,l,c,h=0;const d=s._roots;for(let m=0,g=d.length;m<g;m++)r=d[m],a=new Uint32Array(r),l=new Uint16Array(r),c=new Float32Array(r),f(0,h),h+=r.byteLength;function f(m,g,b=!1){const M=m*2;if(l[M+15]===hl){const v=a[m+6],w=l[M+14];let y=1/0,S=1/0,C=1/0,P=-1/0,A=-1/0,I=-1/0;for(let B=3*v,E=3*(v+w);B<E;B++){let R=n[B];const k=i.getX(R),W=i.getY(R),U=i.getZ(R);k<y&&(y=k),k>P&&(P=k),W<S&&(S=W),W>A&&(A=W),U<C&&(C=U),U>I&&(I=U)}return c[m+0]!==y||c[m+1]!==S||c[m+2]!==C||c[m+3]!==P||c[m+4]!==A||c[m+5]!==I?(c[m+0]=y,c[m+1]=S,c[m+2]=C,c[m+3]=P,c[m+4]=A,c[m+5]=I,!0):!1}else{const v=m+8,w=a[m+6],y=v+g,S=w+g;let C=b,P=!1,A=!1;e?C||(P=e.has(y),A=e.has(S),C=!P&&!A):(P=!0,A=!0);const I=C||P,B=C||A;let E=!1;I&&(E=f(v,g,C));let R=!1;B&&(R=f(w,g,C));const k=E||R;if(k)for(let W=0;W<3;W++){const U=v+W,G=w+W,H=c[U],X=c[U+3],J=c[G],$=c[G+3];c[m+W]=H<J?H:J,c[m+W+3]=X>$?X:$}return k}}}const Qp=new Vt;function Ji(s,e,t,n){return Ut(s,e,Qp),t.intersectBox(Qp,n)}function VS(s,e,t,n,i,r){const{geometry:a,_indirectBuffer:l}=s;for(let c=n,h=n+i;c<h;c++){let d=l?l[c]:c;dl(a,e,t,d,r)}}function zS(s,e,t,n,i){const{geometry:r,_indirectBuffer:a}=s;let l=1/0,c=null;for(let h=n,d=n+i;h<d;h++){let f;f=dl(r,e,t,a?a[h]:h),f&&f.distance<l&&(c=f,l=f.distance)}return c}function HS(s,e,t,n,i,r,a){const{geometry:l}=t,{index:c}=l,h=l.attributes.position;for(let d=s,f=e+s;d<f;d++){let m;if(m=t.resolveTriangleIndex(d),Xt(a,m*3,c,h),a.needsUpdate=!0,n(a,m,i,r))return!0}return!1}const Jp=new D;function GS(s,e,t,n,i){Pt.setBuffer(s._roots[e]),ru(0,s,t,n,i),Pt.clearBuffer()}function ru(s,e,t,n,i){const{float32Array:r,uint16Array:a,uint32Array:l}=Pt,c=s*2;if(vn(c,a)){const d=wn(s,l),f=An(c,a);FS(e,t,n,d,f,i)}else{const d=Fn(s);Ji(d,r,n,Jp)&&ru(d,e,t,n,i);const f=Cn(s,l);Ji(f,r,n,Jp)&&ru(f,e,t,n,i)}}const ef=new D,WS=["x","y","z"];function XS(s,e,t,n){Pt.setBuffer(s._roots[e]);const i=ou(0,s,t,n);return Pt.clearBuffer(),i}function ou(s,e,t,n){const{float32Array:i,uint16Array:r,uint32Array:a}=Pt;let l=s*2;if(vn(l,r)){const h=wn(s,a),d=An(l,r);return OS(e,t,n,h,d)}else{const h=Bu(s,a),d=WS[h],m=n.direction[d]>=0;let g,b;m?(g=Fn(s),b=Cn(s,a)):(g=Cn(s,a),b=Fn(s));const x=Ji(g,i,n,ef)?ou(g,e,t,n):null;if(x){const y=x.point[d];if(m?y<=i[b+h]:y>=i[b+h+3])return x}const w=Ji(b,i,n,ef)?ou(b,e,t,n):null;return x&&w?x.distance<=w.distance?x:w:x||w||null}}const Aa=new Vt,sr=new Kn,rr=new Kn,lo=new He,tf=new bn,Ca=new bn;function jS(s,e,t,n){Pt.setBuffer(s._roots[e]);const i=au(0,s,t,n);return Pt.clearBuffer(),i}function au(s,e,t,n,i=null){const{float32Array:r,uint16Array:a,uint32Array:l}=Pt;let c=s*2;if(i===null&&(t.boundingBox||t.computeBoundingBox(),tf.set(t.boundingBox.min,t.boundingBox.max,n),i=tf),vn(c,a)){const d=e.geometry,f=d.index,m=d.attributes.position,g=t.index,b=t.attributes.position,M=wn(s,l),x=An(c,a);if(lo.copy(n).invert(),t.boundsTree)return Ut(s,r,Ca),Ca.matrix.copy(lo),Ca.needsUpdate=!0,t.boundsTree.shapecast({intersectsBounds:w=>Ca.intersectsBox(w),intersectsTriangle:w=>{w.a.applyMatrix4(n),w.b.applyMatrix4(n),w.c.applyMatrix4(n),w.needsUpdate=!0;for(let y=M*3,S=(x+M)*3;y<S;y+=3)if(Xt(rr,y,f,m),rr.needsUpdate=!0,w.intersectsTriangle(rr))return!0;return!1}});for(let v=M*3,w=(x+M)*3;v<w;v+=3){Xt(sr,v,f,m),sr.a.applyMatrix4(lo),sr.b.applyMatrix4(lo),sr.c.applyMatrix4(lo),sr.needsUpdate=!0;for(let y=0,S=g.count;y<S;y+=3)if(Xt(rr,y,g,b),rr.needsUpdate=!0,sr.intersectsTriangle(rr))return!0}}else{const d=s+8,f=l[s+6];return Ut(d,r,Aa),!!(i.intersectsBox(Aa)&&au(d,e,t,n,i)||(Ut(f,r,Aa),i.intersectsBox(Aa)&&au(f,e,t,n,i)))}}const Pa=new He,Ac=new bn,co=new bn,qS=new D,YS=new D,KS=new D,$S=new D;function ZS(s,e,t,n={},i={},r=0,a=1/0){e.boundingBox||e.computeBoundingBox(),Ac.set(e.boundingBox.min,e.boundingBox.max,t),Ac.needsUpdate=!0;const l=s.geometry,c=l.attributes.position,h=l.index,d=e.attributes.position,f=e.index,m=On.getPrimitive(),g=On.getPrimitive();let b=qS,M=YS,x=null,v=null;i&&(x=KS,v=$S);let w=1/0,y=null,S=null;return Pa.copy(t).invert(),co.matrix.copy(Pa),s.shapecast({boundsTraverseOrder:C=>Ac.distanceToBox(C),intersectsBounds:(C,P,A)=>A<w&&A<a?(P&&(co.min.copy(C.min),co.max.copy(C.max),co.needsUpdate=!0),!0):!1,intersectsRange:(C,P)=>{if(e.boundsTree)return e.boundsTree.shapecast({boundsTraverseOrder:I=>co.distanceToBox(I),intersectsBounds:(I,B,E)=>E<w&&E<a,intersectsRange:(I,B)=>{for(let E=I,R=I+B;E<R;E++){Xt(g,3*E,f,d),g.a.applyMatrix4(t),g.b.applyMatrix4(t),g.c.applyMatrix4(t),g.needsUpdate=!0;for(let k=C,W=C+P;k<W;k++){Xt(m,3*k,h,c),m.needsUpdate=!0;const U=m.distanceToTriangle(g,b,x);if(U<w&&(M.copy(b),v&&v.copy(x),w=U,y=k,S=E),U<r)return!0}}}});{const A=Fr(e);for(let I=0,B=A;I<B;I++){Xt(g,3*I,f,d),g.a.applyMatrix4(t),g.b.applyMatrix4(t),g.c.applyMatrix4(t),g.needsUpdate=!0;for(let E=C,R=C+P;E<R;E++){Xt(m,3*E,h,c),m.needsUpdate=!0;const k=m.distanceToTriangle(g,b,x);if(k<w&&(M.copy(b),v&&v.copy(x),w=k,y=E,S=I),k<r)return!0}}}}}),On.releasePrimitive(m),On.releasePrimitive(g),w===1/0?null:(n.point?n.point.copy(M):n.point=M.clone(),n.distance=w,n.faceIndex=y,i&&(i.point?i.point.copy(v):i.point=v.clone(),i.point.applyMatrix4(Pa),M.applyMatrix4(Pa),i.distance=M.sub(i.point).length(),i.faceIndex=S),n)}function QS(s,e=null){e&&Array.isArray(e)&&(e=new Set(e));const t=s.geometry,n=t.index?t.index.array:null,i=t.attributes.position;let r,a,l,c,h=0;const d=s._roots;for(let m=0,g=d.length;m<g;m++)r=d[m],a=new Uint32Array(r),l=new Uint16Array(r),c=new Float32Array(r),f(0,h),h+=r.byteLength;function f(m,g,b=!1){const M=m*2;if(l[M+15]===hl){const v=a[m+6],w=l[M+14];let y=1/0,S=1/0,C=1/0,P=-1/0,A=-1/0,I=-1/0;for(let B=v,E=v+w;B<E;B++){const R=3*s.resolveTriangleIndex(B);for(let k=0;k<3;k++){let W=R+k;W=n?n[W]:W;const U=i.getX(W),G=i.getY(W),H=i.getZ(W);U<y&&(y=U),U>P&&(P=U),G<S&&(S=G),G>A&&(A=G),H<C&&(C=H),H>I&&(I=H)}}return c[m+0]!==y||c[m+1]!==S||c[m+2]!==C||c[m+3]!==P||c[m+4]!==A||c[m+5]!==I?(c[m+0]=y,c[m+1]=S,c[m+2]=C,c[m+3]=P,c[m+4]=A,c[m+5]=I,!0):!1}else{const v=m+8,w=a[m+6],y=v+g,S=w+g;let C=b,P=!1,A=!1;e?C||(P=e.has(y),A=e.has(S),C=!P&&!A):(P=!0,A=!0);const I=C||P,B=C||A;let E=!1;I&&(E=f(v,g,C));let R=!1;B&&(R=f(w,g,C));const k=E||R;if(k)for(let W=0;W<3;W++){const U=v+W,G=w+W,H=c[U],X=c[U+3],J=c[G],$=c[G+3];c[m+W]=H<J?H:J,c[m+W+3]=X>$?X:$}return k}}}const nf=new D;function JS(s,e,t,n,i){Pt.setBuffer(s._roots[e]),lu(0,s,t,n,i),Pt.clearBuffer()}function lu(s,e,t,n,i){const{float32Array:r,uint16Array:a,uint32Array:l}=Pt,c=s*2;if(vn(c,a)){const d=wn(s,l),f=An(c,a);VS(e,t,n,d,f,i)}else{const d=Fn(s);Ji(d,r,n,nf)&&lu(d,e,t,n,i);const f=Cn(s,l);Ji(f,r,n,nf)&&lu(f,e,t,n,i)}}const sf=new D,eT=["x","y","z"];function tT(s,e,t,n){Pt.setBuffer(s._roots[e]);const i=cu(0,s,t,n);return Pt.clearBuffer(),i}function cu(s,e,t,n){const{float32Array:i,uint16Array:r,uint32Array:a}=Pt;let l=s*2;if(vn(l,r)){const h=wn(s,a),d=An(l,r);return zS(e,t,n,h,d)}else{const h=Bu(s,a),d=eT[h],m=n.direction[d]>=0;let g,b;m?(g=Fn(s),b=Cn(s,a)):(g=Cn(s,a),b=Fn(s));const x=Ji(g,i,n,sf)?cu(g,e,t,n):null;if(x){const y=x.point[d];if(m?y<=i[b+h]:y>=i[b+h+3])return x}const w=Ji(b,i,n,sf)?cu(b,e,t,n):null;return x&&w?x.distance<=w.distance?x:w:x||w||null}}const Ra=new Vt,or=new Kn,ar=new Kn,uo=new He,rf=new bn,La=new bn;function nT(s,e,t,n){Pt.setBuffer(s._roots[e]);const i=uu(0,s,t,n);return Pt.clearBuffer(),i}function uu(s,e,t,n,i=null){const{float32Array:r,uint16Array:a,uint32Array:l}=Pt;let c=s*2;if(i===null&&(t.boundingBox||t.computeBoundingBox(),rf.set(t.boundingBox.min,t.boundingBox.max,n),i=rf),vn(c,a)){const d=e.geometry,f=d.index,m=d.attributes.position,g=t.index,b=t.attributes.position,M=wn(s,l),x=An(c,a);if(uo.copy(n).invert(),t.boundsTree)return Ut(s,r,La),La.matrix.copy(uo),La.needsUpdate=!0,t.boundsTree.shapecast({intersectsBounds:w=>La.intersectsBox(w),intersectsTriangle:w=>{w.a.applyMatrix4(n),w.b.applyMatrix4(n),w.c.applyMatrix4(n),w.needsUpdate=!0;for(let y=M,S=x+M;y<S;y++)if(Xt(ar,3*e.resolveTriangleIndex(y),f,m),ar.needsUpdate=!0,w.intersectsTriangle(ar))return!0;return!1}});for(let v=M,w=x+M;v<w;v++){const y=e.resolveTriangleIndex(v);Xt(or,3*y,f,m),or.a.applyMatrix4(uo),or.b.applyMatrix4(uo),or.c.applyMatrix4(uo),or.needsUpdate=!0;for(let S=0,C=g.count;S<C;S+=3)if(Xt(ar,S,g,b),ar.needsUpdate=!0,or.intersectsTriangle(ar))return!0}}else{const d=s+8,f=l[s+6];return Ut(d,r,Ra),!!(i.intersectsBox(Ra)&&uu(d,e,t,n,i)||(Ut(f,r,Ra),i.intersectsBox(Ra)&&uu(f,e,t,n,i)))}}const Ia=new He,Cc=new bn,ho=new bn,iT=new D,sT=new D,rT=new D,oT=new D;function aT(s,e,t,n={},i={},r=0,a=1/0){e.boundingBox||e.computeBoundingBox(),Cc.set(e.boundingBox.min,e.boundingBox.max,t),Cc.needsUpdate=!0;const l=s.geometry,c=l.attributes.position,h=l.index,d=e.attributes.position,f=e.index,m=On.getPrimitive(),g=On.getPrimitive();let b=iT,M=sT,x=null,v=null;i&&(x=rT,v=oT);let w=1/0,y=null,S=null;return Ia.copy(t).invert(),ho.matrix.copy(Ia),s.shapecast({boundsTraverseOrder:C=>Cc.distanceToBox(C),intersectsBounds:(C,P,A)=>A<w&&A<a?(P&&(ho.min.copy(C.min),ho.max.copy(C.max),ho.needsUpdate=!0),!0):!1,intersectsRange:(C,P)=>{if(e.boundsTree){const A=e.boundsTree;return A.shapecast({boundsTraverseOrder:I=>ho.distanceToBox(I),intersectsBounds:(I,B,E)=>E<w&&E<a,intersectsRange:(I,B)=>{for(let E=I,R=I+B;E<R;E++){const k=A.resolveTriangleIndex(E);Xt(g,3*k,f,d),g.a.applyMatrix4(t),g.b.applyMatrix4(t),g.c.applyMatrix4(t),g.needsUpdate=!0;for(let W=C,U=C+P;W<U;W++){const G=s.resolveTriangleIndex(W);Xt(m,3*G,h,c),m.needsUpdate=!0;const H=m.distanceToTriangle(g,b,x);if(H<w&&(M.copy(b),v&&v.copy(x),w=H,y=W,S=E),H<r)return!0}}}})}else{const A=Fr(e);for(let I=0,B=A;I<B;I++){Xt(g,3*I,f,d),g.a.applyMatrix4(t),g.b.applyMatrix4(t),g.c.applyMatrix4(t),g.needsUpdate=!0;for(let E=C,R=C+P;E<R;E++){const k=s.resolveTriangleIndex(E);Xt(m,3*k,h,c),m.needsUpdate=!0;const W=m.distanceToTriangle(g,b,x);if(W<w&&(M.copy(b),v&&v.copy(x),w=W,y=E,S=I),W<r)return!0}}}}}),On.releasePrimitive(m),On.releasePrimitive(g),w===1/0?null:(n.point?n.point.copy(M):n.point=M.clone(),n.distance=w,n.faceIndex=y,i&&(i.point?i.point.copy(v):i.point=v.clone(),i.point.applyMatrix4(Ia),M.applyMatrix4(Ia),i.distance=M.sub(i.point).length(),i.faceIndex=S),n)}function lT(){return typeof SharedArrayBuffer!="undefined"}const To=new Pt.constructor,el=new Pt.constructor,qi=new Vu(()=>new Vt),lr=new Vt,cr=new Vt,Pc=new Vt,Rc=new Vt;let Lc=!1;function cT(s,e,t,n){if(Lc)throw new Error("MeshBVH: Recursive calls to bvhcast not supported.");Lc=!0;const i=s._roots,r=e._roots;let a,l=0,c=0;const h=new He().copy(t).invert();for(let d=0,f=i.length;d<f;d++){To.setBuffer(i[d]),c=0;const m=qi.getPrimitive();Ut(0,To.float32Array,m),m.applyMatrix4(h);for(let g=0,b=r.length;g<b&&(el.setBuffer(r[d]),a=Gn(0,0,t,h,n,l,c,0,0,m),el.clearBuffer(),c+=r[g].length,!a);g++);if(qi.releasePrimitive(m),To.clearBuffer(),l+=i[d].length,a)break}return Lc=!1,a}function Gn(s,e,t,n,i,r=0,a=0,l=0,c=0,h=null,d=!1){let f,m;d?(f=el,m=To):(f=To,m=el);const g=f.float32Array,b=f.uint32Array,M=f.uint16Array,x=m.float32Array,v=m.uint32Array,w=m.uint16Array,y=s*2,S=e*2,C=vn(y,M),P=vn(S,w);let A=!1;if(P&&C)d?A=i(wn(e,v),An(e*2,w),wn(s,b),An(s*2,M),c,a+e,l,r+s):A=i(wn(s,b),An(s*2,M),wn(e,v),An(e*2,w),l,r+s,c,a+e);else if(P){const I=qi.getPrimitive();Ut(e,x,I),I.applyMatrix4(t);const B=Fn(s),E=Cn(s,b);Ut(B,g,lr),Ut(E,g,cr);const R=I.intersectsBox(lr),k=I.intersectsBox(cr);A=R&&Gn(e,B,n,t,i,a,r,c,l+1,I,!d)||k&&Gn(e,E,n,t,i,a,r,c,l+1,I,!d),qi.releasePrimitive(I)}else{const I=Fn(e),B=Cn(e,v);Ut(I,x,Pc),Ut(B,x,Rc);const E=h.intersectsBox(Pc),R=h.intersectsBox(Rc);if(E&&R)A=Gn(s,I,t,n,i,r,a,l,c+1,h,d)||Gn(s,B,t,n,i,r,a,l,c+1,h,d);else if(E)if(C)A=Gn(s,I,t,n,i,r,a,l,c+1,h,d);else{const k=qi.getPrimitive();k.copy(Pc).applyMatrix4(t);const W=Fn(s),U=Cn(s,b);Ut(W,g,lr),Ut(U,g,cr);const G=k.intersectsBox(lr),H=k.intersectsBox(cr);A=G&&Gn(I,W,n,t,i,a,r,c,l+1,k,!d)||H&&Gn(I,U,n,t,i,a,r,c,l+1,k,!d),qi.releasePrimitive(k)}else if(R)if(C)A=Gn(s,B,t,n,i,r,a,l,c+1,h,d);else{const k=qi.getPrimitive();k.copy(Rc).applyMatrix4(t);const W=Fn(s),U=Cn(s,b);Ut(W,g,lr),Ut(U,g,cr);const G=k.intersectsBox(lr),H=k.intersectsBox(cr);A=G&&Gn(B,W,n,t,i,a,r,c,l+1,k,!d)||H&&Gn(B,U,n,t,i,a,r,c,l+1,k,!d),qi.releasePrimitive(k)}}return A}const Da=new bn,of=new Vt,uT={strategy:Rm,maxDepth:40,maxLeafTris:10,useSharedArrayBuffer:!1,setBoundingBox:!0,onProgress:null,indirect:!1,verbose:!0};class zu{static serialize(e,t={}){t={cloneBuffers:!0,...t};const n=e.geometry,i=e._roots,r=e._indirectBuffer,a=n.getIndex();let l;return t.cloneBuffers?l={roots:i.map(c=>c.slice()),index:a.array.slice(),indirectBuffer:r?r.slice():null}:l={roots:i,index:a.array,indirectBuffer:r},l}static deserialize(e,t,n={}){n={setIndex:!0,indirect:Boolean(e.indirectBuffer),...n};const{index:i,roots:r,indirectBuffer:a}=e,l=new zu(t,{...n,[wc]:!0});if(l._roots=r,l._indirectBuffer=a||null,n.setIndex){const c=t.getIndex();if(c===null){const h=new Ct(e.index,1,!1);t.setIndex(h)}else c.array!==i&&(c.array.set(i),c.needsUpdate=!0)}return l}get indirect(){return!!this._indirectBuffer}constructor(e,t={}){if(e.isBufferGeometry){if(e.index&&e.index.isInterleavedBufferAttribute)throw new Error("MeshBVH: InterleavedBufferAttribute is not supported for the index attribute.")}else throw new Error("MeshBVH: Only BufferGeometries are supported.");if(t=Object.assign({...uT,[wc]:!1},t),t.useSharedArrayBuffer&&!lT())throw new Error("MeshBVH: SharedArrayBuffer is not available.");this.geometry=e,this._roots=null,this._indirectBuffer=null,t[wc]||(TS(this,t),!e.boundingBox&&t.setBoundingBox&&(e.boundingBox=this.getBoundingBox(new Vt)));const{_indirectBuffer:n}=this;this.resolveTriangleIndex=t.indirect?i=>n[i]:i=>i}refit(e=null){return(this.indirect?QS:kS)(this,e)}traverse(e,t=0){const n=this._roots[t],i=new Uint32Array(n),r=new Uint16Array(n);a(0);function a(l,c=0){const h=l*2,d=r[h+15]===hl;if(d){const f=i[l+6],m=r[h+14];e(c,d,new Float32Array(n,l*4,6),f,m)}else{const f=l+Qi/4,m=i[l+6],g=i[l+7];e(c,d,new Float32Array(n,l*4,6),g)||(a(f,c+1),a(m,c+1))}}}raycast(e,t=qn){const n=this._roots,i=this.geometry,r=[],a=t.isMaterial,l=Array.isArray(t),c=i.groups,h=a?t.side:t,d=this.indirect?JS:GS;for(let f=0,m=n.length;f<m;f++){const g=l?t[c[f].materialIndex].side:h,b=r.length;if(d(this,f,g,e,r),l){const M=c[f].materialIndex;for(let x=b,v=r.length;x<v;x++)r[x].face.materialIndex=M}}return r}raycastFirst(e,t=qn){const n=this._roots,i=this.geometry,r=t.isMaterial,a=Array.isArray(t);let l=null;const c=i.groups,h=r?t.side:t,d=this.indirect?tT:XS;for(let f=0,m=n.length;f<m;f++){const g=a?t[c[f].materialIndex].side:h,b=d(this,f,g,e);b!=null&&(l==null||b.distance<l.distance)&&(l=b,a&&(b.face.materialIndex=c[f].materialIndex))}return l}intersectsGeometry(e,t){let n=!1;const i=this._roots,r=this.indirect?nT:jS;for(let a=0,l=i.length;a<l&&(n=r(this,a,e,t),!n);a++);return n}shapecast(e){const t=On.getPrimitive(),n=this.indirect?HS:BS;let{boundsTraverseOrder:i,intersectsBounds:r,intersectsRange:a,intersectsTriangle:l}=e;if(a&&l){const f=a;a=(m,g,b,M,x)=>f(m,g,b,M,x)?!0:n(m,g,this,l,b,M,t)}else a||(l?a=(f,m,g,b)=>n(f,m,this,l,g,b,t):a=(f,m,g)=>g);let c=!1,h=0;const d=this._roots;for(let f=0,m=d.length;f<m;f++){const g=d[f];if(c=IS(this,f,r,a,i,h),c)break;h+=g.byteLength}return On.releasePrimitive(t),c}bvhcast(e,t,n){let{intersectsRanges:i,intersectsTriangles:r}=n;const a=On.getPrimitive(),l=this.geometry.index,c=this.geometry.attributes.position,h=this.indirect?b=>{const M=this.resolveTriangleIndex(b);Xt(a,M*3,l,c)}:b=>{Xt(a,b*3,l,c)},d=On.getPrimitive(),f=e.geometry.index,m=e.geometry.attributes.position,g=e.indirect?b=>{const M=e.resolveTriangleIndex(b);Xt(d,M*3,f,m)}:b=>{Xt(d,b*3,f,m)};if(r){const b=(M,x,v,w,y,S,C,P)=>{for(let A=v,I=v+w;A<I;A++){g(A),d.a.applyMatrix4(t),d.b.applyMatrix4(t),d.c.applyMatrix4(t),d.needsUpdate=!0;for(let B=M,E=M+x;B<E;B++)if(h(B),a.needsUpdate=!0,r(a,d,B,A,y,S,C,P))return!0}return!1};if(i){const M=i;i=function(x,v,w,y,S,C,P,A){return M(x,v,w,y,S,C,P,A)?!0:b(x,v,w,y,S,C,P,A)}}else i=b}return cT(this,e,t,i)}intersectsBox(e,t){return Da.set(e.min,e.max,t),Da.needsUpdate=!0,this.shapecast({intersectsBounds:n=>Da.intersectsBox(n),intersectsTriangle:n=>Da.intersectsTriangle(n)})}intersectsSphere(e){return this.shapecast({intersectsBounds:t=>e.intersectsBox(t),intersectsTriangle:t=>t.intersectsSphere(e)})}closestPointToGeometry(e,t,n={},i={},r=0,a=1/0){return(this.indirect?aT:ZS)(this,e,t,n,i,r,a)}closestPointToPoint(e,t={},n=0,i=1/0){return DS(this,e,t,n,i)}getBoundingBox(e){return e.makeEmpty(),this._roots.forEach(n=>{Ut(0,new Float32Array(n),of),e.union(of)}),e}}function hT(s){switch(s){case 1:return"R";case 2:return"RG";case 3:return"RGBA";case 4:return"RGBA"}throw new Error}function dT(s){switch(s){case 1:return Zf;case 2:return Qf;case 3:return Wt;case 4:return Wt}}function af(s){switch(s){case 1:return Mu;case 2:return rl;case 3:return Co;case 4:return Co}}class Om extends Cr{constructor(){super(),this.minFilter=dt,this.magFilter=dt,this.generateMipmaps=!1,this.overrideItemSize=null,this._forcedType=null}updateFrom(e){const t=this.overrideItemSize,n=e.itemSize,i=e.count;if(t!==null){if(n*i%t!==0)throw new Error("VertexAttributeTexture: overrideItemSize must divide evenly into buffer length.");e.itemSize=t,e.count=i*n/t}const r=e.itemSize,a=e.count,l=e.normalized,c=e.array.constructor,h=c.BYTES_PER_ELEMENT;let d=this._forcedType,f=r;if(d===null)switch(c){case Float32Array:d=ft;break;case Uint8Array:case Uint16Array:case Uint32Array:d=Tn;break;case Int8Array:case Int16Array:case Int32Array:d=wo;break}let m,g,b,M,x=hT(r);switch(d){case ft:b=1,g=dT(r),l&&h===1?(M=c,x+="8",c===Uint8Array?m=ni:(m=qc,x+="_SNORM")):(M=Float32Array,x+="32F",m=ft);break;case wo:x+=h*8+"I",b=l?Math.pow(2,c.BYTES_PER_ELEMENT*8-1):1,g=af(r),h===1?(M=Int8Array,m=qc):h===2?(M=Int16Array,m=Yf):(M=Int32Array,m=wo);break;case Tn:x+=h*8+"UI",b=l?Math.pow(2,c.BYTES_PER_ELEMENT*8-1):1,g=af(r),h===1?(M=Uint8Array,m=ni):h===2?(M=Uint16Array,m=sl):(M=Uint32Array,m=Tn);break}f===3&&(g===Wt||g===Co)&&(f=4);const v=Math.ceil(Math.sqrt(a))||1,w=f*v*v,y=new M(w),S=e.normalized;e.normalized=!1;for(let C=0;C<a;C++){const P=f*C;y[P]=e.getX(C)/b,r>=2&&(y[P+1]=e.getY(C)/b),r>=3&&(y[P+2]=e.getZ(C)/b,f===4&&(y[P+3]=1)),r>=4&&(y[P+3]=e.getW(C)/b)}e.normalized=S,this.internalFormat=x,this.format=g,this.type=m,this.image.width=v,this.image.height=v,this.image.data=y,this.needsUpdate=!0,this.dispose(),e.itemSize=n,e.count=i}}class pT extends Om{constructor(){super(),this._forcedType=Tn}}class fT extends Om{constructor(){super(),this._forcedType=ft}}class Bm{constructor(){this.index=new pT,this.position=new fT,this.bvhBounds=new Cr,this.bvhContents=new Cr,this._cachedIndexAttr=null,this.index.overrideItemSize=3}updateFrom(e){const{geometry:t}=e;if(gT(e,this.bvhBounds,this.bvhContents),this.position.updateFrom(t.attributes.position),e.indirect){const n=e._indirectBuffer;if(this._cachedIndexAttr===null||this._cachedIndexAttr.count!==n.length)if(t.index)this._cachedIndexAttr=t.index.clone();else{const i=Im(Lm(t));this._cachedIndexAttr=new Ct(i,1,!1)}mT(t,n,this._cachedIndexAttr),this.index.updateFrom(this._cachedIndexAttr)}else this.index.updateFrom(t.index)}dispose(){const{index:e,position:t,bvhBounds:n,bvhContents:i}=this;e&&e.dispose(),t&&t.dispose(),n&&n.dispose(),i&&i.dispose()}}function mT(s,e,t){const n=t.array,i=s.index?s.index.array:null;for(let r=0,a=e.length;r<a;r++){const l=3*r,c=3*e[r];for(let h=0;h<3;h++)n[l+h]=i?i[c+h]:c+h}}function gT(s,e,t){const n=s._roots;if(n.length!==1)throw new Error("MeshBVHUniformStruct: Multi-root BVHs not supported.");const i=n[0],r=new Uint16Array(i),a=new Uint32Array(i),l=new Float32Array(i),c=i.byteLength/Qi,h=2*Math.ceil(Math.sqrt(c/2)),d=new Float32Array(4*h*h),f=Math.ceil(Math.sqrt(c)),m=new Uint32Array(2*f*f);for(let g=0;g<c;g++){const b=g*Qi/4,M=b*2,x=b;for(let v=0;v<3;v++)d[8*g+0+v]=l[x+0+v],d[8*g+4+v]=l[x+3+v];if(vn(M,r)){const v=An(M,r),w=wn(b,a),y=4294901760|v;m[g*2+0]=y,m[g*2+1]=w}else{const v=4*Cn(b,a)/Qi,w=Bu(b,a);m[g*2+0]=w,m[g*2+1]=v}}e.image.data=d,e.image.width=h,e.image.height=h,e.format=Wt,e.type=ft,e.internalFormat="RGBA32F",e.minFilter=dt,e.magFilter=dt,e.generateMipmaps=!1,e.needsUpdate=!0,e.dispose(),t.image.data=m,t.image.width=f,t.image.height=f,t.format=rl,t.type=Tn,t.internalFormat="RG32UI",t.minFilter=dt,t.magFilter=dt,t.generateMipmaps=!1,t.needsUpdate=!0,t.dispose()}const vT=`

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
`,_T=`

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
`,xT=`
struct BVH {

	usampler2D index;
	sampler2D position;

	sampler2D bvhBounds;
	usampler2D bvhContents;

};
`,km=xT,Vm=`
	${vT}
	${_T}
`,lf={type:"change"},Ic={type:"start"},cf={type:"end"},Na=new Lr,uf=new Jn,bT=Math.cos(70*sm.DEG2RAD);class yT extends Ts{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Us.ROTATE,MIDDLE:Us.DOLLY,RIGHT:Us.PAN},this.touches={ONE:Fs.ROTATE,TWO:Fs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return l.phi},this.getAzimuthalAngle=function(){return l.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(V){V.addEventListener("keydown",Oe),this._domElementKeyEvents=V},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Oe),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(lf),n.update(),r=i.NONE},this.update=function(){const V=new D,de=new Gt().setFromUnitVectors(e.up,new D(0,1,0)),_e=de.clone().invert(),Ie=new D,O=new Gt,re=new D,le=2*Math.PI;return function(Ue=null){const nt=n.object.position;V.copy(nt).sub(n.target),V.applyQuaternion(de),l.setFromVector3(V),n.autoRotate&&r===i.NONE&&k(E(Ue)),n.enableDamping?(l.theta+=c.theta*n.dampingFactor,l.phi+=c.phi*n.dampingFactor):(l.theta+=c.theta,l.phi+=c.phi);let tt=n.minAzimuthAngle,ct=n.maxAzimuthAngle;isFinite(tt)&&isFinite(ct)&&(tt<-Math.PI?tt+=le:tt>Math.PI&&(tt-=le),ct<-Math.PI?ct+=le:ct>Math.PI&&(ct-=le),tt<=ct?l.theta=Math.max(tt,Math.min(ct,l.theta)):l.theta=l.theta>(tt+ct)/2?Math.max(tt,l.theta):Math.min(ct,l.theta)),l.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,l.phi)),l.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(d,n.dampingFactor):n.target.add(d),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&P||n.object.isOrthographicCamera?l.radius=ie(l.radius):l.radius=ie(l.radius*h),V.setFromSpherical(l),V.applyQuaternion(_e),nt.copy(n.target).add(V),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,d.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),d.set(0,0,0));let Bt=!1;if(n.zoomToCursor&&P){let ot=null;if(n.object.isPerspectiveCamera){const Nt=V.length();ot=ie(Nt*h);const sn=Nt-ot;n.object.position.addScaledVector(S,sn),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const Nt=new D(C.x,C.y,0);Nt.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/h)),n.object.updateProjectionMatrix(),Bt=!0;const sn=new D(C.x,C.y,0);sn.unproject(n.object),n.object.position.sub(sn).add(Nt),n.object.updateMatrixWorld(),ot=V.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;ot!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(ot).add(n.object.position):(Na.origin.copy(n.object.position),Na.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Na.direction))<bT?e.lookAt(n.target):(uf.setFromNormalAndCoplanarPoint(n.object.up,n.target),Na.intersectPlane(uf,n.target))))}else n.object.isOrthographicCamera&&(Bt=h!==1,Bt&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/h)),n.object.updateProjectionMatrix()));return h=1,P=!1,Bt||Ie.distanceToSquared(n.object.position)>a||8*(1-O.dot(n.object.quaternion))>a||re.distanceToSquared(n.target)>0?(n.dispatchEvent(lf),Ie.copy(n.object.position),O.copy(n.object.quaternion),re.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",st),n.domElement.removeEventListener("pointerdown",F),n.domElement.removeEventListener("pointercancel",Z),n.domElement.removeEventListener("wheel",ce),n.domElement.removeEventListener("pointermove",L),n.domElement.removeEventListener("pointerup",Z),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Oe),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=i.NONE;const a=1e-6,l=new Hp,c=new Hp;let h=1;const d=new D,f=new Ae,m=new Ae,g=new Ae,b=new Ae,M=new Ae,x=new Ae,v=new Ae,w=new Ae,y=new Ae,S=new D,C=new Ae;let P=!1;const A=[],I={};let B=!1;function E(V){return V!==null?2*Math.PI/60*n.autoRotateSpeed*V:2*Math.PI/60/60*n.autoRotateSpeed}function R(V){const de=Math.abs(V*.01);return Math.pow(.95,n.zoomSpeed*de)}function k(V){c.theta-=V}function W(V){c.phi-=V}const U=function(){const V=new D;return function(_e,Ie){V.setFromMatrixColumn(Ie,0),V.multiplyScalar(-_e),d.add(V)}}(),G=function(){const V=new D;return function(_e,Ie){n.screenSpacePanning===!0?V.setFromMatrixColumn(Ie,1):(V.setFromMatrixColumn(Ie,0),V.crossVectors(n.object.up,V)),V.multiplyScalar(_e),d.add(V)}}(),H=function(){const V=new D;return function(_e,Ie){const O=n.domElement;if(n.object.isPerspectiveCamera){const re=n.object.position;V.copy(re).sub(n.target);let le=V.length();le*=Math.tan(n.object.fov/2*Math.PI/180),U(2*_e*le/O.clientHeight,n.object.matrix),G(2*Ie*le/O.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(U(_e*(n.object.right-n.object.left)/n.object.zoom/O.clientWidth,n.object.matrix),G(Ie*(n.object.top-n.object.bottom)/n.object.zoom/O.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function X(V){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?h/=V:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function J(V){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?h*=V:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function $(V,de){if(!n.zoomToCursor)return;P=!0;const _e=n.domElement.getBoundingClientRect(),Ie=V-_e.left,O=de-_e.top,re=_e.width,le=_e.height;C.x=Ie/re*2-1,C.y=-(O/le)*2+1,S.set(C.x,C.y,1).unproject(n.object).sub(n.object.position).normalize()}function ie(V){return Math.max(n.minDistance,Math.min(n.maxDistance,V))}function ne(V){f.set(V.clientX,V.clientY)}function me(V){$(V.clientX,V.clientX),v.set(V.clientX,V.clientY)}function pe(V){b.set(V.clientX,V.clientY)}function K(V){m.set(V.clientX,V.clientY),g.subVectors(m,f).multiplyScalar(n.rotateSpeed);const de=n.domElement;k(2*Math.PI*g.x/de.clientHeight),W(2*Math.PI*g.y/de.clientHeight),f.copy(m),n.update()}function se(V){w.set(V.clientX,V.clientY),y.subVectors(w,v),y.y>0?X(R(y.y)):y.y<0&&J(R(y.y)),v.copy(w),n.update()}function be(V){M.set(V.clientX,V.clientY),x.subVectors(M,b).multiplyScalar(n.panSpeed),H(x.x,x.y),b.copy(M),n.update()}function Te(V){$(V.clientX,V.clientY),V.deltaY<0?J(R(V.deltaY)):V.deltaY>0&&X(R(V.deltaY)),n.update()}function Ce(V){let de=!1;switch(V.code){case n.keys.UP:V.ctrlKey||V.metaKey||V.shiftKey?W(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):H(0,n.keyPanSpeed),de=!0;break;case n.keys.BOTTOM:V.ctrlKey||V.metaKey||V.shiftKey?W(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):H(0,-n.keyPanSpeed),de=!0;break;case n.keys.LEFT:V.ctrlKey||V.metaKey||V.shiftKey?k(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):H(n.keyPanSpeed,0),de=!0;break;case n.keys.RIGHT:V.ctrlKey||V.metaKey||V.shiftKey?k(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):H(-n.keyPanSpeed,0),de=!0;break}de&&(V.preventDefault(),n.update())}function ye(V){if(A.length===1)f.set(V.pageX,V.pageY);else{const de=xe(V),_e=.5*(V.pageX+de.x),Ie=.5*(V.pageY+de.y);f.set(_e,Ie)}}function Ge(V){if(A.length===1)b.set(V.pageX,V.pageY);else{const de=xe(V),_e=.5*(V.pageX+de.x),Ie=.5*(V.pageY+de.y);b.set(_e,Ie)}}function Be(V){const de=xe(V),_e=V.pageX-de.x,Ie=V.pageY-de.y,O=Math.sqrt(_e*_e+Ie*Ie);v.set(0,O)}function q(V){n.enableZoom&&Be(V),n.enablePan&&Ge(V)}function Dt(V){n.enableZoom&&Be(V),n.enableRotate&&ye(V)}function Pe(V){if(A.length==1)m.set(V.pageX,V.pageY);else{const _e=xe(V),Ie=.5*(V.pageX+_e.x),O=.5*(V.pageY+_e.y);m.set(Ie,O)}g.subVectors(m,f).multiplyScalar(n.rotateSpeed);const de=n.domElement;k(2*Math.PI*g.x/de.clientHeight),W(2*Math.PI*g.y/de.clientHeight),f.copy(m)}function We(V){if(A.length===1)M.set(V.pageX,V.pageY);else{const de=xe(V),_e=.5*(V.pageX+de.x),Ie=.5*(V.pageY+de.y);M.set(_e,Ie)}x.subVectors(M,b).multiplyScalar(n.panSpeed),H(x.x,x.y),b.copy(M)}function Re(V){const de=xe(V),_e=V.pageX-de.x,Ie=V.pageY-de.y,O=Math.sqrt(_e*_e+Ie*Ie);w.set(0,O),y.set(0,Math.pow(w.y/v.y,n.zoomSpeed)),X(y.y),v.copy(w);const re=(V.pageX+de.x)*.5,le=(V.pageY+de.y)*.5;$(re,le)}function bt(V){n.enableZoom&&Re(V),n.enablePan&&We(V)}function je(V){n.enableZoom&&Re(V),n.enableRotate&&Pe(V)}function F(V){n.enabled!==!1&&(A.length===0&&(n.domElement.setPointerCapture(V.pointerId),n.domElement.addEventListener("pointermove",L),n.domElement.addEventListener("pointerup",Z)),Je(V),V.pointerType==="touch"?ze(V):he(V))}function L(V){n.enabled!==!1&&(V.pointerType==="touch"?oe(V):ae(V))}function Z(V){switch(Xe(V),A.length){case 0:n.domElement.releasePointerCapture(V.pointerId),n.domElement.removeEventListener("pointermove",L),n.domElement.removeEventListener("pointerup",Z),n.dispatchEvent(cf),r=i.NONE;break;case 1:const de=A[0],_e=I[de];ze({pointerId:de,pageX:_e.x,pageY:_e.y});break}}function he(V){let de;switch(V.button){case 0:de=n.mouseButtons.LEFT;break;case 1:de=n.mouseButtons.MIDDLE;break;case 2:de=n.mouseButtons.RIGHT;break;default:de=-1}switch(de){case Us.DOLLY:if(n.enableZoom===!1)return;me(V),r=i.DOLLY;break;case Us.ROTATE:if(V.ctrlKey||V.metaKey||V.shiftKey){if(n.enablePan===!1)return;pe(V),r=i.PAN}else{if(n.enableRotate===!1)return;ne(V),r=i.ROTATE}break;case Us.PAN:if(V.ctrlKey||V.metaKey||V.shiftKey){if(n.enableRotate===!1)return;ne(V),r=i.ROTATE}else{if(n.enablePan===!1)return;pe(V),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(Ic)}function ae(V){switch(r){case i.ROTATE:if(n.enableRotate===!1)return;K(V);break;case i.DOLLY:if(n.enableZoom===!1)return;se(V);break;case i.PAN:if(n.enablePan===!1)return;be(V);break}}function ce(V){n.enabled===!1||n.enableZoom===!1||r!==i.NONE||(V.preventDefault(),n.dispatchEvent(Ic),Te(Se(V)),n.dispatchEvent(cf))}function Se(V){const de=V.deltaMode,_e={clientX:V.clientX,clientY:V.clientY,deltaY:V.deltaY};switch(de){case 1:_e.deltaY*=16;break;case 2:_e.deltaY*=100;break}return V.ctrlKey&&!B&&(_e.deltaY*=10),_e}function ve(V){V.key==="Control"&&(B=!0,n.domElement.getRootNode().addEventListener("keyup",we,{passive:!0,capture:!0}))}function we(V){V.key==="Control"&&(B=!1,n.domElement.getRootNode().removeEventListener("keyup",we,{passive:!0,capture:!0}))}function Oe(V){n.enabled===!1||n.enablePan===!1||Ce(V)}function ze(V){switch(Le(V),A.length){case 1:switch(n.touches.ONE){case Fs.ROTATE:if(n.enableRotate===!1)return;ye(V),r=i.TOUCH_ROTATE;break;case Fs.PAN:if(n.enablePan===!1)return;Ge(V),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case Fs.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;q(V),r=i.TOUCH_DOLLY_PAN;break;case Fs.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Dt(V),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(Ic)}function oe(V){switch(Le(V),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;Pe(V),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;We(V),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;bt(V),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;je(V),n.update();break;default:r=i.NONE}}function st(V){n.enabled!==!1&&V.preventDefault()}function Je(V){A.push(V.pointerId)}function Xe(V){delete I[V.pointerId];for(let de=0;de<A.length;de++)if(A[de]==V.pointerId){A.splice(de,1);return}}function Le(V){let de=I[V.pointerId];de===void 0&&(de=new Ae,I[V.pointerId]=de),de.set(V.pageX,V.pageY)}function xe(V){const de=V.pointerId===A[0]?A[1]:A[0];return I[de]}n.domElement.addEventListener("contextmenu",st),n.domElement.addEventListener("pointerdown",F),n.domElement.addEventListener("pointercancel",Z),n.domElement.addEventListener("wheel",ce,{passive:!1}),n.domElement.getRootNode().addEventListener("keydown",ve,{passive:!0,capture:!0}),this.update()}}const us=new uS,un=new D,Wi=new D,It=new Gt,hf={X:new D(1,0,0),Y:new D(0,1,0),Z:new D(0,0,1)},Dc={type:"change"},df={type:"mouseDown"},pf={type:"mouseUp",mode:null},ff={type:"objectChange"};class wT extends mt{constructor(e,t){super(),t===void 0&&(console.warn('THREE.TransformControls: The second parameter "domElement" is now mandatory.'),t=document),this.isTransformControls=!0,this.visible=!1,this.domElement=t,this.domElement.style.touchAction="none";const n=new CT;this._gizmo=n,this.add(n);const i=new PT;this._plane=i,this.add(i);const r=this;function a(w,y){let S=y;Object.defineProperty(r,w,{get:function(){return S!==void 0?S:y},set:function(C){S!==C&&(S=C,i[w]=C,n[w]=C,r.dispatchEvent({type:w+"-changed",value:C}),r.dispatchEvent(Dc))}}),r[w]=y,i[w]=y,n[w]=y}a("camera",e),a("object",void 0),a("enabled",!0),a("axis",null),a("mode","translate"),a("translationSnap",null),a("rotationSnap",null),a("scaleSnap",null),a("space","world"),a("size",1),a("dragging",!1),a("showX",!0),a("showY",!0),a("showZ",!0);const l=new D,c=new D,h=new Gt,d=new Gt,f=new D,m=new Gt,g=new D,b=new D,M=new D,x=0,v=new D;a("worldPosition",l),a("worldPositionStart",c),a("worldQuaternion",h),a("worldQuaternionStart",d),a("cameraPosition",f),a("cameraQuaternion",m),a("pointStart",g),a("pointEnd",b),a("rotationAxis",M),a("rotationAngle",x),a("eye",v),this._offset=new D,this._startNorm=new D,this._endNorm=new D,this._cameraScale=new D,this._parentPosition=new D,this._parentQuaternion=new Gt,this._parentQuaternionInv=new Gt,this._parentScale=new D,this._worldScaleStart=new D,this._worldQuaternionInv=new Gt,this._worldScale=new D,this._positionStart=new D,this._quaternionStart=new Gt,this._scaleStart=new D,this._getPointer=MT.bind(this),this._onPointerDown=ST.bind(this),this._onPointerHover=ET.bind(this),this._onPointerMove=TT.bind(this),this._onPointerUp=AT.bind(this),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointermove",this._onPointerHover),this.domElement.addEventListener("pointerup",this._onPointerUp)}updateMatrixWorld(){this.object!==void 0&&(this.object.updateMatrixWorld(),this.object.parent===null?console.error("TransformControls: The attached 3D object must be a part of the scene graph."):this.object.parent.matrixWorld.decompose(this._parentPosition,this._parentQuaternion,this._parentScale),this.object.matrixWorld.decompose(this.worldPosition,this.worldQuaternion,this._worldScale),this._parentQuaternionInv.copy(this._parentQuaternion).invert(),this._worldQuaternionInv.copy(this.worldQuaternion).invert()),this.camera.updateMatrixWorld(),this.camera.matrixWorld.decompose(this.cameraPosition,this.cameraQuaternion,this._cameraScale),this.camera.isOrthographicCamera?this.camera.getWorldDirection(this.eye).negate():this.eye.copy(this.cameraPosition).sub(this.worldPosition).normalize(),super.updateMatrixWorld(this)}pointerHover(e){if(this.object===void 0||this.dragging===!0)return;us.setFromCamera(e,this.camera);const t=Nc(this._gizmo.picker[this.mode],us);t?this.axis=t.object.name:this.axis=null}pointerDown(e){if(!(this.object===void 0||this.dragging===!0||e.button!==0)&&this.axis!==null){us.setFromCamera(e,this.camera);const t=Nc(this._plane,us,!0);t&&(this.object.updateMatrixWorld(),this.object.parent.updateMatrixWorld(),this._positionStart.copy(this.object.position),this._quaternionStart.copy(this.object.quaternion),this._scaleStart.copy(this.object.scale),this.object.matrixWorld.decompose(this.worldPositionStart,this.worldQuaternionStart,this._worldScaleStart),this.pointStart.copy(t.point).sub(this.worldPositionStart)),this.dragging=!0,df.mode=this.mode,this.dispatchEvent(df)}}pointerMove(e){const t=this.axis,n=this.mode,i=this.object;let r=this.space;if(n==="scale"?r="local":(t==="E"||t==="XYZE"||t==="XYZ")&&(r="world"),i===void 0||t===null||this.dragging===!1||e.button!==-1)return;us.setFromCamera(e,this.camera);const a=Nc(this._plane,us,!0);if(!!a){if(this.pointEnd.copy(a.point).sub(this.worldPositionStart),n==="translate")this._offset.copy(this.pointEnd).sub(this.pointStart),r==="local"&&t!=="XYZ"&&this._offset.applyQuaternion(this._worldQuaternionInv),t.indexOf("X")===-1&&(this._offset.x=0),t.indexOf("Y")===-1&&(this._offset.y=0),t.indexOf("Z")===-1&&(this._offset.z=0),r==="local"&&t!=="XYZ"?this._offset.applyQuaternion(this._quaternionStart).divide(this._parentScale):this._offset.applyQuaternion(this._parentQuaternionInv).divide(this._parentScale),i.position.copy(this._offset).add(this._positionStart),this.translationSnap&&(r==="local"&&(i.position.applyQuaternion(It.copy(this._quaternionStart).invert()),t.search("X")!==-1&&(i.position.x=Math.round(i.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(i.position.y=Math.round(i.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(i.position.z=Math.round(i.position.z/this.translationSnap)*this.translationSnap),i.position.applyQuaternion(this._quaternionStart)),r==="world"&&(i.parent&&i.position.add(un.setFromMatrixPosition(i.parent.matrixWorld)),t.search("X")!==-1&&(i.position.x=Math.round(i.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(i.position.y=Math.round(i.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(i.position.z=Math.round(i.position.z/this.translationSnap)*this.translationSnap),i.parent&&i.position.sub(un.setFromMatrixPosition(i.parent.matrixWorld))));else if(n==="scale"){if(t.search("XYZ")!==-1){let l=this.pointEnd.length()/this.pointStart.length();this.pointEnd.dot(this.pointStart)<0&&(l*=-1),Wi.set(l,l,l)}else un.copy(this.pointStart),Wi.copy(this.pointEnd),un.applyQuaternion(this._worldQuaternionInv),Wi.applyQuaternion(this._worldQuaternionInv),Wi.divide(un),t.search("X")===-1&&(Wi.x=1),t.search("Y")===-1&&(Wi.y=1),t.search("Z")===-1&&(Wi.z=1);i.scale.copy(this._scaleStart).multiply(Wi),this.scaleSnap&&(t.search("X")!==-1&&(i.scale.x=Math.round(i.scale.x/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Y")!==-1&&(i.scale.y=Math.round(i.scale.y/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Z")!==-1&&(i.scale.z=Math.round(i.scale.z/this.scaleSnap)*this.scaleSnap||this.scaleSnap))}else if(n==="rotate"){this._offset.copy(this.pointEnd).sub(this.pointStart);const l=20/this.worldPosition.distanceTo(un.setFromMatrixPosition(this.camera.matrixWorld));let c=!1;t==="XYZE"?(this.rotationAxis.copy(this._offset).cross(this.eye).normalize(),this.rotationAngle=this._offset.dot(un.copy(this.rotationAxis).cross(this.eye))*l):(t==="X"||t==="Y"||t==="Z")&&(this.rotationAxis.copy(hf[t]),un.copy(hf[t]),r==="local"&&un.applyQuaternion(this.worldQuaternion),un.cross(this.eye),un.length()===0?c=!0:this.rotationAngle=this._offset.dot(un.normalize())*l),(t==="E"||c)&&(this.rotationAxis.copy(this.eye),this.rotationAngle=this.pointEnd.angleTo(this.pointStart),this._startNorm.copy(this.pointStart).normalize(),this._endNorm.copy(this.pointEnd).normalize(),this.rotationAngle*=this._endNorm.cross(this._startNorm).dot(this.eye)<0?1:-1),this.rotationSnap&&(this.rotationAngle=Math.round(this.rotationAngle/this.rotationSnap)*this.rotationSnap),r==="local"&&t!=="E"&&t!=="XYZE"?(i.quaternion.copy(this._quaternionStart),i.quaternion.multiply(It.setFromAxisAngle(this.rotationAxis,this.rotationAngle)).normalize()):(this.rotationAxis.applyQuaternion(this._parentQuaternionInv),i.quaternion.copy(It.setFromAxisAngle(this.rotationAxis,this.rotationAngle)),i.quaternion.multiply(this._quaternionStart).normalize())}this.dispatchEvent(Dc),this.dispatchEvent(ff)}}pointerUp(e){e.button===0&&(this.dragging&&this.axis!==null&&(pf.mode=this.mode,this.dispatchEvent(pf)),this.dragging=!1,this.axis=null)}dispose(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerHover),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.traverse(function(e){e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()})}attach(e){return this.object=e,this.visible=!0,this}detach(){return this.object=void 0,this.visible=!1,this.axis=null,this}reset(){!this.enabled||this.dragging&&(this.object.position.copy(this._positionStart),this.object.quaternion.copy(this._quaternionStart),this.object.scale.copy(this._scaleStart),this.dispatchEvent(Dc),this.dispatchEvent(ff),this.pointStart.copy(this.pointEnd))}getRaycaster(){return us}getMode(){return this.mode}setMode(e){this.mode=e}setTranslationSnap(e){this.translationSnap=e}setRotationSnap(e){this.rotationSnap=e}setScaleSnap(e){this.scaleSnap=e}setSize(e){this.size=e}setSpace(e){this.space=e}}function MT(s){if(this.domElement.ownerDocument.pointerLockElement)return{x:0,y:0,button:s.button};{const e=this.domElement.getBoundingClientRect();return{x:(s.clientX-e.left)/e.width*2-1,y:-(s.clientY-e.top)/e.height*2+1,button:s.button}}}function ET(s){if(!!this.enabled)switch(s.pointerType){case"mouse":case"pen":this.pointerHover(this._getPointer(s));break}}function ST(s){!this.enabled||(document.pointerLockElement||this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.pointerHover(this._getPointer(s)),this.pointerDown(this._getPointer(s)))}function TT(s){!this.enabled||this.pointerMove(this._getPointer(s))}function AT(s){!this.enabled||(this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.pointerUp(this._getPointer(s)))}function Nc(s,e,t){const n=e.intersectObject(s,!0);for(let i=0;i<n.length;i++)if(n[i].object.visible||t)return n[i];return!1}const Ua=new Io,yt=new D(0,1,0),mf=new D(0,0,0),gf=new He,Fa=new Gt,Ha=new Gt,Qn=new D,vf=new He,xo=new D(1,0,0),ps=new D(0,1,0),bo=new D(0,0,1),Oa=new D,po=new D,fo=new D;class CT extends mt{constructor(){super(),this.isTransformControlsGizmo=!0,this.type="TransformControlsGizmo";const e=new ti({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),t=new Lu({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),n=e.clone();n.opacity=.15;const i=t.clone();i.opacity=.5;const r=e.clone();r.color.setHex(16711680);const a=e.clone();a.color.setHex(65280);const l=e.clone();l.color.setHex(255);const c=e.clone();c.color.setHex(16711680),c.opacity=.5;const h=e.clone();h.color.setHex(65280),h.opacity=.5;const d=e.clone();d.color.setHex(255),d.opacity=.5;const f=e.clone();f.opacity=.25;const m=e.clone();m.color.setHex(16776960),m.opacity=.25,e.clone().color.setHex(16776960);const b=e.clone();b.color.setHex(7895160);const M=new cn(0,.04,.1,12);M.translate(0,.05,0);const x=new xt(.08,.08,.08);x.translate(0,.04,0);const v=new tn;v.setAttribute("position",new wt([0,0,0,1,0,0],3));const w=new cn(.0075,.0075,.5,3);w.translate(0,.25,0);function y(G,H){const X=new vs(G,.0075,3,64,H*Math.PI*2);return X.rotateY(Math.PI/2),X.rotateX(Math.PI/2),X}function S(){const G=new tn;return G.setAttribute("position",new wt([0,0,0,1,1,1],3)),G}const C={X:[[new fe(M,r),[.5,0,0],[0,0,-Math.PI/2]],[new fe(M,r),[-.5,0,0],[0,0,Math.PI/2]],[new fe(w,r),[0,0,0],[0,0,-Math.PI/2]]],Y:[[new fe(M,a),[0,.5,0]],[new fe(M,a),[0,-.5,0],[Math.PI,0,0]],[new fe(w,a)]],Z:[[new fe(M,l),[0,0,.5],[Math.PI/2,0,0]],[new fe(M,l),[0,0,-.5],[-Math.PI/2,0,0]],[new fe(w,l),null,[Math.PI/2,0,0]]],XYZ:[[new fe(new gr(.1,0),f.clone()),[0,0,0]]],XY:[[new fe(new xt(.15,.15,.01),d.clone()),[.15,.15,0]]],YZ:[[new fe(new xt(.15,.15,.01),c.clone()),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new fe(new xt(.15,.15,.01),h.clone()),[.15,0,.15],[-Math.PI/2,0,0]]]},P={X:[[new fe(new cn(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new fe(new cn(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new fe(new cn(.2,0,.6,4),n),[0,.3,0]],[new fe(new cn(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new fe(new cn(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new fe(new cn(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XYZ:[[new fe(new gr(.2,0),n)]],XY:[[new fe(new xt(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new fe(new xt(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new fe(new xt(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]]},A={START:[[new fe(new gr(.01,2),i),null,null,null,"helper"]],END:[[new fe(new gr(.01,2),i),null,null,null,"helper"]],DELTA:[[new Wn(S(),i),null,null,null,"helper"]],X:[[new Wn(v,i.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new Wn(v,i.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new Wn(v,i.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]},I={XYZE:[[new fe(y(.5,1),b),null,[0,Math.PI/2,0]]],X:[[new fe(y(.5,.5),r)]],Y:[[new fe(y(.5,.5),a),null,[0,0,-Math.PI/2]]],Z:[[new fe(y(.5,.5),l),null,[0,Math.PI/2,0]]],E:[[new fe(y(.75,1),m),null,[0,Math.PI/2,0]]]},B={AXIS:[[new Wn(v,i.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]]},E={XYZE:[[new fe(new ll(.25,10,8),n)]],X:[[new fe(new vs(.5,.1,4,24),n),[0,0,0],[0,-Math.PI/2,-Math.PI/2]]],Y:[[new fe(new vs(.5,.1,4,24),n),[0,0,0],[Math.PI/2,0,0]]],Z:[[new fe(new vs(.5,.1,4,24),n),[0,0,0],[0,0,-Math.PI/2]]],E:[[new fe(new vs(.75,.1,2,24),n)]]},R={X:[[new fe(x,r),[.5,0,0],[0,0,-Math.PI/2]],[new fe(w,r),[0,0,0],[0,0,-Math.PI/2]],[new fe(x,r),[-.5,0,0],[0,0,Math.PI/2]]],Y:[[new fe(x,a),[0,.5,0]],[new fe(w,a)],[new fe(x,a),[0,-.5,0],[0,0,Math.PI]]],Z:[[new fe(x,l),[0,0,.5],[Math.PI/2,0,0]],[new fe(w,l),[0,0,0],[Math.PI/2,0,0]],[new fe(x,l),[0,0,-.5],[-Math.PI/2,0,0]]],XY:[[new fe(new xt(.15,.15,.01),d),[.15,.15,0]]],YZ:[[new fe(new xt(.15,.15,.01),c),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new fe(new xt(.15,.15,.01),h),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new fe(new xt(.1,.1,.1),f.clone())]]},k={X:[[new fe(new cn(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new fe(new cn(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new fe(new cn(.2,0,.6,4),n),[0,.3,0]],[new fe(new cn(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new fe(new cn(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new fe(new cn(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XY:[[new fe(new xt(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new fe(new xt(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new fe(new xt(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new fe(new xt(.2,.2,.2),n),[0,0,0]]]},W={X:[[new Wn(v,i.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new Wn(v,i.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new Wn(v,i.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]};function U(G){const H=new mt;for(const X in G)for(let J=G[X].length;J--;){const $=G[X][J][0].clone(),ie=G[X][J][1],ne=G[X][J][2],me=G[X][J][3],pe=G[X][J][4];$.name=X,$.tag=pe,ie&&$.position.set(ie[0],ie[1],ie[2]),ne&&$.rotation.set(ne[0],ne[1],ne[2]),me&&$.scale.set(me[0],me[1],me[2]),$.updateMatrix();const K=$.geometry.clone();K.applyMatrix4($.matrix),$.geometry=K,$.renderOrder=1/0,$.position.set(0,0,0),$.rotation.set(0,0,0),$.scale.set(1,1,1),H.add($)}return H}this.gizmo={},this.picker={},this.helper={},this.add(this.gizmo.translate=U(C)),this.add(this.gizmo.rotate=U(I)),this.add(this.gizmo.scale=U(R)),this.add(this.picker.translate=U(P)),this.add(this.picker.rotate=U(E)),this.add(this.picker.scale=U(k)),this.add(this.helper.translate=U(A)),this.add(this.helper.rotate=U(B)),this.add(this.helper.scale=U(W)),this.picker.translate.visible=!1,this.picker.rotate.visible=!1,this.picker.scale.visible=!1}updateMatrixWorld(e){const n=(this.mode==="scale"?"local":this.space)==="local"?this.worldQuaternion:Ha;this.gizmo.translate.visible=this.mode==="translate",this.gizmo.rotate.visible=this.mode==="rotate",this.gizmo.scale.visible=this.mode==="scale",this.helper.translate.visible=this.mode==="translate",this.helper.rotate.visible=this.mode==="rotate",this.helper.scale.visible=this.mode==="scale";let i=[];i=i.concat(this.picker[this.mode].children),i=i.concat(this.gizmo[this.mode].children),i=i.concat(this.helper[this.mode].children);for(let r=0;r<i.length;r++){const a=i[r];a.visible=!0,a.rotation.set(0,0,0),a.position.copy(this.worldPosition);let l;if(this.camera.isOrthographicCamera?l=(this.camera.top-this.camera.bottom)/this.camera.zoom:l=this.worldPosition.distanceTo(this.cameraPosition)*Math.min(1.9*Math.tan(Math.PI*this.camera.fov/360)/this.camera.zoom,7),a.scale.set(1,1,1).multiplyScalar(l*this.size/4),a.tag==="helper"){a.visible=!1,a.name==="AXIS"?(a.visible=!!this.axis,this.axis==="X"&&(It.setFromEuler(Ua.set(0,0,0)),a.quaternion.copy(n).multiply(It),Math.abs(yt.copy(xo).applyQuaternion(n).dot(this.eye))>.9&&(a.visible=!1)),this.axis==="Y"&&(It.setFromEuler(Ua.set(0,0,Math.PI/2)),a.quaternion.copy(n).multiply(It),Math.abs(yt.copy(ps).applyQuaternion(n).dot(this.eye))>.9&&(a.visible=!1)),this.axis==="Z"&&(It.setFromEuler(Ua.set(0,Math.PI/2,0)),a.quaternion.copy(n).multiply(It),Math.abs(yt.copy(bo).applyQuaternion(n).dot(this.eye))>.9&&(a.visible=!1)),this.axis==="XYZE"&&(It.setFromEuler(Ua.set(0,Math.PI/2,0)),yt.copy(this.rotationAxis),a.quaternion.setFromRotationMatrix(gf.lookAt(mf,yt,ps)),a.quaternion.multiply(It),a.visible=this.dragging),this.axis==="E"&&(a.visible=!1)):a.name==="START"?(a.position.copy(this.worldPositionStart),a.visible=this.dragging):a.name==="END"?(a.position.copy(this.worldPosition),a.visible=this.dragging):a.name==="DELTA"?(a.position.copy(this.worldPositionStart),a.quaternion.copy(this.worldQuaternionStart),un.set(1e-10,1e-10,1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1),un.applyQuaternion(this.worldQuaternionStart.clone().invert()),a.scale.copy(un),a.visible=this.dragging):(a.quaternion.copy(n),this.dragging?a.position.copy(this.worldPositionStart):a.position.copy(this.worldPosition),this.axis&&(a.visible=this.axis.search(a.name)!==-1));continue}a.quaternion.copy(n),this.mode==="translate"||this.mode==="scale"?(a.name==="X"&&Math.abs(yt.copy(xo).applyQuaternion(n).dot(this.eye))>.99&&(a.scale.set(1e-10,1e-10,1e-10),a.visible=!1),a.name==="Y"&&Math.abs(yt.copy(ps).applyQuaternion(n).dot(this.eye))>.99&&(a.scale.set(1e-10,1e-10,1e-10),a.visible=!1),a.name==="Z"&&Math.abs(yt.copy(bo).applyQuaternion(n).dot(this.eye))>.99&&(a.scale.set(1e-10,1e-10,1e-10),a.visible=!1),a.name==="XY"&&Math.abs(yt.copy(bo).applyQuaternion(n).dot(this.eye))<.2&&(a.scale.set(1e-10,1e-10,1e-10),a.visible=!1),a.name==="YZ"&&Math.abs(yt.copy(xo).applyQuaternion(n).dot(this.eye))<.2&&(a.scale.set(1e-10,1e-10,1e-10),a.visible=!1),a.name==="XZ"&&Math.abs(yt.copy(ps).applyQuaternion(n).dot(this.eye))<.2&&(a.scale.set(1e-10,1e-10,1e-10),a.visible=!1)):this.mode==="rotate"&&(Fa.copy(n),yt.copy(this.eye).applyQuaternion(It.copy(n).invert()),a.name.search("E")!==-1&&a.quaternion.setFromRotationMatrix(gf.lookAt(this.eye,mf,ps)),a.name==="X"&&(It.setFromAxisAngle(xo,Math.atan2(-yt.y,yt.z)),It.multiplyQuaternions(Fa,It),a.quaternion.copy(It)),a.name==="Y"&&(It.setFromAxisAngle(ps,Math.atan2(yt.x,yt.z)),It.multiplyQuaternions(Fa,It),a.quaternion.copy(It)),a.name==="Z"&&(It.setFromAxisAngle(bo,Math.atan2(yt.y,yt.x)),It.multiplyQuaternions(Fa,It),a.quaternion.copy(It))),a.visible=a.visible&&(a.name.indexOf("X")===-1||this.showX),a.visible=a.visible&&(a.name.indexOf("Y")===-1||this.showY),a.visible=a.visible&&(a.name.indexOf("Z")===-1||this.showZ),a.visible=a.visible&&(a.name.indexOf("E")===-1||this.showX&&this.showY&&this.showZ),a.material._color=a.material._color||a.material.color.clone(),a.material._opacity=a.material._opacity||a.material.opacity,a.material.color.copy(a.material._color),a.material.opacity=a.material._opacity,this.enabled&&this.axis&&(a.name===this.axis||this.axis.split("").some(function(c){return a.name===c}))&&(a.material.color.setHex(16776960),a.material.opacity=1)}super.updateMatrixWorld(e)}}class PT extends fe{constructor(){super(new kn(1e5,1e5,2,2),new ti({visible:!1,wireframe:!0,side:mn,transparent:!0,opacity:.1,toneMapped:!1})),this.isTransformControlsPlane=!0,this.type="TransformControlsPlane"}updateMatrixWorld(e){let t=this.space;switch(this.position.copy(this.worldPosition),this.mode==="scale"&&(t="local"),Oa.copy(xo).applyQuaternion(t==="local"?this.worldQuaternion:Ha),po.copy(ps).applyQuaternion(t==="local"?this.worldQuaternion:Ha),fo.copy(bo).applyQuaternion(t==="local"?this.worldQuaternion:Ha),yt.copy(po),this.mode){case"translate":case"scale":switch(this.axis){case"X":yt.copy(this.eye).cross(Oa),Qn.copy(Oa).cross(yt);break;case"Y":yt.copy(this.eye).cross(po),Qn.copy(po).cross(yt);break;case"Z":yt.copy(this.eye).cross(fo),Qn.copy(fo).cross(yt);break;case"XY":Qn.copy(fo);break;case"YZ":Qn.copy(Oa);break;case"XZ":yt.copy(fo),Qn.copy(po);break;case"XYZ":case"E":Qn.set(0,0,0);break}break;case"rotate":default:Qn.set(0,0,0)}Qn.length()===0?this.quaternion.copy(this.cameraQuaternion):(vf.lookAt(un.set(0,0,0),Qn,yt),this.quaternion.setFromRotationMatrix(vf)),super.updateMatrixWorld(e)}}function RT(s,e=!1){const t=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},a={},l=s[0].morphTargetsRelative,c=new tn;let h=0;for(let d=0;d<s.length;++d){const f=s[d];let m=0;if(t!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const g in f.attributes){if(!n.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+'. All geometries must have compatible attributes; make sure "'+g+'" attribute exists among all geometries, or in none of them.'),null;r[g]===void 0&&(r[g]=[]),r[g].push(f.attributes[g]),m++}if(m!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". Make sure all geometries have the same number of attributes."),null;if(l!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const g in f.morphAttributes){if(!i.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+".  .morphAttributes must be consistent throughout all geometries."),null;a[g]===void 0&&(a[g]=[]),a[g].push(f.morphAttributes[g])}if(e){let g;if(t)g=f.index.count;else if(f.attributes.position!==void 0)g=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". The geometry must have either an index or a position attribute"),null;c.addGroup(h,g,d),h+=g}}if(t){let d=0;const f=[];for(let m=0;m<s.length;++m){const g=s[m].index;for(let b=0;b<g.count;++b)f.push(g.getX(b)+d);d+=s[m].attributes.position.count}c.setIndex(f)}for(const d in r){const f=_f(r[d]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+d+" attribute."),null;c.setAttribute(d,f)}for(const d in a){const f=a[d][0].length;if(f===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[d]=[];for(let m=0;m<f;++m){const g=[];for(let M=0;M<a[d].length;++M)g.push(a[d][M][m]);const b=_f(g);if(!b)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+d+" morphAttribute."),null;c.morphAttributes[d].push(b)}}return c}function _f(s){let e,t,n,i=-1,r=0;for(let h=0;h<s.length;++h){const d=s[h];if(e===void 0&&(e=d.array.constructor),e!==d.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=d.itemSize),t!==d.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=d.normalized),n!==d.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=d.gpuType),i!==d.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=d.count*t}const a=new e(r),l=new Ct(a,t,n);let c=0;for(let h=0;h<s.length;++h){const d=s[h];if(d.isInterleavedBufferAttribute){const f=c/t;for(let m=0,g=d.count;m<g;m++)for(let b=0;b<t;b++){const M=d.getComponent(m,b);l.setComponent(m+f,b,M)}}else a.set(d.array,c);c+=d.count*t}return i!==void 0&&(l.gpuType=i),l}function LT(s,e=1e-4){e=Math.max(e,Number.EPSILON);const t={},n=s.getIndex(),i=s.getAttribute("position"),r=n?n.count:i.count;let a=0;const l=Object.keys(s.attributes),c={},h={},d=[],f=["getX","getY","getZ","getW"],m=["setX","setY","setZ","setW"];for(let w=0,y=l.length;w<y;w++){const S=l[w],C=s.attributes[S];c[S]=new Ct(new C.array.constructor(C.count*C.itemSize),C.itemSize,C.normalized);const P=s.morphAttributes[S];P&&(h[S]=new Ct(new P.array.constructor(P.count*P.itemSize),P.itemSize,P.normalized))}const g=e*.5,b=Math.log10(1/e),M=Math.pow(10,b),x=g*M;for(let w=0;w<r;w++){const y=n?n.getX(w):w;let S="";for(let C=0,P=l.length;C<P;C++){const A=l[C],I=s.getAttribute(A),B=I.itemSize;for(let E=0;E<B;E++)S+=`${~~(I[f[E]](y)*M+x)},`}if(S in t)d.push(t[S]);else{for(let C=0,P=l.length;C<P;C++){const A=l[C],I=s.getAttribute(A),B=s.morphAttributes[A],E=I.itemSize,R=c[A],k=h[A];for(let W=0;W<E;W++){const U=f[W],G=m[W];if(R[G](a,I[U](y)),B)for(let H=0,X=B.length;H<X;H++)k[H][G](a,B[H][U](y))}}t[S]=a,d.push(a),a++}}const v=s.clone();for(const w in s.attributes){const y=c[w];if(v.setAttribute(w,new Ct(y.array.slice(0,a*y.itemSize),y.itemSize,y.normalized)),w in h)for(let S=0;S<h[w].length;S++){const C=h[w][S];v.morphAttributes[w][S]=new Ct(C.array.slice(0,a*C.itemSize),C.itemSize,C.normalized)}}return v.setIndex(d),v}function xf(s,e){if(e===z_)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Yc||e===em){let t=s.getIndex();if(t===null){const a=[],l=s.getAttribute("position");if(l!==void 0){for(let c=0;c<l.count;c++)a.push(c);s.setIndex(a),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===Yc)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class IT extends Ur{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new OT(t)}),this.register(function(t){return new jT(t)}),this.register(function(t){return new qT(t)}),this.register(function(t){return new YT(t)}),this.register(function(t){return new kT(t)}),this.register(function(t){return new VT(t)}),this.register(function(t){return new zT(t)}),this.register(function(t){return new HT(t)}),this.register(function(t){return new FT(t)}),this.register(function(t){return new GT(t)}),this.register(function(t){return new BT(t)}),this.register(function(t){return new XT(t)}),this.register(function(t){return new WT(t)}),this.register(function(t){return new NT(t)}),this.register(function(t){return new KT(t)}),this.register(function(t){return new $T(t)})}load(e,t,n,i){const r=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const h=So.extractUrlBase(e);a=So.resolveURL(h,this.path)}else a=So.extractUrlBase(e);this.manager.itemStart(e);const l=function(h){i?i(h):console.error(h),r.manager.itemError(e),r.manager.itemEnd(e)},c=new Cm(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(h){try{r.parse(h,a,function(d){t(d),r.manager.itemEnd(e)},l)}catch(d){l(d)}},n,l)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const a={},l={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===zm){try{a[at.KHR_BINARY_GLTF]=new ZT(e)}catch(f){i&&i(f);return}r=JSON.parse(a[at.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const h=new uA(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});h.fileLoader.setRequestHeader(this.requestHeader);for(let d=0;d<this.pluginCallbacks.length;d++){const f=this.pluginCallbacks[d](h);f.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),l[f.name]=f,a[f.name]=!0}if(r.extensionsUsed)for(let d=0;d<r.extensionsUsed.length;++d){const f=r.extensionsUsed[d],m=r.extensionsRequired||[];switch(f){case at.KHR_MATERIALS_UNLIT:a[f]=new UT;break;case at.KHR_DRACO_MESH_COMPRESSION:a[f]=new QT(r,this.dracoLoader);break;case at.KHR_TEXTURE_TRANSFORM:a[f]=new JT;break;case at.KHR_MESH_QUANTIZATION:a[f]=new eA;break;default:m.indexOf(f)>=0&&l[f]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+f+'".')}}h.setExtensions(a),h.setPlugins(l),h.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function DT(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const at={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class NT{constructor(e){this.parser=e,this.name=at.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let h;const d=new Ve(16777215);c.color!==void 0&&d.setRGB(c.color[0],c.color[1],c.color[2],en);const f=c.range!==void 0?c.range:0;switch(c.type){case"directional":h=new JE(d),h.target.position.set(0,0,-1),h.add(h.target);break;case"point":h=new Pm(d),h.distance=f;break;case"spot":h=new $E(d),h.distance=f,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,h.angle=c.spot.outerConeAngle,h.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,h.target.position.set(0,0,-1),h.add(h.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return h.position.set(0,0,0),h.decay=2,Yi(h,c),c.intensity!==void 0&&(h.intensity=c.intensity),h.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(h),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],l=(r.extensions&&r.extensions[this.name]||{}).light;return l===void 0?null:this._loadLight(l).then(function(c){return n._getNodeRef(t.cache,l,c)})}}class UT{constructor(){this.name=at.KHR_MATERIALS_UNLIT}getMaterialType(){return ti}extendParams(e,t,n){const i=[];e.color=new Ve(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],en),e.opacity=a[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,Ft))}return Promise.all(i)}}class FT{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class OT{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ai}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const l=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ae(l,l)}return Promise.all(r)}}class BT{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ai}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}}class kT{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ai}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Ve(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){const l=a.sheenColorFactor;t.sheenColor.setRGB(l[0],l[1],l[2],en)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,Ft)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}}class VT{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ai}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}}class zT{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ai}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const l=a.attenuationColor||[1,1,1];return t.attenuationColor=new Ve().setRGB(l[0],l[1],l[2],en),Promise.all(r)}}class HT{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ai}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class GT{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ai}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const l=a.specularColorFactor||[1,1,1];return t.specularColor=new Ve().setRGB(l[0],l[1],l[2],en),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,Ft)),Promise.all(r)}}class WT{constructor(e){this.parser=e,this.name=at.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ai}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}}class XT{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ai}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}}class jT{constructor(e){this.parser=e,this.name=at.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}}class qT{constructor(e){this.parser=e,this.name=at.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],l=i.images[a.source];let c=n.textureLoader;if(l.uri){const h=n.options.manager.getHandler(l.uri);h!==null&&(c=h)}return this.detectSupport().then(function(h){if(h)return n.loadTextureImage(e,a.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class YT{constructor(e){this.parser=e,this.name=at.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],l=i.images[a.source];let c=n.textureLoader;if(l.uri){const h=n.options.manager.getHandler(l.uri);h!==null&&(c=h)}return this.detectSupport().then(function(h){if(h)return n.loadTextureImage(e,a.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class KT{constructor(e){this.name=at.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(l){const c=i.byteOffset||0,h=i.byteLength||0,d=i.count,f=i.byteStride,m=new Uint8Array(l,c,h);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(d,f,m,i.mode,i.filter).then(function(g){return g.buffer}):a.ready.then(function(){const g=new ArrayBuffer(d*f);return a.decodeGltfBuffer(new Uint8Array(g),d,f,m,i.mode,i.filter),g})})}else return null}}class $T{constructor(e){this.name=at.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const h of i.primitives)if(h.mode!==Nn.TRIANGLES&&h.mode!==Nn.TRIANGLE_STRIP&&h.mode!==Nn.TRIANGLE_FAN&&h.mode!==void 0)return null;const a=n.extensions[this.name].attributes,l=[],c={};for(const h in a)l.push(this.parser.getDependency("accessor",a[h]).then(d=>(c[h]=d,c[h])));return l.length<1?null:(l.push(this.parser.createNodeMesh(e)),Promise.all(l).then(h=>{const d=h.pop(),f=d.isGroup?d.children:[d],m=h[0].count,g=[];for(const b of f){const M=new He,x=new D,v=new Gt,w=new D(1,1,1),y=new LE(b.geometry,b.material,m);for(let S=0;S<m;S++)c.TRANSLATION&&x.fromBufferAttribute(c.TRANSLATION,S),c.ROTATION&&v.fromBufferAttribute(c.ROTATION,S),c.SCALE&&w.fromBufferAttribute(c.SCALE,S),y.setMatrixAt(S,M.compose(x,v,w));for(const S in c)if(S==="_COLOR_0"){const C=c[S];y.instanceColor=new Jc(C.array,C.itemSize,C.normalized)}else S!=="TRANSLATION"&&S!=="ROTATION"&&S!=="SCALE"&&b.geometry.setAttribute(S,c[S]);mt.prototype.copy.call(y,b),this.parser.assignFinalMaterial(y),g.push(y)}return d.isGroup?(d.clear(),d.add(...g),d):g[0]}))}}const zm="glTF",mo=12,bf={JSON:1313821514,BIN:5130562};class ZT{constructor(e){this.name=at.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,mo),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==zm)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-mo,r=new DataView(e,mo);let a=0;for(;a<i;){const l=r.getUint32(a,!0);a+=4;const c=r.getUint32(a,!0);if(a+=4,c===bf.JSON){const h=new Uint8Array(e,mo+a,l);this.content=n.decode(h)}else if(c===bf.BIN){const h=mo+a;this.body=e.slice(h,h+l)}a+=l}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class QT{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=at.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,l={},c={},h={};for(const d in a){const f=hu[d]||d.toLowerCase();l[f]=a[d]}for(const d in e.attributes){const f=hu[d]||d.toLowerCase();if(a[d]!==void 0){const m=n.accessors[e.attributes[d]],g=br[m.componentType];h[f]=g.name,c[f]=m.normalized===!0}}return t.getDependency("bufferView",r).then(function(d){return new Promise(function(f,m){i.decodeDracoFile(d,function(g){for(const b in g.attributes){const M=g.attributes[b],x=c[b];x!==void 0&&(M.normalized=x)}f(g)},l,h,en,m)})})}}class JT{constructor(){this.name=at.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class eA{constructor(){this.name=at.KHR_MESH_QUANTIZATION}}class Hm extends Do{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,c=l*2,h=l*3,d=i-t,f=(n-t)/d,m=f*f,g=m*f,b=e*h,M=b-h,x=-2*g+3*m,v=g-m,w=1-x,y=v-m+f;for(let S=0;S!==l;S++){const C=a[M+S+l],P=a[M+S+c]*d,A=a[b+S+l],I=a[b+S]*d;r[S]=w*C+y*P+x*A+v*I}return r}}const tA=new Gt;class nA extends Hm{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return tA.fromArray(r).normalize().toArray(r),r}}const Nn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},br={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},yf={9728:dt,9729:Tt,9984:jc,9985:ka,9986:pr,9987:Ei},wf={33071:hn,33648:qa,10497:Mr},Uc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},hu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Xi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},iA={CUBICSPLINE:void 0,LINEAR:Sr,STEP:Po},Fc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function sA(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new cl({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:qn})),s.DefaultMaterial}function hs(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Yi(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function rA(s,e,t){let n=!1,i=!1,r=!1;for(let h=0,d=e.length;h<d;h++){const f=e[h];if(f.POSITION!==void 0&&(n=!0),f.NORMAL!==void 0&&(i=!0),f.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const a=[],l=[],c=[];for(let h=0,d=e.length;h<d;h++){const f=e[h];if(n){const m=f.POSITION!==void 0?t.getDependency("accessor",f.POSITION):s.attributes.position;a.push(m)}if(i){const m=f.NORMAL!==void 0?t.getDependency("accessor",f.NORMAL):s.attributes.normal;l.push(m)}if(r){const m=f.COLOR_0!==void 0?t.getDependency("accessor",f.COLOR_0):s.attributes.color;c.push(m)}}return Promise.all([Promise.all(a),Promise.all(l),Promise.all(c)]).then(function(h){const d=h[0],f=h[1],m=h[2];return n&&(s.morphAttributes.position=d),i&&(s.morphAttributes.normal=f),r&&(s.morphAttributes.color=m),s.morphTargetsRelative=!0,s})}function oA(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function aA(s){let e;const t=s.extensions&&s.extensions[at.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Oc(t.attributes):e=s.indices+":"+Oc(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+Oc(s.targets[n]);return e}function Oc(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function du(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function lA(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const cA=new He;class uA{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new DT,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,r=-1;typeof navigator!="undefined"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,r=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap=="undefined"||n||i&&r<98?this.textureLoader=new YE(this.options.manager):this.textureLoader=new eS(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Cm(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const l={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return hs(r,l,i),Yi(l,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(l)})).then(function(){e(l)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const a=t[i].joints;for(let l=0,c=a.length;l<c;l++)e[a[l]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(a,l)=>{const c=this.associations.get(a);c!=null&&this.associations.set(l,c);for(const[h,d]of a.children.entries())r(d,l.children[h])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[at.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,a){n.load(So.resolveURL(t.uri,i.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const a=Uc[i.type],l=br[i.componentType],c=i.normalized===!0,h=new l(i.count*a);return Promise.resolve(new Ct(h,a,c))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(a){const l=a[0],c=Uc[i.type],h=br[i.componentType],d=h.BYTES_PER_ELEMENT,f=d*c,m=i.byteOffset||0,g=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,b=i.normalized===!0;let M,x;if(g&&g!==f){const v=Math.floor(m/g),w="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+v+":"+i.count;let y=t.cache.get(w);y||(M=new h(l,v*g,i.count*g/d),y=new TE(M,g/d),t.cache.add(w,y)),x=new Pu(y,c,m%g/d,b)}else l===null?M=new h(i.count*c):M=new h(l,m,i.count*c),x=new Ct(M,c,b);if(i.sparse!==void 0){const v=Uc.SCALAR,w=br[i.sparse.indices.componentType],y=i.sparse.indices.byteOffset||0,S=i.sparse.values.byteOffset||0,C=new w(a[1],y,i.sparse.count*v),P=new h(a[2],S,i.sparse.count*c);l!==null&&(x=new Ct(x.array.slice(),x.itemSize,x.normalized));for(let A=0,I=C.length;A<I;A++){const B=C[A];if(x.setX(B,P[A*c]),c>=2&&x.setY(B,P[A*c+1]),c>=3&&x.setZ(B,P[A*c+2]),c>=4&&x.setW(B,P[A*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return x})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r];let l=this.textureLoader;if(a.uri){const c=n.manager.getHandler(a.uri);c!==null&&(l=c)}return this.loadTextureImage(e,r,l)}loadTextureImage(e,t,n){const i=this,r=this.json,a=r.textures[e],l=r.images[t],c=(l.uri||l.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];const h=this.loadImageSource(t,n).then(function(d){d.flipY=!1,d.name=a.name||l.name||"",d.name===""&&typeof l.uri=="string"&&l.uri.startsWith("data:image/")===!1&&(d.name=l.uri);const m=(r.samplers||{})[a.sampler]||{};return d.magFilter=yf[m.magFilter]||Tt,d.minFilter=yf[m.minFilter]||Ei,d.wrapS=wf[m.wrapS]||Mr,d.wrapT=wf[m.wrapT]||Mr,i.associations.set(d,{textures:e}),d}).catch(function(){return null});return this.textureCache[c]=h,h}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());const a=i.images[e],l=self.URL||self.webkitURL;let c=a.uri||"",h=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(f){h=!0;const m=new Blob([f],{type:a.mimeType});return c=l.createObjectURL(m),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const d=Promise.resolve(c).then(function(f){return new Promise(function(m,g){let b=m;t.isImageBitmapLoader===!0&&(b=function(M){const x=new jt(M);x.needsUpdate=!0,m(x)}),t.load(So.resolveURL(f,r.path),b,void 0,g)})}).then(function(f){return h===!0&&l.revokeObjectURL(c),f.userData.mimeType=a.mimeType||lA(a.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),f});return this.sourceCache[e]=d,d}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[at.KHR_TEXTURE_TRANSFORM]){const l=n.extensions!==void 0?n.extensions[at.KHR_TEXTURE_TRANSFORM]:void 0;if(l){const c=r.associations.get(a);a=r.extensions[at.KHR_TEXTURE_TRANSFORM].extendTexture(a,l),r.associations.set(a,c)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const l="PointsMaterial:"+n.uuid;let c=this.cache.get(l);c||(c=new Sm,ii.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(l,c)),n=c}else if(e.isLine){const l="LineBasicMaterial:"+n.uuid;let c=this.cache.get(l);c||(c=new Lu,ii.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(l,c)),n=c}if(i||r||a){let l="ClonedMaterial:"+n.uuid+":";i&&(l+="derivative-tangents:"),r&&(l+="vertex-colors:"),a&&(l+="flat-shading:");let c=this.cache.get(l);c||(c=n.clone(),r&&(c.vertexColors=!0),a&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(l,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return cl}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let a;const l={},c=r.extensions||{},h=[];if(c[at.KHR_MATERIALS_UNLIT]){const f=i[at.KHR_MATERIALS_UNLIT];a=f.getMaterialType(),h.push(f.extendParams(l,r,t))}else{const f=r.pbrMetallicRoughness||{};if(l.color=new Ve(1,1,1),l.opacity=1,Array.isArray(f.baseColorFactor)){const m=f.baseColorFactor;l.color.setRGB(m[0],m[1],m[2],en),l.opacity=m[3]}f.baseColorTexture!==void 0&&h.push(t.assignTexture(l,"map",f.baseColorTexture,Ft)),l.metalness=f.metallicFactor!==void 0?f.metallicFactor:1,l.roughness=f.roughnessFactor!==void 0?f.roughnessFactor:1,f.metallicRoughnessTexture!==void 0&&(h.push(t.assignTexture(l,"metalnessMap",f.metallicRoughnessTexture)),h.push(t.assignTexture(l,"roughnessMap",f.metallicRoughnessTexture))),a=this._invokeOne(function(m){return m.getMaterialType&&m.getMaterialType(e)}),h.push(Promise.all(this._invokeAll(function(m){return m.extendMaterialParams&&m.extendMaterialParams(e,l)})))}r.doubleSided===!0&&(l.side=mn);const d=r.alphaMode||Fc.OPAQUE;if(d===Fc.BLEND?(l.transparent=!0,l.depthWrite=!1):(l.transparent=!1,d===Fc.MASK&&(l.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==ti&&(h.push(t.assignTexture(l,"normalMap",r.normalTexture)),l.normalScale=new Ae(1,1),r.normalTexture.scale!==void 0)){const f=r.normalTexture.scale;l.normalScale.set(f,f)}if(r.occlusionTexture!==void 0&&a!==ti&&(h.push(t.assignTexture(l,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(l.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==ti){const f=r.emissiveFactor;l.emissive=new Ve().setRGB(f[0],f[1],f[2],en)}return r.emissiveTexture!==void 0&&a!==ti&&h.push(t.assignTexture(l,"emissiveMap",r.emissiveTexture,Ft)),Promise.all(h).then(function(){const f=new a(l);return r.name&&(f.name=r.name),Yi(f,r),t.associations.set(f,{materials:e}),r.extensions&&hs(i,f,r),f})}createUniqueName(e){const t=vt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(l){return n[at.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(l,t).then(function(c){return Mf(c,l,t)})}const a=[];for(let l=0,c=e.length;l<c;l++){const h=e[l],d=aA(h),f=i[d];if(f)a.push(f.promise);else{let m;h.extensions&&h.extensions[at.KHR_DRACO_MESH_COMPRESSION]?m=r(h):m=Mf(new tn,h,t),i[d]={primitive:h,promise:m},a.push(m)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],a=r.primitives,l=[];for(let c=0,h=a.length;c<h;c++){const d=a[c].material===void 0?sA(this.cache):this.getDependency("material",a[c].material);l.push(d)}return l.push(t.loadGeometries(a)),Promise.all(l).then(function(c){const h=c.slice(0,c.length-1),d=c[c.length-1],f=[];for(let g=0,b=d.length;g<b;g++){const M=d[g],x=a[g];let v;const w=h[g];if(x.mode===Nn.TRIANGLES||x.mode===Nn.TRIANGLE_STRIP||x.mode===Nn.TRIANGLE_FAN||x.mode===void 0)v=r.isSkinnedMesh===!0?new CE(M,w):new fe(M,w),v.isSkinnedMesh===!0&&v.normalizeSkinWeights(),x.mode===Nn.TRIANGLE_STRIP?v.geometry=xf(v.geometry,em):x.mode===Nn.TRIANGLE_FAN&&(v.geometry=xf(v.geometry,Yc));else if(x.mode===Nn.LINES)v=new IE(M,w);else if(x.mode===Nn.LINE_STRIP)v=new Wn(M,w);else if(x.mode===Nn.LINE_LOOP)v=new DE(M,w);else if(x.mode===Nn.POINTS)v=new NE(M,w);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+x.mode);Object.keys(v.geometry.morphAttributes).length>0&&oA(v,r),v.name=t.createUniqueName(r.name||"mesh_"+e),Yi(v,r),x.extensions&&hs(i,v,x),t.assignFinalMaterial(v),f.push(v)}for(let g=0,b=f.length;g<b;g++)t.associations.set(f[g],{meshes:e,primitives:g});if(f.length===1)return r.extensions&&hs(i,f[0],r),f[0];const m=new xs;r.extensions&&hs(i,m,r),t.associations.set(m,{meshes:e});for(let g=0,b=f.length;g<b;g++)m.add(f[g]);return m})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new fn(sm.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new ai(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Yi(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),a=i,l=[],c=[];for(let h=0,d=a.length;h<d;h++){const f=a[h];if(f){l.push(f);const m=new He;r!==null&&m.fromArray(r.array,h*16),c.push(m)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[h])}return new Ru(l,c)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,a=[],l=[],c=[],h=[],d=[];for(let f=0,m=i.channels.length;f<m;f++){const g=i.channels[f],b=i.samplers[g.sampler],M=g.target,x=M.node,v=i.parameters!==void 0?i.parameters[b.input]:b.input,w=i.parameters!==void 0?i.parameters[b.output]:b.output;M.node!==void 0&&(a.push(this.getDependency("node",x)),l.push(this.getDependency("accessor",v)),c.push(this.getDependency("accessor",w)),h.push(b),d.push(M))}return Promise.all([Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h),Promise.all(d)]).then(function(f){const m=f[0],g=f[1],b=f[2],M=f[3],x=f[4],v=[];for(let w=0,y=m.length;w<y;w++){const S=m[w],C=g[w],P=b[w],A=M[w],I=x[w];if(S===void 0)continue;S.updateMatrix&&S.updateMatrix();const B=n._createAnimationTracks(S,C,P,A,I);if(B)for(let E=0;E<B.length;E++)v.push(B[E])}return new zE(r,void 0,v)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const a=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&a.traverse(function(l){if(!!l.isMesh)for(let c=0,h=i.weights.length;c<h;c++)l.morphTargetInfluences[c]=i.weights[c]}),a})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),a=[],l=i.children||[];for(let h=0,d=l.length;h<d;h++)a.push(n.getDependency("node",l[h]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(a),c]).then(function(h){const d=h[0],f=h[1],m=h[2];m!==null&&d.traverse(function(g){!g.isSkinnedMesh||g.bind(m,cA)});for(let g=0,b=f.length;g<b;g++)d.add(f[g]);return d})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],a=r.name?i.createUniqueName(r.name):"",l=[],c=i._invokeOne(function(h){return h.createNodeMesh&&h.createNodeMesh(e)});return c&&l.push(c),r.camera!==void 0&&l.push(i.getDependency("camera",r.camera).then(function(h){return i._getNodeRef(i.cameraCache,r.camera,h)})),i._invokeAll(function(h){return h.createNodeAttachment&&h.createNodeAttachment(e)}).forEach(function(h){l.push(h)}),this.nodeCache[e]=Promise.all(l).then(function(h){let d;if(r.isBone===!0?d=new Em:h.length>1?d=new xs:h.length===1?d=h[0]:d=new mt,d!==h[0])for(let f=0,m=h.length;f<m;f++)d.add(h[f]);if(r.name&&(d.userData.name=r.name,d.name=a),Yi(d,r),r.extensions&&hs(n,d,r),r.matrix!==void 0){const f=new He;f.fromArray(r.matrix),d.applyMatrix4(f)}else r.translation!==void 0&&d.position.fromArray(r.translation),r.rotation!==void 0&&d.quaternion.fromArray(r.rotation),r.scale!==void 0&&d.scale.fromArray(r.scale);return i.associations.has(d)||i.associations.set(d,{}),i.associations.get(d).nodes=e,d}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new xs;n.name&&(r.name=i.createUniqueName(n.name)),Yi(r,n),n.extensions&&hs(t,r,n);const a=n.nodes||[],l=[];for(let c=0,h=a.length;c<h;c++)l.push(i.getDependency("node",a[c]));return Promise.all(l).then(function(c){for(let d=0,f=c.length;d<f;d++)r.add(c[d]);const h=d=>{const f=new Map;for(const[m,g]of i.associations)(m instanceof ii||m instanceof jt)&&f.set(m,g);return d.traverse(m=>{const g=i.associations.get(m);g!=null&&f.set(m,g)}),f};return i.associations=h(r),r})}_createAnimationTracks(e,t,n,i,r){const a=[],l=e.name?e.name:e.uuid,c=[];Xi[r.path]===Xi.weights?e.traverse(function(m){m.morphTargetInfluences&&c.push(m.name?m.name:m.uuid)}):c.push(l);let h;switch(Xi[r.path]){case Xi.weights:h=Pr;break;case Xi.rotation:h=Es;break;case Xi.position:case Xi.scale:h=Rr;break;default:switch(n.itemSize){case 1:h=Pr;break;case 2:case 3:default:h=Rr;break}break}const d=i.interpolation!==void 0?iA[i.interpolation]:Sr,f=this._getArrayFromAccessor(n);for(let m=0,g=c.length;m<g;m++){const b=new h(c[m]+"."+Xi[r.path],t.array,f,d);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(b),a.push(b)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=du(t.constructor),i=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Es?nA:Hm;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function hA(s,e,t){const n=e.attributes,i=new Vt;if(n.POSITION!==void 0){const l=t.json.accessors[n.POSITION],c=l.min,h=l.max;if(c!==void 0&&h!==void 0){if(i.set(new D(c[0],c[1],c[2]),new D(h[0],h[1],h[2])),l.normalized){const d=du(br[l.componentType]);i.min.multiplyScalar(d),i.max.multiplyScalar(d)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const l=new D,c=new D;for(let h=0,d=r.length;h<d;h++){const f=r[h];if(f.POSITION!==void 0){const m=t.json.accessors[f.POSITION],g=m.min,b=m.max;if(g!==void 0&&b!==void 0){if(c.setX(Math.max(Math.abs(g[0]),Math.abs(b[0]))),c.setY(Math.max(Math.abs(g[1]),Math.abs(b[1]))),c.setZ(Math.max(Math.abs(g[2]),Math.abs(b[2]))),m.normalized){const M=du(br[m.componentType]);c.multiplyScalar(M)}l.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(l)}s.boundingBox=i;const a=new $n;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=a}function Mf(s,e,t){const n=e.attributes,i=[];function r(a,l){return t.getDependency("accessor",a).then(function(c){s.setAttribute(l,c)})}for(const a in n){const l=hu[a]||a.toLowerCase();l in s.attributes||i.push(r(n[a],l))}if(e.indices!==void 0&&!s.index){const a=t.getDependency("accessor",e.indices).then(function(l){s.setIndex(l)});i.push(a)}return pt.workingColorSpace!==en&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${pt.workingColorSpace}" not supported.`),Yi(s,e),hA(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?rA(s,e.targets,t):s})}var dA=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},pu={exports:{}};/*! Tweakpane 3.1.0 (c) 2016 cocopon, licensed under the MIT license. */(function(s,e){(function(t,n){n(e)})(dA,function(t){class n{constructor(o){const[u,_]=o.split("-"),T=u.split(".");this.major=parseInt(T[0],10),this.minor=parseInt(T[1],10),this.patch=parseInt(T[2],10),this.prerelease=_!=null?_:null}toString(){const o=[this.major,this.minor,this.patch].join(".");return this.prerelease!==null?[o,this.prerelease].join("-"):o}}class i{constructor(o){this.controller_=o}get element(){return this.controller_.view.element}get disabled(){return this.controller_.viewProps.get("disabled")}set disabled(o){this.controller_.viewProps.set("disabled",o)}get hidden(){return this.controller_.viewProps.get("hidden")}set hidden(o){this.controller_.viewProps.set("hidden",o)}dispose(){this.controller_.viewProps.set("disposed",!0)}}class r{constructor(o){this.target=o}}class a extends r{constructor(o,u,_,T){super(o),this.value=u,this.presetKey=_,this.last=T!=null?T:!0}}class l extends r{constructor(o,u,_){super(o),this.value=u,this.presetKey=_}}class c extends r{constructor(o,u){super(o),this.expanded=u}}class h extends r{constructor(o,u){super(o),this.index=u}}function d(p){return p}function f(p){return p==null}function m(p,o){if(p.length!==o.length)return!1;for(let u=0;u<p.length;u++)if(p[u]!==o[u])return!1;return!0}const g={alreadydisposed:()=>"View has been already disposed",invalidparams:p=>`Invalid parameters for '${p.name}'`,nomatchingcontroller:p=>`No matching controller for '${p.key}'`,nomatchingview:p=>`No matching view for '${JSON.stringify(p.params)}'`,notbindable:()=>"Value is not bindable",propertynotfound:p=>`Property '${p.name}' not found`,shouldneverhappen:()=>"This error should never happen"};class b{constructor(o){var u;this.message=(u=g[o.type](o.context))!==null&&u!==void 0?u:"Unexpected error",this.name=this.constructor.name,this.stack=new Error(this.message).stack,this.type=o.type}static alreadyDisposed(){return new b({type:"alreadydisposed"})}static notBindable(){return new b({type:"notbindable"})}static propertyNotFound(o){return new b({type:"propertynotfound",context:{name:o}})}static shouldNeverHappen(){return new b({type:"shouldneverhappen"})}}class M{constructor(o,u,_){this.obj_=o,this.key_=u,this.presetKey_=_!=null?_:u}static isBindable(o){return!(o===null||typeof o!="object")}get key(){return this.key_}get presetKey(){return this.presetKey_}read(){return this.obj_[this.key_]}write(o){this.obj_[this.key_]=o}writeProperty(o,u){const _=this.read();if(!M.isBindable(_))throw b.notBindable();if(!(o in _))throw b.propertyNotFound(o);_[o]=u}}class x extends i{get label(){return this.controller_.props.get("label")}set label(o){this.controller_.props.set("label",o)}get title(){var o;return(o=this.controller_.valueController.props.get("title"))!==null&&o!==void 0?o:""}set title(o){this.controller_.valueController.props.set("title",o)}on(o,u){const _=u.bind(this);return this.controller_.valueController.emitter.on(o,()=>{_(new r(this))}),this}}class v{constructor(){this.observers_={}}on(o,u){let _=this.observers_[o];return _||(_=this.observers_[o]=[]),_.push({handler:u}),this}off(o,u){const _=this.observers_[o];return _&&(this.observers_[o]=_.filter(T=>T.handler!==u)),this}emit(o,u){const _=this.observers_[o];!_||_.forEach(T=>{T.handler(u)})}}const w="tp";function y(p){return(u,_)=>[w,"-",p,"v",u?`_${u}`:"",_?`-${_}`:""].join("")}function S(p,o){return u=>o(p(u))}function C(p){return p.rawValue}function P(p,o){p.emitter.on("change",S(C,o)),o(p.rawValue)}function A(p,o,u){P(p.value(o),u)}function I(p,o,u){u?p.classList.add(o):p.classList.remove(o)}function B(p,o){return u=>{I(p,o,u)}}function E(p,o){P(p,u=>{o.textContent=u!=null?u:""})}const R=y("btn");class k{constructor(o,u){this.element=o.createElement("div"),this.element.classList.add(R()),u.viewProps.bindClassModifiers(this.element);const _=o.createElement("button");_.classList.add(R("b")),u.viewProps.bindDisabled(_),this.element.appendChild(_),this.buttonElement=_;const T=o.createElement("div");T.classList.add(R("t")),E(u.props.value("title"),T),this.buttonElement.appendChild(T)}}class W{constructor(o,u){this.emitter=new v,this.onClick_=this.onClick_.bind(this),this.props=u.props,this.viewProps=u.viewProps,this.view=new k(o,{props:this.props,viewProps:this.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}onClick_(){this.emitter.emit("click",{sender:this})}}class U{constructor(o,u){var _;this.constraint_=u==null?void 0:u.constraint,this.equals_=(_=u==null?void 0:u.equals)!==null&&_!==void 0?_:(T,z)=>T===z,this.emitter=new v,this.rawValue_=o}get constraint(){return this.constraint_}get rawValue(){return this.rawValue_}set rawValue(o){this.setRawValue(o,{forceEmit:!1,last:!0})}setRawValue(o,u){const _=u!=null?u:{forceEmit:!1,last:!0},T=this.constraint_?this.constraint_.constrain(o):o;!!this.equals_(this.rawValue_,T)&&!_.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.rawValue_=T,this.emitter.emit("change",{options:_,rawValue:T,sender:this}))}}class G{constructor(o){this.emitter=new v,this.value_=o}get rawValue(){return this.value_}set rawValue(o){this.setRawValue(o,{forceEmit:!1,last:!0})}setRawValue(o,u){const _=u!=null?u:{forceEmit:!1,last:!0};this.value_===o&&!_.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.value_=o,this.emitter.emit("change",{options:_,rawValue:this.value_,sender:this}))}}function H(p,o){const u=o==null?void 0:o.constraint,_=o==null?void 0:o.equals;return!u&&!_?new G(p):new U(p,o)}class X{constructor(o){this.emitter=new v,this.valMap_=o;for(const u in this.valMap_)this.valMap_[u].emitter.on("change",()=>{this.emitter.emit("change",{key:u,sender:this})})}static createCore(o){return Object.keys(o).reduce((_,T)=>Object.assign(_,{[T]:H(o[T])}),{})}static fromObject(o){const u=this.createCore(o);return new X(u)}get(o){return this.valMap_[o].rawValue}set(o,u){this.valMap_[o].rawValue=u}value(o){return this.valMap_[o]}}function J(p,o){const _=Object.keys(o).reduce((T,z)=>{if(T===void 0)return;const j=o[z],ue=j(p[z]);return ue.succeeded?Object.assign(Object.assign({},T),{[z]:ue.value}):void 0},{});return _}function $(p,o){return p.reduce((u,_)=>{if(u===void 0)return;const T=o(_);if(!(!T.succeeded||T.value===void 0))return[...u,T.value]},[])}function ie(p){return p===null?!1:typeof p=="object"}function ne(p){return o=>u=>{if(!o&&u===void 0)return{succeeded:!1,value:void 0};if(o&&u===void 0)return{succeeded:!0,value:void 0};const _=p(u);return _!==void 0?{succeeded:!0,value:_}:{succeeded:!1,value:void 0}}}function me(p){return{custom:o=>ne(o)(p),boolean:ne(o=>typeof o=="boolean"?o:void 0)(p),number:ne(o=>typeof o=="number"?o:void 0)(p),string:ne(o=>typeof o=="string"?o:void 0)(p),function:ne(o=>typeof o=="function"?o:void 0)(p),constant:o=>ne(u=>u===o?o:void 0)(p),raw:ne(o=>o)(p),object:o=>ne(u=>{if(!!ie(u))return J(u,o)})(p),array:o=>ne(u=>{if(!!Array.isArray(u))return $(u,o)})(p)}}const pe={optional:me(!0),required:me(!1)};function K(p,o){const u=pe.required.object(o)(p);return u.succeeded?u.value:void 0}function se(p){return p&&p.parentElement&&p.parentElement.removeChild(p),null}function be(){return["veryfirst","first","last","verylast"]}const Te=y(""),Ce={veryfirst:"vfst",first:"fst",last:"lst",verylast:"vlst"};class ye{constructor(o){this.parent_=null,this.blade=o.blade,this.view=o.view,this.viewProps=o.viewProps;const u=this.view.element;this.blade.value("positions").emitter.on("change",()=>{be().forEach(_=>{u.classList.remove(Te(void 0,Ce[_]))}),this.blade.get("positions").forEach(_=>{u.classList.add(Te(void 0,Ce[_]))})}),this.viewProps.handleDispose(()=>{se(u)})}get parent(){return this.parent_}}const Ge="http://www.w3.org/2000/svg";function Be(p){p.offsetHeight}function q(p,o){const u=p.style.transition;p.style.transition="none",o(),p.style.transition=u}function Dt(p){return p.ontouchstart!==void 0}function Pe(){return new Function("return this")()}function We(){return Pe().document}function Re(p){const o=p.ownerDocument.defaultView;return o&&"document"in o?p.getContext("2d"):null}const bt={check:'<path d="M2 8l4 4l8 -8"/>',dropdown:'<path d="M5 7h6l-3 3 z"/>',p2dpad:'<path d="M8 4v8"/><path d="M4 8h8"/><circle cx="12" cy="12" r="1.2"/>'};function je(p,o){const u=p.createElementNS(Ge,"svg");return u.innerHTML=bt[o],u}function F(p,o,u){p.insertBefore(o,p.children[u])}function L(p){p.parentElement&&p.parentElement.removeChild(p)}function Z(p){for(;p.children.length>0;)p.removeChild(p.children[0])}function he(p){for(;p.childNodes.length>0;)p.removeChild(p.childNodes[0])}function ae(p){return p.relatedTarget?p.relatedTarget:"explicitOriginalTarget"in p?p.explicitOriginalTarget:null}const ce=y("lbl");function Se(p,o){const u=p.createDocumentFragment();return o.split(`
`).map(T=>p.createTextNode(T)).forEach((T,z)=>{z>0&&u.appendChild(p.createElement("br")),u.appendChild(T)}),u}class ve{constructor(o,u){this.element=o.createElement("div"),this.element.classList.add(ce()),u.viewProps.bindClassModifiers(this.element);const _=o.createElement("div");_.classList.add(ce("l")),A(u.props,"label",z=>{f(z)?this.element.classList.add(ce(void 0,"nol")):(this.element.classList.remove(ce(void 0,"nol")),he(_),_.appendChild(Se(o,z)))}),this.element.appendChild(_),this.labelElement=_;const T=o.createElement("div");T.classList.add(ce("v")),this.element.appendChild(T),this.valueElement=T}}class we extends ye{constructor(o,u){const _=u.valueController.viewProps;super(Object.assign(Object.assign({},u),{view:new ve(o,{props:u.props,viewProps:_}),viewProps:_})),this.props=u.props,this.valueController=u.valueController,this.view.valueElement.appendChild(this.valueController.view.element)}}const Oe={id:"button",type:"blade",accept(p){const o=pe,u=K(p,{title:o.required.string,view:o.required.constant("button"),label:o.optional.string});return u?{params:u}:null},controller(p){return new we(p.document,{blade:p.blade,props:X.fromObject({label:p.params.label}),valueController:new W(p.document,{props:X.fromObject({title:p.params.title}),viewProps:p.viewProps})})},api(p){return!(p.controller instanceof we)||!(p.controller.valueController instanceof W)?null:new x(p.controller)}};class ze extends ye{constructor(o){super(o),this.value=o.value}}function oe(){return new X({positions:H([],{equals:m})})}class st extends X{constructor(o){super(o)}static create(o){const u={completed:!0,expanded:o,expandedHeight:null,shouldFixHeight:!1,temporaryExpanded:null},_=X.createCore(u);return new st(_)}get styleExpanded(){var o;return(o=this.get("temporaryExpanded"))!==null&&o!==void 0?o:this.get("expanded")}get styleHeight(){if(!this.styleExpanded)return"0";const o=this.get("expandedHeight");return this.get("shouldFixHeight")&&!f(o)?`${o}px`:"auto"}bindExpandedClass(o,u){const _=()=>{this.styleExpanded?o.classList.add(u):o.classList.remove(u)};A(this,"expanded",_),A(this,"temporaryExpanded",_)}cleanUpTransition(){this.set("shouldFixHeight",!1),this.set("expandedHeight",null),this.set("completed",!0)}}function Je(p,o){let u=0;return q(o,()=>{p.set("expandedHeight",null),p.set("temporaryExpanded",!0),Be(o),u=o.clientHeight,p.set("temporaryExpanded",null),Be(o)}),u}function Xe(p,o){o.style.height=p.styleHeight}function Le(p,o){p.value("expanded").emitter.on("beforechange",()=>{p.set("completed",!1),f(p.get("expandedHeight"))&&p.set("expandedHeight",Je(p,o)),p.set("shouldFixHeight",!0),Be(o)}),p.emitter.on("change",()=>{Xe(p,o)}),Xe(p,o),o.addEventListener("transitionend",u=>{u.propertyName==="height"&&p.cleanUpTransition()})}class xe extends i{constructor(o,u){super(o),this.rackApi_=u}}function $e(p,o){return p.addBlade(Object.assign(Object.assign({},o),{view:"button"}))}function V(p,o){return p.addBlade(Object.assign(Object.assign({},o),{view:"folder"}))}function de(p,o){const u=o!=null?o:{};return p.addBlade(Object.assign(Object.assign({},u),{view:"separator"}))}function _e(p,o){return p.addBlade(Object.assign(Object.assign({},o),{view:"tab"}))}class Ie{constructor(o){this.emitter=new v,this.items_=[],this.cache_=new Set,this.onSubListAdd_=this.onSubListAdd_.bind(this),this.onSubListRemove_=this.onSubListRemove_.bind(this),this.extract_=o}get items(){return this.items_}allItems(){return Array.from(this.cache_)}find(o){for(const u of this.allItems())if(o(u))return u;return null}includes(o){return this.cache_.has(o)}add(o,u){if(this.includes(o))throw b.shouldNeverHappen();const _=u!==void 0?u:this.items_.length;this.items_.splice(_,0,o),this.cache_.add(o);const T=this.extract_(o);T&&(T.emitter.on("add",this.onSubListAdd_),T.emitter.on("remove",this.onSubListRemove_),T.allItems().forEach(z=>{this.cache_.add(z)})),this.emitter.emit("add",{index:_,item:o,root:this,target:this})}remove(o){const u=this.items_.indexOf(o);if(u<0)return;this.items_.splice(u,1),this.cache_.delete(o);const _=this.extract_(o);_&&(_.emitter.off("add",this.onSubListAdd_),_.emitter.off("remove",this.onSubListRemove_)),this.emitter.emit("remove",{index:u,item:o,root:this,target:this})}onSubListAdd_(o){this.cache_.add(o.item),this.emitter.emit("add",{index:o.index,item:o.item,root:this,target:o.target})}onSubListRemove_(o){this.cache_.delete(o.item),this.emitter.emit("remove",{index:o.index,item:o.item,root:this,target:o.target})}}class O extends i{constructor(o){super(o),this.onBindingChange_=this.onBindingChange_.bind(this),this.emitter_=new v,this.controller_.binding.emitter.on("change",this.onBindingChange_)}get label(){return this.controller_.props.get("label")}set label(o){this.controller_.props.set("label",o)}on(o,u){const _=u.bind(this);return this.emitter_.on(o,T=>{_(T.event)}),this}refresh(){this.controller_.binding.read()}onBindingChange_(o){const u=o.sender.target.read();this.emitter_.emit("change",{event:new a(this,u,this.controller_.binding.target.presetKey,o.options.last)})}}class re extends we{constructor(o,u){super(o,u),this.binding=u.binding}}class le extends i{constructor(o){super(o),this.onBindingUpdate_=this.onBindingUpdate_.bind(this),this.emitter_=new v,this.controller_.binding.emitter.on("update",this.onBindingUpdate_)}get label(){return this.controller_.props.get("label")}set label(o){this.controller_.props.set("label",o)}on(o,u){const _=u.bind(this);return this.emitter_.on(o,T=>{_(T.event)}),this}refresh(){this.controller_.binding.read()}onBindingUpdate_(o){const u=o.sender.target.read();this.emitter_.emit("update",{event:new l(this,u,this.controller_.binding.target.presetKey)})}}class Ee extends we{constructor(o,u){super(o,u),this.binding=u.binding,this.viewProps.bindDisabled(this.binding.ticker),this.viewProps.handleDispose(()=>{this.binding.dispose()})}}function Ue(p){return p instanceof ct?p.apiSet_:p instanceof xe?p.rackApi_.apiSet_:null}function nt(p,o){const u=p.find(_=>_.controller_===o);if(!u)throw b.shouldNeverHappen();return u}function tt(p,o,u){if(!M.isBindable(p))throw b.notBindable();return new M(p,o,u)}class ct extends i{constructor(o,u){super(o),this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this),this.onRackInputChange_=this.onRackInputChange_.bind(this),this.onRackMonitorUpdate_=this.onRackMonitorUpdate_.bind(this),this.emitter_=new v,this.apiSet_=new Ie(Ue),this.pool_=u;const _=this.controller_.rack;_.emitter.on("add",this.onRackAdd_),_.emitter.on("remove",this.onRackRemove_),_.emitter.on("inputchange",this.onRackInputChange_),_.emitter.on("monitorupdate",this.onRackMonitorUpdate_),_.children.forEach(T=>{this.setUpApi_(T)})}get children(){return this.controller_.rack.children.map(o=>nt(this.apiSet_,o))}addInput(o,u,_){const T=_!=null?_:{},z=this.controller_.view.element.ownerDocument,j=this.pool_.createInput(z,tt(o,u,T.presetKey),T),ue=new O(j);return this.add(ue,T.index)}addMonitor(o,u,_){const T=_!=null?_:{},z=this.controller_.view.element.ownerDocument,j=this.pool_.createMonitor(z,tt(o,u),T),ue=new le(j);return this.add(ue,T.index)}addFolder(o){return V(this,o)}addButton(o){return $e(this,o)}addSeparator(o){return de(this,o)}addTab(o){return _e(this,o)}add(o,u){this.controller_.rack.add(o.controller_,u);const _=this.apiSet_.find(T=>T.controller_===o.controller_);return _&&this.apiSet_.remove(_),this.apiSet_.add(o),o}remove(o){this.controller_.rack.remove(o.controller_)}addBlade(o){const u=this.controller_.view.element.ownerDocument,_=this.pool_.createBlade(u,o),T=this.pool_.createBladeApi(_);return this.add(T,o.index)}on(o,u){const _=u.bind(this);return this.emitter_.on(o,T=>{_(T.event)}),this}setUpApi_(o){this.apiSet_.find(_=>_.controller_===o)||this.apiSet_.add(this.pool_.createBladeApi(o))}onRackAdd_(o){this.setUpApi_(o.bladeController)}onRackRemove_(o){if(o.isRoot){const u=nt(this.apiSet_,o.bladeController);this.apiSet_.remove(u)}}onRackInputChange_(o){const u=o.bladeController;if(u instanceof re){const _=nt(this.apiSet_,u),T=u.binding;this.emitter_.emit("change",{event:new a(_,T.target.read(),T.target.presetKey,o.options.last)})}else if(u instanceof ze){const _=nt(this.apiSet_,u);this.emitter_.emit("change",{event:new a(_,u.value.rawValue,void 0,o.options.last)})}}onRackMonitorUpdate_(o){if(!(o.bladeController instanceof Ee))throw b.shouldNeverHappen();const u=nt(this.apiSet_,o.bladeController),_=o.bladeController.binding;this.emitter_.emit("update",{event:new l(u,_.target.read(),_.target.presetKey)})}}class Bt extends xe{constructor(o,u){super(o,new ct(o.rackController,u)),this.emitter_=new v,this.controller_.foldable.value("expanded").emitter.on("change",_=>{this.emitter_.emit("fold",{event:new c(this,_.sender.rawValue)})}),this.rackApi_.on("change",_=>{this.emitter_.emit("change",{event:_})}),this.rackApi_.on("update",_=>{this.emitter_.emit("update",{event:_})})}get expanded(){return this.controller_.foldable.get("expanded")}set expanded(o){this.controller_.foldable.set("expanded",o)}get title(){return this.controller_.props.get("title")}set title(o){this.controller_.props.set("title",o)}get children(){return this.rackApi_.children}addInput(o,u,_){return this.rackApi_.addInput(o,u,_)}addMonitor(o,u,_){return this.rackApi_.addMonitor(o,u,_)}addFolder(o){return this.rackApi_.addFolder(o)}addButton(o){return this.rackApi_.addButton(o)}addSeparator(o){return this.rackApi_.addSeparator(o)}addTab(o){return this.rackApi_.addTab(o)}add(o,u){return this.rackApi_.add(o,u)}remove(o){this.rackApi_.remove(o)}addBlade(o){return this.rackApi_.addBlade(o)}on(o,u){const _=u.bind(this);return this.emitter_.on(o,T=>{_(T.event)}),this}}class ot extends ye{constructor(o){super({blade:o.blade,view:o.view,viewProps:o.rackController.viewProps}),this.rackController=o.rackController}}class Nt{constructor(o,u){const _=y(u.viewName);this.element=o.createElement("div"),this.element.classList.add(_()),u.viewProps.bindClassModifiers(this.element)}}function sn(p,o){for(let u=0;u<p.length;u++){const _=p[u];if(_ instanceof re&&_.binding===o)return _}return null}function No(p,o){for(let u=0;u<p.length;u++){const _=p[u];if(_ instanceof Ee&&_.binding===o)return _}return null}function pl(p,o){for(let u=0;u<p.length;u++){const _=p[u];if(_ instanceof ze&&_.value===o)return _}return null}function Ci(p){return p instanceof Pi?p.rack:p instanceof ot?p.rackController.rack:null}function Uo(p){const o=Ci(p);return o?o.bcSet_:null}class As{constructor(o){var u;this.onBladePositionsChange_=this.onBladePositionsChange_.bind(this),this.onSetAdd_=this.onSetAdd_.bind(this),this.onSetRemove_=this.onSetRemove_.bind(this),this.onChildDispose_=this.onChildDispose_.bind(this),this.onChildPositionsChange_=this.onChildPositionsChange_.bind(this),this.onChildInputChange_=this.onChildInputChange_.bind(this),this.onChildMonitorUpdate_=this.onChildMonitorUpdate_.bind(this),this.onChildValueChange_=this.onChildValueChange_.bind(this),this.onChildViewPropsChange_=this.onChildViewPropsChange_.bind(this),this.onDescendantLayout_=this.onDescendantLayout_.bind(this),this.onDescendantInputChange_=this.onDescendantInputChange_.bind(this),this.onDescendantMonitorUpdate_=this.onDescendantMonitorUpdate_.bind(this),this.emitter=new v,this.blade_=o!=null?o:null,(u=this.blade_)===null||u===void 0||u.value("positions").emitter.on("change",this.onBladePositionsChange_),this.bcSet_=new Ie(Uo),this.bcSet_.emitter.on("add",this.onSetAdd_),this.bcSet_.emitter.on("remove",this.onSetRemove_)}get children(){return this.bcSet_.items}add(o,u){o.parent&&o.parent.remove(o),o.parent_=this,this.bcSet_.add(o,u)}remove(o){o.parent_=null,this.bcSet_.remove(o)}find(o){return this.bcSet_.allItems().filter(u=>u instanceof o)}onSetAdd_(o){this.updatePositions_();const u=o.target===o.root;if(this.emitter.emit("add",{bladeController:o.item,index:o.index,isRoot:u,sender:this}),!u)return;const _=o.item;if(_.viewProps.emitter.on("change",this.onChildViewPropsChange_),_.blade.value("positions").emitter.on("change",this.onChildPositionsChange_),_.viewProps.handleDispose(this.onChildDispose_),_ instanceof re)_.binding.emitter.on("change",this.onChildInputChange_);else if(_ instanceof Ee)_.binding.emitter.on("update",this.onChildMonitorUpdate_);else if(_ instanceof ze)_.value.emitter.on("change",this.onChildValueChange_);else{const T=Ci(_);if(T){const z=T.emitter;z.on("layout",this.onDescendantLayout_),z.on("inputchange",this.onDescendantInputChange_),z.on("monitorupdate",this.onDescendantMonitorUpdate_)}}}onSetRemove_(o){this.updatePositions_();const u=o.target===o.root;if(this.emitter.emit("remove",{bladeController:o.item,isRoot:u,sender:this}),!u)return;const _=o.item;if(_ instanceof re)_.binding.emitter.off("change",this.onChildInputChange_);else if(_ instanceof Ee)_.binding.emitter.off("update",this.onChildMonitorUpdate_);else if(_ instanceof ze)_.value.emitter.off("change",this.onChildValueChange_);else{const T=Ci(_);if(T){const z=T.emitter;z.off("layout",this.onDescendantLayout_),z.off("inputchange",this.onDescendantInputChange_),z.off("monitorupdate",this.onDescendantMonitorUpdate_)}}}updatePositions_(){const o=this.bcSet_.items.filter(T=>!T.viewProps.get("hidden")),u=o[0],_=o[o.length-1];this.bcSet_.items.forEach(T=>{const z=[];T===u&&(z.push("first"),(!this.blade_||this.blade_.get("positions").includes("veryfirst"))&&z.push("veryfirst")),T===_&&(z.push("last"),(!this.blade_||this.blade_.get("positions").includes("verylast"))&&z.push("verylast")),T.blade.set("positions",z)})}onChildPositionsChange_(){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildViewPropsChange_(o){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildDispose_(){this.bcSet_.items.filter(u=>u.viewProps.get("disposed")).forEach(u=>{this.bcSet_.remove(u)})}onChildInputChange_(o){const u=sn(this.find(re),o.sender);if(!u)throw b.shouldNeverHappen();this.emitter.emit("inputchange",{bladeController:u,options:o.options,sender:this})}onChildMonitorUpdate_(o){const u=No(this.find(Ee),o.sender);if(!u)throw b.shouldNeverHappen();this.emitter.emit("monitorupdate",{bladeController:u,sender:this})}onChildValueChange_(o){const u=pl(this.find(ze),o.sender);if(!u)throw b.shouldNeverHappen();this.emitter.emit("inputchange",{bladeController:u,options:o.options,sender:this})}onDescendantLayout_(o){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onDescendantInputChange_(o){this.emitter.emit("inputchange",{bladeController:o.bladeController,options:o.options,sender:this})}onDescendantMonitorUpdate_(o){this.emitter.emit("monitorupdate",{bladeController:o.bladeController,sender:this})}onBladePositionsChange_(){this.updatePositions_()}}class Pi extends ye{constructor(o,u){super(Object.assign(Object.assign({},u),{view:new Nt(o,{viewName:"brk",viewProps:u.viewProps})})),this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this);const _=new As(u.root?void 0:u.blade);_.emitter.on("add",this.onRackAdd_),_.emitter.on("remove",this.onRackRemove_),this.rack=_,this.viewProps.handleDispose(()=>{for(let T=this.rack.children.length-1;T>=0;T--)this.rack.children[T].viewProps.set("disposed",!0)})}onRackAdd_(o){!o.isRoot||F(this.view.element,o.bladeController.view.element,o.index)}onRackRemove_(o){!o.isRoot||L(o.bladeController.view.element)}}const Or=y("cnt");class fl{constructor(o,u){var _;this.className_=y((_=u.viewName)!==null&&_!==void 0?_:"fld"),this.element=o.createElement("div"),this.element.classList.add(this.className_(),Or()),u.viewProps.bindClassModifiers(this.element),this.foldable_=u.foldable,this.foldable_.bindExpandedClass(this.element,this.className_(void 0,"expanded")),A(this.foldable_,"completed",B(this.element,this.className_(void 0,"cpl")));const T=o.createElement("button");T.classList.add(this.className_("b")),A(u.props,"title",Ne=>{f(Ne)?this.element.classList.add(this.className_(void 0,"not")):this.element.classList.remove(this.className_(void 0,"not"))}),u.viewProps.bindDisabled(T),this.element.appendChild(T),this.buttonElement=T;const z=o.createElement("div");z.classList.add(this.className_("t")),E(u.props.value("title"),z),this.buttonElement.appendChild(z),this.titleElement=z;const j=o.createElement("div");j.classList.add(this.className_("m")),this.buttonElement.appendChild(j);const ue=u.containerElement;ue.classList.add(this.className_("c")),this.element.appendChild(ue),this.containerElement=ue}}class Br extends ot{constructor(o,u){var _;const T=st.create((_=u.expanded)!==null&&_!==void 0?_:!0),z=new Pi(o,{blade:u.blade,root:u.root,viewProps:u.viewProps});super(Object.assign(Object.assign({},u),{rackController:z,view:new fl(o,{containerElement:z.view.element,foldable:T,props:u.props,viewName:u.root?"rot":void 0,viewProps:u.viewProps})})),this.onTitleClick_=this.onTitleClick_.bind(this),this.props=u.props,this.foldable=T,Le(this.foldable,this.view.containerElement),this.rackController.rack.emitter.on("add",()=>{this.foldable.cleanUpTransition()}),this.rackController.rack.emitter.on("remove",()=>{this.foldable.cleanUpTransition()}),this.view.buttonElement.addEventListener("click",this.onTitleClick_)}get document(){return this.view.element.ownerDocument}onTitleClick_(){this.foldable.set("expanded",!this.foldable.get("expanded"))}}const ml={id:"folder",type:"blade",accept(p){const o=pe,u=K(p,{title:o.required.string,view:o.required.constant("folder"),expanded:o.optional.boolean});return u?{params:u}:null},controller(p){return new Br(p.document,{blade:p.blade,expanded:p.params.expanded,props:X.fromObject({title:p.params.title}),viewProps:p.viewProps})},api(p){return p.controller instanceof Br?new Bt(p.controller,p.pool):null}};class N extends ze{constructor(o,u){const _=u.valueController.viewProps;super(Object.assign(Object.assign({},u),{value:u.valueController.value,view:new ve(o,{props:u.props,viewProps:_}),viewProps:_})),this.props=u.props,this.valueController=u.valueController,this.view.valueElement.appendChild(this.valueController.view.element)}}class Y extends i{}const ee=y("spr");class te{constructor(o,u){this.element=o.createElement("div"),this.element.classList.add(ee()),u.viewProps.bindClassModifiers(this.element);const _=o.createElement("hr");_.classList.add(ee("r")),this.element.appendChild(_)}}class Q extends ye{constructor(o,u){super(Object.assign(Object.assign({},u),{view:new te(o,{viewProps:u.viewProps})}))}}const Me={id:"separator",type:"blade",accept(p){const u=K(p,{view:pe.required.constant("separator")});return u?{params:u}:null},controller(p){return new Q(p.document,{blade:p.blade,viewProps:p.viewProps})},api(p){return p.controller instanceof Q?new Y(p.controller):null}},De=y("");function ke(p,o){return B(p,De(void 0,o))}class Fe extends X{constructor(o){super(o)}static create(o){var u,_;const T=o!=null?o:{},z={disabled:(u=T.disabled)!==null&&u!==void 0?u:!1,disposed:!1,hidden:(_=T.hidden)!==null&&_!==void 0?_:!1},j=X.createCore(z);return new Fe(j)}bindClassModifiers(o){A(this,"disabled",ke(o,"disabled")),A(this,"hidden",ke(o,"hidden"))}bindDisabled(o){A(this,"disabled",u=>{o.disabled=u})}bindTabIndex(o){A(this,"disabled",u=>{o.tabIndex=u?-1:0})}handleDispose(o){this.value("disposed").emitter.on("change",u=>{u&&o()})}}const qe=y("tbi");class Ke{constructor(o,u){this.element=o.createElement("div"),this.element.classList.add(qe()),u.viewProps.bindClassModifiers(this.element),A(u.props,"selected",z=>{z?this.element.classList.add(qe(void 0,"sel")):this.element.classList.remove(qe(void 0,"sel"))});const _=o.createElement("button");_.classList.add(qe("b")),u.viewProps.bindDisabled(_),this.element.appendChild(_),this.buttonElement=_;const T=o.createElement("div");T.classList.add(qe("t")),E(u.props.value("title"),T),this.buttonElement.appendChild(T),this.titleElement=T}}class Ze{constructor(o,u){this.emitter=new v,this.onClick_=this.onClick_.bind(this),this.props=u.props,this.viewProps=u.viewProps,this.view=new Ke(o,{props:u.props,viewProps:u.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}onClick_(){this.emitter.emit("click",{sender:this})}}class Rt{constructor(o,u){this.onItemClick_=this.onItemClick_.bind(this),this.ic_=new Ze(o,{props:u.itemProps,viewProps:Fe.create()}),this.ic_.emitter.on("click",this.onItemClick_),this.cc_=new Pi(o,{blade:oe(),viewProps:Fe.create()}),this.props=u.props,A(this.props,"selected",_=>{this.itemController.props.set("selected",_),this.contentController.viewProps.set("hidden",!_)})}get itemController(){return this.ic_}get contentController(){return this.cc_}onItemClick_(){this.props.set("selected",!0)}}class on{constructor(o,u){this.controller_=o,this.rackApi_=u}get title(){var o;return(o=this.controller_.itemController.props.get("title"))!==null&&o!==void 0?o:""}set title(o){this.controller_.itemController.props.set("title",o)}get selected(){return this.controller_.props.get("selected")}set selected(o){this.controller_.props.set("selected",o)}get children(){return this.rackApi_.children}addButton(o){return this.rackApi_.addButton(o)}addFolder(o){return this.rackApi_.addFolder(o)}addSeparator(o){return this.rackApi_.addSeparator(o)}addTab(o){return this.rackApi_.addTab(o)}add(o,u){this.rackApi_.add(o,u)}remove(o){this.rackApi_.remove(o)}addInput(o,u,_){return this.rackApi_.addInput(o,u,_)}addMonitor(o,u,_){return this.rackApi_.addMonitor(o,u,_)}addBlade(o){return this.rackApi_.addBlade(o)}}class kt extends xe{constructor(o,u){super(o,new ct(o.rackController,u)),this.onPageAdd_=this.onPageAdd_.bind(this),this.onPageRemove_=this.onPageRemove_.bind(this),this.onSelect_=this.onSelect_.bind(this),this.emitter_=new v,this.pageApiMap_=new Map,this.rackApi_.on("change",_=>{this.emitter_.emit("change",{event:_})}),this.rackApi_.on("update",_=>{this.emitter_.emit("update",{event:_})}),this.controller_.tab.selectedIndex.emitter.on("change",this.onSelect_),this.controller_.pageSet.emitter.on("add",this.onPageAdd_),this.controller_.pageSet.emitter.on("remove",this.onPageRemove_),this.controller_.pageSet.items.forEach(_=>{this.setUpPageApi_(_)})}get pages(){return this.controller_.pageSet.items.map(o=>{const u=this.pageApiMap_.get(o);if(!u)throw b.shouldNeverHappen();return u})}addPage(o){const u=this.controller_.view.element.ownerDocument,_=new Rt(u,{itemProps:X.fromObject({selected:!1,title:o.title}),props:X.fromObject({selected:!1})});this.controller_.add(_,o.index);const T=this.pageApiMap_.get(_);if(!T)throw b.shouldNeverHappen();return T}removePage(o){this.controller_.remove(o)}on(o,u){const _=u.bind(this);return this.emitter_.on(o,T=>{_(T.event)}),this}setUpPageApi_(o){const u=this.rackApi_.apiSet_.find(T=>T.controller_===o.contentController);if(!u)throw b.shouldNeverHappen();const _=new on(o,u);this.pageApiMap_.set(o,_)}onPageAdd_(o){this.setUpPageApi_(o.item)}onPageRemove_(o){if(!this.pageApiMap_.get(o.item))throw b.shouldNeverHappen();this.pageApiMap_.delete(o.item)}onSelect_(o){this.emitter_.emit("select",{event:new h(this,o.rawValue)})}}const Rn=-1;class Mt{constructor(){this.onItemSelectedChange_=this.onItemSelectedChange_.bind(this),this.empty=H(!0),this.selectedIndex=H(Rn),this.items_=[]}add(o,u){const _=u!=null?u:this.items_.length;this.items_.splice(_,0,o),o.emitter.on("change",this.onItemSelectedChange_),this.keepSelection_()}remove(o){const u=this.items_.indexOf(o);u<0||(this.items_.splice(u,1),o.emitter.off("change",this.onItemSelectedChange_),this.keepSelection_())}keepSelection_(){if(this.items_.length===0){this.selectedIndex.rawValue=Rn,this.empty.rawValue=!0;return}const o=this.items_.findIndex(u=>u.rawValue);o<0?(this.items_.forEach((u,_)=>{u.rawValue=_===0}),this.selectedIndex.rawValue=0):(this.items_.forEach((u,_)=>{u.rawValue=_===o}),this.selectedIndex.rawValue=o),this.empty.rawValue=!1}onItemSelectedChange_(o){if(o.rawValue){const u=this.items_.findIndex(_=>_===o.sender);this.items_.forEach((_,T)=>{_.rawValue=T===u}),this.selectedIndex.rawValue=u}else this.keepSelection_()}}const Qe=y("tab");class kr{constructor(o,u){this.element=o.createElement("div"),this.element.classList.add(Qe(),Or()),u.viewProps.bindClassModifiers(this.element),P(u.empty,B(this.element,Qe(void 0,"nop")));const _=o.createElement("div");_.classList.add(Qe("i")),this.element.appendChild(_),this.itemsElement=_;const T=u.contentsElement;T.classList.add(Qe("c")),this.element.appendChild(T),this.contentsElement=T}}class Et extends ot{constructor(o,u){const _=new Pi(o,{blade:u.blade,viewProps:u.viewProps}),T=new Mt;super({blade:u.blade,rackController:_,view:new kr(o,{contentsElement:_.view.element,empty:T.empty,viewProps:u.viewProps})}),this.onPageAdd_=this.onPageAdd_.bind(this),this.onPageRemove_=this.onPageRemove_.bind(this),this.pageSet_=new Ie(()=>null),this.pageSet_.emitter.on("add",this.onPageAdd_),this.pageSet_.emitter.on("remove",this.onPageRemove_),this.tab=T}get pageSet(){return this.pageSet_}add(o,u){this.pageSet_.add(o,u)}remove(o){this.pageSet_.remove(this.pageSet_.items[o])}onPageAdd_(o){const u=o.item;F(this.view.itemsElement,u.itemController.view.element,o.index),this.rackController.rack.add(u.contentController,o.index),this.tab.add(u.props.value("selected"))}onPageRemove_(o){const u=o.item;L(u.itemController.view.element),this.rackController.rack.remove(u.contentController),this.tab.remove(u.props.value("selected"))}}const Zn={id:"tab",type:"blade",accept(p){const o=pe,u=K(p,{pages:o.required.array(o.required.object({title:o.required.string})),view:o.required.constant("tab")});return!u||u.pages.length===0?null:{params:u}},controller(p){const o=new Et(p.document,{blade:p.blade,viewProps:p.viewProps});return p.params.pages.forEach(u=>{const _=new Rt(p.document,{itemProps:X.fromObject({selected:!1,title:u.title}),props:X.fromObject({selected:!1})});o.add(_)}),o},api(p){return p.controller instanceof Et?new kt(p.controller,p.pool):null}};function Fo(p,o){const u=p.accept(o.params);if(!u)return null;const _=pe.optional.boolean(o.params.disabled).value,T=pe.optional.boolean(o.params.hidden).value;return p.controller({blade:oe(),document:o.document,params:Object.assign(Object.assign({},u.params),{disabled:_,hidden:T}),viewProps:Fe.create({disabled:_,hidden:T})})}class es{constructor(){this.disabled=!1,this.emitter=new v}dispose(){}tick(){this.disabled||this.emitter.emit("tick",{sender:this})}}class Vr{constructor(o,u){this.disabled_=!1,this.timerId_=null,this.onTick_=this.onTick_.bind(this),this.doc_=o,this.emitter=new v,this.interval_=u,this.setTimer_()}get disabled(){return this.disabled_}set disabled(o){this.disabled_=o,this.disabled_?this.clearTimer_():this.setTimer_()}dispose(){this.clearTimer_()}clearTimer_(){if(this.timerId_===null)return;const o=this.doc_.defaultView;o&&o.clearInterval(this.timerId_),this.timerId_=null}setTimer_(){if(this.clearTimer_(),this.interval_<=0)return;const o=this.doc_.defaultView;o&&(this.timerId_=o.setInterval(this.onTick_,this.interval_))}onTick_(){this.disabled_||this.emitter.emit("tick",{sender:this})}}class Ot{constructor(o){this.constraints=o}constrain(o){return this.constraints.reduce((u,_)=>_.constrain(u),o)}}function Qt(p,o){if(p instanceof o)return p;if(p instanceof Ot){const u=p.constraints.reduce((_,T)=>_||(T instanceof o?T:null),null);if(u)return u}return null}class ci{constructor(o){this.options=o}constrain(o){const u=this.options;return u.length===0||u.filter(T=>T.value===o).length>0?o:u[0].value}}class qt{constructor(o){this.maxValue=o.max,this.minValue=o.min}constrain(o){let u=o;return f(this.minValue)||(u=Math.max(u,this.minValue)),f(this.maxValue)||(u=Math.min(u,this.maxValue)),u}}class Ri{constructor(o,u=0){this.step=o,this.origin=u}constrain(o){const u=this.origin%this.step,_=Math.round((o-u)/this.step);return u+_*this.step}}const zr=y("lst");class Oo{constructor(o,u){this.onValueChange_=this.onValueChange_.bind(this),this.props_=u.props,this.element=o.createElement("div"),this.element.classList.add(zr()),u.viewProps.bindClassModifiers(this.element);const _=o.createElement("select");_.classList.add(zr("s")),A(this.props_,"options",z=>{Z(_),z.forEach((j,ue)=>{const Ne=o.createElement("option");Ne.dataset.index=String(ue),Ne.textContent=j.text,Ne.value=String(j.value),_.appendChild(Ne)})}),u.viewProps.bindDisabled(_),this.element.appendChild(_),this.selectElement=_;const T=o.createElement("div");T.classList.add(zr("m")),T.appendChild(je(o,"dropdown")),this.element.appendChild(T),u.value.emitter.on("change",this.onValueChange_),this.value_=u.value,this.update_()}update_(){this.selectElement.value=String(this.value_.rawValue)}onValueChange_(){this.update_()}}class Hr{constructor(o,u){this.onSelectChange_=this.onSelectChange_.bind(this),this.props=u.props,this.value=u.value,this.viewProps=u.viewProps,this.view=new Oo(o,{props:this.props,value:this.value,viewProps:this.viewProps}),this.view.selectElement.addEventListener("change",this.onSelectChange_)}onSelectChange_(o){const _=o.currentTarget.selectedOptions.item(0);if(!_)return;const T=Number(_.dataset.index);this.value.rawValue=this.props.get("options")[T].value}}const Ku=y("pop");class ig{constructor(o,u){this.element=o.createElement("div"),this.element.classList.add(Ku()),u.viewProps.bindClassModifiers(this.element),P(u.shows,B(this.element,Ku(void 0,"v")))}}class $u{constructor(o,u){this.shows=H(!1),this.viewProps=u.viewProps,this.view=new ig(o,{shows:this.shows,viewProps:this.viewProps})}}const Zu=y("txt");class sg{constructor(o,u){this.onChange_=this.onChange_.bind(this),this.element=o.createElement("div"),this.element.classList.add(Zu()),u.viewProps.bindClassModifiers(this.element),this.props_=u.props,this.props_.emitter.on("change",this.onChange_);const _=o.createElement("input");_.classList.add(Zu("i")),_.type="text",u.viewProps.bindDisabled(_),this.element.appendChild(_),this.inputElement=_,u.value.emitter.on("change",this.onChange_),this.value_=u.value,this.refresh()}refresh(){const o=this.props_.get("formatter");this.inputElement.value=o(this.value_.rawValue)}onChange_(){this.refresh()}}class Bo{constructor(o,u){this.onInputChange_=this.onInputChange_.bind(this),this.parser_=u.parser,this.props=u.props,this.value=u.value,this.viewProps=u.viewProps,this.view=new sg(o,{props:u.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_)}onInputChange_(o){const _=o.currentTarget.value,T=this.parser_(_);f(T)||(this.value.rawValue=T),this.view.refresh()}}function rg(p){return String(p)}function Qu(p){return p==="false"?!1:!!p}function Ju(p){return rg(p)}class og{constructor(o){this.text=o}evaluate(){return Number(this.text)}toString(){return this.text}}const ag={"**":(p,o)=>Math.pow(p,o),"*":(p,o)=>p*o,"/":(p,o)=>p/o,"%":(p,o)=>p%o,"+":(p,o)=>p+o,"-":(p,o)=>p-o,"<<":(p,o)=>p<<o,">>":(p,o)=>p>>o,">>>":(p,o)=>p>>>o,"&":(p,o)=>p&o,"^":(p,o)=>p^o,"|":(p,o)=>p|o};class lg{constructor(o,u,_){this.left=u,this.operator=o,this.right=_}evaluate(){const o=ag[this.operator];if(!o)throw new Error(`unexpected binary operator: '${this.operator}`);return o(this.left.evaluate(),this.right.evaluate())}toString(){return["b(",this.left.toString(),this.operator,this.right.toString(),")"].join(" ")}}const cg={"+":p=>p,"-":p=>-p,"~":p=>~p};class ug{constructor(o,u){this.operator=o,this.expression=u}evaluate(){const o=cg[this.operator];if(!o)throw new Error(`unexpected unary operator: '${this.operator}`);return o(this.expression.evaluate())}toString(){return["u(",this.operator,this.expression.toString(),")"].join(" ")}}function gl(p){return(o,u)=>{for(let _=0;_<p.length;_++){const T=p[_](o,u);if(T!=="")return T}return""}}function Gr(p,o){var u;const _=p.substr(o).match(/^\s+/);return(u=_&&_[0])!==null&&u!==void 0?u:""}function hg(p,o){const u=p.substr(o,1);return u.match(/^[1-9]$/)?u:""}function Wr(p,o){var u;const _=p.substr(o).match(/^[0-9]+/);return(u=_&&_[0])!==null&&u!==void 0?u:""}function dg(p,o){const u=Wr(p,o);if(u!=="")return u;const _=p.substr(o,1);if(o+=1,_!=="-"&&_!=="+")return"";const T=Wr(p,o);return T===""?"":_+T}function vl(p,o){const u=p.substr(o,1);if(o+=1,u.toLowerCase()!=="e")return"";const _=dg(p,o);return _===""?"":u+_}function eh(p,o){const u=p.substr(o,1);if(u==="0")return u;const _=hg(p,o);return o+=_.length,_===""?"":_+Wr(p,o)}function pg(p,o){const u=eh(p,o);if(o+=u.length,u==="")return"";const _=p.substr(o,1);if(o+=_.length,_!==".")return"";const T=Wr(p,o);return o+=T.length,u+_+T+vl(p,o)}function fg(p,o){const u=p.substr(o,1);if(o+=u.length,u!==".")return"";const _=Wr(p,o);return o+=_.length,_===""?"":u+_+vl(p,o)}function mg(p,o){const u=eh(p,o);return o+=u.length,u===""?"":u+vl(p,o)}const gg=gl([pg,fg,mg]);function vg(p,o){var u;const _=p.substr(o).match(/^[01]+/);return(u=_&&_[0])!==null&&u!==void 0?u:""}function _g(p,o){const u=p.substr(o,2);if(o+=u.length,u.toLowerCase()!=="0b")return"";const _=vg(p,o);return _===""?"":u+_}function xg(p,o){var u;const _=p.substr(o).match(/^[0-7]+/);return(u=_&&_[0])!==null&&u!==void 0?u:""}function bg(p,o){const u=p.substr(o,2);if(o+=u.length,u.toLowerCase()!=="0o")return"";const _=xg(p,o);return _===""?"":u+_}function yg(p,o){var u;const _=p.substr(o).match(/^[0-9a-f]+/i);return(u=_&&_[0])!==null&&u!==void 0?u:""}function wg(p,o){const u=p.substr(o,2);if(o+=u.length,u.toLowerCase()!=="0x")return"";const _=yg(p,o);return _===""?"":u+_}const Mg=gl([_g,bg,wg]),Eg=gl([Mg,gg]);function Sg(p,o){const u=Eg(p,o);return o+=u.length,u===""?null:{evaluable:new og(u),cursor:o}}function Tg(p,o){const u=p.substr(o,1);if(o+=u.length,u!=="(")return null;const _=nh(p,o);if(!_)return null;o=_.cursor,o+=Gr(p,o).length;const T=p.substr(o,1);return o+=T.length,T!==")"?null:{evaluable:_.evaluable,cursor:o}}function Ag(p,o){var u;return(u=Sg(p,o))!==null&&u!==void 0?u:Tg(p,o)}function th(p,o){const u=Ag(p,o);if(u)return u;const _=p.substr(o,1);if(o+=_.length,_!=="+"&&_!=="-"&&_!=="~")return null;const T=th(p,o);return T?(o=T.cursor,{cursor:o,evaluable:new ug(_,T.evaluable)}):null}function Cg(p,o,u){u+=Gr(o,u).length;const _=p.filter(T=>o.startsWith(T,u))[0];return _?(u+=_.length,u+=Gr(o,u).length,{cursor:u,operator:_}):null}function Pg(p,o){return(u,_)=>{const T=p(u,_);if(!T)return null;_=T.cursor;let z=T.evaluable;for(;;){const j=Cg(o,u,_);if(!j)break;_=j.cursor;const ue=p(u,_);if(!ue)return null;_=ue.cursor,z=new lg(j.operator,z,ue.evaluable)}return z?{cursor:_,evaluable:z}:null}}const Rg=[["**"],["*","/","%"],["+","-"],["<<",">>>",">>"],["&"],["^"],["|"]].reduce((p,o)=>Pg(p,o),th);function nh(p,o){return o+=Gr(p,o).length,Rg(p,o)}function Lg(p){const o=nh(p,0);return!o||o.cursor+Gr(p,o.cursor).length!==p.length?null:o.evaluable}function ui(p){var o;const u=Lg(p);return(o=u==null?void 0:u.evaluate())!==null&&o!==void 0?o:null}function ih(p){if(typeof p=="number")return p;if(typeof p=="string"){const o=ui(p);if(!f(o))return o}return 0}function Ig(p){return String(p)}function rn(p){return o=>o.toFixed(Math.max(Math.min(p,20),0))}const Dg=rn(0);function ko(p){return Dg(p)+"%"}function sh(p){return String(p)}function _l(p){return p}function rh(p,o){for(;p.length<o;)p.push(void 0)}function Ng(p){const o=[];return rh(o,p),H(o)}function Ug(p){const o=p.indexOf(void 0);return o<0?p:p.slice(0,o)}function Fg(p,o){const u=[...Ug(p),o];return u.length>p.length?u.splice(0,u.length-p.length):rh(u,p.length),u}function Xr({primary:p,secondary:o,forward:u,backward:_}){let T=!1;function z(j){T||(T=!0,j(),T=!1)}p.emitter.on("change",j=>{z(()=>{o.setRawValue(u(p,o),j.options)})}),o.emitter.on("change",j=>{z(()=>{p.setRawValue(_(p,o),j.options)}),z(()=>{o.setRawValue(u(p,o),j.options)})}),z(()=>{o.setRawValue(u(p,o),{forceEmit:!1,last:!0})})}function yn(p,o){const u=p*(o.altKey?.1:1)*(o.shiftKey?10:1);return o.upKey?+u:o.downKey?-u:0}function jr(p){return{altKey:p.altKey,downKey:p.key==="ArrowDown",shiftKey:p.shiftKey,upKey:p.key==="ArrowUp"}}function hi(p){return{altKey:p.altKey,downKey:p.key==="ArrowLeft",shiftKey:p.shiftKey,upKey:p.key==="ArrowRight"}}function Og(p){return p==="ArrowUp"||p==="ArrowDown"}function oh(p){return Og(p)||p==="ArrowLeft"||p==="ArrowRight"}function xl(p,o){var u,_;const T=o.ownerDocument.defaultView,z=o.getBoundingClientRect();return{x:p.pageX-(((u=T&&T.scrollX)!==null&&u!==void 0?u:0)+z.left),y:p.pageY-(((_=T&&T.scrollY)!==null&&_!==void 0?_:0)+z.top)}}class ts{constructor(o){this.lastTouch_=null,this.onDocumentMouseMove_=this.onDocumentMouseMove_.bind(this),this.onDocumentMouseUp_=this.onDocumentMouseUp_.bind(this),this.onMouseDown_=this.onMouseDown_.bind(this),this.onTouchEnd_=this.onTouchEnd_.bind(this),this.onTouchMove_=this.onTouchMove_.bind(this),this.onTouchStart_=this.onTouchStart_.bind(this),this.elem_=o,this.emitter=new v,o.addEventListener("touchstart",this.onTouchStart_,{passive:!1}),o.addEventListener("touchmove",this.onTouchMove_,{passive:!0}),o.addEventListener("touchend",this.onTouchEnd_),o.addEventListener("mousedown",this.onMouseDown_)}computePosition_(o){const u=this.elem_.getBoundingClientRect();return{bounds:{width:u.width,height:u.height},point:o?{x:o.x,y:o.y}:null}}onMouseDown_(o){var u;o.preventDefault(),(u=o.currentTarget)===null||u===void 0||u.focus();const _=this.elem_.ownerDocument;_.addEventListener("mousemove",this.onDocumentMouseMove_),_.addEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("down",{altKey:o.altKey,data:this.computePosition_(xl(o,this.elem_)),sender:this,shiftKey:o.shiftKey})}onDocumentMouseMove_(o){this.emitter.emit("move",{altKey:o.altKey,data:this.computePosition_(xl(o,this.elem_)),sender:this,shiftKey:o.shiftKey})}onDocumentMouseUp_(o){const u=this.elem_.ownerDocument;u.removeEventListener("mousemove",this.onDocumentMouseMove_),u.removeEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("up",{altKey:o.altKey,data:this.computePosition_(xl(o,this.elem_)),sender:this,shiftKey:o.shiftKey})}onTouchStart_(o){o.preventDefault();const u=o.targetTouches.item(0),_=this.elem_.getBoundingClientRect();this.emitter.emit("down",{altKey:o.altKey,data:this.computePosition_(u?{x:u.clientX-_.left,y:u.clientY-_.top}:void 0),sender:this,shiftKey:o.shiftKey}),this.lastTouch_=u}onTouchMove_(o){const u=o.targetTouches.item(0),_=this.elem_.getBoundingClientRect();this.emitter.emit("move",{altKey:o.altKey,data:this.computePosition_(u?{x:u.clientX-_.left,y:u.clientY-_.top}:void 0),sender:this,shiftKey:o.shiftKey}),this.lastTouch_=u}onTouchEnd_(o){var u;const _=(u=o.targetTouches.item(0))!==null&&u!==void 0?u:this.lastTouch_,T=this.elem_.getBoundingClientRect();this.emitter.emit("up",{altKey:o.altKey,data:this.computePosition_(_?{x:_.clientX-T.left,y:_.clientY-T.top}:void 0),sender:this,shiftKey:o.shiftKey})}}function Lt(p,o,u,_,T){const z=(p-o)/(u-o);return _+z*(T-_)}function ah(p){return String(p.toFixed(10)).split(".")[1].replace(/0+$/,"").length}function Yt(p,o,u){return Math.min(Math.max(p,o),u)}function lh(p,o){return(p%o+o)%o}const Ln=y("txt");class Bg{constructor(o,u){this.onChange_=this.onChange_.bind(this),this.props_=u.props,this.props_.emitter.on("change",this.onChange_),this.element=o.createElement("div"),this.element.classList.add(Ln(),Ln(void 0,"num")),u.arrayPosition&&this.element.classList.add(Ln(void 0,u.arrayPosition)),u.viewProps.bindClassModifiers(this.element);const _=o.createElement("input");_.classList.add(Ln("i")),_.type="text",u.viewProps.bindDisabled(_),this.element.appendChild(_),this.inputElement=_,this.onDraggingChange_=this.onDraggingChange_.bind(this),this.dragging_=u.dragging,this.dragging_.emitter.on("change",this.onDraggingChange_),this.element.classList.add(Ln()),this.inputElement.classList.add(Ln("i"));const T=o.createElement("div");T.classList.add(Ln("k")),this.element.appendChild(T),this.knobElement=T;const z=o.createElementNS(Ge,"svg");z.classList.add(Ln("g")),this.knobElement.appendChild(z);const j=o.createElementNS(Ge,"path");j.classList.add(Ln("gb")),z.appendChild(j),this.guideBodyElem_=j;const ue=o.createElementNS(Ge,"path");ue.classList.add(Ln("gh")),z.appendChild(ue),this.guideHeadElem_=ue;const Ne=o.createElement("div");Ne.classList.add(y("tt")()),this.knobElement.appendChild(Ne),this.tooltipElem_=Ne,u.value.emitter.on("change",this.onChange_),this.value=u.value,this.refresh()}onDraggingChange_(o){if(o.rawValue===null){this.element.classList.remove(Ln(void 0,"drg"));return}this.element.classList.add(Ln(void 0,"drg"));const u=o.rawValue/this.props_.get("draggingScale"),_=u+(u>0?-1:u<0?1:0),T=Yt(-_,-4,4);this.guideHeadElem_.setAttributeNS(null,"d",[`M ${_+T},0 L${_},4 L${_+T},8`,`M ${u},-1 L${u},9`].join(" ")),this.guideBodyElem_.setAttributeNS(null,"d",`M 0,4 L${u},4`);const z=this.props_.get("formatter");this.tooltipElem_.textContent=z(this.value.rawValue),this.tooltipElem_.style.left=`${u}px`}refresh(){const o=this.props_.get("formatter");this.inputElement.value=o(this.value.rawValue)}onChange_(){this.refresh()}}class qr{constructor(o,u){var _;this.originRawValue_=0,this.onInputChange_=this.onInputChange_.bind(this),this.onInputKeyDown_=this.onInputKeyDown_.bind(this),this.onInputKeyUp_=this.onInputKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.baseStep_=u.baseStep,this.parser_=u.parser,this.props=u.props,this.sliderProps_=(_=u.sliderProps)!==null&&_!==void 0?_:null,this.value=u.value,this.viewProps=u.viewProps,this.dragging_=H(null),this.view=new Bg(o,{arrayPosition:u.arrayPosition,dragging:this.dragging_,props:this.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_),this.view.inputElement.addEventListener("keydown",this.onInputKeyDown_),this.view.inputElement.addEventListener("keyup",this.onInputKeyUp_);const T=new ts(this.view.knobElement);T.emitter.on("down",this.onPointerDown_),T.emitter.on("move",this.onPointerMove_),T.emitter.on("up",this.onPointerUp_)}constrainValue_(o){var u,_;const T=(u=this.sliderProps_)===null||u===void 0?void 0:u.get("minValue"),z=(_=this.sliderProps_)===null||_===void 0?void 0:_.get("maxValue");let j=o;return T!==void 0&&(j=Math.max(j,T)),z!==void 0&&(j=Math.min(j,z)),j}onInputChange_(o){const _=o.currentTarget.value,T=this.parser_(_);f(T)||(this.value.rawValue=this.constrainValue_(T)),this.view.refresh()}onInputKeyDown_(o){const u=yn(this.baseStep_,jr(o));u!==0&&this.value.setRawValue(this.constrainValue_(this.value.rawValue+u),{forceEmit:!1,last:!1})}onInputKeyUp_(o){yn(this.baseStep_,jr(o))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}onPointerDown_(){this.originRawValue_=this.value.rawValue,this.dragging_.rawValue=0}computeDraggingValue_(o){if(!o.point)return null;const u=o.point.x-o.bounds.width/2;return this.constrainValue_(this.originRawValue_+u*this.props.get("draggingScale"))}onPointerMove_(o){const u=this.computeDraggingValue_(o.data);u!==null&&(this.value.setRawValue(u,{forceEmit:!1,last:!1}),this.dragging_.rawValue=this.value.rawValue-this.originRawValue_)}onPointerUp_(o){const u=this.computeDraggingValue_(o.data);u!==null&&(this.value.setRawValue(u,{forceEmit:!0,last:!0}),this.dragging_.rawValue=null)}}const bl=y("sld");class kg{constructor(o,u){this.onChange_=this.onChange_.bind(this),this.props_=u.props,this.props_.emitter.on("change",this.onChange_),this.element=o.createElement("div"),this.element.classList.add(bl()),u.viewProps.bindClassModifiers(this.element);const _=o.createElement("div");_.classList.add(bl("t")),u.viewProps.bindTabIndex(_),this.element.appendChild(_),this.trackElement=_;const T=o.createElement("div");T.classList.add(bl("k")),this.trackElement.appendChild(T),this.knobElement=T,u.value.emitter.on("change",this.onChange_),this.value=u.value,this.update_()}update_(){const o=Yt(Lt(this.value.rawValue,this.props_.get("minValue"),this.props_.get("maxValue"),0,100),0,100);this.knobElement.style.width=`${o}%`}onChange_(){this.update_()}}class Vg{constructor(o,u){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDownOrMove_=this.onPointerDownOrMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.baseStep_=u.baseStep,this.value=u.value,this.viewProps=u.viewProps,this.props=u.props,this.view=new kg(o,{props:this.props,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new ts(this.view.trackElement),this.ptHandler_.emitter.on("down",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("move",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.trackElement.addEventListener("keydown",this.onKeyDown_),this.view.trackElement.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(o,u){!o.point||this.value.setRawValue(Lt(Yt(o.point.x,0,o.bounds.width),0,o.bounds.width,this.props.get("minValue"),this.props.get("maxValue")),u)}onPointerDownOrMove_(o){this.handlePointerEvent_(o.data,{forceEmit:!1,last:!1})}onPointerUp_(o){this.handlePointerEvent_(o.data,{forceEmit:!0,last:!0})}onKeyDown_(o){const u=yn(this.baseStep_,hi(o));u!==0&&this.value.setRawValue(this.value.rawValue+u,{forceEmit:!1,last:!1})}onKeyUp_(o){yn(this.baseStep_,hi(o))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const yl=y("sldtxt");class zg{constructor(o,u){this.element=o.createElement("div"),this.element.classList.add(yl());const _=o.createElement("div");_.classList.add(yl("s")),this.sliderView_=u.sliderView,_.appendChild(this.sliderView_.element),this.element.appendChild(_);const T=o.createElement("div");T.classList.add(yl("t")),this.textView_=u.textView,T.appendChild(this.textView_.element),this.element.appendChild(T)}}class wl{constructor(o,u){this.value=u.value,this.viewProps=u.viewProps,this.sliderC_=new Vg(o,{baseStep:u.baseStep,props:u.sliderProps,value:u.value,viewProps:this.viewProps}),this.textC_=new qr(o,{baseStep:u.baseStep,parser:u.parser,props:u.textProps,sliderProps:u.sliderProps,value:u.value,viewProps:u.viewProps}),this.view=new zg(o,{sliderView:this.sliderC_.view,textView:this.textC_.view})}get sliderController(){return this.sliderC_}get textController(){return this.textC_}}function Yr(p,o){p.write(o)}function Vo(p){const o=pe;if(Array.isArray(p))return o.required.array(o.required.object({text:o.required.string,value:o.required.raw}))(p).value;if(typeof p=="object")return o.required.raw(p).value}function ch(p){if(p==="inline"||p==="popup")return p}function Li(p){const o=pe;return o.required.object({max:o.optional.number,min:o.optional.number,step:o.optional.number})(p).value}function uh(p){if(Array.isArray(p))return p;const o=[];return Object.keys(p).forEach(u=>{o.push({text:u,value:p[u]})}),o}function Ml(p){return f(p)?null:new ci(uh(p))}function El(p){const o=p?Qt(p,ci):null;return o?o.options:null}function Hg(p){const o=p?Qt(p,Ri):null;return o?o.step:null}function zo(p,o){const u=p&&Qt(p,Ri);return u?ah(u.step):Math.max(ah(o),2)}function Cs(p){const o=Hg(p);return o!=null?o:1}function Ps(p,o){var u;const _=p&&Qt(p,Ri),T=Math.abs((u=_==null?void 0:_.step)!==null&&u!==void 0?u:o);return T===0?.1:Math.pow(10,Math.floor(Math.log10(T))-1)}const Ho=y("ckb");class Gg{constructor(o,u){this.onValueChange_=this.onValueChange_.bind(this),this.element=o.createElement("div"),this.element.classList.add(Ho()),u.viewProps.bindClassModifiers(this.element);const _=o.createElement("label");_.classList.add(Ho("l")),this.element.appendChild(_);const T=o.createElement("input");T.classList.add(Ho("i")),T.type="checkbox",_.appendChild(T),this.inputElement=T,u.viewProps.bindDisabled(this.inputElement);const z=o.createElement("div");z.classList.add(Ho("w")),_.appendChild(z);const j=je(o,"check");z.appendChild(j),u.value.emitter.on("change",this.onValueChange_),this.value=u.value,this.update_()}update_(){this.inputElement.checked=this.value.rawValue}onValueChange_(){this.update_()}}class Wg{constructor(o,u){this.onInputChange_=this.onInputChange_.bind(this),this.value=u.value,this.viewProps=u.viewProps,this.view=new Gg(o,{value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_)}onInputChange_(o){const u=o.currentTarget;this.value.rawValue=u.checked}}function Xg(p){const o=[],u=Ml(p.options);return u&&o.push(u),new Ot(o)}const jg={id:"input-bool",type:"input",accept:(p,o)=>{if(typeof p!="boolean")return null;const _=K(o,{options:pe.optional.custom(Vo)});return _?{initialValue:p,params:_}:null},binding:{reader:p=>Qu,constraint:p=>Xg(p.params),writer:p=>Yr},controller:p=>{var o;const u=p.document,_=p.value,T=p.constraint;return T&&Qt(T,ci)?new Hr(u,{props:X.fromObject({options:(o=El(T))!==null&&o!==void 0?o:[]}),value:_,viewProps:p.viewProps}):new Wg(u,{value:_,viewProps:p.viewProps})}},ns=y("col");class qg{constructor(o,u){this.element=o.createElement("div"),this.element.classList.add(ns()),u.foldable.bindExpandedClass(this.element,ns(void 0,"expanded")),A(u.foldable,"completed",B(this.element,ns(void 0,"cpl")));const _=o.createElement("div");_.classList.add(ns("h")),this.element.appendChild(_);const T=o.createElement("div");T.classList.add(ns("s")),_.appendChild(T),this.swatchElement=T;const z=o.createElement("div");if(z.classList.add(ns("t")),_.appendChild(z),this.textElement=z,u.pickerLayout==="inline"){const j=o.createElement("div");j.classList.add(ns("p")),this.element.appendChild(j),this.pickerElement=j}else this.pickerElement=null}}function Yg(p,o,u){const _=Yt(p/255,0,1),T=Yt(o/255,0,1),z=Yt(u/255,0,1),j=Math.max(_,T,z),ue=Math.min(_,T,z),Ne=j-ue;let Ye=0,ut=0;const ht=(ue+j)/2;return Ne!==0&&(ut=Ne/(1-Math.abs(j+ue-1)),_===j?Ye=(T-z)/Ne:T===j?Ye=2+(z-_)/Ne:Ye=4+(_-T)/Ne,Ye=Ye/6+(Ye<0?1:0)),[Ye*360,ut*100,ht*100]}function Kg(p,o,u){const _=(p%360+360)%360,T=Yt(o/100,0,1),z=Yt(u/100,0,1),j=(1-Math.abs(2*z-1))*T,ue=j*(1-Math.abs(_/60%2-1)),Ne=z-j/2;let Ye,ut,ht;return _>=0&&_<60?[Ye,ut,ht]=[j,ue,0]:_>=60&&_<120?[Ye,ut,ht]=[ue,j,0]:_>=120&&_<180?[Ye,ut,ht]=[0,j,ue]:_>=180&&_<240?[Ye,ut,ht]=[0,ue,j]:_>=240&&_<300?[Ye,ut,ht]=[ue,0,j]:[Ye,ut,ht]=[j,0,ue],[(Ye+Ne)*255,(ut+Ne)*255,(ht+Ne)*255]}function $g(p,o,u){const _=Yt(p/255,0,1),T=Yt(o/255,0,1),z=Yt(u/255,0,1),j=Math.max(_,T,z),ue=Math.min(_,T,z),Ne=j-ue;let Ye;Ne===0?Ye=0:j===_?Ye=60*(((T-z)/Ne%6+6)%6):j===T?Ye=60*((z-_)/Ne+2):Ye=60*((_-T)/Ne+4);const ut=j===0?0:Ne/j,ht=j;return[Ye,ut*100,ht*100]}function hh(p,o,u){const _=lh(p,360),T=Yt(o/100,0,1),z=Yt(u/100,0,1),j=z*T,ue=j*(1-Math.abs(_/60%2-1)),Ne=z-j;let Ye,ut,ht;return _>=0&&_<60?[Ye,ut,ht]=[j,ue,0]:_>=60&&_<120?[Ye,ut,ht]=[ue,j,0]:_>=120&&_<180?[Ye,ut,ht]=[0,j,ue]:_>=180&&_<240?[Ye,ut,ht]=[0,ue,j]:_>=240&&_<300?[Ye,ut,ht]=[ue,0,j]:[Ye,ut,ht]=[j,0,ue],[(Ye+Ne)*255,(ut+Ne)*255,(ht+Ne)*255]}function Zg(p,o,u){const _=u+o*(100-Math.abs(2*u-100))/200;return[p,_!==0?o*(100-Math.abs(2*u-100))/_:0,u+o*(100-Math.abs(2*u-100))/(2*100)]}function Qg(p,o,u){const _=100-Math.abs(u*(200-o)/100-100);return[p,_!==0?o*u/_:0,u*(200-o)/(2*100)]}function is(p){return[p[0],p[1],p[2]]}function dh(p,o){return[p[0],p[1],p[2],o]}const Jg={hsl:{hsl:(p,o,u)=>[p,o,u],hsv:Zg,rgb:Kg},hsv:{hsl:Qg,hsv:(p,o,u)=>[p,o,u],rgb:hh},rgb:{hsl:Yg,hsv:$g,rgb:(p,o,u)=>[p,o,u]}};function Go(p,o){return[o==="float"?1:p==="rgb"?255:360,o==="float"?1:p==="rgb"?255:100,o==="float"?1:p==="rgb"?255:100]}function e0(p,o,u){var _;const T=Go(o,u);return[o==="rgb"?Yt(p[0],0,T[0]):lh(p[0],T[0]),Yt(p[1],0,T[1]),Yt(p[2],0,T[2]),Yt((_=p[3])!==null&&_!==void 0?_:1,0,1)]}function ph(p,o,u,_){const T=Go(o,u),z=Go(o,_);return p.map((j,ue)=>j/T[ue]*z[ue])}function t0(p,o,u){const _=ph(p,o.mode,o.type,"int"),T=Jg[o.mode][u.mode](..._);return ph(T,u.mode,"int",u.type)}function Wo(p,o){return typeof p!="object"||f(p)?!1:o in p&&typeof p[o]=="number"}class rt{constructor(o,u,_="int"){this.mode=u,this.type=_,this.comps_=e0(o,u,_)}static black(o="int"){return new rt([0,0,0],"rgb",o)}static fromObject(o,u="int"){const _="a"in o?[o.r,o.g,o.b,o.a]:[o.r,o.g,o.b];return new rt(_,"rgb",u)}static toRgbaObject(o,u="int"){return o.toRgbaObject(u)}static isRgbColorObject(o){return Wo(o,"r")&&Wo(o,"g")&&Wo(o,"b")}static isRgbaColorObject(o){return this.isRgbColorObject(o)&&Wo(o,"a")}static isColorObject(o){return this.isRgbColorObject(o)}static equals(o,u){if(o.mode!==u.mode)return!1;const _=o.comps_,T=u.comps_;for(let z=0;z<_.length;z++)if(_[z]!==T[z])return!1;return!0}getComponents(o,u="int"){return dh(t0(is(this.comps_),{mode:this.mode,type:this.type},{mode:o!=null?o:this.mode,type:u}),this.comps_[3])}toRgbaObject(o="int"){const u=this.getComponents("rgb",o);return{r:u[0],g:u[1],b:u[2],a:u[3]}}}const Ii=y("colp");class n0{constructor(o,u){this.alphaViews_=null,this.element=o.createElement("div"),this.element.classList.add(Ii());const _=o.createElement("div");_.classList.add(Ii("hsv"));const T=o.createElement("div");T.classList.add(Ii("sv")),this.svPaletteView_=u.svPaletteView,T.appendChild(this.svPaletteView_.element),_.appendChild(T);const z=o.createElement("div");z.classList.add(Ii("h")),this.hPaletteView_=u.hPaletteView,z.appendChild(this.hPaletteView_.element),_.appendChild(z),this.element.appendChild(_);const j=o.createElement("div");if(j.classList.add(Ii("rgb")),this.textView_=u.textView,j.appendChild(this.textView_.element),this.element.appendChild(j),u.alphaViews){this.alphaViews_={palette:u.alphaViews.palette,text:u.alphaViews.text};const ue=o.createElement("div");ue.classList.add(Ii("a"));const Ne=o.createElement("div");Ne.classList.add(Ii("ap")),Ne.appendChild(this.alphaViews_.palette.element),ue.appendChild(Ne);const Ye=o.createElement("div");Ye.classList.add(Ii("at")),Ye.appendChild(this.alphaViews_.text.element),ue.appendChild(Ye),this.element.appendChild(ue)}}get allFocusableElements(){const o=[this.svPaletteView_.element,this.hPaletteView_.element,this.textView_.modeSelectElement,...this.textView_.textViews.map(u=>u.inputElement)];return this.alphaViews_&&o.push(this.alphaViews_.palette.element,this.alphaViews_.text.inputElement),o}}function i0(p){return p==="int"?"int":p==="float"?"float":void 0}function Sl(p){const o=pe;return K(p,{alpha:o.optional.boolean,color:o.optional.object({alpha:o.optional.boolean,type:o.optional.custom(i0)}),expanded:o.optional.boolean,picker:o.optional.custom(ch)})}function ss(p){return p?.1:1}function rs(p){var o;return(o=p.color)===null||o===void 0?void 0:o.type}function s0(p,o){return p.alpha===o.alpha&&p.mode===o.mode&&p.notation===o.notation&&p.type===o.type}function In(p,o){const u=p.match(/^(.+)%$/);return Math.min(u?parseFloat(u[1])*.01*o:parseFloat(p),o)}const r0={deg:p=>p,grad:p=>p*360/400,rad:p=>p*360/(2*Math.PI),turn:p=>p*360};function fh(p){const o=p.match(/^([0-9.]+?)(deg|grad|rad|turn)$/);if(!o)return parseFloat(p);const u=parseFloat(o[1]),_=o[2];return r0[_](u)}function mh(p){const o=p.match(/^rgb\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!o)return null;const u=[In(o[1],255),In(o[2],255),In(o[3],255)];return isNaN(u[0])||isNaN(u[1])||isNaN(u[2])?null:u}function gh(p){return o=>{const u=mh(o);return u?new rt(u,"rgb",p):null}}function vh(p){const o=p.match(/^rgba\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!o)return null;const u=[In(o[1],255),In(o[2],255),In(o[3],255),In(o[4],1)];return isNaN(u[0])||isNaN(u[1])||isNaN(u[2])||isNaN(u[3])?null:u}function _h(p){return o=>{const u=vh(o);return u?new rt(u,"rgb",p):null}}function xh(p){const o=p.match(/^hsl\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!o)return null;const u=[fh(o[1]),In(o[2],100),In(o[3],100)];return isNaN(u[0])||isNaN(u[1])||isNaN(u[2])?null:u}function bh(p){return o=>{const u=xh(o);return u?new rt(u,"hsl",p):null}}function yh(p){const o=p.match(/^hsla\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!o)return null;const u=[fh(o[1]),In(o[2],100),In(o[3],100),In(o[4],1)];return isNaN(u[0])||isNaN(u[1])||isNaN(u[2])||isNaN(u[3])?null:u}function wh(p){return o=>{const u=yh(o);return u?new rt(u,"hsl",p):null}}function Mh(p){const o=p.match(/^#([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(o)return[parseInt(o[1]+o[1],16),parseInt(o[2]+o[2],16),parseInt(o[3]+o[3],16)];const u=p.match(/^(?:#|0x)([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return u?[parseInt(u[1],16),parseInt(u[2],16),parseInt(u[3],16)]:null}function o0(p){const o=Mh(p);return o?new rt(o,"rgb","int"):null}function Eh(p){const o=p.match(/^#?([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(o)return[parseInt(o[1]+o[1],16),parseInt(o[2]+o[2],16),parseInt(o[3]+o[3],16),Lt(parseInt(o[4]+o[4],16),0,255,0,1)];const u=p.match(/^(?:#|0x)?([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return u?[parseInt(u[1],16),parseInt(u[2],16),parseInt(u[3],16),Lt(parseInt(u[4],16),0,255,0,1)]:null}function a0(p){const o=Eh(p);return o?new rt(o,"rgb","int"):null}function Sh(p){const o=p.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!o)return null;const u=[parseFloat(o[1]),parseFloat(o[2]),parseFloat(o[3])];return isNaN(u[0])||isNaN(u[1])||isNaN(u[2])?null:u}function Th(p){return o=>{const u=Sh(o);return u?new rt(u,"rgb",p):null}}function Ah(p){const o=p.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*a\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!o)return null;const u=[parseFloat(o[1]),parseFloat(o[2]),parseFloat(o[3]),parseFloat(o[4])];return isNaN(u[0])||isNaN(u[1])||isNaN(u[2])||isNaN(u[3])?null:u}function Ch(p){return o=>{const u=Ah(o);return u?new rt(u,"rgb",p):null}}const l0=[{parser:Mh,result:{alpha:!1,mode:"rgb",notation:"hex"}},{parser:Eh,result:{alpha:!0,mode:"rgb",notation:"hex"}},{parser:mh,result:{alpha:!1,mode:"rgb",notation:"func"}},{parser:vh,result:{alpha:!0,mode:"rgb",notation:"func"}},{parser:xh,result:{alpha:!1,mode:"hsl",notation:"func"}},{parser:yh,result:{alpha:!0,mode:"hsl",notation:"func"}},{parser:Sh,result:{alpha:!1,mode:"rgb",notation:"object"}},{parser:Ah,result:{alpha:!0,mode:"rgb",notation:"object"}}];function c0(p){return l0.reduce((o,{parser:u,result:_})=>o||(u(p)?_:null),null)}function Tl(p,o="int"){const u=c0(p);return u?u.notation==="hex"&&o!=="float"?Object.assign(Object.assign({},u),{type:"int"}):u.notation==="func"?Object.assign(Object.assign({},u),{type:o}):null:null}const Ph={int:[o0,a0,gh("int"),_h("int"),bh("int"),wh("int"),Th("int"),Ch("int")],float:[gh("float"),_h("float"),bh("float"),wh("float"),Th("float"),Ch("float")]};function u0(p){const o=Ph[p];return u=>{if(typeof u!="string")return rt.black(p);const _=o.reduce((T,z)=>T||z(u),null);return _!=null?_:rt.black(p)}}function Al(p){const o=Ph[p];return u=>o.reduce((_,T)=>_||T(u),null)}function Rh(p){const o=Yt(Math.floor(p),0,255).toString(16);return o.length===1?`0${o}`:o}function Lh(p,o="#"){const u=is(p.getComponents("rgb")).map(Rh).join("");return`${o}${u}`}function Cl(p,o="#"){const u=p.getComponents("rgb"),_=[u[0],u[1],u[2],u[3]*255].map(Rh).join("");return`${o}${_}`}function Ih(p,o){const u=rn(o==="float"?2:0);return`rgb(${is(p.getComponents("rgb",o)).map(T=>u(T)).join(", ")})`}function h0(p){return o=>Ih(o,p)}function Xo(p,o){const u=rn(2),_=rn(o==="float"?2:0);return`rgba(${p.getComponents("rgb",o).map((z,j)=>(j===3?u:_)(z)).join(", ")})`}function d0(p){return o=>Xo(o,p)}function p0(p){const o=[rn(0),ko,ko];return`hsl(${is(p.getComponents("hsl")).map((_,T)=>o[T](_)).join(", ")})`}function f0(p){const o=[rn(0),ko,ko,rn(2)];return`hsla(${p.getComponents("hsl").map((_,T)=>o[T](_)).join(", ")})`}function Dh(p,o){const u=rn(o==="float"?2:0),_=["r","g","b"];return`{${is(p.getComponents("rgb",o)).map((z,j)=>`${_[j]}: ${u(z)}`).join(", ")}}`}function m0(p){return o=>Dh(o,p)}function Nh(p,o){const u=rn(2),_=rn(o==="float"?2:0),T=["r","g","b","a"];return`{${p.getComponents("rgb",o).map((j,ue)=>{const Ne=ue===3?u:_;return`${T[ue]}: ${Ne(j)}`}).join(", ")}}`}function g0(p){return o=>Nh(o,p)}const v0=[{format:{alpha:!1,mode:"rgb",notation:"hex",type:"int"},stringifier:Lh},{format:{alpha:!0,mode:"rgb",notation:"hex",type:"int"},stringifier:Cl},{format:{alpha:!1,mode:"hsl",notation:"func",type:"int"},stringifier:p0},{format:{alpha:!0,mode:"hsl",notation:"func",type:"int"},stringifier:f0},...["int","float"].reduce((p,o)=>[...p,{format:{alpha:!1,mode:"rgb",notation:"func",type:o},stringifier:h0(o)},{format:{alpha:!0,mode:"rgb",notation:"func",type:o},stringifier:d0(o)},{format:{alpha:!1,mode:"rgb",notation:"object",type:o},stringifier:m0(o)},{format:{alpha:!0,mode:"rgb",notation:"object",type:o},stringifier:g0(o)}],[])];function Pl(p){return v0.reduce((o,u)=>o||(s0(u.format,p)?u.stringifier:null),null)}const Kr=y("apl");class _0{constructor(o,u){this.onValueChange_=this.onValueChange_.bind(this),this.value=u.value,this.value.emitter.on("change",this.onValueChange_),this.element=o.createElement("div"),this.element.classList.add(Kr()),u.viewProps.bindTabIndex(this.element);const _=o.createElement("div");_.classList.add(Kr("b")),this.element.appendChild(_);const T=o.createElement("div");T.classList.add(Kr("c")),_.appendChild(T),this.colorElem_=T;const z=o.createElement("div");z.classList.add(Kr("m")),this.element.appendChild(z),this.markerElem_=z;const j=o.createElement("div");j.classList.add(Kr("p")),this.markerElem_.appendChild(j),this.previewElem_=j,this.update_()}update_(){const o=this.value.rawValue,u=o.getComponents("rgb"),_=new rt([u[0],u[1],u[2],0],"rgb"),T=new rt([u[0],u[1],u[2],255],"rgb"),z=["to right",Xo(_),Xo(T)];this.colorElem_.style.background=`linear-gradient(${z.join(",")})`,this.previewElem_.style.backgroundColor=Xo(o);const j=Lt(u[3],0,1,0,100);this.markerElem_.style.left=`${j}%`}onValueChange_(){this.update_()}}class x0{constructor(o,u){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=u.value,this.viewProps=u.viewProps,this.view=new _0(o,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new ts(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(o,u){if(!o.point)return;const _=o.point.x/o.bounds.width,T=this.value.rawValue,[z,j,ue]=T.getComponents("hsv");this.value.setRawValue(new rt([z,j,ue,_],"hsv"),u)}onPointerDown_(o){this.handlePointerEvent_(o.data,{forceEmit:!1,last:!1})}onPointerMove_(o){this.handlePointerEvent_(o.data,{forceEmit:!1,last:!1})}onPointerUp_(o){this.handlePointerEvent_(o.data,{forceEmit:!0,last:!0})}onKeyDown_(o){const u=yn(ss(!0),hi(o));if(u===0)return;const _=this.value.rawValue,[T,z,j,ue]=_.getComponents("hsv");this.value.setRawValue(new rt([T,z,j,ue+u],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(o){yn(ss(!0),hi(o))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const Rs=y("coltxt");function b0(p){const o=p.createElement("select"),u=[{text:"RGB",value:"rgb"},{text:"HSL",value:"hsl"},{text:"HSV",value:"hsv"}];return o.appendChild(u.reduce((_,T)=>{const z=p.createElement("option");return z.textContent=T.text,z.value=T.value,_.appendChild(z),_},p.createDocumentFragment())),o}class y0{constructor(o,u){this.element=o.createElement("div"),this.element.classList.add(Rs());const _=o.createElement("div");_.classList.add(Rs("m")),this.modeElem_=b0(o),this.modeElem_.classList.add(Rs("ms")),_.appendChild(this.modeSelectElement);const T=o.createElement("div");T.classList.add(Rs("mm")),T.appendChild(je(o,"dropdown")),_.appendChild(T),this.element.appendChild(_);const z=o.createElement("div");z.classList.add(Rs("w")),this.element.appendChild(z),this.textsElem_=z,this.textViews_=u.textViews,this.applyTextViews_(),P(u.colorMode,j=>{this.modeElem_.value=j})}get modeSelectElement(){return this.modeElem_}get textViews(){return this.textViews_}set textViews(o){this.textViews_=o,this.applyTextViews_()}applyTextViews_(){Z(this.textsElem_);const o=this.element.ownerDocument;this.textViews_.forEach(u=>{const _=o.createElement("div");_.classList.add(Rs("c")),_.appendChild(u.element),this.textsElem_.appendChild(_)})}}function w0(p){return rn(p==="float"?2:0)}function M0(p,o,u){const _=Go(p,o)[u];return new qt({min:0,max:_})}function Rl(p,o,u){return new qr(p,{arrayPosition:u===0?"fst":u===3-1?"lst":"mid",baseStep:ss(!1),parser:o.parser,props:X.fromObject({draggingScale:o.colorType==="float"?.01:1,formatter:w0(o.colorType)}),value:H(0,{constraint:M0(o.colorMode,o.colorType,u)}),viewProps:o.viewProps})}class E0{constructor(o,u){this.onModeSelectChange_=this.onModeSelectChange_.bind(this),this.colorType_=u.colorType,this.parser_=u.parser,this.value=u.value,this.viewProps=u.viewProps,this.colorMode=H(this.value.rawValue.mode),this.ccs_=this.createComponentControllers_(o),this.view=new y0(o,{colorMode:this.colorMode,textViews:[this.ccs_[0].view,this.ccs_[1].view,this.ccs_[2].view]}),this.view.modeSelectElement.addEventListener("change",this.onModeSelectChange_)}createComponentControllers_(o){const u={colorMode:this.colorMode.rawValue,colorType:this.colorType_,parser:this.parser_,viewProps:this.viewProps},_=[Rl(o,u,0),Rl(o,u,1),Rl(o,u,2)];return _.forEach((T,z)=>{Xr({primary:this.value,secondary:T.value,forward:j=>j.rawValue.getComponents(this.colorMode.rawValue,this.colorType_)[z],backward:(j,ue)=>{const Ne=this.colorMode.rawValue,Ye=j.rawValue.getComponents(Ne,this.colorType_);return Ye[z]=ue.rawValue,new rt(dh(is(Ye),Ye[3]),Ne,this.colorType_)}})}),_}onModeSelectChange_(o){const u=o.currentTarget;this.colorMode.rawValue=u.value,this.ccs_=this.createComponentControllers_(this.view.element.ownerDocument),this.view.textViews=[this.ccs_[0].view,this.ccs_[1].view,this.ccs_[2].view]}}const Ll=y("hpl");class S0{constructor(o,u){this.onValueChange_=this.onValueChange_.bind(this),this.value=u.value,this.value.emitter.on("change",this.onValueChange_),this.element=o.createElement("div"),this.element.classList.add(Ll()),u.viewProps.bindTabIndex(this.element);const _=o.createElement("div");_.classList.add(Ll("c")),this.element.appendChild(_);const T=o.createElement("div");T.classList.add(Ll("m")),this.element.appendChild(T),this.markerElem_=T,this.update_()}update_(){const o=this.value.rawValue,[u]=o.getComponents("hsv");this.markerElem_.style.backgroundColor=Ih(new rt([u,100,100],"hsv"));const _=Lt(u,0,360,0,100);this.markerElem_.style.left=`${_}%`}onValueChange_(){this.update_()}}class T0{constructor(o,u){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=u.value,this.viewProps=u.viewProps,this.view=new S0(o,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new ts(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(o,u){if(!o.point)return;const _=Lt(Yt(o.point.x,0,o.bounds.width),0,o.bounds.width,0,359),T=this.value.rawValue,[,z,j,ue]=T.getComponents("hsv");this.value.setRawValue(new rt([_,z,j,ue],"hsv"),u)}onPointerDown_(o){this.handlePointerEvent_(o.data,{forceEmit:!1,last:!1})}onPointerMove_(o){this.handlePointerEvent_(o.data,{forceEmit:!1,last:!1})}onPointerUp_(o){this.handlePointerEvent_(o.data,{forceEmit:!0,last:!0})}onKeyDown_(o){const u=yn(ss(!1),hi(o));if(u===0)return;const _=this.value.rawValue,[T,z,j,ue]=_.getComponents("hsv");this.value.setRawValue(new rt([T+u,z,j,ue],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(o){yn(ss(!1),hi(o))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const Il=y("svp"),Uh=64;class A0{constructor(o,u){this.onValueChange_=this.onValueChange_.bind(this),this.value=u.value,this.value.emitter.on("change",this.onValueChange_),this.element=o.createElement("div"),this.element.classList.add(Il()),u.viewProps.bindTabIndex(this.element);const _=o.createElement("canvas");_.height=Uh,_.width=Uh,_.classList.add(Il("c")),this.element.appendChild(_),this.canvasElement=_;const T=o.createElement("div");T.classList.add(Il("m")),this.element.appendChild(T),this.markerElem_=T,this.update_()}update_(){const o=Re(this.canvasElement);if(!o)return;const _=this.value.rawValue.getComponents("hsv"),T=this.canvasElement.width,z=this.canvasElement.height,j=o.getImageData(0,0,T,z),ue=j.data;for(let ut=0;ut<z;ut++)for(let ht=0;ht<T;ht++){const pi=Lt(ht,0,T,0,100),Zr=Lt(ut,0,z,100,0),Qr=hh(_[0],pi,Zr),Ns=(ut*T+ht)*4;ue[Ns]=Qr[0],ue[Ns+1]=Qr[1],ue[Ns+2]=Qr[2],ue[Ns+3]=255}o.putImageData(j,0,0);const Ne=Lt(_[1],0,100,0,100);this.markerElem_.style.left=`${Ne}%`;const Ye=Lt(_[2],0,100,100,0);this.markerElem_.style.top=`${Ye}%`}onValueChange_(){this.update_()}}class C0{constructor(o,u){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=u.value,this.viewProps=u.viewProps,this.view=new A0(o,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new ts(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(o,u){if(!o.point)return;const _=Lt(o.point.x,0,o.bounds.width,0,100),T=Lt(o.point.y,0,o.bounds.height,100,0),[z,,,j]=this.value.rawValue.getComponents("hsv");this.value.setRawValue(new rt([z,_,T,j],"hsv"),u)}onPointerDown_(o){this.handlePointerEvent_(o.data,{forceEmit:!1,last:!1})}onPointerMove_(o){this.handlePointerEvent_(o.data,{forceEmit:!1,last:!1})}onPointerUp_(o){this.handlePointerEvent_(o.data,{forceEmit:!0,last:!0})}onKeyDown_(o){oh(o.key)&&o.preventDefault();const[u,_,T,z]=this.value.rawValue.getComponents("hsv"),j=ss(!1),ue=yn(j,hi(o)),Ne=yn(j,jr(o));ue===0&&Ne===0||this.value.setRawValue(new rt([u,_+ue,T+Ne,z],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(o){const u=ss(!1),_=yn(u,hi(o)),T=yn(u,jr(o));_===0&&T===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class P0{constructor(o,u){this.value=u.value,this.viewProps=u.viewProps,this.hPaletteC_=new T0(o,{value:this.value,viewProps:this.viewProps}),this.svPaletteC_=new C0(o,{value:this.value,viewProps:this.viewProps}),this.alphaIcs_=u.supportsAlpha?{palette:new x0(o,{value:this.value,viewProps:this.viewProps}),text:new qr(o,{parser:ui,baseStep:.1,props:X.fromObject({draggingScale:.01,formatter:rn(2)}),value:H(0,{constraint:new qt({min:0,max:1})}),viewProps:this.viewProps})}:null,this.alphaIcs_&&Xr({primary:this.value,secondary:this.alphaIcs_.text.value,forward:_=>_.rawValue.getComponents()[3],backward:(_,T)=>{const z=_.rawValue.getComponents();return z[3]=T.rawValue,new rt(z,_.rawValue.mode)}}),this.textC_=new E0(o,{colorType:u.colorType,parser:ui,value:this.value,viewProps:this.viewProps}),this.view=new n0(o,{alphaViews:this.alphaIcs_?{palette:this.alphaIcs_.palette.view,text:this.alphaIcs_.text.view}:null,hPaletteView:this.hPaletteC_.view,supportsAlpha:u.supportsAlpha,svPaletteView:this.svPaletteC_.view,textView:this.textC_.view})}get textController(){return this.textC_}}const Dl=y("colsw");class R0{constructor(o,u){this.onValueChange_=this.onValueChange_.bind(this),u.value.emitter.on("change",this.onValueChange_),this.value=u.value,this.element=o.createElement("div"),this.element.classList.add(Dl()),u.viewProps.bindClassModifiers(this.element);const _=o.createElement("div");_.classList.add(Dl("sw")),this.element.appendChild(_),this.swatchElem_=_;const T=o.createElement("button");T.classList.add(Dl("b")),u.viewProps.bindDisabled(T),this.element.appendChild(T),this.buttonElement=T,this.update_()}update_(){const o=this.value.rawValue;this.swatchElem_.style.backgroundColor=Cl(o)}onValueChange_(){this.update_()}}class L0{constructor(o,u){this.value=u.value,this.viewProps=u.viewProps,this.view=new R0(o,{value:this.value,viewProps:this.viewProps})}}class Nl{constructor(o,u){this.onButtonBlur_=this.onButtonBlur_.bind(this),this.onButtonClick_=this.onButtonClick_.bind(this),this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.value=u.value,this.viewProps=u.viewProps,this.foldable_=st.create(u.expanded),this.swatchC_=new L0(o,{value:this.value,viewProps:this.viewProps});const _=this.swatchC_.view.buttonElement;_.addEventListener("blur",this.onButtonBlur_),_.addEventListener("click",this.onButtonClick_),this.textC_=new Bo(o,{parser:u.parser,props:X.fromObject({formatter:u.formatter}),value:this.value,viewProps:this.viewProps}),this.view=new qg(o,{foldable:this.foldable_,pickerLayout:u.pickerLayout}),this.view.swatchElement.appendChild(this.swatchC_.view.element),this.view.textElement.appendChild(this.textC_.view.element),this.popC_=u.pickerLayout==="popup"?new $u(o,{viewProps:this.viewProps}):null;const T=new P0(o,{colorType:u.colorType,supportsAlpha:u.supportsAlpha,value:this.value,viewProps:this.viewProps});T.view.allFocusableElements.forEach(z=>{z.addEventListener("blur",this.onPopupChildBlur_),z.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=T,this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(T.view.element),Xr({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:z=>z.rawValue,backward:(z,j)=>j.rawValue})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),Le(this.foldable_,this.view.pickerElement))}get textController(){return this.textC_}onButtonBlur_(o){if(!this.popC_)return;const u=this.view.element,_=o.relatedTarget;(!_||!u.contains(_))&&(this.popC_.shows.rawValue=!1)}onButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(o){if(!this.popC_)return;const u=this.popC_.view.element,_=ae(o);_&&u.contains(_)||_&&_===this.swatchC_.view.buttonElement&&!Dt(u.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(o){this.popC_?o.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&o.key==="Escape"&&this.swatchC_.view.buttonElement.focus()}}function I0(p,o){return rt.isColorObject(p)?rt.fromObject(p,o):rt.black(o)}function D0(p){return is(p.getComponents("rgb")).reduce((o,u)=>o<<8|Math.floor(u)&255,0)}function N0(p){return p.getComponents("rgb").reduce((o,u,_)=>{const T=Math.floor(_===3?u*255:u)&255;return o<<8|T},0)>>>0}function U0(p){return new rt([p>>16&255,p>>8&255,p&255],"rgb")}function F0(p){return new rt([p>>24&255,p>>16&255,p>>8&255,Lt(p&255,0,255,0,1)],"rgb")}function O0(p){return typeof p!="number"?rt.black():U0(p)}function B0(p){return typeof p!="number"?rt.black():F0(p)}function k0(p){const o=Pl(p);return o?(u,_)=>{Yr(u,o(_))}:null}function V0(p){const o=p?N0:D0;return(u,_)=>{Yr(u,o(_))}}function z0(p,o,u){const _=o.toRgbaObject(u);p.writeProperty("r",_.r),p.writeProperty("g",_.g),p.writeProperty("b",_.b),p.writeProperty("a",_.a)}function H0(p,o,u){const _=o.toRgbaObject(u);p.writeProperty("r",_.r),p.writeProperty("g",_.g),p.writeProperty("b",_.b)}function G0(p,o){return(u,_)=>{p?z0(u,_,o):H0(u,_,o)}}function Ul(p){var o;return!!((p==null?void 0:p.alpha)||((o=p==null?void 0:p.color)===null||o===void 0?void 0:o.alpha))}function W0(p){return p?o=>Cl(o,"0x"):o=>Lh(o,"0x")}function X0(p){return"color"in p||"view"in p&&p.view==="color"}const j0={id:"input-color-number",type:"input",accept:(p,o)=>{if(typeof p!="number"||!X0(o))return null;const u=Sl(o);return u?{initialValue:p,params:u}:null},binding:{reader:p=>Ul(p.params)?B0:O0,equals:rt.equals,writer:p=>V0(Ul(p.params))},controller:p=>{const o=Ul(p.params),u="expanded"in p.params?p.params.expanded:void 0,_="picker"in p.params?p.params.picker:void 0;return new Nl(p.document,{colorType:"int",expanded:u!=null?u:!1,formatter:W0(o),parser:Al("int"),pickerLayout:_!=null?_:"popup",supportsAlpha:o,value:p.value,viewProps:p.viewProps})}};function q0(p){return rt.isRgbaColorObject(p)}function Y0(p){return o=>I0(o,p)}function K0(p,o){return u=>p?Nh(u,o):Dh(u,o)}const $0={id:"input-color-object",type:"input",accept:(p,o)=>{if(!rt.isColorObject(p))return null;const u=Sl(o);return u?{initialValue:p,params:u}:null},binding:{reader:p=>Y0(rs(p.params)),equals:rt.equals,writer:p=>G0(q0(p.initialValue),rs(p.params))},controller:p=>{var o;const u=rt.isRgbaColorObject(p.initialValue),_="expanded"in p.params?p.params.expanded:void 0,T="picker"in p.params?p.params.picker:void 0,z=(o=rs(p.params))!==null&&o!==void 0?o:"int";return new Nl(p.document,{colorType:z,expanded:_!=null?_:!1,formatter:K0(u,z),parser:Al(z),pickerLayout:T!=null?T:"popup",supportsAlpha:u,value:p.value,viewProps:p.viewProps})}},Z0={id:"input-color-string",type:"input",accept:(p,o)=>{if(typeof p!="string"||"view"in o&&o.view==="text")return null;const u=Tl(p,rs(o));if(!u||!Pl(u))return null;const T=Sl(o);return T?{initialValue:p,params:T}:null},binding:{reader:p=>{var o;return u0((o=rs(p.params))!==null&&o!==void 0?o:"int")},equals:rt.equals,writer:p=>{const o=Tl(p.initialValue,rs(p.params));if(!o)throw b.shouldNeverHappen();const u=k0(o);if(!u)throw b.notBindable();return u}},controller:p=>{const o=Tl(p.initialValue,rs(p.params));if(!o)throw b.shouldNeverHappen();const u=Pl(o);if(!u)throw b.shouldNeverHappen();const _="expanded"in p.params?p.params.expanded:void 0,T="picker"in p.params?p.params.picker:void 0;return new Nl(p.document,{colorType:o.type,expanded:_!=null?_:!1,formatter:u,parser:Al(o.type),pickerLayout:T!=null?T:"popup",supportsAlpha:o.alpha,value:p.value,viewProps:p.viewProps})}};class Di{constructor(o){this.components=o.components,this.asm_=o.assembly}constrain(o){const u=this.asm_.toComponents(o).map((_,T)=>{var z,j;return(j=(z=this.components[T])===null||z===void 0?void 0:z.constrain(_))!==null&&j!==void 0?j:_});return this.asm_.fromComponents(u)}}const Fh=y("pndtxt");class Q0{constructor(o,u){this.textViews=u.textViews,this.element=o.createElement("div"),this.element.classList.add(Fh()),this.textViews.forEach(_=>{const T=o.createElement("div");T.classList.add(Fh("a")),T.appendChild(_.element),this.element.appendChild(T)})}}function J0(p,o,u){return new qr(p,{arrayPosition:u===0?"fst":u===o.axes.length-1?"lst":"mid",baseStep:o.axes[u].baseStep,parser:o.parser,props:o.axes[u].textProps,value:H(0,{constraint:o.axes[u].constraint}),viewProps:o.viewProps})}class Fl{constructor(o,u){this.value=u.value,this.viewProps=u.viewProps,this.acs_=u.axes.map((_,T)=>J0(o,u,T)),this.acs_.forEach((_,T)=>{Xr({primary:this.value,secondary:_.value,forward:z=>u.assembly.toComponents(z.rawValue)[T],backward:(z,j)=>{const ue=u.assembly.toComponents(z.rawValue);return ue[T]=j.rawValue,u.assembly.fromComponents(ue)}})}),this.view=new Q0(o,{textViews:this.acs_.map(_=>_.view)})}}function Oh(p,o){return"step"in p&&!f(p.step)?new Ri(p.step,o):null}function Bh(p){return"max"in p&&!f(p.max)||"min"in p&&!f(p.min)?new qt({max:p.max,min:p.min}):null}function ev(p,o){const u=[],_=Oh(p,o);_&&u.push(_);const T=Bh(p);T&&u.push(T);const z=Ml(p.options);return z&&u.push(z),new Ot(u)}function tv(p){const o=p?Qt(p,qt):null;return o?[o.minValue,o.maxValue]:[void 0,void 0]}function nv(p){const[o,u]=tv(p);return[o!=null?o:0,u!=null?u:100]}const iv={id:"input-number",type:"input",accept:(p,o)=>{if(typeof p!="number")return null;const u=pe,_=K(o,{format:u.optional.function,max:u.optional.number,min:u.optional.number,options:u.optional.custom(Vo),step:u.optional.number});return _?{initialValue:p,params:_}:null},binding:{reader:p=>ih,constraint:p=>ev(p.params,p.initialValue),writer:p=>Yr},controller:p=>{var o,u;const _=p.value,T=p.constraint;if(T&&Qt(T,ci))return new Hr(p.document,{props:X.fromObject({options:(o=El(T))!==null&&o!==void 0?o:[]}),value:_,viewProps:p.viewProps});const z=(u="format"in p.params?p.params.format:void 0)!==null&&u!==void 0?u:rn(zo(T,_.rawValue));if(T&&Qt(T,qt)){const[j,ue]=nv(T);return new wl(p.document,{baseStep:Cs(T),parser:ui,sliderProps:X.fromObject({maxValue:ue,minValue:j}),textProps:X.fromObject({draggingScale:Ps(T,_.rawValue),formatter:z}),value:_,viewProps:p.viewProps})}return new qr(p.document,{baseStep:Cs(T),parser:ui,props:X.fromObject({draggingScale:Ps(T,_.rawValue),formatter:z}),value:_,viewProps:p.viewProps})}};class Ni{constructor(o=0,u=0){this.x=o,this.y=u}getComponents(){return[this.x,this.y]}static isObject(o){if(f(o))return!1;const u=o.x,_=o.y;return!(typeof u!="number"||typeof _!="number")}static equals(o,u){return o.x===u.x&&o.y===u.y}toObject(){return{x:this.x,y:this.y}}}const kh={toComponents:p=>p.getComponents(),fromComponents:p=>new Ni(...p)},Ls=y("p2d");class sv{constructor(o,u){this.element=o.createElement("div"),this.element.classList.add(Ls()),u.viewProps.bindClassModifiers(this.element),P(u.expanded,B(this.element,Ls(void 0,"expanded")));const _=o.createElement("div");_.classList.add(Ls("h")),this.element.appendChild(_);const T=o.createElement("button");T.classList.add(Ls("b")),T.appendChild(je(o,"p2dpad")),u.viewProps.bindDisabled(T),_.appendChild(T),this.buttonElement=T;const z=o.createElement("div");if(z.classList.add(Ls("t")),_.appendChild(z),this.textElement=z,u.pickerLayout==="inline"){const j=o.createElement("div");j.classList.add(Ls("p")),this.element.appendChild(j),this.pickerElement=j}else this.pickerElement=null}}const Ui=y("p2dp");class rv{constructor(o,u){this.onFoldableChange_=this.onFoldableChange_.bind(this),this.onValueChange_=this.onValueChange_.bind(this),this.invertsY_=u.invertsY,this.maxValue_=u.maxValue,this.element=o.createElement("div"),this.element.classList.add(Ui()),u.layout==="popup"&&this.element.classList.add(Ui(void 0,"p"));const _=o.createElement("div");_.classList.add(Ui("p")),u.viewProps.bindTabIndex(_),this.element.appendChild(_),this.padElement=_;const T=o.createElementNS(Ge,"svg");T.classList.add(Ui("g")),this.padElement.appendChild(T),this.svgElem_=T;const z=o.createElementNS(Ge,"line");z.classList.add(Ui("ax")),z.setAttributeNS(null,"x1","0"),z.setAttributeNS(null,"y1","50%"),z.setAttributeNS(null,"x2","100%"),z.setAttributeNS(null,"y2","50%"),this.svgElem_.appendChild(z);const j=o.createElementNS(Ge,"line");j.classList.add(Ui("ax")),j.setAttributeNS(null,"x1","50%"),j.setAttributeNS(null,"y1","0"),j.setAttributeNS(null,"x2","50%"),j.setAttributeNS(null,"y2","100%"),this.svgElem_.appendChild(j);const ue=o.createElementNS(Ge,"line");ue.classList.add(Ui("l")),ue.setAttributeNS(null,"x1","50%"),ue.setAttributeNS(null,"y1","50%"),this.svgElem_.appendChild(ue),this.lineElem_=ue;const Ne=o.createElement("div");Ne.classList.add(Ui("m")),this.padElement.appendChild(Ne),this.markerElem_=Ne,u.value.emitter.on("change",this.onValueChange_),this.value=u.value,this.update_()}get allFocusableElements(){return[this.padElement]}update_(){const[o,u]=this.value.rawValue.getComponents(),_=this.maxValue_,T=Lt(o,-_,+_,0,100),z=Lt(u,-_,+_,0,100),j=this.invertsY_?100-z:z;this.lineElem_.setAttributeNS(null,"x2",`${T}%`),this.lineElem_.setAttributeNS(null,"y2",`${j}%`),this.markerElem_.style.left=`${T}%`,this.markerElem_.style.top=`${j}%`}onValueChange_(){this.update_()}onFoldableChange_(){this.update_()}}function Vh(p,o,u){return[yn(o[0],hi(p)),yn(o[1],jr(p))*(u?1:-1)]}class ov{constructor(o,u){this.onPadKeyDown_=this.onPadKeyDown_.bind(this),this.onPadKeyUp_=this.onPadKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=u.value,this.viewProps=u.viewProps,this.baseSteps_=u.baseSteps,this.maxValue_=u.maxValue,this.invertsY_=u.invertsY,this.view=new rv(o,{invertsY:this.invertsY_,layout:u.layout,maxValue:this.maxValue_,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new ts(this.view.padElement),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.padElement.addEventListener("keydown",this.onPadKeyDown_),this.view.padElement.addEventListener("keyup",this.onPadKeyUp_)}handlePointerEvent_(o,u){if(!o.point)return;const _=this.maxValue_,T=Lt(o.point.x,0,o.bounds.width,-_,+_),z=Lt(this.invertsY_?o.bounds.height-o.point.y:o.point.y,0,o.bounds.height,-_,+_);this.value.setRawValue(new Ni(T,z),u)}onPointerDown_(o){this.handlePointerEvent_(o.data,{forceEmit:!1,last:!1})}onPointerMove_(o){this.handlePointerEvent_(o.data,{forceEmit:!1,last:!1})}onPointerUp_(o){this.handlePointerEvent_(o.data,{forceEmit:!0,last:!0})}onPadKeyDown_(o){oh(o.key)&&o.preventDefault();const[u,_]=Vh(o,this.baseSteps_,this.invertsY_);u===0&&_===0||this.value.setRawValue(new Ni(this.value.rawValue.x+u,this.value.rawValue.y+_),{forceEmit:!1,last:!1})}onPadKeyUp_(o){const[u,_]=Vh(o,this.baseSteps_,this.invertsY_);u===0&&_===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class av{constructor(o,u){var _,T;this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.onPadButtonBlur_=this.onPadButtonBlur_.bind(this),this.onPadButtonClick_=this.onPadButtonClick_.bind(this),this.value=u.value,this.viewProps=u.viewProps,this.foldable_=st.create(u.expanded),this.popC_=u.pickerLayout==="popup"?new $u(o,{viewProps:this.viewProps}):null;const z=new ov(o,{baseSteps:[u.axes[0].baseStep,u.axes[1].baseStep],invertsY:u.invertsY,layout:u.pickerLayout,maxValue:u.maxValue,value:this.value,viewProps:this.viewProps});z.view.allFocusableElements.forEach(j=>{j.addEventListener("blur",this.onPopupChildBlur_),j.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=z,this.textC_=new Fl(o,{assembly:kh,axes:u.axes,parser:u.parser,value:this.value,viewProps:this.viewProps}),this.view=new sv(o,{expanded:this.foldable_.value("expanded"),pickerLayout:u.pickerLayout,viewProps:this.viewProps}),this.view.textElement.appendChild(this.textC_.view.element),(_=this.view.buttonElement)===null||_===void 0||_.addEventListener("blur",this.onPadButtonBlur_),(T=this.view.buttonElement)===null||T===void 0||T.addEventListener("click",this.onPadButtonClick_),this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(this.pickerC_.view.element),Xr({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:j=>j.rawValue,backward:(j,ue)=>ue.rawValue})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),Le(this.foldable_,this.view.pickerElement))}onPadButtonBlur_(o){if(!this.popC_)return;const u=this.view.element,_=o.relatedTarget;(!_||!u.contains(_))&&(this.popC_.shows.rawValue=!1)}onPadButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(o){if(!this.popC_)return;const u=this.popC_.view.element,_=ae(o);_&&u.contains(_)||_&&_===this.view.buttonElement&&!Dt(u.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(o){this.popC_?o.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&o.key==="Escape"&&this.view.buttonElement.focus()}}function lv(p){return Ni.isObject(p)?new Ni(p.x,p.y):new Ni}function cv(p,o){p.writeProperty("x",o.x),p.writeProperty("y",o.y)}function di(p,o){if(!p)return;const u=[],_=Oh(p,o);_&&u.push(_);const T=Bh(p);return T&&u.push(T),new Ot(u)}function uv(p,o){return new Di({assembly:kh,components:[di("x"in p?p.x:void 0,o.x),di("y"in p?p.y:void 0,o.y)]})}function zh(p,o){var u,_;const T=p&&Qt(p,qt);if(T)return Math.max(Math.abs((u=T.minValue)!==null&&u!==void 0?u:0),Math.abs((_=T.maxValue)!==null&&_!==void 0?_:0));const z=Cs(p);return Math.max(Math.abs(z)*10,Math.abs(o)*10)}function hv(p,o){const u=o instanceof Di?o.components[0]:void 0,_=o instanceof Di?o.components[1]:void 0,T=zh(u,p.x),z=zh(_,p.y);return Math.max(T,z)}function Hh(p,o){return{baseStep:Cs(o),constraint:o,textProps:X.fromObject({draggingScale:Ps(o,p),formatter:rn(zo(o,p))})}}function dv(p){if(!("y"in p))return!1;const o=p.y;return o&&"inverted"in o?!!o.inverted:!1}const pv={id:"input-point2d",type:"input",accept:(p,o)=>{if(!Ni.isObject(p))return null;const u=pe,_=K(o,{expanded:u.optional.boolean,picker:u.optional.custom(ch),x:u.optional.custom(Li),y:u.optional.object({inverted:u.optional.boolean,max:u.optional.number,min:u.optional.number,step:u.optional.number})});return _?{initialValue:p,params:_}:null},binding:{reader:p=>lv,constraint:p=>uv(p.params,p.initialValue),equals:Ni.equals,writer:p=>cv},controller:p=>{const o=p.document,u=p.value,_=p.constraint;if(!(_ instanceof Di))throw b.shouldNeverHappen();const T="expanded"in p.params?p.params.expanded:void 0,z="picker"in p.params?p.params.picker:void 0;return new av(o,{axes:[Hh(u.rawValue.x,_.components[0]),Hh(u.rawValue.y,_.components[1])],expanded:T!=null?T:!1,invertsY:dv(p.params),maxValue:hv(u.rawValue,_),parser:ui,pickerLayout:z!=null?z:"popup",value:u,viewProps:p.viewProps})}};class Is{constructor(o=0,u=0,_=0){this.x=o,this.y=u,this.z=_}getComponents(){return[this.x,this.y,this.z]}static isObject(o){if(f(o))return!1;const u=o.x,_=o.y,T=o.z;return!(typeof u!="number"||typeof _!="number"||typeof T!="number")}static equals(o,u){return o.x===u.x&&o.y===u.y&&o.z===u.z}toObject(){return{x:this.x,y:this.y,z:this.z}}}const Gh={toComponents:p=>p.getComponents(),fromComponents:p=>new Is(...p)};function fv(p){return Is.isObject(p)?new Is(p.x,p.y,p.z):new Is}function mv(p,o){p.writeProperty("x",o.x),p.writeProperty("y",o.y),p.writeProperty("z",o.z)}function gv(p,o){return new Di({assembly:Gh,components:[di("x"in p?p.x:void 0,o.x),di("y"in p?p.y:void 0,o.y),di("z"in p?p.z:void 0,o.z)]})}function Ol(p,o){return{baseStep:Cs(o),constraint:o,textProps:X.fromObject({draggingScale:Ps(o,p),formatter:rn(zo(o,p))})}}const vv={id:"input-point3d",type:"input",accept:(p,o)=>{if(!Is.isObject(p))return null;const u=pe,_=K(o,{x:u.optional.custom(Li),y:u.optional.custom(Li),z:u.optional.custom(Li)});return _?{initialValue:p,params:_}:null},binding:{reader:p=>fv,constraint:p=>gv(p.params,p.initialValue),equals:Is.equals,writer:p=>mv},controller:p=>{const o=p.value,u=p.constraint;if(!(u instanceof Di))throw b.shouldNeverHappen();return new Fl(p.document,{assembly:Gh,axes:[Ol(o.rawValue.x,u.components[0]),Ol(o.rawValue.y,u.components[1]),Ol(o.rawValue.z,u.components[2])],parser:ui,value:o,viewProps:p.viewProps})}};class Ds{constructor(o=0,u=0,_=0,T=0){this.x=o,this.y=u,this.z=_,this.w=T}getComponents(){return[this.x,this.y,this.z,this.w]}static isObject(o){if(f(o))return!1;const u=o.x,_=o.y,T=o.z,z=o.w;return!(typeof u!="number"||typeof _!="number"||typeof T!="number"||typeof z!="number")}static equals(o,u){return o.x===u.x&&o.y===u.y&&o.z===u.z&&o.w===u.w}toObject(){return{x:this.x,y:this.y,z:this.z,w:this.w}}}const Wh={toComponents:p=>p.getComponents(),fromComponents:p=>new Ds(...p)};function _v(p){return Ds.isObject(p)?new Ds(p.x,p.y,p.z,p.w):new Ds}function xv(p,o){p.writeProperty("x",o.x),p.writeProperty("y",o.y),p.writeProperty("z",o.z),p.writeProperty("w",o.w)}function bv(p,o){return new Di({assembly:Wh,components:[di("x"in p?p.x:void 0,o.x),di("y"in p?p.y:void 0,o.y),di("z"in p?p.z:void 0,o.z),di("w"in p?p.w:void 0,o.w)]})}function yv(p,o){return{baseStep:Cs(o),constraint:o,textProps:X.fromObject({draggingScale:Ps(o,p),formatter:rn(zo(o,p))})}}const wv={id:"input-point4d",type:"input",accept:(p,o)=>{if(!Ds.isObject(p))return null;const u=pe,_=K(o,{x:u.optional.custom(Li),y:u.optional.custom(Li),z:u.optional.custom(Li),w:u.optional.custom(Li)});return _?{initialValue:p,params:_}:null},binding:{reader:p=>_v,constraint:p=>bv(p.params,p.initialValue),equals:Ds.equals,writer:p=>xv},controller:p=>{const o=p.value,u=p.constraint;if(!(u instanceof Di))throw b.shouldNeverHappen();return new Fl(p.document,{assembly:Wh,axes:o.rawValue.getComponents().map((_,T)=>yv(_,u.components[T])),parser:ui,value:o,viewProps:p.viewProps})}};function Mv(p){const o=[],u=Ml(p.options);return u&&o.push(u),new Ot(o)}const Ev={id:"input-string",type:"input",accept:(p,o)=>{if(typeof p!="string")return null;const _=K(o,{options:pe.optional.custom(Vo)});return _?{initialValue:p,params:_}:null},binding:{reader:p=>sh,constraint:p=>Mv(p.params),writer:p=>Yr},controller:p=>{var o;const u=p.document,_=p.value,T=p.constraint;return T&&Qt(T,ci)?new Hr(u,{props:X.fromObject({options:(o=El(T))!==null&&o!==void 0?o:[]}),value:_,viewProps:p.viewProps}):new Bo(u,{parser:z=>z,props:X.fromObject({formatter:_l}),value:_,viewProps:p.viewProps})}},$r={monitor:{defaultInterval:200,defaultLineCount:3}},Xh=y("mll");class Sv{constructor(o,u){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=u.formatter,this.element=o.createElement("div"),this.element.classList.add(Xh()),u.viewProps.bindClassModifiers(this.element);const _=o.createElement("textarea");_.classList.add(Xh("i")),_.style.height=`calc(var(--bld-us) * ${u.lineCount})`,_.readOnly=!0,u.viewProps.bindDisabled(_),this.element.appendChild(_),this.textareaElem_=_,u.value.emitter.on("change",this.onValueUpdate_),this.value=u.value,this.update_()}update_(){const o=this.textareaElem_,u=o.scrollTop===o.scrollHeight-o.clientHeight,_=[];this.value.rawValue.forEach(T=>{T!==void 0&&_.push(this.formatter_(T))}),o.textContent=_.join(`
`),u&&(o.scrollTop=o.scrollHeight)}onValueUpdate_(){this.update_()}}class Bl{constructor(o,u){this.value=u.value,this.viewProps=u.viewProps,this.view=new Sv(o,{formatter:u.formatter,lineCount:u.lineCount,value:this.value,viewProps:this.viewProps})}}const jh=y("sgl");class Tv{constructor(o,u){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=u.formatter,this.element=o.createElement("div"),this.element.classList.add(jh()),u.viewProps.bindClassModifiers(this.element);const _=o.createElement("input");_.classList.add(jh("i")),_.readOnly=!0,_.type="text",u.viewProps.bindDisabled(_),this.element.appendChild(_),this.inputElement=_,u.value.emitter.on("change",this.onValueUpdate_),this.value=u.value,this.update_()}update_(){const o=this.value.rawValue,u=o[o.length-1];this.inputElement.value=u!==void 0?this.formatter_(u):""}onValueUpdate_(){this.update_()}}class kl{constructor(o,u){this.value=u.value,this.viewProps=u.viewProps,this.view=new Tv(o,{formatter:u.formatter,value:this.value,viewProps:this.viewProps})}}const Av={id:"monitor-bool",type:"monitor",accept:(p,o)=>{if(typeof p!="boolean")return null;const _=K(o,{lineCount:pe.optional.number});return _?{initialValue:p,params:_}:null},binding:{reader:p=>Qu},controller:p=>{var o;return p.value.rawValue.length===1?new kl(p.document,{formatter:Ju,value:p.value,viewProps:p.viewProps}):new Bl(p.document,{formatter:Ju,lineCount:(o=p.params.lineCount)!==null&&o!==void 0?o:$r.monitor.defaultLineCount,value:p.value,viewProps:p.viewProps})}},Fi=y("grl");class Cv{constructor(o,u){this.onCursorChange_=this.onCursorChange_.bind(this),this.onValueUpdate_=this.onValueUpdate_.bind(this),this.element=o.createElement("div"),this.element.classList.add(Fi()),u.viewProps.bindClassModifiers(this.element),this.formatter_=u.formatter,this.props_=u.props,this.cursor_=u.cursor,this.cursor_.emitter.on("change",this.onCursorChange_);const _=o.createElementNS(Ge,"svg");_.classList.add(Fi("g")),_.style.height=`calc(var(--bld-us) * ${u.lineCount})`,this.element.appendChild(_),this.svgElem_=_;const T=o.createElementNS(Ge,"polyline");this.svgElem_.appendChild(T),this.lineElem_=T;const z=o.createElement("div");z.classList.add(Fi("t"),y("tt")()),this.element.appendChild(z),this.tooltipElem_=z,u.value.emitter.on("change",this.onValueUpdate_),this.value=u.value,this.update_()}get graphElement(){return this.svgElem_}update_(){const o=this.svgElem_.getBoundingClientRect(),u=this.value.rawValue.length-1,_=this.props_.get("minValue"),T=this.props_.get("maxValue"),z=[];this.value.rawValue.forEach((ut,ht)=>{if(ut===void 0)return;const pi=Lt(ht,0,u,0,o.width),Zr=Lt(ut,_,T,o.height,0);z.push([pi,Zr].join(","))}),this.lineElem_.setAttributeNS(null,"points",z.join(" "));const j=this.tooltipElem_,ue=this.value.rawValue[this.cursor_.rawValue];if(ue===void 0){j.classList.remove(Fi("t","a"));return}const Ne=Lt(this.cursor_.rawValue,0,u,0,o.width),Ye=Lt(ue,_,T,o.height,0);j.style.left=`${Ne}px`,j.style.top=`${Ye}px`,j.textContent=`${this.formatter_(ue)}`,j.classList.contains(Fi("t","a"))||(j.classList.add(Fi("t","a"),Fi("t","in")),Be(j),j.classList.remove(Fi("t","in")))}onValueUpdate_(){this.update_()}onCursorChange_(){this.update_()}}class Pv{constructor(o,u){if(this.onGraphMouseMove_=this.onGraphMouseMove_.bind(this),this.onGraphMouseLeave_=this.onGraphMouseLeave_.bind(this),this.onGraphPointerDown_=this.onGraphPointerDown_.bind(this),this.onGraphPointerMove_=this.onGraphPointerMove_.bind(this),this.onGraphPointerUp_=this.onGraphPointerUp_.bind(this),this.props_=u.props,this.value=u.value,this.viewProps=u.viewProps,this.cursor_=H(-1),this.view=new Cv(o,{cursor:this.cursor_,formatter:u.formatter,lineCount:u.lineCount,props:this.props_,value:this.value,viewProps:this.viewProps}),!Dt(o))this.view.element.addEventListener("mousemove",this.onGraphMouseMove_),this.view.element.addEventListener("mouseleave",this.onGraphMouseLeave_);else{const _=new ts(this.view.element);_.emitter.on("down",this.onGraphPointerDown_),_.emitter.on("move",this.onGraphPointerMove_),_.emitter.on("up",this.onGraphPointerUp_)}}onGraphMouseLeave_(){this.cursor_.rawValue=-1}onGraphMouseMove_(o){const u=this.view.element.getBoundingClientRect();this.cursor_.rawValue=Math.floor(Lt(o.offsetX,0,u.width,0,this.value.rawValue.length))}onGraphPointerDown_(o){this.onGraphPointerMove_(o)}onGraphPointerMove_(o){if(!o.data.point){this.cursor_.rawValue=-1;return}this.cursor_.rawValue=Math.floor(Lt(o.data.point.x,0,o.data.bounds.width,0,this.value.rawValue.length))}onGraphPointerUp_(){this.cursor_.rawValue=-1}}function Vl(p){return"format"in p&&!f(p.format)?p.format:rn(2)}function Rv(p){var o;return p.value.rawValue.length===1?new kl(p.document,{formatter:Vl(p.params),value:p.value,viewProps:p.viewProps}):new Bl(p.document,{formatter:Vl(p.params),lineCount:(o=p.params.lineCount)!==null&&o!==void 0?o:$r.monitor.defaultLineCount,value:p.value,viewProps:p.viewProps})}function Lv(p){var o,u,_;return new Pv(p.document,{formatter:Vl(p.params),lineCount:(o=p.params.lineCount)!==null&&o!==void 0?o:$r.monitor.defaultLineCount,props:X.fromObject({maxValue:(u="max"in p.params?p.params.max:null)!==null&&u!==void 0?u:100,minValue:(_="min"in p.params?p.params.min:null)!==null&&_!==void 0?_:0}),value:p.value,viewProps:p.viewProps})}function qh(p){return"view"in p&&p.view==="graph"}const Iv={id:"monitor-number",type:"monitor",accept:(p,o)=>{if(typeof p!="number")return null;const u=pe,_=K(o,{format:u.optional.function,lineCount:u.optional.number,max:u.optional.number,min:u.optional.number,view:u.optional.string});return _?{initialValue:p,params:_}:null},binding:{defaultBufferSize:p=>qh(p)?64:1,reader:p=>ih},controller:p=>qh(p.params)?Lv(p):Rv(p)},Dv={id:"monitor-string",type:"monitor",accept:(p,o)=>{if(typeof p!="string")return null;const u=pe,_=K(o,{lineCount:u.optional.number,multiline:u.optional.boolean});return _?{initialValue:p,params:_}:null},binding:{reader:p=>sh},controller:p=>{var o;const u=p.value;return u.rawValue.length>1||"multiline"in p.params&&p.params.multiline?new Bl(p.document,{formatter:_l,lineCount:(o=p.params.lineCount)!==null&&o!==void 0?o:$r.monitor.defaultLineCount,value:u,viewProps:p.viewProps}):new kl(p.document,{formatter:_l,value:u,viewProps:p.viewProps})}};class Nv{constructor(o){this.onValueChange_=this.onValueChange_.bind(this),this.reader=o.reader,this.writer=o.writer,this.emitter=new v,this.value=o.value,this.value.emitter.on("change",this.onValueChange_),this.target=o.target,this.read()}read(){const o=this.target.read();o!==void 0&&(this.value.rawValue=this.reader(o))}write_(o){this.writer(this.target,o)}onValueChange_(o){this.write_(o.rawValue),this.emitter.emit("change",{options:o.options,rawValue:o.rawValue,sender:this})}}function Uv(p,o){const u=p.accept(o.target.read(),o.params);if(f(u))return null;const _=pe,T={target:o.target,initialValue:u.initialValue,params:u.params},z=p.binding.reader(T),j=p.binding.constraint?p.binding.constraint(T):void 0,ue=H(z(u.initialValue),{constraint:j,equals:p.binding.equals}),Ne=new Nv({reader:z,target:o.target,value:ue,writer:p.binding.writer(T)}),Ye=_.optional.boolean(o.params.disabled).value,ut=_.optional.boolean(o.params.hidden).value,ht=p.controller({constraint:j,document:o.document,initialValue:u.initialValue,params:u.params,value:Ne.value,viewProps:Fe.create({disabled:Ye,hidden:ut})}),pi=_.optional.string(o.params.label).value;return new re(o.document,{binding:Ne,blade:oe(),props:X.fromObject({label:pi!=null?pi:o.target.key}),valueController:ht})}class Fv{constructor(o){this.onTick_=this.onTick_.bind(this),this.reader_=o.reader,this.target=o.target,this.emitter=new v,this.value=o.value,this.ticker=o.ticker,this.ticker.emitter.on("tick",this.onTick_),this.read()}dispose(){this.ticker.dispose()}read(){const o=this.target.read();if(o===void 0)return;const u=this.value.rawValue,_=this.reader_(o);this.value.rawValue=Fg(u,_),this.emitter.emit("update",{rawValue:_,sender:this})}onTick_(o){this.read()}}function Ov(p,o){return o===0?new es:new Vr(p,o!=null?o:$r.monitor.defaultInterval)}function Bv(p,o){var u,_,T;const z=pe,j=p.accept(o.target.read(),o.params);if(f(j))return null;const ue={target:o.target,initialValue:j.initialValue,params:j.params},Ne=p.binding.reader(ue),Ye=(_=(u=z.optional.number(o.params.bufferSize).value)!==null&&u!==void 0?u:p.binding.defaultBufferSize&&p.binding.defaultBufferSize(j.params))!==null&&_!==void 0?_:1,ut=z.optional.number(o.params.interval).value,ht=new Fv({reader:Ne,target:o.target,ticker:Ov(o.document,ut),value:Ng(Ye)}),pi=z.optional.boolean(o.params.disabled).value,Zr=z.optional.boolean(o.params.hidden).value,Qr=p.controller({document:o.document,params:j.params,value:ht.value,viewProps:Fe.create({disabled:pi,hidden:Zr})}),Ns=(T=z.optional.string(o.params.label).value)!==null&&T!==void 0?T:o.target.key;return new Ee(o.document,{binding:ht,blade:oe(),props:X.fromObject({label:Ns}),valueController:Qr})}class kv{constructor(){this.pluginsMap_={blades:[],inputs:[],monitors:[]}}getAll(){return[...this.pluginsMap_.blades,...this.pluginsMap_.inputs,...this.pluginsMap_.monitors]}register(o){o.type==="blade"?this.pluginsMap_.blades.unshift(o):o.type==="input"?this.pluginsMap_.inputs.unshift(o):o.type==="monitor"&&this.pluginsMap_.monitors.unshift(o)}createInput(o,u,_){const T=u.read();if(f(T))throw new b({context:{key:u.key},type:"nomatchingcontroller"});const z=this.pluginsMap_.inputs.reduce((j,ue)=>j!=null?j:Uv(ue,{document:o,target:u,params:_}),null);if(z)return z;throw new b({context:{key:u.key},type:"nomatchingcontroller"})}createMonitor(o,u,_){const T=this.pluginsMap_.monitors.reduce((z,j)=>z!=null?z:Bv(j,{document:o,params:_,target:u}),null);if(T)return T;throw new b({context:{key:u.key},type:"nomatchingcontroller"})}createBlade(o,u){const _=this.pluginsMap_.blades.reduce((T,z)=>T!=null?T:Fo(z,{document:o,params:u}),null);if(!_)throw new b({type:"nomatchingview",context:{params:u}});return _}createBladeApi(o){if(o instanceof re)return new O(o);if(o instanceof Ee)return new le(o);if(o instanceof Pi)return new ct(o,this);const u=this.pluginsMap_.blades.reduce((_,T)=>_!=null?_:T.api({controller:o,pool:this}),null);if(!u)throw b.shouldNeverHappen();return u}}function Vv(){const p=new kv;return[pv,vv,wv,Ev,iv,Z0,$0,j0,jg,Av,Dv,Iv,Oe,ml,Me,Zn].forEach(o=>{p.register(o)}),p}class Yh extends i{constructor(o){super(o),this.emitter_=new v,this.controller_.valueController.value.emitter.on("change",u=>{this.emitter_.emit("change",{event:new a(this,u.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(o){this.controller_.props.set("label",o)}get options(){return this.controller_.valueController.props.get("options")}set options(o){this.controller_.valueController.props.set("options",o)}get value(){return this.controller_.valueController.value.rawValue}set value(o){this.controller_.valueController.value.rawValue=o}on(o,u){const _=u.bind(this);return this.emitter_.on(o,T=>{_(T.event)}),this}}class Kh extends i{constructor(o){super(o),this.emitter_=new v,this.controller_.valueController.value.emitter.on("change",u=>{this.emitter_.emit("change",{event:new a(this,u.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(o){this.controller_.props.set("label",o)}get maxValue(){return this.controller_.valueController.sliderController.props.get("maxValue")}set maxValue(o){this.controller_.valueController.sliderController.props.set("maxValue",o)}get minValue(){return this.controller_.valueController.sliderController.props.get("minValue")}set minValue(o){this.controller_.valueController.sliderController.props.set("minValue",o)}get value(){return this.controller_.valueController.value.rawValue}set value(o){this.controller_.valueController.value.rawValue=o}on(o,u){const _=u.bind(this);return this.emitter_.on(o,T=>{_(T.event)}),this}}class $h extends i{constructor(o){super(o),this.emitter_=new v,this.controller_.valueController.value.emitter.on("change",u=>{this.emitter_.emit("change",{event:new a(this,u.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(o){this.controller_.props.set("label",o)}get formatter(){return this.controller_.valueController.props.get("formatter")}set formatter(o){this.controller_.valueController.props.set("formatter",o)}get value(){return this.controller_.valueController.value.rawValue}set value(o){this.controller_.valueController.value.rawValue=o}on(o,u){const _=u.bind(this);return this.emitter_.on(o,T=>{_(T.event)}),this}}const zv=function(){return{id:"list",type:"blade",accept(p){const o=pe,u=K(p,{options:o.required.custom(Vo),value:o.required.raw,view:o.required.constant("list"),label:o.optional.string});return u?{params:u}:null},controller(p){const o=new Hr(p.document,{props:X.fromObject({options:uh(p.params.options)}),value:H(p.params.value),viewProps:p.viewProps});return new N(p.document,{blade:p.blade,props:X.fromObject({label:p.params.label}),valueController:o})},api(p){return!(p.controller instanceof N)||!(p.controller.valueController instanceof Hr)?null:new Yh(p.controller)}}}();function Hv(p){return p.reduce((o,u)=>Object.assign(o,{[u.presetKey]:u.read()}),{})}function Gv(p,o){p.forEach(u=>{const _=o[u.presetKey];_!==void 0&&u.write(_)})}class Wv extends Bt{constructor(o,u){super(o,u)}get element(){return this.controller_.view.element}importPreset(o){const u=this.controller_.rackController.rack.find(re).map(_=>_.binding.target);Gv(u,o),this.refresh()}exportPreset(){const o=this.controller_.rackController.rack.find(re).map(u=>u.binding.target);return Hv(o)}refresh(){this.controller_.rackController.rack.find(re).forEach(o=>{o.binding.read()}),this.controller_.rackController.rack.find(Ee).forEach(o=>{o.binding.read()})}}class Xv extends Br{constructor(o,u){super(o,{expanded:u.expanded,blade:u.blade,props:u.props,root:!0,viewProps:u.viewProps})}}const jv={id:"slider",type:"blade",accept(p){const o=pe,u=K(p,{max:o.required.number,min:o.required.number,view:o.required.constant("slider"),format:o.optional.function,label:o.optional.string,value:o.optional.number});return u?{params:u}:null},controller(p){var o,u;const _=(o=p.params.value)!==null&&o!==void 0?o:0,T=new wl(p.document,{baseStep:1,parser:ui,sliderProps:X.fromObject({maxValue:p.params.max,minValue:p.params.min}),textProps:X.fromObject({draggingScale:Ps(void 0,_),formatter:(u=p.params.format)!==null&&u!==void 0?u:Ig}),value:H(_),viewProps:p.viewProps});return new N(p.document,{blade:p.blade,props:X.fromObject({label:p.params.label}),valueController:T})},api(p){return!(p.controller instanceof N)||!(p.controller.valueController instanceof wl)?null:new Kh(p.controller)}},qv=function(){return{id:"text",type:"blade",accept(p){const o=pe,u=K(p,{parse:o.required.function,value:o.required.raw,view:o.required.constant("text"),format:o.optional.function,label:o.optional.string});return u?{params:u}:null},controller(p){var o;const u=new Bo(p.document,{parser:p.params.parse,props:X.fromObject({formatter:(o=p.params.format)!==null&&o!==void 0?o:_=>String(_)}),value:H(p.params.value),viewProps:p.viewProps});return new N(p.document,{blade:p.blade,props:X.fromObject({label:p.params.label}),valueController:u})},api(p){return!(p.controller instanceof N)||!(p.controller.valueController instanceof Bo)?null:new $h(p.controller)}}}();function Yv(p){const o=p.createElement("div");return o.classList.add(y("dfw")()),p.body&&p.body.appendChild(o),o}function Zh(p,o,u){if(p.querySelector(`style[data-tp-style=${o}]`))return;const _=p.createElement("style");_.dataset.tpStyle=o,_.textContent=u,p.head.appendChild(_)}class Kv extends Wv{constructor(o){var u,_;const T=o!=null?o:{},z=(u=T.document)!==null&&u!==void 0?u:We(),j=Vv(),ue=new Xv(z,{expanded:T.expanded,blade:oe(),props:X.fromObject({title:T.title}),viewProps:Fe.create()});super(ue,j),this.pool_=j,this.containerElem_=(_=T.container)!==null&&_!==void 0?_:Yv(z),this.containerElem_.appendChild(this.element),this.doc_=z,this.usesDefaultWrapper_=!T.container,this.setUpDefaultPlugins_()}get document(){if(!this.doc_)throw b.alreadyDisposed();return this.doc_}dispose(){const o=this.containerElem_;if(!o)throw b.alreadyDisposed();if(this.usesDefaultWrapper_){const u=o.parentElement;u&&u.removeChild(o)}this.containerElem_=null,this.doc_=null,super.dispose()}registerPlugin(o){("plugin"in o?[o.plugin]:"plugins"in o?o.plugins:[]).forEach(_=>{this.pool_.register(_),this.embedPluginStyle_(_)})}embedPluginStyle_(o){o.css&&Zh(this.document,`plugin-${o.id}`,o.css)}setUpDefaultPlugins_(){Zh(this.document,"default",'.tp-tbiv_b,.tp-coltxtv_ms,.tp-ckbv_i,.tp-rotv_b,.tp-fldv_b,.tp-mllv_i,.tp-sglv_i,.tp-grlv_g,.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw,.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0}.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{background-color:var(--btn-bg);border-radius:var(--elm-br);color:var(--btn-fg);cursor:pointer;display:block;font-weight:bold;height:var(--bld-us);line-height:var(--bld-us);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tp-p2dv_b:hover,.tp-btnv_b:hover,.tp-lstv_s:hover{background-color:var(--btn-bg-h)}.tp-p2dv_b:focus,.tp-btnv_b:focus,.tp-lstv_s:focus{background-color:var(--btn-bg-f)}.tp-p2dv_b:active,.tp-btnv_b:active,.tp-lstv_s:active{background-color:var(--btn-bg-a)}.tp-p2dv_b:disabled,.tp-btnv_b:disabled,.tp-lstv_s:disabled{opacity:.5}.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw{background-color:var(--in-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--in-fg);font-family:inherit;height:var(--bld-us);line-height:var(--bld-us);min-width:0;width:100%}.tp-txtv_i:hover,.tp-p2dpv_p:hover,.tp-colswv_sw:hover{background-color:var(--in-bg-h)}.tp-txtv_i:focus,.tp-p2dpv_p:focus,.tp-colswv_sw:focus{background-color:var(--in-bg-f)}.tp-txtv_i:active,.tp-p2dpv_p:active,.tp-colswv_sw:active{background-color:var(--in-bg-a)}.tp-txtv_i:disabled,.tp-p2dpv_p:disabled,.tp-colswv_sw:disabled{opacity:.5}.tp-mllv_i,.tp-sglv_i,.tp-grlv_g{background-color:var(--mo-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--mo-fg);height:var(--bld-us);scrollbar-color:currentColor transparent;scrollbar-width:thin;width:100%}.tp-mllv_i::-webkit-scrollbar,.tp-sglv_i::-webkit-scrollbar,.tp-grlv_g::-webkit-scrollbar{height:8px;width:8px}.tp-mllv_i::-webkit-scrollbar-corner,.tp-sglv_i::-webkit-scrollbar-corner,.tp-grlv_g::-webkit-scrollbar-corner{background-color:transparent}.tp-mllv_i::-webkit-scrollbar-thumb,.tp-sglv_i::-webkit-scrollbar-thumb,.tp-grlv_g::-webkit-scrollbar-thumb{background-clip:padding-box;background-color:currentColor;border:transparent solid 2px;border-radius:4px}.tp-rotv{--font-family: var(--tp-font-family, Roboto Mono, Source Code Pro, Menlo, Courier, monospace);--bs-br: var(--tp-base-border-radius, 6px);--cnt-h-p: var(--tp-container-horizontal-padding, 4px);--cnt-v-p: var(--tp-container-vertical-padding, 4px);--elm-br: var(--tp-element-border-radius, 2px);--bld-s: var(--tp-blade-spacing, 4px);--bld-us: var(--tp-blade-unit-size, 20px);--bs-bg: var(--tp-base-background-color, #28292e);--bs-sh: var(--tp-base-shadow-color, rgba(0, 0, 0, 0.2));--btn-bg: var(--tp-button-background-color, #adafb8);--btn-bg-a: var(--tp-button-background-color-active, #d6d7db);--btn-bg-f: var(--tp-button-background-color-focus, #c8cad0);--btn-bg-h: var(--tp-button-background-color-hover, #bbbcc4);--btn-fg: var(--tp-button-foreground-color, #28292e);--cnt-bg: var(--tp-container-background-color, rgba(187, 188, 196, 0.1));--cnt-bg-a: var(--tp-container-background-color-active, rgba(187, 188, 196, 0.25));--cnt-bg-f: var(--tp-container-background-color-focus, rgba(187, 188, 196, 0.2));--cnt-bg-h: var(--tp-container-background-color-hover, rgba(187, 188, 196, 0.15));--cnt-fg: var(--tp-container-foreground-color, #bbbcc4);--in-bg: var(--tp-input-background-color, rgba(187, 188, 196, 0.1));--in-bg-a: var(--tp-input-background-color-active, rgba(187, 188, 196, 0.25));--in-bg-f: var(--tp-input-background-color-focus, rgba(187, 188, 196, 0.2));--in-bg-h: var(--tp-input-background-color-hover, rgba(187, 188, 196, 0.15));--in-fg: var(--tp-input-foreground-color, #bbbcc4);--lbl-fg: var(--tp-label-foreground-color, rgba(187, 188, 196, 0.7));--mo-bg: var(--tp-monitor-background-color, rgba(0, 0, 0, 0.2));--mo-fg: var(--tp-monitor-foreground-color, rgba(187, 188, 196, 0.7));--grv-fg: var(--tp-groove-foreground-color, rgba(187, 188, 196, 0.1))}.tp-rotv_c>.tp-cntv.tp-v-lst,.tp-tabv_c .tp-brkv>.tp-cntv.tp-v-lst,.tp-fldv_c>.tp-cntv.tp-v-lst{margin-bottom:calc(-1*var(--cnt-v-p))}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-tabv_c .tp-brkv>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_c{border-bottom-left-radius:0}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-tabv_c .tp-brkv>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_b{border-bottom-left-radius:0}.tp-rotv_c>*:not(.tp-v-fst),.tp-tabv_c .tp-brkv>*:not(.tp-v-fst),.tp-fldv_c>*:not(.tp-v-fst){margin-top:var(--bld-s)}.tp-rotv_c>.tp-sprv:not(.tp-v-fst),.tp-tabv_c .tp-brkv>.tp-sprv:not(.tp-v-fst),.tp-fldv_c>.tp-sprv:not(.tp-v-fst),.tp-rotv_c>.tp-cntv:not(.tp-v-fst),.tp-tabv_c .tp-brkv>.tp-cntv:not(.tp-v-fst),.tp-fldv_c>.tp-cntv:not(.tp-v-fst){margin-top:var(--cnt-v-p)}.tp-rotv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-tabv_c .tp-brkv>.tp-sprv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-rotv_c>.tp-cntv+*:not(.tp-v-hidden),.tp-tabv_c .tp-brkv>.tp-cntv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-cntv+*:not(.tp-v-hidden){margin-top:var(--cnt-v-p)}.tp-rotv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-tabv_c .tp-brkv>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-fldv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-rotv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-tabv_c .tp-brkv>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-fldv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv{margin-top:0}.tp-tabv_c .tp-brkv>.tp-cntv,.tp-fldv_c>.tp-cntv{margin-left:4px}.tp-tabv_c .tp-brkv>.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-fldv>.tp-fldv_b{border-top-left-radius:var(--elm-br);border-bottom-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv>.tp-fldv.tp-fldv-expanded>.tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-fldv-expanded>.tp-fldv_b{border-bottom-left-radius:0}.tp-tabv_c .tp-brkv .tp-fldv>.tp-fldv_c,.tp-fldv_c .tp-fldv>.tp-fldv_c{border-bottom-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv>.tp-tabv>.tp-tabv_i,.tp-fldv_c>.tp-tabv>.tp-tabv_i{border-top-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv .tp-tabv>.tp-tabv_c,.tp-fldv_c .tp-tabv>.tp-tabv_c{border-bottom-left-radius:var(--elm-br)}.tp-rotv_b,.tp-fldv_b{background-color:var(--cnt-bg);color:var(--cnt-fg);cursor:pointer;display:block;height:calc(var(--bld-us) + 4px);line-height:calc(var(--bld-us) + 4px);overflow:hidden;padding-left:var(--cnt-h-p);padding-right:calc(4px + var(--bld-us) + var(--cnt-h-p));position:relative;text-align:left;text-overflow:ellipsis;white-space:nowrap;width:100%;transition:border-radius .2s ease-in-out .2s}.tp-rotv_b:hover,.tp-fldv_b:hover{background-color:var(--cnt-bg-h)}.tp-rotv_b:focus,.tp-fldv_b:focus{background-color:var(--cnt-bg-f)}.tp-rotv_b:active,.tp-fldv_b:active{background-color:var(--cnt-bg-a)}.tp-rotv_b:disabled,.tp-fldv_b:disabled{opacity:.5}.tp-rotv_m,.tp-fldv_m{background:linear-gradient(to left, var(--cnt-fg), var(--cnt-fg) 2px, transparent 2px, transparent 4px, var(--cnt-fg) 4px);border-radius:2px;bottom:0;content:"";display:block;height:6px;right:calc(var(--cnt-h-p) + (var(--bld-us) + 4px - 6px)/2 - 2px);margin:auto;opacity:.5;position:absolute;top:0;transform:rotate(90deg);transition:transform .2s ease-in-out;width:6px}.tp-rotv.tp-rotv-expanded .tp-rotv_m,.tp-fldv.tp-fldv-expanded>.tp-fldv_b>.tp-fldv_m{transform:none}.tp-rotv_c,.tp-fldv_c{box-sizing:border-box;height:0;opacity:0;overflow:hidden;padding-bottom:0;padding-top:0;position:relative;transition:height .2s ease-in-out,opacity .2s linear,padding .2s ease-in-out}.tp-rotv.tp-rotv-cpl:not(.tp-rotv-expanded) .tp-rotv_c,.tp-fldv.tp-fldv-cpl:not(.tp-fldv-expanded)>.tp-fldv_c{display:none}.tp-rotv.tp-rotv-expanded .tp-rotv_c,.tp-fldv.tp-fldv-expanded>.tp-fldv_c{opacity:1;padding-bottom:var(--cnt-v-p);padding-top:var(--cnt-v-p);transform:none;overflow:visible;transition:height .2s ease-in-out,opacity .2s linear .2s,padding .2s ease-in-out}.tp-lstv,.tp-coltxtv_m{position:relative}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m,.tp-coltxtv_mm{bottom:0;margin:auto;pointer-events:none;position:absolute;right:2px;top:0}.tp-lstv_m svg,.tp-coltxtv_mm svg{bottom:0;height:16px;margin:auto;position:absolute;right:0;top:0;width:16px}.tp-lstv_m svg path,.tp-coltxtv_mm svg path{fill:currentColor}.tp-pndtxtv,.tp-coltxtv_w{display:flex}.tp-pndtxtv_a,.tp-coltxtv_c{width:100%}.tp-pndtxtv_a+.tp-pndtxtv_a,.tp-coltxtv_c+.tp-pndtxtv_a,.tp-pndtxtv_a+.tp-coltxtv_c,.tp-coltxtv_c+.tp-coltxtv_c{margin-left:2px}.tp-btnv_b{width:100%}.tp-btnv_t{text-align:center}.tp-ckbv_l{display:block;position:relative}.tp-ckbv_i{left:0;opacity:0;position:absolute;top:0}.tp-ckbv_w{background-color:var(--in-bg);border-radius:var(--elm-br);cursor:pointer;display:block;height:var(--bld-us);position:relative;width:var(--bld-us)}.tp-ckbv_w svg{bottom:0;display:block;height:16px;left:0;margin:auto;opacity:0;position:absolute;right:0;top:0;width:16px}.tp-ckbv_w svg path{fill:none;stroke:var(--in-fg);stroke-width:2}.tp-ckbv_i:hover+.tp-ckbv_w{background-color:var(--in-bg-h)}.tp-ckbv_i:focus+.tp-ckbv_w{background-color:var(--in-bg-f)}.tp-ckbv_i:active+.tp-ckbv_w{background-color:var(--in-bg-a)}.tp-ckbv_i:checked+.tp-ckbv_w svg{opacity:1}.tp-ckbv.tp-v-disabled .tp-ckbv_w{opacity:.5}.tp-colv{position:relative}.tp-colv_h{display:flex}.tp-colv_s{flex-grow:0;flex-shrink:0;width:var(--bld-us)}.tp-colv_t{flex:1;margin-left:4px}.tp-colv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-colv.tp-colv-cpl .tp-colv_p{overflow:visible}.tp-colv.tp-colv-expanded .tp-colv_p{margin-top:var(--bld-s);opacity:1}.tp-colv .tp-popv{left:calc(-1*var(--cnt-h-p));right:calc(-1*var(--cnt-h-p));top:var(--bld-us)}.tp-colpv_h,.tp-colpv_ap{margin-left:6px;margin-right:6px}.tp-colpv_h{margin-top:var(--bld-s)}.tp-colpv_rgb{display:flex;margin-top:var(--bld-s);width:100%}.tp-colpv_a{display:flex;margin-top:var(--cnt-v-p);padding-top:calc(var(--cnt-v-p) + 2px);position:relative}.tp-colpv_a:before{background-color:var(--grv-fg);content:"";height:2px;left:calc(-1*var(--cnt-h-p));position:absolute;right:calc(-1*var(--cnt-h-p));top:0}.tp-colpv_ap{align-items:center;display:flex;flex:3}.tp-colpv_at{flex:1;margin-left:4px}.tp-svpv{border-radius:var(--elm-br);outline:none;overflow:hidden;position:relative}.tp-svpv_c{cursor:crosshair;display:block;height:calc(var(--bld-us)*4);width:100%}.tp-svpv_m{border-radius:100%;border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;filter:drop-shadow(0 0 1px rgba(0, 0, 0, 0.3));height:12px;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;width:12px}.tp-svpv:focus .tp-svpv_m{border-color:#fff}.tp-hplv{cursor:pointer;height:var(--bld-us);outline:none;position:relative}.tp-hplv_c{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAABCAYAAABubagXAAAAQ0lEQVQoU2P8z8Dwn0GCgQEDi2OK/RBgYHjBgIpfovFh8j8YBIgzFGQxuqEgPhaDOT5gOhPkdCxOZeBg+IDFZZiGAgCaSSMYtcRHLgAAAABJRU5ErkJggg==);background-position:left top;background-repeat:no-repeat;background-size:100% 100%;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;position:absolute;top:50%;width:100%}.tp-hplv_m{border-radius:var(--elm-br);border:rgba(255,255,255,.75) solid 2px;box-shadow:0 0 2px rgba(0,0,0,.1);box-sizing:border-box;height:12px;left:50%;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;top:50%;width:12px}.tp-hplv:focus .tp-hplv_m{border-color:#fff}.tp-aplv{cursor:pointer;height:var(--bld-us);outline:none;position:relative;width:100%}.tp-aplv_b{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:4px 4px;background-position:0 0,2px 2px;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;overflow:hidden;position:absolute;top:50%;width:100%}.tp-aplv_c{bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv_m{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:12px 12px;background-position:0 0,6px 6px;border-radius:var(--elm-br);box-shadow:0 0 2px rgba(0,0,0,.1);height:12px;left:50%;margin-left:-6px;margin-top:-6px;overflow:hidden;pointer-events:none;position:absolute;top:50%;width:12px}.tp-aplv_p{border-radius:var(--elm-br);border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv:focus .tp-aplv_p{border-color:#fff}.tp-colswv{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:10px 10px;background-position:0 0,5px 5px;border-radius:var(--elm-br);overflow:hidden}.tp-colswv.tp-v-disabled{opacity:.5}.tp-colswv_sw{border-radius:0}.tp-colswv_b{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;border-width:0;cursor:pointer;display:block;height:var(--bld-us);left:0;margin:0;outline:none;padding:0;position:absolute;top:0;width:var(--bld-us)}.tp-colswv_b:focus::after{border:rgba(255,255,255,.75) solid 2px;border-radius:var(--elm-br);bottom:0;content:"";display:block;left:0;position:absolute;right:0;top:0}.tp-coltxtv{display:flex;width:100%}.tp-coltxtv_m{margin-right:4px}.tp-coltxtv_ms{border-radius:var(--elm-br);color:var(--lbl-fg);cursor:pointer;height:var(--bld-us);line-height:var(--bld-us);padding:0 18px 0 4px}.tp-coltxtv_ms:hover{background-color:var(--in-bg-h)}.tp-coltxtv_ms:focus{background-color:var(--in-bg-f)}.tp-coltxtv_ms:active{background-color:var(--in-bg-a)}.tp-coltxtv_mm{color:var(--lbl-fg)}.tp-coltxtv_w{flex:1}.tp-dfwv{position:absolute;top:8px;right:8px;width:256px}.tp-fldv.tp-fldv-not .tp-fldv_b{display:none}.tp-fldv_t{padding-left:4px}.tp-fldv_c{border-left:var(--cnt-bg) solid 4px}.tp-fldv_b:hover+.tp-fldv_c{border-left-color:var(--cnt-bg-h)}.tp-fldv_b:focus+.tp-fldv_c{border-left-color:var(--cnt-bg-f)}.tp-fldv_b:active+.tp-fldv_c{border-left-color:var(--cnt-bg-a)}.tp-grlv{position:relative}.tp-grlv_g{display:block;height:calc(var(--bld-us)*3)}.tp-grlv_g polyline{fill:none;stroke:var(--mo-fg);stroke-linejoin:round}.tp-grlv_t{margin-top:-4px;transition:left .05s,top .05s;visibility:hidden}.tp-grlv_t.tp-grlv_t-a{visibility:visible}.tp-grlv_t.tp-grlv_t-in{transition:none}.tp-grlv.tp-v-disabled .tp-grlv_g{opacity:.5}.tp-grlv .tp-ttv{background-color:var(--mo-fg)}.tp-grlv .tp-ttv::before{border-top-color:var(--mo-fg)}.tp-lblv{align-items:center;display:flex;line-height:1.3;padding-left:var(--cnt-h-p);padding-right:var(--cnt-h-p)}.tp-lblv.tp-lblv-nol{display:block}.tp-lblv_l{color:var(--lbl-fg);flex:1;-webkit-hyphens:auto;-ms-hyphens:auto;hyphens:auto;overflow:hidden;padding-left:4px;padding-right:16px}.tp-lblv.tp-v-disabled .tp-lblv_l{opacity:.5}.tp-lblv.tp-lblv-nol .tp-lblv_l{display:none}.tp-lblv_v{align-self:flex-start;flex-grow:0;flex-shrink:0;width:160px}.tp-lblv.tp-lblv-nol .tp-lblv_v{width:100%}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m{color:var(--btn-fg)}.tp-sglv_i{padding:0 4px}.tp-sglv.tp-v-disabled .tp-sglv_i{opacity:.5}.tp-mllv_i{display:block;height:calc(var(--bld-us)*3);line-height:var(--bld-us);padding:0 4px;resize:none;white-space:pre}.tp-mllv.tp-v-disabled .tp-mllv_i{opacity:.5}.tp-p2dv{position:relative}.tp-p2dv_h{display:flex}.tp-p2dv_b{height:var(--bld-us);margin-right:4px;position:relative;width:var(--bld-us)}.tp-p2dv_b svg{display:block;height:16px;left:50%;margin-left:-8px;margin-top:-8px;position:absolute;top:50%;width:16px}.tp-p2dv_b svg path{stroke:currentColor;stroke-width:2}.tp-p2dv_b svg circle{fill:currentColor}.tp-p2dv_t{flex:1}.tp-p2dv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-p2dv.tp-p2dv-expanded .tp-p2dv_p{margin-top:var(--bld-s);opacity:1}.tp-p2dv .tp-popv{left:calc(-1*var(--cnt-h-p));right:calc(-1*var(--cnt-h-p));top:var(--bld-us)}.tp-p2dpv{padding-left:calc(var(--bld-us) + 4px)}.tp-p2dpv_p{cursor:crosshair;height:0;overflow:hidden;padding-bottom:100%;position:relative}.tp-p2dpv_g{display:block;height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}.tp-p2dpv_ax{opacity:.1;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_l{opacity:.5;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_m{border:var(--in-fg) solid 1px;border-radius:50%;box-sizing:border-box;height:4px;margin-left:-2px;margin-top:-2px;position:absolute;width:4px}.tp-p2dpv_p:focus .tp-p2dpv_m{background-color:var(--in-fg);border-width:0}.tp-popv{background-color:var(--bs-bg);border-radius:6px;box-shadow:0 2px 4px var(--bs-sh);display:none;max-width:168px;padding:var(--cnt-v-p) var(--cnt-h-p);position:absolute;visibility:hidden;z-index:1000}.tp-popv.tp-popv-v{display:block;visibility:visible}.tp-sprv_r{background-color:var(--grv-fg);border-width:0;display:block;height:2px;margin:0;width:100%}.tp-sldv.tp-v-disabled{opacity:.5}.tp-sldv_t{box-sizing:border-box;cursor:pointer;height:var(--bld-us);margin:0 6px;outline:none;position:relative}.tp-sldv_t::before{background-color:var(--in-bg);border-radius:1px;bottom:0;content:"";display:block;height:2px;left:0;margin:auto;position:absolute;right:0;top:0}.tp-sldv_k{height:100%;left:0;position:absolute;top:0}.tp-sldv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";display:block;height:2px;left:0;margin-bottom:auto;margin-top:auto;position:absolute;right:0;top:0}.tp-sldv_k::after{background-color:var(--btn-bg);border-radius:var(--elm-br);bottom:0;content:"";display:block;height:12px;margin-bottom:auto;margin-top:auto;position:absolute;right:-6px;top:0;width:12px}.tp-sldv_t:hover .tp-sldv_k::after{background-color:var(--btn-bg-h)}.tp-sldv_t:focus .tp-sldv_k::after{background-color:var(--btn-bg-f)}.tp-sldv_t:active .tp-sldv_k::after{background-color:var(--btn-bg-a)}.tp-sldtxtv{display:flex}.tp-sldtxtv_s{flex:2}.tp-sldtxtv_t{flex:1;margin-left:4px}.tp-tabv.tp-v-disabled{opacity:.5}.tp-tabv_i{align-items:flex-end;display:flex;overflow:hidden}.tp-tabv.tp-tabv-nop .tp-tabv_i{height:calc(var(--bld-us) + 4px);position:relative}.tp-tabv.tp-tabv-nop .tp-tabv_i::before{background-color:var(--cnt-bg);bottom:0;content:"";height:2px;left:0;position:absolute;right:0}.tp-tabv_c{border-left:var(--cnt-bg) solid 4px;padding-bottom:var(--cnt-v-p);padding-top:var(--cnt-v-p)}.tp-tbiv{flex:1;min-width:0;position:relative}.tp-tbiv+.tp-tbiv{margin-left:2px}.tp-tbiv+.tp-tbiv::before{background-color:var(--cnt-bg);bottom:0;content:"";height:2px;left:-2px;position:absolute;width:2px}.tp-tbiv_b{background-color:var(--cnt-bg);display:block;padding-left:calc(var(--cnt-h-p) + 4px);padding-right:calc(var(--cnt-h-p) + 4px);width:100%}.tp-tbiv_b:hover{background-color:var(--cnt-bg-h)}.tp-tbiv_b:focus{background-color:var(--cnt-bg-f)}.tp-tbiv_b:active{background-color:var(--cnt-bg-a)}.tp-tbiv_b:disabled{opacity:.5}.tp-tbiv_t{color:var(--cnt-fg);height:calc(var(--bld-us) + 4px);line-height:calc(var(--bld-us) + 4px);opacity:.5;overflow:hidden;text-overflow:ellipsis}.tp-tbiv.tp-tbiv-sel .tp-tbiv_t{opacity:1}.tp-txtv{position:relative}.tp-txtv_i{padding:0 4px}.tp-txtv.tp-txtv-fst .tp-txtv_i{border-bottom-right-radius:0;border-top-right-radius:0}.tp-txtv.tp-txtv-mid .tp-txtv_i{border-radius:0}.tp-txtv.tp-txtv-lst .tp-txtv_i{border-bottom-left-radius:0;border-top-left-radius:0}.tp-txtv.tp-txtv-num .tp-txtv_i{text-align:right}.tp-txtv.tp-txtv-drg .tp-txtv_i{opacity:.3}.tp-txtv_k{cursor:pointer;height:100%;left:-3px;position:absolute;top:0;width:12px}.tp-txtv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";height:calc(var(--bld-us) - 4px);left:50%;margin-bottom:auto;margin-left:-1px;margin-top:auto;opacity:.1;position:absolute;top:0;transition:border-radius .1s,height .1s,transform .1s,width .1s;width:2px}.tp-txtv_k:hover::before,.tp-txtv.tp-txtv-drg .tp-txtv_k::before{opacity:1}.tp-txtv.tp-txtv-drg .tp-txtv_k::before{border-radius:50%;height:4px;transform:translateX(-1px);width:4px}.tp-txtv_g{bottom:0;display:block;height:8px;left:50%;margin:auto;overflow:visible;pointer-events:none;position:absolute;top:0;visibility:hidden;width:100%}.tp-txtv.tp-txtv-drg .tp-txtv_g{visibility:visible}.tp-txtv_gb{fill:none;stroke:var(--in-fg);stroke-dasharray:1}.tp-txtv_gh{fill:none;stroke:var(--in-fg)}.tp-txtv .tp-ttv{margin-left:6px;visibility:hidden}.tp-txtv.tp-txtv-drg .tp-ttv{visibility:visible}.tp-ttv{background-color:var(--in-fg);border-radius:var(--elm-br);color:var(--bs-bg);padding:2px 4px;pointer-events:none;position:absolute;transform:translate(-50%, -100%)}.tp-ttv::before{border-color:var(--in-fg) transparent transparent transparent;border-style:solid;border-width:2px;box-sizing:border-box;content:"";font-size:.9em;height:4px;left:50%;margin-left:-2px;position:absolute;top:100%;width:4px}.tp-rotv{background-color:var(--bs-bg);border-radius:var(--bs-br);box-shadow:0 2px 4px var(--bs-sh);font-family:var(--font-family);font-size:11px;font-weight:500;line-height:1;text-align:left}.tp-rotv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br);border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br);padding-left:calc(4px + var(--bld-us) + var(--cnt-h-p));text-align:center}.tp-rotv.tp-rotv-expanded .tp-rotv_b{border-bottom-left-radius:0;border-bottom-right-radius:0}.tp-rotv.tp-rotv-not .tp-rotv_b{display:none}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_c,.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c .tp-fldv.tp-v-vlst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-right-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst{margin-top:calc(-1*var(--cnt-v-p))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst>.tp-fldv_b{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst{margin-top:calc(-1*var(--cnt-v-p))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst>.tp-tabv_i{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv.tp-v-disabled,.tp-rotv .tp-v-disabled{pointer-events:none}.tp-rotv.tp-v-hidden,.tp-rotv .tp-v-hidden{display:none}'),this.pool_.getAll().forEach(o=>{this.embedPluginStyle_(o)}),this.registerPlugin({plugins:[jv,zv,Zn,qv]})}}const $v=new n("3.1.0");t.BladeApi=i,t.ButtonApi=x,t.FolderApi=Bt,t.InputBindingApi=O,t.ListApi=Yh,t.MonitorBindingApi=le,t.Pane=Kv,t.SeparatorApi=Y,t.SliderApi=Kh,t.TabApi=kt,t.TabPageApi=on,t.TextApi=$h,t.TpChangeEvent=a,t.VERSION=$v,Object.defineProperty(t,"__esModule",{value:!0})})})(pu,pu.exports);var fu={d:(s,e)=>{for(var t in e)fu.o(e,t)&&!fu.o(s,t)&&Object.defineProperty(s,t,{enumerable:!0,get:e[t]})},o:(s,e)=>Object.prototype.hasOwnProperty.call(s,e)},Gm={};fu.d(Gm,{Q:()=>gA});var Bc=function(s,e,t,n){return new(t||(t=Promise))(function(i,r){function a(h){try{c(n.next(h))}catch(d){r(d)}}function l(h){try{c(n.throw(h))}catch(d){r(d)}}function c(h){var d;h.done?i(h.value):(d=h.value,d instanceof t?d:new t(function(f){f(d)})).then(a,l)}c((n=n.apply(s,e||[])).next())})};const Wm=Symbol("Comlink.proxy"),pA=Symbol("Comlink.endpoint"),fA=Symbol("Comlink.releaseProxy"),mu=Symbol("Comlink.thrown"),Ef=s=>typeof s=="object"&&s!==null||typeof s=="function",Xm=new Map([["proxy",{canHandle:s=>Ef(s)&&s[Wm],serialize(s){const{port1:e,port2:t}=new MessageChannel;return jm(s,e),[t,[t]]},deserialize:s=>(s.start(),Ym(s))}],["throw",{canHandle:s=>Ef(s)&&mu in s,serialize({value:s}){let e;return e=s instanceof Error?{isError:!0,value:{message:s.message,name:s.name,stack:s.stack}}:{isError:!1,value:s},[e,[]]},deserialize(s){throw s.isError?Object.assign(new Error(s.value.message),s.value):s.value}}]]);function jm(s,e=self){e.addEventListener("message",function t(n){if(!n||!n.data)return;const{id:i,type:r,path:a}=Object.assign({path:[]},n.data),l=(n.data.argumentList||[]).map(_s);let c;try{const h=a.slice(0,-1).reduce((f,m)=>f[m],s),d=a.reduce((f,m)=>f[m],s);switch(r){case"GET":c=d;break;case"SET":h[a.slice(-1)[0]]=_s(n.data.value),c=!0;break;case"APPLY":c=d.apply(h,l);break;case"CONSTRUCT":c=Ga(new d(...l));break;case"ENDPOINT":{const{port1:f,port2:m}=new MessageChannel;jm(s,m),c=function(g,b){return Km.set(g,b),g}(f,[f])}break;case"RELEASE":c=void 0;break;default:return}}catch(h){c={value:h,[mu]:0}}Promise.resolve(c).catch(h=>({value:h,[mu]:0})).then(h=>{const[d,f]=Hu(h);e.postMessage(Object.assign(Object.assign({},d),{id:i}),f),r==="RELEASE"&&(e.removeEventListener("message",t),qm(e))})}),e.start&&e.start()}function qm(s){(function(e){return e.constructor.name==="MessagePort"})(s)&&s.close()}function Ym(s,e){return gu(s,[],e)}function Ba(s){if(s)throw new Error("Proxy has been released and is not useable")}function gu(s,e=[],t=function(){}){let n=!1;const i=new Proxy(t,{get(r,a){if(Ba(n),a===fA)return()=>ur(s,{type:"RELEASE",path:e.map(l=>l.toString())}).then(()=>{qm(s),n=!0});if(a==="then"){if(e.length===0)return{then:()=>i};const l=ur(s,{type:"GET",path:e.map(c=>c.toString())}).then(_s);return l.then.bind(l)}return gu(s,[...e,a])},set(r,a,l){Ba(n);const[c,h]=Hu(l);return ur(s,{type:"SET",path:[...e,a].map(d=>d.toString()),value:c},h).then(_s)},apply(r,a,l){Ba(n);const c=e[e.length-1];if(c===pA)return ur(s,{type:"ENDPOINT"}).then(_s);if(c==="bind")return gu(s,e.slice(0,-1));const[h,d]=Sf(l);return ur(s,{type:"APPLY",path:e.map(f=>f.toString()),argumentList:h},d).then(_s)},construct(r,a){Ba(n);const[l,c]=Sf(a);return ur(s,{type:"CONSTRUCT",path:e.map(h=>h.toString()),argumentList:l},c).then(_s)}});return i}function Sf(s){const e=s.map(Hu);return[e.map(n=>n[0]),(t=e.map(n=>n[1]),Array.prototype.concat.apply([],t))];var t}const Km=new WeakMap;function Ga(s){return Object.assign(s,{[Wm]:!0})}function Hu(s){for(const[e,t]of Xm)if(t.canHandle(s)){const[n,i]=t.serialize(s);return[{type:"HANDLER",name:e,value:n},i]}return[{type:"RAW",value:s},Km.get(s)||[]]}function _s(s){switch(s.type){case"HANDLER":return Xm.get(s.name).deserialize(s.value);case"RAW":return s.value}}function ur(s,e,t){return new Promise(n=>{const i=new Array(4).fill(0).map(()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16)).join("-");s.addEventListener("message",function r(a){a.data&&a.data.id&&a.data.id===i&&(s.removeEventListener("message",r),n(a.data))}),s.start&&s.start(),s.postMessage(Object.assign({id:i},e),t)})}class mA extends class{}{init(e,t,n,i){if(!this.api){if(!i)throw new Error("workerFilePath is required");(()=>{var r,a,l,c;r=this,a=void 0,c=function*(){const h=yield fetch(i).then(m=>m.blob()),d=URL.createObjectURL(h),f=new Worker(d,{type:"module"});this.api=yield new(Ym(f))(Ga(()=>{e(),URL.revokeObjectURL(d)}),Ga((m,g)=>m==="xatlas_web.wasm"?n:m+g),Ga(t))},new((l=void 0)||(l=Promise))(function(h,d){function f(b){try{g(c.next(b))}catch(M){d(M)}}function m(b){try{g(c.throw(b))}catch(M){d(M)}}function g(b){var M;b.done?h(b.value):(M=b.value,M instanceof l?M:new l(function(x){x(M)})).then(f,m)}g((c=c.apply(r,a||[])).next())})})()}}}class gA extends class{constructor(e,t={resolution:2048},n={},i=!1,r=!1,a=!1){this.THREE=e,this.packOptions=t,this.chartOptions=n,this.useNormals=i,this.timeUnwrap=r,this.logProgress=a,this._libraryLoaded=!1,this._isUnwrapping=!1,this.xAtlas=this._createXAtlas()}loadLibrary(e,t,n){return Bc(this,void 0,void 0,function*(){if(!this._libraryLoaded){for(yield new Promise((i,r)=>{try{this.xAtlas.init(()=>{i()},e,t,n)}catch(a){r(a)}});!this.xAtlas.api||!(yield this.xAtlas.api.loaded);)yield new Promise(i=>setTimeout(i,100));this._libraryLoaded=!0}})}packAtlas(e,t="uv2",n="uv"){return Bc(this,void 0,void 0,function*(){if(!this._libraryLoaded)return console.warn("xatlas-three: library not loaded"),[];if(!e)return[];if(e.length<1)return[];const i=this.chartOptions.useInputMeshUvs;for(;this._isUnwrapping;)console.log("xatlas-three: unwrapping another mesh, waiting 100 ms"),yield new Promise(h=>setTimeout(h,100));this._isUnwrapping=!0,yield this.xAtlas.api.setProgressLogging(this.logProgress),yield this.xAtlas.api.createAtlas();let r=[],a="";for(let h of e){let{uuid:d,index:f,attributes:m}=h;const g=h.userData.worldScale||1;r.push(d),f&&m.position&&m.position.itemSize===3?(a="Mesh"+r.length+" added to atlas: "+d,this.timeUnwrap&&console.time(a),yield this.xAtlas.api.addMesh(f.array,m.position.array,m.normal?m.normal.array:void 0,m.uv?m.uv.array:void 0,d,this.useNormals,i,g),this.timeUnwrap&&console.timeEnd(a)):console.warn("xatlas-three: Geometry not supported: ",h)}a="Generated atlas with "+r.length+" meshes",this.timeUnwrap&&console.time(a);let l=yield this.xAtlas.api.generateAtlas(this.chartOptions,this.packOptions,!0);this.timeUnwrap&&console.timeEnd(a);let c=[];for(let h of l){let d=e.find(f=>f.uuid===h.mesh);d?(h.vertex.vertices&&d.setAttribute("position",new this.THREE.BufferAttribute(h.vertex.vertices,3,!1)),h.vertex.normals&&d.setAttribute("normal",new this.THREE.BufferAttribute(h.vertex.normals,3,!0)),h.vertex.coords1&&d.setAttribute(t,new this.THREE.BufferAttribute(h.vertex.coords1,2,!1)),h.vertex.coords&&t!==n&&d.setAttribute(n,new this.THREE.BufferAttribute(h.vertex.coords,2,!1)),h.index&&d.setIndex(new this.THREE.BufferAttribute(h.index,1,!1)),c.push(d)):console.error("xatlas-three: Mesh not found: ",h.mesh)}return yield this.xAtlas.api.destroyAtlas(),this._isUnwrapping=!1,c})}unwrapGeometry(e,t="uv",n="uv2"){return Bc(this,void 0,void 0,function*(){return this.packAtlas([e],t,n)})}}{_createXAtlas(){return new mA}}var vA=Gm.Q;const Wa=new vA({BufferAttribute:Ct}),_A=async()=>{const s=(e,t)=>{};await Wa.loadLibrary(s,"https://cdn.jsdelivr.net/npm/xatlasjs@0.1.0/dist/xatlas.wasm","https://cdn.jsdelivr.net/npm/xatlasjs@0.1.0/dist/xatlas.js")},xA=async s=>{const e=s.map(t=>t.geometry);Wa.packOptions.padding=16,Wa.packOptions.resolution=4096,await Wa.packAtlas(e,"uv2","uv")},bA=async s=>{for(let e=0;e<s.length;e++){const t=s[e];!t||t.length===0||await xA(t)}},yA=`
    uniform vec2 offset;
    in vec2 uv2;
    out vec4 vWorldPosition;

    void main() {
        vWorldPosition = modelMatrix * vec4(position, 1.0);
        gl_Position = vec4((uv2 + offset) * 2.0 - 1.0, 0.0, 1.0);
    }
`,wA=`
    in vec4 vWorldPosition;
    out vec4 fragColor;

    void main() {
        fragColor = vWorldPosition;
    }
`,MA=new nn({glslVersion:Yn,vertexShader:yA,fragmentShader:wA,side:mn,fog:!1,uniforms:{offset:new ul(new Ae(0,0))}}),EA=`
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
`,SA=`
    in vec4 vNormal;
    out vec4 fragColor;

    void main() {
        // Guard against zero-length normals (degenerate geometry) \u2014 produces (0,0,0,0)
        // so the bake shader can detect the miss instead of generating NaN.
        float len = length(vNormal.xyz);
        fragColor = len > 1e-6 ? vec4(vNormal.xyz / len, vNormal.w) : vec4(0.0);
    }
`,TA=new nn({glslVersion:Yn,vertexShader:EA,fragmentShader:SA,side:mn,fog:!1,uniforms:{offset:new ul(new Ae(0,0))}}),AA=[{x:-2,y:-2},{x:2,y:-2},{x:-2,y:2},{x:2,y:2},{x:-1,y:-2},{x:1,y:-2},{x:-2,y:-1},{x:2,y:-1},{x:-2,y:1},{x:2,y:1},{x:-1,y:2},{x:1,y:2},{x:-2,y:0},{x:2,y:0},{x:0,y:-2},{x:0,y:2},{x:-1,y:-1},{x:1,y:-1},{x:-1,y:0},{x:1,y:0},{x:-1,y:1},{x:1,y:1},{x:0,y:-1},{x:0,y:1},{x:0,y:0}],CA=(s,e,t,n=!0)=>{const i=s.autoClear,r=s.getRenderTarget(),a=new Ve;s.getClearColor(a);const l=s.getClearAlpha(),c=[],h=d=>{const f=new Pn(t,t,{type:ft,magFilter:dt,minFilter:dt});c.push(f);const m=new ai(-100,100,-100,100,-100,200);m.updateMatrix();const g=new mt;g.matrixWorldAutoUpdate=!1;for(const M of e){const x=M.clone();x.material=d,g.add(x)}s.autoClear=!1,s.setRenderTarget(f),s.setClearColor(0,0),s.clear();const b=d.uniforms.offset;if(!b)throw new Error("[baker] atlas material missing `offset` uniform");if(n)for(const M of AA)b.value.x=M.x*(1/t),b.value.y=M.y*(1/t),s.render(g,m);return b.value.x=0,b.value.y=0,s.render(g,m),f.texture};try{const d=h(MA),f=h(TA);return{positionTexture:d,normalTexture:f,dispose:()=>{for(const m of c)m.dispose();c.length=0}}}finally{s.setRenderTarget(r),s.autoClear=i,s.setClearColor(a,l)}};class PA extends nn{constructor(e){const t=new Bm;t.updateFrom(e.bvh),super({transparent:!0,glslVersion:Yn,depthTest:!1,depthWrite:!1,uniforms:{bvh:{value:t},positions:{value:e.positions},normals:{value:e.normals},albedoTex:{value:e.albedoTex},emissiveTex:{value:e.emissiveTex},materialTextureSize:{value:e.materialTextureSize},invModelMatrix:{value:e.invModelMatrix},casts:{value:e.casts},bounces:{value:e.bounces},lightsTex:{value:e.lightsTex},lightCount:{value:e.lightCount},skyColor:{value:e.skyColor},skyIntensity:{value:e.skyIntensity},opacity:{value:1},sampleIndex:{value:0},directLightEnabled:{value:e.directLightEnabled},indirectLightEnabled:{value:e.indirectLightEnabled}},vertexShader:`
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
                ${km}
                ${Vm}

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
            `})}}const RA={point:0,directional:1,spot:2,area:3},kc=4;function LA(s){const e=Math.max(1,s.length),t=new Float32Array(kc*e*4);for(let i=0;i<s.length;i++){const r=s[i],a=i*kc*4;t[a+0]=r.position.x,t[a+1]=r.position.y,t[a+2]=r.position.z,t[a+3]=RA[r.type],t[a+4]=r.direction.x,t[a+5]=r.direction.y,t[a+6]=r.direction.z,t[a+7]=r.params[0],t[a+8]=r.color.r,t[a+9]=r.color.g,t[a+10]=r.color.b,t[a+11]=r.params[1],t[a+12]=r.params[2],t[a+13]=r.params[3],t[a+14]=0,t[a+15]=0}const n=new Cr(t,kc,e,Wt,ft);return n.minFilter=dt,n.magFilter=dt,n.generateMipmaps=!1,n.wrapS=hn,n.wrapT=hn,n.needsUpdate=!0,{texture:n,count:s.length,capacity:e}}function IA(s){s.dispose()}const DA=(s,e,t,n,i)=>{var X,J;const r=LA(i.lights),a=r.texture,l=new PA({bvh:n,invModelMatrix:new He().identity(),positions:e,normals:t,albedoTex:i.albedoTexture,emissiveTex:i.emissiveTexture,materialTextureSize:i.materialTextureSize,casts:i.casts,bounces:(X=i.bounces)!=null?X:1,lightsTex:a,lightCount:r.count,skyColor:i.skyColor,skyIntensity:i.skyIntensity,opacity:1,sampleIndex:0,directLightEnabled:i.directLightEnabled,indirectLightEnabled:i.indirectLightEnabled}),c=new _x(i.resolution,i.resolution,2,{type:ft,minFilter:Tt,magFilter:Tt,generateMipmaps:!1}),h=s.getRenderTarget(),d=new Ve;s.getClearColor(d);const f=s.getClearAlpha();s.setRenderTarget(c),s.setClearColor(0,0),s.clear(),s.setRenderTarget(h),s.setClearColor(d,f);const m=new fe(new kn(2,2),l),g=new ai;let b=0;const M=i.targetSamples|0,x=i.resolution;let v=Math.max(1,Math.min(x,(J=i.tileSize)!=null?J:x)),w=null,y=0;const S=$=>{const ie=Math.ceil(x/$);return{tilesX:ie,tilesY:ie,count:ie*ie}};let C=S(v);const P=l.uniforms.sampleIndex,A=l.uniforms.opacity;if(!P||!A)throw new Error("[baker] LightmapperMaterial missing required uniforms");const I=()=>{const $=performance.now(),ie=s.autoClear,ne=s.getRenderTarget(),me=s.getScissorTest();try{if(s.autoClear=!1,s.setRenderTarget(c),P.value=b,A.value=1/(b+1),v>=x)s.setScissorTest(!1),s.render(m,g);else{const K=y%C.tilesX,se=y/C.tilesX|0,be=K*v,Te=se*v,Ce=Math.min(v,x-be),ye=Math.min(v,x-Te);s.setScissor(be,Te,Ce,ye),s.setScissorTest(!0),s.render(m,g)}}finally{s.setScissorTest(me),s.setRenderTarget(ne),s.autoClear=ie}y++;let pe=!1;return y>=C.count&&(y=0,b++,pe=!0,w!==null&&(v=w,C=S(v),w=null)),{ms:performance.now()-$,sampleCompleted:pe}},B=()=>{if(M>0&&b>=M)return{samples:b,done:!0,sampleComplete:!0,lastDrawMs:0};let $=0;for(;;){const ie=I();if($=ie.ms,ie.sampleCompleted)break}return{samples:b,done:M>0&&b>=M,sampleComplete:!0,lastDrawMs:$}},E=$=>{if(M>0&&b>=M)return{samples:b,done:!0,sampleComplete:!0,lastDrawMs:0};const ie=performance.now()+Math.max(0,$);let ne=0,me=!1;do{const pe=I();if(ne=pe.ms,pe.sampleCompleted&&(me=!0,M>0&&b>=M))break}while(performance.now()<ie);return{samples:b,done:M>0&&b>=M,sampleComplete:me,lastDrawMs:ne}},R=$=>{const ie=Math.max(1,Math.min(x,$|0));ie===v&&w===null||(y===0?(v=ie,C=S(v),w=null):w=ie)},k=()=>{b=0,y=0},W=()=>{IA(a),c.dispose(),l.dispose(),m.geometry.dispose()},[U,G]=c.texture;if(!U||!G)throw new Error("[baker] WebGLMultipleRenderTargets did not allocate 2 textures");const H={direct:U,indirect:G};return{renderTarget:c,textures:H,render:B,renderTiled:E,setTileSize:R,reset:k,dispose:W,get renderTexture(){return c},get texture(){return H.direct}}};class NA extends nn{constructor(e){const t=new Bm;t.updateFrom(e.bvh),super({transparent:!0,glslVersion:Yn,depthTest:!1,depthWrite:!1,uniforms:{bvh:{value:t},positions:{value:e.positions},normals:{value:e.normals},invModelMatrix:{value:e.invModelMatrix},aoSamples:{value:e.aoSamples},ambientDistance:{value:e.ambientDistance},opacity:{value:e.opacity},sampleIndex:{value:e.sampleIndex}},vertexShader:`
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
                ${km}
                ${Vm}

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
            `})}}const Tf=(s,e,t,n,i)=>{var k;const r=new NA({bvh:n,invModelMatrix:new He().identity(),positions:e,normals:t,aoSamples:i.aoSamples,ambientDistance:i.ambientDistance,opacity:1,sampleIndex:0}),a=new Pn(i.resolution,i.resolution,{type:ft,minFilter:Tt,magFilter:Tt,generateMipmaps:!1}),l=s.getRenderTarget(),c=new Ve;s.getClearColor(c);const h=s.getClearAlpha();s.setRenderTarget(a),s.setClearColor(0,0),s.clear(),s.setRenderTarget(l),s.setClearColor(c,h);const d=new fe(new kn(2,2),r),f=new ai;let m=0;const g=i.targetSamples|0,b=i.resolution;let M=Math.max(1,Math.min(b,(k=i.tileSize)!=null?k:b)),x=null,v=0;const w=W=>{const U=Math.ceil(b/W);return{tilesX:U,tilesY:U,count:U*U}};let y=w(M);const S=r.uniforms.sampleIndex,C=r.uniforms.opacity;if(!S||!C)throw new Error("[baker] AOMaterial missing required uniforms");const P=()=>{const W=performance.now(),U=s.autoClear,G=s.getRenderTarget(),H=s.getScissorTest();try{if(s.autoClear=!1,s.setRenderTarget(a),S.value=m,C.value=1/(m+1),M>=b)s.setScissorTest(!1),s.render(d,f);else{const J=v%y.tilesX,$=v/y.tilesX|0,ie=J*M,ne=$*M,me=Math.min(M,b-ie),pe=Math.min(M,b-ne);s.setScissor(ie,ne,me,pe),s.setScissorTest(!0),s.render(d,f)}}finally{s.setScissorTest(H),s.setRenderTarget(G),s.autoClear=U}v++;let X=!1;return v>=y.count&&(v=0,m++,X=!0,x!==null&&(M=x,y=w(M),x=null)),{ms:performance.now()-W,sampleCompleted:X}},A=()=>{if(g>0&&m>=g)return{samples:m,done:!0,sampleComplete:!0,lastDrawMs:0};let W=0;for(;;){const U=P();if(W=U.ms,U.sampleCompleted)break}return{samples:m,done:g>0&&m>=g,sampleComplete:!0,lastDrawMs:W}},I=W=>{if(g>0&&m>=g)return{samples:m,done:!0,sampleComplete:!0,lastDrawMs:0};const U=performance.now()+Math.max(0,W);let G=0,H=!1;do{const X=P();if(G=X.ms,X.sampleCompleted&&(H=!0,g>0&&m>=g))break}while(performance.now()<U);return{samples:m,done:g>0&&m>=g,sampleComplete:H,lastDrawMs:G}},B=W=>{const U=Math.max(1,Math.min(b,W|0));U===M&&x===null||(v===0?(M=U,y=w(M),x=null):x=U)},E=()=>{m=0,v=0},R=()=>{a.dispose(),r.dispose(),d.geometry.dispose()};return{texture:a.texture,render:A,renderTiled:I,setTileSize:B,reset:E,dispose:R}};class UA extends nn{constructor(e){super({glslVersion:Yn,transparent:!1,depthWrite:!1,depthTest:!1,uniforms:{directTex:{value:e.directTex},indirectTex:{value:e.indirectTex},aoTex:{value:e.aoTex},directIntensity:{value:e.directIntensity},giIntensity:{value:e.giIntensity},aoEnabled:{value:e.aoEnabled},aoIntensity:{value:e.aoIntensity},aoExponent:{value:e.aoExponent}},vertexShader:`
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
            `})}}const FA=(s,e,t,n)=>{const i=new Pn(t,t,{type:ft,minFilter:Ya,magFilter:Tt,generateMipmaps:!0}),r=new UA({directTex:e.direct,indirectTex:e.indirect,aoTex:e.ao,directIntensity:n.directIntensity,giIntensity:n.giIntensity,aoEnabled:n.aoEnabled,aoIntensity:n.aoIntensity,aoExponent:n.aoExponent}),a=new fe(new kn(2,2),r),l=new ai,c=r.uniforms,h=d=>{(d==null?void 0:d.directIntensity)!==void 0&&c.directIntensity&&(c.directIntensity.value=d.directIntensity),(d==null?void 0:d.giIntensity)!==void 0&&c.giIntensity&&(c.giIntensity.value=d.giIntensity),(d==null?void 0:d.aoEnabled)!==void 0&&c.aoEnabled&&(c.aoEnabled.value=d.aoEnabled),(d==null?void 0:d.aoIntensity)!==void 0&&c.aoIntensity&&(c.aoIntensity.value=d.aoIntensity),(d==null?void 0:d.aoExponent)!==void 0&&c.aoExponent&&(c.aoExponent.value=d.aoExponent),(d==null?void 0:d.aoTex)!==void 0&&c.aoTex&&(c.aoTex.value=d.aoTex);const f=s.getRenderTarget(),m=s.autoClear;try{s.autoClear=!0,s.setRenderTarget(i),s.render(a,l)}finally{s.setRenderTarget(f),s.autoClear=m}};return h(),{texture:i.texture,refresh:h,dispose:()=>{i.dispose(),r.dispose(),a.geometry.dispose()}}};class OA extends nn{constructor(e={}){var t,n,i;super({glslVersion:Yn,blending:Bn,transparent:!1,depthWrite:!1,depthTest:!1,uniforms:{map:{value:(t=e.map)!=null?t:null},positions:{value:(n=e.positions)!=null?n:null},resolution:{value:(i=e.resolution)!=null?i:1024}},vertexShader:`
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
            `})}}class BA extends nn{constructor(e){var t,n,i;super({blending:Bn,transparent:!1,depthWrite:!1,depthTest:!1,defines:{USE_SLIDER:0},uniforms:{sigma:{value:(t=e.sigma)!=null?t:5},threshold:{value:(n=e.threshold)!=null?n:.03},kSigma:{value:(i=e.kSigma)!=null?i:1},map:{value:e.map}},vertexShader:`
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
			`})}}const Af=new fe(new kn(2,2)),kA=new ai,VA=async(s,e,t,n,i,r)=>{var y,S,C;const a=()=>new Pn(n,n,{type:ft,minFilter:Ya,magFilter:Tt,generateMipmaps:!0}),l=a(),c=a(),h=(P,A)=>{const I=s.getRenderTarget();try{Af.material=P,s.setRenderTarget(A),s.render(Af,kA)}finally{s.setRenderTarget(I)}},d=new OA({positions:t,resolution:n});let f=l,m=c,g=e;const b=Math.max(0,i.dilationIterations)+(i.denoiseEnabled?1:0);let M=0;const x=d.uniforms.map;if(!x)throw new Error("[baker] DilationMaterial missing `map` uniform");for(let P=0;P<Math.max(0,i.dilationIterations);P++){x.value=g,h(d,m),g=m.texture;const A=f;f=m,m=A,M++,r==null||r(M/b),await new Promise(I=>requestAnimationFrame(I))}if(i.denoiseEnabled){const P=new BA({map:g,sigma:i.denoiseSigma,threshold:i.denoiseThreshold,kSigma:i.denoiseKSigma});h(P,m),g=m.texture,P.dispose();const A=f;f=m,m=A,M++,r==null||r(M/b),await new Promise(I=>requestAnimationFrame(I))}d.dispose();const v=i.dilationIterations>0||i.denoiseEnabled,w=v?f.texture:e;if(v){const P=Math.max(0,Math.floor(n/2)-2),A=new Float32Array(4*4*4);s.readRenderTargetPixels(f,P,P,4,4,A);let I=0,B=0,E=0;for(let R=0;R<16;R++)I+=(y=A[R*4])!=null?y:0,B+=(S=A[R*4+1])!=null?S:0,E+=(C=A[R*4+2])!=null?C:0}return{texture:w,dispose:()=>{l.dispose(),c.dispose()}}};class tl extends Error{constructor(e,t,n){super(`[baker:${t}] ${e}${n?` (mesh: ${n})`:""}`),this.name="BakeError",this.phase=t,this.meshName=n}}const zA=s=>{const e=s.map((t,n)=>{const i=t.geometry.clone();i.deleteAttribute("color"),i.applyMatrix4(t.matrixWorld);const r=i.attributes.position;if(!r)throw new tl("mesh geometry has no position attribute","geometry",t.name);const a=r.count,l=new Float32Array(a);return l.fill(n),i.setAttribute("meshIndex",new Ct(l,1)),i});return RT(e)},HA=s=>{const e=s.geometry;if(e.index)return e.index.count/3;const t=e.attributes.position;if(!t)throw new tl("mesh geometry missing position attribute","geometry",s.name);return t.count/3},vu={aR:1,aG:1,aB:1,eR:0,eG:0,eB:0},$m=s=>{var t;if(Array.isArray(s)){console.warn("[baker] material array detected; using slot 0 only \u2014 per-face material groups not yet supported");const n=s[0];return n?$m(n):vu}const e=s;if("emissive"in e&&e.emissive){const n=(t=e.emissiveIntensity)!=null?t:1;return{aR:e.color.r,aG:e.color.g,aB:e.color.b,eR:e.emissive.r*n,eG:e.emissive.g*n,eB:e.emissive.b*n}}return"color"in e&&e.color?{aR:e.color.r,aG:e.color.g,aB:e.color.b,eR:0,eG:0,eB:0}:(console.warn("[baker] material has no .color (likely ShaderMaterial); defaulting to white albedo"),vu)},GA=(s,e)=>{var f,m,g;const t=s.index;if(!t)throw new tl("mergeGeometry must produce an indexed geometry; got non-indexed","geometry");const n=s.attributes.meshIndex;if(!n)throw new tl("merged geometry is missing 'meshIndex' attribute \u2014 did mergeGeometry skip the per-vertex tag?","geometry");const i=e.map(HA),r=t.count/3,a=new Float32Array(r*3),l=new Float32Array(r*3),c=e.map(b=>$m(b.material)),h=t.array,d=n.array;for(let b=0;b<r;b++){const M=(f=h[b*3])!=null?f:0,x=((m=d[M])!=null?m:0)|0,v=(g=c[x])!=null?g:vu,w=b*3;a[w]=v.aR,a[w+1]=v.aG,a[w+2]=v.aB,l[w]=v.eR,l[w+1]=v.eG,l[w+2]=v.eB}return{albedo:a,emissive:l,totalTriangles:r,perMeshTriangleCounts:i}},Cf=(s,e)=>{const t=new Cr(s,e,e,Wt,ft);return t.minFilter=dt,t.magFilter=dt,t.wrapS=hn,t.wrapT=hn,t.generateMipmaps=!1,t.needsUpdate=!0,t},WA=s=>{var a,l,c,h,d,f;const e=s.totalTriangles,t=Math.max(1,Math.ceil(Math.sqrt(e))),n=t*t,i=new Float32Array(n*4),r=new Float32Array(n*4);for(let m=0;m<e;m++){const g=m*3,b=m*4;i[b]=(a=s.albedo[g])!=null?a:0,i[b+1]=(l=s.albedo[g+1])!=null?l:0,i[b+2]=(c=s.albedo[g+2])!=null?c:0,i[b+3]=1,r[b]=(h=s.emissive[g])!=null?h:0,r[b+1]=(d=s.emissive[g+1])!=null?d:0,r[b+2]=(f=s.emissive[g+2])!=null?f:0,r[b+3]=1}return{albedoTexture:Cf(i,t),emissiveTexture:Cf(r,t),side:t}},Vc=new D,Pf=new D,Rf=new D,Lf=new D,If=new D,Df=new D;function XA(s){const e=s.geometry,t=e.attributes.position;if(!t)return 0;const n=s.matrixWorld;let i=0;const r=(a,l,c)=>(Vc.fromBufferAttribute(t,a).applyMatrix4(n),Pf.fromBufferAttribute(t,l).applyMatrix4(n),Rf.fromBufferAttribute(t,c).applyMatrix4(n),Lf.subVectors(Pf,Vc),If.subVectors(Rf,Vc),Df.crossVectors(Lf,If),Df.length()*.5);if(e.index){const a=e.index.array;for(let l=0;l<a.length;l+=3)i+=r(a[l],a[l+1],a[l+2])}else for(let a=0;a<t.count;a+=3)i+=r(a,a+1,a+2);return i}function jA(s,e){var h;const t=(h=e.fillRatio)!=null?h:.95,n=e.atlasResolution*e.atlasResolution,i=e.texelsPerMeter*e.texelsPerMeter,a=[...s.map((d,f)=>{var x,v;const m=XA(d),g=(v=(x=e.perMeshScale)==null?void 0:x[d.uuid])!=null?v:1,b=m*i*g*g,M=n>0?b/n:0;return{mesh:d,inputIdx:f,surfaceArea:m,uvFraction:M}})].sort((d,f)=>f.uvFraction-d.uvFraction),l=[],c=new Array(s.length);for(const d of a){let f=d.uvFraction;if(f>t){const g=d.mesh.name||`Mesh ${d.inputIdx+1} (${d.mesh.geometry.type.replace("Geometry","")})`;console.warn(`[baker] mesh "${g}" wants ${(f*100).toFixed(0)}% of one ${e.atlasResolution}\xB2 atlas at ${e.texelsPerMeter} texels/m \u2014 clamping to ${(t*100).toFixed(0)}% (effective density reduced)`),f=t}let m=-1;for(let g=0;g<l.length;g++)if(l[g]+f<=t){l[g]=l[g]+f,m=g;break}m<0&&(m=l.length,l.push(f)),c[d.inputIdx]={atlasIdx:m,mesh:d.mesh,uvFraction:f,surfaceArea:d.surfaceArea}}return c}/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.6.9
*/var Nf=function(s){return URL.createObjectURL(new Blob([s],{type:"text/javascript"}))};try{URL.revokeObjectURL(Nf(""))}catch{Nf=function(e){return"data:application/javascript;charset=UTF-8,"+encodeURI(e)}}var oi=Uint8Array,_n=Uint16Array,Lo=Uint32Array,Gu=new oi([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Wu=new oi([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Uf=new oi([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Zm=function(s,e){for(var t=new _n(31),n=0;n<31;++n)t[n]=e+=1<<s[n-1];for(var i=new Lo(t[30]),n=1;n<30;++n)for(var r=t[n];r<t[n+1];++r)i[r]=r-t[n]<<5|n;return[t,i]},Qm=Zm(Gu,2),qA=Qm[0],_u=Qm[1];qA[28]=258,_u[258]=28;var YA=Zm(Wu,0),Ff=YA[1],xu=new _n(32768);for(var At=0;At<32768;++At){var ji=(At&43690)>>>1|(At&21845)<<1;ji=(ji&52428)>>>2|(ji&13107)<<2,ji=(ji&61680)>>>4|(ji&3855)<<4,xu[At]=((ji&65280)>>>8|(ji&255)<<8)>>>1}var Ao=function(s,e,t){for(var n=s.length,i=0,r=new _n(e);i<n;++i)++r[s[i]-1];var a=new _n(e);for(i=0;i<e;++i)a[i]=a[i-1]+r[i-1]<<1;var l;if(t){l=new _n(1<<e);var c=15-e;for(i=0;i<n;++i)if(s[i])for(var h=i<<4|s[i],d=e-s[i],f=a[s[i]-1]++<<d,m=f|(1<<d)-1;f<=m;++f)l[xu[f]>>>c]=h}else for(l=new _n(n),i=0;i<n;++i)s[i]&&(l[i]=xu[a[s[i]-1]++]>>>15-s[i]);return l},Ss=new oi(288);for(var At=0;At<144;++At)Ss[At]=8;for(var At=144;At<256;++At)Ss[At]=9;for(var At=256;At<280;++At)Ss[At]=7;for(var At=280;At<288;++At)Ss[At]=8;var nl=new oi(32);for(var At=0;At<32;++At)nl[At]=5;var KA=Ao(Ss,9,0),$A=Ao(nl,5,0),Jm=function(s){return(s/8|0)+(s&7&&1)},ZA=function(s,e,t){(e==null||e<0)&&(e=0),(t==null||t>s.length)&&(t=s.length);var n=new(s instanceof _n?_n:s instanceof Lo?Lo:oi)(t-e);return n.set(s.subarray(e,t)),n},bi=function(s,e,t){t<<=e&7;var n=e/8|0;s[n]|=t,s[n+1]|=t>>>8},go=function(s,e,t){t<<=e&7;var n=e/8|0;s[n]|=t,s[n+1]|=t>>>8,s[n+2]|=t>>>16},zc=function(s,e){for(var t=[],n=0;n<s.length;++n)s[n]&&t.push({s:n,f:s[n]});var i=t.length,r=t.slice();if(!i)return[Xu,0];if(i==1){var a=new oi(t[0].s+1);return a[t[0].s]=1,[a,1]}t.sort(function(C,P){return C.f-P.f}),t.push({s:-1,f:25001});var l=t[0],c=t[1],h=0,d=1,f=2;for(t[0]={s:-1,f:l.f+c.f,l,r:c};d!=i-1;)l=t[t[h].f<t[f].f?h++:f++],c=t[h!=d&&t[h].f<t[f].f?h++:f++],t[d++]={s:-1,f:l.f+c.f,l,r:c};for(var m=r[0].s,n=1;n<i;++n)r[n].s>m&&(m=r[n].s);var g=new _n(m+1),b=bu(t[d-1],g,0);if(b>e){var n=0,M=0,x=b-e,v=1<<x;for(r.sort(function(P,A){return g[A.s]-g[P.s]||P.f-A.f});n<i;++n){var w=r[n].s;if(g[w]>e)M+=v-(1<<b-g[w]),g[w]=e;else break}for(M>>>=x;M>0;){var y=r[n].s;g[y]<e?M-=1<<e-g[y]++-1:++n}for(;n>=0&&M;--n){var S=r[n].s;g[S]==e&&(--g[S],++M)}b=e}return[new oi(g),b]},bu=function(s,e,t){return s.s==-1?Math.max(bu(s.l,e,t+1),bu(s.r,e,t+1)):e[s.s]=t},Of=function(s){for(var e=s.length;e&&!s[--e];);for(var t=new _n(++e),n=0,i=s[0],r=1,a=function(c){t[n++]=c},l=1;l<=e;++l)if(s[l]==i&&l!=e)++r;else{if(!i&&r>2){for(;r>138;r-=138)a(32754);r>2&&(a(r>10?r-11<<5|28690:r-3<<5|12305),r=0)}else if(r>3){for(a(i),--r;r>6;r-=6)a(8304);r>2&&(a(r-3<<5|8208),r=0)}for(;r--;)a(i);r=1,i=s[l]}return[t.subarray(0,n),e]},vo=function(s,e){for(var t=0,n=0;n<e.length;++n)t+=s[n]*e[n];return t},Xa=function(s,e,t){var n=t.length,i=Jm(e+2);s[i]=n&255,s[i+1]=n>>>8,s[i+2]=s[i]^255,s[i+3]=s[i+1]^255;for(var r=0;r<n;++r)s[i+r+4]=t[r];return(i+4+n)*8},Bf=function(s,e,t,n,i,r,a,l,c,h,d){bi(e,d++,t),++i[256];for(var f=zc(i,15),m=f[0],g=f[1],b=zc(r,15),M=b[0],x=b[1],v=Of(m),w=v[0],y=v[1],S=Of(M),C=S[0],P=S[1],A=new _n(19),I=0;I<w.length;++I)A[w[I]&31]++;for(var I=0;I<C.length;++I)A[C[I]&31]++;for(var B=zc(A,7),E=B[0],R=B[1],k=19;k>4&&!E[Uf[k-1]];--k);var W=h+5<<3,U=vo(i,Ss)+vo(r,nl)+a,G=vo(i,m)+vo(r,M)+a+14+3*k+vo(A,E)+(2*A[16]+3*A[17]+7*A[18]);if(W<=U&&W<=G)return Xa(e,d,s.subarray(c,c+h));var H,X,J,$;if(bi(e,d,1+(G<U)),d+=2,G<U){H=Ao(m,g,0),X=m,J=Ao(M,x,0),$=M;var ie=Ao(E,R,0);bi(e,d,y-257),bi(e,d+5,P-1),bi(e,d+10,k-4),d+=14;for(var I=0;I<k;++I)bi(e,d+3*I,E[Uf[I]]);d+=3*k;for(var ne=[w,C],me=0;me<2;++me)for(var pe=ne[me],I=0;I<pe.length;++I){var K=pe[I]&31;bi(e,d,ie[K]),d+=E[K],K>15&&(bi(e,d,pe[I]>>>5&127),d+=pe[I]>>>12)}}else H=KA,X=Ss,J=$A,$=nl;for(var I=0;I<l;++I)if(n[I]>255){var K=n[I]>>>18&31;go(e,d,H[K+257]),d+=X[K+257],K>7&&(bi(e,d,n[I]>>>23&31),d+=Gu[K]);var se=n[I]&31;go(e,d,J[se]),d+=$[se],se>3&&(go(e,d,n[I]>>>5&8191),d+=Wu[se])}else go(e,d,H[n[I]]),d+=X[n[I]];return go(e,d,H[256]),d+X[256]},QA=new Lo([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),Xu=new oi(0),JA=function(s,e,t,n,i,r){var a=s.length,l=new oi(n+a+5*(1+Math.ceil(a/7e3))+i),c=l.subarray(n,l.length-i),h=0;if(!e||a<8)for(var d=0;d<=a;d+=65535){var f=d+65535;f<a?h=Xa(c,h,s.subarray(d,f)):(c[d]=r,h=Xa(c,h,s.subarray(d,a)))}else{for(var m=QA[e-1],g=m>>>13,b=m&8191,M=(1<<t)-1,x=new _n(32768),v=new _n(M+1),w=Math.ceil(t/3),y=2*w,S=function(Pe){return(s[Pe]^s[Pe+1]<<w^s[Pe+2]<<y)&M},C=new Lo(25e3),P=new _n(288),A=new _n(32),I=0,B=0,d=0,E=0,R=0,k=0;d<a;++d){var W=S(d),U=d&32767,G=v[W];if(x[U]=G,v[W]=U,R<=d){var H=a-d;if((I>7e3||E>24576)&&H>423){h=Bf(s,c,0,C,P,A,B,E,k,d-k,h),E=I=B=0,k=d;for(var X=0;X<286;++X)P[X]=0;for(var X=0;X<30;++X)A[X]=0}var J=2,$=0,ie=b,ne=U-G&32767;if(H>2&&W==S(d-ne))for(var me=Math.min(g,H)-1,pe=Math.min(32767,d),K=Math.min(258,H);ne<=pe&&--ie&&U!=G;){if(s[d+J]==s[d+J-ne]){for(var se=0;se<K&&s[d+se]==s[d+se-ne];++se);if(se>J){if(J=se,$=ne,se>me)break;for(var be=Math.min(ne,se-2),Te=0,X=0;X<be;++X){var Ce=d-ne+X+32768&32767,ye=x[Ce],Ge=Ce-ye+32768&32767;Ge>Te&&(Te=Ge,G=Ce)}}}U=G,G=x[U],ne+=U-G+32768&32767}if($){C[E++]=268435456|_u[J]<<18|Ff[$];var Be=_u[J]&31,q=Ff[$]&31;B+=Gu[Be]+Wu[q],++P[257+Be],++A[q],R=d+J,++I}else C[E++]=s[d],++P[s[d]]}}h=Bf(s,c,r,C,P,A,B,E,k,d-k,h),!r&&h&7&&(h=Xa(c,h+1,Xu))}return ZA(l,0,n+Jm(h)+i)},e1=function(){var s=1,e=0;return{p:function(t){for(var n=s,i=e,r=t.length,a=0;a!=r;){for(var l=Math.min(a+2655,r);a<l;++a)i+=n+=t[a];n=(n&65535)+15*(n>>16),i=(i&65535)+15*(i>>16)}s=n,e=i},d:function(){return s%=65521,e%=65521,(s&255)<<24|s>>>8<<16|(e&255)<<8|e>>>8}}},t1=function(s,e,t,n,i){return JA(s,e.level==null?6:e.level,e.mem==null?Math.ceil(Math.max(8,Math.min(13,Math.log(s.length)))*1.5):12+e.mem,t,n,!i)},n1=function(s,e,t){for(;t;++e)s[e]=t,t>>>=8},i1=function(s,e){var t=e.level,n=t==0?0:t<6?1:t==9?3:2;s[0]=120,s[1]=n<<6|(n?32-2*n:1)};function s1(s,e){e||(e={});var t=e1();t.p(s);var n=t1(s,e,2,4);return i1(n,e),n1(n,n.length-4,t.d()),n}var r1=typeof TextDecoder!="undefined"&&new TextDecoder,o1=0;try{r1.decode(Xu,{stream:!0}),o1=1}catch{}const a1=new TextEncoder,eg=3;class l1{parse(e,t,n){if(!e||!(e.isWebGLRenderer||e.isDataTexture))throw Error("EXRExporter.parse: Unsupported first parameter, expected instance of WebGLRenderer or DataTexture.");if(e.isWebGLRenderer){const i=e,r=t,a=n;c1(r);const l=h1(r,a),c=p1(i,r,l),h=kf(c,l),d=Vf(h,l);return zf(d,l)}else if(e.isDataTexture){const i=e,r=t;u1(i);const a=d1(i,r),l=i.image.data,c=kf(l,a),h=Vf(c,a);return zf(h,a)}}}function c1(s){if(!s||!s.isWebGLRenderTarget)throw Error("EXRExporter.parse: Unsupported second parameter, expected instance of WebGLRenderTarget.");if(s.isWebGLCubeRenderTarget||s.isWebGL3DRenderTarget||s.isWebGLArrayRenderTarget)throw Error("EXRExporter.parse: Unsupported render target type, expected instance of WebGLRenderTarget.");if(s.texture.type!==ft&&s.texture.type!==si)throw Error("EXRExporter.parse: Unsupported WebGLRenderTarget texture type.");if(s.texture.format!==Wt)throw Error("EXRExporter.parse: Unsupported WebGLRenderTarget texture format, expected RGBAFormat.")}function u1(s){if(s.type!==ft&&s.type!==si)throw Error("EXRExporter.parse: Unsupported DataTexture texture type.");if(s.format!==Wt)throw Error("EXRExporter.parse: Unsupported DataTexture texture format, expected RGBAFormat.");if(!s.image.data)throw Error("EXRExporter.parse: Invalid DataTexture image data.");if(s.type===ft&&s.image.data.constructor.name!=="Float32Array")throw Error("EXRExporter.parse: DataTexture image data doesn't match type, expected 'Float32Array'.");if(s.type===si&&s.image.data.constructor.name!=="Uint16Array")throw Error("EXRExporter.parse: DataTexture image data doesn't match type, expected 'Uint16Array'.")}function h1(s,e={}){const t={0:1,2:1,3:16},n=s.width,i=s.height,r=s.texture.type,a=s.texture.format,l=e.compression!==void 0?e.compression:eg,c=e.type!==void 0?e.type:si,h=c===ft?2:1,d=t[l],f=4;return{width:n,height:i,type:r,format:a,compression:l,blockLines:d,dataType:h,dataSize:2*h,numBlocks:Math.ceil(i/d),numInputChannels:4,numOutputChannels:f}}function d1(s,e={}){const t={0:1,2:1,3:16},n=s.image.width,i=s.image.height,r=s.type,a=s.format,l=e.compression!==void 0?e.compression:eg,c=e.type!==void 0?e.type:si,h=c===ft?2:1,d=t[l],f=4;return{width:n,height:i,type:r,format:a,compression:l,blockLines:d,dataType:h,dataSize:2*h,numBlocks:Math.ceil(i/d),numInputChannels:4,numOutputChannels:f}}function p1(s,e,t){let n;return t.type===ft?n=new Float32Array(t.width*t.height*t.numInputChannels):n=new Uint16Array(t.width*t.height*t.numInputChannels),s.readRenderTargetPixels(e,0,0,t.width,t.height,n),n}function kf(s,e){const t=e.width,n=e.height,i={r:0,g:0,b:0,a:0},r={value:0},a=e.numOutputChannels==4?1:0,l=e.type==ft?w1:y1,c=e.dataType==1?_1:yu,h=new Uint8Array(e.width*e.height*e.numOutputChannels*e.dataSize),d=new DataView(h.buffer);for(let f=0;f<n;++f)for(let m=0;m<t;++m){const g=f*t*4+m*4,b=l(s,g),M=l(s,g+1),x=l(s,g+2),v=l(s,g+3),w=(n-f-1)*t*(3+a)*e.dataSize;v1(i,b,M,x,v),r.value=w+m*e.dataSize,c(d,i.a,r),r.value=w+a*t*e.dataSize+m*e.dataSize,c(d,i.b,r),r.value=w+(1+a)*t*e.dataSize+m*e.dataSize,c(d,i.g,r),r.value=w+(2+a)*t*e.dataSize+m*e.dataSize,c(d,i.r,r)}return h}function Vf(s,e){let t,n,i=0;const r={data:new Array,totalSize:0},a=e.width*e.numOutputChannels*e.blockLines*e.dataSize;switch(e.compression){case 0:t=f1;break;case 2:case 3:t=m1;break}e.compression!==0&&(n=new Uint8Array(a));for(let l=0;l<e.numBlocks;++l){const c=s.subarray(a*l,a*(l+1)),h=t(c,n);i+=h.length,r.data.push({dataChunk:h,size:h.length})}return r.totalSize=i,r}function f1(s){return s}function m1(s,e){let t=0,n=Math.floor((s.length+1)/2),i=0;const r=s.length-1;for(;!(i>r||(e[t++]=s[i++],i>r));)e[n++]=s[i++];let a=e[0];for(let c=1;c<e.length;c++){const h=e[c]-a+384;a=e[c],e[c]=h}return s1(e)}function g1(s,e,t){const n={value:0},i=new DataView(s.buffer);lt(i,20000630,n),lt(i,2,n),Ht(i,"compression",n),Ht(i,"compression",n),lt(i,1,n),yo(i,t.compression,n),Ht(i,"screenWindowCenter",n),Ht(i,"v2f",n),lt(i,8,n),lt(i,0,n),lt(i,0,n),Ht(i,"screenWindowWidth",n),Ht(i,"float",n),lt(i,4,n),yu(i,1,n),Ht(i,"pixelAspectRatio",n),Ht(i,"float",n),lt(i,4,n),yu(i,1,n),Ht(i,"lineOrder",n),Ht(i,"lineOrder",n),lt(i,1,n),yo(i,0,n),Ht(i,"dataWindow",n),Ht(i,"box2i",n),lt(i,16,n),lt(i,0,n),lt(i,0,n),lt(i,t.width-1,n),lt(i,t.height-1,n),Ht(i,"displayWindow",n),Ht(i,"box2i",n),lt(i,16,n),lt(i,0,n),lt(i,0,n),lt(i,t.width-1,n),lt(i,t.height-1,n),Ht(i,"channels",n),Ht(i,"chlist",n),lt(i,t.numOutputChannels*18+1,n),Ht(i,"A",n),lt(i,t.dataType,n),n.value+=4,lt(i,1,n),lt(i,1,n),Ht(i,"B",n),lt(i,t.dataType,n),n.value+=4,lt(i,1,n),lt(i,1,n),Ht(i,"G",n),lt(i,t.dataType,n),n.value+=4,lt(i,1,n),lt(i,1,n),Ht(i,"R",n),lt(i,t.dataType,n),n.value+=4,lt(i,1,n),lt(i,1,n),yo(i,0,n),yo(i,0,n);let r=n.value+t.numBlocks*8;for(let a=0;a<e.data.length;++a)x1(i,r,n),r+=e.data[a].size+8}function zf(s,e){const t=e.numBlocks*8,n=259+18*e.numOutputChannels,i={value:n+t},r=new Uint8Array(n+t+s.totalSize+e.numBlocks*8),a=new DataView(r.buffer);g1(r,s,e);for(let l=0;l<s.data.length;++l){const c=s.data[l].dataChunk,h=s.data[l].size;lt(a,l*e.blockLines,i),lt(a,h,i),r.set(c,i.value),i.value+=h}return r}function v1(s,e,t,n,i){s.r=e,s.g=t,s.b=n,s.a=i}function yo(s,e,t){s.setUint8(t.value,e),t.value+=1}function lt(s,e,t){s.setUint32(t.value,e,!0),t.value+=4}function _1(s,e,t){s.setUint16(t.value,Lx.toHalfFloat(e),!0),t.value+=2}function yu(s,e,t){s.setFloat32(t.value,e,!0),t.value+=4}function x1(s,e,t){s.setBigUint64(t.value,BigInt(e),!0),t.value+=8}function Ht(s,e,t){const n=a1.encode(e+"\0");for(let i=0;i<n.length;++i)yo(s,n[i],t)}function b1(s){const e=(s&31744)>>10,t=s&1023;return(s>>15?-1:1)*(e?e===31?t?NaN:1/0:Math.pow(2,e-15)*(1+t/1024):6103515625e-14*(t/1024))}function y1(s,e){return b1(s[e])}function w1(s,e){return s[e]}const Hf=new fe(new kn(2,2)),M1=new ai,Gf=new nn({glslVersion:Yn,blending:Bn,transparent:!1,depthWrite:!1,depthTest:!1,uniforms:{map:{value:null}},vertexShader:`
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
    `});function ju(s,e,t){const n=new Pn(t,t,{type:ft,minFilter:Tt,magFilter:Tt}),i=Gf.uniforms.map;if(!i)throw new Error("[baker] export passthrough material missing `map` uniform");i.value=e,Hf.material=Gf;const r=s.getRenderTarget(),a=s.autoClear;try{s.autoClear=!0,s.setRenderTarget(n),s.render(Hf,M1)}finally{s.setRenderTarget(r),s.autoClear=a}return n}function qu(s,e){const t=URL.createObjectURL(s),n=document.createElement("a");n.href=t,n.download=e,document.body.appendChild(n),n.click(),n.remove(),setTimeout(()=>URL.revokeObjectURL(t),0)}const Yu=(s,e)=>s.toLowerCase().endsWith(`.${e}`)?s:`${s}.${e}`;async function E1(s,e,t,n){var h,d,f;const i=ju(s,e,t),r=new Float32Array(t*t*4);s.readRenderTargetPixels(i,0,0,t,t,r),i.dispose();const a=new Uint8ClampedArray(t*t*4);for(let m=0;m<t;m++){const g=(t-1-m)*t*4,b=m*t*4;for(let M=0;M<t;M++){const x=g+M*4,v=b+M*4,w=Math.max((h=r[x])!=null?h:0,0),y=Math.max((d=r[x+1])!=null?d:0,0),S=Math.max((f=r[x+2])!=null?f:0,0);a[v]=Math.pow(w/(1+w),1/2.2)*255,a[v+1]=Math.pow(y/(1+y),1/2.2)*255,a[v+2]=Math.pow(S/(1+S),1/2.2)*255,a[v+3]=255}}const l=document.createElement("canvas");l.width=t,l.height=t;const c=l.getContext("2d");if(!c)throw new Error("exportPNG: 2D context unavailable");c.putImageData(new ImageData(a,t,t),0,0),await new Promise((m,g)=>{l.toBlob(b=>{if(!b){g(new Error("exportPNG: toBlob returned null"));return}qu(b,Yu(n,"png")),m()},"image/png")})}function S1(s,e,t,n){const i=ju(s,e,t),r=new l1().parse(s,i);i.dispose(),qu(new Blob([r],{type:"image/x-exr"}),Yu(n,"exr"))}function T1(s,e,t,n){const i=ju(s,e,t),r=new Float32Array(t*t*4);s.readRenderTargetPixels(i,0,0,t,t,r),i.dispose(),qu(new Blob([r.buffer],{type:"application/octet-stream"}),Yu(n,"bin"))}async function A1(s,e,t,n,i){switch(i){case"png":await E1(s,e,t,n);return;case"exr":S1(s,e,t,n);return;case"bin":T1(s,e,t,n);return}}const hr=22;class C1{constructor(e={}){var t,n,i,r;this.visible=!0,this.collapsed=!1,this.headerEl=null,this.layerLabel="",this.textures=null,this.prevScissor=new _t,this.prevViewport=new _t,this.size=(t=e.size)!=null?t:256,this.margin=(n=e.margin)!=null?n:20,this.corner=(i=e.corner)!=null?i:"br",this.mat=new nn({glslVersion:Yn,blending:Bn,transparent:!1,depthTest:!1,depthWrite:!1,uniforms:{map:{value:null},sRGB:{value:(r=e.sRGB)!=null?r:!0},border:{value:.006}},vertexShader:`
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
            `}),this.scene=new Mm,this.cam=new ai,this.quad=new fe(new kn(2,2),this.mat),this.scene.add(this.quad)}setTexture(e){this.mat.uniforms.map&&(this.mat.uniforms.map.value=e),this.textures=null}setTextures(e){this.textures=e&&e.length>0?e:null}setSRGB(e){this.mat.uniforms.sRGB&&(this.mat.uniforms.sRGB.value=e)}setSize(e){this.size=e}setMargin(e){this.margin=e}setCorner(e){this.corner=e}setCollapsed(e){this.collapsed=e,this.refreshHeaderText()}setLayerLabel(e){this.layerLabel=e,this.refreshHeaderText()}attachHeader(e=document.body){if(this.headerEl)return;const t=document.createElement("div");Object.assign(t.style,{position:"absolute",boxSizing:"border-box",fontFamily:"monospace",fontSize:"11px",color:"#ddd",backgroundColor:"rgba(0,0,0,0.78)",padding:"4px 8px",cursor:"pointer",userSelect:"none",border:"1px solid #444",borderRadius:"3px",zIndex:"50",display:"none",lineHeight:`${hr-10}px`}),t.addEventListener("click",()=>this.setCollapsed(!this.collapsed)),e.appendChild(t),this.headerEl=t,this.refreshHeaderText()}detachHeader(){var e;(e=this.headerEl)==null||e.remove(),this.headerEl=null}refreshHeaderText(){if(!this.headerEl)return;const e=this.collapsed?"\u25B8":"\u25BE",t=this.layerLabel?` \xB7 ${this.layerLabel}`:"";this.headerEl.innerText=`${e} Atlas Viewer${t}`}positionHeader(e){if(!this.headerEl)return;if(!this.visible){this.headerEl.style.display="none";return}this.headerEl.style.display="block",this.headerEl.style.width=`${this.size}px`;let t=0,n=0;switch(this.corner){case"tl":t=this.margin,n=this.margin+hr;break;case"tr":t=e.width-this.size-this.margin,n=this.margin+hr;break;case"bl":t=this.margin,n=e.height-this.margin-this.size;break;case"br":t=e.width-this.size-this.margin,n=e.height-this.margin-this.size;break}const i=n-hr;this.headerEl.style.left=`${e.left+t}px`,this.headerEl.style.top=`${e.top+i}px`}render(e){var g,b;if(!this.visible){this.positionHeader(e.domElement.getBoundingClientRect());return}if(this.positionHeader(e.domElement.getBoundingClientRect()),this.collapsed)return;const t=this.textures,n=(g=this.mat.uniforms.map)==null?void 0:g.value;if(!t&&!n)return;const i=e.getPixelRatio(),r=e.domElement.width,a=e.domElement.height,l=Math.max(1,Math.floor(this.size*i)),c=Math.max(0,Math.floor(this.margin*i));let h=0,d=0;switch(this.corner){case"tl":h=c,d=a-l-c-Math.floor(hr*i);break;case"tr":h=r-l-c,d=a-l-c-Math.floor(hr*i);break;case"bl":h=c,d=c;break;case"br":h=r-l-c,d=c;break}const f=e.autoClear,m=e.getScissorTest();e.getScissor(this.prevScissor),e.getViewport(this.prevViewport);try{if(e.setScissorTest(!0),e.autoClear=!1,t){const M=t.length,x=Math.ceil(Math.sqrt(M)),v=Math.ceil(M/x),w=Math.max(1,Math.floor(l/Math.max(x,v)));for(let y=0;y<M;y++){const S=y%x,C=Math.floor(y/x),P=h+S*w,A=d+l-(C+1)*w;this.mat.uniforms.map&&(this.mat.uniforms.map.value=(b=t[y])!=null?b:null),e.setScissor(P,A,w,w),e.setViewport(P,A,w,w),e.render(this.scene,this.cam)}}else n&&(e.setScissor(h,d,l,l),e.setViewport(h,d,l,l),e.render(this.scene,this.cam))}finally{e.setScissor(this.prevScissor.x,this.prevScissor.y,this.prevScissor.z,this.prevScissor.w),e.setViewport(this.prevViewport.x,this.prevViewport.y,this.prevViewport.z,this.prevViewport.w),e.setScissorTest(m),e.autoClear=f}}dispose(){this.detachHeader(),this.mat.dispose(),this.quad.geometry.dispose()}}class P1 extends nn{constructor(e){super({glslVersion:Yn,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1,side:0,uniforms:{uTexelsPerMeter:{value:e.texelsPerMeter},uLightmapSize:{value:e.lightmapSize}},vertexShader:`
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
            `})}setTexelsPerMeter(e){const t=this.uniforms.uTexelsPerMeter;t&&(t.value=e)}setLightmapSize(e){const t=this.uniforms.uLightmapSize;t&&(t.value=e)}}const Sn=10,dr=Sn/2,fs=[{id:"combined",label:"Combined",group:"output",showAlbedo:!0,getLightMap:s=>{var e,t;return(t=(e=s.group.refinement)==null?void 0:e.texture)!=null?t:s.group.composite.texture}},{id:"combinedPost",label:"Combined (Refined)",group:"output",showAlbedo:!0,getLightMap:s=>{var e,t;return(t=(e=s.group.refinement)==null?void 0:e.texture)!=null?t:s.group.composite.texture}},{id:"combinedRaw",label:"Combined (Raw)",group:"output",showAlbedo:!0,getLightMap:s=>s.group.composite.texture},{id:"direct",label:"Direct",group:"output",showAlbedo:!1,getLightMap:s=>s.group.lightmapper.textures.direct},{id:"indirect",label:"Indirect (GI)",group:"output",showAlbedo:!1,getLightMap:s=>s.group.lightmapper.textures.indirect},{id:"ao",label:"Ambient Occlusion",group:"output",showAlbedo:!1,getLightMap:s=>s.group.aoMapper.texture},{id:"lightmapRaw",label:"Lightmap (Raw)",group:"debug",showAlbedo:!1,getLightMap:s=>s.group.composite.texture},{id:"albedo",label:"Albedo",group:"debug",showAlbedo:!0,getLightMap:()=>null},{id:"positions",label:"World Position",group:"debug",showAlbedo:!1,getLightMap:s=>s.group.positionTexture},{id:"normals",label:"World Normal",group:"debug",showAlbedo:!1,getLightMap:s=>s.group.normalTexture},{id:"texelDensity",label:"Texel Density",group:"debug",showAlbedo:!1,getLightMap:()=>null}],R1=Object.fromEntries(fs.map(s=>[s.label,s.id])),L1={Linear:"linear",Nearest:"nearest"},I1={"Cornell Classic":"classic","Cornell Advanced":"advanced"},Wf={Custom:null,Draft:{lightMapSize:256,casts:4,targetSamples:32},Preview:{lightMapSize:512,casts:5,targetSamples:96},Production:{lightMapSize:1024,casts:6,targetSamples:256},Final:{lightMapSize:2048,casts:8,targetSamples:512}},tg=class{constructor(){this.cornellRoot=null,this.meshes=[],this.bakeGroups=[],this.meshToGroup=new Map,this.matTexDispose=null,this.bakeBVH=null,this.texelDensityMats=new Map,this.originalMaterials=new WeakMap,this.options={preset:"advanced",layer:"combined",quality:"Custom",lightMapSize:1024,casts:5,targetSamples:256,bounces:2,safeMode:!1,filterMode:"linear",directLightEnabled:!0,indirectLightEnabled:!0,ambientLightEnabled:!0,ambientDistance:.5,aoIntensity:1,aoExponent:1.5,aoSamples:5,texelsPerMeter:10,lightSize:2.9,lightIntensity:2,lightColor:"#ffffff",directIntensity:1.4,giIntensity:2.7,skyColor:"#ffffff",skyIntensity:0,pause:!1,showGizmo:!0,autoBake:!0,autoApplyRefinement:!1,dilationIterations:1,denoiseEnabled:!1,denoiseSigma:2.5,denoiseThreshold:.18,denoiseKSigma:1,secondaryLightEnabled:!1,secondaryDirX:-.5,secondaryDirY:-1,secondaryDirZ:-.5,secondaryIntensity:.8,secondaryColor:"#ffffcc",samples:0,spp:0,etaSec:0,refinementStatus:"idle",exportFormat:"png",perMesh:{},atlasViewerEnabled:!0,atlasViewerSize:256,atlasViewerCorner:"br",atlasViewerSRGB:!0},this.perMeshFolder=null,this.atlasViewer=(()=>{const f=new C1({size:256,corner:"br",sRGB:!0});return f.attachHeader(),f})(),this.looping=!1,this.bakeStartTime=0,this.bakeBatchHistory=[],this.maybeBake=f=>{(f==null?void 0:f.last)!==!1&&(!this.options.autoBake||this.bake())},this.scene=new Mm,this.scene.background=new Ve(657930),this.camera=new fn(45,window.innerWidth/window.innerHeight,.1,1e3),this.camera.position.set(0,5,18),this.camera.lookAt(0,5,0),this.renderer=new wm({antialias:!0}),this.renderer.outputColorSpace=Ft,this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(window.devicePixelRatio),document.body.appendChild(this.renderer.domElement),this.controls=new yT(this.camera,this.renderer.domElement),this.controls.target.set(0,5,0),this.controls.update(),this.lightDummy=new mt,this.lightDummy.position.set(0,Sn-.001,0),this.scene.add(this.lightDummy),this.lightMarker=new fe(new kn(2.5,2.5),new ti({color:16777215,side:mn})),this.lightMarker.rotation.x=Math.PI/2,this.lightDummy.add(this.lightMarker),this.visualLight=new Pm(16777215,80,0,2),this.lightDummy.add(this.visualLight),this.lightTransformController=new wT(this.camera,this.renderer.domElement),this.lightTransformController.addEventListener("dragging-changed",f=>{this.controls.enabled=!f.value}),this.lightTransformController.attach(this.lightDummy),this.scene.add(this.lightTransformController),this.pane=new pu.exports.Pane({title:"\u{1F506} Lightbaker"});const s=this.pane.addFolder({title:"View",expanded:!0});s.element.classList.add("tp-view"),s.addInput(this.options,"layer",{options:R1,label:"Layer"}).on("change",()=>this.applyRenderMode()),s.addInput(this.options,"filterMode",{options:L1,label:"Filtering"}).on("change",()=>this.applyRenderMode()),s.addInput(this.options,"showGizmo",{label:"Show Gizmo"}),s.addInput(this.options,"pause",{label:"Pause"});const e=this.pane.addFolder({title:"Bake Settings",expanded:!1});e.element.classList.add("tp-bake"),e.addInput(this.options,"quality",{options:Object.fromEntries(Object.keys(Wf).map(f=>[f,f])),label:"Preset"}).on("change",f=>this.applyQualityPreset(f.value)),e.addInput(this.options,"lightMapSize",{min:128,max:2048,step:128,label:"Atlas Size"}).on("change",f=>{this.options.quality="Custom",this.pane.refresh(),this.maybeBake(f)}),e.addInput(this.options,"texelsPerMeter",{min:1,max:50,step:.5,label:"Density (px/m)"}).on("change",f=>{this.refreshTexelDensityMaterials(),this.maybeBake(f)}),e.addInput(this.options,"casts",{min:1,max:16,step:1,label:"Casts/Frame"}).on("change",f=>{this.options.quality="Custom",this.pane.refresh(),this.maybeBake(f)}),e.addInput(this.options,"targetSamples",{min:16,max:1024,step:16,label:"Target Frames"}).on("change",f=>{this.options.quality="Custom",this.pane.refresh(),this.maybeBake(f)}),e.addInput(this.options,"bounces",{min:1,max:4,step:1,label:"Bounces"}).on("change",f=>{this.options.quality="Custom",this.pane.refresh(),this.maybeBake(f)}),e.addInput(this.options,"autoBake",{label:"Auto-bake"}),e.addInput(this.options,"safeMode",{label:"Safe Mode (TDR)"}).on("change",f=>{this.options.quality="Custom",this.pane.refresh(),this.maybeBake(f)}),e.addButton({title:"Bake Now"}).on("click",()=>this.bake());const t=this.pane.addFolder({title:"Lighting & GI",expanded:!1});t.element.classList.add("tp-light");const n=t.addFolder({title:"Direct Light"});n.addInput(this.options,"directLightEnabled",{label:"Enabled"}).on("change",this.maybeBake),n.addInput(this.options,"lightColor",{view:"color",label:"Color"}).on("change",this.maybeBake),n.addInput(this.options,"lightIntensity",{min:0,max:15,step:.1,label:"Bake Power"}).on("change",this.maybeBake),n.addInput(this.options,"lightSize",{min:.1,max:5,step:.1,label:"Source Size"}).on("change",this.maybeBake),n.addInput(this.options,"directIntensity",{min:0,max:4,step:.05,label:"View Multiplier"}).on("change",()=>this.refreshAllComposites({directIntensity:this.options.directIntensity}));const i=t.addFolder({title:"Global Illumination"});i.addInput(this.options,"indirectLightEnabled",{label:"Enabled"}).on("change",this.maybeBake),i.addInput(this.options,"giIntensity",{min:0,max:4,step:.05,label:"Bounce Power"}).on("change",()=>this.refreshAllComposites({giIntensity:this.options.giIntensity})),i.addInput(this.options,"skyColor",{view:"color",label:"Sky Color"}).on("change",this.maybeBake),i.addInput(this.options,"skyIntensity",{min:0,max:4,step:.05,label:"Sky Intensity"}).on("change",this.maybeBake);const r=t.addFolder({title:"Ambient Occlusion"});r.addInput(this.options,"ambientLightEnabled",{label:"Enabled"}).on("change",()=>this.refreshAllComposites({aoEnabled:this.options.ambientLightEnabled})),r.addInput(this.options,"ambientDistance",{min:.05,max:2,step:.05,label:"Max Distance"}).on("change",()=>this.rebakeAO()),r.addInput(this.options,"aoIntensity",{min:0,max:3,step:.05,label:"Intensity"}).on("change",()=>this.refreshAllComposites({aoIntensity:this.options.aoIntensity})),r.addInput(this.options,"aoExponent",{min:.5,max:4,step:.1,label:"Exponent"}).on("change",()=>this.refreshAllComposites({aoExponent:this.options.aoExponent})),r.addInput(this.options,"aoSamples",{min:0,max:32,step:1,label:"Samples"}).on("change",()=>this.rebakeAO());const a=this.pane.addFolder({title:"Refinement",expanded:!1});a.element.classList.add("tp-post"),a.addInput(this.options,"autoApplyRefinement",{label:"Auto-apply"}),a.addInput(this.options,"dilationIterations",{min:0,max:8,step:1,label:"Dilate Iters"}),a.addInput(this.options,"denoiseEnabled",{label:"Denoise"}),a.addInput(this.options,"denoiseSigma",{min:.1,max:8,step:.1,label:"Spatial Sigma"}),a.addInput(this.options,"denoiseThreshold",{min:.01,max:1,step:.01,label:"Edge Thresh"}),a.addInput(this.options,"denoiseKSigma",{min:.5,max:3,step:.1,label:"Range Sigma"}),a.addButton({title:"Run Refinement"}).on("click",()=>this.applyRefinement()),a.addButton({title:"Revert to Raw"}).on("click",()=>this.showUnrefined());const l=t.addFolder({title:"Secondary Light (Directional)"});l.addInput(this.options,"secondaryLightEnabled",{label:"Enabled"}).on("change",this.maybeBake),l.addInput(this.options,"secondaryDirX",{min:-1,max:1,step:.05,label:"Dir X"}).on("change",this.maybeBake),l.addInput(this.options,"secondaryDirY",{min:-1,max:1,step:.05,label:"Dir Y"}).on("change",this.maybeBake),l.addInput(this.options,"secondaryDirZ",{min:-1,max:1,step:.05,label:"Dir Z"}).on("change",this.maybeBake),l.addInput(this.options,"secondaryIntensity",{min:0,max:5,step:.1,label:"Intensity"}).on("change",this.maybeBake),l.addInput(this.options,"secondaryColor",{view:"color",label:"Color"}).on("change",this.maybeBake);const c=this.pane.addFolder({title:"Export",expanded:!1});c.element.classList.add("tp-export"),c.addInput(this.options,"exportFormat",{options:{"PNG (LDR preview)":"png","EXR (HDR linear)":"exr","Raw Float32 (.bin)":"bin"},label:"Format"}),c.addButton({title:"Export Final Lightmap"}).on("click",()=>this.exportFinal()),c.addButton({title:"Export Current Layer"}).on("click",()=>this.exportCurrent());const h=this.pane.addFolder({title:"Atlas Viewer",expanded:!1});h.element.classList.add("tp-viewer"),h.addInput(this.options,"atlasViewerEnabled",{label:"Enabled"}).on("change",f=>{this.atlasViewer.visible=f.value}),h.addInput(this.options,"atlasViewerSize",{min:128,max:768,step:32,label:"Size"}).on("change",f=>this.atlasViewer.setSize(f.value)),h.addInput(this.options,"atlasViewerCorner",{options:{"Top-Left":"tl","Top-Right":"tr","Bot-Left":"bl","Bot-Right":"br"},label:"Corner"}).on("change",f=>this.atlasViewer.setCorner(f.value)),h.addInput(this.options,"atlasViewerSRGB",{label:"sRGB Encode"}).on("change",f=>this.atlasViewer.setSRGB(f.value));const d=this.pane.addFolder({title:"Scene",expanded:!1});d.element.classList.add("tp-scene"),d.addInput(this.options,"preset",{options:I1,label:"Complexity"}).on("change",()=>this.rebuildScene()),d.addButton({title:"Import GLB..."}).on("click",()=>{this.glbFileInput.value="",this.glbFileInput.click()}),d.addButton({title:"Reset to Cornell"}).on("click",()=>this.rebuildScene()),d.addButton({title:"Export Scene as GLB"}).on("click",()=>void this.exportSceneGLB()),this.initUI(),this.rebuildScene()}buildPerMeshUI(){var e;(e=this.perMeshFolder)==null||e.dispose();const s=this.pane.addFolder({title:"Per-Mesh",expanded:!1});this.perMeshFolder=s;for(let t=0;t<this.meshes.length;t++){const n=this.meshes[t],i=n.uuid;this.options.perMesh[i]||(this.options.perMesh[i]={scaleInLightmap:1,exclude:!1});const r=this.options.perMesh[i],a=n.name||`Mesh ${t+1} (${n.geometry.type.replace("Geometry","")})`,l=s.addFolder({title:a,expanded:!1});l.addInput(r,"exclude",{label:"Exclude"}).on("change",this.maybeBake),l.addInput(r,"scaleInLightmap",{label:"Density \xD7",min:.25,max:4,step:.25}).on("change",c=>{this.refreshTexelDensityMaterials(),this.maybeBake(c)})}}initUI(){this.fpsElement=document.createElement("div"),this.fpsElement.style.position="absolute",this.fpsElement.style.top="10px",this.fpsElement.style.left="10px",this.fpsElement.style.color="#00ff00",this.fpsElement.style.fontFamily="monospace",this.fpsElement.style.fontSize="12px",this.fpsElement.style.lineHeight="1.4",this.fpsElement.style.pointerEvents="none",this.fpsElement.style.zIndex="100",this.fpsElement.style.padding="8px",this.fpsElement.style.backgroundColor="rgba(0, 0, 0, 0.5)",this.fpsElement.style.borderRadius="4px",document.body.appendChild(this.fpsElement),this.progressContainer=document.createElement("div"),this.progressContainer.style.position="absolute",this.progressContainer.style.bottom="20px",this.progressContainer.style.left="20px",this.progressContainer.style.width="300px",this.progressContainer.style.backgroundColor="rgba(0, 0, 0, 0.7)",this.progressContainer.style.padding="12px",this.progressContainer.style.borderRadius="4px",this.progressContainer.style.fontFamily="monospace",this.progressContainer.style.fontSize="11px",this.progressContainer.style.color="#fff",this.progressContainer.style.display="none",this.progressContainer.style.zIndex="100",this.progressContainer.style.border="1px solid #444",document.body.appendChild(this.progressContainer);const s=document.createElement("div");s.style.width="100%",s.style.height="4px",s.style.backgroundColor="#222",s.style.marginTop="8px",s.style.borderRadius="2px",s.style.overflow="hidden",this.progressContainer.appendChild(s),this.progressBar=document.createElement("div"),this.progressBar.className="progress-pulse",this.progressBar.style.width="0%",this.progressBar.style.height="100%",this.progressBar.style.backgroundColor="#00ff00",s.appendChild(this.progressBar),this.progressText=document.createElement("div"),this.progressText.style.marginTop="8px",this.progressText.style.whiteSpace="pre",this.progressContainer.appendChild(this.progressText),this.glbFileInput=document.createElement("input"),this.glbFileInput.type="file",this.glbFileInput.accept=".glb,.gltf",this.glbFileInput.style.display="none",this.glbFileInput.addEventListener("change",()=>{var t;const e=(t=this.glbFileInput.files)==null?void 0:t[0];e&&this.importGLB(e)}),document.body.appendChild(this.glbFileInput)}updateSize(){this.renderer.setSize(window.innerWidth,window.innerHeight),this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setPixelRatio(window.devicePixelRatio)}mat(s,e=.95,t=0){const n=new cl({color:s,roughness:e,metalness:t});return n._originalMap=null,n}addMesh(s){const e=s;return this.meshes.push(e),this.cornellRoot.add(e),e}buildWalls(){const e=this.mat(15790320),t=this.mat(14034728),n=this.mat(2924588),i=new fe(new xt(Sn,.2,Sn),e);i.name="Floor",i.position.set(0,-.2/2,0),this.addMesh(i);const r=new fe(new xt(Sn,.2,Sn),e.clone());r.name="Ceiling",r.material._originalMap=null,r.position.set(0,Sn+.2/2,0),this.addMesh(r);const a=new fe(new xt(Sn,Sn,.2),e.clone());a.name="Back Wall",a.material._originalMap=null,a.position.set(0,dr,-dr-.2/2),this.addMesh(a);const l=new fe(new xt(.2,Sn,Sn),t);l.name="Left Wall (Red)",l.position.set(-dr-.2/2,dr,0),this.addMesh(l);const c=new fe(new xt(.2,Sn,Sn),n);c.name="Right Wall (Green)",c.position.set(dr+.2/2,dr,0),this.addMesh(c)}buildClassicBlocks(){const s=this.mat(15263976),e=new fe(new xt(3,6,3),s);e.name="Tall Block",e.position.set(-1.8,3,-1.5),e.rotation.y=.29,this.addMesh(e);const t=new fe(new xt(3,3,3),s.clone());t.name="Short Block",t.material._originalMap=null,t.position.set(1.8,1.5,1.5),t.rotation.y=-.29,this.addMesh(t)}buildAdvancedExtras(){const s=new fe(new ll(1,48,32),this.mat(16119285,.4,0));s.name="Sphere",s.position.set(2.4,1,3),this.addMesh(s);const e=new fe(new Du(.55,.18,160,24),this.mat(16765286,.55,0));e.name="Torus Knot",e.position.set(0,1,2.8),e.rotation.x=Math.PI/2,this.addMesh(e);const t=new fe(new xt(1.2,1.2,1.2),this.mat(13072954,.8,0));t.name="Accent Block",t.position.set(-3.5,.6,2.8),t.rotation.y=.45,this.addMesh(t)}async importGLB(s){var i;const e=await s.arrayBuffer(),t=new IT;let n;try{n=await new Promise((r,a)=>{t.parse(e,"",r,a)})}catch(r){console.error("[baker] GLB parse failed:",r);return}if(this.disposeAllGroups(),(i=this.matTexDispose)==null||i.call(this),this.matTexDispose=null,this.cornellRoot&&this.scene.remove(this.cornellRoot),this.cornellRoot=new mt,this.scene.add(this.cornellRoot),this.cornellRoot.add(n.scene),this.meshes=[],n.scene.traverse(r=>{const a=r;if(!a.isMesh)return;const l=a.material;Array.isArray(l)||!l||!("lightMap"in l)||(a.geometry.index||(a.geometry=LT(a.geometry)),this.meshes.push(a))}),!this.meshes.length){console.warn("[baker] imported GLB has no bake-eligible meshes (need MeshStandard*)");return}this.cornellRoot.updateMatrixWorld(!0),this.fitCameraAndLightToScene(),this.options.perMesh={},this.buildPerMeshUI(),await this.bake(),this.startLoop()}fitCameraAndLightToScene(){const s=new Vt;for(const i of this.meshes)s.expandByObject(i);if(s.isEmpty())return;const e=s.getSize(new D),t=s.getCenter(new D),n=Math.max(e.x,e.y,e.z)||1;this.lightDummy.position.set(t.x,s.max.y+n*.1,t.z),this.camera.position.set(t.x,t.y,t.z+n*2.5),this.controls.target.copy(t),this.controls.update()}async exportSceneGLB(){if(!this.meshes.length){console.warn("[baker] no meshes to export");return}if(!this.bakeGroups.length){console.warn("[baker] no baked lightmap available \u2014 bake first");return}const s=this.options.layer;this.options.layer="combined",this.applyRenderMode(),this.options.layer=s;const{GLTFExporter:e}=await e_(()=>import("./GLTFExporter.7ee0e6fe.js"),[]),t=new e,n=await new Promise((l,c)=>{t.parse(this.cornellRoot,h=>{h instanceof ArrayBuffer?l(h):c(new Error("expected binary GLB output"))},h=>c(h),{binary:!0,embedImages:!0})}),i=new Blob([n],{type:"model/gltf-binary"}),r=URL.createObjectURL(i),a=document.createElement("a");a.href=r,a.download="scene-baked.glb",a.click(),URL.revokeObjectURL(r)}async rebuildScene(){this.disposeAllGroups(),this.cornellRoot&&this.scene.remove(this.cornellRoot),this.cornellRoot=new mt,this.scene.add(this.cornellRoot),this.meshes=[],this.buildWalls(),this.buildClassicBlocks(),this.options.preset==="advanced"&&this.buildAdvancedExtras();const s=new Set(this.meshes.map(e=>e.uuid));for(const e of Object.keys(this.options.perMesh))s.has(e)||delete this.options.perMesh[e];this.buildPerMeshUI(),await this.bake(),this.startLoop()}disposeAllGroups(){var s;for(const e of this.bakeGroups)(s=e.refinement)==null||s.dispose(),e.composite.dispose(),e.aoMapper.dispose(),e.lightmapper.dispose(),e.atlasDispose();this.bakeGroups=[],this.meshToGroup.clear()}async bake(){var x,v;if(!this.meshes.length)return;this.progressContainer.style.display="block",this.bakeStartTime=performance.now(),this.bakeBatchHistory=[];const s=this.options.lightMapSize;this.scene.updateMatrixWorld(!0);const e=this.meshes.filter(w=>{var y;return((y=this.options.perMesh[w.uuid])==null?void 0:y.exclude)!==!0});if(!e.length){console.warn("[baker] all meshes excluded \u2014 nothing to bake"),this.progressContainer.style.display="none";return}const t={};for(const w of e){const y=(x=this.options.perMesh[w.uuid])==null?void 0:x.scaleInLightmap;y!==void 0&&y!==1&&(t[w.uuid]=y)}const n=jA(e,{atlasResolution:s,texelsPerMeter:this.options.texelsPerMeter,perMeshScale:t}),i=n.reduce((w,y)=>Math.max(w,y.atlasIdx+1),0),r=Array.from({length:i},()=>[]);for(const w of n)r[w.atlasIdx].push(w.mesh);await bA(r);const a=zA(this.meshes),l=new zu(a);this.bakeBVH=l,(v=this.matTexDispose)==null||v.call(this);const c=GA(a,this.meshes),h=WA(c);this.matTexDispose=()=>{h.albedoTexture.dispose(),h.emissiveTexture.dispose()};const d=new Ve(this.options.lightColor).convertSRGBToLinear(),f=new Ve(this.options.skyColor).convertSRGBToLinear();this.visualLight.color.copy(d),this.visualLight.intensity=30*this.options.lightIntensity;const m=[{type:"point",position:this.lightDummy.position.clone(),direction:new D(0,-1,0),color:d.clone().multiplyScalar(this.options.lightIntensity),params:[this.options.lightSize,0,0,0]}];if(this.options.secondaryLightEnabled){const w=new Ve(this.options.secondaryColor).convertSRGBToLinear().multiplyScalar(this.options.secondaryIntensity),y=new D(this.options.secondaryDirX,this.options.secondaryDirY,this.options.secondaryDirZ).normalize();m.push({type:"directional",position:new D(0,0,0),direction:y,color:w,params:[0,0,0,0]})}const g=this.options.safeMode?64:this.options.lightMapSize,b={casts:this.options.casts,filterMode:this.options.filterMode==="linear"?Tt:dt,lights:m,skyColor:f,skyIntensity:this.options.skyIntensity,directLightEnabled:this.options.directLightEnabled,indirectLightEnabled:this.options.indirectLightEnabled,albedoTexture:h.albedoTexture,emissiveTexture:h.emissiveTexture,materialTextureSize:h.side,targetSamples:this.options.targetSamples,bounces:this.options.bounces,tileSize:g},M={aoSamples:this.options.aoSamples,ambientDistance:this.options.ambientDistance,targetSamples:this.options.targetSamples,tileSize:g};this.disposeAllGroups();for(let w=0;w<i;w++){const y=r[w],S=CA(this.renderer,y,s,!0),C=DA(this.renderer,S.positionTexture,S.normalTexture,l,{...b,resolution:s}),P=Tf(this.renderer,S.positionTexture,S.normalTexture,l,{...M,resolution:s}),A=FA(this.renderer,{direct:C.textures.direct,indirect:C.textures.indirect,ao:P.texture},s,{directIntensity:this.options.directIntensity,giIntensity:this.options.giIntensity,aoEnabled:this.options.ambientLightEnabled,aoIntensity:this.options.aoIntensity,aoExponent:this.options.aoExponent}),I={atlasIdx:w,meshes:y,positionTexture:S.positionTexture,normalTexture:S.normalTexture,atlasDispose:S.dispose,lightmapper:C,aoMapper:P,composite:A,refinement:null};this.bakeGroups.push(I);for(const B of y)this.meshToGroup.set(B,I);C.render(),P.render()}this.options.refinementStatus="idle",this.options.samples=0,this.options.spp=0,this.options.etaSec=0,this.options.pause=!1,this.pane.refresh(),this.applyRenderMode()}applyQualityPreset(s){const e=Wf[s];!e||(this.options.lightMapSize=e.lightMapSize,this.options.casts=e.casts,this.options.targetSamples=e.targetSamples,this.pane.refresh(),this.bake())}async applyRefinement(){var e;if(!this.bakeGroups.length)return;this.options.refinementStatus="running",this.pane.refresh();const s=this.options.lightMapSize;for(let t=0;t<this.bakeGroups.length;t++){const n=this.bakeGroups[t];(e=n.refinement)==null||e.dispose(),n.refinement=await VA(this.renderer,n.composite.texture,n.positionTexture,s,this.options,i=>{const r=(t+i)/this.bakeGroups.length;this.progressBar.style.width=`${Math.min(100,r*100)}%`,this.progressText.innerText=`Refinement: atlas ${t+1}/${this.bakeGroups.length} (${Math.round(i*100)}%)
Dilation & Bilateral Denoise...`})}this.options.refinementStatus=this.options.dilationIterations>0||this.options.denoiseEnabled?"applied":"skipped",this.pane.refresh(),this.applyRenderMode(),this.progressText.innerText=`Baking & Refinement complete!
Ready.`,setTimeout(()=>{this.progressContainer.style.display="none"},3e3)}async exportFinal(){var e,t;if(!this.bakeGroups.length){console.warn("[baker] export: no bake to export \u2014 bake first");return}const s=this.bakeGroups[0].refinement?"refined":"composite";for(let n=0;n<this.bakeGroups.length;n++){const i=this.bakeGroups[n],r=(t=(e=i.refinement)==null?void 0:e.texture)!=null?t:i.composite.texture,a=this.bakeGroups.length>1?`_atlas${n}`:"";await this.runExport(r,`lightmap_${s}_${this.options.lightMapSize}${a}`)}}async exportCurrent(){var t;const s=(t=fs.find(n=>n.id===this.options.layer))!=null?t:fs[0];if(!this.bakeGroups.length){console.warn("[baker] export: no bake to export \u2014 bake first");return}let e=0;for(let n=0;n<this.bakeGroups.length;n++){const i=this.bakeGroups[n],r=s.getLightMap({group:i});if(!r)continue;const a=this.bakeGroups.length>1?`_atlas${n}`:"";await this.runExport(r,`lightmap_${s.id}_${this.options.lightMapSize}${a}`),e++}e||console.warn(`[baker] export: layer "${s.id}" has no exportable texture`)}async runExport(s,e){const t=this.options.exportFormat,n=this.options.lightMapSize,i=performance.now();try{await A1(this.renderer,s,n,e,t),console.info(`[baker] exported ${e}.${t} (${n}\xD7${n}) in ${(performance.now()-i).toFixed(0)}ms`)}catch(r){throw console.error("[baker] export failed:",r),r}}showUnrefined(){var s;for(const e of this.bakeGroups)(s=e.refinement)==null||s.dispose(),e.refinement=null;this.options.refinementStatus="idle",this.pane.refresh(),this.applyRenderMode()}applyRenderMode(){var e,t;const s=(e=fs.find(n=>n.id===this.options.layer))!=null?e:fs[0];if(s.id==="texelDensity"){this.refreshTexelDensityMaterials();for(const n of this.meshes){this.originalMaterials.has(n)||this.originalMaterials.set(n,n.material);const i=this.texelDensityMats.get(n);i&&(n.material=i)}this.visualLight.visible=!1;return}for(const n of this.meshes){const i=this.originalMaterials.get(n);i&&n.material!==i&&(n.material=i)}for(const n of this.meshes){const i=n.material;i.map=s.showAlbedo&&(t=i._originalMap)!=null?t:null;const r=this.meshToGroup.get(n),a=r?s.getLightMap({group:r}):null;i.lightMap=a,i.lightMap&&(i.lightMap.channel=2,i.lightMap.needsUpdate=!0),i.lightMapIntensity=1,i.needsUpdate=!0}this.lightMarker.material.color=new Ve(16777215),this.visualLight.visible=s.id==="albedo"}estimateTimeRemaining(s,e){if(e<=0||s>=e)return 0;const t=this.bakeBatchHistory;if(t.length<2)return 0;const n=t[0],i=t[t.length-1],r=i.samples-n.samples,a=i.t-n.t;if(r<=0||a<=0)return 0;const l=a/r;return(e-s)*l/1e3}startLoop(){if(this.looping)return;this.looping=!0;let s=performance.now(),e=0,t=0;const n=()=>{var r,a;requestAnimationFrame(n),this.lightTransformController.visible=this.options.showGizmo,this.lightTransformController.enabled=this.options.showGizmo;const i=performance.now();if(e++,i>=s+1e3){t=Math.round(e*1e3/(i-s));let l=0,c=0;const h=this.renderer.info.memory.textures;for(const g of this.bakeGroups){const b=this.options.lightMapSize;l+=b*b*16*2,l+=b*b*8,l+=b*b*16*3,g.refinement&&(l+=b*b*8)}for(const g of this.meshes){const b=g.geometry;if(b.index)c+=b.index.count/3;else{const M=b.attributes.position;M&&(c+=M.count/3)}}const d=(l/(1024*1024)).toFixed(1),f=(c/1e3).toFixed(1);let m=`FPS: ${t}
`;m+=`VRAM: ${d} MB (${h} tex)
`,m+=`TRIS: ${f}k
`,this.bakeGroups.length&&!this.options.pause?m+=`RAYS: ${(this.bakeGroups.length*this.options.lightMapSize*this.options.lightMapSize*this.options.casts*t/1e6).toFixed(1)}M/s`:m+="RAYS: 0.0M/s",this.fpsElement.innerText=m,e=0,s=i}if(this.bakeGroups.length&&!this.options.pause){let l=!0,c=1/0;const h=[];for(const w of this.bakeGroups){const y=w.lightmapper.render(),S=w.aoMapper.render();(!y.done||!S.done)&&(l=!1);const C=Math.min(y.samples,S.samples);C<c&&(c=C),h.push(C)}if(Number.isFinite(c)||(c=0),l){this.options.pause=!0,this.options.etaSec=0;const w=(performance.now()-this.bakeStartTime)/1e3;console.info(`[baker] done in ${w.toFixed(2)}s (${this.bakeGroups.length} atlas${this.bakeGroups.length===1?"":"es"})`),this.progressText.innerText=`Baking complete! ${w.toFixed(1)}s
Running post-process...`;for(const y of this.bakeGroups){const S=y.lightmapper.renderTarget;for(let P=0;P<2;P++){const A=S.texture[P];!A||(A.generateMipmaps=!0,A.minFilter=Ya,this.renderer.initTexture(A))}const C=y.aoMapper.texture;C.generateMipmaps=!0,C.minFilter=Ya,this.renderer.initTexture(C),y.composite.texture.needsUpdate=!0}this.pane.refresh(),this.options.autoApplyRefinement&&this.applyRefinement();return}for(const w of this.bakeGroups)w.composite.refresh();const d=this.options.targetSamples,f=d>0?c/d:0;this.progressBar.style.width=`${Math.min(100,f*100)}%`;const m=(performance.now()-this.bakeStartTime)/1e3,g=performance.now(),b=this.bakeBatchHistory[this.bakeBatchHistory.length-1];(!b||b.samples!==c)&&(this.bakeBatchHistory.push({samples:c,t:g}),this.bakeBatchHistory.length>tg.BAKE_ETA_WINDOW&&this.bakeBatchHistory.shift());const M=this.estimateTimeRemaining(c,d),x=c*this.options.casts;this.options.samples=c,this.options.spp=x,this.options.etaSec=Math.ceil(M);let v;this.bakeGroups.length===1?v="":this.bakeGroups.length<=6?v=`
Atlases: [`+h.map(w=>w>=d?`${d}\u2713`:String(w)).join(", ")+"]":v=`
Atlases: ${h.filter(y=>y>=d).length}/${this.bakeGroups.length} done`,this.progressText.innerText=`Baking: ${c}/${d} frames (${x} spp)
Elapsed: ${m.toFixed(1)}s | ETA: ${this.options.etaSec}s`+v}if(this.controls.update(),this.renderer.render(this.scene,this.camera),this.atlasViewer.visible=this.options.atlasViewerEnabled,this.atlasViewer.visible){const l=(r=fs.find(h=>h.id===this.options.layer))!=null?r:fs[0];if(this.bakeGroups.length===0)this.atlasViewer.setTexture(null);else{const h=[];for(const d of this.bakeGroups)h.push((a=l.getLightMap({group:d}))!=null?a:d.composite.texture);this.atlasViewer.setTextures(h)}const c=this.bakeGroups.length>1?` (${this.bakeGroups.length} atlases)`:"";this.atlasViewer.setLayerLabel(l.label+c)}this.atlasViewer.render(this.renderer)};n()}refreshAllComposites(s){for(const e of this.bakeGroups)e.composite.refresh(s)}rebakeAO(){if(!this.bakeGroups.length||!this.bakeBVH)return;const s=this.options.lightMapSize,e={aoSamples:this.options.aoSamples,ambientDistance:this.options.ambientDistance,targetSamples:this.options.targetSamples};for(const t of this.bakeGroups)t.aoMapper.dispose(),t.aoMapper=Tf(this.renderer,t.positionTexture,t.normalTexture,this.bakeBVH,{...e,resolution:s}),t.composite.refresh({aoTex:t.aoMapper.texture});this.options.pause=!1}refreshTexelDensityMaterials(){var e,t,n;const s=new Set(this.meshes);for(const i of this.texelDensityMats.keys())s.has(i)||((e=this.texelDensityMats.get(i))==null||e.dispose(),this.texelDensityMats.delete(i));for(const i of this.meshes){const r=(n=(t=this.options.perMesh[i.uuid])==null?void 0:t.scaleInLightmap)!=null?n:1,a=this.options.texelsPerMeter*r;let l=this.texelDensityMats.get(i);l?(l.setTexelsPerMeter(a),l.setLightmapSize(this.options.lightMapSize)):(l=new P1({texelsPerMeter:a,lightmapSize:this.options.lightMapSize}),this.texelDensityMats.set(i,l))}}};let ng=tg;ng.BAKE_ETA_WINDOW=16;(async()=>{await _A();const s=new ng;window.addEventListener("resize",()=>s.updateSize())})();export{Ct as B,N1 as C,mn as D,Po as I,Tt as L,fe as M,Un as N,kn as P,Gt as Q,Wt as R,nn as S,ul as U,D as V,wm as W,Ft as a,fn as b,Mm as c,Ve as d,D1 as e,am as f,sm as g,vt as h,He as i,Sr as j,dt as k,jc as l,pr as m,ka as n,Ei as o,hn as p,Mr as q,qa as r};
