const uv=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(r){if(r.ep)return;r.ep=!0;const o=e(r);fetch(r.href,o)}};uv();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ac="161",mr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},gr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},hv=0,Zu=1,dv=2,gp=1,pv=2,oi=3,Xn=0,hn=1,mn=2,Dn=0,Zr=1,Qu=2,Ju=3,th=4,fv=5,Ki=100,mv=101,gv=102,eh=103,nh=104,vv=200,_v=201,xv=202,bv=203,Ql=204,Jl=205,yv=206,wv=207,Ev=208,Mv=209,Sv=210,Tv=211,Av=212,Cv=213,Pv=214,Rv=0,Lv=1,Dv=2,ca=3,Iv=4,Uv=5,Nv=6,Fv=7,vp=0,Ov=1,Bv=2,Ii=0,kv=1,Vv=2,zv=3,Hv=4,Gv=5,Wv=6,_p=300,ts=301,es=302,tc=303,ec=304,ba=306,nc=1e3,yn=1001,ic=1002,pe=1003,ih=1004,Ms=1005,Ie=1006,rl=1007,tr=1008,Cc=1008,Wn=1009,rc=1010,xp=1011,ya=1012,Ws=1013,wn=1014,ge=1015,qn=1016,bp=1017,yp=1018,er=1020,Xv=1021,qe=1023,qv=1024,jv=1025,nr=1026,ns=1027,wp=1028,Pc=1029,Ep=1030,wa=1031,$s=1033,sl=33776,ol=33777,al=33778,ll=33779,rh=35840,sh=35841,oh=35842,ah=35843,Mp=36196,lh=37492,ch=37496,uh=37808,hh=37809,dh=37810,ph=37811,fh=37812,mh=37813,gh=37814,vh=37815,_h=37816,xh=37817,bh=37818,yh=37819,wh=37820,Eh=37821,cl=36492,Mh=36494,Sh=36495,Yv=36283,Th=36284,Ah=36285,Ch=36286,Sp=3e3,ir=3001,$v=3200,Kv=3201,Tp=0,Zv=1,Pn="",We="srgb",hi="srgb-linear",Rc="display-p3",Ea="display-p3-linear",ua="linear",be="srgb",ha="rec709",da="p3",vr=7680,Ph=519,Qv=512,Jv=513,t_=514,Ap=515,e_=516,n_=517,i_=518,r_=519,Rh=35044,pa="300 es",sc=1035,ci=2e3,fa=2001;class sr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const o=r.indexOf(e);o!==-1&&r.splice(o,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let o=0,a=r.length;o<a;o++)r[o].call(this,t);t.target=null}}}const Ze=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Lh=1234567;const Xs=Math.PI/180,Ks=180/Math.PI;function rs(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ze[i&255]+Ze[i>>8&255]+Ze[i>>16&255]+Ze[i>>24&255]+"-"+Ze[t&255]+Ze[t>>8&255]+"-"+Ze[t>>16&15|64]+Ze[t>>24&255]+"-"+Ze[e&63|128]+Ze[e>>8&255]+"-"+Ze[e>>16&255]+Ze[e>>24&255]+Ze[n&255]+Ze[n>>8&255]+Ze[n>>16&255]+Ze[n>>24&255]).toLowerCase()}function Xe(i,t,e){return Math.max(t,Math.min(e,i))}function Lc(i,t){return(i%t+t)%t}function s_(i,t,e,n,r){return n+(i-t)*(r-n)/(e-t)}function o_(i,t,e){return i!==t?(e-i)/(t-i):0}function qs(i,t,e){return(1-e)*i+e*t}function a_(i,t,e,n){return qs(i,t,1-Math.exp(-e*n))}function l_(i,t=1){return t-Math.abs(Lc(i,t*2)-t)}function c_(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function u_(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function h_(i,t){return i+Math.floor(Math.random()*(t-i+1))}function d_(i,t){return i+Math.random()*(t-i)}function p_(i){return i*(.5-Math.random())}function f_(i){i!==void 0&&(Lh=i);let t=Lh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function m_(i){return i*Xs}function g_(i){return i*Ks}function oc(i){return(i&i-1)===0&&i!==0}function v_(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function ma(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function __(i,t,e,n,r){const o=Math.cos,a=Math.sin,c=o(e/2),h=a(e/2),d=o((t+n)/2),p=a((t+n)/2),f=o((t-n)/2),m=a((t-n)/2),x=o((n-t)/2),b=a((n-t)/2);switch(r){case"XYX":i.set(c*p,h*f,h*m,c*d);break;case"YZY":i.set(h*m,c*p,h*f,c*d);break;case"ZXZ":i.set(h*f,h*m,c*p,c*d);break;case"XZX":i.set(c*p,h*b,h*x,c*d);break;case"YXY":i.set(h*x,c*p,h*b,c*d);break;case"ZYZ":i.set(h*b,h*x,c*p,c*d);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function qr(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function on(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const x_={DEG2RAD:Xs,RAD2DEG:Ks,generateUUID:rs,clamp:Xe,euclideanModulo:Lc,mapLinear:s_,inverseLerp:o_,lerp:qs,damp:a_,pingpong:l_,smoothstep:c_,smootherstep:u_,randInt:h_,randFloat:d_,randFloatSpread:p_,seededRandom:f_,degToRad:m_,radToDeg:g_,isPowerOfTwo:oc,ceilPowerOfTwo:v_,floorPowerOfTwo:ma,setQuaternionFromProperEuler:__,normalize:on,denormalize:qr};class It{constructor(t=0,e=0){It.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Xe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),o=this.x-t.x,a=this.y-t.y;return this.x=o*n-a*r+t.x,this.y=o*r+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ee{constructor(t,e,n,r,o,a,c,h,d){ee.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,o,a,c,h,d)}set(t,e,n,r,o,a,c,h,d){const p=this.elements;return p[0]=t,p[1]=r,p[2]=c,p[3]=e,p[4]=o,p[5]=h,p[6]=n,p[7]=a,p[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,o=this.elements,a=n[0],c=n[3],h=n[6],d=n[1],p=n[4],f=n[7],m=n[2],x=n[5],b=n[8],w=r[0],_=r[3],v=r[6],E=r[1],y=r[4],T=r[7],C=r[2],P=r[5],A=r[8];return o[0]=a*w+c*E+h*C,o[3]=a*_+c*y+h*P,o[6]=a*v+c*T+h*A,o[1]=d*w+p*E+f*C,o[4]=d*_+p*y+f*P,o[7]=d*v+p*T+f*A,o[2]=m*w+x*E+b*C,o[5]=m*_+x*y+b*P,o[8]=m*v+x*T+b*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],o=t[3],a=t[4],c=t[5],h=t[6],d=t[7],p=t[8];return e*a*p-e*c*d-n*o*p+n*c*h+r*o*d-r*a*h}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],o=t[3],a=t[4],c=t[5],h=t[6],d=t[7],p=t[8],f=p*a-c*d,m=c*h-p*o,x=d*o-a*h,b=e*f+n*m+r*x;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/b;return t[0]=f*w,t[1]=(r*d-p*n)*w,t[2]=(c*n-r*a)*w,t[3]=m*w,t[4]=(p*e-r*h)*w,t[5]=(r*o-c*e)*w,t[6]=x*w,t[7]=(n*h-d*e)*w,t[8]=(a*e-n*o)*w,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,o,a,c){const h=Math.cos(o),d=Math.sin(o);return this.set(n*h,n*d,-n*(h*a+d*c)+a+t,-r*d,r*h,-r*(-d*a+h*c)+c+e,0,0,1),this}scale(t,e){return this.premultiply(ul.makeScale(t,e)),this}rotate(t){return this.premultiply(ul.makeRotation(-t)),this}translate(t,e){return this.premultiply(ul.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ul=new ee;function Cp(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ga(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function b_(){const i=ga("canvas");return i.style.display="block",i}const Dh={};function Qr(i){i in Dh||(Dh[i]=!0,console.warn(i))}const Ih=new ee().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Uh=new ee().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),fo={[hi]:{transfer:ua,primaries:ha,toReference:i=>i,fromReference:i=>i},[We]:{transfer:be,primaries:ha,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Ea]:{transfer:ua,primaries:da,toReference:i=>i.applyMatrix3(Uh),fromReference:i=>i.applyMatrix3(Ih)},[Rc]:{transfer:be,primaries:da,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Uh),fromReference:i=>i.applyMatrix3(Ih).convertLinearToSRGB()}},y_=new Set([hi,Ea]),de={enabled:!0,_workingColorSpace:hi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!y_.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=fo[t].toReference,r=fo[e].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return fo[i].primaries},getTransfer:function(i){return i===Pn?ua:fo[i].transfer}};function Jr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function hl(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let _r;class Pp{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{_r===void 0&&(_r=ga("canvas")),_r.width=t.width,_r.height=t.height;const n=_r.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=_r}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){const e=ga("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),o=r.data;for(let a=0;a<o.length;a++)o[a]=Jr(o[a]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Jr(e[n]/255)*255):e[n]=Jr(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let w_=0;class Rp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:w_++}),this.uuid=rs(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let a=0,c=r.length;a<c;a++)r[a].isDataTexture?o.push(dl(r[a].image)):o.push(dl(r[a]))}else o=dl(r);n.url=o}return e||(t.images[this.uuid]=n),n}}function dl(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?Pp.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let E_=0;class dn extends sr{constructor(t=dn.DEFAULT_IMAGE,e=dn.DEFAULT_MAPPING,n=yn,r=yn,o=Ie,a=tr,c=qe,h=Wn,d=dn.DEFAULT_ANISOTROPY,p=Pn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:E_++}),this.uuid=rs(),this.name="",this.source=new Rp(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=o,this.minFilter=a,this.anisotropy=d,this.format=c,this.internalFormat=null,this.type=h,this.offset=new It(0,0),this.repeat=new It(1,1),this.center=new It(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ee,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof p=="string"?this.colorSpace=p:(Qr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=p===ir?We:Pn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==_p)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case nc:t.x=t.x-Math.floor(t.x);break;case yn:t.x=t.x<0?0:1;break;case ic:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case nc:t.y=t.y-Math.floor(t.y);break;case yn:t.y=t.y<0?0:1;break;case ic:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Qr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===We?ir:Sp}set encoding(t){Qr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===ir?We:Pn}}dn.DEFAULT_IMAGE=null;dn.DEFAULT_MAPPING=_p;dn.DEFAULT_ANISOTROPY=1;class ve{constructor(t=0,e=0,n=0,r=1){ve.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,o=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*r+a[12]*o,this.y=a[1]*e+a[5]*n+a[9]*r+a[13]*o,this.z=a[2]*e+a[6]*n+a[10]*r+a[14]*o,this.w=a[3]*e+a[7]*n+a[11]*r+a[15]*o,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,o;const h=t.elements,d=h[0],p=h[4],f=h[8],m=h[1],x=h[5],b=h[9],w=h[2],_=h[6],v=h[10];if(Math.abs(p-m)<.01&&Math.abs(f-w)<.01&&Math.abs(b-_)<.01){if(Math.abs(p+m)<.1&&Math.abs(f+w)<.1&&Math.abs(b+_)<.1&&Math.abs(d+x+v-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(d+1)/2,T=(x+1)/2,C=(v+1)/2,P=(p+m)/4,A=(f+w)/4,I=(b+_)/4;return y>T&&y>C?y<.01?(n=0,r=.707106781,o=.707106781):(n=Math.sqrt(y),r=P/n,o=A/n):T>C?T<.01?(n=.707106781,r=0,o=.707106781):(r=Math.sqrt(T),n=P/r,o=I/r):C<.01?(n=.707106781,r=.707106781,o=0):(o=Math.sqrt(C),n=A/o,r=I/o),this.set(n,r,o,e),this}let E=Math.sqrt((_-b)*(_-b)+(f-w)*(f-w)+(m-p)*(m-p));return Math.abs(E)<.001&&(E=1),this.x=(_-b)/E,this.y=(f-w)/E,this.z=(m-p)/E,this.w=Math.acos((d+x+v-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class M_ extends sr{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ve(0,0,t,e),this.scissorTest=!1,this.viewport=new ve(0,0,t,e);const r={width:t,height:e,depth:1};n.encoding!==void 0&&(Qr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===ir?We:Pn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ie,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new dn(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Rp(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class In extends M_{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Lp extends dn{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=pe,this.minFilter=pe,this.wrapR=yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class S_ extends dn{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=pe,this.minFilter=pe,this.wrapR=yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class T_ extends In{constructor(t=1,e=1,n=1,r={}){super(t,e,r),this.isWebGLMultipleRenderTargets=!0;const o=this.texture;this.texture=[];for(let a=0;a<n;a++)this.texture[a]=o.clone(),this.texture[a].isRenderTargetTexture=!0}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,o=this.texture.length;r<o;r++)this.texture[r].image.width=t,this.texture[r].image.height=e,this.texture[r].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}copy(t){this.dispose(),this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.texture.length=0;for(let e=0,n=t.texture.length;e<n;e++)this.texture[e]=t.texture[e].clone(),this.texture[e].isRenderTargetTexture=!0;return this}}class $e{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,o,a,c){let h=n[r+0],d=n[r+1],p=n[r+2],f=n[r+3];const m=o[a+0],x=o[a+1],b=o[a+2],w=o[a+3];if(c===0){t[e+0]=h,t[e+1]=d,t[e+2]=p,t[e+3]=f;return}if(c===1){t[e+0]=m,t[e+1]=x,t[e+2]=b,t[e+3]=w;return}if(f!==w||h!==m||d!==x||p!==b){let _=1-c;const v=h*m+d*x+p*b+f*w,E=v>=0?1:-1,y=1-v*v;if(y>Number.EPSILON){const C=Math.sqrt(y),P=Math.atan2(C,v*E);_=Math.sin(_*P)/C,c=Math.sin(c*P)/C}const T=c*E;if(h=h*_+m*T,d=d*_+x*T,p=p*_+b*T,f=f*_+w*T,_===1-c){const C=1/Math.sqrt(h*h+d*d+p*p+f*f);h*=C,d*=C,p*=C,f*=C}}t[e]=h,t[e+1]=d,t[e+2]=p,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,r,o,a){const c=n[r],h=n[r+1],d=n[r+2],p=n[r+3],f=o[a],m=o[a+1],x=o[a+2],b=o[a+3];return t[e]=c*b+p*f+h*x-d*m,t[e+1]=h*b+p*m+d*f-c*x,t[e+2]=d*b+p*x+c*m-h*f,t[e+3]=p*b-c*f-h*m-d*x,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,o=t._z,a=t._order,c=Math.cos,h=Math.sin,d=c(n/2),p=c(r/2),f=c(o/2),m=h(n/2),x=h(r/2),b=h(o/2);switch(a){case"XYZ":this._x=m*p*f+d*x*b,this._y=d*x*f-m*p*b,this._z=d*p*b+m*x*f,this._w=d*p*f-m*x*b;break;case"YXZ":this._x=m*p*f+d*x*b,this._y=d*x*f-m*p*b,this._z=d*p*b-m*x*f,this._w=d*p*f+m*x*b;break;case"ZXY":this._x=m*p*f-d*x*b,this._y=d*x*f+m*p*b,this._z=d*p*b+m*x*f,this._w=d*p*f-m*x*b;break;case"ZYX":this._x=m*p*f-d*x*b,this._y=d*x*f+m*p*b,this._z=d*p*b-m*x*f,this._w=d*p*f+m*x*b;break;case"YZX":this._x=m*p*f+d*x*b,this._y=d*x*f+m*p*b,this._z=d*p*b-m*x*f,this._w=d*p*f-m*x*b;break;case"XZY":this._x=m*p*f-d*x*b,this._y=d*x*f-m*p*b,this._z=d*p*b+m*x*f,this._w=d*p*f+m*x*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],o=e[8],a=e[1],c=e[5],h=e[9],d=e[2],p=e[6],f=e[10],m=n+c+f;if(m>0){const x=.5/Math.sqrt(m+1);this._w=.25/x,this._x=(p-h)*x,this._y=(o-d)*x,this._z=(a-r)*x}else if(n>c&&n>f){const x=2*Math.sqrt(1+n-c-f);this._w=(p-h)/x,this._x=.25*x,this._y=(r+a)/x,this._z=(o+d)/x}else if(c>f){const x=2*Math.sqrt(1+c-n-f);this._w=(o-d)/x,this._x=(r+a)/x,this._y=.25*x,this._z=(h+p)/x}else{const x=2*Math.sqrt(1+f-n-c);this._w=(a-r)/x,this._x=(o+d)/x,this._y=(h+p)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Xe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,o=t._z,a=t._w,c=e._x,h=e._y,d=e._z,p=e._w;return this._x=n*p+a*c+r*d-o*h,this._y=r*p+a*h+o*c-n*d,this._z=o*p+a*d+n*h-r*c,this._w=a*p-n*c-r*h-o*d,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,r=this._y,o=this._z,a=this._w;let c=a*t._w+n*t._x+r*t._y+o*t._z;if(c<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,c=-c):this.copy(t),c>=1)return this._w=a,this._x=n,this._y=r,this._z=o,this;const h=1-c*c;if(h<=Number.EPSILON){const x=1-e;return this._w=x*a+e*this._w,this._x=x*n+e*this._x,this._y=x*r+e*this._y,this._z=x*o+e*this._z,this.normalize(),this}const d=Math.sqrt(h),p=Math.atan2(d,c),f=Math.sin((1-e)*p)/d,m=Math.sin(e*p)/d;return this._w=a*f+this._w*m,this._x=n*f+this._x*m,this._y=r*f+this._y*m,this._z=o*f+this._z*m,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),r=2*Math.PI*Math.random(),o=2*Math.PI*Math.random();return this.set(e*Math.cos(r),n*Math.sin(o),n*Math.cos(o),e*Math.sin(r))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(t=0,e=0,n=0){U.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Nh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Nh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,o=t.elements;return this.x=o[0]*e+o[3]*n+o[6]*r,this.y=o[1]*e+o[4]*n+o[7]*r,this.z=o[2]*e+o[5]*n+o[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,o=t.elements,a=1/(o[3]*e+o[7]*n+o[11]*r+o[15]);return this.x=(o[0]*e+o[4]*n+o[8]*r+o[12])*a,this.y=(o[1]*e+o[5]*n+o[9]*r+o[13])*a,this.z=(o[2]*e+o[6]*n+o[10]*r+o[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,o=t.x,a=t.y,c=t.z,h=t.w,d=2*(a*r-c*n),p=2*(c*e-o*r),f=2*(o*n-a*e);return this.x=e+h*d+a*f-c*p,this.y=n+h*p+c*d-o*f,this.z=r+h*f+o*p-a*d,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*r,this.y=o[1]*e+o[5]*n+o[9]*r,this.z=o[2]*e+o[6]*n+o[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,o=t.z,a=e.x,c=e.y,h=e.z;return this.x=r*h-o*c,this.y=o*a-n*h,this.z=n*c-r*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return pl.copy(this).projectOnVector(t),this.sub(pl)}reflect(t){return this.sub(pl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Xe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const pl=new U,Nh=new $e;class sn{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Un.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Un.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Un.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const o=n.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let a=0,c=o.count;a<c;a++)t.isMesh===!0?t.getVertexPosition(a,Un):Un.fromBufferAttribute(o,a),Un.applyMatrix4(t.matrixWorld),this.expandByPoint(Un);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),mo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),mo.copy(n.boundingBox)),mo.applyMatrix4(t.matrixWorld),this.union(mo)}const r=t.children;for(let o=0,a=r.length;o<a;o++)this.expandByObject(r[o],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Un),Un.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ss),go.subVectors(this.max,Ss),xr.subVectors(t.a,Ss),br.subVectors(t.b,Ss),yr.subVectors(t.c,Ss),yi.subVectors(br,xr),wi.subVectors(yr,br),Hi.subVectors(xr,yr);let e=[0,-yi.z,yi.y,0,-wi.z,wi.y,0,-Hi.z,Hi.y,yi.z,0,-yi.x,wi.z,0,-wi.x,Hi.z,0,-Hi.x,-yi.y,yi.x,0,-wi.y,wi.x,0,-Hi.y,Hi.x,0];return!fl(e,xr,br,yr,go)||(e=[1,0,0,0,1,0,0,0,1],!fl(e,xr,br,yr,go))?!1:(vo.crossVectors(yi,wi),e=[vo.x,vo.y,vo.z],fl(e,xr,br,yr,go))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Un).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Un).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ti),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ti=[new U,new U,new U,new U,new U,new U,new U,new U],Un=new U,mo=new sn,xr=new U,br=new U,yr=new U,yi=new U,wi=new U,Hi=new U,Ss=new U,go=new U,vo=new U,Gi=new U;function fl(i,t,e,n,r){for(let o=0,a=i.length-3;o<=a;o+=3){Gi.fromArray(i,o);const c=r.x*Math.abs(Gi.x)+r.y*Math.abs(Gi.y)+r.z*Math.abs(Gi.z),h=t.dot(Gi),d=e.dot(Gi),p=n.dot(Gi);if(Math.max(-Math.max(h,d,p),Math.min(h,d,p))>c)return!1}return!0}const A_=new sn,Ts=new U,ml=new U;class Qs{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):A_.setFromPoints(t).getCenter(n);let r=0;for(let o=0,a=t.length;o<a;o++)r=Math.max(r,n.distanceToSquared(t[o]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ts.subVectors(t,this.center);const e=Ts.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(Ts,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ml.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ts.copy(t.center).add(ml)),this.expandByPoint(Ts.copy(t.center).sub(ml))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ei=new U,gl=new U,_o=new U,Ei=new U,vl=new U,xo=new U,_l=new U;class Ma{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ei)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ei.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ei.copy(this.origin).addScaledVector(this.direction,e),ei.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){gl.copy(t).add(e).multiplyScalar(.5),_o.copy(e).sub(t).normalize(),Ei.copy(this.origin).sub(gl);const o=t.distanceTo(e)*.5,a=-this.direction.dot(_o),c=Ei.dot(this.direction),h=-Ei.dot(_o),d=Ei.lengthSq(),p=Math.abs(1-a*a);let f,m,x,b;if(p>0)if(f=a*h-c,m=a*c-h,b=o*p,f>=0)if(m>=-b)if(m<=b){const w=1/p;f*=w,m*=w,x=f*(f+a*m+2*c)+m*(a*f+m+2*h)+d}else m=o,f=Math.max(0,-(a*m+c)),x=-f*f+m*(m+2*h)+d;else m=-o,f=Math.max(0,-(a*m+c)),x=-f*f+m*(m+2*h)+d;else m<=-b?(f=Math.max(0,-(-a*o+c)),m=f>0?-o:Math.min(Math.max(-o,-h),o),x=-f*f+m*(m+2*h)+d):m<=b?(f=0,m=Math.min(Math.max(-o,-h),o),x=m*(m+2*h)+d):(f=Math.max(0,-(a*o+c)),m=f>0?o:Math.min(Math.max(-o,-h),o),x=-f*f+m*(m+2*h)+d);else m=a>0?-o:o,f=Math.max(0,-(a*m+c)),x=-f*f+m*(m+2*h)+d;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(gl).addScaledVector(_o,m),x}intersectSphere(t,e){ei.subVectors(t.center,this.origin);const n=ei.dot(this.direction),r=ei.dot(ei)-n*n,o=t.radius*t.radius;if(r>o)return null;const a=Math.sqrt(o-r),c=n-a,h=n+a;return h<0?null:c<0?this.at(h,e):this.at(c,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,o,a,c,h;const d=1/this.direction.x,p=1/this.direction.y,f=1/this.direction.z,m=this.origin;return d>=0?(n=(t.min.x-m.x)*d,r=(t.max.x-m.x)*d):(n=(t.max.x-m.x)*d,r=(t.min.x-m.x)*d),p>=0?(o=(t.min.y-m.y)*p,a=(t.max.y-m.y)*p):(o=(t.max.y-m.y)*p,a=(t.min.y-m.y)*p),n>a||o>r||((o>n||isNaN(n))&&(n=o),(a<r||isNaN(r))&&(r=a),f>=0?(c=(t.min.z-m.z)*f,h=(t.max.z-m.z)*f):(c=(t.max.z-m.z)*f,h=(t.min.z-m.z)*f),n>h||c>r)||((c>n||n!==n)&&(n=c),(h<r||r!==r)&&(r=h),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,ei)!==null}intersectTriangle(t,e,n,r,o){vl.subVectors(e,t),xo.subVectors(n,t),_l.crossVectors(vl,xo);let a=this.direction.dot(_l),c;if(a>0){if(r)return null;c=1}else if(a<0)c=-1,a=-a;else return null;Ei.subVectors(this.origin,t);const h=c*this.direction.dot(xo.crossVectors(Ei,xo));if(h<0)return null;const d=c*this.direction.dot(vl.cross(Ei));if(d<0||h+d>a)return null;const p=-c*Ei.dot(_l);return p<0?null:this.at(p/a,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ue{constructor(t,e,n,r,o,a,c,h,d,p,f,m,x,b,w,_){ue.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,o,a,c,h,d,p,f,m,x,b,w,_)}set(t,e,n,r,o,a,c,h,d,p,f,m,x,b,w,_){const v=this.elements;return v[0]=t,v[4]=e,v[8]=n,v[12]=r,v[1]=o,v[5]=a,v[9]=c,v[13]=h,v[2]=d,v[6]=p,v[10]=f,v[14]=m,v[3]=x,v[7]=b,v[11]=w,v[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ue().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,r=1/wr.setFromMatrixColumn(t,0).length(),o=1/wr.setFromMatrixColumn(t,1).length(),a=1/wr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*o,e[5]=n[5]*o,e[6]=n[6]*o,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,o=t.z,a=Math.cos(n),c=Math.sin(n),h=Math.cos(r),d=Math.sin(r),p=Math.cos(o),f=Math.sin(o);if(t.order==="XYZ"){const m=a*p,x=a*f,b=c*p,w=c*f;e[0]=h*p,e[4]=-h*f,e[8]=d,e[1]=x+b*d,e[5]=m-w*d,e[9]=-c*h,e[2]=w-m*d,e[6]=b+x*d,e[10]=a*h}else if(t.order==="YXZ"){const m=h*p,x=h*f,b=d*p,w=d*f;e[0]=m+w*c,e[4]=b*c-x,e[8]=a*d,e[1]=a*f,e[5]=a*p,e[9]=-c,e[2]=x*c-b,e[6]=w+m*c,e[10]=a*h}else if(t.order==="ZXY"){const m=h*p,x=h*f,b=d*p,w=d*f;e[0]=m-w*c,e[4]=-a*f,e[8]=b+x*c,e[1]=x+b*c,e[5]=a*p,e[9]=w-m*c,e[2]=-a*d,e[6]=c,e[10]=a*h}else if(t.order==="ZYX"){const m=a*p,x=a*f,b=c*p,w=c*f;e[0]=h*p,e[4]=b*d-x,e[8]=m*d+w,e[1]=h*f,e[5]=w*d+m,e[9]=x*d-b,e[2]=-d,e[6]=c*h,e[10]=a*h}else if(t.order==="YZX"){const m=a*h,x=a*d,b=c*h,w=c*d;e[0]=h*p,e[4]=w-m*f,e[8]=b*f+x,e[1]=f,e[5]=a*p,e[9]=-c*p,e[2]=-d*p,e[6]=x*f+b,e[10]=m-w*f}else if(t.order==="XZY"){const m=a*h,x=a*d,b=c*h,w=c*d;e[0]=h*p,e[4]=-f,e[8]=d*p,e[1]=m*f+w,e[5]=a*p,e[9]=x*f-b,e[2]=b*f-x,e[6]=c*p,e[10]=w*f+m}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(C_,t,P_)}lookAt(t,e,n){const r=this.elements;return vn.subVectors(t,e),vn.lengthSq()===0&&(vn.z=1),vn.normalize(),Mi.crossVectors(n,vn),Mi.lengthSq()===0&&(Math.abs(n.z)===1?vn.x+=1e-4:vn.z+=1e-4,vn.normalize(),Mi.crossVectors(n,vn)),Mi.normalize(),bo.crossVectors(vn,Mi),r[0]=Mi.x,r[4]=bo.x,r[8]=vn.x,r[1]=Mi.y,r[5]=bo.y,r[9]=vn.y,r[2]=Mi.z,r[6]=bo.z,r[10]=vn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,o=this.elements,a=n[0],c=n[4],h=n[8],d=n[12],p=n[1],f=n[5],m=n[9],x=n[13],b=n[2],w=n[6],_=n[10],v=n[14],E=n[3],y=n[7],T=n[11],C=n[15],P=r[0],A=r[4],I=r[8],z=r[12],M=r[1],L=r[5],V=r[9],X=r[13],F=r[2],G=r[6],H=r[10],W=r[14],J=r[3],et=r[7],it=r[11],nt=r[15];return o[0]=a*P+c*M+h*F+d*J,o[4]=a*A+c*L+h*G+d*et,o[8]=a*I+c*V+h*H+d*it,o[12]=a*z+c*X+h*W+d*nt,o[1]=p*P+f*M+m*F+x*J,o[5]=p*A+f*L+m*G+x*et,o[9]=p*I+f*V+m*H+x*it,o[13]=p*z+f*X+m*W+x*nt,o[2]=b*P+w*M+_*F+v*J,o[6]=b*A+w*L+_*G+v*et,o[10]=b*I+w*V+_*H+v*it,o[14]=b*z+w*X+_*W+v*nt,o[3]=E*P+y*M+T*F+C*J,o[7]=E*A+y*L+T*G+C*et,o[11]=E*I+y*V+T*H+C*it,o[15]=E*z+y*X+T*W+C*nt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],o=t[12],a=t[1],c=t[5],h=t[9],d=t[13],p=t[2],f=t[6],m=t[10],x=t[14],b=t[3],w=t[7],_=t[11],v=t[15];return b*(+o*h*f-r*d*f-o*c*m+n*d*m+r*c*x-n*h*x)+w*(+e*h*x-e*d*m+o*a*m-r*a*x+r*d*p-o*h*p)+_*(+e*d*f-e*c*x-o*a*f+n*a*x+o*c*p-n*d*p)+v*(-r*c*p-e*h*f+e*c*m+r*a*f-n*a*m+n*h*p)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],o=t[3],a=t[4],c=t[5],h=t[6],d=t[7],p=t[8],f=t[9],m=t[10],x=t[11],b=t[12],w=t[13],_=t[14],v=t[15],E=f*_*d-w*m*d+w*h*x-c*_*x-f*h*v+c*m*v,y=b*m*d-p*_*d-b*h*x+a*_*x+p*h*v-a*m*v,T=p*w*d-b*f*d+b*c*x-a*w*x-p*c*v+a*f*v,C=b*f*h-p*w*h-b*c*m+a*w*m+p*c*_-a*f*_,P=e*E+n*y+r*T+o*C;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/P;return t[0]=E*A,t[1]=(w*m*o-f*_*o-w*r*x+n*_*x+f*r*v-n*m*v)*A,t[2]=(c*_*o-w*h*o+w*r*d-n*_*d-c*r*v+n*h*v)*A,t[3]=(f*h*o-c*m*o-f*r*d+n*m*d+c*r*x-n*h*x)*A,t[4]=y*A,t[5]=(p*_*o-b*m*o+b*r*x-e*_*x-p*r*v+e*m*v)*A,t[6]=(b*h*o-a*_*o-b*r*d+e*_*d+a*r*v-e*h*v)*A,t[7]=(a*m*o-p*h*o+p*r*d-e*m*d-a*r*x+e*h*x)*A,t[8]=T*A,t[9]=(b*f*o-p*w*o-b*n*x+e*w*x+p*n*v-e*f*v)*A,t[10]=(a*w*o-b*c*o+b*n*d-e*w*d-a*n*v+e*c*v)*A,t[11]=(p*c*o-a*f*o-p*n*d+e*f*d+a*n*x-e*c*x)*A,t[12]=C*A,t[13]=(p*w*r-b*f*r+b*n*m-e*w*m-p*n*_+e*f*_)*A,t[14]=(b*c*r-a*w*r-b*n*h+e*w*h+a*n*_-e*c*_)*A,t[15]=(a*f*r-p*c*r+p*n*h-e*f*h-a*n*m+e*c*m)*A,this}scale(t){const e=this.elements,n=t.x,r=t.y,o=t.z;return e[0]*=n,e[4]*=r,e[8]*=o,e[1]*=n,e[5]*=r,e[9]*=o,e[2]*=n,e[6]*=r,e[10]*=o,e[3]*=n,e[7]*=r,e[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),o=1-n,a=t.x,c=t.y,h=t.z,d=o*a,p=o*c;return this.set(d*a+n,d*c-r*h,d*h+r*c,0,d*c+r*h,p*c+n,p*h-r*a,0,d*h-r*c,p*h+r*a,o*h*h+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,o,a){return this.set(1,n,o,0,t,1,a,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,o=e._x,a=e._y,c=e._z,h=e._w,d=o+o,p=a+a,f=c+c,m=o*d,x=o*p,b=o*f,w=a*p,_=a*f,v=c*f,E=h*d,y=h*p,T=h*f,C=n.x,P=n.y,A=n.z;return r[0]=(1-(w+v))*C,r[1]=(x+T)*C,r[2]=(b-y)*C,r[3]=0,r[4]=(x-T)*P,r[5]=(1-(m+v))*P,r[6]=(_+E)*P,r[7]=0,r[8]=(b+y)*A,r[9]=(_-E)*A,r[10]=(1-(m+w))*A,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;let o=wr.set(r[0],r[1],r[2]).length();const a=wr.set(r[4],r[5],r[6]).length(),c=wr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),t.x=r[12],t.y=r[13],t.z=r[14],Nn.copy(this);const d=1/o,p=1/a,f=1/c;return Nn.elements[0]*=d,Nn.elements[1]*=d,Nn.elements[2]*=d,Nn.elements[4]*=p,Nn.elements[5]*=p,Nn.elements[6]*=p,Nn.elements[8]*=f,Nn.elements[9]*=f,Nn.elements[10]*=f,e.setFromRotationMatrix(Nn),n.x=o,n.y=a,n.z=c,this}makePerspective(t,e,n,r,o,a,c=ci){const h=this.elements,d=2*o/(e-t),p=2*o/(n-r),f=(e+t)/(e-t),m=(n+r)/(n-r);let x,b;if(c===ci)x=-(a+o)/(a-o),b=-2*a*o/(a-o);else if(c===fa)x=-a/(a-o),b=-a*o/(a-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return h[0]=d,h[4]=0,h[8]=f,h[12]=0,h[1]=0,h[5]=p,h[9]=m,h[13]=0,h[2]=0,h[6]=0,h[10]=x,h[14]=b,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,e,n,r,o,a,c=ci){const h=this.elements,d=1/(e-t),p=1/(n-r),f=1/(a-o),m=(e+t)*d,x=(n+r)*p;let b,w;if(c===ci)b=(a+o)*f,w=-2*f;else if(c===fa)b=o*f,w=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return h[0]=2*d,h[4]=0,h[8]=0,h[12]=-m,h[1]=0,h[5]=2*p,h[9]=0,h[13]=-x,h[2]=0,h[6]=0,h[10]=w,h[14]=-b,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const wr=new U,Nn=new ue,C_=new U(0,0,0),P_=new U(1,1,1),Mi=new U,bo=new U,vn=new U,Fh=new ue,Oh=new $e;class Js{constructor(t=0,e=0,n=0,r=Js.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,o=r[0],a=r[4],c=r[8],h=r[1],d=r[5],p=r[9],f=r[2],m=r[6],x=r[10];switch(e){case"XYZ":this._y=Math.asin(Xe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-p,x),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(m,d),this._z=0);break;case"YXZ":this._x=Math.asin(-Xe(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(c,x),this._z=Math.atan2(h,d)):(this._y=Math.atan2(-f,o),this._z=0);break;case"ZXY":this._x=Math.asin(Xe(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-f,x),this._z=Math.atan2(-a,d)):(this._y=0,this._z=Math.atan2(h,o));break;case"ZYX":this._y=Math.asin(-Xe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(m,x),this._z=Math.atan2(h,o)):(this._x=0,this._z=Math.atan2(-a,d));break;case"YZX":this._z=Math.asin(Xe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-p,d),this._y=Math.atan2(-f,o)):(this._x=0,this._y=Math.atan2(c,x));break;case"XZY":this._z=Math.asin(-Xe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(m,d),this._y=Math.atan2(c,o)):(this._x=Math.atan2(-p,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Fh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Fh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Oh.setFromEuler(this),this.setFromQuaternion(Oh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Js.DEFAULT_ORDER="XYZ";class Dc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let R_=0;const Bh=new U,Er=new $e,ni=new ue,yo=new U,As=new U,L_=new U,D_=new $e,kh=new U(1,0,0),Vh=new U(0,1,0),zh=new U(0,0,1),I_={type:"added"},U_={type:"removed"};class Ue extends sr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:R_++}),this.uuid=rs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ue.DEFAULT_UP.clone();const t=new U,e=new Js,n=new $e,r=new U(1,1,1);function o(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(o),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ue},normalMatrix:{value:new ee}}),this.matrix=new ue,this.matrixWorld=new ue,this.matrixAutoUpdate=Ue.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ue.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Dc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Er.setFromAxisAngle(t,e),this.quaternion.multiply(Er),this}rotateOnWorldAxis(t,e){return Er.setFromAxisAngle(t,e),this.quaternion.premultiply(Er),this}rotateX(t){return this.rotateOnAxis(kh,t)}rotateY(t){return this.rotateOnAxis(Vh,t)}rotateZ(t){return this.rotateOnAxis(zh,t)}translateOnAxis(t,e){return Bh.copy(t).applyQuaternion(this.quaternion),this.position.add(Bh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(kh,t)}translateY(t){return this.translateOnAxis(Vh,t)}translateZ(t){return this.translateOnAxis(zh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ni.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?yo.copy(t):yo.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),As.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ni.lookAt(As,yo,this.up):ni.lookAt(yo,As,this.up),this.quaternion.setFromRotationMatrix(ni),r&&(ni.extractRotation(r.matrixWorld),Er.setFromRotationMatrix(ni),this.quaternion.premultiply(Er.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(I_)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(U_)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ni.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ni.multiply(t.parent.matrixWorld)),t.applyMatrix4(ni),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(As,t,L_),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(As,D_,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++){const o=e[n];(o.matrixWorldAutoUpdate===!0||t===!0)&&o.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const r=this.children;for(let o=0,a=r.length;o<a;o++){const c=r[o];c.matrixWorldAutoUpdate===!0&&c.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(c=>({boxInitialized:c.boxInitialized,boxMin:c.box.min.toArray(),boxMax:c.box.max.toArray(),sphereInitialized:c.sphereInitialized,sphereRadius:c.sphere.radius,sphereCenter:c.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function o(c,h){return c[h.uuid]===void 0&&(c[h.uuid]=h.toJSON(t)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(t.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const h=c.shapes;if(Array.isArray(h))for(let d=0,p=h.length;d<p;d++){const f=h[d];o(t.shapes,f)}else o(t.shapes,h)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let h=0,d=this.material.length;h<d;h++)c.push(o(t.materials,this.material[h]));r.material=c}else r.material=o(t.materials,this.material);if(this.children.length>0){r.children=[];for(let c=0;c<this.children.length;c++)r.children.push(this.children[c].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let c=0;c<this.animations.length;c++){const h=this.animations[c];r.animations.push(o(t.animations,h))}}if(e){const c=a(t.geometries),h=a(t.materials),d=a(t.textures),p=a(t.images),f=a(t.shapes),m=a(t.skeletons),x=a(t.animations),b=a(t.nodes);c.length>0&&(n.geometries=c),h.length>0&&(n.materials=h),d.length>0&&(n.textures=d),p.length>0&&(n.images=p),f.length>0&&(n.shapes=f),m.length>0&&(n.skeletons=m),x.length>0&&(n.animations=x),b.length>0&&(n.nodes=b)}return n.object=r,n;function a(c){const h=[];for(const d in c){const p=c[d];delete p.metadata,h.push(p)}return h}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}Ue.DEFAULT_UP=new U(0,1,0);Ue.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ue.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Fn=new U,ii=new U,xl=new U,ri=new U,Mr=new U,Sr=new U,Hh=new U,bl=new U,yl=new U,wl=new U;class ln{constructor(t=new U,e=new U,n=new U){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),Fn.subVectors(t,e),r.cross(Fn);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(t,e,n,r,o){Fn.subVectors(r,e),ii.subVectors(n,e),xl.subVectors(t,e);const a=Fn.dot(Fn),c=Fn.dot(ii),h=Fn.dot(xl),d=ii.dot(ii),p=ii.dot(xl),f=a*d-c*c;if(f===0)return o.set(0,0,0),null;const m=1/f,x=(d*h-c*p)*m,b=(a*p-c*h)*m;return o.set(1-x-b,b,x)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,ri)===null?!1:ri.x>=0&&ri.y>=0&&ri.x+ri.y<=1}static getInterpolation(t,e,n,r,o,a,c,h){return this.getBarycoord(t,e,n,r,ri)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(o,ri.x),h.addScaledVector(a,ri.y),h.addScaledVector(c,ri.z),h)}static isFrontFacing(t,e,n,r){return Fn.subVectors(n,e),ii.subVectors(t,e),Fn.cross(ii).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Fn.subVectors(this.c,this.b),ii.subVectors(this.a,this.b),Fn.cross(ii).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ln.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return ln.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,o){return ln.getInterpolation(t,this.a,this.b,this.c,e,n,r,o)}containsPoint(t){return ln.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ln.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,o=this.c;let a,c;Mr.subVectors(r,n),Sr.subVectors(o,n),bl.subVectors(t,n);const h=Mr.dot(bl),d=Sr.dot(bl);if(h<=0&&d<=0)return e.copy(n);yl.subVectors(t,r);const p=Mr.dot(yl),f=Sr.dot(yl);if(p>=0&&f<=p)return e.copy(r);const m=h*f-p*d;if(m<=0&&h>=0&&p<=0)return a=h/(h-p),e.copy(n).addScaledVector(Mr,a);wl.subVectors(t,o);const x=Mr.dot(wl),b=Sr.dot(wl);if(b>=0&&x<=b)return e.copy(o);const w=x*d-h*b;if(w<=0&&d>=0&&b<=0)return c=d/(d-b),e.copy(n).addScaledVector(Sr,c);const _=p*b-x*f;if(_<=0&&f-p>=0&&x-b>=0)return Hh.subVectors(o,r),c=(f-p)/(f-p+(x-b)),e.copy(r).addScaledVector(Hh,c);const v=1/(_+w+m);return a=w*v,c=m*v,e.copy(n).addScaledVector(Mr,a).addScaledVector(Sr,c)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Dp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Si={h:0,s:0,l:0},wo={h:0,s:0,l:0};function El(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class se{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=We){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,de.toWorkingColorSpace(this,e),this}setRGB(t,e,n,r=de.workingColorSpace){return this.r=t,this.g=e,this.b=n,de.toWorkingColorSpace(this,r),this}setHSL(t,e,n,r=de.workingColorSpace){if(t=Lc(t,1),e=Xe(e,0,1),n=Xe(n,0,1),e===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+e):n+e-n*e,a=2*n-o;this.r=El(a,o,t+1/3),this.g=El(a,o,t),this.b=El(a,o,t-1/3)}return de.toWorkingColorSpace(this,r),this}setStyle(t,e=We){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const a=r[1],c=r[2];switch(a){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=r[1],a=o.length;if(a===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(o,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=We){const n=Dp[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Jr(t.r),this.g=Jr(t.g),this.b=Jr(t.b),this}copyLinearToSRGB(t){return this.r=hl(t.r),this.g=hl(t.g),this.b=hl(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=We){return de.fromWorkingColorSpace(Qe.copy(this),t),Math.round(Xe(Qe.r*255,0,255))*65536+Math.round(Xe(Qe.g*255,0,255))*256+Math.round(Xe(Qe.b*255,0,255))}getHexString(t=We){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=de.workingColorSpace){de.fromWorkingColorSpace(Qe.copy(this),e);const n=Qe.r,r=Qe.g,o=Qe.b,a=Math.max(n,r,o),c=Math.min(n,r,o);let h,d;const p=(c+a)/2;if(c===a)h=0,d=0;else{const f=a-c;switch(d=p<=.5?f/(a+c):f/(2-a-c),a){case n:h=(r-o)/f+(r<o?6:0);break;case r:h=(o-n)/f+2;break;case o:h=(n-r)/f+4;break}h/=6}return t.h=h,t.s=d,t.l=p,t}getRGB(t,e=de.workingColorSpace){return de.fromWorkingColorSpace(Qe.copy(this),e),t.r=Qe.r,t.g=Qe.g,t.b=Qe.b,t}getStyle(t=We){de.fromWorkingColorSpace(Qe.copy(this),t);const e=Qe.r,n=Qe.g,r=Qe.b;return t!==We?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(Si),this.setHSL(Si.h+t,Si.s+e,Si.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Si),t.getHSL(wo);const n=qs(Si.h,wo.h,e),r=qs(Si.s,wo.s,e),o=qs(Si.l,wo.l,e);return this.setHSL(n,r,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,o=t.elements;return this.r=o[0]*e+o[3]*n+o[6]*r,this.g=o[1]*e+o[4]*n+o[7]*r,this.b=o[2]*e+o[5]*n+o[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Qe=new se;se.NAMES=Dp;let N_=0;class ss extends sr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:N_++}),this.uuid=rs(),this.name="",this.type="Material",this.blending=Zr,this.side=Xn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ql,this.blendDst=Jl,this.blendEquation=Ki,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new se(0,0,0),this.blendAlpha=0,this.depthFunc=ca,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ph,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vr,this.stencilZFail=vr,this.stencilZPass=vr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Zr&&(n.blending=this.blending),this.side!==Xn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ql&&(n.blendSrc=this.blendSrc),this.blendDst!==Jl&&(n.blendDst=this.blendDst),this.blendEquation!==Ki&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ca&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ph&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==vr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==vr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==vr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(o){const a=[];for(const c in o){const h=o[c];delete h.metadata,a.push(h)}return a}if(e){const o=r(t.textures),a=r(t.images);o.length>0&&(n.textures=o),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let o=0;o!==r;++o)n[o]=e[o].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class to extends ss{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=vp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const li=F_();function F_(){const i=new ArrayBuffer(4),t=new Float32Array(i),e=new Uint32Array(i),n=new Uint32Array(512),r=new Uint32Array(512);for(let h=0;h<256;++h){const d=h-127;d<-27?(n[h]=0,n[h|256]=32768,r[h]=24,r[h|256]=24):d<-14?(n[h]=1024>>-d-14,n[h|256]=1024>>-d-14|32768,r[h]=-d-1,r[h|256]=-d-1):d<=15?(n[h]=d+15<<10,n[h|256]=d+15<<10|32768,r[h]=13,r[h|256]=13):d<128?(n[h]=31744,n[h|256]=64512,r[h]=24,r[h|256]=24):(n[h]=31744,n[h|256]=64512,r[h]=13,r[h|256]=13)}const o=new Uint32Array(2048),a=new Uint32Array(64),c=new Uint32Array(64);for(let h=1;h<1024;++h){let d=h<<13,p=0;for(;(d&8388608)===0;)d<<=1,p-=8388608;d&=-8388609,p+=947912704,o[h]=d|p}for(let h=1024;h<2048;++h)o[h]=939524096+(h-1024<<13);for(let h=1;h<31;++h)a[h]=h<<23;a[31]=1199570944,a[32]=2147483648;for(let h=33;h<63;++h)a[h]=2147483648+(h-32<<23);a[63]=3347054592;for(let h=1;h<64;++h)h!==32&&(c[h]=1024);return{floatView:t,uint32View:e,baseTable:n,shiftTable:r,mantissaTable:o,exponentTable:a,offsetTable:c}}function O_(i){Math.abs(i)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),i=Xe(i,-65504,65504),li.floatView[0]=i;const t=li.uint32View[0],e=t>>23&511;return li.baseTable[e]+((t&8388607)>>li.shiftTable[e])}function B_(i){const t=i>>10;return li.uint32View[0]=li.mantissaTable[li.offsetTable[t]+(i&1023)]+li.exponentTable[t],li.floatView[0]}const k_={toHalfFloat:O_,fromHalfFloat:B_},Ne=new U,Eo=new It;class en{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Rh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ge,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return Qr("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Eo.fromBufferAttribute(this,e),Eo.applyMatrix3(t),this.setXY(e,Eo.x,Eo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix3(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix4(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyNormalMatrix(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.transformDirection(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=qr(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=on(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=qr(e,this.array)),e}setX(t,e){return this.normalized&&(e=on(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=qr(e,this.array)),e}setY(t,e){return this.normalized&&(e=on(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=qr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=on(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=qr(e,this.array)),e}setW(t,e){return this.normalized&&(e=on(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=on(e,this.array),n=on(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=on(e,this.array),n=on(n,this.array),r=on(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,o){return t*=this.itemSize,this.normalized&&(e=on(e,this.array),n=on(n,this.array),r=on(r,this.array),o=on(o,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Rh&&(t.usage=this.usage),t}}class Ip extends en{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Up extends en{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class we extends en{constructor(t,e,n){super(new Float32Array(t),e,n)}}let V_=0;const Cn=new ue,Ml=new Ue,Tr=new U,_n=new sn,Cs=new sn,Ge=new U;class nn extends sr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:V_++}),this.uuid=rs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Cp(t)?Up:Ip)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new ee().getNormalMatrix(t);n.applyNormalMatrix(o),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Cn.makeRotationFromQuaternion(t),this.applyMatrix4(Cn),this}rotateX(t){return Cn.makeRotationX(t),this.applyMatrix4(Cn),this}rotateY(t){return Cn.makeRotationY(t),this.applyMatrix4(Cn),this}rotateZ(t){return Cn.makeRotationZ(t),this.applyMatrix4(Cn),this}translate(t,e,n){return Cn.makeTranslation(t,e,n),this.applyMatrix4(Cn),this}scale(t,e,n){return Cn.makeScale(t,e,n),this.applyMatrix4(Cn),this}lookAt(t){return Ml.lookAt(t),Ml.updateMatrix(),this.applyMatrix4(Ml.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Tr).negate(),this.translate(Tr.x,Tr.y,Tr.z),this}setFromPoints(t){const e=[];for(let n=0,r=t.length;n<r;n++){const o=t[n];e.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new we(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new sn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const o=e[n];_n.setFromBufferAttribute(o),this.morphTargetsRelative?(Ge.addVectors(this.boundingBox.min,_n.min),this.boundingBox.expandByPoint(Ge),Ge.addVectors(this.boundingBox.max,_n.max),this.boundingBox.expandByPoint(Ge)):(this.boundingBox.expandByPoint(_n.min),this.boundingBox.expandByPoint(_n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new U,1/0);return}if(t){const n=this.boundingSphere.center;if(_n.setFromBufferAttribute(t),e)for(let o=0,a=e.length;o<a;o++){const c=e[o];Cs.setFromBufferAttribute(c),this.morphTargetsRelative?(Ge.addVectors(_n.min,Cs.min),_n.expandByPoint(Ge),Ge.addVectors(_n.max,Cs.max),_n.expandByPoint(Ge)):(_n.expandByPoint(Cs.min),_n.expandByPoint(Cs.max))}_n.getCenter(n);let r=0;for(let o=0,a=t.count;o<a;o++)Ge.fromBufferAttribute(t,o),r=Math.max(r,n.distanceToSquared(Ge));if(e)for(let o=0,a=e.length;o<a;o++){const c=e[o],h=this.morphTargetsRelative;for(let d=0,p=c.count;d<p;d++)Ge.fromBufferAttribute(c,d),h&&(Tr.fromBufferAttribute(t,d),Ge.add(Tr)),r=Math.max(r,n.distanceToSquared(Ge))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,r=e.position.array,o=e.normal.array,a=e.uv.array,c=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new en(new Float32Array(4*c),4));const h=this.getAttribute("tangent").array,d=[],p=[];for(let M=0;M<c;M++)d[M]=new U,p[M]=new U;const f=new U,m=new U,x=new U,b=new It,w=new It,_=new It,v=new U,E=new U;function y(M,L,V){f.fromArray(r,M*3),m.fromArray(r,L*3),x.fromArray(r,V*3),b.fromArray(a,M*2),w.fromArray(a,L*2),_.fromArray(a,V*2),m.sub(f),x.sub(f),w.sub(b),_.sub(b);const X=1/(w.x*_.y-_.x*w.y);!isFinite(X)||(v.copy(m).multiplyScalar(_.y).addScaledVector(x,-w.y).multiplyScalar(X),E.copy(x).multiplyScalar(w.x).addScaledVector(m,-_.x).multiplyScalar(X),d[M].add(v),d[L].add(v),d[V].add(v),p[M].add(E),p[L].add(E),p[V].add(E))}let T=this.groups;T.length===0&&(T=[{start:0,count:n.length}]);for(let M=0,L=T.length;M<L;++M){const V=T[M],X=V.start,F=V.count;for(let G=X,H=X+F;G<H;G+=3)y(n[G+0],n[G+1],n[G+2])}const C=new U,P=new U,A=new U,I=new U;function z(M){A.fromArray(o,M*3),I.copy(A);const L=d[M];C.copy(L),C.sub(A.multiplyScalar(A.dot(L))).normalize(),P.crossVectors(I,L);const X=P.dot(p[M])<0?-1:1;h[M*4]=C.x,h[M*4+1]=C.y,h[M*4+2]=C.z,h[M*4+3]=X}for(let M=0,L=T.length;M<L;++M){const V=T[M],X=V.start,F=V.count;for(let G=X,H=X+F;G<H;G+=3)z(n[G+0]),z(n[G+1]),z(n[G+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new en(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let m=0,x=n.count;m<x;m++)n.setXYZ(m,0,0,0);const r=new U,o=new U,a=new U,c=new U,h=new U,d=new U,p=new U,f=new U;if(t)for(let m=0,x=t.count;m<x;m+=3){const b=t.getX(m+0),w=t.getX(m+1),_=t.getX(m+2);r.fromBufferAttribute(e,b),o.fromBufferAttribute(e,w),a.fromBufferAttribute(e,_),p.subVectors(a,o),f.subVectors(r,o),p.cross(f),c.fromBufferAttribute(n,b),h.fromBufferAttribute(n,w),d.fromBufferAttribute(n,_),c.add(p),h.add(p),d.add(p),n.setXYZ(b,c.x,c.y,c.z),n.setXYZ(w,h.x,h.y,h.z),n.setXYZ(_,d.x,d.y,d.z)}else for(let m=0,x=e.count;m<x;m+=3)r.fromBufferAttribute(e,m+0),o.fromBufferAttribute(e,m+1),a.fromBufferAttribute(e,m+2),p.subVectors(a,o),f.subVectors(r,o),p.cross(f),n.setXYZ(m+0,p.x,p.y,p.z),n.setXYZ(m+1,p.x,p.y,p.z),n.setXYZ(m+2,p.x,p.y,p.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ge.fromBufferAttribute(t,e),Ge.normalize(),t.setXYZ(e,Ge.x,Ge.y,Ge.z)}toNonIndexed(){function t(c,h){const d=c.array,p=c.itemSize,f=c.normalized,m=new d.constructor(h.length*p);let x=0,b=0;for(let w=0,_=h.length;w<_;w++){c.isInterleavedBufferAttribute?x=h[w]*c.data.stride+c.offset:x=h[w]*p;for(let v=0;v<p;v++)m[b++]=d[x++]}return new en(m,p,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new nn,n=this.index.array,r=this.attributes;for(const c in r){const h=r[c],d=t(h,n);e.setAttribute(c,d)}const o=this.morphAttributes;for(const c in o){const h=[],d=o[c];for(let p=0,f=d.length;p<f;p++){const m=d[p],x=t(m,n);h.push(x)}e.morphAttributes[c]=h}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let c=0,h=a.length;c<h;c++){const d=a[c];e.addGroup(d.start,d.count,d.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const d in h)h[d]!==void 0&&(t[d]=h[d]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const h in n){const d=n[h];t.data.attributes[h]=d.toJSON(t.data)}const r={};let o=!1;for(const h in this.morphAttributes){const d=this.morphAttributes[h],p=[];for(let f=0,m=d.length;f<m;f++){const x=d[f];p.push(x.toJSON(t.data))}p.length>0&&(r[h]=p,o=!0)}o&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const c=this.boundingSphere;return c!==null&&(t.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const r=t.attributes;for(const d in r){const p=r[d];this.setAttribute(d,p.clone(e))}const o=t.morphAttributes;for(const d in o){const p=[],f=o[d];for(let m=0,x=f.length;m<x;m++)p.push(f[m].clone(e));this.morphAttributes[d]=p}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let d=0,p=a.length;d<p;d++){const f=a[d];this.addGroup(f.start,f.count,f.materialIndex)}const c=t.boundingBox;c!==null&&(this.boundingBox=c.clone());const h=t.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Gh=new ue,Wi=new Ma,Mo=new Qs,Wh=new U,Ar=new U,Cr=new U,Pr=new U,Sl=new U,So=new U,To=new It,Ao=new It,Co=new It,Xh=new U,qh=new U,jh=new U,Po=new U,Ro=new U;class ft extends Ue{constructor(t=new nn,e=new to){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,a=r.length;o<a;o++){const c=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=o}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,o=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const c=this.morphTargetInfluences;if(o&&c){So.set(0,0,0);for(let h=0,d=o.length;h<d;h++){const p=c[h],f=o[h];p!==0&&(Sl.fromBufferAttribute(f,t),a?So.addScaledVector(Sl,p):So.addScaledVector(Sl.sub(e),p))}e.add(So)}return e}raycast(t,e){const n=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Mo.copy(n.boundingSphere),Mo.applyMatrix4(o),Wi.copy(t.ray).recast(t.near),!(Mo.containsPoint(Wi.origin)===!1&&(Wi.intersectSphere(Mo,Wh)===null||Wi.origin.distanceToSquared(Wh)>(t.far-t.near)**2))&&(Gh.copy(o).invert(),Wi.copy(t.ray).applyMatrix4(Gh),!(n.boundingBox!==null&&Wi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Wi)))}_computeIntersections(t,e,n){let r;const o=this.geometry,a=this.material,c=o.index,h=o.attributes.position,d=o.attributes.uv,p=o.attributes.uv1,f=o.attributes.normal,m=o.groups,x=o.drawRange;if(c!==null)if(Array.isArray(a))for(let b=0,w=m.length;b<w;b++){const _=m[b],v=a[_.materialIndex],E=Math.max(_.start,x.start),y=Math.min(c.count,Math.min(_.start+_.count,x.start+x.count));for(let T=E,C=y;T<C;T+=3){const P=c.getX(T),A=c.getX(T+1),I=c.getX(T+2);r=Lo(this,v,t,n,d,p,f,P,A,I),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=_.materialIndex,e.push(r))}}else{const b=Math.max(0,x.start),w=Math.min(c.count,x.start+x.count);for(let _=b,v=w;_<v;_+=3){const E=c.getX(_),y=c.getX(_+1),T=c.getX(_+2);r=Lo(this,a,t,n,d,p,f,E,y,T),r&&(r.faceIndex=Math.floor(_/3),e.push(r))}}else if(h!==void 0)if(Array.isArray(a))for(let b=0,w=m.length;b<w;b++){const _=m[b],v=a[_.materialIndex],E=Math.max(_.start,x.start),y=Math.min(h.count,Math.min(_.start+_.count,x.start+x.count));for(let T=E,C=y;T<C;T+=3){const P=T,A=T+1,I=T+2;r=Lo(this,v,t,n,d,p,f,P,A,I),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=_.materialIndex,e.push(r))}}else{const b=Math.max(0,x.start),w=Math.min(h.count,x.start+x.count);for(let _=b,v=w;_<v;_+=3){const E=_,y=_+1,T=_+2;r=Lo(this,a,t,n,d,p,f,E,y,T),r&&(r.faceIndex=Math.floor(_/3),e.push(r))}}}}function z_(i,t,e,n,r,o,a,c){let h;if(t.side===hn?h=n.intersectTriangle(a,o,r,!0,c):h=n.intersectTriangle(r,o,a,t.side===Xn,c),h===null)return null;Ro.copy(c),Ro.applyMatrix4(i.matrixWorld);const d=e.ray.origin.distanceTo(Ro);return d<e.near||d>e.far?null:{distance:d,point:Ro.clone(),object:i}}function Lo(i,t,e,n,r,o,a,c,h,d){i.getVertexPosition(c,Ar),i.getVertexPosition(h,Cr),i.getVertexPosition(d,Pr);const p=z_(i,t,e,n,Ar,Cr,Pr,Po);if(p){r&&(To.fromBufferAttribute(r,c),Ao.fromBufferAttribute(r,h),Co.fromBufferAttribute(r,d),p.uv=ln.getInterpolation(Po,Ar,Cr,Pr,To,Ao,Co,new It)),o&&(To.fromBufferAttribute(o,c),Ao.fromBufferAttribute(o,h),Co.fromBufferAttribute(o,d),p.uv1=ln.getInterpolation(Po,Ar,Cr,Pr,To,Ao,Co,new It),p.uv2=p.uv1),a&&(Xh.fromBufferAttribute(a,c),qh.fromBufferAttribute(a,h),jh.fromBufferAttribute(a,d),p.normal=ln.getInterpolation(Po,Ar,Cr,Pr,Xh,qh,jh,new U),p.normal.dot(n.direction)>0&&p.normal.multiplyScalar(-1));const f={a:c,b:h,c:d,normal:new U,materialIndex:0};ln.getNormal(Ar,Cr,Pr,f.normal),p.face=f}return p}class he extends nn{constructor(t=1,e=1,n=1,r=1,o=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:o,depthSegments:a};const c=this;r=Math.floor(r),o=Math.floor(o),a=Math.floor(a);const h=[],d=[],p=[],f=[];let m=0,x=0;b("z","y","x",-1,-1,n,e,t,a,o,0),b("z","y","x",1,-1,n,e,-t,a,o,1),b("x","z","y",1,1,t,n,e,r,a,2),b("x","z","y",1,-1,t,n,-e,r,a,3),b("x","y","z",1,-1,t,e,n,r,o,4),b("x","y","z",-1,-1,t,e,-n,r,o,5),this.setIndex(h),this.setAttribute("position",new we(d,3)),this.setAttribute("normal",new we(p,3)),this.setAttribute("uv",new we(f,2));function b(w,_,v,E,y,T,C,P,A,I,z){const M=T/A,L=C/I,V=T/2,X=C/2,F=P/2,G=A+1,H=I+1;let W=0,J=0;const et=new U;for(let it=0;it<H;it++){const nt=it*L-X;for(let pt=0;pt<G;pt++){const mt=pt*M-V;et[w]=mt*E,et[_]=nt*y,et[v]=F,d.push(et.x,et.y,et.z),et[w]=0,et[_]=0,et[v]=P>0?1:-1,p.push(et.x,et.y,et.z),f.push(pt/A),f.push(1-it/I),W+=1}}for(let it=0;it<I;it++)for(let nt=0;nt<A;nt++){const pt=m+nt+G*it,mt=m+nt+G*(it+1),$=m+(nt+1)+G*(it+1),rt=m+(nt+1)+G*it;h.push(pt,mt,rt),h.push(mt,$,rt),J+=6}c.addGroup(x,J,z),x+=J,m+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new he(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function is(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function an(i){const t={};for(let e=0;e<i.length;e++){const n=is(i[e]);for(const r in n)t[r]=n[r]}return t}function H_(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Np(i){return i.getRenderTarget()===null?i.outputColorSpace:de.workingColorSpace}const G_={clone:is,merge:an};var W_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,X_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class rn extends ss{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=W_,this.fragmentShader=X_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=is(t.uniforms),this.uniformsGroups=H_(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?e.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[r]={type:"m4",value:a.toArray()}:e.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Fp extends Ue{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ue,this.projectionMatrix=new ue,this.projectionMatrixInverse=new ue,this.coordinateSystem=ci}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ti=new U,Yh=new It,$h=new It;class bn extends Fp{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ks*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Xs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ks*2*Math.atan(Math.tan(Xs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ti.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ti.x,Ti.y).multiplyScalar(-t/Ti.z),Ti.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ti.x,Ti.y).multiplyScalar(-t/Ti.z)}getViewSize(t,e){return this.getViewBounds(t,Yh,$h),e.subVectors($h,Yh)}setViewOffset(t,e,n,r,o,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=o,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Xs*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,o=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const h=a.fullWidth,d=a.fullHeight;o+=a.offsetX*r/h,e-=a.offsetY*n/d,r*=a.width/h,n*=a.height/d}const c=this.filmOffset;c!==0&&(o+=t*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Rr=-90,Lr=1;class q_ extends Ue{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new bn(Rr,Lr,t,e);r.layers=this.layers,this.add(r);const o=new bn(Rr,Lr,t,e);o.layers=this.layers,this.add(o);const a=new bn(Rr,Lr,t,e);a.layers=this.layers,this.add(a);const c=new bn(Rr,Lr,t,e);c.layers=this.layers,this.add(c);const h=new bn(Rr,Lr,t,e);h.layers=this.layers,this.add(h);const d=new bn(Rr,Lr,t,e);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,o,a,c,h]=e;for(const d of e)this.remove(d);if(t===ci)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(t===fa)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const d of e)this.add(d),d.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,a,c,h,d,p]=this.children,f=t.getRenderTarget(),m=t.getActiveCubeFace(),x=t.getActiveMipmapLevel(),b=t.xr.enabled;t.xr.enabled=!1;const w=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,o),t.setRenderTarget(n,1,r),t.render(e,a),t.setRenderTarget(n,2,r),t.render(e,c),t.setRenderTarget(n,3,r),t.render(e,h),t.setRenderTarget(n,4,r),t.render(e,d),n.texture.generateMipmaps=w,t.setRenderTarget(n,5,r),t.render(e,p),t.setRenderTarget(f,m,x),t.xr.enabled=b,n.texture.needsPMREMUpdate=!0}}class Op extends dn{constructor(t,e,n,r,o,a,c,h,d,p){t=t!==void 0?t:[],e=e!==void 0?e:ts,super(t,e,n,r,o,a,c,h,d,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class j_ extends In{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];e.encoding!==void 0&&(Qr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===ir?We:Pn),this.texture=new Op(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ie}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new he(5,5,5),o=new rn({name:"CubemapFromEquirect",uniforms:is(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:hn,blending:Dn});o.uniforms.tEquirect.value=e;const a=new ft(r,o),c=e.minFilter;return e.minFilter===tr&&(e.minFilter=Ie),new q_(1,10,this).update(t,a),e.minFilter=c,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,r){const o=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,r);t.setRenderTarget(o)}}const Tl=new U,Y_=new U,$_=new ee;class Hn{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=Tl.subVectors(n,e).cross(Y_.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Tl),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:e.copy(t.start).addScaledVector(n,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||$_.getNormalMatrix(t),r=this.coplanarPoint(Tl).applyMatrix4(t),o=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Xi=new Qs,Do=new U;class Ic{constructor(t=new Hn,e=new Hn,n=new Hn,r=new Hn,o=new Hn,a=new Hn){this.planes=[t,e,n,r,o,a]}set(t,e,n,r,o,a){const c=this.planes;return c[0].copy(t),c[1].copy(e),c[2].copy(n),c[3].copy(r),c[4].copy(o),c[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ci){const n=this.planes,r=t.elements,o=r[0],a=r[1],c=r[2],h=r[3],d=r[4],p=r[5],f=r[6],m=r[7],x=r[8],b=r[9],w=r[10],_=r[11],v=r[12],E=r[13],y=r[14],T=r[15];if(n[0].setComponents(h-o,m-d,_-x,T-v).normalize(),n[1].setComponents(h+o,m+d,_+x,T+v).normalize(),n[2].setComponents(h+a,m+p,_+b,T+E).normalize(),n[3].setComponents(h-a,m-p,_-b,T-E).normalize(),n[4].setComponents(h-c,m-f,_-w,T-y).normalize(),e===ci)n[5].setComponents(h+c,m+f,_+w,T+y).normalize();else if(e===fa)n[5].setComponents(c,f,w,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Xi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Xi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Xi)}intersectsSprite(t){return Xi.center.set(0,0,0),Xi.radius=.7071067811865476,Xi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Xi)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(Do.x=r.normal.x>0?t.max.x:t.min.x,Do.y=r.normal.y>0?t.max.y:t.min.y,Do.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Do)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Bp(){let i=null,t=!1,e=null,n=null;function r(o,a){e(o,a),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){i=o}}}function K_(i,t){const e=t.isWebGL2,n=new WeakMap;function r(d,p){const f=d.array,m=d.usage,x=f.byteLength,b=i.createBuffer();i.bindBuffer(p,b),i.bufferData(p,f,m),d.onUploadCallback();let w;if(f instanceof Float32Array)w=i.FLOAT;else if(f instanceof Uint16Array)if(d.isFloat16BufferAttribute)if(e)w=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else w=i.UNSIGNED_SHORT;else if(f instanceof Int16Array)w=i.SHORT;else if(f instanceof Uint32Array)w=i.UNSIGNED_INT;else if(f instanceof Int32Array)w=i.INT;else if(f instanceof Int8Array)w=i.BYTE;else if(f instanceof Uint8Array)w=i.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)w=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:b,type:w,bytesPerElement:f.BYTES_PER_ELEMENT,version:d.version,size:x}}function o(d,p,f){const m=p.array,x=p._updateRange,b=p.updateRanges;if(i.bindBuffer(f,d),x.count===-1&&b.length===0&&i.bufferSubData(f,0,m),b.length!==0){for(let w=0,_=b.length;w<_;w++){const v=b[w];e?i.bufferSubData(f,v.start*m.BYTES_PER_ELEMENT,m,v.start,v.count):i.bufferSubData(f,v.start*m.BYTES_PER_ELEMENT,m.subarray(v.start,v.start+v.count))}p.clearUpdateRanges()}x.count!==-1&&(e?i.bufferSubData(f,x.offset*m.BYTES_PER_ELEMENT,m,x.offset,x.count):i.bufferSubData(f,x.offset*m.BYTES_PER_ELEMENT,m.subarray(x.offset,x.offset+x.count)),x.count=-1),p.onUploadCallback()}function a(d){return d.isInterleavedBufferAttribute&&(d=d.data),n.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=n.get(d);p&&(i.deleteBuffer(p.buffer),n.delete(d))}function h(d,p){if(d.isGLBufferAttribute){const m=n.get(d);(!m||m.version<d.version)&&n.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}d.isInterleavedBufferAttribute&&(d=d.data);const f=n.get(d);if(f===void 0)n.set(d,r(d,p));else if(f.version<d.version){if(f.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");o(f.buffer,d,p),f.version=d.version}}return{get:a,remove:c,update:h}}class kn extends nn{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const o=t/2,a=e/2,c=Math.floor(n),h=Math.floor(r),d=c+1,p=h+1,f=t/c,m=e/h,x=[],b=[],w=[],_=[];for(let v=0;v<p;v++){const E=v*m-a;for(let y=0;y<d;y++){const T=y*f-o;b.push(T,-E,0),w.push(0,0,1),_.push(y/c),_.push(1-v/h)}}for(let v=0;v<h;v++)for(let E=0;E<c;E++){const y=E+d*v,T=E+d*(v+1),C=E+1+d*(v+1),P=E+1+d*v;x.push(y,T,P),x.push(T,C,P)}this.setIndex(x),this.setAttribute("position",new we(b,3)),this.setAttribute("normal",new we(w,3)),this.setAttribute("uv",new we(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new kn(t.width,t.height,t.widthSegments,t.heightSegments)}}var Z_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Q_=`#ifdef USE_ALPHAHASH
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
#endif`,J_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,t0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,e0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,n0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,i0=`#ifdef USE_AOMAP
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
#endif`,r0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,s0=`#ifdef USE_BATCHING
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
#endif`,o0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,a0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,l0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,c0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,u0=`#ifdef USE_IRIDESCENCE
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
#endif`,h0=`#ifdef USE_BUMPMAP
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
#endif`,d0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,p0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,f0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,m0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,g0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,v0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,_0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,x0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,b0=`#define PI 3.141592653589793
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
} // validated`,y0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,w0=`vec3 transformedNormal = objectNormal;
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
#endif`,E0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,M0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,S0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,T0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,A0="gl_FragColor = linearToOutputTexel( gl_FragColor );",C0=`
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
}`,P0=`#ifdef USE_ENVMAP
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
#endif`,R0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,L0=`#ifdef USE_ENVMAP
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
#endif`,D0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,I0=`#ifdef USE_ENVMAP
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
#endif`,U0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,N0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,F0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,O0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,B0=`#ifdef USE_GRADIENTMAP
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
}`,k0=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,V0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,z0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,H0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,G0=`uniform bool receiveShadow;
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
#endif`,W0=`#ifdef USE_ENVMAP
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
#endif`,X0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,q0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,j0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Y0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$0=`PhysicalMaterial material;
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
#endif`,K0=`struct PhysicalMaterial {
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
}`,Z0=`
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
#endif`,Q0=`#if defined( RE_IndirectDiffuse )
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
#endif`,J0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,tx=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ex=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nx=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,ix=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,rx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ox=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ax=`#if defined( USE_POINTS_UV )
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
#endif`,lx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ux=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hx=`#ifdef USE_MORPHNORMALS
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
#endif`,dx=`#ifdef USE_MORPHTARGETS
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
#endif`,px=`#ifdef USE_MORPHTARGETS
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
#endif`,fx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,mx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,gx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_x=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,xx=`#ifdef USE_NORMALMAP
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
#endif`,bx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,yx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,wx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ex=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Mx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Sx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Tx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ax=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Cx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Px=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Rx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Lx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Dx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ix=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ux=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Nx=`float getShadowMask() {
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
}`,Fx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ox=`#ifdef USE_SKINNING
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
#endif`,Bx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,kx=`#ifdef USE_SKINNING
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
#endif`,Vx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,zx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Hx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Gx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Wx=`#ifdef USE_TRANSMISSION
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
#endif`,Xx=`#ifdef USE_TRANSMISSION
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
#endif`,qx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$x=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Kx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Zx=`uniform sampler2D t2D;
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
}`,Qx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,tb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nb=`#include <common>
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
}`,ib=`#if DEPTH_PACKING == 3200
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
}`,rb=`#define DISTANCE
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
}`,sb=`#define DISTANCE
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
}`,ob=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ab=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lb=`uniform float scale;
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
}`,cb=`uniform vec3 diffuse;
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
}`,ub=`#include <common>
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
}`,hb=`uniform vec3 diffuse;
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
}`,db=`#define LAMBERT
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
}`,pb=`#define LAMBERT
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
}`,fb=`#define MATCAP
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
}`,mb=`#define MATCAP
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
}`,gb=`#define NORMAL
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
}`,vb=`#define NORMAL
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
}`,_b=`#define PHONG
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
}`,xb=`#define PHONG
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
}`,bb=`#define STANDARD
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
}`,yb=`#define STANDARD
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
}`,wb=`#define TOON
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
}`,Eb=`#define TOON
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
}`,Mb=`uniform float size;
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
}`,Sb=`uniform vec3 diffuse;
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
}`,Tb=`#include <common>
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
}`,Ab=`uniform vec3 color;
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
}`,Cb=`uniform float rotation;
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
}`,Pb=`uniform vec3 diffuse;
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
}`,Qt={alphahash_fragment:Z_,alphahash_pars_fragment:Q_,alphamap_fragment:J_,alphamap_pars_fragment:t0,alphatest_fragment:e0,alphatest_pars_fragment:n0,aomap_fragment:i0,aomap_pars_fragment:r0,batching_pars_vertex:s0,batching_vertex:o0,begin_vertex:a0,beginnormal_vertex:l0,bsdfs:c0,iridescence_fragment:u0,bumpmap_pars_fragment:h0,clipping_planes_fragment:d0,clipping_planes_pars_fragment:p0,clipping_planes_pars_vertex:f0,clipping_planes_vertex:m0,color_fragment:g0,color_pars_fragment:v0,color_pars_vertex:_0,color_vertex:x0,common:b0,cube_uv_reflection_fragment:y0,defaultnormal_vertex:w0,displacementmap_pars_vertex:E0,displacementmap_vertex:M0,emissivemap_fragment:S0,emissivemap_pars_fragment:T0,colorspace_fragment:A0,colorspace_pars_fragment:C0,envmap_fragment:P0,envmap_common_pars_fragment:R0,envmap_pars_fragment:L0,envmap_pars_vertex:D0,envmap_physical_pars_fragment:W0,envmap_vertex:I0,fog_vertex:U0,fog_pars_vertex:N0,fog_fragment:F0,fog_pars_fragment:O0,gradientmap_pars_fragment:B0,lightmap_fragment:k0,lightmap_pars_fragment:V0,lights_lambert_fragment:z0,lights_lambert_pars_fragment:H0,lights_pars_begin:G0,lights_toon_fragment:X0,lights_toon_pars_fragment:q0,lights_phong_fragment:j0,lights_phong_pars_fragment:Y0,lights_physical_fragment:$0,lights_physical_pars_fragment:K0,lights_fragment_begin:Z0,lights_fragment_maps:Q0,lights_fragment_end:J0,logdepthbuf_fragment:tx,logdepthbuf_pars_fragment:ex,logdepthbuf_pars_vertex:nx,logdepthbuf_vertex:ix,map_fragment:rx,map_pars_fragment:sx,map_particle_fragment:ox,map_particle_pars_fragment:ax,metalnessmap_fragment:lx,metalnessmap_pars_fragment:cx,morphcolor_vertex:ux,morphnormal_vertex:hx,morphtarget_pars_vertex:dx,morphtarget_vertex:px,normal_fragment_begin:fx,normal_fragment_maps:mx,normal_pars_fragment:gx,normal_pars_vertex:vx,normal_vertex:_x,normalmap_pars_fragment:xx,clearcoat_normal_fragment_begin:bx,clearcoat_normal_fragment_maps:yx,clearcoat_pars_fragment:wx,iridescence_pars_fragment:Ex,opaque_fragment:Mx,packing:Sx,premultiplied_alpha_fragment:Tx,project_vertex:Ax,dithering_fragment:Cx,dithering_pars_fragment:Px,roughnessmap_fragment:Rx,roughnessmap_pars_fragment:Lx,shadowmap_pars_fragment:Dx,shadowmap_pars_vertex:Ix,shadowmap_vertex:Ux,shadowmask_pars_fragment:Nx,skinbase_vertex:Fx,skinning_pars_vertex:Ox,skinning_vertex:Bx,skinnormal_vertex:kx,specularmap_fragment:Vx,specularmap_pars_fragment:zx,tonemapping_fragment:Hx,tonemapping_pars_fragment:Gx,transmission_fragment:Wx,transmission_pars_fragment:Xx,uv_pars_fragment:qx,uv_pars_vertex:jx,uv_vertex:Yx,worldpos_vertex:$x,background_vert:Kx,background_frag:Zx,backgroundCube_vert:Qx,backgroundCube_frag:Jx,cube_vert:tb,cube_frag:eb,depth_vert:nb,depth_frag:ib,distanceRGBA_vert:rb,distanceRGBA_frag:sb,equirect_vert:ob,equirect_frag:ab,linedashed_vert:lb,linedashed_frag:cb,meshbasic_vert:ub,meshbasic_frag:hb,meshlambert_vert:db,meshlambert_frag:pb,meshmatcap_vert:fb,meshmatcap_frag:mb,meshnormal_vert:gb,meshnormal_frag:vb,meshphong_vert:_b,meshphong_frag:xb,meshphysical_vert:bb,meshphysical_frag:yb,meshtoon_vert:wb,meshtoon_frag:Eb,points_vert:Mb,points_frag:Sb,shadow_vert:Tb,shadow_frag:Ab,sprite_vert:Cb,sprite_frag:Pb},gt={common:{diffuse:{value:new se(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ee},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ee}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ee}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ee}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ee},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ee},normalScale:{value:new It(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ee},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ee}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ee}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ee}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0},uvTransform:{value:new ee}},sprite:{diffuse:{value:new se(16777215)},opacity:{value:1},center:{value:new It(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ee},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0}}},Gn={basic:{uniforms:an([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.fog]),vertexShader:Qt.meshbasic_vert,fragmentShader:Qt.meshbasic_frag},lambert:{uniforms:an([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new se(0)}}]),vertexShader:Qt.meshlambert_vert,fragmentShader:Qt.meshlambert_frag},phong:{uniforms:an([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new se(0)},specular:{value:new se(1118481)},shininess:{value:30}}]),vertexShader:Qt.meshphong_vert,fragmentShader:Qt.meshphong_frag},standard:{uniforms:an([gt.common,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.roughnessmap,gt.metalnessmap,gt.fog,gt.lights,{emissive:{value:new se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag},toon:{uniforms:an([gt.common,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.gradientmap,gt.fog,gt.lights,{emissive:{value:new se(0)}}]),vertexShader:Qt.meshtoon_vert,fragmentShader:Qt.meshtoon_frag},matcap:{uniforms:an([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,{matcap:{value:null}}]),vertexShader:Qt.meshmatcap_vert,fragmentShader:Qt.meshmatcap_frag},points:{uniforms:an([gt.points,gt.fog]),vertexShader:Qt.points_vert,fragmentShader:Qt.points_frag},dashed:{uniforms:an([gt.common,gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qt.linedashed_vert,fragmentShader:Qt.linedashed_frag},depth:{uniforms:an([gt.common,gt.displacementmap]),vertexShader:Qt.depth_vert,fragmentShader:Qt.depth_frag},normal:{uniforms:an([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,{opacity:{value:1}}]),vertexShader:Qt.meshnormal_vert,fragmentShader:Qt.meshnormal_frag},sprite:{uniforms:an([gt.sprite,gt.fog]),vertexShader:Qt.sprite_vert,fragmentShader:Qt.sprite_frag},background:{uniforms:{uvTransform:{value:new ee},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qt.background_vert,fragmentShader:Qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Qt.backgroundCube_vert,fragmentShader:Qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qt.cube_vert,fragmentShader:Qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qt.equirect_vert,fragmentShader:Qt.equirect_frag},distanceRGBA:{uniforms:an([gt.common,gt.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qt.distanceRGBA_vert,fragmentShader:Qt.distanceRGBA_frag},shadow:{uniforms:an([gt.lights,gt.fog,{color:{value:new se(0)},opacity:{value:1}}]),vertexShader:Qt.shadow_vert,fragmentShader:Qt.shadow_frag}};Gn.physical={uniforms:an([Gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ee},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ee},clearcoatNormalScale:{value:new It(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ee},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ee},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ee},sheen:{value:0},sheenColor:{value:new se(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ee},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ee},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ee},transmissionSamplerSize:{value:new It},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ee},attenuationDistance:{value:0},attenuationColor:{value:new se(0)},specularColor:{value:new se(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ee},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ee},anisotropyVector:{value:new It},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ee}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag};const Io={r:0,b:0,g:0};function Rb(i,t,e,n,r,o,a){const c=new se(0);let h=o===!0?0:1,d,p,f=null,m=0,x=null;function b(_,v){let E=!1,y=v.isScene===!0?v.background:null;y&&y.isTexture&&(y=(v.backgroundBlurriness>0?e:t).get(y)),y===null?w(c,h):y&&y.isColor&&(w(y,1),E=!0);const T=i.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||E)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),y&&(y.isCubeTexture||y.mapping===ba)?(p===void 0&&(p=new ft(new he(1,1,1),new rn({name:"BackgroundCubeMaterial",uniforms:is(Gn.backgroundCube.uniforms),vertexShader:Gn.backgroundCube.vertexShader,fragmentShader:Gn.backgroundCube.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(C,P,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(p)),p.material.uniforms.envMap.value=y,p.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,p.material.toneMapped=de.getTransfer(y.colorSpace)!==be,(f!==y||m!==y.version||x!==i.toneMapping)&&(p.material.needsUpdate=!0,f=y,m=y.version,x=i.toneMapping),p.layers.enableAll(),_.unshift(p,p.geometry,p.material,0,0,null)):y&&y.isTexture&&(d===void 0&&(d=new ft(new kn(2,2),new rn({name:"BackgroundMaterial",uniforms:is(Gn.background.uniforms),vertexShader:Gn.background.vertexShader,fragmentShader:Gn.background.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(d)),d.material.uniforms.t2D.value=y,d.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,d.material.toneMapped=de.getTransfer(y.colorSpace)!==be,y.matrixAutoUpdate===!0&&y.updateMatrix(),d.material.uniforms.uvTransform.value.copy(y.matrix),(f!==y||m!==y.version||x!==i.toneMapping)&&(d.material.needsUpdate=!0,f=y,m=y.version,x=i.toneMapping),d.layers.enableAll(),_.unshift(d,d.geometry,d.material,0,0,null))}function w(_,v){_.getRGB(Io,Np(i)),n.buffers.color.setClear(Io.r,Io.g,Io.b,v,a)}return{getClearColor:function(){return c},setClearColor:function(_,v=1){c.set(_),h=v,w(c,h)},getClearAlpha:function(){return h},setClearAlpha:function(_){h=_,w(c,h)},render:b}}function Lb(i,t,e,n){const r=i.getParameter(i.MAX_VERTEX_ATTRIBS),o=n.isWebGL2?null:t.get("OES_vertex_array_object"),a=n.isWebGL2||o!==null,c={},h=_(null);let d=h,p=!1;function f(F,G,H,W,J){let et=!1;if(a){const it=w(W,H,G);d!==it&&(d=it,x(d.object)),et=v(F,W,H,J),et&&E(F,W,H,J)}else{const it=G.wireframe===!0;(d.geometry!==W.id||d.program!==H.id||d.wireframe!==it)&&(d.geometry=W.id,d.program=H.id,d.wireframe=it,et=!0)}J!==null&&e.update(J,i.ELEMENT_ARRAY_BUFFER),(et||p)&&(p=!1,I(F,G,H,W),J!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(J).buffer))}function m(){return n.isWebGL2?i.createVertexArray():o.createVertexArrayOES()}function x(F){return n.isWebGL2?i.bindVertexArray(F):o.bindVertexArrayOES(F)}function b(F){return n.isWebGL2?i.deleteVertexArray(F):o.deleteVertexArrayOES(F)}function w(F,G,H){const W=H.wireframe===!0;let J=c[F.id];J===void 0&&(J={},c[F.id]=J);let et=J[G.id];et===void 0&&(et={},J[G.id]=et);let it=et[W];return it===void 0&&(it=_(m()),et[W]=it),it}function _(F){const G=[],H=[],W=[];for(let J=0;J<r;J++)G[J]=0,H[J]=0,W[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:H,attributeDivisors:W,object:F,attributes:{},index:null}}function v(F,G,H,W){const J=d.attributes,et=G.attributes;let it=0;const nt=H.getAttributes();for(const pt in nt)if(nt[pt].location>=0){const $=J[pt];let rt=et[pt];if(rt===void 0&&(pt==="instanceMatrix"&&F.instanceMatrix&&(rt=F.instanceMatrix),pt==="instanceColor"&&F.instanceColor&&(rt=F.instanceColor)),$===void 0||$.attribute!==rt||rt&&$.data!==rt.data)return!0;it++}return d.attributesNum!==it||d.index!==W}function E(F,G,H,W){const J={},et=G.attributes;let it=0;const nt=H.getAttributes();for(const pt in nt)if(nt[pt].location>=0){let $=et[pt];$===void 0&&(pt==="instanceMatrix"&&F.instanceMatrix&&($=F.instanceMatrix),pt==="instanceColor"&&F.instanceColor&&($=F.instanceColor));const rt={};rt.attribute=$,$&&$.data&&(rt.data=$.data),J[pt]=rt,it++}d.attributes=J,d.attributesNum=it,d.index=W}function y(){const F=d.newAttributes;for(let G=0,H=F.length;G<H;G++)F[G]=0}function T(F){C(F,0)}function C(F,G){const H=d.newAttributes,W=d.enabledAttributes,J=d.attributeDivisors;H[F]=1,W[F]===0&&(i.enableVertexAttribArray(F),W[F]=1),J[F]!==G&&((n.isWebGL2?i:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](F,G),J[F]=G)}function P(){const F=d.newAttributes,G=d.enabledAttributes;for(let H=0,W=G.length;H<W;H++)G[H]!==F[H]&&(i.disableVertexAttribArray(H),G[H]=0)}function A(F,G,H,W,J,et,it){it===!0?i.vertexAttribIPointer(F,G,H,J,et):i.vertexAttribPointer(F,G,H,W,J,et)}function I(F,G,H,W){if(n.isWebGL2===!1&&(F.isInstancedMesh||W.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;y();const J=W.attributes,et=H.getAttributes(),it=G.defaultAttributeValues;for(const nt in et){const pt=et[nt];if(pt.location>=0){let mt=J[nt];if(mt===void 0&&(nt==="instanceMatrix"&&F.instanceMatrix&&(mt=F.instanceMatrix),nt==="instanceColor"&&F.instanceColor&&(mt=F.instanceColor)),mt!==void 0){const $=mt.normalized,rt=mt.itemSize,wt=e.get(mt);if(wt===void 0)continue;const Rt=wt.buffer,Lt=wt.type,Et=wt.bytesPerElement,zt=n.isWebGL2===!0&&(Lt===i.INT||Lt===i.UNSIGNED_INT||mt.gpuType===Ws);if(mt.isInterleavedBufferAttribute){const Bt=mt.data,j=Bt.stride,Ae=mt.offset;if(Bt.isInstancedInterleavedBuffer){for(let Tt=0;Tt<pt.locationSize;Tt++)C(pt.location+Tt,Bt.meshPerAttribute);F.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=Bt.meshPerAttribute*Bt.count)}else for(let Tt=0;Tt<pt.locationSize;Tt++)T(pt.location+Tt);i.bindBuffer(i.ARRAY_BUFFER,Rt);for(let Tt=0;Tt<pt.locationSize;Tt++)A(pt.location+Tt,rt/pt.locationSize,Lt,$,j*Et,(Ae+rt/pt.locationSize*Tt)*Et,zt)}else{if(mt.isInstancedBufferAttribute){for(let Bt=0;Bt<pt.locationSize;Bt++)C(pt.location+Bt,mt.meshPerAttribute);F.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let Bt=0;Bt<pt.locationSize;Bt++)T(pt.location+Bt);i.bindBuffer(i.ARRAY_BUFFER,Rt);for(let Bt=0;Bt<pt.locationSize;Bt++)A(pt.location+Bt,rt/pt.locationSize,Lt,$,rt*Et,rt/pt.locationSize*Bt*Et,zt)}}else if(it!==void 0){const $=it[nt];if($!==void 0)switch($.length){case 2:i.vertexAttrib2fv(pt.location,$);break;case 3:i.vertexAttrib3fv(pt.location,$);break;case 4:i.vertexAttrib4fv(pt.location,$);break;default:i.vertexAttrib1fv(pt.location,$)}}}}P()}function z(){V();for(const F in c){const G=c[F];for(const H in G){const W=G[H];for(const J in W)b(W[J].object),delete W[J];delete G[H]}delete c[F]}}function M(F){if(c[F.id]===void 0)return;const G=c[F.id];for(const H in G){const W=G[H];for(const J in W)b(W[J].object),delete W[J];delete G[H]}delete c[F.id]}function L(F){for(const G in c){const H=c[G];if(H[F.id]===void 0)continue;const W=H[F.id];for(const J in W)b(W[J].object),delete W[J];delete H[F.id]}}function V(){X(),p=!0,d!==h&&(d=h,x(d.object))}function X(){h.geometry=null,h.program=null,h.wireframe=!1}return{setup:f,reset:V,resetDefaultState:X,dispose:z,releaseStatesOfGeometry:M,releaseStatesOfProgram:L,initAttributes:y,enableAttribute:T,disableUnusedAttributes:P}}function Db(i,t,e,n){const r=n.isWebGL2;let o;function a(p){o=p}function c(p,f){i.drawArrays(o,p,f),e.update(f,o,1)}function h(p,f,m){if(m===0)return;let x,b;if(r)x=i,b="drawArraysInstanced";else if(x=t.get("ANGLE_instanced_arrays"),b="drawArraysInstancedANGLE",x===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}x[b](o,p,f,m),e.update(f,o,m)}function d(p,f,m){if(m===0)return;const x=t.get("WEBGL_multi_draw");if(x===null)for(let b=0;b<m;b++)this.render(p[b],f[b]);else{x.multiDrawArraysWEBGL(o,p,0,f,0,m);let b=0;for(let w=0;w<m;w++)b+=f[w];e.update(b,o,1)}}this.setMode=a,this.render=c,this.renderInstances=h,this.renderMultiDraw=d}function Ib(i,t,e){let n;function r(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");n=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function o(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext!="undefined"&&i.constructor.name==="WebGL2RenderingContext";let c=e.precision!==void 0?e.precision:"highp";const h=o(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=a||t.has("WEBGL_draw_buffers"),p=e.logarithmicDepthBuffer===!0,f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),b=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),w=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),y=m>0,T=a||t.has("OES_texture_float"),C=y&&T,P=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:d,getMaxAnisotropy:r,getMaxPrecision:o,precision:c,logarithmicDepthBuffer:p,maxTextures:f,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:b,maxAttributes:w,maxVertexUniforms:_,maxVaryings:v,maxFragmentUniforms:E,vertexTextures:y,floatFragmentTextures:T,floatVertexTextures:C,maxSamples:P}}function Ub(i){const t=this;let e=null,n=0,r=!1,o=!1;const a=new Hn,c=new ee,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(f,m){const x=f.length!==0||m||n!==0||r;return r=m,n=f.length,x},this.beginShadows=function(){o=!0,p(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(f,m){e=p(f,m,0)},this.setState=function(f,m,x){const b=f.clippingPlanes,w=f.clipIntersection,_=f.clipShadows,v=i.get(f);if(!r||b===null||b.length===0||o&&!_)o?p(null):d();else{const E=o?0:n,y=E*4;let T=v.clippingState||null;h.value=T,T=p(b,m,y,x);for(let C=0;C!==y;++C)T[C]=e[C];v.clippingState=T,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=E}};function d(){h.value!==e&&(h.value=e,h.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function p(f,m,x,b){const w=f!==null?f.length:0;let _=null;if(w!==0){if(_=h.value,b!==!0||_===null){const v=x+w*4,E=m.matrixWorldInverse;c.getNormalMatrix(E),(_===null||_.length<v)&&(_=new Float32Array(v));for(let y=0,T=x;y!==w;++y,T+=4)a.copy(f[y]).applyMatrix4(E,c),a.normal.toArray(_,T),_[T+3]=a.constant}h.value=_,h.needsUpdate=!0}return t.numPlanes=w,t.numIntersection=0,_}}function Nb(i){let t=new WeakMap;function e(a,c){return c===tc?a.mapping=ts:c===ec&&(a.mapping=es),a}function n(a){if(a&&a.isTexture){const c=a.mapping;if(c===tc||c===ec)if(t.has(a)){const h=t.get(a).texture;return e(h,a.mapping)}else{const h=a.image;if(h&&h.height>0){const d=new j_(h.height);return d.fromEquirectangularTexture(i,a),t.set(a,d),a.addEventListener("dispose",r),e(d.texture,a.mapping)}else return null}}return a}function r(a){const c=a.target;c.removeEventListener("dispose",r);const h=t.get(c);h!==void 0&&(t.delete(c),h.dispose())}function o(){t=new WeakMap}return{get:n,dispose:o}}class or extends Fp{constructor(t=-1,e=1,n=1,r=-1,o=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=o,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,o,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=o,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=n-t,a=n+t,c=r+e,h=r-e;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=d*this.view.offsetX,a=o+d*this.view.width,c-=p*this.view.offsetY,h=c-p*this.view.height}this.projectionMatrix.makeOrthographic(o,a,c,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const jr=4,Kh=[.125,.215,.35,.446,.526,.582],Zi=20,Al=new or,Zh=new se;let Cl=null,Pl=0,Rl=0;const ji=(1+Math.sqrt(5))/2,Dr=1/ji,Qh=[new U(1,1,1),new U(-1,1,1),new U(1,1,-1),new U(-1,1,-1),new U(0,ji,Dr),new U(0,ji,-Dr),new U(Dr,0,ji),new U(-Dr,0,ji),new U(ji,Dr,0),new U(-ji,Dr,0)];class Jh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100){Cl=this._renderer.getRenderTarget(),Pl=this._renderer.getActiveCubeFace(),Rl=this._renderer.getActiveMipmapLevel(),this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(t,n,r,o),e>0&&this._blur(o,0,0,e),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ed(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Cl,Pl,Rl),t.scissorTest=!1,Uo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ts||t.mapping===es?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Cl=this._renderer.getRenderTarget(),Pl=this._renderer.getActiveCubeFace(),Rl=this._renderer.getActiveMipmapLevel();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ie,minFilter:Ie,generateMipmaps:!1,type:qn,format:qe,colorSpace:hi,depthBuffer:!1},r=td(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=td(t,e,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Fb(o)),this._blurMaterial=Ob(o,t,e)}return r}_compileMaterial(t){const e=new ft(this._lodPlanes[0],t);this._renderer.compile(e,Al)}_sceneToCubeUV(t,e,n,r){const c=new bn(90,1,e,n),h=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],p=this._renderer,f=p.autoClear,m=p.toneMapping;p.getClearColor(Zh),p.toneMapping=Ii,p.autoClear=!1;const x=new to({name:"PMREM.Background",side:hn,depthWrite:!1,depthTest:!1}),b=new ft(new he,x);let w=!1;const _=t.background;_?_.isColor&&(x.color.copy(_),t.background=null,w=!0):(x.color.copy(Zh),w=!0);for(let v=0;v<6;v++){const E=v%3;E===0?(c.up.set(0,h[v],0),c.lookAt(d[v],0,0)):E===1?(c.up.set(0,0,h[v]),c.lookAt(0,d[v],0)):(c.up.set(0,h[v],0),c.lookAt(0,0,d[v]));const y=this._cubeSize;Uo(r,E*y,v>2?y:0,y,y),p.setRenderTarget(r),w&&p.render(b,c),p.render(t,c)}b.geometry.dispose(),b.material.dispose(),p.toneMapping=m,p.autoClear=f,t.background=_}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===ts||t.mapping===es;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=nd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ed());const o=r?this._cubemapMaterial:this._equirectMaterial,a=new ft(this._lodPlanes[0],o),c=o.uniforms;c.envMap.value=t;const h=this._cubeSize;Uo(e,0,0,3*h,2*h),n.setRenderTarget(e),n.render(a,Al)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Qh[(r-1)%Qh.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,r,o){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,r,"latitudinal",o),this._halfBlur(a,t,n,n,r,"longitudinal",o)}_halfBlur(t,e,n,r,o,a,c){const h=this._renderer,d=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const p=3,f=new ft(this._lodPlanes[r],d),m=d.uniforms,x=this._sizeLods[n]-1,b=isFinite(o)?Math.PI/(2*x):2*Math.PI/(2*Zi-1),w=o/b,_=isFinite(o)?1+Math.floor(p*w):Zi;_>Zi&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${Zi}`);const v=[];let E=0;for(let A=0;A<Zi;++A){const I=A/w,z=Math.exp(-I*I/2);v.push(z),A===0?E+=z:A<_&&(E+=2*z)}for(let A=0;A<v.length;A++)v[A]=v[A]/E;m.envMap.value=t.texture,m.samples.value=_,m.weights.value=v,m.latitudinal.value=a==="latitudinal",c&&(m.poleAxis.value=c);const{_lodMax:y}=this;m.dTheta.value=b,m.mipInt.value=y-n;const T=this._sizeLods[r],C=3*T*(r>y-jr?r-y+jr:0),P=4*(this._cubeSize-T);Uo(e,C,P,3*T,2*T),h.setRenderTarget(e),h.render(f,Al)}}function Fb(i){const t=[],e=[],n=[];let r=i;const o=i-jr+1+Kh.length;for(let a=0;a<o;a++){const c=Math.pow(2,r);e.push(c);let h=1/c;a>i-jr?h=Kh[a-i+jr-1]:a===0&&(h=0),n.push(h);const d=1/(c-2),p=-d,f=1+d,m=[p,p,f,p,f,f,p,p,f,f,p,f],x=6,b=6,w=3,_=2,v=1,E=new Float32Array(w*b*x),y=new Float32Array(_*b*x),T=new Float32Array(v*b*x);for(let P=0;P<x;P++){const A=P%3*2/3-1,I=P>2?0:-1,z=[A,I,0,A+2/3,I,0,A+2/3,I+1,0,A,I,0,A+2/3,I+1,0,A,I+1,0];E.set(z,w*b*P),y.set(m,_*b*P);const M=[P,P,P,P,P,P];T.set(M,v*b*P)}const C=new nn;C.setAttribute("position",new en(E,w)),C.setAttribute("uv",new en(y,_)),C.setAttribute("faceIndex",new en(T,v)),t.push(C),r>jr&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function td(i,t,e){const n=new In(i,t,e);return n.texture.mapping=ba,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Uo(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function Ob(i,t,e){const n=new Float32Array(Zi),r=new U(0,1,0);return new rn({name:"SphericalGaussianBlur",defines:{n:Zi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Uc(),fragmentShader:`

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
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function ed(){return new rn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Uc(),fragmentShader:`

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
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function nd(){return new rn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Uc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function Uc(){return`

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
	`}function Bb(i){let t=new WeakMap,e=null;function n(c){if(c&&c.isTexture){const h=c.mapping,d=h===tc||h===ec,p=h===ts||h===es;if(d||p)if(c.isRenderTargetTexture&&c.needsPMREMUpdate===!0){c.needsPMREMUpdate=!1;let f=t.get(c);return e===null&&(e=new Jh(i)),f=d?e.fromEquirectangular(c,f):e.fromCubemap(c,f),t.set(c,f),f.texture}else{if(t.has(c))return t.get(c).texture;{const f=c.image;if(d&&f&&f.height>0||p&&f&&r(f)){e===null&&(e=new Jh(i));const m=d?e.fromEquirectangular(c):e.fromCubemap(c);return t.set(c,m),c.addEventListener("dispose",o),m.texture}else return null}}}return c}function r(c){let h=0;const d=6;for(let p=0;p<d;p++)c[p]!==void 0&&h++;return h===d}function o(c){const h=c.target;h.removeEventListener("dispose",o);const d=t.get(h);d!==void 0&&(t.delete(h),d.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function kb(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const r=e(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Vb(i,t,e,n){const r={},o=new WeakMap;function a(f){const m=f.target;m.index!==null&&t.remove(m.index);for(const b in m.attributes)t.remove(m.attributes[b]);for(const b in m.morphAttributes){const w=m.morphAttributes[b];for(let _=0,v=w.length;_<v;_++)t.remove(w[_])}m.removeEventListener("dispose",a),delete r[m.id];const x=o.get(m);x&&(t.remove(x),o.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,e.memory.geometries--}function c(f,m){return r[m.id]===!0||(m.addEventListener("dispose",a),r[m.id]=!0,e.memory.geometries++),m}function h(f){const m=f.attributes;for(const b in m)t.update(m[b],i.ARRAY_BUFFER);const x=f.morphAttributes;for(const b in x){const w=x[b];for(let _=0,v=w.length;_<v;_++)t.update(w[_],i.ARRAY_BUFFER)}}function d(f){const m=[],x=f.index,b=f.attributes.position;let w=0;if(x!==null){const E=x.array;w=x.version;for(let y=0,T=E.length;y<T;y+=3){const C=E[y+0],P=E[y+1],A=E[y+2];m.push(C,P,P,A,A,C)}}else if(b!==void 0){const E=b.array;w=b.version;for(let y=0,T=E.length/3-1;y<T;y+=3){const C=y+0,P=y+1,A=y+2;m.push(C,P,P,A,A,C)}}else return;const _=new(Cp(m)?Up:Ip)(m,1);_.version=w;const v=o.get(f);v&&t.remove(v),o.set(f,_)}function p(f){const m=o.get(f);if(m){const x=f.index;x!==null&&m.version<x.version&&d(f)}else d(f);return o.get(f)}return{get:c,update:h,getWireframeAttribute:p}}function zb(i,t,e,n){const r=n.isWebGL2;let o;function a(x){o=x}let c,h;function d(x){c=x.type,h=x.bytesPerElement}function p(x,b){i.drawElements(o,b,c,x*h),e.update(b,o,1)}function f(x,b,w){if(w===0)return;let _,v;if(r)_=i,v="drawElementsInstanced";else if(_=t.get("ANGLE_instanced_arrays"),v="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[v](o,b,c,x*h,w),e.update(b,o,w)}function m(x,b,w){if(w===0)return;const _=t.get("WEBGL_multi_draw");if(_===null)for(let v=0;v<w;v++)this.render(x[v]/h,b[v]);else{_.multiDrawElementsWEBGL(o,b,0,c,x,0,w);let v=0;for(let E=0;E<w;E++)v+=b[E];e.update(v,o,1)}}this.setMode=a,this.setIndex=d,this.render=p,this.renderInstances=f,this.renderMultiDraw=m}function Hb(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,a,c){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=c*(o/3);break;case i.LINES:e.lines+=c*(o/2);break;case i.LINE_STRIP:e.lines+=c*(o-1);break;case i.LINE_LOOP:e.lines+=c*o;break;case i.POINTS:e.points+=c*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function Gb(i,t){return i[0]-t[0]}function Wb(i,t){return Math.abs(t[1])-Math.abs(i[1])}function Xb(i,t,e){const n={},r=new Float32Array(8),o=new WeakMap,a=new ve,c=[];for(let d=0;d<8;d++)c[d]=[d,0];function h(d,p,f){const m=d.morphTargetInfluences;if(t.isWebGL2===!0){const b=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,w=b!==void 0?b.length:0;let _=o.get(p);if(_===void 0||_.count!==w){let G=function(){X.dispose(),o.delete(p),p.removeEventListener("dispose",G)};var x=G;_!==void 0&&_.texture.dispose();const y=p.morphAttributes.position!==void 0,T=p.morphAttributes.normal!==void 0,C=p.morphAttributes.color!==void 0,P=p.morphAttributes.position||[],A=p.morphAttributes.normal||[],I=p.morphAttributes.color||[];let z=0;y===!0&&(z=1),T===!0&&(z=2),C===!0&&(z=3);let M=p.attributes.position.count*z,L=1;M>t.maxTextureSize&&(L=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);const V=new Float32Array(M*L*4*w),X=new Lp(V,M,L,w);X.type=ge,X.needsUpdate=!0;const F=z*4;for(let H=0;H<w;H++){const W=P[H],J=A[H],et=I[H],it=M*L*4*H;for(let nt=0;nt<W.count;nt++){const pt=nt*F;y===!0&&(a.fromBufferAttribute(W,nt),V[it+pt+0]=a.x,V[it+pt+1]=a.y,V[it+pt+2]=a.z,V[it+pt+3]=0),T===!0&&(a.fromBufferAttribute(J,nt),V[it+pt+4]=a.x,V[it+pt+5]=a.y,V[it+pt+6]=a.z,V[it+pt+7]=0),C===!0&&(a.fromBufferAttribute(et,nt),V[it+pt+8]=a.x,V[it+pt+9]=a.y,V[it+pt+10]=a.z,V[it+pt+11]=et.itemSize===4?a.w:1)}}_={count:w,texture:X,size:new It(M,L)},o.set(p,_),p.addEventListener("dispose",G)}let v=0;for(let y=0;y<m.length;y++)v+=m[y];const E=p.morphTargetsRelative?1:1-v;f.getUniforms().setValue(i,"morphTargetBaseInfluence",E),f.getUniforms().setValue(i,"morphTargetInfluences",m),f.getUniforms().setValue(i,"morphTargetsTexture",_.texture,e),f.getUniforms().setValue(i,"morphTargetsTextureSize",_.size)}else{const b=m===void 0?0:m.length;let w=n[p.id];if(w===void 0||w.length!==b){w=[];for(let T=0;T<b;T++)w[T]=[T,0];n[p.id]=w}for(let T=0;T<b;T++){const C=w[T];C[0]=T,C[1]=m[T]}w.sort(Wb);for(let T=0;T<8;T++)T<b&&w[T][1]?(c[T][0]=w[T][0],c[T][1]=w[T][1]):(c[T][0]=Number.MAX_SAFE_INTEGER,c[T][1]=0);c.sort(Gb);const _=p.morphAttributes.position,v=p.morphAttributes.normal;let E=0;for(let T=0;T<8;T++){const C=c[T],P=C[0],A=C[1];P!==Number.MAX_SAFE_INTEGER&&A?(_&&p.getAttribute("morphTarget"+T)!==_[P]&&p.setAttribute("morphTarget"+T,_[P]),v&&p.getAttribute("morphNormal"+T)!==v[P]&&p.setAttribute("morphNormal"+T,v[P]),r[T]=A,E+=A):(_&&p.hasAttribute("morphTarget"+T)===!0&&p.deleteAttribute("morphTarget"+T),v&&p.hasAttribute("morphNormal"+T)===!0&&p.deleteAttribute("morphNormal"+T),r[T]=0)}const y=p.morphTargetsRelative?1:1-E;f.getUniforms().setValue(i,"morphTargetBaseInfluence",y),f.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:h}}function qb(i,t,e,n){let r=new WeakMap;function o(h){const d=n.render.frame,p=h.geometry,f=t.get(h,p);if(r.get(f)!==d&&(t.update(f),r.set(f,d)),h.isInstancedMesh&&(h.hasEventListener("dispose",c)===!1&&h.addEventListener("dispose",c),r.get(h)!==d&&(e.update(h.instanceMatrix,i.ARRAY_BUFFER),h.instanceColor!==null&&e.update(h.instanceColor,i.ARRAY_BUFFER),r.set(h,d))),h.isSkinnedMesh){const m=h.skeleton;r.get(m)!==d&&(m.update(),r.set(m,d))}return f}function a(){r=new WeakMap}function c(h){const d=h.target;d.removeEventListener("dispose",c),e.remove(d.instanceMatrix),d.instanceColor!==null&&e.remove(d.instanceColor)}return{update:o,dispose:a}}class kp extends dn{constructor(t,e,n,r,o,a,c,h,d,p){if(p=p!==void 0?p:nr,p!==nr&&p!==ns)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&p===nr&&(n=wn),n===void 0&&p===ns&&(n=er),super(null,r,o,a,c,h,p,n,d),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=c!==void 0?c:pe,this.minFilter=h!==void 0?h:pe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Vp=new dn,zp=new kp(1,1);zp.compareFunction=Ap;const Hp=new Lp,Gp=new S_,Wp=new Op,id=[],rd=[],sd=new Float32Array(16),od=new Float32Array(9),ad=new Float32Array(4);function os(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let o=id[r];if(o===void 0&&(o=new Float32Array(r),id[r]=o),t!==0){n.toArray(o,0);for(let a=1,c=0;a!==t;++a)c+=e,i[a].toArray(o,c)}return o}function Ve(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ze(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Sa(i,t){let e=rd[t];e===void 0&&(e=new Int32Array(t),rd[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function jb(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Yb(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;i.uniform2fv(this.addr,t),ze(e,t)}}function $b(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ve(e,t))return;i.uniform3fv(this.addr,t),ze(e,t)}}function Kb(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;i.uniform4fv(this.addr,t),ze(e,t)}}function Zb(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ve(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ze(e,t)}else{if(Ve(e,n))return;ad.set(n),i.uniformMatrix2fv(this.addr,!1,ad),ze(e,n)}}function Qb(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ve(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ze(e,t)}else{if(Ve(e,n))return;od.set(n),i.uniformMatrix3fv(this.addr,!1,od),ze(e,n)}}function Jb(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ve(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ze(e,t)}else{if(Ve(e,n))return;sd.set(n),i.uniformMatrix4fv(this.addr,!1,sd),ze(e,n)}}function ty(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function ey(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;i.uniform2iv(this.addr,t),ze(e,t)}}function ny(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ve(e,t))return;i.uniform3iv(this.addr,t),ze(e,t)}}function iy(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;i.uniform4iv(this.addr,t),ze(e,t)}}function ry(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function sy(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;i.uniform2uiv(this.addr,t),ze(e,t)}}function oy(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ve(e,t))return;i.uniform3uiv(this.addr,t),ze(e,t)}}function ay(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;i.uniform4uiv(this.addr,t),ze(e,t)}}function ly(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);const o=this.type===i.SAMPLER_2D_SHADOW?zp:Vp;e.setTexture2D(t||o,r)}function cy(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||Gp,r)}function uy(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||Wp,r)}function hy(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||Hp,r)}function dy(i){switch(i){case 5126:return jb;case 35664:return Yb;case 35665:return $b;case 35666:return Kb;case 35674:return Zb;case 35675:return Qb;case 35676:return Jb;case 5124:case 35670:return ty;case 35667:case 35671:return ey;case 35668:case 35672:return ny;case 35669:case 35673:return iy;case 5125:return ry;case 36294:return sy;case 36295:return oy;case 36296:return ay;case 35678:case 36198:case 36298:case 36306:case 35682:return ly;case 35679:case 36299:case 36307:return cy;case 35680:case 36300:case 36308:case 36293:return uy;case 36289:case 36303:case 36311:case 36292:return hy}}function py(i,t){i.uniform1fv(this.addr,t)}function fy(i,t){const e=os(t,this.size,2);i.uniform2fv(this.addr,e)}function my(i,t){const e=os(t,this.size,3);i.uniform3fv(this.addr,e)}function gy(i,t){const e=os(t,this.size,4);i.uniform4fv(this.addr,e)}function vy(i,t){const e=os(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function _y(i,t){const e=os(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function xy(i,t){const e=os(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function by(i,t){i.uniform1iv(this.addr,t)}function yy(i,t){i.uniform2iv(this.addr,t)}function wy(i,t){i.uniform3iv(this.addr,t)}function Ey(i,t){i.uniform4iv(this.addr,t)}function My(i,t){i.uniform1uiv(this.addr,t)}function Sy(i,t){i.uniform2uiv(this.addr,t)}function Ty(i,t){i.uniform3uiv(this.addr,t)}function Ay(i,t){i.uniform4uiv(this.addr,t)}function Cy(i,t,e){const n=this.cache,r=t.length,o=Sa(e,r);Ve(n,o)||(i.uniform1iv(this.addr,o),ze(n,o));for(let a=0;a!==r;++a)e.setTexture2D(t[a]||Vp,o[a])}function Py(i,t,e){const n=this.cache,r=t.length,o=Sa(e,r);Ve(n,o)||(i.uniform1iv(this.addr,o),ze(n,o));for(let a=0;a!==r;++a)e.setTexture3D(t[a]||Gp,o[a])}function Ry(i,t,e){const n=this.cache,r=t.length,o=Sa(e,r);Ve(n,o)||(i.uniform1iv(this.addr,o),ze(n,o));for(let a=0;a!==r;++a)e.setTextureCube(t[a]||Wp,o[a])}function Ly(i,t,e){const n=this.cache,r=t.length,o=Sa(e,r);Ve(n,o)||(i.uniform1iv(this.addr,o),ze(n,o));for(let a=0;a!==r;++a)e.setTexture2DArray(t[a]||Hp,o[a])}function Dy(i){switch(i){case 5126:return py;case 35664:return fy;case 35665:return my;case 35666:return gy;case 35674:return vy;case 35675:return _y;case 35676:return xy;case 5124:case 35670:return by;case 35667:case 35671:return yy;case 35668:case 35672:return wy;case 35669:case 35673:return Ey;case 5125:return My;case 36294:return Sy;case 36295:return Ty;case 36296:return Ay;case 35678:case 36198:case 36298:case 36306:case 35682:return Cy;case 35679:case 36299:case 36307:return Py;case 35680:case 36300:case 36308:case 36293:return Ry;case 36289:case 36303:case 36311:case 36292:return Ly}}class Iy{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=dy(e.type)}}class Uy{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Dy(e.type)}}class Ny{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let o=0,a=r.length;o!==a;++o){const c=r[o];c.setValue(t,e[c.id],n)}}}const Ll=/(\w+)(\])?(\[|\.)?/g;function ld(i,t){i.seq.push(t),i.map[t.id]=t}function Fy(i,t,e){const n=i.name,r=n.length;for(Ll.lastIndex=0;;){const o=Ll.exec(n),a=Ll.lastIndex;let c=o[1];const h=o[2]==="]",d=o[3];if(h&&(c=c|0),d===void 0||d==="["&&a+2===r){ld(e,d===void 0?new Iy(c,i,t):new Uy(c,i,t));break}else{let f=e.map[c];f===void 0&&(f=new Ny(c),ld(e,f)),e=f}}}class ia{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const o=t.getActiveUniform(e,r),a=t.getUniformLocation(e,o.name);Fy(o,a,this)}}setValue(t,e,n,r){const o=this.map[e];o!==void 0&&o.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let o=0,a=e.length;o!==a;++o){const c=e[o],h=n[c.id];h.needsUpdate!==!1&&c.setValue(t,h.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,o=t.length;r!==o;++r){const a=t[r];a.id in e&&n.push(a)}return n}}function cd(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Oy=37297;let By=0;function ky(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let a=r;a<o;a++){const c=a+1;n.push(`${c===t?">":" "} ${c}: ${e[a]}`)}return n.join(`
`)}function Vy(i){const t=de.getPrimaries(de.workingColorSpace),e=de.getPrimaries(i);let n;switch(t===e?n="":t===da&&e===ha?n="LinearDisplayP3ToLinearSRGB":t===ha&&e===da&&(n="LinearSRGBToLinearDisplayP3"),i){case hi:case Ea:return[n,"LinearTransferOETF"];case We:case Rc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function ud(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=i.getShaderInfoLog(t).trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+ky(i.getShaderSource(t),a)}else return r}function zy(i,t){const e=Vy(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Hy(i,t){let e;switch(t){case kv:e="Linear";break;case Vv:e="Reinhard";break;case zv:e="OptimizedCineon";break;case Hv:e="ACESFilmic";break;case Wv:e="AgX";break;case Gv:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Gy(i){return[i.extensionDerivatives||!!i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.alphaToCoverage||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Yr).join(`
`)}function Wy(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Yr).join(`
`)}function Xy(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function qy(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const o=i.getActiveAttrib(t,r),a=o.name;let c=1;o.type===i.FLOAT_MAT2&&(c=2),o.type===i.FLOAT_MAT3&&(c=3),o.type===i.FLOAT_MAT4&&(c=4),e[a]={type:o.type,location:i.getAttribLocation(t,a),locationSize:c}}return e}function Yr(i){return i!==""}function hd(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function dd(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const jy=/^[ \t]*#include +<([\w\d./]+)>/gm;function ac(i){return i.replace(jy,$y)}const Yy=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function $y(i,t){let e=Qt[t];if(e===void 0){const n=Yy.get(t);if(n!==void 0)e=Qt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ac(e)}const Ky=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pd(i){return i.replace(Ky,Zy)}function Zy(i,t,e,n){let r="";for(let o=parseInt(t);o<parseInt(e);o++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function fd(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	`;return i.isWebGL2&&(t+=`precision ${i.precision} sampler3D;
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
		`),i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Qy(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===gp?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===pv?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===oi&&(t="SHADOWMAP_TYPE_VSM"),t}function Jy(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ts:case es:t="ENVMAP_TYPE_CUBE";break;case ba:t="ENVMAP_TYPE_CUBE_UV";break}return t}function tw(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case es:t="ENVMAP_MODE_REFRACTION";break}return t}function ew(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case vp:t="ENVMAP_BLENDING_MULTIPLY";break;case Ov:t="ENVMAP_BLENDING_MIX";break;case Bv:t="ENVMAP_BLENDING_ADD";break}return t}function nw(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function iw(i,t,e,n){const r=i.getContext(),o=e.defines;let a=e.vertexShader,c=e.fragmentShader;const h=Qy(e),d=Jy(e),p=tw(e),f=ew(e),m=nw(e),x=e.isWebGL2?"":Gy(e),b=Wy(e),w=Xy(o),_=r.createProgram();let v,E,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(v=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,w].filter(Yr).join(`
`),v.length>0&&(v+=`
`),E=[x,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,w].filter(Yr).join(`
`),E.length>0&&(E+=`
`)):(v=[fd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,w,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+p:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Yr).join(`
`),E=[x,fd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,w,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.envMap?"#define "+p:"",e.envMap?"#define "+f:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ii?"#define TONE_MAPPING":"",e.toneMapping!==Ii?Qt.tonemapping_pars_fragment:"",e.toneMapping!==Ii?Hy("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Qt.colorspace_pars_fragment,zy("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Yr).join(`
`)),a=ac(a),a=hd(a,e),a=dd(a,e),c=ac(c),c=hd(c,e),c=dd(c,e),a=pd(a),c=pd(c),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,v=[b,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,E=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===pa?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===pa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+E);const T=y+v+a,C=y+E+c,P=cd(r,r.VERTEX_SHADER,T),A=cd(r,r.FRAGMENT_SHADER,C);r.attachShader(_,P),r.attachShader(_,A),e.index0AttributeName!==void 0?r.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function I(V){if(i.debug.checkShaderErrors){const X=r.getProgramInfoLog(_).trim(),F=r.getShaderInfoLog(P).trim(),G=r.getShaderInfoLog(A).trim();let H=!0,W=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,P,A);else{const J=ud(r,P,"vertex"),et=ud(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+X+`
`+J+`
`+et)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(F===""||G==="")&&(W=!1);W&&(V.diagnostics={runnable:H,programLog:X,vertexShader:{log:F,prefix:v},fragmentShader:{log:G,prefix:E}})}r.deleteShader(P),r.deleteShader(A),z=new ia(r,_),M=qy(r,_)}let z;this.getUniforms=function(){return z===void 0&&I(this),z};let M;this.getAttributes=function(){return M===void 0&&I(this),M};let L=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=r.getProgramParameter(_,Oy)),L},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=By++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=P,this.fragmentShader=A,this}let rw=0;class sw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),o=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(o)===!1&&(a.add(o),o.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new ow(t),e.set(t,n)),n}}class ow{constructor(t){this.id=rw++,this.code=t,this.usedTimes=0}}function aw(i,t,e,n,r,o,a){const c=new Dc,h=new sw,d=new Set,p=[],f=r.isWebGL2,m=r.logarithmicDepthBuffer,x=r.vertexTextures;let b=r.precision;const w={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return d.add(M),M===0?"uv":`uv${M}`}function v(M,L,V,X,F){const G=X.fog,H=F.geometry,W=M.isMeshStandardMaterial?X.environment:null,J=(M.isMeshStandardMaterial?e:t).get(M.envMap||W),et=!!J&&J.mapping===ba?J.image.height:null,it=w[M.type];M.precision!==null&&(b=r.getMaxPrecision(M.precision),b!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",b,"instead."));const nt=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,pt=nt!==void 0?nt.length:0;let mt=0;H.morphAttributes.position!==void 0&&(mt=1),H.morphAttributes.normal!==void 0&&(mt=2),H.morphAttributes.color!==void 0&&(mt=3);let $,rt,wt,Rt;if(it){const Jt=Gn[it];$=Jt.vertexShader,rt=Jt.fragmentShader}else $=M.vertexShader,rt=M.fragmentShader,h.update(M),wt=h.getVertexShaderID(M),Rt=h.getFragmentShaderID(M);const Lt=i.getRenderTarget(),Et=F.isInstancedMesh===!0,zt=F.isBatchedMesh===!0,Bt=!!M.map,j=!!M.matcap,Ae=!!J,Tt=!!M.aoMap,Ht=!!M.lightMap,At=!!M.bumpMap,fe=!!M.normalMap,Wt=!!M.displacementMap,N=!!M.emissiveMap,R=!!M.metalnessMap,K=!!M.roughnessMap,ht=M.anisotropy>0,at=M.clearcoat>0,ct=M.iridescence>0,St=M.sheen>0,vt=M.transmission>0,bt=ht&&!!M.anisotropyMap,Ot=at&&!!M.clearcoatMap,Vt=at&&!!M.clearcoatNormalMap,ot=at&&!!M.clearcoatRoughnessMap,ne=ct&&!!M.iridescenceMap,Zt=ct&&!!M.iridescenceThicknessMap,Gt=St&&!!M.sheenColorMap,Ct=St&&!!M.sheenRoughnessMap,xt=!!M.specularMap,Yt=!!M.specularColorMap,B=!!M.specularIntensityMap,dt=vt&&!!M.transmissionMap,_t=vt&&!!M.thicknessMap,Pt=!!M.gradientMap,O=!!M.alphaMap,st=M.alphaTest>0,lt=!!M.alphaHash,Mt=!!M.extensions;let Nt=Ii;M.toneMapped&&(Lt===null||Lt.isXRRenderTarget===!0)&&(Nt=i.toneMapping);const te={isWebGL2:f,shaderID:it,shaderType:M.type,shaderName:M.name,vertexShader:$,fragmentShader:rt,defines:M.defines,customVertexShaderID:wt,customFragmentShaderID:Rt,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:b,batching:zt,instancing:Et,instancingColor:Et&&F.instanceColor!==null,supportsVertexTextures:x,outputColorSpace:Lt===null?i.outputColorSpace:Lt.isXRRenderTarget===!0?Lt.texture.colorSpace:hi,alphaToCoverage:!!M.alphaToCoverage,map:Bt,matcap:j,envMap:Ae,envMapMode:Ae&&J.mapping,envMapCubeUVHeight:et,aoMap:Tt,lightMap:Ht,bumpMap:At,normalMap:fe,displacementMap:x&&Wt,emissiveMap:N,normalMapObjectSpace:fe&&M.normalMapType===Zv,normalMapTangentSpace:fe&&M.normalMapType===Tp,metalnessMap:R,roughnessMap:K,anisotropy:ht,anisotropyMap:bt,clearcoat:at,clearcoatMap:Ot,clearcoatNormalMap:Vt,clearcoatRoughnessMap:ot,iridescence:ct,iridescenceMap:ne,iridescenceThicknessMap:Zt,sheen:St,sheenColorMap:Gt,sheenRoughnessMap:Ct,specularMap:xt,specularColorMap:Yt,specularIntensityMap:B,transmission:vt,transmissionMap:dt,thicknessMap:_t,gradientMap:Pt,opaque:M.transparent===!1&&M.blending===Zr&&M.alphaToCoverage===!1,alphaMap:O,alphaTest:st,alphaHash:lt,combine:M.combine,mapUv:Bt&&_(M.map.channel),aoMapUv:Tt&&_(M.aoMap.channel),lightMapUv:Ht&&_(M.lightMap.channel),bumpMapUv:At&&_(M.bumpMap.channel),normalMapUv:fe&&_(M.normalMap.channel),displacementMapUv:Wt&&_(M.displacementMap.channel),emissiveMapUv:N&&_(M.emissiveMap.channel),metalnessMapUv:R&&_(M.metalnessMap.channel),roughnessMapUv:K&&_(M.roughnessMap.channel),anisotropyMapUv:bt&&_(M.anisotropyMap.channel),clearcoatMapUv:Ot&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:Vt&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ot&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ne&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:Zt&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:Gt&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:Ct&&_(M.sheenRoughnessMap.channel),specularMapUv:xt&&_(M.specularMap.channel),specularColorMapUv:Yt&&_(M.specularColorMap.channel),specularIntensityMapUv:B&&_(M.specularIntensityMap.channel),transmissionMapUv:dt&&_(M.transmissionMap.channel),thicknessMapUv:_t&&_(M.thicknessMap.channel),alphaMapUv:O&&_(M.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(fe||ht),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!H.attributes.uv&&(Bt||O),fog:!!G,useFog:M.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:m,skinning:F.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:pt,morphTextureStride:mt,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&V.length>0,shadowMapType:i.shadowMap.type,toneMapping:Nt,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Bt&&M.map.isVideoTexture===!0&&de.getTransfer(M.map.colorSpace)===be,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===mn,flipSided:M.side===hn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:Mt&&M.extensions.derivatives===!0,extensionFragDepth:Mt&&M.extensions.fragDepth===!0,extensionDrawBuffers:Mt&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:Mt&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Mt&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Mt&&M.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionFragDepth:f||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return te.vertexUv1s=d.has(1),te.vertexUv2s=d.has(2),te.vertexUv3s=d.has(3),d.clear(),te}function E(M){const L=[];if(M.shaderID?L.push(M.shaderID):(L.push(M.customVertexShaderID),L.push(M.customFragmentShaderID)),M.defines!==void 0)for(const V in M.defines)L.push(V),L.push(M.defines[V]);return M.isRawShaderMaterial===!1&&(y(L,M),T(L,M),L.push(i.outputColorSpace)),L.push(M.customProgramCacheKey),L.join()}function y(M,L){M.push(L.precision),M.push(L.outputColorSpace),M.push(L.envMapMode),M.push(L.envMapCubeUVHeight),M.push(L.mapUv),M.push(L.alphaMapUv),M.push(L.lightMapUv),M.push(L.aoMapUv),M.push(L.bumpMapUv),M.push(L.normalMapUv),M.push(L.displacementMapUv),M.push(L.emissiveMapUv),M.push(L.metalnessMapUv),M.push(L.roughnessMapUv),M.push(L.anisotropyMapUv),M.push(L.clearcoatMapUv),M.push(L.clearcoatNormalMapUv),M.push(L.clearcoatRoughnessMapUv),M.push(L.iridescenceMapUv),M.push(L.iridescenceThicknessMapUv),M.push(L.sheenColorMapUv),M.push(L.sheenRoughnessMapUv),M.push(L.specularMapUv),M.push(L.specularColorMapUv),M.push(L.specularIntensityMapUv),M.push(L.transmissionMapUv),M.push(L.thicknessMapUv),M.push(L.combine),M.push(L.fogExp2),M.push(L.sizeAttenuation),M.push(L.morphTargetsCount),M.push(L.morphAttributeCount),M.push(L.numDirLights),M.push(L.numPointLights),M.push(L.numSpotLights),M.push(L.numSpotLightMaps),M.push(L.numHemiLights),M.push(L.numRectAreaLights),M.push(L.numDirLightShadows),M.push(L.numPointLightShadows),M.push(L.numSpotLightShadows),M.push(L.numSpotLightShadowsWithMaps),M.push(L.numLightProbes),M.push(L.shadowMapType),M.push(L.toneMapping),M.push(L.numClippingPlanes),M.push(L.numClipIntersection),M.push(L.depthPacking)}function T(M,L){c.disableAll(),L.isWebGL2&&c.enable(0),L.supportsVertexTextures&&c.enable(1),L.instancing&&c.enable(2),L.instancingColor&&c.enable(3),L.matcap&&c.enable(4),L.envMap&&c.enable(5),L.normalMapObjectSpace&&c.enable(6),L.normalMapTangentSpace&&c.enable(7),L.clearcoat&&c.enable(8),L.iridescence&&c.enable(9),L.alphaTest&&c.enable(10),L.vertexColors&&c.enable(11),L.vertexAlphas&&c.enable(12),L.vertexUv1s&&c.enable(13),L.vertexUv2s&&c.enable(14),L.vertexUv3s&&c.enable(15),L.vertexTangents&&c.enable(16),L.anisotropy&&c.enable(17),L.alphaHash&&c.enable(18),L.batching&&c.enable(19),M.push(c.mask),c.disableAll(),L.fog&&c.enable(0),L.useFog&&c.enable(1),L.flatShading&&c.enable(2),L.logarithmicDepthBuffer&&c.enable(3),L.skinning&&c.enable(4),L.morphTargets&&c.enable(5),L.morphNormals&&c.enable(6),L.morphColors&&c.enable(7),L.premultipliedAlpha&&c.enable(8),L.shadowMapEnabled&&c.enable(9),L.useLegacyLights&&c.enable(10),L.doubleSided&&c.enable(11),L.flipSided&&c.enable(12),L.useDepthPacking&&c.enable(13),L.dithering&&c.enable(14),L.transmission&&c.enable(15),L.sheen&&c.enable(16),L.opaque&&c.enable(17),L.pointsUvs&&c.enable(18),L.decodeVideoTexture&&c.enable(19),L.alphaToCoverage&&c.enable(20),M.push(c.mask)}function C(M){const L=w[M.type];let V;if(L){const X=Gn[L];V=G_.clone(X.uniforms)}else V=M.uniforms;return V}function P(M,L){let V;for(let X=0,F=p.length;X<F;X++){const G=p[X];if(G.cacheKey===L){V=G,++V.usedTimes;break}}return V===void 0&&(V=new iw(i,L,M,o),p.push(V)),V}function A(M){if(--M.usedTimes===0){const L=p.indexOf(M);p[L]=p[p.length-1],p.pop(),M.destroy()}}function I(M){h.remove(M)}function z(){h.dispose()}return{getParameters:v,getProgramCacheKey:E,getUniforms:C,acquireProgram:P,releaseProgram:A,releaseShaderCache:I,programs:p,dispose:z}}function lw(){let i=new WeakMap;function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function e(o){i.delete(o)}function n(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:r}}function cw(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function md(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function gd(){const i=[];let t=0;const e=[],n=[],r=[];function o(){t=0,e.length=0,n.length=0,r.length=0}function a(f,m,x,b,w,_){let v=i[t];return v===void 0?(v={id:f.id,object:f,geometry:m,material:x,groupOrder:b,renderOrder:f.renderOrder,z:w,group:_},i[t]=v):(v.id=f.id,v.object=f,v.geometry=m,v.material=x,v.groupOrder=b,v.renderOrder=f.renderOrder,v.z=w,v.group=_),t++,v}function c(f,m,x,b,w,_){const v=a(f,m,x,b,w,_);x.transmission>0?n.push(v):x.transparent===!0?r.push(v):e.push(v)}function h(f,m,x,b,w,_){const v=a(f,m,x,b,w,_);x.transmission>0?n.unshift(v):x.transparent===!0?r.unshift(v):e.unshift(v)}function d(f,m){e.length>1&&e.sort(f||cw),n.length>1&&n.sort(m||md),r.length>1&&r.sort(m||md)}function p(){for(let f=t,m=i.length;f<m;f++){const x=i[f];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:e,transmissive:n,transparent:r,init:o,push:c,unshift:h,finish:p,sort:d}}function uw(){let i=new WeakMap;function t(n,r){const o=i.get(n);let a;return o===void 0?(a=new gd,i.set(n,[a])):r>=o.length?(a=new gd,o.push(a)):a=o[r],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function hw(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new U,color:new se};break;case"SpotLight":e={position:new U,direction:new U,color:new se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new se,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new se,groundColor:new se};break;case"RectAreaLight":e={color:new se,position:new U,halfWidth:new U,halfHeight:new U};break}return i[t.id]=e,e}}}function dw(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let pw=0;function fw(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function mw(i,t){const e=new hw,n=dw(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new U);const o=new U,a=new ue,c=new ue;function h(p,f){let m=0,x=0,b=0;for(let V=0;V<9;V++)r.probe[V].set(0,0,0);let w=0,_=0,v=0,E=0,y=0,T=0,C=0,P=0,A=0,I=0,z=0;p.sort(fw);const M=f===!0?Math.PI:1;for(let V=0,X=p.length;V<X;V++){const F=p[V],G=F.color,H=F.intensity,W=F.distance,J=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)m+=G.r*H*M,x+=G.g*H*M,b+=G.b*H*M;else if(F.isLightProbe){for(let et=0;et<9;et++)r.probe[et].addScaledVector(F.sh.coefficients[et],H);z++}else if(F.isDirectionalLight){const et=e.get(F);if(et.color.copy(F.color).multiplyScalar(F.intensity*M),F.castShadow){const it=F.shadow,nt=n.get(F);nt.shadowBias=it.bias,nt.shadowNormalBias=it.normalBias,nt.shadowRadius=it.radius,nt.shadowMapSize=it.mapSize,r.directionalShadow[w]=nt,r.directionalShadowMap[w]=J,r.directionalShadowMatrix[w]=F.shadow.matrix,T++}r.directional[w]=et,w++}else if(F.isSpotLight){const et=e.get(F);et.position.setFromMatrixPosition(F.matrixWorld),et.color.copy(G).multiplyScalar(H*M),et.distance=W,et.coneCos=Math.cos(F.angle),et.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),et.decay=F.decay,r.spot[v]=et;const it=F.shadow;if(F.map&&(r.spotLightMap[A]=F.map,A++,it.updateMatrices(F),F.castShadow&&I++),r.spotLightMatrix[v]=it.matrix,F.castShadow){const nt=n.get(F);nt.shadowBias=it.bias,nt.shadowNormalBias=it.normalBias,nt.shadowRadius=it.radius,nt.shadowMapSize=it.mapSize,r.spotShadow[v]=nt,r.spotShadowMap[v]=J,P++}v++}else if(F.isRectAreaLight){const et=e.get(F);et.color.copy(G).multiplyScalar(H),et.halfWidth.set(F.width*.5,0,0),et.halfHeight.set(0,F.height*.5,0),r.rectArea[E]=et,E++}else if(F.isPointLight){const et=e.get(F);if(et.color.copy(F.color).multiplyScalar(F.intensity*M),et.distance=F.distance,et.decay=F.decay,F.castShadow){const it=F.shadow,nt=n.get(F);nt.shadowBias=it.bias,nt.shadowNormalBias=it.normalBias,nt.shadowRadius=it.radius,nt.shadowMapSize=it.mapSize,nt.shadowCameraNear=it.camera.near,nt.shadowCameraFar=it.camera.far,r.pointShadow[_]=nt,r.pointShadowMap[_]=J,r.pointShadowMatrix[_]=F.shadow.matrix,C++}r.point[_]=et,_++}else if(F.isHemisphereLight){const et=e.get(F);et.skyColor.copy(F.color).multiplyScalar(H*M),et.groundColor.copy(F.groundColor).multiplyScalar(H*M),r.hemi[y]=et,y++}}E>0&&(t.isWebGL2?i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=gt.LTC_FLOAT_1,r.rectAreaLTC2=gt.LTC_FLOAT_2):(r.rectAreaLTC1=gt.LTC_HALF_1,r.rectAreaLTC2=gt.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=gt.LTC_FLOAT_1,r.rectAreaLTC2=gt.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=gt.LTC_HALF_1,r.rectAreaLTC2=gt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=m,r.ambient[1]=x,r.ambient[2]=b;const L=r.hash;(L.directionalLength!==w||L.pointLength!==_||L.spotLength!==v||L.rectAreaLength!==E||L.hemiLength!==y||L.numDirectionalShadows!==T||L.numPointShadows!==C||L.numSpotShadows!==P||L.numSpotMaps!==A||L.numLightProbes!==z)&&(r.directional.length=w,r.spot.length=v,r.rectArea.length=E,r.point.length=_,r.hemi.length=y,r.directionalShadow.length=T,r.directionalShadowMap.length=T,r.pointShadow.length=C,r.pointShadowMap.length=C,r.spotShadow.length=P,r.spotShadowMap.length=P,r.directionalShadowMatrix.length=T,r.pointShadowMatrix.length=C,r.spotLightMatrix.length=P+A-I,r.spotLightMap.length=A,r.numSpotLightShadowsWithMaps=I,r.numLightProbes=z,L.directionalLength=w,L.pointLength=_,L.spotLength=v,L.rectAreaLength=E,L.hemiLength=y,L.numDirectionalShadows=T,L.numPointShadows=C,L.numSpotShadows=P,L.numSpotMaps=A,L.numLightProbes=z,r.version=pw++)}function d(p,f){let m=0,x=0,b=0,w=0,_=0;const v=f.matrixWorldInverse;for(let E=0,y=p.length;E<y;E++){const T=p[E];if(T.isDirectionalLight){const C=r.directional[m];C.direction.setFromMatrixPosition(T.matrixWorld),o.setFromMatrixPosition(T.target.matrixWorld),C.direction.sub(o),C.direction.transformDirection(v),m++}else if(T.isSpotLight){const C=r.spot[b];C.position.setFromMatrixPosition(T.matrixWorld),C.position.applyMatrix4(v),C.direction.setFromMatrixPosition(T.matrixWorld),o.setFromMatrixPosition(T.target.matrixWorld),C.direction.sub(o),C.direction.transformDirection(v),b++}else if(T.isRectAreaLight){const C=r.rectArea[w];C.position.setFromMatrixPosition(T.matrixWorld),C.position.applyMatrix4(v),c.identity(),a.copy(T.matrixWorld),a.premultiply(v),c.extractRotation(a),C.halfWidth.set(T.width*.5,0,0),C.halfHeight.set(0,T.height*.5,0),C.halfWidth.applyMatrix4(c),C.halfHeight.applyMatrix4(c),w++}else if(T.isPointLight){const C=r.point[x];C.position.setFromMatrixPosition(T.matrixWorld),C.position.applyMatrix4(v),x++}else if(T.isHemisphereLight){const C=r.hemi[_];C.direction.setFromMatrixPosition(T.matrixWorld),C.direction.transformDirection(v),_++}}}return{setup:h,setupView:d,state:r}}function vd(i,t){const e=new mw(i,t),n=[],r=[];function o(){n.length=0,r.length=0}function a(f){n.push(f)}function c(f){r.push(f)}function h(f){e.setup(n,f)}function d(f){e.setupView(n,f)}return{init:o,state:{lightsArray:n,shadowsArray:r,lights:e},setupLights:h,setupLightsView:d,pushLight:a,pushShadow:c}}function gw(i,t){let e=new WeakMap;function n(o,a=0){const c=e.get(o);let h;return c===void 0?(h=new vd(i,t),e.set(o,[h])):a>=c.length?(h=new vd(i,t),c.push(h)):h=c[a],h}function r(){e=new WeakMap}return{get:n,dispose:r}}class vw extends ss{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$v,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class _w extends ss{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const xw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,bw=`uniform sampler2D shadow_pass;
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
}`;function yw(i,t,e){let n=new Ic;const r=new It,o=new It,a=new ve,c=new vw({depthPacking:Kv}),h=new _w,d={},p=e.maxTextureSize,f={[Xn]:hn,[hn]:Xn,[mn]:mn},m=new rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new It},radius:{value:4}},vertexShader:xw,fragmentShader:bw}),x=m.clone();x.defines.HORIZONTAL_PASS=1;const b=new nn;b.setAttribute("position",new en(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new ft(b,m),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=gp;let v=this.type;this.render=function(P,A,I){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||P.length===0)return;const z=i.getRenderTarget(),M=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),V=i.state;V.setBlending(Dn),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const X=v!==oi&&this.type===oi,F=v===oi&&this.type!==oi;for(let G=0,H=P.length;G<H;G++){const W=P[G],J=W.shadow;if(J===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;r.copy(J.mapSize);const et=J.getFrameExtents();if(r.multiply(et),o.copy(J.mapSize),(r.x>p||r.y>p)&&(r.x>p&&(o.x=Math.floor(p/et.x),r.x=o.x*et.x,J.mapSize.x=o.x),r.y>p&&(o.y=Math.floor(p/et.y),r.y=o.y*et.y,J.mapSize.y=o.y)),J.map===null||X===!0||F===!0){const nt=this.type!==oi?{minFilter:pe,magFilter:pe}:{};J.map!==null&&J.map.dispose(),J.map=new In(r.x,r.y,nt),J.map.texture.name=W.name+".shadowMap",J.camera.updateProjectionMatrix()}i.setRenderTarget(J.map),i.clear();const it=J.getViewportCount();for(let nt=0;nt<it;nt++){const pt=J.getViewport(nt);a.set(o.x*pt.x,o.y*pt.y,o.x*pt.z,o.y*pt.w),V.viewport(a),J.updateMatrices(W,nt),n=J.getFrustum(),T(A,I,J.camera,W,this.type)}J.isPointLightShadow!==!0&&this.type===oi&&E(J,I),J.needsUpdate=!1}v=this.type,_.needsUpdate=!1,i.setRenderTarget(z,M,L)};function E(P,A){const I=t.update(w);m.defines.VSM_SAMPLES!==P.blurSamples&&(m.defines.VSM_SAMPLES=P.blurSamples,x.defines.VSM_SAMPLES=P.blurSamples,m.needsUpdate=!0,x.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new In(r.x,r.y)),m.uniforms.shadow_pass.value=P.map.texture,m.uniforms.resolution.value=P.mapSize,m.uniforms.radius.value=P.radius,i.setRenderTarget(P.mapPass),i.clear(),i.renderBufferDirect(A,null,I,m,w,null),x.uniforms.shadow_pass.value=P.mapPass.texture,x.uniforms.resolution.value=P.mapSize,x.uniforms.radius.value=P.radius,i.setRenderTarget(P.map),i.clear(),i.renderBufferDirect(A,null,I,x,w,null)}function y(P,A,I,z){let M=null;const L=I.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(L!==void 0)M=L;else if(M=I.isPointLight===!0?h:c,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const V=M.uuid,X=A.uuid;let F=d[V];F===void 0&&(F={},d[V]=F);let G=F[X];G===void 0&&(G=M.clone(),F[X]=G,A.addEventListener("dispose",C)),M=G}if(M.visible=A.visible,M.wireframe=A.wireframe,z===oi?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:f[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,I.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const V=i.properties.get(M);V.light=I}return M}function T(P,A,I,z,M){if(P.visible===!1)return;if(P.layers.test(A.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&M===oi)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,P.matrixWorld);const X=t.update(P),F=P.material;if(Array.isArray(F)){const G=X.groups;for(let H=0,W=G.length;H<W;H++){const J=G[H],et=F[J.materialIndex];if(et&&et.visible){const it=y(P,et,z,M);P.onBeforeShadow(i,P,A,I,X,it,J),i.renderBufferDirect(I,null,X,it,P,J),P.onAfterShadow(i,P,A,I,X,it,J)}}}else if(F.visible){const G=y(P,F,z,M);P.onBeforeShadow(i,P,A,I,X,G,null),i.renderBufferDirect(I,null,X,G,P,null),P.onAfterShadow(i,P,A,I,X,G,null)}}const V=P.children;for(let X=0,F=V.length;X<F;X++)T(V[X],A,I,z,M)}function C(P){P.target.removeEventListener("dispose",C);for(const I in d){const z=d[I],M=P.target.uuid;M in z&&(z[M].dispose(),delete z[M])}}}function ww(i,t,e){const n=e.isWebGL2;function r(){let O=!1;const st=new ve;let lt=null;const Mt=new ve(0,0,0,0);return{setMask:function(Nt){lt!==Nt&&!O&&(i.colorMask(Nt,Nt,Nt,Nt),lt=Nt)},setLocked:function(Nt){O=Nt},setClear:function(Nt,te,Jt,ae,Le){Le===!0&&(Nt*=ae,te*=ae,Jt*=ae),st.set(Nt,te,Jt,ae),Mt.equals(st)===!1&&(i.clearColor(Nt,te,Jt,ae),Mt.copy(st))},reset:function(){O=!1,lt=null,Mt.set(-1,0,0,0)}}}function o(){let O=!1,st=null,lt=null,Mt=null;return{setTest:function(Nt){Nt?Et(i.DEPTH_TEST):zt(i.DEPTH_TEST)},setMask:function(Nt){st!==Nt&&!O&&(i.depthMask(Nt),st=Nt)},setFunc:function(Nt){if(lt!==Nt){switch(Nt){case Rv:i.depthFunc(i.NEVER);break;case Lv:i.depthFunc(i.ALWAYS);break;case Dv:i.depthFunc(i.LESS);break;case ca:i.depthFunc(i.LEQUAL);break;case Iv:i.depthFunc(i.EQUAL);break;case Uv:i.depthFunc(i.GEQUAL);break;case Nv:i.depthFunc(i.GREATER);break;case Fv:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}lt=Nt}},setLocked:function(Nt){O=Nt},setClear:function(Nt){Mt!==Nt&&(i.clearDepth(Nt),Mt=Nt)},reset:function(){O=!1,st=null,lt=null,Mt=null}}}function a(){let O=!1,st=null,lt=null,Mt=null,Nt=null,te=null,Jt=null,ae=null,Le=null;return{setTest:function(re){O||(re?Et(i.STENCIL_TEST):zt(i.STENCIL_TEST))},setMask:function(re){st!==re&&!O&&(i.stencilMask(re),st=re)},setFunc:function(re,Ce,je){(lt!==re||Mt!==Ce||Nt!==je)&&(i.stencilFunc(re,Ce,je),lt=re,Mt=Ce,Nt=je)},setOp:function(re,Ce,je){(te!==re||Jt!==Ce||ae!==je)&&(i.stencilOp(re,Ce,je),te=re,Jt=Ce,ae=je)},setLocked:function(re){O=re},setClear:function(re){Le!==re&&(i.clearStencil(re),Le=re)},reset:function(){O=!1,st=null,lt=null,Mt=null,Nt=null,te=null,Jt=null,ae=null,Le=null}}}const c=new r,h=new o,d=new a,p=new WeakMap,f=new WeakMap;let m={},x={},b=new WeakMap,w=[],_=null,v=!1,E=null,y=null,T=null,C=null,P=null,A=null,I=null,z=new se(0,0,0),M=0,L=!1,V=null,X=null,F=null,G=null,H=null;const W=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,et=0;const it=i.getParameter(i.VERSION);it.indexOf("WebGL")!==-1?(et=parseFloat(/^WebGL (\d)/.exec(it)[1]),J=et>=1):it.indexOf("OpenGL ES")!==-1&&(et=parseFloat(/^OpenGL ES (\d)/.exec(it)[1]),J=et>=2);let nt=null,pt={};const mt=i.getParameter(i.SCISSOR_BOX),$=i.getParameter(i.VIEWPORT),rt=new ve().fromArray(mt),wt=new ve().fromArray($);function Rt(O,st,lt,Mt){const Nt=new Uint8Array(4),te=i.createTexture();i.bindTexture(O,te),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Jt=0;Jt<lt;Jt++)n&&(O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY)?i.texImage3D(st,0,i.RGBA,1,1,Mt,0,i.RGBA,i.UNSIGNED_BYTE,Nt):i.texImage2D(st+Jt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Nt);return te}const Lt={};Lt[i.TEXTURE_2D]=Rt(i.TEXTURE_2D,i.TEXTURE_2D,1),Lt[i.TEXTURE_CUBE_MAP]=Rt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Lt[i.TEXTURE_2D_ARRAY]=Rt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Lt[i.TEXTURE_3D]=Rt(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),c.setClear(0,0,0,1),h.setClear(1),d.setClear(0),Et(i.DEPTH_TEST),h.setFunc(ca),Wt(!1),N(Zu),Et(i.CULL_FACE),At(Dn);function Et(O){m[O]!==!0&&(i.enable(O),m[O]=!0)}function zt(O){m[O]!==!1&&(i.disable(O),m[O]=!1)}function Bt(O,st){return x[O]!==st?(i.bindFramebuffer(O,st),x[O]=st,n&&(O===i.DRAW_FRAMEBUFFER&&(x[i.FRAMEBUFFER]=st),O===i.FRAMEBUFFER&&(x[i.DRAW_FRAMEBUFFER]=st)),!0):!1}function j(O,st){let lt=w,Mt=!1;if(O)if(lt=b.get(st),lt===void 0&&(lt=[],b.set(st,lt)),O.isWebGLMultipleRenderTargets){const Nt=O.texture;if(lt.length!==Nt.length||lt[0]!==i.COLOR_ATTACHMENT0){for(let te=0,Jt=Nt.length;te<Jt;te++)lt[te]=i.COLOR_ATTACHMENT0+te;lt.length=Nt.length,Mt=!0}}else lt[0]!==i.COLOR_ATTACHMENT0&&(lt[0]=i.COLOR_ATTACHMENT0,Mt=!0);else lt[0]!==i.BACK&&(lt[0]=i.BACK,Mt=!0);Mt&&(e.isWebGL2?i.drawBuffers(lt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(lt))}function Ae(O){return _!==O?(i.useProgram(O),_=O,!0):!1}const Tt={[Ki]:i.FUNC_ADD,[mv]:i.FUNC_SUBTRACT,[gv]:i.FUNC_REVERSE_SUBTRACT};if(n)Tt[eh]=i.MIN,Tt[nh]=i.MAX;else{const O=t.get("EXT_blend_minmax");O!==null&&(Tt[eh]=O.MIN_EXT,Tt[nh]=O.MAX_EXT)}const Ht={[vv]:i.ZERO,[_v]:i.ONE,[xv]:i.SRC_COLOR,[Ql]:i.SRC_ALPHA,[Sv]:i.SRC_ALPHA_SATURATE,[Ev]:i.DST_COLOR,[yv]:i.DST_ALPHA,[bv]:i.ONE_MINUS_SRC_COLOR,[Jl]:i.ONE_MINUS_SRC_ALPHA,[Mv]:i.ONE_MINUS_DST_COLOR,[wv]:i.ONE_MINUS_DST_ALPHA,[Tv]:i.CONSTANT_COLOR,[Av]:i.ONE_MINUS_CONSTANT_COLOR,[Cv]:i.CONSTANT_ALPHA,[Pv]:i.ONE_MINUS_CONSTANT_ALPHA};function At(O,st,lt,Mt,Nt,te,Jt,ae,Le,re){if(O===Dn){v===!0&&(zt(i.BLEND),v=!1);return}if(v===!1&&(Et(i.BLEND),v=!0),O!==fv){if(O!==E||re!==L){if((y!==Ki||P!==Ki)&&(i.blendEquation(i.FUNC_ADD),y=Ki,P=Ki),re)switch(O){case Zr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Qu:i.blendFunc(i.ONE,i.ONE);break;case Ju:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case th:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Zr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Qu:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ju:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case th:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}T=null,C=null,A=null,I=null,z.set(0,0,0),M=0,E=O,L=re}return}Nt=Nt||st,te=te||lt,Jt=Jt||Mt,(st!==y||Nt!==P)&&(i.blendEquationSeparate(Tt[st],Tt[Nt]),y=st,P=Nt),(lt!==T||Mt!==C||te!==A||Jt!==I)&&(i.blendFuncSeparate(Ht[lt],Ht[Mt],Ht[te],Ht[Jt]),T=lt,C=Mt,A=te,I=Jt),(ae.equals(z)===!1||Le!==M)&&(i.blendColor(ae.r,ae.g,ae.b,Le),z.copy(ae),M=Le),E=O,L=!1}function fe(O,st){O.side===mn?zt(i.CULL_FACE):Et(i.CULL_FACE);let lt=O.side===hn;st&&(lt=!lt),Wt(lt),O.blending===Zr&&O.transparent===!1?At(Dn):At(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),h.setFunc(O.depthFunc),h.setTest(O.depthTest),h.setMask(O.depthWrite),c.setMask(O.colorWrite);const Mt=O.stencilWrite;d.setTest(Mt),Mt&&(d.setMask(O.stencilWriteMask),d.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),d.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),K(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?Et(i.SAMPLE_ALPHA_TO_COVERAGE):zt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Wt(O){V!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),V=O)}function N(O){O!==hv?(Et(i.CULL_FACE),O!==X&&(O===Zu?i.cullFace(i.BACK):O===dv?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):zt(i.CULL_FACE),X=O}function R(O){O!==F&&(J&&i.lineWidth(O),F=O)}function K(O,st,lt){O?(Et(i.POLYGON_OFFSET_FILL),(G!==st||H!==lt)&&(i.polygonOffset(st,lt),G=st,H=lt)):zt(i.POLYGON_OFFSET_FILL)}function ht(O){O?Et(i.SCISSOR_TEST):zt(i.SCISSOR_TEST)}function at(O){O===void 0&&(O=i.TEXTURE0+W-1),nt!==O&&(i.activeTexture(O),nt=O)}function ct(O,st,lt){lt===void 0&&(nt===null?lt=i.TEXTURE0+W-1:lt=nt);let Mt=pt[lt];Mt===void 0&&(Mt={type:void 0,texture:void 0},pt[lt]=Mt),(Mt.type!==O||Mt.texture!==st)&&(nt!==lt&&(i.activeTexture(lt),nt=lt),i.bindTexture(O,st||Lt[O]),Mt.type=O,Mt.texture=st)}function St(){const O=pt[nt];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function vt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function bt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ot(){try{i.texSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Vt(){try{i.texSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ot(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ne(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Zt(){try{i.texStorage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Gt(){try{i.texStorage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ct(){try{i.texImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function xt(){try{i.texImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Yt(O){rt.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),rt.copy(O))}function B(O){wt.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),wt.copy(O))}function dt(O,st){let lt=f.get(st);lt===void 0&&(lt=new WeakMap,f.set(st,lt));let Mt=lt.get(O);Mt===void 0&&(Mt=i.getUniformBlockIndex(st,O.name),lt.set(O,Mt))}function _t(O,st){const Mt=f.get(st).get(O);p.get(st)!==Mt&&(i.uniformBlockBinding(st,Mt,O.__bindingPointIndex),p.set(st,Mt))}function Pt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),m={},nt=null,pt={},x={},b=new WeakMap,w=[],_=null,v=!1,E=null,y=null,T=null,C=null,P=null,A=null,I=null,z=new se(0,0,0),M=0,L=!1,V=null,X=null,F=null,G=null,H=null,rt.set(0,0,i.canvas.width,i.canvas.height),wt.set(0,0,i.canvas.width,i.canvas.height),c.reset(),h.reset(),d.reset()}return{buffers:{color:c,depth:h,stencil:d},enable:Et,disable:zt,bindFramebuffer:Bt,drawBuffers:j,useProgram:Ae,setBlending:At,setMaterial:fe,setFlipSided:Wt,setCullFace:N,setLineWidth:R,setPolygonOffset:K,setScissorTest:ht,activeTexture:at,bindTexture:ct,unbindTexture:St,compressedTexImage2D:vt,compressedTexImage3D:bt,texImage2D:Ct,texImage3D:xt,updateUBOMapping:dt,uniformBlockBinding:_t,texStorage2D:Zt,texStorage3D:Gt,texSubImage2D:Ot,texSubImage3D:Vt,compressedTexSubImage2D:ot,compressedTexSubImage3D:ne,scissor:Yt,viewport:B,reset:Pt}}function Ew(i,t,e,n,r,o,a){const c=r.isWebGL2,h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new WeakMap;let f;const m=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(N,R){return x?new OffscreenCanvas(N,R):ga("canvas")}function w(N,R,K,ht){let at=1;if((N.width>ht||N.height>ht)&&(at=ht/Math.max(N.width,N.height)),at<1||R===!0)if(typeof HTMLImageElement!="undefined"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&N instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&N instanceof ImageBitmap){const ct=R?ma:Math.floor,St=ct(at*N.width),vt=ct(at*N.height);f===void 0&&(f=b(St,vt));const bt=K?b(St,vt):f;return bt.width=St,bt.height=vt,bt.getContext("2d").drawImage(N,0,0,St,vt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+N.width+"x"+N.height+") to ("+St+"x"+vt+")."),bt}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+N.width+"x"+N.height+")."),N;return N}function _(N){return oc(N.width)&&oc(N.height)}function v(N){return c?!1:N.wrapS!==yn||N.wrapT!==yn||N.minFilter!==pe&&N.minFilter!==Ie}function E(N,R){return N.generateMipmaps&&R&&N.minFilter!==pe&&N.minFilter!==Ie}function y(N){i.generateMipmap(N)}function T(N,R,K,ht,at=!1){if(c===!1)return R;if(N!==null){if(i[N]!==void 0)return i[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let ct=R;if(R===i.RED&&(K===i.FLOAT&&(ct=i.R32F),K===i.HALF_FLOAT&&(ct=i.R16F),K===i.UNSIGNED_BYTE&&(ct=i.R8)),R===i.RED_INTEGER&&(K===i.UNSIGNED_BYTE&&(ct=i.R8UI),K===i.UNSIGNED_SHORT&&(ct=i.R16UI),K===i.UNSIGNED_INT&&(ct=i.R32UI),K===i.BYTE&&(ct=i.R8I),K===i.SHORT&&(ct=i.R16I),K===i.INT&&(ct=i.R32I)),R===i.RG&&(K===i.FLOAT&&(ct=i.RG32F),K===i.HALF_FLOAT&&(ct=i.RG16F),K===i.UNSIGNED_BYTE&&(ct=i.RG8)),R===i.RGBA){const St=at?ua:de.getTransfer(ht);K===i.FLOAT&&(ct=i.RGBA32F),K===i.HALF_FLOAT&&(ct=i.RGBA16F),K===i.UNSIGNED_BYTE&&(ct=St===be?i.SRGB8_ALPHA8:i.RGBA8),K===i.UNSIGNED_SHORT_4_4_4_4&&(ct=i.RGBA4),K===i.UNSIGNED_SHORT_5_5_5_1&&(ct=i.RGB5_A1)}return(ct===i.R16F||ct===i.R32F||ct===i.RG16F||ct===i.RG32F||ct===i.RGBA16F||ct===i.RGBA32F)&&t.get("EXT_color_buffer_float"),ct}function C(N,R,K){return E(N,K)===!0||N.isFramebufferTexture&&N.minFilter!==pe&&N.minFilter!==Ie?Math.log2(Math.max(R.width,R.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?R.mipmaps.length:1}function P(N){return N===pe||N===ih||N===Ms?i.NEAREST:i.LINEAR}function A(N){const R=N.target;R.removeEventListener("dispose",A),z(R),R.isVideoTexture&&p.delete(R)}function I(N){const R=N.target;R.removeEventListener("dispose",I),L(R)}function z(N){const R=n.get(N);if(R.__webglInit===void 0)return;const K=N.source,ht=m.get(K);if(ht){const at=ht[R.__cacheKey];at.usedTimes--,at.usedTimes===0&&M(N),Object.keys(ht).length===0&&m.delete(K)}n.remove(N)}function M(N){const R=n.get(N);i.deleteTexture(R.__webglTexture);const K=N.source,ht=m.get(K);delete ht[R.__cacheKey],a.memory.textures--}function L(N){const R=N.texture,K=n.get(N),ht=n.get(R);if(ht.__webglTexture!==void 0&&(i.deleteTexture(ht.__webglTexture),a.memory.textures--),N.depthTexture&&N.depthTexture.dispose(),N.isWebGLCubeRenderTarget)for(let at=0;at<6;at++){if(Array.isArray(K.__webglFramebuffer[at]))for(let ct=0;ct<K.__webglFramebuffer[at].length;ct++)i.deleteFramebuffer(K.__webglFramebuffer[at][ct]);else i.deleteFramebuffer(K.__webglFramebuffer[at]);K.__webglDepthbuffer&&i.deleteRenderbuffer(K.__webglDepthbuffer[at])}else{if(Array.isArray(K.__webglFramebuffer))for(let at=0;at<K.__webglFramebuffer.length;at++)i.deleteFramebuffer(K.__webglFramebuffer[at]);else i.deleteFramebuffer(K.__webglFramebuffer);if(K.__webglDepthbuffer&&i.deleteRenderbuffer(K.__webglDepthbuffer),K.__webglMultisampledFramebuffer&&i.deleteFramebuffer(K.__webglMultisampledFramebuffer),K.__webglColorRenderbuffer)for(let at=0;at<K.__webglColorRenderbuffer.length;at++)K.__webglColorRenderbuffer[at]&&i.deleteRenderbuffer(K.__webglColorRenderbuffer[at]);K.__webglDepthRenderbuffer&&i.deleteRenderbuffer(K.__webglDepthRenderbuffer)}if(N.isWebGLMultipleRenderTargets)for(let at=0,ct=R.length;at<ct;at++){const St=n.get(R[at]);St.__webglTexture&&(i.deleteTexture(St.__webglTexture),a.memory.textures--),n.remove(R[at])}n.remove(R),n.remove(N)}let V=0;function X(){V=0}function F(){const N=V;return N>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+r.maxTextures),V+=1,N}function G(N){const R=[];return R.push(N.wrapS),R.push(N.wrapT),R.push(N.wrapR||0),R.push(N.magFilter),R.push(N.minFilter),R.push(N.anisotropy),R.push(N.internalFormat),R.push(N.format),R.push(N.type),R.push(N.generateMipmaps),R.push(N.premultiplyAlpha),R.push(N.flipY),R.push(N.unpackAlignment),R.push(N.colorSpace),R.join()}function H(N,R){const K=n.get(N);if(N.isVideoTexture&&fe(N),N.isRenderTargetTexture===!1&&N.version>0&&K.__version!==N.version){const ht=N.image;if(ht===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ht.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{rt(K,N,R);return}}e.bindTexture(i.TEXTURE_2D,K.__webglTexture,i.TEXTURE0+R)}function W(N,R){const K=n.get(N);if(N.version>0&&K.__version!==N.version){rt(K,N,R);return}e.bindTexture(i.TEXTURE_2D_ARRAY,K.__webglTexture,i.TEXTURE0+R)}function J(N,R){const K=n.get(N);if(N.version>0&&K.__version!==N.version){rt(K,N,R);return}e.bindTexture(i.TEXTURE_3D,K.__webglTexture,i.TEXTURE0+R)}function et(N,R){const K=n.get(N);if(N.version>0&&K.__version!==N.version){wt(K,N,R);return}e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture,i.TEXTURE0+R)}const it={[nc]:i.REPEAT,[yn]:i.CLAMP_TO_EDGE,[ic]:i.MIRRORED_REPEAT},nt={[pe]:i.NEAREST,[ih]:i.NEAREST_MIPMAP_NEAREST,[Ms]:i.NEAREST_MIPMAP_LINEAR,[Ie]:i.LINEAR,[rl]:i.LINEAR_MIPMAP_NEAREST,[tr]:i.LINEAR_MIPMAP_LINEAR},pt={[Qv]:i.NEVER,[r_]:i.ALWAYS,[Jv]:i.LESS,[Ap]:i.LEQUAL,[t_]:i.EQUAL,[i_]:i.GEQUAL,[e_]:i.GREATER,[n_]:i.NOTEQUAL};function mt(N,R,K){if(R.type===ge&&t.has("OES_texture_float_linear")===!1&&(R.magFilter===Ie||R.magFilter===rl||R.magFilter===Ms||R.magFilter===tr||R.minFilter===Ie||R.minFilter===rl||R.minFilter===Ms||R.minFilter===tr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),K?(i.texParameteri(N,i.TEXTURE_WRAP_S,it[R.wrapS]),i.texParameteri(N,i.TEXTURE_WRAP_T,it[R.wrapT]),(N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY)&&i.texParameteri(N,i.TEXTURE_WRAP_R,it[R.wrapR]),i.texParameteri(N,i.TEXTURE_MAG_FILTER,nt[R.magFilter]),i.texParameteri(N,i.TEXTURE_MIN_FILTER,nt[R.minFilter])):(i.texParameteri(N,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(N,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY)&&i.texParameteri(N,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(R.wrapS!==yn||R.wrapT!==yn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(N,i.TEXTURE_MAG_FILTER,P(R.magFilter)),i.texParameteri(N,i.TEXTURE_MIN_FILTER,P(R.minFilter)),R.minFilter!==pe&&R.minFilter!==Ie&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),R.compareFunction&&(i.texParameteri(N,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(N,i.TEXTURE_COMPARE_FUNC,pt[R.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const ht=t.get("EXT_texture_filter_anisotropic");if(R.magFilter===pe||R.minFilter!==Ms&&R.minFilter!==tr||R.type===ge&&t.has("OES_texture_float_linear")===!1||c===!1&&R.type===qn&&t.has("OES_texture_half_float_linear")===!1)return;(R.anisotropy>1||n.get(R).__currentAnisotropy)&&(i.texParameterf(N,ht.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,r.getMaxAnisotropy())),n.get(R).__currentAnisotropy=R.anisotropy)}}function $(N,R){let K=!1;N.__webglInit===void 0&&(N.__webglInit=!0,R.addEventListener("dispose",A));const ht=R.source;let at=m.get(ht);at===void 0&&(at={},m.set(ht,at));const ct=G(R);if(ct!==N.__cacheKey){at[ct]===void 0&&(at[ct]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,K=!0),at[ct].usedTimes++;const St=at[N.__cacheKey];St!==void 0&&(at[N.__cacheKey].usedTimes--,St.usedTimes===0&&M(R)),N.__cacheKey=ct,N.__webglTexture=at[ct].texture}return K}function rt(N,R,K){let ht=i.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(ht=i.TEXTURE_2D_ARRAY),R.isData3DTexture&&(ht=i.TEXTURE_3D);const at=$(N,R),ct=R.source;e.bindTexture(ht,N.__webglTexture,i.TEXTURE0+K);const St=n.get(ct);if(ct.version!==St.__version||at===!0){e.activeTexture(i.TEXTURE0+K);const vt=de.getPrimaries(de.workingColorSpace),bt=R.colorSpace===Pn?null:de.getPrimaries(R.colorSpace),Ot=R.colorSpace===Pn||vt===bt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,R.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,R.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ot);const Vt=v(R)&&_(R.image)===!1;let ot=w(R.image,Vt,!1,r.maxTextureSize);ot=Wt(R,ot);const ne=_(ot)||c,Zt=o.convert(R.format,R.colorSpace);let Gt=o.convert(R.type),Ct=T(R.internalFormat,Zt,Gt,R.colorSpace,R.isVideoTexture);mt(ht,R,ne);let xt;const Yt=R.mipmaps,B=c&&R.isVideoTexture!==!0&&Ct!==Mp,dt=St.__version===void 0||at===!0,_t=ct.dataReady,Pt=C(R,ot,ne);if(R.isDepthTexture)Ct=i.DEPTH_COMPONENT,c?R.type===ge?Ct=i.DEPTH_COMPONENT32F:R.type===wn?Ct=i.DEPTH_COMPONENT24:R.type===er?Ct=i.DEPTH24_STENCIL8:Ct=i.DEPTH_COMPONENT16:R.type===ge&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),R.format===nr&&Ct===i.DEPTH_COMPONENT&&R.type!==ya&&R.type!==wn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),R.type=wn,Gt=o.convert(R.type)),R.format===ns&&Ct===i.DEPTH_COMPONENT&&(Ct=i.DEPTH_STENCIL,R.type!==er&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),R.type=er,Gt=o.convert(R.type))),dt&&(B?e.texStorage2D(i.TEXTURE_2D,1,Ct,ot.width,ot.height):e.texImage2D(i.TEXTURE_2D,0,Ct,ot.width,ot.height,0,Zt,Gt,null));else if(R.isDataTexture)if(Yt.length>0&&ne){B&&dt&&e.texStorage2D(i.TEXTURE_2D,Pt,Ct,Yt[0].width,Yt[0].height);for(let O=0,st=Yt.length;O<st;O++)xt=Yt[O],B?_t&&e.texSubImage2D(i.TEXTURE_2D,O,0,0,xt.width,xt.height,Zt,Gt,xt.data):e.texImage2D(i.TEXTURE_2D,O,Ct,xt.width,xt.height,0,Zt,Gt,xt.data);R.generateMipmaps=!1}else B?(dt&&e.texStorage2D(i.TEXTURE_2D,Pt,Ct,ot.width,ot.height),_t&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ot.width,ot.height,Zt,Gt,ot.data)):e.texImage2D(i.TEXTURE_2D,0,Ct,ot.width,ot.height,0,Zt,Gt,ot.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){B&&dt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Pt,Ct,Yt[0].width,Yt[0].height,ot.depth);for(let O=0,st=Yt.length;O<st;O++)xt=Yt[O],R.format!==qe?Zt!==null?B?_t&&e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,O,0,0,0,xt.width,xt.height,ot.depth,Zt,xt.data,0,0):e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,O,Ct,xt.width,xt.height,ot.depth,0,xt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):B?_t&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,O,0,0,0,xt.width,xt.height,ot.depth,Zt,Gt,xt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,O,Ct,xt.width,xt.height,ot.depth,0,Zt,Gt,xt.data)}else{B&&dt&&e.texStorage2D(i.TEXTURE_2D,Pt,Ct,Yt[0].width,Yt[0].height);for(let O=0,st=Yt.length;O<st;O++)xt=Yt[O],R.format!==qe?Zt!==null?B?_t&&e.compressedTexSubImage2D(i.TEXTURE_2D,O,0,0,xt.width,xt.height,Zt,xt.data):e.compressedTexImage2D(i.TEXTURE_2D,O,Ct,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):B?_t&&e.texSubImage2D(i.TEXTURE_2D,O,0,0,xt.width,xt.height,Zt,Gt,xt.data):e.texImage2D(i.TEXTURE_2D,O,Ct,xt.width,xt.height,0,Zt,Gt,xt.data)}else if(R.isDataArrayTexture)B?(dt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Pt,Ct,ot.width,ot.height,ot.depth),_t&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ot.width,ot.height,ot.depth,Zt,Gt,ot.data)):e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ct,ot.width,ot.height,ot.depth,0,Zt,Gt,ot.data);else if(R.isData3DTexture)B?(dt&&e.texStorage3D(i.TEXTURE_3D,Pt,Ct,ot.width,ot.height,ot.depth),_t&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ot.width,ot.height,ot.depth,Zt,Gt,ot.data)):e.texImage3D(i.TEXTURE_3D,0,Ct,ot.width,ot.height,ot.depth,0,Zt,Gt,ot.data);else if(R.isFramebufferTexture){if(dt)if(B)e.texStorage2D(i.TEXTURE_2D,Pt,Ct,ot.width,ot.height);else{let O=ot.width,st=ot.height;for(let lt=0;lt<Pt;lt++)e.texImage2D(i.TEXTURE_2D,lt,Ct,O,st,0,Zt,Gt,null),O>>=1,st>>=1}}else if(Yt.length>0&&ne){B&&dt&&e.texStorage2D(i.TEXTURE_2D,Pt,Ct,Yt[0].width,Yt[0].height);for(let O=0,st=Yt.length;O<st;O++)xt=Yt[O],B?_t&&e.texSubImage2D(i.TEXTURE_2D,O,0,0,Zt,Gt,xt):e.texImage2D(i.TEXTURE_2D,O,Ct,Zt,Gt,xt);R.generateMipmaps=!1}else B?(dt&&e.texStorage2D(i.TEXTURE_2D,Pt,Ct,ot.width,ot.height),_t&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Zt,Gt,ot)):e.texImage2D(i.TEXTURE_2D,0,Ct,Zt,Gt,ot);E(R,ne)&&y(ht),St.__version=ct.version,R.onUpdate&&R.onUpdate(R)}N.__version=R.version}function wt(N,R,K){if(R.image.length!==6)return;const ht=$(N,R),at=R.source;e.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+K);const ct=n.get(at);if(at.version!==ct.__version||ht===!0){e.activeTexture(i.TEXTURE0+K);const St=de.getPrimaries(de.workingColorSpace),vt=R.colorSpace===Pn?null:de.getPrimaries(R.colorSpace),bt=R.colorSpace===Pn||St===vt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,R.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,R.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt);const Ot=R.isCompressedTexture||R.image[0].isCompressedTexture,Vt=R.image[0]&&R.image[0].isDataTexture,ot=[];for(let O=0;O<6;O++)!Ot&&!Vt?ot[O]=w(R.image[O],!1,!0,r.maxCubemapSize):ot[O]=Vt?R.image[O].image:R.image[O],ot[O]=Wt(R,ot[O]);const ne=ot[0],Zt=_(ne)||c,Gt=o.convert(R.format,R.colorSpace),Ct=o.convert(R.type),xt=T(R.internalFormat,Gt,Ct,R.colorSpace),Yt=c&&R.isVideoTexture!==!0,B=ct.__version===void 0||ht===!0,dt=at.dataReady;let _t=C(R,ne,Zt);mt(i.TEXTURE_CUBE_MAP,R,Zt);let Pt;if(Ot){Yt&&B&&e.texStorage2D(i.TEXTURE_CUBE_MAP,_t,xt,ne.width,ne.height);for(let O=0;O<6;O++){Pt=ot[O].mipmaps;for(let st=0;st<Pt.length;st++){const lt=Pt[st];R.format!==qe?Gt!==null?Yt?dt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,st,0,0,lt.width,lt.height,Gt,lt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,st,xt,lt.width,lt.height,0,lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Yt?dt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,st,0,0,lt.width,lt.height,Gt,Ct,lt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,st,xt,lt.width,lt.height,0,Gt,Ct,lt.data)}}}else{Pt=R.mipmaps,Yt&&B&&(Pt.length>0&&_t++,e.texStorage2D(i.TEXTURE_CUBE_MAP,_t,xt,ot[0].width,ot[0].height));for(let O=0;O<6;O++)if(Vt){Yt?dt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,0,0,ot[O].width,ot[O].height,Gt,Ct,ot[O].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,xt,ot[O].width,ot[O].height,0,Gt,Ct,ot[O].data);for(let st=0;st<Pt.length;st++){const Mt=Pt[st].image[O].image;Yt?dt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,st+1,0,0,Mt.width,Mt.height,Gt,Ct,Mt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,st+1,xt,Mt.width,Mt.height,0,Gt,Ct,Mt.data)}}else{Yt?dt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,0,0,Gt,Ct,ot[O]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,xt,Gt,Ct,ot[O]);for(let st=0;st<Pt.length;st++){const lt=Pt[st];Yt?dt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,st+1,0,0,Gt,Ct,lt.image[O]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,st+1,xt,Gt,Ct,lt.image[O])}}}E(R,Zt)&&y(i.TEXTURE_CUBE_MAP),ct.__version=at.version,R.onUpdate&&R.onUpdate(R)}N.__version=R.version}function Rt(N,R,K,ht,at,ct){const St=o.convert(K.format,K.colorSpace),vt=o.convert(K.type),bt=T(K.internalFormat,St,vt,K.colorSpace);if(!n.get(R).__hasExternalTextures){const Vt=Math.max(1,R.width>>ct),ot=Math.max(1,R.height>>ct);at===i.TEXTURE_3D||at===i.TEXTURE_2D_ARRAY?e.texImage3D(at,ct,bt,Vt,ot,R.depth,0,St,vt,null):e.texImage2D(at,ct,bt,Vt,ot,0,St,vt,null)}e.bindFramebuffer(i.FRAMEBUFFER,N),At(R)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ht,at,n.get(K).__webglTexture,0,Ht(R)):(at===i.TEXTURE_2D||at>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&at<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ht,at,n.get(K).__webglTexture,ct),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Lt(N,R,K){if(i.bindRenderbuffer(i.RENDERBUFFER,N),R.depthBuffer&&!R.stencilBuffer){let ht=c===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(K||At(R)){const at=R.depthTexture;at&&at.isDepthTexture&&(at.type===ge?ht=i.DEPTH_COMPONENT32F:at.type===wn&&(ht=i.DEPTH_COMPONENT24));const ct=Ht(R);At(R)?h.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ct,ht,R.width,R.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,ct,ht,R.width,R.height)}else i.renderbufferStorage(i.RENDERBUFFER,ht,R.width,R.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,N)}else if(R.depthBuffer&&R.stencilBuffer){const ht=Ht(R);K&&At(R)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ht,i.DEPTH24_STENCIL8,R.width,R.height):At(R)?h.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ht,i.DEPTH24_STENCIL8,R.width,R.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,N)}else{const ht=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let at=0;at<ht.length;at++){const ct=ht[at],St=o.convert(ct.format,ct.colorSpace),vt=o.convert(ct.type),bt=T(ct.internalFormat,St,vt,ct.colorSpace),Ot=Ht(R);K&&At(R)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ot,bt,R.width,R.height):At(R)?h.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ot,bt,R.width,R.height):i.renderbufferStorage(i.RENDERBUFFER,bt,R.width,R.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Et(N,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,N),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(R.depthTexture).__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),H(R.depthTexture,0);const ht=n.get(R.depthTexture).__webglTexture,at=Ht(R);if(R.depthTexture.format===nr)At(R)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ht,0,at):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ht,0);else if(R.depthTexture.format===ns)At(R)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ht,0,at):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ht,0);else throw new Error("Unknown depthTexture format")}function zt(N){const R=n.get(N),K=N.isWebGLCubeRenderTarget===!0;if(N.depthTexture&&!R.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");Et(R.__webglFramebuffer,N)}else if(K){R.__webglDepthbuffer=[];for(let ht=0;ht<6;ht++)e.bindFramebuffer(i.FRAMEBUFFER,R.__webglFramebuffer[ht]),R.__webglDepthbuffer[ht]=i.createRenderbuffer(),Lt(R.__webglDepthbuffer[ht],N,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer=i.createRenderbuffer(),Lt(R.__webglDepthbuffer,N,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function Bt(N,R,K){const ht=n.get(N);R!==void 0&&Rt(ht.__webglFramebuffer,N,N.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),K!==void 0&&zt(N)}function j(N){const R=N.texture,K=n.get(N),ht=n.get(R);N.addEventListener("dispose",I),N.isWebGLMultipleRenderTargets!==!0&&(ht.__webglTexture===void 0&&(ht.__webglTexture=i.createTexture()),ht.__version=R.version,a.memory.textures++);const at=N.isWebGLCubeRenderTarget===!0,ct=N.isWebGLMultipleRenderTargets===!0,St=_(N)||c;if(at){K.__webglFramebuffer=[];for(let vt=0;vt<6;vt++)if(c&&R.mipmaps&&R.mipmaps.length>0){K.__webglFramebuffer[vt]=[];for(let bt=0;bt<R.mipmaps.length;bt++)K.__webglFramebuffer[vt][bt]=i.createFramebuffer()}else K.__webglFramebuffer[vt]=i.createFramebuffer()}else{if(c&&R.mipmaps&&R.mipmaps.length>0){K.__webglFramebuffer=[];for(let vt=0;vt<R.mipmaps.length;vt++)K.__webglFramebuffer[vt]=i.createFramebuffer()}else K.__webglFramebuffer=i.createFramebuffer();if(ct)if(r.drawBuffers){const vt=N.texture;for(let bt=0,Ot=vt.length;bt<Ot;bt++){const Vt=n.get(vt[bt]);Vt.__webglTexture===void 0&&(Vt.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(c&&N.samples>0&&At(N)===!1){const vt=ct?R:[R];K.__webglMultisampledFramebuffer=i.createFramebuffer(),K.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let bt=0;bt<vt.length;bt++){const Ot=vt[bt];K.__webglColorRenderbuffer[bt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,K.__webglColorRenderbuffer[bt]);const Vt=o.convert(Ot.format,Ot.colorSpace),ot=o.convert(Ot.type),ne=T(Ot.internalFormat,Vt,ot,Ot.colorSpace,N.isXRRenderTarget===!0),Zt=Ht(N);i.renderbufferStorageMultisample(i.RENDERBUFFER,Zt,ne,N.width,N.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.RENDERBUFFER,K.__webglColorRenderbuffer[bt])}i.bindRenderbuffer(i.RENDERBUFFER,null),N.depthBuffer&&(K.__webglDepthRenderbuffer=i.createRenderbuffer(),Lt(K.__webglDepthRenderbuffer,N,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(at){e.bindTexture(i.TEXTURE_CUBE_MAP,ht.__webglTexture),mt(i.TEXTURE_CUBE_MAP,R,St);for(let vt=0;vt<6;vt++)if(c&&R.mipmaps&&R.mipmaps.length>0)for(let bt=0;bt<R.mipmaps.length;bt++)Rt(K.__webglFramebuffer[vt][bt],N,R,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,bt);else Rt(K.__webglFramebuffer[vt],N,R,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0);E(R,St)&&y(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ct){const vt=N.texture;for(let bt=0,Ot=vt.length;bt<Ot;bt++){const Vt=vt[bt],ot=n.get(Vt);e.bindTexture(i.TEXTURE_2D,ot.__webglTexture),mt(i.TEXTURE_2D,Vt,St),Rt(K.__webglFramebuffer,N,Vt,i.COLOR_ATTACHMENT0+bt,i.TEXTURE_2D,0),E(Vt,St)&&y(i.TEXTURE_2D)}e.unbindTexture()}else{let vt=i.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(c?vt=N.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(vt,ht.__webglTexture),mt(vt,R,St),c&&R.mipmaps&&R.mipmaps.length>0)for(let bt=0;bt<R.mipmaps.length;bt++)Rt(K.__webglFramebuffer[bt],N,R,i.COLOR_ATTACHMENT0,vt,bt);else Rt(K.__webglFramebuffer,N,R,i.COLOR_ATTACHMENT0,vt,0);E(R,St)&&y(vt),e.unbindTexture()}N.depthBuffer&&zt(N)}function Ae(N){const R=_(N)||c,K=N.isWebGLMultipleRenderTargets===!0?N.texture:[N.texture];for(let ht=0,at=K.length;ht<at;ht++){const ct=K[ht];if(E(ct,R)){const St=N.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,vt=n.get(ct).__webglTexture;e.bindTexture(St,vt),y(St),e.unbindTexture()}}}function Tt(N){if(c&&N.samples>0&&At(N)===!1){const R=N.isWebGLMultipleRenderTargets?N.texture:[N.texture],K=N.width,ht=N.height;let at=i.COLOR_BUFFER_BIT;const ct=[],St=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,vt=n.get(N),bt=N.isWebGLMultipleRenderTargets===!0;if(bt)for(let Ot=0;Ot<R.length;Ot++)e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ot,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ot,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,vt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglFramebuffer);for(let Ot=0;Ot<R.length;Ot++){ct.push(i.COLOR_ATTACHMENT0+Ot),N.depthBuffer&&ct.push(St);const Vt=vt.__ignoreDepthValues!==void 0?vt.__ignoreDepthValues:!1;if(Vt===!1&&(N.depthBuffer&&(at|=i.DEPTH_BUFFER_BIT),N.stencilBuffer&&(at|=i.STENCIL_BUFFER_BIT)),bt&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,vt.__webglColorRenderbuffer[Ot]),Vt===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[St]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[St])),bt){const ot=n.get(R[Ot]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ot,0)}i.blitFramebuffer(0,0,K,ht,0,0,K,ht,at,i.NEAREST),d&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ct)}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),bt)for(let Ot=0;Ot<R.length;Ot++){e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ot,i.RENDERBUFFER,vt.__webglColorRenderbuffer[Ot]);const Vt=n.get(R[Ot]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ot,i.TEXTURE_2D,Vt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglMultisampledFramebuffer)}}function Ht(N){return Math.min(r.maxSamples,N.samples)}function At(N){const R=n.get(N);return c&&N.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function fe(N){const R=a.render.frame;p.get(N)!==R&&(p.set(N,R),N.update())}function Wt(N,R){const K=N.colorSpace,ht=N.format,at=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||N.format===sc||K!==hi&&K!==Pn&&(de.getTransfer(K)===be?c===!1?t.has("EXT_sRGB")===!0&&ht===qe?(N.format=sc,N.minFilter=Ie,N.generateMipmaps=!1):R=Pp.sRGBToLinear(R):(ht!==qe||at!==Wn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",K)),R}this.allocateTextureUnit=F,this.resetTextureUnits=X,this.setTexture2D=H,this.setTexture2DArray=W,this.setTexture3D=J,this.setTextureCube=et,this.rebindTextures=Bt,this.setupRenderTarget=j,this.updateRenderTargetMipmap=Ae,this.updateMultisampleRenderTarget=Tt,this.setupDepthRenderbuffer=zt,this.setupFrameBufferTexture=Rt,this.useMultisampledRTT=At}function Mw(i,t,e){const n=e.isWebGL2;function r(o,a=Pn){let c;const h=de.getTransfer(a);if(o===Wn)return i.UNSIGNED_BYTE;if(o===bp)return i.UNSIGNED_SHORT_4_4_4_4;if(o===yp)return i.UNSIGNED_SHORT_5_5_5_1;if(o===rc)return i.BYTE;if(o===xp)return i.SHORT;if(o===ya)return i.UNSIGNED_SHORT;if(o===Ws)return i.INT;if(o===wn)return i.UNSIGNED_INT;if(o===ge)return i.FLOAT;if(o===qn)return n?i.HALF_FLOAT:(c=t.get("OES_texture_half_float"),c!==null?c.HALF_FLOAT_OES:null);if(o===Xv)return i.ALPHA;if(o===qe)return i.RGBA;if(o===qv)return i.LUMINANCE;if(o===jv)return i.LUMINANCE_ALPHA;if(o===nr)return i.DEPTH_COMPONENT;if(o===ns)return i.DEPTH_STENCIL;if(o===sc)return c=t.get("EXT_sRGB"),c!==null?c.SRGB_ALPHA_EXT:null;if(o===wp)return i.RED;if(o===Pc)return i.RED_INTEGER;if(o===Ep)return i.RG;if(o===wa)return i.RG_INTEGER;if(o===$s)return i.RGBA_INTEGER;if(o===sl||o===ol||o===al||o===ll)if(h===be)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(o===sl)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(o===ol)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(o===al)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(o===ll)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(o===sl)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(o===ol)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(o===al)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(o===ll)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(o===rh||o===sh||o===oh||o===ah)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(o===rh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(o===sh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(o===oh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(o===ah)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(o===Mp)return c=t.get("WEBGL_compressed_texture_etc1"),c!==null?c.COMPRESSED_RGB_ETC1_WEBGL:null;if(o===lh||o===ch)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(o===lh)return h===be?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(o===ch)return h===be?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(o===uh||o===hh||o===dh||o===ph||o===fh||o===mh||o===gh||o===vh||o===_h||o===xh||o===bh||o===yh||o===wh||o===Eh)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(o===uh)return h===be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(o===hh)return h===be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(o===dh)return h===be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(o===ph)return h===be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(o===fh)return h===be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(o===mh)return h===be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(o===gh)return h===be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(o===vh)return h===be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(o===_h)return h===be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(o===xh)return h===be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(o===bh)return h===be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(o===yh)return h===be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(o===wh)return h===be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(o===Eh)return h===be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(o===cl||o===Mh||o===Sh)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(o===cl)return h===be?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(o===Mh)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(o===Sh)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(o===Yv||o===Th||o===Ah||o===Ch)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(o===cl)return c.COMPRESSED_RED_RGTC1_EXT;if(o===Th)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(o===Ah)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(o===Ch)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return o===er?n?i.UNSIGNED_INT_24_8:(c=t.get("WEBGL_depth_texture"),c!==null?c.UNSIGNED_INT_24_8_WEBGL:null):i[o]!==void 0?i[o]:null}return{convert:r}}class Sw extends bn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class No extends Ue{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Tw={type:"move"};class Dl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new No,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new No,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new No,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,o=null,a=null;const c=this._targetRay,h=this._grip,d=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(d&&t.hand){a=!0;for(const w of t.hand.values()){const _=e.getJointPose(w,n),v=this._getHandJoint(d,w);_!==null&&(v.matrix.fromArray(_.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=_.radius),v.visible=_!==null}const p=d.joints["index-finger-tip"],f=d.joints["thumb-tip"],m=p.position.distanceTo(f.position),x=.02,b=.005;d.inputState.pinching&&m>x+b?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!d.inputState.pinching&&m<=x-b&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else h!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,n),o!==null&&(h.matrix.fromArray(o.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,o.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(o.linearVelocity)):h.hasLinearVelocity=!1,o.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(o.angularVelocity)):h.hasAngularVelocity=!1));c!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&o!==null&&(r=o),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(Tw)))}return c!==null&&(c.visible=r!==null),h!==null&&(h.visible=o!==null),d!==null&&(d.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new No;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Aw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Cw=`
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

}`;class Pw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const r=new dn,o=t.properties.get(r);o.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}render(t,e){if(this.texture!==null){if(this.mesh===null){const n=e.cameras[0].viewport,r=new rn({extensions:{fragDepth:!0},vertexShader:Aw,fragmentShader:Cw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ft(new kn(20,20),r)}t.render(this.mesh,e)}}reset(){this.texture=null,this.mesh=null}}class Rw extends sr{constructor(t,e){super();const n=this;let r=null,o=1,a=null,c="local-floor",h=1,d=null,p=null,f=null,m=null,x=null,b=null;const w=new Pw,_=e.getContextAttributes();let v=null,E=null;const y=[],T=[],C=new It;let P=null;const A=new bn;A.layers.enable(1),A.viewport=new ve;const I=new bn;I.layers.enable(2),I.viewport=new ve;const z=[A,I],M=new Sw;M.layers.enable(1),M.layers.enable(2);let L=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let rt=y[$];return rt===void 0&&(rt=new Dl,y[$]=rt),rt.getTargetRaySpace()},this.getControllerGrip=function($){let rt=y[$];return rt===void 0&&(rt=new Dl,y[$]=rt),rt.getGripSpace()},this.getHand=function($){let rt=y[$];return rt===void 0&&(rt=new Dl,y[$]=rt),rt.getHandSpace()};function X($){const rt=T.indexOf($.inputSource);if(rt===-1)return;const wt=y[rt];wt!==void 0&&(wt.update($.inputSource,$.frame,d||a),wt.dispatchEvent({type:$.type,data:$.inputSource}))}function F(){r.removeEventListener("select",X),r.removeEventListener("selectstart",X),r.removeEventListener("selectend",X),r.removeEventListener("squeeze",X),r.removeEventListener("squeezestart",X),r.removeEventListener("squeezeend",X),r.removeEventListener("end",F),r.removeEventListener("inputsourceschange",G);for(let $=0;$<y.length;$++){const rt=T[$];rt!==null&&(T[$]=null,y[$].disconnect(rt))}L=null,V=null,w.reset(),t.setRenderTarget(v),x=null,m=null,f=null,r=null,E=null,mt.stop(),n.isPresenting=!1,t.setPixelRatio(P),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){o=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){c=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||a},this.setReferenceSpace=function($){d=$},this.getBaseLayer=function(){return m!==null?m:x},this.getBinding=function(){return f},this.getFrame=function(){return b},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(v=t.getRenderTarget(),r.addEventListener("select",X),r.addEventListener("selectstart",X),r.addEventListener("selectend",X),r.addEventListener("squeeze",X),r.addEventListener("squeezestart",X),r.addEventListener("squeezeend",X),r.addEventListener("end",F),r.addEventListener("inputsourceschange",G),_.xrCompatible!==!0&&await e.makeXRCompatible(),P=t.getPixelRatio(),t.getSize(C),r.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const rt={antialias:r.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:o};x=new XRWebGLLayer(r,e,rt),r.updateRenderState({baseLayer:x}),t.setPixelRatio(1),t.setSize(x.framebufferWidth,x.framebufferHeight,!1),E=new In(x.framebufferWidth,x.framebufferHeight,{format:qe,type:Wn,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil})}else{let rt=null,wt=null,Rt=null;_.depth&&(Rt=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,rt=_.stencil?ns:nr,wt=_.stencil?er:wn);const Lt={colorFormat:e.RGBA8,depthFormat:Rt,scaleFactor:o};f=new XRWebGLBinding(r,e),m=f.createProjectionLayer(Lt),r.updateRenderState({layers:[m]}),t.setPixelRatio(1),t.setSize(m.textureWidth,m.textureHeight,!1),E=new In(m.textureWidth,m.textureHeight,{format:qe,type:Wn,depthTexture:new kp(m.textureWidth,m.textureHeight,wt,void 0,void 0,void 0,void 0,void 0,void 0,rt),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0});const Et=t.properties.get(E);Et.__ignoreDepthValues=m.ignoreDepthValues}E.isXRRenderTarget=!0,this.setFoveation(h),d=null,a=await r.requestReferenceSpace(c),mt.setContext(r),mt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function G($){for(let rt=0;rt<$.removed.length;rt++){const wt=$.removed[rt],Rt=T.indexOf(wt);Rt>=0&&(T[Rt]=null,y[Rt].disconnect(wt))}for(let rt=0;rt<$.added.length;rt++){const wt=$.added[rt];let Rt=T.indexOf(wt);if(Rt===-1){for(let Et=0;Et<y.length;Et++)if(Et>=T.length){T.push(wt),Rt=Et;break}else if(T[Et]===null){T[Et]=wt,Rt=Et;break}if(Rt===-1)break}const Lt=y[Rt];Lt&&Lt.connect(wt)}}const H=new U,W=new U;function J($,rt,wt){H.setFromMatrixPosition(rt.matrixWorld),W.setFromMatrixPosition(wt.matrixWorld);const Rt=H.distanceTo(W),Lt=rt.projectionMatrix.elements,Et=wt.projectionMatrix.elements,zt=Lt[14]/(Lt[10]-1),Bt=Lt[14]/(Lt[10]+1),j=(Lt[9]+1)/Lt[5],Ae=(Lt[9]-1)/Lt[5],Tt=(Lt[8]-1)/Lt[0],Ht=(Et[8]+1)/Et[0],At=zt*Tt,fe=zt*Ht,Wt=Rt/(-Tt+Ht),N=Wt*-Tt;rt.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(N),$.translateZ(Wt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert();const R=zt+Wt,K=Bt+Wt,ht=At-N,at=fe+(Rt-N),ct=j*Bt/K*R,St=Ae*Bt/K*R;$.projectionMatrix.makePerspective(ht,at,ct,St,R,K),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}function et($,rt){rt===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(rt.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;w.texture!==null&&($.near=w.depthNear,$.far=w.depthFar),M.near=I.near=A.near=$.near,M.far=I.far=A.far=$.far,(L!==M.near||V!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),L=M.near,V=M.far,A.near=L,A.far=V,I.near=L,I.far=V,A.updateProjectionMatrix(),I.updateProjectionMatrix(),$.updateProjectionMatrix());const rt=$.parent,wt=M.cameras;et(M,rt);for(let Rt=0;Rt<wt.length;Rt++)et(wt[Rt],rt);wt.length===2?J(M,A,I):M.projectionMatrix.copy(A.projectionMatrix),it($,M,rt)};function it($,rt,wt){wt===null?$.matrix.copy(rt.matrixWorld):($.matrix.copy(wt.matrixWorld),$.matrix.invert(),$.matrix.multiply(rt.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(rt.projectionMatrix),$.projectionMatrixInverse.copy(rt.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Ks*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(m===null&&x===null))return h},this.setFoveation=function($){h=$,m!==null&&(m.fixedFoveation=$),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=$)},this.hasDepthSensing=function(){return w.texture!==null};let nt=null;function pt($,rt){if(p=rt.getViewerPose(d||a),b=rt,p!==null){const wt=p.views;x!==null&&(t.setRenderTargetFramebuffer(E,x.framebuffer),t.setRenderTarget(E));let Rt=!1;wt.length!==M.cameras.length&&(M.cameras.length=0,Rt=!0);for(let Et=0;Et<wt.length;Et++){const zt=wt[Et];let Bt=null;if(x!==null)Bt=x.getViewport(zt);else{const Ae=f.getViewSubImage(m,zt);Bt=Ae.viewport,Et===0&&(t.setRenderTargetTextures(E,Ae.colorTexture,m.ignoreDepthValues?void 0:Ae.depthStencilTexture),t.setRenderTarget(E))}let j=z[Et];j===void 0&&(j=new bn,j.layers.enable(Et),j.viewport=new ve,z[Et]=j),j.matrix.fromArray(zt.transform.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale),j.projectionMatrix.fromArray(zt.projectionMatrix),j.projectionMatrixInverse.copy(j.projectionMatrix).invert(),j.viewport.set(Bt.x,Bt.y,Bt.width,Bt.height),Et===0&&(M.matrix.copy(j.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),Rt===!0&&M.cameras.push(j)}const Lt=r.enabledFeatures;if(Lt&&Lt.includes("depth-sensing")){const Et=f.getDepthInformation(wt[0]);Et&&Et.isValid&&Et.texture&&w.init(t,Et,r.renderState)}}for(let wt=0;wt<y.length;wt++){const Rt=T[wt],Lt=y[wt];Rt!==null&&Lt!==void 0&&Lt.update(Rt,rt,d||a)}w.render(t,M),nt&&nt($,rt),rt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:rt}),b=null}const mt=new Bp;mt.setAnimationLoop(pt),this.setAnimationLoop=function($){nt=$},this.dispose=function(){}}}function Lw(i,t){function e(_,v){_.matrixAutoUpdate===!0&&_.updateMatrix(),v.value.copy(_.matrix)}function n(_,v){v.color.getRGB(_.fogColor.value,Np(i)),v.isFog?(_.fogNear.value=v.near,_.fogFar.value=v.far):v.isFogExp2&&(_.fogDensity.value=v.density)}function r(_,v,E,y,T){v.isMeshBasicMaterial||v.isMeshLambertMaterial?o(_,v):v.isMeshToonMaterial?(o(_,v),f(_,v)):v.isMeshPhongMaterial?(o(_,v),p(_,v)):v.isMeshStandardMaterial?(o(_,v),m(_,v),v.isMeshPhysicalMaterial&&x(_,v,T)):v.isMeshMatcapMaterial?(o(_,v),b(_,v)):v.isMeshDepthMaterial?o(_,v):v.isMeshDistanceMaterial?(o(_,v),w(_,v)):v.isMeshNormalMaterial?o(_,v):v.isLineBasicMaterial?(a(_,v),v.isLineDashedMaterial&&c(_,v)):v.isPointsMaterial?h(_,v,E,y):v.isSpriteMaterial?d(_,v):v.isShadowMaterial?(_.color.value.copy(v.color),_.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function o(_,v){_.opacity.value=v.opacity,v.color&&_.diffuse.value.copy(v.color),v.emissive&&_.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(_.map.value=v.map,e(v.map,_.mapTransform)),v.alphaMap&&(_.alphaMap.value=v.alphaMap,e(v.alphaMap,_.alphaMapTransform)),v.bumpMap&&(_.bumpMap.value=v.bumpMap,e(v.bumpMap,_.bumpMapTransform),_.bumpScale.value=v.bumpScale,v.side===hn&&(_.bumpScale.value*=-1)),v.normalMap&&(_.normalMap.value=v.normalMap,e(v.normalMap,_.normalMapTransform),_.normalScale.value.copy(v.normalScale),v.side===hn&&_.normalScale.value.negate()),v.displacementMap&&(_.displacementMap.value=v.displacementMap,e(v.displacementMap,_.displacementMapTransform),_.displacementScale.value=v.displacementScale,_.displacementBias.value=v.displacementBias),v.emissiveMap&&(_.emissiveMap.value=v.emissiveMap,e(v.emissiveMap,_.emissiveMapTransform)),v.specularMap&&(_.specularMap.value=v.specularMap,e(v.specularMap,_.specularMapTransform)),v.alphaTest>0&&(_.alphaTest.value=v.alphaTest);const E=t.get(v).envMap;if(E&&(_.envMap.value=E,_.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=v.reflectivity,_.ior.value=v.ior,_.refractionRatio.value=v.refractionRatio),v.lightMap){_.lightMap.value=v.lightMap;const y=i._useLegacyLights===!0?Math.PI:1;_.lightMapIntensity.value=v.lightMapIntensity*y,e(v.lightMap,_.lightMapTransform)}v.aoMap&&(_.aoMap.value=v.aoMap,_.aoMapIntensity.value=v.aoMapIntensity,e(v.aoMap,_.aoMapTransform))}function a(_,v){_.diffuse.value.copy(v.color),_.opacity.value=v.opacity,v.map&&(_.map.value=v.map,e(v.map,_.mapTransform))}function c(_,v){_.dashSize.value=v.dashSize,_.totalSize.value=v.dashSize+v.gapSize,_.scale.value=v.scale}function h(_,v,E,y){_.diffuse.value.copy(v.color),_.opacity.value=v.opacity,_.size.value=v.size*E,_.scale.value=y*.5,v.map&&(_.map.value=v.map,e(v.map,_.uvTransform)),v.alphaMap&&(_.alphaMap.value=v.alphaMap,e(v.alphaMap,_.alphaMapTransform)),v.alphaTest>0&&(_.alphaTest.value=v.alphaTest)}function d(_,v){_.diffuse.value.copy(v.color),_.opacity.value=v.opacity,_.rotation.value=v.rotation,v.map&&(_.map.value=v.map,e(v.map,_.mapTransform)),v.alphaMap&&(_.alphaMap.value=v.alphaMap,e(v.alphaMap,_.alphaMapTransform)),v.alphaTest>0&&(_.alphaTest.value=v.alphaTest)}function p(_,v){_.specular.value.copy(v.specular),_.shininess.value=Math.max(v.shininess,1e-4)}function f(_,v){v.gradientMap&&(_.gradientMap.value=v.gradientMap)}function m(_,v){_.metalness.value=v.metalness,v.metalnessMap&&(_.metalnessMap.value=v.metalnessMap,e(v.metalnessMap,_.metalnessMapTransform)),_.roughness.value=v.roughness,v.roughnessMap&&(_.roughnessMap.value=v.roughnessMap,e(v.roughnessMap,_.roughnessMapTransform)),t.get(v).envMap&&(_.envMapIntensity.value=v.envMapIntensity)}function x(_,v,E){_.ior.value=v.ior,v.sheen>0&&(_.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),_.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(_.sheenColorMap.value=v.sheenColorMap,e(v.sheenColorMap,_.sheenColorMapTransform)),v.sheenRoughnessMap&&(_.sheenRoughnessMap.value=v.sheenRoughnessMap,e(v.sheenRoughnessMap,_.sheenRoughnessMapTransform))),v.clearcoat>0&&(_.clearcoat.value=v.clearcoat,_.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(_.clearcoatMap.value=v.clearcoatMap,e(v.clearcoatMap,_.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,e(v.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(_.clearcoatNormalMap.value=v.clearcoatNormalMap,e(v.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===hn&&_.clearcoatNormalScale.value.negate())),v.iridescence>0&&(_.iridescence.value=v.iridescence,_.iridescenceIOR.value=v.iridescenceIOR,_.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(_.iridescenceMap.value=v.iridescenceMap,e(v.iridescenceMap,_.iridescenceMapTransform)),v.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=v.iridescenceThicknessMap,e(v.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),v.transmission>0&&(_.transmission.value=v.transmission,_.transmissionSamplerMap.value=E.texture,_.transmissionSamplerSize.value.set(E.width,E.height),v.transmissionMap&&(_.transmissionMap.value=v.transmissionMap,e(v.transmissionMap,_.transmissionMapTransform)),_.thickness.value=v.thickness,v.thicknessMap&&(_.thicknessMap.value=v.thicknessMap,e(v.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=v.attenuationDistance,_.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(_.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(_.anisotropyMap.value=v.anisotropyMap,e(v.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=v.specularIntensity,_.specularColor.value.copy(v.specularColor),v.specularColorMap&&(_.specularColorMap.value=v.specularColorMap,e(v.specularColorMap,_.specularColorMapTransform)),v.specularIntensityMap&&(_.specularIntensityMap.value=v.specularIntensityMap,e(v.specularIntensityMap,_.specularIntensityMapTransform))}function b(_,v){v.matcap&&(_.matcap.value=v.matcap)}function w(_,v){const E=t.get(v).light;_.referencePosition.value.setFromMatrixPosition(E.matrixWorld),_.nearDistance.value=E.shadow.camera.near,_.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Dw(i,t,e,n){let r={},o={},a=[];const c=e.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function h(E,y){const T=y.program;n.uniformBlockBinding(E,T)}function d(E,y){let T=r[E.id];T===void 0&&(b(E),T=p(E),r[E.id]=T,E.addEventListener("dispose",_));const C=y.program;n.updateUBOMapping(E,C);const P=t.render.frame;o[E.id]!==P&&(m(E),o[E.id]=P)}function p(E){const y=f();E.__bindingPointIndex=y;const T=i.createBuffer(),C=E.__size,P=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,C,P),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,T),T}function f(){for(let E=0;E<c;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(E){const y=r[E.id],T=E.uniforms,C=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let P=0,A=T.length;P<A;P++){const I=Array.isArray(T[P])?T[P]:[T[P]];for(let z=0,M=I.length;z<M;z++){const L=I[z];if(x(L,P,z,C)===!0){const V=L.__offset,X=Array.isArray(L.value)?L.value:[L.value];let F=0;for(let G=0;G<X.length;G++){const H=X[G],W=w(H);typeof H=="number"||typeof H=="boolean"?(L.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,V+F,L.__data)):H.isMatrix3?(L.__data[0]=H.elements[0],L.__data[1]=H.elements[1],L.__data[2]=H.elements[2],L.__data[3]=0,L.__data[4]=H.elements[3],L.__data[5]=H.elements[4],L.__data[6]=H.elements[5],L.__data[7]=0,L.__data[8]=H.elements[6],L.__data[9]=H.elements[7],L.__data[10]=H.elements[8],L.__data[11]=0):(H.toArray(L.__data,F),F+=W.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,V,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function x(E,y,T,C){const P=E.value,A=y+"_"+T;if(C[A]===void 0)return typeof P=="number"||typeof P=="boolean"?C[A]=P:C[A]=P.clone(),!0;{const I=C[A];if(typeof P=="number"||typeof P=="boolean"){if(I!==P)return C[A]=P,!0}else if(I.equals(P)===!1)return I.copy(P),!0}return!1}function b(E){const y=E.uniforms;let T=0;const C=16;for(let A=0,I=y.length;A<I;A++){const z=Array.isArray(y[A])?y[A]:[y[A]];for(let M=0,L=z.length;M<L;M++){const V=z[M],X=Array.isArray(V.value)?V.value:[V.value];for(let F=0,G=X.length;F<G;F++){const H=X[F],W=w(H),J=T%C;J!==0&&C-J<W.boundary&&(T+=C-J),V.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=T,T+=W.storage}}}const P=T%C;return P>0&&(T+=C-P),E.__size=T,E.__cache={},this}function w(E){const y={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(y.boundary=4,y.storage=4):E.isVector2?(y.boundary=8,y.storage=8):E.isVector3||E.isColor?(y.boundary=16,y.storage=12):E.isVector4?(y.boundary=16,y.storage=16):E.isMatrix3?(y.boundary=48,y.storage=48):E.isMatrix4?(y.boundary=64,y.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),y}function _(E){const y=E.target;y.removeEventListener("dispose",_);const T=a.indexOf(y.__bindingPointIndex);a.splice(T,1),i.deleteBuffer(r[y.id]),delete r[y.id],delete o[y.id]}function v(){for(const E in r)i.deleteBuffer(r[E]);a=[],r={},o={}}return{bind:h,update:d,dispose:v}}class Xp{constructor(t={}){const{canvas:e=b_(),context:n=null,depth:r=!0,stencil:o=!0,alpha:a=!1,antialias:c=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:d=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:f=!1}=t;this.isWebGLRenderer=!0;let m;n!==null?m=n.getContextAttributes().alpha:m=a;const x=new Uint32Array(4),b=new Int32Array(4);let w=null,_=null;const v=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=We,this._useLegacyLights=!1,this.toneMapping=Ii,this.toneMappingExposure=1;const y=this;let T=!1,C=0,P=0,A=null,I=-1,z=null;const M=new ve,L=new ve;let V=null;const X=new se(0);let F=0,G=e.width,H=e.height,W=1,J=null,et=null;const it=new ve(0,0,G,H),nt=new ve(0,0,G,H);let pt=!1;const mt=new Ic;let $=!1,rt=!1,wt=null;const Rt=new ue,Lt=new It,Et=new U,zt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Bt(){return A===null?W:1}let j=n;function Ae(D,Y){for(let Q=0;Q<D.length;Q++){const tt=D[Q],Z=e.getContext(tt,Y);if(Z!==null)return Z}return null}try{const D={alpha:!0,depth:r,stencil:o,antialias:c,premultipliedAlpha:h,preserveDrawingBuffer:d,powerPreference:p,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ac}`),e.addEventListener("webglcontextlost",Pt,!1),e.addEventListener("webglcontextrestored",O,!1),e.addEventListener("webglcontextcreationerror",st,!1),j===null){const Y=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&Y.shift(),j=Ae(Y,D),j===null)throw Ae(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext!="undefined"&&j instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),j.getShaderPrecisionFormat===void 0&&(j.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(D){throw console.error("THREE.WebGLRenderer: "+D.message),D}let Tt,Ht,At,fe,Wt,N,R,K,ht,at,ct,St,vt,bt,Ot,Vt,ot,ne,Zt,Gt,Ct,xt,Yt,B;function dt(){Tt=new kb(j),Ht=new Ib(j,Tt,t),Tt.init(Ht),xt=new Mw(j,Tt,Ht),At=new ww(j,Tt,Ht),fe=new Hb(j),Wt=new lw,N=new Ew(j,Tt,At,Wt,Ht,xt,fe),R=new Nb(y),K=new Bb(y),ht=new K_(j,Ht),Yt=new Lb(j,Tt,ht,Ht),at=new Vb(j,ht,fe,Yt),ct=new qb(j,at,ht,fe),Zt=new Xb(j,Ht,N),Vt=new Ub(Wt),St=new aw(y,R,K,Tt,Ht,Yt,Vt),vt=new Lw(y,Wt),bt=new uw,Ot=new gw(Tt,Ht),ne=new Rb(y,R,K,At,ct,m,h),ot=new yw(y,ct,Ht),B=new Dw(j,fe,Ht,At),Gt=new Db(j,Tt,fe,Ht),Ct=new zb(j,Tt,fe,Ht),fe.programs=St.programs,y.capabilities=Ht,y.extensions=Tt,y.properties=Wt,y.renderLists=bt,y.shadowMap=ot,y.state=At,y.info=fe}dt();const _t=new Rw(y,j);this.xr=_t,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){const D=Tt.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=Tt.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(D){D!==void 0&&(W=D,this.setSize(G,H,!1))},this.getSize=function(D){return D.set(G,H)},this.setSize=function(D,Y,Q=!0){if(_t.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=D,H=Y,e.width=Math.floor(D*W),e.height=Math.floor(Y*W),Q===!0&&(e.style.width=D+"px",e.style.height=Y+"px"),this.setViewport(0,0,D,Y)},this.getDrawingBufferSize=function(D){return D.set(G*W,H*W).floor()},this.setDrawingBufferSize=function(D,Y,Q){G=D,H=Y,W=Q,e.width=Math.floor(D*Q),e.height=Math.floor(Y*Q),this.setViewport(0,0,D,Y)},this.getCurrentViewport=function(D){return D.copy(M)},this.getViewport=function(D){return D.copy(it)},this.setViewport=function(D,Y,Q,tt){D.isVector4?it.set(D.x,D.y,D.z,D.w):it.set(D,Y,Q,tt),At.viewport(M.copy(it).multiplyScalar(W).floor())},this.getScissor=function(D){return D.copy(nt)},this.setScissor=function(D,Y,Q,tt){D.isVector4?nt.set(D.x,D.y,D.z,D.w):nt.set(D,Y,Q,tt),At.scissor(L.copy(nt).multiplyScalar(W).floor())},this.getScissorTest=function(){return pt},this.setScissorTest=function(D){At.setScissorTest(pt=D)},this.setOpaqueSort=function(D){J=D},this.setTransparentSort=function(D){et=D},this.getClearColor=function(D){return D.copy(ne.getClearColor())},this.setClearColor=function(){ne.setClearColor.apply(ne,arguments)},this.getClearAlpha=function(){return ne.getClearAlpha()},this.setClearAlpha=function(){ne.setClearAlpha.apply(ne,arguments)},this.clear=function(D=!0,Y=!0,Q=!0){let tt=0;if(D){let Z=!1;if(A!==null){const yt=A.texture.format;Z=yt===$s||yt===wa||yt===Pc}if(Z){const yt=A.texture.type,Dt=yt===Wn||yt===wn||yt===ya||yt===er||yt===bp||yt===yp,kt=ne.getClearColor(),Ft=ne.getClearAlpha(),Xt=kt.r,jt=kt.g,$t=kt.b;Dt?(x[0]=Xt,x[1]=jt,x[2]=$t,x[3]=Ft,j.clearBufferuiv(j.COLOR,0,x)):(b[0]=Xt,b[1]=jt,b[2]=$t,b[3]=Ft,j.clearBufferiv(j.COLOR,0,b))}else tt|=j.COLOR_BUFFER_BIT}Y&&(tt|=j.DEPTH_BUFFER_BIT),Q&&(tt|=j.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),j.clear(tt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Pt,!1),e.removeEventListener("webglcontextrestored",O,!1),e.removeEventListener("webglcontextcreationerror",st,!1),bt.dispose(),Ot.dispose(),Wt.dispose(),R.dispose(),K.dispose(),ct.dispose(),Yt.dispose(),B.dispose(),St.dispose(),_t.dispose(),_t.removeEventListener("sessionstart",Le),_t.removeEventListener("sessionend",re),wt&&(wt.dispose(),wt=null),Ce.stop()};function Pt(D){D.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function O(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const D=fe.autoReset,Y=ot.enabled,Q=ot.autoUpdate,tt=ot.needsUpdate,Z=ot.type;dt(),fe.autoReset=D,ot.enabled=Y,ot.autoUpdate=Q,ot.needsUpdate=tt,ot.type=Z}function st(D){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function lt(D){const Y=D.target;Y.removeEventListener("dispose",lt),Mt(Y)}function Mt(D){Nt(D),Wt.remove(D)}function Nt(D){const Y=Wt.get(D).programs;Y!==void 0&&(Y.forEach(function(Q){St.releaseProgram(Q)}),D.isShaderMaterial&&St.releaseShaderCache(D))}this.renderBufferDirect=function(D,Y,Q,tt,Z,yt){Y===null&&(Y=zt);const Dt=Z.isMesh&&Z.matrixWorld.determinant()<0,kt=La(D,Y,Q,tt,Z);At.setMaterial(tt,Dt);let Ft=Q.index,Xt=1;if(tt.wireframe===!0){if(Ft=at.getWireframeAttribute(Q),Ft===void 0)return;Xt=2}const jt=Q.drawRange,$t=Q.attributes.position;let Me=jt.start*Xt,Ke=(jt.start+jt.count)*Xt;yt!==null&&(Me=Math.max(Me,yt.start*Xt),Ke=Math.min(Ke,(yt.start+yt.count)*Xt)),Ft!==null?(Me=Math.max(Me,0),Ke=Math.min(Ke,Ft.count)):$t!=null&&(Me=Math.max(Me,0),Ke=Math.min(Ke,$t.count));const De=Ke-Me;if(De<0||De===1/0)return;Yt.setup(Z,tt,kt,Q,Ft);let Sn,_e=Gt;if(Ft!==null&&(Sn=ht.get(Ft),_e=Ct,_e.setIndex(Sn)),Z.isMesh)tt.wireframe===!0?(At.setLineWidth(tt.wireframeLinewidth*Bt()),_e.setMode(j.LINES)):_e.setMode(j.TRIANGLES);else if(Z.isLine){let Kt=tt.linewidth;Kt===void 0&&(Kt=1),At.setLineWidth(Kt*Bt()),Z.isLineSegments?_e.setMode(j.LINES):Z.isLineLoop?_e.setMode(j.LINE_LOOP):_e.setMode(j.LINE_STRIP)}else Z.isPoints?_e.setMode(j.POINTS):Z.isSprite&&_e.setMode(j.TRIANGLES);if(Z.isBatchedMesh)_e.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else if(Z.isInstancedMesh)_e.renderInstances(Me,De,Z.count);else if(Q.isInstancedBufferGeometry){const Kt=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,us=Math.min(Q.instanceCount,Kt);_e.renderInstances(Me,De,us)}else _e.render(Me,De)};function te(D,Y,Q){D.transparent===!0&&D.side===mn&&D.forceSinglePass===!1?(D.side=hn,D.needsUpdate=!0,ar(D,Y,Q),D.side=Xn,D.needsUpdate=!0,ar(D,Y,Q),D.side=mn):ar(D,Y,Q)}this.compile=function(D,Y,Q=null){Q===null&&(Q=D),_=Ot.get(Q),_.init(),E.push(_),Q.traverseVisible(function(Z){Z.isLight&&Z.layers.test(Y.layers)&&(_.pushLight(Z),Z.castShadow&&_.pushShadow(Z))}),D!==Q&&D.traverseVisible(function(Z){Z.isLight&&Z.layers.test(Y.layers)&&(_.pushLight(Z),Z.castShadow&&_.pushShadow(Z))}),_.setupLights(y._useLegacyLights);const tt=new Set;return D.traverse(function(Z){const yt=Z.material;if(yt)if(Array.isArray(yt))for(let Dt=0;Dt<yt.length;Dt++){const kt=yt[Dt];te(kt,Q,Z),tt.add(kt)}else te(yt,Q,Z),tt.add(yt)}),E.pop(),_=null,tt},this.compileAsync=function(D,Y,Q=null){const tt=this.compile(D,Y,Q);return new Promise(Z=>{function yt(){if(tt.forEach(function(Dt){Wt.get(Dt).currentProgram.isReady()&&tt.delete(Dt)}),tt.size===0){Z(D);return}setTimeout(yt,10)}Tt.get("KHR_parallel_shader_compile")!==null?yt():setTimeout(yt,10)})};let Jt=null;function ae(D){Jt&&Jt(D)}function Le(){Ce.stop()}function re(){Ce.start()}const Ce=new Bp;Ce.setAnimationLoop(ae),typeof self!="undefined"&&Ce.setContext(self),this.setAnimationLoop=function(D){Jt=D,_t.setAnimationLoop(D),D===null?Ce.stop():Ce.start()},_t.addEventListener("sessionstart",Le),_t.addEventListener("sessionend",re),this.render=function(D,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),_t.enabled===!0&&_t.isPresenting===!0&&(_t.cameraAutoUpdate===!0&&_t.updateCamera(Y),Y=_t.getCamera()),D.isScene===!0&&D.onBeforeRender(y,D,Y,A),_=Ot.get(D,E.length),_.init(),E.push(_),Rt.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),mt.setFromProjectionMatrix(Rt),rt=this.localClippingEnabled,$=Vt.init(this.clippingPlanes,rt),w=bt.get(D,v.length),w.init(),v.push(w),je(D,Y,0,y.sortObjects),w.finish(),y.sortObjects===!0&&w.sort(J,et),this.info.render.frame++,$===!0&&Vt.beginShadows();const Q=_.state.shadowsArray;if(ot.render(Q,D,Y),$===!0&&Vt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(_t.enabled===!1||_t.isPresenting===!1||_t.hasDepthSensing()===!1)&&ne.render(w,D),_.setupLights(y._useLegacyLights),Y.isArrayCamera){const tt=Y.cameras;for(let Z=0,yt=tt.length;Z<yt;Z++){const Dt=tt[Z];eo(w,D,Dt,Dt.viewport)}}else eo(w,D,Y);A!==null&&(N.updateMultisampleRenderTarget(A),N.updateRenderTargetMipmap(A)),D.isScene===!0&&D.onAfterRender(y,D,Y),Yt.resetDefaultState(),I=-1,z=null,E.pop(),E.length>0?_=E[E.length-1]:_=null,v.pop(),v.length>0?w=v[v.length-1]:w=null};function je(D,Y,Q,tt){if(D.visible===!1)return;if(D.layers.test(Y.layers)){if(D.isGroup)Q=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(Y);else if(D.isLight)_.pushLight(D),D.castShadow&&_.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||mt.intersectsSprite(D)){tt&&Et.setFromMatrixPosition(D.matrixWorld).applyMatrix4(Rt);const Dt=ct.update(D),kt=D.material;kt.visible&&w.push(D,Dt,kt,Q,Et.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||mt.intersectsObject(D))){const Dt=ct.update(D),kt=D.material;if(tt&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),Et.copy(D.boundingSphere.center)):(Dt.boundingSphere===null&&Dt.computeBoundingSphere(),Et.copy(Dt.boundingSphere.center)),Et.applyMatrix4(D.matrixWorld).applyMatrix4(Rt)),Array.isArray(kt)){const Ft=Dt.groups;for(let Xt=0,jt=Ft.length;Xt<jt;Xt++){const $t=Ft[Xt],Me=kt[$t.materialIndex];Me&&Me.visible&&w.push(D,Dt,Me,Q,Et.z,$t)}}else kt.visible&&w.push(D,Dt,kt,Q,Et.z,null)}}const yt=D.children;for(let Dt=0,kt=yt.length;Dt<kt;Dt++)je(yt[Dt],Y,Q,tt)}function eo(D,Y,Q,tt){const Z=D.opaque,yt=D.transmissive,Dt=D.transparent;_.setupLightsView(Q),$===!0&&Vt.setGlobalState(y.clippingPlanes,Q),yt.length>0&&Ra(Z,yt,Y,Q),tt&&At.viewport(M.copy(tt)),Z.length>0&&di(Z,Y,Q),yt.length>0&&di(yt,Y,Q),Dt.length>0&&di(Dt,Y,Q),At.buffers.depth.setTest(!0),At.buffers.depth.setMask(!0),At.buffers.color.setMask(!0),At.setPolygonOffset(!1)}function Ra(D,Y,Q,tt){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;const yt=Ht.isWebGL2;wt===null&&(wt=new In(1,1,{generateMipmaps:!0,type:Tt.has("EXT_color_buffer_half_float")?qn:Wn,minFilter:tr,samples:yt?4:0})),y.getDrawingBufferSize(Lt),yt?wt.setSize(Lt.x,Lt.y):wt.setSize(ma(Lt.x),ma(Lt.y));const Dt=y.getRenderTarget();y.setRenderTarget(wt),y.getClearColor(X),F=y.getClearAlpha(),F<1&&y.setClearColor(16777215,.5),y.clear();const kt=y.toneMapping;y.toneMapping=Ii,di(D,Q,tt),N.updateMultisampleRenderTarget(wt),N.updateRenderTargetMipmap(wt);let Ft=!1;for(let Xt=0,jt=Y.length;Xt<jt;Xt++){const $t=Y[Xt],Me=$t.object,Ke=$t.geometry,De=$t.material,Sn=$t.group;if(De.side===mn&&Me.layers.test(tt.layers)){const _e=De.side;De.side=hn,De.needsUpdate=!0,no(Me,Q,tt,Ke,De,Sn),De.side=_e,De.needsUpdate=!0,Ft=!0}}Ft===!0&&(N.updateMultisampleRenderTarget(wt),N.updateRenderTargetMipmap(wt)),y.setRenderTarget(Dt),y.setClearColor(X,F),y.toneMapping=kt}function di(D,Y,Q){const tt=Y.isScene===!0?Y.overrideMaterial:null;for(let Z=0,yt=D.length;Z<yt;Z++){const Dt=D[Z],kt=Dt.object,Ft=Dt.geometry,Xt=tt===null?Dt.material:tt,jt=Dt.group;kt.layers.test(Q.layers)&&no(kt,Y,Q,Ft,Xt,jt)}}function no(D,Y,Q,tt,Z,yt){D.onBeforeRender(y,Y,Q,tt,Z,yt),D.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),Z.onBeforeRender(y,Y,Q,tt,D,yt),Z.transparent===!0&&Z.side===mn&&Z.forceSinglePass===!1?(Z.side=hn,Z.needsUpdate=!0,y.renderBufferDirect(Q,Y,tt,Z,D,yt),Z.side=Xn,Z.needsUpdate=!0,y.renderBufferDirect(Q,Y,tt,Z,D,yt),Z.side=mn):y.renderBufferDirect(Q,Y,tt,Z,D,yt),D.onAfterRender(y,Y,Q,tt,Z,yt)}function ar(D,Y,Q){Y.isScene!==!0&&(Y=zt);const tt=Wt.get(D),Z=_.state.lights,yt=_.state.shadowsArray,Dt=Z.state.version,kt=St.getParameters(D,Z.state,yt,Y,Q),Ft=St.getProgramCacheKey(kt);let Xt=tt.programs;tt.environment=D.isMeshStandardMaterial?Y.environment:null,tt.fog=Y.fog,tt.envMap=(D.isMeshStandardMaterial?K:R).get(D.envMap||tt.environment),Xt===void 0&&(D.addEventListener("dispose",lt),Xt=new Map,tt.programs=Xt);let jt=Xt.get(Ft);if(jt!==void 0){if(tt.currentProgram===jt&&tt.lightsStateVersion===Dt)return ls(D,kt),jt}else kt.uniforms=St.getUniforms(D),D.onBuild(Q,kt,y),D.onBeforeCompile(kt,y),jt=St.acquireProgram(kt,Ft),Xt.set(Ft,jt),tt.uniforms=kt.uniforms;const $t=tt.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&($t.clippingPlanes=Vt.uniform),ls(D,kt),tt.needsLights=Da(D),tt.lightsStateVersion=Dt,tt.needsLights&&($t.ambientLightColor.value=Z.state.ambient,$t.lightProbe.value=Z.state.probe,$t.directionalLights.value=Z.state.directional,$t.directionalLightShadows.value=Z.state.directionalShadow,$t.spotLights.value=Z.state.spot,$t.spotLightShadows.value=Z.state.spotShadow,$t.rectAreaLights.value=Z.state.rectArea,$t.ltc_1.value=Z.state.rectAreaLTC1,$t.ltc_2.value=Z.state.rectAreaLTC2,$t.pointLights.value=Z.state.point,$t.pointLightShadows.value=Z.state.pointShadow,$t.hemisphereLights.value=Z.state.hemi,$t.directionalShadowMap.value=Z.state.directionalShadowMap,$t.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,$t.spotShadowMap.value=Z.state.spotShadowMap,$t.spotLightMatrix.value=Z.state.spotLightMatrix,$t.spotLightMap.value=Z.state.spotLightMap,$t.pointShadowMap.value=Z.state.pointShadowMap,$t.pointShadowMatrix.value=Z.state.pointShadowMatrix),tt.currentProgram=jt,tt.uniformsList=null,jt}function pi(D){if(D.uniformsList===null){const Y=D.currentProgram.getUniforms();D.uniformsList=ia.seqWithValue(Y.seq,D.uniforms)}return D.uniformsList}function ls(D,Y){const Q=Wt.get(D);Q.outputColorSpace=Y.outputColorSpace,Q.batching=Y.batching,Q.instancing=Y.instancing,Q.instancingColor=Y.instancingColor,Q.skinning=Y.skinning,Q.morphTargets=Y.morphTargets,Q.morphNormals=Y.morphNormals,Q.morphColors=Y.morphColors,Q.morphTargetsCount=Y.morphTargetsCount,Q.numClippingPlanes=Y.numClippingPlanes,Q.numIntersection=Y.numClipIntersection,Q.vertexAlphas=Y.vertexAlphas,Q.vertexTangents=Y.vertexTangents,Q.toneMapping=Y.toneMapping}function La(D,Y,Q,tt,Z){Y.isScene!==!0&&(Y=zt),N.resetTextureUnits();const yt=Y.fog,Dt=tt.isMeshStandardMaterial?Y.environment:null,kt=A===null?y.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:hi,Ft=(tt.isMeshStandardMaterial?K:R).get(tt.envMap||Dt),Xt=tt.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,jt=!!Q.attributes.tangent&&(!!tt.normalMap||tt.anisotropy>0),$t=!!Q.morphAttributes.position,Me=!!Q.morphAttributes.normal,Ke=!!Q.morphAttributes.color;let De=Ii;tt.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(De=y.toneMapping);const Sn=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,_e=Sn!==void 0?Sn.length:0,Kt=Wt.get(tt),us=_.state.lights;if($===!0&&(rt===!0||D!==z)){const Be=D===z&&tt.id===I;Vt.setState(tt,D,Be)}let xe=!1;tt.version===Kt.__version?(Kt.needsLights&&Kt.lightsStateVersion!==us.state.version||Kt.outputColorSpace!==kt||Z.isBatchedMesh&&Kt.batching===!1||!Z.isBatchedMesh&&Kt.batching===!0||Z.isInstancedMesh&&Kt.instancing===!1||!Z.isInstancedMesh&&Kt.instancing===!0||Z.isSkinnedMesh&&Kt.skinning===!1||!Z.isSkinnedMesh&&Kt.skinning===!0||Z.isInstancedMesh&&Kt.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Kt.instancingColor===!1&&Z.instanceColor!==null||Kt.envMap!==Ft||tt.fog===!0&&Kt.fog!==yt||Kt.numClippingPlanes!==void 0&&(Kt.numClippingPlanes!==Vt.numPlanes||Kt.numIntersection!==Vt.numIntersection)||Kt.vertexAlphas!==Xt||Kt.vertexTangents!==jt||Kt.morphTargets!==$t||Kt.morphNormals!==Me||Kt.morphColors!==Ke||Kt.toneMapping!==De||Ht.isWebGL2===!0&&Kt.morphTargetsCount!==_e)&&(xe=!0):(xe=!0,Kt.__version=tt.version);let Vn=Kt.currentProgram;xe===!0&&(Vn=ar(tt,Y,Z));let io=!1,Fi=!1,hs=!1;const Re=Vn.getUniforms(),He=Kt.uniforms;if(At.useProgram(Vn.program)&&(io=!0,Fi=!0,hs=!0),tt.id!==I&&(I=tt.id,Fi=!0),io||z!==D){Re.setValue(j,"projectionMatrix",D.projectionMatrix),Re.setValue(j,"viewMatrix",D.matrixWorldInverse);const Be=Re.map.cameraPosition;Be!==void 0&&Be.setValue(j,Et.setFromMatrixPosition(D.matrixWorld)),Ht.logarithmicDepthBuffer&&Re.setValue(j,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(tt.isMeshPhongMaterial||tt.isMeshToonMaterial||tt.isMeshLambertMaterial||tt.isMeshBasicMaterial||tt.isMeshStandardMaterial||tt.isShaderMaterial)&&Re.setValue(j,"isOrthographic",D.isOrthographicCamera===!0),z!==D&&(z=D,Fi=!0,hs=!0)}if(Z.isSkinnedMesh){Re.setOptional(j,Z,"bindMatrix"),Re.setOptional(j,Z,"bindMatrixInverse");const Be=Z.skeleton;Be&&(Ht.floatVertexTextures?(Be.boneTexture===null&&Be.computeBoneTexture(),Re.setValue(j,"boneTexture",Be.boneTexture,N)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}Z.isBatchedMesh&&(Re.setOptional(j,Z,"batchingTexture"),Re.setValue(j,"batchingTexture",Z._matricesTexture,N));const $n=Q.morphAttributes;if(($n.position!==void 0||$n.normal!==void 0||$n.color!==void 0&&Ht.isWebGL2===!0)&&Zt.update(Z,Q,Vn),(Fi||Kt.receiveShadow!==Z.receiveShadow)&&(Kt.receiveShadow=Z.receiveShadow,Re.setValue(j,"receiveShadow",Z.receiveShadow)),tt.isMeshGouraudMaterial&&tt.envMap!==null&&(He.envMap.value=Ft,He.flipEnvMap.value=Ft.isCubeTexture&&Ft.isRenderTargetTexture===!1?-1:1),Fi&&(Re.setValue(j,"toneMappingExposure",y.toneMappingExposure),Kt.needsLights&&cs(He,hs),yt&&tt.fog===!0&&vt.refreshFogUniforms(He,yt),vt.refreshMaterialUniforms(He,tt,W,H,wt),ia.upload(j,pi(Kt),He,N)),tt.isShaderMaterial&&tt.uniformsNeedUpdate===!0&&(ia.upload(j,pi(Kt),He,N),tt.uniformsNeedUpdate=!1),tt.isSpriteMaterial&&Re.setValue(j,"center",Z.center),Re.setValue(j,"modelViewMatrix",Z.modelViewMatrix),Re.setValue(j,"normalMatrix",Z.normalMatrix),Re.setValue(j,"modelMatrix",Z.matrixWorld),tt.isShaderMaterial||tt.isRawShaderMaterial){const Be=tt.uniformsGroups;for(let fi=0,ds=Be.length;fi<ds;fi++)if(Ht.isWebGL2){const ro=Be[fi];B.update(ro,Vn),B.bind(ro,Vn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Vn}function cs(D,Y){D.ambientLightColor.needsUpdate=Y,D.lightProbe.needsUpdate=Y,D.directionalLights.needsUpdate=Y,D.directionalLightShadows.needsUpdate=Y,D.pointLights.needsUpdate=Y,D.pointLightShadows.needsUpdate=Y,D.spotLights.needsUpdate=Y,D.spotLightShadows.needsUpdate=Y,D.rectAreaLights.needsUpdate=Y,D.hemisphereLights.needsUpdate=Y}function Da(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(D,Y,Q){Wt.get(D.texture).__webglTexture=Y,Wt.get(D.depthTexture).__webglTexture=Q;const tt=Wt.get(D);tt.__hasExternalTextures=!0,tt.__hasExternalTextures&&(tt.__autoAllocateDepthBuffer=Q===void 0,tt.__autoAllocateDepthBuffer||Tt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),tt.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(D,Y){const Q=Wt.get(D);Q.__webglFramebuffer=Y,Q.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(D,Y=0,Q=0){A=D,C=Y,P=Q;let tt=!0,Z=null,yt=!1,Dt=!1;if(D){const Ft=Wt.get(D);Ft.__useDefaultFramebuffer!==void 0?(At.bindFramebuffer(j.FRAMEBUFFER,null),tt=!1):Ft.__webglFramebuffer===void 0?N.setupRenderTarget(D):Ft.__hasExternalTextures&&N.rebindTextures(D,Wt.get(D.texture).__webglTexture,Wt.get(D.depthTexture).__webglTexture);const Xt=D.texture;(Xt.isData3DTexture||Xt.isDataArrayTexture||Xt.isCompressedArrayTexture)&&(Dt=!0);const jt=Wt.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(jt[Y])?Z=jt[Y][Q]:Z=jt[Y],yt=!0):Ht.isWebGL2&&D.samples>0&&N.useMultisampledRTT(D)===!1?Z=Wt.get(D).__webglMultisampledFramebuffer:Array.isArray(jt)?Z=jt[Q]:Z=jt,M.copy(D.viewport),L.copy(D.scissor),V=D.scissorTest}else M.copy(it).multiplyScalar(W).floor(),L.copy(nt).multiplyScalar(W).floor(),V=pt;if(At.bindFramebuffer(j.FRAMEBUFFER,Z)&&Ht.drawBuffers&&tt&&At.drawBuffers(D,Z),At.viewport(M),At.scissor(L),At.setScissorTest(V),yt){const Ft=Wt.get(D.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Ft.__webglTexture,Q)}else if(Dt){const Ft=Wt.get(D.texture),Xt=Y||0;j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,Ft.__webglTexture,Q||0,Xt)}I=-1},this.readRenderTargetPixels=function(D,Y,Q,tt,Z,yt,Dt){if(!(D&&D.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let kt=Wt.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Dt!==void 0&&(kt=kt[Dt]),kt){At.bindFramebuffer(j.FRAMEBUFFER,kt);try{const Ft=D.texture,Xt=Ft.format,jt=Ft.type;if(Xt!==qe&&xt.convert(Xt)!==j.getParameter(j.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const $t=jt===qn&&(Tt.has("EXT_color_buffer_half_float")||Ht.isWebGL2&&Tt.has("EXT_color_buffer_float"));if(jt!==Wn&&xt.convert(jt)!==j.getParameter(j.IMPLEMENTATION_COLOR_READ_TYPE)&&!(jt===ge&&(Ht.isWebGL2||Tt.has("OES_texture_float")||Tt.has("WEBGL_color_buffer_float")))&&!$t){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=D.width-tt&&Q>=0&&Q<=D.height-Z&&j.readPixels(Y,Q,tt,Z,xt.convert(Xt),xt.convert(jt),yt)}finally{const Ft=A!==null?Wt.get(A).__webglFramebuffer:null;At.bindFramebuffer(j.FRAMEBUFFER,Ft)}}},this.copyFramebufferToTexture=function(D,Y,Q=0){const tt=Math.pow(2,-Q),Z=Math.floor(Y.image.width*tt),yt=Math.floor(Y.image.height*tt);N.setTexture2D(Y,0),j.copyTexSubImage2D(j.TEXTURE_2D,Q,0,0,D.x,D.y,Z,yt),At.unbindTexture()},this.copyTextureToTexture=function(D,Y,Q,tt=0){const Z=Y.image.width,yt=Y.image.height,Dt=xt.convert(Q.format),kt=xt.convert(Q.type);N.setTexture2D(Q,0),j.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,Q.flipY),j.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),j.pixelStorei(j.UNPACK_ALIGNMENT,Q.unpackAlignment),Y.isDataTexture?j.texSubImage2D(j.TEXTURE_2D,tt,D.x,D.y,Z,yt,Dt,kt,Y.image.data):Y.isCompressedTexture?j.compressedTexSubImage2D(j.TEXTURE_2D,tt,D.x,D.y,Y.mipmaps[0].width,Y.mipmaps[0].height,Dt,Y.mipmaps[0].data):j.texSubImage2D(j.TEXTURE_2D,tt,D.x,D.y,Dt,kt,Y.image),tt===0&&Q.generateMipmaps&&j.generateMipmap(j.TEXTURE_2D),At.unbindTexture()},this.copyTextureToTexture3D=function(D,Y,Q,tt,Z=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const yt=D.max.x-D.min.x+1,Dt=D.max.y-D.min.y+1,kt=D.max.z-D.min.z+1,Ft=xt.convert(tt.format),Xt=xt.convert(tt.type);let jt;if(tt.isData3DTexture)N.setTexture3D(tt,0),jt=j.TEXTURE_3D;else if(tt.isDataArrayTexture||tt.isCompressedArrayTexture)N.setTexture2DArray(tt,0),jt=j.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}j.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,tt.flipY),j.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,tt.premultiplyAlpha),j.pixelStorei(j.UNPACK_ALIGNMENT,tt.unpackAlignment);const $t=j.getParameter(j.UNPACK_ROW_LENGTH),Me=j.getParameter(j.UNPACK_IMAGE_HEIGHT),Ke=j.getParameter(j.UNPACK_SKIP_PIXELS),De=j.getParameter(j.UNPACK_SKIP_ROWS),Sn=j.getParameter(j.UNPACK_SKIP_IMAGES),_e=Q.isCompressedTexture?Q.mipmaps[Z]:Q.image;j.pixelStorei(j.UNPACK_ROW_LENGTH,_e.width),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,_e.height),j.pixelStorei(j.UNPACK_SKIP_PIXELS,D.min.x),j.pixelStorei(j.UNPACK_SKIP_ROWS,D.min.y),j.pixelStorei(j.UNPACK_SKIP_IMAGES,D.min.z),Q.isDataTexture||Q.isData3DTexture?j.texSubImage3D(jt,Z,Y.x,Y.y,Y.z,yt,Dt,kt,Ft,Xt,_e.data):Q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),j.compressedTexSubImage3D(jt,Z,Y.x,Y.y,Y.z,yt,Dt,kt,Ft,_e.data)):j.texSubImage3D(jt,Z,Y.x,Y.y,Y.z,yt,Dt,kt,Ft,Xt,_e),j.pixelStorei(j.UNPACK_ROW_LENGTH,$t),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,Me),j.pixelStorei(j.UNPACK_SKIP_PIXELS,Ke),j.pixelStorei(j.UNPACK_SKIP_ROWS,De),j.pixelStorei(j.UNPACK_SKIP_IMAGES,Sn),Z===0&&tt.generateMipmaps&&j.generateMipmap(jt),At.unbindTexture()},this.initTexture=function(D){D.isCubeTexture?N.setTextureCube(D,0):D.isData3DTexture?N.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?N.setTexture2DArray(D,0):N.setTexture2D(D,0),At.unbindTexture()},this.resetState=function(){C=0,P=0,A=null,At.reset(),Yt.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Rc?"display-p3":"srgb",e.unpackColorSpace=de.workingColorSpace===Ea?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===We?ir:Sp}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===ir?We:hi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class Iw extends Xp{}Iw.prototype.isWebGL1Renderer=!0;class qp extends Ue{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class va extends dn{constructor(t=null,e=1,n=1,r,o,a,c,h,d=pe,p=pe,f,m){super(null,a,c,h,d,p,r,o,f,m),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class jp extends ss{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new se(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const _d=new U,xd=new U,bd=new ue,Il=new Ma,Fo=new Qs;class Ai extends Ue{constructor(t=new nn,e=new jp){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let r=1,o=e.count;r<o;r++)_d.fromBufferAttribute(e,r-1),xd.fromBufferAttribute(e,r),n[r]=n[r-1],n[r]+=_d.distanceTo(xd);t.setAttribute("lineDistance",new we(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,o=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Fo.copy(n.boundingSphere),Fo.applyMatrix4(r),Fo.radius+=o,t.ray.intersectsSphere(Fo)===!1)return;bd.copy(r).invert(),Il.copy(t.ray).applyMatrix4(bd);const c=o/((this.scale.x+this.scale.y+this.scale.z)/3),h=c*c,d=new U,p=new U,f=new U,m=new U,x=this.isLineSegments?2:1,b=n.index,_=n.attributes.position;if(b!==null){const v=Math.max(0,a.start),E=Math.min(b.count,a.start+a.count);for(let y=v,T=E-1;y<T;y+=x){const C=b.getX(y),P=b.getX(y+1);if(d.fromBufferAttribute(_,C),p.fromBufferAttribute(_,P),Il.distanceSqToSegment(d,p,m,f)>h)continue;m.applyMatrix4(this.matrixWorld);const I=t.ray.origin.distanceTo(m);I<t.near||I>t.far||e.push({distance:I,point:f.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else{const v=Math.max(0,a.start),E=Math.min(_.count,a.start+a.count);for(let y=v,T=E-1;y<T;y+=x){if(d.fromBufferAttribute(_,y),p.fromBufferAttribute(_,y+1),Il.distanceSqToSegment(d,p,m,f)>h)continue;m.applyMatrix4(this.matrixWorld);const P=t.ray.origin.distanceTo(m);P<t.near||P>t.far||e.push({distance:P,point:f.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,a=r.length;o<a;o++){const c=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=o}}}}}class Je extends nn{constructor(t=1,e=1,n=1,r=32,o=1,a=!1,c=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:r,heightSegments:o,openEnded:a,thetaStart:c,thetaLength:h};const d=this;r=Math.floor(r),o=Math.floor(o);const p=[],f=[],m=[],x=[];let b=0;const w=[],_=n/2;let v=0;E(),a===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(p),this.setAttribute("position",new we(f,3)),this.setAttribute("normal",new we(m,3)),this.setAttribute("uv",new we(x,2));function E(){const T=new U,C=new U;let P=0;const A=(e-t)/n;for(let I=0;I<=o;I++){const z=[],M=I/o,L=M*(e-t)+t;for(let V=0;V<=r;V++){const X=V/r,F=X*h+c,G=Math.sin(F),H=Math.cos(F);C.x=L*G,C.y=-M*n+_,C.z=L*H,f.push(C.x,C.y,C.z),T.set(G,A,H).normalize(),m.push(T.x,T.y,T.z),x.push(X,1-M),z.push(b++)}w.push(z)}for(let I=0;I<r;I++)for(let z=0;z<o;z++){const M=w[z][I],L=w[z+1][I],V=w[z+1][I+1],X=w[z][I+1];p.push(M,L,X),p.push(L,V,X),P+=6}d.addGroup(v,P,0),v+=P}function y(T){const C=b,P=new It,A=new U;let I=0;const z=T===!0?t:e,M=T===!0?1:-1;for(let V=1;V<=r;V++)f.push(0,_*M,0),m.push(0,M,0),x.push(.5,.5),b++;const L=b;for(let V=0;V<=r;V++){const F=V/r*h+c,G=Math.cos(F),H=Math.sin(F);A.x=z*H,A.y=_*M,A.z=z*G,f.push(A.x,A.y,A.z),m.push(0,M,0),P.x=G*.5+.5,P.y=H*.5*M+.5,x.push(P.x,P.y),b++}for(let V=0;V<r;V++){const X=C+V,F=L+V;T===!0?p.push(F,F+1,X):p.push(F+1,F,X),I+=3}d.addGroup(v,I,T===!0?1:2),v+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Je(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Nc extends nn{constructor(t=[],e=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:r};const o=[],a=[];c(r),d(n),p(),this.setAttribute("position",new we(o,3)),this.setAttribute("normal",new we(o.slice(),3)),this.setAttribute("uv",new we(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function c(E){const y=new U,T=new U,C=new U;for(let P=0;P<e.length;P+=3)x(e[P+0],y),x(e[P+1],T),x(e[P+2],C),h(y,T,C,E)}function h(E,y,T,C){const P=C+1,A=[];for(let I=0;I<=P;I++){A[I]=[];const z=E.clone().lerp(T,I/P),M=y.clone().lerp(T,I/P),L=P-I;for(let V=0;V<=L;V++)V===0&&I===P?A[I][V]=z:A[I][V]=z.clone().lerp(M,V/L)}for(let I=0;I<P;I++)for(let z=0;z<2*(P-I)-1;z++){const M=Math.floor(z/2);z%2===0?(m(A[I][M+1]),m(A[I+1][M]),m(A[I][M])):(m(A[I][M+1]),m(A[I+1][M+1]),m(A[I+1][M]))}}function d(E){const y=new U;for(let T=0;T<o.length;T+=3)y.x=o[T+0],y.y=o[T+1],y.z=o[T+2],y.normalize().multiplyScalar(E),o[T+0]=y.x,o[T+1]=y.y,o[T+2]=y.z}function p(){const E=new U;for(let y=0;y<o.length;y+=3){E.x=o[y+0],E.y=o[y+1],E.z=o[y+2];const T=_(E)/2/Math.PI+.5,C=v(E)/Math.PI+.5;a.push(T,1-C)}b(),f()}function f(){for(let E=0;E<a.length;E+=6){const y=a[E+0],T=a[E+2],C=a[E+4],P=Math.max(y,T,C),A=Math.min(y,T,C);P>.9&&A<.1&&(y<.2&&(a[E+0]+=1),T<.2&&(a[E+2]+=1),C<.2&&(a[E+4]+=1))}}function m(E){o.push(E.x,E.y,E.z)}function x(E,y){const T=E*3;y.x=t[T+0],y.y=t[T+1],y.z=t[T+2]}function b(){const E=new U,y=new U,T=new U,C=new U,P=new It,A=new It,I=new It;for(let z=0,M=0;z<o.length;z+=9,M+=6){E.set(o[z+0],o[z+1],o[z+2]),y.set(o[z+3],o[z+4],o[z+5]),T.set(o[z+6],o[z+7],o[z+8]),P.set(a[M+0],a[M+1]),A.set(a[M+2],a[M+3]),I.set(a[M+4],a[M+5]),C.copy(E).add(y).add(T).divideScalar(3);const L=_(C);w(P,M+0,E,L),w(A,M+2,y,L),w(I,M+4,T,L)}}function w(E,y,T,C){C<0&&E.x===1&&(a[y]=E.x-1),T.x===0&&T.z===0&&(a[y]=C/2/Math.PI+.5)}function _(E){return Math.atan2(E.z,-E.x)}function v(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Nc(t.vertices,t.indices,t.radius,t.details)}}class $r extends Nc{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,r,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new $r(t.radius,t.detail)}}class Ta extends nn{constructor(t=1,e=32,n=16,r=0,o=Math.PI*2,a=0,c=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:r,phiLength:o,thetaStart:a,thetaLength:c},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const h=Math.min(a+c,Math.PI);let d=0;const p=[],f=new U,m=new U,x=[],b=[],w=[],_=[];for(let v=0;v<=n;v++){const E=[],y=v/n;let T=0;v===0&&a===0?T=.5/e:v===n&&h===Math.PI&&(T=-.5/e);for(let C=0;C<=e;C++){const P=C/e;f.x=-t*Math.cos(r+P*o)*Math.sin(a+y*c),f.y=t*Math.cos(a+y*c),f.z=t*Math.sin(r+P*o)*Math.sin(a+y*c),b.push(f.x,f.y,f.z),m.copy(f).normalize(),w.push(m.x,m.y,m.z),_.push(P+T,1-y),E.push(d++)}p.push(E)}for(let v=0;v<n;v++)for(let E=0;E<e;E++){const y=p[v][E+1],T=p[v][E],C=p[v+1][E],P=p[v+1][E+1];(v!==0||a>0)&&x.push(y,T,P),(v!==n-1||h<Math.PI)&&x.push(T,C,P)}this.setIndex(x),this.setAttribute("position",new we(b,3)),this.setAttribute("normal",new we(w,3)),this.setAttribute("uv",new we(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ta(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Qi extends nn{constructor(t=1,e=.4,n=12,r=48,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:r,arc:o},n=Math.floor(n),r=Math.floor(r);const a=[],c=[],h=[],d=[],p=new U,f=new U,m=new U;for(let x=0;x<=n;x++)for(let b=0;b<=r;b++){const w=b/r*o,_=x/n*Math.PI*2;f.x=(t+e*Math.cos(_))*Math.cos(w),f.y=(t+e*Math.cos(_))*Math.sin(w),f.z=e*Math.sin(_),c.push(f.x,f.y,f.z),p.x=t*Math.cos(w),p.y=t*Math.sin(w),m.subVectors(f,p).normalize(),h.push(m.x,m.y,m.z),d.push(b/r),d.push(x/n)}for(let x=1;x<=n;x++)for(let b=1;b<=r;b++){const w=(r+1)*x+b-1,_=(r+1)*(x-1)+b-1,v=(r+1)*(x-1)+b,E=(r+1)*x+b;a.push(w,_,E),a.push(_,v,E)}this.setIndex(a),this.setAttribute("position",new we(c,3)),this.setAttribute("normal",new we(h,3)),this.setAttribute("uv",new we(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qi(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Fc extends nn{constructor(t=1,e=.4,n=64,r=8,o=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:t,tube:e,tubularSegments:n,radialSegments:r,p:o,q:a},n=Math.floor(n),r=Math.floor(r);const c=[],h=[],d=[],p=[],f=new U,m=new U,x=new U,b=new U,w=new U,_=new U,v=new U;for(let y=0;y<=n;++y){const T=y/n*o*Math.PI*2;E(T,o,a,t,x),E(T+.01,o,a,t,b),_.subVectors(b,x),v.addVectors(b,x),w.crossVectors(_,v),v.crossVectors(w,_),w.normalize(),v.normalize();for(let C=0;C<=r;++C){const P=C/r*Math.PI*2,A=-e*Math.cos(P),I=e*Math.sin(P);f.x=x.x+(A*v.x+I*w.x),f.y=x.y+(A*v.y+I*w.y),f.z=x.z+(A*v.z+I*w.z),h.push(f.x,f.y,f.z),m.subVectors(f,x).normalize(),d.push(m.x,m.y,m.z),p.push(y/n),p.push(C/r)}}for(let y=1;y<=n;y++)for(let T=1;T<=r;T++){const C=(r+1)*(y-1)+(T-1),P=(r+1)*y+(T-1),A=(r+1)*y+T,I=(r+1)*(y-1)+T;c.push(C,P,I),c.push(P,A,I)}this.setIndex(c),this.setAttribute("position",new we(h,3)),this.setAttribute("normal",new we(d,3)),this.setAttribute("uv",new we(p,2));function E(y,T,C,P,A){const I=Math.cos(y),z=Math.sin(y),M=C/T*y,L=Math.cos(M);A.x=P*(2+L)*.5*I,A.y=P*(2+L)*z*.5,A.z=P*Math.sin(M)*.5}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fc(t.radius,t.tube,t.tubularSegments,t.radialSegments,t.p,t.q)}}class Uw extends ss{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new se(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Tp,this.normalScale=new It(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Nw extends Ue{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new se(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const Ul=new ue,yd=new U,wd=new U;class Fw{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new It(512,512),this.map=null,this.mapPass=null,this.matrix=new ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ic,this._frameExtents=new It(1,1),this._viewportCount=1,this._viewports=[new ve(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;yd.setFromMatrixPosition(t.matrixWorld),e.position.copy(yd),wd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(wd),e.updateMatrixWorld(),Ul.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ul),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ul)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Ed=new ue,Ps=new U,Nl=new U;class Ow extends Fw{constructor(){super(new bn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new It(4,2),this._viewportCount=6,this._viewports=[new ve(2,1,1,1),new ve(0,1,1,1),new ve(3,1,1,1),new ve(1,1,1,1),new ve(3,0,1,1),new ve(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,r=this.matrix,o=t.distance||n.far;o!==n.far&&(n.far=o,n.updateProjectionMatrix()),Ps.setFromMatrixPosition(t.matrixWorld),n.position.copy(Ps),Nl.copy(n.position),Nl.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Nl),n.updateMatrixWorld(),r.makeTranslation(-Ps.x,-Ps.y,-Ps.z),Ed.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ed)}}class Bw extends Nw{constructor(t,e,n=0,r=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new Ow}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Aa{constructor(t){this.value=t}clone(){return new Aa(this.value.clone===void 0?this.value:this.value.clone())}}class kw{constructor(t,e,n=0,r=1/0){this.ray=new Ma(t,e),this.near=n,this.far=r,this.camera=null,this.layers=new Dc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,n=[]){return lc(t,this,n,e),n.sort(Md),n}intersectObjects(t,e=!0,n=[]){for(let r=0,o=t.length;r<o;r++)lc(t[r],this,n,e);return n.sort(Md),n}}function Md(i,t){return i.distance-t.distance}function lc(i,t,e,n){if(i.layers.test(t.layers)&&i.raycast(t,e),n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)lc(r[o],t,e,!0)}}class Sd{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Xe(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Td=new U,Oo=new U;class ui{constructor(t=new U,e=new U){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){Td.subVectors(t,this.start),Oo.subVectors(this.end,this.start);const n=Oo.dot(Oo);let o=Oo.dot(Td)/n;return e&&(o=Xe(o,0,1)),o}closestPointToPoint(t,e,n){const r=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(r).add(this.start)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ac}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ac);const Yp=0,Vw=1,zw=2,Ad=2,Fl=1.25,Cd=1,Ui=6*4+4+4,Ca=65535,Hw=Math.pow(2,-24),Ol=Symbol("SKIP_GENERATION");function $p(i){return i.index?i.index.count:i.attributes.position.count}function as(i){return $p(i)/3}function Kp(i,t=ArrayBuffer){return i>65535?new Uint32Array(new t(4*i)):new Uint16Array(new t(2*i))}function Gw(i,t){if(!i.index){const e=i.attributes.position.count,n=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,r=Kp(e,n);i.setIndex(new en(r,1));for(let o=0;o<e;o++)r[o]=o}}function Zp(i){const t=as(i),e=i.drawRange,n=e.start/3,r=(e.start+e.count)/3,o=Math.max(0,n),a=Math.min(t,r)-o;return[{offset:Math.floor(o),count:Math.floor(a)}]}function Qp(i){if(!i.groups||!i.groups.length)return Zp(i);const t=[],e=new Set,n=i.drawRange,r=n.start/3,o=(n.start+n.count)/3;for(const c of i.groups){const h=c.start/3,d=(c.start+c.count)/3;e.add(Math.max(r,h)),e.add(Math.min(o,d))}const a=Array.from(e.values()).sort((c,h)=>c-h);for(let c=0;c<a.length-1;c++){const h=a[c],d=a[c+1];t.push({offset:Math.floor(h),count:Math.floor(d-h)})}return t}function Ww(i){if(i.groups.length===0)return!1;const t=as(i),e=Qp(i).sort((o,a)=>o.offset-a.offset),n=e[e.length-1];n.count=Math.min(t-n.offset,n.count);let r=0;return e.forEach(({count:o})=>r+=o),t!==r}function Bl(i,t,e,n,r){let o=1/0,a=1/0,c=1/0,h=-1/0,d=-1/0,p=-1/0,f=1/0,m=1/0,x=1/0,b=-1/0,w=-1/0,_=-1/0;for(let v=t*6,E=(t+e)*6;v<E;v+=6){const y=i[v+0],T=i[v+1],C=y-T,P=y+T;C<o&&(o=C),P>h&&(h=P),y<f&&(f=y),y>b&&(b=y);const A=i[v+2],I=i[v+3],z=A-I,M=A+I;z<a&&(a=z),M>d&&(d=M),A<m&&(m=A),A>w&&(w=A);const L=i[v+4],V=i[v+5],X=L-V,F=L+V;X<c&&(c=X),F>p&&(p=F),L<x&&(x=L),L>_&&(_=L)}n[0]=o,n[1]=a,n[2]=c,n[3]=h,n[4]=d,n[5]=p,r[0]=f,r[1]=m,r[2]=x,r[3]=b,r[4]=w,r[5]=_}function Xw(i,t=null,e=null,n=null){const r=i.attributes.position,o=i.index?i.index.array:null,a=as(i),c=r.normalized;let h;t===null?(h=new Float32Array(a*6*4),e=0,n=a):(h=t,e=e||0,n=n||a);const d=r.array,p=r.offset||0;let f=3;r.isInterleavedBufferAttribute&&(f=r.data.stride);const m=["getX","getY","getZ"];for(let x=e;x<e+n;x++){const b=x*3,w=x*6;let _=b+0,v=b+1,E=b+2;o&&(_=o[_],v=o[v],E=o[E]),c||(_=_*f+p,v=v*f+p,E=E*f+p);for(let y=0;y<3;y++){let T,C,P;c?(T=r[m[y]](_),C=r[m[y]](v),P=r[m[y]](E)):(T=d[_+y],C=d[v+y],P=d[E+y]);let A=T;C<A&&(A=C),P<A&&(A=P);let I=T;C>I&&(I=C),P>I&&(I=P);const z=(I-A)/2,M=y*2;h[w+M+0]=A+z,h[w+M+1]=z+(Math.abs(A)+z)*Hw}}return h}function Pe(i,t,e){return e.min.x=t[i],e.min.y=t[i+1],e.min.z=t[i+2],e.max.x=t[i+3],e.max.y=t[i+4],e.max.z=t[i+5],e}function Pd(i){let t=-1,e=-1/0;for(let n=0;n<3;n++){const r=i[n+3]-i[n];r>e&&(e=r,t=n)}return t}function Rd(i,t){t.set(i)}function Ld(i,t,e){let n,r;for(let o=0;o<3;o++){const a=o+3;n=i[o],r=t[o],e[o]=n<r?n:r,n=i[a],r=t[a],e[a]=n>r?n:r}}function Bo(i,t,e){for(let n=0;n<3;n++){const r=t[i+2*n],o=t[i+2*n+1],a=r-o,c=r+o;a<e[n]&&(e[n]=a),c>e[n+3]&&(e[n+3]=c)}}function Rs(i){const t=i[3]-i[0],e=i[4]-i[1],n=i[5]-i[2];return 2*(t*e+e*n+n*t)}const ai=32,qw=(i,t)=>i.candidate-t.candidate,Ci=new Array(ai).fill().map(()=>({count:0,bounds:new Float32Array(6),rightCacheBounds:new Float32Array(6),leftCacheBounds:new Float32Array(6),candidate:0})),ko=new Float32Array(6);function jw(i,t,e,n,r,o){let a=-1,c=0;if(o===Yp)a=Pd(t),a!==-1&&(c=(t[a]+t[a+3])/2);else if(o===Vw)a=Pd(i),a!==-1&&(c=Yw(e,n,r,a));else if(o===zw){const h=Rs(i);let d=Fl*r;const p=n*6,f=(n+r)*6;for(let m=0;m<3;m++){const x=t[m],_=(t[m+3]-x)/ai;if(r<ai/4){const v=[...Ci];v.length=r;let E=0;for(let T=p;T<f;T+=6,E++){const C=v[E];C.candidate=e[T+2*m],C.count=0;const{bounds:P,leftCacheBounds:A,rightCacheBounds:I}=C;for(let z=0;z<3;z++)I[z]=1/0,I[z+3]=-1/0,A[z]=1/0,A[z+3]=-1/0,P[z]=1/0,P[z+3]=-1/0;Bo(T,e,P)}v.sort(qw);let y=r;for(let T=0;T<y;T++){const C=v[T];for(;T+1<y&&v[T+1].candidate===C.candidate;)v.splice(T+1,1),y--}for(let T=p;T<f;T+=6){const C=e[T+2*m];for(let P=0;P<y;P++){const A=v[P];C>=A.candidate?Bo(T,e,A.rightCacheBounds):(Bo(T,e,A.leftCacheBounds),A.count++)}}for(let T=0;T<y;T++){const C=v[T],P=C.count,A=r-C.count,I=C.leftCacheBounds,z=C.rightCacheBounds;let M=0;P!==0&&(M=Rs(I)/h);let L=0;A!==0&&(L=Rs(z)/h);const V=Cd+Fl*(M*P+L*A);V<d&&(a=m,d=V,c=C.candidate)}}else{for(let y=0;y<ai;y++){const T=Ci[y];T.count=0,T.candidate=x+_+y*_;const C=T.bounds;for(let P=0;P<3;P++)C[P]=1/0,C[P+3]=-1/0}for(let y=p;y<f;y+=6){let P=~~((e[y+2*m]-x)/_);P>=ai&&(P=ai-1);const A=Ci[P];A.count++,Bo(y,e,A.bounds)}const v=Ci[ai-1];Rd(v.bounds,v.rightCacheBounds);for(let y=ai-2;y>=0;y--){const T=Ci[y],C=Ci[y+1];Ld(T.bounds,C.rightCacheBounds,T.rightCacheBounds)}let E=0;for(let y=0;y<ai-1;y++){const T=Ci[y],C=T.count,P=T.bounds,I=Ci[y+1].rightCacheBounds;C!==0&&(E===0?Rd(P,ko):Ld(P,ko,ko)),E+=C;let z=0,M=0;E!==0&&(z=Rs(ko)/h);const L=r-E;L!==0&&(M=Rs(I)/h);const V=Cd+Fl*(z*E+M*L);V<d&&(a=m,d=V,c=T.candidate)}}}}else console.warn(`MeshBVH: Invalid build strategy value ${o} used.`);return{axis:a,pos:c}}function Yw(i,t,e,n){let r=0;for(let o=t,a=t+e;o<a;o++)r+=i[o*6+n*2];return r/e}class kl{constructor(){this.boundingData=new Float32Array(6)}}function $w(i,t,e,n,r,o){let a=n,c=n+r-1;const h=o.pos,d=o.axis*2;for(;;){for(;a<=c&&e[a*6+d]<h;)a++;for(;a<=c&&e[c*6+d]>=h;)c--;if(a<c){for(let p=0;p<3;p++){let f=t[a*3+p];t[a*3+p]=t[c*3+p],t[c*3+p]=f}for(let p=0;p<6;p++){let f=e[a*6+p];e[a*6+p]=e[c*6+p],e[c*6+p]=f}a++,c--}else return a}}function Kw(i,t,e,n,r,o){let a=n,c=n+r-1;const h=o.pos,d=o.axis*2;for(;;){for(;a<=c&&e[a*6+d]<h;)a++;for(;a<=c&&e[c*6+d]>=h;)c--;if(a<c){let p=i[a];i[a]=i[c],i[c]=p;for(let f=0;f<6;f++){let m=e[a*6+f];e[a*6+f]=e[c*6+f],e[c*6+f]=m}a++,c--}else return a}}function cn(i,t){return t[i+15]===65535}function gn(i,t){return t[i+6]}function En(i,t){return t[i+14]}function Rn(i){return i+8}function Mn(i,t){return t[i+6]}function Oc(i,t){return t[i+7]}let Jp,Vs,ra,tf;const Zw=Math.pow(2,32);function cc(i){return"count"in i?1:1+cc(i.left)+cc(i.right)}function Qw(i,t,e){return Jp=new Float32Array(e),Vs=new Uint32Array(e),ra=new Uint16Array(e),tf=new Uint8Array(e),uc(i,t)}function uc(i,t){const e=i/4,n=i/2,r="count"in t,o=t.boundingData;for(let a=0;a<6;a++)Jp[e+a]=o[a];if(r)if(t.buffer){const a=t.buffer;tf.set(new Uint8Array(a),i);for(let c=i,h=i+a.byteLength;c<h;c+=Ui){const d=c/2;cn(d,ra)||(Vs[c/4+6]+=e)}return i+a.byteLength}else{const a=t.offset,c=t.count;return Vs[e+6]=a,ra[n+14]=c,ra[n+15]=Ca,i+Ui}else{const a=t.left,c=t.right,h=t.splitAxis;let d;if(d=uc(i+Ui,a),d/4>Zw)throw new Error("MeshBVH: Cannot store child pointer greater than 32 bits.");return Vs[e+6]=d/4,d=uc(d,c),Vs[e+7]=h,d}}function Jw(i,t){const e=(i.index?i.index.count:i.attributes.position.count)/3,n=e>2**16,r=n?4:2,o=t?new SharedArrayBuffer(e*r):new ArrayBuffer(e*r),a=n?new Uint32Array(o):new Uint16Array(o);for(let c=0,h=a.length;c<h;c++)a[c]=c;return a}function tE(i,t,e,n,r){const{maxDepth:o,verbose:a,maxLeafTris:c,strategy:h,onProgress:d,indirect:p}=r,f=i._indirectBuffer,m=i.geometry,x=m.index?m.index.array:null,b=p?Kw:$w,w=as(m),_=new Float32Array(6);let v=!1;const E=new kl;return Bl(t,e,n,E.boundingData,_),T(E,e,n,_),E;function y(C){d&&d(C/w)}function T(C,P,A,I=null,z=0){if(!v&&z>=o&&(v=!0,a&&(console.warn(`MeshBVH: Max depth of ${o} reached when generating BVH. Consider increasing maxDepth.`),console.warn(m))),A<=c||z>=o)return y(P+A),C.offset=P,C.count=A,C;const M=jw(C.boundingData,I,t,P,A,h);if(M.axis===-1)return y(P+A),C.offset=P,C.count=A,C;const L=b(f,x,t,P,A,M);if(L===P||L===P+A)y(P+A),C.offset=P,C.count=A;else{C.splitAxis=M.axis;const V=new kl,X=P,F=L-P;C.left=V,Bl(t,X,F,V.boundingData,_),T(V,X,F,_,z+1);const G=new kl,H=L,W=A-F;C.right=G,Bl(t,H,W,G.boundingData,_),T(G,H,W,_,z+1)}return C}}function eE(i,t){const e=i.geometry;t.indirect&&(i._indirectBuffer=Jw(e,t.useSharedArrayBuffer),Ww(e)&&!t.verbose&&console.warn('MeshBVH: Provided geometry contains groups that do not fully span the vertex contents while using the "indirect" option. BVH may incorrectly report intersections on unrendered portions of the geometry.')),i._indirectBuffer||Gw(e,t);const n=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,r=Xw(e),o=t.indirect?Zp(e):Qp(e);i._roots=o.map(a=>{const c=tE(i,r,a.offset,a.count,t),h=cc(c),d=new n(Ui*h);return Qw(0,c,d),d})}class jn{constructor(){this.min=1/0,this.max=-1/0}setFromPointsField(t,e){let n=1/0,r=-1/0;for(let o=0,a=t.length;o<a;o++){const h=t[o][e];n=h<n?h:n,r=h>r?h:r}this.min=n,this.max=r}setFromPoints(t,e){let n=1/0,r=-1/0;for(let o=0,a=e.length;o<a;o++){const c=e[o],h=t.dot(c);n=h<n?h:n,r=h>r?h:r}this.min=n,this.max=r}isSeparated(t){return this.min>t.max||t.min>this.max}}jn.prototype.setFromBox=function(){const i=new U;return function(e,n){const r=n.min,o=n.max;let a=1/0,c=-1/0;for(let h=0;h<=1;h++)for(let d=0;d<=1;d++)for(let p=0;p<=1;p++){i.x=r.x*h+o.x*(1-h),i.y=r.y*d+o.y*(1-d),i.z=r.z*p+o.z*(1-p);const f=e.dot(i);a=Math.min(f,a),c=Math.max(f,c)}this.min=a,this.max=c}}();(function(){const i=new jn;return function(e,n){const r=e.points,o=e.satAxes,a=e.satBounds,c=n.points,h=n.satAxes,d=n.satBounds;for(let p=0;p<3;p++){const f=a[p],m=o[p];if(i.setFromPoints(m,c),f.isSeparated(i))return!1}for(let p=0;p<3;p++){const f=d[p],m=h[p];if(i.setFromPoints(m,r),f.isSeparated(i))return!1}}})();const nE=function(){const i=new U,t=new U,e=new U;return function(r,o,a){const c=r.start,h=i,d=o.start,p=t;e.subVectors(c,d),i.subVectors(r.end,r.start),t.subVectors(o.end,o.start);const f=e.dot(p),m=p.dot(h),x=p.dot(p),b=e.dot(h),_=h.dot(h)*x-m*m;let v,E;_!==0?v=(f*m-b*x)/_:v=0,E=(f+v*m)/x,a.x=v,a.y=E}}(),Bc=function(){const i=new It,t=new U,e=new U;return function(r,o,a,c){nE(r,o,i);let h=i.x,d=i.y;if(h>=0&&h<=1&&d>=0&&d<=1){r.at(h,a),o.at(d,c);return}else if(h>=0&&h<=1){d<0?o.at(0,c):o.at(1,c),r.closestPointToPoint(c,!0,a);return}else if(d>=0&&d<=1){h<0?r.at(0,a):r.at(1,a),o.closestPointToPoint(a,!0,c);return}else{let p;h<0?p=r.start:p=r.end;let f;d<0?f=o.start:f=o.end;const m=t,x=e;if(r.closestPointToPoint(f,!0,t),o.closestPointToPoint(p,!0,e),m.distanceToSquared(f)<=x.distanceToSquared(p)){a.copy(m),c.copy(f);return}else{a.copy(p),c.copy(x);return}}}}(),iE=function(){const i=new U,t=new U,e=new Hn,n=new ui;return function(o,a){const{radius:c,center:h}=o,{a:d,b:p,c:f}=a;if(n.start=d,n.end=p,n.closestPointToPoint(h,!0,i).distanceTo(h)<=c||(n.start=d,n.end=f,n.closestPointToPoint(h,!0,i).distanceTo(h)<=c)||(n.start=p,n.end=f,n.closestPointToPoint(h,!0,i).distanceTo(h)<=c))return!0;const w=a.getPlane(e);if(Math.abs(w.distanceToPoint(h))<=c){const v=w.projectPoint(h,t);if(a.containsPoint(v))return!0}return!1}}(),rE=1e-15;function Vl(i){return Math.abs(i)<rE}class Bn extends ln{constructor(...t){super(...t),this.isExtendedTriangle=!0,this.satAxes=new Array(4).fill().map(()=>new U),this.satBounds=new Array(4).fill().map(()=>new jn),this.points=[this.a,this.b,this.c],this.sphere=new Qs,this.plane=new Hn,this.needsUpdate=!0}intersectsSphere(t){return iE(t,this)}update(){const t=this.a,e=this.b,n=this.c,r=this.points,o=this.satAxes,a=this.satBounds,c=o[0],h=a[0];this.getNormal(c),h.setFromPoints(c,r);const d=o[1],p=a[1];d.subVectors(t,e),p.setFromPoints(d,r);const f=o[2],m=a[2];f.subVectors(e,n),m.setFromPoints(f,r);const x=o[3],b=a[3];x.subVectors(n,t),b.setFromPoints(x,r),this.sphere.setFromPoints(this.points),this.plane.setFromNormalAndCoplanarPoint(c,t),this.needsUpdate=!1}}Bn.prototype.closestPointToSegment=function(){const i=new U,t=new U,e=new ui;return function(r,o=null,a=null){const{start:c,end:h}=r,d=this.points;let p,f=1/0;for(let m=0;m<3;m++){const x=(m+1)%3;e.start.copy(d[m]),e.end.copy(d[x]),Bc(e,r,i,t),p=i.distanceToSquared(t),p<f&&(f=p,o&&o.copy(i),a&&a.copy(t))}return this.closestPointToPoint(c,i),p=c.distanceToSquared(i),p<f&&(f=p,o&&o.copy(i),a&&a.copy(c)),this.closestPointToPoint(h,i),p=h.distanceToSquared(i),p<f&&(f=p,o&&o.copy(i),a&&a.copy(h)),Math.sqrt(f)}}();Bn.prototype.intersectsTriangle=function(){const i=new Bn,t=new Array(3),e=new Array(3),n=new jn,r=new jn,o=new U,a=new U,c=new U,h=new U,d=new U,p=new ui,f=new ui,m=new ui,x=new U;function b(w,_,v){const E=w.points;let y=0,T=-1;for(let C=0;C<3;C++){const{start:P,end:A}=p;P.copy(E[C]),A.copy(E[(C+1)%3]),p.delta(a);const I=Vl(_.distanceToPoint(P));if(Vl(_.normal.dot(a))&&I){v.copy(p),y=2;break}const z=_.intersectLine(p,x);if(!z&&I&&x.copy(P),(z||I)&&!Vl(x.distanceTo(A))){if(y<=1)(y===1?v.start:v.end).copy(x),I&&(T=y);else if(y>=2){(T===1?v.start:v.end).copy(x),y=2;break}if(y++,y===2&&T===-1)break}}return y}return function(_,v=null,E=!1){this.needsUpdate&&this.update(),_.isExtendedTriangle?_.needsUpdate&&_.update():(i.copy(_),i.update(),_=i);const y=this.plane,T=_.plane;if(Math.abs(y.normal.dot(T.normal))>1-1e-10){const C=this.satBounds,P=this.satAxes;e[0]=_.a,e[1]=_.b,e[2]=_.c;for(let z=0;z<4;z++){const M=C[z],L=P[z];if(n.setFromPoints(L,e),M.isSeparated(n))return!1}const A=_.satBounds,I=_.satAxes;t[0]=this.a,t[1]=this.b,t[2]=this.c;for(let z=0;z<4;z++){const M=A[z],L=I[z];if(n.setFromPoints(L,t),M.isSeparated(n))return!1}for(let z=0;z<4;z++){const M=P[z];for(let L=0;L<4;L++){const V=I[L];if(o.crossVectors(M,V),n.setFromPoints(o,t),r.setFromPoints(o,e),n.isSeparated(r))return!1}}return v&&(E||console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."),v.start.set(0,0,0),v.end.set(0,0,0)),!0}else{const C=b(this,T,f);if(C===1&&_.containsPoint(f.end))return v&&(v.start.copy(f.end),v.end.copy(f.end)),!0;if(C!==2)return!1;const P=b(_,y,m);if(P===1&&this.containsPoint(m.end))return v&&(v.start.copy(m.end),v.end.copy(m.end)),!0;if(P!==2)return!1;if(f.delta(c),m.delta(h),c.dot(h)<0){let X=m.start;m.start=m.end,m.end=X}const A=f.start.dot(c),I=f.end.dot(c),z=m.start.dot(c),M=m.end.dot(c),L=I<z,V=A<M;return A!==M&&z!==I&&L===V?!1:(v&&(d.subVectors(f.start,m.start),d.dot(c)>0?v.start.copy(f.start):v.start.copy(m.start),d.subVectors(f.end,m.end),d.dot(c)<0?v.end.copy(f.end):v.end.copy(m.end)),!0)}}}();Bn.prototype.distanceToPoint=function(){const i=new U;return function(e){return this.closestPointToPoint(e,i),e.distanceTo(i)}}();Bn.prototype.distanceToTriangle=function(){const i=new U,t=new U,e=["a","b","c"],n=new ui,r=new ui;return function(a,c=null,h=null){const d=c||h?n:null;if(this.intersectsTriangle(a,d))return(c||h)&&(c&&d.getCenter(c),h&&d.getCenter(h)),0;let p=1/0;for(let f=0;f<3;f++){let m;const x=e[f],b=a[x];this.closestPointToPoint(b,i),m=b.distanceToSquared(i),m<p&&(p=m,c&&c.copy(i),h&&h.copy(b));const w=this[x];a.closestPointToPoint(w,i),m=w.distanceToSquared(i),m<p&&(p=m,c&&c.copy(w),h&&h.copy(i))}for(let f=0;f<3;f++){const m=e[f],x=e[(f+1)%3];n.set(this[m],this[x]);for(let b=0;b<3;b++){const w=e[b],_=e[(b+1)%3];r.set(a[w],a[_]),Bc(n,r,i,t);const v=i.distanceToSquared(t);v<p&&(p=v,c&&c.copy(i),h&&h.copy(t))}}return Math.sqrt(p)}}();class pn{constructor(t,e,n){this.isOrientedBox=!0,this.min=new U,this.max=new U,this.matrix=new ue,this.invMatrix=new ue,this.points=new Array(8).fill().map(()=>new U),this.satAxes=new Array(3).fill().map(()=>new U),this.satBounds=new Array(3).fill().map(()=>new jn),this.alignedSatBounds=new Array(3).fill().map(()=>new jn),this.needsUpdate=!1,t&&this.min.copy(t),e&&this.max.copy(e),n&&this.matrix.copy(n)}set(t,e,n){this.min.copy(t),this.max.copy(e),this.matrix.copy(n),this.needsUpdate=!0}copy(t){this.min.copy(t.min),this.max.copy(t.max),this.matrix.copy(t.matrix),this.needsUpdate=!0}}pn.prototype.update=function(){return function(){const t=this.matrix,e=this.min,n=this.max,r=this.points;for(let d=0;d<=1;d++)for(let p=0;p<=1;p++)for(let f=0;f<=1;f++){const m=1*d|2*p|4*f,x=r[m];x.x=d?n.x:e.x,x.y=p?n.y:e.y,x.z=f?n.z:e.z,x.applyMatrix4(t)}const o=this.satBounds,a=this.satAxes,c=r[0];for(let d=0;d<3;d++){const p=a[d],f=o[d],m=1<<d,x=r[m];p.subVectors(c,x),f.setFromPoints(p,r)}const h=this.alignedSatBounds;h[0].setFromPointsField(r,"x"),h[1].setFromPointsField(r,"y"),h[2].setFromPointsField(r,"z"),this.invMatrix.copy(this.matrix).invert(),this.needsUpdate=!1}}();pn.prototype.intersectsBox=function(){const i=new jn;return function(e){this.needsUpdate&&this.update();const n=e.min,r=e.max,o=this.satBounds,a=this.satAxes,c=this.alignedSatBounds;if(i.min=n.x,i.max=r.x,c[0].isSeparated(i)||(i.min=n.y,i.max=r.y,c[1].isSeparated(i))||(i.min=n.z,i.max=r.z,c[2].isSeparated(i)))return!1;for(let h=0;h<3;h++){const d=a[h],p=o[h];if(i.setFromBox(d,e),p.isSeparated(i))return!1}return!0}}();pn.prototype.intersectsTriangle=function(){const i=new Bn,t=new Array(3),e=new jn,n=new jn,r=new U;return function(a){this.needsUpdate&&this.update(),a.isExtendedTriangle?a.needsUpdate&&a.update():(i.copy(a),i.update(),a=i);const c=this.satBounds,h=this.satAxes;t[0]=a.a,t[1]=a.b,t[2]=a.c;for(let m=0;m<3;m++){const x=c[m],b=h[m];if(e.setFromPoints(b,t),x.isSeparated(e))return!1}const d=a.satBounds,p=a.satAxes,f=this.points;for(let m=0;m<3;m++){const x=d[m],b=p[m];if(e.setFromPoints(b,f),x.isSeparated(e))return!1}for(let m=0;m<3;m++){const x=h[m];for(let b=0;b<4;b++){const w=p[b];if(r.crossVectors(x,w),e.setFromPoints(r,t),n.setFromPoints(r,f),e.isSeparated(n))return!1}}return!0}}();pn.prototype.closestPointToPoint=function(){return function(t,e){return this.needsUpdate&&this.update(),e.copy(t).applyMatrix4(this.invMatrix).clamp(this.min,this.max).applyMatrix4(this.matrix),e}}();pn.prototype.distanceToPoint=function(){const i=new U;return function(e){return this.closestPointToPoint(e,i),e.distanceTo(i)}}();pn.prototype.distanceToBox=function(){const i=["x","y","z"],t=new Array(12).fill().map(()=>new ui),e=new Array(12).fill().map(()=>new ui),n=new U,r=new U;return function(a,c=0,h=null,d=null){if(this.needsUpdate&&this.update(),this.intersectsBox(a))return(h||d)&&(a.getCenter(r),this.closestPointToPoint(r,n),a.closestPointToPoint(n,r),h&&h.copy(n),d&&d.copy(r)),0;const p=c*c,f=a.min,m=a.max,x=this.points;let b=1/0;for(let _=0;_<8;_++){const v=x[_];r.copy(v).clamp(f,m);const E=v.distanceToSquared(r);if(E<b&&(b=E,h&&h.copy(v),d&&d.copy(r),E<p))return Math.sqrt(E)}let w=0;for(let _=0;_<3;_++)for(let v=0;v<=1;v++)for(let E=0;E<=1;E++){const y=(_+1)%3,T=(_+2)%3,C=v<<y|E<<T,P=1<<_|v<<y|E<<T,A=x[C],I=x[P];t[w].set(A,I);const M=i[_],L=i[y],V=i[T],X=e[w],F=X.start,G=X.end;F[M]=f[M],F[L]=v?f[L]:m[L],F[V]=E?f[V]:m[L],G[M]=m[M],G[L]=v?f[L]:m[L],G[V]=E?f[V]:m[L],w++}for(let _=0;_<=1;_++)for(let v=0;v<=1;v++)for(let E=0;E<=1;E++){r.x=_?m.x:f.x,r.y=v?m.y:f.y,r.z=E?m.z:f.z,this.closestPointToPoint(r,n);const y=r.distanceToSquared(n);if(y<b&&(b=y,h&&h.copy(n),d&&d.copy(r),y<p))return Math.sqrt(y)}for(let _=0;_<12;_++){const v=t[_];for(let E=0;E<12;E++){const y=e[E];Bc(v,y,n,r);const T=n.distanceToSquared(r);if(T<b&&(b=T,h&&h.copy(n),d&&d.copy(r),T<p))return Math.sqrt(T)}}return Math.sqrt(b)}}();class kc{constructor(t){this._getNewPrimitive=t,this._primitives=[]}getPrimitive(){const t=this._primitives;return t.length===0?this._getNewPrimitive():t.pop()}releasePrimitive(t){this._primitives.push(t)}}class sE extends kc{constructor(){super(()=>new Bn)}}const Ln=new sE;class oE{constructor(){this.float32Array=null,this.uint16Array=null,this.uint32Array=null;const t=[];let e=null;this.setBuffer=n=>{e&&t.push(e),e=n,this.float32Array=new Float32Array(n),this.uint16Array=new Uint16Array(n),this.uint32Array=new Uint32Array(n)},this.clearBuffer=()=>{e=null,this.float32Array=null,this.uint16Array=null,this.uint32Array=null,t.length!==0&&this.setBuffer(t.pop())}}}const Ee=new oE;let Di,Kr;const Ir=[],Vo=new kc(()=>new sn);function aE(i,t,e,n,r,o){Di=Vo.getPrimitive(),Kr=Vo.getPrimitive(),Ir.push(Di,Kr),Ee.setBuffer(i._roots[t]);const a=hc(0,i.geometry,e,n,r,o);Ee.clearBuffer(),Vo.releasePrimitive(Di),Vo.releasePrimitive(Kr),Ir.pop(),Ir.pop();const c=Ir.length;return c>0&&(Kr=Ir[c-1],Di=Ir[c-2]),a}function hc(i,t,e,n,r=null,o=0,a=0){const{float32Array:c,uint16Array:h,uint32Array:d}=Ee;let p=i*2;if(cn(p,h)){const b=gn(i,d),w=En(p,h);return Pe(i,c,Di),n(b,w,!1,a,o+i,Di)}else{let V=function(F){const{uint16Array:G,uint32Array:H}=Ee;let W=F*2;for(;!cn(W,G);)F=Rn(F),W=F*2;return gn(F,H)},X=function(F){const{uint16Array:G,uint32Array:H}=Ee;let W=F*2;for(;!cn(W,G);)F=Mn(F,H),W=F*2;return gn(F,H)+En(W,G)};var x=V,m=X;const b=Rn(i),w=Mn(i,d);let _=b,v=w,E,y,T,C;if(r&&(T=Di,C=Kr,Pe(_,c,T),Pe(v,c,C),E=r(T),y=r(C),y<E)){_=w,v=b;const F=E;E=y,y=F,T=C}T||(T=Di,Pe(_,c,T));const P=cn(_*2,h),A=e(T,P,E,a+1,o+_);let I;if(A===Ad){const F=V(_),H=X(_)-F;I=n(F,H,!0,a+1,o+_,T)}else I=A&&hc(_,t,e,n,r,o,a+1);if(I)return!0;C=Kr,Pe(v,c,C);const z=cn(v*2,h),M=e(C,z,y,a+1,o+v);let L;if(M===Ad){const F=V(v),H=X(v)-F;L=n(F,H,!0,a+1,o+v,C)}else L=M&&hc(v,t,e,n,r,o,a+1);return!!L}}const Ls=new U,zl=new U;function lE(i,t,e={},n=0,r=1/0){const o=n*n,a=r*r;let c=1/0,h=null;if(i.shapecast({boundsTraverseOrder:p=>(Ls.copy(t).clamp(p.min,p.max),Ls.distanceToSquared(t)),intersectsBounds:(p,f,m)=>m<c&&m<a,intersectsTriangle:(p,f)=>{p.closestPointToPoint(t,Ls);const m=t.distanceToSquared(Ls);return m<c&&(zl.copy(Ls),c=m,h=f),m<o}}),c===1/0)return null;const d=Math.sqrt(c);return e.point?e.point.copy(zl):e.point=zl.clone(),e.distance=d,e.faceIndex=h,e}const Ur=new U,Nr=new U,Fr=new U,zo=new It,Ho=new It,Go=new It,Dd=new U,Id=new U,Ud=new U,Wo=new U;function cE(i,t,e,n,r,o){let a;return o===hn?a=i.intersectTriangle(n,e,t,!0,r):a=i.intersectTriangle(t,e,n,o!==mn,r),a===null?null:{distance:i.origin.distanceTo(r),point:r.clone()}}function uE(i,t,e,n,r,o,a,c,h){Ur.fromBufferAttribute(t,o),Nr.fromBufferAttribute(t,a),Fr.fromBufferAttribute(t,c);const d=cE(i,Ur,Nr,Fr,Wo,h);if(d){n&&(zo.fromBufferAttribute(n,o),Ho.fromBufferAttribute(n,a),Go.fromBufferAttribute(n,c),d.uv=ln.getInterpolation(Wo,Ur,Nr,Fr,zo,Ho,Go,new It)),r&&(zo.fromBufferAttribute(r,o),Ho.fromBufferAttribute(r,a),Go.fromBufferAttribute(r,c),d.uv1=ln.getInterpolation(Wo,Ur,Nr,Fr,zo,Ho,Go,new It)),e&&(Dd.fromBufferAttribute(e,o),Id.fromBufferAttribute(e,a),Ud.fromBufferAttribute(e,c),d.normal=ln.getInterpolation(Wo,Ur,Nr,Fr,Dd,Id,Ud,new U),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const p={a:o,b:a,c,normal:new U,materialIndex:0};ln.getNormal(Ur,Nr,Fr,p.normal),d.face=p,d.faceIndex=o}return d}function Pa(i,t,e,n,r){const o=n*3;let a=o+0,c=o+1,h=o+2;const d=i.index;i.index&&(a=d.getX(a),c=d.getX(c),h=d.getX(h));const{position:p,normal:f,uv:m,uv1:x}=i.attributes,b=uE(e,p,f,m,x,a,c,h,t);return b?(b.faceIndex=n,r&&r.push(b),b):null}function Oe(i,t,e,n){const r=i.a,o=i.b,a=i.c;let c=t,h=t+1,d=t+2;e&&(c=e.getX(c),h=e.getX(h),d=e.getX(d)),r.x=n.getX(c),r.y=n.getY(c),r.z=n.getZ(c),o.x=n.getX(h),o.y=n.getY(h),o.z=n.getZ(h),a.x=n.getX(d),a.y=n.getY(d),a.z=n.getZ(d)}function hE(i,t,e,n,r,o){const{geometry:a,_indirectBuffer:c}=i;for(let h=n,d=n+r;h<d;h++)Pa(a,t,e,h,o)}function dE(i,t,e,n,r){const{geometry:o,_indirectBuffer:a}=i;let c=1/0,h=null;for(let d=n,p=n+r;d<p;d++){let f;f=Pa(o,t,e,d),f&&f.distance<c&&(h=f,c=f.distance)}return h}function pE(i,t,e,n,r,o,a){const{geometry:c}=e,{index:h}=c,d=c.attributes.position;for(let p=i,f=t+i;p<f;p++){let m;if(m=p,Oe(a,m*3,h,d),a.needsUpdate=!0,n(a,m,r,o))return!0}return!1}function fE(i,t=null){t&&Array.isArray(t)&&(t=new Set(t));const e=i.geometry,n=e.index?e.index.array:null,r=e.attributes.position;let o,a,c,h,d=0;const p=i._roots;for(let m=0,x=p.length;m<x;m++)o=p[m],a=new Uint32Array(o),c=new Uint16Array(o),h=new Float32Array(o),f(0,d),d+=o.byteLength;function f(m,x,b=!1){const w=m*2;if(c[w+15]===Ca){const v=a[m+6],E=c[w+14];let y=1/0,T=1/0,C=1/0,P=-1/0,A=-1/0,I=-1/0;for(let z=3*v,M=3*(v+E);z<M;z++){let L=n[z];const V=r.getX(L),X=r.getY(L),F=r.getZ(L);V<y&&(y=V),V>P&&(P=V),X<T&&(T=X),X>A&&(A=X),F<C&&(C=F),F>I&&(I=F)}return h[m+0]!==y||h[m+1]!==T||h[m+2]!==C||h[m+3]!==P||h[m+4]!==A||h[m+5]!==I?(h[m+0]=y,h[m+1]=T,h[m+2]=C,h[m+3]=P,h[m+4]=A,h[m+5]=I,!0):!1}else{const v=m+8,E=a[m+6],y=v+x,T=E+x;let C=b,P=!1,A=!1;t?C||(P=t.has(y),A=t.has(T),C=!P&&!A):(P=!0,A=!0);const I=C||P,z=C||A;let M=!1;I&&(M=f(v,x,C));let L=!1;z&&(L=f(E,x,C));const V=M||L;if(V)for(let X=0;X<3;X++){const F=v+X,G=E+X,H=h[F],W=h[F+3],J=h[G],et=h[G+3];h[m+X]=H<J?H:J,h[m+X+3]=W>et?W:et}return V}}}const Nd=new sn;function Ni(i,t,e,n){return Pe(i,t,Nd),e.intersectBox(Nd,n)}function mE(i,t,e,n,r,o){const{geometry:a,_indirectBuffer:c}=i;for(let h=n,d=n+r;h<d;h++){let p=c?c[h]:h;Pa(a,t,e,p,o)}}function gE(i,t,e,n,r){const{geometry:o,_indirectBuffer:a}=i;let c=1/0,h=null;for(let d=n,p=n+r;d<p;d++){let f;f=Pa(o,t,e,a?a[d]:d),f&&f.distance<c&&(h=f,c=f.distance)}return h}function vE(i,t,e,n,r,o,a){const{geometry:c}=e,{index:h}=c,d=c.attributes.position;for(let p=i,f=t+i;p<f;p++){let m;if(m=e.resolveTriangleIndex(p),Oe(a,m*3,h,d),a.needsUpdate=!0,n(a,m,r,o))return!0}return!1}const Fd=new U;function _E(i,t,e,n,r){Ee.setBuffer(i._roots[t]),dc(0,i,e,n,r),Ee.clearBuffer()}function dc(i,t,e,n,r){const{float32Array:o,uint16Array:a,uint32Array:c}=Ee,h=i*2;if(cn(h,a)){const p=gn(i,c),f=En(h,a);hE(t,e,n,p,f,r)}else{const p=Rn(i);Ni(p,o,n,Fd)&&dc(p,t,e,n,r);const f=Mn(i,c);Ni(f,o,n,Fd)&&dc(f,t,e,n,r)}}const Od=new U,xE=["x","y","z"];function bE(i,t,e,n){Ee.setBuffer(i._roots[t]);const r=pc(0,i,e,n);return Ee.clearBuffer(),r}function pc(i,t,e,n){const{float32Array:r,uint16Array:o,uint32Array:a}=Ee;let c=i*2;if(cn(c,o)){const d=gn(i,a),p=En(c,o);return dE(t,e,n,d,p)}else{const d=Oc(i,a),p=xE[d],m=n.direction[p]>=0;let x,b;m?(x=Rn(i),b=Mn(i,a)):(x=Mn(i,a),b=Rn(i));const _=Ni(x,r,n,Od)?pc(x,t,e,n):null;if(_){const y=_.point[p];if(m?y<=r[b+d]:y>=r[b+d+3])return _}const E=Ni(b,r,n,Od)?pc(b,t,e,n):null;return _&&E?_.distance<=E.distance?_:E:_||E||null}}const Xo=new sn,Or=new Bn,Br=new Bn,Ds=new ue,Bd=new pn,qo=new pn;function yE(i,t,e,n){Ee.setBuffer(i._roots[t]);const r=fc(0,i,e,n);return Ee.clearBuffer(),r}function fc(i,t,e,n,r=null){const{float32Array:o,uint16Array:a,uint32Array:c}=Ee;let h=i*2;if(r===null&&(e.boundingBox||e.computeBoundingBox(),Bd.set(e.boundingBox.min,e.boundingBox.max,n),r=Bd),cn(h,a)){const p=t.geometry,f=p.index,m=p.attributes.position,x=e.index,b=e.attributes.position,w=gn(i,c),_=En(h,a);if(Ds.copy(n).invert(),e.boundsTree)return Pe(i,o,qo),qo.matrix.copy(Ds),qo.needsUpdate=!0,e.boundsTree.shapecast({intersectsBounds:E=>qo.intersectsBox(E),intersectsTriangle:E=>{E.a.applyMatrix4(n),E.b.applyMatrix4(n),E.c.applyMatrix4(n),E.needsUpdate=!0;for(let y=w*3,T=(_+w)*3;y<T;y+=3)if(Oe(Br,y,f,m),Br.needsUpdate=!0,E.intersectsTriangle(Br))return!0;return!1}});for(let v=w*3,E=(_+w)*3;v<E;v+=3){Oe(Or,v,f,m),Or.a.applyMatrix4(Ds),Or.b.applyMatrix4(Ds),Or.c.applyMatrix4(Ds),Or.needsUpdate=!0;for(let y=0,T=x.count;y<T;y+=3)if(Oe(Br,y,x,b),Br.needsUpdate=!0,Or.intersectsTriangle(Br))return!0}}else{const p=i+8,f=c[i+6];return Pe(p,o,Xo),!!(r.intersectsBox(Xo)&&fc(p,t,e,n,r)||(Pe(f,o,Xo),r.intersectsBox(Xo)&&fc(f,t,e,n,r)))}}const jo=new ue,Hl=new pn,Is=new pn,wE=new U,EE=new U,ME=new U,SE=new U;function TE(i,t,e,n={},r={},o=0,a=1/0){t.boundingBox||t.computeBoundingBox(),Hl.set(t.boundingBox.min,t.boundingBox.max,e),Hl.needsUpdate=!0;const c=i.geometry,h=c.attributes.position,d=c.index,p=t.attributes.position,f=t.index,m=Ln.getPrimitive(),x=Ln.getPrimitive();let b=wE,w=EE,_=null,v=null;r&&(_=ME,v=SE);let E=1/0,y=null,T=null;return jo.copy(e).invert(),Is.matrix.copy(jo),i.shapecast({boundsTraverseOrder:C=>Hl.distanceToBox(C),intersectsBounds:(C,P,A)=>A<E&&A<a?(P&&(Is.min.copy(C.min),Is.max.copy(C.max),Is.needsUpdate=!0),!0):!1,intersectsRange:(C,P)=>{if(t.boundsTree)return t.boundsTree.shapecast({boundsTraverseOrder:I=>Is.distanceToBox(I),intersectsBounds:(I,z,M)=>M<E&&M<a,intersectsRange:(I,z)=>{for(let M=I,L=I+z;M<L;M++){Oe(x,3*M,f,p),x.a.applyMatrix4(e),x.b.applyMatrix4(e),x.c.applyMatrix4(e),x.needsUpdate=!0;for(let V=C,X=C+P;V<X;V++){Oe(m,3*V,d,h),m.needsUpdate=!0;const F=m.distanceToTriangle(x,b,_);if(F<E&&(w.copy(b),v&&v.copy(_),E=F,y=V,T=M),F<o)return!0}}}});{const A=as(t);for(let I=0,z=A;I<z;I++){Oe(x,3*I,f,p),x.a.applyMatrix4(e),x.b.applyMatrix4(e),x.c.applyMatrix4(e),x.needsUpdate=!0;for(let M=C,L=C+P;M<L;M++){Oe(m,3*M,d,h),m.needsUpdate=!0;const V=m.distanceToTriangle(x,b,_);if(V<E&&(w.copy(b),v&&v.copy(_),E=V,y=M,T=I),V<o)return!0}}}}}),Ln.releasePrimitive(m),Ln.releasePrimitive(x),E===1/0?null:(n.point?n.point.copy(w):n.point=w.clone(),n.distance=E,n.faceIndex=y,r&&(r.point?r.point.copy(v):r.point=v.clone(),r.point.applyMatrix4(jo),w.applyMatrix4(jo),r.distance=w.sub(r.point).length(),r.faceIndex=T),n)}function AE(i,t=null){t&&Array.isArray(t)&&(t=new Set(t));const e=i.geometry,n=e.index?e.index.array:null,r=e.attributes.position;let o,a,c,h,d=0;const p=i._roots;for(let m=0,x=p.length;m<x;m++)o=p[m],a=new Uint32Array(o),c=new Uint16Array(o),h=new Float32Array(o),f(0,d),d+=o.byteLength;function f(m,x,b=!1){const w=m*2;if(c[w+15]===Ca){const v=a[m+6],E=c[w+14];let y=1/0,T=1/0,C=1/0,P=-1/0,A=-1/0,I=-1/0;for(let z=v,M=v+E;z<M;z++){const L=3*i.resolveTriangleIndex(z);for(let V=0;V<3;V++){let X=L+V;X=n?n[X]:X;const F=r.getX(X),G=r.getY(X),H=r.getZ(X);F<y&&(y=F),F>P&&(P=F),G<T&&(T=G),G>A&&(A=G),H<C&&(C=H),H>I&&(I=H)}}return h[m+0]!==y||h[m+1]!==T||h[m+2]!==C||h[m+3]!==P||h[m+4]!==A||h[m+5]!==I?(h[m+0]=y,h[m+1]=T,h[m+2]=C,h[m+3]=P,h[m+4]=A,h[m+5]=I,!0):!1}else{const v=m+8,E=a[m+6],y=v+x,T=E+x;let C=b,P=!1,A=!1;t?C||(P=t.has(y),A=t.has(T),C=!P&&!A):(P=!0,A=!0);const I=C||P,z=C||A;let M=!1;I&&(M=f(v,x,C));let L=!1;z&&(L=f(E,x,C));const V=M||L;if(V)for(let X=0;X<3;X++){const F=v+X,G=E+X,H=h[F],W=h[F+3],J=h[G],et=h[G+3];h[m+X]=H<J?H:J,h[m+X+3]=W>et?W:et}return V}}}const kd=new U;function CE(i,t,e,n,r){Ee.setBuffer(i._roots[t]),mc(0,i,e,n,r),Ee.clearBuffer()}function mc(i,t,e,n,r){const{float32Array:o,uint16Array:a,uint32Array:c}=Ee,h=i*2;if(cn(h,a)){const p=gn(i,c),f=En(h,a);mE(t,e,n,p,f,r)}else{const p=Rn(i);Ni(p,o,n,kd)&&mc(p,t,e,n,r);const f=Mn(i,c);Ni(f,o,n,kd)&&mc(f,t,e,n,r)}}const Vd=new U,PE=["x","y","z"];function RE(i,t,e,n){Ee.setBuffer(i._roots[t]);const r=gc(0,i,e,n);return Ee.clearBuffer(),r}function gc(i,t,e,n){const{float32Array:r,uint16Array:o,uint32Array:a}=Ee;let c=i*2;if(cn(c,o)){const d=gn(i,a),p=En(c,o);return gE(t,e,n,d,p)}else{const d=Oc(i,a),p=PE[d],m=n.direction[p]>=0;let x,b;m?(x=Rn(i),b=Mn(i,a)):(x=Mn(i,a),b=Rn(i));const _=Ni(x,r,n,Vd)?gc(x,t,e,n):null;if(_){const y=_.point[p];if(m?y<=r[b+d]:y>=r[b+d+3])return _}const E=Ni(b,r,n,Vd)?gc(b,t,e,n):null;return _&&E?_.distance<=E.distance?_:E:_||E||null}}const Yo=new sn,kr=new Bn,Vr=new Bn,Us=new ue,zd=new pn,$o=new pn;function LE(i,t,e,n){Ee.setBuffer(i._roots[t]);const r=vc(0,i,e,n);return Ee.clearBuffer(),r}function vc(i,t,e,n,r=null){const{float32Array:o,uint16Array:a,uint32Array:c}=Ee;let h=i*2;if(r===null&&(e.boundingBox||e.computeBoundingBox(),zd.set(e.boundingBox.min,e.boundingBox.max,n),r=zd),cn(h,a)){const p=t.geometry,f=p.index,m=p.attributes.position,x=e.index,b=e.attributes.position,w=gn(i,c),_=En(h,a);if(Us.copy(n).invert(),e.boundsTree)return Pe(i,o,$o),$o.matrix.copy(Us),$o.needsUpdate=!0,e.boundsTree.shapecast({intersectsBounds:E=>$o.intersectsBox(E),intersectsTriangle:E=>{E.a.applyMatrix4(n),E.b.applyMatrix4(n),E.c.applyMatrix4(n),E.needsUpdate=!0;for(let y=w,T=_+w;y<T;y++)if(Oe(Vr,3*t.resolveTriangleIndex(y),f,m),Vr.needsUpdate=!0,E.intersectsTriangle(Vr))return!0;return!1}});for(let v=w,E=_+w;v<E;v++){const y=t.resolveTriangleIndex(v);Oe(kr,3*y,f,m),kr.a.applyMatrix4(Us),kr.b.applyMatrix4(Us),kr.c.applyMatrix4(Us),kr.needsUpdate=!0;for(let T=0,C=x.count;T<C;T+=3)if(Oe(Vr,T,x,b),Vr.needsUpdate=!0,kr.intersectsTriangle(Vr))return!0}}else{const p=i+8,f=c[i+6];return Pe(p,o,Yo),!!(r.intersectsBox(Yo)&&vc(p,t,e,n,r)||(Pe(f,o,Yo),r.intersectsBox(Yo)&&vc(f,t,e,n,r)))}}const Ko=new ue,Gl=new pn,Ns=new pn,DE=new U,IE=new U,UE=new U,NE=new U;function FE(i,t,e,n={},r={},o=0,a=1/0){t.boundingBox||t.computeBoundingBox(),Gl.set(t.boundingBox.min,t.boundingBox.max,e),Gl.needsUpdate=!0;const c=i.geometry,h=c.attributes.position,d=c.index,p=t.attributes.position,f=t.index,m=Ln.getPrimitive(),x=Ln.getPrimitive();let b=DE,w=IE,_=null,v=null;r&&(_=UE,v=NE);let E=1/0,y=null,T=null;return Ko.copy(e).invert(),Ns.matrix.copy(Ko),i.shapecast({boundsTraverseOrder:C=>Gl.distanceToBox(C),intersectsBounds:(C,P,A)=>A<E&&A<a?(P&&(Ns.min.copy(C.min),Ns.max.copy(C.max),Ns.needsUpdate=!0),!0):!1,intersectsRange:(C,P)=>{if(t.boundsTree){const A=t.boundsTree;return A.shapecast({boundsTraverseOrder:I=>Ns.distanceToBox(I),intersectsBounds:(I,z,M)=>M<E&&M<a,intersectsRange:(I,z)=>{for(let M=I,L=I+z;M<L;M++){const V=A.resolveTriangleIndex(M);Oe(x,3*V,f,p),x.a.applyMatrix4(e),x.b.applyMatrix4(e),x.c.applyMatrix4(e),x.needsUpdate=!0;for(let X=C,F=C+P;X<F;X++){const G=i.resolveTriangleIndex(X);Oe(m,3*G,d,h),m.needsUpdate=!0;const H=m.distanceToTriangle(x,b,_);if(H<E&&(w.copy(b),v&&v.copy(_),E=H,y=X,T=M),H<o)return!0}}}})}else{const A=as(t);for(let I=0,z=A;I<z;I++){Oe(x,3*I,f,p),x.a.applyMatrix4(e),x.b.applyMatrix4(e),x.c.applyMatrix4(e),x.needsUpdate=!0;for(let M=C,L=C+P;M<L;M++){const V=i.resolveTriangleIndex(M);Oe(m,3*V,d,h),m.needsUpdate=!0;const X=m.distanceToTriangle(x,b,_);if(X<E&&(w.copy(b),v&&v.copy(_),E=X,y=M,T=I),X<o)return!0}}}}}),Ln.releasePrimitive(m),Ln.releasePrimitive(x),E===1/0?null:(n.point?n.point.copy(w):n.point=w.clone(),n.distance=E,n.faceIndex=y,r&&(r.point?r.point.copy(v):r.point=v.clone(),r.point.applyMatrix4(Ko),w.applyMatrix4(Ko),r.distance=w.sub(r.point).length(),r.faceIndex=T),n)}function OE(){return typeof SharedArrayBuffer!="undefined"}const js=new Ee.constructor,_a=new Ee.constructor,Li=new kc(()=>new sn),zr=new sn,Hr=new sn,Wl=new sn,Xl=new sn;let ql=!1;function BE(i,t,e,n){if(ql)throw new Error("MeshBVH: Recursive calls to bvhcast not supported.");ql=!0;const r=i._roots,o=t._roots;let a,c=0,h=0;const d=new ue().copy(e).invert();for(let p=0,f=r.length;p<f;p++){js.setBuffer(r[p]),h=0;const m=Li.getPrimitive();Pe(0,js.float32Array,m),m.applyMatrix4(d);for(let x=0,b=o.length;x<b&&(_a.setBuffer(o[p]),a=On(0,0,e,d,n,c,h,0,0,m),_a.clearBuffer(),h+=o[x].length,!a);x++);if(Li.releasePrimitive(m),js.clearBuffer(),c+=r[p].length,a)break}return ql=!1,a}function On(i,t,e,n,r,o=0,a=0,c=0,h=0,d=null,p=!1){let f,m;p?(f=_a,m=js):(f=js,m=_a);const x=f.float32Array,b=f.uint32Array,w=f.uint16Array,_=m.float32Array,v=m.uint32Array,E=m.uint16Array,y=i*2,T=t*2,C=cn(y,w),P=cn(T,E);let A=!1;if(P&&C)p?A=r(gn(t,v),En(t*2,E),gn(i,b),En(i*2,w),h,a+t,c,o+i):A=r(gn(i,b),En(i*2,w),gn(t,v),En(t*2,E),c,o+i,h,a+t);else if(P){const I=Li.getPrimitive();Pe(t,_,I),I.applyMatrix4(e);const z=Rn(i),M=Mn(i,b);Pe(z,x,zr),Pe(M,x,Hr);const L=I.intersectsBox(zr),V=I.intersectsBox(Hr);A=L&&On(t,z,n,e,r,a,o,h,c+1,I,!p)||V&&On(t,M,n,e,r,a,o,h,c+1,I,!p),Li.releasePrimitive(I)}else{const I=Rn(t),z=Mn(t,v);Pe(I,_,Wl),Pe(z,_,Xl);const M=d.intersectsBox(Wl),L=d.intersectsBox(Xl);if(M&&L)A=On(i,I,e,n,r,o,a,c,h+1,d,p)||On(i,z,e,n,r,o,a,c,h+1,d,p);else if(M)if(C)A=On(i,I,e,n,r,o,a,c,h+1,d,p);else{const V=Li.getPrimitive();V.copy(Wl).applyMatrix4(e);const X=Rn(i),F=Mn(i,b);Pe(X,x,zr),Pe(F,x,Hr);const G=V.intersectsBox(zr),H=V.intersectsBox(Hr);A=G&&On(I,X,n,e,r,a,o,h,c+1,V,!p)||H&&On(I,F,n,e,r,a,o,h,c+1,V,!p),Li.releasePrimitive(V)}else if(L)if(C)A=On(i,z,e,n,r,o,a,c,h+1,d,p);else{const V=Li.getPrimitive();V.copy(Xl).applyMatrix4(e);const X=Rn(i),F=Mn(i,b);Pe(X,x,zr),Pe(F,x,Hr);const G=V.intersectsBox(zr),H=V.intersectsBox(Hr);A=G&&On(z,X,n,e,r,a,o,h,c+1,V,!p)||H&&On(z,F,n,e,r,a,o,h,c+1,V,!p),Li.releasePrimitive(V)}}return A}const Zo=new pn,Hd=new sn,kE={strategy:Yp,maxDepth:40,maxLeafTris:10,useSharedArrayBuffer:!1,setBoundingBox:!0,onProgress:null,indirect:!1,verbose:!0};class Vc{static serialize(t,e={}){e={cloneBuffers:!0,...e};const n=t.geometry,r=t._roots,o=t._indirectBuffer,a=n.getIndex();let c;return e.cloneBuffers?c={roots:r.map(h=>h.slice()),index:a.array.slice(),indirectBuffer:o?o.slice():null}:c={roots:r,index:a.array,indirectBuffer:o},c}static deserialize(t,e,n={}){n={setIndex:!0,indirect:Boolean(t.indirectBuffer),...n};const{index:r,roots:o,indirectBuffer:a}=t,c=new Vc(e,{...n,[Ol]:!0});if(c._roots=o,c._indirectBuffer=a||null,n.setIndex){const h=e.getIndex();if(h===null){const d=new en(t.index,1,!1);e.setIndex(d)}else h.array!==r&&(h.array.set(r),h.needsUpdate=!0)}return c}get indirect(){return!!this._indirectBuffer}constructor(t,e={}){if(t.isBufferGeometry){if(t.index&&t.index.isInterleavedBufferAttribute)throw new Error("MeshBVH: InterleavedBufferAttribute is not supported for the index attribute.")}else throw new Error("MeshBVH: Only BufferGeometries are supported.");if(e=Object.assign({...kE,[Ol]:!1},e),e.useSharedArrayBuffer&&!OE())throw new Error("MeshBVH: SharedArrayBuffer is not available.");this.geometry=t,this._roots=null,this._indirectBuffer=null,e[Ol]||(eE(this,e),!t.boundingBox&&e.setBoundingBox&&(t.boundingBox=this.getBoundingBox(new sn)));const{_indirectBuffer:n}=this;this.resolveTriangleIndex=e.indirect?r=>n[r]:r=>r}refit(t=null){return(this.indirect?AE:fE)(this,t)}traverse(t,e=0){const n=this._roots[e],r=new Uint32Array(n),o=new Uint16Array(n);a(0);function a(c,h=0){const d=c*2,p=o[d+15]===Ca;if(p){const f=r[c+6],m=o[d+14];t(h,p,new Float32Array(n,c*4,6),f,m)}else{const f=c+Ui/4,m=r[c+6],x=r[c+7];t(h,p,new Float32Array(n,c*4,6),x)||(a(f,h+1),a(m,h+1))}}}raycast(t,e=Xn){const n=this._roots,r=this.geometry,o=[],a=e.isMaterial,c=Array.isArray(e),h=r.groups,d=a?e.side:e,p=this.indirect?CE:_E;for(let f=0,m=n.length;f<m;f++){const x=c?e[h[f].materialIndex].side:d,b=o.length;if(p(this,f,x,t,o),c){const w=h[f].materialIndex;for(let _=b,v=o.length;_<v;_++)o[_].face.materialIndex=w}}return o}raycastFirst(t,e=Xn){const n=this._roots,r=this.geometry,o=e.isMaterial,a=Array.isArray(e);let c=null;const h=r.groups,d=o?e.side:e,p=this.indirect?RE:bE;for(let f=0,m=n.length;f<m;f++){const x=a?e[h[f].materialIndex].side:d,b=p(this,f,x,t);b!=null&&(c==null||b.distance<c.distance)&&(c=b,a&&(b.face.materialIndex=h[f].materialIndex))}return c}intersectsGeometry(t,e){let n=!1;const r=this._roots,o=this.indirect?LE:yE;for(let a=0,c=r.length;a<c&&(n=o(this,a,t,e),!n);a++);return n}shapecast(t){const e=Ln.getPrimitive(),n=this.indirect?vE:pE;let{boundsTraverseOrder:r,intersectsBounds:o,intersectsRange:a,intersectsTriangle:c}=t;if(a&&c){const f=a;a=(m,x,b,w,_)=>f(m,x,b,w,_)?!0:n(m,x,this,c,b,w,e)}else a||(c?a=(f,m,x,b)=>n(f,m,this,c,x,b,e):a=(f,m,x)=>x);let h=!1,d=0;const p=this._roots;for(let f=0,m=p.length;f<m;f++){const x=p[f];if(h=aE(this,f,o,a,r,d),h)break;d+=x.byteLength}return Ln.releasePrimitive(e),h}bvhcast(t,e,n){let{intersectsRanges:r,intersectsTriangles:o}=n;const a=Ln.getPrimitive(),c=this.geometry.index,h=this.geometry.attributes.position,d=this.indirect?b=>{const w=this.resolveTriangleIndex(b);Oe(a,w*3,c,h)}:b=>{Oe(a,b*3,c,h)},p=Ln.getPrimitive(),f=t.geometry.index,m=t.geometry.attributes.position,x=t.indirect?b=>{const w=t.resolveTriangleIndex(b);Oe(p,w*3,f,m)}:b=>{Oe(p,b*3,f,m)};if(o){const b=(w,_,v,E,y,T,C,P)=>{for(let A=v,I=v+E;A<I;A++){x(A),p.a.applyMatrix4(e),p.b.applyMatrix4(e),p.c.applyMatrix4(e),p.needsUpdate=!0;for(let z=w,M=w+_;z<M;z++)if(d(z),a.needsUpdate=!0,o(a,p,z,A,y,T,C,P))return!0}return!1};if(r){const w=r;r=function(_,v,E,y,T,C,P,A){return w(_,v,E,y,T,C,P,A)?!0:b(_,v,E,y,T,C,P,A)}}else r=b}return BE(this,t,e,r)}intersectsBox(t,e){return Zo.set(t.min,t.max,e),Zo.needsUpdate=!0,this.shapecast({intersectsBounds:n=>Zo.intersectsBox(n),intersectsTriangle:n=>Zo.intersectsTriangle(n)})}intersectsSphere(t){return this.shapecast({intersectsBounds:e=>t.intersectsBox(e),intersectsTriangle:e=>e.intersectsSphere(t)})}closestPointToGeometry(t,e,n={},r={},o=0,a=1/0){return(this.indirect?FE:TE)(this,t,e,n,r,o,a)}closestPointToPoint(t,e={},n=0,r=1/0){return lE(this,t,e,n,r)}getBoundingBox(t){return t.makeEmpty(),this._roots.forEach(n=>{Pe(0,new Float32Array(n),Hd),t.union(Hd)}),t}}function VE(i){switch(i){case 1:return"R";case 2:return"RG";case 3:return"RGBA";case 4:return"RGBA"}throw new Error}function zE(i){switch(i){case 1:return wp;case 2:return Ep;case 3:return qe;case 4:return qe}}function Gd(i){switch(i){case 1:return Pc;case 2:return wa;case 3:return $s;case 4:return $s}}class ef extends va{constructor(){super(),this.minFilter=pe,this.magFilter=pe,this.generateMipmaps=!1,this.overrideItemSize=null,this._forcedType=null}updateFrom(t){const e=this.overrideItemSize,n=t.itemSize,r=t.count;if(e!==null){if(n*r%e!==0)throw new Error("VertexAttributeTexture: overrideItemSize must divide evenly into buffer length.");t.itemSize=e,t.count=r*n/e}const o=t.itemSize,a=t.count,c=t.normalized,h=t.array.constructor,d=h.BYTES_PER_ELEMENT;let p=this._forcedType,f=o;if(p===null)switch(h){case Float32Array:p=ge;break;case Uint8Array:case Uint16Array:case Uint32Array:p=wn;break;case Int8Array:case Int16Array:case Int32Array:p=Ws;break}let m,x,b,w,_=VE(o);switch(p){case ge:b=1,x=zE(o),c&&d===1?(w=h,_+="8",h===Uint8Array?m=Wn:(m=rc,_+="_SNORM")):(w=Float32Array,_+="32F",m=ge);break;case Ws:_+=d*8+"I",b=c?Math.pow(2,h.BYTES_PER_ELEMENT*8-1):1,x=Gd(o),d===1?(w=Int8Array,m=rc):d===2?(w=Int16Array,m=xp):(w=Int32Array,m=Ws);break;case wn:_+=d*8+"UI",b=c?Math.pow(2,h.BYTES_PER_ELEMENT*8-1):1,x=Gd(o),d===1?(w=Uint8Array,m=Wn):d===2?(w=Uint16Array,m=ya):(w=Uint32Array,m=wn);break}f===3&&(x===qe||x===$s)&&(f=4);const v=Math.ceil(Math.sqrt(a))||1,E=f*v*v,y=new w(E),T=t.normalized;t.normalized=!1;for(let C=0;C<a;C++){const P=f*C;y[P]=t.getX(C)/b,o>=2&&(y[P+1]=t.getY(C)/b),o>=3&&(y[P+2]=t.getZ(C)/b,f===4&&(y[P+3]=1)),o>=4&&(y[P+3]=t.getW(C)/b)}t.normalized=T,this.internalFormat=_,this.format=x,this.type=m,this.image.width=v,this.image.height=v,this.image.data=y,this.needsUpdate=!0,this.dispose(),t.itemSize=n,t.count=r}}class HE extends ef{constructor(){super(),this._forcedType=wn}}class GE extends ef{constructor(){super(),this._forcedType=ge}}class WE{constructor(){this.index=new HE,this.position=new GE,this.bvhBounds=new va,this.bvhContents=new va,this._cachedIndexAttr=null,this.index.overrideItemSize=3}updateFrom(t){const{geometry:e}=t;if(qE(t,this.bvhBounds,this.bvhContents),this.position.updateFrom(e.attributes.position),t.indirect){const n=t._indirectBuffer;if(this._cachedIndexAttr===null||this._cachedIndexAttr.count!==n.length)if(e.index)this._cachedIndexAttr=e.index.clone();else{const r=Kp($p(e));this._cachedIndexAttr=new en(r,1,!1)}XE(e,n,this._cachedIndexAttr),this.index.updateFrom(this._cachedIndexAttr)}else this.index.updateFrom(e.index)}dispose(){const{index:t,position:e,bvhBounds:n,bvhContents:r}=this;t&&t.dispose(),e&&e.dispose(),n&&n.dispose(),r&&r.dispose()}}function XE(i,t,e){const n=e.array,r=i.index?i.index.array:null;for(let o=0,a=t.length;o<a;o++){const c=3*o,h=3*t[o];for(let d=0;d<3;d++)n[c+d]=r?r[h+d]:h+d}}function qE(i,t,e){const n=i._roots;if(n.length!==1)throw new Error("MeshBVHUniformStruct: Multi-root BVHs not supported.");const r=n[0],o=new Uint16Array(r),a=new Uint32Array(r),c=new Float32Array(r),h=r.byteLength/Ui,d=2*Math.ceil(Math.sqrt(h/2)),p=new Float32Array(4*d*d),f=Math.ceil(Math.sqrt(h)),m=new Uint32Array(2*f*f);for(let x=0;x<h;x++){const b=x*Ui/4,w=b*2,_=b;for(let v=0;v<3;v++)p[8*x+0+v]=c[_+0+v],p[8*x+4+v]=c[_+3+v];if(cn(w,o)){const v=En(w,o),E=gn(b,a),y=4294901760|v;m[x*2+0]=y,m[x*2+1]=E}else{const v=4*Mn(b,a)/Ui,E=Oc(b,a);m[x*2+0]=E,m[x*2+1]=v}}t.image.data=p,t.image.width=d,t.image.height=d,t.format=qe,t.type=ge,t.internalFormat="RGBA32F",t.minFilter=pe,t.magFilter=pe,t.generateMipmaps=!1,t.needsUpdate=!0,t.dispose(),e.image.data=m,e.image.width=f,e.image.height=f,e.format=wa,e.type=wn,e.internalFormat="RG32UI",e.minFilter=pe,e.magFilter=pe,e.generateMipmaps=!1,e.needsUpdate=!0,e.dispose()}const jE=`

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
`,YE=`

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
`,$E=`
struct BVH {

	usampler2D index;
	sampler2D position;

	sampler2D bvhBounds;
	usampler2D bvhContents;

};
`,KE=$E,ZE=`
	${jE}
	${YE}
`,Wd={type:"change"},jl={type:"start"},Xd={type:"end"},Qo=new Ma,qd=new Hn,QE=Math.cos(70*x_.DEG2RAD);class JE extends sr{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new U,this.cursor=new U,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:mr.ROTATE,MIDDLE:mr.DOLLY,RIGHT:mr.PAN},this.touches={ONE:gr.ROTATE,TWO:gr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return c.phi},this.getAzimuthalAngle=function(){return c.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(B){B.addEventListener("keydown",Ot),this._domElementKeyEvents=B},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Ot),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Wd),n.update(),o=r.NONE},this.update=function(){const B=new U,dt=new $e().setFromUnitVectors(t.up,new U(0,1,0)),_t=dt.clone().invert(),Pt=new U,O=new $e,st=new U,lt=2*Math.PI;return function(Nt=null){const te=n.object.position;B.copy(te).sub(n.target),B.applyQuaternion(dt),c.setFromVector3(B),n.autoRotate&&o===r.NONE&&V(M(Nt)),n.enableDamping?(c.theta+=h.theta*n.dampingFactor,c.phi+=h.phi*n.dampingFactor):(c.theta+=h.theta,c.phi+=h.phi);let Jt=n.minAzimuthAngle,ae=n.maxAzimuthAngle;isFinite(Jt)&&isFinite(ae)&&(Jt<-Math.PI?Jt+=lt:Jt>Math.PI&&(Jt-=lt),ae<-Math.PI?ae+=lt:ae>Math.PI&&(ae-=lt),Jt<=ae?c.theta=Math.max(Jt,Math.min(ae,c.theta)):c.theta=c.theta>(Jt+ae)/2?Math.max(Jt,c.theta):Math.min(ae,c.theta)),c.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,c.phi)),c.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(p,n.dampingFactor):n.target.add(p),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&P||n.object.isOrthographicCamera?c.radius=it(c.radius):c.radius=it(c.radius*d),B.setFromSpherical(c),B.applyQuaternion(_t),te.copy(n.target).add(B),n.object.lookAt(n.target),n.enableDamping===!0?(h.theta*=1-n.dampingFactor,h.phi*=1-n.dampingFactor,p.multiplyScalar(1-n.dampingFactor)):(h.set(0,0,0),p.set(0,0,0));let Le=!1;if(n.zoomToCursor&&P){let re=null;if(n.object.isPerspectiveCamera){const Ce=B.length();re=it(Ce*d);const je=Ce-re;n.object.position.addScaledVector(T,je),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const Ce=new U(C.x,C.y,0);Ce.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/d)),n.object.updateProjectionMatrix(),Le=!0;const je=new U(C.x,C.y,0);je.unproject(n.object),n.object.position.sub(je).add(Ce),n.object.updateMatrixWorld(),re=B.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;re!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(re).add(n.object.position):(Qo.origin.copy(n.object.position),Qo.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Qo.direction))<QE?t.lookAt(n.target):(qd.setFromNormalAndCoplanarPoint(n.object.up,n.target),Qo.intersectPlane(qd,n.target))))}else n.object.isOrthographicCamera&&(Le=d!==1,Le&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/d)),n.object.updateProjectionMatrix()));return d=1,P=!1,Le||Pt.distanceToSquared(n.object.position)>a||8*(1-O.dot(n.object.quaternion))>a||st.distanceToSquared(n.target)>0?(n.dispatchEvent(Wd),Pt.copy(n.object.position),O.copy(n.object.quaternion),st.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",ne),n.domElement.removeEventListener("pointerdown",N),n.domElement.removeEventListener("pointercancel",K),n.domElement.removeEventListener("wheel",ct),n.domElement.removeEventListener("pointermove",R),n.domElement.removeEventListener("pointerup",K),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Ot),n._domElementKeyEvents=null)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let o=r.NONE;const a=1e-6,c=new Sd,h=new Sd;let d=1;const p=new U,f=new It,m=new It,x=new It,b=new It,w=new It,_=new It,v=new It,E=new It,y=new It,T=new U,C=new It;let P=!1;const A=[],I={};let z=!1;function M(B){return B!==null?2*Math.PI/60*n.autoRotateSpeed*B:2*Math.PI/60/60*n.autoRotateSpeed}function L(B){const dt=Math.abs(B*.01);return Math.pow(.95,n.zoomSpeed*dt)}function V(B){h.theta-=B}function X(B){h.phi-=B}const F=function(){const B=new U;return function(_t,Pt){B.setFromMatrixColumn(Pt,0),B.multiplyScalar(-_t),p.add(B)}}(),G=function(){const B=new U;return function(_t,Pt){n.screenSpacePanning===!0?B.setFromMatrixColumn(Pt,1):(B.setFromMatrixColumn(Pt,0),B.crossVectors(n.object.up,B)),B.multiplyScalar(_t),p.add(B)}}(),H=function(){const B=new U;return function(_t,Pt){const O=n.domElement;if(n.object.isPerspectiveCamera){const st=n.object.position;B.copy(st).sub(n.target);let lt=B.length();lt*=Math.tan(n.object.fov/2*Math.PI/180),F(2*_t*lt/O.clientHeight,n.object.matrix),G(2*Pt*lt/O.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(F(_t*(n.object.right-n.object.left)/n.object.zoom/O.clientWidth,n.object.matrix),G(Pt*(n.object.top-n.object.bottom)/n.object.zoom/O.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function W(B){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?d/=B:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function J(B){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?d*=B:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function et(B,dt){if(!n.zoomToCursor)return;P=!0;const _t=n.domElement.getBoundingClientRect(),Pt=B-_t.left,O=dt-_t.top,st=_t.width,lt=_t.height;C.x=Pt/st*2-1,C.y=-(O/lt)*2+1,T.set(C.x,C.y,1).unproject(n.object).sub(n.object.position).normalize()}function it(B){return Math.max(n.minDistance,Math.min(n.maxDistance,B))}function nt(B){f.set(B.clientX,B.clientY)}function pt(B){et(B.clientX,B.clientX),v.set(B.clientX,B.clientY)}function mt(B){b.set(B.clientX,B.clientY)}function $(B){m.set(B.clientX,B.clientY),x.subVectors(m,f).multiplyScalar(n.rotateSpeed);const dt=n.domElement;V(2*Math.PI*x.x/dt.clientHeight),X(2*Math.PI*x.y/dt.clientHeight),f.copy(m),n.update()}function rt(B){E.set(B.clientX,B.clientY),y.subVectors(E,v),y.y>0?W(L(y.y)):y.y<0&&J(L(y.y)),v.copy(E),n.update()}function wt(B){w.set(B.clientX,B.clientY),_.subVectors(w,b).multiplyScalar(n.panSpeed),H(_.x,_.y),b.copy(w),n.update()}function Rt(B){et(B.clientX,B.clientY),B.deltaY<0?J(L(B.deltaY)):B.deltaY>0&&W(L(B.deltaY)),n.update()}function Lt(B){let dt=!1;switch(B.code){case n.keys.UP:B.ctrlKey||B.metaKey||B.shiftKey?X(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):H(0,n.keyPanSpeed),dt=!0;break;case n.keys.BOTTOM:B.ctrlKey||B.metaKey||B.shiftKey?X(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):H(0,-n.keyPanSpeed),dt=!0;break;case n.keys.LEFT:B.ctrlKey||B.metaKey||B.shiftKey?V(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):H(n.keyPanSpeed,0),dt=!0;break;case n.keys.RIGHT:B.ctrlKey||B.metaKey||B.shiftKey?V(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):H(-n.keyPanSpeed,0),dt=!0;break}dt&&(B.preventDefault(),n.update())}function Et(B){if(A.length===1)f.set(B.pageX,B.pageY);else{const dt=xt(B),_t=.5*(B.pageX+dt.x),Pt=.5*(B.pageY+dt.y);f.set(_t,Pt)}}function zt(B){if(A.length===1)b.set(B.pageX,B.pageY);else{const dt=xt(B),_t=.5*(B.pageX+dt.x),Pt=.5*(B.pageY+dt.y);b.set(_t,Pt)}}function Bt(B){const dt=xt(B),_t=B.pageX-dt.x,Pt=B.pageY-dt.y,O=Math.sqrt(_t*_t+Pt*Pt);v.set(0,O)}function j(B){n.enableZoom&&Bt(B),n.enablePan&&zt(B)}function Ae(B){n.enableZoom&&Bt(B),n.enableRotate&&Et(B)}function Tt(B){if(A.length==1)m.set(B.pageX,B.pageY);else{const _t=xt(B),Pt=.5*(B.pageX+_t.x),O=.5*(B.pageY+_t.y);m.set(Pt,O)}x.subVectors(m,f).multiplyScalar(n.rotateSpeed);const dt=n.domElement;V(2*Math.PI*x.x/dt.clientHeight),X(2*Math.PI*x.y/dt.clientHeight),f.copy(m)}function Ht(B){if(A.length===1)w.set(B.pageX,B.pageY);else{const dt=xt(B),_t=.5*(B.pageX+dt.x),Pt=.5*(B.pageY+dt.y);w.set(_t,Pt)}_.subVectors(w,b).multiplyScalar(n.panSpeed),H(_.x,_.y),b.copy(w)}function At(B){const dt=xt(B),_t=B.pageX-dt.x,Pt=B.pageY-dt.y,O=Math.sqrt(_t*_t+Pt*Pt);E.set(0,O),y.set(0,Math.pow(E.y/v.y,n.zoomSpeed)),W(y.y),v.copy(E);const st=(B.pageX+dt.x)*.5,lt=(B.pageY+dt.y)*.5;et(st,lt)}function fe(B){n.enableZoom&&At(B),n.enablePan&&Ht(B)}function Wt(B){n.enableZoom&&At(B),n.enableRotate&&Tt(B)}function N(B){n.enabled!==!1&&(A.length===0&&(n.domElement.setPointerCapture(B.pointerId),n.domElement.addEventListener("pointermove",R),n.domElement.addEventListener("pointerup",K)),Zt(B),B.pointerType==="touch"?Vt(B):ht(B))}function R(B){n.enabled!==!1&&(B.pointerType==="touch"?ot(B):at(B))}function K(B){switch(Gt(B),A.length){case 0:n.domElement.releasePointerCapture(B.pointerId),n.domElement.removeEventListener("pointermove",R),n.domElement.removeEventListener("pointerup",K),n.dispatchEvent(Xd),o=r.NONE;break;case 1:const dt=A[0],_t=I[dt];Vt({pointerId:dt,pageX:_t.x,pageY:_t.y});break}}function ht(B){let dt;switch(B.button){case 0:dt=n.mouseButtons.LEFT;break;case 1:dt=n.mouseButtons.MIDDLE;break;case 2:dt=n.mouseButtons.RIGHT;break;default:dt=-1}switch(dt){case mr.DOLLY:if(n.enableZoom===!1)return;pt(B),o=r.DOLLY;break;case mr.ROTATE:if(B.ctrlKey||B.metaKey||B.shiftKey){if(n.enablePan===!1)return;mt(B),o=r.PAN}else{if(n.enableRotate===!1)return;nt(B),o=r.ROTATE}break;case mr.PAN:if(B.ctrlKey||B.metaKey||B.shiftKey){if(n.enableRotate===!1)return;nt(B),o=r.ROTATE}else{if(n.enablePan===!1)return;mt(B),o=r.PAN}break;default:o=r.NONE}o!==r.NONE&&n.dispatchEvent(jl)}function at(B){switch(o){case r.ROTATE:if(n.enableRotate===!1)return;$(B);break;case r.DOLLY:if(n.enableZoom===!1)return;rt(B);break;case r.PAN:if(n.enablePan===!1)return;wt(B);break}}function ct(B){n.enabled===!1||n.enableZoom===!1||o!==r.NONE||(B.preventDefault(),n.dispatchEvent(jl),Rt(St(B)),n.dispatchEvent(Xd))}function St(B){const dt=B.deltaMode,_t={clientX:B.clientX,clientY:B.clientY,deltaY:B.deltaY};switch(dt){case 1:_t.deltaY*=16;break;case 2:_t.deltaY*=100;break}return B.ctrlKey&&!z&&(_t.deltaY*=10),_t}function vt(B){B.key==="Control"&&(z=!0,n.domElement.getRootNode().addEventListener("keyup",bt,{passive:!0,capture:!0}))}function bt(B){B.key==="Control"&&(z=!1,n.domElement.getRootNode().removeEventListener("keyup",bt,{passive:!0,capture:!0}))}function Ot(B){n.enabled===!1||n.enablePan===!1||Lt(B)}function Vt(B){switch(Ct(B),A.length){case 1:switch(n.touches.ONE){case gr.ROTATE:if(n.enableRotate===!1)return;Et(B),o=r.TOUCH_ROTATE;break;case gr.PAN:if(n.enablePan===!1)return;zt(B),o=r.TOUCH_PAN;break;default:o=r.NONE}break;case 2:switch(n.touches.TWO){case gr.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;j(B),o=r.TOUCH_DOLLY_PAN;break;case gr.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Ae(B),o=r.TOUCH_DOLLY_ROTATE;break;default:o=r.NONE}break;default:o=r.NONE}o!==r.NONE&&n.dispatchEvent(jl)}function ot(B){switch(Ct(B),o){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;Tt(B),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;Ht(B),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;fe(B),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Wt(B),n.update();break;default:o=r.NONE}}function ne(B){n.enabled!==!1&&B.preventDefault()}function Zt(B){A.push(B.pointerId)}function Gt(B){delete I[B.pointerId];for(let dt=0;dt<A.length;dt++)if(A[dt]==B.pointerId){A.splice(dt,1);return}}function Ct(B){let dt=I[B.pointerId];dt===void 0&&(dt=new It,I[B.pointerId]=dt),dt.set(B.pageX,B.pageY)}function xt(B){const dt=B.pointerId===A[0]?A[1]:A[0];return I[dt]}n.domElement.addEventListener("contextmenu",ne),n.domElement.addEventListener("pointerdown",N),n.domElement.addEventListener("pointercancel",K),n.domElement.addEventListener("wheel",ct,{passive:!1}),n.domElement.getRootNode().addEventListener("keydown",vt,{passive:!0,capture:!0}),this.update()}}const qi=new kw,tn=new U,Pi=new U,Te=new $e,jd={X:new U(1,0,0),Y:new U(0,1,0),Z:new U(0,0,1)},Yl={type:"change"},Yd={type:"mouseDown"},$d={type:"mouseUp",mode:null},Kd={type:"objectChange"};class tM extends Ue{constructor(t,e){super(),e===void 0&&(console.warn('THREE.TransformControls: The second parameter "domElement" is now mandatory.'),e=document),this.isTransformControls=!0,this.visible=!1,this.domElement=e,this.domElement.style.touchAction="none";const n=new oM;this._gizmo=n,this.add(n);const r=new aM;this._plane=r,this.add(r);const o=this;function a(E,y){let T=y;Object.defineProperty(o,E,{get:function(){return T!==void 0?T:y},set:function(C){T!==C&&(T=C,r[E]=C,n[E]=C,o.dispatchEvent({type:E+"-changed",value:C}),o.dispatchEvent(Yl))}}),o[E]=y,r[E]=y,n[E]=y}a("camera",t),a("object",void 0),a("enabled",!0),a("axis",null),a("mode","translate"),a("translationSnap",null),a("rotationSnap",null),a("scaleSnap",null),a("space","world"),a("size",1),a("dragging",!1),a("showX",!0),a("showY",!0),a("showZ",!0);const c=new U,h=new U,d=new $e,p=new $e,f=new U,m=new $e,x=new U,b=new U,w=new U,_=0,v=new U;a("worldPosition",c),a("worldPositionStart",h),a("worldQuaternion",d),a("worldQuaternionStart",p),a("cameraPosition",f),a("cameraQuaternion",m),a("pointStart",x),a("pointEnd",b),a("rotationAxis",w),a("rotationAngle",_),a("eye",v),this._offset=new U,this._startNorm=new U,this._endNorm=new U,this._cameraScale=new U,this._parentPosition=new U,this._parentQuaternion=new $e,this._parentQuaternionInv=new $e,this._parentScale=new U,this._worldScaleStart=new U,this._worldQuaternionInv=new $e,this._worldScale=new U,this._positionStart=new U,this._quaternionStart=new $e,this._scaleStart=new U,this._getPointer=eM.bind(this),this._onPointerDown=iM.bind(this),this._onPointerHover=nM.bind(this),this._onPointerMove=rM.bind(this),this._onPointerUp=sM.bind(this),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointermove",this._onPointerHover),this.domElement.addEventListener("pointerup",this._onPointerUp)}updateMatrixWorld(){this.object!==void 0&&(this.object.updateMatrixWorld(),this.object.parent===null?console.error("TransformControls: The attached 3D object must be a part of the scene graph."):this.object.parent.matrixWorld.decompose(this._parentPosition,this._parentQuaternion,this._parentScale),this.object.matrixWorld.decompose(this.worldPosition,this.worldQuaternion,this._worldScale),this._parentQuaternionInv.copy(this._parentQuaternion).invert(),this._worldQuaternionInv.copy(this.worldQuaternion).invert()),this.camera.updateMatrixWorld(),this.camera.matrixWorld.decompose(this.cameraPosition,this.cameraQuaternion,this._cameraScale),this.camera.isOrthographicCamera?this.camera.getWorldDirection(this.eye).negate():this.eye.copy(this.cameraPosition).sub(this.worldPosition).normalize(),super.updateMatrixWorld(this)}pointerHover(t){if(this.object===void 0||this.dragging===!0)return;qi.setFromCamera(t,this.camera);const e=$l(this._gizmo.picker[this.mode],qi);e?this.axis=e.object.name:this.axis=null}pointerDown(t){if(!(this.object===void 0||this.dragging===!0||t.button!==0)&&this.axis!==null){qi.setFromCamera(t,this.camera);const e=$l(this._plane,qi,!0);e&&(this.object.updateMatrixWorld(),this.object.parent.updateMatrixWorld(),this._positionStart.copy(this.object.position),this._quaternionStart.copy(this.object.quaternion),this._scaleStart.copy(this.object.scale),this.object.matrixWorld.decompose(this.worldPositionStart,this.worldQuaternionStart,this._worldScaleStart),this.pointStart.copy(e.point).sub(this.worldPositionStart)),this.dragging=!0,Yd.mode=this.mode,this.dispatchEvent(Yd)}}pointerMove(t){const e=this.axis,n=this.mode,r=this.object;let o=this.space;if(n==="scale"?o="local":(e==="E"||e==="XYZE"||e==="XYZ")&&(o="world"),r===void 0||e===null||this.dragging===!1||t.button!==-1)return;qi.setFromCamera(t,this.camera);const a=$l(this._plane,qi,!0);if(!!a){if(this.pointEnd.copy(a.point).sub(this.worldPositionStart),n==="translate")this._offset.copy(this.pointEnd).sub(this.pointStart),o==="local"&&e!=="XYZ"&&this._offset.applyQuaternion(this._worldQuaternionInv),e.indexOf("X")===-1&&(this._offset.x=0),e.indexOf("Y")===-1&&(this._offset.y=0),e.indexOf("Z")===-1&&(this._offset.z=0),o==="local"&&e!=="XYZ"?this._offset.applyQuaternion(this._quaternionStart).divide(this._parentScale):this._offset.applyQuaternion(this._parentQuaternionInv).divide(this._parentScale),r.position.copy(this._offset).add(this._positionStart),this.translationSnap&&(o==="local"&&(r.position.applyQuaternion(Te.copy(this._quaternionStart).invert()),e.search("X")!==-1&&(r.position.x=Math.round(r.position.x/this.translationSnap)*this.translationSnap),e.search("Y")!==-1&&(r.position.y=Math.round(r.position.y/this.translationSnap)*this.translationSnap),e.search("Z")!==-1&&(r.position.z=Math.round(r.position.z/this.translationSnap)*this.translationSnap),r.position.applyQuaternion(this._quaternionStart)),o==="world"&&(r.parent&&r.position.add(tn.setFromMatrixPosition(r.parent.matrixWorld)),e.search("X")!==-1&&(r.position.x=Math.round(r.position.x/this.translationSnap)*this.translationSnap),e.search("Y")!==-1&&(r.position.y=Math.round(r.position.y/this.translationSnap)*this.translationSnap),e.search("Z")!==-1&&(r.position.z=Math.round(r.position.z/this.translationSnap)*this.translationSnap),r.parent&&r.position.sub(tn.setFromMatrixPosition(r.parent.matrixWorld))));else if(n==="scale"){if(e.search("XYZ")!==-1){let c=this.pointEnd.length()/this.pointStart.length();this.pointEnd.dot(this.pointStart)<0&&(c*=-1),Pi.set(c,c,c)}else tn.copy(this.pointStart),Pi.copy(this.pointEnd),tn.applyQuaternion(this._worldQuaternionInv),Pi.applyQuaternion(this._worldQuaternionInv),Pi.divide(tn),e.search("X")===-1&&(Pi.x=1),e.search("Y")===-1&&(Pi.y=1),e.search("Z")===-1&&(Pi.z=1);r.scale.copy(this._scaleStart).multiply(Pi),this.scaleSnap&&(e.search("X")!==-1&&(r.scale.x=Math.round(r.scale.x/this.scaleSnap)*this.scaleSnap||this.scaleSnap),e.search("Y")!==-1&&(r.scale.y=Math.round(r.scale.y/this.scaleSnap)*this.scaleSnap||this.scaleSnap),e.search("Z")!==-1&&(r.scale.z=Math.round(r.scale.z/this.scaleSnap)*this.scaleSnap||this.scaleSnap))}else if(n==="rotate"){this._offset.copy(this.pointEnd).sub(this.pointStart);const c=20/this.worldPosition.distanceTo(tn.setFromMatrixPosition(this.camera.matrixWorld));let h=!1;e==="XYZE"?(this.rotationAxis.copy(this._offset).cross(this.eye).normalize(),this.rotationAngle=this._offset.dot(tn.copy(this.rotationAxis).cross(this.eye))*c):(e==="X"||e==="Y"||e==="Z")&&(this.rotationAxis.copy(jd[e]),tn.copy(jd[e]),o==="local"&&tn.applyQuaternion(this.worldQuaternion),tn.cross(this.eye),tn.length()===0?h=!0:this.rotationAngle=this._offset.dot(tn.normalize())*c),(e==="E"||h)&&(this.rotationAxis.copy(this.eye),this.rotationAngle=this.pointEnd.angleTo(this.pointStart),this._startNorm.copy(this.pointStart).normalize(),this._endNorm.copy(this.pointEnd).normalize(),this.rotationAngle*=this._endNorm.cross(this._startNorm).dot(this.eye)<0?1:-1),this.rotationSnap&&(this.rotationAngle=Math.round(this.rotationAngle/this.rotationSnap)*this.rotationSnap),o==="local"&&e!=="E"&&e!=="XYZE"?(r.quaternion.copy(this._quaternionStart),r.quaternion.multiply(Te.setFromAxisAngle(this.rotationAxis,this.rotationAngle)).normalize()):(this.rotationAxis.applyQuaternion(this._parentQuaternionInv),r.quaternion.copy(Te.setFromAxisAngle(this.rotationAxis,this.rotationAngle)),r.quaternion.multiply(this._quaternionStart).normalize())}this.dispatchEvent(Yl),this.dispatchEvent(Kd)}}pointerUp(t){t.button===0&&(this.dragging&&this.axis!==null&&($d.mode=this.mode,this.dispatchEvent($d)),this.dragging=!1,this.axis=null)}dispose(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerHover),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.traverse(function(t){t.geometry&&t.geometry.dispose(),t.material&&t.material.dispose()})}attach(t){return this.object=t,this.visible=!0,this}detach(){return this.object=void 0,this.visible=!1,this.axis=null,this}reset(){!this.enabled||this.dragging&&(this.object.position.copy(this._positionStart),this.object.quaternion.copy(this._quaternionStart),this.object.scale.copy(this._scaleStart),this.dispatchEvent(Yl),this.dispatchEvent(Kd),this.pointStart.copy(this.pointEnd))}getRaycaster(){return qi}getMode(){return this.mode}setMode(t){this.mode=t}setTranslationSnap(t){this.translationSnap=t}setRotationSnap(t){this.rotationSnap=t}setScaleSnap(t){this.scaleSnap=t}setSize(t){this.size=t}setSpace(t){this.space=t}}function eM(i){if(this.domElement.ownerDocument.pointerLockElement)return{x:0,y:0,button:i.button};{const t=this.domElement.getBoundingClientRect();return{x:(i.clientX-t.left)/t.width*2-1,y:-(i.clientY-t.top)/t.height*2+1,button:i.button}}}function nM(i){if(!!this.enabled)switch(i.pointerType){case"mouse":case"pen":this.pointerHover(this._getPointer(i));break}}function iM(i){!this.enabled||(document.pointerLockElement||this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.pointerHover(this._getPointer(i)),this.pointerDown(this._getPointer(i)))}function rM(i){!this.enabled||this.pointerMove(this._getPointer(i))}function sM(i){!this.enabled||(this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.pointerUp(this._getPointer(i)))}function $l(i,t,e){const n=t.intersectObject(i,!0);for(let r=0;r<n.length;r++)if(n[r].object.visible||e)return n[r];return!1}const Jo=new Js,me=new U(0,1,0),Zd=new U(0,0,0),Qd=new ue,ta=new $e,sa=new $e,zn=new U,Jd=new ue,zs=new U(1,0,0),Yi=new U(0,1,0),Hs=new U(0,0,1),ea=new U,Fs=new U,Os=new U;class oM extends Ue{constructor(){super(),this.isTransformControlsGizmo=!0,this.type="TransformControlsGizmo";const t=new to({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),e=new jp({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),n=t.clone();n.opacity=.15;const r=e.clone();r.opacity=.5;const o=t.clone();o.color.setHex(16711680);const a=t.clone();a.color.setHex(65280);const c=t.clone();c.color.setHex(255);const h=t.clone();h.color.setHex(16711680),h.opacity=.5;const d=t.clone();d.color.setHex(65280),d.opacity=.5;const p=t.clone();p.color.setHex(255),p.opacity=.5;const f=t.clone();f.opacity=.25;const m=t.clone();m.color.setHex(16776960),m.opacity=.25,t.clone().color.setHex(16776960);const b=t.clone();b.color.setHex(7895160);const w=new Je(0,.04,.1,12);w.translate(0,.05,0);const _=new he(.08,.08,.08);_.translate(0,.04,0);const v=new nn;v.setAttribute("position",new we([0,0,0,1,0,0],3));const E=new Je(.0075,.0075,.5,3);E.translate(0,.25,0);function y(G,H){const W=new Qi(G,.0075,3,64,H*Math.PI*2);return W.rotateY(Math.PI/2),W.rotateX(Math.PI/2),W}function T(){const G=new nn;return G.setAttribute("position",new we([0,0,0,1,1,1],3)),G}const C={X:[[new ft(w,o),[.5,0,0],[0,0,-Math.PI/2]],[new ft(w,o),[-.5,0,0],[0,0,Math.PI/2]],[new ft(E,o),[0,0,0],[0,0,-Math.PI/2]]],Y:[[new ft(w,a),[0,.5,0]],[new ft(w,a),[0,-.5,0],[Math.PI,0,0]],[new ft(E,a)]],Z:[[new ft(w,c),[0,0,.5],[Math.PI/2,0,0]],[new ft(w,c),[0,0,-.5],[-Math.PI/2,0,0]],[new ft(E,c),null,[Math.PI/2,0,0]]],XYZ:[[new ft(new $r(.1,0),f.clone()),[0,0,0]]],XY:[[new ft(new he(.15,.15,.01),p.clone()),[.15,.15,0]]],YZ:[[new ft(new he(.15,.15,.01),h.clone()),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new ft(new he(.15,.15,.01),d.clone()),[.15,0,.15],[-Math.PI/2,0,0]]]},P={X:[[new ft(new Je(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new ft(new Je(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new ft(new Je(.2,0,.6,4),n),[0,.3,0]],[new ft(new Je(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new ft(new Je(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new ft(new Je(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XYZ:[[new ft(new $r(.2,0),n)]],XY:[[new ft(new he(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new ft(new he(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new ft(new he(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]]},A={START:[[new ft(new $r(.01,2),r),null,null,null,"helper"]],END:[[new ft(new $r(.01,2),r),null,null,null,"helper"]],DELTA:[[new Ai(T(),r),null,null,null,"helper"]],X:[[new Ai(v,r.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new Ai(v,r.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new Ai(v,r.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]},I={XYZE:[[new ft(y(.5,1),b),null,[0,Math.PI/2,0]]],X:[[new ft(y(.5,.5),o)]],Y:[[new ft(y(.5,.5),a),null,[0,0,-Math.PI/2]]],Z:[[new ft(y(.5,.5),c),null,[0,Math.PI/2,0]]],E:[[new ft(y(.75,1),m),null,[0,Math.PI/2,0]]]},z={AXIS:[[new Ai(v,r.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]]},M={XYZE:[[new ft(new Ta(.25,10,8),n)]],X:[[new ft(new Qi(.5,.1,4,24),n),[0,0,0],[0,-Math.PI/2,-Math.PI/2]]],Y:[[new ft(new Qi(.5,.1,4,24),n),[0,0,0],[Math.PI/2,0,0]]],Z:[[new ft(new Qi(.5,.1,4,24),n),[0,0,0],[0,0,-Math.PI/2]]],E:[[new ft(new Qi(.75,.1,2,24),n)]]},L={X:[[new ft(_,o),[.5,0,0],[0,0,-Math.PI/2]],[new ft(E,o),[0,0,0],[0,0,-Math.PI/2]],[new ft(_,o),[-.5,0,0],[0,0,Math.PI/2]]],Y:[[new ft(_,a),[0,.5,0]],[new ft(E,a)],[new ft(_,a),[0,-.5,0],[0,0,Math.PI]]],Z:[[new ft(_,c),[0,0,.5],[Math.PI/2,0,0]],[new ft(E,c),[0,0,0],[Math.PI/2,0,0]],[new ft(_,c),[0,0,-.5],[-Math.PI/2,0,0]]],XY:[[new ft(new he(.15,.15,.01),p),[.15,.15,0]]],YZ:[[new ft(new he(.15,.15,.01),h),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new ft(new he(.15,.15,.01),d),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new ft(new he(.1,.1,.1),f.clone())]]},V={X:[[new ft(new Je(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new ft(new Je(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new ft(new Je(.2,0,.6,4),n),[0,.3,0]],[new ft(new Je(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new ft(new Je(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new ft(new Je(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XY:[[new ft(new he(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new ft(new he(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new ft(new he(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new ft(new he(.2,.2,.2),n),[0,0,0]]]},X={X:[[new Ai(v,r.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new Ai(v,r.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new Ai(v,r.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]};function F(G){const H=new Ue;for(const W in G)for(let J=G[W].length;J--;){const et=G[W][J][0].clone(),it=G[W][J][1],nt=G[W][J][2],pt=G[W][J][3],mt=G[W][J][4];et.name=W,et.tag=mt,it&&et.position.set(it[0],it[1],it[2]),nt&&et.rotation.set(nt[0],nt[1],nt[2]),pt&&et.scale.set(pt[0],pt[1],pt[2]),et.updateMatrix();const $=et.geometry.clone();$.applyMatrix4(et.matrix),et.geometry=$,et.renderOrder=1/0,et.position.set(0,0,0),et.rotation.set(0,0,0),et.scale.set(1,1,1),H.add(et)}return H}this.gizmo={},this.picker={},this.helper={},this.add(this.gizmo.translate=F(C)),this.add(this.gizmo.rotate=F(I)),this.add(this.gizmo.scale=F(L)),this.add(this.picker.translate=F(P)),this.add(this.picker.rotate=F(M)),this.add(this.picker.scale=F(V)),this.add(this.helper.translate=F(A)),this.add(this.helper.rotate=F(z)),this.add(this.helper.scale=F(X)),this.picker.translate.visible=!1,this.picker.rotate.visible=!1,this.picker.scale.visible=!1}updateMatrixWorld(t){const n=(this.mode==="scale"?"local":this.space)==="local"?this.worldQuaternion:sa;this.gizmo.translate.visible=this.mode==="translate",this.gizmo.rotate.visible=this.mode==="rotate",this.gizmo.scale.visible=this.mode==="scale",this.helper.translate.visible=this.mode==="translate",this.helper.rotate.visible=this.mode==="rotate",this.helper.scale.visible=this.mode==="scale";let r=[];r=r.concat(this.picker[this.mode].children),r=r.concat(this.gizmo[this.mode].children),r=r.concat(this.helper[this.mode].children);for(let o=0;o<r.length;o++){const a=r[o];a.visible=!0,a.rotation.set(0,0,0),a.position.copy(this.worldPosition);let c;if(this.camera.isOrthographicCamera?c=(this.camera.top-this.camera.bottom)/this.camera.zoom:c=this.worldPosition.distanceTo(this.cameraPosition)*Math.min(1.9*Math.tan(Math.PI*this.camera.fov/360)/this.camera.zoom,7),a.scale.set(1,1,1).multiplyScalar(c*this.size/4),a.tag==="helper"){a.visible=!1,a.name==="AXIS"?(a.visible=!!this.axis,this.axis==="X"&&(Te.setFromEuler(Jo.set(0,0,0)),a.quaternion.copy(n).multiply(Te),Math.abs(me.copy(zs).applyQuaternion(n).dot(this.eye))>.9&&(a.visible=!1)),this.axis==="Y"&&(Te.setFromEuler(Jo.set(0,0,Math.PI/2)),a.quaternion.copy(n).multiply(Te),Math.abs(me.copy(Yi).applyQuaternion(n).dot(this.eye))>.9&&(a.visible=!1)),this.axis==="Z"&&(Te.setFromEuler(Jo.set(0,Math.PI/2,0)),a.quaternion.copy(n).multiply(Te),Math.abs(me.copy(Hs).applyQuaternion(n).dot(this.eye))>.9&&(a.visible=!1)),this.axis==="XYZE"&&(Te.setFromEuler(Jo.set(0,Math.PI/2,0)),me.copy(this.rotationAxis),a.quaternion.setFromRotationMatrix(Qd.lookAt(Zd,me,Yi)),a.quaternion.multiply(Te),a.visible=this.dragging),this.axis==="E"&&(a.visible=!1)):a.name==="START"?(a.position.copy(this.worldPositionStart),a.visible=this.dragging):a.name==="END"?(a.position.copy(this.worldPosition),a.visible=this.dragging):a.name==="DELTA"?(a.position.copy(this.worldPositionStart),a.quaternion.copy(this.worldQuaternionStart),tn.set(1e-10,1e-10,1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1),tn.applyQuaternion(this.worldQuaternionStart.clone().invert()),a.scale.copy(tn),a.visible=this.dragging):(a.quaternion.copy(n),this.dragging?a.position.copy(this.worldPositionStart):a.position.copy(this.worldPosition),this.axis&&(a.visible=this.axis.search(a.name)!==-1));continue}a.quaternion.copy(n),this.mode==="translate"||this.mode==="scale"?(a.name==="X"&&Math.abs(me.copy(zs).applyQuaternion(n).dot(this.eye))>.99&&(a.scale.set(1e-10,1e-10,1e-10),a.visible=!1),a.name==="Y"&&Math.abs(me.copy(Yi).applyQuaternion(n).dot(this.eye))>.99&&(a.scale.set(1e-10,1e-10,1e-10),a.visible=!1),a.name==="Z"&&Math.abs(me.copy(Hs).applyQuaternion(n).dot(this.eye))>.99&&(a.scale.set(1e-10,1e-10,1e-10),a.visible=!1),a.name==="XY"&&Math.abs(me.copy(Hs).applyQuaternion(n).dot(this.eye))<.2&&(a.scale.set(1e-10,1e-10,1e-10),a.visible=!1),a.name==="YZ"&&Math.abs(me.copy(zs).applyQuaternion(n).dot(this.eye))<.2&&(a.scale.set(1e-10,1e-10,1e-10),a.visible=!1),a.name==="XZ"&&Math.abs(me.copy(Yi).applyQuaternion(n).dot(this.eye))<.2&&(a.scale.set(1e-10,1e-10,1e-10),a.visible=!1)):this.mode==="rotate"&&(ta.copy(n),me.copy(this.eye).applyQuaternion(Te.copy(n).invert()),a.name.search("E")!==-1&&a.quaternion.setFromRotationMatrix(Qd.lookAt(this.eye,Zd,Yi)),a.name==="X"&&(Te.setFromAxisAngle(zs,Math.atan2(-me.y,me.z)),Te.multiplyQuaternions(ta,Te),a.quaternion.copy(Te)),a.name==="Y"&&(Te.setFromAxisAngle(Yi,Math.atan2(me.x,me.z)),Te.multiplyQuaternions(ta,Te),a.quaternion.copy(Te)),a.name==="Z"&&(Te.setFromAxisAngle(Hs,Math.atan2(me.y,me.x)),Te.multiplyQuaternions(ta,Te),a.quaternion.copy(Te))),a.visible=a.visible&&(a.name.indexOf("X")===-1||this.showX),a.visible=a.visible&&(a.name.indexOf("Y")===-1||this.showY),a.visible=a.visible&&(a.name.indexOf("Z")===-1||this.showZ),a.visible=a.visible&&(a.name.indexOf("E")===-1||this.showX&&this.showY&&this.showZ),a.material._color=a.material._color||a.material.color.clone(),a.material._opacity=a.material._opacity||a.material.opacity,a.material.color.copy(a.material._color),a.material.opacity=a.material._opacity,this.enabled&&this.axis&&(a.name===this.axis||this.axis.split("").some(function(h){return a.name===h}))&&(a.material.color.setHex(16776960),a.material.opacity=1)}super.updateMatrixWorld(t)}}class aM extends ft{constructor(){super(new kn(1e5,1e5,2,2),new to({visible:!1,wireframe:!0,side:mn,transparent:!0,opacity:.1,toneMapped:!1})),this.isTransformControlsPlane=!0,this.type="TransformControlsPlane"}updateMatrixWorld(t){let e=this.space;switch(this.position.copy(this.worldPosition),this.mode==="scale"&&(e="local"),ea.copy(zs).applyQuaternion(e==="local"?this.worldQuaternion:sa),Fs.copy(Yi).applyQuaternion(e==="local"?this.worldQuaternion:sa),Os.copy(Hs).applyQuaternion(e==="local"?this.worldQuaternion:sa),me.copy(Fs),this.mode){case"translate":case"scale":switch(this.axis){case"X":me.copy(this.eye).cross(ea),zn.copy(ea).cross(me);break;case"Y":me.copy(this.eye).cross(Fs),zn.copy(Fs).cross(me);break;case"Z":me.copy(this.eye).cross(Os),zn.copy(Os).cross(me);break;case"XY":zn.copy(Os);break;case"YZ":zn.copy(ea);break;case"XZ":me.copy(Os),zn.copy(Fs);break;case"XYZ":case"E":zn.set(0,0,0);break}break;case"rotate":default:zn.set(0,0,0)}zn.length()===0?this.quaternion.copy(this.cameraQuaternion):(Jd.lookAt(tn.set(0,0,0),zn,me),this.quaternion.setFromRotationMatrix(Jd)),super.updateMatrixWorld(t)}}var lM=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},_c={exports:{}};/*! Tweakpane 3.1.0 (c) 2016 cocopon, licensed under the MIT license. */(function(i,t){(function(e,n){n(t)})(lM,function(e){class n{constructor(s){const[l,g]=s.split("-"),S=l.split(".");this.major=parseInt(S[0],10),this.minor=parseInt(S[1],10),this.patch=parseInt(S[2],10),this.prerelease=g!=null?g:null}toString(){const s=[this.major,this.minor,this.patch].join(".");return this.prerelease!==null?[s,this.prerelease].join("-"):s}}class r{constructor(s){this.controller_=s}get element(){return this.controller_.view.element}get disabled(){return this.controller_.viewProps.get("disabled")}set disabled(s){this.controller_.viewProps.set("disabled",s)}get hidden(){return this.controller_.viewProps.get("hidden")}set hidden(s){this.controller_.viewProps.set("hidden",s)}dispose(){this.controller_.viewProps.set("disposed",!0)}}class o{constructor(s){this.target=s}}class a extends o{constructor(s,l,g,S){super(s),this.value=l,this.presetKey=g,this.last=S!=null?S:!0}}class c extends o{constructor(s,l,g){super(s),this.value=l,this.presetKey=g}}class h extends o{constructor(s,l){super(s),this.expanded=l}}class d extends o{constructor(s,l){super(s),this.index=l}}function p(u){return u}function f(u){return u==null}function m(u,s){if(u.length!==s.length)return!1;for(let l=0;l<u.length;l++)if(u[l]!==s[l])return!1;return!0}const x={alreadydisposed:()=>"View has been already disposed",invalidparams:u=>`Invalid parameters for '${u.name}'`,nomatchingcontroller:u=>`No matching controller for '${u.key}'`,nomatchingview:u=>`No matching view for '${JSON.stringify(u.params)}'`,notbindable:()=>"Value is not bindable",propertynotfound:u=>`Property '${u.name}' not found`,shouldneverhappen:()=>"This error should never happen"};class b{constructor(s){var l;this.message=(l=x[s.type](s.context))!==null&&l!==void 0?l:"Unexpected error",this.name=this.constructor.name,this.stack=new Error(this.message).stack,this.type=s.type}static alreadyDisposed(){return new b({type:"alreadydisposed"})}static notBindable(){return new b({type:"notbindable"})}static propertyNotFound(s){return new b({type:"propertynotfound",context:{name:s}})}static shouldNeverHappen(){return new b({type:"shouldneverhappen"})}}class w{constructor(s,l,g){this.obj_=s,this.key_=l,this.presetKey_=g!=null?g:l}static isBindable(s){return!(s===null||typeof s!="object")}get key(){return this.key_}get presetKey(){return this.presetKey_}read(){return this.obj_[this.key_]}write(s){this.obj_[this.key_]=s}writeProperty(s,l){const g=this.read();if(!w.isBindable(g))throw b.notBindable();if(!(s in g))throw b.propertyNotFound(s);g[s]=l}}class _ extends r{get label(){return this.controller_.props.get("label")}set label(s){this.controller_.props.set("label",s)}get title(){var s;return(s=this.controller_.valueController.props.get("title"))!==null&&s!==void 0?s:""}set title(s){this.controller_.valueController.props.set("title",s)}on(s,l){const g=l.bind(this);return this.controller_.valueController.emitter.on(s,()=>{g(new o(this))}),this}}class v{constructor(){this.observers_={}}on(s,l){let g=this.observers_[s];return g||(g=this.observers_[s]=[]),g.push({handler:l}),this}off(s,l){const g=this.observers_[s];return g&&(this.observers_[s]=g.filter(S=>S.handler!==l)),this}emit(s,l){const g=this.observers_[s];!g||g.forEach(S=>{S.handler(l)})}}const E="tp";function y(u){return(l,g)=>[E,"-",u,"v",l?`_${l}`:"",g?`-${g}`:""].join("")}function T(u,s){return l=>s(u(l))}function C(u){return u.rawValue}function P(u,s){u.emitter.on("change",T(C,s)),s(u.rawValue)}function A(u,s,l){P(u.value(s),l)}function I(u,s,l){l?u.classList.add(s):u.classList.remove(s)}function z(u,s){return l=>{I(u,s,l)}}function M(u,s){P(u,l=>{s.textContent=l!=null?l:""})}const L=y("btn");class V{constructor(s,l){this.element=s.createElement("div"),this.element.classList.add(L()),l.viewProps.bindClassModifiers(this.element);const g=s.createElement("button");g.classList.add(L("b")),l.viewProps.bindDisabled(g),this.element.appendChild(g),this.buttonElement=g;const S=s.createElement("div");S.classList.add(L("t")),M(l.props.value("title"),S),this.buttonElement.appendChild(S)}}class X{constructor(s,l){this.emitter=new v,this.onClick_=this.onClick_.bind(this),this.props=l.props,this.viewProps=l.viewProps,this.view=new V(s,{props:this.props,viewProps:this.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}onClick_(){this.emitter.emit("click",{sender:this})}}class F{constructor(s,l){var g;this.constraint_=l==null?void 0:l.constraint,this.equals_=(g=l==null?void 0:l.equals)!==null&&g!==void 0?g:(S,k)=>S===k,this.emitter=new v,this.rawValue_=s}get constraint(){return this.constraint_}get rawValue(){return this.rawValue_}set rawValue(s){this.setRawValue(s,{forceEmit:!1,last:!0})}setRawValue(s,l){const g=l!=null?l:{forceEmit:!1,last:!0},S=this.constraint_?this.constraint_.constrain(s):s;!!this.equals_(this.rawValue_,S)&&!g.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.rawValue_=S,this.emitter.emit("change",{options:g,rawValue:S,sender:this}))}}class G{constructor(s){this.emitter=new v,this.value_=s}get rawValue(){return this.value_}set rawValue(s){this.setRawValue(s,{forceEmit:!1,last:!0})}setRawValue(s,l){const g=l!=null?l:{forceEmit:!1,last:!0};this.value_===s&&!g.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.value_=s,this.emitter.emit("change",{options:g,rawValue:this.value_,sender:this}))}}function H(u,s){const l=s==null?void 0:s.constraint,g=s==null?void 0:s.equals;return!l&&!g?new G(u):new F(u,s)}class W{constructor(s){this.emitter=new v,this.valMap_=s;for(const l in this.valMap_)this.valMap_[l].emitter.on("change",()=>{this.emitter.emit("change",{key:l,sender:this})})}static createCore(s){return Object.keys(s).reduce((g,S)=>Object.assign(g,{[S]:H(s[S])}),{})}static fromObject(s){const l=this.createCore(s);return new W(l)}get(s){return this.valMap_[s].rawValue}set(s,l){this.valMap_[s].rawValue=l}value(s){return this.valMap_[s]}}function J(u,s){const g=Object.keys(s).reduce((S,k)=>{if(S===void 0)return;const q=s[k],ut=q(u[k]);return ut.succeeded?Object.assign(Object.assign({},S),{[k]:ut.value}):void 0},{});return g}function et(u,s){return u.reduce((l,g)=>{if(l===void 0)return;const S=s(g);if(!(!S.succeeded||S.value===void 0))return[...l,S.value]},[])}function it(u){return u===null?!1:typeof u=="object"}function nt(u){return s=>l=>{if(!s&&l===void 0)return{succeeded:!1,value:void 0};if(s&&l===void 0)return{succeeded:!0,value:void 0};const g=u(l);return g!==void 0?{succeeded:!0,value:g}:{succeeded:!1,value:void 0}}}function pt(u){return{custom:s=>nt(s)(u),boolean:nt(s=>typeof s=="boolean"?s:void 0)(u),number:nt(s=>typeof s=="number"?s:void 0)(u),string:nt(s=>typeof s=="string"?s:void 0)(u),function:nt(s=>typeof s=="function"?s:void 0)(u),constant:s=>nt(l=>l===s?s:void 0)(u),raw:nt(s=>s)(u),object:s=>nt(l=>{if(!!it(l))return J(l,s)})(u),array:s=>nt(l=>{if(!!Array.isArray(l))return et(l,s)})(u)}}const mt={optional:pt(!0),required:pt(!1)};function $(u,s){const l=mt.required.object(s)(u);return l.succeeded?l.value:void 0}function rt(u){return u&&u.parentElement&&u.parentElement.removeChild(u),null}function wt(){return["veryfirst","first","last","verylast"]}const Rt=y(""),Lt={veryfirst:"vfst",first:"fst",last:"lst",verylast:"vlst"};class Et{constructor(s){this.parent_=null,this.blade=s.blade,this.view=s.view,this.viewProps=s.viewProps;const l=this.view.element;this.blade.value("positions").emitter.on("change",()=>{wt().forEach(g=>{l.classList.remove(Rt(void 0,Lt[g]))}),this.blade.get("positions").forEach(g=>{l.classList.add(Rt(void 0,Lt[g]))})}),this.viewProps.handleDispose(()=>{rt(l)})}get parent(){return this.parent_}}const zt="http://www.w3.org/2000/svg";function Bt(u){u.offsetHeight}function j(u,s){const l=u.style.transition;u.style.transition="none",s(),u.style.transition=l}function Ae(u){return u.ontouchstart!==void 0}function Tt(){return new Function("return this")()}function Ht(){return Tt().document}function At(u){const s=u.ownerDocument.defaultView;return s&&"document"in s?u.getContext("2d"):null}const fe={check:'<path d="M2 8l4 4l8 -8"/>',dropdown:'<path d="M5 7h6l-3 3 z"/>',p2dpad:'<path d="M8 4v8"/><path d="M4 8h8"/><circle cx="12" cy="12" r="1.2"/>'};function Wt(u,s){const l=u.createElementNS(zt,"svg");return l.innerHTML=fe[s],l}function N(u,s,l){u.insertBefore(s,u.children[l])}function R(u){u.parentElement&&u.parentElement.removeChild(u)}function K(u){for(;u.children.length>0;)u.removeChild(u.children[0])}function ht(u){for(;u.childNodes.length>0;)u.removeChild(u.childNodes[0])}function at(u){return u.relatedTarget?u.relatedTarget:"explicitOriginalTarget"in u?u.explicitOriginalTarget:null}const ct=y("lbl");function St(u,s){const l=u.createDocumentFragment();return s.split(`
`).map(S=>u.createTextNode(S)).forEach((S,k)=>{k>0&&l.appendChild(u.createElement("br")),l.appendChild(S)}),l}class vt{constructor(s,l){this.element=s.createElement("div"),this.element.classList.add(ct()),l.viewProps.bindClassModifiers(this.element);const g=s.createElement("div");g.classList.add(ct("l")),A(l.props,"label",k=>{f(k)?this.element.classList.add(ct(void 0,"nol")):(this.element.classList.remove(ct(void 0,"nol")),ht(g),g.appendChild(St(s,k)))}),this.element.appendChild(g),this.labelElement=g;const S=s.createElement("div");S.classList.add(ct("v")),this.element.appendChild(S),this.valueElement=S}}class bt extends Et{constructor(s,l){const g=l.valueController.viewProps;super(Object.assign(Object.assign({},l),{view:new vt(s,{props:l.props,viewProps:g}),viewProps:g})),this.props=l.props,this.valueController=l.valueController,this.view.valueElement.appendChild(this.valueController.view.element)}}const Ot={id:"button",type:"blade",accept(u){const s=mt,l=$(u,{title:s.required.string,view:s.required.constant("button"),label:s.optional.string});return l?{params:l}:null},controller(u){return new bt(u.document,{blade:u.blade,props:W.fromObject({label:u.params.label}),valueController:new X(u.document,{props:W.fromObject({title:u.params.title}),viewProps:u.viewProps})})},api(u){return!(u.controller instanceof bt)||!(u.controller.valueController instanceof X)?null:new _(u.controller)}};class Vt extends Et{constructor(s){super(s),this.value=s.value}}function ot(){return new W({positions:H([],{equals:m})})}class ne extends W{constructor(s){super(s)}static create(s){const l={completed:!0,expanded:s,expandedHeight:null,shouldFixHeight:!1,temporaryExpanded:null},g=W.createCore(l);return new ne(g)}get styleExpanded(){var s;return(s=this.get("temporaryExpanded"))!==null&&s!==void 0?s:this.get("expanded")}get styleHeight(){if(!this.styleExpanded)return"0";const s=this.get("expandedHeight");return this.get("shouldFixHeight")&&!f(s)?`${s}px`:"auto"}bindExpandedClass(s,l){const g=()=>{this.styleExpanded?s.classList.add(l):s.classList.remove(l)};A(this,"expanded",g),A(this,"temporaryExpanded",g)}cleanUpTransition(){this.set("shouldFixHeight",!1),this.set("expandedHeight",null),this.set("completed",!0)}}function Zt(u,s){let l=0;return j(s,()=>{u.set("expandedHeight",null),u.set("temporaryExpanded",!0),Bt(s),l=s.clientHeight,u.set("temporaryExpanded",null),Bt(s)}),l}function Gt(u,s){s.style.height=u.styleHeight}function Ct(u,s){u.value("expanded").emitter.on("beforechange",()=>{u.set("completed",!1),f(u.get("expandedHeight"))&&u.set("expandedHeight",Zt(u,s)),u.set("shouldFixHeight",!0),Bt(s)}),u.emitter.on("change",()=>{Gt(u,s)}),Gt(u,s),s.addEventListener("transitionend",l=>{l.propertyName==="height"&&u.cleanUpTransition()})}class xt extends r{constructor(s,l){super(s),this.rackApi_=l}}function Yt(u,s){return u.addBlade(Object.assign(Object.assign({},s),{view:"button"}))}function B(u,s){return u.addBlade(Object.assign(Object.assign({},s),{view:"folder"}))}function dt(u,s){const l=s!=null?s:{};return u.addBlade(Object.assign(Object.assign({},l),{view:"separator"}))}function _t(u,s){return u.addBlade(Object.assign(Object.assign({},s),{view:"tab"}))}class Pt{constructor(s){this.emitter=new v,this.items_=[],this.cache_=new Set,this.onSubListAdd_=this.onSubListAdd_.bind(this),this.onSubListRemove_=this.onSubListRemove_.bind(this),this.extract_=s}get items(){return this.items_}allItems(){return Array.from(this.cache_)}find(s){for(const l of this.allItems())if(s(l))return l;return null}includes(s){return this.cache_.has(s)}add(s,l){if(this.includes(s))throw b.shouldNeverHappen();const g=l!==void 0?l:this.items_.length;this.items_.splice(g,0,s),this.cache_.add(s);const S=this.extract_(s);S&&(S.emitter.on("add",this.onSubListAdd_),S.emitter.on("remove",this.onSubListRemove_),S.allItems().forEach(k=>{this.cache_.add(k)})),this.emitter.emit("add",{index:g,item:s,root:this,target:this})}remove(s){const l=this.items_.indexOf(s);if(l<0)return;this.items_.splice(l,1),this.cache_.delete(s);const g=this.extract_(s);g&&(g.emitter.off("add",this.onSubListAdd_),g.emitter.off("remove",this.onSubListRemove_)),this.emitter.emit("remove",{index:l,item:s,root:this,target:this})}onSubListAdd_(s){this.cache_.add(s.item),this.emitter.emit("add",{index:s.index,item:s.item,root:this,target:s.target})}onSubListRemove_(s){this.cache_.delete(s.item),this.emitter.emit("remove",{index:s.index,item:s.item,root:this,target:s.target})}}class O extends r{constructor(s){super(s),this.onBindingChange_=this.onBindingChange_.bind(this),this.emitter_=new v,this.controller_.binding.emitter.on("change",this.onBindingChange_)}get label(){return this.controller_.props.get("label")}set label(s){this.controller_.props.set("label",s)}on(s,l){const g=l.bind(this);return this.emitter_.on(s,S=>{g(S.event)}),this}refresh(){this.controller_.binding.read()}onBindingChange_(s){const l=s.sender.target.read();this.emitter_.emit("change",{event:new a(this,l,this.controller_.binding.target.presetKey,s.options.last)})}}class st extends bt{constructor(s,l){super(s,l),this.binding=l.binding}}class lt extends r{constructor(s){super(s),this.onBindingUpdate_=this.onBindingUpdate_.bind(this),this.emitter_=new v,this.controller_.binding.emitter.on("update",this.onBindingUpdate_)}get label(){return this.controller_.props.get("label")}set label(s){this.controller_.props.set("label",s)}on(s,l){const g=l.bind(this);return this.emitter_.on(s,S=>{g(S.event)}),this}refresh(){this.controller_.binding.read()}onBindingUpdate_(s){const l=s.sender.target.read();this.emitter_.emit("update",{event:new c(this,l,this.controller_.binding.target.presetKey)})}}class Mt extends bt{constructor(s,l){super(s,l),this.binding=l.binding,this.viewProps.bindDisabled(this.binding.ticker),this.viewProps.handleDispose(()=>{this.binding.dispose()})}}function Nt(u){return u instanceof ae?u.apiSet_:u instanceof xt?u.rackApi_.apiSet_:null}function te(u,s){const l=u.find(g=>g.controller_===s);if(!l)throw b.shouldNeverHappen();return l}function Jt(u,s,l){if(!w.isBindable(u))throw b.notBindable();return new w(u,s,l)}class ae extends r{constructor(s,l){super(s),this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this),this.onRackInputChange_=this.onRackInputChange_.bind(this),this.onRackMonitorUpdate_=this.onRackMonitorUpdate_.bind(this),this.emitter_=new v,this.apiSet_=new Pt(Nt),this.pool_=l;const g=this.controller_.rack;g.emitter.on("add",this.onRackAdd_),g.emitter.on("remove",this.onRackRemove_),g.emitter.on("inputchange",this.onRackInputChange_),g.emitter.on("monitorupdate",this.onRackMonitorUpdate_),g.children.forEach(S=>{this.setUpApi_(S)})}get children(){return this.controller_.rack.children.map(s=>te(this.apiSet_,s))}addInput(s,l,g){const S=g!=null?g:{},k=this.controller_.view.element.ownerDocument,q=this.pool_.createInput(k,Jt(s,l,S.presetKey),S),ut=new O(q);return this.add(ut,S.index)}addMonitor(s,l,g){const S=g!=null?g:{},k=this.controller_.view.element.ownerDocument,q=this.pool_.createMonitor(k,Jt(s,l),S),ut=new lt(q);return this.add(ut,S.index)}addFolder(s){return B(this,s)}addButton(s){return Yt(this,s)}addSeparator(s){return dt(this,s)}addTab(s){return _t(this,s)}add(s,l){this.controller_.rack.add(s.controller_,l);const g=this.apiSet_.find(S=>S.controller_===s.controller_);return g&&this.apiSet_.remove(g),this.apiSet_.add(s),s}remove(s){this.controller_.rack.remove(s.controller_)}addBlade(s){const l=this.controller_.view.element.ownerDocument,g=this.pool_.createBlade(l,s),S=this.pool_.createBladeApi(g);return this.add(S,s.index)}on(s,l){const g=l.bind(this);return this.emitter_.on(s,S=>{g(S.event)}),this}setUpApi_(s){this.apiSet_.find(g=>g.controller_===s)||this.apiSet_.add(this.pool_.createBladeApi(s))}onRackAdd_(s){this.setUpApi_(s.bladeController)}onRackRemove_(s){if(s.isRoot){const l=te(this.apiSet_,s.bladeController);this.apiSet_.remove(l)}}onRackInputChange_(s){const l=s.bladeController;if(l instanceof st){const g=te(this.apiSet_,l),S=l.binding;this.emitter_.emit("change",{event:new a(g,S.target.read(),S.target.presetKey,s.options.last)})}else if(l instanceof Vt){const g=te(this.apiSet_,l);this.emitter_.emit("change",{event:new a(g,l.value.rawValue,void 0,s.options.last)})}}onRackMonitorUpdate_(s){if(!(s.bladeController instanceof Mt))throw b.shouldNeverHappen();const l=te(this.apiSet_,s.bladeController),g=s.bladeController.binding;this.emitter_.emit("update",{event:new c(l,g.target.read(),g.target.presetKey)})}}class Le extends xt{constructor(s,l){super(s,new ae(s.rackController,l)),this.emitter_=new v,this.controller_.foldable.value("expanded").emitter.on("change",g=>{this.emitter_.emit("fold",{event:new h(this,g.sender.rawValue)})}),this.rackApi_.on("change",g=>{this.emitter_.emit("change",{event:g})}),this.rackApi_.on("update",g=>{this.emitter_.emit("update",{event:g})})}get expanded(){return this.controller_.foldable.get("expanded")}set expanded(s){this.controller_.foldable.set("expanded",s)}get title(){return this.controller_.props.get("title")}set title(s){this.controller_.props.set("title",s)}get children(){return this.rackApi_.children}addInput(s,l,g){return this.rackApi_.addInput(s,l,g)}addMonitor(s,l,g){return this.rackApi_.addMonitor(s,l,g)}addFolder(s){return this.rackApi_.addFolder(s)}addButton(s){return this.rackApi_.addButton(s)}addSeparator(s){return this.rackApi_.addSeparator(s)}addTab(s){return this.rackApi_.addTab(s)}add(s,l){return this.rackApi_.add(s,l)}remove(s){this.rackApi_.remove(s)}addBlade(s){return this.rackApi_.addBlade(s)}on(s,l){const g=l.bind(this);return this.emitter_.on(s,S=>{g(S.event)}),this}}class re extends Et{constructor(s){super({blade:s.blade,view:s.view,viewProps:s.rackController.viewProps}),this.rackController=s.rackController}}class Ce{constructor(s,l){const g=y(l.viewName);this.element=s.createElement("div"),this.element.classList.add(g()),l.viewProps.bindClassModifiers(this.element)}}function je(u,s){for(let l=0;l<u.length;l++){const g=u[l];if(g instanceof st&&g.binding===s)return g}return null}function eo(u,s){for(let l=0;l<u.length;l++){const g=u[l];if(g instanceof Mt&&g.binding===s)return g}return null}function Ra(u,s){for(let l=0;l<u.length;l++){const g=u[l];if(g instanceof Vt&&g.value===s)return g}return null}function di(u){return u instanceof pi?u.rack:u instanceof re?u.rackController.rack:null}function no(u){const s=di(u);return s?s.bcSet_:null}class ar{constructor(s){var l;this.onBladePositionsChange_=this.onBladePositionsChange_.bind(this),this.onSetAdd_=this.onSetAdd_.bind(this),this.onSetRemove_=this.onSetRemove_.bind(this),this.onChildDispose_=this.onChildDispose_.bind(this),this.onChildPositionsChange_=this.onChildPositionsChange_.bind(this),this.onChildInputChange_=this.onChildInputChange_.bind(this),this.onChildMonitorUpdate_=this.onChildMonitorUpdate_.bind(this),this.onChildValueChange_=this.onChildValueChange_.bind(this),this.onChildViewPropsChange_=this.onChildViewPropsChange_.bind(this),this.onDescendantLayout_=this.onDescendantLayout_.bind(this),this.onDescendantInputChange_=this.onDescendantInputChange_.bind(this),this.onDescendantMonitorUpdate_=this.onDescendantMonitorUpdate_.bind(this),this.emitter=new v,this.blade_=s!=null?s:null,(l=this.blade_)===null||l===void 0||l.value("positions").emitter.on("change",this.onBladePositionsChange_),this.bcSet_=new Pt(no),this.bcSet_.emitter.on("add",this.onSetAdd_),this.bcSet_.emitter.on("remove",this.onSetRemove_)}get children(){return this.bcSet_.items}add(s,l){s.parent&&s.parent.remove(s),s.parent_=this,this.bcSet_.add(s,l)}remove(s){s.parent_=null,this.bcSet_.remove(s)}find(s){return this.bcSet_.allItems().filter(l=>l instanceof s)}onSetAdd_(s){this.updatePositions_();const l=s.target===s.root;if(this.emitter.emit("add",{bladeController:s.item,index:s.index,isRoot:l,sender:this}),!l)return;const g=s.item;if(g.viewProps.emitter.on("change",this.onChildViewPropsChange_),g.blade.value("positions").emitter.on("change",this.onChildPositionsChange_),g.viewProps.handleDispose(this.onChildDispose_),g instanceof st)g.binding.emitter.on("change",this.onChildInputChange_);else if(g instanceof Mt)g.binding.emitter.on("update",this.onChildMonitorUpdate_);else if(g instanceof Vt)g.value.emitter.on("change",this.onChildValueChange_);else{const S=di(g);if(S){const k=S.emitter;k.on("layout",this.onDescendantLayout_),k.on("inputchange",this.onDescendantInputChange_),k.on("monitorupdate",this.onDescendantMonitorUpdate_)}}}onSetRemove_(s){this.updatePositions_();const l=s.target===s.root;if(this.emitter.emit("remove",{bladeController:s.item,isRoot:l,sender:this}),!l)return;const g=s.item;if(g instanceof st)g.binding.emitter.off("change",this.onChildInputChange_);else if(g instanceof Mt)g.binding.emitter.off("update",this.onChildMonitorUpdate_);else if(g instanceof Vt)g.value.emitter.off("change",this.onChildValueChange_);else{const S=di(g);if(S){const k=S.emitter;k.off("layout",this.onDescendantLayout_),k.off("inputchange",this.onDescendantInputChange_),k.off("monitorupdate",this.onDescendantMonitorUpdate_)}}}updatePositions_(){const s=this.bcSet_.items.filter(S=>!S.viewProps.get("hidden")),l=s[0],g=s[s.length-1];this.bcSet_.items.forEach(S=>{const k=[];S===l&&(k.push("first"),(!this.blade_||this.blade_.get("positions").includes("veryfirst"))&&k.push("veryfirst")),S===g&&(k.push("last"),(!this.blade_||this.blade_.get("positions").includes("verylast"))&&k.push("verylast")),S.blade.set("positions",k)})}onChildPositionsChange_(){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildViewPropsChange_(s){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildDispose_(){this.bcSet_.items.filter(l=>l.viewProps.get("disposed")).forEach(l=>{this.bcSet_.remove(l)})}onChildInputChange_(s){const l=je(this.find(st),s.sender);if(!l)throw b.shouldNeverHappen();this.emitter.emit("inputchange",{bladeController:l,options:s.options,sender:this})}onChildMonitorUpdate_(s){const l=eo(this.find(Mt),s.sender);if(!l)throw b.shouldNeverHappen();this.emitter.emit("monitorupdate",{bladeController:l,sender:this})}onChildValueChange_(s){const l=Ra(this.find(Vt),s.sender);if(!l)throw b.shouldNeverHappen();this.emitter.emit("inputchange",{bladeController:l,options:s.options,sender:this})}onDescendantLayout_(s){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onDescendantInputChange_(s){this.emitter.emit("inputchange",{bladeController:s.bladeController,options:s.options,sender:this})}onDescendantMonitorUpdate_(s){this.emitter.emit("monitorupdate",{bladeController:s.bladeController,sender:this})}onBladePositionsChange_(){this.updatePositions_()}}class pi extends Et{constructor(s,l){super(Object.assign(Object.assign({},l),{view:new Ce(s,{viewName:"brk",viewProps:l.viewProps})})),this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this);const g=new ar(l.root?void 0:l.blade);g.emitter.on("add",this.onRackAdd_),g.emitter.on("remove",this.onRackRemove_),this.rack=g,this.viewProps.handleDispose(()=>{for(let S=this.rack.children.length-1;S>=0;S--)this.rack.children[S].viewProps.set("disposed",!0)})}onRackAdd_(s){!s.isRoot||N(this.view.element,s.bladeController.view.element,s.index)}onRackRemove_(s){!s.isRoot||R(s.bladeController.view.element)}}const ls=y("cnt");class La{constructor(s,l){var g;this.className_=y((g=l.viewName)!==null&&g!==void 0?g:"fld"),this.element=s.createElement("div"),this.element.classList.add(this.className_(),ls()),l.viewProps.bindClassModifiers(this.element),this.foldable_=l.foldable,this.foldable_.bindExpandedClass(this.element,this.className_(void 0,"expanded")),A(this.foldable_,"completed",z(this.element,this.className_(void 0,"cpl")));const S=s.createElement("button");S.classList.add(this.className_("b")),A(l.props,"title",Ut=>{f(Ut)?this.element.classList.add(this.className_(void 0,"not")):this.element.classList.remove(this.className_(void 0,"not"))}),l.viewProps.bindDisabled(S),this.element.appendChild(S),this.buttonElement=S;const k=s.createElement("div");k.classList.add(this.className_("t")),M(l.props.value("title"),k),this.buttonElement.appendChild(k),this.titleElement=k;const q=s.createElement("div");q.classList.add(this.className_("m")),this.buttonElement.appendChild(q);const ut=l.containerElement;ut.classList.add(this.className_("c")),this.element.appendChild(ut),this.containerElement=ut}}class cs extends re{constructor(s,l){var g;const S=ne.create((g=l.expanded)!==null&&g!==void 0?g:!0),k=new pi(s,{blade:l.blade,root:l.root,viewProps:l.viewProps});super(Object.assign(Object.assign({},l),{rackController:k,view:new La(s,{containerElement:k.view.element,foldable:S,props:l.props,viewName:l.root?"rot":void 0,viewProps:l.viewProps})})),this.onTitleClick_=this.onTitleClick_.bind(this),this.props=l.props,this.foldable=S,Ct(this.foldable,this.view.containerElement),this.rackController.rack.emitter.on("add",()=>{this.foldable.cleanUpTransition()}),this.rackController.rack.emitter.on("remove",()=>{this.foldable.cleanUpTransition()}),this.view.buttonElement.addEventListener("click",this.onTitleClick_)}get document(){return this.view.element.ownerDocument}onTitleClick_(){this.foldable.set("expanded",!this.foldable.get("expanded"))}}const Da={id:"folder",type:"blade",accept(u){const s=mt,l=$(u,{title:s.required.string,view:s.required.constant("folder"),expanded:s.optional.boolean});return l?{params:l}:null},controller(u){return new cs(u.document,{blade:u.blade,expanded:u.params.expanded,props:W.fromObject({title:u.params.title}),viewProps:u.viewProps})},api(u){return u.controller instanceof cs?new Le(u.controller,u.pool):null}};class D extends Vt{constructor(s,l){const g=l.valueController.viewProps;super(Object.assign(Object.assign({},l),{value:l.valueController.value,view:new vt(s,{props:l.props,viewProps:g}),viewProps:g})),this.props=l.props,this.valueController=l.valueController,this.view.valueElement.appendChild(this.valueController.view.element)}}class Y extends r{}const Q=y("spr");class tt{constructor(s,l){this.element=s.createElement("div"),this.element.classList.add(Q()),l.viewProps.bindClassModifiers(this.element);const g=s.createElement("hr");g.classList.add(Q("r")),this.element.appendChild(g)}}class Z extends Et{constructor(s,l){super(Object.assign(Object.assign({},l),{view:new tt(s,{viewProps:l.viewProps})}))}}const yt={id:"separator",type:"blade",accept(u){const l=$(u,{view:mt.required.constant("separator")});return l?{params:l}:null},controller(u){return new Z(u.document,{blade:u.blade,viewProps:u.viewProps})},api(u){return u.controller instanceof Z?new Y(u.controller):null}},Dt=y("");function kt(u,s){return z(u,Dt(void 0,s))}class Ft extends W{constructor(s){super(s)}static create(s){var l,g;const S=s!=null?s:{},k={disabled:(l=S.disabled)!==null&&l!==void 0?l:!1,disposed:!1,hidden:(g=S.hidden)!==null&&g!==void 0?g:!1},q=W.createCore(k);return new Ft(q)}bindClassModifiers(s){A(this,"disabled",kt(s,"disabled")),A(this,"hidden",kt(s,"hidden"))}bindDisabled(s){A(this,"disabled",l=>{s.disabled=l})}bindTabIndex(s){A(this,"disabled",l=>{s.tabIndex=l?-1:0})}handleDispose(s){this.value("disposed").emitter.on("change",l=>{l&&s()})}}const Xt=y("tbi");class jt{constructor(s,l){this.element=s.createElement("div"),this.element.classList.add(Xt()),l.viewProps.bindClassModifiers(this.element),A(l.props,"selected",k=>{k?this.element.classList.add(Xt(void 0,"sel")):this.element.classList.remove(Xt(void 0,"sel"))});const g=s.createElement("button");g.classList.add(Xt("b")),l.viewProps.bindDisabled(g),this.element.appendChild(g),this.buttonElement=g;const S=s.createElement("div");S.classList.add(Xt("t")),M(l.props.value("title"),S),this.buttonElement.appendChild(S),this.titleElement=S}}class $t{constructor(s,l){this.emitter=new v,this.onClick_=this.onClick_.bind(this),this.props=l.props,this.viewProps=l.viewProps,this.view=new jt(s,{props:l.props,viewProps:l.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}onClick_(){this.emitter.emit("click",{sender:this})}}class Me{constructor(s,l){this.onItemClick_=this.onItemClick_.bind(this),this.ic_=new $t(s,{props:l.itemProps,viewProps:Ft.create()}),this.ic_.emitter.on("click",this.onItemClick_),this.cc_=new pi(s,{blade:ot(),viewProps:Ft.create()}),this.props=l.props,A(this.props,"selected",g=>{this.itemController.props.set("selected",g),this.contentController.viewProps.set("hidden",!g)})}get itemController(){return this.ic_}get contentController(){return this.cc_}onItemClick_(){this.props.set("selected",!0)}}class Ke{constructor(s,l){this.controller_=s,this.rackApi_=l}get title(){var s;return(s=this.controller_.itemController.props.get("title"))!==null&&s!==void 0?s:""}set title(s){this.controller_.itemController.props.set("title",s)}get selected(){return this.controller_.props.get("selected")}set selected(s){this.controller_.props.set("selected",s)}get children(){return this.rackApi_.children}addButton(s){return this.rackApi_.addButton(s)}addFolder(s){return this.rackApi_.addFolder(s)}addSeparator(s){return this.rackApi_.addSeparator(s)}addTab(s){return this.rackApi_.addTab(s)}add(s,l){this.rackApi_.add(s,l)}remove(s){this.rackApi_.remove(s)}addInput(s,l,g){return this.rackApi_.addInput(s,l,g)}addMonitor(s,l,g){return this.rackApi_.addMonitor(s,l,g)}addBlade(s){return this.rackApi_.addBlade(s)}}class De extends xt{constructor(s,l){super(s,new ae(s.rackController,l)),this.onPageAdd_=this.onPageAdd_.bind(this),this.onPageRemove_=this.onPageRemove_.bind(this),this.onSelect_=this.onSelect_.bind(this),this.emitter_=new v,this.pageApiMap_=new Map,this.rackApi_.on("change",g=>{this.emitter_.emit("change",{event:g})}),this.rackApi_.on("update",g=>{this.emitter_.emit("update",{event:g})}),this.controller_.tab.selectedIndex.emitter.on("change",this.onSelect_),this.controller_.pageSet.emitter.on("add",this.onPageAdd_),this.controller_.pageSet.emitter.on("remove",this.onPageRemove_),this.controller_.pageSet.items.forEach(g=>{this.setUpPageApi_(g)})}get pages(){return this.controller_.pageSet.items.map(s=>{const l=this.pageApiMap_.get(s);if(!l)throw b.shouldNeverHappen();return l})}addPage(s){const l=this.controller_.view.element.ownerDocument,g=new Me(l,{itemProps:W.fromObject({selected:!1,title:s.title}),props:W.fromObject({selected:!1})});this.controller_.add(g,s.index);const S=this.pageApiMap_.get(g);if(!S)throw b.shouldNeverHappen();return S}removePage(s){this.controller_.remove(s)}on(s,l){const g=l.bind(this);return this.emitter_.on(s,S=>{g(S.event)}),this}setUpPageApi_(s){const l=this.rackApi_.apiSet_.find(S=>S.controller_===s.contentController);if(!l)throw b.shouldNeverHappen();const g=new Ke(s,l);this.pageApiMap_.set(s,g)}onPageAdd_(s){this.setUpPageApi_(s.item)}onPageRemove_(s){if(!this.pageApiMap_.get(s.item))throw b.shouldNeverHappen();this.pageApiMap_.delete(s.item)}onSelect_(s){this.emitter_.emit("select",{event:new d(this,s.rawValue)})}}const Sn=-1;class _e{constructor(){this.onItemSelectedChange_=this.onItemSelectedChange_.bind(this),this.empty=H(!0),this.selectedIndex=H(Sn),this.items_=[]}add(s,l){const g=l!=null?l:this.items_.length;this.items_.splice(g,0,s),s.emitter.on("change",this.onItemSelectedChange_),this.keepSelection_()}remove(s){const l=this.items_.indexOf(s);l<0||(this.items_.splice(l,1),s.emitter.off("change",this.onItemSelectedChange_),this.keepSelection_())}keepSelection_(){if(this.items_.length===0){this.selectedIndex.rawValue=Sn,this.empty.rawValue=!0;return}const s=this.items_.findIndex(l=>l.rawValue);s<0?(this.items_.forEach((l,g)=>{l.rawValue=g===0}),this.selectedIndex.rawValue=0):(this.items_.forEach((l,g)=>{l.rawValue=g===s}),this.selectedIndex.rawValue=s),this.empty.rawValue=!1}onItemSelectedChange_(s){if(s.rawValue){const l=this.items_.findIndex(g=>g===s.sender);this.items_.forEach((g,S)=>{g.rawValue=S===l}),this.selectedIndex.rawValue=l}else this.keepSelection_()}}const Kt=y("tab");class us{constructor(s,l){this.element=s.createElement("div"),this.element.classList.add(Kt(),ls()),l.viewProps.bindClassModifiers(this.element),P(l.empty,z(this.element,Kt(void 0,"nop")));const g=s.createElement("div");g.classList.add(Kt("i")),this.element.appendChild(g),this.itemsElement=g;const S=l.contentsElement;S.classList.add(Kt("c")),this.element.appendChild(S),this.contentsElement=S}}class xe extends re{constructor(s,l){const g=new pi(s,{blade:l.blade,viewProps:l.viewProps}),S=new _e;super({blade:l.blade,rackController:g,view:new us(s,{contentsElement:g.view.element,empty:S.empty,viewProps:l.viewProps})}),this.onPageAdd_=this.onPageAdd_.bind(this),this.onPageRemove_=this.onPageRemove_.bind(this),this.pageSet_=new Pt(()=>null),this.pageSet_.emitter.on("add",this.onPageAdd_),this.pageSet_.emitter.on("remove",this.onPageRemove_),this.tab=S}get pageSet(){return this.pageSet_}add(s,l){this.pageSet_.add(s,l)}remove(s){this.pageSet_.remove(this.pageSet_.items[s])}onPageAdd_(s){const l=s.item;N(this.view.itemsElement,l.itemController.view.element,s.index),this.rackController.rack.add(l.contentController,s.index),this.tab.add(l.props.value("selected"))}onPageRemove_(s){const l=s.item;R(l.itemController.view.element),this.rackController.rack.remove(l.contentController),this.tab.remove(l.props.value("selected"))}}const Vn={id:"tab",type:"blade",accept(u){const s=mt,l=$(u,{pages:s.required.array(s.required.object({title:s.required.string})),view:s.required.constant("tab")});return!l||l.pages.length===0?null:{params:l}},controller(u){const s=new xe(u.document,{blade:u.blade,viewProps:u.viewProps});return u.params.pages.forEach(l=>{const g=new Me(u.document,{itemProps:W.fromObject({selected:!1,title:l.title}),props:W.fromObject({selected:!1})});s.add(g)}),s},api(u){return u.controller instanceof xe?new De(u.controller,u.pool):null}};function io(u,s){const l=u.accept(s.params);if(!l)return null;const g=mt.optional.boolean(s.params.disabled).value,S=mt.optional.boolean(s.params.hidden).value;return u.controller({blade:ot(),document:s.document,params:Object.assign(Object.assign({},l.params),{disabled:g,hidden:S}),viewProps:Ft.create({disabled:g,hidden:S})})}class Fi{constructor(){this.disabled=!1,this.emitter=new v}dispose(){}tick(){this.disabled||this.emitter.emit("tick",{sender:this})}}class hs{constructor(s,l){this.disabled_=!1,this.timerId_=null,this.onTick_=this.onTick_.bind(this),this.doc_=s,this.emitter=new v,this.interval_=l,this.setTimer_()}get disabled(){return this.disabled_}set disabled(s){this.disabled_=s,this.disabled_?this.clearTimer_():this.setTimer_()}dispose(){this.clearTimer_()}clearTimer_(){if(this.timerId_===null)return;const s=this.doc_.defaultView;s&&s.clearInterval(this.timerId_),this.timerId_=null}setTimer_(){if(this.clearTimer_(),this.interval_<=0)return;const s=this.doc_.defaultView;s&&(this.timerId_=s.setInterval(this.onTick_,this.interval_))}onTick_(){this.disabled_||this.emitter.emit("tick",{sender:this})}}class Re{constructor(s){this.constraints=s}constrain(s){return this.constraints.reduce((l,g)=>g.constrain(l),s)}}function He(u,s){if(u instanceof s)return u;if(u instanceof Re){const l=u.constraints.reduce((g,S)=>g||(S instanceof s?S:null),null);if(l)return l}return null}class $n{constructor(s){this.options=s}constrain(s){const l=this.options;return l.length===0||l.filter(S=>S.value===s).length>0?s:l[0].value}}class Be{constructor(s){this.maxValue=s.max,this.minValue=s.min}constrain(s){let l=s;return f(this.minValue)||(l=Math.max(l,this.minValue)),f(this.maxValue)||(l=Math.min(l,this.maxValue)),l}}class fi{constructor(s,l=0){this.step=s,this.origin=l}constrain(s){const l=this.origin%this.step,g=Math.round((s-l)/this.step);return l+g*this.step}}const ds=y("lst");class ro{constructor(s,l){this.onValueChange_=this.onValueChange_.bind(this),this.props_=l.props,this.element=s.createElement("div"),this.element.classList.add(ds()),l.viewProps.bindClassModifiers(this.element);const g=s.createElement("select");g.classList.add(ds("s")),A(this.props_,"options",k=>{K(g),k.forEach((q,ut)=>{const Ut=s.createElement("option");Ut.dataset.index=String(ut),Ut.textContent=q.text,Ut.value=String(q.value),g.appendChild(Ut)})}),l.viewProps.bindDisabled(g),this.element.appendChild(g),this.selectElement=g;const S=s.createElement("div");S.classList.add(ds("m")),S.appendChild(Wt(s,"dropdown")),this.element.appendChild(S),l.value.emitter.on("change",this.onValueChange_),this.value_=l.value,this.update_()}update_(){this.selectElement.value=String(this.value_.rawValue)}onValueChange_(){this.update_()}}class ps{constructor(s,l){this.onSelectChange_=this.onSelectChange_.bind(this),this.props=l.props,this.value=l.value,this.viewProps=l.viewProps,this.view=new ro(s,{props:this.props,value:this.value,viewProps:this.viewProps}),this.view.selectElement.addEventListener("change",this.onSelectChange_)}onSelectChange_(s){const g=s.currentTarget.selectedOptions.item(0);if(!g)return;const S=Number(g.dataset.index);this.value.rawValue=this.props.get("options")[S].value}}const Yc=y("pop");class gf{constructor(s,l){this.element=s.createElement("div"),this.element.classList.add(Yc()),l.viewProps.bindClassModifiers(this.element),P(l.shows,z(this.element,Yc(void 0,"v")))}}class $c{constructor(s,l){this.shows=H(!1),this.viewProps=l.viewProps,this.view=new gf(s,{shows:this.shows,viewProps:this.viewProps})}}const Kc=y("txt");class vf{constructor(s,l){this.onChange_=this.onChange_.bind(this),this.element=s.createElement("div"),this.element.classList.add(Kc()),l.viewProps.bindClassModifiers(this.element),this.props_=l.props,this.props_.emitter.on("change",this.onChange_);const g=s.createElement("input");g.classList.add(Kc("i")),g.type="text",l.viewProps.bindDisabled(g),this.element.appendChild(g),this.inputElement=g,l.value.emitter.on("change",this.onChange_),this.value_=l.value,this.refresh()}refresh(){const s=this.props_.get("formatter");this.inputElement.value=s(this.value_.rawValue)}onChange_(){this.refresh()}}class so{constructor(s,l){this.onInputChange_=this.onInputChange_.bind(this),this.parser_=l.parser,this.props=l.props,this.value=l.value,this.viewProps=l.viewProps,this.view=new vf(s,{props:l.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_)}onInputChange_(s){const g=s.currentTarget.value,S=this.parser_(g);f(S)||(this.value.rawValue=S),this.view.refresh()}}function _f(u){return String(u)}function Zc(u){return u==="false"?!1:!!u}function Qc(u){return _f(u)}class xf{constructor(s){this.text=s}evaluate(){return Number(this.text)}toString(){return this.text}}const bf={"**":(u,s)=>Math.pow(u,s),"*":(u,s)=>u*s,"/":(u,s)=>u/s,"%":(u,s)=>u%s,"+":(u,s)=>u+s,"-":(u,s)=>u-s,"<<":(u,s)=>u<<s,">>":(u,s)=>u>>s,">>>":(u,s)=>u>>>s,"&":(u,s)=>u&s,"^":(u,s)=>u^s,"|":(u,s)=>u|s};class yf{constructor(s,l,g){this.left=l,this.operator=s,this.right=g}evaluate(){const s=bf[this.operator];if(!s)throw new Error(`unexpected binary operator: '${this.operator}`);return s(this.left.evaluate(),this.right.evaluate())}toString(){return["b(",this.left.toString(),this.operator,this.right.toString(),")"].join(" ")}}const wf={"+":u=>u,"-":u=>-u,"~":u=>~u};class Ef{constructor(s,l){this.operator=s,this.expression=l}evaluate(){const s=wf[this.operator];if(!s)throw new Error(`unexpected unary operator: '${this.operator}`);return s(this.expression.evaluate())}toString(){return["u(",this.operator,this.expression.toString(),")"].join(" ")}}function Ia(u){return(s,l)=>{for(let g=0;g<u.length;g++){const S=u[g](s,l);if(S!=="")return S}return""}}function fs(u,s){var l;const g=u.substr(s).match(/^\s+/);return(l=g&&g[0])!==null&&l!==void 0?l:""}function Mf(u,s){const l=u.substr(s,1);return l.match(/^[1-9]$/)?l:""}function ms(u,s){var l;const g=u.substr(s).match(/^[0-9]+/);return(l=g&&g[0])!==null&&l!==void 0?l:""}function Sf(u,s){const l=ms(u,s);if(l!=="")return l;const g=u.substr(s,1);if(s+=1,g!=="-"&&g!=="+")return"";const S=ms(u,s);return S===""?"":g+S}function Ua(u,s){const l=u.substr(s,1);if(s+=1,l.toLowerCase()!=="e")return"";const g=Sf(u,s);return g===""?"":l+g}function Jc(u,s){const l=u.substr(s,1);if(l==="0")return l;const g=Mf(u,s);return s+=g.length,g===""?"":g+ms(u,s)}function Tf(u,s){const l=Jc(u,s);if(s+=l.length,l==="")return"";const g=u.substr(s,1);if(s+=g.length,g!==".")return"";const S=ms(u,s);return s+=S.length,l+g+S+Ua(u,s)}function Af(u,s){const l=u.substr(s,1);if(s+=l.length,l!==".")return"";const g=ms(u,s);return s+=g.length,g===""?"":l+g+Ua(u,s)}function Cf(u,s){const l=Jc(u,s);return s+=l.length,l===""?"":l+Ua(u,s)}const Pf=Ia([Tf,Af,Cf]);function Rf(u,s){var l;const g=u.substr(s).match(/^[01]+/);return(l=g&&g[0])!==null&&l!==void 0?l:""}function Lf(u,s){const l=u.substr(s,2);if(s+=l.length,l.toLowerCase()!=="0b")return"";const g=Rf(u,s);return g===""?"":l+g}function Df(u,s){var l;const g=u.substr(s).match(/^[0-7]+/);return(l=g&&g[0])!==null&&l!==void 0?l:""}function If(u,s){const l=u.substr(s,2);if(s+=l.length,l.toLowerCase()!=="0o")return"";const g=Df(u,s);return g===""?"":l+g}function Uf(u,s){var l;const g=u.substr(s).match(/^[0-9a-f]+/i);return(l=g&&g[0])!==null&&l!==void 0?l:""}function Nf(u,s){const l=u.substr(s,2);if(s+=l.length,l.toLowerCase()!=="0x")return"";const g=Uf(u,s);return g===""?"":l+g}const Ff=Ia([Lf,If,Nf]),Of=Ia([Ff,Pf]);function Bf(u,s){const l=Of(u,s);return s+=l.length,l===""?null:{evaluable:new xf(l),cursor:s}}function kf(u,s){const l=u.substr(s,1);if(s+=l.length,l!=="(")return null;const g=eu(u,s);if(!g)return null;s=g.cursor,s+=fs(u,s).length;const S=u.substr(s,1);return s+=S.length,S!==")"?null:{evaluable:g.evaluable,cursor:s}}function Vf(u,s){var l;return(l=Bf(u,s))!==null&&l!==void 0?l:kf(u,s)}function tu(u,s){const l=Vf(u,s);if(l)return l;const g=u.substr(s,1);if(s+=g.length,g!=="+"&&g!=="-"&&g!=="~")return null;const S=tu(u,s);return S?(s=S.cursor,{cursor:s,evaluable:new Ef(g,S.evaluable)}):null}function zf(u,s,l){l+=fs(s,l).length;const g=u.filter(S=>s.startsWith(S,l))[0];return g?(l+=g.length,l+=fs(s,l).length,{cursor:l,operator:g}):null}function Hf(u,s){return(l,g)=>{const S=u(l,g);if(!S)return null;g=S.cursor;let k=S.evaluable;for(;;){const q=zf(s,l,g);if(!q)break;g=q.cursor;const ut=u(l,g);if(!ut)return null;g=ut.cursor,k=new yf(q.operator,k,ut.evaluable)}return k?{cursor:g,evaluable:k}:null}}const Gf=[["**"],["*","/","%"],["+","-"],["<<",">>>",">>"],["&"],["^"],["|"]].reduce((u,s)=>Hf(u,s),tu);function eu(u,s){return s+=fs(u,s).length,Gf(u,s)}function Wf(u){const s=eu(u,0);return!s||s.cursor+fs(u,s.cursor).length!==u.length?null:s.evaluable}function Kn(u){var s;const l=Wf(u);return(s=l==null?void 0:l.evaluate())!==null&&s!==void 0?s:null}function nu(u){if(typeof u=="number")return u;if(typeof u=="string"){const s=Kn(u);if(!f(s))return s}return 0}function Xf(u){return String(u)}function Ye(u){return s=>s.toFixed(Math.max(Math.min(u,20),0))}const qf=Ye(0);function oo(u){return qf(u)+"%"}function iu(u){return String(u)}function Na(u){return u}function ru(u,s){for(;u.length<s;)u.push(void 0)}function jf(u){const s=[];return ru(s,u),H(s)}function Yf(u){const s=u.indexOf(void 0);return s<0?u:u.slice(0,s)}function $f(u,s){const l=[...Yf(u),s];return l.length>u.length?l.splice(0,l.length-u.length):ru(l,u.length),l}function gs({primary:u,secondary:s,forward:l,backward:g}){let S=!1;function k(q){S||(S=!0,q(),S=!1)}u.emitter.on("change",q=>{k(()=>{s.setRawValue(l(u,s),q.options)})}),s.emitter.on("change",q=>{k(()=>{u.setRawValue(g(u,s),q.options)}),k(()=>{s.setRawValue(l(u,s),q.options)})}),k(()=>{s.setRawValue(l(u,s),{forceEmit:!1,last:!0})})}function fn(u,s){const l=u*(s.altKey?.1:1)*(s.shiftKey?10:1);return s.upKey?+l:s.downKey?-l:0}function vs(u){return{altKey:u.altKey,downKey:u.key==="ArrowDown",shiftKey:u.shiftKey,upKey:u.key==="ArrowUp"}}function Zn(u){return{altKey:u.altKey,downKey:u.key==="ArrowLeft",shiftKey:u.shiftKey,upKey:u.key==="ArrowRight"}}function Kf(u){return u==="ArrowUp"||u==="ArrowDown"}function su(u){return Kf(u)||u==="ArrowLeft"||u==="ArrowRight"}function Fa(u,s){var l,g;const S=s.ownerDocument.defaultView,k=s.getBoundingClientRect();return{x:u.pageX-(((l=S&&S.scrollX)!==null&&l!==void 0?l:0)+k.left),y:u.pageY-(((g=S&&S.scrollY)!==null&&g!==void 0?g:0)+k.top)}}class Oi{constructor(s){this.lastTouch_=null,this.onDocumentMouseMove_=this.onDocumentMouseMove_.bind(this),this.onDocumentMouseUp_=this.onDocumentMouseUp_.bind(this),this.onMouseDown_=this.onMouseDown_.bind(this),this.onTouchEnd_=this.onTouchEnd_.bind(this),this.onTouchMove_=this.onTouchMove_.bind(this),this.onTouchStart_=this.onTouchStart_.bind(this),this.elem_=s,this.emitter=new v,s.addEventListener("touchstart",this.onTouchStart_,{passive:!1}),s.addEventListener("touchmove",this.onTouchMove_,{passive:!0}),s.addEventListener("touchend",this.onTouchEnd_),s.addEventListener("mousedown",this.onMouseDown_)}computePosition_(s){const l=this.elem_.getBoundingClientRect();return{bounds:{width:l.width,height:l.height},point:s?{x:s.x,y:s.y}:null}}onMouseDown_(s){var l;s.preventDefault(),(l=s.currentTarget)===null||l===void 0||l.focus();const g=this.elem_.ownerDocument;g.addEventListener("mousemove",this.onDocumentMouseMove_),g.addEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("down",{altKey:s.altKey,data:this.computePosition_(Fa(s,this.elem_)),sender:this,shiftKey:s.shiftKey})}onDocumentMouseMove_(s){this.emitter.emit("move",{altKey:s.altKey,data:this.computePosition_(Fa(s,this.elem_)),sender:this,shiftKey:s.shiftKey})}onDocumentMouseUp_(s){const l=this.elem_.ownerDocument;l.removeEventListener("mousemove",this.onDocumentMouseMove_),l.removeEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("up",{altKey:s.altKey,data:this.computePosition_(Fa(s,this.elem_)),sender:this,shiftKey:s.shiftKey})}onTouchStart_(s){s.preventDefault();const l=s.targetTouches.item(0),g=this.elem_.getBoundingClientRect();this.emitter.emit("down",{altKey:s.altKey,data:this.computePosition_(l?{x:l.clientX-g.left,y:l.clientY-g.top}:void 0),sender:this,shiftKey:s.shiftKey}),this.lastTouch_=l}onTouchMove_(s){const l=s.targetTouches.item(0),g=this.elem_.getBoundingClientRect();this.emitter.emit("move",{altKey:s.altKey,data:this.computePosition_(l?{x:l.clientX-g.left,y:l.clientY-g.top}:void 0),sender:this,shiftKey:s.shiftKey}),this.lastTouch_=l}onTouchEnd_(s){var l;const g=(l=s.targetTouches.item(0))!==null&&l!==void 0?l:this.lastTouch_,S=this.elem_.getBoundingClientRect();this.emitter.emit("up",{altKey:s.altKey,data:this.computePosition_(g?{x:g.clientX-S.left,y:g.clientY-S.top}:void 0),sender:this,shiftKey:s.shiftKey})}}function Se(u,s,l,g,S){const k=(u-s)/(l-s);return g+k*(S-g)}function ou(u){return String(u.toFixed(10)).split(".")[1].replace(/0+$/,"").length}function ke(u,s,l){return Math.min(Math.max(u,s),l)}function au(u,s){return(u%s+s)%s}const Tn=y("txt");class Zf{constructor(s,l){this.onChange_=this.onChange_.bind(this),this.props_=l.props,this.props_.emitter.on("change",this.onChange_),this.element=s.createElement("div"),this.element.classList.add(Tn(),Tn(void 0,"num")),l.arrayPosition&&this.element.classList.add(Tn(void 0,l.arrayPosition)),l.viewProps.bindClassModifiers(this.element);const g=s.createElement("input");g.classList.add(Tn("i")),g.type="text",l.viewProps.bindDisabled(g),this.element.appendChild(g),this.inputElement=g,this.onDraggingChange_=this.onDraggingChange_.bind(this),this.dragging_=l.dragging,this.dragging_.emitter.on("change",this.onDraggingChange_),this.element.classList.add(Tn()),this.inputElement.classList.add(Tn("i"));const S=s.createElement("div");S.classList.add(Tn("k")),this.element.appendChild(S),this.knobElement=S;const k=s.createElementNS(zt,"svg");k.classList.add(Tn("g")),this.knobElement.appendChild(k);const q=s.createElementNS(zt,"path");q.classList.add(Tn("gb")),k.appendChild(q),this.guideBodyElem_=q;const ut=s.createElementNS(zt,"path");ut.classList.add(Tn("gh")),k.appendChild(ut),this.guideHeadElem_=ut;const Ut=s.createElement("div");Ut.classList.add(y("tt")()),this.knobElement.appendChild(Ut),this.tooltipElem_=Ut,l.value.emitter.on("change",this.onChange_),this.value=l.value,this.refresh()}onDraggingChange_(s){if(s.rawValue===null){this.element.classList.remove(Tn(void 0,"drg"));return}this.element.classList.add(Tn(void 0,"drg"));const l=s.rawValue/this.props_.get("draggingScale"),g=l+(l>0?-1:l<0?1:0),S=ke(-g,-4,4);this.guideHeadElem_.setAttributeNS(null,"d",[`M ${g+S},0 L${g},4 L${g+S},8`,`M ${l},-1 L${l},9`].join(" ")),this.guideBodyElem_.setAttributeNS(null,"d",`M 0,4 L${l},4`);const k=this.props_.get("formatter");this.tooltipElem_.textContent=k(this.value.rawValue),this.tooltipElem_.style.left=`${l}px`}refresh(){const s=this.props_.get("formatter");this.inputElement.value=s(this.value.rawValue)}onChange_(){this.refresh()}}class _s{constructor(s,l){var g;this.originRawValue_=0,this.onInputChange_=this.onInputChange_.bind(this),this.onInputKeyDown_=this.onInputKeyDown_.bind(this),this.onInputKeyUp_=this.onInputKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.baseStep_=l.baseStep,this.parser_=l.parser,this.props=l.props,this.sliderProps_=(g=l.sliderProps)!==null&&g!==void 0?g:null,this.value=l.value,this.viewProps=l.viewProps,this.dragging_=H(null),this.view=new Zf(s,{arrayPosition:l.arrayPosition,dragging:this.dragging_,props:this.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_),this.view.inputElement.addEventListener("keydown",this.onInputKeyDown_),this.view.inputElement.addEventListener("keyup",this.onInputKeyUp_);const S=new Oi(this.view.knobElement);S.emitter.on("down",this.onPointerDown_),S.emitter.on("move",this.onPointerMove_),S.emitter.on("up",this.onPointerUp_)}constrainValue_(s){var l,g;const S=(l=this.sliderProps_)===null||l===void 0?void 0:l.get("minValue"),k=(g=this.sliderProps_)===null||g===void 0?void 0:g.get("maxValue");let q=s;return S!==void 0&&(q=Math.max(q,S)),k!==void 0&&(q=Math.min(q,k)),q}onInputChange_(s){const g=s.currentTarget.value,S=this.parser_(g);f(S)||(this.value.rawValue=this.constrainValue_(S)),this.view.refresh()}onInputKeyDown_(s){const l=fn(this.baseStep_,vs(s));l!==0&&this.value.setRawValue(this.constrainValue_(this.value.rawValue+l),{forceEmit:!1,last:!1})}onInputKeyUp_(s){fn(this.baseStep_,vs(s))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}onPointerDown_(){this.originRawValue_=this.value.rawValue,this.dragging_.rawValue=0}computeDraggingValue_(s){if(!s.point)return null;const l=s.point.x-s.bounds.width/2;return this.constrainValue_(this.originRawValue_+l*this.props.get("draggingScale"))}onPointerMove_(s){const l=this.computeDraggingValue_(s.data);l!==null&&(this.value.setRawValue(l,{forceEmit:!1,last:!1}),this.dragging_.rawValue=this.value.rawValue-this.originRawValue_)}onPointerUp_(s){const l=this.computeDraggingValue_(s.data);l!==null&&(this.value.setRawValue(l,{forceEmit:!0,last:!0}),this.dragging_.rawValue=null)}}const Oa=y("sld");class Qf{constructor(s,l){this.onChange_=this.onChange_.bind(this),this.props_=l.props,this.props_.emitter.on("change",this.onChange_),this.element=s.createElement("div"),this.element.classList.add(Oa()),l.viewProps.bindClassModifiers(this.element);const g=s.createElement("div");g.classList.add(Oa("t")),l.viewProps.bindTabIndex(g),this.element.appendChild(g),this.trackElement=g;const S=s.createElement("div");S.classList.add(Oa("k")),this.trackElement.appendChild(S),this.knobElement=S,l.value.emitter.on("change",this.onChange_),this.value=l.value,this.update_()}update_(){const s=ke(Se(this.value.rawValue,this.props_.get("minValue"),this.props_.get("maxValue"),0,100),0,100);this.knobElement.style.width=`${s}%`}onChange_(){this.update_()}}class Jf{constructor(s,l){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDownOrMove_=this.onPointerDownOrMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.baseStep_=l.baseStep,this.value=l.value,this.viewProps=l.viewProps,this.props=l.props,this.view=new Qf(s,{props:this.props,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Oi(this.view.trackElement),this.ptHandler_.emitter.on("down",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("move",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.trackElement.addEventListener("keydown",this.onKeyDown_),this.view.trackElement.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(s,l){!s.point||this.value.setRawValue(Se(ke(s.point.x,0,s.bounds.width),0,s.bounds.width,this.props.get("minValue"),this.props.get("maxValue")),l)}onPointerDownOrMove_(s){this.handlePointerEvent_(s.data,{forceEmit:!1,last:!1})}onPointerUp_(s){this.handlePointerEvent_(s.data,{forceEmit:!0,last:!0})}onKeyDown_(s){const l=fn(this.baseStep_,Zn(s));l!==0&&this.value.setRawValue(this.value.rawValue+l,{forceEmit:!1,last:!1})}onKeyUp_(s){fn(this.baseStep_,Zn(s))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const Ba=y("sldtxt");class tm{constructor(s,l){this.element=s.createElement("div"),this.element.classList.add(Ba());const g=s.createElement("div");g.classList.add(Ba("s")),this.sliderView_=l.sliderView,g.appendChild(this.sliderView_.element),this.element.appendChild(g);const S=s.createElement("div");S.classList.add(Ba("t")),this.textView_=l.textView,S.appendChild(this.textView_.element),this.element.appendChild(S)}}class ka{constructor(s,l){this.value=l.value,this.viewProps=l.viewProps,this.sliderC_=new Jf(s,{baseStep:l.baseStep,props:l.sliderProps,value:l.value,viewProps:this.viewProps}),this.textC_=new _s(s,{baseStep:l.baseStep,parser:l.parser,props:l.textProps,sliderProps:l.sliderProps,value:l.value,viewProps:l.viewProps}),this.view=new tm(s,{sliderView:this.sliderC_.view,textView:this.textC_.view})}get sliderController(){return this.sliderC_}get textController(){return this.textC_}}function xs(u,s){u.write(s)}function ao(u){const s=mt;if(Array.isArray(u))return s.required.array(s.required.object({text:s.required.string,value:s.required.raw}))(u).value;if(typeof u=="object")return s.required.raw(u).value}function lu(u){if(u==="inline"||u==="popup")return u}function mi(u){const s=mt;return s.required.object({max:s.optional.number,min:s.optional.number,step:s.optional.number})(u).value}function cu(u){if(Array.isArray(u))return u;const s=[];return Object.keys(u).forEach(l=>{s.push({text:l,value:u[l]})}),s}function Va(u){return f(u)?null:new $n(cu(u))}function za(u){const s=u?He(u,$n):null;return s?s.options:null}function em(u){const s=u?He(u,fi):null;return s?s.step:null}function lo(u,s){const l=u&&He(u,fi);return l?ou(l.step):Math.max(ou(s),2)}function lr(u){const s=em(u);return s!=null?s:1}function cr(u,s){var l;const g=u&&He(u,fi),S=Math.abs((l=g==null?void 0:g.step)!==null&&l!==void 0?l:s);return S===0?.1:Math.pow(10,Math.floor(Math.log10(S))-1)}const co=y("ckb");class nm{constructor(s,l){this.onValueChange_=this.onValueChange_.bind(this),this.element=s.createElement("div"),this.element.classList.add(co()),l.viewProps.bindClassModifiers(this.element);const g=s.createElement("label");g.classList.add(co("l")),this.element.appendChild(g);const S=s.createElement("input");S.classList.add(co("i")),S.type="checkbox",g.appendChild(S),this.inputElement=S,l.viewProps.bindDisabled(this.inputElement);const k=s.createElement("div");k.classList.add(co("w")),g.appendChild(k);const q=Wt(s,"check");k.appendChild(q),l.value.emitter.on("change",this.onValueChange_),this.value=l.value,this.update_()}update_(){this.inputElement.checked=this.value.rawValue}onValueChange_(){this.update_()}}class im{constructor(s,l){this.onInputChange_=this.onInputChange_.bind(this),this.value=l.value,this.viewProps=l.viewProps,this.view=new nm(s,{value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_)}onInputChange_(s){const l=s.currentTarget;this.value.rawValue=l.checked}}function rm(u){const s=[],l=Va(u.options);return l&&s.push(l),new Re(s)}const sm={id:"input-bool",type:"input",accept:(u,s)=>{if(typeof u!="boolean")return null;const g=$(s,{options:mt.optional.custom(ao)});return g?{initialValue:u,params:g}:null},binding:{reader:u=>Zc,constraint:u=>rm(u.params),writer:u=>xs},controller:u=>{var s;const l=u.document,g=u.value,S=u.constraint;return S&&He(S,$n)?new ps(l,{props:W.fromObject({options:(s=za(S))!==null&&s!==void 0?s:[]}),value:g,viewProps:u.viewProps}):new im(l,{value:g,viewProps:u.viewProps})}},Bi=y("col");class om{constructor(s,l){this.element=s.createElement("div"),this.element.classList.add(Bi()),l.foldable.bindExpandedClass(this.element,Bi(void 0,"expanded")),A(l.foldable,"completed",z(this.element,Bi(void 0,"cpl")));const g=s.createElement("div");g.classList.add(Bi("h")),this.element.appendChild(g);const S=s.createElement("div");S.classList.add(Bi("s")),g.appendChild(S),this.swatchElement=S;const k=s.createElement("div");if(k.classList.add(Bi("t")),g.appendChild(k),this.textElement=k,l.pickerLayout==="inline"){const q=s.createElement("div");q.classList.add(Bi("p")),this.element.appendChild(q),this.pickerElement=q}else this.pickerElement=null}}function am(u,s,l){const g=ke(u/255,0,1),S=ke(s/255,0,1),k=ke(l/255,0,1),q=Math.max(g,S,k),ut=Math.min(g,S,k),Ut=q-ut;let qt=0,le=0;const ce=(ut+q)/2;return Ut!==0&&(le=Ut/(1-Math.abs(q+ut-1)),g===q?qt=(S-k)/Ut:S===q?qt=2+(k-g)/Ut:qt=4+(g-S)/Ut,qt=qt/6+(qt<0?1:0)),[qt*360,le*100,ce*100]}function lm(u,s,l){const g=(u%360+360)%360,S=ke(s/100,0,1),k=ke(l/100,0,1),q=(1-Math.abs(2*k-1))*S,ut=q*(1-Math.abs(g/60%2-1)),Ut=k-q/2;let qt,le,ce;return g>=0&&g<60?[qt,le,ce]=[q,ut,0]:g>=60&&g<120?[qt,le,ce]=[ut,q,0]:g>=120&&g<180?[qt,le,ce]=[0,q,ut]:g>=180&&g<240?[qt,le,ce]=[0,ut,q]:g>=240&&g<300?[qt,le,ce]=[ut,0,q]:[qt,le,ce]=[q,0,ut],[(qt+Ut)*255,(le+Ut)*255,(ce+Ut)*255]}function cm(u,s,l){const g=ke(u/255,0,1),S=ke(s/255,0,1),k=ke(l/255,0,1),q=Math.max(g,S,k),ut=Math.min(g,S,k),Ut=q-ut;let qt;Ut===0?qt=0:q===g?qt=60*(((S-k)/Ut%6+6)%6):q===S?qt=60*((k-g)/Ut+2):qt=60*((g-S)/Ut+4);const le=q===0?0:Ut/q,ce=q;return[qt,le*100,ce*100]}function uu(u,s,l){const g=au(u,360),S=ke(s/100,0,1),k=ke(l/100,0,1),q=k*S,ut=q*(1-Math.abs(g/60%2-1)),Ut=k-q;let qt,le,ce;return g>=0&&g<60?[qt,le,ce]=[q,ut,0]:g>=60&&g<120?[qt,le,ce]=[ut,q,0]:g>=120&&g<180?[qt,le,ce]=[0,q,ut]:g>=180&&g<240?[qt,le,ce]=[0,ut,q]:g>=240&&g<300?[qt,le,ce]=[ut,0,q]:[qt,le,ce]=[q,0,ut],[(qt+Ut)*255,(le+Ut)*255,(ce+Ut)*255]}function um(u,s,l){const g=l+s*(100-Math.abs(2*l-100))/200;return[u,g!==0?s*(100-Math.abs(2*l-100))/g:0,l+s*(100-Math.abs(2*l-100))/(2*100)]}function hm(u,s,l){const g=100-Math.abs(l*(200-s)/100-100);return[u,g!==0?s*l/g:0,l*(200-s)/(2*100)]}function ki(u){return[u[0],u[1],u[2]]}function hu(u,s){return[u[0],u[1],u[2],s]}const dm={hsl:{hsl:(u,s,l)=>[u,s,l],hsv:um,rgb:lm},hsv:{hsl:hm,hsv:(u,s,l)=>[u,s,l],rgb:uu},rgb:{hsl:am,hsv:cm,rgb:(u,s,l)=>[u,s,l]}};function uo(u,s){return[s==="float"?1:u==="rgb"?255:360,s==="float"?1:u==="rgb"?255:100,s==="float"?1:u==="rgb"?255:100]}function pm(u,s,l){var g;const S=uo(s,l);return[s==="rgb"?ke(u[0],0,S[0]):au(u[0],S[0]),ke(u[1],0,S[1]),ke(u[2],0,S[2]),ke((g=u[3])!==null&&g!==void 0?g:1,0,1)]}function du(u,s,l,g){const S=uo(s,l),k=uo(s,g);return u.map((q,ut)=>q/S[ut]*k[ut])}function fm(u,s,l){const g=du(u,s.mode,s.type,"int"),S=dm[s.mode][l.mode](...g);return du(S,l.mode,"int",l.type)}function ho(u,s){return typeof u!="object"||f(u)?!1:s in u&&typeof u[s]=="number"}class ie{constructor(s,l,g="int"){this.mode=l,this.type=g,this.comps_=pm(s,l,g)}static black(s="int"){return new ie([0,0,0],"rgb",s)}static fromObject(s,l="int"){const g="a"in s?[s.r,s.g,s.b,s.a]:[s.r,s.g,s.b];return new ie(g,"rgb",l)}static toRgbaObject(s,l="int"){return s.toRgbaObject(l)}static isRgbColorObject(s){return ho(s,"r")&&ho(s,"g")&&ho(s,"b")}static isRgbaColorObject(s){return this.isRgbColorObject(s)&&ho(s,"a")}static isColorObject(s){return this.isRgbColorObject(s)}static equals(s,l){if(s.mode!==l.mode)return!1;const g=s.comps_,S=l.comps_;for(let k=0;k<g.length;k++)if(g[k]!==S[k])return!1;return!0}getComponents(s,l="int"){return hu(fm(ki(this.comps_),{mode:this.mode,type:this.type},{mode:s!=null?s:this.mode,type:l}),this.comps_[3])}toRgbaObject(s="int"){const l=this.getComponents("rgb",s);return{r:l[0],g:l[1],b:l[2],a:l[3]}}}const gi=y("colp");class mm{constructor(s,l){this.alphaViews_=null,this.element=s.createElement("div"),this.element.classList.add(gi());const g=s.createElement("div");g.classList.add(gi("hsv"));const S=s.createElement("div");S.classList.add(gi("sv")),this.svPaletteView_=l.svPaletteView,S.appendChild(this.svPaletteView_.element),g.appendChild(S);const k=s.createElement("div");k.classList.add(gi("h")),this.hPaletteView_=l.hPaletteView,k.appendChild(this.hPaletteView_.element),g.appendChild(k),this.element.appendChild(g);const q=s.createElement("div");if(q.classList.add(gi("rgb")),this.textView_=l.textView,q.appendChild(this.textView_.element),this.element.appendChild(q),l.alphaViews){this.alphaViews_={palette:l.alphaViews.palette,text:l.alphaViews.text};const ut=s.createElement("div");ut.classList.add(gi("a"));const Ut=s.createElement("div");Ut.classList.add(gi("ap")),Ut.appendChild(this.alphaViews_.palette.element),ut.appendChild(Ut);const qt=s.createElement("div");qt.classList.add(gi("at")),qt.appendChild(this.alphaViews_.text.element),ut.appendChild(qt),this.element.appendChild(ut)}}get allFocusableElements(){const s=[this.svPaletteView_.element,this.hPaletteView_.element,this.textView_.modeSelectElement,...this.textView_.textViews.map(l=>l.inputElement)];return this.alphaViews_&&s.push(this.alphaViews_.palette.element,this.alphaViews_.text.inputElement),s}}function gm(u){return u==="int"?"int":u==="float"?"float":void 0}function Ha(u){const s=mt;return $(u,{alpha:s.optional.boolean,color:s.optional.object({alpha:s.optional.boolean,type:s.optional.custom(gm)}),expanded:s.optional.boolean,picker:s.optional.custom(lu)})}function Vi(u){return u?.1:1}function zi(u){var s;return(s=u.color)===null||s===void 0?void 0:s.type}function vm(u,s){return u.alpha===s.alpha&&u.mode===s.mode&&u.notation===s.notation&&u.type===s.type}function An(u,s){const l=u.match(/^(.+)%$/);return Math.min(l?parseFloat(l[1])*.01*s:parseFloat(u),s)}const _m={deg:u=>u,grad:u=>u*360/400,rad:u=>u*360/(2*Math.PI),turn:u=>u*360};function pu(u){const s=u.match(/^([0-9.]+?)(deg|grad|rad|turn)$/);if(!s)return parseFloat(u);const l=parseFloat(s[1]),g=s[2];return _m[g](l)}function fu(u){const s=u.match(/^rgb\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!s)return null;const l=[An(s[1],255),An(s[2],255),An(s[3],255)];return isNaN(l[0])||isNaN(l[1])||isNaN(l[2])?null:l}function mu(u){return s=>{const l=fu(s);return l?new ie(l,"rgb",u):null}}function gu(u){const s=u.match(/^rgba\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!s)return null;const l=[An(s[1],255),An(s[2],255),An(s[3],255),An(s[4],1)];return isNaN(l[0])||isNaN(l[1])||isNaN(l[2])||isNaN(l[3])?null:l}function vu(u){return s=>{const l=gu(s);return l?new ie(l,"rgb",u):null}}function _u(u){const s=u.match(/^hsl\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!s)return null;const l=[pu(s[1]),An(s[2],100),An(s[3],100)];return isNaN(l[0])||isNaN(l[1])||isNaN(l[2])?null:l}function xu(u){return s=>{const l=_u(s);return l?new ie(l,"hsl",u):null}}function bu(u){const s=u.match(/^hsla\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!s)return null;const l=[pu(s[1]),An(s[2],100),An(s[3],100),An(s[4],1)];return isNaN(l[0])||isNaN(l[1])||isNaN(l[2])||isNaN(l[3])?null:l}function yu(u){return s=>{const l=bu(s);return l?new ie(l,"hsl",u):null}}function wu(u){const s=u.match(/^#([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(s)return[parseInt(s[1]+s[1],16),parseInt(s[2]+s[2],16),parseInt(s[3]+s[3],16)];const l=u.match(/^(?:#|0x)([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return l?[parseInt(l[1],16),parseInt(l[2],16),parseInt(l[3],16)]:null}function xm(u){const s=wu(u);return s?new ie(s,"rgb","int"):null}function Eu(u){const s=u.match(/^#?([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(s)return[parseInt(s[1]+s[1],16),parseInt(s[2]+s[2],16),parseInt(s[3]+s[3],16),Se(parseInt(s[4]+s[4],16),0,255,0,1)];const l=u.match(/^(?:#|0x)?([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return l?[parseInt(l[1],16),parseInt(l[2],16),parseInt(l[3],16),Se(parseInt(l[4],16),0,255,0,1)]:null}function bm(u){const s=Eu(u);return s?new ie(s,"rgb","int"):null}function Mu(u){const s=u.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!s)return null;const l=[parseFloat(s[1]),parseFloat(s[2]),parseFloat(s[3])];return isNaN(l[0])||isNaN(l[1])||isNaN(l[2])?null:l}function Su(u){return s=>{const l=Mu(s);return l?new ie(l,"rgb",u):null}}function Tu(u){const s=u.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*a\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!s)return null;const l=[parseFloat(s[1]),parseFloat(s[2]),parseFloat(s[3]),parseFloat(s[4])];return isNaN(l[0])||isNaN(l[1])||isNaN(l[2])||isNaN(l[3])?null:l}function Au(u){return s=>{const l=Tu(s);return l?new ie(l,"rgb",u):null}}const ym=[{parser:wu,result:{alpha:!1,mode:"rgb",notation:"hex"}},{parser:Eu,result:{alpha:!0,mode:"rgb",notation:"hex"}},{parser:fu,result:{alpha:!1,mode:"rgb",notation:"func"}},{parser:gu,result:{alpha:!0,mode:"rgb",notation:"func"}},{parser:_u,result:{alpha:!1,mode:"hsl",notation:"func"}},{parser:bu,result:{alpha:!0,mode:"hsl",notation:"func"}},{parser:Mu,result:{alpha:!1,mode:"rgb",notation:"object"}},{parser:Tu,result:{alpha:!0,mode:"rgb",notation:"object"}}];function wm(u){return ym.reduce((s,{parser:l,result:g})=>s||(l(u)?g:null),null)}function Ga(u,s="int"){const l=wm(u);return l?l.notation==="hex"&&s!=="float"?Object.assign(Object.assign({},l),{type:"int"}):l.notation==="func"?Object.assign(Object.assign({},l),{type:s}):null:null}const Cu={int:[xm,bm,mu("int"),vu("int"),xu("int"),yu("int"),Su("int"),Au("int")],float:[mu("float"),vu("float"),xu("float"),yu("float"),Su("float"),Au("float")]};function Em(u){const s=Cu[u];return l=>{if(typeof l!="string")return ie.black(u);const g=s.reduce((S,k)=>S||k(l),null);return g!=null?g:ie.black(u)}}function Wa(u){const s=Cu[u];return l=>s.reduce((g,S)=>g||S(l),null)}function Pu(u){const s=ke(Math.floor(u),0,255).toString(16);return s.length===1?`0${s}`:s}function Ru(u,s="#"){const l=ki(u.getComponents("rgb")).map(Pu).join("");return`${s}${l}`}function Xa(u,s="#"){const l=u.getComponents("rgb"),g=[l[0],l[1],l[2],l[3]*255].map(Pu).join("");return`${s}${g}`}function Lu(u,s){const l=Ye(s==="float"?2:0);return`rgb(${ki(u.getComponents("rgb",s)).map(S=>l(S)).join(", ")})`}function Mm(u){return s=>Lu(s,u)}function po(u,s){const l=Ye(2),g=Ye(s==="float"?2:0);return`rgba(${u.getComponents("rgb",s).map((k,q)=>(q===3?l:g)(k)).join(", ")})`}function Sm(u){return s=>po(s,u)}function Tm(u){const s=[Ye(0),oo,oo];return`hsl(${ki(u.getComponents("hsl")).map((g,S)=>s[S](g)).join(", ")})`}function Am(u){const s=[Ye(0),oo,oo,Ye(2)];return`hsla(${u.getComponents("hsl").map((g,S)=>s[S](g)).join(", ")})`}function Du(u,s){const l=Ye(s==="float"?2:0),g=["r","g","b"];return`{${ki(u.getComponents("rgb",s)).map((k,q)=>`${g[q]}: ${l(k)}`).join(", ")}}`}function Cm(u){return s=>Du(s,u)}function Iu(u,s){const l=Ye(2),g=Ye(s==="float"?2:0),S=["r","g","b","a"];return`{${u.getComponents("rgb",s).map((q,ut)=>{const Ut=ut===3?l:g;return`${S[ut]}: ${Ut(q)}`}).join(", ")}}`}function Pm(u){return s=>Iu(s,u)}const Rm=[{format:{alpha:!1,mode:"rgb",notation:"hex",type:"int"},stringifier:Ru},{format:{alpha:!0,mode:"rgb",notation:"hex",type:"int"},stringifier:Xa},{format:{alpha:!1,mode:"hsl",notation:"func",type:"int"},stringifier:Tm},{format:{alpha:!0,mode:"hsl",notation:"func",type:"int"},stringifier:Am},...["int","float"].reduce((u,s)=>[...u,{format:{alpha:!1,mode:"rgb",notation:"func",type:s},stringifier:Mm(s)},{format:{alpha:!0,mode:"rgb",notation:"func",type:s},stringifier:Sm(s)},{format:{alpha:!1,mode:"rgb",notation:"object",type:s},stringifier:Cm(s)},{format:{alpha:!0,mode:"rgb",notation:"object",type:s},stringifier:Pm(s)}],[])];function qa(u){return Rm.reduce((s,l)=>s||(vm(l.format,u)?l.stringifier:null),null)}const bs=y("apl");class Lm{constructor(s,l){this.onValueChange_=this.onValueChange_.bind(this),this.value=l.value,this.value.emitter.on("change",this.onValueChange_),this.element=s.createElement("div"),this.element.classList.add(bs()),l.viewProps.bindTabIndex(this.element);const g=s.createElement("div");g.classList.add(bs("b")),this.element.appendChild(g);const S=s.createElement("div");S.classList.add(bs("c")),g.appendChild(S),this.colorElem_=S;const k=s.createElement("div");k.classList.add(bs("m")),this.element.appendChild(k),this.markerElem_=k;const q=s.createElement("div");q.classList.add(bs("p")),this.markerElem_.appendChild(q),this.previewElem_=q,this.update_()}update_(){const s=this.value.rawValue,l=s.getComponents("rgb"),g=new ie([l[0],l[1],l[2],0],"rgb"),S=new ie([l[0],l[1],l[2],255],"rgb"),k=["to right",po(g),po(S)];this.colorElem_.style.background=`linear-gradient(${k.join(",")})`,this.previewElem_.style.backgroundColor=po(s);const q=Se(l[3],0,1,0,100);this.markerElem_.style.left=`${q}%`}onValueChange_(){this.update_()}}class Dm{constructor(s,l){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=l.value,this.viewProps=l.viewProps,this.view=new Lm(s,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Oi(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(s,l){if(!s.point)return;const g=s.point.x/s.bounds.width,S=this.value.rawValue,[k,q,ut]=S.getComponents("hsv");this.value.setRawValue(new ie([k,q,ut,g],"hsv"),l)}onPointerDown_(s){this.handlePointerEvent_(s.data,{forceEmit:!1,last:!1})}onPointerMove_(s){this.handlePointerEvent_(s.data,{forceEmit:!1,last:!1})}onPointerUp_(s){this.handlePointerEvent_(s.data,{forceEmit:!0,last:!0})}onKeyDown_(s){const l=fn(Vi(!0),Zn(s));if(l===0)return;const g=this.value.rawValue,[S,k,q,ut]=g.getComponents("hsv");this.value.setRawValue(new ie([S,k,q,ut+l],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(s){fn(Vi(!0),Zn(s))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const ur=y("coltxt");function Im(u){const s=u.createElement("select"),l=[{text:"RGB",value:"rgb"},{text:"HSL",value:"hsl"},{text:"HSV",value:"hsv"}];return s.appendChild(l.reduce((g,S)=>{const k=u.createElement("option");return k.textContent=S.text,k.value=S.value,g.appendChild(k),g},u.createDocumentFragment())),s}class Um{constructor(s,l){this.element=s.createElement("div"),this.element.classList.add(ur());const g=s.createElement("div");g.classList.add(ur("m")),this.modeElem_=Im(s),this.modeElem_.classList.add(ur("ms")),g.appendChild(this.modeSelectElement);const S=s.createElement("div");S.classList.add(ur("mm")),S.appendChild(Wt(s,"dropdown")),g.appendChild(S),this.element.appendChild(g);const k=s.createElement("div");k.classList.add(ur("w")),this.element.appendChild(k),this.textsElem_=k,this.textViews_=l.textViews,this.applyTextViews_(),P(l.colorMode,q=>{this.modeElem_.value=q})}get modeSelectElement(){return this.modeElem_}get textViews(){return this.textViews_}set textViews(s){this.textViews_=s,this.applyTextViews_()}applyTextViews_(){K(this.textsElem_);const s=this.element.ownerDocument;this.textViews_.forEach(l=>{const g=s.createElement("div");g.classList.add(ur("c")),g.appendChild(l.element),this.textsElem_.appendChild(g)})}}function Nm(u){return Ye(u==="float"?2:0)}function Fm(u,s,l){const g=uo(u,s)[l];return new Be({min:0,max:g})}function ja(u,s,l){return new _s(u,{arrayPosition:l===0?"fst":l===3-1?"lst":"mid",baseStep:Vi(!1),parser:s.parser,props:W.fromObject({draggingScale:s.colorType==="float"?.01:1,formatter:Nm(s.colorType)}),value:H(0,{constraint:Fm(s.colorMode,s.colorType,l)}),viewProps:s.viewProps})}class Om{constructor(s,l){this.onModeSelectChange_=this.onModeSelectChange_.bind(this),this.colorType_=l.colorType,this.parser_=l.parser,this.value=l.value,this.viewProps=l.viewProps,this.colorMode=H(this.value.rawValue.mode),this.ccs_=this.createComponentControllers_(s),this.view=new Um(s,{colorMode:this.colorMode,textViews:[this.ccs_[0].view,this.ccs_[1].view,this.ccs_[2].view]}),this.view.modeSelectElement.addEventListener("change",this.onModeSelectChange_)}createComponentControllers_(s){const l={colorMode:this.colorMode.rawValue,colorType:this.colorType_,parser:this.parser_,viewProps:this.viewProps},g=[ja(s,l,0),ja(s,l,1),ja(s,l,2)];return g.forEach((S,k)=>{gs({primary:this.value,secondary:S.value,forward:q=>q.rawValue.getComponents(this.colorMode.rawValue,this.colorType_)[k],backward:(q,ut)=>{const Ut=this.colorMode.rawValue,qt=q.rawValue.getComponents(Ut,this.colorType_);return qt[k]=ut.rawValue,new ie(hu(ki(qt),qt[3]),Ut,this.colorType_)}})}),g}onModeSelectChange_(s){const l=s.currentTarget;this.colorMode.rawValue=l.value,this.ccs_=this.createComponentControllers_(this.view.element.ownerDocument),this.view.textViews=[this.ccs_[0].view,this.ccs_[1].view,this.ccs_[2].view]}}const Ya=y("hpl");class Bm{constructor(s,l){this.onValueChange_=this.onValueChange_.bind(this),this.value=l.value,this.value.emitter.on("change",this.onValueChange_),this.element=s.createElement("div"),this.element.classList.add(Ya()),l.viewProps.bindTabIndex(this.element);const g=s.createElement("div");g.classList.add(Ya("c")),this.element.appendChild(g);const S=s.createElement("div");S.classList.add(Ya("m")),this.element.appendChild(S),this.markerElem_=S,this.update_()}update_(){const s=this.value.rawValue,[l]=s.getComponents("hsv");this.markerElem_.style.backgroundColor=Lu(new ie([l,100,100],"hsv"));const g=Se(l,0,360,0,100);this.markerElem_.style.left=`${g}%`}onValueChange_(){this.update_()}}class km{constructor(s,l){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=l.value,this.viewProps=l.viewProps,this.view=new Bm(s,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Oi(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(s,l){if(!s.point)return;const g=Se(ke(s.point.x,0,s.bounds.width),0,s.bounds.width,0,359),S=this.value.rawValue,[,k,q,ut]=S.getComponents("hsv");this.value.setRawValue(new ie([g,k,q,ut],"hsv"),l)}onPointerDown_(s){this.handlePointerEvent_(s.data,{forceEmit:!1,last:!1})}onPointerMove_(s){this.handlePointerEvent_(s.data,{forceEmit:!1,last:!1})}onPointerUp_(s){this.handlePointerEvent_(s.data,{forceEmit:!0,last:!0})}onKeyDown_(s){const l=fn(Vi(!1),Zn(s));if(l===0)return;const g=this.value.rawValue,[S,k,q,ut]=g.getComponents("hsv");this.value.setRawValue(new ie([S+l,k,q,ut],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(s){fn(Vi(!1),Zn(s))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const $a=y("svp"),Uu=64;class Vm{constructor(s,l){this.onValueChange_=this.onValueChange_.bind(this),this.value=l.value,this.value.emitter.on("change",this.onValueChange_),this.element=s.createElement("div"),this.element.classList.add($a()),l.viewProps.bindTabIndex(this.element);const g=s.createElement("canvas");g.height=Uu,g.width=Uu,g.classList.add($a("c")),this.element.appendChild(g),this.canvasElement=g;const S=s.createElement("div");S.classList.add($a("m")),this.element.appendChild(S),this.markerElem_=S,this.update_()}update_(){const s=At(this.canvasElement);if(!s)return;const g=this.value.rawValue.getComponents("hsv"),S=this.canvasElement.width,k=this.canvasElement.height,q=s.getImageData(0,0,S,k),ut=q.data;for(let le=0;le<k;le++)for(let ce=0;ce<S;ce++){const Jn=Se(ce,0,S,0,100),ws=Se(le,0,k,100,0),Es=uu(g[0],Jn,ws),fr=(le*S+ce)*4;ut[fr]=Es[0],ut[fr+1]=Es[1],ut[fr+2]=Es[2],ut[fr+3]=255}s.putImageData(q,0,0);const Ut=Se(g[1],0,100,0,100);this.markerElem_.style.left=`${Ut}%`;const qt=Se(g[2],0,100,100,0);this.markerElem_.style.top=`${qt}%`}onValueChange_(){this.update_()}}class zm{constructor(s,l){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=l.value,this.viewProps=l.viewProps,this.view=new Vm(s,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Oi(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(s,l){if(!s.point)return;const g=Se(s.point.x,0,s.bounds.width,0,100),S=Se(s.point.y,0,s.bounds.height,100,0),[k,,,q]=this.value.rawValue.getComponents("hsv");this.value.setRawValue(new ie([k,g,S,q],"hsv"),l)}onPointerDown_(s){this.handlePointerEvent_(s.data,{forceEmit:!1,last:!1})}onPointerMove_(s){this.handlePointerEvent_(s.data,{forceEmit:!1,last:!1})}onPointerUp_(s){this.handlePointerEvent_(s.data,{forceEmit:!0,last:!0})}onKeyDown_(s){su(s.key)&&s.preventDefault();const[l,g,S,k]=this.value.rawValue.getComponents("hsv"),q=Vi(!1),ut=fn(q,Zn(s)),Ut=fn(q,vs(s));ut===0&&Ut===0||this.value.setRawValue(new ie([l,g+ut,S+Ut,k],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(s){const l=Vi(!1),g=fn(l,Zn(s)),S=fn(l,vs(s));g===0&&S===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class Hm{constructor(s,l){this.value=l.value,this.viewProps=l.viewProps,this.hPaletteC_=new km(s,{value:this.value,viewProps:this.viewProps}),this.svPaletteC_=new zm(s,{value:this.value,viewProps:this.viewProps}),this.alphaIcs_=l.supportsAlpha?{palette:new Dm(s,{value:this.value,viewProps:this.viewProps}),text:new _s(s,{parser:Kn,baseStep:.1,props:W.fromObject({draggingScale:.01,formatter:Ye(2)}),value:H(0,{constraint:new Be({min:0,max:1})}),viewProps:this.viewProps})}:null,this.alphaIcs_&&gs({primary:this.value,secondary:this.alphaIcs_.text.value,forward:g=>g.rawValue.getComponents()[3],backward:(g,S)=>{const k=g.rawValue.getComponents();return k[3]=S.rawValue,new ie(k,g.rawValue.mode)}}),this.textC_=new Om(s,{colorType:l.colorType,parser:Kn,value:this.value,viewProps:this.viewProps}),this.view=new mm(s,{alphaViews:this.alphaIcs_?{palette:this.alphaIcs_.palette.view,text:this.alphaIcs_.text.view}:null,hPaletteView:this.hPaletteC_.view,supportsAlpha:l.supportsAlpha,svPaletteView:this.svPaletteC_.view,textView:this.textC_.view})}get textController(){return this.textC_}}const Ka=y("colsw");class Gm{constructor(s,l){this.onValueChange_=this.onValueChange_.bind(this),l.value.emitter.on("change",this.onValueChange_),this.value=l.value,this.element=s.createElement("div"),this.element.classList.add(Ka()),l.viewProps.bindClassModifiers(this.element);const g=s.createElement("div");g.classList.add(Ka("sw")),this.element.appendChild(g),this.swatchElem_=g;const S=s.createElement("button");S.classList.add(Ka("b")),l.viewProps.bindDisabled(S),this.element.appendChild(S),this.buttonElement=S,this.update_()}update_(){const s=this.value.rawValue;this.swatchElem_.style.backgroundColor=Xa(s)}onValueChange_(){this.update_()}}class Wm{constructor(s,l){this.value=l.value,this.viewProps=l.viewProps,this.view=new Gm(s,{value:this.value,viewProps:this.viewProps})}}class Za{constructor(s,l){this.onButtonBlur_=this.onButtonBlur_.bind(this),this.onButtonClick_=this.onButtonClick_.bind(this),this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.value=l.value,this.viewProps=l.viewProps,this.foldable_=ne.create(l.expanded),this.swatchC_=new Wm(s,{value:this.value,viewProps:this.viewProps});const g=this.swatchC_.view.buttonElement;g.addEventListener("blur",this.onButtonBlur_),g.addEventListener("click",this.onButtonClick_),this.textC_=new so(s,{parser:l.parser,props:W.fromObject({formatter:l.formatter}),value:this.value,viewProps:this.viewProps}),this.view=new om(s,{foldable:this.foldable_,pickerLayout:l.pickerLayout}),this.view.swatchElement.appendChild(this.swatchC_.view.element),this.view.textElement.appendChild(this.textC_.view.element),this.popC_=l.pickerLayout==="popup"?new $c(s,{viewProps:this.viewProps}):null;const S=new Hm(s,{colorType:l.colorType,supportsAlpha:l.supportsAlpha,value:this.value,viewProps:this.viewProps});S.view.allFocusableElements.forEach(k=>{k.addEventListener("blur",this.onPopupChildBlur_),k.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=S,this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(S.view.element),gs({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:k=>k.rawValue,backward:(k,q)=>q.rawValue})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),Ct(this.foldable_,this.view.pickerElement))}get textController(){return this.textC_}onButtonBlur_(s){if(!this.popC_)return;const l=this.view.element,g=s.relatedTarget;(!g||!l.contains(g))&&(this.popC_.shows.rawValue=!1)}onButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(s){if(!this.popC_)return;const l=this.popC_.view.element,g=at(s);g&&l.contains(g)||g&&g===this.swatchC_.view.buttonElement&&!Ae(l.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(s){this.popC_?s.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&s.key==="Escape"&&this.swatchC_.view.buttonElement.focus()}}function Xm(u,s){return ie.isColorObject(u)?ie.fromObject(u,s):ie.black(s)}function qm(u){return ki(u.getComponents("rgb")).reduce((s,l)=>s<<8|Math.floor(l)&255,0)}function jm(u){return u.getComponents("rgb").reduce((s,l,g)=>{const S=Math.floor(g===3?l*255:l)&255;return s<<8|S},0)>>>0}function Ym(u){return new ie([u>>16&255,u>>8&255,u&255],"rgb")}function $m(u){return new ie([u>>24&255,u>>16&255,u>>8&255,Se(u&255,0,255,0,1)],"rgb")}function Km(u){return typeof u!="number"?ie.black():Ym(u)}function Zm(u){return typeof u!="number"?ie.black():$m(u)}function Qm(u){const s=qa(u);return s?(l,g)=>{xs(l,s(g))}:null}function Jm(u){const s=u?jm:qm;return(l,g)=>{xs(l,s(g))}}function tg(u,s,l){const g=s.toRgbaObject(l);u.writeProperty("r",g.r),u.writeProperty("g",g.g),u.writeProperty("b",g.b),u.writeProperty("a",g.a)}function eg(u,s,l){const g=s.toRgbaObject(l);u.writeProperty("r",g.r),u.writeProperty("g",g.g),u.writeProperty("b",g.b)}function ng(u,s){return(l,g)=>{u?tg(l,g,s):eg(l,g,s)}}function Qa(u){var s;return!!((u==null?void 0:u.alpha)||((s=u==null?void 0:u.color)===null||s===void 0?void 0:s.alpha))}function ig(u){return u?s=>Xa(s,"0x"):s=>Ru(s,"0x")}function rg(u){return"color"in u||"view"in u&&u.view==="color"}const sg={id:"input-color-number",type:"input",accept:(u,s)=>{if(typeof u!="number"||!rg(s))return null;const l=Ha(s);return l?{initialValue:u,params:l}:null},binding:{reader:u=>Qa(u.params)?Zm:Km,equals:ie.equals,writer:u=>Jm(Qa(u.params))},controller:u=>{const s=Qa(u.params),l="expanded"in u.params?u.params.expanded:void 0,g="picker"in u.params?u.params.picker:void 0;return new Za(u.document,{colorType:"int",expanded:l!=null?l:!1,formatter:ig(s),parser:Wa("int"),pickerLayout:g!=null?g:"popup",supportsAlpha:s,value:u.value,viewProps:u.viewProps})}};function og(u){return ie.isRgbaColorObject(u)}function ag(u){return s=>Xm(s,u)}function lg(u,s){return l=>u?Iu(l,s):Du(l,s)}const cg={id:"input-color-object",type:"input",accept:(u,s)=>{if(!ie.isColorObject(u))return null;const l=Ha(s);return l?{initialValue:u,params:l}:null},binding:{reader:u=>ag(zi(u.params)),equals:ie.equals,writer:u=>ng(og(u.initialValue),zi(u.params))},controller:u=>{var s;const l=ie.isRgbaColorObject(u.initialValue),g="expanded"in u.params?u.params.expanded:void 0,S="picker"in u.params?u.params.picker:void 0,k=(s=zi(u.params))!==null&&s!==void 0?s:"int";return new Za(u.document,{colorType:k,expanded:g!=null?g:!1,formatter:lg(l,k),parser:Wa(k),pickerLayout:S!=null?S:"popup",supportsAlpha:l,value:u.value,viewProps:u.viewProps})}},ug={id:"input-color-string",type:"input",accept:(u,s)=>{if(typeof u!="string"||"view"in s&&s.view==="text")return null;const l=Ga(u,zi(s));if(!l||!qa(l))return null;const S=Ha(s);return S?{initialValue:u,params:S}:null},binding:{reader:u=>{var s;return Em((s=zi(u.params))!==null&&s!==void 0?s:"int")},equals:ie.equals,writer:u=>{const s=Ga(u.initialValue,zi(u.params));if(!s)throw b.shouldNeverHappen();const l=Qm(s);if(!l)throw b.notBindable();return l}},controller:u=>{const s=Ga(u.initialValue,zi(u.params));if(!s)throw b.shouldNeverHappen();const l=qa(s);if(!l)throw b.shouldNeverHappen();const g="expanded"in u.params?u.params.expanded:void 0,S="picker"in u.params?u.params.picker:void 0;return new Za(u.document,{colorType:s.type,expanded:g!=null?g:!1,formatter:l,parser:Wa(s.type),pickerLayout:S!=null?S:"popup",supportsAlpha:s.alpha,value:u.value,viewProps:u.viewProps})}};class vi{constructor(s){this.components=s.components,this.asm_=s.assembly}constrain(s){const l=this.asm_.toComponents(s).map((g,S)=>{var k,q;return(q=(k=this.components[S])===null||k===void 0?void 0:k.constrain(g))!==null&&q!==void 0?q:g});return this.asm_.fromComponents(l)}}const Nu=y("pndtxt");class hg{constructor(s,l){this.textViews=l.textViews,this.element=s.createElement("div"),this.element.classList.add(Nu()),this.textViews.forEach(g=>{const S=s.createElement("div");S.classList.add(Nu("a")),S.appendChild(g.element),this.element.appendChild(S)})}}function dg(u,s,l){return new _s(u,{arrayPosition:l===0?"fst":l===s.axes.length-1?"lst":"mid",baseStep:s.axes[l].baseStep,parser:s.parser,props:s.axes[l].textProps,value:H(0,{constraint:s.axes[l].constraint}),viewProps:s.viewProps})}class Ja{constructor(s,l){this.value=l.value,this.viewProps=l.viewProps,this.acs_=l.axes.map((g,S)=>dg(s,l,S)),this.acs_.forEach((g,S)=>{gs({primary:this.value,secondary:g.value,forward:k=>l.assembly.toComponents(k.rawValue)[S],backward:(k,q)=>{const ut=l.assembly.toComponents(k.rawValue);return ut[S]=q.rawValue,l.assembly.fromComponents(ut)}})}),this.view=new hg(s,{textViews:this.acs_.map(g=>g.view)})}}function Fu(u,s){return"step"in u&&!f(u.step)?new fi(u.step,s):null}function Ou(u){return"max"in u&&!f(u.max)||"min"in u&&!f(u.min)?new Be({max:u.max,min:u.min}):null}function pg(u,s){const l=[],g=Fu(u,s);g&&l.push(g);const S=Ou(u);S&&l.push(S);const k=Va(u.options);return k&&l.push(k),new Re(l)}function fg(u){const s=u?He(u,Be):null;return s?[s.minValue,s.maxValue]:[void 0,void 0]}function mg(u){const[s,l]=fg(u);return[s!=null?s:0,l!=null?l:100]}const gg={id:"input-number",type:"input",accept:(u,s)=>{if(typeof u!="number")return null;const l=mt,g=$(s,{format:l.optional.function,max:l.optional.number,min:l.optional.number,options:l.optional.custom(ao),step:l.optional.number});return g?{initialValue:u,params:g}:null},binding:{reader:u=>nu,constraint:u=>pg(u.params,u.initialValue),writer:u=>xs},controller:u=>{var s,l;const g=u.value,S=u.constraint;if(S&&He(S,$n))return new ps(u.document,{props:W.fromObject({options:(s=za(S))!==null&&s!==void 0?s:[]}),value:g,viewProps:u.viewProps});const k=(l="format"in u.params?u.params.format:void 0)!==null&&l!==void 0?l:Ye(lo(S,g.rawValue));if(S&&He(S,Be)){const[q,ut]=mg(S);return new ka(u.document,{baseStep:lr(S),parser:Kn,sliderProps:W.fromObject({maxValue:ut,minValue:q}),textProps:W.fromObject({draggingScale:cr(S,g.rawValue),formatter:k}),value:g,viewProps:u.viewProps})}return new _s(u.document,{baseStep:lr(S),parser:Kn,props:W.fromObject({draggingScale:cr(S,g.rawValue),formatter:k}),value:g,viewProps:u.viewProps})}};class _i{constructor(s=0,l=0){this.x=s,this.y=l}getComponents(){return[this.x,this.y]}static isObject(s){if(f(s))return!1;const l=s.x,g=s.y;return!(typeof l!="number"||typeof g!="number")}static equals(s,l){return s.x===l.x&&s.y===l.y}toObject(){return{x:this.x,y:this.y}}}const Bu={toComponents:u=>u.getComponents(),fromComponents:u=>new _i(...u)},hr=y("p2d");class vg{constructor(s,l){this.element=s.createElement("div"),this.element.classList.add(hr()),l.viewProps.bindClassModifiers(this.element),P(l.expanded,z(this.element,hr(void 0,"expanded")));const g=s.createElement("div");g.classList.add(hr("h")),this.element.appendChild(g);const S=s.createElement("button");S.classList.add(hr("b")),S.appendChild(Wt(s,"p2dpad")),l.viewProps.bindDisabled(S),g.appendChild(S),this.buttonElement=S;const k=s.createElement("div");if(k.classList.add(hr("t")),g.appendChild(k),this.textElement=k,l.pickerLayout==="inline"){const q=s.createElement("div");q.classList.add(hr("p")),this.element.appendChild(q),this.pickerElement=q}else this.pickerElement=null}}const xi=y("p2dp");class _g{constructor(s,l){this.onFoldableChange_=this.onFoldableChange_.bind(this),this.onValueChange_=this.onValueChange_.bind(this),this.invertsY_=l.invertsY,this.maxValue_=l.maxValue,this.element=s.createElement("div"),this.element.classList.add(xi()),l.layout==="popup"&&this.element.classList.add(xi(void 0,"p"));const g=s.createElement("div");g.classList.add(xi("p")),l.viewProps.bindTabIndex(g),this.element.appendChild(g),this.padElement=g;const S=s.createElementNS(zt,"svg");S.classList.add(xi("g")),this.padElement.appendChild(S),this.svgElem_=S;const k=s.createElementNS(zt,"line");k.classList.add(xi("ax")),k.setAttributeNS(null,"x1","0"),k.setAttributeNS(null,"y1","50%"),k.setAttributeNS(null,"x2","100%"),k.setAttributeNS(null,"y2","50%"),this.svgElem_.appendChild(k);const q=s.createElementNS(zt,"line");q.classList.add(xi("ax")),q.setAttributeNS(null,"x1","50%"),q.setAttributeNS(null,"y1","0"),q.setAttributeNS(null,"x2","50%"),q.setAttributeNS(null,"y2","100%"),this.svgElem_.appendChild(q);const ut=s.createElementNS(zt,"line");ut.classList.add(xi("l")),ut.setAttributeNS(null,"x1","50%"),ut.setAttributeNS(null,"y1","50%"),this.svgElem_.appendChild(ut),this.lineElem_=ut;const Ut=s.createElement("div");Ut.classList.add(xi("m")),this.padElement.appendChild(Ut),this.markerElem_=Ut,l.value.emitter.on("change",this.onValueChange_),this.value=l.value,this.update_()}get allFocusableElements(){return[this.padElement]}update_(){const[s,l]=this.value.rawValue.getComponents(),g=this.maxValue_,S=Se(s,-g,+g,0,100),k=Se(l,-g,+g,0,100),q=this.invertsY_?100-k:k;this.lineElem_.setAttributeNS(null,"x2",`${S}%`),this.lineElem_.setAttributeNS(null,"y2",`${q}%`),this.markerElem_.style.left=`${S}%`,this.markerElem_.style.top=`${q}%`}onValueChange_(){this.update_()}onFoldableChange_(){this.update_()}}function ku(u,s,l){return[fn(s[0],Zn(u)),fn(s[1],vs(u))*(l?1:-1)]}class xg{constructor(s,l){this.onPadKeyDown_=this.onPadKeyDown_.bind(this),this.onPadKeyUp_=this.onPadKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=l.value,this.viewProps=l.viewProps,this.baseSteps_=l.baseSteps,this.maxValue_=l.maxValue,this.invertsY_=l.invertsY,this.view=new _g(s,{invertsY:this.invertsY_,layout:l.layout,maxValue:this.maxValue_,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Oi(this.view.padElement),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.padElement.addEventListener("keydown",this.onPadKeyDown_),this.view.padElement.addEventListener("keyup",this.onPadKeyUp_)}handlePointerEvent_(s,l){if(!s.point)return;const g=this.maxValue_,S=Se(s.point.x,0,s.bounds.width,-g,+g),k=Se(this.invertsY_?s.bounds.height-s.point.y:s.point.y,0,s.bounds.height,-g,+g);this.value.setRawValue(new _i(S,k),l)}onPointerDown_(s){this.handlePointerEvent_(s.data,{forceEmit:!1,last:!1})}onPointerMove_(s){this.handlePointerEvent_(s.data,{forceEmit:!1,last:!1})}onPointerUp_(s){this.handlePointerEvent_(s.data,{forceEmit:!0,last:!0})}onPadKeyDown_(s){su(s.key)&&s.preventDefault();const[l,g]=ku(s,this.baseSteps_,this.invertsY_);l===0&&g===0||this.value.setRawValue(new _i(this.value.rawValue.x+l,this.value.rawValue.y+g),{forceEmit:!1,last:!1})}onPadKeyUp_(s){const[l,g]=ku(s,this.baseSteps_,this.invertsY_);l===0&&g===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class bg{constructor(s,l){var g,S;this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.onPadButtonBlur_=this.onPadButtonBlur_.bind(this),this.onPadButtonClick_=this.onPadButtonClick_.bind(this),this.value=l.value,this.viewProps=l.viewProps,this.foldable_=ne.create(l.expanded),this.popC_=l.pickerLayout==="popup"?new $c(s,{viewProps:this.viewProps}):null;const k=new xg(s,{baseSteps:[l.axes[0].baseStep,l.axes[1].baseStep],invertsY:l.invertsY,layout:l.pickerLayout,maxValue:l.maxValue,value:this.value,viewProps:this.viewProps});k.view.allFocusableElements.forEach(q=>{q.addEventListener("blur",this.onPopupChildBlur_),q.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=k,this.textC_=new Ja(s,{assembly:Bu,axes:l.axes,parser:l.parser,value:this.value,viewProps:this.viewProps}),this.view=new vg(s,{expanded:this.foldable_.value("expanded"),pickerLayout:l.pickerLayout,viewProps:this.viewProps}),this.view.textElement.appendChild(this.textC_.view.element),(g=this.view.buttonElement)===null||g===void 0||g.addEventListener("blur",this.onPadButtonBlur_),(S=this.view.buttonElement)===null||S===void 0||S.addEventListener("click",this.onPadButtonClick_),this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(this.pickerC_.view.element),gs({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:q=>q.rawValue,backward:(q,ut)=>ut.rawValue})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),Ct(this.foldable_,this.view.pickerElement))}onPadButtonBlur_(s){if(!this.popC_)return;const l=this.view.element,g=s.relatedTarget;(!g||!l.contains(g))&&(this.popC_.shows.rawValue=!1)}onPadButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(s){if(!this.popC_)return;const l=this.popC_.view.element,g=at(s);g&&l.contains(g)||g&&g===this.view.buttonElement&&!Ae(l.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(s){this.popC_?s.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&s.key==="Escape"&&this.view.buttonElement.focus()}}function yg(u){return _i.isObject(u)?new _i(u.x,u.y):new _i}function wg(u,s){u.writeProperty("x",s.x),u.writeProperty("y",s.y)}function Qn(u,s){if(!u)return;const l=[],g=Fu(u,s);g&&l.push(g);const S=Ou(u);return S&&l.push(S),new Re(l)}function Eg(u,s){return new vi({assembly:Bu,components:[Qn("x"in u?u.x:void 0,s.x),Qn("y"in u?u.y:void 0,s.y)]})}function Vu(u,s){var l,g;const S=u&&He(u,Be);if(S)return Math.max(Math.abs((l=S.minValue)!==null&&l!==void 0?l:0),Math.abs((g=S.maxValue)!==null&&g!==void 0?g:0));const k=lr(u);return Math.max(Math.abs(k)*10,Math.abs(s)*10)}function Mg(u,s){const l=s instanceof vi?s.components[0]:void 0,g=s instanceof vi?s.components[1]:void 0,S=Vu(l,u.x),k=Vu(g,u.y);return Math.max(S,k)}function zu(u,s){return{baseStep:lr(s),constraint:s,textProps:W.fromObject({draggingScale:cr(s,u),formatter:Ye(lo(s,u))})}}function Sg(u){if(!("y"in u))return!1;const s=u.y;return s&&"inverted"in s?!!s.inverted:!1}const Tg={id:"input-point2d",type:"input",accept:(u,s)=>{if(!_i.isObject(u))return null;const l=mt,g=$(s,{expanded:l.optional.boolean,picker:l.optional.custom(lu),x:l.optional.custom(mi),y:l.optional.object({inverted:l.optional.boolean,max:l.optional.number,min:l.optional.number,step:l.optional.number})});return g?{initialValue:u,params:g}:null},binding:{reader:u=>yg,constraint:u=>Eg(u.params,u.initialValue),equals:_i.equals,writer:u=>wg},controller:u=>{const s=u.document,l=u.value,g=u.constraint;if(!(g instanceof vi))throw b.shouldNeverHappen();const S="expanded"in u.params?u.params.expanded:void 0,k="picker"in u.params?u.params.picker:void 0;return new bg(s,{axes:[zu(l.rawValue.x,g.components[0]),zu(l.rawValue.y,g.components[1])],expanded:S!=null?S:!1,invertsY:Sg(u.params),maxValue:Mg(l.rawValue,g),parser:Kn,pickerLayout:k!=null?k:"popup",value:l,viewProps:u.viewProps})}};class dr{constructor(s=0,l=0,g=0){this.x=s,this.y=l,this.z=g}getComponents(){return[this.x,this.y,this.z]}static isObject(s){if(f(s))return!1;const l=s.x,g=s.y,S=s.z;return!(typeof l!="number"||typeof g!="number"||typeof S!="number")}static equals(s,l){return s.x===l.x&&s.y===l.y&&s.z===l.z}toObject(){return{x:this.x,y:this.y,z:this.z}}}const Hu={toComponents:u=>u.getComponents(),fromComponents:u=>new dr(...u)};function Ag(u){return dr.isObject(u)?new dr(u.x,u.y,u.z):new dr}function Cg(u,s){u.writeProperty("x",s.x),u.writeProperty("y",s.y),u.writeProperty("z",s.z)}function Pg(u,s){return new vi({assembly:Hu,components:[Qn("x"in u?u.x:void 0,s.x),Qn("y"in u?u.y:void 0,s.y),Qn("z"in u?u.z:void 0,s.z)]})}function tl(u,s){return{baseStep:lr(s),constraint:s,textProps:W.fromObject({draggingScale:cr(s,u),formatter:Ye(lo(s,u))})}}const Rg={id:"input-point3d",type:"input",accept:(u,s)=>{if(!dr.isObject(u))return null;const l=mt,g=$(s,{x:l.optional.custom(mi),y:l.optional.custom(mi),z:l.optional.custom(mi)});return g?{initialValue:u,params:g}:null},binding:{reader:u=>Ag,constraint:u=>Pg(u.params,u.initialValue),equals:dr.equals,writer:u=>Cg},controller:u=>{const s=u.value,l=u.constraint;if(!(l instanceof vi))throw b.shouldNeverHappen();return new Ja(u.document,{assembly:Hu,axes:[tl(s.rawValue.x,l.components[0]),tl(s.rawValue.y,l.components[1]),tl(s.rawValue.z,l.components[2])],parser:Kn,value:s,viewProps:u.viewProps})}};class pr{constructor(s=0,l=0,g=0,S=0){this.x=s,this.y=l,this.z=g,this.w=S}getComponents(){return[this.x,this.y,this.z,this.w]}static isObject(s){if(f(s))return!1;const l=s.x,g=s.y,S=s.z,k=s.w;return!(typeof l!="number"||typeof g!="number"||typeof S!="number"||typeof k!="number")}static equals(s,l){return s.x===l.x&&s.y===l.y&&s.z===l.z&&s.w===l.w}toObject(){return{x:this.x,y:this.y,z:this.z,w:this.w}}}const Gu={toComponents:u=>u.getComponents(),fromComponents:u=>new pr(...u)};function Lg(u){return pr.isObject(u)?new pr(u.x,u.y,u.z,u.w):new pr}function Dg(u,s){u.writeProperty("x",s.x),u.writeProperty("y",s.y),u.writeProperty("z",s.z),u.writeProperty("w",s.w)}function Ig(u,s){return new vi({assembly:Gu,components:[Qn("x"in u?u.x:void 0,s.x),Qn("y"in u?u.y:void 0,s.y),Qn("z"in u?u.z:void 0,s.z),Qn("w"in u?u.w:void 0,s.w)]})}function Ug(u,s){return{baseStep:lr(s),constraint:s,textProps:W.fromObject({draggingScale:cr(s,u),formatter:Ye(lo(s,u))})}}const Ng={id:"input-point4d",type:"input",accept:(u,s)=>{if(!pr.isObject(u))return null;const l=mt,g=$(s,{x:l.optional.custom(mi),y:l.optional.custom(mi),z:l.optional.custom(mi),w:l.optional.custom(mi)});return g?{initialValue:u,params:g}:null},binding:{reader:u=>Lg,constraint:u=>Ig(u.params,u.initialValue),equals:pr.equals,writer:u=>Dg},controller:u=>{const s=u.value,l=u.constraint;if(!(l instanceof vi))throw b.shouldNeverHappen();return new Ja(u.document,{assembly:Gu,axes:s.rawValue.getComponents().map((g,S)=>Ug(g,l.components[S])),parser:Kn,value:s,viewProps:u.viewProps})}};function Fg(u){const s=[],l=Va(u.options);return l&&s.push(l),new Re(s)}const Og={id:"input-string",type:"input",accept:(u,s)=>{if(typeof u!="string")return null;const g=$(s,{options:mt.optional.custom(ao)});return g?{initialValue:u,params:g}:null},binding:{reader:u=>iu,constraint:u=>Fg(u.params),writer:u=>xs},controller:u=>{var s;const l=u.document,g=u.value,S=u.constraint;return S&&He(S,$n)?new ps(l,{props:W.fromObject({options:(s=za(S))!==null&&s!==void 0?s:[]}),value:g,viewProps:u.viewProps}):new so(l,{parser:k=>k,props:W.fromObject({formatter:Na}),value:g,viewProps:u.viewProps})}},ys={monitor:{defaultInterval:200,defaultLineCount:3}},Wu=y("mll");class Bg{constructor(s,l){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=l.formatter,this.element=s.createElement("div"),this.element.classList.add(Wu()),l.viewProps.bindClassModifiers(this.element);const g=s.createElement("textarea");g.classList.add(Wu("i")),g.style.height=`calc(var(--bld-us) * ${l.lineCount})`,g.readOnly=!0,l.viewProps.bindDisabled(g),this.element.appendChild(g),this.textareaElem_=g,l.value.emitter.on("change",this.onValueUpdate_),this.value=l.value,this.update_()}update_(){const s=this.textareaElem_,l=s.scrollTop===s.scrollHeight-s.clientHeight,g=[];this.value.rawValue.forEach(S=>{S!==void 0&&g.push(this.formatter_(S))}),s.textContent=g.join(`
`),l&&(s.scrollTop=s.scrollHeight)}onValueUpdate_(){this.update_()}}class el{constructor(s,l){this.value=l.value,this.viewProps=l.viewProps,this.view=new Bg(s,{formatter:l.formatter,lineCount:l.lineCount,value:this.value,viewProps:this.viewProps})}}const Xu=y("sgl");class kg{constructor(s,l){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=l.formatter,this.element=s.createElement("div"),this.element.classList.add(Xu()),l.viewProps.bindClassModifiers(this.element);const g=s.createElement("input");g.classList.add(Xu("i")),g.readOnly=!0,g.type="text",l.viewProps.bindDisabled(g),this.element.appendChild(g),this.inputElement=g,l.value.emitter.on("change",this.onValueUpdate_),this.value=l.value,this.update_()}update_(){const s=this.value.rawValue,l=s[s.length-1];this.inputElement.value=l!==void 0?this.formatter_(l):""}onValueUpdate_(){this.update_()}}class nl{constructor(s,l){this.value=l.value,this.viewProps=l.viewProps,this.view=new kg(s,{formatter:l.formatter,value:this.value,viewProps:this.viewProps})}}const Vg={id:"monitor-bool",type:"monitor",accept:(u,s)=>{if(typeof u!="boolean")return null;const g=$(s,{lineCount:mt.optional.number});return g?{initialValue:u,params:g}:null},binding:{reader:u=>Zc},controller:u=>{var s;return u.value.rawValue.length===1?new nl(u.document,{formatter:Qc,value:u.value,viewProps:u.viewProps}):new el(u.document,{formatter:Qc,lineCount:(s=u.params.lineCount)!==null&&s!==void 0?s:ys.monitor.defaultLineCount,value:u.value,viewProps:u.viewProps})}},bi=y("grl");class zg{constructor(s,l){this.onCursorChange_=this.onCursorChange_.bind(this),this.onValueUpdate_=this.onValueUpdate_.bind(this),this.element=s.createElement("div"),this.element.classList.add(bi()),l.viewProps.bindClassModifiers(this.element),this.formatter_=l.formatter,this.props_=l.props,this.cursor_=l.cursor,this.cursor_.emitter.on("change",this.onCursorChange_);const g=s.createElementNS(zt,"svg");g.classList.add(bi("g")),g.style.height=`calc(var(--bld-us) * ${l.lineCount})`,this.element.appendChild(g),this.svgElem_=g;const S=s.createElementNS(zt,"polyline");this.svgElem_.appendChild(S),this.lineElem_=S;const k=s.createElement("div");k.classList.add(bi("t"),y("tt")()),this.element.appendChild(k),this.tooltipElem_=k,l.value.emitter.on("change",this.onValueUpdate_),this.value=l.value,this.update_()}get graphElement(){return this.svgElem_}update_(){const s=this.svgElem_.getBoundingClientRect(),l=this.value.rawValue.length-1,g=this.props_.get("minValue"),S=this.props_.get("maxValue"),k=[];this.value.rawValue.forEach((le,ce)=>{if(le===void 0)return;const Jn=Se(ce,0,l,0,s.width),ws=Se(le,g,S,s.height,0);k.push([Jn,ws].join(","))}),this.lineElem_.setAttributeNS(null,"points",k.join(" "));const q=this.tooltipElem_,ut=this.value.rawValue[this.cursor_.rawValue];if(ut===void 0){q.classList.remove(bi("t","a"));return}const Ut=Se(this.cursor_.rawValue,0,l,0,s.width),qt=Se(ut,g,S,s.height,0);q.style.left=`${Ut}px`,q.style.top=`${qt}px`,q.textContent=`${this.formatter_(ut)}`,q.classList.contains(bi("t","a"))||(q.classList.add(bi("t","a"),bi("t","in")),Bt(q),q.classList.remove(bi("t","in")))}onValueUpdate_(){this.update_()}onCursorChange_(){this.update_()}}class Hg{constructor(s,l){if(this.onGraphMouseMove_=this.onGraphMouseMove_.bind(this),this.onGraphMouseLeave_=this.onGraphMouseLeave_.bind(this),this.onGraphPointerDown_=this.onGraphPointerDown_.bind(this),this.onGraphPointerMove_=this.onGraphPointerMove_.bind(this),this.onGraphPointerUp_=this.onGraphPointerUp_.bind(this),this.props_=l.props,this.value=l.value,this.viewProps=l.viewProps,this.cursor_=H(-1),this.view=new zg(s,{cursor:this.cursor_,formatter:l.formatter,lineCount:l.lineCount,props:this.props_,value:this.value,viewProps:this.viewProps}),!Ae(s))this.view.element.addEventListener("mousemove",this.onGraphMouseMove_),this.view.element.addEventListener("mouseleave",this.onGraphMouseLeave_);else{const g=new Oi(this.view.element);g.emitter.on("down",this.onGraphPointerDown_),g.emitter.on("move",this.onGraphPointerMove_),g.emitter.on("up",this.onGraphPointerUp_)}}onGraphMouseLeave_(){this.cursor_.rawValue=-1}onGraphMouseMove_(s){const l=this.view.element.getBoundingClientRect();this.cursor_.rawValue=Math.floor(Se(s.offsetX,0,l.width,0,this.value.rawValue.length))}onGraphPointerDown_(s){this.onGraphPointerMove_(s)}onGraphPointerMove_(s){if(!s.data.point){this.cursor_.rawValue=-1;return}this.cursor_.rawValue=Math.floor(Se(s.data.point.x,0,s.data.bounds.width,0,this.value.rawValue.length))}onGraphPointerUp_(){this.cursor_.rawValue=-1}}function il(u){return"format"in u&&!f(u.format)?u.format:Ye(2)}function Gg(u){var s;return u.value.rawValue.length===1?new nl(u.document,{formatter:il(u.params),value:u.value,viewProps:u.viewProps}):new el(u.document,{formatter:il(u.params),lineCount:(s=u.params.lineCount)!==null&&s!==void 0?s:ys.monitor.defaultLineCount,value:u.value,viewProps:u.viewProps})}function Wg(u){var s,l,g;return new Hg(u.document,{formatter:il(u.params),lineCount:(s=u.params.lineCount)!==null&&s!==void 0?s:ys.monitor.defaultLineCount,props:W.fromObject({maxValue:(l="max"in u.params?u.params.max:null)!==null&&l!==void 0?l:100,minValue:(g="min"in u.params?u.params.min:null)!==null&&g!==void 0?g:0}),value:u.value,viewProps:u.viewProps})}function qu(u){return"view"in u&&u.view==="graph"}const Xg={id:"monitor-number",type:"monitor",accept:(u,s)=>{if(typeof u!="number")return null;const l=mt,g=$(s,{format:l.optional.function,lineCount:l.optional.number,max:l.optional.number,min:l.optional.number,view:l.optional.string});return g?{initialValue:u,params:g}:null},binding:{defaultBufferSize:u=>qu(u)?64:1,reader:u=>nu},controller:u=>qu(u.params)?Wg(u):Gg(u)},qg={id:"monitor-string",type:"monitor",accept:(u,s)=>{if(typeof u!="string")return null;const l=mt,g=$(s,{lineCount:l.optional.number,multiline:l.optional.boolean});return g?{initialValue:u,params:g}:null},binding:{reader:u=>iu},controller:u=>{var s;const l=u.value;return l.rawValue.length>1||"multiline"in u.params&&u.params.multiline?new el(u.document,{formatter:Na,lineCount:(s=u.params.lineCount)!==null&&s!==void 0?s:ys.monitor.defaultLineCount,value:l,viewProps:u.viewProps}):new nl(u.document,{formatter:Na,value:l,viewProps:u.viewProps})}};class jg{constructor(s){this.onValueChange_=this.onValueChange_.bind(this),this.reader=s.reader,this.writer=s.writer,this.emitter=new v,this.value=s.value,this.value.emitter.on("change",this.onValueChange_),this.target=s.target,this.read()}read(){const s=this.target.read();s!==void 0&&(this.value.rawValue=this.reader(s))}write_(s){this.writer(this.target,s)}onValueChange_(s){this.write_(s.rawValue),this.emitter.emit("change",{options:s.options,rawValue:s.rawValue,sender:this})}}function Yg(u,s){const l=u.accept(s.target.read(),s.params);if(f(l))return null;const g=mt,S={target:s.target,initialValue:l.initialValue,params:l.params},k=u.binding.reader(S),q=u.binding.constraint?u.binding.constraint(S):void 0,ut=H(k(l.initialValue),{constraint:q,equals:u.binding.equals}),Ut=new jg({reader:k,target:s.target,value:ut,writer:u.binding.writer(S)}),qt=g.optional.boolean(s.params.disabled).value,le=g.optional.boolean(s.params.hidden).value,ce=u.controller({constraint:q,document:s.document,initialValue:l.initialValue,params:l.params,value:Ut.value,viewProps:Ft.create({disabled:qt,hidden:le})}),Jn=g.optional.string(s.params.label).value;return new st(s.document,{binding:Ut,blade:ot(),props:W.fromObject({label:Jn!=null?Jn:s.target.key}),valueController:ce})}class $g{constructor(s){this.onTick_=this.onTick_.bind(this),this.reader_=s.reader,this.target=s.target,this.emitter=new v,this.value=s.value,this.ticker=s.ticker,this.ticker.emitter.on("tick",this.onTick_),this.read()}dispose(){this.ticker.dispose()}read(){const s=this.target.read();if(s===void 0)return;const l=this.value.rawValue,g=this.reader_(s);this.value.rawValue=$f(l,g),this.emitter.emit("update",{rawValue:g,sender:this})}onTick_(s){this.read()}}function Kg(u,s){return s===0?new Fi:new hs(u,s!=null?s:ys.monitor.defaultInterval)}function Zg(u,s){var l,g,S;const k=mt,q=u.accept(s.target.read(),s.params);if(f(q))return null;const ut={target:s.target,initialValue:q.initialValue,params:q.params},Ut=u.binding.reader(ut),qt=(g=(l=k.optional.number(s.params.bufferSize).value)!==null&&l!==void 0?l:u.binding.defaultBufferSize&&u.binding.defaultBufferSize(q.params))!==null&&g!==void 0?g:1,le=k.optional.number(s.params.interval).value,ce=new $g({reader:Ut,target:s.target,ticker:Kg(s.document,le),value:jf(qt)}),Jn=k.optional.boolean(s.params.disabled).value,ws=k.optional.boolean(s.params.hidden).value,Es=u.controller({document:s.document,params:q.params,value:ce.value,viewProps:Ft.create({disabled:Jn,hidden:ws})}),fr=(S=k.optional.string(s.params.label).value)!==null&&S!==void 0?S:s.target.key;return new Mt(s.document,{binding:ce,blade:ot(),props:W.fromObject({label:fr}),valueController:Es})}class Qg{constructor(){this.pluginsMap_={blades:[],inputs:[],monitors:[]}}getAll(){return[...this.pluginsMap_.blades,...this.pluginsMap_.inputs,...this.pluginsMap_.monitors]}register(s){s.type==="blade"?this.pluginsMap_.blades.unshift(s):s.type==="input"?this.pluginsMap_.inputs.unshift(s):s.type==="monitor"&&this.pluginsMap_.monitors.unshift(s)}createInput(s,l,g){const S=l.read();if(f(S))throw new b({context:{key:l.key},type:"nomatchingcontroller"});const k=this.pluginsMap_.inputs.reduce((q,ut)=>q!=null?q:Yg(ut,{document:s,target:l,params:g}),null);if(k)return k;throw new b({context:{key:l.key},type:"nomatchingcontroller"})}createMonitor(s,l,g){const S=this.pluginsMap_.monitors.reduce((k,q)=>k!=null?k:Zg(q,{document:s,params:g,target:l}),null);if(S)return S;throw new b({context:{key:l.key},type:"nomatchingcontroller"})}createBlade(s,l){const g=this.pluginsMap_.blades.reduce((S,k)=>S!=null?S:io(k,{document:s,params:l}),null);if(!g)throw new b({type:"nomatchingview",context:{params:l}});return g}createBladeApi(s){if(s instanceof st)return new O(s);if(s instanceof Mt)return new lt(s);if(s instanceof pi)return new ae(s,this);const l=this.pluginsMap_.blades.reduce((g,S)=>g!=null?g:S.api({controller:s,pool:this}),null);if(!l)throw b.shouldNeverHappen();return l}}function Jg(){const u=new Qg;return[Tg,Rg,Ng,Og,gg,ug,cg,sg,sm,Vg,qg,Xg,Ot,Da,yt,Vn].forEach(s=>{u.register(s)}),u}class ju extends r{constructor(s){super(s),this.emitter_=new v,this.controller_.valueController.value.emitter.on("change",l=>{this.emitter_.emit("change",{event:new a(this,l.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(s){this.controller_.props.set("label",s)}get options(){return this.controller_.valueController.props.get("options")}set options(s){this.controller_.valueController.props.set("options",s)}get value(){return this.controller_.valueController.value.rawValue}set value(s){this.controller_.valueController.value.rawValue=s}on(s,l){const g=l.bind(this);return this.emitter_.on(s,S=>{g(S.event)}),this}}class Yu extends r{constructor(s){super(s),this.emitter_=new v,this.controller_.valueController.value.emitter.on("change",l=>{this.emitter_.emit("change",{event:new a(this,l.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(s){this.controller_.props.set("label",s)}get maxValue(){return this.controller_.valueController.sliderController.props.get("maxValue")}set maxValue(s){this.controller_.valueController.sliderController.props.set("maxValue",s)}get minValue(){return this.controller_.valueController.sliderController.props.get("minValue")}set minValue(s){this.controller_.valueController.sliderController.props.set("minValue",s)}get value(){return this.controller_.valueController.value.rawValue}set value(s){this.controller_.valueController.value.rawValue=s}on(s,l){const g=l.bind(this);return this.emitter_.on(s,S=>{g(S.event)}),this}}class $u extends r{constructor(s){super(s),this.emitter_=new v,this.controller_.valueController.value.emitter.on("change",l=>{this.emitter_.emit("change",{event:new a(this,l.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(s){this.controller_.props.set("label",s)}get formatter(){return this.controller_.valueController.props.get("formatter")}set formatter(s){this.controller_.valueController.props.set("formatter",s)}get value(){return this.controller_.valueController.value.rawValue}set value(s){this.controller_.valueController.value.rawValue=s}on(s,l){const g=l.bind(this);return this.emitter_.on(s,S=>{g(S.event)}),this}}const tv=function(){return{id:"list",type:"blade",accept(u){const s=mt,l=$(u,{options:s.required.custom(ao),value:s.required.raw,view:s.required.constant("list"),label:s.optional.string});return l?{params:l}:null},controller(u){const s=new ps(u.document,{props:W.fromObject({options:cu(u.params.options)}),value:H(u.params.value),viewProps:u.viewProps});return new D(u.document,{blade:u.blade,props:W.fromObject({label:u.params.label}),valueController:s})},api(u){return!(u.controller instanceof D)||!(u.controller.valueController instanceof ps)?null:new ju(u.controller)}}}();function ev(u){return u.reduce((s,l)=>Object.assign(s,{[l.presetKey]:l.read()}),{})}function nv(u,s){u.forEach(l=>{const g=s[l.presetKey];g!==void 0&&l.write(g)})}class iv extends Le{constructor(s,l){super(s,l)}get element(){return this.controller_.view.element}importPreset(s){const l=this.controller_.rackController.rack.find(st).map(g=>g.binding.target);nv(l,s),this.refresh()}exportPreset(){const s=this.controller_.rackController.rack.find(st).map(l=>l.binding.target);return ev(s)}refresh(){this.controller_.rackController.rack.find(st).forEach(s=>{s.binding.read()}),this.controller_.rackController.rack.find(Mt).forEach(s=>{s.binding.read()})}}class rv extends cs{constructor(s,l){super(s,{expanded:l.expanded,blade:l.blade,props:l.props,root:!0,viewProps:l.viewProps})}}const sv={id:"slider",type:"blade",accept(u){const s=mt,l=$(u,{max:s.required.number,min:s.required.number,view:s.required.constant("slider"),format:s.optional.function,label:s.optional.string,value:s.optional.number});return l?{params:l}:null},controller(u){var s,l;const g=(s=u.params.value)!==null&&s!==void 0?s:0,S=new ka(u.document,{baseStep:1,parser:Kn,sliderProps:W.fromObject({maxValue:u.params.max,minValue:u.params.min}),textProps:W.fromObject({draggingScale:cr(void 0,g),formatter:(l=u.params.format)!==null&&l!==void 0?l:Xf}),value:H(g),viewProps:u.viewProps});return new D(u.document,{blade:u.blade,props:W.fromObject({label:u.params.label}),valueController:S})},api(u){return!(u.controller instanceof D)||!(u.controller.valueController instanceof ka)?null:new Yu(u.controller)}},ov=function(){return{id:"text",type:"blade",accept(u){const s=mt,l=$(u,{parse:s.required.function,value:s.required.raw,view:s.required.constant("text"),format:s.optional.function,label:s.optional.string});return l?{params:l}:null},controller(u){var s;const l=new so(u.document,{parser:u.params.parse,props:W.fromObject({formatter:(s=u.params.format)!==null&&s!==void 0?s:g=>String(g)}),value:H(u.params.value),viewProps:u.viewProps});return new D(u.document,{blade:u.blade,props:W.fromObject({label:u.params.label}),valueController:l})},api(u){return!(u.controller instanceof D)||!(u.controller.valueController instanceof so)?null:new $u(u.controller)}}}();function av(u){const s=u.createElement("div");return s.classList.add(y("dfw")()),u.body&&u.body.appendChild(s),s}function Ku(u,s,l){if(u.querySelector(`style[data-tp-style=${s}]`))return;const g=u.createElement("style");g.dataset.tpStyle=s,g.textContent=l,u.head.appendChild(g)}class lv extends iv{constructor(s){var l,g;const S=s!=null?s:{},k=(l=S.document)!==null&&l!==void 0?l:Ht(),q=Jg(),ut=new rv(k,{expanded:S.expanded,blade:ot(),props:W.fromObject({title:S.title}),viewProps:Ft.create()});super(ut,q),this.pool_=q,this.containerElem_=(g=S.container)!==null&&g!==void 0?g:av(k),this.containerElem_.appendChild(this.element),this.doc_=k,this.usesDefaultWrapper_=!S.container,this.setUpDefaultPlugins_()}get document(){if(!this.doc_)throw b.alreadyDisposed();return this.doc_}dispose(){const s=this.containerElem_;if(!s)throw b.alreadyDisposed();if(this.usesDefaultWrapper_){const l=s.parentElement;l&&l.removeChild(s)}this.containerElem_=null,this.doc_=null,super.dispose()}registerPlugin(s){("plugin"in s?[s.plugin]:"plugins"in s?s.plugins:[]).forEach(g=>{this.pool_.register(g),this.embedPluginStyle_(g)})}embedPluginStyle_(s){s.css&&Ku(this.document,`plugin-${s.id}`,s.css)}setUpDefaultPlugins_(){Ku(this.document,"default",'.tp-tbiv_b,.tp-coltxtv_ms,.tp-ckbv_i,.tp-rotv_b,.tp-fldv_b,.tp-mllv_i,.tp-sglv_i,.tp-grlv_g,.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw,.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0}.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{background-color:var(--btn-bg);border-radius:var(--elm-br);color:var(--btn-fg);cursor:pointer;display:block;font-weight:bold;height:var(--bld-us);line-height:var(--bld-us);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tp-p2dv_b:hover,.tp-btnv_b:hover,.tp-lstv_s:hover{background-color:var(--btn-bg-h)}.tp-p2dv_b:focus,.tp-btnv_b:focus,.tp-lstv_s:focus{background-color:var(--btn-bg-f)}.tp-p2dv_b:active,.tp-btnv_b:active,.tp-lstv_s:active{background-color:var(--btn-bg-a)}.tp-p2dv_b:disabled,.tp-btnv_b:disabled,.tp-lstv_s:disabled{opacity:.5}.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw{background-color:var(--in-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--in-fg);font-family:inherit;height:var(--bld-us);line-height:var(--bld-us);min-width:0;width:100%}.tp-txtv_i:hover,.tp-p2dpv_p:hover,.tp-colswv_sw:hover{background-color:var(--in-bg-h)}.tp-txtv_i:focus,.tp-p2dpv_p:focus,.tp-colswv_sw:focus{background-color:var(--in-bg-f)}.tp-txtv_i:active,.tp-p2dpv_p:active,.tp-colswv_sw:active{background-color:var(--in-bg-a)}.tp-txtv_i:disabled,.tp-p2dpv_p:disabled,.tp-colswv_sw:disabled{opacity:.5}.tp-mllv_i,.tp-sglv_i,.tp-grlv_g{background-color:var(--mo-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--mo-fg);height:var(--bld-us);scrollbar-color:currentColor transparent;scrollbar-width:thin;width:100%}.tp-mllv_i::-webkit-scrollbar,.tp-sglv_i::-webkit-scrollbar,.tp-grlv_g::-webkit-scrollbar{height:8px;width:8px}.tp-mllv_i::-webkit-scrollbar-corner,.tp-sglv_i::-webkit-scrollbar-corner,.tp-grlv_g::-webkit-scrollbar-corner{background-color:transparent}.tp-mllv_i::-webkit-scrollbar-thumb,.tp-sglv_i::-webkit-scrollbar-thumb,.tp-grlv_g::-webkit-scrollbar-thumb{background-clip:padding-box;background-color:currentColor;border:transparent solid 2px;border-radius:4px}.tp-rotv{--font-family: var(--tp-font-family, Roboto Mono, Source Code Pro, Menlo, Courier, monospace);--bs-br: var(--tp-base-border-radius, 6px);--cnt-h-p: var(--tp-container-horizontal-padding, 4px);--cnt-v-p: var(--tp-container-vertical-padding, 4px);--elm-br: var(--tp-element-border-radius, 2px);--bld-s: var(--tp-blade-spacing, 4px);--bld-us: var(--tp-blade-unit-size, 20px);--bs-bg: var(--tp-base-background-color, #28292e);--bs-sh: var(--tp-base-shadow-color, rgba(0, 0, 0, 0.2));--btn-bg: var(--tp-button-background-color, #adafb8);--btn-bg-a: var(--tp-button-background-color-active, #d6d7db);--btn-bg-f: var(--tp-button-background-color-focus, #c8cad0);--btn-bg-h: var(--tp-button-background-color-hover, #bbbcc4);--btn-fg: var(--tp-button-foreground-color, #28292e);--cnt-bg: var(--tp-container-background-color, rgba(187, 188, 196, 0.1));--cnt-bg-a: var(--tp-container-background-color-active, rgba(187, 188, 196, 0.25));--cnt-bg-f: var(--tp-container-background-color-focus, rgba(187, 188, 196, 0.2));--cnt-bg-h: var(--tp-container-background-color-hover, rgba(187, 188, 196, 0.15));--cnt-fg: var(--tp-container-foreground-color, #bbbcc4);--in-bg: var(--tp-input-background-color, rgba(187, 188, 196, 0.1));--in-bg-a: var(--tp-input-background-color-active, rgba(187, 188, 196, 0.25));--in-bg-f: var(--tp-input-background-color-focus, rgba(187, 188, 196, 0.2));--in-bg-h: var(--tp-input-background-color-hover, rgba(187, 188, 196, 0.15));--in-fg: var(--tp-input-foreground-color, #bbbcc4);--lbl-fg: var(--tp-label-foreground-color, rgba(187, 188, 196, 0.7));--mo-bg: var(--tp-monitor-background-color, rgba(0, 0, 0, 0.2));--mo-fg: var(--tp-monitor-foreground-color, rgba(187, 188, 196, 0.7));--grv-fg: var(--tp-groove-foreground-color, rgba(187, 188, 196, 0.1))}.tp-rotv_c>.tp-cntv.tp-v-lst,.tp-tabv_c .tp-brkv>.tp-cntv.tp-v-lst,.tp-fldv_c>.tp-cntv.tp-v-lst{margin-bottom:calc(-1*var(--cnt-v-p))}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-tabv_c .tp-brkv>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_c{border-bottom-left-radius:0}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-tabv_c .tp-brkv>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_b{border-bottom-left-radius:0}.tp-rotv_c>*:not(.tp-v-fst),.tp-tabv_c .tp-brkv>*:not(.tp-v-fst),.tp-fldv_c>*:not(.tp-v-fst){margin-top:var(--bld-s)}.tp-rotv_c>.tp-sprv:not(.tp-v-fst),.tp-tabv_c .tp-brkv>.tp-sprv:not(.tp-v-fst),.tp-fldv_c>.tp-sprv:not(.tp-v-fst),.tp-rotv_c>.tp-cntv:not(.tp-v-fst),.tp-tabv_c .tp-brkv>.tp-cntv:not(.tp-v-fst),.tp-fldv_c>.tp-cntv:not(.tp-v-fst){margin-top:var(--cnt-v-p)}.tp-rotv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-tabv_c .tp-brkv>.tp-sprv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-rotv_c>.tp-cntv+*:not(.tp-v-hidden),.tp-tabv_c .tp-brkv>.tp-cntv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-cntv+*:not(.tp-v-hidden){margin-top:var(--cnt-v-p)}.tp-rotv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-tabv_c .tp-brkv>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-fldv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-rotv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-tabv_c .tp-brkv>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-fldv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv{margin-top:0}.tp-tabv_c .tp-brkv>.tp-cntv,.tp-fldv_c>.tp-cntv{margin-left:4px}.tp-tabv_c .tp-brkv>.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-fldv>.tp-fldv_b{border-top-left-radius:var(--elm-br);border-bottom-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv>.tp-fldv.tp-fldv-expanded>.tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-fldv-expanded>.tp-fldv_b{border-bottom-left-radius:0}.tp-tabv_c .tp-brkv .tp-fldv>.tp-fldv_c,.tp-fldv_c .tp-fldv>.tp-fldv_c{border-bottom-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv>.tp-tabv>.tp-tabv_i,.tp-fldv_c>.tp-tabv>.tp-tabv_i{border-top-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv .tp-tabv>.tp-tabv_c,.tp-fldv_c .tp-tabv>.tp-tabv_c{border-bottom-left-radius:var(--elm-br)}.tp-rotv_b,.tp-fldv_b{background-color:var(--cnt-bg);color:var(--cnt-fg);cursor:pointer;display:block;height:calc(var(--bld-us) + 4px);line-height:calc(var(--bld-us) + 4px);overflow:hidden;padding-left:var(--cnt-h-p);padding-right:calc(4px + var(--bld-us) + var(--cnt-h-p));position:relative;text-align:left;text-overflow:ellipsis;white-space:nowrap;width:100%;transition:border-radius .2s ease-in-out .2s}.tp-rotv_b:hover,.tp-fldv_b:hover{background-color:var(--cnt-bg-h)}.tp-rotv_b:focus,.tp-fldv_b:focus{background-color:var(--cnt-bg-f)}.tp-rotv_b:active,.tp-fldv_b:active{background-color:var(--cnt-bg-a)}.tp-rotv_b:disabled,.tp-fldv_b:disabled{opacity:.5}.tp-rotv_m,.tp-fldv_m{background:linear-gradient(to left, var(--cnt-fg), var(--cnt-fg) 2px, transparent 2px, transparent 4px, var(--cnt-fg) 4px);border-radius:2px;bottom:0;content:"";display:block;height:6px;right:calc(var(--cnt-h-p) + (var(--bld-us) + 4px - 6px)/2 - 2px);margin:auto;opacity:.5;position:absolute;top:0;transform:rotate(90deg);transition:transform .2s ease-in-out;width:6px}.tp-rotv.tp-rotv-expanded .tp-rotv_m,.tp-fldv.tp-fldv-expanded>.tp-fldv_b>.tp-fldv_m{transform:none}.tp-rotv_c,.tp-fldv_c{box-sizing:border-box;height:0;opacity:0;overflow:hidden;padding-bottom:0;padding-top:0;position:relative;transition:height .2s ease-in-out,opacity .2s linear,padding .2s ease-in-out}.tp-rotv.tp-rotv-cpl:not(.tp-rotv-expanded) .tp-rotv_c,.tp-fldv.tp-fldv-cpl:not(.tp-fldv-expanded)>.tp-fldv_c{display:none}.tp-rotv.tp-rotv-expanded .tp-rotv_c,.tp-fldv.tp-fldv-expanded>.tp-fldv_c{opacity:1;padding-bottom:var(--cnt-v-p);padding-top:var(--cnt-v-p);transform:none;overflow:visible;transition:height .2s ease-in-out,opacity .2s linear .2s,padding .2s ease-in-out}.tp-lstv,.tp-coltxtv_m{position:relative}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m,.tp-coltxtv_mm{bottom:0;margin:auto;pointer-events:none;position:absolute;right:2px;top:0}.tp-lstv_m svg,.tp-coltxtv_mm svg{bottom:0;height:16px;margin:auto;position:absolute;right:0;top:0;width:16px}.tp-lstv_m svg path,.tp-coltxtv_mm svg path{fill:currentColor}.tp-pndtxtv,.tp-coltxtv_w{display:flex}.tp-pndtxtv_a,.tp-coltxtv_c{width:100%}.tp-pndtxtv_a+.tp-pndtxtv_a,.tp-coltxtv_c+.tp-pndtxtv_a,.tp-pndtxtv_a+.tp-coltxtv_c,.tp-coltxtv_c+.tp-coltxtv_c{margin-left:2px}.tp-btnv_b{width:100%}.tp-btnv_t{text-align:center}.tp-ckbv_l{display:block;position:relative}.tp-ckbv_i{left:0;opacity:0;position:absolute;top:0}.tp-ckbv_w{background-color:var(--in-bg);border-radius:var(--elm-br);cursor:pointer;display:block;height:var(--bld-us);position:relative;width:var(--bld-us)}.tp-ckbv_w svg{bottom:0;display:block;height:16px;left:0;margin:auto;opacity:0;position:absolute;right:0;top:0;width:16px}.tp-ckbv_w svg path{fill:none;stroke:var(--in-fg);stroke-width:2}.tp-ckbv_i:hover+.tp-ckbv_w{background-color:var(--in-bg-h)}.tp-ckbv_i:focus+.tp-ckbv_w{background-color:var(--in-bg-f)}.tp-ckbv_i:active+.tp-ckbv_w{background-color:var(--in-bg-a)}.tp-ckbv_i:checked+.tp-ckbv_w svg{opacity:1}.tp-ckbv.tp-v-disabled .tp-ckbv_w{opacity:.5}.tp-colv{position:relative}.tp-colv_h{display:flex}.tp-colv_s{flex-grow:0;flex-shrink:0;width:var(--bld-us)}.tp-colv_t{flex:1;margin-left:4px}.tp-colv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-colv.tp-colv-cpl .tp-colv_p{overflow:visible}.tp-colv.tp-colv-expanded .tp-colv_p{margin-top:var(--bld-s);opacity:1}.tp-colv .tp-popv{left:calc(-1*var(--cnt-h-p));right:calc(-1*var(--cnt-h-p));top:var(--bld-us)}.tp-colpv_h,.tp-colpv_ap{margin-left:6px;margin-right:6px}.tp-colpv_h{margin-top:var(--bld-s)}.tp-colpv_rgb{display:flex;margin-top:var(--bld-s);width:100%}.tp-colpv_a{display:flex;margin-top:var(--cnt-v-p);padding-top:calc(var(--cnt-v-p) + 2px);position:relative}.tp-colpv_a:before{background-color:var(--grv-fg);content:"";height:2px;left:calc(-1*var(--cnt-h-p));position:absolute;right:calc(-1*var(--cnt-h-p));top:0}.tp-colpv_ap{align-items:center;display:flex;flex:3}.tp-colpv_at{flex:1;margin-left:4px}.tp-svpv{border-radius:var(--elm-br);outline:none;overflow:hidden;position:relative}.tp-svpv_c{cursor:crosshair;display:block;height:calc(var(--bld-us)*4);width:100%}.tp-svpv_m{border-radius:100%;border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;filter:drop-shadow(0 0 1px rgba(0, 0, 0, 0.3));height:12px;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;width:12px}.tp-svpv:focus .tp-svpv_m{border-color:#fff}.tp-hplv{cursor:pointer;height:var(--bld-us);outline:none;position:relative}.tp-hplv_c{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAABCAYAAABubagXAAAAQ0lEQVQoU2P8z8Dwn0GCgQEDi2OK/RBgYHjBgIpfovFh8j8YBIgzFGQxuqEgPhaDOT5gOhPkdCxOZeBg+IDFZZiGAgCaSSMYtcRHLgAAAABJRU5ErkJggg==);background-position:left top;background-repeat:no-repeat;background-size:100% 100%;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;position:absolute;top:50%;width:100%}.tp-hplv_m{border-radius:var(--elm-br);border:rgba(255,255,255,.75) solid 2px;box-shadow:0 0 2px rgba(0,0,0,.1);box-sizing:border-box;height:12px;left:50%;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;top:50%;width:12px}.tp-hplv:focus .tp-hplv_m{border-color:#fff}.tp-aplv{cursor:pointer;height:var(--bld-us);outline:none;position:relative;width:100%}.tp-aplv_b{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:4px 4px;background-position:0 0,2px 2px;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;overflow:hidden;position:absolute;top:50%;width:100%}.tp-aplv_c{bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv_m{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:12px 12px;background-position:0 0,6px 6px;border-radius:var(--elm-br);box-shadow:0 0 2px rgba(0,0,0,.1);height:12px;left:50%;margin-left:-6px;margin-top:-6px;overflow:hidden;pointer-events:none;position:absolute;top:50%;width:12px}.tp-aplv_p{border-radius:var(--elm-br);border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv:focus .tp-aplv_p{border-color:#fff}.tp-colswv{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:10px 10px;background-position:0 0,5px 5px;border-radius:var(--elm-br);overflow:hidden}.tp-colswv.tp-v-disabled{opacity:.5}.tp-colswv_sw{border-radius:0}.tp-colswv_b{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;border-width:0;cursor:pointer;display:block;height:var(--bld-us);left:0;margin:0;outline:none;padding:0;position:absolute;top:0;width:var(--bld-us)}.tp-colswv_b:focus::after{border:rgba(255,255,255,.75) solid 2px;border-radius:var(--elm-br);bottom:0;content:"";display:block;left:0;position:absolute;right:0;top:0}.tp-coltxtv{display:flex;width:100%}.tp-coltxtv_m{margin-right:4px}.tp-coltxtv_ms{border-radius:var(--elm-br);color:var(--lbl-fg);cursor:pointer;height:var(--bld-us);line-height:var(--bld-us);padding:0 18px 0 4px}.tp-coltxtv_ms:hover{background-color:var(--in-bg-h)}.tp-coltxtv_ms:focus{background-color:var(--in-bg-f)}.tp-coltxtv_ms:active{background-color:var(--in-bg-a)}.tp-coltxtv_mm{color:var(--lbl-fg)}.tp-coltxtv_w{flex:1}.tp-dfwv{position:absolute;top:8px;right:8px;width:256px}.tp-fldv.tp-fldv-not .tp-fldv_b{display:none}.tp-fldv_t{padding-left:4px}.tp-fldv_c{border-left:var(--cnt-bg) solid 4px}.tp-fldv_b:hover+.tp-fldv_c{border-left-color:var(--cnt-bg-h)}.tp-fldv_b:focus+.tp-fldv_c{border-left-color:var(--cnt-bg-f)}.tp-fldv_b:active+.tp-fldv_c{border-left-color:var(--cnt-bg-a)}.tp-grlv{position:relative}.tp-grlv_g{display:block;height:calc(var(--bld-us)*3)}.tp-grlv_g polyline{fill:none;stroke:var(--mo-fg);stroke-linejoin:round}.tp-grlv_t{margin-top:-4px;transition:left .05s,top .05s;visibility:hidden}.tp-grlv_t.tp-grlv_t-a{visibility:visible}.tp-grlv_t.tp-grlv_t-in{transition:none}.tp-grlv.tp-v-disabled .tp-grlv_g{opacity:.5}.tp-grlv .tp-ttv{background-color:var(--mo-fg)}.tp-grlv .tp-ttv::before{border-top-color:var(--mo-fg)}.tp-lblv{align-items:center;display:flex;line-height:1.3;padding-left:var(--cnt-h-p);padding-right:var(--cnt-h-p)}.tp-lblv.tp-lblv-nol{display:block}.tp-lblv_l{color:var(--lbl-fg);flex:1;-webkit-hyphens:auto;-ms-hyphens:auto;hyphens:auto;overflow:hidden;padding-left:4px;padding-right:16px}.tp-lblv.tp-v-disabled .tp-lblv_l{opacity:.5}.tp-lblv.tp-lblv-nol .tp-lblv_l{display:none}.tp-lblv_v{align-self:flex-start;flex-grow:0;flex-shrink:0;width:160px}.tp-lblv.tp-lblv-nol .tp-lblv_v{width:100%}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m{color:var(--btn-fg)}.tp-sglv_i{padding:0 4px}.tp-sglv.tp-v-disabled .tp-sglv_i{opacity:.5}.tp-mllv_i{display:block;height:calc(var(--bld-us)*3);line-height:var(--bld-us);padding:0 4px;resize:none;white-space:pre}.tp-mllv.tp-v-disabled .tp-mllv_i{opacity:.5}.tp-p2dv{position:relative}.tp-p2dv_h{display:flex}.tp-p2dv_b{height:var(--bld-us);margin-right:4px;position:relative;width:var(--bld-us)}.tp-p2dv_b svg{display:block;height:16px;left:50%;margin-left:-8px;margin-top:-8px;position:absolute;top:50%;width:16px}.tp-p2dv_b svg path{stroke:currentColor;stroke-width:2}.tp-p2dv_b svg circle{fill:currentColor}.tp-p2dv_t{flex:1}.tp-p2dv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-p2dv.tp-p2dv-expanded .tp-p2dv_p{margin-top:var(--bld-s);opacity:1}.tp-p2dv .tp-popv{left:calc(-1*var(--cnt-h-p));right:calc(-1*var(--cnt-h-p));top:var(--bld-us)}.tp-p2dpv{padding-left:calc(var(--bld-us) + 4px)}.tp-p2dpv_p{cursor:crosshair;height:0;overflow:hidden;padding-bottom:100%;position:relative}.tp-p2dpv_g{display:block;height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}.tp-p2dpv_ax{opacity:.1;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_l{opacity:.5;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_m{border:var(--in-fg) solid 1px;border-radius:50%;box-sizing:border-box;height:4px;margin-left:-2px;margin-top:-2px;position:absolute;width:4px}.tp-p2dpv_p:focus .tp-p2dpv_m{background-color:var(--in-fg);border-width:0}.tp-popv{background-color:var(--bs-bg);border-radius:6px;box-shadow:0 2px 4px var(--bs-sh);display:none;max-width:168px;padding:var(--cnt-v-p) var(--cnt-h-p);position:absolute;visibility:hidden;z-index:1000}.tp-popv.tp-popv-v{display:block;visibility:visible}.tp-sprv_r{background-color:var(--grv-fg);border-width:0;display:block;height:2px;margin:0;width:100%}.tp-sldv.tp-v-disabled{opacity:.5}.tp-sldv_t{box-sizing:border-box;cursor:pointer;height:var(--bld-us);margin:0 6px;outline:none;position:relative}.tp-sldv_t::before{background-color:var(--in-bg);border-radius:1px;bottom:0;content:"";display:block;height:2px;left:0;margin:auto;position:absolute;right:0;top:0}.tp-sldv_k{height:100%;left:0;position:absolute;top:0}.tp-sldv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";display:block;height:2px;left:0;margin-bottom:auto;margin-top:auto;position:absolute;right:0;top:0}.tp-sldv_k::after{background-color:var(--btn-bg);border-radius:var(--elm-br);bottom:0;content:"";display:block;height:12px;margin-bottom:auto;margin-top:auto;position:absolute;right:-6px;top:0;width:12px}.tp-sldv_t:hover .tp-sldv_k::after{background-color:var(--btn-bg-h)}.tp-sldv_t:focus .tp-sldv_k::after{background-color:var(--btn-bg-f)}.tp-sldv_t:active .tp-sldv_k::after{background-color:var(--btn-bg-a)}.tp-sldtxtv{display:flex}.tp-sldtxtv_s{flex:2}.tp-sldtxtv_t{flex:1;margin-left:4px}.tp-tabv.tp-v-disabled{opacity:.5}.tp-tabv_i{align-items:flex-end;display:flex;overflow:hidden}.tp-tabv.tp-tabv-nop .tp-tabv_i{height:calc(var(--bld-us) + 4px);position:relative}.tp-tabv.tp-tabv-nop .tp-tabv_i::before{background-color:var(--cnt-bg);bottom:0;content:"";height:2px;left:0;position:absolute;right:0}.tp-tabv_c{border-left:var(--cnt-bg) solid 4px;padding-bottom:var(--cnt-v-p);padding-top:var(--cnt-v-p)}.tp-tbiv{flex:1;min-width:0;position:relative}.tp-tbiv+.tp-tbiv{margin-left:2px}.tp-tbiv+.tp-tbiv::before{background-color:var(--cnt-bg);bottom:0;content:"";height:2px;left:-2px;position:absolute;width:2px}.tp-tbiv_b{background-color:var(--cnt-bg);display:block;padding-left:calc(var(--cnt-h-p) + 4px);padding-right:calc(var(--cnt-h-p) + 4px);width:100%}.tp-tbiv_b:hover{background-color:var(--cnt-bg-h)}.tp-tbiv_b:focus{background-color:var(--cnt-bg-f)}.tp-tbiv_b:active{background-color:var(--cnt-bg-a)}.tp-tbiv_b:disabled{opacity:.5}.tp-tbiv_t{color:var(--cnt-fg);height:calc(var(--bld-us) + 4px);line-height:calc(var(--bld-us) + 4px);opacity:.5;overflow:hidden;text-overflow:ellipsis}.tp-tbiv.tp-tbiv-sel .tp-tbiv_t{opacity:1}.tp-txtv{position:relative}.tp-txtv_i{padding:0 4px}.tp-txtv.tp-txtv-fst .tp-txtv_i{border-bottom-right-radius:0;border-top-right-radius:0}.tp-txtv.tp-txtv-mid .tp-txtv_i{border-radius:0}.tp-txtv.tp-txtv-lst .tp-txtv_i{border-bottom-left-radius:0;border-top-left-radius:0}.tp-txtv.tp-txtv-num .tp-txtv_i{text-align:right}.tp-txtv.tp-txtv-drg .tp-txtv_i{opacity:.3}.tp-txtv_k{cursor:pointer;height:100%;left:-3px;position:absolute;top:0;width:12px}.tp-txtv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";height:calc(var(--bld-us) - 4px);left:50%;margin-bottom:auto;margin-left:-1px;margin-top:auto;opacity:.1;position:absolute;top:0;transition:border-radius .1s,height .1s,transform .1s,width .1s;width:2px}.tp-txtv_k:hover::before,.tp-txtv.tp-txtv-drg .tp-txtv_k::before{opacity:1}.tp-txtv.tp-txtv-drg .tp-txtv_k::before{border-radius:50%;height:4px;transform:translateX(-1px);width:4px}.tp-txtv_g{bottom:0;display:block;height:8px;left:50%;margin:auto;overflow:visible;pointer-events:none;position:absolute;top:0;visibility:hidden;width:100%}.tp-txtv.tp-txtv-drg .tp-txtv_g{visibility:visible}.tp-txtv_gb{fill:none;stroke:var(--in-fg);stroke-dasharray:1}.tp-txtv_gh{fill:none;stroke:var(--in-fg)}.tp-txtv .tp-ttv{margin-left:6px;visibility:hidden}.tp-txtv.tp-txtv-drg .tp-ttv{visibility:visible}.tp-ttv{background-color:var(--in-fg);border-radius:var(--elm-br);color:var(--bs-bg);padding:2px 4px;pointer-events:none;position:absolute;transform:translate(-50%, -100%)}.tp-ttv::before{border-color:var(--in-fg) transparent transparent transparent;border-style:solid;border-width:2px;box-sizing:border-box;content:"";font-size:.9em;height:4px;left:50%;margin-left:-2px;position:absolute;top:100%;width:4px}.tp-rotv{background-color:var(--bs-bg);border-radius:var(--bs-br);box-shadow:0 2px 4px var(--bs-sh);font-family:var(--font-family);font-size:11px;font-weight:500;line-height:1;text-align:left}.tp-rotv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br);border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br);padding-left:calc(4px + var(--bld-us) + var(--cnt-h-p));text-align:center}.tp-rotv.tp-rotv-expanded .tp-rotv_b{border-bottom-left-radius:0;border-bottom-right-radius:0}.tp-rotv.tp-rotv-not .tp-rotv_b{display:none}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_c,.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c .tp-fldv.tp-v-vlst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-right-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst{margin-top:calc(-1*var(--cnt-v-p))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst>.tp-fldv_b{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst{margin-top:calc(-1*var(--cnt-v-p))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst>.tp-tabv_i{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv.tp-v-disabled,.tp-rotv .tp-v-disabled{pointer-events:none}.tp-rotv.tp-v-hidden,.tp-rotv .tp-v-hidden{display:none}'),this.pool_.getAll().forEach(s=>{this.embedPluginStyle_(s)}),this.registerPlugin({plugins:[sv,tv,Vn,ov]})}}const cv=new n("3.1.0");e.BladeApi=r,e.ButtonApi=_,e.FolderApi=Le,e.InputBindingApi=O,e.ListApi=ju,e.MonitorBindingApi=lt,e.Pane=lv,e.SeparatorApi=Y,e.SliderApi=Yu,e.TabApi=De,e.TabPageApi=Ke,e.TextApi=$u,e.TpChangeEvent=a,e.VERSION=cv,Object.defineProperty(e,"__esModule",{value:!0})})})(_c,_c.exports);var xc={d:(i,t)=>{for(var e in t)xc.o(t,e)&&!xc.o(i,e)&&Object.defineProperty(i,e,{enumerable:!0,get:t[e]})},o:(i,t)=>Object.prototype.hasOwnProperty.call(i,t)},nf={};xc.d(nf,{Q:()=>dM});var Kl=function(i,t,e,n){return new(e||(e=Promise))(function(r,o){function a(d){try{h(n.next(d))}catch(p){o(p)}}function c(d){try{h(n.throw(d))}catch(p){o(p)}}function h(d){var p;d.done?r(d.value):(p=d.value,p instanceof e?p:new e(function(f){f(p)})).then(a,c)}h((n=n.apply(i,t||[])).next())})};const rf=Symbol("Comlink.proxy"),cM=Symbol("Comlink.endpoint"),uM=Symbol("Comlink.releaseProxy"),bc=Symbol("Comlink.thrown"),tp=i=>typeof i=="object"&&i!==null||typeof i=="function",sf=new Map([["proxy",{canHandle:i=>tp(i)&&i[rf],serialize(i){const{port1:t,port2:e}=new MessageChannel;return of(i,t),[e,[e]]},deserialize:i=>(i.start(),lf(i))}],["throw",{canHandle:i=>tp(i)&&bc in i,serialize({value:i}){let t;return t=i instanceof Error?{isError:!0,value:{message:i.message,name:i.name,stack:i.stack}}:{isError:!1,value:i},[t,[]]},deserialize(i){throw i.isError?Object.assign(new Error(i.value.message),i.value):i.value}}]]);function of(i,t=self){t.addEventListener("message",function e(n){if(!n||!n.data)return;const{id:r,type:o,path:a}=Object.assign({path:[]},n.data),c=(n.data.argumentList||[]).map(Ji);let h;try{const d=a.slice(0,-1).reduce((f,m)=>f[m],i),p=a.reduce((f,m)=>f[m],i);switch(o){case"GET":h=p;break;case"SET":d[a.slice(-1)[0]]=Ji(n.data.value),h=!0;break;case"APPLY":h=p.apply(d,c);break;case"CONSTRUCT":h=oa(new p(...c));break;case"ENDPOINT":{const{port1:f,port2:m}=new MessageChannel;of(i,m),h=function(x,b){return cf.set(x,b),x}(f,[f])}break;case"RELEASE":h=void 0;break;default:return}}catch(d){h={value:d,[bc]:0}}Promise.resolve(h).catch(d=>({value:d,[bc]:0})).then(d=>{const[p,f]=zc(d);t.postMessage(Object.assign(Object.assign({},p),{id:r}),f),o==="RELEASE"&&(t.removeEventListener("message",e),af(t))})}),t.start&&t.start()}function af(i){(function(t){return t.constructor.name==="MessagePort"})(i)&&i.close()}function lf(i,t){return yc(i,[],t)}function na(i){if(i)throw new Error("Proxy has been released and is not useable")}function yc(i,t=[],e=function(){}){let n=!1;const r=new Proxy(e,{get(o,a){if(na(n),a===uM)return()=>Gr(i,{type:"RELEASE",path:t.map(c=>c.toString())}).then(()=>{af(i),n=!0});if(a==="then"){if(t.length===0)return{then:()=>r};const c=Gr(i,{type:"GET",path:t.map(h=>h.toString())}).then(Ji);return c.then.bind(c)}return yc(i,[...t,a])},set(o,a,c){na(n);const[h,d]=zc(c);return Gr(i,{type:"SET",path:[...t,a].map(p=>p.toString()),value:h},d).then(Ji)},apply(o,a,c){na(n);const h=t[t.length-1];if(h===cM)return Gr(i,{type:"ENDPOINT"}).then(Ji);if(h==="bind")return yc(i,t.slice(0,-1));const[d,p]=ep(c);return Gr(i,{type:"APPLY",path:t.map(f=>f.toString()),argumentList:d},p).then(Ji)},construct(o,a){na(n);const[c,h]=ep(a);return Gr(i,{type:"CONSTRUCT",path:t.map(d=>d.toString()),argumentList:c},h).then(Ji)}});return r}function ep(i){const t=i.map(zc);return[t.map(n=>n[0]),(e=t.map(n=>n[1]),Array.prototype.concat.apply([],e))];var e}const cf=new WeakMap;function oa(i){return Object.assign(i,{[rf]:!0})}function zc(i){for(const[t,e]of sf)if(e.canHandle(i)){const[n,r]=e.serialize(i);return[{type:"HANDLER",name:t,value:n},r]}return[{type:"RAW",value:i},cf.get(i)||[]]}function Ji(i){switch(i.type){case"HANDLER":return sf.get(i.name).deserialize(i.value);case"RAW":return i.value}}function Gr(i,t,e){return new Promise(n=>{const r=new Array(4).fill(0).map(()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16)).join("-");i.addEventListener("message",function o(a){a.data&&a.data.id&&a.data.id===r&&(i.removeEventListener("message",o),n(a.data))}),i.start&&i.start(),i.postMessage(Object.assign({id:r},t),e)})}class hM extends class{}{init(t,e,n,r){if(!this.api){if(!r)throw new Error("workerFilePath is required");(()=>{var o,a,c,h;o=this,a=void 0,h=function*(){const d=yield fetch(r).then(m=>m.blob()),p=URL.createObjectURL(d),f=new Worker(p,{type:"module"});this.api=yield new(lf(f))(oa(()=>{t(),URL.revokeObjectURL(p)}),oa((m,x)=>m==="xatlas_web.wasm"?n:m+x),oa(e))},new((c=void 0)||(c=Promise))(function(d,p){function f(b){try{x(h.next(b))}catch(w){p(w)}}function m(b){try{x(h.throw(b))}catch(w){p(w)}}function x(b){var w;b.done?d(b.value):(w=b.value,w instanceof c?w:new c(function(_){_(w)})).then(f,m)}x((h=h.apply(o,a||[])).next())})})()}}}class dM extends class{constructor(t,e={resolution:2048},n={},r=!1,o=!1,a=!1){this.THREE=t,this.packOptions=e,this.chartOptions=n,this.useNormals=r,this.timeUnwrap=o,this.logProgress=a,this._libraryLoaded=!1,this._isUnwrapping=!1,this.xAtlas=this._createXAtlas()}loadLibrary(t,e,n){return Kl(this,void 0,void 0,function*(){if(!this._libraryLoaded){for(yield new Promise((r,o)=>{try{this.xAtlas.init(()=>{r()},t,e,n)}catch(a){o(a)}});!this.xAtlas.api||!(yield this.xAtlas.api.loaded);)yield new Promise(r=>setTimeout(r,100));this._libraryLoaded=!0}})}packAtlas(t,e="uv2",n="uv"){return Kl(this,void 0,void 0,function*(){if(!this._libraryLoaded)return console.warn("xatlas-three: library not loaded"),[];if(!t)return[];if(t.length<1)return[];const r=this.chartOptions.useInputMeshUvs;for(;this._isUnwrapping;)console.log("xatlas-three: unwrapping another mesh, waiting 100 ms"),yield new Promise(d=>setTimeout(d,100));this._isUnwrapping=!0,yield this.xAtlas.api.setProgressLogging(this.logProgress),yield this.xAtlas.api.createAtlas();let o=[],a="";for(let d of t){let{uuid:p,index:f,attributes:m}=d;const x=d.userData.worldScale||1;o.push(p),f&&m.position&&m.position.itemSize===3?(a="Mesh"+o.length+" added to atlas: "+p,this.timeUnwrap&&console.time(a),yield this.xAtlas.api.addMesh(f.array,m.position.array,m.normal?m.normal.array:void 0,m.uv?m.uv.array:void 0,p,this.useNormals,r,x),this.timeUnwrap&&console.timeEnd(a)):console.warn("xatlas-three: Geometry not supported: ",d)}a="Generated atlas with "+o.length+" meshes",this.timeUnwrap&&console.time(a);let c=yield this.xAtlas.api.generateAtlas(this.chartOptions,this.packOptions,!0);this.timeUnwrap&&console.timeEnd(a);let h=[];for(let d of c){let p=t.find(f=>f.uuid===d.mesh);p?(d.vertex.vertices&&p.setAttribute("position",new this.THREE.BufferAttribute(d.vertex.vertices,3,!1)),d.vertex.normals&&p.setAttribute("normal",new this.THREE.BufferAttribute(d.vertex.normals,3,!0)),d.vertex.coords1&&p.setAttribute(e,new this.THREE.BufferAttribute(d.vertex.coords1,2,!1)),d.vertex.coords&&e!==n&&p.setAttribute(n,new this.THREE.BufferAttribute(d.vertex.coords,2,!1)),d.index&&p.setIndex(new this.THREE.BufferAttribute(d.index,1,!1)),h.push(p)):console.error("xatlas-three: Mesh not found: ",d.mesh)}return yield this.xAtlas.api.destroyAtlas(),this._isUnwrapping=!1,h})}unwrapGeometry(t,e="uv",n="uv2"){return Kl(this,void 0,void 0,function*(){return this.packAtlas([t],e,n)})}}{_createXAtlas(){return new hM}}var pM=nf.Q;const aa=new pM({BufferAttribute:en});var uf=(i=>(i[i.AddMesh=0]="AddMesh",i[i.ComputeCharts=1]="ComputeCharts",i[i.PackCharts=2]="PackCharts",i[i.BuildOutputMeshes=3]="BuildOutputMeshes",i))(uf||{});const fM=async()=>{const i=(t,e)=>{console.log(`\u{1F5FA}\uFE0F XAtlas ${uf[t]} ${e}%`)};await aa.loadLibrary(i,"https://cdn.jsdelivr.net/npm/xatlasjs@0.1.0/dist/xatlas.wasm","https://cdn.jsdelivr.net/npm/xatlasjs@0.1.0/dist/xatlas.js"),console.log("Loaded")},mM=async i=>{const t=i.map(e=>e.geometry);aa.packOptions.padding=16,aa.packOptions.resolution=4096,await aa.packAtlas(t,"uv2","uv")},gM=`
    uniform vec2 offset;
    attribute vec2 uv2;
    varying vec4 vWorldPosition;

    void main() {
        vWorldPosition = modelMatrix * vec4(position, 1.0) ;

        gl_Position = vec4((uv2 + offset) * 2.0 - 1.0, 0.0, 1.0); 
    }
`,vM=`
    varying vec4 vWorldPosition;

    void main() {
        gl_FragColor = vWorldPosition;
    }
`,_M=new rn({vertexShader:gM,fragmentShader:vM,side:mn,fog:!1,uniforms:{offset:new Aa(new It(0,0))}}),xM=`
    varying vec4 vNormal;
    attribute vec2 uv2;
    uniform vec2 offset;

    void main() {
        vNormal = modelMatrix * vec4(normal, 0.0);

        gl_Position = vec4((uv2 + offset) * 2.0 - 1.0, 0.0, 1.0);
    }
`,bM=`
    varying vec4 vWorldPosition; 
    varying vec4 vNormal;

    void main() {
        gl_FragColor = normalize(vNormal);
    }
`,yM=new rn({vertexShader:xM,fragmentShader:bM,side:mn,fog:!1,uniforms:{offset:new Aa(new It(0,0))}}),wM=[{x:-2,y:-2},{x:2,y:-2},{x:-2,y:2},{x:2,y:2},{x:-1,y:-2},{x:1,y:-2},{x:-2,y:-1},{x:2,y:-1},{x:-2,y:1},{x:2,y:1},{x:-1,y:2},{x:1,y:2},{x:-2,y:0},{x:2,y:0},{x:0,y:-2},{x:0,y:2},{x:-1,y:-1},{x:1,y:-1},{x:-1,y:0},{x:1,y:0},{x:-1,y:1},{x:1,y:1},{x:0,y:-1},{x:0,y:1},{x:0,y:0}],EM=(i,t,e,n=!0)=>{const r=c=>{const h=new In(e,e,{type:ge,magFilter:pe,minFilter:pe}),d=new or(-100,100,-100,100,-100,200);d.updateMatrix();const p=new Ue;p.matrixWorldAutoUpdate=!1;for(const f of t){const m=f.clone();m.material=c,p.add(m)}if(i.autoClear=!1,i.setRenderTarget(h),i.setClearColor(0,0),i.clear(),n)for(const f of wM)c.uniforms.offset.value.x=f.x*(1/e),c.uniforms.offset.value.y=f.y*(1/e),i.render(p,d);return c.uniforms.offset.value.x=0,c.uniforms.offset.value.y=0,i.render(p,d),i.setRenderTarget(null),h.texture},o=r(_M),a=r(yM);return{positionTexture:o,normalTexture:a}};class MM extends rn{constructor(t){const e=new WE;e.updateFrom(t.bvh),super({transparent:!0,glslVersion:pa,depthTest:!1,depthWrite:!1,uniforms:{bvh:{value:e},positions:{value:t.positions},normals:{value:t.normals},albedoTex:{value:t.albedoTex},emissiveTex:{value:t.emissiveTex},materialTextureSize:{value:t.materialTextureSize},invModelMatrix:{value:t.invModelMatrix},casts:{value:t.casts},lightPosition:{value:t.lightPosition},lightSize:{value:t.lightSize},lightColor:{value:t.lightColor},lightIntensity:{value:t.lightIntensity},skyColor:{value:t.skyColor},skyIntensity:{value:t.skyIntensity},opacity:{value:1},sampleIndex:{value:0},directLightEnabled:{value:t.directLightEnabled},indirectLightEnabled:{value:t.indirectLightEnabled},ambientLightEnabled:{value:t.ambientLightEnabled},ambientDistance:{value:t.ambientDistance}},vertexShader:`
                out vec2 vUv;
                void main() {
                    gl_Position = vec4( position, 1.0 );
                    vUv = uv;
                }
            `,fragmentShader:`
                precision highp float;
                precision highp sampler2D;
                precision highp isampler2D;
                precision highp usampler2D;
                ${KE}
                ${ZE}

                uniform mat4 invModelMatrix;
                uniform sampler2D positions;
                uniform sampler2D normals;

                // Per-triangle material lookup tables (Task 03).
                // Indexed by global triangle index (faceIndices.w from BVH hit).
                // Coordinate: triIdx -> (triIdx % W, triIdx / W) on a W\xD7W square.
                uniform sampler2D albedoTex;
                uniform sampler2D emissiveTex;
                uniform float materialTextureSize;

                uniform int casts;

                uniform vec3 lightPosition;
                uniform float lightSize;
                uniform vec3 lightColor;
                uniform float lightIntensity;
                // giIntensity uniform removed \u2014 Phase A.3 applies it in CompositeMaterial.
                uniform vec3 skyColor;
                uniform float skyIntensity;
                uniform int sampleIndex;

                uniform bool directLightEnabled;
                uniform bool indirectLightEnabled;
                uniform bool ambientLightEnabled;
                uniform float ambientDistance;
                uniform float opacity;

                uniform BVH bvh;
                in vec2 vUv;

                layout(location = 0) out vec4 directOut;
                layout(location = 1) out vec4 indirectOut;
                layout(location = 2) out vec4 aoOut;

                /**
                 * Look up a triangle's material color from a square material texture.
                 * Will be called from the hit branch of the bounce loop in Task 04.
                 *
                 * triIdx == faceIndices.w returned by bvhIntersectFirstHit.
                 */
                vec3 readTriangleMaterial(sampler2D tex, uint triIdx) {
                    uint W = uint(materialTextureSize);
                    uint x = triIdx % W;
                    uint y = triIdx / W;
                    vec2 uv = (vec2(x, y) + 0.5) / materialTextureSize;
                    return texture(tex, uv).rgb;
                }

                uvec4 s0;
                void rng_initialize(vec2 p, int frame) {
                    // white noise seed
                    s0 = uvec4( uint(p.x), uint(p.y), uint( frame ), uint( p.x ) + uint( p.y ) );
                }

                void pcg4d( inout uvec4 v ) {
                    v = v * 1664525u + 1013904223u;
                    v.x += v.y * v.w;
                    v.y += v.z * v.x;
                    v.z += v.x * v.y;
                    v.w += v.y * v.z;
                    v = v ^ ( v >> 16u );
                    v.x += v.y*v.w;
                    v.y += v.z*v.x;
                    v.z += v.x*v.y;
                    v.w += v.y*v.z;
                }

                float rand() {
                    pcg4d(s0);
                    return float( s0.x ) / float( 0xffffffffu );
                }
                vec2 rand2() {
                    pcg4d( s0 );
                    return vec2( s0.xy ) / float(0xffffffffu);
                }
                vec3 rand3() {
                    pcg4d(s0);
                    return vec3( s0.xyz ) / float( 0xffffffffu );
                }
                vec4 rand4() {
                    pcg4d(s0);
                    return vec4(s0)/float(0xffffffffu);
                }

                vec3 randomSpherePoint(vec3 rand) {
                    float ang1 = (rand.x + 1.0) * 3.1415; // [-1..1) -> [0..2*PI)
                    float u = rand.y; // [-1..1), cos and acos(2v-1) cancel each other out, so we arrive at [-1..1)
                    float u2 = u * u;
                    float sqrt1MinusU2 = sqrt(1.0 - u2);
                    float x = sqrt1MinusU2 * cos(ang1);
                    float y = sqrt1MinusU2 * sin(ang1);
                    float z = u;
                    return vec3(x, y, z);
                  }

                  vec3 getHemisphereSample( vec3 n, vec2 uv ) {
                    // https://www.rorydriscoll.com/2009/01/07/better-sampling/
                    // https://graphics.pixar.com/library/OrthonormalB/paper.pdf
                    float s = n.z == 0.0 ? 1.0 : sign( n.z );
                    float a = - 1.0 / ( s + n.z );
                    float b = n.x * n.y * a;
                    vec3 b1 = vec3( 1.0 + s * n.x * n.x * a, s * b, - s * n.x );
                    vec3 b2 = vec3( b, s + n.y * n.y * a, - n.y );
                    float r = sqrt( uv.x );
                    float theta = 2.0 * 3.1415 * uv.y;
                    float x = r * cos( theta );
                    float y = r * sin( theta );
                    return x * b1 + y * b2 + sqrt( 1.0 - uv.x ) * n;
                }

                void main() {
                    vec4 position = texture(positions, vUv);
                    vec4 normal = texture(normals, vUv);

                    rng_initialize( gl_FragCoord.xy, sampleIndex );

                    vec3 rayOrigin = vec3(position.r, position.g, position.b);
                    vec3 rayDirection = vec3(normal.r, normal.g, normal.b);

                    rayOrigin += rayDirection * 0.001;

                    uvec4 faceIndices = uvec4( 0u );
                    vec3 faceNormal = vec3( 0.0, 0.0, 1.0 );
                    vec3 barycoord = vec3( 0.0 );
                    float side = 1.0;
                    float dist = 0.0;

                    vec3 totalIndirectLight = vec3(0.0);
                    float totalAO = 0.0;
                    vec3 totalDirectLight = vec3(0.0);

                    if(ambientLightEnabled || indirectLightEnabled) {
                        for ( int i = 0; i < casts; i++ ) {
                            vec3 newDirection = getHemisphereSample(normal.xyz, rand4().xy);

                            if(dot(rayDirection, newDirection) > 0.0) {
                                bool hit = bvhIntersectFirstHit( bvh, rayOrigin, newDirection, faceIndices, faceNormal, barycoord, side, dist );

                                // Task 04 \u2014 1-bounce GI on the indirect channel.
                                //   miss: contribute skyColor*skyIntensity (0 by default = closed scene).
                                //   hit:  (a) emissive direct visibility, cos\u03B8/PDF cancels, so += hitEmissive.
                                //         (b) NEE shadow ray to lightPosition for albedo-tinted color bleed.
                                if (indirectLightEnabled && !hit) {
                                    totalIndirectLight += skyColor * skyIntensity;
                                }
                                if (indirectLightEnabled && hit) {
                                    vec3 hitAlbedo   = readTriangleMaterial(albedoTex,   faceIndices.w);
                                    vec3 hitEmissive = readTriangleMaterial(emissiveTex, faceIndices.w);

                                    totalIndirectLight += hitEmissive;

                                    vec3 hitPos    = rayOrigin + newDirection * dist;
                                    // three-mesh-bvh internally does norm = side * normalize(norm)
                                    // so faceNormal is ALREADY flipped to face the ray origin.
                                    // Re-flipping here would push shadowOrigin INTO the surface
                                    // and kill backface NEE contributions (ceiling, sphere
                                    // interior, knot, ...).
                                    vec3 hitNormal = faceNormal;
                                    vec3 shadowOrigin = hitPos + hitNormal * 0.001;

                                    vec3  toLight     = lightPosition - shadowOrigin;
                                    float distToLight = length(toLight);
                                    vec3  L           = toLight / distToLight;
                                    float cosL        = max(0.0, dot(hitNormal, L));

                                    if (cosL > 0.0) {
                                        uvec4 sFaceIndices = uvec4(0u);
                                        vec3  sFaceNormal  = vec3(0.0, 0.0, 1.0);
                                        vec3  sBary        = vec3(0.0);
                                        float sSide        = 1.0;
                                        float sDist        = 0.0;
                                        bool shadowHit = bvhIntersectFirstHit(
                                            bvh, shadowOrigin, L,
                                            sFaceIndices, sFaceNormal, sBary, sSide, sDist );

                                        // Light visible if nothing blocks before the light position.
                                        if (!shadowHit || sDist >= distToLight - 0.001) {
                                            // Energy-balance hack: the direct loop adds
                                            //   lightColor*lightIntensity
                                            // per visible cast WITHOUT a matching cos/PI at the
                                            // receiver, so a strict Lambertian BRDF (albedo/PI * cos)
                                            // on the bounce is ~PI x dimmer than direct under the
                                            // 0.5 mix - colour bleed becomes invisible. Keeping
                                            // cos(N_hit . L) (geometrically meaningful) but
                                            // dropping 1/PI puts both channels on the same order
                                            // of magnitude. giIntensity then provides fine control.
                                            totalIndirectLight += hitAlbedo * cosL * lightColor * lightIntensity;
                                        }
                                    }
                                }

                                if (ambientLightEnabled) {
                                    if(!hit) {
                                        totalAO += 1.0;
                                    } else {
                                        // Smooth AO falloff: 0.0 at contact, 1.0 at ambientDistance
                                        totalAO += clamp(dist / ambientDistance, 0.0, 1.0);
                                    }
                                }
                            }
                        }
                    }

                    if(directLightEnabled) {
                        for ( int i = 0; i < casts; i++ ) {
                            vec3  toLight     = lightPosition - rayOrigin;
                            float distToLight = length(toLight);
                            // Jittered sampling for soft shadows
                            vec3  L           = normalize(toLight + randomSpherePoint(rand3()) * lightSize);
                            
                            float dotNL = dot(normal.xyz, L);
                            // L.y > 0 ensures the light only emits "downward" (one-sided plane logic)
                            if (dotNL > 0.0 && L.y > 0.0) {
                                bool hit = bvhIntersectFirstHit( bvh, rayOrigin, L, faceIndices, faceNormal, barycoord, side, dist );

                                if(!hit || dist >= distToLight - 0.01) {
                                    // Apply Lambertian N.L falloff for 3D depth
                                    totalDirectLight += lightColor * lightIntensity * dotNL;
                                }
                            }
                        }
                    }

                    vec4 adverageDirectLight = vec4(totalDirectLight / float(casts), 1.0);
                    vec4 adverageAO = vec4(vec3(totalAO / float(casts)), 1.0);
                    // Raw indirect \u2014 giIntensity moved to CompositeMaterial (Phase A.3 view-time composite).
                    vec4 adverageIndirectLight = vec4(totalIndirectLight / float(casts), 1.0);

                    // MRT outputs \u2014 each channel written independently.
                    // Compositing (multiplier, AO multiply) moves to Phase A.3 CompositeMaterial.
                    directOut   = directLightEnabled   ? vec4(adverageDirectLight.rgb,   opacity)
                                                       : vec4(0.0, 0.0, 0.0, opacity);
                    indirectOut = indirectLightEnabled  ? vec4(adverageIndirectLight.rgb, opacity)
                                                       : vec4(0.0, 0.0, 0.0, opacity);
                    aoOut       = ambientLightEnabled   ? vec4(adverageAO.rgb,            opacity)
                                                       : vec4(0.0, 0.0, 0.0, opacity);
                }
            `})}}const SM=(i,t,e,n,r)=>{const o=new MM({bvh:n,invModelMatrix:new ue().identity(),positions:t,normals:e,albedoTex:r.albedoTexture,emissiveTex:r.emissiveTexture,materialTextureSize:r.materialTextureSize,casts:r.casts,lightPosition:r.lightPosition,lightSize:r.lightSize,lightColor:r.lightColor,lightIntensity:r.lightIntensity,skyColor:r.skyColor,skyIntensity:r.skyIntensity,opacity:1,sampleIndex:0,directLightEnabled:r.directLightEnabled,indirectLightEnabled:r.indirectLightEnabled,ambientLightEnabled:r.ambientLightEnabled,ambientDistance:r.ambientDistance}),a=new T_(r.resolution,r.resolution,3,{type:ge,minFilter:Ie,magFilter:Ie,generateMipmaps:!1});i.setRenderTarget(a),i.setClearColor(0,0),i.clear();const c=new ft(new kn(2,2),o),h=new or;let d=0;const p=r.targetSamples|0,f=()=>{if(p>0&&d>=p)return{samples:d,done:!0};const w=i.autoClear;return i.autoClear=!1,i.setRenderTarget(a),o.uniforms.sampleIndex.value=d,o.uniforms.opacity.value=1/(d+1),i.render(c,h),i.setRenderTarget(null),i.autoClear=w,d++,{samples:d,done:p>0&&d>=p}},m=()=>{d=0},x=()=>{a.dispose(),o.dispose(),c.geometry.dispose()};i.setRenderTarget(null);const b={direct:a.texture[0],indirect:a.texture[1],ao:a.texture[2]};return{renderTarget:a,textures:b,render:f,reset:m,dispose:x,get renderTexture(){return a},get texture(){return b.direct}}};class TM extends rn{constructor(t){super({glslVersion:pa,transparent:!1,depthWrite:!1,depthTest:!1,uniforms:{directTex:{value:t.directTex},indirectTex:{value:t.indirectTex},aoTex:{value:t.aoTex},directIntensity:{value:t.directIntensity},giIntensity:{value:t.giIntensity},aoEnabled:{value:t.aoEnabled}},vertexShader:`
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
                    lit = pow(lit, vec3(1.0 / 1.1)); 
                    
                    outColor = vec4(lit, 1.0);
                }
            `})}}const AM=(i,t,e,n)=>{const r=new In(e,e,{type:ge,minFilter:Cc,magFilter:Ie,generateMipmaps:!0}),o=new TM({directTex:t.direct,indirectTex:t.indirect,aoTex:t.ao,directIntensity:n.directIntensity,giIntensity:n.giIntensity,aoEnabled:n.aoEnabled}),a=new ft(new kn(2,2),o),c=new or,h=d=>{(d==null?void 0:d.directIntensity)!==void 0&&(o.uniforms.directIntensity.value=d.directIntensity),(d==null?void 0:d.giIntensity)!==void 0&&(o.uniforms.giIntensity.value=d.giIntensity),(d==null?void 0:d.aoEnabled)!==void 0&&(o.uniforms.aoEnabled.value=d.aoEnabled);const p=i.getRenderTarget(),f=i.autoClear;i.autoClear=!0,i.setRenderTarget(r),i.render(a,c),i.setRenderTarget(p),i.autoClear=f};return h(),{texture:r.texture,refresh:h,dispose:()=>{r.dispose(),o.dispose(),a.geometry.dispose()}}};class CM extends rn{constructor(t={}){var e,n,r;super({blending:Dn,transparent:!1,depthWrite:!1,depthTest:!1,uniforms:{map:{value:(e=t.map)!=null?e:null},positions:{value:(n=t.positions)!=null?n:null},resolution:{value:(r=t.resolution)!=null?r:1024}},vertexShader:`
                varying vec2 vUv;
                void main() {
                    vUv = uv;
                    gl_Position = vec4(position, 1.0);
                }
            `,fragmentShader:`
                uniform sampler2D map;
                uniform sampler2D positions;
                uniform float resolution;
                varying vec2 vUv;

                void main() {
                    vec4 here = texture2D(map, vUv);
                    float chart = texture2D(positions, vUv).a;

                    // Inside a chart \u2014 pass through.
                    if (chart > 0.0) {
                        gl_FragColor = here;
                        return;
                    }

                    // Outside chart: average non-empty 3x3 neighbours.
                    float texel = 1.0 / resolution;
                    vec3 sum = vec3(0.0);
                    float n = 0.0;
                    for (int dy = -1; dy <= 1; dy++) {
                        for (int dx = -1; dx <= 1; dx++) {
                            if (dx == 0 && dy == 0) continue;
                            vec2 uv2 = vUv + vec2(float(dx), float(dy)) * texel;
                            vec4 s = texture2D(map, uv2);
                            // "non-empty" = either inside the chart or already dilated.
                            float w = step(1e-6, s.r + s.g + s.b);
                            sum += s.rgb * w;
                            n   += w;
                        }
                    }
                    gl_FragColor = n > 0.0
                        ? vec4(sum / n, here.a)
                        : here;
                }
            `})}}class PM extends rn{constructor(t){super(t);for(const e in this.uniforms)Object.defineProperty(this,e,{get(){return this.uniforms[e].value},set(n){this.uniforms[e].value=n}})}setDefine(t,e=void 0){e==null?t in this.defines&&(delete this.defines[t],this.needsUpdate=!0):this.defines[t]!==e&&(this.defines[t]=e,this.needsUpdate=!0)}}class RM extends PM{constructor(t){super({blending:Dn,transparent:!1,depthWrite:!1,depthTest:!1,defines:{USE_SLIDER:0},uniforms:{sigma:{value:5},threshold:{value:.03},kSigma:{value:1},map:{value:null}},vertexShader:`
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
				//  All rights reserved.
				//
				//  https://michelemorrone.eu - https://BrutPitt.com
				//
				//  me@michelemorrone.eu - brutpitt@gmail.com
				//  twitter: @BrutPitt - github: BrutPitt
				//
				//  https://github.com/BrutPitt/glslSmartDeNoise/
				//
				//  This software is distributed under the terms of the BSD 2-Clause license
				//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
				uniform sampler2D map;
				uniform float sigma;
				uniform float threshold;
				uniform float kSigma;
				varying vec2 vUv;
				#define INV_SQRT_OF_2PI 0.39894228040143267793994605993439
				#define INV_PI 0.31830988618379067153776752674503
				// Parameters:
				//	 sampler2D tex	 - sampler image / texture
				//	 vec2 uv		   - actual fragment coord
				//	 float sigma  >  0 - sigma Standard Deviation
				//	 float kSigma >= 0 - sigma coefficient
				//		 kSigma * sigma  -->  radius of the circular kernel
				//	 float threshold   - edge sharpening threshold
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
						float pt = sqrt( radQ - d.x * d.x );
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
					return aBuff / zBuff;
				}
				void main() {
					// Internal RT pass: stay in linear space. Downstream MeshStandardMaterial.lightMap
					// expects linear; tonemapping/encoding fragments would double-encode.
					gl_FragColor = smartDeNoise( map, vec2( vUv.x, vUv.y ), sigma, kSigma, threshold );
				}
			`}),this.setValues(t)}}const np=new ft(new kn(2,2)),LM=new or,DM=async(i,t,e,n,r,o)=>{const a=()=>new In(n,n,{type:ge,minFilter:Cc,magFilter:Ie,generateMipmaps:!0}),c=a(),h=a(),d=(E,y)=>{np.material=E,i.setRenderTarget(y),i.render(np,LM),i.setRenderTarget(null)},p=new CM({positions:e,resolution:n});let f=c,m=h,x=t;const b=Math.max(0,r.dilationIterations)+(r.denoiseEnabled?1:0);let w=0;for(let E=0;E<Math.max(0,r.dilationIterations);E++){p.uniforms.map.value=x,d(p,m),x=m.texture;const y=f;f=m,m=y,w++,o==null||o(w/b),await new Promise(T=>requestAnimationFrame(T))}if(r.denoiseEnabled){const E=new RM({map:x,sigma:r.denoiseSigma,threshold:r.denoiseThreshold,kSigma:r.denoiseKSigma});d(E,m),x=m.texture,E.dispose();const y=f;f=m,m=y,w++,o==null||o(w/b),await new Promise(T=>requestAnimationFrame(T))}p.dispose();const _=r.dilationIterations>0||r.denoiseEnabled,v=_?f.texture:t;if(_){const E=Math.max(0,Math.floor(n/2)-2),y=new Float32Array(4*4*4);i.readRenderTargetPixels(f,E,E,4,4,y);let T=0,C=0,P=0;for(let I=0;I<16;I++)T+=y[I*4],C+=y[I*4+1],P+=y[I*4+2];const A=I=>(I/16).toFixed(4);console.log(`[baker] refinement: dilations=${r.dilationIterations}, denoise=${r.denoiseEnabled?"on":"off"} (sigma=${r.denoiseSigma}, threshold=${r.denoiseThreshold}, kSigma=${r.denoiseKSigma}) \u2014 center 4x4 avg rgb = (${A(T)}, ${A(C)}, ${A(P)})`)}return{texture:v,dispose:()=>{c.dispose(),h.dispose()}}};function IM(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),r=new Set(Object.keys(i[0].morphAttributes)),o={},a={},c=i[0].morphTargetsRelative,h=new nn;let d=0;for(let p=0;p<i.length;++p){const f=i[p];let m=0;if(e!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+p+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const x in f.attributes){if(!n.has(x))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+p+'. All geometries must have compatible attributes; make sure "'+x+'" attribute exists among all geometries, or in none of them.'),null;o[x]===void 0&&(o[x]=[]),o[x].push(f.attributes[x]),m++}if(m!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+p+". Make sure all geometries have the same number of attributes."),null;if(c!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+p+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const x in f.morphAttributes){if(!r.has(x))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+p+".  .morphAttributes must be consistent throughout all geometries."),null;a[x]===void 0&&(a[x]=[]),a[x].push(f.morphAttributes[x])}if(t){let x;if(e)x=f.index.count;else if(f.attributes.position!==void 0)x=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+p+". The geometry must have either an index or a position attribute"),null;h.addGroup(d,x,p),d+=x}}if(e){let p=0;const f=[];for(let m=0;m<i.length;++m){const x=i[m].index;for(let b=0;b<x.count;++b)f.push(x.getX(b)+p);p+=i[m].attributes.position.count}h.setIndex(f)}for(const p in o){const f=ip(o[p]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+p+" attribute."),null;h.setAttribute(p,f)}for(const p in a){const f=a[p][0].length;if(f===0)break;h.morphAttributes=h.morphAttributes||{},h.morphAttributes[p]=[];for(let m=0;m<f;++m){const x=[];for(let w=0;w<a[p].length;++w)x.push(a[p][w][m]);const b=ip(x);if(!b)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+p+" morphAttribute."),null;h.morphAttributes[p].push(b)}}return h}function ip(i){let t,e,n,r=-1,o=0;for(let d=0;d<i.length;++d){const p=i[d];if(t===void 0&&(t=p.array.constructor),t!==p.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=p.itemSize),e!==p.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=p.normalized),n!==p.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=p.gpuType),r!==p.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;o+=p.count*e}const a=new t(o),c=new en(a,e,n);let h=0;for(let d=0;d<i.length;++d){const p=i[d];if(p.isInterleavedBufferAttribute){const f=h/e;for(let m=0,x=p.count;m<x;m++)for(let b=0;b<e;b++){const w=p.getComponent(m,b);c.setComponent(m+f,b,w)}}else a.set(p.array,h);h+=p.count*e}return r!==void 0&&(c.gpuType=r),c}const UM=i=>{const t=i.map((e,n)=>{const r=e.geometry.clone();r.deleteAttribute("color"),r.applyMatrix4(e.matrixWorld);const o=r.attributes.position.count,a=new Float32Array(o);return a.fill(n),r.setAttribute("meshIndex",new en(a,1)),r});return IM(t)},NM=i=>{const t=i.geometry;return t.index?t.index.count/3:t.attributes.position.count/3},wc={aR:1,aG:1,aB:1,eR:0,eG:0,eB:0},hf=i=>{var e;if(Array.isArray(i))return console.warn("[baker] material array detected; using slot 0 only \u2014 per-face material groups not yet supported"),i.length?hf(i[0]):wc;const t=i;if("emissive"in t&&t.emissive){const n=(e=t.emissiveIntensity)!=null?e:1;return{aR:t.color.r,aG:t.color.g,aB:t.color.b,eR:t.emissive.r*n,eG:t.emissive.g*n,eB:t.emissive.b*n}}return"color"in t&&t.color?{aR:t.color.r,aG:t.color.g,aB:t.color.b,eR:0,eG:0,eB:0}:(console.warn("[baker] material has no .color (likely ShaderMaterial); defaulting to white albedo"),wc)},FM=(i,t)=>{var f;const e=i.index;if(!e)throw new Error("[baker] mergeGeometry must produce an indexed geometry; got non-indexed");const n=i.attributes.meshIndex;if(!n)throw new Error("[baker] merged geometry is missing 'meshIndex' attribute \u2014 did mergeGeometry skip the per-vertex tag?");const r=t.map(NM),o=e.count/3,a=new Float32Array(o*3),c=new Float32Array(o*3),h=t.map(m=>hf(m.material)),d=e.array,p=n.array;for(let m=0;m<o;m++){const x=d[m*3],b=p[x]|0,w=(f=h[b])!=null?f:wc,_=m*3;a[_]=w.aR,a[_+1]=w.aG,a[_+2]=w.aB,c[_]=w.eR,c[_+1]=w.eG,c[_+2]=w.eB}return{albedo:a,emissive:c,totalTriangles:o,perMeshTriangleCounts:r}},rp=(i,t)=>{const e=new va(i,t,t,qe,ge);return e.minFilter=pe,e.magFilter=pe,e.wrapS=yn,e.wrapT=yn,e.generateMipmaps=!1,e.needsUpdate=!0,e},OM=i=>{const t=i.totalTriangles,e=Math.max(1,Math.ceil(Math.sqrt(t))),n=e*e,r=new Float32Array(n*4),o=new Float32Array(n*4);for(let a=0;a<t;a++){const c=a*3,h=a*4;r[h]=i.albedo[c],r[h+1]=i.albedo[c+1],r[h+2]=i.albedo[c+2],r[h+3]=1,o[h]=i.emissive[c],o[h+1]=i.emissive[c+1],o[h+2]=i.emissive[c+2],o[h+3]=1}return{albedoTexture:rp(r,e),emissiveTexture:rp(o,e),side:e}};/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.6.9
*/var sp=function(i){return URL.createObjectURL(new Blob([i],{type:"text/javascript"}))};try{URL.revokeObjectURL(sp(""))}catch{sp=function(t){return"data:application/javascript;charset=UTF-8,"+encodeURI(t)}}var Yn=Uint8Array,un=Uint16Array,Zs=Uint32Array,Hc=new Yn([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Gc=new Yn([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),op=new Yn([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),df=function(i,t){for(var e=new un(31),n=0;n<31;++n)e[n]=t+=1<<i[n-1];for(var r=new Zs(e[30]),n=1;n<30;++n)for(var o=e[n];o<e[n+1];++o)r[o]=o-e[n]<<5|n;return[e,r]},pf=df(Hc,2),BM=pf[0],Ec=pf[1];BM[28]=258,Ec[258]=28;var kM=df(Gc,0),ap=kM[1],Mc=new un(32768);for(var ye=0;ye<32768;++ye){var Ri=(ye&43690)>>>1|(ye&21845)<<1;Ri=(Ri&52428)>>>2|(Ri&13107)<<2,Ri=(Ri&61680)>>>4|(Ri&3855)<<4,Mc[ye]=((Ri&65280)>>>8|(Ri&255)<<8)>>>1}var Ys=function(i,t,e){for(var n=i.length,r=0,o=new un(t);r<n;++r)++o[i[r]-1];var a=new un(t);for(r=0;r<t;++r)a[r]=a[r-1]+o[r-1]<<1;var c;if(e){c=new un(1<<t);var h=15-t;for(r=0;r<n;++r)if(i[r])for(var d=r<<4|i[r],p=t-i[r],f=a[i[r]-1]++<<p,m=f|(1<<p)-1;f<=m;++f)c[Mc[f]>>>h]=d}else for(c=new un(n),r=0;r<n;++r)i[r]&&(c[r]=Mc[a[i[r]-1]++]>>>15-i[r]);return c},rr=new Yn(288);for(var ye=0;ye<144;++ye)rr[ye]=8;for(var ye=144;ye<256;++ye)rr[ye]=9;for(var ye=256;ye<280;++ye)rr[ye]=7;for(var ye=280;ye<288;++ye)rr[ye]=8;var xa=new Yn(32);for(var ye=0;ye<32;++ye)xa[ye]=5;var VM=Ys(rr,9,0),zM=Ys(xa,5,0),ff=function(i){return(i/8|0)+(i&7&&1)},HM=function(i,t,e){(t==null||t<0)&&(t=0),(e==null||e>i.length)&&(e=i.length);var n=new(i instanceof un?un:i instanceof Zs?Zs:Yn)(e-t);return n.set(i.subarray(t,e)),n},si=function(i,t,e){e<<=t&7;var n=t/8|0;i[n]|=e,i[n+1]|=e>>>8},Bs=function(i,t,e){e<<=t&7;var n=t/8|0;i[n]|=e,i[n+1]|=e>>>8,i[n+2]|=e>>>16},Zl=function(i,t){for(var e=[],n=0;n<i.length;++n)i[n]&&e.push({s:n,f:i[n]});var r=e.length,o=e.slice();if(!r)return[Wc,0];if(r==1){var a=new Yn(e[0].s+1);return a[e[0].s]=1,[a,1]}e.sort(function(C,P){return C.f-P.f}),e.push({s:-1,f:25001});var c=e[0],h=e[1],d=0,p=1,f=2;for(e[0]={s:-1,f:c.f+h.f,l:c,r:h};p!=r-1;)c=e[e[d].f<e[f].f?d++:f++],h=e[d!=p&&e[d].f<e[f].f?d++:f++],e[p++]={s:-1,f:c.f+h.f,l:c,r:h};for(var m=o[0].s,n=1;n<r;++n)o[n].s>m&&(m=o[n].s);var x=new un(m+1),b=Sc(e[p-1],x,0);if(b>t){var n=0,w=0,_=b-t,v=1<<_;for(o.sort(function(P,A){return x[A.s]-x[P.s]||P.f-A.f});n<r;++n){var E=o[n].s;if(x[E]>t)w+=v-(1<<b-x[E]),x[E]=t;else break}for(w>>>=_;w>0;){var y=o[n].s;x[y]<t?w-=1<<t-x[y]++-1:++n}for(;n>=0&&w;--n){var T=o[n].s;x[T]==t&&(--x[T],++w)}b=t}return[new Yn(x),b]},Sc=function(i,t,e){return i.s==-1?Math.max(Sc(i.l,t,e+1),Sc(i.r,t,e+1)):t[i.s]=e},lp=function(i){for(var t=i.length;t&&!i[--t];);for(var e=new un(++t),n=0,r=i[0],o=1,a=function(h){e[n++]=h},c=1;c<=t;++c)if(i[c]==r&&c!=t)++o;else{if(!r&&o>2){for(;o>138;o-=138)a(32754);o>2&&(a(o>10?o-11<<5|28690:o-3<<5|12305),o=0)}else if(o>3){for(a(r),--o;o>6;o-=6)a(8304);o>2&&(a(o-3<<5|8208),o=0)}for(;o--;)a(r);o=1,r=i[c]}return[e.subarray(0,n),t]},ks=function(i,t){for(var e=0,n=0;n<t.length;++n)e+=i[n]*t[n];return e},la=function(i,t,e){var n=e.length,r=ff(t+2);i[r]=n&255,i[r+1]=n>>>8,i[r+2]=i[r]^255,i[r+3]=i[r+1]^255;for(var o=0;o<n;++o)i[r+o+4]=e[o];return(r+4+n)*8},cp=function(i,t,e,n,r,o,a,c,h,d,p){si(t,p++,e),++r[256];for(var f=Zl(r,15),m=f[0],x=f[1],b=Zl(o,15),w=b[0],_=b[1],v=lp(m),E=v[0],y=v[1],T=lp(w),C=T[0],P=T[1],A=new un(19),I=0;I<E.length;++I)A[E[I]&31]++;for(var I=0;I<C.length;++I)A[C[I]&31]++;for(var z=Zl(A,7),M=z[0],L=z[1],V=19;V>4&&!M[op[V-1]];--V);var X=d+5<<3,F=ks(r,rr)+ks(o,xa)+a,G=ks(r,m)+ks(o,w)+a+14+3*V+ks(A,M)+(2*A[16]+3*A[17]+7*A[18]);if(X<=F&&X<=G)return la(t,p,i.subarray(h,h+d));var H,W,J,et;if(si(t,p,1+(G<F)),p+=2,G<F){H=Ys(m,x,0),W=m,J=Ys(w,_,0),et=w;var it=Ys(M,L,0);si(t,p,y-257),si(t,p+5,P-1),si(t,p+10,V-4),p+=14;for(var I=0;I<V;++I)si(t,p+3*I,M[op[I]]);p+=3*V;for(var nt=[E,C],pt=0;pt<2;++pt)for(var mt=nt[pt],I=0;I<mt.length;++I){var $=mt[I]&31;si(t,p,it[$]),p+=M[$],$>15&&(si(t,p,mt[I]>>>5&127),p+=mt[I]>>>12)}}else H=VM,W=rr,J=zM,et=xa;for(var I=0;I<c;++I)if(n[I]>255){var $=n[I]>>>18&31;Bs(t,p,H[$+257]),p+=W[$+257],$>7&&(si(t,p,n[I]>>>23&31),p+=Hc[$]);var rt=n[I]&31;Bs(t,p,J[rt]),p+=et[rt],rt>3&&(Bs(t,p,n[I]>>>5&8191),p+=Gc[rt])}else Bs(t,p,H[n[I]]),p+=W[n[I]];return Bs(t,p,H[256]),p+W[256]},GM=new Zs([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),Wc=new Yn(0),WM=function(i,t,e,n,r,o){var a=i.length,c=new Yn(n+a+5*(1+Math.ceil(a/7e3))+r),h=c.subarray(n,c.length-r),d=0;if(!t||a<8)for(var p=0;p<=a;p+=65535){var f=p+65535;f<a?d=la(h,d,i.subarray(p,f)):(h[p]=o,d=la(h,d,i.subarray(p,a)))}else{for(var m=GM[t-1],x=m>>>13,b=m&8191,w=(1<<e)-1,_=new un(32768),v=new un(w+1),E=Math.ceil(e/3),y=2*E,T=function(Tt){return(i[Tt]^i[Tt+1]<<E^i[Tt+2]<<y)&w},C=new Zs(25e3),P=new un(288),A=new un(32),I=0,z=0,p=0,M=0,L=0,V=0;p<a;++p){var X=T(p),F=p&32767,G=v[X];if(_[F]=G,v[X]=F,L<=p){var H=a-p;if((I>7e3||M>24576)&&H>423){d=cp(i,h,0,C,P,A,z,M,V,p-V,d),M=I=z=0,V=p;for(var W=0;W<286;++W)P[W]=0;for(var W=0;W<30;++W)A[W]=0}var J=2,et=0,it=b,nt=F-G&32767;if(H>2&&X==T(p-nt))for(var pt=Math.min(x,H)-1,mt=Math.min(32767,p),$=Math.min(258,H);nt<=mt&&--it&&F!=G;){if(i[p+J]==i[p+J-nt]){for(var rt=0;rt<$&&i[p+rt]==i[p+rt-nt];++rt);if(rt>J){if(J=rt,et=nt,rt>pt)break;for(var wt=Math.min(nt,rt-2),Rt=0,W=0;W<wt;++W){var Lt=p-nt+W+32768&32767,Et=_[Lt],zt=Lt-Et+32768&32767;zt>Rt&&(Rt=zt,G=Lt)}}}F=G,G=_[F],nt+=F-G+32768&32767}if(et){C[M++]=268435456|Ec[J]<<18|ap[et];var Bt=Ec[J]&31,j=ap[et]&31;z+=Hc[Bt]+Gc[j],++P[257+Bt],++A[j],L=p+J,++I}else C[M++]=i[p],++P[i[p]]}}d=cp(i,h,o,C,P,A,z,M,V,p-V,d),!o&&d&7&&(d=la(h,d+1,Wc))}return HM(c,0,n+ff(d)+r)},XM=function(){var i=1,t=0;return{p:function(e){for(var n=i,r=t,o=e.length,a=0;a!=o;){for(var c=Math.min(a+2655,o);a<c;++a)r+=n+=e[a];n=(n&65535)+15*(n>>16),r=(r&65535)+15*(r>>16)}i=n,t=r},d:function(){return i%=65521,t%=65521,(i&255)<<24|i>>>8<<16|(t&255)<<8|t>>>8}}},qM=function(i,t,e,n,r){return WM(i,t.level==null?6:t.level,t.mem==null?Math.ceil(Math.max(8,Math.min(13,Math.log(i.length)))*1.5):12+t.mem,e,n,!r)},jM=function(i,t,e){for(;e;++t)i[t]=e,e>>>=8},YM=function(i,t){var e=t.level,n=e==0?0:e<6?1:e==9?3:2;i[0]=120,i[1]=n<<6|(n?32-2*n:1)};function $M(i,t){t||(t={});var e=XM();e.p(i);var n=qM(i,t,2,4);return YM(n,t),jM(n,n.length-4,e.d()),n}var KM=typeof TextDecoder!="undefined"&&new TextDecoder,ZM=0;try{KM.decode(Wc,{stream:!0}),ZM=1}catch{}const QM=new TextEncoder,mf=3;class JM{parse(t,e,n){if(!t||!(t.isWebGLRenderer||t.isDataTexture))throw Error("EXRExporter.parse: Unsupported first parameter, expected instance of WebGLRenderer or DataTexture.");if(t.isWebGLRenderer){const r=t,o=e,a=n;tS(o);const c=nS(o,a),h=rS(r,o,c),d=up(h,c),p=hp(d,c);return dp(p,c)}else if(t.isDataTexture){const r=t,o=e;eS(r);const a=iS(r,o),c=r.image.data,h=up(c,a),d=hp(h,a);return dp(d,a)}}}function tS(i){if(!i||!i.isWebGLRenderTarget)throw Error("EXRExporter.parse: Unsupported second parameter, expected instance of WebGLRenderTarget.");if(i.isWebGLCubeRenderTarget||i.isWebGL3DRenderTarget||i.isWebGLArrayRenderTarget)throw Error("EXRExporter.parse: Unsupported render target type, expected instance of WebGLRenderTarget.");if(i.texture.type!==ge&&i.texture.type!==qn)throw Error("EXRExporter.parse: Unsupported WebGLRenderTarget texture type.");if(i.texture.format!==qe)throw Error("EXRExporter.parse: Unsupported WebGLRenderTarget texture format, expected RGBAFormat.")}function eS(i){if(i.type!==ge&&i.type!==qn)throw Error("EXRExporter.parse: Unsupported DataTexture texture type.");if(i.format!==qe)throw Error("EXRExporter.parse: Unsupported DataTexture texture format, expected RGBAFormat.");if(!i.image.data)throw Error("EXRExporter.parse: Invalid DataTexture image data.");if(i.type===ge&&i.image.data.constructor.name!=="Float32Array")throw Error("EXRExporter.parse: DataTexture image data doesn't match type, expected 'Float32Array'.");if(i.type===qn&&i.image.data.constructor.name!=="Uint16Array")throw Error("EXRExporter.parse: DataTexture image data doesn't match type, expected 'Uint16Array'.")}function nS(i,t={}){const e={0:1,2:1,3:16},n=i.width,r=i.height,o=i.texture.type,a=i.texture.format,c=t.compression!==void 0?t.compression:mf,h=t.type!==void 0?t.type:qn,d=h===ge?2:1,p=e[c],f=4;return{width:n,height:r,type:o,format:a,compression:c,blockLines:p,dataType:d,dataSize:2*d,numBlocks:Math.ceil(r/p),numInputChannels:4,numOutputChannels:f}}function iS(i,t={}){const e={0:1,2:1,3:16},n=i.image.width,r=i.image.height,o=i.type,a=i.format,c=t.compression!==void 0?t.compression:mf,h=t.type!==void 0?t.type:qn,d=h===ge?2:1,p=e[c],f=4;return{width:n,height:r,type:o,format:a,compression:c,blockLines:p,dataType:d,dataSize:2*d,numBlocks:Math.ceil(r/p),numInputChannels:4,numOutputChannels:f}}function rS(i,t,e){let n;return e.type===ge?n=new Float32Array(e.width*e.height*e.numInputChannels):n=new Uint16Array(e.width*e.height*e.numInputChannels),i.readRenderTargetPixels(t,0,0,e.width,e.height,n),n}function up(i,t){const e=t.width,n=t.height,r={r:0,g:0,b:0,a:0},o={value:0},a=t.numOutputChannels==4?1:0,c=t.type==ge?pS:dS,h=t.dataType==1?cS:Tc,d=new Uint8Array(t.width*t.height*t.numOutputChannels*t.dataSize),p=new DataView(d.buffer);for(let f=0;f<n;++f)for(let m=0;m<e;++m){const x=f*e*4+m*4,b=c(i,x),w=c(i,x+1),_=c(i,x+2),v=c(i,x+3),E=(n-f-1)*e*(3+a)*t.dataSize;lS(r,b,w,_,v),o.value=E+m*t.dataSize,h(p,r.a,o),o.value=E+a*e*t.dataSize+m*t.dataSize,h(p,r.b,o),o.value=E+(1+a)*e*t.dataSize+m*t.dataSize,h(p,r.g,o),o.value=E+(2+a)*e*t.dataSize+m*t.dataSize,h(p,r.r,o)}return d}function hp(i,t){let e,n,r=0;const o={data:new Array,totalSize:0},a=t.width*t.numOutputChannels*t.blockLines*t.dataSize;switch(t.compression){case 0:e=sS;break;case 2:case 3:e=oS;break}t.compression!==0&&(n=new Uint8Array(a));for(let c=0;c<t.numBlocks;++c){const h=i.subarray(a*c,a*(c+1)),d=e(h,n);r+=d.length,o.data.push({dataChunk:d,size:d.length})}return o.totalSize=r,o}function sS(i){return i}function oS(i,t){let e=0,n=Math.floor((i.length+1)/2),r=0;const o=i.length-1;for(;!(r>o||(t[e++]=i[r++],r>o));)t[n++]=i[r++];let a=t[0];for(let h=1;h<t.length;h++){const d=t[h]-a+384;a=t[h],t[h]=d}return $M(t)}function aS(i,t,e){const n={value:0},r=new DataView(i.buffer);oe(r,20000630,n),oe(r,2,n),Fe(r,"compression",n),Fe(r,"compression",n),oe(r,1,n),Gs(r,e.compression,n),Fe(r,"screenWindowCenter",n),Fe(r,"v2f",n),oe(r,8,n),oe(r,0,n),oe(r,0,n),Fe(r,"screenWindowWidth",n),Fe(r,"float",n),oe(r,4,n),Tc(r,1,n),Fe(r,"pixelAspectRatio",n),Fe(r,"float",n),oe(r,4,n),Tc(r,1,n),Fe(r,"lineOrder",n),Fe(r,"lineOrder",n),oe(r,1,n),Gs(r,0,n),Fe(r,"dataWindow",n),Fe(r,"box2i",n),oe(r,16,n),oe(r,0,n),oe(r,0,n),oe(r,e.width-1,n),oe(r,e.height-1,n),Fe(r,"displayWindow",n),Fe(r,"box2i",n),oe(r,16,n),oe(r,0,n),oe(r,0,n),oe(r,e.width-1,n),oe(r,e.height-1,n),Fe(r,"channels",n),Fe(r,"chlist",n),oe(r,e.numOutputChannels*18+1,n),Fe(r,"A",n),oe(r,e.dataType,n),n.value+=4,oe(r,1,n),oe(r,1,n),Fe(r,"B",n),oe(r,e.dataType,n),n.value+=4,oe(r,1,n),oe(r,1,n),Fe(r,"G",n),oe(r,e.dataType,n),n.value+=4,oe(r,1,n),oe(r,1,n),Fe(r,"R",n),oe(r,e.dataType,n),n.value+=4,oe(r,1,n),oe(r,1,n),Gs(r,0,n),Gs(r,0,n);let o=n.value+e.numBlocks*8;for(let a=0;a<t.data.length;++a)uS(r,o,n),o+=t.data[a].size+8}function dp(i,t){const e=t.numBlocks*8,n=259+18*t.numOutputChannels,r={value:n+e},o=new Uint8Array(n+e+i.totalSize+t.numBlocks*8),a=new DataView(o.buffer);aS(o,i,t);for(let c=0;c<i.data.length;++c){const h=i.data[c].dataChunk,d=i.data[c].size;oe(a,c*t.blockLines,r),oe(a,d,r),o.set(h,r.value),r.value+=d}return o}function lS(i,t,e,n,r){i.r=t,i.g=e,i.b=n,i.a=r}function Gs(i,t,e){i.setUint8(e.value,t),e.value+=1}function oe(i,t,e){i.setUint32(e.value,t,!0),e.value+=4}function cS(i,t,e){i.setUint16(e.value,k_.toHalfFloat(t),!0),e.value+=2}function Tc(i,t,e){i.setFloat32(e.value,t,!0),e.value+=4}function uS(i,t,e){i.setBigUint64(e.value,BigInt(t),!0),e.value+=8}function Fe(i,t,e){const n=QM.encode(t+"\0");for(let r=0;r<n.length;++r)Gs(i,n[r],e)}function hS(i){const t=(i&31744)>>10,e=i&1023;return(i>>15?-1:1)*(t?t===31?e?NaN:1/0:Math.pow(2,t-15)*(1+e/1024):6103515625e-14*(e/1024))}function dS(i,t){return hS(i[t])}function pS(i,t){return i[t]}const pp=new ft(new kn(2,2)),fS=new or,fp=new rn({blending:Dn,transparent:!1,depthWrite:!1,depthTest:!1,uniforms:{map:{value:null}},vertexShader:`
        varying vec2 vUv;
        void main() {
            vUv = uv;
            gl_Position = vec4(position, 1.0);
        }
    `,fragmentShader:`
        uniform sampler2D map;
        varying vec2 vUv;
        void main() {
            gl_FragColor = texture2D(map, vUv);
        }
    `});function Xc(i,t,e){const n=new In(e,e,{type:ge,minFilter:Ie,magFilter:Ie});fp.uniforms.map.value=t,pp.material=fp;const r=i.getRenderTarget(),o=i.autoClear;return i.autoClear=!0,i.setRenderTarget(n),i.render(pp,fS),i.setRenderTarget(r),i.autoClear=o,n}function qc(i,t){const e=URL.createObjectURL(i),n=document.createElement("a");n.href=e,n.download=t,document.body.appendChild(n),n.click(),n.remove(),setTimeout(()=>URL.revokeObjectURL(e),0)}const jc=(i,t)=>i.toLowerCase().endsWith(`.${t}`)?i:`${i}.${t}`;async function mS(i,t,e,n){const r=Xc(i,t,e),o=new Float32Array(e*e*4);i.readRenderTargetPixels(r,0,0,e,e,o),r.dispose();const a=new Uint8ClampedArray(e*e*4);for(let d=0;d<e;d++){const p=(e-1-d)*e*4,f=d*e*4;for(let m=0;m<e;m++){const x=p+m*4,b=f+m*4,w=Math.max(o[x],0),_=Math.max(o[x+1],0),v=Math.max(o[x+2],0);a[b]=Math.pow(w/(1+w),1/2.2)*255,a[b+1]=Math.pow(_/(1+_),1/2.2)*255,a[b+2]=Math.pow(v/(1+v),1/2.2)*255,a[b+3]=255}}const c=document.createElement("canvas");c.width=e,c.height=e;const h=c.getContext("2d");if(!h)throw new Error("exportPNG: 2D context unavailable");h.putImageData(new ImageData(a,e,e),0,0),await new Promise((d,p)=>{c.toBlob(f=>{if(!f){p(new Error("exportPNG: toBlob returned null"));return}qc(f,jc(n,"png")),d()},"image/png")})}function gS(i,t,e,n){const r=Xc(i,t,e),o=new JM().parse(i,r);r.dispose(),qc(new Blob([o],{type:"image/x-exr"}),jc(n,"exr"))}function vS(i,t,e,n){const r=Xc(i,t,e),o=new Float32Array(e*e*4);i.readRenderTargetPixels(r,0,0,e,e,o),r.dispose(),qc(new Blob([o.buffer],{type:"application/octet-stream"}),jc(n,"bin"))}async function _S(i,t,e,n,r){switch(r){case"png":await mS(i,t,e,n);return;case"exr":gS(i,t,e,n);return;case"bin":vS(i,t,e,n);return}}const Wr=22;class xS{constructor(t={}){var e,n,r,o;this.visible=!0,this.collapsed=!1,this.headerEl=null,this.layerLabel="",this.prevScissor=new ve,this.prevViewport=new ve,this.size=(e=t.size)!=null?e:256,this.margin=(n=t.margin)!=null?n:20,this.corner=(r=t.corner)!=null?r:"br",this.mat=new rn({blending:Dn,transparent:!1,depthTest:!1,depthWrite:!1,uniforms:{map:{value:null},sRGB:{value:(o=t.sRGB)!=null?o:!0},border:{value:.006}},vertexShader:`
                varying vec2 vUv;
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
                varying vec2 vUv;
                void main() {
                    // Thin light frame so the panel reads against any 3D background.
                    if (vUv.x < border || vUv.x > 1.0 - border ||
                        vUv.y < border || vUv.y > 1.0 - border) {
                        gl_FragColor = vec4(0.85, 0.85, 0.85, 1.0);
                        return;
                    }
                    vec4 t = texture2D(map, vUv);
                    vec3 c = max(t.rgb, vec3(0.0));
                    if (sRGB) c = pow(c, vec3(1.0 / 2.2));
                    gl_FragColor = vec4(c, 1.0);
                }
            `}),this.scene=new qp,this.cam=new or,this.quad=new ft(new kn(2,2),this.mat),this.scene.add(this.quad)}setTexture(t){this.mat.uniforms.map.value=t}setSRGB(t){this.mat.uniforms.sRGB.value=t}setSize(t){this.size=t}setMargin(t){this.margin=t}setCorner(t){this.corner=t}setCollapsed(t){this.collapsed=t,this.refreshHeaderText()}setLayerLabel(t){this.layerLabel=t,this.refreshHeaderText()}attachHeader(t=document.body){if(this.headerEl)return;const e=document.createElement("div");Object.assign(e.style,{position:"absolute",boxSizing:"border-box",fontFamily:"monospace",fontSize:"11px",color:"#ddd",backgroundColor:"rgba(0,0,0,0.78)",padding:"4px 8px",cursor:"pointer",userSelect:"none",border:"1px solid #444",borderRadius:"3px",zIndex:"50",display:"none",lineHeight:`${Wr-10}px`}),e.addEventListener("click",()=>this.setCollapsed(!this.collapsed)),t.appendChild(e),this.headerEl=e,this.refreshHeaderText()}detachHeader(){var t;(t=this.headerEl)==null||t.remove(),this.headerEl=null}refreshHeaderText(){if(!this.headerEl)return;const t=this.collapsed?"\u25B8":"\u25BE",e=this.layerLabel?` \xB7 ${this.layerLabel}`:"";this.headerEl.innerText=`${t} Atlas Viewer${e}`}positionHeader(t){if(!this.headerEl)return;if(!this.visible){this.headerEl.style.display="none";return}this.headerEl.style.display="block",this.headerEl.style.width=`${this.size}px`;let e=0,n=0;switch(this.corner){case"tl":e=this.margin,n=this.margin+Wr;break;case"tr":e=t.width-this.size-this.margin,n=this.margin+Wr;break;case"bl":e=this.margin,n=t.height-this.margin-this.size;break;case"br":e=t.width-this.size-this.margin,n=t.height-this.margin-this.size;break}const r=n-Wr;this.headerEl.style.left=`${t.left+e}px`,this.headerEl.style.top=`${t.top+r}px`}render(t){if(!this.visible){this.positionHeader(t.domElement.getBoundingClientRect());return}if(this.positionHeader(t.domElement.getBoundingClientRect()),this.collapsed||!this.mat.uniforms.map.value)return;const e=t.getPixelRatio(),n=t.domElement.width,r=t.domElement.height,o=Math.max(1,Math.floor(this.size*e)),a=Math.max(0,Math.floor(this.margin*e));let c=0,h=0;switch(this.corner){case"tl":c=a,h=r-o-a-Math.floor(Wr*e);break;case"tr":c=n-o-a,h=r-o-a-Math.floor(Wr*e);break;case"bl":c=a,h=a;break;case"br":c=n-o-a,h=a;break}const d=t.autoClear,p=t.getScissorTest();t.getScissor(this.prevScissor),t.getViewport(this.prevViewport),t.setScissorTest(!0),t.setScissor(c,h,o,o),t.setViewport(c,h,o,o),t.autoClear=!1,t.render(this.scene,this.cam),t.setScissor(this.prevScissor.x,this.prevScissor.y,this.prevScissor.z,this.prevScissor.w),t.setViewport(this.prevViewport.x,this.prevViewport.y,this.prevViewport.z,this.prevViewport.w),t.setScissorTest(p),t.autoClear=d}dispose(){this.detachHeader(),this.mat.dispose(),this.quad.geometry.dispose()}}const xn=10,Xr=xn/2,$i=[{id:"combined",label:"Combined",group:"output",showAlbedo:!0,getLightMap:i=>{var t;return(t=i.refinement)!=null?t:i.composite}},{id:"combinedPost",label:"Combined (Refined)",group:"output",showAlbedo:!0,getLightMap:i=>{var t;return(t=i.refinement)!=null?t:i.composite}},{id:"combinedRaw",label:"Combined (Raw)",group:"output",showAlbedo:!0,getLightMap:i=>i.composite},{id:"direct",label:"Direct",group:"output",showAlbedo:!1,getLightMap:i=>i.direct},{id:"indirect",label:"Indirect (GI)",group:"output",showAlbedo:!1,getLightMap:i=>i.indirect},{id:"ao",label:"Ambient Occlusion",group:"output",showAlbedo:!1,getLightMap:i=>i.ao},{id:"lightmapRaw",label:"Lightmap (Raw)",group:"debug",showAlbedo:!1,getLightMap:i=>i.composite},{id:"albedo",label:"Albedo",group:"debug",showAlbedo:!0,getLightMap:()=>null},{id:"positions",label:"World Position",group:"debug",showAlbedo:!1,getLightMap:i=>i.positions},{id:"normals",label:"World Normal",group:"debug",showAlbedo:!1,getLightMap:i=>i.normals}],bS=Object.fromEntries($i.map(i=>[i.label,i.id])),yS={Linear:"linear",Nearest:"nearest"},wS={"Cornell Classic":"classic","Cornell Advanced":"advanced"},mp={Custom:null,Draft:{lightMapSize:256,casts:4,targetSamples:32},Preview:{lightMapSize:512,casts:5,targetSamples:96},Production:{lightMapSize:1024,casts:6,targetSamples:256},Final:{lightMapSize:2048,casts:8,targetSamples:512}};class ES{constructor(){this.cornellRoot=null,this.meshes=[],this.lightmapper=null,this.composite=null,this.refinement=null,this.options={preset:"advanced",layer:"combined",quality:"Custom",lightMapSize:1024,casts:5,targetSamples:256,filterMode:"linear",directLightEnabled:!0,indirectLightEnabled:!0,ambientLightEnabled:!0,ambientDistance:.5,lightSize:2.9,lightIntensity:2,lightColor:"#ffffff",directIntensity:1.4,giIntensity:2.7,skyColor:"#ffffff",skyIntensity:0,pause:!1,showGizmo:!0,autoApplyRefinement:!0,dilationIterations:4,denoiseEnabled:!0,denoiseSigma:2.5,denoiseThreshold:.18,denoiseKSigma:1,samples:0,spp:0,etaSec:0,refinementStatus:"idle",exportFormat:"png",atlasViewerEnabled:!0,atlasViewerSize:256,atlasViewerCorner:"br",atlasViewerSRGB:!0},this.atlasViewer=(()=>{const f=new xS({size:256,corner:"br",sRGB:!0});return f.attachHeader(),f})(),this.looping=!1,this.bakeStartTime=0,this.scene=new qp,this.scene.background=new se(657930),this.camera=new bn(45,window.innerWidth/window.innerHeight,.1,1e3),this.camera.position.set(0,5,18),this.camera.lookAt(0,5,0),this.renderer=new Xp({antialias:!0}),this.renderer.outputColorSpace=We,this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(window.devicePixelRatio),document.body.appendChild(this.renderer.domElement),this.controls=new JE(this.camera,this.renderer.domElement),this.controls.target.set(0,5,0),this.controls.update(),this.lightDummy=new Ue,this.lightDummy.position.set(0,xn-.001,0),this.scene.add(this.lightDummy),this.lightMarker=new ft(new kn(2.5,2.5),new to({color:16777215,side:mn})),this.lightMarker.rotation.x=Math.PI/2,this.lightDummy.add(this.lightMarker),this.visualLight=new Bw(16777215,80,0,2),this.lightDummy.add(this.visualLight),this.lightTransformController=new tM(this.camera,this.renderer.domElement),this.lightTransformController.addEventListener("dragging-changed",f=>{this.controls.enabled=!f.value}),this.lightTransformController.attach(this.lightDummy),this.scene.add(this.lightTransformController),this.pane=new _c.exports.Pane({title:"\u{1F506} Lightbaker"});const t=this.pane.addFolder({title:"View",expanded:!0});t.element.classList.add("tp-view"),t.addInput(this.options,"layer",{options:bS,label:"Layer"}).on("change",()=>this.applyRenderMode()),t.addInput(this.options,"filterMode",{options:yS,label:"Filtering"}).on("change",()=>this.applyRenderMode()),t.addInput(this.options,"showGizmo",{label:"Show Gizmo"}),t.addInput(this.options,"pause",{label:"Pause"});const e=this.pane.addFolder({title:"Bake Settings",expanded:!1});e.element.classList.add("tp-bake"),e.addInput(this.options,"quality",{options:Object.fromEntries(Object.keys(mp).map(f=>[f,f])),label:"Preset"}).on("change",f=>this.applyQualityPreset(f.value)),e.addInput(this.options,"lightMapSize",{min:128,max:2048,step:128,label:"Resolution"}).on("change",()=>{this.options.quality="Custom",this.pane.refresh(),this.bake()}),e.addInput(this.options,"casts",{min:1,max:16,step:1,label:"Casts/Frame"}).on("change",()=>{this.options.quality="Custom",this.pane.refresh(),this.bake()}),e.addInput(this.options,"targetSamples",{min:16,max:1024,step:16,label:"Target Frames"}).on("change",()=>{this.options.quality="Custom",this.pane.refresh(),this.bake()}),e.addButton({title:"Bake Now"}).on("click",()=>this.bake());const n=this.pane.addFolder({title:"Lighting & GI",expanded:!1});n.element.classList.add("tp-light");const r=n.addFolder({title:"Direct Light"});r.addInput(this.options,"directLightEnabled",{label:"Enabled"}).on("change",()=>this.bake()),r.addInput(this.options,"lightColor",{view:"color",label:"Color"}).on("change",()=>this.bake()),r.addInput(this.options,"lightIntensity",{min:0,max:15,step:.1,label:"Bake Power"}).on("change",()=>this.bake()),r.addInput(this.options,"lightSize",{min:.1,max:5,step:.1,label:"Source Size"}).on("change",()=>this.bake()),r.addInput(this.options,"directIntensity",{min:0,max:4,step:.05,label:"View Multiplier"}).on("change",()=>{var f;return(f=this.composite)==null?void 0:f.refresh({directIntensity:this.options.directIntensity})});const o=n.addFolder({title:"Global Illumination"});o.addInput(this.options,"indirectLightEnabled",{label:"Enabled"}).on("change",()=>this.bake()),o.addInput(this.options,"giIntensity",{min:0,max:4,step:.05,label:"Bounce Power"}).on("change",()=>{var f;return(f=this.composite)==null?void 0:f.refresh({giIntensity:this.options.giIntensity})}),o.addInput(this.options,"skyColor",{view:"color",label:"Sky Color"}).on("change",()=>this.bake()),o.addInput(this.options,"skyIntensity",{min:0,max:4,step:.05,label:"Sky Intensity"}).on("change",()=>this.bake());const a=n.addFolder({title:"Ambient Occlusion"});a.addInput(this.options,"ambientLightEnabled",{label:"Enabled"}).on("change",()=>{var f;(f=this.composite)==null||f.refresh({aoEnabled:this.options.ambientLightEnabled}),this.bake()}),a.addInput(this.options,"ambientDistance",{min:.05,max:2,step:.05,label:"Max Distance"}).on("change",()=>this.bake());const c=this.pane.addFolder({title:"Refinement",expanded:!1});c.element.classList.add("tp-post"),c.addInput(this.options,"autoApplyRefinement",{label:"Auto-apply"}),c.addInput(this.options,"dilationIterations",{min:0,max:8,step:1,label:"Dilate Iters"}),c.addInput(this.options,"denoiseEnabled",{label:"Denoise"}),c.addInput(this.options,"denoiseSigma",{min:.1,max:8,step:.1,label:"Spatial Sigma"}),c.addInput(this.options,"denoiseThreshold",{min:.01,max:1,step:.01,label:"Edge Thresh"}),c.addInput(this.options,"denoiseKSigma",{min:.5,max:3,step:.1,label:"Range Sigma"}),c.addButton({title:"Run Refinement"}).on("click",()=>this.applyRefinement()),c.addButton({title:"Revert to Raw"}).on("click",()=>this.showUnrefined());const h=this.pane.addFolder({title:"Export",expanded:!1});h.element.classList.add("tp-export"),h.addInput(this.options,"exportFormat",{options:{"PNG (LDR preview)":"png","EXR (HDR linear)":"exr","Raw Float32 (.bin)":"bin"},label:"Format"}),h.addButton({title:"Export Final Lightmap"}).on("click",()=>this.exportFinal()),h.addButton({title:"Export Current Layer"}).on("click",()=>this.exportCurrent());const d=this.pane.addFolder({title:"Atlas Viewer",expanded:!1});d.element.classList.add("tp-viewer"),d.addInput(this.options,"atlasViewerEnabled",{label:"Enabled"}).on("change",f=>{this.atlasViewer.visible=f.value}),d.addInput(this.options,"atlasViewerSize",{min:128,max:768,step:32,label:"Size"}).on("change",f=>this.atlasViewer.setSize(f.value)),d.addInput(this.options,"atlasViewerCorner",{options:{"Top-Left":"tl","Top-Right":"tr","Bot-Left":"bl","Bot-Right":"br"},label:"Corner"}).on("change",f=>this.atlasViewer.setCorner(f.value)),d.addInput(this.options,"atlasViewerSRGB",{label:"sRGB Encode"}).on("change",f=>this.atlasViewer.setSRGB(f.value));const p=this.pane.addFolder({title:"Scene",expanded:!1});p.element.classList.add("tp-scene"),p.addInput(this.options,"preset",{options:wS,label:"Complexity"}).on("change",()=>this.rebuildScene()),this.initUI(),this.rebuildScene()}initUI(){this.fpsElement=document.createElement("div"),this.fpsElement.style.position="absolute",this.fpsElement.style.top="10px",this.fpsElement.style.left="10px",this.fpsElement.style.color="#00ff00",this.fpsElement.style.fontFamily="monospace",this.fpsElement.style.fontSize="12px",this.fpsElement.style.pointerEvents="none",this.fpsElement.style.zIndex="100",document.body.appendChild(this.fpsElement),this.progressContainer=document.createElement("div"),this.progressContainer.style.position="absolute",this.progressContainer.style.bottom="20px",this.progressContainer.style.left="20px",this.progressContainer.style.width="300px",this.progressContainer.style.backgroundColor="rgba(0, 0, 0, 0.7)",this.progressContainer.style.padding="12px",this.progressContainer.style.borderRadius="4px",this.progressContainer.style.fontFamily="monospace",this.progressContainer.style.fontSize="11px",this.progressContainer.style.color="#fff",this.progressContainer.style.display="none",this.progressContainer.style.zIndex="100",this.progressContainer.style.border="1px solid #444",document.body.appendChild(this.progressContainer);const t=document.createElement("div");t.style.width="100%",t.style.height="4px",t.style.backgroundColor="#222",t.style.marginTop="8px",t.style.borderRadius="2px",t.style.overflow="hidden",this.progressContainer.appendChild(t),this.progressBar=document.createElement("div"),this.progressBar.className="progress-pulse",this.progressBar.style.width="0%",this.progressBar.style.height="100%",this.progressBar.style.backgroundColor="#00ff00",t.appendChild(this.progressBar),this.progressText=document.createElement("div"),this.progressText.style.marginTop="8px",this.progressText.style.whiteSpace="pre",this.progressContainer.appendChild(this.progressText)}updateSize(){this.renderer.setSize(window.innerWidth,window.innerHeight),this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setPixelRatio(window.devicePixelRatio)}mat(t,e=.95,n=0){const r=new Uw({color:t,roughness:e,metalness:n});return r._originalMap=null,r}addMesh(t){const e=t;return this.meshes.push(e),this.cornellRoot.add(e),e}buildWalls(){const e=this.mat(15790320),n=this.mat(14034728),r=this.mat(2924588),o=new ft(new he(xn,.2,xn),e);o.position.set(0,-.2/2,0),this.addMesh(o);const a=new ft(new he(xn,.2,xn),e.clone());a.material._originalMap=null,a.position.set(0,xn+.2/2,0),this.addMesh(a);const c=new ft(new he(xn,xn,.2),e.clone());c.material._originalMap=null,c.position.set(0,Xr,-Xr-.2/2),this.addMesh(c);const h=new ft(new he(.2,xn,xn),n);h.position.set(-Xr-.2/2,Xr,0),this.addMesh(h);const d=new ft(new he(.2,xn,xn),r);d.position.set(Xr+.2/2,Xr,0),this.addMesh(d)}buildClassicBlocks(){const t=this.mat(15263976),e=new ft(new he(3,6,3),t);e.position.set(-1.8,3,-1.5),e.rotation.y=.29,this.addMesh(e);const n=new ft(new he(3,3,3),t.clone());n.material._originalMap=null,n.position.set(1.8,1.5,1.5),n.rotation.y=-.29,this.addMesh(n)}buildAdvancedExtras(){const t=new ft(new Ta(1,48,32),this.mat(16119285,.4,0));t.position.set(2.4,1,3),this.addMesh(t);const e=new ft(new Fc(.55,.18,160,24),this.mat(16765286,.55,0));e.position.set(0,1,2.8),e.rotation.x=Math.PI/2,this.addMesh(e);const n=new ft(new he(1.2,1.2,1.2),this.mat(13072954,.8,0));n.position.set(-3.5,.6,2.8),n.rotation.y=.45,this.addMesh(n)}async rebuildScene(){this.cornellRoot&&this.scene.remove(this.cornellRoot),this.cornellRoot=new Ue,this.scene.add(this.cornellRoot),this.meshes=[],this.lightmapper=null,this.buildWalls(),this.buildClassicBlocks(),this.options.preset==="advanced"&&this.buildAdvancedExtras(),await this.bake(),this.startLoop()}async bake(){var p,f,m;if(!this.meshes.length)return;this.progressContainer.style.display="block",this.bakeStartTime=performance.now(),this.options.postStatus="baking...";const t=this.options.lightMapSize;this.scene.updateMatrixWorld(!0),await mM(this.meshes);const e=EM(this.renderer,this.meshes,t,!0);this.positionTexture=e.positionTexture,this.normalTexture=e.normalTexture;const n=UM(this.meshes),r=new Vc(n),o=FM(n,this.meshes),a=OM(o);n.index.array,n.attributes.meshIndex.array;const c=new se(this.options.lightColor).convertSRGBToLinear(),h=new se(this.options.skyColor).convertSRGBToLinear();this.visualLight.color.copy(c),this.visualLight.intensity=30*this.options.lightIntensity;const d={resolution:t,casts:this.options.casts,filterMode:this.options.filterMode==="linear"?Ie:pe,lightPosition:this.lightDummy.position,lightSize:this.options.lightSize,lightColor:c,lightIntensity:this.options.lightIntensity,skyColor:h,skyIntensity:this.options.skyIntensity,ambientDistance:this.options.ambientDistance,ambientLightEnabled:this.options.ambientLightEnabled,directLightEnabled:this.options.directLightEnabled,indirectLightEnabled:this.options.indirectLightEnabled,albedoTexture:a.albedoTexture,emissiveTexture:a.emissiveTexture,materialTextureSize:a.side,targetSamples:this.options.targetSamples};(p=this.composite)==null||p.dispose(),this.composite=null,(f=this.refinement)==null||f.dispose(),this.refinement=null,(m=this.lightmapper)==null||m.dispose(),this.lightmapper=await SM(this.renderer,this.positionTexture,this.normalTexture,r,d),this.lightmapTarget=this.lightmapper.renderTexture,this.composite=AM(this.renderer,this.lightmapper.textures,this.options.lightMapSize,{directIntensity:this.options.directIntensity,giIntensity:this.options.giIntensity,aoEnabled:this.options.ambientLightEnabled}),this.options.refinementStatus="idle",this.options.samples=0,this.options.spp=0,this.options.etaSec=0,this.options.pause=!1,this.pane.refresh(),this.lightmapper.render(),this.applyRenderMode()}applyQualityPreset(t){const e=mp[t];!e||(this.options.lightMapSize=e.lightMapSize,this.options.casts=e.casts,this.options.targetSamples=e.targetSamples,this.pane.refresh(),this.bake())}async applyRefinement(){var n;if(!this.lightmapper||!this.positionTexture)return;this.options.refinementStatus="running",this.pane.refresh(),(n=this.refinement)==null||n.dispose();const t=this.composite.texture,e=this.options.lightMapSize;this.refinement=await DM(this.renderer,t,this.positionTexture,e,this.options,r=>{this.progressBar.style.width=`${Math.min(100,r*100)}%`,this.progressText.innerText=`Refinement: ${Math.round(r*100)}%
Dilation & Bilateral Denoise...`}),this.options.refinementStatus=this.options.dilationIterations>0||this.options.denoiseEnabled?"applied":"skipped",this.pane.refresh(),this.applyRenderMode(),this.progressText.innerText=`Baking & Refinement complete!
Ready.`,setTimeout(()=>{this.progressContainer.style.display="none"},3e3)}async exportFinal(){var n,r,o,a;const t=(a=(o=(n=this.refinement)==null?void 0:n.texture)!=null?o:(r=this.composite)==null?void 0:r.texture)!=null?a:null;if(!t){console.warn("[baker] export: no bake to export \u2014 bake first");return}const e=this.refinement?"refined":"composite";await this.runExport(t,`lightmap_${e}_${this.options.lightMapSize}`)}async exportCurrent(){var n;const t=(n=$i.find(r=>r.id===this.options.layer))!=null?n:$i[0],e=t.getLightMap(this.layerContext());if(!e){console.warn(`[baker] export: layer "${t.id}" has no exportable texture`);return}await this.runExport(e,`lightmap_${t.id}_${this.options.lightMapSize}`)}async runExport(t,e){const n=this.options.exportFormat,r=this.options.lightMapSize,o=performance.now();try{await _S(this.renderer,t,r,e,n),console.log(`[baker] exported ${e}.${n} (${r}\xD7${r}) in ${(performance.now()-o).toFixed(0)}ms`)}catch(a){console.error("[baker] export failed:",a)}}showUnrefined(){var t;(t=this.refinement)==null||t.dispose(),this.refinement=null,this.options.refinementStatus="idle",this.pane.refresh(),this.applyRenderMode()}layerContext(){var t,e,n,r,o,a,c,h,d,p,f,m,x,b;return{composite:(e=(t=this.composite)==null?void 0:t.texture)!=null?e:null,direct:(r=(n=this.lightmapper)==null?void 0:n.textures.direct)!=null?r:null,indirect:(a=(o=this.lightmapper)==null?void 0:o.textures.indirect)!=null?a:null,ao:(h=(c=this.lightmapper)==null?void 0:c.textures.ao)!=null?h:null,raw:(p=(d=this.composite)==null?void 0:d.texture)!=null?p:null,refinement:(m=(f=this.refinement)==null?void 0:f.texture)!=null?m:null,refinementDilated:null,positions:(x=this.positionTexture)!=null?x:null,normals:(b=this.normalTexture)!=null?b:null}}applyRenderMode(){var r,o;const t=(r=$i.find(a=>a.id===this.options.layer))!=null?r:$i[0],e=this.layerContext(),n=t.getLightMap(e);for(const a of this.meshes){const c=a.material;c.map=t.showAlbedo&&(o=c._originalMap)!=null?o:null,c.lightMap=n,c.lightMap&&(c.lightMap.channel=2,c.lightMap.needsUpdate=!0),c.lightMapIntensity=1,c.needsUpdate=!0}this.lightMarker.material.color=new se(16777215),this.visualLight.visible=t.id==="albedo"}startLoop(){if(this.looping)return;this.looping=!0;let t=performance.now(),e=0,n=0;const r=()=>{var a,c,h,d,p,f;requestAnimationFrame(r),this.lightTransformController.visible=this.options.showGizmo,this.lightTransformController.enabled=this.options.showGizmo;const o=performance.now();if(e++,o>=t+1e3&&(n=Math.round(e*1e3/(o-t)),this.fpsElement.innerText=`FPS: ${n}`,e=0,t=o),this.lightmapper&&!this.options.pause){const m=this.lightmapper.render();if(m.done){this.options.pause=!0,this.options.etaSec=0;const E=(performance.now()-this.bakeStartTime)/1e3;console.log(`[baker] done in ${E.toFixed(2)}s`),this.progressText.innerText=`Baking complete! ${E.toFixed(1)}s
Running post-process...`;const y=this.lightmapper.renderTarget;for(let T=0;T<3;T++){const C=y.texture[T];C.generateMipmaps=!0,C.minFilter=Cc,this.renderer.initTexture(C)}(a=this.composite)!=null&&a.texture&&(this.composite.texture.needsUpdate=!0),this.pane.refresh(),this.options.autoApplyRefinement&&this.applyRefinement();return}(c=this.composite)==null||c.refresh();const x=this.options.targetSamples,b=x>0?m.samples/x:0;this.progressBar.style.width=`${Math.min(100,b*100)}%`;const w=(performance.now()-this.bakeStartTime)/1e3,_=b>0&&b<1?w/b-w:0,v=m.samples*this.options.casts;this.options.samples=m.samples,this.options.spp=v,this.options.etaSec=Math.ceil(_),this.progressText.innerText=`Baking: ${m.samples}/${x} frames (${v} spp)
Elapsed: ${w.toFixed(1)}s | ETA: ${this.options.etaSec}s`}if(this.controls.update(),this.renderer.render(this.scene,this.camera),this.atlasViewer.visible=this.options.atlasViewerEnabled,this.atlasViewer.visible){const m=(h=$i.find(b=>b.id===this.options.layer))!=null?h:$i[0],x=(f=(p=m.getLightMap(this.layerContext()))!=null?p:(d=this.composite)==null?void 0:d.texture)!=null?f:null;this.atlasViewer.setTexture(x),this.atlasViewer.setLayerLabel(m.label)}this.atlasViewer.render(this.renderer)};r()}}(async()=>{await fM();const i=new ES;window.addEventListener("resize",()=>i.updateSize())})();
