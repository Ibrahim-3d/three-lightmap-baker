const yg=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function e(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(r){if(r.ep)return;r.ep=!0;const o=e(r);fetch(r.href,o)}};yg();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const rc="161",is={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ss={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},wg=0,Mu=1,Mg=2,Dd=1,Eg=2,Qn=3,Vn=0,on=1,un=2,Bn=0,Bs=1,Eu=2,Su=3,Tu=4,Sg=5,Vi=100,Tg=101,Ag=102,Au=103,Cu=104,Cg=200,Pg=201,Rg=202,Lg=203,Il=204,Ul=205,Dg=206,Ig=207,Ug=208,Ng=209,Fg=210,Og=211,Bg=212,kg=213,Vg=214,zg=0,Hg=1,Gg=2,qo=3,Wg=4,Xg=5,qg=6,jg=7,Id=0,Yg=1,Kg=2,Ei=0,$g=1,Zg=2,Qg=3,Jg=4,t_=5,e_=6,Ud=300,zs=301,Hs=302,Nl=303,Fl=304,na=306,Ol=1e3,_n=1001,Bl=1002,de=1003,Pu=1004,hr=1005,Ve=1006,Va=1007,Wi=1008,oc=1008,kn=1009,kl=1010,Nd=1011,ia=1012,Cr=1013,vn=1014,Ne=1015,Dr=1016,Fd=1017,Od=1018,Xi=1020,n_=1021,Ze=1023,i_=1024,s_=1025,qi=1026,Gs=1027,Bd=1028,ac=1029,kd=1030,sa=1031,Ir=1033,za=33776,Ha=33777,Ga=33778,Wa=33779,Ru=35840,Lu=35841,Du=35842,Iu=35843,Vd=36196,Uu=37492,Nu=37496,Fu=37808,Ou=37809,Bu=37810,ku=37811,Vu=37812,zu=37813,Hu=37814,Gu=37815,Wu=37816,Xu=37817,qu=37818,ju=37819,Yu=37820,Ku=37821,Xa=36492,$u=36494,Zu=36495,r_=36283,Qu=36284,Ju=36285,th=36286,zd=3e3,ji=3001,o_=3200,a_=3201,Hd=0,l_=1,Sn="",ze="srgb",ni="srgb-linear",lc="display-p3",ra="display-p3-linear",jo="linear",_e="srgb",Yo="rec709",Ko="p3",rs=7680,eh=519,c_=512,u_=513,h_=514,Gd=515,d_=516,p_=517,f_=518,m_=519,nh=35044,$o="300 es",Vl=1035,ti=2e3,Zo=2001;class Yi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const o=r.indexOf(e);o!==-1&&r.splice(o,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let o=0,l=r.length;o<l;o++)r[o].call(this,t);t.target=null}}}const je=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ih=1234567;const Pr=Math.PI/180,Ur=180/Math.PI;function Xs(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(je[i&255]+je[i>>8&255]+je[i>>16&255]+je[i>>24&255]+"-"+je[t&255]+je[t>>8&255]+"-"+je[t>>16&15|64]+je[t>>24&255]+"-"+je[e&63|128]+je[e>>8&255]+"-"+je[e>>16&255]+je[e>>24&255]+je[n&255]+je[n>>8&255]+je[n>>16&255]+je[n>>24&255]).toLowerCase()}function Xe(i,t,e){return Math.max(t,Math.min(e,i))}function cc(i,t){return(i%t+t)%t}function g_(i,t,e,n,r){return n+(i-t)*(r-n)/(e-t)}function __(i,t,e){return i!==t?(e-i)/(t-i):0}function Rr(i,t,e){return(1-e)*i+e*t}function v_(i,t,e,n){return Rr(i,t,1-Math.exp(-e*n))}function x_(i,t=1){return t-Math.abs(cc(i,t*2)-t)}function b_(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function y_(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function w_(i,t){return i+Math.floor(Math.random()*(t-i+1))}function M_(i,t){return i+Math.random()*(t-i)}function E_(i){return i*(.5-Math.random())}function S_(i){i!==void 0&&(ih=i);let t=ih+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function T_(i){return i*Pr}function A_(i){return i*Ur}function zl(i){return(i&i-1)===0&&i!==0}function C_(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Qo(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function P_(i,t,e,n,r){const o=Math.cos,l=Math.sin,u=o(e/2),h=l(e/2),d=o((t+n)/2),p=l((t+n)/2),m=o((t-n)/2),g=l((t-n)/2),x=o((n-t)/2),b=l((n-t)/2);switch(r){case"XYX":i.set(u*p,h*m,h*g,u*d);break;case"YZY":i.set(h*g,u*p,h*m,u*d);break;case"ZXZ":i.set(h*m,h*g,u*p,u*d);break;case"XZX":i.set(u*p,h*b,h*x,u*d);break;case"YXY":i.set(h*x,u*p,h*b,u*d);break;case"ZYZ":i.set(h*b,h*x,u*p,u*d);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Is(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function en(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const R_={DEG2RAD:Pr,RAD2DEG:Ur,generateUUID:Xs,clamp:Xe,euclideanModulo:cc,mapLinear:g_,inverseLerp:__,lerp:Rr,damp:v_,pingpong:x_,smoothstep:b_,smootherstep:y_,randInt:w_,randFloat:M_,randFloatSpread:E_,seededRandom:S_,degToRad:T_,radToDeg:A_,isPowerOfTwo:zl,ceilPowerOfTwo:C_,floorPowerOfTwo:Qo,setQuaternionFromProperEuler:P_,normalize:en,denormalize:Is};class Rt{constructor(t=0,e=0){Rt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Xe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),o=this.x-t.x,l=this.y-t.y;return this.x=o*n-l*r+t.x,this.y=o*r+l*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ee{constructor(t,e,n,r,o,l,u,h,d){ee.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,o,l,u,h,d)}set(t,e,n,r,o,l,u,h,d){const p=this.elements;return p[0]=t,p[1]=r,p[2]=u,p[3]=e,p[4]=o,p[5]=h,p[6]=n,p[7]=l,p[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,o=this.elements,l=n[0],u=n[3],h=n[6],d=n[1],p=n[4],m=n[7],g=n[2],x=n[5],b=n[8],w=r[0],v=r[3],_=r[6],S=r[1],y=r[4],T=r[7],P=r[2],C=r[5],A=r[8];return o[0]=l*w+u*S+h*P,o[3]=l*v+u*y+h*C,o[6]=l*_+u*T+h*A,o[1]=d*w+p*S+m*P,o[4]=d*v+p*y+m*C,o[7]=d*_+p*T+m*A,o[2]=g*w+x*S+b*P,o[5]=g*v+x*y+b*C,o[8]=g*_+x*T+b*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],o=t[3],l=t[4],u=t[5],h=t[6],d=t[7],p=t[8];return e*l*p-e*u*d-n*o*p+n*u*h+r*o*d-r*l*h}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],o=t[3],l=t[4],u=t[5],h=t[6],d=t[7],p=t[8],m=p*l-u*d,g=u*h-p*o,x=d*o-l*h,b=e*m+n*g+r*x;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/b;return t[0]=m*w,t[1]=(r*d-p*n)*w,t[2]=(u*n-r*l)*w,t[3]=g*w,t[4]=(p*e-r*h)*w,t[5]=(r*o-u*e)*w,t[6]=x*w,t[7]=(n*h-d*e)*w,t[8]=(l*e-n*o)*w,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,o,l,u){const h=Math.cos(o),d=Math.sin(o);return this.set(n*h,n*d,-n*(h*l+d*u)+l+t,-r*d,r*h,-r*(-d*l+h*u)+u+e,0,0,1),this}scale(t,e){return this.premultiply(qa.makeScale(t,e)),this}rotate(t){return this.premultiply(qa.makeRotation(-t)),this}translate(t,e){return this.premultiply(qa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const qa=new ee;function Wd(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Jo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function L_(){const i=Jo("canvas");return i.style.display="block",i}const sh={};function ks(i){i in sh||(sh[i]=!0,console.warn(i))}const rh=new ee().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),oh=new ee().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Zr={[ni]:{transfer:jo,primaries:Yo,toReference:i=>i,fromReference:i=>i},[ze]:{transfer:_e,primaries:Yo,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[ra]:{transfer:jo,primaries:Ko,toReference:i=>i.applyMatrix3(oh),fromReference:i=>i.applyMatrix3(rh)},[lc]:{transfer:_e,primaries:Ko,toReference:i=>i.convertSRGBToLinear().applyMatrix3(oh),fromReference:i=>i.applyMatrix3(rh).convertLinearToSRGB()}},D_=new Set([ni,ra]),he={enabled:!0,_workingColorSpace:ni,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!D_.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=Zr[t].toReference,r=Zr[e].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return Zr[i].primaries},getTransfer:function(i){return i===Sn?jo:Zr[i].transfer}};function Vs(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ja(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let os;class Xd{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{os===void 0&&(os=Jo("canvas")),os.width=t.width,os.height=t.height;const n=os.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=os}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){const e=Jo("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),o=r.data;for(let l=0;l<o.length;l++)o[l]=Vs(o[l]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Vs(e[n]/255)*255):e[n]=Vs(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let I_=0;class qd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:I_++}),this.uuid=Xs(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let l=0,u=r.length;l<u;l++)r[l].isDataTexture?o.push(Ya(r[l].image)):o.push(Ya(r[l]))}else o=Ya(r);n.url=o}return e||(t.images[this.uuid]=n),n}}function Ya(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?Xd.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let U_=0;class an extends Yi{constructor(t=an.DEFAULT_IMAGE,e=an.DEFAULT_MAPPING,n=_n,r=_n,o=Ve,l=Wi,u=Ze,h=kn,d=an.DEFAULT_ANISOTROPY,p=Sn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:U_++}),this.uuid=Xs(),this.name="",this.source=new qd(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=o,this.minFilter=l,this.anisotropy=d,this.format=u,this.internalFormat=null,this.type=h,this.offset=new Rt(0,0),this.repeat=new Rt(1,1),this.center=new Rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ee,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof p=="string"?this.colorSpace=p:(ks("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=p===ji?ze:Sn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ud)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ol:t.x=t.x-Math.floor(t.x);break;case _n:t.x=t.x<0?0:1;break;case Bl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ol:t.y=t.y-Math.floor(t.y);break;case _n:t.y=t.y<0?0:1;break;case Bl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ks("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ze?ji:zd}set encoding(t){ks("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===ji?ze:Sn}}an.DEFAULT_IMAGE=null;an.DEFAULT_MAPPING=Ud;an.DEFAULT_ANISOTROPY=1;class Me{constructor(t=0,e=0,n=0,r=1){Me.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,o=this.w,l=t.elements;return this.x=l[0]*e+l[4]*n+l[8]*r+l[12]*o,this.y=l[1]*e+l[5]*n+l[9]*r+l[13]*o,this.z=l[2]*e+l[6]*n+l[10]*r+l[14]*o,this.w=l[3]*e+l[7]*n+l[11]*r+l[15]*o,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,o;const h=t.elements,d=h[0],p=h[4],m=h[8],g=h[1],x=h[5],b=h[9],w=h[2],v=h[6],_=h[10];if(Math.abs(p-g)<.01&&Math.abs(m-w)<.01&&Math.abs(b-v)<.01){if(Math.abs(p+g)<.1&&Math.abs(m+w)<.1&&Math.abs(b+v)<.1&&Math.abs(d+x+_-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(d+1)/2,T=(x+1)/2,P=(_+1)/2,C=(p+g)/4,A=(m+w)/4,O=(b+v)/4;return y>T&&y>P?y<.01?(n=0,r=.707106781,o=.707106781):(n=Math.sqrt(y),r=C/n,o=A/n):T>P?T<.01?(n=.707106781,r=0,o=.707106781):(r=Math.sqrt(T),n=C/r,o=O/r):P<.01?(n=.707106781,r=.707106781,o=0):(o=Math.sqrt(P),n=A/o,r=O/o),this.set(n,r,o,e),this}let S=Math.sqrt((v-b)*(v-b)+(m-w)*(m-w)+(g-p)*(g-p));return Math.abs(S)<.001&&(S=1),this.x=(v-b)/S,this.y=(m-w)/S,this.z=(g-p)/S,this.w=Math.acos((d+x+_-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class N_ extends Yi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Me(0,0,t,e),this.scissorTest=!1,this.viewport=new Me(0,0,t,e);const r={width:t,height:e,depth:1};n.encoding!==void 0&&(ks("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===ji?ze:Sn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ve,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new an(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new qd(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Dn extends N_{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class jd extends an{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=de,this.minFilter=de,this.wrapR=_n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class F_ extends an{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=de,this.minFilter=de,this.wrapR=_n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class O_ extends Dn{constructor(t=1,e=1,n=1,r={}){super(t,e,r),this.isWebGLMultipleRenderTargets=!0;const o=this.texture;this.texture=[];for(let l=0;l<n;l++)this.texture[l]=o.clone(),this.texture[l].isRenderTargetTexture=!0}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,o=this.texture.length;r<o;r++)this.texture[r].image.width=t,this.texture[r].image.height=e,this.texture[r].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}copy(t){this.dispose(),this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.texture.length=0;for(let e=0,n=t.texture.length;e<n;e++)this.texture[e]=t.texture[e].clone(),this.texture[e].isRenderTargetTexture=!0;return this}}class We{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,o,l,u){let h=n[r+0],d=n[r+1],p=n[r+2],m=n[r+3];const g=o[l+0],x=o[l+1],b=o[l+2],w=o[l+3];if(u===0){t[e+0]=h,t[e+1]=d,t[e+2]=p,t[e+3]=m;return}if(u===1){t[e+0]=g,t[e+1]=x,t[e+2]=b,t[e+3]=w;return}if(m!==w||h!==g||d!==x||p!==b){let v=1-u;const _=h*g+d*x+p*b+m*w,S=_>=0?1:-1,y=1-_*_;if(y>Number.EPSILON){const P=Math.sqrt(y),C=Math.atan2(P,_*S);v=Math.sin(v*C)/P,u=Math.sin(u*C)/P}const T=u*S;if(h=h*v+g*T,d=d*v+x*T,p=p*v+b*T,m=m*v+w*T,v===1-u){const P=1/Math.sqrt(h*h+d*d+p*p+m*m);h*=P,d*=P,p*=P,m*=P}}t[e]=h,t[e+1]=d,t[e+2]=p,t[e+3]=m}static multiplyQuaternionsFlat(t,e,n,r,o,l){const u=n[r],h=n[r+1],d=n[r+2],p=n[r+3],m=o[l],g=o[l+1],x=o[l+2],b=o[l+3];return t[e]=u*b+p*m+h*x-d*g,t[e+1]=h*b+p*g+d*m-u*x,t[e+2]=d*b+p*x+u*g-h*m,t[e+3]=p*b-u*m-h*g-d*x,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,o=t._z,l=t._order,u=Math.cos,h=Math.sin,d=u(n/2),p=u(r/2),m=u(o/2),g=h(n/2),x=h(r/2),b=h(o/2);switch(l){case"XYZ":this._x=g*p*m+d*x*b,this._y=d*x*m-g*p*b,this._z=d*p*b+g*x*m,this._w=d*p*m-g*x*b;break;case"YXZ":this._x=g*p*m+d*x*b,this._y=d*x*m-g*p*b,this._z=d*p*b-g*x*m,this._w=d*p*m+g*x*b;break;case"ZXY":this._x=g*p*m-d*x*b,this._y=d*x*m+g*p*b,this._z=d*p*b+g*x*m,this._w=d*p*m-g*x*b;break;case"ZYX":this._x=g*p*m-d*x*b,this._y=d*x*m+g*p*b,this._z=d*p*b-g*x*m,this._w=d*p*m+g*x*b;break;case"YZX":this._x=g*p*m+d*x*b,this._y=d*x*m+g*p*b,this._z=d*p*b-g*x*m,this._w=d*p*m-g*x*b;break;case"XZY":this._x=g*p*m-d*x*b,this._y=d*x*m-g*p*b,this._z=d*p*b+g*x*m,this._w=d*p*m+g*x*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+l)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],o=e[8],l=e[1],u=e[5],h=e[9],d=e[2],p=e[6],m=e[10],g=n+u+m;if(g>0){const x=.5/Math.sqrt(g+1);this._w=.25/x,this._x=(p-h)*x,this._y=(o-d)*x,this._z=(l-r)*x}else if(n>u&&n>m){const x=2*Math.sqrt(1+n-u-m);this._w=(p-h)/x,this._x=.25*x,this._y=(r+l)/x,this._z=(o+d)/x}else if(u>m){const x=2*Math.sqrt(1+u-n-m);this._w=(o-d)/x,this._x=(r+l)/x,this._y=.25*x,this._z=(h+p)/x}else{const x=2*Math.sqrt(1+m-n-u);this._w=(l-r)/x,this._x=(o+d)/x,this._y=(h+p)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Xe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,o=t._z,l=t._w,u=e._x,h=e._y,d=e._z,p=e._w;return this._x=n*p+l*u+r*d-o*h,this._y=r*p+l*h+o*u-n*d,this._z=o*p+l*d+n*h-r*u,this._w=l*p-n*u-r*h-o*d,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,r=this._y,o=this._z,l=this._w;let u=l*t._w+n*t._x+r*t._y+o*t._z;if(u<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,u=-u):this.copy(t),u>=1)return this._w=l,this._x=n,this._y=r,this._z=o,this;const h=1-u*u;if(h<=Number.EPSILON){const x=1-e;return this._w=x*l+e*this._w,this._x=x*n+e*this._x,this._y=x*r+e*this._y,this._z=x*o+e*this._z,this.normalize(),this}const d=Math.sqrt(h),p=Math.atan2(d,u),m=Math.sin((1-e)*p)/d,g=Math.sin(e*p)/d;return this._w=l*m+this._w*g,this._x=n*m+this._x*g,this._y=r*m+this._y*g,this._z=o*m+this._z*g,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),r=2*Math.PI*Math.random(),o=2*Math.PI*Math.random();return this.set(e*Math.cos(r),n*Math.sin(o),n*Math.cos(o),e*Math.sin(r))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(t=0,e=0,n=0){I.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ah.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ah.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,o=t.elements;return this.x=o[0]*e+o[3]*n+o[6]*r,this.y=o[1]*e+o[4]*n+o[7]*r,this.z=o[2]*e+o[5]*n+o[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,o=t.elements,l=1/(o[3]*e+o[7]*n+o[11]*r+o[15]);return this.x=(o[0]*e+o[4]*n+o[8]*r+o[12])*l,this.y=(o[1]*e+o[5]*n+o[9]*r+o[13])*l,this.z=(o[2]*e+o[6]*n+o[10]*r+o[14])*l,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,o=t.x,l=t.y,u=t.z,h=t.w,d=2*(l*r-u*n),p=2*(u*e-o*r),m=2*(o*n-l*e);return this.x=e+h*d+l*m-u*p,this.y=n+h*p+u*d-o*m,this.z=r+h*m+o*p-l*d,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*r,this.y=o[1]*e+o[5]*n+o[9]*r,this.z=o[2]*e+o[6]*n+o[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,o=t.z,l=e.x,u=e.y,h=e.z;return this.x=r*h-o*u,this.y=o*l-n*h,this.z=n*u-r*l,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ka.copy(this).projectOnVector(t),this.sub(Ka)}reflect(t){return this.sub(Ka.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Xe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ka=new I,ah=new We;class tn{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Cn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Cn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Cn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const o=n.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let l=0,u=o.count;l<u;l++)t.isMesh===!0?t.getVertexPosition(l,Cn):Cn.fromBufferAttribute(o,l),Cn.applyMatrix4(t.matrixWorld),this.expandByPoint(Cn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Qr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Qr.copy(n.boundingBox)),Qr.applyMatrix4(t.matrixWorld),this.union(Qr)}const r=t.children;for(let o=0,l=r.length;o<l;o++)this.expandByObject(r[o],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Cn),Cn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(dr),Jr.subVectors(this.max,dr),as.subVectors(t.a,dr),ls.subVectors(t.b,dr),cs.subVectors(t.c,dr),pi.subVectors(ls,as),fi.subVectors(cs,ls),Ii.subVectors(as,cs);let e=[0,-pi.z,pi.y,0,-fi.z,fi.y,0,-Ii.z,Ii.y,pi.z,0,-pi.x,fi.z,0,-fi.x,Ii.z,0,-Ii.x,-pi.y,pi.x,0,-fi.y,fi.x,0,-Ii.y,Ii.x,0];return!$a(e,as,ls,cs,Jr)||(e=[1,0,0,0,1,0,0,0,1],!$a(e,as,ls,cs,Jr))?!1:(to.crossVectors(pi,fi),e=[to.x,to.y,to.z],$a(e,as,ls,cs,Jr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Cn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Cn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(jn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const jn=[new I,new I,new I,new I,new I,new I,new I,new I],Cn=new I,Qr=new tn,as=new I,ls=new I,cs=new I,pi=new I,fi=new I,Ii=new I,dr=new I,Jr=new I,to=new I,Ui=new I;function $a(i,t,e,n,r){for(let o=0,l=i.length-3;o<=l;o+=3){Ui.fromArray(i,o);const u=r.x*Math.abs(Ui.x)+r.y*Math.abs(Ui.y)+r.z*Math.abs(Ui.z),h=t.dot(Ui),d=e.dot(Ui),p=n.dot(Ui);if(Math.max(-Math.max(h,d,p),Math.min(h,d,p))>u)return!1}return!0}const B_=new tn,pr=new I,Za=new I;class Nr{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):B_.setFromPoints(t).getCenter(n);let r=0;for(let o=0,l=t.length;o<l;o++)r=Math.max(r,n.distanceToSquared(t[o]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;pr.subVectors(t,this.center);const e=pr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(pr,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Za.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(pr.copy(t.center).add(Za)),this.expandByPoint(pr.copy(t.center).sub(Za))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Yn=new I,Qa=new I,eo=new I,mi=new I,Ja=new I,no=new I,tl=new I;class oa{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Yn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Yn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Yn.copy(this.origin).addScaledVector(this.direction,e),Yn.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){Qa.copy(t).add(e).multiplyScalar(.5),eo.copy(e).sub(t).normalize(),mi.copy(this.origin).sub(Qa);const o=t.distanceTo(e)*.5,l=-this.direction.dot(eo),u=mi.dot(this.direction),h=-mi.dot(eo),d=mi.lengthSq(),p=Math.abs(1-l*l);let m,g,x,b;if(p>0)if(m=l*h-u,g=l*u-h,b=o*p,m>=0)if(g>=-b)if(g<=b){const w=1/p;m*=w,g*=w,x=m*(m+l*g+2*u)+g*(l*m+g+2*h)+d}else g=o,m=Math.max(0,-(l*g+u)),x=-m*m+g*(g+2*h)+d;else g=-o,m=Math.max(0,-(l*g+u)),x=-m*m+g*(g+2*h)+d;else g<=-b?(m=Math.max(0,-(-l*o+u)),g=m>0?-o:Math.min(Math.max(-o,-h),o),x=-m*m+g*(g+2*h)+d):g<=b?(m=0,g=Math.min(Math.max(-o,-h),o),x=g*(g+2*h)+d):(m=Math.max(0,-(l*o+u)),g=m>0?o:Math.min(Math.max(-o,-h),o),x=-m*m+g*(g+2*h)+d);else g=l>0?-o:o,m=Math.max(0,-(l*g+u)),x=-m*m+g*(g+2*h)+d;return n&&n.copy(this.origin).addScaledVector(this.direction,m),r&&r.copy(Qa).addScaledVector(eo,g),x}intersectSphere(t,e){Yn.subVectors(t.center,this.origin);const n=Yn.dot(this.direction),r=Yn.dot(Yn)-n*n,o=t.radius*t.radius;if(r>o)return null;const l=Math.sqrt(o-r),u=n-l,h=n+l;return h<0?null:u<0?this.at(h,e):this.at(u,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,o,l,u,h;const d=1/this.direction.x,p=1/this.direction.y,m=1/this.direction.z,g=this.origin;return d>=0?(n=(t.min.x-g.x)*d,r=(t.max.x-g.x)*d):(n=(t.max.x-g.x)*d,r=(t.min.x-g.x)*d),p>=0?(o=(t.min.y-g.y)*p,l=(t.max.y-g.y)*p):(o=(t.max.y-g.y)*p,l=(t.min.y-g.y)*p),n>l||o>r||((o>n||isNaN(n))&&(n=o),(l<r||isNaN(r))&&(r=l),m>=0?(u=(t.min.z-g.z)*m,h=(t.max.z-g.z)*m):(u=(t.max.z-g.z)*m,h=(t.min.z-g.z)*m),n>h||u>r)||((u>n||n!==n)&&(n=u),(h<r||r!==r)&&(r=h),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,Yn)!==null}intersectTriangle(t,e,n,r,o){Ja.subVectors(e,t),no.subVectors(n,t),tl.crossVectors(Ja,no);let l=this.direction.dot(tl),u;if(l>0){if(r)return null;u=1}else if(l<0)u=-1,l=-l;else return null;mi.subVectors(this.origin,t);const h=u*this.direction.dot(no.crossVectors(mi,no));if(h<0)return null;const d=u*this.direction.dot(Ja.cross(mi));if(d<0||h+d>l)return null;const p=-u*mi.dot(tl);return p<0?null:this.at(p/l,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ce{constructor(t,e,n,r,o,l,u,h,d,p,m,g,x,b,w,v){ce.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,o,l,u,h,d,p,m,g,x,b,w,v)}set(t,e,n,r,o,l,u,h,d,p,m,g,x,b,w,v){const _=this.elements;return _[0]=t,_[4]=e,_[8]=n,_[12]=r,_[1]=o,_[5]=l,_[9]=u,_[13]=h,_[2]=d,_[6]=p,_[10]=m,_[14]=g,_[3]=x,_[7]=b,_[11]=w,_[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ce().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,r=1/us.setFromMatrixColumn(t,0).length(),o=1/us.setFromMatrixColumn(t,1).length(),l=1/us.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*o,e[5]=n[5]*o,e[6]=n[6]*o,e[7]=0,e[8]=n[8]*l,e[9]=n[9]*l,e[10]=n[10]*l,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,o=t.z,l=Math.cos(n),u=Math.sin(n),h=Math.cos(r),d=Math.sin(r),p=Math.cos(o),m=Math.sin(o);if(t.order==="XYZ"){const g=l*p,x=l*m,b=u*p,w=u*m;e[0]=h*p,e[4]=-h*m,e[8]=d,e[1]=x+b*d,e[5]=g-w*d,e[9]=-u*h,e[2]=w-g*d,e[6]=b+x*d,e[10]=l*h}else if(t.order==="YXZ"){const g=h*p,x=h*m,b=d*p,w=d*m;e[0]=g+w*u,e[4]=b*u-x,e[8]=l*d,e[1]=l*m,e[5]=l*p,e[9]=-u,e[2]=x*u-b,e[6]=w+g*u,e[10]=l*h}else if(t.order==="ZXY"){const g=h*p,x=h*m,b=d*p,w=d*m;e[0]=g-w*u,e[4]=-l*m,e[8]=b+x*u,e[1]=x+b*u,e[5]=l*p,e[9]=w-g*u,e[2]=-l*d,e[6]=u,e[10]=l*h}else if(t.order==="ZYX"){const g=l*p,x=l*m,b=u*p,w=u*m;e[0]=h*p,e[4]=b*d-x,e[8]=g*d+w,e[1]=h*m,e[5]=w*d+g,e[9]=x*d-b,e[2]=-d,e[6]=u*h,e[10]=l*h}else if(t.order==="YZX"){const g=l*h,x=l*d,b=u*h,w=u*d;e[0]=h*p,e[4]=w-g*m,e[8]=b*m+x,e[1]=m,e[5]=l*p,e[9]=-u*p,e[2]=-d*p,e[6]=x*m+b,e[10]=g-w*m}else if(t.order==="XZY"){const g=l*h,x=l*d,b=u*h,w=u*d;e[0]=h*p,e[4]=-m,e[8]=d*p,e[1]=g*m+w,e[5]=l*p,e[9]=x*m-b,e[2]=b*m-x,e[6]=u*p,e[10]=w*m+g}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(k_,t,V_)}lookAt(t,e,n){const r=this.elements;return pn.subVectors(t,e),pn.lengthSq()===0&&(pn.z=1),pn.normalize(),gi.crossVectors(n,pn),gi.lengthSq()===0&&(Math.abs(n.z)===1?pn.x+=1e-4:pn.z+=1e-4,pn.normalize(),gi.crossVectors(n,pn)),gi.normalize(),io.crossVectors(pn,gi),r[0]=gi.x,r[4]=io.x,r[8]=pn.x,r[1]=gi.y,r[5]=io.y,r[9]=pn.y,r[2]=gi.z,r[6]=io.z,r[10]=pn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,o=this.elements,l=n[0],u=n[4],h=n[8],d=n[12],p=n[1],m=n[5],g=n[9],x=n[13],b=n[2],w=n[6],v=n[10],_=n[14],S=n[3],y=n[7],T=n[11],P=n[15],C=r[0],A=r[4],O=r[8],z=r[12],M=r[1],L=r[5],V=r[9],q=r[13],F=r[2],G=r[6],H=r[10],X=r[14],et=r[3],tt=r[7],nt=r[11],st=r[15];return o[0]=l*C+u*M+h*F+d*et,o[4]=l*A+u*L+h*G+d*tt,o[8]=l*O+u*V+h*H+d*nt,o[12]=l*z+u*q+h*X+d*st,o[1]=p*C+m*M+g*F+x*et,o[5]=p*A+m*L+g*G+x*tt,o[9]=p*O+m*V+g*H+x*nt,o[13]=p*z+m*q+g*X+x*st,o[2]=b*C+w*M+v*F+_*et,o[6]=b*A+w*L+v*G+_*tt,o[10]=b*O+w*V+v*H+_*nt,o[14]=b*z+w*q+v*X+_*st,o[3]=S*C+y*M+T*F+P*et,o[7]=S*A+y*L+T*G+P*tt,o[11]=S*O+y*V+T*H+P*nt,o[15]=S*z+y*q+T*X+P*st,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],o=t[12],l=t[1],u=t[5],h=t[9],d=t[13],p=t[2],m=t[6],g=t[10],x=t[14],b=t[3],w=t[7],v=t[11],_=t[15];return b*(+o*h*m-r*d*m-o*u*g+n*d*g+r*u*x-n*h*x)+w*(+e*h*x-e*d*g+o*l*g-r*l*x+r*d*p-o*h*p)+v*(+e*d*m-e*u*x-o*l*m+n*l*x+o*u*p-n*d*p)+_*(-r*u*p-e*h*m+e*u*g+r*l*m-n*l*g+n*h*p)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],o=t[3],l=t[4],u=t[5],h=t[6],d=t[7],p=t[8],m=t[9],g=t[10],x=t[11],b=t[12],w=t[13],v=t[14],_=t[15],S=m*v*d-w*g*d+w*h*x-u*v*x-m*h*_+u*g*_,y=b*g*d-p*v*d-b*h*x+l*v*x+p*h*_-l*g*_,T=p*w*d-b*m*d+b*u*x-l*w*x-p*u*_+l*m*_,P=b*m*h-p*w*h-b*u*g+l*w*g+p*u*v-l*m*v,C=e*S+n*y+r*T+o*P;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/C;return t[0]=S*A,t[1]=(w*g*o-m*v*o-w*r*x+n*v*x+m*r*_-n*g*_)*A,t[2]=(u*v*o-w*h*o+w*r*d-n*v*d-u*r*_+n*h*_)*A,t[3]=(m*h*o-u*g*o-m*r*d+n*g*d+u*r*x-n*h*x)*A,t[4]=y*A,t[5]=(p*v*o-b*g*o+b*r*x-e*v*x-p*r*_+e*g*_)*A,t[6]=(b*h*o-l*v*o-b*r*d+e*v*d+l*r*_-e*h*_)*A,t[7]=(l*g*o-p*h*o+p*r*d-e*g*d-l*r*x+e*h*x)*A,t[8]=T*A,t[9]=(b*m*o-p*w*o-b*n*x+e*w*x+p*n*_-e*m*_)*A,t[10]=(l*w*o-b*u*o+b*n*d-e*w*d-l*n*_+e*u*_)*A,t[11]=(p*u*o-l*m*o-p*n*d+e*m*d+l*n*x-e*u*x)*A,t[12]=P*A,t[13]=(p*w*r-b*m*r+b*n*g-e*w*g-p*n*v+e*m*v)*A,t[14]=(b*u*r-l*w*r-b*n*h+e*w*h+l*n*v-e*u*v)*A,t[15]=(l*m*r-p*u*r+p*n*h-e*m*h-l*n*g+e*u*g)*A,this}scale(t){const e=this.elements,n=t.x,r=t.y,o=t.z;return e[0]*=n,e[4]*=r,e[8]*=o,e[1]*=n,e[5]*=r,e[9]*=o,e[2]*=n,e[6]*=r,e[10]*=o,e[3]*=n,e[7]*=r,e[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),o=1-n,l=t.x,u=t.y,h=t.z,d=o*l,p=o*u;return this.set(d*l+n,d*u-r*h,d*h+r*u,0,d*u+r*h,p*u+n,p*h-r*l,0,d*h-r*u,p*h+r*l,o*h*h+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,o,l){return this.set(1,n,o,0,t,1,l,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,o=e._x,l=e._y,u=e._z,h=e._w,d=o+o,p=l+l,m=u+u,g=o*d,x=o*p,b=o*m,w=l*p,v=l*m,_=u*m,S=h*d,y=h*p,T=h*m,P=n.x,C=n.y,A=n.z;return r[0]=(1-(w+_))*P,r[1]=(x+T)*P,r[2]=(b-y)*P,r[3]=0,r[4]=(x-T)*C,r[5]=(1-(g+_))*C,r[6]=(v+S)*C,r[7]=0,r[8]=(b+y)*A,r[9]=(v-S)*A,r[10]=(1-(g+w))*A,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;let o=us.set(r[0],r[1],r[2]).length();const l=us.set(r[4],r[5],r[6]).length(),u=us.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),t.x=r[12],t.y=r[13],t.z=r[14],Pn.copy(this);const d=1/o,p=1/l,m=1/u;return Pn.elements[0]*=d,Pn.elements[1]*=d,Pn.elements[2]*=d,Pn.elements[4]*=p,Pn.elements[5]*=p,Pn.elements[6]*=p,Pn.elements[8]*=m,Pn.elements[9]*=m,Pn.elements[10]*=m,e.setFromRotationMatrix(Pn),n.x=o,n.y=l,n.z=u,this}makePerspective(t,e,n,r,o,l,u=ti){const h=this.elements,d=2*o/(e-t),p=2*o/(n-r),m=(e+t)/(e-t),g=(n+r)/(n-r);let x,b;if(u===ti)x=-(l+o)/(l-o),b=-2*l*o/(l-o);else if(u===Zo)x=-l/(l-o),b=-l*o/(l-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return h[0]=d,h[4]=0,h[8]=m,h[12]=0,h[1]=0,h[5]=p,h[9]=g,h[13]=0,h[2]=0,h[6]=0,h[10]=x,h[14]=b,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,e,n,r,o,l,u=ti){const h=this.elements,d=1/(e-t),p=1/(n-r),m=1/(l-o),g=(e+t)*d,x=(n+r)*p;let b,w;if(u===ti)b=(l+o)*m,w=-2*m;else if(u===Zo)b=o*m,w=-1*m;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return h[0]=2*d,h[4]=0,h[8]=0,h[12]=-g,h[1]=0,h[5]=2*p,h[9]=0,h[13]=-x,h[2]=0,h[6]=0,h[10]=w,h[14]=-b,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const us=new I,Pn=new ce,k_=new I(0,0,0),V_=new I(1,1,1),gi=new I,io=new I,pn=new I,lh=new ce,ch=new We;class Fr{constructor(t=0,e=0,n=0,r=Fr.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,o=r[0],l=r[4],u=r[8],h=r[1],d=r[5],p=r[9],m=r[2],g=r[6],x=r[10];switch(e){case"XYZ":this._y=Math.asin(Xe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-p,x),this._z=Math.atan2(-l,o)):(this._x=Math.atan2(g,d),this._z=0);break;case"YXZ":this._x=Math.asin(-Xe(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(u,x),this._z=Math.atan2(h,d)):(this._y=Math.atan2(-m,o),this._z=0);break;case"ZXY":this._x=Math.asin(Xe(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-m,x),this._z=Math.atan2(-l,d)):(this._y=0,this._z=Math.atan2(h,o));break;case"ZYX":this._y=Math.asin(-Xe(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(g,x),this._z=Math.atan2(h,o)):(this._x=0,this._z=Math.atan2(-l,d));break;case"YZX":this._z=Math.asin(Xe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-p,d),this._y=Math.atan2(-m,o)):(this._x=0,this._y=Math.atan2(u,x));break;case"XZY":this._z=Math.asin(-Xe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(g,d),this._y=Math.atan2(u,o)):(this._x=Math.atan2(-p,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return lh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(lh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ch.setFromEuler(this),this.setFromQuaternion(ch,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Fr.DEFAULT_ORDER="XYZ";class uc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let z_=0;const uh=new I,hs=new We,Kn=new ce,so=new I,fr=new I,H_=new I,G_=new We,hh=new I(1,0,0),dh=new I(0,1,0),ph=new I(0,0,1),W_={type:"added"},X_={type:"removed"};class Re extends Yi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:z_++}),this.uuid=Xs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Re.DEFAULT_UP.clone();const t=new I,e=new Fr,n=new We,r=new I(1,1,1);function o(){n.setFromEuler(e,!1)}function l(){e.setFromQuaternion(n,void 0,!1)}e._onChange(o),n._onChange(l),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ce},normalMatrix:{value:new ee}}),this.matrix=new ce,this.matrixWorld=new ce,this.matrixAutoUpdate=Re.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Re.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new uc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return hs.setFromAxisAngle(t,e),this.quaternion.multiply(hs),this}rotateOnWorldAxis(t,e){return hs.setFromAxisAngle(t,e),this.quaternion.premultiply(hs),this}rotateX(t){return this.rotateOnAxis(hh,t)}rotateY(t){return this.rotateOnAxis(dh,t)}rotateZ(t){return this.rotateOnAxis(ph,t)}translateOnAxis(t,e){return uh.copy(t).applyQuaternion(this.quaternion),this.position.add(uh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(hh,t)}translateY(t){return this.translateOnAxis(dh,t)}translateZ(t){return this.translateOnAxis(ph,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Kn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?so.copy(t):so.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),fr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Kn.lookAt(fr,so,this.up):Kn.lookAt(so,fr,this.up),this.quaternion.setFromRotationMatrix(Kn),r&&(Kn.extractRotation(r.matrixWorld),hs.setFromRotationMatrix(Kn),this.quaternion.premultiply(hs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(W_)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(X_)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Kn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Kn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Kn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const l=this.children[n].getObjectByProperty(t,e);if(l!==void 0)return l}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let o=0,l=r.length;o<l;o++)r[o].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fr,t,H_),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fr,G_,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++){const o=e[n];(o.matrixWorldAutoUpdate===!0||t===!0)&&o.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const r=this.children;for(let o=0,l=r.length;o<l;o++){const u=r[o];u.matrixWorldAutoUpdate===!0&&u.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(u=>({boxInitialized:u.boxInitialized,boxMin:u.box.min.toArray(),boxMax:u.box.max.toArray(),sphereInitialized:u.sphereInitialized,sphereRadius:u.sphere.radius,sphereCenter:u.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function o(u,h){return u[h.uuid]===void 0&&(u[h.uuid]=h.toJSON(t)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(t.geometries,this.geometry);const u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){const h=u.shapes;if(Array.isArray(h))for(let d=0,p=h.length;d<p;d++){const m=h[d];o(t.shapes,m)}else o(t.shapes,h)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const u=[];for(let h=0,d=this.material.length;h<d;h++)u.push(o(t.materials,this.material[h]));r.material=u}else r.material=o(t.materials,this.material);if(this.children.length>0){r.children=[];for(let u=0;u<this.children.length;u++)r.children.push(this.children[u].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let u=0;u<this.animations.length;u++){const h=this.animations[u];r.animations.push(o(t.animations,h))}}if(e){const u=l(t.geometries),h=l(t.materials),d=l(t.textures),p=l(t.images),m=l(t.shapes),g=l(t.skeletons),x=l(t.animations),b=l(t.nodes);u.length>0&&(n.geometries=u),h.length>0&&(n.materials=h),d.length>0&&(n.textures=d),p.length>0&&(n.images=p),m.length>0&&(n.shapes=m),g.length>0&&(n.skeletons=g),x.length>0&&(n.animations=x),b.length>0&&(n.nodes=b)}return n.object=r,n;function l(u){const h=[];for(const d in u){const p=u[d];delete p.metadata,h.push(p)}return h}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}Re.DEFAULT_UP=new I(0,1,0);Re.DEFAULT_MATRIX_AUTO_UPDATE=!0;Re.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Rn=new I,$n=new I,el=new I,Zn=new I,ds=new I,ps=new I,fh=new I,nl=new I,il=new I,sl=new I;class sn{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),Rn.subVectors(t,e),r.cross(Rn);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(t,e,n,r,o){Rn.subVectors(r,e),$n.subVectors(n,e),el.subVectors(t,e);const l=Rn.dot(Rn),u=Rn.dot($n),h=Rn.dot(el),d=$n.dot($n),p=$n.dot(el),m=l*d-u*u;if(m===0)return o.set(0,0,0),null;const g=1/m,x=(d*h-u*p)*g,b=(l*p-u*h)*g;return o.set(1-x-b,b,x)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,Zn)===null?!1:Zn.x>=0&&Zn.y>=0&&Zn.x+Zn.y<=1}static getInterpolation(t,e,n,r,o,l,u,h){return this.getBarycoord(t,e,n,r,Zn)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(o,Zn.x),h.addScaledVector(l,Zn.y),h.addScaledVector(u,Zn.z),h)}static isFrontFacing(t,e,n,r){return Rn.subVectors(n,e),$n.subVectors(t,e),Rn.cross($n).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Rn.subVectors(this.c,this.b),$n.subVectors(this.a,this.b),Rn.cross($n).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return sn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return sn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,o){return sn.getInterpolation(t,this.a,this.b,this.c,e,n,r,o)}containsPoint(t){return sn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return sn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,o=this.c;let l,u;ds.subVectors(r,n),ps.subVectors(o,n),nl.subVectors(t,n);const h=ds.dot(nl),d=ps.dot(nl);if(h<=0&&d<=0)return e.copy(n);il.subVectors(t,r);const p=ds.dot(il),m=ps.dot(il);if(p>=0&&m<=p)return e.copy(r);const g=h*m-p*d;if(g<=0&&h>=0&&p<=0)return l=h/(h-p),e.copy(n).addScaledVector(ds,l);sl.subVectors(t,o);const x=ds.dot(sl),b=ps.dot(sl);if(b>=0&&x<=b)return e.copy(o);const w=x*d-h*b;if(w<=0&&d>=0&&b<=0)return u=d/(d-b),e.copy(n).addScaledVector(ps,u);const v=p*b-x*m;if(v<=0&&m-p>=0&&x-b>=0)return fh.subVectors(o,r),u=(m-p)/(m-p+(x-b)),e.copy(r).addScaledVector(fh,u);const _=1/(v+w+g);return l=w*_,u=g*_,e.copy(n).addScaledVector(ds,l).addScaledVector(ps,u)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Yd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_i={h:0,s:0,l:0},ro={h:0,s:0,l:0};function rl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class re{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ze){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,he.toWorkingColorSpace(this,e),this}setRGB(t,e,n,r=he.workingColorSpace){return this.r=t,this.g=e,this.b=n,he.toWorkingColorSpace(this,r),this}setHSL(t,e,n,r=he.workingColorSpace){if(t=cc(t,1),e=Xe(e,0,1),n=Xe(n,0,1),e===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+e):n+e-n*e,l=2*n-o;this.r=rl(l,o,t+1/3),this.g=rl(l,o,t),this.b=rl(l,o,t-1/3)}return he.toWorkingColorSpace(this,r),this}setStyle(t,e=ze){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const l=r[1],u=r[2];switch(l){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=r[1],l=o.length;if(l===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(l===6)return this.setHex(parseInt(o,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ze){const n=Yd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Vs(t.r),this.g=Vs(t.g),this.b=Vs(t.b),this}copyLinearToSRGB(t){return this.r=ja(t.r),this.g=ja(t.g),this.b=ja(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ze){return he.fromWorkingColorSpace(Ye.copy(this),t),Math.round(Xe(Ye.r*255,0,255))*65536+Math.round(Xe(Ye.g*255,0,255))*256+Math.round(Xe(Ye.b*255,0,255))}getHexString(t=ze){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=he.workingColorSpace){he.fromWorkingColorSpace(Ye.copy(this),e);const n=Ye.r,r=Ye.g,o=Ye.b,l=Math.max(n,r,o),u=Math.min(n,r,o);let h,d;const p=(u+l)/2;if(u===l)h=0,d=0;else{const m=l-u;switch(d=p<=.5?m/(l+u):m/(2-l-u),l){case n:h=(r-o)/m+(r<o?6:0);break;case r:h=(o-n)/m+2;break;case o:h=(n-r)/m+4;break}h/=6}return t.h=h,t.s=d,t.l=p,t}getRGB(t,e=he.workingColorSpace){return he.fromWorkingColorSpace(Ye.copy(this),e),t.r=Ye.r,t.g=Ye.g,t.b=Ye.b,t}getStyle(t=ze){he.fromWorkingColorSpace(Ye.copy(this),t);const e=Ye.r,n=Ye.g,r=Ye.b;return t!==ze?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(_i),this.setHSL(_i.h+t,_i.s+e,_i.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(_i),t.getHSL(ro);const n=Rr(_i.h,ro.h,e),r=Rr(_i.s,ro.s,e),o=Rr(_i.l,ro.l,e);return this.setHSL(n,r,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,o=t.elements;return this.r=o[0]*e+o[3]*n+o[6]*r,this.g=o[1]*e+o[4]*n+o[7]*r,this.b=o[2]*e+o[5]*n+o[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ye=new re;re.NAMES=Yd;let q_=0;class qs extends Yi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:q_++}),this.uuid=Xs(),this.name="",this.type="Material",this.blending=Bs,this.side=Vn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Il,this.blendDst=Ul,this.blendEquation=Vi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new re(0,0,0),this.blendAlpha=0,this.depthFunc=qo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=eh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=rs,this.stencilZFail=rs,this.stencilZPass=rs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Bs&&(n.blending=this.blending),this.side!==Vn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Il&&(n.blendSrc=this.blendSrc),this.blendDst!==Ul&&(n.blendDst=this.blendDst),this.blendEquation!==Vi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==qo&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==eh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==rs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==rs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==rs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(o){const l=[];for(const u in o){const h=o[u];delete h.metadata,l.push(h)}return l}if(e){const o=r(t.textures),l=r(t.images);o.length>0&&(n.textures=o),l.length>0&&(n.images=l)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let o=0;o!==r;++o)n[o]=e[o].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Or extends qs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Id,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Le=new I,oo=new Rt;class Qe{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=nh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ne,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return ks("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)oo.fromBufferAttribute(this,e),oo.applyMatrix3(t),this.setXY(e,oo.x,oo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix3(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix4(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyNormalMatrix(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.transformDirection(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Is(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=en(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Is(e,this.array)),e}setX(t,e){return this.normalized&&(e=en(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Is(e,this.array)),e}setY(t,e){return this.normalized&&(e=en(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Is(e,this.array)),e}setZ(t,e){return this.normalized&&(e=en(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Is(e,this.array)),e}setW(t,e){return this.normalized&&(e=en(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=en(e,this.array),n=en(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=en(e,this.array),n=en(n,this.array),r=en(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,o){return t*=this.itemSize,this.normalized&&(e=en(e,this.array),n=en(n,this.array),r=en(r,this.array),o=en(o,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==nh&&(t.usage=this.usage),t}}class Kd extends Qe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class $d extends Qe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ve extends Qe{constructor(t,e,n){super(new Float32Array(t),e,n)}}let j_=0;const En=new ce,ol=new Re,fs=new I,fn=new tn,mr=new tn,ke=new I;class Je extends Yi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:j_++}),this.uuid=Xs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Wd(t)?$d:Kd)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new ee().getNormalMatrix(t);n.applyNormalMatrix(o),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return En.makeRotationFromQuaternion(t),this.applyMatrix4(En),this}rotateX(t){return En.makeRotationX(t),this.applyMatrix4(En),this}rotateY(t){return En.makeRotationY(t),this.applyMatrix4(En),this}rotateZ(t){return En.makeRotationZ(t),this.applyMatrix4(En),this}translate(t,e,n){return En.makeTranslation(t,e,n),this.applyMatrix4(En),this}scale(t,e,n){return En.makeScale(t,e,n),this.applyMatrix4(En),this}lookAt(t){return ol.lookAt(t),ol.updateMatrix(),this.applyMatrix4(ol.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fs).negate(),this.translate(fs.x,fs.y,fs.z),this}setFromPoints(t){const e=[];for(let n=0,r=t.length;n<r;n++){const o=t[n];e.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new ve(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new tn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const o=e[n];fn.setFromBufferAttribute(o),this.morphTargetsRelative?(ke.addVectors(this.boundingBox.min,fn.min),this.boundingBox.expandByPoint(ke),ke.addVectors(this.boundingBox.max,fn.max),this.boundingBox.expandByPoint(ke)):(this.boundingBox.expandByPoint(fn.min),this.boundingBox.expandByPoint(fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new I,1/0);return}if(t){const n=this.boundingSphere.center;if(fn.setFromBufferAttribute(t),e)for(let o=0,l=e.length;o<l;o++){const u=e[o];mr.setFromBufferAttribute(u),this.morphTargetsRelative?(ke.addVectors(fn.min,mr.min),fn.expandByPoint(ke),ke.addVectors(fn.max,mr.max),fn.expandByPoint(ke)):(fn.expandByPoint(mr.min),fn.expandByPoint(mr.max))}fn.getCenter(n);let r=0;for(let o=0,l=t.count;o<l;o++)ke.fromBufferAttribute(t,o),r=Math.max(r,n.distanceToSquared(ke));if(e)for(let o=0,l=e.length;o<l;o++){const u=e[o],h=this.morphTargetsRelative;for(let d=0,p=u.count;d<p;d++)ke.fromBufferAttribute(u,d),h&&(fs.fromBufferAttribute(t,d),ke.add(fs)),r=Math.max(r,n.distanceToSquared(ke))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,r=e.position.array,o=e.normal.array,l=e.uv.array,u=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Qe(new Float32Array(4*u),4));const h=this.getAttribute("tangent").array,d=[],p=[];for(let M=0;M<u;M++)d[M]=new I,p[M]=new I;const m=new I,g=new I,x=new I,b=new Rt,w=new Rt,v=new Rt,_=new I,S=new I;function y(M,L,V){m.fromArray(r,M*3),g.fromArray(r,L*3),x.fromArray(r,V*3),b.fromArray(l,M*2),w.fromArray(l,L*2),v.fromArray(l,V*2),g.sub(m),x.sub(m),w.sub(b),v.sub(b);const q=1/(w.x*v.y-v.x*w.y);!isFinite(q)||(_.copy(g).multiplyScalar(v.y).addScaledVector(x,-w.y).multiplyScalar(q),S.copy(x).multiplyScalar(w.x).addScaledVector(g,-v.x).multiplyScalar(q),d[M].add(_),d[L].add(_),d[V].add(_),p[M].add(S),p[L].add(S),p[V].add(S))}let T=this.groups;T.length===0&&(T=[{start:0,count:n.length}]);for(let M=0,L=T.length;M<L;++M){const V=T[M],q=V.start,F=V.count;for(let G=q,H=q+F;G<H;G+=3)y(n[G+0],n[G+1],n[G+2])}const P=new I,C=new I,A=new I,O=new I;function z(M){A.fromArray(o,M*3),O.copy(A);const L=d[M];P.copy(L),P.sub(A.multiplyScalar(A.dot(L))).normalize(),C.crossVectors(O,L);const q=C.dot(p[M])<0?-1:1;h[M*4]=P.x,h[M*4+1]=P.y,h[M*4+2]=P.z,h[M*4+3]=q}for(let M=0,L=T.length;M<L;++M){const V=T[M],q=V.start,F=V.count;for(let G=q,H=q+F;G<H;G+=3)z(n[G+0]),z(n[G+1]),z(n[G+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Qe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let g=0,x=n.count;g<x;g++)n.setXYZ(g,0,0,0);const r=new I,o=new I,l=new I,u=new I,h=new I,d=new I,p=new I,m=new I;if(t)for(let g=0,x=t.count;g<x;g+=3){const b=t.getX(g+0),w=t.getX(g+1),v=t.getX(g+2);r.fromBufferAttribute(e,b),o.fromBufferAttribute(e,w),l.fromBufferAttribute(e,v),p.subVectors(l,o),m.subVectors(r,o),p.cross(m),u.fromBufferAttribute(n,b),h.fromBufferAttribute(n,w),d.fromBufferAttribute(n,v),u.add(p),h.add(p),d.add(p),n.setXYZ(b,u.x,u.y,u.z),n.setXYZ(w,h.x,h.y,h.z),n.setXYZ(v,d.x,d.y,d.z)}else for(let g=0,x=e.count;g<x;g+=3)r.fromBufferAttribute(e,g+0),o.fromBufferAttribute(e,g+1),l.fromBufferAttribute(e,g+2),p.subVectors(l,o),m.subVectors(r,o),p.cross(m),n.setXYZ(g+0,p.x,p.y,p.z),n.setXYZ(g+1,p.x,p.y,p.z),n.setXYZ(g+2,p.x,p.y,p.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ke.fromBufferAttribute(t,e),ke.normalize(),t.setXYZ(e,ke.x,ke.y,ke.z)}toNonIndexed(){function t(u,h){const d=u.array,p=u.itemSize,m=u.normalized,g=new d.constructor(h.length*p);let x=0,b=0;for(let w=0,v=h.length;w<v;w++){u.isInterleavedBufferAttribute?x=h[w]*u.data.stride+u.offset:x=h[w]*p;for(let _=0;_<p;_++)g[b++]=d[x++]}return new Qe(g,p,m)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Je,n=this.index.array,r=this.attributes;for(const u in r){const h=r[u],d=t(h,n);e.setAttribute(u,d)}const o=this.morphAttributes;for(const u in o){const h=[],d=o[u];for(let p=0,m=d.length;p<m;p++){const g=d[p],x=t(g,n);h.push(x)}e.morphAttributes[u]=h}e.morphTargetsRelative=this.morphTargetsRelative;const l=this.groups;for(let u=0,h=l.length;u<h;u++){const d=l[u];e.addGroup(d.start,d.count,d.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const d in h)h[d]!==void 0&&(t[d]=h[d]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const h in n){const d=n[h];t.data.attributes[h]=d.toJSON(t.data)}const r={};let o=!1;for(const h in this.morphAttributes){const d=this.morphAttributes[h],p=[];for(let m=0,g=d.length;m<g;m++){const x=d[m];p.push(x.toJSON(t.data))}p.length>0&&(r[h]=p,o=!0)}o&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const l=this.groups;l.length>0&&(t.data.groups=JSON.parse(JSON.stringify(l)));const u=this.boundingSphere;return u!==null&&(t.data.boundingSphere={center:u.center.toArray(),radius:u.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const r=t.attributes;for(const d in r){const p=r[d];this.setAttribute(d,p.clone(e))}const o=t.morphAttributes;for(const d in o){const p=[],m=o[d];for(let g=0,x=m.length;g<x;g++)p.push(m[g].clone(e));this.morphAttributes[d]=p}this.morphTargetsRelative=t.morphTargetsRelative;const l=t.groups;for(let d=0,p=l.length;d<p;d++){const m=l[d];this.addGroup(m.start,m.count,m.materialIndex)}const u=t.boundingBox;u!==null&&(this.boundingBox=u.clone());const h=t.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const mh=new ce,Ni=new oa,ao=new Nr,gh=new I,ms=new I,gs=new I,_s=new I,al=new I,lo=new I,co=new Rt,uo=new Rt,ho=new Rt,_h=new I,vh=new I,xh=new I,po=new I,fo=new I;class ft extends Re{constructor(t=new Je,e=new Or){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,l=r.length;o<l;o++){const u=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=o}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,o=n.morphAttributes.position,l=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const u=this.morphTargetInfluences;if(o&&u){lo.set(0,0,0);for(let h=0,d=o.length;h<d;h++){const p=u[h],m=o[h];p!==0&&(al.fromBufferAttribute(m,t),l?lo.addScaledVector(al,p):lo.addScaledVector(al.sub(e),p))}e.add(lo)}return e}raycast(t,e){const n=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ao.copy(n.boundingSphere),ao.applyMatrix4(o),Ni.copy(t.ray).recast(t.near),!(ao.containsPoint(Ni.origin)===!1&&(Ni.intersectSphere(ao,gh)===null||Ni.origin.distanceToSquared(gh)>(t.far-t.near)**2))&&(mh.copy(o).invert(),Ni.copy(t.ray).applyMatrix4(mh),!(n.boundingBox!==null&&Ni.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ni)))}_computeIntersections(t,e,n){let r;const o=this.geometry,l=this.material,u=o.index,h=o.attributes.position,d=o.attributes.uv,p=o.attributes.uv1,m=o.attributes.normal,g=o.groups,x=o.drawRange;if(u!==null)if(Array.isArray(l))for(let b=0,w=g.length;b<w;b++){const v=g[b],_=l[v.materialIndex],S=Math.max(v.start,x.start),y=Math.min(u.count,Math.min(v.start+v.count,x.start+x.count));for(let T=S,P=y;T<P;T+=3){const C=u.getX(T),A=u.getX(T+1),O=u.getX(T+2);r=mo(this,_,t,n,d,p,m,C,A,O),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=v.materialIndex,e.push(r))}}else{const b=Math.max(0,x.start),w=Math.min(u.count,x.start+x.count);for(let v=b,_=w;v<_;v+=3){const S=u.getX(v),y=u.getX(v+1),T=u.getX(v+2);r=mo(this,l,t,n,d,p,m,S,y,T),r&&(r.faceIndex=Math.floor(v/3),e.push(r))}}else if(h!==void 0)if(Array.isArray(l))for(let b=0,w=g.length;b<w;b++){const v=g[b],_=l[v.materialIndex],S=Math.max(v.start,x.start),y=Math.min(h.count,Math.min(v.start+v.count,x.start+x.count));for(let T=S,P=y;T<P;T+=3){const C=T,A=T+1,O=T+2;r=mo(this,_,t,n,d,p,m,C,A,O),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=v.materialIndex,e.push(r))}}else{const b=Math.max(0,x.start),w=Math.min(h.count,x.start+x.count);for(let v=b,_=w;v<_;v+=3){const S=v,y=v+1,T=v+2;r=mo(this,l,t,n,d,p,m,S,y,T),r&&(r.faceIndex=Math.floor(v/3),e.push(r))}}}}function Y_(i,t,e,n,r,o,l,u){let h;if(t.side===on?h=n.intersectTriangle(l,o,r,!0,u):h=n.intersectTriangle(r,o,l,t.side===Vn,u),h===null)return null;fo.copy(u),fo.applyMatrix4(i.matrixWorld);const d=e.ray.origin.distanceTo(fo);return d<e.near||d>e.far?null:{distance:d,point:fo.clone(),object:i}}function mo(i,t,e,n,r,o,l,u,h,d){i.getVertexPosition(u,ms),i.getVertexPosition(h,gs),i.getVertexPosition(d,_s);const p=Y_(i,t,e,n,ms,gs,_s,po);if(p){r&&(co.fromBufferAttribute(r,u),uo.fromBufferAttribute(r,h),ho.fromBufferAttribute(r,d),p.uv=sn.getInterpolation(po,ms,gs,_s,co,uo,ho,new Rt)),o&&(co.fromBufferAttribute(o,u),uo.fromBufferAttribute(o,h),ho.fromBufferAttribute(o,d),p.uv1=sn.getInterpolation(po,ms,gs,_s,co,uo,ho,new Rt),p.uv2=p.uv1),l&&(_h.fromBufferAttribute(l,u),vh.fromBufferAttribute(l,h),xh.fromBufferAttribute(l,d),p.normal=sn.getInterpolation(po,ms,gs,_s,_h,vh,xh,new I),p.normal.dot(n.direction)>0&&p.normal.multiplyScalar(-1));const m={a:u,b:h,c:d,normal:new I,materialIndex:0};sn.getNormal(ms,gs,_s,m.normal),p.face=m}return p}class ue extends Je{constructor(t=1,e=1,n=1,r=1,o=1,l=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:o,depthSegments:l};const u=this;r=Math.floor(r),o=Math.floor(o),l=Math.floor(l);const h=[],d=[],p=[],m=[];let g=0,x=0;b("z","y","x",-1,-1,n,e,t,l,o,0),b("z","y","x",1,-1,n,e,-t,l,o,1),b("x","z","y",1,1,t,n,e,r,l,2),b("x","z","y",1,-1,t,n,-e,r,l,3),b("x","y","z",1,-1,t,e,n,r,o,4),b("x","y","z",-1,-1,t,e,-n,r,o,5),this.setIndex(h),this.setAttribute("position",new ve(d,3)),this.setAttribute("normal",new ve(p,3)),this.setAttribute("uv",new ve(m,2));function b(w,v,_,S,y,T,P,C,A,O,z){const M=T/A,L=P/O,V=T/2,q=P/2,F=C/2,G=A+1,H=O+1;let X=0,et=0;const tt=new I;for(let nt=0;nt<H;nt++){const st=nt*L-q;for(let pt=0;pt<G;pt++){const vt=pt*M-V;tt[w]=vt*S,tt[v]=st*y,tt[_]=F,d.push(tt.x,tt.y,tt.z),tt[w]=0,tt[v]=0,tt[_]=C>0?1:-1,p.push(tt.x,tt.y,tt.z),m.push(pt/A),m.push(1-nt/O),X+=1}}for(let nt=0;nt<O;nt++)for(let st=0;st<A;st++){const pt=g+st+G*nt,vt=g+st+G*(nt+1),$=g+(st+1)+G*(nt+1),ct=g+(st+1)+G*nt;h.push(pt,vt,ct),h.push(vt,$,ct),et+=6}u.addGroup(x,et,z),x+=et,g+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ue(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ws(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function nn(i){const t={};for(let e=0;e<i.length;e++){const n=Ws(i[e]);for(const r in n)t[r]=n[r]}return t}function K_(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Zd(i){return i.getRenderTarget()===null?i.outputColorSpace:he.workingColorSpace}const $_={clone:Ws,merge:nn};var Z_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Q_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class dn extends qs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Z_,this.fragmentShader=Q_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ws(t.uniforms),this.uniformsGroups=K_(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const l=this.uniforms[r].value;l&&l.isTexture?e.uniforms[r]={type:"t",value:l.toJSON(t).uuid}:l&&l.isColor?e.uniforms[r]={type:"c",value:l.getHex()}:l&&l.isVector2?e.uniforms[r]={type:"v2",value:l.toArray()}:l&&l.isVector3?e.uniforms[r]={type:"v3",value:l.toArray()}:l&&l.isVector4?e.uniforms[r]={type:"v4",value:l.toArray()}:l&&l.isMatrix3?e.uniforms[r]={type:"m3",value:l.toArray()}:l&&l.isMatrix4?e.uniforms[r]={type:"m4",value:l.toArray()}:e.uniforms[r]={value:l}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Qd extends Re{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ce,this.projectionMatrix=new ce,this.projectionMatrixInverse=new ce,this.coordinateSystem=ti}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const vi=new I,bh=new Rt,yh=new Rt;class gn extends Qd{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ur*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Pr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ur*2*Math.atan(Math.tan(Pr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){vi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(vi.x,vi.y).multiplyScalar(-t/vi.z),vi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(vi.x,vi.y).multiplyScalar(-t/vi.z)}getViewSize(t,e){return this.getViewBounds(t,bh,yh),e.subVectors(yh,bh)}setViewOffset(t,e,n,r,o,l){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=o,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Pr*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,o=-.5*r;const l=this.view;if(this.view!==null&&this.view.enabled){const h=l.fullWidth,d=l.fullHeight;o+=l.offsetX*r/h,e-=l.offsetY*n/d,r*=l.width/h,n*=l.height/d}const u=this.filmOffset;u!==0&&(o+=t*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const vs=-90,xs=1;class J_ extends Re{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new gn(vs,xs,t,e);r.layers=this.layers,this.add(r);const o=new gn(vs,xs,t,e);o.layers=this.layers,this.add(o);const l=new gn(vs,xs,t,e);l.layers=this.layers,this.add(l);const u=new gn(vs,xs,t,e);u.layers=this.layers,this.add(u);const h=new gn(vs,xs,t,e);h.layers=this.layers,this.add(h);const d=new gn(vs,xs,t,e);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,o,l,u,h]=e;for(const d of e)this.remove(d);if(t===ti)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),l.up.set(0,0,1),l.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(t===Zo)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),l.up.set(0,0,-1),l.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const d of e)this.add(d),d.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,l,u,h,d,p]=this.children,m=t.getRenderTarget(),g=t.getActiveCubeFace(),x=t.getActiveMipmapLevel(),b=t.xr.enabled;t.xr.enabled=!1;const w=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,o),t.setRenderTarget(n,1,r),t.render(e,l),t.setRenderTarget(n,2,r),t.render(e,u),t.setRenderTarget(n,3,r),t.render(e,h),t.setRenderTarget(n,4,r),t.render(e,d),n.texture.generateMipmaps=w,t.setRenderTarget(n,5,r),t.render(e,p),t.setRenderTarget(m,g,x),t.xr.enabled=b,n.texture.needsPMREMUpdate=!0}}class Jd extends an{constructor(t,e,n,r,o,l,u,h,d,p){t=t!==void 0?t:[],e=e!==void 0?e:zs,super(t,e,n,r,o,l,u,h,d,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class tv extends Dn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];e.encoding!==void 0&&(ks("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===ji?ze:Sn),this.texture=new Jd(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ve}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ue(5,5,5),o=new dn({name:"CubemapFromEquirect",uniforms:Ws(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:on,blending:Bn});o.uniforms.tEquirect.value=e;const l=new ft(r,o),u=e.minFilter;return e.minFilter===Wi&&(e.minFilter=Ve),new J_(1,10,this).update(t,l),e.minFilter=u,l.geometry.dispose(),l.material.dispose(),this}clear(t,e,n,r){const o=t.getRenderTarget();for(let l=0;l<6;l++)t.setRenderTarget(this,l),t.clear(e,n,r);t.setRenderTarget(o)}}const ll=new I,ev=new I,nv=new ee;class Fn{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=ll.subVectors(n,e).cross(ev.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(ll),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:e.copy(t.start).addScaledVector(n,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||nv.getNormalMatrix(t),r=this.coplanarPoint(ll).applyMatrix4(t),o=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Fi=new Nr,go=new I;class hc{constructor(t=new Fn,e=new Fn,n=new Fn,r=new Fn,o=new Fn,l=new Fn){this.planes=[t,e,n,r,o,l]}set(t,e,n,r,o,l){const u=this.planes;return u[0].copy(t),u[1].copy(e),u[2].copy(n),u[3].copy(r),u[4].copy(o),u[5].copy(l),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ti){const n=this.planes,r=t.elements,o=r[0],l=r[1],u=r[2],h=r[3],d=r[4],p=r[5],m=r[6],g=r[7],x=r[8],b=r[9],w=r[10],v=r[11],_=r[12],S=r[13],y=r[14],T=r[15];if(n[0].setComponents(h-o,g-d,v-x,T-_).normalize(),n[1].setComponents(h+o,g+d,v+x,T+_).normalize(),n[2].setComponents(h+l,g+p,v+b,T+S).normalize(),n[3].setComponents(h-l,g-p,v-b,T-S).normalize(),n[4].setComponents(h-u,g-m,v-w,T-y).normalize(),e===ti)n[5].setComponents(h+u,g+m,v+w,T+y).normalize();else if(e===Zo)n[5].setComponents(u,m,w,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Fi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Fi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Fi)}intersectsSprite(t){return Fi.center.set(0,0,0),Fi.radius=.7071067811865476,Fi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Fi)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(go.x=r.normal.x>0?t.max.x:t.min.x,go.y=r.normal.y>0?t.max.y:t.min.y,go.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(go)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function tp(){let i=null,t=!1,e=null,n=null;function r(o,l){e(o,l),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){i=o}}}function iv(i,t){const e=t.isWebGL2,n=new WeakMap;function r(d,p){const m=d.array,g=d.usage,x=m.byteLength,b=i.createBuffer();i.bindBuffer(p,b),i.bufferData(p,m,g),d.onUploadCallback();let w;if(m instanceof Float32Array)w=i.FLOAT;else if(m instanceof Uint16Array)if(d.isFloat16BufferAttribute)if(e)w=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else w=i.UNSIGNED_SHORT;else if(m instanceof Int16Array)w=i.SHORT;else if(m instanceof Uint32Array)w=i.UNSIGNED_INT;else if(m instanceof Int32Array)w=i.INT;else if(m instanceof Int8Array)w=i.BYTE;else if(m instanceof Uint8Array)w=i.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)w=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:b,type:w,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:x}}function o(d,p,m){const g=p.array,x=p._updateRange,b=p.updateRanges;if(i.bindBuffer(m,d),x.count===-1&&b.length===0&&i.bufferSubData(m,0,g),b.length!==0){for(let w=0,v=b.length;w<v;w++){const _=b[w];e?i.bufferSubData(m,_.start*g.BYTES_PER_ELEMENT,g,_.start,_.count):i.bufferSubData(m,_.start*g.BYTES_PER_ELEMENT,g.subarray(_.start,_.start+_.count))}p.clearUpdateRanges()}x.count!==-1&&(e?i.bufferSubData(m,x.offset*g.BYTES_PER_ELEMENT,g,x.offset,x.count):i.bufferSubData(m,x.offset*g.BYTES_PER_ELEMENT,g.subarray(x.offset,x.offset+x.count)),x.count=-1),p.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),n.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=n.get(d);p&&(i.deleteBuffer(p.buffer),n.delete(d))}function h(d,p){if(d.isGLBufferAttribute){const g=n.get(d);(!g||g.version<d.version)&&n.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}d.isInterleavedBufferAttribute&&(d=d.data);const m=n.get(d);if(m===void 0)n.set(d,r(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");o(m.buffer,d,p),m.version=d.version}}return{get:l,remove:u,update:h}}class ii extends Je{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const o=t/2,l=e/2,u=Math.floor(n),h=Math.floor(r),d=u+1,p=h+1,m=t/u,g=e/h,x=[],b=[],w=[],v=[];for(let _=0;_<p;_++){const S=_*g-l;for(let y=0;y<d;y++){const T=y*m-o;b.push(T,-S,0),w.push(0,0,1),v.push(y/u),v.push(1-_/h)}}for(let _=0;_<h;_++)for(let S=0;S<u;S++){const y=S+d*_,T=S+d*(_+1),P=S+1+d*(_+1),C=S+1+d*_;x.push(y,T,C),x.push(T,P,C)}this.setIndex(x),this.setAttribute("position",new ve(b,3)),this.setAttribute("normal",new ve(w,3)),this.setAttribute("uv",new ve(v,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ii(t.width,t.height,t.widthSegments,t.heightSegments)}}var sv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,rv=`#ifdef USE_ALPHAHASH
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
#endif`,ov=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,av=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,cv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,uv=`#ifdef USE_AOMAP
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
#endif`,hv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,dv=`#ifdef USE_BATCHING
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
#endif`,pv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,fv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,mv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,_v=`#ifdef USE_IRIDESCENCE
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
#endif`,vv=`#ifdef USE_BUMPMAP
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
#endif`,xv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,bv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,yv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Mv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ev=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Sv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Tv=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Av=`#define PI 3.141592653589793
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
} // validated`,Cv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Pv=`vec3 transformedNormal = objectNormal;
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
#endif`,Rv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Lv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Dv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Iv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Uv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Nv=`
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
}`,Fv=`#ifdef USE_ENVMAP
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
#endif`,Ov=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Bv=`#ifdef USE_ENVMAP
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
#endif`,kv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Vv=`#ifdef USE_ENVMAP
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
#endif`,zv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Hv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Gv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Wv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Xv=`#ifdef USE_GRADIENTMAP
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
}`,qv=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,jv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Yv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Kv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$v=`uniform bool receiveShadow;
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
#endif`,Zv=`#ifdef USE_ENVMAP
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
#endif`,Qv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Jv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,t0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,e0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,n0=`PhysicalMaterial material;
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
#endif`,i0=`struct PhysicalMaterial {
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
}`,s0=`
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
#endif`,r0=`#if defined( RE_IndirectDiffuse )
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
#endif`,o0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,a0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,l0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,c0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,u0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,h0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,d0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,p0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,f0=`#if defined( USE_POINTS_UV )
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
#endif`,m0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,g0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_0=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,v0=`#ifdef USE_MORPHNORMALS
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
#endif`,x0=`#ifdef USE_MORPHTARGETS
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
#endif`,b0=`#ifdef USE_MORPHTARGETS
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
#endif`,y0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,w0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,M0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,E0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,S0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,T0=`#ifdef USE_NORMALMAP
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
#endif`,A0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,C0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,P0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,R0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,L0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,D0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,I0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,U0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,N0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,F0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,O0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,B0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,k0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,V0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,z0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,H0=`float getShadowMask() {
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
}`,G0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,W0=`#ifdef USE_SKINNING
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
#endif`,X0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,q0=`#ifdef USE_SKINNING
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
#endif`,j0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Y0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,K0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Z0=`#ifdef USE_TRANSMISSION
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
#endif`,Q0=`#ifdef USE_TRANSMISSION
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
#endif`,J0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ex=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ix=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,sx=`uniform sampler2D t2D;
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
}`,rx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ox=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ax=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cx=`#include <common>
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
}`,ux=`#if DEPTH_PACKING == 3200
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
}`,hx=`#define DISTANCE
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
}`,dx=`#define DISTANCE
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
}`,px=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mx=`uniform float scale;
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
}`,gx=`uniform vec3 diffuse;
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
}`,_x=`#include <common>
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
}`,vx=`uniform vec3 diffuse;
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
}`,xx=`#define LAMBERT
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
}`,bx=`#define LAMBERT
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
}`,yx=`#define MATCAP
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
}`,wx=`#define MATCAP
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
}`,Mx=`#define NORMAL
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
}`,Ex=`#define NORMAL
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
}`,Sx=`#define PHONG
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
}`,Tx=`#define PHONG
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
}`,Ax=`#define STANDARD
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
}`,Cx=`#define STANDARD
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
}`,Px=`#define TOON
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
}`,Rx=`#define TOON
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
}`,Lx=`uniform float size;
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
}`,Dx=`uniform vec3 diffuse;
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
}`,Ix=`#include <common>
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
}`,Ux=`uniform vec3 color;
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
}`,Nx=`uniform float rotation;
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
}`,Fx=`uniform vec3 diffuse;
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
}`,Qt={alphahash_fragment:sv,alphahash_pars_fragment:rv,alphamap_fragment:ov,alphamap_pars_fragment:av,alphatest_fragment:lv,alphatest_pars_fragment:cv,aomap_fragment:uv,aomap_pars_fragment:hv,batching_pars_vertex:dv,batching_vertex:pv,begin_vertex:fv,beginnormal_vertex:mv,bsdfs:gv,iridescence_fragment:_v,bumpmap_pars_fragment:vv,clipping_planes_fragment:xv,clipping_planes_pars_fragment:bv,clipping_planes_pars_vertex:yv,clipping_planes_vertex:wv,color_fragment:Mv,color_pars_fragment:Ev,color_pars_vertex:Sv,color_vertex:Tv,common:Av,cube_uv_reflection_fragment:Cv,defaultnormal_vertex:Pv,displacementmap_pars_vertex:Rv,displacementmap_vertex:Lv,emissivemap_fragment:Dv,emissivemap_pars_fragment:Iv,colorspace_fragment:Uv,colorspace_pars_fragment:Nv,envmap_fragment:Fv,envmap_common_pars_fragment:Ov,envmap_pars_fragment:Bv,envmap_pars_vertex:kv,envmap_physical_pars_fragment:Zv,envmap_vertex:Vv,fog_vertex:zv,fog_pars_vertex:Hv,fog_fragment:Gv,fog_pars_fragment:Wv,gradientmap_pars_fragment:Xv,lightmap_fragment:qv,lightmap_pars_fragment:jv,lights_lambert_fragment:Yv,lights_lambert_pars_fragment:Kv,lights_pars_begin:$v,lights_toon_fragment:Qv,lights_toon_pars_fragment:Jv,lights_phong_fragment:t0,lights_phong_pars_fragment:e0,lights_physical_fragment:n0,lights_physical_pars_fragment:i0,lights_fragment_begin:s0,lights_fragment_maps:r0,lights_fragment_end:o0,logdepthbuf_fragment:a0,logdepthbuf_pars_fragment:l0,logdepthbuf_pars_vertex:c0,logdepthbuf_vertex:u0,map_fragment:h0,map_pars_fragment:d0,map_particle_fragment:p0,map_particle_pars_fragment:f0,metalnessmap_fragment:m0,metalnessmap_pars_fragment:g0,morphcolor_vertex:_0,morphnormal_vertex:v0,morphtarget_pars_vertex:x0,morphtarget_vertex:b0,normal_fragment_begin:y0,normal_fragment_maps:w0,normal_pars_fragment:M0,normal_pars_vertex:E0,normal_vertex:S0,normalmap_pars_fragment:T0,clearcoat_normal_fragment_begin:A0,clearcoat_normal_fragment_maps:C0,clearcoat_pars_fragment:P0,iridescence_pars_fragment:R0,opaque_fragment:L0,packing:D0,premultiplied_alpha_fragment:I0,project_vertex:U0,dithering_fragment:N0,dithering_pars_fragment:F0,roughnessmap_fragment:O0,roughnessmap_pars_fragment:B0,shadowmap_pars_fragment:k0,shadowmap_pars_vertex:V0,shadowmap_vertex:z0,shadowmask_pars_fragment:H0,skinbase_vertex:G0,skinning_pars_vertex:W0,skinning_vertex:X0,skinnormal_vertex:q0,specularmap_fragment:j0,specularmap_pars_fragment:Y0,tonemapping_fragment:K0,tonemapping_pars_fragment:$0,transmission_fragment:Z0,transmission_pars_fragment:Q0,uv_pars_fragment:J0,uv_pars_vertex:tx,uv_vertex:ex,worldpos_vertex:nx,background_vert:ix,background_frag:sx,backgroundCube_vert:rx,backgroundCube_frag:ox,cube_vert:ax,cube_frag:lx,depth_vert:cx,depth_frag:ux,distanceRGBA_vert:hx,distanceRGBA_frag:dx,equirect_vert:px,equirect_frag:fx,linedashed_vert:mx,linedashed_frag:gx,meshbasic_vert:_x,meshbasic_frag:vx,meshlambert_vert:xx,meshlambert_frag:bx,meshmatcap_vert:yx,meshmatcap_frag:wx,meshnormal_vert:Mx,meshnormal_frag:Ex,meshphong_vert:Sx,meshphong_frag:Tx,meshphysical_vert:Ax,meshphysical_frag:Cx,meshtoon_vert:Px,meshtoon_frag:Rx,points_vert:Lx,points_frag:Dx,shadow_vert:Ix,shadow_frag:Ux,sprite_vert:Nx,sprite_frag:Fx},mt={common:{diffuse:{value:new re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ee},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ee}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ee}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ee}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ee},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ee},normalScale:{value:new Rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ee},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ee}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ee}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ee}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0},uvTransform:{value:new ee}},sprite:{diffuse:{value:new re(16777215)},opacity:{value:1},center:{value:new Rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ee},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0}}},On={basic:{uniforms:nn([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.fog]),vertexShader:Qt.meshbasic_vert,fragmentShader:Qt.meshbasic_frag},lambert:{uniforms:nn([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new re(0)}}]),vertexShader:Qt.meshlambert_vert,fragmentShader:Qt.meshlambert_frag},phong:{uniforms:nn([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new re(0)},specular:{value:new re(1118481)},shininess:{value:30}}]),vertexShader:Qt.meshphong_vert,fragmentShader:Qt.meshphong_frag},standard:{uniforms:nn([mt.common,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.roughnessmap,mt.metalnessmap,mt.fog,mt.lights,{emissive:{value:new re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag},toon:{uniforms:nn([mt.common,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.gradientmap,mt.fog,mt.lights,{emissive:{value:new re(0)}}]),vertexShader:Qt.meshtoon_vert,fragmentShader:Qt.meshtoon_frag},matcap:{uniforms:nn([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,{matcap:{value:null}}]),vertexShader:Qt.meshmatcap_vert,fragmentShader:Qt.meshmatcap_frag},points:{uniforms:nn([mt.points,mt.fog]),vertexShader:Qt.points_vert,fragmentShader:Qt.points_frag},dashed:{uniforms:nn([mt.common,mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qt.linedashed_vert,fragmentShader:Qt.linedashed_frag},depth:{uniforms:nn([mt.common,mt.displacementmap]),vertexShader:Qt.depth_vert,fragmentShader:Qt.depth_frag},normal:{uniforms:nn([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,{opacity:{value:1}}]),vertexShader:Qt.meshnormal_vert,fragmentShader:Qt.meshnormal_frag},sprite:{uniforms:nn([mt.sprite,mt.fog]),vertexShader:Qt.sprite_vert,fragmentShader:Qt.sprite_frag},background:{uniforms:{uvTransform:{value:new ee},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qt.background_vert,fragmentShader:Qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Qt.backgroundCube_vert,fragmentShader:Qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qt.cube_vert,fragmentShader:Qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qt.equirect_vert,fragmentShader:Qt.equirect_frag},distanceRGBA:{uniforms:nn([mt.common,mt.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qt.distanceRGBA_vert,fragmentShader:Qt.distanceRGBA_frag},shadow:{uniforms:nn([mt.lights,mt.fog,{color:{value:new re(0)},opacity:{value:1}}]),vertexShader:Qt.shadow_vert,fragmentShader:Qt.shadow_frag}};On.physical={uniforms:nn([On.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ee},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ee},clearcoatNormalScale:{value:new Rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ee},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ee},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ee},sheen:{value:0},sheenColor:{value:new re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ee},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ee},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ee},transmissionSamplerSize:{value:new Rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ee},attenuationDistance:{value:0},attenuationColor:{value:new re(0)},specularColor:{value:new re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ee},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ee},anisotropyVector:{value:new Rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ee}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag};const _o={r:0,b:0,g:0};function Ox(i,t,e,n,r,o,l){const u=new re(0);let h=o===!0?0:1,d,p,m=null,g=0,x=null;function b(v,_){let S=!1,y=_.isScene===!0?_.background:null;y&&y.isTexture&&(y=(_.backgroundBlurriness>0?e:t).get(y)),y===null?w(u,h):y&&y.isColor&&(w(y,1),S=!0);const T=i.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,l):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,l),(i.autoClear||S)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),y&&(y.isCubeTexture||y.mapping===na)?(p===void 0&&(p=new ft(new ue(1,1,1),new dn({name:"BackgroundCubeMaterial",uniforms:Ws(On.backgroundCube.uniforms),vertexShader:On.backgroundCube.vertexShader,fragmentShader:On.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(P,C,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(p)),p.material.uniforms.envMap.value=y,p.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,p.material.toneMapped=he.getTransfer(y.colorSpace)!==_e,(m!==y||g!==y.version||x!==i.toneMapping)&&(p.material.needsUpdate=!0,m=y,g=y.version,x=i.toneMapping),p.layers.enableAll(),v.unshift(p,p.geometry,p.material,0,0,null)):y&&y.isTexture&&(d===void 0&&(d=new ft(new ii(2,2),new dn({name:"BackgroundMaterial",uniforms:Ws(On.background.uniforms),vertexShader:On.background.vertexShader,fragmentShader:On.background.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(d)),d.material.uniforms.t2D.value=y,d.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,d.material.toneMapped=he.getTransfer(y.colorSpace)!==_e,y.matrixAutoUpdate===!0&&y.updateMatrix(),d.material.uniforms.uvTransform.value.copy(y.matrix),(m!==y||g!==y.version||x!==i.toneMapping)&&(d.material.needsUpdate=!0,m=y,g=y.version,x=i.toneMapping),d.layers.enableAll(),v.unshift(d,d.geometry,d.material,0,0,null))}function w(v,_){v.getRGB(_o,Zd(i)),n.buffers.color.setClear(_o.r,_o.g,_o.b,_,l)}return{getClearColor:function(){return u},setClearColor:function(v,_=1){u.set(v),h=_,w(u,h)},getClearAlpha:function(){return h},setClearAlpha:function(v){h=v,w(u,h)},render:b}}function Bx(i,t,e,n){const r=i.getParameter(i.MAX_VERTEX_ATTRIBS),o=n.isWebGL2?null:t.get("OES_vertex_array_object"),l=n.isWebGL2||o!==null,u={},h=v(null);let d=h,p=!1;function m(F,G,H,X,et){let tt=!1;if(l){const nt=w(X,H,G);d!==nt&&(d=nt,x(d.object)),tt=_(F,X,H,et),tt&&S(F,X,H,et)}else{const nt=G.wireframe===!0;(d.geometry!==X.id||d.program!==H.id||d.wireframe!==nt)&&(d.geometry=X.id,d.program=H.id,d.wireframe=nt,tt=!0)}et!==null&&e.update(et,i.ELEMENT_ARRAY_BUFFER),(tt||p)&&(p=!1,O(F,G,H,X),et!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(et).buffer))}function g(){return n.isWebGL2?i.createVertexArray():o.createVertexArrayOES()}function x(F){return n.isWebGL2?i.bindVertexArray(F):o.bindVertexArrayOES(F)}function b(F){return n.isWebGL2?i.deleteVertexArray(F):o.deleteVertexArrayOES(F)}function w(F,G,H){const X=H.wireframe===!0;let et=u[F.id];et===void 0&&(et={},u[F.id]=et);let tt=et[G.id];tt===void 0&&(tt={},et[G.id]=tt);let nt=tt[X];return nt===void 0&&(nt=v(g()),tt[X]=nt),nt}function v(F){const G=[],H=[],X=[];for(let et=0;et<r;et++)G[et]=0,H[et]=0,X[et]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:H,attributeDivisors:X,object:F,attributes:{},index:null}}function _(F,G,H,X){const et=d.attributes,tt=G.attributes;let nt=0;const st=H.getAttributes();for(const pt in st)if(st[pt].location>=0){const $=et[pt];let ct=tt[pt];if(ct===void 0&&(pt==="instanceMatrix"&&F.instanceMatrix&&(ct=F.instanceMatrix),pt==="instanceColor"&&F.instanceColor&&(ct=F.instanceColor)),$===void 0||$.attribute!==ct||ct&&$.data!==ct.data)return!0;nt++}return d.attributesNum!==nt||d.index!==X}function S(F,G,H,X){const et={},tt=G.attributes;let nt=0;const st=H.getAttributes();for(const pt in st)if(st[pt].location>=0){let $=tt[pt];$===void 0&&(pt==="instanceMatrix"&&F.instanceMatrix&&($=F.instanceMatrix),pt==="instanceColor"&&F.instanceColor&&($=F.instanceColor));const ct={};ct.attribute=$,$&&$.data&&(ct.data=$.data),et[pt]=ct,nt++}d.attributes=et,d.attributesNum=nt,d.index=X}function y(){const F=d.newAttributes;for(let G=0,H=F.length;G<H;G++)F[G]=0}function T(F){P(F,0)}function P(F,G){const H=d.newAttributes,X=d.enabledAttributes,et=d.attributeDivisors;H[F]=1,X[F]===0&&(i.enableVertexAttribArray(F),X[F]=1),et[F]!==G&&((n.isWebGL2?i:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](F,G),et[F]=G)}function C(){const F=d.newAttributes,G=d.enabledAttributes;for(let H=0,X=G.length;H<X;H++)G[H]!==F[H]&&(i.disableVertexAttribArray(H),G[H]=0)}function A(F,G,H,X,et,tt,nt){nt===!0?i.vertexAttribIPointer(F,G,H,et,tt):i.vertexAttribPointer(F,G,H,X,et,tt)}function O(F,G,H,X){if(n.isWebGL2===!1&&(F.isInstancedMesh||X.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;y();const et=X.attributes,tt=H.getAttributes(),nt=G.defaultAttributeValues;for(const st in tt){const pt=tt[st];if(pt.location>=0){let vt=et[st];if(vt===void 0&&(st==="instanceMatrix"&&F.instanceMatrix&&(vt=F.instanceMatrix),st==="instanceColor"&&F.instanceColor&&(vt=F.instanceColor)),vt!==void 0){const $=vt.normalized,ct=vt.itemSize,Mt=e.get(vt);if(Mt===void 0)continue;const It=Mt.buffer,Ft=Mt.type,Et=Mt.bytesPerElement,Wt=n.isWebGL2===!0&&(Ft===i.INT||Ft===i.UNSIGNED_INT||vt.gpuType===Cr);if(vt.isInterleavedBufferAttribute){const kt=vt.data,Y=kt.stride,Ee=vt.offset;if(kt.isInstancedInterleavedBuffer){for(let Lt=0;Lt<pt.locationSize;Lt++)P(pt.location+Lt,kt.meshPerAttribute);F.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=kt.meshPerAttribute*kt.count)}else for(let Lt=0;Lt<pt.locationSize;Lt++)T(pt.location+Lt);i.bindBuffer(i.ARRAY_BUFFER,It);for(let Lt=0;Lt<pt.locationSize;Lt++)A(pt.location+Lt,ct/pt.locationSize,Ft,$,Y*Et,(Ee+ct/pt.locationSize*Lt)*Et,Wt)}else{if(vt.isInstancedBufferAttribute){for(let kt=0;kt<pt.locationSize;kt++)P(pt.location+kt,vt.meshPerAttribute);F.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=vt.meshPerAttribute*vt.count)}else for(let kt=0;kt<pt.locationSize;kt++)T(pt.location+kt);i.bindBuffer(i.ARRAY_BUFFER,It);for(let kt=0;kt<pt.locationSize;kt++)A(pt.location+kt,ct/pt.locationSize,Ft,$,ct*Et,ct/pt.locationSize*kt*Et,Wt)}}else if(nt!==void 0){const $=nt[st];if($!==void 0)switch($.length){case 2:i.vertexAttrib2fv(pt.location,$);break;case 3:i.vertexAttrib3fv(pt.location,$);break;case 4:i.vertexAttrib4fv(pt.location,$);break;default:i.vertexAttrib1fv(pt.location,$)}}}}C()}function z(){V();for(const F in u){const G=u[F];for(const H in G){const X=G[H];for(const et in X)b(X[et].object),delete X[et];delete G[H]}delete u[F]}}function M(F){if(u[F.id]===void 0)return;const G=u[F.id];for(const H in G){const X=G[H];for(const et in X)b(X[et].object),delete X[et];delete G[H]}delete u[F.id]}function L(F){for(const G in u){const H=u[G];if(H[F.id]===void 0)continue;const X=H[F.id];for(const et in X)b(X[et].object),delete X[et];delete H[F.id]}}function V(){q(),p=!0,d!==h&&(d=h,x(d.object))}function q(){h.geometry=null,h.program=null,h.wireframe=!1}return{setup:m,reset:V,resetDefaultState:q,dispose:z,releaseStatesOfGeometry:M,releaseStatesOfProgram:L,initAttributes:y,enableAttribute:T,disableUnusedAttributes:C}}function kx(i,t,e,n){const r=n.isWebGL2;let o;function l(p){o=p}function u(p,m){i.drawArrays(o,p,m),e.update(m,o,1)}function h(p,m,g){if(g===0)return;let x,b;if(r)x=i,b="drawArraysInstanced";else if(x=t.get("ANGLE_instanced_arrays"),b="drawArraysInstancedANGLE",x===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}x[b](o,p,m,g),e.update(m,o,g)}function d(p,m,g){if(g===0)return;const x=t.get("WEBGL_multi_draw");if(x===null)for(let b=0;b<g;b++)this.render(p[b],m[b]);else{x.multiDrawArraysWEBGL(o,p,0,m,0,g);let b=0;for(let w=0;w<g;w++)b+=m[w];e.update(b,o,1)}}this.setMode=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=d}function Vx(i,t,e){let n;function r(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");n=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function o(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const l=typeof WebGL2RenderingContext!="undefined"&&i.constructor.name==="WebGL2RenderingContext";let u=e.precision!==void 0?e.precision:"highp";const h=o(u);h!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",h,"instead."),u=h);const d=l||t.has("WEBGL_draw_buffers"),p=e.logarithmicDepthBuffer===!0,m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),b=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),w=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),y=g>0,T=l||t.has("OES_texture_float"),P=y&&T,C=l?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:l,drawBuffers:d,getMaxAnisotropy:r,getMaxPrecision:o,precision:u,logarithmicDepthBuffer:p,maxTextures:m,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:b,maxAttributes:w,maxVertexUniforms:v,maxVaryings:_,maxFragmentUniforms:S,vertexTextures:y,floatFragmentTextures:T,floatVertexTextures:P,maxSamples:C}}function zx(i){const t=this;let e=null,n=0,r=!1,o=!1;const l=new Fn,u=new ee,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(m,g){const x=m.length!==0||g||n!==0||r;return r=g,n=m.length,x},this.beginShadows=function(){o=!0,p(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(m,g){e=p(m,g,0)},this.setState=function(m,g,x){const b=m.clippingPlanes,w=m.clipIntersection,v=m.clipShadows,_=i.get(m);if(!r||b===null||b.length===0||o&&!v)o?p(null):d();else{const S=o?0:n,y=S*4;let T=_.clippingState||null;h.value=T,T=p(b,g,y,x);for(let P=0;P!==y;++P)T[P]=e[P];_.clippingState=T,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=S}};function d(){h.value!==e&&(h.value=e,h.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function p(m,g,x,b){const w=m!==null?m.length:0;let v=null;if(w!==0){if(v=h.value,b!==!0||v===null){const _=x+w*4,S=g.matrixWorldInverse;u.getNormalMatrix(S),(v===null||v.length<_)&&(v=new Float32Array(_));for(let y=0,T=x;y!==w;++y,T+=4)l.copy(m[y]).applyMatrix4(S,u),l.normal.toArray(v,T),v[T+3]=l.constant}h.value=v,h.needsUpdate=!0}return t.numPlanes=w,t.numIntersection=0,v}}function Hx(i){let t=new WeakMap;function e(l,u){return u===Nl?l.mapping=zs:u===Fl&&(l.mapping=Hs),l}function n(l){if(l&&l.isTexture){const u=l.mapping;if(u===Nl||u===Fl)if(t.has(l)){const h=t.get(l).texture;return e(h,l.mapping)}else{const h=l.image;if(h&&h.height>0){const d=new tv(h.height);return d.fromEquirectangularTexture(i,l),t.set(l,d),l.addEventListener("dispose",r),e(d.texture,l.mapping)}else return null}}return l}function r(l){const u=l.target;u.removeEventListener("dispose",r);const h=t.get(u);h!==void 0&&(t.delete(u),h.dispose())}function o(){t=new WeakMap}return{get:n,dispose:o}}class Br extends Qd{constructor(t=-1,e=1,n=1,r=-1,o=.1,l=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=o,this.far=l,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,o,l){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=o,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=n-t,l=n+t,u=r+e,h=r-e;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=d*this.view.offsetX,l=o+d*this.view.width,u-=p*this.view.offsetY,h=u-p*this.view.height}this.projectionMatrix.makeOrthographic(o,l,u,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Us=4,wh=[.125,.215,.35,.446,.526,.582],zi=20,cl=new Br,Mh=new re;let ul=null,hl=0,dl=0;const Bi=(1+Math.sqrt(5))/2,bs=1/Bi,Eh=[new I(1,1,1),new I(-1,1,1),new I(1,1,-1),new I(-1,1,-1),new I(0,Bi,bs),new I(0,Bi,-bs),new I(bs,0,Bi),new I(-bs,0,Bi),new I(Bi,bs,0),new I(-Bi,bs,0)];class Sh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100){ul=this._renderer.getRenderTarget(),hl=this._renderer.getActiveCubeFace(),dl=this._renderer.getActiveMipmapLevel(),this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(t,n,r,o),e>0&&this._blur(o,0,0,e),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ch(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ah(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ul,hl,dl),t.scissorTest=!1,vo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===zs||t.mapping===Hs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ul=this._renderer.getRenderTarget(),hl=this._renderer.getActiveCubeFace(),dl=this._renderer.getActiveMipmapLevel();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ve,minFilter:Ve,generateMipmaps:!1,type:Dr,format:Ze,colorSpace:ni,depthBuffer:!1},r=Th(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Th(t,e,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Gx(o)),this._blurMaterial=Wx(o,t,e)}return r}_compileMaterial(t){const e=new ft(this._lodPlanes[0],t);this._renderer.compile(e,cl)}_sceneToCubeUV(t,e,n,r){const u=new gn(90,1,e,n),h=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],p=this._renderer,m=p.autoClear,g=p.toneMapping;p.getClearColor(Mh),p.toneMapping=Ei,p.autoClear=!1;const x=new Or({name:"PMREM.Background",side:on,depthWrite:!1,depthTest:!1}),b=new ft(new ue,x);let w=!1;const v=t.background;v?v.isColor&&(x.color.copy(v),t.background=null,w=!0):(x.color.copy(Mh),w=!0);for(let _=0;_<6;_++){const S=_%3;S===0?(u.up.set(0,h[_],0),u.lookAt(d[_],0,0)):S===1?(u.up.set(0,0,h[_]),u.lookAt(0,d[_],0)):(u.up.set(0,h[_],0),u.lookAt(0,0,d[_]));const y=this._cubeSize;vo(r,S*y,_>2?y:0,y,y),p.setRenderTarget(r),w&&p.render(b,u),p.render(t,u)}b.geometry.dispose(),b.material.dispose(),p.toneMapping=g,p.autoClear=m,t.background=v}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===zs||t.mapping===Hs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ch()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ah());const o=r?this._cubemapMaterial:this._equirectMaterial,l=new ft(this._lodPlanes[0],o),u=o.uniforms;u.envMap.value=t;const h=this._cubeSize;vo(e,0,0,3*h,2*h),n.setRenderTarget(e),n.render(l,cl)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),l=Eh[(r-1)%Eh.length];this._blur(t,r-1,r,o,l)}e.autoClear=n}_blur(t,e,n,r,o){const l=this._pingPongRenderTarget;this._halfBlur(t,l,e,n,r,"latitudinal",o),this._halfBlur(l,t,n,n,r,"longitudinal",o)}_halfBlur(t,e,n,r,o,l,u){const h=this._renderer,d=this._blurMaterial;l!=="latitudinal"&&l!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const p=3,m=new ft(this._lodPlanes[r],d),g=d.uniforms,x=this._sizeLods[n]-1,b=isFinite(o)?Math.PI/(2*x):2*Math.PI/(2*zi-1),w=o/b,v=isFinite(o)?1+Math.floor(p*w):zi;v>zi&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${zi}`);const _=[];let S=0;for(let A=0;A<zi;++A){const O=A/w,z=Math.exp(-O*O/2);_.push(z),A===0?S+=z:A<v&&(S+=2*z)}for(let A=0;A<_.length;A++)_[A]=_[A]/S;g.envMap.value=t.texture,g.samples.value=v,g.weights.value=_,g.latitudinal.value=l==="latitudinal",u&&(g.poleAxis.value=u);const{_lodMax:y}=this;g.dTheta.value=b,g.mipInt.value=y-n;const T=this._sizeLods[r],P=3*T*(r>y-Us?r-y+Us:0),C=4*(this._cubeSize-T);vo(e,P,C,3*T,2*T),h.setRenderTarget(e),h.render(m,cl)}}function Gx(i){const t=[],e=[],n=[];let r=i;const o=i-Us+1+wh.length;for(let l=0;l<o;l++){const u=Math.pow(2,r);e.push(u);let h=1/u;l>i-Us?h=wh[l-i+Us-1]:l===0&&(h=0),n.push(h);const d=1/(u-2),p=-d,m=1+d,g=[p,p,m,p,m,m,p,p,m,m,p,m],x=6,b=6,w=3,v=2,_=1,S=new Float32Array(w*b*x),y=new Float32Array(v*b*x),T=new Float32Array(_*b*x);for(let C=0;C<x;C++){const A=C%3*2/3-1,O=C>2?0:-1,z=[A,O,0,A+2/3,O,0,A+2/3,O+1,0,A,O,0,A+2/3,O+1,0,A,O+1,0];S.set(z,w*b*C),y.set(g,v*b*C);const M=[C,C,C,C,C,C];T.set(M,_*b*C)}const P=new Je;P.setAttribute("position",new Qe(S,w)),P.setAttribute("uv",new Qe(y,v)),P.setAttribute("faceIndex",new Qe(T,_)),t.push(P),r>Us&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Th(i,t,e){const n=new Dn(i,t,e);return n.texture.mapping=na,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function vo(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function Wx(i,t,e){const n=new Float32Array(zi),r=new I(0,1,0);return new dn({name:"SphericalGaussianBlur",defines:{n:zi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:dc(),fragmentShader:`

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
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function Ah(){return new dn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:dc(),fragmentShader:`

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
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function Ch(){return new dn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:dc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function dc(){return`

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
	`}function Xx(i){let t=new WeakMap,e=null;function n(u){if(u&&u.isTexture){const h=u.mapping,d=h===Nl||h===Fl,p=h===zs||h===Hs;if(d||p)if(u.isRenderTargetTexture&&u.needsPMREMUpdate===!0){u.needsPMREMUpdate=!1;let m=t.get(u);return e===null&&(e=new Sh(i)),m=d?e.fromEquirectangular(u,m):e.fromCubemap(u,m),t.set(u,m),m.texture}else{if(t.has(u))return t.get(u).texture;{const m=u.image;if(d&&m&&m.height>0||p&&m&&r(m)){e===null&&(e=new Sh(i));const g=d?e.fromEquirectangular(u):e.fromCubemap(u);return t.set(u,g),u.addEventListener("dispose",o),g.texture}else return null}}}return u}function r(u){let h=0;const d=6;for(let p=0;p<d;p++)u[p]!==void 0&&h++;return h===d}function o(u){const h=u.target;h.removeEventListener("dispose",o);const d=t.get(h);d!==void 0&&(t.delete(h),d.dispose())}function l(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:l}}function qx(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const r=e(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function jx(i,t,e,n){const r={},o=new WeakMap;function l(m){const g=m.target;g.index!==null&&t.remove(g.index);for(const b in g.attributes)t.remove(g.attributes[b]);for(const b in g.morphAttributes){const w=g.morphAttributes[b];for(let v=0,_=w.length;v<_;v++)t.remove(w[v])}g.removeEventListener("dispose",l),delete r[g.id];const x=o.get(g);x&&(t.remove(x),o.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,e.memory.geometries--}function u(m,g){return r[g.id]===!0||(g.addEventListener("dispose",l),r[g.id]=!0,e.memory.geometries++),g}function h(m){const g=m.attributes;for(const b in g)t.update(g[b],i.ARRAY_BUFFER);const x=m.morphAttributes;for(const b in x){const w=x[b];for(let v=0,_=w.length;v<_;v++)t.update(w[v],i.ARRAY_BUFFER)}}function d(m){const g=[],x=m.index,b=m.attributes.position;let w=0;if(x!==null){const S=x.array;w=x.version;for(let y=0,T=S.length;y<T;y+=3){const P=S[y+0],C=S[y+1],A=S[y+2];g.push(P,C,C,A,A,P)}}else if(b!==void 0){const S=b.array;w=b.version;for(let y=0,T=S.length/3-1;y<T;y+=3){const P=y+0,C=y+1,A=y+2;g.push(P,C,C,A,A,P)}}else return;const v=new(Wd(g)?$d:Kd)(g,1);v.version=w;const _=o.get(m);_&&t.remove(_),o.set(m,v)}function p(m){const g=o.get(m);if(g){const x=m.index;x!==null&&g.version<x.version&&d(m)}else d(m);return o.get(m)}return{get:u,update:h,getWireframeAttribute:p}}function Yx(i,t,e,n){const r=n.isWebGL2;let o;function l(x){o=x}let u,h;function d(x){u=x.type,h=x.bytesPerElement}function p(x,b){i.drawElements(o,b,u,x*h),e.update(b,o,1)}function m(x,b,w){if(w===0)return;let v,_;if(r)v=i,_="drawElementsInstanced";else if(v=t.get("ANGLE_instanced_arrays"),_="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[_](o,b,u,x*h,w),e.update(b,o,w)}function g(x,b,w){if(w===0)return;const v=t.get("WEBGL_multi_draw");if(v===null)for(let _=0;_<w;_++)this.render(x[_]/h,b[_]);else{v.multiDrawElementsWEBGL(o,b,0,u,x,0,w);let _=0;for(let S=0;S<w;S++)_+=b[S];e.update(_,o,1)}}this.setMode=l,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=g}function Kx(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,l,u){switch(e.calls++,l){case i.TRIANGLES:e.triangles+=u*(o/3);break;case i.LINES:e.lines+=u*(o/2);break;case i.LINE_STRIP:e.lines+=u*(o-1);break;case i.LINE_LOOP:e.lines+=u*o;break;case i.POINTS:e.points+=u*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",l);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function $x(i,t){return i[0]-t[0]}function Zx(i,t){return Math.abs(t[1])-Math.abs(i[1])}function Qx(i,t,e){const n={},r=new Float32Array(8),o=new WeakMap,l=new Me,u=[];for(let d=0;d<8;d++)u[d]=[d,0];function h(d,p,m){const g=d.morphTargetInfluences;if(t.isWebGL2===!0){const b=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,w=b!==void 0?b.length:0;let v=o.get(p);if(v===void 0||v.count!==w){let G=function(){q.dispose(),o.delete(p),p.removeEventListener("dispose",G)};var x=G;v!==void 0&&v.texture.dispose();const y=p.morphAttributes.position!==void 0,T=p.morphAttributes.normal!==void 0,P=p.morphAttributes.color!==void 0,C=p.morphAttributes.position||[],A=p.morphAttributes.normal||[],O=p.morphAttributes.color||[];let z=0;y===!0&&(z=1),T===!0&&(z=2),P===!0&&(z=3);let M=p.attributes.position.count*z,L=1;M>t.maxTextureSize&&(L=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);const V=new Float32Array(M*L*4*w),q=new jd(V,M,L,w);q.type=Ne,q.needsUpdate=!0;const F=z*4;for(let H=0;H<w;H++){const X=C[H],et=A[H],tt=O[H],nt=M*L*4*H;for(let st=0;st<X.count;st++){const pt=st*F;y===!0&&(l.fromBufferAttribute(X,st),V[nt+pt+0]=l.x,V[nt+pt+1]=l.y,V[nt+pt+2]=l.z,V[nt+pt+3]=0),T===!0&&(l.fromBufferAttribute(et,st),V[nt+pt+4]=l.x,V[nt+pt+5]=l.y,V[nt+pt+6]=l.z,V[nt+pt+7]=0),P===!0&&(l.fromBufferAttribute(tt,st),V[nt+pt+8]=l.x,V[nt+pt+9]=l.y,V[nt+pt+10]=l.z,V[nt+pt+11]=tt.itemSize===4?l.w:1)}}v={count:w,texture:q,size:new Rt(M,L)},o.set(p,v),p.addEventListener("dispose",G)}let _=0;for(let y=0;y<g.length;y++)_+=g[y];const S=p.morphTargetsRelative?1:1-_;m.getUniforms().setValue(i,"morphTargetBaseInfluence",S),m.getUniforms().setValue(i,"morphTargetInfluences",g),m.getUniforms().setValue(i,"morphTargetsTexture",v.texture,e),m.getUniforms().setValue(i,"morphTargetsTextureSize",v.size)}else{const b=g===void 0?0:g.length;let w=n[p.id];if(w===void 0||w.length!==b){w=[];for(let T=0;T<b;T++)w[T]=[T,0];n[p.id]=w}for(let T=0;T<b;T++){const P=w[T];P[0]=T,P[1]=g[T]}w.sort(Zx);for(let T=0;T<8;T++)T<b&&w[T][1]?(u[T][0]=w[T][0],u[T][1]=w[T][1]):(u[T][0]=Number.MAX_SAFE_INTEGER,u[T][1]=0);u.sort($x);const v=p.morphAttributes.position,_=p.morphAttributes.normal;let S=0;for(let T=0;T<8;T++){const P=u[T],C=P[0],A=P[1];C!==Number.MAX_SAFE_INTEGER&&A?(v&&p.getAttribute("morphTarget"+T)!==v[C]&&p.setAttribute("morphTarget"+T,v[C]),_&&p.getAttribute("morphNormal"+T)!==_[C]&&p.setAttribute("morphNormal"+T,_[C]),r[T]=A,S+=A):(v&&p.hasAttribute("morphTarget"+T)===!0&&p.deleteAttribute("morphTarget"+T),_&&p.hasAttribute("morphNormal"+T)===!0&&p.deleteAttribute("morphNormal"+T),r[T]=0)}const y=p.morphTargetsRelative?1:1-S;m.getUniforms().setValue(i,"morphTargetBaseInfluence",y),m.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:h}}function Jx(i,t,e,n){let r=new WeakMap;function o(h){const d=n.render.frame,p=h.geometry,m=t.get(h,p);if(r.get(m)!==d&&(t.update(m),r.set(m,d)),h.isInstancedMesh&&(h.hasEventListener("dispose",u)===!1&&h.addEventListener("dispose",u),r.get(h)!==d&&(e.update(h.instanceMatrix,i.ARRAY_BUFFER),h.instanceColor!==null&&e.update(h.instanceColor,i.ARRAY_BUFFER),r.set(h,d))),h.isSkinnedMesh){const g=h.skeleton;r.get(g)!==d&&(g.update(),r.set(g,d))}return m}function l(){r=new WeakMap}function u(h){const d=h.target;d.removeEventListener("dispose",u),e.remove(d.instanceMatrix),d.instanceColor!==null&&e.remove(d.instanceColor)}return{update:o,dispose:l}}class ep extends an{constructor(t,e,n,r,o,l,u,h,d,p){if(p=p!==void 0?p:qi,p!==qi&&p!==Gs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&p===qi&&(n=vn),n===void 0&&p===Gs&&(n=Xi),super(null,r,o,l,u,h,p,n,d),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=u!==void 0?u:de,this.minFilter=h!==void 0?h:de,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const np=new an,ip=new ep(1,1);ip.compareFunction=Gd;const sp=new jd,rp=new F_,op=new Jd,Ph=[],Rh=[],Lh=new Float32Array(16),Dh=new Float32Array(9),Ih=new Float32Array(4);function js(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let o=Ph[r];if(o===void 0&&(o=new Float32Array(r),Ph[r]=o),t!==0){n.toArray(o,0);for(let l=1,u=0;l!==t;++l)u+=e,i[l].toArray(o,u)}return o}function Fe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Oe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function aa(i,t){let e=Rh[t];e===void 0&&(e=new Int32Array(t),Rh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function tb(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function eb(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;i.uniform2fv(this.addr,t),Oe(e,t)}}function nb(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Fe(e,t))return;i.uniform3fv(this.addr,t),Oe(e,t)}}function ib(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;i.uniform4fv(this.addr,t),Oe(e,t)}}function sb(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Oe(e,t)}else{if(Fe(e,n))return;Ih.set(n),i.uniformMatrix2fv(this.addr,!1,Ih),Oe(e,n)}}function rb(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Oe(e,t)}else{if(Fe(e,n))return;Dh.set(n),i.uniformMatrix3fv(this.addr,!1,Dh),Oe(e,n)}}function ob(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Oe(e,t)}else{if(Fe(e,n))return;Lh.set(n),i.uniformMatrix4fv(this.addr,!1,Lh),Oe(e,n)}}function ab(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function lb(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;i.uniform2iv(this.addr,t),Oe(e,t)}}function cb(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;i.uniform3iv(this.addr,t),Oe(e,t)}}function ub(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;i.uniform4iv(this.addr,t),Oe(e,t)}}function hb(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function db(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;i.uniform2uiv(this.addr,t),Oe(e,t)}}function pb(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;i.uniform3uiv(this.addr,t),Oe(e,t)}}function fb(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;i.uniform4uiv(this.addr,t),Oe(e,t)}}function mb(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);const o=this.type===i.SAMPLER_2D_SHADOW?ip:np;e.setTexture2D(t||o,r)}function gb(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||rp,r)}function _b(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||op,r)}function vb(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||sp,r)}function xb(i){switch(i){case 5126:return tb;case 35664:return eb;case 35665:return nb;case 35666:return ib;case 35674:return sb;case 35675:return rb;case 35676:return ob;case 5124:case 35670:return ab;case 35667:case 35671:return lb;case 35668:case 35672:return cb;case 35669:case 35673:return ub;case 5125:return hb;case 36294:return db;case 36295:return pb;case 36296:return fb;case 35678:case 36198:case 36298:case 36306:case 35682:return mb;case 35679:case 36299:case 36307:return gb;case 35680:case 36300:case 36308:case 36293:return _b;case 36289:case 36303:case 36311:case 36292:return vb}}function bb(i,t){i.uniform1fv(this.addr,t)}function yb(i,t){const e=js(t,this.size,2);i.uniform2fv(this.addr,e)}function wb(i,t){const e=js(t,this.size,3);i.uniform3fv(this.addr,e)}function Mb(i,t){const e=js(t,this.size,4);i.uniform4fv(this.addr,e)}function Eb(i,t){const e=js(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Sb(i,t){const e=js(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Tb(i,t){const e=js(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Ab(i,t){i.uniform1iv(this.addr,t)}function Cb(i,t){i.uniform2iv(this.addr,t)}function Pb(i,t){i.uniform3iv(this.addr,t)}function Rb(i,t){i.uniform4iv(this.addr,t)}function Lb(i,t){i.uniform1uiv(this.addr,t)}function Db(i,t){i.uniform2uiv(this.addr,t)}function Ib(i,t){i.uniform3uiv(this.addr,t)}function Ub(i,t){i.uniform4uiv(this.addr,t)}function Nb(i,t,e){const n=this.cache,r=t.length,o=aa(e,r);Fe(n,o)||(i.uniform1iv(this.addr,o),Oe(n,o));for(let l=0;l!==r;++l)e.setTexture2D(t[l]||np,o[l])}function Fb(i,t,e){const n=this.cache,r=t.length,o=aa(e,r);Fe(n,o)||(i.uniform1iv(this.addr,o),Oe(n,o));for(let l=0;l!==r;++l)e.setTexture3D(t[l]||rp,o[l])}function Ob(i,t,e){const n=this.cache,r=t.length,o=aa(e,r);Fe(n,o)||(i.uniform1iv(this.addr,o),Oe(n,o));for(let l=0;l!==r;++l)e.setTextureCube(t[l]||op,o[l])}function Bb(i,t,e){const n=this.cache,r=t.length,o=aa(e,r);Fe(n,o)||(i.uniform1iv(this.addr,o),Oe(n,o));for(let l=0;l!==r;++l)e.setTexture2DArray(t[l]||sp,o[l])}function kb(i){switch(i){case 5126:return bb;case 35664:return yb;case 35665:return wb;case 35666:return Mb;case 35674:return Eb;case 35675:return Sb;case 35676:return Tb;case 5124:case 35670:return Ab;case 35667:case 35671:return Cb;case 35668:case 35672:return Pb;case 35669:case 35673:return Rb;case 5125:return Lb;case 36294:return Db;case 36295:return Ib;case 36296:return Ub;case 35678:case 36198:case 36298:case 36306:case 35682:return Nb;case 35679:case 36299:case 36307:return Fb;case 35680:case 36300:case 36308:case 36293:return Ob;case 36289:case 36303:case 36311:case 36292:return Bb}}class Vb{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=xb(e.type)}}class zb{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=kb(e.type)}}class Hb{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let o=0,l=r.length;o!==l;++o){const u=r[o];u.setValue(t,e[u.id],n)}}}const pl=/(\w+)(\])?(\[|\.)?/g;function Uh(i,t){i.seq.push(t),i.map[t.id]=t}function Gb(i,t,e){const n=i.name,r=n.length;for(pl.lastIndex=0;;){const o=pl.exec(n),l=pl.lastIndex;let u=o[1];const h=o[2]==="]",d=o[3];if(h&&(u=u|0),d===void 0||d==="["&&l+2===r){Uh(e,d===void 0?new Vb(u,i,t):new zb(u,i,t));break}else{let m=e.map[u];m===void 0&&(m=new Hb(u),Uh(e,m)),e=m}}}class zo{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const o=t.getActiveUniform(e,r),l=t.getUniformLocation(e,o.name);Gb(o,l,this)}}setValue(t,e,n,r){const o=this.map[e];o!==void 0&&o.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let o=0,l=e.length;o!==l;++o){const u=e[o],h=n[u.id];h.needsUpdate!==!1&&u.setValue(t,h.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,o=t.length;r!==o;++r){const l=t[r];l.id in e&&n.push(l)}return n}}function Nh(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Wb=37297;let Xb=0;function qb(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let l=r;l<o;l++){const u=l+1;n.push(`${u===t?">":" "} ${u}: ${e[l]}`)}return n.join(`
`)}function jb(i){const t=he.getPrimaries(he.workingColorSpace),e=he.getPrimaries(i);let n;switch(t===e?n="":t===Ko&&e===Yo?n="LinearDisplayP3ToLinearSRGB":t===Yo&&e===Ko&&(n="LinearSRGBToLinearDisplayP3"),i){case ni:case ra:return[n,"LinearTransferOETF"];case ze:case lc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Fh(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=i.getShaderInfoLog(t).trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const l=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+qb(i.getShaderSource(t),l)}else return r}function Yb(i,t){const e=jb(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Kb(i,t){let e;switch(t){case $g:e="Linear";break;case Zg:e="Reinhard";break;case Qg:e="OptimizedCineon";break;case Jg:e="ACESFilmic";break;case e_:e="AgX";break;case t_:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function $b(i){return[i.extensionDerivatives||!!i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.alphaToCoverage||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ns).join(`
`)}function Zb(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ns).join(`
`)}function Qb(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Jb(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const o=i.getActiveAttrib(t,r),l=o.name;let u=1;o.type===i.FLOAT_MAT2&&(u=2),o.type===i.FLOAT_MAT3&&(u=3),o.type===i.FLOAT_MAT4&&(u=4),e[l]={type:o.type,location:i.getAttribLocation(t,l),locationSize:u}}return e}function Ns(i){return i!==""}function Oh(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Bh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const ty=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hl(i){return i.replace(ty,ny)}const ey=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function ny(i,t){let e=Qt[t];if(e===void 0){const n=ey.get(t);if(n!==void 0)e=Qt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Hl(e)}const iy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function kh(i){return i.replace(iy,sy)}function sy(i,t,e,n){let r="";for(let o=parseInt(t);o<parseInt(e);o++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function Vh(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function ry(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Dd?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Eg?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Qn&&(t="SHADOWMAP_TYPE_VSM"),t}function oy(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case zs:case Hs:t="ENVMAP_TYPE_CUBE";break;case na:t="ENVMAP_TYPE_CUBE_UV";break}return t}function ay(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Hs:t="ENVMAP_MODE_REFRACTION";break}return t}function ly(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Id:t="ENVMAP_BLENDING_MULTIPLY";break;case Yg:t="ENVMAP_BLENDING_MIX";break;case Kg:t="ENVMAP_BLENDING_ADD";break}return t}function cy(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function uy(i,t,e,n){const r=i.getContext(),o=e.defines;let l=e.vertexShader,u=e.fragmentShader;const h=ry(e),d=oy(e),p=ay(e),m=ly(e),g=cy(e),x=e.isWebGL2?"":$b(e),b=Zb(e),w=Qb(o),v=r.createProgram();let _,S,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,w].filter(Ns).join(`
`),_.length>0&&(_+=`
`),S=[x,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,w].filter(Ns).join(`
`),S.length>0&&(S+=`
`)):(_=[Vh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,w,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+p:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ns).join(`
`),S=[x,Vh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,w,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.envMap?"#define "+p:"",e.envMap?"#define "+m:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ei?"#define TONE_MAPPING":"",e.toneMapping!==Ei?Qt.tonemapping_pars_fragment:"",e.toneMapping!==Ei?Kb("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Qt.colorspace_pars_fragment,Yb("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ns).join(`
`)),l=Hl(l),l=Oh(l,e),l=Bh(l,e),u=Hl(u),u=Oh(u,e),u=Bh(u,e),l=kh(l),u=kh(u),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,_=[b,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,S=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===$o?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===$o?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const T=y+_+l,P=y+S+u,C=Nh(r,r.VERTEX_SHADER,T),A=Nh(r,r.FRAGMENT_SHADER,P);r.attachShader(v,C),r.attachShader(v,A),e.index0AttributeName!==void 0?r.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function O(V){if(i.debug.checkShaderErrors){const q=r.getProgramInfoLog(v).trim(),F=r.getShaderInfoLog(C).trim(),G=r.getShaderInfoLog(A).trim();let H=!0,X=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,v,C,A);else{const et=Fh(r,C,"vertex"),tt=Fh(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+q+`
`+et+`
`+tt)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(F===""||G==="")&&(X=!1);X&&(V.diagnostics={runnable:H,programLog:q,vertexShader:{log:F,prefix:_},fragmentShader:{log:G,prefix:S}})}r.deleteShader(C),r.deleteShader(A),z=new zo(r,v),M=Jb(r,v)}let z;this.getUniforms=function(){return z===void 0&&O(this),z};let M;this.getAttributes=function(){return M===void 0&&O(this),M};let L=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=r.getProgramParameter(v,Wb)),L},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Xb++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=C,this.fragmentShader=A,this}let hy=0;class dy{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),o=this._getShaderStage(n),l=this._getShaderCacheForMaterial(t);return l.has(r)===!1&&(l.add(r),r.usedTimes++),l.has(o)===!1&&(l.add(o),o.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new py(t),e.set(t,n)),n}}class py{constructor(t){this.id=hy++,this.code=t,this.usedTimes=0}}function fy(i,t,e,n,r,o,l){const u=new uc,h=new dy,d=new Set,p=[],m=r.isWebGL2,g=r.logarithmicDepthBuffer,x=r.vertexTextures;let b=r.precision;const w={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(M){return d.add(M),M===0?"uv":`uv${M}`}function _(M,L,V,q,F){const G=q.fog,H=F.geometry,X=M.isMeshStandardMaterial?q.environment:null,et=(M.isMeshStandardMaterial?e:t).get(M.envMap||X),tt=!!et&&et.mapping===na?et.image.height:null,nt=w[M.type];M.precision!==null&&(b=r.getMaxPrecision(M.precision),b!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",b,"instead."));const st=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,pt=st!==void 0?st.length:0;let vt=0;H.morphAttributes.position!==void 0&&(vt=1),H.morphAttributes.normal!==void 0&&(vt=2),H.morphAttributes.color!==void 0&&(vt=3);let $,ct,Mt,It;if(nt){const Jt=On[nt];$=Jt.vertexShader,ct=Jt.fragmentShader}else $=M.vertexShader,ct=M.fragmentShader,h.update(M),Mt=h.getVertexShaderID(M),It=h.getFragmentShaderID(M);const Ft=i.getRenderTarget(),Et=F.isInstancedMesh===!0,Wt=F.isBatchedMesh===!0,kt=!!M.map,Y=!!M.matcap,Ee=!!et,Lt=!!M.aoMap,zt=!!M.lightMap,Tt=!!M.bumpMap,pe=!!M.normalMap,Gt=!!M.displacementMap,U=!!M.emissiveMap,R=!!M.metalnessMap,K=!!M.roughnessMap,ht=M.anisotropy>0,ot=M.clearcoat>0,lt=M.iridescence>0,St=M.sheen>0,gt=M.transmission>0,bt=ht&&!!M.anisotropyMap,Ot=ot&&!!M.clearcoatMap,Vt=ot&&!!M.clearcoatNormalMap,rt=ot&&!!M.clearcoatRoughnessMap,ne=lt&&!!M.iridescenceMap,Zt=lt&&!!M.iridescenceThicknessMap,Ht=St&&!!M.sheenColorMap,At=St&&!!M.sheenRoughnessMap,xt=!!M.specularMap,Yt=!!M.specularColorMap,B=!!M.specularIntensityMap,dt=gt&&!!M.transmissionMap,_t=gt&&!!M.thicknessMap,Ct=!!M.gradientMap,N=!!M.alphaMap,it=M.alphaTest>0,at=!!M.alphaHash,wt=!!M.extensions;let Ut=Ei;M.toneMapped&&(Ft===null||Ft.isXRRenderTarget===!0)&&(Ut=i.toneMapping);const te={isWebGL2:m,shaderID:nt,shaderType:M.type,shaderName:M.name,vertexShader:$,fragmentShader:ct,defines:M.defines,customVertexShaderID:Mt,customFragmentShaderID:It,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:b,batching:Wt,instancing:Et,instancingColor:Et&&F.instanceColor!==null,supportsVertexTextures:x,outputColorSpace:Ft===null?i.outputColorSpace:Ft.isXRRenderTarget===!0?Ft.texture.colorSpace:ni,alphaToCoverage:!!M.alphaToCoverage,map:kt,matcap:Y,envMap:Ee,envMapMode:Ee&&et.mapping,envMapCubeUVHeight:tt,aoMap:Lt,lightMap:zt,bumpMap:Tt,normalMap:pe,displacementMap:x&&Gt,emissiveMap:U,normalMapObjectSpace:pe&&M.normalMapType===l_,normalMapTangentSpace:pe&&M.normalMapType===Hd,metalnessMap:R,roughnessMap:K,anisotropy:ht,anisotropyMap:bt,clearcoat:ot,clearcoatMap:Ot,clearcoatNormalMap:Vt,clearcoatRoughnessMap:rt,iridescence:lt,iridescenceMap:ne,iridescenceThicknessMap:Zt,sheen:St,sheenColorMap:Ht,sheenRoughnessMap:At,specularMap:xt,specularColorMap:Yt,specularIntensityMap:B,transmission:gt,transmissionMap:dt,thicknessMap:_t,gradientMap:Ct,opaque:M.transparent===!1&&M.blending===Bs&&M.alphaToCoverage===!1,alphaMap:N,alphaTest:it,alphaHash:at,combine:M.combine,mapUv:kt&&v(M.map.channel),aoMapUv:Lt&&v(M.aoMap.channel),lightMapUv:zt&&v(M.lightMap.channel),bumpMapUv:Tt&&v(M.bumpMap.channel),normalMapUv:pe&&v(M.normalMap.channel),displacementMapUv:Gt&&v(M.displacementMap.channel),emissiveMapUv:U&&v(M.emissiveMap.channel),metalnessMapUv:R&&v(M.metalnessMap.channel),roughnessMapUv:K&&v(M.roughnessMap.channel),anisotropyMapUv:bt&&v(M.anisotropyMap.channel),clearcoatMapUv:Ot&&v(M.clearcoatMap.channel),clearcoatNormalMapUv:Vt&&v(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:rt&&v(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ne&&v(M.iridescenceMap.channel),iridescenceThicknessMapUv:Zt&&v(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ht&&v(M.sheenColorMap.channel),sheenRoughnessMapUv:At&&v(M.sheenRoughnessMap.channel),specularMapUv:xt&&v(M.specularMap.channel),specularColorMapUv:Yt&&v(M.specularColorMap.channel),specularIntensityMapUv:B&&v(M.specularIntensityMap.channel),transmissionMapUv:dt&&v(M.transmissionMap.channel),thicknessMapUv:_t&&v(M.thicknessMap.channel),alphaMapUv:N&&v(M.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(pe||ht),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!H.attributes.uv&&(kt||N),fog:!!G,useFog:M.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:g,skinning:F.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:pt,morphTextureStride:vt,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&V.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ut,useLegacyLights:i._useLegacyLights,decodeVideoTexture:kt&&M.map.isVideoTexture===!0&&he.getTransfer(M.map.colorSpace)===_e,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===un,flipSided:M.side===on,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:wt&&M.extensions.derivatives===!0,extensionFragDepth:wt&&M.extensions.fragDepth===!0,extensionDrawBuffers:wt&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:wt&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:wt&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:wt&&M.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionFragDepth:m||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:m||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:m||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return te.vertexUv1s=d.has(1),te.vertexUv2s=d.has(2),te.vertexUv3s=d.has(3),d.clear(),te}function S(M){const L=[];if(M.shaderID?L.push(M.shaderID):(L.push(M.customVertexShaderID),L.push(M.customFragmentShaderID)),M.defines!==void 0)for(const V in M.defines)L.push(V),L.push(M.defines[V]);return M.isRawShaderMaterial===!1&&(y(L,M),T(L,M),L.push(i.outputColorSpace)),L.push(M.customProgramCacheKey),L.join()}function y(M,L){M.push(L.precision),M.push(L.outputColorSpace),M.push(L.envMapMode),M.push(L.envMapCubeUVHeight),M.push(L.mapUv),M.push(L.alphaMapUv),M.push(L.lightMapUv),M.push(L.aoMapUv),M.push(L.bumpMapUv),M.push(L.normalMapUv),M.push(L.displacementMapUv),M.push(L.emissiveMapUv),M.push(L.metalnessMapUv),M.push(L.roughnessMapUv),M.push(L.anisotropyMapUv),M.push(L.clearcoatMapUv),M.push(L.clearcoatNormalMapUv),M.push(L.clearcoatRoughnessMapUv),M.push(L.iridescenceMapUv),M.push(L.iridescenceThicknessMapUv),M.push(L.sheenColorMapUv),M.push(L.sheenRoughnessMapUv),M.push(L.specularMapUv),M.push(L.specularColorMapUv),M.push(L.specularIntensityMapUv),M.push(L.transmissionMapUv),M.push(L.thicknessMapUv),M.push(L.combine),M.push(L.fogExp2),M.push(L.sizeAttenuation),M.push(L.morphTargetsCount),M.push(L.morphAttributeCount),M.push(L.numDirLights),M.push(L.numPointLights),M.push(L.numSpotLights),M.push(L.numSpotLightMaps),M.push(L.numHemiLights),M.push(L.numRectAreaLights),M.push(L.numDirLightShadows),M.push(L.numPointLightShadows),M.push(L.numSpotLightShadows),M.push(L.numSpotLightShadowsWithMaps),M.push(L.numLightProbes),M.push(L.shadowMapType),M.push(L.toneMapping),M.push(L.numClippingPlanes),M.push(L.numClipIntersection),M.push(L.depthPacking)}function T(M,L){u.disableAll(),L.isWebGL2&&u.enable(0),L.supportsVertexTextures&&u.enable(1),L.instancing&&u.enable(2),L.instancingColor&&u.enable(3),L.matcap&&u.enable(4),L.envMap&&u.enable(5),L.normalMapObjectSpace&&u.enable(6),L.normalMapTangentSpace&&u.enable(7),L.clearcoat&&u.enable(8),L.iridescence&&u.enable(9),L.alphaTest&&u.enable(10),L.vertexColors&&u.enable(11),L.vertexAlphas&&u.enable(12),L.vertexUv1s&&u.enable(13),L.vertexUv2s&&u.enable(14),L.vertexUv3s&&u.enable(15),L.vertexTangents&&u.enable(16),L.anisotropy&&u.enable(17),L.alphaHash&&u.enable(18),L.batching&&u.enable(19),M.push(u.mask),u.disableAll(),L.fog&&u.enable(0),L.useFog&&u.enable(1),L.flatShading&&u.enable(2),L.logarithmicDepthBuffer&&u.enable(3),L.skinning&&u.enable(4),L.morphTargets&&u.enable(5),L.morphNormals&&u.enable(6),L.morphColors&&u.enable(7),L.premultipliedAlpha&&u.enable(8),L.shadowMapEnabled&&u.enable(9),L.useLegacyLights&&u.enable(10),L.doubleSided&&u.enable(11),L.flipSided&&u.enable(12),L.useDepthPacking&&u.enable(13),L.dithering&&u.enable(14),L.transmission&&u.enable(15),L.sheen&&u.enable(16),L.opaque&&u.enable(17),L.pointsUvs&&u.enable(18),L.decodeVideoTexture&&u.enable(19),L.alphaToCoverage&&u.enable(20),M.push(u.mask)}function P(M){const L=w[M.type];let V;if(L){const q=On[L];V=$_.clone(q.uniforms)}else V=M.uniforms;return V}function C(M,L){let V;for(let q=0,F=p.length;q<F;q++){const G=p[q];if(G.cacheKey===L){V=G,++V.usedTimes;break}}return V===void 0&&(V=new uy(i,L,M,o),p.push(V)),V}function A(M){if(--M.usedTimes===0){const L=p.indexOf(M);p[L]=p[p.length-1],p.pop(),M.destroy()}}function O(M){h.remove(M)}function z(){h.dispose()}return{getParameters:_,getProgramCacheKey:S,getUniforms:P,acquireProgram:C,releaseProgram:A,releaseShaderCache:O,programs:p,dispose:z}}function my(){let i=new WeakMap;function t(o){let l=i.get(o);return l===void 0&&(l={},i.set(o,l)),l}function e(o){i.delete(o)}function n(o,l,u){i.get(o)[l]=u}function r(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:r}}function gy(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function zh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Hh(){const i=[];let t=0;const e=[],n=[],r=[];function o(){t=0,e.length=0,n.length=0,r.length=0}function l(m,g,x,b,w,v){let _=i[t];return _===void 0?(_={id:m.id,object:m,geometry:g,material:x,groupOrder:b,renderOrder:m.renderOrder,z:w,group:v},i[t]=_):(_.id=m.id,_.object=m,_.geometry=g,_.material=x,_.groupOrder=b,_.renderOrder=m.renderOrder,_.z=w,_.group=v),t++,_}function u(m,g,x,b,w,v){const _=l(m,g,x,b,w,v);x.transmission>0?n.push(_):x.transparent===!0?r.push(_):e.push(_)}function h(m,g,x,b,w,v){const _=l(m,g,x,b,w,v);x.transmission>0?n.unshift(_):x.transparent===!0?r.unshift(_):e.unshift(_)}function d(m,g){e.length>1&&e.sort(m||gy),n.length>1&&n.sort(g||zh),r.length>1&&r.sort(g||zh)}function p(){for(let m=t,g=i.length;m<g;m++){const x=i[m];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:e,transmissive:n,transparent:r,init:o,push:u,unshift:h,finish:p,sort:d}}function _y(){let i=new WeakMap;function t(n,r){const o=i.get(n);let l;return o===void 0?(l=new Hh,i.set(n,[l])):r>=o.length?(l=new Hh,o.push(l)):l=o[r],l}function e(){i=new WeakMap}return{get:t,dispose:e}}function vy(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new re};break;case"SpotLight":e={position:new I,direction:new I,color:new re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new re,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new re,groundColor:new re};break;case"RectAreaLight":e={color:new re,position:new I,halfWidth:new I,halfHeight:new I};break}return i[t.id]=e,e}}}function xy(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let by=0;function yy(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function wy(i,t){const e=new vy,n=xy(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new I);const o=new I,l=new ce,u=new ce;function h(p,m){let g=0,x=0,b=0;for(let V=0;V<9;V++)r.probe[V].set(0,0,0);let w=0,v=0,_=0,S=0,y=0,T=0,P=0,C=0,A=0,O=0,z=0;p.sort(yy);const M=m===!0?Math.PI:1;for(let V=0,q=p.length;V<q;V++){const F=p[V],G=F.color,H=F.intensity,X=F.distance,et=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)g+=G.r*H*M,x+=G.g*H*M,b+=G.b*H*M;else if(F.isLightProbe){for(let tt=0;tt<9;tt++)r.probe[tt].addScaledVector(F.sh.coefficients[tt],H);z++}else if(F.isDirectionalLight){const tt=e.get(F);if(tt.color.copy(F.color).multiplyScalar(F.intensity*M),F.castShadow){const nt=F.shadow,st=n.get(F);st.shadowBias=nt.bias,st.shadowNormalBias=nt.normalBias,st.shadowRadius=nt.radius,st.shadowMapSize=nt.mapSize,r.directionalShadow[w]=st,r.directionalShadowMap[w]=et,r.directionalShadowMatrix[w]=F.shadow.matrix,T++}r.directional[w]=tt,w++}else if(F.isSpotLight){const tt=e.get(F);tt.position.setFromMatrixPosition(F.matrixWorld),tt.color.copy(G).multiplyScalar(H*M),tt.distance=X,tt.coneCos=Math.cos(F.angle),tt.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),tt.decay=F.decay,r.spot[_]=tt;const nt=F.shadow;if(F.map&&(r.spotLightMap[A]=F.map,A++,nt.updateMatrices(F),F.castShadow&&O++),r.spotLightMatrix[_]=nt.matrix,F.castShadow){const st=n.get(F);st.shadowBias=nt.bias,st.shadowNormalBias=nt.normalBias,st.shadowRadius=nt.radius,st.shadowMapSize=nt.mapSize,r.spotShadow[_]=st,r.spotShadowMap[_]=et,C++}_++}else if(F.isRectAreaLight){const tt=e.get(F);tt.color.copy(G).multiplyScalar(H),tt.halfWidth.set(F.width*.5,0,0),tt.halfHeight.set(0,F.height*.5,0),r.rectArea[S]=tt,S++}else if(F.isPointLight){const tt=e.get(F);if(tt.color.copy(F.color).multiplyScalar(F.intensity*M),tt.distance=F.distance,tt.decay=F.decay,F.castShadow){const nt=F.shadow,st=n.get(F);st.shadowBias=nt.bias,st.shadowNormalBias=nt.normalBias,st.shadowRadius=nt.radius,st.shadowMapSize=nt.mapSize,st.shadowCameraNear=nt.camera.near,st.shadowCameraFar=nt.camera.far,r.pointShadow[v]=st,r.pointShadowMap[v]=et,r.pointShadowMatrix[v]=F.shadow.matrix,P++}r.point[v]=tt,v++}else if(F.isHemisphereLight){const tt=e.get(F);tt.skyColor.copy(F.color).multiplyScalar(H*M),tt.groundColor.copy(F.groundColor).multiplyScalar(H*M),r.hemi[y]=tt,y++}}S>0&&(t.isWebGL2?i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=mt.LTC_FLOAT_1,r.rectAreaLTC2=mt.LTC_FLOAT_2):(r.rectAreaLTC1=mt.LTC_HALF_1,r.rectAreaLTC2=mt.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=mt.LTC_FLOAT_1,r.rectAreaLTC2=mt.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=mt.LTC_HALF_1,r.rectAreaLTC2=mt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=g,r.ambient[1]=x,r.ambient[2]=b;const L=r.hash;(L.directionalLength!==w||L.pointLength!==v||L.spotLength!==_||L.rectAreaLength!==S||L.hemiLength!==y||L.numDirectionalShadows!==T||L.numPointShadows!==P||L.numSpotShadows!==C||L.numSpotMaps!==A||L.numLightProbes!==z)&&(r.directional.length=w,r.spot.length=_,r.rectArea.length=S,r.point.length=v,r.hemi.length=y,r.directionalShadow.length=T,r.directionalShadowMap.length=T,r.pointShadow.length=P,r.pointShadowMap.length=P,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=T,r.pointShadowMatrix.length=P,r.spotLightMatrix.length=C+A-O,r.spotLightMap.length=A,r.numSpotLightShadowsWithMaps=O,r.numLightProbes=z,L.directionalLength=w,L.pointLength=v,L.spotLength=_,L.rectAreaLength=S,L.hemiLength=y,L.numDirectionalShadows=T,L.numPointShadows=P,L.numSpotShadows=C,L.numSpotMaps=A,L.numLightProbes=z,r.version=by++)}function d(p,m){let g=0,x=0,b=0,w=0,v=0;const _=m.matrixWorldInverse;for(let S=0,y=p.length;S<y;S++){const T=p[S];if(T.isDirectionalLight){const P=r.directional[g];P.direction.setFromMatrixPosition(T.matrixWorld),o.setFromMatrixPosition(T.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(_),g++}else if(T.isSpotLight){const P=r.spot[b];P.position.setFromMatrixPosition(T.matrixWorld),P.position.applyMatrix4(_),P.direction.setFromMatrixPosition(T.matrixWorld),o.setFromMatrixPosition(T.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(_),b++}else if(T.isRectAreaLight){const P=r.rectArea[w];P.position.setFromMatrixPosition(T.matrixWorld),P.position.applyMatrix4(_),u.identity(),l.copy(T.matrixWorld),l.premultiply(_),u.extractRotation(l),P.halfWidth.set(T.width*.5,0,0),P.halfHeight.set(0,T.height*.5,0),P.halfWidth.applyMatrix4(u),P.halfHeight.applyMatrix4(u),w++}else if(T.isPointLight){const P=r.point[x];P.position.setFromMatrixPosition(T.matrixWorld),P.position.applyMatrix4(_),x++}else if(T.isHemisphereLight){const P=r.hemi[v];P.direction.setFromMatrixPosition(T.matrixWorld),P.direction.transformDirection(_),v++}}}return{setup:h,setupView:d,state:r}}function Gh(i,t){const e=new wy(i,t),n=[],r=[];function o(){n.length=0,r.length=0}function l(m){n.push(m)}function u(m){r.push(m)}function h(m){e.setup(n,m)}function d(m){e.setupView(n,m)}return{init:o,state:{lightsArray:n,shadowsArray:r,lights:e},setupLights:h,setupLightsView:d,pushLight:l,pushShadow:u}}function My(i,t){let e=new WeakMap;function n(o,l=0){const u=e.get(o);let h;return u===void 0?(h=new Gh(i,t),e.set(o,[h])):l>=u.length?(h=new Gh(i,t),u.push(h)):h=u[l],h}function r(){e=new WeakMap}return{get:n,dispose:r}}class Ey extends qs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=o_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Sy extends qs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Ty=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ay=`uniform sampler2D shadow_pass;
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
}`;function Cy(i,t,e){let n=new hc;const r=new Rt,o=new Rt,l=new Me,u=new Ey({depthPacking:a_}),h=new Sy,d={},p=e.maxTextureSize,m={[Vn]:on,[on]:Vn,[un]:un},g=new dn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Rt},radius:{value:4}},vertexShader:Ty,fragmentShader:Ay}),x=g.clone();x.defines.HORIZONTAL_PASS=1;const b=new Je;b.setAttribute("position",new Qe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new ft(b,g),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Dd;let _=this.type;this.render=function(C,A,O){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||C.length===0)return;const z=i.getRenderTarget(),M=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),V=i.state;V.setBlending(Bn),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const q=_!==Qn&&this.type===Qn,F=_===Qn&&this.type!==Qn;for(let G=0,H=C.length;G<H;G++){const X=C[G],et=X.shadow;if(et===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(et.autoUpdate===!1&&et.needsUpdate===!1)continue;r.copy(et.mapSize);const tt=et.getFrameExtents();if(r.multiply(tt),o.copy(et.mapSize),(r.x>p||r.y>p)&&(r.x>p&&(o.x=Math.floor(p/tt.x),r.x=o.x*tt.x,et.mapSize.x=o.x),r.y>p&&(o.y=Math.floor(p/tt.y),r.y=o.y*tt.y,et.mapSize.y=o.y)),et.map===null||q===!0||F===!0){const st=this.type!==Qn?{minFilter:de,magFilter:de}:{};et.map!==null&&et.map.dispose(),et.map=new Dn(r.x,r.y,st),et.map.texture.name=X.name+".shadowMap",et.camera.updateProjectionMatrix()}i.setRenderTarget(et.map),i.clear();const nt=et.getViewportCount();for(let st=0;st<nt;st++){const pt=et.getViewport(st);l.set(o.x*pt.x,o.y*pt.y,o.x*pt.z,o.y*pt.w),V.viewport(l),et.updateMatrices(X,st),n=et.getFrustum(),T(A,O,et.camera,X,this.type)}et.isPointLightShadow!==!0&&this.type===Qn&&S(et,O),et.needsUpdate=!1}_=this.type,v.needsUpdate=!1,i.setRenderTarget(z,M,L)};function S(C,A){const O=t.update(w);g.defines.VSM_SAMPLES!==C.blurSamples&&(g.defines.VSM_SAMPLES=C.blurSamples,x.defines.VSM_SAMPLES=C.blurSamples,g.needsUpdate=!0,x.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Dn(r.x,r.y)),g.uniforms.shadow_pass.value=C.map.texture,g.uniforms.resolution.value=C.mapSize,g.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(A,null,O,g,w,null),x.uniforms.shadow_pass.value=C.mapPass.texture,x.uniforms.resolution.value=C.mapSize,x.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(A,null,O,x,w,null)}function y(C,A,O,z){let M=null;const L=O.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(L!==void 0)M=L;else if(M=O.isPointLight===!0?h:u,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const V=M.uuid,q=A.uuid;let F=d[V];F===void 0&&(F={},d[V]=F);let G=F[q];G===void 0&&(G=M.clone(),F[q]=G,A.addEventListener("dispose",P)),M=G}if(M.visible=A.visible,M.wireframe=A.wireframe,z===Qn?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:m[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,O.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const V=i.properties.get(M);V.light=O}return M}function T(C,A,O,z,M){if(C.visible===!1)return;if(C.layers.test(A.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&M===Qn)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,C.matrixWorld);const q=t.update(C),F=C.material;if(Array.isArray(F)){const G=q.groups;for(let H=0,X=G.length;H<X;H++){const et=G[H],tt=F[et.materialIndex];if(tt&&tt.visible){const nt=y(C,tt,z,M);C.onBeforeShadow(i,C,A,O,q,nt,et),i.renderBufferDirect(O,null,q,nt,C,et),C.onAfterShadow(i,C,A,O,q,nt,et)}}}else if(F.visible){const G=y(C,F,z,M);C.onBeforeShadow(i,C,A,O,q,G,null),i.renderBufferDirect(O,null,q,G,C,null),C.onAfterShadow(i,C,A,O,q,G,null)}}const V=C.children;for(let q=0,F=V.length;q<F;q++)T(V[q],A,O,z,M)}function P(C){C.target.removeEventListener("dispose",P);for(const O in d){const z=d[O],M=C.target.uuid;M in z&&(z[M].dispose(),delete z[M])}}}function Py(i,t,e){const n=e.isWebGL2;function r(){let N=!1;const it=new Me;let at=null;const wt=new Me(0,0,0,0);return{setMask:function(Ut){at!==Ut&&!N&&(i.colorMask(Ut,Ut,Ut,Ut),at=Ut)},setLocked:function(Ut){N=Ut},setClear:function(Ut,te,Jt,oe,Ce){Ce===!0&&(Ut*=oe,te*=oe,Jt*=oe),it.set(Ut,te,Jt,oe),wt.equals(it)===!1&&(i.clearColor(Ut,te,Jt,oe),wt.copy(it))},reset:function(){N=!1,at=null,wt.set(-1,0,0,0)}}}function o(){let N=!1,it=null,at=null,wt=null;return{setTest:function(Ut){Ut?Et(i.DEPTH_TEST):Wt(i.DEPTH_TEST)},setMask:function(Ut){it!==Ut&&!N&&(i.depthMask(Ut),it=Ut)},setFunc:function(Ut){if(at!==Ut){switch(Ut){case zg:i.depthFunc(i.NEVER);break;case Hg:i.depthFunc(i.ALWAYS);break;case Gg:i.depthFunc(i.LESS);break;case qo:i.depthFunc(i.LEQUAL);break;case Wg:i.depthFunc(i.EQUAL);break;case Xg:i.depthFunc(i.GEQUAL);break;case qg:i.depthFunc(i.GREATER);break;case jg:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}at=Ut}},setLocked:function(Ut){N=Ut},setClear:function(Ut){wt!==Ut&&(i.clearDepth(Ut),wt=Ut)},reset:function(){N=!1,it=null,at=null,wt=null}}}function l(){let N=!1,it=null,at=null,wt=null,Ut=null,te=null,Jt=null,oe=null,Ce=null;return{setTest:function(se){N||(se?Et(i.STENCIL_TEST):Wt(i.STENCIL_TEST))},setMask:function(se){it!==se&&!N&&(i.stencilMask(se),it=se)},setFunc:function(se,Se,He){(at!==se||wt!==Se||Ut!==He)&&(i.stencilFunc(se,Se,He),at=se,wt=Se,Ut=He)},setOp:function(se,Se,He){(te!==se||Jt!==Se||oe!==He)&&(i.stencilOp(se,Se,He),te=se,Jt=Se,oe=He)},setLocked:function(se){N=se},setClear:function(se){Ce!==se&&(i.clearStencil(se),Ce=se)},reset:function(){N=!1,it=null,at=null,wt=null,Ut=null,te=null,Jt=null,oe=null,Ce=null}}}const u=new r,h=new o,d=new l,p=new WeakMap,m=new WeakMap;let g={},x={},b=new WeakMap,w=[],v=null,_=!1,S=null,y=null,T=null,P=null,C=null,A=null,O=null,z=new re(0,0,0),M=0,L=!1,V=null,q=null,F=null,G=null,H=null;const X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let et=!1,tt=0;const nt=i.getParameter(i.VERSION);nt.indexOf("WebGL")!==-1?(tt=parseFloat(/^WebGL (\d)/.exec(nt)[1]),et=tt>=1):nt.indexOf("OpenGL ES")!==-1&&(tt=parseFloat(/^OpenGL ES (\d)/.exec(nt)[1]),et=tt>=2);let st=null,pt={};const vt=i.getParameter(i.SCISSOR_BOX),$=i.getParameter(i.VIEWPORT),ct=new Me().fromArray(vt),Mt=new Me().fromArray($);function It(N,it,at,wt){const Ut=new Uint8Array(4),te=i.createTexture();i.bindTexture(N,te),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Jt=0;Jt<at;Jt++)n&&(N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY)?i.texImage3D(it,0,i.RGBA,1,1,wt,0,i.RGBA,i.UNSIGNED_BYTE,Ut):i.texImage2D(it+Jt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ut);return te}const Ft={};Ft[i.TEXTURE_2D]=It(i.TEXTURE_2D,i.TEXTURE_2D,1),Ft[i.TEXTURE_CUBE_MAP]=It(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Ft[i.TEXTURE_2D_ARRAY]=It(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ft[i.TEXTURE_3D]=It(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),u.setClear(0,0,0,1),h.setClear(1),d.setClear(0),Et(i.DEPTH_TEST),h.setFunc(qo),Gt(!1),U(Mu),Et(i.CULL_FACE),Tt(Bn);function Et(N){g[N]!==!0&&(i.enable(N),g[N]=!0)}function Wt(N){g[N]!==!1&&(i.disable(N),g[N]=!1)}function kt(N,it){return x[N]!==it?(i.bindFramebuffer(N,it),x[N]=it,n&&(N===i.DRAW_FRAMEBUFFER&&(x[i.FRAMEBUFFER]=it),N===i.FRAMEBUFFER&&(x[i.DRAW_FRAMEBUFFER]=it)),!0):!1}function Y(N,it){let at=w,wt=!1;if(N)if(at=b.get(it),at===void 0&&(at=[],b.set(it,at)),N.isWebGLMultipleRenderTargets){const Ut=N.texture;if(at.length!==Ut.length||at[0]!==i.COLOR_ATTACHMENT0){for(let te=0,Jt=Ut.length;te<Jt;te++)at[te]=i.COLOR_ATTACHMENT0+te;at.length=Ut.length,wt=!0}}else at[0]!==i.COLOR_ATTACHMENT0&&(at[0]=i.COLOR_ATTACHMENT0,wt=!0);else at[0]!==i.BACK&&(at[0]=i.BACK,wt=!0);wt&&(e.isWebGL2?i.drawBuffers(at):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(at))}function Ee(N){return v!==N?(i.useProgram(N),v=N,!0):!1}const Lt={[Vi]:i.FUNC_ADD,[Tg]:i.FUNC_SUBTRACT,[Ag]:i.FUNC_REVERSE_SUBTRACT};if(n)Lt[Au]=i.MIN,Lt[Cu]=i.MAX;else{const N=t.get("EXT_blend_minmax");N!==null&&(Lt[Au]=N.MIN_EXT,Lt[Cu]=N.MAX_EXT)}const zt={[Cg]:i.ZERO,[Pg]:i.ONE,[Rg]:i.SRC_COLOR,[Il]:i.SRC_ALPHA,[Fg]:i.SRC_ALPHA_SATURATE,[Ug]:i.DST_COLOR,[Dg]:i.DST_ALPHA,[Lg]:i.ONE_MINUS_SRC_COLOR,[Ul]:i.ONE_MINUS_SRC_ALPHA,[Ng]:i.ONE_MINUS_DST_COLOR,[Ig]:i.ONE_MINUS_DST_ALPHA,[Og]:i.CONSTANT_COLOR,[Bg]:i.ONE_MINUS_CONSTANT_COLOR,[kg]:i.CONSTANT_ALPHA,[Vg]:i.ONE_MINUS_CONSTANT_ALPHA};function Tt(N,it,at,wt,Ut,te,Jt,oe,Ce,se){if(N===Bn){_===!0&&(Wt(i.BLEND),_=!1);return}if(_===!1&&(Et(i.BLEND),_=!0),N!==Sg){if(N!==S||se!==L){if((y!==Vi||C!==Vi)&&(i.blendEquation(i.FUNC_ADD),y=Vi,C=Vi),se)switch(N){case Bs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Eu:i.blendFunc(i.ONE,i.ONE);break;case Su:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Tu:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Bs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Eu:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Su:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Tu:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}T=null,P=null,A=null,O=null,z.set(0,0,0),M=0,S=N,L=se}return}Ut=Ut||it,te=te||at,Jt=Jt||wt,(it!==y||Ut!==C)&&(i.blendEquationSeparate(Lt[it],Lt[Ut]),y=it,C=Ut),(at!==T||wt!==P||te!==A||Jt!==O)&&(i.blendFuncSeparate(zt[at],zt[wt],zt[te],zt[Jt]),T=at,P=wt,A=te,O=Jt),(oe.equals(z)===!1||Ce!==M)&&(i.blendColor(oe.r,oe.g,oe.b,Ce),z.copy(oe),M=Ce),S=N,L=!1}function pe(N,it){N.side===un?Wt(i.CULL_FACE):Et(i.CULL_FACE);let at=N.side===on;it&&(at=!at),Gt(at),N.blending===Bs&&N.transparent===!1?Tt(Bn):Tt(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),h.setFunc(N.depthFunc),h.setTest(N.depthTest),h.setMask(N.depthWrite),u.setMask(N.colorWrite);const wt=N.stencilWrite;d.setTest(wt),wt&&(d.setMask(N.stencilWriteMask),d.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),d.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),K(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?Et(i.SAMPLE_ALPHA_TO_COVERAGE):Wt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Gt(N){V!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),V=N)}function U(N){N!==wg?(Et(i.CULL_FACE),N!==q&&(N===Mu?i.cullFace(i.BACK):N===Mg?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Wt(i.CULL_FACE),q=N}function R(N){N!==F&&(et&&i.lineWidth(N),F=N)}function K(N,it,at){N?(Et(i.POLYGON_OFFSET_FILL),(G!==it||H!==at)&&(i.polygonOffset(it,at),G=it,H=at)):Wt(i.POLYGON_OFFSET_FILL)}function ht(N){N?Et(i.SCISSOR_TEST):Wt(i.SCISSOR_TEST)}function ot(N){N===void 0&&(N=i.TEXTURE0+X-1),st!==N&&(i.activeTexture(N),st=N)}function lt(N,it,at){at===void 0&&(st===null?at=i.TEXTURE0+X-1:at=st);let wt=pt[at];wt===void 0&&(wt={type:void 0,texture:void 0},pt[at]=wt),(wt.type!==N||wt.texture!==it)&&(st!==at&&(i.activeTexture(at),st=at),i.bindTexture(N,it||Ft[N]),wt.type=N,wt.texture=it)}function St(){const N=pt[st];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function gt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function bt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ot(){try{i.texSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Vt(){try{i.texSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function rt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ne(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Zt(){try{i.texStorage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ht(){try{i.texStorage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function At(){try{i.texImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function xt(){try{i.texImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Yt(N){ct.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),ct.copy(N))}function B(N){Mt.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),Mt.copy(N))}function dt(N,it){let at=m.get(it);at===void 0&&(at=new WeakMap,m.set(it,at));let wt=at.get(N);wt===void 0&&(wt=i.getUniformBlockIndex(it,N.name),at.set(N,wt))}function _t(N,it){const wt=m.get(it).get(N);p.get(it)!==wt&&(i.uniformBlockBinding(it,wt,N.__bindingPointIndex),p.set(it,wt))}function Ct(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),g={},st=null,pt={},x={},b=new WeakMap,w=[],v=null,_=!1,S=null,y=null,T=null,P=null,C=null,A=null,O=null,z=new re(0,0,0),M=0,L=!1,V=null,q=null,F=null,G=null,H=null,ct.set(0,0,i.canvas.width,i.canvas.height),Mt.set(0,0,i.canvas.width,i.canvas.height),u.reset(),h.reset(),d.reset()}return{buffers:{color:u,depth:h,stencil:d},enable:Et,disable:Wt,bindFramebuffer:kt,drawBuffers:Y,useProgram:Ee,setBlending:Tt,setMaterial:pe,setFlipSided:Gt,setCullFace:U,setLineWidth:R,setPolygonOffset:K,setScissorTest:ht,activeTexture:ot,bindTexture:lt,unbindTexture:St,compressedTexImage2D:gt,compressedTexImage3D:bt,texImage2D:At,texImage3D:xt,updateUBOMapping:dt,uniformBlockBinding:_t,texStorage2D:Zt,texStorage3D:Ht,texSubImage2D:Ot,texSubImage3D:Vt,compressedTexSubImage2D:rt,compressedTexSubImage3D:ne,scissor:Yt,viewport:B,reset:Ct}}function Ry(i,t,e,n,r,o,l){const u=r.isWebGL2,h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new WeakMap;let m;const g=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(U,R){return x?new OffscreenCanvas(U,R):Jo("canvas")}function w(U,R,K,ht){let ot=1;if((U.width>ht||U.height>ht)&&(ot=ht/Math.max(U.width,U.height)),ot<1||R===!0)if(typeof HTMLImageElement!="undefined"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&U instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&U instanceof ImageBitmap){const lt=R?Qo:Math.floor,St=lt(ot*U.width),gt=lt(ot*U.height);m===void 0&&(m=b(St,gt));const bt=K?b(St,gt):m;return bt.width=St,bt.height=gt,bt.getContext("2d").drawImage(U,0,0,St,gt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+U.width+"x"+U.height+") to ("+St+"x"+gt+")."),bt}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+U.width+"x"+U.height+")."),U;return U}function v(U){return zl(U.width)&&zl(U.height)}function _(U){return u?!1:U.wrapS!==_n||U.wrapT!==_n||U.minFilter!==de&&U.minFilter!==Ve}function S(U,R){return U.generateMipmaps&&R&&U.minFilter!==de&&U.minFilter!==Ve}function y(U){i.generateMipmap(U)}function T(U,R,K,ht,ot=!1){if(u===!1)return R;if(U!==null){if(i[U]!==void 0)return i[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let lt=R;if(R===i.RED&&(K===i.FLOAT&&(lt=i.R32F),K===i.HALF_FLOAT&&(lt=i.R16F),K===i.UNSIGNED_BYTE&&(lt=i.R8)),R===i.RED_INTEGER&&(K===i.UNSIGNED_BYTE&&(lt=i.R8UI),K===i.UNSIGNED_SHORT&&(lt=i.R16UI),K===i.UNSIGNED_INT&&(lt=i.R32UI),K===i.BYTE&&(lt=i.R8I),K===i.SHORT&&(lt=i.R16I),K===i.INT&&(lt=i.R32I)),R===i.RG&&(K===i.FLOAT&&(lt=i.RG32F),K===i.HALF_FLOAT&&(lt=i.RG16F),K===i.UNSIGNED_BYTE&&(lt=i.RG8)),R===i.RGBA){const St=ot?jo:he.getTransfer(ht);K===i.FLOAT&&(lt=i.RGBA32F),K===i.HALF_FLOAT&&(lt=i.RGBA16F),K===i.UNSIGNED_BYTE&&(lt=St===_e?i.SRGB8_ALPHA8:i.RGBA8),K===i.UNSIGNED_SHORT_4_4_4_4&&(lt=i.RGBA4),K===i.UNSIGNED_SHORT_5_5_5_1&&(lt=i.RGB5_A1)}return(lt===i.R16F||lt===i.R32F||lt===i.RG16F||lt===i.RG32F||lt===i.RGBA16F||lt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),lt}function P(U,R,K){return S(U,K)===!0||U.isFramebufferTexture&&U.minFilter!==de&&U.minFilter!==Ve?Math.log2(Math.max(R.width,R.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?R.mipmaps.length:1}function C(U){return U===de||U===Pu||U===hr?i.NEAREST:i.LINEAR}function A(U){const R=U.target;R.removeEventListener("dispose",A),z(R),R.isVideoTexture&&p.delete(R)}function O(U){const R=U.target;R.removeEventListener("dispose",O),L(R)}function z(U){const R=n.get(U);if(R.__webglInit===void 0)return;const K=U.source,ht=g.get(K);if(ht){const ot=ht[R.__cacheKey];ot.usedTimes--,ot.usedTimes===0&&M(U),Object.keys(ht).length===0&&g.delete(K)}n.remove(U)}function M(U){const R=n.get(U);i.deleteTexture(R.__webglTexture);const K=U.source,ht=g.get(K);delete ht[R.__cacheKey],l.memory.textures--}function L(U){const R=U.texture,K=n.get(U),ht=n.get(R);if(ht.__webglTexture!==void 0&&(i.deleteTexture(ht.__webglTexture),l.memory.textures--),U.depthTexture&&U.depthTexture.dispose(),U.isWebGLCubeRenderTarget)for(let ot=0;ot<6;ot++){if(Array.isArray(K.__webglFramebuffer[ot]))for(let lt=0;lt<K.__webglFramebuffer[ot].length;lt++)i.deleteFramebuffer(K.__webglFramebuffer[ot][lt]);else i.deleteFramebuffer(K.__webglFramebuffer[ot]);K.__webglDepthbuffer&&i.deleteRenderbuffer(K.__webglDepthbuffer[ot])}else{if(Array.isArray(K.__webglFramebuffer))for(let ot=0;ot<K.__webglFramebuffer.length;ot++)i.deleteFramebuffer(K.__webglFramebuffer[ot]);else i.deleteFramebuffer(K.__webglFramebuffer);if(K.__webglDepthbuffer&&i.deleteRenderbuffer(K.__webglDepthbuffer),K.__webglMultisampledFramebuffer&&i.deleteFramebuffer(K.__webglMultisampledFramebuffer),K.__webglColorRenderbuffer)for(let ot=0;ot<K.__webglColorRenderbuffer.length;ot++)K.__webglColorRenderbuffer[ot]&&i.deleteRenderbuffer(K.__webglColorRenderbuffer[ot]);K.__webglDepthRenderbuffer&&i.deleteRenderbuffer(K.__webglDepthRenderbuffer)}if(U.isWebGLMultipleRenderTargets)for(let ot=0,lt=R.length;ot<lt;ot++){const St=n.get(R[ot]);St.__webglTexture&&(i.deleteTexture(St.__webglTexture),l.memory.textures--),n.remove(R[ot])}n.remove(R),n.remove(U)}let V=0;function q(){V=0}function F(){const U=V;return U>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+r.maxTextures),V+=1,U}function G(U){const R=[];return R.push(U.wrapS),R.push(U.wrapT),R.push(U.wrapR||0),R.push(U.magFilter),R.push(U.minFilter),R.push(U.anisotropy),R.push(U.internalFormat),R.push(U.format),R.push(U.type),R.push(U.generateMipmaps),R.push(U.premultiplyAlpha),R.push(U.flipY),R.push(U.unpackAlignment),R.push(U.colorSpace),R.join()}function H(U,R){const K=n.get(U);if(U.isVideoTexture&&pe(U),U.isRenderTargetTexture===!1&&U.version>0&&K.__version!==U.version){const ht=U.image;if(ht===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ht.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ct(K,U,R);return}}e.bindTexture(i.TEXTURE_2D,K.__webglTexture,i.TEXTURE0+R)}function X(U,R){const K=n.get(U);if(U.version>0&&K.__version!==U.version){ct(K,U,R);return}e.bindTexture(i.TEXTURE_2D_ARRAY,K.__webglTexture,i.TEXTURE0+R)}function et(U,R){const K=n.get(U);if(U.version>0&&K.__version!==U.version){ct(K,U,R);return}e.bindTexture(i.TEXTURE_3D,K.__webglTexture,i.TEXTURE0+R)}function tt(U,R){const K=n.get(U);if(U.version>0&&K.__version!==U.version){Mt(K,U,R);return}e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture,i.TEXTURE0+R)}const nt={[Ol]:i.REPEAT,[_n]:i.CLAMP_TO_EDGE,[Bl]:i.MIRRORED_REPEAT},st={[de]:i.NEAREST,[Pu]:i.NEAREST_MIPMAP_NEAREST,[hr]:i.NEAREST_MIPMAP_LINEAR,[Ve]:i.LINEAR,[Va]:i.LINEAR_MIPMAP_NEAREST,[Wi]:i.LINEAR_MIPMAP_LINEAR},pt={[c_]:i.NEVER,[m_]:i.ALWAYS,[u_]:i.LESS,[Gd]:i.LEQUAL,[h_]:i.EQUAL,[f_]:i.GEQUAL,[d_]:i.GREATER,[p_]:i.NOTEQUAL};function vt(U,R,K){if(R.type===Ne&&t.has("OES_texture_float_linear")===!1&&(R.magFilter===Ve||R.magFilter===Va||R.magFilter===hr||R.magFilter===Wi||R.minFilter===Ve||R.minFilter===Va||R.minFilter===hr||R.minFilter===Wi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),K?(i.texParameteri(U,i.TEXTURE_WRAP_S,nt[R.wrapS]),i.texParameteri(U,i.TEXTURE_WRAP_T,nt[R.wrapT]),(U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY)&&i.texParameteri(U,i.TEXTURE_WRAP_R,nt[R.wrapR]),i.texParameteri(U,i.TEXTURE_MAG_FILTER,st[R.magFilter]),i.texParameteri(U,i.TEXTURE_MIN_FILTER,st[R.minFilter])):(i.texParameteri(U,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(U,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY)&&i.texParameteri(U,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(R.wrapS!==_n||R.wrapT!==_n)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(U,i.TEXTURE_MAG_FILTER,C(R.magFilter)),i.texParameteri(U,i.TEXTURE_MIN_FILTER,C(R.minFilter)),R.minFilter!==de&&R.minFilter!==Ve&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),R.compareFunction&&(i.texParameteri(U,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(U,i.TEXTURE_COMPARE_FUNC,pt[R.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const ht=t.get("EXT_texture_filter_anisotropic");if(R.magFilter===de||R.minFilter!==hr&&R.minFilter!==Wi||R.type===Ne&&t.has("OES_texture_float_linear")===!1||u===!1&&R.type===Dr&&t.has("OES_texture_half_float_linear")===!1)return;(R.anisotropy>1||n.get(R).__currentAnisotropy)&&(i.texParameterf(U,ht.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,r.getMaxAnisotropy())),n.get(R).__currentAnisotropy=R.anisotropy)}}function $(U,R){let K=!1;U.__webglInit===void 0&&(U.__webglInit=!0,R.addEventListener("dispose",A));const ht=R.source;let ot=g.get(ht);ot===void 0&&(ot={},g.set(ht,ot));const lt=G(R);if(lt!==U.__cacheKey){ot[lt]===void 0&&(ot[lt]={texture:i.createTexture(),usedTimes:0},l.memory.textures++,K=!0),ot[lt].usedTimes++;const St=ot[U.__cacheKey];St!==void 0&&(ot[U.__cacheKey].usedTimes--,St.usedTimes===0&&M(R)),U.__cacheKey=lt,U.__webglTexture=ot[lt].texture}return K}function ct(U,R,K){let ht=i.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(ht=i.TEXTURE_2D_ARRAY),R.isData3DTexture&&(ht=i.TEXTURE_3D);const ot=$(U,R),lt=R.source;e.bindTexture(ht,U.__webglTexture,i.TEXTURE0+K);const St=n.get(lt);if(lt.version!==St.__version||ot===!0){e.activeTexture(i.TEXTURE0+K);const gt=he.getPrimaries(he.workingColorSpace),bt=R.colorSpace===Sn?null:he.getPrimaries(R.colorSpace),Ot=R.colorSpace===Sn||gt===bt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,R.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,R.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ot);const Vt=_(R)&&v(R.image)===!1;let rt=w(R.image,Vt,!1,r.maxTextureSize);rt=Gt(R,rt);const ne=v(rt)||u,Zt=o.convert(R.format,R.colorSpace);let Ht=o.convert(R.type),At=T(R.internalFormat,Zt,Ht,R.colorSpace,R.isVideoTexture);vt(ht,R,ne);let xt;const Yt=R.mipmaps,B=u&&R.isVideoTexture!==!0&&At!==Vd,dt=St.__version===void 0||ot===!0,_t=lt.dataReady,Ct=P(R,rt,ne);if(R.isDepthTexture)At=i.DEPTH_COMPONENT,u?R.type===Ne?At=i.DEPTH_COMPONENT32F:R.type===vn?At=i.DEPTH_COMPONENT24:R.type===Xi?At=i.DEPTH24_STENCIL8:At=i.DEPTH_COMPONENT16:R.type===Ne&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),R.format===qi&&At===i.DEPTH_COMPONENT&&R.type!==ia&&R.type!==vn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),R.type=vn,Ht=o.convert(R.type)),R.format===Gs&&At===i.DEPTH_COMPONENT&&(At=i.DEPTH_STENCIL,R.type!==Xi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),R.type=Xi,Ht=o.convert(R.type))),dt&&(B?e.texStorage2D(i.TEXTURE_2D,1,At,rt.width,rt.height):e.texImage2D(i.TEXTURE_2D,0,At,rt.width,rt.height,0,Zt,Ht,null));else if(R.isDataTexture)if(Yt.length>0&&ne){B&&dt&&e.texStorage2D(i.TEXTURE_2D,Ct,At,Yt[0].width,Yt[0].height);for(let N=0,it=Yt.length;N<it;N++)xt=Yt[N],B?_t&&e.texSubImage2D(i.TEXTURE_2D,N,0,0,xt.width,xt.height,Zt,Ht,xt.data):e.texImage2D(i.TEXTURE_2D,N,At,xt.width,xt.height,0,Zt,Ht,xt.data);R.generateMipmaps=!1}else B?(dt&&e.texStorage2D(i.TEXTURE_2D,Ct,At,rt.width,rt.height),_t&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,rt.width,rt.height,Zt,Ht,rt.data)):e.texImage2D(i.TEXTURE_2D,0,At,rt.width,rt.height,0,Zt,Ht,rt.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){B&&dt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ct,At,Yt[0].width,Yt[0].height,rt.depth);for(let N=0,it=Yt.length;N<it;N++)xt=Yt[N],R.format!==Ze?Zt!==null?B?_t&&e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,N,0,0,0,xt.width,xt.height,rt.depth,Zt,xt.data,0,0):e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,N,At,xt.width,xt.height,rt.depth,0,xt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):B?_t&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,N,0,0,0,xt.width,xt.height,rt.depth,Zt,Ht,xt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,N,At,xt.width,xt.height,rt.depth,0,Zt,Ht,xt.data)}else{B&&dt&&e.texStorage2D(i.TEXTURE_2D,Ct,At,Yt[0].width,Yt[0].height);for(let N=0,it=Yt.length;N<it;N++)xt=Yt[N],R.format!==Ze?Zt!==null?B?_t&&e.compressedTexSubImage2D(i.TEXTURE_2D,N,0,0,xt.width,xt.height,Zt,xt.data):e.compressedTexImage2D(i.TEXTURE_2D,N,At,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):B?_t&&e.texSubImage2D(i.TEXTURE_2D,N,0,0,xt.width,xt.height,Zt,Ht,xt.data):e.texImage2D(i.TEXTURE_2D,N,At,xt.width,xt.height,0,Zt,Ht,xt.data)}else if(R.isDataArrayTexture)B?(dt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ct,At,rt.width,rt.height,rt.depth),_t&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,Zt,Ht,rt.data)):e.texImage3D(i.TEXTURE_2D_ARRAY,0,At,rt.width,rt.height,rt.depth,0,Zt,Ht,rt.data);else if(R.isData3DTexture)B?(dt&&e.texStorage3D(i.TEXTURE_3D,Ct,At,rt.width,rt.height,rt.depth),_t&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,Zt,Ht,rt.data)):e.texImage3D(i.TEXTURE_3D,0,At,rt.width,rt.height,rt.depth,0,Zt,Ht,rt.data);else if(R.isFramebufferTexture){if(dt)if(B)e.texStorage2D(i.TEXTURE_2D,Ct,At,rt.width,rt.height);else{let N=rt.width,it=rt.height;for(let at=0;at<Ct;at++)e.texImage2D(i.TEXTURE_2D,at,At,N,it,0,Zt,Ht,null),N>>=1,it>>=1}}else if(Yt.length>0&&ne){B&&dt&&e.texStorage2D(i.TEXTURE_2D,Ct,At,Yt[0].width,Yt[0].height);for(let N=0,it=Yt.length;N<it;N++)xt=Yt[N],B?_t&&e.texSubImage2D(i.TEXTURE_2D,N,0,0,Zt,Ht,xt):e.texImage2D(i.TEXTURE_2D,N,At,Zt,Ht,xt);R.generateMipmaps=!1}else B?(dt&&e.texStorage2D(i.TEXTURE_2D,Ct,At,rt.width,rt.height),_t&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Zt,Ht,rt)):e.texImage2D(i.TEXTURE_2D,0,At,Zt,Ht,rt);S(R,ne)&&y(ht),St.__version=lt.version,R.onUpdate&&R.onUpdate(R)}U.__version=R.version}function Mt(U,R,K){if(R.image.length!==6)return;const ht=$(U,R),ot=R.source;e.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+K);const lt=n.get(ot);if(ot.version!==lt.__version||ht===!0){e.activeTexture(i.TEXTURE0+K);const St=he.getPrimaries(he.workingColorSpace),gt=R.colorSpace===Sn?null:he.getPrimaries(R.colorSpace),bt=R.colorSpace===Sn||St===gt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,R.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,R.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt);const Ot=R.isCompressedTexture||R.image[0].isCompressedTexture,Vt=R.image[0]&&R.image[0].isDataTexture,rt=[];for(let N=0;N<6;N++)!Ot&&!Vt?rt[N]=w(R.image[N],!1,!0,r.maxCubemapSize):rt[N]=Vt?R.image[N].image:R.image[N],rt[N]=Gt(R,rt[N]);const ne=rt[0],Zt=v(ne)||u,Ht=o.convert(R.format,R.colorSpace),At=o.convert(R.type),xt=T(R.internalFormat,Ht,At,R.colorSpace),Yt=u&&R.isVideoTexture!==!0,B=lt.__version===void 0||ht===!0,dt=ot.dataReady;let _t=P(R,ne,Zt);vt(i.TEXTURE_CUBE_MAP,R,Zt);let Ct;if(Ot){Yt&&B&&e.texStorage2D(i.TEXTURE_CUBE_MAP,_t,xt,ne.width,ne.height);for(let N=0;N<6;N++){Ct=rt[N].mipmaps;for(let it=0;it<Ct.length;it++){const at=Ct[it];R.format!==Ze?Ht!==null?Yt?dt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+N,it,0,0,at.width,at.height,Ht,at.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+N,it,xt,at.width,at.height,0,at.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Yt?dt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+N,it,0,0,at.width,at.height,Ht,At,at.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+N,it,xt,at.width,at.height,0,Ht,At,at.data)}}}else{Ct=R.mipmaps,Yt&&B&&(Ct.length>0&&_t++,e.texStorage2D(i.TEXTURE_CUBE_MAP,_t,xt,rt[0].width,rt[0].height));for(let N=0;N<6;N++)if(Vt){Yt?dt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+N,0,0,0,rt[N].width,rt[N].height,Ht,At,rt[N].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+N,0,xt,rt[N].width,rt[N].height,0,Ht,At,rt[N].data);for(let it=0;it<Ct.length;it++){const wt=Ct[it].image[N].image;Yt?dt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+N,it+1,0,0,wt.width,wt.height,Ht,At,wt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+N,it+1,xt,wt.width,wt.height,0,Ht,At,wt.data)}}else{Yt?dt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+N,0,0,0,Ht,At,rt[N]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+N,0,xt,Ht,At,rt[N]);for(let it=0;it<Ct.length;it++){const at=Ct[it];Yt?dt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+N,it+1,0,0,Ht,At,at.image[N]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+N,it+1,xt,Ht,At,at.image[N])}}}S(R,Zt)&&y(i.TEXTURE_CUBE_MAP),lt.__version=ot.version,R.onUpdate&&R.onUpdate(R)}U.__version=R.version}function It(U,R,K,ht,ot,lt){const St=o.convert(K.format,K.colorSpace),gt=o.convert(K.type),bt=T(K.internalFormat,St,gt,K.colorSpace);if(!n.get(R).__hasExternalTextures){const Vt=Math.max(1,R.width>>lt),rt=Math.max(1,R.height>>lt);ot===i.TEXTURE_3D||ot===i.TEXTURE_2D_ARRAY?e.texImage3D(ot,lt,bt,Vt,rt,R.depth,0,St,gt,null):e.texImage2D(ot,lt,bt,Vt,rt,0,St,gt,null)}e.bindFramebuffer(i.FRAMEBUFFER,U),Tt(R)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ht,ot,n.get(K).__webglTexture,0,zt(R)):(ot===i.TEXTURE_2D||ot>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ot<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ht,ot,n.get(K).__webglTexture,lt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ft(U,R,K){if(i.bindRenderbuffer(i.RENDERBUFFER,U),R.depthBuffer&&!R.stencilBuffer){let ht=u===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(K||Tt(R)){const ot=R.depthTexture;ot&&ot.isDepthTexture&&(ot.type===Ne?ht=i.DEPTH_COMPONENT32F:ot.type===vn&&(ht=i.DEPTH_COMPONENT24));const lt=zt(R);Tt(R)?h.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,lt,ht,R.width,R.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,lt,ht,R.width,R.height)}else i.renderbufferStorage(i.RENDERBUFFER,ht,R.width,R.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,U)}else if(R.depthBuffer&&R.stencilBuffer){const ht=zt(R);K&&Tt(R)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ht,i.DEPTH24_STENCIL8,R.width,R.height):Tt(R)?h.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ht,i.DEPTH24_STENCIL8,R.width,R.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,U)}else{const ht=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let ot=0;ot<ht.length;ot++){const lt=ht[ot],St=o.convert(lt.format,lt.colorSpace),gt=o.convert(lt.type),bt=T(lt.internalFormat,St,gt,lt.colorSpace),Ot=zt(R);K&&Tt(R)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ot,bt,R.width,R.height):Tt(R)?h.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ot,bt,R.width,R.height):i.renderbufferStorage(i.RENDERBUFFER,bt,R.width,R.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Et(U,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,U),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(R.depthTexture).__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),H(R.depthTexture,0);const ht=n.get(R.depthTexture).__webglTexture,ot=zt(R);if(R.depthTexture.format===qi)Tt(R)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ht,0,ot):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ht,0);else if(R.depthTexture.format===Gs)Tt(R)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ht,0,ot):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ht,0);else throw new Error("Unknown depthTexture format")}function Wt(U){const R=n.get(U),K=U.isWebGLCubeRenderTarget===!0;if(U.depthTexture&&!R.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");Et(R.__webglFramebuffer,U)}else if(K){R.__webglDepthbuffer=[];for(let ht=0;ht<6;ht++)e.bindFramebuffer(i.FRAMEBUFFER,R.__webglFramebuffer[ht]),R.__webglDepthbuffer[ht]=i.createRenderbuffer(),Ft(R.__webglDepthbuffer[ht],U,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer=i.createRenderbuffer(),Ft(R.__webglDepthbuffer,U,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function kt(U,R,K){const ht=n.get(U);R!==void 0&&It(ht.__webglFramebuffer,U,U.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),K!==void 0&&Wt(U)}function Y(U){const R=U.texture,K=n.get(U),ht=n.get(R);U.addEventListener("dispose",O),U.isWebGLMultipleRenderTargets!==!0&&(ht.__webglTexture===void 0&&(ht.__webglTexture=i.createTexture()),ht.__version=R.version,l.memory.textures++);const ot=U.isWebGLCubeRenderTarget===!0,lt=U.isWebGLMultipleRenderTargets===!0,St=v(U)||u;if(ot){K.__webglFramebuffer=[];for(let gt=0;gt<6;gt++)if(u&&R.mipmaps&&R.mipmaps.length>0){K.__webglFramebuffer[gt]=[];for(let bt=0;bt<R.mipmaps.length;bt++)K.__webglFramebuffer[gt][bt]=i.createFramebuffer()}else K.__webglFramebuffer[gt]=i.createFramebuffer()}else{if(u&&R.mipmaps&&R.mipmaps.length>0){K.__webglFramebuffer=[];for(let gt=0;gt<R.mipmaps.length;gt++)K.__webglFramebuffer[gt]=i.createFramebuffer()}else K.__webglFramebuffer=i.createFramebuffer();if(lt)if(r.drawBuffers){const gt=U.texture;for(let bt=0,Ot=gt.length;bt<Ot;bt++){const Vt=n.get(gt[bt]);Vt.__webglTexture===void 0&&(Vt.__webglTexture=i.createTexture(),l.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(u&&U.samples>0&&Tt(U)===!1){const gt=lt?R:[R];K.__webglMultisampledFramebuffer=i.createFramebuffer(),K.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let bt=0;bt<gt.length;bt++){const Ot=gt[bt];K.__webglColorRenderbuffer[bt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,K.__webglColorRenderbuffer[bt]);const Vt=o.convert(Ot.format,Ot.colorSpace),rt=o.convert(Ot.type),ne=T(Ot.internalFormat,Vt,rt,Ot.colorSpace,U.isXRRenderTarget===!0),Zt=zt(U);i.renderbufferStorageMultisample(i.RENDERBUFFER,Zt,ne,U.width,U.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.RENDERBUFFER,K.__webglColorRenderbuffer[bt])}i.bindRenderbuffer(i.RENDERBUFFER,null),U.depthBuffer&&(K.__webglDepthRenderbuffer=i.createRenderbuffer(),Ft(K.__webglDepthRenderbuffer,U,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ot){e.bindTexture(i.TEXTURE_CUBE_MAP,ht.__webglTexture),vt(i.TEXTURE_CUBE_MAP,R,St);for(let gt=0;gt<6;gt++)if(u&&R.mipmaps&&R.mipmaps.length>0)for(let bt=0;bt<R.mipmaps.length;bt++)It(K.__webglFramebuffer[gt][bt],U,R,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,bt);else It(K.__webglFramebuffer[gt],U,R,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0);S(R,St)&&y(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(lt){const gt=U.texture;for(let bt=0,Ot=gt.length;bt<Ot;bt++){const Vt=gt[bt],rt=n.get(Vt);e.bindTexture(i.TEXTURE_2D,rt.__webglTexture),vt(i.TEXTURE_2D,Vt,St),It(K.__webglFramebuffer,U,Vt,i.COLOR_ATTACHMENT0+bt,i.TEXTURE_2D,0),S(Vt,St)&&y(i.TEXTURE_2D)}e.unbindTexture()}else{let gt=i.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(u?gt=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(gt,ht.__webglTexture),vt(gt,R,St),u&&R.mipmaps&&R.mipmaps.length>0)for(let bt=0;bt<R.mipmaps.length;bt++)It(K.__webglFramebuffer[bt],U,R,i.COLOR_ATTACHMENT0,gt,bt);else It(K.__webglFramebuffer,U,R,i.COLOR_ATTACHMENT0,gt,0);S(R,St)&&y(gt),e.unbindTexture()}U.depthBuffer&&Wt(U)}function Ee(U){const R=v(U)||u,K=U.isWebGLMultipleRenderTargets===!0?U.texture:[U.texture];for(let ht=0,ot=K.length;ht<ot;ht++){const lt=K[ht];if(S(lt,R)){const St=U.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,gt=n.get(lt).__webglTexture;e.bindTexture(St,gt),y(St),e.unbindTexture()}}}function Lt(U){if(u&&U.samples>0&&Tt(U)===!1){const R=U.isWebGLMultipleRenderTargets?U.texture:[U.texture],K=U.width,ht=U.height;let ot=i.COLOR_BUFFER_BIT;const lt=[],St=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,gt=n.get(U),bt=U.isWebGLMultipleRenderTargets===!0;if(bt)for(let Ot=0;Ot<R.length;Ot++)e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ot,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ot,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,gt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,gt.__webglFramebuffer);for(let Ot=0;Ot<R.length;Ot++){lt.push(i.COLOR_ATTACHMENT0+Ot),U.depthBuffer&&lt.push(St);const Vt=gt.__ignoreDepthValues!==void 0?gt.__ignoreDepthValues:!1;if(Vt===!1&&(U.depthBuffer&&(ot|=i.DEPTH_BUFFER_BIT),U.stencilBuffer&&(ot|=i.STENCIL_BUFFER_BIT)),bt&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,gt.__webglColorRenderbuffer[Ot]),Vt===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[St]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[St])),bt){const rt=n.get(R[Ot]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,rt,0)}i.blitFramebuffer(0,0,K,ht,0,0,K,ht,ot,i.NEAREST),d&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,lt)}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),bt)for(let Ot=0;Ot<R.length;Ot++){e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ot,i.RENDERBUFFER,gt.__webglColorRenderbuffer[Ot]);const Vt=n.get(R[Ot]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ot,i.TEXTURE_2D,Vt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,gt.__webglMultisampledFramebuffer)}}function zt(U){return Math.min(r.maxSamples,U.samples)}function Tt(U){const R=n.get(U);return u&&U.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function pe(U){const R=l.render.frame;p.get(U)!==R&&(p.set(U,R),U.update())}function Gt(U,R){const K=U.colorSpace,ht=U.format,ot=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||U.format===Vl||K!==ni&&K!==Sn&&(he.getTransfer(K)===_e?u===!1?t.has("EXT_sRGB")===!0&&ht===Ze?(U.format=Vl,U.minFilter=Ve,U.generateMipmaps=!1):R=Xd.sRGBToLinear(R):(ht!==Ze||ot!==kn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",K)),R}this.allocateTextureUnit=F,this.resetTextureUnits=q,this.setTexture2D=H,this.setTexture2DArray=X,this.setTexture3D=et,this.setTextureCube=tt,this.rebindTextures=kt,this.setupRenderTarget=Y,this.updateRenderTargetMipmap=Ee,this.updateMultisampleRenderTarget=Lt,this.setupDepthRenderbuffer=Wt,this.setupFrameBufferTexture=It,this.useMultisampledRTT=Tt}function Ly(i,t,e){const n=e.isWebGL2;function r(o,l=Sn){let u;const h=he.getTransfer(l);if(o===kn)return i.UNSIGNED_BYTE;if(o===Fd)return i.UNSIGNED_SHORT_4_4_4_4;if(o===Od)return i.UNSIGNED_SHORT_5_5_5_1;if(o===kl)return i.BYTE;if(o===Nd)return i.SHORT;if(o===ia)return i.UNSIGNED_SHORT;if(o===Cr)return i.INT;if(o===vn)return i.UNSIGNED_INT;if(o===Ne)return i.FLOAT;if(o===Dr)return n?i.HALF_FLOAT:(u=t.get("OES_texture_half_float"),u!==null?u.HALF_FLOAT_OES:null);if(o===n_)return i.ALPHA;if(o===Ze)return i.RGBA;if(o===i_)return i.LUMINANCE;if(o===s_)return i.LUMINANCE_ALPHA;if(o===qi)return i.DEPTH_COMPONENT;if(o===Gs)return i.DEPTH_STENCIL;if(o===Vl)return u=t.get("EXT_sRGB"),u!==null?u.SRGB_ALPHA_EXT:null;if(o===Bd)return i.RED;if(o===ac)return i.RED_INTEGER;if(o===kd)return i.RG;if(o===sa)return i.RG_INTEGER;if(o===Ir)return i.RGBA_INTEGER;if(o===za||o===Ha||o===Ga||o===Wa)if(h===_e)if(u=t.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(o===za)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(o===Ha)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(o===Ga)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(o===Wa)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=t.get("WEBGL_compressed_texture_s3tc"),u!==null){if(o===za)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(o===Ha)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(o===Ga)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(o===Wa)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(o===Ru||o===Lu||o===Du||o===Iu)if(u=t.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(o===Ru)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(o===Lu)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(o===Du)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(o===Iu)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(o===Vd)return u=t.get("WEBGL_compressed_texture_etc1"),u!==null?u.COMPRESSED_RGB_ETC1_WEBGL:null;if(o===Uu||o===Nu)if(u=t.get("WEBGL_compressed_texture_etc"),u!==null){if(o===Uu)return h===_e?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(o===Nu)return h===_e?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(o===Fu||o===Ou||o===Bu||o===ku||o===Vu||o===zu||o===Hu||o===Gu||o===Wu||o===Xu||o===qu||o===ju||o===Yu||o===Ku)if(u=t.get("WEBGL_compressed_texture_astc"),u!==null){if(o===Fu)return h===_e?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(o===Ou)return h===_e?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(o===Bu)return h===_e?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(o===ku)return h===_e?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(o===Vu)return h===_e?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(o===zu)return h===_e?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(o===Hu)return h===_e?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(o===Gu)return h===_e?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(o===Wu)return h===_e?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(o===Xu)return h===_e?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(o===qu)return h===_e?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(o===ju)return h===_e?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(o===Yu)return h===_e?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(o===Ku)return h===_e?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(o===Xa||o===$u||o===Zu)if(u=t.get("EXT_texture_compression_bptc"),u!==null){if(o===Xa)return h===_e?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(o===$u)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(o===Zu)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(o===r_||o===Qu||o===Ju||o===th)if(u=t.get("EXT_texture_compression_rgtc"),u!==null){if(o===Xa)return u.COMPRESSED_RED_RGTC1_EXT;if(o===Qu)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(o===Ju)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(o===th)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return o===Xi?n?i.UNSIGNED_INT_24_8:(u=t.get("WEBGL_depth_texture"),u!==null?u.UNSIGNED_INT_24_8_WEBGL:null):i[o]!==void 0?i[o]:null}return{convert:r}}class Dy extends gn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class xo extends Re{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Iy={type:"move"};class fl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,o=null,l=null;const u=this._targetRay,h=this._grip,d=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(d&&t.hand){l=!0;for(const w of t.hand.values()){const v=e.getJointPose(w,n),_=this._getHandJoint(d,w);v!==null&&(_.matrix.fromArray(v.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=v.radius),_.visible=v!==null}const p=d.joints["index-finger-tip"],m=d.joints["thumb-tip"],g=p.position.distanceTo(m.position),x=.02,b=.005;d.inputState.pinching&&g>x+b?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!d.inputState.pinching&&g<=x-b&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else h!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,n),o!==null&&(h.matrix.fromArray(o.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,o.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(o.linearVelocity)):h.hasLinearVelocity=!1,o.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(o.angularVelocity)):h.hasAngularVelocity=!1));u!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&o!==null&&(r=o),r!==null&&(u.matrix.fromArray(r.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,r.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(r.linearVelocity)):u.hasLinearVelocity=!1,r.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(r.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(Iy)))}return u!==null&&(u.visible=r!==null),h!==null&&(h.visible=o!==null),d!==null&&(d.visible=l!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new xo;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Uy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ny=`
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

}`;class Fy{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const r=new an,o=t.properties.get(r);o.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}render(t,e){if(this.texture!==null){if(this.mesh===null){const n=e.cameras[0].viewport,r=new dn({extensions:{fragDepth:!0},vertexShader:Uy,fragmentShader:Ny,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ft(new ii(20,20),r)}t.render(this.mesh,e)}}reset(){this.texture=null,this.mesh=null}}class Oy extends Yi{constructor(t,e){super();const n=this;let r=null,o=1,l=null,u="local-floor",h=1,d=null,p=null,m=null,g=null,x=null,b=null;const w=new Fy,v=e.getContextAttributes();let _=null,S=null;const y=[],T=[],P=new Rt;let C=null;const A=new gn;A.layers.enable(1),A.viewport=new Me;const O=new gn;O.layers.enable(2),O.viewport=new Me;const z=[A,O],M=new Dy;M.layers.enable(1),M.layers.enable(2);let L=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let ct=y[$];return ct===void 0&&(ct=new fl,y[$]=ct),ct.getTargetRaySpace()},this.getControllerGrip=function($){let ct=y[$];return ct===void 0&&(ct=new fl,y[$]=ct),ct.getGripSpace()},this.getHand=function($){let ct=y[$];return ct===void 0&&(ct=new fl,y[$]=ct),ct.getHandSpace()};function q($){const ct=T.indexOf($.inputSource);if(ct===-1)return;const Mt=y[ct];Mt!==void 0&&(Mt.update($.inputSource,$.frame,d||l),Mt.dispatchEvent({type:$.type,data:$.inputSource}))}function F(){r.removeEventListener("select",q),r.removeEventListener("selectstart",q),r.removeEventListener("selectend",q),r.removeEventListener("squeeze",q),r.removeEventListener("squeezestart",q),r.removeEventListener("squeezeend",q),r.removeEventListener("end",F),r.removeEventListener("inputsourceschange",G);for(let $=0;$<y.length;$++){const ct=T[$];ct!==null&&(T[$]=null,y[$].disconnect(ct))}L=null,V=null,w.reset(),t.setRenderTarget(_),x=null,g=null,m=null,r=null,S=null,vt.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){o=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){u=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||l},this.setReferenceSpace=function($){d=$},this.getBaseLayer=function(){return g!==null?g:x},this.getBinding=function(){return m},this.getFrame=function(){return b},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(_=t.getRenderTarget(),r.addEventListener("select",q),r.addEventListener("selectstart",q),r.addEventListener("selectend",q),r.addEventListener("squeeze",q),r.addEventListener("squeezestart",q),r.addEventListener("squeezeend",q),r.addEventListener("end",F),r.addEventListener("inputsourceschange",G),v.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(P),r.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const ct={antialias:r.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:o};x=new XRWebGLLayer(r,e,ct),r.updateRenderState({baseLayer:x}),t.setPixelRatio(1),t.setSize(x.framebufferWidth,x.framebufferHeight,!1),S=new Dn(x.framebufferWidth,x.framebufferHeight,{format:Ze,type:kn,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil})}else{let ct=null,Mt=null,It=null;v.depth&&(It=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ct=v.stencil?Gs:qi,Mt=v.stencil?Xi:vn);const Ft={colorFormat:e.RGBA8,depthFormat:It,scaleFactor:o};m=new XRWebGLBinding(r,e),g=m.createProjectionLayer(Ft),r.updateRenderState({layers:[g]}),t.setPixelRatio(1),t.setSize(g.textureWidth,g.textureHeight,!1),S=new Dn(g.textureWidth,g.textureHeight,{format:Ze,type:kn,depthTexture:new ep(g.textureWidth,g.textureHeight,Mt,void 0,void 0,void 0,void 0,void 0,void 0,ct),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0});const Et=t.properties.get(S);Et.__ignoreDepthValues=g.ignoreDepthValues}S.isXRRenderTarget=!0,this.setFoveation(h),d=null,l=await r.requestReferenceSpace(u),vt.setContext(r),vt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function G($){for(let ct=0;ct<$.removed.length;ct++){const Mt=$.removed[ct],It=T.indexOf(Mt);It>=0&&(T[It]=null,y[It].disconnect(Mt))}for(let ct=0;ct<$.added.length;ct++){const Mt=$.added[ct];let It=T.indexOf(Mt);if(It===-1){for(let Et=0;Et<y.length;Et++)if(Et>=T.length){T.push(Mt),It=Et;break}else if(T[Et]===null){T[Et]=Mt,It=Et;break}if(It===-1)break}const Ft=y[It];Ft&&Ft.connect(Mt)}}const H=new I,X=new I;function et($,ct,Mt){H.setFromMatrixPosition(ct.matrixWorld),X.setFromMatrixPosition(Mt.matrixWorld);const It=H.distanceTo(X),Ft=ct.projectionMatrix.elements,Et=Mt.projectionMatrix.elements,Wt=Ft[14]/(Ft[10]-1),kt=Ft[14]/(Ft[10]+1),Y=(Ft[9]+1)/Ft[5],Ee=(Ft[9]-1)/Ft[5],Lt=(Ft[8]-1)/Ft[0],zt=(Et[8]+1)/Et[0],Tt=Wt*Lt,pe=Wt*zt,Gt=It/(-Lt+zt),U=Gt*-Lt;ct.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(U),$.translateZ(Gt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert();const R=Wt+Gt,K=kt+Gt,ht=Tt-U,ot=pe+(It-U),lt=Y*kt/K*R,St=Ee*kt/K*R;$.projectionMatrix.makePerspective(ht,ot,lt,St,R,K),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}function tt($,ct){ct===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(ct.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;w.texture!==null&&($.near=w.depthNear,$.far=w.depthFar),M.near=O.near=A.near=$.near,M.far=O.far=A.far=$.far,(L!==M.near||V!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),L=M.near,V=M.far,A.near=L,A.far=V,O.near=L,O.far=V,A.updateProjectionMatrix(),O.updateProjectionMatrix(),$.updateProjectionMatrix());const ct=$.parent,Mt=M.cameras;tt(M,ct);for(let It=0;It<Mt.length;It++)tt(Mt[It],ct);Mt.length===2?et(M,A,O):M.projectionMatrix.copy(A.projectionMatrix),nt($,M,ct)};function nt($,ct,Mt){Mt===null?$.matrix.copy(ct.matrixWorld):($.matrix.copy(Mt.matrixWorld),$.matrix.invert(),$.matrix.multiply(ct.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(ct.projectionMatrix),$.projectionMatrixInverse.copy(ct.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Ur*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(g===null&&x===null))return h},this.setFoveation=function($){h=$,g!==null&&(g.fixedFoveation=$),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=$)},this.hasDepthSensing=function(){return w.texture!==null};let st=null;function pt($,ct){if(p=ct.getViewerPose(d||l),b=ct,p!==null){const Mt=p.views;x!==null&&(t.setRenderTargetFramebuffer(S,x.framebuffer),t.setRenderTarget(S));let It=!1;Mt.length!==M.cameras.length&&(M.cameras.length=0,It=!0);for(let Et=0;Et<Mt.length;Et++){const Wt=Mt[Et];let kt=null;if(x!==null)kt=x.getViewport(Wt);else{const Ee=m.getViewSubImage(g,Wt);kt=Ee.viewport,Et===0&&(t.setRenderTargetTextures(S,Ee.colorTexture,g.ignoreDepthValues?void 0:Ee.depthStencilTexture),t.setRenderTarget(S))}let Y=z[Et];Y===void 0&&(Y=new gn,Y.layers.enable(Et),Y.viewport=new Me,z[Et]=Y),Y.matrix.fromArray(Wt.transform.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.projectionMatrix.fromArray(Wt.projectionMatrix),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert(),Y.viewport.set(kt.x,kt.y,kt.width,kt.height),Et===0&&(M.matrix.copy(Y.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),It===!0&&M.cameras.push(Y)}const Ft=r.enabledFeatures;if(Ft&&Ft.includes("depth-sensing")){const Et=m.getDepthInformation(Mt[0]);Et&&Et.isValid&&Et.texture&&w.init(t,Et,r.renderState)}}for(let Mt=0;Mt<y.length;Mt++){const It=T[Mt],Ft=y[Mt];It!==null&&Ft!==void 0&&Ft.update(It,ct,d||l)}w.render(t,M),st&&st($,ct),ct.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ct}),b=null}const vt=new tp;vt.setAnimationLoop(pt),this.setAnimationLoop=function($){st=$},this.dispose=function(){}}}function By(i,t){function e(v,_){v.matrixAutoUpdate===!0&&v.updateMatrix(),_.value.copy(v.matrix)}function n(v,_){_.color.getRGB(v.fogColor.value,Zd(i)),_.isFog?(v.fogNear.value=_.near,v.fogFar.value=_.far):_.isFogExp2&&(v.fogDensity.value=_.density)}function r(v,_,S,y,T){_.isMeshBasicMaterial||_.isMeshLambertMaterial?o(v,_):_.isMeshToonMaterial?(o(v,_),m(v,_)):_.isMeshPhongMaterial?(o(v,_),p(v,_)):_.isMeshStandardMaterial?(o(v,_),g(v,_),_.isMeshPhysicalMaterial&&x(v,_,T)):_.isMeshMatcapMaterial?(o(v,_),b(v,_)):_.isMeshDepthMaterial?o(v,_):_.isMeshDistanceMaterial?(o(v,_),w(v,_)):_.isMeshNormalMaterial?o(v,_):_.isLineBasicMaterial?(l(v,_),_.isLineDashedMaterial&&u(v,_)):_.isPointsMaterial?h(v,_,S,y):_.isSpriteMaterial?d(v,_):_.isShadowMaterial?(v.color.value.copy(_.color),v.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function o(v,_){v.opacity.value=_.opacity,_.color&&v.diffuse.value.copy(_.color),_.emissive&&v.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(v.map.value=_.map,e(_.map,v.mapTransform)),_.alphaMap&&(v.alphaMap.value=_.alphaMap,e(_.alphaMap,v.alphaMapTransform)),_.bumpMap&&(v.bumpMap.value=_.bumpMap,e(_.bumpMap,v.bumpMapTransform),v.bumpScale.value=_.bumpScale,_.side===on&&(v.bumpScale.value*=-1)),_.normalMap&&(v.normalMap.value=_.normalMap,e(_.normalMap,v.normalMapTransform),v.normalScale.value.copy(_.normalScale),_.side===on&&v.normalScale.value.negate()),_.displacementMap&&(v.displacementMap.value=_.displacementMap,e(_.displacementMap,v.displacementMapTransform),v.displacementScale.value=_.displacementScale,v.displacementBias.value=_.displacementBias),_.emissiveMap&&(v.emissiveMap.value=_.emissiveMap,e(_.emissiveMap,v.emissiveMapTransform)),_.specularMap&&(v.specularMap.value=_.specularMap,e(_.specularMap,v.specularMapTransform)),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest);const S=t.get(_).envMap;if(S&&(v.envMap.value=S,v.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=_.reflectivity,v.ior.value=_.ior,v.refractionRatio.value=_.refractionRatio),_.lightMap){v.lightMap.value=_.lightMap;const y=i._useLegacyLights===!0?Math.PI:1;v.lightMapIntensity.value=_.lightMapIntensity*y,e(_.lightMap,v.lightMapTransform)}_.aoMap&&(v.aoMap.value=_.aoMap,v.aoMapIntensity.value=_.aoMapIntensity,e(_.aoMap,v.aoMapTransform))}function l(v,_){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,_.map&&(v.map.value=_.map,e(_.map,v.mapTransform))}function u(v,_){v.dashSize.value=_.dashSize,v.totalSize.value=_.dashSize+_.gapSize,v.scale.value=_.scale}function h(v,_,S,y){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,v.size.value=_.size*S,v.scale.value=y*.5,_.map&&(v.map.value=_.map,e(_.map,v.uvTransform)),_.alphaMap&&(v.alphaMap.value=_.alphaMap,e(_.alphaMap,v.alphaMapTransform)),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest)}function d(v,_){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,v.rotation.value=_.rotation,_.map&&(v.map.value=_.map,e(_.map,v.mapTransform)),_.alphaMap&&(v.alphaMap.value=_.alphaMap,e(_.alphaMap,v.alphaMapTransform)),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest)}function p(v,_){v.specular.value.copy(_.specular),v.shininess.value=Math.max(_.shininess,1e-4)}function m(v,_){_.gradientMap&&(v.gradientMap.value=_.gradientMap)}function g(v,_){v.metalness.value=_.metalness,_.metalnessMap&&(v.metalnessMap.value=_.metalnessMap,e(_.metalnessMap,v.metalnessMapTransform)),v.roughness.value=_.roughness,_.roughnessMap&&(v.roughnessMap.value=_.roughnessMap,e(_.roughnessMap,v.roughnessMapTransform)),t.get(_).envMap&&(v.envMapIntensity.value=_.envMapIntensity)}function x(v,_,S){v.ior.value=_.ior,_.sheen>0&&(v.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),v.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(v.sheenColorMap.value=_.sheenColorMap,e(_.sheenColorMap,v.sheenColorMapTransform)),_.sheenRoughnessMap&&(v.sheenRoughnessMap.value=_.sheenRoughnessMap,e(_.sheenRoughnessMap,v.sheenRoughnessMapTransform))),_.clearcoat>0&&(v.clearcoat.value=_.clearcoat,v.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(v.clearcoatMap.value=_.clearcoatMap,e(_.clearcoatMap,v.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,e(_.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(v.clearcoatNormalMap.value=_.clearcoatNormalMap,e(_.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===on&&v.clearcoatNormalScale.value.negate())),_.iridescence>0&&(v.iridescence.value=_.iridescence,v.iridescenceIOR.value=_.iridescenceIOR,v.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(v.iridescenceMap.value=_.iridescenceMap,e(_.iridescenceMap,v.iridescenceMapTransform)),_.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=_.iridescenceThicknessMap,e(_.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),_.transmission>0&&(v.transmission.value=_.transmission,v.transmissionSamplerMap.value=S.texture,v.transmissionSamplerSize.value.set(S.width,S.height),_.transmissionMap&&(v.transmissionMap.value=_.transmissionMap,e(_.transmissionMap,v.transmissionMapTransform)),v.thickness.value=_.thickness,_.thicknessMap&&(v.thicknessMap.value=_.thicknessMap,e(_.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=_.attenuationDistance,v.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(v.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(v.anisotropyMap.value=_.anisotropyMap,e(_.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=_.specularIntensity,v.specularColor.value.copy(_.specularColor),_.specularColorMap&&(v.specularColorMap.value=_.specularColorMap,e(_.specularColorMap,v.specularColorMapTransform)),_.specularIntensityMap&&(v.specularIntensityMap.value=_.specularIntensityMap,e(_.specularIntensityMap,v.specularIntensityMapTransform))}function b(v,_){_.matcap&&(v.matcap.value=_.matcap)}function w(v,_){const S=t.get(_).light;v.referencePosition.value.setFromMatrixPosition(S.matrixWorld),v.nearDistance.value=S.shadow.camera.near,v.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function ky(i,t,e,n){let r={},o={},l=[];const u=e.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function h(S,y){const T=y.program;n.uniformBlockBinding(S,T)}function d(S,y){let T=r[S.id];T===void 0&&(b(S),T=p(S),r[S.id]=T,S.addEventListener("dispose",v));const P=y.program;n.updateUBOMapping(S,P);const C=t.render.frame;o[S.id]!==C&&(g(S),o[S.id]=C)}function p(S){const y=m();S.__bindingPointIndex=y;const T=i.createBuffer(),P=S.__size,C=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,P,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,T),T}function m(){for(let S=0;S<u;S++)if(l.indexOf(S)===-1)return l.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(S){const y=r[S.id],T=S.uniforms,P=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let C=0,A=T.length;C<A;C++){const O=Array.isArray(T[C])?T[C]:[T[C]];for(let z=0,M=O.length;z<M;z++){const L=O[z];if(x(L,C,z,P)===!0){const V=L.__offset,q=Array.isArray(L.value)?L.value:[L.value];let F=0;for(let G=0;G<q.length;G++){const H=q[G],X=w(H);typeof H=="number"||typeof H=="boolean"?(L.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,V+F,L.__data)):H.isMatrix3?(L.__data[0]=H.elements[0],L.__data[1]=H.elements[1],L.__data[2]=H.elements[2],L.__data[3]=0,L.__data[4]=H.elements[3],L.__data[5]=H.elements[4],L.__data[6]=H.elements[5],L.__data[7]=0,L.__data[8]=H.elements[6],L.__data[9]=H.elements[7],L.__data[10]=H.elements[8],L.__data[11]=0):(H.toArray(L.__data,F),F+=X.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,V,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function x(S,y,T,P){const C=S.value,A=y+"_"+T;if(P[A]===void 0)return typeof C=="number"||typeof C=="boolean"?P[A]=C:P[A]=C.clone(),!0;{const O=P[A];if(typeof C=="number"||typeof C=="boolean"){if(O!==C)return P[A]=C,!0}else if(O.equals(C)===!1)return O.copy(C),!0}return!1}function b(S){const y=S.uniforms;let T=0;const P=16;for(let A=0,O=y.length;A<O;A++){const z=Array.isArray(y[A])?y[A]:[y[A]];for(let M=0,L=z.length;M<L;M++){const V=z[M],q=Array.isArray(V.value)?V.value:[V.value];for(let F=0,G=q.length;F<G;F++){const H=q[F],X=w(H),et=T%P;et!==0&&P-et<X.boundary&&(T+=P-et),V.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=T,T+=X.storage}}}const C=T%P;return C>0&&(T+=P-C),S.__size=T,S.__cache={},this}function w(S){const y={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(y.boundary=4,y.storage=4):S.isVector2?(y.boundary=8,y.storage=8):S.isVector3||S.isColor?(y.boundary=16,y.storage=12):S.isVector4?(y.boundary=16,y.storage=16):S.isMatrix3?(y.boundary=48,y.storage=48):S.isMatrix4?(y.boundary=64,y.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),y}function v(S){const y=S.target;y.removeEventListener("dispose",v);const T=l.indexOf(y.__bindingPointIndex);l.splice(T,1),i.deleteBuffer(r[y.id]),delete r[y.id],delete o[y.id]}function _(){for(const S in r)i.deleteBuffer(r[S]);l=[],r={},o={}}return{bind:h,update:d,dispose:_}}class ap{constructor(t={}){const{canvas:e=L_(),context:n=null,depth:r=!0,stencil:o=!0,alpha:l=!1,antialias:u=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:d=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:m=!1}=t;this.isWebGLRenderer=!0;let g;n!==null?g=n.getContextAttributes().alpha:g=l;const x=new Uint32Array(4),b=new Int32Array(4);let w=null,v=null;const _=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ze,this._useLegacyLights=!1,this.toneMapping=Ei,this.toneMappingExposure=1;const y=this;let T=!1,P=0,C=0,A=null,O=-1,z=null;const M=new Me,L=new Me;let V=null;const q=new re(0);let F=0,G=e.width,H=e.height,X=1,et=null,tt=null;const nt=new Me(0,0,G,H),st=new Me(0,0,G,H);let pt=!1;const vt=new hc;let $=!1,ct=!1,Mt=null;const It=new ce,Ft=new Rt,Et=new I,Wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function kt(){return A===null?X:1}let Y=n;function Ee(D,j){for(let Q=0;Q<D.length;Q++){const J=D[Q],Z=e.getContext(J,j);if(Z!==null)return Z}return null}try{const D={alpha:!0,depth:r,stencil:o,antialias:u,premultipliedAlpha:h,preserveDrawingBuffer:d,powerPreference:p,failIfMajorPerformanceCaveat:m};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${rc}`),e.addEventListener("webglcontextlost",Ct,!1),e.addEventListener("webglcontextrestored",N,!1),e.addEventListener("webglcontextcreationerror",it,!1),Y===null){const j=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&j.shift(),Y=Ee(j,D),Y===null)throw Ee(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext!="undefined"&&Y instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),Y.getShaderPrecisionFormat===void 0&&(Y.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(D){throw console.error("THREE.WebGLRenderer: "+D.message),D}let Lt,zt,Tt,pe,Gt,U,R,K,ht,ot,lt,St,gt,bt,Ot,Vt,rt,ne,Zt,Ht,At,xt,Yt,B;function dt(){Lt=new qx(Y),zt=new Vx(Y,Lt,t),Lt.init(zt),xt=new Ly(Y,Lt,zt),Tt=new Py(Y,Lt,zt),pe=new Kx(Y),Gt=new my,U=new Ry(Y,Lt,Tt,Gt,zt,xt,pe),R=new Hx(y),K=new Xx(y),ht=new iv(Y,zt),Yt=new Bx(Y,Lt,ht,zt),ot=new jx(Y,ht,pe,Yt),lt=new Jx(Y,ot,ht,pe),Zt=new Qx(Y,zt,U),Vt=new zx(Gt),St=new fy(y,R,K,Lt,zt,Yt,Vt),gt=new By(y,Gt),bt=new _y,Ot=new My(Lt,zt),ne=new Ox(y,R,K,Tt,lt,g,h),rt=new Cy(y,lt,zt),B=new ky(Y,pe,zt,Tt),Ht=new kx(Y,Lt,pe,zt),At=new Yx(Y,Lt,pe,zt),pe.programs=St.programs,y.capabilities=zt,y.extensions=Lt,y.properties=Gt,y.renderLists=bt,y.shadowMap=rt,y.state=Tt,y.info=pe}dt();const _t=new Oy(y,Y);this.xr=_t,this.getContext=function(){return Y},this.getContextAttributes=function(){return Y.getContextAttributes()},this.forceContextLoss=function(){const D=Lt.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=Lt.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(D){D!==void 0&&(X=D,this.setSize(G,H,!1))},this.getSize=function(D){return D.set(G,H)},this.setSize=function(D,j,Q=!0){if(_t.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=D,H=j,e.width=Math.floor(D*X),e.height=Math.floor(j*X),Q===!0&&(e.style.width=D+"px",e.style.height=j+"px"),this.setViewport(0,0,D,j)},this.getDrawingBufferSize=function(D){return D.set(G*X,H*X).floor()},this.setDrawingBufferSize=function(D,j,Q){G=D,H=j,X=Q,e.width=Math.floor(D*Q),e.height=Math.floor(j*Q),this.setViewport(0,0,D,j)},this.getCurrentViewport=function(D){return D.copy(M)},this.getViewport=function(D){return D.copy(nt)},this.setViewport=function(D,j,Q,J){D.isVector4?nt.set(D.x,D.y,D.z,D.w):nt.set(D,j,Q,J),Tt.viewport(M.copy(nt).multiplyScalar(X).floor())},this.getScissor=function(D){return D.copy(st)},this.setScissor=function(D,j,Q,J){D.isVector4?st.set(D.x,D.y,D.z,D.w):st.set(D,j,Q,J),Tt.scissor(L.copy(st).multiplyScalar(X).floor())},this.getScissorTest=function(){return pt},this.setScissorTest=function(D){Tt.setScissorTest(pt=D)},this.setOpaqueSort=function(D){et=D},this.setTransparentSort=function(D){tt=D},this.getClearColor=function(D){return D.copy(ne.getClearColor())},this.setClearColor=function(){ne.setClearColor.apply(ne,arguments)},this.getClearAlpha=function(){return ne.getClearAlpha()},this.setClearAlpha=function(){ne.setClearAlpha.apply(ne,arguments)},this.clear=function(D=!0,j=!0,Q=!0){let J=0;if(D){let Z=!1;if(A!==null){const yt=A.texture.format;Z=yt===Ir||yt===sa||yt===ac}if(Z){const yt=A.texture.type,Pt=yt===kn||yt===vn||yt===ia||yt===Xi||yt===Fd||yt===Od,Bt=ne.getClearColor(),Nt=ne.getClearAlpha(),Xt=Bt.r,jt=Bt.g,Kt=Bt.b;Pt?(x[0]=Xt,x[1]=jt,x[2]=Kt,x[3]=Nt,Y.clearBufferuiv(Y.COLOR,0,x)):(b[0]=Xt,b[1]=jt,b[2]=Kt,b[3]=Nt,Y.clearBufferiv(Y.COLOR,0,b))}else J|=Y.COLOR_BUFFER_BIT}j&&(J|=Y.DEPTH_BUFFER_BIT),Q&&(J|=Y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Ct,!1),e.removeEventListener("webglcontextrestored",N,!1),e.removeEventListener("webglcontextcreationerror",it,!1),bt.dispose(),Ot.dispose(),Gt.dispose(),R.dispose(),K.dispose(),lt.dispose(),Yt.dispose(),B.dispose(),St.dispose(),_t.dispose(),_t.removeEventListener("sessionstart",Ce),_t.removeEventListener("sessionend",se),Mt&&(Mt.dispose(),Mt=null),Se.stop()};function Ct(D){D.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function N(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const D=pe.autoReset,j=rt.enabled,Q=rt.autoUpdate,J=rt.needsUpdate,Z=rt.type;dt(),pe.autoReset=D,rt.enabled=j,rt.autoUpdate=Q,rt.needsUpdate=J,rt.type=Z}function it(D){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function at(D){const j=D.target;j.removeEventListener("dispose",at),wt(j)}function wt(D){Ut(D),Gt.remove(D)}function Ut(D){const j=Gt.get(D).programs;j!==void 0&&(j.forEach(function(Q){St.releaseProgram(Q)}),D.isShaderMaterial&&St.releaseShaderCache(D))}this.renderBufferDirect=function(D,j,Q,J,Z,yt){j===null&&(j=Wt);const Pt=Z.isMesh&&Z.matrixWorld.determinant()<0,Bt=pa(D,j,Q,J,Z);Tt.setMaterial(J,Pt);let Nt=Q.index,Xt=1;if(J.wireframe===!0){if(Nt=ot.getWireframeAttribute(Q),Nt===void 0)return;Xt=2}const jt=Q.drawRange,Kt=Q.attributes.position;let be=jt.start*Xt,qe=(jt.start+jt.count)*Xt;yt!==null&&(be=Math.max(be,yt.start*Xt),qe=Math.min(qe,(yt.start+yt.count)*Xt)),Nt!==null?(be=Math.max(be,0),qe=Math.min(qe,Nt.count)):Kt!=null&&(be=Math.max(be,0),qe=Math.min(qe,Kt.count));const Pe=qe-be;if(Pe<0||Pe===1/0)return;Yt.setup(Z,J,Bt,Q,Nt);let yn,me=Ht;if(Nt!==null&&(yn=ht.get(Nt),me=At,me.setIndex(yn)),Z.isMesh)J.wireframe===!0?(Tt.setLineWidth(J.wireframeLinewidth*kt()),me.setMode(Y.LINES)):me.setMode(Y.TRIANGLES);else if(Z.isLine){let $t=J.linewidth;$t===void 0&&($t=1),Tt.setLineWidth($t*kt()),Z.isLineSegments?me.setMode(Y.LINES):Z.isLineLoop?me.setMode(Y.LINE_LOOP):me.setMode(Y.LINE_STRIP)}else Z.isPoints?me.setMode(Y.POINTS):Z.isSprite&&me.setMode(Y.TRIANGLES);if(Z.isBatchedMesh)me.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else if(Z.isInstancedMesh)me.renderInstances(be,Pe,Z.count);else if(Q.isInstancedBufferGeometry){const $t=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,Zs=Math.min(Q.instanceCount,$t);me.renderInstances(be,Pe,Zs)}else me.render(be,Pe)};function te(D,j,Q){D.transparent===!0&&D.side===un&&D.forceSinglePass===!1?(D.side=on,D.needsUpdate=!0,Ki(D,j,Q),D.side=Vn,D.needsUpdate=!0,Ki(D,j,Q),D.side=un):Ki(D,j,Q)}this.compile=function(D,j,Q=null){Q===null&&(Q=D),v=Ot.get(Q),v.init(),S.push(v),Q.traverseVisible(function(Z){Z.isLight&&Z.layers.test(j.layers)&&(v.pushLight(Z),Z.castShadow&&v.pushShadow(Z))}),D!==Q&&D.traverseVisible(function(Z){Z.isLight&&Z.layers.test(j.layers)&&(v.pushLight(Z),Z.castShadow&&v.pushShadow(Z))}),v.setupLights(y._useLegacyLights);const J=new Set;return D.traverse(function(Z){const yt=Z.material;if(yt)if(Array.isArray(yt))for(let Pt=0;Pt<yt.length;Pt++){const Bt=yt[Pt];te(Bt,Q,Z),J.add(Bt)}else te(yt,Q,Z),J.add(yt)}),S.pop(),v=null,J},this.compileAsync=function(D,j,Q=null){const J=this.compile(D,j,Q);return new Promise(Z=>{function yt(){if(J.forEach(function(Pt){Gt.get(Pt).currentProgram.isReady()&&J.delete(Pt)}),J.size===0){Z(D);return}setTimeout(yt,10)}Lt.get("KHR_parallel_shader_compile")!==null?yt():setTimeout(yt,10)})};let Jt=null;function oe(D){Jt&&Jt(D)}function Ce(){Se.stop()}function se(){Se.start()}const Se=new tp;Se.setAnimationLoop(oe),typeof self!="undefined"&&Se.setContext(self),this.setAnimationLoop=function(D){Jt=D,_t.setAnimationLoop(D),D===null?Se.stop():Se.start()},_t.addEventListener("sessionstart",Ce),_t.addEventListener("sessionend",se),this.render=function(D,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),_t.enabled===!0&&_t.isPresenting===!0&&(_t.cameraAutoUpdate===!0&&_t.updateCamera(j),j=_t.getCamera()),D.isScene===!0&&D.onBeforeRender(y,D,j,A),v=Ot.get(D,S.length),v.init(),S.push(v),It.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),vt.setFromProjectionMatrix(It),ct=this.localClippingEnabled,$=Vt.init(this.clippingPlanes,ct),w=bt.get(D,_.length),w.init(),_.push(w),He(D,j,0,y.sortObjects),w.finish(),y.sortObjects===!0&&w.sort(et,tt),this.info.render.frame++,$===!0&&Vt.beginShadows();const Q=v.state.shadowsArray;if(rt.render(Q,D,j),$===!0&&Vt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(_t.enabled===!1||_t.isPresenting===!1||_t.hasDepthSensing()===!1)&&ne.render(w,D),v.setupLights(y._useLegacyLights),j.isArrayCamera){const J=j.cameras;for(let Z=0,yt=J.length;Z<yt;Z++){const Pt=J[Z];kr(w,D,Pt,Pt.viewport)}}else kr(w,D,j);A!==null&&(U.updateMultisampleRenderTarget(A),U.updateRenderTargetMipmap(A)),D.isScene===!0&&D.onAfterRender(y,D,j),Yt.resetDefaultState(),O=-1,z=null,S.pop(),S.length>0?v=S[S.length-1]:v=null,_.pop(),_.length>0?w=_[_.length-1]:w=null};function He(D,j,Q,J){if(D.visible===!1)return;if(D.layers.test(j.layers)){if(D.isGroup)Q=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(j);else if(D.isLight)v.pushLight(D),D.castShadow&&v.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||vt.intersectsSprite(D)){J&&Et.setFromMatrixPosition(D.matrixWorld).applyMatrix4(It);const Pt=lt.update(D),Bt=D.material;Bt.visible&&w.push(D,Pt,Bt,Q,Et.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||vt.intersectsObject(D))){const Pt=lt.update(D),Bt=D.material;if(J&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),Et.copy(D.boundingSphere.center)):(Pt.boundingSphere===null&&Pt.computeBoundingSphere(),Et.copy(Pt.boundingSphere.center)),Et.applyMatrix4(D.matrixWorld).applyMatrix4(It)),Array.isArray(Bt)){const Nt=Pt.groups;for(let Xt=0,jt=Nt.length;Xt<jt;Xt++){const Kt=Nt[Xt],be=Bt[Kt.materialIndex];be&&be.visible&&w.push(D,Pt,be,Q,Et.z,Kt)}}else Bt.visible&&w.push(D,Pt,Bt,Q,Et.z,null)}}const yt=D.children;for(let Pt=0,Bt=yt.length;Pt<Bt;Pt++)He(yt[Pt],j,Q,J)}function kr(D,j,Q,J){const Z=D.opaque,yt=D.transmissive,Pt=D.transparent;v.setupLightsView(Q),$===!0&&Vt.setGlobalState(y.clippingPlanes,Q),yt.length>0&&da(Z,yt,j,Q),J&&Tt.viewport(M.copy(J)),Z.length>0&&si(Z,j,Q),yt.length>0&&si(yt,j,Q),Pt.length>0&&si(Pt,j,Q),Tt.buffers.depth.setTest(!0),Tt.buffers.depth.setMask(!0),Tt.buffers.color.setMask(!0),Tt.setPolygonOffset(!1)}function da(D,j,Q,J){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;const yt=zt.isWebGL2;Mt===null&&(Mt=new Dn(1,1,{generateMipmaps:!0,type:Lt.has("EXT_color_buffer_half_float")?Dr:kn,minFilter:Wi,samples:yt?4:0})),y.getDrawingBufferSize(Ft),yt?Mt.setSize(Ft.x,Ft.y):Mt.setSize(Qo(Ft.x),Qo(Ft.y));const Pt=y.getRenderTarget();y.setRenderTarget(Mt),y.getClearColor(q),F=y.getClearAlpha(),F<1&&y.setClearColor(16777215,.5),y.clear();const Bt=y.toneMapping;y.toneMapping=Ei,si(D,Q,J),U.updateMultisampleRenderTarget(Mt),U.updateRenderTargetMipmap(Mt);let Nt=!1;for(let Xt=0,jt=j.length;Xt<jt;Xt++){const Kt=j[Xt],be=Kt.object,qe=Kt.geometry,Pe=Kt.material,yn=Kt.group;if(Pe.side===un&&be.layers.test(J.layers)){const me=Pe.side;Pe.side=on,Pe.needsUpdate=!0,Vr(be,Q,J,qe,Pe,yn),Pe.side=me,Pe.needsUpdate=!0,Nt=!0}}Nt===!0&&(U.updateMultisampleRenderTarget(Mt),U.updateRenderTargetMipmap(Mt)),y.setRenderTarget(Pt),y.setClearColor(q,F),y.toneMapping=Bt}function si(D,j,Q){const J=j.isScene===!0?j.overrideMaterial:null;for(let Z=0,yt=D.length;Z<yt;Z++){const Pt=D[Z],Bt=Pt.object,Nt=Pt.geometry,Xt=J===null?Pt.material:J,jt=Pt.group;Bt.layers.test(Q.layers)&&Vr(Bt,j,Q,Nt,Xt,jt)}}function Vr(D,j,Q,J,Z,yt){D.onBeforeRender(y,j,Q,J,Z,yt),D.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),Z.onBeforeRender(y,j,Q,J,D,yt),Z.transparent===!0&&Z.side===un&&Z.forceSinglePass===!1?(Z.side=on,Z.needsUpdate=!0,y.renderBufferDirect(Q,j,J,Z,D,yt),Z.side=Vn,Z.needsUpdate=!0,y.renderBufferDirect(Q,j,J,Z,D,yt),Z.side=un):y.renderBufferDirect(Q,j,J,Z,D,yt),D.onAfterRender(y,j,Q,J,Z,yt)}function Ki(D,j,Q){j.isScene!==!0&&(j=Wt);const J=Gt.get(D),Z=v.state.lights,yt=v.state.shadowsArray,Pt=Z.state.version,Bt=St.getParameters(D,Z.state,yt,j,Q),Nt=St.getProgramCacheKey(Bt);let Xt=J.programs;J.environment=D.isMeshStandardMaterial?j.environment:null,J.fog=j.fog,J.envMap=(D.isMeshStandardMaterial?K:R).get(D.envMap||J.environment),Xt===void 0&&(D.addEventListener("dispose",at),Xt=new Map,J.programs=Xt);let jt=Xt.get(Nt);if(jt!==void 0){if(J.currentProgram===jt&&J.lightsStateVersion===Pt)return Ks(D,Bt),jt}else Bt.uniforms=St.getUniforms(D),D.onBuild(Q,Bt,y),D.onBeforeCompile(Bt,y),jt=St.acquireProgram(Bt,Nt),Xt.set(Nt,jt),J.uniforms=Bt.uniforms;const Kt=J.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(Kt.clippingPlanes=Vt.uniform),Ks(D,Bt),J.needsLights=fa(D),J.lightsStateVersion=Pt,J.needsLights&&(Kt.ambientLightColor.value=Z.state.ambient,Kt.lightProbe.value=Z.state.probe,Kt.directionalLights.value=Z.state.directional,Kt.directionalLightShadows.value=Z.state.directionalShadow,Kt.spotLights.value=Z.state.spot,Kt.spotLightShadows.value=Z.state.spotShadow,Kt.rectAreaLights.value=Z.state.rectArea,Kt.ltc_1.value=Z.state.rectAreaLTC1,Kt.ltc_2.value=Z.state.rectAreaLTC2,Kt.pointLights.value=Z.state.point,Kt.pointLightShadows.value=Z.state.pointShadow,Kt.hemisphereLights.value=Z.state.hemi,Kt.directionalShadowMap.value=Z.state.directionalShadowMap,Kt.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Kt.spotShadowMap.value=Z.state.spotShadowMap,Kt.spotLightMatrix.value=Z.state.spotLightMatrix,Kt.spotLightMap.value=Z.state.spotLightMap,Kt.pointShadowMap.value=Z.state.pointShadowMap,Kt.pointShadowMatrix.value=Z.state.pointShadowMatrix),J.currentProgram=jt,J.uniformsList=null,jt}function ri(D){if(D.uniformsList===null){const j=D.currentProgram.getUniforms();D.uniformsList=zo.seqWithValue(j.seq,D.uniforms)}return D.uniformsList}function Ks(D,j){const Q=Gt.get(D);Q.outputColorSpace=j.outputColorSpace,Q.batching=j.batching,Q.instancing=j.instancing,Q.instancingColor=j.instancingColor,Q.skinning=j.skinning,Q.morphTargets=j.morphTargets,Q.morphNormals=j.morphNormals,Q.morphColors=j.morphColors,Q.morphTargetsCount=j.morphTargetsCount,Q.numClippingPlanes=j.numClippingPlanes,Q.numIntersection=j.numClipIntersection,Q.vertexAlphas=j.vertexAlphas,Q.vertexTangents=j.vertexTangents,Q.toneMapping=j.toneMapping}function pa(D,j,Q,J,Z){j.isScene!==!0&&(j=Wt),U.resetTextureUnits();const yt=j.fog,Pt=J.isMeshStandardMaterial?j.environment:null,Bt=A===null?y.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:ni,Nt=(J.isMeshStandardMaterial?K:R).get(J.envMap||Pt),Xt=J.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,jt=!!Q.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Kt=!!Q.morphAttributes.position,be=!!Q.morphAttributes.normal,qe=!!Q.morphAttributes.color;let Pe=Ei;J.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Pe=y.toneMapping);const yn=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,me=yn!==void 0?yn.length:0,$t=Gt.get(J),Zs=v.state.lights;if($===!0&&(ct===!0||D!==z)){const Ie=D===z&&J.id===O;Vt.setState(J,D,Ie)}let ge=!1;J.version===$t.__version?($t.needsLights&&$t.lightsStateVersion!==Zs.state.version||$t.outputColorSpace!==Bt||Z.isBatchedMesh&&$t.batching===!1||!Z.isBatchedMesh&&$t.batching===!0||Z.isInstancedMesh&&$t.instancing===!1||!Z.isInstancedMesh&&$t.instancing===!0||Z.isSkinnedMesh&&$t.skinning===!1||!Z.isSkinnedMesh&&$t.skinning===!0||Z.isInstancedMesh&&$t.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&$t.instancingColor===!1&&Z.instanceColor!==null||$t.envMap!==Nt||J.fog===!0&&$t.fog!==yt||$t.numClippingPlanes!==void 0&&($t.numClippingPlanes!==Vt.numPlanes||$t.numIntersection!==Vt.numIntersection)||$t.vertexAlphas!==Xt||$t.vertexTangents!==jt||$t.morphTargets!==Kt||$t.morphNormals!==be||$t.morphColors!==qe||$t.toneMapping!==Pe||zt.isWebGL2===!0&&$t.morphTargetsCount!==me)&&(ge=!0):(ge=!0,$t.__version=J.version);let Un=$t.currentProgram;ge===!0&&(Un=Ki(J,j,Z));let zr=!1,Ai=!1,Qs=!1;const Ae=Un.getUniforms(),Be=$t.uniforms;if(Tt.useProgram(Un.program)&&(zr=!0,Ai=!0,Qs=!0),J.id!==O&&(O=J.id,Ai=!0),zr||z!==D){Ae.setValue(Y,"projectionMatrix",D.projectionMatrix),Ae.setValue(Y,"viewMatrix",D.matrixWorldInverse);const Ie=Ae.map.cameraPosition;Ie!==void 0&&Ie.setValue(Y,Et.setFromMatrixPosition(D.matrixWorld)),zt.logarithmicDepthBuffer&&Ae.setValue(Y,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Ae.setValue(Y,"isOrthographic",D.isOrthographicCamera===!0),z!==D&&(z=D,Ai=!0,Qs=!0)}if(Z.isSkinnedMesh){Ae.setOptional(Y,Z,"bindMatrix"),Ae.setOptional(Y,Z,"bindMatrixInverse");const Ie=Z.skeleton;Ie&&(zt.floatVertexTextures?(Ie.boneTexture===null&&Ie.computeBoneTexture(),Ae.setValue(Y,"boneTexture",Ie.boneTexture,U)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}Z.isBatchedMesh&&(Ae.setOptional(Y,Z,"batchingTexture"),Ae.setValue(Y,"batchingTexture",Z._matricesTexture,U));const Hn=Q.morphAttributes;if((Hn.position!==void 0||Hn.normal!==void 0||Hn.color!==void 0&&zt.isWebGL2===!0)&&Zt.update(Z,Q,Un),(Ai||$t.receiveShadow!==Z.receiveShadow)&&($t.receiveShadow=Z.receiveShadow,Ae.setValue(Y,"receiveShadow",Z.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(Be.envMap.value=Nt,Be.flipEnvMap.value=Nt.isCubeTexture&&Nt.isRenderTargetTexture===!1?-1:1),Ai&&(Ae.setValue(Y,"toneMappingExposure",y.toneMappingExposure),$t.needsLights&&$s(Be,Qs),yt&&J.fog===!0&&gt.refreshFogUniforms(Be,yt),gt.refreshMaterialUniforms(Be,J,X,H,Mt),zo.upload(Y,ri($t),Be,U)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(zo.upload(Y,ri($t),Be,U),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Ae.setValue(Y,"center",Z.center),Ae.setValue(Y,"modelViewMatrix",Z.modelViewMatrix),Ae.setValue(Y,"normalMatrix",Z.normalMatrix),Ae.setValue(Y,"modelMatrix",Z.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const Ie=J.uniformsGroups;for(let oi=0,Js=Ie.length;oi<Js;oi++)if(zt.isWebGL2){const Hr=Ie[oi];B.update(Hr,Un),B.bind(Hr,Un)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Un}function $s(D,j){D.ambientLightColor.needsUpdate=j,D.lightProbe.needsUpdate=j,D.directionalLights.needsUpdate=j,D.directionalLightShadows.needsUpdate=j,D.pointLights.needsUpdate=j,D.pointLightShadows.needsUpdate=j,D.spotLights.needsUpdate=j,D.spotLightShadows.needsUpdate=j,D.rectAreaLights.needsUpdate=j,D.hemisphereLights.needsUpdate=j}function fa(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(D,j,Q){Gt.get(D.texture).__webglTexture=j,Gt.get(D.depthTexture).__webglTexture=Q;const J=Gt.get(D);J.__hasExternalTextures=!0,J.__hasExternalTextures&&(J.__autoAllocateDepthBuffer=Q===void 0,J.__autoAllocateDepthBuffer||Lt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(D,j){const Q=Gt.get(D);Q.__webglFramebuffer=j,Q.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(D,j=0,Q=0){A=D,P=j,C=Q;let J=!0,Z=null,yt=!1,Pt=!1;if(D){const Nt=Gt.get(D);Nt.__useDefaultFramebuffer!==void 0?(Tt.bindFramebuffer(Y.FRAMEBUFFER,null),J=!1):Nt.__webglFramebuffer===void 0?U.setupRenderTarget(D):Nt.__hasExternalTextures&&U.rebindTextures(D,Gt.get(D.texture).__webglTexture,Gt.get(D.depthTexture).__webglTexture);const Xt=D.texture;(Xt.isData3DTexture||Xt.isDataArrayTexture||Xt.isCompressedArrayTexture)&&(Pt=!0);const jt=Gt.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(jt[j])?Z=jt[j][Q]:Z=jt[j],yt=!0):zt.isWebGL2&&D.samples>0&&U.useMultisampledRTT(D)===!1?Z=Gt.get(D).__webglMultisampledFramebuffer:Array.isArray(jt)?Z=jt[Q]:Z=jt,M.copy(D.viewport),L.copy(D.scissor),V=D.scissorTest}else M.copy(nt).multiplyScalar(X).floor(),L.copy(st).multiplyScalar(X).floor(),V=pt;if(Tt.bindFramebuffer(Y.FRAMEBUFFER,Z)&&zt.drawBuffers&&J&&Tt.drawBuffers(D,Z),Tt.viewport(M),Tt.scissor(L),Tt.setScissorTest(V),yt){const Nt=Gt.get(D.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_CUBE_MAP_POSITIVE_X+j,Nt.__webglTexture,Q)}else if(Pt){const Nt=Gt.get(D.texture),Xt=j||0;Y.framebufferTextureLayer(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Nt.__webglTexture,Q||0,Xt)}O=-1},this.readRenderTargetPixels=function(D,j,Q,J,Z,yt,Pt){if(!(D&&D.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Bt=Gt.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Pt!==void 0&&(Bt=Bt[Pt]),Bt){Tt.bindFramebuffer(Y.FRAMEBUFFER,Bt);try{const Nt=D.texture,Xt=Nt.format,jt=Nt.type;if(Xt!==Ze&&xt.convert(Xt)!==Y.getParameter(Y.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Kt=jt===Dr&&(Lt.has("EXT_color_buffer_half_float")||zt.isWebGL2&&Lt.has("EXT_color_buffer_float"));if(jt!==kn&&xt.convert(jt)!==Y.getParameter(Y.IMPLEMENTATION_COLOR_READ_TYPE)&&!(jt===Ne&&(zt.isWebGL2||Lt.has("OES_texture_float")||Lt.has("WEBGL_color_buffer_float")))&&!Kt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=D.width-J&&Q>=0&&Q<=D.height-Z&&Y.readPixels(j,Q,J,Z,xt.convert(Xt),xt.convert(jt),yt)}finally{const Nt=A!==null?Gt.get(A).__webglFramebuffer:null;Tt.bindFramebuffer(Y.FRAMEBUFFER,Nt)}}},this.copyFramebufferToTexture=function(D,j,Q=0){const J=Math.pow(2,-Q),Z=Math.floor(j.image.width*J),yt=Math.floor(j.image.height*J);U.setTexture2D(j,0),Y.copyTexSubImage2D(Y.TEXTURE_2D,Q,0,0,D.x,D.y,Z,yt),Tt.unbindTexture()},this.copyTextureToTexture=function(D,j,Q,J=0){const Z=j.image.width,yt=j.image.height,Pt=xt.convert(Q.format),Bt=xt.convert(Q.type);U.setTexture2D(Q,0),Y.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,Q.flipY),Y.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),Y.pixelStorei(Y.UNPACK_ALIGNMENT,Q.unpackAlignment),j.isDataTexture?Y.texSubImage2D(Y.TEXTURE_2D,J,D.x,D.y,Z,yt,Pt,Bt,j.image.data):j.isCompressedTexture?Y.compressedTexSubImage2D(Y.TEXTURE_2D,J,D.x,D.y,j.mipmaps[0].width,j.mipmaps[0].height,Pt,j.mipmaps[0].data):Y.texSubImage2D(Y.TEXTURE_2D,J,D.x,D.y,Pt,Bt,j.image),J===0&&Q.generateMipmaps&&Y.generateMipmap(Y.TEXTURE_2D),Tt.unbindTexture()},this.copyTextureToTexture3D=function(D,j,Q,J,Z=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const yt=D.max.x-D.min.x+1,Pt=D.max.y-D.min.y+1,Bt=D.max.z-D.min.z+1,Nt=xt.convert(J.format),Xt=xt.convert(J.type);let jt;if(J.isData3DTexture)U.setTexture3D(J,0),jt=Y.TEXTURE_3D;else if(J.isDataArrayTexture||J.isCompressedArrayTexture)U.setTexture2DArray(J,0),jt=Y.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}Y.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,J.flipY),Y.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),Y.pixelStorei(Y.UNPACK_ALIGNMENT,J.unpackAlignment);const Kt=Y.getParameter(Y.UNPACK_ROW_LENGTH),be=Y.getParameter(Y.UNPACK_IMAGE_HEIGHT),qe=Y.getParameter(Y.UNPACK_SKIP_PIXELS),Pe=Y.getParameter(Y.UNPACK_SKIP_ROWS),yn=Y.getParameter(Y.UNPACK_SKIP_IMAGES),me=Q.isCompressedTexture?Q.mipmaps[Z]:Q.image;Y.pixelStorei(Y.UNPACK_ROW_LENGTH,me.width),Y.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,me.height),Y.pixelStorei(Y.UNPACK_SKIP_PIXELS,D.min.x),Y.pixelStorei(Y.UNPACK_SKIP_ROWS,D.min.y),Y.pixelStorei(Y.UNPACK_SKIP_IMAGES,D.min.z),Q.isDataTexture||Q.isData3DTexture?Y.texSubImage3D(jt,Z,j.x,j.y,j.z,yt,Pt,Bt,Nt,Xt,me.data):Q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),Y.compressedTexSubImage3D(jt,Z,j.x,j.y,j.z,yt,Pt,Bt,Nt,me.data)):Y.texSubImage3D(jt,Z,j.x,j.y,j.z,yt,Pt,Bt,Nt,Xt,me),Y.pixelStorei(Y.UNPACK_ROW_LENGTH,Kt),Y.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,be),Y.pixelStorei(Y.UNPACK_SKIP_PIXELS,qe),Y.pixelStorei(Y.UNPACK_SKIP_ROWS,Pe),Y.pixelStorei(Y.UNPACK_SKIP_IMAGES,yn),Z===0&&J.generateMipmaps&&Y.generateMipmap(jt),Tt.unbindTexture()},this.initTexture=function(D){D.isCubeTexture?U.setTextureCube(D,0):D.isData3DTexture?U.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?U.setTexture2DArray(D,0):U.setTexture2D(D,0),Tt.unbindTexture()},this.resetState=function(){P=0,C=0,A=null,Tt.reset(),Yt.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===lc?"display-p3":"srgb",e.unpackColorSpace=he.workingColorSpace===ra?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ze?ji:zd}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===ji?ze:ni}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class Vy extends ap{}Vy.prototype.isWebGL1Renderer=!0;class zy extends Re{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class ta extends an{constructor(t=null,e=1,n=1,r,o,l,u,h,d=de,p=de,m,g){super(null,l,u,h,d,p,r,o,m,g),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class lp extends qs{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new re(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Wh=new I,Xh=new I,qh=new ce,ml=new oa,bo=new Nr;class xi extends Re{constructor(t=new Je,e=new lp){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let r=1,o=e.count;r<o;r++)Wh.fromBufferAttribute(e,r-1),Xh.fromBufferAttribute(e,r),n[r]=n[r-1],n[r]+=Wh.distanceTo(Xh);t.setAttribute("lineDistance",new ve(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,o=t.params.Line.threshold,l=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),bo.copy(n.boundingSphere),bo.applyMatrix4(r),bo.radius+=o,t.ray.intersectsSphere(bo)===!1)return;qh.copy(r).invert(),ml.copy(t.ray).applyMatrix4(qh);const u=o/((this.scale.x+this.scale.y+this.scale.z)/3),h=u*u,d=new I,p=new I,m=new I,g=new I,x=this.isLineSegments?2:1,b=n.index,v=n.attributes.position;if(b!==null){const _=Math.max(0,l.start),S=Math.min(b.count,l.start+l.count);for(let y=_,T=S-1;y<T;y+=x){const P=b.getX(y),C=b.getX(y+1);if(d.fromBufferAttribute(v,P),p.fromBufferAttribute(v,C),ml.distanceSqToSegment(d,p,g,m)>h)continue;g.applyMatrix4(this.matrixWorld);const O=t.ray.origin.distanceTo(g);O<t.near||O>t.far||e.push({distance:O,point:m.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else{const _=Math.max(0,l.start),S=Math.min(v.count,l.start+l.count);for(let y=_,T=S-1;y<T;y+=x){if(d.fromBufferAttribute(v,y),p.fromBufferAttribute(v,y+1),ml.distanceSqToSegment(d,p,g,m)>h)continue;g.applyMatrix4(this.matrixWorld);const C=t.ray.origin.distanceTo(g);C<t.near||C>t.far||e.push({distance:C,point:m.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,l=r.length;o<l;o++){const u=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=o}}}}}class Ke extends Je{constructor(t=1,e=1,n=1,r=32,o=1,l=!1,u=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:r,heightSegments:o,openEnded:l,thetaStart:u,thetaLength:h};const d=this;r=Math.floor(r),o=Math.floor(o);const p=[],m=[],g=[],x=[];let b=0;const w=[],v=n/2;let _=0;S(),l===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(p),this.setAttribute("position",new ve(m,3)),this.setAttribute("normal",new ve(g,3)),this.setAttribute("uv",new ve(x,2));function S(){const T=new I,P=new I;let C=0;const A=(e-t)/n;for(let O=0;O<=o;O++){const z=[],M=O/o,L=M*(e-t)+t;for(let V=0;V<=r;V++){const q=V/r,F=q*h+u,G=Math.sin(F),H=Math.cos(F);P.x=L*G,P.y=-M*n+v,P.z=L*H,m.push(P.x,P.y,P.z),T.set(G,A,H).normalize(),g.push(T.x,T.y,T.z),x.push(q,1-M),z.push(b++)}w.push(z)}for(let O=0;O<r;O++)for(let z=0;z<o;z++){const M=w[z][O],L=w[z+1][O],V=w[z+1][O+1],q=w[z][O+1];p.push(M,L,q),p.push(L,V,q),C+=6}d.addGroup(_,C,0),_+=C}function y(T){const P=b,C=new Rt,A=new I;let O=0;const z=T===!0?t:e,M=T===!0?1:-1;for(let V=1;V<=r;V++)m.push(0,v*M,0),g.push(0,M,0),x.push(.5,.5),b++;const L=b;for(let V=0;V<=r;V++){const F=V/r*h+u,G=Math.cos(F),H=Math.sin(F);A.x=z*H,A.y=v*M,A.z=z*G,m.push(A.x,A.y,A.z),g.push(0,M,0),C.x=G*.5+.5,C.y=H*.5*M+.5,x.push(C.x,C.y),b++}for(let V=0;V<r;V++){const q=P+V,F=L+V;T===!0?p.push(F,F+1,q):p.push(F+1,F,q),O+=3}d.addGroup(_,O,T===!0?1:2),_+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ke(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class pc extends Je{constructor(t=[],e=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:r};const o=[],l=[];u(r),d(n),p(),this.setAttribute("position",new ve(o,3)),this.setAttribute("normal",new ve(o.slice(),3)),this.setAttribute("uv",new ve(l,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function u(S){const y=new I,T=new I,P=new I;for(let C=0;C<e.length;C+=3)x(e[C+0],y),x(e[C+1],T),x(e[C+2],P),h(y,T,P,S)}function h(S,y,T,P){const C=P+1,A=[];for(let O=0;O<=C;O++){A[O]=[];const z=S.clone().lerp(T,O/C),M=y.clone().lerp(T,O/C),L=C-O;for(let V=0;V<=L;V++)V===0&&O===C?A[O][V]=z:A[O][V]=z.clone().lerp(M,V/L)}for(let O=0;O<C;O++)for(let z=0;z<2*(C-O)-1;z++){const M=Math.floor(z/2);z%2===0?(g(A[O][M+1]),g(A[O+1][M]),g(A[O][M])):(g(A[O][M+1]),g(A[O+1][M+1]),g(A[O+1][M]))}}function d(S){const y=new I;for(let T=0;T<o.length;T+=3)y.x=o[T+0],y.y=o[T+1],y.z=o[T+2],y.normalize().multiplyScalar(S),o[T+0]=y.x,o[T+1]=y.y,o[T+2]=y.z}function p(){const S=new I;for(let y=0;y<o.length;y+=3){S.x=o[y+0],S.y=o[y+1],S.z=o[y+2];const T=v(S)/2/Math.PI+.5,P=_(S)/Math.PI+.5;l.push(T,1-P)}b(),m()}function m(){for(let S=0;S<l.length;S+=6){const y=l[S+0],T=l[S+2],P=l[S+4],C=Math.max(y,T,P),A=Math.min(y,T,P);C>.9&&A<.1&&(y<.2&&(l[S+0]+=1),T<.2&&(l[S+2]+=1),P<.2&&(l[S+4]+=1))}}function g(S){o.push(S.x,S.y,S.z)}function x(S,y){const T=S*3;y.x=t[T+0],y.y=t[T+1],y.z=t[T+2]}function b(){const S=new I,y=new I,T=new I,P=new I,C=new Rt,A=new Rt,O=new Rt;for(let z=0,M=0;z<o.length;z+=9,M+=6){S.set(o[z+0],o[z+1],o[z+2]),y.set(o[z+3],o[z+4],o[z+5]),T.set(o[z+6],o[z+7],o[z+8]),C.set(l[M+0],l[M+1]),A.set(l[M+2],l[M+3]),O.set(l[M+4],l[M+5]),P.copy(S).add(y).add(T).divideScalar(3);const L=v(P);w(C,M+0,S,L),w(A,M+2,y,L),w(O,M+4,T,L)}}function w(S,y,T,P){P<0&&S.x===1&&(l[y]=S.x-1),T.x===0&&T.z===0&&(l[y]=P/2/Math.PI+.5)}function v(S){return Math.atan2(S.z,-S.x)}function _(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pc(t.vertices,t.indices,t.radius,t.details)}}class Fs extends pc{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,r,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Fs(t.radius,t.detail)}}class la extends Je{constructor(t=1,e=32,n=16,r=0,o=Math.PI*2,l=0,u=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:r,phiLength:o,thetaStart:l,thetaLength:u},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const h=Math.min(l+u,Math.PI);let d=0;const p=[],m=new I,g=new I,x=[],b=[],w=[],v=[];for(let _=0;_<=n;_++){const S=[],y=_/n;let T=0;_===0&&l===0?T=.5/e:_===n&&h===Math.PI&&(T=-.5/e);for(let P=0;P<=e;P++){const C=P/e;m.x=-t*Math.cos(r+C*o)*Math.sin(l+y*u),m.y=t*Math.cos(l+y*u),m.z=t*Math.sin(r+C*o)*Math.sin(l+y*u),b.push(m.x,m.y,m.z),g.copy(m).normalize(),w.push(g.x,g.y,g.z),v.push(C+T,1-y),S.push(d++)}p.push(S)}for(let _=0;_<n;_++)for(let S=0;S<e;S++){const y=p[_][S+1],T=p[_][S],P=p[_+1][S],C=p[_+1][S+1];(_!==0||l>0)&&x.push(y,T,C),(_!==n-1||h<Math.PI)&&x.push(T,P,C)}this.setIndex(x),this.setAttribute("position",new ve(b,3)),this.setAttribute("normal",new ve(w,3)),this.setAttribute("uv",new ve(v,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new la(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Hi extends Je{constructor(t=1,e=.4,n=12,r=48,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:r,arc:o},n=Math.floor(n),r=Math.floor(r);const l=[],u=[],h=[],d=[],p=new I,m=new I,g=new I;for(let x=0;x<=n;x++)for(let b=0;b<=r;b++){const w=b/r*o,v=x/n*Math.PI*2;m.x=(t+e*Math.cos(v))*Math.cos(w),m.y=(t+e*Math.cos(v))*Math.sin(w),m.z=e*Math.sin(v),u.push(m.x,m.y,m.z),p.x=t*Math.cos(w),p.y=t*Math.sin(w),g.subVectors(m,p).normalize(),h.push(g.x,g.y,g.z),d.push(b/r),d.push(x/n)}for(let x=1;x<=n;x++)for(let b=1;b<=r;b++){const w=(r+1)*x+b-1,v=(r+1)*(x-1)+b-1,_=(r+1)*(x-1)+b,S=(r+1)*x+b;l.push(w,v,S),l.push(v,_,S)}this.setIndex(l),this.setAttribute("position",new ve(u,3)),this.setAttribute("normal",new ve(h,3)),this.setAttribute("uv",new ve(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Hi(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class fc extends Je{constructor(t=1,e=.4,n=64,r=8,o=2,l=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:t,tube:e,tubularSegments:n,radialSegments:r,p:o,q:l},n=Math.floor(n),r=Math.floor(r);const u=[],h=[],d=[],p=[],m=new I,g=new I,x=new I,b=new I,w=new I,v=new I,_=new I;for(let y=0;y<=n;++y){const T=y/n*o*Math.PI*2;S(T,o,l,t,x),S(T+.01,o,l,t,b),v.subVectors(b,x),_.addVectors(b,x),w.crossVectors(v,_),_.crossVectors(w,v),w.normalize(),_.normalize();for(let P=0;P<=r;++P){const C=P/r*Math.PI*2,A=-e*Math.cos(C),O=e*Math.sin(C);m.x=x.x+(A*_.x+O*w.x),m.y=x.y+(A*_.y+O*w.y),m.z=x.z+(A*_.z+O*w.z),h.push(m.x,m.y,m.z),g.subVectors(m,x).normalize(),d.push(g.x,g.y,g.z),p.push(y/n),p.push(P/r)}}for(let y=1;y<=n;y++)for(let T=1;T<=r;T++){const P=(r+1)*(y-1)+(T-1),C=(r+1)*y+(T-1),A=(r+1)*y+T,O=(r+1)*(y-1)+T;u.push(P,C,O),u.push(C,A,O)}this.setIndex(u),this.setAttribute("position",new ve(h,3)),this.setAttribute("normal",new ve(d,3)),this.setAttribute("uv",new ve(p,2));function S(y,T,P,C,A){const O=Math.cos(y),z=Math.sin(y),M=P/T*y,L=Math.cos(M);A.x=C*(2+L)*.5*O,A.y=C*(2+L)*z*.5,A.z=C*Math.sin(M)*.5}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fc(t.radius,t.tube,t.tubularSegments,t.radialSegments,t.p,t.q)}}class Hy extends qs{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hd,this.normalScale=new Rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Gy extends Re{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new re(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const gl=new ce,jh=new I,Yh=new I;class Wy{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Rt(512,512),this.map=null,this.mapPass=null,this.matrix=new ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new hc,this._frameExtents=new Rt(1,1),this._viewportCount=1,this._viewports=[new Me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;jh.setFromMatrixPosition(t.matrixWorld),e.position.copy(jh),Yh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Yh),e.updateMatrixWorld(),gl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(gl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(gl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Kh=new ce,gr=new I,_l=new I;class Xy extends Wy{constructor(){super(new gn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Rt(4,2),this._viewportCount=6,this._viewports=[new Me(2,1,1,1),new Me(0,1,1,1),new Me(3,1,1,1),new Me(1,1,1,1),new Me(3,0,1,1),new Me(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,r=this.matrix,o=t.distance||n.far;o!==n.far&&(n.far=o,n.updateProjectionMatrix()),gr.setFromMatrixPosition(t.matrixWorld),n.position.copy(gr),_l.copy(n.position),_l.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(_l),n.updateMatrixWorld(),r.makeTranslation(-gr.x,-gr.y,-gr.z),Kh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Kh)}}class qy extends Gy{constructor(t,e,n=0,r=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new Xy}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class ca{constructor(t){this.value=t}clone(){return new ca(this.value.clone===void 0?this.value:this.value.clone())}}class jy{constructor(t,e,n=0,r=1/0){this.ray=new oa(t,e),this.near=n,this.far=r,this.camera=null,this.layers=new uc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,n=[]){return Gl(t,this,n,e),n.sort($h),n}intersectObjects(t,e=!0,n=[]){for(let r=0,o=t.length;r<o;r++)Gl(t[r],this,n,e);return n.sort($h),n}}function $h(i,t){return i.distance-t.distance}function Gl(i,t,e,n){if(i.layers.test(t.layers)&&i.raycast(t,e),n===!0){const r=i.children;for(let o=0,l=r.length;o<l;o++)Gl(r[o],t,e,!0)}}class Zh{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Xe(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Qh=new I,yo=new I;class ei{constructor(t=new I,e=new I){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){Qh.subVectors(t,this.start),yo.subVectors(this.end,this.start);const n=yo.dot(yo);let o=yo.dot(Qh)/n;return e&&(o=Xe(o,0,1)),o}closestPointToPoint(t,e,n){const r=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(r).add(this.start)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:rc}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=rc);const cp=0,Yy=1,Ky=2,Jh=2,vl=1.25,td=1,Si=6*4+4+4,ua=65535,$y=Math.pow(2,-24),xl=Symbol("SKIP_GENERATION");function up(i){return i.index?i.index.count:i.attributes.position.count}function Ys(i){return up(i)/3}function hp(i,t=ArrayBuffer){return i>65535?new Uint32Array(new t(4*i)):new Uint16Array(new t(2*i))}function Zy(i,t){if(!i.index){const e=i.attributes.position.count,n=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,r=hp(e,n);i.setIndex(new Qe(r,1));for(let o=0;o<e;o++)r[o]=o}}function dp(i){const t=Ys(i),e=i.drawRange,n=e.start/3,r=(e.start+e.count)/3,o=Math.max(0,n),l=Math.min(t,r)-o;return[{offset:Math.floor(o),count:Math.floor(l)}]}function pp(i){if(!i.groups||!i.groups.length)return dp(i);const t=[],e=new Set,n=i.drawRange,r=n.start/3,o=(n.start+n.count)/3;for(const u of i.groups){const h=u.start/3,d=(u.start+u.count)/3;e.add(Math.max(r,h)),e.add(Math.min(o,d))}const l=Array.from(e.values()).sort((u,h)=>u-h);for(let u=0;u<l.length-1;u++){const h=l[u],d=l[u+1];t.push({offset:Math.floor(h),count:Math.floor(d-h)})}return t}function Qy(i){if(i.groups.length===0)return!1;const t=Ys(i),e=pp(i).sort((o,l)=>o.offset-l.offset),n=e[e.length-1];n.count=Math.min(t-n.offset,n.count);let r=0;return e.forEach(({count:o})=>r+=o),t!==r}function bl(i,t,e,n,r){let o=1/0,l=1/0,u=1/0,h=-1/0,d=-1/0,p=-1/0,m=1/0,g=1/0,x=1/0,b=-1/0,w=-1/0,v=-1/0;for(let _=t*6,S=(t+e)*6;_<S;_+=6){const y=i[_+0],T=i[_+1],P=y-T,C=y+T;P<o&&(o=P),C>h&&(h=C),y<m&&(m=y),y>b&&(b=y);const A=i[_+2],O=i[_+3],z=A-O,M=A+O;z<l&&(l=z),M>d&&(d=M),A<g&&(g=A),A>w&&(w=A);const L=i[_+4],V=i[_+5],q=L-V,F=L+V;q<u&&(u=q),F>p&&(p=F),L<x&&(x=L),L>v&&(v=L)}n[0]=o,n[1]=l,n[2]=u,n[3]=h,n[4]=d,n[5]=p,r[0]=m,r[1]=g,r[2]=x,r[3]=b,r[4]=w,r[5]=v}function Jy(i,t=null,e=null,n=null){const r=i.attributes.position,o=i.index?i.index.array:null,l=Ys(i),u=r.normalized;let h;t===null?(h=new Float32Array(l*6*4),e=0,n=l):(h=t,e=e||0,n=n||l);const d=r.array,p=r.offset||0;let m=3;r.isInterleavedBufferAttribute&&(m=r.data.stride);const g=["getX","getY","getZ"];for(let x=e;x<e+n;x++){const b=x*3,w=x*6;let v=b+0,_=b+1,S=b+2;o&&(v=o[v],_=o[_],S=o[S]),u||(v=v*m+p,_=_*m+p,S=S*m+p);for(let y=0;y<3;y++){let T,P,C;u?(T=r[g[y]](v),P=r[g[y]](_),C=r[g[y]](S)):(T=d[v+y],P=d[_+y],C=d[S+y]);let A=T;P<A&&(A=P),C<A&&(A=C);let O=T;P>O&&(O=P),C>O&&(O=C);const z=(O-A)/2,M=y*2;h[w+M+0]=A+z,h[w+M+1]=z+(Math.abs(A)+z)*$y}}return h}function Te(i,t,e){return e.min.x=t[i],e.min.y=t[i+1],e.min.z=t[i+2],e.max.x=t[i+3],e.max.y=t[i+4],e.max.z=t[i+5],e}function ed(i){let t=-1,e=-1/0;for(let n=0;n<3;n++){const r=i[n+3]-i[n];r>e&&(e=r,t=n)}return t}function nd(i,t){t.set(i)}function id(i,t,e){let n,r;for(let o=0;o<3;o++){const l=o+3;n=i[o],r=t[o],e[o]=n<r?n:r,n=i[l],r=t[l],e[l]=n>r?n:r}}function wo(i,t,e){for(let n=0;n<3;n++){const r=t[i+2*n],o=t[i+2*n+1],l=r-o,u=r+o;l<e[n]&&(e[n]=l),u>e[n+3]&&(e[n+3]=u)}}function _r(i){const t=i[3]-i[0],e=i[4]-i[1],n=i[5]-i[2];return 2*(t*e+e*n+n*t)}const Jn=32,tw=(i,t)=>i.candidate-t.candidate,bi=new Array(Jn).fill().map(()=>({count:0,bounds:new Float32Array(6),rightCacheBounds:new Float32Array(6),leftCacheBounds:new Float32Array(6),candidate:0})),Mo=new Float32Array(6);function ew(i,t,e,n,r,o){let l=-1,u=0;if(o===cp)l=ed(t),l!==-1&&(u=(t[l]+t[l+3])/2);else if(o===Yy)l=ed(i),l!==-1&&(u=nw(e,n,r,l));else if(o===Ky){const h=_r(i);let d=vl*r;const p=n*6,m=(n+r)*6;for(let g=0;g<3;g++){const x=t[g],v=(t[g+3]-x)/Jn;if(r<Jn/4){const _=[...bi];_.length=r;let S=0;for(let T=p;T<m;T+=6,S++){const P=_[S];P.candidate=e[T+2*g],P.count=0;const{bounds:C,leftCacheBounds:A,rightCacheBounds:O}=P;for(let z=0;z<3;z++)O[z]=1/0,O[z+3]=-1/0,A[z]=1/0,A[z+3]=-1/0,C[z]=1/0,C[z+3]=-1/0;wo(T,e,C)}_.sort(tw);let y=r;for(let T=0;T<y;T++){const P=_[T];for(;T+1<y&&_[T+1].candidate===P.candidate;)_.splice(T+1,1),y--}for(let T=p;T<m;T+=6){const P=e[T+2*g];for(let C=0;C<y;C++){const A=_[C];P>=A.candidate?wo(T,e,A.rightCacheBounds):(wo(T,e,A.leftCacheBounds),A.count++)}}for(let T=0;T<y;T++){const P=_[T],C=P.count,A=r-P.count,O=P.leftCacheBounds,z=P.rightCacheBounds;let M=0;C!==0&&(M=_r(O)/h);let L=0;A!==0&&(L=_r(z)/h);const V=td+vl*(M*C+L*A);V<d&&(l=g,d=V,u=P.candidate)}}else{for(let y=0;y<Jn;y++){const T=bi[y];T.count=0,T.candidate=x+v+y*v;const P=T.bounds;for(let C=0;C<3;C++)P[C]=1/0,P[C+3]=-1/0}for(let y=p;y<m;y+=6){let C=~~((e[y+2*g]-x)/v);C>=Jn&&(C=Jn-1);const A=bi[C];A.count++,wo(y,e,A.bounds)}const _=bi[Jn-1];nd(_.bounds,_.rightCacheBounds);for(let y=Jn-2;y>=0;y--){const T=bi[y],P=bi[y+1];id(T.bounds,P.rightCacheBounds,T.rightCacheBounds)}let S=0;for(let y=0;y<Jn-1;y++){const T=bi[y],P=T.count,C=T.bounds,O=bi[y+1].rightCacheBounds;P!==0&&(S===0?nd(C,Mo):id(C,Mo,Mo)),S+=P;let z=0,M=0;S!==0&&(z=_r(Mo)/h);const L=r-S;L!==0&&(M=_r(O)/h);const V=td+vl*(z*S+M*L);V<d&&(l=g,d=V,u=T.candidate)}}}}else console.warn(`MeshBVH: Invalid build strategy value ${o} used.`);return{axis:l,pos:u}}function nw(i,t,e,n){let r=0;for(let o=t,l=t+e;o<l;o++)r+=i[o*6+n*2];return r/e}class yl{constructor(){this.boundingData=new Float32Array(6)}}function iw(i,t,e,n,r,o){let l=n,u=n+r-1;const h=o.pos,d=o.axis*2;for(;;){for(;l<=u&&e[l*6+d]<h;)l++;for(;l<=u&&e[u*6+d]>=h;)u--;if(l<u){for(let p=0;p<3;p++){let m=t[l*3+p];t[l*3+p]=t[u*3+p],t[u*3+p]=m}for(let p=0;p<6;p++){let m=e[l*6+p];e[l*6+p]=e[u*6+p],e[u*6+p]=m}l++,u--}else return l}}function sw(i,t,e,n,r,o){let l=n,u=n+r-1;const h=o.pos,d=o.axis*2;for(;;){for(;l<=u&&e[l*6+d]<h;)l++;for(;l<=u&&e[u*6+d]>=h;)u--;if(l<u){let p=i[l];i[l]=i[u],i[u]=p;for(let m=0;m<6;m++){let g=e[l*6+m];e[l*6+m]=e[u*6+m],e[u*6+m]=g}l++,u--}else return l}}function rn(i,t){return t[i+15]===65535}function hn(i,t){return t[i+6]}function xn(i,t){return t[i+14]}function Tn(i){return i+8}function bn(i,t){return t[i+6]}function mc(i,t){return t[i+7]}let fp,Sr,Ho,mp;const rw=Math.pow(2,32);function Wl(i){return"count"in i?1:1+Wl(i.left)+Wl(i.right)}function ow(i,t,e){return fp=new Float32Array(e),Sr=new Uint32Array(e),Ho=new Uint16Array(e),mp=new Uint8Array(e),Xl(i,t)}function Xl(i,t){const e=i/4,n=i/2,r="count"in t,o=t.boundingData;for(let l=0;l<6;l++)fp[e+l]=o[l];if(r)if(t.buffer){const l=t.buffer;mp.set(new Uint8Array(l),i);for(let u=i,h=i+l.byteLength;u<h;u+=Si){const d=u/2;rn(d,Ho)||(Sr[u/4+6]+=e)}return i+l.byteLength}else{const l=t.offset,u=t.count;return Sr[e+6]=l,Ho[n+14]=u,Ho[n+15]=ua,i+Si}else{const l=t.left,u=t.right,h=t.splitAxis;let d;if(d=Xl(i+Si,l),d/4>rw)throw new Error("MeshBVH: Cannot store child pointer greater than 32 bits.");return Sr[e+6]=d/4,d=Xl(d,u),Sr[e+7]=h,d}}function aw(i,t){const e=(i.index?i.index.count:i.attributes.position.count)/3,n=e>2**16,r=n?4:2,o=t?new SharedArrayBuffer(e*r):new ArrayBuffer(e*r),l=n?new Uint32Array(o):new Uint16Array(o);for(let u=0,h=l.length;u<h;u++)l[u]=u;return l}function lw(i,t,e,n,r){const{maxDepth:o,verbose:l,maxLeafTris:u,strategy:h,onProgress:d,indirect:p}=r,m=i._indirectBuffer,g=i.geometry,x=g.index?g.index.array:null,b=p?sw:iw,w=Ys(g),v=new Float32Array(6);let _=!1;const S=new yl;return bl(t,e,n,S.boundingData,v),T(S,e,n,v),S;function y(P){d&&d(P/w)}function T(P,C,A,O=null,z=0){if(!_&&z>=o&&(_=!0,l&&(console.warn(`MeshBVH: Max depth of ${o} reached when generating BVH. Consider increasing maxDepth.`),console.warn(g))),A<=u||z>=o)return y(C+A),P.offset=C,P.count=A,P;const M=ew(P.boundingData,O,t,C,A,h);if(M.axis===-1)return y(C+A),P.offset=C,P.count=A,P;const L=b(m,x,t,C,A,M);if(L===C||L===C+A)y(C+A),P.offset=C,P.count=A;else{P.splitAxis=M.axis;const V=new yl,q=C,F=L-C;P.left=V,bl(t,q,F,V.boundingData,v),T(V,q,F,v,z+1);const G=new yl,H=L,X=A-F;P.right=G,bl(t,H,X,G.boundingData,v),T(G,H,X,v,z+1)}return P}}function cw(i,t){const e=i.geometry;t.indirect&&(i._indirectBuffer=aw(e,t.useSharedArrayBuffer),Qy(e)&&!t.verbose&&console.warn('MeshBVH: Provided geometry contains groups that do not fully span the vertex contents while using the "indirect" option. BVH may incorrectly report intersections on unrendered portions of the geometry.')),i._indirectBuffer||Zy(e,t);const n=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,r=Jy(e),o=t.indirect?dp(e):pp(e);i._roots=o.map(l=>{const u=lw(i,r,l.offset,l.count,t),h=Wl(u),d=new n(Si*h);return ow(0,u,d),d})}class zn{constructor(){this.min=1/0,this.max=-1/0}setFromPointsField(t,e){let n=1/0,r=-1/0;for(let o=0,l=t.length;o<l;o++){const h=t[o][e];n=h<n?h:n,r=h>r?h:r}this.min=n,this.max=r}setFromPoints(t,e){let n=1/0,r=-1/0;for(let o=0,l=e.length;o<l;o++){const u=e[o],h=t.dot(u);n=h<n?h:n,r=h>r?h:r}this.min=n,this.max=r}isSeparated(t){return this.min>t.max||t.min>this.max}}zn.prototype.setFromBox=function(){const i=new I;return function(e,n){const r=n.min,o=n.max;let l=1/0,u=-1/0;for(let h=0;h<=1;h++)for(let d=0;d<=1;d++)for(let p=0;p<=1;p++){i.x=r.x*h+o.x*(1-h),i.y=r.y*d+o.y*(1-d),i.z=r.z*p+o.z*(1-p);const m=e.dot(i);l=Math.min(m,l),u=Math.max(m,u)}this.min=l,this.max=u}}();(function(){const i=new zn;return function(e,n){const r=e.points,o=e.satAxes,l=e.satBounds,u=n.points,h=n.satAxes,d=n.satBounds;for(let p=0;p<3;p++){const m=l[p],g=o[p];if(i.setFromPoints(g,u),m.isSeparated(i))return!1}for(let p=0;p<3;p++){const m=d[p],g=h[p];if(i.setFromPoints(g,r),m.isSeparated(i))return!1}}})();const uw=function(){const i=new I,t=new I,e=new I;return function(r,o,l){const u=r.start,h=i,d=o.start,p=t;e.subVectors(u,d),i.subVectors(r.end,r.start),t.subVectors(o.end,o.start);const m=e.dot(p),g=p.dot(h),x=p.dot(p),b=e.dot(h),v=h.dot(h)*x-g*g;let _,S;v!==0?_=(m*g-b*x)/v:_=0,S=(m+_*g)/x,l.x=_,l.y=S}}(),gc=function(){const i=new Rt,t=new I,e=new I;return function(r,o,l,u){uw(r,o,i);let h=i.x,d=i.y;if(h>=0&&h<=1&&d>=0&&d<=1){r.at(h,l),o.at(d,u);return}else if(h>=0&&h<=1){d<0?o.at(0,u):o.at(1,u),r.closestPointToPoint(u,!0,l);return}else if(d>=0&&d<=1){h<0?r.at(0,l):r.at(1,l),o.closestPointToPoint(l,!0,u);return}else{let p;h<0?p=r.start:p=r.end;let m;d<0?m=o.start:m=o.end;const g=t,x=e;if(r.closestPointToPoint(m,!0,t),o.closestPointToPoint(p,!0,e),g.distanceToSquared(m)<=x.distanceToSquared(p)){l.copy(g),u.copy(m);return}else{l.copy(p),u.copy(x);return}}}}(),hw=function(){const i=new I,t=new I,e=new Fn,n=new ei;return function(o,l){const{radius:u,center:h}=o,{a:d,b:p,c:m}=l;if(n.start=d,n.end=p,n.closestPointToPoint(h,!0,i).distanceTo(h)<=u||(n.start=d,n.end=m,n.closestPointToPoint(h,!0,i).distanceTo(h)<=u)||(n.start=p,n.end=m,n.closestPointToPoint(h,!0,i).distanceTo(h)<=u))return!0;const w=l.getPlane(e);if(Math.abs(w.distanceToPoint(h))<=u){const _=w.projectPoint(h,t);if(l.containsPoint(_))return!0}return!1}}(),dw=1e-15;function wl(i){return Math.abs(i)<dw}class In extends sn{constructor(...t){super(...t),this.isExtendedTriangle=!0,this.satAxes=new Array(4).fill().map(()=>new I),this.satBounds=new Array(4).fill().map(()=>new zn),this.points=[this.a,this.b,this.c],this.sphere=new Nr,this.plane=new Fn,this.needsUpdate=!0}intersectsSphere(t){return hw(t,this)}update(){const t=this.a,e=this.b,n=this.c,r=this.points,o=this.satAxes,l=this.satBounds,u=o[0],h=l[0];this.getNormal(u),h.setFromPoints(u,r);const d=o[1],p=l[1];d.subVectors(t,e),p.setFromPoints(d,r);const m=o[2],g=l[2];m.subVectors(e,n),g.setFromPoints(m,r);const x=o[3],b=l[3];x.subVectors(n,t),b.setFromPoints(x,r),this.sphere.setFromPoints(this.points),this.plane.setFromNormalAndCoplanarPoint(u,t),this.needsUpdate=!1}}In.prototype.closestPointToSegment=function(){const i=new I,t=new I,e=new ei;return function(r,o=null,l=null){const{start:u,end:h}=r,d=this.points;let p,m=1/0;for(let g=0;g<3;g++){const x=(g+1)%3;e.start.copy(d[g]),e.end.copy(d[x]),gc(e,r,i,t),p=i.distanceToSquared(t),p<m&&(m=p,o&&o.copy(i),l&&l.copy(t))}return this.closestPointToPoint(u,i),p=u.distanceToSquared(i),p<m&&(m=p,o&&o.copy(i),l&&l.copy(u)),this.closestPointToPoint(h,i),p=h.distanceToSquared(i),p<m&&(m=p,o&&o.copy(i),l&&l.copy(h)),Math.sqrt(m)}}();In.prototype.intersectsTriangle=function(){const i=new In,t=new Array(3),e=new Array(3),n=new zn,r=new zn,o=new I,l=new I,u=new I,h=new I,d=new I,p=new ei,m=new ei,g=new ei,x=new I;function b(w,v,_){const S=w.points;let y=0,T=-1;for(let P=0;P<3;P++){const{start:C,end:A}=p;C.copy(S[P]),A.copy(S[(P+1)%3]),p.delta(l);const O=wl(v.distanceToPoint(C));if(wl(v.normal.dot(l))&&O){_.copy(p),y=2;break}const z=v.intersectLine(p,x);if(!z&&O&&x.copy(C),(z||O)&&!wl(x.distanceTo(A))){if(y<=1)(y===1?_.start:_.end).copy(x),O&&(T=y);else if(y>=2){(T===1?_.start:_.end).copy(x),y=2;break}if(y++,y===2&&T===-1)break}}return y}return function(v,_=null,S=!1){this.needsUpdate&&this.update(),v.isExtendedTriangle?v.needsUpdate&&v.update():(i.copy(v),i.update(),v=i);const y=this.plane,T=v.plane;if(Math.abs(y.normal.dot(T.normal))>1-1e-10){const P=this.satBounds,C=this.satAxes;e[0]=v.a,e[1]=v.b,e[2]=v.c;for(let z=0;z<4;z++){const M=P[z],L=C[z];if(n.setFromPoints(L,e),M.isSeparated(n))return!1}const A=v.satBounds,O=v.satAxes;t[0]=this.a,t[1]=this.b,t[2]=this.c;for(let z=0;z<4;z++){const M=A[z],L=O[z];if(n.setFromPoints(L,t),M.isSeparated(n))return!1}for(let z=0;z<4;z++){const M=C[z];for(let L=0;L<4;L++){const V=O[L];if(o.crossVectors(M,V),n.setFromPoints(o,t),r.setFromPoints(o,e),n.isSeparated(r))return!1}}return _&&(S||console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."),_.start.set(0,0,0),_.end.set(0,0,0)),!0}else{const P=b(this,T,m);if(P===1&&v.containsPoint(m.end))return _&&(_.start.copy(m.end),_.end.copy(m.end)),!0;if(P!==2)return!1;const C=b(v,y,g);if(C===1&&this.containsPoint(g.end))return _&&(_.start.copy(g.end),_.end.copy(g.end)),!0;if(C!==2)return!1;if(m.delta(u),g.delta(h),u.dot(h)<0){let q=g.start;g.start=g.end,g.end=q}const A=m.start.dot(u),O=m.end.dot(u),z=g.start.dot(u),M=g.end.dot(u),L=O<z,V=A<M;return A!==M&&z!==O&&L===V?!1:(_&&(d.subVectors(m.start,g.start),d.dot(u)>0?_.start.copy(m.start):_.start.copy(g.start),d.subVectors(m.end,g.end),d.dot(u)<0?_.end.copy(m.end):_.end.copy(g.end)),!0)}}}();In.prototype.distanceToPoint=function(){const i=new I;return function(e){return this.closestPointToPoint(e,i),e.distanceTo(i)}}();In.prototype.distanceToTriangle=function(){const i=new I,t=new I,e=["a","b","c"],n=new ei,r=new ei;return function(l,u=null,h=null){const d=u||h?n:null;if(this.intersectsTriangle(l,d))return(u||h)&&(u&&d.getCenter(u),h&&d.getCenter(h)),0;let p=1/0;for(let m=0;m<3;m++){let g;const x=e[m],b=l[x];this.closestPointToPoint(b,i),g=b.distanceToSquared(i),g<p&&(p=g,u&&u.copy(i),h&&h.copy(b));const w=this[x];l.closestPointToPoint(w,i),g=w.distanceToSquared(i),g<p&&(p=g,u&&u.copy(w),h&&h.copy(i))}for(let m=0;m<3;m++){const g=e[m],x=e[(m+1)%3];n.set(this[g],this[x]);for(let b=0;b<3;b++){const w=e[b],v=e[(b+1)%3];r.set(l[w],l[v]),gc(n,r,i,t);const _=i.distanceToSquared(t);_<p&&(p=_,u&&u.copy(i),h&&h.copy(t))}}return Math.sqrt(p)}}();class ln{constructor(t,e,n){this.isOrientedBox=!0,this.min=new I,this.max=new I,this.matrix=new ce,this.invMatrix=new ce,this.points=new Array(8).fill().map(()=>new I),this.satAxes=new Array(3).fill().map(()=>new I),this.satBounds=new Array(3).fill().map(()=>new zn),this.alignedSatBounds=new Array(3).fill().map(()=>new zn),this.needsUpdate=!1,t&&this.min.copy(t),e&&this.max.copy(e),n&&this.matrix.copy(n)}set(t,e,n){this.min.copy(t),this.max.copy(e),this.matrix.copy(n),this.needsUpdate=!0}copy(t){this.min.copy(t.min),this.max.copy(t.max),this.matrix.copy(t.matrix),this.needsUpdate=!0}}ln.prototype.update=function(){return function(){const t=this.matrix,e=this.min,n=this.max,r=this.points;for(let d=0;d<=1;d++)for(let p=0;p<=1;p++)for(let m=0;m<=1;m++){const g=1*d|2*p|4*m,x=r[g];x.x=d?n.x:e.x,x.y=p?n.y:e.y,x.z=m?n.z:e.z,x.applyMatrix4(t)}const o=this.satBounds,l=this.satAxes,u=r[0];for(let d=0;d<3;d++){const p=l[d],m=o[d],g=1<<d,x=r[g];p.subVectors(u,x),m.setFromPoints(p,r)}const h=this.alignedSatBounds;h[0].setFromPointsField(r,"x"),h[1].setFromPointsField(r,"y"),h[2].setFromPointsField(r,"z"),this.invMatrix.copy(this.matrix).invert(),this.needsUpdate=!1}}();ln.prototype.intersectsBox=function(){const i=new zn;return function(e){this.needsUpdate&&this.update();const n=e.min,r=e.max,o=this.satBounds,l=this.satAxes,u=this.alignedSatBounds;if(i.min=n.x,i.max=r.x,u[0].isSeparated(i)||(i.min=n.y,i.max=r.y,u[1].isSeparated(i))||(i.min=n.z,i.max=r.z,u[2].isSeparated(i)))return!1;for(let h=0;h<3;h++){const d=l[h],p=o[h];if(i.setFromBox(d,e),p.isSeparated(i))return!1}return!0}}();ln.prototype.intersectsTriangle=function(){const i=new In,t=new Array(3),e=new zn,n=new zn,r=new I;return function(l){this.needsUpdate&&this.update(),l.isExtendedTriangle?l.needsUpdate&&l.update():(i.copy(l),i.update(),l=i);const u=this.satBounds,h=this.satAxes;t[0]=l.a,t[1]=l.b,t[2]=l.c;for(let g=0;g<3;g++){const x=u[g],b=h[g];if(e.setFromPoints(b,t),x.isSeparated(e))return!1}const d=l.satBounds,p=l.satAxes,m=this.points;for(let g=0;g<3;g++){const x=d[g],b=p[g];if(e.setFromPoints(b,m),x.isSeparated(e))return!1}for(let g=0;g<3;g++){const x=h[g];for(let b=0;b<4;b++){const w=p[b];if(r.crossVectors(x,w),e.setFromPoints(r,t),n.setFromPoints(r,m),e.isSeparated(n))return!1}}return!0}}();ln.prototype.closestPointToPoint=function(){return function(t,e){return this.needsUpdate&&this.update(),e.copy(t).applyMatrix4(this.invMatrix).clamp(this.min,this.max).applyMatrix4(this.matrix),e}}();ln.prototype.distanceToPoint=function(){const i=new I;return function(e){return this.closestPointToPoint(e,i),e.distanceTo(i)}}();ln.prototype.distanceToBox=function(){const i=["x","y","z"],t=new Array(12).fill().map(()=>new ei),e=new Array(12).fill().map(()=>new ei),n=new I,r=new I;return function(l,u=0,h=null,d=null){if(this.needsUpdate&&this.update(),this.intersectsBox(l))return(h||d)&&(l.getCenter(r),this.closestPointToPoint(r,n),l.closestPointToPoint(n,r),h&&h.copy(n),d&&d.copy(r)),0;const p=u*u,m=l.min,g=l.max,x=this.points;let b=1/0;for(let v=0;v<8;v++){const _=x[v];r.copy(_).clamp(m,g);const S=_.distanceToSquared(r);if(S<b&&(b=S,h&&h.copy(_),d&&d.copy(r),S<p))return Math.sqrt(S)}let w=0;for(let v=0;v<3;v++)for(let _=0;_<=1;_++)for(let S=0;S<=1;S++){const y=(v+1)%3,T=(v+2)%3,P=_<<y|S<<T,C=1<<v|_<<y|S<<T,A=x[P],O=x[C];t[w].set(A,O);const M=i[v],L=i[y],V=i[T],q=e[w],F=q.start,G=q.end;F[M]=m[M],F[L]=_?m[L]:g[L],F[V]=S?m[V]:g[L],G[M]=g[M],G[L]=_?m[L]:g[L],G[V]=S?m[V]:g[L],w++}for(let v=0;v<=1;v++)for(let _=0;_<=1;_++)for(let S=0;S<=1;S++){r.x=v?g.x:m.x,r.y=_?g.y:m.y,r.z=S?g.z:m.z,this.closestPointToPoint(r,n);const y=r.distanceToSquared(n);if(y<b&&(b=y,h&&h.copy(n),d&&d.copy(r),y<p))return Math.sqrt(y)}for(let v=0;v<12;v++){const _=t[v];for(let S=0;S<12;S++){const y=e[S];gc(_,y,n,r);const T=n.distanceToSquared(r);if(T<b&&(b=T,h&&h.copy(n),d&&d.copy(r),T<p))return Math.sqrt(T)}}return Math.sqrt(b)}}();class _c{constructor(t){this._getNewPrimitive=t,this._primitives=[]}getPrimitive(){const t=this._primitives;return t.length===0?this._getNewPrimitive():t.pop()}releasePrimitive(t){this._primitives.push(t)}}class pw extends _c{constructor(){super(()=>new In)}}const An=new pw;class fw{constructor(){this.float32Array=null,this.uint16Array=null,this.uint32Array=null;const t=[];let e=null;this.setBuffer=n=>{e&&t.push(e),e=n,this.float32Array=new Float32Array(n),this.uint16Array=new Uint16Array(n),this.uint32Array=new Uint32Array(n)},this.clearBuffer=()=>{e=null,this.float32Array=null,this.uint16Array=null,this.uint32Array=null,t.length!==0&&this.setBuffer(t.pop())}}}const xe=new fw;let Mi,Os;const ys=[],Eo=new _c(()=>new tn);function mw(i,t,e,n,r,o){Mi=Eo.getPrimitive(),Os=Eo.getPrimitive(),ys.push(Mi,Os),xe.setBuffer(i._roots[t]);const l=ql(0,i.geometry,e,n,r,o);xe.clearBuffer(),Eo.releasePrimitive(Mi),Eo.releasePrimitive(Os),ys.pop(),ys.pop();const u=ys.length;return u>0&&(Os=ys[u-1],Mi=ys[u-2]),l}function ql(i,t,e,n,r=null,o=0,l=0){const{float32Array:u,uint16Array:h,uint32Array:d}=xe;let p=i*2;if(rn(p,h)){const b=hn(i,d),w=xn(p,h);return Te(i,u,Mi),n(b,w,!1,l,o+i,Mi)}else{let V=function(F){const{uint16Array:G,uint32Array:H}=xe;let X=F*2;for(;!rn(X,G);)F=Tn(F),X=F*2;return hn(F,H)},q=function(F){const{uint16Array:G,uint32Array:H}=xe;let X=F*2;for(;!rn(X,G);)F=bn(F,H),X=F*2;return hn(F,H)+xn(X,G)};var x=V,g=q;const b=Tn(i),w=bn(i,d);let v=b,_=w,S,y,T,P;if(r&&(T=Mi,P=Os,Te(v,u,T),Te(_,u,P),S=r(T),y=r(P),y<S)){v=w,_=b;const F=S;S=y,y=F,T=P}T||(T=Mi,Te(v,u,T));const C=rn(v*2,h),A=e(T,C,S,l+1,o+v);let O;if(A===Jh){const F=V(v),H=q(v)-F;O=n(F,H,!0,l+1,o+v,T)}else O=A&&ql(v,t,e,n,r,o,l+1);if(O)return!0;P=Os,Te(_,u,P);const z=rn(_*2,h),M=e(P,z,y,l+1,o+_);let L;if(M===Jh){const F=V(_),H=q(_)-F;L=n(F,H,!0,l+1,o+_,P)}else L=M&&ql(_,t,e,n,r,o,l+1);return!!L}}const vr=new I,Ml=new I;function gw(i,t,e={},n=0,r=1/0){const o=n*n,l=r*r;let u=1/0,h=null;if(i.shapecast({boundsTraverseOrder:p=>(vr.copy(t).clamp(p.min,p.max),vr.distanceToSquared(t)),intersectsBounds:(p,m,g)=>g<u&&g<l,intersectsTriangle:(p,m)=>{p.closestPointToPoint(t,vr);const g=t.distanceToSquared(vr);return g<u&&(Ml.copy(vr),u=g,h=m),g<o}}),u===1/0)return null;const d=Math.sqrt(u);return e.point?e.point.copy(Ml):e.point=Ml.clone(),e.distance=d,e.faceIndex=h,e}const ws=new I,Ms=new I,Es=new I,So=new Rt,To=new Rt,Ao=new Rt,sd=new I,rd=new I,od=new I,Co=new I;function _w(i,t,e,n,r,o){let l;return o===on?l=i.intersectTriangle(n,e,t,!0,r):l=i.intersectTriangle(t,e,n,o!==un,r),l===null?null:{distance:i.origin.distanceTo(r),point:r.clone()}}function vw(i,t,e,n,r,o,l,u,h){ws.fromBufferAttribute(t,o),Ms.fromBufferAttribute(t,l),Es.fromBufferAttribute(t,u);const d=_w(i,ws,Ms,Es,Co,h);if(d){n&&(So.fromBufferAttribute(n,o),To.fromBufferAttribute(n,l),Ao.fromBufferAttribute(n,u),d.uv=sn.getInterpolation(Co,ws,Ms,Es,So,To,Ao,new Rt)),r&&(So.fromBufferAttribute(r,o),To.fromBufferAttribute(r,l),Ao.fromBufferAttribute(r,u),d.uv1=sn.getInterpolation(Co,ws,Ms,Es,So,To,Ao,new Rt)),e&&(sd.fromBufferAttribute(e,o),rd.fromBufferAttribute(e,l),od.fromBufferAttribute(e,u),d.normal=sn.getInterpolation(Co,ws,Ms,Es,sd,rd,od,new I),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const p={a:o,b:l,c:u,normal:new I,materialIndex:0};sn.getNormal(ws,Ms,Es,p.normal),d.face=p,d.faceIndex=o}return d}function ha(i,t,e,n,r){const o=n*3;let l=o+0,u=o+1,h=o+2;const d=i.index;i.index&&(l=d.getX(l),u=d.getX(u),h=d.getX(h));const{position:p,normal:m,uv:g,uv1:x}=i.attributes,b=vw(e,p,m,g,x,l,u,h,t);return b?(b.faceIndex=n,r&&r.push(b),b):null}function De(i,t,e,n){const r=i.a,o=i.b,l=i.c;let u=t,h=t+1,d=t+2;e&&(u=e.getX(u),h=e.getX(h),d=e.getX(d)),r.x=n.getX(u),r.y=n.getY(u),r.z=n.getZ(u),o.x=n.getX(h),o.y=n.getY(h),o.z=n.getZ(h),l.x=n.getX(d),l.y=n.getY(d),l.z=n.getZ(d)}function xw(i,t,e,n,r,o){const{geometry:l,_indirectBuffer:u}=i;for(let h=n,d=n+r;h<d;h++)ha(l,t,e,h,o)}function bw(i,t,e,n,r){const{geometry:o,_indirectBuffer:l}=i;let u=1/0,h=null;for(let d=n,p=n+r;d<p;d++){let m;m=ha(o,t,e,d),m&&m.distance<u&&(h=m,u=m.distance)}return h}function yw(i,t,e,n,r,o,l){const{geometry:u}=e,{index:h}=u,d=u.attributes.position;for(let p=i,m=t+i;p<m;p++){let g;if(g=p,De(l,g*3,h,d),l.needsUpdate=!0,n(l,g,r,o))return!0}return!1}function ww(i,t=null){t&&Array.isArray(t)&&(t=new Set(t));const e=i.geometry,n=e.index?e.index.array:null,r=e.attributes.position;let o,l,u,h,d=0;const p=i._roots;for(let g=0,x=p.length;g<x;g++)o=p[g],l=new Uint32Array(o),u=new Uint16Array(o),h=new Float32Array(o),m(0,d),d+=o.byteLength;function m(g,x,b=!1){const w=g*2;if(u[w+15]===ua){const _=l[g+6],S=u[w+14];let y=1/0,T=1/0,P=1/0,C=-1/0,A=-1/0,O=-1/0;for(let z=3*_,M=3*(_+S);z<M;z++){let L=n[z];const V=r.getX(L),q=r.getY(L),F=r.getZ(L);V<y&&(y=V),V>C&&(C=V),q<T&&(T=q),q>A&&(A=q),F<P&&(P=F),F>O&&(O=F)}return h[g+0]!==y||h[g+1]!==T||h[g+2]!==P||h[g+3]!==C||h[g+4]!==A||h[g+5]!==O?(h[g+0]=y,h[g+1]=T,h[g+2]=P,h[g+3]=C,h[g+4]=A,h[g+5]=O,!0):!1}else{const _=g+8,S=l[g+6],y=_+x,T=S+x;let P=b,C=!1,A=!1;t?P||(C=t.has(y),A=t.has(T),P=!C&&!A):(C=!0,A=!0);const O=P||C,z=P||A;let M=!1;O&&(M=m(_,x,P));let L=!1;z&&(L=m(S,x,P));const V=M||L;if(V)for(let q=0;q<3;q++){const F=_+q,G=S+q,H=h[F],X=h[F+3],et=h[G],tt=h[G+3];h[g+q]=H<et?H:et,h[g+q+3]=X>tt?X:tt}return V}}}const ad=new tn;function Ti(i,t,e,n){return Te(i,t,ad),e.intersectBox(ad,n)}function Mw(i,t,e,n,r,o){const{geometry:l,_indirectBuffer:u}=i;for(let h=n,d=n+r;h<d;h++){let p=u?u[h]:h;ha(l,t,e,p,o)}}function Ew(i,t,e,n,r){const{geometry:o,_indirectBuffer:l}=i;let u=1/0,h=null;for(let d=n,p=n+r;d<p;d++){let m;m=ha(o,t,e,l?l[d]:d),m&&m.distance<u&&(h=m,u=m.distance)}return h}function Sw(i,t,e,n,r,o,l){const{geometry:u}=e,{index:h}=u,d=u.attributes.position;for(let p=i,m=t+i;p<m;p++){let g;if(g=e.resolveTriangleIndex(p),De(l,g*3,h,d),l.needsUpdate=!0,n(l,g,r,o))return!0}return!1}const ld=new I;function Tw(i,t,e,n,r){xe.setBuffer(i._roots[t]),jl(0,i,e,n,r),xe.clearBuffer()}function jl(i,t,e,n,r){const{float32Array:o,uint16Array:l,uint32Array:u}=xe,h=i*2;if(rn(h,l)){const p=hn(i,u),m=xn(h,l);xw(t,e,n,p,m,r)}else{const p=Tn(i);Ti(p,o,n,ld)&&jl(p,t,e,n,r);const m=bn(i,u);Ti(m,o,n,ld)&&jl(m,t,e,n,r)}}const cd=new I,Aw=["x","y","z"];function Cw(i,t,e,n){xe.setBuffer(i._roots[t]);const r=Yl(0,i,e,n);return xe.clearBuffer(),r}function Yl(i,t,e,n){const{float32Array:r,uint16Array:o,uint32Array:l}=xe;let u=i*2;if(rn(u,o)){const d=hn(i,l),p=xn(u,o);return bw(t,e,n,d,p)}else{const d=mc(i,l),p=Aw[d],g=n.direction[p]>=0;let x,b;g?(x=Tn(i),b=bn(i,l)):(x=bn(i,l),b=Tn(i));const v=Ti(x,r,n,cd)?Yl(x,t,e,n):null;if(v){const y=v.point[p];if(g?y<=r[b+d]:y>=r[b+d+3])return v}const S=Ti(b,r,n,cd)?Yl(b,t,e,n):null;return v&&S?v.distance<=S.distance?v:S:v||S||null}}const Po=new tn,Ss=new In,Ts=new In,xr=new ce,ud=new ln,Ro=new ln;function Pw(i,t,e,n){xe.setBuffer(i._roots[t]);const r=Kl(0,i,e,n);return xe.clearBuffer(),r}function Kl(i,t,e,n,r=null){const{float32Array:o,uint16Array:l,uint32Array:u}=xe;let h=i*2;if(r===null&&(e.boundingBox||e.computeBoundingBox(),ud.set(e.boundingBox.min,e.boundingBox.max,n),r=ud),rn(h,l)){const p=t.geometry,m=p.index,g=p.attributes.position,x=e.index,b=e.attributes.position,w=hn(i,u),v=xn(h,l);if(xr.copy(n).invert(),e.boundsTree)return Te(i,o,Ro),Ro.matrix.copy(xr),Ro.needsUpdate=!0,e.boundsTree.shapecast({intersectsBounds:S=>Ro.intersectsBox(S),intersectsTriangle:S=>{S.a.applyMatrix4(n),S.b.applyMatrix4(n),S.c.applyMatrix4(n),S.needsUpdate=!0;for(let y=w*3,T=(v+w)*3;y<T;y+=3)if(De(Ts,y,m,g),Ts.needsUpdate=!0,S.intersectsTriangle(Ts))return!0;return!1}});for(let _=w*3,S=(v+w)*3;_<S;_+=3){De(Ss,_,m,g),Ss.a.applyMatrix4(xr),Ss.b.applyMatrix4(xr),Ss.c.applyMatrix4(xr),Ss.needsUpdate=!0;for(let y=0,T=x.count;y<T;y+=3)if(De(Ts,y,x,b),Ts.needsUpdate=!0,Ss.intersectsTriangle(Ts))return!0}}else{const p=i+8,m=u[i+6];return Te(p,o,Po),!!(r.intersectsBox(Po)&&Kl(p,t,e,n,r)||(Te(m,o,Po),r.intersectsBox(Po)&&Kl(m,t,e,n,r)))}}const Lo=new ce,El=new ln,br=new ln,Rw=new I,Lw=new I,Dw=new I,Iw=new I;function Uw(i,t,e,n={},r={},o=0,l=1/0){t.boundingBox||t.computeBoundingBox(),El.set(t.boundingBox.min,t.boundingBox.max,e),El.needsUpdate=!0;const u=i.geometry,h=u.attributes.position,d=u.index,p=t.attributes.position,m=t.index,g=An.getPrimitive(),x=An.getPrimitive();let b=Rw,w=Lw,v=null,_=null;r&&(v=Dw,_=Iw);let S=1/0,y=null,T=null;return Lo.copy(e).invert(),br.matrix.copy(Lo),i.shapecast({boundsTraverseOrder:P=>El.distanceToBox(P),intersectsBounds:(P,C,A)=>A<S&&A<l?(C&&(br.min.copy(P.min),br.max.copy(P.max),br.needsUpdate=!0),!0):!1,intersectsRange:(P,C)=>{if(t.boundsTree)return t.boundsTree.shapecast({boundsTraverseOrder:O=>br.distanceToBox(O),intersectsBounds:(O,z,M)=>M<S&&M<l,intersectsRange:(O,z)=>{for(let M=O,L=O+z;M<L;M++){De(x,3*M,m,p),x.a.applyMatrix4(e),x.b.applyMatrix4(e),x.c.applyMatrix4(e),x.needsUpdate=!0;for(let V=P,q=P+C;V<q;V++){De(g,3*V,d,h),g.needsUpdate=!0;const F=g.distanceToTriangle(x,b,v);if(F<S&&(w.copy(b),_&&_.copy(v),S=F,y=V,T=M),F<o)return!0}}}});{const A=Ys(t);for(let O=0,z=A;O<z;O++){De(x,3*O,m,p),x.a.applyMatrix4(e),x.b.applyMatrix4(e),x.c.applyMatrix4(e),x.needsUpdate=!0;for(let M=P,L=P+C;M<L;M++){De(g,3*M,d,h),g.needsUpdate=!0;const V=g.distanceToTriangle(x,b,v);if(V<S&&(w.copy(b),_&&_.copy(v),S=V,y=M,T=O),V<o)return!0}}}}}),An.releasePrimitive(g),An.releasePrimitive(x),S===1/0?null:(n.point?n.point.copy(w):n.point=w.clone(),n.distance=S,n.faceIndex=y,r&&(r.point?r.point.copy(_):r.point=_.clone(),r.point.applyMatrix4(Lo),w.applyMatrix4(Lo),r.distance=w.sub(r.point).length(),r.faceIndex=T),n)}function Nw(i,t=null){t&&Array.isArray(t)&&(t=new Set(t));const e=i.geometry,n=e.index?e.index.array:null,r=e.attributes.position;let o,l,u,h,d=0;const p=i._roots;for(let g=0,x=p.length;g<x;g++)o=p[g],l=new Uint32Array(o),u=new Uint16Array(o),h=new Float32Array(o),m(0,d),d+=o.byteLength;function m(g,x,b=!1){const w=g*2;if(u[w+15]===ua){const _=l[g+6],S=u[w+14];let y=1/0,T=1/0,P=1/0,C=-1/0,A=-1/0,O=-1/0;for(let z=_,M=_+S;z<M;z++){const L=3*i.resolveTriangleIndex(z);for(let V=0;V<3;V++){let q=L+V;q=n?n[q]:q;const F=r.getX(q),G=r.getY(q),H=r.getZ(q);F<y&&(y=F),F>C&&(C=F),G<T&&(T=G),G>A&&(A=G),H<P&&(P=H),H>O&&(O=H)}}return h[g+0]!==y||h[g+1]!==T||h[g+2]!==P||h[g+3]!==C||h[g+4]!==A||h[g+5]!==O?(h[g+0]=y,h[g+1]=T,h[g+2]=P,h[g+3]=C,h[g+4]=A,h[g+5]=O,!0):!1}else{const _=g+8,S=l[g+6],y=_+x,T=S+x;let P=b,C=!1,A=!1;t?P||(C=t.has(y),A=t.has(T),P=!C&&!A):(C=!0,A=!0);const O=P||C,z=P||A;let M=!1;O&&(M=m(_,x,P));let L=!1;z&&(L=m(S,x,P));const V=M||L;if(V)for(let q=0;q<3;q++){const F=_+q,G=S+q,H=h[F],X=h[F+3],et=h[G],tt=h[G+3];h[g+q]=H<et?H:et,h[g+q+3]=X>tt?X:tt}return V}}}const hd=new I;function Fw(i,t,e,n,r){xe.setBuffer(i._roots[t]),$l(0,i,e,n,r),xe.clearBuffer()}function $l(i,t,e,n,r){const{float32Array:o,uint16Array:l,uint32Array:u}=xe,h=i*2;if(rn(h,l)){const p=hn(i,u),m=xn(h,l);Mw(t,e,n,p,m,r)}else{const p=Tn(i);Ti(p,o,n,hd)&&$l(p,t,e,n,r);const m=bn(i,u);Ti(m,o,n,hd)&&$l(m,t,e,n,r)}}const dd=new I,Ow=["x","y","z"];function Bw(i,t,e,n){xe.setBuffer(i._roots[t]);const r=Zl(0,i,e,n);return xe.clearBuffer(),r}function Zl(i,t,e,n){const{float32Array:r,uint16Array:o,uint32Array:l}=xe;let u=i*2;if(rn(u,o)){const d=hn(i,l),p=xn(u,o);return Ew(t,e,n,d,p)}else{const d=mc(i,l),p=Ow[d],g=n.direction[p]>=0;let x,b;g?(x=Tn(i),b=bn(i,l)):(x=bn(i,l),b=Tn(i));const v=Ti(x,r,n,dd)?Zl(x,t,e,n):null;if(v){const y=v.point[p];if(g?y<=r[b+d]:y>=r[b+d+3])return v}const S=Ti(b,r,n,dd)?Zl(b,t,e,n):null;return v&&S?v.distance<=S.distance?v:S:v||S||null}}const Do=new tn,As=new In,Cs=new In,yr=new ce,pd=new ln,Io=new ln;function kw(i,t,e,n){xe.setBuffer(i._roots[t]);const r=Ql(0,i,e,n);return xe.clearBuffer(),r}function Ql(i,t,e,n,r=null){const{float32Array:o,uint16Array:l,uint32Array:u}=xe;let h=i*2;if(r===null&&(e.boundingBox||e.computeBoundingBox(),pd.set(e.boundingBox.min,e.boundingBox.max,n),r=pd),rn(h,l)){const p=t.geometry,m=p.index,g=p.attributes.position,x=e.index,b=e.attributes.position,w=hn(i,u),v=xn(h,l);if(yr.copy(n).invert(),e.boundsTree)return Te(i,o,Io),Io.matrix.copy(yr),Io.needsUpdate=!0,e.boundsTree.shapecast({intersectsBounds:S=>Io.intersectsBox(S),intersectsTriangle:S=>{S.a.applyMatrix4(n),S.b.applyMatrix4(n),S.c.applyMatrix4(n),S.needsUpdate=!0;for(let y=w,T=v+w;y<T;y++)if(De(Cs,3*t.resolveTriangleIndex(y),m,g),Cs.needsUpdate=!0,S.intersectsTriangle(Cs))return!0;return!1}});for(let _=w,S=v+w;_<S;_++){const y=t.resolveTriangleIndex(_);De(As,3*y,m,g),As.a.applyMatrix4(yr),As.b.applyMatrix4(yr),As.c.applyMatrix4(yr),As.needsUpdate=!0;for(let T=0,P=x.count;T<P;T+=3)if(De(Cs,T,x,b),Cs.needsUpdate=!0,As.intersectsTriangle(Cs))return!0}}else{const p=i+8,m=u[i+6];return Te(p,o,Do),!!(r.intersectsBox(Do)&&Ql(p,t,e,n,r)||(Te(m,o,Do),r.intersectsBox(Do)&&Ql(m,t,e,n,r)))}}const Uo=new ce,Sl=new ln,wr=new ln,Vw=new I,zw=new I,Hw=new I,Gw=new I;function Ww(i,t,e,n={},r={},o=0,l=1/0){t.boundingBox||t.computeBoundingBox(),Sl.set(t.boundingBox.min,t.boundingBox.max,e),Sl.needsUpdate=!0;const u=i.geometry,h=u.attributes.position,d=u.index,p=t.attributes.position,m=t.index,g=An.getPrimitive(),x=An.getPrimitive();let b=Vw,w=zw,v=null,_=null;r&&(v=Hw,_=Gw);let S=1/0,y=null,T=null;return Uo.copy(e).invert(),wr.matrix.copy(Uo),i.shapecast({boundsTraverseOrder:P=>Sl.distanceToBox(P),intersectsBounds:(P,C,A)=>A<S&&A<l?(C&&(wr.min.copy(P.min),wr.max.copy(P.max),wr.needsUpdate=!0),!0):!1,intersectsRange:(P,C)=>{if(t.boundsTree){const A=t.boundsTree;return A.shapecast({boundsTraverseOrder:O=>wr.distanceToBox(O),intersectsBounds:(O,z,M)=>M<S&&M<l,intersectsRange:(O,z)=>{for(let M=O,L=O+z;M<L;M++){const V=A.resolveTriangleIndex(M);De(x,3*V,m,p),x.a.applyMatrix4(e),x.b.applyMatrix4(e),x.c.applyMatrix4(e),x.needsUpdate=!0;for(let q=P,F=P+C;q<F;q++){const G=i.resolveTriangleIndex(q);De(g,3*G,d,h),g.needsUpdate=!0;const H=g.distanceToTriangle(x,b,v);if(H<S&&(w.copy(b),_&&_.copy(v),S=H,y=q,T=M),H<o)return!0}}}})}else{const A=Ys(t);for(let O=0,z=A;O<z;O++){De(x,3*O,m,p),x.a.applyMatrix4(e),x.b.applyMatrix4(e),x.c.applyMatrix4(e),x.needsUpdate=!0;for(let M=P,L=P+C;M<L;M++){const V=i.resolveTriangleIndex(M);De(g,3*V,d,h),g.needsUpdate=!0;const q=g.distanceToTriangle(x,b,v);if(q<S&&(w.copy(b),_&&_.copy(v),S=q,y=M,T=O),q<o)return!0}}}}}),An.releasePrimitive(g),An.releasePrimitive(x),S===1/0?null:(n.point?n.point.copy(w):n.point=w.clone(),n.distance=S,n.faceIndex=y,r&&(r.point?r.point.copy(_):r.point=_.clone(),r.point.applyMatrix4(Uo),w.applyMatrix4(Uo),r.distance=w.sub(r.point).length(),r.faceIndex=T),n)}function Xw(){return typeof SharedArrayBuffer!="undefined"}const Lr=new xe.constructor,ea=new xe.constructor,wi=new _c(()=>new tn),Ps=new tn,Rs=new tn,Tl=new tn,Al=new tn;let Cl=!1;function qw(i,t,e,n){if(Cl)throw new Error("MeshBVH: Recursive calls to bvhcast not supported.");Cl=!0;const r=i._roots,o=t._roots;let l,u=0,h=0;const d=new ce().copy(e).invert();for(let p=0,m=r.length;p<m;p++){Lr.setBuffer(r[p]),h=0;const g=wi.getPrimitive();Te(0,Lr.float32Array,g),g.applyMatrix4(d);for(let x=0,b=o.length;x<b&&(ea.setBuffer(o[p]),l=Ln(0,0,e,d,n,u,h,0,0,g),ea.clearBuffer(),h+=o[x].length,!l);x++);if(wi.releasePrimitive(g),Lr.clearBuffer(),u+=r[p].length,l)break}return Cl=!1,l}function Ln(i,t,e,n,r,o=0,l=0,u=0,h=0,d=null,p=!1){let m,g;p?(m=ea,g=Lr):(m=Lr,g=ea);const x=m.float32Array,b=m.uint32Array,w=m.uint16Array,v=g.float32Array,_=g.uint32Array,S=g.uint16Array,y=i*2,T=t*2,P=rn(y,w),C=rn(T,S);let A=!1;if(C&&P)p?A=r(hn(t,_),xn(t*2,S),hn(i,b),xn(i*2,w),h,l+t,u,o+i):A=r(hn(i,b),xn(i*2,w),hn(t,_),xn(t*2,S),u,o+i,h,l+t);else if(C){const O=wi.getPrimitive();Te(t,v,O),O.applyMatrix4(e);const z=Tn(i),M=bn(i,b);Te(z,x,Ps),Te(M,x,Rs);const L=O.intersectsBox(Ps),V=O.intersectsBox(Rs);A=L&&Ln(t,z,n,e,r,l,o,h,u+1,O,!p)||V&&Ln(t,M,n,e,r,l,o,h,u+1,O,!p),wi.releasePrimitive(O)}else{const O=Tn(t),z=bn(t,_);Te(O,v,Tl),Te(z,v,Al);const M=d.intersectsBox(Tl),L=d.intersectsBox(Al);if(M&&L)A=Ln(i,O,e,n,r,o,l,u,h+1,d,p)||Ln(i,z,e,n,r,o,l,u,h+1,d,p);else if(M)if(P)A=Ln(i,O,e,n,r,o,l,u,h+1,d,p);else{const V=wi.getPrimitive();V.copy(Tl).applyMatrix4(e);const q=Tn(i),F=bn(i,b);Te(q,x,Ps),Te(F,x,Rs);const G=V.intersectsBox(Ps),H=V.intersectsBox(Rs);A=G&&Ln(O,q,n,e,r,l,o,h,u+1,V,!p)||H&&Ln(O,F,n,e,r,l,o,h,u+1,V,!p),wi.releasePrimitive(V)}else if(L)if(P)A=Ln(i,z,e,n,r,o,l,u,h+1,d,p);else{const V=wi.getPrimitive();V.copy(Al).applyMatrix4(e);const q=Tn(i),F=bn(i,b);Te(q,x,Ps),Te(F,x,Rs);const G=V.intersectsBox(Ps),H=V.intersectsBox(Rs);A=G&&Ln(z,q,n,e,r,l,o,h,u+1,V,!p)||H&&Ln(z,F,n,e,r,l,o,h,u+1,V,!p),wi.releasePrimitive(V)}}return A}const No=new ln,fd=new tn,jw={strategy:cp,maxDepth:40,maxLeafTris:10,useSharedArrayBuffer:!1,setBoundingBox:!0,onProgress:null,indirect:!1,verbose:!0};class vc{static serialize(t,e={}){e={cloneBuffers:!0,...e};const n=t.geometry,r=t._roots,o=t._indirectBuffer,l=n.getIndex();let u;return e.cloneBuffers?u={roots:r.map(h=>h.slice()),index:l.array.slice(),indirectBuffer:o?o.slice():null}:u={roots:r,index:l.array,indirectBuffer:o},u}static deserialize(t,e,n={}){n={setIndex:!0,indirect:Boolean(t.indirectBuffer),...n};const{index:r,roots:o,indirectBuffer:l}=t,u=new vc(e,{...n,[xl]:!0});if(u._roots=o,u._indirectBuffer=l||null,n.setIndex){const h=e.getIndex();if(h===null){const d=new Qe(t.index,1,!1);e.setIndex(d)}else h.array!==r&&(h.array.set(r),h.needsUpdate=!0)}return u}get indirect(){return!!this._indirectBuffer}constructor(t,e={}){if(t.isBufferGeometry){if(t.index&&t.index.isInterleavedBufferAttribute)throw new Error("MeshBVH: InterleavedBufferAttribute is not supported for the index attribute.")}else throw new Error("MeshBVH: Only BufferGeometries are supported.");if(e=Object.assign({...jw,[xl]:!1},e),e.useSharedArrayBuffer&&!Xw())throw new Error("MeshBVH: SharedArrayBuffer is not available.");this.geometry=t,this._roots=null,this._indirectBuffer=null,e[xl]||(cw(this,e),!t.boundingBox&&e.setBoundingBox&&(t.boundingBox=this.getBoundingBox(new tn)));const{_indirectBuffer:n}=this;this.resolveTriangleIndex=e.indirect?r=>n[r]:r=>r}refit(t=null){return(this.indirect?Nw:ww)(this,t)}traverse(t,e=0){const n=this._roots[e],r=new Uint32Array(n),o=new Uint16Array(n);l(0);function l(u,h=0){const d=u*2,p=o[d+15]===ua;if(p){const m=r[u+6],g=o[d+14];t(h,p,new Float32Array(n,u*4,6),m,g)}else{const m=u+Si/4,g=r[u+6],x=r[u+7];t(h,p,new Float32Array(n,u*4,6),x)||(l(m,h+1),l(g,h+1))}}}raycast(t,e=Vn){const n=this._roots,r=this.geometry,o=[],l=e.isMaterial,u=Array.isArray(e),h=r.groups,d=l?e.side:e,p=this.indirect?Fw:Tw;for(let m=0,g=n.length;m<g;m++){const x=u?e[h[m].materialIndex].side:d,b=o.length;if(p(this,m,x,t,o),u){const w=h[m].materialIndex;for(let v=b,_=o.length;v<_;v++)o[v].face.materialIndex=w}}return o}raycastFirst(t,e=Vn){const n=this._roots,r=this.geometry,o=e.isMaterial,l=Array.isArray(e);let u=null;const h=r.groups,d=o?e.side:e,p=this.indirect?Bw:Cw;for(let m=0,g=n.length;m<g;m++){const x=l?e[h[m].materialIndex].side:d,b=p(this,m,x,t);b!=null&&(u==null||b.distance<u.distance)&&(u=b,l&&(b.face.materialIndex=h[m].materialIndex))}return u}intersectsGeometry(t,e){let n=!1;const r=this._roots,o=this.indirect?kw:Pw;for(let l=0,u=r.length;l<u&&(n=o(this,l,t,e),!n);l++);return n}shapecast(t){const e=An.getPrimitive(),n=this.indirect?Sw:yw;let{boundsTraverseOrder:r,intersectsBounds:o,intersectsRange:l,intersectsTriangle:u}=t;if(l&&u){const m=l;l=(g,x,b,w,v)=>m(g,x,b,w,v)?!0:n(g,x,this,u,b,w,e)}else l||(u?l=(m,g,x,b)=>n(m,g,this,u,x,b,e):l=(m,g,x)=>x);let h=!1,d=0;const p=this._roots;for(let m=0,g=p.length;m<g;m++){const x=p[m];if(h=mw(this,m,o,l,r,d),h)break;d+=x.byteLength}return An.releasePrimitive(e),h}bvhcast(t,e,n){let{intersectsRanges:r,intersectsTriangles:o}=n;const l=An.getPrimitive(),u=this.geometry.index,h=this.geometry.attributes.position,d=this.indirect?b=>{const w=this.resolveTriangleIndex(b);De(l,w*3,u,h)}:b=>{De(l,b*3,u,h)},p=An.getPrimitive(),m=t.geometry.index,g=t.geometry.attributes.position,x=t.indirect?b=>{const w=t.resolveTriangleIndex(b);De(p,w*3,m,g)}:b=>{De(p,b*3,m,g)};if(o){const b=(w,v,_,S,y,T,P,C)=>{for(let A=_,O=_+S;A<O;A++){x(A),p.a.applyMatrix4(e),p.b.applyMatrix4(e),p.c.applyMatrix4(e),p.needsUpdate=!0;for(let z=w,M=w+v;z<M;z++)if(d(z),l.needsUpdate=!0,o(l,p,z,A,y,T,P,C))return!0}return!1};if(r){const w=r;r=function(v,_,S,y,T,P,C,A){return w(v,_,S,y,T,P,C,A)?!0:b(v,_,S,y,T,P,C,A)}}else r=b}return qw(this,t,e,r)}intersectsBox(t,e){return No.set(t.min,t.max,e),No.needsUpdate=!0,this.shapecast({intersectsBounds:n=>No.intersectsBox(n),intersectsTriangle:n=>No.intersectsTriangle(n)})}intersectsSphere(t){return this.shapecast({intersectsBounds:e=>t.intersectsBox(e),intersectsTriangle:e=>e.intersectsSphere(t)})}closestPointToGeometry(t,e,n={},r={},o=0,l=1/0){return(this.indirect?Ww:Uw)(this,t,e,n,r,o,l)}closestPointToPoint(t,e={},n=0,r=1/0){return gw(this,t,e,n,r)}getBoundingBox(t){return t.makeEmpty(),this._roots.forEach(n=>{Te(0,new Float32Array(n),fd),t.union(fd)}),t}}function Yw(i){switch(i){case 1:return"R";case 2:return"RG";case 3:return"RGBA";case 4:return"RGBA"}throw new Error}function Kw(i){switch(i){case 1:return Bd;case 2:return kd;case 3:return Ze;case 4:return Ze}}function md(i){switch(i){case 1:return ac;case 2:return sa;case 3:return Ir;case 4:return Ir}}class gp extends ta{constructor(){super(),this.minFilter=de,this.magFilter=de,this.generateMipmaps=!1,this.overrideItemSize=null,this._forcedType=null}updateFrom(t){const e=this.overrideItemSize,n=t.itemSize,r=t.count;if(e!==null){if(n*r%e!==0)throw new Error("VertexAttributeTexture: overrideItemSize must divide evenly into buffer length.");t.itemSize=e,t.count=r*n/e}const o=t.itemSize,l=t.count,u=t.normalized,h=t.array.constructor,d=h.BYTES_PER_ELEMENT;let p=this._forcedType,m=o;if(p===null)switch(h){case Float32Array:p=Ne;break;case Uint8Array:case Uint16Array:case Uint32Array:p=vn;break;case Int8Array:case Int16Array:case Int32Array:p=Cr;break}let g,x,b,w,v=Yw(o);switch(p){case Ne:b=1,x=Kw(o),u&&d===1?(w=h,v+="8",h===Uint8Array?g=kn:(g=kl,v+="_SNORM")):(w=Float32Array,v+="32F",g=Ne);break;case Cr:v+=d*8+"I",b=u?Math.pow(2,h.BYTES_PER_ELEMENT*8-1):1,x=md(o),d===1?(w=Int8Array,g=kl):d===2?(w=Int16Array,g=Nd):(w=Int32Array,g=Cr);break;case vn:v+=d*8+"UI",b=u?Math.pow(2,h.BYTES_PER_ELEMENT*8-1):1,x=md(o),d===1?(w=Uint8Array,g=kn):d===2?(w=Uint16Array,g=ia):(w=Uint32Array,g=vn);break}m===3&&(x===Ze||x===Ir)&&(m=4);const _=Math.ceil(Math.sqrt(l))||1,S=m*_*_,y=new w(S),T=t.normalized;t.normalized=!1;for(let P=0;P<l;P++){const C=m*P;y[C]=t.getX(P)/b,o>=2&&(y[C+1]=t.getY(P)/b),o>=3&&(y[C+2]=t.getZ(P)/b,m===4&&(y[C+3]=1)),o>=4&&(y[C+3]=t.getW(P)/b)}t.normalized=T,this.internalFormat=v,this.format=x,this.type=g,this.image.width=_,this.image.height=_,this.image.data=y,this.needsUpdate=!0,this.dispose(),t.itemSize=n,t.count=r}}class $w extends gp{constructor(){super(),this._forcedType=vn}}class Zw extends gp{constructor(){super(),this._forcedType=Ne}}class Qw{constructor(){this.index=new $w,this.position=new Zw,this.bvhBounds=new ta,this.bvhContents=new ta,this._cachedIndexAttr=null,this.index.overrideItemSize=3}updateFrom(t){const{geometry:e}=t;if(tM(t,this.bvhBounds,this.bvhContents),this.position.updateFrom(e.attributes.position),t.indirect){const n=t._indirectBuffer;if(this._cachedIndexAttr===null||this._cachedIndexAttr.count!==n.length)if(e.index)this._cachedIndexAttr=e.index.clone();else{const r=hp(up(e));this._cachedIndexAttr=new Qe(r,1,!1)}Jw(e,n,this._cachedIndexAttr),this.index.updateFrom(this._cachedIndexAttr)}else this.index.updateFrom(e.index)}dispose(){const{index:t,position:e,bvhBounds:n,bvhContents:r}=this;t&&t.dispose(),e&&e.dispose(),n&&n.dispose(),r&&r.dispose()}}function Jw(i,t,e){const n=e.array,r=i.index?i.index.array:null;for(let o=0,l=t.length;o<l;o++){const u=3*o,h=3*t[o];for(let d=0;d<3;d++)n[u+d]=r?r[h+d]:h+d}}function tM(i,t,e){const n=i._roots;if(n.length!==1)throw new Error("MeshBVHUniformStruct: Multi-root BVHs not supported.");const r=n[0],o=new Uint16Array(r),l=new Uint32Array(r),u=new Float32Array(r),h=r.byteLength/Si,d=2*Math.ceil(Math.sqrt(h/2)),p=new Float32Array(4*d*d),m=Math.ceil(Math.sqrt(h)),g=new Uint32Array(2*m*m);for(let x=0;x<h;x++){const b=x*Si/4,w=b*2,v=b;for(let _=0;_<3;_++)p[8*x+0+_]=u[v+0+_],p[8*x+4+_]=u[v+3+_];if(rn(w,o)){const _=xn(w,o),S=hn(b,l),y=4294901760|_;g[x*2+0]=y,g[x*2+1]=S}else{const _=4*bn(b,l)/Si,S=mc(b,l);g[x*2+0]=S,g[x*2+1]=_}}t.image.data=p,t.image.width=d,t.image.height=d,t.format=Ze,t.type=Ne,t.internalFormat="RGBA32F",t.minFilter=de,t.magFilter=de,t.generateMipmaps=!1,t.needsUpdate=!0,t.dispose(),e.image.data=g,e.image.width=m,e.image.height=m,e.format=sa,e.type=vn,e.internalFormat="RG32UI",e.minFilter=de,e.magFilter=de,e.generateMipmaps=!1,e.needsUpdate=!0,e.dispose()}const eM=`

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
`,nM=`

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
`,iM=`
struct BVH {

	usampler2D index;
	sampler2D position;

	sampler2D bvhBounds;
	usampler2D bvhContents;

};
`,sM=iM,rM=`
	${eM}
	${nM}
`,gd={type:"change"},Pl={type:"start"},_d={type:"end"},Fo=new oa,vd=new Fn,oM=Math.cos(70*R_.DEG2RAD);class aM extends Yi{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:is.ROTATE,MIDDLE:is.DOLLY,RIGHT:is.PAN},this.touches={ONE:ss.ROTATE,TWO:ss.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return u.phi},this.getAzimuthalAngle=function(){return u.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(B){B.addEventListener("keydown",Ot),this._domElementKeyEvents=B},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Ot),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(gd),n.update(),o=r.NONE},this.update=function(){const B=new I,dt=new We().setFromUnitVectors(t.up,new I(0,1,0)),_t=dt.clone().invert(),Ct=new I,N=new We,it=new I,at=2*Math.PI;return function(Ut=null){const te=n.object.position;B.copy(te).sub(n.target),B.applyQuaternion(dt),u.setFromVector3(B),n.autoRotate&&o===r.NONE&&V(M(Ut)),n.enableDamping?(u.theta+=h.theta*n.dampingFactor,u.phi+=h.phi*n.dampingFactor):(u.theta+=h.theta,u.phi+=h.phi);let Jt=n.minAzimuthAngle,oe=n.maxAzimuthAngle;isFinite(Jt)&&isFinite(oe)&&(Jt<-Math.PI?Jt+=at:Jt>Math.PI&&(Jt-=at),oe<-Math.PI?oe+=at:oe>Math.PI&&(oe-=at),Jt<=oe?u.theta=Math.max(Jt,Math.min(oe,u.theta)):u.theta=u.theta>(Jt+oe)/2?Math.max(Jt,u.theta):Math.min(oe,u.theta)),u.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,u.phi)),u.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(p,n.dampingFactor):n.target.add(p),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&C||n.object.isOrthographicCamera?u.radius=nt(u.radius):u.radius=nt(u.radius*d),B.setFromSpherical(u),B.applyQuaternion(_t),te.copy(n.target).add(B),n.object.lookAt(n.target),n.enableDamping===!0?(h.theta*=1-n.dampingFactor,h.phi*=1-n.dampingFactor,p.multiplyScalar(1-n.dampingFactor)):(h.set(0,0,0),p.set(0,0,0));let Ce=!1;if(n.zoomToCursor&&C){let se=null;if(n.object.isPerspectiveCamera){const Se=B.length();se=nt(Se*d);const He=Se-se;n.object.position.addScaledVector(T,He),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const Se=new I(P.x,P.y,0);Se.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/d)),n.object.updateProjectionMatrix(),Ce=!0;const He=new I(P.x,P.y,0);He.unproject(n.object),n.object.position.sub(He).add(Se),n.object.updateMatrixWorld(),se=B.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;se!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(se).add(n.object.position):(Fo.origin.copy(n.object.position),Fo.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Fo.direction))<oM?t.lookAt(n.target):(vd.setFromNormalAndCoplanarPoint(n.object.up,n.target),Fo.intersectPlane(vd,n.target))))}else n.object.isOrthographicCamera&&(Ce=d!==1,Ce&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/d)),n.object.updateProjectionMatrix()));return d=1,C=!1,Ce||Ct.distanceToSquared(n.object.position)>l||8*(1-N.dot(n.object.quaternion))>l||it.distanceToSquared(n.target)>0?(n.dispatchEvent(gd),Ct.copy(n.object.position),N.copy(n.object.quaternion),it.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",ne),n.domElement.removeEventListener("pointerdown",U),n.domElement.removeEventListener("pointercancel",K),n.domElement.removeEventListener("wheel",lt),n.domElement.removeEventListener("pointermove",R),n.domElement.removeEventListener("pointerup",K),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Ot),n._domElementKeyEvents=null)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let o=r.NONE;const l=1e-6,u=new Zh,h=new Zh;let d=1;const p=new I,m=new Rt,g=new Rt,x=new Rt,b=new Rt,w=new Rt,v=new Rt,_=new Rt,S=new Rt,y=new Rt,T=new I,P=new Rt;let C=!1;const A=[],O={};let z=!1;function M(B){return B!==null?2*Math.PI/60*n.autoRotateSpeed*B:2*Math.PI/60/60*n.autoRotateSpeed}function L(B){const dt=Math.abs(B*.01);return Math.pow(.95,n.zoomSpeed*dt)}function V(B){h.theta-=B}function q(B){h.phi-=B}const F=function(){const B=new I;return function(_t,Ct){B.setFromMatrixColumn(Ct,0),B.multiplyScalar(-_t),p.add(B)}}(),G=function(){const B=new I;return function(_t,Ct){n.screenSpacePanning===!0?B.setFromMatrixColumn(Ct,1):(B.setFromMatrixColumn(Ct,0),B.crossVectors(n.object.up,B)),B.multiplyScalar(_t),p.add(B)}}(),H=function(){const B=new I;return function(_t,Ct){const N=n.domElement;if(n.object.isPerspectiveCamera){const it=n.object.position;B.copy(it).sub(n.target);let at=B.length();at*=Math.tan(n.object.fov/2*Math.PI/180),F(2*_t*at/N.clientHeight,n.object.matrix),G(2*Ct*at/N.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(F(_t*(n.object.right-n.object.left)/n.object.zoom/N.clientWidth,n.object.matrix),G(Ct*(n.object.top-n.object.bottom)/n.object.zoom/N.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function X(B){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?d/=B:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function et(B){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?d*=B:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function tt(B,dt){if(!n.zoomToCursor)return;C=!0;const _t=n.domElement.getBoundingClientRect(),Ct=B-_t.left,N=dt-_t.top,it=_t.width,at=_t.height;P.x=Ct/it*2-1,P.y=-(N/at)*2+1,T.set(P.x,P.y,1).unproject(n.object).sub(n.object.position).normalize()}function nt(B){return Math.max(n.minDistance,Math.min(n.maxDistance,B))}function st(B){m.set(B.clientX,B.clientY)}function pt(B){tt(B.clientX,B.clientX),_.set(B.clientX,B.clientY)}function vt(B){b.set(B.clientX,B.clientY)}function $(B){g.set(B.clientX,B.clientY),x.subVectors(g,m).multiplyScalar(n.rotateSpeed);const dt=n.domElement;V(2*Math.PI*x.x/dt.clientHeight),q(2*Math.PI*x.y/dt.clientHeight),m.copy(g),n.update()}function ct(B){S.set(B.clientX,B.clientY),y.subVectors(S,_),y.y>0?X(L(y.y)):y.y<0&&et(L(y.y)),_.copy(S),n.update()}function Mt(B){w.set(B.clientX,B.clientY),v.subVectors(w,b).multiplyScalar(n.panSpeed),H(v.x,v.y),b.copy(w),n.update()}function It(B){tt(B.clientX,B.clientY),B.deltaY<0?et(L(B.deltaY)):B.deltaY>0&&X(L(B.deltaY)),n.update()}function Ft(B){let dt=!1;switch(B.code){case n.keys.UP:B.ctrlKey||B.metaKey||B.shiftKey?q(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):H(0,n.keyPanSpeed),dt=!0;break;case n.keys.BOTTOM:B.ctrlKey||B.metaKey||B.shiftKey?q(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):H(0,-n.keyPanSpeed),dt=!0;break;case n.keys.LEFT:B.ctrlKey||B.metaKey||B.shiftKey?V(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):H(n.keyPanSpeed,0),dt=!0;break;case n.keys.RIGHT:B.ctrlKey||B.metaKey||B.shiftKey?V(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):H(-n.keyPanSpeed,0),dt=!0;break}dt&&(B.preventDefault(),n.update())}function Et(B){if(A.length===1)m.set(B.pageX,B.pageY);else{const dt=xt(B),_t=.5*(B.pageX+dt.x),Ct=.5*(B.pageY+dt.y);m.set(_t,Ct)}}function Wt(B){if(A.length===1)b.set(B.pageX,B.pageY);else{const dt=xt(B),_t=.5*(B.pageX+dt.x),Ct=.5*(B.pageY+dt.y);b.set(_t,Ct)}}function kt(B){const dt=xt(B),_t=B.pageX-dt.x,Ct=B.pageY-dt.y,N=Math.sqrt(_t*_t+Ct*Ct);_.set(0,N)}function Y(B){n.enableZoom&&kt(B),n.enablePan&&Wt(B)}function Ee(B){n.enableZoom&&kt(B),n.enableRotate&&Et(B)}function Lt(B){if(A.length==1)g.set(B.pageX,B.pageY);else{const _t=xt(B),Ct=.5*(B.pageX+_t.x),N=.5*(B.pageY+_t.y);g.set(Ct,N)}x.subVectors(g,m).multiplyScalar(n.rotateSpeed);const dt=n.domElement;V(2*Math.PI*x.x/dt.clientHeight),q(2*Math.PI*x.y/dt.clientHeight),m.copy(g)}function zt(B){if(A.length===1)w.set(B.pageX,B.pageY);else{const dt=xt(B),_t=.5*(B.pageX+dt.x),Ct=.5*(B.pageY+dt.y);w.set(_t,Ct)}v.subVectors(w,b).multiplyScalar(n.panSpeed),H(v.x,v.y),b.copy(w)}function Tt(B){const dt=xt(B),_t=B.pageX-dt.x,Ct=B.pageY-dt.y,N=Math.sqrt(_t*_t+Ct*Ct);S.set(0,N),y.set(0,Math.pow(S.y/_.y,n.zoomSpeed)),X(y.y),_.copy(S);const it=(B.pageX+dt.x)*.5,at=(B.pageY+dt.y)*.5;tt(it,at)}function pe(B){n.enableZoom&&Tt(B),n.enablePan&&zt(B)}function Gt(B){n.enableZoom&&Tt(B),n.enableRotate&&Lt(B)}function U(B){n.enabled!==!1&&(A.length===0&&(n.domElement.setPointerCapture(B.pointerId),n.domElement.addEventListener("pointermove",R),n.domElement.addEventListener("pointerup",K)),Zt(B),B.pointerType==="touch"?Vt(B):ht(B))}function R(B){n.enabled!==!1&&(B.pointerType==="touch"?rt(B):ot(B))}function K(B){switch(Ht(B),A.length){case 0:n.domElement.releasePointerCapture(B.pointerId),n.domElement.removeEventListener("pointermove",R),n.domElement.removeEventListener("pointerup",K),n.dispatchEvent(_d),o=r.NONE;break;case 1:const dt=A[0],_t=O[dt];Vt({pointerId:dt,pageX:_t.x,pageY:_t.y});break}}function ht(B){let dt;switch(B.button){case 0:dt=n.mouseButtons.LEFT;break;case 1:dt=n.mouseButtons.MIDDLE;break;case 2:dt=n.mouseButtons.RIGHT;break;default:dt=-1}switch(dt){case is.DOLLY:if(n.enableZoom===!1)return;pt(B),o=r.DOLLY;break;case is.ROTATE:if(B.ctrlKey||B.metaKey||B.shiftKey){if(n.enablePan===!1)return;vt(B),o=r.PAN}else{if(n.enableRotate===!1)return;st(B),o=r.ROTATE}break;case is.PAN:if(B.ctrlKey||B.metaKey||B.shiftKey){if(n.enableRotate===!1)return;st(B),o=r.ROTATE}else{if(n.enablePan===!1)return;vt(B),o=r.PAN}break;default:o=r.NONE}o!==r.NONE&&n.dispatchEvent(Pl)}function ot(B){switch(o){case r.ROTATE:if(n.enableRotate===!1)return;$(B);break;case r.DOLLY:if(n.enableZoom===!1)return;ct(B);break;case r.PAN:if(n.enablePan===!1)return;Mt(B);break}}function lt(B){n.enabled===!1||n.enableZoom===!1||o!==r.NONE||(B.preventDefault(),n.dispatchEvent(Pl),It(St(B)),n.dispatchEvent(_d))}function St(B){const dt=B.deltaMode,_t={clientX:B.clientX,clientY:B.clientY,deltaY:B.deltaY};switch(dt){case 1:_t.deltaY*=16;break;case 2:_t.deltaY*=100;break}return B.ctrlKey&&!z&&(_t.deltaY*=10),_t}function gt(B){B.key==="Control"&&(z=!0,n.domElement.getRootNode().addEventListener("keyup",bt,{passive:!0,capture:!0}))}function bt(B){B.key==="Control"&&(z=!1,n.domElement.getRootNode().removeEventListener("keyup",bt,{passive:!0,capture:!0}))}function Ot(B){n.enabled===!1||n.enablePan===!1||Ft(B)}function Vt(B){switch(At(B),A.length){case 1:switch(n.touches.ONE){case ss.ROTATE:if(n.enableRotate===!1)return;Et(B),o=r.TOUCH_ROTATE;break;case ss.PAN:if(n.enablePan===!1)return;Wt(B),o=r.TOUCH_PAN;break;default:o=r.NONE}break;case 2:switch(n.touches.TWO){case ss.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Y(B),o=r.TOUCH_DOLLY_PAN;break;case ss.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Ee(B),o=r.TOUCH_DOLLY_ROTATE;break;default:o=r.NONE}break;default:o=r.NONE}o!==r.NONE&&n.dispatchEvent(Pl)}function rt(B){switch(At(B),o){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;Lt(B),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;zt(B),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;pe(B),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Gt(B),n.update();break;default:o=r.NONE}}function ne(B){n.enabled!==!1&&B.preventDefault()}function Zt(B){A.push(B.pointerId)}function Ht(B){delete O[B.pointerId];for(let dt=0;dt<A.length;dt++)if(A[dt]==B.pointerId){A.splice(dt,1);return}}function At(B){let dt=O[B.pointerId];dt===void 0&&(dt=new Rt,O[B.pointerId]=dt),dt.set(B.pageX,B.pageY)}function xt(B){const dt=B.pointerId===A[0]?A[1]:A[0];return O[dt]}n.domElement.addEventListener("contextmenu",ne),n.domElement.addEventListener("pointerdown",U),n.domElement.addEventListener("pointercancel",K),n.domElement.addEventListener("wheel",lt,{passive:!1}),n.domElement.getRootNode().addEventListener("keydown",gt,{passive:!0,capture:!0}),this.update()}}const Oi=new jy,$e=new I,yi=new I,we=new We,xd={X:new I(1,0,0),Y:new I(0,1,0),Z:new I(0,0,1)},Rl={type:"change"},bd={type:"mouseDown"},yd={type:"mouseUp",mode:null},wd={type:"objectChange"};class lM extends Re{constructor(t,e){super(),e===void 0&&(console.warn('THREE.TransformControls: The second parameter "domElement" is now mandatory.'),e=document),this.isTransformControls=!0,this.visible=!1,this.domElement=e,this.domElement.style.touchAction="none";const n=new fM;this._gizmo=n,this.add(n);const r=new mM;this._plane=r,this.add(r);const o=this;function l(S,y){let T=y;Object.defineProperty(o,S,{get:function(){return T!==void 0?T:y},set:function(P){T!==P&&(T=P,r[S]=P,n[S]=P,o.dispatchEvent({type:S+"-changed",value:P}),o.dispatchEvent(Rl))}}),o[S]=y,r[S]=y,n[S]=y}l("camera",t),l("object",void 0),l("enabled",!0),l("axis",null),l("mode","translate"),l("translationSnap",null),l("rotationSnap",null),l("scaleSnap",null),l("space","world"),l("size",1),l("dragging",!1),l("showX",!0),l("showY",!0),l("showZ",!0);const u=new I,h=new I,d=new We,p=new We,m=new I,g=new We,x=new I,b=new I,w=new I,v=0,_=new I;l("worldPosition",u),l("worldPositionStart",h),l("worldQuaternion",d),l("worldQuaternionStart",p),l("cameraPosition",m),l("cameraQuaternion",g),l("pointStart",x),l("pointEnd",b),l("rotationAxis",w),l("rotationAngle",v),l("eye",_),this._offset=new I,this._startNorm=new I,this._endNorm=new I,this._cameraScale=new I,this._parentPosition=new I,this._parentQuaternion=new We,this._parentQuaternionInv=new We,this._parentScale=new I,this._worldScaleStart=new I,this._worldQuaternionInv=new We,this._worldScale=new I,this._positionStart=new I,this._quaternionStart=new We,this._scaleStart=new I,this._getPointer=cM.bind(this),this._onPointerDown=hM.bind(this),this._onPointerHover=uM.bind(this),this._onPointerMove=dM.bind(this),this._onPointerUp=pM.bind(this),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointermove",this._onPointerHover),this.domElement.addEventListener("pointerup",this._onPointerUp)}updateMatrixWorld(){this.object!==void 0&&(this.object.updateMatrixWorld(),this.object.parent===null?console.error("TransformControls: The attached 3D object must be a part of the scene graph."):this.object.parent.matrixWorld.decompose(this._parentPosition,this._parentQuaternion,this._parentScale),this.object.matrixWorld.decompose(this.worldPosition,this.worldQuaternion,this._worldScale),this._parentQuaternionInv.copy(this._parentQuaternion).invert(),this._worldQuaternionInv.copy(this.worldQuaternion).invert()),this.camera.updateMatrixWorld(),this.camera.matrixWorld.decompose(this.cameraPosition,this.cameraQuaternion,this._cameraScale),this.camera.isOrthographicCamera?this.camera.getWorldDirection(this.eye).negate():this.eye.copy(this.cameraPosition).sub(this.worldPosition).normalize(),super.updateMatrixWorld(this)}pointerHover(t){if(this.object===void 0||this.dragging===!0)return;Oi.setFromCamera(t,this.camera);const e=Ll(this._gizmo.picker[this.mode],Oi);e?this.axis=e.object.name:this.axis=null}pointerDown(t){if(!(this.object===void 0||this.dragging===!0||t.button!==0)&&this.axis!==null){Oi.setFromCamera(t,this.camera);const e=Ll(this._plane,Oi,!0);e&&(this.object.updateMatrixWorld(),this.object.parent.updateMatrixWorld(),this._positionStart.copy(this.object.position),this._quaternionStart.copy(this.object.quaternion),this._scaleStart.copy(this.object.scale),this.object.matrixWorld.decompose(this.worldPositionStart,this.worldQuaternionStart,this._worldScaleStart),this.pointStart.copy(e.point).sub(this.worldPositionStart)),this.dragging=!0,bd.mode=this.mode,this.dispatchEvent(bd)}}pointerMove(t){const e=this.axis,n=this.mode,r=this.object;let o=this.space;if(n==="scale"?o="local":(e==="E"||e==="XYZE"||e==="XYZ")&&(o="world"),r===void 0||e===null||this.dragging===!1||t.button!==-1)return;Oi.setFromCamera(t,this.camera);const l=Ll(this._plane,Oi,!0);if(!!l){if(this.pointEnd.copy(l.point).sub(this.worldPositionStart),n==="translate")this._offset.copy(this.pointEnd).sub(this.pointStart),o==="local"&&e!=="XYZ"&&this._offset.applyQuaternion(this._worldQuaternionInv),e.indexOf("X")===-1&&(this._offset.x=0),e.indexOf("Y")===-1&&(this._offset.y=0),e.indexOf("Z")===-1&&(this._offset.z=0),o==="local"&&e!=="XYZ"?this._offset.applyQuaternion(this._quaternionStart).divide(this._parentScale):this._offset.applyQuaternion(this._parentQuaternionInv).divide(this._parentScale),r.position.copy(this._offset).add(this._positionStart),this.translationSnap&&(o==="local"&&(r.position.applyQuaternion(we.copy(this._quaternionStart).invert()),e.search("X")!==-1&&(r.position.x=Math.round(r.position.x/this.translationSnap)*this.translationSnap),e.search("Y")!==-1&&(r.position.y=Math.round(r.position.y/this.translationSnap)*this.translationSnap),e.search("Z")!==-1&&(r.position.z=Math.round(r.position.z/this.translationSnap)*this.translationSnap),r.position.applyQuaternion(this._quaternionStart)),o==="world"&&(r.parent&&r.position.add($e.setFromMatrixPosition(r.parent.matrixWorld)),e.search("X")!==-1&&(r.position.x=Math.round(r.position.x/this.translationSnap)*this.translationSnap),e.search("Y")!==-1&&(r.position.y=Math.round(r.position.y/this.translationSnap)*this.translationSnap),e.search("Z")!==-1&&(r.position.z=Math.round(r.position.z/this.translationSnap)*this.translationSnap),r.parent&&r.position.sub($e.setFromMatrixPosition(r.parent.matrixWorld))));else if(n==="scale"){if(e.search("XYZ")!==-1){let u=this.pointEnd.length()/this.pointStart.length();this.pointEnd.dot(this.pointStart)<0&&(u*=-1),yi.set(u,u,u)}else $e.copy(this.pointStart),yi.copy(this.pointEnd),$e.applyQuaternion(this._worldQuaternionInv),yi.applyQuaternion(this._worldQuaternionInv),yi.divide($e),e.search("X")===-1&&(yi.x=1),e.search("Y")===-1&&(yi.y=1),e.search("Z")===-1&&(yi.z=1);r.scale.copy(this._scaleStart).multiply(yi),this.scaleSnap&&(e.search("X")!==-1&&(r.scale.x=Math.round(r.scale.x/this.scaleSnap)*this.scaleSnap||this.scaleSnap),e.search("Y")!==-1&&(r.scale.y=Math.round(r.scale.y/this.scaleSnap)*this.scaleSnap||this.scaleSnap),e.search("Z")!==-1&&(r.scale.z=Math.round(r.scale.z/this.scaleSnap)*this.scaleSnap||this.scaleSnap))}else if(n==="rotate"){this._offset.copy(this.pointEnd).sub(this.pointStart);const u=20/this.worldPosition.distanceTo($e.setFromMatrixPosition(this.camera.matrixWorld));let h=!1;e==="XYZE"?(this.rotationAxis.copy(this._offset).cross(this.eye).normalize(),this.rotationAngle=this._offset.dot($e.copy(this.rotationAxis).cross(this.eye))*u):(e==="X"||e==="Y"||e==="Z")&&(this.rotationAxis.copy(xd[e]),$e.copy(xd[e]),o==="local"&&$e.applyQuaternion(this.worldQuaternion),$e.cross(this.eye),$e.length()===0?h=!0:this.rotationAngle=this._offset.dot($e.normalize())*u),(e==="E"||h)&&(this.rotationAxis.copy(this.eye),this.rotationAngle=this.pointEnd.angleTo(this.pointStart),this._startNorm.copy(this.pointStart).normalize(),this._endNorm.copy(this.pointEnd).normalize(),this.rotationAngle*=this._endNorm.cross(this._startNorm).dot(this.eye)<0?1:-1),this.rotationSnap&&(this.rotationAngle=Math.round(this.rotationAngle/this.rotationSnap)*this.rotationSnap),o==="local"&&e!=="E"&&e!=="XYZE"?(r.quaternion.copy(this._quaternionStart),r.quaternion.multiply(we.setFromAxisAngle(this.rotationAxis,this.rotationAngle)).normalize()):(this.rotationAxis.applyQuaternion(this._parentQuaternionInv),r.quaternion.copy(we.setFromAxisAngle(this.rotationAxis,this.rotationAngle)),r.quaternion.multiply(this._quaternionStart).normalize())}this.dispatchEvent(Rl),this.dispatchEvent(wd)}}pointerUp(t){t.button===0&&(this.dragging&&this.axis!==null&&(yd.mode=this.mode,this.dispatchEvent(yd)),this.dragging=!1,this.axis=null)}dispose(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerHover),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.traverse(function(t){t.geometry&&t.geometry.dispose(),t.material&&t.material.dispose()})}attach(t){return this.object=t,this.visible=!0,this}detach(){return this.object=void 0,this.visible=!1,this.axis=null,this}reset(){!this.enabled||this.dragging&&(this.object.position.copy(this._positionStart),this.object.quaternion.copy(this._quaternionStart),this.object.scale.copy(this._scaleStart),this.dispatchEvent(Rl),this.dispatchEvent(wd),this.pointStart.copy(this.pointEnd))}getRaycaster(){return Oi}getMode(){return this.mode}setMode(t){this.mode=t}setTranslationSnap(t){this.translationSnap=t}setRotationSnap(t){this.rotationSnap=t}setScaleSnap(t){this.scaleSnap=t}setSize(t){this.size=t}setSpace(t){this.space=t}}function cM(i){if(this.domElement.ownerDocument.pointerLockElement)return{x:0,y:0,button:i.button};{const t=this.domElement.getBoundingClientRect();return{x:(i.clientX-t.left)/t.width*2-1,y:-(i.clientY-t.top)/t.height*2+1,button:i.button}}}function uM(i){if(!!this.enabled)switch(i.pointerType){case"mouse":case"pen":this.pointerHover(this._getPointer(i));break}}function hM(i){!this.enabled||(document.pointerLockElement||this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.pointerHover(this._getPointer(i)),this.pointerDown(this._getPointer(i)))}function dM(i){!this.enabled||this.pointerMove(this._getPointer(i))}function pM(i){!this.enabled||(this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.pointerUp(this._getPointer(i)))}function Ll(i,t,e){const n=t.intersectObject(i,!0);for(let r=0;r<n.length;r++)if(n[r].object.visible||e)return n[r];return!1}const Oo=new Fr,fe=new I(0,1,0),Md=new I(0,0,0),Ed=new ce,Bo=new We,Go=new We,Nn=new I,Sd=new ce,Tr=new I(1,0,0),ki=new I(0,1,0),Ar=new I(0,0,1),ko=new I,Mr=new I,Er=new I;class fM extends Re{constructor(){super(),this.isTransformControlsGizmo=!0,this.type="TransformControlsGizmo";const t=new Or({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),e=new lp({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),n=t.clone();n.opacity=.15;const r=e.clone();r.opacity=.5;const o=t.clone();o.color.setHex(16711680);const l=t.clone();l.color.setHex(65280);const u=t.clone();u.color.setHex(255);const h=t.clone();h.color.setHex(16711680),h.opacity=.5;const d=t.clone();d.color.setHex(65280),d.opacity=.5;const p=t.clone();p.color.setHex(255),p.opacity=.5;const m=t.clone();m.opacity=.25;const g=t.clone();g.color.setHex(16776960),g.opacity=.25,t.clone().color.setHex(16776960);const b=t.clone();b.color.setHex(7895160);const w=new Ke(0,.04,.1,12);w.translate(0,.05,0);const v=new ue(.08,.08,.08);v.translate(0,.04,0);const _=new Je;_.setAttribute("position",new ve([0,0,0,1,0,0],3));const S=new Ke(.0075,.0075,.5,3);S.translate(0,.25,0);function y(G,H){const X=new Hi(G,.0075,3,64,H*Math.PI*2);return X.rotateY(Math.PI/2),X.rotateX(Math.PI/2),X}function T(){const G=new Je;return G.setAttribute("position",new ve([0,0,0,1,1,1],3)),G}const P={X:[[new ft(w,o),[.5,0,0],[0,0,-Math.PI/2]],[new ft(w,o),[-.5,0,0],[0,0,Math.PI/2]],[new ft(S,o),[0,0,0],[0,0,-Math.PI/2]]],Y:[[new ft(w,l),[0,.5,0]],[new ft(w,l),[0,-.5,0],[Math.PI,0,0]],[new ft(S,l)]],Z:[[new ft(w,u),[0,0,.5],[Math.PI/2,0,0]],[new ft(w,u),[0,0,-.5],[-Math.PI/2,0,0]],[new ft(S,u),null,[Math.PI/2,0,0]]],XYZ:[[new ft(new Fs(.1,0),m.clone()),[0,0,0]]],XY:[[new ft(new ue(.15,.15,.01),p.clone()),[.15,.15,0]]],YZ:[[new ft(new ue(.15,.15,.01),h.clone()),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new ft(new ue(.15,.15,.01),d.clone()),[.15,0,.15],[-Math.PI/2,0,0]]]},C={X:[[new ft(new Ke(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new ft(new Ke(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new ft(new Ke(.2,0,.6,4),n),[0,.3,0]],[new ft(new Ke(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new ft(new Ke(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new ft(new Ke(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XYZ:[[new ft(new Fs(.2,0),n)]],XY:[[new ft(new ue(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new ft(new ue(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new ft(new ue(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]]},A={START:[[new ft(new Fs(.01,2),r),null,null,null,"helper"]],END:[[new ft(new Fs(.01,2),r),null,null,null,"helper"]],DELTA:[[new xi(T(),r),null,null,null,"helper"]],X:[[new xi(_,r.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new xi(_,r.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new xi(_,r.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]},O={XYZE:[[new ft(y(.5,1),b),null,[0,Math.PI/2,0]]],X:[[new ft(y(.5,.5),o)]],Y:[[new ft(y(.5,.5),l),null,[0,0,-Math.PI/2]]],Z:[[new ft(y(.5,.5),u),null,[0,Math.PI/2,0]]],E:[[new ft(y(.75,1),g),null,[0,Math.PI/2,0]]]},z={AXIS:[[new xi(_,r.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]]},M={XYZE:[[new ft(new la(.25,10,8),n)]],X:[[new ft(new Hi(.5,.1,4,24),n),[0,0,0],[0,-Math.PI/2,-Math.PI/2]]],Y:[[new ft(new Hi(.5,.1,4,24),n),[0,0,0],[Math.PI/2,0,0]]],Z:[[new ft(new Hi(.5,.1,4,24),n),[0,0,0],[0,0,-Math.PI/2]]],E:[[new ft(new Hi(.75,.1,2,24),n)]]},L={X:[[new ft(v,o),[.5,0,0],[0,0,-Math.PI/2]],[new ft(S,o),[0,0,0],[0,0,-Math.PI/2]],[new ft(v,o),[-.5,0,0],[0,0,Math.PI/2]]],Y:[[new ft(v,l),[0,.5,0]],[new ft(S,l)],[new ft(v,l),[0,-.5,0],[0,0,Math.PI]]],Z:[[new ft(v,u),[0,0,.5],[Math.PI/2,0,0]],[new ft(S,u),[0,0,0],[Math.PI/2,0,0]],[new ft(v,u),[0,0,-.5],[-Math.PI/2,0,0]]],XY:[[new ft(new ue(.15,.15,.01),p),[.15,.15,0]]],YZ:[[new ft(new ue(.15,.15,.01),h),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new ft(new ue(.15,.15,.01),d),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new ft(new ue(.1,.1,.1),m.clone())]]},V={X:[[new ft(new Ke(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new ft(new Ke(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new ft(new Ke(.2,0,.6,4),n),[0,.3,0]],[new ft(new Ke(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new ft(new Ke(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new ft(new Ke(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XY:[[new ft(new ue(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new ft(new ue(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new ft(new ue(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new ft(new ue(.2,.2,.2),n),[0,0,0]]]},q={X:[[new xi(_,r.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new xi(_,r.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new xi(_,r.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]};function F(G){const H=new Re;for(const X in G)for(let et=G[X].length;et--;){const tt=G[X][et][0].clone(),nt=G[X][et][1],st=G[X][et][2],pt=G[X][et][3],vt=G[X][et][4];tt.name=X,tt.tag=vt,nt&&tt.position.set(nt[0],nt[1],nt[2]),st&&tt.rotation.set(st[0],st[1],st[2]),pt&&tt.scale.set(pt[0],pt[1],pt[2]),tt.updateMatrix();const $=tt.geometry.clone();$.applyMatrix4(tt.matrix),tt.geometry=$,tt.renderOrder=1/0,tt.position.set(0,0,0),tt.rotation.set(0,0,0),tt.scale.set(1,1,1),H.add(tt)}return H}this.gizmo={},this.picker={},this.helper={},this.add(this.gizmo.translate=F(P)),this.add(this.gizmo.rotate=F(O)),this.add(this.gizmo.scale=F(L)),this.add(this.picker.translate=F(C)),this.add(this.picker.rotate=F(M)),this.add(this.picker.scale=F(V)),this.add(this.helper.translate=F(A)),this.add(this.helper.rotate=F(z)),this.add(this.helper.scale=F(q)),this.picker.translate.visible=!1,this.picker.rotate.visible=!1,this.picker.scale.visible=!1}updateMatrixWorld(t){const n=(this.mode==="scale"?"local":this.space)==="local"?this.worldQuaternion:Go;this.gizmo.translate.visible=this.mode==="translate",this.gizmo.rotate.visible=this.mode==="rotate",this.gizmo.scale.visible=this.mode==="scale",this.helper.translate.visible=this.mode==="translate",this.helper.rotate.visible=this.mode==="rotate",this.helper.scale.visible=this.mode==="scale";let r=[];r=r.concat(this.picker[this.mode].children),r=r.concat(this.gizmo[this.mode].children),r=r.concat(this.helper[this.mode].children);for(let o=0;o<r.length;o++){const l=r[o];l.visible=!0,l.rotation.set(0,0,0),l.position.copy(this.worldPosition);let u;if(this.camera.isOrthographicCamera?u=(this.camera.top-this.camera.bottom)/this.camera.zoom:u=this.worldPosition.distanceTo(this.cameraPosition)*Math.min(1.9*Math.tan(Math.PI*this.camera.fov/360)/this.camera.zoom,7),l.scale.set(1,1,1).multiplyScalar(u*this.size/4),l.tag==="helper"){l.visible=!1,l.name==="AXIS"?(l.visible=!!this.axis,this.axis==="X"&&(we.setFromEuler(Oo.set(0,0,0)),l.quaternion.copy(n).multiply(we),Math.abs(fe.copy(Tr).applyQuaternion(n).dot(this.eye))>.9&&(l.visible=!1)),this.axis==="Y"&&(we.setFromEuler(Oo.set(0,0,Math.PI/2)),l.quaternion.copy(n).multiply(we),Math.abs(fe.copy(ki).applyQuaternion(n).dot(this.eye))>.9&&(l.visible=!1)),this.axis==="Z"&&(we.setFromEuler(Oo.set(0,Math.PI/2,0)),l.quaternion.copy(n).multiply(we),Math.abs(fe.copy(Ar).applyQuaternion(n).dot(this.eye))>.9&&(l.visible=!1)),this.axis==="XYZE"&&(we.setFromEuler(Oo.set(0,Math.PI/2,0)),fe.copy(this.rotationAxis),l.quaternion.setFromRotationMatrix(Ed.lookAt(Md,fe,ki)),l.quaternion.multiply(we),l.visible=this.dragging),this.axis==="E"&&(l.visible=!1)):l.name==="START"?(l.position.copy(this.worldPositionStart),l.visible=this.dragging):l.name==="END"?(l.position.copy(this.worldPosition),l.visible=this.dragging):l.name==="DELTA"?(l.position.copy(this.worldPositionStart),l.quaternion.copy(this.worldQuaternionStart),$e.set(1e-10,1e-10,1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1),$e.applyQuaternion(this.worldQuaternionStart.clone().invert()),l.scale.copy($e),l.visible=this.dragging):(l.quaternion.copy(n),this.dragging?l.position.copy(this.worldPositionStart):l.position.copy(this.worldPosition),this.axis&&(l.visible=this.axis.search(l.name)!==-1));continue}l.quaternion.copy(n),this.mode==="translate"||this.mode==="scale"?(l.name==="X"&&Math.abs(fe.copy(Tr).applyQuaternion(n).dot(this.eye))>.99&&(l.scale.set(1e-10,1e-10,1e-10),l.visible=!1),l.name==="Y"&&Math.abs(fe.copy(ki).applyQuaternion(n).dot(this.eye))>.99&&(l.scale.set(1e-10,1e-10,1e-10),l.visible=!1),l.name==="Z"&&Math.abs(fe.copy(Ar).applyQuaternion(n).dot(this.eye))>.99&&(l.scale.set(1e-10,1e-10,1e-10),l.visible=!1),l.name==="XY"&&Math.abs(fe.copy(Ar).applyQuaternion(n).dot(this.eye))<.2&&(l.scale.set(1e-10,1e-10,1e-10),l.visible=!1),l.name==="YZ"&&Math.abs(fe.copy(Tr).applyQuaternion(n).dot(this.eye))<.2&&(l.scale.set(1e-10,1e-10,1e-10),l.visible=!1),l.name==="XZ"&&Math.abs(fe.copy(ki).applyQuaternion(n).dot(this.eye))<.2&&(l.scale.set(1e-10,1e-10,1e-10),l.visible=!1)):this.mode==="rotate"&&(Bo.copy(n),fe.copy(this.eye).applyQuaternion(we.copy(n).invert()),l.name.search("E")!==-1&&l.quaternion.setFromRotationMatrix(Ed.lookAt(this.eye,Md,ki)),l.name==="X"&&(we.setFromAxisAngle(Tr,Math.atan2(-fe.y,fe.z)),we.multiplyQuaternions(Bo,we),l.quaternion.copy(we)),l.name==="Y"&&(we.setFromAxisAngle(ki,Math.atan2(fe.x,fe.z)),we.multiplyQuaternions(Bo,we),l.quaternion.copy(we)),l.name==="Z"&&(we.setFromAxisAngle(Ar,Math.atan2(fe.y,fe.x)),we.multiplyQuaternions(Bo,we),l.quaternion.copy(we))),l.visible=l.visible&&(l.name.indexOf("X")===-1||this.showX),l.visible=l.visible&&(l.name.indexOf("Y")===-1||this.showY),l.visible=l.visible&&(l.name.indexOf("Z")===-1||this.showZ),l.visible=l.visible&&(l.name.indexOf("E")===-1||this.showX&&this.showY&&this.showZ),l.material._color=l.material._color||l.material.color.clone(),l.material._opacity=l.material._opacity||l.material.opacity,l.material.color.copy(l.material._color),l.material.opacity=l.material._opacity,this.enabled&&this.axis&&(l.name===this.axis||this.axis.split("").some(function(h){return l.name===h}))&&(l.material.color.setHex(16776960),l.material.opacity=1)}super.updateMatrixWorld(t)}}class mM extends ft{constructor(){super(new ii(1e5,1e5,2,2),new Or({visible:!1,wireframe:!0,side:un,transparent:!0,opacity:.1,toneMapped:!1})),this.isTransformControlsPlane=!0,this.type="TransformControlsPlane"}updateMatrixWorld(t){let e=this.space;switch(this.position.copy(this.worldPosition),this.mode==="scale"&&(e="local"),ko.copy(Tr).applyQuaternion(e==="local"?this.worldQuaternion:Go),Mr.copy(ki).applyQuaternion(e==="local"?this.worldQuaternion:Go),Er.copy(Ar).applyQuaternion(e==="local"?this.worldQuaternion:Go),fe.copy(Mr),this.mode){case"translate":case"scale":switch(this.axis){case"X":fe.copy(this.eye).cross(ko),Nn.copy(ko).cross(fe);break;case"Y":fe.copy(this.eye).cross(Mr),Nn.copy(Mr).cross(fe);break;case"Z":fe.copy(this.eye).cross(Er),Nn.copy(Er).cross(fe);break;case"XY":Nn.copy(Er);break;case"YZ":Nn.copy(ko);break;case"XZ":fe.copy(Er),Nn.copy(Mr);break;case"XYZ":case"E":Nn.set(0,0,0);break}break;case"rotate":default:Nn.set(0,0,0)}Nn.length()===0?this.quaternion.copy(this.cameraQuaternion):(Sd.lookAt($e.set(0,0,0),Nn,fe),this.quaternion.setFromRotationMatrix(Sd)),super.updateMatrixWorld(t)}}var gM=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},Jl={exports:{}};/*! Tweakpane 3.1.0 (c) 2016 cocopon, licensed under the MIT license. */(function(i,t){(function(e,n){n(t)})(gM,function(e){class n{constructor(s){const[a,f]=s.split("-"),E=a.split(".");this.major=parseInt(E[0],10),this.minor=parseInt(E[1],10),this.patch=parseInt(E[2],10),this.prerelease=f!=null?f:null}toString(){const s=[this.major,this.minor,this.patch].join(".");return this.prerelease!==null?[s,this.prerelease].join("-"):s}}class r{constructor(s){this.controller_=s}get element(){return this.controller_.view.element}get disabled(){return this.controller_.viewProps.get("disabled")}set disabled(s){this.controller_.viewProps.set("disabled",s)}get hidden(){return this.controller_.viewProps.get("hidden")}set hidden(s){this.controller_.viewProps.set("hidden",s)}dispose(){this.controller_.viewProps.set("disposed",!0)}}class o{constructor(s){this.target=s}}class l extends o{constructor(s,a,f,E){super(s),this.value=a,this.presetKey=f,this.last=E!=null?E:!0}}class u extends o{constructor(s,a,f){super(s),this.value=a,this.presetKey=f}}class h extends o{constructor(s,a){super(s),this.expanded=a}}class d extends o{constructor(s,a){super(s),this.index=a}}function p(c){return c}function m(c){return c==null}function g(c,s){if(c.length!==s.length)return!1;for(let a=0;a<c.length;a++)if(c[a]!==s[a])return!1;return!0}const x={alreadydisposed:()=>"View has been already disposed",invalidparams:c=>`Invalid parameters for '${c.name}'`,nomatchingcontroller:c=>`No matching controller for '${c.key}'`,nomatchingview:c=>`No matching view for '${JSON.stringify(c.params)}'`,notbindable:()=>"Value is not bindable",propertynotfound:c=>`Property '${c.name}' not found`,shouldneverhappen:()=>"This error should never happen"};class b{constructor(s){var a;this.message=(a=x[s.type](s.context))!==null&&a!==void 0?a:"Unexpected error",this.name=this.constructor.name,this.stack=new Error(this.message).stack,this.type=s.type}static alreadyDisposed(){return new b({type:"alreadydisposed"})}static notBindable(){return new b({type:"notbindable"})}static propertyNotFound(s){return new b({type:"propertynotfound",context:{name:s}})}static shouldNeverHappen(){return new b({type:"shouldneverhappen"})}}class w{constructor(s,a,f){this.obj_=s,this.key_=a,this.presetKey_=f!=null?f:a}static isBindable(s){return!(s===null||typeof s!="object")}get key(){return this.key_}get presetKey(){return this.presetKey_}read(){return this.obj_[this.key_]}write(s){this.obj_[this.key_]=s}writeProperty(s,a){const f=this.read();if(!w.isBindable(f))throw b.notBindable();if(!(s in f))throw b.propertyNotFound(s);f[s]=a}}class v extends r{get label(){return this.controller_.props.get("label")}set label(s){this.controller_.props.set("label",s)}get title(){var s;return(s=this.controller_.valueController.props.get("title"))!==null&&s!==void 0?s:""}set title(s){this.controller_.valueController.props.set("title",s)}on(s,a){const f=a.bind(this);return this.controller_.valueController.emitter.on(s,()=>{f(new o(this))}),this}}class _{constructor(){this.observers_={}}on(s,a){let f=this.observers_[s];return f||(f=this.observers_[s]=[]),f.push({handler:a}),this}off(s,a){const f=this.observers_[s];return f&&(this.observers_[s]=f.filter(E=>E.handler!==a)),this}emit(s,a){const f=this.observers_[s];!f||f.forEach(E=>{E.handler(a)})}}const S="tp";function y(c){return(a,f)=>[S,"-",c,"v",a?`_${a}`:"",f?`-${f}`:""].join("")}function T(c,s){return a=>s(c(a))}function P(c){return c.rawValue}function C(c,s){c.emitter.on("change",T(P,s)),s(c.rawValue)}function A(c,s,a){C(c.value(s),a)}function O(c,s,a){a?c.classList.add(s):c.classList.remove(s)}function z(c,s){return a=>{O(c,s,a)}}function M(c,s){C(c,a=>{s.textContent=a!=null?a:""})}const L=y("btn");class V{constructor(s,a){this.element=s.createElement("div"),this.element.classList.add(L()),a.viewProps.bindClassModifiers(this.element);const f=s.createElement("button");f.classList.add(L("b")),a.viewProps.bindDisabled(f),this.element.appendChild(f),this.buttonElement=f;const E=s.createElement("div");E.classList.add(L("t")),M(a.props.value("title"),E),this.buttonElement.appendChild(E)}}class q{constructor(s,a){this.emitter=new _,this.onClick_=this.onClick_.bind(this),this.props=a.props,this.viewProps=a.viewProps,this.view=new V(s,{props:this.props,viewProps:this.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}onClick_(){this.emitter.emit("click",{sender:this})}}class F{constructor(s,a){var f;this.constraint_=a==null?void 0:a.constraint,this.equals_=(f=a==null?void 0:a.equals)!==null&&f!==void 0?f:(E,k)=>E===k,this.emitter=new _,this.rawValue_=s}get constraint(){return this.constraint_}get rawValue(){return this.rawValue_}set rawValue(s){this.setRawValue(s,{forceEmit:!1,last:!0})}setRawValue(s,a){const f=a!=null?a:{forceEmit:!1,last:!0},E=this.constraint_?this.constraint_.constrain(s):s;!!this.equals_(this.rawValue_,E)&&!f.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.rawValue_=E,this.emitter.emit("change",{options:f,rawValue:E,sender:this}))}}class G{constructor(s){this.emitter=new _,this.value_=s}get rawValue(){return this.value_}set rawValue(s){this.setRawValue(s,{forceEmit:!1,last:!0})}setRawValue(s,a){const f=a!=null?a:{forceEmit:!1,last:!0};this.value_===s&&!f.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.value_=s,this.emitter.emit("change",{options:f,rawValue:this.value_,sender:this}))}}function H(c,s){const a=s==null?void 0:s.constraint,f=s==null?void 0:s.equals;return!a&&!f?new G(c):new F(c,s)}class X{constructor(s){this.emitter=new _,this.valMap_=s;for(const a in this.valMap_)this.valMap_[a].emitter.on("change",()=>{this.emitter.emit("change",{key:a,sender:this})})}static createCore(s){return Object.keys(s).reduce((f,E)=>Object.assign(f,{[E]:H(s[E])}),{})}static fromObject(s){const a=this.createCore(s);return new X(a)}get(s){return this.valMap_[s].rawValue}set(s,a){this.valMap_[s].rawValue=a}value(s){return this.valMap_[s]}}function et(c,s){const f=Object.keys(s).reduce((E,k)=>{if(E===void 0)return;const W=s[k],ut=W(c[k]);return ut.succeeded?Object.assign(Object.assign({},E),{[k]:ut.value}):void 0},{});return f}function tt(c,s){return c.reduce((a,f)=>{if(a===void 0)return;const E=s(f);if(!(!E.succeeded||E.value===void 0))return[...a,E.value]},[])}function nt(c){return c===null?!1:typeof c=="object"}function st(c){return s=>a=>{if(!s&&a===void 0)return{succeeded:!1,value:void 0};if(s&&a===void 0)return{succeeded:!0,value:void 0};const f=c(a);return f!==void 0?{succeeded:!0,value:f}:{succeeded:!1,value:void 0}}}function pt(c){return{custom:s=>st(s)(c),boolean:st(s=>typeof s=="boolean"?s:void 0)(c),number:st(s=>typeof s=="number"?s:void 0)(c),string:st(s=>typeof s=="string"?s:void 0)(c),function:st(s=>typeof s=="function"?s:void 0)(c),constant:s=>st(a=>a===s?s:void 0)(c),raw:st(s=>s)(c),object:s=>st(a=>{if(!!nt(a))return et(a,s)})(c),array:s=>st(a=>{if(!!Array.isArray(a))return tt(a,s)})(c)}}const vt={optional:pt(!0),required:pt(!1)};function $(c,s){const a=vt.required.object(s)(c);return a.succeeded?a.value:void 0}function ct(c){return c&&c.parentElement&&c.parentElement.removeChild(c),null}function Mt(){return["veryfirst","first","last","verylast"]}const It=y(""),Ft={veryfirst:"vfst",first:"fst",last:"lst",verylast:"vlst"};class Et{constructor(s){this.parent_=null,this.blade=s.blade,this.view=s.view,this.viewProps=s.viewProps;const a=this.view.element;this.blade.value("positions").emitter.on("change",()=>{Mt().forEach(f=>{a.classList.remove(It(void 0,Ft[f]))}),this.blade.get("positions").forEach(f=>{a.classList.add(It(void 0,Ft[f]))})}),this.viewProps.handleDispose(()=>{ct(a)})}get parent(){return this.parent_}}const Wt="http://www.w3.org/2000/svg";function kt(c){c.offsetHeight}function Y(c,s){const a=c.style.transition;c.style.transition="none",s(),c.style.transition=a}function Ee(c){return c.ontouchstart!==void 0}function Lt(){return new Function("return this")()}function zt(){return Lt().document}function Tt(c){const s=c.ownerDocument.defaultView;return s&&"document"in s?c.getContext("2d"):null}const pe={check:'<path d="M2 8l4 4l8 -8"/>',dropdown:'<path d="M5 7h6l-3 3 z"/>',p2dpad:'<path d="M8 4v8"/><path d="M4 8h8"/><circle cx="12" cy="12" r="1.2"/>'};function Gt(c,s){const a=c.createElementNS(Wt,"svg");return a.innerHTML=pe[s],a}function U(c,s,a){c.insertBefore(s,c.children[a])}function R(c){c.parentElement&&c.parentElement.removeChild(c)}function K(c){for(;c.children.length>0;)c.removeChild(c.children[0])}function ht(c){for(;c.childNodes.length>0;)c.removeChild(c.childNodes[0])}function ot(c){return c.relatedTarget?c.relatedTarget:"explicitOriginalTarget"in c?c.explicitOriginalTarget:null}const lt=y("lbl");function St(c,s){const a=c.createDocumentFragment();return s.split(`
`).map(E=>c.createTextNode(E)).forEach((E,k)=>{k>0&&a.appendChild(c.createElement("br")),a.appendChild(E)}),a}class gt{constructor(s,a){this.element=s.createElement("div"),this.element.classList.add(lt()),a.viewProps.bindClassModifiers(this.element);const f=s.createElement("div");f.classList.add(lt("l")),A(a.props,"label",k=>{m(k)?this.element.classList.add(lt(void 0,"nol")):(this.element.classList.remove(lt(void 0,"nol")),ht(f),f.appendChild(St(s,k)))}),this.element.appendChild(f),this.labelElement=f;const E=s.createElement("div");E.classList.add(lt("v")),this.element.appendChild(E),this.valueElement=E}}class bt extends Et{constructor(s,a){const f=a.valueController.viewProps;super(Object.assign(Object.assign({},a),{view:new gt(s,{props:a.props,viewProps:f}),viewProps:f})),this.props=a.props,this.valueController=a.valueController,this.view.valueElement.appendChild(this.valueController.view.element)}}const Ot={id:"button",type:"blade",accept(c){const s=vt,a=$(c,{title:s.required.string,view:s.required.constant("button"),label:s.optional.string});return a?{params:a}:null},controller(c){return new bt(c.document,{blade:c.blade,props:X.fromObject({label:c.params.label}),valueController:new q(c.document,{props:X.fromObject({title:c.params.title}),viewProps:c.viewProps})})},api(c){return!(c.controller instanceof bt)||!(c.controller.valueController instanceof q)?null:new v(c.controller)}};class Vt extends Et{constructor(s){super(s),this.value=s.value}}function rt(){return new X({positions:H([],{equals:g})})}class ne extends X{constructor(s){super(s)}static create(s){const a={completed:!0,expanded:s,expandedHeight:null,shouldFixHeight:!1,temporaryExpanded:null},f=X.createCore(a);return new ne(f)}get styleExpanded(){var s;return(s=this.get("temporaryExpanded"))!==null&&s!==void 0?s:this.get("expanded")}get styleHeight(){if(!this.styleExpanded)return"0";const s=this.get("expandedHeight");return this.get("shouldFixHeight")&&!m(s)?`${s}px`:"auto"}bindExpandedClass(s,a){const f=()=>{this.styleExpanded?s.classList.add(a):s.classList.remove(a)};A(this,"expanded",f),A(this,"temporaryExpanded",f)}cleanUpTransition(){this.set("shouldFixHeight",!1),this.set("expandedHeight",null),this.set("completed",!0)}}function Zt(c,s){let a=0;return Y(s,()=>{c.set("expandedHeight",null),c.set("temporaryExpanded",!0),kt(s),a=s.clientHeight,c.set("temporaryExpanded",null),kt(s)}),a}function Ht(c,s){s.style.height=c.styleHeight}function At(c,s){c.value("expanded").emitter.on("beforechange",()=>{c.set("completed",!1),m(c.get("expandedHeight"))&&c.set("expandedHeight",Zt(c,s)),c.set("shouldFixHeight",!0),kt(s)}),c.emitter.on("change",()=>{Ht(c,s)}),Ht(c,s),s.addEventListener("transitionend",a=>{a.propertyName==="height"&&c.cleanUpTransition()})}class xt extends r{constructor(s,a){super(s),this.rackApi_=a}}function Yt(c,s){return c.addBlade(Object.assign(Object.assign({},s),{view:"button"}))}function B(c,s){return c.addBlade(Object.assign(Object.assign({},s),{view:"folder"}))}function dt(c,s){const a=s!=null?s:{};return c.addBlade(Object.assign(Object.assign({},a),{view:"separator"}))}function _t(c,s){return c.addBlade(Object.assign(Object.assign({},s),{view:"tab"}))}class Ct{constructor(s){this.emitter=new _,this.items_=[],this.cache_=new Set,this.onSubListAdd_=this.onSubListAdd_.bind(this),this.onSubListRemove_=this.onSubListRemove_.bind(this),this.extract_=s}get items(){return this.items_}allItems(){return Array.from(this.cache_)}find(s){for(const a of this.allItems())if(s(a))return a;return null}includes(s){return this.cache_.has(s)}add(s,a){if(this.includes(s))throw b.shouldNeverHappen();const f=a!==void 0?a:this.items_.length;this.items_.splice(f,0,s),this.cache_.add(s);const E=this.extract_(s);E&&(E.emitter.on("add",this.onSubListAdd_),E.emitter.on("remove",this.onSubListRemove_),E.allItems().forEach(k=>{this.cache_.add(k)})),this.emitter.emit("add",{index:f,item:s,root:this,target:this})}remove(s){const a=this.items_.indexOf(s);if(a<0)return;this.items_.splice(a,1),this.cache_.delete(s);const f=this.extract_(s);f&&(f.emitter.off("add",this.onSubListAdd_),f.emitter.off("remove",this.onSubListRemove_)),this.emitter.emit("remove",{index:a,item:s,root:this,target:this})}onSubListAdd_(s){this.cache_.add(s.item),this.emitter.emit("add",{index:s.index,item:s.item,root:this,target:s.target})}onSubListRemove_(s){this.cache_.delete(s.item),this.emitter.emit("remove",{index:s.index,item:s.item,root:this,target:s.target})}}class N extends r{constructor(s){super(s),this.onBindingChange_=this.onBindingChange_.bind(this),this.emitter_=new _,this.controller_.binding.emitter.on("change",this.onBindingChange_)}get label(){return this.controller_.props.get("label")}set label(s){this.controller_.props.set("label",s)}on(s,a){const f=a.bind(this);return this.emitter_.on(s,E=>{f(E.event)}),this}refresh(){this.controller_.binding.read()}onBindingChange_(s){const a=s.sender.target.read();this.emitter_.emit("change",{event:new l(this,a,this.controller_.binding.target.presetKey,s.options.last)})}}class it extends bt{constructor(s,a){super(s,a),this.binding=a.binding}}class at extends r{constructor(s){super(s),this.onBindingUpdate_=this.onBindingUpdate_.bind(this),this.emitter_=new _,this.controller_.binding.emitter.on("update",this.onBindingUpdate_)}get label(){return this.controller_.props.get("label")}set label(s){this.controller_.props.set("label",s)}on(s,a){const f=a.bind(this);return this.emitter_.on(s,E=>{f(E.event)}),this}refresh(){this.controller_.binding.read()}onBindingUpdate_(s){const a=s.sender.target.read();this.emitter_.emit("update",{event:new u(this,a,this.controller_.binding.target.presetKey)})}}class wt extends bt{constructor(s,a){super(s,a),this.binding=a.binding,this.viewProps.bindDisabled(this.binding.ticker),this.viewProps.handleDispose(()=>{this.binding.dispose()})}}function Ut(c){return c instanceof oe?c.apiSet_:c instanceof xt?c.rackApi_.apiSet_:null}function te(c,s){const a=c.find(f=>f.controller_===s);if(!a)throw b.shouldNeverHappen();return a}function Jt(c,s,a){if(!w.isBindable(c))throw b.notBindable();return new w(c,s,a)}class oe extends r{constructor(s,a){super(s),this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this),this.onRackInputChange_=this.onRackInputChange_.bind(this),this.onRackMonitorUpdate_=this.onRackMonitorUpdate_.bind(this),this.emitter_=new _,this.apiSet_=new Ct(Ut),this.pool_=a;const f=this.controller_.rack;f.emitter.on("add",this.onRackAdd_),f.emitter.on("remove",this.onRackRemove_),f.emitter.on("inputchange",this.onRackInputChange_),f.emitter.on("monitorupdate",this.onRackMonitorUpdate_),f.children.forEach(E=>{this.setUpApi_(E)})}get children(){return this.controller_.rack.children.map(s=>te(this.apiSet_,s))}addInput(s,a,f){const E=f!=null?f:{},k=this.controller_.view.element.ownerDocument,W=this.pool_.createInput(k,Jt(s,a,E.presetKey),E),ut=new N(W);return this.add(ut,E.index)}addMonitor(s,a,f){const E=f!=null?f:{},k=this.controller_.view.element.ownerDocument,W=this.pool_.createMonitor(k,Jt(s,a),E),ut=new at(W);return this.add(ut,E.index)}addFolder(s){return B(this,s)}addButton(s){return Yt(this,s)}addSeparator(s){return dt(this,s)}addTab(s){return _t(this,s)}add(s,a){this.controller_.rack.add(s.controller_,a);const f=this.apiSet_.find(E=>E.controller_===s.controller_);return f&&this.apiSet_.remove(f),this.apiSet_.add(s),s}remove(s){this.controller_.rack.remove(s.controller_)}addBlade(s){const a=this.controller_.view.element.ownerDocument,f=this.pool_.createBlade(a,s),E=this.pool_.createBladeApi(f);return this.add(E,s.index)}on(s,a){const f=a.bind(this);return this.emitter_.on(s,E=>{f(E.event)}),this}setUpApi_(s){this.apiSet_.find(f=>f.controller_===s)||this.apiSet_.add(this.pool_.createBladeApi(s))}onRackAdd_(s){this.setUpApi_(s.bladeController)}onRackRemove_(s){if(s.isRoot){const a=te(this.apiSet_,s.bladeController);this.apiSet_.remove(a)}}onRackInputChange_(s){const a=s.bladeController;if(a instanceof it){const f=te(this.apiSet_,a),E=a.binding;this.emitter_.emit("change",{event:new l(f,E.target.read(),E.target.presetKey,s.options.last)})}else if(a instanceof Vt){const f=te(this.apiSet_,a);this.emitter_.emit("change",{event:new l(f,a.value.rawValue,void 0,s.options.last)})}}onRackMonitorUpdate_(s){if(!(s.bladeController instanceof wt))throw b.shouldNeverHappen();const a=te(this.apiSet_,s.bladeController),f=s.bladeController.binding;this.emitter_.emit("update",{event:new u(a,f.target.read(),f.target.presetKey)})}}class Ce extends xt{constructor(s,a){super(s,new oe(s.rackController,a)),this.emitter_=new _,this.controller_.foldable.value("expanded").emitter.on("change",f=>{this.emitter_.emit("fold",{event:new h(this,f.sender.rawValue)})}),this.rackApi_.on("change",f=>{this.emitter_.emit("change",{event:f})}),this.rackApi_.on("update",f=>{this.emitter_.emit("update",{event:f})})}get expanded(){return this.controller_.foldable.get("expanded")}set expanded(s){this.controller_.foldable.set("expanded",s)}get title(){return this.controller_.props.get("title")}set title(s){this.controller_.props.set("title",s)}get children(){return this.rackApi_.children}addInput(s,a,f){return this.rackApi_.addInput(s,a,f)}addMonitor(s,a,f){return this.rackApi_.addMonitor(s,a,f)}addFolder(s){return this.rackApi_.addFolder(s)}addButton(s){return this.rackApi_.addButton(s)}addSeparator(s){return this.rackApi_.addSeparator(s)}addTab(s){return this.rackApi_.addTab(s)}add(s,a){return this.rackApi_.add(s,a)}remove(s){this.rackApi_.remove(s)}addBlade(s){return this.rackApi_.addBlade(s)}on(s,a){const f=a.bind(this);return this.emitter_.on(s,E=>{f(E.event)}),this}}class se extends Et{constructor(s){super({blade:s.blade,view:s.view,viewProps:s.rackController.viewProps}),this.rackController=s.rackController}}class Se{constructor(s,a){const f=y(a.viewName);this.element=s.createElement("div"),this.element.classList.add(f()),a.viewProps.bindClassModifiers(this.element)}}function He(c,s){for(let a=0;a<c.length;a++){const f=c[a];if(f instanceof it&&f.binding===s)return f}return null}function kr(c,s){for(let a=0;a<c.length;a++){const f=c[a];if(f instanceof wt&&f.binding===s)return f}return null}function da(c,s){for(let a=0;a<c.length;a++){const f=c[a];if(f instanceof Vt&&f.value===s)return f}return null}function si(c){return c instanceof ri?c.rack:c instanceof se?c.rackController.rack:null}function Vr(c){const s=si(c);return s?s.bcSet_:null}class Ki{constructor(s){var a;this.onBladePositionsChange_=this.onBladePositionsChange_.bind(this),this.onSetAdd_=this.onSetAdd_.bind(this),this.onSetRemove_=this.onSetRemove_.bind(this),this.onChildDispose_=this.onChildDispose_.bind(this),this.onChildPositionsChange_=this.onChildPositionsChange_.bind(this),this.onChildInputChange_=this.onChildInputChange_.bind(this),this.onChildMonitorUpdate_=this.onChildMonitorUpdate_.bind(this),this.onChildValueChange_=this.onChildValueChange_.bind(this),this.onChildViewPropsChange_=this.onChildViewPropsChange_.bind(this),this.onDescendantLayout_=this.onDescendantLayout_.bind(this),this.onDescendantInputChange_=this.onDescendantInputChange_.bind(this),this.onDescendantMonitorUpdate_=this.onDescendantMonitorUpdate_.bind(this),this.emitter=new _,this.blade_=s!=null?s:null,(a=this.blade_)===null||a===void 0||a.value("positions").emitter.on("change",this.onBladePositionsChange_),this.bcSet_=new Ct(Vr),this.bcSet_.emitter.on("add",this.onSetAdd_),this.bcSet_.emitter.on("remove",this.onSetRemove_)}get children(){return this.bcSet_.items}add(s,a){s.parent&&s.parent.remove(s),s.parent_=this,this.bcSet_.add(s,a)}remove(s){s.parent_=null,this.bcSet_.remove(s)}find(s){return this.bcSet_.allItems().filter(a=>a instanceof s)}onSetAdd_(s){this.updatePositions_();const a=s.target===s.root;if(this.emitter.emit("add",{bladeController:s.item,index:s.index,isRoot:a,sender:this}),!a)return;const f=s.item;if(f.viewProps.emitter.on("change",this.onChildViewPropsChange_),f.blade.value("positions").emitter.on("change",this.onChildPositionsChange_),f.viewProps.handleDispose(this.onChildDispose_),f instanceof it)f.binding.emitter.on("change",this.onChildInputChange_);else if(f instanceof wt)f.binding.emitter.on("update",this.onChildMonitorUpdate_);else if(f instanceof Vt)f.value.emitter.on("change",this.onChildValueChange_);else{const E=si(f);if(E){const k=E.emitter;k.on("layout",this.onDescendantLayout_),k.on("inputchange",this.onDescendantInputChange_),k.on("monitorupdate",this.onDescendantMonitorUpdate_)}}}onSetRemove_(s){this.updatePositions_();const a=s.target===s.root;if(this.emitter.emit("remove",{bladeController:s.item,isRoot:a,sender:this}),!a)return;const f=s.item;if(f instanceof it)f.binding.emitter.off("change",this.onChildInputChange_);else if(f instanceof wt)f.binding.emitter.off("update",this.onChildMonitorUpdate_);else if(f instanceof Vt)f.value.emitter.off("change",this.onChildValueChange_);else{const E=si(f);if(E){const k=E.emitter;k.off("layout",this.onDescendantLayout_),k.off("inputchange",this.onDescendantInputChange_),k.off("monitorupdate",this.onDescendantMonitorUpdate_)}}}updatePositions_(){const s=this.bcSet_.items.filter(E=>!E.viewProps.get("hidden")),a=s[0],f=s[s.length-1];this.bcSet_.items.forEach(E=>{const k=[];E===a&&(k.push("first"),(!this.blade_||this.blade_.get("positions").includes("veryfirst"))&&k.push("veryfirst")),E===f&&(k.push("last"),(!this.blade_||this.blade_.get("positions").includes("verylast"))&&k.push("verylast")),E.blade.set("positions",k)})}onChildPositionsChange_(){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildViewPropsChange_(s){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildDispose_(){this.bcSet_.items.filter(a=>a.viewProps.get("disposed")).forEach(a=>{this.bcSet_.remove(a)})}onChildInputChange_(s){const a=He(this.find(it),s.sender);if(!a)throw b.shouldNeverHappen();this.emitter.emit("inputchange",{bladeController:a,options:s.options,sender:this})}onChildMonitorUpdate_(s){const a=kr(this.find(wt),s.sender);if(!a)throw b.shouldNeverHappen();this.emitter.emit("monitorupdate",{bladeController:a,sender:this})}onChildValueChange_(s){const a=da(this.find(Vt),s.sender);if(!a)throw b.shouldNeverHappen();this.emitter.emit("inputchange",{bladeController:a,options:s.options,sender:this})}onDescendantLayout_(s){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onDescendantInputChange_(s){this.emitter.emit("inputchange",{bladeController:s.bladeController,options:s.options,sender:this})}onDescendantMonitorUpdate_(s){this.emitter.emit("monitorupdate",{bladeController:s.bladeController,sender:this})}onBladePositionsChange_(){this.updatePositions_()}}class ri extends Et{constructor(s,a){super(Object.assign(Object.assign({},a),{view:new Se(s,{viewName:"brk",viewProps:a.viewProps})})),this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this);const f=new Ki(a.root?void 0:a.blade);f.emitter.on("add",this.onRackAdd_),f.emitter.on("remove",this.onRackRemove_),this.rack=f,this.viewProps.handleDispose(()=>{for(let E=this.rack.children.length-1;E>=0;E--)this.rack.children[E].viewProps.set("disposed",!0)})}onRackAdd_(s){!s.isRoot||U(this.view.element,s.bladeController.view.element,s.index)}onRackRemove_(s){!s.isRoot||R(s.bladeController.view.element)}}const Ks=y("cnt");class pa{constructor(s,a){var f;this.className_=y((f=a.viewName)!==null&&f!==void 0?f:"fld"),this.element=s.createElement("div"),this.element.classList.add(this.className_(),Ks()),a.viewProps.bindClassModifiers(this.element),this.foldable_=a.foldable,this.foldable_.bindExpandedClass(this.element,this.className_(void 0,"expanded")),A(this.foldable_,"completed",z(this.element,this.className_(void 0,"cpl")));const E=s.createElement("button");E.classList.add(this.className_("b")),A(a.props,"title",Dt=>{m(Dt)?this.element.classList.add(this.className_(void 0,"not")):this.element.classList.remove(this.className_(void 0,"not"))}),a.viewProps.bindDisabled(E),this.element.appendChild(E),this.buttonElement=E;const k=s.createElement("div");k.classList.add(this.className_("t")),M(a.props.value("title"),k),this.buttonElement.appendChild(k),this.titleElement=k;const W=s.createElement("div");W.classList.add(this.className_("m")),this.buttonElement.appendChild(W);const ut=a.containerElement;ut.classList.add(this.className_("c")),this.element.appendChild(ut),this.containerElement=ut}}class $s extends se{constructor(s,a){var f;const E=ne.create((f=a.expanded)!==null&&f!==void 0?f:!0),k=new ri(s,{blade:a.blade,root:a.root,viewProps:a.viewProps});super(Object.assign(Object.assign({},a),{rackController:k,view:new pa(s,{containerElement:k.view.element,foldable:E,props:a.props,viewName:a.root?"rot":void 0,viewProps:a.viewProps})})),this.onTitleClick_=this.onTitleClick_.bind(this),this.props=a.props,this.foldable=E,At(this.foldable,this.view.containerElement),this.rackController.rack.emitter.on("add",()=>{this.foldable.cleanUpTransition()}),this.rackController.rack.emitter.on("remove",()=>{this.foldable.cleanUpTransition()}),this.view.buttonElement.addEventListener("click",this.onTitleClick_)}get document(){return this.view.element.ownerDocument}onTitleClick_(){this.foldable.set("expanded",!this.foldable.get("expanded"))}}const fa={id:"folder",type:"blade",accept(c){const s=vt,a=$(c,{title:s.required.string,view:s.required.constant("folder"),expanded:s.optional.boolean});return a?{params:a}:null},controller(c){return new $s(c.document,{blade:c.blade,expanded:c.params.expanded,props:X.fromObject({title:c.params.title}),viewProps:c.viewProps})},api(c){return c.controller instanceof $s?new Ce(c.controller,c.pool):null}};class D extends Vt{constructor(s,a){const f=a.valueController.viewProps;super(Object.assign(Object.assign({},a),{value:a.valueController.value,view:new gt(s,{props:a.props,viewProps:f}),viewProps:f})),this.props=a.props,this.valueController=a.valueController,this.view.valueElement.appendChild(this.valueController.view.element)}}class j extends r{}const Q=y("spr");class J{constructor(s,a){this.element=s.createElement("div"),this.element.classList.add(Q()),a.viewProps.bindClassModifiers(this.element);const f=s.createElement("hr");f.classList.add(Q("r")),this.element.appendChild(f)}}class Z extends Et{constructor(s,a){super(Object.assign(Object.assign({},a),{view:new J(s,{viewProps:a.viewProps})}))}}const yt={id:"separator",type:"blade",accept(c){const a=$(c,{view:vt.required.constant("separator")});return a?{params:a}:null},controller(c){return new Z(c.document,{blade:c.blade,viewProps:c.viewProps})},api(c){return c.controller instanceof Z?new j(c.controller):null}},Pt=y("");function Bt(c,s){return z(c,Pt(void 0,s))}class Nt extends X{constructor(s){super(s)}static create(s){var a,f;const E=s!=null?s:{},k={disabled:(a=E.disabled)!==null&&a!==void 0?a:!1,disposed:!1,hidden:(f=E.hidden)!==null&&f!==void 0?f:!1},W=X.createCore(k);return new Nt(W)}bindClassModifiers(s){A(this,"disabled",Bt(s,"disabled")),A(this,"hidden",Bt(s,"hidden"))}bindDisabled(s){A(this,"disabled",a=>{s.disabled=a})}bindTabIndex(s){A(this,"disabled",a=>{s.tabIndex=a?-1:0})}handleDispose(s){this.value("disposed").emitter.on("change",a=>{a&&s()})}}const Xt=y("tbi");class jt{constructor(s,a){this.element=s.createElement("div"),this.element.classList.add(Xt()),a.viewProps.bindClassModifiers(this.element),A(a.props,"selected",k=>{k?this.element.classList.add(Xt(void 0,"sel")):this.element.classList.remove(Xt(void 0,"sel"))});const f=s.createElement("button");f.classList.add(Xt("b")),a.viewProps.bindDisabled(f),this.element.appendChild(f),this.buttonElement=f;const E=s.createElement("div");E.classList.add(Xt("t")),M(a.props.value("title"),E),this.buttonElement.appendChild(E),this.titleElement=E}}class Kt{constructor(s,a){this.emitter=new _,this.onClick_=this.onClick_.bind(this),this.props=a.props,this.viewProps=a.viewProps,this.view=new jt(s,{props:a.props,viewProps:a.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}onClick_(){this.emitter.emit("click",{sender:this})}}class be{constructor(s,a){this.onItemClick_=this.onItemClick_.bind(this),this.ic_=new Kt(s,{props:a.itemProps,viewProps:Nt.create()}),this.ic_.emitter.on("click",this.onItemClick_),this.cc_=new ri(s,{blade:rt(),viewProps:Nt.create()}),this.props=a.props,A(this.props,"selected",f=>{this.itemController.props.set("selected",f),this.contentController.viewProps.set("hidden",!f)})}get itemController(){return this.ic_}get contentController(){return this.cc_}onItemClick_(){this.props.set("selected",!0)}}class qe{constructor(s,a){this.controller_=s,this.rackApi_=a}get title(){var s;return(s=this.controller_.itemController.props.get("title"))!==null&&s!==void 0?s:""}set title(s){this.controller_.itemController.props.set("title",s)}get selected(){return this.controller_.props.get("selected")}set selected(s){this.controller_.props.set("selected",s)}get children(){return this.rackApi_.children}addButton(s){return this.rackApi_.addButton(s)}addFolder(s){return this.rackApi_.addFolder(s)}addSeparator(s){return this.rackApi_.addSeparator(s)}addTab(s){return this.rackApi_.addTab(s)}add(s,a){this.rackApi_.add(s,a)}remove(s){this.rackApi_.remove(s)}addInput(s,a,f){return this.rackApi_.addInput(s,a,f)}addMonitor(s,a,f){return this.rackApi_.addMonitor(s,a,f)}addBlade(s){return this.rackApi_.addBlade(s)}}class Pe extends xt{constructor(s,a){super(s,new oe(s.rackController,a)),this.onPageAdd_=this.onPageAdd_.bind(this),this.onPageRemove_=this.onPageRemove_.bind(this),this.onSelect_=this.onSelect_.bind(this),this.emitter_=new _,this.pageApiMap_=new Map,this.rackApi_.on("change",f=>{this.emitter_.emit("change",{event:f})}),this.rackApi_.on("update",f=>{this.emitter_.emit("update",{event:f})}),this.controller_.tab.selectedIndex.emitter.on("change",this.onSelect_),this.controller_.pageSet.emitter.on("add",this.onPageAdd_),this.controller_.pageSet.emitter.on("remove",this.onPageRemove_),this.controller_.pageSet.items.forEach(f=>{this.setUpPageApi_(f)})}get pages(){return this.controller_.pageSet.items.map(s=>{const a=this.pageApiMap_.get(s);if(!a)throw b.shouldNeverHappen();return a})}addPage(s){const a=this.controller_.view.element.ownerDocument,f=new be(a,{itemProps:X.fromObject({selected:!1,title:s.title}),props:X.fromObject({selected:!1})});this.controller_.add(f,s.index);const E=this.pageApiMap_.get(f);if(!E)throw b.shouldNeverHappen();return E}removePage(s){this.controller_.remove(s)}on(s,a){const f=a.bind(this);return this.emitter_.on(s,E=>{f(E.event)}),this}setUpPageApi_(s){const a=this.rackApi_.apiSet_.find(E=>E.controller_===s.contentController);if(!a)throw b.shouldNeverHappen();const f=new qe(s,a);this.pageApiMap_.set(s,f)}onPageAdd_(s){this.setUpPageApi_(s.item)}onPageRemove_(s){if(!this.pageApiMap_.get(s.item))throw b.shouldNeverHappen();this.pageApiMap_.delete(s.item)}onSelect_(s){this.emitter_.emit("select",{event:new d(this,s.rawValue)})}}const yn=-1;class me{constructor(){this.onItemSelectedChange_=this.onItemSelectedChange_.bind(this),this.empty=H(!0),this.selectedIndex=H(yn),this.items_=[]}add(s,a){const f=a!=null?a:this.items_.length;this.items_.splice(f,0,s),s.emitter.on("change",this.onItemSelectedChange_),this.keepSelection_()}remove(s){const a=this.items_.indexOf(s);a<0||(this.items_.splice(a,1),s.emitter.off("change",this.onItemSelectedChange_),this.keepSelection_())}keepSelection_(){if(this.items_.length===0){this.selectedIndex.rawValue=yn,this.empty.rawValue=!0;return}const s=this.items_.findIndex(a=>a.rawValue);s<0?(this.items_.forEach((a,f)=>{a.rawValue=f===0}),this.selectedIndex.rawValue=0):(this.items_.forEach((a,f)=>{a.rawValue=f===s}),this.selectedIndex.rawValue=s),this.empty.rawValue=!1}onItemSelectedChange_(s){if(s.rawValue){const a=this.items_.findIndex(f=>f===s.sender);this.items_.forEach((f,E)=>{f.rawValue=E===a}),this.selectedIndex.rawValue=a}else this.keepSelection_()}}const $t=y("tab");class Zs{constructor(s,a){this.element=s.createElement("div"),this.element.classList.add($t(),Ks()),a.viewProps.bindClassModifiers(this.element),C(a.empty,z(this.element,$t(void 0,"nop")));const f=s.createElement("div");f.classList.add($t("i")),this.element.appendChild(f),this.itemsElement=f;const E=a.contentsElement;E.classList.add($t("c")),this.element.appendChild(E),this.contentsElement=E}}class ge extends se{constructor(s,a){const f=new ri(s,{blade:a.blade,viewProps:a.viewProps}),E=new me;super({blade:a.blade,rackController:f,view:new Zs(s,{contentsElement:f.view.element,empty:E.empty,viewProps:a.viewProps})}),this.onPageAdd_=this.onPageAdd_.bind(this),this.onPageRemove_=this.onPageRemove_.bind(this),this.pageSet_=new Ct(()=>null),this.pageSet_.emitter.on("add",this.onPageAdd_),this.pageSet_.emitter.on("remove",this.onPageRemove_),this.tab=E}get pageSet(){return this.pageSet_}add(s,a){this.pageSet_.add(s,a)}remove(s){this.pageSet_.remove(this.pageSet_.items[s])}onPageAdd_(s){const a=s.item;U(this.view.itemsElement,a.itemController.view.element,s.index),this.rackController.rack.add(a.contentController,s.index),this.tab.add(a.props.value("selected"))}onPageRemove_(s){const a=s.item;R(a.itemController.view.element),this.rackController.rack.remove(a.contentController),this.tab.remove(a.props.value("selected"))}}const Un={id:"tab",type:"blade",accept(c){const s=vt,a=$(c,{pages:s.required.array(s.required.object({title:s.required.string})),view:s.required.constant("tab")});return!a||a.pages.length===0?null:{params:a}},controller(c){const s=new ge(c.document,{blade:c.blade,viewProps:c.viewProps});return c.params.pages.forEach(a=>{const f=new be(c.document,{itemProps:X.fromObject({selected:!1,title:a.title}),props:X.fromObject({selected:!1})});s.add(f)}),s},api(c){return c.controller instanceof ge?new Pe(c.controller,c.pool):null}};function zr(c,s){const a=c.accept(s.params);if(!a)return null;const f=vt.optional.boolean(s.params.disabled).value,E=vt.optional.boolean(s.params.hidden).value;return c.controller({blade:rt(),document:s.document,params:Object.assign(Object.assign({},a.params),{disabled:f,hidden:E}),viewProps:Nt.create({disabled:f,hidden:E})})}class Ai{constructor(){this.disabled=!1,this.emitter=new _}dispose(){}tick(){this.disabled||this.emitter.emit("tick",{sender:this})}}class Qs{constructor(s,a){this.disabled_=!1,this.timerId_=null,this.onTick_=this.onTick_.bind(this),this.doc_=s,this.emitter=new _,this.interval_=a,this.setTimer_()}get disabled(){return this.disabled_}set disabled(s){this.disabled_=s,this.disabled_?this.clearTimer_():this.setTimer_()}dispose(){this.clearTimer_()}clearTimer_(){if(this.timerId_===null)return;const s=this.doc_.defaultView;s&&s.clearInterval(this.timerId_),this.timerId_=null}setTimer_(){if(this.clearTimer_(),this.interval_<=0)return;const s=this.doc_.defaultView;s&&(this.timerId_=s.setInterval(this.onTick_,this.interval_))}onTick_(){this.disabled_||this.emitter.emit("tick",{sender:this})}}class Ae{constructor(s){this.constraints=s}constrain(s){return this.constraints.reduce((a,f)=>f.constrain(a),s)}}function Be(c,s){if(c instanceof s)return c;if(c instanceof Ae){const a=c.constraints.reduce((f,E)=>f||(E instanceof s?E:null),null);if(a)return a}return null}class Hn{constructor(s){this.options=s}constrain(s){const a=this.options;return a.length===0||a.filter(E=>E.value===s).length>0?s:a[0].value}}class Ie{constructor(s){this.maxValue=s.max,this.minValue=s.min}constrain(s){let a=s;return m(this.minValue)||(a=Math.max(a,this.minValue)),m(this.maxValue)||(a=Math.min(a,this.maxValue)),a}}class oi{constructor(s,a=0){this.step=s,this.origin=a}constrain(s){const a=this.origin%this.step,f=Math.round((s-a)/this.step);return a+f*this.step}}const Js=y("lst");class Hr{constructor(s,a){this.onValueChange_=this.onValueChange_.bind(this),this.props_=a.props,this.element=s.createElement("div"),this.element.classList.add(Js()),a.viewProps.bindClassModifiers(this.element);const f=s.createElement("select");f.classList.add(Js("s")),A(this.props_,"options",k=>{K(f),k.forEach((W,ut)=>{const Dt=s.createElement("option");Dt.dataset.index=String(ut),Dt.textContent=W.text,Dt.value=String(W.value),f.appendChild(Dt)})}),a.viewProps.bindDisabled(f),this.element.appendChild(f),this.selectElement=f;const E=s.createElement("div");E.classList.add(Js("m")),E.appendChild(Gt(s,"dropdown")),this.element.appendChild(E),a.value.emitter.on("change",this.onValueChange_),this.value_=a.value,this.update_()}update_(){this.selectElement.value=String(this.value_.rawValue)}onValueChange_(){this.update_()}}class tr{constructor(s,a){this.onSelectChange_=this.onSelectChange_.bind(this),this.props=a.props,this.value=a.value,this.viewProps=a.viewProps,this.view=new Hr(s,{props:this.props,value:this.value,viewProps:this.viewProps}),this.view.selectElement.addEventListener("change",this.onSelectChange_)}onSelectChange_(s){const f=s.currentTarget.selectedOptions.item(0);if(!f)return;const E=Number(f.dataset.index);this.value.rawValue=this.props.get("options")[E].value}}const bc=y("pop");class Tp{constructor(s,a){this.element=s.createElement("div"),this.element.classList.add(bc()),a.viewProps.bindClassModifiers(this.element),C(a.shows,z(this.element,bc(void 0,"v")))}}class yc{constructor(s,a){this.shows=H(!1),this.viewProps=a.viewProps,this.view=new Tp(s,{shows:this.shows,viewProps:this.viewProps})}}const wc=y("txt");class Ap{constructor(s,a){this.onChange_=this.onChange_.bind(this),this.element=s.createElement("div"),this.element.classList.add(wc()),a.viewProps.bindClassModifiers(this.element),this.props_=a.props,this.props_.emitter.on("change",this.onChange_);const f=s.createElement("input");f.classList.add(wc("i")),f.type="text",a.viewProps.bindDisabled(f),this.element.appendChild(f),this.inputElement=f,a.value.emitter.on("change",this.onChange_),this.value_=a.value,this.refresh()}refresh(){const s=this.props_.get("formatter");this.inputElement.value=s(this.value_.rawValue)}onChange_(){this.refresh()}}class Gr{constructor(s,a){this.onInputChange_=this.onInputChange_.bind(this),this.parser_=a.parser,this.props=a.props,this.value=a.value,this.viewProps=a.viewProps,this.view=new Ap(s,{props:a.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_)}onInputChange_(s){const f=s.currentTarget.value,E=this.parser_(f);m(E)||(this.value.rawValue=E),this.view.refresh()}}function Cp(c){return String(c)}function Mc(c){return c==="false"?!1:!!c}function Ec(c){return Cp(c)}class Pp{constructor(s){this.text=s}evaluate(){return Number(this.text)}toString(){return this.text}}const Rp={"**":(c,s)=>Math.pow(c,s),"*":(c,s)=>c*s,"/":(c,s)=>c/s,"%":(c,s)=>c%s,"+":(c,s)=>c+s,"-":(c,s)=>c-s,"<<":(c,s)=>c<<s,">>":(c,s)=>c>>s,">>>":(c,s)=>c>>>s,"&":(c,s)=>c&s,"^":(c,s)=>c^s,"|":(c,s)=>c|s};class Lp{constructor(s,a,f){this.left=a,this.operator=s,this.right=f}evaluate(){const s=Rp[this.operator];if(!s)throw new Error(`unexpected binary operator: '${this.operator}`);return s(this.left.evaluate(),this.right.evaluate())}toString(){return["b(",this.left.toString(),this.operator,this.right.toString(),")"].join(" ")}}const Dp={"+":c=>c,"-":c=>-c,"~":c=>~c};class Ip{constructor(s,a){this.operator=s,this.expression=a}evaluate(){const s=Dp[this.operator];if(!s)throw new Error(`unexpected unary operator: '${this.operator}`);return s(this.expression.evaluate())}toString(){return["u(",this.operator,this.expression.toString(),")"].join(" ")}}function ma(c){return(s,a)=>{for(let f=0;f<c.length;f++){const E=c[f](s,a);if(E!=="")return E}return""}}function er(c,s){var a;const f=c.substr(s).match(/^\s+/);return(a=f&&f[0])!==null&&a!==void 0?a:""}function Up(c,s){const a=c.substr(s,1);return a.match(/^[1-9]$/)?a:""}function nr(c,s){var a;const f=c.substr(s).match(/^[0-9]+/);return(a=f&&f[0])!==null&&a!==void 0?a:""}function Np(c,s){const a=nr(c,s);if(a!=="")return a;const f=c.substr(s,1);if(s+=1,f!=="-"&&f!=="+")return"";const E=nr(c,s);return E===""?"":f+E}function ga(c,s){const a=c.substr(s,1);if(s+=1,a.toLowerCase()!=="e")return"";const f=Np(c,s);return f===""?"":a+f}function Sc(c,s){const a=c.substr(s,1);if(a==="0")return a;const f=Up(c,s);return s+=f.length,f===""?"":f+nr(c,s)}function Fp(c,s){const a=Sc(c,s);if(s+=a.length,a==="")return"";const f=c.substr(s,1);if(s+=f.length,f!==".")return"";const E=nr(c,s);return s+=E.length,a+f+E+ga(c,s)}function Op(c,s){const a=c.substr(s,1);if(s+=a.length,a!==".")return"";const f=nr(c,s);return s+=f.length,f===""?"":a+f+ga(c,s)}function Bp(c,s){const a=Sc(c,s);return s+=a.length,a===""?"":a+ga(c,s)}const kp=ma([Fp,Op,Bp]);function Vp(c,s){var a;const f=c.substr(s).match(/^[01]+/);return(a=f&&f[0])!==null&&a!==void 0?a:""}function zp(c,s){const a=c.substr(s,2);if(s+=a.length,a.toLowerCase()!=="0b")return"";const f=Vp(c,s);return f===""?"":a+f}function Hp(c,s){var a;const f=c.substr(s).match(/^[0-7]+/);return(a=f&&f[0])!==null&&a!==void 0?a:""}function Gp(c,s){const a=c.substr(s,2);if(s+=a.length,a.toLowerCase()!=="0o")return"";const f=Hp(c,s);return f===""?"":a+f}function Wp(c,s){var a;const f=c.substr(s).match(/^[0-9a-f]+/i);return(a=f&&f[0])!==null&&a!==void 0?a:""}function Xp(c,s){const a=c.substr(s,2);if(s+=a.length,a.toLowerCase()!=="0x")return"";const f=Wp(c,s);return f===""?"":a+f}const qp=ma([zp,Gp,Xp]),jp=ma([qp,kp]);function Yp(c,s){const a=jp(c,s);return s+=a.length,a===""?null:{evaluable:new Pp(a),cursor:s}}function Kp(c,s){const a=c.substr(s,1);if(s+=a.length,a!=="(")return null;const f=Ac(c,s);if(!f)return null;s=f.cursor,s+=er(c,s).length;const E=c.substr(s,1);return s+=E.length,E!==")"?null:{evaluable:f.evaluable,cursor:s}}function $p(c,s){var a;return(a=Yp(c,s))!==null&&a!==void 0?a:Kp(c,s)}function Tc(c,s){const a=$p(c,s);if(a)return a;const f=c.substr(s,1);if(s+=f.length,f!=="+"&&f!=="-"&&f!=="~")return null;const E=Tc(c,s);return E?(s=E.cursor,{cursor:s,evaluable:new Ip(f,E.evaluable)}):null}function Zp(c,s,a){a+=er(s,a).length;const f=c.filter(E=>s.startsWith(E,a))[0];return f?(a+=f.length,a+=er(s,a).length,{cursor:a,operator:f}):null}function Qp(c,s){return(a,f)=>{const E=c(a,f);if(!E)return null;f=E.cursor;let k=E.evaluable;for(;;){const W=Zp(s,a,f);if(!W)break;f=W.cursor;const ut=c(a,f);if(!ut)return null;f=ut.cursor,k=new Lp(W.operator,k,ut.evaluable)}return k?{cursor:f,evaluable:k}:null}}const Jp=[["**"],["*","/","%"],["+","-"],["<<",">>>",">>"],["&"],["^"],["|"]].reduce((c,s)=>Qp(c,s),Tc);function Ac(c,s){return s+=er(c,s).length,Jp(c,s)}function tf(c){const s=Ac(c,0);return!s||s.cursor+er(c,s.cursor).length!==c.length?null:s.evaluable}function Gn(c){var s;const a=tf(c);return(s=a==null?void 0:a.evaluate())!==null&&s!==void 0?s:null}function Cc(c){if(typeof c=="number")return c;if(typeof c=="string"){const s=Gn(c);if(!m(s))return s}return 0}function ef(c){return String(c)}function Ge(c){return s=>s.toFixed(Math.max(Math.min(c,20),0))}const nf=Ge(0);function Wr(c){return nf(c)+"%"}function Pc(c){return String(c)}function _a(c){return c}function Rc(c,s){for(;c.length<s;)c.push(void 0)}function sf(c){const s=[];return Rc(s,c),H(s)}function rf(c){const s=c.indexOf(void 0);return s<0?c:c.slice(0,s)}function of(c,s){const a=[...rf(c),s];return a.length>c.length?a.splice(0,a.length-c.length):Rc(a,c.length),a}function ir({primary:c,secondary:s,forward:a,backward:f}){let E=!1;function k(W){E||(E=!0,W(),E=!1)}c.emitter.on("change",W=>{k(()=>{s.setRawValue(a(c,s),W.options)})}),s.emitter.on("change",W=>{k(()=>{c.setRawValue(f(c,s),W.options)}),k(()=>{s.setRawValue(a(c,s),W.options)})}),k(()=>{s.setRawValue(a(c,s),{forceEmit:!1,last:!0})})}function cn(c,s){const a=c*(s.altKey?.1:1)*(s.shiftKey?10:1);return s.upKey?+a:s.downKey?-a:0}function sr(c){return{altKey:c.altKey,downKey:c.key==="ArrowDown",shiftKey:c.shiftKey,upKey:c.key==="ArrowUp"}}function Wn(c){return{altKey:c.altKey,downKey:c.key==="ArrowLeft",shiftKey:c.shiftKey,upKey:c.key==="ArrowRight"}}function af(c){return c==="ArrowUp"||c==="ArrowDown"}function Lc(c){return af(c)||c==="ArrowLeft"||c==="ArrowRight"}function va(c,s){var a,f;const E=s.ownerDocument.defaultView,k=s.getBoundingClientRect();return{x:c.pageX-(((a=E&&E.scrollX)!==null&&a!==void 0?a:0)+k.left),y:c.pageY-(((f=E&&E.scrollY)!==null&&f!==void 0?f:0)+k.top)}}class Ci{constructor(s){this.lastTouch_=null,this.onDocumentMouseMove_=this.onDocumentMouseMove_.bind(this),this.onDocumentMouseUp_=this.onDocumentMouseUp_.bind(this),this.onMouseDown_=this.onMouseDown_.bind(this),this.onTouchEnd_=this.onTouchEnd_.bind(this),this.onTouchMove_=this.onTouchMove_.bind(this),this.onTouchStart_=this.onTouchStart_.bind(this),this.elem_=s,this.emitter=new _,s.addEventListener("touchstart",this.onTouchStart_,{passive:!1}),s.addEventListener("touchmove",this.onTouchMove_,{passive:!0}),s.addEventListener("touchend",this.onTouchEnd_),s.addEventListener("mousedown",this.onMouseDown_)}computePosition_(s){const a=this.elem_.getBoundingClientRect();return{bounds:{width:a.width,height:a.height},point:s?{x:s.x,y:s.y}:null}}onMouseDown_(s){var a;s.preventDefault(),(a=s.currentTarget)===null||a===void 0||a.focus();const f=this.elem_.ownerDocument;f.addEventListener("mousemove",this.onDocumentMouseMove_),f.addEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("down",{altKey:s.altKey,data:this.computePosition_(va(s,this.elem_)),sender:this,shiftKey:s.shiftKey})}onDocumentMouseMove_(s){this.emitter.emit("move",{altKey:s.altKey,data:this.computePosition_(va(s,this.elem_)),sender:this,shiftKey:s.shiftKey})}onDocumentMouseUp_(s){const a=this.elem_.ownerDocument;a.removeEventListener("mousemove",this.onDocumentMouseMove_),a.removeEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("up",{altKey:s.altKey,data:this.computePosition_(va(s,this.elem_)),sender:this,shiftKey:s.shiftKey})}onTouchStart_(s){s.preventDefault();const a=s.targetTouches.item(0),f=this.elem_.getBoundingClientRect();this.emitter.emit("down",{altKey:s.altKey,data:this.computePosition_(a?{x:a.clientX-f.left,y:a.clientY-f.top}:void 0),sender:this,shiftKey:s.shiftKey}),this.lastTouch_=a}onTouchMove_(s){const a=s.targetTouches.item(0),f=this.elem_.getBoundingClientRect();this.emitter.emit("move",{altKey:s.altKey,data:this.computePosition_(a?{x:a.clientX-f.left,y:a.clientY-f.top}:void 0),sender:this,shiftKey:s.shiftKey}),this.lastTouch_=a}onTouchEnd_(s){var a;const f=(a=s.targetTouches.item(0))!==null&&a!==void 0?a:this.lastTouch_,E=this.elem_.getBoundingClientRect();this.emitter.emit("up",{altKey:s.altKey,data:this.computePosition_(f?{x:f.clientX-E.left,y:f.clientY-E.top}:void 0),sender:this,shiftKey:s.shiftKey})}}function ye(c,s,a,f,E){const k=(c-s)/(a-s);return f+k*(E-f)}function Dc(c){return String(c.toFixed(10)).split(".")[1].replace(/0+$/,"").length}function Ue(c,s,a){return Math.min(Math.max(c,s),a)}function Ic(c,s){return(c%s+s)%s}const wn=y("txt");class lf{constructor(s,a){this.onChange_=this.onChange_.bind(this),this.props_=a.props,this.props_.emitter.on("change",this.onChange_),this.element=s.createElement("div"),this.element.classList.add(wn(),wn(void 0,"num")),a.arrayPosition&&this.element.classList.add(wn(void 0,a.arrayPosition)),a.viewProps.bindClassModifiers(this.element);const f=s.createElement("input");f.classList.add(wn("i")),f.type="text",a.viewProps.bindDisabled(f),this.element.appendChild(f),this.inputElement=f,this.onDraggingChange_=this.onDraggingChange_.bind(this),this.dragging_=a.dragging,this.dragging_.emitter.on("change",this.onDraggingChange_),this.element.classList.add(wn()),this.inputElement.classList.add(wn("i"));const E=s.createElement("div");E.classList.add(wn("k")),this.element.appendChild(E),this.knobElement=E;const k=s.createElementNS(Wt,"svg");k.classList.add(wn("g")),this.knobElement.appendChild(k);const W=s.createElementNS(Wt,"path");W.classList.add(wn("gb")),k.appendChild(W),this.guideBodyElem_=W;const ut=s.createElementNS(Wt,"path");ut.classList.add(wn("gh")),k.appendChild(ut),this.guideHeadElem_=ut;const Dt=s.createElement("div");Dt.classList.add(y("tt")()),this.knobElement.appendChild(Dt),this.tooltipElem_=Dt,a.value.emitter.on("change",this.onChange_),this.value=a.value,this.refresh()}onDraggingChange_(s){if(s.rawValue===null){this.element.classList.remove(wn(void 0,"drg"));return}this.element.classList.add(wn(void 0,"drg"));const a=s.rawValue/this.props_.get("draggingScale"),f=a+(a>0?-1:a<0?1:0),E=Ue(-f,-4,4);this.guideHeadElem_.setAttributeNS(null,"d",[`M ${f+E},0 L${f},4 L${f+E},8`,`M ${a},-1 L${a},9`].join(" ")),this.guideBodyElem_.setAttributeNS(null,"d",`M 0,4 L${a},4`);const k=this.props_.get("formatter");this.tooltipElem_.textContent=k(this.value.rawValue),this.tooltipElem_.style.left=`${a}px`}refresh(){const s=this.props_.get("formatter");this.inputElement.value=s(this.value.rawValue)}onChange_(){this.refresh()}}class rr{constructor(s,a){var f;this.originRawValue_=0,this.onInputChange_=this.onInputChange_.bind(this),this.onInputKeyDown_=this.onInputKeyDown_.bind(this),this.onInputKeyUp_=this.onInputKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.baseStep_=a.baseStep,this.parser_=a.parser,this.props=a.props,this.sliderProps_=(f=a.sliderProps)!==null&&f!==void 0?f:null,this.value=a.value,this.viewProps=a.viewProps,this.dragging_=H(null),this.view=new lf(s,{arrayPosition:a.arrayPosition,dragging:this.dragging_,props:this.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_),this.view.inputElement.addEventListener("keydown",this.onInputKeyDown_),this.view.inputElement.addEventListener("keyup",this.onInputKeyUp_);const E=new Ci(this.view.knobElement);E.emitter.on("down",this.onPointerDown_),E.emitter.on("move",this.onPointerMove_),E.emitter.on("up",this.onPointerUp_)}constrainValue_(s){var a,f;const E=(a=this.sliderProps_)===null||a===void 0?void 0:a.get("minValue"),k=(f=this.sliderProps_)===null||f===void 0?void 0:f.get("maxValue");let W=s;return E!==void 0&&(W=Math.max(W,E)),k!==void 0&&(W=Math.min(W,k)),W}onInputChange_(s){const f=s.currentTarget.value,E=this.parser_(f);m(E)||(this.value.rawValue=this.constrainValue_(E)),this.view.refresh()}onInputKeyDown_(s){const a=cn(this.baseStep_,sr(s));a!==0&&this.value.setRawValue(this.constrainValue_(this.value.rawValue+a),{forceEmit:!1,last:!1})}onInputKeyUp_(s){cn(this.baseStep_,sr(s))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}onPointerDown_(){this.originRawValue_=this.value.rawValue,this.dragging_.rawValue=0}computeDraggingValue_(s){if(!s.point)return null;const a=s.point.x-s.bounds.width/2;return this.constrainValue_(this.originRawValue_+a*this.props.get("draggingScale"))}onPointerMove_(s){const a=this.computeDraggingValue_(s.data);a!==null&&(this.value.setRawValue(a,{forceEmit:!1,last:!1}),this.dragging_.rawValue=this.value.rawValue-this.originRawValue_)}onPointerUp_(s){const a=this.computeDraggingValue_(s.data);a!==null&&(this.value.setRawValue(a,{forceEmit:!0,last:!0}),this.dragging_.rawValue=null)}}const xa=y("sld");class cf{constructor(s,a){this.onChange_=this.onChange_.bind(this),this.props_=a.props,this.props_.emitter.on("change",this.onChange_),this.element=s.createElement("div"),this.element.classList.add(xa()),a.viewProps.bindClassModifiers(this.element);const f=s.createElement("div");f.classList.add(xa("t")),a.viewProps.bindTabIndex(f),this.element.appendChild(f),this.trackElement=f;const E=s.createElement("div");E.classList.add(xa("k")),this.trackElement.appendChild(E),this.knobElement=E,a.value.emitter.on("change",this.onChange_),this.value=a.value,this.update_()}update_(){const s=Ue(ye(this.value.rawValue,this.props_.get("minValue"),this.props_.get("maxValue"),0,100),0,100);this.knobElement.style.width=`${s}%`}onChange_(){this.update_()}}class uf{constructor(s,a){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDownOrMove_=this.onPointerDownOrMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.baseStep_=a.baseStep,this.value=a.value,this.viewProps=a.viewProps,this.props=a.props,this.view=new cf(s,{props:this.props,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Ci(this.view.trackElement),this.ptHandler_.emitter.on("down",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("move",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.trackElement.addEventListener("keydown",this.onKeyDown_),this.view.trackElement.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(s,a){!s.point||this.value.setRawValue(ye(Ue(s.point.x,0,s.bounds.width),0,s.bounds.width,this.props.get("minValue"),this.props.get("maxValue")),a)}onPointerDownOrMove_(s){this.handlePointerEvent_(s.data,{forceEmit:!1,last:!1})}onPointerUp_(s){this.handlePointerEvent_(s.data,{forceEmit:!0,last:!0})}onKeyDown_(s){const a=cn(this.baseStep_,Wn(s));a!==0&&this.value.setRawValue(this.value.rawValue+a,{forceEmit:!1,last:!1})}onKeyUp_(s){cn(this.baseStep_,Wn(s))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const ba=y("sldtxt");class hf{constructor(s,a){this.element=s.createElement("div"),this.element.classList.add(ba());const f=s.createElement("div");f.classList.add(ba("s")),this.sliderView_=a.sliderView,f.appendChild(this.sliderView_.element),this.element.appendChild(f);const E=s.createElement("div");E.classList.add(ba("t")),this.textView_=a.textView,E.appendChild(this.textView_.element),this.element.appendChild(E)}}class ya{constructor(s,a){this.value=a.value,this.viewProps=a.viewProps,this.sliderC_=new uf(s,{baseStep:a.baseStep,props:a.sliderProps,value:a.value,viewProps:this.viewProps}),this.textC_=new rr(s,{baseStep:a.baseStep,parser:a.parser,props:a.textProps,sliderProps:a.sliderProps,value:a.value,viewProps:a.viewProps}),this.view=new hf(s,{sliderView:this.sliderC_.view,textView:this.textC_.view})}get sliderController(){return this.sliderC_}get textController(){return this.textC_}}function or(c,s){c.write(s)}function Xr(c){const s=vt;if(Array.isArray(c))return s.required.array(s.required.object({text:s.required.string,value:s.required.raw}))(c).value;if(typeof c=="object")return s.required.raw(c).value}function Uc(c){if(c==="inline"||c==="popup")return c}function ai(c){const s=vt;return s.required.object({max:s.optional.number,min:s.optional.number,step:s.optional.number})(c).value}function Nc(c){if(Array.isArray(c))return c;const s=[];return Object.keys(c).forEach(a=>{s.push({text:a,value:c[a]})}),s}function wa(c){return m(c)?null:new Hn(Nc(c))}function Ma(c){const s=c?Be(c,Hn):null;return s?s.options:null}function df(c){const s=c?Be(c,oi):null;return s?s.step:null}function qr(c,s){const a=c&&Be(c,oi);return a?Dc(a.step):Math.max(Dc(s),2)}function $i(c){const s=df(c);return s!=null?s:1}function Zi(c,s){var a;const f=c&&Be(c,oi),E=Math.abs((a=f==null?void 0:f.step)!==null&&a!==void 0?a:s);return E===0?.1:Math.pow(10,Math.floor(Math.log10(E))-1)}const jr=y("ckb");class pf{constructor(s,a){this.onValueChange_=this.onValueChange_.bind(this),this.element=s.createElement("div"),this.element.classList.add(jr()),a.viewProps.bindClassModifiers(this.element);const f=s.createElement("label");f.classList.add(jr("l")),this.element.appendChild(f);const E=s.createElement("input");E.classList.add(jr("i")),E.type="checkbox",f.appendChild(E),this.inputElement=E,a.viewProps.bindDisabled(this.inputElement);const k=s.createElement("div");k.classList.add(jr("w")),f.appendChild(k);const W=Gt(s,"check");k.appendChild(W),a.value.emitter.on("change",this.onValueChange_),this.value=a.value,this.update_()}update_(){this.inputElement.checked=this.value.rawValue}onValueChange_(){this.update_()}}class ff{constructor(s,a){this.onInputChange_=this.onInputChange_.bind(this),this.value=a.value,this.viewProps=a.viewProps,this.view=new pf(s,{value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_)}onInputChange_(s){const a=s.currentTarget;this.value.rawValue=a.checked}}function mf(c){const s=[],a=wa(c.options);return a&&s.push(a),new Ae(s)}const gf={id:"input-bool",type:"input",accept:(c,s)=>{if(typeof c!="boolean")return null;const f=$(s,{options:vt.optional.custom(Xr)});return f?{initialValue:c,params:f}:null},binding:{reader:c=>Mc,constraint:c=>mf(c.params),writer:c=>or},controller:c=>{var s;const a=c.document,f=c.value,E=c.constraint;return E&&Be(E,Hn)?new tr(a,{props:X.fromObject({options:(s=Ma(E))!==null&&s!==void 0?s:[]}),value:f,viewProps:c.viewProps}):new ff(a,{value:f,viewProps:c.viewProps})}},Pi=y("col");class _f{constructor(s,a){this.element=s.createElement("div"),this.element.classList.add(Pi()),a.foldable.bindExpandedClass(this.element,Pi(void 0,"expanded")),A(a.foldable,"completed",z(this.element,Pi(void 0,"cpl")));const f=s.createElement("div");f.classList.add(Pi("h")),this.element.appendChild(f);const E=s.createElement("div");E.classList.add(Pi("s")),f.appendChild(E),this.swatchElement=E;const k=s.createElement("div");if(k.classList.add(Pi("t")),f.appendChild(k),this.textElement=k,a.pickerLayout==="inline"){const W=s.createElement("div");W.classList.add(Pi("p")),this.element.appendChild(W),this.pickerElement=W}else this.pickerElement=null}}function vf(c,s,a){const f=Ue(c/255,0,1),E=Ue(s/255,0,1),k=Ue(a/255,0,1),W=Math.max(f,E,k),ut=Math.min(f,E,k),Dt=W-ut;let qt=0,ae=0;const le=(ut+W)/2;return Dt!==0&&(ae=Dt/(1-Math.abs(W+ut-1)),f===W?qt=(E-k)/Dt:E===W?qt=2+(k-f)/Dt:qt=4+(f-E)/Dt,qt=qt/6+(qt<0?1:0)),[qt*360,ae*100,le*100]}function xf(c,s,a){const f=(c%360+360)%360,E=Ue(s/100,0,1),k=Ue(a/100,0,1),W=(1-Math.abs(2*k-1))*E,ut=W*(1-Math.abs(f/60%2-1)),Dt=k-W/2;let qt,ae,le;return f>=0&&f<60?[qt,ae,le]=[W,ut,0]:f>=60&&f<120?[qt,ae,le]=[ut,W,0]:f>=120&&f<180?[qt,ae,le]=[0,W,ut]:f>=180&&f<240?[qt,ae,le]=[0,ut,W]:f>=240&&f<300?[qt,ae,le]=[ut,0,W]:[qt,ae,le]=[W,0,ut],[(qt+Dt)*255,(ae+Dt)*255,(le+Dt)*255]}function bf(c,s,a){const f=Ue(c/255,0,1),E=Ue(s/255,0,1),k=Ue(a/255,0,1),W=Math.max(f,E,k),ut=Math.min(f,E,k),Dt=W-ut;let qt;Dt===0?qt=0:W===f?qt=60*(((E-k)/Dt%6+6)%6):W===E?qt=60*((k-f)/Dt+2):qt=60*((f-E)/Dt+4);const ae=W===0?0:Dt/W,le=W;return[qt,ae*100,le*100]}function Fc(c,s,a){const f=Ic(c,360),E=Ue(s/100,0,1),k=Ue(a/100,0,1),W=k*E,ut=W*(1-Math.abs(f/60%2-1)),Dt=k-W;let qt,ae,le;return f>=0&&f<60?[qt,ae,le]=[W,ut,0]:f>=60&&f<120?[qt,ae,le]=[ut,W,0]:f>=120&&f<180?[qt,ae,le]=[0,W,ut]:f>=180&&f<240?[qt,ae,le]=[0,ut,W]:f>=240&&f<300?[qt,ae,le]=[ut,0,W]:[qt,ae,le]=[W,0,ut],[(qt+Dt)*255,(ae+Dt)*255,(le+Dt)*255]}function yf(c,s,a){const f=a+s*(100-Math.abs(2*a-100))/200;return[c,f!==0?s*(100-Math.abs(2*a-100))/f:0,a+s*(100-Math.abs(2*a-100))/(2*100)]}function wf(c,s,a){const f=100-Math.abs(a*(200-s)/100-100);return[c,f!==0?s*a/f:0,a*(200-s)/(2*100)]}function Ri(c){return[c[0],c[1],c[2]]}function Oc(c,s){return[c[0],c[1],c[2],s]}const Mf={hsl:{hsl:(c,s,a)=>[c,s,a],hsv:yf,rgb:xf},hsv:{hsl:wf,hsv:(c,s,a)=>[c,s,a],rgb:Fc},rgb:{hsl:vf,hsv:bf,rgb:(c,s,a)=>[c,s,a]}};function Yr(c,s){return[s==="float"?1:c==="rgb"?255:360,s==="float"?1:c==="rgb"?255:100,s==="float"?1:c==="rgb"?255:100]}function Ef(c,s,a){var f;const E=Yr(s,a);return[s==="rgb"?Ue(c[0],0,E[0]):Ic(c[0],E[0]),Ue(c[1],0,E[1]),Ue(c[2],0,E[2]),Ue((f=c[3])!==null&&f!==void 0?f:1,0,1)]}function Bc(c,s,a,f){const E=Yr(s,a),k=Yr(s,f);return c.map((W,ut)=>W/E[ut]*k[ut])}function Sf(c,s,a){const f=Bc(c,s.mode,s.type,"int"),E=Mf[s.mode][a.mode](...f);return Bc(E,a.mode,"int",a.type)}function Kr(c,s){return typeof c!="object"||m(c)?!1:s in c&&typeof c[s]=="number"}class ie{constructor(s,a,f="int"){this.mode=a,this.type=f,this.comps_=Ef(s,a,f)}static black(s="int"){return new ie([0,0,0],"rgb",s)}static fromObject(s,a="int"){const f="a"in s?[s.r,s.g,s.b,s.a]:[s.r,s.g,s.b];return new ie(f,"rgb",a)}static toRgbaObject(s,a="int"){return s.toRgbaObject(a)}static isRgbColorObject(s){return Kr(s,"r")&&Kr(s,"g")&&Kr(s,"b")}static isRgbaColorObject(s){return this.isRgbColorObject(s)&&Kr(s,"a")}static isColorObject(s){return this.isRgbColorObject(s)}static equals(s,a){if(s.mode!==a.mode)return!1;const f=s.comps_,E=a.comps_;for(let k=0;k<f.length;k++)if(f[k]!==E[k])return!1;return!0}getComponents(s,a="int"){return Oc(Sf(Ri(this.comps_),{mode:this.mode,type:this.type},{mode:s!=null?s:this.mode,type:a}),this.comps_[3])}toRgbaObject(s="int"){const a=this.getComponents("rgb",s);return{r:a[0],g:a[1],b:a[2],a:a[3]}}}const li=y("colp");class Tf{constructor(s,a){this.alphaViews_=null,this.element=s.createElement("div"),this.element.classList.add(li());const f=s.createElement("div");f.classList.add(li("hsv"));const E=s.createElement("div");E.classList.add(li("sv")),this.svPaletteView_=a.svPaletteView,E.appendChild(this.svPaletteView_.element),f.appendChild(E);const k=s.createElement("div");k.classList.add(li("h")),this.hPaletteView_=a.hPaletteView,k.appendChild(this.hPaletteView_.element),f.appendChild(k),this.element.appendChild(f);const W=s.createElement("div");if(W.classList.add(li("rgb")),this.textView_=a.textView,W.appendChild(this.textView_.element),this.element.appendChild(W),a.alphaViews){this.alphaViews_={palette:a.alphaViews.palette,text:a.alphaViews.text};const ut=s.createElement("div");ut.classList.add(li("a"));const Dt=s.createElement("div");Dt.classList.add(li("ap")),Dt.appendChild(this.alphaViews_.palette.element),ut.appendChild(Dt);const qt=s.createElement("div");qt.classList.add(li("at")),qt.appendChild(this.alphaViews_.text.element),ut.appendChild(qt),this.element.appendChild(ut)}}get allFocusableElements(){const s=[this.svPaletteView_.element,this.hPaletteView_.element,this.textView_.modeSelectElement,...this.textView_.textViews.map(a=>a.inputElement)];return this.alphaViews_&&s.push(this.alphaViews_.palette.element,this.alphaViews_.text.inputElement),s}}function Af(c){return c==="int"?"int":c==="float"?"float":void 0}function Ea(c){const s=vt;return $(c,{alpha:s.optional.boolean,color:s.optional.object({alpha:s.optional.boolean,type:s.optional.custom(Af)}),expanded:s.optional.boolean,picker:s.optional.custom(Uc)})}function Li(c){return c?.1:1}function Di(c){var s;return(s=c.color)===null||s===void 0?void 0:s.type}function Cf(c,s){return c.alpha===s.alpha&&c.mode===s.mode&&c.notation===s.notation&&c.type===s.type}function Mn(c,s){const a=c.match(/^(.+)%$/);return Math.min(a?parseFloat(a[1])*.01*s:parseFloat(c),s)}const Pf={deg:c=>c,grad:c=>c*360/400,rad:c=>c*360/(2*Math.PI),turn:c=>c*360};function kc(c){const s=c.match(/^([0-9.]+?)(deg|grad|rad|turn)$/);if(!s)return parseFloat(c);const a=parseFloat(s[1]),f=s[2];return Pf[f](a)}function Vc(c){const s=c.match(/^rgb\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!s)return null;const a=[Mn(s[1],255),Mn(s[2],255),Mn(s[3],255)];return isNaN(a[0])||isNaN(a[1])||isNaN(a[2])?null:a}function zc(c){return s=>{const a=Vc(s);return a?new ie(a,"rgb",c):null}}function Hc(c){const s=c.match(/^rgba\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!s)return null;const a=[Mn(s[1],255),Mn(s[2],255),Mn(s[3],255),Mn(s[4],1)];return isNaN(a[0])||isNaN(a[1])||isNaN(a[2])||isNaN(a[3])?null:a}function Gc(c){return s=>{const a=Hc(s);return a?new ie(a,"rgb",c):null}}function Wc(c){const s=c.match(/^hsl\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!s)return null;const a=[kc(s[1]),Mn(s[2],100),Mn(s[3],100)];return isNaN(a[0])||isNaN(a[1])||isNaN(a[2])?null:a}function Xc(c){return s=>{const a=Wc(s);return a?new ie(a,"hsl",c):null}}function qc(c){const s=c.match(/^hsla\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!s)return null;const a=[kc(s[1]),Mn(s[2],100),Mn(s[3],100),Mn(s[4],1)];return isNaN(a[0])||isNaN(a[1])||isNaN(a[2])||isNaN(a[3])?null:a}function jc(c){return s=>{const a=qc(s);return a?new ie(a,"hsl",c):null}}function Yc(c){const s=c.match(/^#([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(s)return[parseInt(s[1]+s[1],16),parseInt(s[2]+s[2],16),parseInt(s[3]+s[3],16)];const a=c.match(/^(?:#|0x)([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return a?[parseInt(a[1],16),parseInt(a[2],16),parseInt(a[3],16)]:null}function Rf(c){const s=Yc(c);return s?new ie(s,"rgb","int"):null}function Kc(c){const s=c.match(/^#?([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(s)return[parseInt(s[1]+s[1],16),parseInt(s[2]+s[2],16),parseInt(s[3]+s[3],16),ye(parseInt(s[4]+s[4],16),0,255,0,1)];const a=c.match(/^(?:#|0x)?([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return a?[parseInt(a[1],16),parseInt(a[2],16),parseInt(a[3],16),ye(parseInt(a[4],16),0,255,0,1)]:null}function Lf(c){const s=Kc(c);return s?new ie(s,"rgb","int"):null}function $c(c){const s=c.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!s)return null;const a=[parseFloat(s[1]),parseFloat(s[2]),parseFloat(s[3])];return isNaN(a[0])||isNaN(a[1])||isNaN(a[2])?null:a}function Zc(c){return s=>{const a=$c(s);return a?new ie(a,"rgb",c):null}}function Qc(c){const s=c.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*a\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!s)return null;const a=[parseFloat(s[1]),parseFloat(s[2]),parseFloat(s[3]),parseFloat(s[4])];return isNaN(a[0])||isNaN(a[1])||isNaN(a[2])||isNaN(a[3])?null:a}function Jc(c){return s=>{const a=Qc(s);return a?new ie(a,"rgb",c):null}}const Df=[{parser:Yc,result:{alpha:!1,mode:"rgb",notation:"hex"}},{parser:Kc,result:{alpha:!0,mode:"rgb",notation:"hex"}},{parser:Vc,result:{alpha:!1,mode:"rgb",notation:"func"}},{parser:Hc,result:{alpha:!0,mode:"rgb",notation:"func"}},{parser:Wc,result:{alpha:!1,mode:"hsl",notation:"func"}},{parser:qc,result:{alpha:!0,mode:"hsl",notation:"func"}},{parser:$c,result:{alpha:!1,mode:"rgb",notation:"object"}},{parser:Qc,result:{alpha:!0,mode:"rgb",notation:"object"}}];function If(c){return Df.reduce((s,{parser:a,result:f})=>s||(a(c)?f:null),null)}function Sa(c,s="int"){const a=If(c);return a?a.notation==="hex"&&s!=="float"?Object.assign(Object.assign({},a),{type:"int"}):a.notation==="func"?Object.assign(Object.assign({},a),{type:s}):null:null}const tu={int:[Rf,Lf,zc("int"),Gc("int"),Xc("int"),jc("int"),Zc("int"),Jc("int")],float:[zc("float"),Gc("float"),Xc("float"),jc("float"),Zc("float"),Jc("float")]};function Uf(c){const s=tu[c];return a=>{if(typeof a!="string")return ie.black(c);const f=s.reduce((E,k)=>E||k(a),null);return f!=null?f:ie.black(c)}}function Ta(c){const s=tu[c];return a=>s.reduce((f,E)=>f||E(a),null)}function eu(c){const s=Ue(Math.floor(c),0,255).toString(16);return s.length===1?`0${s}`:s}function nu(c,s="#"){const a=Ri(c.getComponents("rgb")).map(eu).join("");return`${s}${a}`}function Aa(c,s="#"){const a=c.getComponents("rgb"),f=[a[0],a[1],a[2],a[3]*255].map(eu).join("");return`${s}${f}`}function iu(c,s){const a=Ge(s==="float"?2:0);return`rgb(${Ri(c.getComponents("rgb",s)).map(E=>a(E)).join(", ")})`}function Nf(c){return s=>iu(s,c)}function $r(c,s){const a=Ge(2),f=Ge(s==="float"?2:0);return`rgba(${c.getComponents("rgb",s).map((k,W)=>(W===3?a:f)(k)).join(", ")})`}function Ff(c){return s=>$r(s,c)}function Of(c){const s=[Ge(0),Wr,Wr];return`hsl(${Ri(c.getComponents("hsl")).map((f,E)=>s[E](f)).join(", ")})`}function Bf(c){const s=[Ge(0),Wr,Wr,Ge(2)];return`hsla(${c.getComponents("hsl").map((f,E)=>s[E](f)).join(", ")})`}function su(c,s){const a=Ge(s==="float"?2:0),f=["r","g","b"];return`{${Ri(c.getComponents("rgb",s)).map((k,W)=>`${f[W]}: ${a(k)}`).join(", ")}}`}function kf(c){return s=>su(s,c)}function ru(c,s){const a=Ge(2),f=Ge(s==="float"?2:0),E=["r","g","b","a"];return`{${c.getComponents("rgb",s).map((W,ut)=>{const Dt=ut===3?a:f;return`${E[ut]}: ${Dt(W)}`}).join(", ")}}`}function Vf(c){return s=>ru(s,c)}const zf=[{format:{alpha:!1,mode:"rgb",notation:"hex",type:"int"},stringifier:nu},{format:{alpha:!0,mode:"rgb",notation:"hex",type:"int"},stringifier:Aa},{format:{alpha:!1,mode:"hsl",notation:"func",type:"int"},stringifier:Of},{format:{alpha:!0,mode:"hsl",notation:"func",type:"int"},stringifier:Bf},...["int","float"].reduce((c,s)=>[...c,{format:{alpha:!1,mode:"rgb",notation:"func",type:s},stringifier:Nf(s)},{format:{alpha:!0,mode:"rgb",notation:"func",type:s},stringifier:Ff(s)},{format:{alpha:!1,mode:"rgb",notation:"object",type:s},stringifier:kf(s)},{format:{alpha:!0,mode:"rgb",notation:"object",type:s},stringifier:Vf(s)}],[])];function Ca(c){return zf.reduce((s,a)=>s||(Cf(a.format,c)?a.stringifier:null),null)}const ar=y("apl");class Hf{constructor(s,a){this.onValueChange_=this.onValueChange_.bind(this),this.value=a.value,this.value.emitter.on("change",this.onValueChange_),this.element=s.createElement("div"),this.element.classList.add(ar()),a.viewProps.bindTabIndex(this.element);const f=s.createElement("div");f.classList.add(ar("b")),this.element.appendChild(f);const E=s.createElement("div");E.classList.add(ar("c")),f.appendChild(E),this.colorElem_=E;const k=s.createElement("div");k.classList.add(ar("m")),this.element.appendChild(k),this.markerElem_=k;const W=s.createElement("div");W.classList.add(ar("p")),this.markerElem_.appendChild(W),this.previewElem_=W,this.update_()}update_(){const s=this.value.rawValue,a=s.getComponents("rgb"),f=new ie([a[0],a[1],a[2],0],"rgb"),E=new ie([a[0],a[1],a[2],255],"rgb"),k=["to right",$r(f),$r(E)];this.colorElem_.style.background=`linear-gradient(${k.join(",")})`,this.previewElem_.style.backgroundColor=$r(s);const W=ye(a[3],0,1,0,100);this.markerElem_.style.left=`${W}%`}onValueChange_(){this.update_()}}class Gf{constructor(s,a){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=a.value,this.viewProps=a.viewProps,this.view=new Hf(s,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Ci(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(s,a){if(!s.point)return;const f=s.point.x/s.bounds.width,E=this.value.rawValue,[k,W,ut]=E.getComponents("hsv");this.value.setRawValue(new ie([k,W,ut,f],"hsv"),a)}onPointerDown_(s){this.handlePointerEvent_(s.data,{forceEmit:!1,last:!1})}onPointerMove_(s){this.handlePointerEvent_(s.data,{forceEmit:!1,last:!1})}onPointerUp_(s){this.handlePointerEvent_(s.data,{forceEmit:!0,last:!0})}onKeyDown_(s){const a=cn(Li(!0),Wn(s));if(a===0)return;const f=this.value.rawValue,[E,k,W,ut]=f.getComponents("hsv");this.value.setRawValue(new ie([E,k,W,ut+a],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(s){cn(Li(!0),Wn(s))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const Qi=y("coltxt");function Wf(c){const s=c.createElement("select"),a=[{text:"RGB",value:"rgb"},{text:"HSL",value:"hsl"},{text:"HSV",value:"hsv"}];return s.appendChild(a.reduce((f,E)=>{const k=c.createElement("option");return k.textContent=E.text,k.value=E.value,f.appendChild(k),f},c.createDocumentFragment())),s}class Xf{constructor(s,a){this.element=s.createElement("div"),this.element.classList.add(Qi());const f=s.createElement("div");f.classList.add(Qi("m")),this.modeElem_=Wf(s),this.modeElem_.classList.add(Qi("ms")),f.appendChild(this.modeSelectElement);const E=s.createElement("div");E.classList.add(Qi("mm")),E.appendChild(Gt(s,"dropdown")),f.appendChild(E),this.element.appendChild(f);const k=s.createElement("div");k.classList.add(Qi("w")),this.element.appendChild(k),this.textsElem_=k,this.textViews_=a.textViews,this.applyTextViews_(),C(a.colorMode,W=>{this.modeElem_.value=W})}get modeSelectElement(){return this.modeElem_}get textViews(){return this.textViews_}set textViews(s){this.textViews_=s,this.applyTextViews_()}applyTextViews_(){K(this.textsElem_);const s=this.element.ownerDocument;this.textViews_.forEach(a=>{const f=s.createElement("div");f.classList.add(Qi("c")),f.appendChild(a.element),this.textsElem_.appendChild(f)})}}function qf(c){return Ge(c==="float"?2:0)}function jf(c,s,a){const f=Yr(c,s)[a];return new Ie({min:0,max:f})}function Pa(c,s,a){return new rr(c,{arrayPosition:a===0?"fst":a===3-1?"lst":"mid",baseStep:Li(!1),parser:s.parser,props:X.fromObject({draggingScale:s.colorType==="float"?.01:1,formatter:qf(s.colorType)}),value:H(0,{constraint:jf(s.colorMode,s.colorType,a)}),viewProps:s.viewProps})}class Yf{constructor(s,a){this.onModeSelectChange_=this.onModeSelectChange_.bind(this),this.colorType_=a.colorType,this.parser_=a.parser,this.value=a.value,this.viewProps=a.viewProps,this.colorMode=H(this.value.rawValue.mode),this.ccs_=this.createComponentControllers_(s),this.view=new Xf(s,{colorMode:this.colorMode,textViews:[this.ccs_[0].view,this.ccs_[1].view,this.ccs_[2].view]}),this.view.modeSelectElement.addEventListener("change",this.onModeSelectChange_)}createComponentControllers_(s){const a={colorMode:this.colorMode.rawValue,colorType:this.colorType_,parser:this.parser_,viewProps:this.viewProps},f=[Pa(s,a,0),Pa(s,a,1),Pa(s,a,2)];return f.forEach((E,k)=>{ir({primary:this.value,secondary:E.value,forward:W=>W.rawValue.getComponents(this.colorMode.rawValue,this.colorType_)[k],backward:(W,ut)=>{const Dt=this.colorMode.rawValue,qt=W.rawValue.getComponents(Dt,this.colorType_);return qt[k]=ut.rawValue,new ie(Oc(Ri(qt),qt[3]),Dt,this.colorType_)}})}),f}onModeSelectChange_(s){const a=s.currentTarget;this.colorMode.rawValue=a.value,this.ccs_=this.createComponentControllers_(this.view.element.ownerDocument),this.view.textViews=[this.ccs_[0].view,this.ccs_[1].view,this.ccs_[2].view]}}const Ra=y("hpl");class Kf{constructor(s,a){this.onValueChange_=this.onValueChange_.bind(this),this.value=a.value,this.value.emitter.on("change",this.onValueChange_),this.element=s.createElement("div"),this.element.classList.add(Ra()),a.viewProps.bindTabIndex(this.element);const f=s.createElement("div");f.classList.add(Ra("c")),this.element.appendChild(f);const E=s.createElement("div");E.classList.add(Ra("m")),this.element.appendChild(E),this.markerElem_=E,this.update_()}update_(){const s=this.value.rawValue,[a]=s.getComponents("hsv");this.markerElem_.style.backgroundColor=iu(new ie([a,100,100],"hsv"));const f=ye(a,0,360,0,100);this.markerElem_.style.left=`${f}%`}onValueChange_(){this.update_()}}class $f{constructor(s,a){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=a.value,this.viewProps=a.viewProps,this.view=new Kf(s,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Ci(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(s,a){if(!s.point)return;const f=ye(Ue(s.point.x,0,s.bounds.width),0,s.bounds.width,0,359),E=this.value.rawValue,[,k,W,ut]=E.getComponents("hsv");this.value.setRawValue(new ie([f,k,W,ut],"hsv"),a)}onPointerDown_(s){this.handlePointerEvent_(s.data,{forceEmit:!1,last:!1})}onPointerMove_(s){this.handlePointerEvent_(s.data,{forceEmit:!1,last:!1})}onPointerUp_(s){this.handlePointerEvent_(s.data,{forceEmit:!0,last:!0})}onKeyDown_(s){const a=cn(Li(!1),Wn(s));if(a===0)return;const f=this.value.rawValue,[E,k,W,ut]=f.getComponents("hsv");this.value.setRawValue(new ie([E+a,k,W,ut],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(s){cn(Li(!1),Wn(s))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const La=y("svp"),ou=64;class Zf{constructor(s,a){this.onValueChange_=this.onValueChange_.bind(this),this.value=a.value,this.value.emitter.on("change",this.onValueChange_),this.element=s.createElement("div"),this.element.classList.add(La()),a.viewProps.bindTabIndex(this.element);const f=s.createElement("canvas");f.height=ou,f.width=ou,f.classList.add(La("c")),this.element.appendChild(f),this.canvasElement=f;const E=s.createElement("div");E.classList.add(La("m")),this.element.appendChild(E),this.markerElem_=E,this.update_()}update_(){const s=Tt(this.canvasElement);if(!s)return;const f=this.value.rawValue.getComponents("hsv"),E=this.canvasElement.width,k=this.canvasElement.height,W=s.getImageData(0,0,E,k),ut=W.data;for(let ae=0;ae<k;ae++)for(let le=0;le<E;le++){const qn=ye(le,0,E,0,100),cr=ye(ae,0,k,100,0),ur=Fc(f[0],qn,cr),ns=(ae*E+le)*4;ut[ns]=ur[0],ut[ns+1]=ur[1],ut[ns+2]=ur[2],ut[ns+3]=255}s.putImageData(W,0,0);const Dt=ye(f[1],0,100,0,100);this.markerElem_.style.left=`${Dt}%`;const qt=ye(f[2],0,100,100,0);this.markerElem_.style.top=`${qt}%`}onValueChange_(){this.update_()}}class Qf{constructor(s,a){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=a.value,this.viewProps=a.viewProps,this.view=new Zf(s,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Ci(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(s,a){if(!s.point)return;const f=ye(s.point.x,0,s.bounds.width,0,100),E=ye(s.point.y,0,s.bounds.height,100,0),[k,,,W]=this.value.rawValue.getComponents("hsv");this.value.setRawValue(new ie([k,f,E,W],"hsv"),a)}onPointerDown_(s){this.handlePointerEvent_(s.data,{forceEmit:!1,last:!1})}onPointerMove_(s){this.handlePointerEvent_(s.data,{forceEmit:!1,last:!1})}onPointerUp_(s){this.handlePointerEvent_(s.data,{forceEmit:!0,last:!0})}onKeyDown_(s){Lc(s.key)&&s.preventDefault();const[a,f,E,k]=this.value.rawValue.getComponents("hsv"),W=Li(!1),ut=cn(W,Wn(s)),Dt=cn(W,sr(s));ut===0&&Dt===0||this.value.setRawValue(new ie([a,f+ut,E+Dt,k],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(s){const a=Li(!1),f=cn(a,Wn(s)),E=cn(a,sr(s));f===0&&E===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class Jf{constructor(s,a){this.value=a.value,this.viewProps=a.viewProps,this.hPaletteC_=new $f(s,{value:this.value,viewProps:this.viewProps}),this.svPaletteC_=new Qf(s,{value:this.value,viewProps:this.viewProps}),this.alphaIcs_=a.supportsAlpha?{palette:new Gf(s,{value:this.value,viewProps:this.viewProps}),text:new rr(s,{parser:Gn,baseStep:.1,props:X.fromObject({draggingScale:.01,formatter:Ge(2)}),value:H(0,{constraint:new Ie({min:0,max:1})}),viewProps:this.viewProps})}:null,this.alphaIcs_&&ir({primary:this.value,secondary:this.alphaIcs_.text.value,forward:f=>f.rawValue.getComponents()[3],backward:(f,E)=>{const k=f.rawValue.getComponents();return k[3]=E.rawValue,new ie(k,f.rawValue.mode)}}),this.textC_=new Yf(s,{colorType:a.colorType,parser:Gn,value:this.value,viewProps:this.viewProps}),this.view=new Tf(s,{alphaViews:this.alphaIcs_?{palette:this.alphaIcs_.palette.view,text:this.alphaIcs_.text.view}:null,hPaletteView:this.hPaletteC_.view,supportsAlpha:a.supportsAlpha,svPaletteView:this.svPaletteC_.view,textView:this.textC_.view})}get textController(){return this.textC_}}const Da=y("colsw");class tm{constructor(s,a){this.onValueChange_=this.onValueChange_.bind(this),a.value.emitter.on("change",this.onValueChange_),this.value=a.value,this.element=s.createElement("div"),this.element.classList.add(Da()),a.viewProps.bindClassModifiers(this.element);const f=s.createElement("div");f.classList.add(Da("sw")),this.element.appendChild(f),this.swatchElem_=f;const E=s.createElement("button");E.classList.add(Da("b")),a.viewProps.bindDisabled(E),this.element.appendChild(E),this.buttonElement=E,this.update_()}update_(){const s=this.value.rawValue;this.swatchElem_.style.backgroundColor=Aa(s)}onValueChange_(){this.update_()}}class em{constructor(s,a){this.value=a.value,this.viewProps=a.viewProps,this.view=new tm(s,{value:this.value,viewProps:this.viewProps})}}class Ia{constructor(s,a){this.onButtonBlur_=this.onButtonBlur_.bind(this),this.onButtonClick_=this.onButtonClick_.bind(this),this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.value=a.value,this.viewProps=a.viewProps,this.foldable_=ne.create(a.expanded),this.swatchC_=new em(s,{value:this.value,viewProps:this.viewProps});const f=this.swatchC_.view.buttonElement;f.addEventListener("blur",this.onButtonBlur_),f.addEventListener("click",this.onButtonClick_),this.textC_=new Gr(s,{parser:a.parser,props:X.fromObject({formatter:a.formatter}),value:this.value,viewProps:this.viewProps}),this.view=new _f(s,{foldable:this.foldable_,pickerLayout:a.pickerLayout}),this.view.swatchElement.appendChild(this.swatchC_.view.element),this.view.textElement.appendChild(this.textC_.view.element),this.popC_=a.pickerLayout==="popup"?new yc(s,{viewProps:this.viewProps}):null;const E=new Jf(s,{colorType:a.colorType,supportsAlpha:a.supportsAlpha,value:this.value,viewProps:this.viewProps});E.view.allFocusableElements.forEach(k=>{k.addEventListener("blur",this.onPopupChildBlur_),k.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=E,this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(E.view.element),ir({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:k=>k.rawValue,backward:(k,W)=>W.rawValue})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),At(this.foldable_,this.view.pickerElement))}get textController(){return this.textC_}onButtonBlur_(s){if(!this.popC_)return;const a=this.view.element,f=s.relatedTarget;(!f||!a.contains(f))&&(this.popC_.shows.rawValue=!1)}onButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(s){if(!this.popC_)return;const a=this.popC_.view.element,f=ot(s);f&&a.contains(f)||f&&f===this.swatchC_.view.buttonElement&&!Ee(a.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(s){this.popC_?s.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&s.key==="Escape"&&this.swatchC_.view.buttonElement.focus()}}function nm(c,s){return ie.isColorObject(c)?ie.fromObject(c,s):ie.black(s)}function im(c){return Ri(c.getComponents("rgb")).reduce((s,a)=>s<<8|Math.floor(a)&255,0)}function sm(c){return c.getComponents("rgb").reduce((s,a,f)=>{const E=Math.floor(f===3?a*255:a)&255;return s<<8|E},0)>>>0}function rm(c){return new ie([c>>16&255,c>>8&255,c&255],"rgb")}function om(c){return new ie([c>>24&255,c>>16&255,c>>8&255,ye(c&255,0,255,0,1)],"rgb")}function am(c){return typeof c!="number"?ie.black():rm(c)}function lm(c){return typeof c!="number"?ie.black():om(c)}function cm(c){const s=Ca(c);return s?(a,f)=>{or(a,s(f))}:null}function um(c){const s=c?sm:im;return(a,f)=>{or(a,s(f))}}function hm(c,s,a){const f=s.toRgbaObject(a);c.writeProperty("r",f.r),c.writeProperty("g",f.g),c.writeProperty("b",f.b),c.writeProperty("a",f.a)}function dm(c,s,a){const f=s.toRgbaObject(a);c.writeProperty("r",f.r),c.writeProperty("g",f.g),c.writeProperty("b",f.b)}function pm(c,s){return(a,f)=>{c?hm(a,f,s):dm(a,f,s)}}function Ua(c){var s;return!!((c==null?void 0:c.alpha)||((s=c==null?void 0:c.color)===null||s===void 0?void 0:s.alpha))}function fm(c){return c?s=>Aa(s,"0x"):s=>nu(s,"0x")}function mm(c){return"color"in c||"view"in c&&c.view==="color"}const gm={id:"input-color-number",type:"input",accept:(c,s)=>{if(typeof c!="number"||!mm(s))return null;const a=Ea(s);return a?{initialValue:c,params:a}:null},binding:{reader:c=>Ua(c.params)?lm:am,equals:ie.equals,writer:c=>um(Ua(c.params))},controller:c=>{const s=Ua(c.params),a="expanded"in c.params?c.params.expanded:void 0,f="picker"in c.params?c.params.picker:void 0;return new Ia(c.document,{colorType:"int",expanded:a!=null?a:!1,formatter:fm(s),parser:Ta("int"),pickerLayout:f!=null?f:"popup",supportsAlpha:s,value:c.value,viewProps:c.viewProps})}};function _m(c){return ie.isRgbaColorObject(c)}function vm(c){return s=>nm(s,c)}function xm(c,s){return a=>c?ru(a,s):su(a,s)}const bm={id:"input-color-object",type:"input",accept:(c,s)=>{if(!ie.isColorObject(c))return null;const a=Ea(s);return a?{initialValue:c,params:a}:null},binding:{reader:c=>vm(Di(c.params)),equals:ie.equals,writer:c=>pm(_m(c.initialValue),Di(c.params))},controller:c=>{var s;const a=ie.isRgbaColorObject(c.initialValue),f="expanded"in c.params?c.params.expanded:void 0,E="picker"in c.params?c.params.picker:void 0,k=(s=Di(c.params))!==null&&s!==void 0?s:"int";return new Ia(c.document,{colorType:k,expanded:f!=null?f:!1,formatter:xm(a,k),parser:Ta(k),pickerLayout:E!=null?E:"popup",supportsAlpha:a,value:c.value,viewProps:c.viewProps})}},ym={id:"input-color-string",type:"input",accept:(c,s)=>{if(typeof c!="string"||"view"in s&&s.view==="text")return null;const a=Sa(c,Di(s));if(!a||!Ca(a))return null;const E=Ea(s);return E?{initialValue:c,params:E}:null},binding:{reader:c=>{var s;return Uf((s=Di(c.params))!==null&&s!==void 0?s:"int")},equals:ie.equals,writer:c=>{const s=Sa(c.initialValue,Di(c.params));if(!s)throw b.shouldNeverHappen();const a=cm(s);if(!a)throw b.notBindable();return a}},controller:c=>{const s=Sa(c.initialValue,Di(c.params));if(!s)throw b.shouldNeverHappen();const a=Ca(s);if(!a)throw b.shouldNeverHappen();const f="expanded"in c.params?c.params.expanded:void 0,E="picker"in c.params?c.params.picker:void 0;return new Ia(c.document,{colorType:s.type,expanded:f!=null?f:!1,formatter:a,parser:Ta(s.type),pickerLayout:E!=null?E:"popup",supportsAlpha:s.alpha,value:c.value,viewProps:c.viewProps})}};class ci{constructor(s){this.components=s.components,this.asm_=s.assembly}constrain(s){const a=this.asm_.toComponents(s).map((f,E)=>{var k,W;return(W=(k=this.components[E])===null||k===void 0?void 0:k.constrain(f))!==null&&W!==void 0?W:f});return this.asm_.fromComponents(a)}}const au=y("pndtxt");class wm{constructor(s,a){this.textViews=a.textViews,this.element=s.createElement("div"),this.element.classList.add(au()),this.textViews.forEach(f=>{const E=s.createElement("div");E.classList.add(au("a")),E.appendChild(f.element),this.element.appendChild(E)})}}function Mm(c,s,a){return new rr(c,{arrayPosition:a===0?"fst":a===s.axes.length-1?"lst":"mid",baseStep:s.axes[a].baseStep,parser:s.parser,props:s.axes[a].textProps,value:H(0,{constraint:s.axes[a].constraint}),viewProps:s.viewProps})}class Na{constructor(s,a){this.value=a.value,this.viewProps=a.viewProps,this.acs_=a.axes.map((f,E)=>Mm(s,a,E)),this.acs_.forEach((f,E)=>{ir({primary:this.value,secondary:f.value,forward:k=>a.assembly.toComponents(k.rawValue)[E],backward:(k,W)=>{const ut=a.assembly.toComponents(k.rawValue);return ut[E]=W.rawValue,a.assembly.fromComponents(ut)}})}),this.view=new wm(s,{textViews:this.acs_.map(f=>f.view)})}}function lu(c,s){return"step"in c&&!m(c.step)?new oi(c.step,s):null}function cu(c){return"max"in c&&!m(c.max)||"min"in c&&!m(c.min)?new Ie({max:c.max,min:c.min}):null}function Em(c,s){const a=[],f=lu(c,s);f&&a.push(f);const E=cu(c);E&&a.push(E);const k=wa(c.options);return k&&a.push(k),new Ae(a)}function Sm(c){const s=c?Be(c,Ie):null;return s?[s.minValue,s.maxValue]:[void 0,void 0]}function Tm(c){const[s,a]=Sm(c);return[s!=null?s:0,a!=null?a:100]}const Am={id:"input-number",type:"input",accept:(c,s)=>{if(typeof c!="number")return null;const a=vt,f=$(s,{format:a.optional.function,max:a.optional.number,min:a.optional.number,options:a.optional.custom(Xr),step:a.optional.number});return f?{initialValue:c,params:f}:null},binding:{reader:c=>Cc,constraint:c=>Em(c.params,c.initialValue),writer:c=>or},controller:c=>{var s,a;const f=c.value,E=c.constraint;if(E&&Be(E,Hn))return new tr(c.document,{props:X.fromObject({options:(s=Ma(E))!==null&&s!==void 0?s:[]}),value:f,viewProps:c.viewProps});const k=(a="format"in c.params?c.params.format:void 0)!==null&&a!==void 0?a:Ge(qr(E,f.rawValue));if(E&&Be(E,Ie)){const[W,ut]=Tm(E);return new ya(c.document,{baseStep:$i(E),parser:Gn,sliderProps:X.fromObject({maxValue:ut,minValue:W}),textProps:X.fromObject({draggingScale:Zi(E,f.rawValue),formatter:k}),value:f,viewProps:c.viewProps})}return new rr(c.document,{baseStep:$i(E),parser:Gn,props:X.fromObject({draggingScale:Zi(E,f.rawValue),formatter:k}),value:f,viewProps:c.viewProps})}};class ui{constructor(s=0,a=0){this.x=s,this.y=a}getComponents(){return[this.x,this.y]}static isObject(s){if(m(s))return!1;const a=s.x,f=s.y;return!(typeof a!="number"||typeof f!="number")}static equals(s,a){return s.x===a.x&&s.y===a.y}toObject(){return{x:this.x,y:this.y}}}const uu={toComponents:c=>c.getComponents(),fromComponents:c=>new ui(...c)},Ji=y("p2d");class Cm{constructor(s,a){this.element=s.createElement("div"),this.element.classList.add(Ji()),a.viewProps.bindClassModifiers(this.element),C(a.expanded,z(this.element,Ji(void 0,"expanded")));const f=s.createElement("div");f.classList.add(Ji("h")),this.element.appendChild(f);const E=s.createElement("button");E.classList.add(Ji("b")),E.appendChild(Gt(s,"p2dpad")),a.viewProps.bindDisabled(E),f.appendChild(E),this.buttonElement=E;const k=s.createElement("div");if(k.classList.add(Ji("t")),f.appendChild(k),this.textElement=k,a.pickerLayout==="inline"){const W=s.createElement("div");W.classList.add(Ji("p")),this.element.appendChild(W),this.pickerElement=W}else this.pickerElement=null}}const hi=y("p2dp");class Pm{constructor(s,a){this.onFoldableChange_=this.onFoldableChange_.bind(this),this.onValueChange_=this.onValueChange_.bind(this),this.invertsY_=a.invertsY,this.maxValue_=a.maxValue,this.element=s.createElement("div"),this.element.classList.add(hi()),a.layout==="popup"&&this.element.classList.add(hi(void 0,"p"));const f=s.createElement("div");f.classList.add(hi("p")),a.viewProps.bindTabIndex(f),this.element.appendChild(f),this.padElement=f;const E=s.createElementNS(Wt,"svg");E.classList.add(hi("g")),this.padElement.appendChild(E),this.svgElem_=E;const k=s.createElementNS(Wt,"line");k.classList.add(hi("ax")),k.setAttributeNS(null,"x1","0"),k.setAttributeNS(null,"y1","50%"),k.setAttributeNS(null,"x2","100%"),k.setAttributeNS(null,"y2","50%"),this.svgElem_.appendChild(k);const W=s.createElementNS(Wt,"line");W.classList.add(hi("ax")),W.setAttributeNS(null,"x1","50%"),W.setAttributeNS(null,"y1","0"),W.setAttributeNS(null,"x2","50%"),W.setAttributeNS(null,"y2","100%"),this.svgElem_.appendChild(W);const ut=s.createElementNS(Wt,"line");ut.classList.add(hi("l")),ut.setAttributeNS(null,"x1","50%"),ut.setAttributeNS(null,"y1","50%"),this.svgElem_.appendChild(ut),this.lineElem_=ut;const Dt=s.createElement("div");Dt.classList.add(hi("m")),this.padElement.appendChild(Dt),this.markerElem_=Dt,a.value.emitter.on("change",this.onValueChange_),this.value=a.value,this.update_()}get allFocusableElements(){return[this.padElement]}update_(){const[s,a]=this.value.rawValue.getComponents(),f=this.maxValue_,E=ye(s,-f,+f,0,100),k=ye(a,-f,+f,0,100),W=this.invertsY_?100-k:k;this.lineElem_.setAttributeNS(null,"x2",`${E}%`),this.lineElem_.setAttributeNS(null,"y2",`${W}%`),this.markerElem_.style.left=`${E}%`,this.markerElem_.style.top=`${W}%`}onValueChange_(){this.update_()}onFoldableChange_(){this.update_()}}function hu(c,s,a){return[cn(s[0],Wn(c)),cn(s[1],sr(c))*(a?1:-1)]}class Rm{constructor(s,a){this.onPadKeyDown_=this.onPadKeyDown_.bind(this),this.onPadKeyUp_=this.onPadKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=a.value,this.viewProps=a.viewProps,this.baseSteps_=a.baseSteps,this.maxValue_=a.maxValue,this.invertsY_=a.invertsY,this.view=new Pm(s,{invertsY:this.invertsY_,layout:a.layout,maxValue:this.maxValue_,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Ci(this.view.padElement),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.padElement.addEventListener("keydown",this.onPadKeyDown_),this.view.padElement.addEventListener("keyup",this.onPadKeyUp_)}handlePointerEvent_(s,a){if(!s.point)return;const f=this.maxValue_,E=ye(s.point.x,0,s.bounds.width,-f,+f),k=ye(this.invertsY_?s.bounds.height-s.point.y:s.point.y,0,s.bounds.height,-f,+f);this.value.setRawValue(new ui(E,k),a)}onPointerDown_(s){this.handlePointerEvent_(s.data,{forceEmit:!1,last:!1})}onPointerMove_(s){this.handlePointerEvent_(s.data,{forceEmit:!1,last:!1})}onPointerUp_(s){this.handlePointerEvent_(s.data,{forceEmit:!0,last:!0})}onPadKeyDown_(s){Lc(s.key)&&s.preventDefault();const[a,f]=hu(s,this.baseSteps_,this.invertsY_);a===0&&f===0||this.value.setRawValue(new ui(this.value.rawValue.x+a,this.value.rawValue.y+f),{forceEmit:!1,last:!1})}onPadKeyUp_(s){const[a,f]=hu(s,this.baseSteps_,this.invertsY_);a===0&&f===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class Lm{constructor(s,a){var f,E;this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.onPadButtonBlur_=this.onPadButtonBlur_.bind(this),this.onPadButtonClick_=this.onPadButtonClick_.bind(this),this.value=a.value,this.viewProps=a.viewProps,this.foldable_=ne.create(a.expanded),this.popC_=a.pickerLayout==="popup"?new yc(s,{viewProps:this.viewProps}):null;const k=new Rm(s,{baseSteps:[a.axes[0].baseStep,a.axes[1].baseStep],invertsY:a.invertsY,layout:a.pickerLayout,maxValue:a.maxValue,value:this.value,viewProps:this.viewProps});k.view.allFocusableElements.forEach(W=>{W.addEventListener("blur",this.onPopupChildBlur_),W.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=k,this.textC_=new Na(s,{assembly:uu,axes:a.axes,parser:a.parser,value:this.value,viewProps:this.viewProps}),this.view=new Cm(s,{expanded:this.foldable_.value("expanded"),pickerLayout:a.pickerLayout,viewProps:this.viewProps}),this.view.textElement.appendChild(this.textC_.view.element),(f=this.view.buttonElement)===null||f===void 0||f.addEventListener("blur",this.onPadButtonBlur_),(E=this.view.buttonElement)===null||E===void 0||E.addEventListener("click",this.onPadButtonClick_),this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(this.pickerC_.view.element),ir({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:W=>W.rawValue,backward:(W,ut)=>ut.rawValue})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),At(this.foldable_,this.view.pickerElement))}onPadButtonBlur_(s){if(!this.popC_)return;const a=this.view.element,f=s.relatedTarget;(!f||!a.contains(f))&&(this.popC_.shows.rawValue=!1)}onPadButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(s){if(!this.popC_)return;const a=this.popC_.view.element,f=ot(s);f&&a.contains(f)||f&&f===this.view.buttonElement&&!Ee(a.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(s){this.popC_?s.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&s.key==="Escape"&&this.view.buttonElement.focus()}}function Dm(c){return ui.isObject(c)?new ui(c.x,c.y):new ui}function Im(c,s){c.writeProperty("x",s.x),c.writeProperty("y",s.y)}function Xn(c,s){if(!c)return;const a=[],f=lu(c,s);f&&a.push(f);const E=cu(c);return E&&a.push(E),new Ae(a)}function Um(c,s){return new ci({assembly:uu,components:[Xn("x"in c?c.x:void 0,s.x),Xn("y"in c?c.y:void 0,s.y)]})}function du(c,s){var a,f;const E=c&&Be(c,Ie);if(E)return Math.max(Math.abs((a=E.minValue)!==null&&a!==void 0?a:0),Math.abs((f=E.maxValue)!==null&&f!==void 0?f:0));const k=$i(c);return Math.max(Math.abs(k)*10,Math.abs(s)*10)}function Nm(c,s){const a=s instanceof ci?s.components[0]:void 0,f=s instanceof ci?s.components[1]:void 0,E=du(a,c.x),k=du(f,c.y);return Math.max(E,k)}function pu(c,s){return{baseStep:$i(s),constraint:s,textProps:X.fromObject({draggingScale:Zi(s,c),formatter:Ge(qr(s,c))})}}function Fm(c){if(!("y"in c))return!1;const s=c.y;return s&&"inverted"in s?!!s.inverted:!1}const Om={id:"input-point2d",type:"input",accept:(c,s)=>{if(!ui.isObject(c))return null;const a=vt,f=$(s,{expanded:a.optional.boolean,picker:a.optional.custom(Uc),x:a.optional.custom(ai),y:a.optional.object({inverted:a.optional.boolean,max:a.optional.number,min:a.optional.number,step:a.optional.number})});return f?{initialValue:c,params:f}:null},binding:{reader:c=>Dm,constraint:c=>Um(c.params,c.initialValue),equals:ui.equals,writer:c=>Im},controller:c=>{const s=c.document,a=c.value,f=c.constraint;if(!(f instanceof ci))throw b.shouldNeverHappen();const E="expanded"in c.params?c.params.expanded:void 0,k="picker"in c.params?c.params.picker:void 0;return new Lm(s,{axes:[pu(a.rawValue.x,f.components[0]),pu(a.rawValue.y,f.components[1])],expanded:E!=null?E:!1,invertsY:Fm(c.params),maxValue:Nm(a.rawValue,f),parser:Gn,pickerLayout:k!=null?k:"popup",value:a,viewProps:c.viewProps})}};class ts{constructor(s=0,a=0,f=0){this.x=s,this.y=a,this.z=f}getComponents(){return[this.x,this.y,this.z]}static isObject(s){if(m(s))return!1;const a=s.x,f=s.y,E=s.z;return!(typeof a!="number"||typeof f!="number"||typeof E!="number")}static equals(s,a){return s.x===a.x&&s.y===a.y&&s.z===a.z}toObject(){return{x:this.x,y:this.y,z:this.z}}}const fu={toComponents:c=>c.getComponents(),fromComponents:c=>new ts(...c)};function Bm(c){return ts.isObject(c)?new ts(c.x,c.y,c.z):new ts}function km(c,s){c.writeProperty("x",s.x),c.writeProperty("y",s.y),c.writeProperty("z",s.z)}function Vm(c,s){return new ci({assembly:fu,components:[Xn("x"in c?c.x:void 0,s.x),Xn("y"in c?c.y:void 0,s.y),Xn("z"in c?c.z:void 0,s.z)]})}function Fa(c,s){return{baseStep:$i(s),constraint:s,textProps:X.fromObject({draggingScale:Zi(s,c),formatter:Ge(qr(s,c))})}}const zm={id:"input-point3d",type:"input",accept:(c,s)=>{if(!ts.isObject(c))return null;const a=vt,f=$(s,{x:a.optional.custom(ai),y:a.optional.custom(ai),z:a.optional.custom(ai)});return f?{initialValue:c,params:f}:null},binding:{reader:c=>Bm,constraint:c=>Vm(c.params,c.initialValue),equals:ts.equals,writer:c=>km},controller:c=>{const s=c.value,a=c.constraint;if(!(a instanceof ci))throw b.shouldNeverHappen();return new Na(c.document,{assembly:fu,axes:[Fa(s.rawValue.x,a.components[0]),Fa(s.rawValue.y,a.components[1]),Fa(s.rawValue.z,a.components[2])],parser:Gn,value:s,viewProps:c.viewProps})}};class es{constructor(s=0,a=0,f=0,E=0){this.x=s,this.y=a,this.z=f,this.w=E}getComponents(){return[this.x,this.y,this.z,this.w]}static isObject(s){if(m(s))return!1;const a=s.x,f=s.y,E=s.z,k=s.w;return!(typeof a!="number"||typeof f!="number"||typeof E!="number"||typeof k!="number")}static equals(s,a){return s.x===a.x&&s.y===a.y&&s.z===a.z&&s.w===a.w}toObject(){return{x:this.x,y:this.y,z:this.z,w:this.w}}}const mu={toComponents:c=>c.getComponents(),fromComponents:c=>new es(...c)};function Hm(c){return es.isObject(c)?new es(c.x,c.y,c.z,c.w):new es}function Gm(c,s){c.writeProperty("x",s.x),c.writeProperty("y",s.y),c.writeProperty("z",s.z),c.writeProperty("w",s.w)}function Wm(c,s){return new ci({assembly:mu,components:[Xn("x"in c?c.x:void 0,s.x),Xn("y"in c?c.y:void 0,s.y),Xn("z"in c?c.z:void 0,s.z),Xn("w"in c?c.w:void 0,s.w)]})}function Xm(c,s){return{baseStep:$i(s),constraint:s,textProps:X.fromObject({draggingScale:Zi(s,c),formatter:Ge(qr(s,c))})}}const qm={id:"input-point4d",type:"input",accept:(c,s)=>{if(!es.isObject(c))return null;const a=vt,f=$(s,{x:a.optional.custom(ai),y:a.optional.custom(ai),z:a.optional.custom(ai),w:a.optional.custom(ai)});return f?{initialValue:c,params:f}:null},binding:{reader:c=>Hm,constraint:c=>Wm(c.params,c.initialValue),equals:es.equals,writer:c=>Gm},controller:c=>{const s=c.value,a=c.constraint;if(!(a instanceof ci))throw b.shouldNeverHappen();return new Na(c.document,{assembly:mu,axes:s.rawValue.getComponents().map((f,E)=>Xm(f,a.components[E])),parser:Gn,value:s,viewProps:c.viewProps})}};function jm(c){const s=[],a=wa(c.options);return a&&s.push(a),new Ae(s)}const Ym={id:"input-string",type:"input",accept:(c,s)=>{if(typeof c!="string")return null;const f=$(s,{options:vt.optional.custom(Xr)});return f?{initialValue:c,params:f}:null},binding:{reader:c=>Pc,constraint:c=>jm(c.params),writer:c=>or},controller:c=>{var s;const a=c.document,f=c.value,E=c.constraint;return E&&Be(E,Hn)?new tr(a,{props:X.fromObject({options:(s=Ma(E))!==null&&s!==void 0?s:[]}),value:f,viewProps:c.viewProps}):new Gr(a,{parser:k=>k,props:X.fromObject({formatter:_a}),value:f,viewProps:c.viewProps})}},lr={monitor:{defaultInterval:200,defaultLineCount:3}},gu=y("mll");class Km{constructor(s,a){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=a.formatter,this.element=s.createElement("div"),this.element.classList.add(gu()),a.viewProps.bindClassModifiers(this.element);const f=s.createElement("textarea");f.classList.add(gu("i")),f.style.height=`calc(var(--bld-us) * ${a.lineCount})`,f.readOnly=!0,a.viewProps.bindDisabled(f),this.element.appendChild(f),this.textareaElem_=f,a.value.emitter.on("change",this.onValueUpdate_),this.value=a.value,this.update_()}update_(){const s=this.textareaElem_,a=s.scrollTop===s.scrollHeight-s.clientHeight,f=[];this.value.rawValue.forEach(E=>{E!==void 0&&f.push(this.formatter_(E))}),s.textContent=f.join(`
`),a&&(s.scrollTop=s.scrollHeight)}onValueUpdate_(){this.update_()}}class Oa{constructor(s,a){this.value=a.value,this.viewProps=a.viewProps,this.view=new Km(s,{formatter:a.formatter,lineCount:a.lineCount,value:this.value,viewProps:this.viewProps})}}const _u=y("sgl");class $m{constructor(s,a){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=a.formatter,this.element=s.createElement("div"),this.element.classList.add(_u()),a.viewProps.bindClassModifiers(this.element);const f=s.createElement("input");f.classList.add(_u("i")),f.readOnly=!0,f.type="text",a.viewProps.bindDisabled(f),this.element.appendChild(f),this.inputElement=f,a.value.emitter.on("change",this.onValueUpdate_),this.value=a.value,this.update_()}update_(){const s=this.value.rawValue,a=s[s.length-1];this.inputElement.value=a!==void 0?this.formatter_(a):""}onValueUpdate_(){this.update_()}}class Ba{constructor(s,a){this.value=a.value,this.viewProps=a.viewProps,this.view=new $m(s,{formatter:a.formatter,value:this.value,viewProps:this.viewProps})}}const Zm={id:"monitor-bool",type:"monitor",accept:(c,s)=>{if(typeof c!="boolean")return null;const f=$(s,{lineCount:vt.optional.number});return f?{initialValue:c,params:f}:null},binding:{reader:c=>Mc},controller:c=>{var s;return c.value.rawValue.length===1?new Ba(c.document,{formatter:Ec,value:c.value,viewProps:c.viewProps}):new Oa(c.document,{formatter:Ec,lineCount:(s=c.params.lineCount)!==null&&s!==void 0?s:lr.monitor.defaultLineCount,value:c.value,viewProps:c.viewProps})}},di=y("grl");class Qm{constructor(s,a){this.onCursorChange_=this.onCursorChange_.bind(this),this.onValueUpdate_=this.onValueUpdate_.bind(this),this.element=s.createElement("div"),this.element.classList.add(di()),a.viewProps.bindClassModifiers(this.element),this.formatter_=a.formatter,this.props_=a.props,this.cursor_=a.cursor,this.cursor_.emitter.on("change",this.onCursorChange_);const f=s.createElementNS(Wt,"svg");f.classList.add(di("g")),f.style.height=`calc(var(--bld-us) * ${a.lineCount})`,this.element.appendChild(f),this.svgElem_=f;const E=s.createElementNS(Wt,"polyline");this.svgElem_.appendChild(E),this.lineElem_=E;const k=s.createElement("div");k.classList.add(di("t"),y("tt")()),this.element.appendChild(k),this.tooltipElem_=k,a.value.emitter.on("change",this.onValueUpdate_),this.value=a.value,this.update_()}get graphElement(){return this.svgElem_}update_(){const s=this.svgElem_.getBoundingClientRect(),a=this.value.rawValue.length-1,f=this.props_.get("minValue"),E=this.props_.get("maxValue"),k=[];this.value.rawValue.forEach((ae,le)=>{if(ae===void 0)return;const qn=ye(le,0,a,0,s.width),cr=ye(ae,f,E,s.height,0);k.push([qn,cr].join(","))}),this.lineElem_.setAttributeNS(null,"points",k.join(" "));const W=this.tooltipElem_,ut=this.value.rawValue[this.cursor_.rawValue];if(ut===void 0){W.classList.remove(di("t","a"));return}const Dt=ye(this.cursor_.rawValue,0,a,0,s.width),qt=ye(ut,f,E,s.height,0);W.style.left=`${Dt}px`,W.style.top=`${qt}px`,W.textContent=`${this.formatter_(ut)}`,W.classList.contains(di("t","a"))||(W.classList.add(di("t","a"),di("t","in")),kt(W),W.classList.remove(di("t","in")))}onValueUpdate_(){this.update_()}onCursorChange_(){this.update_()}}class Jm{constructor(s,a){if(this.onGraphMouseMove_=this.onGraphMouseMove_.bind(this),this.onGraphMouseLeave_=this.onGraphMouseLeave_.bind(this),this.onGraphPointerDown_=this.onGraphPointerDown_.bind(this),this.onGraphPointerMove_=this.onGraphPointerMove_.bind(this),this.onGraphPointerUp_=this.onGraphPointerUp_.bind(this),this.props_=a.props,this.value=a.value,this.viewProps=a.viewProps,this.cursor_=H(-1),this.view=new Qm(s,{cursor:this.cursor_,formatter:a.formatter,lineCount:a.lineCount,props:this.props_,value:this.value,viewProps:this.viewProps}),!Ee(s))this.view.element.addEventListener("mousemove",this.onGraphMouseMove_),this.view.element.addEventListener("mouseleave",this.onGraphMouseLeave_);else{const f=new Ci(this.view.element);f.emitter.on("down",this.onGraphPointerDown_),f.emitter.on("move",this.onGraphPointerMove_),f.emitter.on("up",this.onGraphPointerUp_)}}onGraphMouseLeave_(){this.cursor_.rawValue=-1}onGraphMouseMove_(s){const a=this.view.element.getBoundingClientRect();this.cursor_.rawValue=Math.floor(ye(s.offsetX,0,a.width,0,this.value.rawValue.length))}onGraphPointerDown_(s){this.onGraphPointerMove_(s)}onGraphPointerMove_(s){if(!s.data.point){this.cursor_.rawValue=-1;return}this.cursor_.rawValue=Math.floor(ye(s.data.point.x,0,s.data.bounds.width,0,this.value.rawValue.length))}onGraphPointerUp_(){this.cursor_.rawValue=-1}}function ka(c){return"format"in c&&!m(c.format)?c.format:Ge(2)}function tg(c){var s;return c.value.rawValue.length===1?new Ba(c.document,{formatter:ka(c.params),value:c.value,viewProps:c.viewProps}):new Oa(c.document,{formatter:ka(c.params),lineCount:(s=c.params.lineCount)!==null&&s!==void 0?s:lr.monitor.defaultLineCount,value:c.value,viewProps:c.viewProps})}function eg(c){var s,a,f;return new Jm(c.document,{formatter:ka(c.params),lineCount:(s=c.params.lineCount)!==null&&s!==void 0?s:lr.monitor.defaultLineCount,props:X.fromObject({maxValue:(a="max"in c.params?c.params.max:null)!==null&&a!==void 0?a:100,minValue:(f="min"in c.params?c.params.min:null)!==null&&f!==void 0?f:0}),value:c.value,viewProps:c.viewProps})}function vu(c){return"view"in c&&c.view==="graph"}const ng={id:"monitor-number",type:"monitor",accept:(c,s)=>{if(typeof c!="number")return null;const a=vt,f=$(s,{format:a.optional.function,lineCount:a.optional.number,max:a.optional.number,min:a.optional.number,view:a.optional.string});return f?{initialValue:c,params:f}:null},binding:{defaultBufferSize:c=>vu(c)?64:1,reader:c=>Cc},controller:c=>vu(c.params)?eg(c):tg(c)},ig={id:"monitor-string",type:"monitor",accept:(c,s)=>{if(typeof c!="string")return null;const a=vt,f=$(s,{lineCount:a.optional.number,multiline:a.optional.boolean});return f?{initialValue:c,params:f}:null},binding:{reader:c=>Pc},controller:c=>{var s;const a=c.value;return a.rawValue.length>1||"multiline"in c.params&&c.params.multiline?new Oa(c.document,{formatter:_a,lineCount:(s=c.params.lineCount)!==null&&s!==void 0?s:lr.monitor.defaultLineCount,value:a,viewProps:c.viewProps}):new Ba(c.document,{formatter:_a,value:a,viewProps:c.viewProps})}};class sg{constructor(s){this.onValueChange_=this.onValueChange_.bind(this),this.reader=s.reader,this.writer=s.writer,this.emitter=new _,this.value=s.value,this.value.emitter.on("change",this.onValueChange_),this.target=s.target,this.read()}read(){const s=this.target.read();s!==void 0&&(this.value.rawValue=this.reader(s))}write_(s){this.writer(this.target,s)}onValueChange_(s){this.write_(s.rawValue),this.emitter.emit("change",{options:s.options,rawValue:s.rawValue,sender:this})}}function rg(c,s){const a=c.accept(s.target.read(),s.params);if(m(a))return null;const f=vt,E={target:s.target,initialValue:a.initialValue,params:a.params},k=c.binding.reader(E),W=c.binding.constraint?c.binding.constraint(E):void 0,ut=H(k(a.initialValue),{constraint:W,equals:c.binding.equals}),Dt=new sg({reader:k,target:s.target,value:ut,writer:c.binding.writer(E)}),qt=f.optional.boolean(s.params.disabled).value,ae=f.optional.boolean(s.params.hidden).value,le=c.controller({constraint:W,document:s.document,initialValue:a.initialValue,params:a.params,value:Dt.value,viewProps:Nt.create({disabled:qt,hidden:ae})}),qn=f.optional.string(s.params.label).value;return new it(s.document,{binding:Dt,blade:rt(),props:X.fromObject({label:qn!=null?qn:s.target.key}),valueController:le})}class og{constructor(s){this.onTick_=this.onTick_.bind(this),this.reader_=s.reader,this.target=s.target,this.emitter=new _,this.value=s.value,this.ticker=s.ticker,this.ticker.emitter.on("tick",this.onTick_),this.read()}dispose(){this.ticker.dispose()}read(){const s=this.target.read();if(s===void 0)return;const a=this.value.rawValue,f=this.reader_(s);this.value.rawValue=of(a,f),this.emitter.emit("update",{rawValue:f,sender:this})}onTick_(s){this.read()}}function ag(c,s){return s===0?new Ai:new Qs(c,s!=null?s:lr.monitor.defaultInterval)}function lg(c,s){var a,f,E;const k=vt,W=c.accept(s.target.read(),s.params);if(m(W))return null;const ut={target:s.target,initialValue:W.initialValue,params:W.params},Dt=c.binding.reader(ut),qt=(f=(a=k.optional.number(s.params.bufferSize).value)!==null&&a!==void 0?a:c.binding.defaultBufferSize&&c.binding.defaultBufferSize(W.params))!==null&&f!==void 0?f:1,ae=k.optional.number(s.params.interval).value,le=new og({reader:Dt,target:s.target,ticker:ag(s.document,ae),value:sf(qt)}),qn=k.optional.boolean(s.params.disabled).value,cr=k.optional.boolean(s.params.hidden).value,ur=c.controller({document:s.document,params:W.params,value:le.value,viewProps:Nt.create({disabled:qn,hidden:cr})}),ns=(E=k.optional.string(s.params.label).value)!==null&&E!==void 0?E:s.target.key;return new wt(s.document,{binding:le,blade:rt(),props:X.fromObject({label:ns}),valueController:ur})}class cg{constructor(){this.pluginsMap_={blades:[],inputs:[],monitors:[]}}getAll(){return[...this.pluginsMap_.blades,...this.pluginsMap_.inputs,...this.pluginsMap_.monitors]}register(s){s.type==="blade"?this.pluginsMap_.blades.unshift(s):s.type==="input"?this.pluginsMap_.inputs.unshift(s):s.type==="monitor"&&this.pluginsMap_.monitors.unshift(s)}createInput(s,a,f){const E=a.read();if(m(E))throw new b({context:{key:a.key},type:"nomatchingcontroller"});const k=this.pluginsMap_.inputs.reduce((W,ut)=>W!=null?W:rg(ut,{document:s,target:a,params:f}),null);if(k)return k;throw new b({context:{key:a.key},type:"nomatchingcontroller"})}createMonitor(s,a,f){const E=this.pluginsMap_.monitors.reduce((k,W)=>k!=null?k:lg(W,{document:s,params:f,target:a}),null);if(E)return E;throw new b({context:{key:a.key},type:"nomatchingcontroller"})}createBlade(s,a){const f=this.pluginsMap_.blades.reduce((E,k)=>E!=null?E:zr(k,{document:s,params:a}),null);if(!f)throw new b({type:"nomatchingview",context:{params:a}});return f}createBladeApi(s){if(s instanceof it)return new N(s);if(s instanceof wt)return new at(s);if(s instanceof ri)return new oe(s,this);const a=this.pluginsMap_.blades.reduce((f,E)=>f!=null?f:E.api({controller:s,pool:this}),null);if(!a)throw b.shouldNeverHappen();return a}}function ug(){const c=new cg;return[Om,zm,qm,Ym,Am,ym,bm,gm,gf,Zm,ig,ng,Ot,fa,yt,Un].forEach(s=>{c.register(s)}),c}class xu extends r{constructor(s){super(s),this.emitter_=new _,this.controller_.valueController.value.emitter.on("change",a=>{this.emitter_.emit("change",{event:new l(this,a.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(s){this.controller_.props.set("label",s)}get options(){return this.controller_.valueController.props.get("options")}set options(s){this.controller_.valueController.props.set("options",s)}get value(){return this.controller_.valueController.value.rawValue}set value(s){this.controller_.valueController.value.rawValue=s}on(s,a){const f=a.bind(this);return this.emitter_.on(s,E=>{f(E.event)}),this}}class bu extends r{constructor(s){super(s),this.emitter_=new _,this.controller_.valueController.value.emitter.on("change",a=>{this.emitter_.emit("change",{event:new l(this,a.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(s){this.controller_.props.set("label",s)}get maxValue(){return this.controller_.valueController.sliderController.props.get("maxValue")}set maxValue(s){this.controller_.valueController.sliderController.props.set("maxValue",s)}get minValue(){return this.controller_.valueController.sliderController.props.get("minValue")}set minValue(s){this.controller_.valueController.sliderController.props.set("minValue",s)}get value(){return this.controller_.valueController.value.rawValue}set value(s){this.controller_.valueController.value.rawValue=s}on(s,a){const f=a.bind(this);return this.emitter_.on(s,E=>{f(E.event)}),this}}class yu extends r{constructor(s){super(s),this.emitter_=new _,this.controller_.valueController.value.emitter.on("change",a=>{this.emitter_.emit("change",{event:new l(this,a.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(s){this.controller_.props.set("label",s)}get formatter(){return this.controller_.valueController.props.get("formatter")}set formatter(s){this.controller_.valueController.props.set("formatter",s)}get value(){return this.controller_.valueController.value.rawValue}set value(s){this.controller_.valueController.value.rawValue=s}on(s,a){const f=a.bind(this);return this.emitter_.on(s,E=>{f(E.event)}),this}}const hg=function(){return{id:"list",type:"blade",accept(c){const s=vt,a=$(c,{options:s.required.custom(Xr),value:s.required.raw,view:s.required.constant("list"),label:s.optional.string});return a?{params:a}:null},controller(c){const s=new tr(c.document,{props:X.fromObject({options:Nc(c.params.options)}),value:H(c.params.value),viewProps:c.viewProps});return new D(c.document,{blade:c.blade,props:X.fromObject({label:c.params.label}),valueController:s})},api(c){return!(c.controller instanceof D)||!(c.controller.valueController instanceof tr)?null:new xu(c.controller)}}}();function dg(c){return c.reduce((s,a)=>Object.assign(s,{[a.presetKey]:a.read()}),{})}function pg(c,s){c.forEach(a=>{const f=s[a.presetKey];f!==void 0&&a.write(f)})}class fg extends Ce{constructor(s,a){super(s,a)}get element(){return this.controller_.view.element}importPreset(s){const a=this.controller_.rackController.rack.find(it).map(f=>f.binding.target);pg(a,s),this.refresh()}exportPreset(){const s=this.controller_.rackController.rack.find(it).map(a=>a.binding.target);return dg(s)}refresh(){this.controller_.rackController.rack.find(it).forEach(s=>{s.binding.read()}),this.controller_.rackController.rack.find(wt).forEach(s=>{s.binding.read()})}}class mg extends $s{constructor(s,a){super(s,{expanded:a.expanded,blade:a.blade,props:a.props,root:!0,viewProps:a.viewProps})}}const gg={id:"slider",type:"blade",accept(c){const s=vt,a=$(c,{max:s.required.number,min:s.required.number,view:s.required.constant("slider"),format:s.optional.function,label:s.optional.string,value:s.optional.number});return a?{params:a}:null},controller(c){var s,a;const f=(s=c.params.value)!==null&&s!==void 0?s:0,E=new ya(c.document,{baseStep:1,parser:Gn,sliderProps:X.fromObject({maxValue:c.params.max,minValue:c.params.min}),textProps:X.fromObject({draggingScale:Zi(void 0,f),formatter:(a=c.params.format)!==null&&a!==void 0?a:ef}),value:H(f),viewProps:c.viewProps});return new D(c.document,{blade:c.blade,props:X.fromObject({label:c.params.label}),valueController:E})},api(c){return!(c.controller instanceof D)||!(c.controller.valueController instanceof ya)?null:new bu(c.controller)}},_g=function(){return{id:"text",type:"blade",accept(c){const s=vt,a=$(c,{parse:s.required.function,value:s.required.raw,view:s.required.constant("text"),format:s.optional.function,label:s.optional.string});return a?{params:a}:null},controller(c){var s;const a=new Gr(c.document,{parser:c.params.parse,props:X.fromObject({formatter:(s=c.params.format)!==null&&s!==void 0?s:f=>String(f)}),value:H(c.params.value),viewProps:c.viewProps});return new D(c.document,{blade:c.blade,props:X.fromObject({label:c.params.label}),valueController:a})},api(c){return!(c.controller instanceof D)||!(c.controller.valueController instanceof Gr)?null:new yu(c.controller)}}}();function vg(c){const s=c.createElement("div");return s.classList.add(y("dfw")()),c.body&&c.body.appendChild(s),s}function wu(c,s,a){if(c.querySelector(`style[data-tp-style=${s}]`))return;const f=c.createElement("style");f.dataset.tpStyle=s,f.textContent=a,c.head.appendChild(f)}class xg extends fg{constructor(s){var a,f;const E=s!=null?s:{},k=(a=E.document)!==null&&a!==void 0?a:zt(),W=ug(),ut=new mg(k,{expanded:E.expanded,blade:rt(),props:X.fromObject({title:E.title}),viewProps:Nt.create()});super(ut,W),this.pool_=W,this.containerElem_=(f=E.container)!==null&&f!==void 0?f:vg(k),this.containerElem_.appendChild(this.element),this.doc_=k,this.usesDefaultWrapper_=!E.container,this.setUpDefaultPlugins_()}get document(){if(!this.doc_)throw b.alreadyDisposed();return this.doc_}dispose(){const s=this.containerElem_;if(!s)throw b.alreadyDisposed();if(this.usesDefaultWrapper_){const a=s.parentElement;a&&a.removeChild(s)}this.containerElem_=null,this.doc_=null,super.dispose()}registerPlugin(s){("plugin"in s?[s.plugin]:"plugins"in s?s.plugins:[]).forEach(f=>{this.pool_.register(f),this.embedPluginStyle_(f)})}embedPluginStyle_(s){s.css&&wu(this.document,`plugin-${s.id}`,s.css)}setUpDefaultPlugins_(){wu(this.document,"default",'.tp-tbiv_b,.tp-coltxtv_ms,.tp-ckbv_i,.tp-rotv_b,.tp-fldv_b,.tp-mllv_i,.tp-sglv_i,.tp-grlv_g,.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw,.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0}.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{background-color:var(--btn-bg);border-radius:var(--elm-br);color:var(--btn-fg);cursor:pointer;display:block;font-weight:bold;height:var(--bld-us);line-height:var(--bld-us);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tp-p2dv_b:hover,.tp-btnv_b:hover,.tp-lstv_s:hover{background-color:var(--btn-bg-h)}.tp-p2dv_b:focus,.tp-btnv_b:focus,.tp-lstv_s:focus{background-color:var(--btn-bg-f)}.tp-p2dv_b:active,.tp-btnv_b:active,.tp-lstv_s:active{background-color:var(--btn-bg-a)}.tp-p2dv_b:disabled,.tp-btnv_b:disabled,.tp-lstv_s:disabled{opacity:.5}.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw{background-color:var(--in-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--in-fg);font-family:inherit;height:var(--bld-us);line-height:var(--bld-us);min-width:0;width:100%}.tp-txtv_i:hover,.tp-p2dpv_p:hover,.tp-colswv_sw:hover{background-color:var(--in-bg-h)}.tp-txtv_i:focus,.tp-p2dpv_p:focus,.tp-colswv_sw:focus{background-color:var(--in-bg-f)}.tp-txtv_i:active,.tp-p2dpv_p:active,.tp-colswv_sw:active{background-color:var(--in-bg-a)}.tp-txtv_i:disabled,.tp-p2dpv_p:disabled,.tp-colswv_sw:disabled{opacity:.5}.tp-mllv_i,.tp-sglv_i,.tp-grlv_g{background-color:var(--mo-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--mo-fg);height:var(--bld-us);scrollbar-color:currentColor transparent;scrollbar-width:thin;width:100%}.tp-mllv_i::-webkit-scrollbar,.tp-sglv_i::-webkit-scrollbar,.tp-grlv_g::-webkit-scrollbar{height:8px;width:8px}.tp-mllv_i::-webkit-scrollbar-corner,.tp-sglv_i::-webkit-scrollbar-corner,.tp-grlv_g::-webkit-scrollbar-corner{background-color:transparent}.tp-mllv_i::-webkit-scrollbar-thumb,.tp-sglv_i::-webkit-scrollbar-thumb,.tp-grlv_g::-webkit-scrollbar-thumb{background-clip:padding-box;background-color:currentColor;border:transparent solid 2px;border-radius:4px}.tp-rotv{--font-family: var(--tp-font-family, Roboto Mono, Source Code Pro, Menlo, Courier, monospace);--bs-br: var(--tp-base-border-radius, 6px);--cnt-h-p: var(--tp-container-horizontal-padding, 4px);--cnt-v-p: var(--tp-container-vertical-padding, 4px);--elm-br: var(--tp-element-border-radius, 2px);--bld-s: var(--tp-blade-spacing, 4px);--bld-us: var(--tp-blade-unit-size, 20px);--bs-bg: var(--tp-base-background-color, #28292e);--bs-sh: var(--tp-base-shadow-color, rgba(0, 0, 0, 0.2));--btn-bg: var(--tp-button-background-color, #adafb8);--btn-bg-a: var(--tp-button-background-color-active, #d6d7db);--btn-bg-f: var(--tp-button-background-color-focus, #c8cad0);--btn-bg-h: var(--tp-button-background-color-hover, #bbbcc4);--btn-fg: var(--tp-button-foreground-color, #28292e);--cnt-bg: var(--tp-container-background-color, rgba(187, 188, 196, 0.1));--cnt-bg-a: var(--tp-container-background-color-active, rgba(187, 188, 196, 0.25));--cnt-bg-f: var(--tp-container-background-color-focus, rgba(187, 188, 196, 0.2));--cnt-bg-h: var(--tp-container-background-color-hover, rgba(187, 188, 196, 0.15));--cnt-fg: var(--tp-container-foreground-color, #bbbcc4);--in-bg: var(--tp-input-background-color, rgba(187, 188, 196, 0.1));--in-bg-a: var(--tp-input-background-color-active, rgba(187, 188, 196, 0.25));--in-bg-f: var(--tp-input-background-color-focus, rgba(187, 188, 196, 0.2));--in-bg-h: var(--tp-input-background-color-hover, rgba(187, 188, 196, 0.15));--in-fg: var(--tp-input-foreground-color, #bbbcc4);--lbl-fg: var(--tp-label-foreground-color, rgba(187, 188, 196, 0.7));--mo-bg: var(--tp-monitor-background-color, rgba(0, 0, 0, 0.2));--mo-fg: var(--tp-monitor-foreground-color, rgba(187, 188, 196, 0.7));--grv-fg: var(--tp-groove-foreground-color, rgba(187, 188, 196, 0.1))}.tp-rotv_c>.tp-cntv.tp-v-lst,.tp-tabv_c .tp-brkv>.tp-cntv.tp-v-lst,.tp-fldv_c>.tp-cntv.tp-v-lst{margin-bottom:calc(-1*var(--cnt-v-p))}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-tabv_c .tp-brkv>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_c{border-bottom-left-radius:0}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-tabv_c .tp-brkv>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_b{border-bottom-left-radius:0}.tp-rotv_c>*:not(.tp-v-fst),.tp-tabv_c .tp-brkv>*:not(.tp-v-fst),.tp-fldv_c>*:not(.tp-v-fst){margin-top:var(--bld-s)}.tp-rotv_c>.tp-sprv:not(.tp-v-fst),.tp-tabv_c .tp-brkv>.tp-sprv:not(.tp-v-fst),.tp-fldv_c>.tp-sprv:not(.tp-v-fst),.tp-rotv_c>.tp-cntv:not(.tp-v-fst),.tp-tabv_c .tp-brkv>.tp-cntv:not(.tp-v-fst),.tp-fldv_c>.tp-cntv:not(.tp-v-fst){margin-top:var(--cnt-v-p)}.tp-rotv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-tabv_c .tp-brkv>.tp-sprv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-rotv_c>.tp-cntv+*:not(.tp-v-hidden),.tp-tabv_c .tp-brkv>.tp-cntv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-cntv+*:not(.tp-v-hidden){margin-top:var(--cnt-v-p)}.tp-rotv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-tabv_c .tp-brkv>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-fldv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-rotv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-tabv_c .tp-brkv>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-fldv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv{margin-top:0}.tp-tabv_c .tp-brkv>.tp-cntv,.tp-fldv_c>.tp-cntv{margin-left:4px}.tp-tabv_c .tp-brkv>.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-fldv>.tp-fldv_b{border-top-left-radius:var(--elm-br);border-bottom-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv>.tp-fldv.tp-fldv-expanded>.tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-fldv-expanded>.tp-fldv_b{border-bottom-left-radius:0}.tp-tabv_c .tp-brkv .tp-fldv>.tp-fldv_c,.tp-fldv_c .tp-fldv>.tp-fldv_c{border-bottom-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv>.tp-tabv>.tp-tabv_i,.tp-fldv_c>.tp-tabv>.tp-tabv_i{border-top-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv .tp-tabv>.tp-tabv_c,.tp-fldv_c .tp-tabv>.tp-tabv_c{border-bottom-left-radius:var(--elm-br)}.tp-rotv_b,.tp-fldv_b{background-color:var(--cnt-bg);color:var(--cnt-fg);cursor:pointer;display:block;height:calc(var(--bld-us) + 4px);line-height:calc(var(--bld-us) + 4px);overflow:hidden;padding-left:var(--cnt-h-p);padding-right:calc(4px + var(--bld-us) + var(--cnt-h-p));position:relative;text-align:left;text-overflow:ellipsis;white-space:nowrap;width:100%;transition:border-radius .2s ease-in-out .2s}.tp-rotv_b:hover,.tp-fldv_b:hover{background-color:var(--cnt-bg-h)}.tp-rotv_b:focus,.tp-fldv_b:focus{background-color:var(--cnt-bg-f)}.tp-rotv_b:active,.tp-fldv_b:active{background-color:var(--cnt-bg-a)}.tp-rotv_b:disabled,.tp-fldv_b:disabled{opacity:.5}.tp-rotv_m,.tp-fldv_m{background:linear-gradient(to left, var(--cnt-fg), var(--cnt-fg) 2px, transparent 2px, transparent 4px, var(--cnt-fg) 4px);border-radius:2px;bottom:0;content:"";display:block;height:6px;right:calc(var(--cnt-h-p) + (var(--bld-us) + 4px - 6px)/2 - 2px);margin:auto;opacity:.5;position:absolute;top:0;transform:rotate(90deg);transition:transform .2s ease-in-out;width:6px}.tp-rotv.tp-rotv-expanded .tp-rotv_m,.tp-fldv.tp-fldv-expanded>.tp-fldv_b>.tp-fldv_m{transform:none}.tp-rotv_c,.tp-fldv_c{box-sizing:border-box;height:0;opacity:0;overflow:hidden;padding-bottom:0;padding-top:0;position:relative;transition:height .2s ease-in-out,opacity .2s linear,padding .2s ease-in-out}.tp-rotv.tp-rotv-cpl:not(.tp-rotv-expanded) .tp-rotv_c,.tp-fldv.tp-fldv-cpl:not(.tp-fldv-expanded)>.tp-fldv_c{display:none}.tp-rotv.tp-rotv-expanded .tp-rotv_c,.tp-fldv.tp-fldv-expanded>.tp-fldv_c{opacity:1;padding-bottom:var(--cnt-v-p);padding-top:var(--cnt-v-p);transform:none;overflow:visible;transition:height .2s ease-in-out,opacity .2s linear .2s,padding .2s ease-in-out}.tp-lstv,.tp-coltxtv_m{position:relative}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m,.tp-coltxtv_mm{bottom:0;margin:auto;pointer-events:none;position:absolute;right:2px;top:0}.tp-lstv_m svg,.tp-coltxtv_mm svg{bottom:0;height:16px;margin:auto;position:absolute;right:0;top:0;width:16px}.tp-lstv_m svg path,.tp-coltxtv_mm svg path{fill:currentColor}.tp-pndtxtv,.tp-coltxtv_w{display:flex}.tp-pndtxtv_a,.tp-coltxtv_c{width:100%}.tp-pndtxtv_a+.tp-pndtxtv_a,.tp-coltxtv_c+.tp-pndtxtv_a,.tp-pndtxtv_a+.tp-coltxtv_c,.tp-coltxtv_c+.tp-coltxtv_c{margin-left:2px}.tp-btnv_b{width:100%}.tp-btnv_t{text-align:center}.tp-ckbv_l{display:block;position:relative}.tp-ckbv_i{left:0;opacity:0;position:absolute;top:0}.tp-ckbv_w{background-color:var(--in-bg);border-radius:var(--elm-br);cursor:pointer;display:block;height:var(--bld-us);position:relative;width:var(--bld-us)}.tp-ckbv_w svg{bottom:0;display:block;height:16px;left:0;margin:auto;opacity:0;position:absolute;right:0;top:0;width:16px}.tp-ckbv_w svg path{fill:none;stroke:var(--in-fg);stroke-width:2}.tp-ckbv_i:hover+.tp-ckbv_w{background-color:var(--in-bg-h)}.tp-ckbv_i:focus+.tp-ckbv_w{background-color:var(--in-bg-f)}.tp-ckbv_i:active+.tp-ckbv_w{background-color:var(--in-bg-a)}.tp-ckbv_i:checked+.tp-ckbv_w svg{opacity:1}.tp-ckbv.tp-v-disabled .tp-ckbv_w{opacity:.5}.tp-colv{position:relative}.tp-colv_h{display:flex}.tp-colv_s{flex-grow:0;flex-shrink:0;width:var(--bld-us)}.tp-colv_t{flex:1;margin-left:4px}.tp-colv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-colv.tp-colv-cpl .tp-colv_p{overflow:visible}.tp-colv.tp-colv-expanded .tp-colv_p{margin-top:var(--bld-s);opacity:1}.tp-colv .tp-popv{left:calc(-1*var(--cnt-h-p));right:calc(-1*var(--cnt-h-p));top:var(--bld-us)}.tp-colpv_h,.tp-colpv_ap{margin-left:6px;margin-right:6px}.tp-colpv_h{margin-top:var(--bld-s)}.tp-colpv_rgb{display:flex;margin-top:var(--bld-s);width:100%}.tp-colpv_a{display:flex;margin-top:var(--cnt-v-p);padding-top:calc(var(--cnt-v-p) + 2px);position:relative}.tp-colpv_a:before{background-color:var(--grv-fg);content:"";height:2px;left:calc(-1*var(--cnt-h-p));position:absolute;right:calc(-1*var(--cnt-h-p));top:0}.tp-colpv_ap{align-items:center;display:flex;flex:3}.tp-colpv_at{flex:1;margin-left:4px}.tp-svpv{border-radius:var(--elm-br);outline:none;overflow:hidden;position:relative}.tp-svpv_c{cursor:crosshair;display:block;height:calc(var(--bld-us)*4);width:100%}.tp-svpv_m{border-radius:100%;border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;filter:drop-shadow(0 0 1px rgba(0, 0, 0, 0.3));height:12px;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;width:12px}.tp-svpv:focus .tp-svpv_m{border-color:#fff}.tp-hplv{cursor:pointer;height:var(--bld-us);outline:none;position:relative}.tp-hplv_c{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAABCAYAAABubagXAAAAQ0lEQVQoU2P8z8Dwn0GCgQEDi2OK/RBgYHjBgIpfovFh8j8YBIgzFGQxuqEgPhaDOT5gOhPkdCxOZeBg+IDFZZiGAgCaSSMYtcRHLgAAAABJRU5ErkJggg==);background-position:left top;background-repeat:no-repeat;background-size:100% 100%;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;position:absolute;top:50%;width:100%}.tp-hplv_m{border-radius:var(--elm-br);border:rgba(255,255,255,.75) solid 2px;box-shadow:0 0 2px rgba(0,0,0,.1);box-sizing:border-box;height:12px;left:50%;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;top:50%;width:12px}.tp-hplv:focus .tp-hplv_m{border-color:#fff}.tp-aplv{cursor:pointer;height:var(--bld-us);outline:none;position:relative;width:100%}.tp-aplv_b{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:4px 4px;background-position:0 0,2px 2px;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;overflow:hidden;position:absolute;top:50%;width:100%}.tp-aplv_c{bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv_m{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:12px 12px;background-position:0 0,6px 6px;border-radius:var(--elm-br);box-shadow:0 0 2px rgba(0,0,0,.1);height:12px;left:50%;margin-left:-6px;margin-top:-6px;overflow:hidden;pointer-events:none;position:absolute;top:50%;width:12px}.tp-aplv_p{border-radius:var(--elm-br);border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv:focus .tp-aplv_p{border-color:#fff}.tp-colswv{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:10px 10px;background-position:0 0,5px 5px;border-radius:var(--elm-br);overflow:hidden}.tp-colswv.tp-v-disabled{opacity:.5}.tp-colswv_sw{border-radius:0}.tp-colswv_b{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;border-width:0;cursor:pointer;display:block;height:var(--bld-us);left:0;margin:0;outline:none;padding:0;position:absolute;top:0;width:var(--bld-us)}.tp-colswv_b:focus::after{border:rgba(255,255,255,.75) solid 2px;border-radius:var(--elm-br);bottom:0;content:"";display:block;left:0;position:absolute;right:0;top:0}.tp-coltxtv{display:flex;width:100%}.tp-coltxtv_m{margin-right:4px}.tp-coltxtv_ms{border-radius:var(--elm-br);color:var(--lbl-fg);cursor:pointer;height:var(--bld-us);line-height:var(--bld-us);padding:0 18px 0 4px}.tp-coltxtv_ms:hover{background-color:var(--in-bg-h)}.tp-coltxtv_ms:focus{background-color:var(--in-bg-f)}.tp-coltxtv_ms:active{background-color:var(--in-bg-a)}.tp-coltxtv_mm{color:var(--lbl-fg)}.tp-coltxtv_w{flex:1}.tp-dfwv{position:absolute;top:8px;right:8px;width:256px}.tp-fldv.tp-fldv-not .tp-fldv_b{display:none}.tp-fldv_t{padding-left:4px}.tp-fldv_c{border-left:var(--cnt-bg) solid 4px}.tp-fldv_b:hover+.tp-fldv_c{border-left-color:var(--cnt-bg-h)}.tp-fldv_b:focus+.tp-fldv_c{border-left-color:var(--cnt-bg-f)}.tp-fldv_b:active+.tp-fldv_c{border-left-color:var(--cnt-bg-a)}.tp-grlv{position:relative}.tp-grlv_g{display:block;height:calc(var(--bld-us)*3)}.tp-grlv_g polyline{fill:none;stroke:var(--mo-fg);stroke-linejoin:round}.tp-grlv_t{margin-top:-4px;transition:left .05s,top .05s;visibility:hidden}.tp-grlv_t.tp-grlv_t-a{visibility:visible}.tp-grlv_t.tp-grlv_t-in{transition:none}.tp-grlv.tp-v-disabled .tp-grlv_g{opacity:.5}.tp-grlv .tp-ttv{background-color:var(--mo-fg)}.tp-grlv .tp-ttv::before{border-top-color:var(--mo-fg)}.tp-lblv{align-items:center;display:flex;line-height:1.3;padding-left:var(--cnt-h-p);padding-right:var(--cnt-h-p)}.tp-lblv.tp-lblv-nol{display:block}.tp-lblv_l{color:var(--lbl-fg);flex:1;-webkit-hyphens:auto;-ms-hyphens:auto;hyphens:auto;overflow:hidden;padding-left:4px;padding-right:16px}.tp-lblv.tp-v-disabled .tp-lblv_l{opacity:.5}.tp-lblv.tp-lblv-nol .tp-lblv_l{display:none}.tp-lblv_v{align-self:flex-start;flex-grow:0;flex-shrink:0;width:160px}.tp-lblv.tp-lblv-nol .tp-lblv_v{width:100%}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m{color:var(--btn-fg)}.tp-sglv_i{padding:0 4px}.tp-sglv.tp-v-disabled .tp-sglv_i{opacity:.5}.tp-mllv_i{display:block;height:calc(var(--bld-us)*3);line-height:var(--bld-us);padding:0 4px;resize:none;white-space:pre}.tp-mllv.tp-v-disabled .tp-mllv_i{opacity:.5}.tp-p2dv{position:relative}.tp-p2dv_h{display:flex}.tp-p2dv_b{height:var(--bld-us);margin-right:4px;position:relative;width:var(--bld-us)}.tp-p2dv_b svg{display:block;height:16px;left:50%;margin-left:-8px;margin-top:-8px;position:absolute;top:50%;width:16px}.tp-p2dv_b svg path{stroke:currentColor;stroke-width:2}.tp-p2dv_b svg circle{fill:currentColor}.tp-p2dv_t{flex:1}.tp-p2dv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-p2dv.tp-p2dv-expanded .tp-p2dv_p{margin-top:var(--bld-s);opacity:1}.tp-p2dv .tp-popv{left:calc(-1*var(--cnt-h-p));right:calc(-1*var(--cnt-h-p));top:var(--bld-us)}.tp-p2dpv{padding-left:calc(var(--bld-us) + 4px)}.tp-p2dpv_p{cursor:crosshair;height:0;overflow:hidden;padding-bottom:100%;position:relative}.tp-p2dpv_g{display:block;height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}.tp-p2dpv_ax{opacity:.1;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_l{opacity:.5;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_m{border:var(--in-fg) solid 1px;border-radius:50%;box-sizing:border-box;height:4px;margin-left:-2px;margin-top:-2px;position:absolute;width:4px}.tp-p2dpv_p:focus .tp-p2dpv_m{background-color:var(--in-fg);border-width:0}.tp-popv{background-color:var(--bs-bg);border-radius:6px;box-shadow:0 2px 4px var(--bs-sh);display:none;max-width:168px;padding:var(--cnt-v-p) var(--cnt-h-p);position:absolute;visibility:hidden;z-index:1000}.tp-popv.tp-popv-v{display:block;visibility:visible}.tp-sprv_r{background-color:var(--grv-fg);border-width:0;display:block;height:2px;margin:0;width:100%}.tp-sldv.tp-v-disabled{opacity:.5}.tp-sldv_t{box-sizing:border-box;cursor:pointer;height:var(--bld-us);margin:0 6px;outline:none;position:relative}.tp-sldv_t::before{background-color:var(--in-bg);border-radius:1px;bottom:0;content:"";display:block;height:2px;left:0;margin:auto;position:absolute;right:0;top:0}.tp-sldv_k{height:100%;left:0;position:absolute;top:0}.tp-sldv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";display:block;height:2px;left:0;margin-bottom:auto;margin-top:auto;position:absolute;right:0;top:0}.tp-sldv_k::after{background-color:var(--btn-bg);border-radius:var(--elm-br);bottom:0;content:"";display:block;height:12px;margin-bottom:auto;margin-top:auto;position:absolute;right:-6px;top:0;width:12px}.tp-sldv_t:hover .tp-sldv_k::after{background-color:var(--btn-bg-h)}.tp-sldv_t:focus .tp-sldv_k::after{background-color:var(--btn-bg-f)}.tp-sldv_t:active .tp-sldv_k::after{background-color:var(--btn-bg-a)}.tp-sldtxtv{display:flex}.tp-sldtxtv_s{flex:2}.tp-sldtxtv_t{flex:1;margin-left:4px}.tp-tabv.tp-v-disabled{opacity:.5}.tp-tabv_i{align-items:flex-end;display:flex;overflow:hidden}.tp-tabv.tp-tabv-nop .tp-tabv_i{height:calc(var(--bld-us) + 4px);position:relative}.tp-tabv.tp-tabv-nop .tp-tabv_i::before{background-color:var(--cnt-bg);bottom:0;content:"";height:2px;left:0;position:absolute;right:0}.tp-tabv_c{border-left:var(--cnt-bg) solid 4px;padding-bottom:var(--cnt-v-p);padding-top:var(--cnt-v-p)}.tp-tbiv{flex:1;min-width:0;position:relative}.tp-tbiv+.tp-tbiv{margin-left:2px}.tp-tbiv+.tp-tbiv::before{background-color:var(--cnt-bg);bottom:0;content:"";height:2px;left:-2px;position:absolute;width:2px}.tp-tbiv_b{background-color:var(--cnt-bg);display:block;padding-left:calc(var(--cnt-h-p) + 4px);padding-right:calc(var(--cnt-h-p) + 4px);width:100%}.tp-tbiv_b:hover{background-color:var(--cnt-bg-h)}.tp-tbiv_b:focus{background-color:var(--cnt-bg-f)}.tp-tbiv_b:active{background-color:var(--cnt-bg-a)}.tp-tbiv_b:disabled{opacity:.5}.tp-tbiv_t{color:var(--cnt-fg);height:calc(var(--bld-us) + 4px);line-height:calc(var(--bld-us) + 4px);opacity:.5;overflow:hidden;text-overflow:ellipsis}.tp-tbiv.tp-tbiv-sel .tp-tbiv_t{opacity:1}.tp-txtv{position:relative}.tp-txtv_i{padding:0 4px}.tp-txtv.tp-txtv-fst .tp-txtv_i{border-bottom-right-radius:0;border-top-right-radius:0}.tp-txtv.tp-txtv-mid .tp-txtv_i{border-radius:0}.tp-txtv.tp-txtv-lst .tp-txtv_i{border-bottom-left-radius:0;border-top-left-radius:0}.tp-txtv.tp-txtv-num .tp-txtv_i{text-align:right}.tp-txtv.tp-txtv-drg .tp-txtv_i{opacity:.3}.tp-txtv_k{cursor:pointer;height:100%;left:-3px;position:absolute;top:0;width:12px}.tp-txtv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";height:calc(var(--bld-us) - 4px);left:50%;margin-bottom:auto;margin-left:-1px;margin-top:auto;opacity:.1;position:absolute;top:0;transition:border-radius .1s,height .1s,transform .1s,width .1s;width:2px}.tp-txtv_k:hover::before,.tp-txtv.tp-txtv-drg .tp-txtv_k::before{opacity:1}.tp-txtv.tp-txtv-drg .tp-txtv_k::before{border-radius:50%;height:4px;transform:translateX(-1px);width:4px}.tp-txtv_g{bottom:0;display:block;height:8px;left:50%;margin:auto;overflow:visible;pointer-events:none;position:absolute;top:0;visibility:hidden;width:100%}.tp-txtv.tp-txtv-drg .tp-txtv_g{visibility:visible}.tp-txtv_gb{fill:none;stroke:var(--in-fg);stroke-dasharray:1}.tp-txtv_gh{fill:none;stroke:var(--in-fg)}.tp-txtv .tp-ttv{margin-left:6px;visibility:hidden}.tp-txtv.tp-txtv-drg .tp-ttv{visibility:visible}.tp-ttv{background-color:var(--in-fg);border-radius:var(--elm-br);color:var(--bs-bg);padding:2px 4px;pointer-events:none;position:absolute;transform:translate(-50%, -100%)}.tp-ttv::before{border-color:var(--in-fg) transparent transparent transparent;border-style:solid;border-width:2px;box-sizing:border-box;content:"";font-size:.9em;height:4px;left:50%;margin-left:-2px;position:absolute;top:100%;width:4px}.tp-rotv{background-color:var(--bs-bg);border-radius:var(--bs-br);box-shadow:0 2px 4px var(--bs-sh);font-family:var(--font-family);font-size:11px;font-weight:500;line-height:1;text-align:left}.tp-rotv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br);border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br);padding-left:calc(4px + var(--bld-us) + var(--cnt-h-p));text-align:center}.tp-rotv.tp-rotv-expanded .tp-rotv_b{border-bottom-left-radius:0;border-bottom-right-radius:0}.tp-rotv.tp-rotv-not .tp-rotv_b{display:none}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_c,.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c .tp-fldv.tp-v-vlst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-right-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst{margin-top:calc(-1*var(--cnt-v-p))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst>.tp-fldv_b{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst{margin-top:calc(-1*var(--cnt-v-p))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst>.tp-tabv_i{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv.tp-v-disabled,.tp-rotv .tp-v-disabled{pointer-events:none}.tp-rotv.tp-v-hidden,.tp-rotv .tp-v-hidden{display:none}'),this.pool_.getAll().forEach(s=>{this.embedPluginStyle_(s)}),this.registerPlugin({plugins:[gg,hg,Un,_g]})}}const bg=new n("3.1.0");e.BladeApi=r,e.ButtonApi=v,e.FolderApi=Ce,e.InputBindingApi=N,e.ListApi=xu,e.MonitorBindingApi=at,e.Pane=xg,e.SeparatorApi=j,e.SliderApi=bu,e.TabApi=Pe,e.TabPageApi=qe,e.TextApi=yu,e.TpChangeEvent=l,e.VERSION=bg,Object.defineProperty(e,"__esModule",{value:!0})})})(Jl,Jl.exports);var tc={d:(i,t)=>{for(var e in t)tc.o(t,e)&&!tc.o(i,e)&&Object.defineProperty(i,e,{enumerable:!0,get:t[e]})},o:(i,t)=>Object.prototype.hasOwnProperty.call(i,t)},_p={};tc.d(_p,{Q:()=>bM});var Dl=function(i,t,e,n){return new(e||(e=Promise))(function(r,o){function l(d){try{h(n.next(d))}catch(p){o(p)}}function u(d){try{h(n.throw(d))}catch(p){o(p)}}function h(d){var p;d.done?r(d.value):(p=d.value,p instanceof e?p:new e(function(m){m(p)})).then(l,u)}h((n=n.apply(i,t||[])).next())})};const vp=Symbol("Comlink.proxy"),_M=Symbol("Comlink.endpoint"),vM=Symbol("Comlink.releaseProxy"),ec=Symbol("Comlink.thrown"),Td=i=>typeof i=="object"&&i!==null||typeof i=="function",xp=new Map([["proxy",{canHandle:i=>Td(i)&&i[vp],serialize(i){const{port1:t,port2:e}=new MessageChannel;return bp(i,t),[e,[e]]},deserialize:i=>(i.start(),wp(i))}],["throw",{canHandle:i=>Td(i)&&ec in i,serialize({value:i}){let t;return t=i instanceof Error?{isError:!0,value:{message:i.message,name:i.name,stack:i.stack}}:{isError:!1,value:i},[t,[]]},deserialize(i){throw i.isError?Object.assign(new Error(i.value.message),i.value):i.value}}]]);function bp(i,t=self){t.addEventListener("message",function e(n){if(!n||!n.data)return;const{id:r,type:o,path:l}=Object.assign({path:[]},n.data),u=(n.data.argumentList||[]).map(Gi);let h;try{const d=l.slice(0,-1).reduce((m,g)=>m[g],i),p=l.reduce((m,g)=>m[g],i);switch(o){case"GET":h=p;break;case"SET":d[l.slice(-1)[0]]=Gi(n.data.value),h=!0;break;case"APPLY":h=p.apply(d,u);break;case"CONSTRUCT":h=Wo(new p(...u));break;case"ENDPOINT":{const{port1:m,port2:g}=new MessageChannel;bp(i,g),h=function(x,b){return Mp.set(x,b),x}(m,[m])}break;case"RELEASE":h=void 0;break;default:return}}catch(d){h={value:d,[ec]:0}}Promise.resolve(h).catch(d=>({value:d,[ec]:0})).then(d=>{const[p,m]=xc(d);t.postMessage(Object.assign(Object.assign({},p),{id:r}),m),o==="RELEASE"&&(t.removeEventListener("message",e),yp(t))})}),t.start&&t.start()}function yp(i){(function(t){return t.constructor.name==="MessagePort"})(i)&&i.close()}function wp(i,t){return nc(i,[],t)}function Vo(i){if(i)throw new Error("Proxy has been released and is not useable")}function nc(i,t=[],e=function(){}){let n=!1;const r=new Proxy(e,{get(o,l){if(Vo(n),l===vM)return()=>Ls(i,{type:"RELEASE",path:t.map(u=>u.toString())}).then(()=>{yp(i),n=!0});if(l==="then"){if(t.length===0)return{then:()=>r};const u=Ls(i,{type:"GET",path:t.map(h=>h.toString())}).then(Gi);return u.then.bind(u)}return nc(i,[...t,l])},set(o,l,u){Vo(n);const[h,d]=xc(u);return Ls(i,{type:"SET",path:[...t,l].map(p=>p.toString()),value:h},d).then(Gi)},apply(o,l,u){Vo(n);const h=t[t.length-1];if(h===_M)return Ls(i,{type:"ENDPOINT"}).then(Gi);if(h==="bind")return nc(i,t.slice(0,-1));const[d,p]=Ad(u);return Ls(i,{type:"APPLY",path:t.map(m=>m.toString()),argumentList:d},p).then(Gi)},construct(o,l){Vo(n);const[u,h]=Ad(l);return Ls(i,{type:"CONSTRUCT",path:t.map(d=>d.toString()),argumentList:u},h).then(Gi)}});return r}function Ad(i){const t=i.map(xc);return[t.map(n=>n[0]),(e=t.map(n=>n[1]),Array.prototype.concat.apply([],e))];var e}const Mp=new WeakMap;function Wo(i){return Object.assign(i,{[vp]:!0})}function xc(i){for(const[t,e]of xp)if(e.canHandle(i)){const[n,r]=e.serialize(i);return[{type:"HANDLER",name:t,value:n},r]}return[{type:"RAW",value:i},Mp.get(i)||[]]}function Gi(i){switch(i.type){case"HANDLER":return xp.get(i.name).deserialize(i.value);case"RAW":return i.value}}function Ls(i,t,e){return new Promise(n=>{const r=new Array(4).fill(0).map(()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16)).join("-");i.addEventListener("message",function o(l){l.data&&l.data.id&&l.data.id===r&&(i.removeEventListener("message",o),n(l.data))}),i.start&&i.start(),i.postMessage(Object.assign({id:r},t),e)})}class xM extends class{}{init(t,e,n,r){if(!this.api){if(!r)throw new Error("workerFilePath is required");(()=>{var o,l,u,h;o=this,l=void 0,h=function*(){const d=yield fetch(r).then(g=>g.blob()),p=URL.createObjectURL(d),m=new Worker(p,{type:"module"});this.api=yield new(wp(m))(Wo(()=>{t(),URL.revokeObjectURL(p)}),Wo((g,x)=>g==="xatlas_web.wasm"?n:g+x),Wo(e))},new((u=void 0)||(u=Promise))(function(d,p){function m(b){try{x(h.next(b))}catch(w){p(w)}}function g(b){try{x(h.throw(b))}catch(w){p(w)}}function x(b){var w;b.done?d(b.value):(w=b.value,w instanceof u?w:new u(function(v){v(w)})).then(m,g)}x((h=h.apply(o,l||[])).next())})})()}}}class bM extends class{constructor(t,e={resolution:2048},n={},r=!1,o=!1,l=!1){this.THREE=t,this.packOptions=e,this.chartOptions=n,this.useNormals=r,this.timeUnwrap=o,this.logProgress=l,this._libraryLoaded=!1,this._isUnwrapping=!1,this.xAtlas=this._createXAtlas()}loadLibrary(t,e,n){return Dl(this,void 0,void 0,function*(){if(!this._libraryLoaded){for(yield new Promise((r,o)=>{try{this.xAtlas.init(()=>{r()},t,e,n)}catch(l){o(l)}});!this.xAtlas.api||!(yield this.xAtlas.api.loaded);)yield new Promise(r=>setTimeout(r,100));this._libraryLoaded=!0}})}packAtlas(t,e="uv2",n="uv"){return Dl(this,void 0,void 0,function*(){if(!this._libraryLoaded)return console.warn("xatlas-three: library not loaded"),[];if(!t)return[];if(t.length<1)return[];const r=this.chartOptions.useInputMeshUvs;for(;this._isUnwrapping;)console.log("xatlas-three: unwrapping another mesh, waiting 100 ms"),yield new Promise(d=>setTimeout(d,100));this._isUnwrapping=!0,yield this.xAtlas.api.setProgressLogging(this.logProgress),yield this.xAtlas.api.createAtlas();let o=[],l="";for(let d of t){let{uuid:p,index:m,attributes:g}=d;const x=d.userData.worldScale||1;o.push(p),m&&g.position&&g.position.itemSize===3?(l="Mesh"+o.length+" added to atlas: "+p,this.timeUnwrap&&console.time(l),yield this.xAtlas.api.addMesh(m.array,g.position.array,g.normal?g.normal.array:void 0,g.uv?g.uv.array:void 0,p,this.useNormals,r,x),this.timeUnwrap&&console.timeEnd(l)):console.warn("xatlas-three: Geometry not supported: ",d)}l="Generated atlas with "+o.length+" meshes",this.timeUnwrap&&console.time(l);let u=yield this.xAtlas.api.generateAtlas(this.chartOptions,this.packOptions,!0);this.timeUnwrap&&console.timeEnd(l);let h=[];for(let d of u){let p=t.find(m=>m.uuid===d.mesh);p?(d.vertex.vertices&&p.setAttribute("position",new this.THREE.BufferAttribute(d.vertex.vertices,3,!1)),d.vertex.normals&&p.setAttribute("normal",new this.THREE.BufferAttribute(d.vertex.normals,3,!0)),d.vertex.coords1&&p.setAttribute(e,new this.THREE.BufferAttribute(d.vertex.coords1,2,!1)),d.vertex.coords&&e!==n&&p.setAttribute(n,new this.THREE.BufferAttribute(d.vertex.coords,2,!1)),d.index&&p.setIndex(new this.THREE.BufferAttribute(d.index,1,!1)),h.push(p)):console.error("xatlas-three: Mesh not found: ",d.mesh)}return yield this.xAtlas.api.destroyAtlas(),this._isUnwrapping=!1,h})}unwrapGeometry(t,e="uv",n="uv2"){return Dl(this,void 0,void 0,function*(){return this.packAtlas([t],e,n)})}}{_createXAtlas(){return new xM}}var yM=_p.Q;const Xo=new yM({BufferAttribute:Qe});var Ep=(i=>(i[i.AddMesh=0]="AddMesh",i[i.ComputeCharts=1]="ComputeCharts",i[i.PackCharts=2]="PackCharts",i[i.BuildOutputMeshes=3]="BuildOutputMeshes",i))(Ep||{});const wM=async()=>{const i=(t,e)=>{console.log(`\u{1F5FA}\uFE0F XAtlas ${Ep[t]} ${e}%`)};await Xo.loadLibrary(i,"https://cdn.jsdelivr.net/npm/xatlasjs@0.1.0/dist/xatlas.wasm","https://cdn.jsdelivr.net/npm/xatlasjs@0.1.0/dist/xatlas.js"),console.log("Loaded")},MM=async i=>{const t=i.map(e=>e.geometry);Xo.packOptions.padding=16,Xo.packOptions.resolution=4096,await Xo.packAtlas(t,"uv2","uv")},EM=`
    uniform vec2 offset;
    attribute vec2 uv2;
    varying vec4 vWorldPosition;

    void main() {
        vWorldPosition = modelMatrix * vec4(position, 1.0) ;

        gl_Position = vec4((uv2 + offset) * 2.0 - 1.0, 0.0, 1.0); 
    }
`,SM=`
    varying vec4 vWorldPosition;

    void main() {
        gl_FragColor = vWorldPosition;
    }
`,TM=new dn({vertexShader:EM,fragmentShader:SM,side:un,fog:!1,uniforms:{offset:new ca(new Rt(0,0))}}),AM=`
    varying vec4 vNormal;
    attribute vec2 uv2;
    uniform vec2 offset;

    void main() {
        vNormal = modelMatrix * vec4(normal, 0.0);

        gl_Position = vec4((uv2 + offset) * 2.0 - 1.0, 0.0, 1.0);
    }
`,CM=`
    varying vec4 vWorldPosition; 
    varying vec4 vNormal;

    void main() {
        gl_FragColor = normalize(vNormal);
    }
`,PM=new dn({vertexShader:AM,fragmentShader:CM,side:un,fog:!1,uniforms:{offset:new ca(new Rt(0,0))}}),RM=[{x:-2,y:-2},{x:2,y:-2},{x:-2,y:2},{x:2,y:2},{x:-1,y:-2},{x:1,y:-2},{x:-2,y:-1},{x:2,y:-1},{x:-2,y:1},{x:2,y:1},{x:-1,y:2},{x:1,y:2},{x:-2,y:0},{x:2,y:0},{x:0,y:-2},{x:0,y:2},{x:-1,y:-1},{x:1,y:-1},{x:-1,y:0},{x:1,y:0},{x:-1,y:1},{x:1,y:1},{x:0,y:-1},{x:0,y:1},{x:0,y:0}],LM=(i,t,e,n=!0)=>{const r=u=>{const h=new Dn(e,e,{type:Ne,magFilter:de,minFilter:de}),d=new Br(-100,100,-100,100,-100,200);d.updateMatrix();const p=new Re;p.matrixWorldAutoUpdate=!1;for(const m of t){const g=m.clone();g.material=u,p.add(g)}if(i.autoClear=!1,i.setRenderTarget(h),i.setClearColor(0,0),i.clear(),n)for(const m of RM)u.uniforms.offset.value.x=m.x*(1/e),u.uniforms.offset.value.y=m.y*(1/e),i.render(p,d);return u.uniforms.offset.value.x=0,u.uniforms.offset.value.y=0,i.render(p,d),i.setRenderTarget(null),h.texture},o=r(TM),l=r(PM);return{positionTexture:o,normalTexture:l}};class DM extends dn{constructor(t){const e=new Qw;e.updateFrom(t.bvh),super({transparent:!0,glslVersion:$o,uniforms:{bvh:{value:e},positions:{value:t.positions},normals:{value:t.normals},albedoTex:{value:t.albedoTex},emissiveTex:{value:t.emissiveTex},materialTextureSize:{value:t.materialTextureSize},invModelMatrix:{value:t.invModelMatrix},casts:{value:t.casts},lightPosition:{value:t.lightPosition},lightSize:{value:t.lightSize},lightColor:{value:t.lightColor},lightIntensity:{value:t.lightIntensity},skyColor:{value:t.skyColor},skyIntensity:{value:t.skyIntensity},opacity:{value:1},sampleIndex:{value:0},directLightEnabled:{value:t.directLightEnabled},indirectLightEnabled:{value:t.indirectLightEnabled},ambientLightEnabled:{value:t.ambientLightEnabled},ambientDistance:{value:t.ambientDistance}},vertexShader:`
                in vec3 position;
                in vec2 uv;
                out vec2 vUv;
                void main() {
                    gl_Position = vec4( position, 1.0 );
                    vUv = uv;
                }
            `,fragmentShader:`
                precision highp isampler2D;
                precision highp usampler2D;
                ${sM}
                ${rM}

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
                    float W = materialTextureSize;
                    float fIdx = float(triIdx);
                    float x = (mod(fIdx, W) + 0.5) / W;
                    float y = (floor(fIdx / W) + 0.5) / W;
                    return texture(tex, vec2(x, y)).rgb;
                }

                uvec4 s0;
                void rng_initialize(vec2 p, int frame) {
                    // white noise seed
                    s0 = uvec4( p, uint( frame ), uint( p.x ) + uint( p.y ) );
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
                    float sign = n.z == 0.0 ? 1.0 : sign( n.z );
                    float a = - 1.0 / ( sign + n.z );
                    float b = n.x * n.y * a;
                    vec3 b1 = vec3( 1.0 + sign * n.x * n.x * a, sign * b, - sign * n.x );
                    vec3 b2 = vec3( b, sign + n.y * n.y * a, - n.y );
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
                    vec3 totalAO = vec3(0.0);
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

                                if(!hit || dist > ambientDistance) {
                                    totalAO.r += 1.0;
                                    totalAO.g += 1.0;
                                    totalAO.b += 1.0;
                                }
                            }
                        }
                    }

                    if(directLightEnabled) {
                        for ( int i = 0; i < casts; i++ ) {
                            vec3 newDirection = lightPosition - (rayOrigin + randomSpherePoint(rand3() * 0.05) * lightSize);

                            newDirection = normalize(newDirection);
                            bool hit = bvhIntersectFirstHit( bvh, rayOrigin, newDirection, faceIndices, faceNormal, barycoord, side, dist );

                            if(!hit) {
                                totalDirectLight += lightColor * lightIntensity;
                            }
                        }
                    }

                    vec4 adverageDirectLight = vec4(totalDirectLight / float(casts), 1.0);
                    vec4 adverageAO = vec4(totalAO / float(casts), 1.0);
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
            `})}}const IM=(i,t,e,n,r)=>{const o=new DM({bvh:n,invModelMatrix:new ce().identity(),positions:t,normals:e,albedoTex:r.albedoTexture,emissiveTex:r.emissiveTexture,materialTextureSize:r.materialTextureSize,casts:r.casts,lightPosition:r.lightPosition,lightSize:r.lightSize,lightColor:r.lightColor,lightIntensity:r.lightIntensity,skyColor:r.skyColor,skyIntensity:r.skyIntensity,opacity:1,sampleIndex:0,directLightEnabled:r.directLightEnabled,indirectLightEnabled:r.indirectLightEnabled,ambientLightEnabled:r.ambientLightEnabled,ambientDistance:r.ambientDistance}),l=new O_(r.resolution,r.resolution,3,{type:Ne,minFilter:oc,magFilter:Ve,generateMipmaps:!0});i.setRenderTarget(l),i.setClearColor(16711680,0),i.clear();const u=new ft(new ii(2,2),o),h=new Br;let d=0;const p=r.targetSamples|0,m=()=>p>0&&d>=p?{samples:d,done:!0}:(i.setRenderTarget(l),o.uniforms.sampleIndex.value=d,o.uniforms.opacity.value=d==0?1:1/d,i.render(u,h),i.setRenderTarget(null),d++,{samples:d,done:p>0&&d>=p}),g=()=>{d=0},x=()=>{l.dispose(),o.dispose(),u.geometry.dispose()};i.setRenderTarget(null);const b={direct:l.texture[0],indirect:l.texture[1],ao:l.texture[2]};return{renderTarget:l,textures:b,render:m,reset:g,dispose:x,get renderTexture(){return l},get texture(){return b.direct}}};class UM extends dn{constructor(t={}){var e,n,r;super({blending:Bn,transparent:!1,depthWrite:!1,depthTest:!1,uniforms:{map:{value:(e=t.map)!=null?e:null},positions:{value:(n=t.positions)!=null?n:null},resolution:{value:(r=t.resolution)!=null?r:1024}},vertexShader:`
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
            `})}}class NM extends dn{constructor(t){super(t);for(const e in this.uniforms)Object.defineProperty(this,e,{get(){return this.uniforms[e].value},set(n){this.uniforms[e].value=n}})}setDefine(t,e=void 0){e==null?t in this.defines&&(delete this.defines[t],this.needsUpdate=!0):this.defines[t]!==e&&(this.defines[t]=e,this.needsUpdate=!0)}}class FM extends NM{constructor(t){super({blending:Bn,transparent:!1,depthWrite:!1,depthTest:!1,defines:{USE_SLIDER:0},uniforms:{sigma:{value:5},threshold:{value:.03},kSigma:{value:1},map:{value:null}},vertexShader:`
				varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
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
			`}),this.setValues(t)}}const Cd=new ft(new ii(2,2)),OM=new Br,BM=(i,t,e,n,r)=>{const o=()=>new Dn(n,n,{type:Ne,minFilter:oc,magFilter:Ve,generateMipmaps:!0}),l=o(),u=o(),h=(w,v)=>{Cd.material=w,i.setRenderTarget(v),i.render(Cd,OM),i.setRenderTarget(null)},d=new UM({positions:e,resolution:n});let p=l,m=u,g=t;for(let w=0;w<Math.max(0,r.dilationIterations);w++){d.uniforms.map.value=g,h(d,m),g=m.texture;const v=p;p=m,m=v}if(r.denoiseEnabled){const w=new FM({map:g,sigma:r.denoiseSigma,threshold:r.denoiseThreshold,kSigma:r.denoiseKSigma});h(w,m),g=m.texture,w.dispose();const v=p;p=m,m=v}return d.dispose(),{texture:r.dilationIterations>0||r.denoiseEnabled?p.texture:t,dispose:()=>{l.dispose(),u.dispose()}}};class kM extends dn{constructor(t){super({glslVersion:$o,transparent:!1,depthWrite:!1,depthTest:!1,uniforms:{directTex:{value:t.directTex},indirectTex:{value:t.indirectTex},aoTex:{value:t.aoTex},giIntensity:{value:t.giIntensity},aoEnabled:{value:t.aoEnabled}},vertexShader:`
                in vec3 position;
                in vec2 uv;
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
                uniform float giIntensity;
                uniform bool  aoEnabled;

                in vec2 vUv;
                out vec4 outColor;

                void main() {
                    vec3 d = texture(directTex,   vUv).rgb;
                    vec3 i = texture(indirectTex, vUv).rgb * giIntensity;
                    vec3 a = aoEnabled ? texture(aoTex, vUv).rgb : vec3(1.0);
                    vec3 lit = (d + i) * a;
                    outColor = vec4(lit, 1.0);
                }
            `})}}const VM=(i,t,e,n)=>{const r=new Dn(e,e,{type:Ne,minFilter:oc,magFilter:Ve,generateMipmaps:!0}),o=new kM({directTex:t.direct,indirectTex:t.indirect,aoTex:t.ao,giIntensity:n.giIntensity,aoEnabled:n.aoEnabled}),l=new ft(new ii(2,2),o),u=new Br,h=d=>{(d==null?void 0:d.giIntensity)!==void 0&&(o.uniforms.giIntensity.value=d.giIntensity),(d==null?void 0:d.aoEnabled)!==void 0&&(o.uniforms.aoEnabled.value=d.aoEnabled);const p=i.getRenderTarget();i.setRenderTarget(r),i.render(l,u),i.setRenderTarget(p)};return h(),{texture:r.texture,refresh:h,dispose:()=>{r.dispose(),o.dispose(),l.geometry.dispose()}}};function zM(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),r=new Set(Object.keys(i[0].morphAttributes)),o={},l={},u=i[0].morphTargetsRelative,h=new Je;let d=0;for(let p=0;p<i.length;++p){const m=i[p];let g=0;if(e!==(m.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+p+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const x in m.attributes){if(!n.has(x))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+p+'. All geometries must have compatible attributes; make sure "'+x+'" attribute exists among all geometries, or in none of them.'),null;o[x]===void 0&&(o[x]=[]),o[x].push(m.attributes[x]),g++}if(g!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+p+". Make sure all geometries have the same number of attributes."),null;if(u!==m.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+p+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const x in m.morphAttributes){if(!r.has(x))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+p+".  .morphAttributes must be consistent throughout all geometries."),null;l[x]===void 0&&(l[x]=[]),l[x].push(m.morphAttributes[x])}if(t){let x;if(e)x=m.index.count;else if(m.attributes.position!==void 0)x=m.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+p+". The geometry must have either an index or a position attribute"),null;h.addGroup(d,x,p),d+=x}}if(e){let p=0;const m=[];for(let g=0;g<i.length;++g){const x=i[g].index;for(let b=0;b<x.count;++b)m.push(x.getX(b)+p);p+=i[g].attributes.position.count}h.setIndex(m)}for(const p in o){const m=Pd(o[p]);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+p+" attribute."),null;h.setAttribute(p,m)}for(const p in l){const m=l[p][0].length;if(m===0)break;h.morphAttributes=h.morphAttributes||{},h.morphAttributes[p]=[];for(let g=0;g<m;++g){const x=[];for(let w=0;w<l[p].length;++w)x.push(l[p][w][g]);const b=Pd(x);if(!b)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+p+" morphAttribute."),null;h.morphAttributes[p].push(b)}}return h}function Pd(i){let t,e,n,r=-1,o=0;for(let d=0;d<i.length;++d){const p=i[d];if(t===void 0&&(t=p.array.constructor),t!==p.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=p.itemSize),e!==p.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=p.normalized),n!==p.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=p.gpuType),r!==p.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;o+=p.count*e}const l=new t(o),u=new Qe(l,e,n);let h=0;for(let d=0;d<i.length;++d){const p=i[d];if(p.isInterleavedBufferAttribute){const m=h/e;for(let g=0,x=p.count;g<x;g++)for(let b=0;b<e;b++){const w=p.getComponent(g,b);u.setComponent(g+m,b,w)}}else l.set(p.array,h);h+=p.count*e}return r!==void 0&&(u.gpuType=r),u}const HM=i=>{const t=i.map((e,n)=>{const r=e.geometry.clone();r.deleteAttribute("color"),r.applyMatrix4(e.matrixWorld);const o=r.attributes.position.count,l=new Float32Array(o);return l.fill(n),r.setAttribute("meshIndex",new Qe(l,1)),r});return zM(t)},GM=i=>{const t=i.geometry;return t.index?t.index.count/3:t.attributes.position.count/3},ic={aR:1,aG:1,aB:1,eR:0,eG:0,eB:0},Sp=i=>{var e;if(Array.isArray(i))return console.warn("[baker] material array detected; using slot 0 only \u2014 per-face material groups not yet supported"),i.length?Sp(i[0]):ic;const t=i;if("emissive"in t&&t.emissive){const n=(e=t.emissiveIntensity)!=null?e:1;return{aR:t.color.r,aG:t.color.g,aB:t.color.b,eR:t.emissive.r*n,eG:t.emissive.g*n,eB:t.emissive.b*n}}return"color"in t&&t.color?{aR:t.color.r,aG:t.color.g,aB:t.color.b,eR:0,eG:0,eB:0}:(console.warn("[baker] material has no .color (likely ShaderMaterial); defaulting to white albedo"),ic)},WM=(i,t)=>{var m;const e=i.index;if(!e)throw new Error("[baker] mergeGeometry must produce an indexed geometry; got non-indexed");const n=i.attributes.meshIndex;if(!n)throw new Error("[baker] merged geometry is missing 'meshIndex' attribute \u2014 did mergeGeometry skip the per-vertex tag?");const r=t.map(GM),o=e.count/3,l=new Float32Array(o*3),u=new Float32Array(o*3),h=t.map(g=>Sp(g.material)),d=e.array,p=n.array;for(let g=0;g<o;g++){const x=d[g*3],b=p[x]|0,w=(m=h[b])!=null?m:ic,v=g*3;l[v]=w.aR,l[v+1]=w.aG,l[v+2]=w.aB,u[v]=w.eR,u[v+1]=w.eG,u[v+2]=w.eB}return{albedo:l,emissive:u,totalTriangles:o,perMeshTriangleCounts:r}},Rd=(i,t)=>{const e=new ta(i,t,t,Ze,Ne);return e.minFilter=de,e.magFilter=de,e.wrapS=_n,e.wrapT=_n,e.generateMipmaps=!1,e.needsUpdate=!0,e},XM=i=>{const t=i.totalTriangles,e=Math.max(1,Math.ceil(Math.sqrt(t))),n=e*e,r=new Float32Array(n*4),o=new Float32Array(n*4);for(let l=0;l<t;l++){const u=l*3,h=l*4;r[h]=i.albedo[u],r[h+1]=i.albedo[u+1],r[h+2]=i.albedo[u+2],r[h+3]=1,o[h]=i.emissive[u],o[h+1]=i.emissive[u+1],o[h+2]=i.emissive[u+2],o[h+3]=1}return{albedoTexture:Rd(r,e),emissiveTexture:Rd(o,e),side:e}},mn=10,Ds=mn/2,sc=[{id:"combined",label:"Combined",group:"output",showAlbedo:!0,getLightMap:i=>i.composite},{id:"combinedPost",label:"Combined (Denoised)",group:"output",showAlbedo:!0,getLightMap:i=>{var t;return(t=i.post)!=null?t:i.composite}},{id:"direct",label:"Direct",group:"output",showAlbedo:!1,getLightMap:i=>i.direct},{id:"indirect",label:"Indirect (GI)",group:"output",showAlbedo:!1,getLightMap:i=>i.indirect},{id:"ao",label:"Ambient Occlusion",group:"output",showAlbedo:!1,getLightMap:i=>i.ao},{id:"lightmapRaw",label:"Lightmap (Raw)",group:"debug",showAlbedo:!1,getLightMap:i=>i.composite},{id:"albedo",label:"Albedo",group:"debug",showAlbedo:!0,getLightMap:()=>null},{id:"positions",label:"World Position",group:"debug",showAlbedo:!1,getLightMap:i=>i.positions},{id:"normals",label:"World Normal",group:"debug",showAlbedo:!1,getLightMap:i=>i.normals}],qM=Object.fromEntries(sc.map(i=>[i.label,i.id])),jM={Linear:"linear",Nearest:"nearest"},YM={"Cornell Classic":"classic","Cornell Advanced":"advanced"},Ld={Custom:null,Draft:{lightMapSize:256,casts:4,targetSamples:32},Preview:{lightMapSize:512,casts:5,targetSamples:96},Production:{lightMapSize:1024,casts:6,targetSamples:256},Final:{lightMapSize:2048,casts:8,targetSamples:512}};class KM{constructor(){this.cornellRoot=null,this.meshes=[],this.lightmapper=null,this.composite=null,this.post=null,this.bakeStartMs=0,this.lastSamples=0,this.options={preset:"advanced",layer:"combined",quality:"Custom",lightMapSize:1024,casts:5,targetSamples:256,filterMode:"linear",directLightEnabled:!0,indirectLightEnabled:!0,ambientLightEnabled:!0,ambientDistance:.4,lightSize:1.5,lightIntensity:4,lightColor:"#ffffff",giIntensity:2,skyColor:"#ffffff",skyIntensity:0,pause:!1,autoApplyPost:!0,dilationIterations:4,denoiseEnabled:!0,denoiseSigma:2.5,denoiseThreshold:.18,denoiseKSigma:1,samples:0,spp:0,etaSec:0,postStatus:"idle"},this.looping=!1,this.scene=new zy,this.scene.background=new re(657930),this.camera=new gn(45,window.innerWidth/window.innerHeight,.1,1e3),this.camera.position.set(0,5,18),this.camera.lookAt(0,5,0),this.renderer=new ap({antialias:!0}),this.renderer.outputColorSpace=ze,this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(window.devicePixelRatio),document.body.appendChild(this.renderer.domElement),this.controls=new aM(this.camera,this.renderer.domElement),this.controls.target.set(0,5,0),this.controls.update(),this.lightDummy=new Re,this.lightDummy.position.set(0,mn-.5,0),this.scene.add(this.lightDummy),this.lightMarker=new ft(new ii(2.5,2.5),new Or({color:16777215,side:un})),this.lightMarker.rotation.x=Math.PI/2,this.lightDummy.add(this.lightMarker),this.visualLight=new qy(16777215,80,0,2),this.lightDummy.add(this.visualLight),this.lightTransformController=new lM(this.camera,this.renderer.domElement),this.lightTransformController.addEventListener("dragging-changed",n=>{this.controls.enabled=!n.value}),this.lightTransformController.attach(this.lightDummy),this.scene.add(this.lightTransformController),this.pane=new Jl.exports.Pane({title:"Cornell Bake"}),this.pane.addInput(this.options,"preset",{options:YM}).on("change",()=>this.rebuildScene()),this.pane.addInput(this.options,"layer",{options:qM,label:"layer"}).on("change",()=>this.applyRenderMode()),this.pane.addInput(this.options,"quality",{options:Object.fromEntries(Object.keys(Ld).map(n=>[n,n])),label:"preset"}).on("change",n=>this.applyQualityPreset(n.value)),this.pane.addInput(this.options,"lightMapSize",{min:128,max:2048,step:128}).on("change",()=>{this.options.quality="Custom",this.pane.refresh()}),this.pane.addInput(this.options,"casts",{min:1,max:16,step:1}).on("change",()=>{this.options.quality="Custom",this.pane.refresh()}),this.pane.addInput(this.options,"targetSamples",{min:16,max:1024,step:16,label:"samples (frames)"}).on("change",()=>{this.options.quality="Custom",this.pane.refresh()}),this.pane.addInput(this.options,"lightSize",{min:.1,max:5,step:.1}),this.pane.addInput(this.options,"lightIntensity",{min:0,max:15,step:.1}),this.pane.addInput(this.options,"lightColor",{view:"color"}),this.pane.addInput(this.options,"giIntensity",{min:0,max:4,step:.05,label:"gi intensity"}).on("change",()=>{var n;return(n=this.composite)==null?void 0:n.refresh({giIntensity:this.options.giIntensity})}),this.pane.addInput(this.options,"skyColor",{view:"color",label:"sky color"}),this.pane.addInput(this.options,"skyIntensity",{min:0,max:4,step:.05,label:"sky intensity"}),this.pane.addInput(this.options,"directLightEnabled"),this.pane.addInput(this.options,"indirectLightEnabled"),this.pane.addInput(this.options,"ambientLightEnabled").on("change",()=>{var n;return(n=this.composite)==null?void 0:n.refresh({aoEnabled:this.options.ambientLightEnabled})}),this.pane.addInput(this.options,"ambientDistance",{min:.05,max:2,step:.05}),this.pane.addInput(this.options,"filterMode",{options:jM}).on("change",()=>this.applyRenderMode()),this.pane.addButton({title:"Bake"}).on("click",()=>this.bake()),this.pane.addInput(this.options,"pause");const t=this.pane.addFolder({title:"Post-process"});t.addInput(this.options,"autoApplyPost",{label:"auto-apply"}),t.addInput(this.options,"dilationIterations",{min:0,max:8,step:1,label:"dilate iters"}),t.addInput(this.options,"denoiseEnabled",{label:"denoise"}),t.addInput(this.options,"denoiseSigma",{min:.1,max:8,step:.1,label:"denoise sigma"}),t.addInput(this.options,"denoiseThreshold",{min:.01,max:1,step:.01,label:"edge thresh"}),t.addInput(this.options,"denoiseKSigma",{min:.5,max:3,step:.1,label:"kernel \xD7"}),t.addButton({title:"Apply Post"}).on("click",()=>this.applyPostProcess()),t.addButton({title:"Show Raw"}).on("click",()=>this.showRaw());const e=this.pane.addFolder({title:"Status"});e.addMonitor(this.options,"samples",{label:"frames"}),e.addMonitor(this.options,"spp",{label:"spp"}),e.addMonitor(this.options,"etaSec",{label:"eta (s)",format:n=>n.toFixed(1)}),e.addMonitor(this.options,"postStatus",{label:"post"}),this.rebuildScene()}updateSize(){this.renderer.setSize(window.innerWidth,window.innerHeight),this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setPixelRatio(window.devicePixelRatio)}mat(t,e=.95,n=0){const r=new Hy({color:t,roughness:e,metalness:n});return r._originalMap=null,r}addMesh(t){const e=t;return this.meshes.push(e),this.cornellRoot.add(e),e}buildWalls(){const e=this.mat(15790320),n=this.mat(14034728),r=this.mat(2924588),o=new ft(new ue(mn,.2,mn),e);o.position.set(0,-.2/2,0),this.addMesh(o);const l=new ft(new ue(mn,.2,mn),e.clone());l.material._originalMap=null,l.position.set(0,mn+.2/2,0),this.addMesh(l);const u=new ft(new ue(mn,mn,.2),e.clone());u.material._originalMap=null,u.position.set(0,Ds,-Ds-.2/2),this.addMesh(u);const h=new ft(new ue(.2,mn,mn),n);h.position.set(-Ds-.2/2,Ds,0),this.addMesh(h);const d=new ft(new ue(.2,mn,mn),r);d.position.set(Ds+.2/2,Ds,0),this.addMesh(d)}buildClassicBlocks(){const t=this.mat(15263976),e=new ft(new ue(3,6,3),t);e.position.set(-1.8,3,-1.5),e.rotation.y=.29,this.addMesh(e);const n=new ft(new ue(3,3,3),t.clone());n.material._originalMap=null,n.position.set(1.8,1.5,1.5),n.rotation.y=-.29,this.addMesh(n)}buildAdvancedExtras(){const t=new ft(new la(1,48,32),this.mat(16119285,.4,0));t.position.set(2.4,1,3),this.addMesh(t);const e=new ft(new fc(.55,.18,160,24),this.mat(16765286,.55,0));e.position.set(0,1,2.8),e.rotation.x=Math.PI/2,this.addMesh(e);const n=new ft(new ue(1.2,1.2,1.2),this.mat(13072954,.8,0));n.position.set(-3.5,.6,2.8),n.rotation.y=.45,this.addMesh(n)}async rebuildScene(){this.cornellRoot&&this.scene.remove(this.cornellRoot),this.cornellRoot=new Re,this.scene.add(this.cornellRoot),this.meshes=[],this.lightmapper=null,this.buildWalls(),this.buildClassicBlocks(),this.options.preset==="advanced"&&this.buildAdvancedExtras(),await this.bake(),this.startLoop()}async bake(){var p,m,g;if(!this.meshes.length)return;const t=this.options.lightMapSize;this.scene.updateMatrixWorld(!0),await MM(this.meshes);const e=LM(this.renderer,this.meshes,t,!0);this.positionTexture=e.positionTexture,this.normalTexture=e.normalTexture;const n=HM(this.meshes),r=new vc(n),o=WM(n,this.meshes),l=XM(o);n.index.array,n.attributes.meshIndex.array;const u=new re(this.options.lightColor).convertSRGBToLinear(),h=new re(this.options.skyColor).convertSRGBToLinear();this.visualLight.color.copy(u),this.visualLight.intensity=30*this.options.lightIntensity;const d={resolution:t,casts:this.options.casts,filterMode:this.options.filterMode==="linear"?Ve:de,lightPosition:this.lightDummy.position,lightSize:this.options.lightSize,lightColor:u,lightIntensity:this.options.lightIntensity,skyColor:h,skyIntensity:this.options.skyIntensity,ambientDistance:this.options.ambientDistance,ambientLightEnabled:this.options.ambientLightEnabled,directLightEnabled:this.options.directLightEnabled,indirectLightEnabled:this.options.indirectLightEnabled,albedoTexture:l.albedoTexture,emissiveTexture:l.emissiveTexture,materialTextureSize:l.side};(p=this.composite)==null||p.dispose(),this.composite=null,(m=this.post)==null||m.dispose(),this.post=null,(g=this.lightmapper)==null||g.dispose(),this.lightmapper=await IM(this.renderer,this.positionTexture,this.normalTexture,r,d),this.lightmapTarget=this.lightmapper.renderTexture,this.composite=VM(this.renderer,this.lightmapper.textures,this.options.lightMapSize,{giIntensity:this.options.giIntensity,aoEnabled:this.options.ambientLightEnabled}),this.options.postStatus="idle",this.options.samples=0,this.options.spp=0,this.options.etaSec=0,this.options.pause=!1,this.lastSamples=0,this.bakeStartMs=performance.now(),this.pane.refresh(),this.lightmapper.render(),this.applyRenderMode()}applyQualityPreset(t){const e=Ld[t];!e||(this.options.lightMapSize=e.lightMapSize,this.options.casts=e.casts,this.options.targetSamples=e.targetSamples,this.pane.refresh(),this.bake())}applyPostProcess(){var t;!this.lightmapper||!this.positionTexture||(this.options.postStatus="running",this.pane.refresh(),(t=this.post)==null||t.dispose(),this.post=BM(this.renderer,this.composite.texture,this.positionTexture,this.options.lightMapSize,{dilationIterations:this.options.dilationIterations,denoiseEnabled:this.options.denoiseEnabled,denoiseSigma:this.options.denoiseSigma,denoiseThreshold:this.options.denoiseThreshold,denoiseKSigma:this.options.denoiseKSigma}),this.options.postStatus=this.options.dilationIterations>0||this.options.denoiseEnabled?"applied":"skipped",this.pane.refresh(),this.applyRenderMode())}showRaw(){var t;(t=this.post)==null||t.dispose(),this.post=null,this.options.postStatus="idle",this.pane.refresh(),this.applyRenderMode()}estimateTimeRemaining(t,e,n){return Math.max(0,n/1e3*(e-t)/Math.max(1,t))}layerContext(){var t,e,n,r,o,l,u,h,d,p,m,g,x,b;return{composite:(e=(t=this.composite)==null?void 0:t.texture)!=null?e:null,direct:(r=(n=this.lightmapper)==null?void 0:n.textures.direct)!=null?r:null,indirect:(l=(o=this.lightmapper)==null?void 0:o.textures.indirect)!=null?l:null,ao:(h=(u=this.lightmapper)==null?void 0:u.textures.ao)!=null?h:null,raw:(p=(d=this.composite)==null?void 0:d.texture)!=null?p:null,post:(g=(m=this.post)==null?void 0:m.texture)!=null?g:null,postDilated:null,positions:(x=this.positionTexture)!=null?x:null,normals:(b=this.normalTexture)!=null?b:null}}applyRenderMode(){var r,o;const t=(r=sc.find(l=>l.id===this.options.layer))!=null?r:sc[0],e=this.layerContext(),n=t.getLightMap(e);for(const l of this.meshes){const u=l.material;u.map=t.showAlbedo&&(o=u._originalMap)!=null?o:null,u.lightMap=n,u.lightMap&&(u.lightMap.channel=2,u.lightMap.needsUpdate=!0),u.lightMapIntensity=1,u.needsUpdate=!0}this.lightMarker.material.color=new re(16777215),this.visualLight.visible=t.id==="albedo"}startLoop(){if(this.looping)return;this.looping=!0;const t=()=>{var e;if(requestAnimationFrame(t),this.lightmapper&&!this.options.pause){const n=this.lightmapper.render();(e=this.composite)==null||e.refresh(),n.samples!==this.lastSamples&&(this.lastSamples=n.samples,this.options.samples=n.samples,this.options.spp=n.samples*this.options.casts,this.options.etaSec=n.done?0:this.estimateTimeRemaining(n.samples,this.options.targetSamples,performance.now()-this.bakeStartMs)),n.done&&(this.options.pause=!0,this.options.etaSec=0,this.pane.refresh(),this.options.autoApplyPost&&this.applyPostProcess())}this.controls.update(),this.renderer.render(this.scene,this.camera)};t()}}(async()=>{await wM();const i=new KM;window.addEventListener("resize",()=>i.updateSize())})();
