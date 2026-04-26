const qv=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}};qv();const Yv="modulepreload",Qh={},Kv="/three-lightmap-baker/",$v=function(e,t){return!t||t.length===0?e():Promise.all(t.map(n=>{if(n=`${Kv}${n}`,n in Qh)return;Qh[n]=!0;const i=n.endsWith(".css"),r=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${r}`))return;const a=document.createElement("link");if(a.rel=i?"stylesheet":Yv,i||(a.as="script",a.crossOrigin=""),a.href=n,document.head.appendChild(a),i)return new Promise((l,c)=>{a.addEventListener("load",l),a.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${n}`)))})})).then(()=>e())};/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const yu="161",Us={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Fs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Zv=0,Jh=1,Qv=2,Wf=1,Jv=2,bi=3,jn=0,xn=1,mn=2,On=0,_r=1,ed=2,td=3,nd=4,e_=5,ms=100,t_=101,n_=102,id=103,sd=104,i_=200,s_=201,r_=202,o_=203,zc=204,Hc=205,a_=206,l_=207,c_=208,u_=209,h_=210,d_=211,p_=212,f_=213,m_=214,g_=0,v_=1,__=2,ja=3,x_=4,b_=5,y_=6,w_=7,Xf=0,E_=1,M_=2,Zi=0,S_=1,T_=2,A_=3,C_=4,P_=5,R_=6,rd="attached",L_="detached",jf=300,yr=301,wr=302,Gc=303,Wc=304,nl=306,Er=1e3,hn=1001,qa=1002,dt=1003,Xc=1004,pr=1005,Ut=1006,ka=1007,Ei=1008,wu=1008,ti=1009,jc=1010,qf=1011,il=1012,wo=1013,Tn=1014,_t=1015,ii=1016,Yf=1017,Kf=1018,bs=1020,I_=1021,Wt=1023,D_=1024,N_=1025,ys=1026,Mr=1027,$f=1028,Eu=1029,Zf=1030,sl=1031,Co=1033,Vl=33776,zl=33777,Hl=33778,Gl=33779,od=35840,ad=35841,ld=35842,cd=35843,Qf=36196,ud=37492,hd=37496,dd=37808,pd=37809,fd=37810,md=37811,gd=37812,vd=37813,_d=37814,xd=37815,bd=37816,yd=37817,wd=37818,Ed=37819,Md=37820,Sd=37821,Wl=36492,Td=36494,Ad=36495,U_=36283,Cd=36284,Pd=36285,Rd=36286,Po=2300,Sr=2301,Xl=2302,Ld=2400,Id=2401,Dd=2402,F_=2500,O_=0,Jf=1,qc=2,em=3e3,ws=3001,B_=3200,k_=3201,tm=0,V_=1,Nn="",Ft="srgb",en="srgb-linear",Mu="display-p3",rl="display-p3-linear",Ya="linear",St="srgb",Ka="rec709",$a="p3",Os=7680,Nd=519,z_=512,H_=513,G_=514,nm=515,W_=516,X_=517,j_=518,q_=519,Yc=35044,si="300 es",Kc=1035,Mi=2e3,Za=2001;class Ts{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const an=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ud=1234567;const Eo=Math.PI/180,Tr=180/Math.PI;function Xn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(an[s&255]+an[s>>8&255]+an[s>>16&255]+an[s>>24&255]+"-"+an[e&255]+an[e>>8&255]+"-"+an[e>>16&15|64]+an[e>>24&255]+"-"+an[t&63|128]+an[t>>8&255]+"-"+an[t>>16&255]+an[t>>24&255]+an[n&255]+an[n>>8&255]+an[n>>16&255]+an[n>>24&255]).toLowerCase()}function Kt(s,e,t){return Math.max(e,Math.min(t,s))}function Su(s,e){return(s%e+e)%e}function Y_(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function K_(s,e,t){return s!==e?(t-s)/(e-s):0}function Mo(s,e,t){return(1-t)*s+t*e}function $_(s,e,t,n){return Mo(s,e,1-Math.exp(-t*n))}function Z_(s,e=1){return e-Math.abs(Su(s,e*2)-e)}function Q_(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function J_(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function ex(s,e){return s+Math.floor(Math.random()*(e-s+1))}function tx(s,e){return s+Math.random()*(e-s)}function nx(s){return s*(.5-Math.random())}function ix(s){s!==void 0&&(Ud=s);let e=Ud+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function sx(s){return s*Eo}function rx(s){return s*Tr}function $c(s){return(s&s-1)===0&&s!==0}function ox(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Qa(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function ax(s,e,t,n,i){const r=Math.cos,a=Math.sin,l=r(t/2),c=a(t/2),h=r((e+n)/2),d=a((e+n)/2),f=r((e-n)/2),m=a((e-n)/2),v=r((n-e)/2),b=a((n-e)/2);switch(i){case"XYX":s.set(l*d,c*f,c*m,l*h);break;case"YZY":s.set(c*m,l*d,c*f,l*h);break;case"ZXZ":s.set(c*f,c*m,l*d,l*h);break;case"XZX":s.set(l*d,c*b,c*v,l*h);break;case"YXY":s.set(c*v,l*d,c*b,l*h);break;case"ZYZ":s.set(c*b,c*v,l*d,l*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Wn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function mt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const im={DEG2RAD:Eo,RAD2DEG:Tr,generateUUID:Xn,clamp:Kt,euclideanModulo:Su,mapLinear:Y_,inverseLerp:K_,lerp:Mo,damp:$_,pingpong:Z_,smoothstep:Q_,smootherstep:J_,randInt:ex,randFloat:tx,randFloatSpread:nx,seededRandom:ix,degToRad:sx,radToDeg:rx,isPowerOfTwo:$c,ceilPowerOfTwo:ox,floorPowerOfTwo:Qa,setQuaternionFromProperEuler:ax,normalize:mt,denormalize:Wn};class Te{constructor(e=0,t=0){Te.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Kt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class it{constructor(e,t,n,i,r,a,l,c,h){it.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,l,c,h)}set(e,t,n,i,r,a,l,c,h){const d=this.elements;return d[0]=e,d[1]=i,d[2]=l,d[3]=t,d[4]=r,d[5]=c,d[6]=n,d[7]=a,d[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],l=n[3],c=n[6],h=n[1],d=n[4],f=n[7],m=n[2],v=n[5],b=n[8],w=i[0],x=i[3],g=i[6],E=i[1],y=i[4],S=i[7],P=i[2],C=i[5],A=i[8];return r[0]=a*w+l*E+c*P,r[3]=a*x+l*y+c*C,r[6]=a*g+l*S+c*A,r[1]=h*w+d*E+f*P,r[4]=h*x+d*y+f*C,r[7]=h*g+d*S+f*A,r[2]=m*w+v*E+b*P,r[5]=m*x+v*y+b*C,r[8]=m*g+v*S+b*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],l=e[5],c=e[6],h=e[7],d=e[8];return t*a*d-t*l*h-n*r*d+n*l*c+i*r*h-i*a*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],l=e[5],c=e[6],h=e[7],d=e[8],f=d*a-l*h,m=l*c-d*r,v=h*r-a*c,b=t*f+n*m+i*v;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/b;return e[0]=f*w,e[1]=(i*h-d*n)*w,e[2]=(l*n-i*a)*w,e[3]=m*w,e[4]=(d*t-i*c)*w,e[5]=(i*r-l*t)*w,e[6]=v*w,e[7]=(n*c-h*t)*w,e[8]=(a*t-n*r)*w,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,l){const c=Math.cos(r),h=Math.sin(r);return this.set(n*c,n*h,-n*(c*a+h*l)+a+e,-i*h,i*c,-i*(-h*a+c*l)+l+t,0,0,1),this}scale(e,t){return this.premultiply(jl.makeScale(e,t)),this}rotate(e){return this.premultiply(jl.makeRotation(-e)),this}translate(e,t){return this.premultiply(jl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const jl=new it;function sm(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Ro(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function lx(){const s=Ro("canvas");return s.style.display="block",s}const Fd={};function Es(s){s in Fd||(Fd[s]=!0,console.warn(s))}const Od=new it().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Bd=new it().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),jo={[en]:{transfer:Ya,primaries:Ka,toReference:s=>s,fromReference:s=>s},[Ft]:{transfer:St,primaries:Ka,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[rl]:{transfer:Ya,primaries:$a,toReference:s=>s.applyMatrix3(Bd),fromReference:s=>s.applyMatrix3(Od)},[Mu]:{transfer:St,primaries:$a,toReference:s=>s.convertSRGBToLinear().applyMatrix3(Bd),fromReference:s=>s.applyMatrix3(Od).convertLinearToSRGB()}},cx=new Set([en,rl]),pt={enabled:!0,_workingColorSpace:en,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!cx.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const n=jo[e].toReference,i=jo[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return jo[s].primaries},getTransfer:function(s){return s===Nn?Ya:jo[s].transfer}};function xr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ql(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Bs;class rm{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Bs===void 0&&(Bs=Ro("canvas")),Bs.width=e.width,Bs.height=e.height;const n=Bs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Bs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){const t=Ro("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=xr(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(xr(t[n]/255)*255):t[n]=xr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ux=0;class om{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ux++}),this.uuid=Xn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,l=i.length;a<l;a++)i[a].isDataTexture?r.push(Yl(i[a].image)):r.push(Yl(i[a]))}else r=Yl(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Yl(s){return typeof HTMLImageElement!="undefined"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&s instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&s instanceof ImageBitmap?rm.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let hx=0;class jt extends Ts{constructor(e=jt.DEFAULT_IMAGE,t=jt.DEFAULT_MAPPING,n=hn,i=hn,r=Ut,a=Ei,l=Wt,c=ti,h=jt.DEFAULT_ANISOTROPY,d=Nn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hx++}),this.uuid=Xn(),this.name="",this.source=new om(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=h,this.format=l,this.internalFormat=null,this.type=c,this.offset=new Te(0,0),this.repeat=new Te(1,1),this.center=new Te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new it,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof d=="string"?this.colorSpace=d:(Es("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=d===ws?Ft:Nn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==jf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Er:e.x=e.x-Math.floor(e.x);break;case hn:e.x=e.x<0?0:1;break;case qa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Er:e.y=e.y-Math.floor(e.y);break;case hn:e.y=e.y<0?0:1;break;case qa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Es("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ft?ws:em}set encoding(e){Es("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===ws?Ft:Nn}}jt.DEFAULT_IMAGE=null;jt.DEFAULT_MAPPING=jf;jt.DEFAULT_ANISOTROPY=1;class vt{constructor(e=0,t=0,n=0,i=1){vt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const c=e.elements,h=c[0],d=c[4],f=c[8],m=c[1],v=c[5],b=c[9],w=c[2],x=c[6],g=c[10];if(Math.abs(d-m)<.01&&Math.abs(f-w)<.01&&Math.abs(b-x)<.01){if(Math.abs(d+m)<.1&&Math.abs(f+w)<.1&&Math.abs(b+x)<.1&&Math.abs(h+v+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(h+1)/2,S=(v+1)/2,P=(g+1)/2,C=(d+m)/4,A=(f+w)/4,D=(b+x)/4;return y>S&&y>P?y<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(y),i=C/n,r=A/n):S>P?S<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(S),n=C/i,r=D/i):P<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(P),n=A/r,i=D/r),this.set(n,i,r,t),this}let E=Math.sqrt((x-b)*(x-b)+(f-w)*(f-w)+(m-d)*(m-d));return Math.abs(E)<.001&&(E=1),this.x=(x-b)/E,this.y=(f-w)/E,this.z=(m-d)/E,this.w=Math.acos((h+v+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class dx extends Ts{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new vt(0,0,e,t),this.scissorTest=!1,this.viewport=new vt(0,0,e,t);const i={width:e,height:t,depth:1};n.encoding!==void 0&&(Es("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===ws?Ft:Nn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ut,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new jt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new om(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Bn extends dx{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class am extends jt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=dt,this.minFilter=dt,this.wrapR=hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class px extends jt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=dt,this.minFilter=dt,this.wrapR=hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fx extends Bn{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isWebGLMultipleRenderTargets=!0;const r=this.texture;this.texture=[];for(let a=0;a<n;a++)this.texture[a]=r.clone(),this.texture[a].isRenderTargetTexture=!0}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.texture.length;i<r;i++)this.texture[i].image.width=e,this.texture[i].image.height=t,this.texture[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}copy(e){this.dispose(),this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.texture.length=0;for(let t=0,n=e.texture.length;t<n;t++)this.texture[t]=e.texture[t].clone(),this.texture[t].isRenderTargetTexture=!0;return this}}class Gt{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,l){let c=n[i+0],h=n[i+1],d=n[i+2],f=n[i+3];const m=r[a+0],v=r[a+1],b=r[a+2],w=r[a+3];if(l===0){e[t+0]=c,e[t+1]=h,e[t+2]=d,e[t+3]=f;return}if(l===1){e[t+0]=m,e[t+1]=v,e[t+2]=b,e[t+3]=w;return}if(f!==w||c!==m||h!==v||d!==b){let x=1-l;const g=c*m+h*v+d*b+f*w,E=g>=0?1:-1,y=1-g*g;if(y>Number.EPSILON){const P=Math.sqrt(y),C=Math.atan2(P,g*E);x=Math.sin(x*C)/P,l=Math.sin(l*C)/P}const S=l*E;if(c=c*x+m*S,h=h*x+v*S,d=d*x+b*S,f=f*x+w*S,x===1-l){const P=1/Math.sqrt(c*c+h*h+d*d+f*f);c*=P,h*=P,d*=P,f*=P}}e[t]=c,e[t+1]=h,e[t+2]=d,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,r,a){const l=n[i],c=n[i+1],h=n[i+2],d=n[i+3],f=r[a],m=r[a+1],v=r[a+2],b=r[a+3];return e[t]=l*b+d*f+c*v-h*m,e[t+1]=c*b+d*m+h*f-l*v,e[t+2]=h*b+d*v+l*m-c*f,e[t+3]=d*b-l*f-c*m-h*v,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,a=e._order,l=Math.cos,c=Math.sin,h=l(n/2),d=l(i/2),f=l(r/2),m=c(n/2),v=c(i/2),b=c(r/2);switch(a){case"XYZ":this._x=m*d*f+h*v*b,this._y=h*v*f-m*d*b,this._z=h*d*b+m*v*f,this._w=h*d*f-m*v*b;break;case"YXZ":this._x=m*d*f+h*v*b,this._y=h*v*f-m*d*b,this._z=h*d*b-m*v*f,this._w=h*d*f+m*v*b;break;case"ZXY":this._x=m*d*f-h*v*b,this._y=h*v*f+m*d*b,this._z=h*d*b+m*v*f,this._w=h*d*f-m*v*b;break;case"ZYX":this._x=m*d*f-h*v*b,this._y=h*v*f+m*d*b,this._z=h*d*b-m*v*f,this._w=h*d*f+m*v*b;break;case"YZX":this._x=m*d*f+h*v*b,this._y=h*v*f+m*d*b,this._z=h*d*b-m*v*f,this._w=h*d*f-m*v*b;break;case"XZY":this._x=m*d*f-h*v*b,this._y=h*v*f-m*d*b,this._z=h*d*b+m*v*f,this._w=h*d*f+m*v*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],l=t[5],c=t[9],h=t[2],d=t[6],f=t[10],m=n+l+f;if(m>0){const v=.5/Math.sqrt(m+1);this._w=.25/v,this._x=(d-c)*v,this._y=(r-h)*v,this._z=(a-i)*v}else if(n>l&&n>f){const v=2*Math.sqrt(1+n-l-f);this._w=(d-c)/v,this._x=.25*v,this._y=(i+a)/v,this._z=(r+h)/v}else if(l>f){const v=2*Math.sqrt(1+l-n-f);this._w=(r-h)/v,this._x=(i+a)/v,this._y=.25*v,this._z=(c+d)/v}else{const v=2*Math.sqrt(1+f-n-l);this._w=(a-i)/v,this._x=(r+h)/v,this._y=(c+d)/v,this._z=.25*v}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Kt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,l=t._x,c=t._y,h=t._z,d=t._w;return this._x=n*d+a*l+i*h-r*c,this._y=i*d+a*c+r*l-n*h,this._z=r*d+a*h+n*c-i*l,this._w=a*d-n*l-i*c-r*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,a=this._w;let l=a*e._w+n*e._x+i*e._y+r*e._z;if(l<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,l=-l):this.copy(e),l>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const c=1-l*l;if(c<=Number.EPSILON){const v=1-t;return this._w=v*a+t*this._w,this._x=v*n+t*this._x,this._y=v*i+t*this._y,this._z=v*r+t*this._z,this.normalize(),this}const h=Math.sqrt(c),d=Math.atan2(h,l),f=Math.sin((1-t)*d)/h,m=Math.sin(t*d)/h;return this._w=a*f+this._w*m,this._x=n*f+this._x*m,this._y=i*f+this._y*m,this._z=r*f+this._z*m,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,n=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(kd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(kd.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,l=e.z,c=e.w,h=2*(a*i-l*n),d=2*(l*t-r*i),f=2*(r*n-a*t);return this.x=t+c*h+a*f-l*d,this.y=n+c*d+l*h-r*f,this.z=i+c*f+r*d-a*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,l=t.y,c=t.z;return this.x=i*c-r*l,this.y=r*a-n*c,this.z=n*l-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Kl.copy(this).projectOnVector(e),this.sub(Kl)}reflect(e){return this.sub(Kl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Kt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Kl=new I,kd=new Gt;class Vt{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(kn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(kn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=kn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,l=r.count;a<l;a++)e.isMesh===!0?e.getVertexPosition(a,kn):kn.fromBufferAttribute(r,a),kn.applyMatrix4(e.matrixWorld),this.expandByPoint(kn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),qo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),qo.copy(n.boundingBox)),qo.applyMatrix4(e.matrixWorld),this.union(qo)}const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,kn),kn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Jr),Yo.subVectors(this.max,Jr),ks.subVectors(e.a,Jr),Vs.subVectors(e.b,Jr),zs.subVectors(e.c,Jr),Oi.subVectors(Vs,ks),Bi.subVectors(zs,Vs),os.subVectors(ks,zs);let t=[0,-Oi.z,Oi.y,0,-Bi.z,Bi.y,0,-os.z,os.y,Oi.z,0,-Oi.x,Bi.z,0,-Bi.x,os.z,0,-os.x,-Oi.y,Oi.x,0,-Bi.y,Bi.x,0,-os.y,os.x,0];return!$l(t,ks,Vs,zs,Yo)||(t=[1,0,0,0,1,0,0,0,1],!$l(t,ks,Vs,zs,Yo))?!1:(Ko.crossVectors(Oi,Bi),t=[Ko.x,Ko.y,Ko.z],$l(t,ks,Vs,zs,Yo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,kn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(kn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(pi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const pi=[new I,new I,new I,new I,new I,new I,new I,new I],kn=new I,qo=new Vt,ks=new I,Vs=new I,zs=new I,Oi=new I,Bi=new I,os=new I,Jr=new I,Yo=new I,Ko=new I,as=new I;function $l(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){as.fromArray(s,r);const l=i.x*Math.abs(as.x)+i.y*Math.abs(as.y)+i.z*Math.abs(as.z),c=e.dot(as),h=t.dot(as),d=n.dot(as);if(Math.max(-Math.max(c,h,d),Math.min(c,h,d))>l)return!1}return!0}const mx=new Vt,eo=new I,Zl=new I;class Yn{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):mx.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;eo.subVectors(e,this.center);const t=eo.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(eo,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Zl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(eo.copy(e.center).add(Zl)),this.expandByPoint(eo.copy(e.center).sub(Zl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const fi=new I,Ql=new I,$o=new I,ki=new I,Jl=new I,Zo=new I,ec=new I;class Lr{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=fi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(fi.copy(this.origin).addScaledVector(this.direction,t),fi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Ql.copy(e).add(t).multiplyScalar(.5),$o.copy(t).sub(e).normalize(),ki.copy(this.origin).sub(Ql);const r=e.distanceTo(t)*.5,a=-this.direction.dot($o),l=ki.dot(this.direction),c=-ki.dot($o),h=ki.lengthSq(),d=Math.abs(1-a*a);let f,m,v,b;if(d>0)if(f=a*c-l,m=a*l-c,b=r*d,f>=0)if(m>=-b)if(m<=b){const w=1/d;f*=w,m*=w,v=f*(f+a*m+2*l)+m*(a*f+m+2*c)+h}else m=r,f=Math.max(0,-(a*m+l)),v=-f*f+m*(m+2*c)+h;else m=-r,f=Math.max(0,-(a*m+l)),v=-f*f+m*(m+2*c)+h;else m<=-b?(f=Math.max(0,-(-a*r+l)),m=f>0?-r:Math.min(Math.max(-r,-c),r),v=-f*f+m*(m+2*c)+h):m<=b?(f=0,m=Math.min(Math.max(-r,-c),r),v=m*(m+2*c)+h):(f=Math.max(0,-(a*r+l)),m=f>0?r:Math.min(Math.max(-r,-c),r),v=-f*f+m*(m+2*c)+h);else m=a>0?-r:r,f=Math.max(0,-(a*m+l)),v=-f*f+m*(m+2*c)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(Ql).addScaledVector($o,m),v}intersectSphere(e,t){fi.subVectors(e.center,this.origin);const n=fi.dot(this.direction),i=fi.dot(fi)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),l=n-a,c=n+a;return c<0?null:l<0?this.at(c,t):this.at(l,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,l,c;const h=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,m=this.origin;return h>=0?(n=(e.min.x-m.x)*h,i=(e.max.x-m.x)*h):(n=(e.max.x-m.x)*h,i=(e.min.x-m.x)*h),d>=0?(r=(e.min.y-m.y)*d,a=(e.max.y-m.y)*d):(r=(e.max.y-m.y)*d,a=(e.min.y-m.y)*d),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),f>=0?(l=(e.min.z-m.z)*f,c=(e.max.z-m.z)*f):(l=(e.max.z-m.z)*f,c=(e.min.z-m.z)*f),n>c||l>i)||((l>n||n!==n)&&(n=l),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,fi)!==null}intersectTriangle(e,t,n,i,r){Jl.subVectors(t,e),Zo.subVectors(n,e),ec.crossVectors(Jl,Zo);let a=this.direction.dot(ec),l;if(a>0){if(i)return null;l=1}else if(a<0)l=-1,a=-a;else return null;ki.subVectors(this.origin,e);const c=l*this.direction.dot(Zo.crossVectors(ki,Zo));if(c<0)return null;const h=l*this.direction.dot(Jl.cross(ki));if(h<0||c+h>a)return null;const d=-l*ki.dot(ec);return d<0?null:this.at(d/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Xe{constructor(e,t,n,i,r,a,l,c,h,d,f,m,v,b,w,x){Xe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,l,c,h,d,f,m,v,b,w,x)}set(e,t,n,i,r,a,l,c,h,d,f,m,v,b,w,x){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=i,g[1]=r,g[5]=a,g[9]=l,g[13]=c,g[2]=h,g[6]=d,g[10]=f,g[14]=m,g[3]=v,g[7]=b,g[11]=w,g[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Hs.setFromMatrixColumn(e,0).length(),r=1/Hs.setFromMatrixColumn(e,1).length(),a=1/Hs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),l=Math.sin(n),c=Math.cos(i),h=Math.sin(i),d=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const m=a*d,v=a*f,b=l*d,w=l*f;t[0]=c*d,t[4]=-c*f,t[8]=h,t[1]=v+b*h,t[5]=m-w*h,t[9]=-l*c,t[2]=w-m*h,t[6]=b+v*h,t[10]=a*c}else if(e.order==="YXZ"){const m=c*d,v=c*f,b=h*d,w=h*f;t[0]=m+w*l,t[4]=b*l-v,t[8]=a*h,t[1]=a*f,t[5]=a*d,t[9]=-l,t[2]=v*l-b,t[6]=w+m*l,t[10]=a*c}else if(e.order==="ZXY"){const m=c*d,v=c*f,b=h*d,w=h*f;t[0]=m-w*l,t[4]=-a*f,t[8]=b+v*l,t[1]=v+b*l,t[5]=a*d,t[9]=w-m*l,t[2]=-a*h,t[6]=l,t[10]=a*c}else if(e.order==="ZYX"){const m=a*d,v=a*f,b=l*d,w=l*f;t[0]=c*d,t[4]=b*h-v,t[8]=m*h+w,t[1]=c*f,t[5]=w*h+m,t[9]=v*h-b,t[2]=-h,t[6]=l*c,t[10]=a*c}else if(e.order==="YZX"){const m=a*c,v=a*h,b=l*c,w=l*h;t[0]=c*d,t[4]=w-m*f,t[8]=b*f+v,t[1]=f,t[5]=a*d,t[9]=-l*d,t[2]=-h*d,t[6]=v*f+b,t[10]=m-w*f}else if(e.order==="XZY"){const m=a*c,v=a*h,b=l*c,w=l*h;t[0]=c*d,t[4]=-f,t[8]=h*d,t[1]=m*f+w,t[5]=a*d,t[9]=v*f-b,t[2]=b*f-v,t[6]=l*d,t[10]=w*f+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(gx,e,vx)}lookAt(e,t,n){const i=this.elements;return En.subVectors(e,t),En.lengthSq()===0&&(En.z=1),En.normalize(),Vi.crossVectors(n,En),Vi.lengthSq()===0&&(Math.abs(n.z)===1?En.x+=1e-4:En.z+=1e-4,En.normalize(),Vi.crossVectors(n,En)),Vi.normalize(),Qo.crossVectors(En,Vi),i[0]=Vi.x,i[4]=Qo.x,i[8]=En.x,i[1]=Vi.y,i[5]=Qo.y,i[9]=En.y,i[2]=Vi.z,i[6]=Qo.z,i[10]=En.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],l=n[4],c=n[8],h=n[12],d=n[1],f=n[5],m=n[9],v=n[13],b=n[2],w=n[6],x=n[10],g=n[14],E=n[3],y=n[7],S=n[11],P=n[15],C=i[0],A=i[4],D=i[8],B=i[12],M=i[1],R=i[5],z=i[9],X=i[13],F=i[2],G=i[6],H=i[10],W=i[14],ee=i[3],Z=i[7],se=i[11],ne=i[15];return r[0]=a*C+l*M+c*F+h*ee,r[4]=a*A+l*R+c*G+h*Z,r[8]=a*D+l*z+c*H+h*se,r[12]=a*B+l*X+c*W+h*ne,r[1]=d*C+f*M+m*F+v*ee,r[5]=d*A+f*R+m*G+v*Z,r[9]=d*D+f*z+m*H+v*se,r[13]=d*B+f*X+m*W+v*ne,r[2]=b*C+w*M+x*F+g*ee,r[6]=b*A+w*R+x*G+g*Z,r[10]=b*D+w*z+x*H+g*se,r[14]=b*B+w*X+x*W+g*ne,r[3]=E*C+y*M+S*F+P*ee,r[7]=E*A+y*R+S*G+P*Z,r[11]=E*D+y*z+S*H+P*se,r[15]=E*B+y*X+S*W+P*ne,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],l=e[5],c=e[9],h=e[13],d=e[2],f=e[6],m=e[10],v=e[14],b=e[3],w=e[7],x=e[11],g=e[15];return b*(+r*c*f-i*h*f-r*l*m+n*h*m+i*l*v-n*c*v)+w*(+t*c*v-t*h*m+r*a*m-i*a*v+i*h*d-r*c*d)+x*(+t*h*f-t*l*v-r*a*f+n*a*v+r*l*d-n*h*d)+g*(-i*l*d-t*c*f+t*l*m+i*a*f-n*a*m+n*c*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],l=e[5],c=e[6],h=e[7],d=e[8],f=e[9],m=e[10],v=e[11],b=e[12],w=e[13],x=e[14],g=e[15],E=f*x*h-w*m*h+w*c*v-l*x*v-f*c*g+l*m*g,y=b*m*h-d*x*h-b*c*v+a*x*v+d*c*g-a*m*g,S=d*w*h-b*f*h+b*l*v-a*w*v-d*l*g+a*f*g,P=b*f*c-d*w*c-b*l*m+a*w*m+d*l*x-a*f*x,C=t*E+n*y+i*S+r*P;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/C;return e[0]=E*A,e[1]=(w*m*r-f*x*r-w*i*v+n*x*v+f*i*g-n*m*g)*A,e[2]=(l*x*r-w*c*r+w*i*h-n*x*h-l*i*g+n*c*g)*A,e[3]=(f*c*r-l*m*r-f*i*h+n*m*h+l*i*v-n*c*v)*A,e[4]=y*A,e[5]=(d*x*r-b*m*r+b*i*v-t*x*v-d*i*g+t*m*g)*A,e[6]=(b*c*r-a*x*r-b*i*h+t*x*h+a*i*g-t*c*g)*A,e[7]=(a*m*r-d*c*r+d*i*h-t*m*h-a*i*v+t*c*v)*A,e[8]=S*A,e[9]=(b*f*r-d*w*r-b*n*v+t*w*v+d*n*g-t*f*g)*A,e[10]=(a*w*r-b*l*r+b*n*h-t*w*h-a*n*g+t*l*g)*A,e[11]=(d*l*r-a*f*r-d*n*h+t*f*h+a*n*v-t*l*v)*A,e[12]=P*A,e[13]=(d*w*i-b*f*i+b*n*m-t*w*m-d*n*x+t*f*x)*A,e[14]=(b*l*i-a*w*i-b*n*c+t*w*c+a*n*x-t*l*x)*A,e[15]=(a*f*i-d*l*i+d*n*c-t*f*c-a*n*m+t*l*m)*A,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,l=e.y,c=e.z,h=r*a,d=r*l;return this.set(h*a+n,h*l-i*c,h*c+i*l,0,h*l+i*c,d*l+n,d*c-i*a,0,h*c-i*l,d*c+i*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,l=t._z,c=t._w,h=r+r,d=a+a,f=l+l,m=r*h,v=r*d,b=r*f,w=a*d,x=a*f,g=l*f,E=c*h,y=c*d,S=c*f,P=n.x,C=n.y,A=n.z;return i[0]=(1-(w+g))*P,i[1]=(v+S)*P,i[2]=(b-y)*P,i[3]=0,i[4]=(v-S)*C,i[5]=(1-(m+g))*C,i[6]=(x+E)*C,i[7]=0,i[8]=(b+y)*A,i[9]=(x-E)*A,i[10]=(1-(m+w))*A,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Hs.set(i[0],i[1],i[2]).length();const a=Hs.set(i[4],i[5],i[6]).length(),l=Hs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Vn.copy(this);const h=1/r,d=1/a,f=1/l;return Vn.elements[0]*=h,Vn.elements[1]*=h,Vn.elements[2]*=h,Vn.elements[4]*=d,Vn.elements[5]*=d,Vn.elements[6]*=d,Vn.elements[8]*=f,Vn.elements[9]*=f,Vn.elements[10]*=f,t.setFromRotationMatrix(Vn),n.x=r,n.y=a,n.z=l,this}makePerspective(e,t,n,i,r,a,l=Mi){const c=this.elements,h=2*r/(t-e),d=2*r/(n-i),f=(t+e)/(t-e),m=(n+i)/(n-i);let v,b;if(l===Mi)v=-(a+r)/(a-r),b=-2*a*r/(a-r);else if(l===Za)v=-a/(a-r),b=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=b,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,a,l=Mi){const c=this.elements,h=1/(t-e),d=1/(n-i),f=1/(a-r),m=(t+e)*h,v=(n+i)*d;let b,w;if(l===Mi)b=(a+r)*f,w=-2*f;else if(l===Za)b=r*f,w=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return c[0]=2*h,c[4]=0,c[8]=0,c[12]=-m,c[1]=0,c[5]=2*d,c[9]=0,c[13]=-v,c[2]=0,c[6]=0,c[10]=w,c[14]=-b,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Hs=new I,Vn=new Xe,gx=new I(0,0,0),vx=new I(1,1,1),Vi=new I,Qo=new I,En=new I,Vd=new Xe,zd=new Gt;class Io{constructor(e=0,t=0,n=0,i=Io.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],l=i[8],c=i[1],h=i[5],d=i[9],f=i[2],m=i[6],v=i[10];switch(t){case"XYZ":this._y=Math.asin(Kt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,v),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(m,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Kt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(l,v),this._z=Math.atan2(c,h)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Kt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-f,v),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Kt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(m,v),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(Kt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,h),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(l,v));break;case"XZY":this._z=Math.asin(-Kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(m,h),this._y=Math.atan2(l,r)):(this._x=Math.atan2(-d,v),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Vd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Vd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return zd.setFromEuler(this),this.setFromQuaternion(zd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Io.DEFAULT_ORDER="XYZ";class Tu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let _x=0;const Hd=new I,Gs=new Gt,mi=new Xe,Jo=new I,to=new I,xx=new I,bx=new Gt,Gd=new I(1,0,0),Wd=new I(0,1,0),Xd=new I(0,0,1),yx={type:"added"},wx={type:"removed"};class ft extends Ts{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_x++}),this.uuid=Xn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ft.DEFAULT_UP.clone();const e=new I,t=new Io,n=new Gt,i=new I(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Xe},normalMatrix:{value:new it}}),this.matrix=new Xe,this.matrixWorld=new Xe,this.matrixAutoUpdate=ft.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Tu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Gs.setFromAxisAngle(e,t),this.quaternion.multiply(Gs),this}rotateOnWorldAxis(e,t){return Gs.setFromAxisAngle(e,t),this.quaternion.premultiply(Gs),this}rotateX(e){return this.rotateOnAxis(Gd,e)}rotateY(e){return this.rotateOnAxis(Wd,e)}rotateZ(e){return this.rotateOnAxis(Xd,e)}translateOnAxis(e,t){return Hd.copy(e).applyQuaternion(this.quaternion),this.position.add(Hd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Gd,e)}translateY(e){return this.translateOnAxis(Wd,e)}translateZ(e){return this.translateOnAxis(Xd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(mi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Jo.copy(e):Jo.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),to.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mi.lookAt(to,Jo,this.up):mi.lookAt(Jo,to,this.up),this.quaternion.setFromRotationMatrix(mi),i&&(mi.extractRotation(i.matrixWorld),Gs.setFromRotationMatrix(mi),this.quaternion.premultiply(Gs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(yx)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(wx)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),mi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),mi.multiply(e.parent.matrixWorld)),e.applyMatrix4(mi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(to,e,xx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(to,bx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++){const l=i[r];l.matrixWorldAutoUpdate===!0&&l.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(l=>({boxInitialized:l.boxInitialized,boxMin:l.box.min.toArray(),boxMax:l.box.max.toArray(),sphereInitialized:l.sphereInitialized,sphereRadius:l.sphere.radius,sphereCenter:l.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(l,c){return l[c.uuid]===void 0&&(l[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const c=l.shapes;if(Array.isArray(c))for(let h=0,d=c.length;h<d;h++){const f=c[h];r(e.shapes,f)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let c=0,h=this.material.length;c<h;c++)l.push(r(e.materials,this.material[c]));i.material=l}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let l=0;l<this.children.length;l++)i.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let l=0;l<this.animations.length;l++){const c=this.animations[l];i.animations.push(r(e.animations,c))}}if(t){const l=a(e.geometries),c=a(e.materials),h=a(e.textures),d=a(e.images),f=a(e.shapes),m=a(e.skeletons),v=a(e.animations),b=a(e.nodes);l.length>0&&(n.geometries=l),c.length>0&&(n.materials=c),h.length>0&&(n.textures=h),d.length>0&&(n.images=d),f.length>0&&(n.shapes=f),m.length>0&&(n.skeletons=m),v.length>0&&(n.animations=v),b.length>0&&(n.nodes=b)}return n.object=i,n;function a(l){const c=[];for(const h in l){const d=l[h];delete d.metadata,c.push(d)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}ft.DEFAULT_UP=new I(0,1,0);ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const zn=new I,gi=new I,tc=new I,vi=new I,Ws=new I,Xs=new I,jd=new I,nc=new I,ic=new I,sc=new I;class gn{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),zn.subVectors(e,t),i.cross(zn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){zn.subVectors(i,t),gi.subVectors(n,t),tc.subVectors(e,t);const a=zn.dot(zn),l=zn.dot(gi),c=zn.dot(tc),h=gi.dot(gi),d=gi.dot(tc),f=a*h-l*l;if(f===0)return r.set(0,0,0),null;const m=1/f,v=(h*c-l*d)*m,b=(a*d-l*c)*m;return r.set(1-v-b,b,v)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,vi)===null?!1:vi.x>=0&&vi.y>=0&&vi.x+vi.y<=1}static getInterpolation(e,t,n,i,r,a,l,c){return this.getBarycoord(e,t,n,i,vi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,vi.x),c.addScaledVector(a,vi.y),c.addScaledVector(l,vi.z),c)}static isFrontFacing(e,t,n,i){return zn.subVectors(n,t),gi.subVectors(e,t),zn.cross(gi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return zn.subVectors(this.c,this.b),gi.subVectors(this.a,this.b),zn.cross(gi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return gn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return gn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return gn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return gn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return gn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,l;Ws.subVectors(i,n),Xs.subVectors(r,n),nc.subVectors(e,n);const c=Ws.dot(nc),h=Xs.dot(nc);if(c<=0&&h<=0)return t.copy(n);ic.subVectors(e,i);const d=Ws.dot(ic),f=Xs.dot(ic);if(d>=0&&f<=d)return t.copy(i);const m=c*f-d*h;if(m<=0&&c>=0&&d<=0)return a=c/(c-d),t.copy(n).addScaledVector(Ws,a);sc.subVectors(e,r);const v=Ws.dot(sc),b=Xs.dot(sc);if(b>=0&&v<=b)return t.copy(r);const w=v*h-c*b;if(w<=0&&h>=0&&b<=0)return l=h/(h-b),t.copy(n).addScaledVector(Xs,l);const x=d*b-v*f;if(x<=0&&f-d>=0&&v-b>=0)return jd.subVectors(r,i),l=(f-d)/(f-d+(v-b)),t.copy(i).addScaledVector(jd,l);const g=1/(x+w+m);return a=w*g,l=m*g,t.copy(n).addScaledVector(Ws,a).addScaledVector(Xs,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const lm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zi={h:0,s:0,l:0},ea={h:0,s:0,l:0};function rc(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Ve{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ft){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,pt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=pt.workingColorSpace){return this.r=e,this.g=t,this.b=n,pt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=pt.workingColorSpace){if(e=Su(e,1),t=Kt(t,0,1),n=Kt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=rc(a,r,e+1/3),this.g=rc(a,r,e),this.b=rc(a,r,e-1/3)}return pt.toWorkingColorSpace(this,i),this}setStyle(e,t=Ft){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],l=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ft){const n=lm[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xr(e.r),this.g=xr(e.g),this.b=xr(e.b),this}copyLinearToSRGB(e){return this.r=ql(e.r),this.g=ql(e.g),this.b=ql(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ft){return pt.fromWorkingColorSpace(ln.copy(this),e),Math.round(Kt(ln.r*255,0,255))*65536+Math.round(Kt(ln.g*255,0,255))*256+Math.round(Kt(ln.b*255,0,255))}getHexString(e=Ft){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=pt.workingColorSpace){pt.fromWorkingColorSpace(ln.copy(this),t);const n=ln.r,i=ln.g,r=ln.b,a=Math.max(n,i,r),l=Math.min(n,i,r);let c,h;const d=(l+a)/2;if(l===a)c=0,h=0;else{const f=a-l;switch(h=d<=.5?f/(a+l):f/(2-a-l),a){case n:c=(i-r)/f+(i<r?6:0);break;case i:c=(r-n)/f+2;break;case r:c=(n-i)/f+4;break}c/=6}return e.h=c,e.s=h,e.l=d,e}getRGB(e,t=pt.workingColorSpace){return pt.fromWorkingColorSpace(ln.copy(this),t),e.r=ln.r,e.g=ln.g,e.b=ln.b,e}getStyle(e=Ft){pt.fromWorkingColorSpace(ln.copy(this),e);const t=ln.r,n=ln.g,i=ln.b;return e!==Ft?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(zi),this.setHSL(zi.h+e,zi.s+t,zi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(zi),e.getHSL(ea);const n=Mo(zi.h,ea.h,t),i=Mo(zi.s,ea.s,t),r=Mo(zi.l,ea.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ln=new Ve;Ve.NAMES=lm;let Ex=0;class ni extends Ts{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ex++}),this.uuid=Xn(),this.name="",this.type="Material",this.blending=_r,this.side=jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zc,this.blendDst=Hc,this.blendEquation=ms,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ve(0,0,0),this.blendAlpha=0,this.depthFunc=ja,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Nd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Os,this.stencilZFail=Os,this.stencilZPass=Os,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==_r&&(n.blending=this.blending),this.side!==jn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==zc&&(n.blendSrc=this.blendSrc),this.blendDst!==Hc&&(n.blendDst=this.blendDst),this.blendEquation!==ms&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ja&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Nd&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Os&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Os&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Os&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const l in r){const c=r[l];delete c.metadata,a.push(c)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ei extends ni{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Xf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const wi=Mx();function Mx(){const s=new ArrayBuffer(4),e=new Float32Array(s),t=new Uint32Array(s),n=new Uint32Array(512),i=new Uint32Array(512);for(let c=0;c<256;++c){const h=c-127;h<-27?(n[c]=0,n[c|256]=32768,i[c]=24,i[c|256]=24):h<-14?(n[c]=1024>>-h-14,n[c|256]=1024>>-h-14|32768,i[c]=-h-1,i[c|256]=-h-1):h<=15?(n[c]=h+15<<10,n[c|256]=h+15<<10|32768,i[c]=13,i[c|256]=13):h<128?(n[c]=31744,n[c|256]=64512,i[c]=24,i[c|256]=24):(n[c]=31744,n[c|256]=64512,i[c]=13,i[c|256]=13)}const r=new Uint32Array(2048),a=new Uint32Array(64),l=new Uint32Array(64);for(let c=1;c<1024;++c){let h=c<<13,d=0;for(;(h&8388608)===0;)h<<=1,d-=8388608;h&=-8388609,d+=947912704,r[c]=h|d}for(let c=1024;c<2048;++c)r[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)a[c]=c<<23;a[31]=1199570944,a[32]=2147483648;for(let c=33;c<63;++c)a[c]=2147483648+(c-32<<23);a[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(l[c]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:r,exponentTable:a,offsetTable:l}}function Sx(s){Math.abs(s)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),s=Kt(s,-65504,65504),wi.floatView[0]=s;const e=wi.uint32View[0],t=e>>23&511;return wi.baseTable[t]+((e&8388607)>>wi.shiftTable[t])}function Tx(s){const e=s>>10;return wi.uint32View[0]=wi.mantissaTable[wi.offsetTable[e]+(s&1023)]+wi.exponentTable[e],wi.floatView[0]}const Ax={toHalfFloat:Sx,fromHalfFloat:Tx},zt=new I,ta=new Te;class At{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Yc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=_t,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Es("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ta.fromBufferAttribute(this,t),ta.applyMatrix3(e),this.setXY(t,ta.x,ta.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix3(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix4(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyNormalMatrix(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.transformDirection(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Wn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=mt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Wn(t,this.array)),t}setX(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Wn(t,this.array)),t}setY(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Wn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Wn(t,this.array)),t}setW(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),i=mt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),i=mt(i,this.array),r=mt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Yc&&(e.usage=this.usage),e}}class cm extends At{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class um extends At{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class wt extends At{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Cx=0;const In=new Xe,oc=new ft,js=new I,Mn=new Vt,no=new Vt,Jt=new I;class tn extends Ts{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Cx++}),this.uuid=Xn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(sm(e)?um:cm)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new it().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return In.makeRotationFromQuaternion(e),this.applyMatrix4(In),this}rotateX(e){return In.makeRotationX(e),this.applyMatrix4(In),this}rotateY(e){return In.makeRotationY(e),this.applyMatrix4(In),this}rotateZ(e){return In.makeRotationZ(e),this.applyMatrix4(In),this}translate(e,t,n){return In.makeTranslation(e,t,n),this.applyMatrix4(In),this}scale(e,t,n){return In.makeScale(e,t,n),this.applyMatrix4(In),this}lookAt(e){return oc.lookAt(e),oc.updateMatrix(),this.applyMatrix4(oc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(js).negate(),this.translate(js.x,js.y,js.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new wt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Mn.setFromBufferAttribute(r),this.morphTargetsRelative?(Jt.addVectors(this.boundingBox.min,Mn.min),this.boundingBox.expandByPoint(Jt),Jt.addVectors(this.boundingBox.max,Mn.max),this.boundingBox.expandByPoint(Jt)):(this.boundingBox.expandByPoint(Mn.min),this.boundingBox.expandByPoint(Mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Yn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new I,1/0);return}if(e){const n=this.boundingSphere.center;if(Mn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const l=t[r];no.setFromBufferAttribute(l),this.morphTargetsRelative?(Jt.addVectors(Mn.min,no.min),Mn.expandByPoint(Jt),Jt.addVectors(Mn.max,no.max),Mn.expandByPoint(Jt)):(Mn.expandByPoint(no.min),Mn.expandByPoint(no.max))}Mn.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)Jt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Jt));if(t)for(let r=0,a=t.length;r<a;r++){const l=t[r],c=this.morphTargetsRelative;for(let h=0,d=l.count;h<d;h++)Jt.fromBufferAttribute(l,h),c&&(js.fromBufferAttribute(e,h),Jt.add(js)),i=Math.max(i,n.distanceToSquared(Jt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,a=t.uv.array,l=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new At(new Float32Array(4*l),4));const c=this.getAttribute("tangent").array,h=[],d=[];for(let M=0;M<l;M++)h[M]=new I,d[M]=new I;const f=new I,m=new I,v=new I,b=new Te,w=new Te,x=new Te,g=new I,E=new I;function y(M,R,z){f.fromArray(i,M*3),m.fromArray(i,R*3),v.fromArray(i,z*3),b.fromArray(a,M*2),w.fromArray(a,R*2),x.fromArray(a,z*2),m.sub(f),v.sub(f),w.sub(b),x.sub(b);const X=1/(w.x*x.y-x.x*w.y);!isFinite(X)||(g.copy(m).multiplyScalar(x.y).addScaledVector(v,-w.y).multiplyScalar(X),E.copy(v).multiplyScalar(w.x).addScaledVector(m,-x.x).multiplyScalar(X),h[M].add(g),h[R].add(g),h[z].add(g),d[M].add(E),d[R].add(E),d[z].add(E))}let S=this.groups;S.length===0&&(S=[{start:0,count:n.length}]);for(let M=0,R=S.length;M<R;++M){const z=S[M],X=z.start,F=z.count;for(let G=X,H=X+F;G<H;G+=3)y(n[G+0],n[G+1],n[G+2])}const P=new I,C=new I,A=new I,D=new I;function B(M){A.fromArray(r,M*3),D.copy(A);const R=h[M];P.copy(R),P.sub(A.multiplyScalar(A.dot(R))).normalize(),C.crossVectors(D,R);const X=C.dot(d[M])<0?-1:1;c[M*4]=P.x,c[M*4+1]=P.y,c[M*4+2]=P.z,c[M*4+3]=X}for(let M=0,R=S.length;M<R;++M){const z=S[M],X=z.start,F=z.count;for(let G=X,H=X+F;G<H;G+=3)B(n[G+0]),B(n[G+1]),B(n[G+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new At(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let m=0,v=n.count;m<v;m++)n.setXYZ(m,0,0,0);const i=new I,r=new I,a=new I,l=new I,c=new I,h=new I,d=new I,f=new I;if(e)for(let m=0,v=e.count;m<v;m+=3){const b=e.getX(m+0),w=e.getX(m+1),x=e.getX(m+2);i.fromBufferAttribute(t,b),r.fromBufferAttribute(t,w),a.fromBufferAttribute(t,x),d.subVectors(a,r),f.subVectors(i,r),d.cross(f),l.fromBufferAttribute(n,b),c.fromBufferAttribute(n,w),h.fromBufferAttribute(n,x),l.add(d),c.add(d),h.add(d),n.setXYZ(b,l.x,l.y,l.z),n.setXYZ(w,c.x,c.y,c.z),n.setXYZ(x,h.x,h.y,h.z)}else for(let m=0,v=t.count;m<v;m+=3)i.fromBufferAttribute(t,m+0),r.fromBufferAttribute(t,m+1),a.fromBufferAttribute(t,m+2),d.subVectors(a,r),f.subVectors(i,r),d.cross(f),n.setXYZ(m+0,d.x,d.y,d.z),n.setXYZ(m+1,d.x,d.y,d.z),n.setXYZ(m+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Jt.fromBufferAttribute(e,t),Jt.normalize(),e.setXYZ(t,Jt.x,Jt.y,Jt.z)}toNonIndexed(){function e(l,c){const h=l.array,d=l.itemSize,f=l.normalized,m=new h.constructor(c.length*d);let v=0,b=0;for(let w=0,x=c.length;w<x;w++){l.isInterleavedBufferAttribute?v=c[w]*l.data.stride+l.offset:v=c[w]*d;for(let g=0;g<d;g++)m[b++]=h[v++]}return new At(m,d,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new tn,n=this.index.array,i=this.attributes;for(const l in i){const c=i[l],h=e(c,n);t.setAttribute(l,h)}const r=this.morphAttributes;for(const l in r){const c=[],h=r[l];for(let d=0,f=h.length;d<f;d++){const m=h[d],v=e(m,n);c.push(v)}t.morphAttributes[l]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let l=0,c=a.length;l<c;l++){const h=a[l];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const h in c)c[h]!==void 0&&(e[h]=c[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const h=n[c];e.data.attributes[c]=h.toJSON(e.data)}const i={};let r=!1;for(const c in this.morphAttributes){const h=this.morphAttributes[c],d=[];for(let f=0,m=h.length;f<m;f++){const v=h[f];d.push(v.toJSON(e.data))}d.length>0&&(i[c]=d,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const l=this.boundingSphere;return l!==null&&(e.data.boundingSphere={center:l.center.toArray(),radius:l.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const h in i){const d=i[h];this.setAttribute(h,d.clone(t))}const r=e.morphAttributes;for(const h in r){const d=[],f=r[h];for(let m=0,v=f.length;m<v;m++)d.push(f[m].clone(t));this.morphAttributes[h]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let h=0,d=a.length;h<d;h++){const f=a[h];this.addGroup(f.start,f.count,f.materialIndex)}const l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const qd=new Xe,ls=new Lr,na=new Yn,Yd=new I,qs=new I,Ys=new I,Ks=new I,ac=new I,ia=new I,sa=new Te,ra=new Te,oa=new Te,Kd=new I,$d=new I,Zd=new I,aa=new I,la=new I;class pe extends ft{constructor(e=new tn,t=new ei){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const l=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const l=this.morphTargetInfluences;if(r&&l){ia.set(0,0,0);for(let c=0,h=r.length;c<h;c++){const d=l[c],f=r[c];d!==0&&(ac.fromBufferAttribute(f,e),a?ia.addScaledVector(ac,d):ia.addScaledVector(ac.sub(t),d))}t.add(ia)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),na.copy(n.boundingSphere),na.applyMatrix4(r),ls.copy(e.ray).recast(e.near),!(na.containsPoint(ls.origin)===!1&&(ls.intersectSphere(na,Yd)===null||ls.origin.distanceToSquared(Yd)>(e.far-e.near)**2))&&(qd.copy(r).invert(),ls.copy(e.ray).applyMatrix4(qd),!(n.boundingBox!==null&&ls.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ls)))}_computeIntersections(e,t,n){let i;const r=this.geometry,a=this.material,l=r.index,c=r.attributes.position,h=r.attributes.uv,d=r.attributes.uv1,f=r.attributes.normal,m=r.groups,v=r.drawRange;if(l!==null)if(Array.isArray(a))for(let b=0,w=m.length;b<w;b++){const x=m[b],g=a[x.materialIndex],E=Math.max(x.start,v.start),y=Math.min(l.count,Math.min(x.start+x.count,v.start+v.count));for(let S=E,P=y;S<P;S+=3){const C=l.getX(S),A=l.getX(S+1),D=l.getX(S+2);i=ca(this,g,e,n,h,d,f,C,A,D),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=x.materialIndex,t.push(i))}}else{const b=Math.max(0,v.start),w=Math.min(l.count,v.start+v.count);for(let x=b,g=w;x<g;x+=3){const E=l.getX(x),y=l.getX(x+1),S=l.getX(x+2);i=ca(this,a,e,n,h,d,f,E,y,S),i&&(i.faceIndex=Math.floor(x/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let b=0,w=m.length;b<w;b++){const x=m[b],g=a[x.materialIndex],E=Math.max(x.start,v.start),y=Math.min(c.count,Math.min(x.start+x.count,v.start+v.count));for(let S=E,P=y;S<P;S+=3){const C=S,A=S+1,D=S+2;i=ca(this,g,e,n,h,d,f,C,A,D),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=x.materialIndex,t.push(i))}}else{const b=Math.max(0,v.start),w=Math.min(c.count,v.start+v.count);for(let x=b,g=w;x<g;x+=3){const E=x,y=x+1,S=x+2;i=ca(this,a,e,n,h,d,f,E,y,S),i&&(i.faceIndex=Math.floor(x/3),t.push(i))}}}}function Px(s,e,t,n,i,r,a,l){let c;if(e.side===xn?c=n.intersectTriangle(a,r,i,!0,l):c=n.intersectTriangle(i,r,a,e.side===jn,l),c===null)return null;la.copy(l),la.applyMatrix4(s.matrixWorld);const h=t.ray.origin.distanceTo(la);return h<t.near||h>t.far?null:{distance:h,point:la.clone(),object:s}}function ca(s,e,t,n,i,r,a,l,c,h){s.getVertexPosition(l,qs),s.getVertexPosition(c,Ys),s.getVertexPosition(h,Ks);const d=Px(s,e,t,n,qs,Ys,Ks,aa);if(d){i&&(sa.fromBufferAttribute(i,l),ra.fromBufferAttribute(i,c),oa.fromBufferAttribute(i,h),d.uv=gn.getInterpolation(aa,qs,Ys,Ks,sa,ra,oa,new Te)),r&&(sa.fromBufferAttribute(r,l),ra.fromBufferAttribute(r,c),oa.fromBufferAttribute(r,h),d.uv1=gn.getInterpolation(aa,qs,Ys,Ks,sa,ra,oa,new Te),d.uv2=d.uv1),a&&(Kd.fromBufferAttribute(a,l),$d.fromBufferAttribute(a,c),Zd.fromBufferAttribute(a,h),d.normal=gn.getInterpolation(aa,qs,Ys,Ks,Kd,$d,Zd,new I),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const f={a:l,b:c,c:h,normal:new I,materialIndex:0};gn.getNormal(qs,Ys,Ks,f.normal),d.face=f}return d}class xt extends tn{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const l=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const c=[],h=[],d=[],f=[];let m=0,v=0;b("z","y","x",-1,-1,n,t,e,a,r,0),b("z","y","x",1,-1,n,t,-e,a,r,1),b("x","z","y",1,1,e,n,t,i,a,2),b("x","z","y",1,-1,e,n,-t,i,a,3),b("x","y","z",1,-1,e,t,n,i,r,4),b("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new wt(h,3)),this.setAttribute("normal",new wt(d,3)),this.setAttribute("uv",new wt(f,2));function b(w,x,g,E,y,S,P,C,A,D,B){const M=S/A,R=P/D,z=S/2,X=P/2,F=C/2,G=A+1,H=D+1;let W=0,ee=0;const Z=new I;for(let se=0;se<H;se++){const ne=se*R-X;for(let ve=0;ve<G;ve++){const fe=ve*M-z;Z[w]=fe*E,Z[x]=ne*y,Z[g]=F,h.push(Z.x,Z.y,Z.z),Z[w]=0,Z[x]=0,Z[g]=C>0?1:-1,d.push(Z.x,Z.y,Z.z),f.push(ve/A),f.push(1-se/D),W+=1}}for(let se=0;se<D;se++)for(let ne=0;ne<A;ne++){const ve=m+ne+G*se,fe=m+ne+G*(se+1),K=m+(ne+1)+G*(se+1),ie=m+(ne+1)+G*se;c.push(ve,fe,ie),c.push(fe,K,ie),ee+=6}l.addGroup(v,ee,B),v+=ee,m+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ar(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function pn(s){const e={};for(let t=0;t<s.length;t++){const n=Ar(s[t]);for(const i in n)e[i]=n[i]}return e}function Rx(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function hm(s){return s.getRenderTarget()===null?s.outputColorSpace:pt.workingColorSpace}const Lx={clone:Ar,merge:pn};var Ix=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Dx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class rn extends ni{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ix,this.fragmentShader=Dx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ar(e.uniforms),this.uniformsGroups=Rx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class dm extends ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xe,this.projectionMatrix=new Xe,this.projectionMatrixInverse=new Xe,this.coordinateSystem=Mi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Hi=new I,Qd=new Te,Jd=new Te;class fn extends dm{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Tr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Eo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Tr*2*Math.atan(Math.tan(Eo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Hi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Hi.x,Hi.y).multiplyScalar(-e/Hi.z),Hi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Hi.x,Hi.y).multiplyScalar(-e/Hi.z)}getViewSize(e,t){return this.getViewBounds(e,Qd,Jd),t.subVectors(Jd,Qd)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Eo*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,h=a.fullHeight;r+=a.offsetX*i/c,t-=a.offsetY*n/h,i*=a.width/c,n*=a.height/h}const l=this.filmOffset;l!==0&&(r+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const $s=-90,Zs=1;class Nx extends ft{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new fn($s,Zs,e,t);i.layers=this.layers,this.add(i);const r=new fn($s,Zs,e,t);r.layers=this.layers,this.add(r);const a=new fn($s,Zs,e,t);a.layers=this.layers,this.add(a);const l=new fn($s,Zs,e,t);l.layers=this.layers,this.add(l);const c=new fn($s,Zs,e,t);c.layers=this.layers,this.add(c);const h=new fn($s,Zs,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,l,c]=t;for(const h of t)this.remove(h);if(e===Mi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Za)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,l,c,h,d]=this.children,f=e.getRenderTarget(),m=e.getActiveCubeFace(),v=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const w=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,l),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,h),n.texture.generateMipmaps=w,e.setRenderTarget(n,5,i),e.render(t,d),e.setRenderTarget(f,m,v),e.xr.enabled=b,n.texture.needsPMREMUpdate=!0}}class pm extends jt{constructor(e,t,n,i,r,a,l,c,h,d){e=e!==void 0?e:[],t=t!==void 0?t:yr,super(e,t,n,i,r,a,l,c,h,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ux extends Bn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(Es("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===ws?Ft:Nn),this.texture=new pm(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ut}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new xt(5,5,5),r=new rn({name:"CubemapFromEquirect",uniforms:Ar(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:xn,blending:On});r.uniforms.tEquirect.value=t;const a=new pe(i,r),l=t.minFilter;return t.minFilter===Ei&&(t.minFilter=Ut),new Nx(1,10,this).update(e,a),t.minFilter=l,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}const lc=new I,Fx=new I,Ox=new it;class Qn{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=lc.subVectors(n,t).cross(Fx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(lc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Ox.getNormalMatrix(e),i=this.coplanarPoint(lc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const cs=new Yn,ua=new I;class Au{constructor(e=new Qn,t=new Qn,n=new Qn,i=new Qn,r=new Qn,a=new Qn){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(n),l[3].copy(i),l[4].copy(r),l[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Mi){const n=this.planes,i=e.elements,r=i[0],a=i[1],l=i[2],c=i[3],h=i[4],d=i[5],f=i[6],m=i[7],v=i[8],b=i[9],w=i[10],x=i[11],g=i[12],E=i[13],y=i[14],S=i[15];if(n[0].setComponents(c-r,m-h,x-v,S-g).normalize(),n[1].setComponents(c+r,m+h,x+v,S+g).normalize(),n[2].setComponents(c+a,m+d,x+b,S+E).normalize(),n[3].setComponents(c-a,m-d,x-b,S-E).normalize(),n[4].setComponents(c-l,m-f,x-w,S-y).normalize(),t===Mi)n[5].setComponents(c+l,m+f,x+w,S+y).normalize();else if(t===Za)n[5].setComponents(l,f,w,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),cs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),cs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(cs)}intersectsSprite(e){return cs.center.set(0,0,0),cs.radius=.7071067811865476,cs.applyMatrix4(e.matrixWorld),this.intersectsSphere(cs)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(ua.x=i.normal.x>0?e.max.x:e.min.x,ua.y=i.normal.y>0?e.max.y:e.min.y,ua.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ua)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function fm(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Bx(s,e){const t=e.isWebGL2,n=new WeakMap;function i(h,d){const f=h.array,m=h.usage,v=f.byteLength,b=s.createBuffer();s.bindBuffer(d,b),s.bufferData(d,f,m),h.onUploadCallback();let w;if(f instanceof Float32Array)w=s.FLOAT;else if(f instanceof Uint16Array)if(h.isFloat16BufferAttribute)if(t)w=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else w=s.UNSIGNED_SHORT;else if(f instanceof Int16Array)w=s.SHORT;else if(f instanceof Uint32Array)w=s.UNSIGNED_INT;else if(f instanceof Int32Array)w=s.INT;else if(f instanceof Int8Array)w=s.BYTE;else if(f instanceof Uint8Array)w=s.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)w=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:b,type:w,bytesPerElement:f.BYTES_PER_ELEMENT,version:h.version,size:v}}function r(h,d,f){const m=d.array,v=d._updateRange,b=d.updateRanges;if(s.bindBuffer(f,h),v.count===-1&&b.length===0&&s.bufferSubData(f,0,m),b.length!==0){for(let w=0,x=b.length;w<x;w++){const g=b[w];t?s.bufferSubData(f,g.start*m.BYTES_PER_ELEMENT,m,g.start,g.count):s.bufferSubData(f,g.start*m.BYTES_PER_ELEMENT,m.subarray(g.start,g.start+g.count))}d.clearUpdateRanges()}v.count!==-1&&(t?s.bufferSubData(f,v.offset*m.BYTES_PER_ELEMENT,m,v.offset,v.count):s.bufferSubData(f,v.offset*m.BYTES_PER_ELEMENT,m.subarray(v.offset,v.offset+v.count)),v.count=-1),d.onUploadCallback()}function a(h){return h.isInterleavedBufferAttribute&&(h=h.data),n.get(h)}function l(h){h.isInterleavedBufferAttribute&&(h=h.data);const d=n.get(h);d&&(s.deleteBuffer(d.buffer),n.delete(h))}function c(h,d){if(h.isGLBufferAttribute){const m=n.get(h);(!m||m.version<h.version)&&n.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}h.isInterleavedBufferAttribute&&(h=h.data);const f=n.get(h);if(f===void 0)n.set(h,i(h,d));else if(f.version<h.version){if(f.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(f.buffer,h,d),f.version=h.version}}return{get:a,remove:l,update:c}}class Kn extends tn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,l=Math.floor(n),c=Math.floor(i),h=l+1,d=c+1,f=e/l,m=t/c,v=[],b=[],w=[],x=[];for(let g=0;g<d;g++){const E=g*m-a;for(let y=0;y<h;y++){const S=y*f-r;b.push(S,-E,0),w.push(0,0,1),x.push(y/l),x.push(1-g/c)}}for(let g=0;g<c;g++)for(let E=0;E<l;E++){const y=E+h*g,S=E+h*(g+1),P=E+1+h*(g+1),C=E+1+h*g;v.push(y,S,C),v.push(S,P,C)}this.setIndex(v),this.setAttribute("position",new wt(b,3)),this.setAttribute("normal",new wt(w,3)),this.setAttribute("uv",new wt(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kn(e.width,e.height,e.widthSegments,e.heightSegments)}}var kx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Vx=`#ifdef USE_ALPHAHASH
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
#endif`,zx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Hx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Wx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Xx=`#ifdef USE_AOMAP
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
#endif`,jx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qx=`#ifdef USE_BATCHING
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
#endif`,Yx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Kx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$x=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Zx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Qx=`#ifdef USE_IRIDESCENCE
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
#endif`,Jx=`#ifdef USE_BUMPMAP
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
#endif`,eb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,tb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,nb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ib=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,sb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,rb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ob=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,ab=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,lb=`#define PI 3.141592653589793
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
} // validated`,cb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ub=`vec3 transformedNormal = objectNormal;
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
#endif`,hb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,db=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,pb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,fb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mb="gl_FragColor = linearToOutputTexel( gl_FragColor );",gb=`
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
}`,vb=`#ifdef USE_ENVMAP
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
#endif`,_b=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,xb=`#ifdef USE_ENVMAP
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
#endif`,bb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,yb=`#ifdef USE_ENVMAP
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
#endif`,wb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Eb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Mb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Sb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Tb=`#ifdef USE_GRADIENTMAP
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
}`,Ab=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Cb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Pb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Rb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Lb=`uniform bool receiveShadow;
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
#endif`,Ib=`#ifdef USE_ENVMAP
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
#endif`,Db=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Nb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ub=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Fb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ob=`PhysicalMaterial material;
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
#endif`,Bb=`struct PhysicalMaterial {
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
}`,kb=`
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
#endif`,Vb=`#if defined( RE_IndirectDiffuse )
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
#endif`,zb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Hb=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Gb=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wb=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Xb=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,jb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Yb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Kb=`#if defined( USE_POINTS_UV )
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
#endif`,$b=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Zb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Qb=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Jb=`#ifdef USE_MORPHNORMALS
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
#endif`,ey=`#ifdef USE_MORPHTARGETS
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
#endif`,ty=`#ifdef USE_MORPHTARGETS
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
#endif`,ny=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,iy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,sy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ry=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,oy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ay=`#ifdef USE_NORMALMAP
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
#endif`,ly=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,cy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,uy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,hy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,dy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,py=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,fy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,my=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_y=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,by=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,yy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ey=`float getShadowMask() {
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
}`,My=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Sy=`#ifdef USE_SKINNING
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
#endif`,Ty=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ay=`#ifdef USE_SKINNING
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
#endif`,Cy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Py=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ry=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ly=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Iy=`#ifdef USE_TRANSMISSION
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
#endif`,Dy=`#ifdef USE_TRANSMISSION
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
#endif`,Ny=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Uy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Oy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const By=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ky=`uniform sampler2D t2D;
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
}`,Vy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zy=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Hy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wy=`#include <common>
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
}`,Xy=`#if DEPTH_PACKING == 3200
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
}`,jy=`#define DISTANCE
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
}`,qy=`#define DISTANCE
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
}`,Yy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ky=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$y=`uniform float scale;
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
}`,Zy=`uniform vec3 diffuse;
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
}`,Qy=`#include <common>
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
}`,Jy=`uniform vec3 diffuse;
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
}`,ew=`#define LAMBERT
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
}`,tw=`#define LAMBERT
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
}`,nw=`#define MATCAP
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
}`,iw=`#define MATCAP
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
}`,sw=`#define NORMAL
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
}`,rw=`#define NORMAL
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
}`,ow=`#define PHONG
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
}`,aw=`#define PHONG
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
}`,lw=`#define STANDARD
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
}`,cw=`#define STANDARD
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
}`,uw=`#define TOON
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
}`,hw=`#define TOON
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
}`,dw=`uniform float size;
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
}`,pw=`uniform vec3 diffuse;
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
}`,fw=`#include <common>
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
}`,mw=`uniform vec3 color;
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
}`,gw=`uniform float rotation;
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
}`,vw=`uniform vec3 diffuse;
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
}`,et={alphahash_fragment:kx,alphahash_pars_fragment:Vx,alphamap_fragment:zx,alphamap_pars_fragment:Hx,alphatest_fragment:Gx,alphatest_pars_fragment:Wx,aomap_fragment:Xx,aomap_pars_fragment:jx,batching_pars_vertex:qx,batching_vertex:Yx,begin_vertex:Kx,beginnormal_vertex:$x,bsdfs:Zx,iridescence_fragment:Qx,bumpmap_pars_fragment:Jx,clipping_planes_fragment:eb,clipping_planes_pars_fragment:tb,clipping_planes_pars_vertex:nb,clipping_planes_vertex:ib,color_fragment:sb,color_pars_fragment:rb,color_pars_vertex:ob,color_vertex:ab,common:lb,cube_uv_reflection_fragment:cb,defaultnormal_vertex:ub,displacementmap_pars_vertex:hb,displacementmap_vertex:db,emissivemap_fragment:pb,emissivemap_pars_fragment:fb,colorspace_fragment:mb,colorspace_pars_fragment:gb,envmap_fragment:vb,envmap_common_pars_fragment:_b,envmap_pars_fragment:xb,envmap_pars_vertex:bb,envmap_physical_pars_fragment:Ib,envmap_vertex:yb,fog_vertex:wb,fog_pars_vertex:Eb,fog_fragment:Mb,fog_pars_fragment:Sb,gradientmap_pars_fragment:Tb,lightmap_fragment:Ab,lightmap_pars_fragment:Cb,lights_lambert_fragment:Pb,lights_lambert_pars_fragment:Rb,lights_pars_begin:Lb,lights_toon_fragment:Db,lights_toon_pars_fragment:Nb,lights_phong_fragment:Ub,lights_phong_pars_fragment:Fb,lights_physical_fragment:Ob,lights_physical_pars_fragment:Bb,lights_fragment_begin:kb,lights_fragment_maps:Vb,lights_fragment_end:zb,logdepthbuf_fragment:Hb,logdepthbuf_pars_fragment:Gb,logdepthbuf_pars_vertex:Wb,logdepthbuf_vertex:Xb,map_fragment:jb,map_pars_fragment:qb,map_particle_fragment:Yb,map_particle_pars_fragment:Kb,metalnessmap_fragment:$b,metalnessmap_pars_fragment:Zb,morphcolor_vertex:Qb,morphnormal_vertex:Jb,morphtarget_pars_vertex:ey,morphtarget_vertex:ty,normal_fragment_begin:ny,normal_fragment_maps:iy,normal_pars_fragment:sy,normal_pars_vertex:ry,normal_vertex:oy,normalmap_pars_fragment:ay,clearcoat_normal_fragment_begin:ly,clearcoat_normal_fragment_maps:cy,clearcoat_pars_fragment:uy,iridescence_pars_fragment:hy,opaque_fragment:dy,packing:py,premultiplied_alpha_fragment:fy,project_vertex:my,dithering_fragment:gy,dithering_pars_fragment:vy,roughnessmap_fragment:_y,roughnessmap_pars_fragment:xy,shadowmap_pars_fragment:by,shadowmap_pars_vertex:yy,shadowmap_vertex:wy,shadowmask_pars_fragment:Ey,skinbase_vertex:My,skinning_pars_vertex:Sy,skinning_vertex:Ty,skinnormal_vertex:Ay,specularmap_fragment:Cy,specularmap_pars_fragment:Py,tonemapping_fragment:Ry,tonemapping_pars_fragment:Ly,transmission_fragment:Iy,transmission_pars_fragment:Dy,uv_pars_fragment:Ny,uv_pars_vertex:Uy,uv_vertex:Fy,worldpos_vertex:Oy,background_vert:By,background_frag:ky,backgroundCube_vert:Vy,backgroundCube_frag:zy,cube_vert:Hy,cube_frag:Gy,depth_vert:Wy,depth_frag:Xy,distanceRGBA_vert:jy,distanceRGBA_frag:qy,equirect_vert:Yy,equirect_frag:Ky,linedashed_vert:$y,linedashed_frag:Zy,meshbasic_vert:Qy,meshbasic_frag:Jy,meshlambert_vert:ew,meshlambert_frag:tw,meshmatcap_vert:nw,meshmatcap_frag:iw,meshnormal_vert:sw,meshnormal_frag:rw,meshphong_vert:ow,meshphong_frag:aw,meshphysical_vert:lw,meshphysical_frag:cw,meshtoon_vert:uw,meshtoon_frag:hw,points_vert:dw,points_frag:pw,shadow_vert:fw,shadow_frag:mw,sprite_vert:gw,sprite_frag:vw},me={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new it}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new it}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new it}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new it},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new it},normalScale:{value:new Te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new it},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new it}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new it}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new it}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0},uvTransform:{value:new it}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new Te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}}},Jn={basic:{uniforms:pn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:pn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Ve(0)}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:pn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:pn([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:pn([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new Ve(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:pn([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:pn([me.points,me.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:pn([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:pn([me.common,me.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:pn([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:pn([me.sprite,me.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new it},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:et.background_vert,fragmentShader:et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:et.backgroundCube_vert,fragmentShader:et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distanceRGBA:{uniforms:pn([me.common,me.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distanceRGBA_vert,fragmentShader:et.distanceRGBA_frag},shadow:{uniforms:pn([me.lights,me.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};Jn.physical={uniforms:pn([Jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new it},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new it},clearcoatNormalScale:{value:new Te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new it},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new it},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new it},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new it},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new it},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new it},transmissionSamplerSize:{value:new Te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new it},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new it},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new it},anisotropyVector:{value:new Te},anisotropyMap:{value:null},anisotropyMapTransform:{value:new it}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};const ha={r:0,b:0,g:0};function _w(s,e,t,n,i,r,a){const l=new Ve(0);let c=r===!0?0:1,h,d,f=null,m=0,v=null;function b(x,g){let E=!1,y=g.isScene===!0?g.background:null;y&&y.isTexture&&(y=(g.backgroundBlurriness>0?t:e).get(y)),y===null?w(l,c):y&&y.isColor&&(w(y,1),E=!0);const S=s.xr.getEnvironmentBlendMode();S==="additive"?n.buffers.color.setClear(0,0,0,1,a):S==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||E)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),y&&(y.isCubeTexture||y.mapping===nl)?(d===void 0&&(d=new pe(new xt(1,1,1),new rn({name:"BackgroundCubeMaterial",uniforms:Ar(Jn.backgroundCube.uniforms),vertexShader:Jn.backgroundCube.vertexShader,fragmentShader:Jn.backgroundCube.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(P,C,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(d)),d.material.uniforms.envMap.value=y,d.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,d.material.toneMapped=pt.getTransfer(y.colorSpace)!==St,(f!==y||m!==y.version||v!==s.toneMapping)&&(d.material.needsUpdate=!0,f=y,m=y.version,v=s.toneMapping),d.layers.enableAll(),x.unshift(d,d.geometry,d.material,0,0,null)):y&&y.isTexture&&(h===void 0&&(h=new pe(new Kn(2,2),new rn({name:"BackgroundMaterial",uniforms:Ar(Jn.background.uniforms),vertexShader:Jn.background.vertexShader,fragmentShader:Jn.background.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(h)),h.material.uniforms.t2D.value=y,h.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,h.material.toneMapped=pt.getTransfer(y.colorSpace)!==St,y.matrixAutoUpdate===!0&&y.updateMatrix(),h.material.uniforms.uvTransform.value.copy(y.matrix),(f!==y||m!==y.version||v!==s.toneMapping)&&(h.material.needsUpdate=!0,f=y,m=y.version,v=s.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null))}function w(x,g){x.getRGB(ha,hm(s)),n.buffers.color.setClear(ha.r,ha.g,ha.b,g,a)}return{getClearColor:function(){return l},setClearColor:function(x,g=1){l.set(x),c=g,w(l,c)},getClearAlpha:function(){return c},setClearAlpha:function(x){c=x,w(l,c)},render:b}}function xw(s,e,t,n){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,l={},c=x(null);let h=c,d=!1;function f(F,G,H,W,ee){let Z=!1;if(a){const se=w(W,H,G);h!==se&&(h=se,v(h.object)),Z=g(F,W,H,ee),Z&&E(F,W,H,ee)}else{const se=G.wireframe===!0;(h.geometry!==W.id||h.program!==H.id||h.wireframe!==se)&&(h.geometry=W.id,h.program=H.id,h.wireframe=se,Z=!0)}ee!==null&&t.update(ee,s.ELEMENT_ARRAY_BUFFER),(Z||d)&&(d=!1,D(F,G,H,W),ee!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(ee).buffer))}function m(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function v(F){return n.isWebGL2?s.bindVertexArray(F):r.bindVertexArrayOES(F)}function b(F){return n.isWebGL2?s.deleteVertexArray(F):r.deleteVertexArrayOES(F)}function w(F,G,H){const W=H.wireframe===!0;let ee=l[F.id];ee===void 0&&(ee={},l[F.id]=ee);let Z=ee[G.id];Z===void 0&&(Z={},ee[G.id]=Z);let se=Z[W];return se===void 0&&(se=x(m()),Z[W]=se),se}function x(F){const G=[],H=[],W=[];for(let ee=0;ee<i;ee++)G[ee]=0,H[ee]=0,W[ee]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:H,attributeDivisors:W,object:F,attributes:{},index:null}}function g(F,G,H,W){const ee=h.attributes,Z=G.attributes;let se=0;const ne=H.getAttributes();for(const ve in ne)if(ne[ve].location>=0){const K=ee[ve];let ie=Z[ve];if(ie===void 0&&(ve==="instanceMatrix"&&F.instanceMatrix&&(ie=F.instanceMatrix),ve==="instanceColor"&&F.instanceColor&&(ie=F.instanceColor)),K===void 0||K.attribute!==ie||ie&&K.data!==ie.data)return!0;se++}return h.attributesNum!==se||h.index!==W}function E(F,G,H,W){const ee={},Z=G.attributes;let se=0;const ne=H.getAttributes();for(const ve in ne)if(ne[ve].location>=0){let K=Z[ve];K===void 0&&(ve==="instanceMatrix"&&F.instanceMatrix&&(K=F.instanceMatrix),ve==="instanceColor"&&F.instanceColor&&(K=F.instanceColor));const ie={};ie.attribute=K,K&&K.data&&(ie.data=K.data),ee[ve]=ie,se++}h.attributes=ee,h.attributesNum=se,h.index=W}function y(){const F=h.newAttributes;for(let G=0,H=F.length;G<H;G++)F[G]=0}function S(F){P(F,0)}function P(F,G){const H=h.newAttributes,W=h.enabledAttributes,ee=h.attributeDivisors;H[F]=1,W[F]===0&&(s.enableVertexAttribArray(F),W[F]=1),ee[F]!==G&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](F,G),ee[F]=G)}function C(){const F=h.newAttributes,G=h.enabledAttributes;for(let H=0,W=G.length;H<W;H++)G[H]!==F[H]&&(s.disableVertexAttribArray(H),G[H]=0)}function A(F,G,H,W,ee,Z,se){se===!0?s.vertexAttribIPointer(F,G,H,ee,Z):s.vertexAttribPointer(F,G,H,W,ee,Z)}function D(F,G,H,W){if(n.isWebGL2===!1&&(F.isInstancedMesh||W.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();const ee=W.attributes,Z=H.getAttributes(),se=G.defaultAttributeValues;for(const ne in Z){const ve=Z[ne];if(ve.location>=0){let fe=ee[ne];if(fe===void 0&&(ne==="instanceMatrix"&&F.instanceMatrix&&(fe=F.instanceMatrix),ne==="instanceColor"&&F.instanceColor&&(fe=F.instanceColor)),fe!==void 0){const K=fe.normalized,ie=fe.itemSize,we=t.get(fe);if(we===void 0)continue;const Le=we.buffer,Ie=we.type,Ee=we.bytesPerElement,He=n.isWebGL2===!0&&(Ie===s.INT||Ie===s.UNSIGNED_INT||fe.gpuType===wo);if(fe.isInterleavedBufferAttribute){const Be=fe.data,q=Be.stride,It=fe.offset;if(Be.isInstancedInterleavedBuffer){for(let Ae=0;Ae<ve.locationSize;Ae++)P(ve.location+Ae,Be.meshPerAttribute);F.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=Be.meshPerAttribute*Be.count)}else for(let Ae=0;Ae<ve.locationSize;Ae++)S(ve.location+Ae);s.bindBuffer(s.ARRAY_BUFFER,Le);for(let Ae=0;Ae<ve.locationSize;Ae++)A(ve.location+Ae,ie/ve.locationSize,Ie,K,q*Ee,(It+ie/ve.locationSize*Ae)*Ee,He)}else{if(fe.isInstancedBufferAttribute){for(let Be=0;Be<ve.locationSize;Be++)P(ve.location+Be,fe.meshPerAttribute);F.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let Be=0;Be<ve.locationSize;Be++)S(ve.location+Be);s.bindBuffer(s.ARRAY_BUFFER,Le);for(let Be=0;Be<ve.locationSize;Be++)A(ve.location+Be,ie/ve.locationSize,Ie,K,ie*Ee,ie/ve.locationSize*Be*Ee,He)}}else if(se!==void 0){const K=se[ne];if(K!==void 0)switch(K.length){case 2:s.vertexAttrib2fv(ve.location,K);break;case 3:s.vertexAttrib3fv(ve.location,K);break;case 4:s.vertexAttrib4fv(ve.location,K);break;default:s.vertexAttrib1fv(ve.location,K)}}}}C()}function B(){z();for(const F in l){const G=l[F];for(const H in G){const W=G[H];for(const ee in W)b(W[ee].object),delete W[ee];delete G[H]}delete l[F]}}function M(F){if(l[F.id]===void 0)return;const G=l[F.id];for(const H in G){const W=G[H];for(const ee in W)b(W[ee].object),delete W[ee];delete G[H]}delete l[F.id]}function R(F){for(const G in l){const H=l[G];if(H[F.id]===void 0)continue;const W=H[F.id];for(const ee in W)b(W[ee].object),delete W[ee];delete H[F.id]}}function z(){X(),d=!0,h!==c&&(h=c,v(h.object))}function X(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:f,reset:z,resetDefaultState:X,dispose:B,releaseStatesOfGeometry:M,releaseStatesOfProgram:R,initAttributes:y,enableAttribute:S,disableUnusedAttributes:C}}function bw(s,e,t,n){const i=n.isWebGL2;let r;function a(d){r=d}function l(d,f){s.drawArrays(r,d,f),t.update(f,r,1)}function c(d,f,m){if(m===0)return;let v,b;if(i)v=s,b="drawArraysInstanced";else if(v=e.get("ANGLE_instanced_arrays"),b="drawArraysInstancedANGLE",v===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[b](r,d,f,m),t.update(f,r,m)}function h(d,f,m){if(m===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let b=0;b<m;b++)this.render(d[b],f[b]);else{v.multiDrawArraysWEBGL(r,d,0,f,0,m);let b=0;for(let w=0;w<m;w++)b+=f[w];t.update(b,r,1)}}this.setMode=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function yw(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(A){if(A==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext!="undefined"&&s.constructor.name==="WebGL2RenderingContext";let l=t.precision!==void 0?t.precision:"highp";const c=r(l);c!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",c,"instead."),l=c);const h=a||e.has("WEBGL_draw_buffers"),d=t.logarithmicDepthBuffer===!0,f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_TEXTURE_SIZE),b=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),w=s.getParameter(s.MAX_VERTEX_ATTRIBS),x=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),g=s.getParameter(s.MAX_VARYING_VECTORS),E=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),y=m>0,S=a||e.has("OES_texture_float"),P=y&&S,C=a?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:h,getMaxAnisotropy:i,getMaxPrecision:r,precision:l,logarithmicDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:b,maxAttributes:w,maxVertexUniforms:x,maxVaryings:g,maxFragmentUniforms:E,vertexTextures:y,floatFragmentTextures:S,floatVertexTextures:P,maxSamples:C}}function ww(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new Qn,l=new it,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,m){const v=f.length!==0||m||n!==0||i;return i=m,n=f.length,v},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,m){t=d(f,m,0)},this.setState=function(f,m,v){const b=f.clippingPlanes,w=f.clipIntersection,x=f.clipShadows,g=s.get(f);if(!i||b===null||b.length===0||r&&!x)r?d(null):h();else{const E=r?0:n,y=E*4;let S=g.clippingState||null;c.value=S,S=d(b,m,y,v);for(let P=0;P!==y;++P)S[P]=t[P];g.clippingState=S,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=E}};function h(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(f,m,v,b){const w=f!==null?f.length:0;let x=null;if(w!==0){if(x=c.value,b!==!0||x===null){const g=v+w*4,E=m.matrixWorldInverse;l.getNormalMatrix(E),(x===null||x.length<g)&&(x=new Float32Array(g));for(let y=0,S=v;y!==w;++y,S+=4)a.copy(f[y]).applyMatrix4(E,l),a.normal.toArray(x,S),x[S+3]=a.constant}c.value=x,c.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,x}}function Ew(s){let e=new WeakMap;function t(a,l){return l===Gc?a.mapping=yr:l===Wc&&(a.mapping=wr),a}function n(a){if(a&&a.isTexture){const l=a.mapping;if(l===Gc||l===Wc)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const h=new Ux(c.height);return h.fromEquirectangularTexture(s,a),e.set(a,h),a.addEventListener("dispose",i),t(h.texture,a.mapping)}else return null}}return a}function i(a){const l=a.target;l.removeEventListener("dispose",i);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Ti extends dm{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,l=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,a=r+h*this.view.width,l-=d*this.view.offsetY,c=l-d*this.view.height}this.projectionMatrix.makeOrthographic(r,a,l,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const fr=4,ep=[.125,.215,.35,.446,.526,.582],gs=20,cc=new Ti,tp=new Ve;let uc=null,hc=0,dc=0;const ds=(1+Math.sqrt(5))/2,Qs=1/ds,np=[new I(1,1,1),new I(-1,1,1),new I(1,1,-1),new I(-1,1,-1),new I(0,ds,Qs),new I(0,ds,-Qs),new I(Qs,0,ds),new I(-Qs,0,ds),new I(ds,Qs,0),new I(-ds,Qs,0)];class ip{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){uc=this._renderer.getRenderTarget(),hc=this._renderer.getActiveCubeFace(),dc=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=op(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(uc,hc,dc),e.scissorTest=!1,da(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===yr||e.mapping===wr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),uc=this._renderer.getRenderTarget(),hc=this._renderer.getActiveCubeFace(),dc=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ut,minFilter:Ut,generateMipmaps:!1,type:ii,format:Wt,colorSpace:en,depthBuffer:!1},i=sp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sp(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Mw(r)),this._blurMaterial=Sw(r,e,t)}return i}_compileMaterial(e){const t=new pe(this._lodPlanes[0],e);this._renderer.compile(t,cc)}_sceneToCubeUV(e,t,n,i){const l=new fn(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,m=d.toneMapping;d.getClearColor(tp),d.toneMapping=Zi,d.autoClear=!1;const v=new ei({name:"PMREM.Background",side:xn,depthWrite:!1,depthTest:!1}),b=new pe(new xt,v);let w=!1;const x=e.background;x?x.isColor&&(v.color.copy(x),e.background=null,w=!0):(v.color.copy(tp),w=!0);for(let g=0;g<6;g++){const E=g%3;E===0?(l.up.set(0,c[g],0),l.lookAt(h[g],0,0)):E===1?(l.up.set(0,0,c[g]),l.lookAt(0,h[g],0)):(l.up.set(0,c[g],0),l.lookAt(0,0,h[g]));const y=this._cubeSize;da(i,E*y,g>2?y:0,y,y),d.setRenderTarget(i),w&&d.render(b,l),d.render(e,l)}b.geometry.dispose(),b.material.dispose(),d.toneMapping=m,d.autoClear=f,e.background=x}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===yr||e.mapping===wr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=op()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rp());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new pe(this._lodPlanes[0],r),l=r.uniforms;l.envMap.value=e;const c=this._cubeSize;da(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,cc)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=np[(i-1)%np.length];this._blur(e,i-1,i,r,a)}t.autoClear=n}_blur(e,t,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,l){const c=this._renderer,h=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,f=new pe(this._lodPlanes[i],h),m=h.uniforms,v=this._sizeLods[n]-1,b=isFinite(r)?Math.PI/(2*v):2*Math.PI/(2*gs-1),w=r/b,x=isFinite(r)?1+Math.floor(d*w):gs;x>gs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${gs}`);const g=[];let E=0;for(let A=0;A<gs;++A){const D=A/w,B=Math.exp(-D*D/2);g.push(B),A===0?E+=B:A<x&&(E+=2*B)}for(let A=0;A<g.length;A++)g[A]=g[A]/E;m.envMap.value=e.texture,m.samples.value=x,m.weights.value=g,m.latitudinal.value=a==="latitudinal",l&&(m.poleAxis.value=l);const{_lodMax:y}=this;m.dTheta.value=b,m.mipInt.value=y-n;const S=this._sizeLods[i],P=3*S*(i>y-fr?i-y+fr:0),C=4*(this._cubeSize-S);da(t,P,C,3*S,2*S),c.setRenderTarget(t),c.render(f,cc)}}function Mw(s){const e=[],t=[],n=[];let i=s;const r=s-fr+1+ep.length;for(let a=0;a<r;a++){const l=Math.pow(2,i);t.push(l);let c=1/l;a>s-fr?c=ep[a-s+fr-1]:a===0&&(c=0),n.push(c);const h=1/(l-2),d=-h,f=1+h,m=[d,d,f,d,f,f,d,d,f,f,d,f],v=6,b=6,w=3,x=2,g=1,E=new Float32Array(w*b*v),y=new Float32Array(x*b*v),S=new Float32Array(g*b*v);for(let C=0;C<v;C++){const A=C%3*2/3-1,D=C>2?0:-1,B=[A,D,0,A+2/3,D,0,A+2/3,D+1,0,A,D,0,A+2/3,D+1,0,A,D+1,0];E.set(B,w*b*C),y.set(m,x*b*C);const M=[C,C,C,C,C,C];S.set(M,g*b*C)}const P=new tn;P.setAttribute("position",new At(E,w)),P.setAttribute("uv",new At(y,x)),P.setAttribute("faceIndex",new At(S,g)),e.push(P),i>fr&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function sp(s,e,t){const n=new Bn(s,e,t);return n.texture.mapping=nl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function da(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Sw(s,e,t){const n=new Float32Array(gs),i=new I(0,1,0);return new rn({name:"SphericalGaussianBlur",defines:{n:gs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Cu(),fragmentShader:`

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
		`,blending:On,depthTest:!1,depthWrite:!1})}function rp(){return new rn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Cu(),fragmentShader:`

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
		`,blending:On,depthTest:!1,depthWrite:!1})}function op(){return new rn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Cu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function Cu(){return`

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
	`}function Tw(s){let e=new WeakMap,t=null;function n(l){if(l&&l.isTexture){const c=l.mapping,h=c===Gc||c===Wc,d=c===yr||c===wr;if(h||d)if(l.isRenderTargetTexture&&l.needsPMREMUpdate===!0){l.needsPMREMUpdate=!1;let f=e.get(l);return t===null&&(t=new ip(s)),f=h?t.fromEquirectangular(l,f):t.fromCubemap(l,f),e.set(l,f),f.texture}else{if(e.has(l))return e.get(l).texture;{const f=l.image;if(h&&f&&f.height>0||d&&f&&i(f)){t===null&&(t=new ip(s));const m=h?t.fromEquirectangular(l):t.fromCubemap(l);return e.set(l,m),l.addEventListener("dispose",r),m.texture}else return null}}}return l}function i(l){let c=0;const h=6;for(let d=0;d<h;d++)l[d]!==void 0&&c++;return c===h}function r(l){const c=l.target;c.removeEventListener("dispose",r);const h=e.get(c);h!==void 0&&(e.delete(c),h.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Aw(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Cw(s,e,t,n){const i={},r=new WeakMap;function a(f){const m=f.target;m.index!==null&&e.remove(m.index);for(const b in m.attributes)e.remove(m.attributes[b]);for(const b in m.morphAttributes){const w=m.morphAttributes[b];for(let x=0,g=w.length;x<g;x++)e.remove(w[x])}m.removeEventListener("dispose",a),delete i[m.id];const v=r.get(m);v&&(e.remove(v),r.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function l(f,m){return i[m.id]===!0||(m.addEventListener("dispose",a),i[m.id]=!0,t.memory.geometries++),m}function c(f){const m=f.attributes;for(const b in m)e.update(m[b],s.ARRAY_BUFFER);const v=f.morphAttributes;for(const b in v){const w=v[b];for(let x=0,g=w.length;x<g;x++)e.update(w[x],s.ARRAY_BUFFER)}}function h(f){const m=[],v=f.index,b=f.attributes.position;let w=0;if(v!==null){const E=v.array;w=v.version;for(let y=0,S=E.length;y<S;y+=3){const P=E[y+0],C=E[y+1],A=E[y+2];m.push(P,C,C,A,A,P)}}else if(b!==void 0){const E=b.array;w=b.version;for(let y=0,S=E.length/3-1;y<S;y+=3){const P=y+0,C=y+1,A=y+2;m.push(P,C,C,A,A,P)}}else return;const x=new(sm(m)?um:cm)(m,1);x.version=w;const g=r.get(f);g&&e.remove(g),r.set(f,x)}function d(f){const m=r.get(f);if(m){const v=f.index;v!==null&&m.version<v.version&&h(f)}else h(f);return r.get(f)}return{get:l,update:c,getWireframeAttribute:d}}function Pw(s,e,t,n){const i=n.isWebGL2;let r;function a(v){r=v}let l,c;function h(v){l=v.type,c=v.bytesPerElement}function d(v,b){s.drawElements(r,b,l,v*c),t.update(b,r,1)}function f(v,b,w){if(w===0)return;let x,g;if(i)x=s,g="drawElementsInstanced";else if(x=e.get("ANGLE_instanced_arrays"),g="drawElementsInstancedANGLE",x===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}x[g](r,b,l,v*c,w),t.update(b,r,w)}function m(v,b,w){if(w===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let g=0;g<w;g++)this.render(v[g]/c,b[g]);else{x.multiDrawElementsWEBGL(r,b,0,l,v,0,w);let g=0;for(let E=0;E<w;E++)g+=b[E];t.update(g,r,1)}}this.setMode=a,this.setIndex=h,this.render=d,this.renderInstances=f,this.renderMultiDraw=m}function Rw(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,l){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=l*(r/3);break;case s.LINES:t.lines+=l*(r/2);break;case s.LINE_STRIP:t.lines+=l*(r-1);break;case s.LINE_LOOP:t.lines+=l*r;break;case s.POINTS:t.points+=l*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Lw(s,e){return s[0]-e[0]}function Iw(s,e){return Math.abs(e[1])-Math.abs(s[1])}function Dw(s,e,t){const n={},i=new Float32Array(8),r=new WeakMap,a=new vt,l=[];for(let h=0;h<8;h++)l[h]=[h,0];function c(h,d,f){const m=h.morphTargetInfluences;if(e.isWebGL2===!0){const v=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,b=v!==void 0?v.length:0;let w=r.get(d);if(w===void 0||w.count!==b){let F=function(){z.dispose(),r.delete(d),d.removeEventListener("dispose",F)};w!==void 0&&w.texture.dispose();const E=d.morphAttributes.position!==void 0,y=d.morphAttributes.normal!==void 0,S=d.morphAttributes.color!==void 0,P=d.morphAttributes.position||[],C=d.morphAttributes.normal||[],A=d.morphAttributes.color||[];let D=0;E===!0&&(D=1),y===!0&&(D=2),S===!0&&(D=3);let B=d.attributes.position.count*D,M=1;B>e.maxTextureSize&&(M=Math.ceil(B/e.maxTextureSize),B=e.maxTextureSize);const R=new Float32Array(B*M*4*b),z=new am(R,B,M,b);z.type=_t,z.needsUpdate=!0;const X=D*4;for(let G=0;G<b;G++){const H=P[G],W=C[G],ee=A[G],Z=B*M*4*G;for(let se=0;se<H.count;se++){const ne=se*X;E===!0&&(a.fromBufferAttribute(H,se),R[Z+ne+0]=a.x,R[Z+ne+1]=a.y,R[Z+ne+2]=a.z,R[Z+ne+3]=0),y===!0&&(a.fromBufferAttribute(W,se),R[Z+ne+4]=a.x,R[Z+ne+5]=a.y,R[Z+ne+6]=a.z,R[Z+ne+7]=0),S===!0&&(a.fromBufferAttribute(ee,se),R[Z+ne+8]=a.x,R[Z+ne+9]=a.y,R[Z+ne+10]=a.z,R[Z+ne+11]=ee.itemSize===4?a.w:1)}}w={count:b,texture:z,size:new Te(B,M)},r.set(d,w),d.addEventListener("dispose",F)}let x=0;for(let E=0;E<m.length;E++)x+=m[E];const g=d.morphTargetsRelative?1:1-x;f.getUniforms().setValue(s,"morphTargetBaseInfluence",g),f.getUniforms().setValue(s,"morphTargetInfluences",m),f.getUniforms().setValue(s,"morphTargetsTexture",w.texture,t),f.getUniforms().setValue(s,"morphTargetsTextureSize",w.size)}else{const v=m===void 0?0:m.length;let b=n[d.id];if(b===void 0||b.length!==v){b=[];for(let y=0;y<v;y++)b[y]=[y,0];n[d.id]=b}for(let y=0;y<v;y++){const S=b[y];S[0]=y,S[1]=m[y]}b.sort(Iw);for(let y=0;y<8;y++)y<v&&b[y][1]?(l[y][0]=b[y][0],l[y][1]=b[y][1]):(l[y][0]=Number.MAX_SAFE_INTEGER,l[y][1]=0);l.sort(Lw);const w=d.morphAttributes.position,x=d.morphAttributes.normal;let g=0;for(let y=0;y<8;y++){const S=l[y],P=S[0],C=S[1];P!==Number.MAX_SAFE_INTEGER&&C?(w&&d.getAttribute("morphTarget"+y)!==w[P]&&d.setAttribute("morphTarget"+y,w[P]),x&&d.getAttribute("morphNormal"+y)!==x[P]&&d.setAttribute("morphNormal"+y,x[P]),i[y]=C,g+=C):(w&&d.hasAttribute("morphTarget"+y)===!0&&d.deleteAttribute("morphTarget"+y),x&&d.hasAttribute("morphNormal"+y)===!0&&d.deleteAttribute("morphNormal"+y),i[y]=0)}const E=d.morphTargetsRelative?1:1-g;f.getUniforms().setValue(s,"morphTargetBaseInfluence",E),f.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:c}}function Nw(s,e,t,n){let i=new WeakMap;function r(c){const h=n.render.frame,d=c.geometry,f=e.get(c,d);if(i.get(f)!==h&&(e.update(f),i.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),i.get(c)!==h&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,h))),c.isSkinnedMesh){const m=c.skeleton;i.get(m)!==h&&(m.update(),i.set(m,h))}return f}function a(){i=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:r,dispose:a}}class mm extends jt{constructor(e,t,n,i,r,a,l,c,h,d){if(d=d!==void 0?d:ys,d!==ys&&d!==Mr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===ys&&(n=Tn),n===void 0&&d===Mr&&(n=bs),super(null,i,r,a,l,c,d,n,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=l!==void 0?l:dt,this.minFilter=c!==void 0?c:dt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const gm=new jt,vm=new mm(1,1);vm.compareFunction=nm;const _m=new am,xm=new px,bm=new pm,ap=[],lp=[],cp=new Float32Array(16),up=new Float32Array(9),hp=new Float32Array(4);function Ir(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=ap[i];if(r===void 0&&(r=new Float32Array(i),ap[i]=r),e!==0){n.toArray(r,0);for(let a=1,l=0;a!==e;++a)l+=t,s[a].toArray(r,l)}return r}function $t(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Zt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function ol(s,e){let t=lp[e];t===void 0&&(t=new Int32Array(e),lp[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Uw(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Fw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;s.uniform2fv(this.addr,e),Zt(t,e)}}function Ow(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if($t(t,e))return;s.uniform3fv(this.addr,e),Zt(t,e)}}function Bw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;s.uniform4fv(this.addr,e),Zt(t,e)}}function kw(s,e){const t=this.cache,n=e.elements;if(n===void 0){if($t(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Zt(t,e)}else{if($t(t,n))return;hp.set(n),s.uniformMatrix2fv(this.addr,!1,hp),Zt(t,n)}}function Vw(s,e){const t=this.cache,n=e.elements;if(n===void 0){if($t(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Zt(t,e)}else{if($t(t,n))return;up.set(n),s.uniformMatrix3fv(this.addr,!1,up),Zt(t,n)}}function zw(s,e){const t=this.cache,n=e.elements;if(n===void 0){if($t(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Zt(t,e)}else{if($t(t,n))return;cp.set(n),s.uniformMatrix4fv(this.addr,!1,cp),Zt(t,n)}}function Hw(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Gw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;s.uniform2iv(this.addr,e),Zt(t,e)}}function Ww(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($t(t,e))return;s.uniform3iv(this.addr,e),Zt(t,e)}}function Xw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;s.uniform4iv(this.addr,e),Zt(t,e)}}function jw(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function qw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;s.uniform2uiv(this.addr,e),Zt(t,e)}}function Yw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($t(t,e))return;s.uniform3uiv(this.addr,e),Zt(t,e)}}function Kw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;s.uniform4uiv(this.addr,e),Zt(t,e)}}function $w(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);const r=this.type===s.SAMPLER_2D_SHADOW?vm:gm;t.setTexture2D(e||r,i)}function Zw(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||xm,i)}function Qw(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||bm,i)}function Jw(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||_m,i)}function eE(s){switch(s){case 5126:return Uw;case 35664:return Fw;case 35665:return Ow;case 35666:return Bw;case 35674:return kw;case 35675:return Vw;case 35676:return zw;case 5124:case 35670:return Hw;case 35667:case 35671:return Gw;case 35668:case 35672:return Ww;case 35669:case 35673:return Xw;case 5125:return jw;case 36294:return qw;case 36295:return Yw;case 36296:return Kw;case 35678:case 36198:case 36298:case 36306:case 35682:return $w;case 35679:case 36299:case 36307:return Zw;case 35680:case 36300:case 36308:case 36293:return Qw;case 36289:case 36303:case 36311:case 36292:return Jw}}function tE(s,e){s.uniform1fv(this.addr,e)}function nE(s,e){const t=Ir(e,this.size,2);s.uniform2fv(this.addr,t)}function iE(s,e){const t=Ir(e,this.size,3);s.uniform3fv(this.addr,t)}function sE(s,e){const t=Ir(e,this.size,4);s.uniform4fv(this.addr,t)}function rE(s,e){const t=Ir(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function oE(s,e){const t=Ir(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function aE(s,e){const t=Ir(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function lE(s,e){s.uniform1iv(this.addr,e)}function cE(s,e){s.uniform2iv(this.addr,e)}function uE(s,e){s.uniform3iv(this.addr,e)}function hE(s,e){s.uniform4iv(this.addr,e)}function dE(s,e){s.uniform1uiv(this.addr,e)}function pE(s,e){s.uniform2uiv(this.addr,e)}function fE(s,e){s.uniform3uiv(this.addr,e)}function mE(s,e){s.uniform4uiv(this.addr,e)}function gE(s,e,t){const n=this.cache,i=e.length,r=ol(t,i);$t(n,r)||(s.uniform1iv(this.addr,r),Zt(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||gm,r[a])}function vE(s,e,t){const n=this.cache,i=e.length,r=ol(t,i);$t(n,r)||(s.uniform1iv(this.addr,r),Zt(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||xm,r[a])}function _E(s,e,t){const n=this.cache,i=e.length,r=ol(t,i);$t(n,r)||(s.uniform1iv(this.addr,r),Zt(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||bm,r[a])}function xE(s,e,t){const n=this.cache,i=e.length,r=ol(t,i);$t(n,r)||(s.uniform1iv(this.addr,r),Zt(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||_m,r[a])}function bE(s){switch(s){case 5126:return tE;case 35664:return nE;case 35665:return iE;case 35666:return sE;case 35674:return rE;case 35675:return oE;case 35676:return aE;case 5124:case 35670:return lE;case 35667:case 35671:return cE;case 35668:case 35672:return uE;case 35669:case 35673:return hE;case 5125:return dE;case 36294:return pE;case 36295:return fE;case 36296:return mE;case 35678:case 36198:case 36298:case 36306:case 35682:return gE;case 35679:case 36299:case 36307:return vE;case 35680:case 36300:case 36308:case 36293:return _E;case 36289:case 36303:case 36311:case 36292:return xE}}class yE{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=eE(t.type)}}class wE{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=bE(t.type)}}class EE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const l=i[r];l.setValue(e,t[l.id],n)}}}const pc=/(\w+)(\])?(\[|\.)?/g;function dp(s,e){s.seq.push(e),s.map[e.id]=e}function ME(s,e,t){const n=s.name,i=n.length;for(pc.lastIndex=0;;){const r=pc.exec(n),a=pc.lastIndex;let l=r[1];const c=r[2]==="]",h=r[3];if(c&&(l=l|0),h===void 0||h==="["&&a+2===i){dp(t,h===void 0?new yE(l,s,e):new wE(l,s,e));break}else{let f=t.map[l];f===void 0&&(f=new EE(l),dp(t,f)),t=f}}}class Va{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);ME(r,a,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const l=t[r],c=n[l.id];c.needsUpdate!==!1&&l.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function pp(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const SE=37297;let TE=0;function AE(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const l=a+1;n.push(`${l===e?">":" "} ${l}: ${t[a]}`)}return n.join(`
`)}function CE(s){const e=pt.getPrimaries(pt.workingColorSpace),t=pt.getPrimaries(s);let n;switch(e===t?n="":e===$a&&t===Ka?n="LinearDisplayP3ToLinearSRGB":e===Ka&&t===$a&&(n="LinearSRGBToLinearDisplayP3"),s){case en:case rl:return[n,"LinearTransferOETF"];case Ft:case Mu:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function fp(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+AE(s.getShaderSource(e),a)}else return i}function PE(s,e){const t=CE(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function RE(s,e){let t;switch(e){case S_:t="Linear";break;case T_:t="Reinhard";break;case A_:t="OptimizedCineon";break;case C_:t="ACESFilmic";break;case R_:t="AgX";break;case P_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function LE(s){return[s.extensionDerivatives||!!s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.alphaToCoverage||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(mr).join(`
`)}function IE(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(mr).join(`
`)}function DE(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function NE(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),a=r.name;let l=1;r.type===s.FLOAT_MAT2&&(l=2),r.type===s.FLOAT_MAT3&&(l=3),r.type===s.FLOAT_MAT4&&(l=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:l}}return t}function mr(s){return s!==""}function mp(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function gp(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const UE=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zc(s){return s.replace(UE,OE)}const FE=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function OE(s,e){let t=et[e];if(t===void 0){const n=FE.get(e);if(n!==void 0)t=et[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Zc(t)}const BE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vp(s){return s.replace(BE,kE)}function kE(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function _p(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}function VE(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Wf?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Jv?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===bi&&(e="SHADOWMAP_TYPE_VSM"),e}function zE(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case yr:case wr:e="ENVMAP_TYPE_CUBE";break;case nl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function HE(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case wr:e="ENVMAP_MODE_REFRACTION";break}return e}function GE(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Xf:e="ENVMAP_BLENDING_MULTIPLY";break;case E_:e="ENVMAP_BLENDING_MIX";break;case M_:e="ENVMAP_BLENDING_ADD";break}return e}function WE(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function XE(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,l=t.fragmentShader;const c=VE(t),h=zE(t),d=HE(t),f=GE(t),m=WE(t),v=t.isWebGL2?"":LE(t),b=IE(t),w=DE(r),x=i.createProgram();let g,E,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w].filter(mr).join(`
`),g.length>0&&(g+=`
`),E=[v,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w].filter(mr).join(`
`),E.length>0&&(E+=`
`)):(g=[_p(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(mr).join(`
`),E=[v,_p(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",t.envMap?"#define "+f:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Zi?"#define TONE_MAPPING":"",t.toneMapping!==Zi?et.tonemapping_pars_fragment:"",t.toneMapping!==Zi?RE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",et.colorspace_pars_fragment,PE("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(mr).join(`
`)),a=Zc(a),a=mp(a,t),a=gp(a,t),l=Zc(l),l=mp(l,t),l=gp(l,t),a=vp(a),l=vp(l),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,g=[b,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,E=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===si?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===si?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+E);const S=y+g+a,P=y+E+l,C=pp(i,i.VERTEX_SHADER,S),A=pp(i,i.FRAGMENT_SHADER,P);i.attachShader(x,C),i.attachShader(x,A),t.index0AttributeName!==void 0?i.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function D(z){if(s.debug.checkShaderErrors){const X=i.getProgramInfoLog(x).trim(),F=i.getShaderInfoLog(C).trim(),G=i.getShaderInfoLog(A).trim();let H=!0,W=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(H=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,C,A);else{const ee=fp(i,C,"vertex"),Z=fp(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+X+`
`+ee+`
`+Z)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(F===""||G==="")&&(W=!1);W&&(z.diagnostics={runnable:H,programLog:X,vertexShader:{log:F,prefix:g},fragmentShader:{log:G,prefix:E}})}i.deleteShader(C),i.deleteShader(A),B=new Va(i,x),M=NE(i,x)}let B;this.getUniforms=function(){return B===void 0&&D(this),B};let M;this.getAttributes=function(){return M===void 0&&D(this),M};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=i.getProgramParameter(x,SE)),R},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=TE++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=C,this.fragmentShader=A,this}let jE=0;class qE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new YE(e),t.set(e,n)),n}}class YE{constructor(e){this.id=jE++,this.code=e,this.usedTimes=0}}function KE(s,e,t,n,i,r,a){const l=new Tu,c=new qE,h=new Set,d=[],f=i.isWebGL2,m=i.logarithmicDepthBuffer,v=i.vertexTextures;let b=i.precision;const w={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return h.add(M),M===0?"uv":`uv${M}`}function g(M,R,z,X,F){const G=X.fog,H=F.geometry,W=M.isMeshStandardMaterial?X.environment:null,ee=(M.isMeshStandardMaterial?t:e).get(M.envMap||W),Z=!!ee&&ee.mapping===nl?ee.image.height:null,se=w[M.type];M.precision!==null&&(b=i.getMaxPrecision(M.precision),b!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",b,"instead."));const ne=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ve=ne!==void 0?ne.length:0;let fe=0;H.morphAttributes.position!==void 0&&(fe=1),H.morphAttributes.normal!==void 0&&(fe=2),H.morphAttributes.color!==void 0&&(fe=3);let K,ie,we,Le;if(se){const tt=Jn[se];K=tt.vertexShader,ie=tt.fragmentShader}else K=M.vertexShader,ie=M.fragmentShader,c.update(M),we=c.getVertexShaderID(M),Le=c.getFragmentShaderID(M);const Ie=s.getRenderTarget(),Ee=F.isInstancedMesh===!0,He=F.isBatchedMesh===!0,Be=!!M.map,q=!!M.matcap,It=!!ee,Ae=!!M.aoMap,Ge=!!M.lightMap,Ce=!!M.bumpMap,bt=!!M.normalMap,je=!!M.displacementMap,U=!!M.emissiveMap,L=!!M.metalnessMap,$=!!M.roughnessMap,he=M.anisotropy>0,ae=M.clearcoat>0,ce=M.iridescence>0,Se=M.sheen>0,ge=M.transmission>0,be=he&&!!M.anisotropyMap,Oe=ae&&!!M.clearcoatMap,ze=ae&&!!M.clearcoatNormalMap,oe=ae&&!!M.clearcoatRoughnessMap,st=ce&&!!M.iridescenceMap,Je=ce&&!!M.iridescenceThicknessMap,We=Se&&!!M.sheenColorMap,Pe=Se&&!!M.sheenRoughnessMap,xe=!!M.specularMap,$e=!!M.specularColorMap,k=!!M.specularIntensityMap,de=ge&&!!M.transmissionMap,_e=ge&&!!M.thicknessMap,Re=!!M.gradientMap,O=!!M.alphaMap,re=M.alphaTest>0,le=!!M.alphaHash,Me=!!M.extensions;let Ue=Zi;M.toneMapped&&(Ie===null||Ie.isXRRenderTarget===!0)&&(Ue=s.toneMapping);const nt={isWebGL2:f,shaderID:se,shaderType:M.type,shaderName:M.name,vertexShader:K,fragmentShader:ie,defines:M.defines,customVertexShaderID:we,customFragmentShaderID:Le,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:b,batching:He,instancing:Ee,instancingColor:Ee&&F.instanceColor!==null,supportsVertexTextures:v,outputColorSpace:Ie===null?s.outputColorSpace:Ie.isXRRenderTarget===!0?Ie.texture.colorSpace:en,alphaToCoverage:!!M.alphaToCoverage,map:Be,matcap:q,envMap:It,envMapMode:It&&ee.mapping,envMapCubeUVHeight:Z,aoMap:Ae,lightMap:Ge,bumpMap:Ce,normalMap:bt,displacementMap:v&&je,emissiveMap:U,normalMapObjectSpace:bt&&M.normalMapType===V_,normalMapTangentSpace:bt&&M.normalMapType===tm,metalnessMap:L,roughnessMap:$,anisotropy:he,anisotropyMap:be,clearcoat:ae,clearcoatMap:Oe,clearcoatNormalMap:ze,clearcoatRoughnessMap:oe,iridescence:ce,iridescenceMap:st,iridescenceThicknessMap:Je,sheen:Se,sheenColorMap:We,sheenRoughnessMap:Pe,specularMap:xe,specularColorMap:$e,specularIntensityMap:k,transmission:ge,transmissionMap:de,thicknessMap:_e,gradientMap:Re,opaque:M.transparent===!1&&M.blending===_r&&M.alphaToCoverage===!1,alphaMap:O,alphaTest:re,alphaHash:le,combine:M.combine,mapUv:Be&&x(M.map.channel),aoMapUv:Ae&&x(M.aoMap.channel),lightMapUv:Ge&&x(M.lightMap.channel),bumpMapUv:Ce&&x(M.bumpMap.channel),normalMapUv:bt&&x(M.normalMap.channel),displacementMapUv:je&&x(M.displacementMap.channel),emissiveMapUv:U&&x(M.emissiveMap.channel),metalnessMapUv:L&&x(M.metalnessMap.channel),roughnessMapUv:$&&x(M.roughnessMap.channel),anisotropyMapUv:be&&x(M.anisotropyMap.channel),clearcoatMapUv:Oe&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:ze&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:st&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:Je&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:We&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&x(M.sheenRoughnessMap.channel),specularMapUv:xe&&x(M.specularMap.channel),specularColorMapUv:$e&&x(M.specularColorMap.channel),specularIntensityMapUv:k&&x(M.specularIntensityMap.channel),transmissionMapUv:de&&x(M.transmissionMap.channel),thicknessMapUv:_e&&x(M.thicknessMap.channel),alphaMapUv:O&&x(M.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(bt||he),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!H.attributes.uv&&(Be||O),fog:!!G,useFog:M.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:m,skinning:F.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:ve,morphTextureStride:fe,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&z.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ue,useLegacyLights:s._useLegacyLights,decodeVideoTexture:Be&&M.map.isVideoTexture===!0&&pt.getTransfer(M.map.colorSpace)===St,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===mn,flipSided:M.side===xn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:Me&&M.extensions.derivatives===!0,extensionFragDepth:Me&&M.extensions.fragDepth===!0,extensionDrawBuffers:Me&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:Me&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Me&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Me&&M.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionFragDepth:f||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return nt.vertexUv1s=h.has(1),nt.vertexUv2s=h.has(2),nt.vertexUv3s=h.has(3),h.clear(),nt}function E(M){const R=[];if(M.shaderID?R.push(M.shaderID):(R.push(M.customVertexShaderID),R.push(M.customFragmentShaderID)),M.defines!==void 0)for(const z in M.defines)R.push(z),R.push(M.defines[z]);return M.isRawShaderMaterial===!1&&(y(R,M),S(R,M),R.push(s.outputColorSpace)),R.push(M.customProgramCacheKey),R.join()}function y(M,R){M.push(R.precision),M.push(R.outputColorSpace),M.push(R.envMapMode),M.push(R.envMapCubeUVHeight),M.push(R.mapUv),M.push(R.alphaMapUv),M.push(R.lightMapUv),M.push(R.aoMapUv),M.push(R.bumpMapUv),M.push(R.normalMapUv),M.push(R.displacementMapUv),M.push(R.emissiveMapUv),M.push(R.metalnessMapUv),M.push(R.roughnessMapUv),M.push(R.anisotropyMapUv),M.push(R.clearcoatMapUv),M.push(R.clearcoatNormalMapUv),M.push(R.clearcoatRoughnessMapUv),M.push(R.iridescenceMapUv),M.push(R.iridescenceThicknessMapUv),M.push(R.sheenColorMapUv),M.push(R.sheenRoughnessMapUv),M.push(R.specularMapUv),M.push(R.specularColorMapUv),M.push(R.specularIntensityMapUv),M.push(R.transmissionMapUv),M.push(R.thicknessMapUv),M.push(R.combine),M.push(R.fogExp2),M.push(R.sizeAttenuation),M.push(R.morphTargetsCount),M.push(R.morphAttributeCount),M.push(R.numDirLights),M.push(R.numPointLights),M.push(R.numSpotLights),M.push(R.numSpotLightMaps),M.push(R.numHemiLights),M.push(R.numRectAreaLights),M.push(R.numDirLightShadows),M.push(R.numPointLightShadows),M.push(R.numSpotLightShadows),M.push(R.numSpotLightShadowsWithMaps),M.push(R.numLightProbes),M.push(R.shadowMapType),M.push(R.toneMapping),M.push(R.numClippingPlanes),M.push(R.numClipIntersection),M.push(R.depthPacking)}function S(M,R){l.disableAll(),R.isWebGL2&&l.enable(0),R.supportsVertexTextures&&l.enable(1),R.instancing&&l.enable(2),R.instancingColor&&l.enable(3),R.matcap&&l.enable(4),R.envMap&&l.enable(5),R.normalMapObjectSpace&&l.enable(6),R.normalMapTangentSpace&&l.enable(7),R.clearcoat&&l.enable(8),R.iridescence&&l.enable(9),R.alphaTest&&l.enable(10),R.vertexColors&&l.enable(11),R.vertexAlphas&&l.enable(12),R.vertexUv1s&&l.enable(13),R.vertexUv2s&&l.enable(14),R.vertexUv3s&&l.enable(15),R.vertexTangents&&l.enable(16),R.anisotropy&&l.enable(17),R.alphaHash&&l.enable(18),R.batching&&l.enable(19),M.push(l.mask),l.disableAll(),R.fog&&l.enable(0),R.useFog&&l.enable(1),R.flatShading&&l.enable(2),R.logarithmicDepthBuffer&&l.enable(3),R.skinning&&l.enable(4),R.morphTargets&&l.enable(5),R.morphNormals&&l.enable(6),R.morphColors&&l.enable(7),R.premultipliedAlpha&&l.enable(8),R.shadowMapEnabled&&l.enable(9),R.useLegacyLights&&l.enable(10),R.doubleSided&&l.enable(11),R.flipSided&&l.enable(12),R.useDepthPacking&&l.enable(13),R.dithering&&l.enable(14),R.transmission&&l.enable(15),R.sheen&&l.enable(16),R.opaque&&l.enable(17),R.pointsUvs&&l.enable(18),R.decodeVideoTexture&&l.enable(19),R.alphaToCoverage&&l.enable(20),M.push(l.mask)}function P(M){const R=w[M.type];let z;if(R){const X=Jn[R];z=Lx.clone(X.uniforms)}else z=M.uniforms;return z}function C(M,R){let z;for(let X=0,F=d.length;X<F;X++){const G=d[X];if(G.cacheKey===R){z=G,++z.usedTimes;break}}return z===void 0&&(z=new XE(s,R,M,r),d.push(z)),z}function A(M){if(--M.usedTimes===0){const R=d.indexOf(M);d[R]=d[d.length-1],d.pop(),M.destroy()}}function D(M){c.remove(M)}function B(){c.dispose()}return{getParameters:g,getProgramCacheKey:E,getUniforms:P,acquireProgram:C,releaseProgram:A,releaseShaderCache:D,programs:d,dispose:B}}function $E(){let s=new WeakMap;function e(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function t(r){s.delete(r)}function n(r,a,l){s.get(r)[a]=l}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function ZE(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function xp(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function bp(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(f,m,v,b,w,x){let g=s[e];return g===void 0?(g={id:f.id,object:f,geometry:m,material:v,groupOrder:b,renderOrder:f.renderOrder,z:w,group:x},s[e]=g):(g.id=f.id,g.object=f,g.geometry=m,g.material=v,g.groupOrder=b,g.renderOrder=f.renderOrder,g.z=w,g.group=x),e++,g}function l(f,m,v,b,w,x){const g=a(f,m,v,b,w,x);v.transmission>0?n.push(g):v.transparent===!0?i.push(g):t.push(g)}function c(f,m,v,b,w,x){const g=a(f,m,v,b,w,x);v.transmission>0?n.unshift(g):v.transparent===!0?i.unshift(g):t.unshift(g)}function h(f,m){t.length>1&&t.sort(f||ZE),n.length>1&&n.sort(m||xp),i.length>1&&i.sort(m||xp)}function d(){for(let f=e,m=s.length;f<m;f++){const v=s[f];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:d,sort:h}}function QE(){let s=new WeakMap;function e(n,i){const r=s.get(n);let a;return r===void 0?(a=new bp,s.set(n,[a])):i>=r.length?(a=new bp,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function JE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new Ve};break;case"SpotLight":t={position:new I,direction:new I,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":t={color:new Ve,position:new I,halfWidth:new I,halfHeight:new I};break}return s[e.id]=t,t}}}function eM(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let tM=0;function nM(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function iM(s,e){const t=new JE,n=eM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)i.probe.push(new I);const r=new I,a=new Xe,l=new Xe;function c(d,f){let m=0,v=0,b=0;for(let z=0;z<9;z++)i.probe[z].set(0,0,0);let w=0,x=0,g=0,E=0,y=0,S=0,P=0,C=0,A=0,D=0,B=0;d.sort(nM);const M=f===!0?Math.PI:1;for(let z=0,X=d.length;z<X;z++){const F=d[z],G=F.color,H=F.intensity,W=F.distance,ee=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)m+=G.r*H*M,v+=G.g*H*M,b+=G.b*H*M;else if(F.isLightProbe){for(let Z=0;Z<9;Z++)i.probe[Z].addScaledVector(F.sh.coefficients[Z],H);B++}else if(F.isDirectionalLight){const Z=t.get(F);if(Z.color.copy(F.color).multiplyScalar(F.intensity*M),F.castShadow){const se=F.shadow,ne=n.get(F);ne.shadowBias=se.bias,ne.shadowNormalBias=se.normalBias,ne.shadowRadius=se.radius,ne.shadowMapSize=se.mapSize,i.directionalShadow[w]=ne,i.directionalShadowMap[w]=ee,i.directionalShadowMatrix[w]=F.shadow.matrix,S++}i.directional[w]=Z,w++}else if(F.isSpotLight){const Z=t.get(F);Z.position.setFromMatrixPosition(F.matrixWorld),Z.color.copy(G).multiplyScalar(H*M),Z.distance=W,Z.coneCos=Math.cos(F.angle),Z.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),Z.decay=F.decay,i.spot[g]=Z;const se=F.shadow;if(F.map&&(i.spotLightMap[A]=F.map,A++,se.updateMatrices(F),F.castShadow&&D++),i.spotLightMatrix[g]=se.matrix,F.castShadow){const ne=n.get(F);ne.shadowBias=se.bias,ne.shadowNormalBias=se.normalBias,ne.shadowRadius=se.radius,ne.shadowMapSize=se.mapSize,i.spotShadow[g]=ne,i.spotShadowMap[g]=ee,C++}g++}else if(F.isRectAreaLight){const Z=t.get(F);Z.color.copy(G).multiplyScalar(H),Z.halfWidth.set(F.width*.5,0,0),Z.halfHeight.set(0,F.height*.5,0),i.rectArea[E]=Z,E++}else if(F.isPointLight){const Z=t.get(F);if(Z.color.copy(F.color).multiplyScalar(F.intensity*M),Z.distance=F.distance,Z.decay=F.decay,F.castShadow){const se=F.shadow,ne=n.get(F);ne.shadowBias=se.bias,ne.shadowNormalBias=se.normalBias,ne.shadowRadius=se.radius,ne.shadowMapSize=se.mapSize,ne.shadowCameraNear=se.camera.near,ne.shadowCameraFar=se.camera.far,i.pointShadow[x]=ne,i.pointShadowMap[x]=ee,i.pointShadowMatrix[x]=F.shadow.matrix,P++}i.point[x]=Z,x++}else if(F.isHemisphereLight){const Z=t.get(F);Z.skyColor.copy(F.color).multiplyScalar(H*M),Z.groundColor.copy(F.groundColor).multiplyScalar(H*M),i.hemi[y]=Z,y++}}E>0&&(e.isWebGL2?s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=me.LTC_FLOAT_1,i.rectAreaLTC2=me.LTC_FLOAT_2):(i.rectAreaLTC1=me.LTC_HALF_1,i.rectAreaLTC2=me.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=me.LTC_FLOAT_1,i.rectAreaLTC2=me.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=me.LTC_HALF_1,i.rectAreaLTC2=me.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=m,i.ambient[1]=v,i.ambient[2]=b;const R=i.hash;(R.directionalLength!==w||R.pointLength!==x||R.spotLength!==g||R.rectAreaLength!==E||R.hemiLength!==y||R.numDirectionalShadows!==S||R.numPointShadows!==P||R.numSpotShadows!==C||R.numSpotMaps!==A||R.numLightProbes!==B)&&(i.directional.length=w,i.spot.length=g,i.rectArea.length=E,i.point.length=x,i.hemi.length=y,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=P,i.pointShadowMap.length=P,i.spotShadow.length=C,i.spotShadowMap.length=C,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=P,i.spotLightMatrix.length=C+A-D,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=D,i.numLightProbes=B,R.directionalLength=w,R.pointLength=x,R.spotLength=g,R.rectAreaLength=E,R.hemiLength=y,R.numDirectionalShadows=S,R.numPointShadows=P,R.numSpotShadows=C,R.numSpotMaps=A,R.numLightProbes=B,i.version=tM++)}function h(d,f){let m=0,v=0,b=0,w=0,x=0;const g=f.matrixWorldInverse;for(let E=0,y=d.length;E<y;E++){const S=d[E];if(S.isDirectionalLight){const P=i.directional[m];P.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),P.direction.sub(r),P.direction.transformDirection(g),m++}else if(S.isSpotLight){const P=i.spot[b];P.position.setFromMatrixPosition(S.matrixWorld),P.position.applyMatrix4(g),P.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),P.direction.sub(r),P.direction.transformDirection(g),b++}else if(S.isRectAreaLight){const P=i.rectArea[w];P.position.setFromMatrixPosition(S.matrixWorld),P.position.applyMatrix4(g),l.identity(),a.copy(S.matrixWorld),a.premultiply(g),l.extractRotation(a),P.halfWidth.set(S.width*.5,0,0),P.halfHeight.set(0,S.height*.5,0),P.halfWidth.applyMatrix4(l),P.halfHeight.applyMatrix4(l),w++}else if(S.isPointLight){const P=i.point[v];P.position.setFromMatrixPosition(S.matrixWorld),P.position.applyMatrix4(g),v++}else if(S.isHemisphereLight){const P=i.hemi[x];P.direction.setFromMatrixPosition(S.matrixWorld),P.direction.transformDirection(g),x++}}}return{setup:c,setupView:h,state:i}}function yp(s,e){const t=new iM(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function a(f){n.push(f)}function l(f){i.push(f)}function c(f){t.setup(n,f)}function h(f){t.setupView(n,f)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:c,setupLightsView:h,pushLight:a,pushShadow:l}}function sM(s,e){let t=new WeakMap;function n(r,a=0){const l=t.get(r);let c;return l===void 0?(c=new yp(s,e),t.set(r,[c])):a>=l.length?(c=new yp(s,e),l.push(c)):c=l[a],c}function i(){t=new WeakMap}return{get:n,dispose:i}}class rM extends ni{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=B_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class oM extends ni{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const aM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,lM=`uniform sampler2D shadow_pass;
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
}`;function cM(s,e,t){let n=new Au;const i=new Te,r=new Te,a=new vt,l=new rM({depthPacking:k_}),c=new oM,h={},d=t.maxTextureSize,f={[jn]:xn,[xn]:jn,[mn]:mn},m=new rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Te},radius:{value:4}},vertexShader:aM,fragmentShader:lM}),v=m.clone();v.defines.HORIZONTAL_PASS=1;const b=new tn;b.setAttribute("position",new At(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new pe(b,m),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wf;let g=this.type;this.render=function(C,A,D){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||C.length===0)return;const B=s.getRenderTarget(),M=s.getActiveCubeFace(),R=s.getActiveMipmapLevel(),z=s.state;z.setBlending(On),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const X=g!==bi&&this.type===bi,F=g===bi&&this.type!==bi;for(let G=0,H=C.length;G<H;G++){const W=C[G],ee=W.shadow;if(ee===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(ee.autoUpdate===!1&&ee.needsUpdate===!1)continue;i.copy(ee.mapSize);const Z=ee.getFrameExtents();if(i.multiply(Z),r.copy(ee.mapSize),(i.x>d||i.y>d)&&(i.x>d&&(r.x=Math.floor(d/Z.x),i.x=r.x*Z.x,ee.mapSize.x=r.x),i.y>d&&(r.y=Math.floor(d/Z.y),i.y=r.y*Z.y,ee.mapSize.y=r.y)),ee.map===null||X===!0||F===!0){const ne=this.type!==bi?{minFilter:dt,magFilter:dt}:{};ee.map!==null&&ee.map.dispose(),ee.map=new Bn(i.x,i.y,ne),ee.map.texture.name=W.name+".shadowMap",ee.camera.updateProjectionMatrix()}s.setRenderTarget(ee.map),s.clear();const se=ee.getViewportCount();for(let ne=0;ne<se;ne++){const ve=ee.getViewport(ne);a.set(r.x*ve.x,r.y*ve.y,r.x*ve.z,r.y*ve.w),z.viewport(a),ee.updateMatrices(W,ne),n=ee.getFrustum(),S(A,D,ee.camera,W,this.type)}ee.isPointLightShadow!==!0&&this.type===bi&&E(ee,D),ee.needsUpdate=!1}g=this.type,x.needsUpdate=!1,s.setRenderTarget(B,M,R)};function E(C,A){const D=e.update(w);m.defines.VSM_SAMPLES!==C.blurSamples&&(m.defines.VSM_SAMPLES=C.blurSamples,v.defines.VSM_SAMPLES=C.blurSamples,m.needsUpdate=!0,v.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Bn(i.x,i.y)),m.uniforms.shadow_pass.value=C.map.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,s.setRenderTarget(C.mapPass),s.clear(),s.renderBufferDirect(A,null,D,m,w,null),v.uniforms.shadow_pass.value=C.mapPass.texture,v.uniforms.resolution.value=C.mapSize,v.uniforms.radius.value=C.radius,s.setRenderTarget(C.map),s.clear(),s.renderBufferDirect(A,null,D,v,w,null)}function y(C,A,D,B){let M=null;const R=D.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(R!==void 0)M=R;else if(M=D.isPointLight===!0?c:l,s.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const z=M.uuid,X=A.uuid;let F=h[z];F===void 0&&(F={},h[z]=F);let G=F[X];G===void 0&&(G=M.clone(),F[X]=G,A.addEventListener("dispose",P)),M=G}if(M.visible=A.visible,M.wireframe=A.wireframe,B===bi?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:f[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,D.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const z=s.properties.get(M);z.light=D}return M}function S(C,A,D,B,M){if(C.visible===!1)return;if(C.layers.test(A.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&M===bi)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,C.matrixWorld);const X=e.update(C),F=C.material;if(Array.isArray(F)){const G=X.groups;for(let H=0,W=G.length;H<W;H++){const ee=G[H],Z=F[ee.materialIndex];if(Z&&Z.visible){const se=y(C,Z,B,M);C.onBeforeShadow(s,C,A,D,X,se,ee),s.renderBufferDirect(D,null,X,se,C,ee),C.onAfterShadow(s,C,A,D,X,se,ee)}}}else if(F.visible){const G=y(C,F,B,M);C.onBeforeShadow(s,C,A,D,X,G,null),s.renderBufferDirect(D,null,X,G,C,null),C.onAfterShadow(s,C,A,D,X,G,null)}}const z=C.children;for(let X=0,F=z.length;X<F;X++)S(z[X],A,D,B,M)}function P(C){C.target.removeEventListener("dispose",P);for(const D in h){const B=h[D],M=C.target.uuid;M in B&&(B[M].dispose(),delete B[M])}}}function uM(s,e,t){const n=t.isWebGL2;function i(){let O=!1;const re=new vt;let le=null;const Me=new vt(0,0,0,0);return{setMask:function(Ue){le!==Ue&&!O&&(s.colorMask(Ue,Ue,Ue,Ue),le=Ue)},setLocked:function(Ue){O=Ue},setClear:function(Ue,nt,tt,ct,Bt){Bt===!0&&(Ue*=ct,nt*=ct,tt*=ct),re.set(Ue,nt,tt,ct),Me.equals(re)===!1&&(s.clearColor(Ue,nt,tt,ct),Me.copy(re))},reset:function(){O=!1,le=null,Me.set(-1,0,0,0)}}}function r(){let O=!1,re=null,le=null,Me=null;return{setTest:function(Ue){Ue?Ee(s.DEPTH_TEST):He(s.DEPTH_TEST)},setMask:function(Ue){re!==Ue&&!O&&(s.depthMask(Ue),re=Ue)},setFunc:function(Ue){if(le!==Ue){switch(Ue){case g_:s.depthFunc(s.NEVER);break;case v_:s.depthFunc(s.ALWAYS);break;case __:s.depthFunc(s.LESS);break;case ja:s.depthFunc(s.LEQUAL);break;case x_:s.depthFunc(s.EQUAL);break;case b_:s.depthFunc(s.GEQUAL);break;case y_:s.depthFunc(s.GREATER);break;case w_:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}le=Ue}},setLocked:function(Ue){O=Ue},setClear:function(Ue){Me!==Ue&&(s.clearDepth(Ue),Me=Ue)},reset:function(){O=!1,re=null,le=null,Me=null}}}function a(){let O=!1,re=null,le=null,Me=null,Ue=null,nt=null,tt=null,ct=null,Bt=null;return{setTest:function(ot){O||(ot?Ee(s.STENCIL_TEST):He(s.STENCIL_TEST))},setMask:function(ot){re!==ot&&!O&&(s.stencilMask(ot),re=ot)},setFunc:function(ot,Dt,nn){(le!==ot||Me!==Dt||Ue!==nn)&&(s.stencilFunc(ot,Dt,nn),le=ot,Me=Dt,Ue=nn)},setOp:function(ot,Dt,nn){(nt!==ot||tt!==Dt||ct!==nn)&&(s.stencilOp(ot,Dt,nn),nt=ot,tt=Dt,ct=nn)},setLocked:function(ot){O=ot},setClear:function(ot){Bt!==ot&&(s.clearStencil(ot),Bt=ot)},reset:function(){O=!1,re=null,le=null,Me=null,Ue=null,nt=null,tt=null,ct=null,Bt=null}}}const l=new i,c=new r,h=new a,d=new WeakMap,f=new WeakMap;let m={},v={},b=new WeakMap,w=[],x=null,g=!1,E=null,y=null,S=null,P=null,C=null,A=null,D=null,B=new Ve(0,0,0),M=0,R=!1,z=null,X=null,F=null,G=null,H=null;const W=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ee=!1,Z=0;const se=s.getParameter(s.VERSION);se.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(se)[1]),ee=Z>=1):se.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(se)[1]),ee=Z>=2);let ne=null,ve={};const fe=s.getParameter(s.SCISSOR_BOX),K=s.getParameter(s.VIEWPORT),ie=new vt().fromArray(fe),we=new vt().fromArray(K);function Le(O,re,le,Me){const Ue=new Uint8Array(4),nt=s.createTexture();s.bindTexture(O,nt),s.texParameteri(O,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(O,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let tt=0;tt<le;tt++)n&&(O===s.TEXTURE_3D||O===s.TEXTURE_2D_ARRAY)?s.texImage3D(re,0,s.RGBA,1,1,Me,0,s.RGBA,s.UNSIGNED_BYTE,Ue):s.texImage2D(re+tt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ue);return nt}const Ie={};Ie[s.TEXTURE_2D]=Le(s.TEXTURE_2D,s.TEXTURE_2D,1),Ie[s.TEXTURE_CUBE_MAP]=Le(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Ie[s.TEXTURE_2D_ARRAY]=Le(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Ie[s.TEXTURE_3D]=Le(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),l.setClear(0,0,0,1),c.setClear(1),h.setClear(0),Ee(s.DEPTH_TEST),c.setFunc(ja),je(!1),U(Jh),Ee(s.CULL_FACE),Ce(On);function Ee(O){m[O]!==!0&&(s.enable(O),m[O]=!0)}function He(O){m[O]!==!1&&(s.disable(O),m[O]=!1)}function Be(O,re){return v[O]!==re?(s.bindFramebuffer(O,re),v[O]=re,n&&(O===s.DRAW_FRAMEBUFFER&&(v[s.FRAMEBUFFER]=re),O===s.FRAMEBUFFER&&(v[s.DRAW_FRAMEBUFFER]=re)),!0):!1}function q(O,re){let le=w,Me=!1;if(O)if(le=b.get(re),le===void 0&&(le=[],b.set(re,le)),O.isWebGLMultipleRenderTargets){const Ue=O.texture;if(le.length!==Ue.length||le[0]!==s.COLOR_ATTACHMENT0){for(let nt=0,tt=Ue.length;nt<tt;nt++)le[nt]=s.COLOR_ATTACHMENT0+nt;le.length=Ue.length,Me=!0}}else le[0]!==s.COLOR_ATTACHMENT0&&(le[0]=s.COLOR_ATTACHMENT0,Me=!0);else le[0]!==s.BACK&&(le[0]=s.BACK,Me=!0);Me&&(t.isWebGL2?s.drawBuffers(le):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(le))}function It(O){return x!==O?(s.useProgram(O),x=O,!0):!1}const Ae={[ms]:s.FUNC_ADD,[t_]:s.FUNC_SUBTRACT,[n_]:s.FUNC_REVERSE_SUBTRACT};if(n)Ae[id]=s.MIN,Ae[sd]=s.MAX;else{const O=e.get("EXT_blend_minmax");O!==null&&(Ae[id]=O.MIN_EXT,Ae[sd]=O.MAX_EXT)}const Ge={[i_]:s.ZERO,[s_]:s.ONE,[r_]:s.SRC_COLOR,[zc]:s.SRC_ALPHA,[h_]:s.SRC_ALPHA_SATURATE,[c_]:s.DST_COLOR,[a_]:s.DST_ALPHA,[o_]:s.ONE_MINUS_SRC_COLOR,[Hc]:s.ONE_MINUS_SRC_ALPHA,[u_]:s.ONE_MINUS_DST_COLOR,[l_]:s.ONE_MINUS_DST_ALPHA,[d_]:s.CONSTANT_COLOR,[p_]:s.ONE_MINUS_CONSTANT_COLOR,[f_]:s.CONSTANT_ALPHA,[m_]:s.ONE_MINUS_CONSTANT_ALPHA};function Ce(O,re,le,Me,Ue,nt,tt,ct,Bt,ot){if(O===On){g===!0&&(He(s.BLEND),g=!1);return}if(g===!1&&(Ee(s.BLEND),g=!0),O!==e_){if(O!==E||ot!==R){if((y!==ms||C!==ms)&&(s.blendEquation(s.FUNC_ADD),y=ms,C=ms),ot)switch(O){case _r:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ed:s.blendFunc(s.ONE,s.ONE);break;case td:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case nd:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case _r:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ed:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case td:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case nd:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}S=null,P=null,A=null,D=null,B.set(0,0,0),M=0,E=O,R=ot}return}Ue=Ue||re,nt=nt||le,tt=tt||Me,(re!==y||Ue!==C)&&(s.blendEquationSeparate(Ae[re],Ae[Ue]),y=re,C=Ue),(le!==S||Me!==P||nt!==A||tt!==D)&&(s.blendFuncSeparate(Ge[le],Ge[Me],Ge[nt],Ge[tt]),S=le,P=Me,A=nt,D=tt),(ct.equals(B)===!1||Bt!==M)&&(s.blendColor(ct.r,ct.g,ct.b,Bt),B.copy(ct),M=Bt),E=O,R=!1}function bt(O,re){O.side===mn?He(s.CULL_FACE):Ee(s.CULL_FACE);let le=O.side===xn;re&&(le=!le),je(le),O.blending===_r&&O.transparent===!1?Ce(On):Ce(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),c.setFunc(O.depthFunc),c.setTest(O.depthTest),c.setMask(O.depthWrite),l.setMask(O.colorWrite);const Me=O.stencilWrite;h.setTest(Me),Me&&(h.setMask(O.stencilWriteMask),h.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),h.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),$(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?Ee(s.SAMPLE_ALPHA_TO_COVERAGE):He(s.SAMPLE_ALPHA_TO_COVERAGE)}function je(O){z!==O&&(O?s.frontFace(s.CW):s.frontFace(s.CCW),z=O)}function U(O){O!==Zv?(Ee(s.CULL_FACE),O!==X&&(O===Jh?s.cullFace(s.BACK):O===Qv?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):He(s.CULL_FACE),X=O}function L(O){O!==F&&(ee&&s.lineWidth(O),F=O)}function $(O,re,le){O?(Ee(s.POLYGON_OFFSET_FILL),(G!==re||H!==le)&&(s.polygonOffset(re,le),G=re,H=le)):He(s.POLYGON_OFFSET_FILL)}function he(O){O?Ee(s.SCISSOR_TEST):He(s.SCISSOR_TEST)}function ae(O){O===void 0&&(O=s.TEXTURE0+W-1),ne!==O&&(s.activeTexture(O),ne=O)}function ce(O,re,le){le===void 0&&(ne===null?le=s.TEXTURE0+W-1:le=ne);let Me=ve[le];Me===void 0&&(Me={type:void 0,texture:void 0},ve[le]=Me),(Me.type!==O||Me.texture!==re)&&(ne!==le&&(s.activeTexture(le),ne=le),s.bindTexture(O,re||Ie[O]),Me.type=O,Me.texture=re)}function Se(){const O=ve[ne];O!==void 0&&O.type!==void 0&&(s.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function ge(){try{s.compressedTexImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function be(){try{s.compressedTexImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Oe(){try{s.texSubImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ze(){try{s.texSubImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function oe(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function st(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Je(){try{s.texStorage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function We(){try{s.texStorage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Pe(){try{s.texImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function xe(){try{s.texImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function $e(O){ie.equals(O)===!1&&(s.scissor(O.x,O.y,O.z,O.w),ie.copy(O))}function k(O){we.equals(O)===!1&&(s.viewport(O.x,O.y,O.z,O.w),we.copy(O))}function de(O,re){let le=f.get(re);le===void 0&&(le=new WeakMap,f.set(re,le));let Me=le.get(O);Me===void 0&&(Me=s.getUniformBlockIndex(re,O.name),le.set(O,Me))}function _e(O,re){const Me=f.get(re).get(O);d.get(re)!==Me&&(s.uniformBlockBinding(re,Me,O.__bindingPointIndex),d.set(re,Me))}function Re(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),m={},ne=null,ve={},v={},b=new WeakMap,w=[],x=null,g=!1,E=null,y=null,S=null,P=null,C=null,A=null,D=null,B=new Ve(0,0,0),M=0,R=!1,z=null,X=null,F=null,G=null,H=null,ie.set(0,0,s.canvas.width,s.canvas.height),we.set(0,0,s.canvas.width,s.canvas.height),l.reset(),c.reset(),h.reset()}return{buffers:{color:l,depth:c,stencil:h},enable:Ee,disable:He,bindFramebuffer:Be,drawBuffers:q,useProgram:It,setBlending:Ce,setMaterial:bt,setFlipSided:je,setCullFace:U,setLineWidth:L,setPolygonOffset:$,setScissorTest:he,activeTexture:ae,bindTexture:ce,unbindTexture:Se,compressedTexImage2D:ge,compressedTexImage3D:be,texImage2D:Pe,texImage3D:xe,updateUBOMapping:de,uniformBlockBinding:_e,texStorage2D:Je,texStorage3D:We,texSubImage2D:Oe,texSubImage3D:ze,compressedTexSubImage2D:oe,compressedTexSubImage3D:st,scissor:$e,viewport:k,reset:Re}}function hM(s,e,t,n,i,r,a){const l=i.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new WeakMap;let f;const m=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(U,L){return v?new OffscreenCanvas(U,L):Ro("canvas")}function w(U,L,$,he){let ae=1;if((U.width>he||U.height>he)&&(ae=he/Math.max(U.width,U.height)),ae<1||L===!0)if(typeof HTMLImageElement!="undefined"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&U instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&U instanceof ImageBitmap){const ce=L?Qa:Math.floor,Se=ce(ae*U.width),ge=ce(ae*U.height);f===void 0&&(f=b(Se,ge));const be=$?b(Se,ge):f;return be.width=Se,be.height=ge,be.getContext("2d").drawImage(U,0,0,Se,ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+U.width+"x"+U.height+") to ("+Se+"x"+ge+")."),be}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+U.width+"x"+U.height+")."),U;return U}function x(U){return $c(U.width)&&$c(U.height)}function g(U){return l?!1:U.wrapS!==hn||U.wrapT!==hn||U.minFilter!==dt&&U.minFilter!==Ut}function E(U,L){return U.generateMipmaps&&L&&U.minFilter!==dt&&U.minFilter!==Ut}function y(U){s.generateMipmap(U)}function S(U,L,$,he,ae=!1){if(l===!1)return L;if(U!==null){if(s[U]!==void 0)return s[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let ce=L;if(L===s.RED&&($===s.FLOAT&&(ce=s.R32F),$===s.HALF_FLOAT&&(ce=s.R16F),$===s.UNSIGNED_BYTE&&(ce=s.R8)),L===s.RED_INTEGER&&($===s.UNSIGNED_BYTE&&(ce=s.R8UI),$===s.UNSIGNED_SHORT&&(ce=s.R16UI),$===s.UNSIGNED_INT&&(ce=s.R32UI),$===s.BYTE&&(ce=s.R8I),$===s.SHORT&&(ce=s.R16I),$===s.INT&&(ce=s.R32I)),L===s.RG&&($===s.FLOAT&&(ce=s.RG32F),$===s.HALF_FLOAT&&(ce=s.RG16F),$===s.UNSIGNED_BYTE&&(ce=s.RG8)),L===s.RGBA){const Se=ae?Ya:pt.getTransfer(he);$===s.FLOAT&&(ce=s.RGBA32F),$===s.HALF_FLOAT&&(ce=s.RGBA16F),$===s.UNSIGNED_BYTE&&(ce=Se===St?s.SRGB8_ALPHA8:s.RGBA8),$===s.UNSIGNED_SHORT_4_4_4_4&&(ce=s.RGBA4),$===s.UNSIGNED_SHORT_5_5_5_1&&(ce=s.RGB5_A1)}return(ce===s.R16F||ce===s.R32F||ce===s.RG16F||ce===s.RG32F||ce===s.RGBA16F||ce===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function P(U,L,$){return E(U,$)===!0||U.isFramebufferTexture&&U.minFilter!==dt&&U.minFilter!==Ut?Math.log2(Math.max(L.width,L.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?L.mipmaps.length:1}function C(U){return U===dt||U===Xc||U===pr?s.NEAREST:s.LINEAR}function A(U){const L=U.target;L.removeEventListener("dispose",A),B(L),L.isVideoTexture&&d.delete(L)}function D(U){const L=U.target;L.removeEventListener("dispose",D),R(L)}function B(U){const L=n.get(U);if(L.__webglInit===void 0)return;const $=U.source,he=m.get($);if(he){const ae=he[L.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&M(U),Object.keys(he).length===0&&m.delete($)}n.remove(U)}function M(U){const L=n.get(U);s.deleteTexture(L.__webglTexture);const $=U.source,he=m.get($);delete he[L.__cacheKey],a.memory.textures--}function R(U){const L=U.texture,$=n.get(U),he=n.get(L);if(he.__webglTexture!==void 0&&(s.deleteTexture(he.__webglTexture),a.memory.textures--),U.depthTexture&&U.depthTexture.dispose(),U.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++){if(Array.isArray($.__webglFramebuffer[ae]))for(let ce=0;ce<$.__webglFramebuffer[ae].length;ce++)s.deleteFramebuffer($.__webglFramebuffer[ae][ce]);else s.deleteFramebuffer($.__webglFramebuffer[ae]);$.__webglDepthbuffer&&s.deleteRenderbuffer($.__webglDepthbuffer[ae])}else{if(Array.isArray($.__webglFramebuffer))for(let ae=0;ae<$.__webglFramebuffer.length;ae++)s.deleteFramebuffer($.__webglFramebuffer[ae]);else s.deleteFramebuffer($.__webglFramebuffer);if($.__webglDepthbuffer&&s.deleteRenderbuffer($.__webglDepthbuffer),$.__webglMultisampledFramebuffer&&s.deleteFramebuffer($.__webglMultisampledFramebuffer),$.__webglColorRenderbuffer)for(let ae=0;ae<$.__webglColorRenderbuffer.length;ae++)$.__webglColorRenderbuffer[ae]&&s.deleteRenderbuffer($.__webglColorRenderbuffer[ae]);$.__webglDepthRenderbuffer&&s.deleteRenderbuffer($.__webglDepthRenderbuffer)}if(U.isWebGLMultipleRenderTargets)for(let ae=0,ce=L.length;ae<ce;ae++){const Se=n.get(L[ae]);Se.__webglTexture&&(s.deleteTexture(Se.__webglTexture),a.memory.textures--),n.remove(L[ae])}n.remove(L),n.remove(U)}let z=0;function X(){z=0}function F(){const U=z;return U>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+i.maxTextures),z+=1,U}function G(U){const L=[];return L.push(U.wrapS),L.push(U.wrapT),L.push(U.wrapR||0),L.push(U.magFilter),L.push(U.minFilter),L.push(U.anisotropy),L.push(U.internalFormat),L.push(U.format),L.push(U.type),L.push(U.generateMipmaps),L.push(U.premultiplyAlpha),L.push(U.flipY),L.push(U.unpackAlignment),L.push(U.colorSpace),L.join()}function H(U,L){const $=n.get(U);if(U.isVideoTexture&&bt(U),U.isRenderTargetTexture===!1&&U.version>0&&$.__version!==U.version){const he=U.image;if(he===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(he.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ie($,U,L);return}}t.bindTexture(s.TEXTURE_2D,$.__webglTexture,s.TEXTURE0+L)}function W(U,L){const $=n.get(U);if(U.version>0&&$.__version!==U.version){ie($,U,L);return}t.bindTexture(s.TEXTURE_2D_ARRAY,$.__webglTexture,s.TEXTURE0+L)}function ee(U,L){const $=n.get(U);if(U.version>0&&$.__version!==U.version){ie($,U,L);return}t.bindTexture(s.TEXTURE_3D,$.__webglTexture,s.TEXTURE0+L)}function Z(U,L){const $=n.get(U);if(U.version>0&&$.__version!==U.version){we($,U,L);return}t.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture,s.TEXTURE0+L)}const se={[Er]:s.REPEAT,[hn]:s.CLAMP_TO_EDGE,[qa]:s.MIRRORED_REPEAT},ne={[dt]:s.NEAREST,[Xc]:s.NEAREST_MIPMAP_NEAREST,[pr]:s.NEAREST_MIPMAP_LINEAR,[Ut]:s.LINEAR,[ka]:s.LINEAR_MIPMAP_NEAREST,[Ei]:s.LINEAR_MIPMAP_LINEAR},ve={[z_]:s.NEVER,[q_]:s.ALWAYS,[H_]:s.LESS,[nm]:s.LEQUAL,[G_]:s.EQUAL,[j_]:s.GEQUAL,[W_]:s.GREATER,[X_]:s.NOTEQUAL};function fe(U,L,$){if(L.type===_t&&e.has("OES_texture_float_linear")===!1&&(L.magFilter===Ut||L.magFilter===ka||L.magFilter===pr||L.magFilter===Ei||L.minFilter===Ut||L.minFilter===ka||L.minFilter===pr||L.minFilter===Ei)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),$?(s.texParameteri(U,s.TEXTURE_WRAP_S,se[L.wrapS]),s.texParameteri(U,s.TEXTURE_WRAP_T,se[L.wrapT]),(U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY)&&s.texParameteri(U,s.TEXTURE_WRAP_R,se[L.wrapR]),s.texParameteri(U,s.TEXTURE_MAG_FILTER,ne[L.magFilter]),s.texParameteri(U,s.TEXTURE_MIN_FILTER,ne[L.minFilter])):(s.texParameteri(U,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(U,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY)&&s.texParameteri(U,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(L.wrapS!==hn||L.wrapT!==hn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(U,s.TEXTURE_MAG_FILTER,C(L.magFilter)),s.texParameteri(U,s.TEXTURE_MIN_FILTER,C(L.minFilter)),L.minFilter!==dt&&L.minFilter!==Ut&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),L.compareFunction&&(s.texParameteri(U,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(U,s.TEXTURE_COMPARE_FUNC,ve[L.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const he=e.get("EXT_texture_filter_anisotropic");if(L.magFilter===dt||L.minFilter!==pr&&L.minFilter!==Ei||L.type===_t&&e.has("OES_texture_float_linear")===!1||l===!1&&L.type===ii&&e.has("OES_texture_half_float_linear")===!1)return;(L.anisotropy>1||n.get(L).__currentAnisotropy)&&(s.texParameterf(U,he.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(L.anisotropy,i.getMaxAnisotropy())),n.get(L).__currentAnisotropy=L.anisotropy)}}function K(U,L){let $=!1;U.__webglInit===void 0&&(U.__webglInit=!0,L.addEventListener("dispose",A));const he=L.source;let ae=m.get(he);ae===void 0&&(ae={},m.set(he,ae));const ce=G(L);if(ce!==U.__cacheKey){ae[ce]===void 0&&(ae[ce]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,$=!0),ae[ce].usedTimes++;const Se=ae[U.__cacheKey];Se!==void 0&&(ae[U.__cacheKey].usedTimes--,Se.usedTimes===0&&M(L)),U.__cacheKey=ce,U.__webglTexture=ae[ce].texture}return $}function ie(U,L,$){let he=s.TEXTURE_2D;(L.isDataArrayTexture||L.isCompressedArrayTexture)&&(he=s.TEXTURE_2D_ARRAY),L.isData3DTexture&&(he=s.TEXTURE_3D);const ae=K(U,L),ce=L.source;t.bindTexture(he,U.__webglTexture,s.TEXTURE0+$);const Se=n.get(ce);if(ce.version!==Se.__version||ae===!0){t.activeTexture(s.TEXTURE0+$);const ge=pt.getPrimaries(pt.workingColorSpace),be=L.colorSpace===Nn?null:pt.getPrimaries(L.colorSpace),Oe=L.colorSpace===Nn||ge===be?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,L.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,L.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe);const ze=g(L)&&x(L.image)===!1;let oe=w(L.image,ze,!1,i.maxTextureSize);oe=je(L,oe);const st=x(oe)||l,Je=r.convert(L.format,L.colorSpace);let We=r.convert(L.type),Pe=S(L.internalFormat,Je,We,L.colorSpace,L.isVideoTexture);fe(he,L,st);let xe;const $e=L.mipmaps,k=l&&L.isVideoTexture!==!0&&Pe!==Qf,de=Se.__version===void 0||ae===!0,_e=ce.dataReady,Re=P(L,oe,st);if(L.isDepthTexture)Pe=s.DEPTH_COMPONENT,l?L.type===_t?Pe=s.DEPTH_COMPONENT32F:L.type===Tn?Pe=s.DEPTH_COMPONENT24:L.type===bs?Pe=s.DEPTH24_STENCIL8:Pe=s.DEPTH_COMPONENT16:L.type===_t&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),L.format===ys&&Pe===s.DEPTH_COMPONENT&&L.type!==il&&L.type!==Tn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),L.type=Tn,We=r.convert(L.type)),L.format===Mr&&Pe===s.DEPTH_COMPONENT&&(Pe=s.DEPTH_STENCIL,L.type!==bs&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),L.type=bs,We=r.convert(L.type))),de&&(k?t.texStorage2D(s.TEXTURE_2D,1,Pe,oe.width,oe.height):t.texImage2D(s.TEXTURE_2D,0,Pe,oe.width,oe.height,0,Je,We,null));else if(L.isDataTexture)if($e.length>0&&st){k&&de&&t.texStorage2D(s.TEXTURE_2D,Re,Pe,$e[0].width,$e[0].height);for(let O=0,re=$e.length;O<re;O++)xe=$e[O],k?_e&&t.texSubImage2D(s.TEXTURE_2D,O,0,0,xe.width,xe.height,Je,We,xe.data):t.texImage2D(s.TEXTURE_2D,O,Pe,xe.width,xe.height,0,Je,We,xe.data);L.generateMipmaps=!1}else k?(de&&t.texStorage2D(s.TEXTURE_2D,Re,Pe,oe.width,oe.height),_e&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,oe.width,oe.height,Je,We,oe.data)):t.texImage2D(s.TEXTURE_2D,0,Pe,oe.width,oe.height,0,Je,We,oe.data);else if(L.isCompressedTexture)if(L.isCompressedArrayTexture){k&&de&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Re,Pe,$e[0].width,$e[0].height,oe.depth);for(let O=0,re=$e.length;O<re;O++)xe=$e[O],L.format!==Wt?Je!==null?k?_e&&t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,O,0,0,0,xe.width,xe.height,oe.depth,Je,xe.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,O,Pe,xe.width,xe.height,oe.depth,0,xe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?_e&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,O,0,0,0,xe.width,xe.height,oe.depth,Je,We,xe.data):t.texImage3D(s.TEXTURE_2D_ARRAY,O,Pe,xe.width,xe.height,oe.depth,0,Je,We,xe.data)}else{k&&de&&t.texStorage2D(s.TEXTURE_2D,Re,Pe,$e[0].width,$e[0].height);for(let O=0,re=$e.length;O<re;O++)xe=$e[O],L.format!==Wt?Je!==null?k?_e&&t.compressedTexSubImage2D(s.TEXTURE_2D,O,0,0,xe.width,xe.height,Je,xe.data):t.compressedTexImage2D(s.TEXTURE_2D,O,Pe,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?_e&&t.texSubImage2D(s.TEXTURE_2D,O,0,0,xe.width,xe.height,Je,We,xe.data):t.texImage2D(s.TEXTURE_2D,O,Pe,xe.width,xe.height,0,Je,We,xe.data)}else if(L.isDataArrayTexture)k?(de&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Re,Pe,oe.width,oe.height,oe.depth),_e&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,Je,We,oe.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,Pe,oe.width,oe.height,oe.depth,0,Je,We,oe.data);else if(L.isData3DTexture)k?(de&&t.texStorage3D(s.TEXTURE_3D,Re,Pe,oe.width,oe.height,oe.depth),_e&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,Je,We,oe.data)):t.texImage3D(s.TEXTURE_3D,0,Pe,oe.width,oe.height,oe.depth,0,Je,We,oe.data);else if(L.isFramebufferTexture){if(de)if(k)t.texStorage2D(s.TEXTURE_2D,Re,Pe,oe.width,oe.height);else{let O=oe.width,re=oe.height;for(let le=0;le<Re;le++)t.texImage2D(s.TEXTURE_2D,le,Pe,O,re,0,Je,We,null),O>>=1,re>>=1}}else if($e.length>0&&st){k&&de&&t.texStorage2D(s.TEXTURE_2D,Re,Pe,$e[0].width,$e[0].height);for(let O=0,re=$e.length;O<re;O++)xe=$e[O],k?_e&&t.texSubImage2D(s.TEXTURE_2D,O,0,0,Je,We,xe):t.texImage2D(s.TEXTURE_2D,O,Pe,Je,We,xe);L.generateMipmaps=!1}else k?(de&&t.texStorage2D(s.TEXTURE_2D,Re,Pe,oe.width,oe.height),_e&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Je,We,oe)):t.texImage2D(s.TEXTURE_2D,0,Pe,Je,We,oe);E(L,st)&&y(he),Se.__version=ce.version,L.onUpdate&&L.onUpdate(L)}U.__version=L.version}function we(U,L,$){if(L.image.length!==6)return;const he=K(U,L),ae=L.source;t.bindTexture(s.TEXTURE_CUBE_MAP,U.__webglTexture,s.TEXTURE0+$);const ce=n.get(ae);if(ae.version!==ce.__version||he===!0){t.activeTexture(s.TEXTURE0+$);const Se=pt.getPrimaries(pt.workingColorSpace),ge=L.colorSpace===Nn?null:pt.getPrimaries(L.colorSpace),be=L.colorSpace===Nn||Se===ge?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,L.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,L.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);const Oe=L.isCompressedTexture||L.image[0].isCompressedTexture,ze=L.image[0]&&L.image[0].isDataTexture,oe=[];for(let O=0;O<6;O++)!Oe&&!ze?oe[O]=w(L.image[O],!1,!0,i.maxCubemapSize):oe[O]=ze?L.image[O].image:L.image[O],oe[O]=je(L,oe[O]);const st=oe[0],Je=x(st)||l,We=r.convert(L.format,L.colorSpace),Pe=r.convert(L.type),xe=S(L.internalFormat,We,Pe,L.colorSpace),$e=l&&L.isVideoTexture!==!0,k=ce.__version===void 0||he===!0,de=ae.dataReady;let _e=P(L,st,Je);fe(s.TEXTURE_CUBE_MAP,L,Je);let Re;if(Oe){$e&&k&&t.texStorage2D(s.TEXTURE_CUBE_MAP,_e,xe,st.width,st.height);for(let O=0;O<6;O++){Re=oe[O].mipmaps;for(let re=0;re<Re.length;re++){const le=Re[re];L.format!==Wt?We!==null?$e?de&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,re,0,0,le.width,le.height,We,le.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,re,xe,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$e?de&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,re,0,0,le.width,le.height,We,Pe,le.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,re,xe,le.width,le.height,0,We,Pe,le.data)}}}else{Re=L.mipmaps,$e&&k&&(Re.length>0&&_e++,t.texStorage2D(s.TEXTURE_CUBE_MAP,_e,xe,oe[0].width,oe[0].height));for(let O=0;O<6;O++)if(ze){$e?de&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,0,0,oe[O].width,oe[O].height,We,Pe,oe[O].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,xe,oe[O].width,oe[O].height,0,We,Pe,oe[O].data);for(let re=0;re<Re.length;re++){const Me=Re[re].image[O].image;$e?de&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,re+1,0,0,Me.width,Me.height,We,Pe,Me.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,re+1,xe,Me.width,Me.height,0,We,Pe,Me.data)}}else{$e?de&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,0,0,We,Pe,oe[O]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,xe,We,Pe,oe[O]);for(let re=0;re<Re.length;re++){const le=Re[re];$e?de&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,re+1,0,0,We,Pe,le.image[O]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,re+1,xe,We,Pe,le.image[O])}}}E(L,Je)&&y(s.TEXTURE_CUBE_MAP),ce.__version=ae.version,L.onUpdate&&L.onUpdate(L)}U.__version=L.version}function Le(U,L,$,he,ae,ce){const Se=r.convert($.format,$.colorSpace),ge=r.convert($.type),be=S($.internalFormat,Se,ge,$.colorSpace);if(!n.get(L).__hasExternalTextures){const ze=Math.max(1,L.width>>ce),oe=Math.max(1,L.height>>ce);ae===s.TEXTURE_3D||ae===s.TEXTURE_2D_ARRAY?t.texImage3D(ae,ce,be,ze,oe,L.depth,0,Se,ge,null):t.texImage2D(ae,ce,be,ze,oe,0,Se,ge,null)}t.bindFramebuffer(s.FRAMEBUFFER,U),Ce(L)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,he,ae,n.get($).__webglTexture,0,Ge(L)):(ae===s.TEXTURE_2D||ae>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,he,ae,n.get($).__webglTexture,ce),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ie(U,L,$){if(s.bindRenderbuffer(s.RENDERBUFFER,U),L.depthBuffer&&!L.stencilBuffer){let he=l===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if($||Ce(L)){const ae=L.depthTexture;ae&&ae.isDepthTexture&&(ae.type===_t?he=s.DEPTH_COMPONENT32F:ae.type===Tn&&(he=s.DEPTH_COMPONENT24));const ce=Ge(L);Ce(L)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ce,he,L.width,L.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,ce,he,L.width,L.height)}else s.renderbufferStorage(s.RENDERBUFFER,he,L.width,L.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,U)}else if(L.depthBuffer&&L.stencilBuffer){const he=Ge(L);$&&Ce(L)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,he,s.DEPTH24_STENCIL8,L.width,L.height):Ce(L)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,he,s.DEPTH24_STENCIL8,L.width,L.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,U)}else{const he=L.isWebGLMultipleRenderTargets===!0?L.texture:[L.texture];for(let ae=0;ae<he.length;ae++){const ce=he[ae],Se=r.convert(ce.format,ce.colorSpace),ge=r.convert(ce.type),be=S(ce.internalFormat,Se,ge,ce.colorSpace),Oe=Ge(L);$&&Ce(L)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Oe,be,L.width,L.height):Ce(L)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Oe,be,L.width,L.height):s.renderbufferStorage(s.RENDERBUFFER,be,L.width,L.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ee(U,L){if(L&&L.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,U),!(L.depthTexture&&L.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(L.depthTexture).__webglTexture||L.depthTexture.image.width!==L.width||L.depthTexture.image.height!==L.height)&&(L.depthTexture.image.width=L.width,L.depthTexture.image.height=L.height,L.depthTexture.needsUpdate=!0),H(L.depthTexture,0);const he=n.get(L.depthTexture).__webglTexture,ae=Ge(L);if(L.depthTexture.format===ys)Ce(L)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,he,0,ae):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,he,0);else if(L.depthTexture.format===Mr)Ce(L)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,he,0,ae):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,he,0);else throw new Error("Unknown depthTexture format")}function He(U){const L=n.get(U),$=U.isWebGLCubeRenderTarget===!0;if(U.depthTexture&&!L.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");Ee(L.__webglFramebuffer,U)}else if($){L.__webglDepthbuffer=[];for(let he=0;he<6;he++)t.bindFramebuffer(s.FRAMEBUFFER,L.__webglFramebuffer[he]),L.__webglDepthbuffer[he]=s.createRenderbuffer(),Ie(L.__webglDepthbuffer[he],U,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,L.__webglFramebuffer),L.__webglDepthbuffer=s.createRenderbuffer(),Ie(L.__webglDepthbuffer,U,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function Be(U,L,$){const he=n.get(U);L!==void 0&&Le(he.__webglFramebuffer,U,U.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),$!==void 0&&He(U)}function q(U){const L=U.texture,$=n.get(U),he=n.get(L);U.addEventListener("dispose",D),U.isWebGLMultipleRenderTargets!==!0&&(he.__webglTexture===void 0&&(he.__webglTexture=s.createTexture()),he.__version=L.version,a.memory.textures++);const ae=U.isWebGLCubeRenderTarget===!0,ce=U.isWebGLMultipleRenderTargets===!0,Se=x(U)||l;if(ae){$.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(l&&L.mipmaps&&L.mipmaps.length>0){$.__webglFramebuffer[ge]=[];for(let be=0;be<L.mipmaps.length;be++)$.__webglFramebuffer[ge][be]=s.createFramebuffer()}else $.__webglFramebuffer[ge]=s.createFramebuffer()}else{if(l&&L.mipmaps&&L.mipmaps.length>0){$.__webglFramebuffer=[];for(let ge=0;ge<L.mipmaps.length;ge++)$.__webglFramebuffer[ge]=s.createFramebuffer()}else $.__webglFramebuffer=s.createFramebuffer();if(ce)if(i.drawBuffers){const ge=U.texture;for(let be=0,Oe=ge.length;be<Oe;be++){const ze=n.get(ge[be]);ze.__webglTexture===void 0&&(ze.__webglTexture=s.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(l&&U.samples>0&&Ce(U)===!1){const ge=ce?L:[L];$.__webglMultisampledFramebuffer=s.createFramebuffer(),$.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let be=0;be<ge.length;be++){const Oe=ge[be];$.__webglColorRenderbuffer[be]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,$.__webglColorRenderbuffer[be]);const ze=r.convert(Oe.format,Oe.colorSpace),oe=r.convert(Oe.type),st=S(Oe.internalFormat,ze,oe,Oe.colorSpace,U.isXRRenderTarget===!0),Je=Ge(U);s.renderbufferStorageMultisample(s.RENDERBUFFER,Je,st,U.width,U.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.RENDERBUFFER,$.__webglColorRenderbuffer[be])}s.bindRenderbuffer(s.RENDERBUFFER,null),U.depthBuffer&&($.__webglDepthRenderbuffer=s.createRenderbuffer(),Ie($.__webglDepthRenderbuffer,U,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ae){t.bindTexture(s.TEXTURE_CUBE_MAP,he.__webglTexture),fe(s.TEXTURE_CUBE_MAP,L,Se);for(let ge=0;ge<6;ge++)if(l&&L.mipmaps&&L.mipmaps.length>0)for(let be=0;be<L.mipmaps.length;be++)Le($.__webglFramebuffer[ge][be],U,L,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,be);else Le($.__webglFramebuffer[ge],U,L,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);E(L,Se)&&y(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ce){const ge=U.texture;for(let be=0,Oe=ge.length;be<Oe;be++){const ze=ge[be],oe=n.get(ze);t.bindTexture(s.TEXTURE_2D,oe.__webglTexture),fe(s.TEXTURE_2D,ze,Se),Le($.__webglFramebuffer,U,ze,s.COLOR_ATTACHMENT0+be,s.TEXTURE_2D,0),E(ze,Se)&&y(s.TEXTURE_2D)}t.unbindTexture()}else{let ge=s.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(l?ge=U.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ge,he.__webglTexture),fe(ge,L,Se),l&&L.mipmaps&&L.mipmaps.length>0)for(let be=0;be<L.mipmaps.length;be++)Le($.__webglFramebuffer[be],U,L,s.COLOR_ATTACHMENT0,ge,be);else Le($.__webglFramebuffer,U,L,s.COLOR_ATTACHMENT0,ge,0);E(L,Se)&&y(ge),t.unbindTexture()}U.depthBuffer&&He(U)}function It(U){const L=x(U)||l,$=U.isWebGLMultipleRenderTargets===!0?U.texture:[U.texture];for(let he=0,ae=$.length;he<ae;he++){const ce=$[he];if(E(ce,L)){const Se=U.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,ge=n.get(ce).__webglTexture;t.bindTexture(Se,ge),y(Se),t.unbindTexture()}}}function Ae(U){if(l&&U.samples>0&&Ce(U)===!1){const L=U.isWebGLMultipleRenderTargets?U.texture:[U.texture],$=U.width,he=U.height;let ae=s.COLOR_BUFFER_BIT;const ce=[],Se=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ge=n.get(U),be=U.isWebGLMultipleRenderTargets===!0;if(be)for(let Oe=0;Oe<L.length;Oe++)t.bindFramebuffer(s.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Oe,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,ge.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Oe,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let Oe=0;Oe<L.length;Oe++){ce.push(s.COLOR_ATTACHMENT0+Oe),U.depthBuffer&&ce.push(Se);const ze=ge.__ignoreDepthValues!==void 0?ge.__ignoreDepthValues:!1;if(ze===!1&&(U.depthBuffer&&(ae|=s.DEPTH_BUFFER_BIT),U.stencilBuffer&&(ae|=s.STENCIL_BUFFER_BIT)),be&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ge.__webglColorRenderbuffer[Oe]),ze===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[Se]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[Se])),be){const oe=n.get(L[Oe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,oe,0)}s.blitFramebuffer(0,0,$,he,0,0,$,he,ae,s.NEAREST),h&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ce)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),be)for(let Oe=0;Oe<L.length;Oe++){t.bindFramebuffer(s.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Oe,s.RENDERBUFFER,ge.__webglColorRenderbuffer[Oe]);const ze=n.get(L[Oe]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,ge.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Oe,s.TEXTURE_2D,ze,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}}function Ge(U){return Math.min(i.maxSamples,U.samples)}function Ce(U){const L=n.get(U);return l&&U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&L.__useRenderToTexture!==!1}function bt(U){const L=a.render.frame;d.get(U)!==L&&(d.set(U,L),U.update())}function je(U,L){const $=U.colorSpace,he=U.format,ae=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||U.format===Kc||$!==en&&$!==Nn&&(pt.getTransfer($)===St?l===!1?e.has("EXT_sRGB")===!0&&he===Wt?(U.format=Kc,U.minFilter=Ut,U.generateMipmaps=!1):L=rm.sRGBToLinear(L):(he!==Wt||ae!==ti)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),L}this.allocateTextureUnit=F,this.resetTextureUnits=X,this.setTexture2D=H,this.setTexture2DArray=W,this.setTexture3D=ee,this.setTextureCube=Z,this.rebindTextures=Be,this.setupRenderTarget=q,this.updateRenderTargetMipmap=It,this.updateMultisampleRenderTarget=Ae,this.setupDepthRenderbuffer=He,this.setupFrameBufferTexture=Le,this.useMultisampledRTT=Ce}function dM(s,e,t){const n=t.isWebGL2;function i(r,a=Nn){let l;const c=pt.getTransfer(a);if(r===ti)return s.UNSIGNED_BYTE;if(r===Yf)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Kf)return s.UNSIGNED_SHORT_5_5_5_1;if(r===jc)return s.BYTE;if(r===qf)return s.SHORT;if(r===il)return s.UNSIGNED_SHORT;if(r===wo)return s.INT;if(r===Tn)return s.UNSIGNED_INT;if(r===_t)return s.FLOAT;if(r===ii)return n?s.HALF_FLOAT:(l=e.get("OES_texture_half_float"),l!==null?l.HALF_FLOAT_OES:null);if(r===I_)return s.ALPHA;if(r===Wt)return s.RGBA;if(r===D_)return s.LUMINANCE;if(r===N_)return s.LUMINANCE_ALPHA;if(r===ys)return s.DEPTH_COMPONENT;if(r===Mr)return s.DEPTH_STENCIL;if(r===Kc)return l=e.get("EXT_sRGB"),l!==null?l.SRGB_ALPHA_EXT:null;if(r===$f)return s.RED;if(r===Eu)return s.RED_INTEGER;if(r===Zf)return s.RG;if(r===sl)return s.RG_INTEGER;if(r===Co)return s.RGBA_INTEGER;if(r===Vl||r===zl||r===Hl||r===Gl)if(c===St)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===Vl)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===zl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Hl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Gl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===Vl)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===zl)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Hl)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Gl)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===od||r===ad||r===ld||r===cd)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===od)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===ad)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===ld)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===cd)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Qf)return l=e.get("WEBGL_compressed_texture_etc1"),l!==null?l.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===ud||r===hd)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===ud)return c===St?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===hd)return c===St?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===dd||r===pd||r===fd||r===md||r===gd||r===vd||r===_d||r===xd||r===bd||r===yd||r===wd||r===Ed||r===Md||r===Sd)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===dd)return c===St?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===pd)return c===St?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===fd)return c===St?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===md)return c===St?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===gd)return c===St?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===vd)return c===St?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===_d)return c===St?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===xd)return c===St?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===bd)return c===St?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===yd)return c===St?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===wd)return c===St?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Ed)return c===St?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Md)return c===St?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Sd)return c===St?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Wl||r===Td||r===Ad)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===Wl)return c===St?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Td)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Ad)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===U_||r===Cd||r===Pd||r===Rd)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===Wl)return l.COMPRESSED_RED_RGTC1_EXT;if(r===Cd)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Pd)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Rd)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===bs?n?s.UNSIGNED_INT_24_8:(l=e.get("WEBGL_depth_texture"),l!==null?l.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class pM extends fn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class xs extends ft{constructor(){super(),this.isGroup=!0,this.type="Group"}}const fM={type:"move"};class fc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const l=this._targetRay,c=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){a=!0;for(const w of e.hand.values()){const x=t.getJointPose(w,n),g=this._getHandJoint(h,w);x!==null&&(g.matrix.fromArray(x.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=x.radius),g.visible=x!==null}const d=h.joints["index-finger-tip"],f=h.joints["thumb-tip"],m=d.position.distanceTo(f.position),v=.02,b=.005;h.inputState.pinching&&m>v+b?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&m<=v-b&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));l!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(l.matrix.fromArray(i.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,i.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(i.linearVelocity)):l.hasLinearVelocity=!1,i.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(i.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(fM)))}return l!==null&&(l.visible=i!==null),c!==null&&(c.visible=r!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new xs;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const mM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,gM=`
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

}`;class vM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new jt,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}render(e,t){if(this.texture!==null){if(this.mesh===null){const n=t.cameras[0].viewport,i=new rn({extensions:{fragDepth:!0},vertexShader:mM,fragmentShader:gM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new pe(new Kn(20,20),i)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class _M extends Ts{constructor(e,t){super();const n=this;let i=null,r=1,a=null,l="local-floor",c=1,h=null,d=null,f=null,m=null,v=null,b=null;const w=new vM,x=t.getContextAttributes();let g=null,E=null;const y=[],S=[],P=new Te;let C=null;const A=new fn;A.layers.enable(1),A.viewport=new vt;const D=new fn;D.layers.enable(2),D.viewport=new vt;const B=[A,D],M=new pM;M.layers.enable(1),M.layers.enable(2);let R=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ie=y[K];return ie===void 0&&(ie=new fc,y[K]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(K){let ie=y[K];return ie===void 0&&(ie=new fc,y[K]=ie),ie.getGripSpace()},this.getHand=function(K){let ie=y[K];return ie===void 0&&(ie=new fc,y[K]=ie),ie.getHandSpace()};function X(K){const ie=S.indexOf(K.inputSource);if(ie===-1)return;const we=y[ie];we!==void 0&&(we.update(K.inputSource,K.frame,h||a),we.dispatchEvent({type:K.type,data:K.inputSource}))}function F(){i.removeEventListener("select",X),i.removeEventListener("selectstart",X),i.removeEventListener("selectend",X),i.removeEventListener("squeeze",X),i.removeEventListener("squeezestart",X),i.removeEventListener("squeezeend",X),i.removeEventListener("end",F),i.removeEventListener("inputsourceschange",G);for(let K=0;K<y.length;K++){const ie=S[K];ie!==null&&(S[K]=null,y[K].disconnect(ie))}R=null,z=null,w.reset(),e.setRenderTarget(g),v=null,m=null,f=null,i=null,E=null,fe.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){l=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(K){h=K},this.getBaseLayer=function(){return m!==null?m:v},this.getBinding=function(){return f},this.getFrame=function(){return b},this.getSession=function(){return i},this.setSession=async function(K){if(i=K,i!==null){if(g=e.getRenderTarget(),i.addEventListener("select",X),i.addEventListener("selectstart",X),i.addEventListener("selectend",X),i.addEventListener("squeeze",X),i.addEventListener("squeezestart",X),i.addEventListener("squeezeend",X),i.addEventListener("end",F),i.addEventListener("inputsourceschange",G),x.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(P),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ie={antialias:i.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};v=new XRWebGLLayer(i,t,ie),i.updateRenderState({baseLayer:v}),e.setPixelRatio(1),e.setSize(v.framebufferWidth,v.framebufferHeight,!1),E=new Bn(v.framebufferWidth,v.framebufferHeight,{format:Wt,type:ti,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let ie=null,we=null,Le=null;x.depth&&(Le=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=x.stencil?Mr:ys,we=x.stencil?bs:Tn);const Ie={colorFormat:t.RGBA8,depthFormat:Le,scaleFactor:r};f=new XRWebGLBinding(i,t),m=f.createProjectionLayer(Ie),i.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),E=new Bn(m.textureWidth,m.textureHeight,{format:Wt,type:ti,depthTexture:new mm(m.textureWidth,m.textureHeight,we,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});const Ee=e.properties.get(E);Ee.__ignoreDepthValues=m.ignoreDepthValues}E.isXRRenderTarget=!0,this.setFoveation(c),h=null,a=await i.requestReferenceSpace(l),fe.setContext(i),fe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function G(K){for(let ie=0;ie<K.removed.length;ie++){const we=K.removed[ie],Le=S.indexOf(we);Le>=0&&(S[Le]=null,y[Le].disconnect(we))}for(let ie=0;ie<K.added.length;ie++){const we=K.added[ie];let Le=S.indexOf(we);if(Le===-1){for(let Ee=0;Ee<y.length;Ee++)if(Ee>=S.length){S.push(we),Le=Ee;break}else if(S[Ee]===null){S[Ee]=we,Le=Ee;break}if(Le===-1)break}const Ie=y[Le];Ie&&Ie.connect(we)}}const H=new I,W=new I;function ee(K,ie,we){H.setFromMatrixPosition(ie.matrixWorld),W.setFromMatrixPosition(we.matrixWorld);const Le=H.distanceTo(W),Ie=ie.projectionMatrix.elements,Ee=we.projectionMatrix.elements,He=Ie[14]/(Ie[10]-1),Be=Ie[14]/(Ie[10]+1),q=(Ie[9]+1)/Ie[5],It=(Ie[9]-1)/Ie[5],Ae=(Ie[8]-1)/Ie[0],Ge=(Ee[8]+1)/Ee[0],Ce=He*Ae,bt=He*Ge,je=Le/(-Ae+Ge),U=je*-Ae;ie.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(U),K.translateZ(je),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert();const L=He+je,$=Be+je,he=Ce-U,ae=bt+(Le-U),ce=q*Be/$*L,Se=It*Be/$*L;K.projectionMatrix.makePerspective(he,ae,ce,Se,L,$),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}function Z(K,ie){ie===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ie.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(i===null)return;w.texture!==null&&(K.near=w.depthNear,K.far=w.depthFar),M.near=D.near=A.near=K.near,M.far=D.far=A.far=K.far,(R!==M.near||z!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),R=M.near,z=M.far,A.near=R,A.far=z,D.near=R,D.far=z,A.updateProjectionMatrix(),D.updateProjectionMatrix(),K.updateProjectionMatrix());const ie=K.parent,we=M.cameras;Z(M,ie);for(let Le=0;Le<we.length;Le++)Z(we[Le],ie);we.length===2?ee(M,A,D):M.projectionMatrix.copy(A.projectionMatrix),se(K,M,ie)};function se(K,ie,we){we===null?K.matrix.copy(ie.matrixWorld):(K.matrix.copy(we.matrixWorld),K.matrix.invert(),K.matrix.multiply(ie.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ie.projectionMatrix),K.projectionMatrixInverse.copy(ie.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Tr*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(m===null&&v===null))return c},this.setFoveation=function(K){c=K,m!==null&&(m.fixedFoveation=K),v!==null&&v.fixedFoveation!==void 0&&(v.fixedFoveation=K)},this.hasDepthSensing=function(){return w.texture!==null};let ne=null;function ve(K,ie){if(d=ie.getViewerPose(h||a),b=ie,d!==null){const we=d.views;v!==null&&(e.setRenderTargetFramebuffer(E,v.framebuffer),e.setRenderTarget(E));let Le=!1;we.length!==M.cameras.length&&(M.cameras.length=0,Le=!0);for(let Ee=0;Ee<we.length;Ee++){const He=we[Ee];let Be=null;if(v!==null)Be=v.getViewport(He);else{const It=f.getViewSubImage(m,He);Be=It.viewport,Ee===0&&(e.setRenderTargetTextures(E,It.colorTexture,m.ignoreDepthValues?void 0:It.depthStencilTexture),e.setRenderTarget(E))}let q=B[Ee];q===void 0&&(q=new fn,q.layers.enable(Ee),q.viewport=new vt,B[Ee]=q),q.matrix.fromArray(He.transform.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale),q.projectionMatrix.fromArray(He.projectionMatrix),q.projectionMatrixInverse.copy(q.projectionMatrix).invert(),q.viewport.set(Be.x,Be.y,Be.width,Be.height),Ee===0&&(M.matrix.copy(q.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),Le===!0&&M.cameras.push(q)}const Ie=i.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")){const Ee=f.getDepthInformation(we[0]);Ee&&Ee.isValid&&Ee.texture&&w.init(e,Ee,i.renderState)}}for(let we=0;we<y.length;we++){const Le=S[we],Ie=y[we];Le!==null&&Ie!==void 0&&Ie.update(Le,ie,h||a)}w.render(e,M),ne&&ne(K,ie),ie.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ie}),b=null}const fe=new fm;fe.setAnimationLoop(ve),this.setAnimationLoop=function(K){ne=K},this.dispose=function(){}}}function xM(s,e){function t(x,g){x.matrixAutoUpdate===!0&&x.updateMatrix(),g.value.copy(x.matrix)}function n(x,g){g.color.getRGB(x.fogColor.value,hm(s)),g.isFog?(x.fogNear.value=g.near,x.fogFar.value=g.far):g.isFogExp2&&(x.fogDensity.value=g.density)}function i(x,g,E,y,S){g.isMeshBasicMaterial||g.isMeshLambertMaterial?r(x,g):g.isMeshToonMaterial?(r(x,g),f(x,g)):g.isMeshPhongMaterial?(r(x,g),d(x,g)):g.isMeshStandardMaterial?(r(x,g),m(x,g),g.isMeshPhysicalMaterial&&v(x,g,S)):g.isMeshMatcapMaterial?(r(x,g),b(x,g)):g.isMeshDepthMaterial?r(x,g):g.isMeshDistanceMaterial?(r(x,g),w(x,g)):g.isMeshNormalMaterial?r(x,g):g.isLineBasicMaterial?(a(x,g),g.isLineDashedMaterial&&l(x,g)):g.isPointsMaterial?c(x,g,E,y):g.isSpriteMaterial?h(x,g):g.isShadowMaterial?(x.color.value.copy(g.color),x.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(x,g){x.opacity.value=g.opacity,g.color&&x.diffuse.value.copy(g.color),g.emissive&&x.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(x.map.value=g.map,t(g.map,x.mapTransform)),g.alphaMap&&(x.alphaMap.value=g.alphaMap,t(g.alphaMap,x.alphaMapTransform)),g.bumpMap&&(x.bumpMap.value=g.bumpMap,t(g.bumpMap,x.bumpMapTransform),x.bumpScale.value=g.bumpScale,g.side===xn&&(x.bumpScale.value*=-1)),g.normalMap&&(x.normalMap.value=g.normalMap,t(g.normalMap,x.normalMapTransform),x.normalScale.value.copy(g.normalScale),g.side===xn&&x.normalScale.value.negate()),g.displacementMap&&(x.displacementMap.value=g.displacementMap,t(g.displacementMap,x.displacementMapTransform),x.displacementScale.value=g.displacementScale,x.displacementBias.value=g.displacementBias),g.emissiveMap&&(x.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,x.emissiveMapTransform)),g.specularMap&&(x.specularMap.value=g.specularMap,t(g.specularMap,x.specularMapTransform)),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest);const E=e.get(g).envMap;if(E&&(x.envMap.value=E,x.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=g.reflectivity,x.ior.value=g.ior,x.refractionRatio.value=g.refractionRatio),g.lightMap){x.lightMap.value=g.lightMap;const y=s._useLegacyLights===!0?Math.PI:1;x.lightMapIntensity.value=g.lightMapIntensity*y,t(g.lightMap,x.lightMapTransform)}g.aoMap&&(x.aoMap.value=g.aoMap,x.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,x.aoMapTransform))}function a(x,g){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,g.map&&(x.map.value=g.map,t(g.map,x.mapTransform))}function l(x,g){x.dashSize.value=g.dashSize,x.totalSize.value=g.dashSize+g.gapSize,x.scale.value=g.scale}function c(x,g,E,y){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,x.size.value=g.size*E,x.scale.value=y*.5,g.map&&(x.map.value=g.map,t(g.map,x.uvTransform)),g.alphaMap&&(x.alphaMap.value=g.alphaMap,t(g.alphaMap,x.alphaMapTransform)),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest)}function h(x,g){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,x.rotation.value=g.rotation,g.map&&(x.map.value=g.map,t(g.map,x.mapTransform)),g.alphaMap&&(x.alphaMap.value=g.alphaMap,t(g.alphaMap,x.alphaMapTransform)),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest)}function d(x,g){x.specular.value.copy(g.specular),x.shininess.value=Math.max(g.shininess,1e-4)}function f(x,g){g.gradientMap&&(x.gradientMap.value=g.gradientMap)}function m(x,g){x.metalness.value=g.metalness,g.metalnessMap&&(x.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,x.metalnessMapTransform)),x.roughness.value=g.roughness,g.roughnessMap&&(x.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,x.roughnessMapTransform)),e.get(g).envMap&&(x.envMapIntensity.value=g.envMapIntensity)}function v(x,g,E){x.ior.value=g.ior,g.sheen>0&&(x.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),x.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(x.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,x.sheenColorMapTransform)),g.sheenRoughnessMap&&(x.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,x.sheenRoughnessMapTransform))),g.clearcoat>0&&(x.clearcoat.value=g.clearcoat,x.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(x.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,x.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(x.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===xn&&x.clearcoatNormalScale.value.negate())),g.iridescence>0&&(x.iridescence.value=g.iridescence,x.iridescenceIOR.value=g.iridescenceIOR,x.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(x.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,x.iridescenceMapTransform)),g.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),g.transmission>0&&(x.transmission.value=g.transmission,x.transmissionSamplerMap.value=E.texture,x.transmissionSamplerSize.value.set(E.width,E.height),g.transmissionMap&&(x.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,x.transmissionMapTransform)),x.thickness.value=g.thickness,g.thicknessMap&&(x.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=g.attenuationDistance,x.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(x.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(x.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=g.specularIntensity,x.specularColor.value.copy(g.specularColor),g.specularColorMap&&(x.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,x.specularColorMapTransform)),g.specularIntensityMap&&(x.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,x.specularIntensityMapTransform))}function b(x,g){g.matcap&&(x.matcap.value=g.matcap)}function w(x,g){const E=e.get(g).light;x.referencePosition.value.setFromMatrixPosition(E.matrixWorld),x.nearDistance.value=E.shadow.camera.near,x.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function bM(s,e,t,n){let i={},r={},a=[];const l=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(E,y){const S=y.program;n.uniformBlockBinding(E,S)}function h(E,y){let S=i[E.id];S===void 0&&(b(E),S=d(E),i[E.id]=S,E.addEventListener("dispose",x));const P=y.program;n.updateUBOMapping(E,P);const C=e.render.frame;r[E.id]!==C&&(m(E),r[E.id]=C)}function d(E){const y=f();E.__bindingPointIndex=y;const S=s.createBuffer(),P=E.__size,C=E.usage;return s.bindBuffer(s.UNIFORM_BUFFER,S),s.bufferData(s.UNIFORM_BUFFER,P,C),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,y,S),S}function f(){for(let E=0;E<l;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(E){const y=i[E.id],S=E.uniforms,P=E.__cache;s.bindBuffer(s.UNIFORM_BUFFER,y);for(let C=0,A=S.length;C<A;C++){const D=Array.isArray(S[C])?S[C]:[S[C]];for(let B=0,M=D.length;B<M;B++){const R=D[B];if(v(R,C,B,P)===!0){const z=R.__offset,X=Array.isArray(R.value)?R.value:[R.value];let F=0;for(let G=0;G<X.length;G++){const H=X[G],W=w(H);typeof H=="number"||typeof H=="boolean"?(R.__data[0]=H,s.bufferSubData(s.UNIFORM_BUFFER,z+F,R.__data)):H.isMatrix3?(R.__data[0]=H.elements[0],R.__data[1]=H.elements[1],R.__data[2]=H.elements[2],R.__data[3]=0,R.__data[4]=H.elements[3],R.__data[5]=H.elements[4],R.__data[6]=H.elements[5],R.__data[7]=0,R.__data[8]=H.elements[6],R.__data[9]=H.elements[7],R.__data[10]=H.elements[8],R.__data[11]=0):(H.toArray(R.__data,F),F+=W.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,z,R.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function v(E,y,S,P){const C=E.value,A=y+"_"+S;if(P[A]===void 0)return typeof C=="number"||typeof C=="boolean"?P[A]=C:P[A]=C.clone(),!0;{const D=P[A];if(typeof C=="number"||typeof C=="boolean"){if(D!==C)return P[A]=C,!0}else if(D.equals(C)===!1)return D.copy(C),!0}return!1}function b(E){const y=E.uniforms;let S=0;const P=16;for(let A=0,D=y.length;A<D;A++){const B=Array.isArray(y[A])?y[A]:[y[A]];for(let M=0,R=B.length;M<R;M++){const z=B[M],X=Array.isArray(z.value)?z.value:[z.value];for(let F=0,G=X.length;F<G;F++){const H=X[F],W=w(H),ee=S%P;ee!==0&&P-ee<W.boundary&&(S+=P-ee),z.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=S,S+=W.storage}}}const C=S%P;return C>0&&(S+=P-C),E.__size=S,E.__cache={},this}function w(E){const y={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(y.boundary=4,y.storage=4):E.isVector2?(y.boundary=8,y.storage=8):E.isVector3||E.isColor?(y.boundary=16,y.storage=12):E.isVector4?(y.boundary=16,y.storage=16):E.isMatrix3?(y.boundary=48,y.storage=48):E.isMatrix4?(y.boundary=64,y.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),y}function x(E){const y=E.target;y.removeEventListener("dispose",x);const S=a.indexOf(y.__bindingPointIndex);a.splice(S,1),s.deleteBuffer(i[y.id]),delete i[y.id],delete r[y.id]}function g(){for(const E in i)s.deleteBuffer(i[E]);a=[],i={},r={}}return{bind:c,update:h,dispose:g}}class ym{constructor(e={}){const{canvas:t=lx(),context:n=null,depth:i=!0,stencil:r=!0,alpha:a=!1,antialias:l=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:h=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let m;n!==null?m=n.getContextAttributes().alpha:m=a;const v=new Uint32Array(4),b=new Int32Array(4);let w=null,x=null;const g=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ft,this._useLegacyLights=!1,this.toneMapping=Zi,this.toneMappingExposure=1;const y=this;let S=!1,P=0,C=0,A=null,D=-1,B=null;const M=new vt,R=new vt;let z=null;const X=new Ve(0);let F=0,G=t.width,H=t.height,W=1,ee=null,Z=null;const se=new vt(0,0,G,H),ne=new vt(0,0,G,H);let ve=!1;const fe=new Au;let K=!1,ie=!1,we=null;const Le=new Xe,Ie=new Te,Ee=new I,He={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Be(){return A===null?W:1}let q=n;function It(N,Y){for(let J=0;J<N.length;J++){const te=N[J],Q=t.getContext(te,Y);if(Q!==null)return Q}return null}try{const N={alpha:!0,depth:i,stencil:r,antialias:l,premultipliedAlpha:c,preserveDrawingBuffer:h,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${yu}`),t.addEventListener("webglcontextlost",Re,!1),t.addEventListener("webglcontextrestored",O,!1),t.addEventListener("webglcontextcreationerror",re,!1),q===null){const Y=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&Y.shift(),q=It(Y,N),q===null)throw It(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext!="undefined"&&q instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),q.getShaderPrecisionFormat===void 0&&(q.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(N){throw console.error("THREE.WebGLRenderer: "+N.message),N}let Ae,Ge,Ce,bt,je,U,L,$,he,ae,ce,Se,ge,be,Oe,ze,oe,st,Je,We,Pe,xe,$e,k;function de(){Ae=new Aw(q),Ge=new yw(q,Ae,e),Ae.init(Ge),xe=new dM(q,Ae,Ge),Ce=new uM(q,Ae,Ge),bt=new Rw(q),je=new $E,U=new hM(q,Ae,Ce,je,Ge,xe,bt),L=new Ew(y),$=new Tw(y),he=new Bx(q,Ge),$e=new xw(q,Ae,he,Ge),ae=new Cw(q,he,bt,$e),ce=new Nw(q,ae,he,bt),Je=new Dw(q,Ge,U),ze=new ww(je),Se=new KE(y,L,$,Ae,Ge,$e,ze),ge=new xM(y,je),be=new QE,Oe=new sM(Ae,Ge),st=new _w(y,L,$,Ce,ce,m,c),oe=new cM(y,ce,Ge),k=new bM(q,bt,Ge,Ce),We=new bw(q,Ae,bt,Ge),Pe=new Pw(q,Ae,bt,Ge),bt.programs=Se.programs,y.capabilities=Ge,y.extensions=Ae,y.properties=je,y.renderLists=be,y.shadowMap=oe,y.state=Ce,y.info=bt}de();const _e=new _M(y,q);this.xr=_e,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){const N=Ae.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){const N=Ae.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(N){N!==void 0&&(W=N,this.setSize(G,H,!1))},this.getSize=function(N){return N.set(G,H)},this.setSize=function(N,Y,J=!0){if(_e.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=N,H=Y,t.width=Math.floor(N*W),t.height=Math.floor(Y*W),J===!0&&(t.style.width=N+"px",t.style.height=Y+"px"),this.setViewport(0,0,N,Y)},this.getDrawingBufferSize=function(N){return N.set(G*W,H*W).floor()},this.setDrawingBufferSize=function(N,Y,J){G=N,H=Y,W=J,t.width=Math.floor(N*J),t.height=Math.floor(Y*J),this.setViewport(0,0,N,Y)},this.getCurrentViewport=function(N){return N.copy(M)},this.getViewport=function(N){return N.copy(se)},this.setViewport=function(N,Y,J,te){N.isVector4?se.set(N.x,N.y,N.z,N.w):se.set(N,Y,J,te),Ce.viewport(M.copy(se).multiplyScalar(W).floor())},this.getScissor=function(N){return N.copy(ne)},this.setScissor=function(N,Y,J,te){N.isVector4?ne.set(N.x,N.y,N.z,N.w):ne.set(N,Y,J,te),Ce.scissor(R.copy(ne).multiplyScalar(W).floor())},this.getScissorTest=function(){return ve},this.setScissorTest=function(N){Ce.setScissorTest(ve=N)},this.setOpaqueSort=function(N){ee=N},this.setTransparentSort=function(N){Z=N},this.getClearColor=function(N){return N.copy(st.getClearColor())},this.setClearColor=function(){st.setClearColor.apply(st,arguments)},this.getClearAlpha=function(){return st.getClearAlpha()},this.setClearAlpha=function(){st.setClearAlpha.apply(st,arguments)},this.clear=function(N=!0,Y=!0,J=!0){let te=0;if(N){let Q=!1;if(A!==null){const ye=A.texture.format;Q=ye===Co||ye===sl||ye===Eu}if(Q){const ye=A.texture.type,De=ye===ti||ye===Tn||ye===il||ye===bs||ye===Yf||ye===Kf,ke=st.getClearColor(),Fe=st.getClearAlpha(),qe=ke.r,Ke=ke.g,Ze=ke.b;De?(v[0]=qe,v[1]=Ke,v[2]=Ze,v[3]=Fe,q.clearBufferuiv(q.COLOR,0,v)):(b[0]=qe,b[1]=Ke,b[2]=Ze,b[3]=Fe,q.clearBufferiv(q.COLOR,0,b))}else te|=q.COLOR_BUFFER_BIT}Y&&(te|=q.DEPTH_BUFFER_BIT),J&&(te|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Re,!1),t.removeEventListener("webglcontextrestored",O,!1),t.removeEventListener("webglcontextcreationerror",re,!1),be.dispose(),Oe.dispose(),je.dispose(),L.dispose(),$.dispose(),ce.dispose(),$e.dispose(),k.dispose(),Se.dispose(),_e.dispose(),_e.removeEventListener("sessionstart",Bt),_e.removeEventListener("sessionend",ot),we&&(we.dispose(),we=null),Dt.stop()};function Re(N){N.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function O(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const N=bt.autoReset,Y=oe.enabled,J=oe.autoUpdate,te=oe.needsUpdate,Q=oe.type;de(),bt.autoReset=N,oe.enabled=Y,oe.autoUpdate=J,oe.needsUpdate=te,oe.type=Q}function re(N){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function le(N){const Y=N.target;Y.removeEventListener("dispose",le),Me(Y)}function Me(N){Ue(N),je.remove(N)}function Ue(N){const Y=je.get(N).programs;Y!==void 0&&(Y.forEach(function(J){Se.releaseProgram(J)}),N.isShaderMaterial&&Se.releaseShaderCache(N))}this.renderBufferDirect=function(N,Y,J,te,Q,ye){Y===null&&(Y=He);const De=Q.isMesh&&Q.matrixWorld.determinant()<0,ke=pl(N,Y,J,te,Q);Ce.setMaterial(te,De);let Fe=J.index,qe=1;if(te.wireframe===!0){if(Fe=ae.getWireframeAttribute(J),Fe===void 0)return;qe=2}const Ke=J.drawRange,Ze=J.attributes.position;let Pt=Ke.start*qe,on=(Ke.start+Ke.count)*qe;ye!==null&&(Pt=Math.max(Pt,ye.start*qe),on=Math.min(on,(ye.start+ye.count)*qe)),Fe!==null?(Pt=Math.max(Pt,0),on=Math.min(on,Fe.count)):Ze!=null&&(Pt=Math.max(Pt,0),on=Math.min(on,Ze.count));const kt=on-Pt;if(kt<0||kt===1/0)return;$e.setup(Q,te,ke,J,Fe);let Pn,Et=We;if(Fe!==null&&(Pn=he.get(Fe),Et=Pe,Et.setIndex(Pn)),Q.isMesh)te.wireframe===!0?(Ce.setLineWidth(te.wireframeLinewidth*Be()),Et.setMode(q.LINES)):Et.setMode(q.TRIANGLES);else if(Q.isLine){let Qe=te.linewidth;Qe===void 0&&(Qe=1),Ce.setLineWidth(Qe*Be()),Q.isLineSegments?Et.setMode(q.LINES):Q.isLineLoop?Et.setMode(q.LINE_LOOP):Et.setMode(q.LINE_STRIP)}else Q.isPoints?Et.setMode(q.POINTS):Q.isSprite&&Et.setMode(q.TRIANGLES);if(Q.isBatchedMesh)Et.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else if(Q.isInstancedMesh)Et.renderInstances(Pt,kt,Q.count);else if(J.isInstancedBufferGeometry){const Qe=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,kr=Math.min(J.instanceCount,Qe);Et.renderInstances(Pt,kt,kr)}else Et.render(Pt,kt)};function nt(N,Y,J){N.transparent===!0&&N.side===mn&&N.forceSinglePass===!1?(N.side=xn,N.needsUpdate=!0,As(N,Y,J),N.side=jn,N.needsUpdate=!0,As(N,Y,J),N.side=mn):As(N,Y,J)}this.compile=function(N,Y,J=null){J===null&&(J=N),x=Oe.get(J),x.init(),E.push(x),J.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Y.layers)&&(x.pushLight(Q),Q.castShadow&&x.pushShadow(Q))}),N!==J&&N.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Y.layers)&&(x.pushLight(Q),Q.castShadow&&x.pushShadow(Q))}),x.setupLights(y._useLegacyLights);const te=new Set;return N.traverse(function(Q){const ye=Q.material;if(ye)if(Array.isArray(ye))for(let De=0;De<ye.length;De++){const ke=ye[De];nt(ke,J,Q),te.add(ke)}else nt(ye,J,Q),te.add(ye)}),E.pop(),x=null,te},this.compileAsync=function(N,Y,J=null){const te=this.compile(N,Y,J);return new Promise(Q=>{function ye(){if(te.forEach(function(De){je.get(De).currentProgram.isReady()&&te.delete(De)}),te.size===0){Q(N);return}setTimeout(ye,10)}Ae.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let tt=null;function ct(N){tt&&tt(N)}function Bt(){Dt.stop()}function ot(){Dt.start()}const Dt=new fm;Dt.setAnimationLoop(ct),typeof self!="undefined"&&Dt.setContext(self),this.setAnimationLoop=function(N){tt=N,_e.setAnimationLoop(N),N===null?Dt.stop():Dt.start()},_e.addEventListener("sessionstart",Bt),_e.addEventListener("sessionend",ot),this.render=function(N,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),_e.enabled===!0&&_e.isPresenting===!0&&(_e.cameraAutoUpdate===!0&&_e.updateCamera(Y),Y=_e.getCamera()),N.isScene===!0&&N.onBeforeRender(y,N,Y,A),x=Oe.get(N,E.length),x.init(),E.push(x),Le.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),fe.setFromProjectionMatrix(Le),ie=this.localClippingEnabled,K=ze.init(this.clippingPlanes,ie),w=be.get(N,g.length),w.init(),g.push(w),nn(N,Y,0,y.sortObjects),w.finish(),y.sortObjects===!0&&w.sort(ee,Z),this.info.render.frame++,K===!0&&ze.beginShadows();const J=x.state.shadowsArray;if(oe.render(J,N,Y),K===!0&&ze.endShadows(),this.info.autoReset===!0&&this.info.reset(),(_e.enabled===!1||_e.isPresenting===!1||_e.hasDepthSensing()===!1)&&st.render(w,N),x.setupLights(y._useLegacyLights),Y.isArrayCamera){const te=Y.cameras;for(let Q=0,ye=te.length;Q<ye;Q++){const De=te[Q];No(w,N,De,De.viewport)}}else No(w,N,Y);A!==null&&(U.updateMultisampleRenderTarget(A),U.updateRenderTargetMipmap(A)),N.isScene===!0&&N.onAfterRender(y,N,Y),$e.resetDefaultState(),D=-1,B=null,E.pop(),E.length>0?x=E[E.length-1]:x=null,g.pop(),g.length>0?w=g[g.length-1]:w=null};function nn(N,Y,J,te){if(N.visible===!1)return;if(N.layers.test(Y.layers)){if(N.isGroup)J=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update(Y);else if(N.isLight)x.pushLight(N),N.castShadow&&x.pushShadow(N);else if(N.isSprite){if(!N.frustumCulled||fe.intersectsSprite(N)){te&&Ee.setFromMatrixPosition(N.matrixWorld).applyMatrix4(Le);const De=ce.update(N),ke=N.material;ke.visible&&w.push(N,De,ke,J,Ee.z,null)}}else if((N.isMesh||N.isLine||N.isPoints)&&(!N.frustumCulled||fe.intersectsObject(N))){const De=ce.update(N),ke=N.material;if(te&&(N.boundingSphere!==void 0?(N.boundingSphere===null&&N.computeBoundingSphere(),Ee.copy(N.boundingSphere.center)):(De.boundingSphere===null&&De.computeBoundingSphere(),Ee.copy(De.boundingSphere.center)),Ee.applyMatrix4(N.matrixWorld).applyMatrix4(Le)),Array.isArray(ke)){const Fe=De.groups;for(let qe=0,Ke=Fe.length;qe<Ke;qe++){const Ze=Fe[qe],Pt=ke[Ze.materialIndex];Pt&&Pt.visible&&w.push(N,De,Pt,J,Ee.z,Ze)}}else ke.visible&&w.push(N,De,ke,J,Ee.z,null)}}const ye=N.children;for(let De=0,ke=ye.length;De<ke;De++)nn(ye[De],Y,J,te)}function No(N,Y,J,te){const Q=N.opaque,ye=N.transmissive,De=N.transparent;x.setupLightsView(J),K===!0&&ze.setGlobalState(y.clippingPlanes,J),ye.length>0&&dl(Q,ye,Y,J),te&&Ce.viewport(M.copy(te)),Q.length>0&&Ci(Q,Y,J),ye.length>0&&Ci(ye,Y,J),De.length>0&&Ci(De,Y,J),Ce.buffers.depth.setTest(!0),Ce.buffers.depth.setMask(!0),Ce.buffers.color.setMask(!0),Ce.setPolygonOffset(!1)}function dl(N,Y,J,te){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;const ye=Ge.isWebGL2;we===null&&(we=new Bn(1,1,{generateMipmaps:!0,type:Ae.has("EXT_color_buffer_half_float")?ii:ti,minFilter:Ei,samples:ye?4:0})),y.getDrawingBufferSize(Ie),ye?we.setSize(Ie.x,Ie.y):we.setSize(Qa(Ie.x),Qa(Ie.y));const De=y.getRenderTarget();y.setRenderTarget(we),y.getClearColor(X),F=y.getClearAlpha(),F<1&&y.setClearColor(16777215,.5),y.clear();const ke=y.toneMapping;y.toneMapping=Zi,Ci(N,J,te),U.updateMultisampleRenderTarget(we),U.updateRenderTargetMipmap(we);let Fe=!1;for(let qe=0,Ke=Y.length;qe<Ke;qe++){const Ze=Y[qe],Pt=Ze.object,on=Ze.geometry,kt=Ze.material,Pn=Ze.group;if(kt.side===mn&&Pt.layers.test(te.layers)){const Et=kt.side;kt.side=xn,kt.needsUpdate=!0,Uo(Pt,J,te,on,kt,Pn),kt.side=Et,kt.needsUpdate=!0,Fe=!0}}Fe===!0&&(U.updateMultisampleRenderTarget(we),U.updateRenderTargetMipmap(we)),y.setRenderTarget(De),y.setClearColor(X,F),y.toneMapping=ke}function Ci(N,Y,J){const te=Y.isScene===!0?Y.overrideMaterial:null;for(let Q=0,ye=N.length;Q<ye;Q++){const De=N[Q],ke=De.object,Fe=De.geometry,qe=te===null?De.material:te,Ke=De.group;ke.layers.test(J.layers)&&Uo(ke,Y,J,Fe,qe,Ke)}}function Uo(N,Y,J,te,Q,ye){N.onBeforeRender(y,Y,J,te,Q,ye),N.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),Q.onBeforeRender(y,Y,J,te,N,ye),Q.transparent===!0&&Q.side===mn&&Q.forceSinglePass===!1?(Q.side=xn,Q.needsUpdate=!0,y.renderBufferDirect(J,Y,te,Q,N,ye),Q.side=jn,Q.needsUpdate=!0,y.renderBufferDirect(J,Y,te,Q,N,ye),Q.side=mn):y.renderBufferDirect(J,Y,te,Q,N,ye),N.onAfterRender(y,Y,J,te,Q,ye)}function As(N,Y,J){Y.isScene!==!0&&(Y=He);const te=je.get(N),Q=x.state.lights,ye=x.state.shadowsArray,De=Q.state.version,ke=Se.getParameters(N,Q.state,ye,Y,J),Fe=Se.getProgramCacheKey(ke);let qe=te.programs;te.environment=N.isMeshStandardMaterial?Y.environment:null,te.fog=Y.fog,te.envMap=(N.isMeshStandardMaterial?$:L).get(N.envMap||te.environment),qe===void 0&&(N.addEventListener("dispose",le),qe=new Map,te.programs=qe);let Ke=qe.get(Fe);if(Ke!==void 0){if(te.currentProgram===Ke&&te.lightsStateVersion===De)return Or(N,ke),Ke}else ke.uniforms=Se.getUniforms(N),N.onBuild(J,ke,y),N.onBeforeCompile(ke,y),Ke=Se.acquireProgram(ke,Fe),qe.set(Fe,Ke),te.uniforms=ke.uniforms;const Ze=te.uniforms;return(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)&&(Ze.clippingPlanes=ze.uniform),Or(N,ke),te.needsLights=fl(N),te.lightsStateVersion=De,te.needsLights&&(Ze.ambientLightColor.value=Q.state.ambient,Ze.lightProbe.value=Q.state.probe,Ze.directionalLights.value=Q.state.directional,Ze.directionalLightShadows.value=Q.state.directionalShadow,Ze.spotLights.value=Q.state.spot,Ze.spotLightShadows.value=Q.state.spotShadow,Ze.rectAreaLights.value=Q.state.rectArea,Ze.ltc_1.value=Q.state.rectAreaLTC1,Ze.ltc_2.value=Q.state.rectAreaLTC2,Ze.pointLights.value=Q.state.point,Ze.pointLightShadows.value=Q.state.pointShadow,Ze.hemisphereLights.value=Q.state.hemi,Ze.directionalShadowMap.value=Q.state.directionalShadowMap,Ze.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Ze.spotShadowMap.value=Q.state.spotShadowMap,Ze.spotLightMatrix.value=Q.state.spotLightMatrix,Ze.spotLightMap.value=Q.state.spotLightMap,Ze.pointShadowMap.value=Q.state.pointShadowMap,Ze.pointShadowMatrix.value=Q.state.pointShadowMatrix),te.currentProgram=Ke,te.uniformsList=null,Ke}function Pi(N){if(N.uniformsList===null){const Y=N.currentProgram.getUniforms();N.uniformsList=Va.seqWithValue(Y.seq,N.uniforms)}return N.uniformsList}function Or(N,Y){const J=je.get(N);J.outputColorSpace=Y.outputColorSpace,J.batching=Y.batching,J.instancing=Y.instancing,J.instancingColor=Y.instancingColor,J.skinning=Y.skinning,J.morphTargets=Y.morphTargets,J.morphNormals=Y.morphNormals,J.morphColors=Y.morphColors,J.morphTargetsCount=Y.morphTargetsCount,J.numClippingPlanes=Y.numClippingPlanes,J.numIntersection=Y.numClipIntersection,J.vertexAlphas=Y.vertexAlphas,J.vertexTangents=Y.vertexTangents,J.toneMapping=Y.toneMapping}function pl(N,Y,J,te,Q){Y.isScene!==!0&&(Y=He),U.resetTextureUnits();const ye=Y.fog,De=te.isMeshStandardMaterial?Y.environment:null,ke=A===null?y.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:en,Fe=(te.isMeshStandardMaterial?$:L).get(te.envMap||De),qe=te.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,Ke=!!J.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),Ze=!!J.morphAttributes.position,Pt=!!J.morphAttributes.normal,on=!!J.morphAttributes.color;let kt=Zi;te.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(kt=y.toneMapping);const Pn=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Et=Pn!==void 0?Pn.length:0,Qe=je.get(te),kr=x.state.lights;if(K===!0&&(ie===!0||N!==B)){const qt=N===B&&te.id===D;ze.setState(te,N,qt)}let Mt=!1;te.version===Qe.__version?(Qe.needsLights&&Qe.lightsStateVersion!==kr.state.version||Qe.outputColorSpace!==ke||Q.isBatchedMesh&&Qe.batching===!1||!Q.isBatchedMesh&&Qe.batching===!0||Q.isInstancedMesh&&Qe.instancing===!1||!Q.isInstancedMesh&&Qe.instancing===!0||Q.isSkinnedMesh&&Qe.skinning===!1||!Q.isSkinnedMesh&&Qe.skinning===!0||Q.isInstancedMesh&&Qe.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&Qe.instancingColor===!1&&Q.instanceColor!==null||Qe.envMap!==Fe||te.fog===!0&&Qe.fog!==ye||Qe.numClippingPlanes!==void 0&&(Qe.numClippingPlanes!==ze.numPlanes||Qe.numIntersection!==ze.numIntersection)||Qe.vertexAlphas!==qe||Qe.vertexTangents!==Ke||Qe.morphTargets!==Ze||Qe.morphNormals!==Pt||Qe.morphColors!==on||Qe.toneMapping!==kt||Ge.isWebGL2===!0&&Qe.morphTargetsCount!==Et)&&(Mt=!0):(Mt=!0,Qe.__version=te.version);let $n=Qe.currentProgram;Mt===!0&&($n=As(te,Y,Q));let Fo=!1,es=!1,Vr=!1;const Ot=$n.getUniforms(),Qt=Qe.uniforms;if(Ce.useProgram($n.program)&&(Fo=!0,es=!0,Vr=!0),te.id!==D&&(D=te.id,es=!0),Fo||B!==N){Ot.setValue(q,"projectionMatrix",N.projectionMatrix),Ot.setValue(q,"viewMatrix",N.matrixWorldInverse);const qt=Ot.map.cameraPosition;qt!==void 0&&qt.setValue(q,Ee.setFromMatrixPosition(N.matrixWorld)),Ge.logarithmicDepthBuffer&&Ot.setValue(q,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&Ot.setValue(q,"isOrthographic",N.isOrthographicCamera===!0),B!==N&&(B=N,es=!0,Vr=!0)}if(Q.isSkinnedMesh){Ot.setOptional(q,Q,"bindMatrix"),Ot.setOptional(q,Q,"bindMatrixInverse");const qt=Q.skeleton;qt&&(Ge.floatVertexTextures?(qt.boneTexture===null&&qt.computeBoneTexture(),Ot.setValue(q,"boneTexture",qt.boneTexture,U)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}Q.isBatchedMesh&&(Ot.setOptional(q,Q,"batchingTexture"),Ot.setValue(q,"batchingTexture",Q._matricesTexture,U));const li=J.morphAttributes;if((li.position!==void 0||li.normal!==void 0||li.color!==void 0&&Ge.isWebGL2===!0)&&Je.update(Q,J,$n),(es||Qe.receiveShadow!==Q.receiveShadow)&&(Qe.receiveShadow=Q.receiveShadow,Ot.setValue(q,"receiveShadow",Q.receiveShadow)),te.isMeshGouraudMaterial&&te.envMap!==null&&(Qt.envMap.value=Fe,Qt.flipEnvMap.value=Fe.isCubeTexture&&Fe.isRenderTargetTexture===!1?-1:1),es&&(Ot.setValue(q,"toneMappingExposure",y.toneMappingExposure),Qe.needsLights&&Br(Qt,Vr),ye&&te.fog===!0&&ge.refreshFogUniforms(Qt,ye),ge.refreshMaterialUniforms(Qt,te,W,H,we),Va.upload(q,Pi(Qe),Qt,U)),te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(Va.upload(q,Pi(Qe),Qt,U),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&Ot.setValue(q,"center",Q.center),Ot.setValue(q,"modelViewMatrix",Q.modelViewMatrix),Ot.setValue(q,"normalMatrix",Q.normalMatrix),Ot.setValue(q,"modelMatrix",Q.matrixWorld),te.isShaderMaterial||te.isRawShaderMaterial){const qt=te.uniformsGroups;for(let Ri=0,zr=qt.length;Ri<zr;Ri++)if(Ge.isWebGL2){const Oo=qt[Ri];k.update(Oo,$n),k.bind(Oo,$n)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return $n}function Br(N,Y){N.ambientLightColor.needsUpdate=Y,N.lightProbe.needsUpdate=Y,N.directionalLights.needsUpdate=Y,N.directionalLightShadows.needsUpdate=Y,N.pointLights.needsUpdate=Y,N.pointLightShadows.needsUpdate=Y,N.spotLights.needsUpdate=Y,N.spotLightShadows.needsUpdate=Y,N.rectAreaLights.needsUpdate=Y,N.hemisphereLights.needsUpdate=Y}function fl(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(N,Y,J){je.get(N.texture).__webglTexture=Y,je.get(N.depthTexture).__webglTexture=J;const te=je.get(N);te.__hasExternalTextures=!0,te.__hasExternalTextures&&(te.__autoAllocateDepthBuffer=J===void 0,te.__autoAllocateDepthBuffer||Ae.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),te.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(N,Y){const J=je.get(N);J.__webglFramebuffer=Y,J.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(N,Y=0,J=0){A=N,P=Y,C=J;let te=!0,Q=null,ye=!1,De=!1;if(N){const Fe=je.get(N);Fe.__useDefaultFramebuffer!==void 0?(Ce.bindFramebuffer(q.FRAMEBUFFER,null),te=!1):Fe.__webglFramebuffer===void 0?U.setupRenderTarget(N):Fe.__hasExternalTextures&&U.rebindTextures(N,je.get(N.texture).__webglTexture,je.get(N.depthTexture).__webglTexture);const qe=N.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(De=!0);const Ke=je.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(Array.isArray(Ke[Y])?Q=Ke[Y][J]:Q=Ke[Y],ye=!0):Ge.isWebGL2&&N.samples>0&&U.useMultisampledRTT(N)===!1?Q=je.get(N).__webglMultisampledFramebuffer:Array.isArray(Ke)?Q=Ke[J]:Q=Ke,M.copy(N.viewport),R.copy(N.scissor),z=N.scissorTest}else M.copy(se).multiplyScalar(W).floor(),R.copy(ne).multiplyScalar(W).floor(),z=ve;if(Ce.bindFramebuffer(q.FRAMEBUFFER,Q)&&Ge.drawBuffers&&te&&Ce.drawBuffers(N,Q),Ce.viewport(M),Ce.scissor(R),Ce.setScissorTest(z),ye){const Fe=je.get(N.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Fe.__webglTexture,J)}else if(De){const Fe=je.get(N.texture),qe=Y||0;q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,Fe.__webglTexture,J||0,qe)}D=-1},this.readRenderTargetPixels=function(N,Y,J,te,Q,ye,De){if(!(N&&N.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ke=je.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&De!==void 0&&(ke=ke[De]),ke){Ce.bindFramebuffer(q.FRAMEBUFFER,ke);try{const Fe=N.texture,qe=Fe.format,Ke=Fe.type;if(qe!==Wt&&xe.convert(qe)!==q.getParameter(q.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ze=Ke===ii&&(Ae.has("EXT_color_buffer_half_float")||Ge.isWebGL2&&Ae.has("EXT_color_buffer_float"));if(Ke!==ti&&xe.convert(Ke)!==q.getParameter(q.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ke===_t&&(Ge.isWebGL2||Ae.has("OES_texture_float")||Ae.has("WEBGL_color_buffer_float")))&&!Ze){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=N.width-te&&J>=0&&J<=N.height-Q&&q.readPixels(Y,J,te,Q,xe.convert(qe),xe.convert(Ke),ye)}finally{const Fe=A!==null?je.get(A).__webglFramebuffer:null;Ce.bindFramebuffer(q.FRAMEBUFFER,Fe)}}},this.copyFramebufferToTexture=function(N,Y,J=0){const te=Math.pow(2,-J),Q=Math.floor(Y.image.width*te),ye=Math.floor(Y.image.height*te);U.setTexture2D(Y,0),q.copyTexSubImage2D(q.TEXTURE_2D,J,0,0,N.x,N.y,Q,ye),Ce.unbindTexture()},this.copyTextureToTexture=function(N,Y,J,te=0){const Q=Y.image.width,ye=Y.image.height,De=xe.convert(J.format),ke=xe.convert(J.type);U.setTexture2D(J,0),q.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,J.flipY),q.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),q.pixelStorei(q.UNPACK_ALIGNMENT,J.unpackAlignment),Y.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,te,N.x,N.y,Q,ye,De,ke,Y.image.data):Y.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,te,N.x,N.y,Y.mipmaps[0].width,Y.mipmaps[0].height,De,Y.mipmaps[0].data):q.texSubImage2D(q.TEXTURE_2D,te,N.x,N.y,De,ke,Y.image),te===0&&J.generateMipmaps&&q.generateMipmap(q.TEXTURE_2D),Ce.unbindTexture()},this.copyTextureToTexture3D=function(N,Y,J,te,Q=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ye=N.max.x-N.min.x+1,De=N.max.y-N.min.y+1,ke=N.max.z-N.min.z+1,Fe=xe.convert(te.format),qe=xe.convert(te.type);let Ke;if(te.isData3DTexture)U.setTexture3D(te,0),Ke=q.TEXTURE_3D;else if(te.isDataArrayTexture||te.isCompressedArrayTexture)U.setTexture2DArray(te,0),Ke=q.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}q.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,te.flipY),q.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,te.premultiplyAlpha),q.pixelStorei(q.UNPACK_ALIGNMENT,te.unpackAlignment);const Ze=q.getParameter(q.UNPACK_ROW_LENGTH),Pt=q.getParameter(q.UNPACK_IMAGE_HEIGHT),on=q.getParameter(q.UNPACK_SKIP_PIXELS),kt=q.getParameter(q.UNPACK_SKIP_ROWS),Pn=q.getParameter(q.UNPACK_SKIP_IMAGES),Et=J.isCompressedTexture?J.mipmaps[Q]:J.image;q.pixelStorei(q.UNPACK_ROW_LENGTH,Et.width),q.pixelStorei(q.UNPACK_IMAGE_HEIGHT,Et.height),q.pixelStorei(q.UNPACK_SKIP_PIXELS,N.min.x),q.pixelStorei(q.UNPACK_SKIP_ROWS,N.min.y),q.pixelStorei(q.UNPACK_SKIP_IMAGES,N.min.z),J.isDataTexture||J.isData3DTexture?q.texSubImage3D(Ke,Q,Y.x,Y.y,Y.z,ye,De,ke,Fe,qe,Et.data):J.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),q.compressedTexSubImage3D(Ke,Q,Y.x,Y.y,Y.z,ye,De,ke,Fe,Et.data)):q.texSubImage3D(Ke,Q,Y.x,Y.y,Y.z,ye,De,ke,Fe,qe,Et),q.pixelStorei(q.UNPACK_ROW_LENGTH,Ze),q.pixelStorei(q.UNPACK_IMAGE_HEIGHT,Pt),q.pixelStorei(q.UNPACK_SKIP_PIXELS,on),q.pixelStorei(q.UNPACK_SKIP_ROWS,kt),q.pixelStorei(q.UNPACK_SKIP_IMAGES,Pn),Q===0&&te.generateMipmaps&&q.generateMipmap(Ke),Ce.unbindTexture()},this.initTexture=function(N){N.isCubeTexture?U.setTextureCube(N,0):N.isData3DTexture?U.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?U.setTexture2DArray(N,0):U.setTexture2D(N,0),Ce.unbindTexture()},this.resetState=function(){P=0,C=0,A=null,Ce.reset(),$e.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Mu?"display-p3":"srgb",t.unpackColorSpace=pt.workingColorSpace===rl?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ft?ws:em}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===ws?Ft:en}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class yM extends ym{}yM.prototype.isWebGL1Renderer=!0;class wm extends ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class wM{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Yc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Xn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Es("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const dn=new I;class Pu{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.applyMatrix4(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.applyNormalMatrix(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.transformDirection(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Wn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=mt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Wn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Wn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Wn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Wn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),i=mt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),i=mt(i,this.array),r=mt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new At(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Pu(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const wp=new I,Ep=new vt,Mp=new vt,EM=new I,Sp=new Xe,pa=new I,mc=new Yn,Tp=new Xe,gc=new Lr;class MM extends pe{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=rd,this.bindMatrix=new Xe,this.bindMatrixInverse=new Xe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Vt),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,pa),this.boundingBox.expandByPoint(pa)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Yn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,pa),this.boundingSphere.expandByPoint(pa)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),mc.copy(this.boundingSphere),mc.applyMatrix4(i),e.ray.intersectsSphere(mc)!==!1&&(Tp.copy(i).invert(),gc.copy(e.ray).applyMatrix4(Tp),!(this.boundingBox!==null&&gc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,gc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new vt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===rd?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===L_?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Ep.fromBufferAttribute(i.attributes.skinIndex,e),Mp.fromBufferAttribute(i.attributes.skinWeight,e),wp.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const a=Mp.getComponent(r);if(a!==0){const l=Ep.getComponent(r);Sp.multiplyMatrices(n.bones[l].matrixWorld,n.boneInverses[l]),t.addScaledVector(EM.copy(wp).applyMatrix4(Sp),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Em extends ft{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Cr extends jt{constructor(e=null,t=1,n=1,i,r,a,l,c,h=dt,d=dt,f,m){super(null,a,l,c,h,d,i,r,f,m),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ap=new Xe,SM=new Xe;class Ru{constructor(e=[],t=[]){this.uuid=Xn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Xe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Xe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const l=e[r]?e[r].matrixWorld:SM;Ap.multiplyMatrices(l,t[r]),Ap.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Ru(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Cr(t,e,e,Wt,_t);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new Em),this.bones.push(a),this.boneInverses.push(new Xe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const a=t[i];e.bones.push(a.uuid);const l=n[i];e.boneInverses.push(l.toArray())}return e}}class Qc extends At{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Js=new Xe,Cp=new Xe,fa=[],Pp=new Vt,TM=new Xe,io=new pe,so=new Yn;class AM extends pe{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Qc(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,TM)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Vt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Js),Pp.copy(e.boundingBox).applyMatrix4(Js),this.boundingBox.union(Pp)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Yn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Js),so.copy(e.boundingSphere).applyMatrix4(Js),this.boundingSphere.union(so)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(io.geometry=this.geometry,io.material=this.material,io.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),so.copy(this.boundingSphere),so.applyMatrix4(n),e.ray.intersectsSphere(so)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Js),Cp.multiplyMatrices(n,Js),io.matrixWorld=Cp,io.raycast(e,fa);for(let a=0,l=fa.length;a<l;a++){const c=fa[a];c.instanceId=r,c.object=this,t.push(c)}fa.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Qc(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Lu extends ni{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ve(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Rp=new I,Lp=new I,Ip=new Xe,vc=new Lr,ma=new Yn;class Gn extends ft{constructor(e=new tn,t=new Lu){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Rp.fromBufferAttribute(t,i-1),Lp.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Rp.distanceTo(Lp);e.setAttribute("lineDistance",new wt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ma.copy(n.boundingSphere),ma.applyMatrix4(i),ma.radius+=r,e.ray.intersectsSphere(ma)===!1)return;Ip.copy(i).invert(),vc.copy(e.ray).applyMatrix4(Ip);const l=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=l*l,h=new I,d=new I,f=new I,m=new I,v=this.isLineSegments?2:1,b=n.index,x=n.attributes.position;if(b!==null){const g=Math.max(0,a.start),E=Math.min(b.count,a.start+a.count);for(let y=g,S=E-1;y<S;y+=v){const P=b.getX(y),C=b.getX(y+1);if(h.fromBufferAttribute(x,P),d.fromBufferAttribute(x,C),vc.distanceSqToSegment(h,d,m,f)>c)continue;m.applyMatrix4(this.matrixWorld);const D=e.ray.origin.distanceTo(m);D<e.near||D>e.far||t.push({distance:D,point:f.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else{const g=Math.max(0,a.start),E=Math.min(x.count,a.start+a.count);for(let y=g,S=E-1;y<S;y+=v){if(h.fromBufferAttribute(x,y),d.fromBufferAttribute(x,y+1),vc.distanceSqToSegment(h,d,m,f)>c)continue;m.applyMatrix4(this.matrixWorld);const C=e.ray.origin.distanceTo(m);C<e.near||C>e.far||t.push({distance:C,point:f.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const l=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}}const Dp=new I,Np=new I;class CM extends Gn{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Dp.fromBufferAttribute(t,i),Np.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Dp.distanceTo(Np);e.setAttribute("lineDistance",new wt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class PM extends Gn{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Mm extends ni{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ve(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Up=new Xe,Jc=new Lr,ga=new Yn,va=new I;class RM extends ft{constructor(e=new tn,t=new Mm){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ga.copy(n.boundingSphere),ga.applyMatrix4(i),ga.radius+=r,e.ray.intersectsSphere(ga)===!1)return;Up.copy(i).invert(),Jc.copy(e.ray).applyMatrix4(Up);const l=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=l*l,h=n.index,f=n.attributes.position;if(h!==null){const m=Math.max(0,a.start),v=Math.min(h.count,a.start+a.count);for(let b=m,w=v;b<w;b++){const x=h.getX(b);va.fromBufferAttribute(f,x),Fp(va,x,c,i,e,t,this)}}else{const m=Math.max(0,a.start),v=Math.min(f.count,a.start+a.count);for(let b=m,w=v;b<w;b++)va.fromBufferAttribute(f,b),Fp(va,b,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const l=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}}function Fp(s,e,t,n,i,r,a){const l=Jc.distanceSqToPoint(s);if(l<t){const c=new I;Jc.closestPointToPoint(s,c),c.applyMatrix4(n);const h=i.ray.origin.distanceTo(c);if(h<i.near||h>i.far)return;r.push({distance:h,distanceToRay:Math.sqrt(l),point:c,index:e,face:null,object:a})}}class L1 extends jt{constructor(e,t,n,i,r,a,l,c,h,d,f,m){super(null,a,l,c,h,d,i,r,f,m),this.isCompressedTexture=!0,this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}class I1 extends jt{constructor(e,t,n,i,r,a,l,c,h){super(e,t,n,i,r,a,l,c,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class cn extends tn{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,l=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:l,thetaLength:c};const h=this;i=Math.floor(i),r=Math.floor(r);const d=[],f=[],m=[],v=[];let b=0;const w=[],x=n/2;let g=0;E(),a===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(d),this.setAttribute("position",new wt(f,3)),this.setAttribute("normal",new wt(m,3)),this.setAttribute("uv",new wt(v,2));function E(){const S=new I,P=new I;let C=0;const A=(t-e)/n;for(let D=0;D<=r;D++){const B=[],M=D/r,R=M*(t-e)+e;for(let z=0;z<=i;z++){const X=z/i,F=X*c+l,G=Math.sin(F),H=Math.cos(F);P.x=R*G,P.y=-M*n+x,P.z=R*H,f.push(P.x,P.y,P.z),S.set(G,A,H).normalize(),m.push(S.x,S.y,S.z),v.push(X,1-M),B.push(b++)}w.push(B)}for(let D=0;D<i;D++)for(let B=0;B<r;B++){const M=w[B][D],R=w[B+1][D],z=w[B+1][D+1],X=w[B][D+1];d.push(M,R,X),d.push(R,z,X),C+=6}h.addGroup(g,C,0),g+=C}function y(S){const P=b,C=new Te,A=new I;let D=0;const B=S===!0?e:t,M=S===!0?1:-1;for(let z=1;z<=i;z++)f.push(0,x*M,0),m.push(0,M,0),v.push(.5,.5),b++;const R=b;for(let z=0;z<=i;z++){const F=z/i*c+l,G=Math.cos(F),H=Math.sin(F);A.x=B*H,A.y=x*M,A.z=B*G,f.push(A.x,A.y,A.z),m.push(0,M,0),C.x=G*.5+.5,C.y=H*.5*M+.5,v.push(C.x,C.y),b++}for(let z=0;z<i;z++){const X=P+z,F=R+z;S===!0?d.push(F,F+1,X):d.push(F+1,F,X),D+=3}h.addGroup(g,D,S===!0?1:2),g+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Iu extends tn{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const r=[],a=[];l(i),h(n),d(),this.setAttribute("position",new wt(r,3)),this.setAttribute("normal",new wt(r.slice(),3)),this.setAttribute("uv",new wt(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function l(E){const y=new I,S=new I,P=new I;for(let C=0;C<t.length;C+=3)v(t[C+0],y),v(t[C+1],S),v(t[C+2],P),c(y,S,P,E)}function c(E,y,S,P){const C=P+1,A=[];for(let D=0;D<=C;D++){A[D]=[];const B=E.clone().lerp(S,D/C),M=y.clone().lerp(S,D/C),R=C-D;for(let z=0;z<=R;z++)z===0&&D===C?A[D][z]=B:A[D][z]=B.clone().lerp(M,z/R)}for(let D=0;D<C;D++)for(let B=0;B<2*(C-D)-1;B++){const M=Math.floor(B/2);B%2===0?(m(A[D][M+1]),m(A[D+1][M]),m(A[D][M])):(m(A[D][M+1]),m(A[D+1][M+1]),m(A[D+1][M]))}}function h(E){const y=new I;for(let S=0;S<r.length;S+=3)y.x=r[S+0],y.y=r[S+1],y.z=r[S+2],y.normalize().multiplyScalar(E),r[S+0]=y.x,r[S+1]=y.y,r[S+2]=y.z}function d(){const E=new I;for(let y=0;y<r.length;y+=3){E.x=r[y+0],E.y=r[y+1],E.z=r[y+2];const S=x(E)/2/Math.PI+.5,P=g(E)/Math.PI+.5;a.push(S,1-P)}b(),f()}function f(){for(let E=0;E<a.length;E+=6){const y=a[E+0],S=a[E+2],P=a[E+4],C=Math.max(y,S,P),A=Math.min(y,S,P);C>.9&&A<.1&&(y<.2&&(a[E+0]+=1),S<.2&&(a[E+2]+=1),P<.2&&(a[E+4]+=1))}}function m(E){r.push(E.x,E.y,E.z)}function v(E,y){const S=E*3;y.x=e[S+0],y.y=e[S+1],y.z=e[S+2]}function b(){const E=new I,y=new I,S=new I,P=new I,C=new Te,A=new Te,D=new Te;for(let B=0,M=0;B<r.length;B+=9,M+=6){E.set(r[B+0],r[B+1],r[B+2]),y.set(r[B+3],r[B+4],r[B+5]),S.set(r[B+6],r[B+7],r[B+8]),C.set(a[M+0],a[M+1]),A.set(a[M+2],a[M+3]),D.set(a[M+4],a[M+5]),P.copy(E).add(y).add(S).divideScalar(3);const R=x(P);w(C,M+0,E,R),w(A,M+2,y,R),w(D,M+4,S,R)}}function w(E,y,S,P){P<0&&E.x===1&&(a[y]=E.x-1),S.x===0&&S.z===0&&(a[y]=P/2/Math.PI+.5)}function x(E){return Math.atan2(E.z,-E.x)}function g(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Iu(e.vertices,e.indices,e.radius,e.details)}}class gr extends Iu{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new gr(e.radius,e.detail)}}class al extends tn{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:l},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(a+l,Math.PI);let h=0;const d=[],f=new I,m=new I,v=[],b=[],w=[],x=[];for(let g=0;g<=n;g++){const E=[],y=g/n;let S=0;g===0&&a===0?S=.5/t:g===n&&c===Math.PI&&(S=-.5/t);for(let P=0;P<=t;P++){const C=P/t;f.x=-e*Math.cos(i+C*r)*Math.sin(a+y*l),f.y=e*Math.cos(a+y*l),f.z=e*Math.sin(i+C*r)*Math.sin(a+y*l),b.push(f.x,f.y,f.z),m.copy(f).normalize(),w.push(m.x,m.y,m.z),x.push(C+S,1-y),E.push(h++)}d.push(E)}for(let g=0;g<n;g++)for(let E=0;E<t;E++){const y=d[g][E+1],S=d[g][E],P=d[g+1][E],C=d[g+1][E+1];(g!==0||a>0)&&v.push(y,S,C),(g!==n-1||c<Math.PI)&&v.push(S,P,C)}this.setIndex(v),this.setAttribute("position",new wt(b,3)),this.setAttribute("normal",new wt(w,3)),this.setAttribute("uv",new wt(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new al(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class vs extends tn{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const a=[],l=[],c=[],h=[],d=new I,f=new I,m=new I;for(let v=0;v<=n;v++)for(let b=0;b<=i;b++){const w=b/i*r,x=v/n*Math.PI*2;f.x=(e+t*Math.cos(x))*Math.cos(w),f.y=(e+t*Math.cos(x))*Math.sin(w),f.z=t*Math.sin(x),l.push(f.x,f.y,f.z),d.x=e*Math.cos(w),d.y=e*Math.sin(w),m.subVectors(f,d).normalize(),c.push(m.x,m.y,m.z),h.push(b/i),h.push(v/n)}for(let v=1;v<=n;v++)for(let b=1;b<=i;b++){const w=(i+1)*v+b-1,x=(i+1)*(v-1)+b-1,g=(i+1)*(v-1)+b,E=(i+1)*v+b;a.push(w,x,E),a.push(x,g,E)}this.setIndex(a),this.setAttribute("position",new wt(l,3)),this.setAttribute("normal",new wt(c,3)),this.setAttribute("uv",new wt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vs(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Du extends tn{constructor(e=1,t=.4,n=64,i=8,r=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:i,p:r,q:a},n=Math.floor(n),i=Math.floor(i);const l=[],c=[],h=[],d=[],f=new I,m=new I,v=new I,b=new I,w=new I,x=new I,g=new I;for(let y=0;y<=n;++y){const S=y/n*r*Math.PI*2;E(S,r,a,e,v),E(S+.01,r,a,e,b),x.subVectors(b,v),g.addVectors(b,v),w.crossVectors(x,g),g.crossVectors(w,x),w.normalize(),g.normalize();for(let P=0;P<=i;++P){const C=P/i*Math.PI*2,A=-t*Math.cos(C),D=t*Math.sin(C);f.x=v.x+(A*g.x+D*w.x),f.y=v.y+(A*g.y+D*w.y),f.z=v.z+(A*g.z+D*w.z),c.push(f.x,f.y,f.z),m.subVectors(f,v).normalize(),h.push(m.x,m.y,m.z),d.push(y/n),d.push(P/i)}}for(let y=1;y<=n;y++)for(let S=1;S<=i;S++){const P=(i+1)*(y-1)+(S-1),C=(i+1)*y+(S-1),A=(i+1)*y+S,D=(i+1)*(y-1)+S;l.push(P,C,D),l.push(C,A,D)}this.setIndex(l),this.setAttribute("position",new wt(c,3)),this.setAttribute("normal",new wt(h,3)),this.setAttribute("uv",new wt(d,2));function E(y,S,P,C,A){const D=Math.cos(y),B=Math.sin(y),M=P/S*y,R=Math.cos(M);A.x=C*(2+R)*.5*D,A.y=C*(2+R)*B*.5,A.z=C*Math.sin(M)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Du(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class ll extends ni{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ve(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=tm,this.normalScale=new Te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ai extends ll{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Te(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Kt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ve(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ve(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ve(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function _a(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function LM(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function IM(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Op(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){const l=t[r]*e;for(let c=0;c!==e;++c)i[a++]=s[l+c]}return i}function Sm(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}class Do{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let l=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===l)break;if(r=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=r)){const l=t[1];e<l&&(n=2,r=l);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){const l=n+a>>>1;e<t[l]?a=l:n=l+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class DM extends Do{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ld,endingEnd:Ld}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,a=e+1,l=i[r],c=i[a];if(l===void 0)switch(this.getSettings_().endingStart){case Id:r=e,l=2*t-n;break;case Dd:r=i.length-2,l=t+i[r]-i[r+1];break;default:r=e,l=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Id:a=e,c=2*n-t;break;case Dd:a=1,c=n+i[1]-i[0];break;default:a=e-1,c=t}const h=(n-t)*.5,d=this.valueSize;this._weightPrev=h/(t-l),this._weightNext=h/(c-n),this._offsetPrev=r*d,this._offsetNext=a*d}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,c=e*l,h=c-l,d=this._offsetPrev,f=this._offsetNext,m=this._weightPrev,v=this._weightNext,b=(n-t)/(i-t),w=b*b,x=w*b,g=-m*x+2*m*w-m*b,E=(1+m)*x+(-1.5-2*m)*w+(-.5+m)*b+1,y=(-1-v)*x+(1.5+v)*w+.5*b,S=v*x-v*w;for(let P=0;P!==l;++P)r[P]=g*a[d+P]+E*a[h+P]+y*a[c+P]+S*a[f+P];return r}}class NM extends Do{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,c=e*l,h=c-l,d=(n-t)/(i-t),f=1-d;for(let m=0;m!==l;++m)r[m]=a[h+m]*f+a[c+m]*d;return r}}class UM extends Do{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class ai{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=_a(t,this.TimeBufferType),this.values=_a(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:_a(e.times,Array),values:_a(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new UM(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new NM(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new DM(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Po:t=this.InterpolantFactoryMethodDiscrete;break;case Sr:t=this.InterpolantFactoryMethodLinear;break;case Xl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Po;case this.InterpolantFactoryMethodLinear:return Sr;case this.InterpolantFactoryMethodSmooth:return Xl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);const l=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*l,a*l)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let l=0;l!==r;l++){const c=n[l];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,l,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,l,c,a),e=!1;break}a=c}if(i!==void 0&&LM(i))for(let l=0,c=i.length;l!==c;++l){const h=i[l];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,l,h),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Xl,r=e.length-1;let a=1;for(let l=1;l<r;++l){let c=!1;const h=e[l],d=e[l+1];if(h!==d&&(l!==1||h!==e[0]))if(i)c=!0;else{const f=l*n,m=f-n,v=f+n;for(let b=0;b!==n;++b){const w=t[f+b];if(w!==t[m+b]||w!==t[v+b]){c=!0;break}}}if(c){if(l!==a){e[a]=e[l];const f=l*n,m=a*n;for(let v=0;v!==n;++v)t[m+v]=t[f+v]}++a}}if(r>0){e[a]=e[r];for(let l=r*n,c=a*n,h=0;h!==n;++h)t[c+h]=t[l+h];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}ai.prototype.TimeBufferType=Float32Array;ai.prototype.ValueBufferType=Float32Array;ai.prototype.DefaultInterpolation=Sr;class Dr extends ai{}Dr.prototype.ValueTypeName="bool";Dr.prototype.ValueBufferType=Array;Dr.prototype.DefaultInterpolation=Po;Dr.prototype.InterpolantFactoryMethodLinear=void 0;Dr.prototype.InterpolantFactoryMethodSmooth=void 0;class Tm extends ai{}Tm.prototype.ValueTypeName="color";class Pr extends ai{}Pr.prototype.ValueTypeName="number";class FM extends Do{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,c=(n-t)/(i-t);let h=e*l;for(let d=h+l;h!==d;h+=4)Gt.slerpFlat(r,0,a,h-l,a,h,c);return r}}class Ms extends ai{InterpolantFactoryMethodLinear(e){return new FM(this.times,this.values,this.getValueSize(),e)}}Ms.prototype.ValueTypeName="quaternion";Ms.prototype.DefaultInterpolation=Sr;Ms.prototype.InterpolantFactoryMethodSmooth=void 0;class Nr extends ai{}Nr.prototype.ValueTypeName="string";Nr.prototype.ValueBufferType=Array;Nr.prototype.DefaultInterpolation=Po;Nr.prototype.InterpolantFactoryMethodLinear=void 0;Nr.prototype.InterpolantFactoryMethodSmooth=void 0;class Rr extends ai{}Rr.prototype.ValueTypeName="vector";class OM{constructor(e,t=-1,n,i=F_){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Xn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,l=n.length;a!==l;++a)t.push(kM(n[a]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=n.length;r!==a;++r)t.push(ai.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,a=[];for(let l=0;l<r;l++){let c=[],h=[];c.push((l+r-1)%r,l,(l+1)%r),h.push(0,1,0);const d=IM(c);c=Op(c,1,d),h=Op(h,1,d),!i&&c[0]===0&&(c.push(r),h.push(h[0])),a.push(new Pr(".morphTargetInfluences["+t[l].name+"]",c,h).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let l=0,c=e.length;l<c;l++){const h=e[l],d=h.name.match(r);if(d&&d.length>1){const f=d[1];let m=i[f];m||(i[f]=m=[]),m.push(h)}}const a=[];for(const l in i)a.push(this.CreateFromMorphTargetSequence(l,i[l],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(f,m,v,b,w){if(v.length!==0){const x=[],g=[];Sm(v,x,g,b),x.length!==0&&w.push(new f(m,x,g))}},i=[],r=e.name||"default",a=e.fps||30,l=e.blendMode;let c=e.length||-1;const h=e.hierarchy||[];for(let f=0;f<h.length;f++){const m=h[f].keys;if(!(!m||m.length===0))if(m[0].morphTargets){const v={};let b;for(b=0;b<m.length;b++)if(m[b].morphTargets)for(let w=0;w<m[b].morphTargets.length;w++)v[m[b].morphTargets[w]]=-1;for(const w in v){const x=[],g=[];for(let E=0;E!==m[b].morphTargets.length;++E){const y=m[b];x.push(y.time),g.push(y.morphTarget===w?1:0)}i.push(new Pr(".morphTargetInfluence["+w+"]",x,g))}c=v.length*a}else{const v=".bones["+t[f].name+"]";n(Rr,v+".position",m,"pos",i),n(Ms,v+".quaternion",m,"rot",i),n(Rr,v+".scale",m,"scl",i)}}return i.length===0?null:new this(r,c,i,l)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function BM(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Pr;case"vector":case"vector2":case"vector3":case"vector4":return Rr;case"color":return Tm;case"quaternion":return Ms;case"bool":case"boolean":return Dr;case"string":return Nr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function kM(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=BM(s.type);if(s.times===void 0){const t=[],n=[];Sm(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const Ki={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class VM{constructor(e,t,n){const i=this;let r=!1,a=0,l=0,c;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(d){l++,r===!1&&i.onStart!==void 0&&i.onStart(d,a,l),r=!0},this.itemEnd=function(d){a++,i.onProgress!==void 0&&i.onProgress(d,a,l),a===l&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(d){i.onError!==void 0&&i.onError(d)},this.resolveURL=function(d){return c?c(d):d},this.setURLModifier=function(d){return c=d,this},this.addHandler=function(d,f){return h.push(d,f),this},this.removeHandler=function(d){const f=h.indexOf(d);return f!==-1&&h.splice(f,2),this},this.getHandler=function(d){for(let f=0,m=h.length;f<m;f+=2){const v=h[f],b=h[f+1];if(v.global&&(v.lastIndex=0),v.test(d))return b}return null}}}const zM=new VM;class Ur{constructor(e){this.manager=e!==void 0?e:zM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Ur.DEFAULT_MATERIAL_NAME="__DEFAULT";const _i={};class HM extends Error{constructor(e,t){super(e),this.response=t}}class Am extends Ur{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Ki.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(_i[e]!==void 0){_i[e].push({onLoad:t,onProgress:n,onError:i});return}_i[e]=[],_i[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),l=this.mimeType,c=this.responseType;fetch(a).then(h=>{if(h.status===200||h.status===0){if(h.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream=="undefined"||h.body===void 0||h.body.getReader===void 0)return h;const d=_i[e],f=h.body.getReader(),m=h.headers.get("Content-Length")||h.headers.get("X-File-Size"),v=m?parseInt(m):0,b=v!==0;let w=0;const x=new ReadableStream({start(g){E();function E(){f.read().then(({done:y,value:S})=>{if(y)g.close();else{w+=S.byteLength;const P=new ProgressEvent("progress",{lengthComputable:b,loaded:w,total:v});for(let C=0,A=d.length;C<A;C++){const D=d[C];D.onProgress&&D.onProgress(P)}g.enqueue(S),E()}})}}});return new Response(x)}else throw new HM(`fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`,h)}).then(h=>{switch(c){case"arraybuffer":return h.arrayBuffer();case"blob":return h.blob();case"document":return h.text().then(d=>new DOMParser().parseFromString(d,l));case"json":return h.json();default:if(l===void 0)return h.text();{const f=/charset="?([^;"\s]*)"?/i.exec(l),m=f&&f[1]?f[1].toLowerCase():void 0,v=new TextDecoder(m);return h.arrayBuffer().then(b=>v.decode(b))}}}).then(h=>{Ki.add(e,h);const d=_i[e];delete _i[e];for(let f=0,m=d.length;f<m;f++){const v=d[f];v.onLoad&&v.onLoad(h)}}).catch(h=>{const d=_i[e];if(d===void 0)throw this.manager.itemError(e),h;delete _i[e];for(let f=0,m=d.length;f<m;f++){const v=d[f];v.onError&&v.onError(h)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class GM extends Ur{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Ki.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const l=Ro("img");function c(){d(),Ki.add(e,this),t&&t(this),r.manager.itemEnd(e)}function h(f){d(),i&&i(f),r.manager.itemError(e),r.manager.itemEnd(e)}function d(){l.removeEventListener("load",c,!1),l.removeEventListener("error",h,!1)}return l.addEventListener("load",c,!1),l.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(l.crossOrigin=this.crossOrigin),r.manager.itemStart(e),l.src=e,l}}class WM extends Ur{constructor(e){super(e)}load(e,t,n,i){const r=new jt,a=new GM(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(l){r.image=l,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class Nu extends ft{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ve(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const _c=new Xe,Bp=new I,kp=new I;class Uu{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Te(512,512),this.map=null,this.mapPass=null,this.matrix=new Xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Au,this._frameExtents=new Te(1,1),this._viewportCount=1,this._viewports=[new vt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Bp.setFromMatrixPosition(e.matrixWorld),t.position.copy(Bp),kp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(kp),t.updateMatrixWorld(),_c.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_c),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(_c)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class XM extends Uu{constructor(){super(new fn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Tr*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class jM extends Nu{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.target=new ft,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new XM}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Vp=new Xe,ro=new I,xc=new I;class qM extends Uu{constructor(){super(new fn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Te(4,2),this._viewportCount=6,this._viewports=[new vt(2,1,1,1),new vt(0,1,1,1),new vt(3,1,1,1),new vt(1,1,1,1),new vt(3,0,1,1),new vt(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ro.setFromMatrixPosition(e.matrixWorld),n.position.copy(ro),xc.copy(n.position),xc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(xc),n.updateMatrixWorld(),i.makeTranslation(-ro.x,-ro.y,-ro.z),Vp.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vp)}}class Cm extends Nu{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new qM}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class YM extends Uu{constructor(){super(new Ti(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class KM extends Nu{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.target=new ft,this.shadow=new YM}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class So{static decodeText(e){if(typeof TextDecoder!="undefined")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class $M extends Ur{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap=="undefined"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Ki.get(e);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(h=>{t&&t(h),r.manager.itemEnd(e)}).catch(h=>{i&&i(h)});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}const l={};l.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",l.headers=this.requestHeader;const c=fetch(e,l).then(function(h){return h.blob()}).then(function(h){return createImageBitmap(h,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(h){return Ki.add(e,h),t&&t(h),r.manager.itemEnd(e),h}).catch(function(h){i&&i(h),Ki.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Ki.add(e,c),r.manager.itemStart(e)}}const Fu="\\[\\]\\.:\\/",ZM=new RegExp("["+Fu+"]","g"),Ou="[^"+Fu+"]",QM="[^"+Fu.replace("\\.","")+"]",JM=/((?:WC+[\/:])*)/.source.replace("WC",Ou),eS=/(WCOD+)?/.source.replace("WCOD",QM),tS=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ou),nS=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ou),iS=new RegExp("^"+JM+eS+tS+nS+"$"),sS=["material","materials","bones","map"];class rS{constructor(e,t,n){const i=n||gt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class gt{constructor(e,t,n){this.path=t,this.parsedPath=n||gt.parseTrackName(t),this.node=gt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new gt.Composite(e,t,n):new gt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(ZM,"")}static parseTrackName(e){const t=iS.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);sS.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const l=r[a];if(l.name===t||l.uuid===t)return l;const c=n(l.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=gt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let d=0;d<e.length;d++)if(e[d].name===h){h=d;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(h!==void 0){if(e[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[h]}}const a=e[i];if(a===void 0){const h=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+i+" but it wasn't found.",e);return}let l=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?l=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}gt.Composite=rS;gt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};gt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};gt.prototype.GetterByBindingType=[gt.prototype._getValue_direct,gt.prototype._getValue_array,gt.prototype._getValue_arrayElement,gt.prototype._getValue_toArray];gt.prototype.SetterByBindingTypeAndVersioning=[[gt.prototype._setValue_direct,gt.prototype._setValue_direct_setNeedsUpdate,gt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[gt.prototype._setValue_array,gt.prototype._setValue_array_setNeedsUpdate,gt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[gt.prototype._setValue_arrayElement,gt.prototype._setValue_arrayElement_setNeedsUpdate,gt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[gt.prototype._setValue_fromArray,gt.prototype._setValue_fromArray_setNeedsUpdate,gt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class cl{constructor(e){this.value=e}clone(){return new cl(this.value.clone===void 0?this.value:this.value.clone())}}class oS{constructor(e,t,n=0,i=1/0){this.ray=new Lr(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Tu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return eu(e,this,n,t),n.sort(zp),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)eu(e[i],this,n,t);return n.sort(zp),n}}function zp(s,e){return s.distance-e.distance}function eu(s,e,t,n){if(s.layers.test(e.layers)&&s.raycast(e,t),n===!0){const i=s.children;for(let r=0,a=i.length;r<a;r++)eu(i[r],e,t,!0)}}class Hp{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Kt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Gp=new I,xa=new I;class Si{constructor(e=new I,t=new I){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Gp.subVectors(e,this.start),xa.subVectors(this.end,this.start);const n=xa.dot(xa);let r=xa.dot(Gp)/n;return t&&(r=Kt(r,0,1)),r}closestPointToPoint(e,t,n){const i=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(i).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:yu}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=yu);const Pm=0,aS=1,lS=2,Wp=2,bc=1.25,Xp=1,Qi=6*4+4+4,ul=65535,cS=Math.pow(2,-24),yc=Symbol("SKIP_GENERATION");function Rm(s){return s.index?s.index.count:s.attributes.position.count}function Fr(s){return Rm(s)/3}function Lm(s,e=ArrayBuffer){return s>65535?new Uint32Array(new e(4*s)):new Uint16Array(new e(2*s))}function uS(s,e){if(!s.index){const t=s.attributes.position.count,n=e.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,i=Lm(t,n);s.setIndex(new At(i,1));for(let r=0;r<t;r++)i[r]=r}}function Im(s){const e=Fr(s),t=s.drawRange,n=t.start/3,i=(t.start+t.count)/3,r=Math.max(0,n),a=Math.min(e,i)-r;return[{offset:Math.floor(r),count:Math.floor(a)}]}function Dm(s){if(!s.groups||!s.groups.length)return Im(s);const e=[],t=new Set,n=s.drawRange,i=n.start/3,r=(n.start+n.count)/3;for(const l of s.groups){const c=l.start/3,h=(l.start+l.count)/3;t.add(Math.max(i,c)),t.add(Math.min(r,h))}const a=Array.from(t.values()).sort((l,c)=>l-c);for(let l=0;l<a.length-1;l++){const c=a[l],h=a[l+1];e.push({offset:Math.floor(c),count:Math.floor(h-c)})}return e}function hS(s){if(s.groups.length===0)return!1;const e=Fr(s),t=Dm(s).sort((r,a)=>r.offset-a.offset),n=t[t.length-1];n.count=Math.min(e-n.offset,n.count);let i=0;return t.forEach(({count:r})=>i+=r),e!==i}function wc(s,e,t,n,i){let r=1/0,a=1/0,l=1/0,c=-1/0,h=-1/0,d=-1/0,f=1/0,m=1/0,v=1/0,b=-1/0,w=-1/0,x=-1/0;for(let g=e*6,E=(e+t)*6;g<E;g+=6){const y=s[g+0],S=s[g+1],P=y-S,C=y+S;P<r&&(r=P),C>c&&(c=C),y<f&&(f=y),y>b&&(b=y);const A=s[g+2],D=s[g+3],B=A-D,M=A+D;B<a&&(a=B),M>h&&(h=M),A<m&&(m=A),A>w&&(w=A);const R=s[g+4],z=s[g+5],X=R-z,F=R+z;X<l&&(l=X),F>d&&(d=F),R<v&&(v=R),R>x&&(x=R)}n[0]=r,n[1]=a,n[2]=l,n[3]=c,n[4]=h,n[5]=d,i[0]=f,i[1]=m,i[2]=v,i[3]=b,i[4]=w,i[5]=x}function dS(s,e=null,t=null,n=null){const i=s.attributes.position,r=s.index?s.index.array:null,a=Fr(s),l=i.normalized;let c;e===null?(c=new Float32Array(a*6*4),t=0,n=a):(c=e,t=t||0,n=n||a);const h=i.array,d=i.offset||0;let f=3;i.isInterleavedBufferAttribute&&(f=i.data.stride);const m=["getX","getY","getZ"];for(let v=t;v<t+n;v++){const b=v*3,w=v*6;let x=b+0,g=b+1,E=b+2;r&&(x=r[x],g=r[g],E=r[E]),l||(x=x*f+d,g=g*f+d,E=E*f+d);for(let y=0;y<3;y++){let S,P,C;l?(S=i[m[y]](x),P=i[m[y]](g),C=i[m[y]](E)):(S=h[x+y],P=h[g+y],C=h[E+y]);let A=S;P<A&&(A=P),C<A&&(A=C);let D=S;P>D&&(D=P),C>D&&(D=C);const B=(D-A)/2,M=y*2;c[w+M+0]=A+B,c[w+M+1]=B+(Math.abs(A)+B)*cS}}return c}function Nt(s,e,t){return t.min.x=e[s],t.min.y=e[s+1],t.min.z=e[s+2],t.max.x=e[s+3],t.max.y=e[s+4],t.max.z=e[s+5],t}function jp(s){let e=-1,t=-1/0;for(let n=0;n<3;n++){const i=s[n+3]-s[n];i>t&&(t=i,e=n)}return e}function qp(s,e){e.set(s)}function Yp(s,e,t){let n,i;for(let r=0;r<3;r++){const a=r+3;n=s[r],i=e[r],t[r]=n<i?n:i,n=s[a],i=e[a],t[a]=n>i?n:i}}function ba(s,e,t){for(let n=0;n<3;n++){const i=e[s+2*n],r=e[s+2*n+1],a=i-r,l=i+r;a<t[n]&&(t[n]=a),l>t[n+3]&&(t[n+3]=l)}}function oo(s){const e=s[3]-s[0],t=s[4]-s[1],n=s[5]-s[2];return 2*(e*t+t*n+n*e)}const yi=32,pS=(s,e)=>s.candidate-e.candidate,Gi=new Array(yi).fill().map(()=>({count:0,bounds:new Float32Array(6),rightCacheBounds:new Float32Array(6),leftCacheBounds:new Float32Array(6),candidate:0})),ya=new Float32Array(6);function fS(s,e,t,n,i,r){let a=-1,l=0;if(r===Pm)a=jp(e),a!==-1&&(l=(e[a]+e[a+3])/2);else if(r===aS)a=jp(s),a!==-1&&(l=mS(t,n,i,a));else if(r===lS){const c=oo(s);let h=bc*i;const d=n*6,f=(n+i)*6;for(let m=0;m<3;m++){const v=e[m],x=(e[m+3]-v)/yi;if(i<yi/4){const g=[...Gi];g.length=i;let E=0;for(let S=d;S<f;S+=6,E++){const P=g[E];P.candidate=t[S+2*m],P.count=0;const{bounds:C,leftCacheBounds:A,rightCacheBounds:D}=P;for(let B=0;B<3;B++)D[B]=1/0,D[B+3]=-1/0,A[B]=1/0,A[B+3]=-1/0,C[B]=1/0,C[B+3]=-1/0;ba(S,t,C)}g.sort(pS);let y=i;for(let S=0;S<y;S++){const P=g[S];for(;S+1<y&&g[S+1].candidate===P.candidate;)g.splice(S+1,1),y--}for(let S=d;S<f;S+=6){const P=t[S+2*m];for(let C=0;C<y;C++){const A=g[C];P>=A.candidate?ba(S,t,A.rightCacheBounds):(ba(S,t,A.leftCacheBounds),A.count++)}}for(let S=0;S<y;S++){const P=g[S],C=P.count,A=i-P.count,D=P.leftCacheBounds,B=P.rightCacheBounds;let M=0;C!==0&&(M=oo(D)/c);let R=0;A!==0&&(R=oo(B)/c);const z=Xp+bc*(M*C+R*A);z<h&&(a=m,h=z,l=P.candidate)}}else{for(let y=0;y<yi;y++){const S=Gi[y];S.count=0,S.candidate=v+x+y*x;const P=S.bounds;for(let C=0;C<3;C++)P[C]=1/0,P[C+3]=-1/0}for(let y=d;y<f;y+=6){let C=~~((t[y+2*m]-v)/x);C>=yi&&(C=yi-1);const A=Gi[C];A.count++,ba(y,t,A.bounds)}const g=Gi[yi-1];qp(g.bounds,g.rightCacheBounds);for(let y=yi-2;y>=0;y--){const S=Gi[y],P=Gi[y+1];Yp(S.bounds,P.rightCacheBounds,S.rightCacheBounds)}let E=0;for(let y=0;y<yi-1;y++){const S=Gi[y],P=S.count,C=S.bounds,D=Gi[y+1].rightCacheBounds;P!==0&&(E===0?qp(C,ya):Yp(C,ya,ya)),E+=P;let B=0,M=0;E!==0&&(B=oo(ya)/c);const R=i-E;R!==0&&(M=oo(D)/c);const z=Xp+bc*(B*E+M*R);z<h&&(a=m,h=z,l=S.candidate)}}}}else console.warn(`MeshBVH: Invalid build strategy value ${r} used.`);return{axis:a,pos:l}}function mS(s,e,t,n){let i=0;for(let r=e,a=e+t;r<a;r++)i+=s[r*6+n*2];return i/t}class Ec{constructor(){this.boundingData=new Float32Array(6)}}function gS(s,e,t,n,i,r){let a=n,l=n+i-1;const c=r.pos,h=r.axis*2;for(;;){for(;a<=l&&t[a*6+h]<c;)a++;for(;a<=l&&t[l*6+h]>=c;)l--;if(a<l){for(let d=0;d<3;d++){let f=e[a*3+d];e[a*3+d]=e[l*3+d],e[l*3+d]=f}for(let d=0;d<6;d++){let f=t[a*6+d];t[a*6+d]=t[l*6+d],t[l*6+d]=f}a++,l--}else return a}}function vS(s,e,t,n,i,r){let a=n,l=n+i-1;const c=r.pos,h=r.axis*2;for(;;){for(;a<=l&&t[a*6+h]<c;)a++;for(;a<=l&&t[l*6+h]>=c;)l--;if(a<l){let d=s[a];s[a]=s[l],s[l]=d;for(let f=0;f<6;f++){let m=t[a*6+f];t[a*6+f]=t[l*6+f],t[l*6+f]=m}a++,l--}else return a}}function vn(s,e){return e[s+15]===65535}function wn(s,e){return e[s+6]}function An(s,e){return e[s+14]}function Un(s){return s+8}function Cn(s,e){return e[s+6]}function Bu(s,e){return e[s+7]}let Nm,_o,za,Um;const _S=Math.pow(2,32);function tu(s){return"count"in s?1:1+tu(s.left)+tu(s.right)}function xS(s,e,t){return Nm=new Float32Array(t),_o=new Uint32Array(t),za=new Uint16Array(t),Um=new Uint8Array(t),nu(s,e)}function nu(s,e){const t=s/4,n=s/2,i="count"in e,r=e.boundingData;for(let a=0;a<6;a++)Nm[t+a]=r[a];if(i)if(e.buffer){const a=e.buffer;Um.set(new Uint8Array(a),s);for(let l=s,c=s+a.byteLength;l<c;l+=Qi){const h=l/2;vn(h,za)||(_o[l/4+6]+=t)}return s+a.byteLength}else{const a=e.offset,l=e.count;return _o[t+6]=a,za[n+14]=l,za[n+15]=ul,s+Qi}else{const a=e.left,l=e.right,c=e.splitAxis;let h;if(h=nu(s+Qi,a),h/4>_S)throw new Error("MeshBVH: Cannot store child pointer greater than 32 bits.");return _o[t+6]=h/4,h=nu(h,l),_o[t+7]=c,h}}function bS(s,e){const t=(s.index?s.index.count:s.attributes.position.count)/3,n=t>2**16,i=n?4:2,r=e?new SharedArrayBuffer(t*i):new ArrayBuffer(t*i),a=n?new Uint32Array(r):new Uint16Array(r);for(let l=0,c=a.length;l<c;l++)a[l]=l;return a}function yS(s,e,t,n,i){const{maxDepth:r,verbose:a,maxLeafTris:l,strategy:c,onProgress:h,indirect:d}=i,f=s._indirectBuffer,m=s.geometry,v=m.index?m.index.array:null,b=d?vS:gS,w=Fr(m),x=new Float32Array(6);let g=!1;const E=new Ec;return wc(e,t,n,E.boundingData,x),S(E,t,n,x),E;function y(P){h&&h(P/w)}function S(P,C,A,D=null,B=0){if(!g&&B>=r&&(g=!0,a&&(console.warn(`MeshBVH: Max depth of ${r} reached when generating BVH. Consider increasing maxDepth.`),console.warn(m))),A<=l||B>=r)return y(C+A),P.offset=C,P.count=A,P;const M=fS(P.boundingData,D,e,C,A,c);if(M.axis===-1)return y(C+A),P.offset=C,P.count=A,P;const R=b(f,v,e,C,A,M);if(R===C||R===C+A)y(C+A),P.offset=C,P.count=A;else{P.splitAxis=M.axis;const z=new Ec,X=C,F=R-C;P.left=z,wc(e,X,F,z.boundingData,x),S(z,X,F,x,B+1);const G=new Ec,H=R,W=A-F;P.right=G,wc(e,H,W,G.boundingData,x),S(G,H,W,x,B+1)}return P}}function wS(s,e){const t=s.geometry;e.indirect&&(s._indirectBuffer=bS(t,e.useSharedArrayBuffer),hS(t)&&!e.verbose&&console.warn('MeshBVH: Provided geometry contains groups that do not fully span the vertex contents while using the "indirect" option. BVH may incorrectly report intersections on unrendered portions of the geometry.')),s._indirectBuffer||uS(t,e);const n=e.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,i=dS(t),r=e.indirect?Im(t):Dm(t);s._roots=r.map(a=>{const l=yS(s,i,a.offset,a.count,e),c=tu(l),h=new n(Qi*c);return xS(0,l,h),h})}class ri{constructor(){this.min=1/0,this.max=-1/0}setFromPointsField(e,t){let n=1/0,i=-1/0;for(let r=0,a=e.length;r<a;r++){const c=e[r][t];n=c<n?c:n,i=c>i?c:i}this.min=n,this.max=i}setFromPoints(e,t){let n=1/0,i=-1/0;for(let r=0,a=t.length;r<a;r++){const l=t[r],c=e.dot(l);n=c<n?c:n,i=c>i?c:i}this.min=n,this.max=i}isSeparated(e){return this.min>e.max||e.min>this.max}}ri.prototype.setFromBox=function(){const s=new I;return function(t,n){const i=n.min,r=n.max;let a=1/0,l=-1/0;for(let c=0;c<=1;c++)for(let h=0;h<=1;h++)for(let d=0;d<=1;d++){s.x=i.x*c+r.x*(1-c),s.y=i.y*h+r.y*(1-h),s.z=i.z*d+r.z*(1-d);const f=t.dot(s);a=Math.min(f,a),l=Math.max(f,l)}this.min=a,this.max=l}}();(function(){const s=new ri;return function(t,n){const i=t.points,r=t.satAxes,a=t.satBounds,l=n.points,c=n.satAxes,h=n.satBounds;for(let d=0;d<3;d++){const f=a[d],m=r[d];if(s.setFromPoints(m,l),f.isSeparated(s))return!1}for(let d=0;d<3;d++){const f=h[d],m=c[d];if(s.setFromPoints(m,i),f.isSeparated(s))return!1}}})();const ES=function(){const s=new I,e=new I,t=new I;return function(i,r,a){const l=i.start,c=s,h=r.start,d=e;t.subVectors(l,h),s.subVectors(i.end,i.start),e.subVectors(r.end,r.start);const f=t.dot(d),m=d.dot(c),v=d.dot(d),b=t.dot(c),x=c.dot(c)*v-m*m;let g,E;x!==0?g=(f*m-b*v)/x:g=0,E=(f+g*m)/v,a.x=g,a.y=E}}(),ku=function(){const s=new Te,e=new I,t=new I;return function(i,r,a,l){ES(i,r,s);let c=s.x,h=s.y;if(c>=0&&c<=1&&h>=0&&h<=1){i.at(c,a),r.at(h,l);return}else if(c>=0&&c<=1){h<0?r.at(0,l):r.at(1,l),i.closestPointToPoint(l,!0,a);return}else if(h>=0&&h<=1){c<0?i.at(0,a):i.at(1,a),r.closestPointToPoint(a,!0,l);return}else{let d;c<0?d=i.start:d=i.end;let f;h<0?f=r.start:f=r.end;const m=e,v=t;if(i.closestPointToPoint(f,!0,e),r.closestPointToPoint(d,!0,t),m.distanceToSquared(f)<=v.distanceToSquared(d)){a.copy(m),l.copy(f);return}else{a.copy(d),l.copy(v);return}}}}(),MS=function(){const s=new I,e=new I,t=new Qn,n=new Si;return function(r,a){const{radius:l,center:c}=r,{a:h,b:d,c:f}=a;if(n.start=h,n.end=d,n.closestPointToPoint(c,!0,s).distanceTo(c)<=l||(n.start=h,n.end=f,n.closestPointToPoint(c,!0,s).distanceTo(c)<=l)||(n.start=d,n.end=f,n.closestPointToPoint(c,!0,s).distanceTo(c)<=l))return!0;const w=a.getPlane(t);if(Math.abs(w.distanceToPoint(c))<=l){const g=w.projectPoint(c,e);if(a.containsPoint(g))return!0}return!1}}(),SS=1e-15;function Mc(s){return Math.abs(s)<SS}class qn extends gn{constructor(...e){super(...e),this.isExtendedTriangle=!0,this.satAxes=new Array(4).fill().map(()=>new I),this.satBounds=new Array(4).fill().map(()=>new ri),this.points=[this.a,this.b,this.c],this.sphere=new Yn,this.plane=new Qn,this.needsUpdate=!0}intersectsSphere(e){return MS(e,this)}update(){const e=this.a,t=this.b,n=this.c,i=this.points,r=this.satAxes,a=this.satBounds,l=r[0],c=a[0];this.getNormal(l),c.setFromPoints(l,i);const h=r[1],d=a[1];h.subVectors(e,t),d.setFromPoints(h,i);const f=r[2],m=a[2];f.subVectors(t,n),m.setFromPoints(f,i);const v=r[3],b=a[3];v.subVectors(n,e),b.setFromPoints(v,i),this.sphere.setFromPoints(this.points),this.plane.setFromNormalAndCoplanarPoint(l,e),this.needsUpdate=!1}}qn.prototype.closestPointToSegment=function(){const s=new I,e=new I,t=new Si;return function(i,r=null,a=null){const{start:l,end:c}=i,h=this.points;let d,f=1/0;for(let m=0;m<3;m++){const v=(m+1)%3;t.start.copy(h[m]),t.end.copy(h[v]),ku(t,i,s,e),d=s.distanceToSquared(e),d<f&&(f=d,r&&r.copy(s),a&&a.copy(e))}return this.closestPointToPoint(l,s),d=l.distanceToSquared(s),d<f&&(f=d,r&&r.copy(s),a&&a.copy(l)),this.closestPointToPoint(c,s),d=c.distanceToSquared(s),d<f&&(f=d,r&&r.copy(s),a&&a.copy(c)),Math.sqrt(f)}}();qn.prototype.intersectsTriangle=function(){const s=new qn,e=new Array(3),t=new Array(3),n=new ri,i=new ri,r=new I,a=new I,l=new I,c=new I,h=new I,d=new Si,f=new Si,m=new Si,v=new I;function b(w,x,g){const E=w.points;let y=0,S=-1;for(let P=0;P<3;P++){const{start:C,end:A}=d;C.copy(E[P]),A.copy(E[(P+1)%3]),d.delta(a);const D=Mc(x.distanceToPoint(C));if(Mc(x.normal.dot(a))&&D){g.copy(d),y=2;break}const B=x.intersectLine(d,v);if(!B&&D&&v.copy(C),(B||D)&&!Mc(v.distanceTo(A))){if(y<=1)(y===1?g.start:g.end).copy(v),D&&(S=y);else if(y>=2){(S===1?g.start:g.end).copy(v),y=2;break}if(y++,y===2&&S===-1)break}}return y}return function(x,g=null,E=!1){this.needsUpdate&&this.update(),x.isExtendedTriangle?x.needsUpdate&&x.update():(s.copy(x),s.update(),x=s);const y=this.plane,S=x.plane;if(Math.abs(y.normal.dot(S.normal))>1-1e-10){const P=this.satBounds,C=this.satAxes;t[0]=x.a,t[1]=x.b,t[2]=x.c;for(let B=0;B<4;B++){const M=P[B],R=C[B];if(n.setFromPoints(R,t),M.isSeparated(n))return!1}const A=x.satBounds,D=x.satAxes;e[0]=this.a,e[1]=this.b,e[2]=this.c;for(let B=0;B<4;B++){const M=A[B],R=D[B];if(n.setFromPoints(R,e),M.isSeparated(n))return!1}for(let B=0;B<4;B++){const M=C[B];for(let R=0;R<4;R++){const z=D[R];if(r.crossVectors(M,z),n.setFromPoints(r,e),i.setFromPoints(r,t),n.isSeparated(i))return!1}}return g&&(E||console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."),g.start.set(0,0,0),g.end.set(0,0,0)),!0}else{const P=b(this,S,f);if(P===1&&x.containsPoint(f.end))return g&&(g.start.copy(f.end),g.end.copy(f.end)),!0;if(P!==2)return!1;const C=b(x,y,m);if(C===1&&this.containsPoint(m.end))return g&&(g.start.copy(m.end),g.end.copy(m.end)),!0;if(C!==2)return!1;if(f.delta(l),m.delta(c),l.dot(c)<0){let X=m.start;m.start=m.end,m.end=X}const A=f.start.dot(l),D=f.end.dot(l),B=m.start.dot(l),M=m.end.dot(l),R=D<B,z=A<M;return A!==M&&B!==D&&R===z?!1:(g&&(h.subVectors(f.start,m.start),h.dot(l)>0?g.start.copy(f.start):g.start.copy(m.start),h.subVectors(f.end,m.end),h.dot(l)<0?g.end.copy(f.end):g.end.copy(m.end)),!0)}}}();qn.prototype.distanceToPoint=function(){const s=new I;return function(t){return this.closestPointToPoint(t,s),t.distanceTo(s)}}();qn.prototype.distanceToTriangle=function(){const s=new I,e=new I,t=["a","b","c"],n=new Si,i=new Si;return function(a,l=null,c=null){const h=l||c?n:null;if(this.intersectsTriangle(a,h))return(l||c)&&(l&&h.getCenter(l),c&&h.getCenter(c)),0;let d=1/0;for(let f=0;f<3;f++){let m;const v=t[f],b=a[v];this.closestPointToPoint(b,s),m=b.distanceToSquared(s),m<d&&(d=m,l&&l.copy(s),c&&c.copy(b));const w=this[v];a.closestPointToPoint(w,s),m=w.distanceToSquared(s),m<d&&(d=m,l&&l.copy(w),c&&c.copy(s))}for(let f=0;f<3;f++){const m=t[f],v=t[(f+1)%3];n.set(this[m],this[v]);for(let b=0;b<3;b++){const w=t[b],x=t[(b+1)%3];i.set(a[w],a[x]),ku(n,i,s,e);const g=s.distanceToSquared(e);g<d&&(d=g,l&&l.copy(s),c&&c.copy(e))}}return Math.sqrt(d)}}();class bn{constructor(e,t,n){this.isOrientedBox=!0,this.min=new I,this.max=new I,this.matrix=new Xe,this.invMatrix=new Xe,this.points=new Array(8).fill().map(()=>new I),this.satAxes=new Array(3).fill().map(()=>new I),this.satBounds=new Array(3).fill().map(()=>new ri),this.alignedSatBounds=new Array(3).fill().map(()=>new ri),this.needsUpdate=!1,e&&this.min.copy(e),t&&this.max.copy(t),n&&this.matrix.copy(n)}set(e,t,n){this.min.copy(e),this.max.copy(t),this.matrix.copy(n),this.needsUpdate=!0}copy(e){this.min.copy(e.min),this.max.copy(e.max),this.matrix.copy(e.matrix),this.needsUpdate=!0}}bn.prototype.update=function(){return function(){const e=this.matrix,t=this.min,n=this.max,i=this.points;for(let h=0;h<=1;h++)for(let d=0;d<=1;d++)for(let f=0;f<=1;f++){const m=1*h|2*d|4*f,v=i[m];v.x=h?n.x:t.x,v.y=d?n.y:t.y,v.z=f?n.z:t.z,v.applyMatrix4(e)}const r=this.satBounds,a=this.satAxes,l=i[0];for(let h=0;h<3;h++){const d=a[h],f=r[h],m=1<<h,v=i[m];d.subVectors(l,v),f.setFromPoints(d,i)}const c=this.alignedSatBounds;c[0].setFromPointsField(i,"x"),c[1].setFromPointsField(i,"y"),c[2].setFromPointsField(i,"z"),this.invMatrix.copy(this.matrix).invert(),this.needsUpdate=!1}}();bn.prototype.intersectsBox=function(){const s=new ri;return function(t){this.needsUpdate&&this.update();const n=t.min,i=t.max,r=this.satBounds,a=this.satAxes,l=this.alignedSatBounds;if(s.min=n.x,s.max=i.x,l[0].isSeparated(s)||(s.min=n.y,s.max=i.y,l[1].isSeparated(s))||(s.min=n.z,s.max=i.z,l[2].isSeparated(s)))return!1;for(let c=0;c<3;c++){const h=a[c],d=r[c];if(s.setFromBox(h,t),d.isSeparated(s))return!1}return!0}}();bn.prototype.intersectsTriangle=function(){const s=new qn,e=new Array(3),t=new ri,n=new ri,i=new I;return function(a){this.needsUpdate&&this.update(),a.isExtendedTriangle?a.needsUpdate&&a.update():(s.copy(a),s.update(),a=s);const l=this.satBounds,c=this.satAxes;e[0]=a.a,e[1]=a.b,e[2]=a.c;for(let m=0;m<3;m++){const v=l[m],b=c[m];if(t.setFromPoints(b,e),v.isSeparated(t))return!1}const h=a.satBounds,d=a.satAxes,f=this.points;for(let m=0;m<3;m++){const v=h[m],b=d[m];if(t.setFromPoints(b,f),v.isSeparated(t))return!1}for(let m=0;m<3;m++){const v=c[m];for(let b=0;b<4;b++){const w=d[b];if(i.crossVectors(v,w),t.setFromPoints(i,e),n.setFromPoints(i,f),t.isSeparated(n))return!1}}return!0}}();bn.prototype.closestPointToPoint=function(){return function(e,t){return this.needsUpdate&&this.update(),t.copy(e).applyMatrix4(this.invMatrix).clamp(this.min,this.max).applyMatrix4(this.matrix),t}}();bn.prototype.distanceToPoint=function(){const s=new I;return function(t){return this.closestPointToPoint(t,s),t.distanceTo(s)}}();bn.prototype.distanceToBox=function(){const s=["x","y","z"],e=new Array(12).fill().map(()=>new Si),t=new Array(12).fill().map(()=>new Si),n=new I,i=new I;return function(a,l=0,c=null,h=null){if(this.needsUpdate&&this.update(),this.intersectsBox(a))return(c||h)&&(a.getCenter(i),this.closestPointToPoint(i,n),a.closestPointToPoint(n,i),c&&c.copy(n),h&&h.copy(i)),0;const d=l*l,f=a.min,m=a.max,v=this.points;let b=1/0;for(let x=0;x<8;x++){const g=v[x];i.copy(g).clamp(f,m);const E=g.distanceToSquared(i);if(E<b&&(b=E,c&&c.copy(g),h&&h.copy(i),E<d))return Math.sqrt(E)}let w=0;for(let x=0;x<3;x++)for(let g=0;g<=1;g++)for(let E=0;E<=1;E++){const y=(x+1)%3,S=(x+2)%3,P=g<<y|E<<S,C=1<<x|g<<y|E<<S,A=v[P],D=v[C];e[w].set(A,D);const M=s[x],R=s[y],z=s[S],X=t[w],F=X.start,G=X.end;F[M]=f[M],F[R]=g?f[R]:m[R],F[z]=E?f[z]:m[R],G[M]=m[M],G[R]=g?f[R]:m[R],G[z]=E?f[z]:m[R],w++}for(let x=0;x<=1;x++)for(let g=0;g<=1;g++)for(let E=0;E<=1;E++){i.x=x?m.x:f.x,i.y=g?m.y:f.y,i.z=E?m.z:f.z,this.closestPointToPoint(i,n);const y=i.distanceToSquared(n);if(y<b&&(b=y,c&&c.copy(n),h&&h.copy(i),y<d))return Math.sqrt(y)}for(let x=0;x<12;x++){const g=e[x];for(let E=0;E<12;E++){const y=t[E];ku(g,y,n,i);const S=n.distanceToSquared(i);if(S<b&&(b=S,c&&c.copy(n),h&&h.copy(i),S<d))return Math.sqrt(S)}}return Math.sqrt(b)}}();class Vu{constructor(e){this._getNewPrimitive=e,this._primitives=[]}getPrimitive(){const e=this._primitives;return e.length===0?this._getNewPrimitive():e.pop()}releasePrimitive(e){this._primitives.push(e)}}class TS extends Vu{constructor(){super(()=>new qn)}}const Fn=new TS;class AS{constructor(){this.float32Array=null,this.uint16Array=null,this.uint32Array=null;const e=[];let t=null;this.setBuffer=n=>{t&&e.push(t),t=n,this.float32Array=new Float32Array(n),this.uint16Array=new Uint16Array(n),this.uint32Array=new Uint32Array(n)},this.clearBuffer=()=>{t=null,this.float32Array=null,this.uint16Array=null,this.uint32Array=null,e.length!==0&&this.setBuffer(e.pop())}}}const Ct=new AS;let $i,vr;const er=[],wa=new Vu(()=>new Vt);function CS(s,e,t,n,i,r){$i=wa.getPrimitive(),vr=wa.getPrimitive(),er.push($i,vr),Ct.setBuffer(s._roots[e]);const a=iu(0,s.geometry,t,n,i,r);Ct.clearBuffer(),wa.releasePrimitive($i),wa.releasePrimitive(vr),er.pop(),er.pop();const l=er.length;return l>0&&(vr=er[l-1],$i=er[l-2]),a}function iu(s,e,t,n,i=null,r=0,a=0){const{float32Array:l,uint16Array:c,uint32Array:h}=Ct;let d=s*2;if(vn(d,c)){const m=wn(s,h),v=An(d,c);return Nt(s,l,$i),n(m,v,!1,a,r+s,$i)}else{let M=function(z){const{uint16Array:X,uint32Array:F}=Ct;let G=z*2;for(;!vn(G,X);)z=Un(z),G=z*2;return wn(z,F)},R=function(z){const{uint16Array:X,uint32Array:F}=Ct;let G=z*2;for(;!vn(G,X);)z=Cn(z,F),G=z*2;return wn(z,F)+An(G,X)};const m=Un(s),v=Cn(s,h);let b=m,w=v,x,g,E,y;if(i&&(E=$i,y=vr,Nt(b,l,E),Nt(w,l,y),x=i(E),g=i(y),g<x)){b=v,w=m;const z=x;x=g,g=z,E=y}E||(E=$i,Nt(b,l,E));const S=vn(b*2,c),P=t(E,S,x,a+1,r+b);let C;if(P===Wp){const z=M(b),F=R(b)-z;C=n(z,F,!0,a+1,r+b,E)}else C=P&&iu(b,e,t,n,i,r,a+1);if(C)return!0;y=vr,Nt(w,l,y);const A=vn(w*2,c),D=t(y,A,g,a+1,r+w);let B;if(D===Wp){const z=M(w),F=R(w)-z;B=n(z,F,!0,a+1,r+w,y)}else B=D&&iu(w,e,t,n,i,r,a+1);return!!B}}const ao=new I,Sc=new I;function PS(s,e,t={},n=0,i=1/0){const r=n*n,a=i*i;let l=1/0,c=null;if(s.shapecast({boundsTraverseOrder:d=>(ao.copy(e).clamp(d.min,d.max),ao.distanceToSquared(e)),intersectsBounds:(d,f,m)=>m<l&&m<a,intersectsTriangle:(d,f)=>{d.closestPointToPoint(e,ao);const m=e.distanceToSquared(ao);return m<l&&(Sc.copy(ao),l=m,c=f),m<r}}),l===1/0)return null;const h=Math.sqrt(l);return t.point?t.point.copy(Sc):t.point=Sc.clone(),t.distance=h,t.faceIndex=c,t}const tr=new I,nr=new I,ir=new I,Ea=new Te,Ma=new Te,Sa=new Te,Kp=new I,$p=new I,Zp=new I,Ta=new I;function RS(s,e,t,n,i,r){let a;return r===xn?a=s.intersectTriangle(n,t,e,!0,i):a=s.intersectTriangle(e,t,n,r!==mn,i),a===null?null:{distance:s.origin.distanceTo(i),point:i.clone()}}function LS(s,e,t,n,i,r,a,l,c){tr.fromBufferAttribute(e,r),nr.fromBufferAttribute(e,a),ir.fromBufferAttribute(e,l);const h=RS(s,tr,nr,ir,Ta,c);if(h){n&&(Ea.fromBufferAttribute(n,r),Ma.fromBufferAttribute(n,a),Sa.fromBufferAttribute(n,l),h.uv=gn.getInterpolation(Ta,tr,nr,ir,Ea,Ma,Sa,new Te)),i&&(Ea.fromBufferAttribute(i,r),Ma.fromBufferAttribute(i,a),Sa.fromBufferAttribute(i,l),h.uv1=gn.getInterpolation(Ta,tr,nr,ir,Ea,Ma,Sa,new Te)),t&&(Kp.fromBufferAttribute(t,r),$p.fromBufferAttribute(t,a),Zp.fromBufferAttribute(t,l),h.normal=gn.getInterpolation(Ta,tr,nr,ir,Kp,$p,Zp,new I),h.normal.dot(s.direction)>0&&h.normal.multiplyScalar(-1));const d={a:r,b:a,c:l,normal:new I,materialIndex:0};gn.getNormal(tr,nr,ir,d.normal),h.face=d,h.faceIndex=r}return h}function hl(s,e,t,n,i){const r=n*3;let a=r+0,l=r+1,c=r+2;const h=s.index;s.index&&(a=h.getX(a),l=h.getX(l),c=h.getX(c));const{position:d,normal:f,uv:m,uv1:v}=s.attributes,b=LS(t,d,f,m,v,a,l,c,e);return b?(b.faceIndex=n,i&&i.push(b),b):null}function Xt(s,e,t,n){const i=s.a,r=s.b,a=s.c;let l=e,c=e+1,h=e+2;t&&(l=t.getX(l),c=t.getX(c),h=t.getX(h)),i.x=n.getX(l),i.y=n.getY(l),i.z=n.getZ(l),r.x=n.getX(c),r.y=n.getY(c),r.z=n.getZ(c),a.x=n.getX(h),a.y=n.getY(h),a.z=n.getZ(h)}function IS(s,e,t,n,i,r){const{geometry:a,_indirectBuffer:l}=s;for(let c=n,h=n+i;c<h;c++)hl(a,e,t,c,r)}function DS(s,e,t,n,i){const{geometry:r,_indirectBuffer:a}=s;let l=1/0,c=null;for(let h=n,d=n+i;h<d;h++){let f;f=hl(r,e,t,h),f&&f.distance<l&&(c=f,l=f.distance)}return c}function NS(s,e,t,n,i,r,a){const{geometry:l}=t,{index:c}=l,h=l.attributes.position;for(let d=s,f=e+s;d<f;d++){let m;if(m=d,Xt(a,m*3,c,h),a.needsUpdate=!0,n(a,m,i,r))return!0}return!1}function US(s,e=null){e&&Array.isArray(e)&&(e=new Set(e));const t=s.geometry,n=t.index?t.index.array:null,i=t.attributes.position;let r,a,l,c,h=0;const d=s._roots;for(let m=0,v=d.length;m<v;m++)r=d[m],a=new Uint32Array(r),l=new Uint16Array(r),c=new Float32Array(r),f(0,h),h+=r.byteLength;function f(m,v,b=!1){const w=m*2;if(l[w+15]===ul){const g=a[m+6],E=l[w+14];let y=1/0,S=1/0,P=1/0,C=-1/0,A=-1/0,D=-1/0;for(let B=3*g,M=3*(g+E);B<M;B++){let R=n[B];const z=i.getX(R),X=i.getY(R),F=i.getZ(R);z<y&&(y=z),z>C&&(C=z),X<S&&(S=X),X>A&&(A=X),F<P&&(P=F),F>D&&(D=F)}return c[m+0]!==y||c[m+1]!==S||c[m+2]!==P||c[m+3]!==C||c[m+4]!==A||c[m+5]!==D?(c[m+0]=y,c[m+1]=S,c[m+2]=P,c[m+3]=C,c[m+4]=A,c[m+5]=D,!0):!1}else{const g=m+8,E=a[m+6],y=g+v,S=E+v;let P=b,C=!1,A=!1;e?P||(C=e.has(y),A=e.has(S),P=!C&&!A):(C=!0,A=!0);const D=P||C,B=P||A;let M=!1;D&&(M=f(g,v,P));let R=!1;B&&(R=f(E,v,P));const z=M||R;if(z)for(let X=0;X<3;X++){const F=g+X,G=E+X,H=c[F],W=c[F+3],ee=c[G],Z=c[G+3];c[m+X]=H<ee?H:ee,c[m+X+3]=W>Z?W:Z}return z}}}const Qp=new Vt;function Ji(s,e,t,n){return Nt(s,e,Qp),t.intersectBox(Qp,n)}function FS(s,e,t,n,i,r){const{geometry:a,_indirectBuffer:l}=s;for(let c=n,h=n+i;c<h;c++){let d=l?l[c]:c;hl(a,e,t,d,r)}}function OS(s,e,t,n,i){const{geometry:r,_indirectBuffer:a}=s;let l=1/0,c=null;for(let h=n,d=n+i;h<d;h++){let f;f=hl(r,e,t,a?a[h]:h),f&&f.distance<l&&(c=f,l=f.distance)}return c}function BS(s,e,t,n,i,r,a){const{geometry:l}=t,{index:c}=l,h=l.attributes.position;for(let d=s,f=e+s;d<f;d++){let m;if(m=t.resolveTriangleIndex(d),Xt(a,m*3,c,h),a.needsUpdate=!0,n(a,m,i,r))return!0}return!1}const Jp=new I;function kS(s,e,t,n,i){Ct.setBuffer(s._roots[e]),su(0,s,t,n,i),Ct.clearBuffer()}function su(s,e,t,n,i){const{float32Array:r,uint16Array:a,uint32Array:l}=Ct,c=s*2;if(vn(c,a)){const d=wn(s,l),f=An(c,a);IS(e,t,n,d,f,i)}else{const d=Un(s);Ji(d,r,n,Jp)&&su(d,e,t,n,i);const f=Cn(s,l);Ji(f,r,n,Jp)&&su(f,e,t,n,i)}}const ef=new I,VS=["x","y","z"];function zS(s,e,t,n){Ct.setBuffer(s._roots[e]);const i=ru(0,s,t,n);return Ct.clearBuffer(),i}function ru(s,e,t,n){const{float32Array:i,uint16Array:r,uint32Array:a}=Ct;let l=s*2;if(vn(l,r)){const h=wn(s,a),d=An(l,r);return DS(e,t,n,h,d)}else{const h=Bu(s,a),d=VS[h],m=n.direction[d]>=0;let v,b;m?(v=Un(s),b=Cn(s,a)):(v=Cn(s,a),b=Un(s));const x=Ji(v,i,n,ef)?ru(v,e,t,n):null;if(x){const y=x.point[d];if(m?y<=i[b+h]:y>=i[b+h+3])return x}const E=Ji(b,i,n,ef)?ru(b,e,t,n):null;return x&&E?x.distance<=E.distance?x:E:x||E||null}}const Aa=new Vt,sr=new qn,rr=new qn,lo=new Xe,tf=new bn,Ca=new bn;function HS(s,e,t,n){Ct.setBuffer(s._roots[e]);const i=ou(0,s,t,n);return Ct.clearBuffer(),i}function ou(s,e,t,n,i=null){const{float32Array:r,uint16Array:a,uint32Array:l}=Ct;let c=s*2;if(i===null&&(t.boundingBox||t.computeBoundingBox(),tf.set(t.boundingBox.min,t.boundingBox.max,n),i=tf),vn(c,a)){const d=e.geometry,f=d.index,m=d.attributes.position,v=t.index,b=t.attributes.position,w=wn(s,l),x=An(c,a);if(lo.copy(n).invert(),t.boundsTree)return Nt(s,r,Ca),Ca.matrix.copy(lo),Ca.needsUpdate=!0,t.boundsTree.shapecast({intersectsBounds:E=>Ca.intersectsBox(E),intersectsTriangle:E=>{E.a.applyMatrix4(n),E.b.applyMatrix4(n),E.c.applyMatrix4(n),E.needsUpdate=!0;for(let y=w*3,S=(x+w)*3;y<S;y+=3)if(Xt(rr,y,f,m),rr.needsUpdate=!0,E.intersectsTriangle(rr))return!0;return!1}});for(let g=w*3,E=(x+w)*3;g<E;g+=3){Xt(sr,g,f,m),sr.a.applyMatrix4(lo),sr.b.applyMatrix4(lo),sr.c.applyMatrix4(lo),sr.needsUpdate=!0;for(let y=0,S=v.count;y<S;y+=3)if(Xt(rr,y,v,b),rr.needsUpdate=!0,sr.intersectsTriangle(rr))return!0}}else{const d=s+8,f=l[s+6];return Nt(d,r,Aa),!!(i.intersectsBox(Aa)&&ou(d,e,t,n,i)||(Nt(f,r,Aa),i.intersectsBox(Aa)&&ou(f,e,t,n,i)))}}const Pa=new Xe,Tc=new bn,co=new bn,GS=new I,WS=new I,XS=new I,jS=new I;function qS(s,e,t,n={},i={},r=0,a=1/0){e.boundingBox||e.computeBoundingBox(),Tc.set(e.boundingBox.min,e.boundingBox.max,t),Tc.needsUpdate=!0;const l=s.geometry,c=l.attributes.position,h=l.index,d=e.attributes.position,f=e.index,m=Fn.getPrimitive(),v=Fn.getPrimitive();let b=GS,w=WS,x=null,g=null;i&&(x=XS,g=jS);let E=1/0,y=null,S=null;return Pa.copy(t).invert(),co.matrix.copy(Pa),s.shapecast({boundsTraverseOrder:P=>Tc.distanceToBox(P),intersectsBounds:(P,C,A)=>A<E&&A<a?(C&&(co.min.copy(P.min),co.max.copy(P.max),co.needsUpdate=!0),!0):!1,intersectsRange:(P,C)=>{if(e.boundsTree)return e.boundsTree.shapecast({boundsTraverseOrder:D=>co.distanceToBox(D),intersectsBounds:(D,B,M)=>M<E&&M<a,intersectsRange:(D,B)=>{for(let M=D,R=D+B;M<R;M++){Xt(v,3*M,f,d),v.a.applyMatrix4(t),v.b.applyMatrix4(t),v.c.applyMatrix4(t),v.needsUpdate=!0;for(let z=P,X=P+C;z<X;z++){Xt(m,3*z,h,c),m.needsUpdate=!0;const F=m.distanceToTriangle(v,b,x);if(F<E&&(w.copy(b),g&&g.copy(x),E=F,y=z,S=M),F<r)return!0}}}});{const A=Fr(e);for(let D=0,B=A;D<B;D++){Xt(v,3*D,f,d),v.a.applyMatrix4(t),v.b.applyMatrix4(t),v.c.applyMatrix4(t),v.needsUpdate=!0;for(let M=P,R=P+C;M<R;M++){Xt(m,3*M,h,c),m.needsUpdate=!0;const z=m.distanceToTriangle(v,b,x);if(z<E&&(w.copy(b),g&&g.copy(x),E=z,y=M,S=D),z<r)return!0}}}}}),Fn.releasePrimitive(m),Fn.releasePrimitive(v),E===1/0?null:(n.point?n.point.copy(w):n.point=w.clone(),n.distance=E,n.faceIndex=y,i&&(i.point?i.point.copy(g):i.point=g.clone(),i.point.applyMatrix4(Pa),w.applyMatrix4(Pa),i.distance=w.sub(i.point).length(),i.faceIndex=S),n)}function YS(s,e=null){e&&Array.isArray(e)&&(e=new Set(e));const t=s.geometry,n=t.index?t.index.array:null,i=t.attributes.position;let r,a,l,c,h=0;const d=s._roots;for(let m=0,v=d.length;m<v;m++)r=d[m],a=new Uint32Array(r),l=new Uint16Array(r),c=new Float32Array(r),f(0,h),h+=r.byteLength;function f(m,v,b=!1){const w=m*2;if(l[w+15]===ul){const g=a[m+6],E=l[w+14];let y=1/0,S=1/0,P=1/0,C=-1/0,A=-1/0,D=-1/0;for(let B=g,M=g+E;B<M;B++){const R=3*s.resolveTriangleIndex(B);for(let z=0;z<3;z++){let X=R+z;X=n?n[X]:X;const F=i.getX(X),G=i.getY(X),H=i.getZ(X);F<y&&(y=F),F>C&&(C=F),G<S&&(S=G),G>A&&(A=G),H<P&&(P=H),H>D&&(D=H)}}return c[m+0]!==y||c[m+1]!==S||c[m+2]!==P||c[m+3]!==C||c[m+4]!==A||c[m+5]!==D?(c[m+0]=y,c[m+1]=S,c[m+2]=P,c[m+3]=C,c[m+4]=A,c[m+5]=D,!0):!1}else{const g=m+8,E=a[m+6],y=g+v,S=E+v;let P=b,C=!1,A=!1;e?P||(C=e.has(y),A=e.has(S),P=!C&&!A):(C=!0,A=!0);const D=P||C,B=P||A;let M=!1;D&&(M=f(g,v,P));let R=!1;B&&(R=f(E,v,P));const z=M||R;if(z)for(let X=0;X<3;X++){const F=g+X,G=E+X,H=c[F],W=c[F+3],ee=c[G],Z=c[G+3];c[m+X]=H<ee?H:ee,c[m+X+3]=W>Z?W:Z}return z}}}const nf=new I;function KS(s,e,t,n,i){Ct.setBuffer(s._roots[e]),au(0,s,t,n,i),Ct.clearBuffer()}function au(s,e,t,n,i){const{float32Array:r,uint16Array:a,uint32Array:l}=Ct,c=s*2;if(vn(c,a)){const d=wn(s,l),f=An(c,a);FS(e,t,n,d,f,i)}else{const d=Un(s);Ji(d,r,n,nf)&&au(d,e,t,n,i);const f=Cn(s,l);Ji(f,r,n,nf)&&au(f,e,t,n,i)}}const sf=new I,$S=["x","y","z"];function ZS(s,e,t,n){Ct.setBuffer(s._roots[e]);const i=lu(0,s,t,n);return Ct.clearBuffer(),i}function lu(s,e,t,n){const{float32Array:i,uint16Array:r,uint32Array:a}=Ct;let l=s*2;if(vn(l,r)){const h=wn(s,a),d=An(l,r);return OS(e,t,n,h,d)}else{const h=Bu(s,a),d=$S[h],m=n.direction[d]>=0;let v,b;m?(v=Un(s),b=Cn(s,a)):(v=Cn(s,a),b=Un(s));const x=Ji(v,i,n,sf)?lu(v,e,t,n):null;if(x){const y=x.point[d];if(m?y<=i[b+h]:y>=i[b+h+3])return x}const E=Ji(b,i,n,sf)?lu(b,e,t,n):null;return x&&E?x.distance<=E.distance?x:E:x||E||null}}const Ra=new Vt,or=new qn,ar=new qn,uo=new Xe,rf=new bn,La=new bn;function QS(s,e,t,n){Ct.setBuffer(s._roots[e]);const i=cu(0,s,t,n);return Ct.clearBuffer(),i}function cu(s,e,t,n,i=null){const{float32Array:r,uint16Array:a,uint32Array:l}=Ct;let c=s*2;if(i===null&&(t.boundingBox||t.computeBoundingBox(),rf.set(t.boundingBox.min,t.boundingBox.max,n),i=rf),vn(c,a)){const d=e.geometry,f=d.index,m=d.attributes.position,v=t.index,b=t.attributes.position,w=wn(s,l),x=An(c,a);if(uo.copy(n).invert(),t.boundsTree)return Nt(s,r,La),La.matrix.copy(uo),La.needsUpdate=!0,t.boundsTree.shapecast({intersectsBounds:E=>La.intersectsBox(E),intersectsTriangle:E=>{E.a.applyMatrix4(n),E.b.applyMatrix4(n),E.c.applyMatrix4(n),E.needsUpdate=!0;for(let y=w,S=x+w;y<S;y++)if(Xt(ar,3*e.resolveTriangleIndex(y),f,m),ar.needsUpdate=!0,E.intersectsTriangle(ar))return!0;return!1}});for(let g=w,E=x+w;g<E;g++){const y=e.resolveTriangleIndex(g);Xt(or,3*y,f,m),or.a.applyMatrix4(uo),or.b.applyMatrix4(uo),or.c.applyMatrix4(uo),or.needsUpdate=!0;for(let S=0,P=v.count;S<P;S+=3)if(Xt(ar,S,v,b),ar.needsUpdate=!0,or.intersectsTriangle(ar))return!0}}else{const d=s+8,f=l[s+6];return Nt(d,r,Ra),!!(i.intersectsBox(Ra)&&cu(d,e,t,n,i)||(Nt(f,r,Ra),i.intersectsBox(Ra)&&cu(f,e,t,n,i)))}}const Ia=new Xe,Ac=new bn,ho=new bn,JS=new I,eT=new I,tT=new I,nT=new I;function iT(s,e,t,n={},i={},r=0,a=1/0){e.boundingBox||e.computeBoundingBox(),Ac.set(e.boundingBox.min,e.boundingBox.max,t),Ac.needsUpdate=!0;const l=s.geometry,c=l.attributes.position,h=l.index,d=e.attributes.position,f=e.index,m=Fn.getPrimitive(),v=Fn.getPrimitive();let b=JS,w=eT,x=null,g=null;i&&(x=tT,g=nT);let E=1/0,y=null,S=null;return Ia.copy(t).invert(),ho.matrix.copy(Ia),s.shapecast({boundsTraverseOrder:P=>Ac.distanceToBox(P),intersectsBounds:(P,C,A)=>A<E&&A<a?(C&&(ho.min.copy(P.min),ho.max.copy(P.max),ho.needsUpdate=!0),!0):!1,intersectsRange:(P,C)=>{if(e.boundsTree){const A=e.boundsTree;return A.shapecast({boundsTraverseOrder:D=>ho.distanceToBox(D),intersectsBounds:(D,B,M)=>M<E&&M<a,intersectsRange:(D,B)=>{for(let M=D,R=D+B;M<R;M++){const z=A.resolveTriangleIndex(M);Xt(v,3*z,f,d),v.a.applyMatrix4(t),v.b.applyMatrix4(t),v.c.applyMatrix4(t),v.needsUpdate=!0;for(let X=P,F=P+C;X<F;X++){const G=s.resolveTriangleIndex(X);Xt(m,3*G,h,c),m.needsUpdate=!0;const H=m.distanceToTriangle(v,b,x);if(H<E&&(w.copy(b),g&&g.copy(x),E=H,y=X,S=M),H<r)return!0}}}})}else{const A=Fr(e);for(let D=0,B=A;D<B;D++){Xt(v,3*D,f,d),v.a.applyMatrix4(t),v.b.applyMatrix4(t),v.c.applyMatrix4(t),v.needsUpdate=!0;for(let M=P,R=P+C;M<R;M++){const z=s.resolveTriangleIndex(M);Xt(m,3*z,h,c),m.needsUpdate=!0;const X=m.distanceToTriangle(v,b,x);if(X<E&&(w.copy(b),g&&g.copy(x),E=X,y=M,S=D),X<r)return!0}}}}}),Fn.releasePrimitive(m),Fn.releasePrimitive(v),E===1/0?null:(n.point?n.point.copy(w):n.point=w.clone(),n.distance=E,n.faceIndex=y,i&&(i.point?i.point.copy(g):i.point=g.clone(),i.point.applyMatrix4(Ia),w.applyMatrix4(Ia),i.distance=w.sub(i.point).length(),i.faceIndex=S),n)}function sT(){return typeof SharedArrayBuffer!="undefined"}const To=new Ct.constructor,Ja=new Ct.constructor,qi=new Vu(()=>new Vt),lr=new Vt,cr=new Vt,Cc=new Vt,Pc=new Vt;let Rc=!1;function rT(s,e,t,n){if(Rc)throw new Error("MeshBVH: Recursive calls to bvhcast not supported.");Rc=!0;const i=s._roots,r=e._roots;let a,l=0,c=0;const h=new Xe().copy(t).invert();for(let d=0,f=i.length;d<f;d++){To.setBuffer(i[d]),c=0;const m=qi.getPrimitive();Nt(0,To.float32Array,m),m.applyMatrix4(h);for(let v=0,b=r.length;v<b&&(Ja.setBuffer(r[d]),a=Hn(0,0,t,h,n,l,c,0,0,m),Ja.clearBuffer(),c+=r[v].length,!a);v++);if(qi.releasePrimitive(m),To.clearBuffer(),l+=i[d].length,a)break}return Rc=!1,a}function Hn(s,e,t,n,i,r=0,a=0,l=0,c=0,h=null,d=!1){let f,m;d?(f=Ja,m=To):(f=To,m=Ja);const v=f.float32Array,b=f.uint32Array,w=f.uint16Array,x=m.float32Array,g=m.uint32Array,E=m.uint16Array,y=s*2,S=e*2,P=vn(y,w),C=vn(S,E);let A=!1;if(C&&P)d?A=i(wn(e,g),An(e*2,E),wn(s,b),An(s*2,w),c,a+e,l,r+s):A=i(wn(s,b),An(s*2,w),wn(e,g),An(e*2,E),l,r+s,c,a+e);else if(C){const D=qi.getPrimitive();Nt(e,x,D),D.applyMatrix4(t);const B=Un(s),M=Cn(s,b);Nt(B,v,lr),Nt(M,v,cr);const R=D.intersectsBox(lr),z=D.intersectsBox(cr);A=R&&Hn(e,B,n,t,i,a,r,c,l+1,D,!d)||z&&Hn(e,M,n,t,i,a,r,c,l+1,D,!d),qi.releasePrimitive(D)}else{const D=Un(e),B=Cn(e,g);Nt(D,x,Cc),Nt(B,x,Pc);const M=h.intersectsBox(Cc),R=h.intersectsBox(Pc);if(M&&R)A=Hn(s,D,t,n,i,r,a,l,c+1,h,d)||Hn(s,B,t,n,i,r,a,l,c+1,h,d);else if(M)if(P)A=Hn(s,D,t,n,i,r,a,l,c+1,h,d);else{const z=qi.getPrimitive();z.copy(Cc).applyMatrix4(t);const X=Un(s),F=Cn(s,b);Nt(X,v,lr),Nt(F,v,cr);const G=z.intersectsBox(lr),H=z.intersectsBox(cr);A=G&&Hn(D,X,n,t,i,a,r,c,l+1,z,!d)||H&&Hn(D,F,n,t,i,a,r,c,l+1,z,!d),qi.releasePrimitive(z)}else if(R)if(P)A=Hn(s,B,t,n,i,r,a,l,c+1,h,d);else{const z=qi.getPrimitive();z.copy(Pc).applyMatrix4(t);const X=Un(s),F=Cn(s,b);Nt(X,v,lr),Nt(F,v,cr);const G=z.intersectsBox(lr),H=z.intersectsBox(cr);A=G&&Hn(B,X,n,t,i,a,r,c,l+1,z,!d)||H&&Hn(B,F,n,t,i,a,r,c,l+1,z,!d),qi.releasePrimitive(z)}}return A}const Da=new bn,of=new Vt,oT={strategy:Pm,maxDepth:40,maxLeafTris:10,useSharedArrayBuffer:!1,setBoundingBox:!0,onProgress:null,indirect:!1,verbose:!0};class zu{static serialize(e,t={}){t={cloneBuffers:!0,...t};const n=e.geometry,i=e._roots,r=e._indirectBuffer,a=n.getIndex();let l;return t.cloneBuffers?l={roots:i.map(c=>c.slice()),index:a.array.slice(),indirectBuffer:r?r.slice():null}:l={roots:i,index:a.array,indirectBuffer:r},l}static deserialize(e,t,n={}){n={setIndex:!0,indirect:Boolean(e.indirectBuffer),...n};const{index:i,roots:r,indirectBuffer:a}=e,l=new zu(t,{...n,[yc]:!0});if(l._roots=r,l._indirectBuffer=a||null,n.setIndex){const c=t.getIndex();if(c===null){const h=new At(e.index,1,!1);t.setIndex(h)}else c.array!==i&&(c.array.set(i),c.needsUpdate=!0)}return l}get indirect(){return!!this._indirectBuffer}constructor(e,t={}){if(e.isBufferGeometry){if(e.index&&e.index.isInterleavedBufferAttribute)throw new Error("MeshBVH: InterleavedBufferAttribute is not supported for the index attribute.")}else throw new Error("MeshBVH: Only BufferGeometries are supported.");if(t=Object.assign({...oT,[yc]:!1},t),t.useSharedArrayBuffer&&!sT())throw new Error("MeshBVH: SharedArrayBuffer is not available.");this.geometry=e,this._roots=null,this._indirectBuffer=null,t[yc]||(wS(this,t),!e.boundingBox&&t.setBoundingBox&&(e.boundingBox=this.getBoundingBox(new Vt)));const{_indirectBuffer:n}=this;this.resolveTriangleIndex=t.indirect?i=>n[i]:i=>i}refit(e=null){return(this.indirect?YS:US)(this,e)}traverse(e,t=0){const n=this._roots[t],i=new Uint32Array(n),r=new Uint16Array(n);a(0);function a(l,c=0){const h=l*2,d=r[h+15]===ul;if(d){const f=i[l+6],m=r[h+14];e(c,d,new Float32Array(n,l*4,6),f,m)}else{const f=l+Qi/4,m=i[l+6],v=i[l+7];e(c,d,new Float32Array(n,l*4,6),v)||(a(f,c+1),a(m,c+1))}}}raycast(e,t=jn){const n=this._roots,i=this.geometry,r=[],a=t.isMaterial,l=Array.isArray(t),c=i.groups,h=a?t.side:t,d=this.indirect?KS:kS;for(let f=0,m=n.length;f<m;f++){const v=l?t[c[f].materialIndex].side:h,b=r.length;if(d(this,f,v,e,r),l){const w=c[f].materialIndex;for(let x=b,g=r.length;x<g;x++)r[x].face.materialIndex=w}}return r}raycastFirst(e,t=jn){const n=this._roots,i=this.geometry,r=t.isMaterial,a=Array.isArray(t);let l=null;const c=i.groups,h=r?t.side:t,d=this.indirect?ZS:zS;for(let f=0,m=n.length;f<m;f++){const v=a?t[c[f].materialIndex].side:h,b=d(this,f,v,e);b!=null&&(l==null||b.distance<l.distance)&&(l=b,a&&(b.face.materialIndex=c[f].materialIndex))}return l}intersectsGeometry(e,t){let n=!1;const i=this._roots,r=this.indirect?QS:HS;for(let a=0,l=i.length;a<l&&(n=r(this,a,e,t),!n);a++);return n}shapecast(e){const t=Fn.getPrimitive(),n=this.indirect?BS:NS;let{boundsTraverseOrder:i,intersectsBounds:r,intersectsRange:a,intersectsTriangle:l}=e;if(a&&l){const f=a;a=(m,v,b,w,x)=>f(m,v,b,w,x)?!0:n(m,v,this,l,b,w,t)}else a||(l?a=(f,m,v,b)=>n(f,m,this,l,v,b,t):a=(f,m,v)=>v);let c=!1,h=0;const d=this._roots;for(let f=0,m=d.length;f<m;f++){const v=d[f];if(c=CS(this,f,r,a,i,h),c)break;h+=v.byteLength}return Fn.releasePrimitive(t),c}bvhcast(e,t,n){let{intersectsRanges:i,intersectsTriangles:r}=n;const a=Fn.getPrimitive(),l=this.geometry.index,c=this.geometry.attributes.position,h=this.indirect?b=>{const w=this.resolveTriangleIndex(b);Xt(a,w*3,l,c)}:b=>{Xt(a,b*3,l,c)},d=Fn.getPrimitive(),f=e.geometry.index,m=e.geometry.attributes.position,v=e.indirect?b=>{const w=e.resolveTriangleIndex(b);Xt(d,w*3,f,m)}:b=>{Xt(d,b*3,f,m)};if(r){const b=(w,x,g,E,y,S,P,C)=>{for(let A=g,D=g+E;A<D;A++){v(A),d.a.applyMatrix4(t),d.b.applyMatrix4(t),d.c.applyMatrix4(t),d.needsUpdate=!0;for(let B=w,M=w+x;B<M;B++)if(h(B),a.needsUpdate=!0,r(a,d,B,A,y,S,P,C))return!0}return!1};if(i){const w=i;i=function(x,g,E,y,S,P,C,A){return w(x,g,E,y,S,P,C,A)?!0:b(x,g,E,y,S,P,C,A)}}else i=b}return rT(this,e,t,i)}intersectsBox(e,t){return Da.set(e.min,e.max,t),Da.needsUpdate=!0,this.shapecast({intersectsBounds:n=>Da.intersectsBox(n),intersectsTriangle:n=>Da.intersectsTriangle(n)})}intersectsSphere(e){return this.shapecast({intersectsBounds:t=>e.intersectsBox(t),intersectsTriangle:t=>t.intersectsSphere(e)})}closestPointToGeometry(e,t,n={},i={},r=0,a=1/0){return(this.indirect?iT:qS)(this,e,t,n,i,r,a)}closestPointToPoint(e,t={},n=0,i=1/0){return PS(this,e,t,n,i)}getBoundingBox(e){return e.makeEmpty(),this._roots.forEach(n=>{Nt(0,new Float32Array(n),of),e.union(of)}),e}}function aT(s){switch(s){case 1:return"R";case 2:return"RG";case 3:return"RGBA";case 4:return"RGBA"}throw new Error}function lT(s){switch(s){case 1:return $f;case 2:return Zf;case 3:return Wt;case 4:return Wt}}function af(s){switch(s){case 1:return Eu;case 2:return sl;case 3:return Co;case 4:return Co}}class Fm extends Cr{constructor(){super(),this.minFilter=dt,this.magFilter=dt,this.generateMipmaps=!1,this.overrideItemSize=null,this._forcedType=null}updateFrom(e){const t=this.overrideItemSize,n=e.itemSize,i=e.count;if(t!==null){if(n*i%t!==0)throw new Error("VertexAttributeTexture: overrideItemSize must divide evenly into buffer length.");e.itemSize=t,e.count=i*n/t}const r=e.itemSize,a=e.count,l=e.normalized,c=e.array.constructor,h=c.BYTES_PER_ELEMENT;let d=this._forcedType,f=r;if(d===null)switch(c){case Float32Array:d=_t;break;case Uint8Array:case Uint16Array:case Uint32Array:d=Tn;break;case Int8Array:case Int16Array:case Int32Array:d=wo;break}let m,v,b,w,x=aT(r);switch(d){case _t:b=1,v=lT(r),l&&h===1?(w=c,x+="8",c===Uint8Array?m=ti:(m=jc,x+="_SNORM")):(w=Float32Array,x+="32F",m=_t);break;case wo:x+=h*8+"I",b=l?Math.pow(2,c.BYTES_PER_ELEMENT*8-1):1,v=af(r),h===1?(w=Int8Array,m=jc):h===2?(w=Int16Array,m=qf):(w=Int32Array,m=wo);break;case Tn:x+=h*8+"UI",b=l?Math.pow(2,c.BYTES_PER_ELEMENT*8-1):1,v=af(r),h===1?(w=Uint8Array,m=ti):h===2?(w=Uint16Array,m=il):(w=Uint32Array,m=Tn);break}f===3&&(v===Wt||v===Co)&&(f=4);const g=Math.ceil(Math.sqrt(a))||1,E=f*g*g,y=new w(E),S=e.normalized;e.normalized=!1;for(let P=0;P<a;P++){const C=f*P;y[C]=e.getX(P)/b,r>=2&&(y[C+1]=e.getY(P)/b),r>=3&&(y[C+2]=e.getZ(P)/b,f===4&&(y[C+3]=1)),r>=4&&(y[C+3]=e.getW(P)/b)}e.normalized=S,this.internalFormat=x,this.format=v,this.type=m,this.image.width=g,this.image.height=g,this.image.data=y,this.needsUpdate=!0,this.dispose(),e.itemSize=n,e.count=i}}class cT extends Fm{constructor(){super(),this._forcedType=Tn}}class uT extends Fm{constructor(){super(),this._forcedType=_t}}class hT{constructor(){this.index=new cT,this.position=new uT,this.bvhBounds=new Cr,this.bvhContents=new Cr,this._cachedIndexAttr=null,this.index.overrideItemSize=3}updateFrom(e){const{geometry:t}=e;if(pT(e,this.bvhBounds,this.bvhContents),this.position.updateFrom(t.attributes.position),e.indirect){const n=e._indirectBuffer;if(this._cachedIndexAttr===null||this._cachedIndexAttr.count!==n.length)if(t.index)this._cachedIndexAttr=t.index.clone();else{const i=Lm(Rm(t));this._cachedIndexAttr=new At(i,1,!1)}dT(t,n,this._cachedIndexAttr),this.index.updateFrom(this._cachedIndexAttr)}else this.index.updateFrom(t.index)}dispose(){const{index:e,position:t,bvhBounds:n,bvhContents:i}=this;e&&e.dispose(),t&&t.dispose(),n&&n.dispose(),i&&i.dispose()}}function dT(s,e,t){const n=t.array,i=s.index?s.index.array:null;for(let r=0,a=e.length;r<a;r++){const l=3*r,c=3*e[r];for(let h=0;h<3;h++)n[l+h]=i?i[c+h]:c+h}}function pT(s,e,t){const n=s._roots;if(n.length!==1)throw new Error("MeshBVHUniformStruct: Multi-root BVHs not supported.");const i=n[0],r=new Uint16Array(i),a=new Uint32Array(i),l=new Float32Array(i),c=i.byteLength/Qi,h=2*Math.ceil(Math.sqrt(c/2)),d=new Float32Array(4*h*h),f=Math.ceil(Math.sqrt(c)),m=new Uint32Array(2*f*f);for(let v=0;v<c;v++){const b=v*Qi/4,w=b*2,x=b;for(let g=0;g<3;g++)d[8*v+0+g]=l[x+0+g],d[8*v+4+g]=l[x+3+g];if(vn(w,r)){const g=An(w,r),E=wn(b,a),y=4294901760|g;m[v*2+0]=y,m[v*2+1]=E}else{const g=4*Cn(b,a)/Qi,E=Bu(b,a);m[v*2+0]=E,m[v*2+1]=g}}e.image.data=d,e.image.width=h,e.image.height=h,e.format=Wt,e.type=_t,e.internalFormat="RGBA32F",e.minFilter=dt,e.magFilter=dt,e.generateMipmaps=!1,e.needsUpdate=!0,e.dispose(),t.image.data=m,t.image.width=f,t.image.height=f,t.format=sl,t.type=Tn,t.internalFormat="RG32UI",t.minFilter=dt,t.magFilter=dt,t.generateMipmaps=!1,t.needsUpdate=!0,t.dispose()}const fT=`

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
`,mT=`

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
`,gT=`
struct BVH {

	usampler2D index;
	sampler2D position;

	sampler2D bvhBounds;
	usampler2D bvhContents;

};
`,vT=gT,_T=`
	${fT}
	${mT}
`,lf={type:"change"},Lc={type:"start"},cf={type:"end"},Na=new Lr,uf=new Qn,xT=Math.cos(70*im.DEG2RAD);class bT extends Ts{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Us.ROTATE,MIDDLE:Us.DOLLY,RIGHT:Us.PAN},this.touches={ONE:Fs.ROTATE,TWO:Fs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return l.phi},this.getAzimuthalAngle=function(){return l.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(k){k.addEventListener("keydown",Oe),this._domElementKeyEvents=k},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Oe),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(lf),n.update(),r=i.NONE},this.update=function(){const k=new I,de=new Gt().setFromUnitVectors(e.up,new I(0,1,0)),_e=de.clone().invert(),Re=new I,O=new Gt,re=new I,le=2*Math.PI;return function(Ue=null){const nt=n.object.position;k.copy(nt).sub(n.target),k.applyQuaternion(de),l.setFromVector3(k),n.autoRotate&&r===i.NONE&&z(M(Ue)),n.enableDamping?(l.theta+=c.theta*n.dampingFactor,l.phi+=c.phi*n.dampingFactor):(l.theta+=c.theta,l.phi+=c.phi);let tt=n.minAzimuthAngle,ct=n.maxAzimuthAngle;isFinite(tt)&&isFinite(ct)&&(tt<-Math.PI?tt+=le:tt>Math.PI&&(tt-=le),ct<-Math.PI?ct+=le:ct>Math.PI&&(ct-=le),tt<=ct?l.theta=Math.max(tt,Math.min(ct,l.theta)):l.theta=l.theta>(tt+ct)/2?Math.max(tt,l.theta):Math.min(ct,l.theta)),l.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,l.phi)),l.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(d,n.dampingFactor):n.target.add(d),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&C||n.object.isOrthographicCamera?l.radius=se(l.radius):l.radius=se(l.radius*h),k.setFromSpherical(l),k.applyQuaternion(_e),nt.copy(n.target).add(k),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,d.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),d.set(0,0,0));let Bt=!1;if(n.zoomToCursor&&C){let ot=null;if(n.object.isPerspectiveCamera){const Dt=k.length();ot=se(Dt*h);const nn=Dt-ot;n.object.position.addScaledVector(S,nn),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const Dt=new I(P.x,P.y,0);Dt.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/h)),n.object.updateProjectionMatrix(),Bt=!0;const nn=new I(P.x,P.y,0);nn.unproject(n.object),n.object.position.sub(nn).add(Dt),n.object.updateMatrixWorld(),ot=k.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;ot!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(ot).add(n.object.position):(Na.origin.copy(n.object.position),Na.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Na.direction))<xT?e.lookAt(n.target):(uf.setFromNormalAndCoplanarPoint(n.object.up,n.target),Na.intersectPlane(uf,n.target))))}else n.object.isOrthographicCamera&&(Bt=h!==1,Bt&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/h)),n.object.updateProjectionMatrix()));return h=1,C=!1,Bt||Re.distanceToSquared(n.object.position)>a||8*(1-O.dot(n.object.quaternion))>a||re.distanceToSquared(n.target)>0?(n.dispatchEvent(lf),Re.copy(n.object.position),O.copy(n.object.quaternion),re.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",st),n.domElement.removeEventListener("pointerdown",U),n.domElement.removeEventListener("pointercancel",$),n.domElement.removeEventListener("wheel",ce),n.domElement.removeEventListener("pointermove",L),n.domElement.removeEventListener("pointerup",$),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Oe),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=i.NONE;const a=1e-6,l=new Hp,c=new Hp;let h=1;const d=new I,f=new Te,m=new Te,v=new Te,b=new Te,w=new Te,x=new Te,g=new Te,E=new Te,y=new Te,S=new I,P=new Te;let C=!1;const A=[],D={};let B=!1;function M(k){return k!==null?2*Math.PI/60*n.autoRotateSpeed*k:2*Math.PI/60/60*n.autoRotateSpeed}function R(k){const de=Math.abs(k*.01);return Math.pow(.95,n.zoomSpeed*de)}function z(k){c.theta-=k}function X(k){c.phi-=k}const F=function(){const k=new I;return function(_e,Re){k.setFromMatrixColumn(Re,0),k.multiplyScalar(-_e),d.add(k)}}(),G=function(){const k=new I;return function(_e,Re){n.screenSpacePanning===!0?k.setFromMatrixColumn(Re,1):(k.setFromMatrixColumn(Re,0),k.crossVectors(n.object.up,k)),k.multiplyScalar(_e),d.add(k)}}(),H=function(){const k=new I;return function(_e,Re){const O=n.domElement;if(n.object.isPerspectiveCamera){const re=n.object.position;k.copy(re).sub(n.target);let le=k.length();le*=Math.tan(n.object.fov/2*Math.PI/180),F(2*_e*le/O.clientHeight,n.object.matrix),G(2*Re*le/O.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(F(_e*(n.object.right-n.object.left)/n.object.zoom/O.clientWidth,n.object.matrix),G(Re*(n.object.top-n.object.bottom)/n.object.zoom/O.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function W(k){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?h/=k:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function ee(k){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?h*=k:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Z(k,de){if(!n.zoomToCursor)return;C=!0;const _e=n.domElement.getBoundingClientRect(),Re=k-_e.left,O=de-_e.top,re=_e.width,le=_e.height;P.x=Re/re*2-1,P.y=-(O/le)*2+1,S.set(P.x,P.y,1).unproject(n.object).sub(n.object.position).normalize()}function se(k){return Math.max(n.minDistance,Math.min(n.maxDistance,k))}function ne(k){f.set(k.clientX,k.clientY)}function ve(k){Z(k.clientX,k.clientX),g.set(k.clientX,k.clientY)}function fe(k){b.set(k.clientX,k.clientY)}function K(k){m.set(k.clientX,k.clientY),v.subVectors(m,f).multiplyScalar(n.rotateSpeed);const de=n.domElement;z(2*Math.PI*v.x/de.clientHeight),X(2*Math.PI*v.y/de.clientHeight),f.copy(m),n.update()}function ie(k){E.set(k.clientX,k.clientY),y.subVectors(E,g),y.y>0?W(R(y.y)):y.y<0&&ee(R(y.y)),g.copy(E),n.update()}function we(k){w.set(k.clientX,k.clientY),x.subVectors(w,b).multiplyScalar(n.panSpeed),H(x.x,x.y),b.copy(w),n.update()}function Le(k){Z(k.clientX,k.clientY),k.deltaY<0?ee(R(k.deltaY)):k.deltaY>0&&W(R(k.deltaY)),n.update()}function Ie(k){let de=!1;switch(k.code){case n.keys.UP:k.ctrlKey||k.metaKey||k.shiftKey?X(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):H(0,n.keyPanSpeed),de=!0;break;case n.keys.BOTTOM:k.ctrlKey||k.metaKey||k.shiftKey?X(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):H(0,-n.keyPanSpeed),de=!0;break;case n.keys.LEFT:k.ctrlKey||k.metaKey||k.shiftKey?z(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):H(n.keyPanSpeed,0),de=!0;break;case n.keys.RIGHT:k.ctrlKey||k.metaKey||k.shiftKey?z(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):H(-n.keyPanSpeed,0),de=!0;break}de&&(k.preventDefault(),n.update())}function Ee(k){if(A.length===1)f.set(k.pageX,k.pageY);else{const de=xe(k),_e=.5*(k.pageX+de.x),Re=.5*(k.pageY+de.y);f.set(_e,Re)}}function He(k){if(A.length===1)b.set(k.pageX,k.pageY);else{const de=xe(k),_e=.5*(k.pageX+de.x),Re=.5*(k.pageY+de.y);b.set(_e,Re)}}function Be(k){const de=xe(k),_e=k.pageX-de.x,Re=k.pageY-de.y,O=Math.sqrt(_e*_e+Re*Re);g.set(0,O)}function q(k){n.enableZoom&&Be(k),n.enablePan&&He(k)}function It(k){n.enableZoom&&Be(k),n.enableRotate&&Ee(k)}function Ae(k){if(A.length==1)m.set(k.pageX,k.pageY);else{const _e=xe(k),Re=.5*(k.pageX+_e.x),O=.5*(k.pageY+_e.y);m.set(Re,O)}v.subVectors(m,f).multiplyScalar(n.rotateSpeed);const de=n.domElement;z(2*Math.PI*v.x/de.clientHeight),X(2*Math.PI*v.y/de.clientHeight),f.copy(m)}function Ge(k){if(A.length===1)w.set(k.pageX,k.pageY);else{const de=xe(k),_e=.5*(k.pageX+de.x),Re=.5*(k.pageY+de.y);w.set(_e,Re)}x.subVectors(w,b).multiplyScalar(n.panSpeed),H(x.x,x.y),b.copy(w)}function Ce(k){const de=xe(k),_e=k.pageX-de.x,Re=k.pageY-de.y,O=Math.sqrt(_e*_e+Re*Re);E.set(0,O),y.set(0,Math.pow(E.y/g.y,n.zoomSpeed)),W(y.y),g.copy(E);const re=(k.pageX+de.x)*.5,le=(k.pageY+de.y)*.5;Z(re,le)}function bt(k){n.enableZoom&&Ce(k),n.enablePan&&Ge(k)}function je(k){n.enableZoom&&Ce(k),n.enableRotate&&Ae(k)}function U(k){n.enabled!==!1&&(A.length===0&&(n.domElement.setPointerCapture(k.pointerId),n.domElement.addEventListener("pointermove",L),n.domElement.addEventListener("pointerup",$)),Je(k),k.pointerType==="touch"?ze(k):he(k))}function L(k){n.enabled!==!1&&(k.pointerType==="touch"?oe(k):ae(k))}function $(k){switch(We(k),A.length){case 0:n.domElement.releasePointerCapture(k.pointerId),n.domElement.removeEventListener("pointermove",L),n.domElement.removeEventListener("pointerup",$),n.dispatchEvent(cf),r=i.NONE;break;case 1:const de=A[0],_e=D[de];ze({pointerId:de,pageX:_e.x,pageY:_e.y});break}}function he(k){let de;switch(k.button){case 0:de=n.mouseButtons.LEFT;break;case 1:de=n.mouseButtons.MIDDLE;break;case 2:de=n.mouseButtons.RIGHT;break;default:de=-1}switch(de){case Us.DOLLY:if(n.enableZoom===!1)return;ve(k),r=i.DOLLY;break;case Us.ROTATE:if(k.ctrlKey||k.metaKey||k.shiftKey){if(n.enablePan===!1)return;fe(k),r=i.PAN}else{if(n.enableRotate===!1)return;ne(k),r=i.ROTATE}break;case Us.PAN:if(k.ctrlKey||k.metaKey||k.shiftKey){if(n.enableRotate===!1)return;ne(k),r=i.ROTATE}else{if(n.enablePan===!1)return;fe(k),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(Lc)}function ae(k){switch(r){case i.ROTATE:if(n.enableRotate===!1)return;K(k);break;case i.DOLLY:if(n.enableZoom===!1)return;ie(k);break;case i.PAN:if(n.enablePan===!1)return;we(k);break}}function ce(k){n.enabled===!1||n.enableZoom===!1||r!==i.NONE||(k.preventDefault(),n.dispatchEvent(Lc),Le(Se(k)),n.dispatchEvent(cf))}function Se(k){const de=k.deltaMode,_e={clientX:k.clientX,clientY:k.clientY,deltaY:k.deltaY};switch(de){case 1:_e.deltaY*=16;break;case 2:_e.deltaY*=100;break}return k.ctrlKey&&!B&&(_e.deltaY*=10),_e}function ge(k){k.key==="Control"&&(B=!0,n.domElement.getRootNode().addEventListener("keyup",be,{passive:!0,capture:!0}))}function be(k){k.key==="Control"&&(B=!1,n.domElement.getRootNode().removeEventListener("keyup",be,{passive:!0,capture:!0}))}function Oe(k){n.enabled===!1||n.enablePan===!1||Ie(k)}function ze(k){switch(Pe(k),A.length){case 1:switch(n.touches.ONE){case Fs.ROTATE:if(n.enableRotate===!1)return;Ee(k),r=i.TOUCH_ROTATE;break;case Fs.PAN:if(n.enablePan===!1)return;He(k),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case Fs.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;q(k),r=i.TOUCH_DOLLY_PAN;break;case Fs.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;It(k),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(Lc)}function oe(k){switch(Pe(k),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;Ae(k),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;Ge(k),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;bt(k),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;je(k),n.update();break;default:r=i.NONE}}function st(k){n.enabled!==!1&&k.preventDefault()}function Je(k){A.push(k.pointerId)}function We(k){delete D[k.pointerId];for(let de=0;de<A.length;de++)if(A[de]==k.pointerId){A.splice(de,1);return}}function Pe(k){let de=D[k.pointerId];de===void 0&&(de=new Te,D[k.pointerId]=de),de.set(k.pageX,k.pageY)}function xe(k){const de=k.pointerId===A[0]?A[1]:A[0];return D[de]}n.domElement.addEventListener("contextmenu",st),n.domElement.addEventListener("pointerdown",U),n.domElement.addEventListener("pointercancel",$),n.domElement.addEventListener("wheel",ce,{passive:!1}),n.domElement.getRootNode().addEventListener("keydown",ge,{passive:!0,capture:!0}),this.update()}}const us=new oS,un=new I,Wi=new I,Lt=new Gt,hf={X:new I(1,0,0),Y:new I(0,1,0),Z:new I(0,0,1)},Ic={type:"change"},df={type:"mouseDown"},pf={type:"mouseUp",mode:null},ff={type:"objectChange"};class yT extends ft{constructor(e,t){super(),t===void 0&&(console.warn('THREE.TransformControls: The second parameter "domElement" is now mandatory.'),t=document),this.isTransformControls=!0,this.visible=!1,this.domElement=t,this.domElement.style.touchAction="none";const n=new AT;this._gizmo=n,this.add(n);const i=new CT;this._plane=i,this.add(i);const r=this;function a(E,y){let S=y;Object.defineProperty(r,E,{get:function(){return S!==void 0?S:y},set:function(P){S!==P&&(S=P,i[E]=P,n[E]=P,r.dispatchEvent({type:E+"-changed",value:P}),r.dispatchEvent(Ic))}}),r[E]=y,i[E]=y,n[E]=y}a("camera",e),a("object",void 0),a("enabled",!0),a("axis",null),a("mode","translate"),a("translationSnap",null),a("rotationSnap",null),a("scaleSnap",null),a("space","world"),a("size",1),a("dragging",!1),a("showX",!0),a("showY",!0),a("showZ",!0);const l=new I,c=new I,h=new Gt,d=new Gt,f=new I,m=new Gt,v=new I,b=new I,w=new I,x=0,g=new I;a("worldPosition",l),a("worldPositionStart",c),a("worldQuaternion",h),a("worldQuaternionStart",d),a("cameraPosition",f),a("cameraQuaternion",m),a("pointStart",v),a("pointEnd",b),a("rotationAxis",w),a("rotationAngle",x),a("eye",g),this._offset=new I,this._startNorm=new I,this._endNorm=new I,this._cameraScale=new I,this._parentPosition=new I,this._parentQuaternion=new Gt,this._parentQuaternionInv=new Gt,this._parentScale=new I,this._worldScaleStart=new I,this._worldQuaternionInv=new Gt,this._worldScale=new I,this._positionStart=new I,this._quaternionStart=new Gt,this._scaleStart=new I,this._getPointer=wT.bind(this),this._onPointerDown=MT.bind(this),this._onPointerHover=ET.bind(this),this._onPointerMove=ST.bind(this),this._onPointerUp=TT.bind(this),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointermove",this._onPointerHover),this.domElement.addEventListener("pointerup",this._onPointerUp)}updateMatrixWorld(){this.object!==void 0&&(this.object.updateMatrixWorld(),this.object.parent===null?console.error("TransformControls: The attached 3D object must be a part of the scene graph."):this.object.parent.matrixWorld.decompose(this._parentPosition,this._parentQuaternion,this._parentScale),this.object.matrixWorld.decompose(this.worldPosition,this.worldQuaternion,this._worldScale),this._parentQuaternionInv.copy(this._parentQuaternion).invert(),this._worldQuaternionInv.copy(this.worldQuaternion).invert()),this.camera.updateMatrixWorld(),this.camera.matrixWorld.decompose(this.cameraPosition,this.cameraQuaternion,this._cameraScale),this.camera.isOrthographicCamera?this.camera.getWorldDirection(this.eye).negate():this.eye.copy(this.cameraPosition).sub(this.worldPosition).normalize(),super.updateMatrixWorld(this)}pointerHover(e){if(this.object===void 0||this.dragging===!0)return;us.setFromCamera(e,this.camera);const t=Dc(this._gizmo.picker[this.mode],us);t?this.axis=t.object.name:this.axis=null}pointerDown(e){if(!(this.object===void 0||this.dragging===!0||e.button!==0)&&this.axis!==null){us.setFromCamera(e,this.camera);const t=Dc(this._plane,us,!0);t&&(this.object.updateMatrixWorld(),this.object.parent.updateMatrixWorld(),this._positionStart.copy(this.object.position),this._quaternionStart.copy(this.object.quaternion),this._scaleStart.copy(this.object.scale),this.object.matrixWorld.decompose(this.worldPositionStart,this.worldQuaternionStart,this._worldScaleStart),this.pointStart.copy(t.point).sub(this.worldPositionStart)),this.dragging=!0,df.mode=this.mode,this.dispatchEvent(df)}}pointerMove(e){const t=this.axis,n=this.mode,i=this.object;let r=this.space;if(n==="scale"?r="local":(t==="E"||t==="XYZE"||t==="XYZ")&&(r="world"),i===void 0||t===null||this.dragging===!1||e.button!==-1)return;us.setFromCamera(e,this.camera);const a=Dc(this._plane,us,!0);if(!!a){if(this.pointEnd.copy(a.point).sub(this.worldPositionStart),n==="translate")this._offset.copy(this.pointEnd).sub(this.pointStart),r==="local"&&t!=="XYZ"&&this._offset.applyQuaternion(this._worldQuaternionInv),t.indexOf("X")===-1&&(this._offset.x=0),t.indexOf("Y")===-1&&(this._offset.y=0),t.indexOf("Z")===-1&&(this._offset.z=0),r==="local"&&t!=="XYZ"?this._offset.applyQuaternion(this._quaternionStart).divide(this._parentScale):this._offset.applyQuaternion(this._parentQuaternionInv).divide(this._parentScale),i.position.copy(this._offset).add(this._positionStart),this.translationSnap&&(r==="local"&&(i.position.applyQuaternion(Lt.copy(this._quaternionStart).invert()),t.search("X")!==-1&&(i.position.x=Math.round(i.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(i.position.y=Math.round(i.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(i.position.z=Math.round(i.position.z/this.translationSnap)*this.translationSnap),i.position.applyQuaternion(this._quaternionStart)),r==="world"&&(i.parent&&i.position.add(un.setFromMatrixPosition(i.parent.matrixWorld)),t.search("X")!==-1&&(i.position.x=Math.round(i.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(i.position.y=Math.round(i.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(i.position.z=Math.round(i.position.z/this.translationSnap)*this.translationSnap),i.parent&&i.position.sub(un.setFromMatrixPosition(i.parent.matrixWorld))));else if(n==="scale"){if(t.search("XYZ")!==-1){let l=this.pointEnd.length()/this.pointStart.length();this.pointEnd.dot(this.pointStart)<0&&(l*=-1),Wi.set(l,l,l)}else un.copy(this.pointStart),Wi.copy(this.pointEnd),un.applyQuaternion(this._worldQuaternionInv),Wi.applyQuaternion(this._worldQuaternionInv),Wi.divide(un),t.search("X")===-1&&(Wi.x=1),t.search("Y")===-1&&(Wi.y=1),t.search("Z")===-1&&(Wi.z=1);i.scale.copy(this._scaleStart).multiply(Wi),this.scaleSnap&&(t.search("X")!==-1&&(i.scale.x=Math.round(i.scale.x/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Y")!==-1&&(i.scale.y=Math.round(i.scale.y/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Z")!==-1&&(i.scale.z=Math.round(i.scale.z/this.scaleSnap)*this.scaleSnap||this.scaleSnap))}else if(n==="rotate"){this._offset.copy(this.pointEnd).sub(this.pointStart);const l=20/this.worldPosition.distanceTo(un.setFromMatrixPosition(this.camera.matrixWorld));let c=!1;t==="XYZE"?(this.rotationAxis.copy(this._offset).cross(this.eye).normalize(),this.rotationAngle=this._offset.dot(un.copy(this.rotationAxis).cross(this.eye))*l):(t==="X"||t==="Y"||t==="Z")&&(this.rotationAxis.copy(hf[t]),un.copy(hf[t]),r==="local"&&un.applyQuaternion(this.worldQuaternion),un.cross(this.eye),un.length()===0?c=!0:this.rotationAngle=this._offset.dot(un.normalize())*l),(t==="E"||c)&&(this.rotationAxis.copy(this.eye),this.rotationAngle=this.pointEnd.angleTo(this.pointStart),this._startNorm.copy(this.pointStart).normalize(),this._endNorm.copy(this.pointEnd).normalize(),this.rotationAngle*=this._endNorm.cross(this._startNorm).dot(this.eye)<0?1:-1),this.rotationSnap&&(this.rotationAngle=Math.round(this.rotationAngle/this.rotationSnap)*this.rotationSnap),r==="local"&&t!=="E"&&t!=="XYZE"?(i.quaternion.copy(this._quaternionStart),i.quaternion.multiply(Lt.setFromAxisAngle(this.rotationAxis,this.rotationAngle)).normalize()):(this.rotationAxis.applyQuaternion(this._parentQuaternionInv),i.quaternion.copy(Lt.setFromAxisAngle(this.rotationAxis,this.rotationAngle)),i.quaternion.multiply(this._quaternionStart).normalize())}this.dispatchEvent(Ic),this.dispatchEvent(ff)}}pointerUp(e){e.button===0&&(this.dragging&&this.axis!==null&&(pf.mode=this.mode,this.dispatchEvent(pf)),this.dragging=!1,this.axis=null)}dispose(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerHover),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.traverse(function(e){e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()})}attach(e){return this.object=e,this.visible=!0,this}detach(){return this.object=void 0,this.visible=!1,this.axis=null,this}reset(){!this.enabled||this.dragging&&(this.object.position.copy(this._positionStart),this.object.quaternion.copy(this._quaternionStart),this.object.scale.copy(this._scaleStart),this.dispatchEvent(Ic),this.dispatchEvent(ff),this.pointStart.copy(this.pointEnd))}getRaycaster(){return us}getMode(){return this.mode}setMode(e){this.mode=e}setTranslationSnap(e){this.translationSnap=e}setRotationSnap(e){this.rotationSnap=e}setScaleSnap(e){this.scaleSnap=e}setSize(e){this.size=e}setSpace(e){this.space=e}}function wT(s){if(this.domElement.ownerDocument.pointerLockElement)return{x:0,y:0,button:s.button};{const e=this.domElement.getBoundingClientRect();return{x:(s.clientX-e.left)/e.width*2-1,y:-(s.clientY-e.top)/e.height*2+1,button:s.button}}}function ET(s){if(!!this.enabled)switch(s.pointerType){case"mouse":case"pen":this.pointerHover(this._getPointer(s));break}}function MT(s){!this.enabled||(document.pointerLockElement||this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.pointerHover(this._getPointer(s)),this.pointerDown(this._getPointer(s)))}function ST(s){!this.enabled||this.pointerMove(this._getPointer(s))}function TT(s){!this.enabled||(this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.pointerUp(this._getPointer(s)))}function Dc(s,e,t){const n=e.intersectObject(s,!0);for(let i=0;i<n.length;i++)if(n[i].object.visible||t)return n[i];return!1}const Ua=new Io,yt=new I(0,1,0),mf=new I(0,0,0),gf=new Xe,Fa=new Gt,Ha=new Gt,Zn=new I,vf=new Xe,xo=new I(1,0,0),ps=new I(0,1,0),bo=new I(0,0,1),Oa=new I,po=new I,fo=new I;class AT extends ft{constructor(){super(),this.isTransformControlsGizmo=!0,this.type="TransformControlsGizmo";const e=new ei({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),t=new Lu({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),n=e.clone();n.opacity=.15;const i=t.clone();i.opacity=.5;const r=e.clone();r.color.setHex(16711680);const a=e.clone();a.color.setHex(65280);const l=e.clone();l.color.setHex(255);const c=e.clone();c.color.setHex(16711680),c.opacity=.5;const h=e.clone();h.color.setHex(65280),h.opacity=.5;const d=e.clone();d.color.setHex(255),d.opacity=.5;const f=e.clone();f.opacity=.25;const m=e.clone();m.color.setHex(16776960),m.opacity=.25,e.clone().color.setHex(16776960);const b=e.clone();b.color.setHex(7895160);const w=new cn(0,.04,.1,12);w.translate(0,.05,0);const x=new xt(.08,.08,.08);x.translate(0,.04,0);const g=new tn;g.setAttribute("position",new wt([0,0,0,1,0,0],3));const E=new cn(.0075,.0075,.5,3);E.translate(0,.25,0);function y(G,H){const W=new vs(G,.0075,3,64,H*Math.PI*2);return W.rotateY(Math.PI/2),W.rotateX(Math.PI/2),W}function S(){const G=new tn;return G.setAttribute("position",new wt([0,0,0,1,1,1],3)),G}const P={X:[[new pe(w,r),[.5,0,0],[0,0,-Math.PI/2]],[new pe(w,r),[-.5,0,0],[0,0,Math.PI/2]],[new pe(E,r),[0,0,0],[0,0,-Math.PI/2]]],Y:[[new pe(w,a),[0,.5,0]],[new pe(w,a),[0,-.5,0],[Math.PI,0,0]],[new pe(E,a)]],Z:[[new pe(w,l),[0,0,.5],[Math.PI/2,0,0]],[new pe(w,l),[0,0,-.5],[-Math.PI/2,0,0]],[new pe(E,l),null,[Math.PI/2,0,0]]],XYZ:[[new pe(new gr(.1,0),f.clone()),[0,0,0]]],XY:[[new pe(new xt(.15,.15,.01),d.clone()),[.15,.15,0]]],YZ:[[new pe(new xt(.15,.15,.01),c.clone()),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new pe(new xt(.15,.15,.01),h.clone()),[.15,0,.15],[-Math.PI/2,0,0]]]},C={X:[[new pe(new cn(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new pe(new cn(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new pe(new cn(.2,0,.6,4),n),[0,.3,0]],[new pe(new cn(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new pe(new cn(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new pe(new cn(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XYZ:[[new pe(new gr(.2,0),n)]],XY:[[new pe(new xt(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new pe(new xt(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new pe(new xt(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]]},A={START:[[new pe(new gr(.01,2),i),null,null,null,"helper"]],END:[[new pe(new gr(.01,2),i),null,null,null,"helper"]],DELTA:[[new Gn(S(),i),null,null,null,"helper"]],X:[[new Gn(g,i.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new Gn(g,i.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new Gn(g,i.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]},D={XYZE:[[new pe(y(.5,1),b),null,[0,Math.PI/2,0]]],X:[[new pe(y(.5,.5),r)]],Y:[[new pe(y(.5,.5),a),null,[0,0,-Math.PI/2]]],Z:[[new pe(y(.5,.5),l),null,[0,Math.PI/2,0]]],E:[[new pe(y(.75,1),m),null,[0,Math.PI/2,0]]]},B={AXIS:[[new Gn(g,i.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]]},M={XYZE:[[new pe(new al(.25,10,8),n)]],X:[[new pe(new vs(.5,.1,4,24),n),[0,0,0],[0,-Math.PI/2,-Math.PI/2]]],Y:[[new pe(new vs(.5,.1,4,24),n),[0,0,0],[Math.PI/2,0,0]]],Z:[[new pe(new vs(.5,.1,4,24),n),[0,0,0],[0,0,-Math.PI/2]]],E:[[new pe(new vs(.75,.1,2,24),n)]]},R={X:[[new pe(x,r),[.5,0,0],[0,0,-Math.PI/2]],[new pe(E,r),[0,0,0],[0,0,-Math.PI/2]],[new pe(x,r),[-.5,0,0],[0,0,Math.PI/2]]],Y:[[new pe(x,a),[0,.5,0]],[new pe(E,a)],[new pe(x,a),[0,-.5,0],[0,0,Math.PI]]],Z:[[new pe(x,l),[0,0,.5],[Math.PI/2,0,0]],[new pe(E,l),[0,0,0],[Math.PI/2,0,0]],[new pe(x,l),[0,0,-.5],[-Math.PI/2,0,0]]],XY:[[new pe(new xt(.15,.15,.01),d),[.15,.15,0]]],YZ:[[new pe(new xt(.15,.15,.01),c),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new pe(new xt(.15,.15,.01),h),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new pe(new xt(.1,.1,.1),f.clone())]]},z={X:[[new pe(new cn(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new pe(new cn(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new pe(new cn(.2,0,.6,4),n),[0,.3,0]],[new pe(new cn(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new pe(new cn(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new pe(new cn(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XY:[[new pe(new xt(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new pe(new xt(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new pe(new xt(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new pe(new xt(.2,.2,.2),n),[0,0,0]]]},X={X:[[new Gn(g,i.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new Gn(g,i.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new Gn(g,i.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]};function F(G){const H=new ft;for(const W in G)for(let ee=G[W].length;ee--;){const Z=G[W][ee][0].clone(),se=G[W][ee][1],ne=G[W][ee][2],ve=G[W][ee][3],fe=G[W][ee][4];Z.name=W,Z.tag=fe,se&&Z.position.set(se[0],se[1],se[2]),ne&&Z.rotation.set(ne[0],ne[1],ne[2]),ve&&Z.scale.set(ve[0],ve[1],ve[2]),Z.updateMatrix();const K=Z.geometry.clone();K.applyMatrix4(Z.matrix),Z.geometry=K,Z.renderOrder=1/0,Z.position.set(0,0,0),Z.rotation.set(0,0,0),Z.scale.set(1,1,1),H.add(Z)}return H}this.gizmo={},this.picker={},this.helper={},this.add(this.gizmo.translate=F(P)),this.add(this.gizmo.rotate=F(D)),this.add(this.gizmo.scale=F(R)),this.add(this.picker.translate=F(C)),this.add(this.picker.rotate=F(M)),this.add(this.picker.scale=F(z)),this.add(this.helper.translate=F(A)),this.add(this.helper.rotate=F(B)),this.add(this.helper.scale=F(X)),this.picker.translate.visible=!1,this.picker.rotate.visible=!1,this.picker.scale.visible=!1}updateMatrixWorld(e){const n=(this.mode==="scale"?"local":this.space)==="local"?this.worldQuaternion:Ha;this.gizmo.translate.visible=this.mode==="translate",this.gizmo.rotate.visible=this.mode==="rotate",this.gizmo.scale.visible=this.mode==="scale",this.helper.translate.visible=this.mode==="translate",this.helper.rotate.visible=this.mode==="rotate",this.helper.scale.visible=this.mode==="scale";let i=[];i=i.concat(this.picker[this.mode].children),i=i.concat(this.gizmo[this.mode].children),i=i.concat(this.helper[this.mode].children);for(let r=0;r<i.length;r++){const a=i[r];a.visible=!0,a.rotation.set(0,0,0),a.position.copy(this.worldPosition);let l;if(this.camera.isOrthographicCamera?l=(this.camera.top-this.camera.bottom)/this.camera.zoom:l=this.worldPosition.distanceTo(this.cameraPosition)*Math.min(1.9*Math.tan(Math.PI*this.camera.fov/360)/this.camera.zoom,7),a.scale.set(1,1,1).multiplyScalar(l*this.size/4),a.tag==="helper"){a.visible=!1,a.name==="AXIS"?(a.visible=!!this.axis,this.axis==="X"&&(Lt.setFromEuler(Ua.set(0,0,0)),a.quaternion.copy(n).multiply(Lt),Math.abs(yt.copy(xo).applyQuaternion(n).dot(this.eye))>.9&&(a.visible=!1)),this.axis==="Y"&&(Lt.setFromEuler(Ua.set(0,0,Math.PI/2)),a.quaternion.copy(n).multiply(Lt),Math.abs(yt.copy(ps).applyQuaternion(n).dot(this.eye))>.9&&(a.visible=!1)),this.axis==="Z"&&(Lt.setFromEuler(Ua.set(0,Math.PI/2,0)),a.quaternion.copy(n).multiply(Lt),Math.abs(yt.copy(bo).applyQuaternion(n).dot(this.eye))>.9&&(a.visible=!1)),this.axis==="XYZE"&&(Lt.setFromEuler(Ua.set(0,Math.PI/2,0)),yt.copy(this.rotationAxis),a.quaternion.setFromRotationMatrix(gf.lookAt(mf,yt,ps)),a.quaternion.multiply(Lt),a.visible=this.dragging),this.axis==="E"&&(a.visible=!1)):a.name==="START"?(a.position.copy(this.worldPositionStart),a.visible=this.dragging):a.name==="END"?(a.position.copy(this.worldPosition),a.visible=this.dragging):a.name==="DELTA"?(a.position.copy(this.worldPositionStart),a.quaternion.copy(this.worldQuaternionStart),un.set(1e-10,1e-10,1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1),un.applyQuaternion(this.worldQuaternionStart.clone().invert()),a.scale.copy(un),a.visible=this.dragging):(a.quaternion.copy(n),this.dragging?a.position.copy(this.worldPositionStart):a.position.copy(this.worldPosition),this.axis&&(a.visible=this.axis.search(a.name)!==-1));continue}a.quaternion.copy(n),this.mode==="translate"||this.mode==="scale"?(a.name==="X"&&Math.abs(yt.copy(xo).applyQuaternion(n).dot(this.eye))>.99&&(a.scale.set(1e-10,1e-10,1e-10),a.visible=!1),a.name==="Y"&&Math.abs(yt.copy(ps).applyQuaternion(n).dot(this.eye))>.99&&(a.scale.set(1e-10,1e-10,1e-10),a.visible=!1),a.name==="Z"&&Math.abs(yt.copy(bo).applyQuaternion(n).dot(this.eye))>.99&&(a.scale.set(1e-10,1e-10,1e-10),a.visible=!1),a.name==="XY"&&Math.abs(yt.copy(bo).applyQuaternion(n).dot(this.eye))<.2&&(a.scale.set(1e-10,1e-10,1e-10),a.visible=!1),a.name==="YZ"&&Math.abs(yt.copy(xo).applyQuaternion(n).dot(this.eye))<.2&&(a.scale.set(1e-10,1e-10,1e-10),a.visible=!1),a.name==="XZ"&&Math.abs(yt.copy(ps).applyQuaternion(n).dot(this.eye))<.2&&(a.scale.set(1e-10,1e-10,1e-10),a.visible=!1)):this.mode==="rotate"&&(Fa.copy(n),yt.copy(this.eye).applyQuaternion(Lt.copy(n).invert()),a.name.search("E")!==-1&&a.quaternion.setFromRotationMatrix(gf.lookAt(this.eye,mf,ps)),a.name==="X"&&(Lt.setFromAxisAngle(xo,Math.atan2(-yt.y,yt.z)),Lt.multiplyQuaternions(Fa,Lt),a.quaternion.copy(Lt)),a.name==="Y"&&(Lt.setFromAxisAngle(ps,Math.atan2(yt.x,yt.z)),Lt.multiplyQuaternions(Fa,Lt),a.quaternion.copy(Lt)),a.name==="Z"&&(Lt.setFromAxisAngle(bo,Math.atan2(yt.y,yt.x)),Lt.multiplyQuaternions(Fa,Lt),a.quaternion.copy(Lt))),a.visible=a.visible&&(a.name.indexOf("X")===-1||this.showX),a.visible=a.visible&&(a.name.indexOf("Y")===-1||this.showY),a.visible=a.visible&&(a.name.indexOf("Z")===-1||this.showZ),a.visible=a.visible&&(a.name.indexOf("E")===-1||this.showX&&this.showY&&this.showZ),a.material._color=a.material._color||a.material.color.clone(),a.material._opacity=a.material._opacity||a.material.opacity,a.material.color.copy(a.material._color),a.material.opacity=a.material._opacity,this.enabled&&this.axis&&(a.name===this.axis||this.axis.split("").some(function(c){return a.name===c}))&&(a.material.color.setHex(16776960),a.material.opacity=1)}super.updateMatrixWorld(e)}}class CT extends pe{constructor(){super(new Kn(1e5,1e5,2,2),new ei({visible:!1,wireframe:!0,side:mn,transparent:!0,opacity:.1,toneMapped:!1})),this.isTransformControlsPlane=!0,this.type="TransformControlsPlane"}updateMatrixWorld(e){let t=this.space;switch(this.position.copy(this.worldPosition),this.mode==="scale"&&(t="local"),Oa.copy(xo).applyQuaternion(t==="local"?this.worldQuaternion:Ha),po.copy(ps).applyQuaternion(t==="local"?this.worldQuaternion:Ha),fo.copy(bo).applyQuaternion(t==="local"?this.worldQuaternion:Ha),yt.copy(po),this.mode){case"translate":case"scale":switch(this.axis){case"X":yt.copy(this.eye).cross(Oa),Zn.copy(Oa).cross(yt);break;case"Y":yt.copy(this.eye).cross(po),Zn.copy(po).cross(yt);break;case"Z":yt.copy(this.eye).cross(fo),Zn.copy(fo).cross(yt);break;case"XY":Zn.copy(fo);break;case"YZ":Zn.copy(Oa);break;case"XZ":yt.copy(fo),Zn.copy(po);break;case"XYZ":case"E":Zn.set(0,0,0);break}break;case"rotate":default:Zn.set(0,0,0)}Zn.length()===0?this.quaternion.copy(this.cameraQuaternion):(vf.lookAt(un.set(0,0,0),Zn,yt),this.quaternion.setFromRotationMatrix(vf)),super.updateMatrixWorld(e)}}function PT(s,e=!1){const t=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},a={},l=s[0].morphTargetsRelative,c=new tn;let h=0;for(let d=0;d<s.length;++d){const f=s[d];let m=0;if(t!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const v in f.attributes){if(!n.has(v))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+'. All geometries must have compatible attributes; make sure "'+v+'" attribute exists among all geometries, or in none of them.'),null;r[v]===void 0&&(r[v]=[]),r[v].push(f.attributes[v]),m++}if(m!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". Make sure all geometries have the same number of attributes."),null;if(l!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const v in f.morphAttributes){if(!i.has(v))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+".  .morphAttributes must be consistent throughout all geometries."),null;a[v]===void 0&&(a[v]=[]),a[v].push(f.morphAttributes[v])}if(e){let v;if(t)v=f.index.count;else if(f.attributes.position!==void 0)v=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". The geometry must have either an index or a position attribute"),null;c.addGroup(h,v,d),h+=v}}if(t){let d=0;const f=[];for(let m=0;m<s.length;++m){const v=s[m].index;for(let b=0;b<v.count;++b)f.push(v.getX(b)+d);d+=s[m].attributes.position.count}c.setIndex(f)}for(const d in r){const f=_f(r[d]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+d+" attribute."),null;c.setAttribute(d,f)}for(const d in a){const f=a[d][0].length;if(f===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[d]=[];for(let m=0;m<f;++m){const v=[];for(let w=0;w<a[d].length;++w)v.push(a[d][w][m]);const b=_f(v);if(!b)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+d+" morphAttribute."),null;c.morphAttributes[d].push(b)}}return c}function _f(s){let e,t,n,i=-1,r=0;for(let h=0;h<s.length;++h){const d=s[h];if(e===void 0&&(e=d.array.constructor),e!==d.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=d.itemSize),t!==d.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=d.normalized),n!==d.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=d.gpuType),i!==d.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=d.count*t}const a=new e(r),l=new At(a,t,n);let c=0;for(let h=0;h<s.length;++h){const d=s[h];if(d.isInterleavedBufferAttribute){const f=c/t;for(let m=0,v=d.count;m<v;m++)for(let b=0;b<t;b++){const w=d.getComponent(m,b);l.setComponent(m+f,b,w)}}else a.set(d.array,c);c+=d.count*t}return i!==void 0&&(l.gpuType=i),l}function RT(s,e=1e-4){e=Math.max(e,Number.EPSILON);const t={},n=s.getIndex(),i=s.getAttribute("position"),r=n?n.count:i.count;let a=0;const l=Object.keys(s.attributes),c={},h={},d=[],f=["getX","getY","getZ","getW"],m=["setX","setY","setZ","setW"];for(let E=0,y=l.length;E<y;E++){const S=l[E],P=s.attributes[S];c[S]=new At(new P.array.constructor(P.count*P.itemSize),P.itemSize,P.normalized);const C=s.morphAttributes[S];C&&(h[S]=new At(new C.array.constructor(C.count*C.itemSize),C.itemSize,C.normalized))}const v=e*.5,b=Math.log10(1/e),w=Math.pow(10,b),x=v*w;for(let E=0;E<r;E++){const y=n?n.getX(E):E;let S="";for(let P=0,C=l.length;P<C;P++){const A=l[P],D=s.getAttribute(A),B=D.itemSize;for(let M=0;M<B;M++)S+=`${~~(D[f[M]](y)*w+x)},`}if(S in t)d.push(t[S]);else{for(let P=0,C=l.length;P<C;P++){const A=l[P],D=s.getAttribute(A),B=s.morphAttributes[A],M=D.itemSize,R=c[A],z=h[A];for(let X=0;X<M;X++){const F=f[X],G=m[X];if(R[G](a,D[F](y)),B)for(let H=0,W=B.length;H<W;H++)z[H][G](a,B[H][F](y))}}t[S]=a,d.push(a),a++}}const g=s.clone();for(const E in s.attributes){const y=c[E];if(g.setAttribute(E,new At(y.array.slice(0,a*y.itemSize),y.itemSize,y.normalized)),E in h)for(let S=0;S<h[E].length;S++){const P=h[E][S];g.morphAttributes[E][S]=new At(P.array.slice(0,a*P.itemSize),P.itemSize,P.normalized)}}return g.setIndex(d),g}function xf(s,e){if(e===O_)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===qc||e===Jf){let t=s.getIndex();if(t===null){const a=[],l=s.getAttribute("position");if(l!==void 0){for(let c=0;c<l.count;c++)a.push(c);s.setIndex(a),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===qc)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class LT extends Ur{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new FT(t)}),this.register(function(t){return new XT(t)}),this.register(function(t){return new jT(t)}),this.register(function(t){return new qT(t)}),this.register(function(t){return new BT(t)}),this.register(function(t){return new kT(t)}),this.register(function(t){return new VT(t)}),this.register(function(t){return new zT(t)}),this.register(function(t){return new UT(t)}),this.register(function(t){return new HT(t)}),this.register(function(t){return new OT(t)}),this.register(function(t){return new WT(t)}),this.register(function(t){return new GT(t)}),this.register(function(t){return new DT(t)}),this.register(function(t){return new YT(t)}),this.register(function(t){return new KT(t)})}load(e,t,n,i){const r=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const h=So.extractUrlBase(e);a=So.resolveURL(h,this.path)}else a=So.extractUrlBase(e);this.manager.itemStart(e);const l=function(h){i?i(h):console.error(h),r.manager.itemError(e),r.manager.itemEnd(e)},c=new Am(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(h){try{r.parse(h,a,function(d){t(d),r.manager.itemEnd(e)},l)}catch(d){l(d)}},n,l)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const a={},l={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Om){try{a[at.KHR_BINARY_GLTF]=new $T(e)}catch(f){i&&i(f);return}r=JSON.parse(a[at.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const h=new cA(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});h.fileLoader.setRequestHeader(this.requestHeader);for(let d=0;d<this.pluginCallbacks.length;d++){const f=this.pluginCallbacks[d](h);f.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),l[f.name]=f,a[f.name]=!0}if(r.extensionsUsed)for(let d=0;d<r.extensionsUsed.length;++d){const f=r.extensionsUsed[d],m=r.extensionsRequired||[];switch(f){case at.KHR_MATERIALS_UNLIT:a[f]=new NT;break;case at.KHR_DRACO_MESH_COMPRESSION:a[f]=new ZT(r,this.dracoLoader);break;case at.KHR_TEXTURE_TRANSFORM:a[f]=new QT;break;case at.KHR_MESH_QUANTIZATION:a[f]=new JT;break;default:m.indexOf(f)>=0&&l[f]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+f+'".')}}h.setExtensions(a),h.setPlugins(l),h.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function IT(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const at={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class DT{constructor(e){this.parser=e,this.name=at.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let h;const d=new Ve(16777215);c.color!==void 0&&d.setRGB(c.color[0],c.color[1],c.color[2],en);const f=c.range!==void 0?c.range:0;switch(c.type){case"directional":h=new KM(d),h.target.position.set(0,0,-1),h.add(h.target);break;case"point":h=new Cm(d),h.distance=f;break;case"spot":h=new jM(d),h.distance=f,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,h.angle=c.spot.outerConeAngle,h.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,h.target.position.set(0,0,-1),h.add(h.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return h.position.set(0,0,0),h.decay=2,Yi(h,c),c.intensity!==void 0&&(h.intensity=c.intensity),h.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(h),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],l=(r.extensions&&r.extensions[this.name]||{}).light;return l===void 0?null:this._loadLight(l).then(function(c){return n._getNodeRef(t.cache,l,c)})}}class NT{constructor(){this.name=at.KHR_MATERIALS_UNLIT}getMaterialType(){return ei}extendParams(e,t,n){const i=[];e.color=new Ve(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],en),e.opacity=a[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,Ft))}return Promise.all(i)}}class UT{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class FT{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ai}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const l=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Te(l,l)}return Promise.all(r)}}class OT{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ai}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}}class BT{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ai}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Ve(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){const l=a.sheenColorFactor;t.sheenColor.setRGB(l[0],l[1],l[2],en)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,Ft)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}}class kT{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ai}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}}class VT{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ai}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const l=a.attenuationColor||[1,1,1];return t.attenuationColor=new Ve().setRGB(l[0],l[1],l[2],en),Promise.all(r)}}class zT{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ai}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class HT{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ai}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const l=a.specularColorFactor||[1,1,1];return t.specularColor=new Ve().setRGB(l[0],l[1],l[2],en),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,Ft)),Promise.all(r)}}class GT{constructor(e){this.parser=e,this.name=at.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ai}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}}class WT{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ai}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}}class XT{constructor(e){this.parser=e,this.name=at.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}}class jT{constructor(e){this.parser=e,this.name=at.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],l=i.images[a.source];let c=n.textureLoader;if(l.uri){const h=n.options.manager.getHandler(l.uri);h!==null&&(c=h)}return this.detectSupport().then(function(h){if(h)return n.loadTextureImage(e,a.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class qT{constructor(e){this.parser=e,this.name=at.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],l=i.images[a.source];let c=n.textureLoader;if(l.uri){const h=n.options.manager.getHandler(l.uri);h!==null&&(c=h)}return this.detectSupport().then(function(h){if(h)return n.loadTextureImage(e,a.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class YT{constructor(e){this.name=at.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(l){const c=i.byteOffset||0,h=i.byteLength||0,d=i.count,f=i.byteStride,m=new Uint8Array(l,c,h);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(d,f,m,i.mode,i.filter).then(function(v){return v.buffer}):a.ready.then(function(){const v=new ArrayBuffer(d*f);return a.decodeGltfBuffer(new Uint8Array(v),d,f,m,i.mode,i.filter),v})})}else return null}}class KT{constructor(e){this.name=at.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const h of i.primitives)if(h.mode!==Dn.TRIANGLES&&h.mode!==Dn.TRIANGLE_STRIP&&h.mode!==Dn.TRIANGLE_FAN&&h.mode!==void 0)return null;const a=n.extensions[this.name].attributes,l=[],c={};for(const h in a)l.push(this.parser.getDependency("accessor",a[h]).then(d=>(c[h]=d,c[h])));return l.length<1?null:(l.push(this.parser.createNodeMesh(e)),Promise.all(l).then(h=>{const d=h.pop(),f=d.isGroup?d.children:[d],m=h[0].count,v=[];for(const b of f){const w=new Xe,x=new I,g=new Gt,E=new I(1,1,1),y=new AM(b.geometry,b.material,m);for(let S=0;S<m;S++)c.TRANSLATION&&x.fromBufferAttribute(c.TRANSLATION,S),c.ROTATION&&g.fromBufferAttribute(c.ROTATION,S),c.SCALE&&E.fromBufferAttribute(c.SCALE,S),y.setMatrixAt(S,w.compose(x,g,E));for(const S in c)if(S==="_COLOR_0"){const P=c[S];y.instanceColor=new Qc(P.array,P.itemSize,P.normalized)}else S!=="TRANSLATION"&&S!=="ROTATION"&&S!=="SCALE"&&b.geometry.setAttribute(S,c[S]);ft.prototype.copy.call(y,b),this.parser.assignFinalMaterial(y),v.push(y)}return d.isGroup?(d.clear(),d.add(...v),d):v[0]}))}}const Om="glTF",mo=12,bf={JSON:1313821514,BIN:5130562};class $T{constructor(e){this.name=at.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,mo),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Om)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-mo,r=new DataView(e,mo);let a=0;for(;a<i;){const l=r.getUint32(a,!0);a+=4;const c=r.getUint32(a,!0);if(a+=4,c===bf.JSON){const h=new Uint8Array(e,mo+a,l);this.content=n.decode(h)}else if(c===bf.BIN){const h=mo+a;this.body=e.slice(h,h+l)}a+=l}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class ZT{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=at.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,l={},c={},h={};for(const d in a){const f=uu[d]||d.toLowerCase();l[f]=a[d]}for(const d in e.attributes){const f=uu[d]||d.toLowerCase();if(a[d]!==void 0){const m=n.accessors[e.attributes[d]],v=br[m.componentType];h[f]=v.name,c[f]=m.normalized===!0}}return t.getDependency("bufferView",r).then(function(d){return new Promise(function(f,m){i.decodeDracoFile(d,function(v){for(const b in v.attributes){const w=v.attributes[b],x=c[b];x!==void 0&&(w.normalized=x)}f(v)},l,h,en,m)})})}}class QT{constructor(){this.name=at.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class JT{constructor(){this.name=at.KHR_MESH_QUANTIZATION}}class Bm extends Do{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,c=l*2,h=l*3,d=i-t,f=(n-t)/d,m=f*f,v=m*f,b=e*h,w=b-h,x=-2*v+3*m,g=v-m,E=1-x,y=g-m+f;for(let S=0;S!==l;S++){const P=a[w+S+l],C=a[w+S+c]*d,A=a[b+S+l],D=a[b+S]*d;r[S]=E*P+y*C+x*A+g*D}return r}}const eA=new Gt;class tA extends Bm{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return eA.fromArray(r).normalize().toArray(r),r}}const Dn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},br={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},yf={9728:dt,9729:Ut,9984:Xc,9985:ka,9986:pr,9987:Ei},wf={33071:hn,33648:qa,10497:Er},Nc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},uu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Xi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},nA={CUBICSPLINE:void 0,LINEAR:Sr,STEP:Po},Uc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function iA(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new ll({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:jn})),s.DefaultMaterial}function hs(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Yi(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function sA(s,e,t){let n=!1,i=!1,r=!1;for(let h=0,d=e.length;h<d;h++){const f=e[h];if(f.POSITION!==void 0&&(n=!0),f.NORMAL!==void 0&&(i=!0),f.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const a=[],l=[],c=[];for(let h=0,d=e.length;h<d;h++){const f=e[h];if(n){const m=f.POSITION!==void 0?t.getDependency("accessor",f.POSITION):s.attributes.position;a.push(m)}if(i){const m=f.NORMAL!==void 0?t.getDependency("accessor",f.NORMAL):s.attributes.normal;l.push(m)}if(r){const m=f.COLOR_0!==void 0?t.getDependency("accessor",f.COLOR_0):s.attributes.color;c.push(m)}}return Promise.all([Promise.all(a),Promise.all(l),Promise.all(c)]).then(function(h){const d=h[0],f=h[1],m=h[2];return n&&(s.morphAttributes.position=d),i&&(s.morphAttributes.normal=f),r&&(s.morphAttributes.color=m),s.morphTargetsRelative=!0,s})}function rA(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function oA(s){let e;const t=s.extensions&&s.extensions[at.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Fc(t.attributes):e=s.indices+":"+Fc(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+Fc(s.targets[n]);return e}function Fc(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function hu(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function aA(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const lA=new Xe;class cA{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new IT,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,r=-1;typeof navigator!="undefined"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,r=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap=="undefined"||n||i&&r<98?this.textureLoader=new WM(this.options.manager):this.textureLoader=new $M(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Am(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const l={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return hs(r,l,i),Yi(l,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(l)})).then(function(){e(l)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const a=t[i].joints;for(let l=0,c=a.length;l<c;l++)e[a[l]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(a,l)=>{const c=this.associations.get(a);c!=null&&this.associations.set(l,c);for(const[h,d]of a.children.entries())r(d,l.children[h])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[at.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,a){n.load(So.resolveURL(t.uri,i.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const a=Nc[i.type],l=br[i.componentType],c=i.normalized===!0,h=new l(i.count*a);return Promise.resolve(new At(h,a,c))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(a){const l=a[0],c=Nc[i.type],h=br[i.componentType],d=h.BYTES_PER_ELEMENT,f=d*c,m=i.byteOffset||0,v=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,b=i.normalized===!0;let w,x;if(v&&v!==f){const g=Math.floor(m/v),E="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+g+":"+i.count;let y=t.cache.get(E);y||(w=new h(l,g*v,i.count*v/d),y=new wM(w,v/d),t.cache.add(E,y)),x=new Pu(y,c,m%v/d,b)}else l===null?w=new h(i.count*c):w=new h(l,m,i.count*c),x=new At(w,c,b);if(i.sparse!==void 0){const g=Nc.SCALAR,E=br[i.sparse.indices.componentType],y=i.sparse.indices.byteOffset||0,S=i.sparse.values.byteOffset||0,P=new E(a[1],y,i.sparse.count*g),C=new h(a[2],S,i.sparse.count*c);l!==null&&(x=new At(x.array.slice(),x.itemSize,x.normalized));for(let A=0,D=P.length;A<D;A++){const B=P[A];if(x.setX(B,C[A*c]),c>=2&&x.setY(B,C[A*c+1]),c>=3&&x.setZ(B,C[A*c+2]),c>=4&&x.setW(B,C[A*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return x})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r];let l=this.textureLoader;if(a.uri){const c=n.manager.getHandler(a.uri);c!==null&&(l=c)}return this.loadTextureImage(e,r,l)}loadTextureImage(e,t,n){const i=this,r=this.json,a=r.textures[e],l=r.images[t],c=(l.uri||l.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];const h=this.loadImageSource(t,n).then(function(d){d.flipY=!1,d.name=a.name||l.name||"",d.name===""&&typeof l.uri=="string"&&l.uri.startsWith("data:image/")===!1&&(d.name=l.uri);const m=(r.samplers||{})[a.sampler]||{};return d.magFilter=yf[m.magFilter]||Ut,d.minFilter=yf[m.minFilter]||Ei,d.wrapS=wf[m.wrapS]||Er,d.wrapT=wf[m.wrapT]||Er,i.associations.set(d,{textures:e}),d}).catch(function(){return null});return this.textureCache[c]=h,h}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());const a=i.images[e],l=self.URL||self.webkitURL;let c=a.uri||"",h=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(f){h=!0;const m=new Blob([f],{type:a.mimeType});return c=l.createObjectURL(m),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const d=Promise.resolve(c).then(function(f){return new Promise(function(m,v){let b=m;t.isImageBitmapLoader===!0&&(b=function(w){const x=new jt(w);x.needsUpdate=!0,m(x)}),t.load(So.resolveURL(f,r.path),b,void 0,v)})}).then(function(f){return h===!0&&l.revokeObjectURL(c),f.userData.mimeType=a.mimeType||aA(a.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),f});return this.sourceCache[e]=d,d}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[at.KHR_TEXTURE_TRANSFORM]){const l=n.extensions!==void 0?n.extensions[at.KHR_TEXTURE_TRANSFORM]:void 0;if(l){const c=r.associations.get(a);a=r.extensions[at.KHR_TEXTURE_TRANSFORM].extendTexture(a,l),r.associations.set(a,c)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const l="PointsMaterial:"+n.uuid;let c=this.cache.get(l);c||(c=new Mm,ni.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(l,c)),n=c}else if(e.isLine){const l="LineBasicMaterial:"+n.uuid;let c=this.cache.get(l);c||(c=new Lu,ni.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(l,c)),n=c}if(i||r||a){let l="ClonedMaterial:"+n.uuid+":";i&&(l+="derivative-tangents:"),r&&(l+="vertex-colors:"),a&&(l+="flat-shading:");let c=this.cache.get(l);c||(c=n.clone(),r&&(c.vertexColors=!0),a&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(l,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return ll}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let a;const l={},c=r.extensions||{},h=[];if(c[at.KHR_MATERIALS_UNLIT]){const f=i[at.KHR_MATERIALS_UNLIT];a=f.getMaterialType(),h.push(f.extendParams(l,r,t))}else{const f=r.pbrMetallicRoughness||{};if(l.color=new Ve(1,1,1),l.opacity=1,Array.isArray(f.baseColorFactor)){const m=f.baseColorFactor;l.color.setRGB(m[0],m[1],m[2],en),l.opacity=m[3]}f.baseColorTexture!==void 0&&h.push(t.assignTexture(l,"map",f.baseColorTexture,Ft)),l.metalness=f.metallicFactor!==void 0?f.metallicFactor:1,l.roughness=f.roughnessFactor!==void 0?f.roughnessFactor:1,f.metallicRoughnessTexture!==void 0&&(h.push(t.assignTexture(l,"metalnessMap",f.metallicRoughnessTexture)),h.push(t.assignTexture(l,"roughnessMap",f.metallicRoughnessTexture))),a=this._invokeOne(function(m){return m.getMaterialType&&m.getMaterialType(e)}),h.push(Promise.all(this._invokeAll(function(m){return m.extendMaterialParams&&m.extendMaterialParams(e,l)})))}r.doubleSided===!0&&(l.side=mn);const d=r.alphaMode||Uc.OPAQUE;if(d===Uc.BLEND?(l.transparent=!0,l.depthWrite=!1):(l.transparent=!1,d===Uc.MASK&&(l.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==ei&&(h.push(t.assignTexture(l,"normalMap",r.normalTexture)),l.normalScale=new Te(1,1),r.normalTexture.scale!==void 0)){const f=r.normalTexture.scale;l.normalScale.set(f,f)}if(r.occlusionTexture!==void 0&&a!==ei&&(h.push(t.assignTexture(l,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(l.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==ei){const f=r.emissiveFactor;l.emissive=new Ve().setRGB(f[0],f[1],f[2],en)}return r.emissiveTexture!==void 0&&a!==ei&&h.push(t.assignTexture(l,"emissiveMap",r.emissiveTexture,Ft)),Promise.all(h).then(function(){const f=new a(l);return r.name&&(f.name=r.name),Yi(f,r),t.associations.set(f,{materials:e}),r.extensions&&hs(i,f,r),f})}createUniqueName(e){const t=gt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(l){return n[at.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(l,t).then(function(c){return Ef(c,l,t)})}const a=[];for(let l=0,c=e.length;l<c;l++){const h=e[l],d=oA(h),f=i[d];if(f)a.push(f.promise);else{let m;h.extensions&&h.extensions[at.KHR_DRACO_MESH_COMPRESSION]?m=r(h):m=Ef(new tn,h,t),i[d]={primitive:h,promise:m},a.push(m)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],a=r.primitives,l=[];for(let c=0,h=a.length;c<h;c++){const d=a[c].material===void 0?iA(this.cache):this.getDependency("material",a[c].material);l.push(d)}return l.push(t.loadGeometries(a)),Promise.all(l).then(function(c){const h=c.slice(0,c.length-1),d=c[c.length-1],f=[];for(let v=0,b=d.length;v<b;v++){const w=d[v],x=a[v];let g;const E=h[v];if(x.mode===Dn.TRIANGLES||x.mode===Dn.TRIANGLE_STRIP||x.mode===Dn.TRIANGLE_FAN||x.mode===void 0)g=r.isSkinnedMesh===!0?new MM(w,E):new pe(w,E),g.isSkinnedMesh===!0&&g.normalizeSkinWeights(),x.mode===Dn.TRIANGLE_STRIP?g.geometry=xf(g.geometry,Jf):x.mode===Dn.TRIANGLE_FAN&&(g.geometry=xf(g.geometry,qc));else if(x.mode===Dn.LINES)g=new CM(w,E);else if(x.mode===Dn.LINE_STRIP)g=new Gn(w,E);else if(x.mode===Dn.LINE_LOOP)g=new PM(w,E);else if(x.mode===Dn.POINTS)g=new RM(w,E);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+x.mode);Object.keys(g.geometry.morphAttributes).length>0&&rA(g,r),g.name=t.createUniqueName(r.name||"mesh_"+e),Yi(g,r),x.extensions&&hs(i,g,x),t.assignFinalMaterial(g),f.push(g)}for(let v=0,b=f.length;v<b;v++)t.associations.set(f[v],{meshes:e,primitives:v});if(f.length===1)return r.extensions&&hs(i,f[0],r),f[0];const m=new xs;r.extensions&&hs(i,m,r),t.associations.set(m,{meshes:e});for(let v=0,b=f.length;v<b;v++)m.add(f[v]);return m})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new fn(im.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Ti(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Yi(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),a=i,l=[],c=[];for(let h=0,d=a.length;h<d;h++){const f=a[h];if(f){l.push(f);const m=new Xe;r!==null&&m.fromArray(r.array,h*16),c.push(m)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[h])}return new Ru(l,c)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,a=[],l=[],c=[],h=[],d=[];for(let f=0,m=i.channels.length;f<m;f++){const v=i.channels[f],b=i.samplers[v.sampler],w=v.target,x=w.node,g=i.parameters!==void 0?i.parameters[b.input]:b.input,E=i.parameters!==void 0?i.parameters[b.output]:b.output;w.node!==void 0&&(a.push(this.getDependency("node",x)),l.push(this.getDependency("accessor",g)),c.push(this.getDependency("accessor",E)),h.push(b),d.push(w))}return Promise.all([Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h),Promise.all(d)]).then(function(f){const m=f[0],v=f[1],b=f[2],w=f[3],x=f[4],g=[];for(let E=0,y=m.length;E<y;E++){const S=m[E],P=v[E],C=b[E],A=w[E],D=x[E];if(S===void 0)continue;S.updateMatrix&&S.updateMatrix();const B=n._createAnimationTracks(S,P,C,A,D);if(B)for(let M=0;M<B.length;M++)g.push(B[M])}return new OM(r,void 0,g)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const a=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&a.traverse(function(l){if(!!l.isMesh)for(let c=0,h=i.weights.length;c<h;c++)l.morphTargetInfluences[c]=i.weights[c]}),a})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),a=[],l=i.children||[];for(let h=0,d=l.length;h<d;h++)a.push(n.getDependency("node",l[h]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(a),c]).then(function(h){const d=h[0],f=h[1],m=h[2];m!==null&&d.traverse(function(v){!v.isSkinnedMesh||v.bind(m,lA)});for(let v=0,b=f.length;v<b;v++)d.add(f[v]);return d})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],a=r.name?i.createUniqueName(r.name):"",l=[],c=i._invokeOne(function(h){return h.createNodeMesh&&h.createNodeMesh(e)});return c&&l.push(c),r.camera!==void 0&&l.push(i.getDependency("camera",r.camera).then(function(h){return i._getNodeRef(i.cameraCache,r.camera,h)})),i._invokeAll(function(h){return h.createNodeAttachment&&h.createNodeAttachment(e)}).forEach(function(h){l.push(h)}),this.nodeCache[e]=Promise.all(l).then(function(h){let d;if(r.isBone===!0?d=new Em:h.length>1?d=new xs:h.length===1?d=h[0]:d=new ft,d!==h[0])for(let f=0,m=h.length;f<m;f++)d.add(h[f]);if(r.name&&(d.userData.name=r.name,d.name=a),Yi(d,r),r.extensions&&hs(n,d,r),r.matrix!==void 0){const f=new Xe;f.fromArray(r.matrix),d.applyMatrix4(f)}else r.translation!==void 0&&d.position.fromArray(r.translation),r.rotation!==void 0&&d.quaternion.fromArray(r.rotation),r.scale!==void 0&&d.scale.fromArray(r.scale);return i.associations.has(d)||i.associations.set(d,{}),i.associations.get(d).nodes=e,d}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new xs;n.name&&(r.name=i.createUniqueName(n.name)),Yi(r,n),n.extensions&&hs(t,r,n);const a=n.nodes||[],l=[];for(let c=0,h=a.length;c<h;c++)l.push(i.getDependency("node",a[c]));return Promise.all(l).then(function(c){for(let d=0,f=c.length;d<f;d++)r.add(c[d]);const h=d=>{const f=new Map;for(const[m,v]of i.associations)(m instanceof ni||m instanceof jt)&&f.set(m,v);return d.traverse(m=>{const v=i.associations.get(m);v!=null&&f.set(m,v)}),f};return i.associations=h(r),r})}_createAnimationTracks(e,t,n,i,r){const a=[],l=e.name?e.name:e.uuid,c=[];Xi[r.path]===Xi.weights?e.traverse(function(m){m.morphTargetInfluences&&c.push(m.name?m.name:m.uuid)}):c.push(l);let h;switch(Xi[r.path]){case Xi.weights:h=Pr;break;case Xi.rotation:h=Ms;break;case Xi.position:case Xi.scale:h=Rr;break;default:switch(n.itemSize){case 1:h=Pr;break;case 2:case 3:default:h=Rr;break}break}const d=i.interpolation!==void 0?nA[i.interpolation]:Sr,f=this._getArrayFromAccessor(n);for(let m=0,v=c.length;m<v;m++){const b=new h(c[m]+"."+Xi[r.path],t.array,f,d);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(b),a.push(b)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=hu(t.constructor),i=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Ms?tA:Bm;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function uA(s,e,t){const n=e.attributes,i=new Vt;if(n.POSITION!==void 0){const l=t.json.accessors[n.POSITION],c=l.min,h=l.max;if(c!==void 0&&h!==void 0){if(i.set(new I(c[0],c[1],c[2]),new I(h[0],h[1],h[2])),l.normalized){const d=hu(br[l.componentType]);i.min.multiplyScalar(d),i.max.multiplyScalar(d)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const l=new I,c=new I;for(let h=0,d=r.length;h<d;h++){const f=r[h];if(f.POSITION!==void 0){const m=t.json.accessors[f.POSITION],v=m.min,b=m.max;if(v!==void 0&&b!==void 0){if(c.setX(Math.max(Math.abs(v[0]),Math.abs(b[0]))),c.setY(Math.max(Math.abs(v[1]),Math.abs(b[1]))),c.setZ(Math.max(Math.abs(v[2]),Math.abs(b[2]))),m.normalized){const w=hu(br[m.componentType]);c.multiplyScalar(w)}l.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(l)}s.boundingBox=i;const a=new Yn;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=a}function Ef(s,e,t){const n=e.attributes,i=[];function r(a,l){return t.getDependency("accessor",a).then(function(c){s.setAttribute(l,c)})}for(const a in n){const l=uu[a]||a.toLowerCase();l in s.attributes||i.push(r(n[a],l))}if(e.indices!==void 0&&!s.index){const a=t.getDependency("accessor",e.indices).then(function(l){s.setIndex(l)});i.push(a)}return pt.workingColorSpace!==en&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${pt.workingColorSpace}" not supported.`),Yi(s,e),uA(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?sA(s,e.targets,t):s})}var hA=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},du={exports:{}};/*! Tweakpane 3.1.0 (c) 2016 cocopon, licensed under the MIT license. */(function(s,e){(function(t,n){n(e)})(hA,function(t){class n{constructor(o){const[u,_]=o.split("-"),T=u.split(".");this.major=parseInt(T[0],10),this.minor=parseInt(T[1],10),this.patch=parseInt(T[2],10),this.prerelease=_!=null?_:null}toString(){const o=[this.major,this.minor,this.patch].join(".");return this.prerelease!==null?[o,this.prerelease].join("-"):o}}class i{constructor(o){this.controller_=o}get element(){return this.controller_.view.element}get disabled(){return this.controller_.viewProps.get("disabled")}set disabled(o){this.controller_.viewProps.set("disabled",o)}get hidden(){return this.controller_.viewProps.get("hidden")}set hidden(o){this.controller_.viewProps.set("hidden",o)}dispose(){this.controller_.viewProps.set("disposed",!0)}}class r{constructor(o){this.target=o}}class a extends r{constructor(o,u,_,T){super(o),this.value=u,this.presetKey=_,this.last=T!=null?T:!0}}class l extends r{constructor(o,u,_){super(o),this.value=u,this.presetKey=_}}class c extends r{constructor(o,u){super(o),this.expanded=u}}class h extends r{constructor(o,u){super(o),this.index=u}}function d(p){return p}function f(p){return p==null}function m(p,o){if(p.length!==o.length)return!1;for(let u=0;u<p.length;u++)if(p[u]!==o[u])return!1;return!0}const v={alreadydisposed:()=>"View has been already disposed",invalidparams:p=>`Invalid parameters for '${p.name}'`,nomatchingcontroller:p=>`No matching controller for '${p.key}'`,nomatchingview:p=>`No matching view for '${JSON.stringify(p.params)}'`,notbindable:()=>"Value is not bindable",propertynotfound:p=>`Property '${p.name}' not found`,shouldneverhappen:()=>"This error should never happen"};class b{constructor(o){var u;this.message=(u=v[o.type](o.context))!==null&&u!==void 0?u:"Unexpected error",this.name=this.constructor.name,this.stack=new Error(this.message).stack,this.type=o.type}static alreadyDisposed(){return new b({type:"alreadydisposed"})}static notBindable(){return new b({type:"notbindable"})}static propertyNotFound(o){return new b({type:"propertynotfound",context:{name:o}})}static shouldNeverHappen(){return new b({type:"shouldneverhappen"})}}class w{constructor(o,u,_){this.obj_=o,this.key_=u,this.presetKey_=_!=null?_:u}static isBindable(o){return!(o===null||typeof o!="object")}get key(){return this.key_}get presetKey(){return this.presetKey_}read(){return this.obj_[this.key_]}write(o){this.obj_[this.key_]=o}writeProperty(o,u){const _=this.read();if(!w.isBindable(_))throw b.notBindable();if(!(o in _))throw b.propertyNotFound(o);_[o]=u}}class x extends i{get label(){return this.controller_.props.get("label")}set label(o){this.controller_.props.set("label",o)}get title(){var o;return(o=this.controller_.valueController.props.get("title"))!==null&&o!==void 0?o:""}set title(o){this.controller_.valueController.props.set("title",o)}on(o,u){const _=u.bind(this);return this.controller_.valueController.emitter.on(o,()=>{_(new r(this))}),this}}class g{constructor(){this.observers_={}}on(o,u){let _=this.observers_[o];return _||(_=this.observers_[o]=[]),_.push({handler:u}),this}off(o,u){const _=this.observers_[o];return _&&(this.observers_[o]=_.filter(T=>T.handler!==u)),this}emit(o,u){const _=this.observers_[o];!_||_.forEach(T=>{T.handler(u)})}}const E="tp";function y(p){return(u,_)=>[E,"-",p,"v",u?`_${u}`:"",_?`-${_}`:""].join("")}function S(p,o){return u=>o(p(u))}function P(p){return p.rawValue}function C(p,o){p.emitter.on("change",S(P,o)),o(p.rawValue)}function A(p,o,u){C(p.value(o),u)}function D(p,o,u){u?p.classList.add(o):p.classList.remove(o)}function B(p,o){return u=>{D(p,o,u)}}function M(p,o){C(p,u=>{o.textContent=u!=null?u:""})}const R=y("btn");class z{constructor(o,u){this.element=o.createElement("div"),this.element.classList.add(R()),u.viewProps.bindClassModifiers(this.element);const _=o.createElement("button");_.classList.add(R("b")),u.viewProps.bindDisabled(_),this.element.appendChild(_),this.buttonElement=_;const T=o.createElement("div");T.classList.add(R("t")),M(u.props.value("title"),T),this.buttonElement.appendChild(T)}}class X{constructor(o,u){this.emitter=new g,this.onClick_=this.onClick_.bind(this),this.props=u.props,this.viewProps=u.viewProps,this.view=new z(o,{props:this.props,viewProps:this.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}onClick_(){this.emitter.emit("click",{sender:this})}}class F{constructor(o,u){var _;this.constraint_=u==null?void 0:u.constraint,this.equals_=(_=u==null?void 0:u.equals)!==null&&_!==void 0?_:(T,V)=>T===V,this.emitter=new g,this.rawValue_=o}get constraint(){return this.constraint_}get rawValue(){return this.rawValue_}set rawValue(o){this.setRawValue(o,{forceEmit:!1,last:!0})}setRawValue(o,u){const _=u!=null?u:{forceEmit:!1,last:!0},T=this.constraint_?this.constraint_.constrain(o):o;!!this.equals_(this.rawValue_,T)&&!_.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.rawValue_=T,this.emitter.emit("change",{options:_,rawValue:T,sender:this}))}}class G{constructor(o){this.emitter=new g,this.value_=o}get rawValue(){return this.value_}set rawValue(o){this.setRawValue(o,{forceEmit:!1,last:!0})}setRawValue(o,u){const _=u!=null?u:{forceEmit:!1,last:!0};this.value_===o&&!_.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.value_=o,this.emitter.emit("change",{options:_,rawValue:this.value_,sender:this}))}}function H(p,o){const u=o==null?void 0:o.constraint,_=o==null?void 0:o.equals;return!u&&!_?new G(p):new F(p,o)}class W{constructor(o){this.emitter=new g,this.valMap_=o;for(const u in this.valMap_)this.valMap_[u].emitter.on("change",()=>{this.emitter.emit("change",{key:u,sender:this})})}static createCore(o){return Object.keys(o).reduce((_,T)=>Object.assign(_,{[T]:H(o[T])}),{})}static fromObject(o){const u=this.createCore(o);return new W(u)}get(o){return this.valMap_[o].rawValue}set(o,u){this.valMap_[o].rawValue=u}value(o){return this.valMap_[o]}}function ee(p,o){const _=Object.keys(o).reduce((T,V)=>{if(T===void 0)return;const j=o[V],ue=j(p[V]);return ue.succeeded?Object.assign(Object.assign({},T),{[V]:ue.value}):void 0},{});return _}function Z(p,o){return p.reduce((u,_)=>{if(u===void 0)return;const T=o(_);if(!(!T.succeeded||T.value===void 0))return[...u,T.value]},[])}function se(p){return p===null?!1:typeof p=="object"}function ne(p){return o=>u=>{if(!o&&u===void 0)return{succeeded:!1,value:void 0};if(o&&u===void 0)return{succeeded:!0,value:void 0};const _=p(u);return _!==void 0?{succeeded:!0,value:_}:{succeeded:!1,value:void 0}}}function ve(p){return{custom:o=>ne(o)(p),boolean:ne(o=>typeof o=="boolean"?o:void 0)(p),number:ne(o=>typeof o=="number"?o:void 0)(p),string:ne(o=>typeof o=="string"?o:void 0)(p),function:ne(o=>typeof o=="function"?o:void 0)(p),constant:o=>ne(u=>u===o?o:void 0)(p),raw:ne(o=>o)(p),object:o=>ne(u=>{if(!!se(u))return ee(u,o)})(p),array:o=>ne(u=>{if(!!Array.isArray(u))return Z(u,o)})(p)}}const fe={optional:ve(!0),required:ve(!1)};function K(p,o){const u=fe.required.object(o)(p);return u.succeeded?u.value:void 0}function ie(p){return p&&p.parentElement&&p.parentElement.removeChild(p),null}function we(){return["veryfirst","first","last","verylast"]}const Le=y(""),Ie={veryfirst:"vfst",first:"fst",last:"lst",verylast:"vlst"};class Ee{constructor(o){this.parent_=null,this.blade=o.blade,this.view=o.view,this.viewProps=o.viewProps;const u=this.view.element;this.blade.value("positions").emitter.on("change",()=>{we().forEach(_=>{u.classList.remove(Le(void 0,Ie[_]))}),this.blade.get("positions").forEach(_=>{u.classList.add(Le(void 0,Ie[_]))})}),this.viewProps.handleDispose(()=>{ie(u)})}get parent(){return this.parent_}}const He="http://www.w3.org/2000/svg";function Be(p){p.offsetHeight}function q(p,o){const u=p.style.transition;p.style.transition="none",o(),p.style.transition=u}function It(p){return p.ontouchstart!==void 0}function Ae(){return new Function("return this")()}function Ge(){return Ae().document}function Ce(p){const o=p.ownerDocument.defaultView;return o&&"document"in o?p.getContext("2d"):null}const bt={check:'<path d="M2 8l4 4l8 -8"/>',dropdown:'<path d="M5 7h6l-3 3 z"/>',p2dpad:'<path d="M8 4v8"/><path d="M4 8h8"/><circle cx="12" cy="12" r="1.2"/>'};function je(p,o){const u=p.createElementNS(He,"svg");return u.innerHTML=bt[o],u}function U(p,o,u){p.insertBefore(o,p.children[u])}function L(p){p.parentElement&&p.parentElement.removeChild(p)}function $(p){for(;p.children.length>0;)p.removeChild(p.children[0])}function he(p){for(;p.childNodes.length>0;)p.removeChild(p.childNodes[0])}function ae(p){return p.relatedTarget?p.relatedTarget:"explicitOriginalTarget"in p?p.explicitOriginalTarget:null}const ce=y("lbl");function Se(p,o){const u=p.createDocumentFragment();return o.split(`
`).map(T=>p.createTextNode(T)).forEach((T,V)=>{V>0&&u.appendChild(p.createElement("br")),u.appendChild(T)}),u}class ge{constructor(o,u){this.element=o.createElement("div"),this.element.classList.add(ce()),u.viewProps.bindClassModifiers(this.element);const _=o.createElement("div");_.classList.add(ce("l")),A(u.props,"label",V=>{f(V)?this.element.classList.add(ce(void 0,"nol")):(this.element.classList.remove(ce(void 0,"nol")),he(_),_.appendChild(Se(o,V)))}),this.element.appendChild(_),this.labelElement=_;const T=o.createElement("div");T.classList.add(ce("v")),this.element.appendChild(T),this.valueElement=T}}class be extends Ee{constructor(o,u){const _=u.valueController.viewProps;super(Object.assign(Object.assign({},u),{view:new ge(o,{props:u.props,viewProps:_}),viewProps:_})),this.props=u.props,this.valueController=u.valueController,this.view.valueElement.appendChild(this.valueController.view.element)}}const Oe={id:"button",type:"blade",accept(p){const o=fe,u=K(p,{title:o.required.string,view:o.required.constant("button"),label:o.optional.string});return u?{params:u}:null},controller(p){return new be(p.document,{blade:p.blade,props:W.fromObject({label:p.params.label}),valueController:new X(p.document,{props:W.fromObject({title:p.params.title}),viewProps:p.viewProps})})},api(p){return!(p.controller instanceof be)||!(p.controller.valueController instanceof X)?null:new x(p.controller)}};class ze extends Ee{constructor(o){super(o),this.value=o.value}}function oe(){return new W({positions:H([],{equals:m})})}class st extends W{constructor(o){super(o)}static create(o){const u={completed:!0,expanded:o,expandedHeight:null,shouldFixHeight:!1,temporaryExpanded:null},_=W.createCore(u);return new st(_)}get styleExpanded(){var o;return(o=this.get("temporaryExpanded"))!==null&&o!==void 0?o:this.get("expanded")}get styleHeight(){if(!this.styleExpanded)return"0";const o=this.get("expandedHeight");return this.get("shouldFixHeight")&&!f(o)?`${o}px`:"auto"}bindExpandedClass(o,u){const _=()=>{this.styleExpanded?o.classList.add(u):o.classList.remove(u)};A(this,"expanded",_),A(this,"temporaryExpanded",_)}cleanUpTransition(){this.set("shouldFixHeight",!1),this.set("expandedHeight",null),this.set("completed",!0)}}function Je(p,o){let u=0;return q(o,()=>{p.set("expandedHeight",null),p.set("temporaryExpanded",!0),Be(o),u=o.clientHeight,p.set("temporaryExpanded",null),Be(o)}),u}function We(p,o){o.style.height=p.styleHeight}function Pe(p,o){p.value("expanded").emitter.on("beforechange",()=>{p.set("completed",!1),f(p.get("expandedHeight"))&&p.set("expandedHeight",Je(p,o)),p.set("shouldFixHeight",!0),Be(o)}),p.emitter.on("change",()=>{We(p,o)}),We(p,o),o.addEventListener("transitionend",u=>{u.propertyName==="height"&&p.cleanUpTransition()})}class xe extends i{constructor(o,u){super(o),this.rackApi_=u}}function $e(p,o){return p.addBlade(Object.assign(Object.assign({},o),{view:"button"}))}function k(p,o){return p.addBlade(Object.assign(Object.assign({},o),{view:"folder"}))}function de(p,o){const u=o!=null?o:{};return p.addBlade(Object.assign(Object.assign({},u),{view:"separator"}))}function _e(p,o){return p.addBlade(Object.assign(Object.assign({},o),{view:"tab"}))}class Re{constructor(o){this.emitter=new g,this.items_=[],this.cache_=new Set,this.onSubListAdd_=this.onSubListAdd_.bind(this),this.onSubListRemove_=this.onSubListRemove_.bind(this),this.extract_=o}get items(){return this.items_}allItems(){return Array.from(this.cache_)}find(o){for(const u of this.allItems())if(o(u))return u;return null}includes(o){return this.cache_.has(o)}add(o,u){if(this.includes(o))throw b.shouldNeverHappen();const _=u!==void 0?u:this.items_.length;this.items_.splice(_,0,o),this.cache_.add(o);const T=this.extract_(o);T&&(T.emitter.on("add",this.onSubListAdd_),T.emitter.on("remove",this.onSubListRemove_),T.allItems().forEach(V=>{this.cache_.add(V)})),this.emitter.emit("add",{index:_,item:o,root:this,target:this})}remove(o){const u=this.items_.indexOf(o);if(u<0)return;this.items_.splice(u,1),this.cache_.delete(o);const _=this.extract_(o);_&&(_.emitter.off("add",this.onSubListAdd_),_.emitter.off("remove",this.onSubListRemove_)),this.emitter.emit("remove",{index:u,item:o,root:this,target:this})}onSubListAdd_(o){this.cache_.add(o.item),this.emitter.emit("add",{index:o.index,item:o.item,root:this,target:o.target})}onSubListRemove_(o){this.cache_.delete(o.item),this.emitter.emit("remove",{index:o.index,item:o.item,root:this,target:o.target})}}class O extends i{constructor(o){super(o),this.onBindingChange_=this.onBindingChange_.bind(this),this.emitter_=new g,this.controller_.binding.emitter.on("change",this.onBindingChange_)}get label(){return this.controller_.props.get("label")}set label(o){this.controller_.props.set("label",o)}on(o,u){const _=u.bind(this);return this.emitter_.on(o,T=>{_(T.event)}),this}refresh(){this.controller_.binding.read()}onBindingChange_(o){const u=o.sender.target.read();this.emitter_.emit("change",{event:new a(this,u,this.controller_.binding.target.presetKey,o.options.last)})}}class re extends be{constructor(o,u){super(o,u),this.binding=u.binding}}class le extends i{constructor(o){super(o),this.onBindingUpdate_=this.onBindingUpdate_.bind(this),this.emitter_=new g,this.controller_.binding.emitter.on("update",this.onBindingUpdate_)}get label(){return this.controller_.props.get("label")}set label(o){this.controller_.props.set("label",o)}on(o,u){const _=u.bind(this);return this.emitter_.on(o,T=>{_(T.event)}),this}refresh(){this.controller_.binding.read()}onBindingUpdate_(o){const u=o.sender.target.read();this.emitter_.emit("update",{event:new l(this,u,this.controller_.binding.target.presetKey)})}}class Me extends be{constructor(o,u){super(o,u),this.binding=u.binding,this.viewProps.bindDisabled(this.binding.ticker),this.viewProps.handleDispose(()=>{this.binding.dispose()})}}function Ue(p){return p instanceof ct?p.apiSet_:p instanceof xe?p.rackApi_.apiSet_:null}function nt(p,o){const u=p.find(_=>_.controller_===o);if(!u)throw b.shouldNeverHappen();return u}function tt(p,o,u){if(!w.isBindable(p))throw b.notBindable();return new w(p,o,u)}class ct extends i{constructor(o,u){super(o),this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this),this.onRackInputChange_=this.onRackInputChange_.bind(this),this.onRackMonitorUpdate_=this.onRackMonitorUpdate_.bind(this),this.emitter_=new g,this.apiSet_=new Re(Ue),this.pool_=u;const _=this.controller_.rack;_.emitter.on("add",this.onRackAdd_),_.emitter.on("remove",this.onRackRemove_),_.emitter.on("inputchange",this.onRackInputChange_),_.emitter.on("monitorupdate",this.onRackMonitorUpdate_),_.children.forEach(T=>{this.setUpApi_(T)})}get children(){return this.controller_.rack.children.map(o=>nt(this.apiSet_,o))}addInput(o,u,_){const T=_!=null?_:{},V=this.controller_.view.element.ownerDocument,j=this.pool_.createInput(V,tt(o,u,T.presetKey),T),ue=new O(j);return this.add(ue,T.index)}addMonitor(o,u,_){const T=_!=null?_:{},V=this.controller_.view.element.ownerDocument,j=this.pool_.createMonitor(V,tt(o,u),T),ue=new le(j);return this.add(ue,T.index)}addFolder(o){return k(this,o)}addButton(o){return $e(this,o)}addSeparator(o){return de(this,o)}addTab(o){return _e(this,o)}add(o,u){this.controller_.rack.add(o.controller_,u);const _=this.apiSet_.find(T=>T.controller_===o.controller_);return _&&this.apiSet_.remove(_),this.apiSet_.add(o),o}remove(o){this.controller_.rack.remove(o.controller_)}addBlade(o){const u=this.controller_.view.element.ownerDocument,_=this.pool_.createBlade(u,o),T=this.pool_.createBladeApi(_);return this.add(T,o.index)}on(o,u){const _=u.bind(this);return this.emitter_.on(o,T=>{_(T.event)}),this}setUpApi_(o){this.apiSet_.find(_=>_.controller_===o)||this.apiSet_.add(this.pool_.createBladeApi(o))}onRackAdd_(o){this.setUpApi_(o.bladeController)}onRackRemove_(o){if(o.isRoot){const u=nt(this.apiSet_,o.bladeController);this.apiSet_.remove(u)}}onRackInputChange_(o){const u=o.bladeController;if(u instanceof re){const _=nt(this.apiSet_,u),T=u.binding;this.emitter_.emit("change",{event:new a(_,T.target.read(),T.target.presetKey,o.options.last)})}else if(u instanceof ze){const _=nt(this.apiSet_,u);this.emitter_.emit("change",{event:new a(_,u.value.rawValue,void 0,o.options.last)})}}onRackMonitorUpdate_(o){if(!(o.bladeController instanceof Me))throw b.shouldNeverHappen();const u=nt(this.apiSet_,o.bladeController),_=o.bladeController.binding;this.emitter_.emit("update",{event:new l(u,_.target.read(),_.target.presetKey)})}}class Bt extends xe{constructor(o,u){super(o,new ct(o.rackController,u)),this.emitter_=new g,this.controller_.foldable.value("expanded").emitter.on("change",_=>{this.emitter_.emit("fold",{event:new c(this,_.sender.rawValue)})}),this.rackApi_.on("change",_=>{this.emitter_.emit("change",{event:_})}),this.rackApi_.on("update",_=>{this.emitter_.emit("update",{event:_})})}get expanded(){return this.controller_.foldable.get("expanded")}set expanded(o){this.controller_.foldable.set("expanded",o)}get title(){return this.controller_.props.get("title")}set title(o){this.controller_.props.set("title",o)}get children(){return this.rackApi_.children}addInput(o,u,_){return this.rackApi_.addInput(o,u,_)}addMonitor(o,u,_){return this.rackApi_.addMonitor(o,u,_)}addFolder(o){return this.rackApi_.addFolder(o)}addButton(o){return this.rackApi_.addButton(o)}addSeparator(o){return this.rackApi_.addSeparator(o)}addTab(o){return this.rackApi_.addTab(o)}add(o,u){return this.rackApi_.add(o,u)}remove(o){this.rackApi_.remove(o)}addBlade(o){return this.rackApi_.addBlade(o)}on(o,u){const _=u.bind(this);return this.emitter_.on(o,T=>{_(T.event)}),this}}class ot extends Ee{constructor(o){super({blade:o.blade,view:o.view,viewProps:o.rackController.viewProps}),this.rackController=o.rackController}}class Dt{constructor(o,u){const _=y(u.viewName);this.element=o.createElement("div"),this.element.classList.add(_()),u.viewProps.bindClassModifiers(this.element)}}function nn(p,o){for(let u=0;u<p.length;u++){const _=p[u];if(_ instanceof re&&_.binding===o)return _}return null}function No(p,o){for(let u=0;u<p.length;u++){const _=p[u];if(_ instanceof Me&&_.binding===o)return _}return null}function dl(p,o){for(let u=0;u<p.length;u++){const _=p[u];if(_ instanceof ze&&_.value===o)return _}return null}function Ci(p){return p instanceof Pi?p.rack:p instanceof ot?p.rackController.rack:null}function Uo(p){const o=Ci(p);return o?o.bcSet_:null}class As{constructor(o){var u;this.onBladePositionsChange_=this.onBladePositionsChange_.bind(this),this.onSetAdd_=this.onSetAdd_.bind(this),this.onSetRemove_=this.onSetRemove_.bind(this),this.onChildDispose_=this.onChildDispose_.bind(this),this.onChildPositionsChange_=this.onChildPositionsChange_.bind(this),this.onChildInputChange_=this.onChildInputChange_.bind(this),this.onChildMonitorUpdate_=this.onChildMonitorUpdate_.bind(this),this.onChildValueChange_=this.onChildValueChange_.bind(this),this.onChildViewPropsChange_=this.onChildViewPropsChange_.bind(this),this.onDescendantLayout_=this.onDescendantLayout_.bind(this),this.onDescendantInputChange_=this.onDescendantInputChange_.bind(this),this.onDescendantMonitorUpdate_=this.onDescendantMonitorUpdate_.bind(this),this.emitter=new g,this.blade_=o!=null?o:null,(u=this.blade_)===null||u===void 0||u.value("positions").emitter.on("change",this.onBladePositionsChange_),this.bcSet_=new Re(Uo),this.bcSet_.emitter.on("add",this.onSetAdd_),this.bcSet_.emitter.on("remove",this.onSetRemove_)}get children(){return this.bcSet_.items}add(o,u){o.parent&&o.parent.remove(o),o.parent_=this,this.bcSet_.add(o,u)}remove(o){o.parent_=null,this.bcSet_.remove(o)}find(o){return this.bcSet_.allItems().filter(u=>u instanceof o)}onSetAdd_(o){this.updatePositions_();const u=o.target===o.root;if(this.emitter.emit("add",{bladeController:o.item,index:o.index,isRoot:u,sender:this}),!u)return;const _=o.item;if(_.viewProps.emitter.on("change",this.onChildViewPropsChange_),_.blade.value("positions").emitter.on("change",this.onChildPositionsChange_),_.viewProps.handleDispose(this.onChildDispose_),_ instanceof re)_.binding.emitter.on("change",this.onChildInputChange_);else if(_ instanceof Me)_.binding.emitter.on("update",this.onChildMonitorUpdate_);else if(_ instanceof ze)_.value.emitter.on("change",this.onChildValueChange_);else{const T=Ci(_);if(T){const V=T.emitter;V.on("layout",this.onDescendantLayout_),V.on("inputchange",this.onDescendantInputChange_),V.on("monitorupdate",this.onDescendantMonitorUpdate_)}}}onSetRemove_(o){this.updatePositions_();const u=o.target===o.root;if(this.emitter.emit("remove",{bladeController:o.item,isRoot:u,sender:this}),!u)return;const _=o.item;if(_ instanceof re)_.binding.emitter.off("change",this.onChildInputChange_);else if(_ instanceof Me)_.binding.emitter.off("update",this.onChildMonitorUpdate_);else if(_ instanceof ze)_.value.emitter.off("change",this.onChildValueChange_);else{const T=Ci(_);if(T){const V=T.emitter;V.off("layout",this.onDescendantLayout_),V.off("inputchange",this.onDescendantInputChange_),V.off("monitorupdate",this.onDescendantMonitorUpdate_)}}}updatePositions_(){const o=this.bcSet_.items.filter(T=>!T.viewProps.get("hidden")),u=o[0],_=o[o.length-1];this.bcSet_.items.forEach(T=>{const V=[];T===u&&(V.push("first"),(!this.blade_||this.blade_.get("positions").includes("veryfirst"))&&V.push("veryfirst")),T===_&&(V.push("last"),(!this.blade_||this.blade_.get("positions").includes("verylast"))&&V.push("verylast")),T.blade.set("positions",V)})}onChildPositionsChange_(){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildViewPropsChange_(o){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildDispose_(){this.bcSet_.items.filter(u=>u.viewProps.get("disposed")).forEach(u=>{this.bcSet_.remove(u)})}onChildInputChange_(o){const u=nn(this.find(re),o.sender);if(!u)throw b.shouldNeverHappen();this.emitter.emit("inputchange",{bladeController:u,options:o.options,sender:this})}onChildMonitorUpdate_(o){const u=No(this.find(Me),o.sender);if(!u)throw b.shouldNeverHappen();this.emitter.emit("monitorupdate",{bladeController:u,sender:this})}onChildValueChange_(o){const u=dl(this.find(ze),o.sender);if(!u)throw b.shouldNeverHappen();this.emitter.emit("inputchange",{bladeController:u,options:o.options,sender:this})}onDescendantLayout_(o){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onDescendantInputChange_(o){this.emitter.emit("inputchange",{bladeController:o.bladeController,options:o.options,sender:this})}onDescendantMonitorUpdate_(o){this.emitter.emit("monitorupdate",{bladeController:o.bladeController,sender:this})}onBladePositionsChange_(){this.updatePositions_()}}class Pi extends Ee{constructor(o,u){super(Object.assign(Object.assign({},u),{view:new Dt(o,{viewName:"brk",viewProps:u.viewProps})})),this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this);const _=new As(u.root?void 0:u.blade);_.emitter.on("add",this.onRackAdd_),_.emitter.on("remove",this.onRackRemove_),this.rack=_,this.viewProps.handleDispose(()=>{for(let T=this.rack.children.length-1;T>=0;T--)this.rack.children[T].viewProps.set("disposed",!0)})}onRackAdd_(o){!o.isRoot||U(this.view.element,o.bladeController.view.element,o.index)}onRackRemove_(o){!o.isRoot||L(o.bladeController.view.element)}}const Or=y("cnt");class pl{constructor(o,u){var _;this.className_=y((_=u.viewName)!==null&&_!==void 0?_:"fld"),this.element=o.createElement("div"),this.element.classList.add(this.className_(),Or()),u.viewProps.bindClassModifiers(this.element),this.foldable_=u.foldable,this.foldable_.bindExpandedClass(this.element,this.className_(void 0,"expanded")),A(this.foldable_,"completed",B(this.element,this.className_(void 0,"cpl")));const T=o.createElement("button");T.classList.add(this.className_("b")),A(u.props,"title",Ne=>{f(Ne)?this.element.classList.add(this.className_(void 0,"not")):this.element.classList.remove(this.className_(void 0,"not"))}),u.viewProps.bindDisabled(T),this.element.appendChild(T),this.buttonElement=T;const V=o.createElement("div");V.classList.add(this.className_("t")),M(u.props.value("title"),V),this.buttonElement.appendChild(V),this.titleElement=V;const j=o.createElement("div");j.classList.add(this.className_("m")),this.buttonElement.appendChild(j);const ue=u.containerElement;ue.classList.add(this.className_("c")),this.element.appendChild(ue),this.containerElement=ue}}class Br extends ot{constructor(o,u){var _;const T=st.create((_=u.expanded)!==null&&_!==void 0?_:!0),V=new Pi(o,{blade:u.blade,root:u.root,viewProps:u.viewProps});super(Object.assign(Object.assign({},u),{rackController:V,view:new pl(o,{containerElement:V.view.element,foldable:T,props:u.props,viewName:u.root?"rot":void 0,viewProps:u.viewProps})})),this.onTitleClick_=this.onTitleClick_.bind(this),this.props=u.props,this.foldable=T,Pe(this.foldable,this.view.containerElement),this.rackController.rack.emitter.on("add",()=>{this.foldable.cleanUpTransition()}),this.rackController.rack.emitter.on("remove",()=>{this.foldable.cleanUpTransition()}),this.view.buttonElement.addEventListener("click",this.onTitleClick_)}get document(){return this.view.element.ownerDocument}onTitleClick_(){this.foldable.set("expanded",!this.foldable.get("expanded"))}}const fl={id:"folder",type:"blade",accept(p){const o=fe,u=K(p,{title:o.required.string,view:o.required.constant("folder"),expanded:o.optional.boolean});return u?{params:u}:null},controller(p){return new Br(p.document,{blade:p.blade,expanded:p.params.expanded,props:W.fromObject({title:p.params.title}),viewProps:p.viewProps})},api(p){return p.controller instanceof Br?new Bt(p.controller,p.pool):null}};class N extends ze{constructor(o,u){const _=u.valueController.viewProps;super(Object.assign(Object.assign({},u),{value:u.valueController.value,view:new ge(o,{props:u.props,viewProps:_}),viewProps:_})),this.props=u.props,this.valueController=u.valueController,this.view.valueElement.appendChild(this.valueController.view.element)}}class Y extends i{}const J=y("spr");class te{constructor(o,u){this.element=o.createElement("div"),this.element.classList.add(J()),u.viewProps.bindClassModifiers(this.element);const _=o.createElement("hr");_.classList.add(J("r")),this.element.appendChild(_)}}class Q extends Ee{constructor(o,u){super(Object.assign(Object.assign({},u),{view:new te(o,{viewProps:u.viewProps})}))}}const ye={id:"separator",type:"blade",accept(p){const u=K(p,{view:fe.required.constant("separator")});return u?{params:u}:null},controller(p){return new Q(p.document,{blade:p.blade,viewProps:p.viewProps})},api(p){return p.controller instanceof Q?new Y(p.controller):null}},De=y("");function ke(p,o){return B(p,De(void 0,o))}class Fe extends W{constructor(o){super(o)}static create(o){var u,_;const T=o!=null?o:{},V={disabled:(u=T.disabled)!==null&&u!==void 0?u:!1,disposed:!1,hidden:(_=T.hidden)!==null&&_!==void 0?_:!1},j=W.createCore(V);return new Fe(j)}bindClassModifiers(o){A(this,"disabled",ke(o,"disabled")),A(this,"hidden",ke(o,"hidden"))}bindDisabled(o){A(this,"disabled",u=>{o.disabled=u})}bindTabIndex(o){A(this,"disabled",u=>{o.tabIndex=u?-1:0})}handleDispose(o){this.value("disposed").emitter.on("change",u=>{u&&o()})}}const qe=y("tbi");class Ke{constructor(o,u){this.element=o.createElement("div"),this.element.classList.add(qe()),u.viewProps.bindClassModifiers(this.element),A(u.props,"selected",V=>{V?this.element.classList.add(qe(void 0,"sel")):this.element.classList.remove(qe(void 0,"sel"))});const _=o.createElement("button");_.classList.add(qe("b")),u.viewProps.bindDisabled(_),this.element.appendChild(_),this.buttonElement=_;const T=o.createElement("div");T.classList.add(qe("t")),M(u.props.value("title"),T),this.buttonElement.appendChild(T),this.titleElement=T}}class Ze{constructor(o,u){this.emitter=new g,this.onClick_=this.onClick_.bind(this),this.props=u.props,this.viewProps=u.viewProps,this.view=new Ke(o,{props:u.props,viewProps:u.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}onClick_(){this.emitter.emit("click",{sender:this})}}class Pt{constructor(o,u){this.onItemClick_=this.onItemClick_.bind(this),this.ic_=new Ze(o,{props:u.itemProps,viewProps:Fe.create()}),this.ic_.emitter.on("click",this.onItemClick_),this.cc_=new Pi(o,{blade:oe(),viewProps:Fe.create()}),this.props=u.props,A(this.props,"selected",_=>{this.itemController.props.set("selected",_),this.contentController.viewProps.set("hidden",!_)})}get itemController(){return this.ic_}get contentController(){return this.cc_}onItemClick_(){this.props.set("selected",!0)}}class on{constructor(o,u){this.controller_=o,this.rackApi_=u}get title(){var o;return(o=this.controller_.itemController.props.get("title"))!==null&&o!==void 0?o:""}set title(o){this.controller_.itemController.props.set("title",o)}get selected(){return this.controller_.props.get("selected")}set selected(o){this.controller_.props.set("selected",o)}get children(){return this.rackApi_.children}addButton(o){return this.rackApi_.addButton(o)}addFolder(o){return this.rackApi_.addFolder(o)}addSeparator(o){return this.rackApi_.addSeparator(o)}addTab(o){return this.rackApi_.addTab(o)}add(o,u){this.rackApi_.add(o,u)}remove(o){this.rackApi_.remove(o)}addInput(o,u,_){return this.rackApi_.addInput(o,u,_)}addMonitor(o,u,_){return this.rackApi_.addMonitor(o,u,_)}addBlade(o){return this.rackApi_.addBlade(o)}}class kt extends xe{constructor(o,u){super(o,new ct(o.rackController,u)),this.onPageAdd_=this.onPageAdd_.bind(this),this.onPageRemove_=this.onPageRemove_.bind(this),this.onSelect_=this.onSelect_.bind(this),this.emitter_=new g,this.pageApiMap_=new Map,this.rackApi_.on("change",_=>{this.emitter_.emit("change",{event:_})}),this.rackApi_.on("update",_=>{this.emitter_.emit("update",{event:_})}),this.controller_.tab.selectedIndex.emitter.on("change",this.onSelect_),this.controller_.pageSet.emitter.on("add",this.onPageAdd_),this.controller_.pageSet.emitter.on("remove",this.onPageRemove_),this.controller_.pageSet.items.forEach(_=>{this.setUpPageApi_(_)})}get pages(){return this.controller_.pageSet.items.map(o=>{const u=this.pageApiMap_.get(o);if(!u)throw b.shouldNeverHappen();return u})}addPage(o){const u=this.controller_.view.element.ownerDocument,_=new Pt(u,{itemProps:W.fromObject({selected:!1,title:o.title}),props:W.fromObject({selected:!1})});this.controller_.add(_,o.index);const T=this.pageApiMap_.get(_);if(!T)throw b.shouldNeverHappen();return T}removePage(o){this.controller_.remove(o)}on(o,u){const _=u.bind(this);return this.emitter_.on(o,T=>{_(T.event)}),this}setUpPageApi_(o){const u=this.rackApi_.apiSet_.find(T=>T.controller_===o.contentController);if(!u)throw b.shouldNeverHappen();const _=new on(o,u);this.pageApiMap_.set(o,_)}onPageAdd_(o){this.setUpPageApi_(o.item)}onPageRemove_(o){if(!this.pageApiMap_.get(o.item))throw b.shouldNeverHappen();this.pageApiMap_.delete(o.item)}onSelect_(o){this.emitter_.emit("select",{event:new h(this,o.rawValue)})}}const Pn=-1;class Et{constructor(){this.onItemSelectedChange_=this.onItemSelectedChange_.bind(this),this.empty=H(!0),this.selectedIndex=H(Pn),this.items_=[]}add(o,u){const _=u!=null?u:this.items_.length;this.items_.splice(_,0,o),o.emitter.on("change",this.onItemSelectedChange_),this.keepSelection_()}remove(o){const u=this.items_.indexOf(o);u<0||(this.items_.splice(u,1),o.emitter.off("change",this.onItemSelectedChange_),this.keepSelection_())}keepSelection_(){if(this.items_.length===0){this.selectedIndex.rawValue=Pn,this.empty.rawValue=!0;return}const o=this.items_.findIndex(u=>u.rawValue);o<0?(this.items_.forEach((u,_)=>{u.rawValue=_===0}),this.selectedIndex.rawValue=0):(this.items_.forEach((u,_)=>{u.rawValue=_===o}),this.selectedIndex.rawValue=o),this.empty.rawValue=!1}onItemSelectedChange_(o){if(o.rawValue){const u=this.items_.findIndex(_=>_===o.sender);this.items_.forEach((_,T)=>{_.rawValue=T===u}),this.selectedIndex.rawValue=u}else this.keepSelection_()}}const Qe=y("tab");class kr{constructor(o,u){this.element=o.createElement("div"),this.element.classList.add(Qe(),Or()),u.viewProps.bindClassModifiers(this.element),C(u.empty,B(this.element,Qe(void 0,"nop")));const _=o.createElement("div");_.classList.add(Qe("i")),this.element.appendChild(_),this.itemsElement=_;const T=u.contentsElement;T.classList.add(Qe("c")),this.element.appendChild(T),this.contentsElement=T}}class Mt extends ot{constructor(o,u){const _=new Pi(o,{blade:u.blade,viewProps:u.viewProps}),T=new Et;super({blade:u.blade,rackController:_,view:new kr(o,{contentsElement:_.view.element,empty:T.empty,viewProps:u.viewProps})}),this.onPageAdd_=this.onPageAdd_.bind(this),this.onPageRemove_=this.onPageRemove_.bind(this),this.pageSet_=new Re(()=>null),this.pageSet_.emitter.on("add",this.onPageAdd_),this.pageSet_.emitter.on("remove",this.onPageRemove_),this.tab=T}get pageSet(){return this.pageSet_}add(o,u){this.pageSet_.add(o,u)}remove(o){this.pageSet_.remove(this.pageSet_.items[o])}onPageAdd_(o){const u=o.item;U(this.view.itemsElement,u.itemController.view.element,o.index),this.rackController.rack.add(u.contentController,o.index),this.tab.add(u.props.value("selected"))}onPageRemove_(o){const u=o.item;L(u.itemController.view.element),this.rackController.rack.remove(u.contentController),this.tab.remove(u.props.value("selected"))}}const $n={id:"tab",type:"blade",accept(p){const o=fe,u=K(p,{pages:o.required.array(o.required.object({title:o.required.string})),view:o.required.constant("tab")});return!u||u.pages.length===0?null:{params:u}},controller(p){const o=new Mt(p.document,{blade:p.blade,viewProps:p.viewProps});return p.params.pages.forEach(u=>{const _=new Pt(p.document,{itemProps:W.fromObject({selected:!1,title:u.title}),props:W.fromObject({selected:!1})});o.add(_)}),o},api(p){return p.controller instanceof Mt?new kt(p.controller,p.pool):null}};function Fo(p,o){const u=p.accept(o.params);if(!u)return null;const _=fe.optional.boolean(o.params.disabled).value,T=fe.optional.boolean(o.params.hidden).value;return p.controller({blade:oe(),document:o.document,params:Object.assign(Object.assign({},u.params),{disabled:_,hidden:T}),viewProps:Fe.create({disabled:_,hidden:T})})}class es{constructor(){this.disabled=!1,this.emitter=new g}dispose(){}tick(){this.disabled||this.emitter.emit("tick",{sender:this})}}class Vr{constructor(o,u){this.disabled_=!1,this.timerId_=null,this.onTick_=this.onTick_.bind(this),this.doc_=o,this.emitter=new g,this.interval_=u,this.setTimer_()}get disabled(){return this.disabled_}set disabled(o){this.disabled_=o,this.disabled_?this.clearTimer_():this.setTimer_()}dispose(){this.clearTimer_()}clearTimer_(){if(this.timerId_===null)return;const o=this.doc_.defaultView;o&&o.clearInterval(this.timerId_),this.timerId_=null}setTimer_(){if(this.clearTimer_(),this.interval_<=0)return;const o=this.doc_.defaultView;o&&(this.timerId_=o.setInterval(this.onTick_,this.interval_))}onTick_(){this.disabled_||this.emitter.emit("tick",{sender:this})}}class Ot{constructor(o){this.constraints=o}constrain(o){return this.constraints.reduce((u,_)=>_.constrain(u),o)}}function Qt(p,o){if(p instanceof o)return p;if(p instanceof Ot){const u=p.constraints.reduce((_,T)=>_||(T instanceof o?T:null),null);if(u)return u}return null}class li{constructor(o){this.options=o}constrain(o){const u=this.options;return u.length===0||u.filter(T=>T.value===o).length>0?o:u[0].value}}class qt{constructor(o){this.maxValue=o.max,this.minValue=o.min}constrain(o){let u=o;return f(this.minValue)||(u=Math.max(u,this.minValue)),f(this.maxValue)||(u=Math.min(u,this.maxValue)),u}}class Ri{constructor(o,u=0){this.step=o,this.origin=u}constrain(o){const u=this.origin%this.step,_=Math.round((o-u)/this.step);return u+_*this.step}}const zr=y("lst");class Oo{constructor(o,u){this.onValueChange_=this.onValueChange_.bind(this),this.props_=u.props,this.element=o.createElement("div"),this.element.classList.add(zr()),u.viewProps.bindClassModifiers(this.element);const _=o.createElement("select");_.classList.add(zr("s")),A(this.props_,"options",V=>{$(_),V.forEach((j,ue)=>{const Ne=o.createElement("option");Ne.dataset.index=String(ue),Ne.textContent=j.text,Ne.value=String(j.value),_.appendChild(Ne)})}),u.viewProps.bindDisabled(_),this.element.appendChild(_),this.selectElement=_;const T=o.createElement("div");T.classList.add(zr("m")),T.appendChild(je(o,"dropdown")),this.element.appendChild(T),u.value.emitter.on("change",this.onValueChange_),this.value_=u.value,this.update_()}update_(){this.selectElement.value=String(this.value_.rawValue)}onValueChange_(){this.update_()}}class Hr{constructor(o,u){this.onSelectChange_=this.onSelectChange_.bind(this),this.props=u.props,this.value=u.value,this.viewProps=u.viewProps,this.view=new Oo(o,{props:this.props,value:this.value,viewProps:this.viewProps}),this.view.selectElement.addEventListener("change",this.onSelectChange_)}onSelectChange_(o){const _=o.currentTarget.selectedOptions.item(0);if(!_)return;const T=Number(_.dataset.index);this.value.rawValue=this.props.get("options")[T].value}}const Ku=y("pop");class Jm{constructor(o,u){this.element=o.createElement("div"),this.element.classList.add(Ku()),u.viewProps.bindClassModifiers(this.element),C(u.shows,B(this.element,Ku(void 0,"v")))}}class $u{constructor(o,u){this.shows=H(!1),this.viewProps=u.viewProps,this.view=new Jm(o,{shows:this.shows,viewProps:this.viewProps})}}const Zu=y("txt");class eg{constructor(o,u){this.onChange_=this.onChange_.bind(this),this.element=o.createElement("div"),this.element.classList.add(Zu()),u.viewProps.bindClassModifiers(this.element),this.props_=u.props,this.props_.emitter.on("change",this.onChange_);const _=o.createElement("input");_.classList.add(Zu("i")),_.type="text",u.viewProps.bindDisabled(_),this.element.appendChild(_),this.inputElement=_,u.value.emitter.on("change",this.onChange_),this.value_=u.value,this.refresh()}refresh(){const o=this.props_.get("formatter");this.inputElement.value=o(this.value_.rawValue)}onChange_(){this.refresh()}}class Bo{constructor(o,u){this.onInputChange_=this.onInputChange_.bind(this),this.parser_=u.parser,this.props=u.props,this.value=u.value,this.viewProps=u.viewProps,this.view=new eg(o,{props:u.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_)}onInputChange_(o){const _=o.currentTarget.value,T=this.parser_(_);f(T)||(this.value.rawValue=T),this.view.refresh()}}function tg(p){return String(p)}function Qu(p){return p==="false"?!1:!!p}function Ju(p){return tg(p)}class ng{constructor(o){this.text=o}evaluate(){return Number(this.text)}toString(){return this.text}}const ig={"**":(p,o)=>Math.pow(p,o),"*":(p,o)=>p*o,"/":(p,o)=>p/o,"%":(p,o)=>p%o,"+":(p,o)=>p+o,"-":(p,o)=>p-o,"<<":(p,o)=>p<<o,">>":(p,o)=>p>>o,">>>":(p,o)=>p>>>o,"&":(p,o)=>p&o,"^":(p,o)=>p^o,"|":(p,o)=>p|o};class sg{constructor(o,u,_){this.left=u,this.operator=o,this.right=_}evaluate(){const o=ig[this.operator];if(!o)throw new Error(`unexpected binary operator: '${this.operator}`);return o(this.left.evaluate(),this.right.evaluate())}toString(){return["b(",this.left.toString(),this.operator,this.right.toString(),")"].join(" ")}}const rg={"+":p=>p,"-":p=>-p,"~":p=>~p};class og{constructor(o,u){this.operator=o,this.expression=u}evaluate(){const o=rg[this.operator];if(!o)throw new Error(`unexpected unary operator: '${this.operator}`);return o(this.expression.evaluate())}toString(){return["u(",this.operator,this.expression.toString(),")"].join(" ")}}function ml(p){return(o,u)=>{for(let _=0;_<p.length;_++){const T=p[_](o,u);if(T!=="")return T}return""}}function Gr(p,o){var u;const _=p.substr(o).match(/^\s+/);return(u=_&&_[0])!==null&&u!==void 0?u:""}function ag(p,o){const u=p.substr(o,1);return u.match(/^[1-9]$/)?u:""}function Wr(p,o){var u;const _=p.substr(o).match(/^[0-9]+/);return(u=_&&_[0])!==null&&u!==void 0?u:""}function lg(p,o){const u=Wr(p,o);if(u!=="")return u;const _=p.substr(o,1);if(o+=1,_!=="-"&&_!=="+")return"";const T=Wr(p,o);return T===""?"":_+T}function gl(p,o){const u=p.substr(o,1);if(o+=1,u.toLowerCase()!=="e")return"";const _=lg(p,o);return _===""?"":u+_}function eh(p,o){const u=p.substr(o,1);if(u==="0")return u;const _=ag(p,o);return o+=_.length,_===""?"":_+Wr(p,o)}function cg(p,o){const u=eh(p,o);if(o+=u.length,u==="")return"";const _=p.substr(o,1);if(o+=_.length,_!==".")return"";const T=Wr(p,o);return o+=T.length,u+_+T+gl(p,o)}function ug(p,o){const u=p.substr(o,1);if(o+=u.length,u!==".")return"";const _=Wr(p,o);return o+=_.length,_===""?"":u+_+gl(p,o)}function hg(p,o){const u=eh(p,o);return o+=u.length,u===""?"":u+gl(p,o)}const dg=ml([cg,ug,hg]);function pg(p,o){var u;const _=p.substr(o).match(/^[01]+/);return(u=_&&_[0])!==null&&u!==void 0?u:""}function fg(p,o){const u=p.substr(o,2);if(o+=u.length,u.toLowerCase()!=="0b")return"";const _=pg(p,o);return _===""?"":u+_}function mg(p,o){var u;const _=p.substr(o).match(/^[0-7]+/);return(u=_&&_[0])!==null&&u!==void 0?u:""}function gg(p,o){const u=p.substr(o,2);if(o+=u.length,u.toLowerCase()!=="0o")return"";const _=mg(p,o);return _===""?"":u+_}function vg(p,o){var u;const _=p.substr(o).match(/^[0-9a-f]+/i);return(u=_&&_[0])!==null&&u!==void 0?u:""}function _g(p,o){const u=p.substr(o,2);if(o+=u.length,u.toLowerCase()!=="0x")return"";const _=vg(p,o);return _===""?"":u+_}const xg=ml([fg,gg,_g]),bg=ml([xg,dg]);function yg(p,o){const u=bg(p,o);return o+=u.length,u===""?null:{evaluable:new ng(u),cursor:o}}function wg(p,o){const u=p.substr(o,1);if(o+=u.length,u!=="(")return null;const _=nh(p,o);if(!_)return null;o=_.cursor,o+=Gr(p,o).length;const T=p.substr(o,1);return o+=T.length,T!==")"?null:{evaluable:_.evaluable,cursor:o}}function Eg(p,o){var u;return(u=yg(p,o))!==null&&u!==void 0?u:wg(p,o)}function th(p,o){const u=Eg(p,o);if(u)return u;const _=p.substr(o,1);if(o+=_.length,_!=="+"&&_!=="-"&&_!=="~")return null;const T=th(p,o);return T?(o=T.cursor,{cursor:o,evaluable:new og(_,T.evaluable)}):null}function Mg(p,o,u){u+=Gr(o,u).length;const _=p.filter(T=>o.startsWith(T,u))[0];return _?(u+=_.length,u+=Gr(o,u).length,{cursor:u,operator:_}):null}function Sg(p,o){return(u,_)=>{const T=p(u,_);if(!T)return null;_=T.cursor;let V=T.evaluable;for(;;){const j=Mg(o,u,_);if(!j)break;_=j.cursor;const ue=p(u,_);if(!ue)return null;_=ue.cursor,V=new sg(j.operator,V,ue.evaluable)}return V?{cursor:_,evaluable:V}:null}}const Tg=[["**"],["*","/","%"],["+","-"],["<<",">>>",">>"],["&"],["^"],["|"]].reduce((p,o)=>Sg(p,o),th);function nh(p,o){return o+=Gr(p,o).length,Tg(p,o)}function Ag(p){const o=nh(p,0);return!o||o.cursor+Gr(p,o.cursor).length!==p.length?null:o.evaluable}function ci(p){var o;const u=Ag(p);return(o=u==null?void 0:u.evaluate())!==null&&o!==void 0?o:null}function ih(p){if(typeof p=="number")return p;if(typeof p=="string"){const o=ci(p);if(!f(o))return o}return 0}function Cg(p){return String(p)}function sn(p){return o=>o.toFixed(Math.max(Math.min(p,20),0))}const Pg=sn(0);function ko(p){return Pg(p)+"%"}function sh(p){return String(p)}function vl(p){return p}function rh(p,o){for(;p.length<o;)p.push(void 0)}function Rg(p){const o=[];return rh(o,p),H(o)}function Lg(p){const o=p.indexOf(void 0);return o<0?p:p.slice(0,o)}function Ig(p,o){const u=[...Lg(p),o];return u.length>p.length?u.splice(0,u.length-p.length):rh(u,p.length),u}function Xr({primary:p,secondary:o,forward:u,backward:_}){let T=!1;function V(j){T||(T=!0,j(),T=!1)}p.emitter.on("change",j=>{V(()=>{o.setRawValue(u(p,o),j.options)})}),o.emitter.on("change",j=>{V(()=>{p.setRawValue(_(p,o),j.options)}),V(()=>{o.setRawValue(u(p,o),j.options)})}),V(()=>{o.setRawValue(u(p,o),{forceEmit:!1,last:!0})})}function yn(p,o){const u=p*(o.altKey?.1:1)*(o.shiftKey?10:1);return o.upKey?+u:o.downKey?-u:0}function jr(p){return{altKey:p.altKey,downKey:p.key==="ArrowDown",shiftKey:p.shiftKey,upKey:p.key==="ArrowUp"}}function ui(p){return{altKey:p.altKey,downKey:p.key==="ArrowLeft",shiftKey:p.shiftKey,upKey:p.key==="ArrowRight"}}function Dg(p){return p==="ArrowUp"||p==="ArrowDown"}function oh(p){return Dg(p)||p==="ArrowLeft"||p==="ArrowRight"}function _l(p,o){var u,_;const T=o.ownerDocument.defaultView,V=o.getBoundingClientRect();return{x:p.pageX-(((u=T&&T.scrollX)!==null&&u!==void 0?u:0)+V.left),y:p.pageY-(((_=T&&T.scrollY)!==null&&_!==void 0?_:0)+V.top)}}class ts{constructor(o){this.lastTouch_=null,this.onDocumentMouseMove_=this.onDocumentMouseMove_.bind(this),this.onDocumentMouseUp_=this.onDocumentMouseUp_.bind(this),this.onMouseDown_=this.onMouseDown_.bind(this),this.onTouchEnd_=this.onTouchEnd_.bind(this),this.onTouchMove_=this.onTouchMove_.bind(this),this.onTouchStart_=this.onTouchStart_.bind(this),this.elem_=o,this.emitter=new g,o.addEventListener("touchstart",this.onTouchStart_,{passive:!1}),o.addEventListener("touchmove",this.onTouchMove_,{passive:!0}),o.addEventListener("touchend",this.onTouchEnd_),o.addEventListener("mousedown",this.onMouseDown_)}computePosition_(o){const u=this.elem_.getBoundingClientRect();return{bounds:{width:u.width,height:u.height},point:o?{x:o.x,y:o.y}:null}}onMouseDown_(o){var u;o.preventDefault(),(u=o.currentTarget)===null||u===void 0||u.focus();const _=this.elem_.ownerDocument;_.addEventListener("mousemove",this.onDocumentMouseMove_),_.addEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("down",{altKey:o.altKey,data:this.computePosition_(_l(o,this.elem_)),sender:this,shiftKey:o.shiftKey})}onDocumentMouseMove_(o){this.emitter.emit("move",{altKey:o.altKey,data:this.computePosition_(_l(o,this.elem_)),sender:this,shiftKey:o.shiftKey})}onDocumentMouseUp_(o){const u=this.elem_.ownerDocument;u.removeEventListener("mousemove",this.onDocumentMouseMove_),u.removeEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("up",{altKey:o.altKey,data:this.computePosition_(_l(o,this.elem_)),sender:this,shiftKey:o.shiftKey})}onTouchStart_(o){o.preventDefault();const u=o.targetTouches.item(0),_=this.elem_.getBoundingClientRect();this.emitter.emit("down",{altKey:o.altKey,data:this.computePosition_(u?{x:u.clientX-_.left,y:u.clientY-_.top}:void 0),sender:this,shiftKey:o.shiftKey}),this.lastTouch_=u}onTouchMove_(o){const u=o.targetTouches.item(0),_=this.elem_.getBoundingClientRect();this.emitter.emit("move",{altKey:o.altKey,data:this.computePosition_(u?{x:u.clientX-_.left,y:u.clientY-_.top}:void 0),sender:this,shiftKey:o.shiftKey}),this.lastTouch_=u}onTouchEnd_(o){var u;const _=(u=o.targetTouches.item(0))!==null&&u!==void 0?u:this.lastTouch_,T=this.elem_.getBoundingClientRect();this.emitter.emit("up",{altKey:o.altKey,data:this.computePosition_(_?{x:_.clientX-T.left,y:_.clientY-T.top}:void 0),sender:this,shiftKey:o.shiftKey})}}function Rt(p,o,u,_,T){const V=(p-o)/(u-o);return _+V*(T-_)}function ah(p){return String(p.toFixed(10)).split(".")[1].replace(/0+$/,"").length}function Yt(p,o,u){return Math.min(Math.max(p,o),u)}function lh(p,o){return(p%o+o)%o}const Rn=y("txt");class Ng{constructor(o,u){this.onChange_=this.onChange_.bind(this),this.props_=u.props,this.props_.emitter.on("change",this.onChange_),this.element=o.createElement("div"),this.element.classList.add(Rn(),Rn(void 0,"num")),u.arrayPosition&&this.element.classList.add(Rn(void 0,u.arrayPosition)),u.viewProps.bindClassModifiers(this.element);const _=o.createElement("input");_.classList.add(Rn("i")),_.type="text",u.viewProps.bindDisabled(_),this.element.appendChild(_),this.inputElement=_,this.onDraggingChange_=this.onDraggingChange_.bind(this),this.dragging_=u.dragging,this.dragging_.emitter.on("change",this.onDraggingChange_),this.element.classList.add(Rn()),this.inputElement.classList.add(Rn("i"));const T=o.createElement("div");T.classList.add(Rn("k")),this.element.appendChild(T),this.knobElement=T;const V=o.createElementNS(He,"svg");V.classList.add(Rn("g")),this.knobElement.appendChild(V);const j=o.createElementNS(He,"path");j.classList.add(Rn("gb")),V.appendChild(j),this.guideBodyElem_=j;const ue=o.createElementNS(He,"path");ue.classList.add(Rn("gh")),V.appendChild(ue),this.guideHeadElem_=ue;const Ne=o.createElement("div");Ne.classList.add(y("tt")()),this.knobElement.appendChild(Ne),this.tooltipElem_=Ne,u.value.emitter.on("change",this.onChange_),this.value=u.value,this.refresh()}onDraggingChange_(o){if(o.rawValue===null){this.element.classList.remove(Rn(void 0,"drg"));return}this.element.classList.add(Rn(void 0,"drg"));const u=o.rawValue/this.props_.get("draggingScale"),_=u+(u>0?-1:u<0?1:0),T=Yt(-_,-4,4);this.guideHeadElem_.setAttributeNS(null,"d",[`M ${_+T},0 L${_},4 L${_+T},8`,`M ${u},-1 L${u},9`].join(" ")),this.guideBodyElem_.setAttributeNS(null,"d",`M 0,4 L${u},4`);const V=this.props_.get("formatter");this.tooltipElem_.textContent=V(this.value.rawValue),this.tooltipElem_.style.left=`${u}px`}refresh(){const o=this.props_.get("formatter");this.inputElement.value=o(this.value.rawValue)}onChange_(){this.refresh()}}class qr{constructor(o,u){var _;this.originRawValue_=0,this.onInputChange_=this.onInputChange_.bind(this),this.onInputKeyDown_=this.onInputKeyDown_.bind(this),this.onInputKeyUp_=this.onInputKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.baseStep_=u.baseStep,this.parser_=u.parser,this.props=u.props,this.sliderProps_=(_=u.sliderProps)!==null&&_!==void 0?_:null,this.value=u.value,this.viewProps=u.viewProps,this.dragging_=H(null),this.view=new Ng(o,{arrayPosition:u.arrayPosition,dragging:this.dragging_,props:this.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_),this.view.inputElement.addEventListener("keydown",this.onInputKeyDown_),this.view.inputElement.addEventListener("keyup",this.onInputKeyUp_);const T=new ts(this.view.knobElement);T.emitter.on("down",this.onPointerDown_),T.emitter.on("move",this.onPointerMove_),T.emitter.on("up",this.onPointerUp_)}constrainValue_(o){var u,_;const T=(u=this.sliderProps_)===null||u===void 0?void 0:u.get("minValue"),V=(_=this.sliderProps_)===null||_===void 0?void 0:_.get("maxValue");let j=o;return T!==void 0&&(j=Math.max(j,T)),V!==void 0&&(j=Math.min(j,V)),j}onInputChange_(o){const _=o.currentTarget.value,T=this.parser_(_);f(T)||(this.value.rawValue=this.constrainValue_(T)),this.view.refresh()}onInputKeyDown_(o){const u=yn(this.baseStep_,jr(o));u!==0&&this.value.setRawValue(this.constrainValue_(this.value.rawValue+u),{forceEmit:!1,last:!1})}onInputKeyUp_(o){yn(this.baseStep_,jr(o))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}onPointerDown_(){this.originRawValue_=this.value.rawValue,this.dragging_.rawValue=0}computeDraggingValue_(o){if(!o.point)return null;const u=o.point.x-o.bounds.width/2;return this.constrainValue_(this.originRawValue_+u*this.props.get("draggingScale"))}onPointerMove_(o){const u=this.computeDraggingValue_(o.data);u!==null&&(this.value.setRawValue(u,{forceEmit:!1,last:!1}),this.dragging_.rawValue=this.value.rawValue-this.originRawValue_)}onPointerUp_(o){const u=this.computeDraggingValue_(o.data);u!==null&&(this.value.setRawValue(u,{forceEmit:!0,last:!0}),this.dragging_.rawValue=null)}}const xl=y("sld");class Ug{constructor(o,u){this.onChange_=this.onChange_.bind(this),this.props_=u.props,this.props_.emitter.on("change",this.onChange_),this.element=o.createElement("div"),this.element.classList.add(xl()),u.viewProps.bindClassModifiers(this.element);const _=o.createElement("div");_.classList.add(xl("t")),u.viewProps.bindTabIndex(_),this.element.appendChild(_),this.trackElement=_;const T=o.createElement("div");T.classList.add(xl("k")),this.trackElement.appendChild(T),this.knobElement=T,u.value.emitter.on("change",this.onChange_),this.value=u.value,this.update_()}update_(){const o=Yt(Rt(this.value.rawValue,this.props_.get("minValue"),this.props_.get("maxValue"),0,100),0,100);this.knobElement.style.width=`${o}%`}onChange_(){this.update_()}}class Fg{constructor(o,u){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDownOrMove_=this.onPointerDownOrMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.baseStep_=u.baseStep,this.value=u.value,this.viewProps=u.viewProps,this.props=u.props,this.view=new Ug(o,{props:this.props,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new ts(this.view.trackElement),this.ptHandler_.emitter.on("down",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("move",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.trackElement.addEventListener("keydown",this.onKeyDown_),this.view.trackElement.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(o,u){!o.point||this.value.setRawValue(Rt(Yt(o.point.x,0,o.bounds.width),0,o.bounds.width,this.props.get("minValue"),this.props.get("maxValue")),u)}onPointerDownOrMove_(o){this.handlePointerEvent_(o.data,{forceEmit:!1,last:!1})}onPointerUp_(o){this.handlePointerEvent_(o.data,{forceEmit:!0,last:!0})}onKeyDown_(o){const u=yn(this.baseStep_,ui(o));u!==0&&this.value.setRawValue(this.value.rawValue+u,{forceEmit:!1,last:!1})}onKeyUp_(o){yn(this.baseStep_,ui(o))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const bl=y("sldtxt");class Og{constructor(o,u){this.element=o.createElement("div"),this.element.classList.add(bl());const _=o.createElement("div");_.classList.add(bl("s")),this.sliderView_=u.sliderView,_.appendChild(this.sliderView_.element),this.element.appendChild(_);const T=o.createElement("div");T.classList.add(bl("t")),this.textView_=u.textView,T.appendChild(this.textView_.element),this.element.appendChild(T)}}class yl{constructor(o,u){this.value=u.value,this.viewProps=u.viewProps,this.sliderC_=new Fg(o,{baseStep:u.baseStep,props:u.sliderProps,value:u.value,viewProps:this.viewProps}),this.textC_=new qr(o,{baseStep:u.baseStep,parser:u.parser,props:u.textProps,sliderProps:u.sliderProps,value:u.value,viewProps:u.viewProps}),this.view=new Og(o,{sliderView:this.sliderC_.view,textView:this.textC_.view})}get sliderController(){return this.sliderC_}get textController(){return this.textC_}}function Yr(p,o){p.write(o)}function Vo(p){const o=fe;if(Array.isArray(p))return o.required.array(o.required.object({text:o.required.string,value:o.required.raw}))(p).value;if(typeof p=="object")return o.required.raw(p).value}function ch(p){if(p==="inline"||p==="popup")return p}function Li(p){const o=fe;return o.required.object({max:o.optional.number,min:o.optional.number,step:o.optional.number})(p).value}function uh(p){if(Array.isArray(p))return p;const o=[];return Object.keys(p).forEach(u=>{o.push({text:u,value:p[u]})}),o}function wl(p){return f(p)?null:new li(uh(p))}function El(p){const o=p?Qt(p,li):null;return o?o.options:null}function Bg(p){const o=p?Qt(p,Ri):null;return o?o.step:null}function zo(p,o){const u=p&&Qt(p,Ri);return u?ah(u.step):Math.max(ah(o),2)}function Cs(p){const o=Bg(p);return o!=null?o:1}function Ps(p,o){var u;const _=p&&Qt(p,Ri),T=Math.abs((u=_==null?void 0:_.step)!==null&&u!==void 0?u:o);return T===0?.1:Math.pow(10,Math.floor(Math.log10(T))-1)}const Ho=y("ckb");class kg{constructor(o,u){this.onValueChange_=this.onValueChange_.bind(this),this.element=o.createElement("div"),this.element.classList.add(Ho()),u.viewProps.bindClassModifiers(this.element);const _=o.createElement("label");_.classList.add(Ho("l")),this.element.appendChild(_);const T=o.createElement("input");T.classList.add(Ho("i")),T.type="checkbox",_.appendChild(T),this.inputElement=T,u.viewProps.bindDisabled(this.inputElement);const V=o.createElement("div");V.classList.add(Ho("w")),_.appendChild(V);const j=je(o,"check");V.appendChild(j),u.value.emitter.on("change",this.onValueChange_),this.value=u.value,this.update_()}update_(){this.inputElement.checked=this.value.rawValue}onValueChange_(){this.update_()}}class Vg{constructor(o,u){this.onInputChange_=this.onInputChange_.bind(this),this.value=u.value,this.viewProps=u.viewProps,this.view=new kg(o,{value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_)}onInputChange_(o){const u=o.currentTarget;this.value.rawValue=u.checked}}function zg(p){const o=[],u=wl(p.options);return u&&o.push(u),new Ot(o)}const Hg={id:"input-bool",type:"input",accept:(p,o)=>{if(typeof p!="boolean")return null;const _=K(o,{options:fe.optional.custom(Vo)});return _?{initialValue:p,params:_}:null},binding:{reader:p=>Qu,constraint:p=>zg(p.params),writer:p=>Yr},controller:p=>{var o;const u=p.document,_=p.value,T=p.constraint;return T&&Qt(T,li)?new Hr(u,{props:W.fromObject({options:(o=El(T))!==null&&o!==void 0?o:[]}),value:_,viewProps:p.viewProps}):new Vg(u,{value:_,viewProps:p.viewProps})}},ns=y("col");class Gg{constructor(o,u){this.element=o.createElement("div"),this.element.classList.add(ns()),u.foldable.bindExpandedClass(this.element,ns(void 0,"expanded")),A(u.foldable,"completed",B(this.element,ns(void 0,"cpl")));const _=o.createElement("div");_.classList.add(ns("h")),this.element.appendChild(_);const T=o.createElement("div");T.classList.add(ns("s")),_.appendChild(T),this.swatchElement=T;const V=o.createElement("div");if(V.classList.add(ns("t")),_.appendChild(V),this.textElement=V,u.pickerLayout==="inline"){const j=o.createElement("div");j.classList.add(ns("p")),this.element.appendChild(j),this.pickerElement=j}else this.pickerElement=null}}function Wg(p,o,u){const _=Yt(p/255,0,1),T=Yt(o/255,0,1),V=Yt(u/255,0,1),j=Math.max(_,T,V),ue=Math.min(_,T,V),Ne=j-ue;let Ye=0,ut=0;const ht=(ue+j)/2;return Ne!==0&&(ut=Ne/(1-Math.abs(j+ue-1)),_===j?Ye=(T-V)/Ne:T===j?Ye=2+(V-_)/Ne:Ye=4+(_-T)/Ne,Ye=Ye/6+(Ye<0?1:0)),[Ye*360,ut*100,ht*100]}function Xg(p,o,u){const _=(p%360+360)%360,T=Yt(o/100,0,1),V=Yt(u/100,0,1),j=(1-Math.abs(2*V-1))*T,ue=j*(1-Math.abs(_/60%2-1)),Ne=V-j/2;let Ye,ut,ht;return _>=0&&_<60?[Ye,ut,ht]=[j,ue,0]:_>=60&&_<120?[Ye,ut,ht]=[ue,j,0]:_>=120&&_<180?[Ye,ut,ht]=[0,j,ue]:_>=180&&_<240?[Ye,ut,ht]=[0,ue,j]:_>=240&&_<300?[Ye,ut,ht]=[ue,0,j]:[Ye,ut,ht]=[j,0,ue],[(Ye+Ne)*255,(ut+Ne)*255,(ht+Ne)*255]}function jg(p,o,u){const _=Yt(p/255,0,1),T=Yt(o/255,0,1),V=Yt(u/255,0,1),j=Math.max(_,T,V),ue=Math.min(_,T,V),Ne=j-ue;let Ye;Ne===0?Ye=0:j===_?Ye=60*(((T-V)/Ne%6+6)%6):j===T?Ye=60*((V-_)/Ne+2):Ye=60*((_-T)/Ne+4);const ut=j===0?0:Ne/j,ht=j;return[Ye,ut*100,ht*100]}function hh(p,o,u){const _=lh(p,360),T=Yt(o/100,0,1),V=Yt(u/100,0,1),j=V*T,ue=j*(1-Math.abs(_/60%2-1)),Ne=V-j;let Ye,ut,ht;return _>=0&&_<60?[Ye,ut,ht]=[j,ue,0]:_>=60&&_<120?[Ye,ut,ht]=[ue,j,0]:_>=120&&_<180?[Ye,ut,ht]=[0,j,ue]:_>=180&&_<240?[Ye,ut,ht]=[0,ue,j]:_>=240&&_<300?[Ye,ut,ht]=[ue,0,j]:[Ye,ut,ht]=[j,0,ue],[(Ye+Ne)*255,(ut+Ne)*255,(ht+Ne)*255]}function qg(p,o,u){const _=u+o*(100-Math.abs(2*u-100))/200;return[p,_!==0?o*(100-Math.abs(2*u-100))/_:0,u+o*(100-Math.abs(2*u-100))/(2*100)]}function Yg(p,o,u){const _=100-Math.abs(u*(200-o)/100-100);return[p,_!==0?o*u/_:0,u*(200-o)/(2*100)]}function is(p){return[p[0],p[1],p[2]]}function dh(p,o){return[p[0],p[1],p[2],o]}const Kg={hsl:{hsl:(p,o,u)=>[p,o,u],hsv:qg,rgb:Xg},hsv:{hsl:Yg,hsv:(p,o,u)=>[p,o,u],rgb:hh},rgb:{hsl:Wg,hsv:jg,rgb:(p,o,u)=>[p,o,u]}};function Go(p,o){return[o==="float"?1:p==="rgb"?255:360,o==="float"?1:p==="rgb"?255:100,o==="float"?1:p==="rgb"?255:100]}function $g(p,o,u){var _;const T=Go(o,u);return[o==="rgb"?Yt(p[0],0,T[0]):lh(p[0],T[0]),Yt(p[1],0,T[1]),Yt(p[2],0,T[2]),Yt((_=p[3])!==null&&_!==void 0?_:1,0,1)]}function ph(p,o,u,_){const T=Go(o,u),V=Go(o,_);return p.map((j,ue)=>j/T[ue]*V[ue])}function Zg(p,o,u){const _=ph(p,o.mode,o.type,"int"),T=Kg[o.mode][u.mode](..._);return ph(T,u.mode,"int",u.type)}function Wo(p,o){return typeof p!="object"||f(p)?!1:o in p&&typeof p[o]=="number"}class rt{constructor(o,u,_="int"){this.mode=u,this.type=_,this.comps_=$g(o,u,_)}static black(o="int"){return new rt([0,0,0],"rgb",o)}static fromObject(o,u="int"){const _="a"in o?[o.r,o.g,o.b,o.a]:[o.r,o.g,o.b];return new rt(_,"rgb",u)}static toRgbaObject(o,u="int"){return o.toRgbaObject(u)}static isRgbColorObject(o){return Wo(o,"r")&&Wo(o,"g")&&Wo(o,"b")}static isRgbaColorObject(o){return this.isRgbColorObject(o)&&Wo(o,"a")}static isColorObject(o){return this.isRgbColorObject(o)}static equals(o,u){if(o.mode!==u.mode)return!1;const _=o.comps_,T=u.comps_;for(let V=0;V<_.length;V++)if(_[V]!==T[V])return!1;return!0}getComponents(o,u="int"){return dh(Zg(is(this.comps_),{mode:this.mode,type:this.type},{mode:o!=null?o:this.mode,type:u}),this.comps_[3])}toRgbaObject(o="int"){const u=this.getComponents("rgb",o);return{r:u[0],g:u[1],b:u[2],a:u[3]}}}const Ii=y("colp");class Qg{constructor(o,u){this.alphaViews_=null,this.element=o.createElement("div"),this.element.classList.add(Ii());const _=o.createElement("div");_.classList.add(Ii("hsv"));const T=o.createElement("div");T.classList.add(Ii("sv")),this.svPaletteView_=u.svPaletteView,T.appendChild(this.svPaletteView_.element),_.appendChild(T);const V=o.createElement("div");V.classList.add(Ii("h")),this.hPaletteView_=u.hPaletteView,V.appendChild(this.hPaletteView_.element),_.appendChild(V),this.element.appendChild(_);const j=o.createElement("div");if(j.classList.add(Ii("rgb")),this.textView_=u.textView,j.appendChild(this.textView_.element),this.element.appendChild(j),u.alphaViews){this.alphaViews_={palette:u.alphaViews.palette,text:u.alphaViews.text};const ue=o.createElement("div");ue.classList.add(Ii("a"));const Ne=o.createElement("div");Ne.classList.add(Ii("ap")),Ne.appendChild(this.alphaViews_.palette.element),ue.appendChild(Ne);const Ye=o.createElement("div");Ye.classList.add(Ii("at")),Ye.appendChild(this.alphaViews_.text.element),ue.appendChild(Ye),this.element.appendChild(ue)}}get allFocusableElements(){const o=[this.svPaletteView_.element,this.hPaletteView_.element,this.textView_.modeSelectElement,...this.textView_.textViews.map(u=>u.inputElement)];return this.alphaViews_&&o.push(this.alphaViews_.palette.element,this.alphaViews_.text.inputElement),o}}function Jg(p){return p==="int"?"int":p==="float"?"float":void 0}function Ml(p){const o=fe;return K(p,{alpha:o.optional.boolean,color:o.optional.object({alpha:o.optional.boolean,type:o.optional.custom(Jg)}),expanded:o.optional.boolean,picker:o.optional.custom(ch)})}function ss(p){return p?.1:1}function rs(p){var o;return(o=p.color)===null||o===void 0?void 0:o.type}function e0(p,o){return p.alpha===o.alpha&&p.mode===o.mode&&p.notation===o.notation&&p.type===o.type}function Ln(p,o){const u=p.match(/^(.+)%$/);return Math.min(u?parseFloat(u[1])*.01*o:parseFloat(p),o)}const t0={deg:p=>p,grad:p=>p*360/400,rad:p=>p*360/(2*Math.PI),turn:p=>p*360};function fh(p){const o=p.match(/^([0-9.]+?)(deg|grad|rad|turn)$/);if(!o)return parseFloat(p);const u=parseFloat(o[1]),_=o[2];return t0[_](u)}function mh(p){const o=p.match(/^rgb\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!o)return null;const u=[Ln(o[1],255),Ln(o[2],255),Ln(o[3],255)];return isNaN(u[0])||isNaN(u[1])||isNaN(u[2])?null:u}function gh(p){return o=>{const u=mh(o);return u?new rt(u,"rgb",p):null}}function vh(p){const o=p.match(/^rgba\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!o)return null;const u=[Ln(o[1],255),Ln(o[2],255),Ln(o[3],255),Ln(o[4],1)];return isNaN(u[0])||isNaN(u[1])||isNaN(u[2])||isNaN(u[3])?null:u}function _h(p){return o=>{const u=vh(o);return u?new rt(u,"rgb",p):null}}function xh(p){const o=p.match(/^hsl\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!o)return null;const u=[fh(o[1]),Ln(o[2],100),Ln(o[3],100)];return isNaN(u[0])||isNaN(u[1])||isNaN(u[2])?null:u}function bh(p){return o=>{const u=xh(o);return u?new rt(u,"hsl",p):null}}function yh(p){const o=p.match(/^hsla\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!o)return null;const u=[fh(o[1]),Ln(o[2],100),Ln(o[3],100),Ln(o[4],1)];return isNaN(u[0])||isNaN(u[1])||isNaN(u[2])||isNaN(u[3])?null:u}function wh(p){return o=>{const u=yh(o);return u?new rt(u,"hsl",p):null}}function Eh(p){const o=p.match(/^#([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(o)return[parseInt(o[1]+o[1],16),parseInt(o[2]+o[2],16),parseInt(o[3]+o[3],16)];const u=p.match(/^(?:#|0x)([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return u?[parseInt(u[1],16),parseInt(u[2],16),parseInt(u[3],16)]:null}function n0(p){const o=Eh(p);return o?new rt(o,"rgb","int"):null}function Mh(p){const o=p.match(/^#?([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(o)return[parseInt(o[1]+o[1],16),parseInt(o[2]+o[2],16),parseInt(o[3]+o[3],16),Rt(parseInt(o[4]+o[4],16),0,255,0,1)];const u=p.match(/^(?:#|0x)?([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return u?[parseInt(u[1],16),parseInt(u[2],16),parseInt(u[3],16),Rt(parseInt(u[4],16),0,255,0,1)]:null}function i0(p){const o=Mh(p);return o?new rt(o,"rgb","int"):null}function Sh(p){const o=p.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!o)return null;const u=[parseFloat(o[1]),parseFloat(o[2]),parseFloat(o[3])];return isNaN(u[0])||isNaN(u[1])||isNaN(u[2])?null:u}function Th(p){return o=>{const u=Sh(o);return u?new rt(u,"rgb",p):null}}function Ah(p){const o=p.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*a\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!o)return null;const u=[parseFloat(o[1]),parseFloat(o[2]),parseFloat(o[3]),parseFloat(o[4])];return isNaN(u[0])||isNaN(u[1])||isNaN(u[2])||isNaN(u[3])?null:u}function Ch(p){return o=>{const u=Ah(o);return u?new rt(u,"rgb",p):null}}const s0=[{parser:Eh,result:{alpha:!1,mode:"rgb",notation:"hex"}},{parser:Mh,result:{alpha:!0,mode:"rgb",notation:"hex"}},{parser:mh,result:{alpha:!1,mode:"rgb",notation:"func"}},{parser:vh,result:{alpha:!0,mode:"rgb",notation:"func"}},{parser:xh,result:{alpha:!1,mode:"hsl",notation:"func"}},{parser:yh,result:{alpha:!0,mode:"hsl",notation:"func"}},{parser:Sh,result:{alpha:!1,mode:"rgb",notation:"object"}},{parser:Ah,result:{alpha:!0,mode:"rgb",notation:"object"}}];function r0(p){return s0.reduce((o,{parser:u,result:_})=>o||(u(p)?_:null),null)}function Sl(p,o="int"){const u=r0(p);return u?u.notation==="hex"&&o!=="float"?Object.assign(Object.assign({},u),{type:"int"}):u.notation==="func"?Object.assign(Object.assign({},u),{type:o}):null:null}const Ph={int:[n0,i0,gh("int"),_h("int"),bh("int"),wh("int"),Th("int"),Ch("int")],float:[gh("float"),_h("float"),bh("float"),wh("float"),Th("float"),Ch("float")]};function o0(p){const o=Ph[p];return u=>{if(typeof u!="string")return rt.black(p);const _=o.reduce((T,V)=>T||V(u),null);return _!=null?_:rt.black(p)}}function Tl(p){const o=Ph[p];return u=>o.reduce((_,T)=>_||T(u),null)}function Rh(p){const o=Yt(Math.floor(p),0,255).toString(16);return o.length===1?`0${o}`:o}function Lh(p,o="#"){const u=is(p.getComponents("rgb")).map(Rh).join("");return`${o}${u}`}function Al(p,o="#"){const u=p.getComponents("rgb"),_=[u[0],u[1],u[2],u[3]*255].map(Rh).join("");return`${o}${_}`}function Ih(p,o){const u=sn(o==="float"?2:0);return`rgb(${is(p.getComponents("rgb",o)).map(T=>u(T)).join(", ")})`}function a0(p){return o=>Ih(o,p)}function Xo(p,o){const u=sn(2),_=sn(o==="float"?2:0);return`rgba(${p.getComponents("rgb",o).map((V,j)=>(j===3?u:_)(V)).join(", ")})`}function l0(p){return o=>Xo(o,p)}function c0(p){const o=[sn(0),ko,ko];return`hsl(${is(p.getComponents("hsl")).map((_,T)=>o[T](_)).join(", ")})`}function u0(p){const o=[sn(0),ko,ko,sn(2)];return`hsla(${p.getComponents("hsl").map((_,T)=>o[T](_)).join(", ")})`}function Dh(p,o){const u=sn(o==="float"?2:0),_=["r","g","b"];return`{${is(p.getComponents("rgb",o)).map((V,j)=>`${_[j]}: ${u(V)}`).join(", ")}}`}function h0(p){return o=>Dh(o,p)}function Nh(p,o){const u=sn(2),_=sn(o==="float"?2:0),T=["r","g","b","a"];return`{${p.getComponents("rgb",o).map((j,ue)=>{const Ne=ue===3?u:_;return`${T[ue]}: ${Ne(j)}`}).join(", ")}}`}function d0(p){return o=>Nh(o,p)}const p0=[{format:{alpha:!1,mode:"rgb",notation:"hex",type:"int"},stringifier:Lh},{format:{alpha:!0,mode:"rgb",notation:"hex",type:"int"},stringifier:Al},{format:{alpha:!1,mode:"hsl",notation:"func",type:"int"},stringifier:c0},{format:{alpha:!0,mode:"hsl",notation:"func",type:"int"},stringifier:u0},...["int","float"].reduce((p,o)=>[...p,{format:{alpha:!1,mode:"rgb",notation:"func",type:o},stringifier:a0(o)},{format:{alpha:!0,mode:"rgb",notation:"func",type:o},stringifier:l0(o)},{format:{alpha:!1,mode:"rgb",notation:"object",type:o},stringifier:h0(o)},{format:{alpha:!0,mode:"rgb",notation:"object",type:o},stringifier:d0(o)}],[])];function Cl(p){return p0.reduce((o,u)=>o||(e0(u.format,p)?u.stringifier:null),null)}const Kr=y("apl");class f0{constructor(o,u){this.onValueChange_=this.onValueChange_.bind(this),this.value=u.value,this.value.emitter.on("change",this.onValueChange_),this.element=o.createElement("div"),this.element.classList.add(Kr()),u.viewProps.bindTabIndex(this.element);const _=o.createElement("div");_.classList.add(Kr("b")),this.element.appendChild(_);const T=o.createElement("div");T.classList.add(Kr("c")),_.appendChild(T),this.colorElem_=T;const V=o.createElement("div");V.classList.add(Kr("m")),this.element.appendChild(V),this.markerElem_=V;const j=o.createElement("div");j.classList.add(Kr("p")),this.markerElem_.appendChild(j),this.previewElem_=j,this.update_()}update_(){const o=this.value.rawValue,u=o.getComponents("rgb"),_=new rt([u[0],u[1],u[2],0],"rgb"),T=new rt([u[0],u[1],u[2],255],"rgb"),V=["to right",Xo(_),Xo(T)];this.colorElem_.style.background=`linear-gradient(${V.join(",")})`,this.previewElem_.style.backgroundColor=Xo(o);const j=Rt(u[3],0,1,0,100);this.markerElem_.style.left=`${j}%`}onValueChange_(){this.update_()}}class m0{constructor(o,u){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=u.value,this.viewProps=u.viewProps,this.view=new f0(o,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new ts(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(o,u){if(!o.point)return;const _=o.point.x/o.bounds.width,T=this.value.rawValue,[V,j,ue]=T.getComponents("hsv");this.value.setRawValue(new rt([V,j,ue,_],"hsv"),u)}onPointerDown_(o){this.handlePointerEvent_(o.data,{forceEmit:!1,last:!1})}onPointerMove_(o){this.handlePointerEvent_(o.data,{forceEmit:!1,last:!1})}onPointerUp_(o){this.handlePointerEvent_(o.data,{forceEmit:!0,last:!0})}onKeyDown_(o){const u=yn(ss(!0),ui(o));if(u===0)return;const _=this.value.rawValue,[T,V,j,ue]=_.getComponents("hsv");this.value.setRawValue(new rt([T,V,j,ue+u],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(o){yn(ss(!0),ui(o))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const Rs=y("coltxt");function g0(p){const o=p.createElement("select"),u=[{text:"RGB",value:"rgb"},{text:"HSL",value:"hsl"},{text:"HSV",value:"hsv"}];return o.appendChild(u.reduce((_,T)=>{const V=p.createElement("option");return V.textContent=T.text,V.value=T.value,_.appendChild(V),_},p.createDocumentFragment())),o}class v0{constructor(o,u){this.element=o.createElement("div"),this.element.classList.add(Rs());const _=o.createElement("div");_.classList.add(Rs("m")),this.modeElem_=g0(o),this.modeElem_.classList.add(Rs("ms")),_.appendChild(this.modeSelectElement);const T=o.createElement("div");T.classList.add(Rs("mm")),T.appendChild(je(o,"dropdown")),_.appendChild(T),this.element.appendChild(_);const V=o.createElement("div");V.classList.add(Rs("w")),this.element.appendChild(V),this.textsElem_=V,this.textViews_=u.textViews,this.applyTextViews_(),C(u.colorMode,j=>{this.modeElem_.value=j})}get modeSelectElement(){return this.modeElem_}get textViews(){return this.textViews_}set textViews(o){this.textViews_=o,this.applyTextViews_()}applyTextViews_(){$(this.textsElem_);const o=this.element.ownerDocument;this.textViews_.forEach(u=>{const _=o.createElement("div");_.classList.add(Rs("c")),_.appendChild(u.element),this.textsElem_.appendChild(_)})}}function _0(p){return sn(p==="float"?2:0)}function x0(p,o,u){const _=Go(p,o)[u];return new qt({min:0,max:_})}function Pl(p,o,u){return new qr(p,{arrayPosition:u===0?"fst":u===3-1?"lst":"mid",baseStep:ss(!1),parser:o.parser,props:W.fromObject({draggingScale:o.colorType==="float"?.01:1,formatter:_0(o.colorType)}),value:H(0,{constraint:x0(o.colorMode,o.colorType,u)}),viewProps:o.viewProps})}class b0{constructor(o,u){this.onModeSelectChange_=this.onModeSelectChange_.bind(this),this.colorType_=u.colorType,this.parser_=u.parser,this.value=u.value,this.viewProps=u.viewProps,this.colorMode=H(this.value.rawValue.mode),this.ccs_=this.createComponentControllers_(o),this.view=new v0(o,{colorMode:this.colorMode,textViews:[this.ccs_[0].view,this.ccs_[1].view,this.ccs_[2].view]}),this.view.modeSelectElement.addEventListener("change",this.onModeSelectChange_)}createComponentControllers_(o){const u={colorMode:this.colorMode.rawValue,colorType:this.colorType_,parser:this.parser_,viewProps:this.viewProps},_=[Pl(o,u,0),Pl(o,u,1),Pl(o,u,2)];return _.forEach((T,V)=>{Xr({primary:this.value,secondary:T.value,forward:j=>j.rawValue.getComponents(this.colorMode.rawValue,this.colorType_)[V],backward:(j,ue)=>{const Ne=this.colorMode.rawValue,Ye=j.rawValue.getComponents(Ne,this.colorType_);return Ye[V]=ue.rawValue,new rt(dh(is(Ye),Ye[3]),Ne,this.colorType_)}})}),_}onModeSelectChange_(o){const u=o.currentTarget;this.colorMode.rawValue=u.value,this.ccs_=this.createComponentControllers_(this.view.element.ownerDocument),this.view.textViews=[this.ccs_[0].view,this.ccs_[1].view,this.ccs_[2].view]}}const Rl=y("hpl");class y0{constructor(o,u){this.onValueChange_=this.onValueChange_.bind(this),this.value=u.value,this.value.emitter.on("change",this.onValueChange_),this.element=o.createElement("div"),this.element.classList.add(Rl()),u.viewProps.bindTabIndex(this.element);const _=o.createElement("div");_.classList.add(Rl("c")),this.element.appendChild(_);const T=o.createElement("div");T.classList.add(Rl("m")),this.element.appendChild(T),this.markerElem_=T,this.update_()}update_(){const o=this.value.rawValue,[u]=o.getComponents("hsv");this.markerElem_.style.backgroundColor=Ih(new rt([u,100,100],"hsv"));const _=Rt(u,0,360,0,100);this.markerElem_.style.left=`${_}%`}onValueChange_(){this.update_()}}class w0{constructor(o,u){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=u.value,this.viewProps=u.viewProps,this.view=new y0(o,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new ts(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(o,u){if(!o.point)return;const _=Rt(Yt(o.point.x,0,o.bounds.width),0,o.bounds.width,0,359),T=this.value.rawValue,[,V,j,ue]=T.getComponents("hsv");this.value.setRawValue(new rt([_,V,j,ue],"hsv"),u)}onPointerDown_(o){this.handlePointerEvent_(o.data,{forceEmit:!1,last:!1})}onPointerMove_(o){this.handlePointerEvent_(o.data,{forceEmit:!1,last:!1})}onPointerUp_(o){this.handlePointerEvent_(o.data,{forceEmit:!0,last:!0})}onKeyDown_(o){const u=yn(ss(!1),ui(o));if(u===0)return;const _=this.value.rawValue,[T,V,j,ue]=_.getComponents("hsv");this.value.setRawValue(new rt([T+u,V,j,ue],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(o){yn(ss(!1),ui(o))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const Ll=y("svp"),Uh=64;class E0{constructor(o,u){this.onValueChange_=this.onValueChange_.bind(this),this.value=u.value,this.value.emitter.on("change",this.onValueChange_),this.element=o.createElement("div"),this.element.classList.add(Ll()),u.viewProps.bindTabIndex(this.element);const _=o.createElement("canvas");_.height=Uh,_.width=Uh,_.classList.add(Ll("c")),this.element.appendChild(_),this.canvasElement=_;const T=o.createElement("div");T.classList.add(Ll("m")),this.element.appendChild(T),this.markerElem_=T,this.update_()}update_(){const o=Ce(this.canvasElement);if(!o)return;const _=this.value.rawValue.getComponents("hsv"),T=this.canvasElement.width,V=this.canvasElement.height,j=o.getImageData(0,0,T,V),ue=j.data;for(let ut=0;ut<V;ut++)for(let ht=0;ht<T;ht++){const di=Rt(ht,0,T,0,100),Zr=Rt(ut,0,V,100,0),Qr=hh(_[0],di,Zr),Ns=(ut*T+ht)*4;ue[Ns]=Qr[0],ue[Ns+1]=Qr[1],ue[Ns+2]=Qr[2],ue[Ns+3]=255}o.putImageData(j,0,0);const Ne=Rt(_[1],0,100,0,100);this.markerElem_.style.left=`${Ne}%`;const Ye=Rt(_[2],0,100,100,0);this.markerElem_.style.top=`${Ye}%`}onValueChange_(){this.update_()}}class M0{constructor(o,u){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=u.value,this.viewProps=u.viewProps,this.view=new E0(o,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new ts(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(o,u){if(!o.point)return;const _=Rt(o.point.x,0,o.bounds.width,0,100),T=Rt(o.point.y,0,o.bounds.height,100,0),[V,,,j]=this.value.rawValue.getComponents("hsv");this.value.setRawValue(new rt([V,_,T,j],"hsv"),u)}onPointerDown_(o){this.handlePointerEvent_(o.data,{forceEmit:!1,last:!1})}onPointerMove_(o){this.handlePointerEvent_(o.data,{forceEmit:!1,last:!1})}onPointerUp_(o){this.handlePointerEvent_(o.data,{forceEmit:!0,last:!0})}onKeyDown_(o){oh(o.key)&&o.preventDefault();const[u,_,T,V]=this.value.rawValue.getComponents("hsv"),j=ss(!1),ue=yn(j,ui(o)),Ne=yn(j,jr(o));ue===0&&Ne===0||this.value.setRawValue(new rt([u,_+ue,T+Ne,V],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(o){const u=ss(!1),_=yn(u,ui(o)),T=yn(u,jr(o));_===0&&T===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class S0{constructor(o,u){this.value=u.value,this.viewProps=u.viewProps,this.hPaletteC_=new w0(o,{value:this.value,viewProps:this.viewProps}),this.svPaletteC_=new M0(o,{value:this.value,viewProps:this.viewProps}),this.alphaIcs_=u.supportsAlpha?{palette:new m0(o,{value:this.value,viewProps:this.viewProps}),text:new qr(o,{parser:ci,baseStep:.1,props:W.fromObject({draggingScale:.01,formatter:sn(2)}),value:H(0,{constraint:new qt({min:0,max:1})}),viewProps:this.viewProps})}:null,this.alphaIcs_&&Xr({primary:this.value,secondary:this.alphaIcs_.text.value,forward:_=>_.rawValue.getComponents()[3],backward:(_,T)=>{const V=_.rawValue.getComponents();return V[3]=T.rawValue,new rt(V,_.rawValue.mode)}}),this.textC_=new b0(o,{colorType:u.colorType,parser:ci,value:this.value,viewProps:this.viewProps}),this.view=new Qg(o,{alphaViews:this.alphaIcs_?{palette:this.alphaIcs_.palette.view,text:this.alphaIcs_.text.view}:null,hPaletteView:this.hPaletteC_.view,supportsAlpha:u.supportsAlpha,svPaletteView:this.svPaletteC_.view,textView:this.textC_.view})}get textController(){return this.textC_}}const Il=y("colsw");class T0{constructor(o,u){this.onValueChange_=this.onValueChange_.bind(this),u.value.emitter.on("change",this.onValueChange_),this.value=u.value,this.element=o.createElement("div"),this.element.classList.add(Il()),u.viewProps.bindClassModifiers(this.element);const _=o.createElement("div");_.classList.add(Il("sw")),this.element.appendChild(_),this.swatchElem_=_;const T=o.createElement("button");T.classList.add(Il("b")),u.viewProps.bindDisabled(T),this.element.appendChild(T),this.buttonElement=T,this.update_()}update_(){const o=this.value.rawValue;this.swatchElem_.style.backgroundColor=Al(o)}onValueChange_(){this.update_()}}class A0{constructor(o,u){this.value=u.value,this.viewProps=u.viewProps,this.view=new T0(o,{value:this.value,viewProps:this.viewProps})}}class Dl{constructor(o,u){this.onButtonBlur_=this.onButtonBlur_.bind(this),this.onButtonClick_=this.onButtonClick_.bind(this),this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.value=u.value,this.viewProps=u.viewProps,this.foldable_=st.create(u.expanded),this.swatchC_=new A0(o,{value:this.value,viewProps:this.viewProps});const _=this.swatchC_.view.buttonElement;_.addEventListener("blur",this.onButtonBlur_),_.addEventListener("click",this.onButtonClick_),this.textC_=new Bo(o,{parser:u.parser,props:W.fromObject({formatter:u.formatter}),value:this.value,viewProps:this.viewProps}),this.view=new Gg(o,{foldable:this.foldable_,pickerLayout:u.pickerLayout}),this.view.swatchElement.appendChild(this.swatchC_.view.element),this.view.textElement.appendChild(this.textC_.view.element),this.popC_=u.pickerLayout==="popup"?new $u(o,{viewProps:this.viewProps}):null;const T=new S0(o,{colorType:u.colorType,supportsAlpha:u.supportsAlpha,value:this.value,viewProps:this.viewProps});T.view.allFocusableElements.forEach(V=>{V.addEventListener("blur",this.onPopupChildBlur_),V.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=T,this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(T.view.element),Xr({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:V=>V.rawValue,backward:(V,j)=>j.rawValue})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),Pe(this.foldable_,this.view.pickerElement))}get textController(){return this.textC_}onButtonBlur_(o){if(!this.popC_)return;const u=this.view.element,_=o.relatedTarget;(!_||!u.contains(_))&&(this.popC_.shows.rawValue=!1)}onButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(o){if(!this.popC_)return;const u=this.popC_.view.element,_=ae(o);_&&u.contains(_)||_&&_===this.swatchC_.view.buttonElement&&!It(u.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(o){this.popC_?o.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&o.key==="Escape"&&this.swatchC_.view.buttonElement.focus()}}function C0(p,o){return rt.isColorObject(p)?rt.fromObject(p,o):rt.black(o)}function P0(p){return is(p.getComponents("rgb")).reduce((o,u)=>o<<8|Math.floor(u)&255,0)}function R0(p){return p.getComponents("rgb").reduce((o,u,_)=>{const T=Math.floor(_===3?u*255:u)&255;return o<<8|T},0)>>>0}function L0(p){return new rt([p>>16&255,p>>8&255,p&255],"rgb")}function I0(p){return new rt([p>>24&255,p>>16&255,p>>8&255,Rt(p&255,0,255,0,1)],"rgb")}function D0(p){return typeof p!="number"?rt.black():L0(p)}function N0(p){return typeof p!="number"?rt.black():I0(p)}function U0(p){const o=Cl(p);return o?(u,_)=>{Yr(u,o(_))}:null}function F0(p){const o=p?R0:P0;return(u,_)=>{Yr(u,o(_))}}function O0(p,o,u){const _=o.toRgbaObject(u);p.writeProperty("r",_.r),p.writeProperty("g",_.g),p.writeProperty("b",_.b),p.writeProperty("a",_.a)}function B0(p,o,u){const _=o.toRgbaObject(u);p.writeProperty("r",_.r),p.writeProperty("g",_.g),p.writeProperty("b",_.b)}function k0(p,o){return(u,_)=>{p?O0(u,_,o):B0(u,_,o)}}function Nl(p){var o;return!!((p==null?void 0:p.alpha)||((o=p==null?void 0:p.color)===null||o===void 0?void 0:o.alpha))}function V0(p){return p?o=>Al(o,"0x"):o=>Lh(o,"0x")}function z0(p){return"color"in p||"view"in p&&p.view==="color"}const H0={id:"input-color-number",type:"input",accept:(p,o)=>{if(typeof p!="number"||!z0(o))return null;const u=Ml(o);return u?{initialValue:p,params:u}:null},binding:{reader:p=>Nl(p.params)?N0:D0,equals:rt.equals,writer:p=>F0(Nl(p.params))},controller:p=>{const o=Nl(p.params),u="expanded"in p.params?p.params.expanded:void 0,_="picker"in p.params?p.params.picker:void 0;return new Dl(p.document,{colorType:"int",expanded:u!=null?u:!1,formatter:V0(o),parser:Tl("int"),pickerLayout:_!=null?_:"popup",supportsAlpha:o,value:p.value,viewProps:p.viewProps})}};function G0(p){return rt.isRgbaColorObject(p)}function W0(p){return o=>C0(o,p)}function X0(p,o){return u=>p?Nh(u,o):Dh(u,o)}const j0={id:"input-color-object",type:"input",accept:(p,o)=>{if(!rt.isColorObject(p))return null;const u=Ml(o);return u?{initialValue:p,params:u}:null},binding:{reader:p=>W0(rs(p.params)),equals:rt.equals,writer:p=>k0(G0(p.initialValue),rs(p.params))},controller:p=>{var o;const u=rt.isRgbaColorObject(p.initialValue),_="expanded"in p.params?p.params.expanded:void 0,T="picker"in p.params?p.params.picker:void 0,V=(o=rs(p.params))!==null&&o!==void 0?o:"int";return new Dl(p.document,{colorType:V,expanded:_!=null?_:!1,formatter:X0(u,V),parser:Tl(V),pickerLayout:T!=null?T:"popup",supportsAlpha:u,value:p.value,viewProps:p.viewProps})}},q0={id:"input-color-string",type:"input",accept:(p,o)=>{if(typeof p!="string"||"view"in o&&o.view==="text")return null;const u=Sl(p,rs(o));if(!u||!Cl(u))return null;const T=Ml(o);return T?{initialValue:p,params:T}:null},binding:{reader:p=>{var o;return o0((o=rs(p.params))!==null&&o!==void 0?o:"int")},equals:rt.equals,writer:p=>{const o=Sl(p.initialValue,rs(p.params));if(!o)throw b.shouldNeverHappen();const u=U0(o);if(!u)throw b.notBindable();return u}},controller:p=>{const o=Sl(p.initialValue,rs(p.params));if(!o)throw b.shouldNeverHappen();const u=Cl(o);if(!u)throw b.shouldNeverHappen();const _="expanded"in p.params?p.params.expanded:void 0,T="picker"in p.params?p.params.picker:void 0;return new Dl(p.document,{colorType:o.type,expanded:_!=null?_:!1,formatter:u,parser:Tl(o.type),pickerLayout:T!=null?T:"popup",supportsAlpha:o.alpha,value:p.value,viewProps:p.viewProps})}};class Di{constructor(o){this.components=o.components,this.asm_=o.assembly}constrain(o){const u=this.asm_.toComponents(o).map((_,T)=>{var V,j;return(j=(V=this.components[T])===null||V===void 0?void 0:V.constrain(_))!==null&&j!==void 0?j:_});return this.asm_.fromComponents(u)}}const Fh=y("pndtxt");class Y0{constructor(o,u){this.textViews=u.textViews,this.element=o.createElement("div"),this.element.classList.add(Fh()),this.textViews.forEach(_=>{const T=o.createElement("div");T.classList.add(Fh("a")),T.appendChild(_.element),this.element.appendChild(T)})}}function K0(p,o,u){return new qr(p,{arrayPosition:u===0?"fst":u===o.axes.length-1?"lst":"mid",baseStep:o.axes[u].baseStep,parser:o.parser,props:o.axes[u].textProps,value:H(0,{constraint:o.axes[u].constraint}),viewProps:o.viewProps})}class Ul{constructor(o,u){this.value=u.value,this.viewProps=u.viewProps,this.acs_=u.axes.map((_,T)=>K0(o,u,T)),this.acs_.forEach((_,T)=>{Xr({primary:this.value,secondary:_.value,forward:V=>u.assembly.toComponents(V.rawValue)[T],backward:(V,j)=>{const ue=u.assembly.toComponents(V.rawValue);return ue[T]=j.rawValue,u.assembly.fromComponents(ue)}})}),this.view=new Y0(o,{textViews:this.acs_.map(_=>_.view)})}}function Oh(p,o){return"step"in p&&!f(p.step)?new Ri(p.step,o):null}function Bh(p){return"max"in p&&!f(p.max)||"min"in p&&!f(p.min)?new qt({max:p.max,min:p.min}):null}function $0(p,o){const u=[],_=Oh(p,o);_&&u.push(_);const T=Bh(p);T&&u.push(T);const V=wl(p.options);return V&&u.push(V),new Ot(u)}function Z0(p){const o=p?Qt(p,qt):null;return o?[o.minValue,o.maxValue]:[void 0,void 0]}function Q0(p){const[o,u]=Z0(p);return[o!=null?o:0,u!=null?u:100]}const J0={id:"input-number",type:"input",accept:(p,o)=>{if(typeof p!="number")return null;const u=fe,_=K(o,{format:u.optional.function,max:u.optional.number,min:u.optional.number,options:u.optional.custom(Vo),step:u.optional.number});return _?{initialValue:p,params:_}:null},binding:{reader:p=>ih,constraint:p=>$0(p.params,p.initialValue),writer:p=>Yr},controller:p=>{var o,u;const _=p.value,T=p.constraint;if(T&&Qt(T,li))return new Hr(p.document,{props:W.fromObject({options:(o=El(T))!==null&&o!==void 0?o:[]}),value:_,viewProps:p.viewProps});const V=(u="format"in p.params?p.params.format:void 0)!==null&&u!==void 0?u:sn(zo(T,_.rawValue));if(T&&Qt(T,qt)){const[j,ue]=Q0(T);return new yl(p.document,{baseStep:Cs(T),parser:ci,sliderProps:W.fromObject({maxValue:ue,minValue:j}),textProps:W.fromObject({draggingScale:Ps(T,_.rawValue),formatter:V}),value:_,viewProps:p.viewProps})}return new qr(p.document,{baseStep:Cs(T),parser:ci,props:W.fromObject({draggingScale:Ps(T,_.rawValue),formatter:V}),value:_,viewProps:p.viewProps})}};class Ni{constructor(o=0,u=0){this.x=o,this.y=u}getComponents(){return[this.x,this.y]}static isObject(o){if(f(o))return!1;const u=o.x,_=o.y;return!(typeof u!="number"||typeof _!="number")}static equals(o,u){return o.x===u.x&&o.y===u.y}toObject(){return{x:this.x,y:this.y}}}const kh={toComponents:p=>p.getComponents(),fromComponents:p=>new Ni(...p)},Ls=y("p2d");class ev{constructor(o,u){this.element=o.createElement("div"),this.element.classList.add(Ls()),u.viewProps.bindClassModifiers(this.element),C(u.expanded,B(this.element,Ls(void 0,"expanded")));const _=o.createElement("div");_.classList.add(Ls("h")),this.element.appendChild(_);const T=o.createElement("button");T.classList.add(Ls("b")),T.appendChild(je(o,"p2dpad")),u.viewProps.bindDisabled(T),_.appendChild(T),this.buttonElement=T;const V=o.createElement("div");if(V.classList.add(Ls("t")),_.appendChild(V),this.textElement=V,u.pickerLayout==="inline"){const j=o.createElement("div");j.classList.add(Ls("p")),this.element.appendChild(j),this.pickerElement=j}else this.pickerElement=null}}const Ui=y("p2dp");class tv{constructor(o,u){this.onFoldableChange_=this.onFoldableChange_.bind(this),this.onValueChange_=this.onValueChange_.bind(this),this.invertsY_=u.invertsY,this.maxValue_=u.maxValue,this.element=o.createElement("div"),this.element.classList.add(Ui()),u.layout==="popup"&&this.element.classList.add(Ui(void 0,"p"));const _=o.createElement("div");_.classList.add(Ui("p")),u.viewProps.bindTabIndex(_),this.element.appendChild(_),this.padElement=_;const T=o.createElementNS(He,"svg");T.classList.add(Ui("g")),this.padElement.appendChild(T),this.svgElem_=T;const V=o.createElementNS(He,"line");V.classList.add(Ui("ax")),V.setAttributeNS(null,"x1","0"),V.setAttributeNS(null,"y1","50%"),V.setAttributeNS(null,"x2","100%"),V.setAttributeNS(null,"y2","50%"),this.svgElem_.appendChild(V);const j=o.createElementNS(He,"line");j.classList.add(Ui("ax")),j.setAttributeNS(null,"x1","50%"),j.setAttributeNS(null,"y1","0"),j.setAttributeNS(null,"x2","50%"),j.setAttributeNS(null,"y2","100%"),this.svgElem_.appendChild(j);const ue=o.createElementNS(He,"line");ue.classList.add(Ui("l")),ue.setAttributeNS(null,"x1","50%"),ue.setAttributeNS(null,"y1","50%"),this.svgElem_.appendChild(ue),this.lineElem_=ue;const Ne=o.createElement("div");Ne.classList.add(Ui("m")),this.padElement.appendChild(Ne),this.markerElem_=Ne,u.value.emitter.on("change",this.onValueChange_),this.value=u.value,this.update_()}get allFocusableElements(){return[this.padElement]}update_(){const[o,u]=this.value.rawValue.getComponents(),_=this.maxValue_,T=Rt(o,-_,+_,0,100),V=Rt(u,-_,+_,0,100),j=this.invertsY_?100-V:V;this.lineElem_.setAttributeNS(null,"x2",`${T}%`),this.lineElem_.setAttributeNS(null,"y2",`${j}%`),this.markerElem_.style.left=`${T}%`,this.markerElem_.style.top=`${j}%`}onValueChange_(){this.update_()}onFoldableChange_(){this.update_()}}function Vh(p,o,u){return[yn(o[0],ui(p)),yn(o[1],jr(p))*(u?1:-1)]}class nv{constructor(o,u){this.onPadKeyDown_=this.onPadKeyDown_.bind(this),this.onPadKeyUp_=this.onPadKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=u.value,this.viewProps=u.viewProps,this.baseSteps_=u.baseSteps,this.maxValue_=u.maxValue,this.invertsY_=u.invertsY,this.view=new tv(o,{invertsY:this.invertsY_,layout:u.layout,maxValue:this.maxValue_,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new ts(this.view.padElement),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.padElement.addEventListener("keydown",this.onPadKeyDown_),this.view.padElement.addEventListener("keyup",this.onPadKeyUp_)}handlePointerEvent_(o,u){if(!o.point)return;const _=this.maxValue_,T=Rt(o.point.x,0,o.bounds.width,-_,+_),V=Rt(this.invertsY_?o.bounds.height-o.point.y:o.point.y,0,o.bounds.height,-_,+_);this.value.setRawValue(new Ni(T,V),u)}onPointerDown_(o){this.handlePointerEvent_(o.data,{forceEmit:!1,last:!1})}onPointerMove_(o){this.handlePointerEvent_(o.data,{forceEmit:!1,last:!1})}onPointerUp_(o){this.handlePointerEvent_(o.data,{forceEmit:!0,last:!0})}onPadKeyDown_(o){oh(o.key)&&o.preventDefault();const[u,_]=Vh(o,this.baseSteps_,this.invertsY_);u===0&&_===0||this.value.setRawValue(new Ni(this.value.rawValue.x+u,this.value.rawValue.y+_),{forceEmit:!1,last:!1})}onPadKeyUp_(o){const[u,_]=Vh(o,this.baseSteps_,this.invertsY_);u===0&&_===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class iv{constructor(o,u){var _,T;this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.onPadButtonBlur_=this.onPadButtonBlur_.bind(this),this.onPadButtonClick_=this.onPadButtonClick_.bind(this),this.value=u.value,this.viewProps=u.viewProps,this.foldable_=st.create(u.expanded),this.popC_=u.pickerLayout==="popup"?new $u(o,{viewProps:this.viewProps}):null;const V=new nv(o,{baseSteps:[u.axes[0].baseStep,u.axes[1].baseStep],invertsY:u.invertsY,layout:u.pickerLayout,maxValue:u.maxValue,value:this.value,viewProps:this.viewProps});V.view.allFocusableElements.forEach(j=>{j.addEventListener("blur",this.onPopupChildBlur_),j.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=V,this.textC_=new Ul(o,{assembly:kh,axes:u.axes,parser:u.parser,value:this.value,viewProps:this.viewProps}),this.view=new ev(o,{expanded:this.foldable_.value("expanded"),pickerLayout:u.pickerLayout,viewProps:this.viewProps}),this.view.textElement.appendChild(this.textC_.view.element),(_=this.view.buttonElement)===null||_===void 0||_.addEventListener("blur",this.onPadButtonBlur_),(T=this.view.buttonElement)===null||T===void 0||T.addEventListener("click",this.onPadButtonClick_),this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(this.pickerC_.view.element),Xr({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:j=>j.rawValue,backward:(j,ue)=>ue.rawValue})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),Pe(this.foldable_,this.view.pickerElement))}onPadButtonBlur_(o){if(!this.popC_)return;const u=this.view.element,_=o.relatedTarget;(!_||!u.contains(_))&&(this.popC_.shows.rawValue=!1)}onPadButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(o){if(!this.popC_)return;const u=this.popC_.view.element,_=ae(o);_&&u.contains(_)||_&&_===this.view.buttonElement&&!It(u.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(o){this.popC_?o.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&o.key==="Escape"&&this.view.buttonElement.focus()}}function sv(p){return Ni.isObject(p)?new Ni(p.x,p.y):new Ni}function rv(p,o){p.writeProperty("x",o.x),p.writeProperty("y",o.y)}function hi(p,o){if(!p)return;const u=[],_=Oh(p,o);_&&u.push(_);const T=Bh(p);return T&&u.push(T),new Ot(u)}function ov(p,o){return new Di({assembly:kh,components:[hi("x"in p?p.x:void 0,o.x),hi("y"in p?p.y:void 0,o.y)]})}function zh(p,o){var u,_;const T=p&&Qt(p,qt);if(T)return Math.max(Math.abs((u=T.minValue)!==null&&u!==void 0?u:0),Math.abs((_=T.maxValue)!==null&&_!==void 0?_:0));const V=Cs(p);return Math.max(Math.abs(V)*10,Math.abs(o)*10)}function av(p,o){const u=o instanceof Di?o.components[0]:void 0,_=o instanceof Di?o.components[1]:void 0,T=zh(u,p.x),V=zh(_,p.y);return Math.max(T,V)}function Hh(p,o){return{baseStep:Cs(o),constraint:o,textProps:W.fromObject({draggingScale:Ps(o,p),formatter:sn(zo(o,p))})}}function lv(p){if(!("y"in p))return!1;const o=p.y;return o&&"inverted"in o?!!o.inverted:!1}const cv={id:"input-point2d",type:"input",accept:(p,o)=>{if(!Ni.isObject(p))return null;const u=fe,_=K(o,{expanded:u.optional.boolean,picker:u.optional.custom(ch),x:u.optional.custom(Li),y:u.optional.object({inverted:u.optional.boolean,max:u.optional.number,min:u.optional.number,step:u.optional.number})});return _?{initialValue:p,params:_}:null},binding:{reader:p=>sv,constraint:p=>ov(p.params,p.initialValue),equals:Ni.equals,writer:p=>rv},controller:p=>{const o=p.document,u=p.value,_=p.constraint;if(!(_ instanceof Di))throw b.shouldNeverHappen();const T="expanded"in p.params?p.params.expanded:void 0,V="picker"in p.params?p.params.picker:void 0;return new iv(o,{axes:[Hh(u.rawValue.x,_.components[0]),Hh(u.rawValue.y,_.components[1])],expanded:T!=null?T:!1,invertsY:lv(p.params),maxValue:av(u.rawValue,_),parser:ci,pickerLayout:V!=null?V:"popup",value:u,viewProps:p.viewProps})}};class Is{constructor(o=0,u=0,_=0){this.x=o,this.y=u,this.z=_}getComponents(){return[this.x,this.y,this.z]}static isObject(o){if(f(o))return!1;const u=o.x,_=o.y,T=o.z;return!(typeof u!="number"||typeof _!="number"||typeof T!="number")}static equals(o,u){return o.x===u.x&&o.y===u.y&&o.z===u.z}toObject(){return{x:this.x,y:this.y,z:this.z}}}const Gh={toComponents:p=>p.getComponents(),fromComponents:p=>new Is(...p)};function uv(p){return Is.isObject(p)?new Is(p.x,p.y,p.z):new Is}function hv(p,o){p.writeProperty("x",o.x),p.writeProperty("y",o.y),p.writeProperty("z",o.z)}function dv(p,o){return new Di({assembly:Gh,components:[hi("x"in p?p.x:void 0,o.x),hi("y"in p?p.y:void 0,o.y),hi("z"in p?p.z:void 0,o.z)]})}function Fl(p,o){return{baseStep:Cs(o),constraint:o,textProps:W.fromObject({draggingScale:Ps(o,p),formatter:sn(zo(o,p))})}}const pv={id:"input-point3d",type:"input",accept:(p,o)=>{if(!Is.isObject(p))return null;const u=fe,_=K(o,{x:u.optional.custom(Li),y:u.optional.custom(Li),z:u.optional.custom(Li)});return _?{initialValue:p,params:_}:null},binding:{reader:p=>uv,constraint:p=>dv(p.params,p.initialValue),equals:Is.equals,writer:p=>hv},controller:p=>{const o=p.value,u=p.constraint;if(!(u instanceof Di))throw b.shouldNeverHappen();return new Ul(p.document,{assembly:Gh,axes:[Fl(o.rawValue.x,u.components[0]),Fl(o.rawValue.y,u.components[1]),Fl(o.rawValue.z,u.components[2])],parser:ci,value:o,viewProps:p.viewProps})}};class Ds{constructor(o=0,u=0,_=0,T=0){this.x=o,this.y=u,this.z=_,this.w=T}getComponents(){return[this.x,this.y,this.z,this.w]}static isObject(o){if(f(o))return!1;const u=o.x,_=o.y,T=o.z,V=o.w;return!(typeof u!="number"||typeof _!="number"||typeof T!="number"||typeof V!="number")}static equals(o,u){return o.x===u.x&&o.y===u.y&&o.z===u.z&&o.w===u.w}toObject(){return{x:this.x,y:this.y,z:this.z,w:this.w}}}const Wh={toComponents:p=>p.getComponents(),fromComponents:p=>new Ds(...p)};function fv(p){return Ds.isObject(p)?new Ds(p.x,p.y,p.z,p.w):new Ds}function mv(p,o){p.writeProperty("x",o.x),p.writeProperty("y",o.y),p.writeProperty("z",o.z),p.writeProperty("w",o.w)}function gv(p,o){return new Di({assembly:Wh,components:[hi("x"in p?p.x:void 0,o.x),hi("y"in p?p.y:void 0,o.y),hi("z"in p?p.z:void 0,o.z),hi("w"in p?p.w:void 0,o.w)]})}function vv(p,o){return{baseStep:Cs(o),constraint:o,textProps:W.fromObject({draggingScale:Ps(o,p),formatter:sn(zo(o,p))})}}const _v={id:"input-point4d",type:"input",accept:(p,o)=>{if(!Ds.isObject(p))return null;const u=fe,_=K(o,{x:u.optional.custom(Li),y:u.optional.custom(Li),z:u.optional.custom(Li),w:u.optional.custom(Li)});return _?{initialValue:p,params:_}:null},binding:{reader:p=>fv,constraint:p=>gv(p.params,p.initialValue),equals:Ds.equals,writer:p=>mv},controller:p=>{const o=p.value,u=p.constraint;if(!(u instanceof Di))throw b.shouldNeverHappen();return new Ul(p.document,{assembly:Wh,axes:o.rawValue.getComponents().map((_,T)=>vv(_,u.components[T])),parser:ci,value:o,viewProps:p.viewProps})}};function xv(p){const o=[],u=wl(p.options);return u&&o.push(u),new Ot(o)}const bv={id:"input-string",type:"input",accept:(p,o)=>{if(typeof p!="string")return null;const _=K(o,{options:fe.optional.custom(Vo)});return _?{initialValue:p,params:_}:null},binding:{reader:p=>sh,constraint:p=>xv(p.params),writer:p=>Yr},controller:p=>{var o;const u=p.document,_=p.value,T=p.constraint;return T&&Qt(T,li)?new Hr(u,{props:W.fromObject({options:(o=El(T))!==null&&o!==void 0?o:[]}),value:_,viewProps:p.viewProps}):new Bo(u,{parser:V=>V,props:W.fromObject({formatter:vl}),value:_,viewProps:p.viewProps})}},$r={monitor:{defaultInterval:200,defaultLineCount:3}},Xh=y("mll");class yv{constructor(o,u){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=u.formatter,this.element=o.createElement("div"),this.element.classList.add(Xh()),u.viewProps.bindClassModifiers(this.element);const _=o.createElement("textarea");_.classList.add(Xh("i")),_.style.height=`calc(var(--bld-us) * ${u.lineCount})`,_.readOnly=!0,u.viewProps.bindDisabled(_),this.element.appendChild(_),this.textareaElem_=_,u.value.emitter.on("change",this.onValueUpdate_),this.value=u.value,this.update_()}update_(){const o=this.textareaElem_,u=o.scrollTop===o.scrollHeight-o.clientHeight,_=[];this.value.rawValue.forEach(T=>{T!==void 0&&_.push(this.formatter_(T))}),o.textContent=_.join(`
`),u&&(o.scrollTop=o.scrollHeight)}onValueUpdate_(){this.update_()}}class Ol{constructor(o,u){this.value=u.value,this.viewProps=u.viewProps,this.view=new yv(o,{formatter:u.formatter,lineCount:u.lineCount,value:this.value,viewProps:this.viewProps})}}const jh=y("sgl");class wv{constructor(o,u){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=u.formatter,this.element=o.createElement("div"),this.element.classList.add(jh()),u.viewProps.bindClassModifiers(this.element);const _=o.createElement("input");_.classList.add(jh("i")),_.readOnly=!0,_.type="text",u.viewProps.bindDisabled(_),this.element.appendChild(_),this.inputElement=_,u.value.emitter.on("change",this.onValueUpdate_),this.value=u.value,this.update_()}update_(){const o=this.value.rawValue,u=o[o.length-1];this.inputElement.value=u!==void 0?this.formatter_(u):""}onValueUpdate_(){this.update_()}}class Bl{constructor(o,u){this.value=u.value,this.viewProps=u.viewProps,this.view=new wv(o,{formatter:u.formatter,value:this.value,viewProps:this.viewProps})}}const Ev={id:"monitor-bool",type:"monitor",accept:(p,o)=>{if(typeof p!="boolean")return null;const _=K(o,{lineCount:fe.optional.number});return _?{initialValue:p,params:_}:null},binding:{reader:p=>Qu},controller:p=>{var o;return p.value.rawValue.length===1?new Bl(p.document,{formatter:Ju,value:p.value,viewProps:p.viewProps}):new Ol(p.document,{formatter:Ju,lineCount:(o=p.params.lineCount)!==null&&o!==void 0?o:$r.monitor.defaultLineCount,value:p.value,viewProps:p.viewProps})}},Fi=y("grl");class Mv{constructor(o,u){this.onCursorChange_=this.onCursorChange_.bind(this),this.onValueUpdate_=this.onValueUpdate_.bind(this),this.element=o.createElement("div"),this.element.classList.add(Fi()),u.viewProps.bindClassModifiers(this.element),this.formatter_=u.formatter,this.props_=u.props,this.cursor_=u.cursor,this.cursor_.emitter.on("change",this.onCursorChange_);const _=o.createElementNS(He,"svg");_.classList.add(Fi("g")),_.style.height=`calc(var(--bld-us) * ${u.lineCount})`,this.element.appendChild(_),this.svgElem_=_;const T=o.createElementNS(He,"polyline");this.svgElem_.appendChild(T),this.lineElem_=T;const V=o.createElement("div");V.classList.add(Fi("t"),y("tt")()),this.element.appendChild(V),this.tooltipElem_=V,u.value.emitter.on("change",this.onValueUpdate_),this.value=u.value,this.update_()}get graphElement(){return this.svgElem_}update_(){const o=this.svgElem_.getBoundingClientRect(),u=this.value.rawValue.length-1,_=this.props_.get("minValue"),T=this.props_.get("maxValue"),V=[];this.value.rawValue.forEach((ut,ht)=>{if(ut===void 0)return;const di=Rt(ht,0,u,0,o.width),Zr=Rt(ut,_,T,o.height,0);V.push([di,Zr].join(","))}),this.lineElem_.setAttributeNS(null,"points",V.join(" "));const j=this.tooltipElem_,ue=this.value.rawValue[this.cursor_.rawValue];if(ue===void 0){j.classList.remove(Fi("t","a"));return}const Ne=Rt(this.cursor_.rawValue,0,u,0,o.width),Ye=Rt(ue,_,T,o.height,0);j.style.left=`${Ne}px`,j.style.top=`${Ye}px`,j.textContent=`${this.formatter_(ue)}`,j.classList.contains(Fi("t","a"))||(j.classList.add(Fi("t","a"),Fi("t","in")),Be(j),j.classList.remove(Fi("t","in")))}onValueUpdate_(){this.update_()}onCursorChange_(){this.update_()}}class Sv{constructor(o,u){if(this.onGraphMouseMove_=this.onGraphMouseMove_.bind(this),this.onGraphMouseLeave_=this.onGraphMouseLeave_.bind(this),this.onGraphPointerDown_=this.onGraphPointerDown_.bind(this),this.onGraphPointerMove_=this.onGraphPointerMove_.bind(this),this.onGraphPointerUp_=this.onGraphPointerUp_.bind(this),this.props_=u.props,this.value=u.value,this.viewProps=u.viewProps,this.cursor_=H(-1),this.view=new Mv(o,{cursor:this.cursor_,formatter:u.formatter,lineCount:u.lineCount,props:this.props_,value:this.value,viewProps:this.viewProps}),!It(o))this.view.element.addEventListener("mousemove",this.onGraphMouseMove_),this.view.element.addEventListener("mouseleave",this.onGraphMouseLeave_);else{const _=new ts(this.view.element);_.emitter.on("down",this.onGraphPointerDown_),_.emitter.on("move",this.onGraphPointerMove_),_.emitter.on("up",this.onGraphPointerUp_)}}onGraphMouseLeave_(){this.cursor_.rawValue=-1}onGraphMouseMove_(o){const u=this.view.element.getBoundingClientRect();this.cursor_.rawValue=Math.floor(Rt(o.offsetX,0,u.width,0,this.value.rawValue.length))}onGraphPointerDown_(o){this.onGraphPointerMove_(o)}onGraphPointerMove_(o){if(!o.data.point){this.cursor_.rawValue=-1;return}this.cursor_.rawValue=Math.floor(Rt(o.data.point.x,0,o.data.bounds.width,0,this.value.rawValue.length))}onGraphPointerUp_(){this.cursor_.rawValue=-1}}function kl(p){return"format"in p&&!f(p.format)?p.format:sn(2)}function Tv(p){var o;return p.value.rawValue.length===1?new Bl(p.document,{formatter:kl(p.params),value:p.value,viewProps:p.viewProps}):new Ol(p.document,{formatter:kl(p.params),lineCount:(o=p.params.lineCount)!==null&&o!==void 0?o:$r.monitor.defaultLineCount,value:p.value,viewProps:p.viewProps})}function Av(p){var o,u,_;return new Sv(p.document,{formatter:kl(p.params),lineCount:(o=p.params.lineCount)!==null&&o!==void 0?o:$r.monitor.defaultLineCount,props:W.fromObject({maxValue:(u="max"in p.params?p.params.max:null)!==null&&u!==void 0?u:100,minValue:(_="min"in p.params?p.params.min:null)!==null&&_!==void 0?_:0}),value:p.value,viewProps:p.viewProps})}function qh(p){return"view"in p&&p.view==="graph"}const Cv={id:"monitor-number",type:"monitor",accept:(p,o)=>{if(typeof p!="number")return null;const u=fe,_=K(o,{format:u.optional.function,lineCount:u.optional.number,max:u.optional.number,min:u.optional.number,view:u.optional.string});return _?{initialValue:p,params:_}:null},binding:{defaultBufferSize:p=>qh(p)?64:1,reader:p=>ih},controller:p=>qh(p.params)?Av(p):Tv(p)},Pv={id:"monitor-string",type:"monitor",accept:(p,o)=>{if(typeof p!="string")return null;const u=fe,_=K(o,{lineCount:u.optional.number,multiline:u.optional.boolean});return _?{initialValue:p,params:_}:null},binding:{reader:p=>sh},controller:p=>{var o;const u=p.value;return u.rawValue.length>1||"multiline"in p.params&&p.params.multiline?new Ol(p.document,{formatter:vl,lineCount:(o=p.params.lineCount)!==null&&o!==void 0?o:$r.monitor.defaultLineCount,value:u,viewProps:p.viewProps}):new Bl(p.document,{formatter:vl,value:u,viewProps:p.viewProps})}};class Rv{constructor(o){this.onValueChange_=this.onValueChange_.bind(this),this.reader=o.reader,this.writer=o.writer,this.emitter=new g,this.value=o.value,this.value.emitter.on("change",this.onValueChange_),this.target=o.target,this.read()}read(){const o=this.target.read();o!==void 0&&(this.value.rawValue=this.reader(o))}write_(o){this.writer(this.target,o)}onValueChange_(o){this.write_(o.rawValue),this.emitter.emit("change",{options:o.options,rawValue:o.rawValue,sender:this})}}function Lv(p,o){const u=p.accept(o.target.read(),o.params);if(f(u))return null;const _=fe,T={target:o.target,initialValue:u.initialValue,params:u.params},V=p.binding.reader(T),j=p.binding.constraint?p.binding.constraint(T):void 0,ue=H(V(u.initialValue),{constraint:j,equals:p.binding.equals}),Ne=new Rv({reader:V,target:o.target,value:ue,writer:p.binding.writer(T)}),Ye=_.optional.boolean(o.params.disabled).value,ut=_.optional.boolean(o.params.hidden).value,ht=p.controller({constraint:j,document:o.document,initialValue:u.initialValue,params:u.params,value:Ne.value,viewProps:Fe.create({disabled:Ye,hidden:ut})}),di=_.optional.string(o.params.label).value;return new re(o.document,{binding:Ne,blade:oe(),props:W.fromObject({label:di!=null?di:o.target.key}),valueController:ht})}class Iv{constructor(o){this.onTick_=this.onTick_.bind(this),this.reader_=o.reader,this.target=o.target,this.emitter=new g,this.value=o.value,this.ticker=o.ticker,this.ticker.emitter.on("tick",this.onTick_),this.read()}dispose(){this.ticker.dispose()}read(){const o=this.target.read();if(o===void 0)return;const u=this.value.rawValue,_=this.reader_(o);this.value.rawValue=Ig(u,_),this.emitter.emit("update",{rawValue:_,sender:this})}onTick_(o){this.read()}}function Dv(p,o){return o===0?new es:new Vr(p,o!=null?o:$r.monitor.defaultInterval)}function Nv(p,o){var u,_,T;const V=fe,j=p.accept(o.target.read(),o.params);if(f(j))return null;const ue={target:o.target,initialValue:j.initialValue,params:j.params},Ne=p.binding.reader(ue),Ye=(_=(u=V.optional.number(o.params.bufferSize).value)!==null&&u!==void 0?u:p.binding.defaultBufferSize&&p.binding.defaultBufferSize(j.params))!==null&&_!==void 0?_:1,ut=V.optional.number(o.params.interval).value,ht=new Iv({reader:Ne,target:o.target,ticker:Dv(o.document,ut),value:Rg(Ye)}),di=V.optional.boolean(o.params.disabled).value,Zr=V.optional.boolean(o.params.hidden).value,Qr=p.controller({document:o.document,params:j.params,value:ht.value,viewProps:Fe.create({disabled:di,hidden:Zr})}),Ns=(T=V.optional.string(o.params.label).value)!==null&&T!==void 0?T:o.target.key;return new Me(o.document,{binding:ht,blade:oe(),props:W.fromObject({label:Ns}),valueController:Qr})}class Uv{constructor(){this.pluginsMap_={blades:[],inputs:[],monitors:[]}}getAll(){return[...this.pluginsMap_.blades,...this.pluginsMap_.inputs,...this.pluginsMap_.monitors]}register(o){o.type==="blade"?this.pluginsMap_.blades.unshift(o):o.type==="input"?this.pluginsMap_.inputs.unshift(o):o.type==="monitor"&&this.pluginsMap_.monitors.unshift(o)}createInput(o,u,_){const T=u.read();if(f(T))throw new b({context:{key:u.key},type:"nomatchingcontroller"});const V=this.pluginsMap_.inputs.reduce((j,ue)=>j!=null?j:Lv(ue,{document:o,target:u,params:_}),null);if(V)return V;throw new b({context:{key:u.key},type:"nomatchingcontroller"})}createMonitor(o,u,_){const T=this.pluginsMap_.monitors.reduce((V,j)=>V!=null?V:Nv(j,{document:o,params:_,target:u}),null);if(T)return T;throw new b({context:{key:u.key},type:"nomatchingcontroller"})}createBlade(o,u){const _=this.pluginsMap_.blades.reduce((T,V)=>T!=null?T:Fo(V,{document:o,params:u}),null);if(!_)throw new b({type:"nomatchingview",context:{params:u}});return _}createBladeApi(o){if(o instanceof re)return new O(o);if(o instanceof Me)return new le(o);if(o instanceof Pi)return new ct(o,this);const u=this.pluginsMap_.blades.reduce((_,T)=>_!=null?_:T.api({controller:o,pool:this}),null);if(!u)throw b.shouldNeverHappen();return u}}function Fv(){const p=new Uv;return[cv,pv,_v,bv,J0,q0,j0,H0,Hg,Ev,Pv,Cv,Oe,fl,ye,$n].forEach(o=>{p.register(o)}),p}class Yh extends i{constructor(o){super(o),this.emitter_=new g,this.controller_.valueController.value.emitter.on("change",u=>{this.emitter_.emit("change",{event:new a(this,u.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(o){this.controller_.props.set("label",o)}get options(){return this.controller_.valueController.props.get("options")}set options(o){this.controller_.valueController.props.set("options",o)}get value(){return this.controller_.valueController.value.rawValue}set value(o){this.controller_.valueController.value.rawValue=o}on(o,u){const _=u.bind(this);return this.emitter_.on(o,T=>{_(T.event)}),this}}class Kh extends i{constructor(o){super(o),this.emitter_=new g,this.controller_.valueController.value.emitter.on("change",u=>{this.emitter_.emit("change",{event:new a(this,u.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(o){this.controller_.props.set("label",o)}get maxValue(){return this.controller_.valueController.sliderController.props.get("maxValue")}set maxValue(o){this.controller_.valueController.sliderController.props.set("maxValue",o)}get minValue(){return this.controller_.valueController.sliderController.props.get("minValue")}set minValue(o){this.controller_.valueController.sliderController.props.set("minValue",o)}get value(){return this.controller_.valueController.value.rawValue}set value(o){this.controller_.valueController.value.rawValue=o}on(o,u){const _=u.bind(this);return this.emitter_.on(o,T=>{_(T.event)}),this}}class $h extends i{constructor(o){super(o),this.emitter_=new g,this.controller_.valueController.value.emitter.on("change",u=>{this.emitter_.emit("change",{event:new a(this,u.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(o){this.controller_.props.set("label",o)}get formatter(){return this.controller_.valueController.props.get("formatter")}set formatter(o){this.controller_.valueController.props.set("formatter",o)}get value(){return this.controller_.valueController.value.rawValue}set value(o){this.controller_.valueController.value.rawValue=o}on(o,u){const _=u.bind(this);return this.emitter_.on(o,T=>{_(T.event)}),this}}const Ov=function(){return{id:"list",type:"blade",accept(p){const o=fe,u=K(p,{options:o.required.custom(Vo),value:o.required.raw,view:o.required.constant("list"),label:o.optional.string});return u?{params:u}:null},controller(p){const o=new Hr(p.document,{props:W.fromObject({options:uh(p.params.options)}),value:H(p.params.value),viewProps:p.viewProps});return new N(p.document,{blade:p.blade,props:W.fromObject({label:p.params.label}),valueController:o})},api(p){return!(p.controller instanceof N)||!(p.controller.valueController instanceof Hr)?null:new Yh(p.controller)}}}();function Bv(p){return p.reduce((o,u)=>Object.assign(o,{[u.presetKey]:u.read()}),{})}function kv(p,o){p.forEach(u=>{const _=o[u.presetKey];_!==void 0&&u.write(_)})}class Vv extends Bt{constructor(o,u){super(o,u)}get element(){return this.controller_.view.element}importPreset(o){const u=this.controller_.rackController.rack.find(re).map(_=>_.binding.target);kv(u,o),this.refresh()}exportPreset(){const o=this.controller_.rackController.rack.find(re).map(u=>u.binding.target);return Bv(o)}refresh(){this.controller_.rackController.rack.find(re).forEach(o=>{o.binding.read()}),this.controller_.rackController.rack.find(Me).forEach(o=>{o.binding.read()})}}class zv extends Br{constructor(o,u){super(o,{expanded:u.expanded,blade:u.blade,props:u.props,root:!0,viewProps:u.viewProps})}}const Hv={id:"slider",type:"blade",accept(p){const o=fe,u=K(p,{max:o.required.number,min:o.required.number,view:o.required.constant("slider"),format:o.optional.function,label:o.optional.string,value:o.optional.number});return u?{params:u}:null},controller(p){var o,u;const _=(o=p.params.value)!==null&&o!==void 0?o:0,T=new yl(p.document,{baseStep:1,parser:ci,sliderProps:W.fromObject({maxValue:p.params.max,minValue:p.params.min}),textProps:W.fromObject({draggingScale:Ps(void 0,_),formatter:(u=p.params.format)!==null&&u!==void 0?u:Cg}),value:H(_),viewProps:p.viewProps});return new N(p.document,{blade:p.blade,props:W.fromObject({label:p.params.label}),valueController:T})},api(p){return!(p.controller instanceof N)||!(p.controller.valueController instanceof yl)?null:new Kh(p.controller)}},Gv=function(){return{id:"text",type:"blade",accept(p){const o=fe,u=K(p,{parse:o.required.function,value:o.required.raw,view:o.required.constant("text"),format:o.optional.function,label:o.optional.string});return u?{params:u}:null},controller(p){var o;const u=new Bo(p.document,{parser:p.params.parse,props:W.fromObject({formatter:(o=p.params.format)!==null&&o!==void 0?o:_=>String(_)}),value:H(p.params.value),viewProps:p.viewProps});return new N(p.document,{blade:p.blade,props:W.fromObject({label:p.params.label}),valueController:u})},api(p){return!(p.controller instanceof N)||!(p.controller.valueController instanceof Bo)?null:new $h(p.controller)}}}();function Wv(p){const o=p.createElement("div");return o.classList.add(y("dfw")()),p.body&&p.body.appendChild(o),o}function Zh(p,o,u){if(p.querySelector(`style[data-tp-style=${o}]`))return;const _=p.createElement("style");_.dataset.tpStyle=o,_.textContent=u,p.head.appendChild(_)}class Xv extends Vv{constructor(o){var u,_;const T=o!=null?o:{},V=(u=T.document)!==null&&u!==void 0?u:Ge(),j=Fv(),ue=new zv(V,{expanded:T.expanded,blade:oe(),props:W.fromObject({title:T.title}),viewProps:Fe.create()});super(ue,j),this.pool_=j,this.containerElem_=(_=T.container)!==null&&_!==void 0?_:Wv(V),this.containerElem_.appendChild(this.element),this.doc_=V,this.usesDefaultWrapper_=!T.container,this.setUpDefaultPlugins_()}get document(){if(!this.doc_)throw b.alreadyDisposed();return this.doc_}dispose(){const o=this.containerElem_;if(!o)throw b.alreadyDisposed();if(this.usesDefaultWrapper_){const u=o.parentElement;u&&u.removeChild(o)}this.containerElem_=null,this.doc_=null,super.dispose()}registerPlugin(o){("plugin"in o?[o.plugin]:"plugins"in o?o.plugins:[]).forEach(_=>{this.pool_.register(_),this.embedPluginStyle_(_)})}embedPluginStyle_(o){o.css&&Zh(this.document,`plugin-${o.id}`,o.css)}setUpDefaultPlugins_(){Zh(this.document,"default",'.tp-tbiv_b,.tp-coltxtv_ms,.tp-ckbv_i,.tp-rotv_b,.tp-fldv_b,.tp-mllv_i,.tp-sglv_i,.tp-grlv_g,.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw,.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0}.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{background-color:var(--btn-bg);border-radius:var(--elm-br);color:var(--btn-fg);cursor:pointer;display:block;font-weight:bold;height:var(--bld-us);line-height:var(--bld-us);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tp-p2dv_b:hover,.tp-btnv_b:hover,.tp-lstv_s:hover{background-color:var(--btn-bg-h)}.tp-p2dv_b:focus,.tp-btnv_b:focus,.tp-lstv_s:focus{background-color:var(--btn-bg-f)}.tp-p2dv_b:active,.tp-btnv_b:active,.tp-lstv_s:active{background-color:var(--btn-bg-a)}.tp-p2dv_b:disabled,.tp-btnv_b:disabled,.tp-lstv_s:disabled{opacity:.5}.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw{background-color:var(--in-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--in-fg);font-family:inherit;height:var(--bld-us);line-height:var(--bld-us);min-width:0;width:100%}.tp-txtv_i:hover,.tp-p2dpv_p:hover,.tp-colswv_sw:hover{background-color:var(--in-bg-h)}.tp-txtv_i:focus,.tp-p2dpv_p:focus,.tp-colswv_sw:focus{background-color:var(--in-bg-f)}.tp-txtv_i:active,.tp-p2dpv_p:active,.tp-colswv_sw:active{background-color:var(--in-bg-a)}.tp-txtv_i:disabled,.tp-p2dpv_p:disabled,.tp-colswv_sw:disabled{opacity:.5}.tp-mllv_i,.tp-sglv_i,.tp-grlv_g{background-color:var(--mo-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--mo-fg);height:var(--bld-us);scrollbar-color:currentColor transparent;scrollbar-width:thin;width:100%}.tp-mllv_i::-webkit-scrollbar,.tp-sglv_i::-webkit-scrollbar,.tp-grlv_g::-webkit-scrollbar{height:8px;width:8px}.tp-mllv_i::-webkit-scrollbar-corner,.tp-sglv_i::-webkit-scrollbar-corner,.tp-grlv_g::-webkit-scrollbar-corner{background-color:transparent}.tp-mllv_i::-webkit-scrollbar-thumb,.tp-sglv_i::-webkit-scrollbar-thumb,.tp-grlv_g::-webkit-scrollbar-thumb{background-clip:padding-box;background-color:currentColor;border:transparent solid 2px;border-radius:4px}.tp-rotv{--font-family: var(--tp-font-family, Roboto Mono, Source Code Pro, Menlo, Courier, monospace);--bs-br: var(--tp-base-border-radius, 6px);--cnt-h-p: var(--tp-container-horizontal-padding, 4px);--cnt-v-p: var(--tp-container-vertical-padding, 4px);--elm-br: var(--tp-element-border-radius, 2px);--bld-s: var(--tp-blade-spacing, 4px);--bld-us: var(--tp-blade-unit-size, 20px);--bs-bg: var(--tp-base-background-color, #28292e);--bs-sh: var(--tp-base-shadow-color, rgba(0, 0, 0, 0.2));--btn-bg: var(--tp-button-background-color, #adafb8);--btn-bg-a: var(--tp-button-background-color-active, #d6d7db);--btn-bg-f: var(--tp-button-background-color-focus, #c8cad0);--btn-bg-h: var(--tp-button-background-color-hover, #bbbcc4);--btn-fg: var(--tp-button-foreground-color, #28292e);--cnt-bg: var(--tp-container-background-color, rgba(187, 188, 196, 0.1));--cnt-bg-a: var(--tp-container-background-color-active, rgba(187, 188, 196, 0.25));--cnt-bg-f: var(--tp-container-background-color-focus, rgba(187, 188, 196, 0.2));--cnt-bg-h: var(--tp-container-background-color-hover, rgba(187, 188, 196, 0.15));--cnt-fg: var(--tp-container-foreground-color, #bbbcc4);--in-bg: var(--tp-input-background-color, rgba(187, 188, 196, 0.1));--in-bg-a: var(--tp-input-background-color-active, rgba(187, 188, 196, 0.25));--in-bg-f: var(--tp-input-background-color-focus, rgba(187, 188, 196, 0.2));--in-bg-h: var(--tp-input-background-color-hover, rgba(187, 188, 196, 0.15));--in-fg: var(--tp-input-foreground-color, #bbbcc4);--lbl-fg: var(--tp-label-foreground-color, rgba(187, 188, 196, 0.7));--mo-bg: var(--tp-monitor-background-color, rgba(0, 0, 0, 0.2));--mo-fg: var(--tp-monitor-foreground-color, rgba(187, 188, 196, 0.7));--grv-fg: var(--tp-groove-foreground-color, rgba(187, 188, 196, 0.1))}.tp-rotv_c>.tp-cntv.tp-v-lst,.tp-tabv_c .tp-brkv>.tp-cntv.tp-v-lst,.tp-fldv_c>.tp-cntv.tp-v-lst{margin-bottom:calc(-1*var(--cnt-v-p))}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-tabv_c .tp-brkv>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_c{border-bottom-left-radius:0}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-tabv_c .tp-brkv>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_b{border-bottom-left-radius:0}.tp-rotv_c>*:not(.tp-v-fst),.tp-tabv_c .tp-brkv>*:not(.tp-v-fst),.tp-fldv_c>*:not(.tp-v-fst){margin-top:var(--bld-s)}.tp-rotv_c>.tp-sprv:not(.tp-v-fst),.tp-tabv_c .tp-brkv>.tp-sprv:not(.tp-v-fst),.tp-fldv_c>.tp-sprv:not(.tp-v-fst),.tp-rotv_c>.tp-cntv:not(.tp-v-fst),.tp-tabv_c .tp-brkv>.tp-cntv:not(.tp-v-fst),.tp-fldv_c>.tp-cntv:not(.tp-v-fst){margin-top:var(--cnt-v-p)}.tp-rotv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-tabv_c .tp-brkv>.tp-sprv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-rotv_c>.tp-cntv+*:not(.tp-v-hidden),.tp-tabv_c .tp-brkv>.tp-cntv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-cntv+*:not(.tp-v-hidden){margin-top:var(--cnt-v-p)}.tp-rotv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-tabv_c .tp-brkv>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-fldv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-rotv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-tabv_c .tp-brkv>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-fldv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv{margin-top:0}.tp-tabv_c .tp-brkv>.tp-cntv,.tp-fldv_c>.tp-cntv{margin-left:4px}.tp-tabv_c .tp-brkv>.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-fldv>.tp-fldv_b{border-top-left-radius:var(--elm-br);border-bottom-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv>.tp-fldv.tp-fldv-expanded>.tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-fldv-expanded>.tp-fldv_b{border-bottom-left-radius:0}.tp-tabv_c .tp-brkv .tp-fldv>.tp-fldv_c,.tp-fldv_c .tp-fldv>.tp-fldv_c{border-bottom-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv>.tp-tabv>.tp-tabv_i,.tp-fldv_c>.tp-tabv>.tp-tabv_i{border-top-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv .tp-tabv>.tp-tabv_c,.tp-fldv_c .tp-tabv>.tp-tabv_c{border-bottom-left-radius:var(--elm-br)}.tp-rotv_b,.tp-fldv_b{background-color:var(--cnt-bg);color:var(--cnt-fg);cursor:pointer;display:block;height:calc(var(--bld-us) + 4px);line-height:calc(var(--bld-us) + 4px);overflow:hidden;padding-left:var(--cnt-h-p);padding-right:calc(4px + var(--bld-us) + var(--cnt-h-p));position:relative;text-align:left;text-overflow:ellipsis;white-space:nowrap;width:100%;transition:border-radius .2s ease-in-out .2s}.tp-rotv_b:hover,.tp-fldv_b:hover{background-color:var(--cnt-bg-h)}.tp-rotv_b:focus,.tp-fldv_b:focus{background-color:var(--cnt-bg-f)}.tp-rotv_b:active,.tp-fldv_b:active{background-color:var(--cnt-bg-a)}.tp-rotv_b:disabled,.tp-fldv_b:disabled{opacity:.5}.tp-rotv_m,.tp-fldv_m{background:linear-gradient(to left, var(--cnt-fg), var(--cnt-fg) 2px, transparent 2px, transparent 4px, var(--cnt-fg) 4px);border-radius:2px;bottom:0;content:"";display:block;height:6px;right:calc(var(--cnt-h-p) + (var(--bld-us) + 4px - 6px)/2 - 2px);margin:auto;opacity:.5;position:absolute;top:0;transform:rotate(90deg);transition:transform .2s ease-in-out;width:6px}.tp-rotv.tp-rotv-expanded .tp-rotv_m,.tp-fldv.tp-fldv-expanded>.tp-fldv_b>.tp-fldv_m{transform:none}.tp-rotv_c,.tp-fldv_c{box-sizing:border-box;height:0;opacity:0;overflow:hidden;padding-bottom:0;padding-top:0;position:relative;transition:height .2s ease-in-out,opacity .2s linear,padding .2s ease-in-out}.tp-rotv.tp-rotv-cpl:not(.tp-rotv-expanded) .tp-rotv_c,.tp-fldv.tp-fldv-cpl:not(.tp-fldv-expanded)>.tp-fldv_c{display:none}.tp-rotv.tp-rotv-expanded .tp-rotv_c,.tp-fldv.tp-fldv-expanded>.tp-fldv_c{opacity:1;padding-bottom:var(--cnt-v-p);padding-top:var(--cnt-v-p);transform:none;overflow:visible;transition:height .2s ease-in-out,opacity .2s linear .2s,padding .2s ease-in-out}.tp-lstv,.tp-coltxtv_m{position:relative}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m,.tp-coltxtv_mm{bottom:0;margin:auto;pointer-events:none;position:absolute;right:2px;top:0}.tp-lstv_m svg,.tp-coltxtv_mm svg{bottom:0;height:16px;margin:auto;position:absolute;right:0;top:0;width:16px}.tp-lstv_m svg path,.tp-coltxtv_mm svg path{fill:currentColor}.tp-pndtxtv,.tp-coltxtv_w{display:flex}.tp-pndtxtv_a,.tp-coltxtv_c{width:100%}.tp-pndtxtv_a+.tp-pndtxtv_a,.tp-coltxtv_c+.tp-pndtxtv_a,.tp-pndtxtv_a+.tp-coltxtv_c,.tp-coltxtv_c+.tp-coltxtv_c{margin-left:2px}.tp-btnv_b{width:100%}.tp-btnv_t{text-align:center}.tp-ckbv_l{display:block;position:relative}.tp-ckbv_i{left:0;opacity:0;position:absolute;top:0}.tp-ckbv_w{background-color:var(--in-bg);border-radius:var(--elm-br);cursor:pointer;display:block;height:var(--bld-us);position:relative;width:var(--bld-us)}.tp-ckbv_w svg{bottom:0;display:block;height:16px;left:0;margin:auto;opacity:0;position:absolute;right:0;top:0;width:16px}.tp-ckbv_w svg path{fill:none;stroke:var(--in-fg);stroke-width:2}.tp-ckbv_i:hover+.tp-ckbv_w{background-color:var(--in-bg-h)}.tp-ckbv_i:focus+.tp-ckbv_w{background-color:var(--in-bg-f)}.tp-ckbv_i:active+.tp-ckbv_w{background-color:var(--in-bg-a)}.tp-ckbv_i:checked+.tp-ckbv_w svg{opacity:1}.tp-ckbv.tp-v-disabled .tp-ckbv_w{opacity:.5}.tp-colv{position:relative}.tp-colv_h{display:flex}.tp-colv_s{flex-grow:0;flex-shrink:0;width:var(--bld-us)}.tp-colv_t{flex:1;margin-left:4px}.tp-colv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-colv.tp-colv-cpl .tp-colv_p{overflow:visible}.tp-colv.tp-colv-expanded .tp-colv_p{margin-top:var(--bld-s);opacity:1}.tp-colv .tp-popv{left:calc(-1*var(--cnt-h-p));right:calc(-1*var(--cnt-h-p));top:var(--bld-us)}.tp-colpv_h,.tp-colpv_ap{margin-left:6px;margin-right:6px}.tp-colpv_h{margin-top:var(--bld-s)}.tp-colpv_rgb{display:flex;margin-top:var(--bld-s);width:100%}.tp-colpv_a{display:flex;margin-top:var(--cnt-v-p);padding-top:calc(var(--cnt-v-p) + 2px);position:relative}.tp-colpv_a:before{background-color:var(--grv-fg);content:"";height:2px;left:calc(-1*var(--cnt-h-p));position:absolute;right:calc(-1*var(--cnt-h-p));top:0}.tp-colpv_ap{align-items:center;display:flex;flex:3}.tp-colpv_at{flex:1;margin-left:4px}.tp-svpv{border-radius:var(--elm-br);outline:none;overflow:hidden;position:relative}.tp-svpv_c{cursor:crosshair;display:block;height:calc(var(--bld-us)*4);width:100%}.tp-svpv_m{border-radius:100%;border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;filter:drop-shadow(0 0 1px rgba(0, 0, 0, 0.3));height:12px;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;width:12px}.tp-svpv:focus .tp-svpv_m{border-color:#fff}.tp-hplv{cursor:pointer;height:var(--bld-us);outline:none;position:relative}.tp-hplv_c{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAABCAYAAABubagXAAAAQ0lEQVQoU2P8z8Dwn0GCgQEDi2OK/RBgYHjBgIpfovFh8j8YBIgzFGQxuqEgPhaDOT5gOhPkdCxOZeBg+IDFZZiGAgCaSSMYtcRHLgAAAABJRU5ErkJggg==);background-position:left top;background-repeat:no-repeat;background-size:100% 100%;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;position:absolute;top:50%;width:100%}.tp-hplv_m{border-radius:var(--elm-br);border:rgba(255,255,255,.75) solid 2px;box-shadow:0 0 2px rgba(0,0,0,.1);box-sizing:border-box;height:12px;left:50%;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;top:50%;width:12px}.tp-hplv:focus .tp-hplv_m{border-color:#fff}.tp-aplv{cursor:pointer;height:var(--bld-us);outline:none;position:relative;width:100%}.tp-aplv_b{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:4px 4px;background-position:0 0,2px 2px;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;overflow:hidden;position:absolute;top:50%;width:100%}.tp-aplv_c{bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv_m{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:12px 12px;background-position:0 0,6px 6px;border-radius:var(--elm-br);box-shadow:0 0 2px rgba(0,0,0,.1);height:12px;left:50%;margin-left:-6px;margin-top:-6px;overflow:hidden;pointer-events:none;position:absolute;top:50%;width:12px}.tp-aplv_p{border-radius:var(--elm-br);border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv:focus .tp-aplv_p{border-color:#fff}.tp-colswv{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:10px 10px;background-position:0 0,5px 5px;border-radius:var(--elm-br);overflow:hidden}.tp-colswv.tp-v-disabled{opacity:.5}.tp-colswv_sw{border-radius:0}.tp-colswv_b{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;border-width:0;cursor:pointer;display:block;height:var(--bld-us);left:0;margin:0;outline:none;padding:0;position:absolute;top:0;width:var(--bld-us)}.tp-colswv_b:focus::after{border:rgba(255,255,255,.75) solid 2px;border-radius:var(--elm-br);bottom:0;content:"";display:block;left:0;position:absolute;right:0;top:0}.tp-coltxtv{display:flex;width:100%}.tp-coltxtv_m{margin-right:4px}.tp-coltxtv_ms{border-radius:var(--elm-br);color:var(--lbl-fg);cursor:pointer;height:var(--bld-us);line-height:var(--bld-us);padding:0 18px 0 4px}.tp-coltxtv_ms:hover{background-color:var(--in-bg-h)}.tp-coltxtv_ms:focus{background-color:var(--in-bg-f)}.tp-coltxtv_ms:active{background-color:var(--in-bg-a)}.tp-coltxtv_mm{color:var(--lbl-fg)}.tp-coltxtv_w{flex:1}.tp-dfwv{position:absolute;top:8px;right:8px;width:256px}.tp-fldv.tp-fldv-not .tp-fldv_b{display:none}.tp-fldv_t{padding-left:4px}.tp-fldv_c{border-left:var(--cnt-bg) solid 4px}.tp-fldv_b:hover+.tp-fldv_c{border-left-color:var(--cnt-bg-h)}.tp-fldv_b:focus+.tp-fldv_c{border-left-color:var(--cnt-bg-f)}.tp-fldv_b:active+.tp-fldv_c{border-left-color:var(--cnt-bg-a)}.tp-grlv{position:relative}.tp-grlv_g{display:block;height:calc(var(--bld-us)*3)}.tp-grlv_g polyline{fill:none;stroke:var(--mo-fg);stroke-linejoin:round}.tp-grlv_t{margin-top:-4px;transition:left .05s,top .05s;visibility:hidden}.tp-grlv_t.tp-grlv_t-a{visibility:visible}.tp-grlv_t.tp-grlv_t-in{transition:none}.tp-grlv.tp-v-disabled .tp-grlv_g{opacity:.5}.tp-grlv .tp-ttv{background-color:var(--mo-fg)}.tp-grlv .tp-ttv::before{border-top-color:var(--mo-fg)}.tp-lblv{align-items:center;display:flex;line-height:1.3;padding-left:var(--cnt-h-p);padding-right:var(--cnt-h-p)}.tp-lblv.tp-lblv-nol{display:block}.tp-lblv_l{color:var(--lbl-fg);flex:1;-webkit-hyphens:auto;-ms-hyphens:auto;hyphens:auto;overflow:hidden;padding-left:4px;padding-right:16px}.tp-lblv.tp-v-disabled .tp-lblv_l{opacity:.5}.tp-lblv.tp-lblv-nol .tp-lblv_l{display:none}.tp-lblv_v{align-self:flex-start;flex-grow:0;flex-shrink:0;width:160px}.tp-lblv.tp-lblv-nol .tp-lblv_v{width:100%}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m{color:var(--btn-fg)}.tp-sglv_i{padding:0 4px}.tp-sglv.tp-v-disabled .tp-sglv_i{opacity:.5}.tp-mllv_i{display:block;height:calc(var(--bld-us)*3);line-height:var(--bld-us);padding:0 4px;resize:none;white-space:pre}.tp-mllv.tp-v-disabled .tp-mllv_i{opacity:.5}.tp-p2dv{position:relative}.tp-p2dv_h{display:flex}.tp-p2dv_b{height:var(--bld-us);margin-right:4px;position:relative;width:var(--bld-us)}.tp-p2dv_b svg{display:block;height:16px;left:50%;margin-left:-8px;margin-top:-8px;position:absolute;top:50%;width:16px}.tp-p2dv_b svg path{stroke:currentColor;stroke-width:2}.tp-p2dv_b svg circle{fill:currentColor}.tp-p2dv_t{flex:1}.tp-p2dv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-p2dv.tp-p2dv-expanded .tp-p2dv_p{margin-top:var(--bld-s);opacity:1}.tp-p2dv .tp-popv{left:calc(-1*var(--cnt-h-p));right:calc(-1*var(--cnt-h-p));top:var(--bld-us)}.tp-p2dpv{padding-left:calc(var(--bld-us) + 4px)}.tp-p2dpv_p{cursor:crosshair;height:0;overflow:hidden;padding-bottom:100%;position:relative}.tp-p2dpv_g{display:block;height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}.tp-p2dpv_ax{opacity:.1;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_l{opacity:.5;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_m{border:var(--in-fg) solid 1px;border-radius:50%;box-sizing:border-box;height:4px;margin-left:-2px;margin-top:-2px;position:absolute;width:4px}.tp-p2dpv_p:focus .tp-p2dpv_m{background-color:var(--in-fg);border-width:0}.tp-popv{background-color:var(--bs-bg);border-radius:6px;box-shadow:0 2px 4px var(--bs-sh);display:none;max-width:168px;padding:var(--cnt-v-p) var(--cnt-h-p);position:absolute;visibility:hidden;z-index:1000}.tp-popv.tp-popv-v{display:block;visibility:visible}.tp-sprv_r{background-color:var(--grv-fg);border-width:0;display:block;height:2px;margin:0;width:100%}.tp-sldv.tp-v-disabled{opacity:.5}.tp-sldv_t{box-sizing:border-box;cursor:pointer;height:var(--bld-us);margin:0 6px;outline:none;position:relative}.tp-sldv_t::before{background-color:var(--in-bg);border-radius:1px;bottom:0;content:"";display:block;height:2px;left:0;margin:auto;position:absolute;right:0;top:0}.tp-sldv_k{height:100%;left:0;position:absolute;top:0}.tp-sldv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";display:block;height:2px;left:0;margin-bottom:auto;margin-top:auto;position:absolute;right:0;top:0}.tp-sldv_k::after{background-color:var(--btn-bg);border-radius:var(--elm-br);bottom:0;content:"";display:block;height:12px;margin-bottom:auto;margin-top:auto;position:absolute;right:-6px;top:0;width:12px}.tp-sldv_t:hover .tp-sldv_k::after{background-color:var(--btn-bg-h)}.tp-sldv_t:focus .tp-sldv_k::after{background-color:var(--btn-bg-f)}.tp-sldv_t:active .tp-sldv_k::after{background-color:var(--btn-bg-a)}.tp-sldtxtv{display:flex}.tp-sldtxtv_s{flex:2}.tp-sldtxtv_t{flex:1;margin-left:4px}.tp-tabv.tp-v-disabled{opacity:.5}.tp-tabv_i{align-items:flex-end;display:flex;overflow:hidden}.tp-tabv.tp-tabv-nop .tp-tabv_i{height:calc(var(--bld-us) + 4px);position:relative}.tp-tabv.tp-tabv-nop .tp-tabv_i::before{background-color:var(--cnt-bg);bottom:0;content:"";height:2px;left:0;position:absolute;right:0}.tp-tabv_c{border-left:var(--cnt-bg) solid 4px;padding-bottom:var(--cnt-v-p);padding-top:var(--cnt-v-p)}.tp-tbiv{flex:1;min-width:0;position:relative}.tp-tbiv+.tp-tbiv{margin-left:2px}.tp-tbiv+.tp-tbiv::before{background-color:var(--cnt-bg);bottom:0;content:"";height:2px;left:-2px;position:absolute;width:2px}.tp-tbiv_b{background-color:var(--cnt-bg);display:block;padding-left:calc(var(--cnt-h-p) + 4px);padding-right:calc(var(--cnt-h-p) + 4px);width:100%}.tp-tbiv_b:hover{background-color:var(--cnt-bg-h)}.tp-tbiv_b:focus{background-color:var(--cnt-bg-f)}.tp-tbiv_b:active{background-color:var(--cnt-bg-a)}.tp-tbiv_b:disabled{opacity:.5}.tp-tbiv_t{color:var(--cnt-fg);height:calc(var(--bld-us) + 4px);line-height:calc(var(--bld-us) + 4px);opacity:.5;overflow:hidden;text-overflow:ellipsis}.tp-tbiv.tp-tbiv-sel .tp-tbiv_t{opacity:1}.tp-txtv{position:relative}.tp-txtv_i{padding:0 4px}.tp-txtv.tp-txtv-fst .tp-txtv_i{border-bottom-right-radius:0;border-top-right-radius:0}.tp-txtv.tp-txtv-mid .tp-txtv_i{border-radius:0}.tp-txtv.tp-txtv-lst .tp-txtv_i{border-bottom-left-radius:0;border-top-left-radius:0}.tp-txtv.tp-txtv-num .tp-txtv_i{text-align:right}.tp-txtv.tp-txtv-drg .tp-txtv_i{opacity:.3}.tp-txtv_k{cursor:pointer;height:100%;left:-3px;position:absolute;top:0;width:12px}.tp-txtv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";height:calc(var(--bld-us) - 4px);left:50%;margin-bottom:auto;margin-left:-1px;margin-top:auto;opacity:.1;position:absolute;top:0;transition:border-radius .1s,height .1s,transform .1s,width .1s;width:2px}.tp-txtv_k:hover::before,.tp-txtv.tp-txtv-drg .tp-txtv_k::before{opacity:1}.tp-txtv.tp-txtv-drg .tp-txtv_k::before{border-radius:50%;height:4px;transform:translateX(-1px);width:4px}.tp-txtv_g{bottom:0;display:block;height:8px;left:50%;margin:auto;overflow:visible;pointer-events:none;position:absolute;top:0;visibility:hidden;width:100%}.tp-txtv.tp-txtv-drg .tp-txtv_g{visibility:visible}.tp-txtv_gb{fill:none;stroke:var(--in-fg);stroke-dasharray:1}.tp-txtv_gh{fill:none;stroke:var(--in-fg)}.tp-txtv .tp-ttv{margin-left:6px;visibility:hidden}.tp-txtv.tp-txtv-drg .tp-ttv{visibility:visible}.tp-ttv{background-color:var(--in-fg);border-radius:var(--elm-br);color:var(--bs-bg);padding:2px 4px;pointer-events:none;position:absolute;transform:translate(-50%, -100%)}.tp-ttv::before{border-color:var(--in-fg) transparent transparent transparent;border-style:solid;border-width:2px;box-sizing:border-box;content:"";font-size:.9em;height:4px;left:50%;margin-left:-2px;position:absolute;top:100%;width:4px}.tp-rotv{background-color:var(--bs-bg);border-radius:var(--bs-br);box-shadow:0 2px 4px var(--bs-sh);font-family:var(--font-family);font-size:11px;font-weight:500;line-height:1;text-align:left}.tp-rotv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br);border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br);padding-left:calc(4px + var(--bld-us) + var(--cnt-h-p));text-align:center}.tp-rotv.tp-rotv-expanded .tp-rotv_b{border-bottom-left-radius:0;border-bottom-right-radius:0}.tp-rotv.tp-rotv-not .tp-rotv_b{display:none}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_c,.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c .tp-fldv.tp-v-vlst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-right-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst{margin-top:calc(-1*var(--cnt-v-p))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst>.tp-fldv_b{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst{margin-top:calc(-1*var(--cnt-v-p))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst>.tp-tabv_i{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv.tp-v-disabled,.tp-rotv .tp-v-disabled{pointer-events:none}.tp-rotv.tp-v-hidden,.tp-rotv .tp-v-hidden{display:none}'),this.pool_.getAll().forEach(o=>{this.embedPluginStyle_(o)}),this.registerPlugin({plugins:[Hv,Ov,$n,Gv]})}}const jv=new n("3.1.0");t.BladeApi=i,t.ButtonApi=x,t.FolderApi=Bt,t.InputBindingApi=O,t.ListApi=Yh,t.MonitorBindingApi=le,t.Pane=Xv,t.SeparatorApi=Y,t.SliderApi=Kh,t.TabApi=kt,t.TabPageApi=on,t.TextApi=$h,t.TpChangeEvent=a,t.VERSION=jv,Object.defineProperty(t,"__esModule",{value:!0})})})(du,du.exports);var pu={d:(s,e)=>{for(var t in e)pu.o(e,t)&&!pu.o(s,t)&&Object.defineProperty(s,t,{enumerable:!0,get:e[t]})},o:(s,e)=>Object.prototype.hasOwnProperty.call(s,e)},km={};pu.d(km,{Q:()=>mA});var Oc=function(s,e,t,n){return new(t||(t=Promise))(function(i,r){function a(h){try{c(n.next(h))}catch(d){r(d)}}function l(h){try{c(n.throw(h))}catch(d){r(d)}}function c(h){var d;h.done?i(h.value):(d=h.value,d instanceof t?d:new t(function(f){f(d)})).then(a,l)}c((n=n.apply(s,e||[])).next())})};const Vm=Symbol("Comlink.proxy"),dA=Symbol("Comlink.endpoint"),pA=Symbol("Comlink.releaseProxy"),fu=Symbol("Comlink.thrown"),Mf=s=>typeof s=="object"&&s!==null||typeof s=="function",zm=new Map([["proxy",{canHandle:s=>Mf(s)&&s[Vm],serialize(s){const{port1:e,port2:t}=new MessageChannel;return Hm(s,e),[t,[t]]},deserialize:s=>(s.start(),Wm(s))}],["throw",{canHandle:s=>Mf(s)&&fu in s,serialize({value:s}){let e;return e=s instanceof Error?{isError:!0,value:{message:s.message,name:s.name,stack:s.stack}}:{isError:!1,value:s},[e,[]]},deserialize(s){throw s.isError?Object.assign(new Error(s.value.message),s.value):s.value}}]]);function Hm(s,e=self){e.addEventListener("message",function t(n){if(!n||!n.data)return;const{id:i,type:r,path:a}=Object.assign({path:[]},n.data),l=(n.data.argumentList||[]).map(_s);let c;try{const h=a.slice(0,-1).reduce((f,m)=>f[m],s),d=a.reduce((f,m)=>f[m],s);switch(r){case"GET":c=d;break;case"SET":h[a.slice(-1)[0]]=_s(n.data.value),c=!0;break;case"APPLY":c=d.apply(h,l);break;case"CONSTRUCT":c=Ga(new d(...l));break;case"ENDPOINT":{const{port1:f,port2:m}=new MessageChannel;Hm(s,m),c=function(v,b){return Xm.set(v,b),v}(f,[f])}break;case"RELEASE":c=void 0;break;default:return}}catch(h){c={value:h,[fu]:0}}Promise.resolve(c).catch(h=>({value:h,[fu]:0})).then(h=>{const[d,f]=Hu(h);e.postMessage(Object.assign(Object.assign({},d),{id:i}),f),r==="RELEASE"&&(e.removeEventListener("message",t),Gm(e))})}),e.start&&e.start()}function Gm(s){(function(e){return e.constructor.name==="MessagePort"})(s)&&s.close()}function Wm(s,e){return mu(s,[],e)}function Ba(s){if(s)throw new Error("Proxy has been released and is not useable")}function mu(s,e=[],t=function(){}){let n=!1;const i=new Proxy(t,{get(r,a){if(Ba(n),a===pA)return()=>ur(s,{type:"RELEASE",path:e.map(l=>l.toString())}).then(()=>{Gm(s),n=!0});if(a==="then"){if(e.length===0)return{then:()=>i};const l=ur(s,{type:"GET",path:e.map(c=>c.toString())}).then(_s);return l.then.bind(l)}return mu(s,[...e,a])},set(r,a,l){Ba(n);const[c,h]=Hu(l);return ur(s,{type:"SET",path:[...e,a].map(d=>d.toString()),value:c},h).then(_s)},apply(r,a,l){Ba(n);const c=e[e.length-1];if(c===dA)return ur(s,{type:"ENDPOINT"}).then(_s);if(c==="bind")return mu(s,e.slice(0,-1));const[h,d]=Sf(l);return ur(s,{type:"APPLY",path:e.map(f=>f.toString()),argumentList:h},d).then(_s)},construct(r,a){Ba(n);const[l,c]=Sf(a);return ur(s,{type:"CONSTRUCT",path:e.map(h=>h.toString()),argumentList:l},c).then(_s)}});return i}function Sf(s){const e=s.map(Hu);return[e.map(n=>n[0]),(t=e.map(n=>n[1]),Array.prototype.concat.apply([],t))];var t}const Xm=new WeakMap;function Ga(s){return Object.assign(s,{[Vm]:!0})}function Hu(s){for(const[e,t]of zm)if(t.canHandle(s)){const[n,i]=t.serialize(s);return[{type:"HANDLER",name:e,value:n},i]}return[{type:"RAW",value:s},Xm.get(s)||[]]}function _s(s){switch(s.type){case"HANDLER":return zm.get(s.name).deserialize(s.value);case"RAW":return s.value}}function ur(s,e,t){return new Promise(n=>{const i=new Array(4).fill(0).map(()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16)).join("-");s.addEventListener("message",function r(a){a.data&&a.data.id&&a.data.id===i&&(s.removeEventListener("message",r),n(a.data))}),s.start&&s.start(),s.postMessage(Object.assign({id:i},e),t)})}class fA extends class{}{init(e,t,n,i){if(!this.api){if(!i)throw new Error("workerFilePath is required");(()=>{var r,a,l,c;r=this,a=void 0,c=function*(){const h=yield fetch(i).then(m=>m.blob()),d=URL.createObjectURL(h),f=new Worker(d,{type:"module"});this.api=yield new(Wm(f))(Ga(()=>{e(),URL.revokeObjectURL(d)}),Ga((m,v)=>m==="xatlas_web.wasm"?n:m+v),Ga(t))},new((l=void 0)||(l=Promise))(function(h,d){function f(b){try{v(c.next(b))}catch(w){d(w)}}function m(b){try{v(c.throw(b))}catch(w){d(w)}}function v(b){var w;b.done?h(b.value):(w=b.value,w instanceof l?w:new l(function(x){x(w)})).then(f,m)}v((c=c.apply(r,a||[])).next())})})()}}}class mA extends class{constructor(e,t={resolution:2048},n={},i=!1,r=!1,a=!1){this.THREE=e,this.packOptions=t,this.chartOptions=n,this.useNormals=i,this.timeUnwrap=r,this.logProgress=a,this._libraryLoaded=!1,this._isUnwrapping=!1,this.xAtlas=this._createXAtlas()}loadLibrary(e,t,n){return Oc(this,void 0,void 0,function*(){if(!this._libraryLoaded){for(yield new Promise((i,r)=>{try{this.xAtlas.init(()=>{i()},e,t,n)}catch(a){r(a)}});!this.xAtlas.api||!(yield this.xAtlas.api.loaded);)yield new Promise(i=>setTimeout(i,100));this._libraryLoaded=!0}})}packAtlas(e,t="uv2",n="uv"){return Oc(this,void 0,void 0,function*(){if(!this._libraryLoaded)return console.warn("xatlas-three: library not loaded"),[];if(!e)return[];if(e.length<1)return[];const i=this.chartOptions.useInputMeshUvs;for(;this._isUnwrapping;)console.log("xatlas-three: unwrapping another mesh, waiting 100 ms"),yield new Promise(h=>setTimeout(h,100));this._isUnwrapping=!0,yield this.xAtlas.api.setProgressLogging(this.logProgress),yield this.xAtlas.api.createAtlas();let r=[],a="";for(let h of e){let{uuid:d,index:f,attributes:m}=h;const v=h.userData.worldScale||1;r.push(d),f&&m.position&&m.position.itemSize===3?(a="Mesh"+r.length+" added to atlas: "+d,this.timeUnwrap&&console.time(a),yield this.xAtlas.api.addMesh(f.array,m.position.array,m.normal?m.normal.array:void 0,m.uv?m.uv.array:void 0,d,this.useNormals,i,v),this.timeUnwrap&&console.timeEnd(a)):console.warn("xatlas-three: Geometry not supported: ",h)}a="Generated atlas with "+r.length+" meshes",this.timeUnwrap&&console.time(a);let l=yield this.xAtlas.api.generateAtlas(this.chartOptions,this.packOptions,!0);this.timeUnwrap&&console.timeEnd(a);let c=[];for(let h of l){let d=e.find(f=>f.uuid===h.mesh);d?(h.vertex.vertices&&d.setAttribute("position",new this.THREE.BufferAttribute(h.vertex.vertices,3,!1)),h.vertex.normals&&d.setAttribute("normal",new this.THREE.BufferAttribute(h.vertex.normals,3,!0)),h.vertex.coords1&&d.setAttribute(t,new this.THREE.BufferAttribute(h.vertex.coords1,2,!1)),h.vertex.coords&&t!==n&&d.setAttribute(n,new this.THREE.BufferAttribute(h.vertex.coords,2,!1)),h.index&&d.setIndex(new this.THREE.BufferAttribute(h.index,1,!1)),c.push(d)):console.error("xatlas-three: Mesh not found: ",h.mesh)}return yield this.xAtlas.api.destroyAtlas(),this._isUnwrapping=!1,c})}unwrapGeometry(e,t="uv",n="uv2"){return Oc(this,void 0,void 0,function*(){return this.packAtlas([e],t,n)})}}{_createXAtlas(){return new fA}}var gA=km.Q;const Wa=new gA({BufferAttribute:At}),vA=async()=>{const s=(e,t)=>{};await Wa.loadLibrary(s,"https://cdn.jsdelivr.net/npm/xatlasjs@0.1.0/dist/xatlas.wasm","https://cdn.jsdelivr.net/npm/xatlasjs@0.1.0/dist/xatlas.js")},_A=async s=>{const e=s.map(t=>t.geometry);Wa.packOptions.padding=16,Wa.packOptions.resolution=4096,await Wa.packAtlas(e,"uv2","uv")},xA=async s=>{for(let e=0;e<s.length;e++){const t=s[e];!t||t.length===0||await _A(t)}},bA=`
    uniform vec2 offset;
    in vec2 uv2;
    out vec4 vWorldPosition;

    void main() {
        vWorldPosition = modelMatrix * vec4(position, 1.0);
        gl_Position = vec4((uv2 + offset) * 2.0 - 1.0, 0.0, 1.0);
    }
`,yA=`
    in vec4 vWorldPosition;
    out vec4 fragColor;

    void main() {
        fragColor = vWorldPosition;
    }
`,wA=new rn({glslVersion:si,vertexShader:bA,fragmentShader:yA,side:mn,fog:!1,uniforms:{offset:new cl(new Te(0,0))}}),EA=`
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
`,MA=`
    in vec4 vNormal;
    out vec4 fragColor;

    void main() {
        // Guard against zero-length normals (degenerate geometry) \u2014 produces (0,0,0,0)
        // so the bake shader can detect the miss instead of generating NaN.
        float len = length(vNormal.xyz);
        fragColor = len > 1e-6 ? vec4(vNormal.xyz / len, vNormal.w) : vec4(0.0);
    }
`,SA=new rn({glslVersion:si,vertexShader:EA,fragmentShader:MA,side:mn,fog:!1,uniforms:{offset:new cl(new Te(0,0))}}),TA=[{x:-2,y:-2},{x:2,y:-2},{x:-2,y:2},{x:2,y:2},{x:-1,y:-2},{x:1,y:-2},{x:-2,y:-1},{x:2,y:-1},{x:-2,y:1},{x:2,y:1},{x:-1,y:2},{x:1,y:2},{x:-2,y:0},{x:2,y:0},{x:0,y:-2},{x:0,y:2},{x:-1,y:-1},{x:1,y:-1},{x:-1,y:0},{x:1,y:0},{x:-1,y:1},{x:1,y:1},{x:0,y:-1},{x:0,y:1},{x:0,y:0}],AA=(s,e,t,n=!0)=>{const i=s.autoClear,r=s.getRenderTarget(),a=new Ve;s.getClearColor(a);const l=s.getClearAlpha(),c=[],h=d=>{const f=new Bn(t,t,{type:_t,magFilter:dt,minFilter:dt});c.push(f);const m=new Ti(-100,100,-100,100,-100,200);m.updateMatrix();const v=new ft;v.matrixWorldAutoUpdate=!1;for(const w of e){const x=w.clone();x.material=d,v.add(x)}s.autoClear=!1,s.setRenderTarget(f),s.setClearColor(0,0),s.clear();const b=d.uniforms.offset;if(!b)throw new Error("[baker] atlas material missing `offset` uniform");if(n)for(const w of TA)b.value.x=w.x*(1/t),b.value.y=w.y*(1/t),s.render(v,m);return b.value.x=0,b.value.y=0,s.render(v,m),f.texture};try{const d=h(wA),f=h(SA);return{positionTexture:d,normalTexture:f,dispose:()=>{for(const m of c)m.dispose();c.length=0}}}finally{s.setRenderTarget(r),s.autoClear=i,s.setClearColor(a,l)}};class CA extends rn{constructor(e){const t=new hT;t.updateFrom(e.bvh),super({transparent:!0,glslVersion:si,depthTest:!1,depthWrite:!1,uniforms:{bvh:{value:t},positions:{value:e.positions},normals:{value:e.normals},albedoTex:{value:e.albedoTex},emissiveTex:{value:e.emissiveTex},materialTextureSize:{value:e.materialTextureSize},invModelMatrix:{value:e.invModelMatrix},casts:{value:e.casts},bounces:{value:e.bounces},lightsTex:{value:e.lightsTex},lightCount:{value:e.lightCount},skyColor:{value:e.skyColor},skyIntensity:{value:e.skyIntensity},opacity:{value:1},sampleIndex:{value:0},directLightEnabled:{value:e.directLightEnabled},indirectLightEnabled:{value:e.indirectLightEnabled},ambientLightEnabled:{value:e.ambientLightEnabled},ambientDistance:{value:e.ambientDistance},aoIntensity:{value:e.aoIntensity},aoExponent:{value:e.aoExponent}},vertexShader:`
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
                 *   aoOut       : 1.0 \u2013 smoothed near-field occlusion
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
                ${vT}
                ${_T}

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
                uniform bool ambientLightEnabled;
                uniform float ambientDistance;
                uniform float aoIntensity;
                uniform float aoExponent;
                uniform float opacity;

                uniform BVH bvh;
                in vec2 vUv;

                layout(location = 0) out vec4 directOut;
                layout(location = 1) out vec4 indirectOut;
                layout(location = 2) out vec4 aoOut;

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
                    float totalAO            = 0.0;
                    vec3  totalDirectLight   = vec3(0.0);

                    if (ambientLightEnabled || indirectLightEnabled) {
                        for (int i = 0; i < casts; i++) {
                            vec3 newDir = getHemisphereSample(normal.xyz, rand4().xy);
                            if (dot(rayDirection, newDir) > 0.0) {
                                bool hit = bvhIntersectFirstHit(bvh, rayOrigin, newDir,
                                    faceIndices, faceNormal, barycoord, side, dist);

                                if (indirectLightEnabled)
                                    totalIndirectLight += tracePath(rayOrigin, newDir, hit,
                                                                    faceIndices, faceNormal, dist);

                                if (ambientLightEnabled) {
                                    // Distance-falloff AO. occ \u2208 [0,1] is the un-intensified
                                    // occlusion strength (1 at contact, 0 at maxDistance,
                                    // shaped by aoExponent). Visibility = 1 - intensified occ.
                                    // At aoIntensity=1, aoExponent=1 this reduces to the
                                    // pre-7D linear formula clamp(dist/ambientDistance, 0, 1).
                                    if (hit && dist < ambientDistance) {
                                        float t = clamp(dist / ambientDistance, 0.0, 1.0);
                                        float occ = 1.0 - pow(t, aoExponent);
                                        totalAO += 1.0 - clamp(occ * aoIntensity, 0.0, 1.0);
                                    } else {
                                        totalAO += 1.0;
                                    }
                                }
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

                    vec4 avgDirect   = vec4(totalDirectLight / float(casts), 1.0);
                    vec4 avgAO       = vec4(vec3(totalAO / float(casts)), 1.0);
                    vec4 avgIndirect = vec4(totalIndirectLight / float(casts), 1.0);

                    directOut   = directLightEnabled   ? vec4(avgDirect.rgb,   opacity) : vec4(0.0, 0.0, 0.0, opacity);
                    indirectOut = indirectLightEnabled  ? vec4(avgIndirect.rgb, opacity) : vec4(0.0, 0.0, 0.0, opacity);
                    aoOut       = ambientLightEnabled   ? vec4(avgAO.rgb,       opacity) : vec4(0.0, 0.0, 0.0, opacity);
                }
            `})}}const PA={point:0,directional:1,spot:2,area:3},Bc=4;function RA(s){const e=Math.max(1,s.length),t=new Float32Array(Bc*e*4);for(let i=0;i<s.length;i++){const r=s[i],a=i*Bc*4;t[a+0]=r.position.x,t[a+1]=r.position.y,t[a+2]=r.position.z,t[a+3]=PA[r.type],t[a+4]=r.direction.x,t[a+5]=r.direction.y,t[a+6]=r.direction.z,t[a+7]=r.params[0],t[a+8]=r.color.r,t[a+9]=r.color.g,t[a+10]=r.color.b,t[a+11]=r.params[1],t[a+12]=r.params[2],t[a+13]=r.params[3],t[a+14]=0,t[a+15]=0}const n=new Cr(t,Bc,e,Wt,_t);return n.minFilter=dt,n.magFilter=dt,n.generateMipmaps=!1,n.wrapS=hn,n.wrapT=hn,n.needsUpdate=!0,{texture:n,count:s.length,capacity:e}}function LA(s){s.dispose()}const IA=(s,e,t,n,i)=>{var B;const r=RA(i.lights),a=r.texture,l=new CA({bvh:n,invModelMatrix:new Xe().identity(),positions:e,normals:t,albedoTex:i.albedoTexture,emissiveTex:i.emissiveTexture,materialTextureSize:i.materialTextureSize,casts:i.casts,bounces:(B=i.bounces)!=null?B:1,lightsTex:a,lightCount:r.count,skyColor:i.skyColor,skyIntensity:i.skyIntensity,opacity:1,sampleIndex:0,directLightEnabled:i.directLightEnabled,indirectLightEnabled:i.indirectLightEnabled,ambientLightEnabled:i.ambientLightEnabled,ambientDistance:i.ambientDistance,aoIntensity:i.aoIntensity,aoExponent:i.aoExponent}),c=new fx(i.resolution,i.resolution,3,{type:_t,minFilter:Ut,magFilter:Ut,generateMipmaps:!1}),h=s.getRenderTarget(),d=new Ve;s.getClearColor(d);const f=s.getClearAlpha();s.setRenderTarget(c),s.setClearColor(0,0),s.clear(),s.setRenderTarget(h),s.setClearColor(d,f);const m=new pe(new Kn(2,2),l),v=new Ti;let b=0;const w=i.targetSamples|0,x=l.uniforms.sampleIndex,g=l.uniforms.opacity;if(!x||!g)throw new Error("[baker] LightmapperMaterial missing required uniforms");const E=()=>{if(w>0&&b>=w)return{samples:b,done:!0};const M=s.autoClear,R=s.getRenderTarget();try{s.autoClear=!1,s.setRenderTarget(c),x.value=b,g.value=1/(b+1),s.render(m,v)}finally{s.setRenderTarget(R),s.autoClear=M}return b++,{samples:b,done:w>0&&b>=w}},y=()=>{b=0},S=()=>{LA(a),c.dispose(),l.dispose(),m.geometry.dispose()},[P,C,A]=c.texture;if(!P||!C||!A)throw new Error("[baker] WebGLMultipleRenderTargets did not allocate 3 textures");const D={direct:P,indirect:C,ao:A};return{renderTarget:c,textures:D,render:E,reset:y,dispose:S,get renderTexture(){return c},get texture(){return D.direct}}};class DA extends rn{constructor(e){super({glslVersion:si,transparent:!1,depthWrite:!1,depthTest:!1,uniforms:{directTex:{value:e.directTex},indirectTex:{value:e.indirectTex},aoTex:{value:e.aoTex},directIntensity:{value:e.directIntensity},giIntensity:{value:e.giIntensity},aoEnabled:{value:e.aoEnabled}},vertexShader:`
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

                in vec2 vUv;
                out vec4 outColor;

                void main() {
                    vec3 d = texture(directTex,   vUv).rgb * directIntensity;
                    vec3 i = texture(indirectTex, vUv).rgb * giIntensity;
                    vec3 a = aoEnabled ? texture(aoTex, vUv).rgb : vec3(1.0);
                    
                    vec3 lit = (d + i) * a;

                    // Subtle contrast boost / gamma correction
                    // This prevents the "washed out" look of pure linear float textures.
                    // Guard against negative inputs that would make pow() return NaN.
                    lit = pow(max(lit, vec3(0.0)), vec3(1.0 / 1.1));

                    outColor = vec4(lit, 1.0);
                }
            `})}}const NA=(s,e,t,n)=>{const i=new Bn(t,t,{type:_t,minFilter:wu,magFilter:Ut,generateMipmaps:!0}),r=new DA({directTex:e.direct,indirectTex:e.indirect,aoTex:e.ao,directIntensity:n.directIntensity,giIntensity:n.giIntensity,aoEnabled:n.aoEnabled}),a=new pe(new Kn(2,2),r),l=new Ti,c=r.uniforms,h=d=>{(d==null?void 0:d.directIntensity)!==void 0&&c.directIntensity&&(c.directIntensity.value=d.directIntensity),(d==null?void 0:d.giIntensity)!==void 0&&c.giIntensity&&(c.giIntensity.value=d.giIntensity),(d==null?void 0:d.aoEnabled)!==void 0&&c.aoEnabled&&(c.aoEnabled.value=d.aoEnabled);const f=s.getRenderTarget(),m=s.autoClear;try{s.autoClear=!0,s.setRenderTarget(i),s.render(a,l)}finally{s.setRenderTarget(f),s.autoClear=m}};return h(),{texture:i.texture,refresh:h,dispose:()=>{i.dispose(),r.dispose(),a.geometry.dispose()}}};class UA extends rn{constructor(e={}){var t,n,i;super({glslVersion:si,blending:On,transparent:!1,depthWrite:!1,depthTest:!1,uniforms:{map:{value:(t=e.map)!=null?t:null},positions:{value:(n=e.positions)!=null?n:null},resolution:{value:(i=e.resolution)!=null?i:1024}},vertexShader:`
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
            `})}}class FA extends rn{constructor(e){var t,n,i;super({blending:On,transparent:!1,depthWrite:!1,depthTest:!1,defines:{USE_SLIDER:0},uniforms:{sigma:{value:(t=e.sigma)!=null?t:5},threshold:{value:(n=e.threshold)!=null?n:.03},kSigma:{value:(i=e.kSigma)!=null?i:1},map:{value:e.map}},vertexShader:`
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
			`})}}const Tf=new pe(new Kn(2,2)),OA=new Ti,BA=async(s,e,t,n,i,r)=>{var y,S,P;const a=()=>new Bn(n,n,{type:_t,minFilter:wu,magFilter:Ut,generateMipmaps:!0}),l=a(),c=a(),h=(C,A)=>{const D=s.getRenderTarget();try{Tf.material=C,s.setRenderTarget(A),s.render(Tf,OA)}finally{s.setRenderTarget(D)}},d=new UA({positions:t,resolution:n});let f=l,m=c,v=e;const b=Math.max(0,i.dilationIterations)+(i.denoiseEnabled?1:0);let w=0;const x=d.uniforms.map;if(!x)throw new Error("[baker] DilationMaterial missing `map` uniform");for(let C=0;C<Math.max(0,i.dilationIterations);C++){x.value=v,h(d,m),v=m.texture;const A=f;f=m,m=A,w++,r==null||r(w/b),await new Promise(D=>requestAnimationFrame(D))}if(i.denoiseEnabled){const C=new FA({map:v,sigma:i.denoiseSigma,threshold:i.denoiseThreshold,kSigma:i.denoiseKSigma});h(C,m),v=m.texture,C.dispose();const A=f;f=m,m=A,w++,r==null||r(w/b),await new Promise(D=>requestAnimationFrame(D))}d.dispose();const g=i.dilationIterations>0||i.denoiseEnabled,E=g?f.texture:e;if(g){const C=Math.max(0,Math.floor(n/2)-2),A=new Float32Array(4*4*4);s.readRenderTargetPixels(f,C,C,4,4,A);let D=0,B=0,M=0;for(let R=0;R<16;R++)D+=(y=A[R*4])!=null?y:0,B+=(S=A[R*4+1])!=null?S:0,M+=(P=A[R*4+2])!=null?P:0}return{texture:E,dispose:()=>{l.dispose(),c.dispose()}}};class el extends Error{constructor(e,t,n){super(`[baker:${t}] ${e}${n?` (mesh: ${n})`:""}`),this.name="BakeError",this.phase=t,this.meshName=n}}const kA=s=>{const e=s.map((t,n)=>{const i=t.geometry.clone();i.deleteAttribute("color"),i.applyMatrix4(t.matrixWorld);const r=i.attributes.position;if(!r)throw new el("mesh geometry has no position attribute","geometry",t.name);const a=r.count,l=new Float32Array(a);return l.fill(n),i.setAttribute("meshIndex",new At(l,1)),i});return PT(e)},VA=s=>{const e=s.geometry;if(e.index)return e.index.count/3;const t=e.attributes.position;if(!t)throw new el("mesh geometry missing position attribute","geometry",s.name);return t.count/3},gu={aR:1,aG:1,aB:1,eR:0,eG:0,eB:0},jm=s=>{var t;if(Array.isArray(s)){console.warn("[baker] material array detected; using slot 0 only \u2014 per-face material groups not yet supported");const n=s[0];return n?jm(n):gu}const e=s;if("emissive"in e&&e.emissive){const n=(t=e.emissiveIntensity)!=null?t:1;return{aR:e.color.r,aG:e.color.g,aB:e.color.b,eR:e.emissive.r*n,eG:e.emissive.g*n,eB:e.emissive.b*n}}return"color"in e&&e.color?{aR:e.color.r,aG:e.color.g,aB:e.color.b,eR:0,eG:0,eB:0}:(console.warn("[baker] material has no .color (likely ShaderMaterial); defaulting to white albedo"),gu)},zA=(s,e)=>{var f,m,v;const t=s.index;if(!t)throw new el("mergeGeometry must produce an indexed geometry; got non-indexed","geometry");const n=s.attributes.meshIndex;if(!n)throw new el("merged geometry is missing 'meshIndex' attribute \u2014 did mergeGeometry skip the per-vertex tag?","geometry");const i=e.map(VA),r=t.count/3,a=new Float32Array(r*3),l=new Float32Array(r*3),c=e.map(b=>jm(b.material)),h=t.array,d=n.array;for(let b=0;b<r;b++){const w=(f=h[b*3])!=null?f:0,x=((m=d[w])!=null?m:0)|0,g=(v=c[x])!=null?v:gu,E=b*3;a[E]=g.aR,a[E+1]=g.aG,a[E+2]=g.aB,l[E]=g.eR,l[E+1]=g.eG,l[E+2]=g.eB}return{albedo:a,emissive:l,totalTriangles:r,perMeshTriangleCounts:i}},Af=(s,e)=>{const t=new Cr(s,e,e,Wt,_t);return t.minFilter=dt,t.magFilter=dt,t.wrapS=hn,t.wrapT=hn,t.generateMipmaps=!1,t.needsUpdate=!0,t},HA=s=>{var a,l,c,h,d,f;const e=s.totalTriangles,t=Math.max(1,Math.ceil(Math.sqrt(e))),n=t*t,i=new Float32Array(n*4),r=new Float32Array(n*4);for(let m=0;m<e;m++){const v=m*3,b=m*4;i[b]=(a=s.albedo[v])!=null?a:0,i[b+1]=(l=s.albedo[v+1])!=null?l:0,i[b+2]=(c=s.albedo[v+2])!=null?c:0,i[b+3]=1,r[b]=(h=s.emissive[v])!=null?h:0,r[b+1]=(d=s.emissive[v+1])!=null?d:0,r[b+2]=(f=s.emissive[v+2])!=null?f:0,r[b+3]=1}return{albedoTexture:Af(i,t),emissiveTexture:Af(r,t),side:t}},kc=new I,Cf=new I,Pf=new I,Rf=new I,Lf=new I,If=new I;function GA(s){const e=s.geometry,t=e.attributes.position;if(!t)return 0;const n=s.matrixWorld;let i=0;const r=(a,l,c)=>(kc.fromBufferAttribute(t,a).applyMatrix4(n),Cf.fromBufferAttribute(t,l).applyMatrix4(n),Pf.fromBufferAttribute(t,c).applyMatrix4(n),Rf.subVectors(Cf,kc),Lf.subVectors(Pf,kc),If.crossVectors(Rf,Lf),If.length()*.5);if(e.index){const a=e.index.array;for(let l=0;l<a.length;l+=3)i+=r(a[l],a[l+1],a[l+2])}else for(let a=0;a<t.count;a+=3)i+=r(a,a+1,a+2);return i}function WA(s,e){var h;const t=(h=e.fillRatio)!=null?h:.95,n=e.atlasResolution*e.atlasResolution,i=e.texelsPerMeter*e.texelsPerMeter,a=[...s.map((d,f)=>{var x,g;const m=GA(d),v=(g=(x=e.perMeshScale)==null?void 0:x[d.uuid])!=null?g:1,b=m*i*v*v,w=n>0?b/n:0;return{mesh:d,inputIdx:f,surfaceArea:m,uvFraction:w}})].sort((d,f)=>f.uvFraction-d.uvFraction),l=[],c=new Array(s.length);for(const d of a){let f=d.uvFraction;if(f>t){const v=d.mesh.name||d.mesh.uuid.slice(0,8);console.warn(`[baker] mesh "${v}" wants ${(f*100).toFixed(0)}% of one ${e.atlasResolution}\xB2 atlas at ${e.texelsPerMeter} texels/m \u2014 clamping to ${(t*100).toFixed(0)}% (effective density reduced)`),f=t}let m=-1;for(let v=0;v<l.length;v++)if(l[v]+f<=t){l[v]=l[v]+f,m=v;break}m<0&&(m=l.length,l.push(f)),c[d.inputIdx]={atlasIdx:m,mesh:d.mesh,uvFraction:f,surfaceArea:d.surfaceArea}}return c}/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.6.9
*/var Df=function(s){return URL.createObjectURL(new Blob([s],{type:"text/javascript"}))};try{URL.revokeObjectURL(Df(""))}catch{Df=function(e){return"data:application/javascript;charset=UTF-8,"+encodeURI(e)}}var oi=Uint8Array,_n=Uint16Array,Lo=Uint32Array,Gu=new oi([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Wu=new oi([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Nf=new oi([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),qm=function(s,e){for(var t=new _n(31),n=0;n<31;++n)t[n]=e+=1<<s[n-1];for(var i=new Lo(t[30]),n=1;n<30;++n)for(var r=t[n];r<t[n+1];++r)i[r]=r-t[n]<<5|n;return[t,i]},Ym=qm(Gu,2),XA=Ym[0],vu=Ym[1];XA[28]=258,vu[258]=28;var jA=qm(Wu,0),Uf=jA[1],_u=new _n(32768);for(var Tt=0;Tt<32768;++Tt){var ji=(Tt&43690)>>>1|(Tt&21845)<<1;ji=(ji&52428)>>>2|(ji&13107)<<2,ji=(ji&61680)>>>4|(ji&3855)<<4,_u[Tt]=((ji&65280)>>>8|(ji&255)<<8)>>>1}var Ao=function(s,e,t){for(var n=s.length,i=0,r=new _n(e);i<n;++i)++r[s[i]-1];var a=new _n(e);for(i=0;i<e;++i)a[i]=a[i-1]+r[i-1]<<1;var l;if(t){l=new _n(1<<e);var c=15-e;for(i=0;i<n;++i)if(s[i])for(var h=i<<4|s[i],d=e-s[i],f=a[s[i]-1]++<<d,m=f|(1<<d)-1;f<=m;++f)l[_u[f]>>>c]=h}else for(l=new _n(n),i=0;i<n;++i)s[i]&&(l[i]=_u[a[s[i]-1]++]>>>15-s[i]);return l},Ss=new oi(288);for(var Tt=0;Tt<144;++Tt)Ss[Tt]=8;for(var Tt=144;Tt<256;++Tt)Ss[Tt]=9;for(var Tt=256;Tt<280;++Tt)Ss[Tt]=7;for(var Tt=280;Tt<288;++Tt)Ss[Tt]=8;var tl=new oi(32);for(var Tt=0;Tt<32;++Tt)tl[Tt]=5;var qA=Ao(Ss,9,0),YA=Ao(tl,5,0),Km=function(s){return(s/8|0)+(s&7&&1)},KA=function(s,e,t){(e==null||e<0)&&(e=0),(t==null||t>s.length)&&(t=s.length);var n=new(s instanceof _n?_n:s instanceof Lo?Lo:oi)(t-e);return n.set(s.subarray(e,t)),n},xi=function(s,e,t){t<<=e&7;var n=e/8|0;s[n]|=t,s[n+1]|=t>>>8},go=function(s,e,t){t<<=e&7;var n=e/8|0;s[n]|=t,s[n+1]|=t>>>8,s[n+2]|=t>>>16},Vc=function(s,e){for(var t=[],n=0;n<s.length;++n)s[n]&&t.push({s:n,f:s[n]});var i=t.length,r=t.slice();if(!i)return[Xu,0];if(i==1){var a=new oi(t[0].s+1);return a[t[0].s]=1,[a,1]}t.sort(function(P,C){return P.f-C.f}),t.push({s:-1,f:25001});var l=t[0],c=t[1],h=0,d=1,f=2;for(t[0]={s:-1,f:l.f+c.f,l,r:c};d!=i-1;)l=t[t[h].f<t[f].f?h++:f++],c=t[h!=d&&t[h].f<t[f].f?h++:f++],t[d++]={s:-1,f:l.f+c.f,l,r:c};for(var m=r[0].s,n=1;n<i;++n)r[n].s>m&&(m=r[n].s);var v=new _n(m+1),b=xu(t[d-1],v,0);if(b>e){var n=0,w=0,x=b-e,g=1<<x;for(r.sort(function(C,A){return v[A.s]-v[C.s]||C.f-A.f});n<i;++n){var E=r[n].s;if(v[E]>e)w+=g-(1<<b-v[E]),v[E]=e;else break}for(w>>>=x;w>0;){var y=r[n].s;v[y]<e?w-=1<<e-v[y]++-1:++n}for(;n>=0&&w;--n){var S=r[n].s;v[S]==e&&(--v[S],++w)}b=e}return[new oi(v),b]},xu=function(s,e,t){return s.s==-1?Math.max(xu(s.l,e,t+1),xu(s.r,e,t+1)):e[s.s]=t},Ff=function(s){for(var e=s.length;e&&!s[--e];);for(var t=new _n(++e),n=0,i=s[0],r=1,a=function(c){t[n++]=c},l=1;l<=e;++l)if(s[l]==i&&l!=e)++r;else{if(!i&&r>2){for(;r>138;r-=138)a(32754);r>2&&(a(r>10?r-11<<5|28690:r-3<<5|12305),r=0)}else if(r>3){for(a(i),--r;r>6;r-=6)a(8304);r>2&&(a(r-3<<5|8208),r=0)}for(;r--;)a(i);r=1,i=s[l]}return[t.subarray(0,n),e]},vo=function(s,e){for(var t=0,n=0;n<e.length;++n)t+=s[n]*e[n];return t},Xa=function(s,e,t){var n=t.length,i=Km(e+2);s[i]=n&255,s[i+1]=n>>>8,s[i+2]=s[i]^255,s[i+3]=s[i+1]^255;for(var r=0;r<n;++r)s[i+r+4]=t[r];return(i+4+n)*8},Of=function(s,e,t,n,i,r,a,l,c,h,d){xi(e,d++,t),++i[256];for(var f=Vc(i,15),m=f[0],v=f[1],b=Vc(r,15),w=b[0],x=b[1],g=Ff(m),E=g[0],y=g[1],S=Ff(w),P=S[0],C=S[1],A=new _n(19),D=0;D<E.length;++D)A[E[D]&31]++;for(var D=0;D<P.length;++D)A[P[D]&31]++;for(var B=Vc(A,7),M=B[0],R=B[1],z=19;z>4&&!M[Nf[z-1]];--z);var X=h+5<<3,F=vo(i,Ss)+vo(r,tl)+a,G=vo(i,m)+vo(r,w)+a+14+3*z+vo(A,M)+(2*A[16]+3*A[17]+7*A[18]);if(X<=F&&X<=G)return Xa(e,d,s.subarray(c,c+h));var H,W,ee,Z;if(xi(e,d,1+(G<F)),d+=2,G<F){H=Ao(m,v,0),W=m,ee=Ao(w,x,0),Z=w;var se=Ao(M,R,0);xi(e,d,y-257),xi(e,d+5,C-1),xi(e,d+10,z-4),d+=14;for(var D=0;D<z;++D)xi(e,d+3*D,M[Nf[D]]);d+=3*z;for(var ne=[E,P],ve=0;ve<2;++ve)for(var fe=ne[ve],D=0;D<fe.length;++D){var K=fe[D]&31;xi(e,d,se[K]),d+=M[K],K>15&&(xi(e,d,fe[D]>>>5&127),d+=fe[D]>>>12)}}else H=qA,W=Ss,ee=YA,Z=tl;for(var D=0;D<l;++D)if(n[D]>255){var K=n[D]>>>18&31;go(e,d,H[K+257]),d+=W[K+257],K>7&&(xi(e,d,n[D]>>>23&31),d+=Gu[K]);var ie=n[D]&31;go(e,d,ee[ie]),d+=Z[ie],ie>3&&(go(e,d,n[D]>>>5&8191),d+=Wu[ie])}else go(e,d,H[n[D]]),d+=W[n[D]];return go(e,d,H[256]),d+W[256]},$A=new Lo([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),Xu=new oi(0),ZA=function(s,e,t,n,i,r){var a=s.length,l=new oi(n+a+5*(1+Math.ceil(a/7e3))+i),c=l.subarray(n,l.length-i),h=0;if(!e||a<8)for(var d=0;d<=a;d+=65535){var f=d+65535;f<a?h=Xa(c,h,s.subarray(d,f)):(c[d]=r,h=Xa(c,h,s.subarray(d,a)))}else{for(var m=$A[e-1],v=m>>>13,b=m&8191,w=(1<<t)-1,x=new _n(32768),g=new _n(w+1),E=Math.ceil(t/3),y=2*E,S=function(Ae){return(s[Ae]^s[Ae+1]<<E^s[Ae+2]<<y)&w},P=new Lo(25e3),C=new _n(288),A=new _n(32),D=0,B=0,d=0,M=0,R=0,z=0;d<a;++d){var X=S(d),F=d&32767,G=g[X];if(x[F]=G,g[X]=F,R<=d){var H=a-d;if((D>7e3||M>24576)&&H>423){h=Of(s,c,0,P,C,A,B,M,z,d-z,h),M=D=B=0,z=d;for(var W=0;W<286;++W)C[W]=0;for(var W=0;W<30;++W)A[W]=0}var ee=2,Z=0,se=b,ne=F-G&32767;if(H>2&&X==S(d-ne))for(var ve=Math.min(v,H)-1,fe=Math.min(32767,d),K=Math.min(258,H);ne<=fe&&--se&&F!=G;){if(s[d+ee]==s[d+ee-ne]){for(var ie=0;ie<K&&s[d+ie]==s[d+ie-ne];++ie);if(ie>ee){if(ee=ie,Z=ne,ie>ve)break;for(var we=Math.min(ne,ie-2),Le=0,W=0;W<we;++W){var Ie=d-ne+W+32768&32767,Ee=x[Ie],He=Ie-Ee+32768&32767;He>Le&&(Le=He,G=Ie)}}}F=G,G=x[F],ne+=F-G+32768&32767}if(Z){P[M++]=268435456|vu[ee]<<18|Uf[Z];var Be=vu[ee]&31,q=Uf[Z]&31;B+=Gu[Be]+Wu[q],++C[257+Be],++A[q],R=d+ee,++D}else P[M++]=s[d],++C[s[d]]}}h=Of(s,c,r,P,C,A,B,M,z,d-z,h),!r&&h&7&&(h=Xa(c,h+1,Xu))}return KA(l,0,n+Km(h)+i)},QA=function(){var s=1,e=0;return{p:function(t){for(var n=s,i=e,r=t.length,a=0;a!=r;){for(var l=Math.min(a+2655,r);a<l;++a)i+=n+=t[a];n=(n&65535)+15*(n>>16),i=(i&65535)+15*(i>>16)}s=n,e=i},d:function(){return s%=65521,e%=65521,(s&255)<<24|s>>>8<<16|(e&255)<<8|e>>>8}}},JA=function(s,e,t,n,i){return ZA(s,e.level==null?6:e.level,e.mem==null?Math.ceil(Math.max(8,Math.min(13,Math.log(s.length)))*1.5):12+e.mem,t,n,!i)},e1=function(s,e,t){for(;t;++e)s[e]=t,t>>>=8},t1=function(s,e){var t=e.level,n=t==0?0:t<6?1:t==9?3:2;s[0]=120,s[1]=n<<6|(n?32-2*n:1)};function n1(s,e){e||(e={});var t=QA();t.p(s);var n=JA(s,e,2,4);return t1(n,e),e1(n,n.length-4,t.d()),n}var i1=typeof TextDecoder!="undefined"&&new TextDecoder,s1=0;try{i1.decode(Xu,{stream:!0}),s1=1}catch{}const r1=new TextEncoder,$m=3;class o1{parse(e,t,n){if(!e||!(e.isWebGLRenderer||e.isDataTexture))throw Error("EXRExporter.parse: Unsupported first parameter, expected instance of WebGLRenderer or DataTexture.");if(e.isWebGLRenderer){const i=e,r=t,a=n;a1(r);const l=c1(r,a),c=h1(i,r,l),h=Bf(c,l),d=kf(h,l);return Vf(d,l)}else if(e.isDataTexture){const i=e,r=t;l1(i);const a=u1(i,r),l=i.image.data,c=Bf(l,a),h=kf(c,a);return Vf(h,a)}}}function a1(s){if(!s||!s.isWebGLRenderTarget)throw Error("EXRExporter.parse: Unsupported second parameter, expected instance of WebGLRenderTarget.");if(s.isWebGLCubeRenderTarget||s.isWebGL3DRenderTarget||s.isWebGLArrayRenderTarget)throw Error("EXRExporter.parse: Unsupported render target type, expected instance of WebGLRenderTarget.");if(s.texture.type!==_t&&s.texture.type!==ii)throw Error("EXRExporter.parse: Unsupported WebGLRenderTarget texture type.");if(s.texture.format!==Wt)throw Error("EXRExporter.parse: Unsupported WebGLRenderTarget texture format, expected RGBAFormat.")}function l1(s){if(s.type!==_t&&s.type!==ii)throw Error("EXRExporter.parse: Unsupported DataTexture texture type.");if(s.format!==Wt)throw Error("EXRExporter.parse: Unsupported DataTexture texture format, expected RGBAFormat.");if(!s.image.data)throw Error("EXRExporter.parse: Invalid DataTexture image data.");if(s.type===_t&&s.image.data.constructor.name!=="Float32Array")throw Error("EXRExporter.parse: DataTexture image data doesn't match type, expected 'Float32Array'.");if(s.type===ii&&s.image.data.constructor.name!=="Uint16Array")throw Error("EXRExporter.parse: DataTexture image data doesn't match type, expected 'Uint16Array'.")}function c1(s,e={}){const t={0:1,2:1,3:16},n=s.width,i=s.height,r=s.texture.type,a=s.texture.format,l=e.compression!==void 0?e.compression:$m,c=e.type!==void 0?e.type:ii,h=c===_t?2:1,d=t[l],f=4;return{width:n,height:i,type:r,format:a,compression:l,blockLines:d,dataType:h,dataSize:2*h,numBlocks:Math.ceil(i/d),numInputChannels:4,numOutputChannels:f}}function u1(s,e={}){const t={0:1,2:1,3:16},n=s.image.width,i=s.image.height,r=s.type,a=s.format,l=e.compression!==void 0?e.compression:$m,c=e.type!==void 0?e.type:ii,h=c===_t?2:1,d=t[l],f=4;return{width:n,height:i,type:r,format:a,compression:l,blockLines:d,dataType:h,dataSize:2*h,numBlocks:Math.ceil(i/d),numInputChannels:4,numOutputChannels:f}}function h1(s,e,t){let n;return t.type===_t?n=new Float32Array(t.width*t.height*t.numInputChannels):n=new Uint16Array(t.width*t.height*t.numInputChannels),s.readRenderTargetPixels(e,0,0,t.width,t.height,n),n}function Bf(s,e){const t=e.width,n=e.height,i={r:0,g:0,b:0,a:0},r={value:0},a=e.numOutputChannels==4?1:0,l=e.type==_t?b1:x1,c=e.dataType==1?g1:bu,h=new Uint8Array(e.width*e.height*e.numOutputChannels*e.dataSize),d=new DataView(h.buffer);for(let f=0;f<n;++f)for(let m=0;m<t;++m){const v=f*t*4+m*4,b=l(s,v),w=l(s,v+1),x=l(s,v+2),g=l(s,v+3),E=(n-f-1)*t*(3+a)*e.dataSize;m1(i,b,w,x,g),r.value=E+m*e.dataSize,c(d,i.a,r),r.value=E+a*t*e.dataSize+m*e.dataSize,c(d,i.b,r),r.value=E+(1+a)*t*e.dataSize+m*e.dataSize,c(d,i.g,r),r.value=E+(2+a)*t*e.dataSize+m*e.dataSize,c(d,i.r,r)}return h}function kf(s,e){let t,n,i=0;const r={data:new Array,totalSize:0},a=e.width*e.numOutputChannels*e.blockLines*e.dataSize;switch(e.compression){case 0:t=d1;break;case 2:case 3:t=p1;break}e.compression!==0&&(n=new Uint8Array(a));for(let l=0;l<e.numBlocks;++l){const c=s.subarray(a*l,a*(l+1)),h=t(c,n);i+=h.length,r.data.push({dataChunk:h,size:h.length})}return r.totalSize=i,r}function d1(s){return s}function p1(s,e){let t=0,n=Math.floor((s.length+1)/2),i=0;const r=s.length-1;for(;!(i>r||(e[t++]=s[i++],i>r));)e[n++]=s[i++];let a=e[0];for(let c=1;c<e.length;c++){const h=e[c]-a+384;a=e[c],e[c]=h}return n1(e)}function f1(s,e,t){const n={value:0},i=new DataView(s.buffer);lt(i,20000630,n),lt(i,2,n),Ht(i,"compression",n),Ht(i,"compression",n),lt(i,1,n),yo(i,t.compression,n),Ht(i,"screenWindowCenter",n),Ht(i,"v2f",n),lt(i,8,n),lt(i,0,n),lt(i,0,n),Ht(i,"screenWindowWidth",n),Ht(i,"float",n),lt(i,4,n),bu(i,1,n),Ht(i,"pixelAspectRatio",n),Ht(i,"float",n),lt(i,4,n),bu(i,1,n),Ht(i,"lineOrder",n),Ht(i,"lineOrder",n),lt(i,1,n),yo(i,0,n),Ht(i,"dataWindow",n),Ht(i,"box2i",n),lt(i,16,n),lt(i,0,n),lt(i,0,n),lt(i,t.width-1,n),lt(i,t.height-1,n),Ht(i,"displayWindow",n),Ht(i,"box2i",n),lt(i,16,n),lt(i,0,n),lt(i,0,n),lt(i,t.width-1,n),lt(i,t.height-1,n),Ht(i,"channels",n),Ht(i,"chlist",n),lt(i,t.numOutputChannels*18+1,n),Ht(i,"A",n),lt(i,t.dataType,n),n.value+=4,lt(i,1,n),lt(i,1,n),Ht(i,"B",n),lt(i,t.dataType,n),n.value+=4,lt(i,1,n),lt(i,1,n),Ht(i,"G",n),lt(i,t.dataType,n),n.value+=4,lt(i,1,n),lt(i,1,n),Ht(i,"R",n),lt(i,t.dataType,n),n.value+=4,lt(i,1,n),lt(i,1,n),yo(i,0,n),yo(i,0,n);let r=n.value+t.numBlocks*8;for(let a=0;a<e.data.length;++a)v1(i,r,n),r+=e.data[a].size+8}function Vf(s,e){const t=e.numBlocks*8,n=259+18*e.numOutputChannels,i={value:n+t},r=new Uint8Array(n+t+s.totalSize+e.numBlocks*8),a=new DataView(r.buffer);f1(r,s,e);for(let l=0;l<s.data.length;++l){const c=s.data[l].dataChunk,h=s.data[l].size;lt(a,l*e.blockLines,i),lt(a,h,i),r.set(c,i.value),i.value+=h}return r}function m1(s,e,t,n,i){s.r=e,s.g=t,s.b=n,s.a=i}function yo(s,e,t){s.setUint8(t.value,e),t.value+=1}function lt(s,e,t){s.setUint32(t.value,e,!0),t.value+=4}function g1(s,e,t){s.setUint16(t.value,Ax.toHalfFloat(e),!0),t.value+=2}function bu(s,e,t){s.setFloat32(t.value,e,!0),t.value+=4}function v1(s,e,t){s.setBigUint64(t.value,BigInt(e),!0),t.value+=8}function Ht(s,e,t){const n=r1.encode(e+"\0");for(let i=0;i<n.length;++i)yo(s,n[i],t)}function _1(s){const e=(s&31744)>>10,t=s&1023;return(s>>15?-1:1)*(e?e===31?t?NaN:1/0:Math.pow(2,e-15)*(1+t/1024):6103515625e-14*(t/1024))}function x1(s,e){return _1(s[e])}function b1(s,e){return s[e]}const zf=new pe(new Kn(2,2)),y1=new Ti,Hf=new rn({glslVersion:si,blending:On,transparent:!1,depthWrite:!1,depthTest:!1,uniforms:{map:{value:null}},vertexShader:`
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
    `});function ju(s,e,t){const n=new Bn(t,t,{type:_t,minFilter:Ut,magFilter:Ut}),i=Hf.uniforms.map;if(!i)throw new Error("[baker] export passthrough material missing `map` uniform");i.value=e,zf.material=Hf;const r=s.getRenderTarget(),a=s.autoClear;try{s.autoClear=!0,s.setRenderTarget(n),s.render(zf,y1)}finally{s.setRenderTarget(r),s.autoClear=a}return n}function qu(s,e){const t=URL.createObjectURL(s),n=document.createElement("a");n.href=t,n.download=e,document.body.appendChild(n),n.click(),n.remove(),setTimeout(()=>URL.revokeObjectURL(t),0)}const Yu=(s,e)=>s.toLowerCase().endsWith(`.${e}`)?s:`${s}.${e}`;async function w1(s,e,t,n){var h,d,f;const i=ju(s,e,t),r=new Float32Array(t*t*4);s.readRenderTargetPixels(i,0,0,t,t,r),i.dispose();const a=new Uint8ClampedArray(t*t*4);for(let m=0;m<t;m++){const v=(t-1-m)*t*4,b=m*t*4;for(let w=0;w<t;w++){const x=v+w*4,g=b+w*4,E=Math.max((h=r[x])!=null?h:0,0),y=Math.max((d=r[x+1])!=null?d:0,0),S=Math.max((f=r[x+2])!=null?f:0,0);a[g]=Math.pow(E/(1+E),1/2.2)*255,a[g+1]=Math.pow(y/(1+y),1/2.2)*255,a[g+2]=Math.pow(S/(1+S),1/2.2)*255,a[g+3]=255}}const l=document.createElement("canvas");l.width=t,l.height=t;const c=l.getContext("2d");if(!c)throw new Error("exportPNG: 2D context unavailable");c.putImageData(new ImageData(a,t,t),0,0),await new Promise((m,v)=>{l.toBlob(b=>{if(!b){v(new Error("exportPNG: toBlob returned null"));return}qu(b,Yu(n,"png")),m()},"image/png")})}function E1(s,e,t,n){const i=ju(s,e,t),r=new o1().parse(s,i);i.dispose(),qu(new Blob([r],{type:"image/x-exr"}),Yu(n,"exr"))}function M1(s,e,t,n){const i=ju(s,e,t),r=new Float32Array(t*t*4);s.readRenderTargetPixels(i,0,0,t,t,r),i.dispose(),qu(new Blob([r.buffer],{type:"application/octet-stream"}),Yu(n,"bin"))}async function S1(s,e,t,n,i){switch(i){case"png":await w1(s,e,t,n);return;case"exr":E1(s,e,t,n);return;case"bin":M1(s,e,t,n);return}}const hr=22;class T1{constructor(e={}){var t,n,i,r;this.visible=!0,this.collapsed=!1,this.headerEl=null,this.layerLabel="",this.prevScissor=new vt,this.prevViewport=new vt,this.size=(t=e.size)!=null?t:256,this.margin=(n=e.margin)!=null?n:20,this.corner=(i=e.corner)!=null?i:"br",this.mat=new rn({glslVersion:si,blending:On,transparent:!1,depthTest:!1,depthWrite:!1,uniforms:{map:{value:null},sRGB:{value:(r=e.sRGB)!=null?r:!0},border:{value:.006}},vertexShader:`
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
            `}),this.scene=new wm,this.cam=new Ti,this.quad=new pe(new Kn(2,2),this.mat),this.scene.add(this.quad)}setTexture(e){this.mat.uniforms.map&&(this.mat.uniforms.map.value=e)}setSRGB(e){this.mat.uniforms.sRGB&&(this.mat.uniforms.sRGB.value=e)}setSize(e){this.size=e}setMargin(e){this.margin=e}setCorner(e){this.corner=e}setCollapsed(e){this.collapsed=e,this.refreshHeaderText()}setLayerLabel(e){this.layerLabel=e,this.refreshHeaderText()}attachHeader(e=document.body){if(this.headerEl)return;const t=document.createElement("div");Object.assign(t.style,{position:"absolute",boxSizing:"border-box",fontFamily:"monospace",fontSize:"11px",color:"#ddd",backgroundColor:"rgba(0,0,0,0.78)",padding:"4px 8px",cursor:"pointer",userSelect:"none",border:"1px solid #444",borderRadius:"3px",zIndex:"50",display:"none",lineHeight:`${hr-10}px`}),t.addEventListener("click",()=>this.setCollapsed(!this.collapsed)),e.appendChild(t),this.headerEl=t,this.refreshHeaderText()}detachHeader(){var e;(e=this.headerEl)==null||e.remove(),this.headerEl=null}refreshHeaderText(){if(!this.headerEl)return;const e=this.collapsed?"\u25B8":"\u25BE",t=this.layerLabel?` \xB7 ${this.layerLabel}`:"";this.headerEl.innerText=`${e} Atlas Viewer${t}`}positionHeader(e){if(!this.headerEl)return;if(!this.visible){this.headerEl.style.display="none";return}this.headerEl.style.display="block",this.headerEl.style.width=`${this.size}px`;let t=0,n=0;switch(this.corner){case"tl":t=this.margin,n=this.margin+hr;break;case"tr":t=e.width-this.size-this.margin,n=this.margin+hr;break;case"bl":t=this.margin,n=e.height-this.margin-this.size;break;case"br":t=e.width-this.size-this.margin,n=e.height-this.margin-this.size;break}const i=n-hr;this.headerEl.style.left=`${e.left+t}px`,this.headerEl.style.top=`${e.top+i}px`}render(e){var f;if(!this.visible){this.positionHeader(e.domElement.getBoundingClientRect());return}if(this.positionHeader(e.domElement.getBoundingClientRect()),this.collapsed||!((f=this.mat.uniforms.map)!=null&&f.value))return;const t=e.getPixelRatio(),n=e.domElement.width,i=e.domElement.height,r=Math.max(1,Math.floor(this.size*t)),a=Math.max(0,Math.floor(this.margin*t));let l=0,c=0;switch(this.corner){case"tl":l=a,c=i-r-a-Math.floor(hr*t);break;case"tr":l=n-r-a,c=i-r-a-Math.floor(hr*t);break;case"bl":l=a,c=a;break;case"br":l=n-r-a,c=a;break}const h=e.autoClear,d=e.getScissorTest();e.getScissor(this.prevScissor),e.getViewport(this.prevViewport);try{e.setScissorTest(!0),e.setScissor(l,c,r,r),e.setViewport(l,c,r,r),e.autoClear=!1,e.render(this.scene,this.cam)}finally{e.setScissor(this.prevScissor.x,this.prevScissor.y,this.prevScissor.z,this.prevScissor.w),e.setViewport(this.prevViewport.x,this.prevViewport.y,this.prevViewport.z,this.prevViewport.w),e.setScissorTest(d),e.autoClear=h}}dispose(){this.detachHeader(),this.mat.dispose(),this.quad.geometry.dispose()}}class A1 extends rn{constructor(e){super({glslVersion:si,uniforms:{uTexelsPerMeter:{value:e.texelsPerMeter},uLightmapSize:{value:e.lightmapSize}},vertexShader:`
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

                    // Checker \u2014 one square per lightmap texel in UV2 space.
                    vec2 cell = floor(vUv2 * uLightmapSize);
                    float check = mod(cell.x + cell.y, 2.0);
                    float bright = check > 0.5 ? 1.0 : 0.6;

                    fragColor = vec4(c * bright, 1.0);
                }
            `})}setTexelsPerMeter(e){const t=this.uniforms.uTexelsPerMeter;t&&(t.value=e)}setLightmapSize(e){const t=this.uniforms.uLightmapSize;t&&(t.value=e)}}const Sn=10,dr=Sn/2,fs=[{id:"combined",label:"Combined",group:"output",showAlbedo:!0,getLightMap:s=>{var e,t;return(t=(e=s.group.refinement)==null?void 0:e.texture)!=null?t:s.group.composite.texture}},{id:"combinedPost",label:"Combined (Refined)",group:"output",showAlbedo:!0,getLightMap:s=>{var e,t;return(t=(e=s.group.refinement)==null?void 0:e.texture)!=null?t:s.group.composite.texture}},{id:"combinedRaw",label:"Combined (Raw)",group:"output",showAlbedo:!0,getLightMap:s=>s.group.composite.texture},{id:"direct",label:"Direct",group:"output",showAlbedo:!1,getLightMap:s=>s.group.lightmapper.textures.direct},{id:"indirect",label:"Indirect (GI)",group:"output",showAlbedo:!1,getLightMap:s=>s.group.lightmapper.textures.indirect},{id:"ao",label:"Ambient Occlusion",group:"output",showAlbedo:!1,getLightMap:s=>s.group.lightmapper.textures.ao},{id:"lightmapRaw",label:"Lightmap (Raw)",group:"debug",showAlbedo:!1,getLightMap:s=>s.group.composite.texture},{id:"albedo",label:"Albedo",group:"debug",showAlbedo:!0,getLightMap:()=>null},{id:"positions",label:"World Position",group:"debug",showAlbedo:!1,getLightMap:s=>s.group.positionTexture},{id:"normals",label:"World Normal",group:"debug",showAlbedo:!1,getLightMap:s=>s.group.normalTexture},{id:"texelDensity",label:"Texel Density",group:"debug",showAlbedo:!1,getLightMap:()=>null}],C1=Object.fromEntries(fs.map(s=>[s.label,s.id])),P1={Linear:"linear",Nearest:"nearest"},R1={"Cornell Classic":"classic","Cornell Advanced":"advanced"},Gf={Custom:null,Draft:{lightMapSize:256,casts:4,targetSamples:32},Preview:{lightMapSize:512,casts:5,targetSamples:96},Production:{lightMapSize:1024,casts:6,targetSamples:256},Final:{lightMapSize:2048,casts:8,targetSamples:512}},Zm=class{constructor(){this.cornellRoot=null,this.meshes=[],this.bakeGroups=[],this.meshToGroup=new Map,this.matTexDispose=null,this.texelDensityMat=null,this.originalMaterials=new WeakMap,this.options={preset:"advanced",layer:"combined",quality:"Custom",lightMapSize:1024,casts:5,targetSamples:256,bounces:2,filterMode:"linear",directLightEnabled:!0,indirectLightEnabled:!0,ambientLightEnabled:!0,ambientDistance:.5,aoIntensity:1,aoExponent:1.5,texelsPerMeter:10,lightSize:2.9,lightIntensity:2,lightColor:"#ffffff",directIntensity:1.4,giIntensity:2.7,skyColor:"#ffffff",skyIntensity:0,pause:!1,showGizmo:!0,autoApplyRefinement:!0,dilationIterations:4,denoiseEnabled:!0,denoiseSigma:2.5,denoiseThreshold:.18,denoiseKSigma:1,secondaryLightEnabled:!1,secondaryDirX:-.5,secondaryDirY:-1,secondaryDirZ:-.5,secondaryIntensity:.8,secondaryColor:"#ffffcc",samples:0,spp:0,etaSec:0,refinementStatus:"idle",exportFormat:"png",perMesh:{},atlasViewerEnabled:!0,atlasViewerSize:256,atlasViewerCorner:"br",atlasViewerSRGB:!0},this.perMeshFolder=null,this.atlasViewer=(()=>{const f=new T1({size:256,corner:"br",sRGB:!0});return f.attachHeader(),f})(),this.looping=!1,this.bakeStartTime=0,this.bakeBatchHistory=[],this.scene=new wm,this.scene.background=new Ve(657930),this.camera=new fn(45,window.innerWidth/window.innerHeight,.1,1e3),this.camera.position.set(0,5,18),this.camera.lookAt(0,5,0),this.renderer=new ym({antialias:!0}),this.renderer.outputColorSpace=Ft,this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(window.devicePixelRatio),document.body.appendChild(this.renderer.domElement),this.controls=new bT(this.camera,this.renderer.domElement),this.controls.target.set(0,5,0),this.controls.update(),this.lightDummy=new ft,this.lightDummy.position.set(0,Sn-.001,0),this.scene.add(this.lightDummy),this.lightMarker=new pe(new Kn(2.5,2.5),new ei({color:16777215,side:mn})),this.lightMarker.rotation.x=Math.PI/2,this.lightDummy.add(this.lightMarker),this.visualLight=new Cm(16777215,80,0,2),this.lightDummy.add(this.visualLight),this.lightTransformController=new yT(this.camera,this.renderer.domElement),this.lightTransformController.addEventListener("dragging-changed",f=>{this.controls.enabled=!f.value}),this.lightTransformController.attach(this.lightDummy),this.scene.add(this.lightTransformController),this.pane=new du.exports.Pane({title:"\u{1F506} Lightbaker"});const s=this.pane.addFolder({title:"View",expanded:!0});s.element.classList.add("tp-view"),s.addInput(this.options,"layer",{options:C1,label:"Layer"}).on("change",()=>this.applyRenderMode()),s.addInput(this.options,"filterMode",{options:P1,label:"Filtering"}).on("change",()=>this.applyRenderMode()),s.addInput(this.options,"showGizmo",{label:"Show Gizmo"}),s.addInput(this.options,"pause",{label:"Pause"});const e=this.pane.addFolder({title:"Bake Settings",expanded:!1});e.element.classList.add("tp-bake"),e.addInput(this.options,"quality",{options:Object.fromEntries(Object.keys(Gf).map(f=>[f,f])),label:"Preset"}).on("change",f=>this.applyQualityPreset(f.value)),e.addInput(this.options,"lightMapSize",{min:128,max:2048,step:128,label:"Atlas Size"}).on("change",()=>{this.options.quality="Custom",this.pane.refresh(),this.bake()}),e.addInput(this.options,"texelsPerMeter",{min:1,max:50,step:.5,label:"Density (px/m)"}).on("change",()=>{var f;(f=this.texelDensityMat)==null||f.setTexelsPerMeter(this.options.texelsPerMeter),this.bake()}),e.addInput(this.options,"casts",{min:1,max:16,step:1,label:"Casts/Frame"}).on("change",()=>{this.options.quality="Custom",this.pane.refresh(),this.bake()}),e.addInput(this.options,"targetSamples",{min:16,max:1024,step:16,label:"Target Frames"}).on("change",()=>{this.options.quality="Custom",this.pane.refresh(),this.bake()}),e.addInput(this.options,"bounces",{min:1,max:4,step:1,label:"Bounces"}).on("change",()=>{this.options.quality="Custom",this.pane.refresh(),this.bake()}),e.addButton({title:"Bake Now"}).on("click",()=>this.bake());const t=this.pane.addFolder({title:"Lighting & GI",expanded:!1});t.element.classList.add("tp-light");const n=t.addFolder({title:"Direct Light"});n.addInput(this.options,"directLightEnabled",{label:"Enabled"}).on("change",()=>this.bake()),n.addInput(this.options,"lightColor",{view:"color",label:"Color"}).on("change",()=>this.bake()),n.addInput(this.options,"lightIntensity",{min:0,max:15,step:.1,label:"Bake Power"}).on("change",()=>this.bake()),n.addInput(this.options,"lightSize",{min:.1,max:5,step:.1,label:"Source Size"}).on("change",()=>this.bake()),n.addInput(this.options,"directIntensity",{min:0,max:4,step:.05,label:"View Multiplier"}).on("change",()=>this.refreshAllComposites({directIntensity:this.options.directIntensity}));const i=t.addFolder({title:"Global Illumination"});i.addInput(this.options,"indirectLightEnabled",{label:"Enabled"}).on("change",()=>this.bake()),i.addInput(this.options,"giIntensity",{min:0,max:4,step:.05,label:"Bounce Power"}).on("change",()=>this.refreshAllComposites({giIntensity:this.options.giIntensity})),i.addInput(this.options,"skyColor",{view:"color",label:"Sky Color"}).on("change",()=>this.bake()),i.addInput(this.options,"skyIntensity",{min:0,max:4,step:.05,label:"Sky Intensity"}).on("change",()=>this.bake());const r=t.addFolder({title:"Ambient Occlusion"});r.addInput(this.options,"ambientLightEnabled",{label:"Enabled"}).on("change",()=>{this.refreshAllComposites({aoEnabled:this.options.ambientLightEnabled}),this.bake()}),r.addInput(this.options,"ambientDistance",{min:.05,max:2,step:.05,label:"Max Distance"}).on("change",()=>this.bake()),r.addInput(this.options,"aoIntensity",{min:0,max:3,step:.05,label:"Intensity"}).on("change",()=>this.bake()),r.addInput(this.options,"aoExponent",{min:.5,max:4,step:.1,label:"Exponent"}).on("change",()=>this.bake());const a=this.pane.addFolder({title:"Refinement",expanded:!1});a.element.classList.add("tp-post"),a.addInput(this.options,"autoApplyRefinement",{label:"Auto-apply"}),a.addInput(this.options,"dilationIterations",{min:0,max:8,step:1,label:"Dilate Iters"}),a.addInput(this.options,"denoiseEnabled",{label:"Denoise"}),a.addInput(this.options,"denoiseSigma",{min:.1,max:8,step:.1,label:"Spatial Sigma"}),a.addInput(this.options,"denoiseThreshold",{min:.01,max:1,step:.01,label:"Edge Thresh"}),a.addInput(this.options,"denoiseKSigma",{min:.5,max:3,step:.1,label:"Range Sigma"}),a.addButton({title:"Run Refinement"}).on("click",()=>this.applyRefinement()),a.addButton({title:"Revert to Raw"}).on("click",()=>this.showUnrefined());const l=t.addFolder({title:"Secondary Light (Directional)"});l.addInput(this.options,"secondaryLightEnabled",{label:"Enabled"}).on("change",()=>this.bake()),l.addInput(this.options,"secondaryDirX",{min:-1,max:1,step:.05,label:"Dir X"}).on("change",()=>this.bake()),l.addInput(this.options,"secondaryDirY",{min:-1,max:1,step:.05,label:"Dir Y"}).on("change",()=>this.bake()),l.addInput(this.options,"secondaryDirZ",{min:-1,max:1,step:.05,label:"Dir Z"}).on("change",()=>this.bake()),l.addInput(this.options,"secondaryIntensity",{min:0,max:5,step:.1,label:"Intensity"}).on("change",()=>this.bake()),l.addInput(this.options,"secondaryColor",{view:"color",label:"Color"}).on("change",()=>this.bake());const c=this.pane.addFolder({title:"Export",expanded:!1});c.element.classList.add("tp-export"),c.addInput(this.options,"exportFormat",{options:{"PNG (LDR preview)":"png","EXR (HDR linear)":"exr","Raw Float32 (.bin)":"bin"},label:"Format"}),c.addButton({title:"Export Final Lightmap"}).on("click",()=>this.exportFinal()),c.addButton({title:"Export Current Layer"}).on("click",()=>this.exportCurrent());const h=this.pane.addFolder({title:"Atlas Viewer",expanded:!1});h.element.classList.add("tp-viewer"),h.addInput(this.options,"atlasViewerEnabled",{label:"Enabled"}).on("change",f=>{this.atlasViewer.visible=f.value}),h.addInput(this.options,"atlasViewerSize",{min:128,max:768,step:32,label:"Size"}).on("change",f=>this.atlasViewer.setSize(f.value)),h.addInput(this.options,"atlasViewerCorner",{options:{"Top-Left":"tl","Top-Right":"tr","Bot-Left":"bl","Bot-Right":"br"},label:"Corner"}).on("change",f=>this.atlasViewer.setCorner(f.value)),h.addInput(this.options,"atlasViewerSRGB",{label:"sRGB Encode"}).on("change",f=>this.atlasViewer.setSRGB(f.value));const d=this.pane.addFolder({title:"Scene",expanded:!1});d.element.classList.add("tp-scene"),d.addInput(this.options,"preset",{options:R1,label:"Complexity"}).on("change",()=>this.rebuildScene()),d.addButton({title:"Import GLB..."}).on("click",()=>{this.glbFileInput.value="",this.glbFileInput.click()}),d.addButton({title:"Reset to Cornell"}).on("click",()=>this.rebuildScene()),d.addButton({title:"Export Scene as GLB"}).on("click",()=>void this.exportSceneGLB()),this.initUI(),this.rebuildScene()}buildPerMeshUI(){var e;(e=this.perMeshFolder)==null||e.dispose();const s=this.pane.addFolder({title:"Per-Mesh",expanded:!1});this.perMeshFolder=s;for(const t of this.meshes){const n=t.uuid;this.options.perMesh[n]||(this.options.perMesh[n]={scaleInLightmap:1,exclude:!1});const i=this.options.perMesh[n],r=t.name||n.slice(0,8),a=s.addFolder({title:r,expanded:!1});a.addInput(i,"exclude",{label:"Exclude"}).on("change",()=>this.bake()),a.addInput(i,"scaleInLightmap",{label:"Density \xD7",min:.25,max:4,step:.25}).on("change",()=>this.bake())}}initUI(){this.fpsElement=document.createElement("div"),this.fpsElement.style.position="absolute",this.fpsElement.style.top="10px",this.fpsElement.style.left="10px",this.fpsElement.style.color="#00ff00",this.fpsElement.style.fontFamily="monospace",this.fpsElement.style.fontSize="12px",this.fpsElement.style.pointerEvents="none",this.fpsElement.style.zIndex="100",document.body.appendChild(this.fpsElement),this.progressContainer=document.createElement("div"),this.progressContainer.style.position="absolute",this.progressContainer.style.bottom="20px",this.progressContainer.style.left="20px",this.progressContainer.style.width="300px",this.progressContainer.style.backgroundColor="rgba(0, 0, 0, 0.7)",this.progressContainer.style.padding="12px",this.progressContainer.style.borderRadius="4px",this.progressContainer.style.fontFamily="monospace",this.progressContainer.style.fontSize="11px",this.progressContainer.style.color="#fff",this.progressContainer.style.display="none",this.progressContainer.style.zIndex="100",this.progressContainer.style.border="1px solid #444",document.body.appendChild(this.progressContainer);const s=document.createElement("div");s.style.width="100%",s.style.height="4px",s.style.backgroundColor="#222",s.style.marginTop="8px",s.style.borderRadius="2px",s.style.overflow="hidden",this.progressContainer.appendChild(s),this.progressBar=document.createElement("div"),this.progressBar.className="progress-pulse",this.progressBar.style.width="0%",this.progressBar.style.height="100%",this.progressBar.style.backgroundColor="#00ff00",s.appendChild(this.progressBar),this.progressText=document.createElement("div"),this.progressText.style.marginTop="8px",this.progressText.style.whiteSpace="pre",this.progressContainer.appendChild(this.progressText),this.glbFileInput=document.createElement("input"),this.glbFileInput.type="file",this.glbFileInput.accept=".glb,.gltf",this.glbFileInput.style.display="none",this.glbFileInput.addEventListener("change",()=>{var t;const e=(t=this.glbFileInput.files)==null?void 0:t[0];e&&this.importGLB(e)}),document.body.appendChild(this.glbFileInput)}updateSize(){this.renderer.setSize(window.innerWidth,window.innerHeight),this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setPixelRatio(window.devicePixelRatio)}mat(s,e=.95,t=0){const n=new ll({color:s,roughness:e,metalness:t});return n._originalMap=null,n}addMesh(s){const e=s;return this.meshes.push(e),this.cornellRoot.add(e),e}buildWalls(){const e=this.mat(15790320),t=this.mat(14034728),n=this.mat(2924588),i=new pe(new xt(Sn,.2,Sn),e);i.position.set(0,-.2/2,0),this.addMesh(i);const r=new pe(new xt(Sn,.2,Sn),e.clone());r.material._originalMap=null,r.position.set(0,Sn+.2/2,0),this.addMesh(r);const a=new pe(new xt(Sn,Sn,.2),e.clone());a.material._originalMap=null,a.position.set(0,dr,-dr-.2/2),this.addMesh(a);const l=new pe(new xt(.2,Sn,Sn),t);l.position.set(-dr-.2/2,dr,0),this.addMesh(l);const c=new pe(new xt(.2,Sn,Sn),n);c.position.set(dr+.2/2,dr,0),this.addMesh(c)}buildClassicBlocks(){const s=this.mat(15263976),e=new pe(new xt(3,6,3),s);e.position.set(-1.8,3,-1.5),e.rotation.y=.29,this.addMesh(e);const t=new pe(new xt(3,3,3),s.clone());t.material._originalMap=null,t.position.set(1.8,1.5,1.5),t.rotation.y=-.29,this.addMesh(t)}buildAdvancedExtras(){const s=new pe(new al(1,48,32),this.mat(16119285,.4,0));s.position.set(2.4,1,3),this.addMesh(s);const e=new pe(new Du(.55,.18,160,24),this.mat(16765286,.55,0));e.position.set(0,1,2.8),e.rotation.x=Math.PI/2,this.addMesh(e);const t=new pe(new xt(1.2,1.2,1.2),this.mat(13072954,.8,0));t.position.set(-3.5,.6,2.8),t.rotation.y=.45,this.addMesh(t)}async importGLB(s){var i;const e=await s.arrayBuffer(),t=new LT;let n;try{n=await new Promise((r,a)=>{t.parse(e,"",r,a)})}catch(r){console.error("[baker] GLB parse failed:",r);return}if(this.disposeAllGroups(),(i=this.matTexDispose)==null||i.call(this),this.matTexDispose=null,this.cornellRoot&&this.scene.remove(this.cornellRoot),this.cornellRoot=new ft,this.scene.add(this.cornellRoot),this.cornellRoot.add(n.scene),this.meshes=[],n.scene.traverse(r=>{const a=r;if(!a.isMesh)return;const l=a.material;Array.isArray(l)||!l||!("lightMap"in l)||(a.geometry.index||(a.geometry=RT(a.geometry)),this.meshes.push(a))}),!this.meshes.length){console.warn("[baker] imported GLB has no bake-eligible meshes (need MeshStandard*)");return}this.cornellRoot.updateMatrixWorld(!0),this.fitCameraAndLightToScene(),this.options.perMesh={},this.buildPerMeshUI(),await this.bake(),this.startLoop()}fitCameraAndLightToScene(){const s=new Vt;for(const i of this.meshes)s.expandByObject(i);if(s.isEmpty())return;const e=s.getSize(new I),t=s.getCenter(new I),n=Math.max(e.x,e.y,e.z)||1;this.lightDummy.position.set(t.x,s.max.y+n*.1,t.z),this.camera.position.set(t.x,t.y,t.z+n*2.5),this.controls.target.copy(t),this.controls.update()}async exportSceneGLB(){if(!this.meshes.length){console.warn("[baker] no meshes to export");return}if(!this.bakeGroups.length){console.warn("[baker] no baked lightmap available \u2014 bake first");return}const s=this.options.layer;this.options.layer="combined",this.applyRenderMode(),this.options.layer=s;const{GLTFExporter:e}=await $v(()=>import("./GLTFExporter.3d2e4512.js"),[]),t=new e,n=await new Promise((l,c)=>{t.parse(this.cornellRoot,h=>{h instanceof ArrayBuffer?l(h):c(new Error("expected binary GLB output"))},h=>c(h),{binary:!0,embedImages:!0})}),i=new Blob([n],{type:"model/gltf-binary"}),r=URL.createObjectURL(i),a=document.createElement("a");a.href=r,a.download="scene-baked.glb",a.click(),URL.revokeObjectURL(r)}async rebuildScene(){this.disposeAllGroups(),this.cornellRoot&&this.scene.remove(this.cornellRoot),this.cornellRoot=new ft,this.scene.add(this.cornellRoot),this.meshes=[],this.buildWalls(),this.buildClassicBlocks(),this.options.preset==="advanced"&&this.buildAdvancedExtras();const s=new Set(this.meshes.map(e=>e.uuid));for(const e of Object.keys(this.options.perMesh))s.has(e)||delete this.options.perMesh[e];this.buildPerMeshUI(),await this.bake(),this.startLoop()}disposeAllGroups(){var s;for(const e of this.bakeGroups)(s=e.refinement)==null||s.dispose(),e.composite.dispose(),e.lightmapper.dispose(),e.atlasDispose();this.bakeGroups=[],this.meshToGroup.clear()}async bake(){var b,w;if(!this.meshes.length)return;this.progressContainer.style.display="block",this.bakeStartTime=performance.now(),this.bakeBatchHistory=[];const s=this.options.lightMapSize;this.scene.updateMatrixWorld(!0);const e=this.meshes.filter(x=>{var g;return((g=this.options.perMesh[x.uuid])==null?void 0:g.exclude)!==!0});if(!e.length){console.warn("[baker] all meshes excluded \u2014 nothing to bake"),this.progressContainer.style.display="none";return}const t={};for(const x of e){const g=(b=this.options.perMesh[x.uuid])==null?void 0:b.scaleInLightmap;g!==void 0&&g!==1&&(t[x.uuid]=g)}const n=WA(e,{atlasResolution:s,texelsPerMeter:this.options.texelsPerMeter,perMeshScale:t}),i=n.reduce((x,g)=>Math.max(x,g.atlasIdx+1),0),r=Array.from({length:i},()=>[]);for(const x of n)r[x.atlasIdx].push(x.mesh);await xA(r);const a=kA(this.meshes),l=new zu(a);(w=this.matTexDispose)==null||w.call(this);const c=zA(a,this.meshes),h=HA(c);this.matTexDispose=()=>{h.albedoTexture.dispose(),h.emissiveTexture.dispose()};const d=new Ve(this.options.lightColor).convertSRGBToLinear(),f=new Ve(this.options.skyColor).convertSRGBToLinear();this.visualLight.color.copy(d),this.visualLight.intensity=30*this.options.lightIntensity;const m=[{type:"point",position:this.lightDummy.position.clone(),direction:new I(0,-1,0),color:d.clone().multiplyScalar(this.options.lightIntensity),params:[this.options.lightSize,0,0,0]}];if(this.options.secondaryLightEnabled){const x=new Ve(this.options.secondaryColor).convertSRGBToLinear().multiplyScalar(this.options.secondaryIntensity),g=new I(this.options.secondaryDirX,this.options.secondaryDirY,this.options.secondaryDirZ).normalize();m.push({type:"directional",position:new I(0,0,0),direction:g,color:x,params:[0,0,0,0]})}const v={casts:this.options.casts,filterMode:this.options.filterMode==="linear"?Ut:dt,lights:m,skyColor:f,skyIntensity:this.options.skyIntensity,ambientDistance:this.options.ambientDistance,aoIntensity:this.options.aoIntensity,aoExponent:this.options.aoExponent,ambientLightEnabled:this.options.ambientLightEnabled,directLightEnabled:this.options.directLightEnabled,indirectLightEnabled:this.options.indirectLightEnabled,albedoTexture:h.albedoTexture,emissiveTexture:h.emissiveTexture,materialTextureSize:h.side,targetSamples:this.options.targetSamples,bounces:this.options.bounces};this.disposeAllGroups();for(let x=0;x<i;x++){const g=r[x],E=AA(this.renderer,g,s,!0),y=IA(this.renderer,E.positionTexture,E.normalTexture,l,{...v,resolution:s}),S=NA(this.renderer,y.textures,s,{directIntensity:this.options.directIntensity,giIntensity:this.options.giIntensity,aoEnabled:this.options.ambientLightEnabled}),P={atlasIdx:x,meshes:g,positionTexture:E.positionTexture,normalTexture:E.normalTexture,atlasDispose:E.dispose,lightmapper:y,composite:S,refinement:null};this.bakeGroups.push(P);for(const C of g)this.meshToGroup.set(C,P);y.render()}this.options.refinementStatus="idle",this.options.samples=0,this.options.spp=0,this.options.etaSec=0,this.options.pause=!1,this.pane.refresh(),this.applyRenderMode()}applyQualityPreset(s){const e=Gf[s];!e||(this.options.lightMapSize=e.lightMapSize,this.options.casts=e.casts,this.options.targetSamples=e.targetSamples,this.pane.refresh(),this.bake())}async applyRefinement(){var e;if(!this.bakeGroups.length)return;this.options.refinementStatus="running",this.pane.refresh();const s=this.options.lightMapSize;for(let t=0;t<this.bakeGroups.length;t++){const n=this.bakeGroups[t];(e=n.refinement)==null||e.dispose(),n.refinement=await BA(this.renderer,n.composite.texture,n.positionTexture,s,this.options,i=>{const r=(t+i)/this.bakeGroups.length;this.progressBar.style.width=`${Math.min(100,r*100)}%`,this.progressText.innerText=`Refinement: atlas ${t+1}/${this.bakeGroups.length} (${Math.round(i*100)}%)
Dilation & Bilateral Denoise...`})}this.options.refinementStatus=this.options.dilationIterations>0||this.options.denoiseEnabled?"applied":"skipped",this.pane.refresh(),this.applyRenderMode(),this.progressText.innerText=`Baking & Refinement complete!
Ready.`,setTimeout(()=>{this.progressContainer.style.display="none"},3e3)}async exportFinal(){var e,t;if(!this.bakeGroups.length){console.warn("[baker] export: no bake to export \u2014 bake first");return}const s=this.bakeGroups[0].refinement?"refined":"composite";for(let n=0;n<this.bakeGroups.length;n++){const i=this.bakeGroups[n],r=(t=(e=i.refinement)==null?void 0:e.texture)!=null?t:i.composite.texture,a=this.bakeGroups.length>1?`_atlas${n}`:"";await this.runExport(r,`lightmap_${s}_${this.options.lightMapSize}${a}`)}}async exportCurrent(){var t;const s=(t=fs.find(n=>n.id===this.options.layer))!=null?t:fs[0];if(!this.bakeGroups.length){console.warn("[baker] export: no bake to export \u2014 bake first");return}let e=0;for(let n=0;n<this.bakeGroups.length;n++){const i=this.bakeGroups[n],r=s.getLightMap({group:i});if(!r)continue;const a=this.bakeGroups.length>1?`_atlas${n}`:"";await this.runExport(r,`lightmap_${s.id}_${this.options.lightMapSize}${a}`),e++}e||console.warn(`[baker] export: layer "${s.id}" has no exportable texture`)}async runExport(s,e){const t=this.options.exportFormat,n=this.options.lightMapSize,i=performance.now();try{await S1(this.renderer,s,n,e,t),console.info(`[baker] exported ${e}.${t} (${n}\xD7${n}) in ${(performance.now()-i).toFixed(0)}ms`)}catch(r){throw console.error("[baker] export failed:",r),r}}showUnrefined(){var s;for(const e of this.bakeGroups)(s=e.refinement)==null||s.dispose(),e.refinement=null;this.options.refinementStatus="idle",this.pane.refresh(),this.applyRenderMode()}applyRenderMode(){var e,t;const s=(e=fs.find(n=>n.id===this.options.layer))!=null?e:fs[0];if(s.id==="texelDensity"){this.texelDensityMat?(this.texelDensityMat.setLightmapSize(this.options.lightMapSize),this.texelDensityMat.setTexelsPerMeter(this.options.texelsPerMeter)):this.texelDensityMat=new A1({texelsPerMeter:this.options.texelsPerMeter,lightmapSize:this.options.lightMapSize});for(const n of this.meshes)this.originalMaterials.has(n)||this.originalMaterials.set(n,n.material),n.material=this.texelDensityMat;this.visualLight.visible=!1;return}for(const n of this.meshes){const i=this.originalMaterials.get(n);i&&n.material!==i&&(n.material=i)}for(const n of this.meshes){const i=n.material;i.map=s.showAlbedo&&(t=i._originalMap)!=null?t:null;const r=this.meshToGroup.get(n),a=r?s.getLightMap({group:r}):null;i.lightMap=a,i.lightMap&&(i.lightMap.channel=2,i.lightMap.needsUpdate=!0),i.lightMapIntensity=1,i.needsUpdate=!0}this.lightMarker.material.color=new Ve(16777215),this.visualLight.visible=s.id==="albedo"}estimateTimeRemaining(s,e){if(e<=0||s>=e)return 0;const t=this.bakeBatchHistory;if(t.length<2)return 0;const n=t[0],i=t[t.length-1],r=i.samples-n.samples,a=i.t-n.t;if(r<=0||a<=0)return 0;const l=a/r;return(e-s)*l/1e3}startLoop(){if(this.looping)return;this.looping=!0;let s=performance.now(),e=0,t=0;const n=()=>{var r,a;requestAnimationFrame(n),this.lightTransformController.visible=this.options.showGizmo,this.lightTransformController.enabled=this.options.showGizmo;const i=performance.now();if(e++,i>=s+1e3&&(t=Math.round(e*1e3/(i-s)),this.fpsElement.innerText=`FPS: ${t}`,e=0,s=i),this.bakeGroups.length&&!this.options.pause){let l=!0,c=1/0;for(const x of this.bakeGroups){const g=x.lightmapper.render();g.done||(l=!1),g.samples<c&&(c=g.samples)}if(Number.isFinite(c)||(c=0),l){this.options.pause=!0,this.options.etaSec=0;const x=(performance.now()-this.bakeStartTime)/1e3;console.info(`[baker] done in ${x.toFixed(2)}s (${this.bakeGroups.length} atlas${this.bakeGroups.length===1?"":"es"})`),this.progressText.innerText=`Baking complete! ${x.toFixed(1)}s
Running post-process...`;for(const g of this.bakeGroups){const E=g.lightmapper.renderTarget;for(let y=0;y<3;y++){const S=E.texture[y];!S||(S.generateMipmaps=!0,S.minFilter=wu,this.renderer.initTexture(S))}g.composite.texture.needsUpdate=!0}this.pane.refresh(),this.options.autoApplyRefinement&&this.applyRefinement();return}for(const x of this.bakeGroups)x.composite.refresh();const h=this.options.targetSamples,d=h>0?c/h:0;this.progressBar.style.width=`${Math.min(100,d*100)}%`;const f=(performance.now()-this.bakeStartTime)/1e3,m=performance.now(),v=this.bakeBatchHistory[this.bakeBatchHistory.length-1];(!v||v.samples!==c)&&(this.bakeBatchHistory.push({samples:c,t:m}),this.bakeBatchHistory.length>Zm.BAKE_ETA_WINDOW&&this.bakeBatchHistory.shift());const b=this.estimateTimeRemaining(c,h),w=c*this.options.casts;this.options.samples=c,this.options.spp=w,this.options.etaSec=Math.ceil(b),this.progressText.innerText=`Baking: ${c}/${h} frames (${w} spp, ${this.bakeGroups.length} atlas${this.bakeGroups.length===1?"":"es"})
Elapsed: ${f.toFixed(1)}s | ETA: ${this.options.etaSec}s`}if(this.controls.update(),this.renderer.render(this.scene,this.camera),this.atlasViewer.visible=this.options.atlasViewerEnabled,this.atlasViewer.visible){const l=(r=fs.find(d=>d.id===this.options.layer))!=null?r:fs[0],c=this.bakeGroups[0],h=c?(a=l.getLightMap({group:c}))!=null?a:c.composite.texture:null;this.atlasViewer.setTexture(h),this.atlasViewer.setLayerLabel(l.label)}this.atlasViewer.render(this.renderer)};n()}refreshAllComposites(s){for(const e of this.bakeGroups)e.composite.refresh(s)}};let Qm=Zm;Qm.BAKE_ETA_WINDOW=16;(async()=>{await vA();const s=new Qm;window.addEventListener("resize",()=>s.updateSize())})();export{At as B,I1 as C,mn as D,Po as I,Ut as L,pe as M,Nn as N,Kn as P,Gt as Q,Wt as R,rn as S,cl as U,I as V,ym as W,Ft as a,fn as b,wm as c,Ve as d,L1 as e,om as f,im as g,gt as h,Xe as i,Sr as j,dt as k,Xc as l,pr as m,ka as n,Ei as o,hn as p,Er as q,qa as r};
