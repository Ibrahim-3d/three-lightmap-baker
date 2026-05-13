const o_=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}};o_();const a_="modulepreload",ed={},l_="/three-lightmap-baker/",c_=function(e,t){return!t||t.length===0?e():Promise.all(t.map(n=>{if(n=`${l_}${n}`,n in ed)return;ed[n]=!0;const i=n.endsWith(".css"),r=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${r}`))return;const o=document.createElement("link");if(o.rel=i?"stylesheet":a_,i||(o.as="script",o.crossOrigin=""),o.href=n,document.head.appendChild(o),i)return new Promise((l,c)=>{o.addEventListener("load",l),o.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${n}`)))})})).then(()=>e())};/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const wu="161",Os={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Bs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},u_=0,td=1,h_=2,$f=1,d_=2,wi=3,$n=0,bn=1,gn=2,Vn=0,br=1,nd=2,id=3,sd=4,p_=5,gs=100,f_=101,m_=102,rd=103,od=104,g_=200,v_=201,__=202,x_=203,Hc=204,Gc=205,b_=206,y_=207,w_=208,M_=209,E_=210,S_=211,T_=212,A_=213,C_=214,P_=0,R_=1,L_=2,qa=3,I_=4,D_=5,N_=6,U_=7,Zf=0,F_=1,O_=2,Qi=0,B_=1,k_=2,V_=3,z_=4,H_=5,G_=6,ad="attached",W_="detached",Qf=300,Mr=301,Er=302,Wc=303,Xc=304,nl=306,Sr=1e3,dn=1001,Ya=1002,ft=1003,jc=1004,mr=1005,xt=1006,Va=1007,Si=1008,ri=1009,qc=1010,Jf=1011,il=1012,Mo=1013,Cn=1014,yt=1015,zn=1016,em=1017,tm=1018,ys=1020,X_=1021,Xt=1023,j_=1024,q_=1025,ws=1026,Tr=1027,nm=1028,Mu=1029,im=1030,sl=1031,Po=1033,zl=33776,Hl=33777,Gl=33778,Wl=33779,ld=35840,cd=35841,ud=35842,hd=35843,sm=36196,dd=37492,pd=37496,fd=37808,md=37809,gd=37810,vd=37811,_d=37812,xd=37813,bd=37814,yd=37815,wd=37816,Md=37817,Ed=37818,Sd=37819,Td=37820,Ad=37821,Xl=36492,Cd=36494,Pd=36495,Y_=36283,Rd=36284,Ld=36285,Id=36286,Ro=2300,Ar=2301,jl=2302,Dd=2400,Nd=2401,Ud=2402,K_=2500,$_=0,rm=1,Yc=2,om=3e3,Ms=3001,Z_=3200,Q_=3201,am=0,J_=1,On="",Ot="srgb",nn="srgb-linear",Eu="display-p3",rl="display-p3-linear",Ka="linear",Ct="srgb",$a="rec709",Za="p3",ks=7680,Fd=519,ex=512,tx=513,nx=514,lm=515,ix=516,sx=517,rx=518,ox=519,Kc=35044,Hn="300 es",$c=1035,Ti=2e3,Qa=2001;class Cs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Od=1234567;const Eo=Math.PI/180,Cr=180/Math.PI;function Kn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ln[s&255]+ln[s>>8&255]+ln[s>>16&255]+ln[s>>24&255]+"-"+ln[e&255]+ln[e>>8&255]+"-"+ln[e>>16&15|64]+ln[e>>24&255]+"-"+ln[t&63|128]+ln[t>>8&255]+"-"+ln[t>>16&255]+ln[t>>24&255]+ln[n&255]+ln[n>>8&255]+ln[n>>16&255]+ln[n>>24&255]).toLowerCase()}function $t(s,e,t){return Math.max(e,Math.min(t,s))}function Su(s,e){return(s%e+e)%e}function ax(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function lx(s,e,t){return s!==e?(t-s)/(e-s):0}function So(s,e,t){return(1-t)*s+t*e}function cx(s,e,t,n){return So(s,e,1-Math.exp(-t*n))}function ux(s,e=1){return e-Math.abs(Su(s,e*2)-e)}function hx(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function dx(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function px(s,e){return s+Math.floor(Math.random()*(e-s+1))}function fx(s,e){return s+Math.random()*(e-s)}function mx(s){return s*(.5-Math.random())}function gx(s){s!==void 0&&(Od=s);let e=Od+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function vx(s){return s*Eo}function _x(s){return s*Cr}function Zc(s){return(s&s-1)===0&&s!==0}function xx(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Ja(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function bx(s,e,t,n,i){const r=Math.cos,o=Math.sin,l=r(t/2),c=o(t/2),u=r((e+n)/2),d=o((e+n)/2),f=r((e-n)/2),m=o((e-n)/2),g=r((n-e)/2),b=o((n-e)/2);switch(i){case"XYX":s.set(l*d,c*f,c*m,l*u);break;case"YZY":s.set(c*m,l*d,c*f,l*u);break;case"ZXZ":s.set(c*f,c*m,l*d,l*u);break;case"XZX":s.set(l*d,c*b,c*g,l*u);break;case"YXY":s.set(c*g,l*d,c*b,l*u);break;case"ZYZ":s.set(c*b,c*g,l*d,l*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Yn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function vt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const cm={DEG2RAD:Eo,RAD2DEG:Cr,generateUUID:Kn,clamp:$t,euclideanModulo:Su,mapLinear:ax,inverseLerp:lx,lerp:So,damp:cx,pingpong:ux,smoothstep:hx,smootherstep:dx,randInt:px,randFloat:fx,randFloatSpread:mx,seededRandom:gx,degToRad:vx,radToDeg:_x,isPowerOfTwo:Zc,ceilPowerOfTwo:xx,floorPowerOfTwo:Ja,setQuaternionFromProperEuler:bx,normalize:vt,denormalize:Yn};class Re{constructor(e=0,t=0){Re.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos($t(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class it{constructor(e,t,n,i,r,o,l,c,u){it.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,l,c,u)}set(e,t,n,i,r,o,l,c,u){const d=this.elements;return d[0]=e,d[1]=i,d[2]=l,d[3]=t,d[4]=r,d[5]=c,d[6]=n,d[7]=o,d[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],l=n[3],c=n[6],u=n[1],d=n[4],f=n[7],m=n[2],g=n[5],b=n[8],w=i[0],x=i[3],v=i[6],M=i[1],y=i[4],S=i[7],C=i[2],P=i[5],T=i[8];return r[0]=o*w+l*M+c*C,r[3]=o*x+l*y+c*P,r[6]=o*v+l*S+c*T,r[1]=u*w+d*M+f*C,r[4]=u*x+d*y+f*P,r[7]=u*v+d*S+f*T,r[2]=m*w+g*M+b*C,r[5]=m*x+g*y+b*P,r[8]=m*v+g*S+b*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],l=e[5],c=e[6],u=e[7],d=e[8];return t*o*d-t*l*u-n*r*d+n*l*c+i*r*u-i*o*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],l=e[5],c=e[6],u=e[7],d=e[8],f=d*o-l*u,m=l*c-d*r,g=u*r-o*c,b=t*f+n*m+i*g;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/b;return e[0]=f*w,e[1]=(i*u-d*n)*w,e[2]=(l*n-i*o)*w,e[3]=m*w,e[4]=(d*t-i*c)*w,e[5]=(i*r-l*t)*w,e[6]=g*w,e[7]=(n*c-u*t)*w,e[8]=(o*t-n*r)*w,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,l){const c=Math.cos(r),u=Math.sin(r);return this.set(n*c,n*u,-n*(c*o+u*l)+o+e,-i*u,i*c,-i*(-u*o+c*l)+l+t,0,0,1),this}scale(e,t){return this.premultiply(ql.makeScale(e,t)),this}rotate(e){return this.premultiply(ql.makeRotation(-e)),this}translate(e,t){return this.premultiply(ql.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ql=new it;function um(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Lo(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function yx(){const s=Lo("canvas");return s.style.display="block",s}const Bd={};function Es(s){s in Bd||(Bd[s]=!0,console.warn(s))}const kd=new it().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Vd=new it().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),qo={[nn]:{transfer:Ka,primaries:$a,toReference:s=>s,fromReference:s=>s},[Ot]:{transfer:Ct,primaries:$a,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[rl]:{transfer:Ka,primaries:Za,toReference:s=>s.applyMatrix3(Vd),fromReference:s=>s.applyMatrix3(kd)},[Eu]:{transfer:Ct,primaries:Za,toReference:s=>s.convertSRGBToLinear().applyMatrix3(Vd),fromReference:s=>s.applyMatrix3(kd).convertLinearToSRGB()}},wx=new Set([nn,rl]),mt={enabled:!0,_workingColorSpace:nn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!wx.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const n=qo[e].toReference,i=qo[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return qo[s].primaries},getTransfer:function(s){return s===On?Ka:qo[s].transfer}};function yr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Yl(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Vs;class hm{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Vs===void 0&&(Vs=Lo("canvas")),Vs.width=e.width,Vs.height=e.height;const n=Vs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Vs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){const t=Lo("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=yr(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(yr(t[n]/255)*255):t[n]=yr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Mx=0;class dm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Mx++}),this.uuid=Kn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,l=i.length;o<l;o++)i[o].isDataTexture?r.push(Kl(i[o].image)):r.push(Kl(i[o]))}else r=Kl(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Kl(s){return typeof HTMLImageElement!="undefined"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&s instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&s instanceof ImageBitmap?hm.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ex=0;class qt extends Cs{constructor(e=qt.DEFAULT_IMAGE,t=qt.DEFAULT_MAPPING,n=dn,i=dn,r=xt,o=Si,l=Xt,c=ri,u=qt.DEFAULT_ANISOTROPY,d=On){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ex++}),this.uuid=Kn(),this.name="",this.source=new dm(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=u,this.format=l,this.internalFormat=null,this.type=c,this.offset=new Re(0,0),this.repeat=new Re(1,1),this.center=new Re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new it,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof d=="string"?this.colorSpace=d:(Es("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=d===Ms?Ot:On),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Qf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Sr:e.x=e.x-Math.floor(e.x);break;case dn:e.x=e.x<0?0:1;break;case Ya:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Sr:e.y=e.y-Math.floor(e.y);break;case dn:e.y=e.y<0?0:1;break;case Ya:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Es("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ot?Ms:om}set encoding(e){Es("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Ms?Ot:On}}qt.DEFAULT_IMAGE=null;qt.DEFAULT_MAPPING=Qf;qt.DEFAULT_ANISOTROPY=1;class bt{constructor(e=0,t=0,n=0,i=1){bt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const c=e.elements,u=c[0],d=c[4],f=c[8],m=c[1],g=c[5],b=c[9],w=c[2],x=c[6],v=c[10];if(Math.abs(d-m)<.01&&Math.abs(f-w)<.01&&Math.abs(b-x)<.01){if(Math.abs(d+m)<.1&&Math.abs(f+w)<.1&&Math.abs(b+x)<.1&&Math.abs(u+g+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(u+1)/2,S=(g+1)/2,C=(v+1)/2,P=(d+m)/4,T=(f+w)/4,I=(b+x)/4;return y>S&&y>C?y<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(y),i=P/n,r=T/n):S>C?S<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(S),n=P/i,r=I/i):C<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(C),n=T/r,i=I/r),this.set(n,i,r,t),this}let M=Math.sqrt((x-b)*(x-b)+(f-w)*(f-w)+(m-d)*(m-d));return Math.abs(M)<.001&&(M=1),this.x=(x-b)/M,this.y=(f-w)/M,this.z=(m-d)/M,this.w=Math.acos((u+g+v-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Sx extends Cs{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new bt(0,0,e,t),this.scissorTest=!1,this.viewport=new bt(0,0,e,t);const i={width:e,height:t,depth:1};n.encoding!==void 0&&(Es("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Ms?Ot:On),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new qt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new dm(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class En extends Sx{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class pm extends qt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=ft,this.minFilter=ft,this.wrapR=dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Tx extends qt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=ft,this.minFilter=ft,this.wrapR=dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ax extends En{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isWebGLMultipleRenderTargets=!0;const r=this.texture;this.texture=[];for(let o=0;o<n;o++)this.texture[o]=r.clone(),this.texture[o].isRenderTargetTexture=!0}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.texture.length;i<r;i++)this.texture[i].image.width=e,this.texture[i].image.height=t,this.texture[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}copy(e){this.dispose(),this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.texture.length=0;for(let t=0,n=e.texture.length;t<n;t++)this.texture[t]=e.texture[t].clone(),this.texture[t].isRenderTargetTexture=!0;return this}}class Wt{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,l){let c=n[i+0],u=n[i+1],d=n[i+2],f=n[i+3];const m=r[o+0],g=r[o+1],b=r[o+2],w=r[o+3];if(l===0){e[t+0]=c,e[t+1]=u,e[t+2]=d,e[t+3]=f;return}if(l===1){e[t+0]=m,e[t+1]=g,e[t+2]=b,e[t+3]=w;return}if(f!==w||c!==m||u!==g||d!==b){let x=1-l;const v=c*m+u*g+d*b+f*w,M=v>=0?1:-1,y=1-v*v;if(y>Number.EPSILON){const C=Math.sqrt(y),P=Math.atan2(C,v*M);x=Math.sin(x*P)/C,l=Math.sin(l*P)/C}const S=l*M;if(c=c*x+m*S,u=u*x+g*S,d=d*x+b*S,f=f*x+w*S,x===1-l){const C=1/Math.sqrt(c*c+u*u+d*d+f*f);c*=C,u*=C,d*=C,f*=C}}e[t]=c,e[t+1]=u,e[t+2]=d,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,r,o){const l=n[i],c=n[i+1],u=n[i+2],d=n[i+3],f=r[o],m=r[o+1],g=r[o+2],b=r[o+3];return e[t]=l*b+d*f+c*g-u*m,e[t+1]=c*b+d*m+u*f-l*g,e[t+2]=u*b+d*g+l*m-c*f,e[t+3]=d*b-l*f-c*m-u*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,o=e._order,l=Math.cos,c=Math.sin,u=l(n/2),d=l(i/2),f=l(r/2),m=c(n/2),g=c(i/2),b=c(r/2);switch(o){case"XYZ":this._x=m*d*f+u*g*b,this._y=u*g*f-m*d*b,this._z=u*d*b+m*g*f,this._w=u*d*f-m*g*b;break;case"YXZ":this._x=m*d*f+u*g*b,this._y=u*g*f-m*d*b,this._z=u*d*b-m*g*f,this._w=u*d*f+m*g*b;break;case"ZXY":this._x=m*d*f-u*g*b,this._y=u*g*f+m*d*b,this._z=u*d*b+m*g*f,this._w=u*d*f-m*g*b;break;case"ZYX":this._x=m*d*f-u*g*b,this._y=u*g*f+m*d*b,this._z=u*d*b-m*g*f,this._w=u*d*f+m*g*b;break;case"YZX":this._x=m*d*f+u*g*b,this._y=u*g*f+m*d*b,this._z=u*d*b-m*g*f,this._w=u*d*f-m*g*b;break;case"XZY":this._x=m*d*f-u*g*b,this._y=u*g*f-m*d*b,this._z=u*d*b+m*g*f,this._w=u*d*f+m*g*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],l=t[5],c=t[9],u=t[2],d=t[6],f=t[10],m=n+l+f;if(m>0){const g=.5/Math.sqrt(m+1);this._w=.25/g,this._x=(d-c)*g,this._y=(r-u)*g,this._z=(o-i)*g}else if(n>l&&n>f){const g=2*Math.sqrt(1+n-l-f);this._w=(d-c)/g,this._x=.25*g,this._y=(i+o)/g,this._z=(r+u)/g}else if(l>f){const g=2*Math.sqrt(1+l-n-f);this._w=(r-u)/g,this._x=(i+o)/g,this._y=.25*g,this._z=(c+d)/g}else{const g=2*Math.sqrt(1+f-n-l);this._w=(o-i)/g,this._x=(r+u)/g,this._y=(c+d)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($t(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,l=t._x,c=t._y,u=t._z,d=t._w;return this._x=n*d+o*l+i*u-r*c,this._y=i*d+o*c+r*l-n*u,this._z=r*d+o*u+n*c-i*l,this._w=o*d-n*l-i*c-r*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let l=o*e._w+n*e._x+i*e._y+r*e._z;if(l<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,l=-l):this.copy(e),l>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const c=1-l*l;if(c<=Number.EPSILON){const g=1-t;return this._w=g*o+t*this._w,this._x=g*n+t*this._x,this._y=g*i+t*this._y,this._z=g*r+t*this._z,this.normalize(),this}const u=Math.sqrt(c),d=Math.atan2(u,l),f=Math.sin((1-t)*d)/u,m=Math.sin(t*d)/u;return this._w=o*f+this._w*m,this._x=n*f+this._x*m,this._y=i*f+this._y*m,this._z=r*f+this._z*m,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,n=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(zd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(zd.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,l=e.z,c=e.w,u=2*(o*i-l*n),d=2*(l*t-r*i),f=2*(r*n-o*t);return this.x=t+c*u+o*f-l*d,this.y=n+c*d+l*u-r*f,this.z=i+c*f+r*d-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,l=t.y,c=t.z;return this.x=i*c-r*l,this.y=r*o-n*c,this.z=n*l-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return $l.copy(this).projectOnVector(e),this.sub($l)}reflect(e){return this.sub($l.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos($t(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const $l=new D,zd=new Wt;class zt{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Gn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Gn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Gn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,l=r.count;o<l;o++)e.isMesh===!0?e.getVertexPosition(o,Gn):Gn.fromBufferAttribute(r,o),Gn.applyMatrix4(e.matrixWorld),this.expandByPoint(Gn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Yo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Yo.copy(n.boundingBox)),Yo.applyMatrix4(e.matrixWorld),this.union(Yo)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Gn),Gn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(eo),Ko.subVectors(this.max,eo),zs.subVectors(e.a,eo),Hs.subVectors(e.b,eo),Gs.subVectors(e.c,eo),Bi.subVectors(Hs,zs),ki.subVectors(Gs,Hs),as.subVectors(zs,Gs);let t=[0,-Bi.z,Bi.y,0,-ki.z,ki.y,0,-as.z,as.y,Bi.z,0,-Bi.x,ki.z,0,-ki.x,as.z,0,-as.x,-Bi.y,Bi.x,0,-ki.y,ki.x,0,-as.y,as.x,0];return!Zl(t,zs,Hs,Gs,Ko)||(t=[1,0,0,0,1,0,0,0,1],!Zl(t,zs,Hs,Gs,Ko))?!1:($o.crossVectors(Bi,ki),t=[$o.x,$o.y,$o.z],Zl(t,zs,Hs,Gs,Ko))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Gn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Gn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(mi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const mi=[new D,new D,new D,new D,new D,new D,new D,new D],Gn=new D,Yo=new zt,zs=new D,Hs=new D,Gs=new D,Bi=new D,ki=new D,as=new D,eo=new D,Ko=new D,$o=new D,ls=new D;function Zl(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){ls.fromArray(s,r);const l=i.x*Math.abs(ls.x)+i.y*Math.abs(ls.y)+i.z*Math.abs(ls.z),c=e.dot(ls),u=t.dot(ls),d=n.dot(ls);if(Math.max(-Math.max(c,u,d),Math.min(c,u,d))>l)return!1}return!0}const Cx=new zt,to=new D,Ql=new D;class Qn{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Cx.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;to.subVectors(e,this.center);const t=to.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(to,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ql.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(to.copy(e.center).add(Ql)),this.expandByPoint(to.copy(e.center).sub(Ql))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const gi=new D,Jl=new D,Zo=new D,Vi=new D,ec=new D,Qo=new D,tc=new D;class Ir{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,gi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=gi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(gi.copy(this.origin).addScaledVector(this.direction,t),gi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Jl.copy(e).add(t).multiplyScalar(.5),Zo.copy(t).sub(e).normalize(),Vi.copy(this.origin).sub(Jl);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Zo),l=Vi.dot(this.direction),c=-Vi.dot(Zo),u=Vi.lengthSq(),d=Math.abs(1-o*o);let f,m,g,b;if(d>0)if(f=o*c-l,m=o*l-c,b=r*d,f>=0)if(m>=-b)if(m<=b){const w=1/d;f*=w,m*=w,g=f*(f+o*m+2*l)+m*(o*f+m+2*c)+u}else m=r,f=Math.max(0,-(o*m+l)),g=-f*f+m*(m+2*c)+u;else m=-r,f=Math.max(0,-(o*m+l)),g=-f*f+m*(m+2*c)+u;else m<=-b?(f=Math.max(0,-(-o*r+l)),m=f>0?-r:Math.min(Math.max(-r,-c),r),g=-f*f+m*(m+2*c)+u):m<=b?(f=0,m=Math.min(Math.max(-r,-c),r),g=m*(m+2*c)+u):(f=Math.max(0,-(o*r+l)),m=f>0?r:Math.min(Math.max(-r,-c),r),g=-f*f+m*(m+2*c)+u);else m=o>0?-r:r,f=Math.max(0,-(o*m+l)),g=-f*f+m*(m+2*c)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(Jl).addScaledVector(Zo,m),g}intersectSphere(e,t){gi.subVectors(e.center,this.origin);const n=gi.dot(this.direction),i=gi.dot(gi)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),l=n-o,c=n+o;return c<0?null:l<0?this.at(c,t):this.at(l,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,l,c;const u=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,m=this.origin;return u>=0?(n=(e.min.x-m.x)*u,i=(e.max.x-m.x)*u):(n=(e.max.x-m.x)*u,i=(e.min.x-m.x)*u),d>=0?(r=(e.min.y-m.y)*d,o=(e.max.y-m.y)*d):(r=(e.max.y-m.y)*d,o=(e.min.y-m.y)*d),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),f>=0?(l=(e.min.z-m.z)*f,c=(e.max.z-m.z)*f):(l=(e.max.z-m.z)*f,c=(e.min.z-m.z)*f),n>c||l>i)||((l>n||n!==n)&&(n=l),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,gi)!==null}intersectTriangle(e,t,n,i,r){ec.subVectors(t,e),Qo.subVectors(n,e),tc.crossVectors(ec,Qo);let o=this.direction.dot(tc),l;if(o>0){if(i)return null;l=1}else if(o<0)l=-1,o=-o;else return null;Vi.subVectors(this.origin,e);const c=l*this.direction.dot(Qo.crossVectors(Vi,Qo));if(c<0)return null;const u=l*this.direction.dot(ec.cross(Vi));if(u<0||c+u>o)return null;const d=-l*Vi.dot(tc);return d<0?null:this.at(d/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Xe{constructor(e,t,n,i,r,o,l,c,u,d,f,m,g,b,w,x){Xe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,l,c,u,d,f,m,g,b,w,x)}set(e,t,n,i,r,o,l,c,u,d,f,m,g,b,w,x){const v=this.elements;return v[0]=e,v[4]=t,v[8]=n,v[12]=i,v[1]=r,v[5]=o,v[9]=l,v[13]=c,v[2]=u,v[6]=d,v[10]=f,v[14]=m,v[3]=g,v[7]=b,v[11]=w,v[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Ws.setFromMatrixColumn(e,0).length(),r=1/Ws.setFromMatrixColumn(e,1).length(),o=1/Ws.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),l=Math.sin(n),c=Math.cos(i),u=Math.sin(i),d=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const m=o*d,g=o*f,b=l*d,w=l*f;t[0]=c*d,t[4]=-c*f,t[8]=u,t[1]=g+b*u,t[5]=m-w*u,t[9]=-l*c,t[2]=w-m*u,t[6]=b+g*u,t[10]=o*c}else if(e.order==="YXZ"){const m=c*d,g=c*f,b=u*d,w=u*f;t[0]=m+w*l,t[4]=b*l-g,t[8]=o*u,t[1]=o*f,t[5]=o*d,t[9]=-l,t[2]=g*l-b,t[6]=w+m*l,t[10]=o*c}else if(e.order==="ZXY"){const m=c*d,g=c*f,b=u*d,w=u*f;t[0]=m-w*l,t[4]=-o*f,t[8]=b+g*l,t[1]=g+b*l,t[5]=o*d,t[9]=w-m*l,t[2]=-o*u,t[6]=l,t[10]=o*c}else if(e.order==="ZYX"){const m=o*d,g=o*f,b=l*d,w=l*f;t[0]=c*d,t[4]=b*u-g,t[8]=m*u+w,t[1]=c*f,t[5]=w*u+m,t[9]=g*u-b,t[2]=-u,t[6]=l*c,t[10]=o*c}else if(e.order==="YZX"){const m=o*c,g=o*u,b=l*c,w=l*u;t[0]=c*d,t[4]=w-m*f,t[8]=b*f+g,t[1]=f,t[5]=o*d,t[9]=-l*d,t[2]=-u*d,t[6]=g*f+b,t[10]=m-w*f}else if(e.order==="XZY"){const m=o*c,g=o*u,b=l*c,w=l*u;t[0]=c*d,t[4]=-f,t[8]=u*d,t[1]=m*f+w,t[5]=o*d,t[9]=g*f-b,t[2]=b*f-g,t[6]=l*d,t[10]=w*f+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Px,e,Rx)}lookAt(e,t,n){const i=this.elements;return Sn.subVectors(e,t),Sn.lengthSq()===0&&(Sn.z=1),Sn.normalize(),zi.crossVectors(n,Sn),zi.lengthSq()===0&&(Math.abs(n.z)===1?Sn.x+=1e-4:Sn.z+=1e-4,Sn.normalize(),zi.crossVectors(n,Sn)),zi.normalize(),Jo.crossVectors(Sn,zi),i[0]=zi.x,i[4]=Jo.x,i[8]=Sn.x,i[1]=zi.y,i[5]=Jo.y,i[9]=Sn.y,i[2]=zi.z,i[6]=Jo.z,i[10]=Sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],l=n[4],c=n[8],u=n[12],d=n[1],f=n[5],m=n[9],g=n[13],b=n[2],w=n[6],x=n[10],v=n[14],M=n[3],y=n[7],S=n[11],C=n[15],P=i[0],T=i[4],I=i[8],B=i[12],E=i[1],R=i[5],k=i[9],W=i[13],U=i[2],H=i[6],G=i[10],X=i[14],Q=i[3],K=i[7],ie=i[11],ne=i[15];return r[0]=o*P+l*E+c*U+u*Q,r[4]=o*T+l*R+c*H+u*K,r[8]=o*I+l*k+c*G+u*ie,r[12]=o*B+l*W+c*X+u*ne,r[1]=d*P+f*E+m*U+g*Q,r[5]=d*T+f*R+m*H+g*K,r[9]=d*I+f*k+m*G+g*ie,r[13]=d*B+f*W+m*X+g*ne,r[2]=b*P+w*E+x*U+v*Q,r[6]=b*T+w*R+x*H+v*K,r[10]=b*I+w*k+x*G+v*ie,r[14]=b*B+w*W+x*X+v*ne,r[3]=M*P+y*E+S*U+C*Q,r[7]=M*T+y*R+S*H+C*K,r[11]=M*I+y*k+S*G+C*ie,r[15]=M*B+y*W+S*X+C*ne,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],l=e[5],c=e[9],u=e[13],d=e[2],f=e[6],m=e[10],g=e[14],b=e[3],w=e[7],x=e[11],v=e[15];return b*(+r*c*f-i*u*f-r*l*m+n*u*m+i*l*g-n*c*g)+w*(+t*c*g-t*u*m+r*o*m-i*o*g+i*u*d-r*c*d)+x*(+t*u*f-t*l*g-r*o*f+n*o*g+r*l*d-n*u*d)+v*(-i*l*d-t*c*f+t*l*m+i*o*f-n*o*m+n*c*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],l=e[5],c=e[6],u=e[7],d=e[8],f=e[9],m=e[10],g=e[11],b=e[12],w=e[13],x=e[14],v=e[15],M=f*x*u-w*m*u+w*c*g-l*x*g-f*c*v+l*m*v,y=b*m*u-d*x*u-b*c*g+o*x*g+d*c*v-o*m*v,S=d*w*u-b*f*u+b*l*g-o*w*g-d*l*v+o*f*v,C=b*f*c-d*w*c-b*l*m+o*w*m+d*l*x-o*f*x,P=t*M+n*y+i*S+r*C;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/P;return e[0]=M*T,e[1]=(w*m*r-f*x*r-w*i*g+n*x*g+f*i*v-n*m*v)*T,e[2]=(l*x*r-w*c*r+w*i*u-n*x*u-l*i*v+n*c*v)*T,e[3]=(f*c*r-l*m*r-f*i*u+n*m*u+l*i*g-n*c*g)*T,e[4]=y*T,e[5]=(d*x*r-b*m*r+b*i*g-t*x*g-d*i*v+t*m*v)*T,e[6]=(b*c*r-o*x*r-b*i*u+t*x*u+o*i*v-t*c*v)*T,e[7]=(o*m*r-d*c*r+d*i*u-t*m*u-o*i*g+t*c*g)*T,e[8]=S*T,e[9]=(b*f*r-d*w*r-b*n*g+t*w*g+d*n*v-t*f*v)*T,e[10]=(o*w*r-b*l*r+b*n*u-t*w*u-o*n*v+t*l*v)*T,e[11]=(d*l*r-o*f*r-d*n*u+t*f*u+o*n*g-t*l*g)*T,e[12]=C*T,e[13]=(d*w*i-b*f*i+b*n*m-t*w*m-d*n*x+t*f*x)*T,e[14]=(b*l*i-o*w*i-b*n*c+t*w*c+o*n*x-t*l*x)*T,e[15]=(o*f*i-d*l*i+d*n*c-t*f*c-o*n*m+t*l*m)*T,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,l=e.y,c=e.z,u=r*o,d=r*l;return this.set(u*o+n,u*l-i*c,u*c+i*l,0,u*l+i*c,d*l+n,d*c-i*o,0,u*c-i*l,d*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,l=t._z,c=t._w,u=r+r,d=o+o,f=l+l,m=r*u,g=r*d,b=r*f,w=o*d,x=o*f,v=l*f,M=c*u,y=c*d,S=c*f,C=n.x,P=n.y,T=n.z;return i[0]=(1-(w+v))*C,i[1]=(g+S)*C,i[2]=(b-y)*C,i[3]=0,i[4]=(g-S)*P,i[5]=(1-(m+v))*P,i[6]=(x+M)*P,i[7]=0,i[8]=(b+y)*T,i[9]=(x-M)*T,i[10]=(1-(m+w))*T,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Ws.set(i[0],i[1],i[2]).length();const o=Ws.set(i[4],i[5],i[6]).length(),l=Ws.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Wn.copy(this);const u=1/r,d=1/o,f=1/l;return Wn.elements[0]*=u,Wn.elements[1]*=u,Wn.elements[2]*=u,Wn.elements[4]*=d,Wn.elements[5]*=d,Wn.elements[6]*=d,Wn.elements[8]*=f,Wn.elements[9]*=f,Wn.elements[10]*=f,t.setFromRotationMatrix(Wn),n.x=r,n.y=o,n.z=l,this}makePerspective(e,t,n,i,r,o,l=Ti){const c=this.elements,u=2*r/(t-e),d=2*r/(n-i),f=(t+e)/(t-e),m=(n+i)/(n-i);let g,b;if(l===Ti)g=-(o+r)/(o-r),b=-2*o*r/(o-r);else if(l===Qa)g=-o/(o-r),b=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=b,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,o,l=Ti){const c=this.elements,u=1/(t-e),d=1/(n-i),f=1/(o-r),m=(t+e)*u,g=(n+i)*d;let b,w;if(l===Ti)b=(o+r)*f,w=-2*f;else if(l===Qa)b=r*f,w=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return c[0]=2*u,c[4]=0,c[8]=0,c[12]=-m,c[1]=0,c[5]=2*d,c[9]=0,c[13]=-g,c[2]=0,c[6]=0,c[10]=w,c[14]=-b,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ws=new D,Wn=new Xe,Px=new D(0,0,0),Rx=new D(1,1,1),zi=new D,Jo=new D,Sn=new D,Hd=new Xe,Gd=new Wt;class Do{constructor(e=0,t=0,n=0,i=Do.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],l=i[8],c=i[1],u=i[5],d=i[9],f=i[2],m=i[6],g=i[10];switch(t){case"XYZ":this._y=Math.asin($t(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,g),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(m,u),this._z=0);break;case"YXZ":this._x=Math.asin(-$t(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(l,g),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin($t(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-f,g),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-$t(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(m,g),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin($t(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,u),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(l,g));break;case"XZY":this._z=Math.asin(-$t(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(m,u),this._y=Math.atan2(l,r)):(this._x=Math.atan2(-d,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Hd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Hd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Gd.setFromEuler(this),this.setFromQuaternion(Gd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Do.DEFAULT_ORDER="XYZ";class Tu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Lx=0;const Wd=new D,Xs=new Wt,vi=new Xe,ea=new D,no=new D,Ix=new D,Dx=new Wt,Xd=new D(1,0,0),jd=new D(0,1,0),qd=new D(0,0,1),Nx={type:"added"},Ux={type:"removed"};class gt extends Cs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Lx++}),this.uuid=Kn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=gt.DEFAULT_UP.clone();const e=new D,t=new Do,n=new Wt,i=new D(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Xe},normalMatrix:{value:new it}}),this.matrix=new Xe,this.matrixWorld=new Xe,this.matrixAutoUpdate=gt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Tu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Xs.setFromAxisAngle(e,t),this.quaternion.multiply(Xs),this}rotateOnWorldAxis(e,t){return Xs.setFromAxisAngle(e,t),this.quaternion.premultiply(Xs),this}rotateX(e){return this.rotateOnAxis(Xd,e)}rotateY(e){return this.rotateOnAxis(jd,e)}rotateZ(e){return this.rotateOnAxis(qd,e)}translateOnAxis(e,t){return Wd.copy(e).applyQuaternion(this.quaternion),this.position.add(Wd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Xd,e)}translateY(e){return this.translateOnAxis(jd,e)}translateZ(e){return this.translateOnAxis(qd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(vi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ea.copy(e):ea.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),no.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vi.lookAt(no,ea,this.up):vi.lookAt(ea,no,this.up),this.quaternion.setFromRotationMatrix(vi),i&&(vi.extractRotation(i.matrixWorld),Xs.setFromRotationMatrix(vi),this.quaternion.premultiply(Xs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Nx)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ux)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),vi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vi.multiply(e.parent.matrixWorld)),e.applyMatrix4(vi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(no,e,Ix),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(no,Dx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++){const l=i[r];l.matrixWorldAutoUpdate===!0&&l.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(l=>({boxInitialized:l.boxInitialized,boxMin:l.box.min.toArray(),boxMax:l.box.max.toArray(),sphereInitialized:l.sphereInitialized,sphereRadius:l.sphere.radius,sphereCenter:l.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(l,c){return l[c.uuid]===void 0&&(l[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const c=l.shapes;if(Array.isArray(c))for(let u=0,d=c.length;u<d;u++){const f=c[u];r(e.shapes,f)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let c=0,u=this.material.length;c<u;c++)l.push(r(e.materials,this.material[c]));i.material=l}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let l=0;l<this.children.length;l++)i.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let l=0;l<this.animations.length;l++){const c=this.animations[l];i.animations.push(r(e.animations,c))}}if(t){const l=o(e.geometries),c=o(e.materials),u=o(e.textures),d=o(e.images),f=o(e.shapes),m=o(e.skeletons),g=o(e.animations),b=o(e.nodes);l.length>0&&(n.geometries=l),c.length>0&&(n.materials=c),u.length>0&&(n.textures=u),d.length>0&&(n.images=d),f.length>0&&(n.shapes=f),m.length>0&&(n.skeletons=m),g.length>0&&(n.animations=g),b.length>0&&(n.nodes=b)}return n.object=i,n;function o(l){const c=[];for(const u in l){const d=l[u];delete d.metadata,c.push(d)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}gt.DEFAULT_UP=new D(0,1,0);gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Xn=new D,_i=new D,nc=new D,xi=new D,js=new D,qs=new D,Yd=new D,ic=new D,sc=new D,rc=new D;class vn{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Xn.subVectors(e,t),i.cross(Xn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Xn.subVectors(i,t),_i.subVectors(n,t),nc.subVectors(e,t);const o=Xn.dot(Xn),l=Xn.dot(_i),c=Xn.dot(nc),u=_i.dot(_i),d=_i.dot(nc),f=o*u-l*l;if(f===0)return r.set(0,0,0),null;const m=1/f,g=(u*c-l*d)*m,b=(o*d-l*c)*m;return r.set(1-g-b,b,g)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,xi)===null?!1:xi.x>=0&&xi.y>=0&&xi.x+xi.y<=1}static getInterpolation(e,t,n,i,r,o,l,c){return this.getBarycoord(e,t,n,i,xi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,xi.x),c.addScaledVector(o,xi.y),c.addScaledVector(l,xi.z),c)}static isFrontFacing(e,t,n,i){return Xn.subVectors(n,t),_i.subVectors(e,t),Xn.cross(_i).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Xn.subVectors(this.c,this.b),_i.subVectors(this.a,this.b),Xn.cross(_i).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return vn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return vn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return vn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return vn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return vn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,l;js.subVectors(i,n),qs.subVectors(r,n),ic.subVectors(e,n);const c=js.dot(ic),u=qs.dot(ic);if(c<=0&&u<=0)return t.copy(n);sc.subVectors(e,i);const d=js.dot(sc),f=qs.dot(sc);if(d>=0&&f<=d)return t.copy(i);const m=c*f-d*u;if(m<=0&&c>=0&&d<=0)return o=c/(c-d),t.copy(n).addScaledVector(js,o);rc.subVectors(e,r);const g=js.dot(rc),b=qs.dot(rc);if(b>=0&&g<=b)return t.copy(r);const w=g*u-c*b;if(w<=0&&u>=0&&b<=0)return l=u/(u-b),t.copy(n).addScaledVector(qs,l);const x=d*b-g*f;if(x<=0&&f-d>=0&&g-b>=0)return Yd.subVectors(r,i),l=(f-d)/(f-d+(g-b)),t.copy(i).addScaledVector(Yd,l);const v=1/(x+w+m);return o=w*v,l=m*v,t.copy(n).addScaledVector(js,o).addScaledVector(qs,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const fm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hi={h:0,s:0,l:0},ta={h:0,s:0,l:0};function oc(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Ge{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ot){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,mt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=mt.workingColorSpace){return this.r=e,this.g=t,this.b=n,mt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=mt.workingColorSpace){if(e=Su(e,1),t=$t(t,0,1),n=$t(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=oc(o,r,e+1/3),this.g=oc(o,r,e),this.b=oc(o,r,e-1/3)}return mt.toWorkingColorSpace(this,i),this}setStyle(e,t=Ot){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],l=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ot){const n=fm[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=yr(e.r),this.g=yr(e.g),this.b=yr(e.b),this}copyLinearToSRGB(e){return this.r=Yl(e.r),this.g=Yl(e.g),this.b=Yl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ot){return mt.fromWorkingColorSpace(cn.copy(this),e),Math.round($t(cn.r*255,0,255))*65536+Math.round($t(cn.g*255,0,255))*256+Math.round($t(cn.b*255,0,255))}getHexString(e=Ot){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=mt.workingColorSpace){mt.fromWorkingColorSpace(cn.copy(this),t);const n=cn.r,i=cn.g,r=cn.b,o=Math.max(n,i,r),l=Math.min(n,i,r);let c,u;const d=(l+o)/2;if(l===o)c=0,u=0;else{const f=o-l;switch(u=d<=.5?f/(o+l):f/(2-o-l),o){case n:c=(i-r)/f+(i<r?6:0);break;case i:c=(r-n)/f+2;break;case r:c=(n-i)/f+4;break}c/=6}return e.h=c,e.s=u,e.l=d,e}getRGB(e,t=mt.workingColorSpace){return mt.fromWorkingColorSpace(cn.copy(this),t),e.r=cn.r,e.g=cn.g,e.b=cn.b,e}getStyle(e=Ot){mt.fromWorkingColorSpace(cn.copy(this),e);const t=cn.r,n=cn.g,i=cn.b;return e!==Ot?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Hi),this.setHSL(Hi.h+e,Hi.s+t,Hi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Hi),e.getHSL(ta);const n=So(Hi.h,ta.h,t),i=So(Hi.s,ta.s,t),r=So(Hi.l,ta.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const cn=new Ge;Ge.NAMES=fm;let Fx=0;class oi extends Cs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Fx++}),this.uuid=Kn(),this.name="",this.type="Material",this.blending=br,this.side=$n,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Hc,this.blendDst=Gc,this.blendEquation=gs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ge(0,0,0),this.blendAlpha=0,this.depthFunc=qa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ks,this.stencilZFail=ks,this.stencilZPass=ks,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==br&&(n.blending=this.blending),this.side!==$n&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Hc&&(n.blendSrc=this.blendSrc),this.blendDst!==Gc&&(n.blendDst=this.blendDst),this.blendEquation!==gs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==qa&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Fd&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ks&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ks&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ks&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const l in r){const c=r[l];delete c.metadata,o.push(c)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class si extends oi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Zf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ei=Ox();function Ox(){const s=new ArrayBuffer(4),e=new Float32Array(s),t=new Uint32Array(s),n=new Uint32Array(512),i=new Uint32Array(512);for(let c=0;c<256;++c){const u=c-127;u<-27?(n[c]=0,n[c|256]=32768,i[c]=24,i[c|256]=24):u<-14?(n[c]=1024>>-u-14,n[c|256]=1024>>-u-14|32768,i[c]=-u-1,i[c|256]=-u-1):u<=15?(n[c]=u+15<<10,n[c|256]=u+15<<10|32768,i[c]=13,i[c|256]=13):u<128?(n[c]=31744,n[c|256]=64512,i[c]=24,i[c|256]=24):(n[c]=31744,n[c|256]=64512,i[c]=13,i[c|256]=13)}const r=new Uint32Array(2048),o=new Uint32Array(64),l=new Uint32Array(64);for(let c=1;c<1024;++c){let u=c<<13,d=0;for(;(u&8388608)===0;)u<<=1,d-=8388608;u&=-8388609,d+=947912704,r[c]=u|d}for(let c=1024;c<2048;++c)r[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)o[c]=c<<23;o[31]=1199570944,o[32]=2147483648;for(let c=33;c<63;++c)o[c]=2147483648+(c-32<<23);o[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(l[c]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:r,exponentTable:o,offsetTable:l}}function Bx(s){Math.abs(s)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),s=$t(s,-65504,65504),Ei.floatView[0]=s;const e=Ei.uint32View[0],t=e>>23&511;return Ei.baseTable[t]+((e&8388607)>>Ei.shiftTable[t])}function kx(s){const e=s>>10;return Ei.uint32View[0]=Ei.mantissaTable[Ei.offsetTable[e]+(s&1023)]+Ei.exponentTable[e],Ei.floatView[0]}const Vx={toHalfFloat:Bx,fromHalfFloat:kx},Ht=new D,na=new Re;class Rt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Kc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=yt,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Es("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)na.fromBufferAttribute(this,t),na.applyMatrix3(e),this.setXY(t,na.x,na.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix3(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix4(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyNormalMatrix(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.transformDirection(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Yn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=vt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Yn(t,this.array)),t}setX(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Yn(t,this.array)),t}setY(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Yn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Yn(t,this.array)),t}setW(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),i=vt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),i=vt(i,this.array),r=vt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Kc&&(e.usage=this.usage),e}}class mm extends Rt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class gm extends Rt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Et extends Rt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let zx=0;const Un=new Xe,ac=new gt,Ys=new D,Tn=new zt,io=new zt,tn=new D;class sn extends Cs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zx++}),this.uuid=Kn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(um(e)?gm:mm)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new it().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Un.makeRotationFromQuaternion(e),this.applyMatrix4(Un),this}rotateX(e){return Un.makeRotationX(e),this.applyMatrix4(Un),this}rotateY(e){return Un.makeRotationY(e),this.applyMatrix4(Un),this}rotateZ(e){return Un.makeRotationZ(e),this.applyMatrix4(Un),this}translate(e,t,n){return Un.makeTranslation(e,t,n),this.applyMatrix4(Un),this}scale(e,t,n){return Un.makeScale(e,t,n),this.applyMatrix4(Un),this}lookAt(e){return ac.lookAt(e),ac.updateMatrix(),this.applyMatrix4(ac.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ys).negate(),this.translate(Ys.x,Ys.y,Ys.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Et(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Tn.setFromBufferAttribute(r),this.morphTargetsRelative?(tn.addVectors(this.boundingBox.min,Tn.min),this.boundingBox.expandByPoint(tn),tn.addVectors(this.boundingBox.max,Tn.max),this.boundingBox.expandByPoint(tn)):(this.boundingBox.expandByPoint(Tn.min),this.boundingBox.expandByPoint(Tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new D,1/0);return}if(e){const n=this.boundingSphere.center;if(Tn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];io.setFromBufferAttribute(l),this.morphTargetsRelative?(tn.addVectors(Tn.min,io.min),Tn.expandByPoint(tn),tn.addVectors(Tn.max,io.max),Tn.expandByPoint(tn)):(Tn.expandByPoint(io.min),Tn.expandByPoint(io.max))}Tn.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)tn.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(tn));if(t)for(let r=0,o=t.length;r<o;r++){const l=t[r],c=this.morphTargetsRelative;for(let u=0,d=l.count;u<d;u++)tn.fromBufferAttribute(l,u),c&&(Ys.fromBufferAttribute(e,u),tn.add(Ys)),i=Math.max(i,n.distanceToSquared(tn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,o=t.uv.array,l=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Rt(new Float32Array(4*l),4));const c=this.getAttribute("tangent").array,u=[],d=[];for(let E=0;E<l;E++)u[E]=new D,d[E]=new D;const f=new D,m=new D,g=new D,b=new Re,w=new Re,x=new Re,v=new D,M=new D;function y(E,R,k){f.fromArray(i,E*3),m.fromArray(i,R*3),g.fromArray(i,k*3),b.fromArray(o,E*2),w.fromArray(o,R*2),x.fromArray(o,k*2),m.sub(f),g.sub(f),w.sub(b),x.sub(b);const W=1/(w.x*x.y-x.x*w.y);!isFinite(W)||(v.copy(m).multiplyScalar(x.y).addScaledVector(g,-w.y).multiplyScalar(W),M.copy(g).multiplyScalar(w.x).addScaledVector(m,-x.x).multiplyScalar(W),u[E].add(v),u[R].add(v),u[k].add(v),d[E].add(M),d[R].add(M),d[k].add(M))}let S=this.groups;S.length===0&&(S=[{start:0,count:n.length}]);for(let E=0,R=S.length;E<R;++E){const k=S[E],W=k.start,U=k.count;for(let H=W,G=W+U;H<G;H+=3)y(n[H+0],n[H+1],n[H+2])}const C=new D,P=new D,T=new D,I=new D;function B(E){T.fromArray(r,E*3),I.copy(T);const R=u[E];C.copy(R),C.sub(T.multiplyScalar(T.dot(R))).normalize(),P.crossVectors(I,R);const W=P.dot(d[E])<0?-1:1;c[E*4]=C.x,c[E*4+1]=C.y,c[E*4+2]=C.z,c[E*4+3]=W}for(let E=0,R=S.length;E<R;++E){const k=S[E],W=k.start,U=k.count;for(let H=W,G=W+U;H<G;H+=3)B(n[H+0]),B(n[H+1]),B(n[H+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Rt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let m=0,g=n.count;m<g;m++)n.setXYZ(m,0,0,0);const i=new D,r=new D,o=new D,l=new D,c=new D,u=new D,d=new D,f=new D;if(e)for(let m=0,g=e.count;m<g;m+=3){const b=e.getX(m+0),w=e.getX(m+1),x=e.getX(m+2);i.fromBufferAttribute(t,b),r.fromBufferAttribute(t,w),o.fromBufferAttribute(t,x),d.subVectors(o,r),f.subVectors(i,r),d.cross(f),l.fromBufferAttribute(n,b),c.fromBufferAttribute(n,w),u.fromBufferAttribute(n,x),l.add(d),c.add(d),u.add(d),n.setXYZ(b,l.x,l.y,l.z),n.setXYZ(w,c.x,c.y,c.z),n.setXYZ(x,u.x,u.y,u.z)}else for(let m=0,g=t.count;m<g;m+=3)i.fromBufferAttribute(t,m+0),r.fromBufferAttribute(t,m+1),o.fromBufferAttribute(t,m+2),d.subVectors(o,r),f.subVectors(i,r),d.cross(f),n.setXYZ(m+0,d.x,d.y,d.z),n.setXYZ(m+1,d.x,d.y,d.z),n.setXYZ(m+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)tn.fromBufferAttribute(e,t),tn.normalize(),e.setXYZ(t,tn.x,tn.y,tn.z)}toNonIndexed(){function e(l,c){const u=l.array,d=l.itemSize,f=l.normalized,m=new u.constructor(c.length*d);let g=0,b=0;for(let w=0,x=c.length;w<x;w++){l.isInterleavedBufferAttribute?g=c[w]*l.data.stride+l.offset:g=c[w]*d;for(let v=0;v<d;v++)m[b++]=u[g++]}return new Rt(m,d,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new sn,n=this.index.array,i=this.attributes;for(const l in i){const c=i[l],u=e(c,n);t.setAttribute(l,u)}const r=this.morphAttributes;for(const l in r){const c=[],u=r[l];for(let d=0,f=u.length;d<f;d++){const m=u[d],g=e(m,n);c.push(g)}t.morphAttributes[l]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let l=0,c=o.length;l<c;l++){const u=o[l];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const u in c)c[u]!==void 0&&(e[u]=c[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const u=n[c];e.data.attributes[c]=u.toJSON(e.data)}const i={};let r=!1;for(const c in this.morphAttributes){const u=this.morphAttributes[c],d=[];for(let f=0,m=u.length;f<m;f++){const g=u[f];d.push(g.toJSON(e.data))}d.length>0&&(i[c]=d,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const l=this.boundingSphere;return l!==null&&(e.data.boundingSphere={center:l.center.toArray(),radius:l.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const u in i){const d=i[u];this.setAttribute(u,d.clone(t))}const r=e.morphAttributes;for(const u in r){const d=[],f=r[u];for(let m=0,g=f.length;m<g;m++)d.push(f[m].clone(t));this.morphAttributes[u]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,d=o.length;u<d;u++){const f=o[u];this.addGroup(f.start,f.count,f.materialIndex)}const l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Kd=new Xe,cs=new Ir,ia=new Qn,$d=new D,Ks=new D,$s=new D,Zs=new D,lc=new D,sa=new D,ra=new Re,oa=new Re,aa=new Re,Zd=new D,Qd=new D,Jd=new D,la=new D,ca=new D;class fe extends gt{constructor(e=new sn,t=new si){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const l=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const l=this.morphTargetInfluences;if(r&&l){sa.set(0,0,0);for(let c=0,u=r.length;c<u;c++){const d=l[c],f=r[c];d!==0&&(lc.fromBufferAttribute(f,e),o?sa.addScaledVector(lc,d):sa.addScaledVector(lc.sub(t),d))}t.add(sa)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ia.copy(n.boundingSphere),ia.applyMatrix4(r),cs.copy(e.ray).recast(e.near),!(ia.containsPoint(cs.origin)===!1&&(cs.intersectSphere(ia,$d)===null||cs.origin.distanceToSquared($d)>(e.far-e.near)**2))&&(Kd.copy(r).invert(),cs.copy(e.ray).applyMatrix4(Kd),!(n.boundingBox!==null&&cs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,cs)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,l=r.index,c=r.attributes.position,u=r.attributes.uv,d=r.attributes.uv1,f=r.attributes.normal,m=r.groups,g=r.drawRange;if(l!==null)if(Array.isArray(o))for(let b=0,w=m.length;b<w;b++){const x=m[b],v=o[x.materialIndex],M=Math.max(x.start,g.start),y=Math.min(l.count,Math.min(x.start+x.count,g.start+g.count));for(let S=M,C=y;S<C;S+=3){const P=l.getX(S),T=l.getX(S+1),I=l.getX(S+2);i=ua(this,v,e,n,u,d,f,P,T,I),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=x.materialIndex,t.push(i))}}else{const b=Math.max(0,g.start),w=Math.min(l.count,g.start+g.count);for(let x=b,v=w;x<v;x+=3){const M=l.getX(x),y=l.getX(x+1),S=l.getX(x+2);i=ua(this,o,e,n,u,d,f,M,y,S),i&&(i.faceIndex=Math.floor(x/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let b=0,w=m.length;b<w;b++){const x=m[b],v=o[x.materialIndex],M=Math.max(x.start,g.start),y=Math.min(c.count,Math.min(x.start+x.count,g.start+g.count));for(let S=M,C=y;S<C;S+=3){const P=S,T=S+1,I=S+2;i=ua(this,v,e,n,u,d,f,P,T,I),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=x.materialIndex,t.push(i))}}else{const b=Math.max(0,g.start),w=Math.min(c.count,g.start+g.count);for(let x=b,v=w;x<v;x+=3){const M=x,y=x+1,S=x+2;i=ua(this,o,e,n,u,d,f,M,y,S),i&&(i.faceIndex=Math.floor(x/3),t.push(i))}}}}function Hx(s,e,t,n,i,r,o,l){let c;if(e.side===bn?c=n.intersectTriangle(o,r,i,!0,l):c=n.intersectTriangle(i,r,o,e.side===$n,l),c===null)return null;ca.copy(l),ca.applyMatrix4(s.matrixWorld);const u=t.ray.origin.distanceTo(ca);return u<t.near||u>t.far?null:{distance:u,point:ca.clone(),object:s}}function ua(s,e,t,n,i,r,o,l,c,u){s.getVertexPosition(l,Ks),s.getVertexPosition(c,$s),s.getVertexPosition(u,Zs);const d=Hx(s,e,t,n,Ks,$s,Zs,la);if(d){i&&(ra.fromBufferAttribute(i,l),oa.fromBufferAttribute(i,c),aa.fromBufferAttribute(i,u),d.uv=vn.getInterpolation(la,Ks,$s,Zs,ra,oa,aa,new Re)),r&&(ra.fromBufferAttribute(r,l),oa.fromBufferAttribute(r,c),aa.fromBufferAttribute(r,u),d.uv1=vn.getInterpolation(la,Ks,$s,Zs,ra,oa,aa,new Re),d.uv2=d.uv1),o&&(Zd.fromBufferAttribute(o,l),Qd.fromBufferAttribute(o,c),Jd.fromBufferAttribute(o,u),d.normal=vn.getInterpolation(la,Ks,$s,Zs,Zd,Qd,Jd,new D),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const f={a:l,b:c,c:u,normal:new D,materialIndex:0};vn.getNormal(Ks,$s,Zs,f.normal),d.face=f}return d}class wt extends sn{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const l=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const c=[],u=[],d=[],f=[];let m=0,g=0;b("z","y","x",-1,-1,n,t,e,o,r,0),b("z","y","x",1,-1,n,t,-e,o,r,1),b("x","z","y",1,1,e,n,t,i,o,2),b("x","z","y",1,-1,e,n,-t,i,o,3),b("x","y","z",1,-1,e,t,n,i,r,4),b("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new Et(u,3)),this.setAttribute("normal",new Et(d,3)),this.setAttribute("uv",new Et(f,2));function b(w,x,v,M,y,S,C,P,T,I,B){const E=S/T,R=C/I,k=S/2,W=C/2,U=P/2,H=T+1,G=I+1;let X=0,Q=0;const K=new D;for(let ie=0;ie<G;ie++){const ne=ie*R-W;for(let me=0;me<H;me++){const he=me*E-k;K[w]=he*M,K[x]=ne*y,K[v]=U,u.push(K.x,K.y,K.z),K[w]=0,K[x]=0,K[v]=P>0?1:-1,d.push(K.x,K.y,K.z),f.push(me/T),f.push(1-ie/I),X+=1}}for(let ie=0;ie<I;ie++)for(let ne=0;ne<T;ne++){const me=m+ne+H*ie,he=m+ne+H*(ie+1),q=m+(ne+1)+H*(ie+1),se=m+(ne+1)+H*ie;c.push(me,he,se),c.push(he,q,se),Q+=6}l.addGroup(g,Q,B),g+=Q,m+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Pr(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function fn(s){const e={};for(let t=0;t<s.length;t++){const n=Pr(s[t]);for(const i in n)e[i]=n[i]}return e}function Gx(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function vm(s){return s.getRenderTarget()===null?s.outputColorSpace:mt.workingColorSpace}const Wx={clone:Pr,merge:fn};var Xx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,jx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Zt extends oi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Xx,this.fragmentShader=jx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Pr(e.uniforms),this.uniformsGroups=Gx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class _m extends gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xe,this.projectionMatrix=new Xe,this.projectionMatrixInverse=new Xe,this.coordinateSystem=Ti}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Gi=new D,ep=new Re,tp=new Re;class mn extends _m{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Cr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Eo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Cr*2*Math.atan(Math.tan(Eo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Gi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Gi.x,Gi.y).multiplyScalar(-e/Gi.z),Gi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Gi.x,Gi.y).multiplyScalar(-e/Gi.z)}getViewSize(e,t){return this.getViewBounds(e,ep,tp),t.subVectors(tp,ep)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Eo*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,u=o.fullHeight;r+=o.offsetX*i/c,t-=o.offsetY*n/u,i*=o.width/c,n*=o.height/u}const l=this.filmOffset;l!==0&&(r+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Qs=-90,Js=1;class qx extends gt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new mn(Qs,Js,e,t);i.layers=this.layers,this.add(i);const r=new mn(Qs,Js,e,t);r.layers=this.layers,this.add(r);const o=new mn(Qs,Js,e,t);o.layers=this.layers,this.add(o);const l=new mn(Qs,Js,e,t);l.layers=this.layers,this.add(l);const c=new mn(Qs,Js,e,t);c.layers=this.layers,this.add(c);const u=new mn(Qs,Js,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,l,c]=t;for(const u of t)this.remove(u);if(e===Ti)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Qa)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,l,c,u,d]=this.children,f=e.getRenderTarget(),m=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const w=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,l),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,u),n.texture.generateMipmaps=w,e.setRenderTarget(n,5,i),e.render(t,d),e.setRenderTarget(f,m,g),e.xr.enabled=b,n.texture.needsPMREMUpdate=!0}}class xm extends qt{constructor(e,t,n,i,r,o,l,c,u,d){e=e!==void 0?e:[],t=t!==void 0?t:Mr,super(e,t,n,i,r,o,l,c,u,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Yx extends En{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(Es("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Ms?Ot:On),this.texture=new xm(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:xt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new wt(5,5,5),r=new Zt({name:"CubemapFromEquirect",uniforms:Pr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:bn,blending:Vn});r.uniforms.tEquirect.value=t;const o=new fe(i,r),l=t.minFilter;return t.minFilter===Si&&(t.minFilter=xt),new qx(1,10,this).update(e,o),t.minFilter=l,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}const cc=new D,Kx=new D,$x=new it;class ni{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=cc.subVectors(n,t).cross(Kx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(cc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||$x.getNormalMatrix(e),i=this.coplanarPoint(cc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const us=new Qn,ha=new D;class Au{constructor(e=new ni,t=new ni,n=new ni,i=new ni,r=new ni,o=new ni){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(n),l[3].copy(i),l[4].copy(r),l[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ti){const n=this.planes,i=e.elements,r=i[0],o=i[1],l=i[2],c=i[3],u=i[4],d=i[5],f=i[6],m=i[7],g=i[8],b=i[9],w=i[10],x=i[11],v=i[12],M=i[13],y=i[14],S=i[15];if(n[0].setComponents(c-r,m-u,x-g,S-v).normalize(),n[1].setComponents(c+r,m+u,x+g,S+v).normalize(),n[2].setComponents(c+o,m+d,x+b,S+M).normalize(),n[3].setComponents(c-o,m-d,x-b,S-M).normalize(),n[4].setComponents(c-l,m-f,x-w,S-y).normalize(),t===Ti)n[5].setComponents(c+l,m+f,x+w,S+y).normalize();else if(t===Qa)n[5].setComponents(l,f,w,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),us.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),us.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(us)}intersectsSprite(e){return us.center.set(0,0,0),us.radius=.7071067811865476,us.applyMatrix4(e.matrixWorld),this.intersectsSphere(us)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(ha.x=i.normal.x>0?e.max.x:e.min.x,ha.y=i.normal.y>0?e.max.y:e.min.y,ha.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ha)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function bm(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Zx(s,e){const t=e.isWebGL2,n=new WeakMap;function i(u,d){const f=u.array,m=u.usage,g=f.byteLength,b=s.createBuffer();s.bindBuffer(d,b),s.bufferData(d,f,m),u.onUploadCallback();let w;if(f instanceof Float32Array)w=s.FLOAT;else if(f instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(t)w=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else w=s.UNSIGNED_SHORT;else if(f instanceof Int16Array)w=s.SHORT;else if(f instanceof Uint32Array)w=s.UNSIGNED_INT;else if(f instanceof Int32Array)w=s.INT;else if(f instanceof Int8Array)w=s.BYTE;else if(f instanceof Uint8Array)w=s.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)w=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:b,type:w,bytesPerElement:f.BYTES_PER_ELEMENT,version:u.version,size:g}}function r(u,d,f){const m=d.array,g=d._updateRange,b=d.updateRanges;if(s.bindBuffer(f,u),g.count===-1&&b.length===0&&s.bufferSubData(f,0,m),b.length!==0){for(let w=0,x=b.length;w<x;w++){const v=b[w];t?s.bufferSubData(f,v.start*m.BYTES_PER_ELEMENT,m,v.start,v.count):s.bufferSubData(f,v.start*m.BYTES_PER_ELEMENT,m.subarray(v.start,v.start+v.count))}d.clearUpdateRanges()}g.count!==-1&&(t?s.bufferSubData(f,g.offset*m.BYTES_PER_ELEMENT,m,g.offset,g.count):s.bufferSubData(f,g.offset*m.BYTES_PER_ELEMENT,m.subarray(g.offset,g.offset+g.count)),g.count=-1),d.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),n.get(u)}function l(u){u.isInterleavedBufferAttribute&&(u=u.data);const d=n.get(u);d&&(s.deleteBuffer(d.buffer),n.delete(u))}function c(u,d){if(u.isGLBufferAttribute){const m=n.get(u);(!m||m.version<u.version)&&n.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const f=n.get(u);if(f===void 0)n.set(u,i(u,d));else if(f.version<u.version){if(f.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(f.buffer,u,d),f.version=u.version}}return{get:o,remove:l,update:c}}class Ln extends sn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,l=Math.floor(n),c=Math.floor(i),u=l+1,d=c+1,f=e/l,m=t/c,g=[],b=[],w=[],x=[];for(let v=0;v<d;v++){const M=v*m-o;for(let y=0;y<u;y++){const S=y*f-r;b.push(S,-M,0),w.push(0,0,1),x.push(y/l),x.push(1-v/c)}}for(let v=0;v<c;v++)for(let M=0;M<l;M++){const y=M+u*v,S=M+u*(v+1),C=M+1+u*(v+1),P=M+1+u*v;g.push(y,S,P),g.push(S,C,P)}this.setIndex(g),this.setAttribute("position",new Et(b,3)),this.setAttribute("normal",new Et(w,3)),this.setAttribute("uv",new Et(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ln(e.width,e.height,e.widthSegments,e.heightSegments)}}var Qx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Jx=`#ifdef USE_ALPHAHASH
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
#endif`,eb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,tb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ib=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sb=`#ifdef USE_AOMAP
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
#endif`,rb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ob=`#ifdef USE_BATCHING
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
#endif`,ab=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,lb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ub=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,hb=`#ifdef USE_IRIDESCENCE
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
#endif`,db=`#ifdef USE_BUMPMAP
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
#endif`,pb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,fb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,_b=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,xb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,bb=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,yb=`#define PI 3.141592653589793
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
} // validated`,wb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Mb=`vec3 transformedNormal = objectNormal;
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
#endif`,Eb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Sb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Tb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ab=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Cb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Pb=`
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
}`,Rb=`#ifdef USE_ENVMAP
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
#endif`,Lb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ib=`#ifdef USE_ENVMAP
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
#endif`,Db=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Nb=`#ifdef USE_ENVMAP
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
#endif`,Ub=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Fb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ob=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Bb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,kb=`#ifdef USE_GRADIENTMAP
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
}`,Vb=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,zb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Hb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Gb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Wb=`uniform bool receiveShadow;
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
#endif`,Xb=`#ifdef USE_ENVMAP
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
#endif`,jb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Yb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Kb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$b=`PhysicalMaterial material;
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
#endif`,Zb=`struct PhysicalMaterial {
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
}`,Qb=`
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
#endif`,Jb=`#if defined( RE_IndirectDiffuse )
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
#endif`,ey=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ty=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ny=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,iy=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,sy=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,ry=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,oy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ay=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ly=`#if defined( USE_POINTS_UV )
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
#endif`,cy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,uy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hy=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,dy=`#ifdef USE_MORPHNORMALS
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
#endif`,py=`#ifdef USE_MORPHTARGETS
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
#endif`,fy=`#ifdef USE_MORPHTARGETS
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
#endif`,my=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,gy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,vy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_y=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,by=`#ifdef USE_NORMALMAP
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
#endif`,yy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,My=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ey=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Sy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ty=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ay=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Cy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Py=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ry=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ly=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Iy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Dy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ny=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Uy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Fy=`float getShadowMask() {
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
}`,Oy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,By=`#ifdef USE_SKINNING
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
#endif`,ky=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Vy=`#ifdef USE_SKINNING
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
#endif`,zy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Hy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Gy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Wy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Xy=`#ifdef USE_TRANSMISSION
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
#endif`,jy=`#ifdef USE_TRANSMISSION
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
#endif`,qy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ky=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$y=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Zy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Qy=`uniform sampler2D t2D;
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
}`,Jy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ew=`#ifdef ENVMAP_TYPE_CUBE
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
}`,tw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iw=`#include <common>
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
}`,sw=`#if DEPTH_PACKING == 3200
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
}`,rw=`#define DISTANCE
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
}`,ow=`#define DISTANCE
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
}`,aw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,lw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cw=`uniform float scale;
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
}`,uw=`uniform vec3 diffuse;
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
}`,hw=`#include <common>
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
}`,dw=`uniform vec3 diffuse;
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
}`,pw=`#define LAMBERT
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
}`,fw=`#define LAMBERT
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
}`,mw=`#define MATCAP
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
}`,gw=`#define MATCAP
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
}`,vw=`#define NORMAL
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
}`,_w=`#define NORMAL
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
}`,xw=`#define PHONG
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
}`,bw=`#define PHONG
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
}`,yw=`#define STANDARD
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
}`,ww=`#define STANDARD
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
}`,Mw=`#define TOON
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
}`,Ew=`#define TOON
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
}`,Sw=`uniform float size;
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
}`,Tw=`uniform vec3 diffuse;
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
}`,Aw=`#include <common>
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
}`,Cw=`uniform vec3 color;
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
}`,Pw=`uniform float rotation;
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
}`,Rw=`uniform vec3 diffuse;
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
}`,et={alphahash_fragment:Qx,alphahash_pars_fragment:Jx,alphamap_fragment:eb,alphamap_pars_fragment:tb,alphatest_fragment:nb,alphatest_pars_fragment:ib,aomap_fragment:sb,aomap_pars_fragment:rb,batching_pars_vertex:ob,batching_vertex:ab,begin_vertex:lb,beginnormal_vertex:cb,bsdfs:ub,iridescence_fragment:hb,bumpmap_pars_fragment:db,clipping_planes_fragment:pb,clipping_planes_pars_fragment:fb,clipping_planes_pars_vertex:mb,clipping_planes_vertex:gb,color_fragment:vb,color_pars_fragment:_b,color_pars_vertex:xb,color_vertex:bb,common:yb,cube_uv_reflection_fragment:wb,defaultnormal_vertex:Mb,displacementmap_pars_vertex:Eb,displacementmap_vertex:Sb,emissivemap_fragment:Tb,emissivemap_pars_fragment:Ab,colorspace_fragment:Cb,colorspace_pars_fragment:Pb,envmap_fragment:Rb,envmap_common_pars_fragment:Lb,envmap_pars_fragment:Ib,envmap_pars_vertex:Db,envmap_physical_pars_fragment:Xb,envmap_vertex:Nb,fog_vertex:Ub,fog_pars_vertex:Fb,fog_fragment:Ob,fog_pars_fragment:Bb,gradientmap_pars_fragment:kb,lightmap_fragment:Vb,lightmap_pars_fragment:zb,lights_lambert_fragment:Hb,lights_lambert_pars_fragment:Gb,lights_pars_begin:Wb,lights_toon_fragment:jb,lights_toon_pars_fragment:qb,lights_phong_fragment:Yb,lights_phong_pars_fragment:Kb,lights_physical_fragment:$b,lights_physical_pars_fragment:Zb,lights_fragment_begin:Qb,lights_fragment_maps:Jb,lights_fragment_end:ey,logdepthbuf_fragment:ty,logdepthbuf_pars_fragment:ny,logdepthbuf_pars_vertex:iy,logdepthbuf_vertex:sy,map_fragment:ry,map_pars_fragment:oy,map_particle_fragment:ay,map_particle_pars_fragment:ly,metalnessmap_fragment:cy,metalnessmap_pars_fragment:uy,morphcolor_vertex:hy,morphnormal_vertex:dy,morphtarget_pars_vertex:py,morphtarget_vertex:fy,normal_fragment_begin:my,normal_fragment_maps:gy,normal_pars_fragment:vy,normal_pars_vertex:_y,normal_vertex:xy,normalmap_pars_fragment:by,clearcoat_normal_fragment_begin:yy,clearcoat_normal_fragment_maps:wy,clearcoat_pars_fragment:My,iridescence_pars_fragment:Ey,opaque_fragment:Sy,packing:Ty,premultiplied_alpha_fragment:Ay,project_vertex:Cy,dithering_fragment:Py,dithering_pars_fragment:Ry,roughnessmap_fragment:Ly,roughnessmap_pars_fragment:Iy,shadowmap_pars_fragment:Dy,shadowmap_pars_vertex:Ny,shadowmap_vertex:Uy,shadowmask_pars_fragment:Fy,skinbase_vertex:Oy,skinning_pars_vertex:By,skinning_vertex:ky,skinnormal_vertex:Vy,specularmap_fragment:zy,specularmap_pars_fragment:Hy,tonemapping_fragment:Gy,tonemapping_pars_fragment:Wy,transmission_fragment:Xy,transmission_pars_fragment:jy,uv_pars_fragment:qy,uv_pars_vertex:Yy,uv_vertex:Ky,worldpos_vertex:$y,background_vert:Zy,background_frag:Qy,backgroundCube_vert:Jy,backgroundCube_frag:ew,cube_vert:tw,cube_frag:nw,depth_vert:iw,depth_frag:sw,distanceRGBA_vert:rw,distanceRGBA_frag:ow,equirect_vert:aw,equirect_frag:lw,linedashed_vert:cw,linedashed_frag:uw,meshbasic_vert:hw,meshbasic_frag:dw,meshlambert_vert:pw,meshlambert_frag:fw,meshmatcap_vert:mw,meshmatcap_frag:gw,meshnormal_vert:vw,meshnormal_frag:_w,meshphong_vert:xw,meshphong_frag:bw,meshphysical_vert:yw,meshphysical_frag:ww,meshtoon_vert:Mw,meshtoon_frag:Ew,points_vert:Sw,points_frag:Tw,shadow_vert:Aw,shadow_frag:Cw,sprite_vert:Pw,sprite_frag:Rw},ge={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new it}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new it}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new it}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new it},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new it},normalScale:{value:new Re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new it},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new it}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new it}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new it}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0},uvTransform:{value:new it}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new Re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}}},ii={basic:{uniforms:fn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:fn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Ge(0)}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:fn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:fn([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:fn([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new Ge(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:fn([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:fn([ge.points,ge.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:fn([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:fn([ge.common,ge.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:fn([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:fn([ge.sprite,ge.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new it},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:et.background_vert,fragmentShader:et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:et.backgroundCube_vert,fragmentShader:et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distanceRGBA:{uniforms:fn([ge.common,ge.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distanceRGBA_vert,fragmentShader:et.distanceRGBA_frag},shadow:{uniforms:fn([ge.lights,ge.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};ii.physical={uniforms:fn([ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new it},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new it},clearcoatNormalScale:{value:new Re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new it},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new it},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new it},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new it},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new it},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new it},transmissionSamplerSize:{value:new Re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new it},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new it},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new it},anisotropyVector:{value:new Re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new it}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};const da={r:0,b:0,g:0};function Lw(s,e,t,n,i,r,o){const l=new Ge(0);let c=r===!0?0:1,u,d,f=null,m=0,g=null;function b(x,v){let M=!1,y=v.isScene===!0?v.background:null;y&&y.isTexture&&(y=(v.backgroundBlurriness>0?t:e).get(y)),y===null?w(l,c):y&&y.isColor&&(w(y,1),M=!0);const S=s.xr.getEnvironmentBlendMode();S==="additive"?n.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||M)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),y&&(y.isCubeTexture||y.mapping===nl)?(d===void 0&&(d=new fe(new wt(1,1,1),new Zt({name:"BackgroundCubeMaterial",uniforms:Pr(ii.backgroundCube.uniforms),vertexShader:ii.backgroundCube.vertexShader,fragmentShader:ii.backgroundCube.fragmentShader,side:bn,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(C,P,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(d)),d.material.uniforms.envMap.value=y,d.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,d.material.toneMapped=mt.getTransfer(y.colorSpace)!==Ct,(f!==y||m!==y.version||g!==s.toneMapping)&&(d.material.needsUpdate=!0,f=y,m=y.version,g=s.toneMapping),d.layers.enableAll(),x.unshift(d,d.geometry,d.material,0,0,null)):y&&y.isTexture&&(u===void 0&&(u=new fe(new Ln(2,2),new Zt({name:"BackgroundMaterial",uniforms:Pr(ii.background.uniforms),vertexShader:ii.background.vertexShader,fragmentShader:ii.background.fragmentShader,side:$n,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(u)),u.material.uniforms.t2D.value=y,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.toneMapped=mt.getTransfer(y.colorSpace)!==Ct,y.matrixAutoUpdate===!0&&y.updateMatrix(),u.material.uniforms.uvTransform.value.copy(y.matrix),(f!==y||m!==y.version||g!==s.toneMapping)&&(u.material.needsUpdate=!0,f=y,m=y.version,g=s.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null))}function w(x,v){x.getRGB(da,vm(s)),n.buffers.color.setClear(da.r,da.g,da.b,v,o)}return{getClearColor:function(){return l},setClearColor:function(x,v=1){l.set(x),c=v,w(l,c)},getClearAlpha:function(){return c},setClearAlpha:function(x){c=x,w(l,c)},render:b}}function Iw(s,e,t,n){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,l={},c=x(null);let u=c,d=!1;function f(U,H,G,X,Q){let K=!1;if(o){const ie=w(X,G,H);u!==ie&&(u=ie,g(u.object)),K=v(U,X,G,Q),K&&M(U,X,G,Q)}else{const ie=H.wireframe===!0;(u.geometry!==X.id||u.program!==G.id||u.wireframe!==ie)&&(u.geometry=X.id,u.program=G.id,u.wireframe=ie,K=!0)}Q!==null&&t.update(Q,s.ELEMENT_ARRAY_BUFFER),(K||d)&&(d=!1,I(U,H,G,X),Q!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(Q).buffer))}function m(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function g(U){return n.isWebGL2?s.bindVertexArray(U):r.bindVertexArrayOES(U)}function b(U){return n.isWebGL2?s.deleteVertexArray(U):r.deleteVertexArrayOES(U)}function w(U,H,G){const X=G.wireframe===!0;let Q=l[U.id];Q===void 0&&(Q={},l[U.id]=Q);let K=Q[H.id];K===void 0&&(K={},Q[H.id]=K);let ie=K[X];return ie===void 0&&(ie=x(m()),K[X]=ie),ie}function x(U){const H=[],G=[],X=[];for(let Q=0;Q<i;Q++)H[Q]=0,G[Q]=0,X[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:G,attributeDivisors:X,object:U,attributes:{},index:null}}function v(U,H,G,X){const Q=u.attributes,K=H.attributes;let ie=0;const ne=G.getAttributes();for(const me in ne)if(ne[me].location>=0){const q=Q[me];let se=K[me];if(se===void 0&&(me==="instanceMatrix"&&U.instanceMatrix&&(se=U.instanceMatrix),me==="instanceColor"&&U.instanceColor&&(se=U.instanceColor)),q===void 0||q.attribute!==se||se&&q.data!==se.data)return!0;ie++}return u.attributesNum!==ie||u.index!==X}function M(U,H,G,X){const Q={},K=H.attributes;let ie=0;const ne=G.getAttributes();for(const me in ne)if(ne[me].location>=0){let q=K[me];q===void 0&&(me==="instanceMatrix"&&U.instanceMatrix&&(q=U.instanceMatrix),me==="instanceColor"&&U.instanceColor&&(q=U.instanceColor));const se={};se.attribute=q,q&&q.data&&(se.data=q.data),Q[me]=se,ie++}u.attributes=Q,u.attributesNum=ie,u.index=X}function y(){const U=u.newAttributes;for(let H=0,G=U.length;H<G;H++)U[H]=0}function S(U){C(U,0)}function C(U,H){const G=u.newAttributes,X=u.enabledAttributes,Q=u.attributeDivisors;G[U]=1,X[U]===0&&(s.enableVertexAttribArray(U),X[U]=1),Q[U]!==H&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](U,H),Q[U]=H)}function P(){const U=u.newAttributes,H=u.enabledAttributes;for(let G=0,X=H.length;G<X;G++)H[G]!==U[G]&&(s.disableVertexAttribArray(G),H[G]=0)}function T(U,H,G,X,Q,K,ie){ie===!0?s.vertexAttribIPointer(U,H,G,Q,K):s.vertexAttribPointer(U,H,G,X,Q,K)}function I(U,H,G,X){if(n.isWebGL2===!1&&(U.isInstancedMesh||X.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();const Q=X.attributes,K=G.getAttributes(),ie=H.defaultAttributeValues;for(const ne in K){const me=K[ne];if(me.location>=0){let he=Q[ne];if(he===void 0&&(ne==="instanceMatrix"&&U.instanceMatrix&&(he=U.instanceMatrix),ne==="instanceColor"&&U.instanceColor&&(he=U.instanceColor)),he!==void 0){const q=he.normalized,se=he.itemSize,_e=t.get(he);if(_e===void 0)continue;const ye=_e.buffer,Te=_e.type,ve=_e.bytesPerElement,Ue=n.isWebGL2===!0&&(Te===s.INT||Te===s.UNSIGNED_INT||he.gpuType===Mo);if(he.isInterleavedBufferAttribute){const Ne=he.data,j=Ne.stride,St=he.offset;if(Ne.isInstancedInterleavedBuffer){for(let Ce=0;Ce<me.locationSize;Ce++)C(me.location+Ce,Ne.meshPerAttribute);U.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=Ne.meshPerAttribute*Ne.count)}else for(let Ce=0;Ce<me.locationSize;Ce++)S(me.location+Ce);s.bindBuffer(s.ARRAY_BUFFER,ye);for(let Ce=0;Ce<me.locationSize;Ce++)T(me.location+Ce,se/me.locationSize,Te,q,j*ve,(St+se/me.locationSize*Ce)*ve,Ue)}else{if(he.isInstancedBufferAttribute){for(let Ne=0;Ne<me.locationSize;Ne++)C(me.location+Ne,he.meshPerAttribute);U.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let Ne=0;Ne<me.locationSize;Ne++)S(me.location+Ne);s.bindBuffer(s.ARRAY_BUFFER,ye);for(let Ne=0;Ne<me.locationSize;Ne++)T(me.location+Ne,se/me.locationSize,Te,q,se*ve,se/me.locationSize*Ne*ve,Ue)}}else if(ie!==void 0){const q=ie[ne];if(q!==void 0)switch(q.length){case 2:s.vertexAttrib2fv(me.location,q);break;case 3:s.vertexAttrib3fv(me.location,q);break;case 4:s.vertexAttrib4fv(me.location,q);break;default:s.vertexAttrib1fv(me.location,q)}}}}P()}function B(){k();for(const U in l){const H=l[U];for(const G in H){const X=H[G];for(const Q in X)b(X[Q].object),delete X[Q];delete H[G]}delete l[U]}}function E(U){if(l[U.id]===void 0)return;const H=l[U.id];for(const G in H){const X=H[G];for(const Q in X)b(X[Q].object),delete X[Q];delete H[G]}delete l[U.id]}function R(U){for(const H in l){const G=l[H];if(G[U.id]===void 0)continue;const X=G[U.id];for(const Q in X)b(X[Q].object),delete X[Q];delete G[U.id]}}function k(){W(),d=!0,u!==c&&(u=c,g(u.object))}function W(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:f,reset:k,resetDefaultState:W,dispose:B,releaseStatesOfGeometry:E,releaseStatesOfProgram:R,initAttributes:y,enableAttribute:S,disableUnusedAttributes:P}}function Dw(s,e,t,n){const i=n.isWebGL2;let r;function o(d){r=d}function l(d,f){s.drawArrays(r,d,f),t.update(f,r,1)}function c(d,f,m){if(m===0)return;let g,b;if(i)g=s,b="drawArraysInstanced";else if(g=e.get("ANGLE_instanced_arrays"),b="drawArraysInstancedANGLE",g===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[b](r,d,f,m),t.update(f,r,m)}function u(d,f,m){if(m===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let b=0;b<m;b++)this.render(d[b],f[b]);else{g.multiDrawArraysWEBGL(r,d,0,f,0,m);let b=0;for(let w=0;w<m;w++)b+=f[w];t.update(b,r,1)}}this.setMode=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function Nw(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(T){if(T==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext!="undefined"&&s.constructor.name==="WebGL2RenderingContext";let l=t.precision!==void 0?t.precision:"highp";const c=r(l);c!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",c,"instead."),l=c);const u=o||e.has("WEBGL_draw_buffers"),d=t.logarithmicDepthBuffer===!0,f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_TEXTURE_SIZE),b=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),w=s.getParameter(s.MAX_VERTEX_ATTRIBS),x=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),v=s.getParameter(s.MAX_VARYING_VECTORS),M=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),y=m>0,S=o||e.has("OES_texture_float"),C=y&&S,P=o?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:i,getMaxPrecision:r,precision:l,logarithmicDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:g,maxCubemapSize:b,maxAttributes:w,maxVertexUniforms:x,maxVaryings:v,maxFragmentUniforms:M,vertexTextures:y,floatFragmentTextures:S,floatVertexTextures:C,maxSamples:P}}function Uw(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new ni,l=new it,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,m){const g=f.length!==0||m||n!==0||i;return i=m,n=f.length,g},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,m){t=d(f,m,0)},this.setState=function(f,m,g){const b=f.clippingPlanes,w=f.clipIntersection,x=f.clipShadows,v=s.get(f);if(!i||b===null||b.length===0||r&&!x)r?d(null):u();else{const M=r?0:n,y=M*4;let S=v.clippingState||null;c.value=S,S=d(b,m,y,g);for(let C=0;C!==y;++C)S[C]=t[C];v.clippingState=S,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=M}};function u(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(f,m,g,b){const w=f!==null?f.length:0;let x=null;if(w!==0){if(x=c.value,b!==!0||x===null){const v=g+w*4,M=m.matrixWorldInverse;l.getNormalMatrix(M),(x===null||x.length<v)&&(x=new Float32Array(v));for(let y=0,S=g;y!==w;++y,S+=4)o.copy(f[y]).applyMatrix4(M,l),o.normal.toArray(x,S),x[S+3]=o.constant}c.value=x,c.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,x}}function Fw(s){let e=new WeakMap;function t(o,l){return l===Wc?o.mapping=Mr:l===Xc&&(o.mapping=Er),o}function n(o){if(o&&o.isTexture){const l=o.mapping;if(l===Wc||l===Xc)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const u=new Yx(c.height);return u.fromEquirectangularTexture(s,o),e.set(o,u),o.addEventListener("dispose",i),t(u.texture,o.mapping)}else return null}}return o}function i(o){const l=o.target;l.removeEventListener("dispose",i);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Jn extends _m{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,l=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=u*this.view.offsetX,o=r+u*this.view.width,l-=d*this.view.offsetY,c=l-d*this.view.height}this.projectionMatrix.makeOrthographic(r,o,l,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const gr=4,np=[.125,.215,.35,.446,.526,.582],vs=20,uc=new Jn,ip=new Ge;let hc=null,dc=0,pc=0;const ps=(1+Math.sqrt(5))/2,er=1/ps,sp=[new D(1,1,1),new D(-1,1,1),new D(1,1,-1),new D(-1,1,-1),new D(0,ps,er),new D(0,ps,-er),new D(er,0,ps),new D(-er,0,ps),new D(ps,er,0),new D(-ps,er,0)];class rp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){hc=this._renderer.getRenderTarget(),dc=this._renderer.getActiveCubeFace(),pc=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=lp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ap(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(hc,dc,pc),e.scissorTest=!1,pa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Mr||e.mapping===Er?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),hc=this._renderer.getRenderTarget(),dc=this._renderer.getActiveCubeFace(),pc=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:xt,minFilter:xt,generateMipmaps:!1,type:zn,format:Xt,colorSpace:nn,depthBuffer:!1},i=op(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=op(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ow(r)),this._blurMaterial=Bw(r,e,t)}return i}_compileMaterial(e){const t=new fe(this._lodPlanes[0],e);this._renderer.compile(t,uc)}_sceneToCubeUV(e,t,n,i){const l=new mn(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,m=d.toneMapping;d.getClearColor(ip),d.toneMapping=Qi,d.autoClear=!1;const g=new si({name:"PMREM.Background",side:bn,depthWrite:!1,depthTest:!1}),b=new fe(new wt,g);let w=!1;const x=e.background;x?x.isColor&&(g.color.copy(x),e.background=null,w=!0):(g.color.copy(ip),w=!0);for(let v=0;v<6;v++){const M=v%3;M===0?(l.up.set(0,c[v],0),l.lookAt(u[v],0,0)):M===1?(l.up.set(0,0,c[v]),l.lookAt(0,u[v],0)):(l.up.set(0,c[v],0),l.lookAt(0,0,u[v]));const y=this._cubeSize;pa(i,M*y,v>2?y:0,y,y),d.setRenderTarget(i),w&&d.render(b,l),d.render(e,l)}b.geometry.dispose(),b.material.dispose(),d.toneMapping=m,d.autoClear=f,e.background=x}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Mr||e.mapping===Er;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=lp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ap());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new fe(this._lodPlanes[0],r),l=r.uniforms;l.envMap.value=e;const c=this._cubeSize;pa(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,uc)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=sp[(i-1)%sp.length];this._blur(e,i-1,i,r,o)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,l){const c=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,f=new fe(this._lodPlanes[i],u),m=u.uniforms,g=this._sizeLods[n]-1,b=isFinite(r)?Math.PI/(2*g):2*Math.PI/(2*vs-1),w=r/b,x=isFinite(r)?1+Math.floor(d*w):vs;x>vs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${vs}`);const v=[];let M=0;for(let T=0;T<vs;++T){const I=T/w,B=Math.exp(-I*I/2);v.push(B),T===0?M+=B:T<x&&(M+=2*B)}for(let T=0;T<v.length;T++)v[T]=v[T]/M;m.envMap.value=e.texture,m.samples.value=x,m.weights.value=v,m.latitudinal.value=o==="latitudinal",l&&(m.poleAxis.value=l);const{_lodMax:y}=this;m.dTheta.value=b,m.mipInt.value=y-n;const S=this._sizeLods[i],C=3*S*(i>y-gr?i-y+gr:0),P=4*(this._cubeSize-S);pa(t,C,P,3*S,2*S),c.setRenderTarget(t),c.render(f,uc)}}function Ow(s){const e=[],t=[],n=[];let i=s;const r=s-gr+1+np.length;for(let o=0;o<r;o++){const l=Math.pow(2,i);t.push(l);let c=1/l;o>s-gr?c=np[o-s+gr-1]:o===0&&(c=0),n.push(c);const u=1/(l-2),d=-u,f=1+u,m=[d,d,f,d,f,f,d,d,f,f,d,f],g=6,b=6,w=3,x=2,v=1,M=new Float32Array(w*b*g),y=new Float32Array(x*b*g),S=new Float32Array(v*b*g);for(let P=0;P<g;P++){const T=P%3*2/3-1,I=P>2?0:-1,B=[T,I,0,T+2/3,I,0,T+2/3,I+1,0,T,I,0,T+2/3,I+1,0,T,I+1,0];M.set(B,w*b*P),y.set(m,x*b*P);const E=[P,P,P,P,P,P];S.set(E,v*b*P)}const C=new sn;C.setAttribute("position",new Rt(M,w)),C.setAttribute("uv",new Rt(y,x)),C.setAttribute("faceIndex",new Rt(S,v)),e.push(C),i>gr&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function op(s,e,t){const n=new En(s,e,t);return n.texture.mapping=nl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function pa(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Bw(s,e,t){const n=new Float32Array(vs),i=new D(0,1,0);return new Zt({name:"SphericalGaussianBlur",defines:{n:vs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Cu(),fragmentShader:`

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
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function ap(){return new Zt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Cu(),fragmentShader:`

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
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function lp(){return new Zt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Cu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function Cu(){return`

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
	`}function kw(s){let e=new WeakMap,t=null;function n(l){if(l&&l.isTexture){const c=l.mapping,u=c===Wc||c===Xc,d=c===Mr||c===Er;if(u||d)if(l.isRenderTargetTexture&&l.needsPMREMUpdate===!0){l.needsPMREMUpdate=!1;let f=e.get(l);return t===null&&(t=new rp(s)),f=u?t.fromEquirectangular(l,f):t.fromCubemap(l,f),e.set(l,f),f.texture}else{if(e.has(l))return e.get(l).texture;{const f=l.image;if(u&&f&&f.height>0||d&&f&&i(f)){t===null&&(t=new rp(s));const m=u?t.fromEquirectangular(l):t.fromCubemap(l);return e.set(l,m),l.addEventListener("dispose",r),m.texture}else return null}}}return l}function i(l){let c=0;const u=6;for(let d=0;d<u;d++)l[d]!==void 0&&c++;return c===u}function r(l){const c=l.target;c.removeEventListener("dispose",r);const u=e.get(c);u!==void 0&&(e.delete(c),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Vw(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function zw(s,e,t,n){const i={},r=new WeakMap;function o(f){const m=f.target;m.index!==null&&e.remove(m.index);for(const b in m.attributes)e.remove(m.attributes[b]);for(const b in m.morphAttributes){const w=m.morphAttributes[b];for(let x=0,v=w.length;x<v;x++)e.remove(w[x])}m.removeEventListener("dispose",o),delete i[m.id];const g=r.get(m);g&&(e.remove(g),r.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function l(f,m){return i[m.id]===!0||(m.addEventListener("dispose",o),i[m.id]=!0,t.memory.geometries++),m}function c(f){const m=f.attributes;for(const b in m)e.update(m[b],s.ARRAY_BUFFER);const g=f.morphAttributes;for(const b in g){const w=g[b];for(let x=0,v=w.length;x<v;x++)e.update(w[x],s.ARRAY_BUFFER)}}function u(f){const m=[],g=f.index,b=f.attributes.position;let w=0;if(g!==null){const M=g.array;w=g.version;for(let y=0,S=M.length;y<S;y+=3){const C=M[y+0],P=M[y+1],T=M[y+2];m.push(C,P,P,T,T,C)}}else if(b!==void 0){const M=b.array;w=b.version;for(let y=0,S=M.length/3-1;y<S;y+=3){const C=y+0,P=y+1,T=y+2;m.push(C,P,P,T,T,C)}}else return;const x=new(um(m)?gm:mm)(m,1);x.version=w;const v=r.get(f);v&&e.remove(v),r.set(f,x)}function d(f){const m=r.get(f);if(m){const g=f.index;g!==null&&m.version<g.version&&u(f)}else u(f);return r.get(f)}return{get:l,update:c,getWireframeAttribute:d}}function Hw(s,e,t,n){const i=n.isWebGL2;let r;function o(g){r=g}let l,c;function u(g){l=g.type,c=g.bytesPerElement}function d(g,b){s.drawElements(r,b,l,g*c),t.update(b,r,1)}function f(g,b,w){if(w===0)return;let x,v;if(i)x=s,v="drawElementsInstanced";else if(x=e.get("ANGLE_instanced_arrays"),v="drawElementsInstancedANGLE",x===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}x[v](r,b,l,g*c,w),t.update(b,r,w)}function m(g,b,w){if(w===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let v=0;v<w;v++)this.render(g[v]/c,b[v]);else{x.multiDrawElementsWEBGL(r,b,0,l,g,0,w);let v=0;for(let M=0;M<w;M++)v+=b[M];t.update(v,r,1)}}this.setMode=o,this.setIndex=u,this.render=d,this.renderInstances=f,this.renderMultiDraw=m}function Gw(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,l){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=l*(r/3);break;case s.LINES:t.lines+=l*(r/2);break;case s.LINE_STRIP:t.lines+=l*(r-1);break;case s.LINE_LOOP:t.lines+=l*r;break;case s.POINTS:t.points+=l*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Ww(s,e){return s[0]-e[0]}function Xw(s,e){return Math.abs(e[1])-Math.abs(s[1])}function jw(s,e,t){const n={},i=new Float32Array(8),r=new WeakMap,o=new bt,l=[];for(let u=0;u<8;u++)l[u]=[u,0];function c(u,d,f){const m=u.morphTargetInfluences;if(e.isWebGL2===!0){const g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,b=g!==void 0?g.length:0;let w=r.get(d);if(w===void 0||w.count!==b){let U=function(){k.dispose(),r.delete(d),d.removeEventListener("dispose",U)};w!==void 0&&w.texture.dispose();const M=d.morphAttributes.position!==void 0,y=d.morphAttributes.normal!==void 0,S=d.morphAttributes.color!==void 0,C=d.morphAttributes.position||[],P=d.morphAttributes.normal||[],T=d.morphAttributes.color||[];let I=0;M===!0&&(I=1),y===!0&&(I=2),S===!0&&(I=3);let B=d.attributes.position.count*I,E=1;B>e.maxTextureSize&&(E=Math.ceil(B/e.maxTextureSize),B=e.maxTextureSize);const R=new Float32Array(B*E*4*b),k=new pm(R,B,E,b);k.type=yt,k.needsUpdate=!0;const W=I*4;for(let H=0;H<b;H++){const G=C[H],X=P[H],Q=T[H],K=B*E*4*H;for(let ie=0;ie<G.count;ie++){const ne=ie*W;M===!0&&(o.fromBufferAttribute(G,ie),R[K+ne+0]=o.x,R[K+ne+1]=o.y,R[K+ne+2]=o.z,R[K+ne+3]=0),y===!0&&(o.fromBufferAttribute(X,ie),R[K+ne+4]=o.x,R[K+ne+5]=o.y,R[K+ne+6]=o.z,R[K+ne+7]=0),S===!0&&(o.fromBufferAttribute(Q,ie),R[K+ne+8]=o.x,R[K+ne+9]=o.y,R[K+ne+10]=o.z,R[K+ne+11]=Q.itemSize===4?o.w:1)}}w={count:b,texture:k,size:new Re(B,E)},r.set(d,w),d.addEventListener("dispose",U)}let x=0;for(let M=0;M<m.length;M++)x+=m[M];const v=d.morphTargetsRelative?1:1-x;f.getUniforms().setValue(s,"morphTargetBaseInfluence",v),f.getUniforms().setValue(s,"morphTargetInfluences",m),f.getUniforms().setValue(s,"morphTargetsTexture",w.texture,t),f.getUniforms().setValue(s,"morphTargetsTextureSize",w.size)}else{const g=m===void 0?0:m.length;let b=n[d.id];if(b===void 0||b.length!==g){b=[];for(let y=0;y<g;y++)b[y]=[y,0];n[d.id]=b}for(let y=0;y<g;y++){const S=b[y];S[0]=y,S[1]=m[y]}b.sort(Xw);for(let y=0;y<8;y++)y<g&&b[y][1]?(l[y][0]=b[y][0],l[y][1]=b[y][1]):(l[y][0]=Number.MAX_SAFE_INTEGER,l[y][1]=0);l.sort(Ww);const w=d.morphAttributes.position,x=d.morphAttributes.normal;let v=0;for(let y=0;y<8;y++){const S=l[y],C=S[0],P=S[1];C!==Number.MAX_SAFE_INTEGER&&P?(w&&d.getAttribute("morphTarget"+y)!==w[C]&&d.setAttribute("morphTarget"+y,w[C]),x&&d.getAttribute("morphNormal"+y)!==x[C]&&d.setAttribute("morphNormal"+y,x[C]),i[y]=P,v+=P):(w&&d.hasAttribute("morphTarget"+y)===!0&&d.deleteAttribute("morphTarget"+y),x&&d.hasAttribute("morphNormal"+y)===!0&&d.deleteAttribute("morphNormal"+y),i[y]=0)}const M=d.morphTargetsRelative?1:1-v;f.getUniforms().setValue(s,"morphTargetBaseInfluence",M),f.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:c}}function qw(s,e,t,n){let i=new WeakMap;function r(c){const u=n.render.frame,d=c.geometry,f=e.get(c,d);if(i.get(f)!==u&&(e.update(f),i.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),i.get(c)!==u&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,u))),c.isSkinnedMesh){const m=c.skeleton;i.get(m)!==u&&(m.update(),i.set(m,u))}return f}function o(){i=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:r,dispose:o}}class ym extends qt{constructor(e,t,n,i,r,o,l,c,u,d){if(d=d!==void 0?d:ws,d!==ws&&d!==Tr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===ws&&(n=Cn),n===void 0&&d===Tr&&(n=ys),super(null,i,r,o,l,c,d,n,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=l!==void 0?l:ft,this.minFilter=c!==void 0?c:ft,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const wm=new qt,Mm=new ym(1,1);Mm.compareFunction=lm;const Em=new pm,Sm=new Tx,Tm=new xm,cp=[],up=[],hp=new Float32Array(16),dp=new Float32Array(9),pp=new Float32Array(4);function Dr(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=cp[i];if(r===void 0&&(r=new Float32Array(i),cp[i]=r),e!==0){n.toArray(r,0);for(let o=1,l=0;o!==e;++o)l+=t,s[o].toArray(r,l)}return r}function Qt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Jt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function ol(s,e){let t=up[e];t===void 0&&(t=new Int32Array(e),up[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Yw(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Kw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;s.uniform2fv(this.addr,e),Jt(t,e)}}function $w(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Qt(t,e))return;s.uniform3fv(this.addr,e),Jt(t,e)}}function Zw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;s.uniform4fv(this.addr,e),Jt(t,e)}}function Qw(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Qt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Jt(t,e)}else{if(Qt(t,n))return;pp.set(n),s.uniformMatrix2fv(this.addr,!1,pp),Jt(t,n)}}function Jw(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Qt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Jt(t,e)}else{if(Qt(t,n))return;dp.set(n),s.uniformMatrix3fv(this.addr,!1,dp),Jt(t,n)}}function eM(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Qt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Jt(t,e)}else{if(Qt(t,n))return;hp.set(n),s.uniformMatrix4fv(this.addr,!1,hp),Jt(t,n)}}function tM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function nM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;s.uniform2iv(this.addr,e),Jt(t,e)}}function iM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qt(t,e))return;s.uniform3iv(this.addr,e),Jt(t,e)}}function sM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;s.uniform4iv(this.addr,e),Jt(t,e)}}function rM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function oM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;s.uniform2uiv(this.addr,e),Jt(t,e)}}function aM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qt(t,e))return;s.uniform3uiv(this.addr,e),Jt(t,e)}}function lM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;s.uniform4uiv(this.addr,e),Jt(t,e)}}function cM(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);const r=this.type===s.SAMPLER_2D_SHADOW?Mm:wm;t.setTexture2D(e||r,i)}function uM(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Sm,i)}function hM(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Tm,i)}function dM(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Em,i)}function pM(s){switch(s){case 5126:return Yw;case 35664:return Kw;case 35665:return $w;case 35666:return Zw;case 35674:return Qw;case 35675:return Jw;case 35676:return eM;case 5124:case 35670:return tM;case 35667:case 35671:return nM;case 35668:case 35672:return iM;case 35669:case 35673:return sM;case 5125:return rM;case 36294:return oM;case 36295:return aM;case 36296:return lM;case 35678:case 36198:case 36298:case 36306:case 35682:return cM;case 35679:case 36299:case 36307:return uM;case 35680:case 36300:case 36308:case 36293:return hM;case 36289:case 36303:case 36311:case 36292:return dM}}function fM(s,e){s.uniform1fv(this.addr,e)}function mM(s,e){const t=Dr(e,this.size,2);s.uniform2fv(this.addr,t)}function gM(s,e){const t=Dr(e,this.size,3);s.uniform3fv(this.addr,t)}function vM(s,e){const t=Dr(e,this.size,4);s.uniform4fv(this.addr,t)}function _M(s,e){const t=Dr(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function xM(s,e){const t=Dr(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function bM(s,e){const t=Dr(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function yM(s,e){s.uniform1iv(this.addr,e)}function wM(s,e){s.uniform2iv(this.addr,e)}function MM(s,e){s.uniform3iv(this.addr,e)}function EM(s,e){s.uniform4iv(this.addr,e)}function SM(s,e){s.uniform1uiv(this.addr,e)}function TM(s,e){s.uniform2uiv(this.addr,e)}function AM(s,e){s.uniform3uiv(this.addr,e)}function CM(s,e){s.uniform4uiv(this.addr,e)}function PM(s,e,t){const n=this.cache,i=e.length,r=ol(t,i);Qt(n,r)||(s.uniform1iv(this.addr,r),Jt(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||wm,r[o])}function RM(s,e,t){const n=this.cache,i=e.length,r=ol(t,i);Qt(n,r)||(s.uniform1iv(this.addr,r),Jt(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Sm,r[o])}function LM(s,e,t){const n=this.cache,i=e.length,r=ol(t,i);Qt(n,r)||(s.uniform1iv(this.addr,r),Jt(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Tm,r[o])}function IM(s,e,t){const n=this.cache,i=e.length,r=ol(t,i);Qt(n,r)||(s.uniform1iv(this.addr,r),Jt(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Em,r[o])}function DM(s){switch(s){case 5126:return fM;case 35664:return mM;case 35665:return gM;case 35666:return vM;case 35674:return _M;case 35675:return xM;case 35676:return bM;case 5124:case 35670:return yM;case 35667:case 35671:return wM;case 35668:case 35672:return MM;case 35669:case 35673:return EM;case 5125:return SM;case 36294:return TM;case 36295:return AM;case 36296:return CM;case 35678:case 36198:case 36298:case 36306:case 35682:return PM;case 35679:case 36299:case 36307:return RM;case 35680:case 36300:case 36308:case 36293:return LM;case 36289:case 36303:case 36311:case 36292:return IM}}class NM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=pM(t.type)}}class UM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=DM(t.type)}}class FM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const l=i[r];l.setValue(e,t[l.id],n)}}}const fc=/(\w+)(\])?(\[|\.)?/g;function fp(s,e){s.seq.push(e),s.map[e.id]=e}function OM(s,e,t){const n=s.name,i=n.length;for(fc.lastIndex=0;;){const r=fc.exec(n),o=fc.lastIndex;let l=r[1];const c=r[2]==="]",u=r[3];if(c&&(l=l|0),u===void 0||u==="["&&o+2===i){fp(t,u===void 0?new NM(l,s,e):new UM(l,s,e));break}else{let f=t.map[l];f===void 0&&(f=new FM(l),fp(t,f)),t=f}}}class za{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);OM(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const l=t[r],c=n[l.id];c.needsUpdate!==!1&&l.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function mp(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const BM=37297;let kM=0;function VM(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const l=o+1;n.push(`${l===e?">":" "} ${l}: ${t[o]}`)}return n.join(`
`)}function zM(s){const e=mt.getPrimaries(mt.workingColorSpace),t=mt.getPrimaries(s);let n;switch(e===t?n="":e===Za&&t===$a?n="LinearDisplayP3ToLinearSRGB":e===$a&&t===Za&&(n="LinearSRGBToLinearDisplayP3"),s){case nn:case rl:return[n,"LinearTransferOETF"];case Ot:case Eu:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function gp(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+VM(s.getShaderSource(e),o)}else return i}function HM(s,e){const t=zM(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function GM(s,e){let t;switch(e){case B_:t="Linear";break;case k_:t="Reinhard";break;case V_:t="OptimizedCineon";break;case z_:t="ACESFilmic";break;case G_:t="AgX";break;case H_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function WM(s){return[s.extensionDerivatives||!!s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.alphaToCoverage||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(vr).join(`
`)}function XM(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(vr).join(`
`)}function jM(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function qM(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let l=1;r.type===s.FLOAT_MAT2&&(l=2),r.type===s.FLOAT_MAT3&&(l=3),r.type===s.FLOAT_MAT4&&(l=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:l}}return t}function vr(s){return s!==""}function vp(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function _p(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const YM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qc(s){return s.replace(YM,$M)}const KM=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function $M(s,e){let t=et[e];if(t===void 0){const n=KM.get(e);if(n!==void 0)t=et[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Qc(t)}const ZM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xp(s){return s.replace(ZM,QM)}function QM(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function bp(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}function JM(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===$f?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===d_?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===wi&&(e="SHADOWMAP_TYPE_VSM"),e}function eE(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Mr:case Er:e="ENVMAP_TYPE_CUBE";break;case nl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function tE(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Er:e="ENVMAP_MODE_REFRACTION";break}return e}function nE(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Zf:e="ENVMAP_BLENDING_MULTIPLY";break;case F_:e="ENVMAP_BLENDING_MIX";break;case O_:e="ENVMAP_BLENDING_ADD";break}return e}function iE(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function sE(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,l=t.fragmentShader;const c=JM(t),u=eE(t),d=tE(t),f=nE(t),m=iE(t),g=t.isWebGL2?"":WM(t),b=XM(t),w=jM(r),x=i.createProgram();let v,M,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w].filter(vr).join(`
`),v.length>0&&(v+=`
`),M=[g,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w].filter(vr).join(`
`),M.length>0&&(M+=`
`)):(v=[bp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vr).join(`
`),M=[g,bp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",t.envMap?"#define "+f:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Qi?"#define TONE_MAPPING":"",t.toneMapping!==Qi?et.tonemapping_pars_fragment:"",t.toneMapping!==Qi?GM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",et.colorspace_pars_fragment,HM("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(vr).join(`
`)),o=Qc(o),o=vp(o,t),o=_p(o,t),l=Qc(l),l=vp(l,t),l=_p(l,t),o=xp(o),l=xp(l),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,v=[b,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,M=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Hn?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Hn?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);const S=y+v+o,C=y+M+l,P=mp(i,i.VERTEX_SHADER,S),T=mp(i,i.FRAGMENT_SHADER,C);i.attachShader(x,P),i.attachShader(x,T),t.index0AttributeName!==void 0?i.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function I(k){if(s.debug.checkShaderErrors){const W=i.getProgramInfoLog(x).trim(),U=i.getShaderInfoLog(P).trim(),H=i.getShaderInfoLog(T).trim();let G=!0,X=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(G=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,P,T);else{const Q=gp(i,P,"vertex"),K=gp(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+W+`
`+Q+`
`+K)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(U===""||H==="")&&(X=!1);X&&(k.diagnostics={runnable:G,programLog:W,vertexShader:{log:U,prefix:v},fragmentShader:{log:H,prefix:M}})}i.deleteShader(P),i.deleteShader(T),B=new za(i,x),E=qM(i,x)}let B;this.getUniforms=function(){return B===void 0&&I(this),B};let E;this.getAttributes=function(){return E===void 0&&I(this),E};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=i.getProgramParameter(x,BM)),R},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=kM++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=P,this.fragmentShader=T,this}let rE=0;class oE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new aE(e),t.set(e,n)),n}}class aE{constructor(e){this.id=rE++,this.code=e,this.usedTimes=0}}function lE(s,e,t,n,i,r,o){const l=new Tu,c=new oE,u=new Set,d=[],f=i.isWebGL2,m=i.logarithmicDepthBuffer,g=i.vertexTextures;let b=i.precision;const w={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(E){return u.add(E),E===0?"uv":`uv${E}`}function v(E,R,k,W,U){const H=W.fog,G=U.geometry,X=E.isMeshStandardMaterial?W.environment:null,Q=(E.isMeshStandardMaterial?t:e).get(E.envMap||X),K=!!Q&&Q.mapping===nl?Q.image.height:null,ie=w[E.type];E.precision!==null&&(b=i.getMaxPrecision(E.precision),b!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",b,"instead."));const ne=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,me=ne!==void 0?ne.length:0;let he=0;G.morphAttributes.position!==void 0&&(he=1),G.morphAttributes.normal!==void 0&&(he=2),G.morphAttributes.color!==void 0&&(he=3);let q,se,_e,ye;if(ie){const tt=ii[ie];q=tt.vertexShader,se=tt.fragmentShader}else q=E.vertexShader,se=E.fragmentShader,c.update(E),_e=c.getVertexShaderID(E),ye=c.getFragmentShaderID(E);const Te=s.getRenderTarget(),ve=U.isInstancedMesh===!0,Ue=U.isBatchedMesh===!0,Ne=!!E.map,j=!!E.matcap,St=!!Q,Ce=!!E.aoMap,ke=!!E.lightMap,Ae=!!E.bumpMap,ct=!!E.normalMap,Ve=!!E.displacementMap,F=!!E.emissiveMap,L=!!E.metalnessMap,Z=!!E.roughnessMap,ue=E.anisotropy>0,re=E.clearcoat>0,ce=E.iridescence>0,Pe=E.sheen>0,xe=E.transmission>0,Me=ue&&!!E.anisotropyMap,ze=re&&!!E.clearcoatMap,We=re&&!!E.clearcoatNormalMap,ae=re&&!!E.clearcoatRoughnessMap,st=ce&&!!E.iridescenceMap,Je=ce&&!!E.iridescenceThicknessMap,je=Pe&&!!E.sheenColorMap,Le=Pe&&!!E.sheenRoughnessMap,we=!!E.specularMap,$e=!!E.specularColorMap,V=!!E.specularIntensityMap,pe=xe&&!!E.transmissionMap,be=xe&&!!E.thicknessMap,Ie=!!E.gradientMap,O=!!E.alphaMap,oe=E.alphaTest>0,le=!!E.alphaHash,Se=!!E.extensions;let Oe=Qi;E.toneMapped&&(Te===null||Te.isXRRenderTarget===!0)&&(Oe=s.toneMapping);const nt={isWebGL2:f,shaderID:ie,shaderType:E.type,shaderName:E.name,vertexShader:q,fragmentShader:se,defines:E.defines,customVertexShaderID:_e,customFragmentShaderID:ye,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:b,batching:Ue,instancing:ve,instancingColor:ve&&U.instanceColor!==null,supportsVertexTextures:g,outputColorSpace:Te===null?s.outputColorSpace:Te.isXRRenderTarget===!0?Te.texture.colorSpace:nn,alphaToCoverage:!!E.alphaToCoverage,map:Ne,matcap:j,envMap:St,envMapMode:St&&Q.mapping,envMapCubeUVHeight:K,aoMap:Ce,lightMap:ke,bumpMap:Ae,normalMap:ct,displacementMap:g&&Ve,emissiveMap:F,normalMapObjectSpace:ct&&E.normalMapType===J_,normalMapTangentSpace:ct&&E.normalMapType===am,metalnessMap:L,roughnessMap:Z,anisotropy:ue,anisotropyMap:Me,clearcoat:re,clearcoatMap:ze,clearcoatNormalMap:We,clearcoatRoughnessMap:ae,iridescence:ce,iridescenceMap:st,iridescenceThicknessMap:Je,sheen:Pe,sheenColorMap:je,sheenRoughnessMap:Le,specularMap:we,specularColorMap:$e,specularIntensityMap:V,transmission:xe,transmissionMap:pe,thicknessMap:be,gradientMap:Ie,opaque:E.transparent===!1&&E.blending===br&&E.alphaToCoverage===!1,alphaMap:O,alphaTest:oe,alphaHash:le,combine:E.combine,mapUv:Ne&&x(E.map.channel),aoMapUv:Ce&&x(E.aoMap.channel),lightMapUv:ke&&x(E.lightMap.channel),bumpMapUv:Ae&&x(E.bumpMap.channel),normalMapUv:ct&&x(E.normalMap.channel),displacementMapUv:Ve&&x(E.displacementMap.channel),emissiveMapUv:F&&x(E.emissiveMap.channel),metalnessMapUv:L&&x(E.metalnessMap.channel),roughnessMapUv:Z&&x(E.roughnessMap.channel),anisotropyMapUv:Me&&x(E.anisotropyMap.channel),clearcoatMapUv:ze&&x(E.clearcoatMap.channel),clearcoatNormalMapUv:We&&x(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&x(E.clearcoatRoughnessMap.channel),iridescenceMapUv:st&&x(E.iridescenceMap.channel),iridescenceThicknessMapUv:Je&&x(E.iridescenceThicknessMap.channel),sheenColorMapUv:je&&x(E.sheenColorMap.channel),sheenRoughnessMapUv:Le&&x(E.sheenRoughnessMap.channel),specularMapUv:we&&x(E.specularMap.channel),specularColorMapUv:$e&&x(E.specularColorMap.channel),specularIntensityMapUv:V&&x(E.specularIntensityMap.channel),transmissionMapUv:pe&&x(E.transmissionMap.channel),thicknessMapUv:be&&x(E.thicknessMap.channel),alphaMapUv:O&&x(E.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(ct||ue),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!G.attributes.uv&&(Ne||O),fog:!!H,useFog:E.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:m,skinning:U.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:me,morphTextureStride:he,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:s.shadowMap.enabled&&k.length>0,shadowMapType:s.shadowMap.type,toneMapping:Oe,useLegacyLights:s._useLegacyLights,decodeVideoTexture:Ne&&E.map.isVideoTexture===!0&&mt.getTransfer(E.map.colorSpace)===Ct,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===gn,flipSided:E.side===bn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionDerivatives:Se&&E.extensions.derivatives===!0,extensionFragDepth:Se&&E.extensions.fragDepth===!0,extensionDrawBuffers:Se&&E.extensions.drawBuffers===!0,extensionShaderTextureLOD:Se&&E.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Se&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Se&&E.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionFragDepth:f||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return nt.vertexUv1s=u.has(1),nt.vertexUv2s=u.has(2),nt.vertexUv3s=u.has(3),u.clear(),nt}function M(E){const R=[];if(E.shaderID?R.push(E.shaderID):(R.push(E.customVertexShaderID),R.push(E.customFragmentShaderID)),E.defines!==void 0)for(const k in E.defines)R.push(k),R.push(E.defines[k]);return E.isRawShaderMaterial===!1&&(y(R,E),S(R,E),R.push(s.outputColorSpace)),R.push(E.customProgramCacheKey),R.join()}function y(E,R){E.push(R.precision),E.push(R.outputColorSpace),E.push(R.envMapMode),E.push(R.envMapCubeUVHeight),E.push(R.mapUv),E.push(R.alphaMapUv),E.push(R.lightMapUv),E.push(R.aoMapUv),E.push(R.bumpMapUv),E.push(R.normalMapUv),E.push(R.displacementMapUv),E.push(R.emissiveMapUv),E.push(R.metalnessMapUv),E.push(R.roughnessMapUv),E.push(R.anisotropyMapUv),E.push(R.clearcoatMapUv),E.push(R.clearcoatNormalMapUv),E.push(R.clearcoatRoughnessMapUv),E.push(R.iridescenceMapUv),E.push(R.iridescenceThicknessMapUv),E.push(R.sheenColorMapUv),E.push(R.sheenRoughnessMapUv),E.push(R.specularMapUv),E.push(R.specularColorMapUv),E.push(R.specularIntensityMapUv),E.push(R.transmissionMapUv),E.push(R.thicknessMapUv),E.push(R.combine),E.push(R.fogExp2),E.push(R.sizeAttenuation),E.push(R.morphTargetsCount),E.push(R.morphAttributeCount),E.push(R.numDirLights),E.push(R.numPointLights),E.push(R.numSpotLights),E.push(R.numSpotLightMaps),E.push(R.numHemiLights),E.push(R.numRectAreaLights),E.push(R.numDirLightShadows),E.push(R.numPointLightShadows),E.push(R.numSpotLightShadows),E.push(R.numSpotLightShadowsWithMaps),E.push(R.numLightProbes),E.push(R.shadowMapType),E.push(R.toneMapping),E.push(R.numClippingPlanes),E.push(R.numClipIntersection),E.push(R.depthPacking)}function S(E,R){l.disableAll(),R.isWebGL2&&l.enable(0),R.supportsVertexTextures&&l.enable(1),R.instancing&&l.enable(2),R.instancingColor&&l.enable(3),R.matcap&&l.enable(4),R.envMap&&l.enable(5),R.normalMapObjectSpace&&l.enable(6),R.normalMapTangentSpace&&l.enable(7),R.clearcoat&&l.enable(8),R.iridescence&&l.enable(9),R.alphaTest&&l.enable(10),R.vertexColors&&l.enable(11),R.vertexAlphas&&l.enable(12),R.vertexUv1s&&l.enable(13),R.vertexUv2s&&l.enable(14),R.vertexUv3s&&l.enable(15),R.vertexTangents&&l.enable(16),R.anisotropy&&l.enable(17),R.alphaHash&&l.enable(18),R.batching&&l.enable(19),E.push(l.mask),l.disableAll(),R.fog&&l.enable(0),R.useFog&&l.enable(1),R.flatShading&&l.enable(2),R.logarithmicDepthBuffer&&l.enable(3),R.skinning&&l.enable(4),R.morphTargets&&l.enable(5),R.morphNormals&&l.enable(6),R.morphColors&&l.enable(7),R.premultipliedAlpha&&l.enable(8),R.shadowMapEnabled&&l.enable(9),R.useLegacyLights&&l.enable(10),R.doubleSided&&l.enable(11),R.flipSided&&l.enable(12),R.useDepthPacking&&l.enable(13),R.dithering&&l.enable(14),R.transmission&&l.enable(15),R.sheen&&l.enable(16),R.opaque&&l.enable(17),R.pointsUvs&&l.enable(18),R.decodeVideoTexture&&l.enable(19),R.alphaToCoverage&&l.enable(20),E.push(l.mask)}function C(E){const R=w[E.type];let k;if(R){const W=ii[R];k=Wx.clone(W.uniforms)}else k=E.uniforms;return k}function P(E,R){let k;for(let W=0,U=d.length;W<U;W++){const H=d[W];if(H.cacheKey===R){k=H,++k.usedTimes;break}}return k===void 0&&(k=new sE(s,R,E,r),d.push(k)),k}function T(E){if(--E.usedTimes===0){const R=d.indexOf(E);d[R]=d[d.length-1],d.pop(),E.destroy()}}function I(E){c.remove(E)}function B(){c.dispose()}return{getParameters:v,getProgramCacheKey:M,getUniforms:C,acquireProgram:P,releaseProgram:T,releaseShaderCache:I,programs:d,dispose:B}}function cE(){let s=new WeakMap;function e(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function t(r){s.delete(r)}function n(r,o,l){s.get(r)[o]=l}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function uE(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function yp(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function wp(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(f,m,g,b,w,x){let v=s[e];return v===void 0?(v={id:f.id,object:f,geometry:m,material:g,groupOrder:b,renderOrder:f.renderOrder,z:w,group:x},s[e]=v):(v.id=f.id,v.object=f,v.geometry=m,v.material=g,v.groupOrder=b,v.renderOrder=f.renderOrder,v.z=w,v.group=x),e++,v}function l(f,m,g,b,w,x){const v=o(f,m,g,b,w,x);g.transmission>0?n.push(v):g.transparent===!0?i.push(v):t.push(v)}function c(f,m,g,b,w,x){const v=o(f,m,g,b,w,x);g.transmission>0?n.unshift(v):g.transparent===!0?i.unshift(v):t.unshift(v)}function u(f,m){t.length>1&&t.sort(f||uE),n.length>1&&n.sort(m||yp),i.length>1&&i.sort(m||yp)}function d(){for(let f=e,m=s.length;f<m;f++){const g=s[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:d,sort:u}}function hE(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new wp,s.set(n,[o])):i>=r.length?(o=new wp,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function dE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new Ge};break;case"SpotLight":t={position:new D,direction:new D,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":t={color:new Ge,position:new D,halfWidth:new D,halfHeight:new D};break}return s[e.id]=t,t}}}function pE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let fE=0;function mE(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function gE(s,e){const t=new dE,n=pE(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)i.probe.push(new D);const r=new D,o=new Xe,l=new Xe;function c(d,f){let m=0,g=0,b=0;for(let k=0;k<9;k++)i.probe[k].set(0,0,0);let w=0,x=0,v=0,M=0,y=0,S=0,C=0,P=0,T=0,I=0,B=0;d.sort(mE);const E=f===!0?Math.PI:1;for(let k=0,W=d.length;k<W;k++){const U=d[k],H=U.color,G=U.intensity,X=U.distance,Q=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)m+=H.r*G*E,g+=H.g*G*E,b+=H.b*G*E;else if(U.isLightProbe){for(let K=0;K<9;K++)i.probe[K].addScaledVector(U.sh.coefficients[K],G);B++}else if(U.isDirectionalLight){const K=t.get(U);if(K.color.copy(U.color).multiplyScalar(U.intensity*E),U.castShadow){const ie=U.shadow,ne=n.get(U);ne.shadowBias=ie.bias,ne.shadowNormalBias=ie.normalBias,ne.shadowRadius=ie.radius,ne.shadowMapSize=ie.mapSize,i.directionalShadow[w]=ne,i.directionalShadowMap[w]=Q,i.directionalShadowMatrix[w]=U.shadow.matrix,S++}i.directional[w]=K,w++}else if(U.isSpotLight){const K=t.get(U);K.position.setFromMatrixPosition(U.matrixWorld),K.color.copy(H).multiplyScalar(G*E),K.distance=X,K.coneCos=Math.cos(U.angle),K.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),K.decay=U.decay,i.spot[v]=K;const ie=U.shadow;if(U.map&&(i.spotLightMap[T]=U.map,T++,ie.updateMatrices(U),U.castShadow&&I++),i.spotLightMatrix[v]=ie.matrix,U.castShadow){const ne=n.get(U);ne.shadowBias=ie.bias,ne.shadowNormalBias=ie.normalBias,ne.shadowRadius=ie.radius,ne.shadowMapSize=ie.mapSize,i.spotShadow[v]=ne,i.spotShadowMap[v]=Q,P++}v++}else if(U.isRectAreaLight){const K=t.get(U);K.color.copy(H).multiplyScalar(G),K.halfWidth.set(U.width*.5,0,0),K.halfHeight.set(0,U.height*.5,0),i.rectArea[M]=K,M++}else if(U.isPointLight){const K=t.get(U);if(K.color.copy(U.color).multiplyScalar(U.intensity*E),K.distance=U.distance,K.decay=U.decay,U.castShadow){const ie=U.shadow,ne=n.get(U);ne.shadowBias=ie.bias,ne.shadowNormalBias=ie.normalBias,ne.shadowRadius=ie.radius,ne.shadowMapSize=ie.mapSize,ne.shadowCameraNear=ie.camera.near,ne.shadowCameraFar=ie.camera.far,i.pointShadow[x]=ne,i.pointShadowMap[x]=Q,i.pointShadowMatrix[x]=U.shadow.matrix,C++}i.point[x]=K,x++}else if(U.isHemisphereLight){const K=t.get(U);K.skyColor.copy(U.color).multiplyScalar(G*E),K.groundColor.copy(U.groundColor).multiplyScalar(G*E),i.hemi[y]=K,y++}}M>0&&(e.isWebGL2?s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ge.LTC_FLOAT_1,i.rectAreaLTC2=ge.LTC_FLOAT_2):(i.rectAreaLTC1=ge.LTC_HALF_1,i.rectAreaLTC2=ge.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ge.LTC_FLOAT_1,i.rectAreaLTC2=ge.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ge.LTC_HALF_1,i.rectAreaLTC2=ge.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=m,i.ambient[1]=g,i.ambient[2]=b;const R=i.hash;(R.directionalLength!==w||R.pointLength!==x||R.spotLength!==v||R.rectAreaLength!==M||R.hemiLength!==y||R.numDirectionalShadows!==S||R.numPointShadows!==C||R.numSpotShadows!==P||R.numSpotMaps!==T||R.numLightProbes!==B)&&(i.directional.length=w,i.spot.length=v,i.rectArea.length=M,i.point.length=x,i.hemi.length=y,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=C,i.pointShadowMap.length=C,i.spotShadow.length=P,i.spotShadowMap.length=P,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=C,i.spotLightMatrix.length=P+T-I,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=I,i.numLightProbes=B,R.directionalLength=w,R.pointLength=x,R.spotLength=v,R.rectAreaLength=M,R.hemiLength=y,R.numDirectionalShadows=S,R.numPointShadows=C,R.numSpotShadows=P,R.numSpotMaps=T,R.numLightProbes=B,i.version=fE++)}function u(d,f){let m=0,g=0,b=0,w=0,x=0;const v=f.matrixWorldInverse;for(let M=0,y=d.length;M<y;M++){const S=d[M];if(S.isDirectionalLight){const C=i.directional[m];C.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(v),m++}else if(S.isSpotLight){const C=i.spot[b];C.position.setFromMatrixPosition(S.matrixWorld),C.position.applyMatrix4(v),C.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(v),b++}else if(S.isRectAreaLight){const C=i.rectArea[w];C.position.setFromMatrixPosition(S.matrixWorld),C.position.applyMatrix4(v),l.identity(),o.copy(S.matrixWorld),o.premultiply(v),l.extractRotation(o),C.halfWidth.set(S.width*.5,0,0),C.halfHeight.set(0,S.height*.5,0),C.halfWidth.applyMatrix4(l),C.halfHeight.applyMatrix4(l),w++}else if(S.isPointLight){const C=i.point[g];C.position.setFromMatrixPosition(S.matrixWorld),C.position.applyMatrix4(v),g++}else if(S.isHemisphereLight){const C=i.hemi[x];C.direction.setFromMatrixPosition(S.matrixWorld),C.direction.transformDirection(v),x++}}}return{setup:c,setupView:u,state:i}}function Mp(s,e){const t=new gE(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function o(f){n.push(f)}function l(f){i.push(f)}function c(f){t.setup(n,f)}function u(f){t.setupView(n,f)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:c,setupLightsView:u,pushLight:o,pushShadow:l}}function vE(s,e){let t=new WeakMap;function n(r,o=0){const l=t.get(r);let c;return l===void 0?(c=new Mp(s,e),t.set(r,[c])):o>=l.length?(c=new Mp(s,e),l.push(c)):c=l[o],c}function i(){t=new WeakMap}return{get:n,dispose:i}}class _E extends oi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Z_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class xE extends oi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const bE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yE=`uniform sampler2D shadow_pass;
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
}`;function wE(s,e,t){let n=new Au;const i=new Re,r=new Re,o=new bt,l=new _E({depthPacking:Q_}),c=new xE,u={},d=t.maxTextureSize,f={[$n]:bn,[bn]:$n,[gn]:gn},m=new Zt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Re},radius:{value:4}},vertexShader:bE,fragmentShader:yE}),g=m.clone();g.defines.HORIZONTAL_PASS=1;const b=new sn;b.setAttribute("position",new Rt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new fe(b,m),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$f;let v=this.type;this.render=function(P,T,I){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||P.length===0)return;const B=s.getRenderTarget(),E=s.getActiveCubeFace(),R=s.getActiveMipmapLevel(),k=s.state;k.setBlending(Vn),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const W=v!==wi&&this.type===wi,U=v===wi&&this.type!==wi;for(let H=0,G=P.length;H<G;H++){const X=P[H],Q=X.shadow;if(Q===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(Q.autoUpdate===!1&&Q.needsUpdate===!1)continue;i.copy(Q.mapSize);const K=Q.getFrameExtents();if(i.multiply(K),r.copy(Q.mapSize),(i.x>d||i.y>d)&&(i.x>d&&(r.x=Math.floor(d/K.x),i.x=r.x*K.x,Q.mapSize.x=r.x),i.y>d&&(r.y=Math.floor(d/K.y),i.y=r.y*K.y,Q.mapSize.y=r.y)),Q.map===null||W===!0||U===!0){const ne=this.type!==wi?{minFilter:ft,magFilter:ft}:{};Q.map!==null&&Q.map.dispose(),Q.map=new En(i.x,i.y,ne),Q.map.texture.name=X.name+".shadowMap",Q.camera.updateProjectionMatrix()}s.setRenderTarget(Q.map),s.clear();const ie=Q.getViewportCount();for(let ne=0;ne<ie;ne++){const me=Q.getViewport(ne);o.set(r.x*me.x,r.y*me.y,r.x*me.z,r.y*me.w),k.viewport(o),Q.updateMatrices(X,ne),n=Q.getFrustum(),S(T,I,Q.camera,X,this.type)}Q.isPointLightShadow!==!0&&this.type===wi&&M(Q,I),Q.needsUpdate=!1}v=this.type,x.needsUpdate=!1,s.setRenderTarget(B,E,R)};function M(P,T){const I=e.update(w);m.defines.VSM_SAMPLES!==P.blurSamples&&(m.defines.VSM_SAMPLES=P.blurSamples,g.defines.VSM_SAMPLES=P.blurSamples,m.needsUpdate=!0,g.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new En(i.x,i.y)),m.uniforms.shadow_pass.value=P.map.texture,m.uniforms.resolution.value=P.mapSize,m.uniforms.radius.value=P.radius,s.setRenderTarget(P.mapPass),s.clear(),s.renderBufferDirect(T,null,I,m,w,null),g.uniforms.shadow_pass.value=P.mapPass.texture,g.uniforms.resolution.value=P.mapSize,g.uniforms.radius.value=P.radius,s.setRenderTarget(P.map),s.clear(),s.renderBufferDirect(T,null,I,g,w,null)}function y(P,T,I,B){let E=null;const R=I.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(R!==void 0)E=R;else if(E=I.isPointLight===!0?c:l,s.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const k=E.uuid,W=T.uuid;let U=u[k];U===void 0&&(U={},u[k]=U);let H=U[W];H===void 0&&(H=E.clone(),U[W]=H,T.addEventListener("dispose",C)),E=H}if(E.visible=T.visible,E.wireframe=T.wireframe,B===wi?E.side=T.shadowSide!==null?T.shadowSide:T.side:E.side=T.shadowSide!==null?T.shadowSide:f[T.side],E.alphaMap=T.alphaMap,E.alphaTest=T.alphaTest,E.map=T.map,E.clipShadows=T.clipShadows,E.clippingPlanes=T.clippingPlanes,E.clipIntersection=T.clipIntersection,E.displacementMap=T.displacementMap,E.displacementScale=T.displacementScale,E.displacementBias=T.displacementBias,E.wireframeLinewidth=T.wireframeLinewidth,E.linewidth=T.linewidth,I.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const k=s.properties.get(E);k.light=I}return E}function S(P,T,I,B,E){if(P.visible===!1)return;if(P.layers.test(T.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&E===wi)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,P.matrixWorld);const W=e.update(P),U=P.material;if(Array.isArray(U)){const H=W.groups;for(let G=0,X=H.length;G<X;G++){const Q=H[G],K=U[Q.materialIndex];if(K&&K.visible){const ie=y(P,K,B,E);P.onBeforeShadow(s,P,T,I,W,ie,Q),s.renderBufferDirect(I,null,W,ie,P,Q),P.onAfterShadow(s,P,T,I,W,ie,Q)}}}else if(U.visible){const H=y(P,U,B,E);P.onBeforeShadow(s,P,T,I,W,H,null),s.renderBufferDirect(I,null,W,H,P,null),P.onAfterShadow(s,P,T,I,W,H,null)}}const k=P.children;for(let W=0,U=k.length;W<U;W++)S(k[W],T,I,B,E)}function C(P){P.target.removeEventListener("dispose",C);for(const I in u){const B=u[I],E=P.target.uuid;E in B&&(B[E].dispose(),delete B[E])}}}function ME(s,e,t){const n=t.isWebGL2;function i(){let O=!1;const oe=new bt;let le=null;const Se=new bt(0,0,0,0);return{setMask:function(Oe){le!==Oe&&!O&&(s.colorMask(Oe,Oe,Oe,Oe),le=Oe)},setLocked:function(Oe){O=Oe},setClear:function(Oe,nt,tt,ut,kt){kt===!0&&(Oe*=ut,nt*=ut,tt*=ut),oe.set(Oe,nt,tt,ut),Se.equals(oe)===!1&&(s.clearColor(Oe,nt,tt,ut),Se.copy(oe))},reset:function(){O=!1,le=null,Se.set(-1,0,0,0)}}}function r(){let O=!1,oe=null,le=null,Se=null;return{setTest:function(Oe){Oe?ve(s.DEPTH_TEST):Ue(s.DEPTH_TEST)},setMask:function(Oe){oe!==Oe&&!O&&(s.depthMask(Oe),oe=Oe)},setFunc:function(Oe){if(le!==Oe){switch(Oe){case P_:s.depthFunc(s.NEVER);break;case R_:s.depthFunc(s.ALWAYS);break;case L_:s.depthFunc(s.LESS);break;case qa:s.depthFunc(s.LEQUAL);break;case I_:s.depthFunc(s.EQUAL);break;case D_:s.depthFunc(s.GEQUAL);break;case N_:s.depthFunc(s.GREATER);break;case U_:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}le=Oe}},setLocked:function(Oe){O=Oe},setClear:function(Oe){Se!==Oe&&(s.clearDepth(Oe),Se=Oe)},reset:function(){O=!1,oe=null,le=null,Se=null}}}function o(){let O=!1,oe=null,le=null,Se=null,Oe=null,nt=null,tt=null,ut=null,kt=null;return{setTest:function(ot){O||(ot?ve(s.STENCIL_TEST):Ue(s.STENCIL_TEST))},setMask:function(ot){oe!==ot&&!O&&(s.stencilMask(ot),oe=ot)},setFunc:function(ot,Ut,rn){(le!==ot||Se!==Ut||Oe!==rn)&&(s.stencilFunc(ot,Ut,rn),le=ot,Se=Ut,Oe=rn)},setOp:function(ot,Ut,rn){(nt!==ot||tt!==Ut||ut!==rn)&&(s.stencilOp(ot,Ut,rn),nt=ot,tt=Ut,ut=rn)},setLocked:function(ot){O=ot},setClear:function(ot){kt!==ot&&(s.clearStencil(ot),kt=ot)},reset:function(){O=!1,oe=null,le=null,Se=null,Oe=null,nt=null,tt=null,ut=null,kt=null}}}const l=new i,c=new r,u=new o,d=new WeakMap,f=new WeakMap;let m={},g={},b=new WeakMap,w=[],x=null,v=!1,M=null,y=null,S=null,C=null,P=null,T=null,I=null,B=new Ge(0,0,0),E=0,R=!1,k=null,W=null,U=null,H=null,G=null;const X=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Q=!1,K=0;const ie=s.getParameter(s.VERSION);ie.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(ie)[1]),Q=K>=1):ie.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),Q=K>=2);let ne=null,me={};const he=s.getParameter(s.SCISSOR_BOX),q=s.getParameter(s.VIEWPORT),se=new bt().fromArray(he),_e=new bt().fromArray(q);function ye(O,oe,le,Se){const Oe=new Uint8Array(4),nt=s.createTexture();s.bindTexture(O,nt),s.texParameteri(O,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(O,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let tt=0;tt<le;tt++)n&&(O===s.TEXTURE_3D||O===s.TEXTURE_2D_ARRAY)?s.texImage3D(oe,0,s.RGBA,1,1,Se,0,s.RGBA,s.UNSIGNED_BYTE,Oe):s.texImage2D(oe+tt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Oe);return nt}const Te={};Te[s.TEXTURE_2D]=ye(s.TEXTURE_2D,s.TEXTURE_2D,1),Te[s.TEXTURE_CUBE_MAP]=ye(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Te[s.TEXTURE_2D_ARRAY]=ye(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Te[s.TEXTURE_3D]=ye(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),l.setClear(0,0,0,1),c.setClear(1),u.setClear(0),ve(s.DEPTH_TEST),c.setFunc(qa),Ve(!1),F(td),ve(s.CULL_FACE),Ae(Vn);function ve(O){m[O]!==!0&&(s.enable(O),m[O]=!0)}function Ue(O){m[O]!==!1&&(s.disable(O),m[O]=!1)}function Ne(O,oe){return g[O]!==oe?(s.bindFramebuffer(O,oe),g[O]=oe,n&&(O===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=oe),O===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=oe)),!0):!1}function j(O,oe){let le=w,Se=!1;if(O)if(le=b.get(oe),le===void 0&&(le=[],b.set(oe,le)),O.isWebGLMultipleRenderTargets){const Oe=O.texture;if(le.length!==Oe.length||le[0]!==s.COLOR_ATTACHMENT0){for(let nt=0,tt=Oe.length;nt<tt;nt++)le[nt]=s.COLOR_ATTACHMENT0+nt;le.length=Oe.length,Se=!0}}else le[0]!==s.COLOR_ATTACHMENT0&&(le[0]=s.COLOR_ATTACHMENT0,Se=!0);else le[0]!==s.BACK&&(le[0]=s.BACK,Se=!0);Se&&(t.isWebGL2?s.drawBuffers(le):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(le))}function St(O){return x!==O?(s.useProgram(O),x=O,!0):!1}const Ce={[gs]:s.FUNC_ADD,[f_]:s.FUNC_SUBTRACT,[m_]:s.FUNC_REVERSE_SUBTRACT};if(n)Ce[rd]=s.MIN,Ce[od]=s.MAX;else{const O=e.get("EXT_blend_minmax");O!==null&&(Ce[rd]=O.MIN_EXT,Ce[od]=O.MAX_EXT)}const ke={[g_]:s.ZERO,[v_]:s.ONE,[__]:s.SRC_COLOR,[Hc]:s.SRC_ALPHA,[E_]:s.SRC_ALPHA_SATURATE,[w_]:s.DST_COLOR,[b_]:s.DST_ALPHA,[x_]:s.ONE_MINUS_SRC_COLOR,[Gc]:s.ONE_MINUS_SRC_ALPHA,[M_]:s.ONE_MINUS_DST_COLOR,[y_]:s.ONE_MINUS_DST_ALPHA,[S_]:s.CONSTANT_COLOR,[T_]:s.ONE_MINUS_CONSTANT_COLOR,[A_]:s.CONSTANT_ALPHA,[C_]:s.ONE_MINUS_CONSTANT_ALPHA};function Ae(O,oe,le,Se,Oe,nt,tt,ut,kt,ot){if(O===Vn){v===!0&&(Ue(s.BLEND),v=!1);return}if(v===!1&&(ve(s.BLEND),v=!0),O!==p_){if(O!==M||ot!==R){if((y!==gs||P!==gs)&&(s.blendEquation(s.FUNC_ADD),y=gs,P=gs),ot)switch(O){case br:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case nd:s.blendFunc(s.ONE,s.ONE);break;case id:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case sd:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case br:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case nd:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case id:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case sd:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}S=null,C=null,T=null,I=null,B.set(0,0,0),E=0,M=O,R=ot}return}Oe=Oe||oe,nt=nt||le,tt=tt||Se,(oe!==y||Oe!==P)&&(s.blendEquationSeparate(Ce[oe],Ce[Oe]),y=oe,P=Oe),(le!==S||Se!==C||nt!==T||tt!==I)&&(s.blendFuncSeparate(ke[le],ke[Se],ke[nt],ke[tt]),S=le,C=Se,T=nt,I=tt),(ut.equals(B)===!1||kt!==E)&&(s.blendColor(ut.r,ut.g,ut.b,kt),B.copy(ut),E=kt),M=O,R=!1}function ct(O,oe){O.side===gn?Ue(s.CULL_FACE):ve(s.CULL_FACE);let le=O.side===bn;oe&&(le=!le),Ve(le),O.blending===br&&O.transparent===!1?Ae(Vn):Ae(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),c.setFunc(O.depthFunc),c.setTest(O.depthTest),c.setMask(O.depthWrite),l.setMask(O.colorWrite);const Se=O.stencilWrite;u.setTest(Se),Se&&(u.setMask(O.stencilWriteMask),u.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),u.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Z(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?ve(s.SAMPLE_ALPHA_TO_COVERAGE):Ue(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ve(O){k!==O&&(O?s.frontFace(s.CW):s.frontFace(s.CCW),k=O)}function F(O){O!==u_?(ve(s.CULL_FACE),O!==W&&(O===td?s.cullFace(s.BACK):O===h_?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ue(s.CULL_FACE),W=O}function L(O){O!==U&&(Q&&s.lineWidth(O),U=O)}function Z(O,oe,le){O?(ve(s.POLYGON_OFFSET_FILL),(H!==oe||G!==le)&&(s.polygonOffset(oe,le),H=oe,G=le)):Ue(s.POLYGON_OFFSET_FILL)}function ue(O){O?ve(s.SCISSOR_TEST):Ue(s.SCISSOR_TEST)}function re(O){O===void 0&&(O=s.TEXTURE0+X-1),ne!==O&&(s.activeTexture(O),ne=O)}function ce(O,oe,le){le===void 0&&(ne===null?le=s.TEXTURE0+X-1:le=ne);let Se=me[le];Se===void 0&&(Se={type:void 0,texture:void 0},me[le]=Se),(Se.type!==O||Se.texture!==oe)&&(ne!==le&&(s.activeTexture(le),ne=le),s.bindTexture(O,oe||Te[O]),Se.type=O,Se.texture=oe)}function Pe(){const O=me[ne];O!==void 0&&O.type!==void 0&&(s.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function xe(){try{s.compressedTexImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Me(){try{s.compressedTexImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ze(){try{s.texSubImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function We(){try{s.texSubImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ae(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function st(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Je(){try{s.texStorage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function je(){try{s.texStorage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Le(){try{s.texImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function we(){try{s.texImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function $e(O){se.equals(O)===!1&&(s.scissor(O.x,O.y,O.z,O.w),se.copy(O))}function V(O){_e.equals(O)===!1&&(s.viewport(O.x,O.y,O.z,O.w),_e.copy(O))}function pe(O,oe){let le=f.get(oe);le===void 0&&(le=new WeakMap,f.set(oe,le));let Se=le.get(O);Se===void 0&&(Se=s.getUniformBlockIndex(oe,O.name),le.set(O,Se))}function be(O,oe){const Se=f.get(oe).get(O);d.get(oe)!==Se&&(s.uniformBlockBinding(oe,Se,O.__bindingPointIndex),d.set(oe,Se))}function Ie(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),m={},ne=null,me={},g={},b=new WeakMap,w=[],x=null,v=!1,M=null,y=null,S=null,C=null,P=null,T=null,I=null,B=new Ge(0,0,0),E=0,R=!1,k=null,W=null,U=null,H=null,G=null,se.set(0,0,s.canvas.width,s.canvas.height),_e.set(0,0,s.canvas.width,s.canvas.height),l.reset(),c.reset(),u.reset()}return{buffers:{color:l,depth:c,stencil:u},enable:ve,disable:Ue,bindFramebuffer:Ne,drawBuffers:j,useProgram:St,setBlending:Ae,setMaterial:ct,setFlipSided:Ve,setCullFace:F,setLineWidth:L,setPolygonOffset:Z,setScissorTest:ue,activeTexture:re,bindTexture:ce,unbindTexture:Pe,compressedTexImage2D:xe,compressedTexImage3D:Me,texImage2D:Le,texImage3D:we,updateUBOMapping:pe,uniformBlockBinding:be,texStorage2D:Je,texStorage3D:je,texSubImage2D:ze,texSubImage3D:We,compressedTexSubImage2D:ae,compressedTexSubImage3D:st,scissor:$e,viewport:V,reset:Ie}}function EE(s,e,t,n,i,r,o){const l=i.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new WeakMap;let f;const m=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(F,L){return g?new OffscreenCanvas(F,L):Lo("canvas")}function w(F,L,Z,ue){let re=1;if((F.width>ue||F.height>ue)&&(re=ue/Math.max(F.width,F.height)),re<1||L===!0)if(typeof HTMLImageElement!="undefined"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&F instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&F instanceof ImageBitmap){const ce=L?Ja:Math.floor,Pe=ce(re*F.width),xe=ce(re*F.height);f===void 0&&(f=b(Pe,xe));const Me=Z?b(Pe,xe):f;return Me.width=Pe,Me.height=xe,Me.getContext("2d").drawImage(F,0,0,Pe,xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+F.width+"x"+F.height+") to ("+Pe+"x"+xe+")."),Me}else return"data"in F&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+F.width+"x"+F.height+")."),F;return F}function x(F){return Zc(F.width)&&Zc(F.height)}function v(F){return l?!1:F.wrapS!==dn||F.wrapT!==dn||F.minFilter!==ft&&F.minFilter!==xt}function M(F,L){return F.generateMipmaps&&L&&F.minFilter!==ft&&F.minFilter!==xt}function y(F){s.generateMipmap(F)}function S(F,L,Z,ue,re=!1){if(l===!1)return L;if(F!==null){if(s[F]!==void 0)return s[F];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let ce=L;if(L===s.RED&&(Z===s.FLOAT&&(ce=s.R32F),Z===s.HALF_FLOAT&&(ce=s.R16F),Z===s.UNSIGNED_BYTE&&(ce=s.R8)),L===s.RED_INTEGER&&(Z===s.UNSIGNED_BYTE&&(ce=s.R8UI),Z===s.UNSIGNED_SHORT&&(ce=s.R16UI),Z===s.UNSIGNED_INT&&(ce=s.R32UI),Z===s.BYTE&&(ce=s.R8I),Z===s.SHORT&&(ce=s.R16I),Z===s.INT&&(ce=s.R32I)),L===s.RG&&(Z===s.FLOAT&&(ce=s.RG32F),Z===s.HALF_FLOAT&&(ce=s.RG16F),Z===s.UNSIGNED_BYTE&&(ce=s.RG8)),L===s.RGBA){const Pe=re?Ka:mt.getTransfer(ue);Z===s.FLOAT&&(ce=s.RGBA32F),Z===s.HALF_FLOAT&&(ce=s.RGBA16F),Z===s.UNSIGNED_BYTE&&(ce=Pe===Ct?s.SRGB8_ALPHA8:s.RGBA8),Z===s.UNSIGNED_SHORT_4_4_4_4&&(ce=s.RGBA4),Z===s.UNSIGNED_SHORT_5_5_5_1&&(ce=s.RGB5_A1)}return(ce===s.R16F||ce===s.R32F||ce===s.RG16F||ce===s.RG32F||ce===s.RGBA16F||ce===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function C(F,L,Z){return M(F,Z)===!0||F.isFramebufferTexture&&F.minFilter!==ft&&F.minFilter!==xt?Math.log2(Math.max(L.width,L.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?L.mipmaps.length:1}function P(F){return F===ft||F===jc||F===mr?s.NEAREST:s.LINEAR}function T(F){const L=F.target;L.removeEventListener("dispose",T),B(L),L.isVideoTexture&&d.delete(L)}function I(F){const L=F.target;L.removeEventListener("dispose",I),R(L)}function B(F){const L=n.get(F);if(L.__webglInit===void 0)return;const Z=F.source,ue=m.get(Z);if(ue){const re=ue[L.__cacheKey];re.usedTimes--,re.usedTimes===0&&E(F),Object.keys(ue).length===0&&m.delete(Z)}n.remove(F)}function E(F){const L=n.get(F);s.deleteTexture(L.__webglTexture);const Z=F.source,ue=m.get(Z);delete ue[L.__cacheKey],o.memory.textures--}function R(F){const L=F.texture,Z=n.get(F),ue=n.get(L);if(ue.__webglTexture!==void 0&&(s.deleteTexture(ue.__webglTexture),o.memory.textures--),F.depthTexture&&F.depthTexture.dispose(),F.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(Z.__webglFramebuffer[re]))for(let ce=0;ce<Z.__webglFramebuffer[re].length;ce++)s.deleteFramebuffer(Z.__webglFramebuffer[re][ce]);else s.deleteFramebuffer(Z.__webglFramebuffer[re]);Z.__webglDepthbuffer&&s.deleteRenderbuffer(Z.__webglDepthbuffer[re])}else{if(Array.isArray(Z.__webglFramebuffer))for(let re=0;re<Z.__webglFramebuffer.length;re++)s.deleteFramebuffer(Z.__webglFramebuffer[re]);else s.deleteFramebuffer(Z.__webglFramebuffer);if(Z.__webglDepthbuffer&&s.deleteRenderbuffer(Z.__webglDepthbuffer),Z.__webglMultisampledFramebuffer&&s.deleteFramebuffer(Z.__webglMultisampledFramebuffer),Z.__webglColorRenderbuffer)for(let re=0;re<Z.__webglColorRenderbuffer.length;re++)Z.__webglColorRenderbuffer[re]&&s.deleteRenderbuffer(Z.__webglColorRenderbuffer[re]);Z.__webglDepthRenderbuffer&&s.deleteRenderbuffer(Z.__webglDepthRenderbuffer)}if(F.isWebGLMultipleRenderTargets)for(let re=0,ce=L.length;re<ce;re++){const Pe=n.get(L[re]);Pe.__webglTexture&&(s.deleteTexture(Pe.__webglTexture),o.memory.textures--),n.remove(L[re])}n.remove(L),n.remove(F)}let k=0;function W(){k=0}function U(){const F=k;return F>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+F+" texture units while this GPU supports only "+i.maxTextures),k+=1,F}function H(F){const L=[];return L.push(F.wrapS),L.push(F.wrapT),L.push(F.wrapR||0),L.push(F.magFilter),L.push(F.minFilter),L.push(F.anisotropy),L.push(F.internalFormat),L.push(F.format),L.push(F.type),L.push(F.generateMipmaps),L.push(F.premultiplyAlpha),L.push(F.flipY),L.push(F.unpackAlignment),L.push(F.colorSpace),L.join()}function G(F,L){const Z=n.get(F);if(F.isVideoTexture&&ct(F),F.isRenderTargetTexture===!1&&F.version>0&&Z.__version!==F.version){const ue=F.image;if(ue===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ue.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{se(Z,F,L);return}}t.bindTexture(s.TEXTURE_2D,Z.__webglTexture,s.TEXTURE0+L)}function X(F,L){const Z=n.get(F);if(F.version>0&&Z.__version!==F.version){se(Z,F,L);return}t.bindTexture(s.TEXTURE_2D_ARRAY,Z.__webglTexture,s.TEXTURE0+L)}function Q(F,L){const Z=n.get(F);if(F.version>0&&Z.__version!==F.version){se(Z,F,L);return}t.bindTexture(s.TEXTURE_3D,Z.__webglTexture,s.TEXTURE0+L)}function K(F,L){const Z=n.get(F);if(F.version>0&&Z.__version!==F.version){_e(Z,F,L);return}t.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture,s.TEXTURE0+L)}const ie={[Sr]:s.REPEAT,[dn]:s.CLAMP_TO_EDGE,[Ya]:s.MIRRORED_REPEAT},ne={[ft]:s.NEAREST,[jc]:s.NEAREST_MIPMAP_NEAREST,[mr]:s.NEAREST_MIPMAP_LINEAR,[xt]:s.LINEAR,[Va]:s.LINEAR_MIPMAP_NEAREST,[Si]:s.LINEAR_MIPMAP_LINEAR},me={[ex]:s.NEVER,[ox]:s.ALWAYS,[tx]:s.LESS,[lm]:s.LEQUAL,[nx]:s.EQUAL,[rx]:s.GEQUAL,[ix]:s.GREATER,[sx]:s.NOTEQUAL};function he(F,L,Z){if(L.type===yt&&e.has("OES_texture_float_linear")===!1&&(L.magFilter===xt||L.magFilter===Va||L.magFilter===mr||L.magFilter===Si||L.minFilter===xt||L.minFilter===Va||L.minFilter===mr||L.minFilter===Si)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),Z?(s.texParameteri(F,s.TEXTURE_WRAP_S,ie[L.wrapS]),s.texParameteri(F,s.TEXTURE_WRAP_T,ie[L.wrapT]),(F===s.TEXTURE_3D||F===s.TEXTURE_2D_ARRAY)&&s.texParameteri(F,s.TEXTURE_WRAP_R,ie[L.wrapR]),s.texParameteri(F,s.TEXTURE_MAG_FILTER,ne[L.magFilter]),s.texParameteri(F,s.TEXTURE_MIN_FILTER,ne[L.minFilter])):(s.texParameteri(F,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(F,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(F===s.TEXTURE_3D||F===s.TEXTURE_2D_ARRAY)&&s.texParameteri(F,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(L.wrapS!==dn||L.wrapT!==dn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(F,s.TEXTURE_MAG_FILTER,P(L.magFilter)),s.texParameteri(F,s.TEXTURE_MIN_FILTER,P(L.minFilter)),L.minFilter!==ft&&L.minFilter!==xt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),L.compareFunction&&(s.texParameteri(F,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(F,s.TEXTURE_COMPARE_FUNC,me[L.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ue=e.get("EXT_texture_filter_anisotropic");if(L.magFilter===ft||L.minFilter!==mr&&L.minFilter!==Si||L.type===yt&&e.has("OES_texture_float_linear")===!1||l===!1&&L.type===zn&&e.has("OES_texture_half_float_linear")===!1)return;(L.anisotropy>1||n.get(L).__currentAnisotropy)&&(s.texParameterf(F,ue.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(L.anisotropy,i.getMaxAnisotropy())),n.get(L).__currentAnisotropy=L.anisotropy)}}function q(F,L){let Z=!1;F.__webglInit===void 0&&(F.__webglInit=!0,L.addEventListener("dispose",T));const ue=L.source;let re=m.get(ue);re===void 0&&(re={},m.set(ue,re));const ce=H(L);if(ce!==F.__cacheKey){re[ce]===void 0&&(re[ce]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,Z=!0),re[ce].usedTimes++;const Pe=re[F.__cacheKey];Pe!==void 0&&(re[F.__cacheKey].usedTimes--,Pe.usedTimes===0&&E(L)),F.__cacheKey=ce,F.__webglTexture=re[ce].texture}return Z}function se(F,L,Z){let ue=s.TEXTURE_2D;(L.isDataArrayTexture||L.isCompressedArrayTexture)&&(ue=s.TEXTURE_2D_ARRAY),L.isData3DTexture&&(ue=s.TEXTURE_3D);const re=q(F,L),ce=L.source;t.bindTexture(ue,F.__webglTexture,s.TEXTURE0+Z);const Pe=n.get(ce);if(ce.version!==Pe.__version||re===!0){t.activeTexture(s.TEXTURE0+Z);const xe=mt.getPrimaries(mt.workingColorSpace),Me=L.colorSpace===On?null:mt.getPrimaries(L.colorSpace),ze=L.colorSpace===On||xe===Me?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,L.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,L.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze);const We=v(L)&&x(L.image)===!1;let ae=w(L.image,We,!1,i.maxTextureSize);ae=Ve(L,ae);const st=x(ae)||l,Je=r.convert(L.format,L.colorSpace);let je=r.convert(L.type),Le=S(L.internalFormat,Je,je,L.colorSpace,L.isVideoTexture);he(ue,L,st);let we;const $e=L.mipmaps,V=l&&L.isVideoTexture!==!0&&Le!==sm,pe=Pe.__version===void 0||re===!0,be=ce.dataReady,Ie=C(L,ae,st);if(L.isDepthTexture)Le=s.DEPTH_COMPONENT,l?L.type===yt?Le=s.DEPTH_COMPONENT32F:L.type===Cn?Le=s.DEPTH_COMPONENT24:L.type===ys?Le=s.DEPTH24_STENCIL8:Le=s.DEPTH_COMPONENT16:L.type===yt&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),L.format===ws&&Le===s.DEPTH_COMPONENT&&L.type!==il&&L.type!==Cn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),L.type=Cn,je=r.convert(L.type)),L.format===Tr&&Le===s.DEPTH_COMPONENT&&(Le=s.DEPTH_STENCIL,L.type!==ys&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),L.type=ys,je=r.convert(L.type))),pe&&(V?t.texStorage2D(s.TEXTURE_2D,1,Le,ae.width,ae.height):t.texImage2D(s.TEXTURE_2D,0,Le,ae.width,ae.height,0,Je,je,null));else if(L.isDataTexture)if($e.length>0&&st){V&&pe&&t.texStorage2D(s.TEXTURE_2D,Ie,Le,$e[0].width,$e[0].height);for(let O=0,oe=$e.length;O<oe;O++)we=$e[O],V?be&&t.texSubImage2D(s.TEXTURE_2D,O,0,0,we.width,we.height,Je,je,we.data):t.texImage2D(s.TEXTURE_2D,O,Le,we.width,we.height,0,Je,je,we.data);L.generateMipmaps=!1}else V?(pe&&t.texStorage2D(s.TEXTURE_2D,Ie,Le,ae.width,ae.height),be&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ae.width,ae.height,Je,je,ae.data)):t.texImage2D(s.TEXTURE_2D,0,Le,ae.width,ae.height,0,Je,je,ae.data);else if(L.isCompressedTexture)if(L.isCompressedArrayTexture){V&&pe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ie,Le,$e[0].width,$e[0].height,ae.depth);for(let O=0,oe=$e.length;O<oe;O++)we=$e[O],L.format!==Xt?Je!==null?V?be&&t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,O,0,0,0,we.width,we.height,ae.depth,Je,we.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,O,Le,we.width,we.height,ae.depth,0,we.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):V?be&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,O,0,0,0,we.width,we.height,ae.depth,Je,je,we.data):t.texImage3D(s.TEXTURE_2D_ARRAY,O,Le,we.width,we.height,ae.depth,0,Je,je,we.data)}else{V&&pe&&t.texStorage2D(s.TEXTURE_2D,Ie,Le,$e[0].width,$e[0].height);for(let O=0,oe=$e.length;O<oe;O++)we=$e[O],L.format!==Xt?Je!==null?V?be&&t.compressedTexSubImage2D(s.TEXTURE_2D,O,0,0,we.width,we.height,Je,we.data):t.compressedTexImage2D(s.TEXTURE_2D,O,Le,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):V?be&&t.texSubImage2D(s.TEXTURE_2D,O,0,0,we.width,we.height,Je,je,we.data):t.texImage2D(s.TEXTURE_2D,O,Le,we.width,we.height,0,Je,je,we.data)}else if(L.isDataArrayTexture)V?(pe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ie,Le,ae.width,ae.height,ae.depth),be&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,Je,je,ae.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,Le,ae.width,ae.height,ae.depth,0,Je,je,ae.data);else if(L.isData3DTexture)V?(pe&&t.texStorage3D(s.TEXTURE_3D,Ie,Le,ae.width,ae.height,ae.depth),be&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,Je,je,ae.data)):t.texImage3D(s.TEXTURE_3D,0,Le,ae.width,ae.height,ae.depth,0,Je,je,ae.data);else if(L.isFramebufferTexture){if(pe)if(V)t.texStorage2D(s.TEXTURE_2D,Ie,Le,ae.width,ae.height);else{let O=ae.width,oe=ae.height;for(let le=0;le<Ie;le++)t.texImage2D(s.TEXTURE_2D,le,Le,O,oe,0,Je,je,null),O>>=1,oe>>=1}}else if($e.length>0&&st){V&&pe&&t.texStorage2D(s.TEXTURE_2D,Ie,Le,$e[0].width,$e[0].height);for(let O=0,oe=$e.length;O<oe;O++)we=$e[O],V?be&&t.texSubImage2D(s.TEXTURE_2D,O,0,0,Je,je,we):t.texImage2D(s.TEXTURE_2D,O,Le,Je,je,we);L.generateMipmaps=!1}else V?(pe&&t.texStorage2D(s.TEXTURE_2D,Ie,Le,ae.width,ae.height),be&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Je,je,ae)):t.texImage2D(s.TEXTURE_2D,0,Le,Je,je,ae);M(L,st)&&y(ue),Pe.__version=ce.version,L.onUpdate&&L.onUpdate(L)}F.__version=L.version}function _e(F,L,Z){if(L.image.length!==6)return;const ue=q(F,L),re=L.source;t.bindTexture(s.TEXTURE_CUBE_MAP,F.__webglTexture,s.TEXTURE0+Z);const ce=n.get(re);if(re.version!==ce.__version||ue===!0){t.activeTexture(s.TEXTURE0+Z);const Pe=mt.getPrimaries(mt.workingColorSpace),xe=L.colorSpace===On?null:mt.getPrimaries(L.colorSpace),Me=L.colorSpace===On||Pe===xe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,L.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,L.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);const ze=L.isCompressedTexture||L.image[0].isCompressedTexture,We=L.image[0]&&L.image[0].isDataTexture,ae=[];for(let O=0;O<6;O++)!ze&&!We?ae[O]=w(L.image[O],!1,!0,i.maxCubemapSize):ae[O]=We?L.image[O].image:L.image[O],ae[O]=Ve(L,ae[O]);const st=ae[0],Je=x(st)||l,je=r.convert(L.format,L.colorSpace),Le=r.convert(L.type),we=S(L.internalFormat,je,Le,L.colorSpace),$e=l&&L.isVideoTexture!==!0,V=ce.__version===void 0||ue===!0,pe=re.dataReady;let be=C(L,st,Je);he(s.TEXTURE_CUBE_MAP,L,Je);let Ie;if(ze){$e&&V&&t.texStorage2D(s.TEXTURE_CUBE_MAP,be,we,st.width,st.height);for(let O=0;O<6;O++){Ie=ae[O].mipmaps;for(let oe=0;oe<Ie.length;oe++){const le=Ie[oe];L.format!==Xt?je!==null?$e?pe&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,oe,0,0,le.width,le.height,je,le.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,oe,we,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$e?pe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,oe,0,0,le.width,le.height,je,Le,le.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,oe,we,le.width,le.height,0,je,Le,le.data)}}}else{Ie=L.mipmaps,$e&&V&&(Ie.length>0&&be++,t.texStorage2D(s.TEXTURE_CUBE_MAP,be,we,ae[0].width,ae[0].height));for(let O=0;O<6;O++)if(We){$e?pe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,0,0,ae[O].width,ae[O].height,je,Le,ae[O].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,we,ae[O].width,ae[O].height,0,je,Le,ae[O].data);for(let oe=0;oe<Ie.length;oe++){const Se=Ie[oe].image[O].image;$e?pe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,oe+1,0,0,Se.width,Se.height,je,Le,Se.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,oe+1,we,Se.width,Se.height,0,je,Le,Se.data)}}else{$e?pe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,0,0,je,Le,ae[O]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,we,je,Le,ae[O]);for(let oe=0;oe<Ie.length;oe++){const le=Ie[oe];$e?pe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,oe+1,0,0,je,Le,le.image[O]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,oe+1,we,je,Le,le.image[O])}}}M(L,Je)&&y(s.TEXTURE_CUBE_MAP),ce.__version=re.version,L.onUpdate&&L.onUpdate(L)}F.__version=L.version}function ye(F,L,Z,ue,re,ce){const Pe=r.convert(Z.format,Z.colorSpace),xe=r.convert(Z.type),Me=S(Z.internalFormat,Pe,xe,Z.colorSpace);if(!n.get(L).__hasExternalTextures){const We=Math.max(1,L.width>>ce),ae=Math.max(1,L.height>>ce);re===s.TEXTURE_3D||re===s.TEXTURE_2D_ARRAY?t.texImage3D(re,ce,Me,We,ae,L.depth,0,Pe,xe,null):t.texImage2D(re,ce,Me,We,ae,0,Pe,xe,null)}t.bindFramebuffer(s.FRAMEBUFFER,F),Ae(L)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ue,re,n.get(Z).__webglTexture,0,ke(L)):(re===s.TEXTURE_2D||re>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ue,re,n.get(Z).__webglTexture,ce),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Te(F,L,Z){if(s.bindRenderbuffer(s.RENDERBUFFER,F),L.depthBuffer&&!L.stencilBuffer){let ue=l===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(Z||Ae(L)){const re=L.depthTexture;re&&re.isDepthTexture&&(re.type===yt?ue=s.DEPTH_COMPONENT32F:re.type===Cn&&(ue=s.DEPTH_COMPONENT24));const ce=ke(L);Ae(L)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ce,ue,L.width,L.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,ce,ue,L.width,L.height)}else s.renderbufferStorage(s.RENDERBUFFER,ue,L.width,L.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,F)}else if(L.depthBuffer&&L.stencilBuffer){const ue=ke(L);Z&&Ae(L)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ue,s.DEPTH24_STENCIL8,L.width,L.height):Ae(L)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ue,s.DEPTH24_STENCIL8,L.width,L.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,F)}else{const ue=L.isWebGLMultipleRenderTargets===!0?L.texture:[L.texture];for(let re=0;re<ue.length;re++){const ce=ue[re],Pe=r.convert(ce.format,ce.colorSpace),xe=r.convert(ce.type),Me=S(ce.internalFormat,Pe,xe,ce.colorSpace),ze=ke(L);Z&&Ae(L)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ze,Me,L.width,L.height):Ae(L)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ze,Me,L.width,L.height):s.renderbufferStorage(s.RENDERBUFFER,Me,L.width,L.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ve(F,L){if(L&&L.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,F),!(L.depthTexture&&L.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(L.depthTexture).__webglTexture||L.depthTexture.image.width!==L.width||L.depthTexture.image.height!==L.height)&&(L.depthTexture.image.width=L.width,L.depthTexture.image.height=L.height,L.depthTexture.needsUpdate=!0),G(L.depthTexture,0);const ue=n.get(L.depthTexture).__webglTexture,re=ke(L);if(L.depthTexture.format===ws)Ae(L)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ue,0,re):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ue,0);else if(L.depthTexture.format===Tr)Ae(L)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ue,0,re):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ue,0);else throw new Error("Unknown depthTexture format")}function Ue(F){const L=n.get(F),Z=F.isWebGLCubeRenderTarget===!0;if(F.depthTexture&&!L.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");ve(L.__webglFramebuffer,F)}else if(Z){L.__webglDepthbuffer=[];for(let ue=0;ue<6;ue++)t.bindFramebuffer(s.FRAMEBUFFER,L.__webglFramebuffer[ue]),L.__webglDepthbuffer[ue]=s.createRenderbuffer(),Te(L.__webglDepthbuffer[ue],F,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,L.__webglFramebuffer),L.__webglDepthbuffer=s.createRenderbuffer(),Te(L.__webglDepthbuffer,F,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ne(F,L,Z){const ue=n.get(F);L!==void 0&&ye(ue.__webglFramebuffer,F,F.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Z!==void 0&&Ue(F)}function j(F){const L=F.texture,Z=n.get(F),ue=n.get(L);F.addEventListener("dispose",I),F.isWebGLMultipleRenderTargets!==!0&&(ue.__webglTexture===void 0&&(ue.__webglTexture=s.createTexture()),ue.__version=L.version,o.memory.textures++);const re=F.isWebGLCubeRenderTarget===!0,ce=F.isWebGLMultipleRenderTargets===!0,Pe=x(F)||l;if(re){Z.__webglFramebuffer=[];for(let xe=0;xe<6;xe++)if(l&&L.mipmaps&&L.mipmaps.length>0){Z.__webglFramebuffer[xe]=[];for(let Me=0;Me<L.mipmaps.length;Me++)Z.__webglFramebuffer[xe][Me]=s.createFramebuffer()}else Z.__webglFramebuffer[xe]=s.createFramebuffer()}else{if(l&&L.mipmaps&&L.mipmaps.length>0){Z.__webglFramebuffer=[];for(let xe=0;xe<L.mipmaps.length;xe++)Z.__webglFramebuffer[xe]=s.createFramebuffer()}else Z.__webglFramebuffer=s.createFramebuffer();if(ce)if(i.drawBuffers){const xe=F.texture;for(let Me=0,ze=xe.length;Me<ze;Me++){const We=n.get(xe[Me]);We.__webglTexture===void 0&&(We.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(l&&F.samples>0&&Ae(F)===!1){const xe=ce?L:[L];Z.__webglMultisampledFramebuffer=s.createFramebuffer(),Z.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let Me=0;Me<xe.length;Me++){const ze=xe[Me];Z.__webglColorRenderbuffer[Me]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Z.__webglColorRenderbuffer[Me]);const We=r.convert(ze.format,ze.colorSpace),ae=r.convert(ze.type),st=S(ze.internalFormat,We,ae,ze.colorSpace,F.isXRRenderTarget===!0),Je=ke(F);s.renderbufferStorageMultisample(s.RENDERBUFFER,Je,st,F.width,F.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Me,s.RENDERBUFFER,Z.__webglColorRenderbuffer[Me])}s.bindRenderbuffer(s.RENDERBUFFER,null),F.depthBuffer&&(Z.__webglDepthRenderbuffer=s.createRenderbuffer(),Te(Z.__webglDepthRenderbuffer,F,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(re){t.bindTexture(s.TEXTURE_CUBE_MAP,ue.__webglTexture),he(s.TEXTURE_CUBE_MAP,L,Pe);for(let xe=0;xe<6;xe++)if(l&&L.mipmaps&&L.mipmaps.length>0)for(let Me=0;Me<L.mipmaps.length;Me++)ye(Z.__webglFramebuffer[xe][Me],F,L,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Me);else ye(Z.__webglFramebuffer[xe],F,L,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0);M(L,Pe)&&y(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ce){const xe=F.texture;for(let Me=0,ze=xe.length;Me<ze;Me++){const We=xe[Me],ae=n.get(We);t.bindTexture(s.TEXTURE_2D,ae.__webglTexture),he(s.TEXTURE_2D,We,Pe),ye(Z.__webglFramebuffer,F,We,s.COLOR_ATTACHMENT0+Me,s.TEXTURE_2D,0),M(We,Pe)&&y(s.TEXTURE_2D)}t.unbindTexture()}else{let xe=s.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(l?xe=F.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(xe,ue.__webglTexture),he(xe,L,Pe),l&&L.mipmaps&&L.mipmaps.length>0)for(let Me=0;Me<L.mipmaps.length;Me++)ye(Z.__webglFramebuffer[Me],F,L,s.COLOR_ATTACHMENT0,xe,Me);else ye(Z.__webglFramebuffer,F,L,s.COLOR_ATTACHMENT0,xe,0);M(L,Pe)&&y(xe),t.unbindTexture()}F.depthBuffer&&Ue(F)}function St(F){const L=x(F)||l,Z=F.isWebGLMultipleRenderTargets===!0?F.texture:[F.texture];for(let ue=0,re=Z.length;ue<re;ue++){const ce=Z[ue];if(M(ce,L)){const Pe=F.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,xe=n.get(ce).__webglTexture;t.bindTexture(Pe,xe),y(Pe),t.unbindTexture()}}}function Ce(F){if(l&&F.samples>0&&Ae(F)===!1){const L=F.isWebGLMultipleRenderTargets?F.texture:[F.texture],Z=F.width,ue=F.height;let re=s.COLOR_BUFFER_BIT;const ce=[],Pe=F.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,xe=n.get(F),Me=F.isWebGLMultipleRenderTargets===!0;if(Me)for(let ze=0;ze<L.length;ze++)t.bindFramebuffer(s.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ze,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,xe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ze,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let ze=0;ze<L.length;ze++){ce.push(s.COLOR_ATTACHMENT0+ze),F.depthBuffer&&ce.push(Pe);const We=xe.__ignoreDepthValues!==void 0?xe.__ignoreDepthValues:!1;if(We===!1&&(F.depthBuffer&&(re|=s.DEPTH_BUFFER_BIT),F.stencilBuffer&&(re|=s.STENCIL_BUFFER_BIT)),Me&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,xe.__webglColorRenderbuffer[ze]),We===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[Pe]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[Pe])),Me){const ae=n.get(L[ze]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ae,0)}s.blitFramebuffer(0,0,Z,ue,0,0,Z,ue,re,s.NEAREST),u&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ce)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Me)for(let ze=0;ze<L.length;ze++){t.bindFramebuffer(s.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ze,s.RENDERBUFFER,xe.__webglColorRenderbuffer[ze]);const We=n.get(L[ze]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,xe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ze,s.TEXTURE_2D,We,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}}function ke(F){return Math.min(i.maxSamples,F.samples)}function Ae(F){const L=n.get(F);return l&&F.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&L.__useRenderToTexture!==!1}function ct(F){const L=o.render.frame;d.get(F)!==L&&(d.set(F,L),F.update())}function Ve(F,L){const Z=F.colorSpace,ue=F.format,re=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||F.format===$c||Z!==nn&&Z!==On&&(mt.getTransfer(Z)===Ct?l===!1?e.has("EXT_sRGB")===!0&&ue===Xt?(F.format=$c,F.minFilter=xt,F.generateMipmaps=!1):L=hm.sRGBToLinear(L):(ue!==Xt||re!==ri)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),L}this.allocateTextureUnit=U,this.resetTextureUnits=W,this.setTexture2D=G,this.setTexture2DArray=X,this.setTexture3D=Q,this.setTextureCube=K,this.rebindTextures=Ne,this.setupRenderTarget=j,this.updateRenderTargetMipmap=St,this.updateMultisampleRenderTarget=Ce,this.setupDepthRenderbuffer=Ue,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=Ae}function SE(s,e,t){const n=t.isWebGL2;function i(r,o=On){let l;const c=mt.getTransfer(o);if(r===ri)return s.UNSIGNED_BYTE;if(r===em)return s.UNSIGNED_SHORT_4_4_4_4;if(r===tm)return s.UNSIGNED_SHORT_5_5_5_1;if(r===qc)return s.BYTE;if(r===Jf)return s.SHORT;if(r===il)return s.UNSIGNED_SHORT;if(r===Mo)return s.INT;if(r===Cn)return s.UNSIGNED_INT;if(r===yt)return s.FLOAT;if(r===zn)return n?s.HALF_FLOAT:(l=e.get("OES_texture_half_float"),l!==null?l.HALF_FLOAT_OES:null);if(r===X_)return s.ALPHA;if(r===Xt)return s.RGBA;if(r===j_)return s.LUMINANCE;if(r===q_)return s.LUMINANCE_ALPHA;if(r===ws)return s.DEPTH_COMPONENT;if(r===Tr)return s.DEPTH_STENCIL;if(r===$c)return l=e.get("EXT_sRGB"),l!==null?l.SRGB_ALPHA_EXT:null;if(r===nm)return s.RED;if(r===Mu)return s.RED_INTEGER;if(r===im)return s.RG;if(r===sl)return s.RG_INTEGER;if(r===Po)return s.RGBA_INTEGER;if(r===zl||r===Hl||r===Gl||r===Wl)if(c===Ct)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===zl)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Hl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Gl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Wl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===zl)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Hl)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Gl)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Wl)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===ld||r===cd||r===ud||r===hd)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===ld)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===cd)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===ud)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===hd)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===sm)return l=e.get("WEBGL_compressed_texture_etc1"),l!==null?l.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===dd||r===pd)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===dd)return c===Ct?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===pd)return c===Ct?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===fd||r===md||r===gd||r===vd||r===_d||r===xd||r===bd||r===yd||r===wd||r===Md||r===Ed||r===Sd||r===Td||r===Ad)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===fd)return c===Ct?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===md)return c===Ct?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===gd)return c===Ct?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===vd)return c===Ct?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===_d)return c===Ct?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===xd)return c===Ct?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===bd)return c===Ct?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===yd)return c===Ct?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===wd)return c===Ct?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Md)return c===Ct?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Ed)return c===Ct?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Sd)return c===Ct?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Td)return c===Ct?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Ad)return c===Ct?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Xl||r===Cd||r===Pd)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===Xl)return c===Ct?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Cd)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Pd)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Y_||r===Rd||r===Ld||r===Id)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===Xl)return l.COMPRESSED_RED_RGTC1_EXT;if(r===Rd)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Ld)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Id)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ys?n?s.UNSIGNED_INT_24_8:(l=e.get("WEBGL_depth_texture"),l!==null?l.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class TE extends mn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class bs extends gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const AE={type:"move"};class mc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new bs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new bs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new bs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const l=this._targetRay,c=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const w of e.hand.values()){const x=t.getJointPose(w,n),v=this._getHandJoint(u,w);x!==null&&(v.matrix.fromArray(x.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=x.radius),v.visible=x!==null}const d=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],m=d.position.distanceTo(f.position),g=.02,b=.005;u.inputState.pinching&&m>g+b?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&m<=g-b&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));l!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(l.matrix.fromArray(i.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,i.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(i.linearVelocity)):l.hasLinearVelocity=!1,i.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(i.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(AE)))}return l!==null&&(l.visible=i!==null),c!==null&&(c.visible=r!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new bs;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const CE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,PE=`
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

}`;class RE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new qt,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}render(e,t){if(this.texture!==null){if(this.mesh===null){const n=t.cameras[0].viewport,i=new Zt({extensions:{fragDepth:!0},vertexShader:CE,fragmentShader:PE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new fe(new Ln(20,20),i)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class LE extends Cs{constructor(e,t){super();const n=this;let i=null,r=1,o=null,l="local-floor",c=1,u=null,d=null,f=null,m=null,g=null,b=null;const w=new RE,x=t.getContextAttributes();let v=null,M=null;const y=[],S=[],C=new Re;let P=null;const T=new mn;T.layers.enable(1),T.viewport=new bt;const I=new mn;I.layers.enable(2),I.viewport=new bt;const B=[T,I],E=new TE;E.layers.enable(1),E.layers.enable(2);let R=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let se=y[q];return se===void 0&&(se=new mc,y[q]=se),se.getTargetRaySpace()},this.getControllerGrip=function(q){let se=y[q];return se===void 0&&(se=new mc,y[q]=se),se.getGripSpace()},this.getHand=function(q){let se=y[q];return se===void 0&&(se=new mc,y[q]=se),se.getHandSpace()};function W(q){const se=S.indexOf(q.inputSource);if(se===-1)return;const _e=y[se];_e!==void 0&&(_e.update(q.inputSource,q.frame,u||o),_e.dispatchEvent({type:q.type,data:q.inputSource}))}function U(){i.removeEventListener("select",W),i.removeEventListener("selectstart",W),i.removeEventListener("selectend",W),i.removeEventListener("squeeze",W),i.removeEventListener("squeezestart",W),i.removeEventListener("squeezeend",W),i.removeEventListener("end",U),i.removeEventListener("inputsourceschange",H);for(let q=0;q<y.length;q++){const se=S[q];se!==null&&(S[q]=null,y[q].disconnect(se))}R=null,k=null,w.reset(),e.setRenderTarget(v),g=null,m=null,f=null,i=null,M=null,he.stop(),n.isPresenting=!1,e.setPixelRatio(P),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){l=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(q){u=q},this.getBaseLayer=function(){return m!==null?m:g},this.getBinding=function(){return f},this.getFrame=function(){return b},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(v=e.getRenderTarget(),i.addEventListener("select",W),i.addEventListener("selectstart",W),i.addEventListener("selectend",W),i.addEventListener("squeeze",W),i.addEventListener("squeezestart",W),i.addEventListener("squeezeend",W),i.addEventListener("end",U),i.addEventListener("inputsourceschange",H),x.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(C),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const se={antialias:i.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};g=new XRWebGLLayer(i,t,se),i.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),M=new En(g.framebufferWidth,g.framebufferHeight,{format:Xt,type:ri,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let se=null,_e=null,ye=null;x.depth&&(ye=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,se=x.stencil?Tr:ws,_e=x.stencil?ys:Cn);const Te={colorFormat:t.RGBA8,depthFormat:ye,scaleFactor:r};f=new XRWebGLBinding(i,t),m=f.createProjectionLayer(Te),i.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),M=new En(m.textureWidth,m.textureHeight,{format:Xt,type:ri,depthTexture:new ym(m.textureWidth,m.textureHeight,_e,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});const ve=e.properties.get(M);ve.__ignoreDepthValues=m.ignoreDepthValues}M.isXRRenderTarget=!0,this.setFoveation(c),u=null,o=await i.requestReferenceSpace(l),he.setContext(i),he.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function H(q){for(let se=0;se<q.removed.length;se++){const _e=q.removed[se],ye=S.indexOf(_e);ye>=0&&(S[ye]=null,y[ye].disconnect(_e))}for(let se=0;se<q.added.length;se++){const _e=q.added[se];let ye=S.indexOf(_e);if(ye===-1){for(let ve=0;ve<y.length;ve++)if(ve>=S.length){S.push(_e),ye=ve;break}else if(S[ve]===null){S[ve]=_e,ye=ve;break}if(ye===-1)break}const Te=y[ye];Te&&Te.connect(_e)}}const G=new D,X=new D;function Q(q,se,_e){G.setFromMatrixPosition(se.matrixWorld),X.setFromMatrixPosition(_e.matrixWorld);const ye=G.distanceTo(X),Te=se.projectionMatrix.elements,ve=_e.projectionMatrix.elements,Ue=Te[14]/(Te[10]-1),Ne=Te[14]/(Te[10]+1),j=(Te[9]+1)/Te[5],St=(Te[9]-1)/Te[5],Ce=(Te[8]-1)/Te[0],ke=(ve[8]+1)/ve[0],Ae=Ue*Ce,ct=Ue*ke,Ve=ye/(-Ce+ke),F=Ve*-Ce;se.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(F),q.translateZ(Ve),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert();const L=Ue+Ve,Z=Ne+Ve,ue=Ae-F,re=ct+(ye-F),ce=j*Ne/Z*L,Pe=St*Ne/Z*L;q.projectionMatrix.makePerspective(ue,re,ce,Pe,L,Z),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}function K(q,se){se===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(se.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;w.texture!==null&&(q.near=w.depthNear,q.far=w.depthFar),E.near=I.near=T.near=q.near,E.far=I.far=T.far=q.far,(R!==E.near||k!==E.far)&&(i.updateRenderState({depthNear:E.near,depthFar:E.far}),R=E.near,k=E.far,T.near=R,T.far=k,I.near=R,I.far=k,T.updateProjectionMatrix(),I.updateProjectionMatrix(),q.updateProjectionMatrix());const se=q.parent,_e=E.cameras;K(E,se);for(let ye=0;ye<_e.length;ye++)K(_e[ye],se);_e.length===2?Q(E,T,I):E.projectionMatrix.copy(T.projectionMatrix),ie(q,E,se)};function ie(q,se,_e){_e===null?q.matrix.copy(se.matrixWorld):(q.matrix.copy(_e.matrixWorld),q.matrix.invert(),q.matrix.multiply(se.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(se.projectionMatrix),q.projectionMatrixInverse.copy(se.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Cr*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(m===null&&g===null))return c},this.setFoveation=function(q){c=q,m!==null&&(m.fixedFoveation=q),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=q)},this.hasDepthSensing=function(){return w.texture!==null};let ne=null;function me(q,se){if(d=se.getViewerPose(u||o),b=se,d!==null){const _e=d.views;g!==null&&(e.setRenderTargetFramebuffer(M,g.framebuffer),e.setRenderTarget(M));let ye=!1;_e.length!==E.cameras.length&&(E.cameras.length=0,ye=!0);for(let ve=0;ve<_e.length;ve++){const Ue=_e[ve];let Ne=null;if(g!==null)Ne=g.getViewport(Ue);else{const St=f.getViewSubImage(m,Ue);Ne=St.viewport,ve===0&&(e.setRenderTargetTextures(M,St.colorTexture,m.ignoreDepthValues?void 0:St.depthStencilTexture),e.setRenderTarget(M))}let j=B[ve];j===void 0&&(j=new mn,j.layers.enable(ve),j.viewport=new bt,B[ve]=j),j.matrix.fromArray(Ue.transform.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale),j.projectionMatrix.fromArray(Ue.projectionMatrix),j.projectionMatrixInverse.copy(j.projectionMatrix).invert(),j.viewport.set(Ne.x,Ne.y,Ne.width,Ne.height),ve===0&&(E.matrix.copy(j.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),ye===!0&&E.cameras.push(j)}const Te=i.enabledFeatures;if(Te&&Te.includes("depth-sensing")){const ve=f.getDepthInformation(_e[0]);ve&&ve.isValid&&ve.texture&&w.init(e,ve,i.renderState)}}for(let _e=0;_e<y.length;_e++){const ye=S[_e],Te=y[_e];ye!==null&&Te!==void 0&&Te.update(ye,se,u||o)}w.render(e,E),ne&&ne(q,se),se.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:se}),b=null}const he=new bm;he.setAnimationLoop(me),this.setAnimationLoop=function(q){ne=q},this.dispose=function(){}}}function IE(s,e){function t(x,v){x.matrixAutoUpdate===!0&&x.updateMatrix(),v.value.copy(x.matrix)}function n(x,v){v.color.getRGB(x.fogColor.value,vm(s)),v.isFog?(x.fogNear.value=v.near,x.fogFar.value=v.far):v.isFogExp2&&(x.fogDensity.value=v.density)}function i(x,v,M,y,S){v.isMeshBasicMaterial||v.isMeshLambertMaterial?r(x,v):v.isMeshToonMaterial?(r(x,v),f(x,v)):v.isMeshPhongMaterial?(r(x,v),d(x,v)):v.isMeshStandardMaterial?(r(x,v),m(x,v),v.isMeshPhysicalMaterial&&g(x,v,S)):v.isMeshMatcapMaterial?(r(x,v),b(x,v)):v.isMeshDepthMaterial?r(x,v):v.isMeshDistanceMaterial?(r(x,v),w(x,v)):v.isMeshNormalMaterial?r(x,v):v.isLineBasicMaterial?(o(x,v),v.isLineDashedMaterial&&l(x,v)):v.isPointsMaterial?c(x,v,M,y):v.isSpriteMaterial?u(x,v):v.isShadowMaterial?(x.color.value.copy(v.color),x.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function r(x,v){x.opacity.value=v.opacity,v.color&&x.diffuse.value.copy(v.color),v.emissive&&x.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(x.map.value=v.map,t(v.map,x.mapTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,t(v.alphaMap,x.alphaMapTransform)),v.bumpMap&&(x.bumpMap.value=v.bumpMap,t(v.bumpMap,x.bumpMapTransform),x.bumpScale.value=v.bumpScale,v.side===bn&&(x.bumpScale.value*=-1)),v.normalMap&&(x.normalMap.value=v.normalMap,t(v.normalMap,x.normalMapTransform),x.normalScale.value.copy(v.normalScale),v.side===bn&&x.normalScale.value.negate()),v.displacementMap&&(x.displacementMap.value=v.displacementMap,t(v.displacementMap,x.displacementMapTransform),x.displacementScale.value=v.displacementScale,x.displacementBias.value=v.displacementBias),v.emissiveMap&&(x.emissiveMap.value=v.emissiveMap,t(v.emissiveMap,x.emissiveMapTransform)),v.specularMap&&(x.specularMap.value=v.specularMap,t(v.specularMap,x.specularMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest);const M=e.get(v).envMap;if(M&&(x.envMap.value=M,x.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=v.reflectivity,x.ior.value=v.ior,x.refractionRatio.value=v.refractionRatio),v.lightMap){x.lightMap.value=v.lightMap;const y=s._useLegacyLights===!0?Math.PI:1;x.lightMapIntensity.value=v.lightMapIntensity*y,t(v.lightMap,x.lightMapTransform)}v.aoMap&&(x.aoMap.value=v.aoMap,x.aoMapIntensity.value=v.aoMapIntensity,t(v.aoMap,x.aoMapTransform))}function o(x,v){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,v.map&&(x.map.value=v.map,t(v.map,x.mapTransform))}function l(x,v){x.dashSize.value=v.dashSize,x.totalSize.value=v.dashSize+v.gapSize,x.scale.value=v.scale}function c(x,v,M,y){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,x.size.value=v.size*M,x.scale.value=y*.5,v.map&&(x.map.value=v.map,t(v.map,x.uvTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,t(v.alphaMap,x.alphaMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest)}function u(x,v){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,x.rotation.value=v.rotation,v.map&&(x.map.value=v.map,t(v.map,x.mapTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,t(v.alphaMap,x.alphaMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest)}function d(x,v){x.specular.value.copy(v.specular),x.shininess.value=Math.max(v.shininess,1e-4)}function f(x,v){v.gradientMap&&(x.gradientMap.value=v.gradientMap)}function m(x,v){x.metalness.value=v.metalness,v.metalnessMap&&(x.metalnessMap.value=v.metalnessMap,t(v.metalnessMap,x.metalnessMapTransform)),x.roughness.value=v.roughness,v.roughnessMap&&(x.roughnessMap.value=v.roughnessMap,t(v.roughnessMap,x.roughnessMapTransform)),e.get(v).envMap&&(x.envMapIntensity.value=v.envMapIntensity)}function g(x,v,M){x.ior.value=v.ior,v.sheen>0&&(x.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),x.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(x.sheenColorMap.value=v.sheenColorMap,t(v.sheenColorMap,x.sheenColorMapTransform)),v.sheenRoughnessMap&&(x.sheenRoughnessMap.value=v.sheenRoughnessMap,t(v.sheenRoughnessMap,x.sheenRoughnessMapTransform))),v.clearcoat>0&&(x.clearcoat.value=v.clearcoat,x.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(x.clearcoatMap.value=v.clearcoatMap,t(v.clearcoatMap,x.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,t(v.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(x.clearcoatNormalMap.value=v.clearcoatNormalMap,t(v.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===bn&&x.clearcoatNormalScale.value.negate())),v.iridescence>0&&(x.iridescence.value=v.iridescence,x.iridescenceIOR.value=v.iridescenceIOR,x.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(x.iridescenceMap.value=v.iridescenceMap,t(v.iridescenceMap,x.iridescenceMapTransform)),v.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=v.iridescenceThicknessMap,t(v.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),v.transmission>0&&(x.transmission.value=v.transmission,x.transmissionSamplerMap.value=M.texture,x.transmissionSamplerSize.value.set(M.width,M.height),v.transmissionMap&&(x.transmissionMap.value=v.transmissionMap,t(v.transmissionMap,x.transmissionMapTransform)),x.thickness.value=v.thickness,v.thicknessMap&&(x.thicknessMap.value=v.thicknessMap,t(v.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=v.attenuationDistance,x.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(x.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(x.anisotropyMap.value=v.anisotropyMap,t(v.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=v.specularIntensity,x.specularColor.value.copy(v.specularColor),v.specularColorMap&&(x.specularColorMap.value=v.specularColorMap,t(v.specularColorMap,x.specularColorMapTransform)),v.specularIntensityMap&&(x.specularIntensityMap.value=v.specularIntensityMap,t(v.specularIntensityMap,x.specularIntensityMapTransform))}function b(x,v){v.matcap&&(x.matcap.value=v.matcap)}function w(x,v){const M=e.get(v).light;x.referencePosition.value.setFromMatrixPosition(M.matrixWorld),x.nearDistance.value=M.shadow.camera.near,x.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function DE(s,e,t,n){let i={},r={},o=[];const l=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(M,y){const S=y.program;n.uniformBlockBinding(M,S)}function u(M,y){let S=i[M.id];S===void 0&&(b(M),S=d(M),i[M.id]=S,M.addEventListener("dispose",x));const C=y.program;n.updateUBOMapping(M,C);const P=e.render.frame;r[M.id]!==P&&(m(M),r[M.id]=P)}function d(M){const y=f();M.__bindingPointIndex=y;const S=s.createBuffer(),C=M.__size,P=M.usage;return s.bindBuffer(s.UNIFORM_BUFFER,S),s.bufferData(s.UNIFORM_BUFFER,C,P),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,y,S),S}function f(){for(let M=0;M<l;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(M){const y=i[M.id],S=M.uniforms,C=M.__cache;s.bindBuffer(s.UNIFORM_BUFFER,y);for(let P=0,T=S.length;P<T;P++){const I=Array.isArray(S[P])?S[P]:[S[P]];for(let B=0,E=I.length;B<E;B++){const R=I[B];if(g(R,P,B,C)===!0){const k=R.__offset,W=Array.isArray(R.value)?R.value:[R.value];let U=0;for(let H=0;H<W.length;H++){const G=W[H],X=w(G);typeof G=="number"||typeof G=="boolean"?(R.__data[0]=G,s.bufferSubData(s.UNIFORM_BUFFER,k+U,R.__data)):G.isMatrix3?(R.__data[0]=G.elements[0],R.__data[1]=G.elements[1],R.__data[2]=G.elements[2],R.__data[3]=0,R.__data[4]=G.elements[3],R.__data[5]=G.elements[4],R.__data[6]=G.elements[5],R.__data[7]=0,R.__data[8]=G.elements[6],R.__data[9]=G.elements[7],R.__data[10]=G.elements[8],R.__data[11]=0):(G.toArray(R.__data,U),U+=X.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,k,R.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function g(M,y,S,C){const P=M.value,T=y+"_"+S;if(C[T]===void 0)return typeof P=="number"||typeof P=="boolean"?C[T]=P:C[T]=P.clone(),!0;{const I=C[T];if(typeof P=="number"||typeof P=="boolean"){if(I!==P)return C[T]=P,!0}else if(I.equals(P)===!1)return I.copy(P),!0}return!1}function b(M){const y=M.uniforms;let S=0;const C=16;for(let T=0,I=y.length;T<I;T++){const B=Array.isArray(y[T])?y[T]:[y[T]];for(let E=0,R=B.length;E<R;E++){const k=B[E],W=Array.isArray(k.value)?k.value:[k.value];for(let U=0,H=W.length;U<H;U++){const G=W[U],X=w(G),Q=S%C;Q!==0&&C-Q<X.boundary&&(S+=C-Q),k.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=S,S+=X.storage}}}const P=S%C;return P>0&&(S+=C-P),M.__size=S,M.__cache={},this}function w(M){const y={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(y.boundary=4,y.storage=4):M.isVector2?(y.boundary=8,y.storage=8):M.isVector3||M.isColor?(y.boundary=16,y.storage=12):M.isVector4?(y.boundary=16,y.storage=16):M.isMatrix3?(y.boundary=48,y.storage=48):M.isMatrix4?(y.boundary=64,y.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),y}function x(M){const y=M.target;y.removeEventListener("dispose",x);const S=o.indexOf(y.__bindingPointIndex);o.splice(S,1),s.deleteBuffer(i[y.id]),delete i[y.id],delete r[y.id]}function v(){for(const M in i)s.deleteBuffer(i[M]);o=[],i={},r={}}return{bind:c,update:u,dispose:v}}class Am{constructor(e={}){const{canvas:t=yx(),context:n=null,depth:i=!0,stencil:r=!0,alpha:o=!1,antialias:l=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let m;n!==null?m=n.getContextAttributes().alpha:m=o;const g=new Uint32Array(4),b=new Int32Array(4);let w=null,x=null;const v=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ot,this._useLegacyLights=!1,this.toneMapping=Qi,this.toneMappingExposure=1;const y=this;let S=!1,C=0,P=0,T=null,I=-1,B=null;const E=new bt,R=new bt;let k=null;const W=new Ge(0);let U=0,H=t.width,G=t.height,X=1,Q=null,K=null;const ie=new bt(0,0,H,G),ne=new bt(0,0,H,G);let me=!1;const he=new Au;let q=!1,se=!1,_e=null;const ye=new Xe,Te=new Re,ve=new D,Ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ne(){return T===null?X:1}let j=n;function St(N,$){for(let ee=0;ee<N.length;ee++){const te=N[ee],J=t.getContext(te,$);if(J!==null)return J}return null}try{const N={alpha:!0,depth:i,stencil:r,antialias:l,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${wu}`),t.addEventListener("webglcontextlost",Ie,!1),t.addEventListener("webglcontextrestored",O,!1),t.addEventListener("webglcontextcreationerror",oe,!1),j===null){const $=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&$.shift(),j=St($,N),j===null)throw St($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext!="undefined"&&j instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),j.getShaderPrecisionFormat===void 0&&(j.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(N){throw console.error("THREE.WebGLRenderer: "+N.message),N}let Ce,ke,Ae,ct,Ve,F,L,Z,ue,re,ce,Pe,xe,Me,ze,We,ae,st,Je,je,Le,we,$e,V;function pe(){Ce=new Vw(j),ke=new Nw(j,Ce,e),Ce.init(ke),we=new SE(j,Ce,ke),Ae=new ME(j,Ce,ke),ct=new Gw(j),Ve=new cE,F=new EE(j,Ce,Ae,Ve,ke,we,ct),L=new Fw(y),Z=new kw(y),ue=new Zx(j,ke),$e=new Iw(j,Ce,ue,ke),re=new zw(j,ue,ct,$e),ce=new qw(j,re,ue,ct),Je=new jw(j,ke,F),We=new Uw(Ve),Pe=new lE(y,L,Z,Ce,ke,$e,We),xe=new IE(y,Ve),Me=new hE,ze=new vE(Ce,ke),st=new Lw(y,L,Z,Ae,ce,m,c),ae=new wE(y,ce,ke),V=new DE(j,ct,ke,Ae),je=new Dw(j,Ce,ct,ke),Le=new Hw(j,Ce,ct,ke),ct.programs=Pe.programs,y.capabilities=ke,y.extensions=Ce,y.properties=Ve,y.renderLists=Me,y.shadowMap=ae,y.state=Ae,y.info=ct}pe();const be=new LE(y,j);this.xr=be,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){const N=Ce.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){const N=Ce.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(N){N!==void 0&&(X=N,this.setSize(H,G,!1))},this.getSize=function(N){return N.set(H,G)},this.setSize=function(N,$,ee=!0){if(be.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=N,G=$,t.width=Math.floor(N*X),t.height=Math.floor($*X),ee===!0&&(t.style.width=N+"px",t.style.height=$+"px"),this.setViewport(0,0,N,$)},this.getDrawingBufferSize=function(N){return N.set(H*X,G*X).floor()},this.setDrawingBufferSize=function(N,$,ee){H=N,G=$,X=ee,t.width=Math.floor(N*ee),t.height=Math.floor($*ee),this.setViewport(0,0,N,$)},this.getCurrentViewport=function(N){return N.copy(E)},this.getViewport=function(N){return N.copy(ie)},this.setViewport=function(N,$,ee,te){N.isVector4?ie.set(N.x,N.y,N.z,N.w):ie.set(N,$,ee,te),Ae.viewport(E.copy(ie).multiplyScalar(X).floor())},this.getScissor=function(N){return N.copy(ne)},this.setScissor=function(N,$,ee,te){N.isVector4?ne.set(N.x,N.y,N.z,N.w):ne.set(N,$,ee,te),Ae.scissor(R.copy(ne).multiplyScalar(X).floor())},this.getScissorTest=function(){return me},this.setScissorTest=function(N){Ae.setScissorTest(me=N)},this.setOpaqueSort=function(N){Q=N},this.setTransparentSort=function(N){K=N},this.getClearColor=function(N){return N.copy(st.getClearColor())},this.setClearColor=function(){st.setClearColor.apply(st,arguments)},this.getClearAlpha=function(){return st.getClearAlpha()},this.setClearAlpha=function(){st.setClearAlpha.apply(st,arguments)},this.clear=function(N=!0,$=!0,ee=!0){let te=0;if(N){let J=!1;if(T!==null){const Ee=T.texture.format;J=Ee===Po||Ee===sl||Ee===Mu}if(J){const Ee=T.texture.type,De=Ee===ri||Ee===Cn||Ee===il||Ee===ys||Ee===em||Ee===tm,He=st.getClearColor(),Be=st.getClearAlpha(),qe=He.r,Ke=He.g,Ze=He.b;De?(g[0]=qe,g[1]=Ke,g[2]=Ze,g[3]=Be,j.clearBufferuiv(j.COLOR,0,g)):(b[0]=qe,b[1]=Ke,b[2]=Ze,b[3]=Be,j.clearBufferiv(j.COLOR,0,b))}else te|=j.COLOR_BUFFER_BIT}$&&(te|=j.DEPTH_BUFFER_BIT),ee&&(te|=j.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),j.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ie,!1),t.removeEventListener("webglcontextrestored",O,!1),t.removeEventListener("webglcontextcreationerror",oe,!1),Me.dispose(),ze.dispose(),Ve.dispose(),L.dispose(),Z.dispose(),ce.dispose(),$e.dispose(),V.dispose(),Pe.dispose(),be.dispose(),be.removeEventListener("sessionstart",kt),be.removeEventListener("sessionend",ot),_e&&(_e.dispose(),_e=null),Ut.stop()};function Ie(N){N.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function O(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const N=ct.autoReset,$=ae.enabled,ee=ae.autoUpdate,te=ae.needsUpdate,J=ae.type;pe(),ct.autoReset=N,ae.enabled=$,ae.autoUpdate=ee,ae.needsUpdate=te,ae.type=J}function oe(N){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function le(N){const $=N.target;$.removeEventListener("dispose",le),Se($)}function Se(N){Oe(N),Ve.remove(N)}function Oe(N){const $=Ve.get(N).programs;$!==void 0&&($.forEach(function(ee){Pe.releaseProgram(ee)}),N.isShaderMaterial&&Pe.releaseShaderCache(N))}this.renderBufferDirect=function(N,$,ee,te,J,Ee){$===null&&($=Ue);const De=J.isMesh&&J.matrixWorld.determinant()<0,He=fl(N,$,ee,te,J);Ae.setMaterial(te,De);let Be=ee.index,qe=1;if(te.wireframe===!0){if(Be=re.getWireframeAttribute(ee),Be===void 0)return;qe=2}const Ke=ee.drawRange,Ze=ee.attributes.position;let It=Ke.start*qe,an=(Ke.start+Ke.count)*qe;Ee!==null&&(It=Math.max(It,Ee.start*qe),an=Math.min(an,(Ee.start+Ee.count)*qe)),Be!==null?(It=Math.max(It,0),an=Math.min(an,Be.count)):Ze!=null&&(It=Math.max(It,0),an=Math.min(an,Ze.count));const Vt=an-It;if(Vt<0||Vt===1/0)return;$e.setup(J,te,He,ee,Be);let In,Tt=je;if(Be!==null&&(In=ue.get(Be),Tt=Le,Tt.setIndex(In)),J.isMesh)te.wireframe===!0?(Ae.setLineWidth(te.wireframeLinewidth*Ne()),Tt.setMode(j.LINES)):Tt.setMode(j.TRIANGLES);else if(J.isLine){let Qe=te.linewidth;Qe===void 0&&(Qe=1),Ae.setLineWidth(Qe*Ne()),J.isLineSegments?Tt.setMode(j.LINES):J.isLineLoop?Tt.setMode(j.LINE_LOOP):Tt.setMode(j.LINE_STRIP)}else J.isPoints?Tt.setMode(j.POINTS):J.isSprite&&Tt.setMode(j.TRIANGLES);if(J.isBatchedMesh)Tt.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else if(J.isInstancedMesh)Tt.renderInstances(It,Vt,J.count);else if(ee.isInstancedBufferGeometry){const Qe=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,Vr=Math.min(ee.instanceCount,Qe);Tt.renderInstances(It,Vt,Vr)}else Tt.render(It,Vt)};function nt(N,$,ee){N.transparent===!0&&N.side===gn&&N.forceSinglePass===!1?(N.side=bn,N.needsUpdate=!0,Ps(N,$,ee),N.side=$n,N.needsUpdate=!0,Ps(N,$,ee),N.side=gn):Ps(N,$,ee)}this.compile=function(N,$,ee=null){ee===null&&(ee=N),x=ze.get(ee),x.init(),M.push(x),ee.traverseVisible(function(J){J.isLight&&J.layers.test($.layers)&&(x.pushLight(J),J.castShadow&&x.pushShadow(J))}),N!==ee&&N.traverseVisible(function(J){J.isLight&&J.layers.test($.layers)&&(x.pushLight(J),J.castShadow&&x.pushShadow(J))}),x.setupLights(y._useLegacyLights);const te=new Set;return N.traverse(function(J){const Ee=J.material;if(Ee)if(Array.isArray(Ee))for(let De=0;De<Ee.length;De++){const He=Ee[De];nt(He,ee,J),te.add(He)}else nt(Ee,ee,J),te.add(Ee)}),M.pop(),x=null,te},this.compileAsync=function(N,$,ee=null){const te=this.compile(N,$,ee);return new Promise(J=>{function Ee(){if(te.forEach(function(De){Ve.get(De).currentProgram.isReady()&&te.delete(De)}),te.size===0){J(N);return}setTimeout(Ee,10)}Ce.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let tt=null;function ut(N){tt&&tt(N)}function kt(){Ut.stop()}function ot(){Ut.start()}const Ut=new bm;Ut.setAnimationLoop(ut),typeof self!="undefined"&&Ut.setContext(self),this.setAnimationLoop=function(N){tt=N,be.setAnimationLoop(N),N===null?Ut.stop():Ut.start()},be.addEventListener("sessionstart",kt),be.addEventListener("sessionend",ot),this.render=function(N,$){if($!==void 0&&$.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),be.enabled===!0&&be.isPresenting===!0&&(be.cameraAutoUpdate===!0&&be.updateCamera($),$=be.getCamera()),N.isScene===!0&&N.onBeforeRender(y,N,$,T),x=ze.get(N,M.length),x.init(),M.push(x),ye.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),he.setFromProjectionMatrix(ye),se=this.localClippingEnabled,q=We.init(this.clippingPlanes,se),w=Me.get(N,v.length),w.init(),v.push(w),rn(N,$,0,y.sortObjects),w.finish(),y.sortObjects===!0&&w.sort(Q,K),this.info.render.frame++,q===!0&&We.beginShadows();const ee=x.state.shadowsArray;if(ae.render(ee,N,$),q===!0&&We.endShadows(),this.info.autoReset===!0&&this.info.reset(),(be.enabled===!1||be.isPresenting===!1||be.hasDepthSensing()===!1)&&st.render(w,N),x.setupLights(y._useLegacyLights),$.isArrayCamera){const te=$.cameras;for(let J=0,Ee=te.length;J<Ee;J++){const De=te[J];Uo(w,N,De,De.viewport)}}else Uo(w,N,$);T!==null&&(F.updateMultisampleRenderTarget(T),F.updateRenderTargetMipmap(T)),N.isScene===!0&&N.onAfterRender(y,N,$),$e.resetDefaultState(),I=-1,B=null,M.pop(),M.length>0?x=M[M.length-1]:x=null,v.pop(),v.length>0?w=v[v.length-1]:w=null};function rn(N,$,ee,te){if(N.visible===!1)return;if(N.layers.test($.layers)){if(N.isGroup)ee=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update($);else if(N.isLight)x.pushLight(N),N.castShadow&&x.pushShadow(N);else if(N.isSprite){if(!N.frustumCulled||he.intersectsSprite(N)){te&&ve.setFromMatrixPosition(N.matrixWorld).applyMatrix4(ye);const De=ce.update(N),He=N.material;He.visible&&w.push(N,De,He,ee,ve.z,null)}}else if((N.isMesh||N.isLine||N.isPoints)&&(!N.frustumCulled||he.intersectsObject(N))){const De=ce.update(N),He=N.material;if(te&&(N.boundingSphere!==void 0?(N.boundingSphere===null&&N.computeBoundingSphere(),ve.copy(N.boundingSphere.center)):(De.boundingSphere===null&&De.computeBoundingSphere(),ve.copy(De.boundingSphere.center)),ve.applyMatrix4(N.matrixWorld).applyMatrix4(ye)),Array.isArray(He)){const Be=De.groups;for(let qe=0,Ke=Be.length;qe<Ke;qe++){const Ze=Be[qe],It=He[Ze.materialIndex];It&&It.visible&&w.push(N,De,It,ee,ve.z,Ze)}}else He.visible&&w.push(N,De,He,ee,ve.z,null)}}const Ee=N.children;for(let De=0,He=Ee.length;De<He;De++)rn(Ee[De],$,ee,te)}function Uo(N,$,ee,te){const J=N.opaque,Ee=N.transmissive,De=N.transparent;x.setupLightsView(ee),q===!0&&We.setGlobalState(y.clippingPlanes,ee),Ee.length>0&&pl(J,Ee,$,ee),te&&Ae.viewport(E.copy(te)),J.length>0&&Pi(J,$,ee),Ee.length>0&&Pi(Ee,$,ee),De.length>0&&Pi(De,$,ee),Ae.buffers.depth.setTest(!0),Ae.buffers.depth.setMask(!0),Ae.buffers.color.setMask(!0),Ae.setPolygonOffset(!1)}function pl(N,$,ee,te){if((ee.isScene===!0?ee.overrideMaterial:null)!==null)return;const Ee=ke.isWebGL2;_e===null&&(_e=new En(1,1,{generateMipmaps:!0,type:Ce.has("EXT_color_buffer_half_float")?zn:ri,minFilter:Si,samples:Ee?4:0})),y.getDrawingBufferSize(Te),Ee?_e.setSize(Te.x,Te.y):_e.setSize(Ja(Te.x),Ja(Te.y));const De=y.getRenderTarget();y.setRenderTarget(_e),y.getClearColor(W),U=y.getClearAlpha(),U<1&&y.setClearColor(16777215,.5),y.clear();const He=y.toneMapping;y.toneMapping=Qi,Pi(N,ee,te),F.updateMultisampleRenderTarget(_e),F.updateRenderTargetMipmap(_e);let Be=!1;for(let qe=0,Ke=$.length;qe<Ke;qe++){const Ze=$[qe],It=Ze.object,an=Ze.geometry,Vt=Ze.material,In=Ze.group;if(Vt.side===gn&&It.layers.test(te.layers)){const Tt=Vt.side;Vt.side=bn,Vt.needsUpdate=!0,Fo(It,ee,te,an,Vt,In),Vt.side=Tt,Vt.needsUpdate=!0,Be=!0}}Be===!0&&(F.updateMultisampleRenderTarget(_e),F.updateRenderTargetMipmap(_e)),y.setRenderTarget(De),y.setClearColor(W,U),y.toneMapping=He}function Pi(N,$,ee){const te=$.isScene===!0?$.overrideMaterial:null;for(let J=0,Ee=N.length;J<Ee;J++){const De=N[J],He=De.object,Be=De.geometry,qe=te===null?De.material:te,Ke=De.group;He.layers.test(ee.layers)&&Fo(He,$,ee,Be,qe,Ke)}}function Fo(N,$,ee,te,J,Ee){N.onBeforeRender(y,$,ee,te,J,Ee),N.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),J.onBeforeRender(y,$,ee,te,N,Ee),J.transparent===!0&&J.side===gn&&J.forceSinglePass===!1?(J.side=bn,J.needsUpdate=!0,y.renderBufferDirect(ee,$,te,J,N,Ee),J.side=$n,J.needsUpdate=!0,y.renderBufferDirect(ee,$,te,J,N,Ee),J.side=gn):y.renderBufferDirect(ee,$,te,J,N,Ee),N.onAfterRender(y,$,ee,te,J,Ee)}function Ps(N,$,ee){$.isScene!==!0&&($=Ue);const te=Ve.get(N),J=x.state.lights,Ee=x.state.shadowsArray,De=J.state.version,He=Pe.getParameters(N,J.state,Ee,$,ee),Be=Pe.getProgramCacheKey(He);let qe=te.programs;te.environment=N.isMeshStandardMaterial?$.environment:null,te.fog=$.fog,te.envMap=(N.isMeshStandardMaterial?Z:L).get(N.envMap||te.environment),qe===void 0&&(N.addEventListener("dispose",le),qe=new Map,te.programs=qe);let Ke=qe.get(Be);if(Ke!==void 0){if(te.currentProgram===Ke&&te.lightsStateVersion===De)return Br(N,He),Ke}else He.uniforms=Pe.getUniforms(N),N.onBuild(ee,He,y),N.onBeforeCompile(He,y),Ke=Pe.acquireProgram(He,Be),qe.set(Be,Ke),te.uniforms=He.uniforms;const Ze=te.uniforms;return(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)&&(Ze.clippingPlanes=We.uniform),Br(N,He),te.needsLights=ml(N),te.lightsStateVersion=De,te.needsLights&&(Ze.ambientLightColor.value=J.state.ambient,Ze.lightProbe.value=J.state.probe,Ze.directionalLights.value=J.state.directional,Ze.directionalLightShadows.value=J.state.directionalShadow,Ze.spotLights.value=J.state.spot,Ze.spotLightShadows.value=J.state.spotShadow,Ze.rectAreaLights.value=J.state.rectArea,Ze.ltc_1.value=J.state.rectAreaLTC1,Ze.ltc_2.value=J.state.rectAreaLTC2,Ze.pointLights.value=J.state.point,Ze.pointLightShadows.value=J.state.pointShadow,Ze.hemisphereLights.value=J.state.hemi,Ze.directionalShadowMap.value=J.state.directionalShadowMap,Ze.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Ze.spotShadowMap.value=J.state.spotShadowMap,Ze.spotLightMatrix.value=J.state.spotLightMatrix,Ze.spotLightMap.value=J.state.spotLightMap,Ze.pointShadowMap.value=J.state.pointShadowMap,Ze.pointShadowMatrix.value=J.state.pointShadowMatrix),te.currentProgram=Ke,te.uniformsList=null,Ke}function Ri(N){if(N.uniformsList===null){const $=N.currentProgram.getUniforms();N.uniformsList=za.seqWithValue($.seq,N.uniforms)}return N.uniformsList}function Br(N,$){const ee=Ve.get(N);ee.outputColorSpace=$.outputColorSpace,ee.batching=$.batching,ee.instancing=$.instancing,ee.instancingColor=$.instancingColor,ee.skinning=$.skinning,ee.morphTargets=$.morphTargets,ee.morphNormals=$.morphNormals,ee.morphColors=$.morphColors,ee.morphTargetsCount=$.morphTargetsCount,ee.numClippingPlanes=$.numClippingPlanes,ee.numIntersection=$.numClipIntersection,ee.vertexAlphas=$.vertexAlphas,ee.vertexTangents=$.vertexTangents,ee.toneMapping=$.toneMapping}function fl(N,$,ee,te,J){$.isScene!==!0&&($=Ue),F.resetTextureUnits();const Ee=$.fog,De=te.isMeshStandardMaterial?$.environment:null,He=T===null?y.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:nn,Be=(te.isMeshStandardMaterial?Z:L).get(te.envMap||De),qe=te.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,Ke=!!ee.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),Ze=!!ee.morphAttributes.position,It=!!ee.morphAttributes.normal,an=!!ee.morphAttributes.color;let Vt=Qi;te.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Vt=y.toneMapping);const In=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,Tt=In!==void 0?In.length:0,Qe=Ve.get(te),Vr=x.state.lights;if(q===!0&&(se===!0||N!==B)){const Yt=N===B&&te.id===I;We.setState(te,N,Yt)}let At=!1;te.version===Qe.__version?(Qe.needsLights&&Qe.lightsStateVersion!==Vr.state.version||Qe.outputColorSpace!==He||J.isBatchedMesh&&Qe.batching===!1||!J.isBatchedMesh&&Qe.batching===!0||J.isInstancedMesh&&Qe.instancing===!1||!J.isInstancedMesh&&Qe.instancing===!0||J.isSkinnedMesh&&Qe.skinning===!1||!J.isSkinnedMesh&&Qe.skinning===!0||J.isInstancedMesh&&Qe.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&Qe.instancingColor===!1&&J.instanceColor!==null||Qe.envMap!==Be||te.fog===!0&&Qe.fog!==Ee||Qe.numClippingPlanes!==void 0&&(Qe.numClippingPlanes!==We.numPlanes||Qe.numIntersection!==We.numIntersection)||Qe.vertexAlphas!==qe||Qe.vertexTangents!==Ke||Qe.morphTargets!==Ze||Qe.morphNormals!==It||Qe.morphColors!==an||Qe.toneMapping!==Vt||ke.isWebGL2===!0&&Qe.morphTargetsCount!==Tt)&&(At=!0):(At=!0,Qe.__version=te.version);let ei=Qe.currentProgram;At===!0&&(ei=Ps(te,$,J));let Oo=!1,ts=!1,zr=!1;const Bt=ei.getUniforms(),en=Qe.uniforms;if(Ae.useProgram(ei.program)&&(Oo=!0,ts=!0,zr=!0),te.id!==I&&(I=te.id,ts=!0),Oo||B!==N){Bt.setValue(j,"projectionMatrix",N.projectionMatrix),Bt.setValue(j,"viewMatrix",N.matrixWorldInverse);const Yt=Bt.map.cameraPosition;Yt!==void 0&&Yt.setValue(j,ve.setFromMatrixPosition(N.matrixWorld)),ke.logarithmicDepthBuffer&&Bt.setValue(j,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&Bt.setValue(j,"isOrthographic",N.isOrthographicCamera===!0),B!==N&&(B=N,ts=!0,zr=!0)}if(J.isSkinnedMesh){Bt.setOptional(j,J,"bindMatrix"),Bt.setOptional(j,J,"bindMatrixInverse");const Yt=J.skeleton;Yt&&(ke.floatVertexTextures?(Yt.boneTexture===null&&Yt.computeBoneTexture(),Bt.setValue(j,"boneTexture",Yt.boneTexture,F)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}J.isBatchedMesh&&(Bt.setOptional(j,J,"batchingTexture"),Bt.setValue(j,"batchingTexture",J._matricesTexture,F));const ui=ee.morphAttributes;if((ui.position!==void 0||ui.normal!==void 0||ui.color!==void 0&&ke.isWebGL2===!0)&&Je.update(J,ee,ei),(ts||Qe.receiveShadow!==J.receiveShadow)&&(Qe.receiveShadow=J.receiveShadow,Bt.setValue(j,"receiveShadow",J.receiveShadow)),te.isMeshGouraudMaterial&&te.envMap!==null&&(en.envMap.value=Be,en.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),ts&&(Bt.setValue(j,"toneMappingExposure",y.toneMappingExposure),Qe.needsLights&&kr(en,zr),Ee&&te.fog===!0&&xe.refreshFogUniforms(en,Ee),xe.refreshMaterialUniforms(en,te,X,G,_e),za.upload(j,Ri(Qe),en,F)),te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(za.upload(j,Ri(Qe),en,F),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&Bt.setValue(j,"center",J.center),Bt.setValue(j,"modelViewMatrix",J.modelViewMatrix),Bt.setValue(j,"normalMatrix",J.normalMatrix),Bt.setValue(j,"modelMatrix",J.matrixWorld),te.isShaderMaterial||te.isRawShaderMaterial){const Yt=te.uniformsGroups;for(let Li=0,Hr=Yt.length;Li<Hr;Li++)if(ke.isWebGL2){const Bo=Yt[Li];V.update(Bo,ei),V.bind(Bo,ei)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ei}function kr(N,$){N.ambientLightColor.needsUpdate=$,N.lightProbe.needsUpdate=$,N.directionalLights.needsUpdate=$,N.directionalLightShadows.needsUpdate=$,N.pointLights.needsUpdate=$,N.pointLightShadows.needsUpdate=$,N.spotLights.needsUpdate=$,N.spotLightShadows.needsUpdate=$,N.rectAreaLights.needsUpdate=$,N.hemisphereLights.needsUpdate=$}function ml(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(N,$,ee){Ve.get(N.texture).__webglTexture=$,Ve.get(N.depthTexture).__webglTexture=ee;const te=Ve.get(N);te.__hasExternalTextures=!0,te.__hasExternalTextures&&(te.__autoAllocateDepthBuffer=ee===void 0,te.__autoAllocateDepthBuffer||Ce.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),te.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(N,$){const ee=Ve.get(N);ee.__webglFramebuffer=$,ee.__useDefaultFramebuffer=$===void 0},this.setRenderTarget=function(N,$=0,ee=0){T=N,C=$,P=ee;let te=!0,J=null,Ee=!1,De=!1;if(N){const Be=Ve.get(N);Be.__useDefaultFramebuffer!==void 0?(Ae.bindFramebuffer(j.FRAMEBUFFER,null),te=!1):Be.__webglFramebuffer===void 0?F.setupRenderTarget(N):Be.__hasExternalTextures&&F.rebindTextures(N,Ve.get(N.texture).__webglTexture,Ve.get(N.depthTexture).__webglTexture);const qe=N.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(De=!0);const Ke=Ve.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(Array.isArray(Ke[$])?J=Ke[$][ee]:J=Ke[$],Ee=!0):ke.isWebGL2&&N.samples>0&&F.useMultisampledRTT(N)===!1?J=Ve.get(N).__webglMultisampledFramebuffer:Array.isArray(Ke)?J=Ke[ee]:J=Ke,E.copy(N.viewport),R.copy(N.scissor),k=N.scissorTest}else E.copy(ie).multiplyScalar(X).floor(),R.copy(ne).multiplyScalar(X).floor(),k=me;if(Ae.bindFramebuffer(j.FRAMEBUFFER,J)&&ke.drawBuffers&&te&&Ae.drawBuffers(N,J),Ae.viewport(E),Ae.scissor(R),Ae.setScissorTest(k),Ee){const Be=Ve.get(N.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+$,Be.__webglTexture,ee)}else if(De){const Be=Ve.get(N.texture),qe=$||0;j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,Be.__webglTexture,ee||0,qe)}I=-1},this.readRenderTargetPixels=function(N,$,ee,te,J,Ee,De){if(!(N&&N.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let He=Ve.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&De!==void 0&&(He=He[De]),He){Ae.bindFramebuffer(j.FRAMEBUFFER,He);try{const Be=N.texture,qe=Be.format,Ke=Be.type;if(qe!==Xt&&we.convert(qe)!==j.getParameter(j.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ze=Ke===zn&&(Ce.has("EXT_color_buffer_half_float")||ke.isWebGL2&&Ce.has("EXT_color_buffer_float"));if(Ke!==ri&&we.convert(Ke)!==j.getParameter(j.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ke===yt&&(ke.isWebGL2||Ce.has("OES_texture_float")||Ce.has("WEBGL_color_buffer_float")))&&!Ze){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=N.width-te&&ee>=0&&ee<=N.height-J&&j.readPixels($,ee,te,J,we.convert(qe),we.convert(Ke),Ee)}finally{const Be=T!==null?Ve.get(T).__webglFramebuffer:null;Ae.bindFramebuffer(j.FRAMEBUFFER,Be)}}},this.copyFramebufferToTexture=function(N,$,ee=0){const te=Math.pow(2,-ee),J=Math.floor($.image.width*te),Ee=Math.floor($.image.height*te);F.setTexture2D($,0),j.copyTexSubImage2D(j.TEXTURE_2D,ee,0,0,N.x,N.y,J,Ee),Ae.unbindTexture()},this.copyTextureToTexture=function(N,$,ee,te=0){const J=$.image.width,Ee=$.image.height,De=we.convert(ee.format),He=we.convert(ee.type);F.setTexture2D(ee,0),j.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,ee.flipY),j.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ee.premultiplyAlpha),j.pixelStorei(j.UNPACK_ALIGNMENT,ee.unpackAlignment),$.isDataTexture?j.texSubImage2D(j.TEXTURE_2D,te,N.x,N.y,J,Ee,De,He,$.image.data):$.isCompressedTexture?j.compressedTexSubImage2D(j.TEXTURE_2D,te,N.x,N.y,$.mipmaps[0].width,$.mipmaps[0].height,De,$.mipmaps[0].data):j.texSubImage2D(j.TEXTURE_2D,te,N.x,N.y,De,He,$.image),te===0&&ee.generateMipmaps&&j.generateMipmap(j.TEXTURE_2D),Ae.unbindTexture()},this.copyTextureToTexture3D=function(N,$,ee,te,J=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ee=N.max.x-N.min.x+1,De=N.max.y-N.min.y+1,He=N.max.z-N.min.z+1,Be=we.convert(te.format),qe=we.convert(te.type);let Ke;if(te.isData3DTexture)F.setTexture3D(te,0),Ke=j.TEXTURE_3D;else if(te.isDataArrayTexture||te.isCompressedArrayTexture)F.setTexture2DArray(te,0),Ke=j.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}j.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,te.flipY),j.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,te.premultiplyAlpha),j.pixelStorei(j.UNPACK_ALIGNMENT,te.unpackAlignment);const Ze=j.getParameter(j.UNPACK_ROW_LENGTH),It=j.getParameter(j.UNPACK_IMAGE_HEIGHT),an=j.getParameter(j.UNPACK_SKIP_PIXELS),Vt=j.getParameter(j.UNPACK_SKIP_ROWS),In=j.getParameter(j.UNPACK_SKIP_IMAGES),Tt=ee.isCompressedTexture?ee.mipmaps[J]:ee.image;j.pixelStorei(j.UNPACK_ROW_LENGTH,Tt.width),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,Tt.height),j.pixelStorei(j.UNPACK_SKIP_PIXELS,N.min.x),j.pixelStorei(j.UNPACK_SKIP_ROWS,N.min.y),j.pixelStorei(j.UNPACK_SKIP_IMAGES,N.min.z),ee.isDataTexture||ee.isData3DTexture?j.texSubImage3D(Ke,J,$.x,$.y,$.z,Ee,De,He,Be,qe,Tt.data):ee.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),j.compressedTexSubImage3D(Ke,J,$.x,$.y,$.z,Ee,De,He,Be,Tt.data)):j.texSubImage3D(Ke,J,$.x,$.y,$.z,Ee,De,He,Be,qe,Tt),j.pixelStorei(j.UNPACK_ROW_LENGTH,Ze),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,It),j.pixelStorei(j.UNPACK_SKIP_PIXELS,an),j.pixelStorei(j.UNPACK_SKIP_ROWS,Vt),j.pixelStorei(j.UNPACK_SKIP_IMAGES,In),J===0&&te.generateMipmaps&&j.generateMipmap(Ke),Ae.unbindTexture()},this.initTexture=function(N){N.isCubeTexture?F.setTextureCube(N,0):N.isData3DTexture?F.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?F.setTexture2DArray(N,0):F.setTexture2D(N,0),Ae.unbindTexture()},this.resetState=function(){C=0,P=0,T=null,Ae.reset(),$e.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Eu?"display-p3":"srgb",t.unpackColorSpace=mt.workingColorSpace===rl?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ot?Ms:om}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Ms?Ot:nn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class NE extends Am{}NE.prototype.isWebGL1Renderer=!0;class Cm extends gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class UE{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Kc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Kn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Es("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Kn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Kn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const pn=new D;class Pu{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)pn.fromBufferAttribute(this,t),pn.applyMatrix4(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)pn.fromBufferAttribute(this,t),pn.applyNormalMatrix(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)pn.fromBufferAttribute(this,t),pn.transformDirection(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Yn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=vt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Yn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Yn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Yn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Yn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),i=vt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),i=vt(i,this.array),r=vt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Rt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Pu(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Ep=new D,Sp=new bt,Tp=new bt,FE=new D,Ap=new Xe,fa=new D,gc=new Qn,Cp=new Xe,vc=new Ir;class OE extends fe{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=ad,this.bindMatrix=new Xe,this.bindMatrixInverse=new Xe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new zt),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,fa),this.boundingBox.expandByPoint(fa)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Qn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,fa),this.boundingSphere.expandByPoint(fa)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),gc.copy(this.boundingSphere),gc.applyMatrix4(i),e.ray.intersectsSphere(gc)!==!1&&(Cp.copy(i).invert(),vc.copy(e.ray).applyMatrix4(Cp),!(this.boundingBox!==null&&vc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,vc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new bt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===ad?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===W_?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Sp.fromBufferAttribute(i.attributes.skinIndex,e),Tp.fromBufferAttribute(i.attributes.skinWeight,e),Ep.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=Tp.getComponent(r);if(o!==0){const l=Sp.getComponent(r);Ap.multiplyMatrices(n.bones[l].matrixWorld,n.boneInverses[l]),t.addScaledVector(FE.copy(Ep).applyMatrix4(Ap),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Pm extends gt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Ss extends qt{constructor(e=null,t=1,n=1,i,r,o,l,c,u=ft,d=ft,f,m){super(null,o,l,c,u,d,i,r,f,m),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Pp=new Xe,BE=new Xe;class Ru{constructor(e=[],t=[]){this.uuid=Kn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Xe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Xe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const l=e[r]?e[r].matrixWorld:BE;Pp.multiplyMatrices(l,t[r]),Pp.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Ru(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Ss(t,e,e,Xt,yt);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Pm),this.bones.push(o),this.boneInverses.push(new Xe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const o=t[i];e.bones.push(o.uuid);const l=n[i];e.boneInverses.push(l.toArray())}return e}}class Jc extends Rt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const tr=new Xe,Rp=new Xe,ma=[],Lp=new zt,kE=new Xe,so=new fe,ro=new Qn;class VE extends fe{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Jc(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,kE)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new zt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,tr),Lp.copy(e.boundingBox).applyMatrix4(tr),this.boundingBox.union(Lp)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Qn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,tr),ro.copy(e.boundingSphere).applyMatrix4(tr),this.boundingSphere.union(ro)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(so.geometry=this.geometry,so.material=this.material,so.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ro.copy(this.boundingSphere),ro.applyMatrix4(n),e.ray.intersectsSphere(ro)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,tr),Rp.multiplyMatrices(n,tr),so.matrixWorld=Rp,so.raycast(e,ma);for(let o=0,l=ma.length;o<l;o++){const c=ma[o];c.instanceId=r,c.object=this,t.push(c)}ma.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Jc(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Lu extends oi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ge(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ip=new D,Dp=new D,Np=new Xe,_c=new Ir,ga=new Qn;class qn extends gt{constructor(e=new sn,t=new Lu){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Ip.fromBufferAttribute(t,i-1),Dp.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Ip.distanceTo(Dp);e.setAttribute("lineDistance",new Et(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ga.copy(n.boundingSphere),ga.applyMatrix4(i),ga.radius+=r,e.ray.intersectsSphere(ga)===!1)return;Np.copy(i).invert(),_c.copy(e.ray).applyMatrix4(Np);const l=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=l*l,u=new D,d=new D,f=new D,m=new D,g=this.isLineSegments?2:1,b=n.index,x=n.attributes.position;if(b!==null){const v=Math.max(0,o.start),M=Math.min(b.count,o.start+o.count);for(let y=v,S=M-1;y<S;y+=g){const C=b.getX(y),P=b.getX(y+1);if(u.fromBufferAttribute(x,C),d.fromBufferAttribute(x,P),_c.distanceSqToSegment(u,d,m,f)>c)continue;m.applyMatrix4(this.matrixWorld);const I=e.ray.origin.distanceTo(m);I<e.near||I>e.far||t.push({distance:I,point:f.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else{const v=Math.max(0,o.start),M=Math.min(x.count,o.start+o.count);for(let y=v,S=M-1;y<S;y+=g){if(u.fromBufferAttribute(x,y),d.fromBufferAttribute(x,y+1),_c.distanceSqToSegment(u,d,m,f)>c)continue;m.applyMatrix4(this.matrixWorld);const P=e.ray.origin.distanceTo(m);P<e.near||P>e.far||t.push({distance:P,point:f.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const l=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}}const Up=new D,Fp=new D;class zE extends qn{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Up.fromBufferAttribute(t,i),Fp.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Up.distanceTo(Fp);e.setAttribute("lineDistance",new Et(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class HE extends qn{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Rm extends oi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ge(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Op=new Xe,eu=new Ir,va=new Qn,_a=new D;class GE extends gt{constructor(e=new sn,t=new Rm){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),va.copy(n.boundingSphere),va.applyMatrix4(i),va.radius+=r,e.ray.intersectsSphere(va)===!1)return;Op.copy(i).invert(),eu.copy(e.ray).applyMatrix4(Op);const l=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=l*l,u=n.index,f=n.attributes.position;if(u!==null){const m=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let b=m,w=g;b<w;b++){const x=u.getX(b);_a.fromBufferAttribute(f,x),Bp(_a,x,c,i,e,t,this)}}else{const m=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let b=m,w=g;b<w;b++)_a.fromBufferAttribute(f,b),Bp(_a,b,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const l=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}}function Bp(s,e,t,n,i,r,o){const l=eu.distanceSqToPoint(s);if(l<t){const c=new D;eu.closestPointToPoint(s,c),c.applyMatrix4(n);const u=i.ray.origin.distanceTo(c);if(u<i.near||u>i.far)return;r.push({distance:u,distanceToRay:Math.sqrt(l),point:c,index:e,face:null,object:o})}}class sC extends qt{constructor(e,t,n,i,r,o,l,c,u,d,f,m){super(null,o,l,c,u,d,i,r,f,m),this.isCompressedTexture=!0,this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}class rC extends qt{constructor(e,t,n,i,r,o,l,c,u){super(e,t,n,i,r,o,l,c,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class un extends sn{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,l=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:l,thetaLength:c};const u=this;i=Math.floor(i),r=Math.floor(r);const d=[],f=[],m=[],g=[];let b=0;const w=[],x=n/2;let v=0;M(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(d),this.setAttribute("position",new Et(f,3)),this.setAttribute("normal",new Et(m,3)),this.setAttribute("uv",new Et(g,2));function M(){const S=new D,C=new D;let P=0;const T=(t-e)/n;for(let I=0;I<=r;I++){const B=[],E=I/r,R=E*(t-e)+e;for(let k=0;k<=i;k++){const W=k/i,U=W*c+l,H=Math.sin(U),G=Math.cos(U);C.x=R*H,C.y=-E*n+x,C.z=R*G,f.push(C.x,C.y,C.z),S.set(H,T,G).normalize(),m.push(S.x,S.y,S.z),g.push(W,1-E),B.push(b++)}w.push(B)}for(let I=0;I<i;I++)for(let B=0;B<r;B++){const E=w[B][I],R=w[B+1][I],k=w[B+1][I+1],W=w[B][I+1];d.push(E,R,W),d.push(R,k,W),P+=6}u.addGroup(v,P,0),v+=P}function y(S){const C=b,P=new Re,T=new D;let I=0;const B=S===!0?e:t,E=S===!0?1:-1;for(let k=1;k<=i;k++)f.push(0,x*E,0),m.push(0,E,0),g.push(.5,.5),b++;const R=b;for(let k=0;k<=i;k++){const U=k/i*c+l,H=Math.cos(U),G=Math.sin(U);T.x=B*G,T.y=x*E,T.z=B*H,f.push(T.x,T.y,T.z),m.push(0,E,0),P.x=H*.5+.5,P.y=G*.5*E+.5,g.push(P.x,P.y),b++}for(let k=0;k<i;k++){const W=C+k,U=R+k;S===!0?d.push(U,U+1,W):d.push(U+1,U,W),I+=3}u.addGroup(v,I,S===!0?1:2),v+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new un(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Iu extends sn{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const r=[],o=[];l(i),u(n),d(),this.setAttribute("position",new Et(r,3)),this.setAttribute("normal",new Et(r.slice(),3)),this.setAttribute("uv",new Et(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function l(M){const y=new D,S=new D,C=new D;for(let P=0;P<t.length;P+=3)g(t[P+0],y),g(t[P+1],S),g(t[P+2],C),c(y,S,C,M)}function c(M,y,S,C){const P=C+1,T=[];for(let I=0;I<=P;I++){T[I]=[];const B=M.clone().lerp(S,I/P),E=y.clone().lerp(S,I/P),R=P-I;for(let k=0;k<=R;k++)k===0&&I===P?T[I][k]=B:T[I][k]=B.clone().lerp(E,k/R)}for(let I=0;I<P;I++)for(let B=0;B<2*(P-I)-1;B++){const E=Math.floor(B/2);B%2===0?(m(T[I][E+1]),m(T[I+1][E]),m(T[I][E])):(m(T[I][E+1]),m(T[I+1][E+1]),m(T[I+1][E]))}}function u(M){const y=new D;for(let S=0;S<r.length;S+=3)y.x=r[S+0],y.y=r[S+1],y.z=r[S+2],y.normalize().multiplyScalar(M),r[S+0]=y.x,r[S+1]=y.y,r[S+2]=y.z}function d(){const M=new D;for(let y=0;y<r.length;y+=3){M.x=r[y+0],M.y=r[y+1],M.z=r[y+2];const S=x(M)/2/Math.PI+.5,C=v(M)/Math.PI+.5;o.push(S,1-C)}b(),f()}function f(){for(let M=0;M<o.length;M+=6){const y=o[M+0],S=o[M+2],C=o[M+4],P=Math.max(y,S,C),T=Math.min(y,S,C);P>.9&&T<.1&&(y<.2&&(o[M+0]+=1),S<.2&&(o[M+2]+=1),C<.2&&(o[M+4]+=1))}}function m(M){r.push(M.x,M.y,M.z)}function g(M,y){const S=M*3;y.x=e[S+0],y.y=e[S+1],y.z=e[S+2]}function b(){const M=new D,y=new D,S=new D,C=new D,P=new Re,T=new Re,I=new Re;for(let B=0,E=0;B<r.length;B+=9,E+=6){M.set(r[B+0],r[B+1],r[B+2]),y.set(r[B+3],r[B+4],r[B+5]),S.set(r[B+6],r[B+7],r[B+8]),P.set(o[E+0],o[E+1]),T.set(o[E+2],o[E+3]),I.set(o[E+4],o[E+5]),C.copy(M).add(y).add(S).divideScalar(3);const R=x(C);w(P,E+0,M,R),w(T,E+2,y,R),w(I,E+4,S,R)}}function w(M,y,S,C){C<0&&M.x===1&&(o[y]=M.x-1),S.x===0&&S.z===0&&(o[y]=C/2/Math.PI+.5)}function x(M){return Math.atan2(M.z,-M.x)}function v(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Iu(e.vertices,e.indices,e.radius,e.details)}}class _r extends Iu{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new _r(e.radius,e.detail)}}class al extends sn{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:l},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+l,Math.PI);let u=0;const d=[],f=new D,m=new D,g=[],b=[],w=[],x=[];for(let v=0;v<=n;v++){const M=[],y=v/n;let S=0;v===0&&o===0?S=.5/t:v===n&&c===Math.PI&&(S=-.5/t);for(let C=0;C<=t;C++){const P=C/t;f.x=-e*Math.cos(i+P*r)*Math.sin(o+y*l),f.y=e*Math.cos(o+y*l),f.z=e*Math.sin(i+P*r)*Math.sin(o+y*l),b.push(f.x,f.y,f.z),m.copy(f).normalize(),w.push(m.x,m.y,m.z),x.push(P+S,1-y),M.push(u++)}d.push(M)}for(let v=0;v<n;v++)for(let M=0;M<t;M++){const y=d[v][M+1],S=d[v][M],C=d[v+1][M],P=d[v+1][M+1];(v!==0||o>0)&&g.push(y,S,P),(v!==n-1||c<Math.PI)&&g.push(S,C,P)}this.setIndex(g),this.setAttribute("position",new Et(b,3)),this.setAttribute("normal",new Et(w,3)),this.setAttribute("uv",new Et(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new al(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class _s extends sn{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const o=[],l=[],c=[],u=[],d=new D,f=new D,m=new D;for(let g=0;g<=n;g++)for(let b=0;b<=i;b++){const w=b/i*r,x=g/n*Math.PI*2;f.x=(e+t*Math.cos(x))*Math.cos(w),f.y=(e+t*Math.cos(x))*Math.sin(w),f.z=t*Math.sin(x),l.push(f.x,f.y,f.z),d.x=e*Math.cos(w),d.y=e*Math.sin(w),m.subVectors(f,d).normalize(),c.push(m.x,m.y,m.z),u.push(b/i),u.push(g/n)}for(let g=1;g<=n;g++)for(let b=1;b<=i;b++){const w=(i+1)*g+b-1,x=(i+1)*(g-1)+b-1,v=(i+1)*(g-1)+b,M=(i+1)*g+b;o.push(w,x,M),o.push(x,v,M)}this.setIndex(o),this.setAttribute("position",new Et(l,3)),this.setAttribute("normal",new Et(c,3)),this.setAttribute("uv",new Et(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _s(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Du extends sn{constructor(e=1,t=.4,n=64,i=8,r=2,o=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:i,p:r,q:o},n=Math.floor(n),i=Math.floor(i);const l=[],c=[],u=[],d=[],f=new D,m=new D,g=new D,b=new D,w=new D,x=new D,v=new D;for(let y=0;y<=n;++y){const S=y/n*r*Math.PI*2;M(S,r,o,e,g),M(S+.01,r,o,e,b),x.subVectors(b,g),v.addVectors(b,g),w.crossVectors(x,v),v.crossVectors(w,x),w.normalize(),v.normalize();for(let C=0;C<=i;++C){const P=C/i*Math.PI*2,T=-t*Math.cos(P),I=t*Math.sin(P);f.x=g.x+(T*v.x+I*w.x),f.y=g.y+(T*v.y+I*w.y),f.z=g.z+(T*v.z+I*w.z),c.push(f.x,f.y,f.z),m.subVectors(f,g).normalize(),u.push(m.x,m.y,m.z),d.push(y/n),d.push(C/i)}}for(let y=1;y<=n;y++)for(let S=1;S<=i;S++){const C=(i+1)*(y-1)+(S-1),P=(i+1)*y+(S-1),T=(i+1)*y+S,I=(i+1)*(y-1)+S;l.push(C,P,I),l.push(P,T,I)}this.setIndex(l),this.setAttribute("position",new Et(c,3)),this.setAttribute("normal",new Et(u,3)),this.setAttribute("uv",new Et(d,2));function M(y,S,C,P,T){const I=Math.cos(y),B=Math.sin(y),E=C/S*y,R=Math.cos(E);T.x=P*(2+R)*.5*I,T.y=P*(2+R)*B*.5,T.z=P*Math.sin(E)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Du(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class ll extends oi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=am,this.normalScale=new Re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ci extends ll{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Re(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return $t(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ge(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ge(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ge(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function xa(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function WE(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function XE(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function kp(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const l=t[r]*e;for(let c=0;c!==e;++c)i[o++]=s[l+c]}return i}function Lm(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}class No{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let l=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===l)break;if(r=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=r)){const l=t[1];e<l&&(n=2,r=l);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){const l=n+o>>>1;e<t[l]?o=l:n=l+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class jE extends No{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Dd,endingEnd:Dd}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,o=e+1,l=i[r],c=i[o];if(l===void 0)switch(this.getSettings_().endingStart){case Nd:r=e,l=2*t-n;break;case Ud:r=i.length-2,l=t+i[r]-i[r+1];break;default:r=e,l=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Nd:o=e,c=2*n-t;break;case Ud:o=1,c=n+i[1]-i[0];break;default:o=e-1,c=t}const u=(n-t)*.5,d=this.valueSize;this._weightPrev=u/(t-l),this._weightNext=u/(c-n),this._offsetPrev=r*d,this._offsetNext=o*d}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,l=this.valueSize,c=e*l,u=c-l,d=this._offsetPrev,f=this._offsetNext,m=this._weightPrev,g=this._weightNext,b=(n-t)/(i-t),w=b*b,x=w*b,v=-m*x+2*m*w-m*b,M=(1+m)*x+(-1.5-2*m)*w+(-.5+m)*b+1,y=(-1-g)*x+(1.5+g)*w+.5*b,S=g*x-g*w;for(let C=0;C!==l;++C)r[C]=v*o[d+C]+M*o[u+C]+y*o[c+C]+S*o[f+C];return r}}class qE extends No{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,l=this.valueSize,c=e*l,u=c-l,d=(n-t)/(i-t),f=1-d;for(let m=0;m!==l;++m)r[m]=o[u+m]*f+o[c+m]*d;return r}}class YE extends No{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class ci{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=xa(t,this.TimeBufferType),this.values=xa(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:xa(e.times,Array),values:xa(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new YE(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new qE(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new jE(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ro:t=this.InterpolantFactoryMethodDiscrete;break;case Ar:t=this.InterpolantFactoryMethodLinear;break;case jl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ro;case this.InterpolantFactoryMethodLinear:return Ar;case this.InterpolantFactoryMethodSmooth:return jl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const l=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*l,o*l)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let l=0;l!==r;l++){const c=n[l];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,l,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,l,c,o),e=!1;break}o=c}if(i!==void 0&&WE(i))for(let l=0,c=i.length;l!==c;++l){const u=i[l];if(isNaN(u)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,l,u),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===jl,r=e.length-1;let o=1;for(let l=1;l<r;++l){let c=!1;const u=e[l],d=e[l+1];if(u!==d&&(l!==1||u!==e[0]))if(i)c=!0;else{const f=l*n,m=f-n,g=f+n;for(let b=0;b!==n;++b){const w=t[f+b];if(w!==t[m+b]||w!==t[g+b]){c=!0;break}}}if(c){if(l!==o){e[o]=e[l];const f=l*n,m=o*n;for(let g=0;g!==n;++g)t[m+g]=t[f+g]}++o}}if(r>0){e[o]=e[r];for(let l=r*n,c=o*n,u=0;u!==n;++u)t[c+u]=t[l+u];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}ci.prototype.TimeBufferType=Float32Array;ci.prototype.ValueBufferType=Float32Array;ci.prototype.DefaultInterpolation=Ar;class Nr extends ci{}Nr.prototype.ValueTypeName="bool";Nr.prototype.ValueBufferType=Array;Nr.prototype.DefaultInterpolation=Ro;Nr.prototype.InterpolantFactoryMethodLinear=void 0;Nr.prototype.InterpolantFactoryMethodSmooth=void 0;class Im extends ci{}Im.prototype.ValueTypeName="color";class Rr extends ci{}Rr.prototype.ValueTypeName="number";class KE extends No{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,l=this.valueSize,c=(n-t)/(i-t);let u=e*l;for(let d=u+l;u!==d;u+=4)Wt.slerpFlat(r,0,o,u-l,o,u,c);return r}}class Ts extends ci{InterpolantFactoryMethodLinear(e){return new KE(this.times,this.values,this.getValueSize(),e)}}Ts.prototype.ValueTypeName="quaternion";Ts.prototype.DefaultInterpolation=Ar;Ts.prototype.InterpolantFactoryMethodSmooth=void 0;class Ur extends ci{}Ur.prototype.ValueTypeName="string";Ur.prototype.ValueBufferType=Array;Ur.prototype.DefaultInterpolation=Ro;Ur.prototype.InterpolantFactoryMethodLinear=void 0;Ur.prototype.InterpolantFactoryMethodSmooth=void 0;class Lr extends ci{}Lr.prototype.ValueTypeName="vector";class $E{constructor(e,t=-1,n,i=K_){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Kn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,l=n.length;o!==l;++o)t.push(QE(n[o]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(ci.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,o=[];for(let l=0;l<r;l++){let c=[],u=[];c.push((l+r-1)%r,l,(l+1)%r),u.push(0,1,0);const d=XE(c);c=kp(c,1,d),u=kp(u,1,d),!i&&c[0]===0&&(c.push(r),u.push(u[0])),o.push(new Rr(".morphTargetInfluences["+t[l].name+"]",c,u).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let l=0,c=e.length;l<c;l++){const u=e[l],d=u.name.match(r);if(d&&d.length>1){const f=d[1];let m=i[f];m||(i[f]=m=[]),m.push(u)}}const o=[];for(const l in i)o.push(this.CreateFromMorphTargetSequence(l,i[l],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(f,m,g,b,w){if(g.length!==0){const x=[],v=[];Lm(g,x,v,b),x.length!==0&&w.push(new f(m,x,v))}},i=[],r=e.name||"default",o=e.fps||30,l=e.blendMode;let c=e.length||-1;const u=e.hierarchy||[];for(let f=0;f<u.length;f++){const m=u[f].keys;if(!(!m||m.length===0))if(m[0].morphTargets){const g={};let b;for(b=0;b<m.length;b++)if(m[b].morphTargets)for(let w=0;w<m[b].morphTargets.length;w++)g[m[b].morphTargets[w]]=-1;for(const w in g){const x=[],v=[];for(let M=0;M!==m[b].morphTargets.length;++M){const y=m[b];x.push(y.time),v.push(y.morphTarget===w?1:0)}i.push(new Rr(".morphTargetInfluence["+w+"]",x,v))}c=g.length*o}else{const g=".bones["+t[f].name+"]";n(Lr,g+".position",m,"pos",i),n(Ts,g+".quaternion",m,"rot",i),n(Lr,g+".scale",m,"scl",i)}}return i.length===0?null:new this(r,c,i,l)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function ZE(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Rr;case"vector":case"vector2":case"vector3":case"vector4":return Lr;case"color":return Im;case"quaternion":return Ts;case"bool":case"boolean":return Nr;case"string":return Ur}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function QE(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=ZE(s.type);if(s.times===void 0){const t=[],n=[];Lm(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const $i={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class JE{constructor(e,t,n){const i=this;let r=!1,o=0,l=0,c;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(d){l++,r===!1&&i.onStart!==void 0&&i.onStart(d,o,l),r=!0},this.itemEnd=function(d){o++,i.onProgress!==void 0&&i.onProgress(d,o,l),o===l&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(d){i.onError!==void 0&&i.onError(d)},this.resolveURL=function(d){return c?c(d):d},this.setURLModifier=function(d){return c=d,this},this.addHandler=function(d,f){return u.push(d,f),this},this.removeHandler=function(d){const f=u.indexOf(d);return f!==-1&&u.splice(f,2),this},this.getHandler=function(d){for(let f=0,m=u.length;f<m;f+=2){const g=u[f],b=u[f+1];if(g.global&&(g.lastIndex=0),g.test(d))return b}return null}}}const eS=new JE;class Fr{constructor(e){this.manager=e!==void 0?e:eS,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Fr.DEFAULT_MATERIAL_NAME="__DEFAULT";const bi={};class tS extends Error{constructor(e,t){super(e),this.response=t}}class Dm extends Fr{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=$i.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(bi[e]!==void 0){bi[e].push({onLoad:t,onProgress:n,onError:i});return}bi[e]=[],bi[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),l=this.mimeType,c=this.responseType;fetch(o).then(u=>{if(u.status===200||u.status===0){if(u.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream=="undefined"||u.body===void 0||u.body.getReader===void 0)return u;const d=bi[e],f=u.body.getReader(),m=u.headers.get("Content-Length")||u.headers.get("X-File-Size"),g=m?parseInt(m):0,b=g!==0;let w=0;const x=new ReadableStream({start(v){M();function M(){f.read().then(({done:y,value:S})=>{if(y)v.close();else{w+=S.byteLength;const C=new ProgressEvent("progress",{lengthComputable:b,loaded:w,total:g});for(let P=0,T=d.length;P<T;P++){const I=d[P];I.onProgress&&I.onProgress(C)}v.enqueue(S),M()}})}}});return new Response(x)}else throw new tS(`fetch for "${u.url}" responded with ${u.status}: ${u.statusText}`,u)}).then(u=>{switch(c){case"arraybuffer":return u.arrayBuffer();case"blob":return u.blob();case"document":return u.text().then(d=>new DOMParser().parseFromString(d,l));case"json":return u.json();default:if(l===void 0)return u.text();{const f=/charset="?([^;"\s]*)"?/i.exec(l),m=f&&f[1]?f[1].toLowerCase():void 0,g=new TextDecoder(m);return u.arrayBuffer().then(b=>g.decode(b))}}}).then(u=>{$i.add(e,u);const d=bi[e];delete bi[e];for(let f=0,m=d.length;f<m;f++){const g=d[f];g.onLoad&&g.onLoad(u)}}).catch(u=>{const d=bi[e];if(d===void 0)throw this.manager.itemError(e),u;delete bi[e];for(let f=0,m=d.length;f<m;f++){const g=d[f];g.onError&&g.onError(u)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class nS extends Fr{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=$i.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const l=Lo("img");function c(){d(),$i.add(e,this),t&&t(this),r.manager.itemEnd(e)}function u(f){d(),i&&i(f),r.manager.itemError(e),r.manager.itemEnd(e)}function d(){l.removeEventListener("load",c,!1),l.removeEventListener("error",u,!1)}return l.addEventListener("load",c,!1),l.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(l.crossOrigin=this.crossOrigin),r.manager.itemStart(e),l.src=e,l}}class iS extends Fr{constructor(e){super(e)}load(e,t,n,i){const r=new qt,o=new nS(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(l){r.image=l,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class cl extends gt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ge(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const xc=new Xe,Vp=new D,zp=new D;class Nu{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Re(512,512),this.map=null,this.mapPass=null,this.matrix=new Xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Au,this._frameExtents=new Re(1,1),this._viewportCount=1,this._viewports=[new bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Vp.setFromMatrixPosition(e.matrixWorld),t.position.copy(Vp),zp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(zp),t.updateMatrixWorld(),xc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(xc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class sS extends Nu{constructor(){super(new mn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Cr*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Nm extends cl{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.target=new gt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new sS}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Hp=new Xe,oo=new D,bc=new D;class rS extends Nu{constructor(){super(new mn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Re(4,2),this._viewportCount=6,this._viewports=[new bt(2,1,1,1),new bt(0,1,1,1),new bt(3,1,1,1),new bt(1,1,1,1),new bt(3,0,1,1),new bt(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),oo.setFromMatrixPosition(e.matrixWorld),n.position.copy(oo),bc.copy(n.position),bc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(bc),n.updateMatrixWorld(),i.makeTranslation(-oo.x,-oo.y,-oo.z),Hp.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Hp)}}class Uu extends cl{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new rS}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class oS extends Nu{constructor(){super(new Jn(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Fu extends cl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.target=new gt,this.shadow=new oS}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class aS extends cl{constructor(e,t,n=10,i=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}class To{static decodeText(e){if(typeof TextDecoder!="undefined")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class lS extends Fr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap=="undefined"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=$i.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(u=>{t&&t(u),r.manager.itemEnd(e)}).catch(u=>{i&&i(u)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const l={};l.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",l.headers=this.requestHeader;const c=fetch(e,l).then(function(u){return u.blob()}).then(function(u){return createImageBitmap(u,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(u){return $i.add(e,u),t&&t(u),r.manager.itemEnd(e),u}).catch(function(u){i&&i(u),$i.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});$i.add(e,c),r.manager.itemStart(e)}}const Ou="\\[\\]\\.:\\/",cS=new RegExp("["+Ou+"]","g"),Bu="[^"+Ou+"]",uS="[^"+Ou.replace("\\.","")+"]",hS=/((?:WC+[\/:])*)/.source.replace("WC",Bu),dS=/(WCOD+)?/.source.replace("WCOD",uS),pS=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Bu),fS=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Bu),mS=new RegExp("^"+hS+dS+pS+fS+"$"),gS=["material","materials","bones","map"];class vS{constructor(e,t,n){const i=n||_t.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class _t{constructor(e,t,n){this.path=t,this.parsedPath=n||_t.parseTrackName(t),this.node=_t.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new _t.Composite(e,t,n):new _t(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(cS,"")}static parseTrackName(e){const t=mS.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);gS.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const l=r[o];if(l.name===t||l.uuid===t)return l;const c=n(l.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=_t.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let u=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let d=0;d<e.length;d++)if(e[d].name===u){u=d;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(u!==void 0){if(e[u]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[u]}}const o=e[i];if(o===void 0){const u=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+u+"."+i+" but it wasn't found.",e);return}let l=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?l=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}_t.Composite=vS;_t.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};_t.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};_t.prototype.GetterByBindingType=[_t.prototype._getValue_direct,_t.prototype._getValue_array,_t.prototype._getValue_arrayElement,_t.prototype._getValue_toArray];_t.prototype.SetterByBindingTypeAndVersioning=[[_t.prototype._setValue_direct,_t.prototype._setValue_direct_setNeedsUpdate,_t.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_array,_t.prototype._setValue_array_setNeedsUpdate,_t.prototype._setValue_array_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_arrayElement,_t.prototype._setValue_arrayElement_setNeedsUpdate,_t.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_fromArray,_t.prototype._setValue_fromArray_setNeedsUpdate,_t.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class ul{constructor(e){this.value=e}clone(){return new ul(this.value.clone===void 0?this.value:this.value.clone())}}class _S{constructor(e,t,n=0,i=1/0){this.ray=new Ir(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Tu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return tu(e,this,n,t),n.sort(Gp),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)tu(e[i],this,n,t);return n.sort(Gp),n}}function Gp(s,e){return s.distance-e.distance}function tu(s,e,t,n){if(s.layers.test(e.layers)&&s.raycast(e,t),n===!0){const i=s.children;for(let r=0,o=i.length;r<o;r++)tu(i[r],e,t,!0)}}class Wp{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos($t(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Xp=new D,ba=new D;class Ai{constructor(e=new D,t=new D){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Xp.subVectors(e,this.start),ba.subVectors(this.end,this.start);const n=ba.dot(ba);let r=ba.dot(Xp)/n;return t&&(r=$t(r,0,1)),r}closestPointToPoint(e,t,n){const i=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(i).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wu}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wu);const jp={type:"change"},yc={type:"start"},qp={type:"end"},ya=new Ir,Yp=new ni,xS=Math.cos(70*cm.DEG2RAD);class bS extends Cs{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Os.ROTATE,MIDDLE:Os.DOLLY,RIGHT:Os.PAN},this.touches={ONE:Bs.ROTATE,TWO:Bs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return l.phi},this.getAzimuthalAngle=function(){return l.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(V){V.addEventListener("keydown",ze),this._domElementKeyEvents=V},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",ze),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(jp),n.update(),r=i.NONE},this.update=function(){const V=new D,pe=new Wt().setFromUnitVectors(e.up,new D(0,1,0)),be=pe.clone().invert(),Ie=new D,O=new Wt,oe=new D,le=2*Math.PI;return function(Oe=null){const nt=n.object.position;V.copy(nt).sub(n.target),V.applyQuaternion(pe),l.setFromVector3(V),n.autoRotate&&r===i.NONE&&k(E(Oe)),n.enableDamping?(l.theta+=c.theta*n.dampingFactor,l.phi+=c.phi*n.dampingFactor):(l.theta+=c.theta,l.phi+=c.phi);let tt=n.minAzimuthAngle,ut=n.maxAzimuthAngle;isFinite(tt)&&isFinite(ut)&&(tt<-Math.PI?tt+=le:tt>Math.PI&&(tt-=le),ut<-Math.PI?ut+=le:ut>Math.PI&&(ut-=le),tt<=ut?l.theta=Math.max(tt,Math.min(ut,l.theta)):l.theta=l.theta>(tt+ut)/2?Math.max(tt,l.theta):Math.min(ut,l.theta)),l.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,l.phi)),l.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(d,n.dampingFactor):n.target.add(d),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&P||n.object.isOrthographicCamera?l.radius=ie(l.radius):l.radius=ie(l.radius*u),V.setFromSpherical(l),V.applyQuaternion(be),nt.copy(n.target).add(V),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,d.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),d.set(0,0,0));let kt=!1;if(n.zoomToCursor&&P){let ot=null;if(n.object.isPerspectiveCamera){const Ut=V.length();ot=ie(Ut*u);const rn=Ut-ot;n.object.position.addScaledVector(S,rn),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const Ut=new D(C.x,C.y,0);Ut.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/u)),n.object.updateProjectionMatrix(),kt=!0;const rn=new D(C.x,C.y,0);rn.unproject(n.object),n.object.position.sub(rn).add(Ut),n.object.updateMatrixWorld(),ot=V.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;ot!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(ot).add(n.object.position):(ya.origin.copy(n.object.position),ya.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(ya.direction))<xS?e.lookAt(n.target):(Yp.setFromNormalAndCoplanarPoint(n.object.up,n.target),ya.intersectPlane(Yp,n.target))))}else n.object.isOrthographicCamera&&(kt=u!==1,kt&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/u)),n.object.updateProjectionMatrix()));return u=1,P=!1,kt||Ie.distanceToSquared(n.object.position)>o||8*(1-O.dot(n.object.quaternion))>o||oe.distanceToSquared(n.target)>0?(n.dispatchEvent(jp),Ie.copy(n.object.position),O.copy(n.object.quaternion),oe.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",st),n.domElement.removeEventListener("pointerdown",F),n.domElement.removeEventListener("pointercancel",Z),n.domElement.removeEventListener("wheel",ce),n.domElement.removeEventListener("pointermove",L),n.domElement.removeEventListener("pointerup",Z),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",ze),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=i.NONE;const o=1e-6,l=new Wp,c=new Wp;let u=1;const d=new D,f=new Re,m=new Re,g=new Re,b=new Re,w=new Re,x=new Re,v=new Re,M=new Re,y=new Re,S=new D,C=new Re;let P=!1;const T=[],I={};let B=!1;function E(V){return V!==null?2*Math.PI/60*n.autoRotateSpeed*V:2*Math.PI/60/60*n.autoRotateSpeed}function R(V){const pe=Math.abs(V*.01);return Math.pow(.95,n.zoomSpeed*pe)}function k(V){c.theta-=V}function W(V){c.phi-=V}const U=function(){const V=new D;return function(be,Ie){V.setFromMatrixColumn(Ie,0),V.multiplyScalar(-be),d.add(V)}}(),H=function(){const V=new D;return function(be,Ie){n.screenSpacePanning===!0?V.setFromMatrixColumn(Ie,1):(V.setFromMatrixColumn(Ie,0),V.crossVectors(n.object.up,V)),V.multiplyScalar(be),d.add(V)}}(),G=function(){const V=new D;return function(be,Ie){const O=n.domElement;if(n.object.isPerspectiveCamera){const oe=n.object.position;V.copy(oe).sub(n.target);let le=V.length();le*=Math.tan(n.object.fov/2*Math.PI/180),U(2*be*le/O.clientHeight,n.object.matrix),H(2*Ie*le/O.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(U(be*(n.object.right-n.object.left)/n.object.zoom/O.clientWidth,n.object.matrix),H(Ie*(n.object.top-n.object.bottom)/n.object.zoom/O.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function X(V){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?u/=V:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Q(V){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?u*=V:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function K(V,pe){if(!n.zoomToCursor)return;P=!0;const be=n.domElement.getBoundingClientRect(),Ie=V-be.left,O=pe-be.top,oe=be.width,le=be.height;C.x=Ie/oe*2-1,C.y=-(O/le)*2+1,S.set(C.x,C.y,1).unproject(n.object).sub(n.object.position).normalize()}function ie(V){return Math.max(n.minDistance,Math.min(n.maxDistance,V))}function ne(V){f.set(V.clientX,V.clientY)}function me(V){K(V.clientX,V.clientX),v.set(V.clientX,V.clientY)}function he(V){b.set(V.clientX,V.clientY)}function q(V){m.set(V.clientX,V.clientY),g.subVectors(m,f).multiplyScalar(n.rotateSpeed);const pe=n.domElement;k(2*Math.PI*g.x/pe.clientHeight),W(2*Math.PI*g.y/pe.clientHeight),f.copy(m),n.update()}function se(V){M.set(V.clientX,V.clientY),y.subVectors(M,v),y.y>0?X(R(y.y)):y.y<0&&Q(R(y.y)),v.copy(M),n.update()}function _e(V){w.set(V.clientX,V.clientY),x.subVectors(w,b).multiplyScalar(n.panSpeed),G(x.x,x.y),b.copy(w),n.update()}function ye(V){K(V.clientX,V.clientY),V.deltaY<0?Q(R(V.deltaY)):V.deltaY>0&&X(R(V.deltaY)),n.update()}function Te(V){let pe=!1;switch(V.code){case n.keys.UP:V.ctrlKey||V.metaKey||V.shiftKey?W(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):G(0,n.keyPanSpeed),pe=!0;break;case n.keys.BOTTOM:V.ctrlKey||V.metaKey||V.shiftKey?W(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):G(0,-n.keyPanSpeed),pe=!0;break;case n.keys.LEFT:V.ctrlKey||V.metaKey||V.shiftKey?k(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):G(n.keyPanSpeed,0),pe=!0;break;case n.keys.RIGHT:V.ctrlKey||V.metaKey||V.shiftKey?k(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):G(-n.keyPanSpeed,0),pe=!0;break}pe&&(V.preventDefault(),n.update())}function ve(V){if(T.length===1)f.set(V.pageX,V.pageY);else{const pe=we(V),be=.5*(V.pageX+pe.x),Ie=.5*(V.pageY+pe.y);f.set(be,Ie)}}function Ue(V){if(T.length===1)b.set(V.pageX,V.pageY);else{const pe=we(V),be=.5*(V.pageX+pe.x),Ie=.5*(V.pageY+pe.y);b.set(be,Ie)}}function Ne(V){const pe=we(V),be=V.pageX-pe.x,Ie=V.pageY-pe.y,O=Math.sqrt(be*be+Ie*Ie);v.set(0,O)}function j(V){n.enableZoom&&Ne(V),n.enablePan&&Ue(V)}function St(V){n.enableZoom&&Ne(V),n.enableRotate&&ve(V)}function Ce(V){if(T.length==1)m.set(V.pageX,V.pageY);else{const be=we(V),Ie=.5*(V.pageX+be.x),O=.5*(V.pageY+be.y);m.set(Ie,O)}g.subVectors(m,f).multiplyScalar(n.rotateSpeed);const pe=n.domElement;k(2*Math.PI*g.x/pe.clientHeight),W(2*Math.PI*g.y/pe.clientHeight),f.copy(m)}function ke(V){if(T.length===1)w.set(V.pageX,V.pageY);else{const pe=we(V),be=.5*(V.pageX+pe.x),Ie=.5*(V.pageY+pe.y);w.set(be,Ie)}x.subVectors(w,b).multiplyScalar(n.panSpeed),G(x.x,x.y),b.copy(w)}function Ae(V){const pe=we(V),be=V.pageX-pe.x,Ie=V.pageY-pe.y,O=Math.sqrt(be*be+Ie*Ie);M.set(0,O),y.set(0,Math.pow(M.y/v.y,n.zoomSpeed)),X(y.y),v.copy(M);const oe=(V.pageX+pe.x)*.5,le=(V.pageY+pe.y)*.5;K(oe,le)}function ct(V){n.enableZoom&&Ae(V),n.enablePan&&ke(V)}function Ve(V){n.enableZoom&&Ae(V),n.enableRotate&&Ce(V)}function F(V){n.enabled!==!1&&(T.length===0&&(n.domElement.setPointerCapture(V.pointerId),n.domElement.addEventListener("pointermove",L),n.domElement.addEventListener("pointerup",Z)),Je(V),V.pointerType==="touch"?We(V):ue(V))}function L(V){n.enabled!==!1&&(V.pointerType==="touch"?ae(V):re(V))}function Z(V){switch(je(V),T.length){case 0:n.domElement.releasePointerCapture(V.pointerId),n.domElement.removeEventListener("pointermove",L),n.domElement.removeEventListener("pointerup",Z),n.dispatchEvent(qp),r=i.NONE;break;case 1:const pe=T[0],be=I[pe];We({pointerId:pe,pageX:be.x,pageY:be.y});break}}function ue(V){let pe;switch(V.button){case 0:pe=n.mouseButtons.LEFT;break;case 1:pe=n.mouseButtons.MIDDLE;break;case 2:pe=n.mouseButtons.RIGHT;break;default:pe=-1}switch(pe){case Os.DOLLY:if(n.enableZoom===!1)return;me(V),r=i.DOLLY;break;case Os.ROTATE:if(V.ctrlKey||V.metaKey||V.shiftKey){if(n.enablePan===!1)return;he(V),r=i.PAN}else{if(n.enableRotate===!1)return;ne(V),r=i.ROTATE}break;case Os.PAN:if(V.ctrlKey||V.metaKey||V.shiftKey){if(n.enableRotate===!1)return;ne(V),r=i.ROTATE}else{if(n.enablePan===!1)return;he(V),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(yc)}function re(V){switch(r){case i.ROTATE:if(n.enableRotate===!1)return;q(V);break;case i.DOLLY:if(n.enableZoom===!1)return;se(V);break;case i.PAN:if(n.enablePan===!1)return;_e(V);break}}function ce(V){n.enabled===!1||n.enableZoom===!1||r!==i.NONE||(V.preventDefault(),n.dispatchEvent(yc),ye(Pe(V)),n.dispatchEvent(qp))}function Pe(V){const pe=V.deltaMode,be={clientX:V.clientX,clientY:V.clientY,deltaY:V.deltaY};switch(pe){case 1:be.deltaY*=16;break;case 2:be.deltaY*=100;break}return V.ctrlKey&&!B&&(be.deltaY*=10),be}function xe(V){V.key==="Control"&&(B=!0,n.domElement.getRootNode().addEventListener("keyup",Me,{passive:!0,capture:!0}))}function Me(V){V.key==="Control"&&(B=!1,n.domElement.getRootNode().removeEventListener("keyup",Me,{passive:!0,capture:!0}))}function ze(V){n.enabled===!1||n.enablePan===!1||Te(V)}function We(V){switch(Le(V),T.length){case 1:switch(n.touches.ONE){case Bs.ROTATE:if(n.enableRotate===!1)return;ve(V),r=i.TOUCH_ROTATE;break;case Bs.PAN:if(n.enablePan===!1)return;Ue(V),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case Bs.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;j(V),r=i.TOUCH_DOLLY_PAN;break;case Bs.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;St(V),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(yc)}function ae(V){switch(Le(V),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;Ce(V),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;ke(V),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;ct(V),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Ve(V),n.update();break;default:r=i.NONE}}function st(V){n.enabled!==!1&&V.preventDefault()}function Je(V){T.push(V.pointerId)}function je(V){delete I[V.pointerId];for(let pe=0;pe<T.length;pe++)if(T[pe]==V.pointerId){T.splice(pe,1);return}}function Le(V){let pe=I[V.pointerId];pe===void 0&&(pe=new Re,I[V.pointerId]=pe),pe.set(V.pageX,V.pageY)}function we(V){const pe=V.pointerId===T[0]?T[1]:T[0];return I[pe]}n.domElement.addEventListener("contextmenu",st),n.domElement.addEventListener("pointerdown",F),n.domElement.addEventListener("pointercancel",Z),n.domElement.addEventListener("wheel",ce,{passive:!1}),n.domElement.getRootNode().addEventListener("keydown",xe,{passive:!0,capture:!0}),this.update()}}const hs=new _S,hn=new D,Wi=new D,Nt=new Wt,Kp={X:new D(1,0,0),Y:new D(0,1,0),Z:new D(0,0,1)},wc={type:"change"},$p={type:"mouseDown"},Zp={type:"mouseUp",mode:null},Qp={type:"objectChange"};class yS extends gt{constructor(e,t){super(),t===void 0&&(console.warn('THREE.TransformControls: The second parameter "domElement" is now mandatory.'),t=document),this.isTransformControls=!0,this.visible=!1,this.domElement=t,this.domElement.style.touchAction="none";const n=new AS;this._gizmo=n,this.add(n);const i=new CS;this._plane=i,this.add(i);const r=this;function o(M,y){let S=y;Object.defineProperty(r,M,{get:function(){return S!==void 0?S:y},set:function(C){S!==C&&(S=C,i[M]=C,n[M]=C,r.dispatchEvent({type:M+"-changed",value:C}),r.dispatchEvent(wc))}}),r[M]=y,i[M]=y,n[M]=y}o("camera",e),o("object",void 0),o("enabled",!0),o("axis",null),o("mode","translate"),o("translationSnap",null),o("rotationSnap",null),o("scaleSnap",null),o("space","world"),o("size",1),o("dragging",!1),o("showX",!0),o("showY",!0),o("showZ",!0);const l=new D,c=new D,u=new Wt,d=new Wt,f=new D,m=new Wt,g=new D,b=new D,w=new D,x=0,v=new D;o("worldPosition",l),o("worldPositionStart",c),o("worldQuaternion",u),o("worldQuaternionStart",d),o("cameraPosition",f),o("cameraQuaternion",m),o("pointStart",g),o("pointEnd",b),o("rotationAxis",w),o("rotationAngle",x),o("eye",v),this._offset=new D,this._startNorm=new D,this._endNorm=new D,this._cameraScale=new D,this._parentPosition=new D,this._parentQuaternion=new Wt,this._parentQuaternionInv=new Wt,this._parentScale=new D,this._worldScaleStart=new D,this._worldQuaternionInv=new Wt,this._worldScale=new D,this._positionStart=new D,this._quaternionStart=new Wt,this._scaleStart=new D,this._getPointer=wS.bind(this),this._onPointerDown=ES.bind(this),this._onPointerHover=MS.bind(this),this._onPointerMove=SS.bind(this),this._onPointerUp=TS.bind(this),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointermove",this._onPointerHover),this.domElement.addEventListener("pointerup",this._onPointerUp)}updateMatrixWorld(){this.object!==void 0&&(this.object.updateMatrixWorld(),this.object.parent===null?console.error("TransformControls: The attached 3D object must be a part of the scene graph."):this.object.parent.matrixWorld.decompose(this._parentPosition,this._parentQuaternion,this._parentScale),this.object.matrixWorld.decompose(this.worldPosition,this.worldQuaternion,this._worldScale),this._parentQuaternionInv.copy(this._parentQuaternion).invert(),this._worldQuaternionInv.copy(this.worldQuaternion).invert()),this.camera.updateMatrixWorld(),this.camera.matrixWorld.decompose(this.cameraPosition,this.cameraQuaternion,this._cameraScale),this.camera.isOrthographicCamera?this.camera.getWorldDirection(this.eye).negate():this.eye.copy(this.cameraPosition).sub(this.worldPosition).normalize(),super.updateMatrixWorld(this)}pointerHover(e){if(this.object===void 0||this.dragging===!0)return;hs.setFromCamera(e,this.camera);const t=Mc(this._gizmo.picker[this.mode],hs);t?this.axis=t.object.name:this.axis=null}pointerDown(e){if(!(this.object===void 0||this.dragging===!0||e.button!==0)&&this.axis!==null){hs.setFromCamera(e,this.camera);const t=Mc(this._plane,hs,!0);t&&(this.object.updateMatrixWorld(),this.object.parent.updateMatrixWorld(),this._positionStart.copy(this.object.position),this._quaternionStart.copy(this.object.quaternion),this._scaleStart.copy(this.object.scale),this.object.matrixWorld.decompose(this.worldPositionStart,this.worldQuaternionStart,this._worldScaleStart),this.pointStart.copy(t.point).sub(this.worldPositionStart)),this.dragging=!0,$p.mode=this.mode,this.dispatchEvent($p)}}pointerMove(e){const t=this.axis,n=this.mode,i=this.object;let r=this.space;if(n==="scale"?r="local":(t==="E"||t==="XYZE"||t==="XYZ")&&(r="world"),i===void 0||t===null||this.dragging===!1||e.button!==-1)return;hs.setFromCamera(e,this.camera);const o=Mc(this._plane,hs,!0);if(!!o){if(this.pointEnd.copy(o.point).sub(this.worldPositionStart),n==="translate")this._offset.copy(this.pointEnd).sub(this.pointStart),r==="local"&&t!=="XYZ"&&this._offset.applyQuaternion(this._worldQuaternionInv),t.indexOf("X")===-1&&(this._offset.x=0),t.indexOf("Y")===-1&&(this._offset.y=0),t.indexOf("Z")===-1&&(this._offset.z=0),r==="local"&&t!=="XYZ"?this._offset.applyQuaternion(this._quaternionStart).divide(this._parentScale):this._offset.applyQuaternion(this._parentQuaternionInv).divide(this._parentScale),i.position.copy(this._offset).add(this._positionStart),this.translationSnap&&(r==="local"&&(i.position.applyQuaternion(Nt.copy(this._quaternionStart).invert()),t.search("X")!==-1&&(i.position.x=Math.round(i.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(i.position.y=Math.round(i.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(i.position.z=Math.round(i.position.z/this.translationSnap)*this.translationSnap),i.position.applyQuaternion(this._quaternionStart)),r==="world"&&(i.parent&&i.position.add(hn.setFromMatrixPosition(i.parent.matrixWorld)),t.search("X")!==-1&&(i.position.x=Math.round(i.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(i.position.y=Math.round(i.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(i.position.z=Math.round(i.position.z/this.translationSnap)*this.translationSnap),i.parent&&i.position.sub(hn.setFromMatrixPosition(i.parent.matrixWorld))));else if(n==="scale"){if(t.search("XYZ")!==-1){let l=this.pointEnd.length()/this.pointStart.length();this.pointEnd.dot(this.pointStart)<0&&(l*=-1),Wi.set(l,l,l)}else hn.copy(this.pointStart),Wi.copy(this.pointEnd),hn.applyQuaternion(this._worldQuaternionInv),Wi.applyQuaternion(this._worldQuaternionInv),Wi.divide(hn),t.search("X")===-1&&(Wi.x=1),t.search("Y")===-1&&(Wi.y=1),t.search("Z")===-1&&(Wi.z=1);i.scale.copy(this._scaleStart).multiply(Wi),this.scaleSnap&&(t.search("X")!==-1&&(i.scale.x=Math.round(i.scale.x/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Y")!==-1&&(i.scale.y=Math.round(i.scale.y/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Z")!==-1&&(i.scale.z=Math.round(i.scale.z/this.scaleSnap)*this.scaleSnap||this.scaleSnap))}else if(n==="rotate"){this._offset.copy(this.pointEnd).sub(this.pointStart);const l=20/this.worldPosition.distanceTo(hn.setFromMatrixPosition(this.camera.matrixWorld));let c=!1;t==="XYZE"?(this.rotationAxis.copy(this._offset).cross(this.eye).normalize(),this.rotationAngle=this._offset.dot(hn.copy(this.rotationAxis).cross(this.eye))*l):(t==="X"||t==="Y"||t==="Z")&&(this.rotationAxis.copy(Kp[t]),hn.copy(Kp[t]),r==="local"&&hn.applyQuaternion(this.worldQuaternion),hn.cross(this.eye),hn.length()===0?c=!0:this.rotationAngle=this._offset.dot(hn.normalize())*l),(t==="E"||c)&&(this.rotationAxis.copy(this.eye),this.rotationAngle=this.pointEnd.angleTo(this.pointStart),this._startNorm.copy(this.pointStart).normalize(),this._endNorm.copy(this.pointEnd).normalize(),this.rotationAngle*=this._endNorm.cross(this._startNorm).dot(this.eye)<0?1:-1),this.rotationSnap&&(this.rotationAngle=Math.round(this.rotationAngle/this.rotationSnap)*this.rotationSnap),r==="local"&&t!=="E"&&t!=="XYZE"?(i.quaternion.copy(this._quaternionStart),i.quaternion.multiply(Nt.setFromAxisAngle(this.rotationAxis,this.rotationAngle)).normalize()):(this.rotationAxis.applyQuaternion(this._parentQuaternionInv),i.quaternion.copy(Nt.setFromAxisAngle(this.rotationAxis,this.rotationAngle)),i.quaternion.multiply(this._quaternionStart).normalize())}this.dispatchEvent(wc),this.dispatchEvent(Qp)}}pointerUp(e){e.button===0&&(this.dragging&&this.axis!==null&&(Zp.mode=this.mode,this.dispatchEvent(Zp)),this.dragging=!1,this.axis=null)}dispose(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerHover),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.traverse(function(e){e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()})}attach(e){return this.object=e,this.visible=!0,this}detach(){return this.object=void 0,this.visible=!1,this.axis=null,this}reset(){!this.enabled||this.dragging&&(this.object.position.copy(this._positionStart),this.object.quaternion.copy(this._quaternionStart),this.object.scale.copy(this._scaleStart),this.dispatchEvent(wc),this.dispatchEvent(Qp),this.pointStart.copy(this.pointEnd))}getRaycaster(){return hs}getMode(){return this.mode}setMode(e){this.mode=e}setTranslationSnap(e){this.translationSnap=e}setRotationSnap(e){this.rotationSnap=e}setScaleSnap(e){this.scaleSnap=e}setSize(e){this.size=e}setSpace(e){this.space=e}}function wS(s){if(this.domElement.ownerDocument.pointerLockElement)return{x:0,y:0,button:s.button};{const e=this.domElement.getBoundingClientRect();return{x:(s.clientX-e.left)/e.width*2-1,y:-(s.clientY-e.top)/e.height*2+1,button:s.button}}}function MS(s){if(!!this.enabled)switch(s.pointerType){case"mouse":case"pen":this.pointerHover(this._getPointer(s));break}}function ES(s){!this.enabled||(document.pointerLockElement||this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.pointerHover(this._getPointer(s)),this.pointerDown(this._getPointer(s)))}function SS(s){!this.enabled||this.pointerMove(this._getPointer(s))}function TS(s){!this.enabled||(this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.pointerUp(this._getPointer(s)))}function Mc(s,e,t){const n=e.intersectObject(s,!0);for(let i=0;i<n.length;i++)if(n[i].object.visible||t)return n[i];return!1}const wa=new Do,Mt=new D(0,1,0),Jp=new D(0,0,0),ef=new Xe,Ma=new Wt,Ha=new Wt,ti=new D,tf=new Xe,xo=new D(1,0,0),fs=new D(0,1,0),bo=new D(0,0,1),Ea=new D,ao=new D,lo=new D;class AS extends gt{constructor(){super(),this.isTransformControlsGizmo=!0,this.type="TransformControlsGizmo";const e=new si({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),t=new Lu({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),n=e.clone();n.opacity=.15;const i=t.clone();i.opacity=.5;const r=e.clone();r.color.setHex(16711680);const o=e.clone();o.color.setHex(65280);const l=e.clone();l.color.setHex(255);const c=e.clone();c.color.setHex(16711680),c.opacity=.5;const u=e.clone();u.color.setHex(65280),u.opacity=.5;const d=e.clone();d.color.setHex(255),d.opacity=.5;const f=e.clone();f.opacity=.25;const m=e.clone();m.color.setHex(16776960),m.opacity=.25,e.clone().color.setHex(16776960);const b=e.clone();b.color.setHex(7895160);const w=new un(0,.04,.1,12);w.translate(0,.05,0);const x=new wt(.08,.08,.08);x.translate(0,.04,0);const v=new sn;v.setAttribute("position",new Et([0,0,0,1,0,0],3));const M=new un(.0075,.0075,.5,3);M.translate(0,.25,0);function y(H,G){const X=new _s(H,.0075,3,64,G*Math.PI*2);return X.rotateY(Math.PI/2),X.rotateX(Math.PI/2),X}function S(){const H=new sn;return H.setAttribute("position",new Et([0,0,0,1,1,1],3)),H}const C={X:[[new fe(w,r),[.5,0,0],[0,0,-Math.PI/2]],[new fe(w,r),[-.5,0,0],[0,0,Math.PI/2]],[new fe(M,r),[0,0,0],[0,0,-Math.PI/2]]],Y:[[new fe(w,o),[0,.5,0]],[new fe(w,o),[0,-.5,0],[Math.PI,0,0]],[new fe(M,o)]],Z:[[new fe(w,l),[0,0,.5],[Math.PI/2,0,0]],[new fe(w,l),[0,0,-.5],[-Math.PI/2,0,0]],[new fe(M,l),null,[Math.PI/2,0,0]]],XYZ:[[new fe(new _r(.1,0),f.clone()),[0,0,0]]],XY:[[new fe(new wt(.15,.15,.01),d.clone()),[.15,.15,0]]],YZ:[[new fe(new wt(.15,.15,.01),c.clone()),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new fe(new wt(.15,.15,.01),u.clone()),[.15,0,.15],[-Math.PI/2,0,0]]]},P={X:[[new fe(new un(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new fe(new un(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new fe(new un(.2,0,.6,4),n),[0,.3,0]],[new fe(new un(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new fe(new un(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new fe(new un(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XYZ:[[new fe(new _r(.2,0),n)]],XY:[[new fe(new wt(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new fe(new wt(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new fe(new wt(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]]},T={START:[[new fe(new _r(.01,2),i),null,null,null,"helper"]],END:[[new fe(new _r(.01,2),i),null,null,null,"helper"]],DELTA:[[new qn(S(),i),null,null,null,"helper"]],X:[[new qn(v,i.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new qn(v,i.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new qn(v,i.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]},I={XYZE:[[new fe(y(.5,1),b),null,[0,Math.PI/2,0]]],X:[[new fe(y(.5,.5),r)]],Y:[[new fe(y(.5,.5),o),null,[0,0,-Math.PI/2]]],Z:[[new fe(y(.5,.5),l),null,[0,Math.PI/2,0]]],E:[[new fe(y(.75,1),m),null,[0,Math.PI/2,0]]]},B={AXIS:[[new qn(v,i.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]]},E={XYZE:[[new fe(new al(.25,10,8),n)]],X:[[new fe(new _s(.5,.1,4,24),n),[0,0,0],[0,-Math.PI/2,-Math.PI/2]]],Y:[[new fe(new _s(.5,.1,4,24),n),[0,0,0],[Math.PI/2,0,0]]],Z:[[new fe(new _s(.5,.1,4,24),n),[0,0,0],[0,0,-Math.PI/2]]],E:[[new fe(new _s(.75,.1,2,24),n)]]},R={X:[[new fe(x,r),[.5,0,0],[0,0,-Math.PI/2]],[new fe(M,r),[0,0,0],[0,0,-Math.PI/2]],[new fe(x,r),[-.5,0,0],[0,0,Math.PI/2]]],Y:[[new fe(x,o),[0,.5,0]],[new fe(M,o)],[new fe(x,o),[0,-.5,0],[0,0,Math.PI]]],Z:[[new fe(x,l),[0,0,.5],[Math.PI/2,0,0]],[new fe(M,l),[0,0,0],[Math.PI/2,0,0]],[new fe(x,l),[0,0,-.5],[-Math.PI/2,0,0]]],XY:[[new fe(new wt(.15,.15,.01),d),[.15,.15,0]]],YZ:[[new fe(new wt(.15,.15,.01),c),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new fe(new wt(.15,.15,.01),u),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new fe(new wt(.1,.1,.1),f.clone())]]},k={X:[[new fe(new un(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new fe(new un(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new fe(new un(.2,0,.6,4),n),[0,.3,0]],[new fe(new un(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new fe(new un(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new fe(new un(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XY:[[new fe(new wt(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new fe(new wt(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new fe(new wt(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new fe(new wt(.2,.2,.2),n),[0,0,0]]]},W={X:[[new qn(v,i.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new qn(v,i.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new qn(v,i.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]};function U(H){const G=new gt;for(const X in H)for(let Q=H[X].length;Q--;){const K=H[X][Q][0].clone(),ie=H[X][Q][1],ne=H[X][Q][2],me=H[X][Q][3],he=H[X][Q][4];K.name=X,K.tag=he,ie&&K.position.set(ie[0],ie[1],ie[2]),ne&&K.rotation.set(ne[0],ne[1],ne[2]),me&&K.scale.set(me[0],me[1],me[2]),K.updateMatrix();const q=K.geometry.clone();q.applyMatrix4(K.matrix),K.geometry=q,K.renderOrder=1/0,K.position.set(0,0,0),K.rotation.set(0,0,0),K.scale.set(1,1,1),G.add(K)}return G}this.gizmo={},this.picker={},this.helper={},this.add(this.gizmo.translate=U(C)),this.add(this.gizmo.rotate=U(I)),this.add(this.gizmo.scale=U(R)),this.add(this.picker.translate=U(P)),this.add(this.picker.rotate=U(E)),this.add(this.picker.scale=U(k)),this.add(this.helper.translate=U(T)),this.add(this.helper.rotate=U(B)),this.add(this.helper.scale=U(W)),this.picker.translate.visible=!1,this.picker.rotate.visible=!1,this.picker.scale.visible=!1}updateMatrixWorld(e){const n=(this.mode==="scale"?"local":this.space)==="local"?this.worldQuaternion:Ha;this.gizmo.translate.visible=this.mode==="translate",this.gizmo.rotate.visible=this.mode==="rotate",this.gizmo.scale.visible=this.mode==="scale",this.helper.translate.visible=this.mode==="translate",this.helper.rotate.visible=this.mode==="rotate",this.helper.scale.visible=this.mode==="scale";let i=[];i=i.concat(this.picker[this.mode].children),i=i.concat(this.gizmo[this.mode].children),i=i.concat(this.helper[this.mode].children);for(let r=0;r<i.length;r++){const o=i[r];o.visible=!0,o.rotation.set(0,0,0),o.position.copy(this.worldPosition);let l;if(this.camera.isOrthographicCamera?l=(this.camera.top-this.camera.bottom)/this.camera.zoom:l=this.worldPosition.distanceTo(this.cameraPosition)*Math.min(1.9*Math.tan(Math.PI*this.camera.fov/360)/this.camera.zoom,7),o.scale.set(1,1,1).multiplyScalar(l*this.size/4),o.tag==="helper"){o.visible=!1,o.name==="AXIS"?(o.visible=!!this.axis,this.axis==="X"&&(Nt.setFromEuler(wa.set(0,0,0)),o.quaternion.copy(n).multiply(Nt),Math.abs(Mt.copy(xo).applyQuaternion(n).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Y"&&(Nt.setFromEuler(wa.set(0,0,Math.PI/2)),o.quaternion.copy(n).multiply(Nt),Math.abs(Mt.copy(fs).applyQuaternion(n).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Z"&&(Nt.setFromEuler(wa.set(0,Math.PI/2,0)),o.quaternion.copy(n).multiply(Nt),Math.abs(Mt.copy(bo).applyQuaternion(n).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="XYZE"&&(Nt.setFromEuler(wa.set(0,Math.PI/2,0)),Mt.copy(this.rotationAxis),o.quaternion.setFromRotationMatrix(ef.lookAt(Jp,Mt,fs)),o.quaternion.multiply(Nt),o.visible=this.dragging),this.axis==="E"&&(o.visible=!1)):o.name==="START"?(o.position.copy(this.worldPositionStart),o.visible=this.dragging):o.name==="END"?(o.position.copy(this.worldPosition),o.visible=this.dragging):o.name==="DELTA"?(o.position.copy(this.worldPositionStart),o.quaternion.copy(this.worldQuaternionStart),hn.set(1e-10,1e-10,1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1),hn.applyQuaternion(this.worldQuaternionStart.clone().invert()),o.scale.copy(hn),o.visible=this.dragging):(o.quaternion.copy(n),this.dragging?o.position.copy(this.worldPositionStart):o.position.copy(this.worldPosition),this.axis&&(o.visible=this.axis.search(o.name)!==-1));continue}o.quaternion.copy(n),this.mode==="translate"||this.mode==="scale"?(o.name==="X"&&Math.abs(Mt.copy(xo).applyQuaternion(n).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Y"&&Math.abs(Mt.copy(fs).applyQuaternion(n).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Z"&&Math.abs(Mt.copy(bo).applyQuaternion(n).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XY"&&Math.abs(Mt.copy(bo).applyQuaternion(n).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="YZ"&&Math.abs(Mt.copy(xo).applyQuaternion(n).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XZ"&&Math.abs(Mt.copy(fs).applyQuaternion(n).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1)):this.mode==="rotate"&&(Ma.copy(n),Mt.copy(this.eye).applyQuaternion(Nt.copy(n).invert()),o.name.search("E")!==-1&&o.quaternion.setFromRotationMatrix(ef.lookAt(this.eye,Jp,fs)),o.name==="X"&&(Nt.setFromAxisAngle(xo,Math.atan2(-Mt.y,Mt.z)),Nt.multiplyQuaternions(Ma,Nt),o.quaternion.copy(Nt)),o.name==="Y"&&(Nt.setFromAxisAngle(fs,Math.atan2(Mt.x,Mt.z)),Nt.multiplyQuaternions(Ma,Nt),o.quaternion.copy(Nt)),o.name==="Z"&&(Nt.setFromAxisAngle(bo,Math.atan2(Mt.y,Mt.x)),Nt.multiplyQuaternions(Ma,Nt),o.quaternion.copy(Nt))),o.visible=o.visible&&(o.name.indexOf("X")===-1||this.showX),o.visible=o.visible&&(o.name.indexOf("Y")===-1||this.showY),o.visible=o.visible&&(o.name.indexOf("Z")===-1||this.showZ),o.visible=o.visible&&(o.name.indexOf("E")===-1||this.showX&&this.showY&&this.showZ),o.material._color=o.material._color||o.material.color.clone(),o.material._opacity=o.material._opacity||o.material.opacity,o.material.color.copy(o.material._color),o.material.opacity=o.material._opacity,this.enabled&&this.axis&&(o.name===this.axis||this.axis.split("").some(function(c){return o.name===c}))&&(o.material.color.setHex(16776960),o.material.opacity=1)}super.updateMatrixWorld(e)}}class CS extends fe{constructor(){super(new Ln(1e5,1e5,2,2),new si({visible:!1,wireframe:!0,side:gn,transparent:!0,opacity:.1,toneMapped:!1})),this.isTransformControlsPlane=!0,this.type="TransformControlsPlane"}updateMatrixWorld(e){let t=this.space;switch(this.position.copy(this.worldPosition),this.mode==="scale"&&(t="local"),Ea.copy(xo).applyQuaternion(t==="local"?this.worldQuaternion:Ha),ao.copy(fs).applyQuaternion(t==="local"?this.worldQuaternion:Ha),lo.copy(bo).applyQuaternion(t==="local"?this.worldQuaternion:Ha),Mt.copy(ao),this.mode){case"translate":case"scale":switch(this.axis){case"X":Mt.copy(this.eye).cross(Ea),ti.copy(Ea).cross(Mt);break;case"Y":Mt.copy(this.eye).cross(ao),ti.copy(ao).cross(Mt);break;case"Z":Mt.copy(this.eye).cross(lo),ti.copy(lo).cross(Mt);break;case"XY":ti.copy(lo);break;case"YZ":ti.copy(Ea);break;case"XZ":Mt.copy(lo),ti.copy(ao);break;case"XYZ":case"E":ti.set(0,0,0);break}break;case"rotate":default:ti.set(0,0,0)}ti.length()===0?this.quaternion.copy(this.cameraQuaternion):(tf.lookAt(hn.set(0,0,0),ti,Mt),this.quaternion.setFromRotationMatrix(tf)),super.updateMatrixWorld(e)}}function PS(s,e=!1){const t=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},l=s[0].morphTargetsRelative,c=new sn;let u=0;for(let d=0;d<s.length;++d){const f=s[d];let m=0;if(t!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const g in f.attributes){if(!n.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+'. All geometries must have compatible attributes; make sure "'+g+'" attribute exists among all geometries, or in none of them.'),null;r[g]===void 0&&(r[g]=[]),r[g].push(f.attributes[g]),m++}if(m!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". Make sure all geometries have the same number of attributes."),null;if(l!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const g in f.morphAttributes){if(!i.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+".  .morphAttributes must be consistent throughout all geometries."),null;o[g]===void 0&&(o[g]=[]),o[g].push(f.morphAttributes[g])}if(e){let g;if(t)g=f.index.count;else if(f.attributes.position!==void 0)g=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". The geometry must have either an index or a position attribute"),null;c.addGroup(u,g,d),u+=g}}if(t){let d=0;const f=[];for(let m=0;m<s.length;++m){const g=s[m].index;for(let b=0;b<g.count;++b)f.push(g.getX(b)+d);d+=s[m].attributes.position.count}c.setIndex(f)}for(const d in r){const f=nf(r[d]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+d+" attribute."),null;c.setAttribute(d,f)}for(const d in o){const f=o[d][0].length;if(f===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[d]=[];for(let m=0;m<f;++m){const g=[];for(let w=0;w<o[d].length;++w)g.push(o[d][w][m]);const b=nf(g);if(!b)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+d+" morphAttribute."),null;c.morphAttributes[d].push(b)}}return c}function nf(s){let e,t,n,i=-1,r=0;for(let u=0;u<s.length;++u){const d=s[u];if(e===void 0&&(e=d.array.constructor),e!==d.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=d.itemSize),t!==d.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=d.normalized),n!==d.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=d.gpuType),i!==d.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=d.count*t}const o=new e(r),l=new Rt(o,t,n);let c=0;for(let u=0;u<s.length;++u){const d=s[u];if(d.isInterleavedBufferAttribute){const f=c/t;for(let m=0,g=d.count;m<g;m++)for(let b=0;b<t;b++){const w=d.getComponent(m,b);l.setComponent(m+f,b,w)}}else o.set(d.array,c);c+=d.count*t}return i!==void 0&&(l.gpuType=i),l}function Um(s,e=1e-4){e=Math.max(e,Number.EPSILON);const t={},n=s.getIndex(),i=s.getAttribute("position"),r=n?n.count:i.count;let o=0;const l=Object.keys(s.attributes),c={},u={},d=[],f=["getX","getY","getZ","getW"],m=["setX","setY","setZ","setW"];for(let M=0,y=l.length;M<y;M++){const S=l[M],C=s.attributes[S];c[S]=new Rt(new C.array.constructor(C.count*C.itemSize),C.itemSize,C.normalized);const P=s.morphAttributes[S];P&&(u[S]=new Rt(new P.array.constructor(P.count*P.itemSize),P.itemSize,P.normalized))}const g=e*.5,b=Math.log10(1/e),w=Math.pow(10,b),x=g*w;for(let M=0;M<r;M++){const y=n?n.getX(M):M;let S="";for(let C=0,P=l.length;C<P;C++){const T=l[C],I=s.getAttribute(T),B=I.itemSize;for(let E=0;E<B;E++)S+=`${~~(I[f[E]](y)*w+x)},`}if(S in t)d.push(t[S]);else{for(let C=0,P=l.length;C<P;C++){const T=l[C],I=s.getAttribute(T),B=s.morphAttributes[T],E=I.itemSize,R=c[T],k=u[T];for(let W=0;W<E;W++){const U=f[W],H=m[W];if(R[H](o,I[U](y)),B)for(let G=0,X=B.length;G<X;G++)k[G][H](o,B[G][U](y))}}t[S]=o,d.push(o),o++}}const v=s.clone();for(const M in s.attributes){const y=c[M];if(v.setAttribute(M,new Rt(y.array.slice(0,o*y.itemSize),y.itemSize,y.normalized)),M in u)for(let S=0;S<u[M].length;S++){const C=u[M][S];v.morphAttributes[M][S]=new Rt(C.array.slice(0,o*C.itemSize),C.itemSize,C.normalized)}}return v.setIndex(d),v}function sf(s,e){if(e===$_)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Yc||e===rm){let t=s.getIndex();if(t===null){const o=[],l=s.getAttribute("position");if(l!==void 0){for(let c=0;c<l.count;c++)o.push(c);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===Yc)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class RS extends Fr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new US(t)}),this.register(function(t){return new WS(t)}),this.register(function(t){return new XS(t)}),this.register(function(t){return new jS(t)}),this.register(function(t){return new OS(t)}),this.register(function(t){return new BS(t)}),this.register(function(t){return new kS(t)}),this.register(function(t){return new VS(t)}),this.register(function(t){return new NS(t)}),this.register(function(t){return new zS(t)}),this.register(function(t){return new FS(t)}),this.register(function(t){return new GS(t)}),this.register(function(t){return new HS(t)}),this.register(function(t){return new IS(t)}),this.register(function(t){return new qS(t)}),this.register(function(t){return new YS(t)})}load(e,t,n,i){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const u=To.extractUrlBase(e);o=To.resolveURL(u,this.path)}else o=To.extractUrlBase(e);this.manager.itemStart(e);const l=function(u){i?i(u):console.error(u),r.manager.itemError(e),r.manager.itemEnd(e)},c=new Dm(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(u){try{r.parse(u,o,function(d){t(d),r.manager.itemEnd(e)},l)}catch(d){l(d)}},n,l)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const o={},l={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Fm){try{o[at.KHR_BINARY_GLTF]=new KS(e)}catch(f){i&&i(f);return}r=JSON.parse(o[at.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const u=new lT(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});u.fileLoader.setRequestHeader(this.requestHeader);for(let d=0;d<this.pluginCallbacks.length;d++){const f=this.pluginCallbacks[d](u);f.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),l[f.name]=f,o[f.name]=!0}if(r.extensionsUsed)for(let d=0;d<r.extensionsUsed.length;++d){const f=r.extensionsUsed[d],m=r.extensionsRequired||[];switch(f){case at.KHR_MATERIALS_UNLIT:o[f]=new DS;break;case at.KHR_DRACO_MESH_COMPRESSION:o[f]=new $S(r,this.dracoLoader);break;case at.KHR_TEXTURE_TRANSFORM:o[f]=new ZS;break;case at.KHR_MESH_QUANTIZATION:o[f]=new QS;break;default:m.indexOf(f)>=0&&l[f]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+f+'".')}}u.setExtensions(o),u.setPlugins(l),u.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function LS(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const at={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class IS{constructor(e){this.parser=e,this.name=at.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let u;const d=new Ge(16777215);c.color!==void 0&&d.setRGB(c.color[0],c.color[1],c.color[2],nn);const f=c.range!==void 0?c.range:0;switch(c.type){case"directional":u=new Fu(d),u.target.position.set(0,0,-1),u.add(u.target);break;case"point":u=new Uu(d),u.distance=f;break;case"spot":u=new Nm(d),u.distance=f,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,u.angle=c.spot.outerConeAngle,u.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,u.target.position.set(0,0,-1),u.add(u.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return u.position.set(0,0,0),u.decay=2,Yi(u,c),c.intensity!==void 0&&(u.intensity=c.intensity),u.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(u),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],l=(r.extensions&&r.extensions[this.name]||{}).light;return l===void 0?null:this._loadLight(l).then(function(c){return n._getNodeRef(t.cache,l,c)})}}class DS{constructor(){this.name=at.KHR_MATERIALS_UNLIT}getMaterialType(){return si}extendParams(e,t,n){const i=[];e.color=new Ge(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],nn),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,Ot))}return Promise.all(i)}}class NS{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class US{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ci}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const l=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Re(l,l)}return Promise.all(r)}}class FS{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ci}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class OS{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ci}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Ge(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const l=o.sheenColorFactor;t.sheenColor.setRGB(l[0],l[1],l[2],nn)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Ot)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class BS{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ci}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class kS{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ci}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const l=o.attenuationColor||[1,1,1];return t.attenuationColor=new Ge().setRGB(l[0],l[1],l[2],nn),Promise.all(r)}}class VS{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ci}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class zS{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ci}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const l=o.specularColorFactor||[1,1,1];return t.specularColor=new Ge().setRGB(l[0],l[1],l[2],nn),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Ot)),Promise.all(r)}}class HS{constructor(e){this.parser=e,this.name=at.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ci}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class GS{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ci}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class WS{constructor(e){this.parser=e,this.name=at.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class XS{constructor(e){this.parser=e,this.name=at.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],l=i.images[o.source];let c=n.textureLoader;if(l.uri){const u=n.options.manager.getHandler(l.uri);u!==null&&(c=u)}return this.detectSupport().then(function(u){if(u)return n.loadTextureImage(e,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class jS{constructor(e){this.parser=e,this.name=at.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],l=i.images[o.source];let c=n.textureLoader;if(l.uri){const u=n.options.manager.getHandler(l.uri);u!==null&&(c=u)}return this.detectSupport().then(function(u){if(u)return n.loadTextureImage(e,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class qS{constructor(e){this.name=at.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(l){const c=i.byteOffset||0,u=i.byteLength||0,d=i.count,f=i.byteStride,m=new Uint8Array(l,c,u);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(d,f,m,i.mode,i.filter).then(function(g){return g.buffer}):o.ready.then(function(){const g=new ArrayBuffer(d*f);return o.decodeGltfBuffer(new Uint8Array(g),d,f,m,i.mode,i.filter),g})})}else return null}}class YS{constructor(e){this.name=at.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const u of i.primitives)if(u.mode!==Fn.TRIANGLES&&u.mode!==Fn.TRIANGLE_STRIP&&u.mode!==Fn.TRIANGLE_FAN&&u.mode!==void 0)return null;const o=n.extensions[this.name].attributes,l=[],c={};for(const u in o)l.push(this.parser.getDependency("accessor",o[u]).then(d=>(c[u]=d,c[u])));return l.length<1?null:(l.push(this.parser.createNodeMesh(e)),Promise.all(l).then(u=>{const d=u.pop(),f=d.isGroup?d.children:[d],m=u[0].count,g=[];for(const b of f){const w=new Xe,x=new D,v=new Wt,M=new D(1,1,1),y=new VE(b.geometry,b.material,m);for(let S=0;S<m;S++)c.TRANSLATION&&x.fromBufferAttribute(c.TRANSLATION,S),c.ROTATION&&v.fromBufferAttribute(c.ROTATION,S),c.SCALE&&M.fromBufferAttribute(c.SCALE,S),y.setMatrixAt(S,w.compose(x,v,M));for(const S in c)if(S==="_COLOR_0"){const C=c[S];y.instanceColor=new Jc(C.array,C.itemSize,C.normalized)}else S!=="TRANSLATION"&&S!=="ROTATION"&&S!=="SCALE"&&b.geometry.setAttribute(S,c[S]);gt.prototype.copy.call(y,b),this.parser.assignFinalMaterial(y),g.push(y)}return d.isGroup?(d.clear(),d.add(...g),d):g[0]}))}}const Fm="glTF",co=12,rf={JSON:1313821514,BIN:5130562};class KS{constructor(e){this.name=at.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,co),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Fm)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-co,r=new DataView(e,co);let o=0;for(;o<i;){const l=r.getUint32(o,!0);o+=4;const c=r.getUint32(o,!0);if(o+=4,c===rf.JSON){const u=new Uint8Array(e,co+o,l);this.content=n.decode(u)}else if(c===rf.BIN){const u=co+o;this.body=e.slice(u,u+l)}o+=l}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class $S{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=at.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,l={},c={},u={};for(const d in o){const f=nu[d]||d.toLowerCase();l[f]=o[d]}for(const d in e.attributes){const f=nu[d]||d.toLowerCase();if(o[d]!==void 0){const m=n.accessors[e.attributes[d]],g=wr[m.componentType];u[f]=g.name,c[f]=m.normalized===!0}}return t.getDependency("bufferView",r).then(function(d){return new Promise(function(f,m){i.decodeDracoFile(d,function(g){for(const b in g.attributes){const w=g.attributes[b],x=c[b];x!==void 0&&(w.normalized=x)}f(g)},l,u,nn,m)})})}}class ZS{constructor(){this.name=at.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class QS{constructor(){this.name=at.KHR_MESH_QUANTIZATION}}class Om extends No{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,l=this.valueSize,c=l*2,u=l*3,d=i-t,f=(n-t)/d,m=f*f,g=m*f,b=e*u,w=b-u,x=-2*g+3*m,v=g-m,M=1-x,y=v-m+f;for(let S=0;S!==l;S++){const C=o[w+S+l],P=o[w+S+c]*d,T=o[b+S+l],I=o[b+S]*d;r[S]=M*C+y*P+x*T+v*I}return r}}const JS=new Wt;class eT extends Om{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return JS.fromArray(r).normalize().toArray(r),r}}const Fn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},wr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},of={9728:ft,9729:xt,9984:jc,9985:Va,9986:mr,9987:Si},af={33071:dn,33648:Ya,10497:Sr},Ec={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},nu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Xi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},tT={CUBICSPLINE:void 0,LINEAR:Ar,STEP:Ro},Sc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function nT(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new ll({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:$n})),s.DefaultMaterial}function ds(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Yi(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function iT(s,e,t){let n=!1,i=!1,r=!1;for(let u=0,d=e.length;u<d;u++){const f=e[u];if(f.POSITION!==void 0&&(n=!0),f.NORMAL!==void 0&&(i=!0),f.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const o=[],l=[],c=[];for(let u=0,d=e.length;u<d;u++){const f=e[u];if(n){const m=f.POSITION!==void 0?t.getDependency("accessor",f.POSITION):s.attributes.position;o.push(m)}if(i){const m=f.NORMAL!==void 0?t.getDependency("accessor",f.NORMAL):s.attributes.normal;l.push(m)}if(r){const m=f.COLOR_0!==void 0?t.getDependency("accessor",f.COLOR_0):s.attributes.color;c.push(m)}}return Promise.all([Promise.all(o),Promise.all(l),Promise.all(c)]).then(function(u){const d=u[0],f=u[1],m=u[2];return n&&(s.morphAttributes.position=d),i&&(s.morphAttributes.normal=f),r&&(s.morphAttributes.color=m),s.morphTargetsRelative=!0,s})}function sT(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function rT(s){let e;const t=s.extensions&&s.extensions[at.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Tc(t.attributes):e=s.indices+":"+Tc(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+Tc(s.targets[n]);return e}function Tc(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function iu(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function oT(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const aT=new Xe;class lT{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new LS,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,r=-1;typeof navigator!="undefined"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,r=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap=="undefined"||n||i&&r<98?this.textureLoader=new iS(this.options.manager):this.textureLoader=new lS(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Dm(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const l={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return ds(r,l,i),Yi(l,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(l)})).then(function(){e(l)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const o=t[i].joints;for(let l=0,c=o.length;l<c;l++)e[o[l]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(o,l)=>{const c=this.associations.get(o);c!=null&&this.associations.set(l,c);for(const[u,d]of o.children.entries())r(d,l.children[u])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[at.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,o){n.load(To.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=Ec[i.type],l=wr[i.componentType],c=i.normalized===!0,u=new l(i.count*o);return Promise.resolve(new Rt(u,o,c))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){const l=o[0],c=Ec[i.type],u=wr[i.componentType],d=u.BYTES_PER_ELEMENT,f=d*c,m=i.byteOffset||0,g=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,b=i.normalized===!0;let w,x;if(g&&g!==f){const v=Math.floor(m/g),M="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+v+":"+i.count;let y=t.cache.get(M);y||(w=new u(l,v*g,i.count*g/d),y=new UE(w,g/d),t.cache.add(M,y)),x=new Pu(y,c,m%g/d,b)}else l===null?w=new u(i.count*c):w=new u(l,m,i.count*c),x=new Rt(w,c,b);if(i.sparse!==void 0){const v=Ec.SCALAR,M=wr[i.sparse.indices.componentType],y=i.sparse.indices.byteOffset||0,S=i.sparse.values.byteOffset||0,C=new M(o[1],y,i.sparse.count*v),P=new u(o[2],S,i.sparse.count*c);l!==null&&(x=new Rt(x.array.slice(),x.itemSize,x.normalized));for(let T=0,I=C.length;T<I;T++){const B=C[T];if(x.setX(B,P[T*c]),c>=2&&x.setY(B,P[T*c+1]),c>=3&&x.setZ(B,P[T*c+2]),c>=4&&x.setW(B,P[T*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return x})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let l=this.textureLoader;if(o.uri){const c=n.manager.getHandler(o.uri);c!==null&&(l=c)}return this.loadTextureImage(e,r,l)}loadTextureImage(e,t,n){const i=this,r=this.json,o=r.textures[e],l=r.images[t],c=(l.uri||l.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const u=this.loadImageSource(t,n).then(function(d){d.flipY=!1,d.name=o.name||l.name||"",d.name===""&&typeof l.uri=="string"&&l.uri.startsWith("data:image/")===!1&&(d.name=l.uri);const m=(r.samplers||{})[o.sampler]||{};return d.magFilter=of[m.magFilter]||xt,d.minFilter=of[m.minFilter]||Si,d.wrapS=af[m.wrapS]||Sr,d.wrapT=af[m.wrapT]||Sr,i.associations.set(d,{textures:e}),d}).catch(function(){return null});return this.textureCache[c]=u,u}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());const o=i.images[e],l=self.URL||self.webkitURL;let c=o.uri||"",u=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(f){u=!0;const m=new Blob([f],{type:o.mimeType});return c=l.createObjectURL(m),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const d=Promise.resolve(c).then(function(f){return new Promise(function(m,g){let b=m;t.isImageBitmapLoader===!0&&(b=function(w){const x=new qt(w);x.needsUpdate=!0,m(x)}),t.load(To.resolveURL(f,r.path),b,void 0,g)})}).then(function(f){return u===!0&&l.revokeObjectURL(c),f.userData.mimeType=o.mimeType||oT(o.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),f});return this.sourceCache[e]=d,d}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[at.KHR_TEXTURE_TRANSFORM]){const l=n.extensions!==void 0?n.extensions[at.KHR_TEXTURE_TRANSFORM]:void 0;if(l){const c=r.associations.get(o);o=r.extensions[at.KHR_TEXTURE_TRANSFORM].extendTexture(o,l),r.associations.set(o,c)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const l="PointsMaterial:"+n.uuid;let c=this.cache.get(l);c||(c=new Rm,oi.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(l,c)),n=c}else if(e.isLine){const l="LineBasicMaterial:"+n.uuid;let c=this.cache.get(l);c||(c=new Lu,oi.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(l,c)),n=c}if(i||r||o){let l="ClonedMaterial:"+n.uuid+":";i&&(l+="derivative-tangents:"),r&&(l+="vertex-colors:"),o&&(l+="flat-shading:");let c=this.cache.get(l);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(l,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return ll}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let o;const l={},c=r.extensions||{},u=[];if(c[at.KHR_MATERIALS_UNLIT]){const f=i[at.KHR_MATERIALS_UNLIT];o=f.getMaterialType(),u.push(f.extendParams(l,r,t))}else{const f=r.pbrMetallicRoughness||{};if(l.color=new Ge(1,1,1),l.opacity=1,Array.isArray(f.baseColorFactor)){const m=f.baseColorFactor;l.color.setRGB(m[0],m[1],m[2],nn),l.opacity=m[3]}f.baseColorTexture!==void 0&&u.push(t.assignTexture(l,"map",f.baseColorTexture,Ot)),l.metalness=f.metallicFactor!==void 0?f.metallicFactor:1,l.roughness=f.roughnessFactor!==void 0?f.roughnessFactor:1,f.metallicRoughnessTexture!==void 0&&(u.push(t.assignTexture(l,"metalnessMap",f.metallicRoughnessTexture)),u.push(t.assignTexture(l,"roughnessMap",f.metallicRoughnessTexture))),o=this._invokeOne(function(m){return m.getMaterialType&&m.getMaterialType(e)}),u.push(Promise.all(this._invokeAll(function(m){return m.extendMaterialParams&&m.extendMaterialParams(e,l)})))}r.doubleSided===!0&&(l.side=gn);const d=r.alphaMode||Sc.OPAQUE;if(d===Sc.BLEND?(l.transparent=!0,l.depthWrite=!1):(l.transparent=!1,d===Sc.MASK&&(l.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==si&&(u.push(t.assignTexture(l,"normalMap",r.normalTexture)),l.normalScale=new Re(1,1),r.normalTexture.scale!==void 0)){const f=r.normalTexture.scale;l.normalScale.set(f,f)}if(r.occlusionTexture!==void 0&&o!==si&&(u.push(t.assignTexture(l,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(l.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==si){const f=r.emissiveFactor;l.emissive=new Ge().setRGB(f[0],f[1],f[2],nn)}return r.emissiveTexture!==void 0&&o!==si&&u.push(t.assignTexture(l,"emissiveMap",r.emissiveTexture,Ot)),Promise.all(u).then(function(){const f=new o(l);return r.name&&(f.name=r.name),Yi(f,r),t.associations.set(f,{materials:e}),r.extensions&&ds(i,f,r),f})}createUniqueName(e){const t=_t.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(l){return n[at.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(l,t).then(function(c){return lf(c,l,t)})}const o=[];for(let l=0,c=e.length;l<c;l++){const u=e[l],d=rT(u),f=i[d];if(f)o.push(f.promise);else{let m;u.extensions&&u.extensions[at.KHR_DRACO_MESH_COMPRESSION]?m=r(u):m=lf(new sn,u,t),i[d]={primitive:u,promise:m},o.push(m)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,l=[];for(let c=0,u=o.length;c<u;c++){const d=o[c].material===void 0?nT(this.cache):this.getDependency("material",o[c].material);l.push(d)}return l.push(t.loadGeometries(o)),Promise.all(l).then(function(c){const u=c.slice(0,c.length-1),d=c[c.length-1],f=[];for(let g=0,b=d.length;g<b;g++){const w=d[g],x=o[g];let v;const M=u[g];if(x.mode===Fn.TRIANGLES||x.mode===Fn.TRIANGLE_STRIP||x.mode===Fn.TRIANGLE_FAN||x.mode===void 0)v=r.isSkinnedMesh===!0?new OE(w,M):new fe(w,M),v.isSkinnedMesh===!0&&v.normalizeSkinWeights(),x.mode===Fn.TRIANGLE_STRIP?v.geometry=sf(v.geometry,rm):x.mode===Fn.TRIANGLE_FAN&&(v.geometry=sf(v.geometry,Yc));else if(x.mode===Fn.LINES)v=new zE(w,M);else if(x.mode===Fn.LINE_STRIP)v=new qn(w,M);else if(x.mode===Fn.LINE_LOOP)v=new HE(w,M);else if(x.mode===Fn.POINTS)v=new GE(w,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+x.mode);Object.keys(v.geometry.morphAttributes).length>0&&sT(v,r),v.name=t.createUniqueName(r.name||"mesh_"+e),Yi(v,r),x.extensions&&ds(i,v,x),t.assignFinalMaterial(v),f.push(v)}for(let g=0,b=f.length;g<b;g++)t.associations.set(f[g],{meshes:e,primitives:g});if(f.length===1)return r.extensions&&ds(i,f[0],r),f[0];const m=new bs;r.extensions&&ds(i,m,r),t.associations.set(m,{meshes:e});for(let g=0,b=f.length;g<b;g++)m.add(f[g]);return m})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new mn(cm.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Jn(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Yi(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),o=i,l=[],c=[];for(let u=0,d=o.length;u<d;u++){const f=o[u];if(f){l.push(f);const m=new Xe;r!==null&&m.fromArray(r.array,u*16),c.push(m)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[u])}return new Ru(l,c)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],l=[],c=[],u=[],d=[];for(let f=0,m=i.channels.length;f<m;f++){const g=i.channels[f],b=i.samplers[g.sampler],w=g.target,x=w.node,v=i.parameters!==void 0?i.parameters[b.input]:b.input,M=i.parameters!==void 0?i.parameters[b.output]:b.output;w.node!==void 0&&(o.push(this.getDependency("node",x)),l.push(this.getDependency("accessor",v)),c.push(this.getDependency("accessor",M)),u.push(b),d.push(w))}return Promise.all([Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(u),Promise.all(d)]).then(function(f){const m=f[0],g=f[1],b=f[2],w=f[3],x=f[4],v=[];for(let M=0,y=m.length;M<y;M++){const S=m[M],C=g[M],P=b[M],T=w[M],I=x[M];if(S===void 0)continue;S.updateMatrix&&S.updateMatrix();const B=n._createAnimationTracks(S,C,P,T,I);if(B)for(let E=0;E<B.length;E++)v.push(B[E])}return new $E(r,void 0,v)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(l){if(!!l.isMesh)for(let c=0,u=i.weights.length;c<u;c++)l.morphTargetInfluences[c]=i.weights[c]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],l=i.children||[];for(let u=0,d=l.length;u<d;u++)o.push(n.getDependency("node",l[u]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),c]).then(function(u){const d=u[0],f=u[1],m=u[2];m!==null&&d.traverse(function(g){!g.isSkinnedMesh||g.bind(m,aT)});for(let g=0,b=f.length;g<b;g++)d.add(f[g]);return d})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",l=[],c=i._invokeOne(function(u){return u.createNodeMesh&&u.createNodeMesh(e)});return c&&l.push(c),r.camera!==void 0&&l.push(i.getDependency("camera",r.camera).then(function(u){return i._getNodeRef(i.cameraCache,r.camera,u)})),i._invokeAll(function(u){return u.createNodeAttachment&&u.createNodeAttachment(e)}).forEach(function(u){l.push(u)}),this.nodeCache[e]=Promise.all(l).then(function(u){let d;if(r.isBone===!0?d=new Pm:u.length>1?d=new bs:u.length===1?d=u[0]:d=new gt,d!==u[0])for(let f=0,m=u.length;f<m;f++)d.add(u[f]);if(r.name&&(d.userData.name=r.name,d.name=o),Yi(d,r),r.extensions&&ds(n,d,r),r.matrix!==void 0){const f=new Xe;f.fromArray(r.matrix),d.applyMatrix4(f)}else r.translation!==void 0&&d.position.fromArray(r.translation),r.rotation!==void 0&&d.quaternion.fromArray(r.rotation),r.scale!==void 0&&d.scale.fromArray(r.scale);return i.associations.has(d)||i.associations.set(d,{}),i.associations.get(d).nodes=e,d}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new bs;n.name&&(r.name=i.createUniqueName(n.name)),Yi(r,n),n.extensions&&ds(t,r,n);const o=n.nodes||[],l=[];for(let c=0,u=o.length;c<u;c++)l.push(i.getDependency("node",o[c]));return Promise.all(l).then(function(c){for(let d=0,f=c.length;d<f;d++)r.add(c[d]);const u=d=>{const f=new Map;for(const[m,g]of i.associations)(m instanceof oi||m instanceof qt)&&f.set(m,g);return d.traverse(m=>{const g=i.associations.get(m);g!=null&&f.set(m,g)}),f};return i.associations=u(r),r})}_createAnimationTracks(e,t,n,i,r){const o=[],l=e.name?e.name:e.uuid,c=[];Xi[r.path]===Xi.weights?e.traverse(function(m){m.morphTargetInfluences&&c.push(m.name?m.name:m.uuid)}):c.push(l);let u;switch(Xi[r.path]){case Xi.weights:u=Rr;break;case Xi.rotation:u=Ts;break;case Xi.position:case Xi.scale:u=Lr;break;default:switch(n.itemSize){case 1:u=Rr;break;case 2:case 3:default:u=Lr;break}break}const d=i.interpolation!==void 0?tT[i.interpolation]:Ar,f=this._getArrayFromAccessor(n);for(let m=0,g=c.length;m<g;m++){const b=new u(c[m]+"."+Xi[r.path],t.array,f,d);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(b),o.push(b)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=iu(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Ts?eT:Om;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function cT(s,e,t){const n=e.attributes,i=new zt;if(n.POSITION!==void 0){const l=t.json.accessors[n.POSITION],c=l.min,u=l.max;if(c!==void 0&&u!==void 0){if(i.set(new D(c[0],c[1],c[2]),new D(u[0],u[1],u[2])),l.normalized){const d=iu(wr[l.componentType]);i.min.multiplyScalar(d),i.max.multiplyScalar(d)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const l=new D,c=new D;for(let u=0,d=r.length;u<d;u++){const f=r[u];if(f.POSITION!==void 0){const m=t.json.accessors[f.POSITION],g=m.min,b=m.max;if(g!==void 0&&b!==void 0){if(c.setX(Math.max(Math.abs(g[0]),Math.abs(b[0]))),c.setY(Math.max(Math.abs(g[1]),Math.abs(b[1]))),c.setZ(Math.max(Math.abs(g[2]),Math.abs(b[2]))),m.normalized){const w=iu(wr[m.componentType]);c.multiplyScalar(w)}l.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(l)}s.boundingBox=i;const o=new Qn;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function lf(s,e,t){const n=e.attributes,i=[];function r(o,l){return t.getDependency("accessor",o).then(function(c){s.setAttribute(l,c)})}for(const o in n){const l=nu[o]||o.toLowerCase();l in s.attributes||i.push(r(n[o],l))}if(e.indices!==void 0&&!s.index){const o=t.getDependency("accessor",e.indices).then(function(l){s.setIndex(l)});i.push(o)}return mt.workingColorSpace!==nn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${mt.workingColorSpace}" not supported.`),Yi(s,e),cT(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?iT(s,e.targets,t):s})}var uT=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},su={exports:{}};/*! Tweakpane 3.1.0 (c) 2016 cocopon, licensed under the MIT license. */(function(s,e){(function(t,n){n(e)})(uT,function(t){class n{constructor(a){const[h,_]=a.split("-"),A=h.split(".");this.major=parseInt(A[0],10),this.minor=parseInt(A[1],10),this.patch=parseInt(A[2],10),this.prerelease=_!=null?_:null}toString(){const a=[this.major,this.minor,this.patch].join(".");return this.prerelease!==null?[a,this.prerelease].join("-"):a}}class i{constructor(a){this.controller_=a}get element(){return this.controller_.view.element}get disabled(){return this.controller_.viewProps.get("disabled")}set disabled(a){this.controller_.viewProps.set("disabled",a)}get hidden(){return this.controller_.viewProps.get("hidden")}set hidden(a){this.controller_.viewProps.set("hidden",a)}dispose(){this.controller_.viewProps.set("disposed",!0)}}class r{constructor(a){this.target=a}}class o extends r{constructor(a,h,_,A){super(a),this.value=h,this.presetKey=_,this.last=A!=null?A:!0}}class l extends r{constructor(a,h,_){super(a),this.value=h,this.presetKey=_}}class c extends r{constructor(a,h){super(a),this.expanded=h}}class u extends r{constructor(a,h){super(a),this.index=h}}function d(p){return p}function f(p){return p==null}function m(p,a){if(p.length!==a.length)return!1;for(let h=0;h<p.length;h++)if(p[h]!==a[h])return!1;return!0}const g={alreadydisposed:()=>"View has been already disposed",invalidparams:p=>`Invalid parameters for '${p.name}'`,nomatchingcontroller:p=>`No matching controller for '${p.key}'`,nomatchingview:p=>`No matching view for '${JSON.stringify(p.params)}'`,notbindable:()=>"Value is not bindable",propertynotfound:p=>`Property '${p.name}' not found`,shouldneverhappen:()=>"This error should never happen"};class b{constructor(a){var h;this.message=(h=g[a.type](a.context))!==null&&h!==void 0?h:"Unexpected error",this.name=this.constructor.name,this.stack=new Error(this.message).stack,this.type=a.type}static alreadyDisposed(){return new b({type:"alreadydisposed"})}static notBindable(){return new b({type:"notbindable"})}static propertyNotFound(a){return new b({type:"propertynotfound",context:{name:a}})}static shouldNeverHappen(){return new b({type:"shouldneverhappen"})}}class w{constructor(a,h,_){this.obj_=a,this.key_=h,this.presetKey_=_!=null?_:h}static isBindable(a){return!(a===null||typeof a!="object")}get key(){return this.key_}get presetKey(){return this.presetKey_}read(){return this.obj_[this.key_]}write(a){this.obj_[this.key_]=a}writeProperty(a,h){const _=this.read();if(!w.isBindable(_))throw b.notBindable();if(!(a in _))throw b.propertyNotFound(a);_[a]=h}}class x extends i{get label(){return this.controller_.props.get("label")}set label(a){this.controller_.props.set("label",a)}get title(){var a;return(a=this.controller_.valueController.props.get("title"))!==null&&a!==void 0?a:""}set title(a){this.controller_.valueController.props.set("title",a)}on(a,h){const _=h.bind(this);return this.controller_.valueController.emitter.on(a,()=>{_(new r(this))}),this}}class v{constructor(){this.observers_={}}on(a,h){let _=this.observers_[a];return _||(_=this.observers_[a]=[]),_.push({handler:h}),this}off(a,h){const _=this.observers_[a];return _&&(this.observers_[a]=_.filter(A=>A.handler!==h)),this}emit(a,h){const _=this.observers_[a];!_||_.forEach(A=>{A.handler(h)})}}const M="tp";function y(p){return(h,_)=>[M,"-",p,"v",h?`_${h}`:"",_?`-${_}`:""].join("")}function S(p,a){return h=>a(p(h))}function C(p){return p.rawValue}function P(p,a){p.emitter.on("change",S(C,a)),a(p.rawValue)}function T(p,a,h){P(p.value(a),h)}function I(p,a,h){h?p.classList.add(a):p.classList.remove(a)}function B(p,a){return h=>{I(p,a,h)}}function E(p,a){P(p,h=>{a.textContent=h!=null?h:""})}const R=y("btn");class k{constructor(a,h){this.element=a.createElement("div"),this.element.classList.add(R()),h.viewProps.bindClassModifiers(this.element);const _=a.createElement("button");_.classList.add(R("b")),h.viewProps.bindDisabled(_),this.element.appendChild(_),this.buttonElement=_;const A=a.createElement("div");A.classList.add(R("t")),E(h.props.value("title"),A),this.buttonElement.appendChild(A)}}class W{constructor(a,h){this.emitter=new v,this.onClick_=this.onClick_.bind(this),this.props=h.props,this.viewProps=h.viewProps,this.view=new k(a,{props:this.props,viewProps:this.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}onClick_(){this.emitter.emit("click",{sender:this})}}class U{constructor(a,h){var _;this.constraint_=h==null?void 0:h.constraint,this.equals_=(_=h==null?void 0:h.equals)!==null&&_!==void 0?_:(A,z)=>A===z,this.emitter=new v,this.rawValue_=a}get constraint(){return this.constraint_}get rawValue(){return this.rawValue_}set rawValue(a){this.setRawValue(a,{forceEmit:!1,last:!0})}setRawValue(a,h){const _=h!=null?h:{forceEmit:!1,last:!0},A=this.constraint_?this.constraint_.constrain(a):a;!!this.equals_(this.rawValue_,A)&&!_.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.rawValue_=A,this.emitter.emit("change",{options:_,rawValue:A,sender:this}))}}class H{constructor(a){this.emitter=new v,this.value_=a}get rawValue(){return this.value_}set rawValue(a){this.setRawValue(a,{forceEmit:!1,last:!0})}setRawValue(a,h){const _=h!=null?h:{forceEmit:!1,last:!0};this.value_===a&&!_.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.value_=a,this.emitter.emit("change",{options:_,rawValue:this.value_,sender:this}))}}function G(p,a){const h=a==null?void 0:a.constraint,_=a==null?void 0:a.equals;return!h&&!_?new H(p):new U(p,a)}class X{constructor(a){this.emitter=new v,this.valMap_=a;for(const h in this.valMap_)this.valMap_[h].emitter.on("change",()=>{this.emitter.emit("change",{key:h,sender:this})})}static createCore(a){return Object.keys(a).reduce((_,A)=>Object.assign(_,{[A]:G(a[A])}),{})}static fromObject(a){const h=this.createCore(a);return new X(h)}get(a){return this.valMap_[a].rawValue}set(a,h){this.valMap_[a].rawValue=h}value(a){return this.valMap_[a]}}function Q(p,a){const _=Object.keys(a).reduce((A,z)=>{if(A===void 0)return;const Y=a[z],de=Y(p[z]);return de.succeeded?Object.assign(Object.assign({},A),{[z]:de.value}):void 0},{});return _}function K(p,a){return p.reduce((h,_)=>{if(h===void 0)return;const A=a(_);if(!(!A.succeeded||A.value===void 0))return[...h,A.value]},[])}function ie(p){return p===null?!1:typeof p=="object"}function ne(p){return a=>h=>{if(!a&&h===void 0)return{succeeded:!1,value:void 0};if(a&&h===void 0)return{succeeded:!0,value:void 0};const _=p(h);return _!==void 0?{succeeded:!0,value:_}:{succeeded:!1,value:void 0}}}function me(p){return{custom:a=>ne(a)(p),boolean:ne(a=>typeof a=="boolean"?a:void 0)(p),number:ne(a=>typeof a=="number"?a:void 0)(p),string:ne(a=>typeof a=="string"?a:void 0)(p),function:ne(a=>typeof a=="function"?a:void 0)(p),constant:a=>ne(h=>h===a?a:void 0)(p),raw:ne(a=>a)(p),object:a=>ne(h=>{if(!!ie(h))return Q(h,a)})(p),array:a=>ne(h=>{if(!!Array.isArray(h))return K(h,a)})(p)}}const he={optional:me(!0),required:me(!1)};function q(p,a){const h=he.required.object(a)(p);return h.succeeded?h.value:void 0}function se(p){return p&&p.parentElement&&p.parentElement.removeChild(p),null}function _e(){return["veryfirst","first","last","verylast"]}const ye=y(""),Te={veryfirst:"vfst",first:"fst",last:"lst",verylast:"vlst"};class ve{constructor(a){this.parent_=null,this.blade=a.blade,this.view=a.view,this.viewProps=a.viewProps;const h=this.view.element;this.blade.value("positions").emitter.on("change",()=>{_e().forEach(_=>{h.classList.remove(ye(void 0,Te[_]))}),this.blade.get("positions").forEach(_=>{h.classList.add(ye(void 0,Te[_]))})}),this.viewProps.handleDispose(()=>{se(h)})}get parent(){return this.parent_}}const Ue="http://www.w3.org/2000/svg";function Ne(p){p.offsetHeight}function j(p,a){const h=p.style.transition;p.style.transition="none",a(),p.style.transition=h}function St(p){return p.ontouchstart!==void 0}function Ce(){return new Function("return this")()}function ke(){return Ce().document}function Ae(p){const a=p.ownerDocument.defaultView;return a&&"document"in a?p.getContext("2d"):null}const ct={check:'<path d="M2 8l4 4l8 -8"/>',dropdown:'<path d="M5 7h6l-3 3 z"/>',p2dpad:'<path d="M8 4v8"/><path d="M4 8h8"/><circle cx="12" cy="12" r="1.2"/>'};function Ve(p,a){const h=p.createElementNS(Ue,"svg");return h.innerHTML=ct[a],h}function F(p,a,h){p.insertBefore(a,p.children[h])}function L(p){p.parentElement&&p.parentElement.removeChild(p)}function Z(p){for(;p.children.length>0;)p.removeChild(p.children[0])}function ue(p){for(;p.childNodes.length>0;)p.removeChild(p.childNodes[0])}function re(p){return p.relatedTarget?p.relatedTarget:"explicitOriginalTarget"in p?p.explicitOriginalTarget:null}const ce=y("lbl");function Pe(p,a){const h=p.createDocumentFragment();return a.split(`
`).map(A=>p.createTextNode(A)).forEach((A,z)=>{z>0&&h.appendChild(p.createElement("br")),h.appendChild(A)}),h}class xe{constructor(a,h){this.element=a.createElement("div"),this.element.classList.add(ce()),h.viewProps.bindClassModifiers(this.element);const _=a.createElement("div");_.classList.add(ce("l")),T(h.props,"label",z=>{f(z)?this.element.classList.add(ce(void 0,"nol")):(this.element.classList.remove(ce(void 0,"nol")),ue(_),_.appendChild(Pe(a,z)))}),this.element.appendChild(_),this.labelElement=_;const A=a.createElement("div");A.classList.add(ce("v")),this.element.appendChild(A),this.valueElement=A}}class Me extends ve{constructor(a,h){const _=h.valueController.viewProps;super(Object.assign(Object.assign({},h),{view:new xe(a,{props:h.props,viewProps:_}),viewProps:_})),this.props=h.props,this.valueController=h.valueController,this.view.valueElement.appendChild(this.valueController.view.element)}}const ze={id:"button",type:"blade",accept(p){const a=he,h=q(p,{title:a.required.string,view:a.required.constant("button"),label:a.optional.string});return h?{params:h}:null},controller(p){return new Me(p.document,{blade:p.blade,props:X.fromObject({label:p.params.label}),valueController:new W(p.document,{props:X.fromObject({title:p.params.title}),viewProps:p.viewProps})})},api(p){return!(p.controller instanceof Me)||!(p.controller.valueController instanceof W)?null:new x(p.controller)}};class We extends ve{constructor(a){super(a),this.value=a.value}}function ae(){return new X({positions:G([],{equals:m})})}class st extends X{constructor(a){super(a)}static create(a){const h={completed:!0,expanded:a,expandedHeight:null,shouldFixHeight:!1,temporaryExpanded:null},_=X.createCore(h);return new st(_)}get styleExpanded(){var a;return(a=this.get("temporaryExpanded"))!==null&&a!==void 0?a:this.get("expanded")}get styleHeight(){if(!this.styleExpanded)return"0";const a=this.get("expandedHeight");return this.get("shouldFixHeight")&&!f(a)?`${a}px`:"auto"}bindExpandedClass(a,h){const _=()=>{this.styleExpanded?a.classList.add(h):a.classList.remove(h)};T(this,"expanded",_),T(this,"temporaryExpanded",_)}cleanUpTransition(){this.set("shouldFixHeight",!1),this.set("expandedHeight",null),this.set("completed",!0)}}function Je(p,a){let h=0;return j(a,()=>{p.set("expandedHeight",null),p.set("temporaryExpanded",!0),Ne(a),h=a.clientHeight,p.set("temporaryExpanded",null),Ne(a)}),h}function je(p,a){a.style.height=p.styleHeight}function Le(p,a){p.value("expanded").emitter.on("beforechange",()=>{p.set("completed",!1),f(p.get("expandedHeight"))&&p.set("expandedHeight",Je(p,a)),p.set("shouldFixHeight",!0),Ne(a)}),p.emitter.on("change",()=>{je(p,a)}),je(p,a),a.addEventListener("transitionend",h=>{h.propertyName==="height"&&p.cleanUpTransition()})}class we extends i{constructor(a,h){super(a),this.rackApi_=h}}function $e(p,a){return p.addBlade(Object.assign(Object.assign({},a),{view:"button"}))}function V(p,a){return p.addBlade(Object.assign(Object.assign({},a),{view:"folder"}))}function pe(p,a){const h=a!=null?a:{};return p.addBlade(Object.assign(Object.assign({},h),{view:"separator"}))}function be(p,a){return p.addBlade(Object.assign(Object.assign({},a),{view:"tab"}))}class Ie{constructor(a){this.emitter=new v,this.items_=[],this.cache_=new Set,this.onSubListAdd_=this.onSubListAdd_.bind(this),this.onSubListRemove_=this.onSubListRemove_.bind(this),this.extract_=a}get items(){return this.items_}allItems(){return Array.from(this.cache_)}find(a){for(const h of this.allItems())if(a(h))return h;return null}includes(a){return this.cache_.has(a)}add(a,h){if(this.includes(a))throw b.shouldNeverHappen();const _=h!==void 0?h:this.items_.length;this.items_.splice(_,0,a),this.cache_.add(a);const A=this.extract_(a);A&&(A.emitter.on("add",this.onSubListAdd_),A.emitter.on("remove",this.onSubListRemove_),A.allItems().forEach(z=>{this.cache_.add(z)})),this.emitter.emit("add",{index:_,item:a,root:this,target:this})}remove(a){const h=this.items_.indexOf(a);if(h<0)return;this.items_.splice(h,1),this.cache_.delete(a);const _=this.extract_(a);_&&(_.emitter.off("add",this.onSubListAdd_),_.emitter.off("remove",this.onSubListRemove_)),this.emitter.emit("remove",{index:h,item:a,root:this,target:this})}onSubListAdd_(a){this.cache_.add(a.item),this.emitter.emit("add",{index:a.index,item:a.item,root:this,target:a.target})}onSubListRemove_(a){this.cache_.delete(a.item),this.emitter.emit("remove",{index:a.index,item:a.item,root:this,target:a.target})}}class O extends i{constructor(a){super(a),this.onBindingChange_=this.onBindingChange_.bind(this),this.emitter_=new v,this.controller_.binding.emitter.on("change",this.onBindingChange_)}get label(){return this.controller_.props.get("label")}set label(a){this.controller_.props.set("label",a)}on(a,h){const _=h.bind(this);return this.emitter_.on(a,A=>{_(A.event)}),this}refresh(){this.controller_.binding.read()}onBindingChange_(a){const h=a.sender.target.read();this.emitter_.emit("change",{event:new o(this,h,this.controller_.binding.target.presetKey,a.options.last)})}}class oe extends Me{constructor(a,h){super(a,h),this.binding=h.binding}}class le extends i{constructor(a){super(a),this.onBindingUpdate_=this.onBindingUpdate_.bind(this),this.emitter_=new v,this.controller_.binding.emitter.on("update",this.onBindingUpdate_)}get label(){return this.controller_.props.get("label")}set label(a){this.controller_.props.set("label",a)}on(a,h){const _=h.bind(this);return this.emitter_.on(a,A=>{_(A.event)}),this}refresh(){this.controller_.binding.read()}onBindingUpdate_(a){const h=a.sender.target.read();this.emitter_.emit("update",{event:new l(this,h,this.controller_.binding.target.presetKey)})}}class Se extends Me{constructor(a,h){super(a,h),this.binding=h.binding,this.viewProps.bindDisabled(this.binding.ticker),this.viewProps.handleDispose(()=>{this.binding.dispose()})}}function Oe(p){return p instanceof ut?p.apiSet_:p instanceof we?p.rackApi_.apiSet_:null}function nt(p,a){const h=p.find(_=>_.controller_===a);if(!h)throw b.shouldNeverHappen();return h}function tt(p,a,h){if(!w.isBindable(p))throw b.notBindable();return new w(p,a,h)}class ut extends i{constructor(a,h){super(a),this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this),this.onRackInputChange_=this.onRackInputChange_.bind(this),this.onRackMonitorUpdate_=this.onRackMonitorUpdate_.bind(this),this.emitter_=new v,this.apiSet_=new Ie(Oe),this.pool_=h;const _=this.controller_.rack;_.emitter.on("add",this.onRackAdd_),_.emitter.on("remove",this.onRackRemove_),_.emitter.on("inputchange",this.onRackInputChange_),_.emitter.on("monitorupdate",this.onRackMonitorUpdate_),_.children.forEach(A=>{this.setUpApi_(A)})}get children(){return this.controller_.rack.children.map(a=>nt(this.apiSet_,a))}addInput(a,h,_){const A=_!=null?_:{},z=this.controller_.view.element.ownerDocument,Y=this.pool_.createInput(z,tt(a,h,A.presetKey),A),de=new O(Y);return this.add(de,A.index)}addMonitor(a,h,_){const A=_!=null?_:{},z=this.controller_.view.element.ownerDocument,Y=this.pool_.createMonitor(z,tt(a,h),A),de=new le(Y);return this.add(de,A.index)}addFolder(a){return V(this,a)}addButton(a){return $e(this,a)}addSeparator(a){return pe(this,a)}addTab(a){return be(this,a)}add(a,h){this.controller_.rack.add(a.controller_,h);const _=this.apiSet_.find(A=>A.controller_===a.controller_);return _&&this.apiSet_.remove(_),this.apiSet_.add(a),a}remove(a){this.controller_.rack.remove(a.controller_)}addBlade(a){const h=this.controller_.view.element.ownerDocument,_=this.pool_.createBlade(h,a),A=this.pool_.createBladeApi(_);return this.add(A,a.index)}on(a,h){const _=h.bind(this);return this.emitter_.on(a,A=>{_(A.event)}),this}setUpApi_(a){this.apiSet_.find(_=>_.controller_===a)||this.apiSet_.add(this.pool_.createBladeApi(a))}onRackAdd_(a){this.setUpApi_(a.bladeController)}onRackRemove_(a){if(a.isRoot){const h=nt(this.apiSet_,a.bladeController);this.apiSet_.remove(h)}}onRackInputChange_(a){const h=a.bladeController;if(h instanceof oe){const _=nt(this.apiSet_,h),A=h.binding;this.emitter_.emit("change",{event:new o(_,A.target.read(),A.target.presetKey,a.options.last)})}else if(h instanceof We){const _=nt(this.apiSet_,h);this.emitter_.emit("change",{event:new o(_,h.value.rawValue,void 0,a.options.last)})}}onRackMonitorUpdate_(a){if(!(a.bladeController instanceof Se))throw b.shouldNeverHappen();const h=nt(this.apiSet_,a.bladeController),_=a.bladeController.binding;this.emitter_.emit("update",{event:new l(h,_.target.read(),_.target.presetKey)})}}class kt extends we{constructor(a,h){super(a,new ut(a.rackController,h)),this.emitter_=new v,this.controller_.foldable.value("expanded").emitter.on("change",_=>{this.emitter_.emit("fold",{event:new c(this,_.sender.rawValue)})}),this.rackApi_.on("change",_=>{this.emitter_.emit("change",{event:_})}),this.rackApi_.on("update",_=>{this.emitter_.emit("update",{event:_})})}get expanded(){return this.controller_.foldable.get("expanded")}set expanded(a){this.controller_.foldable.set("expanded",a)}get title(){return this.controller_.props.get("title")}set title(a){this.controller_.props.set("title",a)}get children(){return this.rackApi_.children}addInput(a,h,_){return this.rackApi_.addInput(a,h,_)}addMonitor(a,h,_){return this.rackApi_.addMonitor(a,h,_)}addFolder(a){return this.rackApi_.addFolder(a)}addButton(a){return this.rackApi_.addButton(a)}addSeparator(a){return this.rackApi_.addSeparator(a)}addTab(a){return this.rackApi_.addTab(a)}add(a,h){return this.rackApi_.add(a,h)}remove(a){this.rackApi_.remove(a)}addBlade(a){return this.rackApi_.addBlade(a)}on(a,h){const _=h.bind(this);return this.emitter_.on(a,A=>{_(A.event)}),this}}class ot extends ve{constructor(a){super({blade:a.blade,view:a.view,viewProps:a.rackController.viewProps}),this.rackController=a.rackController}}class Ut{constructor(a,h){const _=y(h.viewName);this.element=a.createElement("div"),this.element.classList.add(_()),h.viewProps.bindClassModifiers(this.element)}}function rn(p,a){for(let h=0;h<p.length;h++){const _=p[h];if(_ instanceof oe&&_.binding===a)return _}return null}function Uo(p,a){for(let h=0;h<p.length;h++){const _=p[h];if(_ instanceof Se&&_.binding===a)return _}return null}function pl(p,a){for(let h=0;h<p.length;h++){const _=p[h];if(_ instanceof We&&_.value===a)return _}return null}function Pi(p){return p instanceof Ri?p.rack:p instanceof ot?p.rackController.rack:null}function Fo(p){const a=Pi(p);return a?a.bcSet_:null}class Ps{constructor(a){var h;this.onBladePositionsChange_=this.onBladePositionsChange_.bind(this),this.onSetAdd_=this.onSetAdd_.bind(this),this.onSetRemove_=this.onSetRemove_.bind(this),this.onChildDispose_=this.onChildDispose_.bind(this),this.onChildPositionsChange_=this.onChildPositionsChange_.bind(this),this.onChildInputChange_=this.onChildInputChange_.bind(this),this.onChildMonitorUpdate_=this.onChildMonitorUpdate_.bind(this),this.onChildValueChange_=this.onChildValueChange_.bind(this),this.onChildViewPropsChange_=this.onChildViewPropsChange_.bind(this),this.onDescendantLayout_=this.onDescendantLayout_.bind(this),this.onDescendantInputChange_=this.onDescendantInputChange_.bind(this),this.onDescendantMonitorUpdate_=this.onDescendantMonitorUpdate_.bind(this),this.emitter=new v,this.blade_=a!=null?a:null,(h=this.blade_)===null||h===void 0||h.value("positions").emitter.on("change",this.onBladePositionsChange_),this.bcSet_=new Ie(Fo),this.bcSet_.emitter.on("add",this.onSetAdd_),this.bcSet_.emitter.on("remove",this.onSetRemove_)}get children(){return this.bcSet_.items}add(a,h){a.parent&&a.parent.remove(a),a.parent_=this,this.bcSet_.add(a,h)}remove(a){a.parent_=null,this.bcSet_.remove(a)}find(a){return this.bcSet_.allItems().filter(h=>h instanceof a)}onSetAdd_(a){this.updatePositions_();const h=a.target===a.root;if(this.emitter.emit("add",{bladeController:a.item,index:a.index,isRoot:h,sender:this}),!h)return;const _=a.item;if(_.viewProps.emitter.on("change",this.onChildViewPropsChange_),_.blade.value("positions").emitter.on("change",this.onChildPositionsChange_),_.viewProps.handleDispose(this.onChildDispose_),_ instanceof oe)_.binding.emitter.on("change",this.onChildInputChange_);else if(_ instanceof Se)_.binding.emitter.on("update",this.onChildMonitorUpdate_);else if(_ instanceof We)_.value.emitter.on("change",this.onChildValueChange_);else{const A=Pi(_);if(A){const z=A.emitter;z.on("layout",this.onDescendantLayout_),z.on("inputchange",this.onDescendantInputChange_),z.on("monitorupdate",this.onDescendantMonitorUpdate_)}}}onSetRemove_(a){this.updatePositions_();const h=a.target===a.root;if(this.emitter.emit("remove",{bladeController:a.item,isRoot:h,sender:this}),!h)return;const _=a.item;if(_ instanceof oe)_.binding.emitter.off("change",this.onChildInputChange_);else if(_ instanceof Se)_.binding.emitter.off("update",this.onChildMonitorUpdate_);else if(_ instanceof We)_.value.emitter.off("change",this.onChildValueChange_);else{const A=Pi(_);if(A){const z=A.emitter;z.off("layout",this.onDescendantLayout_),z.off("inputchange",this.onDescendantInputChange_),z.off("monitorupdate",this.onDescendantMonitorUpdate_)}}}updatePositions_(){const a=this.bcSet_.items.filter(A=>!A.viewProps.get("hidden")),h=a[0],_=a[a.length-1];this.bcSet_.items.forEach(A=>{const z=[];A===h&&(z.push("first"),(!this.blade_||this.blade_.get("positions").includes("veryfirst"))&&z.push("veryfirst")),A===_&&(z.push("last"),(!this.blade_||this.blade_.get("positions").includes("verylast"))&&z.push("verylast")),A.blade.set("positions",z)})}onChildPositionsChange_(){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildViewPropsChange_(a){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildDispose_(){this.bcSet_.items.filter(h=>h.viewProps.get("disposed")).forEach(h=>{this.bcSet_.remove(h)})}onChildInputChange_(a){const h=rn(this.find(oe),a.sender);if(!h)throw b.shouldNeverHappen();this.emitter.emit("inputchange",{bladeController:h,options:a.options,sender:this})}onChildMonitorUpdate_(a){const h=Uo(this.find(Se),a.sender);if(!h)throw b.shouldNeverHappen();this.emitter.emit("monitorupdate",{bladeController:h,sender:this})}onChildValueChange_(a){const h=pl(this.find(We),a.sender);if(!h)throw b.shouldNeverHappen();this.emitter.emit("inputchange",{bladeController:h,options:a.options,sender:this})}onDescendantLayout_(a){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onDescendantInputChange_(a){this.emitter.emit("inputchange",{bladeController:a.bladeController,options:a.options,sender:this})}onDescendantMonitorUpdate_(a){this.emitter.emit("monitorupdate",{bladeController:a.bladeController,sender:this})}onBladePositionsChange_(){this.updatePositions_()}}class Ri extends ve{constructor(a,h){super(Object.assign(Object.assign({},h),{view:new Ut(a,{viewName:"brk",viewProps:h.viewProps})})),this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this);const _=new Ps(h.root?void 0:h.blade);_.emitter.on("add",this.onRackAdd_),_.emitter.on("remove",this.onRackRemove_),this.rack=_,this.viewProps.handleDispose(()=>{for(let A=this.rack.children.length-1;A>=0;A--)this.rack.children[A].viewProps.set("disposed",!0)})}onRackAdd_(a){!a.isRoot||F(this.view.element,a.bladeController.view.element,a.index)}onRackRemove_(a){!a.isRoot||L(a.bladeController.view.element)}}const Br=y("cnt");class fl{constructor(a,h){var _;this.className_=y((_=h.viewName)!==null&&_!==void 0?_:"fld"),this.element=a.createElement("div"),this.element.classList.add(this.className_(),Br()),h.viewProps.bindClassModifiers(this.element),this.foldable_=h.foldable,this.foldable_.bindExpandedClass(this.element,this.className_(void 0,"expanded")),T(this.foldable_,"completed",B(this.element,this.className_(void 0,"cpl")));const A=a.createElement("button");A.classList.add(this.className_("b")),T(h.props,"title",Fe=>{f(Fe)?this.element.classList.add(this.className_(void 0,"not")):this.element.classList.remove(this.className_(void 0,"not"))}),h.viewProps.bindDisabled(A),this.element.appendChild(A),this.buttonElement=A;const z=a.createElement("div");z.classList.add(this.className_("t")),E(h.props.value("title"),z),this.buttonElement.appendChild(z),this.titleElement=z;const Y=a.createElement("div");Y.classList.add(this.className_("m")),this.buttonElement.appendChild(Y);const de=h.containerElement;de.classList.add(this.className_("c")),this.element.appendChild(de),this.containerElement=de}}class kr extends ot{constructor(a,h){var _;const A=st.create((_=h.expanded)!==null&&_!==void 0?_:!0),z=new Ri(a,{blade:h.blade,root:h.root,viewProps:h.viewProps});super(Object.assign(Object.assign({},h),{rackController:z,view:new fl(a,{containerElement:z.view.element,foldable:A,props:h.props,viewName:h.root?"rot":void 0,viewProps:h.viewProps})})),this.onTitleClick_=this.onTitleClick_.bind(this),this.props=h.props,this.foldable=A,Le(this.foldable,this.view.containerElement),this.rackController.rack.emitter.on("add",()=>{this.foldable.cleanUpTransition()}),this.rackController.rack.emitter.on("remove",()=>{this.foldable.cleanUpTransition()}),this.view.buttonElement.addEventListener("click",this.onTitleClick_)}get document(){return this.view.element.ownerDocument}onTitleClick_(){this.foldable.set("expanded",!this.foldable.get("expanded"))}}const ml={id:"folder",type:"blade",accept(p){const a=he,h=q(p,{title:a.required.string,view:a.required.constant("folder"),expanded:a.optional.boolean});return h?{params:h}:null},controller(p){return new kr(p.document,{blade:p.blade,expanded:p.params.expanded,props:X.fromObject({title:p.params.title}),viewProps:p.viewProps})},api(p){return p.controller instanceof kr?new kt(p.controller,p.pool):null}};class N extends We{constructor(a,h){const _=h.valueController.viewProps;super(Object.assign(Object.assign({},h),{value:h.valueController.value,view:new xe(a,{props:h.props,viewProps:_}),viewProps:_})),this.props=h.props,this.valueController=h.valueController,this.view.valueElement.appendChild(this.valueController.view.element)}}class $ extends i{}const ee=y("spr");class te{constructor(a,h){this.element=a.createElement("div"),this.element.classList.add(ee()),h.viewProps.bindClassModifiers(this.element);const _=a.createElement("hr");_.classList.add(ee("r")),this.element.appendChild(_)}}class J extends ve{constructor(a,h){super(Object.assign(Object.assign({},h),{view:new te(a,{viewProps:h.viewProps})}))}}const Ee={id:"separator",type:"blade",accept(p){const h=q(p,{view:he.required.constant("separator")});return h?{params:h}:null},controller(p){return new J(p.document,{blade:p.blade,viewProps:p.viewProps})},api(p){return p.controller instanceof J?new $(p.controller):null}},De=y("");function He(p,a){return B(p,De(void 0,a))}class Be extends X{constructor(a){super(a)}static create(a){var h,_;const A=a!=null?a:{},z={disabled:(h=A.disabled)!==null&&h!==void 0?h:!1,disposed:!1,hidden:(_=A.hidden)!==null&&_!==void 0?_:!1},Y=X.createCore(z);return new Be(Y)}bindClassModifiers(a){T(this,"disabled",He(a,"disabled")),T(this,"hidden",He(a,"hidden"))}bindDisabled(a){T(this,"disabled",h=>{a.disabled=h})}bindTabIndex(a){T(this,"disabled",h=>{a.tabIndex=h?-1:0})}handleDispose(a){this.value("disposed").emitter.on("change",h=>{h&&a()})}}const qe=y("tbi");class Ke{constructor(a,h){this.element=a.createElement("div"),this.element.classList.add(qe()),h.viewProps.bindClassModifiers(this.element),T(h.props,"selected",z=>{z?this.element.classList.add(qe(void 0,"sel")):this.element.classList.remove(qe(void 0,"sel"))});const _=a.createElement("button");_.classList.add(qe("b")),h.viewProps.bindDisabled(_),this.element.appendChild(_),this.buttonElement=_;const A=a.createElement("div");A.classList.add(qe("t")),E(h.props.value("title"),A),this.buttonElement.appendChild(A),this.titleElement=A}}class Ze{constructor(a,h){this.emitter=new v,this.onClick_=this.onClick_.bind(this),this.props=h.props,this.viewProps=h.viewProps,this.view=new Ke(a,{props:h.props,viewProps:h.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}onClick_(){this.emitter.emit("click",{sender:this})}}class It{constructor(a,h){this.onItemClick_=this.onItemClick_.bind(this),this.ic_=new Ze(a,{props:h.itemProps,viewProps:Be.create()}),this.ic_.emitter.on("click",this.onItemClick_),this.cc_=new Ri(a,{blade:ae(),viewProps:Be.create()}),this.props=h.props,T(this.props,"selected",_=>{this.itemController.props.set("selected",_),this.contentController.viewProps.set("hidden",!_)})}get itemController(){return this.ic_}get contentController(){return this.cc_}onItemClick_(){this.props.set("selected",!0)}}class an{constructor(a,h){this.controller_=a,this.rackApi_=h}get title(){var a;return(a=this.controller_.itemController.props.get("title"))!==null&&a!==void 0?a:""}set title(a){this.controller_.itemController.props.set("title",a)}get selected(){return this.controller_.props.get("selected")}set selected(a){this.controller_.props.set("selected",a)}get children(){return this.rackApi_.children}addButton(a){return this.rackApi_.addButton(a)}addFolder(a){return this.rackApi_.addFolder(a)}addSeparator(a){return this.rackApi_.addSeparator(a)}addTab(a){return this.rackApi_.addTab(a)}add(a,h){this.rackApi_.add(a,h)}remove(a){this.rackApi_.remove(a)}addInput(a,h,_){return this.rackApi_.addInput(a,h,_)}addMonitor(a,h,_){return this.rackApi_.addMonitor(a,h,_)}addBlade(a){return this.rackApi_.addBlade(a)}}class Vt extends we{constructor(a,h){super(a,new ut(a.rackController,h)),this.onPageAdd_=this.onPageAdd_.bind(this),this.onPageRemove_=this.onPageRemove_.bind(this),this.onSelect_=this.onSelect_.bind(this),this.emitter_=new v,this.pageApiMap_=new Map,this.rackApi_.on("change",_=>{this.emitter_.emit("change",{event:_})}),this.rackApi_.on("update",_=>{this.emitter_.emit("update",{event:_})}),this.controller_.tab.selectedIndex.emitter.on("change",this.onSelect_),this.controller_.pageSet.emitter.on("add",this.onPageAdd_),this.controller_.pageSet.emitter.on("remove",this.onPageRemove_),this.controller_.pageSet.items.forEach(_=>{this.setUpPageApi_(_)})}get pages(){return this.controller_.pageSet.items.map(a=>{const h=this.pageApiMap_.get(a);if(!h)throw b.shouldNeverHappen();return h})}addPage(a){const h=this.controller_.view.element.ownerDocument,_=new It(h,{itemProps:X.fromObject({selected:!1,title:a.title}),props:X.fromObject({selected:!1})});this.controller_.add(_,a.index);const A=this.pageApiMap_.get(_);if(!A)throw b.shouldNeverHappen();return A}removePage(a){this.controller_.remove(a)}on(a,h){const _=h.bind(this);return this.emitter_.on(a,A=>{_(A.event)}),this}setUpPageApi_(a){const h=this.rackApi_.apiSet_.find(A=>A.controller_===a.contentController);if(!h)throw b.shouldNeverHappen();const _=new an(a,h);this.pageApiMap_.set(a,_)}onPageAdd_(a){this.setUpPageApi_(a.item)}onPageRemove_(a){if(!this.pageApiMap_.get(a.item))throw b.shouldNeverHappen();this.pageApiMap_.delete(a.item)}onSelect_(a){this.emitter_.emit("select",{event:new u(this,a.rawValue)})}}const In=-1;class Tt{constructor(){this.onItemSelectedChange_=this.onItemSelectedChange_.bind(this),this.empty=G(!0),this.selectedIndex=G(In),this.items_=[]}add(a,h){const _=h!=null?h:this.items_.length;this.items_.splice(_,0,a),a.emitter.on("change",this.onItemSelectedChange_),this.keepSelection_()}remove(a){const h=this.items_.indexOf(a);h<0||(this.items_.splice(h,1),a.emitter.off("change",this.onItemSelectedChange_),this.keepSelection_())}keepSelection_(){if(this.items_.length===0){this.selectedIndex.rawValue=In,this.empty.rawValue=!0;return}const a=this.items_.findIndex(h=>h.rawValue);a<0?(this.items_.forEach((h,_)=>{h.rawValue=_===0}),this.selectedIndex.rawValue=0):(this.items_.forEach((h,_)=>{h.rawValue=_===a}),this.selectedIndex.rawValue=a),this.empty.rawValue=!1}onItemSelectedChange_(a){if(a.rawValue){const h=this.items_.findIndex(_=>_===a.sender);this.items_.forEach((_,A)=>{_.rawValue=A===h}),this.selectedIndex.rawValue=h}else this.keepSelection_()}}const Qe=y("tab");class Vr{constructor(a,h){this.element=a.createElement("div"),this.element.classList.add(Qe(),Br()),h.viewProps.bindClassModifiers(this.element),P(h.empty,B(this.element,Qe(void 0,"nop")));const _=a.createElement("div");_.classList.add(Qe("i")),this.element.appendChild(_),this.itemsElement=_;const A=h.contentsElement;A.classList.add(Qe("c")),this.element.appendChild(A),this.contentsElement=A}}class At extends ot{constructor(a,h){const _=new Ri(a,{blade:h.blade,viewProps:h.viewProps}),A=new Tt;super({blade:h.blade,rackController:_,view:new Vr(a,{contentsElement:_.view.element,empty:A.empty,viewProps:h.viewProps})}),this.onPageAdd_=this.onPageAdd_.bind(this),this.onPageRemove_=this.onPageRemove_.bind(this),this.pageSet_=new Ie(()=>null),this.pageSet_.emitter.on("add",this.onPageAdd_),this.pageSet_.emitter.on("remove",this.onPageRemove_),this.tab=A}get pageSet(){return this.pageSet_}add(a,h){this.pageSet_.add(a,h)}remove(a){this.pageSet_.remove(this.pageSet_.items[a])}onPageAdd_(a){const h=a.item;F(this.view.itemsElement,h.itemController.view.element,a.index),this.rackController.rack.add(h.contentController,a.index),this.tab.add(h.props.value("selected"))}onPageRemove_(a){const h=a.item;L(h.itemController.view.element),this.rackController.rack.remove(h.contentController),this.tab.remove(h.props.value("selected"))}}const ei={id:"tab",type:"blade",accept(p){const a=he,h=q(p,{pages:a.required.array(a.required.object({title:a.required.string})),view:a.required.constant("tab")});return!h||h.pages.length===0?null:{params:h}},controller(p){const a=new At(p.document,{blade:p.blade,viewProps:p.viewProps});return p.params.pages.forEach(h=>{const _=new It(p.document,{itemProps:X.fromObject({selected:!1,title:h.title}),props:X.fromObject({selected:!1})});a.add(_)}),a},api(p){return p.controller instanceof At?new Vt(p.controller,p.pool):null}};function Oo(p,a){const h=p.accept(a.params);if(!h)return null;const _=he.optional.boolean(a.params.disabled).value,A=he.optional.boolean(a.params.hidden).value;return p.controller({blade:ae(),document:a.document,params:Object.assign(Object.assign({},h.params),{disabled:_,hidden:A}),viewProps:Be.create({disabled:_,hidden:A})})}class ts{constructor(){this.disabled=!1,this.emitter=new v}dispose(){}tick(){this.disabled||this.emitter.emit("tick",{sender:this})}}class zr{constructor(a,h){this.disabled_=!1,this.timerId_=null,this.onTick_=this.onTick_.bind(this),this.doc_=a,this.emitter=new v,this.interval_=h,this.setTimer_()}get disabled(){return this.disabled_}set disabled(a){this.disabled_=a,this.disabled_?this.clearTimer_():this.setTimer_()}dispose(){this.clearTimer_()}clearTimer_(){if(this.timerId_===null)return;const a=this.doc_.defaultView;a&&a.clearInterval(this.timerId_),this.timerId_=null}setTimer_(){if(this.clearTimer_(),this.interval_<=0)return;const a=this.doc_.defaultView;a&&(this.timerId_=a.setInterval(this.onTick_,this.interval_))}onTick_(){this.disabled_||this.emitter.emit("tick",{sender:this})}}class Bt{constructor(a){this.constraints=a}constrain(a){return this.constraints.reduce((h,_)=>_.constrain(h),a)}}function en(p,a){if(p instanceof a)return p;if(p instanceof Bt){const h=p.constraints.reduce((_,A)=>_||(A instanceof a?A:null),null);if(h)return h}return null}class ui{constructor(a){this.options=a}constrain(a){const h=this.options;return h.length===0||h.filter(A=>A.value===a).length>0?a:h[0].value}}class Yt{constructor(a){this.maxValue=a.max,this.minValue=a.min}constrain(a){let h=a;return f(this.minValue)||(h=Math.max(h,this.minValue)),f(this.maxValue)||(h=Math.min(h,this.maxValue)),h}}class Li{constructor(a,h=0){this.step=a,this.origin=h}constrain(a){const h=this.origin%this.step,_=Math.round((a-h)/this.step);return h+_*this.step}}const Hr=y("lst");class Bo{constructor(a,h){this.onValueChange_=this.onValueChange_.bind(this),this.props_=h.props,this.element=a.createElement("div"),this.element.classList.add(Hr()),h.viewProps.bindClassModifiers(this.element);const _=a.createElement("select");_.classList.add(Hr("s")),T(this.props_,"options",z=>{Z(_),z.forEach((Y,de)=>{const Fe=a.createElement("option");Fe.dataset.index=String(de),Fe.textContent=Y.text,Fe.value=String(Y.value),_.appendChild(Fe)})}),h.viewProps.bindDisabled(_),this.element.appendChild(_),this.selectElement=_;const A=a.createElement("div");A.classList.add(Hr("m")),A.appendChild(Ve(a,"dropdown")),this.element.appendChild(A),h.value.emitter.on("change",this.onValueChange_),this.value_=h.value,this.update_()}update_(){this.selectElement.value=String(this.value_.rawValue)}onValueChange_(){this.update_()}}class Gr{constructor(a,h){this.onSelectChange_=this.onSelectChange_.bind(this),this.props=h.props,this.value=h.value,this.viewProps=h.viewProps,this.view=new Bo(a,{props:this.props,value:this.value,viewProps:this.viewProps}),this.view.selectElement.addEventListener("change",this.onSelectChange_)}onSelectChange_(a){const _=a.currentTarget.selectedOptions.item(0);if(!_)return;const A=Number(_.dataset.index);this.value.rawValue=this.props.get("options")[A].value}}const Zu=y("pop");class dg{constructor(a,h){this.element=a.createElement("div"),this.element.classList.add(Zu()),h.viewProps.bindClassModifiers(this.element),P(h.shows,B(this.element,Zu(void 0,"v")))}}class Qu{constructor(a,h){this.shows=G(!1),this.viewProps=h.viewProps,this.view=new dg(a,{shows:this.shows,viewProps:this.viewProps})}}const Ju=y("txt");class pg{constructor(a,h){this.onChange_=this.onChange_.bind(this),this.element=a.createElement("div"),this.element.classList.add(Ju()),h.viewProps.bindClassModifiers(this.element),this.props_=h.props,this.props_.emitter.on("change",this.onChange_);const _=a.createElement("input");_.classList.add(Ju("i")),_.type="text",h.viewProps.bindDisabled(_),this.element.appendChild(_),this.inputElement=_,h.value.emitter.on("change",this.onChange_),this.value_=h.value,this.refresh()}refresh(){const a=this.props_.get("formatter");this.inputElement.value=a(this.value_.rawValue)}onChange_(){this.refresh()}}class ko{constructor(a,h){this.onInputChange_=this.onInputChange_.bind(this),this.parser_=h.parser,this.props=h.props,this.value=h.value,this.viewProps=h.viewProps,this.view=new pg(a,{props:h.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_)}onInputChange_(a){const _=a.currentTarget.value,A=this.parser_(_);f(A)||(this.value.rawValue=A),this.view.refresh()}}function fg(p){return String(p)}function eh(p){return p==="false"?!1:!!p}function th(p){return fg(p)}class mg{constructor(a){this.text=a}evaluate(){return Number(this.text)}toString(){return this.text}}const gg={"**":(p,a)=>Math.pow(p,a),"*":(p,a)=>p*a,"/":(p,a)=>p/a,"%":(p,a)=>p%a,"+":(p,a)=>p+a,"-":(p,a)=>p-a,"<<":(p,a)=>p<<a,">>":(p,a)=>p>>a,">>>":(p,a)=>p>>>a,"&":(p,a)=>p&a,"^":(p,a)=>p^a,"|":(p,a)=>p|a};class vg{constructor(a,h,_){this.left=h,this.operator=a,this.right=_}evaluate(){const a=gg[this.operator];if(!a)throw new Error(`unexpected binary operator: '${this.operator}`);return a(this.left.evaluate(),this.right.evaluate())}toString(){return["b(",this.left.toString(),this.operator,this.right.toString(),")"].join(" ")}}const _g={"+":p=>p,"-":p=>-p,"~":p=>~p};class xg{constructor(a,h){this.operator=a,this.expression=h}evaluate(){const a=_g[this.operator];if(!a)throw new Error(`unexpected unary operator: '${this.operator}`);return a(this.expression.evaluate())}toString(){return["u(",this.operator,this.expression.toString(),")"].join(" ")}}function gl(p){return(a,h)=>{for(let _=0;_<p.length;_++){const A=p[_](a,h);if(A!=="")return A}return""}}function Wr(p,a){var h;const _=p.substr(a).match(/^\s+/);return(h=_&&_[0])!==null&&h!==void 0?h:""}function bg(p,a){const h=p.substr(a,1);return h.match(/^[1-9]$/)?h:""}function Xr(p,a){var h;const _=p.substr(a).match(/^[0-9]+/);return(h=_&&_[0])!==null&&h!==void 0?h:""}function yg(p,a){const h=Xr(p,a);if(h!=="")return h;const _=p.substr(a,1);if(a+=1,_!=="-"&&_!=="+")return"";const A=Xr(p,a);return A===""?"":_+A}function vl(p,a){const h=p.substr(a,1);if(a+=1,h.toLowerCase()!=="e")return"";const _=yg(p,a);return _===""?"":h+_}function nh(p,a){const h=p.substr(a,1);if(h==="0")return h;const _=bg(p,a);return a+=_.length,_===""?"":_+Xr(p,a)}function wg(p,a){const h=nh(p,a);if(a+=h.length,h==="")return"";const _=p.substr(a,1);if(a+=_.length,_!==".")return"";const A=Xr(p,a);return a+=A.length,h+_+A+vl(p,a)}function Mg(p,a){const h=p.substr(a,1);if(a+=h.length,h!==".")return"";const _=Xr(p,a);return a+=_.length,_===""?"":h+_+vl(p,a)}function Eg(p,a){const h=nh(p,a);return a+=h.length,h===""?"":h+vl(p,a)}const Sg=gl([wg,Mg,Eg]);function Tg(p,a){var h;const _=p.substr(a).match(/^[01]+/);return(h=_&&_[0])!==null&&h!==void 0?h:""}function Ag(p,a){const h=p.substr(a,2);if(a+=h.length,h.toLowerCase()!=="0b")return"";const _=Tg(p,a);return _===""?"":h+_}function Cg(p,a){var h;const _=p.substr(a).match(/^[0-7]+/);return(h=_&&_[0])!==null&&h!==void 0?h:""}function Pg(p,a){const h=p.substr(a,2);if(a+=h.length,h.toLowerCase()!=="0o")return"";const _=Cg(p,a);return _===""?"":h+_}function Rg(p,a){var h;const _=p.substr(a).match(/^[0-9a-f]+/i);return(h=_&&_[0])!==null&&h!==void 0?h:""}function Lg(p,a){const h=p.substr(a,2);if(a+=h.length,h.toLowerCase()!=="0x")return"";const _=Rg(p,a);return _===""?"":h+_}const Ig=gl([Ag,Pg,Lg]),Dg=gl([Ig,Sg]);function Ng(p,a){const h=Dg(p,a);return a+=h.length,h===""?null:{evaluable:new mg(h),cursor:a}}function Ug(p,a){const h=p.substr(a,1);if(a+=h.length,h!=="(")return null;const _=sh(p,a);if(!_)return null;a=_.cursor,a+=Wr(p,a).length;const A=p.substr(a,1);return a+=A.length,A!==")"?null:{evaluable:_.evaluable,cursor:a}}function Fg(p,a){var h;return(h=Ng(p,a))!==null&&h!==void 0?h:Ug(p,a)}function ih(p,a){const h=Fg(p,a);if(h)return h;const _=p.substr(a,1);if(a+=_.length,_!=="+"&&_!=="-"&&_!=="~")return null;const A=ih(p,a);return A?(a=A.cursor,{cursor:a,evaluable:new xg(_,A.evaluable)}):null}function Og(p,a,h){h+=Wr(a,h).length;const _=p.filter(A=>a.startsWith(A,h))[0];return _?(h+=_.length,h+=Wr(a,h).length,{cursor:h,operator:_}):null}function Bg(p,a){return(h,_)=>{const A=p(h,_);if(!A)return null;_=A.cursor;let z=A.evaluable;for(;;){const Y=Og(a,h,_);if(!Y)break;_=Y.cursor;const de=p(h,_);if(!de)return null;_=de.cursor,z=new vg(Y.operator,z,de.evaluable)}return z?{cursor:_,evaluable:z}:null}}const kg=[["**"],["*","/","%"],["+","-"],["<<",">>>",">>"],["&"],["^"],["|"]].reduce((p,a)=>Bg(p,a),ih);function sh(p,a){return a+=Wr(p,a).length,kg(p,a)}function Vg(p){const a=sh(p,0);return!a||a.cursor+Wr(p,a.cursor).length!==p.length?null:a.evaluable}function hi(p){var a;const h=Vg(p);return(a=h==null?void 0:h.evaluate())!==null&&a!==void 0?a:null}function rh(p){if(typeof p=="number")return p;if(typeof p=="string"){const a=hi(p);if(!f(a))return a}return 0}function zg(p){return String(p)}function on(p){return a=>a.toFixed(Math.max(Math.min(p,20),0))}const Hg=on(0);function Vo(p){return Hg(p)+"%"}function oh(p){return String(p)}function _l(p){return p}function ah(p,a){for(;p.length<a;)p.push(void 0)}function Gg(p){const a=[];return ah(a,p),G(a)}function Wg(p){const a=p.indexOf(void 0);return a<0?p:p.slice(0,a)}function Xg(p,a){const h=[...Wg(p),a];return h.length>p.length?h.splice(0,h.length-p.length):ah(h,p.length),h}function jr({primary:p,secondary:a,forward:h,backward:_}){let A=!1;function z(Y){A||(A=!0,Y(),A=!1)}p.emitter.on("change",Y=>{z(()=>{a.setRawValue(h(p,a),Y.options)})}),a.emitter.on("change",Y=>{z(()=>{p.setRawValue(_(p,a),Y.options)}),z(()=>{a.setRawValue(h(p,a),Y.options)})}),z(()=>{a.setRawValue(h(p,a),{forceEmit:!1,last:!0})})}function wn(p,a){const h=p*(a.altKey?.1:1)*(a.shiftKey?10:1);return a.upKey?+h:a.downKey?-h:0}function qr(p){return{altKey:p.altKey,downKey:p.key==="ArrowDown",shiftKey:p.shiftKey,upKey:p.key==="ArrowUp"}}function di(p){return{altKey:p.altKey,downKey:p.key==="ArrowLeft",shiftKey:p.shiftKey,upKey:p.key==="ArrowRight"}}function jg(p){return p==="ArrowUp"||p==="ArrowDown"}function lh(p){return jg(p)||p==="ArrowLeft"||p==="ArrowRight"}function xl(p,a){var h,_;const A=a.ownerDocument.defaultView,z=a.getBoundingClientRect();return{x:p.pageX-(((h=A&&A.scrollX)!==null&&h!==void 0?h:0)+z.left),y:p.pageY-(((_=A&&A.scrollY)!==null&&_!==void 0?_:0)+z.top)}}class ns{constructor(a){this.lastTouch_=null,this.onDocumentMouseMove_=this.onDocumentMouseMove_.bind(this),this.onDocumentMouseUp_=this.onDocumentMouseUp_.bind(this),this.onMouseDown_=this.onMouseDown_.bind(this),this.onTouchEnd_=this.onTouchEnd_.bind(this),this.onTouchMove_=this.onTouchMove_.bind(this),this.onTouchStart_=this.onTouchStart_.bind(this),this.elem_=a,this.emitter=new v,a.addEventListener("touchstart",this.onTouchStart_,{passive:!1}),a.addEventListener("touchmove",this.onTouchMove_,{passive:!0}),a.addEventListener("touchend",this.onTouchEnd_),a.addEventListener("mousedown",this.onMouseDown_)}computePosition_(a){const h=this.elem_.getBoundingClientRect();return{bounds:{width:h.width,height:h.height},point:a?{x:a.x,y:a.y}:null}}onMouseDown_(a){var h;a.preventDefault(),(h=a.currentTarget)===null||h===void 0||h.focus();const _=this.elem_.ownerDocument;_.addEventListener("mousemove",this.onDocumentMouseMove_),_.addEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("down",{altKey:a.altKey,data:this.computePosition_(xl(a,this.elem_)),sender:this,shiftKey:a.shiftKey})}onDocumentMouseMove_(a){this.emitter.emit("move",{altKey:a.altKey,data:this.computePosition_(xl(a,this.elem_)),sender:this,shiftKey:a.shiftKey})}onDocumentMouseUp_(a){const h=this.elem_.ownerDocument;h.removeEventListener("mousemove",this.onDocumentMouseMove_),h.removeEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("up",{altKey:a.altKey,data:this.computePosition_(xl(a,this.elem_)),sender:this,shiftKey:a.shiftKey})}onTouchStart_(a){a.preventDefault();const h=a.targetTouches.item(0),_=this.elem_.getBoundingClientRect();this.emitter.emit("down",{altKey:a.altKey,data:this.computePosition_(h?{x:h.clientX-_.left,y:h.clientY-_.top}:void 0),sender:this,shiftKey:a.shiftKey}),this.lastTouch_=h}onTouchMove_(a){const h=a.targetTouches.item(0),_=this.elem_.getBoundingClientRect();this.emitter.emit("move",{altKey:a.altKey,data:this.computePosition_(h?{x:h.clientX-_.left,y:h.clientY-_.top}:void 0),sender:this,shiftKey:a.shiftKey}),this.lastTouch_=h}onTouchEnd_(a){var h;const _=(h=a.targetTouches.item(0))!==null&&h!==void 0?h:this.lastTouch_,A=this.elem_.getBoundingClientRect();this.emitter.emit("up",{altKey:a.altKey,data:this.computePosition_(_?{x:_.clientX-A.left,y:_.clientY-A.top}:void 0),sender:this,shiftKey:a.shiftKey})}}function Dt(p,a,h,_,A){const z=(p-a)/(h-a);return _+z*(A-_)}function ch(p){return String(p.toFixed(10)).split(".")[1].replace(/0+$/,"").length}function Kt(p,a,h){return Math.min(Math.max(p,a),h)}function uh(p,a){return(p%a+a)%a}const Dn=y("txt");class qg{constructor(a,h){this.onChange_=this.onChange_.bind(this),this.props_=h.props,this.props_.emitter.on("change",this.onChange_),this.element=a.createElement("div"),this.element.classList.add(Dn(),Dn(void 0,"num")),h.arrayPosition&&this.element.classList.add(Dn(void 0,h.arrayPosition)),h.viewProps.bindClassModifiers(this.element);const _=a.createElement("input");_.classList.add(Dn("i")),_.type="text",h.viewProps.bindDisabled(_),this.element.appendChild(_),this.inputElement=_,this.onDraggingChange_=this.onDraggingChange_.bind(this),this.dragging_=h.dragging,this.dragging_.emitter.on("change",this.onDraggingChange_),this.element.classList.add(Dn()),this.inputElement.classList.add(Dn("i"));const A=a.createElement("div");A.classList.add(Dn("k")),this.element.appendChild(A),this.knobElement=A;const z=a.createElementNS(Ue,"svg");z.classList.add(Dn("g")),this.knobElement.appendChild(z);const Y=a.createElementNS(Ue,"path");Y.classList.add(Dn("gb")),z.appendChild(Y),this.guideBodyElem_=Y;const de=a.createElementNS(Ue,"path");de.classList.add(Dn("gh")),z.appendChild(de),this.guideHeadElem_=de;const Fe=a.createElement("div");Fe.classList.add(y("tt")()),this.knobElement.appendChild(Fe),this.tooltipElem_=Fe,h.value.emitter.on("change",this.onChange_),this.value=h.value,this.refresh()}onDraggingChange_(a){if(a.rawValue===null){this.element.classList.remove(Dn(void 0,"drg"));return}this.element.classList.add(Dn(void 0,"drg"));const h=a.rawValue/this.props_.get("draggingScale"),_=h+(h>0?-1:h<0?1:0),A=Kt(-_,-4,4);this.guideHeadElem_.setAttributeNS(null,"d",[`M ${_+A},0 L${_},4 L${_+A},8`,`M ${h},-1 L${h},9`].join(" ")),this.guideBodyElem_.setAttributeNS(null,"d",`M 0,4 L${h},4`);const z=this.props_.get("formatter");this.tooltipElem_.textContent=z(this.value.rawValue),this.tooltipElem_.style.left=`${h}px`}refresh(){const a=this.props_.get("formatter");this.inputElement.value=a(this.value.rawValue)}onChange_(){this.refresh()}}class Yr{constructor(a,h){var _;this.originRawValue_=0,this.onInputChange_=this.onInputChange_.bind(this),this.onInputKeyDown_=this.onInputKeyDown_.bind(this),this.onInputKeyUp_=this.onInputKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.baseStep_=h.baseStep,this.parser_=h.parser,this.props=h.props,this.sliderProps_=(_=h.sliderProps)!==null&&_!==void 0?_:null,this.value=h.value,this.viewProps=h.viewProps,this.dragging_=G(null),this.view=new qg(a,{arrayPosition:h.arrayPosition,dragging:this.dragging_,props:this.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_),this.view.inputElement.addEventListener("keydown",this.onInputKeyDown_),this.view.inputElement.addEventListener("keyup",this.onInputKeyUp_);const A=new ns(this.view.knobElement);A.emitter.on("down",this.onPointerDown_),A.emitter.on("move",this.onPointerMove_),A.emitter.on("up",this.onPointerUp_)}constrainValue_(a){var h,_;const A=(h=this.sliderProps_)===null||h===void 0?void 0:h.get("minValue"),z=(_=this.sliderProps_)===null||_===void 0?void 0:_.get("maxValue");let Y=a;return A!==void 0&&(Y=Math.max(Y,A)),z!==void 0&&(Y=Math.min(Y,z)),Y}onInputChange_(a){const _=a.currentTarget.value,A=this.parser_(_);f(A)||(this.value.rawValue=this.constrainValue_(A)),this.view.refresh()}onInputKeyDown_(a){const h=wn(this.baseStep_,qr(a));h!==0&&this.value.setRawValue(this.constrainValue_(this.value.rawValue+h),{forceEmit:!1,last:!1})}onInputKeyUp_(a){wn(this.baseStep_,qr(a))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}onPointerDown_(){this.originRawValue_=this.value.rawValue,this.dragging_.rawValue=0}computeDraggingValue_(a){if(!a.point)return null;const h=a.point.x-a.bounds.width/2;return this.constrainValue_(this.originRawValue_+h*this.props.get("draggingScale"))}onPointerMove_(a){const h=this.computeDraggingValue_(a.data);h!==null&&(this.value.setRawValue(h,{forceEmit:!1,last:!1}),this.dragging_.rawValue=this.value.rawValue-this.originRawValue_)}onPointerUp_(a){const h=this.computeDraggingValue_(a.data);h!==null&&(this.value.setRawValue(h,{forceEmit:!0,last:!0}),this.dragging_.rawValue=null)}}const bl=y("sld");class Yg{constructor(a,h){this.onChange_=this.onChange_.bind(this),this.props_=h.props,this.props_.emitter.on("change",this.onChange_),this.element=a.createElement("div"),this.element.classList.add(bl()),h.viewProps.bindClassModifiers(this.element);const _=a.createElement("div");_.classList.add(bl("t")),h.viewProps.bindTabIndex(_),this.element.appendChild(_),this.trackElement=_;const A=a.createElement("div");A.classList.add(bl("k")),this.trackElement.appendChild(A),this.knobElement=A,h.value.emitter.on("change",this.onChange_),this.value=h.value,this.update_()}update_(){const a=Kt(Dt(this.value.rawValue,this.props_.get("minValue"),this.props_.get("maxValue"),0,100),0,100);this.knobElement.style.width=`${a}%`}onChange_(){this.update_()}}class Kg{constructor(a,h){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDownOrMove_=this.onPointerDownOrMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.baseStep_=h.baseStep,this.value=h.value,this.viewProps=h.viewProps,this.props=h.props,this.view=new Yg(a,{props:this.props,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new ns(this.view.trackElement),this.ptHandler_.emitter.on("down",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("move",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.trackElement.addEventListener("keydown",this.onKeyDown_),this.view.trackElement.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(a,h){!a.point||this.value.setRawValue(Dt(Kt(a.point.x,0,a.bounds.width),0,a.bounds.width,this.props.get("minValue"),this.props.get("maxValue")),h)}onPointerDownOrMove_(a){this.handlePointerEvent_(a.data,{forceEmit:!1,last:!1})}onPointerUp_(a){this.handlePointerEvent_(a.data,{forceEmit:!0,last:!0})}onKeyDown_(a){const h=wn(this.baseStep_,di(a));h!==0&&this.value.setRawValue(this.value.rawValue+h,{forceEmit:!1,last:!1})}onKeyUp_(a){wn(this.baseStep_,di(a))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const yl=y("sldtxt");class $g{constructor(a,h){this.element=a.createElement("div"),this.element.classList.add(yl());const _=a.createElement("div");_.classList.add(yl("s")),this.sliderView_=h.sliderView,_.appendChild(this.sliderView_.element),this.element.appendChild(_);const A=a.createElement("div");A.classList.add(yl("t")),this.textView_=h.textView,A.appendChild(this.textView_.element),this.element.appendChild(A)}}class wl{constructor(a,h){this.value=h.value,this.viewProps=h.viewProps,this.sliderC_=new Kg(a,{baseStep:h.baseStep,props:h.sliderProps,value:h.value,viewProps:this.viewProps}),this.textC_=new Yr(a,{baseStep:h.baseStep,parser:h.parser,props:h.textProps,sliderProps:h.sliderProps,value:h.value,viewProps:h.viewProps}),this.view=new $g(a,{sliderView:this.sliderC_.view,textView:this.textC_.view})}get sliderController(){return this.sliderC_}get textController(){return this.textC_}}function Kr(p,a){p.write(a)}function zo(p){const a=he;if(Array.isArray(p))return a.required.array(a.required.object({text:a.required.string,value:a.required.raw}))(p).value;if(typeof p=="object")return a.required.raw(p).value}function hh(p){if(p==="inline"||p==="popup")return p}function Ii(p){const a=he;return a.required.object({max:a.optional.number,min:a.optional.number,step:a.optional.number})(p).value}function dh(p){if(Array.isArray(p))return p;const a=[];return Object.keys(p).forEach(h=>{a.push({text:h,value:p[h]})}),a}function Ml(p){return f(p)?null:new ui(dh(p))}function El(p){const a=p?en(p,ui):null;return a?a.options:null}function Zg(p){const a=p?en(p,Li):null;return a?a.step:null}function Ho(p,a){const h=p&&en(p,Li);return h?ch(h.step):Math.max(ch(a),2)}function Rs(p){const a=Zg(p);return a!=null?a:1}function Ls(p,a){var h;const _=p&&en(p,Li),A=Math.abs((h=_==null?void 0:_.step)!==null&&h!==void 0?h:a);return A===0?.1:Math.pow(10,Math.floor(Math.log10(A))-1)}const Go=y("ckb");class Qg{constructor(a,h){this.onValueChange_=this.onValueChange_.bind(this),this.element=a.createElement("div"),this.element.classList.add(Go()),h.viewProps.bindClassModifiers(this.element);const _=a.createElement("label");_.classList.add(Go("l")),this.element.appendChild(_);const A=a.createElement("input");A.classList.add(Go("i")),A.type="checkbox",_.appendChild(A),this.inputElement=A,h.viewProps.bindDisabled(this.inputElement);const z=a.createElement("div");z.classList.add(Go("w")),_.appendChild(z);const Y=Ve(a,"check");z.appendChild(Y),h.value.emitter.on("change",this.onValueChange_),this.value=h.value,this.update_()}update_(){this.inputElement.checked=this.value.rawValue}onValueChange_(){this.update_()}}class Jg{constructor(a,h){this.onInputChange_=this.onInputChange_.bind(this),this.value=h.value,this.viewProps=h.viewProps,this.view=new Qg(a,{value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_)}onInputChange_(a){const h=a.currentTarget;this.value.rawValue=h.checked}}function e0(p){const a=[],h=Ml(p.options);return h&&a.push(h),new Bt(a)}const t0={id:"input-bool",type:"input",accept:(p,a)=>{if(typeof p!="boolean")return null;const _=q(a,{options:he.optional.custom(zo)});return _?{initialValue:p,params:_}:null},binding:{reader:p=>eh,constraint:p=>e0(p.params),writer:p=>Kr},controller:p=>{var a;const h=p.document,_=p.value,A=p.constraint;return A&&en(A,ui)?new Gr(h,{props:X.fromObject({options:(a=El(A))!==null&&a!==void 0?a:[]}),value:_,viewProps:p.viewProps}):new Jg(h,{value:_,viewProps:p.viewProps})}},is=y("col");class n0{constructor(a,h){this.element=a.createElement("div"),this.element.classList.add(is()),h.foldable.bindExpandedClass(this.element,is(void 0,"expanded")),T(h.foldable,"completed",B(this.element,is(void 0,"cpl")));const _=a.createElement("div");_.classList.add(is("h")),this.element.appendChild(_);const A=a.createElement("div");A.classList.add(is("s")),_.appendChild(A),this.swatchElement=A;const z=a.createElement("div");if(z.classList.add(is("t")),_.appendChild(z),this.textElement=z,h.pickerLayout==="inline"){const Y=a.createElement("div");Y.classList.add(is("p")),this.element.appendChild(Y),this.pickerElement=Y}else this.pickerElement=null}}function i0(p,a,h){const _=Kt(p/255,0,1),A=Kt(a/255,0,1),z=Kt(h/255,0,1),Y=Math.max(_,A,z),de=Math.min(_,A,z),Fe=Y-de;let Ye=0,ht=0;const pt=(de+Y)/2;return Fe!==0&&(ht=Fe/(1-Math.abs(Y+de-1)),_===Y?Ye=(A-z)/Fe:A===Y?Ye=2+(z-_)/Fe:Ye=4+(_-A)/Fe,Ye=Ye/6+(Ye<0?1:0)),[Ye*360,ht*100,pt*100]}function s0(p,a,h){const _=(p%360+360)%360,A=Kt(a/100,0,1),z=Kt(h/100,0,1),Y=(1-Math.abs(2*z-1))*A,de=Y*(1-Math.abs(_/60%2-1)),Fe=z-Y/2;let Ye,ht,pt;return _>=0&&_<60?[Ye,ht,pt]=[Y,de,0]:_>=60&&_<120?[Ye,ht,pt]=[de,Y,0]:_>=120&&_<180?[Ye,ht,pt]=[0,Y,de]:_>=180&&_<240?[Ye,ht,pt]=[0,de,Y]:_>=240&&_<300?[Ye,ht,pt]=[de,0,Y]:[Ye,ht,pt]=[Y,0,de],[(Ye+Fe)*255,(ht+Fe)*255,(pt+Fe)*255]}function r0(p,a,h){const _=Kt(p/255,0,1),A=Kt(a/255,0,1),z=Kt(h/255,0,1),Y=Math.max(_,A,z),de=Math.min(_,A,z),Fe=Y-de;let Ye;Fe===0?Ye=0:Y===_?Ye=60*(((A-z)/Fe%6+6)%6):Y===A?Ye=60*((z-_)/Fe+2):Ye=60*((_-A)/Fe+4);const ht=Y===0?0:Fe/Y,pt=Y;return[Ye,ht*100,pt*100]}function ph(p,a,h){const _=uh(p,360),A=Kt(a/100,0,1),z=Kt(h/100,0,1),Y=z*A,de=Y*(1-Math.abs(_/60%2-1)),Fe=z-Y;let Ye,ht,pt;return _>=0&&_<60?[Ye,ht,pt]=[Y,de,0]:_>=60&&_<120?[Ye,ht,pt]=[de,Y,0]:_>=120&&_<180?[Ye,ht,pt]=[0,Y,de]:_>=180&&_<240?[Ye,ht,pt]=[0,de,Y]:_>=240&&_<300?[Ye,ht,pt]=[de,0,Y]:[Ye,ht,pt]=[Y,0,de],[(Ye+Fe)*255,(ht+Fe)*255,(pt+Fe)*255]}function o0(p,a,h){const _=h+a*(100-Math.abs(2*h-100))/200;return[p,_!==0?a*(100-Math.abs(2*h-100))/_:0,h+a*(100-Math.abs(2*h-100))/(2*100)]}function a0(p,a,h){const _=100-Math.abs(h*(200-a)/100-100);return[p,_!==0?a*h/_:0,h*(200-a)/(2*100)]}function ss(p){return[p[0],p[1],p[2]]}function fh(p,a){return[p[0],p[1],p[2],a]}const l0={hsl:{hsl:(p,a,h)=>[p,a,h],hsv:o0,rgb:s0},hsv:{hsl:a0,hsv:(p,a,h)=>[p,a,h],rgb:ph},rgb:{hsl:i0,hsv:r0,rgb:(p,a,h)=>[p,a,h]}};function Wo(p,a){return[a==="float"?1:p==="rgb"?255:360,a==="float"?1:p==="rgb"?255:100,a==="float"?1:p==="rgb"?255:100]}function c0(p,a,h){var _;const A=Wo(a,h);return[a==="rgb"?Kt(p[0],0,A[0]):uh(p[0],A[0]),Kt(p[1],0,A[1]),Kt(p[2],0,A[2]),Kt((_=p[3])!==null&&_!==void 0?_:1,0,1)]}function mh(p,a,h,_){const A=Wo(a,h),z=Wo(a,_);return p.map((Y,de)=>Y/A[de]*z[de])}function u0(p,a,h){const _=mh(p,a.mode,a.type,"int"),A=l0[a.mode][h.mode](..._);return mh(A,h.mode,"int",h.type)}function Xo(p,a){return typeof p!="object"||f(p)?!1:a in p&&typeof p[a]=="number"}class rt{constructor(a,h,_="int"){this.mode=h,this.type=_,this.comps_=c0(a,h,_)}static black(a="int"){return new rt([0,0,0],"rgb",a)}static fromObject(a,h="int"){const _="a"in a?[a.r,a.g,a.b,a.a]:[a.r,a.g,a.b];return new rt(_,"rgb",h)}static toRgbaObject(a,h="int"){return a.toRgbaObject(h)}static isRgbColorObject(a){return Xo(a,"r")&&Xo(a,"g")&&Xo(a,"b")}static isRgbaColorObject(a){return this.isRgbColorObject(a)&&Xo(a,"a")}static isColorObject(a){return this.isRgbColorObject(a)}static equals(a,h){if(a.mode!==h.mode)return!1;const _=a.comps_,A=h.comps_;for(let z=0;z<_.length;z++)if(_[z]!==A[z])return!1;return!0}getComponents(a,h="int"){return fh(u0(ss(this.comps_),{mode:this.mode,type:this.type},{mode:a!=null?a:this.mode,type:h}),this.comps_[3])}toRgbaObject(a="int"){const h=this.getComponents("rgb",a);return{r:h[0],g:h[1],b:h[2],a:h[3]}}}const Di=y("colp");class h0{constructor(a,h){this.alphaViews_=null,this.element=a.createElement("div"),this.element.classList.add(Di());const _=a.createElement("div");_.classList.add(Di("hsv"));const A=a.createElement("div");A.classList.add(Di("sv")),this.svPaletteView_=h.svPaletteView,A.appendChild(this.svPaletteView_.element),_.appendChild(A);const z=a.createElement("div");z.classList.add(Di("h")),this.hPaletteView_=h.hPaletteView,z.appendChild(this.hPaletteView_.element),_.appendChild(z),this.element.appendChild(_);const Y=a.createElement("div");if(Y.classList.add(Di("rgb")),this.textView_=h.textView,Y.appendChild(this.textView_.element),this.element.appendChild(Y),h.alphaViews){this.alphaViews_={palette:h.alphaViews.palette,text:h.alphaViews.text};const de=a.createElement("div");de.classList.add(Di("a"));const Fe=a.createElement("div");Fe.classList.add(Di("ap")),Fe.appendChild(this.alphaViews_.palette.element),de.appendChild(Fe);const Ye=a.createElement("div");Ye.classList.add(Di("at")),Ye.appendChild(this.alphaViews_.text.element),de.appendChild(Ye),this.element.appendChild(de)}}get allFocusableElements(){const a=[this.svPaletteView_.element,this.hPaletteView_.element,this.textView_.modeSelectElement,...this.textView_.textViews.map(h=>h.inputElement)];return this.alphaViews_&&a.push(this.alphaViews_.palette.element,this.alphaViews_.text.inputElement),a}}function d0(p){return p==="int"?"int":p==="float"?"float":void 0}function Sl(p){const a=he;return q(p,{alpha:a.optional.boolean,color:a.optional.object({alpha:a.optional.boolean,type:a.optional.custom(d0)}),expanded:a.optional.boolean,picker:a.optional.custom(hh)})}function rs(p){return p?.1:1}function os(p){var a;return(a=p.color)===null||a===void 0?void 0:a.type}function p0(p,a){return p.alpha===a.alpha&&p.mode===a.mode&&p.notation===a.notation&&p.type===a.type}function Nn(p,a){const h=p.match(/^(.+)%$/);return Math.min(h?parseFloat(h[1])*.01*a:parseFloat(p),a)}const f0={deg:p=>p,grad:p=>p*360/400,rad:p=>p*360/(2*Math.PI),turn:p=>p*360};function gh(p){const a=p.match(/^([0-9.]+?)(deg|grad|rad|turn)$/);if(!a)return parseFloat(p);const h=parseFloat(a[1]),_=a[2];return f0[_](h)}function vh(p){const a=p.match(/^rgb\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!a)return null;const h=[Nn(a[1],255),Nn(a[2],255),Nn(a[3],255)];return isNaN(h[0])||isNaN(h[1])||isNaN(h[2])?null:h}function _h(p){return a=>{const h=vh(a);return h?new rt(h,"rgb",p):null}}function xh(p){const a=p.match(/^rgba\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!a)return null;const h=[Nn(a[1],255),Nn(a[2],255),Nn(a[3],255),Nn(a[4],1)];return isNaN(h[0])||isNaN(h[1])||isNaN(h[2])||isNaN(h[3])?null:h}function bh(p){return a=>{const h=xh(a);return h?new rt(h,"rgb",p):null}}function yh(p){const a=p.match(/^hsl\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!a)return null;const h=[gh(a[1]),Nn(a[2],100),Nn(a[3],100)];return isNaN(h[0])||isNaN(h[1])||isNaN(h[2])?null:h}function wh(p){return a=>{const h=yh(a);return h?new rt(h,"hsl",p):null}}function Mh(p){const a=p.match(/^hsla\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!a)return null;const h=[gh(a[1]),Nn(a[2],100),Nn(a[3],100),Nn(a[4],1)];return isNaN(h[0])||isNaN(h[1])||isNaN(h[2])||isNaN(h[3])?null:h}function Eh(p){return a=>{const h=Mh(a);return h?new rt(h,"hsl",p):null}}function Sh(p){const a=p.match(/^#([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(a)return[parseInt(a[1]+a[1],16),parseInt(a[2]+a[2],16),parseInt(a[3]+a[3],16)];const h=p.match(/^(?:#|0x)([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return h?[parseInt(h[1],16),parseInt(h[2],16),parseInt(h[3],16)]:null}function m0(p){const a=Sh(p);return a?new rt(a,"rgb","int"):null}function Th(p){const a=p.match(/^#?([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(a)return[parseInt(a[1]+a[1],16),parseInt(a[2]+a[2],16),parseInt(a[3]+a[3],16),Dt(parseInt(a[4]+a[4],16),0,255,0,1)];const h=p.match(/^(?:#|0x)?([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return h?[parseInt(h[1],16),parseInt(h[2],16),parseInt(h[3],16),Dt(parseInt(h[4],16),0,255,0,1)]:null}function g0(p){const a=Th(p);return a?new rt(a,"rgb","int"):null}function Ah(p){const a=p.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!a)return null;const h=[parseFloat(a[1]),parseFloat(a[2]),parseFloat(a[3])];return isNaN(h[0])||isNaN(h[1])||isNaN(h[2])?null:h}function Ch(p){return a=>{const h=Ah(a);return h?new rt(h,"rgb",p):null}}function Ph(p){const a=p.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*a\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!a)return null;const h=[parseFloat(a[1]),parseFloat(a[2]),parseFloat(a[3]),parseFloat(a[4])];return isNaN(h[0])||isNaN(h[1])||isNaN(h[2])||isNaN(h[3])?null:h}function Rh(p){return a=>{const h=Ph(a);return h?new rt(h,"rgb",p):null}}const v0=[{parser:Sh,result:{alpha:!1,mode:"rgb",notation:"hex"}},{parser:Th,result:{alpha:!0,mode:"rgb",notation:"hex"}},{parser:vh,result:{alpha:!1,mode:"rgb",notation:"func"}},{parser:xh,result:{alpha:!0,mode:"rgb",notation:"func"}},{parser:yh,result:{alpha:!1,mode:"hsl",notation:"func"}},{parser:Mh,result:{alpha:!0,mode:"hsl",notation:"func"}},{parser:Ah,result:{alpha:!1,mode:"rgb",notation:"object"}},{parser:Ph,result:{alpha:!0,mode:"rgb",notation:"object"}}];function _0(p){return v0.reduce((a,{parser:h,result:_})=>a||(h(p)?_:null),null)}function Tl(p,a="int"){const h=_0(p);return h?h.notation==="hex"&&a!=="float"?Object.assign(Object.assign({},h),{type:"int"}):h.notation==="func"?Object.assign(Object.assign({},h),{type:a}):null:null}const Lh={int:[m0,g0,_h("int"),bh("int"),wh("int"),Eh("int"),Ch("int"),Rh("int")],float:[_h("float"),bh("float"),wh("float"),Eh("float"),Ch("float"),Rh("float")]};function x0(p){const a=Lh[p];return h=>{if(typeof h!="string")return rt.black(p);const _=a.reduce((A,z)=>A||z(h),null);return _!=null?_:rt.black(p)}}function Al(p){const a=Lh[p];return h=>a.reduce((_,A)=>_||A(h),null)}function Ih(p){const a=Kt(Math.floor(p),0,255).toString(16);return a.length===1?`0${a}`:a}function Dh(p,a="#"){const h=ss(p.getComponents("rgb")).map(Ih).join("");return`${a}${h}`}function Cl(p,a="#"){const h=p.getComponents("rgb"),_=[h[0],h[1],h[2],h[3]*255].map(Ih).join("");return`${a}${_}`}function Nh(p,a){const h=on(a==="float"?2:0);return`rgb(${ss(p.getComponents("rgb",a)).map(A=>h(A)).join(", ")})`}function b0(p){return a=>Nh(a,p)}function jo(p,a){const h=on(2),_=on(a==="float"?2:0);return`rgba(${p.getComponents("rgb",a).map((z,Y)=>(Y===3?h:_)(z)).join(", ")})`}function y0(p){return a=>jo(a,p)}function w0(p){const a=[on(0),Vo,Vo];return`hsl(${ss(p.getComponents("hsl")).map((_,A)=>a[A](_)).join(", ")})`}function M0(p){const a=[on(0),Vo,Vo,on(2)];return`hsla(${p.getComponents("hsl").map((_,A)=>a[A](_)).join(", ")})`}function Uh(p,a){const h=on(a==="float"?2:0),_=["r","g","b"];return`{${ss(p.getComponents("rgb",a)).map((z,Y)=>`${_[Y]}: ${h(z)}`).join(", ")}}`}function E0(p){return a=>Uh(a,p)}function Fh(p,a){const h=on(2),_=on(a==="float"?2:0),A=["r","g","b","a"];return`{${p.getComponents("rgb",a).map((Y,de)=>{const Fe=de===3?h:_;return`${A[de]}: ${Fe(Y)}`}).join(", ")}}`}function S0(p){return a=>Fh(a,p)}const T0=[{format:{alpha:!1,mode:"rgb",notation:"hex",type:"int"},stringifier:Dh},{format:{alpha:!0,mode:"rgb",notation:"hex",type:"int"},stringifier:Cl},{format:{alpha:!1,mode:"hsl",notation:"func",type:"int"},stringifier:w0},{format:{alpha:!0,mode:"hsl",notation:"func",type:"int"},stringifier:M0},...["int","float"].reduce((p,a)=>[...p,{format:{alpha:!1,mode:"rgb",notation:"func",type:a},stringifier:b0(a)},{format:{alpha:!0,mode:"rgb",notation:"func",type:a},stringifier:y0(a)},{format:{alpha:!1,mode:"rgb",notation:"object",type:a},stringifier:E0(a)},{format:{alpha:!0,mode:"rgb",notation:"object",type:a},stringifier:S0(a)}],[])];function Pl(p){return T0.reduce((a,h)=>a||(p0(h.format,p)?h.stringifier:null),null)}const $r=y("apl");class A0{constructor(a,h){this.onValueChange_=this.onValueChange_.bind(this),this.value=h.value,this.value.emitter.on("change",this.onValueChange_),this.element=a.createElement("div"),this.element.classList.add($r()),h.viewProps.bindTabIndex(this.element);const _=a.createElement("div");_.classList.add($r("b")),this.element.appendChild(_);const A=a.createElement("div");A.classList.add($r("c")),_.appendChild(A),this.colorElem_=A;const z=a.createElement("div");z.classList.add($r("m")),this.element.appendChild(z),this.markerElem_=z;const Y=a.createElement("div");Y.classList.add($r("p")),this.markerElem_.appendChild(Y),this.previewElem_=Y,this.update_()}update_(){const a=this.value.rawValue,h=a.getComponents("rgb"),_=new rt([h[0],h[1],h[2],0],"rgb"),A=new rt([h[0],h[1],h[2],255],"rgb"),z=["to right",jo(_),jo(A)];this.colorElem_.style.background=`linear-gradient(${z.join(",")})`,this.previewElem_.style.backgroundColor=jo(a);const Y=Dt(h[3],0,1,0,100);this.markerElem_.style.left=`${Y}%`}onValueChange_(){this.update_()}}class C0{constructor(a,h){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=h.value,this.viewProps=h.viewProps,this.view=new A0(a,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new ns(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(a,h){if(!a.point)return;const _=a.point.x/a.bounds.width,A=this.value.rawValue,[z,Y,de]=A.getComponents("hsv");this.value.setRawValue(new rt([z,Y,de,_],"hsv"),h)}onPointerDown_(a){this.handlePointerEvent_(a.data,{forceEmit:!1,last:!1})}onPointerMove_(a){this.handlePointerEvent_(a.data,{forceEmit:!1,last:!1})}onPointerUp_(a){this.handlePointerEvent_(a.data,{forceEmit:!0,last:!0})}onKeyDown_(a){const h=wn(rs(!0),di(a));if(h===0)return;const _=this.value.rawValue,[A,z,Y,de]=_.getComponents("hsv");this.value.setRawValue(new rt([A,z,Y,de+h],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(a){wn(rs(!0),di(a))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const Is=y("coltxt");function P0(p){const a=p.createElement("select"),h=[{text:"RGB",value:"rgb"},{text:"HSL",value:"hsl"},{text:"HSV",value:"hsv"}];return a.appendChild(h.reduce((_,A)=>{const z=p.createElement("option");return z.textContent=A.text,z.value=A.value,_.appendChild(z),_},p.createDocumentFragment())),a}class R0{constructor(a,h){this.element=a.createElement("div"),this.element.classList.add(Is());const _=a.createElement("div");_.classList.add(Is("m")),this.modeElem_=P0(a),this.modeElem_.classList.add(Is("ms")),_.appendChild(this.modeSelectElement);const A=a.createElement("div");A.classList.add(Is("mm")),A.appendChild(Ve(a,"dropdown")),_.appendChild(A),this.element.appendChild(_);const z=a.createElement("div");z.classList.add(Is("w")),this.element.appendChild(z),this.textsElem_=z,this.textViews_=h.textViews,this.applyTextViews_(),P(h.colorMode,Y=>{this.modeElem_.value=Y})}get modeSelectElement(){return this.modeElem_}get textViews(){return this.textViews_}set textViews(a){this.textViews_=a,this.applyTextViews_()}applyTextViews_(){Z(this.textsElem_);const a=this.element.ownerDocument;this.textViews_.forEach(h=>{const _=a.createElement("div");_.classList.add(Is("c")),_.appendChild(h.element),this.textsElem_.appendChild(_)})}}function L0(p){return on(p==="float"?2:0)}function I0(p,a,h){const _=Wo(p,a)[h];return new Yt({min:0,max:_})}function Rl(p,a,h){return new Yr(p,{arrayPosition:h===0?"fst":h===3-1?"lst":"mid",baseStep:rs(!1),parser:a.parser,props:X.fromObject({draggingScale:a.colorType==="float"?.01:1,formatter:L0(a.colorType)}),value:G(0,{constraint:I0(a.colorMode,a.colorType,h)}),viewProps:a.viewProps})}class D0{constructor(a,h){this.onModeSelectChange_=this.onModeSelectChange_.bind(this),this.colorType_=h.colorType,this.parser_=h.parser,this.value=h.value,this.viewProps=h.viewProps,this.colorMode=G(this.value.rawValue.mode),this.ccs_=this.createComponentControllers_(a),this.view=new R0(a,{colorMode:this.colorMode,textViews:[this.ccs_[0].view,this.ccs_[1].view,this.ccs_[2].view]}),this.view.modeSelectElement.addEventListener("change",this.onModeSelectChange_)}createComponentControllers_(a){const h={colorMode:this.colorMode.rawValue,colorType:this.colorType_,parser:this.parser_,viewProps:this.viewProps},_=[Rl(a,h,0),Rl(a,h,1),Rl(a,h,2)];return _.forEach((A,z)=>{jr({primary:this.value,secondary:A.value,forward:Y=>Y.rawValue.getComponents(this.colorMode.rawValue,this.colorType_)[z],backward:(Y,de)=>{const Fe=this.colorMode.rawValue,Ye=Y.rawValue.getComponents(Fe,this.colorType_);return Ye[z]=de.rawValue,new rt(fh(ss(Ye),Ye[3]),Fe,this.colorType_)}})}),_}onModeSelectChange_(a){const h=a.currentTarget;this.colorMode.rawValue=h.value,this.ccs_=this.createComponentControllers_(this.view.element.ownerDocument),this.view.textViews=[this.ccs_[0].view,this.ccs_[1].view,this.ccs_[2].view]}}const Ll=y("hpl");class N0{constructor(a,h){this.onValueChange_=this.onValueChange_.bind(this),this.value=h.value,this.value.emitter.on("change",this.onValueChange_),this.element=a.createElement("div"),this.element.classList.add(Ll()),h.viewProps.bindTabIndex(this.element);const _=a.createElement("div");_.classList.add(Ll("c")),this.element.appendChild(_);const A=a.createElement("div");A.classList.add(Ll("m")),this.element.appendChild(A),this.markerElem_=A,this.update_()}update_(){const a=this.value.rawValue,[h]=a.getComponents("hsv");this.markerElem_.style.backgroundColor=Nh(new rt([h,100,100],"hsv"));const _=Dt(h,0,360,0,100);this.markerElem_.style.left=`${_}%`}onValueChange_(){this.update_()}}class U0{constructor(a,h){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=h.value,this.viewProps=h.viewProps,this.view=new N0(a,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new ns(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(a,h){if(!a.point)return;const _=Dt(Kt(a.point.x,0,a.bounds.width),0,a.bounds.width,0,359),A=this.value.rawValue,[,z,Y,de]=A.getComponents("hsv");this.value.setRawValue(new rt([_,z,Y,de],"hsv"),h)}onPointerDown_(a){this.handlePointerEvent_(a.data,{forceEmit:!1,last:!1})}onPointerMove_(a){this.handlePointerEvent_(a.data,{forceEmit:!1,last:!1})}onPointerUp_(a){this.handlePointerEvent_(a.data,{forceEmit:!0,last:!0})}onKeyDown_(a){const h=wn(rs(!1),di(a));if(h===0)return;const _=this.value.rawValue,[A,z,Y,de]=_.getComponents("hsv");this.value.setRawValue(new rt([A+h,z,Y,de],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(a){wn(rs(!1),di(a))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const Il=y("svp"),Oh=64;class F0{constructor(a,h){this.onValueChange_=this.onValueChange_.bind(this),this.value=h.value,this.value.emitter.on("change",this.onValueChange_),this.element=a.createElement("div"),this.element.classList.add(Il()),h.viewProps.bindTabIndex(this.element);const _=a.createElement("canvas");_.height=Oh,_.width=Oh,_.classList.add(Il("c")),this.element.appendChild(_),this.canvasElement=_;const A=a.createElement("div");A.classList.add(Il("m")),this.element.appendChild(A),this.markerElem_=A,this.update_()}update_(){const a=Ae(this.canvasElement);if(!a)return;const _=this.value.rawValue.getComponents("hsv"),A=this.canvasElement.width,z=this.canvasElement.height,Y=a.getImageData(0,0,A,z),de=Y.data;for(let ht=0;ht<z;ht++)for(let pt=0;pt<A;pt++){const fi=Dt(pt,0,A,0,100),Qr=Dt(ht,0,z,100,0),Jr=ph(_[0],fi,Qr),Fs=(ht*A+pt)*4;de[Fs]=Jr[0],de[Fs+1]=Jr[1],de[Fs+2]=Jr[2],de[Fs+3]=255}a.putImageData(Y,0,0);const Fe=Dt(_[1],0,100,0,100);this.markerElem_.style.left=`${Fe}%`;const Ye=Dt(_[2],0,100,100,0);this.markerElem_.style.top=`${Ye}%`}onValueChange_(){this.update_()}}class O0{constructor(a,h){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=h.value,this.viewProps=h.viewProps,this.view=new F0(a,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new ns(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(a,h){if(!a.point)return;const _=Dt(a.point.x,0,a.bounds.width,0,100),A=Dt(a.point.y,0,a.bounds.height,100,0),[z,,,Y]=this.value.rawValue.getComponents("hsv");this.value.setRawValue(new rt([z,_,A,Y],"hsv"),h)}onPointerDown_(a){this.handlePointerEvent_(a.data,{forceEmit:!1,last:!1})}onPointerMove_(a){this.handlePointerEvent_(a.data,{forceEmit:!1,last:!1})}onPointerUp_(a){this.handlePointerEvent_(a.data,{forceEmit:!0,last:!0})}onKeyDown_(a){lh(a.key)&&a.preventDefault();const[h,_,A,z]=this.value.rawValue.getComponents("hsv"),Y=rs(!1),de=wn(Y,di(a)),Fe=wn(Y,qr(a));de===0&&Fe===0||this.value.setRawValue(new rt([h,_+de,A+Fe,z],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(a){const h=rs(!1),_=wn(h,di(a)),A=wn(h,qr(a));_===0&&A===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class B0{constructor(a,h){this.value=h.value,this.viewProps=h.viewProps,this.hPaletteC_=new U0(a,{value:this.value,viewProps:this.viewProps}),this.svPaletteC_=new O0(a,{value:this.value,viewProps:this.viewProps}),this.alphaIcs_=h.supportsAlpha?{palette:new C0(a,{value:this.value,viewProps:this.viewProps}),text:new Yr(a,{parser:hi,baseStep:.1,props:X.fromObject({draggingScale:.01,formatter:on(2)}),value:G(0,{constraint:new Yt({min:0,max:1})}),viewProps:this.viewProps})}:null,this.alphaIcs_&&jr({primary:this.value,secondary:this.alphaIcs_.text.value,forward:_=>_.rawValue.getComponents()[3],backward:(_,A)=>{const z=_.rawValue.getComponents();return z[3]=A.rawValue,new rt(z,_.rawValue.mode)}}),this.textC_=new D0(a,{colorType:h.colorType,parser:hi,value:this.value,viewProps:this.viewProps}),this.view=new h0(a,{alphaViews:this.alphaIcs_?{palette:this.alphaIcs_.palette.view,text:this.alphaIcs_.text.view}:null,hPaletteView:this.hPaletteC_.view,supportsAlpha:h.supportsAlpha,svPaletteView:this.svPaletteC_.view,textView:this.textC_.view})}get textController(){return this.textC_}}const Dl=y("colsw");class k0{constructor(a,h){this.onValueChange_=this.onValueChange_.bind(this),h.value.emitter.on("change",this.onValueChange_),this.value=h.value,this.element=a.createElement("div"),this.element.classList.add(Dl()),h.viewProps.bindClassModifiers(this.element);const _=a.createElement("div");_.classList.add(Dl("sw")),this.element.appendChild(_),this.swatchElem_=_;const A=a.createElement("button");A.classList.add(Dl("b")),h.viewProps.bindDisabled(A),this.element.appendChild(A),this.buttonElement=A,this.update_()}update_(){const a=this.value.rawValue;this.swatchElem_.style.backgroundColor=Cl(a)}onValueChange_(){this.update_()}}class V0{constructor(a,h){this.value=h.value,this.viewProps=h.viewProps,this.view=new k0(a,{value:this.value,viewProps:this.viewProps})}}class Nl{constructor(a,h){this.onButtonBlur_=this.onButtonBlur_.bind(this),this.onButtonClick_=this.onButtonClick_.bind(this),this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.value=h.value,this.viewProps=h.viewProps,this.foldable_=st.create(h.expanded),this.swatchC_=new V0(a,{value:this.value,viewProps:this.viewProps});const _=this.swatchC_.view.buttonElement;_.addEventListener("blur",this.onButtonBlur_),_.addEventListener("click",this.onButtonClick_),this.textC_=new ko(a,{parser:h.parser,props:X.fromObject({formatter:h.formatter}),value:this.value,viewProps:this.viewProps}),this.view=new n0(a,{foldable:this.foldable_,pickerLayout:h.pickerLayout}),this.view.swatchElement.appendChild(this.swatchC_.view.element),this.view.textElement.appendChild(this.textC_.view.element),this.popC_=h.pickerLayout==="popup"?new Qu(a,{viewProps:this.viewProps}):null;const A=new B0(a,{colorType:h.colorType,supportsAlpha:h.supportsAlpha,value:this.value,viewProps:this.viewProps});A.view.allFocusableElements.forEach(z=>{z.addEventListener("blur",this.onPopupChildBlur_),z.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=A,this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(A.view.element),jr({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:z=>z.rawValue,backward:(z,Y)=>Y.rawValue})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),Le(this.foldable_,this.view.pickerElement))}get textController(){return this.textC_}onButtonBlur_(a){if(!this.popC_)return;const h=this.view.element,_=a.relatedTarget;(!_||!h.contains(_))&&(this.popC_.shows.rawValue=!1)}onButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(a){if(!this.popC_)return;const h=this.popC_.view.element,_=re(a);_&&h.contains(_)||_&&_===this.swatchC_.view.buttonElement&&!St(h.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(a){this.popC_?a.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&a.key==="Escape"&&this.swatchC_.view.buttonElement.focus()}}function z0(p,a){return rt.isColorObject(p)?rt.fromObject(p,a):rt.black(a)}function H0(p){return ss(p.getComponents("rgb")).reduce((a,h)=>a<<8|Math.floor(h)&255,0)}function G0(p){return p.getComponents("rgb").reduce((a,h,_)=>{const A=Math.floor(_===3?h*255:h)&255;return a<<8|A},0)>>>0}function W0(p){return new rt([p>>16&255,p>>8&255,p&255],"rgb")}function X0(p){return new rt([p>>24&255,p>>16&255,p>>8&255,Dt(p&255,0,255,0,1)],"rgb")}function j0(p){return typeof p!="number"?rt.black():W0(p)}function q0(p){return typeof p!="number"?rt.black():X0(p)}function Y0(p){const a=Pl(p);return a?(h,_)=>{Kr(h,a(_))}:null}function K0(p){const a=p?G0:H0;return(h,_)=>{Kr(h,a(_))}}function $0(p,a,h){const _=a.toRgbaObject(h);p.writeProperty("r",_.r),p.writeProperty("g",_.g),p.writeProperty("b",_.b),p.writeProperty("a",_.a)}function Z0(p,a,h){const _=a.toRgbaObject(h);p.writeProperty("r",_.r),p.writeProperty("g",_.g),p.writeProperty("b",_.b)}function Q0(p,a){return(h,_)=>{p?$0(h,_,a):Z0(h,_,a)}}function Ul(p){var a;return!!((p==null?void 0:p.alpha)||((a=p==null?void 0:p.color)===null||a===void 0?void 0:a.alpha))}function J0(p){return p?a=>Cl(a,"0x"):a=>Dh(a,"0x")}function ev(p){return"color"in p||"view"in p&&p.view==="color"}const tv={id:"input-color-number",type:"input",accept:(p,a)=>{if(typeof p!="number"||!ev(a))return null;const h=Sl(a);return h?{initialValue:p,params:h}:null},binding:{reader:p=>Ul(p.params)?q0:j0,equals:rt.equals,writer:p=>K0(Ul(p.params))},controller:p=>{const a=Ul(p.params),h="expanded"in p.params?p.params.expanded:void 0,_="picker"in p.params?p.params.picker:void 0;return new Nl(p.document,{colorType:"int",expanded:h!=null?h:!1,formatter:J0(a),parser:Al("int"),pickerLayout:_!=null?_:"popup",supportsAlpha:a,value:p.value,viewProps:p.viewProps})}};function nv(p){return rt.isRgbaColorObject(p)}function iv(p){return a=>z0(a,p)}function sv(p,a){return h=>p?Fh(h,a):Uh(h,a)}const rv={id:"input-color-object",type:"input",accept:(p,a)=>{if(!rt.isColorObject(p))return null;const h=Sl(a);return h?{initialValue:p,params:h}:null},binding:{reader:p=>iv(os(p.params)),equals:rt.equals,writer:p=>Q0(nv(p.initialValue),os(p.params))},controller:p=>{var a;const h=rt.isRgbaColorObject(p.initialValue),_="expanded"in p.params?p.params.expanded:void 0,A="picker"in p.params?p.params.picker:void 0,z=(a=os(p.params))!==null&&a!==void 0?a:"int";return new Nl(p.document,{colorType:z,expanded:_!=null?_:!1,formatter:sv(h,z),parser:Al(z),pickerLayout:A!=null?A:"popup",supportsAlpha:h,value:p.value,viewProps:p.viewProps})}},ov={id:"input-color-string",type:"input",accept:(p,a)=>{if(typeof p!="string"||"view"in a&&a.view==="text")return null;const h=Tl(p,os(a));if(!h||!Pl(h))return null;const A=Sl(a);return A?{initialValue:p,params:A}:null},binding:{reader:p=>{var a;return x0((a=os(p.params))!==null&&a!==void 0?a:"int")},equals:rt.equals,writer:p=>{const a=Tl(p.initialValue,os(p.params));if(!a)throw b.shouldNeverHappen();const h=Y0(a);if(!h)throw b.notBindable();return h}},controller:p=>{const a=Tl(p.initialValue,os(p.params));if(!a)throw b.shouldNeverHappen();const h=Pl(a);if(!h)throw b.shouldNeverHappen();const _="expanded"in p.params?p.params.expanded:void 0,A="picker"in p.params?p.params.picker:void 0;return new Nl(p.document,{colorType:a.type,expanded:_!=null?_:!1,formatter:h,parser:Al(a.type),pickerLayout:A!=null?A:"popup",supportsAlpha:a.alpha,value:p.value,viewProps:p.viewProps})}};class Ni{constructor(a){this.components=a.components,this.asm_=a.assembly}constrain(a){const h=this.asm_.toComponents(a).map((_,A)=>{var z,Y;return(Y=(z=this.components[A])===null||z===void 0?void 0:z.constrain(_))!==null&&Y!==void 0?Y:_});return this.asm_.fromComponents(h)}}const Bh=y("pndtxt");class av{constructor(a,h){this.textViews=h.textViews,this.element=a.createElement("div"),this.element.classList.add(Bh()),this.textViews.forEach(_=>{const A=a.createElement("div");A.classList.add(Bh("a")),A.appendChild(_.element),this.element.appendChild(A)})}}function lv(p,a,h){return new Yr(p,{arrayPosition:h===0?"fst":h===a.axes.length-1?"lst":"mid",baseStep:a.axes[h].baseStep,parser:a.parser,props:a.axes[h].textProps,value:G(0,{constraint:a.axes[h].constraint}),viewProps:a.viewProps})}class Fl{constructor(a,h){this.value=h.value,this.viewProps=h.viewProps,this.acs_=h.axes.map((_,A)=>lv(a,h,A)),this.acs_.forEach((_,A)=>{jr({primary:this.value,secondary:_.value,forward:z=>h.assembly.toComponents(z.rawValue)[A],backward:(z,Y)=>{const de=h.assembly.toComponents(z.rawValue);return de[A]=Y.rawValue,h.assembly.fromComponents(de)}})}),this.view=new av(a,{textViews:this.acs_.map(_=>_.view)})}}function kh(p,a){return"step"in p&&!f(p.step)?new Li(p.step,a):null}function Vh(p){return"max"in p&&!f(p.max)||"min"in p&&!f(p.min)?new Yt({max:p.max,min:p.min}):null}function cv(p,a){const h=[],_=kh(p,a);_&&h.push(_);const A=Vh(p);A&&h.push(A);const z=Ml(p.options);return z&&h.push(z),new Bt(h)}function uv(p){const a=p?en(p,Yt):null;return a?[a.minValue,a.maxValue]:[void 0,void 0]}function hv(p){const[a,h]=uv(p);return[a!=null?a:0,h!=null?h:100]}const dv={id:"input-number",type:"input",accept:(p,a)=>{if(typeof p!="number")return null;const h=he,_=q(a,{format:h.optional.function,max:h.optional.number,min:h.optional.number,options:h.optional.custom(zo),step:h.optional.number});return _?{initialValue:p,params:_}:null},binding:{reader:p=>rh,constraint:p=>cv(p.params,p.initialValue),writer:p=>Kr},controller:p=>{var a,h;const _=p.value,A=p.constraint;if(A&&en(A,ui))return new Gr(p.document,{props:X.fromObject({options:(a=El(A))!==null&&a!==void 0?a:[]}),value:_,viewProps:p.viewProps});const z=(h="format"in p.params?p.params.format:void 0)!==null&&h!==void 0?h:on(Ho(A,_.rawValue));if(A&&en(A,Yt)){const[Y,de]=hv(A);return new wl(p.document,{baseStep:Rs(A),parser:hi,sliderProps:X.fromObject({maxValue:de,minValue:Y}),textProps:X.fromObject({draggingScale:Ls(A,_.rawValue),formatter:z}),value:_,viewProps:p.viewProps})}return new Yr(p.document,{baseStep:Rs(A),parser:hi,props:X.fromObject({draggingScale:Ls(A,_.rawValue),formatter:z}),value:_,viewProps:p.viewProps})}};class Ui{constructor(a=0,h=0){this.x=a,this.y=h}getComponents(){return[this.x,this.y]}static isObject(a){if(f(a))return!1;const h=a.x,_=a.y;return!(typeof h!="number"||typeof _!="number")}static equals(a,h){return a.x===h.x&&a.y===h.y}toObject(){return{x:this.x,y:this.y}}}const zh={toComponents:p=>p.getComponents(),fromComponents:p=>new Ui(...p)},Ds=y("p2d");class pv{constructor(a,h){this.element=a.createElement("div"),this.element.classList.add(Ds()),h.viewProps.bindClassModifiers(this.element),P(h.expanded,B(this.element,Ds(void 0,"expanded")));const _=a.createElement("div");_.classList.add(Ds("h")),this.element.appendChild(_);const A=a.createElement("button");A.classList.add(Ds("b")),A.appendChild(Ve(a,"p2dpad")),h.viewProps.bindDisabled(A),_.appendChild(A),this.buttonElement=A;const z=a.createElement("div");if(z.classList.add(Ds("t")),_.appendChild(z),this.textElement=z,h.pickerLayout==="inline"){const Y=a.createElement("div");Y.classList.add(Ds("p")),this.element.appendChild(Y),this.pickerElement=Y}else this.pickerElement=null}}const Fi=y("p2dp");class fv{constructor(a,h){this.onFoldableChange_=this.onFoldableChange_.bind(this),this.onValueChange_=this.onValueChange_.bind(this),this.invertsY_=h.invertsY,this.maxValue_=h.maxValue,this.element=a.createElement("div"),this.element.classList.add(Fi()),h.layout==="popup"&&this.element.classList.add(Fi(void 0,"p"));const _=a.createElement("div");_.classList.add(Fi("p")),h.viewProps.bindTabIndex(_),this.element.appendChild(_),this.padElement=_;const A=a.createElementNS(Ue,"svg");A.classList.add(Fi("g")),this.padElement.appendChild(A),this.svgElem_=A;const z=a.createElementNS(Ue,"line");z.classList.add(Fi("ax")),z.setAttributeNS(null,"x1","0"),z.setAttributeNS(null,"y1","50%"),z.setAttributeNS(null,"x2","100%"),z.setAttributeNS(null,"y2","50%"),this.svgElem_.appendChild(z);const Y=a.createElementNS(Ue,"line");Y.classList.add(Fi("ax")),Y.setAttributeNS(null,"x1","50%"),Y.setAttributeNS(null,"y1","0"),Y.setAttributeNS(null,"x2","50%"),Y.setAttributeNS(null,"y2","100%"),this.svgElem_.appendChild(Y);const de=a.createElementNS(Ue,"line");de.classList.add(Fi("l")),de.setAttributeNS(null,"x1","50%"),de.setAttributeNS(null,"y1","50%"),this.svgElem_.appendChild(de),this.lineElem_=de;const Fe=a.createElement("div");Fe.classList.add(Fi("m")),this.padElement.appendChild(Fe),this.markerElem_=Fe,h.value.emitter.on("change",this.onValueChange_),this.value=h.value,this.update_()}get allFocusableElements(){return[this.padElement]}update_(){const[a,h]=this.value.rawValue.getComponents(),_=this.maxValue_,A=Dt(a,-_,+_,0,100),z=Dt(h,-_,+_,0,100),Y=this.invertsY_?100-z:z;this.lineElem_.setAttributeNS(null,"x2",`${A}%`),this.lineElem_.setAttributeNS(null,"y2",`${Y}%`),this.markerElem_.style.left=`${A}%`,this.markerElem_.style.top=`${Y}%`}onValueChange_(){this.update_()}onFoldableChange_(){this.update_()}}function Hh(p,a,h){return[wn(a[0],di(p)),wn(a[1],qr(p))*(h?1:-1)]}class mv{constructor(a,h){this.onPadKeyDown_=this.onPadKeyDown_.bind(this),this.onPadKeyUp_=this.onPadKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=h.value,this.viewProps=h.viewProps,this.baseSteps_=h.baseSteps,this.maxValue_=h.maxValue,this.invertsY_=h.invertsY,this.view=new fv(a,{invertsY:this.invertsY_,layout:h.layout,maxValue:this.maxValue_,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new ns(this.view.padElement),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.padElement.addEventListener("keydown",this.onPadKeyDown_),this.view.padElement.addEventListener("keyup",this.onPadKeyUp_)}handlePointerEvent_(a,h){if(!a.point)return;const _=this.maxValue_,A=Dt(a.point.x,0,a.bounds.width,-_,+_),z=Dt(this.invertsY_?a.bounds.height-a.point.y:a.point.y,0,a.bounds.height,-_,+_);this.value.setRawValue(new Ui(A,z),h)}onPointerDown_(a){this.handlePointerEvent_(a.data,{forceEmit:!1,last:!1})}onPointerMove_(a){this.handlePointerEvent_(a.data,{forceEmit:!1,last:!1})}onPointerUp_(a){this.handlePointerEvent_(a.data,{forceEmit:!0,last:!0})}onPadKeyDown_(a){lh(a.key)&&a.preventDefault();const[h,_]=Hh(a,this.baseSteps_,this.invertsY_);h===0&&_===0||this.value.setRawValue(new Ui(this.value.rawValue.x+h,this.value.rawValue.y+_),{forceEmit:!1,last:!1})}onPadKeyUp_(a){const[h,_]=Hh(a,this.baseSteps_,this.invertsY_);h===0&&_===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class gv{constructor(a,h){var _,A;this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.onPadButtonBlur_=this.onPadButtonBlur_.bind(this),this.onPadButtonClick_=this.onPadButtonClick_.bind(this),this.value=h.value,this.viewProps=h.viewProps,this.foldable_=st.create(h.expanded),this.popC_=h.pickerLayout==="popup"?new Qu(a,{viewProps:this.viewProps}):null;const z=new mv(a,{baseSteps:[h.axes[0].baseStep,h.axes[1].baseStep],invertsY:h.invertsY,layout:h.pickerLayout,maxValue:h.maxValue,value:this.value,viewProps:this.viewProps});z.view.allFocusableElements.forEach(Y=>{Y.addEventListener("blur",this.onPopupChildBlur_),Y.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=z,this.textC_=new Fl(a,{assembly:zh,axes:h.axes,parser:h.parser,value:this.value,viewProps:this.viewProps}),this.view=new pv(a,{expanded:this.foldable_.value("expanded"),pickerLayout:h.pickerLayout,viewProps:this.viewProps}),this.view.textElement.appendChild(this.textC_.view.element),(_=this.view.buttonElement)===null||_===void 0||_.addEventListener("blur",this.onPadButtonBlur_),(A=this.view.buttonElement)===null||A===void 0||A.addEventListener("click",this.onPadButtonClick_),this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(this.pickerC_.view.element),jr({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:Y=>Y.rawValue,backward:(Y,de)=>de.rawValue})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),Le(this.foldable_,this.view.pickerElement))}onPadButtonBlur_(a){if(!this.popC_)return;const h=this.view.element,_=a.relatedTarget;(!_||!h.contains(_))&&(this.popC_.shows.rawValue=!1)}onPadButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(a){if(!this.popC_)return;const h=this.popC_.view.element,_=re(a);_&&h.contains(_)||_&&_===this.view.buttonElement&&!St(h.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(a){this.popC_?a.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&a.key==="Escape"&&this.view.buttonElement.focus()}}function vv(p){return Ui.isObject(p)?new Ui(p.x,p.y):new Ui}function _v(p,a){p.writeProperty("x",a.x),p.writeProperty("y",a.y)}function pi(p,a){if(!p)return;const h=[],_=kh(p,a);_&&h.push(_);const A=Vh(p);return A&&h.push(A),new Bt(h)}function xv(p,a){return new Ni({assembly:zh,components:[pi("x"in p?p.x:void 0,a.x),pi("y"in p?p.y:void 0,a.y)]})}function Gh(p,a){var h,_;const A=p&&en(p,Yt);if(A)return Math.max(Math.abs((h=A.minValue)!==null&&h!==void 0?h:0),Math.abs((_=A.maxValue)!==null&&_!==void 0?_:0));const z=Rs(p);return Math.max(Math.abs(z)*10,Math.abs(a)*10)}function bv(p,a){const h=a instanceof Ni?a.components[0]:void 0,_=a instanceof Ni?a.components[1]:void 0,A=Gh(h,p.x),z=Gh(_,p.y);return Math.max(A,z)}function Wh(p,a){return{baseStep:Rs(a),constraint:a,textProps:X.fromObject({draggingScale:Ls(a,p),formatter:on(Ho(a,p))})}}function yv(p){if(!("y"in p))return!1;const a=p.y;return a&&"inverted"in a?!!a.inverted:!1}const wv={id:"input-point2d",type:"input",accept:(p,a)=>{if(!Ui.isObject(p))return null;const h=he,_=q(a,{expanded:h.optional.boolean,picker:h.optional.custom(hh),x:h.optional.custom(Ii),y:h.optional.object({inverted:h.optional.boolean,max:h.optional.number,min:h.optional.number,step:h.optional.number})});return _?{initialValue:p,params:_}:null},binding:{reader:p=>vv,constraint:p=>xv(p.params,p.initialValue),equals:Ui.equals,writer:p=>_v},controller:p=>{const a=p.document,h=p.value,_=p.constraint;if(!(_ instanceof Ni))throw b.shouldNeverHappen();const A="expanded"in p.params?p.params.expanded:void 0,z="picker"in p.params?p.params.picker:void 0;return new gv(a,{axes:[Wh(h.rawValue.x,_.components[0]),Wh(h.rawValue.y,_.components[1])],expanded:A!=null?A:!1,invertsY:yv(p.params),maxValue:bv(h.rawValue,_),parser:hi,pickerLayout:z!=null?z:"popup",value:h,viewProps:p.viewProps})}};class Ns{constructor(a=0,h=0,_=0){this.x=a,this.y=h,this.z=_}getComponents(){return[this.x,this.y,this.z]}static isObject(a){if(f(a))return!1;const h=a.x,_=a.y,A=a.z;return!(typeof h!="number"||typeof _!="number"||typeof A!="number")}static equals(a,h){return a.x===h.x&&a.y===h.y&&a.z===h.z}toObject(){return{x:this.x,y:this.y,z:this.z}}}const Xh={toComponents:p=>p.getComponents(),fromComponents:p=>new Ns(...p)};function Mv(p){return Ns.isObject(p)?new Ns(p.x,p.y,p.z):new Ns}function Ev(p,a){p.writeProperty("x",a.x),p.writeProperty("y",a.y),p.writeProperty("z",a.z)}function Sv(p,a){return new Ni({assembly:Xh,components:[pi("x"in p?p.x:void 0,a.x),pi("y"in p?p.y:void 0,a.y),pi("z"in p?p.z:void 0,a.z)]})}function Ol(p,a){return{baseStep:Rs(a),constraint:a,textProps:X.fromObject({draggingScale:Ls(a,p),formatter:on(Ho(a,p))})}}const Tv={id:"input-point3d",type:"input",accept:(p,a)=>{if(!Ns.isObject(p))return null;const h=he,_=q(a,{x:h.optional.custom(Ii),y:h.optional.custom(Ii),z:h.optional.custom(Ii)});return _?{initialValue:p,params:_}:null},binding:{reader:p=>Mv,constraint:p=>Sv(p.params,p.initialValue),equals:Ns.equals,writer:p=>Ev},controller:p=>{const a=p.value,h=p.constraint;if(!(h instanceof Ni))throw b.shouldNeverHappen();return new Fl(p.document,{assembly:Xh,axes:[Ol(a.rawValue.x,h.components[0]),Ol(a.rawValue.y,h.components[1]),Ol(a.rawValue.z,h.components[2])],parser:hi,value:a,viewProps:p.viewProps})}};class Us{constructor(a=0,h=0,_=0,A=0){this.x=a,this.y=h,this.z=_,this.w=A}getComponents(){return[this.x,this.y,this.z,this.w]}static isObject(a){if(f(a))return!1;const h=a.x,_=a.y,A=a.z,z=a.w;return!(typeof h!="number"||typeof _!="number"||typeof A!="number"||typeof z!="number")}static equals(a,h){return a.x===h.x&&a.y===h.y&&a.z===h.z&&a.w===h.w}toObject(){return{x:this.x,y:this.y,z:this.z,w:this.w}}}const jh={toComponents:p=>p.getComponents(),fromComponents:p=>new Us(...p)};function Av(p){return Us.isObject(p)?new Us(p.x,p.y,p.z,p.w):new Us}function Cv(p,a){p.writeProperty("x",a.x),p.writeProperty("y",a.y),p.writeProperty("z",a.z),p.writeProperty("w",a.w)}function Pv(p,a){return new Ni({assembly:jh,components:[pi("x"in p?p.x:void 0,a.x),pi("y"in p?p.y:void 0,a.y),pi("z"in p?p.z:void 0,a.z),pi("w"in p?p.w:void 0,a.w)]})}function Rv(p,a){return{baseStep:Rs(a),constraint:a,textProps:X.fromObject({draggingScale:Ls(a,p),formatter:on(Ho(a,p))})}}const Lv={id:"input-point4d",type:"input",accept:(p,a)=>{if(!Us.isObject(p))return null;const h=he,_=q(a,{x:h.optional.custom(Ii),y:h.optional.custom(Ii),z:h.optional.custom(Ii),w:h.optional.custom(Ii)});return _?{initialValue:p,params:_}:null},binding:{reader:p=>Av,constraint:p=>Pv(p.params,p.initialValue),equals:Us.equals,writer:p=>Cv},controller:p=>{const a=p.value,h=p.constraint;if(!(h instanceof Ni))throw b.shouldNeverHappen();return new Fl(p.document,{assembly:jh,axes:a.rawValue.getComponents().map((_,A)=>Rv(_,h.components[A])),parser:hi,value:a,viewProps:p.viewProps})}};function Iv(p){const a=[],h=Ml(p.options);return h&&a.push(h),new Bt(a)}const Dv={id:"input-string",type:"input",accept:(p,a)=>{if(typeof p!="string")return null;const _=q(a,{options:he.optional.custom(zo)});return _?{initialValue:p,params:_}:null},binding:{reader:p=>oh,constraint:p=>Iv(p.params),writer:p=>Kr},controller:p=>{var a;const h=p.document,_=p.value,A=p.constraint;return A&&en(A,ui)?new Gr(h,{props:X.fromObject({options:(a=El(A))!==null&&a!==void 0?a:[]}),value:_,viewProps:p.viewProps}):new ko(h,{parser:z=>z,props:X.fromObject({formatter:_l}),value:_,viewProps:p.viewProps})}},Zr={monitor:{defaultInterval:200,defaultLineCount:3}},qh=y("mll");class Nv{constructor(a,h){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=h.formatter,this.element=a.createElement("div"),this.element.classList.add(qh()),h.viewProps.bindClassModifiers(this.element);const _=a.createElement("textarea");_.classList.add(qh("i")),_.style.height=`calc(var(--bld-us) * ${h.lineCount})`,_.readOnly=!0,h.viewProps.bindDisabled(_),this.element.appendChild(_),this.textareaElem_=_,h.value.emitter.on("change",this.onValueUpdate_),this.value=h.value,this.update_()}update_(){const a=this.textareaElem_,h=a.scrollTop===a.scrollHeight-a.clientHeight,_=[];this.value.rawValue.forEach(A=>{A!==void 0&&_.push(this.formatter_(A))}),a.textContent=_.join(`
`),h&&(a.scrollTop=a.scrollHeight)}onValueUpdate_(){this.update_()}}class Bl{constructor(a,h){this.value=h.value,this.viewProps=h.viewProps,this.view=new Nv(a,{formatter:h.formatter,lineCount:h.lineCount,value:this.value,viewProps:this.viewProps})}}const Yh=y("sgl");class Uv{constructor(a,h){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=h.formatter,this.element=a.createElement("div"),this.element.classList.add(Yh()),h.viewProps.bindClassModifiers(this.element);const _=a.createElement("input");_.classList.add(Yh("i")),_.readOnly=!0,_.type="text",h.viewProps.bindDisabled(_),this.element.appendChild(_),this.inputElement=_,h.value.emitter.on("change",this.onValueUpdate_),this.value=h.value,this.update_()}update_(){const a=this.value.rawValue,h=a[a.length-1];this.inputElement.value=h!==void 0?this.formatter_(h):""}onValueUpdate_(){this.update_()}}class kl{constructor(a,h){this.value=h.value,this.viewProps=h.viewProps,this.view=new Uv(a,{formatter:h.formatter,value:this.value,viewProps:this.viewProps})}}const Fv={id:"monitor-bool",type:"monitor",accept:(p,a)=>{if(typeof p!="boolean")return null;const _=q(a,{lineCount:he.optional.number});return _?{initialValue:p,params:_}:null},binding:{reader:p=>eh},controller:p=>{var a;return p.value.rawValue.length===1?new kl(p.document,{formatter:th,value:p.value,viewProps:p.viewProps}):new Bl(p.document,{formatter:th,lineCount:(a=p.params.lineCount)!==null&&a!==void 0?a:Zr.monitor.defaultLineCount,value:p.value,viewProps:p.viewProps})}},Oi=y("grl");class Ov{constructor(a,h){this.onCursorChange_=this.onCursorChange_.bind(this),this.onValueUpdate_=this.onValueUpdate_.bind(this),this.element=a.createElement("div"),this.element.classList.add(Oi()),h.viewProps.bindClassModifiers(this.element),this.formatter_=h.formatter,this.props_=h.props,this.cursor_=h.cursor,this.cursor_.emitter.on("change",this.onCursorChange_);const _=a.createElementNS(Ue,"svg");_.classList.add(Oi("g")),_.style.height=`calc(var(--bld-us) * ${h.lineCount})`,this.element.appendChild(_),this.svgElem_=_;const A=a.createElementNS(Ue,"polyline");this.svgElem_.appendChild(A),this.lineElem_=A;const z=a.createElement("div");z.classList.add(Oi("t"),y("tt")()),this.element.appendChild(z),this.tooltipElem_=z,h.value.emitter.on("change",this.onValueUpdate_),this.value=h.value,this.update_()}get graphElement(){return this.svgElem_}update_(){const a=this.svgElem_.getBoundingClientRect(),h=this.value.rawValue.length-1,_=this.props_.get("minValue"),A=this.props_.get("maxValue"),z=[];this.value.rawValue.forEach((ht,pt)=>{if(ht===void 0)return;const fi=Dt(pt,0,h,0,a.width),Qr=Dt(ht,_,A,a.height,0);z.push([fi,Qr].join(","))}),this.lineElem_.setAttributeNS(null,"points",z.join(" "));const Y=this.tooltipElem_,de=this.value.rawValue[this.cursor_.rawValue];if(de===void 0){Y.classList.remove(Oi("t","a"));return}const Fe=Dt(this.cursor_.rawValue,0,h,0,a.width),Ye=Dt(de,_,A,a.height,0);Y.style.left=`${Fe}px`,Y.style.top=`${Ye}px`,Y.textContent=`${this.formatter_(de)}`,Y.classList.contains(Oi("t","a"))||(Y.classList.add(Oi("t","a"),Oi("t","in")),Ne(Y),Y.classList.remove(Oi("t","in")))}onValueUpdate_(){this.update_()}onCursorChange_(){this.update_()}}class Bv{constructor(a,h){if(this.onGraphMouseMove_=this.onGraphMouseMove_.bind(this),this.onGraphMouseLeave_=this.onGraphMouseLeave_.bind(this),this.onGraphPointerDown_=this.onGraphPointerDown_.bind(this),this.onGraphPointerMove_=this.onGraphPointerMove_.bind(this),this.onGraphPointerUp_=this.onGraphPointerUp_.bind(this),this.props_=h.props,this.value=h.value,this.viewProps=h.viewProps,this.cursor_=G(-1),this.view=new Ov(a,{cursor:this.cursor_,formatter:h.formatter,lineCount:h.lineCount,props:this.props_,value:this.value,viewProps:this.viewProps}),!St(a))this.view.element.addEventListener("mousemove",this.onGraphMouseMove_),this.view.element.addEventListener("mouseleave",this.onGraphMouseLeave_);else{const _=new ns(this.view.element);_.emitter.on("down",this.onGraphPointerDown_),_.emitter.on("move",this.onGraphPointerMove_),_.emitter.on("up",this.onGraphPointerUp_)}}onGraphMouseLeave_(){this.cursor_.rawValue=-1}onGraphMouseMove_(a){const h=this.view.element.getBoundingClientRect();this.cursor_.rawValue=Math.floor(Dt(a.offsetX,0,h.width,0,this.value.rawValue.length))}onGraphPointerDown_(a){this.onGraphPointerMove_(a)}onGraphPointerMove_(a){if(!a.data.point){this.cursor_.rawValue=-1;return}this.cursor_.rawValue=Math.floor(Dt(a.data.point.x,0,a.data.bounds.width,0,this.value.rawValue.length))}onGraphPointerUp_(){this.cursor_.rawValue=-1}}function Vl(p){return"format"in p&&!f(p.format)?p.format:on(2)}function kv(p){var a;return p.value.rawValue.length===1?new kl(p.document,{formatter:Vl(p.params),value:p.value,viewProps:p.viewProps}):new Bl(p.document,{formatter:Vl(p.params),lineCount:(a=p.params.lineCount)!==null&&a!==void 0?a:Zr.monitor.defaultLineCount,value:p.value,viewProps:p.viewProps})}function Vv(p){var a,h,_;return new Bv(p.document,{formatter:Vl(p.params),lineCount:(a=p.params.lineCount)!==null&&a!==void 0?a:Zr.monitor.defaultLineCount,props:X.fromObject({maxValue:(h="max"in p.params?p.params.max:null)!==null&&h!==void 0?h:100,minValue:(_="min"in p.params?p.params.min:null)!==null&&_!==void 0?_:0}),value:p.value,viewProps:p.viewProps})}function Kh(p){return"view"in p&&p.view==="graph"}const zv={id:"monitor-number",type:"monitor",accept:(p,a)=>{if(typeof p!="number")return null;const h=he,_=q(a,{format:h.optional.function,lineCount:h.optional.number,max:h.optional.number,min:h.optional.number,view:h.optional.string});return _?{initialValue:p,params:_}:null},binding:{defaultBufferSize:p=>Kh(p)?64:1,reader:p=>rh},controller:p=>Kh(p.params)?Vv(p):kv(p)},Hv={id:"monitor-string",type:"monitor",accept:(p,a)=>{if(typeof p!="string")return null;const h=he,_=q(a,{lineCount:h.optional.number,multiline:h.optional.boolean});return _?{initialValue:p,params:_}:null},binding:{reader:p=>oh},controller:p=>{var a;const h=p.value;return h.rawValue.length>1||"multiline"in p.params&&p.params.multiline?new Bl(p.document,{formatter:_l,lineCount:(a=p.params.lineCount)!==null&&a!==void 0?a:Zr.monitor.defaultLineCount,value:h,viewProps:p.viewProps}):new kl(p.document,{formatter:_l,value:h,viewProps:p.viewProps})}};class Gv{constructor(a){this.onValueChange_=this.onValueChange_.bind(this),this.reader=a.reader,this.writer=a.writer,this.emitter=new v,this.value=a.value,this.value.emitter.on("change",this.onValueChange_),this.target=a.target,this.read()}read(){const a=this.target.read();a!==void 0&&(this.value.rawValue=this.reader(a))}write_(a){this.writer(this.target,a)}onValueChange_(a){this.write_(a.rawValue),this.emitter.emit("change",{options:a.options,rawValue:a.rawValue,sender:this})}}function Wv(p,a){const h=p.accept(a.target.read(),a.params);if(f(h))return null;const _=he,A={target:a.target,initialValue:h.initialValue,params:h.params},z=p.binding.reader(A),Y=p.binding.constraint?p.binding.constraint(A):void 0,de=G(z(h.initialValue),{constraint:Y,equals:p.binding.equals}),Fe=new Gv({reader:z,target:a.target,value:de,writer:p.binding.writer(A)}),Ye=_.optional.boolean(a.params.disabled).value,ht=_.optional.boolean(a.params.hidden).value,pt=p.controller({constraint:Y,document:a.document,initialValue:h.initialValue,params:h.params,value:Fe.value,viewProps:Be.create({disabled:Ye,hidden:ht})}),fi=_.optional.string(a.params.label).value;return new oe(a.document,{binding:Fe,blade:ae(),props:X.fromObject({label:fi!=null?fi:a.target.key}),valueController:pt})}class Xv{constructor(a){this.onTick_=this.onTick_.bind(this),this.reader_=a.reader,this.target=a.target,this.emitter=new v,this.value=a.value,this.ticker=a.ticker,this.ticker.emitter.on("tick",this.onTick_),this.read()}dispose(){this.ticker.dispose()}read(){const a=this.target.read();if(a===void 0)return;const h=this.value.rawValue,_=this.reader_(a);this.value.rawValue=Xg(h,_),this.emitter.emit("update",{rawValue:_,sender:this})}onTick_(a){this.read()}}function jv(p,a){return a===0?new ts:new zr(p,a!=null?a:Zr.monitor.defaultInterval)}function qv(p,a){var h,_,A;const z=he,Y=p.accept(a.target.read(),a.params);if(f(Y))return null;const de={target:a.target,initialValue:Y.initialValue,params:Y.params},Fe=p.binding.reader(de),Ye=(_=(h=z.optional.number(a.params.bufferSize).value)!==null&&h!==void 0?h:p.binding.defaultBufferSize&&p.binding.defaultBufferSize(Y.params))!==null&&_!==void 0?_:1,ht=z.optional.number(a.params.interval).value,pt=new Xv({reader:Fe,target:a.target,ticker:jv(a.document,ht),value:Gg(Ye)}),fi=z.optional.boolean(a.params.disabled).value,Qr=z.optional.boolean(a.params.hidden).value,Jr=p.controller({document:a.document,params:Y.params,value:pt.value,viewProps:Be.create({disabled:fi,hidden:Qr})}),Fs=(A=z.optional.string(a.params.label).value)!==null&&A!==void 0?A:a.target.key;return new Se(a.document,{binding:pt,blade:ae(),props:X.fromObject({label:Fs}),valueController:Jr})}class Yv{constructor(){this.pluginsMap_={blades:[],inputs:[],monitors:[]}}getAll(){return[...this.pluginsMap_.blades,...this.pluginsMap_.inputs,...this.pluginsMap_.monitors]}register(a){a.type==="blade"?this.pluginsMap_.blades.unshift(a):a.type==="input"?this.pluginsMap_.inputs.unshift(a):a.type==="monitor"&&this.pluginsMap_.monitors.unshift(a)}createInput(a,h,_){const A=h.read();if(f(A))throw new b({context:{key:h.key},type:"nomatchingcontroller"});const z=this.pluginsMap_.inputs.reduce((Y,de)=>Y!=null?Y:Wv(de,{document:a,target:h,params:_}),null);if(z)return z;throw new b({context:{key:h.key},type:"nomatchingcontroller"})}createMonitor(a,h,_){const A=this.pluginsMap_.monitors.reduce((z,Y)=>z!=null?z:qv(Y,{document:a,params:_,target:h}),null);if(A)return A;throw new b({context:{key:h.key},type:"nomatchingcontroller"})}createBlade(a,h){const _=this.pluginsMap_.blades.reduce((A,z)=>A!=null?A:Oo(z,{document:a,params:h}),null);if(!_)throw new b({type:"nomatchingview",context:{params:h}});return _}createBladeApi(a){if(a instanceof oe)return new O(a);if(a instanceof Se)return new le(a);if(a instanceof Ri)return new ut(a,this);const h=this.pluginsMap_.blades.reduce((_,A)=>_!=null?_:A.api({controller:a,pool:this}),null);if(!h)throw b.shouldNeverHappen();return h}}function Kv(){const p=new Yv;return[wv,Tv,Lv,Dv,dv,ov,rv,tv,t0,Fv,Hv,zv,ze,ml,Ee,ei].forEach(a=>{p.register(a)}),p}class $h extends i{constructor(a){super(a),this.emitter_=new v,this.controller_.valueController.value.emitter.on("change",h=>{this.emitter_.emit("change",{event:new o(this,h.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(a){this.controller_.props.set("label",a)}get options(){return this.controller_.valueController.props.get("options")}set options(a){this.controller_.valueController.props.set("options",a)}get value(){return this.controller_.valueController.value.rawValue}set value(a){this.controller_.valueController.value.rawValue=a}on(a,h){const _=h.bind(this);return this.emitter_.on(a,A=>{_(A.event)}),this}}class Zh extends i{constructor(a){super(a),this.emitter_=new v,this.controller_.valueController.value.emitter.on("change",h=>{this.emitter_.emit("change",{event:new o(this,h.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(a){this.controller_.props.set("label",a)}get maxValue(){return this.controller_.valueController.sliderController.props.get("maxValue")}set maxValue(a){this.controller_.valueController.sliderController.props.set("maxValue",a)}get minValue(){return this.controller_.valueController.sliderController.props.get("minValue")}set minValue(a){this.controller_.valueController.sliderController.props.set("minValue",a)}get value(){return this.controller_.valueController.value.rawValue}set value(a){this.controller_.valueController.value.rawValue=a}on(a,h){const _=h.bind(this);return this.emitter_.on(a,A=>{_(A.event)}),this}}class Qh extends i{constructor(a){super(a),this.emitter_=new v,this.controller_.valueController.value.emitter.on("change",h=>{this.emitter_.emit("change",{event:new o(this,h.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(a){this.controller_.props.set("label",a)}get formatter(){return this.controller_.valueController.props.get("formatter")}set formatter(a){this.controller_.valueController.props.set("formatter",a)}get value(){return this.controller_.valueController.value.rawValue}set value(a){this.controller_.valueController.value.rawValue=a}on(a,h){const _=h.bind(this);return this.emitter_.on(a,A=>{_(A.event)}),this}}const $v=function(){return{id:"list",type:"blade",accept(p){const a=he,h=q(p,{options:a.required.custom(zo),value:a.required.raw,view:a.required.constant("list"),label:a.optional.string});return h?{params:h}:null},controller(p){const a=new Gr(p.document,{props:X.fromObject({options:dh(p.params.options)}),value:G(p.params.value),viewProps:p.viewProps});return new N(p.document,{blade:p.blade,props:X.fromObject({label:p.params.label}),valueController:a})},api(p){return!(p.controller instanceof N)||!(p.controller.valueController instanceof Gr)?null:new $h(p.controller)}}}();function Zv(p){return p.reduce((a,h)=>Object.assign(a,{[h.presetKey]:h.read()}),{})}function Qv(p,a){p.forEach(h=>{const _=a[h.presetKey];_!==void 0&&h.write(_)})}class Jv extends kt{constructor(a,h){super(a,h)}get element(){return this.controller_.view.element}importPreset(a){const h=this.controller_.rackController.rack.find(oe).map(_=>_.binding.target);Qv(h,a),this.refresh()}exportPreset(){const a=this.controller_.rackController.rack.find(oe).map(h=>h.binding.target);return Zv(a)}refresh(){this.controller_.rackController.rack.find(oe).forEach(a=>{a.binding.read()}),this.controller_.rackController.rack.find(Se).forEach(a=>{a.binding.read()})}}class e_ extends kr{constructor(a,h){super(a,{expanded:h.expanded,blade:h.blade,props:h.props,root:!0,viewProps:h.viewProps})}}const t_={id:"slider",type:"blade",accept(p){const a=he,h=q(p,{max:a.required.number,min:a.required.number,view:a.required.constant("slider"),format:a.optional.function,label:a.optional.string,value:a.optional.number});return h?{params:h}:null},controller(p){var a,h;const _=(a=p.params.value)!==null&&a!==void 0?a:0,A=new wl(p.document,{baseStep:1,parser:hi,sliderProps:X.fromObject({maxValue:p.params.max,minValue:p.params.min}),textProps:X.fromObject({draggingScale:Ls(void 0,_),formatter:(h=p.params.format)!==null&&h!==void 0?h:zg}),value:G(_),viewProps:p.viewProps});return new N(p.document,{blade:p.blade,props:X.fromObject({label:p.params.label}),valueController:A})},api(p){return!(p.controller instanceof N)||!(p.controller.valueController instanceof wl)?null:new Zh(p.controller)}},n_=function(){return{id:"text",type:"blade",accept(p){const a=he,h=q(p,{parse:a.required.function,value:a.required.raw,view:a.required.constant("text"),format:a.optional.function,label:a.optional.string});return h?{params:h}:null},controller(p){var a;const h=new ko(p.document,{parser:p.params.parse,props:X.fromObject({formatter:(a=p.params.format)!==null&&a!==void 0?a:_=>String(_)}),value:G(p.params.value),viewProps:p.viewProps});return new N(p.document,{blade:p.blade,props:X.fromObject({label:p.params.label}),valueController:h})},api(p){return!(p.controller instanceof N)||!(p.controller.valueController instanceof ko)?null:new Qh(p.controller)}}}();function i_(p){const a=p.createElement("div");return a.classList.add(y("dfw")()),p.body&&p.body.appendChild(a),a}function Jh(p,a,h){if(p.querySelector(`style[data-tp-style=${a}]`))return;const _=p.createElement("style");_.dataset.tpStyle=a,_.textContent=h,p.head.appendChild(_)}class s_ extends Jv{constructor(a){var h,_;const A=a!=null?a:{},z=(h=A.document)!==null&&h!==void 0?h:ke(),Y=Kv(),de=new e_(z,{expanded:A.expanded,blade:ae(),props:X.fromObject({title:A.title}),viewProps:Be.create()});super(de,Y),this.pool_=Y,this.containerElem_=(_=A.container)!==null&&_!==void 0?_:i_(z),this.containerElem_.appendChild(this.element),this.doc_=z,this.usesDefaultWrapper_=!A.container,this.setUpDefaultPlugins_()}get document(){if(!this.doc_)throw b.alreadyDisposed();return this.doc_}dispose(){const a=this.containerElem_;if(!a)throw b.alreadyDisposed();if(this.usesDefaultWrapper_){const h=a.parentElement;h&&h.removeChild(a)}this.containerElem_=null,this.doc_=null,super.dispose()}registerPlugin(a){("plugin"in a?[a.plugin]:"plugins"in a?a.plugins:[]).forEach(_=>{this.pool_.register(_),this.embedPluginStyle_(_)})}embedPluginStyle_(a){a.css&&Jh(this.document,`plugin-${a.id}`,a.css)}setUpDefaultPlugins_(){Jh(this.document,"default",'.tp-tbiv_b,.tp-coltxtv_ms,.tp-ckbv_i,.tp-rotv_b,.tp-fldv_b,.tp-mllv_i,.tp-sglv_i,.tp-grlv_g,.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw,.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0}.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{background-color:var(--btn-bg);border-radius:var(--elm-br);color:var(--btn-fg);cursor:pointer;display:block;font-weight:bold;height:var(--bld-us);line-height:var(--bld-us);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tp-p2dv_b:hover,.tp-btnv_b:hover,.tp-lstv_s:hover{background-color:var(--btn-bg-h)}.tp-p2dv_b:focus,.tp-btnv_b:focus,.tp-lstv_s:focus{background-color:var(--btn-bg-f)}.tp-p2dv_b:active,.tp-btnv_b:active,.tp-lstv_s:active{background-color:var(--btn-bg-a)}.tp-p2dv_b:disabled,.tp-btnv_b:disabled,.tp-lstv_s:disabled{opacity:.5}.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw{background-color:var(--in-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--in-fg);font-family:inherit;height:var(--bld-us);line-height:var(--bld-us);min-width:0;width:100%}.tp-txtv_i:hover,.tp-p2dpv_p:hover,.tp-colswv_sw:hover{background-color:var(--in-bg-h)}.tp-txtv_i:focus,.tp-p2dpv_p:focus,.tp-colswv_sw:focus{background-color:var(--in-bg-f)}.tp-txtv_i:active,.tp-p2dpv_p:active,.tp-colswv_sw:active{background-color:var(--in-bg-a)}.tp-txtv_i:disabled,.tp-p2dpv_p:disabled,.tp-colswv_sw:disabled{opacity:.5}.tp-mllv_i,.tp-sglv_i,.tp-grlv_g{background-color:var(--mo-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--mo-fg);height:var(--bld-us);scrollbar-color:currentColor transparent;scrollbar-width:thin;width:100%}.tp-mllv_i::-webkit-scrollbar,.tp-sglv_i::-webkit-scrollbar,.tp-grlv_g::-webkit-scrollbar{height:8px;width:8px}.tp-mllv_i::-webkit-scrollbar-corner,.tp-sglv_i::-webkit-scrollbar-corner,.tp-grlv_g::-webkit-scrollbar-corner{background-color:transparent}.tp-mllv_i::-webkit-scrollbar-thumb,.tp-sglv_i::-webkit-scrollbar-thumb,.tp-grlv_g::-webkit-scrollbar-thumb{background-clip:padding-box;background-color:currentColor;border:transparent solid 2px;border-radius:4px}.tp-rotv{--font-family: var(--tp-font-family, Roboto Mono, Source Code Pro, Menlo, Courier, monospace);--bs-br: var(--tp-base-border-radius, 6px);--cnt-h-p: var(--tp-container-horizontal-padding, 4px);--cnt-v-p: var(--tp-container-vertical-padding, 4px);--elm-br: var(--tp-element-border-radius, 2px);--bld-s: var(--tp-blade-spacing, 4px);--bld-us: var(--tp-blade-unit-size, 20px);--bs-bg: var(--tp-base-background-color, #28292e);--bs-sh: var(--tp-base-shadow-color, rgba(0, 0, 0, 0.2));--btn-bg: var(--tp-button-background-color, #adafb8);--btn-bg-a: var(--tp-button-background-color-active, #d6d7db);--btn-bg-f: var(--tp-button-background-color-focus, #c8cad0);--btn-bg-h: var(--tp-button-background-color-hover, #bbbcc4);--btn-fg: var(--tp-button-foreground-color, #28292e);--cnt-bg: var(--tp-container-background-color, rgba(187, 188, 196, 0.1));--cnt-bg-a: var(--tp-container-background-color-active, rgba(187, 188, 196, 0.25));--cnt-bg-f: var(--tp-container-background-color-focus, rgba(187, 188, 196, 0.2));--cnt-bg-h: var(--tp-container-background-color-hover, rgba(187, 188, 196, 0.15));--cnt-fg: var(--tp-container-foreground-color, #bbbcc4);--in-bg: var(--tp-input-background-color, rgba(187, 188, 196, 0.1));--in-bg-a: var(--tp-input-background-color-active, rgba(187, 188, 196, 0.25));--in-bg-f: var(--tp-input-background-color-focus, rgba(187, 188, 196, 0.2));--in-bg-h: var(--tp-input-background-color-hover, rgba(187, 188, 196, 0.15));--in-fg: var(--tp-input-foreground-color, #bbbcc4);--lbl-fg: var(--tp-label-foreground-color, rgba(187, 188, 196, 0.7));--mo-bg: var(--tp-monitor-background-color, rgba(0, 0, 0, 0.2));--mo-fg: var(--tp-monitor-foreground-color, rgba(187, 188, 196, 0.7));--grv-fg: var(--tp-groove-foreground-color, rgba(187, 188, 196, 0.1))}.tp-rotv_c>.tp-cntv.tp-v-lst,.tp-tabv_c .tp-brkv>.tp-cntv.tp-v-lst,.tp-fldv_c>.tp-cntv.tp-v-lst{margin-bottom:calc(-1*var(--cnt-v-p))}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-tabv_c .tp-brkv>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_c{border-bottom-left-radius:0}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-tabv_c .tp-brkv>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_b{border-bottom-left-radius:0}.tp-rotv_c>*:not(.tp-v-fst),.tp-tabv_c .tp-brkv>*:not(.tp-v-fst),.tp-fldv_c>*:not(.tp-v-fst){margin-top:var(--bld-s)}.tp-rotv_c>.tp-sprv:not(.tp-v-fst),.tp-tabv_c .tp-brkv>.tp-sprv:not(.tp-v-fst),.tp-fldv_c>.tp-sprv:not(.tp-v-fst),.tp-rotv_c>.tp-cntv:not(.tp-v-fst),.tp-tabv_c .tp-brkv>.tp-cntv:not(.tp-v-fst),.tp-fldv_c>.tp-cntv:not(.tp-v-fst){margin-top:var(--cnt-v-p)}.tp-rotv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-tabv_c .tp-brkv>.tp-sprv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-rotv_c>.tp-cntv+*:not(.tp-v-hidden),.tp-tabv_c .tp-brkv>.tp-cntv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-cntv+*:not(.tp-v-hidden){margin-top:var(--cnt-v-p)}.tp-rotv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-tabv_c .tp-brkv>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-fldv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-rotv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-tabv_c .tp-brkv>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-fldv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv{margin-top:0}.tp-tabv_c .tp-brkv>.tp-cntv,.tp-fldv_c>.tp-cntv{margin-left:4px}.tp-tabv_c .tp-brkv>.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-fldv>.tp-fldv_b{border-top-left-radius:var(--elm-br);border-bottom-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv>.tp-fldv.tp-fldv-expanded>.tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-fldv-expanded>.tp-fldv_b{border-bottom-left-radius:0}.tp-tabv_c .tp-brkv .tp-fldv>.tp-fldv_c,.tp-fldv_c .tp-fldv>.tp-fldv_c{border-bottom-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv>.tp-tabv>.tp-tabv_i,.tp-fldv_c>.tp-tabv>.tp-tabv_i{border-top-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv .tp-tabv>.tp-tabv_c,.tp-fldv_c .tp-tabv>.tp-tabv_c{border-bottom-left-radius:var(--elm-br)}.tp-rotv_b,.tp-fldv_b{background-color:var(--cnt-bg);color:var(--cnt-fg);cursor:pointer;display:block;height:calc(var(--bld-us) + 4px);line-height:calc(var(--bld-us) + 4px);overflow:hidden;padding-left:var(--cnt-h-p);padding-right:calc(4px + var(--bld-us) + var(--cnt-h-p));position:relative;text-align:left;text-overflow:ellipsis;white-space:nowrap;width:100%;transition:border-radius .2s ease-in-out .2s}.tp-rotv_b:hover,.tp-fldv_b:hover{background-color:var(--cnt-bg-h)}.tp-rotv_b:focus,.tp-fldv_b:focus{background-color:var(--cnt-bg-f)}.tp-rotv_b:active,.tp-fldv_b:active{background-color:var(--cnt-bg-a)}.tp-rotv_b:disabled,.tp-fldv_b:disabled{opacity:.5}.tp-rotv_m,.tp-fldv_m{background:linear-gradient(to left, var(--cnt-fg), var(--cnt-fg) 2px, transparent 2px, transparent 4px, var(--cnt-fg) 4px);border-radius:2px;bottom:0;content:"";display:block;height:6px;right:calc(var(--cnt-h-p) + (var(--bld-us) + 4px - 6px)/2 - 2px);margin:auto;opacity:.5;position:absolute;top:0;transform:rotate(90deg);transition:transform .2s ease-in-out;width:6px}.tp-rotv.tp-rotv-expanded .tp-rotv_m,.tp-fldv.tp-fldv-expanded>.tp-fldv_b>.tp-fldv_m{transform:none}.tp-rotv_c,.tp-fldv_c{box-sizing:border-box;height:0;opacity:0;overflow:hidden;padding-bottom:0;padding-top:0;position:relative;transition:height .2s ease-in-out,opacity .2s linear,padding .2s ease-in-out}.tp-rotv.tp-rotv-cpl:not(.tp-rotv-expanded) .tp-rotv_c,.tp-fldv.tp-fldv-cpl:not(.tp-fldv-expanded)>.tp-fldv_c{display:none}.tp-rotv.tp-rotv-expanded .tp-rotv_c,.tp-fldv.tp-fldv-expanded>.tp-fldv_c{opacity:1;padding-bottom:var(--cnt-v-p);padding-top:var(--cnt-v-p);transform:none;overflow:visible;transition:height .2s ease-in-out,opacity .2s linear .2s,padding .2s ease-in-out}.tp-lstv,.tp-coltxtv_m{position:relative}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m,.tp-coltxtv_mm{bottom:0;margin:auto;pointer-events:none;position:absolute;right:2px;top:0}.tp-lstv_m svg,.tp-coltxtv_mm svg{bottom:0;height:16px;margin:auto;position:absolute;right:0;top:0;width:16px}.tp-lstv_m svg path,.tp-coltxtv_mm svg path{fill:currentColor}.tp-pndtxtv,.tp-coltxtv_w{display:flex}.tp-pndtxtv_a,.tp-coltxtv_c{width:100%}.tp-pndtxtv_a+.tp-pndtxtv_a,.tp-coltxtv_c+.tp-pndtxtv_a,.tp-pndtxtv_a+.tp-coltxtv_c,.tp-coltxtv_c+.tp-coltxtv_c{margin-left:2px}.tp-btnv_b{width:100%}.tp-btnv_t{text-align:center}.tp-ckbv_l{display:block;position:relative}.tp-ckbv_i{left:0;opacity:0;position:absolute;top:0}.tp-ckbv_w{background-color:var(--in-bg);border-radius:var(--elm-br);cursor:pointer;display:block;height:var(--bld-us);position:relative;width:var(--bld-us)}.tp-ckbv_w svg{bottom:0;display:block;height:16px;left:0;margin:auto;opacity:0;position:absolute;right:0;top:0;width:16px}.tp-ckbv_w svg path{fill:none;stroke:var(--in-fg);stroke-width:2}.tp-ckbv_i:hover+.tp-ckbv_w{background-color:var(--in-bg-h)}.tp-ckbv_i:focus+.tp-ckbv_w{background-color:var(--in-bg-f)}.tp-ckbv_i:active+.tp-ckbv_w{background-color:var(--in-bg-a)}.tp-ckbv_i:checked+.tp-ckbv_w svg{opacity:1}.tp-ckbv.tp-v-disabled .tp-ckbv_w{opacity:.5}.tp-colv{position:relative}.tp-colv_h{display:flex}.tp-colv_s{flex-grow:0;flex-shrink:0;width:var(--bld-us)}.tp-colv_t{flex:1;margin-left:4px}.tp-colv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-colv.tp-colv-cpl .tp-colv_p{overflow:visible}.tp-colv.tp-colv-expanded .tp-colv_p{margin-top:var(--bld-s);opacity:1}.tp-colv .tp-popv{left:calc(-1*var(--cnt-h-p));right:calc(-1*var(--cnt-h-p));top:var(--bld-us)}.tp-colpv_h,.tp-colpv_ap{margin-left:6px;margin-right:6px}.tp-colpv_h{margin-top:var(--bld-s)}.tp-colpv_rgb{display:flex;margin-top:var(--bld-s);width:100%}.tp-colpv_a{display:flex;margin-top:var(--cnt-v-p);padding-top:calc(var(--cnt-v-p) + 2px);position:relative}.tp-colpv_a:before{background-color:var(--grv-fg);content:"";height:2px;left:calc(-1*var(--cnt-h-p));position:absolute;right:calc(-1*var(--cnt-h-p));top:0}.tp-colpv_ap{align-items:center;display:flex;flex:3}.tp-colpv_at{flex:1;margin-left:4px}.tp-svpv{border-radius:var(--elm-br);outline:none;overflow:hidden;position:relative}.tp-svpv_c{cursor:crosshair;display:block;height:calc(var(--bld-us)*4);width:100%}.tp-svpv_m{border-radius:100%;border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;filter:drop-shadow(0 0 1px rgba(0, 0, 0, 0.3));height:12px;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;width:12px}.tp-svpv:focus .tp-svpv_m{border-color:#fff}.tp-hplv{cursor:pointer;height:var(--bld-us);outline:none;position:relative}.tp-hplv_c{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAABCAYAAABubagXAAAAQ0lEQVQoU2P8z8Dwn0GCgQEDi2OK/RBgYHjBgIpfovFh8j8YBIgzFGQxuqEgPhaDOT5gOhPkdCxOZeBg+IDFZZiGAgCaSSMYtcRHLgAAAABJRU5ErkJggg==);background-position:left top;background-repeat:no-repeat;background-size:100% 100%;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;position:absolute;top:50%;width:100%}.tp-hplv_m{border-radius:var(--elm-br);border:rgba(255,255,255,.75) solid 2px;box-shadow:0 0 2px rgba(0,0,0,.1);box-sizing:border-box;height:12px;left:50%;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;top:50%;width:12px}.tp-hplv:focus .tp-hplv_m{border-color:#fff}.tp-aplv{cursor:pointer;height:var(--bld-us);outline:none;position:relative;width:100%}.tp-aplv_b{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:4px 4px;background-position:0 0,2px 2px;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;overflow:hidden;position:absolute;top:50%;width:100%}.tp-aplv_c{bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv_m{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:12px 12px;background-position:0 0,6px 6px;border-radius:var(--elm-br);box-shadow:0 0 2px rgba(0,0,0,.1);height:12px;left:50%;margin-left:-6px;margin-top:-6px;overflow:hidden;pointer-events:none;position:absolute;top:50%;width:12px}.tp-aplv_p{border-radius:var(--elm-br);border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv:focus .tp-aplv_p{border-color:#fff}.tp-colswv{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:10px 10px;background-position:0 0,5px 5px;border-radius:var(--elm-br);overflow:hidden}.tp-colswv.tp-v-disabled{opacity:.5}.tp-colswv_sw{border-radius:0}.tp-colswv_b{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;border-width:0;cursor:pointer;display:block;height:var(--bld-us);left:0;margin:0;outline:none;padding:0;position:absolute;top:0;width:var(--bld-us)}.tp-colswv_b:focus::after{border:rgba(255,255,255,.75) solid 2px;border-radius:var(--elm-br);bottom:0;content:"";display:block;left:0;position:absolute;right:0;top:0}.tp-coltxtv{display:flex;width:100%}.tp-coltxtv_m{margin-right:4px}.tp-coltxtv_ms{border-radius:var(--elm-br);color:var(--lbl-fg);cursor:pointer;height:var(--bld-us);line-height:var(--bld-us);padding:0 18px 0 4px}.tp-coltxtv_ms:hover{background-color:var(--in-bg-h)}.tp-coltxtv_ms:focus{background-color:var(--in-bg-f)}.tp-coltxtv_ms:active{background-color:var(--in-bg-a)}.tp-coltxtv_mm{color:var(--lbl-fg)}.tp-coltxtv_w{flex:1}.tp-dfwv{position:absolute;top:8px;right:8px;width:256px}.tp-fldv.tp-fldv-not .tp-fldv_b{display:none}.tp-fldv_t{padding-left:4px}.tp-fldv_c{border-left:var(--cnt-bg) solid 4px}.tp-fldv_b:hover+.tp-fldv_c{border-left-color:var(--cnt-bg-h)}.tp-fldv_b:focus+.tp-fldv_c{border-left-color:var(--cnt-bg-f)}.tp-fldv_b:active+.tp-fldv_c{border-left-color:var(--cnt-bg-a)}.tp-grlv{position:relative}.tp-grlv_g{display:block;height:calc(var(--bld-us)*3)}.tp-grlv_g polyline{fill:none;stroke:var(--mo-fg);stroke-linejoin:round}.tp-grlv_t{margin-top:-4px;transition:left .05s,top .05s;visibility:hidden}.tp-grlv_t.tp-grlv_t-a{visibility:visible}.tp-grlv_t.tp-grlv_t-in{transition:none}.tp-grlv.tp-v-disabled .tp-grlv_g{opacity:.5}.tp-grlv .tp-ttv{background-color:var(--mo-fg)}.tp-grlv .tp-ttv::before{border-top-color:var(--mo-fg)}.tp-lblv{align-items:center;display:flex;line-height:1.3;padding-left:var(--cnt-h-p);padding-right:var(--cnt-h-p)}.tp-lblv.tp-lblv-nol{display:block}.tp-lblv_l{color:var(--lbl-fg);flex:1;-webkit-hyphens:auto;-ms-hyphens:auto;hyphens:auto;overflow:hidden;padding-left:4px;padding-right:16px}.tp-lblv.tp-v-disabled .tp-lblv_l{opacity:.5}.tp-lblv.tp-lblv-nol .tp-lblv_l{display:none}.tp-lblv_v{align-self:flex-start;flex-grow:0;flex-shrink:0;width:160px}.tp-lblv.tp-lblv-nol .tp-lblv_v{width:100%}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m{color:var(--btn-fg)}.tp-sglv_i{padding:0 4px}.tp-sglv.tp-v-disabled .tp-sglv_i{opacity:.5}.tp-mllv_i{display:block;height:calc(var(--bld-us)*3);line-height:var(--bld-us);padding:0 4px;resize:none;white-space:pre}.tp-mllv.tp-v-disabled .tp-mllv_i{opacity:.5}.tp-p2dv{position:relative}.tp-p2dv_h{display:flex}.tp-p2dv_b{height:var(--bld-us);margin-right:4px;position:relative;width:var(--bld-us)}.tp-p2dv_b svg{display:block;height:16px;left:50%;margin-left:-8px;margin-top:-8px;position:absolute;top:50%;width:16px}.tp-p2dv_b svg path{stroke:currentColor;stroke-width:2}.tp-p2dv_b svg circle{fill:currentColor}.tp-p2dv_t{flex:1}.tp-p2dv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-p2dv.tp-p2dv-expanded .tp-p2dv_p{margin-top:var(--bld-s);opacity:1}.tp-p2dv .tp-popv{left:calc(-1*var(--cnt-h-p));right:calc(-1*var(--cnt-h-p));top:var(--bld-us)}.tp-p2dpv{padding-left:calc(var(--bld-us) + 4px)}.tp-p2dpv_p{cursor:crosshair;height:0;overflow:hidden;padding-bottom:100%;position:relative}.tp-p2dpv_g{display:block;height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}.tp-p2dpv_ax{opacity:.1;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_l{opacity:.5;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_m{border:var(--in-fg) solid 1px;border-radius:50%;box-sizing:border-box;height:4px;margin-left:-2px;margin-top:-2px;position:absolute;width:4px}.tp-p2dpv_p:focus .tp-p2dpv_m{background-color:var(--in-fg);border-width:0}.tp-popv{background-color:var(--bs-bg);border-radius:6px;box-shadow:0 2px 4px var(--bs-sh);display:none;max-width:168px;padding:var(--cnt-v-p) var(--cnt-h-p);position:absolute;visibility:hidden;z-index:1000}.tp-popv.tp-popv-v{display:block;visibility:visible}.tp-sprv_r{background-color:var(--grv-fg);border-width:0;display:block;height:2px;margin:0;width:100%}.tp-sldv.tp-v-disabled{opacity:.5}.tp-sldv_t{box-sizing:border-box;cursor:pointer;height:var(--bld-us);margin:0 6px;outline:none;position:relative}.tp-sldv_t::before{background-color:var(--in-bg);border-radius:1px;bottom:0;content:"";display:block;height:2px;left:0;margin:auto;position:absolute;right:0;top:0}.tp-sldv_k{height:100%;left:0;position:absolute;top:0}.tp-sldv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";display:block;height:2px;left:0;margin-bottom:auto;margin-top:auto;position:absolute;right:0;top:0}.tp-sldv_k::after{background-color:var(--btn-bg);border-radius:var(--elm-br);bottom:0;content:"";display:block;height:12px;margin-bottom:auto;margin-top:auto;position:absolute;right:-6px;top:0;width:12px}.tp-sldv_t:hover .tp-sldv_k::after{background-color:var(--btn-bg-h)}.tp-sldv_t:focus .tp-sldv_k::after{background-color:var(--btn-bg-f)}.tp-sldv_t:active .tp-sldv_k::after{background-color:var(--btn-bg-a)}.tp-sldtxtv{display:flex}.tp-sldtxtv_s{flex:2}.tp-sldtxtv_t{flex:1;margin-left:4px}.tp-tabv.tp-v-disabled{opacity:.5}.tp-tabv_i{align-items:flex-end;display:flex;overflow:hidden}.tp-tabv.tp-tabv-nop .tp-tabv_i{height:calc(var(--bld-us) + 4px);position:relative}.tp-tabv.tp-tabv-nop .tp-tabv_i::before{background-color:var(--cnt-bg);bottom:0;content:"";height:2px;left:0;position:absolute;right:0}.tp-tabv_c{border-left:var(--cnt-bg) solid 4px;padding-bottom:var(--cnt-v-p);padding-top:var(--cnt-v-p)}.tp-tbiv{flex:1;min-width:0;position:relative}.tp-tbiv+.tp-tbiv{margin-left:2px}.tp-tbiv+.tp-tbiv::before{background-color:var(--cnt-bg);bottom:0;content:"";height:2px;left:-2px;position:absolute;width:2px}.tp-tbiv_b{background-color:var(--cnt-bg);display:block;padding-left:calc(var(--cnt-h-p) + 4px);padding-right:calc(var(--cnt-h-p) + 4px);width:100%}.tp-tbiv_b:hover{background-color:var(--cnt-bg-h)}.tp-tbiv_b:focus{background-color:var(--cnt-bg-f)}.tp-tbiv_b:active{background-color:var(--cnt-bg-a)}.tp-tbiv_b:disabled{opacity:.5}.tp-tbiv_t{color:var(--cnt-fg);height:calc(var(--bld-us) + 4px);line-height:calc(var(--bld-us) + 4px);opacity:.5;overflow:hidden;text-overflow:ellipsis}.tp-tbiv.tp-tbiv-sel .tp-tbiv_t{opacity:1}.tp-txtv{position:relative}.tp-txtv_i{padding:0 4px}.tp-txtv.tp-txtv-fst .tp-txtv_i{border-bottom-right-radius:0;border-top-right-radius:0}.tp-txtv.tp-txtv-mid .tp-txtv_i{border-radius:0}.tp-txtv.tp-txtv-lst .tp-txtv_i{border-bottom-left-radius:0;border-top-left-radius:0}.tp-txtv.tp-txtv-num .tp-txtv_i{text-align:right}.tp-txtv.tp-txtv-drg .tp-txtv_i{opacity:.3}.tp-txtv_k{cursor:pointer;height:100%;left:-3px;position:absolute;top:0;width:12px}.tp-txtv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";height:calc(var(--bld-us) - 4px);left:50%;margin-bottom:auto;margin-left:-1px;margin-top:auto;opacity:.1;position:absolute;top:0;transition:border-radius .1s,height .1s,transform .1s,width .1s;width:2px}.tp-txtv_k:hover::before,.tp-txtv.tp-txtv-drg .tp-txtv_k::before{opacity:1}.tp-txtv.tp-txtv-drg .tp-txtv_k::before{border-radius:50%;height:4px;transform:translateX(-1px);width:4px}.tp-txtv_g{bottom:0;display:block;height:8px;left:50%;margin:auto;overflow:visible;pointer-events:none;position:absolute;top:0;visibility:hidden;width:100%}.tp-txtv.tp-txtv-drg .tp-txtv_g{visibility:visible}.tp-txtv_gb{fill:none;stroke:var(--in-fg);stroke-dasharray:1}.tp-txtv_gh{fill:none;stroke:var(--in-fg)}.tp-txtv .tp-ttv{margin-left:6px;visibility:hidden}.tp-txtv.tp-txtv-drg .tp-ttv{visibility:visible}.tp-ttv{background-color:var(--in-fg);border-radius:var(--elm-br);color:var(--bs-bg);padding:2px 4px;pointer-events:none;position:absolute;transform:translate(-50%, -100%)}.tp-ttv::before{border-color:var(--in-fg) transparent transparent transparent;border-style:solid;border-width:2px;box-sizing:border-box;content:"";font-size:.9em;height:4px;left:50%;margin-left:-2px;position:absolute;top:100%;width:4px}.tp-rotv{background-color:var(--bs-bg);border-radius:var(--bs-br);box-shadow:0 2px 4px var(--bs-sh);font-family:var(--font-family);font-size:11px;font-weight:500;line-height:1;text-align:left}.tp-rotv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br);border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br);padding-left:calc(4px + var(--bld-us) + var(--cnt-h-p));text-align:center}.tp-rotv.tp-rotv-expanded .tp-rotv_b{border-bottom-left-radius:0;border-bottom-right-radius:0}.tp-rotv.tp-rotv-not .tp-rotv_b{display:none}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_c,.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c .tp-fldv.tp-v-vlst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-right-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst{margin-top:calc(-1*var(--cnt-v-p))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst>.tp-fldv_b{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst{margin-top:calc(-1*var(--cnt-v-p))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst>.tp-tabv_i{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv.tp-v-disabled,.tp-rotv .tp-v-disabled{pointer-events:none}.tp-rotv.tp-v-hidden,.tp-rotv .tp-v-hidden{display:none}'),this.pool_.getAll().forEach(a=>{this.embedPluginStyle_(a)}),this.registerPlugin({plugins:[t_,$v,ei,n_]})}}const r_=new n("3.1.0");t.BladeApi=i,t.ButtonApi=x,t.FolderApi=kt,t.InputBindingApi=O,t.ListApi=$h,t.MonitorBindingApi=le,t.Pane=s_,t.SeparatorApi=$,t.SliderApi=Zh,t.TabApi=Vt,t.TabPageApi=an,t.TextApi=Qh,t.TpChangeEvent=o,t.VERSION=r_,Object.defineProperty(t,"__esModule",{value:!0})})})(su,su.exports);var ru={d:(s,e)=>{for(var t in e)ru.o(e,t)&&!ru.o(s,t)&&Object.defineProperty(s,t,{enumerable:!0,get:e[t]})},o:(s,e)=>Object.prototype.hasOwnProperty.call(s,e)},Bm={};ru.d(Bm,{Q:()=>fT});var Ac=function(s,e,t,n){return new(t||(t=Promise))(function(i,r){function o(u){try{c(n.next(u))}catch(d){r(d)}}function l(u){try{c(n.throw(u))}catch(d){r(d)}}function c(u){var d;u.done?i(u.value):(d=u.value,d instanceof t?d:new t(function(f){f(d)})).then(o,l)}c((n=n.apply(s,e||[])).next())})};const km=Symbol("Comlink.proxy"),hT=Symbol("Comlink.endpoint"),dT=Symbol("Comlink.releaseProxy"),ou=Symbol("Comlink.thrown"),cf=s=>typeof s=="object"&&s!==null||typeof s=="function",Vm=new Map([["proxy",{canHandle:s=>cf(s)&&s[km],serialize(s){const{port1:e,port2:t}=new MessageChannel;return zm(s,e),[t,[t]]},deserialize:s=>(s.start(),Gm(s))}],["throw",{canHandle:s=>cf(s)&&ou in s,serialize({value:s}){let e;return e=s instanceof Error?{isError:!0,value:{message:s.message,name:s.name,stack:s.stack}}:{isError:!1,value:s},[e,[]]},deserialize(s){throw s.isError?Object.assign(new Error(s.value.message),s.value):s.value}}]]);function zm(s,e=self){e.addEventListener("message",function t(n){if(!n||!n.data)return;const{id:i,type:r,path:o}=Object.assign({path:[]},n.data),l=(n.data.argumentList||[]).map(xs);let c;try{const u=o.slice(0,-1).reduce((f,m)=>f[m],s),d=o.reduce((f,m)=>f[m],s);switch(r){case"GET":c=d;break;case"SET":u[o.slice(-1)[0]]=xs(n.data.value),c=!0;break;case"APPLY":c=d.apply(u,l);break;case"CONSTRUCT":c=Ga(new d(...l));break;case"ENDPOINT":{const{port1:f,port2:m}=new MessageChannel;zm(s,m),c=function(g,b){return Wm.set(g,b),g}(f,[f])}break;case"RELEASE":c=void 0;break;default:return}}catch(u){c={value:u,[ou]:0}}Promise.resolve(c).catch(u=>({value:u,[ou]:0})).then(u=>{const[d,f]=ku(u);e.postMessage(Object.assign(Object.assign({},d),{id:i}),f),r==="RELEASE"&&(e.removeEventListener("message",t),Hm(e))})}),e.start&&e.start()}function Hm(s){(function(e){return e.constructor.name==="MessagePort"})(s)&&s.close()}function Gm(s,e){return au(s,[],e)}function Sa(s){if(s)throw new Error("Proxy has been released and is not useable")}function au(s,e=[],t=function(){}){let n=!1;const i=new Proxy(t,{get(r,o){if(Sa(n),o===dT)return()=>nr(s,{type:"RELEASE",path:e.map(l=>l.toString())}).then(()=>{Hm(s),n=!0});if(o==="then"){if(e.length===0)return{then:()=>i};const l=nr(s,{type:"GET",path:e.map(c=>c.toString())}).then(xs);return l.then.bind(l)}return au(s,[...e,o])},set(r,o,l){Sa(n);const[c,u]=ku(l);return nr(s,{type:"SET",path:[...e,o].map(d=>d.toString()),value:c},u).then(xs)},apply(r,o,l){Sa(n);const c=e[e.length-1];if(c===hT)return nr(s,{type:"ENDPOINT"}).then(xs);if(c==="bind")return au(s,e.slice(0,-1));const[u,d]=uf(l);return nr(s,{type:"APPLY",path:e.map(f=>f.toString()),argumentList:u},d).then(xs)},construct(r,o){Sa(n);const[l,c]=uf(o);return nr(s,{type:"CONSTRUCT",path:e.map(u=>u.toString()),argumentList:l},c).then(xs)}});return i}function uf(s){const e=s.map(ku);return[e.map(n=>n[0]),(t=e.map(n=>n[1]),Array.prototype.concat.apply([],t))];var t}const Wm=new WeakMap;function Ga(s){return Object.assign(s,{[km]:!0})}function ku(s){for(const[e,t]of Vm)if(t.canHandle(s)){const[n,i]=t.serialize(s);return[{type:"HANDLER",name:e,value:n},i]}return[{type:"RAW",value:s},Wm.get(s)||[]]}function xs(s){switch(s.type){case"HANDLER":return Vm.get(s.name).deserialize(s.value);case"RAW":return s.value}}function nr(s,e,t){return new Promise(n=>{const i=new Array(4).fill(0).map(()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16)).join("-");s.addEventListener("message",function r(o){o.data&&o.data.id&&o.data.id===i&&(s.removeEventListener("message",r),n(o.data))}),s.start&&s.start(),s.postMessage(Object.assign({id:i},e),t)})}class pT extends class{}{init(e,t,n,i){if(!this.api){if(!i)throw new Error("workerFilePath is required");(()=>{var r,o,l,c;r=this,o=void 0,c=function*(){const u=yield fetch(i).then(m=>m.blob()),d=URL.createObjectURL(u),f=new Worker(d,{type:"module"});this.api=yield new(Gm(f))(Ga(()=>{e(),URL.revokeObjectURL(d)}),Ga((m,g)=>m==="xatlas_web.wasm"?n:m+g),Ga(t))},new((l=void 0)||(l=Promise))(function(u,d){function f(b){try{g(c.next(b))}catch(w){d(w)}}function m(b){try{g(c.throw(b))}catch(w){d(w)}}function g(b){var w;b.done?u(b.value):(w=b.value,w instanceof l?w:new l(function(x){x(w)})).then(f,m)}g((c=c.apply(r,o||[])).next())})})()}}}class fT extends class{constructor(e,t={resolution:2048},n={},i=!1,r=!1,o=!1){this.THREE=e,this.packOptions=t,this.chartOptions=n,this.useNormals=i,this.timeUnwrap=r,this.logProgress=o,this._libraryLoaded=!1,this._isUnwrapping=!1,this.xAtlas=this._createXAtlas()}loadLibrary(e,t,n){return Ac(this,void 0,void 0,function*(){if(!this._libraryLoaded){for(yield new Promise((i,r)=>{try{this.xAtlas.init(()=>{i()},e,t,n)}catch(o){r(o)}});!this.xAtlas.api||!(yield this.xAtlas.api.loaded);)yield new Promise(i=>setTimeout(i,100));this._libraryLoaded=!0}})}packAtlas(e,t="uv2",n="uv"){return Ac(this,void 0,void 0,function*(){if(!this._libraryLoaded)return console.warn("xatlas-three: library not loaded"),[];if(!e)return[];if(e.length<1)return[];const i=this.chartOptions.useInputMeshUvs;for(;this._isUnwrapping;)console.log("xatlas-three: unwrapping another mesh, waiting 100 ms"),yield new Promise(u=>setTimeout(u,100));this._isUnwrapping=!0,yield this.xAtlas.api.setProgressLogging(this.logProgress),yield this.xAtlas.api.createAtlas();let r=[],o="";for(let u of e){let{uuid:d,index:f,attributes:m}=u;const g=u.userData.worldScale||1;r.push(d),f&&m.position&&m.position.itemSize===3?(o="Mesh"+r.length+" added to atlas: "+d,this.timeUnwrap&&console.time(o),yield this.xAtlas.api.addMesh(f.array,m.position.array,m.normal?m.normal.array:void 0,m.uv?m.uv.array:void 0,d,this.useNormals,i,g),this.timeUnwrap&&console.timeEnd(o)):console.warn("xatlas-three: Geometry not supported: ",u)}o="Generated atlas with "+r.length+" meshes",this.timeUnwrap&&console.time(o);let l=yield this.xAtlas.api.generateAtlas(this.chartOptions,this.packOptions,!0);this.timeUnwrap&&console.timeEnd(o);let c=[];for(let u of l){let d=e.find(f=>f.uuid===u.mesh);d?(u.vertex.vertices&&d.setAttribute("position",new this.THREE.BufferAttribute(u.vertex.vertices,3,!1)),u.vertex.normals&&d.setAttribute("normal",new this.THREE.BufferAttribute(u.vertex.normals,3,!0)),u.vertex.coords1&&d.setAttribute(t,new this.THREE.BufferAttribute(u.vertex.coords1,2,!1)),u.vertex.coords&&t!==n&&d.setAttribute(n,new this.THREE.BufferAttribute(u.vertex.coords,2,!1)),u.index&&d.setIndex(new this.THREE.BufferAttribute(u.index,1,!1)),c.push(d)):console.error("xatlas-three: Mesh not found: ",u.mesh)}return yield this.xAtlas.api.destroyAtlas(),this._isUnwrapping=!1,c})}unwrapGeometry(e,t="uv",n="uv2"){return Ac(this,void 0,void 0,function*(){return this.packAtlas([e],t,n)})}}{_createXAtlas(){return new pT}}var mT=Bm.Q;const Wa=new mT({BufferAttribute:Rt}),gT=async()=>{const s=(e,t)=>{};await Wa.loadLibrary(s,"https://cdn.jsdelivr.net/npm/xatlasjs@0.1.0/dist/xatlas.wasm","https://cdn.jsdelivr.net/npm/xatlasjs@0.1.0/dist/xatlas.js")},vT=async s=>{const e=s.map(t=>t.geometry);Wa.packOptions.padding=16,Wa.packOptions.resolution=4096,await Wa.packAtlas(e,"uv2","uv")},_T=`
    uniform vec2 offset;
    in vec2 uv2;
    out vec4 vWorldPosition;

    void main() {
        vWorldPosition = modelMatrix * vec4(position, 1.0);
        gl_Position = vec4((uv2 + offset) * 2.0 - 1.0, 0.0, 1.0);
    }
`,xT=`
    in vec4 vWorldPosition;
    out vec4 fragColor;

    void main() {
        fragColor = vWorldPosition;
    }
`,bT=new Zt({glslVersion:Hn,vertexShader:_T,fragmentShader:xT,side:gn,fog:!1,uniforms:{offset:new ul(new Re(0,0))}}),yT=`
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
`,wT=`
    in vec4 vNormal;
    out vec4 fragColor;

    void main() {
        // Guard against zero-length normals (degenerate geometry) \u2014 produces (0,0,0,0)
        // so the bake shader can detect the miss instead of generating NaN.
        float len = length(vNormal.xyz);
        fragColor = len > 1e-6 ? vec4(vNormal.xyz / len, vNormal.w) : vec4(0.0);
    }
`,MT=new Zt({glslVersion:Hn,vertexShader:yT,fragmentShader:wT,side:gn,fog:!1,uniforms:{offset:new ul(new Re(0,0))}}),ET=[{x:-2,y:-2},{x:2,y:-2},{x:-2,y:2},{x:2,y:2},{x:-1,y:-2},{x:1,y:-2},{x:-2,y:-1},{x:2,y:-1},{x:-2,y:1},{x:2,y:1},{x:-1,y:2},{x:1,y:2},{x:-2,y:0},{x:2,y:0},{x:0,y:-2},{x:0,y:2},{x:-1,y:-1},{x:1,y:-1},{x:-1,y:0},{x:1,y:0},{x:-1,y:1},{x:1,y:1},{x:0,y:-1},{x:0,y:1},{x:0,y:0}],ST=(s,e,t,n=!0)=>{const i=s.autoClear,r=s.getRenderTarget(),o=new Ge;s.getClearColor(o);const l=s.getClearAlpha(),c=[],u=d=>{const f=new En(t,t,{type:yt,magFilter:ft,minFilter:ft});c.push(f);const m=new Jn(-100,100,-100,100,-100,200);m.updateMatrix();const g=new gt;g.matrixWorldAutoUpdate=!1;for(const w of e){const x=w.clone();x.material=d,g.add(x)}s.autoClear=!1,s.setRenderTarget(f),s.setClearColor(0,0),s.clear();const b=d.uniforms.offset;if(!b)throw new Error("[baker] atlas material missing `offset` uniform");if(n)for(const w of ET)b.value.x=w.x*(1/t),b.value.y=w.y*(1/t),s.render(g,m);return b.value.x=0,b.value.y=0,s.render(g,m),f.texture};try{const d=u(bT),f=u(MT);return{positionTexture:d,normalTexture:f,dispose:()=>{for(const m of c)m.dispose();c.length=0}}}finally{s.setRenderTarget(r),s.autoClear=i,s.setClearColor(o,l)}},Xm=0,TT=1,AT=2,hf=2,Cc=1.25,df=1,Ji=6*4+4+4,hl=65535,CT=Math.pow(2,-24),Pc=Symbol("SKIP_GENERATION");function jm(s){return s.index?s.index.count:s.attributes.position.count}function Or(s){return jm(s)/3}function qm(s,e=ArrayBuffer){return s>65535?new Uint32Array(new e(4*s)):new Uint16Array(new e(2*s))}function PT(s,e){if(!s.index){const t=s.attributes.position.count,n=e.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,i=qm(t,n);s.setIndex(new Rt(i,1));for(let r=0;r<t;r++)i[r]=r}}function Ym(s){const e=Or(s),t=s.drawRange,n=t.start/3,i=(t.start+t.count)/3,r=Math.max(0,n),o=Math.min(e,i)-r;return[{offset:Math.floor(r),count:Math.floor(o)}]}function Km(s){if(!s.groups||!s.groups.length)return Ym(s);const e=[],t=new Set,n=s.drawRange,i=n.start/3,r=(n.start+n.count)/3;for(const l of s.groups){const c=l.start/3,u=(l.start+l.count)/3;t.add(Math.max(i,c)),t.add(Math.min(r,u))}const o=Array.from(t.values()).sort((l,c)=>l-c);for(let l=0;l<o.length-1;l++){const c=o[l],u=o[l+1];e.push({offset:Math.floor(c),count:Math.floor(u-c)})}return e}function RT(s){if(s.groups.length===0)return!1;const e=Or(s),t=Km(s).sort((r,o)=>r.offset-o.offset),n=t[t.length-1];n.count=Math.min(e-n.offset,n.count);let i=0;return t.forEach(({count:r})=>i+=r),e!==i}function Rc(s,e,t,n,i){let r=1/0,o=1/0,l=1/0,c=-1/0,u=-1/0,d=-1/0,f=1/0,m=1/0,g=1/0,b=-1/0,w=-1/0,x=-1/0;for(let v=e*6,M=(e+t)*6;v<M;v+=6){const y=s[v+0],S=s[v+1],C=y-S,P=y+S;C<r&&(r=C),P>c&&(c=P),y<f&&(f=y),y>b&&(b=y);const T=s[v+2],I=s[v+3],B=T-I,E=T+I;B<o&&(o=B),E>u&&(u=E),T<m&&(m=T),T>w&&(w=T);const R=s[v+4],k=s[v+5],W=R-k,U=R+k;W<l&&(l=W),U>d&&(d=U),R<g&&(g=R),R>x&&(x=R)}n[0]=r,n[1]=o,n[2]=l,n[3]=c,n[4]=u,n[5]=d,i[0]=f,i[1]=m,i[2]=g,i[3]=b,i[4]=w,i[5]=x}function LT(s,e=null,t=null,n=null){const i=s.attributes.position,r=s.index?s.index.array:null,o=Or(s),l=i.normalized;let c;e===null?(c=new Float32Array(o*6*4),t=0,n=o):(c=e,t=t||0,n=n||o);const u=i.array,d=i.offset||0;let f=3;i.isInterleavedBufferAttribute&&(f=i.data.stride);const m=["getX","getY","getZ"];for(let g=t;g<t+n;g++){const b=g*3,w=g*6;let x=b+0,v=b+1,M=b+2;r&&(x=r[x],v=r[v],M=r[M]),l||(x=x*f+d,v=v*f+d,M=M*f+d);for(let y=0;y<3;y++){let S,C,P;l?(S=i[m[y]](x),C=i[m[y]](v),P=i[m[y]](M)):(S=u[x+y],C=u[v+y],P=u[M+y]);let T=S;C<T&&(T=C),P<T&&(T=P);let I=S;C>I&&(I=C),P>I&&(I=P);const B=(I-T)/2,E=y*2;c[w+E+0]=T+B,c[w+E+1]=B+(Math.abs(T)+B)*CT}}return c}function Ft(s,e,t){return t.min.x=e[s],t.min.y=e[s+1],t.min.z=e[s+2],t.max.x=e[s+3],t.max.y=e[s+4],t.max.z=e[s+5],t}function pf(s){let e=-1,t=-1/0;for(let n=0;n<3;n++){const i=s[n+3]-s[n];i>t&&(t=i,e=n)}return e}function ff(s,e){e.set(s)}function mf(s,e,t){let n,i;for(let r=0;r<3;r++){const o=r+3;n=s[r],i=e[r],t[r]=n<i?n:i,n=s[o],i=e[o],t[o]=n>i?n:i}}function Ta(s,e,t){for(let n=0;n<3;n++){const i=e[s+2*n],r=e[s+2*n+1],o=i-r,l=i+r;o<t[n]&&(t[n]=o),l>t[n+3]&&(t[n+3]=l)}}function uo(s){const e=s[3]-s[0],t=s[4]-s[1],n=s[5]-s[2];return 2*(e*t+t*n+n*e)}const Mi=32,IT=(s,e)=>s.candidate-e.candidate,ji=new Array(Mi).fill().map(()=>({count:0,bounds:new Float32Array(6),rightCacheBounds:new Float32Array(6),leftCacheBounds:new Float32Array(6),candidate:0})),Aa=new Float32Array(6);function DT(s,e,t,n,i,r){let o=-1,l=0;if(r===Xm)o=pf(e),o!==-1&&(l=(e[o]+e[o+3])/2);else if(r===TT)o=pf(s),o!==-1&&(l=NT(t,n,i,o));else if(r===AT){const c=uo(s);let u=Cc*i;const d=n*6,f=(n+i)*6;for(let m=0;m<3;m++){const g=e[m],x=(e[m+3]-g)/Mi;if(i<Mi/4){const v=[...ji];v.length=i;let M=0;for(let S=d;S<f;S+=6,M++){const C=v[M];C.candidate=t[S+2*m],C.count=0;const{bounds:P,leftCacheBounds:T,rightCacheBounds:I}=C;for(let B=0;B<3;B++)I[B]=1/0,I[B+3]=-1/0,T[B]=1/0,T[B+3]=-1/0,P[B]=1/0,P[B+3]=-1/0;Ta(S,t,P)}v.sort(IT);let y=i;for(let S=0;S<y;S++){const C=v[S];for(;S+1<y&&v[S+1].candidate===C.candidate;)v.splice(S+1,1),y--}for(let S=d;S<f;S+=6){const C=t[S+2*m];for(let P=0;P<y;P++){const T=v[P];C>=T.candidate?Ta(S,t,T.rightCacheBounds):(Ta(S,t,T.leftCacheBounds),T.count++)}}for(let S=0;S<y;S++){const C=v[S],P=C.count,T=i-C.count,I=C.leftCacheBounds,B=C.rightCacheBounds;let E=0;P!==0&&(E=uo(I)/c);let R=0;T!==0&&(R=uo(B)/c);const k=df+Cc*(E*P+R*T);k<u&&(o=m,u=k,l=C.candidate)}}else{for(let y=0;y<Mi;y++){const S=ji[y];S.count=0,S.candidate=g+x+y*x;const C=S.bounds;for(let P=0;P<3;P++)C[P]=1/0,C[P+3]=-1/0}for(let y=d;y<f;y+=6){let P=~~((t[y+2*m]-g)/x);P>=Mi&&(P=Mi-1);const T=ji[P];T.count++,Ta(y,t,T.bounds)}const v=ji[Mi-1];ff(v.bounds,v.rightCacheBounds);for(let y=Mi-2;y>=0;y--){const S=ji[y],C=ji[y+1];mf(S.bounds,C.rightCacheBounds,S.rightCacheBounds)}let M=0;for(let y=0;y<Mi-1;y++){const S=ji[y],C=S.count,P=S.bounds,I=ji[y+1].rightCacheBounds;C!==0&&(M===0?ff(P,Aa):mf(P,Aa,Aa)),M+=C;let B=0,E=0;M!==0&&(B=uo(Aa)/c);const R=i-M;R!==0&&(E=uo(I)/c);const k=df+Cc*(B*M+E*R);k<u&&(o=m,u=k,l=S.candidate)}}}}else console.warn(`MeshBVH: Invalid build strategy value ${r} used.`);return{axis:o,pos:l}}function NT(s,e,t,n){let i=0;for(let r=e,o=e+t;r<o;r++)i+=s[r*6+n*2];return i/t}class Lc{constructor(){this.boundingData=new Float32Array(6)}}function UT(s,e,t,n,i,r){let o=n,l=n+i-1;const c=r.pos,u=r.axis*2;for(;;){for(;o<=l&&t[o*6+u]<c;)o++;for(;o<=l&&t[l*6+u]>=c;)l--;if(o<l){for(let d=0;d<3;d++){let f=e[o*3+d];e[o*3+d]=e[l*3+d],e[l*3+d]=f}for(let d=0;d<6;d++){let f=t[o*6+d];t[o*6+d]=t[l*6+d],t[l*6+d]=f}o++,l--}else return o}}function FT(s,e,t,n,i,r){let o=n,l=n+i-1;const c=r.pos,u=r.axis*2;for(;;){for(;o<=l&&t[o*6+u]<c;)o++;for(;o<=l&&t[l*6+u]>=c;)l--;if(o<l){let d=s[o];s[o]=s[l],s[l]=d;for(let f=0;f<6;f++){let m=t[o*6+f];t[o*6+f]=t[l*6+f],t[l*6+f]=m}o++,l--}else return o}}function _n(s,e){return e[s+15]===65535}function Mn(s,e){return e[s+6]}function Pn(s,e){return e[s+14]}function Bn(s){return s+8}function Rn(s,e){return e[s+6]}function Vu(s,e){return e[s+7]}let $m,yo,Xa,Zm;const OT=Math.pow(2,32);function lu(s){return"count"in s?1:1+lu(s.left)+lu(s.right)}function BT(s,e,t){return $m=new Float32Array(t),yo=new Uint32Array(t),Xa=new Uint16Array(t),Zm=new Uint8Array(t),cu(s,e)}function cu(s,e){const t=s/4,n=s/2,i="count"in e,r=e.boundingData;for(let o=0;o<6;o++)$m[t+o]=r[o];if(i)if(e.buffer){const o=e.buffer;Zm.set(new Uint8Array(o),s);for(let l=s,c=s+o.byteLength;l<c;l+=Ji){const u=l/2;_n(u,Xa)||(yo[l/4+6]+=t)}return s+o.byteLength}else{const o=e.offset,l=e.count;return yo[t+6]=o,Xa[n+14]=l,Xa[n+15]=hl,s+Ji}else{const o=e.left,l=e.right,c=e.splitAxis;let u;if(u=cu(s+Ji,o),u/4>OT)throw new Error("MeshBVH: Cannot store child pointer greater than 32 bits.");return yo[t+6]=u/4,u=cu(u,l),yo[t+7]=c,u}}function kT(s,e){const t=(s.index?s.index.count:s.attributes.position.count)/3,n=t>2**16,i=n?4:2,r=e?new SharedArrayBuffer(t*i):new ArrayBuffer(t*i),o=n?new Uint32Array(r):new Uint16Array(r);for(let l=0,c=o.length;l<c;l++)o[l]=l;return o}function VT(s,e,t,n,i){const{maxDepth:r,verbose:o,maxLeafTris:l,strategy:c,onProgress:u,indirect:d}=i,f=s._indirectBuffer,m=s.geometry,g=m.index?m.index.array:null,b=d?FT:UT,w=Or(m),x=new Float32Array(6);let v=!1;const M=new Lc;return Rc(e,t,n,M.boundingData,x),S(M,t,n,x),M;function y(C){u&&u(C/w)}function S(C,P,T,I=null,B=0){if(!v&&B>=r&&(v=!0,o&&(console.warn(`MeshBVH: Max depth of ${r} reached when generating BVH. Consider increasing maxDepth.`),console.warn(m))),T<=l||B>=r)return y(P+T),C.offset=P,C.count=T,C;const E=DT(C.boundingData,I,e,P,T,c);if(E.axis===-1)return y(P+T),C.offset=P,C.count=T,C;const R=b(f,g,e,P,T,E);if(R===P||R===P+T)y(P+T),C.offset=P,C.count=T;else{C.splitAxis=E.axis;const k=new Lc,W=P,U=R-P;C.left=k,Rc(e,W,U,k.boundingData,x),S(k,W,U,x,B+1);const H=new Lc,G=R,X=T-U;C.right=H,Rc(e,G,X,H.boundingData,x),S(H,G,X,x,B+1)}return C}}function zT(s,e){const t=s.geometry;e.indirect&&(s._indirectBuffer=kT(t,e.useSharedArrayBuffer),RT(t)&&!e.verbose&&console.warn('MeshBVH: Provided geometry contains groups that do not fully span the vertex contents while using the "indirect" option. BVH may incorrectly report intersections on unrendered portions of the geometry.')),s._indirectBuffer||PT(t,e);const n=e.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,i=LT(t),r=e.indirect?Ym(t):Km(t);s._roots=r.map(o=>{const l=VT(s,i,o.offset,o.count,e),c=lu(l),u=new n(Ji*c);return BT(0,l,u),u})}class ai{constructor(){this.min=1/0,this.max=-1/0}setFromPointsField(e,t){let n=1/0,i=-1/0;for(let r=0,o=e.length;r<o;r++){const c=e[r][t];n=c<n?c:n,i=c>i?c:i}this.min=n,this.max=i}setFromPoints(e,t){let n=1/0,i=-1/0;for(let r=0,o=t.length;r<o;r++){const l=t[r],c=e.dot(l);n=c<n?c:n,i=c>i?c:i}this.min=n,this.max=i}isSeparated(e){return this.min>e.max||e.min>this.max}}ai.prototype.setFromBox=function(){const s=new D;return function(t,n){const i=n.min,r=n.max;let o=1/0,l=-1/0;for(let c=0;c<=1;c++)for(let u=0;u<=1;u++)for(let d=0;d<=1;d++){s.x=i.x*c+r.x*(1-c),s.y=i.y*u+r.y*(1-u),s.z=i.z*d+r.z*(1-d);const f=t.dot(s);o=Math.min(f,o),l=Math.max(f,l)}this.min=o,this.max=l}}();(function(){const s=new ai;return function(t,n){const i=t.points,r=t.satAxes,o=t.satBounds,l=n.points,c=n.satAxes,u=n.satBounds;for(let d=0;d<3;d++){const f=o[d],m=r[d];if(s.setFromPoints(m,l),f.isSeparated(s))return!1}for(let d=0;d<3;d++){const f=u[d],m=c[d];if(s.setFromPoints(m,i),f.isSeparated(s))return!1}}})();const HT=function(){const s=new D,e=new D,t=new D;return function(i,r,o){const l=i.start,c=s,u=r.start,d=e;t.subVectors(l,u),s.subVectors(i.end,i.start),e.subVectors(r.end,r.start);const f=t.dot(d),m=d.dot(c),g=d.dot(d),b=t.dot(c),x=c.dot(c)*g-m*m;let v,M;x!==0?v=(f*m-b*g)/x:v=0,M=(f+v*m)/g,o.x=v,o.y=M}}(),zu=function(){const s=new Re,e=new D,t=new D;return function(i,r,o,l){HT(i,r,s);let c=s.x,u=s.y;if(c>=0&&c<=1&&u>=0&&u<=1){i.at(c,o),r.at(u,l);return}else if(c>=0&&c<=1){u<0?r.at(0,l):r.at(1,l),i.closestPointToPoint(l,!0,o);return}else if(u>=0&&u<=1){c<0?i.at(0,o):i.at(1,o),r.closestPointToPoint(o,!0,l);return}else{let d;c<0?d=i.start:d=i.end;let f;u<0?f=r.start:f=r.end;const m=e,g=t;if(i.closestPointToPoint(f,!0,e),r.closestPointToPoint(d,!0,t),m.distanceToSquared(f)<=g.distanceToSquared(d)){o.copy(m),l.copy(f);return}else{o.copy(d),l.copy(g);return}}}}(),GT=function(){const s=new D,e=new D,t=new ni,n=new Ai;return function(r,o){const{radius:l,center:c}=r,{a:u,b:d,c:f}=o;if(n.start=u,n.end=d,n.closestPointToPoint(c,!0,s).distanceTo(c)<=l||(n.start=u,n.end=f,n.closestPointToPoint(c,!0,s).distanceTo(c)<=l)||(n.start=d,n.end=f,n.closestPointToPoint(c,!0,s).distanceTo(c)<=l))return!0;const w=o.getPlane(t);if(Math.abs(w.distanceToPoint(c))<=l){const v=w.projectPoint(c,e);if(o.containsPoint(v))return!0}return!1}}(),WT=1e-15;function Ic(s){return Math.abs(s)<WT}class Zn extends vn{constructor(...e){super(...e),this.isExtendedTriangle=!0,this.satAxes=new Array(4).fill().map(()=>new D),this.satBounds=new Array(4).fill().map(()=>new ai),this.points=[this.a,this.b,this.c],this.sphere=new Qn,this.plane=new ni,this.needsUpdate=!0}intersectsSphere(e){return GT(e,this)}update(){const e=this.a,t=this.b,n=this.c,i=this.points,r=this.satAxes,o=this.satBounds,l=r[0],c=o[0];this.getNormal(l),c.setFromPoints(l,i);const u=r[1],d=o[1];u.subVectors(e,t),d.setFromPoints(u,i);const f=r[2],m=o[2];f.subVectors(t,n),m.setFromPoints(f,i);const g=r[3],b=o[3];g.subVectors(n,e),b.setFromPoints(g,i),this.sphere.setFromPoints(this.points),this.plane.setFromNormalAndCoplanarPoint(l,e),this.needsUpdate=!1}}Zn.prototype.closestPointToSegment=function(){const s=new D,e=new D,t=new Ai;return function(i,r=null,o=null){const{start:l,end:c}=i,u=this.points;let d,f=1/0;for(let m=0;m<3;m++){const g=(m+1)%3;t.start.copy(u[m]),t.end.copy(u[g]),zu(t,i,s,e),d=s.distanceToSquared(e),d<f&&(f=d,r&&r.copy(s),o&&o.copy(e))}return this.closestPointToPoint(l,s),d=l.distanceToSquared(s),d<f&&(f=d,r&&r.copy(s),o&&o.copy(l)),this.closestPointToPoint(c,s),d=c.distanceToSquared(s),d<f&&(f=d,r&&r.copy(s),o&&o.copy(c)),Math.sqrt(f)}}();Zn.prototype.intersectsTriangle=function(){const s=new Zn,e=new Array(3),t=new Array(3),n=new ai,i=new ai,r=new D,o=new D,l=new D,c=new D,u=new D,d=new Ai,f=new Ai,m=new Ai,g=new D;function b(w,x,v){const M=w.points;let y=0,S=-1;for(let C=0;C<3;C++){const{start:P,end:T}=d;P.copy(M[C]),T.copy(M[(C+1)%3]),d.delta(o);const I=Ic(x.distanceToPoint(P));if(Ic(x.normal.dot(o))&&I){v.copy(d),y=2;break}const B=x.intersectLine(d,g);if(!B&&I&&g.copy(P),(B||I)&&!Ic(g.distanceTo(T))){if(y<=1)(y===1?v.start:v.end).copy(g),I&&(S=y);else if(y>=2){(S===1?v.start:v.end).copy(g),y=2;break}if(y++,y===2&&S===-1)break}}return y}return function(x,v=null,M=!1){this.needsUpdate&&this.update(),x.isExtendedTriangle?x.needsUpdate&&x.update():(s.copy(x),s.update(),x=s);const y=this.plane,S=x.plane;if(Math.abs(y.normal.dot(S.normal))>1-1e-10){const C=this.satBounds,P=this.satAxes;t[0]=x.a,t[1]=x.b,t[2]=x.c;for(let B=0;B<4;B++){const E=C[B],R=P[B];if(n.setFromPoints(R,t),E.isSeparated(n))return!1}const T=x.satBounds,I=x.satAxes;e[0]=this.a,e[1]=this.b,e[2]=this.c;for(let B=0;B<4;B++){const E=T[B],R=I[B];if(n.setFromPoints(R,e),E.isSeparated(n))return!1}for(let B=0;B<4;B++){const E=P[B];for(let R=0;R<4;R++){const k=I[R];if(r.crossVectors(E,k),n.setFromPoints(r,e),i.setFromPoints(r,t),n.isSeparated(i))return!1}}return v&&(M||console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."),v.start.set(0,0,0),v.end.set(0,0,0)),!0}else{const C=b(this,S,f);if(C===1&&x.containsPoint(f.end))return v&&(v.start.copy(f.end),v.end.copy(f.end)),!0;if(C!==2)return!1;const P=b(x,y,m);if(P===1&&this.containsPoint(m.end))return v&&(v.start.copy(m.end),v.end.copy(m.end)),!0;if(P!==2)return!1;if(f.delta(l),m.delta(c),l.dot(c)<0){let W=m.start;m.start=m.end,m.end=W}const T=f.start.dot(l),I=f.end.dot(l),B=m.start.dot(l),E=m.end.dot(l),R=I<B,k=T<E;return T!==E&&B!==I&&R===k?!1:(v&&(u.subVectors(f.start,m.start),u.dot(l)>0?v.start.copy(f.start):v.start.copy(m.start),u.subVectors(f.end,m.end),u.dot(l)<0?v.end.copy(f.end):v.end.copy(m.end)),!0)}}}();Zn.prototype.distanceToPoint=function(){const s=new D;return function(t){return this.closestPointToPoint(t,s),t.distanceTo(s)}}();Zn.prototype.distanceToTriangle=function(){const s=new D,e=new D,t=["a","b","c"],n=new Ai,i=new Ai;return function(o,l=null,c=null){const u=l||c?n:null;if(this.intersectsTriangle(o,u))return(l||c)&&(l&&u.getCenter(l),c&&u.getCenter(c)),0;let d=1/0;for(let f=0;f<3;f++){let m;const g=t[f],b=o[g];this.closestPointToPoint(b,s),m=b.distanceToSquared(s),m<d&&(d=m,l&&l.copy(s),c&&c.copy(b));const w=this[g];o.closestPointToPoint(w,s),m=w.distanceToSquared(s),m<d&&(d=m,l&&l.copy(w),c&&c.copy(s))}for(let f=0;f<3;f++){const m=t[f],g=t[(f+1)%3];n.set(this[m],this[g]);for(let b=0;b<3;b++){const w=t[b],x=t[(b+1)%3];i.set(o[w],o[x]),zu(n,i,s,e);const v=s.distanceToSquared(e);v<d&&(d=v,l&&l.copy(s),c&&c.copy(e))}}return Math.sqrt(d)}}();class yn{constructor(e,t,n){this.isOrientedBox=!0,this.min=new D,this.max=new D,this.matrix=new Xe,this.invMatrix=new Xe,this.points=new Array(8).fill().map(()=>new D),this.satAxes=new Array(3).fill().map(()=>new D),this.satBounds=new Array(3).fill().map(()=>new ai),this.alignedSatBounds=new Array(3).fill().map(()=>new ai),this.needsUpdate=!1,e&&this.min.copy(e),t&&this.max.copy(t),n&&this.matrix.copy(n)}set(e,t,n){this.min.copy(e),this.max.copy(t),this.matrix.copy(n),this.needsUpdate=!0}copy(e){this.min.copy(e.min),this.max.copy(e.max),this.matrix.copy(e.matrix),this.needsUpdate=!0}}yn.prototype.update=function(){return function(){const e=this.matrix,t=this.min,n=this.max,i=this.points;for(let u=0;u<=1;u++)for(let d=0;d<=1;d++)for(let f=0;f<=1;f++){const m=1*u|2*d|4*f,g=i[m];g.x=u?n.x:t.x,g.y=d?n.y:t.y,g.z=f?n.z:t.z,g.applyMatrix4(e)}const r=this.satBounds,o=this.satAxes,l=i[0];for(let u=0;u<3;u++){const d=o[u],f=r[u],m=1<<u,g=i[m];d.subVectors(l,g),f.setFromPoints(d,i)}const c=this.alignedSatBounds;c[0].setFromPointsField(i,"x"),c[1].setFromPointsField(i,"y"),c[2].setFromPointsField(i,"z"),this.invMatrix.copy(this.matrix).invert(),this.needsUpdate=!1}}();yn.prototype.intersectsBox=function(){const s=new ai;return function(t){this.needsUpdate&&this.update();const n=t.min,i=t.max,r=this.satBounds,o=this.satAxes,l=this.alignedSatBounds;if(s.min=n.x,s.max=i.x,l[0].isSeparated(s)||(s.min=n.y,s.max=i.y,l[1].isSeparated(s))||(s.min=n.z,s.max=i.z,l[2].isSeparated(s)))return!1;for(let c=0;c<3;c++){const u=o[c],d=r[c];if(s.setFromBox(u,t),d.isSeparated(s))return!1}return!0}}();yn.prototype.intersectsTriangle=function(){const s=new Zn,e=new Array(3),t=new ai,n=new ai,i=new D;return function(o){this.needsUpdate&&this.update(),o.isExtendedTriangle?o.needsUpdate&&o.update():(s.copy(o),s.update(),o=s);const l=this.satBounds,c=this.satAxes;e[0]=o.a,e[1]=o.b,e[2]=o.c;for(let m=0;m<3;m++){const g=l[m],b=c[m];if(t.setFromPoints(b,e),g.isSeparated(t))return!1}const u=o.satBounds,d=o.satAxes,f=this.points;for(let m=0;m<3;m++){const g=u[m],b=d[m];if(t.setFromPoints(b,f),g.isSeparated(t))return!1}for(let m=0;m<3;m++){const g=c[m];for(let b=0;b<4;b++){const w=d[b];if(i.crossVectors(g,w),t.setFromPoints(i,e),n.setFromPoints(i,f),t.isSeparated(n))return!1}}return!0}}();yn.prototype.closestPointToPoint=function(){return function(e,t){return this.needsUpdate&&this.update(),t.copy(e).applyMatrix4(this.invMatrix).clamp(this.min,this.max).applyMatrix4(this.matrix),t}}();yn.prototype.distanceToPoint=function(){const s=new D;return function(t){return this.closestPointToPoint(t,s),t.distanceTo(s)}}();yn.prototype.distanceToBox=function(){const s=["x","y","z"],e=new Array(12).fill().map(()=>new Ai),t=new Array(12).fill().map(()=>new Ai),n=new D,i=new D;return function(o,l=0,c=null,u=null){if(this.needsUpdate&&this.update(),this.intersectsBox(o))return(c||u)&&(o.getCenter(i),this.closestPointToPoint(i,n),o.closestPointToPoint(n,i),c&&c.copy(n),u&&u.copy(i)),0;const d=l*l,f=o.min,m=o.max,g=this.points;let b=1/0;for(let x=0;x<8;x++){const v=g[x];i.copy(v).clamp(f,m);const M=v.distanceToSquared(i);if(M<b&&(b=M,c&&c.copy(v),u&&u.copy(i),M<d))return Math.sqrt(M)}let w=0;for(let x=0;x<3;x++)for(let v=0;v<=1;v++)for(let M=0;M<=1;M++){const y=(x+1)%3,S=(x+2)%3,C=v<<y|M<<S,P=1<<x|v<<y|M<<S,T=g[C],I=g[P];e[w].set(T,I);const E=s[x],R=s[y],k=s[S],W=t[w],U=W.start,H=W.end;U[E]=f[E],U[R]=v?f[R]:m[R],U[k]=M?f[k]:m[R],H[E]=m[E],H[R]=v?f[R]:m[R],H[k]=M?f[k]:m[R],w++}for(let x=0;x<=1;x++)for(let v=0;v<=1;v++)for(let M=0;M<=1;M++){i.x=x?m.x:f.x,i.y=v?m.y:f.y,i.z=M?m.z:f.z,this.closestPointToPoint(i,n);const y=i.distanceToSquared(n);if(y<b&&(b=y,c&&c.copy(n),u&&u.copy(i),y<d))return Math.sqrt(y)}for(let x=0;x<12;x++){const v=e[x];for(let M=0;M<12;M++){const y=t[M];zu(v,y,n,i);const S=n.distanceToSquared(i);if(S<b&&(b=S,c&&c.copy(n),u&&u.copy(i),S<d))return Math.sqrt(S)}}return Math.sqrt(b)}}();class Hu{constructor(e){this._getNewPrimitive=e,this._primitives=[]}getPrimitive(){const e=this._primitives;return e.length===0?this._getNewPrimitive():e.pop()}releasePrimitive(e){this._primitives.push(e)}}class XT extends Hu{constructor(){super(()=>new Zn)}}const kn=new XT;class jT{constructor(){this.float32Array=null,this.uint16Array=null,this.uint32Array=null;const e=[];let t=null;this.setBuffer=n=>{t&&e.push(t),t=n,this.float32Array=new Float32Array(n),this.uint16Array=new Uint16Array(n),this.uint32Array=new Uint32Array(n)},this.clearBuffer=()=>{t=null,this.float32Array=null,this.uint16Array=null,this.uint32Array=null,e.length!==0&&this.setBuffer(e.pop())}}}const Lt=new jT;let Zi,xr;const ir=[],Ca=new Hu(()=>new zt);function qT(s,e,t,n,i,r){Zi=Ca.getPrimitive(),xr=Ca.getPrimitive(),ir.push(Zi,xr),Lt.setBuffer(s._roots[e]);const o=uu(0,s.geometry,t,n,i,r);Lt.clearBuffer(),Ca.releasePrimitive(Zi),Ca.releasePrimitive(xr),ir.pop(),ir.pop();const l=ir.length;return l>0&&(xr=ir[l-1],Zi=ir[l-2]),o}function uu(s,e,t,n,i=null,r=0,o=0){const{float32Array:l,uint16Array:c,uint32Array:u}=Lt;let d=s*2;if(_n(d,c)){const m=Mn(s,u),g=Pn(d,c);return Ft(s,l,Zi),n(m,g,!1,o,r+s,Zi)}else{let E=function(k){const{uint16Array:W,uint32Array:U}=Lt;let H=k*2;for(;!_n(H,W);)k=Bn(k),H=k*2;return Mn(k,U)},R=function(k){const{uint16Array:W,uint32Array:U}=Lt;let H=k*2;for(;!_n(H,W);)k=Rn(k,U),H=k*2;return Mn(k,U)+Pn(H,W)};const m=Bn(s),g=Rn(s,u);let b=m,w=g,x,v,M,y;if(i&&(M=Zi,y=xr,Ft(b,l,M),Ft(w,l,y),x=i(M),v=i(y),v<x)){b=g,w=m;const k=x;x=v,v=k,M=y}M||(M=Zi,Ft(b,l,M));const S=_n(b*2,c),C=t(M,S,x,o+1,r+b);let P;if(C===hf){const k=E(b),U=R(b)-k;P=n(k,U,!0,o+1,r+b,M)}else P=C&&uu(b,e,t,n,i,r,o+1);if(P)return!0;y=xr,Ft(w,l,y);const T=_n(w*2,c),I=t(y,T,v,o+1,r+w);let B;if(I===hf){const k=E(w),U=R(w)-k;B=n(k,U,!0,o+1,r+w,y)}else B=I&&uu(w,e,t,n,i,r,o+1);return!!B}}const ho=new D,Dc=new D;function YT(s,e,t={},n=0,i=1/0){const r=n*n,o=i*i;let l=1/0,c=null;if(s.shapecast({boundsTraverseOrder:d=>(ho.copy(e).clamp(d.min,d.max),ho.distanceToSquared(e)),intersectsBounds:(d,f,m)=>m<l&&m<o,intersectsTriangle:(d,f)=>{d.closestPointToPoint(e,ho);const m=e.distanceToSquared(ho);return m<l&&(Dc.copy(ho),l=m,c=f),m<r}}),l===1/0)return null;const u=Math.sqrt(l);return t.point?t.point.copy(Dc):t.point=Dc.clone(),t.distance=u,t.faceIndex=c,t}const sr=new D,rr=new D,or=new D,Pa=new Re,Ra=new Re,La=new Re,gf=new D,vf=new D,_f=new D,Ia=new D;function KT(s,e,t,n,i,r){let o;return r===bn?o=s.intersectTriangle(n,t,e,!0,i):o=s.intersectTriangle(e,t,n,r!==gn,i),o===null?null:{distance:s.origin.distanceTo(i),point:i.clone()}}function $T(s,e,t,n,i,r,o,l,c){sr.fromBufferAttribute(e,r),rr.fromBufferAttribute(e,o),or.fromBufferAttribute(e,l);const u=KT(s,sr,rr,or,Ia,c);if(u){n&&(Pa.fromBufferAttribute(n,r),Ra.fromBufferAttribute(n,o),La.fromBufferAttribute(n,l),u.uv=vn.getInterpolation(Ia,sr,rr,or,Pa,Ra,La,new Re)),i&&(Pa.fromBufferAttribute(i,r),Ra.fromBufferAttribute(i,o),La.fromBufferAttribute(i,l),u.uv1=vn.getInterpolation(Ia,sr,rr,or,Pa,Ra,La,new Re)),t&&(gf.fromBufferAttribute(t,r),vf.fromBufferAttribute(t,o),_f.fromBufferAttribute(t,l),u.normal=vn.getInterpolation(Ia,sr,rr,or,gf,vf,_f,new D),u.normal.dot(s.direction)>0&&u.normal.multiplyScalar(-1));const d={a:r,b:o,c:l,normal:new D,materialIndex:0};vn.getNormal(sr,rr,or,d.normal),u.face=d,u.faceIndex=r}return u}function dl(s,e,t,n,i){const r=n*3;let o=r+0,l=r+1,c=r+2;const u=s.index;s.index&&(o=u.getX(o),l=u.getX(l),c=u.getX(c));const{position:d,normal:f,uv:m,uv1:g}=s.attributes,b=$T(t,d,f,m,g,o,l,c,e);return b?(b.faceIndex=n,i&&i.push(b),b):null}function jt(s,e,t,n){const i=s.a,r=s.b,o=s.c;let l=e,c=e+1,u=e+2;t&&(l=t.getX(l),c=t.getX(c),u=t.getX(u)),i.x=n.getX(l),i.y=n.getY(l),i.z=n.getZ(l),r.x=n.getX(c),r.y=n.getY(c),r.z=n.getZ(c),o.x=n.getX(u),o.y=n.getY(u),o.z=n.getZ(u)}function ZT(s,e,t,n,i,r){const{geometry:o,_indirectBuffer:l}=s;for(let c=n,u=n+i;c<u;c++)dl(o,e,t,c,r)}function QT(s,e,t,n,i){const{geometry:r,_indirectBuffer:o}=s;let l=1/0,c=null;for(let u=n,d=n+i;u<d;u++){let f;f=dl(r,e,t,u),f&&f.distance<l&&(c=f,l=f.distance)}return c}function JT(s,e,t,n,i,r,o){const{geometry:l}=t,{index:c}=l,u=l.attributes.position;for(let d=s,f=e+s;d<f;d++){let m;if(m=d,jt(o,m*3,c,u),o.needsUpdate=!0,n(o,m,i,r))return!0}return!1}function eA(s,e=null){e&&Array.isArray(e)&&(e=new Set(e));const t=s.geometry,n=t.index?t.index.array:null,i=t.attributes.position;let r,o,l,c,u=0;const d=s._roots;for(let m=0,g=d.length;m<g;m++)r=d[m],o=new Uint32Array(r),l=new Uint16Array(r),c=new Float32Array(r),f(0,u),u+=r.byteLength;function f(m,g,b=!1){const w=m*2;if(l[w+15]===hl){const v=o[m+6],M=l[w+14];let y=1/0,S=1/0,C=1/0,P=-1/0,T=-1/0,I=-1/0;for(let B=3*v,E=3*(v+M);B<E;B++){let R=n[B];const k=i.getX(R),W=i.getY(R),U=i.getZ(R);k<y&&(y=k),k>P&&(P=k),W<S&&(S=W),W>T&&(T=W),U<C&&(C=U),U>I&&(I=U)}return c[m+0]!==y||c[m+1]!==S||c[m+2]!==C||c[m+3]!==P||c[m+4]!==T||c[m+5]!==I?(c[m+0]=y,c[m+1]=S,c[m+2]=C,c[m+3]=P,c[m+4]=T,c[m+5]=I,!0):!1}else{const v=m+8,M=o[m+6],y=v+g,S=M+g;let C=b,P=!1,T=!1;e?C||(P=e.has(y),T=e.has(S),C=!P&&!T):(P=!0,T=!0);const I=C||P,B=C||T;let E=!1;I&&(E=f(v,g,C));let R=!1;B&&(R=f(M,g,C));const k=E||R;if(k)for(let W=0;W<3;W++){const U=v+W,H=M+W,G=c[U],X=c[U+3],Q=c[H],K=c[H+3];c[m+W]=G<Q?G:Q,c[m+W+3]=X>K?X:K}return k}}}const xf=new zt;function es(s,e,t,n){return Ft(s,e,xf),t.intersectBox(xf,n)}function tA(s,e,t,n,i,r){const{geometry:o,_indirectBuffer:l}=s;for(let c=n,u=n+i;c<u;c++){let d=l?l[c]:c;dl(o,e,t,d,r)}}function nA(s,e,t,n,i){const{geometry:r,_indirectBuffer:o}=s;let l=1/0,c=null;for(let u=n,d=n+i;u<d;u++){let f;f=dl(r,e,t,o?o[u]:u),f&&f.distance<l&&(c=f,l=f.distance)}return c}function iA(s,e,t,n,i,r,o){const{geometry:l}=t,{index:c}=l,u=l.attributes.position;for(let d=s,f=e+s;d<f;d++){let m;if(m=t.resolveTriangleIndex(d),jt(o,m*3,c,u),o.needsUpdate=!0,n(o,m,i,r))return!0}return!1}const bf=new D;function sA(s,e,t,n,i){Lt.setBuffer(s._roots[e]),hu(0,s,t,n,i),Lt.clearBuffer()}function hu(s,e,t,n,i){const{float32Array:r,uint16Array:o,uint32Array:l}=Lt,c=s*2;if(_n(c,o)){const d=Mn(s,l),f=Pn(c,o);ZT(e,t,n,d,f,i)}else{const d=Bn(s);es(d,r,n,bf)&&hu(d,e,t,n,i);const f=Rn(s,l);es(f,r,n,bf)&&hu(f,e,t,n,i)}}const yf=new D,rA=["x","y","z"];function oA(s,e,t,n){Lt.setBuffer(s._roots[e]);const i=du(0,s,t,n);return Lt.clearBuffer(),i}function du(s,e,t,n){const{float32Array:i,uint16Array:r,uint32Array:o}=Lt;let l=s*2;if(_n(l,r)){const u=Mn(s,o),d=Pn(l,r);return QT(e,t,n,u,d)}else{const u=Vu(s,o),d=rA[u],m=n.direction[d]>=0;let g,b;m?(g=Bn(s),b=Rn(s,o)):(g=Rn(s,o),b=Bn(s));const x=es(g,i,n,yf)?du(g,e,t,n):null;if(x){const y=x.point[d];if(m?y<=i[b+u]:y>=i[b+u+3])return x}const M=es(b,i,n,yf)?du(b,e,t,n):null;return x&&M?x.distance<=M.distance?x:M:x||M||null}}const Da=new zt,ar=new Zn,lr=new Zn,po=new Xe,wf=new yn,Na=new yn;function aA(s,e,t,n){Lt.setBuffer(s._roots[e]);const i=pu(0,s,t,n);return Lt.clearBuffer(),i}function pu(s,e,t,n,i=null){const{float32Array:r,uint16Array:o,uint32Array:l}=Lt;let c=s*2;if(i===null&&(t.boundingBox||t.computeBoundingBox(),wf.set(t.boundingBox.min,t.boundingBox.max,n),i=wf),_n(c,o)){const d=e.geometry,f=d.index,m=d.attributes.position,g=t.index,b=t.attributes.position,w=Mn(s,l),x=Pn(c,o);if(po.copy(n).invert(),t.boundsTree)return Ft(s,r,Na),Na.matrix.copy(po),Na.needsUpdate=!0,t.boundsTree.shapecast({intersectsBounds:M=>Na.intersectsBox(M),intersectsTriangle:M=>{M.a.applyMatrix4(n),M.b.applyMatrix4(n),M.c.applyMatrix4(n),M.needsUpdate=!0;for(let y=w*3,S=(x+w)*3;y<S;y+=3)if(jt(lr,y,f,m),lr.needsUpdate=!0,M.intersectsTriangle(lr))return!0;return!1}});for(let v=w*3,M=(x+w)*3;v<M;v+=3){jt(ar,v,f,m),ar.a.applyMatrix4(po),ar.b.applyMatrix4(po),ar.c.applyMatrix4(po),ar.needsUpdate=!0;for(let y=0,S=g.count;y<S;y+=3)if(jt(lr,y,g,b),lr.needsUpdate=!0,ar.intersectsTriangle(lr))return!0}}else{const d=s+8,f=l[s+6];return Ft(d,r,Da),!!(i.intersectsBox(Da)&&pu(d,e,t,n,i)||(Ft(f,r,Da),i.intersectsBox(Da)&&pu(f,e,t,n,i)))}}const Ua=new Xe,Nc=new yn,fo=new yn,lA=new D,cA=new D,uA=new D,hA=new D;function dA(s,e,t,n={},i={},r=0,o=1/0){e.boundingBox||e.computeBoundingBox(),Nc.set(e.boundingBox.min,e.boundingBox.max,t),Nc.needsUpdate=!0;const l=s.geometry,c=l.attributes.position,u=l.index,d=e.attributes.position,f=e.index,m=kn.getPrimitive(),g=kn.getPrimitive();let b=lA,w=cA,x=null,v=null;i&&(x=uA,v=hA);let M=1/0,y=null,S=null;return Ua.copy(t).invert(),fo.matrix.copy(Ua),s.shapecast({boundsTraverseOrder:C=>Nc.distanceToBox(C),intersectsBounds:(C,P,T)=>T<M&&T<o?(P&&(fo.min.copy(C.min),fo.max.copy(C.max),fo.needsUpdate=!0),!0):!1,intersectsRange:(C,P)=>{if(e.boundsTree)return e.boundsTree.shapecast({boundsTraverseOrder:I=>fo.distanceToBox(I),intersectsBounds:(I,B,E)=>E<M&&E<o,intersectsRange:(I,B)=>{for(let E=I,R=I+B;E<R;E++){jt(g,3*E,f,d),g.a.applyMatrix4(t),g.b.applyMatrix4(t),g.c.applyMatrix4(t),g.needsUpdate=!0;for(let k=C,W=C+P;k<W;k++){jt(m,3*k,u,c),m.needsUpdate=!0;const U=m.distanceToTriangle(g,b,x);if(U<M&&(w.copy(b),v&&v.copy(x),M=U,y=k,S=E),U<r)return!0}}}});{const T=Or(e);for(let I=0,B=T;I<B;I++){jt(g,3*I,f,d),g.a.applyMatrix4(t),g.b.applyMatrix4(t),g.c.applyMatrix4(t),g.needsUpdate=!0;for(let E=C,R=C+P;E<R;E++){jt(m,3*E,u,c),m.needsUpdate=!0;const k=m.distanceToTriangle(g,b,x);if(k<M&&(w.copy(b),v&&v.copy(x),M=k,y=E,S=I),k<r)return!0}}}}}),kn.releasePrimitive(m),kn.releasePrimitive(g),M===1/0?null:(n.point?n.point.copy(w):n.point=w.clone(),n.distance=M,n.faceIndex=y,i&&(i.point?i.point.copy(v):i.point=v.clone(),i.point.applyMatrix4(Ua),w.applyMatrix4(Ua),i.distance=w.sub(i.point).length(),i.faceIndex=S),n)}function pA(s,e=null){e&&Array.isArray(e)&&(e=new Set(e));const t=s.geometry,n=t.index?t.index.array:null,i=t.attributes.position;let r,o,l,c,u=0;const d=s._roots;for(let m=0,g=d.length;m<g;m++)r=d[m],o=new Uint32Array(r),l=new Uint16Array(r),c=new Float32Array(r),f(0,u),u+=r.byteLength;function f(m,g,b=!1){const w=m*2;if(l[w+15]===hl){const v=o[m+6],M=l[w+14];let y=1/0,S=1/0,C=1/0,P=-1/0,T=-1/0,I=-1/0;for(let B=v,E=v+M;B<E;B++){const R=3*s.resolveTriangleIndex(B);for(let k=0;k<3;k++){let W=R+k;W=n?n[W]:W;const U=i.getX(W),H=i.getY(W),G=i.getZ(W);U<y&&(y=U),U>P&&(P=U),H<S&&(S=H),H>T&&(T=H),G<C&&(C=G),G>I&&(I=G)}}return c[m+0]!==y||c[m+1]!==S||c[m+2]!==C||c[m+3]!==P||c[m+4]!==T||c[m+5]!==I?(c[m+0]=y,c[m+1]=S,c[m+2]=C,c[m+3]=P,c[m+4]=T,c[m+5]=I,!0):!1}else{const v=m+8,M=o[m+6],y=v+g,S=M+g;let C=b,P=!1,T=!1;e?C||(P=e.has(y),T=e.has(S),C=!P&&!T):(P=!0,T=!0);const I=C||P,B=C||T;let E=!1;I&&(E=f(v,g,C));let R=!1;B&&(R=f(M,g,C));const k=E||R;if(k)for(let W=0;W<3;W++){const U=v+W,H=M+W,G=c[U],X=c[U+3],Q=c[H],K=c[H+3];c[m+W]=G<Q?G:Q,c[m+W+3]=X>K?X:K}return k}}}const Mf=new D;function fA(s,e,t,n,i){Lt.setBuffer(s._roots[e]),fu(0,s,t,n,i),Lt.clearBuffer()}function fu(s,e,t,n,i){const{float32Array:r,uint16Array:o,uint32Array:l}=Lt,c=s*2;if(_n(c,o)){const d=Mn(s,l),f=Pn(c,o);tA(e,t,n,d,f,i)}else{const d=Bn(s);es(d,r,n,Mf)&&fu(d,e,t,n,i);const f=Rn(s,l);es(f,r,n,Mf)&&fu(f,e,t,n,i)}}const Ef=new D,mA=["x","y","z"];function gA(s,e,t,n){Lt.setBuffer(s._roots[e]);const i=mu(0,s,t,n);return Lt.clearBuffer(),i}function mu(s,e,t,n){const{float32Array:i,uint16Array:r,uint32Array:o}=Lt;let l=s*2;if(_n(l,r)){const u=Mn(s,o),d=Pn(l,r);return nA(e,t,n,u,d)}else{const u=Vu(s,o),d=mA[u],m=n.direction[d]>=0;let g,b;m?(g=Bn(s),b=Rn(s,o)):(g=Rn(s,o),b=Bn(s));const x=es(g,i,n,Ef)?mu(g,e,t,n):null;if(x){const y=x.point[d];if(m?y<=i[b+u]:y>=i[b+u+3])return x}const M=es(b,i,n,Ef)?mu(b,e,t,n):null;return x&&M?x.distance<=M.distance?x:M:x||M||null}}const Fa=new zt,cr=new Zn,ur=new Zn,mo=new Xe,Sf=new yn,Oa=new yn;function vA(s,e,t,n){Lt.setBuffer(s._roots[e]);const i=gu(0,s,t,n);return Lt.clearBuffer(),i}function gu(s,e,t,n,i=null){const{float32Array:r,uint16Array:o,uint32Array:l}=Lt;let c=s*2;if(i===null&&(t.boundingBox||t.computeBoundingBox(),Sf.set(t.boundingBox.min,t.boundingBox.max,n),i=Sf),_n(c,o)){const d=e.geometry,f=d.index,m=d.attributes.position,g=t.index,b=t.attributes.position,w=Mn(s,l),x=Pn(c,o);if(mo.copy(n).invert(),t.boundsTree)return Ft(s,r,Oa),Oa.matrix.copy(mo),Oa.needsUpdate=!0,t.boundsTree.shapecast({intersectsBounds:M=>Oa.intersectsBox(M),intersectsTriangle:M=>{M.a.applyMatrix4(n),M.b.applyMatrix4(n),M.c.applyMatrix4(n),M.needsUpdate=!0;for(let y=w,S=x+w;y<S;y++)if(jt(ur,3*e.resolveTriangleIndex(y),f,m),ur.needsUpdate=!0,M.intersectsTriangle(ur))return!0;return!1}});for(let v=w,M=x+w;v<M;v++){const y=e.resolveTriangleIndex(v);jt(cr,3*y,f,m),cr.a.applyMatrix4(mo),cr.b.applyMatrix4(mo),cr.c.applyMatrix4(mo),cr.needsUpdate=!0;for(let S=0,C=g.count;S<C;S+=3)if(jt(ur,S,g,b),ur.needsUpdate=!0,cr.intersectsTriangle(ur))return!0}}else{const d=s+8,f=l[s+6];return Ft(d,r,Fa),!!(i.intersectsBox(Fa)&&gu(d,e,t,n,i)||(Ft(f,r,Fa),i.intersectsBox(Fa)&&gu(f,e,t,n,i)))}}const Ba=new Xe,Uc=new yn,go=new yn,_A=new D,xA=new D,bA=new D,yA=new D;function wA(s,e,t,n={},i={},r=0,o=1/0){e.boundingBox||e.computeBoundingBox(),Uc.set(e.boundingBox.min,e.boundingBox.max,t),Uc.needsUpdate=!0;const l=s.geometry,c=l.attributes.position,u=l.index,d=e.attributes.position,f=e.index,m=kn.getPrimitive(),g=kn.getPrimitive();let b=_A,w=xA,x=null,v=null;i&&(x=bA,v=yA);let M=1/0,y=null,S=null;return Ba.copy(t).invert(),go.matrix.copy(Ba),s.shapecast({boundsTraverseOrder:C=>Uc.distanceToBox(C),intersectsBounds:(C,P,T)=>T<M&&T<o?(P&&(go.min.copy(C.min),go.max.copy(C.max),go.needsUpdate=!0),!0):!1,intersectsRange:(C,P)=>{if(e.boundsTree){const T=e.boundsTree;return T.shapecast({boundsTraverseOrder:I=>go.distanceToBox(I),intersectsBounds:(I,B,E)=>E<M&&E<o,intersectsRange:(I,B)=>{for(let E=I,R=I+B;E<R;E++){const k=T.resolveTriangleIndex(E);jt(g,3*k,f,d),g.a.applyMatrix4(t),g.b.applyMatrix4(t),g.c.applyMatrix4(t),g.needsUpdate=!0;for(let W=C,U=C+P;W<U;W++){const H=s.resolveTriangleIndex(W);jt(m,3*H,u,c),m.needsUpdate=!0;const G=m.distanceToTriangle(g,b,x);if(G<M&&(w.copy(b),v&&v.copy(x),M=G,y=W,S=E),G<r)return!0}}}})}else{const T=Or(e);for(let I=0,B=T;I<B;I++){jt(g,3*I,f,d),g.a.applyMatrix4(t),g.b.applyMatrix4(t),g.c.applyMatrix4(t),g.needsUpdate=!0;for(let E=C,R=C+P;E<R;E++){const k=s.resolveTriangleIndex(E);jt(m,3*k,u,c),m.needsUpdate=!0;const W=m.distanceToTriangle(g,b,x);if(W<M&&(w.copy(b),v&&v.copy(x),M=W,y=E,S=I),W<r)return!0}}}}}),kn.releasePrimitive(m),kn.releasePrimitive(g),M===1/0?null:(n.point?n.point.copy(w):n.point=w.clone(),n.distance=M,n.faceIndex=y,i&&(i.point?i.point.copy(v):i.point=v.clone(),i.point.applyMatrix4(Ba),w.applyMatrix4(Ba),i.distance=w.sub(i.point).length(),i.faceIndex=S),n)}function MA(){return typeof SharedArrayBuffer!="undefined"}const Ao=new Lt.constructor,el=new Lt.constructor,Ki=new Hu(()=>new zt),hr=new zt,dr=new zt,Fc=new zt,Oc=new zt;let Bc=!1;function EA(s,e,t,n){if(Bc)throw new Error("MeshBVH: Recursive calls to bvhcast not supported.");Bc=!0;const i=s._roots,r=e._roots;let o,l=0,c=0;const u=new Xe().copy(t).invert();for(let d=0,f=i.length;d<f;d++){Ao.setBuffer(i[d]),c=0;const m=Ki.getPrimitive();Ft(0,Ao.float32Array,m),m.applyMatrix4(u);for(let g=0,b=r.length;g<b&&(el.setBuffer(r[d]),o=jn(0,0,t,u,n,l,c,0,0,m),el.clearBuffer(),c+=r[g].length,!o);g++);if(Ki.releasePrimitive(m),Ao.clearBuffer(),l+=i[d].length,o)break}return Bc=!1,o}function jn(s,e,t,n,i,r=0,o=0,l=0,c=0,u=null,d=!1){let f,m;d?(f=el,m=Ao):(f=Ao,m=el);const g=f.float32Array,b=f.uint32Array,w=f.uint16Array,x=m.float32Array,v=m.uint32Array,M=m.uint16Array,y=s*2,S=e*2,C=_n(y,w),P=_n(S,M);let T=!1;if(P&&C)d?T=i(Mn(e,v),Pn(e*2,M),Mn(s,b),Pn(s*2,w),c,o+e,l,r+s):T=i(Mn(s,b),Pn(s*2,w),Mn(e,v),Pn(e*2,M),l,r+s,c,o+e);else if(P){const I=Ki.getPrimitive();Ft(e,x,I),I.applyMatrix4(t);const B=Bn(s),E=Rn(s,b);Ft(B,g,hr),Ft(E,g,dr);const R=I.intersectsBox(hr),k=I.intersectsBox(dr);T=R&&jn(e,B,n,t,i,o,r,c,l+1,I,!d)||k&&jn(e,E,n,t,i,o,r,c,l+1,I,!d),Ki.releasePrimitive(I)}else{const I=Bn(e),B=Rn(e,v);Ft(I,x,Fc),Ft(B,x,Oc);const E=u.intersectsBox(Fc),R=u.intersectsBox(Oc);if(E&&R)T=jn(s,I,t,n,i,r,o,l,c+1,u,d)||jn(s,B,t,n,i,r,o,l,c+1,u,d);else if(E)if(C)T=jn(s,I,t,n,i,r,o,l,c+1,u,d);else{const k=Ki.getPrimitive();k.copy(Fc).applyMatrix4(t);const W=Bn(s),U=Rn(s,b);Ft(W,g,hr),Ft(U,g,dr);const H=k.intersectsBox(hr),G=k.intersectsBox(dr);T=H&&jn(I,W,n,t,i,o,r,c,l+1,k,!d)||G&&jn(I,U,n,t,i,o,r,c,l+1,k,!d),Ki.releasePrimitive(k)}else if(R)if(C)T=jn(s,B,t,n,i,r,o,l,c+1,u,d);else{const k=Ki.getPrimitive();k.copy(Oc).applyMatrix4(t);const W=Bn(s),U=Rn(s,b);Ft(W,g,hr),Ft(U,g,dr);const H=k.intersectsBox(hr),G=k.intersectsBox(dr);T=H&&jn(B,W,n,t,i,o,r,c,l+1,k,!d)||G&&jn(B,U,n,t,i,o,r,c,l+1,k,!d),Ki.releasePrimitive(k)}}return T}const ka=new yn,Tf=new zt,SA={strategy:Xm,maxDepth:40,maxLeafTris:10,useSharedArrayBuffer:!1,setBoundingBox:!0,onProgress:null,indirect:!1,verbose:!0};class Gu{static serialize(e,t={}){t={cloneBuffers:!0,...t};const n=e.geometry,i=e._roots,r=e._indirectBuffer,o=n.getIndex();let l;return t.cloneBuffers?l={roots:i.map(c=>c.slice()),index:o.array.slice(),indirectBuffer:r?r.slice():null}:l={roots:i,index:o.array,indirectBuffer:r},l}static deserialize(e,t,n={}){n={setIndex:!0,indirect:Boolean(e.indirectBuffer),...n};const{index:i,roots:r,indirectBuffer:o}=e,l=new Gu(t,{...n,[Pc]:!0});if(l._roots=r,l._indirectBuffer=o||null,n.setIndex){const c=t.getIndex();if(c===null){const u=new Rt(e.index,1,!1);t.setIndex(u)}else c.array!==i&&(c.array.set(i),c.needsUpdate=!0)}return l}get indirect(){return!!this._indirectBuffer}constructor(e,t={}){if(e.isBufferGeometry){if(e.index&&e.index.isInterleavedBufferAttribute)throw new Error("MeshBVH: InterleavedBufferAttribute is not supported for the index attribute.")}else throw new Error("MeshBVH: Only BufferGeometries are supported.");if(t=Object.assign({...SA,[Pc]:!1},t),t.useSharedArrayBuffer&&!MA())throw new Error("MeshBVH: SharedArrayBuffer is not available.");this.geometry=e,this._roots=null,this._indirectBuffer=null,t[Pc]||(zT(this,t),!e.boundingBox&&t.setBoundingBox&&(e.boundingBox=this.getBoundingBox(new zt)));const{_indirectBuffer:n}=this;this.resolveTriangleIndex=t.indirect?i=>n[i]:i=>i}refit(e=null){return(this.indirect?pA:eA)(this,e)}traverse(e,t=0){const n=this._roots[t],i=new Uint32Array(n),r=new Uint16Array(n);o(0);function o(l,c=0){const u=l*2,d=r[u+15]===hl;if(d){const f=i[l+6],m=r[u+14];e(c,d,new Float32Array(n,l*4,6),f,m)}else{const f=l+Ji/4,m=i[l+6],g=i[l+7];e(c,d,new Float32Array(n,l*4,6),g)||(o(f,c+1),o(m,c+1))}}}raycast(e,t=$n){const n=this._roots,i=this.geometry,r=[],o=t.isMaterial,l=Array.isArray(t),c=i.groups,u=o?t.side:t,d=this.indirect?fA:sA;for(let f=0,m=n.length;f<m;f++){const g=l?t[c[f].materialIndex].side:u,b=r.length;if(d(this,f,g,e,r),l){const w=c[f].materialIndex;for(let x=b,v=r.length;x<v;x++)r[x].face.materialIndex=w}}return r}raycastFirst(e,t=$n){const n=this._roots,i=this.geometry,r=t.isMaterial,o=Array.isArray(t);let l=null;const c=i.groups,u=r?t.side:t,d=this.indirect?gA:oA;for(let f=0,m=n.length;f<m;f++){const g=o?t[c[f].materialIndex].side:u,b=d(this,f,g,e);b!=null&&(l==null||b.distance<l.distance)&&(l=b,o&&(b.face.materialIndex=c[f].materialIndex))}return l}intersectsGeometry(e,t){let n=!1;const i=this._roots,r=this.indirect?vA:aA;for(let o=0,l=i.length;o<l&&(n=r(this,o,e,t),!n);o++);return n}shapecast(e){const t=kn.getPrimitive(),n=this.indirect?iA:JT;let{boundsTraverseOrder:i,intersectsBounds:r,intersectsRange:o,intersectsTriangle:l}=e;if(o&&l){const f=o;o=(m,g,b,w,x)=>f(m,g,b,w,x)?!0:n(m,g,this,l,b,w,t)}else o||(l?o=(f,m,g,b)=>n(f,m,this,l,g,b,t):o=(f,m,g)=>g);let c=!1,u=0;const d=this._roots;for(let f=0,m=d.length;f<m;f++){const g=d[f];if(c=qT(this,f,r,o,i,u),c)break;u+=g.byteLength}return kn.releasePrimitive(t),c}bvhcast(e,t,n){let{intersectsRanges:i,intersectsTriangles:r}=n;const o=kn.getPrimitive(),l=this.geometry.index,c=this.geometry.attributes.position,u=this.indirect?b=>{const w=this.resolveTriangleIndex(b);jt(o,w*3,l,c)}:b=>{jt(o,b*3,l,c)},d=kn.getPrimitive(),f=e.geometry.index,m=e.geometry.attributes.position,g=e.indirect?b=>{const w=e.resolveTriangleIndex(b);jt(d,w*3,f,m)}:b=>{jt(d,b*3,f,m)};if(r){const b=(w,x,v,M,y,S,C,P)=>{for(let T=v,I=v+M;T<I;T++){g(T),d.a.applyMatrix4(t),d.b.applyMatrix4(t),d.c.applyMatrix4(t),d.needsUpdate=!0;for(let B=w,E=w+x;B<E;B++)if(u(B),o.needsUpdate=!0,r(o,d,B,T,y,S,C,P))return!0}return!1};if(i){const w=i;i=function(x,v,M,y,S,C,P,T){return w(x,v,M,y,S,C,P,T)?!0:b(x,v,M,y,S,C,P,T)}}else i=b}return EA(this,e,t,i)}intersectsBox(e,t){return ka.set(e.min,e.max,t),ka.needsUpdate=!0,this.shapecast({intersectsBounds:n=>ka.intersectsBox(n),intersectsTriangle:n=>ka.intersectsTriangle(n)})}intersectsSphere(e){return this.shapecast({intersectsBounds:t=>e.intersectsBox(t),intersectsTriangle:t=>t.intersectsSphere(e)})}closestPointToGeometry(e,t,n={},i={},r=0,o=1/0){return(this.indirect?wA:dA)(this,e,t,n,i,r,o)}closestPointToPoint(e,t={},n=0,i=1/0){return YT(this,e,t,n,i)}getBoundingBox(e){return e.makeEmpty(),this._roots.forEach(n=>{Ft(0,new Float32Array(n),Tf),e.union(Tf)}),e}}function TA(s){switch(s){case 1:return"R";case 2:return"RG";case 3:return"RGBA";case 4:return"RGBA"}throw new Error}function AA(s){switch(s){case 1:return nm;case 2:return im;case 3:return Xt;case 4:return Xt}}function Af(s){switch(s){case 1:return Mu;case 2:return sl;case 3:return Po;case 4:return Po}}class Qm extends Ss{constructor(){super(),this.minFilter=ft,this.magFilter=ft,this.generateMipmaps=!1,this.overrideItemSize=null,this._forcedType=null}updateFrom(e){const t=this.overrideItemSize,n=e.itemSize,i=e.count;if(t!==null){if(n*i%t!==0)throw new Error("VertexAttributeTexture: overrideItemSize must divide evenly into buffer length.");e.itemSize=t,e.count=i*n/t}const r=e.itemSize,o=e.count,l=e.normalized,c=e.array.constructor,u=c.BYTES_PER_ELEMENT;let d=this._forcedType,f=r;if(d===null)switch(c){case Float32Array:d=yt;break;case Uint8Array:case Uint16Array:case Uint32Array:d=Cn;break;case Int8Array:case Int16Array:case Int32Array:d=Mo;break}let m,g,b,w,x=TA(r);switch(d){case yt:b=1,g=AA(r),l&&u===1?(w=c,x+="8",c===Uint8Array?m=ri:(m=qc,x+="_SNORM")):(w=Float32Array,x+="32F",m=yt);break;case Mo:x+=u*8+"I",b=l?Math.pow(2,c.BYTES_PER_ELEMENT*8-1):1,g=Af(r),u===1?(w=Int8Array,m=qc):u===2?(w=Int16Array,m=Jf):(w=Int32Array,m=Mo);break;case Cn:x+=u*8+"UI",b=l?Math.pow(2,c.BYTES_PER_ELEMENT*8-1):1,g=Af(r),u===1?(w=Uint8Array,m=ri):u===2?(w=Uint16Array,m=il):(w=Uint32Array,m=Cn);break}f===3&&(g===Xt||g===Po)&&(f=4);const v=Math.ceil(Math.sqrt(o))||1,M=f*v*v,y=new w(M),S=e.normalized;e.normalized=!1;for(let C=0;C<o;C++){const P=f*C;y[P]=e.getX(C)/b,r>=2&&(y[P+1]=e.getY(C)/b),r>=3&&(y[P+2]=e.getZ(C)/b,f===4&&(y[P+3]=1)),r>=4&&(y[P+3]=e.getW(C)/b)}e.normalized=S,this.internalFormat=x,this.format=g,this.type=m,this.image.width=v,this.image.height=v,this.image.data=y,this.needsUpdate=!0,this.dispose(),e.itemSize=n,e.count=i}}class CA extends Qm{constructor(){super(),this._forcedType=Cn}}class PA extends Qm{constructor(){super(),this._forcedType=yt}}class Jm{constructor(){this.index=new CA,this.position=new PA,this.bvhBounds=new Ss,this.bvhContents=new Ss,this._cachedIndexAttr=null,this.index.overrideItemSize=3}updateFrom(e){const{geometry:t}=e;if(LA(e,this.bvhBounds,this.bvhContents),this.position.updateFrom(t.attributes.position),e.indirect){const n=e._indirectBuffer;if(this._cachedIndexAttr===null||this._cachedIndexAttr.count!==n.length)if(t.index)this._cachedIndexAttr=t.index.clone();else{const i=qm(jm(t));this._cachedIndexAttr=new Rt(i,1,!1)}RA(t,n,this._cachedIndexAttr),this.index.updateFrom(this._cachedIndexAttr)}else this.index.updateFrom(t.index)}dispose(){const{index:e,position:t,bvhBounds:n,bvhContents:i}=this;e&&e.dispose(),t&&t.dispose(),n&&n.dispose(),i&&i.dispose()}}function RA(s,e,t){const n=t.array,i=s.index?s.index.array:null;for(let r=0,o=e.length;r<o;r++){const l=3*r,c=3*e[r];for(let u=0;u<3;u++)n[l+u]=i?i[c+u]:c+u}}function LA(s,e,t){const n=s._roots;if(n.length!==1)throw new Error("MeshBVHUniformStruct: Multi-root BVHs not supported.");const i=n[0],r=new Uint16Array(i),o=new Uint32Array(i),l=new Float32Array(i),c=i.byteLength/Ji,u=2*Math.ceil(Math.sqrt(c/2)),d=new Float32Array(4*u*u),f=Math.ceil(Math.sqrt(c)),m=new Uint32Array(2*f*f);for(let g=0;g<c;g++){const b=g*Ji/4,w=b*2,x=b;for(let v=0;v<3;v++)d[8*g+0+v]=l[x+0+v],d[8*g+4+v]=l[x+3+v];if(_n(w,r)){const v=Pn(w,r),M=Mn(b,o),y=4294901760|v;m[g*2+0]=y,m[g*2+1]=M}else{const v=4*Rn(b,o)/Ji,M=Vu(b,o);m[g*2+0]=M,m[g*2+1]=v}}e.image.data=d,e.image.width=u,e.image.height=u,e.format=Xt,e.type=yt,e.internalFormat="RGBA32F",e.minFilter=ft,e.magFilter=ft,e.generateMipmaps=!1,e.needsUpdate=!0,e.dispose(),t.image.data=m,t.image.width=f,t.image.height=f,t.format=sl,t.type=Cn,t.internalFormat="RG32UI",t.minFilter=ft,t.magFilter=ft,t.generateMipmaps=!1,t.needsUpdate=!0,t.dispose()}const IA=`

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
`,DA=`

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
`,NA=`
struct BVH {

	usampler2D index;
	sampler2D position;

	sampler2D bvhBounds;
	usampler2D bvhContents;

};
`,eg=NA,tg=`
	${IA}
	${DA}
`;class UA extends Zt{customProgramCacheKey(){return"LightmapperMaterial|glsl3|mrt2"}constructor(e){const t=new Jm;t.updateFrom(e.bvh),super({transparent:!0,glslVersion:Hn,depthTest:!1,depthWrite:!1,uniforms:{bvh:{value:t},positions:{value:e.positions},normals:{value:e.normals},albedoTex:{value:e.albedoTex},emissiveTex:{value:e.emissiveTex},materialTextureSize:{value:e.materialTextureSize},invModelMatrix:{value:e.invModelMatrix},casts:{value:e.casts},bounces:{value:e.bounces},lightsTex:{value:e.lightsTex},lightCount:{value:e.lightCount},skyColor:{value:e.skyColor},skyIntensity:{value:e.skyIntensity},opacity:{value:1},sampleIndex:{value:0},directLightEnabled:{value:e.directLightEnabled},indirectLightEnabled:{value:e.indirectLightEnabled}},vertexShader:`
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
                ${eg}
                ${tg}

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
            `})}}const FA={point:0,directional:1,spot:2,area:3},kc=4;function OA(s){const e=[];return s.traverse(t=>{var n;if(!!t.visible&&!((n=t.userData)!=null&&n.lightmapIgnore)){if(t instanceof Uu)e.push({type:"point",position:t.getWorldPosition(new D),direction:new D(0,-1,0),color:t.color.clone().multiplyScalar(t.intensity),params:[0,0,0,0]});else if(t instanceof Fu){const i=new D(0,0,-1).transformDirection(t.matrixWorld).normalize();e.push({type:"directional",position:t.getWorldPosition(new D),direction:i,color:t.color.clone().multiplyScalar(t.intensity),params:[0,0,0,0]})}else if(t instanceof Nm){const i=new D(0,0,-1).transformDirection(t.matrixWorld).normalize();e.push({type:"spot",position:t.getWorldPosition(new D),direction:i,color:t.color.clone().multiplyScalar(t.intensity),params:[Math.cos(t.angle*(1-t.penumbra)),Math.cos(t.angle),0,0]})}else if(t instanceof aS){const i=new D(0,0,-1).transformDirection(t.matrixWorld).normalize();e.push({type:"area",position:t.getWorldPosition(new D),direction:i,color:t.color.clone().multiplyScalar(t.intensity),params:[t.width,t.height,0,0]})}}}),e}function BA(s){const e=Math.max(1,s.length),t=new Float32Array(kc*e*4);for(let i=0;i<s.length;i++){const r=s[i],o=i*kc*4;t[o+0]=r.position.x,t[o+1]=r.position.y,t[o+2]=r.position.z,t[o+3]=FA[r.type],t[o+4]=r.direction.x,t[o+5]=r.direction.y,t[o+6]=r.direction.z,t[o+7]=r.params[0],t[o+8]=r.color.r,t[o+9]=r.color.g,t[o+10]=r.color.b,t[o+11]=r.params[1],t[o+12]=r.params[2],t[o+13]=r.params[3],t[o+14]=0,t[o+15]=0}const n=new Ss(t,kc,e,Xt,yt);return n.minFilter=ft,n.magFilter=ft,n.generateMipmaps=!1,n.wrapS=dn,n.wrapT=dn,n.needsUpdate=!0,{texture:n,count:s.length,capacity:e}}function kA(s){s.dispose()}const VA=(s,e,t,n,i)=>{var X,Q;const r=BA(i.lights),o=r.texture,l=new UA({bvh:n,invModelMatrix:new Xe().identity(),positions:e,normals:t,albedoTex:i.albedoTexture,emissiveTex:i.emissiveTexture,materialTextureSize:i.materialTextureSize,casts:i.casts,bounces:(X=i.bounces)!=null?X:1,lightsTex:o,lightCount:r.count,skyColor:i.skyColor,skyIntensity:i.skyIntensity,opacity:1,sampleIndex:0,directLightEnabled:i.directLightEnabled,indirectLightEnabled:i.indirectLightEnabled}),c=new Ax(i.resolution,i.resolution,2,{type:yt,minFilter:xt,magFilter:xt,generateMipmaps:!1}),u=s.getRenderTarget(),d=new Ge;s.getClearColor(d);const f=s.getClearAlpha();s.setRenderTarget(c),s.setClearColor(0,0),s.clear(),s.setRenderTarget(u),s.setClearColor(d,f);const m=new fe(new Ln(2,2),l),g=new Jn;let b=0;const w=i.targetSamples|0,x=i.resolution;let v=Math.max(1,Math.min(x,(Q=i.tileSize)!=null?Q:x)),M=null,y=0;const S=K=>{const ie=Math.ceil(x/K);return{tilesX:ie,tilesY:ie,count:ie*ie}};let C=S(v);const P=l.uniforms.sampleIndex,T=l.uniforms.opacity;if(!P||!T)throw new Error("[baker] LightmapperMaterial missing required uniforms");const I=()=>{const K=performance.now(),ie=s.autoClear,ne=s.getRenderTarget(),me=s.getScissorTest();try{if(s.autoClear=!1,s.setRenderTarget(c),P.value=b,T.value=1/(b+1),v>=x)s.setScissorTest(!1),s.render(m,g);else{const q=y%C.tilesX,se=y/C.tilesX|0,_e=q*v,ye=se*v,Te=Math.min(v,x-_e),ve=Math.min(v,x-ye);s.setScissor(_e,ye,Te,ve),s.setScissorTest(!0),s.render(m,g)}}finally{s.setScissorTest(me),s.setRenderTarget(ne),s.autoClear=ie}y++;let he=!1;return y>=C.count&&(y=0,b++,he=!0,M!==null&&(v=M,C=S(v),M=null)),{ms:performance.now()-K,sampleCompleted:he}},B=()=>{if(w>0&&b>=w)return{samples:b,done:!0,sampleComplete:!0,lastDrawMs:0};let K=0;for(;;){const ie=I();if(K=ie.ms,ie.sampleCompleted)break}return{samples:b,done:w>0&&b>=w,sampleComplete:!0,lastDrawMs:K}},E=K=>{if(w>0&&b>=w)return{samples:b,done:!0,sampleComplete:!0,lastDrawMs:0};const ie=performance.now()+Math.max(0,K);let ne=0,me=!1;do{const he=I();if(ne=he.ms,he.sampleCompleted&&(me=!0,w>0&&b>=w))break}while(performance.now()<ie);return{samples:b,done:w>0&&b>=w,sampleComplete:me,lastDrawMs:ne}},R=K=>{const ie=Math.max(1,Math.min(x,K|0));ie===v&&M===null||(y===0?(v=ie,C=S(v),M=null):M=ie)},k=()=>{b=0,y=0},W=()=>{kA(o),c.dispose(),l.dispose(),m.geometry.dispose()},[U,H]=c.texture;if(!U||!H)throw new Error("[baker] WebGLMultipleRenderTargets did not allocate 2 textures");return{renderTarget:c,textures:{direct:U,indirect:H},render:B,renderTiled:E,setTileSize:R,reset:k,dispose:W}};class zA extends Zt{customProgramCacheKey(){return"AOMaterial|glsl3|single-out"}constructor(e){const t=new Jm;t.updateFrom(e.bvh),super({transparent:!0,glslVersion:Hn,depthTest:!1,depthWrite:!1,uniforms:{bvh:{value:t},positions:{value:e.positions},normals:{value:e.normals},invModelMatrix:{value:e.invModelMatrix},aoSamples:{value:e.aoSamples},ambientDistance:{value:e.ambientDistance},opacity:{value:e.opacity},sampleIndex:{value:e.sampleIndex}},vertexShader:`
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
                ${eg}
                ${tg}

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
            `})}}const ng=(s,e,t,n,i)=>{var k;const r=new zA({bvh:n,invModelMatrix:new Xe().identity(),positions:e,normals:t,aoSamples:i.aoSamples,ambientDistance:i.ambientDistance,opacity:1,sampleIndex:0}),o=new En(i.resolution,i.resolution,{type:yt,minFilter:xt,magFilter:xt,generateMipmaps:!1}),l=s.getRenderTarget(),c=new Ge;s.getClearColor(c);const u=s.getClearAlpha();s.setRenderTarget(o),s.setClearColor(0,0),s.clear(),s.setRenderTarget(l),s.setClearColor(c,u);const d=new fe(new Ln(2,2),r),f=new Jn;let m=0;const g=i.targetSamples|0,b=i.resolution;let w=Math.max(1,Math.min(b,(k=i.tileSize)!=null?k:b)),x=null,v=0;const M=W=>{const U=Math.ceil(b/W);return{tilesX:U,tilesY:U,count:U*U}};let y=M(w);const S=r.uniforms.sampleIndex,C=r.uniforms.opacity;if(!S||!C)throw new Error("[baker] AOMaterial missing required uniforms");const P=()=>{const W=performance.now(),U=s.autoClear,H=s.getRenderTarget(),G=s.getScissorTest();try{if(s.autoClear=!1,s.setRenderTarget(o),S.value=m,C.value=1/(m+1),w>=b)s.setScissorTest(!1),s.render(d,f);else{const Q=v%y.tilesX,K=v/y.tilesX|0,ie=Q*w,ne=K*w,me=Math.min(w,b-ie),he=Math.min(w,b-ne);s.setScissor(ie,ne,me,he),s.setScissorTest(!0),s.render(d,f)}}finally{s.setScissorTest(G),s.setRenderTarget(H),s.autoClear=U}v++;let X=!1;return v>=y.count&&(v=0,m++,X=!0,x!==null&&(w=x,y=M(w),x=null)),{ms:performance.now()-W,sampleCompleted:X}},T=()=>{if(g>0&&m>=g)return{samples:m,done:!0,sampleComplete:!0,lastDrawMs:0};let W=0;for(;;){const U=P();if(W=U.ms,U.sampleCompleted)break}return{samples:m,done:g>0&&m>=g,sampleComplete:!0,lastDrawMs:W}},I=W=>{if(g>0&&m>=g)return{samples:m,done:!0,sampleComplete:!0,lastDrawMs:0};const U=performance.now()+Math.max(0,W);let H=0,G=!1;do{const X=P();if(H=X.ms,X.sampleCompleted&&(G=!0,g>0&&m>=g))break}while(performance.now()<U);return{samples:m,done:g>0&&m>=g,sampleComplete:G,lastDrawMs:H}},B=W=>{const U=Math.max(1,Math.min(b,W|0));U===w&&x===null||(v===0?(w=U,y=M(w),x=null):x=U)},E=()=>{m=0,v=0},R=()=>{o.dispose(),r.dispose(),d.geometry.dispose()};return{texture:o.texture,render:T,renderTiled:I,setTileSize:B,reset:E,dispose:R}};class HA extends Zt{customProgramCacheKey(){return"CompositeMaterial|glsl3|single-out"}constructor(e){super({glslVersion:Hn,transparent:!1,depthWrite:!1,depthTest:!1,uniforms:{directTex:{value:e.directTex},indirectTex:{value:e.indirectTex},aoTex:{value:e.aoTex},directIntensity:{value:e.directIntensity},giIntensity:{value:e.giIntensity},aoEnabled:{value:e.aoEnabled},aoIntensity:{value:e.aoIntensity},aoExponent:{value:e.aoExponent}},vertexShader:`
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
            `})}}const ig=(s,e,t,n)=>{const i=new En(t,t,{type:zn,minFilter:xt,magFilter:xt,generateMipmaps:!1}),r=new HA({directTex:e.direct,indirectTex:e.indirect,aoTex:e.ao,directIntensity:n.directIntensity,giIntensity:n.giIntensity,aoEnabled:n.aoEnabled,aoIntensity:n.aoIntensity,aoExponent:n.aoExponent}),o=new fe(new Ln(2,2),r),l=new Jn,c=r.uniforms,u=d=>{(d==null?void 0:d.directIntensity)!==void 0&&c.directIntensity&&(c.directIntensity.value=d.directIntensity),(d==null?void 0:d.giIntensity)!==void 0&&c.giIntensity&&(c.giIntensity.value=d.giIntensity),(d==null?void 0:d.aoEnabled)!==void 0&&c.aoEnabled&&(c.aoEnabled.value=d.aoEnabled),(d==null?void 0:d.aoIntensity)!==void 0&&c.aoIntensity&&(c.aoIntensity.value=d.aoIntensity),(d==null?void 0:d.aoExponent)!==void 0&&c.aoExponent&&(c.aoExponent.value=d.aoExponent),(d==null?void 0:d.aoTex)!==void 0&&c.aoTex&&(c.aoTex.value=d.aoTex);const f=s.getRenderTarget(),m=s.autoClear;try{s.autoClear=!0,s.setRenderTarget(i),s.render(o,l)}finally{s.setRenderTarget(f),s.autoClear=m}};return u(),{texture:i.texture,refresh:u,dispose:()=>{i.dispose(),r.dispose(),o.geometry.dispose()}}};class GA extends Zt{customProgramCacheKey(){return"DilationMaterial|glsl3|single-out"}constructor(e={}){var t,n,i;super({glslVersion:Hn,blending:Vn,transparent:!1,depthWrite:!1,depthTest:!1,uniforms:{map:{value:(t=e.map)!=null?t:null},positions:{value:(n=e.positions)!=null?n:null},resolution:{value:(i=e.resolution)!=null?i:1024}},vertexShader:`
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
            `})}}class WA extends Zt{customProgramCacheKey(){return"DenoiseMaterial|glsl1|single-out"}constructor(e){var t,n,i;super({blending:Vn,transparent:!1,depthWrite:!1,depthTest:!1,defines:{USE_SLIDER:0},uniforms:{sigma:{value:(t=e.sigma)!=null?t:5},threshold:{value:(n=e.threshold)!=null?n:.03},kSigma:{value:(i=e.kSigma)!=null?i:1},map:{value:e.map}},vertexShader:`
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
			`})}}const Cf=new fe(new Ln(2,2)),XA=new Jn,Wu=async(s,e,t,n,i,r)=>{var y,S,C;const o=()=>new En(n,n,{type:yt,minFilter:xt,magFilter:xt,generateMipmaps:!1}),l=o(),c=o(),u=(P,T)=>{const I=s.getRenderTarget();try{Cf.material=P,s.setRenderTarget(T),s.render(Cf,XA)}finally{s.setRenderTarget(I)}},d=new GA({positions:t,resolution:n});let f=l,m=c,g=e;const b=Math.max(0,i.dilationIterations)+(i.denoiseEnabled?1:0);let w=0;const x=d.uniforms.map;if(!x)throw new Error("[baker] DilationMaterial missing `map` uniform");for(let P=0;P<Math.max(0,i.dilationIterations);P++){x.value=g,u(d,m),g=m.texture;const T=f;f=m,m=T,w++,r==null||r(w/b),await new Promise(I=>requestAnimationFrame(I))}if(i.denoiseEnabled){const P=new WA({map:g,sigma:i.denoiseSigma,threshold:i.denoiseThreshold,kSigma:i.denoiseKSigma});u(P,m),g=m.texture,P.dispose();const T=f;f=m,m=T,w++,r==null||r(w/b),await new Promise(I=>requestAnimationFrame(I))}d.dispose();const v=i.dilationIterations>0||i.denoiseEnabled,M=v?f.texture:e;if(v){const P=Math.max(0,Math.floor(n/2)-2),T=new Float32Array(4*4*4);s.readRenderTargetPixels(f,P,P,4,4,T);let I=0,B=0,E=0;for(let R=0;R<16;R++)I+=(y=T[R*4])!=null?y:0,B+=(S=T[R*4+1])!=null?S:0,E+=(C=T[R*4+2])!=null?C:0}return{texture:M,dispose:()=>{l.dispose(),c.dispose()}}};class dt extends Error{constructor(e,t,n){super(`[baker:${t}] ${e}${n?` (mesh: ${n})`:""}`),this.name="BakeError",this.phase=t,this.meshName=n}}const jA=new Set(["position","normal","uv","uv2","meshIndex"]),qA=s=>{const e=s.map((n,i)=>{let r=n.geometry.clone();for(const u of Object.keys(r.attributes))jA.has(u)||r.deleteAttribute(u);r.applyMatrix4(n.matrixWorld),r.index||(r=Um(r));const o=r.attributes.position;if(!o)throw new dt("mesh geometry has no position attribute","geometry",n.name);const l=o.count,c=new Float32Array(l);return c.fill(i),r.setAttribute("meshIndex",new Rt(c,1)),r}),t=PS(e);if(!t){const n=s.map((i,r)=>i.name||`<unnamed#${r}>`).join(", ");throw new dt(`mergeGeometries returned null \u2014 incompatible attribute sets across meshes [${n}]`,"geometry")}return t},YA=s=>{const e=s.geometry;if(e.index)return e.index.count/3;const t=e.attributes.position;if(!t)throw new dt("mesh geometry missing position attribute","geometry",s.name);return t.count/3},vu={aR:1,aG:1,aB:1,eR:0,eG:0,eB:0},sg=s=>{var t;if(Array.isArray(s)){console.warn("[baker] material array detected; using slot 0 only \u2014 per-face material groups not yet supported");const n=s[0];return n?sg(n):vu}const e=s;if("emissive"in e&&e.emissive){const n=(t=e.emissiveIntensity)!=null?t:1;return{aR:e.color.r,aG:e.color.g,aB:e.color.b,eR:e.emissive.r*n,eG:e.emissive.g*n,eB:e.emissive.b*n}}return"color"in e&&e.color?{aR:e.color.r,aG:e.color.g,aB:e.color.b,eR:0,eG:0,eB:0}:(console.warn("[baker] material has no .color (likely ShaderMaterial); defaulting to white albedo"),vu)},KA=(s,e)=>{var f,m,g;const t=s.index;if(!t)throw new dt("mergeGeometry must produce an indexed geometry; got non-indexed","geometry");const n=s.attributes.meshIndex;if(!n)throw new dt("merged geometry is missing 'meshIndex' attribute \u2014 did mergeGeometry skip the per-vertex tag?","geometry");const i=e.map(YA),r=t.count/3,o=new Float32Array(r*3),l=new Float32Array(r*3),c=e.map(b=>sg(b.material)),u=t.array,d=n.array;for(let b=0;b<r;b++){const w=(f=u[b*3])!=null?f:0,x=((m=d[w])!=null?m:0)|0,v=(g=c[x])!=null?g:vu,M=b*3;o[M]=v.aR,o[M+1]=v.aG,o[M+2]=v.aB,l[M]=v.eR,l[M+1]=v.eG,l[M+2]=v.eB}return{albedo:o,emissive:l,totalTriangles:r,perMeshTriangleCounts:i}},Pf=(s,e)=>{const t=new Ss(s,e,e,Xt,yt);return t.minFilter=ft,t.magFilter=ft,t.wrapS=dn,t.wrapT=dn,t.generateMipmaps=!1,t.needsUpdate=!0,t},$A=s=>{var o,l,c,u,d,f;const e=s.totalTriangles,t=Math.max(1,Math.ceil(Math.sqrt(e))),n=t*t,i=new Float32Array(n*4),r=new Float32Array(n*4);for(let m=0;m<e;m++){const g=m*3,b=m*4;i[b]=(o=s.albedo[g])!=null?o:0,i[b+1]=(l=s.albedo[g+1])!=null?l:0,i[b+2]=(c=s.albedo[g+2])!=null?c:0,i[b+3]=1,r[b]=(u=s.emissive[g])!=null?u:0,r[b+1]=(d=s.emissive[g+1])!=null?d:0,r[b+2]=(f=s.emissive[g+2])!=null?f:0,r[b+3]=1}return{albedoTexture:Pf(i,t),emissiveTexture:Pf(r,t),side:t}},Vc=new D,Rf=new D,Lf=new D,If=new D,Df=new D,Nf=new D;function ZA(s){const e=s.geometry,t=e.attributes.position;if(!t)return 0;const n=s.matrixWorld;let i=0;const r=(o,l,c)=>(Vc.fromBufferAttribute(t,o).applyMatrix4(n),Rf.fromBufferAttribute(t,l).applyMatrix4(n),Lf.fromBufferAttribute(t,c).applyMatrix4(n),If.subVectors(Rf,Vc),Df.subVectors(Lf,Vc),Nf.crossVectors(If,Df),Nf.length()*.5);if(e.index){const o=e.index.array;for(let l=0;l<o.length;l+=3)i+=r(o[l],o[l+1],o[l+2])}else for(let o=0;o<t.count;o+=3)i+=r(o,o+1,o+2);return i}function QA(s,e){var u;const t=(u=e.fillRatio)!=null?u:.95,n=e.atlasResolution*e.atlasResolution,i=e.texelsPerMeter*e.texelsPerMeter,o=[...s.map((d,f)=>{var x,v;const m=ZA(d),g=(v=(x=e.perMeshScale)==null?void 0:x[d.uuid])!=null?v:1,b=m*i*g*g,w=n>0?b/n:0;return{mesh:d,inputIdx:f,surfaceArea:m,uvFraction:w}})].sort((d,f)=>f.uvFraction-d.uvFraction),l=[],c=new Array(s.length);for(const d of o){let f=d.uvFraction;if(f>t){const g=d.mesh.name||`Mesh ${d.inputIdx+1} (${d.mesh.geometry.type.replace("Geometry","")})`;console.warn(`[baker] mesh "${g}" wants ${(f*100).toFixed(0)}% of one ${e.atlasResolution}\xB2 atlas at ${e.texelsPerMeter} texels/m \u2014 clamping to ${(t*100).toFixed(0)}% (effective density reduced)`),f=t}let m=-1;for(let g=0;g<l.length;g++)if(l[g]+f<=t){l[g]=l[g]+f,m=g;break}m<0&&(m=l.length,l.push(f)),c[d.inputIdx]={atlasIdx:m,mesh:d.mesh,uvFraction:f,surfaceArea:d.surfaceArea}}return c}/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.6.9
*/var Uf=function(s){return URL.createObjectURL(new Blob([s],{type:"text/javascript"}))};try{URL.revokeObjectURL(Uf(""))}catch{Uf=function(e){return"data:application/javascript;charset=UTF-8,"+encodeURI(e)}}var li=Uint8Array,xn=Uint16Array,Io=Uint32Array,Xu=new li([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),ju=new li([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Ff=new li([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),rg=function(s,e){for(var t=new xn(31),n=0;n<31;++n)t[n]=e+=1<<s[n-1];for(var i=new Io(t[30]),n=1;n<30;++n)for(var r=t[n];r<t[n+1];++r)i[r]=r-t[n]<<5|n;return[t,i]},og=rg(Xu,2),JA=og[0],_u=og[1];JA[28]=258,_u[258]=28;var e1=rg(ju,0),Of=e1[1],xu=new xn(32768);for(var Pt=0;Pt<32768;++Pt){var qi=(Pt&43690)>>>1|(Pt&21845)<<1;qi=(qi&52428)>>>2|(qi&13107)<<2,qi=(qi&61680)>>>4|(qi&3855)<<4,xu[Pt]=((qi&65280)>>>8|(qi&255)<<8)>>>1}var Co=function(s,e,t){for(var n=s.length,i=0,r=new xn(e);i<n;++i)++r[s[i]-1];var o=new xn(e);for(i=0;i<e;++i)o[i]=o[i-1]+r[i-1]<<1;var l;if(t){l=new xn(1<<e);var c=15-e;for(i=0;i<n;++i)if(s[i])for(var u=i<<4|s[i],d=e-s[i],f=o[s[i]-1]++<<d,m=f|(1<<d)-1;f<=m;++f)l[xu[f]>>>c]=u}else for(l=new xn(n),i=0;i<n;++i)s[i]&&(l[i]=xu[o[s[i]-1]++]>>>15-s[i]);return l},As=new li(288);for(var Pt=0;Pt<144;++Pt)As[Pt]=8;for(var Pt=144;Pt<256;++Pt)As[Pt]=9;for(var Pt=256;Pt<280;++Pt)As[Pt]=7;for(var Pt=280;Pt<288;++Pt)As[Pt]=8;var tl=new li(32);for(var Pt=0;Pt<32;++Pt)tl[Pt]=5;var t1=Co(As,9,0),n1=Co(tl,5,0),ag=function(s){return(s/8|0)+(s&7&&1)},i1=function(s,e,t){(e==null||e<0)&&(e=0),(t==null||t>s.length)&&(t=s.length);var n=new(s instanceof xn?xn:s instanceof Io?Io:li)(t-e);return n.set(s.subarray(e,t)),n},yi=function(s,e,t){t<<=e&7;var n=e/8|0;s[n]|=t,s[n+1]|=t>>>8},vo=function(s,e,t){t<<=e&7;var n=e/8|0;s[n]|=t,s[n+1]|=t>>>8,s[n+2]|=t>>>16},zc=function(s,e){for(var t=[],n=0;n<s.length;++n)s[n]&&t.push({s:n,f:s[n]});var i=t.length,r=t.slice();if(!i)return[qu,0];if(i==1){var o=new li(t[0].s+1);return o[t[0].s]=1,[o,1]}t.sort(function(C,P){return C.f-P.f}),t.push({s:-1,f:25001});var l=t[0],c=t[1],u=0,d=1,f=2;for(t[0]={s:-1,f:l.f+c.f,l,r:c};d!=i-1;)l=t[t[u].f<t[f].f?u++:f++],c=t[u!=d&&t[u].f<t[f].f?u++:f++],t[d++]={s:-1,f:l.f+c.f,l,r:c};for(var m=r[0].s,n=1;n<i;++n)r[n].s>m&&(m=r[n].s);var g=new xn(m+1),b=bu(t[d-1],g,0);if(b>e){var n=0,w=0,x=b-e,v=1<<x;for(r.sort(function(P,T){return g[T.s]-g[P.s]||P.f-T.f});n<i;++n){var M=r[n].s;if(g[M]>e)w+=v-(1<<b-g[M]),g[M]=e;else break}for(w>>>=x;w>0;){var y=r[n].s;g[y]<e?w-=1<<e-g[y]++-1:++n}for(;n>=0&&w;--n){var S=r[n].s;g[S]==e&&(--g[S],++w)}b=e}return[new li(g),b]},bu=function(s,e,t){return s.s==-1?Math.max(bu(s.l,e,t+1),bu(s.r,e,t+1)):e[s.s]=t},Bf=function(s){for(var e=s.length;e&&!s[--e];);for(var t=new xn(++e),n=0,i=s[0],r=1,o=function(c){t[n++]=c},l=1;l<=e;++l)if(s[l]==i&&l!=e)++r;else{if(!i&&r>2){for(;r>138;r-=138)o(32754);r>2&&(o(r>10?r-11<<5|28690:r-3<<5|12305),r=0)}else if(r>3){for(o(i),--r;r>6;r-=6)o(8304);r>2&&(o(r-3<<5|8208),r=0)}for(;r--;)o(i);r=1,i=s[l]}return[t.subarray(0,n),e]},_o=function(s,e){for(var t=0,n=0;n<e.length;++n)t+=s[n]*e[n];return t},ja=function(s,e,t){var n=t.length,i=ag(e+2);s[i]=n&255,s[i+1]=n>>>8,s[i+2]=s[i]^255,s[i+3]=s[i+1]^255;for(var r=0;r<n;++r)s[i+r+4]=t[r];return(i+4+n)*8},kf=function(s,e,t,n,i,r,o,l,c,u,d){yi(e,d++,t),++i[256];for(var f=zc(i,15),m=f[0],g=f[1],b=zc(r,15),w=b[0],x=b[1],v=Bf(m),M=v[0],y=v[1],S=Bf(w),C=S[0],P=S[1],T=new xn(19),I=0;I<M.length;++I)T[M[I]&31]++;for(var I=0;I<C.length;++I)T[C[I]&31]++;for(var B=zc(T,7),E=B[0],R=B[1],k=19;k>4&&!E[Ff[k-1]];--k);var W=u+5<<3,U=_o(i,As)+_o(r,tl)+o,H=_o(i,m)+_o(r,w)+o+14+3*k+_o(T,E)+(2*T[16]+3*T[17]+7*T[18]);if(W<=U&&W<=H)return ja(e,d,s.subarray(c,c+u));var G,X,Q,K;if(yi(e,d,1+(H<U)),d+=2,H<U){G=Co(m,g,0),X=m,Q=Co(w,x,0),K=w;var ie=Co(E,R,0);yi(e,d,y-257),yi(e,d+5,P-1),yi(e,d+10,k-4),d+=14;for(var I=0;I<k;++I)yi(e,d+3*I,E[Ff[I]]);d+=3*k;for(var ne=[M,C],me=0;me<2;++me)for(var he=ne[me],I=0;I<he.length;++I){var q=he[I]&31;yi(e,d,ie[q]),d+=E[q],q>15&&(yi(e,d,he[I]>>>5&127),d+=he[I]>>>12)}}else G=t1,X=As,Q=n1,K=tl;for(var I=0;I<l;++I)if(n[I]>255){var q=n[I]>>>18&31;vo(e,d,G[q+257]),d+=X[q+257],q>7&&(yi(e,d,n[I]>>>23&31),d+=Xu[q]);var se=n[I]&31;vo(e,d,Q[se]),d+=K[se],se>3&&(vo(e,d,n[I]>>>5&8191),d+=ju[se])}else vo(e,d,G[n[I]]),d+=X[n[I]];return vo(e,d,G[256]),d+X[256]},s1=new Io([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),qu=new li(0),r1=function(s,e,t,n,i,r){var o=s.length,l=new li(n+o+5*(1+Math.ceil(o/7e3))+i),c=l.subarray(n,l.length-i),u=0;if(!e||o<8)for(var d=0;d<=o;d+=65535){var f=d+65535;f<o?u=ja(c,u,s.subarray(d,f)):(c[d]=r,u=ja(c,u,s.subarray(d,o)))}else{for(var m=s1[e-1],g=m>>>13,b=m&8191,w=(1<<t)-1,x=new xn(32768),v=new xn(w+1),M=Math.ceil(t/3),y=2*M,S=function(Ce){return(s[Ce]^s[Ce+1]<<M^s[Ce+2]<<y)&w},C=new Io(25e3),P=new xn(288),T=new xn(32),I=0,B=0,d=0,E=0,R=0,k=0;d<o;++d){var W=S(d),U=d&32767,H=v[W];if(x[U]=H,v[W]=U,R<=d){var G=o-d;if((I>7e3||E>24576)&&G>423){u=kf(s,c,0,C,P,T,B,E,k,d-k,u),E=I=B=0,k=d;for(var X=0;X<286;++X)P[X]=0;for(var X=0;X<30;++X)T[X]=0}var Q=2,K=0,ie=b,ne=U-H&32767;if(G>2&&W==S(d-ne))for(var me=Math.min(g,G)-1,he=Math.min(32767,d),q=Math.min(258,G);ne<=he&&--ie&&U!=H;){if(s[d+Q]==s[d+Q-ne]){for(var se=0;se<q&&s[d+se]==s[d+se-ne];++se);if(se>Q){if(Q=se,K=ne,se>me)break;for(var _e=Math.min(ne,se-2),ye=0,X=0;X<_e;++X){var Te=d-ne+X+32768&32767,ve=x[Te],Ue=Te-ve+32768&32767;Ue>ye&&(ye=Ue,H=Te)}}}U=H,H=x[U],ne+=U-H+32768&32767}if(K){C[E++]=268435456|_u[Q]<<18|Of[K];var Ne=_u[Q]&31,j=Of[K]&31;B+=Xu[Ne]+ju[j],++P[257+Ne],++T[j],R=d+Q,++I}else C[E++]=s[d],++P[s[d]]}}u=kf(s,c,r,C,P,T,B,E,k,d-k,u),!r&&u&7&&(u=ja(c,u+1,qu))}return i1(l,0,n+ag(u)+i)},o1=function(){var s=1,e=0;return{p:function(t){for(var n=s,i=e,r=t.length,o=0;o!=r;){for(var l=Math.min(o+2655,r);o<l;++o)i+=n+=t[o];n=(n&65535)+15*(n>>16),i=(i&65535)+15*(i>>16)}s=n,e=i},d:function(){return s%=65521,e%=65521,(s&255)<<24|s>>>8<<16|(e&255)<<8|e>>>8}}},a1=function(s,e,t,n,i){return r1(s,e.level==null?6:e.level,e.mem==null?Math.ceil(Math.max(8,Math.min(13,Math.log(s.length)))*1.5):12+e.mem,t,n,!i)},l1=function(s,e,t){for(;t;++e)s[e]=t,t>>>=8},c1=function(s,e){var t=e.level,n=t==0?0:t<6?1:t==9?3:2;s[0]=120,s[1]=n<<6|(n?32-2*n:1)};function u1(s,e){e||(e={});var t=o1();t.p(s);var n=a1(s,e,2,4);return c1(n,e),l1(n,n.length-4,t.d()),n}var h1=typeof TextDecoder!="undefined"&&new TextDecoder,d1=0;try{h1.decode(qu,{stream:!0}),d1=1}catch{}const p1=new TextEncoder,lg=3;class f1{parse(e,t,n){if(!e||!(e.isWebGLRenderer||e.isDataTexture))throw Error("EXRExporter.parse: Unsupported first parameter, expected instance of WebGLRenderer or DataTexture.");if(e.isWebGLRenderer){const i=e,r=t,o=n;m1(r);const l=v1(r,o),c=x1(i,r,l),u=Vf(c,l),d=zf(u,l);return Hf(d,l)}else if(e.isDataTexture){const i=e,r=t;g1(i);const o=_1(i,r),l=i.image.data,c=Vf(l,o),u=zf(c,o);return Hf(u,o)}}}function m1(s){if(!s||!s.isWebGLRenderTarget)throw Error("EXRExporter.parse: Unsupported second parameter, expected instance of WebGLRenderTarget.");if(s.isWebGLCubeRenderTarget||s.isWebGL3DRenderTarget||s.isWebGLArrayRenderTarget)throw Error("EXRExporter.parse: Unsupported render target type, expected instance of WebGLRenderTarget.");if(s.texture.type!==yt&&s.texture.type!==zn)throw Error("EXRExporter.parse: Unsupported WebGLRenderTarget texture type.");if(s.texture.format!==Xt)throw Error("EXRExporter.parse: Unsupported WebGLRenderTarget texture format, expected RGBAFormat.")}function g1(s){if(s.type!==yt&&s.type!==zn)throw Error("EXRExporter.parse: Unsupported DataTexture texture type.");if(s.format!==Xt)throw Error("EXRExporter.parse: Unsupported DataTexture texture format, expected RGBAFormat.");if(!s.image.data)throw Error("EXRExporter.parse: Invalid DataTexture image data.");if(s.type===yt&&s.image.data.constructor.name!=="Float32Array")throw Error("EXRExporter.parse: DataTexture image data doesn't match type, expected 'Float32Array'.");if(s.type===zn&&s.image.data.constructor.name!=="Uint16Array")throw Error("EXRExporter.parse: DataTexture image data doesn't match type, expected 'Uint16Array'.")}function v1(s,e={}){const t={0:1,2:1,3:16},n=s.width,i=s.height,r=s.texture.type,o=s.texture.format,l=e.compression!==void 0?e.compression:lg,c=e.type!==void 0?e.type:zn,u=c===yt?2:1,d=t[l],f=4;return{width:n,height:i,type:r,format:o,compression:l,blockLines:d,dataType:u,dataSize:2*u,numBlocks:Math.ceil(i/d),numInputChannels:4,numOutputChannels:f}}function _1(s,e={}){const t={0:1,2:1,3:16},n=s.image.width,i=s.image.height,r=s.type,o=s.format,l=e.compression!==void 0?e.compression:lg,c=e.type!==void 0?e.type:zn,u=c===yt?2:1,d=t[l],f=4;return{width:n,height:i,type:r,format:o,compression:l,blockLines:d,dataType:u,dataSize:2*u,numBlocks:Math.ceil(i/d),numInputChannels:4,numOutputChannels:f}}function x1(s,e,t){let n;return t.type===yt?n=new Float32Array(t.width*t.height*t.numInputChannels):n=new Uint16Array(t.width*t.height*t.numInputChannels),s.readRenderTargetPixels(e,0,0,t.width,t.height,n),n}function Vf(s,e){const t=e.width,n=e.height,i={r:0,g:0,b:0,a:0},r={value:0},o=e.numOutputChannels==4?1:0,l=e.type==yt?C1:A1,c=e.dataType==1?E1:yu,u=new Uint8Array(e.width*e.height*e.numOutputChannels*e.dataSize),d=new DataView(u.buffer);for(let f=0;f<n;++f)for(let m=0;m<t;++m){const g=f*t*4+m*4,b=l(s,g),w=l(s,g+1),x=l(s,g+2),v=l(s,g+3),M=(n-f-1)*t*(3+o)*e.dataSize;M1(i,b,w,x,v),r.value=M+m*e.dataSize,c(d,i.a,r),r.value=M+o*t*e.dataSize+m*e.dataSize,c(d,i.b,r),r.value=M+(1+o)*t*e.dataSize+m*e.dataSize,c(d,i.g,r),r.value=M+(2+o)*t*e.dataSize+m*e.dataSize,c(d,i.r,r)}return u}function zf(s,e){let t,n,i=0;const r={data:new Array,totalSize:0},o=e.width*e.numOutputChannels*e.blockLines*e.dataSize;switch(e.compression){case 0:t=b1;break;case 2:case 3:t=y1;break}e.compression!==0&&(n=new Uint8Array(o));for(let l=0;l<e.numBlocks;++l){const c=s.subarray(o*l,o*(l+1)),u=t(c,n);i+=u.length,r.data.push({dataChunk:u,size:u.length})}return r.totalSize=i,r}function b1(s){return s}function y1(s,e){let t=0,n=Math.floor((s.length+1)/2),i=0;const r=s.length-1;for(;!(i>r||(e[t++]=s[i++],i>r));)e[n++]=s[i++];let o=e[0];for(let c=1;c<e.length;c++){const u=e[c]-o+384;o=e[c],e[c]=u}return u1(e)}function w1(s,e,t){const n={value:0},i=new DataView(s.buffer);lt(i,20000630,n),lt(i,2,n),Gt(i,"compression",n),Gt(i,"compression",n),lt(i,1,n),wo(i,t.compression,n),Gt(i,"screenWindowCenter",n),Gt(i,"v2f",n),lt(i,8,n),lt(i,0,n),lt(i,0,n),Gt(i,"screenWindowWidth",n),Gt(i,"float",n),lt(i,4,n),yu(i,1,n),Gt(i,"pixelAspectRatio",n),Gt(i,"float",n),lt(i,4,n),yu(i,1,n),Gt(i,"lineOrder",n),Gt(i,"lineOrder",n),lt(i,1,n),wo(i,0,n),Gt(i,"dataWindow",n),Gt(i,"box2i",n),lt(i,16,n),lt(i,0,n),lt(i,0,n),lt(i,t.width-1,n),lt(i,t.height-1,n),Gt(i,"displayWindow",n),Gt(i,"box2i",n),lt(i,16,n),lt(i,0,n),lt(i,0,n),lt(i,t.width-1,n),lt(i,t.height-1,n),Gt(i,"channels",n),Gt(i,"chlist",n),lt(i,t.numOutputChannels*18+1,n),Gt(i,"A",n),lt(i,t.dataType,n),n.value+=4,lt(i,1,n),lt(i,1,n),Gt(i,"B",n),lt(i,t.dataType,n),n.value+=4,lt(i,1,n),lt(i,1,n),Gt(i,"G",n),lt(i,t.dataType,n),n.value+=4,lt(i,1,n),lt(i,1,n),Gt(i,"R",n),lt(i,t.dataType,n),n.value+=4,lt(i,1,n),lt(i,1,n),wo(i,0,n),wo(i,0,n);let r=n.value+t.numBlocks*8;for(let o=0;o<e.data.length;++o)S1(i,r,n),r+=e.data[o].size+8}function Hf(s,e){const t=e.numBlocks*8,n=259+18*e.numOutputChannels,i={value:n+t},r=new Uint8Array(n+t+s.totalSize+e.numBlocks*8),o=new DataView(r.buffer);w1(r,s,e);for(let l=0;l<s.data.length;++l){const c=s.data[l].dataChunk,u=s.data[l].size;lt(o,l*e.blockLines,i),lt(o,u,i),r.set(c,i.value),i.value+=u}return r}function M1(s,e,t,n,i){s.r=e,s.g=t,s.b=n,s.a=i}function wo(s,e,t){s.setUint8(t.value,e),t.value+=1}function lt(s,e,t){s.setUint32(t.value,e,!0),t.value+=4}function E1(s,e,t){s.setUint16(t.value,Vx.toHalfFloat(e),!0),t.value+=2}function yu(s,e,t){s.setFloat32(t.value,e,!0),t.value+=4}function S1(s,e,t){s.setBigUint64(t.value,BigInt(e),!0),t.value+=8}function Gt(s,e,t){const n=p1.encode(e+"\0");for(let i=0;i<n.length;++i)wo(s,n[i],t)}function T1(s){const e=(s&31744)>>10,t=s&1023;return(s>>15?-1:1)*(e?e===31?t?NaN:1/0:Math.pow(2,e-15)*(1+t/1024):6103515625e-14*(t/1024))}function A1(s,e){return T1(s[e])}function C1(s,e){return s[e]}const Gf=new fe(new Ln(2,2)),P1=new Jn,Wf=new Zt({glslVersion:Hn,blending:Vn,transparent:!1,depthWrite:!1,depthTest:!1,uniforms:{map:{value:null}},vertexShader:`
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
    `});function Yu(s,e,t){const n=new En(t,t,{type:yt,minFilter:xt,magFilter:xt}),i=Wf.uniforms.map;if(!i)throw new Error("[baker] export passthrough material missing `map` uniform");i.value=e,Gf.material=Wf;const r=s.getRenderTarget(),o=s.autoClear;try{s.autoClear=!0,s.setRenderTarget(n),s.render(Gf,P1)}finally{s.setRenderTarget(r),s.autoClear=o}return n}function Ku(s,e){const t=URL.createObjectURL(s),n=document.createElement("a");n.href=t,n.download=e,document.body.appendChild(n),n.click(),n.remove(),setTimeout(()=>URL.revokeObjectURL(t),0)}const $u=(s,e)=>s.toLowerCase().endsWith(`.${e}`)?s:`${s}.${e}`;async function R1(s,e,t,n){var u,d,f;const i=Yu(s,e,t),r=new Float32Array(t*t*4);s.readRenderTargetPixels(i,0,0,t,t,r),i.dispose();const o=new Uint8ClampedArray(t*t*4);for(let m=0;m<t;m++){const g=(t-1-m)*t*4,b=m*t*4;for(let w=0;w<t;w++){const x=g+w*4,v=b+w*4,M=Math.max((u=r[x])!=null?u:0,0),y=Math.max((d=r[x+1])!=null?d:0,0),S=Math.max((f=r[x+2])!=null?f:0,0);o[v]=Math.pow(M/(1+M),1/2.2)*255,o[v+1]=Math.pow(y/(1+y),1/2.2)*255,o[v+2]=Math.pow(S/(1+S),1/2.2)*255,o[v+3]=255}}const l=document.createElement("canvas");l.width=t,l.height=t;const c=l.getContext("2d");if(!c)throw new Error("exportPNG: 2D context unavailable");c.putImageData(new ImageData(o,t,t),0,0),await new Promise((m,g)=>{l.toBlob(b=>{if(!b){g(new Error("exportPNG: toBlob returned null"));return}Ku(b,$u(n,"png")),m()},"image/png")})}function L1(s,e,t,n){const i=Yu(s,e,t),r=new f1().parse(s,i);i.dispose(),Ku(new Blob([r],{type:"image/x-exr"}),$u(n,"exr"))}function I1(s,e,t,n){const i=Yu(s,e,t),r=new Float32Array(t*t*4);s.readRenderTargetPixels(i,0,0,t,t,r),i.dispose(),Ku(new Blob([r.buffer],{type:"application/octet-stream"}),$u(n,"bin"))}async function cg(s,e,t,n,i){switch(i){case"png":await R1(s,e,t,n);return;case"exr":L1(s,e,t,n);return;case"bin":I1(s,e,t,n);return}}const pr=22;class D1{constructor(e={}){var t,n,i,r;this.visible=!0,this.collapsed=!1,this.headerEl=null,this.layerLabel="",this.textures=null,this.prevScissor=new bt,this.prevViewport=new bt,this.size=(t=e.size)!=null?t:256,this.margin=(n=e.margin)!=null?n:20,this.corner=(i=e.corner)!=null?i:"br",this.mat=new Zt({glslVersion:Hn,blending:Vn,transparent:!1,depthTest:!1,depthWrite:!1,uniforms:{map:{value:null},sRGB:{value:(r=e.sRGB)!=null?r:!0},border:{value:.006}},vertexShader:`
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
            `}),this.scene=new Cm,this.cam=new Jn,this.quad=new fe(new Ln(2,2),this.mat),this.scene.add(this.quad)}setTexture(e){this.mat.uniforms.map&&(this.mat.uniforms.map.value=e),this.textures=null}setTextures(e){this.textures=e&&e.length>0?e:null}setSRGB(e){this.mat.uniforms.sRGB&&(this.mat.uniforms.sRGB.value=e)}setSize(e){this.size=e}setMargin(e){this.margin=e}setCorner(e){this.corner=e}setCollapsed(e){this.collapsed=e,this.refreshHeaderText()}setLayerLabel(e){this.layerLabel=e,this.refreshHeaderText()}attachHeader(e=document.body){if(this.headerEl)return;const t=document.createElement("div");Object.assign(t.style,{position:"absolute",boxSizing:"border-box",fontFamily:"monospace",fontSize:"11px",color:"#ddd",backgroundColor:"rgba(0,0,0,0.78)",padding:"4px 8px",cursor:"pointer",userSelect:"none",border:"1px solid #444",borderRadius:"3px",zIndex:"50",display:"none",lineHeight:`${pr-10}px`}),t.addEventListener("click",()=>this.setCollapsed(!this.collapsed)),e.appendChild(t),this.headerEl=t,this.refreshHeaderText()}detachHeader(){var e;(e=this.headerEl)==null||e.remove(),this.headerEl=null}refreshHeaderText(){if(!this.headerEl)return;const e=this.collapsed?"\u25B8":"\u25BE",t=this.layerLabel?` \xB7 ${this.layerLabel}`:"";this.headerEl.innerText=`${e} Atlas Viewer${t}`}positionHeader(e){if(!this.headerEl)return;if(!this.visible){this.headerEl.style.display="none";return}this.headerEl.style.display="block",this.headerEl.style.width=`${this.size}px`;let t=0,n=0;switch(this.corner){case"tl":t=this.margin,n=this.margin+pr;break;case"tr":t=e.width-this.size-this.margin,n=this.margin+pr;break;case"bl":t=this.margin,n=e.height-this.margin-this.size;break;case"br":t=e.width-this.size-this.margin,n=e.height-this.margin-this.size;break}const i=n-pr;this.headerEl.style.left=`${e.left+t}px`,this.headerEl.style.top=`${e.top+i}px`}render(e){var g,b;if(!this.visible){this.positionHeader(e.domElement.getBoundingClientRect());return}if(this.positionHeader(e.domElement.getBoundingClientRect()),this.collapsed)return;const t=this.textures,n=(g=this.mat.uniforms.map)==null?void 0:g.value;if(!t&&!n)return;const i=e.getPixelRatio(),r=e.domElement.width,o=e.domElement.height,l=Math.max(1,Math.floor(this.size*i)),c=Math.max(0,Math.floor(this.margin*i));let u=0,d=0;switch(this.corner){case"tl":u=c,d=o-l-c-Math.floor(pr*i);break;case"tr":u=r-l-c,d=o-l-c-Math.floor(pr*i);break;case"bl":u=c,d=c;break;case"br":u=r-l-c,d=c;break}const f=e.autoClear,m=e.getScissorTest();e.getScissor(this.prevScissor),e.getViewport(this.prevViewport);try{if(e.setScissorTest(!0),e.autoClear=!1,t){const w=t.length,x=Math.ceil(Math.sqrt(w)),v=Math.ceil(w/x),M=Math.max(1,Math.floor(l/Math.max(x,v)));for(let y=0;y<w;y++){const S=y%x,C=Math.floor(y/x),P=u+S*M,T=d+l-(C+1)*M;this.mat.uniforms.map&&(this.mat.uniforms.map.value=(b=t[y])!=null?b:null),e.setScissor(P,T,M,M),e.setViewport(P,T,M,M),e.render(this.scene,this.cam)}}else n&&(e.setScissor(u,d,l,l),e.setViewport(u,d,l,l),e.render(this.scene,this.cam))}finally{e.setScissor(this.prevScissor.x,this.prevScissor.y,this.prevScissor.z,this.prevScissor.w),e.setViewport(this.prevViewport.x,this.prevViewport.y,this.prevViewport.z,this.prevViewport.w),e.setScissorTest(m),e.autoClear=f}}dispose(){this.detachHeader(),this.mat.dispose(),this.quad.geometry.dispose()}}class N1 extends Zt{constructor(e){super({glslVersion:Hn,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1,side:0,uniforms:{uTexelsPerMeter:{value:e.texelsPerMeter},uLightmapSize:{value:e.lightmapSize}},vertexShader:`
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
            `})}setTexelsPerMeter(e){const t=this.uniforms.uTexelsPerMeter;t&&(t.value=e)}setLightmapSize(e){const t=this.uniforms.uLightmapSize;t&&(t.value=e)}}class U1 extends Zt{constructor(e){super({glslVersion:Hn,uniforms:{tSource:{value:e}},vertexShader:`
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
      `})}customProgramCacheKey(){return"DownscaleMaterial|glsl3|single-out"}}const F1=new Jn;function O1(s,e,t){const n=new En(t,t,{type:zn,minFilter:xt,magFilter:xt,generateMipmaps:!1}),i=new U1(e),r=new fe(new Ln(2,2),i),o=()=>{const c=s.getRenderTarget();try{s.setRenderTarget(n),s.render(r,F1)}finally{s.setRenderTarget(c)}},l=c=>{const u=i.uniforms.tSource;if(!u)throw new Error("[baker] DownscaleMaterial missing tSource uniform");u.value=c};return o(),{texture:n.texture,refresh:o,setSource:l,dispose:()=>{n.dispose(),i.dispose(),r.geometry.dispose()}}}function B1(s,e,t){var r,o;const n=[],i=new Map;for(const l of s){const c=(r=e[l.uuid])!=null?r:{};if(c.exclude===!0){n.push(l);continue}const u=(o=c.resolution)!=null?o:t;i.has(u)||i.set(u,[]),i.get(u).push(l)}return i.size===0&&n.length<s.length&&i.set(t,s.filter(l=>{var c;return!((c=e[l.uuid])!=null&&c.exclude)})),{excluded:n,groups:i,resolution:t}}function k1(s,e,t,n){var u,d;const i=[],r=[];for(const f of s)((u=e[f.uuid])==null?void 0:u.exclude)===!0?i.push(f):r.push(f);const o={};for(const f of r){const m=(d=e[f.uuid])==null?void 0:d.density;m!==void 0&&m!==1&&(o[f.uuid]=m)}const l=new Map;if(r.length===0)return{excluded:i,groups:l,resolution:t};const c=QA(r,{atlasResolution:t,texelsPerMeter:n,perMeshScale:o});for(let f=0;f<r.length;f++){const m=c[f];l.has(m.atlasIdx)||l.set(m.atlasIdx,[]),l.get(m.atlasIdx).push(m.mesh)}return{excluded:i,groups:l,resolution:t}}const V1={discrete:{initialTileSize:1024,maxBatchMs:500},integrated:{initialTileSize:256,maxBatchMs:250},unknown:{initialTileSize:256,maxBatchMs:250}};function z1(s){const e=s.toLowerCase();return["intel hd","intel uhd","iris","vega","mali","adreno","powervr"].some(i=>e.includes(i))?"integrated":["geforce","rtx","gtx","quadro","radeon rx","radeon pro","apple m"].some(i=>e.includes(i))?"discrete":"unknown"}function H1(s){var l,c;const e=s.getContext(),t=e.getExtension("WEBGL_debug_renderer_info"),n=t?String((l=e.getParameter(t.UNMASKED_VENDOR_WEBGL))!=null?l:""):"",i=t?String((c=e.getParameter(t.UNMASKED_RENDERER_WEBGL))!=null?c:""):"",r=z1(i),o=V1[r];return{tier:r,vendor:n,renderer:i,initialTileSize:o.initialTileSize,maxBatchMs:o.maxBatchMs,maxFrameMs:16}}const Xf=(s,e)=>new Ge(s!=null?s:e).convertSRGBToLinear(),jf=s=>s>0&&(s&s-1)===0;function G1(s){var c,u,d,f,m,g,b,w,x,v,M,y;const e=(c=s.samples)!=null?c:96;if(!Number.isFinite(e)||e<1||e>4096)throw new dt(`samples must be 1-4096, got ${e}`,"validation");const t=(u=s.castsPerFrame)!=null?u:5;if(!Number.isFinite(t)||t<1||t>256)throw new dt(`castsPerFrame must be 1-256, got ${t}`,"validation");const n=(d=s.ao)==null?void 0:d.samples;if(n!==void 0&&(!Number.isFinite(n)||n<0||n>64))throw new dt(`ao.samples must be 0-64, got ${n}`,"validation");const i=(f=s.bounces)!=null?f:1;if(!Number.isInteger(i)||i<0||i>8)throw new dt(`bounces must be integer 0-8, got ${i}`,"validation");const r=(m=s.resolution)!=null?m:1024;if(!Number.isFinite(r)||r<16||r>4096)throw new dt(`resolution must be 16-4096, got ${r}`,"validation");if(!jf(r))throw new dt(`resolution must be a power of two, got ${r}`,"validation");const o=(g=s.superSample)!=null?g:1;if(!Number.isInteger(o)||o<1||o>4)throw new dt(`superSample must be integer 1-4, got ${o}`,"validation");if(r*o>4096)throw new dt(`resolution \xD7 superSample must be \u2264 4096, got ${r*o}`,"validation");if(((b=s.light)==null?void 0:b.intensity)!==void 0&&s.light.intensity<0)throw new dt(`light.intensity must be >= 0, got ${s.light.intensity}`,"validation");if(((w=s.light)==null?void 0:w.size)!==void 0&&s.light.size<0)throw new dt(`light.size must be >= 0, got ${s.light.size}`,"validation");if(((x=s.gi)==null?void 0:x.intensity)!==void 0&&s.gi.intensity<0)throw new dt(`gi.intensity must be >= 0, got ${s.gi.intensity}`,"validation");if(((v=s.gi)==null?void 0:v.skyIntensity)!==void 0&&s.gi.skyIntensity<0)throw new dt(`gi.skyIntensity must be >= 0, got ${s.gi.skyIntensity}`,"validation");if(((M=s.ao)==null?void 0:M.distance)!==void 0&&s.ao.distance<0)throw new dt(`ao.distance must be >= 0, got ${s.ao.distance}`,"validation");if(s.texelsPerMeter!==void 0){const C=s.texelsPerMeter;if(!Number.isFinite(C)||C<=0||C>1024)throw new dt(`texelsPerMeter must be in (0, 1024], got ${C}`,"validation")}for(const[C,P]of Object.entries((y=s.perMesh)!=null?y:{})){const T=P.resolution;if(T!==void 0){if(!Number.isFinite(T)||T<128||T>4096)throw new dt(`perMesh[${C}].resolution must be 128-4096, got ${T}`,"validation");if(!jf(T))throw new dt(`perMesh[${C}].resolution must be a power of two, got ${T}`,"validation")}const I=P.density;if(I!==void 0&&(!Number.isFinite(I)||I<.1||I>10))throw new dt(`perMesh[${C}].density must be in [0.1, 10], got ${I}`,"validation")}s.texelsPerMeter;const l=s.timeoutProtection;if((l==null?void 0:l.initialTileSize)!==void 0){const C=l.initialTileSize;if(!Number.isFinite(C)||C<16||C>4096)throw new dt(`timeoutProtection.initialTileSize must be 16-4096, got ${C}`,"validation")}if((l==null?void 0:l.maxBatchMs)!==void 0&&(!Number.isFinite(l.maxBatchMs)||l.maxBatchMs<=0))throw new dt(`timeoutProtection.maxBatchMs must be > 0, got ${l.maxBatchMs}`,"validation");if((l==null?void 0:l.maxFrameMs)!==void 0&&(!Number.isFinite(l.maxFrameMs)||l.maxFrameMs<=0))throw new dt(`timeoutProtection.maxFrameMs must be > 0, got ${l.maxFrameMs}`,"validation")}function W1(s,e){var n,i,r,o,l;const t=(n=s==null?void 0:s.safeMode)!=null?n:!1;return{safeMode:t,initialTileSize:(i=s==null?void 0:s.initialTileSize)!=null?i:t?64:e.initialTileSize,maxBatchMs:(r=s==null?void 0:s.maxBatchMs)!=null?r:t?100:e.maxBatchMs,maxFrameMs:(o=s==null?void 0:s.maxFrameMs)!=null?o:e.maxFrameMs,autoAdapt:(l=s==null?void 0:s.autoAdapt)!=null?l:!0}}const qf={dilationIterations:4,denoiseEnabled:!0,denoiseSigma:2.5,denoiseThreshold:.18,denoiseKSigma:1};class X1{constructor(e,t,n,i,r){this.renderer=e,this.meshLightmaps=t,this.meshResolutions=n,this.stats=i,this.internals=r}get lightmaps(){return new Map(this.meshLightmaps)}get bvh(){return this.internals.bvh}get groups(){return this.internals.groups.map(e=>{var t,n;return{meshes:e.meshes,resolution:e.resolution,internalResolution:e.internalResolution,lightmapper:e.lightmapper,aoMapper:e.aoMapper,textures:{direct:e.lightmapper.textures.direct,indirect:e.lightmapper.textures.indirect,ao:e.aoMapper.texture,composite:e.composite.texture,refinement:(n=(t=e.refinement)==null?void 0:t.texture)!=null?n:null,position:e.positionTex,normal:e.normalTex}}})}getGroupForMesh(e){var t,n;for(const i of this.internals.groups)if(i.meshes.includes(e))return{meshes:i.meshes,resolution:i.resolution,internalResolution:i.internalResolution,lightmapper:i.lightmapper,aoMapper:i.aoMapper,textures:{direct:i.lightmapper.textures.direct,indirect:i.lightmapper.textures.indirect,ao:i.aoMapper.texture,composite:i.composite.texture,refinement:(n=(t=i.refinement)==null?void 0:t.texture)!=null?n:null,position:i.positionTex,normal:i.normalTex}};return null}apply(){for(const[e,t]of this.meshLightmaps){const n=e.material;!n||(n.lightMap=t,t.channel=2,n.lightMapIntensity=1,n.needsUpdate=!0)}}async export(e="lightmap",t={}){var o,l,c,u,d;const n=(o=t.format)!=null?o:"png",i=e.replace(/[\/\\]+$/,"").split(/[\/\\]/).pop()||"lightmap",r=this.internals.groups;for(let f=0;f<r.length;f++){const m=r[f],g=(d=(u=(l=m.downscale)==null?void 0:l.texture)!=null?u:(c=m.refinement)==null?void 0:c.texture)!=null?d:m.composite.texture,b=r.length>1?`${i}_group${f}`:i;await cg(this.renderer,g,m.resolution,b,n)}}dispose(){var e,t;for(const n of this.internals.groups)(e=n.downscale)==null||e.dispose(),(t=n.refinement)==null||t.dispose(),n.composite.dispose(),n.aoMapper.dispose(),n.lightmapper.dispose(),n.atlasDispose();this.internals.matTexDispose()}refreshAO(e){for(const t of this.internals.groups)t.composite.refresh({aoIntensity:e.intensity,aoExponent:e.exponent,aoEnabled:e.enabled})}async rebakeAO(e,t={}){const n=this.internals.groups;for(let i=0;i<n.length;i++){const r=n[i],o={resolution:r.internalResolution,aoSamples:e.samples,ambientDistance:e.distance,targetSamples:e.targetSamples};if(await J1(this.renderer,this.internals.bvh,r,o,t,i,n.length,l=>{var c;return(c=t.onProgress)==null?void 0:c.call(t,"bake",(i+l)/n.length)}),r.refinement)if(r.refinement.dispose(),r.refinement=await Wu(this.renderer,r.composite.texture,r.positionTex,r.internalResolution,this.internals.refinementOptions),r.downscale)r.downscale.setSource(r.refinement.texture),r.downscale.refresh();else{const l=r.refinement.texture;for(const[c,u]of this.meshResolutions)u===r.resolution&&this.meshLightmaps.set(c,l)}else r.downscale&&r.downscale.refresh()}}}class j1{constructor(e,t={}){var n,i,r,o,l,c,u,d,f,m,g,b,w,x,v,M,y,S,C,P,T,I,B,E,R,k,W,U,H,G,X,Q,K,ie,ne,me,he,q,se,_e;this.renderer=e,G1(t),this.opts={samples:(n=t.samples)!=null?n:96,castsPerFrame:(i=t.castsPerFrame)!=null?i:5,bounces:Math.min(4,Math.max(1,(r=t.bounces)!=null?r:1)),resolution:(o=t.resolution)!=null?o:1024,superSample:(l=t.superSample)!=null?l:1,denoise:(c=t.denoise)!=null?c:!0,filtering:(u=t.filtering)!=null?u:"linear",texelsPerMeter:(d=t.texelsPerMeter)!=null?d:0,perMesh:(f=t.perMesh)!=null?f:{},light:{position:(g=(m=t.light)==null?void 0:m.position)!=null?g:new D(0,10,0),color:(w=(b=t.light)==null?void 0:b.color)!=null?w:16777215,intensity:(v=(x=t.light)==null?void 0:x.intensity)!=null?v:2,size:(y=(M=t.light)==null?void 0:M.size)!=null?y:1,enabled:(C=(S=t.light)==null?void 0:S.enabled)!=null?C:!0},gi:{enabled:(T=(P=t.gi)==null?void 0:P.enabled)!=null?T:!0,intensity:(B=(I=t.gi)==null?void 0:I.intensity)!=null?B:1,skyColor:(R=(E=t.gi)==null?void 0:E.skyColor)!=null?R:16777215,skyIntensity:(W=(k=t.gi)==null?void 0:k.skyIntensity)!=null?W:0},ao:{enabled:(H=(U=t.ao)==null?void 0:U.enabled)!=null?H:!0,distance:(X=(G=t.ao)==null?void 0:G.distance)!=null?X:.5,intensity:(K=(Q=t.ao)==null?void 0:Q.intensity)!=null?K:1,exponent:(ne=(ie=t.ao)==null?void 0:ie.exponent)!=null?ne:1.5,samples:(q=(he=(me=t.ao)==null?void 0:me.samples)!=null?he:t.castsPerFrame)!=null?q:5},refinementOptions:{...qf,...(se=t.refinementOptions)!=null?se:{},denoiseEnabled:(_e=t.denoise)!=null?_e:qf.denoiseEnabled},timeoutProtection:t.timeoutProtection}}async bake(e,t={}){const n=performance.now(),i=q1(e);if(!i.length)throw new dt("no bake-eligible meshes in scene (need Mesh + MeshStandardMaterial-like)","validation");if(!this.renderer.getContext().getExtension("EXT_color_buffer_float"))throw new dt("EXT_color_buffer_float WebGL2 extension is unavailable; FloatType RTs cannot be allocated","validation");const o=H1(this.renderer),l=W1(this.opts.timeoutProtection,o),c={lost:!1},u=this.renderer.domElement,d=g=>{g.preventDefault(),c.lost=!0,console.error("[baker] webglcontextlost during bake \u2014 cancelling")};u.addEventListener("webglcontextlost",d,!1);const f=()=>{u.removeEventListener("webglcontextlost",d,!1)};e.updateMatrixWorld(!0);const m=g=>{var b;if((b=t.signal)!=null&&b.aborted)throw new dt("aborted by signal",g);if(c.lost)throw new dt("webgl context lost","context-loss")};try{return await this.bakeInternal(i,e,t,n,l,c,m)}finally{f()}}async bakeInternal(e,t,n,i,r,o,l){var Q,K,ie,ne,me,he,q,se,_e;const c=this.opts.texelsPerMeter,u=c>0?k1(e,this.opts.perMesh,this.opts.resolution,c):B1(e,this.opts.perMesh,this.opts.resolution),{excluded:d,groups:f}=u,m=ye=>c>0?u.resolution:ye,g=performance.now();(Q=n.onProgress)==null||Q.call(n,"uv-unwrap",0);const b=[...f.values()].flat();await vT(b),(K=n.onProgress)==null||K.call(n,"uv-unwrap",1),l("unwrap");const w=performance.now(),x=performance.now();(ie=n.onProgress)==null||ie.call(n,"geometry",0);const v=qA(e),M=new Gu(v);(ne=n.onProgress)==null||ne.call(n,"geometry",.5);const y=KA(v,e),S=$A(y);(me=n.onProgress)==null||me.call(n,"geometry",1),l("geometry");const C=performance.now(),P=Xf(this.opts.gi.skyColor,16777215);let T=OA(t);if(T.length===0&&this.opts.light.enabled){const ye=Xf(this.opts.light.color,16777215);T=[{type:"point",position:this.opts.light.position.clone(),direction:new D(0,-1,0),color:ye.multiplyScalar(this.opts.light.intensity),params:[this.opts.light.size,0,0,0]}]}const I=performance.now(),B=[...f.keys()],E=[],R=new Map,k=new Map;for(let ye=0;ye<B.length;ye++){const Te=B[ye],ve=m(Te),Ue=ve*this.opts.superSample,Ne=f.get(Te);(he=n.onProgress)==null||he.call(n,"bake",ye/B.length),l("bake");const j=ST(this.renderer,Ne,Ue,!0),St=Y1(this.opts,Ue,T,P,S,r),Ce=K1(this.opts,Ue,r),ke=VA(this.renderer,j.positionTexture,j.normalTexture,M,St),Ae=ng(this.renderer,j.positionTexture,j.normalTexture,M,Ce),ct=ig(this.renderer,{direct:ke.textures.direct,indirect:ke.textures.indirect,ao:Ae.texture},Ue,{directIntensity:1,giIntensity:this.opts.gi.intensity,aoEnabled:this.opts.ao.enabled,aoIntensity:this.opts.ao.intensity,aoExponent:this.opts.ao.exponent});await Q1(ke,Ae,ct,this.opts.samples,n,o,r,ye,B.length,ue=>{var re;return(re=n.onProgress)==null?void 0:re.call(n,"bake",(ye+ue)/B.length)});let Ve=null;(this.opts.denoise||this.opts.refinementOptions.dilationIterations>0)&&(Ve=await Wu(this.renderer,ct.texture,j.positionTexture,Ue,this.opts.refinementOptions));const F=(q=Ve==null?void 0:Ve.texture)!=null?q:ct.texture,L=this.opts.superSample>1?O1(this.renderer,F,ve):null,Z=(se=L==null?void 0:L.texture)!=null?se:F;E.push({lightmapper:ke,aoMapper:Ae,composite:ct,refinement:Ve,atlasDispose:j.dispose,resolution:ve,internalResolution:Ue,downscale:L,meshes:Ne,positionTex:j.positionTexture,normalTex:j.normalTexture});for(const ue of Ne)R.set(ue,Z),k.set(ue,ve)}const W=performance.now(),U=performance.now();(_e=n.onProgress)==null||_e.call(n,"refine",1);const H=performance.now();performance.now(),this.renderer.getContext().finish(),performance.now();const G=B.reduce((ye,Te)=>{const ve=m(Te);return ye+ve*ve},0),X={meshCount:b.length,texelCount:G,raysTraced:this.opts.samples*this.opts.castsPerFrame*G,duration:{uvUnwrap:w-g,geometry:C-x,bake:W-I,refine:H-U,total:performance.now()-i}};return new X1(this.renderer,R,k,X,{groups:E,bvh:M,refinementOptions:this.opts.refinementOptions,denoise:this.opts.denoise,matTexDispose:()=>{S.albedoTexture.dispose(),S.emissiveTexture.dispose()}})}}function q1(s){const e=[];return s.traverse(t=>{var r;if(!t.isMesh||!t.visible||(r=t.userData)!=null&&r.lightmapIgnore)return;const n=t;(Array.isArray(n.material)?n.material:[n.material]).some(o=>o&&o.isMeshStandardMaterial)&&e.push(n)}),e}function Y1(s,e,t,n,i,r){return{resolution:e,casts:s.castsPerFrame,filterMode:s.filtering==="linear"?xt:ft,lights:t,skyColor:n,skyIntensity:s.gi.skyIntensity,directLightEnabled:s.light.enabled,indirectLightEnabled:s.gi.enabled,albedoTexture:i.albedoTexture,emissiveTexture:i.emissiveTexture,materialTextureSize:i.side,targetSamples:s.samples,bounces:s.bounces,tileSize:r.initialTileSize}}function K1(s,e,t){return{resolution:e,aoSamples:s.ao.samples,ambientDistance:s.ao.distance,targetSamples:s.samples,tileSize:t.initialTileSize}}const $1=64;function Z1(s,e,t){return s.length<4?e:s.slice(-4).filter(r=>r>t.maxFrameMs*1.5).length>=3?Math.max($1,e>>1):e}function Q1(s,e,t,n,i,r,o,l,c,u){return new Promise((d,f)=>{const m=[];let g=performance.now(),b=o.initialTileSize;const w=()=>{var C,P;if((C=i.signal)!=null&&C.aborted){f(new dt("aborted by signal","bake"));return}if(r.lost){f(new dt("webgl context lost during bake","context-loss"));return}const x=performance.now();if(m.push(x-g),m.length>8&&m.shift(),g=x,o.autoAdapt){const T=Z1(m,b,o);T!==b&&(console.warn(`[baker] adaptive throttle: tileSize ${b} \u2192 ${T}`),b=T,s.setTileSize(b),e.setTileSize(b),m.length=0)}const v=s.renderTiled(o.maxFrameMs),M=e.renderTiled(o.maxFrameMs),y=Math.min(v.samples,M.samples);u(n>0?y/n:1);const S=v.done&&M.done;if((v.sampleComplete||M.sampleComplete)&&t.refresh(),(P=i.onFrame)==null||P.call(i,{groupIndex:l,totalGroups:c,bounceSamples:v.samples,aoSamples:M.samples,targetSamples:n,done:S,compositeTexture:t.texture,directTexture:s.textures.direct,indirectTexture:s.textures.indirect,aoTexture:e.texture}),S){d();return}requestAnimationFrame(w)};requestAnimationFrame(w)})}function J1(s,e,t,n,i,r,o,l){const c=ng(s,t.positionTex,t.normalTex,e,n);return t.aoMapper.dispose(),t.aoMapper=c,t.composite.refresh({aoTex:c.texture}),new Promise((u,d)=>{const f=()=>{var g,b;if((g=i.signal)!=null&&g.aborted){d(new dt("aborted by signal","bake"));return}const m=c.render();if(l(n.targetSamples>0?m.samples/n.targetSamples:1),t.composite.refresh(),(b=i.onFrame)==null||b.call(i,{groupIndex:r,totalGroups:o,bounceSamples:0,aoSamples:m.samples,targetSamples:n.targetSamples,done:m.done,compositeTexture:t.composite.texture,directTexture:t.lightmapper.textures.direct,indirectTexture:t.lightmapper.textures.indirect,aoTexture:c.texture}),m.done){u();return}requestAnimationFrame(f)};requestAnimationFrame(f)})}const Yf={0:"NO_ERROR",1280:"INVALID_ENUM",1281:"INVALID_VALUE",1282:"INVALID_OPERATION",1283:"STACK_OVERFLOW",1284:"STACK_UNDERFLOW",1285:"OUT_OF_MEMORY",1286:"INVALID_FRAMEBUFFER_OPERATION",37442:"CONTEXT_LOST_WEBGL"};class eC{constructor(e){this.renderer=e,this.start=performance.now(),this.snapshots=[],this.lastCalls=0,this.lastTriangles=0}banner(){var d,f;const e=this.renderer.getContext(),t=e.getExtension("WEBGL_debug_renderer_info"),n=t?String((d=e.getParameter(t.UNMASKED_VENDOR_WEBGL))!=null?d:""):"<masked>",i=t?String((f=e.getParameter(t.UNMASKED_RENDERER_WEBGL))!=null?f:""):"<masked>",r=e.getContextAttributes(),o={MAX_TEXTURE_SIZE:e.getParameter(e.MAX_TEXTURE_SIZE),MAX_RENDERBUFFER_SIZE:e.getParameter(e.MAX_RENDERBUFFER_SIZE),MAX_DRAW_BUFFERS:e.getParameter(e.MAX_DRAW_BUFFERS),MAX_COLOR_ATTACHMENTS:e.getParameter(e.MAX_COLOR_ATTACHMENTS),MAX_TEXTURE_IMAGE_UNITS:e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),MAX_FRAGMENT_UNIFORM_VECTORS:e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),MAX_VARYING_VECTORS:e.getParameter(e.MAX_VARYING_VECTORS),MAX_VIEWPORT_DIMS:e.getParameter(e.MAX_VIEWPORT_DIMS)},l=["EXT_color_buffer_float","EXT_color_buffer_half_float","OES_texture_float_linear","OES_texture_half_float_linear","WEBGL_lose_context","EXT_disjoint_timer_query_webgl2","WEBGL_debug_renderer_info"],c={};for(const m of l)c[m]=!!e.getExtension(m);const u=performance.memory;console.group("[diag] === GPU BANNER ==="),console.log("vendor:",n),console.log("renderer:",i),console.log("webgl version:",e.getParameter(e.VERSION)),console.log("GLSL:",e.getParameter(e.SHADING_LANGUAGE_VERSION)),console.log("context attrs:",r),console.log("limits:",o),console.log("extensions:",c),u&&console.log("JS heap (MB):",`used=${(u.usedJSHeapSize/1048576).toFixed(1)}`,`total=${(u.totalJSHeapSize/1048576).toFixed(1)}`,`limit=${(u.jsHeapSizeLimit/1048576).toFixed(1)}`),console.groupEnd()}snap(e){var d,f,m;const t=this.renderer.getContext();let n=0,i=0;do i=t.getError(),i!==0&&(n=i);while(i!==0);const r=this.renderer.info,o=(f=(d=r.programs)==null?void 0:d.length)!=null?f:0,l=r.render.calls-this.lastCalls,c=r.render.triangles-this.lastTriangles;this.lastCalls=r.render.calls,this.lastTriangles=r.render.triangles;const u={label:e,t:performance.now()-this.start,glError:(m=Yf[n])!=null?m:`0x${n.toString(16)}`,threejs:{geometries:r.memory.geometries,textures:r.memory.textures,programs:o,calls:r.render.calls,triangles:r.render.triangles}};return this.snapshots.push(u),console.log(`[diag] ${u.t.toFixed(1).padStart(8)}ms ${e}`,`gl=${u.glError}`,`geo=${u.threejs.geometries} tex=${u.threejs.textures} prog=${u.threejs.programs}`,`\u0394calls=${l} \u0394tris=${c}`),u}measure(e,t){var u;const n=this.renderer.getContext();for(;n.getError()!==0;);const i=performance.now(),r=t();n.finish();const o=performance.now()-i;let l=0,c=0;do c=n.getError(),c!==0&&(l=c);while(c!==0);return console.log(`[diag] MEASURE ${e}: ${o.toFixed(1)}ms gl=${(u=Yf[l])!=null?u:`0x${l.toString(16)}`}`),r}contextLossInfo(){var n,i;const e=this.renderer.getContext(),t=e.getExtension("WEBGL_lose_context");console.group("[diag] === CONTEXT LOSS DUMP ==="),console.log("isContextLost:",(n=e.isContextLost)==null?void 0:n.call(e)),console.log("snapshot history (last 10):",this.snapshots.slice(-10)),console.log("threejs info at loss:",{geometries:this.renderer.info.memory.geometries,textures:this.renderer.info.memory.textures,programs:(i=this.renderer.info.programs)==null?void 0:i.length,autoReset:this.renderer.info.autoReset}),t&&console.log("lose_context ext present"),console.groupEnd()}dump(){return this.snapshots.slice()}}const An=10,fr=An/2,ms=[{id:"combined",label:"Combined",group:"output",showAlbedo:!0,getLightMap:s=>{var e,t;return(t=(e=s.group.refinement)==null?void 0:e.texture)!=null?t:s.group.composite.texture}},{id:"combinedPost",label:"Combined (Refined)",group:"output",showAlbedo:!0,getLightMap:s=>{var e,t;return(t=(e=s.group.refinement)==null?void 0:e.texture)!=null?t:s.group.composite.texture}},{id:"combinedRaw",label:"Combined (Raw)",group:"output",showAlbedo:!0,getLightMap:s=>s.group.composite.texture},{id:"direct",label:"Direct",group:"output",showAlbedo:!1,getLightMap:s=>s.group.lightmapper.textures.direct},{id:"indirect",label:"Indirect (GI)",group:"output",showAlbedo:!1,getLightMap:s=>s.group.lightmapper.textures.indirect},{id:"ao",label:"Ambient Occlusion",group:"output",showAlbedo:!1,getLightMap:s=>s.group.aoMapper.texture},{id:"lightmapRaw",label:"Lightmap (Raw)",group:"debug",showAlbedo:!1,getLightMap:s=>s.group.composite.texture},{id:"albedo",label:"Albedo",group:"debug",showAlbedo:!0,getLightMap:()=>null},{id:"positions",label:"World Position",group:"debug",showAlbedo:!1,getLightMap:s=>s.group.positionTexture},{id:"normals",label:"World Normal",group:"debug",showAlbedo:!1,getLightMap:s=>s.group.normalTexture},{id:"texelDensity",label:"Texel Density",group:"debug",showAlbedo:!1,getLightMap:()=>null}],tC=Object.fromEntries(ms.map(s=>[s.label,s.id])),nC={Linear:"linear",Nearest:"nearest"},iC={"Cornell Classic":"classic","Cornell Advanced":"advanced"},Kf={Custom:null,Draft:{lightMapSize:256,casts:4,targetSamples:32},Preview:{lightMapSize:512,casts:5,targetSamples:96},Production:{lightMapSize:1024,casts:6,targetSamples:256},Final:{lightMapSize:2048,casts:8,targetSamples:512}},ug=class{constructor(){this.cornellRoot=null,this.meshes=[],this.bakeGroups=[],this.meshToGroup=new Map,this.matTexDispose=null,this.bakeResult=null,this.texelDensityMats=new Map,this.originalMaterials=new WeakMap,this.firstPostBakeRender=!1,this.options={preset:"advanced",layer:"combined",quality:"Custom",lightMapSize:1024,casts:5,targetSamples:256,bounces:2,safeMode:!0,filterMode:"linear",directLightEnabled:!0,indirectLightEnabled:!0,ambientLightEnabled:!0,ambientDistance:.5,aoIntensity:1,aoExponent:1.5,aoSamples:5,texelsPerMeter:10,lightSize:2.9,lightIntensity:2,lightColor:"#ffffff",directIntensity:1.4,giIntensity:2.7,skyColor:"#ffffff",skyIntensity:0,pause:!1,showGizmo:!0,autoBake:!1,autoApplyRefinement:!1,dilationIterations:1,denoiseEnabled:!1,denoiseSigma:2.5,denoiseThreshold:.18,denoiseKSigma:1,secondaryLightEnabled:!1,secondaryDirX:-.5,secondaryDirY:-1,secondaryDirZ:-.5,secondaryIntensity:.8,secondaryColor:"#ffffcc",samples:0,spp:0,etaSec:0,refinementStatus:"idle",exportFormat:"png",perMesh:{},atlasViewerEnabled:!0,atlasViewerSize:256,atlasViewerCorner:"br",atlasViewerSRGB:!0},this.perMeshFolder=null,this.atlasViewer=(()=>{const f=new D1({size:256,corner:"br",sRGB:!0});return f.attachHeader(),f})(),this.dummyLightmap=null,this.looping=!1,this.bakeStartTime=0,this.bakeBatchHistory=[],this.maybeBake=f=>{(f==null?void 0:f.last)!==!1&&(!this.options.autoBake||this.bake())},this.scene=new Cm,this.scene.background=new Ge(657930),this.camera=new mn(45,window.innerWidth/window.innerHeight,.1,1e3),this.camera.position.set(0,5,18),this.camera.lookAt(0,5,0),this.renderer=new Am({antialias:!0,powerPreference:"low-power",failIfMajorPerformanceCaveat:!1,preserveDrawingBuffer:!1}),this.renderer.outputColorSpace=Ot,this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(window.devicePixelRatio),document.body.appendChild(this.renderer.domElement),this.diag=new eC(this.renderer),this.diag.banner(),this.diag.snap("after renderer construction"),this.renderer.domElement.addEventListener("webglcontextlost",f=>{var m,g,b,w;console.error("[baker:debug] CONTEXT LOST",{bakeGroups:this.bakeGroups.length,firstCompositeUuid:(m=this.bakeGroups[0])==null?void 0:m.composite.texture.uuid,firstMeshLM:(w=(b=(g=this.meshes[0])==null?void 0:g.material)==null?void 0:b.lightMap)==null?void 0:w.uuid}),this.diag.contextLossInfo(),f.preventDefault()}),this.renderer.domElement.addEventListener("webglcontextrestored",()=>{var f;console.error("[baker:debug] CONTEXT RESTORED \u2014 RT data lost, lightmap textures are now empty",{bakeGroups:this.bakeGroups.length,firstCompositeUuid:(f=this.bakeGroups[0])==null?void 0:f.composite.texture.uuid})}),this.controls=new bS(this.camera,this.renderer.domElement),this.controls.target.set(0,5,0),this.controls.update(),this.lightDummy=new gt,this.lightDummy.position.set(0,An-.001,0),this.scene.add(this.lightDummy),this.lightMarker=new fe(new Ln(2.5,2.5),new si({color:16777215,side:gn})),this.lightMarker.rotation.x=Math.PI/2,this.lightDummy.add(this.lightMarker),this.visualLight=new Uu(16777215,80,0,2),this.visualLight.userData.lightmapIgnore=!0,this.lightDummy.add(this.visualLight),this.lightTransformController=new yS(this.camera,this.renderer.domElement),this.lightTransformController.addEventListener("dragging-changed",f=>{this.controls.enabled=!f.value}),this.lightTransformController.attach(this.lightDummy),this.scene.add(this.lightTransformController),this.pane=new su.exports.Pane({title:"\u{1F506} Lightbaker"});const s=this.pane.addFolder({title:"View",expanded:!0});s.element.classList.add("tp-view"),s.addInput(this.options,"layer",{options:tC,label:"Layer"}).on("change",()=>this.applyRenderMode()),s.addInput(this.options,"filterMode",{options:nC,label:"Filtering"}).on("change",()=>this.applyRenderMode()),s.addInput(this.options,"showGizmo",{label:"Show Gizmo"}),s.addInput(this.options,"pause",{label:"Pause"});const e=this.pane.addFolder({title:"Bake Settings",expanded:!1});e.element.classList.add("tp-bake"),e.addInput(this.options,"quality",{options:Object.fromEntries(Object.keys(Kf).map(f=>[f,f])),label:"Preset"}).on("change",f=>this.applyQualityPreset(f.value)),e.addInput(this.options,"lightMapSize",{min:128,max:2048,step:128,label:"Atlas Size"}).on("change",f=>{this.options.quality="Custom",this.pane.refresh(),this.maybeBake(f)}),e.addInput(this.options,"texelsPerMeter",{min:1,max:50,step:.5,label:"Density (px/m)"}).on("change",f=>{this.refreshTexelDensityMaterials(),this.maybeBake(f)}),e.addInput(this.options,"casts",{min:1,max:16,step:1,label:"Casts/Frame"}).on("change",f=>{this.options.quality="Custom",this.pane.refresh(),this.maybeBake(f)}),e.addInput(this.options,"targetSamples",{min:16,max:1024,step:16,label:"Target Frames"}).on("change",f=>{this.options.quality="Custom",this.pane.refresh(),this.maybeBake(f)}),e.addInput(this.options,"bounces",{min:1,max:4,step:1,label:"Bounces"}).on("change",f=>{this.options.quality="Custom",this.pane.refresh(),this.maybeBake(f)}),e.addInput(this.options,"autoBake",{label:"Auto-bake"}),e.addInput(this.options,"safeMode",{label:"Safe Mode (TDR)"}).on("change",f=>{this.options.quality="Custom",this.pane.refresh(),this.maybeBake(f)}),e.addButton({title:"Bake Now"}).on("click",()=>this.bake());const t=this.pane.addFolder({title:"Lighting & GI",expanded:!1});t.element.classList.add("tp-light");const n=t.addFolder({title:"Direct Light"});n.addInput(this.options,"directLightEnabled",{label:"Enabled"}).on("change",this.maybeBake),n.addInput(this.options,"lightColor",{view:"color",label:"Color"}).on("change",this.maybeBake),n.addInput(this.options,"lightIntensity",{min:0,max:15,step:.1,label:"Bake Power"}).on("change",this.maybeBake),n.addInput(this.options,"lightSize",{min:.1,max:5,step:.1,label:"Source Size"}).on("change",this.maybeBake),n.addInput(this.options,"directIntensity",{min:0,max:4,step:.05,label:"View Multiplier"}).on("change",()=>this.refreshAllComposites({directIntensity:this.options.directIntensity}));const i=t.addFolder({title:"Global Illumination"});i.addInput(this.options,"indirectLightEnabled",{label:"Enabled"}).on("change",this.maybeBake),i.addInput(this.options,"giIntensity",{min:0,max:4,step:.05,label:"Bounce Power"}).on("change",()=>this.refreshAllComposites({giIntensity:this.options.giIntensity})),i.addInput(this.options,"skyColor",{view:"color",label:"Sky Color"}).on("change",this.maybeBake),i.addInput(this.options,"skyIntensity",{min:0,max:4,step:.05,label:"Sky Intensity"}).on("change",this.maybeBake);const r=t.addFolder({title:"Ambient Occlusion"});r.addInput(this.options,"ambientLightEnabled",{label:"Enabled"}).on("change",()=>this.refreshAllComposites({aoEnabled:this.options.ambientLightEnabled})),r.addInput(this.options,"ambientDistance",{min:.05,max:2,step:.05,label:"Max Distance"}).on("change",()=>void this.rebakeAO()),r.addInput(this.options,"aoIntensity",{min:0,max:3,step:.05,label:"Intensity"}).on("change",()=>this.refreshAllComposites({aoIntensity:this.options.aoIntensity})),r.addInput(this.options,"aoExponent",{min:.5,max:4,step:.1,label:"Exponent"}).on("change",()=>this.refreshAllComposites({aoExponent:this.options.aoExponent})),r.addInput(this.options,"aoSamples",{min:0,max:32,step:1,label:"Samples"}).on("change",()=>void this.rebakeAO());const o=this.pane.addFolder({title:"Refinement",expanded:!1});o.element.classList.add("tp-post"),o.addInput(this.options,"autoApplyRefinement",{label:"Auto-apply"}),o.addInput(this.options,"dilationIterations",{min:0,max:8,step:1,label:"Dilate Iters"}),o.addInput(this.options,"denoiseEnabled",{label:"Denoise"}),o.addInput(this.options,"denoiseSigma",{min:.1,max:8,step:.1,label:"Spatial Sigma"}),o.addInput(this.options,"denoiseThreshold",{min:.01,max:1,step:.01,label:"Edge Thresh"}),o.addInput(this.options,"denoiseKSigma",{min:.5,max:3,step:.1,label:"Range Sigma"}),o.addButton({title:"Run Refinement"}).on("click",()=>this.applyRefinement()),o.addButton({title:"Revert to Raw"}).on("click",()=>this.showUnrefined());const l=t.addFolder({title:"Secondary Light (Directional)"});l.addInput(this.options,"secondaryLightEnabled",{label:"Enabled"}).on("change",this.maybeBake),l.addInput(this.options,"secondaryDirX",{min:-1,max:1,step:.05,label:"Dir X"}).on("change",this.maybeBake),l.addInput(this.options,"secondaryDirY",{min:-1,max:1,step:.05,label:"Dir Y"}).on("change",this.maybeBake),l.addInput(this.options,"secondaryDirZ",{min:-1,max:1,step:.05,label:"Dir Z"}).on("change",this.maybeBake),l.addInput(this.options,"secondaryIntensity",{min:0,max:5,step:.1,label:"Intensity"}).on("change",this.maybeBake),l.addInput(this.options,"secondaryColor",{view:"color",label:"Color"}).on("change",this.maybeBake);const c=this.pane.addFolder({title:"Export",expanded:!1});c.element.classList.add("tp-export"),c.addInput(this.options,"exportFormat",{options:{"PNG (LDR preview)":"png","EXR (HDR linear)":"exr","Raw Float32 (.bin)":"bin"},label:"Format"}),c.addButton({title:"Export Final Lightmap"}).on("click",()=>this.exportFinal()),c.addButton({title:"Export Current Layer"}).on("click",()=>this.exportCurrent());const u=this.pane.addFolder({title:"Atlas Viewer",expanded:!1});u.element.classList.add("tp-viewer"),u.addInput(this.options,"atlasViewerEnabled",{label:"Enabled"}).on("change",f=>{this.atlasViewer.visible=f.value}),u.addInput(this.options,"atlasViewerSize",{min:128,max:768,step:32,label:"Size"}).on("change",f=>this.atlasViewer.setSize(f.value)),u.addInput(this.options,"atlasViewerCorner",{options:{"Top-Left":"tl","Top-Right":"tr","Bot-Left":"bl","Bot-Right":"br"},label:"Corner"}).on("change",f=>this.atlasViewer.setCorner(f.value)),u.addInput(this.options,"atlasViewerSRGB",{label:"sRGB Encode"}).on("change",f=>this.atlasViewer.setSRGB(f.value));const d=this.pane.addFolder({title:"Scene",expanded:!1});d.element.classList.add("tp-scene"),d.addInput(this.options,"preset",{options:iC,label:"Complexity"}).on("change",()=>this.rebuildScene()),d.addButton({title:"Import GLB..."}).on("click",()=>{this.glbFileInput.value="",this.glbFileInput.click()}),d.addButton({title:"Reset to Cornell"}).on("click",()=>this.rebuildScene()),d.addButton({title:"Export Scene as GLB"}).on("click",()=>void this.exportSceneGLB()),this.initUI(),this.rebuildScene()}buildPerMeshUI(){var e;(e=this.perMeshFolder)==null||e.dispose();const s=this.pane.addFolder({title:"Per-Mesh",expanded:!1});this.perMeshFolder=s;for(let t=0;t<this.meshes.length;t++){const n=this.meshes[t],i=n.uuid;this.options.perMesh[i]||(this.options.perMesh[i]={scaleInLightmap:1,exclude:!1});const r=this.options.perMesh[i],o=n.name||`Mesh ${t+1} (${n.geometry.type.replace("Geometry","")})`,l=s.addFolder({title:o,expanded:!1});l.addInput(r,"exclude",{label:"Exclude"}).on("change",this.maybeBake),l.addInput(r,"scaleInLightmap",{label:"Density \xD7",min:.25,max:4,step:.25}).on("change",c=>{this.refreshTexelDensityMaterials(),this.maybeBake(c)})}}initUI(){this.fpsElement=document.createElement("div"),this.fpsElement.style.position="absolute",this.fpsElement.style.top="10px",this.fpsElement.style.left="10px",this.fpsElement.style.color="#00ff00",this.fpsElement.style.fontFamily="monospace",this.fpsElement.style.fontSize="12px",this.fpsElement.style.lineHeight="1.4",this.fpsElement.style.pointerEvents="none",this.fpsElement.style.zIndex="100",this.fpsElement.style.padding="8px",this.fpsElement.style.backgroundColor="rgba(0, 0, 0, 0.5)",this.fpsElement.style.borderRadius="4px",document.body.appendChild(this.fpsElement),this.progressContainer=document.createElement("div"),this.progressContainer.style.position="absolute",this.progressContainer.style.bottom="20px",this.progressContainer.style.left="20px",this.progressContainer.style.width="300px",this.progressContainer.style.backgroundColor="rgba(0, 0, 0, 0.7)",this.progressContainer.style.padding="12px",this.progressContainer.style.borderRadius="4px",this.progressContainer.style.fontFamily="monospace",this.progressContainer.style.fontSize="11px",this.progressContainer.style.color="#fff",this.progressContainer.style.display="none",this.progressContainer.style.zIndex="100",this.progressContainer.style.border="1px solid #444",document.body.appendChild(this.progressContainer);const s=document.createElement("div");s.style.width="100%",s.style.height="4px",s.style.backgroundColor="#222",s.style.marginTop="8px",s.style.borderRadius="2px",s.style.overflow="hidden",this.progressContainer.appendChild(s),this.progressBar=document.createElement("div"),this.progressBar.className="progress-pulse",this.progressBar.style.width="0%",this.progressBar.style.height="100%",this.progressBar.style.backgroundColor="#00ff00",s.appendChild(this.progressBar),this.progressText=document.createElement("div"),this.progressText.style.marginTop="8px",this.progressText.style.whiteSpace="pre",this.progressContainer.appendChild(this.progressText),this.glbFileInput=document.createElement("input"),this.glbFileInput.type="file",this.glbFileInput.accept=".glb,.gltf",this.glbFileInput.style.display="none",this.glbFileInput.addEventListener("change",()=>{var t;const e=(t=this.glbFileInput.files)==null?void 0:t[0];e&&this.importGLB(e)}),document.body.appendChild(this.glbFileInput)}updateSize(){this.renderer.setSize(window.innerWidth,window.innerHeight),this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setPixelRatio(window.devicePixelRatio)}mat(s,e=.95,t=0){const n=new ll({color:s,roughness:e,metalness:t});return n._originalMap=null,n}addMesh(s){const e=s;return this.meshes.push(e),this.cornellRoot.add(e),e}buildWalls(){const e=this.mat(15790320),t=this.mat(14034728),n=this.mat(2924588),i=new fe(new wt(An,.2,An),e);i.name="Floor",i.position.set(0,-.2/2,0),this.addMesh(i);const r=new fe(new wt(An,.2,An),e.clone());r.name="Ceiling",r.material._originalMap=null,r.position.set(0,An+.2/2,0),this.addMesh(r);const o=new fe(new wt(An,An,.2),e.clone());o.name="Back Wall",o.material._originalMap=null,o.position.set(0,fr,-fr-.2/2),this.addMesh(o);const l=new fe(new wt(.2,An,An),t);l.name="Left Wall (Red)",l.position.set(-fr-.2/2,fr,0),this.addMesh(l);const c=new fe(new wt(.2,An,An),n);c.name="Right Wall (Green)",c.position.set(fr+.2/2,fr,0),this.addMesh(c)}buildClassicBlocks(){const s=this.mat(15263976),e=new fe(new wt(3,6,3),s);e.name="Tall Block",e.position.set(-1.8,3,-1.5),e.rotation.y=.29,this.addMesh(e);const t=new fe(new wt(3,3,3),s.clone());t.name="Short Block",t.material._originalMap=null,t.position.set(1.8,1.5,1.5),t.rotation.y=-.29,this.addMesh(t)}buildAdvancedExtras(){const s=new fe(new al(1,48,32),this.mat(16119285,.4,0));s.name="Sphere",s.position.set(2.4,1,3),this.addMesh(s);const e=new fe(new Du(.55,.18,160,24),this.mat(16765286,.55,0));e.name="Torus Knot",e.position.set(0,1,2.8),e.rotation.x=Math.PI/2,this.addMesh(e);const t=new fe(new wt(1.2,1.2,1.2),this.mat(13072954,.8,0));t.name="Accent Block",t.position.set(-3.5,.6,2.8),t.rotation.y=.45,this.addMesh(t)}async importGLB(s){var i;const e=await s.arrayBuffer(),t=new RS;let n;try{n=await new Promise((r,o)=>{t.parse(e,"",r,o)})}catch(r){console.error("[baker] GLB parse failed:",r);return}if(this.disposeAllGroups(),(i=this.matTexDispose)==null||i.call(this),this.matTexDispose=null,this.cornellRoot&&this.scene.remove(this.cornellRoot),this.cornellRoot=new gt,this.scene.add(this.cornellRoot),this.cornellRoot.add(n.scene),this.meshes=[],n.scene.traverse(r=>{const o=r;if(!o.isMesh)return;const l=o.material;Array.isArray(l)||!l||!("lightMap"in l)||(o.geometry.index||(o.geometry=Um(o.geometry)),this.meshes.push(o))}),!this.meshes.length){console.warn("[baker] imported GLB has no bake-eligible meshes (need MeshStandard*)");return}this.cornellRoot.updateMatrixWorld(!0),this.fitCameraAndLightToScene(),this.options.perMesh={},this.buildPerMeshUI(),this.options.autoBake&&await this.bake(),this.startLoop()}fitCameraAndLightToScene(){const s=new zt;for(const i of this.meshes)s.expandByObject(i);if(s.isEmpty())return;const e=s.getSize(new D),t=s.getCenter(new D),n=Math.max(e.x,e.y,e.z)||1;this.lightDummy.position.set(t.x,s.max.y+n*.1,t.z),this.camera.position.set(t.x,t.y,t.z+n*2.5),this.controls.target.copy(t),this.controls.update()}async exportSceneGLB(){if(!this.meshes.length){console.warn("[baker] no meshes to export");return}if(!this.bakeGroups.length){console.warn("[baker] no baked lightmap available \u2014 bake first");return}const s=this.options.layer;this.options.layer="combined",this.applyRenderMode(),this.options.layer=s;const{GLTFExporter:e}=await c_(()=>import("./GLTFExporter.a8d5252e.js"),[]),t=new e,n=await new Promise((l,c)=>{t.parse(this.cornellRoot,u=>{u instanceof ArrayBuffer?l(u):c(new Error("expected binary GLB output"))},u=>c(u),{binary:!0,embedImages:!0})}),i=new Blob([n],{type:"model/gltf-binary"}),r=URL.createObjectURL(i),o=document.createElement("a");o.href=r,o.download="scene-baked.glb",o.click(),URL.revokeObjectURL(r)}async rebuildScene(){this.disposeAllGroups(),this.cornellRoot&&this.scene.remove(this.cornellRoot),this.cornellRoot=new gt,this.scene.add(this.cornellRoot),this.meshes=[],this.buildWalls(),this.buildClassicBlocks(),this.options.preset==="advanced"&&this.buildAdvancedExtras();const s=new Set(this.meshes.map(e=>e.uuid));for(const e of Object.keys(this.options.perMesh))s.has(e)||delete this.options.perMesh[e];this.installDummyLightmaps(),this.buildPerMeshUI(),this.options.autoBake&&await this.bake(),this.startLoop()}getDummyLightmap(){if(this.dummyLightmap)return this.dummyLightmap;const s=new Uint8Array([255,255,255,255]),e=new Ss(s,1,1);return e.needsUpdate=!0,e.channel=2,this.dummyLightmap=e,e}installDummyLightmaps(){const s=this.getDummyLightmap();for(const e of this.meshes){const t=e.material;!t||(t.lightMap=s,t.lightMapIntensity=0,t.needsUpdate=!0)}}disposeAllGroups(){var s;for(const e of this.bakeGroups)(s=e.refinement)==null||s.dispose(),e.composite.dispose(),e.aoMapper.dispose(),e.lightmapper.dispose(),e.atlasDispose();this.bakeGroups=[],this.meshToGroup.clear()}async bake(){var l,c;if(!this.meshes.length)return;this.progressContainer.style.display="block",this.bakeStartTime=performance.now(),this.diag.snap("bake() entry"),this.bakeBatchHistory=[];const s=this.options.lightMapSize;if(this.scene.updateMatrixWorld(!0),!this.meshes.filter(u=>{var d;return((d=this.options.perMesh[u.uuid])==null?void 0:d.exclude)!==!0}).length){console.warn("[baker] all meshes excluded \u2014 nothing to bake"),this.progressContainer.style.display="none";return}this.disposeAllGroups(),(l=this.matTexDispose)==null||l.call(this),this.matTexDispose=null;const t=new Ge(this.options.lightColor).convertSRGBToLinear();this.visualLight.color.copy(t),this.visualLight.intensity=30*this.options.lightIntensity;let n=null;if(this.options.secondaryLightEnabled){n=new Fu(new Ge(this.options.secondaryColor).convertSRGBToLinear(),this.options.secondaryIntensity);const u=new D(this.options.secondaryDirX,this.options.secondaryDirY,this.options.secondaryDirZ).normalize();n.position.copy(u).multiplyScalar(-10),this.scene.add(n)}const i={};for(const u of this.meshes){const d=this.options.perMesh[u.uuid];if(!d)continue;const f={};d.scaleInLightmap!==void 0&&d.scaleInLightmap!==1&&(f.density=d.scaleInLightmap),d.exclude&&(f.exclude=!0),(f.density!==void 0||f.exclude)&&(i[u.uuid]=f)}const r={resolution:s,samples:this.options.targetSamples,castsPerFrame:this.options.casts,bounces:this.options.bounces,filtering:this.options.filterMode==="linear"?"linear":"nearest",texelsPerMeter:this.options.texelsPerMeter,perMesh:i,denoise:!1,refinementOptions:{dilationIterations:0,denoiseEnabled:!1},light:{position:this.lightDummy.position.clone(),color:this.options.lightColor,intensity:this.options.lightIntensity,size:this.options.lightSize,enabled:this.options.directLightEnabled},gi:{enabled:this.options.indirectLightEnabled,intensity:this.options.giIntensity,skyColor:this.options.skyColor,skyIntensity:this.options.skyIntensity},ao:{enabled:this.options.ambientLightEnabled,distance:this.options.ambientDistance,intensity:this.options.aoIntensity,exponent:this.options.aoExponent,samples:this.options.aoSamples},timeoutProtection:{safeMode:this.options.safeMode}};let o;try{o=await new j1(this.renderer,r).bake(this.scene,{onProgress:(d,f)=>{d==="bake"&&(this.progressBar.style.width=`${Math.min(100,f*100)}%`)},onFrame:d=>{const f=this.bakeGroups[d.groupIndex];f&&f.composite.refresh(),(d.bounceSamples%30===0||d.done)&&this.diag.snap(`bake RAF samples=${d.bounceSamples}/${d.targetSamples} done=${d.done}`);const m=d.targetSamples,g=Math.min(d.bounceSamples,d.aoSamples),b=d.totalGroups>0?(d.groupIndex+g/Math.max(1,m))/d.totalGroups:0;this.progressBar.style.width=`${Math.min(100,b*100)}%`;const w=(performance.now()-this.bakeStartTime)/1e3,x=g*this.options.casts;this.options.samples=g,this.options.spp=x;let v="";d.totalGroups>1&&(v=`
Atlas ${d.groupIndex+1}/${d.totalGroups}`),this.progressText.innerText=`Baking: ${g}/${m} frames (${x} spp)
Elapsed: ${w.toFixed(1)}s`+v}})}finally{n&&this.scene.remove(n)}this.bakeResult=o,this.bakeGroups=[],this.meshToGroup.clear();for(let u=0;u<o.groups.length;u++){const d=o.groups[u],f=ig(this.renderer,{direct:d.lightmapper.textures.direct,indirect:d.lightmapper.textures.indirect,ao:d.aoMapper.texture},d.resolution,{directIntensity:this.options.directIntensity,giIntensity:this.options.giIntensity,aoEnabled:this.options.ambientLightEnabled,aoIntensity:this.options.aoIntensity,aoExponent:this.options.aoExponent}),m={atlasIdx:u,meshes:[...d.meshes],positionTexture:d.textures.position,normalTexture:d.textures.normal,atlasDispose:()=>f.dispose(),lightmapper:d.lightmapper,aoMapper:d.aoMapper,composite:f,refinement:null};this.bakeGroups.push(m);for(const g of m.meshes)this.meshToGroup.set(g,m)}this.matTexDispose=()=>o.dispose(),this.options.refinementStatus="idle",this.options.samples=this.options.targetSamples,this.options.spp=this.options.targetSamples*this.options.casts,this.options.etaSec=0,this.options.pause=!1,this.progressBar.style.width="100%",this.pane.refresh(),console.info("[baker:debug] bake() returned, calling applyRenderMode",{groups:this.bakeGroups.length,result:!!this.bakeResult,meshes:this.meshes.length,firstGroupComposite:(c=this.bakeGroups[0])==null?void 0:c.composite.texture.uuid}),this.diag.snap("after baker.bake() return, before applyRenderMode"),this.applyRenderMode(),this.diag.snap("after applyRenderMode (lightmaps mounted)"),this.firstPostBakeRender=!0}applyQualityPreset(s){const e=Kf[s];!e||(this.options.lightMapSize=e.lightMapSize,this.options.casts=e.casts,this.options.targetSamples=e.targetSamples,this.pane.refresh(),this.bake())}async applyRefinement(){var e;if(!this.bakeGroups.length)return;this.options.refinementStatus="running",this.pane.refresh();const s=this.options.lightMapSize;for(let t=0;t<this.bakeGroups.length;t++){const n=this.bakeGroups[t];(e=n.refinement)==null||e.dispose(),n.refinement=await Wu(this.renderer,n.composite.texture,n.positionTexture,s,this.options,i=>{const r=(t+i)/this.bakeGroups.length;this.progressBar.style.width=`${Math.min(100,r*100)}%`,this.progressText.innerText=`Refinement: atlas ${t+1}/${this.bakeGroups.length} (${Math.round(i*100)}%)
Dilation & Bilateral Denoise...`})}this.options.refinementStatus=this.options.dilationIterations>0||this.options.denoiseEnabled?"applied":"skipped",this.pane.refresh(),this.applyRenderMode(),this.progressText.innerText=`Baking & Refinement complete!
Ready.`,setTimeout(()=>{this.progressContainer.style.display="none"},3e3)}async exportFinal(){var e,t;if(!this.bakeGroups.length){console.warn("[baker] export: no bake to export \u2014 bake first");return}const s=this.bakeGroups[0].refinement?"refined":"composite";for(let n=0;n<this.bakeGroups.length;n++){const i=this.bakeGroups[n],r=(t=(e=i.refinement)==null?void 0:e.texture)!=null?t:i.composite.texture,o=this.bakeGroups.length>1?`_atlas${n}`:"";await this.runExport(r,`lightmap_${s}_${this.options.lightMapSize}${o}`)}}async exportCurrent(){var t;const s=(t=ms.find(n=>n.id===this.options.layer))!=null?t:ms[0];if(!this.bakeGroups.length){console.warn("[baker] export: no bake to export \u2014 bake first");return}let e=0;for(let n=0;n<this.bakeGroups.length;n++){const i=this.bakeGroups[n],r=s.getLightMap({group:i});if(!r)continue;const o=this.bakeGroups.length>1?`_atlas${n}`:"";await this.runExport(r,`lightmap_${s.id}_${this.options.lightMapSize}${o}`),e++}e||console.warn(`[baker] export: layer "${s.id}" has no exportable texture`)}async runExport(s,e){const t=this.options.exportFormat,n=this.options.lightMapSize,i=performance.now();try{await cg(this.renderer,s,n,e,t),console.info(`[baker] exported ${e}.${t} (${n}\xD7${n}) in ${(performance.now()-i).toFixed(0)}ms`)}catch(r){throw console.error("[baker] export failed:",r),r}}showUnrefined(){var s;for(const e of this.bakeGroups)(s=e.refinement)==null||s.dispose(),e.refinement=null;this.options.refinementStatus="idle",this.pane.refresh(),this.applyRenderMode()}applyRenderMode(){var i,r;const s=(i=ms.find(o=>o.id===this.options.layer))!=null?i:ms[0];if(s.id==="texelDensity"){this.refreshTexelDensityMaterials();for(const o of this.meshes){this.originalMaterials.has(o)||this.originalMaterials.set(o,o.material);const l=this.texelDensityMats.get(o);l&&(o.material=l)}this.visualLight.visible=!1;return}for(const o of this.meshes){const l=this.originalMaterials.get(o);l&&o.material!==l&&(o.material=l)}let e=0,t=0;const n=this.getDummyLightmap();for(const o of this.meshes){const l=o.material;l.map=s.showAlbedo&&(r=l._originalMap)!=null?r:null;const c=this.meshToGroup.get(o),u=c?s.getLightMap({group:c}):null;u?(l.lightMap=u,l.lightMap.channel=2,l.lightMapIntensity=1,e++):(l.lightMap=n,l.lightMapIntensity=0,t++)}console.info("[baker:debug] applyRenderMode",{layer:s.id,meshes:this.meshes.length,mounted:e,nullLM:t,groups:this.bakeGroups.length}),this.lightMarker.material.color=new Ge(16777215),this.visualLight.visible=s.id==="albedo"}estimateTimeRemaining(s,e){if(e<=0||s>=e)return 0;const t=this.bakeBatchHistory;if(t.length<2)return 0;const n=t[0],i=t[t.length-1],r=i.samples-n.samples,o=i.t-n.t;if(r<=0||o<=0)return 0;const l=o/r;return(e-s)*l/1e3}startLoop(){if(this.looping)return;this.looping=!0;let s=performance.now(),e=0,t=0;const n=()=>{var r,o,l;requestAnimationFrame(n),this.lightTransformController.visible=this.options.showGizmo,this.lightTransformController.enabled=this.options.showGizmo;const i=performance.now();if(e++,i>=s+1e3){t=Math.round(e*1e3/(i-s));let c=0,u=0;const d=this.renderer.info.memory.textures;for(const b of this.bakeGroups){const w=this.options.lightMapSize;c+=w*w*16*2,c+=w*w*8,c+=w*w*16*3,b.refinement&&(c+=w*w*8)}for(const b of this.meshes){const w=b.geometry;if(w.index)u+=w.index.count/3;else{const x=w.attributes.position;x&&(u+=x.count/3)}}const f=(c/(1024*1024)).toFixed(1),m=(u/1e3).toFixed(1);let g=`FPS: ${t}
`;g+=`VRAM: ${f} MB (${d} tex)
`,g+=`TRIS: ${m}k
`,this.bakeGroups.length&&!this.options.pause?g+=`RAYS: ${(this.bakeGroups.length*this.options.lightMapSize*this.options.lightMapSize*this.options.casts*t/1e6).toFixed(1)}M/s`:g+="RAYS: 0.0M/s",this.fpsElement.innerText=g,e=0,s=i}if(this.bakeGroups.length&&!this.options.pause){let c=!0,u=1/0;const d=[];for(const y of this.bakeGroups){const S=y.lightmapper.render(),C=y.aoMapper.render();(!S.done||!C.done)&&(c=!1);const P=Math.min(S.samples,C.samples);P<u&&(u=P),d.push(P)}if(Number.isFinite(u)||(u=0),c){this.options.pause=!0,this.options.etaSec=0;const y=(performance.now()-this.bakeStartTime)/1e3;console.info(`[baker] done in ${y.toFixed(2)}s (${this.bakeGroups.length} atlas${this.bakeGroups.length===1?"":"es"})`),this.progressText.innerText=`Baking complete! ${y.toFixed(1)}s
Running post-process...`,console.info("[baker:debug] post-bake done",{groups:this.bakeGroups.length,firstCompositeUuid:(r=this.bakeGroups[0])==null?void 0:r.composite.texture.uuid}),this.pane.refresh(),this.options.autoApplyRefinement&&this.applyRefinement();return}for(const y of this.bakeGroups)y.composite.refresh();const f=this.options.targetSamples,m=f>0?u/f:0;this.progressBar.style.width=`${Math.min(100,m*100)}%`;const g=(performance.now()-this.bakeStartTime)/1e3,b=performance.now(),w=this.bakeBatchHistory[this.bakeBatchHistory.length-1];(!w||w.samples!==u)&&(this.bakeBatchHistory.push({samples:u,t:b}),this.bakeBatchHistory.length>ug.BAKE_ETA_WINDOW&&this.bakeBatchHistory.shift());const x=this.estimateTimeRemaining(u,f),v=u*this.options.casts;this.options.samples=u,this.options.spp=v,this.options.etaSec=Math.ceil(x);let M;this.bakeGroups.length===1?M="":this.bakeGroups.length<=6?M=`
Atlases: [`+d.map(y=>y>=f?`${f}\u2713`:String(y)).join(", ")+"]":M=`
Atlases: ${d.filter(S=>S>=f).length}/${this.bakeGroups.length} done`,this.progressText.innerText=`Baking: ${u}/${f} frames (${v} spp)
Elapsed: ${g.toFixed(1)}s | ETA: ${this.options.etaSec}s`+M}if(this.controls.update(),this.firstPostBakeRender?(this.firstPostBakeRender=!1,this.diag.snap("about to do FIRST post-bake scene render"),this.diag.measure("FIRST post-bake renderer.render",()=>this.renderer.render(this.scene,this.camera)),this.diag.snap("after FIRST post-bake scene render")):this.renderer.render(this.scene,this.camera),this.atlasViewer.visible=this.options.atlasViewerEnabled,this.atlasViewer.visible){const c=(o=ms.find(d=>d.id===this.options.layer))!=null?o:ms[0];if(this.bakeGroups.length===0)this.atlasViewer.setTexture(null);else{const d=[];for(const f of this.bakeGroups)d.push((l=c.getLightMap({group:f}))!=null?l:f.composite.texture);this.atlasViewer.setTextures(d)}const u=this.bakeGroups.length>1?` (${this.bakeGroups.length} atlases)`:"";this.atlasViewer.setLayerLabel(c.label+u)}this.atlasViewer.render(this.renderer)};n()}refreshAllComposites(s){for(const e of this.bakeGroups)e.composite.refresh(s)}async rebakeAO(){if(!this.bakeGroups.length||!this.bakeResult)return;await this.bakeResult.rebakeAO({samples:this.options.aoSamples,distance:this.options.ambientDistance,targetSamples:this.options.targetSamples});const s=this.bakeResult.groups;for(let e=0;e<this.bakeGroups.length;e++){const t=this.bakeGroups[e],n=s[e];!n||(t.aoMapper=n.aoMapper,t.composite.refresh({aoTex:n.aoMapper.texture}))}this.options.pause=!1}refreshTexelDensityMaterials(){var e,t,n;const s=new Set(this.meshes);for(const i of this.texelDensityMats.keys())s.has(i)||((e=this.texelDensityMats.get(i))==null||e.dispose(),this.texelDensityMats.delete(i));for(const i of this.meshes){const r=(n=(t=this.options.perMesh[i.uuid])==null?void 0:t.scaleInLightmap)!=null?n:1,o=this.options.texelsPerMeter*r;let l=this.texelDensityMats.get(i);l?(l.setTexelsPerMeter(o),l.setLightmapSize(this.options.lightMapSize)):(l=new N1({texelsPerMeter:o,lightmapSize:this.options.lightMapSize}),this.texelDensityMats.set(i,l))}}};let hg=ug;hg.BAKE_ETA_WINDOW=16;(async()=>{await gT();const s=new hg;window.addEventListener("resize",()=>s.updateSize())})();export{Rt as B,rC as C,gn as D,Ro as I,xt as L,fe as M,On as N,Ln as P,Wt as Q,Xt as R,Zt as S,ul as U,D as V,Am as W,Ot as a,mn as b,Cm as c,Ge as d,sC as e,dm as f,cm as g,_t as h,Xe as i,Ar as j,ft as k,jc as l,mr as m,Va as n,Si as o,dn as p,Sr as q,Ya as r};
