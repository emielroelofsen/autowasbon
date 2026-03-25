import{J as Kc,l as Kr,W as Oa,U as Yu}from"./wensen-config-Buz9lHcy.js";/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const nr="160",Jc=0,Jr=1,Qc=2,el=0,Xo=1,Wi=2,nn=3,xt=0,Pt=1,Yt=2,vn=0,qn=1,Qr=2,eo=3,to=4,tl=5,Pn=100,nl=101,il=102,no=103,io=104,sl=200,rl=201,ol=202,al=203,Xs=204,Zs=205,cl=206,ll=207,ul=208,hl=209,dl=210,fl=211,pl=212,ml=213,gl=214,_l=0,vl=1,xl=2,qi=3,bl=4,Sl=5,Ml=6,yl=7,Zo=0,Tl=1,El=2,xn=0,Al=1,wl=2,Rl=3,Yo=4,Cl=5,Ll=6,so="attached",Pl="detached",qo=300,$n=301,Kn=302,Ys=303,qs=304,ns=306,Jn=1e3,vt=1001,$i=1002,lt=1003,$s=1004,ji=1005,ut=1006,$o=1007,Nn=1008,bn=1009,Il=1010,Dl=1011,ir=1012,Ko=1013,mn=1014,rn=1015,Ri=1016,Jo=1017,Qo=1018,Dn=1020,Ul=1021,It=1023,Nl=1024,Ol=1025,Un=1026,Qn=1027,Fl=1028,ea=1029,Bl=1030,ta=1031,na=1033,Bs=33776,ks=33777,zs=33778,Gs=33779,ro=35840,oo=35841,ao=35842,co=35843,ia=36196,lo=37492,uo=37496,ho=37808,fo=37809,po=37810,mo=37811,go=37812,_o=37813,vo=37814,xo=37815,bo=37816,So=37817,Mo=37818,yo=37819,To=37820,Eo=37821,Hs=36492,Ao=36494,wo=36495,kl=36283,Ro=36284,Co=36285,Lo=36286,Ci=2300,ei=2301,Vs=2302,Po=2400,Io=2401,Do=2402,zl=2500,Gl=0,sa=1,Ks=2,ra=3e3,Sn=3001,Hl=3200,Vl=3201,oa=0,Wl=1,Ft="",qe="srgb",dt="srgb-linear",sr="display-p3",is="display-p3-linear",Ki="linear",et="srgb",Ji="rec709",Qi="p3",Xn=7680,Uo=519,jl=512,Xl=513,Zl=514,aa=515,Yl=516,ql=517,$l=518,Kl=519,Js=35044,No="300 es",Qs=1035,on=2e3,es=2001;class ii{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const St=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Fa=1234567;const Xi=Math.PI/180,Li=180/Math.PI;function qt(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(St[s&255]+St[s>>8&255]+St[s>>16&255]+St[s>>24&255]+"-"+St[e&255]+St[e>>8&255]+"-"+St[e>>16&15|64]+St[e>>24&255]+"-"+St[t&63|128]+St[t>>8&255]+"-"+St[t>>16&255]+St[t>>24&255]+St[n&255]+St[n>>8&255]+St[n>>16&255]+St[n>>24&255]).toLowerCase()}function yt(s,e,t){return Math.max(e,Math.min(t,s))}function ca(s,e){return(s%e+e)%e}function qu(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function $u(s,e,t){return s!==e?(t-s)/(e-s):0}function Zi(s,e,t){return(1-t)*s+t*e}function Ku(s,e,t,n){return Zi(s,e,1-Math.exp(-t*n))}function Ju(s,e=1){return e-Math.abs(ca(s,e*2)-e)}function Qu(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function eh(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function th(s,e){return s+Math.floor(Math.random()*(e-s+1))}function nh(s,e){return s+Math.random()*(e-s)}function ih(s){return s*(.5-Math.random())}function sh(s){s!==void 0&&(Fa=s);let e=Fa+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function rh(s){return s*Xi}function oh(s){return s*Li}function Oo(s){return(s&s-1)===0&&s!==0}function ah(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function er(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function ch(s,e,t,n,i){const r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),u=a((e+n)/2),h=r((e-n)/2),d=a((e-n)/2),p=r((n-e)/2),g=a((n-e)/2);switch(i){case"XYX":s.set(o*u,c*h,c*d,o*l);break;case"YZY":s.set(c*d,o*u,c*h,o*l);break;case"ZXZ":s.set(c*h,c*d,o*u,o*l);break;case"XZX":s.set(o*u,c*g,c*p,o*l);break;case"YXY":s.set(c*p,o*u,c*g,o*l);break;case"ZYZ":s.set(c*g,c*p,o*u,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function sn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Ye(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Jl={DEG2RAD:Xi,RAD2DEG:Li,generateUUID:qt,clamp:yt,euclideanModulo:ca,mapLinear:qu,inverseLerp:$u,lerp:Zi,damp:Ku,pingpong:Ju,smoothstep:Qu,smootherstep:eh,randInt:th,randFloat:nh,randFloatSpread:ih,seededRandom:sh,degToRad:rh,radToDeg:oh,isPowerOfTwo:Oo,ceilPowerOfTwo:ah,floorPowerOfTwo:er,setQuaternionFromProperEuler:ch,normalize:Ye,denormalize:sn};class He{constructor(e=0,t=0){He.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(yt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Oe{constructor(e,t,n,i,r,a,o,c,l){Oe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,c,l)}set(e,t,n,i,r,a,o,c,l){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],h=n[7],d=n[2],p=n[5],g=n[8],_=i[0],m=i[3],f=i[6],b=i[1],v=i[4],S=i[7],R=i[2],A=i[5],y=i[8];return r[0]=a*_+o*b+c*R,r[3]=a*m+o*v+c*A,r[6]=a*f+o*S+c*y,r[1]=l*_+u*b+h*R,r[4]=l*m+u*v+h*A,r[7]=l*f+u*S+h*y,r[2]=d*_+p*b+g*R,r[5]=d*m+p*v+g*A,r[8]=d*f+p*S+g*y,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-n*r*u+n*o*c+i*r*l-i*a*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=u*a-o*l,d=o*c-u*r,p=l*r-a*c,g=t*h+n*d+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(i*l-u*n)*_,e[2]=(o*n-i*a)*_,e[3]=d*_,e[4]=(u*t-i*c)*_,e[5]=(i*r-o*t)*_,e[6]=p*_,e[7]=(n*c-l*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-i*l,i*c,-i*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(_r.makeScale(e,t)),this}rotate(e){return this.premultiply(_r.makeRotation(-e)),this}translate(e,t){return this.premultiply(_r.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const _r=new Oe;function Ql(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function ts(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function eu(){const s=ts("canvas");return s.style.display="block",s}const Ba={};function Yi(s){s in Ba||(Ba[s]=!0,console.warn(s))}const ka=new Oe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),za=new Oe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ls={[dt]:{transfer:Ki,primaries:Ji,toReference:s=>s,fromReference:s=>s},[qe]:{transfer:et,primaries:Ji,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[is]:{transfer:Ki,primaries:Qi,toReference:s=>s.applyMatrix3(za),fromReference:s=>s.applyMatrix3(ka)},[sr]:{transfer:et,primaries:Qi,toReference:s=>s.convertSRGBToLinear().applyMatrix3(za),fromReference:s=>s.applyMatrix3(ka).convertLinearToSRGB()}},lh=new Set([dt,is]),We={enabled:!0,_workingColorSpace:dt,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!lh.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const n=ls[e].toReference,i=ls[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return ls[s].primaries},getTransfer:function(s){return s===Ft?Ki:ls[s].transfer}};function Ei(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function vr(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ai;class la{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ai===void 0&&(ai=ts("canvas")),ai.width=e.width,ai.height=e.height;const n=ai.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ai}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ts("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Ei(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ei(t[n]/255)*255):t[n]=Ei(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let uh=0;class ua{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:uh++}),this.uuid=qt(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(xr(i[a].image)):r.push(xr(i[a]))}else r=xr(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function xr(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?la.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let hh=0;class ht extends ii{constructor(e=ht.DEFAULT_IMAGE,t=ht.DEFAULT_MAPPING,n=vt,i=vt,r=ut,a=Nn,o=It,c=bn,l=ht.DEFAULT_ANISOTROPY,u=Ft){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hh++}),this.uuid=qt(),this.name="",this.source=new ua(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new He(0,0),this.repeat=new He(1,1),this.center=new He(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Yi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Sn?qe:Ft),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==qo)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Jn:e.x=e.x-Math.floor(e.x);break;case vt:e.x=e.x<0?0:1;break;case $i:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Jn:e.y=e.y-Math.floor(e.y);break;case vt:e.y=e.y<0?0:1;break;case $i:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Yi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===qe?Sn:ra}set encoding(e){Yi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Sn?qe:Ft}}ht.DEFAULT_IMAGE=null;ht.DEFAULT_MAPPING=qo;ht.DEFAULT_ANISOTROPY=1;class $e{constructor(e=0,t=0,n=0,i=1){$e.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],p=c[5],g=c[9],_=c[2],m=c[6],f=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(l+1)/2,S=(p+1)/2,R=(f+1)/2,A=(u+d)/4,y=(h+_)/4,C=(g+m)/4;return v>S&&v>R?v<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(v),i=A/n,r=y/n):S>R?S<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(S),n=A/i,r=C/i):R<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(R),n=y/r,i=C/r),this.set(n,i,r,t),this}let b=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(h-_)/b,this.z=(d-u)/b,this.w=Math.acos((l+p+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class tu extends ii{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new $e(0,0,e,t),this.scissorTest=!1,this.viewport=new $e(0,0,e,t);const i={width:e,height:t,depth:1};n.encoding!==void 0&&(Yi("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Sn?qe:Ft),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ut,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new ht(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new ua(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class On extends tu{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class ha extends ht{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=lt,this.minFilter=lt,this.wrapR=vt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class nu extends ht{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=lt,this.minFilter=lt,this.wrapR=vt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Mn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let c=n[i+0],l=n[i+1],u=n[i+2],h=n[i+3];const d=r[a+0],p=r[a+1],g=r[a+2],_=r[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(h!==_||c!==d||l!==p||u!==g){let m=1-o;const f=c*d+l*p+u*g+h*_,b=f>=0?1:-1,v=1-f*f;if(v>Number.EPSILON){const R=Math.sqrt(v),A=Math.atan2(R,f*b);m=Math.sin(m*A)/R,o=Math.sin(o*A)/R}const S=o*b;if(c=c*m+d*S,l=l*m+p*S,u=u*m+g*S,h=h*m+_*S,m===1-o){const R=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=R,l*=R,u*=R,h*=R}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,a){const o=n[i],c=n[i+1],l=n[i+2],u=n[i+3],h=r[a],d=r[a+1],p=r[a+2],g=r[a+3];return e[t]=o*g+u*h+c*p-l*d,e[t+1]=c*g+u*d+l*h-o*p,e[t+2]=l*g+u*p+o*d-c*h,e[t+3]=u*g-o*h-c*d-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(i/2),h=o(r/2),d=c(n/2),p=c(i/2),g=c(r/2);switch(a){case"XYZ":this._x=d*u*h+l*p*g,this._y=l*p*h-d*u*g,this._z=l*u*g+d*p*h,this._w=l*u*h-d*p*g;break;case"YXZ":this._x=d*u*h+l*p*g,this._y=l*p*h-d*u*g,this._z=l*u*g-d*p*h,this._w=l*u*h+d*p*g;break;case"ZXY":this._x=d*u*h-l*p*g,this._y=l*p*h+d*u*g,this._z=l*u*g+d*p*h,this._w=l*u*h-d*p*g;break;case"ZYX":this._x=d*u*h-l*p*g,this._y=l*p*h+d*u*g,this._z=l*u*g-d*p*h,this._w=l*u*h+d*p*g;break;case"YZX":this._x=d*u*h+l*p*g,this._y=l*p*h+d*u*g,this._z=l*u*g-d*p*h,this._w=l*u*h-d*p*g;break;case"XZY":this._x=d*u*h-l*p*g,this._y=l*p*h-d*u*g,this._z=l*u*g+d*p*h,this._w=l*u*h+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=n+o+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-c)*p,this._y=(r-l)*p,this._z=(a-i)*p}else if(n>o&&n>h){const p=2*Math.sqrt(1+n-o-h);this._w=(u-c)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(r+l)/p}else if(o>h){const p=2*Math.sqrt(1+o-n-h);this._w=(r-l)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(c+u)/p}else{const p=2*Math.sqrt(1+h-n-o);this._w=(a-i)/p,this._x=(r+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(yt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+a*o+i*l-r*c,this._y=i*u+a*c+r*o-n*l,this._z=r*u+a*l+n*c-i*o,this._w=a*u-n*o-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,o),h=Math.sin((1-t)*u)/l,d=Math.sin(t*u)/l;return this._w=a*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,n=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ga.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ga.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*i-o*n),u=2*(o*t-r*i),h=2*(r*n-a*t);return this.x=t+c*l+a*h-o*u,this.y=n+c*u+o*l-r*h,this.z=i+c*h+r*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=i*c-r*o,this.y=r*a-n*c,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return br.copy(this).projectOnVector(e),this.sub(br)}reflect(e){return this.sub(br.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(yt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const br=new I,Ga=new Mn;class Kt{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Wt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Wt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Wt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Wt):Wt.fromBufferAttribute(r,a),Wt.applyMatrix4(e.matrixWorld),this.expandByPoint(Wt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),us.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),us.copy(n.boundingBox)),us.applyMatrix4(e.matrixWorld),this.union(us)}const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Wt),Wt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Oi),hs.subVectors(this.max,Oi),ci.subVectors(e.a,Oi),li.subVectors(e.b,Oi),ui.subVectors(e.c,Oi),yn.subVectors(li,ci),Tn.subVectors(ui,li),zn.subVectors(ci,ui);let t=[0,-yn.z,yn.y,0,-Tn.z,Tn.y,0,-zn.z,zn.y,yn.z,0,-yn.x,Tn.z,0,-Tn.x,zn.z,0,-zn.x,-yn.y,yn.x,0,-Tn.y,Tn.x,0,-zn.y,zn.x,0];return!Sr(t,ci,li,ui,hs)||(t=[1,0,0,0,1,0,0,0,1],!Sr(t,ci,li,ui,hs))?!1:(ds.crossVectors(yn,Tn),t=[ds.x,ds.y,ds.z],Sr(t,ci,li,ui,hs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Wt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Wt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ln[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ln[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ln[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ln[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ln[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ln[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ln[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ln[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ln),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ln=[new I,new I,new I,new I,new I,new I,new I,new I],Wt=new I,us=new Kt,ci=new I,li=new I,ui=new I,yn=new I,Tn=new I,zn=new I,Oi=new I,hs=new I,ds=new I,Gn=new I;function Sr(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Gn.fromArray(s,r);const o=i.x*Math.abs(Gn.x)+i.y*Math.abs(Gn.y)+i.z*Math.abs(Gn.z),c=e.dot(Gn),l=t.dot(Gn),u=n.dot(Gn);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const dh=new Kt,Fi=new I,Mr=new I;class Jt{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):dh.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Fi.subVectors(e,this.center);const t=Fi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Fi,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Mr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Fi.copy(e.center).add(Mr)),this.expandByPoint(Fi.copy(e.center).sub(Mr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const un=new I,yr=new I,fs=new I,En=new I,Tr=new I,ps=new I,Er=new I;class ss{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,un)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=un.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(un.copy(this.origin).addScaledVector(this.direction,t),un.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){yr.copy(e).add(t).multiplyScalar(.5),fs.copy(t).sub(e).normalize(),En.copy(this.origin).sub(yr);const r=e.distanceTo(t)*.5,a=-this.direction.dot(fs),o=En.dot(this.direction),c=-En.dot(fs),l=En.lengthSq(),u=Math.abs(1-a*a);let h,d,p,g;if(u>0)if(h=a*c-o,d=a*o-c,g=r*u,h>=0)if(d>=-g)if(d<=g){const _=1/u;h*=_,d*=_,p=h*(h+a*d+2*o)+d*(a*h+d+2*c)+l}else d=r,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*c)+l;else d=-r,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*c)+l;else d<=-g?(h=Math.max(0,-(-a*r+o)),d=h>0?-r:Math.min(Math.max(-r,-c),r),p=-h*h+d*(d+2*c)+l):d<=g?(h=0,d=Math.min(Math.max(-r,-c),r),p=d*(d+2*c)+l):(h=Math.max(0,-(a*r+o)),d=h>0?r:Math.min(Math.max(-r,-c),r),p=-h*h+d*(d+2*c)+l);else d=a>0?-r:r,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(yr).addScaledVector(fs,d),p}intersectSphere(e,t){un.subVectors(e.center,this.origin);const n=un.dot(this.direction),i=un.dot(un)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),u>=0?(r=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),h>=0?(o=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,un)!==null}intersectTriangle(e,t,n,i,r){Tr.subVectors(t,e),ps.subVectors(n,e),Er.crossVectors(Tr,ps);let a=this.direction.dot(Er),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;En.subVectors(this.origin,e);const c=o*this.direction.dot(ps.crossVectors(En,ps));if(c<0)return null;const l=o*this.direction.dot(Tr.cross(En));if(l<0||c+l>a)return null;const u=-o*En.dot(Er);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Fe{constructor(e,t,n,i,r,a,o,c,l,u,h,d,p,g,_,m){Fe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,c,l,u,h,d,p,g,_,m)}set(e,t,n,i,r,a,o,c,l,u,h,d,p,g,_,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=i,f[1]=r,f[5]=a,f[9]=o,f[13]=c,f[2]=l,f[6]=u,f[10]=h,f[14]=d,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Fe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/hi.setFromMatrixColumn(e,0).length(),r=1/hi.setFromMatrixColumn(e,1).length(),a=1/hi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=a*u,p=a*h,g=o*u,_=o*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=p+g*l,t[5]=d-_*l,t[9]=-o*c,t[2]=_-d*l,t[6]=g+p*l,t[10]=a*c}else if(e.order==="YXZ"){const d=c*u,p=c*h,g=l*u,_=l*h;t[0]=d+_*o,t[4]=g*o-p,t[8]=a*l,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=p*o-g,t[6]=_+d*o,t[10]=a*c}else if(e.order==="ZXY"){const d=c*u,p=c*h,g=l*u,_=l*h;t[0]=d-_*o,t[4]=-a*h,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*u,t[9]=_-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const d=a*u,p=a*h,g=o*u,_=o*h;t[0]=c*u,t[4]=g*l-p,t[8]=d*l+_,t[1]=c*h,t[5]=_*l+d,t[9]=p*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const d=a*c,p=a*l,g=o*c,_=o*l;t[0]=c*u,t[4]=_-d*h,t[8]=g*h+p,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=p*h+g,t[10]=d-_*h}else if(e.order==="XZY"){const d=a*c,p=a*l,g=o*c,_=o*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+_,t[5]=a*u,t[9]=p*h-g,t[2]=g*h-p,t[6]=o*u,t[10]=_*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(fh,e,ph)}lookAt(e,t,n){const i=this.elements;return Nt.subVectors(e,t),Nt.lengthSq()===0&&(Nt.z=1),Nt.normalize(),An.crossVectors(n,Nt),An.lengthSq()===0&&(Math.abs(n.z)===1?Nt.x+=1e-4:Nt.z+=1e-4,Nt.normalize(),An.crossVectors(n,Nt)),An.normalize(),ms.crossVectors(Nt,An),i[0]=An.x,i[4]=ms.x,i[8]=Nt.x,i[1]=An.y,i[5]=ms.y,i[9]=Nt.y,i[2]=An.z,i[6]=ms.z,i[10]=Nt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],h=n[5],d=n[9],p=n[13],g=n[2],_=n[6],m=n[10],f=n[14],b=n[3],v=n[7],S=n[11],R=n[15],A=i[0],y=i[4],C=i[8],x=i[12],T=i[1],D=i[5],B=i[9],Z=i[13],P=i[2],U=i[6],H=i[10],X=i[14],W=i[3],j=i[7],Y=i[11],ee=i[15];return r[0]=a*A+o*T+c*P+l*W,r[4]=a*y+o*D+c*U+l*j,r[8]=a*C+o*B+c*H+l*Y,r[12]=a*x+o*Z+c*X+l*ee,r[1]=u*A+h*T+d*P+p*W,r[5]=u*y+h*D+d*U+p*j,r[9]=u*C+h*B+d*H+p*Y,r[13]=u*x+h*Z+d*X+p*ee,r[2]=g*A+_*T+m*P+f*W,r[6]=g*y+_*D+m*U+f*j,r[10]=g*C+_*B+m*H+f*Y,r[14]=g*x+_*Z+m*X+f*ee,r[3]=b*A+v*T+S*P+R*W,r[7]=b*y+v*D+S*U+R*j,r[11]=b*C+v*B+S*H+R*Y,r[15]=b*x+v*Z+S*X+R*ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],p=e[14],g=e[3],_=e[7],m=e[11],f=e[15];return g*(+r*c*h-i*l*h-r*o*d+n*l*d+i*o*p-n*c*p)+_*(+t*c*p-t*l*d+r*a*d-i*a*p+i*l*u-r*c*u)+m*(+t*l*h-t*o*p-r*a*h+n*a*p+r*o*u-n*l*u)+f*(-i*o*u-t*c*h+t*o*d+i*a*h-n*a*d+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],p=e[11],g=e[12],_=e[13],m=e[14],f=e[15],b=h*m*l-_*d*l+_*c*p-o*m*p-h*c*f+o*d*f,v=g*d*l-u*m*l-g*c*p+a*m*p+u*c*f-a*d*f,S=u*_*l-g*h*l+g*o*p-a*_*p-u*o*f+a*h*f,R=g*h*c-u*_*c-g*o*d+a*_*d+u*o*m-a*h*m,A=t*b+n*v+i*S+r*R;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const y=1/A;return e[0]=b*y,e[1]=(_*d*r-h*m*r-_*i*p+n*m*p+h*i*f-n*d*f)*y,e[2]=(o*m*r-_*c*r+_*i*l-n*m*l-o*i*f+n*c*f)*y,e[3]=(h*c*r-o*d*r-h*i*l+n*d*l+o*i*p-n*c*p)*y,e[4]=v*y,e[5]=(u*m*r-g*d*r+g*i*p-t*m*p-u*i*f+t*d*f)*y,e[6]=(g*c*r-a*m*r-g*i*l+t*m*l+a*i*f-t*c*f)*y,e[7]=(a*d*r-u*c*r+u*i*l-t*d*l-a*i*p+t*c*p)*y,e[8]=S*y,e[9]=(g*h*r-u*_*r-g*n*p+t*_*p+u*n*f-t*h*f)*y,e[10]=(a*_*r-g*o*r+g*n*l-t*_*l-a*n*f+t*o*f)*y,e[11]=(u*o*r-a*h*r-u*n*l+t*h*l+a*n*p-t*o*p)*y,e[12]=R*y,e[13]=(u*_*i-g*h*i+g*n*d-t*_*d-u*n*m+t*h*m)*y,e[14]=(g*o*i-a*_*i-g*n*c+t*_*c+a*n*m-t*o*m)*y,e[15]=(a*h*i-u*o*i+u*n*c-t*h*c-a*n*d+t*o*d)*y,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,u=r*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,u*o+n,u*c-i*a,0,l*c-i*o,u*c+i*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,u=a+a,h=o+o,d=r*l,p=r*u,g=r*h,_=a*u,m=a*h,f=o*h,b=c*l,v=c*u,S=c*h,R=n.x,A=n.y,y=n.z;return i[0]=(1-(_+f))*R,i[1]=(p+S)*R,i[2]=(g-v)*R,i[3]=0,i[4]=(p-S)*A,i[5]=(1-(d+f))*A,i[6]=(m+b)*A,i[7]=0,i[8]=(g+v)*y,i[9]=(m-b)*y,i[10]=(1-(d+_))*y,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=hi.set(i[0],i[1],i[2]).length();const a=hi.set(i[4],i[5],i[6]).length(),o=hi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],jt.copy(this);const l=1/r,u=1/a,h=1/o;return jt.elements[0]*=l,jt.elements[1]*=l,jt.elements[2]*=l,jt.elements[4]*=u,jt.elements[5]*=u,jt.elements[6]*=u,jt.elements[8]*=h,jt.elements[9]*=h,jt.elements[10]*=h,t.setFromRotationMatrix(jt),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a,o=on){const c=this.elements,l=2*r/(t-e),u=2*r/(n-i),h=(t+e)/(t-e),d=(n+i)/(n-i);let p,g;if(o===on)p=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===es)p=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=on){const c=this.elements,l=1/(t-e),u=1/(n-i),h=1/(a-r),d=(t+e)*l,p=(n+i)*u;let g,_;if(o===on)g=(a+r)*h,_=-2*h;else if(o===es)g=r*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const hi=new I,jt=new Fe,fh=new I(0,0,0),ph=new I(1,1,1),An=new I,ms=new I,Nt=new I,Ha=new Fe,Va=new Mn;class rs{constructor(e=0,t=0,n=0,i=rs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],o=i[8],c=i[1],l=i[5],u=i[9],h=i[2],d=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(yt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-yt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(yt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-yt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(yt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-yt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ha.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ha,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Va.setFromEuler(this),this.setFromQuaternion(Va,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}rs.DEFAULT_ORDER="XYZ";class da{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let mh=0;const Wa=new I,di=new Mn,hn=new Fe,gs=new I,Bi=new I,gh=new I,_h=new Mn,ja=new I(1,0,0),Xa=new I(0,1,0),Za=new I(0,0,1),vh={type:"added"},xh={type:"removed"};class tt extends ii{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mh++}),this.uuid=qt(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=tt.DEFAULT_UP.clone();const e=new I,t=new rs,n=new Mn,i=new I(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Fe},normalMatrix:{value:new Oe}}),this.matrix=new Fe,this.matrixWorld=new Fe,this.matrixAutoUpdate=tt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new da,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return di.setFromAxisAngle(e,t),this.quaternion.multiply(di),this}rotateOnWorldAxis(e,t){return di.setFromAxisAngle(e,t),this.quaternion.premultiply(di),this}rotateX(e){return this.rotateOnAxis(ja,e)}rotateY(e){return this.rotateOnAxis(Xa,e)}rotateZ(e){return this.rotateOnAxis(Za,e)}translateOnAxis(e,t){return Wa.copy(e).applyQuaternion(this.quaternion),this.position.add(Wa.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ja,e)}translateY(e){return this.translateOnAxis(Xa,e)}translateZ(e){return this.translateOnAxis(Za,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(hn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?gs.copy(e):gs.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Bi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hn.lookAt(Bi,gs,this.up):hn.lookAt(gs,Bi,this.up),this.quaternion.setFromRotationMatrix(hn),i&&(hn.extractRotation(i.matrixWorld),di.setFromRotationMatrix(hn),this.quaternion.premultiply(di.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(vh)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(xh)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),hn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),hn.multiply(e.parent.matrixWorld)),e.applyMatrix4(hn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bi,e,gh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bi,_h,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++){const o=i[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(r(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}tt.DEFAULT_UP=new I(0,1,0);tt.DEFAULT_MATRIX_AUTO_UPDATE=!0;tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Xt=new I,dn=new I,Ar=new I,fn=new I,fi=new I,pi=new I,Ya=new I,wr=new I,Rr=new I,Cr=new I;let _s=!1;class Vt{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Xt.subVectors(e,t),i.cross(Xt);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Xt.subVectors(i,t),dn.subVectors(n,t),Ar.subVectors(e,t);const a=Xt.dot(Xt),o=Xt.dot(dn),c=Xt.dot(Ar),l=dn.dot(dn),u=dn.dot(Ar),h=a*l-o*o;if(h===0)return r.set(0,0,0),null;const d=1/h,p=(l*c-o*u)*d,g=(a*u-o*c)*d;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,fn)===null?!1:fn.x>=0&&fn.y>=0&&fn.x+fn.y<=1}static getUV(e,t,n,i,r,a,o,c){return _s===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),_s=!0),this.getInterpolation(e,t,n,i,r,a,o,c)}static getInterpolation(e,t,n,i,r,a,o,c){return this.getBarycoord(e,t,n,i,fn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,fn.x),c.addScaledVector(a,fn.y),c.addScaledVector(o,fn.z),c)}static isFrontFacing(e,t,n,i){return Xt.subVectors(n,t),dn.subVectors(e,t),Xt.cross(dn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Xt.subVectors(this.c,this.b),dn.subVectors(this.a,this.b),Xt.cross(dn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Vt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Vt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return _s===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),_s=!0),Vt.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}getInterpolation(e,t,n,i,r){return Vt.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Vt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Vt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,o;fi.subVectors(i,n),pi.subVectors(r,n),wr.subVectors(e,n);const c=fi.dot(wr),l=pi.dot(wr);if(c<=0&&l<=0)return t.copy(n);Rr.subVectors(e,i);const u=fi.dot(Rr),h=pi.dot(Rr);if(u>=0&&h<=u)return t.copy(i);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(n).addScaledVector(fi,a);Cr.subVectors(e,r);const p=fi.dot(Cr),g=pi.dot(Cr);if(g>=0&&p<=g)return t.copy(r);const _=p*l-c*g;if(_<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(pi,o);const m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return Ya.subVectors(r,i),o=(h-u)/(h-u+(p-g)),t.copy(i).addScaledVector(Ya,o);const f=1/(m+_+d);return a=_*f,o=d*f,t.copy(n).addScaledVector(fi,a).addScaledVector(pi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const iu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wn={h:0,s:0,l:0},vs={h:0,s:0,l:0};function Lr(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Te{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=qe){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,We.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=We.workingColorSpace){return this.r=e,this.g=t,this.b=n,We.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=We.workingColorSpace){if(e=ca(e,1),t=yt(t,0,1),n=yt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Lr(a,r,e+1/3),this.g=Lr(a,r,e),this.b=Lr(a,r,e-1/3)}return We.toWorkingColorSpace(this,i),this}setStyle(e,t=qe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=qe){const n=iu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ei(e.r),this.g=Ei(e.g),this.b=Ei(e.b),this}copyLinearToSRGB(e){return this.r=vr(e.r),this.g=vr(e.g),this.b=vr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=qe){return We.fromWorkingColorSpace(Mt.copy(this),e),Math.round(yt(Mt.r*255,0,255))*65536+Math.round(yt(Mt.g*255,0,255))*256+Math.round(yt(Mt.b*255,0,255))}getHexString(e=qe){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=We.workingColorSpace){We.fromWorkingColorSpace(Mt.copy(this),t);const n=Mt.r,i=Mt.g,r=Mt.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const h=a-o;switch(l=u<=.5?h/(a+o):h/(2-a-o),a){case n:c=(i-r)/h+(i<r?6:0);break;case i:c=(r-n)/h+2;break;case r:c=(n-i)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=We.workingColorSpace){return We.fromWorkingColorSpace(Mt.copy(this),t),e.r=Mt.r,e.g=Mt.g,e.b=Mt.b,e}getStyle(e=qe){We.fromWorkingColorSpace(Mt.copy(this),e);const t=Mt.r,n=Mt.g,i=Mt.b;return e!==qe?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(wn),this.setHSL(wn.h+e,wn.s+t,wn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(wn),e.getHSL(vs);const n=Zi(wn.h,vs.h,t),i=Zi(wn.s,vs.s,t),r=Zi(wn.l,vs.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Mt=new Te;Te.NAMES=iu;let bh=0;class $t extends ii{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bh++}),this.uuid=qt(),this.name="",this.type="Material",this.blending=qn,this.side=xt,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xs,this.blendDst=Zs,this.blendEquation=Pn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Te(0,0,0),this.blendAlpha=0,this.depthFunc=qi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Uo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xn,this.stencilZFail=Xn,this.stencilZPass=Xn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==qn&&(n.blending=this.blending),this.side!==xt&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Xs&&(n.blendSrc=this.blendSrc),this.blendDst!==Zs&&(n.blendDst=this.blendDst),this.blendEquation!==Pn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==qi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Uo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Xn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Xn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class gn extends $t{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Zo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ct=new I,xs=new He;class Et{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Js,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=rn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)xs.fromBufferAttribute(this,t),xs.applyMatrix3(e),this.setXY(t,xs.x,xs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ct.fromBufferAttribute(this,t),ct.applyMatrix3(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ct.fromBufferAttribute(this,t),ct.applyMatrix4(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ct.fromBufferAttribute(this,t),ct.applyNormalMatrix(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ct.fromBufferAttribute(this,t),ct.transformDirection(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=sn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ye(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=sn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ye(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=sn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ye(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=sn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ye(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=sn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ye(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ye(t,this.array),n=Ye(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Ye(t,this.array),n=Ye(n,this.array),i=Ye(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Ye(t,this.array),n=Ye(n,this.array),i=Ye(i,this.array),r=Ye(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Js&&(e.usage=this.usage),e}}class fa extends Et{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class pa extends Et{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class kt extends Et{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Sh=0;const Gt=new Fe,Pr=new tt,mi=new I,Ot=new Kt,ki=new Kt,_t=new I;class Qt extends ii{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Sh++}),this.uuid=qt(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ql(e)?pa:fa)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Oe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Gt.makeRotationFromQuaternion(e),this.applyMatrix4(Gt),this}rotateX(e){return Gt.makeRotationX(e),this.applyMatrix4(Gt),this}rotateY(e){return Gt.makeRotationY(e),this.applyMatrix4(Gt),this}rotateZ(e){return Gt.makeRotationZ(e),this.applyMatrix4(Gt),this}translate(e,t,n){return Gt.makeTranslation(e,t,n),this.applyMatrix4(Gt),this}scale(e,t,n){return Gt.makeScale(e,t,n),this.applyMatrix4(Gt),this}lookAt(e){return Pr.lookAt(e),Pr.updateMatrix(),this.applyMatrix4(Pr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(mi).negate(),this.translate(mi.x,mi.y,mi.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new kt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Kt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Ot.setFromBufferAttribute(r),this.morphTargetsRelative?(_t.addVectors(this.boundingBox.min,Ot.min),this.boundingBox.expandByPoint(_t),_t.addVectors(this.boundingBox.max,Ot.max),this.boundingBox.expandByPoint(_t)):(this.boundingBox.expandByPoint(Ot.min),this.boundingBox.expandByPoint(Ot.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Jt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new I,1/0);return}if(e){const n=this.boundingSphere.center;if(Ot.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];ki.setFromBufferAttribute(o),this.morphTargetsRelative?(_t.addVectors(Ot.min,ki.min),Ot.expandByPoint(_t),_t.addVectors(Ot.max,ki.max),Ot.expandByPoint(_t)):(Ot.expandByPoint(ki.min),Ot.expandByPoint(ki.max))}Ot.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)_t.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(_t));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)_t.fromBufferAttribute(o,l),c&&(mi.fromBufferAttribute(e,l),_t.add(mi)),i=Math.max(i,n.distanceToSquared(_t))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,a=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Et(new Float32Array(4*o),4));const c=this.getAttribute("tangent").array,l=[],u=[];for(let T=0;T<o;T++)l[T]=new I,u[T]=new I;const h=new I,d=new I,p=new I,g=new He,_=new He,m=new He,f=new I,b=new I;function v(T,D,B){h.fromArray(i,T*3),d.fromArray(i,D*3),p.fromArray(i,B*3),g.fromArray(a,T*2),_.fromArray(a,D*2),m.fromArray(a,B*2),d.sub(h),p.sub(h),_.sub(g),m.sub(g);const Z=1/(_.x*m.y-m.x*_.y);isFinite(Z)&&(f.copy(d).multiplyScalar(m.y).addScaledVector(p,-_.y).multiplyScalar(Z),b.copy(p).multiplyScalar(_.x).addScaledVector(d,-m.x).multiplyScalar(Z),l[T].add(f),l[D].add(f),l[B].add(f),u[T].add(b),u[D].add(b),u[B].add(b))}let S=this.groups;S.length===0&&(S=[{start:0,count:n.length}]);for(let T=0,D=S.length;T<D;++T){const B=S[T],Z=B.start,P=B.count;for(let U=Z,H=Z+P;U<H;U+=3)v(n[U+0],n[U+1],n[U+2])}const R=new I,A=new I,y=new I,C=new I;function x(T){y.fromArray(r,T*3),C.copy(y);const D=l[T];R.copy(D),R.sub(y.multiplyScalar(y.dot(D))).normalize(),A.crossVectors(C,D);const Z=A.dot(u[T])<0?-1:1;c[T*4]=R.x,c[T*4+1]=R.y,c[T*4+2]=R.z,c[T*4+3]=Z}for(let T=0,D=S.length;T<D;++T){const B=S[T],Z=B.start,P=B.count;for(let U=Z,H=Z+P;U<H;U+=3)x(n[U+0]),x(n[U+1]),x(n[U+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Et(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const i=new I,r=new I,a=new I,o=new I,c=new I,l=new I,u=new I,h=new I;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),u.subVectors(a,r),h.subVectors(i,r),u.cross(h),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),o.add(u),c.add(u),l.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,p=t.count;d<p;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,r),h.subVectors(i,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)_t.fromBufferAttribute(e,t),_t.normalize(),e.setXYZ(t,_t.x,_t.y,_t.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,h=o.normalized,d=new l.constructor(c.length*u);let p=0,g=0;for(let _=0,m=c.length;_<m;_++){o.isInterleavedBufferAttribute?p=c[_]*o.data.stride+o.offset:p=c[_]*u;for(let f=0;f<u;f++)d[g++]=l[p++]}return new Et(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Qt,n=this.index.array,i=this.attributes;for(const o in i){const c=i[o],l=e(c,n);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let u=0,h=l.length;u<h;u++){const d=l[u],p=e(d,n);c.push(p)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const p=l[h];u.push(p.toJSON(e.data))}u.length>0&&(i[c]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const u=i[l];this.setAttribute(l,u.clone(t))}const r=e.morphAttributes;for(const l in r){const u=[],h=r[l];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const qa=new Fe,Hn=new ss,bs=new Jt,$a=new I,gi=new I,_i=new I,vi=new I,Ir=new I,Ss=new I,Ms=new He,ys=new He,Ts=new He,Ka=new I,Ja=new I,Qa=new I,Es=new I,As=new I;class Bt extends tt{constructor(e=new Qt,t=new gn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){Ss.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=o[c],h=r[c];u!==0&&(Ir.fromBufferAttribute(h,e),a?Ss.addScaledVector(Ir,u):Ss.addScaledVector(Ir.sub(t),u))}t.add(Ss)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),bs.copy(n.boundingSphere),bs.applyMatrix4(r),Hn.copy(e.ray).recast(e.near),!(bs.containsPoint(Hn.origin)===!1&&(Hn.intersectSphere(bs,$a)===null||Hn.origin.distanceToSquared($a)>(e.far-e.near)**2))&&(qa.copy(r).invert(),Hn.copy(e.ray).applyMatrix4(qa),!(n.boundingBox!==null&&Hn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Hn)))}_computeIntersections(e,t,n){let i;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=a[m.materialIndex],b=Math.max(m.start,p.start),v=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let S=b,R=v;S<R;S+=3){const A=o.getX(S),y=o.getX(S+1),C=o.getX(S+2);i=ws(this,f,e,n,l,u,h,A,y,C),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const b=o.getX(m),v=o.getX(m+1),S=o.getX(m+2);i=ws(this,a,e,n,l,u,h,b,v,S),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=a[m.materialIndex],b=Math.max(m.start,p.start),v=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let S=b,R=v;S<R;S+=3){const A=S,y=S+1,C=S+2;i=ws(this,f,e,n,l,u,h,A,y,C),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,p.start),_=Math.min(c.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const b=m,v=m+1,S=m+2;i=ws(this,a,e,n,l,u,h,b,v,S),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function Mh(s,e,t,n,i,r,a,o){let c;if(e.side===Pt?c=n.intersectTriangle(a,r,i,!0,o):c=n.intersectTriangle(i,r,a,e.side===xt,o),c===null)return null;As.copy(o),As.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(As);return l<t.near||l>t.far?null:{distance:l,point:As.clone(),object:s}}function ws(s,e,t,n,i,r,a,o,c,l){s.getVertexPosition(o,gi),s.getVertexPosition(c,_i),s.getVertexPosition(l,vi);const u=Mh(s,e,t,n,gi,_i,vi,Es);if(u){i&&(Ms.fromBufferAttribute(i,o),ys.fromBufferAttribute(i,c),Ts.fromBufferAttribute(i,l),u.uv=Vt.getInterpolation(Es,gi,_i,vi,Ms,ys,Ts,new He)),r&&(Ms.fromBufferAttribute(r,o),ys.fromBufferAttribute(r,c),Ts.fromBufferAttribute(r,l),u.uv1=Vt.getInterpolation(Es,gi,_i,vi,Ms,ys,Ts,new He),u.uv2=u.uv1),a&&(Ka.fromBufferAttribute(a,o),Ja.fromBufferAttribute(a,c),Qa.fromBufferAttribute(a,l),u.normal=Vt.getInterpolation(Es,gi,_i,vi,Ka,Ja,Qa,new I),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:c,c:l,normal:new I,materialIndex:0};Vt.getNormal(gi,_i,vi,h.normal),u.face=h}return u}class Ii extends Qt{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],u=[],h=[];let d=0,p=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new kt(l,3)),this.setAttribute("normal",new kt(u,3)),this.setAttribute("uv",new kt(h,2));function g(_,m,f,b,v,S,R,A,y,C,x){const T=S/y,D=R/C,B=S/2,Z=R/2,P=A/2,U=y+1,H=C+1;let X=0,W=0;const j=new I;for(let Y=0;Y<H;Y++){const ee=Y*D-Z;for(let ce=0;ce<U;ce++){const V=ce*T-B;j[_]=V*b,j[m]=ee*v,j[f]=P,l.push(j.x,j.y,j.z),j[_]=0,j[m]=0,j[f]=A>0?1:-1,u.push(j.x,j.y,j.z),h.push(ce/y),h.push(1-Y/C),X+=1}}for(let Y=0;Y<C;Y++)for(let ee=0;ee<y;ee++){const ce=d+ee+U*Y,V=d+ee+U*(Y+1),q=d+(ee+1)+U*(Y+1),oe=d+(ee+1)+U*Y;c.push(ce,V,oe),c.push(V,q,oe),W+=6}o.addGroup(p,W,x),p+=W,d+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ii(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Pi(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Lt(s){const e={};for(let t=0;t<s.length;t++){const n=Pi(s[t]);for(const i in n)e[i]=n[i]}return e}function yh(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function su(s){return s.getRenderTarget()===null?s.outputColorSpace:We.workingColorSpace}const ru={clone:Pi,merge:Lt};var Th=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Eh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Dt extends $t{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Th,this.fragmentShader=Eh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Pi(e.uniforms),this.uniformsGroups=yh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class ma extends tt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Fe,this.projectionMatrix=new Fe,this.projectionMatrixInverse=new Fe,this.coordinateSystem=on}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Tt extends ma{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Li*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Xi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Li*2*Math.atan(Math.tan(Xi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Xi*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*i/c,t-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const xi=-90,bi=1;class ou extends tt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Tt(xi,bi,e,t);i.layers=this.layers,this.add(i);const r=new Tt(xi,bi,e,t);r.layers=this.layers,this.add(r);const a=new Tt(xi,bi,e,t);a.layers=this.layers,this.add(a);const o=new Tt(xi,bi,e,t);o.layers=this.layers,this.add(o);const c=new Tt(xi,bi,e,t);c.layers=this.layers,this.add(c);const l=new Tt(xi,bi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,c]=t;for(const l of t)this.remove(l);if(e===on)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===es)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,d,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class ga extends ht{constructor(e,t,n,i,r,a,o,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:$n,super(e,t,n,i,r,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class au extends On{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(Yi("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Sn?qe:Ft),this.texture=new ga(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ut}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Ii(5,5,5),r=new Dt({name:"CubemapFromEquirect",uniforms:Pi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Pt,blending:vn});r.uniforms.tEquirect.value=t;const a=new Bt(i,r),o=t.minFilter;return t.minFilter===Nn&&(t.minFilter=ut),new ou(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}const Dr=new I,Ah=new I,wh=new Oe;class Cn{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Dr.subVectors(n,t).cross(Ah.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Dr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||wh.getNormalMatrix(e),i=this.coplanarPoint(Dr).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Vn=new Jt,Rs=new I;class rr{constructor(e=new Cn,t=new Cn,n=new Cn,i=new Cn,r=new Cn,a=new Cn){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=on){const n=this.planes,i=e.elements,r=i[0],a=i[1],o=i[2],c=i[3],l=i[4],u=i[5],h=i[6],d=i[7],p=i[8],g=i[9],_=i[10],m=i[11],f=i[12],b=i[13],v=i[14],S=i[15];if(n[0].setComponents(c-r,d-l,m-p,S-f).normalize(),n[1].setComponents(c+r,d+l,m+p,S+f).normalize(),n[2].setComponents(c+a,d+u,m+g,S+b).normalize(),n[3].setComponents(c-a,d-u,m-g,S-b).normalize(),n[4].setComponents(c-o,d-h,m-_,S-v).normalize(),t===on)n[5].setComponents(c+o,d+h,m+_,S+v).normalize();else if(t===es)n[5].setComponents(o,h,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Vn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Vn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Vn)}intersectsSprite(e){return Vn.center.set(0,0,0),Vn.radius=.7071067811865476,Vn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Vn)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Rs.x=i.normal.x>0?e.max.x:e.min.x,Rs.y=i.normal.y>0?e.max.y:e.min.y,Rs.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Rs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function cu(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Rh(s,e){const t=e.isWebGL2,n=new WeakMap;function i(l,u){const h=l.array,d=l.usage,p=h.byteLength,g=s.createBuffer();s.bindBuffer(u,g),s.bufferData(u,h,d),l.onUploadCallback();let _;if(h instanceof Float32Array)_=s.FLOAT;else if(h instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)_=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)_=s.SHORT;else if(h instanceof Uint32Array)_=s.UNSIGNED_INT;else if(h instanceof Int32Array)_=s.INT;else if(h instanceof Int8Array)_=s.BYTE;else if(h instanceof Uint8Array)_=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)_=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version,size:p}}function r(l,u,h){const d=u.array,p=u._updateRange,g=u.updateRanges;if(s.bindBuffer(h,l),p.count===-1&&g.length===0&&s.bufferSubData(h,0,d),g.length!==0){for(let _=0,m=g.length;_<m;_++){const f=g[_];t?s.bufferSubData(h,f.start*d.BYTES_PER_ELEMENT,d,f.start,f.count):s.bufferSubData(h,f.start*d.BYTES_PER_ELEMENT,d.subarray(f.start,f.start+f.count))}u.clearUpdateRanges()}p.count!==-1&&(t?s.bufferSubData(h,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):s.bufferSubData(h,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=n.get(l);u&&(s.deleteBuffer(u.buffer),n.delete(l))}function c(l,u){if(l.isGLBufferAttribute){const d=n.get(l);(!d||d.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);if(h===void 0)n.set(l,i(l,u));else if(h.version<l.version){if(h.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,l,u),h.version=l.version}}return{get:a,remove:o,update:c}}class or extends Qt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(i),l=o+1,u=c+1,h=e/o,d=t/c,p=[],g=[],_=[],m=[];for(let f=0;f<u;f++){const b=f*d-a;for(let v=0;v<l;v++){const S=v*h-r;g.push(S,-b,0),_.push(0,0,1),m.push(v/o),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let b=0;b<o;b++){const v=b+l*f,S=b+l*(f+1),R=b+1+l*(f+1),A=b+1+l*f;p.push(v,S,A),p.push(S,R,A)}this.setIndex(p),this.setAttribute("position",new kt(g,3)),this.setAttribute("normal",new kt(_,3)),this.setAttribute("uv",new kt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new or(e.width,e.height,e.widthSegments,e.heightSegments)}}var Ch=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Lh=`#ifdef USE_ALPHAHASH
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
#endif`,Ph=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ih=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Dh=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Uh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Nh=`#ifdef USE_AOMAP
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
#endif`,Oh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Fh=`#ifdef USE_BATCHING
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
#endif`,Bh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,kh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Gh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Hh=`#ifdef USE_IRIDESCENCE
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
#endif`,Vh=`#ifdef USE_BUMPMAP
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
#endif`,Wh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,jh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Xh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Zh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Yh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,qh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,$h=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Kh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Jh=`#define PI 3.141592653589793
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
} // validated`,Qh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ed=`vec3 transformedNormal = objectNormal;
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
#endif`,td=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,nd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,id=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rd="gl_FragColor = linearToOutputTexel( gl_FragColor );",od=`
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
}`,ad=`#ifdef USE_ENVMAP
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
#endif`,cd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ld=`#ifdef USE_ENVMAP
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
#endif`,ud=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hd=`#ifdef USE_ENVMAP
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
#endif`,dd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,pd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,md=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gd=`#ifdef USE_GRADIENTMAP
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
}`,_d=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,vd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,bd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Sd=`uniform bool receiveShadow;
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
#endif`,Md=`#ifdef USE_ENVMAP
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
#endif`,yd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Td=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ed=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ad=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,wd=`PhysicalMaterial material;
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
#endif`,Rd=`struct PhysicalMaterial {
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
}`,Cd=`
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
#endif`,Ld=`#if defined( RE_IndirectDiffuse )
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
#endif`,Pd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Id=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Dd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ud=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Nd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Od=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Fd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Bd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,kd=`#if defined( USE_POINTS_UV )
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
#endif`,zd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Gd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Hd=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Vd=`#ifdef USE_MORPHNORMALS
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
#endif`,Wd=`#ifdef USE_MORPHTARGETS
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
#endif`,jd=`#ifdef USE_MORPHTARGETS
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
#endif`,Xd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Zd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Yd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$d=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Kd=`#ifdef USE_NORMALMAP
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
#endif`,Jd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Qd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ef=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,tf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,nf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,rf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,of=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,af=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,lf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,uf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,hf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,df=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ff=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,pf=`float getShadowMask() {
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
}`,mf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gf=`#ifdef USE_SKINNING
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
#endif`,_f=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vf=`#ifdef USE_SKINNING
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
#endif`,xf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Sf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Mf=`#ifndef saturate
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
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,yf=`#ifdef USE_TRANSMISSION
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
#endif`,Tf=`#ifdef USE_TRANSMISSION
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
#endif`,Ef=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Af=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Cf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Lf=`uniform sampler2D t2D;
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
}`,Pf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,If=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Df=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Uf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nf=`#include <common>
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
}`,Of=`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
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
}`,Ff=`#define DISTANCE
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
}`,Bf=`#define DISTANCE
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,kf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,zf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gf=`uniform float scale;
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
}`,Hf=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Vf=`#include <common>
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
}`,Wf=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,jf=`#define LAMBERT
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
}`,Xf=`#define LAMBERT
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Zf=`#define MATCAP
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
}`,Yf=`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,qf=`#define NORMAL
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
}`,$f=`#define NORMAL
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Kf=`#define PHONG
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
}`,Jf=`#define PHONG
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Qf=`#define STANDARD
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
}`,ep=`#define STANDARD
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,tp=`#define TOON
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
}`,np=`#define TOON
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,ip=`uniform float size;
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
}`,sp=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,rp=`#include <common>
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
}`,op=`uniform vec3 color;
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
}`,ap=`uniform float rotation;
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
}`,cp=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Le={alphahash_fragment:Ch,alphahash_pars_fragment:Lh,alphamap_fragment:Ph,alphamap_pars_fragment:Ih,alphatest_fragment:Dh,alphatest_pars_fragment:Uh,aomap_fragment:Nh,aomap_pars_fragment:Oh,batching_pars_vertex:Fh,batching_vertex:Bh,begin_vertex:kh,beginnormal_vertex:zh,bsdfs:Gh,iridescence_fragment:Hh,bumpmap_pars_fragment:Vh,clipping_planes_fragment:Wh,clipping_planes_pars_fragment:jh,clipping_planes_pars_vertex:Xh,clipping_planes_vertex:Zh,color_fragment:Yh,color_pars_fragment:qh,color_pars_vertex:$h,color_vertex:Kh,common:Jh,cube_uv_reflection_fragment:Qh,defaultnormal_vertex:ed,displacementmap_pars_vertex:td,displacementmap_vertex:nd,emissivemap_fragment:id,emissivemap_pars_fragment:sd,colorspace_fragment:rd,colorspace_pars_fragment:od,envmap_fragment:ad,envmap_common_pars_fragment:cd,envmap_pars_fragment:ld,envmap_pars_vertex:ud,envmap_physical_pars_fragment:Md,envmap_vertex:hd,fog_vertex:dd,fog_pars_vertex:fd,fog_fragment:pd,fog_pars_fragment:md,gradientmap_pars_fragment:gd,lightmap_fragment:_d,lightmap_pars_fragment:vd,lights_lambert_fragment:xd,lights_lambert_pars_fragment:bd,lights_pars_begin:Sd,lights_toon_fragment:yd,lights_toon_pars_fragment:Td,lights_phong_fragment:Ed,lights_phong_pars_fragment:Ad,lights_physical_fragment:wd,lights_physical_pars_fragment:Rd,lights_fragment_begin:Cd,lights_fragment_maps:Ld,lights_fragment_end:Pd,logdepthbuf_fragment:Id,logdepthbuf_pars_fragment:Dd,logdepthbuf_pars_vertex:Ud,logdepthbuf_vertex:Nd,map_fragment:Od,map_pars_fragment:Fd,map_particle_fragment:Bd,map_particle_pars_fragment:kd,metalnessmap_fragment:zd,metalnessmap_pars_fragment:Gd,morphcolor_vertex:Hd,morphnormal_vertex:Vd,morphtarget_pars_vertex:Wd,morphtarget_vertex:jd,normal_fragment_begin:Xd,normal_fragment_maps:Zd,normal_pars_fragment:Yd,normal_pars_vertex:qd,normal_vertex:$d,normalmap_pars_fragment:Kd,clearcoat_normal_fragment_begin:Jd,clearcoat_normal_fragment_maps:Qd,clearcoat_pars_fragment:ef,iridescence_pars_fragment:tf,opaque_fragment:nf,packing:sf,premultiplied_alpha_fragment:rf,project_vertex:of,dithering_fragment:af,dithering_pars_fragment:cf,roughnessmap_fragment:lf,roughnessmap_pars_fragment:uf,shadowmap_pars_fragment:hf,shadowmap_pars_vertex:df,shadowmap_vertex:ff,shadowmask_pars_fragment:pf,skinbase_vertex:mf,skinning_pars_vertex:gf,skinning_vertex:_f,skinnormal_vertex:vf,specularmap_fragment:xf,specularmap_pars_fragment:bf,tonemapping_fragment:Sf,tonemapping_pars_fragment:Mf,transmission_fragment:yf,transmission_pars_fragment:Tf,uv_pars_fragment:Ef,uv_pars_vertex:Af,uv_vertex:wf,worldpos_vertex:Rf,background_vert:Cf,background_frag:Lf,backgroundCube_vert:Pf,backgroundCube_frag:If,cube_vert:Df,cube_frag:Uf,depth_vert:Nf,depth_frag:Of,distanceRGBA_vert:Ff,distanceRGBA_frag:Bf,equirect_vert:kf,equirect_frag:zf,linedashed_vert:Gf,linedashed_frag:Hf,meshbasic_vert:Vf,meshbasic_frag:Wf,meshlambert_vert:jf,meshlambert_frag:Xf,meshmatcap_vert:Zf,meshmatcap_frag:Yf,meshnormal_vert:qf,meshnormal_frag:$f,meshphong_vert:Kf,meshphong_frag:Jf,meshphysical_vert:Qf,meshphysical_frag:ep,meshtoon_vert:tp,meshtoon_frag:np,points_vert:ip,points_frag:sp,shadow_vert:rp,shadow_frag:op,sprite_vert:ap,sprite_frag:cp},te={common:{diffuse:{value:new Te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new He(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new Te(16777215)},opacity:{value:1},center:{value:new He(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}}},Zt={basic:{uniforms:Lt([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.fog]),vertexShader:Le.meshbasic_vert,fragmentShader:Le.meshbasic_frag},lambert:{uniforms:Lt([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.fog,te.lights,{emissive:{value:new Te(0)}}]),vertexShader:Le.meshlambert_vert,fragmentShader:Le.meshlambert_frag},phong:{uniforms:Lt([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.fog,te.lights,{emissive:{value:new Te(0)},specular:{value:new Te(1118481)},shininess:{value:30}}]),vertexShader:Le.meshphong_vert,fragmentShader:Le.meshphong_frag},standard:{uniforms:Lt([te.common,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.roughnessmap,te.metalnessmap,te.fog,te.lights,{emissive:{value:new Te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Le.meshphysical_vert,fragmentShader:Le.meshphysical_frag},toon:{uniforms:Lt([te.common,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.gradientmap,te.fog,te.lights,{emissive:{value:new Te(0)}}]),vertexShader:Le.meshtoon_vert,fragmentShader:Le.meshtoon_frag},matcap:{uniforms:Lt([te.common,te.bumpmap,te.normalmap,te.displacementmap,te.fog,{matcap:{value:null}}]),vertexShader:Le.meshmatcap_vert,fragmentShader:Le.meshmatcap_frag},points:{uniforms:Lt([te.points,te.fog]),vertexShader:Le.points_vert,fragmentShader:Le.points_frag},dashed:{uniforms:Lt([te.common,te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Le.linedashed_vert,fragmentShader:Le.linedashed_frag},depth:{uniforms:Lt([te.common,te.displacementmap]),vertexShader:Le.depth_vert,fragmentShader:Le.depth_frag},normal:{uniforms:Lt([te.common,te.bumpmap,te.normalmap,te.displacementmap,{opacity:{value:1}}]),vertexShader:Le.meshnormal_vert,fragmentShader:Le.meshnormal_frag},sprite:{uniforms:Lt([te.sprite,te.fog]),vertexShader:Le.sprite_vert,fragmentShader:Le.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Le.background_vert,fragmentShader:Le.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Le.backgroundCube_vert,fragmentShader:Le.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Le.cube_vert,fragmentShader:Le.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Le.equirect_vert,fragmentShader:Le.equirect_frag},distanceRGBA:{uniforms:Lt([te.common,te.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Le.distanceRGBA_vert,fragmentShader:Le.distanceRGBA_frag},shadow:{uniforms:Lt([te.lights,te.fog,{color:{value:new Te(0)},opacity:{value:1}}]),vertexShader:Le.shadow_vert,fragmentShader:Le.shadow_frag}};Zt.physical={uniforms:Lt([Zt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new He(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new Te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new He},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new Te(0)},specularColor:{value:new Te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe},anisotropyVector:{value:new He},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Oe}}]),vertexShader:Le.meshphysical_vert,fragmentShader:Le.meshphysical_frag};const Cs={r:0,b:0,g:0};function lp(s,e,t,n,i,r,a){const o=new Te(0);let c=r===!0?0:1,l,u,h=null,d=0,p=null;function g(m,f){let b=!1,v=f.isScene===!0?f.background:null;v&&v.isTexture&&(v=(f.backgroundBlurriness>0?t:e).get(v)),v===null?_(o,c):v&&v.isColor&&(_(v,1),b=!0);const S=s.xr.getEnvironmentBlendMode();S==="additive"?n.buffers.color.setClear(0,0,0,1,a):S==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||b)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),v&&(v.isCubeTexture||v.mapping===ns)?(u===void 0&&(u=new Bt(new Ii(1,1,1),new Dt({name:"BackgroundCubeMaterial",uniforms:Pi(Zt.backgroundCube.uniforms),vertexShader:Zt.backgroundCube.vertexShader,fragmentShader:Zt.backgroundCube.fragmentShader,side:Pt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,A,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.toneMapped=We.getTransfer(v.colorSpace)!==et,(h!==v||d!==v.version||p!==s.toneMapping)&&(u.material.needsUpdate=!0,h=v,d=v.version,p=s.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Bt(new or(2,2),new Dt({name:"BackgroundMaterial",uniforms:Pi(Zt.background.uniforms),vertexShader:Zt.background.vertexShader,fragmentShader:Zt.background.fragmentShader,side:xt,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,l.material.toneMapped=We.getTransfer(v.colorSpace)!==et,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||p!==s.toneMapping)&&(l.material.needsUpdate=!0,h=v,d=v.version,p=s.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function _(m,f){m.getRGB(Cs,su(s)),n.buffers.color.setClear(Cs.r,Cs.g,Cs.b,f,a)}return{getClearColor:function(){return o},setClearColor:function(m,f=1){o.set(m),c=f,_(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,_(o,c)},render:g}}function up(s,e,t,n){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},c=m(null);let l=c,u=!1;function h(P,U,H,X,W){let j=!1;if(a){const Y=_(X,H,U);l!==Y&&(l=Y,p(l.object)),j=f(P,X,H,W),j&&b(P,X,H,W)}else{const Y=U.wireframe===!0;(l.geometry!==X.id||l.program!==H.id||l.wireframe!==Y)&&(l.geometry=X.id,l.program=H.id,l.wireframe=Y,j=!0)}W!==null&&t.update(W,s.ELEMENT_ARRAY_BUFFER),(j||u)&&(u=!1,C(P,U,H,X),W!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function d(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function p(P){return n.isWebGL2?s.bindVertexArray(P):r.bindVertexArrayOES(P)}function g(P){return n.isWebGL2?s.deleteVertexArray(P):r.deleteVertexArrayOES(P)}function _(P,U,H){const X=H.wireframe===!0;let W=o[P.id];W===void 0&&(W={},o[P.id]=W);let j=W[U.id];j===void 0&&(j={},W[U.id]=j);let Y=j[X];return Y===void 0&&(Y=m(d()),j[X]=Y),Y}function m(P){const U=[],H=[],X=[];for(let W=0;W<i;W++)U[W]=0,H[W]=0,X[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:H,attributeDivisors:X,object:P,attributes:{},index:null}}function f(P,U,H,X){const W=l.attributes,j=U.attributes;let Y=0;const ee=H.getAttributes();for(const ce in ee)if(ee[ce].location>=0){const q=W[ce];let oe=j[ce];if(oe===void 0&&(ce==="instanceMatrix"&&P.instanceMatrix&&(oe=P.instanceMatrix),ce==="instanceColor"&&P.instanceColor&&(oe=P.instanceColor)),q===void 0||q.attribute!==oe||oe&&q.data!==oe.data)return!0;Y++}return l.attributesNum!==Y||l.index!==X}function b(P,U,H,X){const W={},j=U.attributes;let Y=0;const ee=H.getAttributes();for(const ce in ee)if(ee[ce].location>=0){let q=j[ce];q===void 0&&(ce==="instanceMatrix"&&P.instanceMatrix&&(q=P.instanceMatrix),ce==="instanceColor"&&P.instanceColor&&(q=P.instanceColor));const oe={};oe.attribute=q,q&&q.data&&(oe.data=q.data),W[ce]=oe,Y++}l.attributes=W,l.attributesNum=Y,l.index=X}function v(){const P=l.newAttributes;for(let U=0,H=P.length;U<H;U++)P[U]=0}function S(P){R(P,0)}function R(P,U){const H=l.newAttributes,X=l.enabledAttributes,W=l.attributeDivisors;H[P]=1,X[P]===0&&(s.enableVertexAttribArray(P),X[P]=1),W[P]!==U&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,U),W[P]=U)}function A(){const P=l.newAttributes,U=l.enabledAttributes;for(let H=0,X=U.length;H<X;H++)U[H]!==P[H]&&(s.disableVertexAttribArray(H),U[H]=0)}function y(P,U,H,X,W,j,Y){Y===!0?s.vertexAttribIPointer(P,U,H,W,j):s.vertexAttribPointer(P,U,H,X,W,j)}function C(P,U,H,X){if(n.isWebGL2===!1&&(P.isInstancedMesh||X.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const W=X.attributes,j=H.getAttributes(),Y=U.defaultAttributeValues;for(const ee in j){const ce=j[ee];if(ce.location>=0){let V=W[ee];if(V===void 0&&(ee==="instanceMatrix"&&P.instanceMatrix&&(V=P.instanceMatrix),ee==="instanceColor"&&P.instanceColor&&(V=P.instanceColor)),V!==void 0){const q=V.normalized,oe=V.itemSize,me=t.get(V);if(me===void 0)continue;const pe=me.buffer,Re=me.type,Pe=me.bytesPerElement,Se=n.isWebGL2===!0&&(Re===s.INT||Re===s.UNSIGNED_INT||V.gpuType===Ko);if(V.isInterleavedBufferAttribute){const Ve=V.data,O=Ve.stride,At=V.offset;if(Ve.isInstancedInterleavedBuffer){for(let _e=0;_e<ce.locationSize;_e++)R(ce.location+_e,Ve.meshPerAttribute);P.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=Ve.meshPerAttribute*Ve.count)}else for(let _e=0;_e<ce.locationSize;_e++)S(ce.location+_e);s.bindBuffer(s.ARRAY_BUFFER,pe);for(let _e=0;_e<ce.locationSize;_e++)y(ce.location+_e,oe/ce.locationSize,Re,q,O*Pe,(At+oe/ce.locationSize*_e)*Pe,Se)}else{if(V.isInstancedBufferAttribute){for(let Ve=0;Ve<ce.locationSize;Ve++)R(ce.location+Ve,V.meshPerAttribute);P.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let Ve=0;Ve<ce.locationSize;Ve++)S(ce.location+Ve);s.bindBuffer(s.ARRAY_BUFFER,pe);for(let Ve=0;Ve<ce.locationSize;Ve++)y(ce.location+Ve,oe/ce.locationSize,Re,q,oe*Pe,oe/ce.locationSize*Ve*Pe,Se)}}else if(Y!==void 0){const q=Y[ee];if(q!==void 0)switch(q.length){case 2:s.vertexAttrib2fv(ce.location,q);break;case 3:s.vertexAttrib3fv(ce.location,q);break;case 4:s.vertexAttrib4fv(ce.location,q);break;default:s.vertexAttrib1fv(ce.location,q)}}}}A()}function x(){B();for(const P in o){const U=o[P];for(const H in U){const X=U[H];for(const W in X)g(X[W].object),delete X[W];delete U[H]}delete o[P]}}function T(P){if(o[P.id]===void 0)return;const U=o[P.id];for(const H in U){const X=U[H];for(const W in X)g(X[W].object),delete X[W];delete U[H]}delete o[P.id]}function D(P){for(const U in o){const H=o[U];if(H[P.id]===void 0)continue;const X=H[P.id];for(const W in X)g(X[W].object),delete X[W];delete H[P.id]}}function B(){Z(),u=!0,l!==c&&(l=c,p(l.object))}function Z(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:h,reset:B,resetDefaultState:Z,dispose:x,releaseStatesOfGeometry:T,releaseStatesOfProgram:D,initAttributes:v,enableAttribute:S,disableUnusedAttributes:A}}function hp(s,e,t,n){const i=n.isWebGL2;let r;function a(u){r=u}function o(u,h){s.drawArrays(r,u,h),t.update(h,r,1)}function c(u,h,d){if(d===0)return;let p,g;if(i)p=s,g="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[g](r,u,h,d),t.update(h,r,d)}function l(u,h,d){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<d;g++)this.render(u[g],h[g]);else{p.multiDrawArraysWEBGL(r,u,0,h,0,d);let g=0;for(let _=0;_<d;_++)g+=h[_];t.update(g,r,1)}}this.setMode=a,this.render=o,this.renderInstances=c,this.renderMultiDraw=l}function dp(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const y=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(y){if(y==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";y="mediump"}return y==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const c=r(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);const l=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),d=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),m=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),f=s.getParameter(s.MAX_VARYING_VECTORS),b=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),v=d>0,S=a||e.has("OES_texture_float"),R=v&&S,A=a?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:b,vertexTextures:v,floatFragmentTextures:S,floatVertexTextures:R,maxSamples:A}}function fp(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new Cn,o=new Oe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||n!==0||i;return i=d,n=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,p){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,f=s.get(h);if(!i||g===null||g.length===0||r&&!m)r?u(null):l();else{const b=r?0:n,v=b*4;let S=f.clippingState||null;c.value=S,S=u(g,d,v,p);for(let R=0;R!==v;++R)S[R]=t[R];f.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,p,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const f=p+_*4,b=d.matrixWorldInverse;o.getNormalMatrix(b),(m===null||m.length<f)&&(m=new Float32Array(f));for(let v=0,S=p;v!==_;++v,S+=4)a.copy(h[v]).applyMatrix4(b,o),a.normal.toArray(m,S),m[S+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function pp(s){let e=new WeakMap;function t(a,o){return o===Ys?a.mapping=$n:o===qs&&(a.mapping=Kn),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Ys||o===qs)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new au(c.height/2);return l.fromEquirectangularTexture(s,a),e.set(a,l),a.addEventListener("dispose",i),t(l.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class ar extends ma{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const yi=4,ec=[.125,.215,.35,.446,.526,.582],Yn=20,Ur=new ar,tc=new Te;let Nr=null,Or=0,Fr=0;const Zn=(1+Math.sqrt(5))/2,Si=1/Zn,nc=[new I(1,1,1),new I(-1,1,1),new I(1,1,-1),new I(-1,1,-1),new I(0,Zn,Si),new I(0,Zn,-Si),new I(Si,0,Zn),new I(-Si,0,Zn),new I(Zn,Si,0),new I(-Zn,Si,0)];class Fo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Nr=this._renderer.getRenderTarget(),Or=this._renderer.getActiveCubeFace(),Fr=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=rc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=sc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Nr,Or,Fr),e.scissorTest=!1,Ls(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===$n||e.mapping===Kn?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Nr=this._renderer.getRenderTarget(),Or=this._renderer.getActiveCubeFace(),Fr=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:ut,minFilter:ut,generateMipmaps:!1,type:Ri,format:It,colorSpace:dt,depthBuffer:!1},i=ic(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ic(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=mp(r)),this._blurMaterial=gp(r,e,t)}return i}_compileMaterial(e){const t=new Bt(this._lodPlanes[0],e);this._renderer.compile(t,Ur)}_sceneToCubeUV(e,t,n,i){const o=new Tt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(tc),u.toneMapping=xn,u.autoClear=!1;const p=new gn({name:"PMREM.Background",side:Pt,depthWrite:!1,depthTest:!1}),g=new Bt(new Ii,p);let _=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,_=!0):(p.color.copy(tc),_=!0);for(let f=0;f<6;f++){const b=f%3;b===0?(o.up.set(0,c[f],0),o.lookAt(l[f],0,0)):b===1?(o.up.set(0,0,c[f]),o.lookAt(0,l[f],0)):(o.up.set(0,c[f],0),o.lookAt(0,0,l[f]));const v=this._cubeSize;Ls(i,b*v,f>2?v:0,v,v),u.setRenderTarget(i),_&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===$n||e.mapping===Kn;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=rc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=sc());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new Bt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const c=this._cubeSize;Ls(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Ur)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=nc[(i-1)%nc.length];this._blur(e,i-1,i,r,a)}t.autoClear=n}_blur(e,t,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Bt(this._lodPlanes[i],l),d=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Yn-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):Yn;m>Yn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Yn}`);const f=[];let b=0;for(let y=0;y<Yn;++y){const C=y/_,x=Math.exp(-C*C/2);f.push(x),y===0?b+=x:y<m&&(b+=2*x)}for(let y=0;y<f.length;y++)f[y]=f[y]/b;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-n;const S=this._sizeLods[i],R=3*S*(i>v-yi?i-v+yi:0),A=4*(this._cubeSize-S);Ls(t,R,A,3*S,2*S),c.setRenderTarget(t),c.render(h,Ur)}}function mp(s){const e=[],t=[],n=[];let i=s;const r=s-yi+1+ec.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);t.push(o);let c=1/o;a>s-yi?c=ec[a-s+yi-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,_=3,m=2,f=1,b=new Float32Array(_*g*p),v=new Float32Array(m*g*p),S=new Float32Array(f*g*p);for(let A=0;A<p;A++){const y=A%3*2/3-1,C=A>2?0:-1,x=[y,C,0,y+2/3,C,0,y+2/3,C+1,0,y,C,0,y+2/3,C+1,0,y,C+1,0];b.set(x,_*g*A),v.set(d,m*g*A);const T=[A,A,A,A,A,A];S.set(T,f*g*A)}const R=new Qt;R.setAttribute("position",new Et(b,_)),R.setAttribute("uv",new Et(v,m)),R.setAttribute("faceIndex",new Et(S,f)),e.push(R),i>yi&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function ic(s,e,t){const n=new On(s,e,t);return n.texture.mapping=ns,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ls(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function gp(s,e,t){const n=new Float32Array(Yn),i=new I(0,1,0);return new Dt({name:"SphericalGaussianBlur",defines:{n:Yn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:_a(),fragmentShader:`

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
		`,blending:vn,depthTest:!1,depthWrite:!1})}function sc(){return new Dt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_a(),fragmentShader:`

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
		`,blending:vn,depthTest:!1,depthWrite:!1})}function rc(){return new Dt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_a(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:vn,depthTest:!1,depthWrite:!1})}function _a(){return`

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
	`}function _p(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===Ys||c===qs,u=c===$n||c===Kn;if(l||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=e.get(o);return t===null&&(t=new Fo(s)),h=l?t.fromEquirectangular(o,h):t.fromCubemap(o,h),e.set(o,h),h.texture}else{if(e.has(o))return e.get(o).texture;{const h=o.image;if(l&&h&&h.height>0||u&&h&&i(h)){t===null&&(t=new Fo(s));const d=l?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",r),d.texture}else return null}}}return o}function i(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function vp(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function xp(s,e,t,n){const i={},r=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,f=_.length;m<f;m++)e.remove(_[m])}d.removeEventListener("dispose",a),delete i[d.id];const p=r.get(d);p&&(e.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,t.memory.geometries++),d}function c(h){const d=h.attributes;for(const g in d)e.update(d[g],s.ARRAY_BUFFER);const p=h.morphAttributes;for(const g in p){const _=p[g];for(let m=0,f=_.length;m<f;m++)e.update(_[m],s.ARRAY_BUFFER)}}function l(h){const d=[],p=h.index,g=h.attributes.position;let _=0;if(p!==null){const b=p.array;_=p.version;for(let v=0,S=b.length;v<S;v+=3){const R=b[v+0],A=b[v+1],y=b[v+2];d.push(R,A,A,y,y,R)}}else if(g!==void 0){const b=g.array;_=g.version;for(let v=0,S=b.length/3-1;v<S;v+=3){const R=v+0,A=v+1,y=v+2;d.push(R,A,A,y,y,R)}}else return;const m=new(Ql(d)?pa:fa)(d,1);m.version=_;const f=r.get(h);f&&e.remove(f),r.set(h,m)}function u(h){const d=r.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&l(h)}else l(h);return r.get(h)}return{get:o,update:c,getWireframeAttribute:u}}function bp(s,e,t,n){const i=n.isWebGL2;let r;function a(p){r=p}let o,c;function l(p){o=p.type,c=p.bytesPerElement}function u(p,g){s.drawElements(r,g,o,p*c),t.update(g,r,1)}function h(p,g,_){if(_===0)return;let m,f;if(i)m=s,f="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[f](r,g,o,p*c,_),t.update(g,r,_)}function d(p,g,_){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<_;f++)this.render(p[f]/c,g[f]);else{m.multiDrawElementsWEBGL(r,g,0,o,p,0,_);let f=0;for(let b=0;b<_;b++)f+=g[b];t.update(f,r,1)}}this.setMode=a,this.setIndex=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=d}function Sp(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Mp(s,e){return s[0]-e[0]}function yp(s,e){return Math.abs(e[1])-Math.abs(s[1])}function Tp(s,e,t){const n={},i=new Float32Array(8),r=new WeakMap,a=new $e,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function c(l,u,h){const d=l.morphTargetInfluences;if(e.isWebGL2===!0){const p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=p!==void 0?p.length:0;let _=r.get(u);if(_===void 0||_.count!==g){let P=function(){B.dispose(),r.delete(u),u.removeEventListener("dispose",P)};_!==void 0&&_.texture.dispose();const b=u.morphAttributes.position!==void 0,v=u.morphAttributes.normal!==void 0,S=u.morphAttributes.color!==void 0,R=u.morphAttributes.position||[],A=u.morphAttributes.normal||[],y=u.morphAttributes.color||[];let C=0;b===!0&&(C=1),v===!0&&(C=2),S===!0&&(C=3);let x=u.attributes.position.count*C,T=1;x>e.maxTextureSize&&(T=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);const D=new Float32Array(x*T*4*g),B=new ha(D,x,T,g);B.type=rn,B.needsUpdate=!0;const Z=C*4;for(let U=0;U<g;U++){const H=R[U],X=A[U],W=y[U],j=x*T*4*U;for(let Y=0;Y<H.count;Y++){const ee=Y*Z;b===!0&&(a.fromBufferAttribute(H,Y),D[j+ee+0]=a.x,D[j+ee+1]=a.y,D[j+ee+2]=a.z,D[j+ee+3]=0),v===!0&&(a.fromBufferAttribute(X,Y),D[j+ee+4]=a.x,D[j+ee+5]=a.y,D[j+ee+6]=a.z,D[j+ee+7]=0),S===!0&&(a.fromBufferAttribute(W,Y),D[j+ee+8]=a.x,D[j+ee+9]=a.y,D[j+ee+10]=a.z,D[j+ee+11]=W.itemSize===4?a.w:1)}}_={count:g,texture:B,size:new He(x,T)},r.set(u,_),u.addEventListener("dispose",P)}let m=0;for(let b=0;b<d.length;b++)m+=d[b];const f=u.morphTargetsRelative?1:1-m;h.getUniforms().setValue(s,"morphTargetBaseInfluence",f),h.getUniforms().setValue(s,"morphTargetInfluences",d),h.getUniforms().setValue(s,"morphTargetsTexture",_.texture,t),h.getUniforms().setValue(s,"morphTargetsTextureSize",_.size)}else{const p=d===void 0?0:d.length;let g=n[u.id];if(g===void 0||g.length!==p){g=[];for(let v=0;v<p;v++)g[v]=[v,0];n[u.id]=g}for(let v=0;v<p;v++){const S=g[v];S[0]=v,S[1]=d[v]}g.sort(yp);for(let v=0;v<8;v++)v<p&&g[v][1]?(o[v][0]=g[v][0],o[v][1]=g[v][1]):(o[v][0]=Number.MAX_SAFE_INTEGER,o[v][1]=0);o.sort(Mp);const _=u.morphAttributes.position,m=u.morphAttributes.normal;let f=0;for(let v=0;v<8;v++){const S=o[v],R=S[0],A=S[1];R!==Number.MAX_SAFE_INTEGER&&A?(_&&u.getAttribute("morphTarget"+v)!==_[R]&&u.setAttribute("morphTarget"+v,_[R]),m&&u.getAttribute("morphNormal"+v)!==m[R]&&u.setAttribute("morphNormal"+v,m[R]),i[v]=A,f+=A):(_&&u.hasAttribute("morphTarget"+v)===!0&&u.deleteAttribute("morphTarget"+v),m&&u.hasAttribute("morphNormal"+v)===!0&&u.deleteAttribute("morphNormal"+v),i[v]=0)}const b=u.morphTargetsRelative?1:1-f;h.getUniforms().setValue(s,"morphTargetBaseInfluence",b),h.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:c}}function Ep(s,e,t,n){let i=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,h=e.get(c,u);if(i.get(h)!==l&&(e.update(h),i.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),i.get(c)!==l&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return h}function a(){i=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}class va extends ht{constructor(e,t,n,i,r,a,o,c,l,u){if(u=u!==void 0?u:Un,u!==Un&&u!==Qn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Un&&(n=mn),n===void 0&&u===Qn&&(n=Dn),super(null,i,r,a,o,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:lt,this.minFilter=c!==void 0?c:lt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const lu=new ht,uu=new va(1,1);uu.compareFunction=aa;const hu=new ha,du=new nu,fu=new ga,oc=[],ac=[],cc=new Float32Array(16),lc=new Float32Array(9),uc=new Float32Array(4);function Di(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=oc[i];if(r===void 0&&(r=new Float32Array(i),oc[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function ft(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function pt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function cr(s,e){let t=ac[e];t===void 0&&(t=new Int32Array(e),ac[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Ap(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function wp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;s.uniform2fv(this.addr,e),pt(t,e)}}function Rp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ft(t,e))return;s.uniform3fv(this.addr,e),pt(t,e)}}function Cp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;s.uniform4fv(this.addr,e),pt(t,e)}}function Lp(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(ft(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),pt(t,e)}else{if(ft(t,n))return;uc.set(n),s.uniformMatrix2fv(this.addr,!1,uc),pt(t,n)}}function Pp(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(ft(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),pt(t,e)}else{if(ft(t,n))return;lc.set(n),s.uniformMatrix3fv(this.addr,!1,lc),pt(t,n)}}function Ip(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(ft(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),pt(t,e)}else{if(ft(t,n))return;cc.set(n),s.uniformMatrix4fv(this.addr,!1,cc),pt(t,n)}}function Dp(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Up(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;s.uniform2iv(this.addr,e),pt(t,e)}}function Np(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ft(t,e))return;s.uniform3iv(this.addr,e),pt(t,e)}}function Op(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;s.uniform4iv(this.addr,e),pt(t,e)}}function Fp(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Bp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;s.uniform2uiv(this.addr,e),pt(t,e)}}function kp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ft(t,e))return;s.uniform3uiv(this.addr,e),pt(t,e)}}function zp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;s.uniform4uiv(this.addr,e),pt(t,e)}}function Gp(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);const r=this.type===s.SAMPLER_2D_SHADOW?uu:lu;t.setTexture2D(e||r,i)}function Hp(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||du,i)}function Vp(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||fu,i)}function Wp(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||hu,i)}function jp(s){switch(s){case 5126:return Ap;case 35664:return wp;case 35665:return Rp;case 35666:return Cp;case 35674:return Lp;case 35675:return Pp;case 35676:return Ip;case 5124:case 35670:return Dp;case 35667:case 35671:return Up;case 35668:case 35672:return Np;case 35669:case 35673:return Op;case 5125:return Fp;case 36294:return Bp;case 36295:return kp;case 36296:return zp;case 35678:case 36198:case 36298:case 36306:case 35682:return Gp;case 35679:case 36299:case 36307:return Hp;case 35680:case 36300:case 36308:case 36293:return Vp;case 36289:case 36303:case 36311:case 36292:return Wp}}function Xp(s,e){s.uniform1fv(this.addr,e)}function Zp(s,e){const t=Di(e,this.size,2);s.uniform2fv(this.addr,t)}function Yp(s,e){const t=Di(e,this.size,3);s.uniform3fv(this.addr,t)}function qp(s,e){const t=Di(e,this.size,4);s.uniform4fv(this.addr,t)}function $p(s,e){const t=Di(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Kp(s,e){const t=Di(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Jp(s,e){const t=Di(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Qp(s,e){s.uniform1iv(this.addr,e)}function em(s,e){s.uniform2iv(this.addr,e)}function tm(s,e){s.uniform3iv(this.addr,e)}function nm(s,e){s.uniform4iv(this.addr,e)}function im(s,e){s.uniform1uiv(this.addr,e)}function sm(s,e){s.uniform2uiv(this.addr,e)}function rm(s,e){s.uniform3uiv(this.addr,e)}function om(s,e){s.uniform4uiv(this.addr,e)}function am(s,e,t){const n=this.cache,i=e.length,r=cr(t,i);ft(n,r)||(s.uniform1iv(this.addr,r),pt(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||lu,r[a])}function cm(s,e,t){const n=this.cache,i=e.length,r=cr(t,i);ft(n,r)||(s.uniform1iv(this.addr,r),pt(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||du,r[a])}function lm(s,e,t){const n=this.cache,i=e.length,r=cr(t,i);ft(n,r)||(s.uniform1iv(this.addr,r),pt(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||fu,r[a])}function um(s,e,t){const n=this.cache,i=e.length,r=cr(t,i);ft(n,r)||(s.uniform1iv(this.addr,r),pt(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||hu,r[a])}function hm(s){switch(s){case 5126:return Xp;case 35664:return Zp;case 35665:return Yp;case 35666:return qp;case 35674:return $p;case 35675:return Kp;case 35676:return Jp;case 5124:case 35670:return Qp;case 35667:case 35671:return em;case 35668:case 35672:return tm;case 35669:case 35673:return nm;case 5125:return im;case 36294:return sm;case 36295:return rm;case 36296:return om;case 35678:case 36198:case 36298:case 36306:case 35682:return am;case 35679:case 36299:case 36307:return cm;case 35680:case 36300:case 36308:case 36293:return lm;case 36289:case 36303:case 36311:case 36292:return um}}class dm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=jp(t.type)}}class fm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=hm(t.type)}}class pm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const Br=/(\w+)(\])?(\[|\.)?/g;function hc(s,e){s.seq.push(e),s.map[e.id]=e}function mm(s,e,t){const n=s.name,i=n.length;for(Br.lastIndex=0;;){const r=Br.exec(n),a=Br.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){hc(t,l===void 0?new dm(o,s,e):new fm(o,s,e));break}else{let h=t.map[o];h===void 0&&(h=new pm(o),hc(t,h)),t=h}}}class Ws{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);mm(r,a,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function dc(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const gm=37297;let _m=0;function vm(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function xm(s){const e=We.getPrimaries(We.workingColorSpace),t=We.getPrimaries(s);let n;switch(e===t?n="":e===Qi&&t===Ji?n="LinearDisplayP3ToLinearSRGB":e===Ji&&t===Qi&&(n="LinearSRGBToLinearDisplayP3"),s){case dt:case is:return[n,"LinearTransferOETF"];case qe:case sr:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function fc(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+vm(s.getShaderSource(e),a)}else return i}function bm(s,e){const t=xm(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Sm(s,e){let t;switch(e){case Al:t="Linear";break;case wl:t="Reinhard";break;case Rl:t="OptimizedCineon";break;case Yo:t="ACESFilmic";break;case Ll:t="AgX";break;case Cl:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Mm(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ti).join(`
`)}function ym(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Ti).join(`
`)}function Tm(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Em(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function Ti(s){return s!==""}function pc(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function mc(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Am=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bo(s){return s.replace(Am,Rm)}const wm=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Rm(s,e){let t=Le[e];if(t===void 0){const n=wm.get(e);if(n!==void 0)t=Le[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Bo(t)}const Cm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gc(s){return s.replace(Cm,Lm)}function Lm(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function _c(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Pm(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Xo?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Wi?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===nn&&(e="SHADOWMAP_TYPE_VSM"),e}function Im(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case $n:case Kn:e="ENVMAP_TYPE_CUBE";break;case ns:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Dm(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Kn:e="ENVMAP_MODE_REFRACTION";break}return e}function Um(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Zo:e="ENVMAP_BLENDING_MULTIPLY";break;case Tl:e="ENVMAP_BLENDING_MIX";break;case El:e="ENVMAP_BLENDING_ADD";break}return e}function Nm(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Om(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=Pm(t),l=Im(t),u=Dm(t),h=Um(t),d=Nm(t),p=t.isWebGL2?"":Mm(t),g=ym(t),_=Tm(r),m=i.createProgram();let f,b,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ti).join(`
`),f.length>0&&(f+=`
`),b=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ti).join(`
`),b.length>0&&(b+=`
`)):(f=[_c(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ti).join(`
`),b=[p,_c(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==xn?"#define TONE_MAPPING":"",t.toneMapping!==xn?Le.tonemapping_pars_fragment:"",t.toneMapping!==xn?Sm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Le.colorspace_pars_fragment,bm("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ti).join(`
`)),a=Bo(a),a=pc(a,t),a=mc(a,t),o=Bo(o),o=pc(o,t),o=mc(o,t),a=gc(a),o=gc(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,f=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,b=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===No?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===No?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+b);const S=v+f+a,R=v+b+o,A=dc(i,i.VERTEX_SHADER,S),y=dc(i,i.FRAGMENT_SHADER,R);i.attachShader(m,A),i.attachShader(m,y),t.index0AttributeName!==void 0?i.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function C(B){if(s.debug.checkShaderErrors){const Z=i.getProgramInfoLog(m).trim(),P=i.getShaderInfoLog(A).trim(),U=i.getShaderInfoLog(y).trim();let H=!0,X=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(H=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,m,A,y);else{const W=fc(i,A,"vertex"),j=fc(i,y,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Program Info Log: `+Z+`
`+W+`
`+j)}else Z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Z):(P===""||U==="")&&(X=!1);X&&(B.diagnostics={runnable:H,programLog:Z,vertexShader:{log:P,prefix:f},fragmentShader:{log:U,prefix:b}})}i.deleteShader(A),i.deleteShader(y),x=new Ws(i,m),T=Em(i,m)}let x;this.getUniforms=function(){return x===void 0&&C(this),x};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let D=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=i.getProgramParameter(m,gm)),D},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=_m++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=A,this.fragmentShader=y,this}let Fm=0;class Bm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new km(e),t.set(e,n)),n}}class km{constructor(e){this.id=Fm++,this.code=e,this.usedTimes=0}}function zm(s,e,t,n,i,r,a){const o=new da,c=new Bm,l=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,d=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return x===0?"uv":`uv${x}`}function m(x,T,D,B,Z){const P=B.fog,U=Z.geometry,H=x.isMeshStandardMaterial?B.environment:null,X=(x.isMeshStandardMaterial?t:e).get(x.envMap||H),W=X&&X.mapping===ns?X.image.height:null,j=g[x.type];x.precision!==null&&(p=i.getMaxPrecision(x.precision),p!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",p,"instead."));const Y=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,ee=Y!==void 0?Y.length:0;let ce=0;U.morphAttributes.position!==void 0&&(ce=1),U.morphAttributes.normal!==void 0&&(ce=2),U.morphAttributes.color!==void 0&&(ce=3);let V,q,oe,me;if(j){const wt=Zt[j];V=wt.vertexShader,q=wt.fragmentShader}else V=x.vertexShader,q=x.fragmentShader,c.update(x),oe=c.getVertexShaderID(x),me=c.getFragmentShaderID(x);const pe=s.getRenderTarget(),Re=Z.isInstancedMesh===!0,Pe=Z.isBatchedMesh===!0,Se=!!x.map,Ve=!!x.matcap,O=!!X,At=!!x.aoMap,_e=!!x.lightMap,Ae=!!x.bumpMap,he=!!x.normalMap,nt=!!x.displacementMap,De=!!x.emissiveMap,w=!!x.metalnessMap,M=!!x.roughnessMap,k=x.anisotropy>0,J=x.clearcoat>0,K=x.iridescence>0,Q=x.sheen>0,de=x.transmission>0,re=k&&!!x.anisotropyMap,le=J&&!!x.clearcoatMap,be=J&&!!x.clearcoatNormalMap,Ue=J&&!!x.clearcoatRoughnessMap,$=K&&!!x.iridescenceMap,Ze=K&&!!x.iridescenceThicknessMap,ze=Q&&!!x.sheenColorMap,Ee=Q&&!!x.sheenRoughnessMap,ge=!!x.specularMap,ue=!!x.specularColorMap,Ie=!!x.specularIntensityMap,Xe=de&&!!x.transmissionMap,rt=de&&!!x.thicknessMap,Be=!!x.gradientMap,ne=!!x.alphaMap,L=x.alphaTest>0,ie=!!x.alphaHash,se=!!x.extensions,Me=!!U.attributes.uv1,ve=!!U.attributes.uv2,Ke=!!U.attributes.uv3;let Je=xn;return x.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(Je=s.toneMapping),{isWebGL2:u,shaderID:j,shaderType:x.type,shaderName:x.name,vertexShader:V,fragmentShader:q,defines:x.defines,customVertexShaderID:oe,customFragmentShaderID:me,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:p,batching:Pe,instancing:Re,instancingColor:Re&&Z.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:pe===null?s.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:dt,map:Se,matcap:Ve,envMap:O,envMapMode:O&&X.mapping,envMapCubeUVHeight:W,aoMap:At,lightMap:_e,bumpMap:Ae,normalMap:he,displacementMap:d&&nt,emissiveMap:De,normalMapObjectSpace:he&&x.normalMapType===Wl,normalMapTangentSpace:he&&x.normalMapType===oa,metalnessMap:w,roughnessMap:M,anisotropy:k,anisotropyMap:re,clearcoat:J,clearcoatMap:le,clearcoatNormalMap:be,clearcoatRoughnessMap:Ue,iridescence:K,iridescenceMap:$,iridescenceThicknessMap:Ze,sheen:Q,sheenColorMap:ze,sheenRoughnessMap:Ee,specularMap:ge,specularColorMap:ue,specularIntensityMap:Ie,transmission:de,transmissionMap:Xe,thicknessMap:rt,gradientMap:Be,opaque:x.transparent===!1&&x.blending===qn,alphaMap:ne,alphaTest:L,alphaHash:ie,combine:x.combine,mapUv:Se&&_(x.map.channel),aoMapUv:At&&_(x.aoMap.channel),lightMapUv:_e&&_(x.lightMap.channel),bumpMapUv:Ae&&_(x.bumpMap.channel),normalMapUv:he&&_(x.normalMap.channel),displacementMapUv:nt&&_(x.displacementMap.channel),emissiveMapUv:De&&_(x.emissiveMap.channel),metalnessMapUv:w&&_(x.metalnessMap.channel),roughnessMapUv:M&&_(x.roughnessMap.channel),anisotropyMapUv:re&&_(x.anisotropyMap.channel),clearcoatMapUv:le&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:be&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ue&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:$&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:Ze&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:ze&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:Ee&&_(x.sheenRoughnessMap.channel),specularMapUv:ge&&_(x.specularMap.channel),specularColorMapUv:ue&&_(x.specularColorMap.channel),specularIntensityMapUv:Ie&&_(x.specularIntensityMap.channel),transmissionMapUv:Xe&&_(x.transmissionMap.channel),thicknessMapUv:rt&&_(x.thicknessMap.channel),alphaMapUv:ne&&_(x.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(he||k),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,vertexUv1s:Me,vertexUv2s:ve,vertexUv3s:Ke,pointsUvs:Z.isPoints===!0&&!!U.attributes.uv&&(Se||ne),fog:!!P,useFog:x.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:Z.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:ce,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:s.shadowMap.enabled&&D.length>0,shadowMapType:s.shadowMap.type,toneMapping:Je,useLegacyLights:s._useLegacyLights,decodeVideoTexture:Se&&x.map.isVideoTexture===!0&&We.getTransfer(x.map.colorSpace)===et,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Yt,flipSided:x.side===Pt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:se&&x.extensions.derivatives===!0,extensionFragDepth:se&&x.extensions.fragDepth===!0,extensionDrawBuffers:se&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:se&&x.extensions.shaderTextureLOD===!0,extensionClipCullDistance:se&&x.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()}}function f(x){const T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(const D in x.defines)T.push(D),T.push(x.defines[D]);return x.isRawShaderMaterial===!1&&(b(T,x),v(T,x),T.push(s.outputColorSpace)),T.push(x.customProgramCacheKey),T.join()}function b(x,T){x.push(T.precision),x.push(T.outputColorSpace),x.push(T.envMapMode),x.push(T.envMapCubeUVHeight),x.push(T.mapUv),x.push(T.alphaMapUv),x.push(T.lightMapUv),x.push(T.aoMapUv),x.push(T.bumpMapUv),x.push(T.normalMapUv),x.push(T.displacementMapUv),x.push(T.emissiveMapUv),x.push(T.metalnessMapUv),x.push(T.roughnessMapUv),x.push(T.anisotropyMapUv),x.push(T.clearcoatMapUv),x.push(T.clearcoatNormalMapUv),x.push(T.clearcoatRoughnessMapUv),x.push(T.iridescenceMapUv),x.push(T.iridescenceThicknessMapUv),x.push(T.sheenColorMapUv),x.push(T.sheenRoughnessMapUv),x.push(T.specularMapUv),x.push(T.specularColorMapUv),x.push(T.specularIntensityMapUv),x.push(T.transmissionMapUv),x.push(T.thicknessMapUv),x.push(T.combine),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.morphAttributeCount),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.numLightProbes),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function v(x,T){o.disableAll(),T.isWebGL2&&o.enable(0),T.supportsVertexTextures&&o.enable(1),T.instancing&&o.enable(2),T.instancingColor&&o.enable(3),T.matcap&&o.enable(4),T.envMap&&o.enable(5),T.normalMapObjectSpace&&o.enable(6),T.normalMapTangentSpace&&o.enable(7),T.clearcoat&&o.enable(8),T.iridescence&&o.enable(9),T.alphaTest&&o.enable(10),T.vertexColors&&o.enable(11),T.vertexAlphas&&o.enable(12),T.vertexUv1s&&o.enable(13),T.vertexUv2s&&o.enable(14),T.vertexUv3s&&o.enable(15),T.vertexTangents&&o.enable(16),T.anisotropy&&o.enable(17),T.alphaHash&&o.enable(18),T.batching&&o.enable(19),x.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.skinning&&o.enable(4),T.morphTargets&&o.enable(5),T.morphNormals&&o.enable(6),T.morphColors&&o.enable(7),T.premultipliedAlpha&&o.enable(8),T.shadowMapEnabled&&o.enable(9),T.useLegacyLights&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),x.push(o.mask)}function S(x){const T=g[x.type];let D;if(T){const B=Zt[T];D=ru.clone(B.uniforms)}else D=x.uniforms;return D}function R(x,T){let D;for(let B=0,Z=l.length;B<Z;B++){const P=l[B];if(P.cacheKey===T){D=P,++D.usedTimes;break}}return D===void 0&&(D=new Om(s,T,x,r),l.push(D)),D}function A(x){if(--x.usedTimes===0){const T=l.indexOf(x);l[T]=l[l.length-1],l.pop(),x.destroy()}}function y(x){c.remove(x)}function C(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:S,acquireProgram:R,releaseProgram:A,releaseShaderCache:y,programs:l,dispose:C}}function Gm(){let s=new WeakMap;function e(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function t(r){s.delete(r)}function n(r,a,o){s.get(r)[a]=o}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Hm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function vc(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function xc(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(h,d,p,g,_,m){let f=s[e];return f===void 0?(f={id:h.id,object:h,geometry:d,material:p,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},s[e]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=h.renderOrder,f.z=_,f.group=m),e++,f}function o(h,d,p,g,_,m){const f=a(h,d,p,g,_,m);p.transmission>0?n.push(f):p.transparent===!0?i.push(f):t.push(f)}function c(h,d,p,g,_,m){const f=a(h,d,p,g,_,m);p.transmission>0?n.unshift(f):p.transparent===!0?i.unshift(f):t.unshift(f)}function l(h,d){t.length>1&&t.sort(h||Hm),n.length>1&&n.sort(d||vc),i.length>1&&i.sort(d||vc)}function u(){for(let h=e,d=s.length;h<d;h++){const p=s[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:c,finish:u,sort:l}}function Vm(){let s=new WeakMap;function e(n,i){const r=s.get(n);let a;return r===void 0?(a=new xc,s.set(n,[a])):i>=r.length?(a=new xc,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function Wm(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new Te};break;case"SpotLight":t={position:new I,direction:new I,color:new Te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Te,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Te,groundColor:new Te};break;case"RectAreaLight":t={color:new Te,position:new I,halfWidth:new I,halfHeight:new I};break}return s[e.id]=t,t}}}function jm(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let Xm=0;function Zm(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Ym(s,e){const t=new Wm,n=jm(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new I);const r=new I,a=new Fe,o=new Fe;function c(u,h){let d=0,p=0,g=0;for(let B=0;B<9;B++)i.probe[B].set(0,0,0);let _=0,m=0,f=0,b=0,v=0,S=0,R=0,A=0,y=0,C=0,x=0;u.sort(Zm);const T=h===!0?Math.PI:1;for(let B=0,Z=u.length;B<Z;B++){const P=u[B],U=P.color,H=P.intensity,X=P.distance,W=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)d+=U.r*H*T,p+=U.g*H*T,g+=U.b*H*T;else if(P.isLightProbe){for(let j=0;j<9;j++)i.probe[j].addScaledVector(P.sh.coefficients[j],H);x++}else if(P.isDirectionalLight){const j=t.get(P);if(j.color.copy(P.color).multiplyScalar(P.intensity*T),P.castShadow){const Y=P.shadow,ee=n.get(P);ee.shadowBias=Y.bias,ee.shadowNormalBias=Y.normalBias,ee.shadowRadius=Y.radius,ee.shadowMapSize=Y.mapSize,i.directionalShadow[_]=ee,i.directionalShadowMap[_]=W,i.directionalShadowMatrix[_]=P.shadow.matrix,S++}i.directional[_]=j,_++}else if(P.isSpotLight){const j=t.get(P);j.position.setFromMatrixPosition(P.matrixWorld),j.color.copy(U).multiplyScalar(H*T),j.distance=X,j.coneCos=Math.cos(P.angle),j.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),j.decay=P.decay,i.spot[f]=j;const Y=P.shadow;if(P.map&&(i.spotLightMap[y]=P.map,y++,Y.updateMatrices(P),P.castShadow&&C++),i.spotLightMatrix[f]=Y.matrix,P.castShadow){const ee=n.get(P);ee.shadowBias=Y.bias,ee.shadowNormalBias=Y.normalBias,ee.shadowRadius=Y.radius,ee.shadowMapSize=Y.mapSize,i.spotShadow[f]=ee,i.spotShadowMap[f]=W,A++}f++}else if(P.isRectAreaLight){const j=t.get(P);j.color.copy(U).multiplyScalar(H),j.halfWidth.set(P.width*.5,0,0),j.halfHeight.set(0,P.height*.5,0),i.rectArea[b]=j,b++}else if(P.isPointLight){const j=t.get(P);if(j.color.copy(P.color).multiplyScalar(P.intensity*T),j.distance=P.distance,j.decay=P.decay,P.castShadow){const Y=P.shadow,ee=n.get(P);ee.shadowBias=Y.bias,ee.shadowNormalBias=Y.normalBias,ee.shadowRadius=Y.radius,ee.shadowMapSize=Y.mapSize,ee.shadowCameraNear=Y.camera.near,ee.shadowCameraFar=Y.camera.far,i.pointShadow[m]=ee,i.pointShadowMap[m]=W,i.pointShadowMatrix[m]=P.shadow.matrix,R++}i.point[m]=j,m++}else if(P.isHemisphereLight){const j=t.get(P);j.skyColor.copy(P.color).multiplyScalar(H*T),j.groundColor.copy(P.groundColor).multiplyScalar(H*T),i.hemi[v]=j,v++}}b>0&&(e.isWebGL2?s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=te.LTC_FLOAT_1,i.rectAreaLTC2=te.LTC_FLOAT_2):(i.rectAreaLTC1=te.LTC_HALF_1,i.rectAreaLTC2=te.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=te.LTC_FLOAT_1,i.rectAreaLTC2=te.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=te.LTC_HALF_1,i.rectAreaLTC2=te.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=p,i.ambient[2]=g;const D=i.hash;(D.directionalLength!==_||D.pointLength!==m||D.spotLength!==f||D.rectAreaLength!==b||D.hemiLength!==v||D.numDirectionalShadows!==S||D.numPointShadows!==R||D.numSpotShadows!==A||D.numSpotMaps!==y||D.numLightProbes!==x)&&(i.directional.length=_,i.spot.length=f,i.rectArea.length=b,i.point.length=m,i.hemi.length=v,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=R,i.pointShadowMap.length=R,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=R,i.spotLightMatrix.length=A+y-C,i.spotLightMap.length=y,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=x,D.directionalLength=_,D.pointLength=m,D.spotLength=f,D.rectAreaLength=b,D.hemiLength=v,D.numDirectionalShadows=S,D.numPointShadows=R,D.numSpotShadows=A,D.numSpotMaps=y,D.numLightProbes=x,i.version=Xm++)}function l(u,h){let d=0,p=0,g=0,_=0,m=0;const f=h.matrixWorldInverse;for(let b=0,v=u.length;b<v;b++){const S=u[b];if(S.isDirectionalLight){const R=i.directional[d];R.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(f),d++}else if(S.isSpotLight){const R=i.spot[g];R.position.setFromMatrixPosition(S.matrixWorld),R.position.applyMatrix4(f),R.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(f),g++}else if(S.isRectAreaLight){const R=i.rectArea[_];R.position.setFromMatrixPosition(S.matrixWorld),R.position.applyMatrix4(f),o.identity(),a.copy(S.matrixWorld),a.premultiply(f),o.extractRotation(a),R.halfWidth.set(S.width*.5,0,0),R.halfHeight.set(0,S.height*.5,0),R.halfWidth.applyMatrix4(o),R.halfHeight.applyMatrix4(o),_++}else if(S.isPointLight){const R=i.point[p];R.position.setFromMatrixPosition(S.matrixWorld),R.position.applyMatrix4(f),p++}else if(S.isHemisphereLight){const R=i.hemi[m];R.direction.setFromMatrixPosition(S.matrixWorld),R.direction.transformDirection(f),m++}}}return{setup:c,setupView:l,state:i}}function bc(s,e){const t=new Ym(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function a(h){n.push(h)}function o(h){i.push(h)}function c(h){t.setup(n,h)}function l(h){t.setupView(n,h)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function qm(s,e){let t=new WeakMap;function n(r,a=0){const o=t.get(r);let c;return o===void 0?(c=new bc(s,e),t.set(r,[c])):a>=o.length?(c=new bc(s,e),o.push(c)):c=o[a],c}function i(){t=new WeakMap}return{get:n,dispose:i}}class pu extends $t{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Hl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class mu extends $t{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const $m=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Km=`uniform sampler2D shadow_pass;
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
}`;function Jm(s,e,t){let n=new rr;const i=new He,r=new He,a=new $e,o=new pu({depthPacking:Vl}),c=new mu,l={},u=t.maxTextureSize,h={[xt]:Pt,[Pt]:xt,[Yt]:Yt},d=new Dt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new He},radius:{value:4}},vertexShader:$m,fragmentShader:Km}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new Qt;g.setAttribute("position",new Et(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Bt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xo;let f=this.type;this.render=function(A,y,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const x=s.getRenderTarget(),T=s.getActiveCubeFace(),D=s.getActiveMipmapLevel(),B=s.state;B.setBlending(vn),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const Z=f!==nn&&this.type===nn,P=f===nn&&this.type!==nn;for(let U=0,H=A.length;U<H;U++){const X=A[U],W=X.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;i.copy(W.mapSize);const j=W.getFrameExtents();if(i.multiply(j),r.copy(W.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/j.x),i.x=r.x*j.x,W.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/j.y),i.y=r.y*j.y,W.mapSize.y=r.y)),W.map===null||Z===!0||P===!0){const ee=this.type!==nn?{minFilter:lt,magFilter:lt}:{};W.map!==null&&W.map.dispose(),W.map=new On(i.x,i.y,ee),W.map.texture.name=X.name+".shadowMap",W.camera.updateProjectionMatrix()}s.setRenderTarget(W.map),s.clear();const Y=W.getViewportCount();for(let ee=0;ee<Y;ee++){const ce=W.getViewport(ee);a.set(r.x*ce.x,r.y*ce.y,r.x*ce.z,r.y*ce.w),B.viewport(a),W.updateMatrices(X,ee),n=W.getFrustum(),S(y,C,W.camera,X,this.type)}W.isPointLightShadow!==!0&&this.type===nn&&b(W,C),W.needsUpdate=!1}f=this.type,m.needsUpdate=!1,s.setRenderTarget(x,T,D)};function b(A,y){const C=e.update(_);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new On(i.x,i.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(y,null,C,d,_,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(y,null,C,p,_,null)}function v(A,y,C,x){let T=null;const D=C.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(D!==void 0)T=D;else if(T=C.isPointLight===!0?c:o,s.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0){const B=T.uuid,Z=y.uuid;let P=l[B];P===void 0&&(P={},l[B]=P);let U=P[Z];U===void 0&&(U=T.clone(),P[Z]=U,y.addEventListener("dispose",R)),T=U}if(T.visible=y.visible,T.wireframe=y.wireframe,x===nn?T.side=y.shadowSide!==null?y.shadowSide:y.side:T.side=y.shadowSide!==null?y.shadowSide:h[y.side],T.alphaMap=y.alphaMap,T.alphaTest=y.alphaTest,T.map=y.map,T.clipShadows=y.clipShadows,T.clippingPlanes=y.clippingPlanes,T.clipIntersection=y.clipIntersection,T.displacementMap=y.displacementMap,T.displacementScale=y.displacementScale,T.displacementBias=y.displacementBias,T.wireframeLinewidth=y.wireframeLinewidth,T.linewidth=y.linewidth,C.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const B=s.properties.get(T);B.light=C}return T}function S(A,y,C,x,T){if(A.visible===!1)return;if(A.layers.test(y.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&T===nn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,A.matrixWorld);const Z=e.update(A),P=A.material;if(Array.isArray(P)){const U=Z.groups;for(let H=0,X=U.length;H<X;H++){const W=U[H],j=P[W.materialIndex];if(j&&j.visible){const Y=v(A,j,x,T);A.onBeforeShadow(s,A,y,C,Z,Y,W),s.renderBufferDirect(C,null,Z,Y,A,W),A.onAfterShadow(s,A,y,C,Z,Y,W)}}}else if(P.visible){const U=v(A,P,x,T);A.onBeforeShadow(s,A,y,C,Z,U,null),s.renderBufferDirect(C,null,Z,U,A,null),A.onAfterShadow(s,A,y,C,Z,U,null)}}const B=A.children;for(let Z=0,P=B.length;Z<P;Z++)S(B[Z],y,C,x,T)}function R(A){A.target.removeEventListener("dispose",R);for(const C in l){const x=l[C],T=A.target.uuid;T in x&&(x[T].dispose(),delete x[T])}}}function Qm(s,e,t){const n=t.isWebGL2;function i(){let L=!1;const ie=new $e;let se=null;const Me=new $e(0,0,0,0);return{setMask:function(ve){se!==ve&&!L&&(s.colorMask(ve,ve,ve,ve),se=ve)},setLocked:function(ve){L=ve},setClear:function(ve,Ke,Je,mt,wt){wt===!0&&(ve*=mt,Ke*=mt,Je*=mt),ie.set(ve,Ke,Je,mt),Me.equals(ie)===!1&&(s.clearColor(ve,Ke,Je,mt),Me.copy(ie))},reset:function(){L=!1,se=null,Me.set(-1,0,0,0)}}}function r(){let L=!1,ie=null,se=null,Me=null;return{setTest:function(ve){ve?Pe(s.DEPTH_TEST):Se(s.DEPTH_TEST)},setMask:function(ve){ie!==ve&&!L&&(s.depthMask(ve),ie=ve)},setFunc:function(ve){if(se!==ve){switch(ve){case _l:s.depthFunc(s.NEVER);break;case vl:s.depthFunc(s.ALWAYS);break;case xl:s.depthFunc(s.LESS);break;case qi:s.depthFunc(s.LEQUAL);break;case bl:s.depthFunc(s.EQUAL);break;case Sl:s.depthFunc(s.GEQUAL);break;case Ml:s.depthFunc(s.GREATER);break;case yl:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}se=ve}},setLocked:function(ve){L=ve},setClear:function(ve){Me!==ve&&(s.clearDepth(ve),Me=ve)},reset:function(){L=!1,ie=null,se=null,Me=null}}}function a(){let L=!1,ie=null,se=null,Me=null,ve=null,Ke=null,Je=null,mt=null,wt=null;return{setTest:function(Qe){L||(Qe?Pe(s.STENCIL_TEST):Se(s.STENCIL_TEST))},setMask:function(Qe){ie!==Qe&&!L&&(s.stencilMask(Qe),ie=Qe)},setFunc:function(Qe,Rt,tn){(se!==Qe||Me!==Rt||ve!==tn)&&(s.stencilFunc(Qe,Rt,tn),se=Qe,Me=Rt,ve=tn)},setOp:function(Qe,Rt,tn){(Ke!==Qe||Je!==Rt||mt!==tn)&&(s.stencilOp(Qe,Rt,tn),Ke=Qe,Je=Rt,mt=tn)},setLocked:function(Qe){L=Qe},setClear:function(Qe){wt!==Qe&&(s.clearStencil(Qe),wt=Qe)},reset:function(){L=!1,ie=null,se=null,Me=null,ve=null,Ke=null,Je=null,mt=null,wt=null}}}const o=new i,c=new r,l=new a,u=new WeakMap,h=new WeakMap;let d={},p={},g=new WeakMap,_=[],m=null,f=!1,b=null,v=null,S=null,R=null,A=null,y=null,C=null,x=new Te(0,0,0),T=0,D=!1,B=null,Z=null,P=null,U=null,H=null;const X=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,j=0;const Y=s.getParameter(s.VERSION);Y.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(Y)[1]),W=j>=1):Y.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),W=j>=2);let ee=null,ce={};const V=s.getParameter(s.SCISSOR_BOX),q=s.getParameter(s.VIEWPORT),oe=new $e().fromArray(V),me=new $e().fromArray(q);function pe(L,ie,se,Me){const ve=new Uint8Array(4),Ke=s.createTexture();s.bindTexture(L,Ke),s.texParameteri(L,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(L,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Je=0;Je<se;Je++)n&&(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)?s.texImage3D(ie,0,s.RGBA,1,1,Me,0,s.RGBA,s.UNSIGNED_BYTE,ve):s.texImage2D(ie+Je,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ve);return Ke}const Re={};Re[s.TEXTURE_2D]=pe(s.TEXTURE_2D,s.TEXTURE_2D,1),Re[s.TEXTURE_CUBE_MAP]=pe(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Re[s.TEXTURE_2D_ARRAY]=pe(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Re[s.TEXTURE_3D]=pe(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Pe(s.DEPTH_TEST),c.setFunc(qi),De(!1),w(Jr),Pe(s.CULL_FACE),he(vn);function Pe(L){d[L]!==!0&&(s.enable(L),d[L]=!0)}function Se(L){d[L]!==!1&&(s.disable(L),d[L]=!1)}function Ve(L,ie){return p[L]!==ie?(s.bindFramebuffer(L,ie),p[L]=ie,n&&(L===s.DRAW_FRAMEBUFFER&&(p[s.FRAMEBUFFER]=ie),L===s.FRAMEBUFFER&&(p[s.DRAW_FRAMEBUFFER]=ie)),!0):!1}function O(L,ie){let se=_,Me=!1;if(L)if(se=g.get(ie),se===void 0&&(se=[],g.set(ie,se)),L.isWebGLMultipleRenderTargets){const ve=L.texture;if(se.length!==ve.length||se[0]!==s.COLOR_ATTACHMENT0){for(let Ke=0,Je=ve.length;Ke<Je;Ke++)se[Ke]=s.COLOR_ATTACHMENT0+Ke;se.length=ve.length,Me=!0}}else se[0]!==s.COLOR_ATTACHMENT0&&(se[0]=s.COLOR_ATTACHMENT0,Me=!0);else se[0]!==s.BACK&&(se[0]=s.BACK,Me=!0);Me&&(t.isWebGL2?s.drawBuffers(se):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(se))}function At(L){return m!==L?(s.useProgram(L),m=L,!0):!1}const _e={[Pn]:s.FUNC_ADD,[nl]:s.FUNC_SUBTRACT,[il]:s.FUNC_REVERSE_SUBTRACT};if(n)_e[no]=s.MIN,_e[io]=s.MAX;else{const L=e.get("EXT_blend_minmax");L!==null&&(_e[no]=L.MIN_EXT,_e[io]=L.MAX_EXT)}const Ae={[sl]:s.ZERO,[rl]:s.ONE,[ol]:s.SRC_COLOR,[Xs]:s.SRC_ALPHA,[dl]:s.SRC_ALPHA_SATURATE,[ul]:s.DST_COLOR,[cl]:s.DST_ALPHA,[al]:s.ONE_MINUS_SRC_COLOR,[Zs]:s.ONE_MINUS_SRC_ALPHA,[hl]:s.ONE_MINUS_DST_COLOR,[ll]:s.ONE_MINUS_DST_ALPHA,[fl]:s.CONSTANT_COLOR,[pl]:s.ONE_MINUS_CONSTANT_COLOR,[ml]:s.CONSTANT_ALPHA,[gl]:s.ONE_MINUS_CONSTANT_ALPHA};function he(L,ie,se,Me,ve,Ke,Je,mt,wt,Qe){if(L===vn){f===!0&&(Se(s.BLEND),f=!1);return}if(f===!1&&(Pe(s.BLEND),f=!0),L!==tl){if(L!==b||Qe!==D){if((v!==Pn||A!==Pn)&&(s.blendEquation(s.FUNC_ADD),v=Pn,A=Pn),Qe)switch(L){case qn:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Qr:s.blendFunc(s.ONE,s.ONE);break;case eo:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case to:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case qn:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Qr:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case eo:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case to:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}S=null,R=null,y=null,C=null,x.set(0,0,0),T=0,b=L,D=Qe}return}ve=ve||ie,Ke=Ke||se,Je=Je||Me,(ie!==v||ve!==A)&&(s.blendEquationSeparate(_e[ie],_e[ve]),v=ie,A=ve),(se!==S||Me!==R||Ke!==y||Je!==C)&&(s.blendFuncSeparate(Ae[se],Ae[Me],Ae[Ke],Ae[Je]),S=se,R=Me,y=Ke,C=Je),(mt.equals(x)===!1||wt!==T)&&(s.blendColor(mt.r,mt.g,mt.b,wt),x.copy(mt),T=wt),b=L,D=!1}function nt(L,ie){L.side===Yt?Se(s.CULL_FACE):Pe(s.CULL_FACE);let se=L.side===Pt;ie&&(se=!se),De(se),L.blending===qn&&L.transparent===!1?he(vn):he(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),c.setFunc(L.depthFunc),c.setTest(L.depthTest),c.setMask(L.depthWrite),o.setMask(L.colorWrite);const Me=L.stencilWrite;l.setTest(Me),Me&&(l.setMask(L.stencilWriteMask),l.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),l.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),k(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Pe(s.SAMPLE_ALPHA_TO_COVERAGE):Se(s.SAMPLE_ALPHA_TO_COVERAGE)}function De(L){B!==L&&(L?s.frontFace(s.CW):s.frontFace(s.CCW),B=L)}function w(L){L!==Jc?(Pe(s.CULL_FACE),L!==Z&&(L===Jr?s.cullFace(s.BACK):L===Qc?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Se(s.CULL_FACE),Z=L}function M(L){L!==P&&(W&&s.lineWidth(L),P=L)}function k(L,ie,se){L?(Pe(s.POLYGON_OFFSET_FILL),(U!==ie||H!==se)&&(s.polygonOffset(ie,se),U=ie,H=se)):Se(s.POLYGON_OFFSET_FILL)}function J(L){L?Pe(s.SCISSOR_TEST):Se(s.SCISSOR_TEST)}function K(L){L===void 0&&(L=s.TEXTURE0+X-1),ee!==L&&(s.activeTexture(L),ee=L)}function Q(L,ie,se){se===void 0&&(ee===null?se=s.TEXTURE0+X-1:se=ee);let Me=ce[se];Me===void 0&&(Me={type:void 0,texture:void 0},ce[se]=Me),(Me.type!==L||Me.texture!==ie)&&(ee!==se&&(s.activeTexture(se),ee=se),s.bindTexture(L,ie||Re[L]),Me.type=L,Me.texture=ie)}function de(){const L=ce[ee];L!==void 0&&L.type!==void 0&&(s.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function re(){try{s.compressedTexImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function le(){try{s.compressedTexImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function be(){try{s.texSubImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ue(){try{s.texSubImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function $(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ze(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ze(){try{s.texStorage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ee(){try{s.texStorage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ge(){try{s.texImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ue(){try{s.texImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ie(L){oe.equals(L)===!1&&(s.scissor(L.x,L.y,L.z,L.w),oe.copy(L))}function Xe(L){me.equals(L)===!1&&(s.viewport(L.x,L.y,L.z,L.w),me.copy(L))}function rt(L,ie){let se=h.get(ie);se===void 0&&(se=new WeakMap,h.set(ie,se));let Me=se.get(L);Me===void 0&&(Me=s.getUniformBlockIndex(ie,L.name),se.set(L,Me))}function Be(L,ie){const Me=h.get(ie).get(L);u.get(ie)!==Me&&(s.uniformBlockBinding(ie,Me,L.__bindingPointIndex),u.set(ie,Me))}function ne(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),d={},ee=null,ce={},p={},g=new WeakMap,_=[],m=null,f=!1,b=null,v=null,S=null,R=null,A=null,y=null,C=null,x=new Te(0,0,0),T=0,D=!1,B=null,Z=null,P=null,U=null,H=null,oe.set(0,0,s.canvas.width,s.canvas.height),me.set(0,0,s.canvas.width,s.canvas.height),o.reset(),c.reset(),l.reset()}return{buffers:{color:o,depth:c,stencil:l},enable:Pe,disable:Se,bindFramebuffer:Ve,drawBuffers:O,useProgram:At,setBlending:he,setMaterial:nt,setFlipSided:De,setCullFace:w,setLineWidth:M,setPolygonOffset:k,setScissorTest:J,activeTexture:K,bindTexture:Q,unbindTexture:de,compressedTexImage2D:re,compressedTexImage3D:le,texImage2D:ge,texImage3D:ue,updateUBOMapping:rt,uniformBlockBinding:Be,texStorage2D:ze,texStorage3D:Ee,texSubImage2D:be,texSubImage3D:Ue,compressedTexSubImage2D:$,compressedTexSubImage3D:Ze,scissor:Ie,viewport:Xe,reset:ne}}function eg(s,e,t,n,i,r,a){const o=i.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let h;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,M){return p?new OffscreenCanvas(w,M):ts("canvas")}function _(w,M,k,J){let K=1;if((w.width>J||w.height>J)&&(K=J/Math.max(w.width,w.height)),K<1||M===!0)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap){const Q=M?er:Math.floor,de=Q(K*w.width),re=Q(K*w.height);h===void 0&&(h=g(de,re));const le=k?g(de,re):h;return le.width=de,le.height=re,le.getContext("2d").drawImage(w,0,0,de,re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+de+"x"+re+")."),le}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),w;return w}function m(w){return Oo(w.width)&&Oo(w.height)}function f(w){return o?!1:w.wrapS!==vt||w.wrapT!==vt||w.minFilter!==lt&&w.minFilter!==ut}function b(w,M){return w.generateMipmaps&&M&&w.minFilter!==lt&&w.minFilter!==ut}function v(w){s.generateMipmap(w)}function S(w,M,k,J,K=!1){if(o===!1)return M;if(w!==null){if(s[w]!==void 0)return s[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let Q=M;if(M===s.RED&&(k===s.FLOAT&&(Q=s.R32F),k===s.HALF_FLOAT&&(Q=s.R16F),k===s.UNSIGNED_BYTE&&(Q=s.R8)),M===s.RED_INTEGER&&(k===s.UNSIGNED_BYTE&&(Q=s.R8UI),k===s.UNSIGNED_SHORT&&(Q=s.R16UI),k===s.UNSIGNED_INT&&(Q=s.R32UI),k===s.BYTE&&(Q=s.R8I),k===s.SHORT&&(Q=s.R16I),k===s.INT&&(Q=s.R32I)),M===s.RG&&(k===s.FLOAT&&(Q=s.RG32F),k===s.HALF_FLOAT&&(Q=s.RG16F),k===s.UNSIGNED_BYTE&&(Q=s.RG8)),M===s.RGBA){const de=K?Ki:We.getTransfer(J);k===s.FLOAT&&(Q=s.RGBA32F),k===s.HALF_FLOAT&&(Q=s.RGBA16F),k===s.UNSIGNED_BYTE&&(Q=de===et?s.SRGB8_ALPHA8:s.RGBA8),k===s.UNSIGNED_SHORT_4_4_4_4&&(Q=s.RGBA4),k===s.UNSIGNED_SHORT_5_5_5_1&&(Q=s.RGB5_A1)}return(Q===s.R16F||Q===s.R32F||Q===s.RG16F||Q===s.RG32F||Q===s.RGBA16F||Q===s.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function R(w,M,k){return b(w,k)===!0||w.isFramebufferTexture&&w.minFilter!==lt&&w.minFilter!==ut?Math.log2(Math.max(M.width,M.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?M.mipmaps.length:1}function A(w){return w===lt||w===$s||w===ji?s.NEAREST:s.LINEAR}function y(w){const M=w.target;M.removeEventListener("dispose",y),x(M),M.isVideoTexture&&u.delete(M)}function C(w){const M=w.target;M.removeEventListener("dispose",C),D(M)}function x(w){const M=n.get(w);if(M.__webglInit===void 0)return;const k=w.source,J=d.get(k);if(J){const K=J[M.__cacheKey];K.usedTimes--,K.usedTimes===0&&T(w),Object.keys(J).length===0&&d.delete(k)}n.remove(w)}function T(w){const M=n.get(w);s.deleteTexture(M.__webglTexture);const k=w.source,J=d.get(k);delete J[M.__cacheKey],a.memory.textures--}function D(w){const M=w.texture,k=n.get(w),J=n.get(M);if(J.__webglTexture!==void 0&&(s.deleteTexture(J.__webglTexture),a.memory.textures--),w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(k.__webglFramebuffer[K]))for(let Q=0;Q<k.__webglFramebuffer[K].length;Q++)s.deleteFramebuffer(k.__webglFramebuffer[K][Q]);else s.deleteFramebuffer(k.__webglFramebuffer[K]);k.__webglDepthbuffer&&s.deleteRenderbuffer(k.__webglDepthbuffer[K])}else{if(Array.isArray(k.__webglFramebuffer))for(let K=0;K<k.__webglFramebuffer.length;K++)s.deleteFramebuffer(k.__webglFramebuffer[K]);else s.deleteFramebuffer(k.__webglFramebuffer);if(k.__webglDepthbuffer&&s.deleteRenderbuffer(k.__webglDepthbuffer),k.__webglMultisampledFramebuffer&&s.deleteFramebuffer(k.__webglMultisampledFramebuffer),k.__webglColorRenderbuffer)for(let K=0;K<k.__webglColorRenderbuffer.length;K++)k.__webglColorRenderbuffer[K]&&s.deleteRenderbuffer(k.__webglColorRenderbuffer[K]);k.__webglDepthRenderbuffer&&s.deleteRenderbuffer(k.__webglDepthRenderbuffer)}if(w.isWebGLMultipleRenderTargets)for(let K=0,Q=M.length;K<Q;K++){const de=n.get(M[K]);de.__webglTexture&&(s.deleteTexture(de.__webglTexture),a.memory.textures--),n.remove(M[K])}n.remove(M),n.remove(w)}let B=0;function Z(){B=0}function P(){const w=B;return w>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+i.maxTextures),B+=1,w}function U(w){const M=[];return M.push(w.wrapS),M.push(w.wrapT),M.push(w.wrapR||0),M.push(w.magFilter),M.push(w.minFilter),M.push(w.anisotropy),M.push(w.internalFormat),M.push(w.format),M.push(w.type),M.push(w.generateMipmaps),M.push(w.premultiplyAlpha),M.push(w.flipY),M.push(w.unpackAlignment),M.push(w.colorSpace),M.join()}function H(w,M){const k=n.get(w);if(w.isVideoTexture&&nt(w),w.isRenderTargetTexture===!1&&w.version>0&&k.__version!==w.version){const J=w.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{oe(k,w,M);return}}t.bindTexture(s.TEXTURE_2D,k.__webglTexture,s.TEXTURE0+M)}function X(w,M){const k=n.get(w);if(w.version>0&&k.__version!==w.version){oe(k,w,M);return}t.bindTexture(s.TEXTURE_2D_ARRAY,k.__webglTexture,s.TEXTURE0+M)}function W(w,M){const k=n.get(w);if(w.version>0&&k.__version!==w.version){oe(k,w,M);return}t.bindTexture(s.TEXTURE_3D,k.__webglTexture,s.TEXTURE0+M)}function j(w,M){const k=n.get(w);if(w.version>0&&k.__version!==w.version){me(k,w,M);return}t.bindTexture(s.TEXTURE_CUBE_MAP,k.__webglTexture,s.TEXTURE0+M)}const Y={[Jn]:s.REPEAT,[vt]:s.CLAMP_TO_EDGE,[$i]:s.MIRRORED_REPEAT},ee={[lt]:s.NEAREST,[$s]:s.NEAREST_MIPMAP_NEAREST,[ji]:s.NEAREST_MIPMAP_LINEAR,[ut]:s.LINEAR,[$o]:s.LINEAR_MIPMAP_NEAREST,[Nn]:s.LINEAR_MIPMAP_LINEAR},ce={[jl]:s.NEVER,[Kl]:s.ALWAYS,[Xl]:s.LESS,[aa]:s.LEQUAL,[Zl]:s.EQUAL,[$l]:s.GEQUAL,[Yl]:s.GREATER,[ql]:s.NOTEQUAL};function V(w,M,k){if(k?(s.texParameteri(w,s.TEXTURE_WRAP_S,Y[M.wrapS]),s.texParameteri(w,s.TEXTURE_WRAP_T,Y[M.wrapT]),(w===s.TEXTURE_3D||w===s.TEXTURE_2D_ARRAY)&&s.texParameteri(w,s.TEXTURE_WRAP_R,Y[M.wrapR]),s.texParameteri(w,s.TEXTURE_MAG_FILTER,ee[M.magFilter]),s.texParameteri(w,s.TEXTURE_MIN_FILTER,ee[M.minFilter])):(s.texParameteri(w,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(w,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(w===s.TEXTURE_3D||w===s.TEXTURE_2D_ARRAY)&&s.texParameteri(w,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(M.wrapS!==vt||M.wrapT!==vt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(w,s.TEXTURE_MAG_FILTER,A(M.magFilter)),s.texParameteri(w,s.TEXTURE_MIN_FILTER,A(M.minFilter)),M.minFilter!==lt&&M.minFilter!==ut&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(s.texParameteri(w,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(w,s.TEXTURE_COMPARE_FUNC,ce[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const J=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===lt||M.minFilter!==ji&&M.minFilter!==Nn||M.type===rn&&e.has("OES_texture_float_linear")===!1||o===!1&&M.type===Ri&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||n.get(M).__currentAnisotropy)&&(s.texParameterf(w,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy)}}function q(w,M){let k=!1;w.__webglInit===void 0&&(w.__webglInit=!0,M.addEventListener("dispose",y));const J=M.source;let K=d.get(J);K===void 0&&(K={},d.set(J,K));const Q=U(M);if(Q!==w.__cacheKey){K[Q]===void 0&&(K[Q]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,k=!0),K[Q].usedTimes++;const de=K[w.__cacheKey];de!==void 0&&(K[w.__cacheKey].usedTimes--,de.usedTimes===0&&T(M)),w.__cacheKey=Q,w.__webglTexture=K[Q].texture}return k}function oe(w,M,k){let J=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(J=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&(J=s.TEXTURE_3D);const K=q(w,M),Q=M.source;t.bindTexture(J,w.__webglTexture,s.TEXTURE0+k);const de=n.get(Q);if(Q.version!==de.__version||K===!0){t.activeTexture(s.TEXTURE0+k);const re=We.getPrimaries(We.workingColorSpace),le=M.colorSpace===Ft?null:We.getPrimaries(M.colorSpace),be=M.colorSpace===Ft||re===le?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);const Ue=f(M)&&m(M.image)===!1;let $=_(M.image,Ue,!1,i.maxTextureSize);$=De(M,$);const Ze=m($)||o,ze=r.convert(M.format,M.colorSpace);let Ee=r.convert(M.type),ge=S(M.internalFormat,ze,Ee,M.colorSpace,M.isVideoTexture);V(J,M,Ze);let ue;const Ie=M.mipmaps,Xe=o&&M.isVideoTexture!==!0&&ge!==ia,rt=de.__version===void 0||K===!0,Be=R(M,$,Ze);if(M.isDepthTexture)ge=s.DEPTH_COMPONENT,o?M.type===rn?ge=s.DEPTH_COMPONENT32F:M.type===mn?ge=s.DEPTH_COMPONENT24:M.type===Dn?ge=s.DEPTH24_STENCIL8:ge=s.DEPTH_COMPONENT16:M.type===rn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===Un&&ge===s.DEPTH_COMPONENT&&M.type!==ir&&M.type!==mn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=mn,Ee=r.convert(M.type)),M.format===Qn&&ge===s.DEPTH_COMPONENT&&(ge=s.DEPTH_STENCIL,M.type!==Dn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=Dn,Ee=r.convert(M.type))),rt&&(Xe?t.texStorage2D(s.TEXTURE_2D,1,ge,$.width,$.height):t.texImage2D(s.TEXTURE_2D,0,ge,$.width,$.height,0,ze,Ee,null));else if(M.isDataTexture)if(Ie.length>0&&Ze){Xe&&rt&&t.texStorage2D(s.TEXTURE_2D,Be,ge,Ie[0].width,Ie[0].height);for(let ne=0,L=Ie.length;ne<L;ne++)ue=Ie[ne],Xe?t.texSubImage2D(s.TEXTURE_2D,ne,0,0,ue.width,ue.height,ze,Ee,ue.data):t.texImage2D(s.TEXTURE_2D,ne,ge,ue.width,ue.height,0,ze,Ee,ue.data);M.generateMipmaps=!1}else Xe?(rt&&t.texStorage2D(s.TEXTURE_2D,Be,ge,$.width,$.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,$.width,$.height,ze,Ee,$.data)):t.texImage2D(s.TEXTURE_2D,0,ge,$.width,$.height,0,ze,Ee,$.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Xe&&rt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Be,ge,Ie[0].width,Ie[0].height,$.depth);for(let ne=0,L=Ie.length;ne<L;ne++)ue=Ie[ne],M.format!==It?ze!==null?Xe?t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ne,0,0,0,ue.width,ue.height,$.depth,ze,ue.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ne,ge,ue.width,ue.height,$.depth,0,ue.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xe?t.texSubImage3D(s.TEXTURE_2D_ARRAY,ne,0,0,0,ue.width,ue.height,$.depth,ze,Ee,ue.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ne,ge,ue.width,ue.height,$.depth,0,ze,Ee,ue.data)}else{Xe&&rt&&t.texStorage2D(s.TEXTURE_2D,Be,ge,Ie[0].width,Ie[0].height);for(let ne=0,L=Ie.length;ne<L;ne++)ue=Ie[ne],M.format!==It?ze!==null?Xe?t.compressedTexSubImage2D(s.TEXTURE_2D,ne,0,0,ue.width,ue.height,ze,ue.data):t.compressedTexImage2D(s.TEXTURE_2D,ne,ge,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xe?t.texSubImage2D(s.TEXTURE_2D,ne,0,0,ue.width,ue.height,ze,Ee,ue.data):t.texImage2D(s.TEXTURE_2D,ne,ge,ue.width,ue.height,0,ze,Ee,ue.data)}else if(M.isDataArrayTexture)Xe?(rt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Be,ge,$.width,$.height,$.depth),t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,ze,Ee,$.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,ge,$.width,$.height,$.depth,0,ze,Ee,$.data);else if(M.isData3DTexture)Xe?(rt&&t.texStorage3D(s.TEXTURE_3D,Be,ge,$.width,$.height,$.depth),t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,ze,Ee,$.data)):t.texImage3D(s.TEXTURE_3D,0,ge,$.width,$.height,$.depth,0,ze,Ee,$.data);else if(M.isFramebufferTexture){if(rt)if(Xe)t.texStorage2D(s.TEXTURE_2D,Be,ge,$.width,$.height);else{let ne=$.width,L=$.height;for(let ie=0;ie<Be;ie++)t.texImage2D(s.TEXTURE_2D,ie,ge,ne,L,0,ze,Ee,null),ne>>=1,L>>=1}}else if(Ie.length>0&&Ze){Xe&&rt&&t.texStorage2D(s.TEXTURE_2D,Be,ge,Ie[0].width,Ie[0].height);for(let ne=0,L=Ie.length;ne<L;ne++)ue=Ie[ne],Xe?t.texSubImage2D(s.TEXTURE_2D,ne,0,0,ze,Ee,ue):t.texImage2D(s.TEXTURE_2D,ne,ge,ze,Ee,ue);M.generateMipmaps=!1}else Xe?(rt&&t.texStorage2D(s.TEXTURE_2D,Be,ge,$.width,$.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,ze,Ee,$)):t.texImage2D(s.TEXTURE_2D,0,ge,ze,Ee,$);b(M,Ze)&&v(J),de.__version=Q.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function me(w,M,k){if(M.image.length!==6)return;const J=q(w,M),K=M.source;t.bindTexture(s.TEXTURE_CUBE_MAP,w.__webglTexture,s.TEXTURE0+k);const Q=n.get(K);if(K.version!==Q.__version||J===!0){t.activeTexture(s.TEXTURE0+k);const de=We.getPrimaries(We.workingColorSpace),re=M.colorSpace===Ft?null:We.getPrimaries(M.colorSpace),le=M.colorSpace===Ft||de===re?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,le);const be=M.isCompressedTexture||M.image[0].isCompressedTexture,Ue=M.image[0]&&M.image[0].isDataTexture,$=[];for(let ne=0;ne<6;ne++)!be&&!Ue?$[ne]=_(M.image[ne],!1,!0,i.maxCubemapSize):$[ne]=Ue?M.image[ne].image:M.image[ne],$[ne]=De(M,$[ne]);const Ze=$[0],ze=m(Ze)||o,Ee=r.convert(M.format,M.colorSpace),ge=r.convert(M.type),ue=S(M.internalFormat,Ee,ge,M.colorSpace),Ie=o&&M.isVideoTexture!==!0,Xe=Q.__version===void 0||J===!0;let rt=R(M,Ze,ze);V(s.TEXTURE_CUBE_MAP,M,ze);let Be;if(be){Ie&&Xe&&t.texStorage2D(s.TEXTURE_CUBE_MAP,rt,ue,Ze.width,Ze.height);for(let ne=0;ne<6;ne++){Be=$[ne].mipmaps;for(let L=0;L<Be.length;L++){const ie=Be[L];M.format!==It?Ee!==null?Ie?t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,L,0,0,ie.width,ie.height,Ee,ie.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,L,ue,ie.width,ie.height,0,ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ie?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,L,0,0,ie.width,ie.height,Ee,ge,ie.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,L,ue,ie.width,ie.height,0,Ee,ge,ie.data)}}}else{Be=M.mipmaps,Ie&&Xe&&(Be.length>0&&rt++,t.texStorage2D(s.TEXTURE_CUBE_MAP,rt,ue,$[0].width,$[0].height));for(let ne=0;ne<6;ne++)if(Ue){Ie?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,$[ne].width,$[ne].height,Ee,ge,$[ne].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,ue,$[ne].width,$[ne].height,0,Ee,ge,$[ne].data);for(let L=0;L<Be.length;L++){const se=Be[L].image[ne].image;Ie?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,L+1,0,0,se.width,se.height,Ee,ge,se.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,L+1,ue,se.width,se.height,0,Ee,ge,se.data)}}else{Ie?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Ee,ge,$[ne]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,ue,Ee,ge,$[ne]);for(let L=0;L<Be.length;L++){const ie=Be[L];Ie?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,L+1,0,0,Ee,ge,ie.image[ne]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,L+1,ue,Ee,ge,ie.image[ne])}}}b(M,ze)&&v(s.TEXTURE_CUBE_MAP),Q.__version=K.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function pe(w,M,k,J,K,Q){const de=r.convert(k.format,k.colorSpace),re=r.convert(k.type),le=S(k.internalFormat,de,re,k.colorSpace);if(!n.get(M).__hasExternalTextures){const Ue=Math.max(1,M.width>>Q),$=Math.max(1,M.height>>Q);K===s.TEXTURE_3D||K===s.TEXTURE_2D_ARRAY?t.texImage3D(K,Q,le,Ue,$,M.depth,0,de,re,null):t.texImage2D(K,Q,le,Ue,$,0,de,re,null)}t.bindFramebuffer(s.FRAMEBUFFER,w),he(M)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,J,K,n.get(k).__webglTexture,0,Ae(M)):(K===s.TEXTURE_2D||K>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,J,K,n.get(k).__webglTexture,Q),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Re(w,M,k){if(s.bindRenderbuffer(s.RENDERBUFFER,w),M.depthBuffer&&!M.stencilBuffer){let J=o===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(k||he(M)){const K=M.depthTexture;K&&K.isDepthTexture&&(K.type===rn?J=s.DEPTH_COMPONENT32F:K.type===mn&&(J=s.DEPTH_COMPONENT24));const Q=Ae(M);he(M)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Q,J,M.width,M.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,Q,J,M.width,M.height)}else s.renderbufferStorage(s.RENDERBUFFER,J,M.width,M.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,w)}else if(M.depthBuffer&&M.stencilBuffer){const J=Ae(M);k&&he(M)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,J,s.DEPTH24_STENCIL8,M.width,M.height):he(M)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,J,s.DEPTH24_STENCIL8,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,w)}else{const J=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let K=0;K<J.length;K++){const Q=J[K],de=r.convert(Q.format,Q.colorSpace),re=r.convert(Q.type),le=S(Q.internalFormat,de,re,Q.colorSpace),be=Ae(M);k&&he(M)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,be,le,M.width,M.height):he(M)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,be,le,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,le,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Pe(w,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,w),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),H(M.depthTexture,0);const J=n.get(M.depthTexture).__webglTexture,K=Ae(M);if(M.depthTexture.format===Un)he(M)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,J,0,K):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,J,0);else if(M.depthTexture.format===Qn)he(M)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,J,0,K):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Se(w){const M=n.get(w),k=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!M.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");Pe(M.__webglFramebuffer,w)}else if(k){M.__webglDepthbuffer=[];for(let J=0;J<6;J++)t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[J]),M.__webglDepthbuffer[J]=s.createRenderbuffer(),Re(M.__webglDepthbuffer[J],w,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=s.createRenderbuffer(),Re(M.__webglDepthbuffer,w,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ve(w,M,k){const J=n.get(w);M!==void 0&&pe(J.__webglFramebuffer,w,w.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),k!==void 0&&Se(w)}function O(w){const M=w.texture,k=n.get(w),J=n.get(M);w.addEventListener("dispose",C),w.isWebGLMultipleRenderTargets!==!0&&(J.__webglTexture===void 0&&(J.__webglTexture=s.createTexture()),J.__version=M.version,a.memory.textures++);const K=w.isWebGLCubeRenderTarget===!0,Q=w.isWebGLMultipleRenderTargets===!0,de=m(w)||o;if(K){k.__webglFramebuffer=[];for(let re=0;re<6;re++)if(o&&M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer[re]=[];for(let le=0;le<M.mipmaps.length;le++)k.__webglFramebuffer[re][le]=s.createFramebuffer()}else k.__webglFramebuffer[re]=s.createFramebuffer()}else{if(o&&M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer=[];for(let re=0;re<M.mipmaps.length;re++)k.__webglFramebuffer[re]=s.createFramebuffer()}else k.__webglFramebuffer=s.createFramebuffer();if(Q)if(i.drawBuffers){const re=w.texture;for(let le=0,be=re.length;le<be;le++){const Ue=n.get(re[le]);Ue.__webglTexture===void 0&&(Ue.__webglTexture=s.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&w.samples>0&&he(w)===!1){const re=Q?M:[M];k.__webglMultisampledFramebuffer=s.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let le=0;le<re.length;le++){const be=re[le];k.__webglColorRenderbuffer[le]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,k.__webglColorRenderbuffer[le]);const Ue=r.convert(be.format,be.colorSpace),$=r.convert(be.type),Ze=S(be.internalFormat,Ue,$,be.colorSpace,w.isXRRenderTarget===!0),ze=Ae(w);s.renderbufferStorageMultisample(s.RENDERBUFFER,ze,Ze,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+le,s.RENDERBUFFER,k.__webglColorRenderbuffer[le])}s.bindRenderbuffer(s.RENDERBUFFER,null),w.depthBuffer&&(k.__webglDepthRenderbuffer=s.createRenderbuffer(),Re(k.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(K){t.bindTexture(s.TEXTURE_CUBE_MAP,J.__webglTexture),V(s.TEXTURE_CUBE_MAP,M,de);for(let re=0;re<6;re++)if(o&&M.mipmaps&&M.mipmaps.length>0)for(let le=0;le<M.mipmaps.length;le++)pe(k.__webglFramebuffer[re][le],w,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+re,le);else pe(k.__webglFramebuffer[re],w,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);b(M,de)&&v(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Q){const re=w.texture;for(let le=0,be=re.length;le<be;le++){const Ue=re[le],$=n.get(Ue);t.bindTexture(s.TEXTURE_2D,$.__webglTexture),V(s.TEXTURE_2D,Ue,de),pe(k.__webglFramebuffer,w,Ue,s.COLOR_ATTACHMENT0+le,s.TEXTURE_2D,0),b(Ue,de)&&v(s.TEXTURE_2D)}t.unbindTexture()}else{let re=s.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(o?re=w.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(re,J.__webglTexture),V(re,M,de),o&&M.mipmaps&&M.mipmaps.length>0)for(let le=0;le<M.mipmaps.length;le++)pe(k.__webglFramebuffer[le],w,M,s.COLOR_ATTACHMENT0,re,le);else pe(k.__webglFramebuffer,w,M,s.COLOR_ATTACHMENT0,re,0);b(M,de)&&v(re),t.unbindTexture()}w.depthBuffer&&Se(w)}function At(w){const M=m(w)||o,k=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let J=0,K=k.length;J<K;J++){const Q=k[J];if(b(Q,M)){const de=w.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,re=n.get(Q).__webglTexture;t.bindTexture(de,re),v(de),t.unbindTexture()}}}function _e(w){if(o&&w.samples>0&&he(w)===!1){const M=w.isWebGLMultipleRenderTargets?w.texture:[w.texture],k=w.width,J=w.height;let K=s.COLOR_BUFFER_BIT;const Q=[],de=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,re=n.get(w),le=w.isWebGLMultipleRenderTargets===!0;if(le)for(let be=0;be<M.length;be++)t.bindFramebuffer(s.FRAMEBUFFER,re.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,re.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,re.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,re.__webglFramebuffer);for(let be=0;be<M.length;be++){Q.push(s.COLOR_ATTACHMENT0+be),w.depthBuffer&&Q.push(de);const Ue=re.__ignoreDepthValues!==void 0?re.__ignoreDepthValues:!1;if(Ue===!1&&(w.depthBuffer&&(K|=s.DEPTH_BUFFER_BIT),w.stencilBuffer&&(K|=s.STENCIL_BUFFER_BIT)),le&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,re.__webglColorRenderbuffer[be]),Ue===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[de]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[de])),le){const $=n.get(M[be]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,$,0)}s.blitFramebuffer(0,0,k,J,0,0,k,J,K,s.NEAREST),l&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Q)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),le)for(let be=0;be<M.length;be++){t.bindFramebuffer(s.FRAMEBUFFER,re.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.RENDERBUFFER,re.__webglColorRenderbuffer[be]);const Ue=n.get(M[be]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,re.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.TEXTURE_2D,Ue,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,re.__webglMultisampledFramebuffer)}}function Ae(w){return Math.min(i.maxSamples,w.samples)}function he(w){const M=n.get(w);return o&&w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function nt(w){const M=a.render.frame;u.get(w)!==M&&(u.set(w,M),w.update())}function De(w,M){const k=w.colorSpace,J=w.format,K=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||w.format===Qs||k!==dt&&k!==Ft&&(We.getTransfer(k)===et?o===!1?e.has("EXT_sRGB")===!0&&J===It?(w.format=Qs,w.minFilter=ut,w.generateMipmaps=!1):M=la.sRGBToLinear(M):(J!==It||K!==bn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),M}this.allocateTextureUnit=P,this.resetTextureUnits=Z,this.setTexture2D=H,this.setTexture2DArray=X,this.setTexture3D=W,this.setTextureCube=j,this.rebindTextures=Ve,this.setupRenderTarget=O,this.updateRenderTargetMipmap=At,this.updateMultisampleRenderTarget=_e,this.setupDepthRenderbuffer=Se,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=he}function gu(s,e,t){const n=t.isWebGL2;function i(r,a=Ft){let o;const c=We.getTransfer(a);if(r===bn)return s.UNSIGNED_BYTE;if(r===Jo)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Qo)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Il)return s.BYTE;if(r===Dl)return s.SHORT;if(r===ir)return s.UNSIGNED_SHORT;if(r===Ko)return s.INT;if(r===mn)return s.UNSIGNED_INT;if(r===rn)return s.FLOAT;if(r===Ri)return n?s.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===Ul)return s.ALPHA;if(r===It)return s.RGBA;if(r===Nl)return s.LUMINANCE;if(r===Ol)return s.LUMINANCE_ALPHA;if(r===Un)return s.DEPTH_COMPONENT;if(r===Qn)return s.DEPTH_STENCIL;if(r===Qs)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===Fl)return s.RED;if(r===ea)return s.RED_INTEGER;if(r===Bl)return s.RG;if(r===ta)return s.RG_INTEGER;if(r===na)return s.RGBA_INTEGER;if(r===Bs||r===ks||r===zs||r===Gs)if(c===et)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Bs)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===ks)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===zs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Gs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Bs)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===ks)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===zs)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Gs)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===ro||r===oo||r===ao||r===co)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===ro)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===oo)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===ao)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===co)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===ia)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===lo||r===uo)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===lo)return c===et?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===uo)return c===et?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===ho||r===fo||r===po||r===mo||r===go||r===_o||r===vo||r===xo||r===bo||r===So||r===Mo||r===yo||r===To||r===Eo)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===ho)return c===et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===fo)return c===et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===po)return c===et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===mo)return c===et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===go)return c===et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===_o)return c===et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===vo)return c===et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===xo)return c===et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===bo)return c===et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===So)return c===et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Mo)return c===et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===yo)return c===et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===To)return c===et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Eo)return c===et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Hs||r===Ao||r===wo)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===Hs)return c===et?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Ao)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===wo)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===kl||r===Ro||r===Co||r===Lo)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===Hs)return o.COMPRESSED_RED_RGTC1_EXT;if(r===Ro)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Co)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Lo)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Dn?n?s.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class _u extends Tt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class In extends tt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const tg={type:"move"};class kr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new In,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new In,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new In,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),f=this._getHandJoint(l,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,g=.005;l.inputState.pinching&&d>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(tg)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new In;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class ng extends ii{constructor(e,t){super();const n=this;let i=null,r=1,a=null,o="local-floor",c=1,l=null,u=null,h=null,d=null,p=null,g=null;const _=t.getContextAttributes();let m=null,f=null;const b=[],v=[],S=new He;let R=null;const A=new Tt;A.layers.enable(1),A.viewport=new $e;const y=new Tt;y.layers.enable(2),y.viewport=new $e;const C=[A,y],x=new _u;x.layers.enable(1),x.layers.enable(2);let T=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let q=b[V];return q===void 0&&(q=new kr,b[V]=q),q.getTargetRaySpace()},this.getControllerGrip=function(V){let q=b[V];return q===void 0&&(q=new kr,b[V]=q),q.getGripSpace()},this.getHand=function(V){let q=b[V];return q===void 0&&(q=new kr,b[V]=q),q.getHandSpace()};function B(V){const q=v.indexOf(V.inputSource);if(q===-1)return;const oe=b[q];oe!==void 0&&(oe.update(V.inputSource,V.frame,l||a),oe.dispatchEvent({type:V.type,data:V.inputSource}))}function Z(){i.removeEventListener("select",B),i.removeEventListener("selectstart",B),i.removeEventListener("selectend",B),i.removeEventListener("squeeze",B),i.removeEventListener("squeezestart",B),i.removeEventListener("squeezeend",B),i.removeEventListener("end",Z),i.removeEventListener("inputsourceschange",P);for(let V=0;V<b.length;V++){const q=v[V];q!==null&&(v[V]=null,b[V].disconnect(q))}T=null,D=null,e.setRenderTarget(m),p=null,d=null,h=null,i=null,f=null,ce.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(S.width,S.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){r=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){o=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(V){l=V},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(V){if(i=V,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",B),i.addEventListener("selectstart",B),i.addEventListener("selectend",B),i.addEventListener("squeeze",B),i.addEventListener("squeezestart",B),i.addEventListener("squeezeend",B),i.addEventListener("end",Z),i.addEventListener("inputsourceschange",P),_.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(S),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const q={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,t,q),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),f=new On(p.framebufferWidth,p.framebufferHeight,{format:It,type:bn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let q=null,oe=null,me=null;_.depth&&(me=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,q=_.stencil?Qn:Un,oe=_.stencil?Dn:mn);const pe={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:r};h=new XRWebGLBinding(i,t),d=h.createProjectionLayer(pe),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),f=new On(d.textureWidth,d.textureHeight,{format:It,type:bn,depthTexture:new va(d.textureWidth,d.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,q),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const Re=e.properties.get(f);Re.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),ce.setContext(i),ce.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function P(V){for(let q=0;q<V.removed.length;q++){const oe=V.removed[q],me=v.indexOf(oe);me>=0&&(v[me]=null,b[me].disconnect(oe))}for(let q=0;q<V.added.length;q++){const oe=V.added[q];let me=v.indexOf(oe);if(me===-1){for(let Re=0;Re<b.length;Re++)if(Re>=v.length){v.push(oe),me=Re;break}else if(v[Re]===null){v[Re]=oe,me=Re;break}if(me===-1)break}const pe=b[me];pe&&pe.connect(oe)}}const U=new I,H=new I;function X(V,q,oe){U.setFromMatrixPosition(q.matrixWorld),H.setFromMatrixPosition(oe.matrixWorld);const me=U.distanceTo(H),pe=q.projectionMatrix.elements,Re=oe.projectionMatrix.elements,Pe=pe[14]/(pe[10]-1),Se=pe[14]/(pe[10]+1),Ve=(pe[9]+1)/pe[5],O=(pe[9]-1)/pe[5],At=(pe[8]-1)/pe[0],_e=(Re[8]+1)/Re[0],Ae=Pe*At,he=Pe*_e,nt=me/(-At+_e),De=nt*-At;q.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(De),V.translateZ(nt),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();const w=Pe+nt,M=Se+nt,k=Ae-De,J=he+(me-De),K=Ve*Se/M*w,Q=O*Se/M*w;V.projectionMatrix.makePerspective(k,J,K,Q,w,M),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}function W(V,q){q===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(q.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(i===null)return;x.near=y.near=A.near=V.near,x.far=y.far=A.far=V.far,(T!==x.near||D!==x.far)&&(i.updateRenderState({depthNear:x.near,depthFar:x.far}),T=x.near,D=x.far);const q=V.parent,oe=x.cameras;W(x,q);for(let me=0;me<oe.length;me++)W(oe[me],q);oe.length===2?X(x,A,y):x.projectionMatrix.copy(A.projectionMatrix),j(V,x,q)};function j(V,q,oe){oe===null?V.matrix.copy(q.matrixWorld):(V.matrix.copy(oe.matrixWorld),V.matrix.invert(),V.matrix.multiply(q.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(q.projectionMatrix),V.projectionMatrixInverse.copy(q.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=Li*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(V){c=V,d!==null&&(d.fixedFoveation=V),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=V)};let Y=null;function ee(V,q){if(u=q.getViewerPose(l||a),g=q,u!==null){const oe=u.views;p!==null&&(e.setRenderTargetFramebuffer(f,p.framebuffer),e.setRenderTarget(f));let me=!1;oe.length!==x.cameras.length&&(x.cameras.length=0,me=!0);for(let pe=0;pe<oe.length;pe++){const Re=oe[pe];let Pe=null;if(p!==null)Pe=p.getViewport(Re);else{const Ve=h.getViewSubImage(d,Re);Pe=Ve.viewport,pe===0&&(e.setRenderTargetTextures(f,Ve.colorTexture,d.ignoreDepthValues?void 0:Ve.depthStencilTexture),e.setRenderTarget(f))}let Se=C[pe];Se===void 0&&(Se=new Tt,Se.layers.enable(pe),Se.viewport=new $e,C[pe]=Se),Se.matrix.fromArray(Re.transform.matrix),Se.matrix.decompose(Se.position,Se.quaternion,Se.scale),Se.projectionMatrix.fromArray(Re.projectionMatrix),Se.projectionMatrixInverse.copy(Se.projectionMatrix).invert(),Se.viewport.set(Pe.x,Pe.y,Pe.width,Pe.height),pe===0&&(x.matrix.copy(Se.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),me===!0&&x.cameras.push(Se)}}for(let oe=0;oe<b.length;oe++){const me=v[oe],pe=b[oe];me!==null&&pe!==void 0&&pe.update(me,q,l||a)}Y&&Y(V,q),q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:q}),g=null}const ce=new cu;ce.setAnimationLoop(ee),this.setAnimationLoop=function(V){Y=V},this.dispose=function(){}}}function ig(s,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,su(s)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function i(m,f,b,v,S){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),h(m,f)):f.isMeshPhongMaterial?(r(m,f),u(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,S)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),_(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?c(m,f,b,v):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Pt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Pt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const b=e.get(f).envMap;if(b&&(m.envMap.value=b,m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;const v=s._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*v,t(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,b,v){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*b,m.scale.value=v*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),e.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,b){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Pt&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const b=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function sg(s,e,t,n){let i={},r={},a=[];const o=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(b,v){const S=v.program;n.uniformBlockBinding(b,S)}function l(b,v){let S=i[b.id];S===void 0&&(g(b),S=u(b),i[b.id]=S,b.addEventListener("dispose",m));const R=v.program;n.updateUBOMapping(b,R);const A=e.render.frame;r[b.id]!==A&&(d(b),r[b.id]=A)}function u(b){const v=h();b.__bindingPointIndex=v;const S=s.createBuffer(),R=b.__size,A=b.usage;return s.bindBuffer(s.UNIFORM_BUFFER,S),s.bufferData(s.UNIFORM_BUFFER,R,A),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,v,S),S}function h(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const v=i[b.id],S=b.uniforms,R=b.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let A=0,y=S.length;A<y;A++){const C=Array.isArray(S[A])?S[A]:[S[A]];for(let x=0,T=C.length;x<T;x++){const D=C[x];if(p(D,A,x,R)===!0){const B=D.__offset,Z=Array.isArray(D.value)?D.value:[D.value];let P=0;for(let U=0;U<Z.length;U++){const H=Z[U],X=_(H);typeof H=="number"||typeof H=="boolean"?(D.__data[0]=H,s.bufferSubData(s.UNIFORM_BUFFER,B+P,D.__data)):H.isMatrix3?(D.__data[0]=H.elements[0],D.__data[1]=H.elements[1],D.__data[2]=H.elements[2],D.__data[3]=0,D.__data[4]=H.elements[3],D.__data[5]=H.elements[4],D.__data[6]=H.elements[5],D.__data[7]=0,D.__data[8]=H.elements[6],D.__data[9]=H.elements[7],D.__data[10]=H.elements[8],D.__data[11]=0):(H.toArray(D.__data,P),P+=X.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,B,D.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(b,v,S,R){const A=b.value,y=v+"_"+S;if(R[y]===void 0)return typeof A=="number"||typeof A=="boolean"?R[y]=A:R[y]=A.clone(),!0;{const C=R[y];if(typeof A=="number"||typeof A=="boolean"){if(C!==A)return R[y]=A,!0}else if(C.equals(A)===!1)return C.copy(A),!0}return!1}function g(b){const v=b.uniforms;let S=0;const R=16;for(let y=0,C=v.length;y<C;y++){const x=Array.isArray(v[y])?v[y]:[v[y]];for(let T=0,D=x.length;T<D;T++){const B=x[T],Z=Array.isArray(B.value)?B.value:[B.value];for(let P=0,U=Z.length;P<U;P++){const H=Z[P],X=_(H),W=S%R;W!==0&&R-W<X.boundary&&(S+=R-W),B.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=S,S+=X.storage}}}const A=S%R;return A>0&&(S+=R-A),b.__size=S,b.__cache={},this}function _(b){const v={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(v.boundary=4,v.storage=4):b.isVector2?(v.boundary=8,v.storage=8):b.isVector3||b.isColor?(v.boundary=16,v.storage=12):b.isVector4?(v.boundary=16,v.storage=16):b.isMatrix3?(v.boundary=48,v.storage=48):b.isMatrix4?(v.boundary=64,v.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),v}function m(b){const v=b.target;v.removeEventListener("dispose",m);const S=a.indexOf(v.__bindingPointIndex);a.splice(S,1),s.deleteBuffer(i[v.id]),delete i[v.id],delete r[v.id]}function f(){for(const b in i)s.deleteBuffer(i[b]);a=[],i={},r={}}return{bind:c,update:l,dispose:f}}class xa{constructor(e={}){const{canvas:t=eu(),context:n=null,depth:i=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=a;const p=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const f=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=qe,this._useLegacyLights=!1,this.toneMapping=xn,this.toneMappingExposure=1;const v=this;let S=!1,R=0,A=0,y=null,C=-1,x=null;const T=new $e,D=new $e;let B=null;const Z=new Te(0);let P=0,U=t.width,H=t.height,X=1,W=null,j=null;const Y=new $e(0,0,U,H),ee=new $e(0,0,U,H);let ce=!1;const V=new rr;let q=!1,oe=!1,me=null;const pe=new Fe,Re=new He,Pe=new I,Se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ve(){return y===null?X:1}let O=n;function At(E,N){for(let z=0;z<E.length;z++){const G=E[z],F=t.getContext(G,N);if(F!==null)return F}return null}try{const E={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${nr}`),t.addEventListener("webglcontextlost",ne,!1),t.addEventListener("webglcontextrestored",L,!1),t.addEventListener("webglcontextcreationerror",ie,!1),O===null){const N=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&N.shift(),O=At(N,E),O===null)throw At(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&O instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),O.getShaderPrecisionFormat===void 0&&(O.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let _e,Ae,he,nt,De,w,M,k,J,K,Q,de,re,le,be,Ue,$,Ze,ze,Ee,ge,ue,Ie,Xe;function rt(){_e=new vp(O),Ae=new dp(O,_e,e),_e.init(Ae),ue=new gu(O,_e,Ae),he=new Qm(O,_e,Ae),nt=new Sp(O),De=new Gm,w=new eg(O,_e,he,De,Ae,ue,nt),M=new pp(v),k=new _p(v),J=new Rh(O,Ae),Ie=new up(O,_e,J,Ae),K=new xp(O,J,nt,Ie),Q=new Ep(O,K,J,nt),ze=new Tp(O,Ae,w),Ue=new fp(De),de=new zm(v,M,k,_e,Ae,Ie,Ue),re=new ig(v,De),le=new Vm,be=new qm(_e,Ae),Ze=new lp(v,M,k,he,Q,d,c),$=new Jm(v,Q,Ae),Xe=new sg(O,nt,Ae,he),Ee=new hp(O,_e,nt,Ae),ge=new bp(O,_e,nt,Ae),nt.programs=de.programs,v.capabilities=Ae,v.extensions=_e,v.properties=De,v.renderLists=le,v.shadowMap=$,v.state=he,v.info=nt}rt();const Be=new ng(v,O);this.xr=Be,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const E=_e.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=_e.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(E){E!==void 0&&(X=E,this.setSize(U,H,!1))},this.getSize=function(E){return E.set(U,H)},this.setSize=function(E,N,z=!0){if(Be.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=E,H=N,t.width=Math.floor(E*X),t.height=Math.floor(N*X),z===!0&&(t.style.width=E+"px",t.style.height=N+"px"),this.setViewport(0,0,E,N)},this.getDrawingBufferSize=function(E){return E.set(U*X,H*X).floor()},this.setDrawingBufferSize=function(E,N,z){U=E,H=N,X=z,t.width=Math.floor(E*z),t.height=Math.floor(N*z),this.setViewport(0,0,E,N)},this.getCurrentViewport=function(E){return E.copy(T)},this.getViewport=function(E){return E.copy(Y)},this.setViewport=function(E,N,z,G){E.isVector4?Y.set(E.x,E.y,E.z,E.w):Y.set(E,N,z,G),he.viewport(T.copy(Y).multiplyScalar(X).floor())},this.getScissor=function(E){return E.copy(ee)},this.setScissor=function(E,N,z,G){E.isVector4?ee.set(E.x,E.y,E.z,E.w):ee.set(E,N,z,G),he.scissor(D.copy(ee).multiplyScalar(X).floor())},this.getScissorTest=function(){return ce},this.setScissorTest=function(E){he.setScissorTest(ce=E)},this.setOpaqueSort=function(E){W=E},this.setTransparentSort=function(E){j=E},this.getClearColor=function(E){return E.copy(Ze.getClearColor())},this.setClearColor=function(){Ze.setClearColor.apply(Ze,arguments)},this.getClearAlpha=function(){return Ze.getClearAlpha()},this.setClearAlpha=function(){Ze.setClearAlpha.apply(Ze,arguments)},this.clear=function(E=!0,N=!0,z=!0){let G=0;if(E){let F=!1;if(y!==null){const ae=y.texture.format;F=ae===na||ae===ta||ae===ea}if(F){const ae=y.texture.type,fe=ae===bn||ae===mn||ae===ir||ae===Dn||ae===Jo||ae===Qo,xe=Ze.getClearColor(),ye=Ze.getClearAlpha(),Ne=xe.r,we=xe.g,Ce=xe.b;fe?(p[0]=Ne,p[1]=we,p[2]=Ce,p[3]=ye,O.clearBufferuiv(O.COLOR,0,p)):(g[0]=Ne,g[1]=we,g[2]=Ce,g[3]=ye,O.clearBufferiv(O.COLOR,0,g))}else G|=O.COLOR_BUFFER_BIT}N&&(G|=O.DEPTH_BUFFER_BIT),z&&(G|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ne,!1),t.removeEventListener("webglcontextrestored",L,!1),t.removeEventListener("webglcontextcreationerror",ie,!1),le.dispose(),be.dispose(),De.dispose(),M.dispose(),k.dispose(),Q.dispose(),Ie.dispose(),Xe.dispose(),de.dispose(),Be.dispose(),Be.removeEventListener("sessionstart",wt),Be.removeEventListener("sessionend",Qe),me&&(me.dispose(),me=null),Rt.stop()};function ne(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function L(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const E=nt.autoReset,N=$.enabled,z=$.autoUpdate,G=$.needsUpdate,F=$.type;rt(),nt.autoReset=E,$.enabled=N,$.autoUpdate=z,$.needsUpdate=G,$.type=F}function ie(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function se(E){const N=E.target;N.removeEventListener("dispose",se),Me(N)}function Me(E){ve(E),De.remove(E)}function ve(E){const N=De.get(E).programs;N!==void 0&&(N.forEach(function(z){de.releaseProgram(z)}),E.isShaderMaterial&&de.releaseShaderCache(E))}this.renderBufferDirect=function(E,N,z,G,F,ae){N===null&&(N=Se);const fe=F.isMesh&&F.matrixWorld.determinant()<0,xe=Wu(E,N,z,G,F);he.setMaterial(G,fe);let ye=z.index,Ne=1;if(G.wireframe===!0){if(ye=K.getWireframeAttribute(z),ye===void 0)return;Ne=2}const we=z.drawRange,Ce=z.attributes.position;let at=we.start*Ne,Ut=(we.start+we.count)*Ne;ae!==null&&(at=Math.max(at,ae.start*Ne),Ut=Math.min(Ut,(ae.start+ae.count)*Ne)),ye!==null?(at=Math.max(at,0),Ut=Math.min(Ut,ye.count)):Ce!=null&&(at=Math.max(at,0),Ut=Math.min(Ut,Ce.count));const gt=Ut-at;if(gt<0||gt===1/0)return;Ie.setup(F,G,xe,z,ye);let cn,it=Ee;if(ye!==null&&(cn=J.get(ye),it=ge,it.setIndex(cn)),F.isMesh)G.wireframe===!0?(he.setLineWidth(G.wireframeLinewidth*Ve()),it.setMode(O.LINES)):it.setMode(O.TRIANGLES);else if(F.isLine){let ke=G.linewidth;ke===void 0&&(ke=1),he.setLineWidth(ke*Ve()),F.isLineSegments?it.setMode(O.LINES):F.isLineLoop?it.setMode(O.LINE_LOOP):it.setMode(O.LINE_STRIP)}else F.isPoints?it.setMode(O.POINTS):F.isSprite&&it.setMode(O.TRIANGLES);if(F.isBatchedMesh)it.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else if(F.isInstancedMesh)it.renderInstances(at,gt,F.count);else if(z.isInstancedBufferGeometry){const ke=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,fr=Math.min(z.instanceCount,ke);it.renderInstances(at,gt,fr)}else it.render(at,gt)};function Ke(E,N,z){E.transparent===!0&&E.side===Yt&&E.forceSinglePass===!1?(E.side=Pt,E.needsUpdate=!0,cs(E,N,z),E.side=xt,E.needsUpdate=!0,cs(E,N,z),E.side=Yt):cs(E,N,z)}this.compile=function(E,N,z=null){z===null&&(z=E),m=be.get(z),m.init(),b.push(m),z.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),E!==z&&E.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),m.setupLights(v._useLegacyLights);const G=new Set;return E.traverse(function(F){const ae=F.material;if(ae)if(Array.isArray(ae))for(let fe=0;fe<ae.length;fe++){const xe=ae[fe];Ke(xe,z,F),G.add(xe)}else Ke(ae,z,F),G.add(ae)}),b.pop(),m=null,G},this.compileAsync=function(E,N,z=null){const G=this.compile(E,N,z);return new Promise(F=>{function ae(){if(G.forEach(function(fe){De.get(fe).currentProgram.isReady()&&G.delete(fe)}),G.size===0){F(E);return}setTimeout(ae,10)}_e.get("KHR_parallel_shader_compile")!==null?ae():setTimeout(ae,10)})};let Je=null;function mt(E){Je&&Je(E)}function wt(){Rt.stop()}function Qe(){Rt.start()}const Rt=new cu;Rt.setAnimationLoop(mt),typeof self<"u"&&Rt.setContext(self),this.setAnimationLoop=function(E){Je=E,Be.setAnimationLoop(E),E===null?Rt.stop():Rt.start()},Be.addEventListener("sessionstart",wt),Be.addEventListener("sessionend",Qe),this.render=function(E,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Be.enabled===!0&&Be.isPresenting===!0&&(Be.cameraAutoUpdate===!0&&Be.updateCamera(N),N=Be.getCamera()),E.isScene===!0&&E.onBeforeRender(v,E,N,y),m=be.get(E,b.length),m.init(),b.push(m),pe.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),V.setFromProjectionMatrix(pe),oe=this.localClippingEnabled,q=Ue.init(this.clippingPlanes,oe),_=le.get(E,f.length),_.init(),f.push(_),tn(E,N,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(W,j),this.info.render.frame++,q===!0&&Ue.beginShadows();const z=m.state.shadowsArray;if($.render(z,E,N),q===!0&&Ue.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ze.render(_,E),m.setupLights(v._useLegacyLights),N.isArrayCamera){const G=N.cameras;for(let F=0,ae=G.length;F<ae;F++){const fe=G[F];La(_,E,fe,fe.viewport)}}else La(_,E,N);y!==null&&(w.updateMultisampleRenderTarget(y),w.updateRenderTargetMipmap(y)),E.isScene===!0&&E.onAfterRender(v,E,N),Ie.resetDefaultState(),C=-1,x=null,b.pop(),b.length>0?m=b[b.length-1]:m=null,f.pop(),f.length>0?_=f[f.length-1]:_=null};function tn(E,N,z,G){if(E.visible===!1)return;if(E.layers.test(N.layers)){if(E.isGroup)z=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(N);else if(E.isLight)m.pushLight(E),E.castShadow&&m.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||V.intersectsSprite(E)){G&&Pe.setFromMatrixPosition(E.matrixWorld).applyMatrix4(pe);const fe=Q.update(E),xe=E.material;xe.visible&&_.push(E,fe,xe,z,Pe.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||V.intersectsObject(E))){const fe=Q.update(E),xe=E.material;if(G&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Pe.copy(E.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),Pe.copy(fe.boundingSphere.center)),Pe.applyMatrix4(E.matrixWorld).applyMatrix4(pe)),Array.isArray(xe)){const ye=fe.groups;for(let Ne=0,we=ye.length;Ne<we;Ne++){const Ce=ye[Ne],at=xe[Ce.materialIndex];at&&at.visible&&_.push(E,fe,at,z,Pe.z,Ce)}}else xe.visible&&_.push(E,fe,xe,z,Pe.z,null)}}const ae=E.children;for(let fe=0,xe=ae.length;fe<xe;fe++)tn(ae[fe],N,z,G)}function La(E,N,z,G){const F=E.opaque,ae=E.transmissive,fe=E.transparent;m.setupLightsView(z),q===!0&&Ue.setGlobalState(v.clippingPlanes,z),ae.length>0&&Vu(F,ae,N,z),G&&he.viewport(T.copy(G)),F.length>0&&as(F,N,z),ae.length>0&&as(ae,N,z),fe.length>0&&as(fe,N,z),he.buffers.depth.setTest(!0),he.buffers.depth.setMask(!0),he.buffers.color.setMask(!0),he.setPolygonOffset(!1)}function Vu(E,N,z,G){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;const ae=Ae.isWebGL2;me===null&&(me=new On(1,1,{generateMipmaps:!0,type:_e.has("EXT_color_buffer_half_float")?Ri:bn,minFilter:Nn,samples:ae?4:0})),v.getDrawingBufferSize(Re),ae?me.setSize(Re.x,Re.y):me.setSize(er(Re.x),er(Re.y));const fe=v.getRenderTarget();v.setRenderTarget(me),v.getClearColor(Z),P=v.getClearAlpha(),P<1&&v.setClearColor(16777215,.5),v.clear();const xe=v.toneMapping;v.toneMapping=xn,as(E,z,G),w.updateMultisampleRenderTarget(me),w.updateRenderTargetMipmap(me);let ye=!1;for(let Ne=0,we=N.length;Ne<we;Ne++){const Ce=N[Ne],at=Ce.object,Ut=Ce.geometry,gt=Ce.material,cn=Ce.group;if(gt.side===Yt&&at.layers.test(G.layers)){const it=gt.side;gt.side=Pt,gt.needsUpdate=!0,Pa(at,z,G,Ut,gt,cn),gt.side=it,gt.needsUpdate=!0,ye=!0}}ye===!0&&(w.updateMultisampleRenderTarget(me),w.updateRenderTargetMipmap(me)),v.setRenderTarget(fe),v.setClearColor(Z,P),v.toneMapping=xe}function as(E,N,z){const G=N.isScene===!0?N.overrideMaterial:null;for(let F=0,ae=E.length;F<ae;F++){const fe=E[F],xe=fe.object,ye=fe.geometry,Ne=G===null?fe.material:G,we=fe.group;xe.layers.test(z.layers)&&Pa(xe,N,z,ye,Ne,we)}}function Pa(E,N,z,G,F,ae){E.onBeforeRender(v,N,z,G,F,ae),E.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),F.onBeforeRender(v,N,z,G,E,ae),F.transparent===!0&&F.side===Yt&&F.forceSinglePass===!1?(F.side=Pt,F.needsUpdate=!0,v.renderBufferDirect(z,N,G,F,E,ae),F.side=xt,F.needsUpdate=!0,v.renderBufferDirect(z,N,G,F,E,ae),F.side=Yt):v.renderBufferDirect(z,N,G,F,E,ae),E.onAfterRender(v,N,z,G,F,ae)}function cs(E,N,z){N.isScene!==!0&&(N=Se);const G=De.get(E),F=m.state.lights,ae=m.state.shadowsArray,fe=F.state.version,xe=de.getParameters(E,F.state,ae,N,z),ye=de.getProgramCacheKey(xe);let Ne=G.programs;G.environment=E.isMeshStandardMaterial?N.environment:null,G.fog=N.fog,G.envMap=(E.isMeshStandardMaterial?k:M).get(E.envMap||G.environment),Ne===void 0&&(E.addEventListener("dispose",se),Ne=new Map,G.programs=Ne);let we=Ne.get(ye);if(we!==void 0){if(G.currentProgram===we&&G.lightsStateVersion===fe)return Da(E,xe),we}else xe.uniforms=de.getUniforms(E),E.onBuild(z,xe,v),E.onBeforeCompile(xe,v),we=de.acquireProgram(xe,ye),Ne.set(ye,we),G.uniforms=xe.uniforms;const Ce=G.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ce.clippingPlanes=Ue.uniform),Da(E,xe),G.needsLights=Xu(E),G.lightsStateVersion=fe,G.needsLights&&(Ce.ambientLightColor.value=F.state.ambient,Ce.lightProbe.value=F.state.probe,Ce.directionalLights.value=F.state.directional,Ce.directionalLightShadows.value=F.state.directionalShadow,Ce.spotLights.value=F.state.spot,Ce.spotLightShadows.value=F.state.spotShadow,Ce.rectAreaLights.value=F.state.rectArea,Ce.ltc_1.value=F.state.rectAreaLTC1,Ce.ltc_2.value=F.state.rectAreaLTC2,Ce.pointLights.value=F.state.point,Ce.pointLightShadows.value=F.state.pointShadow,Ce.hemisphereLights.value=F.state.hemi,Ce.directionalShadowMap.value=F.state.directionalShadowMap,Ce.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Ce.spotShadowMap.value=F.state.spotShadowMap,Ce.spotLightMatrix.value=F.state.spotLightMatrix,Ce.spotLightMap.value=F.state.spotLightMap,Ce.pointShadowMap.value=F.state.pointShadowMap,Ce.pointShadowMatrix.value=F.state.pointShadowMatrix),G.currentProgram=we,G.uniformsList=null,we}function Ia(E){if(E.uniformsList===null){const N=E.currentProgram.getUniforms();E.uniformsList=Ws.seqWithValue(N.seq,E.uniforms)}return E.uniformsList}function Da(E,N){const z=De.get(E);z.outputColorSpace=N.outputColorSpace,z.batching=N.batching,z.instancing=N.instancing,z.instancingColor=N.instancingColor,z.skinning=N.skinning,z.morphTargets=N.morphTargets,z.morphNormals=N.morphNormals,z.morphColors=N.morphColors,z.morphTargetsCount=N.morphTargetsCount,z.numClippingPlanes=N.numClippingPlanes,z.numIntersection=N.numClipIntersection,z.vertexAlphas=N.vertexAlphas,z.vertexTangents=N.vertexTangents,z.toneMapping=N.toneMapping}function Wu(E,N,z,G,F){N.isScene!==!0&&(N=Se),w.resetTextureUnits();const ae=N.fog,fe=G.isMeshStandardMaterial?N.environment:null,xe=y===null?v.outputColorSpace:y.isXRRenderTarget===!0?y.texture.colorSpace:dt,ye=(G.isMeshStandardMaterial?k:M).get(G.envMap||fe),Ne=G.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,we=!!z.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Ce=!!z.morphAttributes.position,at=!!z.morphAttributes.normal,Ut=!!z.morphAttributes.color;let gt=xn;G.toneMapped&&(y===null||y.isXRRenderTarget===!0)&&(gt=v.toneMapping);const cn=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,it=cn!==void 0?cn.length:0,ke=De.get(G),fr=m.state.lights;if(q===!0&&(oe===!0||E!==x)){const zt=E===x&&G.id===C;Ue.setState(G,E,zt)}let ot=!1;G.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==fr.state.version||ke.outputColorSpace!==xe||F.isBatchedMesh&&ke.batching===!1||!F.isBatchedMesh&&ke.batching===!0||F.isInstancedMesh&&ke.instancing===!1||!F.isInstancedMesh&&ke.instancing===!0||F.isSkinnedMesh&&ke.skinning===!1||!F.isSkinnedMesh&&ke.skinning===!0||F.isInstancedMesh&&ke.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&ke.instancingColor===!1&&F.instanceColor!==null||ke.envMap!==ye||G.fog===!0&&ke.fog!==ae||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==Ue.numPlanes||ke.numIntersection!==Ue.numIntersection)||ke.vertexAlphas!==Ne||ke.vertexTangents!==we||ke.morphTargets!==Ce||ke.morphNormals!==at||ke.morphColors!==Ut||ke.toneMapping!==gt||Ae.isWebGL2===!0&&ke.morphTargetsCount!==it)&&(ot=!0):(ot=!0,ke.__version=G.version);let Bn=ke.currentProgram;ot===!0&&(Bn=cs(G,N,F));let Ua=!1,Ni=!1,pr=!1;const bt=Bn.getUniforms(),kn=ke.uniforms;if(he.useProgram(Bn.program)&&(Ua=!0,Ni=!0,pr=!0),G.id!==C&&(C=G.id,Ni=!0),Ua||x!==E){bt.setValue(O,"projectionMatrix",E.projectionMatrix),bt.setValue(O,"viewMatrix",E.matrixWorldInverse);const zt=bt.map.cameraPosition;zt!==void 0&&zt.setValue(O,Pe.setFromMatrixPosition(E.matrixWorld)),Ae.logarithmicDepthBuffer&&bt.setValue(O,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&bt.setValue(O,"isOrthographic",E.isOrthographicCamera===!0),x!==E&&(x=E,Ni=!0,pr=!0)}if(F.isSkinnedMesh){bt.setOptional(O,F,"bindMatrix"),bt.setOptional(O,F,"bindMatrixInverse");const zt=F.skeleton;zt&&(Ae.floatVertexTextures?(zt.boneTexture===null&&zt.computeBoneTexture(),bt.setValue(O,"boneTexture",zt.boneTexture,w)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}F.isBatchedMesh&&(bt.setOptional(O,F,"batchingTexture"),bt.setValue(O,"batchingTexture",F._matricesTexture,w));const mr=z.morphAttributes;if((mr.position!==void 0||mr.normal!==void 0||mr.color!==void 0&&Ae.isWebGL2===!0)&&ze.update(F,z,Bn),(Ni||ke.receiveShadow!==F.receiveShadow)&&(ke.receiveShadow=F.receiveShadow,bt.setValue(O,"receiveShadow",F.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(kn.envMap.value=ye,kn.flipEnvMap.value=ye.isCubeTexture&&ye.isRenderTargetTexture===!1?-1:1),Ni&&(bt.setValue(O,"toneMappingExposure",v.toneMappingExposure),ke.needsLights&&ju(kn,pr),ae&&G.fog===!0&&re.refreshFogUniforms(kn,ae),re.refreshMaterialUniforms(kn,G,X,H,me),Ws.upload(O,Ia(ke),kn,w)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Ws.upload(O,Ia(ke),kn,w),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&bt.setValue(O,"center",F.center),bt.setValue(O,"modelViewMatrix",F.modelViewMatrix),bt.setValue(O,"normalMatrix",F.normalMatrix),bt.setValue(O,"modelMatrix",F.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const zt=G.uniformsGroups;for(let gr=0,Zu=zt.length;gr<Zu;gr++)if(Ae.isWebGL2){const Na=zt[gr];Xe.update(Na,Bn),Xe.bind(Na,Bn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Bn}function ju(E,N){E.ambientLightColor.needsUpdate=N,E.lightProbe.needsUpdate=N,E.directionalLights.needsUpdate=N,E.directionalLightShadows.needsUpdate=N,E.pointLights.needsUpdate=N,E.pointLightShadows.needsUpdate=N,E.spotLights.needsUpdate=N,E.spotLightShadows.needsUpdate=N,E.rectAreaLights.needsUpdate=N,E.hemisphereLights.needsUpdate=N}function Xu(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return y},this.setRenderTargetTextures=function(E,N,z){De.get(E.texture).__webglTexture=N,De.get(E.depthTexture).__webglTexture=z;const G=De.get(E);G.__hasExternalTextures=!0,G.__hasExternalTextures&&(G.__autoAllocateDepthBuffer=z===void 0,G.__autoAllocateDepthBuffer||_e.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,N){const z=De.get(E);z.__webglFramebuffer=N,z.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(E,N=0,z=0){y=E,R=N,A=z;let G=!0,F=null,ae=!1,fe=!1;if(E){const ye=De.get(E);ye.__useDefaultFramebuffer!==void 0?(he.bindFramebuffer(O.FRAMEBUFFER,null),G=!1):ye.__webglFramebuffer===void 0?w.setupRenderTarget(E):ye.__hasExternalTextures&&w.rebindTextures(E,De.get(E.texture).__webglTexture,De.get(E.depthTexture).__webglTexture);const Ne=E.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(fe=!0);const we=De.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(we[N])?F=we[N][z]:F=we[N],ae=!0):Ae.isWebGL2&&E.samples>0&&w.useMultisampledRTT(E)===!1?F=De.get(E).__webglMultisampledFramebuffer:Array.isArray(we)?F=we[z]:F=we,T.copy(E.viewport),D.copy(E.scissor),B=E.scissorTest}else T.copy(Y).multiplyScalar(X).floor(),D.copy(ee).multiplyScalar(X).floor(),B=ce;if(he.bindFramebuffer(O.FRAMEBUFFER,F)&&Ae.drawBuffers&&G&&he.drawBuffers(E,F),he.viewport(T),he.scissor(D),he.setScissorTest(B),ae){const ye=De.get(E.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+N,ye.__webglTexture,z)}else if(fe){const ye=De.get(E.texture),Ne=N||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,ye.__webglTexture,z||0,Ne)}C=-1},this.readRenderTargetPixels=function(E,N,z,G,F,ae,fe){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=De.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&fe!==void 0&&(xe=xe[fe]),xe){he.bindFramebuffer(O.FRAMEBUFFER,xe);try{const ye=E.texture,Ne=ye.format,we=ye.type;if(Ne!==It&&ue.convert(Ne)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ce=we===Ri&&(_e.has("EXT_color_buffer_half_float")||Ae.isWebGL2&&_e.has("EXT_color_buffer_float"));if(we!==bn&&ue.convert(we)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_TYPE)&&!(we===rn&&(Ae.isWebGL2||_e.has("OES_texture_float")||_e.has("WEBGL_color_buffer_float")))&&!Ce){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=E.width-G&&z>=0&&z<=E.height-F&&O.readPixels(N,z,G,F,ue.convert(Ne),ue.convert(we),ae)}finally{const ye=y!==null?De.get(y).__webglFramebuffer:null;he.bindFramebuffer(O.FRAMEBUFFER,ye)}}},this.copyFramebufferToTexture=function(E,N,z=0){const G=Math.pow(2,-z),F=Math.floor(N.image.width*G),ae=Math.floor(N.image.height*G);w.setTexture2D(N,0),O.copyTexSubImage2D(O.TEXTURE_2D,z,0,0,E.x,E.y,F,ae),he.unbindTexture()},this.copyTextureToTexture=function(E,N,z,G=0){const F=N.image.width,ae=N.image.height,fe=ue.convert(z.format),xe=ue.convert(z.type);w.setTexture2D(z,0),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,z.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,z.unpackAlignment),N.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,G,E.x,E.y,F,ae,fe,xe,N.image.data):N.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,G,E.x,E.y,N.mipmaps[0].width,N.mipmaps[0].height,fe,N.mipmaps[0].data):O.texSubImage2D(O.TEXTURE_2D,G,E.x,E.y,fe,xe,N.image),G===0&&z.generateMipmaps&&O.generateMipmap(O.TEXTURE_2D),he.unbindTexture()},this.copyTextureToTexture3D=function(E,N,z,G,F=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ae=E.max.x-E.min.x+1,fe=E.max.y-E.min.y+1,xe=E.max.z-E.min.z+1,ye=ue.convert(G.format),Ne=ue.convert(G.type);let we;if(G.isData3DTexture)w.setTexture3D(G,0),we=O.TEXTURE_3D;else if(G.isDataArrayTexture||G.isCompressedArrayTexture)w.setTexture2DArray(G,0),we=O.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,G.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,G.unpackAlignment);const Ce=O.getParameter(O.UNPACK_ROW_LENGTH),at=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Ut=O.getParameter(O.UNPACK_SKIP_PIXELS),gt=O.getParameter(O.UNPACK_SKIP_ROWS),cn=O.getParameter(O.UNPACK_SKIP_IMAGES),it=z.isCompressedTexture?z.mipmaps[F]:z.image;O.pixelStorei(O.UNPACK_ROW_LENGTH,it.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,it.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,E.min.x),O.pixelStorei(O.UNPACK_SKIP_ROWS,E.min.y),O.pixelStorei(O.UNPACK_SKIP_IMAGES,E.min.z),z.isDataTexture||z.isData3DTexture?O.texSubImage3D(we,F,N.x,N.y,N.z,ae,fe,xe,ye,Ne,it.data):z.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),O.compressedTexSubImage3D(we,F,N.x,N.y,N.z,ae,fe,xe,ye,it.data)):O.texSubImage3D(we,F,N.x,N.y,N.z,ae,fe,xe,ye,Ne,it),O.pixelStorei(O.UNPACK_ROW_LENGTH,Ce),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,at),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Ut),O.pixelStorei(O.UNPACK_SKIP_ROWS,gt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,cn),F===0&&G.generateMipmaps&&O.generateMipmap(we),he.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?w.setTextureCube(E,0):E.isData3DTexture?w.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?w.setTexture2DArray(E,0):w.setTexture2D(E,0),he.unbindTexture()},this.resetState=function(){R=0,A=0,y=null,he.reset(),Ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return on}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===sr?"display-p3":"srgb",t.unpackColorSpace=We.workingColorSpace===is?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===qe?Sn:ra}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Sn?qe:dt}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class vu extends xa{}vu.prototype.isWebGL1Renderer=!0;class xu extends tt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class bu{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Js,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=qt()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=qt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=qt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ct=new I;class lr{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix4(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyNormalMatrix(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.transformDirection(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}setX(e,t){return this.normalized&&(t=Ye(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ye(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ye(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ye(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=sn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=sn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=sn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=sn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ye(t,this.array),n=Ye(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ye(t,this.array),n=Ye(n,this.array),i=Ye(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ye(t,this.array),n=Ye(n,this.array),i=Ye(i,this.array),r=Ye(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Et(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new lr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Sc=new I,Mc=new $e,yc=new $e,rg=new I,Tc=new Fe,Ps=new I,zr=new Jt,Ec=new Fe,Gr=new ss;class Su extends Bt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=so,this.bindMatrix=new Fe,this.bindMatrixInverse=new Fe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Kt),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ps),this.boundingBox.expandByPoint(Ps)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Jt),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ps),this.boundingSphere.expandByPoint(Ps)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),zr.copy(this.boundingSphere),zr.applyMatrix4(i),e.ray.intersectsSphere(zr)!==!1&&(Ec.copy(i).invert(),Gr.copy(e.ray).applyMatrix4(Ec),!(this.boundingBox!==null&&Gr.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Gr)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new $e,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===so?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Pl?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Mc.fromBufferAttribute(i.attributes.skinIndex,e),yc.fromBufferAttribute(i.attributes.skinWeight,e),Sc.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const a=yc.getComponent(r);if(a!==0){const o=Mc.getComponent(r);Tc.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(rg.copy(Sc).applyMatrix4(Tc),a)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}}class ba extends tt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Mu extends ht{constructor(e=null,t=1,n=1,i,r,a,o,c,l=lt,u=lt,h,d){super(null,a,o,c,l,u,i,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ac=new Fe,og=new Fe;class ur{constructor(e=[],t=[]){this.uuid=qt(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Fe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Fe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:og;Ac.multiplyMatrices(o,t[r]),Ac.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new ur(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Mu(t,e,e,It,rn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new ba),this.bones.push(a),this.boneInverses.push(new Fe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class tr extends Et{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Mi=new Fe,wc=new Fe,Is=[],Rc=new Kt,ag=new Fe,zi=new Bt,Gi=new Jt;class yu extends Bt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new tr(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,ag)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Kt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Mi),Rc.copy(e.boundingBox).applyMatrix4(Mi),this.boundingBox.union(Rc)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Jt),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Mi),Gi.copy(e.boundingSphere).applyMatrix4(Mi),this.boundingSphere.union(Gi)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(zi.geometry=this.geometry,zi.material=this.material,zi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Gi.copy(this.boundingSphere),Gi.applyMatrix4(n),e.ray.intersectsSphere(Gi)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Mi),wc.multiplyMatrices(n,Mi),zi.matrixWorld=wc,zi.raycast(e,Is);for(let a=0,o=Is.length;a<o;a++){const c=Is[a];c.instanceId=r,c.object=this,t.push(c)}Is.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new tr(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Sa extends $t{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Te(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Cc=new I,Lc=new I,Pc=new Fe,Hr=new ss,Ds=new Jt;class hr extends tt{constructor(e=new Qt,t=new Sa){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Cc.fromBufferAttribute(t,i-1),Lc.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Cc.distanceTo(Lc);e.setAttribute("lineDistance",new kt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ds.copy(n.boundingSphere),Ds.applyMatrix4(i),Ds.radius+=r,e.ray.intersectsSphere(Ds)===!1)return;Pc.copy(i).invert(),Hr.copy(e.ray).applyMatrix4(Pc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=new I,u=new I,h=new I,d=new I,p=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){const f=Math.max(0,a.start),b=Math.min(g.count,a.start+a.count);for(let v=f,S=b-1;v<S;v+=p){const R=g.getX(v),A=g.getX(v+1);if(l.fromBufferAttribute(m,R),u.fromBufferAttribute(m,A),Hr.distanceSqToSegment(l,u,d,h)>c)continue;d.applyMatrix4(this.matrixWorld);const C=e.ray.origin.distanceTo(d);C<e.near||C>e.far||t.push({distance:C,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const f=Math.max(0,a.start),b=Math.min(m.count,a.start+a.count);for(let v=f,S=b-1;v<S;v+=p){if(l.fromBufferAttribute(m,v),u.fromBufferAttribute(m,v+1),Hr.distanceSqToSegment(l,u,d,h)>c)continue;d.applyMatrix4(this.matrixWorld);const A=e.ray.origin.distanceTo(d);A<e.near||A>e.far||t.push({distance:A,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}const Ic=new I,Dc=new I;class Tu extends hr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Ic.fromBufferAttribute(t,i),Dc.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Ic.distanceTo(Dc);e.setAttribute("lineDistance",new kt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Eu extends hr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Ma extends $t{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Te(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Uc=new Fe,ko=new ss,Us=new Jt,Ns=new I;class Au extends tt{constructor(e=new Qt,t=new Ma){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Us.copy(n.boundingSphere),Us.applyMatrix4(i),Us.radius+=r,e.ray.intersectsSphere(Us)===!1)return;Uc.copy(i).invert(),ko.copy(e.ray).applyMatrix4(Uc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,h=n.attributes.position;if(l!==null){const d=Math.max(0,a.start),p=Math.min(l.count,a.start+a.count);for(let g=d,_=p;g<_;g++){const m=l.getX(g);Ns.fromBufferAttribute(h,m),Nc(Ns,m,c,i,e,t,this)}}else{const d=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let g=d,_=p;g<_;g++)Ns.fromBufferAttribute(h,g),Nc(Ns,g,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Nc(s,e,t,n,i,r,a){const o=ko.distanceSqToPoint(s);if(o<t){const c=new I;ko.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,object:a})}}class ya extends ht{constructor(e,t,n,i,r,a,o,c,l){super(e,t,n,i,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class dr extends $t{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Te(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=oa,this.normalScale=new He(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class an extends dr{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new He(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return yt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Te(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Te(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Te(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function Os(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function cg(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function lg(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Oc(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let c=0;c!==e;++c)i[a++]=s[o+c]}return i}function wu(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}class Ui{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Ru extends Ui{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Po,endingEnd:Po}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,a=e+1,o=i[r],c=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Io:r=e,o=2*t-n;break;case Do:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Io:a=e,c=2*n-t;break;case Do:a=1,c=n+i[1]-i[0];break;default:a=e-1,c=t}const l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(n-t)/(i-t),_=g*g,m=_*g,f=-d*m+2*d*_-d*g,b=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,v=(-1-p)*m+(1.5+p)*_+.5*g,S=p*m-p*_;for(let R=0;R!==o;++R)r[R]=f*a[u+R]+b*a[l+R]+v*a[c+R]+S*a[h+R];return r}}class Cu extends Ui{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=(n-t)/(i-t),h=1-u;for(let d=0;d!==o;++d)r[d]=a[l+d]*h+a[c+d]*u;return r}}class Lu extends Ui{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class en{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Os(t,this.TimeBufferType),this.values=Os(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Os(e.times,Array),values:Os(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Lu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Cu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ru(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ci:t=this.InterpolantFactoryMethodDiscrete;break;case ei:t=this.InterpolantFactoryMethodLinear;break;case Vs:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ci;case this.InterpolantFactoryMethodLinear:return ei;case this.InterpolantFactoryMethodSmooth:return Vs}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(i!==void 0&&cg(i))for(let o=0,c=i.length;o!==c;++o){const l=i[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Vs,r=e.length-1;let a=1;for(let o=1;o<r;++o){let c=!1;const l=e[o],u=e[o+1];if(l!==u&&(o!==1||l!==e[0]))if(i)c=!0;else{const h=o*n,d=h-n,p=h+n;for(let g=0;g!==n;++g){const _=t[h+g];if(_!==t[d+g]||_!==t[p+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];const h=o*n,d=a*n;for(let p=0;p!==n;++p)t[d+p]=t[h+p]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}en.prototype.TimeBufferType=Float32Array;en.prototype.ValueBufferType=Float32Array;en.prototype.DefaultInterpolation=ei;class si extends en{}si.prototype.ValueTypeName="bool";si.prototype.ValueBufferType=Array;si.prototype.DefaultInterpolation=Ci;si.prototype.InterpolantFactoryMethodLinear=void 0;si.prototype.InterpolantFactoryMethodSmooth=void 0;class Ta extends en{}Ta.prototype.ValueTypeName="color";class ti extends en{}ti.prototype.ValueTypeName="number";class Pu extends Ui{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(i-t);let l=e*o;for(let u=l+o;l!==u;l+=4)Mn.slerpFlat(r,0,a,l-o,a,l,c);return r}}class Fn extends en{InterpolantFactoryMethodLinear(e){return new Pu(this.times,this.values,this.getValueSize(),e)}}Fn.prototype.ValueTypeName="quaternion";Fn.prototype.DefaultInterpolation=ei;Fn.prototype.InterpolantFactoryMethodSmooth=void 0;class ri extends en{}ri.prototype.ValueTypeName="string";ri.prototype.ValueBufferType=Array;ri.prototype.DefaultInterpolation=Ci;ri.prototype.InterpolantFactoryMethodLinear=void 0;ri.prototype.InterpolantFactoryMethodSmooth=void 0;class ni extends en{}ni.prototype.ValueTypeName="vector";class Iu{constructor(e,t=-1,n,i=zl){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=qt(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(hg(n[a]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=n.length;r!==a;++r)t.push(en.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);const u=lg(c);c=Oc(c,1,u),l=Oc(l,1,u),!i&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new ti(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){const l=e[o],u=l.name.match(r);if(u&&u.length>1){const h=u[1];let d=i[h];d||(i[h]=d=[]),d.push(l)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,d,p,g,_){if(p.length!==0){const m=[],f=[];wu(p,m,f,g),m.length!==0&&_.push(new h(d,m,f))}},i=[],r=e.name||"default",a=e.fps||30,o=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let h=0;h<l.length;h++){const d=l[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const p={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)p[d[g].morphTargets[_]]=-1;for(const _ in p){const m=[],f=[];for(let b=0;b!==d[g].morphTargets.length;++b){const v=d[g];m.push(v.time),f.push(v.morphTarget===_?1:0)}i.push(new ti(".morphTargetInfluence["+_+"]",m,f))}c=p.length*a}else{const p=".bones["+t[h].name+"]";n(ni,p+".position",d,"pos",i),n(Fn,p+".quaternion",d,"rot",i),n(ni,p+".scale",d,"scl",i)}}return i.length===0?null:new this(r,c,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function ug(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ti;case"vector":case"vector2":case"vector3":case"vector4":return ni;case"color":return Ta;case"quaternion":return Fn;case"bool":case"boolean":return si;case"string":return ri}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function hg(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=ug(s.type);if(s.times===void 0){const t=[],n=[];wu(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const _n={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class Du{constructor(e,t,n){const i=this;let r=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,r===!1&&i.onStart!==void 0&&i.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=l.length;h<d;h+=2){const p=l[h],g=l[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}}const Uu=new Du;class oi{constructor(e){this.manager=e!==void 0?e:Uu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}oi.DEFAULT_MATERIAL_NAME="__DEFAULT";const pn={};class dg extends Error{constructor(e,t){super(e),this.response=t}}class Ea extends oi{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=_n.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(pn[e]!==void 0){pn[e].push({onLoad:t,onProgress:n,onError:i});return}pn[e]=[],pn[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=pn[e],h=l.body.getReader(),d=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),p=d?parseInt(d):0,g=p!==0;let _=0;const m=new ReadableStream({start(f){b();function b(){h.read().then(({done:v,value:S})=>{if(v)f.close();else{_+=S.byteLength;const R=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:p});for(let A=0,y=u.length;A<y;A++){const C=u[A];C.onProgress&&C.onProgress(R)}f.enqueue(S),b()}})}}});return new Response(m)}else throw new dg(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return l.json();default:if(o===void 0)return l.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),d=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(d);return l.arrayBuffer().then(g=>p.decode(g))}}}).then(l=>{_n.add(e,l);const u=pn[e];delete pn[e];for(let h=0,d=u.length;h<d;h++){const p=u[h];p.onLoad&&p.onLoad(l)}}).catch(l=>{const u=pn[e];if(u===void 0)throw this.manager.itemError(e),l;delete pn[e];for(let h=0,d=u.length;h<d;h++){const p=u[h];p.onError&&p.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Nu extends oi{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=_n.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o=ts("img");function c(){u(),_n.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(h){u(),i&&i(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class Aa extends oi{constructor(e){super(e)}load(e,t,n,i){const r=new ht,a=new Nu(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class os extends tt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Te(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Vr=new Fe,Fc=new I,Bc=new I;class wa{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new He(512,512),this.map=null,this.mapPass=null,this.matrix=new Fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new rr,this._frameExtents=new He(1,1),this._viewportCount=1,this._viewports=[new $e(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Fc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Fc),Bc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Bc),t.updateMatrixWorld(),Vr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Vr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class fg extends wa{constructor(){super(new Tt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Li*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Ou extends os{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(tt.DEFAULT_UP),this.updateMatrix(),this.target=new tt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new fg}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const kc=new Fe,Hi=new I,Wr=new I;class pg extends wa{constructor(){super(new Tt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new He(4,2),this._viewportCount=6,this._viewports=[new $e(2,1,1,1),new $e(0,1,1,1),new $e(3,1,1,1),new $e(1,1,1,1),new $e(3,0,1,1),new $e(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Hi.setFromMatrixPosition(e.matrixWorld),n.position.copy(Hi),Wr.copy(n.position),Wr.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Wr),n.updateMatrixWorld(),i.makeTranslation(-Hi.x,-Hi.y,-Hi.z),kc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(kc)}}class Fu extends os{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new pg}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class mg extends wa{constructor(){super(new ar(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Bu extends os{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(tt.DEFAULT_UP),this.updateMatrix(),this.target=new tt,this.shadow=new mg}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class ku extends os{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ai{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class zu extends oi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=_n.get(e);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{i&&i(l)});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return _n.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){i&&i(l),_n.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});_n.add(e,c),r.manager.itemStart(e)}}const Ra="\\[\\]\\.:\\/",gg=new RegExp("["+Ra+"]","g"),Ca="[^"+Ra+"]",_g="[^"+Ra.replace("\\.","")+"]",vg=/((?:WC+[\/:])*)/.source.replace("WC",Ca),xg=/(WCOD+)?/.source.replace("WCOD",_g),bg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ca),Sg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ca),Mg=new RegExp("^"+vg+xg+bg+Sg+"$"),yg=["material","materials","bones","map"];class Tg{constructor(e,t,n){const i=n||je.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class je{constructor(e,t,n){this.path=t,this.parsedPath=n||je.parseTrackName(t),this.node=je.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new je.Composite(e,t,n):new je(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(gg,"")}static parseTrackName(e){const t=Mg.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);yg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const c=n(o.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=je.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const a=e[i];if(a===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}je.Composite=Tg;je.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};je.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};je.prototype.GetterByBindingType=[je.prototype._getValue_direct,je.prototype._getValue_array,je.prototype._getValue_arrayElement,je.prototype._getValue_toArray];je.prototype.SetterByBindingTypeAndVersioning=[[je.prototype._setValue_direct,je.prototype._setValue_direct_setNeedsUpdate,je.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[je.prototype._setValue_array,je.prototype._setValue_array_setNeedsUpdate,je.prototype._setValue_array_setMatrixWorldNeedsUpdate],[je.prototype._setValue_arrayElement,je.prototype._setValue_arrayElement_setNeedsUpdate,je.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[je.prototype._setValue_fromArray,je.prototype._setValue_fromArray_setNeedsUpdate,je.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:nr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=nr);const Eg=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:Yo,AddEquation:Pn,AddOperation:El,AdditiveBlending:Qr,AgXToneMapping:Ll,AlphaFormat:Ul,AlwaysCompare:Kl,AlwaysDepth:vl,AlwaysStencilFunc:Uo,AmbientLight:ku,AnimationClip:Iu,ArrayCamera:_u,AttachedBindMode:so,BackSide:Pt,BasicDepthPacking:Hl,BasicShadowMap:el,Bone:ba,BooleanKeyframeTrack:si,Box3:Kt,BoxGeometry:Ii,BufferAttribute:Et,BufferGeometry:Qt,ByteType:Il,Cache:_n,Camera:ma,CanvasTexture:ya,CineonToneMapping:Rl,ClampToEdgeWrapping:vt,Color:Te,ColorKeyframeTrack:Ta,ColorManagement:We,ConstantAlphaFactor:ml,ConstantColorFactor:fl,CubeCamera:ou,CubeReflectionMapping:$n,CubeRefractionMapping:Kn,CubeTexture:ga,CubeUVReflectionMapping:ns,CubicInterpolant:Ru,CullFaceBack:Jr,CullFaceFront:Qc,CullFaceNone:Jc,CustomBlending:tl,CustomToneMapping:Cl,Data3DTexture:nu,DataArrayTexture:ha,DataTexture:Mu,DefaultLoadingManager:Uu,DepthFormat:Un,DepthStencilFormat:Qn,DepthTexture:va,DetachedBindMode:Pl,DirectionalLight:Bu,DiscreteInterpolant:Lu,DisplayP3ColorSpace:sr,DoubleSide:Yt,DstAlphaFactor:cl,DstColorFactor:ul,EqualCompare:Zl,EqualDepth:bl,EquirectangularReflectionMapping:Ys,EquirectangularRefractionMapping:qs,Euler:rs,EventDispatcher:ii,FileLoader:Ea,Float32BufferAttribute:kt,FloatType:rn,FrontSide:xt,Frustum:rr,GLSL3:No,GreaterCompare:Yl,GreaterDepth:Ml,GreaterEqualCompare:$l,GreaterEqualDepth:Sl,Group:In,HalfFloatType:Ri,ImageBitmapLoader:zu,ImageLoader:Nu,ImageUtils:la,InstancedBufferAttribute:tr,InstancedMesh:yu,IntType:Ko,InterleavedBuffer:bu,InterleavedBufferAttribute:lr,Interpolant:Ui,InterpolateDiscrete:Ci,InterpolateLinear:ei,InterpolateSmooth:Vs,KeepStencilOp:Xn,KeyframeTrack:en,Layers:da,LessCompare:Xl,LessDepth:xl,LessEqualCompare:aa,LessEqualDepth:qi,Light:os,Line:hr,LineBasicMaterial:Sa,LineLoop:Eu,LineSegments:Tu,LinearDisplayP3ColorSpace:is,LinearEncoding:ra,LinearFilter:ut,LinearInterpolant:Cu,LinearMipmapLinearFilter:Nn,LinearMipmapNearestFilter:$o,LinearSRGBColorSpace:dt,LinearToneMapping:Al,LinearTransfer:Ki,Loader:oi,LoaderUtils:Ai,LoadingManager:Du,LuminanceAlphaFormat:Ol,LuminanceFormat:Nl,Material:$t,MathUtils:Jl,Matrix3:Oe,Matrix4:Fe,MaxEquation:io,Mesh:Bt,MeshBasicMaterial:gn,MeshDepthMaterial:pu,MeshDistanceMaterial:mu,MeshPhysicalMaterial:an,MeshStandardMaterial:dr,MinEquation:no,MirroredRepeatWrapping:$i,MixOperation:Tl,MultiplyBlending:to,MultiplyOperation:Zo,NearestFilter:lt,NearestMipmapLinearFilter:ji,NearestMipmapNearestFilter:$s,NeverCompare:jl,NeverDepth:_l,NoBlending:vn,NoColorSpace:Ft,NoToneMapping:xn,NormalAnimationBlendMode:zl,NormalBlending:qn,NotEqualCompare:ql,NotEqualDepth:yl,NumberKeyframeTrack:ti,Object3D:tt,ObjectSpaceNormalMap:Wl,OneFactor:rl,OneMinusConstantAlphaFactor:gl,OneMinusConstantColorFactor:pl,OneMinusDstAlphaFactor:ll,OneMinusDstColorFactor:hl,OneMinusSrcAlphaFactor:Zs,OneMinusSrcColorFactor:al,OrthographicCamera:ar,P3Primaries:Qi,PCFShadowMap:Xo,PCFSoftShadowMap:Wi,PMREMGenerator:Fo,PerspectiveCamera:Tt,Plane:Cn,PlaneGeometry:or,PointLight:Fu,Points:Au,PointsMaterial:Ma,PropertyBinding:je,Quaternion:Mn,QuaternionKeyframeTrack:Fn,QuaternionLinearInterpolant:Pu,RED_GREEN_RGTC2_Format:Co,RED_RGTC1_Format:kl,REVISION:nr,RGBADepthPacking:Vl,RGBAFormat:It,RGBAIntegerFormat:na,RGBA_ASTC_10x10_Format:yo,RGBA_ASTC_10x5_Format:bo,RGBA_ASTC_10x6_Format:So,RGBA_ASTC_10x8_Format:Mo,RGBA_ASTC_12x10_Format:To,RGBA_ASTC_12x12_Format:Eo,RGBA_ASTC_4x4_Format:ho,RGBA_ASTC_5x4_Format:fo,RGBA_ASTC_5x5_Format:po,RGBA_ASTC_6x5_Format:mo,RGBA_ASTC_6x6_Format:go,RGBA_ASTC_8x5_Format:_o,RGBA_ASTC_8x6_Format:vo,RGBA_ASTC_8x8_Format:xo,RGBA_BPTC_Format:Hs,RGBA_ETC2_EAC_Format:uo,RGBA_PVRTC_2BPPV1_Format:co,RGBA_PVRTC_4BPPV1_Format:ao,RGBA_S3TC_DXT1_Format:ks,RGBA_S3TC_DXT3_Format:zs,RGBA_S3TC_DXT5_Format:Gs,RGB_BPTC_SIGNED_Format:Ao,RGB_BPTC_UNSIGNED_Format:wo,RGB_ETC1_Format:ia,RGB_ETC2_Format:lo,RGB_PVRTC_2BPPV1_Format:oo,RGB_PVRTC_4BPPV1_Format:ro,RGB_S3TC_DXT1_Format:Bs,RGFormat:Bl,RGIntegerFormat:ta,Ray:ss,Rec709Primaries:Ji,RedFormat:Fl,RedIntegerFormat:ea,ReinhardToneMapping:wl,RenderTarget:tu,RepeatWrapping:Jn,ReverseSubtractEquation:il,SIGNED_RED_GREEN_RGTC2_Format:Lo,SIGNED_RED_RGTC1_Format:Ro,SRGBColorSpace:qe,SRGBTransfer:et,Scene:xu,ShaderChunk:Le,ShaderLib:Zt,ShaderMaterial:Dt,ShortType:Dl,Skeleton:ur,SkinnedMesh:Su,Source:ua,Sphere:Jt,SpotLight:Ou,SrcAlphaFactor:Xs,SrcAlphaSaturateFactor:dl,SrcColorFactor:ol,StaticDrawUsage:Js,StringKeyframeTrack:ri,SubtractEquation:nl,SubtractiveBlending:eo,TangentSpaceNormalMap:oa,Texture:ht,TextureLoader:Aa,Triangle:Vt,TriangleFanDrawMode:Ks,TriangleStripDrawMode:sa,TrianglesDrawMode:Gl,UVMapping:qo,Uint16BufferAttribute:fa,Uint32BufferAttribute:pa,UniformsLib:te,UniformsUtils:ru,UnsignedByteType:bn,UnsignedInt248Type:Dn,UnsignedIntType:mn,UnsignedShort4444Type:Jo,UnsignedShort5551Type:Qo,UnsignedShortType:ir,VSMShadowMap:nn,Vector2:He,Vector3:I,Vector4:$e,VectorKeyframeTrack:ni,WebGL1Renderer:vu,WebGLCoordinateSystem:on,WebGLCubeRenderTarget:au,WebGLRenderTarget:On,WebGLRenderer:xa,WebGLUtils:gu,WebGPUCoordinateSystem:es,WrapAroundEnding:Do,ZeroCurvatureEnding:Po,ZeroFactor:sl,ZeroSlopeEnding:Io,_SRGBAFormat:Qs,createCanvasElement:eu,sRGBEncoding:Sn},Symbol.toStringTag,{value:"Module"}));class Ag{constructor(){this.isMobile=this.detectMobile(),this.isLowEnd=!1,this.shadowMapTypes={basic:el,pcf:Wi},this.optimizations={pixelRatio:window.devicePixelRatio,antialias:!0,shadowMapSize:2048,shadowMapType:Eg?Wi:1,textureQuality:1,lottieFPS:60,enableShadows:!1,maxTextureSize:4096},this.detectLowEnd()}detectMobile(){const e=navigator.userAgent||navigator.vendor||window.opera,n=/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(e),i="ontouchstart"in window||navigator.maxTouchPoints>0,r=window.innerWidth<=768;return n||i&&r}detectLowEnd(){const e=navigator.hardwareConcurrency||4,t=navigator.deviceMemory||4;this.isMobile&&(this.isLowEnd=e<4||t<4),window.innerWidth<375&&(this.isLowEnd=!0)}optimizeRenderer(e){e&&(e.setPixelRatio(this.optimizations.pixelRatio),e.shadowMap&&(e.shadowMap.enabled=!1,e.shadowMap.type=Wi))}optimizeTexture(e){if(!e)return e;if(this.isMobile&&e.image){const t=this.optimizations.maxTextureSize;(e.image.width>t||e.image.height>t)&&(e.minFilter=ut,e.magFilter=ut,e.generateMipmaps=!1)}return e}getRendererOptions(){return{antialias:this.optimizations.antialias,alpha:!0,powerPreference:"high-performance",precision:"highp"}}getShadowMapSize(){return this.optimizations.shadowMapSize}getPixelRatio(){return this.optimizations.pixelRatio}getLottieFPS(){return this.optimizations.lottieFPS}getTextureQuality(){return this.optimizations.textureQuality}getIsMobile(){return this.isMobile}getIsLowEnd(){return this.isLowEnd}createThrottledUpdate(e,t=null){t||(t=60);const n=1e3/t;let i=0;return r=>{r-i>=n&&(e(),i=r)}}optimizeGeometry(e){return!e||!this.isLowEnd,e}getOptimizations(){return{...this.optimizations}}}class lv{constructor(e){this.canvas=e,this.renderer=null,this.scene=null,this.camera=null,this.card=null,this.mobileOptimizer=null,this.lights={ambient:null,directional1:null,directional2:null,directional3:null},this.init()}init(){this.card=document.querySelector(".card"),this.mobileOptimizer=new Ag;const e=this.mobileOptimizer.getRendererOptions();this.renderer=new xa({canvas:this.canvas,antialias:e.antialias,alpha:e.alpha,powerPreference:e.powerPreference,precision:e.precision}),this.mobileOptimizer.optimizeRenderer(this.renderer),this.renderer.toneMapping=Yo,this.renderer.toneMappingExposure=1.2,this.renderer.outputEncoding=Sn,this.renderer.shadowMap.enabled=!1,this.scene=new xu,this.scene.background=null,this.setupLighting(),this.setupCamera(),this.setupResize()}setupLighting(){const e=new ku(16777215,.5);this.scene.add(e),this.lights.ambient=e}getLights(){return this.lights}setupCamera(){this.camera=new Tt(90,this.card.clientWidth/this.card.clientHeight,.1,2e3),this.introStartZ=this.mobileOptimizer&&this.mobileOptimizer.getIsMobile()?-10:-28,this.normalStartZ=this.mobileOptimizer&&this.mobileOptimizer.getIsMobile()?-10:-28,this.startY=8,this.endY=8,this.defaultCameraRotationX=0,this.camera.position.set(0,this.startY,this.introStartZ)}setupResize(){window.addEventListener("resize",()=>this.resize()),this.resize()}resize(){if(!this.card||!this.renderer||!this.camera)return;const e=this.card.clientWidth,t=this.card.clientHeight;this.renderer.setSize(e,t),this.camera.aspect=e/t,this.camera.updateProjectionMatrix()}render(){this.renderer.render(this.scene,this.camera)}getScene(){return this.scene}getCamera(){return this.camera}getRenderer(){return this.renderer}getMobileOptimizer(){return this.mobileOptimizer}}class uv{constructor(){this.sinkFontLoaded=!1}async loadSinkFont(){if(this.sinkFontLoaded)return Promise.resolve();try{const t=await new FontFace("Sink","url(_assets/_style/_fonts/Sink.otf)").load();return document.fonts.add(t),this.sinkFontLoaded=!0,t}catch(e){return console.error("Error loading Sink font:",e),this.sinkFontLoaded=!1,null}}isFontLoaded(){return this.sinkFontLoaded}}class hv{constructor(e,t,n=null){this.camera=e,this.sceneSetup=t,this.targetZ=e.position.z,this.maxZ=t.normalStartZ,this.minZ=-1e3,this.cameraMoveSpeed=.15,this.scrollCheckpoints=n||[],this.currentCheckpointIndex=0,this.isMovingToCheckpoint=!1,this.movementThreshold=.5,this.isMobile=this.detectMobile(),this.useCheckpointMode=!1,this.isMobile&&(this.useCheckpointMode=!1),this.useLinearMovement=!1,this.linearStartZ=null,this.linearTargetZ=null,this.linearStartTime=null,this.linearDuration=0,this.timeline=null,this.timelineSegmentIndex=0,this.timelineStartTime=null,this.timelineSegmentStartTime=null,this.timelineSegmentStartZ=null,this.useTimeline=!1,this.postPauseMovement=null,this.targetCameraX=0,this.targetCameraY=t.startY,this.targetCameraRotationX=t.defaultCameraRotationX,this.targetCameraRotationY=0,this.targetCameraRotationZ=0,this.useManualY=!1,this.useManualRotation=!0,this.lockOnTarget=null,this.lockOnOffset=new I(0,10,0),this.introComplete=!1,this.introDuration=2e3,this.introStartTime=Date.now(),this.scrollSpeed=this.isMobile?4:8,this.touchStartY=null,this.touchStartZ=null,this.touchScrollSpeed=this.isMobile?.25:.5,this.scrollCheckpoints.length>0&&(this.currentCheckpointIndex=this.findNearestCheckpointIndex(this.camera.position.z)),this.init()}init(){this.setupScrollControls(),this.setupTouchControls()}setupScrollControls(){const e=document.querySelector(".card");e&&e.addEventListener("wheel",t=>{if(!(window.checkpointController&&window.USE_CHECKPOINT_SCROLL)&&(t.preventDefault(),!(this.isMovingToCheckpoint||this.useTimeline)))if(this.useCheckpointMode&&!this.isMobile&&this.scrollCheckpoints.length>0){const n=t.deltaY>0?1:-1;this.navigateToCheckpoint(this.currentCheckpointIndex+n)}else{let n=t.deltaY;t.deltaMode===1?n*=16:t.deltaMode===2&&(n*=window.innerHeight);const i=n*this.scrollSpeed*.008;this.targetZ-=i,this.targetZ=Math.max(this.minZ,Math.min(this.maxZ,this.targetZ))}},{passive:!1})}setupTouchControls(){const e=document.querySelector(".card");if(!e)return;let t=null;e.addEventListener("touchstart",n=>{this.isMovingToCheckpoint||this.useTimeline||n.touches.length===1&&(this.touchStartY=n.touches[0].clientY,this.touchStartZ=this.camera.position.z,this.scrollCheckpoints.length>0&&(t=this.currentCheckpointIndex))},{passive:!0}),e.addEventListener("touchmove",n=>{if(n.touches.length!==1||this.touchStartY===null)return;if(n.preventDefault(),this.isMovingToCheckpoint||this.useTimeline){this.touchStartY=null,this.touchStartZ=null,t=null;return}const r=n.touches[0].clientY-this.touchStartY;if(Math.abs(r)>50){if(this.isMovingToCheckpoint||this.useTimeline)return;if(this.useCheckpointMode&&!this.isMobile&&this.scrollCheckpoints.length>0&&t!==null){const o=r>0?-1:1,c=t+o;this.navigateToCheckpoint(c)}else this.targetZ=this.touchStartZ-r*this.touchScrollSpeed,this.targetZ=Math.max(this.minZ,Math.min(this.maxZ,this.targetZ))}},{passive:!1}),e.addEventListener("touchend",()=>{this.touchStartY=null,this.touchStartZ=null,t=null})}updateIntroAnimation(){if(this.introComplete)return;const e=Date.now()-this.introStartTime,t=Math.min(e/this.introDuration,1),n=1-Math.pow(1-t,3);this.targetZ=this.sceneSetup.introStartZ-(this.sceneSetup.introStartZ-this.sceneSetup.normalStartZ)*n,t>=1&&(this.introComplete=!0,this.targetZ=this.sceneSetup.normalStartZ)}update(e){if(this.introComplete||this.updateIntroAnimation(),this.useTimeline&&this.timeline&&this.timeline.length>0)this.updateTimelineMovement();else if(this.useLinearMovement&&this.linearStartTime!==null&&this.linearDuration>0){const t=(Date.now()-this.linearStartTime)/1e3,n=Math.min(1,t/this.linearDuration);this.camera.position.z=this.linearStartZ+(this.linearTargetZ-this.linearStartZ)*n,n>=1&&(this.useLinearMovement=!1,this.camera.position.z=this.linearTargetZ)}else if(this.useCheckpointMode){const t=this.getCurrentCheckpointSpeed();this.camera.position.z+=(this.targetZ-this.camera.position.z)*t}else this.camera.position.z+=(this.targetZ-this.camera.position.z)*.4;if(!this.useTimeline&&this.scrollCheckpoints.length>0&&(Math.abs(this.camera.position.z-this.targetZ)<this.movementThreshold?(this.isMovingToCheckpoint=!1,this.currentCheckpointIndex=this.findNearestCheckpointIndex(this.camera.position.z)):this.useCheckpointMode&&(this.isMovingToCheckpoint=!0)),this.camera.position.x+=(this.targetCameraX-this.camera.position.x)*this.cameraMoveSpeed,this.useManualY)this.camera.position.y+=(this.targetCameraY-this.camera.position.y)*this.cameraMoveSpeed;else{const t=this.sceneSetup.introStartZ-0,n=(this.sceneSetup.introStartZ-this.camera.position.z)/t,i=Math.max(0,Math.min(1,n)),r=this.sceneSetup.startY-(this.sceneSetup.startY-this.sceneSetup.endY)*i;this.camera.position.y+=(r-this.camera.position.y)*this.cameraMoveSpeed,this.targetCameraY=this.camera.position.y}if(this.lockOnTarget){const t=new I;this.lockOnTarget.getWorldPosition(t),t.add(this.lockOnOffset),this.camera.lookAt(t)}else if(this.useManualRotation){const t=this.targetCameraRotationX*Math.PI/180,n=this.targetCameraRotationY*Math.PI/180,i=this.targetCameraRotationZ*Math.PI/180;this.camera.rotation.x+=(t-this.camera.rotation.x)*this.cameraMoveSpeed,this.camera.rotation.y+=(n-this.camera.rotation.y)*this.cameraMoveSpeed,this.camera.rotation.z+=(i-this.camera.rotation.z)*this.cameraMoveSpeed}else this.camera.lookAt(0,10,this.camera.position.z-200)}setTargetZ(e){this.introComplete=!0,this.targetZ=Math.max(this.minZ,Math.min(this.maxZ,e))}setLinearTargetZ(e,t){this.targetZ=Math.max(this.minZ,Math.min(this.maxZ,e)),this.linearStartZ=this.camera.position.z,this.linearTargetZ=this.targetZ,this.linearStartTime=Date.now(),this.linearDuration=t,this.useLinearMovement=!0,this.introComplete=!0}getTargetZ(){return this.targetZ}getMaxZ(){return this.maxZ}getMinZ(){return this.minZ}getCameraZ(){return this.camera.position.z}setLockOnTarget(e,t=null){this.lockOnTarget=e,t&&this.lockOnOffset.copy(t),e&&(this.useManualRotation=!1)}clearLockOnTarget(){this.lockOnTarget=null}findNearestCheckpointIndex(e){if(this.scrollCheckpoints.length===0)return 0;let t=0,n=Math.abs(this.scrollCheckpoints[0].z-e);for(let i=1;i<this.scrollCheckpoints.length;i++){const r=Math.abs(this.scrollCheckpoints[i].z-e);r<n&&(n=r,t=i)}return t}navigateToCheckpoint(e){if(this.scrollCheckpoints.length===0||this.isMovingToCheckpoint||this.useTimeline||(e=Math.max(0,Math.min(this.scrollCheckpoints.length-1,e)),e===this.currentCheckpointIndex))return;const t=this.scrollCheckpoints[e];this.currentCheckpointIndex=e,this.targetZ=t.z,this.cameraMoveSpeed=t.speed,this.isMovingToCheckpoint=!0,this.introComplete=!0,t.timeline&&Array.isArray(t.timeline)&&t.timeline.length>0?(this.timeline=[...t.timeline],this.timelineSegmentIndex=0,this.timelineStartTime=Date.now(),this.useTimeline=!0,this.useLinearMovement=!1,this.startTimelineSegment(0)):(this.useTimeline=!1,this.timeline=null)}startTimelineSegment(e){if(!this.timeline||e>=this.timeline.length){this.useTimeline=!1,this.isMovingToCheckpoint=!1;return}const t=this.timeline[e];if(this.timelineSegmentStartTime=Date.now(),t.type==="move"){t.fromZ!==void 0?(this.timelineSegmentStartZ=t.fromZ,e===0&&(this.camera.position.z=t.fromZ)):e===0&&(this.timelineSegmentStartZ=this.camera.position.z);const n=t.toZ!==void 0?t.toZ:this.targetZ;this.targetZ=n}else t.type==="pause"&&(t.atZ!==void 0?(this.timelineSegmentStartZ=t.atZ,e===0&&(this.camera.position.z=t.atZ)):e===0&&(this.timelineSegmentStartZ=this.camera.position.z),this.targetZ=this.timelineSegmentStartZ,this.camera.position.z=this.timelineSegmentStartZ)}updateTimelineMovement(){if(!this.timeline||this.timelineSegmentIndex>=this.timeline.length){this.useTimeline=!1,this.isMovingToCheckpoint=!1,this.currentCheckpointIndex=this.findNearestCheckpointIndex(this.camera.position.z);return}if(this.postPauseMovement){const r=(Date.now()-this.postPauseMovement.startTime)/1e3,a=Math.min(1,r/(this.postPauseMovement.duration/1e3)),o=1-Math.pow(1-a,3),c=this.postPauseMovement.startZ+(this.postPauseMovement.targetZ-this.postPauseMovement.startZ)*o;this.camera.position.z=c,this.targetZ=c;const l=this.postPauseMovement.startY+(this.postPauseMovement.targetY-this.postPauseMovement.startY)*o;this.camera.position.y=l,this.targetCameraY=l,a>=1?(this.camera.position.z=this.postPauseMovement.targetZ,this.camera.position.y=this.postPauseMovement.targetY,console.log(`[Post-pause movement] Complete: Z ${this.postPauseMovement.targetZ.toFixed(2)}, Y ${this.postPauseMovement.targetY.toFixed(2)}`),this.postPauseMovement=null,this.timelineSegmentIndex++,this.startTimelineSegment(this.timelineSegmentIndex)):this.isMovingToCheckpoint=!0;return}const e=this.timeline[this.timelineSegmentIndex],t=Date.now(),n=(t-this.timelineSegmentStartTime)/1e3;if(e.type==="move"){const i=Math.min(1,n/e.duration),r=this.applyEasing(i,e.easing||"linear"),a=this.timelineSegmentStartZ,o=e.toZ!==void 0?e.toZ:this.targetZ;this.camera.position.z=a+(o-a)*r,this.targetZ=this.camera.position.z,i>=1?(this.camera.position.z=o,this.timelineSegmentStartZ=o,this.timelineSegmentIndex++,this.startTimelineSegment(this.timelineSegmentIndex)):this.isMovingToCheckpoint=!0}else if(e.type==="pause"){const i=this.timelineSegmentStartZ;if(this.camera.position.z=i,this.targetZ=i,n>=e.duration){const r=this.camera.position.y,o=i+30,l=r+15,u=600;console.log(`[Post-pause movement] Starting: Z ${i.toFixed(2)} → ${o.toFixed(2)}, Y ${r.toFixed(2)} → ${l.toFixed(2)}`),this.postPauseMovement={startZ:i,targetZ:o,startY:r,targetY:l,startTime:t,duration:u}}else this.isMovingToCheckpoint=!0}}applyEasing(e,t){if(e<=0)return 0;if(e>=1)return 1;switch(t){case"linear":return e;case"ease":case"easeInOut":return e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2;case"easeIn":return e*e*e;case"easeOut":return 1-Math.pow(1-e,3);default:return e}}getCurrentCheckpointSpeed(){if(this.scrollCheckpoints.length===0)return this.cameraMoveSpeed;const e=this.scrollCheckpoints[this.currentCheckpointIndex];return e?e.speed:this.cameraMoveSpeed}toggleCheckpointMode(){return this.isMobile?(this.useCheckpointMode=!1,!1):(this.useCheckpointMode=!this.useCheckpointMode,this.useCheckpointMode&&this.scrollCheckpoints.length>0&&(this.currentCheckpointIndex=this.findNearestCheckpointIndex(this.camera.position.z)),this.useCheckpointMode)}setCheckpointMode(e){if(this.isMobile){this.useCheckpointMode=!1;return}this.useCheckpointMode=e,this.useCheckpointMode&&this.scrollCheckpoints.length>0&&(this.currentCheckpointIndex=this.findNearestCheckpointIndex(this.camera.position.z))}getCheckpointMode(){return this.isMobile?!1:this.useCheckpointMode}detectMobile(){const e=navigator.userAgent||navigator.vendor||window.opera,n=/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(e),i="ontouchstart"in window||navigator.maxTouchPoints>0,r=window.innerWidth<=768;return n||i&&r}}const st={settings:{startZ:0,endZ:-250},checkpoints:[{name:"Start",z:0,label:"Start"}],points:[{z:-109,duration:13,easing:"linear",pause:2},{z:-191,duration:9,easing:"linear",pause:.8},{z:-260,duration:6,easing:"linear",pause:.2}],pointsMobile:[{z:-109,duration:13,easing:"linear",pause:2},{z:-182,duration:9,easing:"linear",pause:.8},{z:-260,duration:6,easing:"linear",pause:.2}],labels:[{z:0,name:"Start"}],navigation:[{indicator:"indicatorWater",startZ:-105,endZ:-128},{indicator:"indicatorMessage",startZ:-156,endZ:-194},{indicator:"indicatorGift",startZ:-220,endZ:-300}],lotties:[{url:"https://lottie.host/0c0c3659-5225-45ed-9965-5e7e2d4d643d/cEEdtJqm8p.lottie",playZ:-106,stopZ:null,times:1},{url:"https://lottie.host/e689fd1b-db88-4cda-a259-142b40bbac15/ecYr5QK0oB.lottie",playZ:-225,times:1},{url:"https://lottie.host/3a5f76fe-dec4-4993-99dc-a2a88eb55d21/vMzEEWSE7u.lottie",playZ:-230,times:8}]};function wg(){return/iPhone|iPad|iPod|Android|webOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||window.innerWidth<=768&&window.matchMedia("(pointer: coarse)").matches}function zo(){return wg()&&st.pointsMobile&&st.pointsMobile.length>0?st.pointsMobile:st.points||[]}function Rg(){const s=zo();if(!s||s.length===0)return[];const e=[];let t=st.settings.startZ;const n=st.checkpoints.find(r=>r.name==="Bericht"),i=n?n.z:-109;for(let r=0;r<s.length;r++){const a=s[r],o=Math.abs(a.z-i)<.1||a.z<=i;if(a.z!==t){const c={type:"move",fromZ:t,toZ:a.z,duration:a.duration||2,easing:a.easing||"easeInOut"};o&&(c.checkpointName="Bericht"),e.push(c)}if(a.pause&&a.pause>0){const c={type:"pause",atZ:a.z,duration:a.pause};o&&(c.checkpointName="Bericht"),e.push(c)}if(o)break;t=a.z}return e}const Cg=st.checkpoints.map((e,t)=>{const n={name:e.name,z:e.z};if(t===0){const i=Rg();i.length>0&&(n.timeline=i)}return n});class dv{constructor(e){this.cameraController=e,this.checkpoints=Cg||[],this.currentCheckpointIndex=0,this.isAnimating=!1,this.currentAnimationFrame=null,this.autoAdvanceTimer=null,this.autoAdvanceDelay=1e4,this.lastInteractionTime=Date.now(),this.currentPointIndex=-1,this.initializeDashboardItems(),this.startCameraPositionMonitoring()}initializeDashboardItems(){const e=document.getElementById("dashTextSlider");if(!e){console.warn("Dashboard slider not found");return}const t=(st==null?void 0:st.dashboardItems)||[],n=(st==null?void 0:st.labels)||(st==null?void 0:st.namePoints)||[];if(t.length===0&&n.length===0){console.warn("No dashboardItems or labels found in checkpointConfig"),e.innerHTML="";return}const i=new Map;this.checkpoints.forEach(l=>{l.name&&l.z!==void 0&&i.set(l.name,l.z)});const r=t.map(l=>{const u=i.get(l.checkpointName);return{name:l.checkpointName,z:u!==void 0?u:null,text:l.text||l.checkpointName,type:"dashboard"}}),a=n.map(l=>({name:l.name||"Name",z:l.z!==void 0&&l.z!==null?l.z:null,text:l.name||"Name",type:"label"})),o=[...r,...a];o.sort((l,u)=>l.z===null&&u.z===null?0:l.z===null?1:u.z===null?-1:u.z-l.z),this.dashboardCheckpoints=o,e.innerHTML="",o.forEach((l,u)=>{const h=document.createElement("span");h.className="dash__text--item flex-1 font__wash",h.setAttribute("data-checkpoint-name",l.name),l.z!==null&&h.setAttribute("data-z-index",l.z),h.setAttribute("data-index",u),h.setAttribute("data-item-type",l.type),h.textContent=l.text,h.style.cursor="default",e.appendChild(h)});const c=o.length;c>0&&(e.style.width=`${c*100}%`),console.log(`Created ${o.length} dashboard items (${r.length} dashboardItems + ${a.length} labels):`,o),this.setupDashboardTextClickHandler()}setupDashboardTextClickHandler(){const e=document.querySelector(".dash__text");if(!e){setTimeout(()=>this.setupDashboardTextClickHandler(),100);return}const t=e.cloneNode(!0);e.parentNode.replaceChild(t,e),t.addEventListener("click",n=>{if((n.target===t||n.target.closest(".dash__text--mask"))&&window.checkpointController){const i=window.checkpointController;let r=!1;if(!i.isAnimating&&i.currentTimeline&&i.currentTimelineSegmentIndex!==void 0&&i.currentTimelineSegmentIndex<i.currentTimeline.length){const a=i.currentTimelineSegmentIndex-1;if(a>=0&&a<i.currentTimeline.length){const c=i.currentTimeline[a];c&&c.checkpointName&&(r=!0)}const o=i.currentTimeline[i.currentTimelineSegmentIndex];o&&o.type==="pause"&&o.checkpointName&&(r=!0)}r&&(n.preventDefault(),n.stopPropagation(),i.goToNextCheckpoint(!0))}}),t.addEventListener("touchstart",n=>{if((n.target===t||n.target.closest(".dash__text--mask"))&&window.checkpointController){const i=window.checkpointController;let r=!1;if(!i.isAnimating&&i.currentTimeline&&i.currentTimelineSegmentIndex!==void 0&&i.currentTimelineSegmentIndex<i.currentTimeline.length){const a=i.currentTimelineSegmentIndex-1;if(a>=0&&a<i.currentTimeline.length){const c=i.currentTimeline[a];c&&c.checkpointName&&(r=!0)}const o=i.currentTimeline[i.currentTimelineSegmentIndex];o&&o.type==="pause"&&o.checkpointName&&(r=!0)}r&&(n.preventDefault(),n.stopPropagation(),i.goToNextCheckpoint(!0))}})}navigateToZPosition(e,t=!1){if(!this.cameraController||!this.cameraController.camera)return console.warn("Camera controller not available"),!1;let n=null,i=1/0;if(this.checkpoints.forEach(r=>{const a=Math.abs(r.z-e);a<i&&(i=a,n=r)}),n&&i<10){const r=this.checkpoints.findIndex(a=>a.name===n.name);if(r!==-1)return this.navigateToCheckpoint(r,t)}return this.animateToZ(e,2,"easeInOut",this.currentCheckpointIndex,t)}getCheckpointsData(){return this.checkpoints.map((e,t)=>({name:e.name,z:e.z,speed:e.speed||.03,ease:"easeInOut",index:t,timeline:e.timeline||null}))}navigateToCheckpoint(e,t=!1){if(console.log("navigateToCheckpoint called:",{index:e,allowInterrupt:t,checkpointsLength:this.checkpoints.length,currentIndex:this.currentCheckpointIndex}),e<0||e>=this.checkpoints.length)return console.warn("Invalid checkpoint index:",e,"Available: 0-"+(this.checkpoints.length-1)),!1;const n=this.checkpoints[e];if(!n)return console.warn("Checkpoint not found at index:",e),!1;if(console.log("Navigating to checkpoint:",n.name,"at z:",n.z,"from current index:",this.currentCheckpointIndex),this.isAnimating&&!t)return console.log("Animation in progress, cannot navigate"),!1;this.isAnimating&&t&&this.currentAnimationFrame!==null&&(console.log("Cancelling ongoing animation"),cancelAnimationFrame(this.currentAnimationFrame),this.currentAnimationFrame=null);const i=n.timeline;if(i&&Array.isArray(i)&&i.length>0){console.log("Using timeline animation");const r={...n,timeline:i};return this.animateWithTimeline(r,e,t)}else return console.log("Using speed-based animation to z:",n.z),this.animateToZ(n.z,n.speed||2,"easeInOut",e,t)}goToNextCheckpoint(e=!1){if(this.currentTimeline&&this.currentTimelineSegmentIndex!==void 0&&this.currentTimelineSegmentIndex!==null&&typeof this.currentTimelineSegmentIndex=="number"&&!this.isAnimating)return console.log("Continuing paused timeline from segment:",this.currentTimelineSegmentIndex,"of",this.currentTimeline.length,"total segments"),console.log("Timeline state:",{hasTimeline:!!this.currentTimeline,segmentIndex:this.currentTimelineSegmentIndex,checkpointIndex:this.currentTimelineCheckpointIndex,isAnimating:this.isAnimating}),this.resetAutoAdvanceTimer(),this.continueTimelineFromSegment(this.currentTimelineSegmentIndex),!0;console.log("No paused timeline found, jumping to next checkpoint. State:",{hasTimeline:!!this.currentTimeline,segmentIndex:this.currentTimelineSegmentIndex,isAnimating:this.isAnimating});const t=this.currentCheckpointIndex+1;if(console.log("goToNextCheckpoint:",{currentIndex:this.currentCheckpointIndex,nextIndex:t,totalCheckpoints:this.checkpoints.length}),t<this.checkpoints.length){const n=this.navigateToCheckpoint(t,e);return n?(this.currentCheckpointIndex=t,this.updateSliderPosition(t),console.log("Successfully moved to next checkpoint:",t)):console.warn("Failed to navigate to next checkpoint:",t),n}return console.log("Already at last checkpoint, cannot go to next"),!1}goToNextPoint(e=!1){if(this.currentTimeline&&this.currentTimelineSegmentIndex!==void 0&&this.currentTimelineSegmentIndex!==null&&typeof this.currentTimelineSegmentIndex=="number"&&!this.isAnimating)return console.log("Continuing paused timeline from segment:",this.currentTimelineSegmentIndex),this.resetAutoAdvanceTimer(),this.continueTimelineFromSegment(this.currentTimelineSegmentIndex),!0;if(this.isAnimating&&!e)return console.log("Animation in progress, cannot navigate"),!1;const t=zo();if(t.length===0)return console.log("No points found in config, falling back to checkpoint navigation"),this.goToNextCheckpoint(e);if(!this.cameraController||!this.cameraController.camera)return console.warn("Camera controller not available"),!1;const n=this.cameraController.camera.position.z;this.currentCheckpointIndex===0&&n>=-1&&(console.log("At Start checkpoint, starting from first point in array"),this.currentPointIndex=-1);let i=-1;const r=.5;for(let a=0;a<t.length;a++)if(t[a].z<n-r){i=a;break}if(i!==-1){const a=t[i];console.log(`Navigating to next point ${i} at Z: ${a.z} (current Z: ${n})`);const o=this.currentCheckpointIndex+1;if(o<this.checkpoints.length){const m=this.checkpoints[o];if(a.z<=m.z)return console.log(`Point ${i} is at or past next checkpoint "${m.name}", navigating to checkpoint instead`),this.currentPointIndex=i,this.navigateToCheckpoint(o,e)}this.isAnimating&&e&&this.currentAnimationFrame!==null&&(console.log("Cancelling ongoing animation to navigate to next point"),cancelAnimationFrame(this.currentAnimationFrame),this.currentAnimationFrame=null),this.currentPointIndex=i;const c=a.duration||2,l=a.easing||"easeInOut";this.isAnimating=!0,this.updateDashboardGradientIndicator();const u=this.cameraController.camera,h=n,d=a.z,p=c*1e3,g=Date.now(),_=()=>{const m=Date.now()-g,f=Math.min(1,m/p),b=this.applyEasing(f,l),v=h+(d-h)*b;if(u.position.z=v,this.cameraController.targetZ=v,this.updateSliderPositionByZ(v),f<1)this.currentAnimationFrame=requestAnimationFrame(_);else{u.position.z=d,this.cameraController.targetZ=d,this.isAnimating=!1,this.currentAnimationFrame=null;const S=this.findCheckpointAtZ(d);if(S!==-1){this.currentCheckpointIndex=S,this.updateSliderPosition(S),this.startAutoAdvanceAtCheckpoint(),this.updateDashboardGradientIndicator(),console.log(`Reached checkpoint "${this.checkpoints[S].name}" at point ${i}`);return}a.pause&&a.pause>0?(console.log(`Pausing at point ${i} for ${a.pause} seconds`),setTimeout(()=>{this.isAnimating||this.goToNextPoint(e)},a.pause*1e3)):setTimeout(()=>{this.isAnimating||this.goToNextPoint(e)},50)}};return this.currentAnimationFrame=requestAnimationFrame(_),!0}else{console.log("No more points ahead, checking for next checkpoint");const a=this.currentCheckpointIndex+1;return a<this.checkpoints.length?this.navigateToCheckpoint(a,e):(console.log("Already at last checkpoint, cannot go to next"),!1)}}findCheckpointAtZ(e){for(let t=0;t<this.checkpoints.length;t++){const n=this.checkpoints[t];if(Math.abs(e-n.z)<1)return t}return-1}goToPreviousCheckpoint(e=!1){return console.log("Backward navigation disabled. Can only move forward in timeline."),!1}jumpToCheckpointByName(e,t=!1){if(this.currentTimeline&&this.currentTimelineSegmentIndex!==void 0&&!this.isAnimating)return console.log("User interaction: continuing paused timeline from segment:",this.currentTimelineSegmentIndex),this.resetAutoAdvanceTimer(),this.continueTimelineFromSegment(this.currentTimelineSegmentIndex),!0;const n=this.checkpoints.findIndex(r=>r.name===e);if(n===-1)return console.warn(`Checkpoint with name "${e}" not found`),!1;if(n<this.currentCheckpointIndex)return console.log(`Cannot jump to "${e}" - it's before current checkpoint. Can only move forward.`),!1;const i=this.navigateToCheckpoint(n,t);return i&&(this.currentCheckpointIndex=n,this.updateSliderPosition(n)),i}jumpToCheckpoint(e,t=!1){if(this.currentTimeline&&this.currentTimelineSegmentIndex!==void 0&&!this.isAnimating)return console.log("User interaction: continuing paused timeline from segment:",this.currentTimelineSegmentIndex),this.resetAutoAdvanceTimer(),this.continueTimelineFromSegment(this.currentTimelineSegmentIndex),!0;if(e<0||e>=this.checkpoints.length)return console.warn(`Checkpoint index ${e} is out of bounds. Available checkpoints: 0-${this.checkpoints.length-1}`),!1;if(e<this.currentCheckpointIndex)return console.log(`Cannot jump to checkpoint ${e} - it's before current checkpoint ${this.currentCheckpointIndex}. Can only move forward.`),!1;const n=this.navigateToCheckpoint(e,t);return n&&(this.currentCheckpointIndex=e,this.updateSliderPosition(e)),n}animateToZ(e,t,n,i,r=!1){if(!this.cameraController||!this.cameraController.camera)return console.warn("Camera controller not yet available"),!1;console.log("animateToZ called:",{zIndex:e,speed:t,ease:n,itemIndex:i,allowInterrupt:r}),this.isAnimating=!0,this.updateDashboardGradientIndicator();const a=this.cameraController.camera,o=a.position.z,c=e,l=t&&t>=.1?t*1e3:2e3,u=Date.now();console.log("Starting animation:",{startZ:o,targetZ:c,duration:l+"ms",speed:t});const h=()=>{const d=Date.now()-u,p=Math.min(1,d/l),g=this.applyEasing(p,n),_=o+(c-o)*g;a.position.z=_,this.cameraController.targetZ=_,p<1?this.currentAnimationFrame=requestAnimationFrame(h):(a.position.z=c,this.cameraController.targetZ=c,this.isAnimating=!1,this.currentAnimationFrame=null,this.currentCheckpointIndex=i,this.updateSliderPosition(i),this.startAutoAdvanceAtCheckpoint(),this.updateDashboardGradientIndicator(),console.log("Reached checkpoint, starting 4-second auto-advance timer"))};return this.currentAnimationFrame=requestAnimationFrame(h),!0}animateWithTimeline(e,t,n=!1){if(!this.cameraController||!this.cameraController.camera)return console.warn("Camera controller not yet available"),!1;this.isAnimating=!0;const i=e.timeline;let r=0,a=Date.now();this.currentTimeline=i,this.currentTimelineCheckpointIndex=t;const o=e.z;let c=o,l=!1;for(let p=0;p<i.length;p++){const g=i[p];if(g.type==="move"){const _=g.fromZ!==void 0?g.fromZ:p>0?i[p-1].toZ||i[p-1].atZ:0,m=g.toZ!==void 0?g.toZ:_,f=Math.min(_,m),b=Math.max(_,m);if(o>=f&&o<=b){r=p,c=o,l=!0,console.log(`Found checkpoint at segment ${p}, starting from Z: ${o}`);break}else{if(o>b)continue;if(o<f&&p===0){r=0,c=_,l=!0;break}}}else if(g.type==="pause"&&Math.abs(g.atZ-o)<.1){r=p,c=o,l=!0,console.log(`Found checkpoint at pause segment ${p}, starting from Z: ${o}`);break}}if(!l){const p=i[0];p&&(p.type==="move"&&p.fromZ!==void 0?c=p.fromZ:p.type==="pause"&&p.atZ!==void 0&&(c=p.atZ)),r=0,console.log(`Checkpoint Z ${o} not found in timeline, starting from beginning at Z: ${c}`)}this.cameraController.camera.position.z=c,this.cameraController.targetZ=c;const u=i[r];console.log("Timeline animation starting:"),console.log("- Starting Z:",c),console.log("- Starting segment index:",r),console.log("- Starting segment:",u),console.log("- Total segments:",i.length),console.log("- Timeline order:",i.map((p,g)=>`${g}: ${p.type} ${p.fromZ||p.atZ} → ${p.toZ||p.atZ}`).join(", ")),a=Date.now();let h=null;const d=()=>{if(r>=i.length){this.isAnimating=!1,this.currentAnimationFrame=null,this.currentCheckpointIndex=t,this.updateSliderPosition(t),this.startAutoAdvanceAtCheckpoint(),this.updateDashboardGradientIndicator(),console.log("Reached checkpoint, starting 4-second auto-advance timer");return}if(h){const _=Date.now()-h.startTime,m=Math.min(1,_/h.duration),f=1-Math.pow(1-m,3),b=h.startZ+(h.targetZ-h.startZ)*f;this.cameraController.camera.position.z=b,this.cameraController.targetZ=b;const v=h.startY+(h.targetY-h.startY)*f;this.cameraController.camera.position.y=v,this.cameraController.targetCameraY=v,this.updateSliderPositionByZ(b),m>=1?(this.cameraController.camera.position.z=h.targetZ,this.cameraController.camera.position.y=h.targetY,console.log(`[Post-pause movement] Complete: Z ${h.targetZ.toFixed(2)}, Y ${h.targetY.toFixed(2)}`),h=null,r++,a=Date.now(),c=this.cameraController.camera.position.z,this.currentAnimationFrame=requestAnimationFrame(d)):this.currentAnimationFrame=requestAnimationFrame(d);return}const p=i[r],g=Date.now()-a;if(p.type==="pause"){const _=this.cameraController.camera.position.z;if(this.updateSliderPositionByZ(_),p.checkpointName&&g<100&&this.changeDashboardTextToCheckpoint(p.checkpointName),g>=p.duration*1e3){if(p.checkpointName){this.isAnimating=!1,this.currentAnimationFrame=null,this.currentTimelineSegmentIndex=r+1,this.currentTimeline||(this.currentTimeline=i),this.currentTimelineCheckpointIndex===void 0&&(this.currentTimelineCheckpointIndex=t);const y=this.checkpoints.findIndex(C=>C.name===p.checkpointName);y!==-1&&(this.currentCheckpointIndex=y,this.updateSliderPosition(y)),this.startAutoAdvanceAtCheckpoint(),this.updateDashboardGradientIndicator(),console.log(`Stopped at checkpoint "${p.checkpointName}", waiting 10 seconds. Next segment: ${this.currentTimelineSegmentIndex}`);return}const m=this.cameraController.camera.position.z,f=this.cameraController.camera.position.y,v=m+30,R=f+15,A=600;console.log(`[Post-pause movement] Starting: Z ${m.toFixed(2)} → ${v.toFixed(2)}, Y ${f.toFixed(2)} → ${R.toFixed(2)}`),h={startZ:m,targetZ:v,startY:f,targetY:R,startTime:Date.now(),duration:A},this.currentAnimationFrame=requestAnimationFrame(d)}else this.currentAnimationFrame=requestAnimationFrame(d)}else if(p.type==="move"){const _=p.fromZ!==void 0?p.fromZ:c,m=p.toZ!==void 0?p.toZ:c;let f=_;r===0&&l&&c!==_&&(f=c,console.log(`Starting from checkpoint position ${c} within segment ${r}`));const b=Math.min(1,g/(p.duration*1e3)),v=this.applyEasing(b,p.easing||"linear"),S=f+(m-f)*v;if(this.cameraController.camera.position.z=S,this.cameraController.targetZ=S,this.updateSliderPositionByZ(S),p.checkpointName&&b>=.99&&this.changeDashboardTextToCheckpoint(p.checkpointName),b<1)this.currentAnimationFrame=requestAnimationFrame(d);else{if(console.log(`Timeline segment ${r} complete: reached ${m}`),p.checkpointName){this.isAnimating=!1,this.currentAnimationFrame=null,this.currentTimelineSegmentIndex=r+1,this.currentTimeline||(this.currentTimeline=i),this.currentTimelineCheckpointIndex===void 0&&(this.currentTimelineCheckpointIndex=t);const R=this.checkpoints.findIndex(A=>A.name===p.checkpointName);R!==-1&&(this.currentCheckpointIndex=R,this.updateSliderPosition(R)),this.startAutoAdvanceAtCheckpoint(),this.updateDashboardGradientIndicator(),console.log(`Stopped at checkpoint "${p.checkpointName}", waiting 10 seconds. Next segment: ${this.currentTimelineSegmentIndex}`);return}if(r++,a=Date.now(),c=m,r<i.length){const R=i[r];console.log(`Timeline segment ${r}: Next segment from ${c} → ${R.toZ||R.atZ||"?"}`)}this.currentAnimationFrame=requestAnimationFrame(d)}}};return this.currentAnimationFrame=requestAnimationFrame(d),!0}applyEasing(e,t){if(e<=0)return 0;if(e>=1)return 1;switch(t){case"linear":return e;case"ease":case"easeInOut":return e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2;case"easeIn":return e*e*e;case"easeOut":return 1-Math.pow(1-e,3);default:return e}}changeDashboardTextToCheckpoint(e){if(!e)return;if(!this.dashboardCheckpoints){const n=this.checkpoints.findIndex(i=>i.name===e);if(n!==-1){this.updateSliderPosition(n);return}return}const t=this.dashboardCheckpoints.findIndex(n=>n.name===e);if(t===-1){console.warn(`Dashboard checkpoint "${e}" not found`);return}this.updateSliderPositionByIndex(t),console.log(`Dashboard text changed to checkpoint: ${e} at index ${t}`)}updateSliderPositionByIndex(e){const t=document.getElementById("dashTextSlider");if(!t||!this.dashboardCheckpoints||this.dashboardCheckpoints.length===0)return;const n=this.dashboardCheckpoints.length;if(e<0||e>=n)return;const i=100/n,r=-(e*i);t.style.transition="transform 0.5s ease-in-out",t.style.transform=`translateX(${r}%)`,console.log(`Slider moved to index ${e}, translateX: ${r}%`)}updateSliderPositionByZ(e){if(!this.dashboardCheckpoints||this.dashboardCheckpoints.length===0)return;const t=this.dashboardCheckpoints.filter(i=>i.z!==null&&i.z!==void 0);if(t.length===0)return;let n=-1;for(let i=t.length-1;i>=0;i--){const r=t[i];if(e<=r.z){n=this.dashboardCheckpoints.findIndex(a=>a.name===r.name);break}}n===-1&&this.dashboardCheckpoints.length>0&&(n=0),n!==-1&&this.lastSliderIndex!==n&&(this.lastSliderIndex=n,this.updateSliderPositionByIndex(n))}updateSliderPosition(e){const t=this.checkpoints[e];if(t){if(this.dashboardCheckpoints&&this.dashboardCheckpoints.length>0){const n=this.dashboardCheckpoints.findIndex(i=>i.name===t.name);if(n!==-1){this.updateSliderPositionByIndex(n);return}}if(this.cameraController&&this.cameraController.camera){const n=this.cameraController.camera.position.z;this.updateSliderPositionByZ(n)}}}handleDashboardClick(e){return this.resetAutoAdvanceTimer(),e<0||e>=this.checkpoints.length?(console.warn(`Checkpoint index ${e} is out of bounds. Available checkpoints: 0-${this.checkpoints.length-1}`),!1):this.jumpToCheckpoint(e,!0)}handleScroll(e){if(console.log("handleScroll called with deltaY:",e,"isAnimating:",this.isAnimating),this.resetAutoAdvanceTimer(),this.isAnimating){console.log("Scroll blocked - animation in progress");return}if(e<0){console.log("Scrolling up - continuing timeline");const t=this.goToNextCheckpoint();console.log(t?"Successfully continuing timeline":"Cannot continue - already at end")}else e>0&&console.log("Scroll down blocked - can only move forward in timeline")}handleTouchSwipe(e){this.isAnimating||(e>0?this.goToNextCheckpoint():e<0&&this.goToPreviousCheckpoint())}getCurrentCheckpointIndex(){return this.currentCheckpointIndex}isAnimationInProgress(){return this.isAnimating}findClosestCheckpoint(){if(!this.cameraController||!this.cameraController.camera)return 0;const e=this.cameraController.camera.position.z;let t=0,n=Math.abs(this.checkpoints[0].z-e);return this.checkpoints.forEach((i,r)=>{const a=Math.abs(i.z-e);a<n&&(n=a,t=r)}),t}syncWithCameraPosition(){this.currentCheckpointIndex=this.findClosestCheckpoint(),this.updateSliderPosition(this.currentCheckpointIndex)}getCheckpointNames(){return this.checkpoints.map(e=>e.name)}getCurrentCheckpointName(){return this.currentCheckpointIndex>=0&&this.currentCheckpointIndex<this.checkpoints.length?this.checkpoints[this.currentCheckpointIndex].name:null}resetAutoAdvanceTimer(){this.autoAdvanceTimer&&(clearTimeout(this.autoAdvanceTimer),this.autoAdvanceTimer=null,console.log("Auto-advance timer reset due to user interaction"))}startAutoAdvanceAtCheckpoint(){if(this.resetAutoAdvanceTimer(),this.currentCheckpointIndex>=this.checkpoints.length-1){console.log("At last checkpoint, no auto-advance");return}if(this.isAnimating){console.log("Animation in progress, no auto-advance");return}this.autoAdvanceTimer=setTimeout(()=>{if(console.log("Auto-advancing after 10 seconds of no interaction"),this.autoAdvanceTimer=null,this.currentTimeline&&this.currentTimelineSegmentIndex!==void 0){const e=this.currentTimelineSegmentIndex;e<this.currentTimeline.length?(console.log(`Continuing timeline from segment ${e}`),this.checkpoints[this.currentTimelineCheckpointIndex]?this.continueTimelineFromSegment(e):this.goToNextCheckpoint(!0)):(console.log("Timeline complete, moving to next checkpoint"),this.goToNextCheckpoint(!0))}else console.log("No timeline stored, moving to next checkpoint"),this.goToNextCheckpoint(!0)},this.autoAdvanceDelay),console.log(`Auto-advance timer started: will continue in ${this.autoAdvanceDelay}ms if no interaction`)}continueTimelineFromSegment(e){if(!this.currentTimeline||e>=this.currentTimeline.length){console.log("Cannot continue timeline - invalid segment index");return}this.isAnimating=!0;const t=this.currentTimeline;let n=e,i=Date.now();this.currentTimelineCheckpointIndex||(this.currentTimelineCheckpointIndex=this.currentCheckpointIndex);let r=this.cameraController.camera.position.z;if(n>0){const o=t[n-1];o.type==="move"?r=o.toZ:o.type==="pause"&&(r=o.atZ)}else if(n===0){const o=t[0];o.type==="move"&&o.fromZ!==void 0?r=o.fromZ:o.type==="pause"&&o.atZ!==void 0&&(r=o.atZ)}this.cameraController.camera.position.z=r,this.cameraController.targetZ=r,console.log(`Continuing timeline from segment ${n}, starting at Z: ${r}`);const a=()=>{if(n>=t.length){this.isAnimating=!1,this.currentAnimationFrame=null,this.currentTimelineCheckpointIndex!==void 0&&(this.currentCheckpointIndex=this.currentTimelineCheckpointIndex,this.updateSliderPosition(this.currentCheckpointIndex)),console.log("Timeline continuation complete");return}const o=t[n],c=Date.now()-i;if(o.type==="pause"){const l=this.cameraController.camera.position.z;if(this.updateSliderPositionByZ(l),o.checkpointName&&c<100&&this.changeDashboardTextToCheckpoint(o.checkpointName),c>=o.duration*1e3){if(o.checkpointName){this.isAnimating=!1,this.currentAnimationFrame=null,this.currentTimelineSegmentIndex=n+1,this.currentTimeline||(this.currentTimeline=t),this.currentTimelineCheckpointIndex===void 0&&(this.currentTimelineCheckpointIndex=this.currentCheckpointIndex);const u=this.checkpoints.findIndex(h=>h.name===o.checkpointName);u!==-1&&(this.currentCheckpointIndex=u,this.updateSliderPosition(u)),this.startAutoAdvanceAtCheckpoint(),this.updateDashboardGradientIndicator(),console.log(`Stopped at checkpoint "${o.checkpointName}", waiting 10 seconds. Next segment: ${this.currentTimelineSegmentIndex}`);return}n++,i=Date.now(),r=this.cameraController.camera.position.z,this.currentAnimationFrame=requestAnimationFrame(a)}else this.currentAnimationFrame=requestAnimationFrame(a)}else if(o.type==="move"){const l=o.fromZ!==void 0?o.fromZ:r,u=o.toZ!==void 0?o.toZ:r,h=Math.min(1,c/(o.duration*1e3)),d=this.applyEasing(h,o.easing||"linear"),p=l+(u-l)*d;if(this.cameraController.camera.position.z=p,this.cameraController.targetZ=p,this.updateSliderPositionByZ(p),o.checkpointName&&h>=.99&&this.changeDashboardTextToCheckpoint(o.checkpointName),h<1)this.currentAnimationFrame=requestAnimationFrame(a);else{if(console.log(`Timeline segment ${n} complete: reached ${u}`),o.checkpointName){this.isAnimating=!1,this.currentAnimationFrame=null,this.currentTimelineSegmentIndex=n+1,this.currentTimeline||(this.currentTimeline=t),this.currentTimelineCheckpointIndex===void 0&&(this.currentTimelineCheckpointIndex=this.currentCheckpointIndex);const g=this.checkpoints.findIndex(_=>_.name===o.checkpointName);g!==-1&&(this.currentCheckpointIndex=g,this.updateSliderPosition(g)),this.startAutoAdvanceAtCheckpoint(),this.updateDashboardGradientIndicator(),console.log(`Stopped at checkpoint "${o.checkpointName}", waiting 10 seconds. Next segment: ${this.currentTimelineSegmentIndex}`);return}if(n++,i=Date.now(),r=u,n<t.length){const g=t[n];console.log(`Timeline segment ${n}: Next segment from ${r} → ${g.toZ||g.atZ||"?"}`)}this.currentAnimationFrame=requestAnimationFrame(a)}}};this.currentAnimationFrame=requestAnimationFrame(a)}startCameraPositionMonitoring(){this.cameraMonitoringFrame&&cancelAnimationFrame(this.cameraMonitoringFrame);const e=()=>{if(!this.cameraController||!this.cameraController.camera){this.cameraMonitoringFrame=requestAnimationFrame(e);return}const t=this.cameraController.camera.position.z;this.updateCurrentPointIndex(t),this.dashboardCheckpoints&&this.dashboardCheckpoints.length>0&&this.updateSliderPositionByZ(t),this.updateDashboardGradientIndicator(),this.updateNavigationIndicators(t),this.cameraMonitoringFrame=requestAnimationFrame(e)};e()}updateCurrentPointIndex(e){const t=zo();if(t.length===0)return;const n=.5;let i=-1;for(let r=0;r<t.length;r++){const a=t[r];if(e<=a.z+n)i=r;else break}i!==-1&&i!==this.currentPointIndex&&(this.currentPointIndex=i)}updateDashboardGradientIndicator(){const e=document.querySelector(".dash__text");if(!e)return;if(!this.isAnimating&&(this.currentCheckpointIndex===0||this.currentCheckpointIndex===1)){e.classList.add("at-checkpoint");const n=document.querySelector(".dash__text--button");n&&n.classList.remove("clicked")}else e.classList.remove("at-checkpoint")}updateNavigationIndicators(e){const t=(st==null?void 0:st.navigation)||[];if(t.length===0)return;let n=null;for(const r of t)if(e<=r.startZ&&e>r.endZ){n=r.indicator;break}if(["indicatorWater","indicatorMessage","indicatorGift"].forEach(r=>{const a=document.getElementById(r);a&&a.classList.remove("active__nav")}),n){const r=document.getElementById(n);r&&r.classList.add("active__nav")}}stopCameraPositionMonitoring(){this.cameraMonitoringFrame&&(cancelAnimationFrame(this.cameraMonitoringFrame),this.cameraMonitoringFrame=null)}}class fv{constructor(e,t=4.8,n=10){this.loader=e,this.targetSize=t,this.visibilityScale=n}scaleModel(e){const t=new Kt().setFromObject(e),n=t.max.x-t.min.x,i=t.max.y-t.min.y,r=t.max.z-t.min.z,a=Math.max(n,i,r);let o=1;return a>0&&(o=this.targetSize/a),o*=this.visibilityScale,e.scale.set(o,o,o),{width:n,height:i,depth:r,scaleFactor:o}}hideBasefloorObject(e){e.traverse(t=>{const n=(t.name||"").toLowerCase();(n.includes("_basefloor")||n==="_basefloor"||n.includes("basefloor"))&&(t.visible=!1)})}applyTexturesToPoort(e,t){const n=[];e.traverse(i=>{const r=(i.name||"").toLowerCase();(r==="poort"||r.includes("poort"))&&!i.isMesh&&(i.visible=!0,i.traverse(a=>{a.isMesh&&(n.includes(a)||n.push(a))}))}),e.traverse(i=>{var r;if(i.isMesh){const a=(((r=i.parent)==null?void 0:r.name)||"").toLowerCase();(a==="poort"||a.includes("poort"))&&(n.includes(i)||n.push(i))}}),n.length===0&&(console.warn("No poort objects found in model. Available groups and meshes:"),e.traverse(i=>{i.isMesh})),n.forEach(i=>{const r=a=>new Dt({uniforms:{map:{value:t},opacity:{value:(a==null?void 0:a.opacity)!==void 0?a.opacity:1},gamma:{value:1}},vertexShader:`
            varying vec2 vUv;
            void main() {
              vUv = uv;
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
          `,fragmentShader:`
            uniform sampler2D map;
            uniform float opacity;
            uniform float gamma;
            varying vec2 vUv;
            
            void main() {
              vec2 flippedUv = vec2(vUv.x, 1.0 - vUv.y);
              vec4 texColor = texture2D(map, flippedUv);
              vec3 correctedColor = pow(texColor.rgb, vec3(1.0 / gamma));
              gl_FragColor = vec4(correctedColor, texColor.a * opacity);
            }
          `,side:(a==null?void 0:a.side)||xt,transparent:(a==null?void 0:a.transparent)!==!1});if(i.geometry&&i.geometry.attributes&&i.geometry.attributes.uv){const a=i.geometry.attributes.uv,o=a.array;let c=1/0,l=-1/0,u=1/0,h=-1/0;for(let _=0;_<o.length;_+=2){const m=o[_],f=o[_+1];c=Math.min(c,m),l=Math.max(l,m),u=Math.min(u,f),h=Math.max(h,f)}const d=(c+l)/2,p=(u+h)/2,g=1;for(let _=0;_<o.length;_+=2)o[_]=d+(o[_]-d)*g,o[_+1]=p+(o[_+1]-p)*g;a.needsUpdate=!0}i.visible=!0,i.userData.hasCustomTexture=!0,i.userData.customTextureType="poort",i.material?(Array.isArray(i.material)?i.material=i.material.map(a=>r(a)):i.material=r(i.material),i.material.needsUpdate=!0):i.material=r(null),i.castShadow=!1,i.receiveShadow=!1})}applyTextureToObjects(e,t,n){const i=[];e.traverse(r=>{(r.name||"").toLowerCase().includes(n)&&!r.isMesh&&r.traverse(o=>{o.isMesh&&(i.includes(o)||i.push(o))})}),e.traverse(r=>{var a;r.isMesh&&(((a=r.parent)==null?void 0:a.name)||"").toLowerCase().includes(n)&&(i.includes(r)||i.push(r))}),i.length===0&&(console.warn(`No ${n} objects found in model. Available meshes:`),e.traverse(r=>{r.isMesh})),i.forEach(r=>{if(r.geometry&&r.geometry.attributes&&r.geometry.attributes.uv){const o=r.geometry.attributes.uv,c=o.array;let l=1/0,u=-1/0,h=1/0,d=-1/0;for(let m=0;m<c.length;m+=2){const f=c[m],b=c[m+1];l=Math.min(l,f),u=Math.max(u,f),h=Math.min(h,b),d=Math.max(d,b)}const p=(l+u)/2,g=(h+d)/2,_=1;for(let m=0;m<c.length;m+=2)c[m]=p+(c[m]-p)*_,c[m+1]=g+(c[m+1]-g)*_;o.needsUpdate=!0}const a=o=>new Dt({uniforms:{map:{value:t},opacity:{value:(o==null?void 0:o.opacity)!==void 0?o.opacity:1},gamma:{value:1}},vertexShader:`
            varying vec2 vUv;
            void main() {
              vUv = uv;
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
          `,fragmentShader:`
            uniform sampler2D map;
            uniform float opacity;
            uniform float gamma;
            varying vec2 vUv;
            
            void main() {
              vec2 flippedUv = vec2(vUv.x, 1.0 - vUv.y);
              vec4 texColor = texture2D(map, flippedUv);
              vec3 correctedColor = pow(texColor.rgb, vec3(1.0 / gamma));
              gl_FragColor = vec4(correctedColor, texColor.a * opacity);
            }
          `,side:(o==null?void 0:o.side)||xt,transparent:(o==null?void 0:o.transparent)!==!1});r.visible=!0,r.userData.hasCustomTexture=!0,r.userData.customTextureType=n,r.material?(Array.isArray(r.material)?r.material=r.material.map(o=>a(o)):r.material=a(r.material),r.material.needsUpdate=!0):r.material=a(null),r.castShadow=!1,r.receiveShadow=!1})}load(e,t,n,i={}){const{applyPoort:r=!1,applyBoog:a=!1,stationId:o=null}=i;return new Promise((c,l)=>{this.loader.load(n,u=>{const h=u.scene,d=this.scaleModel(h);this.hideBasefloorObject(h),h.traverse(C=>{C.isMesh&&(C.castShadow=!1,C.receiveShadow=!1)}),h.position.set(0,0,t);const p=[],g=[],_=[],m=[];if(n.includes("station__brush2.glb")&&h.traverse(C=>{const x=(C.name||"").toLowerCase();(x.includes("borstel__staand--left")||x.includes("borstel_staand_left"))&&!C.isMesh?(g.push({object:C,type:"left",originalX:C.position.x}),C.traverse(T=>{(T.name||"").toLowerCase().includes("brush__base")&&!T.isMesh&&p.push({object:T,direction:"right"})})):(x.includes("borstel__staand--right")||x.includes("borstel_staand_right"))&&!C.isMesh&&(g.push({object:C,type:"right",originalX:C.position.x}),C.traverse(T=>{(T.name||"").toLowerCase().includes("brush__base")&&!T.isMesh&&p.push({object:T,direction:"left"})}))}),n.includes("station__brush--up2.glb")){let C=!1,x=!1;h.traverse(T=>{const D=T.name||"";D==="borstel__liggend--UP"&&!T.isMesh?(x=!0,m.push({object:T,originalY:T.position.y}),T.traverse(B=>{(B.name||"").toLowerCase().includes("brush__base")&&!B.isMesh&&p.push({object:B,direction:"left"})})):D==="borstel__liggend"&&!T.isMesh&&(C=!0,_.push({object:T,originalY:T.position.y}),T.traverse(B=>{(B.name||"").toLowerCase().includes("brush__base")&&!B.isMesh&&p.push({object:B,direction:"left"})}))}),!C&&!x&&(console.warn("No borstel__liggend or borstel__liggend--UP groups found in station__brush--up2.glb. Available groups:"),h.traverse(T=>{T.isMesh}))}const f=[];n.includes("station__message--bericht.glb")&&(h.traverse(C=>{const x=(C.name||"").toLowerCase();(x.includes("douche__gordijn")||x.includes("douche_gordijn"))&&f.push({object:C,originalScaleX:C.scale.x})}),f.length===0&&(console.warn("No douche__gordijn objects found in station__message--bericht.glb. Available objects:"),h.traverse(C=>{const x=(C.name||"").toLowerCase();x.includes("douche")||x.includes("gordijn")})));const b=[];n.includes("station__message--wens.glb")&&(h.traverse(C=>{const x=(C.name||"").toLowerCase();(x.includes("user__wens")||x.includes("user_wens"))&&b.push({object:C,originalY:C.position.y,originalScaleX:C.scale.x})}),b.length===0&&(console.warn("No user__wens objects found in station__message--wens.glb. Available objects:"),h.traverse(C=>{const x=(C.name||"").toLowerCase();x.includes("user")||x.includes("wens")})));const v=[];n.includes("station__brush2.glb")&&(h.traverse(C=>{const x=(C.name||"").toLowerCase();(x==="gate"||x.includes("gate"))&&!C.isMesh&&(o==="brush2"?C.visible=!1:C.visible=!0,C.traverse(T=>{const D=(T.name||"").toLowerCase();D.includes("gate__right")||D.includes("gate_right")?v.push({object:T,type:"right",originalX:T.position.x}):(D.includes("gate__left")||D.includes("gate_left"))&&v.push({object:T,type:"left",originalX:T.position.x})}))}),v.length===0&&(console.warn("No gate objects found in station__brush2.glb. Available groups and objects:"),h.traverse(C=>{(C.name||"").toLowerCase().includes("gate")})));const S=[];n.includes("station__message--media.glb")&&(h.traverse(C=>{const x=(C.name||"").toLowerCase();(x.includes("user__media")||x.includes("user_media"))&&S.push({object:C,originalY:C.position.y,originalX:C.position.x,originalScale:{x:C.scale.x,y:C.scale.y,z:C.scale.z}})}),S.length===0&&(console.warn("No user__media objects found in station__message--media.glb. Available objects:"),h.traverse(C=>{const x=(C.name||"").toLowerCase();x.includes("user")||x.includes("media")})));const R=[],A=[];n.includes("station__curtain2.glb")&&(h.traverse(C=>{const x=(C.name||"").toLowerCase();if((x==="curtain__flaps--01"||x==="curtain__flaps--02"||x==="curtain__flaps--03"||x.includes("curtain__flaps--01")||x.includes("curtain__flaps--02")||x.includes("curtain__flaps--03")||x.includes("curtain_flaps--01")||x.includes("curtain_flaps--02")||x.includes("curtain_flaps--03")||x.includes("curtain__flaps_01")||x.includes("curtain__flaps_02")||x.includes("curtain__flaps_03")||x.includes("curtain_flaps_01")||x.includes("curtain_flaps_02")||x.includes("curtain_flaps_03"))&&!C.isMesh){let D=1,B=1,Z="unknown";x.includes("--01")||x.includes("_01")?(Z="01",D=1,B=1):x.includes("--02")||x.includes("_02")?(Z="02",D=1,B=1):(x.includes("--03")||x.includes("_03"))&&(Z="03",D=1,B=1);const P={object:C,originalY:C.position.y,name:C.name,id:C.name,groupType:Z,liftMultiplier:D,speedMultiplier:B};A.push(P);let U=0;C.traverse(H=>{const X=(H.name||"").toLowerCase(),W=x;if(X.includes("flap")&&X!==W){const j=`${C.name}_${H.name}_${R.length}`;let Y=!1;Z==="02"?Y=U>=3&&U<=5:Y=U>=4&&U<=6,R.push({id:j,object:H,originalRotationX:H.rotation.x,originalY:H.position.y,originalX:H.position.x,rotationSpeed:.5+Math.random()*1,phaseOffset:Math.random()*Math.PI*2,name:H.name,parentName:C.name,flapIndex:U,shouldLift:Y,groupType:Z}),U++}})}}),R.length===0&&(console.warn("No curtain flaps found in station__curtain2.glb. Available groups and objects:"),h.traverse(C=>{const x=(C.name||"").toLowerCase();x.includes("curtain")||x.includes("flap")})));const y=[];n.includes("station__soap2.glb")&&(h.traverse(C=>{const x=(C.name||"").toLowerCase();(x.includes("spray__soap--l")||x.includes("spray__soap--r")||x.includes("spray_soap--l")||x.includes("spray_soap--r")||x.includes("spray__soap_l")||x.includes("spray__soap_r"))&&y.push({object:C,originalRotationY:C.rotation.y})}),y.length===0&&(console.warn("No spray__soap objects found in station__soap2.glb. Available objects:"),h.traverse(C=>{const x=(C.name||"").toLowerCase();x.includes("spray")||x.includes("soap")}))),e.add(h),c({model:h,dimensions:d,allModels:[h],brushBaseObjects:p||[],borstelStandObjects:g||[],borstelLiggendObjects:_||[],borstelLiggendUpObjects:m||[],curtainFlapObjects:R||[],curtainFlapGroups:A||[],doucheGordijnObjects:f||[],userWensObjects:b||[],userMediaObjects:S||[],gateObjects:v||[],spraySoapObjects:y||[]})},u=>{u.lengthComputable},u=>{console.error(`Error loading ${n}:`,u),l(u)})})}}class pv{constructor(e){this.sceneSetup=e,this.lottieAnimations=[],this.activeIndices=new Set,this.overlay=document.getElementById("lottieOverlay"),this.containers=this.overlay?Array.from(this.overlay.querySelectorAll(".lottie-container")):[],this.allowFirstLottieAutoPlay=!1,this.loadConfig(),this.init()}loadConfig(){if(st&&st.lotties&&Array.isArray(st.lotties))this.config=st.lotties.map((e,t)=>({index:t,url:e.url,playZ:e.playZ,stopZ:e.stopZ!==void 0?e.stopZ:null})),console.log("Loaded lottie configuration from checkpointConfig:",this.config);else{const e=[{zindex:-270,lottie:"https://lottie.host/2163daee-29c1-4123-9142-6c20cc13258a/i3hyETa25l.lottie"},{zindex:-280,lottie:"https://lottie.host/3a5f76fe-dec4-4993-99dc-a2a88eb55d21/vMzEEWSE7u.lottie"}];this.config=e.map((t,n)=>({index:n,url:t.lottie,playZ:t.zindex,stopZ:null})),console.log("Using fallback lottie configuration:",this.config)}}init(){if(!this.overlay||this.containers.length===0){console.warn("Lottie overlay or containers not found");return}this.config.forEach(e=>{const t=e.index!==void 0?e.index:this.config.indexOf(e),n=e.url||e.lottie;n&&n.trim()!==""&&this.loadLottie(t,n).catch(i=>{console.error(`Failed to load Lottie ${t}:`,i)})}),this.startMonitoring()}async loadLottie(e,t){if(e>=this.containers.length){console.warn(`Lottie container index ${e} out of range`);return}const n=this.containers[e];n.innerHTML="";try{let i;if(t.endsWith(".lottie"))try{const r=await fetch(t);if(!r.ok)throw new Error(`Failed to fetch Lottie file: ${r.statusText}`);const a=await r.blob();let o=null;const c=await a.text();try{const h=JSON.parse(c);h&&(h.layers||h.assets||h.fr!==void 0)&&(o=h)}catch{}let l=null;if(!o){const h=await fetch(t).then(g=>g.blob());l=await Kc.loadAsync(h);const d=Object.keys(l.files),p=["data.json","animation.json","comp.json"];for(const g of p)if(l.files[g]&&!l.files[g].dir){const _=await l.files[g].async("string"),m=JSON.parse(_);if(m&&(m.layers||m.assets||m.fr!==void 0)){o=m;break}}if(!o){for(const g of d)if(g.endsWith(".json")&&!l.files[g].dir){const _=await l.files[g].async("string"),m=JSON.parse(_);if(m&&(m.layers||m.assets||m.fr!==void 0)){o=m;break}}}}if(!o)throw new Error("No JSON animation data found in .lottie file");if(o.layers||(o.layers=[]),o.assets||(o.assets=[]),o.fr===void 0&&(o.fr=60),o.v===void 0&&(o.v="5.5.7"),l&&o.assets&&Array.isArray(o.assets)){const h=[];for(const d of o.assets)if(d.p&&d.p!==""){const p=d.p,g=p.split("/").pop()||p,_=d.p;let m=null;if(l.forEach((f,b)=>{if(!b.dir){const v=f.split("/").pop(),S=f.replace(/\\/g,"/"),R=p.replace(/\\/g,"/");(S===R||S===`images/${g}`||S.startsWith("images/")&&v===g||v===g)&&(m=b)}}),m){const f=(async()=>{try{const b=await m.async("blob"),v=URL.createObjectURL(b),S=new Image;return await new Promise((R,A)=>{S.onload=R,S.onerror=A,S.src=v}),o._blobUrls||(o._blobUrls=[]),o._blobUrls.push(v),d._img=S,d.p=v,d.e=1,d.u="",{asset:d,blobUrl:v,originalPath:_}}catch(b){return console.warn(`Failed to convert image ${g} to blob URL:`,b),null}})();h.push(f)}else console.warn(`Image file not found in .lottie archive: ${p} (looking for ${g})`)}await Promise.all(h)}const u={container:n,renderer:"svg",loop:!1,autoplay:!1,animationData:o};o._blobUrls&&o._blobUrls.length>0&&(u.assetsPath=""),i=Kr.loadAnimation(u),o._blobUrls&&o._blobUrls.length>0&&(i._blobUrls=o._blobUrls)}catch(r){console.error(`Error processing .lottie file ${e} from ${t}:`,r);return}else i=Kr.loadAnimation({container:n,renderer:"svg",loop:!1,autoplay:!1,path:t});this.lottieAnimations[e]||(this.lottieAnimations[e]=i),i.addEventListener("DOMLoaded",()=>{this.ensureSVGStretch(n)}),i.addEventListener("data_ready",()=>{this.ensureSVGStretch(n)}),i.addEventListener("data_failed",r=>{console.error(`Lottie ${e} failed to load from ${t}:`,r)})}catch(i){console.error(`Error loading Lottie ${e} from ${t}:`,i)}}startMonitoring(){const e=()=>{if(!this.sceneSetup||!this.sceneSetup.getCamera()){requestAnimationFrame(e);return}const t=this.sceneSetup.getCamera().position.z;this.updateActiveLottie(t),requestAnimationFrame(e)};e()}ensureSVGStretch(e){const t=e.querySelector("svg");t&&(t.setAttribute("preserveAspectRatio","none"),t.style.width="100%",t.style.height="100%")}updateActiveLottie(e){const t=new Set;for(let a=0;a<this.config.length;a++){const o=this.config[a],c=o.index!==void 0?o.index:a,l=o.url||o.lottie;if(l&&l.trim()!==""){const u=o.playZ!==void 0?o.playZ:o.zindex,h=o.stopZ!==void 0?o.stopZ:null;e<=u&&(h==null||e>=h)&&t.add(c)}}for(let a=0;a<this.containers.length;a++){const o=this.containers[a],c=t.has(a),l=this.activeIndices.has(a);a===0&&!this.allowFirstLottieAutoPlay||(c&&!l?(o.classList.add("active"),this.lottieAnimations[a]&&this.lottieAnimations[a].goToAndPlay(0),this.ensureSVGStretch(o)):!c&&l&&(o.classList.remove("active"),this.lottieAnimations[a]&&this.lottieAnimations[a].stop()))}const n=-240,i=document.querySelector(".end__card--autowasbon"),r=document.querySelector(".dashboard__wrapper--off");e<=n?(i&&!i.classList.contains("visible")&&i.classList.add("visible"),r&&!r.classList.contains("hidden")&&r.classList.add("hidden")):(i&&i.classList.contains("visible")&&i.classList.remove("visible"),r&&r.classList.contains("hidden")&&r.classList.remove("hidden")),this.activeIndices=t}updateConfig(e){Array.isArray(e)&&e.length<=8&&(this.lottieAnimations.forEach(t=>{t&&t._blobUrls&&Array.isArray(t._blobUrls)&&t._blobUrls.forEach(n=>{URL.revokeObjectURL(n)})}),this.config=e.map((t,n)=>({index:n,url:t.url||t.lottie,playZ:t.playZ!==void 0?t.playZ:t.zindex,stopZ:t.stopZ!==void 0?t.stopZ:null})),this.config.forEach(t=>{const n=t.index!==void 0?t.index:this.config.indexOf(t),i=t.url||t.lottie;i&&i.trim()!==""&&this.loadLottie(n,i).catch(r=>{console.error(`Failed to load Lottie ${n}:`,r)})}))}reloadConfig(){this.loadConfig(),this.lottieAnimations.forEach(e=>{if(e&&e._blobUrls&&Array.isArray(e._blobUrls)&&e._blobUrls.forEach(t=>{URL.revokeObjectURL(t)}),e&&typeof e.destroy=="function")try{e.destroy()}catch(t){console.warn("Error destroying lottie animation:",t)}}),this.lottieAnimations=[],this.activeIndices.clear(),this.init()}getConfig(){return this.config}}function Lg(s,e={}){const{width:t=1024,height:n=512,fontFamily:i="Sink, sans-serif",fontSize:r=120,textColor:a="#000000",letterSpacing:o=0}=e,c=window.devicePixelRatio||1,l=document.createElement("canvas");l.width=t*c,l.height=n*c,l.style.width=`${t}px`,l.style.height=`${n}px`;const u=l.getContext("2d");if(u.imageSmoothingEnabled=!0,u.imageSmoothingQuality="high",u.scale(c,c),u.clearRect(0,0,t,n),u.font=`bold ${r}px ${i}`,u.textAlign="center",u.textBaseline="top",u.letterSpacing=`${o}px`,!s||s.trim()==="")return l;const h=t/2,p=18;return u.fillStyle=a,u.fillText(s,h,p),l}function Pg(s,e={}){const{width:t=736,height:n=540,textBoxWidth:i=600,textBoxHeight:r=290,textBoxTop:a=110,fontFamily:o="Sink, sans-serif",fontSize:c=40,textColor:l="#000000",lineHeight:u=1.4}=e,h=window.devicePixelRatio||1,d=document.createElement("canvas");d.width=t*h,d.height=n*h,d.style.width=`${t}px`,d.style.height=`${n}px`;const p=d.getContext("2d");if(p.imageSmoothingEnabled=!0,p.imageSmoothingQuality="high",p.scale(h,h),p.clearRect(0,0,t,n),!s||s.trim()==="")return d;p.font=`${c}px ${o}`,p.textAlign="center",p.textBaseline="top",p.fillStyle=l;const g=t/2,_=s.split(/\r?\n/),m=c*u,f=i-20,b=[];_.forEach(R=>{if(R.trim()===""){b.push("");return}const A=R.split(" ");let y="";A.forEach(C=>{const x=y+(y?" ":"")+C;p.measureText(x).width>f&&y?(b.push(y),y=C):y=x}),y&&b.push(y)});const v=b.length*m,S=a+(r-v)/2;return b.forEach((R,A)=>{const y=S+A*m;R.trim()!==""&&p.fillText(R,g,y)}),d}const js=1,Ig=.7;let Go=null,Ho=null,Vo=null;function mv(s){Go=s}function gv(s){Ho=s}function _v(s){Vo=s}function Dg(){return Vo?Vo():null}function Ug(){if(Go){const s=Go();return!s||s.trim()===""?"NIELS":s}return"NIELS"}function Ng(){if(Ho){const s=Ho();return!s||s.trim()===""?"Het schoonste cadeau van Nederland!":s}return"Het schoonste cadeau van Nederland!"}function Wn(){const s=Ug();return Lg(s.toUpperCase(),{width:736,height:540,fontFamily:"Sink, sans-serif",fontSize:52,textColor:"#000000",letterSpacing:2})}function Og(){const s=Ng();return Pg(s.toUpperCase(),{width:736,height:540,textBoxWidth:600,textBoxHeight:290,textBoxTop:110,fontFamily:"Sink, sans-serif",fontSize:60,textColor:"#000000",lineHeight:1})}let Fg="Power Sop";function vv(s){Fg=s}const xv={Start:{poort:"_assets/_objects/_textures/uvmap-bb-front--blue.png",poortName:Wn,boogSoap:"_assets/_objects/_textures/_power/uvmap-boog--soap.png",boogBrushup:"_assets/_objects/_textures/_power/uvmap-boog--brush-up.png",boogDefault:"_assets/_objects/_textures/uvmap-boog--blue.png",uvmapFront:"_assets/_objects/_textures/uvmap-bb-front--blue.png",uvmapBoog:"_assets/_objects/_textures/uvmap-boog--blue.png",uvmapSoap:"_assets/_objects/_textures/uvmap-boog--soap.png",uvmapBericht:"_assets/_objects/_textures/uvmap-boog--bericht.png",uvmapMedia:"_assets/_objects/_textures/uvmap-boog--media.png",uvmapWater:"_assets/_objects/_textures/uvmap-boog--water.png",uvmapBrushup:"_assets/_objects/_textures/_power/uvmap-boog--brush-up.png",uvmapBrush2:"_assets/_objects/_textures/uvmap-boog--blue.png",tunnel:"blue.png",lotties:{soap:{front:"https://lottie.host/85c574c9-8dc5-4e72-887b-99b0f1ee84cc/1rqeSvKaPg.lottie",back:"https://lottie.host/a06c396d-1825-443a-b113-fb6ddf092f2a/rvkUwUtV23.lottie"},brush1:{front:"https://lottie.host/69350847-d5fe-4913-a64a-011945334c3a/9CAGVfcCgh.lottie",back:"https://lottie.host/c2291279-7414-4d86-a5f3-8826edab247f/yFGv6yd5wO.lottie"},brush2:{front:"https://lottie.host/33b17c77-f0c3-4fc1-b52d-a9d90ddebc4b/Bfl5EMZvdo.lottie",back:null}}},"Party Party":{poort:"_assets/_objects/_textures/_party/uvmap__party--front.png",poortName:Wn,boogSoap:"_assets/_objects/_textures/_party/uvmap__party--boog--soap.png",boogBrushup:"_assets/_objects/_textures/_party/uvmap__party--boog.png",boogDefault:"_assets/_objects/_textures/_party/uvmap__party--boog.png",uvmapFront:"_assets/_objects/_textures/_party/uvmap__party--front.png",uvmapBoog:"_assets/_objects/_textures/_party/uvmap__party--boog.png",uvmapSoap:"_assets/_objects/_textures/_party/uvmap__party--boog--soap.png",uvmapBericht:"_assets/_objects/_textures/_party/uvmap__party--boog--bericht.png",uvmapMedia:"_assets/_objects/_textures/_party/uvmap__party--boog--media.png",uvmapWater:"_assets/_objects/_textures/_party/uvmap__party--boog--water.png",uvmapBrushup:"_assets/_objects/_textures/_party/uvmap__party--boog.png",uvmapBrush2:"_assets/_objects/_textures/_party/uvmap__party--boog.png",tunnel:"yellow.png",lotties:{soap:{front:"https://lottie.host/3de8a182-9c0f-4664-9a60-5be4fac03b0e/B15zcUFKVw.lottie",back:"https://lottie.host/db6efa2a-2148-442c-9928-63746656aa54/wD9kstIxb5.lottie"},brush2:{front:"https://lottie.host/b8d462a0-3a1b-4ade-8bd9-bd768ec77836/RKX7DdDazX.lottie"},message__media:{front:"https://lottie.host/3de8a182-9c0f-4664-9a60-5be4fac03b0e/B15zcUFKVw.lottie"}}},"Sweet Flowers":{poort:"_assets/_objects/_textures/_love/uvmap__love-front.png",poortName:Wn,boogSoap:"_assets/_objects/_textures/_love/uvmap__love--boog--soap.png",boogBrushup:"_assets/_objects/_textures/_love/uvmap__love--boog.png",boogDefault:"_assets/_objects/_textures/_love/uvmap-boog--love.png",uvmapFront:"_assets/_objects/_textures/_love/uvmap__love-front.png",uvmapBoog:"_assets/_objects/_textures/_love/uvmap__love--boog.png",uvmapSoap:"_assets/_objects/_textures/_love/uvmap__love--boog--soap.png",uvmapBericht:"_assets/_objects/_textures/_love/uvmap__love--boog--bericht.png",uvmapMedia:"_assets/_objects/_textures/_love/uvmap__love--boog--media.png",uvmapWater:"_assets/_objects/_textures/_love/uvmap__love--boog--water.png",uvmapBrushup:"_assets/_objects/_textures/_love/uvmap__love--boog.png",uvmapBrush2:"_assets/_objects/_textures/_love/uvmap__love--boog.png",tunnel:"red.png",lotties:{soap:{front:"https://lottie.host/3de8a182-9c0f-4664-9a60-5be4fac03b0e/B15zcUFKVw.lottie",back:"https://lottie.host/db6efa2a-2148-442c-9928-63746656aa54/wD9kstIxb5.lottie"},brush2:{front:"https://lottie.host/b8d462a0-3a1b-4ade-8bd9-bd768ec77836/RKX7DdDazX.lottie"},message__media:{front:"https://lottie.host/3de8a182-9c0f-4664-9a60-5be4fac03b0e/B15zcUFKVw.lottie"}}},"Pop Sop":{poort:"_assets/_objects/_textures/_pop/uvmap__pop-front.png",poortName:Wn,boogSoap:"_assets/_objects/_textures/_pop/uvmap__pop--boog--soap.png",boogBrushup:"_assets/_objects/_textures/_pop/uvmap__pop--boog.png",boogDefault:"_assets/_objects/_textures/_pop/uvmap-boog--pop.png",uvmapFront:"_assets/_objects/_textures/_pop/uvmap__pop-front.png",uvmapBoog:"_assets/_objects/_textures/_pop/uvmap__pop--boog.png",uvmapSoap:"_assets/_objects/_textures/_pop/uvmap__pop--boog--soap.png",uvmapBericht:"_assets/_objects/_textures/_pop/uvmap__pop--boog--bericht.png",uvmapMedia:"_assets/_objects/_textures/_pop/uvmap__pop--boog--media.png",uvmapWater:"_assets/_objects/_textures/_pop/uvmap__pop--boog--water.png",uvmapBrushup:"_assets/_objects/_textures/_pop/uvmap__pop--boog.png",uvmapBrush2:"_assets/_objects/_textures/_pop/uvmap__pop--boog.png",tunnel:"pink.png",lotties:{soap:{front:"https://lottie.host/3de8a182-9c0f-4664-9a60-5be4fac03b0e/B15zcUFKVw.lottie",back:"https://lottie.host/db6efa2a-2148-442c-9928-63746656aa54/wD9kstIxb5.lottie"},brush2:{front:"https://lottie.host/b8d462a0-3a1b-4ade-8bd9-bd768ec77836/RKX7DdDazX.lottie"},message__media:{front:"https://lottie.host/3de8a182-9c0f-4664-9a60-5be4fac03b0e/B15zcUFKVw.lottie"}}},"Power Sop":{poort:"_assets/_objects/_textures/_power/uvmap__power-front.png",poortName:Wn,boogSoap:"_assets/_objects/_textures/_power/uvmap__power--boog--soap.png",boogBrushup:"_assets/_objects/_textures/_power/uvmap__power--boog.png",boogDefault:"_assets/_objects/_textures/_power/uvmap-boog--power.png",uvmapFront:"_assets/_objects/_textures/_power/uvmap__power-front.png",uvmapBoog:"_assets/_objects/_textures/_power/uvmap__power--boog.png",uvmapSoap:"_assets/_objects/_textures/_power/uvmap__power--boog--soap.png",uvmapBericht:"_assets/_objects/_textures/_power/uvmap__power--boog--bericht.png",uvmapMedia:"_assets/_objects/_textures/_power/uvmap__power--boog--media.png",uvmapWater:"_assets/_objects/_textures/_power/uvmap__power--boog--water.png",uvmapBrushup:"_assets/_objects/_textures/_power/uvmap__power--boog.png",uvmapBrush2:"_assets/_objects/_textures/_power/uvmap__power--boog.png",tunnel:"green.png",lotties:{soap:{front:"https://lottie.host/ad607ffd-9044-4eb2-82ab-5f9b4d81a2b1/MedTZcbLoN.lottie",back:"https://lottie.host/db6efa2a-2148-442c-9928-63746656aa54/wD9kstIxb5.lottie"},brush1:{},brush2:{front:"https://lottie.host/33b17c77-f0c3-4fc1-b52d-a9d90ddebc4b/Bfl5EMZvdo.lottie",back:null}}},"Feel Good":{poort:"_assets/_objects/_textures/_feelgood/uvmap__feelgood-front.png",poortName:Wn,boogSoap:"_assets/_objects/_textures/_feelgood/uvmap__feelgood--boog--soap.png",boogBrushup:"_assets/_objects/_textures/_feelgood/uvmap__feelgood--boog.png",boogDefault:"_assets/_objects/_textures/_feelgood/uvmap-boog--feelgood.png",uvmapFront:"_assets/_objects/_textures/_feelgood/uvmap__feelgood-front.png",uvmapBoog:"_assets/_objects/_textures/_feelgood/uvmap__feelgood--boog.png",uvmapSoap:"_assets/_objects/_textures/_pop/uvmap__pop--boog--soap.png",uvmapBericht:"_assets/_objects/_textures/_feelgood/uvmap__feelgood--boog--bericht.png",uvmapMedia:"_assets/_objects/_textures/_feelgood/uvmap__feelgood--boog--media.png",uvmapWater:"_assets/_objects/_textures/_feelgood/uvmap__feelgood--boog--water.png",uvmapBrushup:"_assets/_objects/_textures/_feelgood/uvmap__feelgood--boog.png",uvmapBrush2:"_assets/_objects/_textures/_feelgood/uvmap__feelgood--boog.png",tunnel:"orange.png",lotties:{soap:{front:"https://lottie.host/218bc723-72d4-4e35-8149-0475b8fde1ae/GMhipfzf2R.lottie",back:"https://lottie.host/db6efa2a-2148-442c-9928-63746656aa54/wD9kstIxb5.lottie"},brush2:{front:"https://lottie.host/90704ac7-a303-4698-b50a-00033ba5069f/OpuAREFXBw.lottie"},message__media:{front:"https://lottie.host/218bc723-72d4-4e35-8149-0475b8fde1ae/GMhipfzf2R.lottie"}}},"Soft Calm":{poort:"_assets/_objects/_textures/_calm/uvmap__calm-front.png",poortName:Wn,boogSoap:"_assets/_objects/_textures/_pop/uvmap__pop--boog--soap.png",boogBrushup:"_assets/_objects/_textures/_calm/uvmap__calm--boog.png",boogDefault:"_assets/_objects/_textures/_calm/uvmap-boog--calm.png",uvmapFront:"_assets/_objects/_textures/_calm/uvmap__calm-front.png",uvmapBoog:"_assets/_objects/_textures/_calm/uvmap__calm--boog.png",uvmapSoap:"_assets/_objects/_textures/_calm/uvmap__calm--boog--soap.png",uvmapBericht:"_assets/_objects/_textures/_calm/uvmap__calm--boog--bericht.png",uvmapMedia:"_assets/_objects/_textures/_calm/uvmap__calm--boog--media.png",uvmapWater:"_assets/_objects/_textures/_calm/uvmap__calm--boog--water.png",uvmapBrushup:"_assets/_objects/_textures/_calm/uvmap__calm--boog.png",uvmapBrush2:"_assets/_objects/_textures/_calm/uvmap__calm--boog.png",tunnel:"lightblue.png",lotties:{soap:{front:"https://lottie.host/23ec9e85-bd96-4463-84c8-96d1df0aff2e/y5UlQaJ5BZ.lottie",back:"https://lottie.host/db6efa2a-2148-442c-9928-63746656aa54/wD9kstIxb5.lottie"},brush2:{front:"https://lottie.host/6c2f5bf7-16e8-427d-a3ab-18a408dca2f3/vDKCcKMC8d.lottie"},message__media:{front:"https://lottie.host/23ec9e85-bd96-4463-84c8-96d1df0aff2e/y5UlQaJ5BZ.lottie"}}}},Bg=10,kg=-180,zg=-10,Gg=180,zc=20,Hg=-0,Vg=120,Wg=-80,jg=-40,Xg=20,Zg=-20,Yg=220,qg=220,$g=-40,Kg=20,jr=.5,Jg=8,Gc=80,Fs=-4,Qg=8,e_=200,Hc=20,t_=1,n_=.2,i_=-110,s_=-120,r_=50,o_=-80,a_=-43,c_=20,l_=-0,u_=1,h_=.6,d_=-260,f_=-304,p_=20,m_=300,g_=100,Vc=2,Xr=1,Zr=.3,__=-50,v_=-10,x_=20,Wc=-500,b_=-180,S_=-140,M_=20,y_=200,T_=Math.PI/2,E_=10,A_=1.5;function jc(s,e){if(e===Gl)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Ks||e===sa){let t=s.getIndex();if(t===null){const a=[],o=s.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)a.push(c);s.setIndex(a),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===Ks)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class bv extends oi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new P_(t)}),this.register(function(t){return new z_(t)}),this.register(function(t){return new G_(t)}),this.register(function(t){return new H_(t)}),this.register(function(t){return new D_(t)}),this.register(function(t){return new U_(t)}),this.register(function(t){return new N_(t)}),this.register(function(t){return new O_(t)}),this.register(function(t){return new L_(t)}),this.register(function(t){return new F_(t)}),this.register(function(t){return new I_(t)}),this.register(function(t){return new k_(t)}),this.register(function(t){return new B_(t)}),this.register(function(t){return new R_(t)}),this.register(function(t){return new V_(t)}),this.register(function(t){return new W_(t)})}load(e,t,n,i){const r=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const l=Ai.extractUrlBase(e);a=Ai.resolveURL(l,this.path)}else a=Ai.extractUrlBase(e);this.manager.itemStart(e);const o=function(l){i?i(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new Ea(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,a,function(u){t(u),r.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const a={},o={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Gu){try{a[Ge.KHR_BINARY_GLTF]=new j_(e)}catch(h){i&&i(h);return}r=JSON.parse(a[Ge.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new sv(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](l);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[h.name]=h,a[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(h){case Ge.KHR_MATERIALS_UNLIT:a[h]=new C_;break;case Ge.KHR_DRACO_MESH_COMPRESSION:a[h]=new X_(r,this.dracoLoader);break;case Ge.KHR_TEXTURE_TRANSFORM:a[h]=new Z_;break;case Ge.KHR_MESH_QUANTIZATION:a[h]=new Y_;break;default:d.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function w_(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const Ge={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class R_{constructor(e){this.parser=e,this.name=Ge.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let l;const u=new Te(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],dt);const h=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Bu(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Fu(u),l.distance=h;break;case"spot":l=new Ou(u),l.distance=h,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,Ln(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}}class C_{constructor(){this.name=Ge.KHR_MATERIALS_UNLIT}getMaterialType(){return gn}extendParams(e,t,n){const i=[];e.color=new Te(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],dt),e.opacity=a[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,qe))}return Promise.all(i)}}class L_{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class P_{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:an}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new He(o,o)}return Promise.all(r)}}class I_{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:an}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}}class D_{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:an}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Te(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],dt)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,qe)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}}class U_{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:an}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}}class N_{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:an}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new Te().setRGB(o[0],o[1],o[2],dt),Promise.all(r)}}class O_{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:an}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class F_{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:an}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new Te().setRGB(o[0],o[1],o[2],dt),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,qe)),Promise.all(r)}}class B_{constructor(e){this.parser=e,this.name=Ge.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:an}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}}class k_{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:an}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}}class z_{constructor(e){this.parser=e,this.name=Ge.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}}class G_{constructor(e){this.parser=e,this.name=Ge.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=i.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,a.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class H_{constructor(e){this.parser=e,this.name=Ge.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=i.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,a.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class V_{constructor(e){this.name=Ge.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const c=i.byteOffset||0,l=i.byteLength||0,u=i.count,h=i.byteStride,d=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,h,d,i.mode,i.filter).then(function(p){return p.buffer}):a.ready.then(function(){const p=new ArrayBuffer(u*h);return a.decodeGltfBuffer(new Uint8Array(p),u,h,d,i.mode,i.filter),p})})}else return null}}class W_{constructor(e){this.name=Ge.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const l of i.primitives)if(l.mode!==Ht.TRIANGLES&&l.mode!==Ht.TRIANGLE_STRIP&&l.mode!==Ht.TRIANGLE_FAN&&l.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],c={};for(const l in a)o.push(this.parser.getDependency("accessor",a[l]).then(u=>(c[l]=u,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{const u=l.pop(),h=u.isGroup?u.children:[u],d=l[0].count,p=[];for(const g of h){const _=new Fe,m=new I,f=new Mn,b=new I(1,1,1),v=new yu(g.geometry,g.material,d);for(let S=0;S<d;S++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,S),c.ROTATION&&f.fromBufferAttribute(c.ROTATION,S),c.SCALE&&b.fromBufferAttribute(c.SCALE,S),v.setMatrixAt(S,_.compose(m,f,b));for(const S in c)if(S==="_COLOR_0"){const R=c[S];v.instanceColor=new tr(R.array,R.itemSize,R.normalized)}else S!=="TRANSLATION"&&S!=="ROTATION"&&S!=="SCALE"&&g.geometry.setAttribute(S,c[S]);tt.prototype.copy.call(v,g),this.parser.assignFinalMaterial(v),p.push(v)}return u.isGroup?(u.clear(),u.add(...p),u):p[0]}))}}const Gu="glTF",Vi=12,Xc={JSON:1313821514,BIN:5130562};class j_{constructor(e){this.name=Ge.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Vi),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Gu)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Vi,r=new DataView(e,Vi);let a=0;for(;a<i;){const o=r.getUint32(a,!0);a+=4;const c=r.getUint32(a,!0);if(a+=4,c===Xc.JSON){const l=new Uint8Array(e,Vi+a,o);this.content=n.decode(l)}else if(c===Xc.BIN){const l=Vi+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class X_{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ge.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(const u in a){const h=Wo[u]||u.toLowerCase();o[h]=a[u]}for(const u in e.attributes){const h=Wo[u]||u.toLowerCase();if(a[u]!==void 0){const d=n.accessors[e.attributes[u]],p=wi[d.componentType];l[h]=p.name,c[h]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,d){i.decodeDracoFile(u,function(p){for(const g in p.attributes){const _=p.attributes[g],m=c[g];m!==void 0&&(_.normalized=m)}h(p)},o,l,dt,d)})})}}class Z_{constructor(){this.name=Ge.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Y_{constructor(){this.name=Ge.KHR_MESH_QUANTIZATION}}class Hu extends Ui{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,u=i-t,h=(n-t)/u,d=h*h,p=d*h,g=e*l,_=g-l,m=-2*p+3*d,f=p-d,b=1-m,v=f-d+h;for(let S=0;S!==o;S++){const R=a[_+S+o],A=a[_+S+c]*u,y=a[g+S+o],C=a[g+S]*u;r[S]=b*R+v*A+m*y+f*C}return r}}const q_=new Mn;class $_ extends Hu{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return q_.fromArray(r).normalize().toArray(r),r}}const Ht={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},wi={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Zc={9728:lt,9729:ut,9984:$s,9985:$o,9986:ji,9987:Nn},Yc={33071:vt,33648:$i,10497:Jn},Yr={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Wo={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Rn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},K_={CUBICSPLINE:void 0,LINEAR:ei,STEP:Ci},qr={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function J_(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new dr({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:xt})),s.DefaultMaterial}function jn(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Ln(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Q_(s,e,t){let n=!1,i=!1,r=!1;for(let l=0,u=e.length;l<u;l++){const h=e[l];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const a=[],o=[],c=[];for(let l=0,u=e.length;l<u;l++){const h=e[l];if(n){const d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):s.attributes.position;a.push(d)}if(i){const d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):s.attributes.normal;o.push(d)}if(r){const d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):s.attributes.color;c.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){const u=l[0],h=l[1],d=l[2];return n&&(s.morphAttributes.position=u),i&&(s.morphAttributes.normal=h),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function ev(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function tv(s){let e;const t=s.extensions&&s.extensions[Ge.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+$r(t.attributes):e=s.indices+":"+$r(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+$r(s.targets[n]);return e}function $r(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function jo(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function nv(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const iv=new Fe;class sv{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new w_,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,r=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,r=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&r<98?this.textureLoader=new Aa(this.options.manager):this.textureLoader=new zu(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Ea(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return jn(r,o,i),Ln(o,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const a=t[i].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(a,o)=>{const c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(const[l,u]of a.children.entries())r(u,o.children[l])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ge.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,a){n.load(Ai.resolveURL(t.uri,i.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const a=Yr[i.type],o=wi[i.componentType],c=i.normalized===!0,l=new o(i.count*a);return Promise.resolve(new Et(l,a,c))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(a){const o=a[0],c=Yr[i.type],l=wi[i.componentType],u=l.BYTES_PER_ELEMENT,h=u*c,d=i.byteOffset||0,p=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let _,m;if(p&&p!==h){const f=Math.floor(d/p),b="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+f+":"+i.count;let v=t.cache.get(b);v||(_=new l(o,f*p,i.count*p/u),v=new bu(_,p/u),t.cache.add(b,v)),m=new lr(v,c,d%p/u,g)}else o===null?_=new l(i.count*c):_=new l(o,d,i.count*c),m=new Et(_,c,g);if(i.sparse!==void 0){const f=Yr.SCALAR,b=wi[i.sparse.indices.componentType],v=i.sparse.indices.byteOffset||0,S=i.sparse.values.byteOffset||0,R=new b(a[1],v,i.sparse.count*f),A=new l(a[2],S,i.sparse.count*c);o!==null&&(m=new Et(m.array.slice(),m.itemSize,m.normalized));for(let y=0,C=R.length;y<C;y++){const x=R[y];if(m.setX(x,A[y*c]),c>=2&&m.setY(x,A[y*c+1]),c>=3&&m.setZ(x,A[y*c+2]),c>=4&&m.setW(x,A[y*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r];let o=this.textureLoader;if(a.uri){const c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){const i=this,r=this.json,a=r.textures[e],o=r.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);const d=(r.samplers||{})[a.sampler]||{};return u.magFilter=Zc[d.magFilter]||ut,u.minFilter=Zc[d.minFilter]||Nn,u.wrapS=Yc[d.wrapS]||Jn,u.wrapT=Yc[d.wrapT]||Jn,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const a=i.images[e],o=self.URL||self.webkitURL;let c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(h){l=!0;const d=new Blob([h],{type:a.mimeType});return c=o.createObjectURL(d),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(c).then(function(h){return new Promise(function(d,p){let g=d;t.isImageBitmapLoader===!0&&(g=function(_){const m=new ht(_);m.needsUpdate=!0,d(m)}),t.load(Ai.resolveURL(h,r.path),g,void 0,p)})}).then(function(h){return l===!0&&o.revokeObjectURL(c),h.userData.mimeType=a.mimeType||nv(a.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[Ge.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[Ge.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const c=r.associations.get(a);a=r.extensions[Ge.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,c)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new Ma,$t.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new Sa,$t.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(i||r||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),r&&(c.vertexColors=!0),a&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return dr}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let a;const o={},c=r.extensions||{},l=[];if(c[Ge.KHR_MATERIALS_UNLIT]){const h=i[Ge.KHR_MATERIALS_UNLIT];a=h.getMaterialType(),l.push(h.extendParams(o,r,t))}else{const h=r.pbrMetallicRoughness||{};if(o.color=new Te(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){const d=h.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],dt),o.opacity=d[3]}h.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",h.baseColorTexture,qe)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=Yt);const u=r.alphaMode||qr.OPAQUE;if(u===qr.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===qr.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==gn&&(l.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new He(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;o.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&a!==gn&&(l.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==gn){const h=r.emissiveFactor;o.emissive=new Te().setRGB(h[0],h[1],h[2],dt)}return r.emissiveTexture!==void 0&&a!==gn&&l.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,qe)),Promise.all(l).then(function(){const h=new a(o);return r.name&&(h.name=r.name),Ln(h,r),t.associations.set(h,{materials:e}),r.extensions&&jn(i,h,r),h})}createUniqueName(e){const t=je.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[Ge.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return qc(c,o,t)})}const a=[];for(let o=0,c=e.length;o<c;o++){const l=e[o],u=tv(l),h=i[u];if(h)a.push(h.promise);else{let d;l.extensions&&l.extensions[Ge.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=qc(new Qt,l,t),i[u]={primitive:l,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let c=0,l=a.length;c<l;c++){const u=a[c].material===void 0?J_(this.cache):this.getDependency("material",a[c].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(c){const l=c.slice(0,c.length-1),u=c[c.length-1],h=[];for(let p=0,g=u.length;p<g;p++){const _=u[p],m=a[p];let f;const b=l[p];if(m.mode===Ht.TRIANGLES||m.mode===Ht.TRIANGLE_STRIP||m.mode===Ht.TRIANGLE_FAN||m.mode===void 0)f=r.isSkinnedMesh===!0?new Su(_,b):new Bt(_,b),f.isSkinnedMesh===!0&&f.normalizeSkinWeights(),m.mode===Ht.TRIANGLE_STRIP?f.geometry=jc(f.geometry,sa):m.mode===Ht.TRIANGLE_FAN&&(f.geometry=jc(f.geometry,Ks));else if(m.mode===Ht.LINES)f=new Tu(_,b);else if(m.mode===Ht.LINE_STRIP)f=new hr(_,b);else if(m.mode===Ht.LINE_LOOP)f=new Eu(_,b);else if(m.mode===Ht.POINTS)f=new Au(_,b);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(f.geometry.morphAttributes).length>0&&ev(f,r),f.name=t.createUniqueName(r.name||"mesh_"+e),Ln(f,r),m.extensions&&jn(i,f,m),t.assignFinalMaterial(f),h.push(f)}for(let p=0,g=h.length;p<g;p++)t.associations.set(h[p],{meshes:e,primitives:p});if(h.length===1)return r.extensions&&jn(i,h[0],r),h[0];const d=new In;r.extensions&&jn(i,d,r),t.associations.set(d,{meshes:e});for(let p=0,g=h.length;p<g;p++)d.add(h[p]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Tt(Jl.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new ar(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Ln(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),a=i,o=[],c=[];for(let l=0,u=a.length;l<u;l++){const h=a[l];if(h){o.push(h);const d=new Fe;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new ur(o,c)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,a=[],o=[],c=[],l=[],u=[];for(let h=0,d=i.channels.length;h<d;h++){const p=i.channels[h],g=i.samplers[p.sampler],_=p.target,m=_.node,f=i.parameters!==void 0?i.parameters[g.input]:g.input,b=i.parameters!==void 0?i.parameters[g.output]:g.output;_.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",f)),c.push(this.getDependency("accessor",b)),l.push(g),u.push(_))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(h){const d=h[0],p=h[1],g=h[2],_=h[3],m=h[4],f=[];for(let b=0,v=d.length;b<v;b++){const S=d[b],R=p[b],A=g[b],y=_[b],C=m[b];if(S===void 0)continue;S.updateMatrix&&S.updateMatrix();const x=n._createAnimationTracks(S,R,A,y,C);if(x)for(let T=0;T<x.length;T++)f.push(x[T])}return new Iu(r,void 0,f)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const a=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=i.weights.length;c<l;c++)o.morphTargetInfluences[c]=i.weights[c]}),a})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=i.children||[];for(let l=0,u=o.length;l<u;l++)a.push(n.getDependency("node",o[l]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(a),c]).then(function(l){const u=l[0],h=l[1],d=l[2];d!==null&&u.traverse(function(p){p.isSkinnedMesh&&p.bind(d,iv)});for(let p=0,g=h.length;p<g;p++)u.add(h[p]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],a=r.name?i.createUniqueName(r.name):"",o=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(l){return i._getNodeRef(i.cameraCache,r.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let u;if(r.isBone===!0?u=new ba:l.length>1?u=new In:l.length===1?u=l[0]:u=new tt,u!==l[0])for(let h=0,d=l.length;h<d;h++)u.add(l[h]);if(r.name&&(u.userData.name=r.name,u.name=a),Ln(u,r),r.extensions&&jn(n,u,r),r.matrix!==void 0){const h=new Fe;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return i.associations.has(u)||i.associations.set(u,{}),i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new In;n.name&&(r.name=i.createUniqueName(n.name)),Ln(r,n),n.extensions&&jn(t,r,n);const a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(i.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let u=0,h=c.length;u<h;u++)r.add(c[u]);const l=u=>{const h=new Map;for(const[d,p]of i.associations)(d instanceof $t||d instanceof ht)&&h.set(d,p);return u.traverse(d=>{const p=i.associations.get(d);p!=null&&h.set(d,p)}),h};return i.associations=l(r),r})}_createAnimationTracks(e,t,n,i,r){const a=[],o=e.name?e.name:e.uuid,c=[];Rn[r.path]===Rn.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(o);let l;switch(Rn[r.path]){case Rn.weights:l=ti;break;case Rn.rotation:l=Fn;break;case Rn.position:case Rn.scale:l=ni;break;default:switch(n.itemSize){case 1:l=ti;break;case 2:case 3:default:l=ni;break}break}const u=i.interpolation!==void 0?K_[i.interpolation]:ei,h=this._getArrayFromAccessor(n);for(let d=0,p=c.length;d<p;d++){const g=new l(c[d]+"."+Rn[r.path],t.array,h,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=jo(t.constructor),i=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Fn?$_:Hu;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function rv(s,e,t){const n=e.attributes,i=new Kt;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(i.set(new I(c[0],c[1],c[2]),new I(l[0],l[1],l[2])),o.normalized){const u=jo(wi[o.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const o=new I,c=new I;for(let l=0,u=r.length;l<u;l++){const h=r[l];if(h.POSITION!==void 0){const d=t.json.accessors[h.POSITION],p=d.min,g=d.max;if(p!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),d.normalized){const _=jo(wi[d.componentType]);c.multiplyScalar(_)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;const a=new Jt;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=a}function qc(s,e,t){const n=e.attributes,i=[];function r(a,o){return t.getDependency("accessor",a).then(function(c){s.setAttribute(o,c)})}for(const a in n){const o=Wo[a]||a.toLowerCase();o in s.attributes||i.push(r(n[a],o))}if(e.indices!==void 0&&!s.index){const a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});i.push(a)}return We.workingColorSpace!==dt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${We.workingColorSpace}" not supported.`),Ln(s,e),rv(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Q_(s,e.targets,t):s})}class Sv{constructor(e){this.sceneSetup=e,this.textureCache=new Map,this.textureLoader=new Aa,this.textureLoader.setCrossOrigin("anonymous"),this.poortTexture=null}belongsToStation(e,t){if(!t)return!0;let n=e;for(;n.parent&&n.parent!==this.sceneSetup.getScene();)n=n.parent;return n.userData.stationId===t}getObjectPath(e){const t=[];let n=e;for(;n&&n!==this.sceneSetup.getScene();)t.unshift(n.name||"unnamed"),n=n.parent;return t.join(" > ")}applyUVMappingOnly(e,t,n=null,i=null){const r=[],a=e,o=n||null;if(this.sceneSetup.getScene().traverse(c=>{if((c.name||"")===a&&!c.isMesh&&(c.visible=!0,c.traverse(u=>{u.isMesh&&this.belongsToStation(u,i)&&(o?(u.name||"")===o&&!r.includes(u)&&r.push(u):r.includes(u)||r.push(u))})),c.isMesh&&this.belongsToStation(c,i)){const u=c.name||"";u===a&&!r.includes(c)&&(o?u===o&&r.push(c):r.push(c))}}),r.length===0){console.warn(`No ${e} objects found for UV mapping.`);return}r.forEach((c,l)=>{if(c.geometry&&c.geometry.attributes&&c.geometry.attributes.position){c.geometry.computeBoundingBox();const u=c.geometry.boundingBox;if(u){const h=c.geometry.attributes.position.array,d=new I;u.getSize(d);const p=[];for(let g=0;g<h.length;g+=3){let _=0,m=0;switch(t){case"x":_=d.x>0?(h[g]-u.min.x)/d.x:0,m=d.y>0?(h[g+1]-u.min.y)/d.y:0;break;case"y":_=d.x>0?(h[g]-u.min.x)/d.x:0,m=d.z>0?(h[g+2]-u.min.z)/d.z:0;break;case"z":_=d.x>0?(h[g]-u.min.x)/d.x:0,m=d.y>0?(h[g+1]-u.min.y)/d.y:0;break;case"xy":_=d.x>0?(h[g]-u.min.x)/d.x:0,m=d.y>0?(h[g+1]-u.min.y)/d.y:0;break;case"xz":_=d.x>0?(h[g]-u.min.x)/d.x:0,m=d.z>0?(h[g+2]-u.min.z)/d.z:0;break;case"yz":_=d.y>0?(h[g+1]-u.min.y)/d.y:0,m=d.z>0?(h[g+2]-u.min.z)/d.z:0;break;default:_=d.x>0?(h[g]-u.min.x)/d.x:0,m=d.y>0?(h[g+1]-u.min.y)/d.y:0}p.push(_,m)}if(c.geometry.attributes.uv){const g=c.geometry.attributes.uv;for(let _=0;_<p.length;_++)g.array[_]=p[_];g.needsUpdate=!0}else c.geometry.setAttribute("uv",new kt(p,2))}}c.visible=!0})}applyTextureToObjects(e,t,n,i,r=null,a=null,o=!0,c=!0,l=!0,u=!1,h=!1,d=!1,p=!1){h&&(e.includes("user__wens")||e.includes("user__media")||e.includes("autowasbon__txt"));const g=[],_=e,m=r||null;if(this.sceneSetup.getScene().traverse(f=>{if((f.name||"")===_&&!f.isMesh&&(f.visible=!0,f.traverse(v=>{v.isMesh&&this.belongsToStation(v,a)&&(m?(v.name||"")===m&&!g.includes(v)&&g.push(v):g.includes(v)||g.push(v))})),f.isMesh&&this.belongsToStation(f,a)){const v=f.name||"";v===_&&!g.includes(f)&&(m?v===m&&g.push(f):g.push(f))}}),g.length===0){if(e!=="wasboog__back"){console.warn(`No ${e} objects found. Searching for similar names...`);const f=[];this.sceneSetup.getScene().traverse(b=>{var S;const v=b.name||"";(v.includes(e)||e.includes(v))&&(b.isMesh?f.push(`Mesh: "${b.name}" (Parent: "${(S=b.parent)==null?void 0:S.name}")`):f.push(`Group: "${b.name}"`))}),f.length>0&&console.warn("Found similar names:",f)}return}g.forEach((f,b)=>{const v=f.material,S=!p&&v&&v.type==="ShaderMaterial"&&v.uniforms&&v.uniforms.map,R=y=>{if(u){const B=new gn({map:t,transparent:o!==void 0?o:(y==null?void 0:y.transparent)!==!1,opacity:(y==null?void 0:y.opacity)!==void 0?y.opacity:1,side:(y==null?void 0:y.side)||xt,depthWrite:l,depthTest:!0,toneMapped:!1,fog:!1});return B.map&&(B.map.colorSpace=qe),B}const C=S&&!p?v.uniforms.map.value:null,x=C!==null,T={map:{value:x?C:t},opacity:{value:(y==null?void 0:y.opacity)!==void 0?y.opacity:1},gamma:{value:i}};x&&(T.overlayMap={value:t});const D=x?`
          uniform sampler2D map;
          uniform sampler2D overlayMap;
          uniform float opacity;
          uniform float gamma;
          varying vec2 vUv;
          
          void main() {
            vec2 flippedUv = vec2(vUv.x, 1.0 - vUv.y);
            vec4 baseColor = texture2D(map, flippedUv);
            vec4 overlayColor = texture2D(overlayMap, flippedUv);
            
            // Apply gamma correction to base
            vec3 correctedBase = pow(baseColor.rgb, vec3(1.0 / gamma));
            
            // Apply gamma correction to overlay
            vec3 correctedOverlay = pow(overlayColor.rgb, vec3(1.0 / gamma));
            
            // Blend overlay on top (overlay alpha determines blend amount)
            vec3 finalColor = mix(correctedBase, correctedOverlay, overlayColor.a);
            float finalAlpha = max(baseColor.a, overlayColor.a) * opacity;
            
            gl_FragColor = vec4(finalColor, finalAlpha);
          }
        `:`
          uniform sampler2D map;
          uniform float opacity;
          uniform float gamma;
          varying vec2 vUv;
          
          void main() {
            vec2 flippedUv = vec2(vUv.x, 1.0 - vUv.y);
            vec4 texColor = texture2D(map, flippedUv);
            vec3 correctedColor = pow(texColor.rgb, vec3(1.0 / gamma));
            gl_FragColor = vec4(correctedColor, texColor.a * opacity);
          }
        `;return new Dt({uniforms:T,vertexShader:`
            varying vec2 vUv;
            void main() {
              vUv = uv;
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
          `,fragmentShader:D,side:(y==null?void 0:y.side)||xt,transparent:o!==void 0?o:(y==null?void 0:y.transparent)!==!1,depthWrite:l,depthTest:!0})};if(f.geometry&&f.geometry.attributes&&f.geometry.attributes.position){f.geometry.computeBoundingBox();const y=f.geometry.boundingBox;if(y){const C=f.geometry.attributes.position.array,x=new I;y.getSize(x);const T=[];for(let D=0;D<C.length;D+=3){let B=0,Z=0;switch(n){case"x":B=x.x>0?(C[D]-y.min.x)/x.x:0,Z=x.y>0?(C[D+1]-y.min.y)/x.y:0;break;case"y":B=x.x>0?(C[D]-y.min.x)/x.x:0,Z=x.z>0?(C[D+2]-y.min.z)/x.z:0;break;case"z":B=x.x>0?(C[D]-y.min.x)/x.x:0,Z=x.y>0?(C[D+1]-y.min.y)/x.y:0;break;case"xy":B=x.x>0?(C[D]-y.min.x)/x.x:0,Z=x.y>0?(C[D+1]-y.min.y)/x.y:0;break;case"xz":B=x.x>0?(C[D]-y.min.x)/x.x:0,Z=x.z>0?(C[D+2]-y.min.z)/x.z:0;break;case"yz":B=x.y>0?(C[D+1]-y.min.y)/x.y:0,Z=x.z>0?(C[D+2]-y.min.z)/x.z:0;break;default:B=x.x>0?(C[D]-y.min.x)/x.x:0,Z=x.y>0?(C[D+1]-y.min.y)/x.y:0}h&&(Z=1-Z),d&&(B=1-B),T.push(B,Z)}if(f.geometry.attributes.uv){const D=f.geometry.attributes.uv;for(let B=0;B<T.length;B++)D.array[B]=T[B];D.needsUpdate=!0}else f.geometry.setAttribute("uv",new kt(T,2))}}else if(h&&f.geometry&&f.geometry.attributes&&f.geometry.attributes.uv){const y=f.geometry.attributes.uv,C=y.array;if(h)for(let x=1;x<C.length;x+=2)C[x]=1-C[x];if(d)for(let x=0;x<C.length;x+=2)C[x]=1-C[x];y.needsUpdate=!0}f.visible=!0,f.userData.hasCustomTexture=!0,f.userData.customTextureType=e,(!l||u)&&(f.renderOrder=100);const A=f.material;f.material?(Array.isArray(f.material)?f.material=f.material.map(y=>R(y)):f.material=R(f.material),f.material.needsUpdate=!0):f.material=R(null),p&&A&&A!==f.material&&setTimeout(()=>{Array.isArray(A)?A.forEach(y=>{y&&y.dispose&&(y.map&&y.map.dispose&&y.map.dispose(),y.uniforms&&(y.uniforms.map&&y.uniforms.map.value&&y.uniforms.map.value.dispose&&y.uniforms.map.value.dispose(),y.uniforms.overlayMap&&y.uniforms.overlayMap.value&&y.uniforms.overlayMap.value.dispose&&y.uniforms.overlayMap.value.dispose()),y.dispose())}):A&&A.dispose&&(A.map&&A.map.dispose&&A.map.dispose(),A.uniforms&&(A.uniforms.map&&A.uniforms.map&&A.uniforms.map.value&&A.uniforms.map.value.dispose&&A.uniforms.map.value.dispose(),A.uniforms.overlayMap&&A.uniforms.overlayMap.value&&A.uniforms.overlayMap.value.dispose&&A.uniforms.overlayMap.value.dispose()),A.dispose())},0),f.castShadow=!1,f.receiveShadow=!1})}giveObjectMapping(e,t,n="xy",i={}){const{flipY:r=!1,flipV:a=!1,flipH:o=!1,wrapS:c=vt,wrapT:l=vt,gamma:u=js,meshName:h=null,stationId:d=null,uvOnly:p=!1,transparent:g=!0,visible:_=!0,depthWrite:m=!0,useBasicMaterial:f=!1,forceReplace:b=!1}=i,v=n.toLowerCase();if(p){this.applyUVMappingOnly(e,v,h,d);return}let S=t,R=t;if(typeof t=="function"){const A=t();if(A&&A instanceof HTMLCanvasElement)S=A,R=`canvas_${e}_${Date.now()}`;else{console.error("Function provided to giveObjectMapping did not return a canvas");return}}if(S instanceof HTMLCanvasElement){const A=new ya(S);A.flipY=r,A.wrapS=c,A.wrapT=l,f&&(A.colorSpace=qe),A.needsUpdate=!0,this.textureCache.set(R,A),this.applyTextureToObjects(e,A,v,u,h,d,g,_,m,f,a,o,b);return}if(this.textureCache.has(R)){const A=this.textureCache.get(R);this.applyTextureToObjects(e,A,v,u,h,d,g,_,m,f,a,o,b)}else this.textureLoader.load(t,A=>{A.flipY=r,A.wrapS=c,A.wrapT=l,f&&(A.colorSpace=qe),this.textureCache.set(R,A),this.applyTextureToObjects(e,A,v,u,h,d,g,_,m,f,a,o,b)},void 0,A=>{console.error(`Error loading texture ${t}:`,A)})}applyPoortTextureToModel(e){if(!this.poortTexture){console.warn("Poort texture not loaded yet, skipping texture application");return}const t=[];e.traverse(n=>{const i=(n.name||"").toLowerCase();(i==="poort"||i.includes("poort"))&&!n.isMesh&&(n.visible=!0,n.traverse(r=>{r.isMesh&&(t.includes(r)||t.push(r))}))}),e.traverse(n=>{var i;if(n.isMesh){const r=(((i=n.parent)==null?void 0:i.name)||"").toLowerCase();(r==="poort"||r.includes("poort"))&&(t.includes(n)||t.push(n))}}),t.length===0&&(console.warn("No poort objects found in model. Available groups and meshes:"),e.traverse(n=>{n.isMesh})),t.forEach(n=>{const i=r=>{const a=js;return new Dt({uniforms:{map:{value:this.poortTexture},opacity:{value:(r==null?void 0:r.opacity)!==void 0?r.opacity:1},gamma:{value:a}},vertexShader:`
            varying vec2 vUv;
            void main() {
              vUv = uv;
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
          `,fragmentShader:`
            uniform sampler2D map;
            uniform float opacity;
            uniform float gamma;
            varying vec2 vUv;
            
            void main() {
              vec2 flippedUv = vec2(vUv.x, 1.0 - vUv.y);
              vec4 texColor = texture2D(map, flippedUv);
              vec3 correctedColor = pow(texColor.rgb, vec3(1.0 / gamma));
              gl_FragColor = vec4(correctedColor, texColor.a * opacity);
            }
          `,side:(r==null?void 0:r.side)||xt,transparent:(r==null?void 0:r.transparent)!==!1})};if(n.geometry&&n.geometry.attributes&&n.geometry.attributes.position){n.geometry.computeBoundingBox();const r=n.geometry.boundingBox;if(r){const a=n.geometry.attributes.position.array,o=new I;r.getSize(o);const c=[];for(let l=0;l<a.length;l+=3){const u=o.x>0?(a[l]-r.min.x)/o.x:0,h=o.y>0?(a[l+1]-r.min.y)/o.y:0;c.push(u,h)}if(n.geometry.attributes.uv){const l=n.geometry.attributes.uv;for(let u=0;u<c.length;u++)l.array[u]=c[u];l.needsUpdate=!0}else n.geometry.setAttribute("uv",new kt(c,2))}}n.visible=!0,n.userData.hasCustomTexture=!0,n.userData.customTextureType="poort",n.material?(Array.isArray(n.material)?n.material=n.material.map(r=>i(r)):n.material=i(n.material),n.material.needsUpdate=!0):n.material=i(null),n.castShadow=!1,n.receiveShadow=!1})}applyPoortTextureToScene(){if(!this.poortTexture){console.warn("Poort texture not loaded yet");return}const e=new Set;this.sceneSetup.getScene().traverse(t=>{if((!t.parent||t.parent===this.sceneSetup.getScene())&&!e.has(t)){e.add(t);let n=!1;t.traverse(i=>{const r=(i.name||"").toLowerCase();(r==="poort"||r.includes("poort"))&&(n=!0)}),n&&this.applyPoortTextureToModel(t)}})}loadPoortTexture(){this.textureLoader.load("_assets/_objects/_textures/uvmap-bb.png",e=>{e.flipY=!1,e.wrapS=vt,e.wrapT=vt,this.poortTexture=e,this.textureCache.set("_assets/_objects/_textures/uvmap-bb.png",e),this.applyPoortTextureToScene()},void 0,e=>{console.error("Error loading uvmap-bb.png texture:",e)})}async applyLottieMask(e,t,n={}){const{stationId:i=null,startZ:r=null,times:a=null,triggerDistance:o=null}=n,c=window.lottieManager;if(!c){console.error("LottieManager not available. Make sure it is initialized and available as window.lottieManager");return}const l=[],u=e;if(this.sceneSetup.getScene().traverse(_=>{(_.name||"")===u&&!_.isMesh&&(_.visible=!0,_.traverse(f=>{f.isMesh&&this.belongsToStation(f,i)&&(l.includes(f)||l.push(f))})),_.isMesh&&this.belongsToStation(_,i)&&(_.name||"")===u&&!l.includes(_)&&l.push(_)}),l.length===0){console.warn(`No ${e} objects found for Lottie mask.`);return}const h=`${e}_mask`,d=c.lottieAnimations&&c.lottieAnimations.some(_=>_.layerName===h&&(o!=null?_.triggerDistance===o:_.startZ===r)&&_.times===a),p=l.some(_=>_.userData&&_.userData.lottieMaskAnimation);if(d||p){console.log(`Lottie mask already applied to ${e}, skipping duplicate application`);return}const g=typeof t=="string"?{url:t,startZ:r,times:a}:{...t,startZ:r!==null?r:t.startZ,times:a!==null?a:t.times};try{const _=await c.loadLottieTexture(g);if(!_||!_.texture){console.error(`Failed to load Lottie mask from ${typeof t=="string"?t:t.url}`);return}const m=_.texture,f=_.anim;l.forEach(v=>{var R,A;const S=v.material;if(!S){console.warn(`Mesh ${v.name} has no material to apply mask to`);return}if(v.userData.lottieMaskAnimation=f,S.type==="MeshBasicMaterial")S.alphaMap=m,S.transparent=!0,m&&(m.colorSpace=qe),S.needsUpdate=!0;else if(S.type==="ShaderMaterial"){const y={...S.uniforms};y.alphaMap={value:m};const C=S.fragmentShader;if(C.includes("alphaMap"))S.uniforms.alphaMap.value=m,S.needsUpdate=!0;else{let x=C;const T=x.match(/(uniform\s+\w+\s+\w+;)/);T?x=x.replace(T[0],`${T[0]}
          uniform sampler2D alphaMap;`):x=x.replace("varying vec2 vUv;",`varying vec2 vUv;
          uniform sampler2D alphaMap;`);const B=C.includes("flippedUv")?"flippedUv":"vUv";x=x.replace(/gl_FragColor\s*=\s*vec4\(([^)]+)\);/,(Z,P)=>{if(P.includes(",")){const U=P.split(",");if(U.length===4)return`gl_FragColor = vec4(${U[0]}, ${U[1]}, ${U[2]}, ${U[3].trim()} * texture2D(alphaMap, ${B}).a);`;if(U.length===2)return`gl_FragColor = vec4(${U[0]}, ${U[1].trim()} * texture2D(alphaMap, ${B}).a);`}else return P.includes("vec3")?`gl_FragColor = vec4(${P}, texture2D(alphaMap, ${B}).a);`:`gl_FragColor = vec4(${P}.rgb, ${P}.a * texture2D(alphaMap, ${B}).a);`;return Z}),S.fragmentShader=x,S.uniforms=y,S.transparent=!0,S.needsUpdate=!0}}else{console.warn(`Material type ${S.type} not supported for Lottie mask. Converting to ShaderMaterial.`);const C={map:{value:S.map||((A=(R=S.uniforms)==null?void 0:R.map)==null?void 0:A.value)},alphaMap:{value:m},opacity:{value:S.opacity!==void 0?S.opacity:1}},x=new Dt({uniforms:C,vertexShader:`
              varying vec2 vUv;
              void main() {
                vUv = uv;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
              }
            `,fragmentShader:`
              uniform sampler2D map;
              uniform sampler2D alphaMap;
              uniform float opacity;
              varying vec2 vUv;
              
              void main() {
                vec2 flippedUv = vec2(vUv.x, 1.0 - vUv.y);
                vec4 baseColor = texture2D(map, flippedUv);
                vec4 maskColor = texture2D(alphaMap, flippedUv);
                
                // Use the alpha channel of the mask
                float maskAlpha = maskColor.a;
                
                gl_FragColor = vec4(baseColor.rgb, baseColor.a * maskAlpha * opacity);
              }
            `,transparent:!0,side:S.side||xt,depthWrite:S.depthWrite!==void 0?S.depthWrite:!0,depthTest:S.depthTest!==void 0?S.depthTest:!0});v.material=x}});const b=o!=null;if((r!==null||b)&&f){const v={anim:f,startZ:b?null:r,stopZ:null,times:a!==null?a:null,layerName:`${e}_mask`,started:!1,stopped:!1,playCount:0,completed:!1,triggerDistance:b?o:null,distanceTargetMeshes:b?l:null};a!==null&&a>0&&f.addEventListener("complete",()=>{v.playCount++,v.playCount>=v.times&&(f.setLoop(!1),v.stopped=!0,v.completed=!0)}),c.lottieAnimations&&c.lottieAnimations.push(v),b&&f&&(f.pause(),f.goToAndStop(0,!0))}console.log(`Applied Lottie mask to ${l.length} ${e} object(s)`)}catch(_){console.error(`Error applying Lottie mask to ${e}:`,_)}}async applyLottieTexture(e,t,n="x",i={}){const{stationId:r=null,visible:a=!0,depthWrite:o=!1,useBasicMaterial:c=!0,flipV:l=!1,flipTexture:u=!1,gamma:h=js,startZ:d=null,pauseZ:p=null,resumeZ:g=null}=i,_=window.lottieManager;if(!_){console.error("LottieManager not available. Make sure it is initialized and available as window.lottieManager");return}const m=typeof t=="string"?{url:t,startZ:d,pauseZ:p,resumeZ:g}:{...t,startZ:d!==null?d:t.startZ,pauseZ:p!==null?p:t.pauseZ,resumeZ:g!==null?g:t.resumeZ};try{const f=await _.loadLottieTexture(m);if(!f||!f.texture){console.error(`Failed to load Lottie texture from ${typeof t=="string"?t:t.url}`);return}const b=f.texture,v=f.anim;c&&(b.colorSpace=qe),u&&(b.flipY=!1),this.applyTextureToObjects(e,b,n,h,null,r,!0,a,o,c,l,!1,!0);const S=[];if(this.sceneSetup.getScene().traverse(R=>{(R.name||"")===e&&!R.isMesh&&R.traverse(y=>{y.isMesh&&this.belongsToStation(y,r)&&(S.includes(y)||S.push(y))}),R.isMesh&&this.belongsToStation(R,r)&&(R.name||"")===e&&!S.includes(R)&&S.push(R)}),S.forEach(R=>{R.userData.lottieAnimation=v,R.userData.lottieTexture=b}),d!==null&&v){const R=v.totalFrames||0,A=p!==null?p:40,y=Math.floor(R*(A/100)),C={anim:v,startZ:d,stopZ:null,pauseZ:p||null,resumeZ:g||null,pauseFrame:y,pauseAtPercent:A,times:null,layerName:e,started:!1,stopped:!1,paused:!1,pausedAtFrame:!1,playCount:0};_.lottieAnimations&&_.lottieAnimations.push(C)}console.log(`Applied Lottie texture to ${S.length} ${e} object(s)`)}catch(f){console.error(`Error applying Lottie texture to ${e}:`,f)}}}class Mv{constructor(e,t){this.sceneSetup=e,this.mobileOptimizer=t,this.lottieAnimations=[],this.lottieMeshes=[],this.lastCameraZ=null,this.brush1BackLottieMeshes=[],this.lottieFrontMediaMeshes=[]}async loadLottieTexture(e){try{const t=typeof e=="string"?e:e.url;if(!t)return null;const n=await fetch(t);if(!n.ok)throw new Error(`Failed to fetch Lottie: ${n.statusText}`);const i=await n.blob(),r=await Kc.loadAsync(i);let a=null;if(r.forEach((T,D)=>{!D.dir&&T.endsWith(".json")&&(a=D)}),!a)throw new Error("No JSON file found in .lottie archive");const o=await a.async("string"),c=JSON.parse(o),l=[];if(c.assets&&Array.isArray(c.assets)){for(const T of c.assets)if(T.p&&T.p!==""){const D=T.p,B=D.split("/").pop()||D,Z=T.p;let P=null;if(r.forEach((U,H)=>{if(!H.dir){const X=U.split("/").pop(),W=U.replace(/\\/g,"/"),j=D.replace(/\\/g,"/");(W===j||W===`images/${B}`||W.startsWith("images/")&&X===B||X===B)&&(P=H)}}),P){const U=(async()=>{try{const H=await P.async("blob"),X=URL.createObjectURL(H),W=new Image;return await new Promise((j,Y)=>{W.onload=j,W.onerror=Y,W.src=X}),c._blobUrls||(c._blobUrls=[]),c._blobUrls.push(X),T._img=W,T.p=X,T.e=1,T.u="",{asset:T,blobUrl:X,originalPath:Z}}catch(H){return console.warn(`Failed to convert image ${B} to blob URL:`,H),null}})();l.push(U)}else console.warn(`Image file not found in .lottie archive: ${D} (looking for ${B})`)}}await Promise.all(l);const u=c.w||512,h=c.h||512,d=document.createElement("canvas");d.width=u,d.height=h,d.style.width=u+"px",d.style.height=h+"px";const p=d.getContext("2d",{alpha:!0,willReadFrequently:!1,desynchronized:!1});p.clearRect(0,0,u,h);const g=new ya(d);g.minFilter=ut,g.magFilter=ut,g.flipY=!0,g.format=It,g.premultiplyAlpha=!1,g.generateMipmaps=!1;const _=typeof e=="string"||typeof e=="object"&&e&&e.startZ!=null,m=typeof e=="object"&&e.pauseZ!==null&&e.resumeZ!==null,f=!(typeof e=="object"&&(e.times===1||m)),b=c.assets&&c.assets.some(T=>T.p&&T.p.startsWith("blob:")),v={renderer:"canvas",loop:f,autoplay:_,animationData:c,rendererSettings:{context:p,clearCanvas:!0,preserveAspectRatio:"xMidYMid meet",progressiveLoad:!1,hideOnTransparent:!1}};b&&(v.assetsPath="",v.rendererSettings.imageAssetsPath="");const S=Kr.loadAnimation(v);c._blobUrls&&c._blobUrls.length>0&&(S._blobUrls=c._blobUrls),g.needsUpdate=!0;let R=0,A=0;const C=1e3/(this.mobileOptimizer?this.mobileOptimizer.getLottieFPS():60);S.addEventListener("enterFrame",()=>{const T=Date.now(),D=S.currentFrame;D!==R&&T-A>=C&&(g.needsUpdate=!0,R=D,A=T)}),S.addEventListener("segmentStart",()=>{g.needsUpdate=!0});const x=typeof e=="object"?e:{url:t,startZ:null,stopZ:null,times:null};return x.times===void 0&&(x.times=null),{texture:g,anim:S,config:x}}catch(t){const n=typeof e=="string"?e:(e==null?void 0:e.url)||"unknown";return console.error(`Failed to load Lottie from ${n}:`,t),null}}findStationId(e){let t=e;for(;t;){if(t.userData&&t.userData.stationId)return t.userData.stationId;t=t.parent}return null}findLayerObjects(e,t){const n=[];return e.forEach(i=>{i.traverse(r=>{const a=(r.name||"").toLowerCase(),o=t.toLowerCase();(a===o||a.includes(o))&&(r.isMesh?n.push(r):r.isMesh||(r.visible=!0,r.traverse(c=>{c.isMesh&&(n.includes(c)||n.push(c))})))})}),e.forEach(i=>{i.traverse(r=>{var a;if(r.isMesh){const o=(((a=r.parent)==null?void 0:a.name)||"").toLowerCase();(o===t.toLowerCase()||o.includes(t.toLowerCase()))&&(n.includes(r)||n.push(r))}})}),n}applyTextureToLayerObjects(e,t,n){if(e.length===0){console.warn(`No ${n} objects found.`);return}e.forEach(i=>{const r=o=>new Dt({uniforms:{map:{value:t},opacity:{value:(o==null?void 0:o.opacity)!==void 0?o.opacity:1},gamma:{value:js}},vertexShader:`
            varying vec2 vUv;
            void main() {
              vUv = uv;
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
          `,fragmentShader:`
            uniform sampler2D map;
            uniform float opacity;
            uniform float gamma;
            varying vec2 vUv;
            
            void main() {
              vec4 texColor = texture2D(map, vUv);
              // Apply gamma correction: pow(color, 1.0/gamma)
              // gamma = 1.0 means no change, higher gamma = darker
              vec3 correctedColor = pow(texColor.rgb, vec3(1.0 / gamma));
              gl_FragColor = vec4(correctedColor, texColor.a * opacity);
            }
          `,side:(o==null?void 0:o.side)||xt,transparent:!0,depthWrite:!1,depthTest:!0,fog:!1});i.visible=!0,i.castShadow=!1,i.receiveShadow=!1,i.userData.hasCustomTexture=!0,i.userData.customTextureType=n,i.userData.isLottie=!0,i.userData.lottieTexture=t,i.renderOrder=1e3,i.material&&(Array.isArray(i.material)?i.material:[i.material]).forEach(c=>{if(c){if(c.uniforms&&c.uniforms.map&&c.uniforms.map.value){const l=c.uniforms.map.value;l&&l.dispose&&l!==t&&l.dispose()}c.dispose&&c.dispose()}}),i.material?(Array.isArray(i.material)?i.material=i.material.map(o=>r(o)):i.material=r(i.material),i.material.needsUpdate=!0):i.material=r(null),this.lottieMeshes.includes(i)||this.lottieMeshes.push(i);const a=this.findStationId(i);n==="lottie_back"&&a==="brush1"&&(this.brush1BackLottieMeshes.includes(i)||(this.brush1BackLottieMeshes.push(i),i.userData.originalX===void 0&&(i.userData.originalX=i.position.x))),n==="lottie_front"&&a==="message__media"&&(this.lottieFrontMediaMeshes.includes(i)||(this.lottieFrontMediaMeshes.push(i),i.userData.originalY===void 0&&(i.userData.originalY=i.position.y),i.userData.originalRotationX===void 0&&(i.userData.originalRotationX=i.rotation.x)))})}hideLayerObjects(e,t){e.length!==0&&e.forEach(n=>{n.isMesh?n.visible=!1:(n.visible=!1,n.traverse(i=>{i.isMesh&&(i.visible=!1)}))})}async applyLottieToLayer(e,t,n){const i=this.findLayerObjects(e,t);if(n){const r=await this.loadLottieTexture(n);if(r&&r.texture){if(this.applyTextureToLayerObjects(i,r.texture,t),r.anim&&r.config){const a=r.config.startZ===null||typeof r.config.startZ=="number",o=new Set(i.map(l=>l.uuid)),c={anim:r.anim,startZ:r.config.startZ,stopZ:r.config.stopZ,times:r.config.times,layerName:t,meshIds:o,started:a,stopped:!1,playCount:0};r.config.times!==null&&r.config.times>0&&r.anim.addEventListener("complete",()=>{c.playCount++,c.playCount>=c.times&&(r.anim.setLoop(!1),c.stopped=!0)}),this.lottieAnimations.push(c)}return!0}else return console.warn(`[Lottie] Failed to load ${t} texture`),!1}else return this.hideLayerObjects(i,t),!1}async applyLottieToLayers(e,t){if(t){if(t.customLayers)for(const[n,i]of Object.entries(t.customLayers))await this.applyLottieToLayer(e,n,i);await this.applyLottieToLayer(e,"lottie_front",t.front),await this.applyLottieToLayer(e,"lottie_back",t.back)}}updateLottieTriggers(e,t=null){(this.lastCameraZ===null||Math.abs(e-this.lastCameraZ)>.1)&&(this.forceLottieTextureUpdates(),this.lastCameraZ=e);const i=new I,r=new I;this.lottieAnimations.forEach(a=>{const{anim:o,startZ:c,stopZ:l,pauseZ:u,resumeZ:h,pauseFrame:d,started:p,stopped:g,paused:_,pausedAtFrame:m,layerName:f}=a;if(!o)return;if(a.triggerDistance!=null&&t&&a.distanceTargetMeshes&&a.distanceTargetMeshes.length>0){t.updateMatrixWorld(!0),t.getWorldPosition(i);let v=1/0,S=null;a.distanceTargetMeshes.forEach(x=>{if(x&&x.getWorldPosition){x.updateMatrixWorld(!0),x.getWorldPosition(r);const T=i.distanceTo(r);T<v&&(v=T),S===null&&(S=r.z)}});const R=v<=a.triggerDistance,A=S!==null&&i.z<S,C=v!==1/0&&A&&v>a.triggerDistance;if(window.innerWidth<=768&&Math.abs(v-a.triggerDistance)<5&&console.log(`[Distance Mask Debug] ${f}: minDist=${v.toFixed(2)}, triggerDistance=${a.triggerDistance}, shouldPlay=${R}, camZ=${i.z.toFixed(2)}, objZ=${S==null?void 0:S.toFixed(2)}`),C){o.pause(),o.goToAndStop(0,!0),a.started=!1,a.playCount=0,a.completed=!1,a.stopped=!1;return}R&&!p?(o.goToAndStop(0,!0),o.setLoop(a.times!==1),o.play(),a.started=!0):!R&&p&&(o.pause(),o.goToAndStop(0,!0),a.started=!1);return}if(a.pauseFrame!==void 0&&h!==null&&c!==null&&p){const{pauseFrame:v,pausedAtFrame:S}=a,R=o.currentFrame||0;let A=!1;c<0?A=e<=h:A=e>=h,A&&S?o.isPaused&&(o.play(),a.pausedAtFrame=!1,a.paused=!1,console.log(`[Lottie] Resumed ${f} at camera Z ${e} (resumeZ: ${h})`)):A&&!S&&R>=v&&(a.pausedAtFrame=!1),!S&&!A&&R>=v&&(o.goToAndStop(v,!0),o.pause(),a.pausedAtFrame=!0,a.paused=!0,console.log(`[Lottie] Paused ${f} at frame ${v} (40%)`))}let b=!1;if(c!==null&&(c<0?b=e<=c:b=e>=c),c!==null){const v=a.times===1&&a.stopped&&a.playCount>=1||a.completed===!0;b&&!p&&!v?(o.play(),a.pauseFrame!==void 0&&a.resumeZ!==null||a.times===1?o.setLoop(!1):o.setLoop(!0),a.started=!0,a.stopped&&a.times!==null&&(a.stopped=!1)):b&&p&&o.isPaused&&!a.pausedAtFrame&&!v?o.play():!b&&p&&!v?(o.pause(),o.goToAndStop(0,!0),a.started=!1,a.pausedAtFrame=!1,a.paused=!1,a.stopped&&!(a.times===1&&a.playCount>=1)&&(a.stopped=!1),a.times===1&&a.playCount>=1||(a.playCount=0)):!p&&c!==null&&Math.abs(e-c)<5&&(!a.lastDebugTime||Date.now()-a.lastDebugTime>1e3)&&(a.lastDebugTime=Date.now())}if(p&&l!==null){let v=!1;l<0?v=e<=l:v=e>=l,v&&!g?(o.setLoop(!1),a.stopped=!0):!v&&g&&(o.setLoop(!0),a.stopped=!1)}})}forceLottieTextureUpdates(){this.lottieMeshes.forEach(e=>{if(e&&e.userData&&e.userData.lottieTexture){const t=e.userData.lottieTexture;t.needsUpdate=!0,e.material&&(Array.isArray(e.material)?e.material.forEach(n=>{n&&n.uniforms&&n.uniforms.map&&(n.uniforms.map.value=t,n.needsUpdate=!0)}):e.material.uniforms&&e.material.uniforms.map&&(e.material.uniforms.map.value=t,e.material.needsUpdate=!0))}})}getLottieAnimations(){return this.lottieAnimations}getBrush1BackLottieMeshes(){return this.brush1BackLottieMeshes.map(e=>{var t;return{object:e,originalX:((t=e.userData)==null?void 0:t.originalX)!==void 0?e.userData.originalX:e.position.x}})}getLottieFrontMediaMeshes(){return this.lottieFrontMediaMeshes.map(e=>{var t,n;return{object:e,originalY:((t=e.userData)==null?void 0:t.originalY)!==void 0?e.userData.originalY:e.position.y,originalRotationX:((n=e.userData)==null?void 0:n.originalRotationX)!==void 0?e.userData.originalRotationX:e.rotation.x}})}refreshAllLottieTextures(){this.forceLottieTextureUpdates(),this.sceneSetup&&this.sceneSetup.render&&this.sceneSetup.render()}cleanupLottieAnimationsForLayers(e,t){Array.isArray(t)||(t=[t]);const n=[];t.forEach(a=>{const o=this.findLayerObjects(e,a);n.push(...o)});const i=new Set(n.map(a=>a.uuid)),r=[];this.lottieAnimations.forEach((a,o)=>{if(t.includes(a.layerName)&&!(a.meshIds&&a.meshIds.size>0&&![...a.meshIds].some(l=>i.has(l)))){if(a.anim)try{a.anim.stop(),a.anim.destroy()}catch(c){console.warn("Error destroying lottie animation:",c)}r.push(o)}}),r.reverse().forEach(a=>{this.lottieAnimations.splice(a,1)}),n.forEach(a=>{if(a.userData&&a.userData.lottieTexture){const l=a.userData.lottieTexture;l&&l.dispose&&l.dispose(),a.userData.lottieTexture=null}a.material&&(Array.isArray(a.material)?a.material:[a.material]).forEach(u=>{if(u){if(u.uniforms&&u.uniforms.map&&u.uniforms.map.value){const h=u.uniforms.map.value;h&&h.dispose&&h.dispose()}u.dispose&&u.dispose()}});const o=this.lottieMeshes.indexOf(a);o!==-1&&this.lottieMeshes.splice(o,1);const c=this.brush1BackLottieMeshes.indexOf(a);c!==-1&&this.brush1BackLottieMeshes.splice(c,1)}),console.log(`Cleaned up ${r.length} lottie animations and ${n.length} meshes`)}}class yv{constructor(e,t,n){this.sceneSetup=e,this.cameraController=t,this.lottieManager=n,this.allBrushBaseObjects=[],this.allBorstelStandObjects=[],this.allBorstelLiggendObjects=[],this.allBorstelLiggendUpObjects=[],this.allBlowerFrontMiddleObjects=[],this.allCurtainFlapObjects=[],this.allCurtainFlapGroups=[],this.allDoucheGordijnObjects=[],this.allUserWensObjects=[],this.allUserMediaObjects=[],this.allBrush1LottieBackObjects=[],this.allGateObjects=[],this.allLottieFrontMediaObjects=[],this.allSpraySoapObjects=[],this.lastTime=Date.now(),this.isAnimating=!1,this.clock={startTime:Date.now()}}setBrushBaseObjects(e){this.allBrushBaseObjects=e}setBorstelStandObjects(e){this.allBorstelStandObjects=e}setBorstelLiggendObjects(e){this.allBorstelLiggendObjects=e}setBorstelLiggendUpObjects(e){this.allBorstelLiggendUpObjects=e}setBlowerFrontMiddleObjects(e){this.allBlowerFrontMiddleObjects=e}setCurtainFlapObjects(e){this.allCurtainFlapObjects=e}setCurtainFlapGroups(e){this.allCurtainFlapGroups=e}setDoucheGordijnObjects(e){this.allDoucheGordijnObjects=e}setUserWensObjects(e){this.allUserWensObjects=e}setUserMediaObjects(e){this.allUserMediaObjects=e}setBrush1LottieBackObjects(e){this.allBrush1LottieBackObjects=e}setGateObjects(e){this.allGateObjects=e}setLottieFrontMediaObjects(e){this.allLottieFrontMediaObjects=e}setSpraySoapObjects(e){this.allSpraySoapObjects=e}calculateScrollProgress(e,t,n,i,r,a,o=0){let c=a;try{if(i&&i.updateMatrixWorld){i.updateMatrixWorld(!0);const h=new I;i.getWorldPosition(h),c=r.position.distanceTo(h)}else c=Math.abs(r.position.z-o)}catch{c=Math.abs(r.position.z-o)}const l=Math.min(Math.max(0,1-(c-2)/(a-2)),1);let u=0;return e<=n?u=1:e>=t?u=0:u=1-(e-n)/(t-n),Math.min(u*l,1)}animate(){this.isAnimating||(this.isAnimating=!0,this.animationLoop())}animationLoop(){requestAnimationFrame(()=>this.animationLoop());const e=Date.now(),t=(e-this.lastTime)/1e3;this.lastTime=e,this.cameraController&&this.cameraController.update(t);const n=2;if(this.allBrushBaseObjects.forEach(r=>{const a=r.object||r,o=r.direction||"right";if(a&&a.visible){const c=o==="right"?n:-n;a.rotation.y+=c*t,a.rotation.y>=Math.PI*2?a.rotation.y-=Math.PI*2:a.rotation.y<0&&(a.rotation.y+=Math.PI*2)}}),this.allBorstelStandObjects.length>0&&this.sceneSetup&&this.sceneSetup.getCamera){const a=this.sceneSetup.getCamera().position;this._loggedBrushInfo||(this.allBorstelStandObjects.forEach((o,c)=>{}),this._loggedBrushInfo=!0),this.allBorstelStandObjects.forEach(o=>{if(o&&o.object&&o.object.visible){let c=zc;try{o.object.updateMatrixWorld(!0);const h=new I;o.object.getWorldPosition(h),c=a.distanceTo(h)}catch{const d=o.brushStationZ||0;c=Math.abs(a.z-d)}const l=Math.min(Math.max(0,1-(c-2)/(zc-2)),1);o.currentProgress===void 0&&(o.currentProgress=0);const u=.1;if(o.currentProgress=o.currentProgress+(l-o.currentProgress)*u,o.type==="left"){const h=(o.originalX||0)+Bg,d=(o.originalX||0)+kg,p=h+(d-h)*o.currentProgress;o.object.position.x=p}else if(o.type==="right"){const h=(o.originalX||0)+zg,d=(o.originalX||0)+Gg,p=h+(d-h)*o.currentProgress;o.object.position.x=p,(!o.lastRightLogTime||Date.now()-o.lastRightLogTime>2e3||c<15)&&(o.lastRightLogTime=Date.now())}else console.warn(`Unknown brush type: "${o.type}"`);o.object.updateMatrix(),o.object.parent&&o.object.parent.updateMatrixWorld(!0)}})}if(this.allBorstelLiggendObjects.length>0&&this.sceneSetup&&this.sceneSetup.getCamera){const r=this.sceneSetup.getCamera(),a=r.position.z;this.allBorstelLiggendObjects.forEach(o=>{if(o&&o.object){const c=o.object;o.originalY===void 0&&(o.originalY=c.position.y);const l=o.brushStationZ||0,u=this.calculateScrollProgress(a,qg,$g,c,r,Kg,l),h=o.originalY!==void 0?o.originalY:c.position.y,d=h+Zg,p=h+Yg,g=d+(p-d)*u;c.position.y=g,c.updateMatrix(),c.parent&&c.parent.updateMatrixWorld(!0)}})}if(this.allBorstelLiggendUpObjects.length>0&&this.sceneSetup&&this.sceneSetup.getCamera){const r=this.sceneSetup.getCamera(),a=r.position.z;this.allBorstelLiggendUpObjects.forEach(o=>{if(o&&o.object){const c=o.object;o.originalY===void 0&&(o.originalY=c.position.y);const l=o.brushStationZ||0,u=this.calculateScrollProgress(a,Wg,jg,c,r,Xg,l),h=o.originalY!==void 0?o.originalY:c.position.y,d=h+Hg,p=h+Vg,g=d+(p-d)*u;c.position.y=g,c.updateMatrix(),c.parent&&c.parent.updateMatrixWorld(!0)}})}const i=5;if(this.allBlowerFrontMiddleObjects.forEach(r=>{r&&r.visible&&(r.rotation.z-=i*t,r.rotation.z>=Math.PI*2?r.rotation.z-=Math.PI*2:r.rotation.z<0&&(r.rotation.z+=Math.PI*2))}),this.allSpraySoapObjects.length>0){const r=(Date.now()-this.clock.startTime)/1e3,a=E_*Math.PI/180;this.allSpraySoapObjects.forEach(o=>{if(o&&o.object&&o.object.visible){const c=o.object;o.originalRotationY===void 0&&(o.originalRotationY=c.rotation.y);const l=Math.sin(r*A_)*a;c.rotation.y=o.originalRotationY+l,c.updateMatrix(),c.parent&&c.parent.updateMatrixWorld(!0)}})}if(this.allCurtainFlapObjects.length>0&&this.sceneSetup&&this.sceneSetup.getCamera){const r=this.sceneSetup.getCamera(),a=(Date.now()-this.clock.startTime)/1e3,o=r.position;if(!this._loggedFlapConfig){const c=this.allCurtainFlapObjects.filter(l=>l.shouldLift);c.length>0&&c.forEach((l,u)=>{}),this._loggedFlapConfig=!0}this.allCurtainFlapObjects.forEach(c=>{if(c&&c.object&&c.object.visible){const l=c.object,u=c.originalRotationX||0,h=c.phaseOffset||0,d=c.rotationSpeed||1;let p=Gc;if(l.parent){l.updateMatrixWorld(!0);const R=new I;l.getWorldPosition(R),p=o.distanceTo(R)}else{const R=c.curtainStationZ||0;p=Math.abs(o.z-R)}const g=Math.min(Math.max(0,1-(p-2)/(Gc-2)),1);c.currentSpeed===void 0&&(c.currentSpeed=jr,c.currentMaxAngle=Fs);const _=jr+(Jg-jr)*g,m=Fs+(Qg-Fs)*g,f=.1;c.currentSpeed=c.currentSpeed+(_-c.currentSpeed)*f,c.currentMaxAngle=c.currentMaxAngle+(m-c.currentMaxAngle)*f;const b=Math.sin(a*d*.5+h)*(Fs*Math.PI/180),v=Math.sin(a*d*c.currentSpeed+h)*(c.currentMaxAngle*Math.PI/180),S=b+(v-b)*g;if(l.rotation.x=u+S,c.shouldLift){c.originalY===void 0&&(c.originalY=l.position.y),c.originalX===void 0&&(c.originalX=l.position.x);let R=Hc;if(l.parent){l.updateMatrixWorld(!0);const U=new I;l.getWorldPosition(U),R=o.distanceTo(U)}else{const U=c.curtainStationZ||0;R=Math.abs(o.z-U)}const A=Math.min(Math.max(0,1-(R-2)/(Hc-2)),1),y=e_*A,C=.1,x=l.position.y,T=c.originalY+y,D=x+(T-x)*C,B=l.position.x,Z=c.originalX,P=B+(Z-B)*C;l.position.y=D,l.position.x=P,l.updateMatrix(),l.parent&&l.parent.updateMatrixWorld(!0),(!c.lastLiftLogTime||Date.now()-c.lastLiftLogTime>2e3||R<25)&&(D-c.originalY,c.lastLiftLogTime=Date.now())}}})}if(this.allDoucheGordijnObjects.length>0&&this.sceneSetup&&this.sceneSetup.getCamera){const r=this.sceneSetup.getCamera(),a=r.position.z;this.allDoucheGordijnObjects.forEach(o=>{if(o&&o.object&&o.object.visible){const c=o.object,l=o.gordijnStationZ||0,u=this.calculateScrollProgress(a,i_,s_,c,r,r_,l),h=o.originalScaleX!==void 0?o.originalScaleX:1,d=h*t_,p=h*n_,g=d+(p-d)*u;c.scale.x=g,c.updateMatrix(),c.parent&&c.parent.updateMatrixWorld(!0)}})}if(this.allUserWensObjects.length>0&&this.sceneSetup&&this.sceneSetup.getCamera){const r=this.sceneSetup.getCamera(),a=r.position.z;this.allUserWensObjects.forEach(o=>{if(o&&o.object){const c=o.object;o.originalY===void 0&&(o.originalY=c.position.y),o.originalScaleX===void 0&&(o.originalScaleX=c.scale.x);const l=o.wensStationZ||0,u=this.calculateScrollProgress(a,o_,a_,c,r,c_,l),h=o.originalY!==void 0?o.originalY:c.position.y,d=h,p=h+l_,g=d+(p-d)*u,_=o.originalScaleX!==void 0?o.originalScaleX:1,m=_*u_,f=_*h_,b=m+(f-m)*u;c.position.y=g,c.scale.x=b,c.updateMatrix(),c.parent&&c.parent.updateMatrixWorld(!0)}})}if(this.allUserMediaObjects.length>0&&this.sceneSetup&&this.sceneSetup.getCamera){const r=this.sceneSetup.getCamera(),a=r.position.z,o=(Date.now()-this.clock.startTime)/1e3;this.allUserMediaObjects.forEach(c=>{if(c&&c.object){const l=c.object;c.originalY===void 0&&(c.originalY=l.position.y),c.originalX===void 0&&(c.originalX=l.position.x),c.originalScale===void 0&&(c.originalScale={x:l.scale.x,y:l.scale.y,z:l.scale.z});const u=c.mediaStationZ||0,h=this.calculateScrollProgress(a,d_,f_,l,r,p_,u),d=c.originalY!==void 0?c.originalY:l.position.y,p=d,g=d+m_,_=p+(g-p)*h,m=o*Vc,f=h*Math.PI*2*Vc+m,b=Math.sin(f)*g_*h,S=(c.originalX!==void 0?c.originalX:l.position.x)+b,R=c.originalScale!==void 0?c.originalScale:{x:l.scale.x,y:l.scale.y,z:l.scale.z},A={x:R.x*Xr,y:R.y*Xr,z:R.z*Xr},y={x:R.x*Zr,y:R.y*Zr,z:R.z*Zr},C={x:A.x+(y.x-A.x)*h,y:A.y+(y.y-A.y)*h,z:A.z+(y.z-A.z)*h};l.position.y=_,l.position.x=S,l.scale.x=C.x,l.scale.y=C.y,l.scale.z=C.z,l.updateMatrix(),l.parent&&l.parent.updateMatrixWorld(!0)}})}if(this.sceneSetup&&this.sceneSetup.getCamera){const r=this.sceneSetup.getCamera(),a=r.position.z;this.lottieManager&&this.lottieManager.updateLottieTriggers(a,r)}if(this.allGateObjects.length>0&&this.sceneSetup&&this.sceneSetup.getCamera){const r=this.sceneSetup.getCamera(),a=r.position.z;this.allGateObjects.forEach(o=>{if(o&&o.object){const c=o.object;o.originalX===void 0&&(o.originalX=c.position.x);const l=o.gateStationZ||0,u=this.calculateScrollProgress(a,__,v_,c,r,x_,l),h=o.originalX!==void 0?o.originalX:c.position.x,d=h,p=o.type==="right"?Wc:-Wc,g=h+p,_=d+(g-d)*u;c.position.x=_,c.updateMatrix(),c.parent&&c.parent.updateMatrixWorld(!0)}})}if(this.allLottieFrontMediaObjects.length>0&&this.sceneSetup&&this.sceneSetup.getCamera){const r=this.sceneSetup.getCamera(),a=r.position.z;this.allLottieFrontMediaObjects.forEach(o=>{if(o&&o.object){const c=o.object;o.originalY===void 0&&(o.originalY=c.position.y),o.originalRotationX===void 0&&(o.originalRotationX=c.rotation.x);const l=o.lottieFrontStationZ||0,u=this.calculateScrollProgress(a,b_,S_,c,r,M_,l),h=o.originalY!==void 0?o.originalY:c.position.y,d=h,p=h+y_,g=d+(p-d)*u,_=o.originalRotationX!==void 0?o.originalRotationX:c.rotation.x,m=_,f=_+T_,b=m+(f-m)*u;c.position.y=g,c.rotation.x=b,c.updateMatrix(),c.parent&&c.parent.updateMatrixWorld(!0)}})}this.sceneSetup.render()}}class Tv{constructor(e,t=[],n=null){this.sceneSetup=e,this.config=Array.isArray(t)?t:[],this.backgroundPath=n||null,this.audioCache=new Map,this.backgroundAudio=null,this.state=new Map,this.isRunning=!1,this._rafId=null,this._warnedMissing=new Set,this._userHasInteracted=!1,this._interactionListeners=[],this._isMuted=!1,this._preloadPromises=[],this._preloadBackground(),this._preloadAll(),this._initState(),this._setupUserInteractionListener()}_preloadBackground(){if(this.backgroundPath)try{const e=new Audio(this.backgroundPath);e.preload="auto",e.loop=!1,this.backgroundAudio=e;const t=new Promise((n,i)=>{e.addEventListener("canplaythrough",()=>n(),{once:!0}),e.addEventListener("error",r=>i(r),{once:!0})});this._preloadPromises.push(t)}catch(e){console.warn(`[SoundEffects] Failed to preload background ${this.backgroundPath}:`,e)}}_setupUserInteractionListener(){const e=()=>{this._userHasInteracted||(this._userHasInteracted=!0,this._interactionListeners.forEach(({event:n,handler:i,options:r})=>{document.removeEventListener(n,i,r)}),this._interactionListeners=[])};["click","touchstart","keydown"].forEach(n=>{const i=e,r={once:!0,passive:!0};document.addEventListener(n,i,r),this._interactionListeners.push({event:n,handler:i,options:r})})}_playBackgroundAudio(){if(!(!this.backgroundAudio||!this.isRunning||this._isMuted))try{this.backgroundAudio.currentTime=0,this.backgroundAudio.play().catch(e=>{(e==null?void 0:e.name)!=="AbortError"&&console.warn("[SoundEffects] Background play failed:",e)})}catch(e){console.warn("[SoundEffects] Background play error:",e)}}_preloadAll(){this.config.forEach((e,t)=>{if(e.audioPath)try{const n=new Audio(e.audioPath);n.preload="auto",this.audioCache.set(t,n);const i=new Promise((r,a)=>{n.addEventListener("canplaythrough",()=>r(),{once:!0}),n.addEventListener("error",o=>a(o),{once:!0})});this._preloadPromises.push(i)}catch(n){console.warn(`[SoundEffects] Failed to preload ${e.audioPath}:`,n)}})}whenPreloadComplete(){return!this._preloadPromises||this._preloadPromises.length===0?Promise.resolve():Promise.allSettled(this._preloadPromises).then(()=>{})}_initState(){this.config.forEach((e,t)=>{this.state.set(t,{wasInRange:!1,playCount:0,exhausted:!1})})}_belongsToStation(e,t,n){if(!t)return!0;let i=e;for(;i.parent&&i.parent!==n;)i=i.parent;return i.userData&&i.userData.stationId===t}_findObject(e,t,n){const i=n;let r=null;return e.traverse(a=>{r||(a.name||"")!==i||this._belongsToStation(a,t,e)&&(r=a)}),r}_getObjectWorldPosition(e,t=new I){if(!e||!e.getWorldPosition)return null;try{return e.updateMatrixWorld&&e.updateMatrixWorld(!0),e.getWorldPosition(t),t}catch{return null}}_update(){if(!this.isRunning)return;const e=this.sceneSetup.getScene(),t=this.sceneSetup.getCamera();if(!e||!t){this._rafId=requestAnimationFrame(()=>this._update());return}const n=t.position;this.config.forEach((i,r)=>{const a=this.state.get(r);if(!a||a.exhausted)return;let o=!1;if(i.triggerZ!==void 0||i.startZ!==void 0&&i.endZ!==void 0){const c=n.z;i.triggerZ!==void 0?o=Math.abs(c-i.triggerZ)<=.5:i.startZ!==void 0&&i.endZ!==void 0&&(o=c<=i.startZ&&c>i.endZ)}else{const c=this._findObject(e,i.stationId,i.objectName);if(!c){this._warnedMissing.has(r)||(this._warnedMissing.add(r),console.warn(`[SoundEffects] Object "${i.objectName}" in station "${i.stationId}" not found.`));return}const l=this._getObjectWorldPosition(c);if(!l)return;o=n.distanceTo(l)<=i.distance}if(o&&!a.wasInRange){if(a.wasInRange=!0,i.times!==null&&a.playCount>=i.times){a.exhausted=!0;return}const c=this.audioCache.get(r);if(c&&!this._isMuted)try{c.currentTime=0,c.play().catch(l=>{(l==null?void 0:l.name)!=="AbortError"&&console.warn("[SoundEffects] Play failed:",l)}),a.playCount++,i.times!==null&&a.playCount>=i.times&&(a.exhausted=!0)}catch(l){console.warn("[SoundEffects] Play error:",l)}}else o||(a.wasInRange=!1)}),this._rafId=requestAnimationFrame(()=>this._update())}start(){this.isRunning||(this.isRunning=!0,!this._userHasInteracted&&this._interactionListeners.length===0&&this._setupUserInteractionListener(),this._userHasInteracted&&this._playBackgroundAudio(),this._rafId=requestAnimationFrame(()=>this._update()))}stop(){this.isRunning=!1,this.backgroundAudio&&this.backgroundAudio.pause(),this._rafId!=null&&(cancelAnimationFrame(this._rafId),this._rafId=null),this._interactionListeners.forEach(({event:e,handler:t,options:n})=>{document.removeEventListener(e,t,n)}),this._interactionListeners=[]}setConfig(e,t=null){const n=this.isRunning;this.stop(),this.config=Array.isArray(e)?e:[],this.backgroundPath=t??this.backgroundPath,this._warnedMissing.clear(),this.audioCache.clear(),this.backgroundAudio=null,this.state.clear(),this._preloadBackground(),this._preloadAll(),this._initState(),n&&this.start()}startBackgroundMusic(){this._userHasInteracted=!0,this._playBackgroundAudio()}setMuted(e){this._isMuted=e,this.backgroundAudio&&(this.backgroundAudio.muted=e,!e&&this.isRunning&&this._userHasInteracted&&this._playBackgroundAudio()),this.audioCache.forEach(t=>{t&&(t.muted=e)})}toggleMute(){return this.setMuted(!this._isMuted),this._isMuted}isMuted(){return this._isMuted}}const Ev="_assets/_audio/carwash-loop-2.mp3",Av=[{audioPath:"_assets/_audio/bleh.wav",stationId:"message__wens",objectName:"user__wens",distance:25,times:1},{audioPath:"_assets/_audio/bleh.wav",stationId:"brush2",objectName:"user__media",distance:30,times:1},{audioPath:"_assets/_audio/bleh.wav",stationId:"soap",objectName:"lottie_front",distance:20,times:1},{audioPath:"_assets/_audio/water.mp3",triggerZ:-87,times:1},{audioPath:"_assets/_audio/soap.mp3",triggerZ:-140,times:1},{audioPath:"_assets/_audio/blower.mp3",triggerZ:-200,times:1}],wv=[{id:"road",path:"_assets/_objects/station__road.glb",applyPoort:!1,applyBoog:!1,tunnel:!1,uvMapping:null},{id:"poort",path:"_assets/_objects/station__poort2.glb",applyPoort:!0,applyBoog:!1,tunnel:!1,lottie:{front:"https://lottie.host/8f8051ac-44b9-4183-8d84-e28f7ceeaee4/9czZ6PkTbV.lottie",back:null,customLayers:{"lot__stoplicht--L":{url:"https://lottie.host/6fd5eb4a-ed47-4987-b076-b205127bd7a3/HDmDYHUZg9.lottie",startZ:null,stopZ:null,times:1},"lot__stoplicht--R":{url:"https://lottie.host/6fd5eb4a-ed47-4987-b076-b205127bd7a3/HDmDYHUZg9.lottie",startZ:null,stopZ:null,times:1}}},uvMapping:null},{id:"message__wens",path:"_assets/_objects/station__message--wens.glb",applyPoort:!1,applyBoog:!1,tunnel:!0,lottie:{front:"https://lottie.host/52e18a61-ff57-4972-9ba3-5cfc37441cdf/h7HRhBzF5N.lottie",back:"https://lottie.host/9cee9b39-3067-49bf-a8b9-28f645904606/LlsVqOy0BS.lottie"},uvMapping:null},{id:"brush-up",path:"_assets/_objects/station__brush--up2.glb",applyPoort:!1,applyBoog:!0,tunnel:!0,lottie:{front:{url:"https://lottie.host/7d3b6cc5-3b69-44d7-a71d-aefa1c087d63/MfzHgZf4do.lottie",startZ:-80,stopZ:null,times:4},back:null},uvMapping:null},{id:"message__bericht",path:"_assets/_objects/station__message--bericht.glb",applyPoort:!1,applyBoog:!1,tunnel:!0,lottie:{front:"https://lottie.host/630ed545-d60e-4175-b7a7-dca0979ec653/bKKnlIZOLx.lottie"},uvMapping:null},{id:"soap",path:"_assets/_objects/station__soap2.glb",applyPoort:!1,applyBoog:!1,tunnel:!0,tunnel_size:"small",lottie:{front:"https://lottie.host/3fa25658-6b92-4585-9b53-3018a0c71e13/4YgekaHhpD.lottie",back:"https://lottie.host/2142dc17-71ec-4396-95bb-9141a5ae6397/kAYrrdS0jG.lottie"},uvMapping:null},{id:"brush2",path:"_assets/_objects/station__brush2.glb",applyPoort:!1,applyBoog:!0,tunnel:!0,tunnel_size:"small",lottie:{front:"https://lottie.host/8b11309b-96f0-496b-b280-3dd82c1d486b/rdjW2HG5i3.lottie",back:null},uvMapping:null},{id:"message__media",path:"_assets/_objects/station__message--media.glb",applyPoort:!1,applyBoog:!1,tunnel:!0,lottie:{front:"https://lottie.host/ad607ffd-9044-4eb2-82ab-5f9b4d81a2b1/MedTZcbLoN.lottie",back:null},uvMapping:null},{id:"blower",path:"_assets/_objects/station__blower2.glb",applyPoort:!1,applyBoog:!1,tunnel:!1,lottie:{front:{url:"https://lottie.host/38161663-abcc-4f62-920f-354fd2cfe6b5/GmKMM2xib7.lottie",startZ:-170},back:{url:"https://lottie.host/cef08040-f70c-4ff1-a35a-cfc88bb638f3/0YstTOn7Uz.lottie",startZ:-190}},uvMapping:null},{id:"curtain",path:"_assets/_objects/station__curtain2.glb",applyPoort:!1,applyBoog:!1,tunnel:!1,lottie:{front:null,back:null},uvMapping:null}];function Rv(s,e,t,n){const i=t[e]||t["Power Sop"],r=i.uvmapFront??i.poort;s.giveObjectMapping("poort",r,"x",{forceReplace:!0});const a=i.uvmapBrushup??i.boogBrushup??"_assets/_objects/_textures/_power/uvmap-boog--brush-up.png";s.giveObjectMapping("boog--base",i.boogSoap,"x",{stationId:"soap",forceReplace:!0}),s.giveObjectMapping("boog--base",a,"x",{stationId:"brush-up",forceReplace:!0}),s.giveObjectMapping("boog--base",i.boogDefault,"x",{forceReplace:!0});const o=i.tunnel.startsWith("_assets/")||i.tunnel.startsWith("/")?i.tunnel:`_assets/_objects/_textures/${i.tunnel}`;s.giveObjectMapping("gate__right",o,"xy",{stationId:"brush1",forceReplace:!0}),s.giveObjectMapping("gate__left",o,"xy",{stationId:"brush1",forceReplace:!0}),s.giveObjectMapping("gate__right",o,"xy",{stationId:"brush2",forceReplace:!0}),s.giveObjectMapping("gate__left",o,"xy",{stationId:"brush2",forceReplace:!0});const c=Oa.length>0?Oa[0].lottie:"https://lottie.host/f1d0e197-55d8-4b0c-8670-31287c95dd0e/pFkebShNjk.lottie";setTimeout(()=>{s.applyLottieTexture("user__wens",c,"x",{...Yu}).catch(m=>{console.error("Failed to apply Lottie texture to user__wens:",m)})},200),s.giveObjectMapping("douche__gordijn","_assets/_objects/_textures/layer__bericht--clean.png","y",{forceReplace:!0}),setTimeout(()=>{s.giveObjectMapping("douche__gordijn",Og,"y",{forceReplace:!1})},200);const l=Dg()||"_assets/_objects/_textures/layer__media--cleanm.png";s.giveObjectMapping("user__media",l,"x",{stationId:"message__media",depthWrite:!1,useBasicMaterial:!0,flipV:!0,gamma:Ig}),setTimeout(()=>{s.applyLottieMask("user__media","https://lottie.host/9e55e811-ab44-4c7e-8048-73ab61c1e98a/kG0T3l6TMq.lottie",{stationId:"message__media",triggerDistance:25,times:1}).catch(m=>{console.error("Failed to apply Lottie mask to user__media:",m)})},500),s.giveObjectMapping("autowasbon__txt","_assets/_objects/_textures/layer__boodschap--v2.png","x",{stationId:"message4",depthWrite:!1,useBasicMaterial:!0,gamma:1,flipV:!0}),setTimeout(()=>{s.giveObjectMapping("poort",i.poortName,"x",{forceReplace:!1})},200),s.giveObjectMapping("boog--base","_assets/_objects/_textures/uvmap-boog--white.png","x",{stationId:"message4"}),s.giveObjectMapping("boog--base","_assets/_objects/_textures/uvmap-boog--white.png","x",{stationId:"blower"});const u=i.uvmapBoog??"_assets/_objects/_textures/uvmap-boog--blue.png";s.giveObjectMapping("boog--base",u,"x",{stationId:"message5",forceReplace:!0}),s.giveObjectMapping("boog--base","_assets/_objects/_textures/uvmap-boog--blue.png","x",{stationId:"curtain"});const h=i.uvmapSoap??"_assets/_objects/_textures/uvmap-boog--soap.png",d=i.uvmapBericht??"_assets/_objects/_textures/uvmap-boog--bericht.png",p=i.uvmapMedia??"_assets/_objects/_textures/uvmap-boog--media.png",g=i.uvmapWater??"_assets/_objects/_textures/uvmap-boog--water.png";s.giveObjectMapping("boog--base",d,"x",{stationId:"message__bericht",forceReplace:!0}),s.giveObjectMapping("boog--base",p,"x",{stationId:"message__media",forceReplace:!0}),s.giveObjectMapping("boog--base",g,"x",{stationId:"message__wens",forceReplace:!0}),s.giveObjectMapping("boog--base",h,"x",{stationId:"soap",forceReplace:!0}),s.giveObjectMapping("boog--base","_assets/_objects/_textures/uvmap-boog--white--drogen.png","x",{stationId:"blower"});const _=i.uvmapBrush2??i.uvmapBoog??"_assets/_objects/_textures/uvmap-boog--blue.png";s.giveObjectMapping("boog--base",_,"x",{stationId:"brush2",forceReplace:!0}),s.giveObjectMapping("curtain__front--01","_assets/_objects/_textures/uvmap__curtain-top.png","x",{stationId:"curtain"}),s.giveObjectMapping("curtain__flaps--01","_assets/_objects/_textures/layer__boodschap-f.png","x",{stationId:"curtain"}),s.giveObjectMapping("curtain__front--02","_assets/_objects/_textures/uvmap__curtain-top.png","x",{stationId:"curtain"}),s.giveObjectMapping("curtain__flaps--02","_assets/_objects/_textures/uvmap__flap-long--white.png","x",{stationId:"curtain"}),s.giveObjectMapping("curtain__front--03","_assets/_objects/_textures/uvmap__curtain-top.png","x",{stationId:"curtain"}),s.giveObjectMapping("curtain__flaps--03","_assets/_objects/_textures/uvmap__flap-long--blue.png","x",{stationId:"curtain"}),s.giveObjectMapping("boog--base--01","_assets/_objects/_textures/uvmap-boog--blue.png","x",{stationId:"curtain"}),s.giveObjectMapping("boog--base--02","_assets/_objects/_textures/uvmap-boog--white.png","x",{stationId:"curtain"}),s.giveObjectMapping("boog--base--03","_assets/_objects/_textures/uvmap-boog--blue.png","x",{stationId:"curtain"}),s.giveObjectMapping("spray__soap--L","_assets/_objects/_textures/uvmap__flap--white.png","z",{stationId:"soap"}),s.giveObjectMapping("spray__soap--R","_assets/_objects/_textures/uvmap__flap--white.png","z",{stationId:"soap"}),s.giveObjectMapping("spray__holder--L","_assets/_objects/_textures/uvmap__flap--blue.png","z",{stationId:"soap"}),s.giveObjectMapping("spray__holder--R","_assets/_objects/_textures/uvmap__flap--blue.png","z",{stationId:"soap"}),s.giveObjectMapping("Helix","_assets/_objects/_textures/uvmap__flap--blue.png","z",{stationId:"soap"}),s.giveObjectMapping("Helix_2","_assets/_objects/_textures/uvmap__flap--blue.png","z",{stationId:"soap"}),s.giveObjectMapping("blower__case--R03","_assets/_objects/_textures/uvmap__blower.png","x"),s.giveObjectMapping("blower__case--R02","_assets/_objects/_textures/uvmap__blower.png","x"),s.giveObjectMapping("blower__case--R01","_assets/_objects/_textures/uvmap__blower.png","x"),s.giveObjectMapping("blower__case--L01","_assets/_objects/_textures/uvmap__blower.png","x"),s.giveObjectMapping("blower__case--L02","_assets/_objects/_textures/uvmap__blower.png","x"),s.giveObjectMapping("blower__case--L03","_assets/_objects/_textures/uvmap__blower.png","x"),s.giveObjectMapping("brush__part--L01","_assets/_objects/_textures/uvmap__flap--blue.png","y",{stationId:"brush1"}),s.giveObjectMapping("brush__part--L02","_assets/_objects/_textures/uvmap__flap--white.png","y",{stationId:"brush1"}),s.giveObjectMapping("brush__part--L03","_assets/_objects/_textures/uvmap__flap--blue.png","y",{stationId:"brush1"}),s.giveObjectMapping("brush__part--L04","_assets/_objects/_textures/uvmap__flap--white.png","y",{stationId:"brush1"}),s.giveObjectMapping("brush__part--R01","_assets/_objects/_textures/uvmap__flap--blue.png","y",{stationId:"brush1"}),s.giveObjectMapping("brush__part--R02","_assets/_objects/_textures/uvmap__flap--white.png","y",{stationId:"brush1"}),s.giveObjectMapping("brush__part--R03","_assets/_objects/_textures/uvmap__flap--blue.png","y",{stationId:"brush1"}),s.giveObjectMapping("brush__part--R04","_assets/_objects/_textures/uvmap__flap--white.png","y",{stationId:"brush1"}),s.giveObjectMapping("holder__brush--stick-L","_assets/_objects/_textures/uvmap__flap--blue.png","y",{stationId:"brush1"}),s.giveObjectMapping("holder__brush--top-L","_assets/_objects/_textures/uvmap__brush-con.png","y",{stationId:"brush1"}),s.giveObjectMapping("holder__brush--connect-L","_assets/_objects/_textures/uvmap__brush-con.png","y",{stationId:"brush1"}),s.giveObjectMapping("holder__brush--boog-L","_assets/_objects/_textures/uvmap__brush-con.png","y",{stationId:"brush1"}),s.giveObjectMapping("holder__brush--ring-L","_assets/_objects/_textures/uvmap__brush-con.png","y",{stationId:"brush1"}),s.giveObjectMapping("holder__brush--stick-R","_assets/_objects/_textures/uvmap__flap--blue.png","y",{stationId:"brush1"}),s.giveObjectMapping("holder__brush--top-R","_assets/_objects/_textures/uvmap__brush-con.png","y",{stationId:"brush1"}),s.giveObjectMapping("holder__brush--connect-R","_assets/_objects/_textures/uvmap__brush-con.png","y",{stationId:"brush1"}),s.giveObjectMapping("holder__brush--boog-R","_assets/_objects/_textures/uvmap__brush-con.png","y",{stationId:"brush1"}),s.giveObjectMapping("holder__brush--ring-R","_assets/_objects/_textures/uvmap__brush-con.png","y",{stationId:"brush1"}),s.giveObjectMapping("brush__part--L01","_assets/_objects/_textures/uvmap__flap--blue.png","y",{stationId:"brush2"}),s.giveObjectMapping("brush__part--L02","_assets/_objects/_textures/uvmap__flap--white.png","y",{stationId:"brush2"}),s.giveObjectMapping("brush__part--L03","_assets/_objects/_textures/uvmap__flap--blue.png","y",{stationId:"brush2"}),s.giveObjectMapping("brush__part--L04","_assets/_objects/_textures/uvmap__flap--white.png","y",{stationId:"brush2"}),s.giveObjectMapping("brush__part--R01","_assets/_objects/_textures/uvmap__flap--blue.png","y",{stationId:"brush2"}),s.giveObjectMapping("brush__part--R02","_assets/_objects/_textures/uvmap__flap--white.png","y",{stationId:"brush2"}),s.giveObjectMapping("brush__part--R03","_assets/_objects/_textures/uvmap__flap--blue.png","y",{stationId:"brush2"}),s.giveObjectMapping("brush__part--R04","_assets/_objects/_textures/uvmap__flap--white.png","y",{stationId:"brush2"}),s.giveObjectMapping("holder__brush--stick-L","_assets/_objects/_textures/uvmap__flap--blue.png","y",{stationId:"brush2"}),s.giveObjectMapping("holder__brush--top-L","_assets/_objects/_textures/uvmap__brush-con.png","y",{stationId:"brush2"}),s.giveObjectMapping("holder__brush--connect-L","_assets/_objects/_textures/uvmap__brush-con.png","y",{stationId:"brush2"}),s.giveObjectMapping("holder__brush--boog-L","_assets/_objects/_textures/uvmap__brush-con.png","y",{stationId:"brush2"}),s.giveObjectMapping("holder__brush--ring-L","_assets/_objects/_textures/uvmap__brush-con.png","y",{stationId:"brush2"}),s.giveObjectMapping("holder__brush--stick-R","_assets/_objects/_textures/uvmap__flap--blue.png","y",{stationId:"brush2"}),s.giveObjectMapping("holder__brush--top-R","_assets/_objects/_textures/uvmap__brush-con.png","y",{stationId:"brush2"}),s.giveObjectMapping("holder__brush--connect-R","_assets/_objects/_textures/uvmap__brush-con.png","y",{stationId:"brush2"}),s.giveObjectMapping("holder__brush--boog-R","_assets/_objects/_textures/uvmap__brush-con.png","y",{stationId:"brush2"}),s.giveObjectMapping("holder__brush--ring-R","_assets/_objects/_textures/uvmap__brush-con.png","y",{stationId:"brush2"}),s.giveObjectMapping("holder__brush--base-T","_assets/_objects/_textures/uvmap__flap--blue.png","x",{stationId:"brush-up"}),s.giveObjectMapping("holder__brush--pin-R","_assets/_objects/_textures/uvmap__brush-con.png","y",{stationId:"brush-up"}),s.giveObjectMapping("holder__brush--pin-L","_assets/_objects/_textures/uvmap__brush-con.png","y",{stationId:"brush-up"}),s.giveObjectMapping("holder__brush--pan-R","_assets/_objects/_textures/uvmap__brush-con.png","y",{stationId:"brush-up"}),s.giveObjectMapping("holder__brush--pan-L","_assets/_objects/_textures/uvmap__brush-con.png","y",{stationId:"brush-up"}),s.giveObjectMapping("holder__brush--holder-R","_assets/_objects/_textures/uvmap__brush-con.png","y",{stationId:"brush-up"}),s.giveObjectMapping("holder__brush--holder-L","_assets/_objects/_textures/uvmap__brush-con.png","y",{stationId:"brush-up"}),s.giveObjectMapping("holder__brush--ring-TR","_assets/_objects/_textures/uvmap__brush-con.png","y",{stationId:"brush-up"}),s.giveObjectMapping("holder__brush--ring-TL","_assets/_objects/_textures/uvmap__brush-con.png","y",{stationId:"brush-up"}),s.giveObjectMapping("brush__part--T01","_assets/_objects/_textures/uvmap__flap--blue.png","y",{stationId:"brush-up"}),s.giveObjectMapping("brush__part--T02","_assets/_objects/_textures/uvmap__flap--white.png","y",{stationId:"brush-up"}),s.giveObjectMapping("brush__part--T03","_assets/_objects/_textures/uvmap__flap--blue.png","y",{stationId:"brush-up"}),s.giveObjectMapping("brush__part--T04","_assets/_objects/_textures/uvmap__flap--white.png","y",{stationId:"brush-up"}),s.giveObjectMapping("holder__brush--base-T--UP","_assets/_objects/_textures/uvmap__flap--blue.png","x",{stationId:"brush-up"}),s.giveObjectMapping("holder__brush--pin-R--UP","_assets/_objects/_textures/uvmap__brush-con.png","y",{stationId:"brush-up"}),s.giveObjectMapping("holder__brush--pin-L--UP","_assets/_objects/_textures/uvmap__brush-con.png","y",{stationId:"brush-up"}),s.giveObjectMapping("holder__brush--pan-R--UP","_assets/_objects/_textures/uvmap__brush-con.png","y",{stationId:"brush-up"}),s.giveObjectMapping("holder__brush--pan-L--UP","_assets/_objects/_textures/uvmap__brush-con.png","y",{stationId:"brush-up"}),s.giveObjectMapping("holder__brush--holder-R--UP","_assets/_objects/_textures/uvmap__brush-con.png","y",{stationId:"brush-up"}),s.giveObjectMapping("holder__brush--holder-L--UP","_assets/_objects/_textures/uvmap__brush-con.png","y",{stationId:"brush-up"}),s.giveObjectMapping("holder__brush--ring-TR--UP","_assets/_objects/_textures/uvmap__brush-con.png","y",{stationId:"brush-up"}),s.giveObjectMapping("holder__brush--ring-TL--UP","_assets/_objects/_textures/uvmap__brush-con.png","y",{stationId:"brush-up"}),s.giveObjectMapping("brush__part--T01--UP","_assets/_objects/_textures/uvmap__flap--blue.png","y",{stationId:"brush-up"}),s.giveObjectMapping("brush__part--T02--UP","_assets/_objects/_textures/uvmap__flap--white.png","y",{stationId:"brush-up"}),s.giveObjectMapping("brush__part--T03--UP","_assets/_objects/_textures/uvmap__flap--blue.png","y",{stationId:"brush-up"}),s.giveObjectMapping("brush__part--T04--UP","_assets/_objects/_textures/uvmap__flap--white.png","y",{stationId:"brush-up"}),s.giveObjectMapping("road","_assets/_objects/_textures/uvmap__road.png","y"),s.giveObjectMapping("road__rail--left","_assets/_objects/_textures/uvmap__rail.png","y"),s.giveObjectMapping("road__rail--right","_assets/_objects/_textures/uvmap__rail.png","y"),s.giveObjectMapping("road__rail--middle","_assets/_objects/_textures/uvmap__rail.png","y"),s.giveObjectMapping("road__top--left","_assets/_objects/_textures/uvmap__rail.png","y"),s.giveObjectMapping("road__top--right","_assets/_objects/_textures/uvmap__rail.png","y"),s.giveObjectMapping("arrow__lane","_assets/_objects/_textures/uvmap__arrow.png","y"),s.giveObjectMapping("wasboog","_assets/_objects/_textures/uvmap__brush-con.png","x"),s.giveObjectMapping("wasboog__back","_assets/_objects/_textures/uvmap__brush-con.png","x"),n.forEach((m,f)=>{if(m.uvMapping){const b=m.uvMapping;(Array.isArray(b)?b:[b]).forEach(S=>{S&&S.objectName&&S.imagePath&&s.giveObjectMapping(S.objectName,S.imagePath,S.projectionAxis||"x",S.options||{})})}})}const ov="modulepreload",av=function(s){return"/"+s},$c={},Cv=function(e,t,n){let i=Promise.resolve();if(t&&t.length>0){let a=function(l){return Promise.all(l.map(u=>Promise.resolve(u).then(h=>({status:"fulfilled",value:h}),h=>({status:"rejected",reason:h}))))};document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),c=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));i=a(t.map(l=>{if(l=av(l),l in $c)return;$c[l]=!0;const u=l.endsWith(".css"),h=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${h}`))return;const d=document.createElement("link");if(d.rel=u?"stylesheet":ov,u||(d.as="script"),d.crossOrigin="",d.href=l,c&&d.setAttribute("nonce",c),document.head.appendChild(d),u)return new Promise((p,g)=>{d.addEventListener("load",p),d.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${l}`)))})}))}function r(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return i.then(a=>{for(const o of a||[])o.status==="rejected"&&r(o.reason);return e().catch(r)})};export{yv as A,Kt as B,hv as C,Yt as D,uv as F,bv as G,pv as L,Jn as R,lv as S,Sv as T,Cv as _,gv as a,vv as b,_v as c,Cg as d,Rv as e,xv as f,wv as g,Tv as h,Av as i,Ev as j,Fg as k,Aa as l,Dt as m,Te as n,Mv as o,fv as p,dv as q,st as r,mv as s,zo as t};
