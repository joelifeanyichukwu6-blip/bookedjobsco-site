var zc="160";var Op=1,zh=2,ci=3,Kn=0,Kt=1,Wn=2;var Bp=0;var kt=2;var gr=100;var Gc=204,Vc=205;var kp=0,nm=1,im=2,Bi=0,Gh=1,Vh=2,Wh=3,Na=4,rm=5,jh=6,Ku="attached",sm="detached",Fp=300,xs=301,_s=302,Wc=303,jc=304,vl=306,di=1e3,Fn=1001,xa=1002,$t=1003,Fo=1004;var pa=1005;var un=1006,Xh=1007;var Mr=1008;var vr=1009;var qh=1012,Hp=1013,Ni=1014,ui=1015,Gn=1016,zp=1017,Gp=1018,yr=1020;var Hn=1023;var xr=1026,Ms=1027;var Vp=1029;var Wp=1031,jp=1033,nc=33776,ic=33777,rc=33778,sc=33779,Ju=35840,$u=35841,Qu=35842,ed=35843,Xp=36196,td=37492,nd=37496,id=37808,rd=37809,sd=37810,ad=37811,od=37812,ld=37813,cd=37814,hd=37815,ud=37816,dd=37817,pd=37818,fd=37819,md=37820,gd=37821,ac=36492,vd=36494,yd=36495;var xd=36284,_d=36285,Md=36286;var bs=2300,br=2301,oc=2302,ps=2400,fs=2401,Ho=2402,am=2500,om=2501,qp=0,yl=1,Ua=2,Yp=3e3,_r=3001;var Yn="",ct="srgb",Wt="srgb-linear",Yh="display-p3",xl="display-p3-linear",zo="linear",xt="srgb",Go="rec709",Vo="p3";var Xr=7680;var Xc=35044;var bd="300 es",qc=1035,Es=2e3,Wo=2001,pi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let n=this._listeners[e];if(n!==void 0){let i=n.indexOf(t);i!==-1&&n.splice(i,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let t=this._listeners[e.type];if(t!==void 0){e.target=this;let n=t.slice(0);for(let i=0,s=n.length;i<s;i++)n[i].call(this,e);e.target=null}}},tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ed=1234567,gs=Math.PI/180,Ss=180/Math.PI;function En(){let r=4294967295*Math.random()|0,e=4294967295*Math.random()|0,t=4294967295*Math.random()|0,n=4294967295*Math.random()|0;return(tn[255&r]+tn[r>>8&255]+tn[r>>16&255]+tn[r>>24&255]+"-"+tn[255&e]+tn[e>>8&255]+"-"+tn[e>>16&15|64]+tn[e>>24&255]+"-"+tn[63&t|128]+tn[t>>8&255]+"-"+tn[t>>16&255]+tn[t>>24&255]+tn[255&n]+tn[n>>8&255]+tn[n>>16&255]+tn[n>>24&255]).toLowerCase()}function Vt(r,e,t){return Math.max(e,Math.min(t,r))}function Yc(r,e){return(r%e+e)%e}function fa(r,e,t){return(1-t)*r+t*e}function Zc(r){return(r&r-1)==0&&r!==0}function jo(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Zn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function gt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(4294967295*r);case Uint16Array:return Math.round(65535*r);case Uint8Array:return Math.round(255*r);case Int32Array:return Math.round(2147483647*r);case Int16Array:return Math.round(32767*r);case Int8Array:return Math.round(127*r);default:throw new Error("Invalid component type.")}}var Zp={DEG2RAD:gs,RAD2DEG:Ss,generateUUID:En,clamp:Vt,euclideanModulo:Yc,mapLinear:function(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)},inverseLerp:function(r,e,t){return r!==e?(t-r)/(e-r):0},lerp:fa,damp:function(r,e,t,n){return fa(r,e,1-Math.exp(-t*n))},pingpong:function(r,e=1){return e-Math.abs(Yc(r,2*e)-e)},smoothstep:function(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e))*r*(3-2*r)},smootherstep:function(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e))*r*r*(r*(6*r-15)+10)},randInt:function(r,e){return r+Math.floor(Math.random()*(e-r+1))},randFloat:function(r,e){return r+Math.random()*(e-r)},randFloatSpread:function(r){return r*(.5-Math.random())},seededRandom:function(r){r!==void 0&&(Ed=r);let e=Ed+=1831565813;return e=Math.imul(e^e>>>15,1|e),e^=e+Math.imul(e^e>>>7,61|e),((e^e>>>14)>>>0)/4294967296},degToRad:function(r){return r*gs},radToDeg:function(r){return r*Ss},isPowerOfTwo:Zc,ceilPowerOfTwo:function(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))},floorPowerOfTwo:jo,setQuaternionFromProperEuler:function(r,e,t,n,i){let s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+n)/2),h=a((e+n)/2),u=s((e-n)/2),d=a((e-n)/2),p=s((n-e)/2),f=a((n-e)/2);switch(i){case"XYX":r.set(o*h,l*u,l*d,o*c);break;case"YZY":r.set(l*d,o*h,l*u,o*c);break;case"ZXZ":r.set(l*u,l*d,o*h,o*c);break;case"XZX":r.set(o*h,l*f,l*p,o*c);break;case"YXY":r.set(l*p,o*h,l*f,o*c);break;case"ZYZ":r.set(l*f,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}},normalize:gt,denormalize:Zn},re=class r{constructor(e=0,t=0){r.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Vt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ye=class r{constructor(e,t,n,i,s,a,o,l,c){r.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c)}set(e,t,n,i,s,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],f=n[8],v=i[0],m=i[3],x=i[6],g=i[1],y=i[4],_=i[7],T=i[2],E=i[5],w=i[8];return s[0]=a*v+o*g+l*T,s[3]=a*m+o*y+l*E,s[6]=a*x+o*_+l*w,s[1]=c*v+h*g+u*T,s[4]=c*m+h*y+u*E,s[7]=c*x+h*_+u*w,s[2]=d*v+p*g+f*T,s[5]=d*m+p*y+f*E,s[8]=d*x+p*_+f*w,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*s*h+n*o*l+i*s*c-i*a*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*s,p=c*s-a*l,f=t*u+n*d+i*p;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/f;return e[0]=u*v,e[1]=(i*c-h*n)*v,e[2]=(o*n-i*a)*v,e[3]=d*v,e[4]=(h*t-i*l)*v,e[5]=(i*s-o*t)*v,e[6]=p*v,e[7]=(n*l-c*t)*v,e[8]=(a*t-n*s)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(lc.makeScale(e,t)),this}rotate(e){return this.premultiply(lc.makeRotation(-e)),this}translate(e,t){return this.premultiply(lc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},lc=new Ye;function Kp(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function _a(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function lm(){let r=_a("canvas");return r.style.display="block",r}var Sd={};function ma(r){r in Sd||(Sd[r]=!0,console.warn(r))}var Td=new Ye().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),wd=new Ye().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),to={[Wt]:{transfer:zo,primaries:Go,toReference:r=>r,fromReference:r=>r},[ct]:{transfer:xt,primaries:Go,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[xl]:{transfer:zo,primaries:Vo,toReference:r=>r.applyMatrix3(wd),fromReference:r=>r.applyMatrix3(Td)},[Yh]:{transfer:xt,primaries:Vo,toReference:r=>r.convertSRGBToLinear().applyMatrix3(wd),fromReference:r=>r.applyMatrix3(Td).convertLinearToSRGB()}},cm=new Set([Wt,xl]),st={enabled:!0,_workingColorSpace:Wt,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!cm.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;let n=to[e].toReference;return(0,to[t].fromReference)(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return to[r].primaries},getTransfer:function(r){return r===Yn?zo:to[r].transfer}};function vs(r){return r<.04045?.0773993808*r:Math.pow(.9478672986*r+.0521327014,2.4)}function cc(r){return r<.0031308?12.92*r:1.055*Math.pow(r,.41666)-.055}var qr,Xo=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{qr===void 0&&(qr=_a("canvas")),qr.width=e.width,qr.height=e.height;let n=qr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=qr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=_a("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=255*vs(s[a]/255);return n.putImageData(i,0,0),t}if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(255*vs(t[n]/255)):t[n]=vs(t[n]);return{data:t,width:e.width,height:e.height}}return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},hm=0,qo=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:hm++}),this.uuid=En(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(hc(i[a].image)):s.push(hc(i[a]))}else s=hc(i);n.url=s}return t||(e.images[this.uuid]=n),n}};function hc(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Xo.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var um=0,Qt=class r extends pi{constructor(e=r.DEFAULT_IMAGE,t=r.DEFAULT_MAPPING,n=1001,i=1001,s=1006,a=1008,o=1023,l=1009,c=r.DEFAULT_ANISOTROPY,h=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:um++}),this.uuid=En(),this.name="",this.source=new qo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new re(0,0),this.repeat=new re(1,1),this.center=new re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(ma("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===_r?ct:Yn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Fp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case di:e.x=e.x-Math.floor(e.x);break;case Fn:e.x=e.x<0?0:1;break;case xa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case di:e.y=e.y-Math.floor(e.y);break;case Fn:e.y=e.y<0?0:1;break;case xa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ma("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ct?_r:Yp}set encoding(e){ma("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===_r?ct:Yn}};Qt.DEFAULT_IMAGE=null,Qt.DEFAULT_MAPPING=Fp,Qt.DEFAULT_ANISOTROPY=1;var _t=class r{constructor(e=0,t=0,n=0,i=1){r.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],f=l[9],v=l[2],m=l[6],x=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(f-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(f+m)<.1&&Math.abs(c+p+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(c+1)/2,_=(p+1)/2,T=(x+1)/2,E=(h+d)/4,w=(u+v)/4,N=(f+m)/4;return y>_&&y>T?y<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(y),i=E/n,s=w/n):_>T?_<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(_),n=E/i,s=N/i):T<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(T),n=w/s,i=N/s),this.set(n,i,s,t),this}let g=Math.sqrt((m-f)*(m-f)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(g)<.001&&(g=1),this.x=(m-f)/g,this.y=(u-v)/g,this.z=(d-h)/g,this.w=Math.acos((c+p+x-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Kc=class extends pi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new _t(0,0,e,t),this.scissorTest=!1,this.viewport=new _t(0,0,e,t);let i={width:e,height:t,depth:1};n.encoding!==void 0&&(ma("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===_r?ct:Yn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:un,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Qt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){this.width===e&&this.height===t&&this.depth===n||(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new qo(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},an=class extends Kc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Yo=class extends Qt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=$t,this.minFilter=$t,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Jc=class extends Qt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=$t,this.minFilter=$t,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Dt=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],d=s[a+0],p=s[a+1],f=s[a+2],v=s[a+3];if(o===0)return e[t+0]=l,e[t+1]=c,e[t+2]=h,void(e[t+3]=u);if(o===1)return e[t+0]=d,e[t+1]=p,e[t+2]=f,void(e[t+3]=v);if(u!==v||l!==d||c!==p||h!==f){let m=1-o,x=l*d+c*p+h*f+u*v,g=x>=0?1:-1,y=1-x*x;if(y>Number.EPSILON){let T=Math.sqrt(y),E=Math.atan2(T,x*g);m=Math.sin(m*E)/T,o=Math.sin(o*E)/T}let _=o*g;if(l=l*m+d*_,c=c*m+p*_,h=h*m+f*_,u=u*m+v*_,m===1-o){let T=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=T,c*=T,h*=T,u*=T}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,a){let o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[a],d=s[a+1],p=s[a+2],f=s[a+3];return e[t]=o*f+h*u+l*p-c*d,e[t+1]=l*f+h*d+c*u-o*p,e[t+2]=c*f+h*p+o*d-l*u,e[t+3]=h*f-o*u-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(s/2),d=l(n/2),p=l(i/2),f=l(s/2);switch(a){case"XYZ":this._x=d*h*u+c*p*f,this._y=c*p*u-d*h*f,this._z=c*h*f+d*p*u,this._w=c*h*u-d*p*f;break;case"YXZ":this._x=d*h*u+c*p*f,this._y=c*p*u-d*h*f,this._z=c*h*f-d*p*u,this._w=c*h*u+d*p*f;break;case"ZXY":this._x=d*h*u-c*p*f,this._y=c*p*u+d*h*f,this._z=c*h*f+d*p*u,this._w=c*h*u-d*p*f;break;case"ZYX":this._x=d*h*u-c*p*f,this._y=c*p*u+d*h*f,this._z=c*h*f-d*p*u,this._w=c*h*u+d*p*f;break;case"YZX":this._x=d*h*u+c*p*f,this._y=c*p*u+d*h*f,this._z=c*h*f-d*p*u,this._w=c*h*u-d*p*f;break;case"XZY":this._x=d*h*u-c*p*f,this._y=c*p*u-d*h*f,this._z=c*h*f+d*p*u,this._w=c*h*u+d*p*f;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(a-i)*p}else if(n>o&&n>u){let p=2*Math.sqrt(1+n-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(s+c)/p}else if(o>u){let p=2*Math.sqrt(1+o-n-u);this._w=(s-c)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-n-o);this._w=(a-i)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Vt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+i*c-s*l,this._y=i*h+a*l+s*o-n*c,this._z=s*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,s=this._z,a=this._w,o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},M=class r{constructor(e=0,t=0,n=0){r.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ad.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ad.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),h=2*(o*t-s*i),u=2*(s*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-s*u,this.z=i+l*u+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return uc.copy(this).projectOnVector(e),this.sub(uc)}reflect(e){return this.sub(uc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Vt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,4*t)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,3*t)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=2*(Math.random()-.5),t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},uc=new M,Ad=new Dt,Jt=class{constructor(e=new M(1/0,1/0,1/0),t=new M(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(On.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(On.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=On.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,On):On.fromBufferAttribute(s,a),On.applyMatrix4(e.matrixWorld),this.expandByPoint(On);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),no.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),no.copy(n.boundingBox)),no.applyMatrix4(e.matrixWorld),this.union(no)}let i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,On),On.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(na),io.subVectors(this.max,na),Yr.subVectors(e.a,na),Zr.subVectors(e.b,na),Kr.subVectors(e.c,na),Ai.subVectors(Zr,Yr),Ri.subVectors(Kr,Zr),ur.subVectors(Yr,Kr);let t=[0,-Ai.z,Ai.y,0,-Ri.z,Ri.y,0,-ur.z,ur.y,Ai.z,0,-Ai.x,Ri.z,0,-Ri.x,ur.z,0,-ur.x,-Ai.y,Ai.x,0,-Ri.y,Ri.x,0,-ur.y,ur.x,0];return!!dc(t,Yr,Zr,Kr,io)&&(t=[1,0,0,0,1,0,0,0,1],!!dc(t,Yr,Zr,Kr,io)&&(ro.crossVectors(Ai,Ri),t=[ro.x,ro.y,ro.z],dc(t,Yr,Zr,Kr,io)))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,On).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=.5*this.getSize(On).length()),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ii)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},ii=[new M,new M,new M,new M,new M,new M,new M,new M],On=new M,no=new Jt,Yr=new M,Zr=new M,Kr=new M,Ai=new M,Ri=new M,ur=new M,na=new M,io=new M,ro=new M,dr=new M;function dc(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){dr.fromArray(r,s);let o=i.x*Math.abs(dr.x)+i.y*Math.abs(dr.y)+i.z*Math.abs(dr.z),l=e.dot(dr),c=t.dot(dr),h=n.dot(dr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var dm=new Jt,ia=new M,pc=new M,dn=class{constructor(e=new M,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):dm.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ia.subVectors(e,this.center);let t=ia.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=.5*(n-this.radius);this.center.addScaledVector(ia,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(pc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ia.copy(e.center).add(pc)),this.expandByPoint(ia.copy(e.center).sub(pc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},ri=new M,fc=new M,so=new M,Ci=new M,mc=new M,ao=new M,gc=new M,fi=class{constructor(e=new M,t=new M(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ri)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ri.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ri.copy(this.origin).addScaledVector(this.direction,t),ri.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){fc.copy(e).add(t).multiplyScalar(.5),so.copy(t).sub(e).normalize(),Ci.copy(this.origin).sub(fc);let s=.5*e.distanceTo(t),a=-this.direction.dot(so),o=Ci.dot(this.direction),l=-Ci.dot(so),c=Ci.lengthSq(),h=Math.abs(1-a*a),u,d,p,f;if(h>0)if(u=a*l-o,d=a*o-l,f=s*h,u>=0)if(d>=-f)if(d<=f){let v=1/h;u*=v,d*=v,p=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d<=-f?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c):d<=f?(u=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(fc).addScaledVector(so,d),p}intersectSphere(e,t){ri.subVectors(e.center,this.origin);let n=ri.dot(this.direction),i=ri.dot(ri)-n*n,s=e.radius*e.radius;if(i>s)return null;let a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0?!0:e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||s>i?null:((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>i?null:((o>n||n!=n)&&(n=o),(l<i||i!=i)&&(i=l),i<0?null:this.at(n>=0?n:i,t)))}intersectsBox(e){return this.intersectBox(e,ri)!==null}intersectTriangle(e,t,n,i,s){mc.subVectors(t,e),ao.subVectors(n,e),gc.crossVectors(mc,ao);let a,o=this.direction.dot(gc);if(o>0){if(i)return null;a=1}else{if(!(o<0))return null;a=-1,o=-o}Ci.subVectors(this.origin,e);let l=a*this.direction.dot(ao.crossVectors(Ci,ao));if(l<0)return null;let c=a*this.direction.dot(mc.cross(Ci));if(c<0||l+c>o)return null;let h=-a*Ci.dot(gc);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Le=class r{constructor(e,t,n,i,s,a,o,l,c,h,u,d,p,f,v,m){r.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c,h,u,d,p,f,v,m)}set(e,t,n,i,s,a,o,l,c,h,u,d,p,f,v,m){let x=this.elements;return x[0]=e,x[4]=t,x[8]=n,x[12]=i,x[1]=s,x[5]=a,x[9]=o,x[13]=l,x[2]=c,x[6]=h,x[10]=u,x[14]=d,x[3]=p,x[7]=f,x[11]=v,x[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/Jr.setFromMatrixColumn(e,0).length(),s=1/Jr.setFromMatrixColumn(e,1).length(),a=1/Jr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){let d=a*h,p=a*u,f=o*h,v=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+f*c,t[5]=d-v*c,t[9]=-o*l,t[2]=v-d*c,t[6]=f+p*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*h,p=l*u,f=c*h,v=c*u;t[0]=d+v*o,t[4]=f*o-p,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=p*o-f,t[6]=v+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*h,p=l*u,f=c*h,v=c*u;t[0]=d-v*o,t[4]=-a*u,t[8]=f+p*o,t[1]=p+f*o,t[5]=a*h,t[9]=v-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*h,p=a*u,f=o*h,v=o*u;t[0]=l*h,t[4]=f*c-p,t[8]=d*c+v,t[1]=l*u,t[5]=v*c+d,t[9]=p*c-f,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,p=a*c,f=o*l,v=o*c;t[0]=l*h,t[4]=v-d*u,t[8]=f*u+p,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*u+f,t[10]=d-v*u}else if(e.order==="XZY"){let d=a*l,p=a*c,f=o*l,v=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+v,t[5]=a*h,t[9]=p*u-f,t[2]=f*u-p,t[6]=o*h,t[10]=v*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(pm,e,fm)}lookAt(e,t,n){let i=this.elements;return mn.subVectors(e,t),mn.lengthSq()===0&&(mn.z=1),mn.normalize(),Pi.crossVectors(n,mn),Pi.lengthSq()===0&&(Math.abs(n.z)===1?mn.x+=1e-4:mn.z+=1e-4,mn.normalize(),Pi.crossVectors(n,mn)),Pi.normalize(),oo.crossVectors(mn,Pi),i[0]=Pi.x,i[4]=oo.x,i[8]=mn.x,i[1]=Pi.y,i[5]=oo.y,i[9]=mn.y,i[2]=Pi.z,i[6]=oo.z,i[10]=mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],f=n[2],v=n[6],m=n[10],x=n[14],g=n[3],y=n[7],_=n[11],T=n[15],E=i[0],w=i[4],N=i[8],b=i[12],L=i[1],I=i[5],P=i[9],k=i[13],U=i[2],$=i[6],he=i[10],te=i[14],q=i[3],K=i[7],z=i[11],X=i[15];return s[0]=a*E+o*L+l*U+c*q,s[4]=a*w+o*I+l*$+c*K,s[8]=a*N+o*P+l*he+c*z,s[12]=a*b+o*k+l*te+c*X,s[1]=h*E+u*L+d*U+p*q,s[5]=h*w+u*I+d*$+p*K,s[9]=h*N+u*P+d*he+p*z,s[13]=h*b+u*k+d*te+p*X,s[2]=f*E+v*L+m*U+x*q,s[6]=f*w+v*I+m*$+x*K,s[10]=f*N+v*P+m*he+x*z,s[14]=f*b+v*k+m*te+x*X,s[3]=g*E+y*L+_*U+T*q,s[7]=g*w+y*I+_*$+T*K,s[11]=g*N+y*P+_*he+T*z,s[15]=g*b+y*k+_*te+T*X,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],p=e[14];return e[3]*(+s*l*u-i*c*u-s*o*d+n*c*d+i*o*p-n*l*p)+e[7]*(+t*l*p-t*c*d+s*a*d-i*a*p+i*c*h-s*l*h)+e[11]*(+t*c*u-t*o*p-s*a*u+n*a*p+s*o*h-n*c*h)+e[15]*(-i*o*h-t*l*u+t*o*d+i*a*u-n*a*d+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],p=e[11],f=e[12],v=e[13],m=e[14],x=e[15],g=u*m*c-v*d*c+v*l*p-o*m*p-u*l*x+o*d*x,y=f*d*c-h*m*c-f*l*p+a*m*p+h*l*x-a*d*x,_=h*v*c-f*u*c+f*o*p-a*v*p-h*o*x+a*u*x,T=f*u*l-h*v*l-f*o*d+a*v*d+h*o*m-a*u*m,E=t*g+n*y+i*_+s*T;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/E;return e[0]=g*w,e[1]=(v*d*s-u*m*s-v*i*p+n*m*p+u*i*x-n*d*x)*w,e[2]=(o*m*s-v*l*s+v*i*c-n*m*c-o*i*x+n*l*x)*w,e[3]=(u*l*s-o*d*s-u*i*c+n*d*c+o*i*p-n*l*p)*w,e[4]=y*w,e[5]=(h*m*s-f*d*s+f*i*p-t*m*p-h*i*x+t*d*x)*w,e[6]=(f*l*s-a*m*s-f*i*c+t*m*c+a*i*x-t*l*x)*w,e[7]=(a*d*s-h*l*s+h*i*c-t*d*c-a*i*p+t*l*p)*w,e[8]=_*w,e[9]=(f*u*s-h*v*s-f*n*p+t*v*p+h*n*x-t*u*x)*w,e[10]=(a*v*s-f*o*s+f*n*c-t*v*c-a*n*x+t*o*x)*w,e[11]=(h*o*s-a*u*s-h*n*c+t*u*c+a*n*p-t*o*p)*w,e[12]=T*w,e[13]=(h*v*i-f*u*i+f*n*d-t*v*d-h*n*m+t*u*m)*w,e[14]=(f*o*i-a*v*i-f*n*l+t*v*l+a*n*m-t*o*m)*w,e[15]=(a*u*i-h*o*i+h*n*l-t*u*l-a*n*d+t*o*d)*w,this}scale(e){let t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,u=o+o,d=s*c,p=s*h,f=s*u,v=a*h,m=a*u,x=o*u,g=l*c,y=l*h,_=l*u,T=n.x,E=n.y,w=n.z;return i[0]=(1-(v+x))*T,i[1]=(p+_)*T,i[2]=(f-y)*T,i[3]=0,i[4]=(p-_)*E,i[5]=(1-(d+x))*E,i[6]=(m+g)*E,i[7]=0,i[8]=(f+y)*w,i[9]=(m-g)*w,i[10]=(1-(d+v))*w,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,s=Jr.set(i[0],i[1],i[2]).length(),a=Jr.set(i[4],i[5],i[6]).length(),o=Jr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Bn.copy(this);let l=1/s,c=1/a,h=1/o;return Bn.elements[0]*=l,Bn.elements[1]*=l,Bn.elements[2]*=l,Bn.elements[4]*=c,Bn.elements[5]*=c,Bn.elements[6]*=c,Bn.elements[8]*=h,Bn.elements[9]*=h,Bn.elements[10]*=h,t.setFromRotationMatrix(Bn),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a,o=2e3){let l=this.elements,c=2*s/(t-e),h=2*s/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i),p,f;if(o===Es)p=-(a+s)/(a-s),f=-2*a*s/(a-s);else{if(o!==Wo)throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);p=-a/(a-s),f=-a*s/(a-s)}return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=f,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=2e3){let l=this.elements,c=1/(t-e),h=1/(n-i),u=1/(a-s),d=(t+e)*c,p=(n+i)*h,f,v;if(o===Es)f=(a+s)*u,v=-2*u;else{if(o!==Wo)throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);f=s*u,v=-1*u}return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-f,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Jr=new M,Bn=new Le,pm=new M(0,0,0),fm=new M(1,1,1),Pi=new M,oo=new M,mn=new M,Rd=new Le,Cd=new Dt,Ts=class r{constructor(e=0,t=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(Vt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Vt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Vt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Vt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Vt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Vt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Rd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Rd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Cd.setFromEuler(this),this.setFromQuaternion(Cd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ts.DEFAULT_ORDER="XYZ";var Ma=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!=0}isEnabled(e){return(this.mask&(1<<e|0))!=0}},mm=0,Pd=new M,$r=new Dt,si=new Le,lo=new M,ra=new M,gm=new M,vm=new Dt,Ld=new M(1,0,0),Id=new M(0,1,0),Dd=new M(0,0,1),ym={type:"added"},xm={type:"removed"},vt=class r extends pi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mm++}),this.uuid=En(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let e=new M,t=new Ts,n=new Dt,i=new M(1,1,1);t._onChange(function(){n.setFromEuler(t,!1)}),n._onChange(function(){t.setFromQuaternion(n,void 0,!1)}),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Le},normalMatrix:{value:new Ye}}),this.matrix=new Le,this.matrixWorld=new Le,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ma,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return $r.setFromAxisAngle(e,t),this.quaternion.multiply($r),this}rotateOnWorldAxis(e,t){return $r.setFromAxisAngle(e,t),this.quaternion.premultiply($r),this}rotateX(e){return this.rotateOnAxis(Ld,e)}rotateY(e){return this.rotateOnAxis(Id,e)}rotateZ(e){return this.rotateOnAxis(Dd,e)}translateOnAxis(e,t){return Pd.copy(e).applyQuaternion(this.quaternion),this.position.add(Pd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ld,e)}translateY(e){return this.translateOnAxis(Id,e)}translateZ(e){return this.translateOnAxis(Dd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(si.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?lo.copy(e):lo.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),ra.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?si.lookAt(ra,lo,this.up):si.lookAt(lo,ra,this.up),this.quaternion.setFromRotationMatrix(si),i&&(si.extractRotation(i.matrixWorld),$r.setFromRotationMatrix(si),this.quaternion.premultiply($r.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(ym)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(xm)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),si.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),si.multiply(e.parent.matrixWorld)),e.applyMatrix4(si),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ra,e,gm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ra,vm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++){let s=t[n];s.matrixWorldAutoUpdate!==!0&&e!==!0||s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let i=this.children;for(let s=0,a=i.length;s<a;s++){let o=i[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()})),this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),p=a(e.animations),f=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),f.length>0&&(n.nodes=f)}return n.object=i,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};vt.DEFAULT_UP=new M(0,1,0),vt.DEFAULT_MATRIX_AUTO_UPDATE=!0,vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var kn=new M,ai=new M,vc=new M,oi=new M,Qr=new M,es=new M,Nd=new M,yc=new M,xc=new M,_c=new M,co=!1,Ui=class r{constructor(e=new M,t=new M,n=new M){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),kn.subVectors(e,t),i.cross(kn);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){kn.subVectors(i,t),ai.subVectors(n,t),vc.subVectors(e,t);let a=kn.dot(kn),o=kn.dot(ai),l=kn.dot(vc),c=ai.dot(ai),h=ai.dot(vc),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;let d=1/u,p=(c*l-o*h)*d,f=(a*h-o*l)*d;return s.set(1-p-f,f,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,oi)!==null&&oi.x>=0&&oi.y>=0&&oi.x+oi.y<=1}static getUV(e,t,n,i,s,a,o,l){return co===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),co=!0),this.getInterpolation(e,t,n,i,s,a,o,l)}static getInterpolation(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,oi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,oi.x),l.addScaledVector(a,oi.y),l.addScaledVector(o,oi.z),l)}static isFrontFacing(e,t,n,i){return kn.subVectors(n,t),ai.subVectors(e,t),kn.cross(ai).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return kn.subVectors(this.c,this.b),ai.subVectors(this.a,this.b),.5*kn.cross(ai).length()}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return r.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return r.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return co===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),co=!0),r.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}getInterpolation(e,t,n,i,s){return r.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return r.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return r.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,s=this.c,a,o;Qr.subVectors(i,n),es.subVectors(s,n),yc.subVectors(e,n);let l=Qr.dot(yc),c=es.dot(yc);if(l<=0&&c<=0)return t.copy(n);xc.subVectors(e,i);let h=Qr.dot(xc),u=es.dot(xc);if(h>=0&&u<=h)return t.copy(i);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(Qr,a);_c.subVectors(e,s);let p=Qr.dot(_c),f=es.dot(_c);if(f>=0&&p<=f)return t.copy(s);let v=p*c-l*f;if(v<=0&&c>=0&&f<=0)return o=c/(c-f),t.copy(n).addScaledVector(es,o);let m=h*f-p*u;if(m<=0&&u-h>=0&&p-f>=0)return Nd.subVectors(s,i),o=(u-h)/(u-h+(p-f)),t.copy(i).addScaledVector(Nd,o);let x=1/(m+v+d);return a=v*x,o=d*x,t.copy(n).addScaledVector(Qr,a).addScaledVector(es,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Jp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Li={h:0,s:0,l:0},ho={h:0,s:0,l:0};function Mc(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+6*(e-r)*t:t<.5?e:t<2/3?r+6*(e-r)*(2/3-t):r}var ve=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ct){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255,st.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=st.workingColorSpace){return this.r=e,this.g=t,this.b=n,st.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=st.workingColorSpace){if(e=Yc(e,1),t=Vt(t,0,1),n=Vt(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Mc(a,s,e+1/3),this.g=Mc(a,s,e),this.b=Mc(a,s,e-1/3)}return st.toWorkingColorSpace(this,i),this}setStyle(e,t=ct){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ct){let n=Jp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=vs(e.r),this.g=vs(e.g),this.b=vs(e.b),this}copyLinearToSRGB(e){return this.r=cc(e.r),this.g=cc(e.g),this.b=cc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ct){return st.fromWorkingColorSpace(nn.copy(this),e),65536*Math.round(Vt(255*nn.r,0,255))+256*Math.round(Vt(255*nn.g,0,255))+Math.round(Vt(255*nn.b,0,255))}getHexString(e=ct){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=st.workingColorSpace){st.fromWorkingColorSpace(nn.copy(this),t);let n=nn.r,i=nn.g,s=nn.b,a=Math.max(n,i,s),o=Math.min(n,i,s),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=st.workingColorSpace){return st.fromWorkingColorSpace(nn.copy(this),t),e.r=nn.r,e.g=nn.g,e.b=nn.b,e}getStyle(e=ct){st.fromWorkingColorSpace(nn.copy(this),e);let t=nn.r,n=nn.g,i=nn.b;return e!==ct?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(255*t)},${Math.round(255*n)},${Math.round(255*i)})`}offsetHSL(e,t,n){return this.getHSL(Li),this.setHSL(Li.h+e,Li.s+t,Li.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Li),e.getHSL(ho);let n=fa(Li.h,ho.h,t),i=fa(Li.s,ho.s,t),s=fa(Li.l,ho.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},nn=new ve;ve.NAMES=Jp;var _m=0,pn=class extends pi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_m++}),this.uuid=En(),this.name="",this.type="Material",this.blending=1,this.side=Kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Gc,this.blendDst=Vc,this.blendEquation=gr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ve(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xr,this.stencilZFail=Xr,this.stencilZPass=Xr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];i!==void 0?i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n:console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`)}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};function i(s){let a=[];for(let o in s){let l=s[o];delete l.metadata,a.push(l)}return a}if(n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==Kn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Gc&&(n.blendSrc=this.blendSrc),this.blendDst!==Vc&&(n.blendDst=this.blendDst),this.blendEquation!==gr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Xr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Xr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData),t){let s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},ht=class extends pn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=kp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Rv=Mm();function Mm(){let r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(n[l]=0,n[256|l]=32768,i[l]=24,i[256|l]=24):c<-14?(n[l]=1024>>-c-14,n[256|l]=1024>>-c-14|32768,i[l]=-c-1,i[256|l]=-c-1):c<=15?(n[l]=c+15<<10,n[256|l]=c+15<<10|32768,i[l]=13,i[256|l]=13):c<128?(n[l]=31744,n[256|l]=64512,i[l]=24,i[256|l]=24):(n[l]=31744,n[256|l]=64512,i[l]=13,i[256|l]=13)}let s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;!(8388608&c);)c<<=1,h-=8388608;c&=-8388609,h+=947912704,s[l]=c|h}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:s,exponentTable:a,offsetTable:o}}var Ut=new M,uo=new re,Mt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Xc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ui,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)uo.fromBufferAttribute(this,t),uo.applyMatrix3(e),this.setXY(t,uo.x,uo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix3(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix4(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyNormalMatrix(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.transformDirection(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Zn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=gt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Zn(t,this.array)),t}setX(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Zn(t,this.array)),t}setY(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Zn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Zn(t,this.array)),t}setW(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),i=gt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),i=gt(i,this.array),s=gt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Xc&&(e.usage=this.usage),e}};var Zo=class extends Mt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Ko=class extends Mt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Pe=class extends Mt{constructor(e,t,n){super(new Float32Array(e),t,n)}};var bm=0,bn=new Le,bc=new vt,ts=new M,gn=new Jt,sa=new Jt,Zt=new M,at=class r extends pi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bm++}),this.uuid=En(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Kp(e)?Ko:Zo)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Ye().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return bn.makeRotationFromQuaternion(e),this.applyMatrix4(bn),this}rotateX(e){return bn.makeRotationX(e),this.applyMatrix4(bn),this}rotateY(e){return bn.makeRotationY(e),this.applyMatrix4(bn),this}rotateZ(e){return bn.makeRotationZ(e),this.applyMatrix4(bn),this}translate(e,t,n){return bn.makeTranslation(e,t,n),this.applyMatrix4(bn),this}scale(e,t,n){return bn.makeScale(e,t,n),this.applyMatrix4(bn),this}lookAt(e){return bc.lookAt(e),bc.updateMatrix(),this.applyMatrix4(bc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ts).negate(),this.translate(ts.x,ts.y,ts.z),this}setFromPoints(e){let t=[];for(let n=0,i=e.length;n<i;n++){let s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Pe(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Jt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),void this.boundingBox.set(new M(-1/0,-1/0,-1/0),new M(1/0,1/0,1/0));if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let s=t[n];gn.setFromBufferAttribute(s),this.morphTargetsRelative?(Zt.addVectors(this.boundingBox.min,gn.min),this.boundingBox.expandByPoint(Zt),Zt.addVectors(this.boundingBox.max,gn.max),this.boundingBox.expandByPoint(Zt)):(this.boundingBox.expandByPoint(gn.min),this.boundingBox.expandByPoint(gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new dn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),void this.boundingSphere.set(new M,1/0);if(e){let n=this.boundingSphere.center;if(gn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];sa.setFromBufferAttribute(o),this.morphTargetsRelative?(Zt.addVectors(gn.min,sa.min),gn.expandByPoint(Zt),Zt.addVectors(gn.max,sa.max),gn.expandByPoint(Zt)):(gn.expandByPoint(sa.min),gn.expandByPoint(sa.max))}gn.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)Zt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Zt));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Zt.fromBufferAttribute(o,c),l&&(ts.fromBufferAttribute(e,c),Zt.add(ts)),i=Math.max(i,n.distanceToSquared(Zt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0)return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");let n=e.array,i=t.position.array,s=t.normal.array,a=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Mt(new Float32Array(4*o),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let L=0;L<o;L++)c[L]=new M,h[L]=new M;let u=new M,d=new M,p=new M,f=new re,v=new re,m=new re,x=new M,g=new M;function y(L,I,P){u.fromArray(i,3*L),d.fromArray(i,3*I),p.fromArray(i,3*P),f.fromArray(a,2*L),v.fromArray(a,2*I),m.fromArray(a,2*P),d.sub(u),p.sub(u),v.sub(f),m.sub(f);let k=1/(v.x*m.y-m.x*v.y);isFinite(k)&&(x.copy(d).multiplyScalar(m.y).addScaledVector(p,-v.y).multiplyScalar(k),g.copy(p).multiplyScalar(v.x).addScaledVector(d,-m.x).multiplyScalar(k),c[L].add(x),c[I].add(x),c[P].add(x),h[L].add(g),h[I].add(g),h[P].add(g))}let _=this.groups;_.length===0&&(_=[{start:0,count:n.length}]);for(let L=0,I=_.length;L<I;++L){let P=_[L],k=P.start;for(let U=k,$=k+P.count;U<$;U+=3)y(n[U+0],n[U+1],n[U+2])}let T=new M,E=new M,w=new M,N=new M;function b(L){w.fromArray(s,3*L),N.copy(w);let I=c[L];T.copy(I),T.sub(w.multiplyScalar(w.dot(I))).normalize(),E.crossVectors(N,I);let P=E.dot(h[L])<0?-1:1;l[4*L]=T.x,l[4*L+1]=T.y,l[4*L+2]=T.z,l[4*L+3]=P}for(let L=0,I=_.length;L<I;++L){let P=_[L],k=P.start;for(let U=k,$=k+P.count;U<$;U+=3)b(n[U+0]),b(n[U+1]),b(n[U+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Mt(new Float32Array(3*t.count),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let i=new M,s=new M,a=new M,o=new M,l=new M,c=new M,h=new M,u=new M;if(e)for(let d=0,p=e.count;d<p;d+=3){let f=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,f),s.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),o.fromBufferAttribute(n,f),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Zt.fromBufferAttribute(e,t),Zt.normalize(),e.setXYZ(t,Zt.x,Zt.y,Zt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),p=0,f=0;for(let v=0,m=l.length;v<m;v++){p=o.isInterleavedBufferAttribute?l[v]*o.data.stride+o.offset:l[v]*h;for(let x=0;x<h;x++)d[f++]=c[p++]}return new Mt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new r,n=this.index.array,i=this.attributes;for(let o in i){let l=e(i[o],n);t.setAttribute(o,l)}let s=this.morphAttributes;for(let o in s){let l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){let d=e(c[h],n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(i[l]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let i=e.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(t))}let s=e.morphAttributes;for(let c in s){let h=[],u=s[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ud=new Le,pr=new fi,po=new dn,Od=new M,ns=new M,is=new M,rs=new M,Ec=new M,fo=new M,mo=new re,go=new re,vo=new re,Bd=new M,kd=new M,Fd=new M,yo=new M,xo=new M,_e=class extends vt{constructor(e=new at,t=new ht){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,s=n.length;i<s;i++){let a=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=i}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(s&&o){fo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=o[l],u=s[l];h!==0&&(Ec.fromBufferAttribute(u,e),a?fo.addScaledVector(Ec,h):fo.addScaledVector(Ec.sub(t),h))}t.add(fo)}return t}raycast(e,t){let n=this.geometry,i=this.material,s=this.matrixWorld;if(i!==void 0){if(n.boundingSphere===null&&n.computeBoundingSphere(),po.copy(n.boundingSphere),po.applyMatrix4(s),pr.copy(e.ray).recast(e.near),po.containsPoint(pr.origin)===!1&&(pr.intersectSphere(po,Od)===null||pr.origin.distanceToSquared(Od)>(e.far-e.near)**2))return;Ud.copy(s).invert(),pr.copy(e.ray).applyMatrix4(Ud),n.boundingBox!==null&&pr.intersectsBox(n.boundingBox)===!1||this._computeIntersections(e,t,pr)}}_computeIntersections(e,t,n){let i,s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let f=0,v=d.length;f<v;f++){let m=d[f],x=a[m.materialIndex];for(let g=Math.max(m.start,p.start),y=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));g<y;g+=3)i=_o(this,x,e,n,c,h,u,o.getX(g),o.getX(g+1),o.getX(g+2)),i&&(i.faceIndex=Math.floor(g/3),i.face.materialIndex=m.materialIndex,t.push(i))}else for(let f=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);f<v;f+=3)i=_o(this,a,e,n,c,h,u,o.getX(f),o.getX(f+1),o.getX(f+2)),i&&(i.faceIndex=Math.floor(f/3),t.push(i));else if(l!==void 0)if(Array.isArray(a))for(let f=0,v=d.length;f<v;f++){let m=d[f],x=a[m.materialIndex];for(let g=Math.max(m.start,p.start),y=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));g<y;g+=3)i=_o(this,x,e,n,c,h,u,g,g+1,g+2),i&&(i.faceIndex=Math.floor(g/3),i.face.materialIndex=m.materialIndex,t.push(i))}else for(let f=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);f<v;f+=3)i=_o(this,a,e,n,c,h,u,f,f+1,f+2),i&&(i.faceIndex=Math.floor(f/3),t.push(i))}};function _o(r,e,t,n,i,s,a,o,l,c){r.getVertexPosition(o,ns),r.getVertexPosition(l,is),r.getVertexPosition(c,rs);let h=function(u,d,p,f,v,m,x,g){let y;if(y=d.side===Kt?f.intersectTriangle(x,m,v,!0,g):f.intersectTriangle(v,m,x,d.side===Kn,g),y===null)return null;xo.copy(g),xo.applyMatrix4(u.matrixWorld);let _=p.ray.origin.distanceTo(xo);return _<p.near||_>p.far?null:{distance:_,point:xo.clone(),object:u}}(r,e,t,n,ns,is,rs,yo);if(h){i&&(mo.fromBufferAttribute(i,o),go.fromBufferAttribute(i,l),vo.fromBufferAttribute(i,c),h.uv=Ui.getInterpolation(yo,ns,is,rs,mo,go,vo,new re)),s&&(mo.fromBufferAttribute(s,o),go.fromBufferAttribute(s,l),vo.fromBufferAttribute(s,c),h.uv1=Ui.getInterpolation(yo,ns,is,rs,mo,go,vo,new re),h.uv2=h.uv1),a&&(Bd.fromBufferAttribute(a,o),kd.fromBufferAttribute(a,l),Fd.fromBufferAttribute(a,c),h.normal=Ui.getInterpolation(yo,ns,is,rs,Bd,kd,Fd,new M),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new M,materialIndex:0};Ui.getNormal(ns,is,rs,u.normal),h.face=u}return h}var se=class r extends at{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};let o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,p=0;function f(v,m,x,g,y,_,T,E,w,N,b){let L=_/w,I=T/N,P=_/2,k=T/2,U=E/2,$=w+1,he=N+1,te=0,q=0,K=new M;for(let z=0;z<he;z++){let X=z*I-k;for(let fe=0;fe<$;fe++){let A=fe*L-P;K[v]=A*g,K[m]=X*y,K[x]=U,c.push(K.x,K.y,K.z),K[v]=0,K[m]=0,K[x]=E>0?1:-1,h.push(K.x,K.y,K.z),u.push(fe/w),u.push(1-z/N),te+=1}}for(let z=0;z<N;z++)for(let X=0;X<w;X++){let fe=d+X+$*z,A=d+X+$*(z+1),R=d+(X+1)+$*(z+1),H=d+(X+1)+$*z;l.push(fe,A,H),l.push(A,R,H),q+=6}o.addGroup(p,q,b),p+=q,d+=te}f("z","y","x",-1,-1,n,t,e,a,s,0),f("z","y","x",1,-1,n,t,-e,a,s,1),f("x","z","y",1,1,e,n,t,i,a,2),f("x","z","y",1,-1,e,n,-t,i,a,3),f("x","y","z",1,-1,e,t,n,i,s,4),f("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Pe(c,3)),this.setAttribute("normal",new Pe(h,3)),this.setAttribute("uv",new Pe(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function ws(r){let e={};for(let t in r){e[t]={};for(let n in r[t]){let i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function sn(r){let e={};for(let t=0;t<r.length;t++){let n=ws(r[t]);for(let i in n)e[i]=n[i]}return e}function $p(r){return r.getRenderTarget()===null?r.outputColorSpace:st.workingColorSpace}var qi={clone:ws,merge:sn},Ot=class extends pn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,this.fragmentShader=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ws(e.uniforms),this.uniformsGroups=function(t){let n=[];for(let i=0;i<t.length;i++)n.push(t[i].clone());return n}(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let s=this.uniforms[i].value;s&&s.isTexture?t.uniforms[i]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[i]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[i]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[i]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[i]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[i]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[i]={type:"m4",value:s.toArray()}:t.uniforms[i]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},ba=class extends vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Le,this.projectionMatrix=new Le,this.projectionMatrixInverse=new Le,this.coordinateSystem=Es}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},It=class extends ba{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=2*Ss*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(.5*gs*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return 2*Ss*Math.atan(Math.tan(.5*gs*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(.5*gs*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ss=-90,$c=class extends vt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new It(ss,1,e,t);i.layers=this.layers,this.add(i);let s=new It(ss,1,e,t);s.layers=this.layers,this.add(s);let a=new It(ss,1,e,t);a.layers=this.layers,this.add(a);let o=new It(ss,1,e,t);o.layers=this.layers,this.add(o);let l=new It(ss,1,e,t);l.layers=this.layers,this.add(l);let c=new It(ss,1,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,l]=t;for(let c of t)this.remove(c);if(e===Es)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else{if(e!==Wo)throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1)}for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),f=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}},Jo=class extends Qt{constructor(e,t,n,i,s,a,o,l,c,h){super(e=e!==void 0?e:[],t=t!==void 0?t:xs,n,i,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Qc=class extends an{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(ma("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===_r?ct:Yn),this.texture=new Jo(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0&&t.generateMipmaps,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:un}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new se(5,5,5),s=new Ot({name:"CubemapFromEquirect",uniforms:ws(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Kt,blending:0});s.uniforms.tEquirect.value=t;let a=new _e(i,s),o=t.minFilter;return t.minFilter===Mr&&(t.minFilter=un),new $c(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}},Sc=new M,Em=new M,Sm=new Ye,hi=class{constructor(e=new M(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=Sc.subVectors(n,t).cross(Em.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Sc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Sm.getNormalMatrix(e),i=this.coplanarPoint(Sc).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},fr=new dn,Mo=new M,As=class{constructor(e=new hi,t=new hi,n=new hi,i=new hi,s=new hi,a=new hi){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=2e3){let n=this.planes,i=e.elements,s=i[0],a=i[1],o=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],p=i[8],f=i[9],v=i[10],m=i[11],x=i[12],g=i[13],y=i[14],_=i[15];if(n[0].setComponents(l-s,d-c,m-p,_-x).normalize(),n[1].setComponents(l+s,d+c,m+p,_+x).normalize(),n[2].setComponents(l+a,d+h,m+f,_+g).normalize(),n[3].setComponents(l-a,d-h,m-f,_-g).normalize(),n[4].setComponents(l-o,d-u,m-v,_-y).normalize(),t===Es)n[5].setComponents(l+o,d+u,m+v,_+y).normalize();else{if(t!==Wo)throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);n[5].setComponents(o,u,v,y).normalize()}return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),fr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),fr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(fr)}intersectsSprite(e){return fr.center.set(0,0,0),fr.radius=.7071067811865476,fr.applyMatrix4(e.matrixWorld),this.intersectsSphere(fr)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(Mo.x=i.normal.x>0?e.max.x:e.min.x,Mo.y=i.normal.y>0?e.max.y:e.min.y,Mo.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Mo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Qp(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Tm(r,e){let t=e.isWebGL2,n=new WeakMap;return{get:function(i){return i.isInterleavedBufferAttribute&&(i=i.data),n.get(i)},remove:function(i){i.isInterleavedBufferAttribute&&(i=i.data);let s=n.get(i);s&&(r.deleteBuffer(s.buffer),n.delete(i))},update:function(i,s){if(i.isGLBufferAttribute){let o=n.get(i);return void((!o||o.version<i.version)&&n.set(i,{buffer:i.buffer,type:i.type,bytesPerElement:i.elementSize,version:i.version}))}i.isInterleavedBufferAttribute&&(i=i.data);let a=n.get(i);if(a===void 0)n.set(i,function(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=r.createBuffer(),p;if(r.bindBuffer(l,d),r.bufferData(l,c,h),o.onUploadCallback(),c instanceof Float32Array)p=r.FLOAT;else if(c instanceof Uint16Array)if(o.isFloat16BufferAttribute){if(!t)throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");p=r.HALF_FLOAT}else p=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=r.SHORT;else if(c instanceof Uint32Array)p=r.UNSIGNED_INT;else if(c instanceof Int32Array)p=r.INT;else if(c instanceof Int8Array)p=r.BYTE;else if(c instanceof Uint8Array)p=r.UNSIGNED_BYTE;else{if(!(c instanceof Uint8ClampedArray))throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);p=r.UNSIGNED_BYTE}return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}(i,s));else if(a.version<i.version){if(a.size!==i.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");(function(o,l,c){let h=l.array,u=l._updateRange,d=l.updateRanges;if(r.bindBuffer(c,o),u.count===-1&&d.length===0&&r.bufferSubData(c,0,h),d.length!==0){for(let p=0,f=d.length;p<f;p++){let v=d[p];t?r.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count):r.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h.subarray(v.start,v.start+v.count))}l.clearUpdateRanges()}u.count!==-1&&(t?r.bufferSubData(c,u.offset*h.BYTES_PER_ELEMENT,h,u.offset,u.count):r.bufferSubData(c,u.offset*h.BYTES_PER_ELEMENT,h.subarray(u.offset,u.offset+u.count)),u.count=-1),l.onUploadCallback()})(a.buffer,i,s),a.version=i.version}}}}var Bt=class r extends at{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=e/o,d=t/l,p=[],f=[],v=[],m=[];for(let x=0;x<h;x++){let g=x*d-a;for(let y=0;y<c;y++){let _=y*u-s;f.push(_,-g,0),v.push(0,0,1),m.push(y/o),m.push(1-x/l)}}for(let x=0;x<l;x++)for(let g=0;g<o;g++){let y=g+c*x,_=g+c*(x+1),T=g+1+c*(x+1),E=g+1+c*x;p.push(y,_,E),p.push(_,T,E)}this.setIndex(p),this.setAttribute("position",new Pe(f,3)),this.setAttribute("normal",new Pe(v,3)),this.setAttribute("uv",new Pe(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.widthSegments,e.heightSegments)}},Ge={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
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
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
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
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
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
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
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
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
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
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
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
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,common:`#define PI 3.141592653589793
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
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
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
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:"gl_FragColor = linearToOutputTexel( gl_FragColor );",colorspace_pars_fragment:`
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
}`,envmap_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
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
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
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
}`,lightmap_fragment:`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
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
#endif`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
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
#endif`,lights_physical_pars_fragment:`struct PhysicalMaterial {
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
}`,lights_fragment_begin:`
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
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
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
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
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
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
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
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
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
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
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
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
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
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
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
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
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
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
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
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
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
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
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
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
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
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
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
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
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
}`,depth_frag:`#if DEPTH_PACKING == 3200
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
}`,distanceRGBA_vert:`#define DISTANCE
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
}`,distanceRGBA_frag:`#define DISTANCE
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
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
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
}`,linedashed_frag:`uniform vec3 diffuse;
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
}`,meshbasic_vert:`#include <common>
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
}`,meshbasic_frag:`uniform vec3 diffuse;
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
}`,meshlambert_vert:`#define LAMBERT
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
}`,meshlambert_frag:`#define LAMBERT
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
}`,meshmatcap_vert:`#define MATCAP
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
}`,meshmatcap_frag:`#define MATCAP
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
}`,meshnormal_vert:`#define NORMAL
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
}`,meshnormal_frag:`#define NORMAL
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
}`,meshphong_vert:`#define PHONG
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
}`,meshphong_frag:`#define PHONG
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
}`,meshphysical_vert:`#define STANDARD
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
}`,meshphysical_frag:`#define STANDARD
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
}`,meshtoon_vert:`#define TOON
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
}`,meshtoon_frag:`#define TOON
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
}`,points_vert:`uniform float size;
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
}`,points_frag:`uniform vec3 diffuse;
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
}`,shadow_vert:`#include <common>
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
}`,shadow_frag:`uniform vec3 color;
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
}`,sprite_vert:`uniform float rotation;
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
}`,sprite_frag:`uniform vec3 diffuse;
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
}`},pe={common:{diffuse:{value:new ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new ve(16777215)},opacity:{value:1},center:{value:new re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},qn={basic:{uniforms:sn([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:sn([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new ve(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:sn([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new ve(0)},specular:{value:new ve(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:sn([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:sn([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new ve(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:sn([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:sn([pe.points,pe.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:sn([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:sn([pe.common,pe.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:sn([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:sn([pe.sprite,pe.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:sn([pe.common,pe.displacementmap,{referencePosition:{value:new M},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:sn([pe.lights,pe.fog,{color:{value:new ve(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};qn.physical={uniforms:sn([qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new ve(0)},specularColor:{value:new ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};var bo={r:0,b:0,g:0};function wm(r,e,t,n,i,s,a){let o=new ve(0),l,c,h=s===!0?0:1,u=null,d=0,p=null;function f(v,m){v.getRGB(bo,$p(r)),n.buffers.color.setClear(bo.r,bo.g,bo.b,m,a)}return{getClearColor:function(){return o},setClearColor:function(v,m=1){o.set(v),h=m,f(o,h)},getClearAlpha:function(){return h},setClearAlpha:function(v){h=v,f(o,h)},render:function(v,m){let x=!1,g=m.isScene===!0?m.background:null;g&&g.isTexture&&(g=(m.backgroundBlurriness>0?t:e).get(g)),g===null?f(o,h):g&&g.isColor&&(f(g,1),x=!0);let y=r.xr.getEnvironmentBlendMode();y==="additive"?n.buffers.color.setClear(0,0,0,1,a):y==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||x)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),g&&(g.isCubeTexture||g.mapping===vl)?(c===void 0&&(c=new _e(new se(1,1,1),new Ot({name:"BackgroundCubeMaterial",uniforms:ws(qn.backgroundCube.uniforms),vertexShader:qn.backgroundCube.vertexShader,fragmentShader:qn.backgroundCube.fragmentShader,side:Kt,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(_,T,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=g,c.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,c.material.toneMapped=st.getTransfer(g.colorSpace)!==xt,u===g&&d===g.version&&p===r.toneMapping||(c.material.needsUpdate=!0,u=g,d=g.version,p=r.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):g&&g.isTexture&&(l===void 0&&(l=new _e(new Bt(2,2),new Ot({name:"BackgroundMaterial",uniforms:ws(qn.background.uniforms),vertexShader:qn.background.vertexShader,fragmentShader:qn.background.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=g,l.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,l.material.toneMapped=st.getTransfer(g.colorSpace)!==xt,g.matrixAutoUpdate===!0&&g.updateMatrix(),l.material.uniforms.uvTransform.value.copy(g.matrix),u===g&&d===g.version&&p===r.toneMapping||(l.material.needsUpdate=!0,u=g,d=g.version,p=r.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}}}function Am(r,e,t,n){let i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},l=p(null),c=l,h=!1;function u(T){return n.isWebGL2?r.bindVertexArray(T):s.bindVertexArrayOES(T)}function d(T){return n.isWebGL2?r.deleteVertexArray(T):s.deleteVertexArrayOES(T)}function p(T){let E=[],w=[],N=[];for(let b=0;b<i;b++)E[b]=0,w[b]=0,N[b]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:w,attributeDivisors:N,object:T,attributes:{},index:null}}function f(){let T=c.newAttributes;for(let E=0,w=T.length;E<w;E++)T[E]=0}function v(T){m(T,0)}function m(T,E){let w=c.newAttributes,N=c.enabledAttributes,b=c.attributeDivisors;w[T]=1,N[T]===0&&(r.enableVertexAttribArray(T),N[T]=1),b[T]!==E&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](T,E),b[T]=E)}function x(){let T=c.newAttributes,E=c.enabledAttributes;for(let w=0,N=E.length;w<N;w++)E[w]!==T[w]&&(r.disableVertexAttribArray(w),E[w]=0)}function g(T,E,w,N,b,L,I){I===!0?r.vertexAttribIPointer(T,E,w,b,L):r.vertexAttribPointer(T,E,w,N,b,L)}function y(){_(),h=!0,c!==l&&(c=l,u(c.object))}function _(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:function(T,E,w,N,b){let L=!1;if(a){let I=function(P,k,U){let $=U.wireframe===!0,he=o[P.id];he===void 0&&(he={},o[P.id]=he);let te=he[k.id];te===void 0&&(te={},he[k.id]=te);let q=te[$];return q===void 0&&(q=p(n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()),te[$]=q),q}(N,w,E);c!==I&&(c=I,u(c.object)),L=function(P,k,U,$){let he=c.attributes,te=k.attributes,q=0,K=U.getAttributes();for(let z in K)if(K[z].location>=0){let X=he[z],fe=te[z];if(fe===void 0&&(z==="instanceMatrix"&&P.instanceMatrix&&(fe=P.instanceMatrix),z==="instanceColor"&&P.instanceColor&&(fe=P.instanceColor)),X===void 0||X.attribute!==fe||fe&&X.data!==fe.data)return!0;q++}return c.attributesNum!==q||c.index!==$}(T,N,w,b),L&&function(P,k,U,$){let he={},te=k.attributes,q=0,K=U.getAttributes();for(let z in K)if(K[z].location>=0){let X=te[z];X===void 0&&(z==="instanceMatrix"&&P.instanceMatrix&&(X=P.instanceMatrix),z==="instanceColor"&&P.instanceColor&&(X=P.instanceColor));let fe={};fe.attribute=X,X&&X.data&&(fe.data=X.data),he[z]=fe,q++}c.attributes=he,c.attributesNum=q,c.index=$}(T,N,w,b)}else{let I=E.wireframe===!0;c.geometry===N.id&&c.program===w.id&&c.wireframe===I||(c.geometry=N.id,c.program=w.id,c.wireframe=I,L=!0)}b!==null&&t.update(b,r.ELEMENT_ARRAY_BUFFER),(L||h)&&(h=!1,function(I,P,k,U){if(n.isWebGL2===!1&&(I.isInstancedMesh||U.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;f();let $=U.attributes,he=k.getAttributes(),te=P.defaultAttributeValues;for(let q in he){let K=he[q];if(K.location>=0){let z=$[q];if(z===void 0&&(q==="instanceMatrix"&&I.instanceMatrix&&(z=I.instanceMatrix),q==="instanceColor"&&I.instanceColor&&(z=I.instanceColor)),z!==void 0){let X=z.normalized,fe=z.itemSize,A=t.get(z);if(A===void 0)continue;let R=A.buffer,H=A.type,Z=A.bytesPerElement,D=n.isWebGL2===!0&&(H===r.INT||H===r.UNSIGNED_INT||z.gpuType===Hp);if(z.isInterleavedBufferAttribute){let Y=z.data,B=Y.stride,O=z.offset;if(Y.isInstancedInterleavedBuffer){for(let G=0;G<K.locationSize;G++)m(K.location+G,Y.meshPerAttribute);I.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let G=0;G<K.locationSize;G++)v(K.location+G);r.bindBuffer(r.ARRAY_BUFFER,R);for(let G=0;G<K.locationSize;G++)g(K.location+G,fe/K.locationSize,H,X,B*Z,(O+fe/K.locationSize*G)*Z,D)}else{if(z.isInstancedBufferAttribute){for(let Y=0;Y<K.locationSize;Y++)m(K.location+Y,z.meshPerAttribute);I.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=z.meshPerAttribute*z.count)}else for(let Y=0;Y<K.locationSize;Y++)v(K.location+Y);r.bindBuffer(r.ARRAY_BUFFER,R);for(let Y=0;Y<K.locationSize;Y++)g(K.location+Y,fe/K.locationSize,H,X,fe*Z,fe/K.locationSize*Y*Z,D)}}else if(te!==void 0){let X=te[q];if(X!==void 0)switch(X.length){case 2:r.vertexAttrib2fv(K.location,X);break;case 3:r.vertexAttrib3fv(K.location,X);break;case 4:r.vertexAttrib4fv(K.location,X);break;default:r.vertexAttrib1fv(K.location,X)}}}}x()}(T,E,w,N),b!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(b).buffer))},reset:y,resetDefaultState:_,dispose:function(){y();for(let T in o){let E=o[T];for(let w in E){let N=E[w];for(let b in N)d(N[b].object),delete N[b];delete E[w]}delete o[T]}},releaseStatesOfGeometry:function(T){if(o[T.id]===void 0)return;let E=o[T.id];for(let w in E){let N=E[w];for(let b in N)d(N[b].object),delete N[b];delete E[w]}delete o[T.id]},releaseStatesOfProgram:function(T){for(let E in o){let w=o[E];if(w[T.id]===void 0)continue;let N=w[T.id];for(let b in N)d(N[b].object),delete N[b];delete w[T.id]}},initAttributes:f,enableAttribute:v,disableUnusedAttributes:x}}function Rm(r,e,t,n){let i=n.isWebGL2,s;this.setMode=function(a){s=a},this.render=function(a,o){r.drawArrays(s,a,o),t.update(o,s,1)},this.renderInstances=function(a,o,l){if(l===0)return;let c,h;if(i)c=r,h="drawArraysInstanced";else if(c=e.get("ANGLE_instanced_arrays"),h="drawArraysInstancedANGLE",c===null)return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");c[h](s,a,o,l),t.update(o,s,l)},this.renderMultiDraw=function(a,o,l){if(l===0)return;let c=e.get("WEBGL_multi_draw");if(c===null)for(let h=0;h<l;h++)this.render(a[h],o[h]);else{c.multiDrawArraysWEBGL(s,a,0,o,0,l);let h=0;for(let u=0;u<l;u++)h+=o[u];t.update(h,s,1)}}}function Cm(r,e,t){let n;function i(_){if(_==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let s=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",o=i(a);o!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",o,"instead."),a=o);let l=s||e.has("WEBGL_draw_buffers"),c=t.logarithmicDepthBuffer===!0,h=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),u=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=r.getParameter(r.MAX_TEXTURE_SIZE),p=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),f=r.getParameter(r.MAX_VERTEX_ATTRIBS),v=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),m=r.getParameter(r.MAX_VARYING_VECTORS),x=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),g=u>0,y=s||e.has("OES_texture_float");return{isWebGL2:s,drawBuffers:l,getMaxAnisotropy:function(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let _=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n},getMaxPrecision:i,precision:a,logarithmicDepthBuffer:c,maxTextures:h,maxVertexTextures:u,maxTextureSize:d,maxCubemapSize:p,maxAttributes:f,maxVertexUniforms:v,maxVaryings:m,maxFragmentUniforms:x,vertexTextures:g,floatFragmentTextures:y,floatVertexTextures:g&&y,maxSamples:s?r.getParameter(r.MAX_SAMPLES):0}}function Pm(r){let e=this,t=null,n=0,i=!1,s=!1,a=new hi,o=new Ye,l={value:null,needsUpdate:!1};function c(h,u,d,p){let f=h!==null?h.length:0,v=null;if(f!==0){if(v=l.value,p!==!0||v===null){let m=d+4*f,x=u.matrixWorldInverse;o.getNormalMatrix(x),(v===null||v.length<m)&&(v=new Float32Array(m));for(let g=0,y=d;g!==f;++g,y+=4)a.copy(h[g]).applyMatrix4(x,o),a.normal.toArray(v,y),v[y+3]=a.constant}l.value=v,l.needsUpdate=!0}return e.numPlanes=f,e.numIntersection=0,v}this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){let d=h.length!==0||u||n!==0||i;return i=u,n=h.length,d},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,u){t=c(h,u,0)},this.setState=function(h,u,d){let p=h.clippingPlanes,f=h.clipIntersection,v=h.clipShadows,m=r.get(h);if(!i||p===null||p.length===0||s&&!v)s?c(null):function(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}();else{let x=s?0:n,g=4*x,y=m.clippingState||null;l.value=y,y=c(p,u,g,d);for(let _=0;_!==g;++_)y[_]=t[_];m.clippingState=y,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=x}}}function Lm(r){let e=new WeakMap;function t(i,s){return s===Wc?i.mapping=xs:s===jc&&(i.mapping=_s),i}function n(i){let s=i.target;s.removeEventListener("dispose",n);let a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(i){if(i&&i.isTexture){let s=i.mapping;if(s===Wc||s===jc){if(e.has(i))return t(e.get(i).texture,i.mapping);{let a=i.image;if(a&&a.height>0){let o=new Qc(a.height/2);return o.fromEquirectangularTexture(r,i),e.set(i,o),i.addEventListener("dispose",n),t(o.texture,i.mapping)}return null}}}return i},dispose:function(){e=new WeakMap}}}var Fi=class extends ba{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Hd=[.125,.215,.35,.446,.526,.582],aa=20,Tc=new Fi,zd=new ve,wc=null,Ac=0,Rc=0,mr=(1+Math.sqrt(5))/2,as=1/mr,Gd=[new M(1,1,1),new M(-1,1,1),new M(1,1,-1),new M(-1,1,-1),new M(0,mr,as),new M(0,mr,-as),new M(as,0,mr),new M(-as,0,mr),new M(mr,as,0),new M(-mr,as,0)],Rs=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){wc=this._renderer.getRenderTarget(),Ac=this._renderer.getActiveCubeFace(),Rc=this._renderer.getActiveMipmapLevel(),this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(wc,Ac,Rc),e.scissorTest=!1,Eo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===xs||e.mapping===_s?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),wc=this._renderer.getRenderTarget(),Ac=this._renderer.getActiveCubeFace(),Rc=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:un,minFilter:un,generateMipmaps:!1,type:Gn,format:Hn,colorSpace:Wt,depthBuffer:!1},i=Vd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vd(e,t,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=function(a){let o=[],l=[],c=[],h=a,u=a-4+1+Hd.length;for(let d=0;d<u;d++){let p=Math.pow(2,h);l.push(p);let f=1/p;d>a-4?f=Hd[d-a+4-1]:d===0&&(f=0),c.push(f);let v=1/(p-2),m=-v,x=1+v,g=[m,m,x,m,x,x,m,m,x,x,m,x],y=6,_=6,T=3,E=2,w=1,N=new Float32Array(T*_*y),b=new Float32Array(E*_*y),L=new Float32Array(w*_*y);for(let P=0;P<y;P++){let k=P%3*2/3-1,U=P>2?0:-1,$=[k,U,0,k+2/3,U,0,k+2/3,U+1,0,k,U,0,k+2/3,U+1,0,k,U+1,0];N.set($,T*_*P),b.set(g,E*_*P);let he=[P,P,P,P,P,P];L.set(he,w*_*P)}let I=new at;I.setAttribute("position",new Mt(N,T)),I.setAttribute("uv",new Mt(b,E)),I.setAttribute("faceIndex",new Mt(L,w)),o.push(I),h>4&&h--}return{lodPlanes:o,sizeLods:l,sigmas:c}}(s)),this._blurMaterial=function(a,o,l){let c=new Float32Array(aa),h=new M(0,1,0);return new Ot({name:"SphericalGaussianBlur",defines:{n:aa,CUBEUV_TEXEL_WIDTH:1/o,CUBEUV_TEXEL_HEIGHT:1/l,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:c},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:h}},vertexShader:Zh(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}(s,e,t)}return i}_compileMaterial(e){let t=new _e(this._lodPlanes[0],e);this._renderer.compile(t,Tc)}_sceneToCubeUV(e,t,n,i){let s=new It(90,1,t,n),a=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],l=this._renderer,c=l.autoClear,h=l.toneMapping;l.getClearColor(zd),l.toneMapping=Bi,l.autoClear=!1;let u=new ht({name:"PMREM.Background",side:Kt,depthWrite:!1,depthTest:!1}),d=new _e(new se,u),p=!1,f=e.background;f?f.isColor&&(u.color.copy(f),e.background=null,p=!0):(u.color.copy(zd),p=!0);for(let v=0;v<6;v++){let m=v%3;m===0?(s.up.set(0,a[v],0),s.lookAt(o[v],0,0)):m===1?(s.up.set(0,0,a[v]),s.lookAt(0,o[v],0)):(s.up.set(0,a[v],0),s.lookAt(0,0,o[v]));let x=this._cubeSize;Eo(i,m*x,v>2?x:0,x,x),l.setRenderTarget(i),p&&l.render(d,s),l.render(e,s)}d.geometry.dispose(),d.material.dispose(),l.toneMapping=h,l.autoClear=c,e.background=f}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===xs||e.mapping===_s;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=jd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wd());let s=i?this._cubemapMaterial:this._equirectMaterial,a=new _e(this._lodPlanes[0],s);s.uniforms.envMap.value=e;let o=this._cubeSize;Eo(t,0,0,3*o,2*o),n.setRenderTarget(t),n.render(a,Tc)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){let s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=Gd[(i-1)%Gd.length];this._blur(e,i-1,i,s,a)}t.autoClear=n}_blur(e,t,n,i,s){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=new _e(this._lodPlanes[i],c),u=c.uniforms,d=this._sizeLods[n]-1,p=isFinite(s)?Math.PI/(2*d):2*Math.PI/39,f=s/p,v=isFinite(s)?1+Math.floor(3*f):aa;v>aa&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${v} samples when the maximum is set to 20`);let m=[],x=0;for(let _=0;_<aa;++_){let T=_/f,E=Math.exp(-T*T/2);m.push(E),_===0?x+=E:_<v&&(x+=2*E)}for(let _=0;_<m.length;_++)m[_]=m[_]/x;u.envMap.value=e.texture,u.samples.value=v,u.weights.value=m,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:g}=this;u.dTheta.value=p,u.mipInt.value=g-n;let y=this._sizeLods[i];Eo(t,3*y*(i>g-4?i-g+4:0),4*(this._cubeSize-y),3*y,2*y),l.setRenderTarget(t),l.render(h,Tc)}};function Vd(r,e,t){let n=new an(r,e,t);return n.texture.mapping=vl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Eo(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function Wd(){return new Ot({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zh(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function jd(){return new Ot({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Zh(){return`

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
	`}function Im(r){let e=new WeakMap,t=null;function n(i){let s=i.target;s.removeEventListener("dispose",n);let a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(i){if(i&&i.isTexture){let s=i.mapping,a=s===Wc||s===jc,o=s===xs||s===_s;if(a||o){if(i.isRenderTargetTexture&&i.needsPMREMUpdate===!0){i.needsPMREMUpdate=!1;let l=e.get(i);return t===null&&(t=new Rs(r)),l=a?t.fromEquirectangular(i,l):t.fromCubemap(i,l),e.set(i,l),l.texture}if(e.has(i))return e.get(i).texture;{let l=i.image;if(a&&l&&l.height>0||o&&l&&function(c){let h=0,u=6;for(let d=0;d<u;d++)c[d]!==void 0&&h++;return h===u}(l)){t===null&&(t=new Rs(r));let c=a?t.fromEquirectangular(i):t.fromCubemap(i);return e.set(i,c),i.addEventListener("dispose",n),c.texture}return null}}}return i},dispose:function(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}}}function Dm(r){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Nm(r,e,t,n){let i={},s=new WeakMap;function a(l){let c=l.target;c.index!==null&&e.remove(c.index);for(let u in c.attributes)e.remove(c.attributes[u]);for(let u in c.morphAttributes){let d=c.morphAttributes[u];for(let p=0,f=d.length;p<f;p++)e.remove(d[p])}c.removeEventListener("dispose",a),delete i[c.id];let h=s.get(c);h&&(e.remove(h),s.delete(c)),n.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,t.memory.geometries--}function o(l){let c=[],h=l.index,u=l.attributes.position,d=0;if(h!==null){let v=h.array;d=h.version;for(let m=0,x=v.length;m<x;m+=3){let g=v[m+0],y=v[m+1],_=v[m+2];c.push(g,y,y,_,_,g)}}else{if(u===void 0)return;{let v=u.array;d=u.version;for(let m=0,x=v.length/3-1;m<x;m+=3){let g=m+0,y=m+1,_=m+2;c.push(g,y,y,_,_,g)}}}let p=new(Kp(c)?Ko:Zo)(c,1);p.version=d;let f=s.get(l);f&&e.remove(f),s.set(l,p)}return{get:function(l,c){return i[c.id]===!0||(c.addEventListener("dispose",a),i[c.id]=!0,t.memory.geometries++),c},update:function(l){let c=l.attributes;for(let u in c)e.update(c[u],r.ARRAY_BUFFER);let h=l.morphAttributes;for(let u in h){let d=h[u];for(let p=0,f=d.length;p<f;p++)e.update(d[p],r.ARRAY_BUFFER)}},getWireframeAttribute:function(l){let c=s.get(l);if(c){let h=l.index;h!==null&&c.version<h.version&&o(l)}else o(l);return s.get(l)}}}function Um(r,e,t,n){let i=n.isWebGL2,s,a,o;this.setMode=function(l){s=l},this.setIndex=function(l){a=l.type,o=l.bytesPerElement},this.render=function(l,c){r.drawElements(s,c,a,l*o),t.update(c,s,1)},this.renderInstances=function(l,c,h){if(h===0)return;let u,d;if(i)u=r,d="drawElementsInstanced";else if(u=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",u===null)return void console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");u[d](s,c,a,l*o,h),t.update(c,s,h)},this.renderMultiDraw=function(l,c,h){if(h===0)return;let u=e.get("WEBGL_multi_draw");if(u===null)for(let d=0;d<h;d++)this.render(l[d]/o,c[d]);else{u.multiDrawElementsWEBGL(s,c,0,a,l,0,h);let d=0;for(let p=0;p<h;p++)d+=c[p];t.update(d,s,1)}}}function Om(r){let e={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:e,programs:null,autoReset:!0,reset:function(){e.calls=0,e.triangles=0,e.points=0,e.lines=0},update:function(t,n,i){switch(e.calls++,n){case r.TRIANGLES:e.triangles+=i*(t/3);break;case r.LINES:e.lines+=i*(t/2);break;case r.LINE_STRIP:e.lines+=i*(t-1);break;case r.LINE_LOOP:e.lines+=i*t;break;case r.POINTS:e.points+=i*t;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",n)}}}}function Bm(r,e){return r[0]-e[0]}function km(r,e){return Math.abs(e[1])-Math.abs(r[1])}function Fm(r,e,t){let n={},i=new Float32Array(8),s=new WeakMap,a=new _t,o=[];for(let l=0;l<8;l++)o[l]=[l,0];return{update:function(l,c,h){let u=l.morphTargetInfluences;if(e.isWebGL2===!0){let d=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,p=d!==void 0?d.length:0,f=s.get(c);if(f===void 0||f.count!==p){let k=function(){I.dispose(),s.delete(c),c.removeEventListener("dispose",k)};f!==void 0&&f.texture.dispose();let x=c.morphAttributes.position!==void 0,g=c.morphAttributes.normal!==void 0,y=c.morphAttributes.color!==void 0,_=c.morphAttributes.position||[],T=c.morphAttributes.normal||[],E=c.morphAttributes.color||[],w=0;x===!0&&(w=1),g===!0&&(w=2),y===!0&&(w=3);let N=c.attributes.position.count*w,b=1;N>e.maxTextureSize&&(b=Math.ceil(N/e.maxTextureSize),N=e.maxTextureSize);let L=new Float32Array(N*b*4*p),I=new Yo(L,N,b,p);I.type=ui,I.needsUpdate=!0;let P=4*w;for(let U=0;U<p;U++){let $=_[U],he=T[U],te=E[U],q=N*b*4*U;for(let K=0;K<$.count;K++){let z=K*P;x===!0&&(a.fromBufferAttribute($,K),L[q+z+0]=a.x,L[q+z+1]=a.y,L[q+z+2]=a.z,L[q+z+3]=0),g===!0&&(a.fromBufferAttribute(he,K),L[q+z+4]=a.x,L[q+z+5]=a.y,L[q+z+6]=a.z,L[q+z+7]=0),y===!0&&(a.fromBufferAttribute(te,K),L[q+z+8]=a.x,L[q+z+9]=a.y,L[q+z+10]=a.z,L[q+z+11]=te.itemSize===4?a.w:1)}}f={count:p,texture:I,size:new re(N,b)},s.set(c,f),c.addEventListener("dispose",k)}let v=0;for(let x=0;x<u.length;x++)v+=u[x];let m=c.morphTargetsRelative?1:1-v;h.getUniforms().setValue(r,"morphTargetBaseInfluence",m),h.getUniforms().setValue(r,"morphTargetInfluences",u),h.getUniforms().setValue(r,"morphTargetsTexture",f.texture,t),h.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}else{let d=u===void 0?0:u.length,p=n[c.id];if(p===void 0||p.length!==d){p=[];for(let g=0;g<d;g++)p[g]=[g,0];n[c.id]=p}for(let g=0;g<d;g++){let y=p[g];y[0]=g,y[1]=u[g]}p.sort(km);for(let g=0;g<8;g++)g<d&&p[g][1]?(o[g][0]=p[g][0],o[g][1]=p[g][1]):(o[g][0]=Number.MAX_SAFE_INTEGER,o[g][1]=0);o.sort(Bm);let f=c.morphAttributes.position,v=c.morphAttributes.normal,m=0;for(let g=0;g<8;g++){let y=o[g],_=y[0],T=y[1];_!==Number.MAX_SAFE_INTEGER&&T?(f&&c.getAttribute("morphTarget"+g)!==f[_]&&c.setAttribute("morphTarget"+g,f[_]),v&&c.getAttribute("morphNormal"+g)!==v[_]&&c.setAttribute("morphNormal"+g,v[_]),i[g]=T,m+=T):(f&&c.hasAttribute("morphTarget"+g)===!0&&c.deleteAttribute("morphTarget"+g),v&&c.hasAttribute("morphNormal"+g)===!0&&c.deleteAttribute("morphNormal"+g),i[g]=0)}let x=c.morphTargetsRelative?1:1-m;h.getUniforms().setValue(r,"morphTargetBaseInfluence",x),h.getUniforms().setValue(r,"morphTargetInfluences",i)}}}}function Hm(r,e,t,n){let i=new WeakMap;function s(a){let o=a.target;o.removeEventListener("dispose",s),t.remove(o.instanceMatrix),o.instanceColor!==null&&t.remove(o.instanceColor)}return{update:function(a){let o=n.render.frame,l=a.geometry,c=e.get(a,l);if(i.get(c)!==o&&(e.update(c),i.set(c,o)),a.isInstancedMesh&&(a.hasEventListener("dispose",s)===!1&&a.addEventListener("dispose",s),i.get(a)!==o&&(t.update(a.instanceMatrix,r.ARRAY_BUFFER),a.instanceColor!==null&&t.update(a.instanceColor,r.ARRAY_BUFFER),i.set(a,o))),a.isSkinnedMesh){let h=a.skeleton;i.get(h)!==o&&(h.update(),i.set(h,o))}return c},dispose:function(){i=new WeakMap}}}var $o=class extends Qt{constructor(e,t,n,i,s,a,o,l,c,h){if((h=h!==void 0?h:xr)!==xr&&h!==Ms)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===xr&&(n=Ni),n===void 0&&h===Ms&&(n=yr),super(null,i,s,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:$t,this.minFilter=l!==void 0?l:$t,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},ef=new Qt,tf=new $o(1,1);tf.compareFunction=515;var nf=new Yo,rf=new Jc,sf=new Jo,Xd=[],qd=[],Yd=new Float32Array(16),Zd=new Float32Array(9),Kd=new Float32Array(4);function ks(r,e,t){let n=r[0];if(n<=0||n>0)return r;let i=e*t,s=Xd[i];if(s===void 0&&(s=new Float32Array(i),Xd[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function jt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Xt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function _l(r,e){let t=qd[e];t===void 0&&(t=new Int32Array(e),qd[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function zm(r,e){let t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Gm(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;r.uniform2fv(this.addr,e),Xt(t,e)}}function Vm(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)t[0]===e.r&&t[1]===e.g&&t[2]===e.b||(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(jt(t,e))return;r.uniform3fv(this.addr,e),Xt(t,e)}}function Wm(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;r.uniform4fv(this.addr,e),Xt(t,e)}}function jm(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(jt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Xt(t,e)}else{if(jt(t,n))return;Kd.set(n),r.uniformMatrix2fv(this.addr,!1,Kd),Xt(t,n)}}function Xm(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(jt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Xt(t,e)}else{if(jt(t,n))return;Zd.set(n),r.uniformMatrix3fv(this.addr,!1,Zd),Xt(t,n)}}function qm(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(jt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Xt(t,e)}else{if(jt(t,n))return;Yd.set(n),r.uniformMatrix4fv(this.addr,!1,Yd),Xt(t,n)}}function Ym(r,e){let t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Zm(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;r.uniform2iv(this.addr,e),Xt(t,e)}}function Km(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;r.uniform3iv(this.addr,e),Xt(t,e)}}function Jm(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;r.uniform4iv(this.addr,e),Xt(t,e)}}function $m(r,e){let t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Qm(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;r.uniform2uiv(this.addr,e),Xt(t,e)}}function eg(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;r.uniform3uiv(this.addr,e),Xt(t,e)}}function tg(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;r.uniform4uiv(this.addr,e),Xt(t,e)}}function ng(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s=this.type===r.SAMPLER_2D_SHADOW?tf:ef;t.setTexture2D(e||s,i)}function ig(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||rf,i)}function rg(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||sf,i)}function sg(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||nf,i)}function ag(r,e){r.uniform1fv(this.addr,e)}function og(r,e){let t=ks(e,this.size,2);r.uniform2fv(this.addr,t)}function lg(r,e){let t=ks(e,this.size,3);r.uniform3fv(this.addr,t)}function cg(r,e){let t=ks(e,this.size,4);r.uniform4fv(this.addr,t)}function hg(r,e){let t=ks(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function ug(r,e){let t=ks(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function dg(r,e){let t=ks(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function pg(r,e){r.uniform1iv(this.addr,e)}function fg(r,e){r.uniform2iv(this.addr,e)}function mg(r,e){r.uniform3iv(this.addr,e)}function gg(r,e){r.uniform4iv(this.addr,e)}function vg(r,e){r.uniform1uiv(this.addr,e)}function yg(r,e){r.uniform2uiv(this.addr,e)}function xg(r,e){r.uniform3uiv(this.addr,e)}function _g(r,e){r.uniform4uiv(this.addr,e)}function Mg(r,e,t){let n=this.cache,i=e.length,s=_l(t,i);jt(n,s)||(r.uniform1iv(this.addr,s),Xt(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||ef,s[a])}function bg(r,e,t){let n=this.cache,i=e.length,s=_l(t,i);jt(n,s)||(r.uniform1iv(this.addr,s),Xt(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||rf,s[a])}function Eg(r,e,t){let n=this.cache,i=e.length,s=_l(t,i);jt(n,s)||(r.uniform1iv(this.addr,s),Xt(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||sf,s[a])}function Sg(r,e,t){let n=this.cache,i=e.length,s=_l(t,i);jt(n,s)||(r.uniform1iv(this.addr,s),Xt(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||nf,s[a])}var eh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=function(i){switch(i){case 5126:return zm;case 35664:return Gm;case 35665:return Vm;case 35666:return Wm;case 35674:return jm;case 35675:return Xm;case 35676:return qm;case 5124:case 35670:return Ym;case 35667:case 35671:return Zm;case 35668:case 35672:return Km;case 35669:case 35673:return Jm;case 5125:return $m;case 36294:return Qm;case 36295:return eg;case 36296:return tg;case 35678:case 36198:case 36298:case 36306:case 35682:return ng;case 35679:case 36299:case 36307:return ig;case 35680:case 36300:case 36308:case 36293:return rg;case 36289:case 36303:case 36311:case 36292:return sg}}(t.type)}},th=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=function(i){switch(i){case 5126:return ag;case 35664:return og;case 35665:return lg;case 35666:return cg;case 35674:return hg;case 35675:return ug;case 35676:return dg;case 5124:case 35670:return pg;case 35667:case 35671:return fg;case 35668:case 35672:return mg;case 35669:case 35673:return gg;case 5125:return vg;case 36294:return yg;case 36295:return xg;case 36296:return _g;case 35678:case 36198:case 36298:case 36306:case 35682:return Mg;case 35679:case 36299:case 36307:return bg;case 35680:case 36300:case 36308:case 36293:return Eg;case 36289:case 36303:case 36311:case 36292:return Sg}}(t.type)}},nh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let s=0,a=i.length;s!==a;++s){let o=i[s];o.setValue(e,t[o.id],n)}}},Cc=/(\w+)(\])?(\[|\.)?/g;function Jd(r,e){r.seq.push(e),r.map[e.id]=e}function Tg(r,e,t){let n=r.name,i=n.length;for(Cc.lastIndex=0;;){let s=Cc.exec(n),a=Cc.lastIndex,o=s[1],l=s[2]==="]",c=s[3];if(l&&(o|=0),c===void 0||c==="["&&a+2===i){Jd(t,c===void 0?new eh(o,r,e):new th(o,r,e));break}{let h=t.map[o];h===void 0&&(h=new nh(o),Jd(t,h)),t=h}}}var ys=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let s=e.getActiveUniform(t,i);Tg(s,e.getUniformLocation(t,s.name),this)}}setValue(e,t,n,i){let s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){let o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,s=e.length;i!==s;++i){let a=e[i];a.id in t&&n.push(a)}return n}};function $d(r,e,t){let n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}var wg=37297,Ag=0;function Qd(r,e,t){let n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";let s=/ERROR: 0:(\d+)/.exec(i);if(s){let a=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+function(o,l){let c=o.split(`
`),h=[],u=Math.max(l-6,0),d=Math.min(l+6,c.length);for(let p=u;p<d;p++){let f=p+1;h.push(`${f===l?">":" "} ${f}: ${c[p]}`)}return h.join(`
`)}(r.getShaderSource(e),a)}return i}function Rg(r,e){let t=function(n){let i=st.getPrimaries(st.workingColorSpace),s=st.getPrimaries(n),a;switch(i===s?a="":i===Vo&&s===Go?a="LinearDisplayP3ToLinearSRGB":i===Go&&s===Vo&&(a="LinearSRGBToLinearDisplayP3"),n){case Wt:case xl:return[a,"LinearTransferOETF"];case ct:case Yh:return[a,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[a,"LinearTransferOETF"]}}(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Cg(r,e){let t;switch(e){case Gh:t="Linear";break;case Vh:t="Reinhard";break;case Wh:t="OptimizedCineon";break;case Na:t="ACESFilmic";break;case jh:t="AgX";break;case rm:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function os(r){return r!==""}function ep(r,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function tp(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Pg=/^[ \t]*#include +<([\w\d./]+)>/gm;function ih(r){return r.replace(Pg,Ig)}var Lg=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Ig(r,e){let t=Ge[e];if(t===void 0){let n=Lg.get(e);if(n===void 0)throw new Error("Can not resolve #include <"+e+">");t=Ge[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n)}return ih(t)}var Dg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function np(r){return r.replace(Dg,Ng)}function Ng(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function ip(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Ug(r,e,t,n){let i=r.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,l=function(P){let k="SHADOWMAP_TYPE_BASIC";return P.shadowMapType===Op?k="SHADOWMAP_TYPE_PCF":P.shadowMapType===zh?k="SHADOWMAP_TYPE_PCF_SOFT":P.shadowMapType===ci&&(k="SHADOWMAP_TYPE_VSM"),k}(t),c=function(P){let k="ENVMAP_TYPE_CUBE";if(P.envMap)switch(P.envMapMode){case xs:case _s:k="ENVMAP_TYPE_CUBE";break;case vl:k="ENVMAP_TYPE_CUBE_UV"}return k}(t),h=function(P){let k="ENVMAP_MODE_REFLECTION";return P.envMap&&P.envMapMode===_s&&(k="ENVMAP_MODE_REFRACTION"),k}(t),u=function(P){let k="ENVMAP_BLENDING_NONE";if(P.envMap)switch(P.combine){case kp:k="ENVMAP_BLENDING_MULTIPLY";break;case nm:k="ENVMAP_BLENDING_MIX";break;case im:k="ENVMAP_BLENDING_ADD"}return k}(t),d=function(P){let k=P.envMapCubeUVHeight;if(k===null)return null;let U=Math.log2(k)-2,$=1/k;return{texelWidth:1/(3*Math.max(Math.pow(2,U),112)),texelHeight:$,maxMip:U}}(t),p=t.isWebGL2?"":function(P){return[P.extensionDerivatives||P.envMapCubeUVHeight||P.bumpMap||P.normalMapTangentSpace||P.clearcoatNormalMap||P.flatShading||P.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(P.extensionFragDepth||P.logarithmicDepthBuffer)&&P.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",P.extensionDrawBuffers&&P.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(P.extensionShaderTextureLOD||P.envMap||P.transmission)&&P.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(os).join(`
`)}(t),f=function(P){return[P.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(os).join(`
`)}(t),v=function(P){let k=[];for(let U in P){let $=P[U];$!==!1&&k.push("#define "+U+" "+$)}return k.join(`
`)}(s),m=i.createProgram(),x,g,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(os).join(`
`),x.length>0&&(x+=`
`),g=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(os).join(`
`),g.length>0&&(g+=`
`)):(x=[ip(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(os).join(`
`),g=[p,ip(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Bi?"#define TONE_MAPPING":"",t.toneMapping!==Bi?Ge.tonemapping_pars_fragment:"",t.toneMapping!==Bi?Cg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,Rg("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(os).join(`
`)),a=ih(a),a=ep(a,t),a=tp(a,t),o=ih(o),o=ep(o,t),o=tp(o,t),a=np(a),o=np(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,x=[f,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,g=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===bd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===bd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let _=y+x+a,T=y+g+o,E=$d(i,i.VERTEX_SHADER,_),w=$d(i,i.FRAGMENT_SHADER,T);function N(P){if(r.debug.checkShaderErrors){let k=i.getProgramInfoLog(m).trim(),U=i.getShaderInfoLog(E).trim(),$=i.getShaderInfoLog(w).trim(),he=!0,te=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(he=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,m,E,w);else{let q=Qd(i,E,"vertex"),K=Qd(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Program Info Log: `+k+`
`+q+`
`+K)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):U!==""&&$!==""||(te=!1);te&&(P.diagnostics={runnable:he,programLog:k,vertexShader:{log:U,prefix:x},fragmentShader:{log:$,prefix:g}})}i.deleteShader(E),i.deleteShader(w),b=new ys(i,m),L=function(k,U){let $={},he=k.getProgramParameter(U,k.ACTIVE_ATTRIBUTES);for(let te=0;te<he;te++){let q=k.getActiveAttrib(U,te),K=q.name,z=1;q.type===k.FLOAT_MAT2&&(z=2),q.type===k.FLOAT_MAT3&&(z=3),q.type===k.FLOAT_MAT4&&(z=4),$[K]={type:q.type,location:k.getAttribLocation(U,K),locationSize:z}}return $}(i,m)}let b,L;i.attachShader(m,E),i.attachShader(m,w),t.index0AttributeName!==void 0?i.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m),this.getUniforms=function(){return b===void 0&&N(this),b},this.getAttributes=function(){return L===void 0&&N(this),L};let I=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=i.getProgramParameter(m,wg)),I},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Ag++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=E,this.fragmentShader=w,this}var Og=0,rh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new sh(e),t.set(e,n)),n}},sh=class{constructor(e){this.id=Og++,this.code=e,this.usedTimes=0}};function Bg(r,e,t,n,i,s,a){let o=new Ma,l=new rh,c=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,d=i.vertexTextures,p=i.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(m){return m===0?"uv":`uv${m}`}return{getParameters:function(m,x,g,y,_){let T=y.fog,E=_.geometry,w=m.isMeshStandardMaterial?y.environment:null,N=(m.isMeshStandardMaterial?t:e).get(m.envMap||w),b=N&&N.mapping===vl?N.image.height:null,L=f[m.type];m.precision!==null&&(p=i.getMaxPrecision(m.precision),p!==m.precision&&console.warn("THREE.WebGLProgram.getParameters:",m.precision,"not supported, using",p,"instead."));let I=E.morphAttributes.position||E.morphAttributes.normal||E.morphAttributes.color,P=I!==void 0?I.length:0,k,U,$,he,te=0;if(E.morphAttributes.position!==void 0&&(te=1),E.morphAttributes.normal!==void 0&&(te=2),E.morphAttributes.color!==void 0&&(te=3),L){let ot=qn[L];k=ot.vertexShader,U=ot.fragmentShader}else k=m.vertexShader,U=m.fragmentShader,l.update(m),$=l.getVertexShaderID(m),he=l.getFragmentShaderID(m);let q=r.getRenderTarget(),K=_.isInstancedMesh===!0,z=_.isBatchedMesh===!0,X=!!m.map,fe=!!m.matcap,A=!!N,R=!!m.aoMap,H=!!m.lightMap,Z=!!m.bumpMap,D=!!m.normalMap,Y=!!m.displacementMap,B=!!m.emissiveMap,O=!!m.metalnessMap,G=!!m.roughnessMap,ne=m.anisotropy>0,ee=m.clearcoat>0,S=m.iridescence>0,ae=m.sheen>0,V=m.transmission>0,W=ne&&!!m.anisotropyMap,oe=ee&&!!m.clearcoatMap,ge=ee&&!!m.clearcoatNormalMap,xe=ee&&!!m.clearcoatRoughnessMap,Me=S&&!!m.iridescenceMap,Ie=S&&!!m.iridescenceThicknessMap,be=ae&&!!m.sheenColorMap,we=ae&&!!m.sheenRoughnessMap,Fe=!!m.specularMap,Nt=!!m.specularColorMap,Re=!!m.specularIntensityMap,Qe=V&&!!m.transmissionMap,Ae=V&&!!m.thicknessMap,jn=!!m.gradientMap,Ln=!!m.alphaMap,Q=m.alphaTest>0,ue=!!m.alphaHash,me=!!m.extensions,We=!!E.attributes.uv1,F=!!E.attributes.uv2,Te=!!E.attributes.uv3,St=Bi;return m.toneMapped&&(q!==null&&q.isXRRenderTarget!==!0||(St=r.toneMapping)),{isWebGL2:h,shaderID:L,shaderType:m.type,shaderName:m.name,vertexShader:k,fragmentShader:U,defines:m.defines,customVertexShaderID:$,customFragmentShaderID:he,isRawShaderMaterial:m.isRawShaderMaterial===!0,glslVersion:m.glslVersion,precision:p,batching:z,instancing:K,instancingColor:K&&_.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:q===null?r.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:Wt,map:X,matcap:fe,envMap:A,envMapMode:A&&N.mapping,envMapCubeUVHeight:b,aoMap:R,lightMap:H,bumpMap:Z,normalMap:D,displacementMap:d&&Y,emissiveMap:B,normalMapObjectSpace:D&&m.normalMapType===1,normalMapTangentSpace:D&&m.normalMapType===0,metalnessMap:O,roughnessMap:G,anisotropy:ne,anisotropyMap:W,clearcoat:ee,clearcoatMap:oe,clearcoatNormalMap:ge,clearcoatRoughnessMap:xe,iridescence:S,iridescenceMap:Me,iridescenceThicknessMap:Ie,sheen:ae,sheenColorMap:be,sheenRoughnessMap:we,specularMap:Fe,specularColorMap:Nt,specularIntensityMap:Re,transmission:V,transmissionMap:Qe,thicknessMap:Ae,gradientMap:jn,opaque:m.transparent===!1&&m.blending===1,alphaMap:Ln,alphaTest:Q,alphaHash:ue,combine:m.combine,mapUv:X&&v(m.map.channel),aoMapUv:R&&v(m.aoMap.channel),lightMapUv:H&&v(m.lightMap.channel),bumpMapUv:Z&&v(m.bumpMap.channel),normalMapUv:D&&v(m.normalMap.channel),displacementMapUv:Y&&v(m.displacementMap.channel),emissiveMapUv:B&&v(m.emissiveMap.channel),metalnessMapUv:O&&v(m.metalnessMap.channel),roughnessMapUv:G&&v(m.roughnessMap.channel),anisotropyMapUv:W&&v(m.anisotropyMap.channel),clearcoatMapUv:oe&&v(m.clearcoatMap.channel),clearcoatNormalMapUv:ge&&v(m.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&v(m.clearcoatRoughnessMap.channel),iridescenceMapUv:Me&&v(m.iridescenceMap.channel),iridescenceThicknessMapUv:Ie&&v(m.iridescenceThicknessMap.channel),sheenColorMapUv:be&&v(m.sheenColorMap.channel),sheenRoughnessMapUv:we&&v(m.sheenRoughnessMap.channel),specularMapUv:Fe&&v(m.specularMap.channel),specularColorMapUv:Nt&&v(m.specularColorMap.channel),specularIntensityMapUv:Re&&v(m.specularIntensityMap.channel),transmissionMapUv:Qe&&v(m.transmissionMap.channel),thicknessMapUv:Ae&&v(m.thicknessMap.channel),alphaMapUv:Ln&&v(m.alphaMap.channel),vertexTangents:!!E.attributes.tangent&&(D||ne),vertexColors:m.vertexColors,vertexAlphas:m.vertexColors===!0&&!!E.attributes.color&&E.attributes.color.itemSize===4,vertexUv1s:We,vertexUv2s:F,vertexUv3s:Te,pointsUvs:_.isPoints===!0&&!!E.attributes.uv&&(X||Ln),fog:!!T,useFog:m.fog===!0,fogExp2:T&&T.isFogExp2,flatShading:m.flatShading===!0,sizeAttenuation:m.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:_.isSkinnedMesh===!0,morphTargets:E.morphAttributes.position!==void 0,morphNormals:E.morphAttributes.normal!==void 0,morphColors:E.morphAttributes.color!==void 0,morphTargetsCount:P,morphTextureStride:te,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:m.dithering,shadowMapEnabled:r.shadowMap.enabled&&g.length>0,shadowMapType:r.shadowMap.type,toneMapping:St,useLegacyLights:r._useLegacyLights,decodeVideoTexture:X&&m.map.isVideoTexture===!0&&st.getTransfer(m.map.colorSpace)===xt,premultipliedAlpha:m.premultipliedAlpha,doubleSided:m.side===2,flipSided:m.side===Kt,useDepthPacking:m.depthPacking>=0,depthPacking:m.depthPacking||0,index0AttributeName:m.index0AttributeName,extensionDerivatives:me&&m.extensions.derivatives===!0,extensionFragDepth:me&&m.extensions.fragDepth===!0,extensionDrawBuffers:me&&m.extensions.drawBuffers===!0,extensionShaderTextureLOD:me&&m.extensions.shaderTextureLOD===!0,extensionClipCullDistance:me&&m.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:m.customProgramCacheKey()}},getProgramCacheKey:function(m){let x=[];if(m.shaderID?x.push(m.shaderID):(x.push(m.customVertexShaderID),x.push(m.customFragmentShaderID)),m.defines!==void 0)for(let g in m.defines)x.push(g),x.push(m.defines[g]);return m.isRawShaderMaterial===!1&&(function(g,y){g.push(y.precision),g.push(y.outputColorSpace),g.push(y.envMapMode),g.push(y.envMapCubeUVHeight),g.push(y.mapUv),g.push(y.alphaMapUv),g.push(y.lightMapUv),g.push(y.aoMapUv),g.push(y.bumpMapUv),g.push(y.normalMapUv),g.push(y.displacementMapUv),g.push(y.emissiveMapUv),g.push(y.metalnessMapUv),g.push(y.roughnessMapUv),g.push(y.anisotropyMapUv),g.push(y.clearcoatMapUv),g.push(y.clearcoatNormalMapUv),g.push(y.clearcoatRoughnessMapUv),g.push(y.iridescenceMapUv),g.push(y.iridescenceThicknessMapUv),g.push(y.sheenColorMapUv),g.push(y.sheenRoughnessMapUv),g.push(y.specularMapUv),g.push(y.specularColorMapUv),g.push(y.specularIntensityMapUv),g.push(y.transmissionMapUv),g.push(y.thicknessMapUv),g.push(y.combine),g.push(y.fogExp2),g.push(y.sizeAttenuation),g.push(y.morphTargetsCount),g.push(y.morphAttributeCount),g.push(y.numDirLights),g.push(y.numPointLights),g.push(y.numSpotLights),g.push(y.numSpotLightMaps),g.push(y.numHemiLights),g.push(y.numRectAreaLights),g.push(y.numDirLightShadows),g.push(y.numPointLightShadows),g.push(y.numSpotLightShadows),g.push(y.numSpotLightShadowsWithMaps),g.push(y.numLightProbes),g.push(y.shadowMapType),g.push(y.toneMapping),g.push(y.numClippingPlanes),g.push(y.numClipIntersection),g.push(y.depthPacking)}(x,m),function(g,y){o.disableAll(),y.isWebGL2&&o.enable(0),y.supportsVertexTextures&&o.enable(1),y.instancing&&o.enable(2),y.instancingColor&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),g.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.skinning&&o.enable(4),y.morphTargets&&o.enable(5),y.morphNormals&&o.enable(6),y.morphColors&&o.enable(7),y.premultipliedAlpha&&o.enable(8),y.shadowMapEnabled&&o.enable(9),y.useLegacyLights&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),g.push(o.mask)}(x,m),x.push(r.outputColorSpace)),x.push(m.customProgramCacheKey),x.join()},getUniforms:function(m){let x=f[m.type],g;if(x){let y=qn[x];g=qi.clone(y.uniforms)}else g=m.uniforms;return g},acquireProgram:function(m,x){let g;for(let y=0,_=c.length;y<_;y++){let T=c[y];if(T.cacheKey===x){g=T,++g.usedTimes;break}}return g===void 0&&(g=new Ug(r,x,m,s),c.push(g)),g},releaseProgram:function(m){if(--m.usedTimes==0){let x=c.indexOf(m);c[x]=c[c.length-1],c.pop(),m.destroy()}},releaseShaderCache:function(m){l.remove(m)},programs:c,dispose:function(){l.dispose()}}}function kg(){let r=new WeakMap;return{get:function(e){let t=r.get(e);return t===void 0&&(t={},r.set(e,t)),t},remove:function(e){r.delete(e)},update:function(e,t,n){r.get(e)[t]=n},dispose:function(){r=new WeakMap}}}function Fg(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function rp(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function sp(){let r=[],e=0,t=[],n=[],i=[];function s(a,o,l,c,h,u){let d=r[e];return d===void 0?(d={id:a.id,object:a,geometry:o,material:l,groupOrder:c,renderOrder:a.renderOrder,z:h,group:u},r[e]=d):(d.id=a.id,d.object=a,d.geometry=o,d.material=l,d.groupOrder=c,d.renderOrder=a.renderOrder,d.z=h,d.group=u),e++,d}return{opaque:t,transmissive:n,transparent:i,init:function(){e=0,t.length=0,n.length=0,i.length=0},push:function(a,o,l,c,h,u){let d=s(a,o,l,c,h,u);l.transmission>0?n.push(d):l.transparent===!0?i.push(d):t.push(d)},unshift:function(a,o,l,c,h,u){let d=s(a,o,l,c,h,u);l.transmission>0?n.unshift(d):l.transparent===!0?i.unshift(d):t.unshift(d)},finish:function(){for(let a=e,o=r.length;a<o;a++){let l=r[a];if(l.id===null)break;l.id=null,l.object=null,l.geometry=null,l.material=null,l.group=null}},sort:function(a,o){t.length>1&&t.sort(a||Fg),n.length>1&&n.sort(o||rp),i.length>1&&i.sort(o||rp)}}}function Hg(){let r=new WeakMap;return{get:function(e,t){let n=r.get(e),i;return n===void 0?(i=new sp,r.set(e,[i])):t>=n.length?(i=new sp,n.push(i)):i=n[t],i},dispose:function(){r=new WeakMap}}}function zg(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new M,color:new ve};break;case"SpotLight":t={position:new M,direction:new M,color:new ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new M,color:new ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new M,skyColor:new ve,groundColor:new ve};break;case"RectAreaLight":t={color:new ve,position:new M,halfWidth:new M,halfHeight:new M}}return r[e.id]=t,t}}}var Gg=0;function Vg(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Wg(r,e){let t=new zg,n=function(){let l={};return{get:function(c){if(l[c.id]!==void 0)return l[c.id];let h;switch(c.type){case"DirectionalLight":case"SpotLight":h={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"PointLight":h={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re,shadowCameraNear:1,shadowCameraFar:1e3}}return l[c.id]=h,h}}}(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new M);let s=new M,a=new Le,o=new Le;return{setup:function(l,c){let h=0,u=0,d=0;for(let L=0;L<9;L++)i.probe[L].set(0,0,0);let p=0,f=0,v=0,m=0,x=0,g=0,y=0,_=0,T=0,E=0,w=0;l.sort(Vg);let N=c===!0?Math.PI:1;for(let L=0,I=l.length;L<I;L++){let P=l[L],k=P.color,U=P.intensity,$=P.distance,he=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=k.r*U*N,u+=k.g*U*N,d+=k.b*U*N;else if(P.isLightProbe){for(let te=0;te<9;te++)i.probe[te].addScaledVector(P.sh.coefficients[te],U);w++}else if(P.isDirectionalLight){let te=t.get(P);if(te.color.copy(P.color).multiplyScalar(P.intensity*N),P.castShadow){let q=P.shadow,K=n.get(P);K.shadowBias=q.bias,K.shadowNormalBias=q.normalBias,K.shadowRadius=q.radius,K.shadowMapSize=q.mapSize,i.directionalShadow[p]=K,i.directionalShadowMap[p]=he,i.directionalShadowMatrix[p]=P.shadow.matrix,g++}i.directional[p]=te,p++}else if(P.isSpotLight){let te=t.get(P);te.position.setFromMatrixPosition(P.matrixWorld),te.color.copy(k).multiplyScalar(U*N),te.distance=$,te.coneCos=Math.cos(P.angle),te.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),te.decay=P.decay,i.spot[v]=te;let q=P.shadow;if(P.map&&(i.spotLightMap[T]=P.map,T++,q.updateMatrices(P),P.castShadow&&E++),i.spotLightMatrix[v]=q.matrix,P.castShadow){let K=n.get(P);K.shadowBias=q.bias,K.shadowNormalBias=q.normalBias,K.shadowRadius=q.radius,K.shadowMapSize=q.mapSize,i.spotShadow[v]=K,i.spotShadowMap[v]=he,_++}v++}else if(P.isRectAreaLight){let te=t.get(P);te.color.copy(k).multiplyScalar(U),te.halfWidth.set(.5*P.width,0,0),te.halfHeight.set(0,.5*P.height,0),i.rectArea[m]=te,m++}else if(P.isPointLight){let te=t.get(P);if(te.color.copy(P.color).multiplyScalar(P.intensity*N),te.distance=P.distance,te.decay=P.decay,P.castShadow){let q=P.shadow,K=n.get(P);K.shadowBias=q.bias,K.shadowNormalBias=q.normalBias,K.shadowRadius=q.radius,K.shadowMapSize=q.mapSize,K.shadowCameraNear=q.camera.near,K.shadowCameraFar=q.camera.far,i.pointShadow[f]=K,i.pointShadowMap[f]=he,i.pointShadowMatrix[f]=P.shadow.matrix,y++}i.point[f]=te,f++}else if(P.isHemisphereLight){let te=t.get(P);te.skyColor.copy(P.color).multiplyScalar(U*N),te.groundColor.copy(P.groundColor).multiplyScalar(U*N),i.hemi[x]=te,x++}}m>0&&(e.isWebGL2?r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pe.LTC_FLOAT_1,i.rectAreaLTC2=pe.LTC_FLOAT_2):(i.rectAreaLTC1=pe.LTC_HALF_1,i.rectAreaLTC2=pe.LTC_HALF_2):r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pe.LTC_FLOAT_1,i.rectAreaLTC2=pe.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=pe.LTC_HALF_1,i.rectAreaLTC2=pe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;let b=i.hash;b.directionalLength===p&&b.pointLength===f&&b.spotLength===v&&b.rectAreaLength===m&&b.hemiLength===x&&b.numDirectionalShadows===g&&b.numPointShadows===y&&b.numSpotShadows===_&&b.numSpotMaps===T&&b.numLightProbes===w||(i.directional.length=p,i.spot.length=v,i.rectArea.length=m,i.point.length=f,i.hemi.length=x,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=_+T-E,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=w,b.directionalLength=p,b.pointLength=f,b.spotLength=v,b.rectAreaLength=m,b.hemiLength=x,b.numDirectionalShadows=g,b.numPointShadows=y,b.numSpotShadows=_,b.numSpotMaps=T,b.numLightProbes=w,i.version=Gg++)},setupView:function(l,c){let h=0,u=0,d=0,p=0,f=0,v=c.matrixWorldInverse;for(let m=0,x=l.length;m<x;m++){let g=l[m];if(g.isDirectionalLight){let y=i.directional[h];y.direction.setFromMatrixPosition(g.matrixWorld),s.setFromMatrixPosition(g.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(v),h++}else if(g.isSpotLight){let y=i.spot[d];y.position.setFromMatrixPosition(g.matrixWorld),y.position.applyMatrix4(v),y.direction.setFromMatrixPosition(g.matrixWorld),s.setFromMatrixPosition(g.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(v),d++}else if(g.isRectAreaLight){let y=i.rectArea[p];y.position.setFromMatrixPosition(g.matrixWorld),y.position.applyMatrix4(v),o.identity(),a.copy(g.matrixWorld),a.premultiply(v),o.extractRotation(a),y.halfWidth.set(.5*g.width,0,0),y.halfHeight.set(0,.5*g.height,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),p++}else if(g.isPointLight){let y=i.point[u];y.position.setFromMatrixPosition(g.matrixWorld),y.position.applyMatrix4(v),u++}else if(g.isHemisphereLight){let y=i.hemi[f];y.direction.setFromMatrixPosition(g.matrixWorld),y.direction.transformDirection(v),f++}}},state:i}}function ap(r,e){let t=new Wg(r,e),n=[],i=[];return{init:function(){n.length=0,i.length=0},state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:function(s){t.setup(n,s)},setupLightsView:function(s){t.setupView(n,s)},pushLight:function(s){n.push(s)},pushShadow:function(s){i.push(s)}}}function jg(r,e){let t=new WeakMap;return{get:function(n,i=0){let s=t.get(n),a;return s===void 0?(a=new ap(r,e),t.set(n,[a])):i>=s.length?(a=new ap(r,e),s.push(a)):a=s[i],a},dispose:function(){t=new WeakMap}}}var ah=class extends pn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},oh=class extends pn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Xg(r,e,t){let n=new As,i=new re,s=new re,a=new _t,o=new ah({depthPacking:3201}),l=new oh,c={},h=t.maxTextureSize,u={[Kn]:Kt,[Kt]:Kn,2:2},d=new Ot({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new re},radius:{value:4}},vertexShader:`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fragmentShader:`uniform sampler2D shadow_pass;
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
}`}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let f=new at;f.setAttribute("position",new Mt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new _e(f,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Op;let x=this.type;function g(E,w){let N=e.update(v);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new an(i.x,i.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,r.setRenderTarget(E.mapPass),r.clear(),r.renderBufferDirect(w,null,N,d,v,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,r.setRenderTarget(E.map),r.clear(),r.renderBufferDirect(w,null,N,p,v,null)}function y(E,w,N,b){let L=null,I=N.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(I!==void 0)L=I;else if(L=N.isPointLight===!0?l:o,r.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){let P=L.uuid,k=w.uuid,U=c[P];U===void 0&&(U={},c[P]=U);let $=U[k];$===void 0&&($=L.clone(),U[k]=$,w.addEventListener("dispose",T)),L=$}return L.visible=w.visible,L.wireframe=w.wireframe,L.side=b===ci?w.shadowSide!==null?w.shadowSide:w.side:w.shadowSide!==null?w.shadowSide:u[w.side],L.alphaMap=w.alphaMap,L.alphaTest=w.alphaTest,L.map=w.map,L.clipShadows=w.clipShadows,L.clippingPlanes=w.clippingPlanes,L.clipIntersection=w.clipIntersection,L.displacementMap=w.displacementMap,L.displacementScale=w.displacementScale,L.displacementBias=w.displacementBias,L.wireframeLinewidth=w.wireframeLinewidth,L.linewidth=w.linewidth,N.isPointLight===!0&&L.isMeshDistanceMaterial===!0&&(r.properties.get(L).light=N),L}function _(E,w,N,b,L){if(E.visible===!1)return;if(E.layers.test(w.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&L===ci)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,E.matrixWorld);let P=e.update(E),k=E.material;if(Array.isArray(k)){let U=P.groups;for(let $=0,he=U.length;$<he;$++){let te=U[$],q=k[te.materialIndex];if(q&&q.visible){let K=y(E,q,b,L);E.onBeforeShadow(r,E,w,N,P,K,te),r.renderBufferDirect(N,null,P,K,E,te),E.onAfterShadow(r,E,w,N,P,K,te)}}}else if(k.visible){let U=y(E,k,b,L);E.onBeforeShadow(r,E,w,N,P,U,null),r.renderBufferDirect(N,null,P,U,E,null),E.onAfterShadow(r,E,w,N,P,U,null)}}let I=E.children;for(let P=0,k=I.length;P<k;P++)_(I[P],w,N,b,L)}function T(E){E.target.removeEventListener("dispose",T);for(let w in c){let N=c[w],b=E.target.uuid;b in N&&(N[b].dispose(),delete N[b])}}this.render=function(E,w,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;let b=r.getRenderTarget(),L=r.getActiveCubeFace(),I=r.getActiveMipmapLevel(),P=r.state;P.setBlending(0),P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);let k=x!==ci&&this.type===ci,U=x===ci&&this.type!==ci;for(let $=0,he=E.length;$<he;$++){let te=E[$],q=te.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",te,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;i.copy(q.mapSize);let K=q.getFrameExtents();if(i.multiply(K),s.copy(q.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/K.x),i.x=s.x*K.x,q.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/K.y),i.y=s.y*K.y,q.mapSize.y=s.y)),q.map===null||k===!0||U===!0){let X=this.type!==ci?{minFilter:$t,magFilter:$t}:{};q.map!==null&&q.map.dispose(),q.map=new an(i.x,i.y,X),q.map.texture.name=te.name+".shadowMap",q.camera.updateProjectionMatrix()}r.setRenderTarget(q.map),r.clear();let z=q.getViewportCount();for(let X=0;X<z;X++){let fe=q.getViewport(X);a.set(s.x*fe.x,s.y*fe.y,s.x*fe.z,s.y*fe.w),P.viewport(a),q.updateMatrices(te,X),n=q.getFrustum(),_(w,N,q.camera,te,this.type)}q.isPointLightShadow!==!0&&this.type===ci&&g(q,N),q.needsUpdate=!1}x=this.type,m.needsUpdate=!1,r.setRenderTarget(b,L,I)}}function qg(r,e,t){let n=t.isWebGL2,i=new function(){let S=!1,ae=new _t,V=null,W=new _t(0,0,0,0);return{setMask:function(oe){V===oe||S||(r.colorMask(oe,oe,oe,oe),V=oe)},setLocked:function(oe){S=oe},setClear:function(oe,ge,xe,Me,Ie){Ie===!0&&(oe*=Me,ge*=Me,xe*=Me),ae.set(oe,ge,xe,Me),W.equals(ae)===!1&&(r.clearColor(oe,ge,xe,Me),W.copy(ae))},reset:function(){S=!1,V=null,W.set(-1,0,0,0)}}},s=new function(){let S=!1,ae=null,V=null,W=null;return{setTest:function(oe){oe?Z(r.DEPTH_TEST):D(r.DEPTH_TEST)},setMask:function(oe){ae===oe||S||(r.depthMask(oe),ae=oe)},setFunc:function(oe){if(V!==oe){switch(oe){case 0:r.depthFunc(r.NEVER);break;case 1:r.depthFunc(r.ALWAYS);break;case 2:r.depthFunc(r.LESS);break;case 3:default:r.depthFunc(r.LEQUAL);break;case 4:r.depthFunc(r.EQUAL);break;case 5:r.depthFunc(r.GEQUAL);break;case 6:r.depthFunc(r.GREATER);break;case 7:r.depthFunc(r.NOTEQUAL)}V=oe}},setLocked:function(oe){S=oe},setClear:function(oe){W!==oe&&(r.clearDepth(oe),W=oe)},reset:function(){S=!1,ae=null,V=null,W=null}}},a=new function(){let S=!1,ae=null,V=null,W=null,oe=null,ge=null,xe=null,Me=null,Ie=null;return{setTest:function(be){S||(be?Z(r.STENCIL_TEST):D(r.STENCIL_TEST))},setMask:function(be){ae===be||S||(r.stencilMask(be),ae=be)},setFunc:function(be,we,Fe){V===be&&W===we&&oe===Fe||(r.stencilFunc(be,we,Fe),V=be,W=we,oe=Fe)},setOp:function(be,we,Fe){ge===be&&xe===we&&Me===Fe||(r.stencilOp(be,we,Fe),ge=be,xe=we,Me=Fe)},setLocked:function(be){S=be},setClear:function(be){Ie!==be&&(r.clearStencil(be),Ie=be)},reset:function(){S=!1,ae=null,V=null,W=null,oe=null,ge=null,xe=null,Me=null,Ie=null}}},o=new WeakMap,l=new WeakMap,c={},h={},u=new WeakMap,d=[],p=null,f=!1,v=null,m=null,x=null,g=null,y=null,_=null,T=null,E=new ve(0,0,0),w=0,N=!1,b=null,L=null,I=null,P=null,k=null,U=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),$=!1,he=0,te=r.getParameter(r.VERSION);te.indexOf("WebGL")!==-1?(he=parseFloat(/^WebGL (\d)/.exec(te)[1]),$=he>=1):te.indexOf("OpenGL ES")!==-1&&(he=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),$=he>=2);let q=null,K={},z=r.getParameter(r.SCISSOR_BOX),X=r.getParameter(r.VIEWPORT),fe=new _t().fromArray(z),A=new _t().fromArray(X);function R(S,ae,V,W){let oe=new Uint8Array(4),ge=r.createTexture();r.bindTexture(S,ge),r.texParameteri(S,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(S,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let xe=0;xe<V;xe++)!n||S!==r.TEXTURE_3D&&S!==r.TEXTURE_2D_ARRAY?r.texImage2D(ae+xe,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,oe):r.texImage3D(ae,0,r.RGBA,1,1,W,0,r.RGBA,r.UNSIGNED_BYTE,oe);return ge}let H={};function Z(S){c[S]!==!0&&(r.enable(S),c[S]=!0)}function D(S){c[S]!==!1&&(r.disable(S),c[S]=!1)}H[r.TEXTURE_2D]=R(r.TEXTURE_2D,r.TEXTURE_2D,1),H[r.TEXTURE_CUBE_MAP]=R(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(H[r.TEXTURE_2D_ARRAY]=R(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),H[r.TEXTURE_3D]=R(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),i.setClear(0,0,0,1),s.setClear(1),a.setClear(0),Z(r.DEPTH_TEST),s.setFunc(3),G(!1),ne(1),Z(r.CULL_FACE),O(0);let Y={[gr]:r.FUNC_ADD,101:r.FUNC_SUBTRACT,102:r.FUNC_REVERSE_SUBTRACT};if(n)Y[103]=r.MIN,Y[104]=r.MAX;else{let S=e.get("EXT_blend_minmax");S!==null&&(Y[103]=S.MIN_EXT,Y[104]=S.MAX_EXT)}let B={200:r.ZERO,201:r.ONE,202:r.SRC_COLOR,[Gc]:r.SRC_ALPHA,210:r.SRC_ALPHA_SATURATE,208:r.DST_COLOR,206:r.DST_ALPHA,203:r.ONE_MINUS_SRC_COLOR,[Vc]:r.ONE_MINUS_SRC_ALPHA,209:r.ONE_MINUS_DST_COLOR,207:r.ONE_MINUS_DST_ALPHA,211:r.CONSTANT_COLOR,212:r.ONE_MINUS_CONSTANT_COLOR,213:r.CONSTANT_ALPHA,214:r.ONE_MINUS_CONSTANT_ALPHA};function O(S,ae,V,W,oe,ge,xe,Me,Ie,be){if(S!==0){if(f===!1&&(Z(r.BLEND),f=!0),S===5)oe=oe||ae,ge=ge||V,xe=xe||W,ae===m&&oe===y||(r.blendEquationSeparate(Y[ae],Y[oe]),m=ae,y=oe),V===x&&W===g&&ge===_&&xe===T||(r.blendFuncSeparate(B[V],B[W],B[ge],B[xe]),x=V,g=W,_=ge,T=xe),Me.equals(E)!==!1&&Ie===w||(r.blendColor(Me.r,Me.g,Me.b,Ie),E.copy(Me),w=Ie),v=S,N=!1;else if(S!==v||be!==N){if(m===gr&&y===gr||(r.blendEquation(r.FUNC_ADD),m=gr,y=gr),be)switch(S){case 1:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case 2:r.blendFunc(r.ONE,r.ONE);break;case 3:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case 4:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",S)}else switch(S){case 1:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case 2:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case 3:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case 4:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",S)}x=null,g=null,_=null,T=null,E.set(0,0,0),w=0,v=S,N=be}}else f===!0&&(D(r.BLEND),f=!1)}function G(S){b!==S&&(S?r.frontFace(r.CW):r.frontFace(r.CCW),b=S)}function ne(S){S!==0?(Z(r.CULL_FACE),S!==L&&(S===1?r.cullFace(r.BACK):S===2?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):D(r.CULL_FACE),L=S}function ee(S,ae,V){S?(Z(r.POLYGON_OFFSET_FILL),P===ae&&k===V||(r.polygonOffset(ae,V),P=ae,k=V)):D(r.POLYGON_OFFSET_FILL)}return{buffers:{color:i,depth:s,stencil:a},enable:Z,disable:D,bindFramebuffer:function(S,ae){return h[S]!==ae&&(r.bindFramebuffer(S,ae),h[S]=ae,n&&(S===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=ae),S===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=ae)),!0)},drawBuffers:function(S,ae){let V=d,W=!1;if(S)if(V=u.get(ae),V===void 0&&(V=[],u.set(ae,V)),S.isWebGLMultipleRenderTargets){let oe=S.texture;if(V.length!==oe.length||V[0]!==r.COLOR_ATTACHMENT0){for(let ge=0,xe=oe.length;ge<xe;ge++)V[ge]=r.COLOR_ATTACHMENT0+ge;V.length=oe.length,W=!0}}else V[0]!==r.COLOR_ATTACHMENT0&&(V[0]=r.COLOR_ATTACHMENT0,W=!0);else V[0]!==r.BACK&&(V[0]=r.BACK,W=!0);W&&(t.isWebGL2?r.drawBuffers(V):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(V))},useProgram:function(S){return p!==S&&(r.useProgram(S),p=S,!0)},setBlending:O,setMaterial:function(S,ae){S.side===2?D(r.CULL_FACE):Z(r.CULL_FACE);let V=S.side===Kt;ae&&(V=!V),G(V),S.blending===1&&S.transparent===!1?O(0):O(S.blending,S.blendEquation,S.blendSrc,S.blendDst,S.blendEquationAlpha,S.blendSrcAlpha,S.blendDstAlpha,S.blendColor,S.blendAlpha,S.premultipliedAlpha),s.setFunc(S.depthFunc),s.setTest(S.depthTest),s.setMask(S.depthWrite),i.setMask(S.colorWrite);let W=S.stencilWrite;a.setTest(W),W&&(a.setMask(S.stencilWriteMask),a.setFunc(S.stencilFunc,S.stencilRef,S.stencilFuncMask),a.setOp(S.stencilFail,S.stencilZFail,S.stencilZPass)),ee(S.polygonOffset,S.polygonOffsetFactor,S.polygonOffsetUnits),S.alphaToCoverage===!0?Z(r.SAMPLE_ALPHA_TO_COVERAGE):D(r.SAMPLE_ALPHA_TO_COVERAGE)},setFlipSided:G,setCullFace:ne,setLineWidth:function(S){S!==I&&($&&r.lineWidth(S),I=S)},setPolygonOffset:ee,setScissorTest:function(S){S?Z(r.SCISSOR_TEST):D(r.SCISSOR_TEST)},activeTexture:function(S){S===void 0&&(S=r.TEXTURE0+U-1),q!==S&&(r.activeTexture(S),q=S)},bindTexture:function(S,ae,V){V===void 0&&(V=q===null?r.TEXTURE0+U-1:q);let W=K[V];W===void 0&&(W={type:void 0,texture:void 0},K[V]=W),W.type===S&&W.texture===ae||(q!==V&&(r.activeTexture(V),q=V),r.bindTexture(S,ae||H[S]),W.type=S,W.texture=ae)},unbindTexture:function(){let S=K[q];S!==void 0&&S.type!==void 0&&(r.bindTexture(S.type,null),S.type=void 0,S.texture=void 0)},compressedTexImage2D:function(){try{r.compressedTexImage2D.apply(r,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},compressedTexImage3D:function(){try{r.compressedTexImage3D.apply(r,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},texImage2D:function(){try{r.texImage2D.apply(r,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},texImage3D:function(){try{r.texImage3D.apply(r,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},updateUBOMapping:function(S,ae){let V=l.get(ae);V===void 0&&(V=new WeakMap,l.set(ae,V));let W=V.get(S);W===void 0&&(W=r.getUniformBlockIndex(ae,S.name),V.set(S,W))},uniformBlockBinding:function(S,ae){let V=l.get(ae).get(S);o.get(ae)!==V&&(r.uniformBlockBinding(ae,V,S.__bindingPointIndex),o.set(ae,V))},texStorage2D:function(){try{r.texStorage2D.apply(r,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},texStorage3D:function(){try{r.texStorage3D.apply(r,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},texSubImage2D:function(){try{r.texSubImage2D.apply(r,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},texSubImage3D:function(){try{r.texSubImage3D.apply(r,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},compressedTexSubImage2D:function(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},compressedTexSubImage3D:function(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},scissor:function(S){fe.equals(S)===!1&&(r.scissor(S.x,S.y,S.z,S.w),fe.copy(S))},viewport:function(S){A.equals(S)===!1&&(r.viewport(S.x,S.y,S.z,S.w),A.copy(S))},reset:function(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),n===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),c={},q=null,K={},h={},u=new WeakMap,d=[],p=null,f=!1,v=null,m=null,x=null,g=null,y=null,_=null,T=null,E=new ve(0,0,0),w=0,N=!1,b=null,L=null,I=null,P=null,k=null,fe.set(0,0,r.canvas.width,r.canvas.height),A.set(0,0,r.canvas.width,r.canvas.height),i.reset(),s.reset(),a.reset()}}}function Yg(r,e,t,n,i,s,a){let o=i.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator<"u"&&/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function f(A,R){return p?new OffscreenCanvas(A,R):_a("canvas")}function v(A,R,H,Z){let D=1;if((A.width>Z||A.height>Z)&&(D=Z/Math.max(A.width,A.height)),D<1||R===!0){if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){let Y=R?jo:Math.floor,B=Y(D*A.width),O=Y(D*A.height);u===void 0&&(u=f(B,O));let G=H?f(B,O):u;return G.width=B,G.height=O,G.getContext("2d").drawImage(A,0,0,B,O),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+B+"x"+O+")."),G}return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A}return A}function m(A){return Zc(A.width)&&Zc(A.height)}function x(A,R){return A.generateMipmaps&&R&&A.minFilter!==$t&&A.minFilter!==un}function g(A){r.generateMipmap(A)}function y(A,R,H,Z,D=!1){if(o===!1)return R;if(A!==null){if(r[A]!==void 0)return r[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let Y=R;if(R===r.RED&&(H===r.FLOAT&&(Y=r.R32F),H===r.HALF_FLOAT&&(Y=r.R16F),H===r.UNSIGNED_BYTE&&(Y=r.R8)),R===r.RED_INTEGER&&(H===r.UNSIGNED_BYTE&&(Y=r.R8UI),H===r.UNSIGNED_SHORT&&(Y=r.R16UI),H===r.UNSIGNED_INT&&(Y=r.R32UI),H===r.BYTE&&(Y=r.R8I),H===r.SHORT&&(Y=r.R16I),H===r.INT&&(Y=r.R32I)),R===r.RG&&(H===r.FLOAT&&(Y=r.RG32F),H===r.HALF_FLOAT&&(Y=r.RG16F),H===r.UNSIGNED_BYTE&&(Y=r.RG8)),R===r.RGBA){let B=D?zo:st.getTransfer(Z);H===r.FLOAT&&(Y=r.RGBA32F),H===r.HALF_FLOAT&&(Y=r.RGBA16F),H===r.UNSIGNED_BYTE&&(Y=B===xt?r.SRGB8_ALPHA8:r.RGBA8),H===r.UNSIGNED_SHORT_4_4_4_4&&(Y=r.RGBA4),H===r.UNSIGNED_SHORT_5_5_5_1&&(Y=r.RGB5_A1)}return Y!==r.R16F&&Y!==r.R32F&&Y!==r.RG16F&&Y!==r.RG32F&&Y!==r.RGBA16F&&Y!==r.RGBA32F||e.get("EXT_color_buffer_float"),Y}function _(A,R,H){return x(A,H)===!0||A.isFramebufferTexture&&A.minFilter!==$t&&A.minFilter!==un?Math.log2(Math.max(R.width,R.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?R.mipmaps.length:1}function T(A){return A===$t||A===Fo||A===pa?r.NEAREST:r.LINEAR}function E(A){let R=A.target;R.removeEventListener("dispose",E),function(H){let Z=n.get(H);if(Z.__webglInit===void 0)return;let D=H.source,Y=d.get(D);if(Y){let B=Y[Z.__cacheKey];B.usedTimes--,B.usedTimes===0&&N(H),Object.keys(Y).length===0&&d.delete(D)}n.remove(H)}(R),R.isVideoTexture&&h.delete(R)}function w(A){let R=A.target;R.removeEventListener("dispose",w),function(H){let Z=H.texture,D=n.get(H),Y=n.get(Z);if(Y.__webglTexture!==void 0&&(r.deleteTexture(Y.__webglTexture),a.memory.textures--),H.depthTexture&&H.depthTexture.dispose(),H.isWebGLCubeRenderTarget)for(let B=0;B<6;B++){if(Array.isArray(D.__webglFramebuffer[B]))for(let O=0;O<D.__webglFramebuffer[B].length;O++)r.deleteFramebuffer(D.__webglFramebuffer[B][O]);else r.deleteFramebuffer(D.__webglFramebuffer[B]);D.__webglDepthbuffer&&r.deleteRenderbuffer(D.__webglDepthbuffer[B])}else{if(Array.isArray(D.__webglFramebuffer))for(let B=0;B<D.__webglFramebuffer.length;B++)r.deleteFramebuffer(D.__webglFramebuffer[B]);else r.deleteFramebuffer(D.__webglFramebuffer);if(D.__webglDepthbuffer&&r.deleteRenderbuffer(D.__webglDepthbuffer),D.__webglMultisampledFramebuffer&&r.deleteFramebuffer(D.__webglMultisampledFramebuffer),D.__webglColorRenderbuffer)for(let B=0;B<D.__webglColorRenderbuffer.length;B++)D.__webglColorRenderbuffer[B]&&r.deleteRenderbuffer(D.__webglColorRenderbuffer[B]);D.__webglDepthRenderbuffer&&r.deleteRenderbuffer(D.__webglDepthRenderbuffer)}if(H.isWebGLMultipleRenderTargets)for(let B=0,O=Z.length;B<O;B++){let G=n.get(Z[B]);G.__webglTexture&&(r.deleteTexture(G.__webglTexture),a.memory.textures--),n.remove(Z[B])}n.remove(Z),n.remove(H)}(R)}function N(A){let R=n.get(A);r.deleteTexture(R.__webglTexture);let H=A.source;delete d.get(H)[R.__cacheKey],a.memory.textures--}let b=0;function L(A,R){let H=n.get(A);if(A.isVideoTexture&&function(Z){let D=a.render.frame;h.get(Z)!==D&&(h.set(Z,D),Z.update())}(A),A.isRenderTargetTexture===!1&&A.version>0&&H.__version!==A.version){let Z=A.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else{if(Z.complete!==!1)return void he(H,A,R);console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")}}t.bindTexture(r.TEXTURE_2D,H.__webglTexture,r.TEXTURE0+R)}let I={[di]:r.REPEAT,[Fn]:r.CLAMP_TO_EDGE,[xa]:r.MIRRORED_REPEAT},P={[$t]:r.NEAREST,[Fo]:r.NEAREST_MIPMAP_NEAREST,[pa]:r.NEAREST_MIPMAP_LINEAR,[un]:r.LINEAR,[Xh]:r.LINEAR_MIPMAP_NEAREST,[Mr]:r.LINEAR_MIPMAP_LINEAR},k={512:r.NEVER,519:r.ALWAYS,513:r.LESS,515:r.LEQUAL,514:r.EQUAL,518:r.GEQUAL,516:r.GREATER,517:r.NOTEQUAL};function U(A,R,H){if(H?(r.texParameteri(A,r.TEXTURE_WRAP_S,I[R.wrapS]),r.texParameteri(A,r.TEXTURE_WRAP_T,I[R.wrapT]),A!==r.TEXTURE_3D&&A!==r.TEXTURE_2D_ARRAY||r.texParameteri(A,r.TEXTURE_WRAP_R,I[R.wrapR]),r.texParameteri(A,r.TEXTURE_MAG_FILTER,P[R.magFilter]),r.texParameteri(A,r.TEXTURE_MIN_FILTER,P[R.minFilter])):(r.texParameteri(A,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(A,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),A!==r.TEXTURE_3D&&A!==r.TEXTURE_2D_ARRAY||r.texParameteri(A,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),R.wrapS===Fn&&R.wrapT===Fn||console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(A,r.TEXTURE_MAG_FILTER,T(R.magFilter)),r.texParameteri(A,r.TEXTURE_MIN_FILTER,T(R.minFilter)),R.minFilter!==$t&&R.minFilter!==un&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),R.compareFunction&&(r.texParameteri(A,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(A,r.TEXTURE_COMPARE_FUNC,k[R.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let Z=e.get("EXT_texture_filter_anisotropic");if(R.magFilter===$t||R.minFilter!==pa&&R.minFilter!==Mr||R.type===ui&&e.has("OES_texture_float_linear")===!1||o===!1&&R.type===Gn&&e.has("OES_texture_half_float_linear")===!1)return;(R.anisotropy>1||n.get(R).__currentAnisotropy)&&(r.texParameterf(A,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,i.getMaxAnisotropy())),n.get(R).__currentAnisotropy=R.anisotropy)}}function $(A,R){let H=!1;A.__webglInit===void 0&&(A.__webglInit=!0,R.addEventListener("dispose",E));let Z=R.source,D=d.get(Z);D===void 0&&(D={},d.set(Z,D));let Y=function(B){let O=[];return O.push(B.wrapS),O.push(B.wrapT),O.push(B.wrapR||0),O.push(B.magFilter),O.push(B.minFilter),O.push(B.anisotropy),O.push(B.internalFormat),O.push(B.format),O.push(B.type),O.push(B.generateMipmaps),O.push(B.premultiplyAlpha),O.push(B.flipY),O.push(B.unpackAlignment),O.push(B.colorSpace),O.join()}(R);if(Y!==A.__cacheKey){D[Y]===void 0&&(D[Y]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,H=!0),D[Y].usedTimes++;let B=D[A.__cacheKey];B!==void 0&&(D[A.__cacheKey].usedTimes--,B.usedTimes===0&&N(R)),A.__cacheKey=Y,A.__webglTexture=D[Y].texture}return H}function he(A,R,H){let Z=r.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(Z=r.TEXTURE_2D_ARRAY),R.isData3DTexture&&(Z=r.TEXTURE_3D);let D=$(A,R),Y=R.source;t.bindTexture(Z,A.__webglTexture,r.TEXTURE0+H);let B=n.get(Y);if(Y.version!==B.__version||D===!0){t.activeTexture(r.TEXTURE0+H);let O=st.getPrimaries(st.workingColorSpace),G=R.colorSpace===Yn?null:st.getPrimaries(R.colorSpace),ne=R.colorSpace===Yn||O===G?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,R.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,R.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);let ee=function(we){return!o&&(we.wrapS!==Fn||we.wrapT!==Fn||we.minFilter!==$t&&we.minFilter!==un)}(R)&&m(R.image)===!1,S=v(R.image,ee,!1,i.maxTextureSize);S=fe(R,S);let ae=m(S)||o,V=s.convert(R.format,R.colorSpace),W,oe=s.convert(R.type),ge=y(R.internalFormat,V,oe,R.colorSpace,R.isVideoTexture);U(Z,R,ae);let xe=R.mipmaps,Me=o&&R.isVideoTexture!==!0&&ge!==Xp,Ie=B.__version===void 0||D===!0,be=_(R,S,ae);if(R.isDepthTexture)ge=r.DEPTH_COMPONENT,o?ge=R.type===ui?r.DEPTH_COMPONENT32F:R.type===Ni?r.DEPTH_COMPONENT24:R.type===yr?r.DEPTH24_STENCIL8:r.DEPTH_COMPONENT16:R.type===ui&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),R.format===xr&&ge===r.DEPTH_COMPONENT&&R.type!==qh&&R.type!==Ni&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),R.type=Ni,oe=s.convert(R.type)),R.format===Ms&&ge===r.DEPTH_COMPONENT&&(ge=r.DEPTH_STENCIL,R.type!==yr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),R.type=yr,oe=s.convert(R.type))),Ie&&(Me?t.texStorage2D(r.TEXTURE_2D,1,ge,S.width,S.height):t.texImage2D(r.TEXTURE_2D,0,ge,S.width,S.height,0,V,oe,null));else if(R.isDataTexture)if(xe.length>0&&ae){Me&&Ie&&t.texStorage2D(r.TEXTURE_2D,be,ge,xe[0].width,xe[0].height);for(let we=0,Fe=xe.length;we<Fe;we++)W=xe[we],Me?t.texSubImage2D(r.TEXTURE_2D,we,0,0,W.width,W.height,V,oe,W.data):t.texImage2D(r.TEXTURE_2D,we,ge,W.width,W.height,0,V,oe,W.data);R.generateMipmaps=!1}else Me?(Ie&&t.texStorage2D(r.TEXTURE_2D,be,ge,S.width,S.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,S.width,S.height,V,oe,S.data)):t.texImage2D(r.TEXTURE_2D,0,ge,S.width,S.height,0,V,oe,S.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){Me&&Ie&&t.texStorage3D(r.TEXTURE_2D_ARRAY,be,ge,xe[0].width,xe[0].height,S.depth);for(let we=0,Fe=xe.length;we<Fe;we++)W=xe[we],R.format!==Hn?V!==null?Me?t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,we,0,0,0,W.width,W.height,S.depth,V,W.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,we,ge,W.width,W.height,S.depth,0,W.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Me?t.texSubImage3D(r.TEXTURE_2D_ARRAY,we,0,0,0,W.width,W.height,S.depth,V,oe,W.data):t.texImage3D(r.TEXTURE_2D_ARRAY,we,ge,W.width,W.height,S.depth,0,V,oe,W.data)}else{Me&&Ie&&t.texStorage2D(r.TEXTURE_2D,be,ge,xe[0].width,xe[0].height);for(let we=0,Fe=xe.length;we<Fe;we++)W=xe[we],R.format!==Hn?V!==null?Me?t.compressedTexSubImage2D(r.TEXTURE_2D,we,0,0,W.width,W.height,V,W.data):t.compressedTexImage2D(r.TEXTURE_2D,we,ge,W.width,W.height,0,W.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Me?t.texSubImage2D(r.TEXTURE_2D,we,0,0,W.width,W.height,V,oe,W.data):t.texImage2D(r.TEXTURE_2D,we,ge,W.width,W.height,0,V,oe,W.data)}else if(R.isDataArrayTexture)Me?(Ie&&t.texStorage3D(r.TEXTURE_2D_ARRAY,be,ge,S.width,S.height,S.depth),t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,S.width,S.height,S.depth,V,oe,S.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,ge,S.width,S.height,S.depth,0,V,oe,S.data);else if(R.isData3DTexture)Me?(Ie&&t.texStorage3D(r.TEXTURE_3D,be,ge,S.width,S.height,S.depth),t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,S.width,S.height,S.depth,V,oe,S.data)):t.texImage3D(r.TEXTURE_3D,0,ge,S.width,S.height,S.depth,0,V,oe,S.data);else if(R.isFramebufferTexture){if(Ie)if(Me)t.texStorage2D(r.TEXTURE_2D,be,ge,S.width,S.height);else{let we=S.width,Fe=S.height;for(let Nt=0;Nt<be;Nt++)t.texImage2D(r.TEXTURE_2D,Nt,ge,we,Fe,0,V,oe,null),we>>=1,Fe>>=1}}else if(xe.length>0&&ae){Me&&Ie&&t.texStorage2D(r.TEXTURE_2D,be,ge,xe[0].width,xe[0].height);for(let we=0,Fe=xe.length;we<Fe;we++)W=xe[we],Me?t.texSubImage2D(r.TEXTURE_2D,we,0,0,V,oe,W):t.texImage2D(r.TEXTURE_2D,we,ge,V,oe,W);R.generateMipmaps=!1}else Me?(Ie&&t.texStorage2D(r.TEXTURE_2D,be,ge,S.width,S.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,V,oe,S)):t.texImage2D(r.TEXTURE_2D,0,ge,V,oe,S);x(R,ae)&&g(Z),B.__version=Y.version,R.onUpdate&&R.onUpdate(R)}A.__version=R.version}function te(A,R,H,Z,D,Y){let B=s.convert(H.format,H.colorSpace),O=s.convert(H.type),G=y(H.internalFormat,B,O,H.colorSpace);if(!n.get(R).__hasExternalTextures){let ne=Math.max(1,R.width>>Y),ee=Math.max(1,R.height>>Y);D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY?t.texImage3D(D,Y,G,ne,ee,R.depth,0,B,O,null):t.texImage2D(D,Y,G,ne,ee,0,B,O,null)}t.bindFramebuffer(r.FRAMEBUFFER,A),X(R)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Z,D,n.get(H).__webglTexture,0,z(R)):(D===r.TEXTURE_2D||D>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&D<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Z,D,n.get(H).__webglTexture,Y),t.bindFramebuffer(r.FRAMEBUFFER,null)}function q(A,R,H){if(r.bindRenderbuffer(r.RENDERBUFFER,A),R.depthBuffer&&!R.stencilBuffer){let Z=o===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(H||X(R)){let D=R.depthTexture;D&&D.isDepthTexture&&(D.type===ui?Z=r.DEPTH_COMPONENT32F:D.type===Ni&&(Z=r.DEPTH_COMPONENT24));let Y=z(R);X(R)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Y,Z,R.width,R.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,Y,Z,R.width,R.height)}else r.renderbufferStorage(r.RENDERBUFFER,Z,R.width,R.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,A)}else if(R.depthBuffer&&R.stencilBuffer){let Z=z(R);H&&X(R)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Z,r.DEPTH24_STENCIL8,R.width,R.height):X(R)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Z,r.DEPTH24_STENCIL8,R.width,R.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,A)}else{let Z=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let D=0;D<Z.length;D++){let Y=Z[D],B=s.convert(Y.format,Y.colorSpace),O=s.convert(Y.type),G=y(Y.internalFormat,B,O,Y.colorSpace),ne=z(R);H&&X(R)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ne,G,R.width,R.height):X(R)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ne,G,R.width,R.height):r.renderbufferStorage(r.RENDERBUFFER,G,R.width,R.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function K(A){let R=n.get(A),H=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!R.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");(function(Z,D){if(D&&D.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,Z),!D.depthTexture||!D.depthTexture.isDepthTexture)throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");n.get(D.depthTexture).__webglTexture&&D.depthTexture.image.width===D.width&&D.depthTexture.image.height===D.height||(D.depthTexture.image.width=D.width,D.depthTexture.image.height=D.height,D.depthTexture.needsUpdate=!0),L(D.depthTexture,0);let Y=n.get(D.depthTexture).__webglTexture,B=z(D);if(D.depthTexture.format===xr)X(D)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Y,0,B):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Y,0);else{if(D.depthTexture.format!==Ms)throw new Error("Unknown depthTexture format");X(D)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Y,0,B):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Y,0)}})(R.__webglFramebuffer,A)}else if(H){R.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)t.bindFramebuffer(r.FRAMEBUFFER,R.__webglFramebuffer[Z]),R.__webglDepthbuffer[Z]=r.createRenderbuffer(),q(R.__webglDepthbuffer[Z],A,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer=r.createRenderbuffer(),q(R.__webglDepthbuffer,A,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function z(A){return Math.min(i.maxSamples,A.samples)}function X(A){let R=n.get(A);return o&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function fe(A,R){let H=A.colorSpace,Z=A.format,D=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===qc||H!==Wt&&H!==Yn&&(st.getTransfer(H)===xt?o===!1?e.has("EXT_sRGB")===!0&&Z===Hn?(A.format=qc,A.minFilter=un,A.generateMipmaps=!1):R=Xo.sRGBToLinear(R):Z===Hn&&D===vr||console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),R}this.allocateTextureUnit=function(){let A=b;return A>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+i.maxTextures),b+=1,A},this.resetTextureUnits=function(){b=0},this.setTexture2D=L,this.setTexture2DArray=function(A,R){let H=n.get(A);A.version>0&&H.__version!==A.version?he(H,A,R):t.bindTexture(r.TEXTURE_2D_ARRAY,H.__webglTexture,r.TEXTURE0+R)},this.setTexture3D=function(A,R){let H=n.get(A);A.version>0&&H.__version!==A.version?he(H,A,R):t.bindTexture(r.TEXTURE_3D,H.__webglTexture,r.TEXTURE0+R)},this.setTextureCube=function(A,R){let H=n.get(A);A.version>0&&H.__version!==A.version?function(Z,D,Y){if(D.image.length!==6)return;let B=$(Z,D),O=D.source;t.bindTexture(r.TEXTURE_CUBE_MAP,Z.__webglTexture,r.TEXTURE0+Y);let G=n.get(O);if(O.version!==G.__version||B===!0){t.activeTexture(r.TEXTURE0+Y);let ne=st.getPrimaries(st.workingColorSpace),ee=D.colorSpace===Yn?null:st.getPrimaries(D.colorSpace),S=D.colorSpace===Yn||ne===ee?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,D.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,D.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,S);let ae=D.isCompressedTexture||D.image[0].isCompressedTexture,V=D.image[0]&&D.image[0].isDataTexture,W=[];for(let Re=0;Re<6;Re++)W[Re]=ae||V?V?D.image[Re].image:D.image[Re]:v(D.image[Re],!1,!0,i.maxCubemapSize),W[Re]=fe(D,W[Re]);let oe=W[0],ge=m(oe)||o,xe=s.convert(D.format,D.colorSpace),Me=s.convert(D.type),Ie=y(D.internalFormat,xe,Me,D.colorSpace),be=o&&D.isVideoTexture!==!0,we=G.__version===void 0||B===!0,Fe,Nt=_(D,oe,ge);if(U(r.TEXTURE_CUBE_MAP,D,ge),ae){be&&we&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Nt,Ie,oe.width,oe.height);for(let Re=0;Re<6;Re++){Fe=W[Re].mipmaps;for(let Qe=0;Qe<Fe.length;Qe++){let Ae=Fe[Qe];D.format!==Hn?xe!==null?be?t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Qe,0,0,Ae.width,Ae.height,xe,Ae.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Qe,Ie,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):be?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Qe,0,0,Ae.width,Ae.height,xe,Me,Ae.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Qe,Ie,Ae.width,Ae.height,0,xe,Me,Ae.data)}}}else{Fe=D.mipmaps,be&&we&&(Fe.length>0&&Nt++,t.texStorage2D(r.TEXTURE_CUBE_MAP,Nt,Ie,W[0].width,W[0].height));for(let Re=0;Re<6;Re++)if(V){be?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,0,0,W[Re].width,W[Re].height,xe,Me,W[Re].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,Ie,W[Re].width,W[Re].height,0,xe,Me,W[Re].data);for(let Qe=0;Qe<Fe.length;Qe++){let Ae=Fe[Qe].image[Re].image;be?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Qe+1,0,0,Ae.width,Ae.height,xe,Me,Ae.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Qe+1,Ie,Ae.width,Ae.height,0,xe,Me,Ae.data)}}else{be?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,0,0,xe,Me,W[Re]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,Ie,xe,Me,W[Re]);for(let Qe=0;Qe<Fe.length;Qe++){let Ae=Fe[Qe];be?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Qe+1,0,0,xe,Me,Ae.image[Re]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Qe+1,Ie,xe,Me,Ae.image[Re])}}}x(D,ge)&&g(r.TEXTURE_CUBE_MAP),G.__version=O.version,D.onUpdate&&D.onUpdate(D)}Z.__version=D.version}(H,A,R):t.bindTexture(r.TEXTURE_CUBE_MAP,H.__webglTexture,r.TEXTURE0+R)},this.rebindTextures=function(A,R,H){let Z=n.get(A);R!==void 0&&te(Z.__webglFramebuffer,A,A.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),H!==void 0&&K(A)},this.setupRenderTarget=function(A){let R=A.texture,H=n.get(A),Z=n.get(R);A.addEventListener("dispose",w),A.isWebGLMultipleRenderTargets!==!0&&(Z.__webglTexture===void 0&&(Z.__webglTexture=r.createTexture()),Z.__version=R.version,a.memory.textures++);let D=A.isWebGLCubeRenderTarget===!0,Y=A.isWebGLMultipleRenderTargets===!0,B=m(A)||o;if(D){H.__webglFramebuffer=[];for(let O=0;O<6;O++)if(o&&R.mipmaps&&R.mipmaps.length>0){H.__webglFramebuffer[O]=[];for(let G=0;G<R.mipmaps.length;G++)H.__webglFramebuffer[O][G]=r.createFramebuffer()}else H.__webglFramebuffer[O]=r.createFramebuffer()}else{if(o&&R.mipmaps&&R.mipmaps.length>0){H.__webglFramebuffer=[];for(let O=0;O<R.mipmaps.length;O++)H.__webglFramebuffer[O]=r.createFramebuffer()}else H.__webglFramebuffer=r.createFramebuffer();if(Y)if(i.drawBuffers){let O=A.texture;for(let G=0,ne=O.length;G<ne;G++){let ee=n.get(O[G]);ee.__webglTexture===void 0&&(ee.__webglTexture=r.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&A.samples>0&&X(A)===!1){let O=Y?R:[R];H.__webglMultisampledFramebuffer=r.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let G=0;G<O.length;G++){let ne=O[G];H.__webglColorRenderbuffer[G]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,H.__webglColorRenderbuffer[G]);let ee=s.convert(ne.format,ne.colorSpace),S=s.convert(ne.type),ae=y(ne.internalFormat,ee,S,ne.colorSpace,A.isXRRenderTarget===!0),V=z(A);r.renderbufferStorageMultisample(r.RENDERBUFFER,V,ae,A.width,A.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+G,r.RENDERBUFFER,H.__webglColorRenderbuffer[G])}r.bindRenderbuffer(r.RENDERBUFFER,null),A.depthBuffer&&(H.__webglDepthRenderbuffer=r.createRenderbuffer(),q(H.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(D){t.bindTexture(r.TEXTURE_CUBE_MAP,Z.__webglTexture),U(r.TEXTURE_CUBE_MAP,R,B);for(let O=0;O<6;O++)if(o&&R.mipmaps&&R.mipmaps.length>0)for(let G=0;G<R.mipmaps.length;G++)te(H.__webglFramebuffer[O][G],A,R,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+O,G);else te(H.__webglFramebuffer[O],A,R,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+O,0);x(R,B)&&g(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Y){let O=A.texture;for(let G=0,ne=O.length;G<ne;G++){let ee=O[G],S=n.get(ee);t.bindTexture(r.TEXTURE_2D,S.__webglTexture),U(r.TEXTURE_2D,ee,B),te(H.__webglFramebuffer,A,ee,r.COLOR_ATTACHMENT0+G,r.TEXTURE_2D,0),x(ee,B)&&g(r.TEXTURE_2D)}t.unbindTexture()}else{let O=r.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(o?O=A.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(O,Z.__webglTexture),U(O,R,B),o&&R.mipmaps&&R.mipmaps.length>0)for(let G=0;G<R.mipmaps.length;G++)te(H.__webglFramebuffer[G],A,R,r.COLOR_ATTACHMENT0,O,G);else te(H.__webglFramebuffer,A,R,r.COLOR_ATTACHMENT0,O,0);x(R,B)&&g(O),t.unbindTexture()}A.depthBuffer&&K(A)},this.updateRenderTargetMipmap=function(A){let R=m(A)||o,H=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let Z=0,D=H.length;Z<D;Z++){let Y=H[Z];if(x(Y,R)){let B=A.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,O=n.get(Y).__webglTexture;t.bindTexture(B,O),g(B),t.unbindTexture()}}},this.updateMultisampleRenderTarget=function(A){if(o&&A.samples>0&&X(A)===!1){let R=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],H=A.width,Z=A.height,D=r.COLOR_BUFFER_BIT,Y=[],B=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,O=n.get(A),G=A.isWebGLMultipleRenderTargets===!0;if(G)for(let ne=0;ne<R.length;ne++)t.bindFramebuffer(r.FRAMEBUFFER,O.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ne,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,O.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ne,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,O.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,O.__webglFramebuffer);for(let ne=0;ne<R.length;ne++){Y.push(r.COLOR_ATTACHMENT0+ne),A.depthBuffer&&Y.push(B);let ee=O.__ignoreDepthValues!==void 0&&O.__ignoreDepthValues;if(ee===!1&&(A.depthBuffer&&(D|=r.DEPTH_BUFFER_BIT),A.stencilBuffer&&(D|=r.STENCIL_BUFFER_BIT)),G&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,O.__webglColorRenderbuffer[ne]),ee===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[B]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[B])),G){let S=n.get(R[ne]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,S,0)}r.blitFramebuffer(0,0,H,Z,0,0,H,Z,D,r.NEAREST),c&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Y)}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),G)for(let ne=0;ne<R.length;ne++){t.bindFramebuffer(r.FRAMEBUFFER,O.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ne,r.RENDERBUFFER,O.__webglColorRenderbuffer[ne]);let ee=n.get(R[ne]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,O.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ne,r.TEXTURE_2D,ee,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,O.__webglMultisampledFramebuffer)}},this.setupDepthRenderbuffer=K,this.setupFrameBufferTexture=te,this.useMultisampledRTT=X}function Zg(r,e,t){let n=t.isWebGL2;return{convert:function(i,s=""){let a,o=st.getTransfer(s);if(i===vr)return r.UNSIGNED_BYTE;if(i===zp)return r.UNSIGNED_SHORT_4_4_4_4;if(i===Gp)return r.UNSIGNED_SHORT_5_5_5_1;if(i===1010)return r.BYTE;if(i===1011)return r.SHORT;if(i===qh)return r.UNSIGNED_SHORT;if(i===Hp)return r.INT;if(i===Ni)return r.UNSIGNED_INT;if(i===ui)return r.FLOAT;if(i===Gn)return n?r.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(i===1021)return r.ALPHA;if(i===Hn)return r.RGBA;if(i===1024)return r.LUMINANCE;if(i===1025)return r.LUMINANCE_ALPHA;if(i===xr)return r.DEPTH_COMPONENT;if(i===Ms)return r.DEPTH_STENCIL;if(i===qc)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(i===1028)return r.RED;if(i===Vp)return r.RED_INTEGER;if(i===1030)return r.RG;if(i===Wp)return r.RG_INTEGER;if(i===jp)return r.RGBA_INTEGER;if(i===nc||i===ic||i===rc||i===sc)if(o===xt){if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a===null)return null;if(i===nc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ic)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===rc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===sc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{if(a=e.get("WEBGL_compressed_texture_s3tc"),a===null)return null;if(i===nc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ic)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===rc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===sc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(i===Ju||i===$u||i===Qu||i===ed){if(a=e.get("WEBGL_compressed_texture_pvrtc"),a===null)return null;if(i===Ju)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===$u)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Qu)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ed)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(i===Xp)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(i===td||i===nd){if(a=e.get("WEBGL_compressed_texture_etc"),a===null)return null;if(i===td)return o===xt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===nd)return o===xt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}if(i===id||i===rd||i===sd||i===ad||i===od||i===ld||i===cd||i===hd||i===ud||i===dd||i===pd||i===fd||i===md||i===gd){if(a=e.get("WEBGL_compressed_texture_astc"),a===null)return null;if(i===id)return o===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===rd)return o===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===sd)return o===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ad)return o===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===od)return o===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ld)return o===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===cd)return o===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===hd)return o===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ud)return o===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===dd)return o===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===pd)return o===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===fd)return o===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===md)return o===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===gd)return o===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}if(i===ac||i===vd||i===yd){if(a=e.get("EXT_texture_compression_bptc"),a===null)return null;if(i===ac)return o===xt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===vd)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===yd)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}if(i===36283||i===xd||i===_d||i===Md){if(a=e.get("EXT_texture_compression_rgtc"),a===null)return null;if(i===ac)return a.COMPRESSED_RED_RGTC1_EXT;if(i===xd)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===_d)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Md)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}return i===yr?n?r.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[i]!==void 0?r[i]:null}}}var lh=class extends It{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},De=class extends vt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Kg={type:"move"},ga=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new De,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new De,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new M,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new M),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new De,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new M,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new M),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let v of e.hand.values()){let m=t.getJointPose(v,n),x=this._getHandJoint(c,v);m!==null&&(x.matrix.fromArray(m.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=m.radius),x.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,f=.005;c.inputState.pinching&&d>p+f?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-f&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Kg)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new De;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},ch=class extends pi{constructor(e,t){super();let n=this,i=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,f=null,v=t.getContextAttributes(),m=null,x=null,g=[],y=[],_=new re,T=null,E=new It;E.layers.enable(1),E.viewport=new _t;let w=new It;w.layers.enable(2),w.viewport=new _t;let N=[E,w],b=new lh;b.layers.enable(1),b.layers.enable(2);let L=null,I=null;function P(z){let X=y.indexOf(z.inputSource);if(X===-1)return;let fe=g[X];fe!==void 0&&(fe.update(z.inputSource,z.frame,c||a),fe.dispatchEvent({type:z.type,data:z.inputSource}))}function k(){i.removeEventListener("select",P),i.removeEventListener("selectstart",P),i.removeEventListener("selectend",P),i.removeEventListener("squeeze",P),i.removeEventListener("squeezestart",P),i.removeEventListener("squeezeend",P),i.removeEventListener("end",k),i.removeEventListener("inputsourceschange",U);for(let z=0;z<g.length;z++){let X=y[z];X!==null&&(y[z]=null,g[z].disconnect(X))}L=null,I=null,e.setRenderTarget(m),p=null,d=null,u=null,i=null,x=null,K.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(_.width,_.height,!1),n.dispatchEvent({type:"sessionend"})}function U(z){for(let X=0;X<z.removed.length;X++){let fe=z.removed[X],A=y.indexOf(fe);A>=0&&(y[A]=null,g[A].disconnect(fe))}for(let X=0;X<z.added.length;X++){let fe=z.added[X],A=y.indexOf(fe);if(A===-1){for(let H=0;H<g.length;H++){if(H>=y.length){y.push(fe),A=H;break}if(y[H]===null){y[H]=fe,A=H;break}}if(A===-1)break}let R=g[A];R&&R.connect(fe)}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let X=g[z];return X===void 0&&(X=new ga,g[z]=X),X.getTargetRaySpace()},this.getControllerGrip=function(z){let X=g[z];return X===void 0&&(X=new ga,g[z]=X),X.getGripSpace()},this.getHand=function(z){let X=g[z];return X===void 0&&(X=new ga,g[z]=X),X.getHandSpace()},this.setFramebufferScaleFactor=function(z){s=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){o=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(z){c=z},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return f},this.getSession=function(){return i},this.setSession=async function(z){if(i=z,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",P),i.addEventListener("selectstart",P),i.addEventListener("selectend",P),i.addEventListener("squeeze",P),i.addEventListener("squeezestart",P),i.addEventListener("squeezeend",P),i.addEventListener("end",k),i.addEventListener("inputsourceschange",U),v.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(_),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let X={antialias:i.renderState.layers!==void 0||v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(i,t,X),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new an(p.framebufferWidth,p.framebufferHeight,{format:Hn,type:vr,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let X=null,fe=null,A=null;v.depth&&(A=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,X=v.stencil?Ms:xr,fe=v.stencil?yr:Ni);let R={colorFormat:t.RGBA8,depthFormat:A,scaleFactor:s};u=new XRWebGLBinding(i,t),d=u.createProjectionLayer(R),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new an(d.textureWidth,d.textureHeight,{format:Hn,type:vr,depthTexture:new $o(d.textureWidth,d.textureHeight,fe,void 0,void 0,void 0,void 0,void 0,void 0,X),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0}),e.properties.get(x).__ignoreDepthValues=d.ignoreDepthValues}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),K.setContext(i),K.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};let $=new M,he=new M;function te(z,X){X===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(X.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(i===null)return;b.near=w.near=E.near=z.near,b.far=w.far=E.far=z.far,L===b.near&&I===b.far||(i.updateRenderState({depthNear:b.near,depthFar:b.far}),L=b.near,I=b.far);let X=z.parent,fe=b.cameras;te(b,X);for(let A=0;A<fe.length;A++)te(fe[A],X);fe.length===2?function(A,R,H){$.setFromMatrixPosition(R.matrixWorld),he.setFromMatrixPosition(H.matrixWorld);let Z=$.distanceTo(he),D=R.projectionMatrix.elements,Y=H.projectionMatrix.elements,B=D[14]/(D[10]-1),O=D[14]/(D[10]+1),G=(D[9]+1)/D[5],ne=(D[9]-1)/D[5],ee=(D[8]-1)/D[0],S=(Y[8]+1)/Y[0],ae=B*ee,V=B*S,W=Z/(-ee+S),oe=W*-ee;R.matrixWorld.decompose(A.position,A.quaternion,A.scale),A.translateX(oe),A.translateZ(W),A.matrixWorld.compose(A.position,A.quaternion,A.scale),A.matrixWorldInverse.copy(A.matrixWorld).invert();let ge=B+W,xe=O+W,Me=ae-oe,Ie=V+(Z-oe),be=G*O/xe*ge,we=ne*O/xe*ge;A.projectionMatrix.makePerspective(Me,Ie,be,we,ge,xe),A.projectionMatrixInverse.copy(A.projectionMatrix).invert()}(b,E,w):b.projectionMatrix.copy(E.projectionMatrix),function(A,R,H){H===null?A.matrix.copy(R.matrixWorld):(A.matrix.copy(H.matrixWorld),A.matrix.invert(),A.matrix.multiply(R.matrixWorld)),A.matrix.decompose(A.position,A.quaternion,A.scale),A.updateMatrixWorld(!0),A.projectionMatrix.copy(R.projectionMatrix),A.projectionMatrixInverse.copy(R.projectionMatrixInverse),A.isPerspectiveCamera&&(A.fov=2*Ss*Math.atan(1/A.projectionMatrix.elements[5]),A.zoom=1)}(z,b,X)},this.getCamera=function(){return b},this.getFoveation=function(){if(d!==null||p!==null)return l},this.setFoveation=function(z){l=z,d!==null&&(d.fixedFoveation=z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=z)};let q=null,K=new Qp;K.setAnimationLoop(function(z,X){if(h=X.getViewerPose(c||a),f=X,h!==null){let fe=h.views;p!==null&&(e.setRenderTargetFramebuffer(x,p.framebuffer),e.setRenderTarget(x));let A=!1;fe.length!==b.cameras.length&&(b.cameras.length=0,A=!0);for(let R=0;R<fe.length;R++){let H=fe[R],Z=null;if(p!==null)Z=p.getViewport(H);else{let Y=u.getViewSubImage(d,H);Z=Y.viewport,R===0&&(e.setRenderTargetTextures(x,Y.colorTexture,d.ignoreDepthValues?void 0:Y.depthStencilTexture),e.setRenderTarget(x))}let D=N[R];D===void 0&&(D=new It,D.layers.enable(R),D.viewport=new _t,N[R]=D),D.matrix.fromArray(H.transform.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale),D.projectionMatrix.fromArray(H.projectionMatrix),D.projectionMatrixInverse.copy(D.projectionMatrix).invert(),D.viewport.set(Z.x,Z.y,Z.width,Z.height),R===0&&(b.matrix.copy(D.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),A===!0&&b.cameras.push(D)}}for(let fe=0;fe<g.length;fe++){let A=y[fe],R=g[fe];A!==null&&R!==void 0&&R.update(A,X,c||a)}q&&q(z,X),X.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:X}),f=null}),this.setAnimationLoop=function(z){q=z},this.dispose=function(){}}};function Jg(r,e){function t(i,s){i.matrixAutoUpdate===!0&&i.updateMatrix(),s.value.copy(i.matrix)}function n(i,s){i.opacity.value=s.opacity,s.color&&i.diffuse.value.copy(s.color),s.emissive&&i.emissive.value.copy(s.emissive).multiplyScalar(s.emissiveIntensity),s.map&&(i.map.value=s.map,t(s.map,i.mapTransform)),s.alphaMap&&(i.alphaMap.value=s.alphaMap,t(s.alphaMap,i.alphaMapTransform)),s.bumpMap&&(i.bumpMap.value=s.bumpMap,t(s.bumpMap,i.bumpMapTransform),i.bumpScale.value=s.bumpScale,s.side===Kt&&(i.bumpScale.value*=-1)),s.normalMap&&(i.normalMap.value=s.normalMap,t(s.normalMap,i.normalMapTransform),i.normalScale.value.copy(s.normalScale),s.side===Kt&&i.normalScale.value.negate()),s.displacementMap&&(i.displacementMap.value=s.displacementMap,t(s.displacementMap,i.displacementMapTransform),i.displacementScale.value=s.displacementScale,i.displacementBias.value=s.displacementBias),s.emissiveMap&&(i.emissiveMap.value=s.emissiveMap,t(s.emissiveMap,i.emissiveMapTransform)),s.specularMap&&(i.specularMap.value=s.specularMap,t(s.specularMap,i.specularMapTransform)),s.alphaTest>0&&(i.alphaTest.value=s.alphaTest);let a=e.get(s).envMap;if(a&&(i.envMap.value=a,i.flipEnvMap.value=a.isCubeTexture&&a.isRenderTargetTexture===!1?-1:1,i.reflectivity.value=s.reflectivity,i.ior.value=s.ior,i.refractionRatio.value=s.refractionRatio),s.lightMap){i.lightMap.value=s.lightMap;let o=r._useLegacyLights===!0?Math.PI:1;i.lightMapIntensity.value=s.lightMapIntensity*o,t(s.lightMap,i.lightMapTransform)}s.aoMap&&(i.aoMap.value=s.aoMap,i.aoMapIntensity.value=s.aoMapIntensity,t(s.aoMap,i.aoMapTransform))}return{refreshFogUniforms:function(i,s){s.color.getRGB(i.fogColor.value,$p(r)),s.isFog?(i.fogNear.value=s.near,i.fogFar.value=s.far):s.isFogExp2&&(i.fogDensity.value=s.density)},refreshMaterialUniforms:function(i,s,a,o,l){s.isMeshBasicMaterial||s.isMeshLambertMaterial?n(i,s):s.isMeshToonMaterial?(n(i,s),function(c,h){h.gradientMap&&(c.gradientMap.value=h.gradientMap)}(i,s)):s.isMeshPhongMaterial?(n(i,s),function(c,h){c.specular.value.copy(h.specular),c.shininess.value=Math.max(h.shininess,1e-4)}(i,s)):s.isMeshStandardMaterial?(n(i,s),function(c,h){c.metalness.value=h.metalness,h.metalnessMap&&(c.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,c.metalnessMapTransform)),c.roughness.value=h.roughness,h.roughnessMap&&(c.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,c.roughnessMapTransform)),e.get(h).envMap&&(c.envMapIntensity.value=h.envMapIntensity)}(i,s),s.isMeshPhysicalMaterial&&function(c,h,u){c.ior.value=h.ior,h.sheen>0&&(c.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),c.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(c.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,c.sheenColorMapTransform)),h.sheenRoughnessMap&&(c.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,c.sheenRoughnessMapTransform))),h.clearcoat>0&&(c.clearcoat.value=h.clearcoat,c.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(c.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,c.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(c.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,c.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(c.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,c.clearcoatNormalMapTransform),c.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Kt&&c.clearcoatNormalScale.value.negate())),h.iridescence>0&&(c.iridescence.value=h.iridescence,c.iridescenceIOR.value=h.iridescenceIOR,c.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],c.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(c.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,c.iridescenceMapTransform)),h.iridescenceThicknessMap&&(c.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,c.iridescenceThicknessMapTransform))),h.transmission>0&&(c.transmission.value=h.transmission,c.transmissionSamplerMap.value=u.texture,c.transmissionSamplerSize.value.set(u.width,u.height),h.transmissionMap&&(c.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,c.transmissionMapTransform)),c.thickness.value=h.thickness,h.thicknessMap&&(c.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,c.thicknessMapTransform)),c.attenuationDistance.value=h.attenuationDistance,c.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(c.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(c.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,c.anisotropyMapTransform))),c.specularIntensity.value=h.specularIntensity,c.specularColor.value.copy(h.specularColor),h.specularColorMap&&(c.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,c.specularColorMapTransform)),h.specularIntensityMap&&(c.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,c.specularIntensityMapTransform))}(i,s,l)):s.isMeshMatcapMaterial?(n(i,s),function(c,h){h.matcap&&(c.matcap.value=h.matcap)}(i,s)):s.isMeshDepthMaterial?n(i,s):s.isMeshDistanceMaterial?(n(i,s),function(c,h){let u=e.get(h).light;c.referencePosition.value.setFromMatrixPosition(u.matrixWorld),c.nearDistance.value=u.shadow.camera.near,c.farDistance.value=u.shadow.camera.far}(i,s)):s.isMeshNormalMaterial?n(i,s):s.isLineBasicMaterial?(function(c,h){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,h.map&&(c.map.value=h.map,t(h.map,c.mapTransform))}(i,s),s.isLineDashedMaterial&&function(c,h){c.dashSize.value=h.dashSize,c.totalSize.value=h.dashSize+h.gapSize,c.scale.value=h.scale}(i,s)):s.isPointsMaterial?function(c,h,u,d){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,c.size.value=h.size*u,c.scale.value=.5*d,h.map&&(c.map.value=h.map,t(h.map,c.uvTransform)),h.alphaMap&&(c.alphaMap.value=h.alphaMap,t(h.alphaMap,c.alphaMapTransform)),h.alphaTest>0&&(c.alphaTest.value=h.alphaTest)}(i,s,a,o):s.isSpriteMaterial?function(c,h){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,c.rotation.value=h.rotation,h.map&&(c.map.value=h.map,t(h.map,c.mapTransform)),h.alphaMap&&(c.alphaMap.value=h.alphaMap,t(h.alphaMap,c.alphaMapTransform)),h.alphaTest>0&&(c.alphaTest.value=h.alphaTest)}(i,s):s.isShadowMaterial?(i.color.value.copy(s.color),i.opacity.value=s.opacity):s.isShaderMaterial&&(s.uniformsNeedUpdate=!1)}}}function $g(r,e,t,n){let i={},s={},a=[],o=t.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(u,d,p,f){let v=u.value,m=d+"_"+p;if(f[m]===void 0)return f[m]=typeof v=="number"||typeof v=="boolean"?v:v.clone(),!0;{let x=f[m];if(typeof v=="number"||typeof v=="boolean"){if(x!==v)return f[m]=v,!0}else if(x.equals(v)===!1)return x.copy(v),!0}return!1}function c(u){let d={boundary:0,storage:0};return typeof u=="number"||typeof u=="boolean"?(d.boundary=4,d.storage=4):u.isVector2?(d.boundary=8,d.storage=8):u.isVector3||u.isColor?(d.boundary=16,d.storage=12):u.isVector4?(d.boundary=16,d.storage=16):u.isMatrix3?(d.boundary=48,d.storage=48):u.isMatrix4?(d.boundary=64,d.storage=64):u.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",u),d}function h(u){let d=u.target;d.removeEventListener("dispose",h);let p=a.indexOf(d.__bindingPointIndex);a.splice(p,1),r.deleteBuffer(i[d.id]),delete i[d.id],delete s[d.id]}return{bind:function(u,d){let p=d.program;n.uniformBlockBinding(u,p)},update:function(u,d){let p=i[u.id];p===void 0&&(function(m){let x=m.uniforms,g=0,y=16;for(let T=0,E=x.length;T<E;T++){let w=Array.isArray(x[T])?x[T]:[x[T]];for(let N=0,b=w.length;N<b;N++){let L=w[N],I=Array.isArray(L.value)?L.value:[L.value];for(let P=0,k=I.length;P<k;P++){let U=c(I[P]),$=g%y;$!==0&&y-$<U.boundary&&(g+=y-$),L.__data=new Float32Array(U.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=g,g+=U.storage}}}let _=g%y;_>0&&(g+=y-_),m.__size=g,m.__cache={}}(u),p=function(m){let x=function(){for(let T=0;T<o;T++)if(a.indexOf(T)===-1)return a.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}();m.__bindingPointIndex=x;let g=r.createBuffer(),y=m.__size,_=m.usage;return r.bindBuffer(r.UNIFORM_BUFFER,g),r.bufferData(r.UNIFORM_BUFFER,y,_),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,x,g),g}(u),i[u.id]=p,u.addEventListener("dispose",h));let f=d.program;n.updateUBOMapping(u,f);let v=e.render.frame;s[u.id]!==v&&(function(m){let x=i[m.id],g=m.uniforms,y=m.__cache;r.bindBuffer(r.UNIFORM_BUFFER,x);for(let _=0,T=g.length;_<T;_++){let E=Array.isArray(g[_])?g[_]:[g[_]];for(let w=0,N=E.length;w<N;w++){let b=E[w];if(l(b,_,w,y)===!0){let L=b.__offset,I=Array.isArray(b.value)?b.value:[b.value],P=0;for(let k=0;k<I.length;k++){let U=I[k],$=c(U);typeof U=="number"||typeof U=="boolean"?(b.__data[0]=U,r.bufferSubData(r.UNIFORM_BUFFER,L+P,b.__data)):U.isMatrix3?(b.__data[0]=U.elements[0],b.__data[1]=U.elements[1],b.__data[2]=U.elements[2],b.__data[3]=0,b.__data[4]=U.elements[3],b.__data[5]=U.elements[4],b.__data[6]=U.elements[5],b.__data[7]=0,b.__data[8]=U.elements[6],b.__data[9]=U.elements[7],b.__data[10]=U.elements[8],b.__data[11]=0):(U.toArray(b.__data,P),P+=$.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,L,b.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}(u),s[u.id]=v)},dispose:function(){for(let u in i)r.deleteBuffer(i[u]);a=[],i={},s={}}}}var Ea=class{constructor(e={}){let{canvas:t=lm(),context:n=null,depth:i=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e,d;this.isWebGLRenderer=!0,d=n!==null?n.getContextAttributes().alpha:a;let p=new Uint32Array(4),f=new Int32Array(4),v=null,m=null,x=[],g=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ct,this._useLegacyLights=!1,this.toneMapping=Bi,this.toneMappingExposure=1;let y=this,_=!1,T=0,E=0,w=null,N=-1,b=null,L=new _t,I=new _t,P=null,k=new ve(0),U=0,$=t.width,he=t.height,te=1,q=null,K=null,z=new _t(0,0,$,he),X=new _t(0,0,$,he),fe=!1,A=new As,R=!1,H=!1,Z=null,D=new Le,Y=new re,B=new M,O={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function G(){return w===null?te:1}let ne,ee,S,ae,V,W,oe,ge,xe,Me,Ie,be,we,Fe,Nt,Re,Qe,Ae,jn,Ln,Q,ue,me,We,F=n;function Te(C,j){for(let J=0;J<C.length;J++){let le=C[J],ie=t.getContext(le,j);if(ie!==null)return ie}return null}try{let C={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${zc}`),t.addEventListener("webglcontextlost",Xe,!1),t.addEventListener("webglcontextrestored",ke,!1),t.addEventListener("webglcontextcreationerror",dt,!1),F===null){let j=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&j.shift(),F=Te(j,C),F===null)throw Te(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&F instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),F.getShaderPrecisionFormat===void 0&&(F.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}function St(){ne=new Dm(F),ee=new Cm(F,ne,e),ne.init(ee),ue=new Zg(F,ne,ee),S=new qg(F,ne,ee),ae=new Om(F),V=new kg,W=new Yg(F,ne,S,V,ee,ue,ae),oe=new Lm(y),ge=new Im(y),xe=new Tm(F,ee),me=new Am(F,ne,xe,ee),Me=new Nm(F,xe,ae,me),Ie=new Hm(F,Me,xe,ae),jn=new Fm(F,ee,W),Re=new Pm(V),be=new Bg(y,oe,ge,ne,ee,me,Re),we=new Jg(y,V),Fe=new Hg,Nt=new jg(ne,ee),Ae=new wm(y,oe,ge,S,Ie,d,l),Qe=new Xg(y,Ie,ee),We=new $g(F,ae,ee,S),Ln=new Rm(F,ne,ae,ee),Q=new Um(F,ne,ae,ee),ae.programs=be.programs,y.capabilities=ee,y.extensions=ne,y.properties=V,y.renderLists=Fe,y.shadowMap=Qe,y.state=S,y.info=ae}St();let ot=new ch(y,F);function Xe(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),_=!0}function ke(){console.log("THREE.WebGLRenderer: Context Restored."),_=!1;let C=ae.autoReset,j=Qe.enabled,J=Qe.autoUpdate,le=Qe.needsUpdate,ie=Qe.type;St(),ae.autoReset=C,Qe.enabled=j,Qe.autoUpdate=J,Qe.needsUpdate=le,Qe.type=ie}function dt(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Ke(C){let j=C.target;j.removeEventListener("dispose",Ke),function(J){(function(le){let ie=V.get(le).programs;ie!==void 0&&(ie.forEach(function(ye){be.releaseProgram(ye)}),le.isShaderMaterial&&be.releaseShaderCache(le))})(J),V.remove(J)}(j)}function Et(C,j,J){C.transparent===!0&&C.side===2&&C.forceSinglePass===!1?(C.side=Kt,C.needsUpdate=!0,jr(C,j,J),C.side=Kn,C.needsUpdate=!0,jr(C,j,J),C.side=2):jr(C,j,J)}this.xr=ot,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let C=ne.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){let C=ne.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(C){C!==void 0&&(te=C,this.setSize($,he,!1))},this.getSize=function(C){return C.set($,he)},this.setSize=function(C,j,J=!0){ot.isPresenting?console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting."):($=C,he=j,t.width=Math.floor(C*te),t.height=Math.floor(j*te),J===!0&&(t.style.width=C+"px",t.style.height=j+"px"),this.setViewport(0,0,C,j))},this.getDrawingBufferSize=function(C){return C.set($*te,he*te).floor()},this.setDrawingBufferSize=function(C,j,J){$=C,he=j,te=J,t.width=Math.floor(C*J),t.height=Math.floor(j*J),this.setViewport(0,0,C,j)},this.getCurrentViewport=function(C){return C.copy(L)},this.getViewport=function(C){return C.copy(z)},this.setViewport=function(C,j,J,le){C.isVector4?z.set(C.x,C.y,C.z,C.w):z.set(C,j,J,le),S.viewport(L.copy(z).multiplyScalar(te).floor())},this.getScissor=function(C){return C.copy(X)},this.setScissor=function(C,j,J,le){C.isVector4?X.set(C.x,C.y,C.z,C.w):X.set(C,j,J,le),S.scissor(I.copy(X).multiplyScalar(te).floor())},this.getScissorTest=function(){return fe},this.setScissorTest=function(C){S.setScissorTest(fe=C)},this.setOpaqueSort=function(C){q=C},this.setTransparentSort=function(C){K=C},this.getClearColor=function(C){return C.copy(Ae.getClearColor())},this.setClearColor=function(){Ae.setClearColor.apply(Ae,arguments)},this.getClearAlpha=function(){return Ae.getClearAlpha()},this.setClearAlpha=function(){Ae.setClearAlpha.apply(Ae,arguments)},this.clear=function(C=!0,j=!0,J=!0){let le=0;if(C){let ie=!1;if(w!==null){let ye=w.texture.format;ie=ye===jp||ye===Wp||ye===Vp}if(ie){let ye=w.texture.type,Ne=ye===vr||ye===Ni||ye===qh||ye===yr||ye===zp||ye===Gp,Ue=Ae.getClearColor(),qe=Ae.getClearAlpha(),Je=Ue.r,et=Ue.g,nt=Ue.b;Ne?(p[0]=Je,p[1]=et,p[2]=nt,p[3]=qe,F.clearBufferuiv(F.COLOR,0,p)):(f[0]=Je,f[1]=et,f[2]=nt,f[3]=qe,F.clearBufferiv(F.COLOR,0,f))}else le|=F.COLOR_BUFFER_BIT}j&&(le|=F.DEPTH_BUFFER_BIT),J&&(le|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(le)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Xe,!1),t.removeEventListener("webglcontextrestored",ke,!1),t.removeEventListener("webglcontextcreationerror",dt,!1),Fe.dispose(),Nt.dispose(),V.dispose(),oe.dispose(),ge.dispose(),Ie.dispose(),me.dispose(),We.dispose(),be.dispose(),ot.dispose(),ot.removeEventListener("sessionstart",or),ot.removeEventListener("sessionend",Vr),Z&&(Z.dispose(),Z=null),xn.stop()},this.renderBufferDirect=function(C,j,J,le,ie,ye){j===null&&(j=O);let Ne=ie.isMesh&&ie.matrixWorld.determinant()<0,Ue=function(Gt,_n,hn,it,rt){_n.isScene!==!0&&(_n=O),W.resetTextureUnits();let ea=_n.fog,$l=it.isMeshStandardMaterial?_n.environment:null,qf=w===null?y.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Wt,eo=(it.isMeshStandardMaterial?ge:oe).get(it.envMap||$l),Yf=it.vertexColors===!0&&!!hn.attributes.color&&hn.attributes.color.itemSize===4,Zf=!!hn.attributes.tangent&&(!!it.normalMap||it.anisotropy>0),Kf=!!hn.morphAttributes.position,Jf=!!hn.morphAttributes.normal,$f=!!hn.morphAttributes.color,Xu=Bi;it.toneMapped&&(w!==null&&w.isXRRenderTarget!==!0||(Xu=y.toneMapping));let qu=hn.morphAttributes.position||hn.morphAttributes.normal||hn.morphAttributes.color,Qf=qu!==void 0?qu.length:0,lt=V.get(it),em=m.state.lights;if(R===!0&&(H===!0||Gt!==b)){let Mn=Gt===b&&it.id===N;Re.setState(it,Gt,Mn)}let Nn=!1;it.version===lt.__version?lt.needsLights&&lt.lightsStateVersion!==em.state.version||lt.outputColorSpace!==qf||rt.isBatchedMesh&&lt.batching===!1?Nn=!0:rt.isBatchedMesh||lt.batching!==!0?rt.isInstancedMesh&&lt.instancing===!1?Nn=!0:rt.isInstancedMesh||lt.instancing!==!0?rt.isSkinnedMesh&&lt.skinning===!1?Nn=!0:rt.isSkinnedMesh||lt.skinning!==!0?rt.isInstancedMesh&&lt.instancingColor===!0&&rt.instanceColor===null||rt.isInstancedMesh&&lt.instancingColor===!1&&rt.instanceColor!==null||lt.envMap!==eo||it.fog===!0&&lt.fog!==ea?Nn=!0:lt.numClippingPlanes===void 0||lt.numClippingPlanes===Re.numPlanes&&lt.numIntersection===Re.numIntersection?(lt.vertexAlphas!==Yf||lt.vertexTangents!==Zf||lt.morphTargets!==Kf||lt.morphNormals!==Jf||lt.morphColors!==$f||lt.toneMapping!==Xu||ee.isWebGL2===!0&&lt.morphTargetsCount!==Qf)&&(Nn=!0):Nn=!0:Nn=!0:Nn=!0:Nn=!0:(Nn=!0,lt.__version=it.version);let cr=lt.currentProgram;Nn===!0&&(cr=jr(it,_n,rt));let Yu=!1,ta=!1,Ql=!1,en=cr.getUniforms(),hr=lt.uniforms;if(S.useProgram(cr.program)&&(Yu=!0,ta=!0,Ql=!0),it.id!==N&&(N=it.id,ta=!0),Yu||b!==Gt){en.setValue(F,"projectionMatrix",Gt.projectionMatrix),en.setValue(F,"viewMatrix",Gt.matrixWorldInverse);let Mn=en.map.cameraPosition;Mn!==void 0&&Mn.setValue(F,B.setFromMatrixPosition(Gt.matrixWorld)),ee.logarithmicDepthBuffer&&en.setValue(F,"logDepthBufFC",2/(Math.log(Gt.far+1)/Math.LN2)),(it.isMeshPhongMaterial||it.isMeshToonMaterial||it.isMeshLambertMaterial||it.isMeshBasicMaterial||it.isMeshStandardMaterial||it.isShaderMaterial)&&en.setValue(F,"isOrthographic",Gt.isOrthographicCamera===!0),b!==Gt&&(b=Gt,ta=!0,Ql=!0)}if(rt.isSkinnedMesh){en.setOptional(F,rt,"bindMatrix"),en.setOptional(F,rt,"bindMatrixInverse");let Mn=rt.skeleton;Mn&&(ee.floatVertexTextures?(Mn.boneTexture===null&&Mn.computeBoneTexture(),en.setValue(F,"boneTexture",Mn.boneTexture,W)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}rt.isBatchedMesh&&(en.setOptional(F,rt,"batchingTexture"),en.setValue(F,"batchingTexture",rt._matricesTexture,W));let ec=hn.morphAttributes;(ec.position!==void 0||ec.normal!==void 0||ec.color!==void 0&&ee.isWebGL2===!0)&&jn.update(rt,hn,cr),(ta||lt.receiveShadow!==rt.receiveShadow)&&(lt.receiveShadow=rt.receiveShadow,en.setValue(F,"receiveShadow",rt.receiveShadow)),it.isMeshGouraudMaterial&&it.envMap!==null&&(hr.envMap.value=eo,hr.flipEnvMap.value=eo.isCubeTexture&&eo.isRenderTargetTexture===!1?-1:1),ta&&(en.setValue(F,"toneMappingExposure",y.toneMappingExposure),lt.needsLights&&(Un=Ql,(Xn=hr).ambientLightColor.needsUpdate=Un,Xn.lightProbe.needsUpdate=Un,Xn.directionalLights.needsUpdate=Un,Xn.directionalLightShadows.needsUpdate=Un,Xn.pointLights.needsUpdate=Un,Xn.pointLightShadows.needsUpdate=Un,Xn.spotLights.needsUpdate=Un,Xn.spotLightShadows.needsUpdate=Un,Xn.rectAreaLights.needsUpdate=Un,Xn.hemisphereLights.needsUpdate=Un),ea&&it.fog===!0&&we.refreshFogUniforms(hr,ea),we.refreshMaterialUniforms(hr,it,te,he,Z),ys.upload(F,ze(lt),hr,W));var Xn,Un;if(it.isShaderMaterial&&it.uniformsNeedUpdate===!0&&(ys.upload(F,ze(lt),hr,W),it.uniformsNeedUpdate=!1),it.isSpriteMaterial&&en.setValue(F,"center",rt.center),en.setValue(F,"modelViewMatrix",rt.modelViewMatrix),en.setValue(F,"normalMatrix",rt.normalMatrix),en.setValue(F,"modelMatrix",rt.matrixWorld),it.isShaderMaterial||it.isRawShaderMaterial){let Mn=it.uniformsGroups;for(let tc=0,tm=Mn.length;tc<tm;tc++)if(ee.isWebGL2){let Zu=Mn[tc];We.update(Zu,cr),We.bind(Zu,cr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return cr}(C,j,J,le,ie);S.setMaterial(le,Ne);let qe=J.index,Je=1;if(le.wireframe===!0){if(qe=Me.getWireframeAttribute(J),qe===void 0)return;Je=2}let et=J.drawRange,nt=J.attributes.position,Tt=et.start*Je,Dn=(et.start+et.count)*Je;ye!==null&&(Tt=Math.max(Tt,ye.start*Je),Dn=Math.min(Dn,(ye.start+ye.count)*Je)),qe!==null?(Tt=Math.max(Tt,0),Dn=Math.min(Dn,qe.count)):nt!=null&&(Tt=Math.max(Tt,0),Dn=Math.min(Dn,nt.count));let ni=Dn-Tt;if(ni<0||ni===1/0)return;let lr;me.setup(ie,le,Ue,J,qe);let wt=Ln;if(qe!==null&&(lr=xe.get(qe),wt=Q,wt.setIndex(lr)),ie.isMesh)le.wireframe===!0?(S.setLineWidth(le.wireframeLinewidth*G()),wt.setMode(F.LINES)):wt.setMode(F.TRIANGLES);else if(ie.isLine){let Gt=le.linewidth;Gt===void 0&&(Gt=1),S.setLineWidth(Gt*G()),ie.isLineSegments?wt.setMode(F.LINES):ie.isLineLoop?wt.setMode(F.LINE_LOOP):wt.setMode(F.LINE_STRIP)}else ie.isPoints?wt.setMode(F.POINTS):ie.isSprite&&wt.setMode(F.TRIANGLES);if(ie.isBatchedMesh)wt.renderMultiDraw(ie._multiDrawStarts,ie._multiDrawCounts,ie._multiDrawCount);else if(ie.isInstancedMesh)wt.renderInstances(Tt,ni,ie.count);else if(J.isInstancedBufferGeometry){let Gt=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,_n=Math.min(J.instanceCount,Gt);wt.renderInstances(Tt,ni,_n)}else wt.render(Tt,ni)},this.compile=function(C,j,J=null){J===null&&(J=C),m=Nt.get(J),m.init(),g.push(m),J.traverseVisible(function(ie){ie.isLight&&ie.layers.test(j.layers)&&(m.pushLight(ie),ie.castShadow&&m.pushShadow(ie))}),C!==J&&C.traverseVisible(function(ie){ie.isLight&&ie.layers.test(j.layers)&&(m.pushLight(ie),ie.castShadow&&m.pushShadow(ie))}),m.setupLights(y._useLegacyLights);let le=new Set;return C.traverse(function(ie){let ye=ie.material;if(ye)if(Array.isArray(ye))for(let Ne=0;Ne<ye.length;Ne++){let Ue=ye[Ne];Et(Ue,J,ie),le.add(Ue)}else Et(ye,J,ie),le.add(ye)}),g.pop(),m=null,le},this.compileAsync=function(C,j,J=null){let le=this.compile(C,j,J);return new Promise(ie=>{function ye(){le.forEach(function(Ne){V.get(Ne).currentProgram.isReady()&&le.delete(Ne)}),le.size!==0?setTimeout(ye,10):ie(C)}ne.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let Qs=null;function or(){xn.stop()}function Vr(){xn.start()}let xn=new Qp;function Ti(C,j,J,le){if(C.visible===!1)return;if(C.layers.test(j.layers)){if(C.isGroup)J=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(j);else if(C.isLight)m.pushLight(C),C.castShadow&&m.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||A.intersectsSprite(C)){le&&B.setFromMatrixPosition(C.matrixWorld).applyMatrix4(D);let ye=Ie.update(C),Ne=C.material;Ne.visible&&v.push(C,ye,Ne,J,B.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||A.intersectsObject(C))){let ye=Ie.update(C),Ne=C.material;if(le&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),B.copy(C.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),B.copy(ye.boundingSphere.center)),B.applyMatrix4(C.matrixWorld).applyMatrix4(D)),Array.isArray(Ne)){let Ue=ye.groups;for(let qe=0,Je=Ue.length;qe<Je;qe++){let et=Ue[qe],nt=Ne[et.materialIndex];nt&&nt.visible&&v.push(C,ye,nt,J,B.z,et)}}else Ne.visible&&v.push(C,ye,Ne,J,B.z,null)}}let ie=C.children;for(let ye=0,Ne=ie.length;ye<Ne;ye++)Ti(ie[ye],j,J,le)}function In(C,j,J,le){let ie=C.opaque,ye=C.transmissive,Ne=C.transparent;m.setupLightsView(J),R===!0&&Re.setGlobalState(y.clippingPlanes,J),ye.length>0&&function(Ue,qe,Je,et){if((Je.isScene===!0?Je.overrideMaterial:null)!==null)return;let Tt=ee.isWebGL2;Z===null&&(Z=new an(1,1,{generateMipmaps:!0,type:ne.has("EXT_color_buffer_half_float")?Gn:vr,minFilter:Mr,samples:Tt?4:0})),y.getDrawingBufferSize(Y),Tt?Z.setSize(Y.x,Y.y):Z.setSize(jo(Y.x),jo(Y.y));let Dn=y.getRenderTarget();y.setRenderTarget(Z),y.getClearColor(k),U=y.getClearAlpha(),U<1&&y.setClearColor(16777215,.5),y.clear();let ni=y.toneMapping;y.toneMapping=Bi,wi(Ue,Je,et),W.updateMultisampleRenderTarget(Z),W.updateRenderTargetMipmap(Z);let lr=!1;for(let wt=0,Gt=qe.length;wt<Gt;wt++){let _n=qe[wt],hn=_n.object,it=_n.geometry,rt=_n.material,ea=_n.group;if(rt.side===2&&hn.layers.test(et.layers)){let $l=rt.side;rt.side=Kt,rt.needsUpdate=!0,Wr(hn,Je,et,it,rt,ea),rt.side=$l,rt.needsUpdate=!0,lr=!0}}lr===!0&&(W.updateMultisampleRenderTarget(Z),W.updateRenderTargetMipmap(Z)),y.setRenderTarget(Dn),y.setClearColor(k,U),y.toneMapping=ni}(ie,ye,j,J),le&&S.viewport(L.copy(le)),ie.length>0&&wi(ie,j,J),ye.length>0&&wi(ye,j,J),Ne.length>0&&wi(Ne,j,J),S.buffers.depth.setTest(!0),S.buffers.depth.setMask(!0),S.buffers.color.setMask(!0),S.setPolygonOffset(!1)}function wi(C,j,J){let le=j.isScene===!0?j.overrideMaterial:null;for(let ie=0,ye=C.length;ie<ye;ie++){let Ne=C[ie],Ue=Ne.object,qe=Ne.geometry,Je=le===null?Ne.material:le,et=Ne.group;Ue.layers.test(J.layers)&&Wr(Ue,j,J,qe,Je,et)}}function Wr(C,j,J,le,ie,ye){C.onBeforeRender(y,j,J,le,ie,ye),C.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),ie.onBeforeRender(y,j,J,le,C,ye),ie.transparent===!0&&ie.side===2&&ie.forceSinglePass===!1?(ie.side=Kt,ie.needsUpdate=!0,y.renderBufferDirect(J,j,le,ie,C,ye),ie.side=Kn,ie.needsUpdate=!0,y.renderBufferDirect(J,j,le,ie,C,ye),ie.side=2):y.renderBufferDirect(J,j,le,ie,C,ye),C.onAfterRender(y,j,J,le,ie,ye)}function jr(C,j,J){j.isScene!==!0&&(j=O);let le=V.get(C),ie=m.state.lights,ye=m.state.shadowsArray,Ne=ie.state.version,Ue=be.getParameters(C,ie.state,ye,j,J),qe=be.getProgramCacheKey(Ue),Je=le.programs;le.environment=C.isMeshStandardMaterial?j.environment:null,le.fog=j.fog,le.envMap=(C.isMeshStandardMaterial?ge:oe).get(C.envMap||le.environment),Je===void 0&&(C.addEventListener("dispose",Ke),Je=new Map,le.programs=Je);let et=Je.get(qe);if(et!==void 0){if(le.currentProgram===et&&le.lightsStateVersion===Ne)return Lt(C,Ue),et}else Ue.uniforms=be.getUniforms(C),C.onBuild(J,Ue,y),C.onBeforeCompile(Ue,y),et=be.acquireProgram(Ue,qe),Je.set(qe,et),le.uniforms=Ue.uniforms;let nt=le.uniforms;return(C.isShaderMaterial||C.isRawShaderMaterial)&&C.clipping!==!0||(nt.clippingPlanes=Re.uniform),Lt(C,Ue),le.needsLights=function(Tt){return Tt.isMeshLambertMaterial||Tt.isMeshToonMaterial||Tt.isMeshPhongMaterial||Tt.isMeshStandardMaterial||Tt.isShadowMaterial||Tt.isShaderMaterial&&Tt.lights===!0}(C),le.lightsStateVersion=Ne,le.needsLights&&(nt.ambientLightColor.value=ie.state.ambient,nt.lightProbe.value=ie.state.probe,nt.directionalLights.value=ie.state.directional,nt.directionalLightShadows.value=ie.state.directionalShadow,nt.spotLights.value=ie.state.spot,nt.spotLightShadows.value=ie.state.spotShadow,nt.rectAreaLights.value=ie.state.rectArea,nt.ltc_1.value=ie.state.rectAreaLTC1,nt.ltc_2.value=ie.state.rectAreaLTC2,nt.pointLights.value=ie.state.point,nt.pointLightShadows.value=ie.state.pointShadow,nt.hemisphereLights.value=ie.state.hemi,nt.directionalShadowMap.value=ie.state.directionalShadowMap,nt.directionalShadowMatrix.value=ie.state.directionalShadowMatrix,nt.spotShadowMap.value=ie.state.spotShadowMap,nt.spotLightMatrix.value=ie.state.spotLightMatrix,nt.spotLightMap.value=ie.state.spotLightMap,nt.pointShadowMap.value=ie.state.pointShadowMap,nt.pointShadowMatrix.value=ie.state.pointShadowMatrix),le.currentProgram=et,le.uniformsList=null,et}function ze(C){if(C.uniformsList===null){let j=C.currentProgram.getUniforms();C.uniformsList=ys.seqWithValue(j.seq,C.uniforms)}return C.uniformsList}function Lt(C,j){let J=V.get(C);J.outputColorSpace=j.outputColorSpace,J.batching=j.batching,J.instancing=j.instancing,J.instancingColor=j.instancingColor,J.skinning=j.skinning,J.morphTargets=j.morphTargets,J.morphNormals=j.morphNormals,J.morphColors=j.morphColors,J.morphTargetsCount=j.morphTargetsCount,J.numClippingPlanes=j.numClippingPlanes,J.numIntersection=j.numClipIntersection,J.vertexAlphas=j.vertexAlphas,J.vertexTangents=j.vertexTangents,J.toneMapping=j.toneMapping}xn.setAnimationLoop(function(C){Qs&&Qs(C)}),typeof self<"u"&&xn.setContext(self),this.setAnimationLoop=function(C){Qs=C,ot.setAnimationLoop(C),C===null?xn.stop():xn.start()},ot.addEventListener("sessionstart",or),ot.addEventListener("sessionend",Vr),this.render=function(C,j){if(j!==void 0&&j.isCamera!==!0)return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");if(_===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),ot.enabled===!0&&ot.isPresenting===!0&&(ot.cameraAutoUpdate===!0&&ot.updateCamera(j),j=ot.getCamera()),C.isScene===!0&&C.onBeforeRender(y,C,j,w),m=Nt.get(C,g.length),m.init(),g.push(m),D.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),A.setFromProjectionMatrix(D),H=this.localClippingEnabled,R=Re.init(this.clippingPlanes,H),v=Fe.get(C,x.length),v.init(),x.push(v),Ti(C,j,0,y.sortObjects),v.finish(),y.sortObjects===!0&&v.sort(q,K),this.info.render.frame++,R===!0&&Re.beginShadows();let J=m.state.shadowsArray;if(Qe.render(J,C,j),R===!0&&Re.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ae.render(v,C),m.setupLights(y._useLegacyLights),j.isArrayCamera){let le=j.cameras;for(let ie=0,ye=le.length;ie<ye;ie++){let Ne=le[ie];In(v,C,Ne,Ne.viewport)}}else In(v,C,j);w!==null&&(W.updateMultisampleRenderTarget(w),W.updateRenderTargetMipmap(w)),C.isScene===!0&&C.onAfterRender(y,C,j),me.resetDefaultState(),N=-1,b=null,g.pop(),m=g.length>0?g[g.length-1]:null,x.pop(),v=x.length>0?x[x.length-1]:null},this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(C,j,J){V.get(C.texture).__webglTexture=j,V.get(C.depthTexture).__webglTexture=J;let le=V.get(C);le.__hasExternalTextures=!0,le.__hasExternalTextures&&(le.__autoAllocateDepthBuffer=J===void 0,le.__autoAllocateDepthBuffer||ne.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),le.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,j){let J=V.get(C);J.__webglFramebuffer=j,J.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(C,j=0,J=0){w=C,T=j,E=J;let le=!0,ie=null,ye=!1,Ne=!1;if(C){let Ue=V.get(C);Ue.__useDefaultFramebuffer!==void 0?(S.bindFramebuffer(F.FRAMEBUFFER,null),le=!1):Ue.__webglFramebuffer===void 0?W.setupRenderTarget(C):Ue.__hasExternalTextures&&W.rebindTextures(C,V.get(C.texture).__webglTexture,V.get(C.depthTexture).__webglTexture);let qe=C.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(Ne=!0);let Je=V.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(ie=Array.isArray(Je[j])?Je[j][J]:Je[j],ye=!0):ie=ee.isWebGL2&&C.samples>0&&W.useMultisampledRTT(C)===!1?V.get(C).__webglMultisampledFramebuffer:Array.isArray(Je)?Je[J]:Je,L.copy(C.viewport),I.copy(C.scissor),P=C.scissorTest}else L.copy(z).multiplyScalar(te).floor(),I.copy(X).multiplyScalar(te).floor(),P=fe;if(S.bindFramebuffer(F.FRAMEBUFFER,ie)&&ee.drawBuffers&&le&&S.drawBuffers(C,ie),S.viewport(L),S.scissor(I),S.setScissorTest(P),ye){let Ue=V.get(C.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ue.__webglTexture,J)}else if(Ne){let Ue=V.get(C.texture),qe=j||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ue.__webglTexture,J||0,qe)}N=-1},this.readRenderTargetPixels=function(C,j,J,le,ie,ye,Ne){if(!C||!C.isWebGLRenderTarget)return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ue=V.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ne!==void 0&&(Ue=Ue[Ne]),Ue){S.bindFramebuffer(F.FRAMEBUFFER,Ue);try{let qe=C.texture,Je=qe.format,et=qe.type;if(Je!==Hn&&ue.convert(Je)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_FORMAT))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");let nt=et===Gn&&(ne.has("EXT_color_buffer_half_float")||ee.isWebGL2&&ne.has("EXT_color_buffer_float"));if(!(et===vr||ue.convert(et)===F.getParameter(F.IMPLEMENTATION_COLOR_READ_TYPE)||et===ui&&(ee.isWebGL2||ne.has("OES_texture_float")||ne.has("WEBGL_color_buffer_float"))||nt))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");j>=0&&j<=C.width-le&&J>=0&&J<=C.height-ie&&F.readPixels(j,J,le,ie,ue.convert(Je),ue.convert(et),ye)}finally{let qe=w!==null?V.get(w).__webglFramebuffer:null;S.bindFramebuffer(F.FRAMEBUFFER,qe)}}},this.copyFramebufferToTexture=function(C,j,J=0){let le=Math.pow(2,-J),ie=Math.floor(j.image.width*le),ye=Math.floor(j.image.height*le);W.setTexture2D(j,0),F.copyTexSubImage2D(F.TEXTURE_2D,J,0,0,C.x,C.y,ie,ye),S.unbindTexture()},this.copyTextureToTexture=function(C,j,J,le=0){let ie=j.image.width,ye=j.image.height,Ne=ue.convert(J.format),Ue=ue.convert(J.type);W.setTexture2D(J,0),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,J.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,J.unpackAlignment),j.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,le,C.x,C.y,ie,ye,Ne,Ue,j.image.data):j.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,le,C.x,C.y,j.mipmaps[0].width,j.mipmaps[0].height,Ne,j.mipmaps[0].data):F.texSubImage2D(F.TEXTURE_2D,le,C.x,C.y,Ne,Ue,j.image),le===0&&J.generateMipmaps&&F.generateMipmap(F.TEXTURE_2D),S.unbindTexture()},this.copyTextureToTexture3D=function(C,j,J,le,ie=0){if(y.isWebGL1Renderer)return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");let ye=C.max.x-C.min.x+1,Ne=C.max.y-C.min.y+1,Ue=C.max.z-C.min.z+1,qe=ue.convert(le.format),Je=ue.convert(le.type),et;if(le.isData3DTexture)W.setTexture3D(le,0),et=F.TEXTURE_3D;else{if(!le.isDataArrayTexture&&!le.isCompressedArrayTexture)return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");W.setTexture2DArray(le,0),et=F.TEXTURE_2D_ARRAY}F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,le.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,le.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,le.unpackAlignment);let nt=F.getParameter(F.UNPACK_ROW_LENGTH),Tt=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Dn=F.getParameter(F.UNPACK_SKIP_PIXELS),ni=F.getParameter(F.UNPACK_SKIP_ROWS),lr=F.getParameter(F.UNPACK_SKIP_IMAGES),wt=J.isCompressedTexture?J.mipmaps[ie]:J.image;F.pixelStorei(F.UNPACK_ROW_LENGTH,wt.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,wt.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,C.min.x),F.pixelStorei(F.UNPACK_SKIP_ROWS,C.min.y),F.pixelStorei(F.UNPACK_SKIP_IMAGES,C.min.z),J.isDataTexture||J.isData3DTexture?F.texSubImage3D(et,ie,j.x,j.y,j.z,ye,Ne,Ue,qe,Je,wt.data):J.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),F.compressedTexSubImage3D(et,ie,j.x,j.y,j.z,ye,Ne,Ue,qe,wt.data)):F.texSubImage3D(et,ie,j.x,j.y,j.z,ye,Ne,Ue,qe,Je,wt),F.pixelStorei(F.UNPACK_ROW_LENGTH,nt),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Tt),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Dn),F.pixelStorei(F.UNPACK_SKIP_ROWS,ni),F.pixelStorei(F.UNPACK_SKIP_IMAGES,lr),ie===0&&le.generateMipmaps&&F.generateMipmap(et),S.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?W.setTextureCube(C,0):C.isData3DTexture?W.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?W.setTexture2DArray(C,0):W.setTexture2D(C,0),S.unbindTexture()},this.resetState=function(){T=0,E=0,w=null,S.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Es}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===Yh?"display-p3":"srgb",t.unpackColorSpace=st.workingColorSpace===xl?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ct?_r:Yp}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===_r?ct:Wt}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},hh=class extends Ea{};hh.prototype.isWebGL1Renderer=!0;var Qo=class r{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new ve(e),this.near=t,this.far=n}clone(){return new r(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Hi=class extends vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},Cs=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Xc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=En()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=En()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=En()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},rn=new M,Er=class r{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)rn.fromBufferAttribute(this,t),rn.applyMatrix4(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)rn.fromBufferAttribute(this,t),rn.applyNormalMatrix(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)rn.fromBufferAttribute(this,t),rn.transformDirection(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}setX(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Zn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Zn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Zn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Zn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),i=gt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),i=gt(i,this.array),s=gt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Mt(new this.array.constructor(t),this.itemSize,this.normalized)}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new r(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},on=class extends pn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ve(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ls,oa=new M,cs=new M,hs=new M,us=new re,la=new re,af=new Le,So=new M,ca=new M,To=new M,op=new re,Pc=new re,lp=new re,fn=class extends vt{constructor(e=new on){if(super(),this.isSprite=!0,this.type="Sprite",ls===void 0){ls=new at;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Cs(t,5);ls.setIndex([0,1,2,0,2,3]),ls.setAttribute("position",new Er(n,3,0,!1)),ls.setAttribute("uv",new Er(n,2,3,!1))}this.geometry=ls,this.material=e,this.center=new re(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),cs.setFromMatrixScale(this.matrixWorld),af.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),hs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&cs.multiplyScalar(-hs.z);let n=this.material.rotation,i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));let a=this.center;wo(So.set(-.5,-.5,0),hs,a,cs,i,s),wo(ca.set(.5,-.5,0),hs,a,cs,i,s),wo(To.set(.5,.5,0),hs,a,cs,i,s),op.set(0,0),Pc.set(1,0),lp.set(1,1);let o=e.ray.intersectTriangle(So,ca,To,!1,oa);if(o===null&&(wo(ca.set(-.5,.5,0),hs,a,cs,i,s),Pc.set(0,1),o=e.ray.intersectTriangle(So,To,ca,!1,oa),o===null))return;let l=e.ray.origin.distanceTo(oa);l<e.near||l>e.far||t.push({distance:l,point:oa.clone(),uv:Ui.getInterpolation(oa,So,ca,To,op,Pc,lp,new re),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function wo(r,e,t,n,i,s){us.subVectors(r,t).addScalar(.5).multiply(n),i!==void 0?(la.x=s*us.x-i*us.y,la.y=i*us.x+s*us.y):la.copy(us),r.copy(e),r.x+=la.x,r.y+=la.y,r.applyMatrix4(af)}var Cv=new M,Pv=new M;var cp=new M,hp=new _t,up=new _t,Qg=new M,dp=new Le,Ao=new M,Lc=new dn,pp=new Le,Ic=new fi,el=class extends _e{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Ku,this.bindMatrix=new Le,this.bindMatrixInverse=new Le,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Jt),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ao),this.boundingBox.expandByPoint(Ao)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new dn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ao),this.boundingSphere.expandByPoint(Ao)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Lc.copy(this.boundingSphere),Lc.applyMatrix4(i),e.ray.intersectsSphere(Lc)!==!1&&(pp.copy(i).invert(),Ic.copy(e.ray).applyMatrix4(pp),this.boundingBox!==null&&Ic.intersectsBox(this.boundingBox)===!1||this._computeIntersections(e,t,Ic)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new _t,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Ku?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===sm?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;hp.fromBufferAttribute(i.attributes.skinIndex,e),up.fromBufferAttribute(i.attributes.skinWeight,e),cp.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){let a=up.getComponent(s);if(a!==0){let o=hp.getComponent(s);dp.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Qg.copy(cp).applyMatrix4(dp),a)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}},Sa=class extends vt{constructor(){super(),this.isBone=!0,this.type="Bone"}},uh=class extends Qt{constructor(e=null,t=1,n=1,i,s,a,o,l,c=1003,h=1003,u,d){super(null,a,o,l,c,h,i,s,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},fp=new Le,e0=new Le,tl=class r{constructor(e=[],t=[]){this.uuid=En(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(16*e.length),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Le)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Le;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,a=e.length;s<a;s++){let o=e[s]?e[s].matrixWorld:e0;fp.multiplyMatrices(o,t[s]),fp.toArray(n,16*s)}i!==null&&(i.needsUpdate=!0)}clone(){return new r(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(4*this.bones.length);e=4*Math.ceil(e/4),e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new uh(t,e,e,Hn,ui);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let s=e.bones[n],a=t[s];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),a=new Sa),this.bones.push(a),this.boneInverses.push(new Le().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){let a=t[i];e.bones.push(a.uuid);let o=n[i];e.boneInverses.push(o.toArray())}return e}},Sr=class extends Mt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ds=new Le,mp=new Le,Ro=[],gp=new Jt,t0=new Le,ha=new _e,ua=new dn,Ps=class extends _e{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Sr(new Float32Array(16*n),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,t0)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Jt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ds),gp.copy(e.boundingBox).applyMatrix4(ds),this.boundingBox.union(gp)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new dn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ds),ua.copy(e.boundingSphere).applyMatrix4(ds),this.boundingSphere.union(ua)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,3*e)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,16*e)}raycast(e,t){let n=this.matrixWorld,i=this.count;if(ha.geometry=this.geometry,ha.material=this.material,ha.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ua.copy(this.boundingSphere),ua.applyMatrix4(n),e.ray.intersectsSphere(ua)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,ds),mp.multiplyMatrices(n,ds),ha.matrixWorld=mp,ha.raycast(e,Ro);for(let a=0,o=Ro.length;a<o;a++){let l=Ro[a];l.instanceId=s,l.object=this,t.push(l)}Ro.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Sr(new Float32Array(3*this.instanceMatrix.count),3)),t.toArray(this.instanceColor.array,3*e)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,16*e)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var dh=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t){let n=this.pool,i=this.list;this.index>=n.length&&n.push({start:-1,count:-1,z:-1});let s=n[this.index];i.push(s),this.index++,s.start=e.start,s.count=e.count,s.z=t}reset(){this.list.length=0,this.index=0}};var Lv=new Le,Iv=new Le,Dv=new Le,Nv=new Le,Uv=new As,Ov=new Jt,Bv=new dn,kv=new M,Fv=new dh,Hv=new _e;var Tr=class extends pn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ve(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},vp=new M,yp=new M,xp=new Le,Dc=new fi,Co=new dn,Ls=class extends vt{constructor(e=new at,t=new Tr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)vp.fromBufferAttribute(t,i-1),yp.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=vp.distanceTo(yp);e.setAttribute("lineDistance",new Pe(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Co.copy(n.boundingSphere),Co.applyMatrix4(i),Co.radius+=s,e.ray.intersectsSphere(Co)===!1)return;xp.copy(i).invert(),Dc.copy(e.ray).applyMatrix4(xp);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new M,h=new M,u=new M,d=new M,p=this.isLineSegments?2:1,f=n.index,v=n.attributes.position;if(f!==null)for(let m=Math.max(0,a.start),x=Math.min(f.count,a.start+a.count)-1;m<x;m+=p){let g=f.getX(m),y=f.getX(m+1);if(c.fromBufferAttribute(v,g),h.fromBufferAttribute(v,y),Dc.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);let _=e.ray.origin.distanceTo(d);_<e.near||_>e.far||t.push({distance:_,point:u.clone().applyMatrix4(this.matrixWorld),index:m,face:null,faceIndex:null,object:this})}else for(let m=Math.max(0,a.start),x=Math.min(v.count,a.start+a.count)-1;m<x;m+=p){if(c.fromBufferAttribute(v,m),h.fromBufferAttribute(v,m+1),Dc.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);let g=e.ray.origin.distanceTo(d);g<e.near||g>e.far||t.push({distance:g,point:u.clone().applyMatrix4(this.matrixWorld),index:m,face:null,faceIndex:null,object:this})}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,s=n.length;i<s;i++){let a=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=i}}}}},_p=new M,Mp=new M,Is=class extends Ls{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)_p.fromBufferAttribute(t,i),Mp.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+_p.distanceTo(Mp);e.setAttribute("lineDistance",new Pe(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},nl=class extends Ls{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},wr=class extends pn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ve(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},bp=new Le,ph=new fi,Po=new dn,Lo=new M,Ds=class extends vt{constructor(e=new at,t=new wr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Po.copy(n.boundingSphere),Po.applyMatrix4(i),Po.radius+=s,e.ray.intersectsSphere(Po)===!1)return;bp.copy(i).invert(),ph.copy(e.ray).applyMatrix4(bp);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null)for(let u=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);u<d;u++){let p=c.getX(u);Lo.fromBufferAttribute(h,p),Ep(Lo,p,l,i,e,t,this)}else for(let u=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);u<d;u++)Lo.fromBufferAttribute(h,u),Ep(Lo,u,l,i,e,t,this)}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,s=n.length;i<s;i++){let a=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=i}}}}};function Ep(r,e,t,n,i,s,a){let o=ph.distanceSqToPoint(r);if(o<t){let l=new M;ph.closestPointToPoint(r,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}var ln=class extends Qt{constructor(e,t,n,i,s,a,o,l,c){super(e,t,n,i,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Tn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),i=0,s=n.length,a;a=t||e*n[s-1];let o,l=0,c=s-1;for(;l<=c;)if(i=Math.floor(l+(c-l)/2),o=n[i]-a,o<0)l=i+1;else{if(!(o>0)){c=i;break}c=i-1}if(i=c,n[i]===a)return i/(s-1);let h=n[i];return(i+(a-h)/(n[i+1]-h))/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);let a=this.getPoint(i),o=this.getPoint(s),l=t||(a.isVector2?new re:new M);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new M,i=[],s=[],a=[],o=new M,l=new Le;for(let p=0;p<=e;p++){let f=p/e;i[p]=this.getTangentAt(f,new M)}s[0]=new M,a[0]=new M;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),a[0].crossVectors(i[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(i[p-1],i[p]),o.length()>Number.EPSILON){o.normalize();let f=Math.acos(Vt(i[p-1].dot(i[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(o,f))}a[p].crossVectors(i[p],s[p])}if(t===!0){let p=Math.acos(Vt(s[0].dot(s[e]),-1,1));p/=e,i[0].dot(o.crossVectors(s[0],s[e]))>0&&(p=-p);for(let f=1;f<=e;f++)s[f].applyMatrix4(l.makeRotationAxis(i[f],p*f)),a[f].crossVectors(i[f],s[f])}return{tangents:i,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Ta=class extends Tn{constructor(e=0,t=0,n=1,i=1,s=0,a=2*Math.PI,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t){let n=t||new re,i=2*Math.PI,s=this.aEndAngle-this.aStartAngle,a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(s=a?0:i),this.aClockwise!==!0||a||(s===i?s=-i:s-=i);let o=this.aStartAngle+e*s,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*u+this.aX,c=d*u+p*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},fh=class extends Ta{constructor(e,t,n,i,s,a){super(e,t,n,n,i,s,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Kh(){let r=0,e=0,t=0,n=0;function i(s,a,o,l){r=s,e=o,t=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){i(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,h,u){let d=(a-s)/c-(o-s)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,p*=h,i(a,o,d,p)},calc:function(s){let a=s*s;return r+e*s+t*a+n*(a*s)}}}var Io=new M,Nc=new Kh,Uc=new Kh,Oc=new Kh,zi=class extends Tn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new M){let n=t,i=this.points,s=i.length,a=(s-(this.closed?0:1))*e,o,l,c=Math.floor(a),h=a-c;this.closed?c+=c>0?0:(Math.floor(Math.abs(c)/s)+1)*s:h===0&&c===s-1&&(c=s-2,h=1),this.closed||c>0?o=i[(c-1)%s]:(Io.subVectors(i[0],i[1]).add(i[0]),o=Io);let u=i[c%s],d=i[(c+1)%s];if(this.closed||c+2<s?l=i[(c+2)%s]:(Io.subVectors(i[s-1],i[s-2]).add(i[s-1]),l=Io),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,f=Math.pow(o.distanceToSquared(u),p),v=Math.pow(u.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(l),p);v<1e-4&&(v=1),f<1e-4&&(f=v),m<1e-4&&(m=v),Nc.initNonuniformCatmullRom(o.x,u.x,d.x,l.x,f,v,m),Uc.initNonuniformCatmullRom(o.y,u.y,d.y,l.y,f,v,m),Oc.initNonuniformCatmullRom(o.z,u.z,d.z,l.z,f,v,m)}else this.curveType==="catmullrom"&&(Nc.initCatmullRom(o.x,u.x,d.x,l.x,this.tension),Uc.initCatmullRom(o.y,u.y,d.y,l.y,this.tension),Oc.initCatmullRom(o.z,u.z,d.z,l.z,this.tension));return n.set(Nc.calc(h),Uc.calc(h),Oc.calc(h)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new M().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Sp(r,e,t,n,i){let s=.5*(n-e),a=.5*(i-t),o=r*r;return(2*t-2*n+s+a)*(r*o)+(-3*t+3*n-2*s-a)*o+s*r+t}function va(r,e,t,n){return function(i,s){let a=1-i;return a*a*s}(r,e)+function(i,s){return 2*(1-i)*i*s}(r,t)+function(i,s){return i*i*s}(r,n)}function ya(r,e,t,n,i){return function(s,a){let o=1-s;return o*o*o*a}(r,e)+function(s,a){let o=1-s;return 3*o*o*s*a}(r,t)+function(s,a){return 3*(1-s)*s*s*a}(r,n)+function(s,a){return s*s*s*a}(r,i)}var il=class extends Tn{constructor(e=new re,t=new re,n=new re,i=new re){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new re){let n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(ya(e,i.x,s.x,a.x,o.x),ya(e,i.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},mh=class extends Tn{constructor(e=new M,t=new M,n=new M,i=new M){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new M){let n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(ya(e,i.x,s.x,a.x,o.x),ya(e,i.y,s.y,a.y,o.y),ya(e,i.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},rl=class extends Tn{constructor(e=new re,t=new re){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new re){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new re){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},gh=class extends Tn{constructor(e=new M,t=new M){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new M){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new M){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},sl=class extends Tn{constructor(e=new re,t=new re,n=new re){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new re){let n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(va(e,i.x,s.x,a.x),va(e,i.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ns=class extends Tn{constructor(e=new M,t=new M,n=new M){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new M){let n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(va(e,i.x,s.x,a.x),va(e,i.y,s.y,a.y),va(e,i.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},al=class extends Tn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new re){let n=t,i=this.points,s=(i.length-1)*e,a=Math.floor(s),o=s-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(Sp(o,l.x,c.x,h.x,u.x),Sp(o,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new re().fromArray(i))}return this}},ol=Object.freeze({__proto__:null,ArcCurve:fh,CatmullRomCurve3:zi,CubicBezierCurve:il,CubicBezierCurve3:mh,EllipseCurve:Ta,LineCurve:rl,LineCurve3:gh,QuadraticBezierCurve:sl,QuadraticBezierCurve3:Ns,SplineCurve:al}),vh=class extends Tn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ol[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),i=this.getCurveLengths(),s=0;for(;s<i.length;){if(i[s]>=n){let a=i[s]-n,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let i=0,s=this.curves;i<s.length;i++){let a=s[i],o=a.isEllipseCurve?2*e:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(new ol[i.type]().fromJSON(i))}return this}},wa=class extends vh{constructor(e){super(),this.type="Path",this.currentPoint=new re,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new rl(this.currentPoint.clone(),new re(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){let s=new sl(this.currentPoint.clone(),new re(e,t),new re(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,a){let o=new il(this.currentPoint.clone(),new re(e,t),new re(n,i),new re(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new al(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,i,s,a),this}absarc(e,t,n,i,s,a){return this.absellipse(e,t,n,n,i,s,a),this}ellipse(e,t,n,i,s,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,s,a,o,l),this}absellipse(e,t,n,i,s,a,o,l){let c=new Ta(e,t,n,i,s,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},ll=class r extends at{constructor(e=[new re(0,-.5),new re(.5,0),new re(0,.5)],t=12,n=0,i=2*Math.PI){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=Vt(i,0,2*Math.PI);let s=[],a=[],o=[],l=[],c=[],h=1/t,u=new M,d=new re,p=new M,f=new M,v=new M,m=0,x=0;for(let g=0;g<=e.length-1;g++)switch(g){case 0:m=e[g+1].x-e[g].x,x=e[g+1].y-e[g].y,p.x=1*x,p.y=-m,p.z=0*x,v.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(v.x,v.y,v.z);break;default:m=e[g+1].x-e[g].x,x=e[g+1].y-e[g].y,p.x=1*x,p.y=-m,p.z=0*x,f.copy(p),p.x+=v.x,p.y+=v.y,p.z+=v.z,p.normalize(),l.push(p.x,p.y,p.z),v.copy(f)}for(let g=0;g<=t;g++){let y=n+g*h*i,_=Math.sin(y),T=Math.cos(y);for(let E=0;E<=e.length-1;E++){u.x=e[E].x*_,u.y=e[E].y,u.z=e[E].x*T,a.push(u.x,u.y,u.z),d.x=g/t,d.y=E/(e.length-1),o.push(d.x,d.y);let w=l[3*E+0]*_,N=l[3*E+1],b=l[3*E+0]*T;c.push(w,N,b)}}for(let g=0;g<t;g++)for(let y=0;y<e.length-1;y++){let _=y+g*e.length,T=_,E=_+e.length,w=_+e.length+1,N=_+1;s.push(T,E,N),s.push(w,N,E)}this.setIndex(s),this.setAttribute("position",new Pe(a,3)),this.setAttribute("uv",new Pe(o,2)),this.setAttribute("normal",new Pe(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.points,e.segments,e.phiStart,e.phiLength)}},yh=class r extends ll{constructor(e=1,t=1,n=4,i=8){let s=new wa;s.absarc(0,-t/2,e,1.5*Math.PI,0),s.absarc(0,t/2,e,0,.5*Math.PI),super(s.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:i}}static fromJSON(e){return new r(e.radius,e.length,e.capSegments,e.radialSegments)}},Vn=class r extends at{constructor(e=1,t=32,n=0,i=2*Math.PI){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let s=[],a=[],o=[],l=[],c=new M,h=new re;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let p=n+u/t*i;c.x=e*Math.cos(p),c.y=e*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new Pe(a,3)),this.setAttribute("normal",new Pe(o,3)),this.setAttribute("uv",new Pe(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.segments,e.thetaStart,e.thetaLength)}},je=class r extends at{constructor(e=1,t=1,n=1,i=32,s=1,a=!1,o=0,l=2*Math.PI){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};let c=this;i=Math.floor(i),s=Math.floor(s);let h=[],u=[],d=[],p=[],f=0,v=[],m=n/2,x=0;function g(y){let _=f,T=new re,E=new M,w=0,N=y===!0?e:t,b=y===!0?1:-1;for(let I=1;I<=i;I++)u.push(0,m*b,0),d.push(0,b,0),p.push(.5,.5),f++;let L=f;for(let I=0;I<=i;I++){let P=I/i*l+o,k=Math.cos(P),U=Math.sin(P);E.x=N*U,E.y=m*b,E.z=N*k,u.push(E.x,E.y,E.z),d.push(0,b,0),T.x=.5*k+.5,T.y=.5*U*b+.5,p.push(T.x,T.y),f++}for(let I=0;I<i;I++){let P=_+I,k=L+I;y===!0?h.push(k,k+1,P):h.push(k+1,k,P),w+=3}c.addGroup(x,w,y===!0?1:2),x+=w}(function(){let y=new M,_=new M,T=0,E=(t-e)/n;for(let w=0;w<=s;w++){let N=[],b=w/s,L=b*(t-e)+e;for(let I=0;I<=i;I++){let P=I/i,k=P*l+o,U=Math.sin(k),$=Math.cos(k);_.x=L*U,_.y=-b*n+m,_.z=L*$,u.push(_.x,_.y,_.z),y.set(U,E,$).normalize(),d.push(y.x,y.y,y.z),p.push(P,1-b),N.push(f++)}v.push(N)}for(let w=0;w<i;w++)for(let N=0;N<s;N++){let b=v[N][w],L=v[N+1][w],I=v[N+1][w+1],P=v[N][w+1];h.push(b,L,P),h.push(L,I,P),T+=6}c.addGroup(x,T,0),x+=T})(),a===!1&&(e>0&&g(!0),t>0&&g(!1)),this.setIndex(h),this.setAttribute("position",new Pe(u,3)),this.setAttribute("normal",new Pe(d,3)),this.setAttribute("uv",new Pe(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Gi=class r extends je{constructor(e=1,t=1,n=32,i=1,s=!1,a=0,o=2*Math.PI){super(0,e,t,n,i,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new r(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ar=class r extends at{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let s=[],a=[];function o(d,p,f,v){let m=v+1,x=[];for(let g=0;g<=m;g++){x[g]=[];let y=d.clone().lerp(f,g/m),_=p.clone().lerp(f,g/m),T=m-g;for(let E=0;E<=T;E++)x[g][E]=E===0&&g===m?y:y.clone().lerp(_,E/T)}for(let g=0;g<m;g++)for(let y=0;y<2*(m-g)-1;y++){let _=Math.floor(y/2);y%2==0?(l(x[g][_+1]),l(x[g+1][_]),l(x[g][_])):(l(x[g][_+1]),l(x[g+1][_+1]),l(x[g+1][_]))}}function l(d){s.push(d.x,d.y,d.z)}function c(d,p){let f=3*d;p.x=e[f+0],p.y=e[f+1],p.z=e[f+2]}function h(d,p,f,v){v<0&&d.x===1&&(a[p]=d.x-1),f.x===0&&f.z===0&&(a[p]=v/2/Math.PI+.5)}function u(d){return Math.atan2(d.z,-d.x)}(function(d){let p=new M,f=new M,v=new M;for(let m=0;m<t.length;m+=3)c(t[m+0],p),c(t[m+1],f),c(t[m+2],v),o(p,f,v,d)})(i),function(d){let p=new M;for(let f=0;f<s.length;f+=3)p.x=s[f+0],p.y=s[f+1],p.z=s[f+2],p.normalize().multiplyScalar(d),s[f+0]=p.x,s[f+1]=p.y,s[f+2]=p.z}(n),function(){let d=new M;for(let f=0;f<s.length;f+=3){d.x=s[f+0],d.y=s[f+1],d.z=s[f+2];let v=u(d)/2/Math.PI+.5,m=(p=d,Math.atan2(-p.y,Math.sqrt(p.x*p.x+p.z*p.z))/Math.PI+.5);a.push(v,1-m)}var p;(function(){let f=new M,v=new M,m=new M,x=new M,g=new re,y=new re,_=new re;for(let T=0,E=0;T<s.length;T+=9,E+=6){f.set(s[T+0],s[T+1],s[T+2]),v.set(s[T+3],s[T+4],s[T+5]),m.set(s[T+6],s[T+7],s[T+8]),g.set(a[E+0],a[E+1]),y.set(a[E+2],a[E+3]),_.set(a[E+4],a[E+5]),x.copy(f).add(v).add(m).divideScalar(3);let w=u(x);h(g,E+0,f,w),h(y,E+2,v,w),h(_,E+4,m,w)}})(),function(){for(let f=0;f<a.length;f+=6){let v=a[f+0],m=a[f+2],x=a[f+4],g=Math.max(v,m,x),y=Math.min(v,m,x);g>.9&&y<.1&&(v<.2&&(a[f+0]+=1),m<.2&&(a[f+2]+=1),x<.2&&(a[f+4]+=1))}}()}(),this.setAttribute("position",new Pe(s,3)),this.setAttribute("normal",new Pe(s.slice(),3)),this.setAttribute("uv",new Pe(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.vertices,e.indices,e.radius,e.details)}},xh=class r extends Ar{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=1/n;super([-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},Do=new M,No=new M,Bc=new M,Uo=new Ui,_h=class extends at{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let i=Math.pow(10,4),s=Math.cos(gs*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d={},p=[];for(let f=0;f<l;f+=3){a?(c[0]=a.getX(f),c[1]=a.getX(f+1),c[2]=a.getX(f+2)):(c[0]=f,c[1]=f+1,c[2]=f+2);let{a:v,b:m,c:x}=Uo;if(v.fromBufferAttribute(o,c[0]),m.fromBufferAttribute(o,c[1]),x.fromBufferAttribute(o,c[2]),Uo.getNormal(Bc),u[0]=`${Math.round(v.x*i)},${Math.round(v.y*i)},${Math.round(v.z*i)}`,u[1]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,u[2]=`${Math.round(x.x*i)},${Math.round(x.y*i)},${Math.round(x.z*i)}`,u[0]!==u[1]&&u[1]!==u[2]&&u[2]!==u[0])for(let g=0;g<3;g++){let y=(g+1)%3,_=u[g],T=u[y],E=Uo[h[g]],w=Uo[h[y]],N=`${_}_${T}`,b=`${T}_${_}`;b in d&&d[b]?(Bc.dot(d[b].normal)<=s&&(p.push(E.x,E.y,E.z),p.push(w.x,w.y,w.z)),d[b]=null):N in d||(d[N]={index0:c[g],index1:c[y],normal:Bc.clone()})}}for(let f in d)if(d[f]){let{index0:v,index1:m}=d[f];Do.fromBufferAttribute(o,v),No.fromBufferAttribute(o,m),p.push(Do.x,Do.y,Do.z),p.push(No.x,No.y,No.z)}this.setAttribute("position",new Pe(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},Vi=class extends wa{constructor(e){super(e),this.uuid=En(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(new wa().fromJSON(i))}return this}},n0=function(r,e,t=2){let n=e&&e.length,i=n?e[0]*t:r.length,s=Tp(r,0,i,t,!0),a=[];if(!s||s.next===s.prev)return a;let o,l,c,h,u,d,p;if(n&&(s=function(f,v,m,x){let g=[],y,_,T,E,w;for(y=0,_=v.length;y<_;y++)T=v[y]*x,E=y<_-1?v[y+1]*x:f.length,w=Tp(f,T,E,x,!1),w===w.next&&(w.steiner=!0),g.push(h0(w));for(g.sort(o0),y=0;y<g.length;y++)m=l0(g[y],m);return m}(r,e,s,t)),r.length>80*t){o=c=r[0],l=h=r[1];for(let f=t;f<i;f+=t)u=r[f],d=r[f+1],u<o&&(o=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);p=Math.max(c-o,h-l),p=p!==0?32767/p:0}return Aa(s,a,t,o,l,p,0),a};function Tp(r,e,t,n,i){let s,a;if(i===function(o,l,c,h){let u=0;for(let d=l,p=c-h;d<c;d+=h)u+=(o[p]-o[d])*(o[d+1]+o[p+1]),p=d;return u}(r,e,t,n)>0)for(s=e;s<t;s+=n)a=wp(s,r[s],r[s+1],a);else for(s=t-n;s>=e;s-=n)a=wp(s,r[s],r[s+1],a);return a&&Ml(a,a.next)&&(Ca(a),a=a.next),a}function Rr(r,e){if(!r)return r;e||(e=r);let t,n=r;do if(t=!1,n.steiner||!Ml(n,n.next)&&At(n.prev,n,n.next)!==0)n=n.next;else{if(Ca(n),n=e=n.prev,n===n.next)break;t=!0}while(t||n!==e);return e}function Aa(r,e,t,n,i,s,a){if(!r)return;!a&&s&&function(h,u,d,p){let f=h;do f.z===0&&(f.z=Mh(f.x,f.y,u,d,p)),f.prevZ=f.prev,f.nextZ=f.next,f=f.next;while(f!==h);f.prevZ.nextZ=null,f.prevZ=null,function(v){let m,x,g,y,_,T,E,w,N=1;do{for(x=v,v=null,_=null,T=0;x;){for(T++,g=x,E=0,m=0;m<N&&(E++,g=g.nextZ,g);m++);for(w=N;E>0||w>0&&g;)E!==0&&(w===0||!g||x.z<=g.z)?(y=x,x=x.nextZ,E--):(y=g,g=g.nextZ,w--),_?_.nextZ=y:v=y,y.prevZ=_,_=y;x=g}_.nextZ=null,N*=2}while(T>1)}(f)}(r,n,i,s);let o,l,c=r;for(;r.prev!==r.next;)if(o=r.prev,l=r.next,s?r0(r,n,i,s):i0(r))e.push(o.i/t|0),e.push(r.i/t|0),e.push(l.i/t|0),Ca(r),r=l.next,c=l.next;else if((r=l)===c){a?a===1?Aa(r=s0(Rr(r),e,t),e,t,n,i,s,2):a===2&&a0(r,e,t,n,i,s):Aa(Rr(r),e,t,n,i,s,1);break}}function i0(r){let e=r.prev,t=r,n=r.next;if(At(e,t,n)>=0)return!1;let i=e.x,s=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=i<s?i<a?i:a:s<a?s:a,u=o<l?o<c?o:c:l<c?l:c,d=i>s?i>a?i:a:s>a?s:a,p=o>l?o>c?o:c:l>c?l:c,f=n.next;for(;f!==e;){if(f.x>=h&&f.x<=d&&f.y>=u&&f.y<=p&&ms(i,o,s,l,a,c,f.x,f.y)&&At(f.prev,f,f.next)>=0)return!1;f=f.next}return!0}function r0(r,e,t,n){let i=r.prev,s=r,a=r.next;if(At(i,s,a)>=0)return!1;let o=i.x,l=s.x,c=a.x,h=i.y,u=s.y,d=a.y,p=o<l?o<c?o:c:l<c?l:c,f=h<u?h<d?h:d:u<d?u:d,v=o>l?o>c?o:c:l>c?l:c,m=h>u?h>d?h:d:u>d?u:d,x=Mh(p,f,e,t,n),g=Mh(v,m,e,t,n),y=r.prevZ,_=r.nextZ;for(;y&&y.z>=x&&_&&_.z<=g;){if(y.x>=p&&y.x<=v&&y.y>=f&&y.y<=m&&y!==i&&y!==a&&ms(o,h,l,u,c,d,y.x,y.y)&&At(y.prev,y,y.next)>=0||(y=y.prevZ,_.x>=p&&_.x<=v&&_.y>=f&&_.y<=m&&_!==i&&_!==a&&ms(o,h,l,u,c,d,_.x,_.y)&&At(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;y&&y.z>=x;){if(y.x>=p&&y.x<=v&&y.y>=f&&y.y<=m&&y!==i&&y!==a&&ms(o,h,l,u,c,d,y.x,y.y)&&At(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;_&&_.z<=g;){if(_.x>=p&&_.x<=v&&_.y>=f&&_.y<=m&&_!==i&&_!==a&&ms(o,h,l,u,c,d,_.x,_.y)&&At(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function s0(r,e,t){let n=r;do{let i=n.prev,s=n.next.next;!Ml(i,s)&&of(i,n,n.next,s)&&Ra(i,s)&&Ra(s,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),Ca(n),Ca(n.next),n=r=s),n=n.next}while(n!==r);return Rr(n)}function a0(r,e,t,n,i,s){let a=r;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&u0(a,o)){let l=lf(a,o);return a=Rr(a,a.next),l=Rr(l,l.next),Aa(a,e,t,n,i,s,0),void Aa(l,e,t,n,i,s,0)}o=o.next}a=a.next}while(a!==r)}function o0(r,e){return r.x-e.x}function l0(r,e){let t=function(i,s){let a,o=s,l=-1/0,c=i.x,h=i.y;do{if(h<=o.y&&h>=o.next.y&&o.next.y!==o.y){let m=o.x+(h-o.y)*(o.next.x-o.x)/(o.next.y-o.y);if(m<=c&&m>l&&(l=m,a=o.x<o.next.x?o:o.next,m===c))return a}o=o.next}while(o!==s);if(!a)return null;let u=a,d=a.x,p=a.y,f,v=1/0;o=a;do c>=o.x&&o.x>=d&&c!==o.x&&ms(h<p?c:l,h,d,p,h<p?l:c,h,o.x,o.y)&&(f=Math.abs(h-o.y)/(c-o.x),Ra(o,i)&&(f<v||f===v&&(o.x>a.x||o.x===a.x&&c0(a,o)))&&(a=o,v=f)),o=o.next;while(o!==u);return a}(r,e);if(!t)return e;let n=lf(t,r);return Rr(n,n.next),Rr(t,t.next)}function c0(r,e){return At(r.prev,r,e.prev)<0&&At(e.next,r,r.next)<0}function Mh(r,e,t,n,i){return(r=1431655765&((r=858993459&((r=252645135&((r=16711935&((r=(r-t)*i|0)|r<<8))|r<<4))|r<<2))|r<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=(e-n)*i|0)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function h0(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function ms(r,e,t,n,i,s,a,o){return(i-a)*(e-o)>=(r-a)*(s-o)&&(r-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(i-a)*(n-o)}function u0(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!function(t,n){let i=t;do{if(i.i!==t.i&&i.next.i!==t.i&&i.i!==n.i&&i.next.i!==n.i&&of(i,i.next,t,n))return!0;i=i.next}while(i!==t);return!1}(r,e)&&(Ra(r,e)&&Ra(e,r)&&function(t,n){let i=t,s=!1,a=(t.x+n.x)/2,o=(t.y+n.y)/2;do i.y>o!=i.next.y>o&&i.next.y!==i.y&&a<(i.next.x-i.x)*(o-i.y)/(i.next.y-i.y)+i.x&&(s=!s),i=i.next;while(i!==t);return s}(r,e)&&(At(r.prev,r,e.prev)||At(r,e.prev,e))||Ml(r,e)&&At(r.prev,r,r.next)>0&&At(e.prev,e,e.next)>0)}function At(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function Ml(r,e){return r.x===e.x&&r.y===e.y}function of(r,e,t,n){let i=Bo(At(r,e,t)),s=Bo(At(r,e,n)),a=Bo(At(t,n,r)),o=Bo(At(t,n,e));return i!==s&&a!==o||!(i!==0||!Oo(r,t,e))||!(s!==0||!Oo(r,n,e))||!(a!==0||!Oo(t,r,n))||!(o!==0||!Oo(t,e,n))}function Oo(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function Bo(r){return r>0?1:r<0?-1:0}function Ra(r,e){return At(r.prev,r,r.next)<0?At(r,e,r.next)>=0&&At(r,r.prev,e)>=0:At(r,e,r.prev)<0||At(r,r.next,e)<0}function lf(r,e){let t=new bh(r.i,r.x,r.y),n=new bh(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function wp(r,e,t,n){let i=new bh(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Ca(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function bh(r,e,t){this.i=r,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}var ki=class r{static area(e){let t=e.length,n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return .5*n}static isClockWise(e){return r.area(e)<0}static triangulateShape(e,t){let n=[],i=[],s=[];Ap(e),Rp(n,e);let a=e.length;t.forEach(Ap);for(let l=0;l<t.length;l++)i.push(a),a+=t[l].length,Rp(n,t[l]);let o=n0(n,i);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}};function Ap(r){let e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function Rp(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}var Cr=class r extends at{constructor(e=new Vi([new re(.5,.5),new re(-.5,.5),new re(-.5,-.5),new re(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,i=[],s=[];for(let o=0,l=e.length;o<l;o++)a(e[o]);function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled===void 0||t.bevelEnabled,p=t.bevelThickness!==void 0?t.bevelThickness:.2,f=t.bevelSize!==void 0?t.bevelSize:p-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,x=t.extrudePath,g=t.UVGenerator!==void 0?t.UVGenerator:d0,y,_,T,E,w,N=!1;x&&(y=x.getSpacedPoints(h),N=!0,d=!1,_=x.computeFrenetFrames(h,!1),T=new M,E=new M,w=new M),d||(m=0,p=0,f=0,v=0);let b=o.extractPoints(c),L=b.shape,I=b.holes;if(!ki.isClockWise(L)){L=L.reverse();for(let B=0,O=I.length;B<O;B++){let G=I[B];ki.isClockWise(G)&&(I[B]=G.reverse())}}let P=ki.triangulateShape(L,I),k=L;for(let B=0,O=I.length;B<O;B++){let G=I[B];L=L.concat(G)}function U(B,O,G){return O||console.error("THREE.ExtrudeGeometry: vec does not exist"),B.clone().addScaledVector(O,G)}let $=L.length,he=P.length;function te(B,O,G){let ne,ee,S,ae=B.x-O.x,V=B.y-O.y,W=G.x-B.x,oe=G.y-B.y,ge=ae*ae+V*V,xe=ae*oe-V*W;if(Math.abs(xe)>Number.EPSILON){let Me=Math.sqrt(ge),Ie=Math.sqrt(W*W+oe*oe),be=O.x-V/Me,we=O.y+ae/Me,Fe=((G.x-oe/Ie-be)*oe-(G.y+W/Ie-we)*W)/(ae*oe-V*W);ne=be+ae*Fe-B.x,ee=we+V*Fe-B.y;let Nt=ne*ne+ee*ee;if(Nt<=2)return new re(ne,ee);S=Math.sqrt(Nt/2)}else{let Me=!1;ae>Number.EPSILON?W>Number.EPSILON&&(Me=!0):ae<-Number.EPSILON?W<-Number.EPSILON&&(Me=!0):Math.sign(V)===Math.sign(oe)&&(Me=!0),Me?(ne=-V,ee=ae,S=Math.sqrt(ge)):(ne=ae,ee=V,S=Math.sqrt(ge/2))}return new re(ne/S,ee/S)}let q=[];for(let B=0,O=k.length,G=O-1,ne=B+1;B<O;B++,G++,ne++)G===O&&(G=0),ne===O&&(ne=0),q[B]=te(k[B],k[G],k[ne]);let K=[],z,X=q.concat();for(let B=0,O=I.length;B<O;B++){let G=I[B];z=[];for(let ne=0,ee=G.length,S=ee-1,ae=ne+1;ne<ee;ne++,S++,ae++)S===ee&&(S=0),ae===ee&&(ae=0),z[ne]=te(G[ne],G[S],G[ae]);K.push(z),X=X.concat(z)}for(let B=0;B<m;B++){let O=B/m,G=p*Math.cos(O*Math.PI/2),ne=f*Math.sin(O*Math.PI/2)+v;for(let ee=0,S=k.length;ee<S;ee++){let ae=U(k[ee],q[ee],ne);R(ae.x,ae.y,-G)}for(let ee=0,S=I.length;ee<S;ee++){let ae=I[ee];z=K[ee];for(let V=0,W=ae.length;V<W;V++){let oe=U(ae[V],z[V],ne);R(oe.x,oe.y,-G)}}}let fe=f+v;for(let B=0;B<$;B++){let O=d?U(L[B],X[B],fe):L[B];N?(E.copy(_.normals[0]).multiplyScalar(O.x),T.copy(_.binormals[0]).multiplyScalar(O.y),w.copy(y[0]).add(E).add(T),R(w.x,w.y,w.z)):R(O.x,O.y,0)}for(let B=1;B<=h;B++)for(let O=0;O<$;O++){let G=d?U(L[O],X[O],fe):L[O];N?(E.copy(_.normals[B]).multiplyScalar(G.x),T.copy(_.binormals[B]).multiplyScalar(G.y),w.copy(y[B]).add(E).add(T),R(w.x,w.y,w.z)):R(G.x,G.y,u/h*B)}for(let B=m-1;B>=0;B--){let O=B/m,G=p*Math.cos(O*Math.PI/2),ne=f*Math.sin(O*Math.PI/2)+v;for(let ee=0,S=k.length;ee<S;ee++){let ae=U(k[ee],q[ee],ne);R(ae.x,ae.y,u+G)}for(let ee=0,S=I.length;ee<S;ee++){let ae=I[ee];z=K[ee];for(let V=0,W=ae.length;V<W;V++){let oe=U(ae[V],z[V],ne);N?R(oe.x,oe.y+y[h-1].y,y[h-1].x+G):R(oe.x,oe.y,u+G)}}}function A(B,O){let G=B.length;for(;--G>=0;){let ne=G,ee=G-1;ee<0&&(ee=B.length-1);for(let S=0,ae=h+2*m;S<ae;S++){let V=$*S,W=$*(S+1);Z(O+ne+V,O+ee+V,O+ee+W,O+ne+W)}}}function R(B,O,G){l.push(B),l.push(O),l.push(G)}function H(B,O,G){D(B),D(O),D(G);let ne=i.length/3,ee=g.generateTopUV(n,i,ne-3,ne-2,ne-1);Y(ee[0]),Y(ee[1]),Y(ee[2])}function Z(B,O,G,ne){D(B),D(O),D(ne),D(O),D(G),D(ne);let ee=i.length/3,S=g.generateSideWallUV(n,i,ee-6,ee-3,ee-2,ee-1);Y(S[0]),Y(S[1]),Y(S[3]),Y(S[1]),Y(S[2]),Y(S[3])}function D(B){i.push(l[3*B+0]),i.push(l[3*B+1]),i.push(l[3*B+2])}function Y(B){s.push(B.x),s.push(B.y)}(function(){let B=i.length/3;if(d){let O=0,G=$*O;for(let ne=0;ne<he;ne++){let ee=P[ne];H(ee[2]+G,ee[1]+G,ee[0]+G)}O=h+2*m,G=$*O;for(let ne=0;ne<he;ne++){let ee=P[ne];H(ee[0]+G,ee[1]+G,ee[2]+G)}}else{for(let O=0;O<he;O++){let G=P[O];H(G[2],G[1],G[0])}for(let O=0;O<he;O++){let G=P[O];H(G[0]+$*h,G[1]+$*h,G[2]+$*h)}}n.addGroup(B,i.length/3-B,0)})(),function(){let B=i.length/3,O=0;A(k,O),O+=k.length;for(let G=0,ne=I.length;G<ne;G++){let ee=I[G];A(ee,O),O+=ee.length}n.addGroup(B,i.length/3-B,1)}()}this.setAttribute("position",new Pe(i,3)),this.setAttribute("uv",new Pe(s,2)),this.computeVertexNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return function(t,n,i){if(i.shapes=[],Array.isArray(t))for(let s=0,a=t.length;s<a;s++){let o=t[s];i.shapes.push(o.uuid)}else i.shapes.push(t.uuid);return i.options=Object.assign({},n),n.extrudePath!==void 0&&(i.options.extrudePath=n.extrudePath.toJSON()),i}(this.parameters.shapes,this.parameters.options,e)}static fromJSON(e,t){let n=[];for(let s=0,a=e.shapes.length;s<a;s++){let o=t[e.shapes[s]];n.push(o)}let i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new ol[i.type]().fromJSON(i)),new r(n,e.options)}},d0={generateTopUV:function(r,e,t,n,i){let s=e[3*t],a=e[3*t+1],o=e[3*n],l=e[3*n+1],c=e[3*i],h=e[3*i+1];return[new re(s,a),new re(o,l),new re(c,h)]},generateSideWallUV:function(r,e,t,n,i,s){let a=e[3*t],o=e[3*t+1],l=e[3*t+2],c=e[3*n],h=e[3*n+1],u=e[3*n+2],d=e[3*i],p=e[3*i+1],f=e[3*i+2],v=e[3*s],m=e[3*s+1],x=e[3*s+2];return Math.abs(o-h)<Math.abs(a-c)?[new re(a,1-l),new re(c,1-u),new re(d,1-f),new re(v,1-x)]:[new re(o,1-l),new re(h,1-u),new re(p,1-f),new re(m,1-x)]}},Jn=class r extends Ar{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2;super([-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},Eh=class r extends Ar{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},Sh=class r extends at{constructor(e=.5,t=1,n=32,i=1,s=0,a=2*Math.PI){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:a},n=Math.max(3,n);let o=[],l=[],c=[],h=[],u=e,d=(t-e)/(i=Math.max(1,i)),p=new M,f=new re;for(let v=0;v<=i;v++){for(let m=0;m<=n;m++){let x=s+m/n*a;p.x=u*Math.cos(x),p.y=u*Math.sin(x),l.push(p.x,p.y,p.z),c.push(0,0,1),f.x=(p.x/t+1)/2,f.y=(p.y/t+1)/2,h.push(f.x,f.y)}u+=d}for(let v=0;v<i;v++){let m=v*(n+1);for(let x=0;x<n;x++){let g=x+m,y=g,_=g+n+1,T=g+n+2,E=g+1;o.push(y,_,E),o.push(_,T,E)}}this.setIndex(o),this.setAttribute("position",new Pe(l,3)),this.setAttribute("normal",new Pe(c,3)),this.setAttribute("uv",new Pe(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},Th=class r extends at{constructor(e=new Vi([new re(0,.5),new re(-.5,-.5),new re(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],i=[],s=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;function c(h){let u=i.length/3,d=h.extractPoints(t),p=d.shape,f=d.holes;ki.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,x=f.length;m<x;m++){let g=f[m];ki.isClockWise(g)===!0&&(f[m]=g.reverse())}let v=ki.triangulateShape(p,f);for(let m=0,x=f.length;m<x;m++){let g=f[m];p=p.concat(g)}for(let m=0,x=p.length;m<x;m++){let g=p[m];i.push(g.x,g.y,0),s.push(0,0,1),a.push(g.x,g.y)}for(let m=0,x=v.length;m<x;m++){let g=v[m],y=g[0]+u,_=g[1]+u,T=g[2]+u;n.push(y,_,T),l+=3}}this.setIndex(n),this.setAttribute("position",new Pe(i,3)),this.setAttribute("normal",new Pe(s,3)),this.setAttribute("uv",new Pe(a,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return function(t,n){if(n.shapes=[],Array.isArray(t))for(let i=0,s=t.length;i<s;i++){let a=t[i];n.shapes.push(a.uuid)}else n.shapes.push(t.uuid);return n}(this.parameters.shapes,e)}static fromJSON(e,t){let n=[];for(let i=0,s=e.shapes.length;i<s;i++){let a=t[e.shapes[i]];n.push(a)}return new r(n,e.curveSegments)}},cn=class r extends at{constructor(e=1,t=32,n=16,i=0,s=2*Math.PI,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new M,d=new M,p=[],f=[],v=[],m=[];for(let x=0;x<=n;x++){let g=[],y=x/n,_=0;x===0&&a===0?_=.5/t:x===n&&l===Math.PI&&(_=-.5/t);for(let T=0;T<=t;T++){let E=T/t;u.x=-e*Math.cos(i+E*s)*Math.sin(a+y*o),u.y=e*Math.cos(a+y*o),u.z=e*Math.sin(i+E*s)*Math.sin(a+y*o),f.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),m.push(E+_,1-y),g.push(c++)}h.push(g)}for(let x=0;x<n;x++)for(let g=0;g<t;g++){let y=h[x][g+1],_=h[x][g],T=h[x+1][g],E=h[x+1][g+1];(x!==0||a>0)&&p.push(y,_,E),(x!==n-1||l<Math.PI)&&p.push(_,T,E)}this.setIndex(p),this.setAttribute("position",new Pe(f,3)),this.setAttribute("normal",new Pe(v,3)),this.setAttribute("uv",new Pe(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},wh=class r extends Ar{constructor(e=1,t=0){super([1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},Wi=class r extends at{constructor(e=1,t=.4,n=12,i=48,s=2*Math.PI){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);let a=[],o=[],l=[],c=[],h=new M,u=new M,d=new M;for(let p=0;p<=n;p++)for(let f=0;f<=i;f++){let v=f/i*s,m=p/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(v),u.y=(e+t*Math.cos(m))*Math.sin(v),u.z=t*Math.sin(m),o.push(u.x,u.y,u.z),h.x=e*Math.cos(v),h.y=e*Math.sin(v),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(f/i),c.push(p/n)}for(let p=1;p<=n;p++)for(let f=1;f<=i;f++){let v=(i+1)*p+f-1,m=(i+1)*(p-1)+f-1,x=(i+1)*(p-1)+f,g=(i+1)*p+f;a.push(v,m,g),a.push(m,x,g)}this.setIndex(a),this.setAttribute("position",new Pe(o,3)),this.setAttribute("normal",new Pe(l,3)),this.setAttribute("uv",new Pe(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},Ah=class r extends at{constructor(e=1,t=.4,n=64,i=8,s=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:i,p:s,q:a},n=Math.floor(n),i=Math.floor(i);let o=[],l=[],c=[],h=[],u=new M,d=new M,p=new M,f=new M,v=new M,m=new M,x=new M;for(let y=0;y<=n;++y){let _=y/n*s*Math.PI*2;g(_,s,a,e,p),g(_+.01,s,a,e,f),m.subVectors(f,p),x.addVectors(f,p),v.crossVectors(m,x),x.crossVectors(v,m),v.normalize(),x.normalize();for(let T=0;T<=i;++T){let E=T/i*Math.PI*2,w=-t*Math.cos(E),N=t*Math.sin(E);u.x=p.x+(w*x.x+N*v.x),u.y=p.y+(w*x.y+N*v.y),u.z=p.z+(w*x.z+N*v.z),l.push(u.x,u.y,u.z),d.subVectors(u,p).normalize(),c.push(d.x,d.y,d.z),h.push(y/n),h.push(T/i)}}for(let y=1;y<=n;y++)for(let _=1;_<=i;_++){let T=(i+1)*(y-1)+(_-1),E=(i+1)*y+(_-1),w=(i+1)*y+_,N=(i+1)*(y-1)+_;o.push(T,E,N),o.push(E,w,N)}function g(y,_,T,E,w){let N=Math.cos(y),b=Math.sin(y),L=T/_*y,I=Math.cos(L);w.x=E*(2+I)*.5*N,w.y=E*(2+I)*b*.5,w.z=E*Math.sin(L)*.5}this.setIndex(o),this.setAttribute("position",new Pe(l,3)),this.setAttribute("normal",new Pe(c,3)),this.setAttribute("uv",new Pe(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}},Pa=class r extends at{constructor(e=new Ns(new M(-1,-1,0),new M(-1,1,0),new M(1,1,0)),t=64,n=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:s};let a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new M,l=new M,c=new re,h=new M,u=[],d=[],p=[],f=[];function v(m){h=e.getPointAt(m/t,h);let x=a.normals[m],g=a.binormals[m];for(let y=0;y<=i;y++){let _=y/i*Math.PI*2,T=Math.sin(_),E=-Math.cos(_);l.x=E*x.x+T*g.x,l.y=E*x.y+T*g.y,l.z=E*x.z+T*g.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,u.push(o.x,o.y,o.z)}}(function(){for(let m=0;m<t;m++)v(m);v(s===!1?t:0),function(){for(let m=0;m<=t;m++)for(let x=0;x<=i;x++)c.x=m/t,c.y=x/i,p.push(c.x,c.y)}(),function(){for(let m=1;m<=t;m++)for(let x=1;x<=i;x++){let g=(i+1)*(m-1)+(x-1),y=(i+1)*m+(x-1),_=(i+1)*m+x,T=(i+1)*(m-1)+x;f.push(g,y,T),f.push(y,_,T)}}()})(),this.setIndex(f),this.setAttribute("position",new Pe(u,3)),this.setAttribute("normal",new Pe(d,3)),this.setAttribute("uv",new Pe(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new r(new ol[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},Rh=class extends at{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],n=new Set,i=new M,s=new M;if(e.index!==null){let a=e.attributes.position,o=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let u=l[c],d=u.start;for(let p=d,f=d+u.count;p<f;p+=3)for(let v=0;v<3;v++){let m=o.getX(p+v),x=o.getX(p+(v+1)%3);i.fromBufferAttribute(a,m),s.fromBufferAttribute(a,x),Cp(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}}else{let a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){let h=3*o+c,u=3*o+(c+1)%3;i.fromBufferAttribute(a,h),s.fromBufferAttribute(a,u),Cp(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new Pe(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function Cp(r,e,t){let n=`${r.x},${r.y},${r.z}-${e.x},${e.y},${e.z}`,i=`${e.x},${e.y},${e.z}-${r.x},${r.y},${r.z}`;return t.has(n)!==!0&&t.has(i)!==!0&&(t.add(n),t.add(i),!0)}var zv=Object.freeze({__proto__:null,BoxGeometry:se,CapsuleGeometry:yh,CircleGeometry:Vn,ConeGeometry:Gi,CylinderGeometry:je,DodecahedronGeometry:xh,EdgesGeometry:_h,ExtrudeGeometry:Cr,IcosahedronGeometry:Jn,LatheGeometry:ll,OctahedronGeometry:Eh,PlaneGeometry:Bt,PolyhedronGeometry:Ar,RingGeometry:Sh,ShapeGeometry:Th,SphereGeometry:cn,TetrahedronGeometry:wh,TorusGeometry:Wi,TorusKnotGeometry:Ah,TubeGeometry:Pa,WireframeGeometry:Rh});var cl=class extends Ot{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ft=class extends pn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ve(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},wn=class extends ft{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new re(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Vt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ve(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ve(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ve(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function ko(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function p0(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function f0(r){let e=r.length,t=new Array(e);for(let n=0;n!==e;++n)t[n]=n;return t.sort(function(n,i){return r[n]-r[i]}),t}function Pp(r,e,t){let n=r.length,i=new r.constructor(n);for(let s=0,a=0;a!==n;++s){let o=t[s]*e;for(let l=0;l!==e;++l)i[a++]=r[o+l]}return i}function cf(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push.apply(t,a)),s=r[i++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=r[i++];while(s!==void 0)}var ji=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],s=t[n-1];e:{t:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break t}a=t.length;break n}if(e>=s)break e;{let o=t[1];e<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break t}a=n,n=0}}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Ch=class extends ji{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ps,endingEnd:ps}}intervalChanged_(e,t,n){let i=this.parameterPositions,s=e-2,a=e+1,o=i[s],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case fs:s=e,o=2*t-n;break;case Ho:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case fs:a=e,l=2*n-t;break;case Ho:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}let c=.5*(n-t),h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,f=(n-t)/(i-t),v=f*f,m=v*f,x=-d*m+2*d*v-d*f,g=(1+d)*m+(-1.5-2*d)*v+(-.5+d)*f+1,y=(-1-p)*m+(1.5+p)*v+.5*f,_=p*m-p*v;for(let T=0;T!==o;++T)s[T]=x*a[h+T]+g*a[c+T]+y*a[l+T]+_*a[u+T];return s}},hl=class extends ji{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==o;++d)s[d]=a[c+d]*u+a[l+d]*h;return s}},Ph=class extends ji{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},Sn=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ko(t,this.TimeBufferType),this.values=ko(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ko(e.times,Array),values:ko(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ph(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new hl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ch(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case bs:t=this.InterpolantFactoryMethodDiscrete;break;case br:t=this.InterpolantFactoryMethodLinear;break;case oc:t=this.InterpolantFactoryMethodSmooth}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0){if(e===this.DefaultInterpolation)throw new Error(n);this.setInterpolation(this.DefaultInterpolation)}return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return bs;case this.InterpolantFactoryMethodLinear:return br;case this.InterpolantFactoryMethodSmooth:return oc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!=0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&p0(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===oc,s=e.length-1,a=1;for(let o=1;o<s;++o){let l=!1,c=e[o];if(c!==e[o+1]&&(o!==1||c!==e[0]))if(i)l=!0;else{let h=o*n,u=h-n,d=h+n;for(let p=0;p!==n;++p){let f=t[h+p];if(f!==t[u+p]||f!==t[d+p]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let h=o*n,u=a*n;for(let d=0;d!==n;++d)t[u+d]=t[h+d]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=new this.constructor(this.name,e,t);return n.createInterpolant=this.createInterpolant,n}};Sn.prototype.TimeBufferType=Float32Array,Sn.prototype.ValueBufferType=Float32Array,Sn.prototype.DefaultInterpolation=br;var Ii=class extends Sn{};Ii.prototype.ValueTypeName="bool",Ii.prototype.ValueBufferType=Array,Ii.prototype.DefaultInterpolation=bs,Ii.prototype.InterpolantFactoryMethodLinear=void 0,Ii.prototype.InterpolantFactoryMethodSmooth=void 0;var ul=class extends Sn{};ul.prototype.ValueTypeName="color";var mi=class extends Sn{};mi.prototype.ValueTypeName="number";var Lh=class extends ji{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t),c=e*o;for(let h=c+o;c!==h;c+=4)Dt.slerpFlat(s,0,a,c-o,a,c,l);return s}},zn=class extends Sn{InterpolantFactoryMethodLinear(e){return new Lh(this.times,this.values,this.getValueSize(),e)}};zn.prototype.ValueTypeName="quaternion",zn.prototype.DefaultInterpolation=br,zn.prototype.InterpolantFactoryMethodSmooth=void 0;var Di=class extends Sn{};Di.prototype.ValueTypeName="string",Di.prototype.ValueBufferType=Array,Di.prototype.DefaultInterpolation=bs,Di.prototype.InterpolantFactoryMethodLinear=void 0,Di.prototype.InterpolantFactoryMethodSmooth=void 0;var $n=class extends Sn{};$n.prototype.ValueTypeName="vector";var Pr=class{constructor(e,t=-1,n,i=2500){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=En(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(m0(n[a]).scale(i));let s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,a=n.length;s!==a;++s)t.push(Sn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let s=t.length,a=[];for(let o=0;o<s;o++){let l=[],c=[];l.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);let h=f0(l);l=Pp(l,1,h),c=Pp(c,1,h),i||l[0]!==0||(l.push(s),c.push(c[0])),a.push(new mi(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let c=e[o],h=c.name.match(s);if(h&&h.length>1){let u=h[1],d=i[u];d||(i[u]=d=[]),d.push(c)}}let a=[];for(let o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(h,u,d,p,f){if(d.length!==0){let v=[],m=[];cf(d,v,m,p),v.length!==0&&f.push(new h(u,v,m))}},i=[],s=e.name||"default",a=e.fps||30,o=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let h=0;h<c.length;h++){let u=c[h].keys;if(u&&u.length!==0)if(u[0].morphTargets){let d={},p;for(p=0;p<u.length;p++)if(u[p].morphTargets)for(let f=0;f<u[p].morphTargets.length;f++)d[u[p].morphTargets[f]]=-1;for(let f in d){let v=[],m=[];for(let x=0;x!==u[p].morphTargets.length;++x){let g=u[p];v.push(g.time),m.push(g.morphTarget===f?1:0)}i.push(new mi(".morphTargetInfluence["+f+"]",v,m))}l=d.length*a}else{let d=".bones["+t[h].name+"]";n($n,d+".position",u,"pos",i),n(zn,d+".quaternion",u,"rot",i),n($n,d+".scale",u,"scl",i)}}return i.length===0?null:new this(s,l,i,o)}resetDuration(){let e=0;for(let t=0,n=this.tracks.length;t!==n;++t){let i=this.tracks[t];e=Math.max(e,i.times[i.times.length-1])}return this.duration=e,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function m0(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=function(t){switch(t.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return mi;case"vector":case"vector2":case"vector3":case"vector4":return $n;case"color":return ul;case"quaternion":return zn;case"bool":case"boolean":return Ii;case"string":return Di}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+t)}(r.type);if(r.times===void 0){let t=[],n=[];cf(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}var Oi={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}},Ih=class{constructor(e,t,n){let i=this,s,a=!1,o=0,l=0,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){l++,a===!1&&i.onStart!==void 0&&i.onStart(h,o,l),a=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,l),o===l&&(a=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return s?s(h):h},this.setURLModifier=function(h){return s=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let p=c[u],f=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return f}return null}}},g0=new Ih,gi=class{constructor(e){this.manager=e!==void 0?e:g0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};gi.DEFAULT_MATERIAL_NAME="__DEFAULT";var li={},Dh=class extends Error{constructor(e,t){super(e),this.response=t}},La=class extends gi{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=Oi.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(li[e]!==void 0)return void li[e].push({onLoad:t,onProgress:n,onError:i});li[e]=[],li[e].push({onLoad:t,onProgress:n,onError:i});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=li[e],u=c.body.getReader(),d=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),p=d?parseInt(d):0,f=p!==0,v=0,m=new ReadableStream({start(x){(function g(){u.read().then(({done:y,value:_})=>{if(y)x.close();else{v+=_.byteLength;let T=new ProgressEvent("progress",{lengthComputable:f,loaded:v,total:p});for(let E=0,w=h.length;E<w;E++){let N=h[E];N.onProgress&&N.onProgress(T)}x.enqueue(_),g()}})})()}});return new Response(m)}throw new Dh(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o===void 0)return c.text();{let h=/charset="?([^;"\s]*)"?/i.exec(o),u=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(u);return c.arrayBuffer().then(p=>d.decode(p))}}}).then(c=>{Oi.add(e,c);let h=li[e];delete li[e];for(let u=0,d=h.length;u<d;u++){let p=h[u];p.onLoad&&p.onLoad(c)}}).catch(c=>{let h=li[e];if(h===void 0)throw this.manager.itemError(e),c;delete li[e];for(let u=0,d=h.length;u<d;u++){let p=h[u];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var Nh=class extends gi{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=Oi.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;let o=_a("img");function l(){h(),Oi.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(u){h(),i&&i(u),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}};var dl=class extends gi{constructor(e){super(e)}load(e,t,n,i){let s=new Qt,a=new Nh(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}},Us=class extends vt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ve(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},pl=class extends Us{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ve(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},kc=new Le,Lp=new M,Ip=new M,Ia=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new re(512,512),this.map=null,this.mapPass=null,this.matrix=new Le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new As,this._frameExtents=new re(1,1),this._viewportCount=1,this._viewports=[new _t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Lp.setFromMatrixPosition(e.matrixWorld),t.position.copy(Lp),Ip.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ip),t.updateMatrixWorld(),kc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(kc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(kc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),this.mapSize.x===512&&this.mapSize.y===512||(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Uh=class extends Ia{constructor(){super(new It(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=2*Ss*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;n===t.fov&&i===t.aspect&&s===t.far||(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},fl=class extends Us{constructor(e,t,n=0,i=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.target=new vt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new Uh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Dp=new Le,da=new M,Fc=new M,Oh=class extends Ia{constructor(){super(new It(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new re(4,2),this._viewportCount=6,this._viewports=[new _t(2,1,1,1),new _t(0,1,1,1),new _t(3,1,1,1),new _t(1,1,1,1),new _t(3,0,1,1),new _t(1,0,1,1)],this._cubeDirections=[new M(1,0,0),new M(-1,0,0),new M(0,0,1),new M(0,0,-1),new M(0,1,0),new M(0,-1,0)],this._cubeUps=[new M(0,1,0),new M(0,1,0),new M(0,1,0),new M(0,1,0),new M(0,0,1),new M(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),da.setFromMatrixPosition(e.matrixWorld),n.position.copy(da),Fc.copy(n.position),Fc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Fc),n.updateMatrixWorld(),i.makeTranslation(-da.x,-da.y,-da.z),Dp.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Dp)}},Os=class extends Us{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Oh}get power(){return 4*this.intensity*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Bh=class extends Ia{constructor(){super(new Fi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Lr=class extends Us{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.target=new vt,this.shadow=new Bh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Xi=class{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var ml=class extends gi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=Oi.get(e);if(a!==void 0)return s.manager.itemStart(e),a.then?void a.then(c=>{t&&t(c),s.manager.itemEnd(e)}).catch(c=>{i&&i(c)}):(setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a);let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;let l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return Oi.add(e,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){i&&i(c),Oi.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});Oi.add(e,l),s.manager.itemStart(e)}};var Gv=new Le,Vv=new Le,Wv=new Le;var Bs=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Np(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Np();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function Np(){return(typeof performance>"u"?Date:performance).now()}var jv=new M,Xv=new Dt,qv=new M,Yv=new M;var Zv=new M,Kv=new Dt,Jv=new M,$v=new M;var kh=class{constructor(e,t,n){let i,s,a;switch(this.binding=e,this.valueSize=n,t){case"quaternion":i=this._slerp,s=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(6*n),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(5*n);break;default:i=this._lerp,s=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(5*n)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,i=this.valueSize,s=e*i+i,a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[s+o]=n[o];a=t}else{a+=t;let o=t/a;this._mixBufferRegion(n,s,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,i=e*t+t,s=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){let l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-s,t)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){o.setValue(n,i);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let s=n,a=i;s!==a;++s)t[s]=t[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=3*this.valueSize;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,s){if(i>=.5)for(let a=0;a!==s;++a)e[t+a]=e[n+a]}_slerp(e,t,n,i){Dt.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,s){let a=this._workIndex*s;Dt.multiplyQuaternionsFlat(e,a,e,t,e,n),Dt.slerpFlat(e,t,e,t,e,a,i)}_lerp(e,t,n,i,s){let a=1-i;for(let o=0;o!==s;++o){let l=t+o;e[l]=e[l]*a+e[n+o]*i}}_lerpAdditive(e,t,n,i,s){for(let a=0;a!==s;++a){let o=t+a;e[o]=e[o]+e[n+a]*i}}},Jh="\\[\\]\\.:\\/",v0=new RegExp("["+Jh+"]","g"),Hc="[^"+Jh+"]",y0="[^"+Jh.replace("\\.","")+"]",x0=new RegExp("^"+/((?:WC+[\/:])*)/.source.replace("WC",Hc)+/(WCOD+)?/.source.replace("WCOD",y0)+/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Hc)+/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Hc)+"$"),_0=["material","materials","bones","map"],yt=class r{constructor(e,t,n){this.path=t,this.parsedPath=n||r.parseTrackName(t),this.node=r.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new r.Composite(e,t,n):new r(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(v0,"")}static parseTrackName(e){let t=x0.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);_0.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,s=t.propertyIndex;if(e||(e=r.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e)return void console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.materials)return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);e=e.material.materials;break;case"bones":if(!e.skeleton)return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.map)return void console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);e=e.material.map;break;default:if(e[n]===void 0)return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);e=e[n]}if(c!==void 0){if(e[c]===void 0)return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);e=e[c]}}let a=e[i];if(a===void 0){let c=t.nodeName;return void console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e)}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);if(!e.geometry.morphAttributes)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};yt.Composite=class{constructor(r,e,t){let n=t||yt.parseTrackName(e);this._targetGroup=r,this._bindings=r.subscribe_(e,n)}getValue(r,e){this.bind();let t=this._targetGroup.nCachedObjects_,n=this._bindings[t];n!==void 0&&n.getValue(r,e)}setValue(r,e){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].setValue(r,e)}bind(){let r=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=r.length;e!==t;++e)r[e].bind()}unbind(){let r=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=r.length;e!==t;++e)r[e].unbind()}},yt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},yt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},yt.prototype.GetterByBindingType=[yt.prototype._getValue_direct,yt.prototype._getValue_array,yt.prototype._getValue_arrayElement,yt.prototype._getValue_toArray],yt.prototype.SetterByBindingTypeAndVersioning=[[yt.prototype._setValue_direct,yt.prototype._setValue_direct_setNeedsUpdate,yt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_array,yt.prototype._setValue_array_setNeedsUpdate,yt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_arrayElement,yt.prototype._setValue_arrayElement_setNeedsUpdate,yt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_fromArray,yt.prototype._setValue_fromArray_setNeedsUpdate,yt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Fh=class{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;let s=t.tracks,a=s.length,o=new Array(a),l={endingStart:ps,endingEnd:ps};for(let c=0;c!==a;++c){let h=s[c].createInterpolant(null);o[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=2201,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){let i=this._clip.duration,s=e._clip.duration,a=s/i,o=i/s;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let i=this._mixer,s=i.time,a=this.timeScale,o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);let l=o.parameterPositions,c=o.sampleValues;return l[0]=s,l[1]=s+n,c[0]=e/a,c[1]=t/a,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled)return void this._updateWeight(e);let s=this._startTime;if(s!==null){let l=(e-s)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);let a=this._updateTime(t),o=this._updateWeight(e);if(o>0){let l=this._interpolants,c=this._propertyBindings;if(this.blendMode===om)for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulateAdditive(o);else for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulate(i,o)}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;n!==null&&(t*=n.evaluate(e)[0],e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t))}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,i=this.time+e,s=this._loopCount,a=n===2202;if(e===0)return s===-1?i:a&&(1&s)==1?t-i:i;if(n===2200){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else{if(!(i<0)){this.time=i;break e}i=0}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=t||i<0){let o=Math.floor(i/t);i-=t*o,s+=Math.abs(o);let l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){let c=e<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=i;if(a&&(1&s)==1)return t-i}return i}_setEndings(e,t,n){let i=this._interpolantSettings;n?(i.endingStart=fs,i.endingEnd=fs):(i.endingStart=e?this.zeroSlopeAtStart?fs:ps:Ho,i.endingEnd=t?this.zeroSlopeAtEnd?fs:ps:Ho)}_scheduleFading(e,t,n){let i=this._mixer,s=i.time,a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);let o=a.parameterPositions,l=a.sampleValues;return o[0]=s,l[0]=t,o[1]=s+e,l[1]=n,this}},M0=new Float32Array(1),Da=class extends pi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){let n=e._localRoot||this._root,i=e._clip.tracks,s=i.length,a=e._propertyBindings,o=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName,h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==s;++u){let d=i[u],p=d.name,f=h[p];if(f!==void 0)++f.referenceCount,a[u]=f;else{if(f=a[u],f!==void 0){f._cacheIndex===null&&(++f.referenceCount,this._addInactiveBinding(f,l,p));continue}let v=t&&t._propertyBindings[u].binding.parsedPath;f=new kh(yt.create(n,p,v),d.ValueTypeName,d.getValueSize()),++f.referenceCount,this._addInactiveBinding(f,l,p),a[u]=f}o[u].resultBuffer=f.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,i=e._clip.uuid,s=this._actionsByClip[i];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,i,n)}let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let s=t[n];s.useCount++==0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let s=t[n];--s.useCount==0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let i=this._actions,s=this._actionsByClip,a=s[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=a;else{let o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;let s=e._clip.uuid,a=this._actionsByClip,o=a[s],l=o.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null,delete o.actionByRoot[(e._localRoot||this._root).uuid],l.length===0&&delete a[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let s=t[n];--s.referenceCount==0&&this._removeInactiveBinding(s)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){let i=this._bindingsByRootAndName,s=this._bindings,a=i[t];a===void 0&&(a={},i[t]=a),a[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,i=n.rootNode.uuid,s=n.path,a=this._bindingsByRootAndName,o=a[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete o[s],Object.keys(o).length===0&&delete a[i]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new hl(new Float32Array(2),new Float32Array(2),1,M0),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,s=t[i];e.__cacheIndex=i,t[i]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){let i=t||this._root,s=i.uuid,a=typeof e=="string"?Pr.findByName(i,e):e,o=a!==null?a.uuid:e,l=this._actionsByClip[o],c=null;if(n===void 0&&(n=a!==null?a.blendMode:am),l!==void 0){let u=l.actionByRoot[s];if(u!==void 0&&u.blendMode===n)return u;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;let h=new Fh(this,a,t,n);return this._bindAction(h,c),this._addInactiveAction(h,o,s),h}existingAction(e,t){let n=t||this._root,i=n.uuid,s=typeof e=="string"?Pr.findByName(n,e):e,a=s?s.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){let e=this._actions;for(let t=this._nActiveActions-1;t>=0;--t)e[t].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,i=this.time+=e,s=Math.sign(e),a=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,s,a);let o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){let a=s.knownActions;for(let o=0,l=a.length;o!==l;++o){let c=a[o];this._deactivateAction(c);let h=c._cacheIndex,u=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let s in n){let a=n[s].actionByRoot[t];a!==void 0&&(this._deactivateAction(a),this._removeInactiveAction(a))}let i=this._bindingsByRootAndName[t];if(i!==void 0)for(let s in i){let a=i[s];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};var gl=class{constructor(e,t,n=0,i=1/0){this.ray=new fi(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Ma,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Hh(e,this,n,t),n.sort(Up),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)Hh(e[i],this,n,t);return n.sort(Up),n}};function Up(r,e){return r.distance-e.distance}function Hh(r,e,t,n){if(r.layers.test(e.layers)&&r.raycast(e,t),n===!0){let i=r.children;for(let s=0,a=i.length;s<a;s++)Hh(i[s],e,t,!0)}}var Qv=new re;var ey=new M,ty=new M;var ny=new M;var iy=new M,ry=new Le,sy=new Le;var ay=new M,oy=new ve,ly=new ve;var cy=new M,hy=new M,uy=new M;var dy=new M,py=new ba;var fy=new Jt;var my=new M;typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:zc}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=zc);var Oa=new M;function An(r,e,t,n,i,s){let a=2*Math.PI*i/4,o=Math.max(s-2*i,0),l=Math.PI/4;Oa.copy(e),Oa[n]=0,Oa.normalize();let c=.5*a/(a+o),h=1-Oa.angleTo(r)/l;return Math.sign(Oa[t])===1?h*c:o/(a+o)+c+c*(1-h)}var Hs=class extends se{constructor(e=1,t=1,n=1,i=2,s=.1){if(i=i*2+1,s=Math.min(e/2,t/2,n/2,s),super(1,1,1,i,i,i),i===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let o=new M,l=new M,c=new M(e,t,n).divideScalar(2).subScalar(s),h=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,p=h.length/6,f=new M,v=.5/i;for(let m=0,x=0;m<h.length;m+=3,x+=2)switch(o.fromArray(h,m),l.copy(o),l.x-=Math.sign(l.x)*v,l.y-=Math.sign(l.y)*v,l.z-=Math.sign(l.z)*v,l.normalize(),h[m+0]=c.x*Math.sign(o.x)+l.x*s,h[m+1]=c.y*Math.sign(o.y)+l.y*s,h[m+2]=c.z*Math.sign(o.z)+l.z*s,u[m+0]=l.x,u[m+1]=l.y,u[m+2]=l.z,Math.floor(m/p)){case 0:f.set(1,0,0),d[x+0]=An(f,l,"z","y",s,n),d[x+1]=1-An(f,l,"y","z",s,t);break;case 1:f.set(-1,0,0),d[x+0]=1-An(f,l,"z","y",s,n),d[x+1]=1-An(f,l,"y","z",s,t);break;case 2:f.set(0,1,0),d[x+0]=1-An(f,l,"x","z",s,e),d[x+1]=An(f,l,"z","x",s,n);break;case 3:f.set(0,-1,0),d[x+0]=1-An(f,l,"x","z",s,e),d[x+1]=1-An(f,l,"z","x",s,n);break;case 4:f.set(0,0,1),d[x+0]=1-An(f,l,"x","y",s,e),d[x+1]=1-An(f,l,"y","x",s,t);break;case 5:f.set(0,0,-1),d[x+0]=An(f,l,"x","y",s,e),d[x+1]=1-An(f,l,"y","x",s,t);break}}};function uf(r,e=!1){let t=r[0].index!==null,n=new Set(Object.keys(r[0].attributes)),i=new Set(Object.keys(r[0].morphAttributes)),s={},a={},o=r[0].morphTargetsRelative,l=new at,c=0;for(let h=0;h<r.length;++h){let u=r[h],d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in u.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;s[p]===void 0&&(s[p]=[]),s[p].push(u.attributes[p]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in u.morphAttributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[p]===void 0&&(a[p]=[]),a[p].push(u.morphAttributes[p])}if(e){let p;if(t)p=u.index.count;else if(u.attributes.position!==void 0)p=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,h),c+=p}}if(t){let h=0,u=[];for(let d=0;d<r.length;++d){let p=r[d].index;for(let f=0;f<p.count;++f)u.push(p.getX(f)+h);h+=r[d].attributes.position.count}l.setIndex(u)}for(let h in s){let u=hf(s[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in a){let u=a[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){let p=[];for(let v=0;v<a[h].length;++v)p.push(a[h][v][d]);let f=hf(p);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(f)}}return l}function hf(r){let e,t,n,i=-1,s=0;for(let c=0;c<r.length;++c){let h=r[c];if(h.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.array.length}let a=new e(s),o=0;for(let c=0;c<r.length;++c)a.set(r[c].array,o),o+=r[c].array.length;let l=new Mt(a,t,n);return i!==void 0&&(l.gpuType=i),l}function $h(r,e){if(e===qp)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===Ua||e===yl){let t=r.getIndex();if(t===null){let a=[],o=r.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);r.setIndex(a),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}let n=t.count-2,i=[];if(e===Ua)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}var Dr=class extends gi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new su(t)}),this.register(function(t){return new fu(t)}),this.register(function(t){return new mu(t)}),this.register(function(t){return new gu(t)}),this.register(function(t){return new ou(t)}),this.register(function(t){return new lu(t)}),this.register(function(t){return new cu(t)}),this.register(function(t){return new hu(t)}),this.register(function(t){return new ru(t)}),this.register(function(t){return new uu(t)}),this.register(function(t){return new au(t)}),this.register(function(t){return new pu(t)}),this.register(function(t){return new du(t)}),this.register(function(t){return new nu(t)}),this.register(function(t){return new vu(t)}),this.register(function(t){return new yu(t)})}load(e,t,n,i){let s=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let c=Xi.extractUrlBase(e);a=Xi.resolveURL(c,this.path)}else a=Xi.extractUrlBase(e);this.manager.itemStart(e);let o=function(c){i?i(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new La(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,a,function(h){t(h),s.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s,a={},o={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===gf){try{a[tt.KHR_BINARY_GLTF]=new xu(e)}catch(u){i&&i(u);return}s=JSON.parse(a[tt.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new wu(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){let u=s.extensionsUsed[h],d=s.extensionsRequired||[];switch(u){case tt.KHR_MATERIALS_UNLIT:a[u]=new iu;break;case tt.KHR_DRACO_MESH_COMPRESSION:a[u]=new _u(s,this.dracoLoader);break;case tt.KHR_TEXTURE_TRANSFORM:a[u]=new Mu;break;case tt.KHR_MESH_QUANTIZATION:a[u]=new bu;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}};function b0(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}var tt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},nu=class{constructor(e){this.parser=e,this.name=tt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e],c,h=new ve(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],Wt);let u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Lr(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Os(h),c.distance=u;break;case"spot":c=new fl(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Zi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,s=n.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}},iu=class{constructor(){this.name=tt.KHR_MATERIALS_UNLIT}getMaterialType(){return ht}extendParams(e,t,n){let i=[];e.color=new ve(1,1,1),e.opacity=1;let s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){let a=s.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Wt),e.opacity=a[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,ct))}return Promise.all(i)}},ru=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}},su=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:wn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){let o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new re(o,o)}return Promise.all(s)}},au=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:wn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(s)}},ou=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:wn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[];t.sheenColor=new ve(0,0,0),t.sheenRoughness=0,t.sheen=1;let a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){let o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],Wt)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,ct)),a.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(s)}},lu=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:wn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(s)}},cu=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:wn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;let o=a.attenuationColor||[1,1,1];return t.attenuationColor=new ve().setRGB(o[0],o[1],o[2],Wt),Promise.all(s)}},hu=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:wn}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}},uu=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:wn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));let o=a.specularColorFactor||[1,1,1];return t.specularColor=new ve().setRGB(o[0],o[1],o[2],Wt),a.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,ct)),Promise.all(s)}},du=class{constructor(e){this.parser=e,this.name=tt.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:wn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(s)}},pu=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:wn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(s)}},fu=class{constructor(e){this.parser=e,this.name=tt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let s=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,a)}},mu=class{constructor(e){this.parser=e,this.name=tt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;let a=s.extensions[t],o=i.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},gu=class{constructor(e){this.parser=e,this.name=tt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;let a=s.extensions[t],o=i.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},vu=class{constructor(e){this.name=tt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){let l=i.byteOffset||0,c=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(p){return p.buffer}):a.ready.then(function(){let p=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(p),h,u,d,i.mode,i.filter),p})})}else return null}},yu=class{constructor(e){this.name=tt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let c of i.primitives)if(c.mode!==Rn.TRIANGLES&&c.mode!==Rn.TRIANGLE_STRIP&&c.mode!==Rn.TRIANGLE_FAN&&c.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],l={};for(let c in a)o.push(this.parser.getDependency("accessor",a[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{let h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,p=[];for(let f of u){let v=new Le,m=new M,x=new Dt,g=new M(1,1,1),y=new Ps(f.geometry,f.material,d);for(let _=0;_<d;_++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,_),l.ROTATION&&x.fromBufferAttribute(l.ROTATION,_),l.SCALE&&g.fromBufferAttribute(l.SCALE,_),y.setMatrixAt(_,v.compose(m,x,g));for(let _ in l)if(_==="_COLOR_0"){let T=l[_];y.instanceColor=new Sr(T.array,T.itemSize,T.normalized)}else _!=="TRANSLATION"&&_!=="ROTATION"&&_!=="SCALE"&&f.geometry.setAttribute(_,l[_]);vt.prototype.copy.call(y,f),this.parser.assignFinalMaterial(y),p.push(y)}return h.isGroup?(h.clear(),h.add(...p),h):p[0]}))}},gf="glTF",Ba=12,df={JSON:1313821514,BIN:5130562},xu=class{constructor(e){this.name=tt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Ba),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==gf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-Ba,s=new DataView(e,Ba),a=0;for(;a<i;){let o=s.getUint32(a,!0);a+=4;let l=s.getUint32(a,!0);if(a+=4,l===df.JSON){let c=new Uint8Array(e,Ba+a,o);this.content=n.decode(c)}else if(l===df.BIN){let c=Ba+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},_u=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=tt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(let h in a){let u=Su[h]||h.toLowerCase();o[u]=a[h]}for(let h in e.attributes){let u=Su[h]||h.toLowerCase();if(a[h]!==void 0){let d=n.accessors[e.attributes[h]],p=zs[d.componentType];c[u]=p.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(p){for(let f in p.attributes){let v=p.attributes[f],m=l[f];m!==void 0&&(v.normalized=m)}u(p)},o,c,Wt,d)})})}},Mu=class{constructor(){this.name=tt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},bu=class{constructor(){this.name=tt.KHR_MESH_QUANTIZATION}},bl=class extends ji{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[s+a];return t}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=i-t,u=(n-t)/h,d=u*u,p=d*u,f=e*c,v=f-c,m=-2*p+3*d,x=p-d,g=1-m,y=x-d+u;for(let _=0;_!==o;_++){let T=a[v+_+o],E=a[v+_+l]*h,w=a[f+_+o],N=a[f+_]*h;s[_]=g*T+y*E+m*w+x*N}return s}},E0=new Dt,Eu=class extends bl{interpolate_(e,t,n,i){let s=super.interpolate_(e,t,n,i);return E0.fromArray(s).normalize().toArray(s),s}},Rn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},zs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},pf={9728:$t,9729:un,9984:Fo,9985:Xh,9986:pa,9987:Mr},ff={33071:Fn,33648:xa,10497:di},Qh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Su={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Yi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},S0={CUBICSPLINE:void 0,LINEAR:br,STEP:bs},eu={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function T0(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new ft({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Kn})),r.DefaultMaterial}function Ir(r,e,t){for(let n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Zi(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function w0(r,e,t){let n=!1,i=!1,s=!1;for(let c=0,h=e.length;c<h;c++){let u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);let a=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){let u=e[c];if(n){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):r.attributes.position;a.push(d)}if(i){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):r.attributes.normal;o.push(d)}if(s){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):r.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){let h=c[0],u=c[1],d=c[2];return n&&(r.morphAttributes.position=h),i&&(r.morphAttributes.normal=u),s&&(r.morphAttributes.color=d),r.morphTargetsRelative=!0,r})}function A0(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function R0(r){let e,t=r.extensions&&r.extensions[tt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+tu(t.attributes):e=r.indices+":"+tu(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+tu(r.targets[n]);return e}function tu(r){let e="",t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function Tu(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function C0(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}var P0=new Le,wu=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new b0,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,s=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,s=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&s<98?this.textureLoader=new dl(this.options.manager):this.textureLoader=new ml(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new La(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return Ir(s,o,i),Zi(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){let a=t[i].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let i=0,s=e.length;i<s;i++){let a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),s=(a,o)=>{let l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(let[c,h]of a.children.entries())s(h,o.children[c])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[tt.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(s,a){n.load(Xi.resolveURL(t.uri,i.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let a=Qh[i.type],o=zs[i.componentType],l=i.normalized===!0,c=new o(i.count*a);return Promise.resolve(new Mt(c,a,l))}let s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(a){let o=a[0],l=Qh[i.type],c=zs[i.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=i.byteOffset||0,p=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,f=i.normalized===!0,v,m;if(p&&p!==u){let x=Math.floor(d/p),g="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+x+":"+i.count,y=t.cache.get(g);y||(v=new c(o,x*p,i.count*p/h),y=new Cs(v,p/h),t.cache.add(g,y)),m=new Er(y,l,d%p/h,f)}else o===null?v=new c(i.count*l):v=new c(o,d,i.count*l),m=new Mt(v,l,f);if(i.sparse!==void 0){let x=Qh.SCALAR,g=zs[i.sparse.indices.componentType],y=i.sparse.indices.byteOffset||0,_=i.sparse.values.byteOffset||0,T=new g(a[1],y,i.sparse.count*x),E=new c(a[2],_,i.sparse.count*l);o!==null&&(m=new Mt(m.array.slice(),m.itemSize,m.normalized));for(let w=0,N=T.length;w<N;w++){let b=T[w];if(m.setX(b,E[w*l]),l>=2&&m.setY(b,E[w*l+1]),l>=3&&m.setZ(b,E[w*l+2]),l>=4&&m.setW(b,E[w*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){let t=this.json,n=this.options,s=t.textures[e].source,a=t.images[s],o=this.textureLoader;if(a.uri){let l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,n){let i=this,s=this.json,a=s.textures[e],o=s.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let d=(s.samplers||{})[a.sampler]||{};return h.magFilter=pf[d.magFilter]||un,h.minFilter=pf[d.minFilter]||Mr,h.wrapS=ff[d.wrapS]||di,h.wrapT=ff[d.wrapT]||di,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let a=i.images[e],o=self.URL||self.webkitURL,l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(u){c=!0;let d=new Blob([u],{type:a.mimeType});return l=o.createObjectURL(d),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(l).then(function(u){return new Promise(function(d,p){let f=d;t.isImageBitmapLoader===!0&&(f=function(v){let m=new Qt(v);m.needsUpdate=!0,d(m)}),t.load(Xi.resolveURL(u,s.path),f,void 0,p)})}).then(function(u){return c===!0&&o.revokeObjectURL(l),u.userData.mimeType=a.mimeType||C0(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){let s=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),s.extensions[tt.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[tt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let l=s.associations.get(a);a=s.extensions[tt.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,l)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new wr,pn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new Tr,pn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(i||s||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),s&&(l.vertexColors=!0),a&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return ft}loadMaterial(e){let t=this,n=this.json,i=this.extensions,s=n.materials[e],a,o={},l=s.extensions||{},c=[];if(l[tt.KHR_MATERIALS_UNLIT]){let u=i[tt.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),c.push(u.extendParams(o,s,t))}else{let u=s.pbrMetallicRoughness||{};if(o.color=new ve(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],Wt),o.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",u.baseColorTexture,ct)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=Wn);let h=s.alphaMode||eu.OPAQUE;if(h===eu.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===eu.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==ht&&(c.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new re(1,1),s.normalTexture.scale!==void 0)){let u=s.normalTexture.scale;o.normalScale.set(u,u)}if(s.occlusionTexture!==void 0&&a!==ht&&(c.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==ht){let u=s.emissiveFactor;o.emissive=new ve().setRGB(u[0],u[1],u[2],Wt)}return s.emissiveTexture!==void 0&&a!==ht&&c.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,ct)),Promise.all(c).then(function(){let u=new a(o);return s.name&&(u.name=s.name),Zi(u,s),t.associations.set(u,{materials:e}),s.extensions&&Ir(i,u,s),u})}createUniqueName(e){let t=yt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function s(o){return n[tt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return mf(l,o,t)})}let a=[];for(let o=0,l=e.length;o<l;o++){let c=e[o],h=R0(c),u=i[h];if(u)a.push(u.promise);else{let d;c.extensions&&c.extensions[tt.KHR_DRACO_MESH_COMPRESSION]?d=s(c):d=mf(new at,c,t),i[h]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,i=this.extensions,s=n.meshes[e],a=s.primitives,o=[];for(let l=0,c=a.length;l<c;l++){let h=a[l].material===void 0?T0(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let p=0,f=h.length;p<f;p++){let v=h[p],m=a[p],x,g=c[p];if(m.mode===Rn.TRIANGLES||m.mode===Rn.TRIANGLE_STRIP||m.mode===Rn.TRIANGLE_FAN||m.mode===void 0)x=s.isSkinnedMesh===!0?new el(v,g):new _e(v,g),x.isSkinnedMesh===!0&&x.normalizeSkinWeights(),m.mode===Rn.TRIANGLE_STRIP?x.geometry=$h(x.geometry,yl):m.mode===Rn.TRIANGLE_FAN&&(x.geometry=$h(x.geometry,Ua));else if(m.mode===Rn.LINES)x=new Is(v,g);else if(m.mode===Rn.LINE_STRIP)x=new Ls(v,g);else if(m.mode===Rn.LINE_LOOP)x=new nl(v,g);else if(m.mode===Rn.POINTS)x=new Ds(v,g);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(x.geometry.morphAttributes).length>0&&A0(x,s),x.name=t.createUniqueName(s.name||"mesh_"+e),Zi(x,s),m.extensions&&Ir(i,x,m),t.assignFinalMaterial(x),u.push(x)}for(let p=0,f=u.length;p<f;p++)t.associations.set(u[p],{meshes:e,primitives:p});if(u.length===1)return s.extensions&&Ir(i,u[0],s),u[0];let d=new De;s.extensions&&Ir(i,d,s),t.associations.set(d,{meshes:e});for(let p=0,f=u.length;p<f;p++)d.add(u[p]);return d})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new It(Zp.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Fi(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Zi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let s=i.pop(),a=i,o=[],l=[];for(let c=0,h=a.length;c<h;c++){let u=a[c];if(u){o.push(u);let d=new Le;s!==null&&d.fromArray(s.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new tl(o,l)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,a=[],o=[],l=[],c=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){let p=i.channels[u],f=i.samplers[p.sampler],v=p.target,m=v.node,x=i.parameters!==void 0?i.parameters[f.input]:f.input,g=i.parameters!==void 0?i.parameters[f.output]:f.output;v.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",x)),l.push(this.getDependency("accessor",g)),c.push(f),h.push(v))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){let d=u[0],p=u[1],f=u[2],v=u[3],m=u[4],x=[];for(let g=0,y=d.length;g<y;g++){let _=d[g],T=p[g],E=f[g],w=v[g],N=m[g];if(_===void 0)continue;_.updateMatrix&&_.updateMatrix();let b=n._createAnimationTracks(_,T,E,w,N);if(b)for(let L=0;L<b.length;L++)x.push(b[L])}return new Pr(s,void 0,x)})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){let a=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=i.weights.length;l<c;l++)o.morphTargetInfluences[l]=i.weights[l]}),a})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),a=[],o=i.children||[];for(let c=0,h=o.length;c<h;c++)a.push(n.getDependency("node",o[c]));let l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(a),l]).then(function(c){let h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(p){p.isSkinnedMesh&&p.bind(d,P0)});for(let p=0,f=u.length;p<f;p++)h.add(u[p]);return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let s=t.nodes[e],a=s.name?i.createUniqueName(s.name):"",o=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),s.camera!==void 0&&o.push(i.getDependency("camera",s.camera).then(function(c){return i._getNodeRef(i.cameraCache,s.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(s.isBone===!0?h=new Sa:c.length>1?h=new De:c.length===1?h=c[0]:h=new vt,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(s.name&&(h.userData.name=s.name,h.name=a),Zi(h,s),s.extensions&&Ir(n,h,s),s.matrix!==void 0){let u=new Le;u.fromArray(s.matrix),h.applyMatrix4(u)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,s=new De;n.name&&(s.name=i.createUniqueName(n.name)),Zi(s,n),n.extensions&&Ir(t,s,n);let a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(i.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let h=0,u=l.length;h<u;h++)s.add(l[h]);let c=h=>{let u=new Map;for(let[d,p]of i.associations)(d instanceof pn||d instanceof Qt)&&u.set(d,p);return h.traverse(d=>{let p=i.associations.get(d);p!=null&&u.set(d,p)}),u};return i.associations=c(s),s})}_createAnimationTracks(e,t,n,i,s){let a=[],o=e.name?e.name:e.uuid,l=[];Yi[s.path]===Yi.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(o);let c;switch(Yi[s.path]){case Yi.weights:c=mi;break;case Yi.rotation:c=zn;break;case Yi.position:case Yi.scale:c=$n;break;default:switch(n.itemSize){case 1:c=mi;break;case 2:case 3:default:c=$n;break}break}let h=i.interpolation!==void 0?S0[i.interpolation]:br,u=this._getArrayFromAccessor(n);for(let d=0,p=l.length;d<p;d++){let f=new c(l[d]+"."+Yi[s.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(f),a.push(f)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Tu(t.constructor),i=new Float32Array(t.length);for(let s=0,a=t.length;s<a;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof zn?Eu:bl;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function L0(r,e,t){let n=e.attributes,i=new Jt;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(i.set(new M(l[0],l[1],l[2]),new M(c[0],c[1],c[2])),o.normalized){let h=Tu(zs[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let s=e.targets;if(s!==void 0){let o=new M,l=new M;for(let c=0,h=s.length;c<h;c++){let u=s[c];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],p=d.min,f=d.max;if(p!==void 0&&f!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(f[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(f[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(f[2]))),d.normalized){let v=Tu(zs[d.componentType]);l.multiplyScalar(v)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}r.boundingBox=i;let a=new dn;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=a}function mf(r,e,t){let n=e.attributes,i=[];function s(a,o){return t.getDependency("accessor",a).then(function(l){r.setAttribute(o,l)})}for(let a in n){let o=Su[a]||a.toLowerCase();o in r.attributes||i.push(s(n[a],o))}if(e.indices!==void 0&&!r.index){let a=t.getDependency("accessor",e.indices).then(function(o){r.setIndex(o)});i.push(a)}return st.workingColorSpace!==Wt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${st.workingColorSpace}" not supported.`),Zi(r,e),L0(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?w0(r,e.targets,t):r})}var El=class extends Hi{constructor(e=null){super();let t=new se;t.deleteAttribute("uv");let n=new ft({side:Kt}),i=new ft,s=5;e!==null&&e._useLegacyLights===!1&&(s=900);let a=new Os(16777215,s,28,2);a.position.set(.418,16.199,.3),this.add(a);let o=new _e(t,n);o.position.set(-.757,13.219,.717),o.scale.set(31.713,28.305,28.591),this.add(o);let l=new _e(t,i);l.position.set(-10.906,2.009,1.846),l.rotation.set(0,-.195,0),l.scale.set(2.328,7.905,4.651),this.add(l);let c=new _e(t,i);c.position.set(-5.607,-.754,-.758),c.rotation.set(0,.994,0),c.scale.set(1.97,1.534,3.955),this.add(c);let h=new _e(t,i);h.position.set(6.167,.857,7.803),h.rotation.set(0,.561,0),h.scale.set(3.927,6.285,3.687),this.add(h);let u=new _e(t,i);u.position.set(-2.017,.018,6.124),u.rotation.set(0,.333,0),u.scale.set(2.002,4.566,2.064),this.add(u);let d=new _e(t,i);d.position.set(2.291,-.756,-2.621),d.rotation.set(0,-.286,0),d.scale.set(1.546,1.552,1.496),this.add(d);let p=new _e(t,i);p.position.set(-2.193,-.369,-5.547),p.rotation.set(0,.516,0),p.scale.set(3.875,3.487,2.986),this.add(p);let f=new _e(t,Gs(50));f.position.set(-16.116,14.37,8.208),f.scale.set(.1,2.428,2.739),this.add(f);let v=new _e(t,Gs(50));v.position.set(-16.109,18.021,-8.207),v.scale.set(.1,2.425,2.751),this.add(v);let m=new _e(t,Gs(17));m.position.set(14.904,12.198,-1.832),m.scale.set(.15,4.265,6.331),this.add(m);let x=new _e(t,Gs(43));x.position.set(-.462,8.89,14.52),x.scale.set(4.38,5.441,.088),this.add(x);let g=new _e(t,Gs(20));g.position.set(3.235,11.486,-12.541),g.scale.set(2.5,2,.1),this.add(g);let y=new _e(t,Gs(100));y.position.set(0,20,0),y.scale.set(1,.1,1),this.add(y)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Gs(r){let e=new ht;return e.color.setScalar(r),e}var Sl={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var vn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},I0=new Fi(-1,1,1,-1,0,1),Au=class extends at{constructor(){super(),this.setAttribute("position",new Pe([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Pe([0,2,0,0,2,0],2))}},D0=new Au,Ki=class{constructor(e){this._mesh=new _e(D0,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,I0)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Tl=class extends vn{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Ot?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=qi.clone(e.uniforms),this.material=new Ot({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Ki(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var ka=class extends vn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let i=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}},wl=class extends vn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Al=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new re);this._width=n.width,this._height=n.height,t=new an(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Gn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Tl(Sl),this.copyPass.material.blending=Bp,this.clock=new Bs}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let i=0,s=this.passes.length;i<s;i++){let a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}ka!==void 0&&(a instanceof ka?n=!0:a instanceof wl&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new re);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Rl=class extends vn{constructor(e,t,n=null,i=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ve}render(e,t,n){let i=e.autoClear;e.autoClear=!1;let s,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=i}};var vf={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ve(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var Vs=class r extends vn{constructor(e,t,n,i){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new re(e.x,e.y):new re(256,256),this.clearColor=new ve(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new an(s,a,{type:Gn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let d=new an(s,a,{type:Gn});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let p=new an(s,a,{type:Gn});p.texture.name="UnrealBloomPass.v"+u,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),s=Math.round(s/2),a=Math.round(a/2)}let o=vf;this.highPassUniforms=qi.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ot({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new re(1/s,1/a),s=Math.round(s/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new M(1,1,1),new M(1,1,1),new M(1,1,1),new M(1,1,1),new M(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=Sl;this.copyUniforms=qi.clone(h.uniforms),this.blendMaterial=new Ot({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:kt,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new ve,this.oldClearAlpha=1,this.basic=new ht,this.fsQuad=new Ki(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,i),this.renderTargetsVertical[s].setSize(n,i),this.separableBlurMaterials[s].uniforms.invSize.value=new re(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=r.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=r.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}getSeperableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new Ot({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new re(.5,.5)},direction:{value:new re(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new Ot({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};Vs.BlurDirectionX=new re(1,0);Vs.BlurDirectionY=new re(0,1);var yf={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = OptimizedCineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var Cl=class extends vn{constructor(){super();let e=yf;this.uniforms=qi.clone(e.uniforms),this.material=new cl({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Ki(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},st.getTransfer(this._outputColorSpace)===xt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Gh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Vh?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Wh?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Na?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===jh&&(this.material.defines.AGX_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var pt=(r,e={})=>new ft(Object.assign({color:r,roughness:.6,metalness:0},e));function Ee(r,e,t,n,i,s,a=!0){let o=new _e(r,e);return o.position.set(n,i,s),o.castShadow=a,o.receiveShadow=!0,t.add(o),o}var Ft=(r,e,t,n=.12)=>new Hs(r,e,t,3,n);function Nr(r,e={}){let t=Object.assign({w:1024,h:256,bg:null,fg:"#ffffff",sub:"",subFg:"#d9f3e8",font:"900",pad:60},e),n=document.createElement("canvas");n.width=t.w,n.height=t.h;let i=n.getContext("2d");t.bg&&(i.fillStyle=t.bg,i.fillRect(0,0,t.w,t.h)),i.fillStyle=t.fg,i.textAlign="center",i.textBaseline="middle";let s=t.h*(t.sub?.44:.6);for(i.font=`${t.font} ${s}px Inter, Arial, sans-serif`;i.measureText(r).width>t.w-t.pad*2&&s>20;)s-=4,i.font=`${t.font} ${s}px Inter, Arial, sans-serif`;i.fillText(r,t.w/2,t.sub?t.h*.4:t.h/2),t.sub&&(i.fillStyle=t.subFg,i.font=`600 ${t.h*.16}px Inter, Arial, sans-serif`,i.fillText(t.sub,t.w/2,t.h*.78));let a=new ln(n);return a.colorSpace=ct,a.anisotropy=8,a}function N0(r,e=3116906){let t=new De,n=new De;t.add(n);let i=pt(15659507,{roughness:.45,metalness:.05}),s=pt(2369581,{roughness:.7}),a=pt(14278114,{roughness:.18,metalness:.9}),o=pt(1911866,{roughness:.08,metalness:.3}),l=pt(e,{roughness:.45}),c=pt(1381911,{roughness:.9});Ee(new se(7.4,.35,1.1),s,n,-.2,.85,0),Ee(Ft(2.1,2.05,2.45,.22),i,n,2.5,2.05,0),Ee(Ft(1.25,1.05,2.35,.2),i,n,3.95,1.5,0),Ee(Ft(.12,.75,2.3,.05),a,n,4.58,1.45,0);for(let b=0;b<5;b++)Ee(new se(.08,.06,1.9),s,n,4.62,1.18+b*.13,0,!1);Ee(Ft(.35,.35,2.6,.08),s,n,4.55,.85,0);let h=Ee(new se(.08,.85,2.2),o,n,3.52,2.5,0);h.rotation.z=.28,[1,-1].forEach(b=>{Ee(new se(1.15,.72,.06),o,n,2.75,2.5,b*1.23,!1)}),Ee(new se(.06,.7,2.1),o,n,1.44,2.5,0,!1),[1,-1].forEach(b=>{Ee(new se(2.12,.16,.04),l,n,2.5,1.62,b*1.235,!1)});let u=Nr(r.toUpperCase(),{w:512,h:256,fg:"#"+e.toString(16).padStart(6,"0"),sub:"SEPTIC SERVICE",subFg:"#33413b"});[1,-1].forEach(b=>{let L=Ee(new Bt(1.5,.75),new ft({map:u,transparent:!0,roughness:.5}),n,2.55,1.95,b*1.236,!1);b<0&&(L.rotation.y=Math.PI)}),[1,-1].forEach(b=>{Ee(new se(.08,.35,.22),s,n,3.3,2.35,b*1.42),Ee(new se(.5,.04,.04),s,n,3.4,2.35,b*1.3)});let d=pt(16774872,{emissive:16773568,emissiveIntensity:0});[.82,-.82].forEach(b=>Ee(new je(.16,.16,.1,18),d,n,4.6,1.65,b,!1).rotation.z=Math.PI/2);let p=new ht({color:16773576,transparent:!0,opacity:0,depthWrite:!1,blending:kt,side:Wn}),f=[];[.82,-.82].forEach(b=>{let L=new _e(new Gi(1.6,9,24,1,!0),p);L.rotation.z=Math.PI/2,L.position.set(9.1,1.4,b),n.add(L),f.push(L)});let v=pt(16726831,{emissive:16719888,emissiveIntensity:.3});[1,-1].forEach(b=>Ee(new se(.06,.25,.35),v,n,-3.95,1.05,b*1.05,!1));let m=pt(16753434,{emissive:16750848,emissiveIntensity:.2,roughness:.3});Ee(Ft(.35,.16,1.5,.06),m,n,2.45,3.15,0);let x=pt(13883870,{roughness:.42,metalness:.25}),g=Ee(new je(1.18,1.18,4.3,40),x,n,-1.25,2.25,0);g.rotation.z=Math.PI/2,[-3.4,.9].forEach((b,L)=>{let I=Ee(new cn(1.18,32,16,0,Math.PI*2,0,Math.PI/2),x,n,b,2.25,0);I.rotation.z=L?-Math.PI/2:Math.PI/2,I.scale.y=.32}),[-2.9,-1.25,.4].forEach(b=>{let L=Ee(new je(1.2,1.2,.1,40),a,n,b,2.25,0);L.rotation.z=Math.PI/2});let y=Nr(r.toUpperCase(),{w:1024,h:220,fg:"#"+e.toString(16).padStart(6,"0")}),_=new ft({map:y,transparent:!0,roughness:.3,metalness:.2});[0,Math.PI].forEach(b=>{let L=new _e(new je(1.195,1.195,3.2,40,1,!0,-.45+Math.PI/2,.9),_);L.rotation.z=Math.PI/2,L.rotation.x=b,L.position.set(-1.25,2.25,0),n.add(L)});let T=Ee(new je(1.192,1.192,4,40,1,!0,Math.PI*.92,Math.PI*.16),l,n,-1.25,2.25,0,!1);T.rotation.z=Math.PI/2,T.material.side=Wn;let E=T.clone();E.rotation.x=Math.PI,n.add(E),Ee(new je(.32,.32,.25,20),a,n,-1.2,3.5,0),Ee(new je(.14,.14,.5,14),s,n,-3.75,1.5,.55).rotation.z=Math.PI/2;let w=new De;w.position.set(-3.1,1.3,-1.25),n.add(w),Ee(new Wi(.38,.12,10,28),pt(2829875,{roughness:.8}),w,0,0,0).rotation.y=0,Ee(new je(.45,.45,.04,24),pt(13650474),w,0,0,-.12).rotation.x=Math.PI/2;for(let b=0;b<4;b++)Ee(new se(.04,.04,.45),a,n,-3.55,1.3+b*.38,1.05,!1);[-.2,.2].forEach(b=>Ee(new se(.05,1.5,.05),a,n,-3.55,1.85,1.05+b,!1)),Ee(Ft(1.2,.55,.6,.06),a,n,.6,1.05,1);let N=[];return[[3.65,1.12],[3.65,-1.12],[-1.7,1.12],[-1.7,-1.12],[-2.95,1.12],[-2.95,-1.12]].forEach(b=>{let L=new De;L.position.set(b[0],.55,b[1]),n.add(L);let I=Ee(new je(.55,.55,.42,28),c,L,0,0,0);I.rotation.x=Math.PI/2;let P=Ee(new je(.3,.3,.44,18),a,L,0,0,0,!1);P.rotation.x=Math.PI/2,Ee(new je(.08,.08,.46,8),s,L,0,0,0,!1).rotation.x=Math.PI/2,N.push(L)}),[3.65,-2.3].forEach((b,L)=>[1,-1].forEach(I=>{let P=Ee(new je(.68,.68,.5,24,1,!0,0,Math.PI),s,n,b,.6,I*1.12);P.rotation.x=Math.PI/2,P.rotation.y=Math.PI/2,L&&P.scale.set(1,1,1),P.material.side=Wn})),Ee(new je(.08,.08,1.4,12),a,n,1.35,2.6,-1.15),t.userData={wheels:N,hl:d,cones:f,coneMat:p,beacon:m,body:n},t.setLights=b=>{d.emissiveIntensity=b?3:0,p.opacity=b?.09:0,v.emissiveIntensity=b?1.5:.3},t.tick=(b,L,I)=>{N.forEach(P=>{P.rotation.z=-I/.55}),m.emissiveIntensity=L&&Math.sin(b*12)>0?2.5:.2,n.position.y=L?Math.sin(b*17)*.015:0},t}function Ru(r,e,t,n,i,s,a,o,l,c){let h=pt(2369581,{roughness:.7}),u=pt(14278114,{roughness:.2,metalness:.85}),d=pt(1381911,{roughness:.9}),p=[];[[a,1],[a,-1],[o,1],[o,-1]].forEach(([g,y])=>{let _=new De;_.position.set(g,l,y*1.02),e.add(_);let T=Ee(new je(l,l,.36,26),d,_,0,0,0);T.rotation.x=Math.PI/2;let E=Ee(new je(l*.55,l*.55,.38,16),u,_,0,0,0,!1);E.rotation.x=Math.PI/2,p.push(_)});let f=pt(16774872,{emissive:16773568,emissiveIntensity:0}),v=pt(16726831,{emissive:16719888,emissiveIntensity:.3}),m=new ht({color:16773576,transparent:!0,opacity:0,depthWrite:!1,blending:kt,side:Wn});[.72,-.72].forEach(g=>{Ee(new se(.08,.22,.38),f,e,s/2+.02,1.05,g,!1);let y=new _e(new Gi(1.5,8,20,1,!0),m);y.rotation.z=Math.PI/2,y.position.set(s/2+4,.95,g),e.add(y)}),[1,-1].forEach(g=>Ee(new se(.06,.4,.25),v,e,-s/2-.01,1.05,g*.85,!1));let x=pt(16753434,{emissive:16750848,emissiveIntensity:.2,roughness:.3});return r.userData={wheels:p,hl:f,coneMat:m,beacon:x,body:e,rear:-s/2},r.setLights=g=>{f.emissiveIntensity=g?3:0,m.opacity=g?.08:0,v.emissiveIntensity=g?1.5:.3},r.tick=(g,y,_)=>{p.forEach(T=>{T.rotation.z=-_/l}),e.position.y=y?Math.sin(g*15)*.015:0},{dark:h,chrome:u,beacon:x}}function Cu(r,e,t,n,i,s,a,o,l){let c=Nr(e.toUpperCase(),{w:1024,h:300,fg:"#ffffff",bg:"#"+n.toString(16).padStart(6,"0"),sub:t,subFg:"#d9f3e8"}),h=new ft({map:c,roughness:.45});[1,-1].forEach(u=>{let d=Ee(new Bt(a,o),h,r,i,s,u*l,!1);u<0&&(d.rotation.y=Math.PI)})}function U0(r,e,t){let n=new De,i=new De;n.add(i);let s=pt(15922422,{roughness:.4}),a=pt(1911866,{roughness:.08,metalness:.3}),o=Ru(n,i,e,r,t,6.2,2.1,-1.9,.42,2.7);Ee(Ft(4.6,2.35,2.05,.25),s,i,-.75,1.65,0),Ee(Ft(1.7,1.35,2,.3),s,i,2.3,1.15,0);let l=Ee(new se(.06,.85,1.8),a,i,2,2.05,0);return l.rotation.z=.55,[1,-1].forEach(c=>Ee(new se(.9,.6,.04),a,i,1.15,2.1,c*1.03,!1)),Ee(Ft(.2,.3,2.1,.06),o.dark,i,3.1,.65,0),Ee(new se(3.6,.12,.04),pt(e),i,-.8,.75,1.035,!1),Ee(new se(3.6,.12,.04),pt(e),i,-.8,.75,-1.035,!1),Cu(i,r,t,e,-.95,1.75,3.3,.97,1.04),Ee(Ft(.3,.12,1.2,.05),o.beacon,i,.9,2.88,0),[-2.2,.4].forEach(c=>Ee(new se(.08,.12,2),o.chrome,i,c,2.92,0,!1)),[.7,-.7].forEach(c=>Ee(new se(3.2,.06,.4),pt(12107460,{metalness:.6}),i,-.9,3.02,c,!1)),n.scale.setScalar(1),n}function O0(r,e,t){let n=new De,i=new De;n.add(i);let s=pt(15922422,{roughness:.35,metalness:.1}),a=pt(1911866,{roughness:.08,metalness:.3}),o=Ru(n,i,e,r,t,6,1.9,-1.8,.46,2);Ee(Ft(2.3,.9,2.05,.2),s,i,1.85,1.05,0),Ee(Ft(2,1.2,2,.22),s,i,.15,1.75,0);let l=Ee(new se(.06,.75,1.8),a,i,1.2,2,0);l.rotation.z=.45,[1,-1].forEach(h=>Ee(new se(1.4,.55,.04),a,i,.15,2,h*1.005,!1)),Ee(Ft(2.7,.85,2.05,.1),s,i,-1.75,1.05,0),Ee(new se(2.5,.1,1.8),o.dark,i,-1.75,1.42,0,!1),Cu(i,r,t,e,.35,1.25,1.9,.55,1.01),Ee(Ft(.5,.45,1.9,.05),o.chrome,i,-.4,1.68,0),[-3.1,-.6].forEach(h=>[.75,-.75].forEach(u=>Ee(new se(.07,1.2,.07),o.dark,i,h,2,u,!1))),[.75,-.75].forEach(h=>Ee(new se(2.6,.07,.07),o.dark,i,-1.85,2.6,h,!1));let c=pt(14263361,{roughness:.6});[.35,-.35].forEach(h=>Ee(new se(4.2,.07,.07),c,i,-1.2,2.68,h,!1));for(let h=0;h<9;h++)Ee(new se(.05,.05,.7),c,i,-3.1+h*.47,2.68,0,!1);return Ee(Ft(.3,.12,1.1,.05),o.beacon,i,.15,2.42,0),Ee(Ft(.25,.3,2.1,.06),o.dark,i,3,.7,0),n}function B0(r,e,t){let n=new De,i=new De;n.add(i);let s=pt(15922422,{roughness:.4}),a=pt(1911866,{roughness:.08,metalness:.3}),o=Ru(n,i,e,r,t,7.2,2.6,-2.2,.48,3.3);Ee(Ft(1.9,1.9,2.2,.25),s,i,2.55,1.6,0),Ee(Ft(1,1,2.1,.2),s,i,3.45,1.05,0);let l=Ee(new se(.06,.7,1.9),a,i,3.3,2.1,0);return l.rotation.z=.3,Ee(Ft(4.9,2.7,2.4,.08),pt(e,{roughness:.5}),i,-.95,2.05,0),Cu(i,r,t,e,-.95,2.1,4.4,1.3,1.215),Ee(new se(.05,2.4,2.2),pt(13620441,{metalness:.4,roughness:.4}),i,-3.42,2.05,0),Ee(Ft(.3,.12,1.2,.05),o.beacon,i,2.55,2.62,0),n}function xf(r,e,t,n){if(r==="van")return U0(e,t,n);if(r==="pickup")return O0(e,t,n);if(r==="box")return B0(e,t,n);let i=N0(e,t);return i.userData.rear=-3.9,i}function _f(r){let e=new Map,t=new Map,n=r.clone();return Mf(r,n,function(i,s){e.set(s,i),t.set(i,s)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;let s=i,a=e.get(i),o=a.skeleton.bones;s.skeleton=a.skeleton.clone(),s.bindMatrix.copy(a.bindMatrix),s.skeleton.bones=o.map(function(l){return t.get(l)}),s.bind(s.skeleton,s.bindMatrix)}),n}function Mf(r,e,t){t(r,e);for(let n=0;n<r.children.length;n++)Mf(r.children[n],e.children[n],t)}var bf="/x3d/assets/people/",Ws={models:{},clips:{},ready:null};function Tf(r=["owner","sarah","neighbor","jogger"]){let e=new Dr,n=[...r.filter(i=>!Ws.models[i]).map(i=>e.loadAsync(bf+i+".glb").then(s=>{Ws.models[i]=s.scene})),...Object.keys(Ws.clips).length?[]:["anim_a","anim_b"].map(i=>e.loadAsync(bf+i+".glb").then(s=>s.animations.forEach(a=>{Ws.clips[a.name]=a})))];return Promise.all(n)}var Pu=new Map;function F0(r,e,t){if(Pu.has(t))return Pu.get(t);let n=r.image,i=document.createElement("canvas");i.width=n.width,i.height=n.height;let s=i.getContext("2d");s.drawImage(n,0,0);let a=s.getImageData(0,0,i.width,i.height),o=a.data;for(let c=0;c<o.length;c+=4){let h=o[c]/255,u=o[c+1]/255,d=o[c+2]/255,p=Math.max(h,u,d),f=Math.min(h,u,d),v=(p+f)/2,m=p-f;if(m<.06)continue;let x=m/(1-Math.abs(2*v-1)),g=p===h?(u-d)/m%6:p===u?(d-h)/m+2:(h-u)/m+4;g=(g*60+360)%360;for(let[y,_,T,E=1,w=1]of e)if(g>=y&&g<=_){let N=Math.min(1,x*E),b=Math.min(1,v*w),L=(1-Math.abs(2*b-1))*N,I=L*(1-Math.abs(T/60%2-1)),P=b-L/2,[k,U,$]=T<60?[L,I,0]:T<120?[I,L,0]:T<180?[0,L,I]:T<240?[0,I,L]:T<300?[I,0,L]:[L,0,I];o[c]=(k+P)*255,o[c+1]=(U+P)*255,o[c+2]=($+P)*255;break}}s.putImageData(a,0,0);let l=new ln(i);return l.flipY=r.flipY,l.colorSpace=r.colorSpace,l.magFilter=r.magFilter,l.minFilter=r.minFilter,Pu.set(t,l),l}var Ef={idle:"Idle",walk:"Walking_A",lookDown:"Idle",lookUp:"Idle",phone:"Holding_A",phoneHappy:"Holding_A",call:"Holding_A",wave:"Idle",happy:"Cheer",point:"Idle",hose:"Holding_B",kneel:"Working_A",climb:"Walking_A",work:"Hammering",carry:"Holding_B",sit:"Sit_Chair_Idle",sitPhone:"Sit_Chair_Idle",sitFloor:"Sit_Floor_Idle",dig:"Digging",pickup:"PickUp",interact:"Interact",run:"Running_A"},vi=(r,e,t)=>new M(r,e,t),H0=(r,e,t)=>Math.max(e,Math.min(t,r)),Lu=new M,Sf=new M,z0=new M,Ur=new Dt,Pl=new Dt,Ll=new Dt,Or=class{constructor(e={}){this.o=e=Object.assign({model:e.female?"sarah":"owner",height:1.75},e);let t=Ws.models[e.model];if(!t)throw new Error("people not loaded: "+e.model);let n=this.root=new De,i=this.model=_f(t);n.add(i),i.scale.setScalar(e.height/2.15),i.traverse(l=>{l.isMesh&&(l.castShadow=!0,l.receiveShadow=!0,l.frustumCulled=!1,e.recolor&&l.material.map&&(l.material=l.material.clone(),l.material.map=F0(l.material.map,e.recolor,e.model+JSON.stringify(e.recolor))),l.material.roughness=.78,l.material.metalness=0)});let s=l=>i.getObjectByName(l);this.b={hips:s("hips"),spine:s("spine"),chest:s("chest"),head:s("head"),uaR:s("upperarmr"),laR:s("lowerarmr"),wrR:s("wristr"),uaL:s("upperarml"),laL:s("lowerarml"),wrL:s("wristl"),handR:s("handslotr"),handL:s("handslotl")},this.j={hips:this.b.hips,spine:this.b.chest,neck:this.b.head,head:this.b.head,rHand:this.b.handR,lHand:this.b.handL},this.rest=["head","chest","uaR","laR","uaL","laL"].map(l=>[this.b[l],this.b[l].quaternion.clone()]),this.mixer=new Da(i),this.actions={},this.curClip=null;let a=this.phone=new De,o=new _e(new se(.075,.15,.012),new ft({color:1118999,roughness:.3,metalness:.4}));a.add(o),this.phoneScreen=new _e(new Bt(.066,.138),new ht({color:7313083})),this.phoneScreen.position.z=.007,a.add(this.phoneScreen),a.scale.setScalar(1.5),a.visible=!1,n.add(a),(e.hairStyle==="cap"||e.cap)&&this.addCap(e.capColor??2306090,e.capTex),this.mouth=new vt,this.eyes=[],this.brows=[],this.state="idle",this.mood="neutral",this.t=Math.random()*10,this.phase=0,this.speed=0,this.path=null,this.lookYaw=0,this.yaw=0,this.yawTarget=0,this.slump=0,this._w={},this.play("idle",0),this.mixer.update(Math.random()*2)}addCap(e,t){let n=this.b.head,i=new De;i.position.set(0,.84,.03),n.add(i);let s=new ft({color:e,roughness:.7}),a=new _e(new cn(.54,28,14,0,Math.PI*2,0,Math.PI*.5),s);a.scale.set(1.05,.66,1.05),i.add(a);let o=new _e(new je(.3,.3,.03,28,1,!1,0,Math.PI),s);o.rotation.y=Math.PI/2,o.rotation.x=.12,o.position.set(0,.02,.4),o.scale.set(1.35,1,1.55),i.add(o);let l=new _e(new cn(.04,10,8),s);if(l.position.y=.28,i.add(l),t){let c=new _e(new Bt(.34,.17),new ht({map:t,transparent:!0}));c.position.set(0,.16,.5),c.rotation.x=-.38,c.scale.setScalar(1.3),i.add(c)}i.traverse(c=>{c.isMesh&&(c.castShadow=!0)}),this.cap=i}play(e,t=.25){let n=Ef[e]||"Idle";if(this.curClip===n)return;let i=Ws.clips[n];if(!i)return;let s=this.actions[n]||(this.actions[n]=this.mixer.clipAction(i)),a=this.curClip&&this.actions[this.curClip];s.reset(),s.enabled=!0,s.setEffectiveWeight(1),s.play(),a&&t?s.crossFadeFrom(a,t,!0):a&&a.stop(),this.curClip=n}setMood(e){this.mood=e}set(e){this.state=e,this.phone.visible=e==="phone"||e==="call"||e==="phoneHappy"||e==="sitPhone",this.play(e)}walkTo(e,t=1.35,n){return this.path=e.map(i=>i.clone?i.clone():new M(i[0],0,i[1])),this.speed=t,this.set(n?"carry":"walk"),new Promise(i=>{this._arrive=i})}face(e,t){this.yawTarget=Math.atan2(e-this.root.position.x,t-this.root.position.z)}aim(e,t,n,i){if(i<=.001)return;e.updateWorldMatrix(!0,!1),t.updateWorldMatrix(!0,!1);let s=Lu.setFromMatrixPosition(e.matrixWorld),o=Sf.setFromMatrixPosition(t.matrixWorld).sub(s).normalize();this.root.getWorldQuaternion(Ll);let l=n.clone().normalize().applyQuaternion(Ll);Ur.setFromUnitVectors(o,l),i<1&&Ur.slerp(Pl.identity(),1-i),e.getWorldQuaternion(Pl),Pl.premultiply(Ur),e.parent.getWorldQuaternion(Ll),e.quaternion.copy(Ll.invert().multiply(Pl))}update(e){this.t+=e;let t=this.t;if(this.path&&this.path.length){let T=this.root.position,E=this.path[0],w=E.x-T.x,N=E.z-T.z,b=Math.hypot(w,N);if(b<.08)this.path.shift(),this.path.length||(this.path=null,this.state!=="carry"&&this.set("idle"),this._arrive&&this._arrive());else{let L=Math.min(b,this.speed*e);T.x+=w/b*L,T.z+=N/b*L,this.yawTarget=Math.atan2(w,N),this.phase+=e*this.speed*5.2}}let n=this.yawTarget-this.yaw;for(;n>Math.PI;)n-=Math.PI*2;for(;n<-Math.PI;)n+=Math.PI*2;this.yaw+=n*(1-Math.exp(-e*8)),this.root.rotation.y=this.yaw;let i=this.state,s=this.actions[Ef.walk];s&&(s.timeScale=i==="walk"?H0((this.speed||1.35)/(1.05*this.o.height/2.15),.6,1.9):i==="climb"?.7:1),this.rest.forEach(([T,E])=>T.quaternion.copy(E)),this.mixer.update(e);let a=1-Math.exp(-e*7),o=this._w,l=(T,E)=>(o[T]=(o[T]||0)+(E-(o[T]||0))*a,o[T]),c=this.b.uaR.getWorldPosition(Lu);this.root.worldToLocal(c);let h=Math.sign(c.x)||-1,u=l("sp",i==="sitPhone"||i==="phone"||i==="phoneHappy"||i==="call"?1:0);u>.01&&(this.aim(this.b.uaR,this.b.laR,vi(h*.25,-.8,.55),u),this.aim(this.b.laR,this.b.wrR,vi(-h*.25,.75,.65),u));let d=l("wave",i==="wave"?1:0),p=l("call",i==="call"?1:0),f=l("point",i==="point"?1:0),v=l("climb",i==="climb"?1:0);if(d>.01&&(this.aim(this.b.uaR,this.b.laR,vi(h*.75,.65,.15),d),this.aim(this.b.laR,this.b.wrR,vi(h*.25+Math.sin(t*9)*.45,1,.2),d)),f>.01&&(this.aim(this.b.uaR,this.b.laR,vi(h*.35,.15,1),f),this.aim(this.b.laR,this.b.wrR,vi(h*.1,.2,1),f)),v>.01){let T=Math.sin(t*5);this.aim(this.b.uaR,this.b.laR,vi(h*.3,1,.35+T*.2),v),this.aim(this.b.uaL,this.b.laL,vi(-h*.3,1,.35-T*.2),v)}let m=l("pitch",(i==="lookDown"?.55:i==="lookUp"?-.45:i==="phone"||i==="phoneHappy"||i==="call"||i==="sitPhone"?.3:0)+(this.mood==="worried"?.14:0)+this.slump*.35),x=l("roll",i==="call"?h*-.12:0)+(i==="idle"?Math.sin(t*.45)*.03:0),g=l("hy",i==="idle"?Math.sin(t*.3)*.14:this.lookYaw);Math.abs(m)+Math.abs(x)+Math.abs(g)>.001&&(Ur.setFromEuler(new Ts(m,g,x)),this.b.head.quaternion.multiply(Ur));let y=l("slump",this.slump);if(y>.01&&(Ur.setFromAxisAngle(vi(1,0,0),y*.35),this.b.chest.quaternion.multiply(Ur)),this.phone.visible){let T=this.b.handR.getWorldPosition(Lu),E=this.b.head.getWorldPosition(Sf);E.y+=.45*this.model.scale.y;let w=z0.set(Math.sin(this.yaw),0,Math.cos(this.yaw));T.addScaledVector(w,.05*this.o.height).lerp(E,.16),T.y+=.05*this.o.height,this.phone.position.copy(this.root.worldToLocal(T.clone())),this.phone.lookAt(E)}let _=l("bounce",i==="phoneHappy"||this.mood==="happy"&&i==="idle"?1:0);_>.01?this.model.position.y=Math.abs(Math.sin(t*5))*.025*_:this.model.position.y=0}};var js=matchMedia("(max-width:760px), (pointer:coarse)").matches,He=(()=>{let r=1234567;return()=>(r=r*16807%2147483647)/2147483647})(),Ve=(r,e={})=>new ft(Object.assign({color:r,roughness:.8,metalness:0},e)),qt=(r,e,t,n=.12,i=2)=>new Hs(r,e,t,i,n);function Se(r,e,t,n=0,i=0,s=0,a=!0){let o=new _e(r,e);return o.position.set(n,i,s),o.castShadow=a,o.receiveShadow=!0,t.add(o),o}var Iu={};function Br(r,e,t,n,i=1,s=1){if(Iu[r])return Iu[r];let a=document.createElement("canvas");a.width=e,a.height=t;let o=a.getContext("2d");n(o,e,t);let l=new ln(a);return l.colorSpace=ct,l.wrapS=l.wrapT=di,l.repeat.set(i,s),l.anisotropy=js?2:8,Iu[r]=l}var Ha=(r,e,t,n,i,s,a=2)=>{for(let o=0;o<n;o++){let l=i+He()*(s-i)|0;r.fillStyle=`rgb(${l},${l},${l})`,r.fillRect(He()*e,He()*t,a,a)}},G0=()=>Br("sid",256,256,(r,e,t)=>{for(let i=0;i<14;i++){let s=i*t/14,a=r.createLinearGradient(0,s,0,s+t/14);a.addColorStop(0,"#bdbdbd"),a.addColorStop(.12,"#fafafa"),a.addColorStop(.9,"#e9e9e9"),a.addColorStop(1,"#d6d6d6"),r.fillStyle=a,r.fillRect(0,s,e,t/14)}Ha(r,e,t,900,225,255,1)}),V0=()=>Br("shg",256,256,(r,e,t)=>{r.fillStyle="#d8d8d8",r.fillRect(0,0,e,t);let n=4,i=6;for(let s=0;s<n;s++)for(let a=0;a<i+1;a++){let o=180+He()*75|0;r.fillStyle=`rgb(${o},${o},${o})`;let l=s*e/n,c=(a-s%2*.5)*t/i;r.fillRect(l+2,c+2,e/n-3,t/i-3)}for(let s=0;s<n;s++)r.fillStyle="rgba(0,0,0,.35)",r.fillRect(s*e/n,0,3,t);Ha(r,e,t,1400,150,255,1)},.7,.5),W0=()=>Br("grs",512,512,(r,e,t)=>{r.fillStyle="#f2f2f2",r.fillRect(0,0,e,t);for(let n=0;n<40;n++){let i=20+He()*70,s=He()*e,a=He()*t,o=r.createRadialGradient(s,a,0,s,a,i),l=He()<.5?"220,220,220":"255,255,255";o.addColorStop(0,`rgba(${l},.6)`),o.addColorStop(1,`rgba(${l},0)`),r.fillStyle=o,r.fillRect(s-i,a-i,i*2,i*2)}for(let n=0;n<9e3;n++){let i=190+He()*65|0;r.strokeStyle=`rgb(${i},${i+(He()*10|0)>255?255:i},${i})`;let s=He()*e,a=He()*t;r.beginPath(),r.moveTo(s,a),r.lineTo(s+(He()-.5)*3,a-3-He()*4),r.stroke()}},110,110),j0=()=>Br("asp",256,256,(r,e,t)=>{r.fillStyle="#e8e8e8",r.fillRect(0,0,e,t),Ha(r,e,t,6e3,170,255,2);for(let n=0;n<6;n++){r.strokeStyle="rgba(40,40,40,.25)",r.lineWidth=1.5,r.beginPath();let i=He()*e,s=He()*t;r.moveTo(i,s);for(let a=0;a<6;a++)i+=(He()-.5)*40,s+=(He()-.5)*40,r.lineTo(i,s);r.stroke()}},60,1),X0=()=>Br("con",256,256,(r,e,t)=>{r.fillStyle="#f4f4f4",r.fillRect(0,0,e,t),Ha(r,e,t,3e3,205,255,2),r.fillStyle="rgba(0,0,0,.28)",r.fillRect(0,0,e,3),r.fillRect(0,0,3,t)},1,1),Fa={day:{fill:.25,sun:[.45,.8,.35],sunC:16774114,sunI:2.8,hemiS:12573183,hemiG:7178831,hemiI:1.1,top:4032224,hor:13625087,bot:14674390,fog:13623534,win:0,lamps:0,stars:0,exp:1,cloud:16777215,cA:.75},dusk:{sun:[.7,.16,.6],sunC:16751189,sunI:2.3,hemiS:10129616,hemiG:4864558,hemiI:.85,top:2767480,hor:16751200,bot:5980752,fog:11569810,win:1.2,lamps:1,stars:.2,exp:1.08,fill:.7,cloud:16757898,cA:.8},night:{fill:.5,sun:[-.4,.5,.3],sunC:10335487,sunI:.5,hemiS:3820160,hemiG:1381919,hemiI:.45,top:395804,hor:1911642,bot:724764,fog:1712704,win:1.6,lamps:1.4,stars:1,exp:1.15,cloud:2502734,cA:.45},dawn:{fill:.4,sun:[.85,.2,.3],sunC:16761738,sunI:2,hemiS:11125999,hemiG:5918784,hemiI:.65,top:6063824,hor:16765088,bot:10260362,fog:14468020,win:.6,lamps:.3,stars:0,exp:1,cloud:16769228,cA:.7}};function Af(r){let e=new Ea({canvas:r,antialias:!js,powerPreference:"high-performance"});e.setPixelRatio(Math.min(devicePixelRatio,js?1.25:1.5)),e.shadowMap.enabled=!0,e.shadowMap.type=zh,e.toneMapping=Na,e.toneMappingExposure=1;let t=new Hi,n=new It(40,1,.1,2500),s=new Rs(e).fromScene(new El,.04).texture;t.fog=new Qo(13623534,120,520);let a={top:{value:new ve},hor:{value:new ve},bot:{value:new ve},sunDir:{value:new M(0,1,0)},sunC:{value:new ve},stars:{value:0},cloudC:{value:new ve},cA:{value:.7},time:{value:0}},o=new _e(new cn(1500,48,24),new Ot({side:Kt,depthWrite:!1,fog:!1,uniforms:a,vertexShader:"varying vec3 vD;void main(){vD=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`uniform vec3 top,hor,bot,sunC,sunDir,cloudC;uniform float stars,cA,time;varying vec3 vD;
      float h(vec3 p){return fract(sin(dot(p,vec3(12.9898,78.233,45.164)))*43758.5453);}
      float h2(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
      float n2(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(h2(i),h2(i+vec2(1,0)),f.x),mix(h2(i+vec2(0,1)),h2(i+vec2(1,1)),f.x),f.y);}
      float fbm(vec2 p){float v=0.,a=.5;for(int i=0;i<5;i++){v+=a*n2(p);p=p*2.03+vec2(1.7,9.2);a*=.5;}return v;}
      void main(){float y=vD.y;vec3 c=y>0.?mix(hor,top,pow(smoothstep(0.,.55,y),.8)):mix(hor,bot,smoothstep(0.,-.2,y));
      float sd=max(dot(vD,normalize(sunDir)),0.);c+=sunC*(pow(sd,700.)*4.+pow(sd,12.)*.35+pow(sd,3.)*.12)*smoothstep(-.05,.05,y+.02);
      vec3 q=floor(vD*420.);float s=step(.9975,h(q))*stars*smoothstep(.05,.3,y);c+=vec3(s);
      if(y>0.){vec2 uv=vD.xz/(y+.15)*1.3+vec2(time*.006,0.);float f=fbm(uv);float cl=smoothstep(.5,.78,f)*smoothstep(.0,.18,y)*cA;float lit=smoothstep(.45,.8,fbm(uv+normalize(sunDir.xz+.001)*.06));
      vec3 cc=mix(cloudC*.62+hor*.25,cloudC*1.05,lit)+sunC*pow(sd,6.)*.5;c=mix(c,cc,cl);}
      gl_FragColor=vec4(c,1.);}`}));o.renderOrder=-1,t.add(o);let l=new pl(16777215,5596740,.8);t.add(l);let c=new Lr(16777215,2);c.castShadow=!0;let h=js?1024:2048;c.shadow.mapSize.set(h,h),Object.assign(c.shadow.camera,{left:-45,right:45,top:45,bottom:-45,near:1,far:400}),c.shadow.bias=-4e-4,c.shadow.normalBias=.03,t.add(c),t.add(c.target);let u=new Lr(16773344,.5);t.add(u),t.add(u.target);let d=null,p=null;js||(d=new Al(e),d.addPass(new Rl(t,n)),p=new Vs(new re(512,512),.5,.45,.92),d.addPass(p),d.addPass(new Cl));let f={win:Ve(4874616,{emissive:16757591,emissiveIntensity:0,roughness:.12,metalness:.55,envMap:s,envMapIntensity:.9}),lamp:Ve(16773836,{emissive:16765578,emissiveIntensity:0}),signGlow:null},v=JSON.parse(JSON.stringify(Fa.day)),m=null,x=Fa.day,g=1,y=1,_=(b,L,I)=>new ve(b).lerp(new ve(L),I);function T(b){let L=m||x,I=x,P=(U,$)=>U+($-U)*b,k=new M(...L.sun).lerp(new M(...I.sun),b).normalize();c.position.copy(E).addScaledVector(k,200),c.target.position.copy(E),c.color.copy(_(L.sunC,I.sunC,b)),c.intensity=P(L.sunI,I.sunI),l.color.copy(_(L.hemiS,I.hemiS,b)),l.groundColor.copy(_(L.hemiG,I.hemiG,b)),l.intensity=P(L.hemiI,I.hemiI),a.top.value.copy(_(L.top,I.top,b)),a.hor.value.copy(_(L.hor,I.hor,b)),a.bot.value.copy(_(L.bot,I.bot,b)),a.sunDir.value.copy(k),a.sunC.value.copy(_(L.sunC,I.sunC,b)),a.stars.value=P(L.stars,I.stars),a.cloudC.value.copy(_(L.cloud??16777215,I.cloud??16777215,b)),a.cA.value=P(L.cA??.7,I.cA??.7),t.fog.color.copy(_(L.fog,I.fog,b)),f.win.emissiveIntensity=P(L.win,I.win),f.lamp.emissiveIntensity=P(L.lamps,I.lamps)*3,f.signGlow&&(f.signGlow.emissiveIntensity=P(L.lamps,I.lamps)*1.2+.15),e.toneMappingExposure=P(L.exp,I.exp),u.intensity=P(L.fill??.4,I.fill??.4),u.position.copy(n.position).add(new M(0,6,0)),u.target.position.copy(E),v.lamps=P(L.lamps,I.lamps),v.name=b>.5?I.name:L.name}Object.keys(Fa).forEach(b=>Fa[b].name=b);let E=new M,w={renderer:e,scene:t,camera:n,sun:c,hemi:l,composer:d,shared:f,TOD:v,envTex:s,setTOD(b,L=0){m=N(),x=Fa[b],y=Math.max(.001,L),g=0,L||(g=1,T(1))},lamps:()=>v.lamps||0,update(b){g<1?(g=Math.min(1,g+b/y),T(g*g*(3-2*g))):T(1),o.position.copy(n.position),a.time.value+=b},setFocus(b){E.copy(b)},resize(){let b=innerWidth,L=innerHeight;e.setSize(b,L,!1),n.aspect=b/L,n.updateProjectionMatrix(),d&&(d.setSize(b,L),p.resolution.set(b/2,L/2))},degrade(b){b>=1&&d&&(d=null),b>=1&&e.setPixelRatio(1),b>=2&&(c.castShadow=!1)},render(b,L){if(b&&b!==t){e.render(b,L);return}d?d.render():e.render(t,n)}};function N(){let b=a.sunDir.value;return{sun:[b.x,b.y,b.z],sunC:c.color.getHex(),sunI:c.intensity,hemiS:l.color.getHex(),hemiG:l.groundColor.getHex(),hemiI:l.intensity,top:a.top.value.getHex(),hor:a.hor.value.getHex(),bot:a.bot.value.getHex(),fog:t.fog.color.getHex(),win:f.win.emissiveIntensity,lamps:v.lamps||0,stars:a.stars.value,cloud:a.cloudC.value.getHex(),cA:a.cA.value,exp:e.toneMappingExposure,fill:u.intensity,name:v.name}}return T(1),w}function wf(r,e){r.updateMatrixWorld(!0);let t=new Map;r.traverse(n=>{if(!n.isMesh)return;let i=n.geometry.index?n.geometry.toNonIndexed():n.geometry.clone();i.applyMatrix4(n.matrixWorld),["uv1","uv2","color","tangent"].forEach(a=>i.deleteAttribute&&i.getAttribute(a)&&i.deleteAttribute(a)),i.getAttribute("uv")||i.setAttribute("uv",new Mt(new Float32Array(i.getAttribute("position").count*2),2));let s=n.material.uuid+(n.castShadow?"s":"n");t.has(s)||t.set(s,{mat:n.material,shadow:n.castShadow,geos:[]}),t.get(s).geos.push(i)}),t.forEach(n=>{let i=new _e(uf(n.geos,!1),n.mat);i.castShadow=n.shadow,i.receiveShadow=!0,e.add(i)})}async function Rf(r,e,t,n={}){let i=n.brand||3116906,s=new De;r.scene.add(s);let a={people:{},cars:[],anims:[],root:s,timers:[]},o=new De,l=new Bt(900,900,40,40);l.rotateX(-Math.PI/2);let c=[],h=l.getAttribute("position"),u=new ve(8370254),d=new ve(6989123),p=new ve(9684060);for(let Q=0;Q<h.count;Q++){let ue=h.getX(Q),me=h.getZ(Q),We=Math.hypot(ue,me);We>170&&h.setY(Q,Math.max(0,(Math.sin(ue*.02)+Math.cos(me*.017))*6+(We-170)*.08));let F=(Math.sin(ue*.09)*Math.cos(me*.07)+Math.sin(ue*.023+me*.031))*.5+.5,Te=u.clone().lerp(F>.5?p:d,Math.abs(F-.5)*1.4);c.push(Te.r,Te.g,Te.b)}l.setAttribute("color",new Pe(c,3)),l.computeVertexNormals();let f=new _e(l,Ve(16777215,{vertexColors:!0,roughness:1,map:W0()}));f.receiveShadow=!0,s.add(f);let v=Ve(3817028,{roughness:.92,map:j0()}),m=Ve(13223096,{roughness:.95,map:Br("walk",256,256,(Q,ue,me)=>{Q.fillStyle="#f4f4f4",Q.fillRect(0,0,ue,me),Ha(Q,ue,me,2500,205,255,2),Q.fillStyle="rgba(0,0,0,.3)",Q.fillRect(0,0,4,me)},230,1)}),x=Ve(14276303,{roughness:.9}),g=Ve(15979371,{roughness:.7}),y=Ve(15921902,{roughness:.7}),_=Ve(11773580,{roughness:1});Se(new se(460,.08,8),v,o,0,.04,0,!1),[1,-1].forEach(Q=>{Se(new se(460,.16,.3),x,o,0,.08,Q*4.15,!1),Se(new se(460,.12,1.9),m,o,0,.06,Q*6.15,!1);let ue=Se(new se(300,.12,1.9),m,o,-45+Q*6.15,.061,0,!1);ue.rotation.y=Math.PI/2,Se(new se(.3,.16,300),x,o,-45+Q*4.15,.08,0,!1)});for(let Q=-228;Q<228;Q+=6)Se(new se(3,.09,.16),g,o,Q,.045,0,!1);Se(new se(460,.09,.14),y,o,0,.045,3.7,!1),Se(new se(460,.09,.14),y,o,0,.045,-3.7,!1),Se(new se(300,.08,8),v,o,-45,.041,0,!1).rotation.y=Math.PI/2;for(let Q=-148;Q<148;Q+=6)Math.abs(Q)>5&&Se(new se(.16,.09,3),g,o,-45,.046,Q,!1);let T=[15983555,14674415,16176836,15200217,15855592,14278632,16048824,15259372],E=[8014650,5070192,5981750,7040885,9062975,4150599],w=[12597547,2781079,3112271,7091331,2046559,14059792],N=Ve(16514039,{roughness:.6}),b=Ve(13617856,{roughness:.95,map:X0()}),L=Ve(3037763,{roughness:.6});function I(Q,ue,me,We,F={}){let Te=new De;Te.position.set(Q,0,ue),Te.rotation.y=me>0?0:Math.PI;let St=Ve(F.siding||T[We%T.length],{roughness:.85,map:G0()}),ot=Ve(E[We%E.length],{roughness:.9,map:V0()}),Xe=Ve(w[We%w.length],{roughness:.5}),ke=F.two??We%3===1,dt=10,Ke=8,Et=3.1;Se(new se(dt+.3,.5,Ke+.3),b,Te,0,.25,0);let Qs=Se(qt(dt,Et,Ke,.1),St,Te,0,.5+Et/2,0);Te.userData.solid={body:Qs,top:ke?5.4:3.2};let or=.5+Et,Vr=dt,xn=Ke;ke&&(Se(qt(dt*.72,2.8,Ke,.1),St,Te,-dt*.14,or+1.4,0),or+=2.8,Vr=dt*.72);let Ti=new Vi,In=.55;Ti.moveTo(-xn/2-In,0),Ti.lineTo(xn/2+In,0),Ti.lineTo(0,ke?2.4:2.9),Ti.closePath();let wi=new Cr(Ti,{depth:Vr+In*2,bevelEnabled:!0,bevelThickness:.08,bevelSize:.08,bevelSegments:1});if(wi.translate(0,0,-(Vr+In*2)/2),wi.rotateY(Math.PI/2),Se(wi,ot,Te,ke?-dt*.14:0,or-.05,0),ke){let ze=new Vi;ze.moveTo(-xn/2-In,0),ze.lineTo(xn/2+In,0),ze.lineTo(0,1.8),ze.closePath();let Lt=new Cr(ze,{depth:dt*.3+In,bevelEnabled:!1});Lt.translate(0,0,-(dt*.3+In)/2),Lt.rotateY(Math.PI/2),Se(Lt,ot,Te,dt*.36,.5+Et-.05,0)}if(F.garage!==!1){Se(qt(4.6,2.9,6.6,.08),St,Te,dt/2+2.3,.5+1.45-.05,-.6);let ze=new Vi;ze.moveTo(-3.6,0),ze.lineTo(3.6,0),ze.lineTo(0,1.6),ze.closePath();let Lt=new Cr(ze,{depth:5.3,bevelEnabled:!1});Lt.translate(0,0,-2.65),Lt.rotateY(Math.PI/2),Se(Lt,ot,Te,dt/2+2.3,.5+2.85,-.6),Se(qt(3.6,2.3,.12,.04),N,Te,dt/2+2.3,.5+1.2,2.72);for(let C=0;C<4;C++)Se(new se(3.5,.04,.05),Ve(14211282),Te,dt/2+2.3,.5+.4+C*.55,2.79,!1);Se(new se(4.2,.07,13.6),b,Te,dt/2+2.3,.035,2.7+6.8,!1)}Se(new se(4.2,.45,1.8),b,Te,-1.2,.22,Ke/2+.9),Se(qt(4.4,.18,2.2,.05),N,Te,-1.2,.5+Et-.3,Ke/2+1),[-3.2,.8].forEach(ze=>Se(new je(.09,.09,Et-.3,10),N,Te,ze,.45+(Et-.3)/2,Ke/2+1.9)),Se(qt(1.05,2.15,.12,.03),Xe,Te,-1.2,.5+1.08,Ke/2+.02),Se(new cn(.05,8,6),Ve(13938487,{metalness:.8,roughness:.3}),Te,-.82,.5+1.05,Ke/2+.1,!1),Se(new se(1.3,.08,8.6),b,Te,-1.2,.04,Ke/2+6.1,!1);let Wr=(ze,Lt,C,j)=>{Se(qt(1.5,1.35,.1,.03),N,Te,ze,Lt,C+(j?-.03:.03)),Se(new se(1.25,1.1,.06),r.shared.win,Te,ze,Lt,C+(j?-.07:.07),!1),Se(new se(.06,1.1,.08),N,Te,ze,Lt,C+(j?-.09:.09),!1),Se(new se(1.25,.06,.08),N,Te,ze,Lt,C+(j?-.09:.09),!1)};[-3.6,1.7,3.6].forEach((ze,Lt)=>{Wr(ze,.5+1.65,Ke/2,!1)}),[-3,0,3].forEach(ze=>Wr(ze,.5+1.65,-Ke/2,!0)),ke&&[-3.2,-.6].forEach(ze=>Wr(ze,.5+Et+1.4,Ke/2,!1)),We%2===0&&Se(qt(.8,2.4,.8,.05),Ve(10115910,{roughness:.95}),Te,ke?-3:2.6,or+1.2,-1.4),Se(new se(.08,1.1,.08),Ve(5981750),Te,2.8,.55,Ke/2+9.6),Se(qt(.3,.3,.55,.08),Ve(2303787,{metalness:.4,roughness:.4}),Te,2.8,1.2,Ke/2+9.6),Se(new je(.42,.42,.12,20),L,Te,-2,.06,-Ke/2-7),Se(new je(.42,.42,.12,20),L,Te,-.6,.06,-Ke/2-7.2);for(let ze=0;ze<4;ze++){let Lt=Se(new Jn(.55+He()*.25,1),Ve([4164154,5020229,5941322][ze%3],{roughness:.9}),Te,-4.4+ze*.9+(ze>1?4.4:0),.5,Ke/2+.6);Lt.scale.y=.8}let jr=[15167313,16032353,16777215,13724581,16765286][We%5];Se(new se(3,.14,1.1),Ve(5914411,{roughness:1}),Te,-4.2,.07,Ke/2+1.25,!1),Se(new se(2.4,.14,1.1),Ve(5914411,{roughness:1}),Te,2.2,.07,Ke/2+1.25,!1);for(let ze=0;ze<9;ze++){let Lt=ze<5?-5.4+ze*.6:1.4+(ze-5)*.55;Se(new Jn(.16+He()*.06,0),Ve(ze%3?jr:16774064,{roughness:.7}),Te,Lt,.3,Ke/2+1.35+(He()-.5)*.4,!1)}return o.add(Te),Te}let P=[],k=[-150,-112,-80,12,44,100,135],U=[-150,-112,-80,-12,20,140];k.forEach((Q,ue)=>P.push(I(Q,21,-1,ue))),U.forEach((Q,ue)=>P.push(I(Q,-21,1,ue+3))),[-40,-75].forEach((Q,ue)=>{let me=I(-62,Q,1,ue+7);me.rotation.y=Math.PI/2,me.position.set(-62,0,Q)}),[40,75].forEach((Q,ue)=>{let me=I(-28,Q,1,ue+9);me.rotation.y=-Math.PI/2,me.position.set(-28,0,Q)});let $=I(-20,21,-1,4,{siding:15918799,two:!1});a.sarahHouse={pos:new M(-20,0,21),backDoor:new M(-18.6,0,25.6),soggy:new M(-15.5,0,34.5),lids:new M(-18.7,0,32.1),porch:new M(-18.8,0,14.3),drive:new M(-27.3,0,13)},Se(qt(1.05,2.15,.12,.03),Ve(16514039),o,-18.6,.5+1.08,25.03),Se(new se(5,.3,3),Ve(10975826,{roughness:.9}),o,-18.6,.15,26.6);let he=Ve(16514039,{roughness:.7}),te=(Q,ue,me,We)=>{let F=Math.hypot(me-Q,We-ue),Te=Math.floor(F/.35),St=Math.atan2(We-ue,me-Q);for(let ot=0;ot<=Te;ot++){let Xe=ot/Te,ke=Se(new se(.1,1.05,.1),he,o,Q+(me-Q)*Xe,.52,ue+(We-ue)*Xe,!1);ke.rotation.y=-St}[.35,.8].forEach(ot=>{let Xe=Se(new se(F,.08,.05),he,o,(Q+me)/2,ot,(ue+We)/2,!1);Xe.rotation.y=-St})};te(-31,25,-31,44),te(-31,44,-6,44),te(-6,44,-6,25);let q=Br("wetA",128,128,(Q,ue,me)=>{let We=Q.createRadialGradient(64,64,10,64,64,64);We.addColorStop(0,"#fff"),We.addColorStop(.55,"#bbb"),We.addColorStop(1,"#000"),Q.fillStyle=We,Q.fillRect(0,0,ue,me)}),K=new _e(new Vn(3.6,40),Ve(4151850,{roughness:.4,alphaMap:q,transparent:!0,depthWrite:!1}));K.rotation.x=-Math.PI/2,K.position.set(-15.5,.02,34.5),K.scale.set(1.3,.9,1),K.receiveShadow=!0,s.add(K),a.soggy=[K],K.visible=!1;let z=Ve(5204606,{roughness:.32,metalness:.2,envMap:r.envTex,envMapIntensity:.35});[[-15.5,34.5,1.4],[-13.6,35.6,.8],[-17.2,33.4,.6]].forEach(Q=>{let ue=new _e(new Vn(Q[2],28),z);ue.rotation.x=-Math.PI/2,ue.position.set(Q[0],.035,Q[1]),ue.scale.y=.7,s.add(ue),ue.visible=!1,a.soggy.push(ue)});let X=new De;X.position.set(70,0,-24),o.add(X);let fe=Ve(15330543,{roughness:.5,metalness:.3}),A=Ve(i,{roughness:.55});Se(new se(30,.1,20),b,X,0,.05,6,!1),Se(qt(12,5.6,11,.1),fe,X,5,2.8,-2),Se(qt(12.4,.4,11.4,.1),A,X,5,5.7,-2),Se(qt(4.6,4.4,.15,.05),Ve(13620441,{metalness:.5,roughness:.45}),X,5,2.3,3.55);for(let Q=0;Q<9;Q++)Se(new se(4.5,.04,.06),Ve(12041925),X,5,.4+Q*.48,3.65,!1);Se(qt(9,3.6,8,.1),Ve(16052198),X,-6,1.8,-.5),Se(qt(9.4,.35,8.4,.08),Ve(3885636),X,-6,3.75,-.5),Se(qt(1.1,2.2,.12,.03),A,X,-8.5,1.1,3.52),[-5.6,-3.1].forEach(Q=>{Se(qt(1.8,1.3,.1,.03),N,X,Q,2,3.52),Se(new se(1.6,1.1,.06),r.shared.win,X,Q,2,3.58,!1)});let R=Nr(e.toUpperCase(),{w:1024,h:200,bg:null,fg:"#ffffff",sub:n.sub||"SEPTIC  \xB7  PUMPING  \xB7  INSPECTIONS",subFg:"#cfeee0"});r.shared.signGlow=new ft({color:i,roughness:.5}),Se(qt(10.5,2.1,.3,.08),r.shared.signGlow,X,2,6.9,3.4);let H=new _e(new Bt(10,1.95),new ft({map:R,transparent:!0,emissive:16777215,emissiveMap:R,emissiveIntensity:.6}));H.position.set(72,6.9,-20.43),s.add(H),a.shop={pos:new M(70,0,-24),door:new M(61.5,0,-19.5),truckSpot:new M(76,0,-12.5)};let Z=new De;Z.position.set(-118,0,-8.5),Z.rotation.y=.35,o.add(Z);let D=Ve(8016180,{roughness:.9});[-2.6,2.6].forEach(Q=>Se(new se(.3,3,.3),D,Z,Q,1.5,0)),Se(qt(6.2,2,.3,.08),Ve(2968377),Z,0,2.2,0);let Y=Nr(t.split(",")[0],{w:1024,h:330,fg:"#ffffff",sub:"WELCOME TO "+t.toUpperCase(),subFg:"#ffd29a"}),B=document.createElement("canvas");B.width=1024,B.height=330;let O=B.getContext("2d");O.textAlign="center",O.fillStyle="#ffd29a",O.font="700 54px Inter, Arial",O.fillText("WELCOME TO",512,90);let G=150;O.font=`900 ${G}px Fraunces, Georgia, serif`;let ne=t.split(",")[0];for(;O.measureText(ne).width>940&&G>40;)G-=6,O.font=`900 ${G}px Fraunces, Georgia, serif`;O.fillStyle="#fff",O.fillText(ne,512,225);let ee=(t.split(",")[1]||"").trim();ee&&(O.fillStyle="#cfe8d8",O.font="600 44px Inter, Arial",O.fillText(ee.toUpperCase(),512,300));let S=new ln(B);S.colorSpace=ct;let ae=new _e(new Bt(5.9,1.9),new ft({map:S,transparent:!0}));ae.position.set(0,2.2,.16),Z.add(ae);for(let Q=0;Q<9;Q++)Se(new Jn(.3,1),Ve([15167313,16032353,15320170,16777215][Q%4]),Z,-2.6+Q*.65,.3,.7,!1);let V=Ve(7227950,{roughness:.95}),W=[5216831,4164154,6532428,3111482,8107342].map(Q=>Ve(Q,{roughness:.85})),oe=(Q,ue,me=1,We=0)=>{let F=new De;if(F.position.set(Q,0,ue),F.scale.setScalar(me),o.add(F),Se(new je(.22,.32,3,8),V,F,0,1.5,0),We===1)for(let Te=0;Te<3;Te++)Se(new Gi(2.2-Te*.55,2.6,10),W[3],F,0,3+Te*1.4,0);else{let Te=W[Math.floor(He()*5)];Se(new Jn(2,1),Te,F,0,4.2,0),Se(new Jn(1.4,1),Te,F,1.2,3.6,.4),Se(new Jn(1.5,1),Te,F,-1.1,3.8,-.5)}},ge=new Dr,xe=Q=>new Promise(ue=>ge.load("/x3d/assets/nature/"+Q+"_Color1.gltf",me=>ue(me.scene),void 0,()=>ue(null))),Me=(await Promise.all(["Tree_1_A","Tree_1_B","Tree_1_C","Tree_4_A","Tree_4_B"].map(xe))).filter(Boolean),Ie=(await Promise.all(["Rock_1_A","Rock_2_A"].map(xe))).filter(Boolean);[...Me,...Ie].forEach(Q=>{let ue=new Jt().setFromObject(Q);Q.userData.h=ue.max.y,Q.traverse(me=>{me.isMesh&&(me.material.roughness=.92,me.material.metalness=0)})});let be=(Q,ue,me=1,We=0,F=!0)=>{if(!Me.length)return oe(Q,ue,me,We);let Te=Me[Math.min(Me.length-1,We===1?3+(He()*2|0):He()*3|0)],St=Te.clone();St.position.set(Q,-.15,ue),St.scale.setScalar(me*(5.2+He()*2.2)/Te.userData.h),St.rotation.y=He()*6.28,St.traverse(ot=>{ot.isMesh&&(ot.castShadow=F)}),o.add(St)},we=(Q,ue,me=1)=>{if(!Ie.length)return;let We=Ie[He()*Ie.length|0].clone();We.position.set(Q,-.05,ue),We.scale.setScalar(me),We.rotation.y=He()*6.28,o.add(We)};for(let Q=0;Q<75;Q++){let ue=(He()-.5)*300,me=(He()-.5)*300;Math.abs(me)<12||Math.abs(ue+45)<8||[...k.map(F=>[F,21]),...U.map(F=>[F,-21]),[70,-24],[-20,21],[-62,-40],[-62,-75],[-28,40],[-28,75]].some(F=>Math.abs(F[0]-ue)<14&&Math.abs(F[1]-me)<12)||ue>-32&&ue<-5&&me>24&&me<45||be(ue,me,.8+He()*.7,He()<.35?1:0)}be(-28,40.5,1.1,0),be(-8.5,41,.9,1);for(let Q=0;Q<(js?50:90);Q++){let ue=He()*Math.PI*2,me=175+He()*70;be(Math.cos(ue)*me,Math.sin(ue)*me,1.5+He()*1.2,He()<.5?1:0,!1)}for(let Q=0;Q<26;Q++){let ue=(He()-.5)*280,me=(He()-.5)*280;Math.abs(me)<14||Math.abs(ue+45)<10||ue>-34&&ue<-4&&me>8&&me<46||we(ue,me,1+He()*1.6)}[[-7.5,39],[-29,27.5],[-8,27]].forEach(Q=>we(Q[0],Q[1],1.1)),a.boxes=[],o.updateMatrixWorld(!0),o.traverse(Q=>{let ue=Q.userData&&Q.userData.solid;if(!ue)return;let me=new Jt().setFromObject(ue.body);me.max.y+=ue.top,a.boxes.push(me)}),a.boxes.push(new Jt(new M(58,0,-32),new M(81.5,7,-20.4))),wf(o,s);let Fe=new Dr,Nt=Q=>new Promise(ue=>Fe.load("/x3d/assets/"+Q+".gltf",me=>ue(me.scene),void 0,()=>ue(null)));Promise.all(["streetlight","car_sedan","car_stationwagon","car_hatchback","firehydrant","bush"].map(Nt)).then(([Q,ue,me,We,F,Te])=>{let St=Xe=>(Xe.traverse(ke=>{ke.isMesh&&(ke.castShadow=!0,ke.receiveShadow=!0)}),Xe);if(Q)for(let Xe=-140;Xe<=140;Xe+=32){let ke=St(Q.clone());ke.scale.setScalar(6.6),ke.position.set(Xe,0,-6.2),ke.rotation.y=Math.PI,s.add(ke);let dt=Se(new cn(.28,12,8),r.shared.lamp,s,Xe,6.15,-4.6,!1),Ke=new fn(new on({map:Ji(),color:16764810,transparent:!0,depthWrite:!1,blending:kt,opacity:0}));Ke.scale.set(5,5,1),Ke.position.copy(dt.position),s.add(Ke),a.anims.push(()=>Ke.material.opacity=r.lamps()*.5);let Et=new _e(new Vn(5,24),new ht({map:Ji(),color:16760938,transparent:!0,depthWrite:!1,opacity:0,blending:kt}));Et.rotation.x=-Math.PI/2,Et.position.set(Xe,.1,-3.6),s.add(Et),a.anims.push(()=>Et.material.opacity=r.lamps()*.35)}if(F&&[[-58,5.6],[-2,-5.6],[36,5.6],[88,-5.6],[-96,5.6]].forEach(Xe=>{let ke=St(F.clone());ke.scale.setScalar(4),ke.position.set(Xe[0],.12,Xe[1]),s.add(ke)}),Te){let Xe=new De;[...k,-20].forEach((ke,dt)=>{if(ke===-20||dt%2)for(let Ke=0;Ke<4;Ke++){let Et=Te.clone();Et.scale.setScalar(2.6+He()),Et.position.set(ke-4.6+Ke*1.1,0,8.4),Xe.add(Et)}}),U.forEach((ke,dt)=>{if(dt%2===0)for(let Ke=0;Ke<4;Ke++){let Et=Te.clone();Et.scale.setScalar(2.6+He()),Et.position.set(ke+.5+Ke*1.1,0,-8.4),Xe.add(Et)}}),Xe.traverse(ke=>{ke.isMesh&&(ke.castShadow=!0)}),wf(Xe,s)}let ot=[ue,me,We].filter(Boolean);if([[-27.3,13,0],[17.3,13,1],[-87.3,13,2],[-7,-13,0],[27,-13,2],[-105,-13,1]].forEach(Xe=>{let ke=ot[Xe[2]%ot.length];if(!ke)return;let dt=St(ke.clone());dt.scale.setScalar(4.6),dt.position.set(Xe[0],0,Xe[1]),dt.rotation.y=Xe[1]>0?Math.PI:0,s.add(dt)}),ue){let Xe=St((me||ue).clone());Xe.scale.setScalar(4.6),s.add(Xe);let ke=-200;a.anims.push(dt=>{if(a.noTraffic){Xe.visible=!1;return}Xe.visible=!0,ke+=dt*13,ke>220&&(ke=-220),Xe.position.set(ke,0,n.leftDrive?-1.9:1.9),Xe.rotation.y=Math.PI/2})}});let Re=xf(n.vehicle||"pump",e,i,n.sub||"");Re.traverse(Q=>{Q.isMesh&&Q.material.metalness>.1&&(Q.material.envMap=r.envTex,Q.material.envMapIntensity=.45)}),Re.position.copy(a.shop.truckSpot),Re.rotation.y=Math.PI,s.add(Re),a.truck=Re,Re.traverse(Q=>{Q.isMesh&&(Q.castShadow=!0)});let Qe=Nr(e.split(" ")[0].toUpperCase(),{w:256,h:128,fg:"#ffffff"}),Ae=a.people;await Tf(["owner","sarah","neighbor","jogger"]),Ae.sarah=new Or({model:"sarah",height:1.66,recolor:[[70,170,205,.9,1]]}),Ae.owner=new Or({model:"owner",height:1.8,cap:!0,capColor:2306090,capTex:Qe}),Ae.jogger=new Or({model:"jogger",height:1.7,recolor:[[0,40,22,1.1,1.05]]}),Ae.neighbor=new Or({model:"neighbor",height:1.74}),Object.values(Ae).forEach(Q=>s.add(Q.root)),Ae.sarah.root.position.set(-18.6,0,26.2),Ae.owner.root.position.set(73,0,-9.4),Ae.owner.yawTarget=Ae.owner.yaw=-.6,Ae.neighbor.root.position.set(14.8,0,-17),Ae.neighbor.set("wave"),Ae.neighbor.yawTarget=Ae.neighbor.yaw=0;let jn=-120,Ln=1;return Ae.jogger.root.position.set(jn,0,6.2),Ae.jogger.set("run"),Ae.jogger.speed=3,a.anims.push(Q=>{jn+=Q*3*Ln,jn>120&&(Ln=-1),jn<-120&&(Ln=1),Ae.jogger.root.position.x=jn,Ae.jogger.root.visible=r.camera.position.y>7,Ae.jogger.yawTarget=Ln>0?Math.PI/2:-Math.PI/2,Ae.jogger.phase+=Q*10}),a.timers.push(setInterval(()=>{Ae.neighbor.set(Ae.neighbor.state==="wave"?"idle":"wave")},4e3)),a.dispose=()=>{a.timers.forEach(clearInterval),r.scene.remove(s)},a.update=(Q,ue)=>{Object.values(Ae).forEach(me=>me.update(Q)),a.anims.forEach(me=>me(Q,ue))},a}var Il=null;function Ji(){if(Il)return Il;let r=document.createElement("canvas");r.width=r.height=128;let e=r.getContext("2d"),t=e.createRadialGradient(64,64,0,64,64,64);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.3,"rgba(255,255,255,.45)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),Il=new ln(r),Il}function Cf(r,e){let t=new Hi;t.background=new ve(131850);let n=new It(70,1,.1,3e3),i=matchMedia("(max-width:760px)").matches?1100:2e3,s=1e3,a=[],o=new Float32Array(i*6),l=new Float32Array(i*6),c=[[.7,.85,1],[1,1,1],[.55,1,.85],[1,.8,.5],[.85,.7,1]],h=(I,P)=>{let k=Math.random()*6.283,U=3+Math.pow(Math.random(),.55)*80;I.x=Math.cos(k)*U,I.y=Math.sin(k)*U,I.z=P,I.c=c[Math.random()*5|0]};for(let I=0;I<i;I++){let P={};h(P,-Math.random()*s),a.push(P)}let u=new at;u.setAttribute("position",new Mt(o,3)),u.setAttribute("color",new Mt(l,3)),t.add(new Is(u,new Tr({vertexColors:!0,transparent:!0,blending:kt,depthWrite:!1})));let d=document.createElement("canvas");d.width=d.height=256;let p=d.getContext("2d"),f=p.createRadialGradient(128,128,0,128,128,128);f.addColorStop(0,"rgba(255,255,255,1)"),f.addColorStop(.2,"rgba(140,190,255,.5)"),f.addColorStop(.6,"rgba(90,60,180,.15)"),f.addColorStop(1,"rgba(0,0,0,0)"),p.fillStyle=f,p.fillRect(0,0,256,256);let v=new ln(d),m=new fn(new on({map:v,transparent:!0,blending:kt,depthWrite:!1,opacity:.5}));m.position.z=-900,m.scale.set(900,900,1),t.add(m);let x=[];for(let I=1;I<=30;I++){let P=new Date(r);P.setDate(P.getDate()+I);let k=document.createElement("canvas");k.width=300,k.height=360;let U=k.getContext("2d");U.fillStyle="#fbf8f1",U.fillRect(0,0,300,360),U.fillStyle="#d9483b",U.fillRect(0,0,300,78),U.fillStyle="#fff",U.font="800 40px Inter, Arial",U.textAlign="center",U.fillText(P.toLocaleDateString("en-US",{month:"long"}).toUpperCase(),150,54),U.fillStyle="#1b1f24",U.font="900 150px Fraunces, Georgia, serif",U.fillText(P.getDate(),150,235),U.fillStyle="#7a8580",U.font="700 30px Inter, Arial",U.fillText(P.toLocaleDateString("en-US",{weekday:"long"}).toUpperCase(),150,290),U.fillStyle="#2f8f6a",U.font="800 28px Inter, Arial",U.fillText("DAY "+I,150,335);for(let K=0;K<8;K++)U.fillStyle="#bdb6a6",U.beginPath(),U.arc(30+K*34,10,6,0,7),U.fill();let $=new ln(k);$.colorSpace=ct;let he=new _e(new Bt(4.2,5,8,8),new ht({map:$,side:Wn,transparent:!0})),te=I*2.4,q=9+I*37%7;he.userData={i:I,a:te,r:q,spin:(Math.random()-.5)*4,tilt:(Math.random()-.5)*1.2,date:P},he.visible=!1,t.add(he),x.push(he)}let g=new De;g.position.z=-400,t.add(g);let y=new ht({color:10478533,transparent:!0,opacity:.9,blending:kt});g.add(new _e(new Wi(26,.35,12,120),y)),g.add(new _e(new Wi(28.5,.12,8,120),new ht({color:16761466,transparent:!0,opacity:.8,blending:kt})));for(let I=0;I<60;I++){let P=new _e(new se(I%5?.25:.6,I%5?1.4:3.2,.2),y),k=I/60*Math.PI*2;P.position.set(Math.sin(k)*23.5,Math.cos(k)*23.5,0),P.rotation.z=-k,g.add(P)}let _=new ht({color:16777215,transparent:!0,opacity:.9,blending:kt}),T=new _e(new se(1,13,.3),_);T.geometry.translate(0,6.5,0),g.add(T);let E=new _e(new se(.6,20,.3),_);E.geometry.translate(0,10,0),g.add(E);let w=new fn(new on({map:v,transparent:!0,blending:kt,depthWrite:!1}));w.scale.set(60,60,1),g.add(w);let N=12,b=-1;return{scene:t,cam:n,running:!1,onDate:null,onDone:null,start(){b=0,this.running=!0},resize(){n.aspect=innerWidth/innerHeight,n.updateProjectionMatrix()},update(I){if(this.running){b+=I,N=b<.6?12+b*60:b<4.4?48+Math.pow((b-.6)/3.8,2)*700:750+(b-4.4)*2600,n.rotation.z=Math.sin(b*.7)*.14*Math.min(1,b/2),n.fov=70+Math.max(0,Math.min(1,(b-3)/2))*38,n.updateProjectionMatrix();let k=0;if(x.forEach((U,$)=>{let he=U.userData,q=-(.9+$*(3.4/30)-b)*120;U.visible=q>-320&&q<6,q>0&&(k=$+1);let K=Math.max(0,(q+40)/40);U.position.set(Math.cos(he.a)*(he.r+K*6),Math.sin(he.a)*(he.r*.75+K*4),q),U.rotation.set(he.tilt+K*1.4,Math.sin(b*3+$)*.35+K*he.spin,Math.sin(b*2+$)*.25+K*he.spin*.5);let z=U.geometry.attributes.position;for(let X=0;X<z.count;X++){let fe=X%9/8-.5,A=Math.floor(X/9)/8-.5;z.setZ(X,Math.sin(fe*3+b*9+$)*.25*(A+.5)+K*A*A*2)}z.needsUpdate=!0}),this.onDate&&this.onDate(k,k?x[k-1].userData.date:null,Math.min(1,b/5.2)),g.position.z=-400+Math.max(0,b-3.2)*260,T.rotation.z-=I*(2+b*3),E.rotation.z-=I*(12+b*25),g.rotation.z+=I*.2,w.material.opacity=Math.min(1,Math.max(0,(b-3.6)/1.2)),b>5.2&&this.onDone){let U=this.onDone;this.onDone=null,this.running=!1,U()}}else N=12+Math.sin(performance.now()/2500)*4;let P=Math.min(150,Math.max(.4,N*.06));for(let k=0;k<i;k++){let U=a[k];U.z+=N*I,U.z>2&&h(U,U.z-s);let $=k*6;o[$]=U.x,o[$+1]=U.y,o[$+2]=U.z,o[$+3]=U.x,o[$+4]=U.y,o[$+5]=U.z-P;let he=Math.min(1,(U.z+s)/s)*1.2;l[$]=U.c[0]*he,l[$+1]=U.c[1]*he,l[$+2]=U.c[2]*he,l[$+3]=l[$+4]=l[$+5]=0}u.attributes.position.needsUpdate=!0,u.attributes.color.needsUpdate=!0,m.material.opacity=.35+Math.min(1,N/1500)*.5}}}var Dl={us:{name:"United States",cur:"USD",sym:"$",locale:"en-US",town:"Monroe, NC",phone:"(555) 014-2290",leftDrive:!1,mult:1},ca:{name:"Canada",cur:"CAD",sym:"C$",locale:"en-CA",town:"Kelowna, BC",phone:"(555) 014-2290",leftDrive:!1,mult:1.3},uk:{name:"United Kingdom",cur:"GBP",sym:"\xA3",locale:"en-GB",town:"Guildford, Surrey",phone:"07700 900123",leftDrive:!0,mult:.8},au:{name:"Australia",cur:"AUD",sym:"A$",locale:"en-AU",town:"Geelong, VIC",phone:"0491 570 110",leftDrive:!0,mult:1.5},ch:{name:"Switzerland",cur:"CHF",sym:"CHF ",locale:"de-CH",town:"Winterthur",phone:"079 000 00 00",leftDrive:!1,mult:.9},nl:{name:"Netherlands",cur:"EUR",sym:"\u20AC",locale:"nl-NL",town:"Amersfoort",phone:"06 12345678",leftDrive:!1,mult:.9}},$i={septic:{name:"Septic",trade:"septic",vehicle:"pump",work:"hose",prop:"soggy",look:"down",problem:"But the yard is soggy again, and the sinks are draining slow.",adHead:"Slow drains or a soggy spot in the yard?",adCta:"Book a septic check",btn:"Get quote",opts:["Septic pumping","Slow drains or backup","Wet or smelly spot in the yard"],pick:1,job:"Septic check",busy:["Pump-out","Inspection","Riser install","Pump-out","Repair","Pump-out","Inspection","Pump-out","Pump-out"],work_line:"The tank gets pumped. The soggy yard finally gets fixed.",done:"Tank pumped",avg:450,cpl:40,sub:"SEPTIC \xB7 PUMPING \xB7 INSPECTIONS"},roofing:{name:"Roofing",trade:"roofing",vehicle:"pickup",work:"ladder",prop:"roof",look:"up",problem:"After last night's storm, there's a water stain on the ceiling, and shingles in the yard.",adHead:"Storm damage or a leaky roof?",adCta:"Book a free roof inspection",btn:"Get quote",opts:["Leak or water stain","Missing or damaged shingles","Full roof replacement"],pick:1,job:"Roof inspection",busy:["Re-roof","Inspection","Leak repair","Estimate","Re-roof","Gutter tie-in","Inspection","Repair","Estimate"],work_line:"The damaged section gets repaired, and the roof is sealed up before the next rain.",done:"Roof repaired",avg:9500,cpl:70,sub:"ROOFING \xB7 REPAIRS \xB7 REPLACEMENTS"},hvac:{name:"HVAC",trade:"HVAC",vehicle:"van",work:"kneel",prop:"ac",look:"down",problem:"It's eighty-five degrees inside, and the air conditioner is blowing warm air.",adHead:"AC blowing warm air?",adCta:"Book an AC repair visit",btn:"Book now",opts:["AC not cooling","Furnace or heat pump problem","New system quote"],pick:0,job:"AC repair",busy:["Tune-up","Install","Repair","Tune-up","Quote","Repair","Install","Tune-up","Repair"],work_line:"The unit gets fixed, and cool air is flowing again within the hour.",done:"AC running again",avg:650,cpl:45,sub:"HEATING \xB7 COOLING \xB7 REPAIRS"},plumbing:{name:"Plumbing",trade:"plumbing",vehicle:"van",work:"kneel",prop:"leak",look:"down",problem:"There's water spraying from a pipe by the back wall, and it's pooling fast.",adHead:"Leak, clog or no hot water?",adCta:"Book a local plumber",btn:"Book now",opts:["Leak or burst pipe","Clogged drain","Water heater problem"],pick:0,job:"Leak repair",busy:["Water heater","Drain clear","Repipe","Leak repair","Fixture","Drain clear","Estimate","Water heater","Repair"],work_line:"The pipe gets replaced, the water is shut off, and the leak is gone for good.",done:"Leak fixed",avg:550,cpl:45,sub:"PLUMBING \xB7 DRAINS \xB7 WATER HEATERS"},electrical:{name:"Electrician",trade:"electrical",vehicle:"van",work:"kneel",prop:"flicker",look:"up",problem:"The lights keep flickering, and the breaker trips every time the dryer runs.",adHead:"Flickering lights or an old panel?",adCta:"Book a licensed electrician",btn:"Get quote",opts:["Flickering lights or tripping breaker","Panel upgrade","EV charger install"],pick:1,job:"Panel check",busy:["Panel upgrade","EV charger","Rewire","Inspection","Lighting","Panel upgrade","Repair","Estimate","EV charger"],work_line:"The old panel gets upgraded, and the lights stay steady.",done:"Panel upgraded",avg:2800,cpl:55,sub:"ELECTRICAL \xB7 PANELS \xB7 EV CHARGERS"},garage:{name:"Garage door repair",trade:"garage door",vehicle:"van",work:"kneel",prop:"garage",look:"up",front:!0,problem:"The garage door is stuck halfway, and her car is trapped inside.",adHead:"Garage door stuck or off track?",adCta:"Book same-day garage door repair",btn:"Book now",opts:["Door stuck or off track","Broken spring","New garage door"],pick:1,job:"Garage door repair",busy:["Spring repair","New door","Opener","Repair","Tune-up","Spring repair","Estimate","Opener","Repair"],work_line:"A new spring goes in, the door gets balanced, and it opens smoothly again.",done:"Door fixed",avg:450,cpl:35,sub:"GARAGE DOORS \xB7 SPRINGS \xB7 OPENERS"},tree:{name:"Tree removal",trade:"tree service",vehicle:"pickup",work:"haul",prop:"tree",look:"up",problem:"A big dead tree is leaning toward the house, and the wind is picking up.",adHead:"Dead or leaning tree near your house?",adCta:"Book a free tree estimate",btn:"Get quote",opts:["Leaning or dead tree","Storm damage cleanup","Trimming and pruning"],pick:0,job:"Tree removal",busy:["Removal","Trimming","Stump grind","Estimate","Removal","Storm clean-up","Trimming","Removal","Estimate"],work_line:"The tree comes down safely, and the yard gets cleaned up.",done:"Tree removed",avg:1800,cpl:50,sub:"TREE REMOVAL \xB7 TRIMMING \xB7 STUMPS"},pest:{name:"Pest control",trade:"pest control",vehicle:"van",work:"kneel",prop:"pests",look:"down",problem:"There are ants all over the patio, and now they're getting into the kitchen.",adHead:"Ants, mice or wasps moving in?",adCta:"Book a pest inspection",btn:"Book now",opts:["Ants or roaches","Mice or rats","Wasps or bees"],pick:0,job:"Pest treatment",busy:["Treatment","Inspection","Rodent","Treatment","Termite","Follow-up","Wasps","Treatment","Inspection"],work_line:"The house gets treated, inside and out, and the problem is handled.",done:"Treated",avg:300,cpl:30,sub:"PEST CONTROL \xB7 RODENTS \xB7 TERMITES"},waterdamage:{name:"Water damage restoration",trade:"water damage",vehicle:"van",work:"hose",prop:"flood",look:"down",problem:"Water is coming up through the basement window well, and the floor is soaked.",adHead:"Flooded basement or water damage?",adCta:"Get 24/7 water damage help",btn:"Call me",opts:["Flooded basement","Burst pipe damage","Ceiling or wall damage"],pick:0,job:"Water extraction",busy:["Dry-out","Extraction","Inspection","Dry-out","Rebuild","Extraction","Mold check","Dry-out","Estimate"],work_line:"The water gets pumped out, and the dryers go in to stop mold before it starts.",done:"Water extracted",avg:3500,cpl:60,sub:"WATER DAMAGE \xB7 24/7 \xB7 RESTORATION"},mold:{name:"Mold remediation",trade:"mold remediation",vehicle:"van",work:"kneel",prop:"mold",look:"down",problem:"There's a musty smell, and dark spots are spreading along the wall.",adHead:"Musty smell or dark spots on the wall?",adCta:"Book a mold inspection",btn:"Get quote",opts:["Visible mold","Musty smell","Mold test for a home sale"],pick:0,job:"Mold inspection",busy:["Remediation","Testing","Inspection","Remediation","Estimate","Air test","Remediation","Inspection","Estimate"],work_line:"The mold gets removed safely, and the source of the moisture gets fixed.",done:"Mold removed",avg:2500,cpl:55,sub:"MOLD TESTING \xB7 REMOVAL \xB7 PREVENTION"},foundation:{name:"Foundation repair",trade:"foundation repair",vehicle:"pickup",work:"kneel",prop:"crack",look:"down",problem:"There's a new crack running up the foundation, and the back door is sticking.",adHead:"Cracks in your foundation?",adCta:"Book a free foundation inspection",btn:"Get quote",opts:["Cracks in walls or foundation","Sticking doors or sloping floors","Inspection for a home sale"],pick:0,job:"Foundation inspection",busy:["Piering","Inspection","Crack repair","Estimate","Piering","Inspection","Wall brace","Estimate","Inspection"],work_line:"The crack gets sealed and the wall is stabilized, so it stops moving.",done:"Foundation repaired",avg:6e3,cpl:70,sub:"FOUNDATIONS \xB7 CRACKS \xB7 PIERING"},waterproofing:{name:"Basement waterproofing",trade:"waterproofing",vehicle:"pickup",work:"kneel",prop:"pooling",look:"down",problem:"Rain water is pooling against the house, and the basement smells damp again.",adHead:"Wet basement every time it rains?",adCta:"Book a free waterproofing quote",btn:"Get quote",opts:["Water in the basement","Pooling by the foundation","Sump pump problem"],pick:0,job:"Waterproofing quote",busy:["Drain install","Sump pump","Inspection","Sealing","Estimate","Drain install","Inspection","Sump pump","Estimate"],work_line:"A new drain line goes in, and the water is carried away from the house.",done:"Drain installed",avg:4500,cpl:60,sub:"WATERPROOFING \xB7 DRAINS \xB7 SUMP PUMPS"},gutters:{name:"Gutter cleaning and guards",trade:"gutter",vehicle:"pickup",work:"ladder",prop:"gutter",look:"up",problem:"The gutters are overflowing, and water is pouring down right by the foundation.",adHead:"Overflowing gutters?",adCta:"Book gutter cleaning or guards",btn:"Get quote",opts:["Gutter cleaning","Gutter guards","New gutters"],pick:1,job:"Gutter guards",busy:["Cleaning","Guards","Cleaning","Repair","Cleaning","Guards","Estimate","Cleaning","Guards"],work_line:"The gutters get cleaned out, and new guards keep the leaves out for good.",done:"Guards installed",avg:1200,cpl:35,sub:"GUTTERS \xB7 CLEANING \xB7 GUARDS"},pressure:{name:"Pressure washing",trade:"pressure washing",vehicle:"pickup",work:"hose",prop:"grime",look:"down",front:!0,problem:"The driveway is stained black, and family is coming this weekend.",adHead:"Grimy driveway or siding?",adCta:"Book a pressure washing quote",btn:"Get quote",opts:["Driveway and walkways","House siding","Deck or patio"],pick:0,job:"Driveway wash",busy:["House wash","Driveway","Deck","House wash","Roof wash","Driveway","Patio","House wash","Estimate"],work_line:"The driveway gets washed clean, and it looks brand new again.",done:"Driveway clean",avg:350,cpl:25,sub:"PRESSURE WASHING \xB7 SOFT WASH"},chimney:{name:"Chimney sweep",trade:"chimney",vehicle:"pickup",work:"ladder",prop:"chimney",look:"up",problem:"Smoke came back into the living room last night, and the chimney cap is gone.",adHead:"Smoky fireplace or a damaged chimney?",adCta:"Book a chimney sweep",btn:"Book now",opts:["Chimney sweep","Smoke or draft problem","Chimney cap or masonry repair"],pick:1,job:"Chimney sweep",busy:["Sweep","Inspection","Cap install","Sweep","Repair","Sweep","Inspection","Liner","Sweep"],work_line:"The chimney gets swept, and a new cap goes on to keep it safe.",done:"Chimney swept",avg:350,cpl:30,sub:"CHIMNEY SWEEP \xB7 CAPS \xB7 REPAIRS"},junk:{name:"Junk removal",trade:"junk removal",vehicle:"box",work:"haul",prop:"junk",look:"down",problem:"The old couch, the boxes, the broken grill. The backyard has turned into a junk pile.",adHead:"Need junk gone this weekend?",adCta:"Book a junk pickup",btn:"Get price",opts:["Furniture and appliances","Yard or garage clean-out","Whole house clean-out"],pick:1,job:"Junk pickup",busy:["Clean-out","Pickup","Furniture","Pickup","Estate","Pickup","Clean-out","Pickup","Appliances"],work_line:"Everything gets loaded up and hauled away in under an hour.",done:"Junk hauled",avg:400,cpl:25,sub:"JUNK REMOVAL \xB7 CLEAN-OUTS"},carpet:{name:"Carpet cleaning",trade:"carpet cleaning",vehicle:"van",work:"hose",prop:"rug",look:"down",problem:"The dog had an accident on the good rug, and the stain won't come out.",adHead:"Stains that won't come out?",adCta:"Book a carpet cleaning",btn:"Book now",opts:["Pet stains and odors","Whole house carpet","Rugs and upholstery"],pick:0,job:"Carpet cleaning",busy:["Whole house","Rugs","Upholstery","Whole house","Stairs","Rugs","Pet treatment","Whole house","Tile"],work_line:"The carpet gets deep cleaned, and the stain and the smell are gone.",done:"Carpet cleaned",avg:280,cpl:25,sub:"CARPET \xB7 RUGS \xB7 UPHOLSTERY"},pool:{name:"Pool service",trade:"pool",vehicle:"pickup",work:"hose",prop:"pool",look:"down",problem:"The pool turned green, and the kids want to swim this weekend.",adHead:"Green pool or broken pump?",adCta:"Book a pool service visit",btn:"Book now",opts:["Green or cloudy water","Pump or filter problem","Weekly pool service"],pick:0,job:"Green pool clean-up",busy:["Weekly service","Opening","Repair","Weekly service","Clean-up","Weekly service","Filter","Weekly service","Repair"],work_line:"The pool gets shocked, cleaned and balanced, and it's clear blue again.",done:"Pool clear again",avg:400,cpl:30,sub:"POOL SERVICE \xB7 REPAIRS \xB7 CLEANING"},fencing:{name:"Fencing",trade:"fence",vehicle:"pickup",work:"kneel",prop:"fence",look:"down",problem:"The wind knocked a section of fence down, and the dog keeps getting out.",adHead:"Broken or leaning fence?",adCta:"Book a free fence quote",btn:"Get quote",opts:["Repair a section","New fence","Gate repair"],pick:0,job:"Fence repair",busy:["New fence","Repair","Gate","Estimate","New fence","Repair","Staining","Estimate","New fence"],work_line:"New posts and boards go in, and the fence is solid again.",done:"Fence fixed",avg:3500,cpl:45,sub:"FENCES \xB7 GATES \xB7 REPAIRS"},generator:{name:"Generator installation",trade:"generator",vehicle:"van",work:"kneel",prop:"outage",look:"down",problem:"The power went out again last night, and everything in the freezer spoiled.",adHead:"Tired of losing power?",adCta:"Book a home generator quote",btn:"Get quote",opts:["Whole home standby generator","Portable generator hookup","Generator service"],pick:0,job:"Generator quote",busy:["Install","Service","Quote","Install","Service","Transfer switch","Quote","Service","Install"],work_line:"A standby generator goes in, so the next outage switches over automatically.",done:"Generator installed",avg:11e3,cpl:80,sub:"HOME GENERATORS \xB7 INSTALL \xB7 SERVICE"},appliance:{name:"Appliance repair",trade:"appliance repair",vehicle:"van",work:"kneel",prop:"washer",look:"down",problem:"The washer stopped mid-cycle, and there's water all over the laundry room.",adHead:"Washer, fridge or oven broken?",adCta:"Book an appliance repair",btn:"Book now",opts:["Washer or dryer","Fridge or freezer","Oven or dishwasher"],pick:0,job:"Washer repair",busy:["Fridge","Dryer","Oven","Washer","Dishwasher","Fridge","Washer","Dryer","Oven"],work_line:"The part gets replaced on the spot, and the washer runs like new.",done:"Washer fixed",avg:250,cpl:25,sub:"APPLIANCE REPAIR \xB7 ALL BRANDS"}},Lf=["septic","roofing","hvac","plumbing","electrical","garage","tree","pest","waterdamage","mold","foundation","waterproofing","gutters","pressure","chimney","junk","carpet","pool","fencing","generator","appliance"],Pf={g_meet:"Meet Sarah. She lives just a few streets from your shop. She's never heard of you.",g_evening:"It's a normal Tuesday evening. Dinner's done.",g_phone:"So she does what everyone does now. She grabs her phone.",g_fb:"She opens Facebook. She's never heard of you. But there you are.",g_tap:"This is your ad. Go ahead, tap it, just like Sarah would.",g_form:"Three taps. About twenty seconds. That's all it takes.",g_sent:"Request sent. Now watch where it goes.",g_flies:"Her request flies across town, straight to you.",g_phone2:"Name, address, the problem. Right on your phone. A brand-new customer.",g_text:"She's not a referral. She's not a repeat customer. She found you on her own.",g_call:"Then you call her back, and talk about the job.",g_52:"That's how your calendar fills up. New homeowners finding you, on top of your referrals, every single week.",g_drag:"On the call, you pick a time together. Drag Sarah's job onto your calendar.",g_booked:"Booked. She gets a confirmation text right away.",g_morning:"Job day. You head out.",g_truck:"Your name on the side, rolling through town.",g_ontime:"Right on time. Sarah sees you pull up.",g_done:"Job done. And Sarah now has a company she'll call again, and tell her neighbors about.",g_report:"Every Friday, a plain-English report lands in your inbox. New customers, booked jobs, and what they're worth. These are example numbers.",g_day30:"Thirty days later. Every light is a booked job from someone who found you on Facebook. People who had never heard your name.",g_final:"This could be your next thirty days. Extra jobs on top of your referrals, and more money coming in. And I only work with one company per area, so the first to say yes gets it. Your call."};for(let r in $i)Pf["p_"+r]=$i[r].problem,Pf["w_"+r]=$i[r].work_line;var $e=(r,e={})=>new ft(Object.assign({color:r,roughness:.8},e));function Oe(r,e,t,n=0,i=0,s=0,a=!0){let o=new _e(r,e);return o.position.set(n,i,s),o.castShadow=a,o.receiveShadow=!0,t.add(o),o}var za=(r,e,t,n,i,s,a=1,o=1)=>{let l=new _e(new Vn(r,32),e);return l.rotation.x=-Math.PI/2,l.position.set(n,i,s),l.scale.set(a,o,1),t.add(l),l.receiveShadow=!0,l},Ga=()=>$e(6260648,{roughness:.06,metalness:.55,transparent:!0,opacity:.9}),Va=(r,e,t,n,i,s,a=1)=>{let o=new fn(new on({map:Ji(),color:r,transparent:!0,depthWrite:!1,opacity:a}));return o.scale.set(e,e,1),o.position.set(n,i,s),t.add(o),o};function Nl(r,e,t,n){let i=new at;i.setAttribute("position",new Mt(new Float32Array(r*3),3));let s=new Ds(i,new wr({color:e,size:t,transparent:!0,opacity:.9,depthWrite:!1}));return n.add(s),s.userData.v=Array.from({length:r},()=>Math.random()),s}var If={soggy:{spot:[-16.7,32.3],look:[-15.5,0,34.5],work:[-16.2,31.5],ins:[-12.4,2.2,37.6],build(r,e){return e.soggy.forEach(t=>t.visible=!0),{fix(t){e.soggy.forEach(n=>{n.material.opacity=1-t*.85,n.material.transparent=!0})}}}},roof:{spot:[-17.5,30],look:[-17.6,5,23.3],work:[-15.9,26],ladder:{x:-15.9,z:25.15,top:3.1},ins:[-13.5,6.5,30],build(r){let e=Oe(new se(2.4,.06,1.7),$e(2761760),r,-17.6,5.08,23.3);e.rotation.x=.567;let t=Oe(new se(2.5,.02,1.8),$e(5981750,{roughness:.9}),r,-17.6,5.12,23.3);t.rotation.x=.567,t.visible=!1;let n=[];for(let s=0;s<9;s++){let a=Oe(new se(.5,.04,.3),$e(4864560),r,-19+Math.random()*4,.05,27+Math.random()*3.5);a.rotation.y=Math.random()*3,n.push(a)}let i=Nl(30,10274794,.12,r);return{fix(s){t.visible=s>.5,e.visible=s<=.5,n.forEach((a,o)=>a.visible=s<(o+1)/10),i.visible=s<.3},update(s,a){let o=i.geometry.attributes.position;i.userData.v.forEach((l,c)=>{let h=3.5-(a*2+l*3)%3.4;o.setXYZ(c,-18.6+l*2.2,h,25.7)}),o.needsUpdate=!0}}}},ac:{spot:[-22.4,28.6],look:[-24.2,.5,26.6],work:[-23.4,27.7],ins:[-21,2.2,29.6],build(r){let e=new De;e.position.set(-24.2,0,26.6),r.add(e),Oe(new se(1.1,.95,1.1),$e(12172995,{roughness:.5,metalness:.3}),e,0,.5,0),Oe(new se(1.2,.08,1.2),$e(6120040),e,0,1,0);let t=new De;t.position.y=1.05,e.add(t);for(let a=0;a<3;a++){let o=Oe(new se(.9,.02,.16),$e(2895924),t);o.rotation.y=a*2.09}Oe(new je(.06,.06,1.2,8),$e(12088115,{metalness:.7,roughness:.3}),e,-.6,.6,-.4).rotation.z=1.2;let n=Va(16738858,2.4,e,0,1.6,0,.6),i=Va(7327999,2.6,e,0,1.5,0,0),s=0;return{fix(a){s=a,n.material.opacity=(1-a)*.6,i.material.opacity=a*.55},update(a,o){t.rotation.y+=a*s*25,n.scale.setScalar(2.2+Math.sin(o*6)*.3)}}}},leak:{spot:[-20.3,28.4],look:[-21.6,.7,25.3],work:[-21.4,26.1],ins:[-18.6,1.6,29],build(r){let e=Oe(new je(.07,.07,1.6,10),$e(10133928,{metalness:.6,roughness:.3}),r,-21.6,.9,25.12);e.rotation.z=Math.PI/2;let t=za(1.4,Ga(),r,-21.3,.04,26.6,1.3,.8),n=Nl(80,12575743,.09,r),i=0;return{fix(s){i=s,e.material.color.setHex(s>.5?12088115:10133928),n.visible=s<.5,t.scale.set(1.3*(1-s*.9),.8*(1-s*.9),1)},update(s,a){let o=n.geometry.attributes.position;n.userData.v.forEach((l,c)=>{let h=(a*1.3+l)%1;o.setXYZ(c,-21.4+l*.2,.9+h*.9-h*h*1.6,25.2+h*1.8)}),o.needsUpdate=!0}}}},flicker:{spot:[-18.2,29.6],look:[-17,2.2,25],work:[-15.6,25.9],ins:[-14.2,2.4,29.8],build(r){let e=[-17,-20,-23].map(a=>Oe(new Bt(1.25,1.1),new ht({color:16762746,transparent:!0,opacity:.9}),r,a,2.15,25.12,!1)),t=Oe(new se(.5,.7,.14),$e(8159880,{metalness:.4}),r,-15.6,1.4,25.1),n=Va(16773536,1,r,-15.6,1.2,25.3,0),i=Oe(new se(.6,.85,.16),$e(14672870,{metalness:.3}),r,-15.6,1.4,25.12);i.visible=!1;let s=0;return{fix(a){s=a,i.visible=a>.6,t.visible=!i.visible},update(a,o){let l=s>.6||Math.sin(o*23)*Math.sin(o*7.3)>.1?1:.15;e.forEach(c=>c.material.opacity=l*.85),n.material.opacity=s>.6?0:Math.random()<.12?1:0}}}},garage:{front:!0,spot:[-24.4,12.6],look:[-27.3,1.6,18.2],work:[-27.3,16.8],ins:[-23.4,1.8,12],build(r){let e=Oe(new se(3.7,1.25,.14),$e(16053488),r,-27.3,2.6,18.12),t=Oe(new se(3.6,1.6,.05),$e(1382170),r,-27.3,1.25,18.2,!1);return{fix(n){let i=Math.min(1,n*1.4);e.rotation.z=(1-i)*.14,e.scale.y=1+i*.9,e.position.y=2.6-i*1.25,t.visible=i<.95}}}},tree:{spot:[-14.8,30.4],look:[-11.8,6,32],work:[-11.2,31.2],ins:[-9,3,37.5],build(r){let e=new De;e.position.set(-11,0,33),e.rotation.z=.32,e.rotation.y=.5,r.add(e);let t=$e(7035466,{roughness:1});Oe(new je(.35,.55,9,9),t,e,0,4.5,0),[[1.2,7,.3,.9],[-1,6,-.2,-.8],[.5,8.4,.6,.4]].forEach(s=>{let a=Oe(new je(.08,.16,3,6),t,e,s[0],s[1],s[2]);a.rotation.z=s[3]});let n=Oe(new je(.55,.6,.5,10),t,r,-11,.25,33);n.visible=!1;let i=[];for(let s=0;s<3;s++){let a=Oe(new je(.35,.35,1.6,9),t,r,-8.4,.35,31+s*.8);a.rotation.z=Math.PI/2,a.visible=!1,i.push(a)}return{fix(s){e.visible=s<.5,n.visible=s>=.5,i.forEach(a=>a.visible=s>=.5)}}}},pests:{spot:[-17,28.8],look:[-18.6,.3,26.8],work:[-18.2,27.6],ins:[-16.2,1.6,29.6],build(r){let t=new Ps(new cn(.05,6,4),$e(1709072),70);r.add(t);let n=new vt,i=1;return{fix(s){i=1-s},update(s,a){for(let o=0;o<70;o++){let l=(a*.08+o/70)%1,c=o/70<i;n.position.set(c?-21+l*6:0,c?.33:-5,26.5+Math.sin(l*12+o)*.25),n.scale.set(1.4,.6,.8),n.updateMatrix(),t.setMatrixAt(o,n.matrix)}t.instanceMatrix.needsUpdate=!0}}}},flood:{spot:[-20.6,29],look:[-22.4,.2,26],work:[-22.2,27.3],ins:[-19.4,2,30],build(r){Oe(new se(1.6,.5,.9),$e(9407106),r,-22.4,.1,25.5);let e=za(1,Ga(),r,-22.4,.3,25.6,.75,.4),t=za(2.6,Ga(),r,-21.6,.03,27.4,1.4,.8),n=Oe(new se(.7,.6,.5),$e(3116906,{roughness:.5}),r,-20.4,.3,26.8);return n.visible=!1,{fix(i){t.scale.set(1.4*(1-i),.8*(1-i),1),t.visible=i<.98,e.visible=i<.7,n.visible=i>.5}}}},mold:{spot:[-21.2,28.6],look:[-22.4,1.5,25],work:[-22.2,25.9],ins:[-19.6,2,29],build(r){let e=$e(2042394,{transparent:!0,opacity:.85,roughness:1}),t=[];for(let n=0;n<16;n++){let i=.15+Math.random()*.35,s=Oe(new Vn(i,16),e,r,-23.8+Math.random()*2.6,.7+Math.random()*1.6,25.11,!1);t.push(s)}return{fix(n){e.opacity=.85*(1-n)}}}},crack:{spot:[-16.4,28.4],look:[-16,1.2,25],work:[-16,25.9],ins:[-14.2,1.6,28.8],build(r){let e=$e(1315860,{transparent:!0}),t=-16.6,n=.25;for(let s=0;s<9;s++){let a=Oe(new se(.06,.34,.02),e,r,t,n,25.11,!1);a.rotation.z=s%2?.5:-.4,t+=s%2?.12:.05,n+=.26}let i=Oe(new se(.5,2.5,.03),$e(13617598),r,-16.25,1.3,25.12,!1);return i.visible=!1,{fix(s){e.opacity=1-s,i.visible=s>.6}}}},pooling:{spot:[-19,29.2],look:[-18,.1,26.6],work:[-17.2,26.9],ins:[-15.4,2,30.6],build(r){let e=za(1,Ga(),r,-18.6,.04,26.5,3.4,.9),t=Oe(new se(.18,3.4,.14),$e(15921902),r,-15.2,1.8,25.15),n=Nl(30,12575743,.1,r),i=Oe(new je(.12,.12,6,10),$e(1908514),r,-15.2,.06,28.4);i.rotation.x=Math.PI/2,i.visible=!1;let s=0;return{fix(a){s=a,e.scale.set(3.4*(1-a),.9*(1-a),1),e.visible=a<.98,i.visible=a>.4},update(a,o){let l=n.geometry.attributes.position;n.userData.v.forEach((c,h)=>{let u=(o*1.5+c)%1;l.setXYZ(h,-15.2,s>.4?-5:.2+u*.3,25.4+u*.9)}),l.needsUpdate=!0}}}},gutter:{spot:[-19,29.6],look:[-19,3.6,25.6],work:[-15.9,26],ladder:{x:-15.9,z:25.6,top:2.6},ins:[-15,3.4,30.5],build(r){Oe(new se(10.6,.22,.3),$e(15921902),r,-20,3.62,25.75);let e=[];for(let s=0;s<26;s++){let a=Oe(new cn(.12,6,4),$e([9071151,6257198,10506797][s%3]),r,-25+Math.random()*10,3.78,25.75,!1);a.scale.y=.5,e.push(a)}let t=Oe(new se(10.6,.03,.34),$e(14278114,{metalness:.6,roughness:.3}),r,-20,3.75,25.75);t.visible=!1;let n=Nl(90,12575743,.1,r),i=0;return{fix(s){i=s,e.forEach((a,o)=>a.visible=s<(o+1)/27),t.visible=s>.9,n.visible=s<.6},update(s,a){let o=n.geometry.attributes.position;n.userData.v.forEach((l,c)=>{let h=(a*.9+l)%1;o.setXYZ(c,-24+l*8,3.6-h*3.5,26+h*.15)}),o.needsUpdate=!0}}}},grime:{front:!0,spot:[-24.6,11.4],look:[-27.3,0,12.5],work:[-26.4,11.8],ins:[-22.6,2.2,9.6],build(r){let e=new ft({color:2828836,transparent:!0,opacity:.75,roughness:1}),t=Oe(new Bt(4.1,8.8),e,r,-27.3,.075,13.8,!1);return t.rotation.x=-Math.PI/2,{fix(n){t.scale.y=Math.max(.001,1-n),t.position.z=13.8-n*4.4}}}},chimney:{spot:[-21,30],look:[-22.6,6,22.4],work:[-21.6,26],ladder:{x:-21.6,z:25.4,top:3.1},ins:[-17.5,6.5,30],build(r){let e=[];for(let s=0;s<8;s++)e.push(Va(3815994,1.5,r,-22.6,6,22.4,.5));let t=Oe(new se(1.1,.12,1.1),$e(2961716,{metalness:.6,roughness:.3}),r,-22.6,6.35,22.4);t.visible=!1;let n=[Oe(new se(.3,.2,.05),$e(1710618),r,-22.4,5.4,22.82,!1),Oe(new se(.25,.18,.05),$e(1710618),r,-22.9,5.1,22.82,!1)],i=0;return{fix(s){i=s,t.visible=s>.6,n.forEach(a=>a.visible=s<.6)},update(s,a){e.forEach((o,l)=>{let c=(a*.25+l/8)%1;o.position.set(-22.6+Math.sin(c*5+l)*.4,6.2+c*4,22.4+c*1.5),o.scale.setScalar(1+c*3),o.material.opacity=(1-c)*.55*(i>.6?.15:1),o.material.color.setHex(i>.6?14540253:3815994)})}}}},junk:{spot:[-15.2,32.6],look:[-12.6,.5,36],work:[-13.4,35],ins:[-10,2.6,39.6],build(r){let e=[],t=(n,i,s,a,o,l)=>{let c=Oe(n,$e(i),r,s,a,o);c.rotation.y=l||0,e.push(c)};return t(new se(2.2,.8,.9),9132604,-12.6,.4,36.4,.3),t(new se(2,.25,1.4),15262422,-11.8,.95,36.2,-.2),t(new se(.6,.5,.6),13214315,-14,.25,35.4,.4),t(new se(.5,.45,.5),13214315,-13.8,.75,35.5,.1),t(new je(.4,.4,.25,16),1776411,-10.8,.14,35,0),t(new se(.7,.9,.5),3159098,-11,.45,37.6,.6),t(new se(.6,.4,.8),13214315,-13.2,.2,37.4,.9),{fix(n){e.forEach((i,s)=>i.visible=n<1-(s+1)/(e.length+1))}}}},rug:{spot:[-17,29],look:[-18.6,.3,27],work:[-18.2,27.8],ins:[-15.8,2,29.8],build(r){let e=Oe(new se(2.4,.03,1.6),$e(10701372,{roughness:1}),r,-18.6,.32,26.9,!1),t=Oe(new Vn(.45,18),new ft({color:4863008,transparent:!0,opacity:.85}),r,-18.3,.34,26.8,!1);return t.rotation.x=-Math.PI/2,{fix(n){t.material.opacity=.85*(1-n)}}}},pool:{spot:[-16.2,33.4],look:[-14,.2,37],work:[-15.2,34.6],ins:[-10.4,3,41.4],build(r){Oe(new se(7.6,.2,4.6),$e(15394524),r,-14,.1,37.2);let e=$e(5208618,{roughness:.1,metalness:.3});Oe(new se(7,.05,4),e,r,-14,.19,37.2,!1);let t=new ve(5208618),n=new ve(3122904);return{fix(i){e.color.copy(t).lerp(n,i)}}}},fence:{spot:[-10.4,33.4],look:[-7.6,.6,35.6],work:[-8.4,35],ins:[-10.6,2.2,38.6],build(r){let e=$e(10251074,{roughness:.9}),t=new De;t.position.set(-7.2,0,35.2),r.add(t);for(let n=0;n<9;n++)Oe(new se(.12,1.8,.2),e,t,0,.9,-1.6+n*.4);return Oe(new se(.06,.1,3.6),e,t,-.08,.5,0),Oe(new se(.06,.1,3.6),e,t,-.08,1.4,0),[-1.9,1.9].forEach(n=>Oe(new se(.16,2,.16),e,r,-7.2,1,35.2+n)),{fix(n){t.rotation.z=(1-n)*1.2,t.position.y=0}}}},outage:{spot:[-22.2,28.8],look:[-20,2.2,25],work:[-23.6,27.2],ins:[-19.6,2.4,30.4],build(r){let e=new ht({color:724242,transparent:!0,opacity:.92});[-17,-20,-23].forEach(i=>Oe(new Bt(1.3,1.15),e,r,i,2.15,25.12,!1));let t=new De;t.position.set(-24.3,0,26.7),r.add(t),Oe(new se(1.4,1,.8),$e(14014683,{metalness:.2}),t,0,.5,0);for(let i=0;i<5;i++)Oe(new se(1.1,.04,.02),$e(8159880),t,0,.3+i*.12,.41,!1);let n=Va(8257478,.5,t,.5,.9,.42,1);return t.visible=!1,{fix(i){e.opacity=.92*(1-i),t.visible=i>.3,t.scale.setScalar(Math.min(1,(i-.3)*3))}}}},washer:{spot:[-18.3,28.6],look:[-20.4,.5,26.6],work:[-19.6,27.6],ins:[-17,1.8,29.6],build(r){let e=new De;e.position.set(-20.4,.3,26.4),r.add(e),Oe(new se(.75,.9,.7),$e(16054007,{roughness:.3}),e,0,.45,0);let t=Oe(new je(.24,.24,.05,20),$e(3820122,{roughness:.1,metalness:.4}),e,0,.45,.36,!1);t.rotation.x=Math.PI/2;let n=za(1.2,Ga(),r,-20,.33,27.2,1.2,.7),i=0;return{fix(s){i=s,n.scale.set(1.2*(1-s),.7*(1-s),1),n.visible=s<.98},update(s,a){t.rotation.y+=s*i*8}}}}};var de=r=>document.querySelector(r),ar=r=>[...document.querySelectorAll(r)],ce=(r,e,t)=>new M(r,e,t),Ks=(r,e,t)=>Math.max(e,Math.min(t,r)),Zl=r=>r<.5?4*r*r*r:1-Math.pow(-2*r+2,3)/2,ut=r=>String(r).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),Hu=window.REP||{cal:"https://calendly.com/joel-nnamani-bookedjobshq/pilot-chat",base:""},Of=Hu.cal;ar(".book").forEach(r=>r.href=Of);var Nu=document.body.dataset.mode==="any",sr=new URLSearchParams(location.search),Gr=(sr.get("co")||"").trim().slice(0,30),tr=(sr.get("town")||"").trim().slice(0,30),Bf=$i[document.body.dataset.niche]?document.body.dataset.niche:"septic",bi=$i[sr.get("niche")]?sr.get("niche"):Bf,Js=Dl[sr.get("country")]?sr.get("country"):"us",bt=()=>$i[bi],yn=()=>Dl[Js],Pn=()=>Gr||(bi==="septic"?"Laney Septic":"Your Company"),Uu=()=>tr||yn().town,ei=()=>Uu().split(",")[0],kf=r=>(/^(hvac|[aeiou])/i.test(r)?"an ":"a ")+r,Bl=r=>yn().sym+Math.round(r).toLocaleString("en-US"),kr=r=>{let e=Math.pow(10,Math.max(0,Math.floor(Math.log10(Math.max(1,r)))-1));return Math.round(r/e)*e};de("#iNiche")&&(de("#iNiche").innerHTML=Lf.map(r=>`<option value="${r}">${ut($i[r].name)}</option>`).join(""),de("#iNiche").value=bi,de("#iNiche").onchange=r=>{bi=r.target.value,zu()});de("#iCountry")&&(de("#iCountry").innerHTML=Object.entries(Dl).map(([r,e])=>`<option value="${r}">${ut(e.name)}</option>`).join(""),de("#iCountry").value=Js,de("#iCountry").onchange=r=>{Js=r.target.value,de("#iTown").placeholder="e.g. "+yn().town});de("#iCo").value=Gr;de("#iTown").value=tr;de("#iTown").placeholder="e.g. "+yn().town;function zu(){de("#hCo").textContent=Gr||(Nu?"Your business":"Your company"),document.title=(Gr||"Your business")+", 30 Days From Now | Booked Jobs Co.";let r=de("#hTrade");if(r){let e=bt().name;r.textContent=/^[A-Z]{2,}/.test(e)?e:e.toLowerCase()}}zu();de("#iCo").addEventListener("input",r=>{Gr=r.target.value.trim(),zu()});de("#iTown").addEventListener("input",r=>{tr=r.target.value.trim()});var q0=new Date,Za=r=>r.toLocaleDateString(yn().locale==="en-US"||yn().locale==="en-CA"?"en-US":"en-GB",{weekday:"short",month:"short",day:"numeric"}),Ka=new Date(q0);Ka.setDate(Ka.getDate()+3);var Y0=r=>{let e=new Date(Ka);return e.setDate(e.getDate()+r),e},Z0=(()=>{let r=new Date(Ka);return r.setHours(12,0,0,0),r.setDate(r.getDate()+((8-r.getDay())%7||7)),r})(),Ff=r=>{let e=new Date(Z0);return e.setDate(e.getDate()+r),e},K0=[8,10,13,15],Gu={c:3,r:1},J0=(r,e)=>`${(r+11)%12+1}:${String(e).padStart(2,"0")} ${r<12?"AM":"PM"}`,Wa=r=>{let e=K0[Gu.r]*60+r;return J0(Math.floor(e/60),e%60)},zl=()=>{let r=new URL(location.origin+(Hu.base||"")+(Nu?"/try":"/demo"));return Gr&&r.searchParams.set("co",Gr),tr&&r.searchParams.set("town",tr),(Nu||bi!==Bf)&&r.searchParams.set("niche",bi),Js!=="us"&&r.searchParams.set("country",Js),r.toString()},Fr=null,Mi=!1,$s=()=>{if(!Fr)try{Fr=new(window.AudioContext||window.webkitAudioContext)}catch{}return Fr&&Fr.state==="suspended"&&Fr.resume(),Fr};function yi(r,e,t="sine",n=.1,i=0){let s=$s();if(!s||Mi)return;let a=s.currentTime+i,o=s.createOscillator(),l=s.createGain();o.type=t,o.frequency.setValueAtTime(r,a),l.gain.setValueAtTime(1e-4,a),l.gain.exponentialRampToValueAtTime(n,a+.015),l.gain.exponentialRampToValueAtTime(1e-4,a+e),o.connect(l),l.connect(s.destination),o.start(a),o.stop(a+e+.05)}function Df(r,e,t,n){let i=$s();if(!i||Mi)return;let s=i.currentTime,a=i.sampleRate*r|0,o=i.createBuffer(1,a,i.sampleRate),l=o.getChannelData(0);for(let d=0;d<a;d++)l[d]=Math.random()*2-1;let c=i.createBufferSource();c.buffer=o;let h=i.createBiquadFilter();h.type="bandpass",h.Q.value=.8,h.frequency.setValueAtTime(e,s),h.frequency.exponentialRampToValueAtTime(t,s+r*.9);let u=i.createGain();u.gain.setValueAtTime(1e-4,s),u.gain.exponentialRampToValueAtTime(n,s+r*.85),u.gain.exponentialRampToValueAtTime(1e-4,s+r),c.connect(h),h.connect(u),u.connect(i.destination),c.start(s),c.stop(s+r)}var Ht={warp(){Df(5.4,160,3e3,.25);let r=$s();if(!r||Mi)return;let e=r.currentTime,t=r.createOscillator(),n=r.createGain(),i=r.createBiquadFilter();i.type="lowpass",i.frequency.value=500,t.type="sawtooth",t.frequency.setValueAtTime(50,e),t.frequency.exponentialRampToValueAtTime(240,e+5.3),n.gain.setValueAtTime(1e-4,e),n.gain.exponentialRampToValueAtTime(.08,e+4.6),n.gain.exponentialRampToValueAtTime(1e-4,e+5.5),t.connect(i),i.connect(n),n.connect(r.destination),t.start(e),t.stop(e+5.6)},arrive(){[392,523,659,784,1047].forEach((r,e)=>yi(r,1.2,"sine",.06,e*.07))},tap(){yi(1400,.05,"square",.03)},ping(){yi(880,.25,"sine",.08),yi(1320,.35,"sine",.06,.09)},chime(){[523,659,784,1047].forEach((r,e)=>yi(r,.5,"sine",.06,e*.08))},whoosh(){Df(.9,400,2400,.1)},ring(){for(let r=0;r<2;r++)yi(1180,.12,"square",.025,r*.6),yi(1480,.12,"square",.025,r*.6+.14)},engine(r){let e=$s();if(!e||Mi)return;let t=e.currentTime,n=e.createOscillator(),i=e.createGain(),s=e.createBiquadFilter();s.type="lowpass",s.frequency.value=260,n.type="sawtooth",n.frequency.setValueAtTime(48,t),n.frequency.linearRampToValueAtTime(70,t+r*.4),n.frequency.linearRampToValueAtTime(52,t+r),i.gain.setValueAtTime(1e-4,t),i.gain.exponentialRampToValueAtTime(.05,t+.6),i.gain.setValueAtTime(.05,t+r-.8),i.gain.exponentialRampToValueAtTime(1e-4,t+r),n.connect(s),s.connect(i),i.connect(e.destination),n.start(t),n.stop(t+r+.1)},tick(){yi(1900,.03,"square",.02)}},Ou=null,Gl=null,Bu=null,kl=null,ja=null;fetch("/x3d/assets/voice.json?v=4").then(r=>r.json()).then(r=>Ou=r).catch(()=>{});fetch("/x3d/assets/voice.mp3?v=4").then(r=>r.arrayBuffer()).then(r=>{Bu=r,Hf()}).catch(()=>{});function Hf(){let r=Fr;!r||!Bu||Gl||r.decodeAudioData(Bu.slice(0)).then(e=>Gl=e).catch(()=>{})}function Kl(){try{kl&&kl.stop()}catch{}kl=null;try{window.speechSynthesis&&speechSynthesis.cancel()}catch{}}function $0(r,e){if(Kl(),Mi||ti!=="story")return 0;let t=$s(),n=Ou&&Ou[r];if(t&&Gl&&n){let i=t.createBufferSource();return i.buffer=Gl,ja||(ja=t.createGain(),ja.gain.value=1.15,ja.connect(t.destination)),i.connect(ja),i.start(0,n[0],n[1]),kl=i,n[1]*1e3}if(window.speechSynthesis&&e){let i=new SpeechSynthesisUtterance(e);return i.lang="en-US",i.rate=1,i.pitch=.92,speechSynthesis.speak(i),e.split(" ").length*380}return 0}de("#mute").onclick=()=>{Mi=!Mi,de("#mute").textContent=Mi?"\xD7":"\u266A",Mi&&Kl()};var Ja=de("#gl"),mt=Af(Ja),Qn=mt.camera;mt.setTOD("dusk");var zr=Cf(Ka,Za),Be=null,Nf="",zf="",Ei=null,Ce=null,nr=null,xi=0,Qi=0;async function Q0(){let r=[Pn(),Uu(),bi,Js].join("|");Be&&Nf===r||(Be&&Be.dispose(),Be=await Rf(mt,Pn(),Uu(),{vehicle:bt().vehicle,sub:bt().sub,leftDrive:yn().leftDrive}),Nf=r,uv(),zf=ev(),Ei=nv())}function Jl(){mt.resize(),zr.resize()}addEventListener("resize",Jl);Jl();function ev(){try{mt.setTOD("day"),mt.update(0),nr&&nr.fix(0);let r=Qn.clone();r.fov=38,r.aspect=1.25,r.updateProjectionMatrix(),r.position.set(62.5,2.2,-3.6),r.lookAt(74,2.2,-14.5);let e=mt.renderer,t=new re;e.getSize(t);let n=e.getPixelRatio();e.setPixelRatio(1),e.setSize(1e3,800,!1),e.render(mt.scene,r);let i=e.domElement.toDataURL("image/jpeg",.85);return e.setPixelRatio(n),e.setSize(t.x,t.y,!1),mt.setTOD("dusk"),mt.update(0),Jl(),i}catch{return""}}function Ul(r,e={}){e=Object.assign({bg:"#ffffff",fg:"#0b1a14",sub:"#4a5d55",accent:"#f39a3d",h:.8},e);let t=[44,32,30],n=30,i=document.createElement("canvas").getContext("2d"),s=0;r.forEach((p,f)=>{i.font=`${f?600:800} ${t[Math.min(f,2)]}px Inter, Arial`,s=Math.max(s,i.measureText(p).width)}),s=Math.ceil(s+n*2+44);let a=Math.ceil(n*1.5+r.reduce((p,f,v)=>p+t[Math.min(v,2)]*1.3,0)),o=document.createElement("canvas");o.width=s,o.height=a+12;let l=o.getContext("2d");l.shadowColor="rgba(0,0,0,.3)",l.shadowBlur=12,l.fillStyle=e.bg,l.beginPath(),l.roundRect?l.roundRect(4,4,s-8,a-2,30):l.rect(4,4,s-8,a-2),l.fill(),l.shadowColor="transparent";let c=n*.75;r.forEach((p,f)=>{let v=t[Math.min(f,2)];l.font=`${f?600:800} ${v}px Inter, Arial`,l.textBaseline="top",f===0&&(l.fillStyle=e.accent,l.beginPath(),l.arc(n+12,c+v*.55,12,0,7),l.fill()),l.fillStyle=f?e.sub:e.fg,l.fillText(p,n+44,c),c+=v*1.3});let h=new ln(o);h.colorSpace=ct;let u=new fn(new on({map:h,depthTest:!1,transparent:!0}));u.renderOrder=20;let d=e.h/(a+12)*(r.length>1?1.6:1);return u.userData.base=ce(s*d,(a+12)*d,1),u.scale.set(.001,.001,1),u.userData.on=0,u.userData.cur=0,u}var Xs=[];function ir(r,e){r.userData.on=e?1:0}function tv(r){Xs.forEach(e=>{let t=e.userData;t.cur+=(t.on-t.cur)*(1-Math.exp(-r*10));let n=Math.max(1e-4,t.cur*(1+Math.sin(Math.min(1,t.cur)*Math.PI)*.12*t.on))*(Qn.aspect<.8&&e.userData.base.x<6?.62:1);e.scale.set(t.base.x*n,t.base.y*n,1),e.visible=t.cur>.01})}function nv(){Xs.length=0;let r=new De;Be.root.add(r);let e={g:r};Ce=If[bt().prop];let t=new De;if(r.add(t),nr=Ce.build(t,Be),nr.fix(0),xi=0,Qi=0,e.notif=Ul(["NEW LEAD \xB7 Sarah M.",bt().opts[bt().pick],ei()+" \xB7 0.4 mi away"],{h:1.1}),r.add(e.notif),Xs.push(e.notif),e.call=Ul(["Calling Sarah M.","from your business line"],{accent:"#2fbf7f",h:.9}),r.add(e.call),Xs.push(e.call),e.booked=Ul(["Job done \xB7 Sarah M.",bt().done],{accent:"#2fbf7f",h:1}),e.booked.position.set(Ce.spot[0],4.4,Ce.spot[1]),r.add(e.booked),Xs.push(e.booked),e.hose=null,Ce.ladder){let n=new De,i=new ft({color:14263361,roughness:.6});[-.28,.28].forEach(s=>{let a=new _e(new se(.07,4.6,.07),i);a.position.set(s,2.3,0),a.castShadow=!0,n.add(a)});for(let s=0;s<12;s++){let a=new _e(new se(.56,.05,.05),i);a.position.y=.3+s*.36,n.add(a)}n.position.set(Ce.ladder.x,0,Ce.ladder.z+.9),n.rotation.x=-.2,n.visible=!1,r.add(n),e.ladder=n}return e.pins=[],[[-20,21],[12,21],[-12,-21],[44,21],[-80,21],[20,-21],[-80,-21],[100,21],[-112,-21]].forEach(([n,i],s)=>{let a=new De;a.position.set(n,0,i),r.add(a);let o=new _e(new je(.5,1.4,40,16,1,!0),new ht({color:6090928,transparent:!0,opacity:0,blending:kt,depthWrite:!1,side:Wn}));o.position.y=20,a.add(o);let l=new fn(new on({map:Ji(),color:8257478,transparent:!0,depthWrite:!1,blending:kt,opacity:0}));l.scale.set(9,9,1),l.position.y=14,a.add(l);let c=Ul([s===0?"Sarah M. \xB7 booked":"Booked job "+(s+1)],{accent:"#2fbf7f",h:1.6});c.position.y=17,a.add(c),Xs.push(c),a.userData={beam:o,orb:l,lab:c,on:0,cur:0},e.pins.push(a)}),e}function iv(r){let e=Ei;e.hose&&(e.g.remove(e.hose),e.hose.geometry.dispose());let t=new zi(r);e.hose=new _e(new Pa(t,180,.08,8),new ft({color:2829875,roughness:.7})),e.hose.castShadow=!0,e.hose.geometry.setDrawRange(0,0),e.hoseLen=e.hose.geometry.index.count,e.hoseT=.001,e.g.add(e.hose)}var Ze={p:ce(-80,70,140),t:ce(0,0,0),shot:null,T:0,yaw:0,yawT:0,pitch:0,pitchT:0,fovT:40,cut:!1,shake:0};function Ct(r,e=4,t={}){Ze.shot={fn:r,dur:e,t0:Ze.T,ease:t.linear?n=>n:Zl},Ze.fovT=t.fov||40,Ze.cut=!!t.cut,Ze.shake=t.shake||0}var ku=(r,e,t)=>r.clone().lerp(e,t),Ys=(r,e,t,n)=>i=>[ku(ce(...r),ce(...t),i),ku(ce(...e),ce(...n),i)];function rv(r,e){let t=new zi(r.map(i=>i.isVector3?i:ce(...i))),n=new zi(e.map(i=>i.isVector3?i:ce(...i)));return i=>[t.getPoint(i),n.getPoint(i)]}var Uf=ce(0,0,0);function sv(r){let e=Ze.p,t=Ze.t;if(Ze.shot){let l=Ze.shot,c=Ks((Ze.T-l.t0)/l.dur,0,1),h=l.fn(l.ease(c),r);e=h[0],t=h[1]}Ze.yaw+=(Ze.yawT-Ze.yaw)*(1-Math.exp(-r*5)),Ze.pitch+=(Ze.pitchT-Ze.pitch)*(1-Math.exp(-r*5)),Hr||(Ze.yawT*=Math.exp(-r*.9),Ze.pitchT*=Math.exp(-r*.9));let n=e.clone().sub(t),i=Qn.aspect<.8;n.applyAxisAngle(ce(0,1,0),Ze.yaw),n.y*=1+Ze.pitch;let s=av(t,t.clone().add(n));Ze.shake&&s.add(ce(Math.sin(Ze.T*1.7)*.03,Math.sin(Ze.T*2.3)*.025,Math.cos(Ze.T*1.3)*.03).multiplyScalar(Ze.shake));let a=Ze.cut?1:1-Math.exp(-r*7);Ze.cut=!1,Qn.position.lerp(s,a),Uf.lerp(t,a),Qn.lookAt(Uf);let o=Ze.fovT*(i?1.45:Qn.aspect<1.2?1.15:1);Math.abs(Qn.fov-o)>.01&&(Qn.fov+=(o-Qn.fov)*Math.max(a,.1),Qn.updateProjectionMatrix()),mt.setFocus(t)}var Vl=new fi,Wl=ce(0,0,0);function av(r,e){if(!Be)return e;let t=Object.values(Be.people).filter(a=>a.root.visible&&a.root.position.distanceTo(r)<20),n=t.reduce((a,o)=>{let l=o.root.position.distanceTo(ce(r.x,0,r.z));return l<a.d?{p:o,d:l}:a},{p:null,d:1.2}).p,i=a=>{let o=a.clone().sub(r),l=o.length();return o.normalize(),t.some(c=>{if(c===n)return!1;let h=c.root.position.clone().add(ce(0,c.o.height*.55,0)),u=Ks(h.clone().sub(r).dot(o),0,l);return u<.4?!1:r.clone().addScaledVector(o,u).distanceTo(h)<c.o.height*.42})},s=e;if(i(s))for(let a of[.45,-.45,.9,-.9,1.35,-1.35]){let o=r.clone().add(e.clone().sub(r).applyAxisAngle(ce(0,1,0),a));if(!i(o)){s=o;break}}if(Be.boxes&&s.y<14&&s.distanceTo(r)<40){let a=s.clone().sub(r),o=a.length();a.normalize(),Vl.set(r,a);let l=o;Be.boxes.forEach(c=>{if(!c.containsPoint(r)&&Vl.intersectBox(c,Wl)){let h=Wl.distanceTo(r);h<l&&(l=h)}}),l<o&&(s=r.clone().addScaledVector(a,Math.max(.8,l-.35)))}return s}function ov(r,e){let t=r.root.position.clone().setY(0),n=e.root.position.clone().setY(0),i=t.clone().lerp(n,.5),s=n.clone().sub(t),a=Math.max(1.5,s.length());s.normalize();let o=ce(s.z,0,-s.x),l=i.clone().add(ce(0,1.15,0)),c=3.2+a*.9,h=d=>{let f=l.clone().addScaledVector(o,d*c).add(ce(0,.9,0)).clone().sub(l),v=f.length();f.normalize(),Vl.set(l,f);let m=v;return(Be.boxes||[]).forEach(x=>{x.containsPoint(l)||Vl.intersectBox(x,Wl)&&(m=Math.min(m,Wl.distanceTo(l)))}),m},u=h(1)>=h(-1)?1:-1;return()=>[l.clone().addScaledVector(o,u*c).add(ce(0,.9,0)).addScaledVector(s,.4),l]}var Hr=null;Ja.addEventListener("pointerdown",r=>{ti==="story"&&(Hr={x:r.clientX,y:r.clientY},Ja.setPointerCapture(r.pointerId),de("#hint").style.opacity=0)});Ja.addEventListener("pointermove",r=>{Hr&&(Ze.yawT=Ks(Ze.yawT-(r.clientX-Hr.x)*.004,-.9,.9),Ze.pitchT=Ks(Ze.pitchT+(r.clientY-Hr.y)*.003,-.4,.6),Hr={x:r.clientX,y:r.clientY})});["pointerup","pointercancel"].forEach(r=>Ja.addEventListener(r,()=>Hr=null));var Gf=(r,e=1.5)=>r.root.position.clone().add(ce(0,e*(r.o.height/1.875),0)),Vu=r=>ce(Math.sin(r.yaw),0,Math.cos(r.yaw));function Ya(r,e=2.6,t=.6,n=1.55,i=1.5){return()=>{let s=Vu(r),a=ce(s.z,0,-s.x),o=Gf(r,i).add(ce(0,-.12,0));return[o.clone().addScaledVector(s,e*1.3).addScaledVector(a,t*1.3).add(ce(0,(n-i)*.5,0)),o]}}var ti="landing";async function Wu(){if(ti!=="landing")return;ti="loading",$s(),Hf();try{let e=document.documentElement;(e.requestFullscreen||e.webkitRequestFullscreen||(()=>{})).call(e)}catch{}let r=de("#blackout");r.innerHTML='<div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:#6d8a7e;font-size:13px;letter-spacing:.2em">LOADING YOUR TOWN</div>',r.classList.add("on"),await new Promise(e=>setTimeout(e,480)),document.body.classList.add("in-show","locked"),scrollTo(0,0),await Q0(),r.innerHTML="",ti="warp",zr.start(),de("#warpHud").classList.add("on"),Ht.warp(),r.classList.remove("on"),zr.onDate=(e,t,n)=>{de("#wFill").style.width=n*100+"%",t&&(de("#wDate").textContent=Za(t),de("#wDay").textContent="DAY "+e+(e===30?" \xB7 YOUR FUTURE":""))},zr.onDone=()=>{let e=de("#flash");e.style.transition="none",e.style.opacity=1,de("#warpHud").classList.remove("on"),document.body.classList.add("in-story"),ti="story",Ht.arrive(),mt.setTOD("dusk"),Cn.t=0,Cn.n=0,requestAnimationFrame(()=>{e.style.transition="opacity 1.4s ease",e.style.opacity=0});try{history.replaceState(null,"",zl().replace(location.origin,""))}catch{}Si(0,!0)}}de("#start").addEventListener("click",Wu);ar("[data-start]").forEach(r=>r.addEventListener("click",Wu));de("#who").addEventListener("submit",r=>{r.preventDefault(),Wu()});de("#exit").onclick=()=>{Kl();try{document.fullscreenElement&&document.exitFullscreen()}catch{}location.href=zl()};var rr=0,jl=0,er=!0,Qa=0,Rt=r=>r===jl,Yt=(r,e)=>new Promise(t=>setTimeout(()=>t(Rt(e)),r)),zt=(r,e)=>Yt(Math.max(r,Qa-performance.now()+350),e);function Pt(r,e,t){de("#caption").classList.remove("quiet");let n=t?$0(t,e):0;Qa=performance.now()+n,de("#cMeta").textContent=r;let i=de("#cText");i.innerHTML=e.split(" ").map(a=>`<span>${ut(a)}</span>`).join(" ");let s=n?Math.min(90,n/Math.max(1,i.children.length)*.85):55;[...i.children].forEach((a,o)=>setTimeout(()=>a.classList.add("on"),60+o*s))}function Vf(r){let e=de("#prompt");if(!r){e.classList.remove("on");return}e.textContent=r,e.classList.add("on")}var qa=0,Fu=0,lv=0;function Xl(r,e,t){let n=de("#timer");n.classList.toggle("on",!!r),n.classList.toggle("done",!!t),e!==void 0&&(qa=e,Fu=e,de("#tClock").textContent="0:"+String(Math.floor(e)).padStart(2,"0"))}function Fl(r,e,t,n){let i=document.createElement("div");for(i.className="card "+r,i.innerHTML=`<small><span>${ut(e)}</span><span>${ut(n||"now")}</span></small>${t}`,de("#sms").appendChild(i);de("#sms").children.length>3;)de("#sms").firstChild.remove()}function $a(r){let e=de("#panel");if(!r){e.classList.remove("on");return}e.innerHTML=`<div class="glass">${r}</div>`,e.classList.add("on")}var qs=[{name:"The problem",run:fv},{name:"Your ad",run:mv},{name:"The lead",run:gv},{name:"She found you",run:vv},{name:"Booked",run:yv},{name:"The job",run:_v},{name:"Friday report",run:Mv},{name:"Day 30",run:Ev}];qs.forEach((r,e)=>{let t=document.createElement("button");t.title=e+1+". "+r.name,t.onclick=()=>Si(e),de("#dots").appendChild(t)});function Si(r,e){r=Ks(r,0,qs.length-1),jl++;let t=jl;Kl(),Qa=0;let n=()=>{Rt(t)&&(rr=r,ar("#dots button").forEach((s,a)=>{s.classList.toggle("on",a===r),s.classList.toggle("past",a<r)}),de("#bNext").classList.remove("pulse"),de("#bNext").textContent=r===qs.length-1?"Replay \u21BA":"Next scene \u25B6",Vf(""),jf(!0),$a(""),de("#endcard").classList.remove("on"),de("#sms").innerHTML="",Xl(!1),pv(r),qs[r].run(t,e).then(s=>{!Rt(t)||!s||(er&&rr<qs.length-1?setTimeout(()=>Rt(t)&&Si(rr+1),250):de("#bNext").classList.add("pulse"))}))};if(e)return n();let i=de("#dip");i.classList.add("on"),setTimeout(()=>{n(),setTimeout(()=>i.classList.remove("on"),120)},320)}de("#bNext").onclick=()=>Si(rr===qs.length-1?0:rr+1);de("#bPrev").onclick=()=>Si(rr-1);de("#bPlay").onclick=()=>{er=!er,de("#bPlay").textContent=er?"\u275A\u275A":"\u25B6",de("#bPlay").title=er?"Movie mode on":"Movie mode off"};addEventListener("keydown",r=>{ti!=="story"||r.target.tagName==="INPUT"||r.target.tagName==="SELECT"||((r.key==="ArrowRight"||r.key===" ")&&(r.preventDefault(),Si(rr+1)),r.key==="ArrowLeft"&&Si(rr-1))});var cv=ce(76,0,-12.5),hv=ce(73,0,-9.4),ql=null,Wf=.985,_i=0,Zs=0;function uv(){let r=yn().leftDrive?1.9:-1.9;ql=new zi([ce(76,0,-12.5),ce(70,0,-12),ce(64,0,-8.5),ce(60,0,r-1.6),ce(52,0,r),ce(10,0,r),ce(-6,0,r),ce(-13.5,0,1.6),ce(-20,0,3.4),ce(-23,0,3.6)])}function Yl(r){r=Ks(r,0,1);let e=ql.getPointAt(r),t=ql.getPointAt(Math.min(1,r+.004));Be.truck.position.copy(e);let n=t.x-e.x,i=t.z-e.z;n*n+i*i>1e-8&&(Be.truck.rotation.y=Math.atan2(-i,n)),_i=r}var dv=()=>{let r=Be.truck,e=ce(Math.cos(r.rotation.y),0,-Math.sin(r.rotation.y));return r.position.clone().addScaledVector(e,(r.userData.rear||-3)+.3).add(ce(0,.9,0)).addScaledVector(ce(-e.z,0,e.x),0)},Xa=[ce(-12.5,0,9),ce(-10.8,0,21),ce(-11.8,0,28)];function ju(){return Ce.front?{p:ce(-18.8,0,15.6),yaw:Math.PI}:{p:ce(-18.6,0,26.2),yaw:0}}function pv(r){let e=Be.people.sarah,t=Be.people.owner,n=Ei;e.path=null,t.path=null,e.root.visible=!0,t.root.visible=!0,t.root.position.y=0,Zs=0,Be.noTraffic=!1,[n.notif,n.call,n.booked].forEach(a=>ir(a,0)),n.hose&&(n.hose.geometry.setDrawRange(0,0),n.hoseT=0),n.ladder&&(n.ladder.visible=!1),n.pins.forEach(a=>{a.userData.on=0,ir(a.userData.lab,0)}),Qi=r>=6?1:0,xi=Qi,nr.fix(xi),Be.truck.position.copy(cv),Be.truck.rotation.y=Math.PI,_i=0,t.root.position.copy(hv),t.yaw=t.yawTarget=.5,t.set("idle"),t.setMood("neutral");let i=ju(),s=ce(Ce.spot[0],0,Ce.spot[1]);r<=1&&(e.root.position.copy(i.p),e.yaw=e.yawTarget=i.yaw,e.set("idle"),e.setMood("neutral")),r>=2&&r<=4&&(e.root.position.copy(s),e.face(Ce.look[0],Ce.look[2]),e.yaw=e.yawTarget,e.set("phoneHappy"),e.setMood("smile")),r===5&&(e.root.visible=!1,Yl(0)),r>=6&&(e.root.position.copy(s),e.yaw=e.yawTarget=Math.PI,e.set("idle"),e.setMood("happy"),Yl(0)),r===6&&(t.root.position.set(66,0,-12),t.yaw=t.yawTarget=.35,t.set("phoneHappy"),t.setMood("happy"))}var Ol=()=>`Day 4 \xB7 7:38 PM \xB7 ${ei()}`;async function fv(r,e){mt.setTOD("dusk",e?0:1.5);let t=Be.people.sarah,n=ce(Ce.spot[0],0,Ce.spot[1]),i=ce(...Ce.look),s=n.clone().sub(ce(i.x,0,i.z)).normalize(),a=n.clone().addScaledVector(s,7).add(ce(s.z*3,5,-s.x*3)),o=n.clone().lerp(i,.5).add(ce(0,.8,0));if(Ct(rv([ce(-95,62,-70),ce(-60,36,8),ce(-30,18,Ce.front?-18:52),a],[ce(-20,0,0),ce(-18,2,22),o,o]),e?8:6.5),Pt(Ol(),`Meet Sarah. She lives a few streets from ${Pn()}. She's never heard of you.`,"g_meet"),!await zt(e?3800:2600,r))return;Pt(Ol(),"It's a normal Tuesday evening. Dinner is done.","g_evening");let l=ju(),c=n.clone().lerp(l.p,Math.min(1,3.2/Math.max(.1,n.distanceTo(l.p))));if(t.root.position.copy(c),await t.walkTo([n],1.15),!Rt(r)||(t.face(i.x,i.z),t.set(Ce.look===void 0||bt().look==="down"?"lookDown":"lookUp"),t.setMood("worried"),await zt(150,r),!Rt(r)))return;let h=ce(...Ce.ins);if(bt().look==="down"){let u=n.clone().sub(ce(i.x,0,i.z)).normalize(),d=ce(u.z,0,-u.x);h=ce(i.x,0,i.z).addScaledVector(d,3.4).addScaledVector(u,1.6).add(ce(0,1.7+i.y*.4,0))}if(Ct(Ys(h.toArray(),[i.x,i.y,i.z],h.clone().lerp(i,.08).toArray(),[i.x,i.y,i.z]),4.5,{cut:!0,shake:1}),Pt(Ol(),bt().problem,"p_"+bi),!!await zt(3800,r)&&(Ct(Ya(t,2.5,.7,1.55,1.45),3,{cut:!0,shake:1,fov:36}),!!await Yt(800,r)))return t.set("phone"),Ct(u=>{let d=t.root,p=Vu(t),f=ce(p.z,0,-p.x),v=new M;return t.phone.getWorldPosition(v),[d.position.clone().addScaledVector(p,3.1-u*.4).addScaledVector(f,-1.9).add(ce(0,1.75,0)),v.clone().lerp(Gf(t),.5)]},4,{cut:!0,shake:1,fov:36}),Pt(Ol(),"So she does what everyone does now. She grabs her phone.","g_phone"),await zt(3600,r)}async function mv(r){mt.setTOD("dusk",.8);let e=Be.people.sarah;if(e.state!=="phone"&&(e.root.position.set(Ce.spot[0],0,Ce.spot[1]),e.face(Ce.look[0],Ce.look[2]),e.yaw=e.yawTarget,e.set("phone"),e.setMood("worried")),Ct(n=>{let i=new M;e.phone.getWorldPosition(i);let s=Vu(e),a=ce(s.z,0,-s.x),o=e.root.position.clone().addScaledVector(s,-2).addScaledVector(a,-.9).add(ce(0,2.1,0)),l=i.clone().addScaledVector(s,-.22).addScaledVector(a,-.05).add(ce(0,.16,0));return[o.lerp(l,n),i]},2.2),Pt("7:39 PM \xB7 Sarah's phone","She opens Facebook. She's never heard of you. But there you are.","g_fb"),Ht.whoosh(),!await Yt(1500,r)||(Sv(),!await Yt(900,r))||(de("#feedIn").style.transform=`translateY(-${de("#adPost").offsetTop-8}px)`,!await zt(900,r))||(Pt("Your move","This is your ad. Tap it, like Sarah would.","g_tap"),de("#adBtn").classList.add("hl"),de("#pTip").style.visibility="visible",await Du("#adBtn",r,3400),!Rt(r)))return;Ht.tap(),de("#adBtn").classList.remove("hl"),de("#pTip").textContent="Pick what's going on.",de("#sheet").classList.add("on"),Pt("The form","Three taps. About 20 seconds. That's all it takes.","g_form");let t=await Du(".opt",r,2600,!0);if(Rt(r)&&(Ht.tap(),(t||ar(".opt")[bt().pick]).classList.add("sel"),de("#send").classList.add("ok"),de("#pTip").textContent="Now send it.",await Du("#send",r,1500),!!Rt(r)&&(Ht.tap(),de("#done").classList.add("on"),de("#pTip").style.visibility="hidden",Ht.chime(),Pt("7:41 PM","Request sent. Now watch where it goes.","g_sent"),!!await zt(2e3,r))))return jf(),e.set("phoneHappy"),e.setMood("smile"),Ct(Ya(e,3,-.8,1.7,1.45),2.5,{cut:!0}),await Yt(1400,r)}async function gv(r){mt.setTOD("dusk",.6);let e=Be.people.sarah,t=Be.people.owner,n=Ei,i=Tv(e,ce(73,2.2,-9.4));if(Xl(!1),Ct(s=>[ku(ce(Ce.spot[0]+10,14,Ce.spot[1]+16),ce(46,18,22),s),i.core.position.clone()],3.6,{linear:!0}),Pt("7:41 PM \xB7 Across town","Her request flies across town, straight to you.","g_flies"),Ht.whoosh(),!!await zt(3500,r)&&(t.set("phone"),t.setMood("neutral"),t.face(66,0),Ct(Ys([64.5,2.4,-2.4],[72.4,1.6,-9.4],[67.4,2.15,-5.2],[72.8,1.75,-9.4]),4,{cut:!0,shake:1}),Ht.ping(),n.notif.position.set(73,3.3,-9.4),ir(n.notif,1),Pt("7:41 PM \xB7 Your phone","Name, address, the problem. Right on your phone. A brand-new customer.","g_phone2"),!!await Yt(1200,r)))return t.setMood("smile"),await zt(2400,r)}async function vv(r){mt.setTOD("dusk",.5);let e=Be.people.sarah,t=Be.people.owner,n=Ei;if(Xl(!1),e.set("phone"),e.setMood("neutral"),Ct(Ya(e,2.4,.7,1.6,1.42),3,{cut:!0,shake:1}),Pt("7:41 PM \xB7 A new customer","She's not a referral. She's not a repeat customer. She found you on her own.","g_text"),!!await Yt(900,r)&&(Ht.ping(),Fl("me",Pn()+" (auto-text)",`Hi Sarah, it's ${ut(Pn())}. Thanks for reaching out about the ${ut(bt().opts[bt().pick].toLowerCase())}. I'll give you a call shortly.`,"7:41 PM"),e.setMood("smile"),!!await zt(2600,r)&&(Fl("","Sarah","Thank you! So glad I found you \u{1F64F}","7:41 PM"),e.set("phoneHappy"),e.setMood("happy"),Ht.tick(),!!await Yt(1200,r)&&(t.set("call"),t.setMood("smile"),ir(n.notif,0),n.call.position.set(73,3.2,-9.4),ir(n.call,1),Ht.ring(),Ct(Ya(t,2.6,-.8,1.7,1.55),4,{cut:!0,shake:1}),Pt("Then a real call","Then you call her back, and talk about the job.","g_call"),!!await zt(3e3,r)))))return e.set("call"),e.setMood("happy"),ir(n.call,0),Xl(!1),Ht.chime(),Fl("sys","Your phone","\u2713 New customer: Sarah M. \xB7 found you on Facebook","7:42 PM"),Ct(Ya(e,2.5,-.6,1.6,1.45),4,{cut:!0,shake:1}),Pt("A fuller calendar","That's how your calendar fills up. New homeowners finding you, on top of your referrals, every single week.","g_52"),await zt(4500,r)}async function yv(r){mt.setTOD("night",2.5);let e=Be.people.sarah,t=Be.people.owner;if(e.set("call"),e.setMood("happy"),t.set("call"),t.setMood("smile"),Ct(p=>{let f=2.2+p*.5;return[ce(-20+Math.cos(f)*70,34,10+Math.sin(f)*70),ce(10,0,0)]},16,{linear:!0}),Pt("7:44 PM \xB7 On the call","You pick a time together. Drag Sarah's job onto your calendar.","g_drag"),!await Yt(1400,r))return;let n=[0,1,2,3,4].map(Ff),i=["8 AM","10 AM","1 PM","3 PM"],s=["Ellis","Park St","Gray","Webb","Diaz","Cole","Hwy 74","Reyes","Patel"],a=["0,0","0,2","1,1","2,0","2,3","3,0","4,1","4,2","1,3"],o={};a.forEach((p,f)=>o[p]=`${bt().busy[f]} \xB7 ${s[f]}`);let l=`<h3>Your calendar \xB7 next week</h3><div class="sub">Busy slots are already blocked. Example jobs.</div>
   <div class="tray"><div class="jobcard" id="job"><span class="dot"></span><div><b>Sarah M. \xB7 ${ut(bt().job)}</b>${ut(bt().opts[bt().pick])}</div></div><span class="arrow">\u2190 drag onto an open slot</span></div>
   <div class="cal"><div></div>${n.map(p=>`<div class="hd">${p.toLocaleDateString("en-US",{weekday:"short"}).toUpperCase()} ${p.getDate()}</div>`).join("")}`;i.forEach((p,f)=>{l+=`<div class="tm">${p}</div>`;for(let v=0;v<5;v++){let m=v+","+f;l+=o[m]?`<div class="slot busy">${ut(o[m])}</div>`:`<div class="slot open" data-k="${m}">open</div>`}}),l+="</div>",$a(l);let c=await xv(r,er?Math.max(3600,Qa-performance.now()+500):0);if(!Rt(r)||!c)return;let[h,u]=c.dataset.k.split(",").map(Number);Gu={c:h,r:u};let d=`${n[h].toLocaleDateString("en-US",{weekday:"long"})} ${i[u].replace(" ",":00 ")}`;if(c.classList.add("booked"),c.textContent="Sarah M. \u2713",Ht.chime(),Pt("Booked",`Booked for ${d}. She gets a confirmation text right away.`,"g_booked"),!!await Yt(1300,r))return $a(""),Fl("me",Pn(),`You're booked for ${ut(d)}. We'll text you when we're on the way.`,"7:45 PM"),Ht.ping(),e.set("phoneHappy"),await zt(2400,r)}function xv(r,e){return new Promise(t=>{let n=de("#job"),i=!1,s=0,a=0,o=!1,l=ar(".slot.open"),c=(d,p)=>l.find(f=>{let v=f.getBoundingClientRect();return d>v.left&&d<v.right&&p>v.top&&p<v.bottom}),h=d=>{i||!d||(i=!0,n.style.visibility="hidden",t(d))};n.addEventListener("pointerdown",d=>{o=!0,s=d.clientX,a=d.clientY,n.setPointerCapture(d.pointerId),n.classList.add("drag"),n.style.transition="none"}),n.addEventListener("pointermove",d=>{o&&(n.style.transform=`translate(${d.clientX-s}px,${d.clientY-a}px) scale(1.05)`,l.forEach(p=>p.classList.toggle("hot",p===c(d.clientX,d.clientY))))}),n.addEventListener("pointerup",d=>{o=!1,n.classList.remove("drag");let p=c(d.clientX,d.clientY);p?(Ht.tap(),h(p)):(n.style.transition="transform .3s",n.style.transform="")}),l.forEach(d=>d.addEventListener("click",()=>{Ht.tap(),h(d)})),e&&setTimeout(()=>{if(i||o||!Rt(r))return;let d=l.find(v=>v.dataset.k==="3,1")||l[0],p=n.getBoundingClientRect(),f=d.getBoundingClientRect();n.style.transition="transform 1.1s cubic-bezier(.4,0,.2,1)",n.style.transform=`translate(${f.left+f.width/2-p.left-p.width/2}px,${f.top+f.height/2-p.top-p.height/2}px) scale(.8)`,d.classList.add("hot"),setTimeout(()=>h(d),1150)},e);let u=setInterval(()=>{Rt(r)?i&&clearInterval(u):(clearInterval(u),t(null))},300)})}async function _v(r){mt.setTOD("dawn"),mt.setTOD("day",9);let e=Be.people.sarah,t=Be.people.owner,n=Ei;Be.noTraffic=!0;let i=Ff(Gu.c),s=bt().work,a=ce(Ce.spot[0],0,Ce.spot[1]),o=ce(Ce.work[0],0,Ce.work[1]),l=ce(...Ce.look);if(Pt(`${Za(i)} \xB7 ${Wa(-12)}`,"Job day. You head out.","g_morning"),t.root.visible=!1,Ht.engine(6.5),Zs=1,Be.truck.setLights(!0),Ct(()=>{let y=Be.truck,_=ce(Math.cos(y.rotation.y),0,-Math.sin(y.rotation.y)),T=ce(-_.z,0,_.x);return[y.position.clone().addScaledVector(_,-13).addScaledVector(T,yn().leftDrive?6:-6).add(ce(0,7.5,0)),y.position.clone().addScaledVector(_,6).add(ce(0,1.5,0))]},1),await zt(1200,r),!Rt(r)||(Pt(`${Za(i)} \xB7 ${Wa(-8)}`,`Your name on the side, rolling through ${ei()}.`,"g_truck"),!await zt(1800,r)))return;if(_i<.7){Yl(.7);let y=yn().leftDrive?1:-1;Ct(()=>[ce(-4,1.4,y>0?-9.6:9.6),Be.truck.position.clone().add(ce(0,1.6,0))],1,{cut:!0,fov:34})}for(;Rt(r)&&_i<Wf;)await Yt(150,r);if(!Rt(r)||(Zs=0,Be.truck.setLights(!1),Ct(Ys([-6,6,14],[-18,1.5,4],[-4,8,18],[-14,1,14]),3),await zt(200,r),!Rt(r)))return;Pt(`${Wa(0)} sharp`,"Right on time. Sarah sees you pull up.","g_ontime"),t.root.visible=!0,t.root.position.set(-16.5,0,5.4),t.set("idle"),t.setMood("smile");let c=ju();e.root.visible=!0,e.root.position.copy(c.p),e.yaw=e.yawTarget=c.yaw;let h=Ce.front?ce(-21.5,0,12.8):a.clone().add(ce(1.6,0,1.2));if(e.walkTo([c.p.clone().addScaledVector(ce(Math.sin(c.yaw),0,Math.cos(c.yaw)),1.4),h],1.1).then(()=>{Rt(r)&&(e.face(o.x,o.z),e.set("wave"),e.setMood("happy"))}),!await Yt(1e3,r))return;let u=Ce.front?[o]:[...Xa,o];s==="hose"&&iv([dv(),...Ce.front?[]:Xa.map(y=>y.clone().setY(.1)),o.clone().setY(.15),l.clone().setY(Math.min(l.y,.4))]);let d=Ce.ladder?ce(Ce.ladder.x,0,Ce.ladder.z+1.25):o,f=(Ce.front?d:Xa[0]).clone().sub(t.root.position).setY(0),v=t.root.position.clone().addScaledVector(f.normalize(),Math.min(1.6,f.length()||1.6));if(Ct(()=>{let y=t.root.position;return[y.clone().add(ce(6,4.5,6)),y.clone().add(ce(0,1,0))]},.6),await Promise.race([t.walkTo([v],1.6),Yt(1e3,r)]),!Rt(r))return;let m=Ce.front?t.root.position.clone():Xa[Xa.length-1].clone(),x=d.clone().sub(m).setY(0),g=x.length();if(x.normalize(),t.root.position.copy(d.clone().addScaledVector(x,-Math.min(3,Math.max(1.2,g)))),t.face(d.x,d.z),Ct(()=>[t.root.position.clone().addScaledVector(x,-4.2).add(ce(1.6,2.4,0)),d.clone().add(ce(0,1,0))],.3,{cut:!0}),await Promise.race([t.walkTo([d],1.6),Yt(1600,r)]),!!Rt(r)){if(t.root.position.copy(d),Ce.ladder){n.ladder.visible=!0,t.face(Ce.ladder.x,Ce.ladder.z-3),t.set("climb");let y=performance.now();for(Ct(Ys([Ce.ladder.x+4.5,3.2,Ce.ladder.z+7],[Ce.ladder.x-.8,3,Ce.ladder.z],[Ce.ladder.x+3.6,4,Ce.ladder.z+6.2],[Ce.ladder.x-1,3.6,Ce.ladder.z]),6,{shake:1});Rt(r)&&performance.now()-y<2400;)t.root.position.y=Math.min(Ce.ladder.top,(performance.now()-y)/2400*Ce.ladder.top),t.root.position.z=Ce.ladder.z+1.25-t.root.position.y*.2,await Yt(40,r);t.set("work")}else t.face(l.x,l.z),t.set("kneel"),Ct(Ys(Ce.ins,[l.x,Math.max(.6,l.y),l.z],[Ce.ins[0]*.98+o.x*.02,Ce.ins[1]*.9,Ce.ins[2]*.98+o.z*.02],[l.x,Math.max(.6,l.y),l.z]),6,{shake:1});if(Rt(r)&&(Qi=1,Pt(Wa(6),bt().work_line,"w_"+bi),!!await zt(4300,r))){if(Ce.ladder){t.set("climb");let y=performance.now();for(;Rt(r)&&performance.now()-y<1600;)t.root.position.y=Math.max(0,Ce.ladder.top*(1-(performance.now()-y)/1600)),await Yt(40,r);t.root.position.y=0}return t.set("idle"),t.face(h.x,h.z),t.setMood("happy"),ir(n.booked,1),Ht.chime(),Ct(ov(t,e),4,{cut:!0,shake:1,fov:38}),Pt(Wa(41),`Job done. And Sarah now has ${kf(bt().trade)} company she'll call again, and tell her neighbors about.`,"g_done"),await zt(4200,r)}}}async function Mv(r){if(mt.setTOD("day",1.2),Ct(Ys([58,3,0],[66,1.6,-12],[61,2.4,-4.5],[66,1.7,-12]),6,{shake:1}),Pt("Friday \xB7 4:00 PM","Every Friday, a plain-English report lands in your inbox. New customers, booked jobs, and what they're worth. These are example numbers.","g_report"),!await Yt(700,r))return;let e=[[3,1],[5,2],[6,3],[7,3]];return $a(`<h3>${ut(Pn())} \xB7 Pilot report</h3><div class="sub">Weeks 1 to 4 \xB7 <b style="color:#ffd29a">Example numbers</b> to show the format</div>
   <div class="kp"><div><b data-n="21">0</b><span>new people reached out</span></div><div><b data-n="9">0</b><span>jobs booked</span></div><div><b data-n="${kr(bt().avg*yn().mult*9*.6)}" data-m="1">0</b><span>revenue booked</span></div><div><b data-n="9">0</b><span>new customers, not referrals</span></div></div>
   <div class="legend"><span><i style="background:#45b386"></i>New requests</span><span><i style="background:#f39a3d"></i>Booked</span></div>
   <div class="bars">${e.map((t,n)=>`<div class="col"><div class="stack" data-h="${t[0]/7*100}"><div class="bk" style="flex:${t[1]}"></div><div class="l" style="flex:${t[0]-t[1]}"></div></div><small>Wk ${n+1} \xB7 ${t[0]} / ${t[1]}</small></div>`).join("")}</div>
   <div class="ex">Your real numbers depend on your area and your prices. You'll see them every Friday, good or bad.</div>`),setTimeout(()=>{ar(".stack").forEach(t=>t.style.height=t.dataset.h+"%"),bv(),Ht.chime()},300),await zt(7500,r)}function bv(){ar("[data-n]").forEach(r=>{let e=+r.dataset.n,t=r.dataset.m,n=r.dataset.s||"",i=performance.now(),s=()=>{let a=Math.min(1,(performance.now()-i)/1400),o=Math.round(e*Zl(a));r.textContent=t?Bl(o):o+n,a<1&&requestAnimationFrame(s)};s()})}async function Ev(r){mt.setTOD("dusk",3);let e=Ei;Be.noTraffic=!1,Ct(s=>{let a=-.4+s*1.2;return[ce(-10+Math.cos(a)*125,70-s*12,Math.sin(a)*125),ce(-10,0,0)]},24,{linear:!0}),Pt(`Day 30 \xB7 ${Za(Y0(30))}`,"Thirty days later. Every light is a booked job from someone who found you on Facebook. People who had never heard your name.","g_day30");for(let s=0;s<e.pins.length;s++){if(!await Yt(s?650:1500,r))return;e.pins[s].userData.on=1,ir(e.pins[s].userData.lab,1),yi(660+s*60,.3,"sine",.06)}if(!await zt(1800,r)||(Pt("Your call",`${Pn()}, this could be your next 30 days. Extra jobs on top of your referrals, and more money coming in. And I only work with one company per area, so the first to say yes gets it.`,"g_final"),!await Yt(1800,r)))return;let t=yn().mult,n=kr(bt().avg*t);$a(`<div class="fin"><div class="kicker">Day 30 \xB7 you decide</div><h2>Keep going, or walk away.</h2><div class="sub">No setup fee. No long contract. Play with the numbers:</div></div>
   <div class="roi"><div><label>Extra jobs a month <b id="rb"></b></label><input type="range" id="rB" min="1" max="15" step="1" value="4"><label>Average job value <b id="rj"></b></label><input type="range" id="rJ" min="${kr(n*.3)}" max="${kr(n*3)}" step="${kr(n*.05)}" value="${n}"></div>
   <div class="out"><div><b id="oV">0</b><span>extra jobs a year</span></div><div><b id="oJ">0</b><span>extra a month</span></div><div><b id="oR">0</b><span>extra a year</span></div></div></div>
   <div class="ex">Example math only, on top of your referrals. Not a promise. Real results depend on your area and your prices.</div>
   <div class="arealock"><b>One ${ut(bt().trade)} company per area.</b> Once ${ut(kf(bt().trade))} company in ${ut(tr?ei():"your area")} says yes, that area is taken. Claim ${ut(tr?ei():"your area")} before someone else does.</div>
   <div class="ctas"><a class="pill-btn big" href="${Of}" target="_blank" rel="noopener">${tr?"Claim "+ut(ei())+": book":"Book"} ${Hu.mins?"a call":"a 15-min call"}</a><button class="pill-btn ghost big" id="replay">\u21BA Watch again</button><button class="pill-btn ghost big" id="copy">Copy this demo link</button></div>`);let i=()=>{let s=+de("#rB").value,a=+de("#rJ").value;de("#rb").textContent=s,de("#rj").textContent=Bl(a),de("#oV").textContent=s*12,de("#oJ").textContent=Bl(kr(s*a)),de("#oR").textContent=Bl(kr(s*a*12))};return de("#rB").oninput=i,de("#rJ").oninput=i,i(),zt(300,r).then(s=>{s&&de("#caption").classList.add("quiet")}),de("#replay").onclick=()=>Si(0),de("#copy").onclick=async()=>{try{await navigator.clipboard.writeText(zl()),de("#copy").textContent="Link copied \u2713"}catch{Vf(zl())}},!1}function Du(r,e,t,n){return new Promise(i=>{let s=!1,a=n?ar(r):[de(r)],o=h=>{s||(s=!0,a.forEach(u=>u.removeEventListener("click",l)),i(h))},l=h=>o(h.currentTarget);a.forEach(h=>h.addEventListener("click",l)),er&&setTimeout(()=>o(null),Math.max(t,Qa-performance.now()+250));let c=setInterval(()=>{Rt(e)?s&&clearInterval(c):(clearInterval(c),o(null))},300)})}function Sv(){let r=Pn().split(" ").map(t=>t[0]).join("").slice(0,2).toUpperCase(),e=bt();de("#pScreen").innerHTML=`
  <div class="fb-top"><b>facebook</b><span><i></i><i></i></span></div>
  <div class="feed"><div class="feed-in" id="feedIn">
    <div class="post"><div class="ph"><div class="av" style="background:#8e6bbf">${ut(ei()[0]||"T")}</div><div><b>${ut(ei())} Community Board</b><small>2h \xB7 Group</small></div></div><div class="pt">Fall festival this Saturday at the park! Bring a chair \u{1F342}</div><div class="pimg" style="background:linear-gradient(135deg,#f6b26b,#e06666)"></div><div class="pact"><span>Like</span><span>Comment</span><span>Share</span></div></div>
    <div class="post"><div class="ph"><div class="av" style="background:#3d85c6">JM</div><div><b>Jen Miller</b><small>5h</small></div></div><div class="pt">First pumpkin pie of the season, if anyone needs me I'll be here.</div><div class="pimg" style="background:linear-gradient(135deg,#ffd966,#e69138)"></div></div>
    <div class="post" id="adPost"><div class="ph"><div class="av" style="background:#2f8f6a">${ut(r)}</div><div><b>${ut(Pn())}</b><small>Sponsored</small></div></div>
      <div class="pt">${ut(e.adHead)} ${ut(ei())} homeowners, we can help this week. Local, licensed, on time.</div>
      <div class="pimg" style="background-image:url(${zf||""});background-color:#9fc7e8"></div>
      <div class="adbar"><div><small>${ut(ei())} \xB7 Local ${ut(e.trade)}</small><b>${ut(e.adCta)}</b></div><button class="adbtn" id="adBtn">${ut(e.btn)}</button></div></div>
    <div class="post"><div class="pt" style="padding-top:12px">\u2026</div></div>
  </div></div>
  <div class="sheet" id="sheet"><h4>${ut(Pn())}</h4><p>${ut(e.adCta)}. We'll text you in under a minute.</p>
    ${e.opts.map(t=>`<button class="opt">${ut(t)}</button>`).join("")}
    <div class="fld"><span>Name</span><b>Sarah M.</b></div><div class="fld"><span>Phone</span><b>${ut(yn().phone)}</b></div>
    <button class="send" id="send">Send request</button></div>
  <div class="done" id="done"><div class="ck">\u2713</div><h4>Request sent</h4><p>${ut(Pn())} will text you in under a minute.</p></div>`,de("#pTip").textContent="Tap the ad, like Sarah would.",de("#pTip").style.visibility="hidden",de("#phoneUI").classList.remove("leave"),de("#phoneUI").classList.add("on"),document.body.classList.add("phone-open")}function jf(r){let e=de("#phoneUI");if(document.body.classList.remove("phone-open"),!!e.classList.contains("on")){if(r){e.classList.remove("on","leave");return}e.classList.add("leave"),setTimeout(()=>e.classList.remove("on","leave"),650)}}var Hl=[];function Tv(r,e){let t=new De;mt.scene.add(t);let n=new fn(new on({map:Ji(),color:16760938,transparent:!0,depthWrite:!1,blending:kt}));n.scale.set(2.2,2.2,1),t.add(n);let i=[];for(let l=0;l<24;l++){let c=new fn(new on({map:Ji(),color:16754250,transparent:!0,depthWrite:!1,blending:kt,opacity:1-l/24}));c.scale.setScalar(1.6*(1-l/26)),t.add(c),i.push(c)}let s=new M;r.phone.getWorldPosition(s),n.position.copy(s);let a=new Ns(s,ce(25,42,10),e),o={g:t,core:n,trail:i,curve:a,hist:[],t:0};return Hl.push(o),o}function wv(r){for(let e=Hl.length-1;e>=0;e--){let t=Hl[e];t.t+=r/3.2;let n=t.curve.getPoint(Zl(Math.min(1,t.t)));t.core.position.copy(n),t.hist.unshift(n.clone()),t.hist.length=Math.min(t.hist.length,48),t.trail.forEach((i,s)=>{let a=t.hist[s*2];a&&i.position.copy(a)}),t.t>1.15&&(mt.scene.remove(t.g),Hl.splice(e,1))}}var Av=new Bs,Cn={t:0,n:0,level:0};function Xf(){requestAnimationFrame(Xf);let r=Av.getDelta(),e=Math.min(r,sr.has("test")?.6:.1);if(Ze.T+=e,ti==="landing"||ti==="loading"||ti==="warp"){zr.update(e),mt.renderer.render(zr.scene,zr.cam);return}if(Be){if(Cn.level<2&&!sr.has("test")&&(Cn.t+=r,Cn.n++,Cn.t>4&&(Cn.n/Cn.t<38&&(Cn.level++,mt.degrade(Cn.level),Jl()),Cn.t=0,Cn.n=0)),sv(e),Be.update(e,Ze.T),wv(e),tv(e),mt.update(e),qa<Fu&&(qa=Math.min(Fu,qa+lv*e),de("#tClock").textContent="0:"+String(Math.floor(qa)).padStart(2,"0")),Zs){let t=ql.getLength(),n=_i;Yl(Math.min(Wf,_i+e*12/t*(_i<.05?.5:_i>.92?.55:1))),Be.truck.userData.dist=(Be.truck.userData.dist||0)+(_i-n)*t}if(Be.truck.tick(Ze.T,!!Zs,Be.truck.userData.dist||0),Zs||Be.truck.setLights(mt.lamps()>.5),Ei){let t=Ei;t.hose&&t.hoseT>0&&t.hoseT<1&&(t.hoseT=Math.min(1,t.hoseT+e/4.5),t.hose.geometry.setDrawRange(0,Math.floor(t.hoseLen*t.hoseT/3)*3)),xi!==Qi&&(xi=Qi>xi?Math.min(Qi,xi+e/4.5):Qi,nr.fix(Zl(xi))),nr.update&&nr.update(e,Ze.T,xi),t.pins.forEach((n,i)=>{let s=n.userData;s.cur+=(s.on-s.cur)*(1-Math.exp(-e*3)),s.beam.material.opacity=s.cur*(.22+Math.sin(Ze.T*3+i)*.05),s.orb.material.opacity=s.cur*.9,s.beam.scale.y=Math.max(.01,s.cur),s.beam.position.y=20*s.cur})}mt.render()}}window.__demo={Raycaster:gl,goScene:r=>Si(r),get W(){return Be},setAuto:r=>{er=r},get T(){return Ze.T},shot:(r,e,t)=>{jl++,Ct(()=>[ce(...r),ce(...e)],.1,{cut:!0,fov:t})},tod:r=>mt.setTOD(r)};Xf();
/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
