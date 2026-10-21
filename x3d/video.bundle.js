var Cl="160";var wd=1,uo=2,Un=3,bn=0,Et=1,Oi=2;var Ad=0;var Hn=2;var Mi=100;var Pl=204,Ll=205;var Rd=0,Pp=1,Lp=2,Jn=0,Rc=1,Cc=2,Pc=3,Br=4,Ip=5,Lc=6,Gh="attached",Up="detached",Cd=300,yr=301,Mr=302,Il=303,Ul=304,po=306,mn=1e3,dn=1001,ls=1002,At=1003,Aa=1004;var ns=1005;var Ft=1006,Ic=1007;var wi=1008;var Si=1009;var Uc=1012,Pd=1013,Yn=1014,Dn=1015,gn=1016,Ld=1017,Id=1018,bi=1020;var pn=1023;var Ei=1026,Sr=1027;var Ud=1029;var Nd=1031,Dd=1033,Wo=33776,Xo=33777,jo=33778,qo=33779,kh=35840,Vh=35841,Wh=35842,Xh=35843,Od=36196,jh=37492,qh=37496,Yh=37808,Zh=37809,Kh=37810,Jh=37811,Qh=37812,$h=37813,eu=37814,tu=37815,nu=37816,iu=37817,ru=37818,su=37819,au=37820,ou=37821,Yo=36492,lu=36494,cu=36495;var hu=36284,uu=36285,du=36286;var br=2300,Ai=2301,Zo=2302,fr=2400,mr=2401,Ra=2402,Np=2500,Dp=2501,Bd=0,fo=1,ws=2,Fd=3e3,Ti=3001;var Mn="",qe="srgb",xt="srgb-linear",Nc="display-p3",mo="display-p3-linear",Ca="linear",Qe="srgb",Pa="rec709",La="p3";var qi=7680;var Nl=35044;var pu="300 es",Dl=1035,Er=2e3,Ia=2001,On=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let n=this._listeners[e];if(n!==void 0){let i=n.indexOf(t);i!==-1&&n.splice(i,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let t=this._listeners[e.type];if(t!==void 0){e.target=this;let n=t.slice(0);for(let i=0,r=n.length;i<r;i++)n[i].call(this,e);e.target=null}}},It=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],fu=1234567,vr=Math.PI/180,Tr=180/Math.PI;function Qt(){let s=4294967295*Math.random()|0,e=4294967295*Math.random()|0,t=4294967295*Math.random()|0,n=4294967295*Math.random()|0;return(It[255&s]+It[s>>8&255]+It[s>>16&255]+It[s>>24&255]+"-"+It[255&e]+It[e>>8&255]+"-"+It[e>>16&15|64]+It[e>>24&255]+"-"+It[63&t|128]+It[t>>8&255]+"-"+It[t>>16&255]+It[t>>24&255]+It[255&n]+It[n>>8&255]+It[n>>16&255]+It[n>>24&255]).toLowerCase()}function _t(s,e,t){return Math.max(e,Math.min(t,s))}function Ol(s,e){return(s%e+e)%e}function is(s,e,t){return(1-t)*s+t*e}function Bl(s){return(s&s-1)==0&&s!==0}function Ua(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Sn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Ze(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(4294967295*s);case Uint16Array:return Math.round(65535*s);case Uint8Array:return Math.round(255*s);case Int32Array:return Math.round(2147483647*s);case Int16Array:return Math.round(32767*s);case Int8Array:return Math.round(127*s);default:throw new Error("Invalid component type.")}}var Hd={DEG2RAD:vr,RAD2DEG:Tr,generateUUID:Qt,clamp:_t,euclideanModulo:Ol,mapLinear:function(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)},inverseLerp:function(s,e,t){return s!==e?(t-s)/(e-s):0},lerp:is,damp:function(s,e,t,n){return is(s,e,1-Math.exp(-t*n))},pingpong:function(s,e=1){return e-Math.abs(Ol(s,2*e)-e)},smoothstep:function(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e))*s*(3-2*s)},smootherstep:function(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e))*s*s*(s*(6*s-15)+10)},randInt:function(s,e){return s+Math.floor(Math.random()*(e-s+1))},randFloat:function(s,e){return s+Math.random()*(e-s)},randFloatSpread:function(s){return s*(.5-Math.random())},seededRandom:function(s){s!==void 0&&(fu=s);let e=fu+=1831565813;return e=Math.imul(e^e>>>15,1|e),e^=e+Math.imul(e^e>>>7,61|e),((e^e>>>14)>>>0)/4294967296},degToRad:function(s){return s*vr},radToDeg:function(s){return s*Tr},isPowerOfTwo:Bl,ceilPowerOfTwo:function(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))},floorPowerOfTwo:Ua,setQuaternionFromProperEuler:function(s,e,t,n,i){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),d=r((e-n)/2),u=a((e-n)/2),p=r((n-e)/2),f=a((n-e)/2);switch(i){case"XYX":s.set(o*h,l*d,l*u,o*c);break;case"YZY":s.set(l*u,o*h,l*d,o*c);break;case"ZXZ":s.set(l*d,l*u,o*h,o*c);break;case"XZX":s.set(o*h,l*f,l*p,o*c);break;case"YXY":s.set(l*p,o*h,l*f,o*c);break;case"ZYZ":s.set(l*f,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}},normalize:Ze,denormalize:Sn},ee=class s{constructor(e=0,t=0){s.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(_t(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ie=class s{constructor(e,t,n,i,r,a,o,l,c){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c)}set(e,t,n,i,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],p=n[5],f=n[8],g=i[0],m=i[3],x=i[6],v=i[1],_=i[4],M=i[7],T=i[2],S=i[5],y=i[8];return r[0]=a*g+o*v+l*T,r[3]=a*m+o*_+l*S,r[6]=a*x+o*M+l*y,r[1]=c*g+h*v+d*T,r[4]=c*m+h*_+d*S,r[7]=c*x+h*M+d*y,r[2]=u*g+p*v+f*T,r[5]=u*m+p*_+f*S,r[8]=u*x+p*M+f*y,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*a-o*c,u=o*l-h*r,p=c*r-a*l,f=t*d+n*u+i*p;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/f;return e[0]=d*g,e[1]=(i*c-h*n)*g,e[2]=(o*n-i*a)*g,e[3]=u*g,e[4]=(h*t-i*l)*g,e[5]=(i*r-o*t)*g,e[6]=p*g,e[7]=(n*l-c*t)*g,e[8]=(a*t-n*r)*g,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ko.makeScale(e,t)),this}rotate(e){return this.premultiply(Ko.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ko.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Ko=new Ie;function zd(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function cs(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Op(){let s=cs("canvas");return s.style.display="block",s}var mu={};function rs(s){s in mu||(mu[s]=!0,console.warn(s))}var gu=new Ie().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),vu=new Ie().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ws={[xt]:{transfer:Ca,primaries:Pa,toReference:s=>s,fromReference:s=>s},[qe]:{transfer:Qe,primaries:Pa,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[mo]:{transfer:Ca,primaries:La,toReference:s=>s.applyMatrix3(vu),fromReference:s=>s.applyMatrix3(gu)},[Nc]:{transfer:Qe,primaries:La,toReference:s=>s.convertSRGBToLinear().applyMatrix3(vu),fromReference:s=>s.applyMatrix3(gu).convertLinearToSRGB()}},Bp=new Set([xt,mo]),We={enabled:!0,_workingColorSpace:xt,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Bp.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;let n=Ws[e].toReference;return(0,Ws[t].fromReference)(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return Ws[s].primaries},getTransfer:function(s){return s===Mn?Ca:Ws[s].transfer}};function _r(s){return s<.04045?.0773993808*s:Math.pow(.9478672986*s+.0521327014,2.4)}function Jo(s){return s<.0031308?12.92*s:1.055*Math.pow(s,.41666)-.055}var Yi,Na=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Yi===void 0&&(Yi=cs("canvas")),Yi.width=e.width,Yi.height=e.height;let n=Yi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Yi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=cs("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=255*_r(r[a]/255);return n.putImageData(i,0,0),t}if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(255*_r(t[n]/255)):t[n]=_r(t[n]);return{data:t,width:e.width,height:e.height}}return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Fp=0,Da=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Fp++}),this.uuid=Qt(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Qo(i[a].image)):r.push(Qo(i[a]))}else r=Qo(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function Qo(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Na.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Hp=0,Rt=class s extends On{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=1001,i=1001,r=1006,a=1008,o=1023,l=1009,c=s.DEFAULT_ANISOTROPY,h=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Hp++}),this.uuid=Qt(),this.name="",this.source=new Da(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ee(0,0),this.repeat=new ee(1,1),this.center=new ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ie,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(rs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Ti?qe:Mn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Cd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case mn:e.x=e.x-Math.floor(e.x);break;case dn:e.x=e.x<0?0:1;break;case ls:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case mn:e.y=e.y-Math.floor(e.y);break;case dn:e.y=e.y<0?0:1;break;case ls:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return rs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===qe?Ti:Fd}set encoding(e){rs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Ti?qe:Mn}};Rt.DEFAULT_IMAGE=null,Rt.DEFAULT_MAPPING=Cd,Rt.DEFAULT_ANISOTROPY=1;var $e=class s{constructor(e=0,t=0,n=0,i=1){s.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],p=l[5],f=l[9],g=l[2],m=l[6],x=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-g)<.01&&Math.abs(f-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+g)<.1&&Math.abs(f+m)<.1&&Math.abs(c+p+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let _=(c+1)/2,M=(p+1)/2,T=(x+1)/2,S=(h+u)/4,y=(d+g)/4,U=(f+m)/4;return _>M&&_>T?_<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(_),i=S/n,r=y/n):M>T?M<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(M),n=S/i,r=U/i):T<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(T),n=y/r,i=U/r),this.set(n,i,r,t),this}let v=Math.sqrt((m-f)*(m-f)+(d-g)*(d-g)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(m-f)/v,this.y=(d-g)/v,this.z=(u-h)/v,this.w=Math.acos((c+p+x-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Fl=class extends On{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new $e(0,0,e,t),this.scissorTest=!1,this.viewport=new $e(0,0,e,t);let i={width:e,height:t,depth:1};n.encoding!==void 0&&(rs("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Ti?qe:Mn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ft,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Rt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){this.width===e&&this.height===t&&this.depth===n||(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Da(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ot=class extends Fl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Oa=class extends Rt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=At,this.minFilter=At,this.wrapR=dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Hl=class extends Rt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=At,this.minFilter=At,this.wrapR=dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var rt=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3],u=r[a+0],p=r[a+1],f=r[a+2],g=r[a+3];if(o===0)return e[t+0]=l,e[t+1]=c,e[t+2]=h,void(e[t+3]=d);if(o===1)return e[t+0]=u,e[t+1]=p,e[t+2]=f,void(e[t+3]=g);if(d!==g||l!==u||c!==p||h!==f){let m=1-o,x=l*u+c*p+h*f+d*g,v=x>=0?1:-1,_=1-x*x;if(_>Number.EPSILON){let T=Math.sqrt(_),S=Math.atan2(T,x*v);m=Math.sin(m*S)/T,o=Math.sin(o*S)/T}let M=o*v;if(l=l*m+u*M,c=c*m+p*M,h=h*m+f*M,d=d*m+g*M,m===1-o){let T=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=T,c*=T,h*=T,d*=T}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,r,a){let o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=r[a],u=r[a+1],p=r[a+2],f=r[a+3];return e[t]=o*f+h*d+l*p-c*u,e[t+1]=l*f+h*u+c*d-o*p,e[t+2]=c*f+h*p+o*u-l*d,e[t+3]=h*f-o*d-l*u-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),d=o(r/2),u=l(n/2),p=l(i/2),f=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*p*f,this._y=c*p*d-u*h*f,this._z=c*h*f+u*p*d,this._w=c*h*d-u*p*f;break;case"YXZ":this._x=u*h*d+c*p*f,this._y=c*p*d-u*h*f,this._z=c*h*f-u*p*d,this._w=c*h*d+u*p*f;break;case"ZXY":this._x=u*h*d-c*p*f,this._y=c*p*d+u*h*f,this._z=c*h*f+u*p*d,this._w=c*h*d-u*p*f;break;case"ZYX":this._x=u*h*d-c*p*f,this._y=c*p*d+u*h*f,this._z=c*h*f-u*p*d,this._w=c*h*d+u*p*f;break;case"YZX":this._x=u*h*d+c*p*f,this._y=c*p*d+u*h*f,this._z=c*h*f-u*p*d,this._w=c*h*d-u*p*f;break;case"XZY":this._x=u*h*d-c*p*f,this._y=c*p*d-u*h*f,this._z=c*h*f+u*p*d,this._w=c*h*d+u*p*f;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=n+o+d;if(u>0){let p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-i)*p}else if(n>o&&n>d){let p=2*Math.sqrt(1+n-o-d);this._w=(h-l)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(r+c)/p}else if(o>d){let p=2*Math.sqrt(1+o-n-d);this._w=(r-c)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+d-n-o);this._w=(a-i)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(_t(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-t)*h)/c,u=Math.sin(t*h)/c;return this._w=a*d+this._w*u,this._x=n*d+this._x*u,this._y=i*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},E=class s{constructor(e=0,t=0,n=0){s.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(_u.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(_u.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),h=2*(o*t-r*i),d=2*(r*n-a*t);return this.x=t+l*c+a*d-o*h,this.y=n+l*h+o*c-r*d,this.z=i+l*d+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return $o.copy(this).projectOnVector(e),this.sub($o)}reflect(e){return this.sub($o.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(_t(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,4*t)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,3*t)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=2*(Math.random()-.5),t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},$o=new E,_u=new rt,Ct=class{constructor(e=new E(1/0,1/0,1/0),t=new E(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(cn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(cn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=cn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,cn):cn.fromBufferAttribute(r,a),cn.applyMatrix4(e.matrixWorld),this.expandByPoint(cn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Xs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Xs.copy(n.boundingBox)),Xs.applyMatrix4(e.matrixWorld),this.union(Xs)}let i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,cn),cn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Xr),js.subVectors(this.max,Xr),Zi.subVectors(e.a,Xr),Ki.subVectors(e.b,Xr),Ji.subVectors(e.c,Xr),Gn.subVectors(Ki,Zi),kn.subVectors(Ji,Ki),gi.subVectors(Zi,Ji);let t=[0,-Gn.z,Gn.y,0,-kn.z,kn.y,0,-gi.z,gi.y,Gn.z,0,-Gn.x,kn.z,0,-kn.x,gi.z,0,-gi.x,-Gn.y,Gn.x,0,-kn.y,kn.x,0,-gi.y,gi.x,0];return!!el(t,Zi,Ki,Ji,js)&&(t=[1,0,0,0,1,0,0,0,1],!!el(t,Zi,Ki,Ji,js)&&(qs.crossVectors(Gn,kn),t=[qs.x,qs.y,qs.z],el(t,Zi,Ki,Ji,js)))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,cn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=.5*this.getSize(cn).length()),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(An[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),An[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),An[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),An[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),An[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),An[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),An[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),An[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(An)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},An=[new E,new E,new E,new E,new E,new E,new E,new E],cn=new E,Xs=new Ct,Zi=new E,Ki=new E,Ji=new E,Gn=new E,kn=new E,gi=new E,Xr=new E,js=new E,qs=new E,vi=new E;function el(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){vi.fromArray(s,r);let o=i.x*Math.abs(vi.x)+i.y*Math.abs(vi.y)+i.z*Math.abs(vi.z),l=e.dot(vi),c=t.dot(vi),h=n.dot(vi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var zp=new Ct,jr=new E,tl=new E,Ht=class{constructor(e=new E,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):zp.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;jr.subVectors(e,this.center);let t=jr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=.5*(n-this.radius);this.center.addScaledVector(jr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(tl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(jr.copy(e.center).add(tl)),this.expandByPoint(jr.copy(e.center).sub(tl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Rn=new E,nl=new E,Ys=new E,Vn=new E,il=new E,Zs=new E,rl=new E,wr=class{constructor(e=new E,t=new E(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Rn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Rn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Rn.copy(this.origin).addScaledVector(this.direction,t),Rn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){nl.copy(e).add(t).multiplyScalar(.5),Ys.copy(t).sub(e).normalize(),Vn.copy(this.origin).sub(nl);let r=.5*e.distanceTo(t),a=-this.direction.dot(Ys),o=Vn.dot(this.direction),l=-Vn.dot(Ys),c=Vn.lengthSq(),h=Math.abs(1-a*a),d,u,p,f;if(h>0)if(d=a*l-o,u=a*o-l,f=r*h,d>=0)if(u>=-f)if(u<=f){let g=1/h;d*=g,u*=g,p=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*l)+c;else u<=-f?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+u*(u+2*l)+c):u<=f?(d=0,u=Math.min(Math.max(-r,-l),r),p=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(nl).addScaledVector(Ys,u),p}intersectSphere(e,t){Rn.subVectors(e.center,this.origin);let n=Rn.dot(this.direction),i=Rn.dot(Rn)-n*n,r=e.radius*e.radius;if(i>r)return null;let a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0?!0:e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,i=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,i=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||r>i?null:((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),d>=0?(o=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),n>l||o>i?null:((o>n||n!=n)&&(n=o),(l<i||i!=i)&&(i=l),i<0?null:this.at(n>=0?n:i,t)))}intersectsBox(e){return this.intersectBox(e,Rn)!==null}intersectTriangle(e,t,n,i,r){il.subVectors(t,e),Zs.subVectors(n,e),rl.crossVectors(il,Zs);let a,o=this.direction.dot(rl);if(o>0){if(i)return null;a=1}else{if(!(o<0))return null;a=-1,o=-o}Vn.subVectors(this.origin,e);let l=a*this.direction.dot(Zs.crossVectors(Vn,Zs));if(l<0)return null;let c=a*this.direction.dot(il.cross(Vn));if(c<0||l+c>o)return null;let h=-a*Vn.dot(rl);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},be=class s{constructor(e,t,n,i,r,a,o,l,c,h,d,u,p,f,g,m){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c,h,d,u,p,f,g,m)}set(e,t,n,i,r,a,o,l,c,h,d,u,p,f,g,m){let x=this.elements;return x[0]=e,x[4]=t,x[8]=n,x[12]=i,x[1]=r,x[5]=a,x[9]=o,x[13]=l,x[2]=c,x[6]=h,x[10]=d,x[14]=u,x[3]=p,x[7]=f,x[11]=g,x[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/Qi.setFromMatrixColumn(e,0).length(),r=1/Qi.setFromMatrixColumn(e,1).length(),a=1/Qi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let u=a*h,p=a*d,f=o*h,g=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=p+f*c,t[5]=u-g*c,t[9]=-o*l,t[2]=g-u*c,t[6]=f+p*c,t[10]=a*l}else if(e.order==="YXZ"){let u=l*h,p=l*d,f=c*h,g=c*d;t[0]=u+g*o,t[4]=f*o-p,t[8]=a*c,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=p*o-f,t[6]=g+u*o,t[10]=a*l}else if(e.order==="ZXY"){let u=l*h,p=l*d,f=c*h,g=c*d;t[0]=u-g*o,t[4]=-a*d,t[8]=f+p*o,t[1]=p+f*o,t[5]=a*h,t[9]=g-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let u=a*h,p=a*d,f=o*h,g=o*d;t[0]=l*h,t[4]=f*c-p,t[8]=u*c+g,t[1]=l*d,t[5]=g*c+u,t[9]=p*c-f,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let u=a*l,p=a*c,f=o*l,g=o*c;t[0]=l*h,t[4]=g-u*d,t[8]=f*d+p,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*d+f,t[10]=u-g*d}else if(e.order==="XZY"){let u=a*l,p=a*c,f=o*l,g=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+g,t[5]=a*h,t[9]=p*d-f,t[2]=f*d-p,t[6]=o*h,t[10]=g*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Gp,e,kp)}lookAt(e,t,n){let i=this.elements;return Xt.subVectors(e,t),Xt.lengthSq()===0&&(Xt.z=1),Xt.normalize(),Wn.crossVectors(n,Xt),Wn.lengthSq()===0&&(Math.abs(n.z)===1?Xt.x+=1e-4:Xt.z+=1e-4,Xt.normalize(),Wn.crossVectors(n,Xt)),Wn.normalize(),Ks.crossVectors(Xt,Wn),i[0]=Wn.x,i[4]=Ks.x,i[8]=Xt.x,i[1]=Wn.y,i[5]=Ks.y,i[9]=Xt.y,i[2]=Wn.z,i[6]=Ks.z,i[10]=Xt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],p=n[13],f=n[2],g=n[6],m=n[10],x=n[14],v=n[3],_=n[7],M=n[11],T=n[15],S=i[0],y=i[4],U=i[8],C=i[12],L=i[1],B=i[5],P=i[9],G=i[13],V=i[2],ae=i[6],fe=i[10],ne=i[14],q=i[3],te=i[7],H=i[11],K=i[15];return r[0]=a*S+o*L+l*V+c*q,r[4]=a*y+o*B+l*ae+c*te,r[8]=a*U+o*P+l*fe+c*H,r[12]=a*C+o*G+l*ne+c*K,r[1]=h*S+d*L+u*V+p*q,r[5]=h*y+d*B+u*ae+p*te,r[9]=h*U+d*P+u*fe+p*H,r[13]=h*C+d*G+u*ne+p*K,r[2]=f*S+g*L+m*V+x*q,r[6]=f*y+g*B+m*ae+x*te,r[10]=f*U+g*P+m*fe+x*H,r[14]=f*C+g*G+m*ne+x*K,r[3]=v*S+_*L+M*V+T*q,r[7]=v*y+_*B+M*ae+T*te,r[11]=v*U+_*P+M*fe+T*H,r[15]=v*C+_*G+M*ne+T*K,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],p=e[14];return e[3]*(+r*l*d-i*c*d-r*o*u+n*c*u+i*o*p-n*l*p)+e[7]*(+t*l*p-t*c*u+r*a*u-i*a*p+i*c*h-r*l*h)+e[11]*(+t*c*d-t*o*p-r*a*d+n*a*p+r*o*h-n*c*h)+e[15]*(-i*o*h-t*l*d+t*o*u+i*a*d-n*a*u+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],p=e[11],f=e[12],g=e[13],m=e[14],x=e[15],v=d*m*c-g*u*c+g*l*p-o*m*p-d*l*x+o*u*x,_=f*u*c-h*m*c-f*l*p+a*m*p+h*l*x-a*u*x,M=h*g*c-f*d*c+f*o*p-a*g*p-h*o*x+a*d*x,T=f*d*l-h*g*l-f*o*u+a*g*u+h*o*m-a*d*m,S=t*v+n*_+i*M+r*T;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let y=1/S;return e[0]=v*y,e[1]=(g*u*r-d*m*r-g*i*p+n*m*p+d*i*x-n*u*x)*y,e[2]=(o*m*r-g*l*r+g*i*c-n*m*c-o*i*x+n*l*x)*y,e[3]=(d*l*r-o*u*r-d*i*c+n*u*c+o*i*p-n*l*p)*y,e[4]=_*y,e[5]=(h*m*r-f*u*r+f*i*p-t*m*p-h*i*x+t*u*x)*y,e[6]=(f*l*r-a*m*r-f*i*c+t*m*c+a*i*x-t*l*x)*y,e[7]=(a*u*r-h*l*r+h*i*c-t*u*c-a*i*p+t*l*p)*y,e[8]=M*y,e[9]=(f*d*r-h*g*r-f*n*p+t*g*p+h*n*x-t*d*x)*y,e[10]=(a*g*r-f*o*r+f*n*c-t*g*c-a*n*x+t*o*x)*y,e[11]=(h*o*r-a*d*r-h*n*c+t*d*c+a*n*p-t*o*p)*y,e[12]=T*y,e[13]=(h*g*i-f*d*i+f*n*u-t*g*u-h*n*m+t*d*m)*y,e[14]=(f*o*i-a*g*i-f*n*l+t*g*l+a*n*m-t*o*m)*y,e[15]=(a*d*i-h*o*i+h*n*l-t*d*l-a*n*u+t*o*u)*y,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,d=o+o,u=r*c,p=r*h,f=r*d,g=a*h,m=a*d,x=o*d,v=l*c,_=l*h,M=l*d,T=n.x,S=n.y,y=n.z;return i[0]=(1-(g+x))*T,i[1]=(p+M)*T,i[2]=(f-_)*T,i[3]=0,i[4]=(p-M)*S,i[5]=(1-(u+x))*S,i[6]=(m+v)*S,i[7]=0,i[8]=(f+_)*y,i[9]=(m-v)*y,i[10]=(1-(u+g))*y,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,r=Qi.set(i[0],i[1],i[2]).length(),a=Qi.set(i[4],i[5],i[6]).length(),o=Qi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],hn.copy(this);let l=1/r,c=1/a,h=1/o;return hn.elements[0]*=l,hn.elements[1]*=l,hn.elements[2]*=l,hn.elements[4]*=c,hn.elements[5]*=c,hn.elements[6]*=c,hn.elements[8]*=h,hn.elements[9]*=h,hn.elements[10]*=h,t.setFromRotationMatrix(hn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a,o=2e3){let l=this.elements,c=2*r/(t-e),h=2*r/(n-i),d=(t+e)/(t-e),u=(n+i)/(n-i),p,f;if(o===Er)p=-(a+r)/(a-r),f=-2*a*r/(a-r);else{if(o!==Ia)throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);p=-a/(a-r),f=-a*r/(a-r)}return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=f,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=2e3){let l=this.elements,c=1/(t-e),h=1/(n-i),d=1/(a-r),u=(t+e)*c,p=(n+i)*h,f,g;if(o===Er)f=(a+r)*d,g=-2*d;else{if(o!==Ia)throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);f=r*d,g=-1*d}return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=g,l[14]=-f,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Qi=new E,hn=new be,Gp=new E(0,0,0),kp=new E(1,1,1),Wn=new E,Ks=new E,Xt=new E,xu=new be,yu=new rt,Ar=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],d=i[2],u=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(_t(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-_t(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(_t(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-_t(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(_t(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-_t(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return xu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(xu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return yu.setFromEuler(this),this.setFromQuaternion(yu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ar.DEFAULT_ORDER="XYZ";var Ba=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!=0}isEnabled(e){return(this.mask&(1<<e|0))!=0}},Vp=0,Mu=new E,$i=new rt,Cn=new be,Js=new E,qr=new E,Wp=new E,Xp=new rt,Su=new E(1,0,0),bu=new E(0,1,0),Eu=new E(0,0,1),jp={type:"added"},qp={type:"removed"},tt=class s extends On{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Vp++}),this.uuid=Qt(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new E,t=new Ar,n=new rt,i=new E(1,1,1);t._onChange(function(){n.setFromEuler(t,!1)}),n._onChange(function(){t.setFromQuaternion(n,void 0,!1)}),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new be},normalMatrix:{value:new Ie}}),this.matrix=new be,this.matrixWorld=new be,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ba,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return $i.setFromAxisAngle(e,t),this.quaternion.multiply($i),this}rotateOnWorldAxis(e,t){return $i.setFromAxisAngle(e,t),this.quaternion.premultiply($i),this}rotateX(e){return this.rotateOnAxis(Su,e)}rotateY(e){return this.rotateOnAxis(bu,e)}rotateZ(e){return this.rotateOnAxis(Eu,e)}translateOnAxis(e,t){return Mu.copy(e).applyQuaternion(this.quaternion),this.position.add(Mu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Su,e)}translateY(e){return this.translateOnAxis(bu,e)}translateZ(e){return this.translateOnAxis(Eu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Cn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Js.copy(e):Js.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),qr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Cn.lookAt(qr,Js,this.up):Cn.lookAt(Js,qr,this.up),this.quaternion.setFromRotationMatrix(Cn),i&&(Cn.extractRotation(i.matrixWorld),$i.setFromRotationMatrix(Cn),this.quaternion.premultiply($i.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(jp)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(qp)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Cn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Cn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Cn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qr,e,Wp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qr,Xp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++){let r=t[n];r.matrixWorldAutoUpdate!==!0&&e!==!0||r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let i=this.children;for(let r=0,a=i.length;r<a;r++){let o=i[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()})),this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),d=a(e.shapes),u=a(e.skeletons),p=a(e.animations),f=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),f.length>0&&(n.nodes=f)}return n.object=i,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};tt.DEFAULT_UP=new E(0,1,0),tt.DEFAULT_MATRIX_AUTO_UPDATE=!0,tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var un=new E,Pn=new E,sl=new E,Ln=new E,er=new E,tr=new E,Tu=new E,al=new E,ol=new E,ll=new E,Qs=!1,Zn=class s{constructor(e=new E,t=new E,n=new E){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),un.subVectors(e,t),i.cross(un);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){un.subVectors(i,t),Pn.subVectors(n,t),sl.subVectors(e,t);let a=un.dot(un),o=un.dot(Pn),l=un.dot(sl),c=Pn.dot(Pn),h=Pn.dot(sl),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let u=1/d,p=(c*l-o*h)*u,f=(a*h-o*l)*u;return r.set(1-p-f,f,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Ln)!==null&&Ln.x>=0&&Ln.y>=0&&Ln.x+Ln.y<=1}static getUV(e,t,n,i,r,a,o,l){return Qs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Qs=!0),this.getInterpolation(e,t,n,i,r,a,o,l)}static getInterpolation(e,t,n,i,r,a,o,l){return this.getBarycoord(e,t,n,i,Ln)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ln.x),l.addScaledVector(a,Ln.y),l.addScaledVector(o,Ln.z),l)}static isFrontFacing(e,t,n,i){return un.subVectors(n,t),Pn.subVectors(e,t),un.cross(Pn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return un.subVectors(this.c,this.b),Pn.subVectors(this.a,this.b),.5*un.cross(Pn).length()}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return Qs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Qs=!0),s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,a,o;er.subVectors(i,n),tr.subVectors(r,n),al.subVectors(e,n);let l=er.dot(al),c=tr.dot(al);if(l<=0&&c<=0)return t.copy(n);ol.subVectors(e,i);let h=er.dot(ol),d=tr.dot(ol);if(h>=0&&d<=h)return t.copy(i);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(er,a);ll.subVectors(e,r);let p=er.dot(ll),f=tr.dot(ll);if(f>=0&&p<=f)return t.copy(r);let g=p*c-l*f;if(g<=0&&c>=0&&f<=0)return o=c/(c-f),t.copy(n).addScaledVector(tr,o);let m=h*f-p*d;if(m<=0&&d-h>=0&&p-f>=0)return Tu.subVectors(r,i),o=(d-h)/(d-h+(p-f)),t.copy(i).addScaledVector(Tu,o);let x=1/(m+g+u);return a=g*x,o=u*x,t.copy(n).addScaledVector(er,a).addScaledVector(tr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Gd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xn={h:0,s:0,l:0},$s={h:0,s:0,l:0};function cl(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+6*(e-s)*t:t<.5?e:t<2/3?s+6*(e-s)*(2/3-t):s}var xe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=qe){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255,We.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=We.workingColorSpace){return this.r=e,this.g=t,this.b=n,We.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=We.workingColorSpace){if(e=Ol(e,1),t=_t(t,0,1),n=_t(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=cl(a,r,e+1/3),this.g=cl(a,r,e),this.b=cl(a,r,e-1/3)}return We.toWorkingColorSpace(this,i),this}setStyle(e,t=qe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=qe){let n=Gd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=_r(e.r),this.g=_r(e.g),this.b=_r(e.b),this}copyLinearToSRGB(e){return this.r=Jo(e.r),this.g=Jo(e.g),this.b=Jo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=qe){return We.fromWorkingColorSpace(Ut.copy(this),e),65536*Math.round(_t(255*Ut.r,0,255))+256*Math.round(_t(255*Ut.g,0,255))+Math.round(_t(255*Ut.b,0,255))}getHexString(e=qe){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=We.workingColorSpace){We.fromWorkingColorSpace(Ut.copy(this),t);let n=Ut.r,i=Ut.g,r=Ut.b,a=Math.max(n,i,r),o=Math.min(n,i,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(i-r)/d+(i<r?6:0);break;case i:l=(r-n)/d+2;break;case r:l=(n-i)/d+4}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=We.workingColorSpace){return We.fromWorkingColorSpace(Ut.copy(this),t),e.r=Ut.r,e.g=Ut.g,e.b=Ut.b,e}getStyle(e=qe){We.fromWorkingColorSpace(Ut.copy(this),e);let t=Ut.r,n=Ut.g,i=Ut.b;return e!==qe?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(255*t)},${Math.round(255*n)},${Math.round(255*i)})`}offsetHSL(e,t,n){return this.getHSL(Xn),this.setHSL(Xn.h+e,Xn.s+t,Xn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Xn),e.getHSL($s);let n=is(Xn.h,$s.h,t),i=is(Xn.s,$s.s,t),r=is(Xn.l,$s.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ut=new xe;xe.NAMES=Gd;var Yp=0,zt=class extends On{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Yp++}),this.uuid=Qt(),this.name="",this.type="Material",this.blending=1,this.side=bn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Pl,this.blendDst=Ll,this.blendEquation=Mi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xe(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qi,this.stencilZFail=qi,this.stencilZPass=qi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];i!==void 0?i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n:console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`)}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};function i(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==bn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Pl&&(n.blendSrc=this.blendSrc),this.blendDst!==Ll&&(n.blendDst=this.blendDst),this.blendEquation!==Mi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==qi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==qi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData),t){let r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},ht=class extends zt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Rd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Lg=Zp();function Zp(){let s=new ArrayBuffer(4),e=new Float32Array(s),t=new Uint32Array(s),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(n[l]=0,n[256|l]=32768,i[l]=24,i[256|l]=24):c<-14?(n[l]=1024>>-c-14,n[256|l]=1024>>-c-14|32768,i[l]=-c-1,i[256|l]=-c-1):c<=15?(n[l]=c+15<<10,n[256|l]=c+15<<10|32768,i[l]=13,i[256|l]=13):c<128?(n[l]=31744,n[256|l]=64512,i[l]=24,i[256|l]=24):(n[l]=31744,n[256|l]=64512,i[l]=13,i[256|l]=13)}let r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;!(8388608&c);)c<<=1,h-=8388608;c&=-8388609,h+=947912704,r[l]=c|h}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:r,exponentTable:a,offsetTable:o}}var dt=new E,ea=new ee,ft=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Nl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Dn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ea.fromBufferAttribute(this,t),ea.applyMatrix3(e),this.setXY(t,ea.x,ea.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)dt.fromBufferAttribute(this,t),dt.applyMatrix3(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)dt.fromBufferAttribute(this,t),dt.applyMatrix4(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)dt.fromBufferAttribute(this,t),dt.applyNormalMatrix(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)dt.fromBufferAttribute(this,t),dt.transformDirection(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Sn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ze(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Sn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Sn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Sn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Sn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ze(t,this.array),n=Ze(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Ze(t,this.array),n=Ze(n,this.array),i=Ze(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Ze(t,this.array),n=Ze(n,this.array),i=Ze(i,this.array),r=Ze(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Nl&&(e.usage=this.usage),e}};var Fa=class extends ft{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Ha=class extends ft{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Ee=class extends ft{constructor(e,t,n){super(new Float32Array(e),t,n)}};var Kp=0,Jt=new be,hl=new tt,nr=new E,jt=new Ct,Yr=new Ct,bt=new E,Ke=class s extends On{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Kp++}),this.uuid=Qt(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(zd(e)?Ha:Fa)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ie().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Jt.makeRotationFromQuaternion(e),this.applyMatrix4(Jt),this}rotateX(e){return Jt.makeRotationX(e),this.applyMatrix4(Jt),this}rotateY(e){return Jt.makeRotationY(e),this.applyMatrix4(Jt),this}rotateZ(e){return Jt.makeRotationZ(e),this.applyMatrix4(Jt),this}translate(e,t,n){return Jt.makeTranslation(e,t,n),this.applyMatrix4(Jt),this}scale(e,t,n){return Jt.makeScale(e,t,n),this.applyMatrix4(Jt),this}lookAt(e){return hl.lookAt(e),hl.updateMatrix(),this.applyMatrix4(hl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(nr).negate(),this.translate(nr.x,nr.y,nr.z),this}setFromPoints(e){let t=[];for(let n=0,i=e.length;n<i;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Ee(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ct);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),void this.boundingBox.set(new E(-1/0,-1/0,-1/0),new E(1/0,1/0,1/0));if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];jt.setFromBufferAttribute(r),this.morphTargetsRelative?(bt.addVectors(this.boundingBox.min,jt.min),this.boundingBox.expandByPoint(bt),bt.addVectors(this.boundingBox.max,jt.max),this.boundingBox.expandByPoint(bt)):(this.boundingBox.expandByPoint(jt.min),this.boundingBox.expandByPoint(jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ht);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),void this.boundingSphere.set(new E,1/0);if(e){let n=this.boundingSphere.center;if(jt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Yr.setFromBufferAttribute(o),this.morphTargetsRelative?(bt.addVectors(jt.min,Yr.min),jt.expandByPoint(bt),bt.addVectors(jt.max,Yr.max),jt.expandByPoint(bt)):(jt.expandByPoint(Yr.min),jt.expandByPoint(Yr.max))}jt.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)bt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(bt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)bt.fromBufferAttribute(o,c),l&&(nr.fromBufferAttribute(e,c),bt.add(nr)),i=Math.max(i,n.distanceToSquared(bt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0)return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");let n=e.array,i=t.position.array,r=t.normal.array,a=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ft(new Float32Array(4*o),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let L=0;L<o;L++)c[L]=new E,h[L]=new E;let d=new E,u=new E,p=new E,f=new ee,g=new ee,m=new ee,x=new E,v=new E;function _(L,B,P){d.fromArray(i,3*L),u.fromArray(i,3*B),p.fromArray(i,3*P),f.fromArray(a,2*L),g.fromArray(a,2*B),m.fromArray(a,2*P),u.sub(d),p.sub(d),g.sub(f),m.sub(f);let G=1/(g.x*m.y-m.x*g.y);isFinite(G)&&(x.copy(u).multiplyScalar(m.y).addScaledVector(p,-g.y).multiplyScalar(G),v.copy(p).multiplyScalar(g.x).addScaledVector(u,-m.x).multiplyScalar(G),c[L].add(x),c[B].add(x),c[P].add(x),h[L].add(v),h[B].add(v),h[P].add(v))}let M=this.groups;M.length===0&&(M=[{start:0,count:n.length}]);for(let L=0,B=M.length;L<B;++L){let P=M[L],G=P.start;for(let V=G,ae=G+P.count;V<ae;V+=3)_(n[V+0],n[V+1],n[V+2])}let T=new E,S=new E,y=new E,U=new E;function C(L){y.fromArray(r,3*L),U.copy(y);let B=c[L];T.copy(B),T.sub(y.multiplyScalar(y.dot(B))).normalize(),S.crossVectors(U,B);let P=S.dot(h[L])<0?-1:1;l[4*L]=T.x,l[4*L+1]=T.y,l[4*L+2]=T.z,l[4*L+3]=P}for(let L=0,B=M.length;L<B;++L){let P=M[L],G=P.start;for(let V=G,ae=G+P.count;V<ae;V+=3)C(n[V+0]),C(n[V+1]),C(n[V+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ft(new Float32Array(3*t.count),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);let i=new E,r=new E,a=new E,o=new E,l=new E,c=new E,h=new E,d=new E;if(e)for(let u=0,p=e.count;u<p;u+=3){let f=e.getX(u+0),g=e.getX(u+1),m=e.getX(u+2);i.fromBufferAttribute(t,f),r.fromBufferAttribute(t,g),a.fromBufferAttribute(t,m),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),o.fromBufferAttribute(n,f),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,p=t.count;u<p;u+=3)i.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)bt.fromBufferAttribute(e,t),bt.normalize(),e.setXYZ(t,bt.x,bt.y,bt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h),p=0,f=0;for(let g=0,m=l.length;g<m;g++){p=o.isInterleavedBufferAttribute?l[g]*o.data.stride+o.offset:l[g]*h;for(let x=0;x<h;x++)u[f++]=c[p++]}return new ft(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let o in i){let l=e(i[o],n);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){let u=e(c[h],n);l.push(u)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let p=c[d];h.push(p.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let i=e.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,p=d.length;u<p;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},wu=new be,_i=new wr,ta=new Ht,Au=new E,ir=new E,rr=new E,sr=new E,ul=new E,na=new E,ia=new ee,ra=new ee,sa=new ee,Ru=new E,Cu=new E,Pu=new E,aa=new E,oa=new E,Ue=class extends tt{constructor(e=new Ke,t=new ht){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,r=n.length;i<r;i++){let a=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=i}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(r&&o){na.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],d=r[l];h!==0&&(ul.fromBufferAttribute(d,e),a?na.addScaledVector(ul,h):na.addScaledVector(ul.sub(t),h))}t.add(na)}return t}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;if(i!==void 0){if(n.boundingSphere===null&&n.computeBoundingSphere(),ta.copy(n.boundingSphere),ta.applyMatrix4(r),_i.copy(e.ray).recast(e.near),ta.containsPoint(_i.origin)===!1&&(_i.intersectSphere(ta,Au)===null||_i.origin.distanceToSquared(Au)>(e.far-e.near)**2))return;wu.copy(r).invert(),_i.copy(e.ray).applyMatrix4(wu),n.boundingBox!==null&&_i.intersectsBox(n.boundingBox)===!1||this._computeIntersections(e,t,_i)}}_computeIntersections(e,t,n){let i,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let f=0,g=u.length;f<g;f++){let m=u[f],x=a[m.materialIndex];for(let v=Math.max(m.start,p.start),_=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));v<_;v+=3)i=la(this,x,e,n,c,h,d,o.getX(v),o.getX(v+1),o.getX(v+2)),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}else for(let f=Math.max(0,p.start),g=Math.min(o.count,p.start+p.count);f<g;f+=3)i=la(this,a,e,n,c,h,d,o.getX(f),o.getX(f+1),o.getX(f+2)),i&&(i.faceIndex=Math.floor(f/3),t.push(i));else if(l!==void 0)if(Array.isArray(a))for(let f=0,g=u.length;f<g;f++){let m=u[f],x=a[m.materialIndex];for(let v=Math.max(m.start,p.start),_=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));v<_;v+=3)i=la(this,x,e,n,c,h,d,v,v+1,v+2),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}else for(let f=Math.max(0,p.start),g=Math.min(l.count,p.start+p.count);f<g;f+=3)i=la(this,a,e,n,c,h,d,f,f+1,f+2),i&&(i.faceIndex=Math.floor(f/3),t.push(i))}};function la(s,e,t,n,i,r,a,o,l,c){s.getVertexPosition(o,ir),s.getVertexPosition(l,rr),s.getVertexPosition(c,sr);let h=function(d,u,p,f,g,m,x,v){let _;if(_=u.side===Et?f.intersectTriangle(x,m,g,!0,v):f.intersectTriangle(g,m,x,u.side===bn,v),_===null)return null;oa.copy(v),oa.applyMatrix4(d.matrixWorld);let M=p.ray.origin.distanceTo(oa);return M<p.near||M>p.far?null:{distance:M,point:oa.clone(),object:d}}(s,e,t,n,ir,rr,sr,aa);if(h){i&&(ia.fromBufferAttribute(i,o),ra.fromBufferAttribute(i,l),sa.fromBufferAttribute(i,c),h.uv=Zn.getInterpolation(aa,ir,rr,sr,ia,ra,sa,new ee)),r&&(ia.fromBufferAttribute(r,o),ra.fromBufferAttribute(r,l),sa.fromBufferAttribute(r,c),h.uv1=Zn.getInterpolation(aa,ir,rr,sr,ia,ra,sa,new ee),h.uv2=h.uv1),a&&(Ru.fromBufferAttribute(a,o),Cu.fromBufferAttribute(a,l),Pu.fromBufferAttribute(a,c),h.normal=Zn.getInterpolation(aa,ir,rr,sr,Ru,Cu,Pu,new E),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new E,materialIndex:0};Zn.getNormal(ir,rr,sr,d.normal),h.face=d}return h}var Me=class s extends Ke{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};let o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],d=[],u=0,p=0;function f(g,m,x,v,_,M,T,S,y,U,C){let L=M/y,B=T/U,P=M/2,G=T/2,V=S/2,ae=y+1,fe=U+1,ne=0,q=0,te=new E;for(let H=0;H<fe;H++){let K=H*B-G;for(let he=0;he<ae;he++){let A=he*L-P;te[g]=A*v,te[m]=K*_,te[x]=V,c.push(te.x,te.y,te.z),te[g]=0,te[m]=0,te[x]=S>0?1:-1,h.push(te.x,te.y,te.z),d.push(he/y),d.push(1-H/U),ne+=1}}for(let H=0;H<U;H++)for(let K=0;K<y;K++){let he=u+K+ae*H,A=u+K+ae*(H+1),w=u+(K+1)+ae*(H+1),O=u+(K+1)+ae*H;l.push(he,A,O),l.push(A,w,O),q+=6}o.addGroup(p,q,C),p+=q,u+=ne}f("z","y","x",-1,-1,n,t,e,a,r,0),f("z","y","x",1,-1,n,t,-e,a,r,1),f("x","z","y",1,1,e,n,t,i,a,2),f("x","z","y",1,-1,e,n,-t,i,a,3),f("x","y","z",1,-1,e,t,n,i,r,4),f("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Ee(c,3)),this.setAttribute("normal",new Ee(h,3)),this.setAttribute("uv",new Ee(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Rr(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Dt(s){let e={};for(let t=0;t<s.length;t++){let n=Rr(s[t]);for(let i in n)e[i]=n[i]}return e}function kd(s){return s.getRenderTarget()===null?s.outputColorSpace:We.workingColorSpace}var ri={clone:Rr,merge:Dt},ut=class extends zt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,this.fragmentShader=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Rr(e.uniforms),this.uniformsGroups=function(t){let n=[];for(let i=0;i<t.length;i++)n.push(t[i].clone());return n}(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let r=this.uniforms[i].value;r&&r.isTexture?t.uniforms[i]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[i]={type:"m4",value:r.toArray()}:t.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},hs=class extends tt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new be,this.projectionMatrix=new be,this.projectionMatrixInverse=new be,this.coordinateSystem=Er}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},pt=class extends hs{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=2*Tr*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(.5*vr*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return 2*Tr*Math.atan(Math.tan(.5*vr*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(.5*vr*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ar=-90,zl=class extends tt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new pt(ar,1,e,t);i.layers=this.layers,this.add(i);let r=new pt(ar,1,e,t);r.layers=this.layers,this.add(r);let a=new pt(ar,1,e,t);a.layers=this.layers,this.add(a);let o=new pt(ar,1,e,t);o.layers=this.layers,this.add(o);let l=new pt(ar,1,e,t);l.layers=this.layers,this.add(l);let c=new pt(ar,1,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===Er)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else{if(e!==Ia)throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1)}for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),f=e.xr.enabled;e.xr.enabled=!1;let g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(d,u,p),e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}},za=class extends Rt{constructor(e,t,n,i,r,a,o,l,c,h){super(e=e!==void 0?e:[],t=t!==void 0?t:yr,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Gl=class extends Ot{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(rs("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Ti?qe:Mn),this.texture=new za(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0&&t.generateMipmaps,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ft}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Me(5,5,5),r=new ut({name:"CubemapFromEquirect",uniforms:Rr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Et,blending:0});r.uniforms.tEquirect.value=t;let a=new Ue(i,r),o=t.minFilter;return t.minFilter===wi&&(t.minFilter=Ft),new zl(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}},dl=new E,Jp=new E,Qp=new Ie,Nn=class{constructor(e=new E(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=dl.subVectors(n,t).cross(Jp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(dl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Qp.getNormalMatrix(e),i=this.coplanarPoint(dl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},xi=new Ht,ca=new E,Cr=class{constructor(e=new Nn,t=new Nn,n=new Nn,i=new Nn,r=new Nn,a=new Nn){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=2e3){let n=this.planes,i=e.elements,r=i[0],a=i[1],o=i[2],l=i[3],c=i[4],h=i[5],d=i[6],u=i[7],p=i[8],f=i[9],g=i[10],m=i[11],x=i[12],v=i[13],_=i[14],M=i[15];if(n[0].setComponents(l-r,u-c,m-p,M-x).normalize(),n[1].setComponents(l+r,u+c,m+p,M+x).normalize(),n[2].setComponents(l+a,u+h,m+f,M+v).normalize(),n[3].setComponents(l-a,u-h,m-f,M-v).normalize(),n[4].setComponents(l-o,u-d,m-g,M-_).normalize(),t===Er)n[5].setComponents(l+o,u+d,m+g,M+_).normalize();else{if(t!==Ia)throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);n[5].setComponents(o,d,g,_).normalize()}return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),xi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),xi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(xi)}intersectsSprite(e){return xi.center.set(0,0,0),xi.radius=.7071067811865476,xi.applyMatrix4(e.matrixWorld),this.intersectsSphere(xi)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(ca.x=i.normal.x>0?e.max.x:e.min.x,ca.y=i.normal.y>0?e.max.y:e.min.y,ca.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ca)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Vd(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function $p(s,e){let t=e.isWebGL2,n=new WeakMap;return{get:function(i){return i.isInterleavedBufferAttribute&&(i=i.data),n.get(i)},remove:function(i){i.isInterleavedBufferAttribute&&(i=i.data);let r=n.get(i);r&&(s.deleteBuffer(r.buffer),n.delete(i))},update:function(i,r){if(i.isGLBufferAttribute){let o=n.get(i);return void((!o||o.version<i.version)&&n.set(i,{buffer:i.buffer,type:i.type,bytesPerElement:i.elementSize,version:i.version}))}i.isInterleavedBufferAttribute&&(i=i.data);let a=n.get(i);if(a===void 0)n.set(i,function(o,l){let c=o.array,h=o.usage,d=c.byteLength,u=s.createBuffer(),p;if(s.bindBuffer(l,u),s.bufferData(l,c,h),o.onUploadCallback(),c instanceof Float32Array)p=s.FLOAT;else if(c instanceof Uint16Array)if(o.isFloat16BufferAttribute){if(!t)throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");p=s.HALF_FLOAT}else p=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=s.SHORT;else if(c instanceof Uint32Array)p=s.UNSIGNED_INT;else if(c instanceof Int32Array)p=s.INT;else if(c instanceof Int8Array)p=s.BYTE;else if(c instanceof Uint8Array)p=s.UNSIGNED_BYTE;else{if(!(c instanceof Uint8ClampedArray))throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);p=s.UNSIGNED_BYTE}return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}(i,r));else if(a.version<i.version){if(a.size!==i.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");(function(o,l,c){let h=l.array,d=l._updateRange,u=l.updateRanges;if(s.bindBuffer(c,o),d.count===-1&&u.length===0&&s.bufferSubData(c,0,h),u.length!==0){for(let p=0,f=u.length;p<f;p++){let g=u[p];t?s.bufferSubData(c,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count):s.bufferSubData(c,g.start*h.BYTES_PER_ELEMENT,h.subarray(g.start,g.start+g.count))}l.clearUpdateRanges()}d.count!==-1&&(t?s.bufferSubData(c,d.offset*h.BYTES_PER_ELEMENT,h,d.offset,d.count):s.bufferSubData(c,d.offset*h.BYTES_PER_ELEMENT,h.subarray(d.offset,d.offset+d.count)),d.count=-1),l.onUploadCallback()})(a.buffer,i,r),a.version=i.version}}}}var Gt=class s extends Ke{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,d=e/o,u=t/l,p=[],f=[],g=[],m=[];for(let x=0;x<h;x++){let v=x*u-a;for(let _=0;_<c;_++){let M=_*d-r;f.push(M,-v,0),g.push(0,0,1),m.push(_/o),m.push(1-x/l)}}for(let x=0;x<l;x++)for(let v=0;v<o;v++){let _=v+c*x,M=v+c*(x+1),T=v+1+c*(x+1),S=v+1+c*x;p.push(_,M,S),p.push(M,T,S)}this.setIndex(p),this.setAttribute("position",new Ee(f,3)),this.setAttribute("normal",new Ee(g,3)),this.setAttribute("uv",new Ee(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}},Ce={alphahash_fragment:`#ifdef USE_ALPHAHASH
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
}`},ce={common:{diffuse:{value:new xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ie}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ie}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ie}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ie},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ie},normalScale:{value:new ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ie},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ie}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ie}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ie}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0},uvTransform:{value:new Ie}},sprite:{diffuse:{value:new xe(16777215)},opacity:{value:1},center:{value:new ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}}},yn={basic:{uniforms:Dt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Ce.meshbasic_vert,fragmentShader:Ce.meshbasic_frag},lambert:{uniforms:Dt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new xe(0)}}]),vertexShader:Ce.meshlambert_vert,fragmentShader:Ce.meshlambert_frag},phong:{uniforms:Dt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new xe(0)},specular:{value:new xe(1118481)},shininess:{value:30}}]),vertexShader:Ce.meshphong_vert,fragmentShader:Ce.meshphong_frag},standard:{uniforms:Dt([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ce.meshphysical_vert,fragmentShader:Ce.meshphysical_frag},toon:{uniforms:Dt([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new xe(0)}}]),vertexShader:Ce.meshtoon_vert,fragmentShader:Ce.meshtoon_frag},matcap:{uniforms:Dt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Ce.meshmatcap_vert,fragmentShader:Ce.meshmatcap_frag},points:{uniforms:Dt([ce.points,ce.fog]),vertexShader:Ce.points_vert,fragmentShader:Ce.points_frag},dashed:{uniforms:Dt([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ce.linedashed_vert,fragmentShader:Ce.linedashed_frag},depth:{uniforms:Dt([ce.common,ce.displacementmap]),vertexShader:Ce.depth_vert,fragmentShader:Ce.depth_frag},normal:{uniforms:Dt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Ce.meshnormal_vert,fragmentShader:Ce.meshnormal_frag},sprite:{uniforms:Dt([ce.sprite,ce.fog]),vertexShader:Ce.sprite_vert,fragmentShader:Ce.sprite_frag},background:{uniforms:{uvTransform:{value:new Ie},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ce.background_vert,fragmentShader:Ce.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ce.backgroundCube_vert,fragmentShader:Ce.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ce.cube_vert,fragmentShader:Ce.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ce.equirect_vert,fragmentShader:Ce.equirect_frag},distanceRGBA:{uniforms:Dt([ce.common,ce.displacementmap,{referencePosition:{value:new E},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ce.distanceRGBA_vert,fragmentShader:Ce.distanceRGBA_frag},shadow:{uniforms:Dt([ce.lights,ce.fog,{color:{value:new xe(0)},opacity:{value:1}}]),vertexShader:Ce.shadow_vert,fragmentShader:Ce.shadow_frag}};yn.physical={uniforms:Dt([yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ie},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ie},clearcoatNormalScale:{value:new ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ie},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ie},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ie},sheen:{value:0},sheenColor:{value:new xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ie},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ie},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ie},transmissionSamplerSize:{value:new ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ie},attenuationDistance:{value:0},attenuationColor:{value:new xe(0)},specularColor:{value:new xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ie},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ie},anisotropyVector:{value:new ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ie}}]),vertexShader:Ce.meshphysical_vert,fragmentShader:Ce.meshphysical_frag};var ha={r:0,b:0,g:0};function ef(s,e,t,n,i,r,a){let o=new xe(0),l,c,h=r===!0?0:1,d=null,u=0,p=null;function f(g,m){g.getRGB(ha,kd(s)),n.buffers.color.setClear(ha.r,ha.g,ha.b,m,a)}return{getClearColor:function(){return o},setClearColor:function(g,m=1){o.set(g),h=m,f(o,h)},getClearAlpha:function(){return h},setClearAlpha:function(g){h=g,f(o,h)},render:function(g,m){let x=!1,v=m.isScene===!0?m.background:null;v&&v.isTexture&&(v=(m.backgroundBlurriness>0?t:e).get(v)),v===null?f(o,h):v&&v.isColor&&(f(v,1),x=!0);let _=s.xr.getEnvironmentBlendMode();_==="additive"?n.buffers.color.setClear(0,0,0,1,a):_==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||x)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),v&&(v.isCubeTexture||v.mapping===po)?(c===void 0&&(c=new Ue(new Me(1,1,1),new ut({name:"BackgroundCubeMaterial",uniforms:Rr(yn.backgroundCube.uniforms),vertexShader:yn.backgroundCube.vertexShader,fragmentShader:yn.backgroundCube.fragmentShader,side:Et,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,T,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,c.material.toneMapped=We.getTransfer(v.colorSpace)!==Qe,d===v&&u===v.version&&p===s.toneMapping||(c.material.needsUpdate=!0,d=v,u=v.version,p=s.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Ue(new Gt(2,2),new ut({name:"BackgroundMaterial",uniforms:Rr(yn.background.uniforms),vertexShader:yn.background.vertexShader,fragmentShader:yn.background.fragmentShader,side:bn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,l.material.toneMapped=We.getTransfer(v.colorSpace)!==Qe,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),d===v&&u===v.version&&p===s.toneMapping||(l.material.needsUpdate=!0,d=v,u=v.version,p=s.toneMapping),l.layers.enableAll(),g.unshift(l,l.geometry,l.material,0,0,null))}}}function tf(s,e,t,n){let i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},l=p(null),c=l,h=!1;function d(T){return n.isWebGL2?s.bindVertexArray(T):r.bindVertexArrayOES(T)}function u(T){return n.isWebGL2?s.deleteVertexArray(T):r.deleteVertexArrayOES(T)}function p(T){let S=[],y=[],U=[];for(let C=0;C<i;C++)S[C]=0,y[C]=0,U[C]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:S,enabledAttributes:y,attributeDivisors:U,object:T,attributes:{},index:null}}function f(){let T=c.newAttributes;for(let S=0,y=T.length;S<y;S++)T[S]=0}function g(T){m(T,0)}function m(T,S){let y=c.newAttributes,U=c.enabledAttributes,C=c.attributeDivisors;y[T]=1,U[T]===0&&(s.enableVertexAttribArray(T),U[T]=1),C[T]!==S&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](T,S),C[T]=S)}function x(){let T=c.newAttributes,S=c.enabledAttributes;for(let y=0,U=S.length;y<U;y++)S[y]!==T[y]&&(s.disableVertexAttribArray(y),S[y]=0)}function v(T,S,y,U,C,L,B){B===!0?s.vertexAttribIPointer(T,S,y,C,L):s.vertexAttribPointer(T,S,y,U,C,L)}function _(){M(),h=!0,c!==l&&(c=l,d(c.object))}function M(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:function(T,S,y,U,C){let L=!1;if(a){let B=function(P,G,V){let ae=V.wireframe===!0,fe=o[P.id];fe===void 0&&(fe={},o[P.id]=fe);let ne=fe[G.id];ne===void 0&&(ne={},fe[G.id]=ne);let q=ne[ae];return q===void 0&&(q=p(n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()),ne[ae]=q),q}(U,y,S);c!==B&&(c=B,d(c.object)),L=function(P,G,V,ae){let fe=c.attributes,ne=G.attributes,q=0,te=V.getAttributes();for(let H in te)if(te[H].location>=0){let K=fe[H],he=ne[H];if(he===void 0&&(H==="instanceMatrix"&&P.instanceMatrix&&(he=P.instanceMatrix),H==="instanceColor"&&P.instanceColor&&(he=P.instanceColor)),K===void 0||K.attribute!==he||he&&K.data!==he.data)return!0;q++}return c.attributesNum!==q||c.index!==ae}(T,U,y,C),L&&function(P,G,V,ae){let fe={},ne=G.attributes,q=0,te=V.getAttributes();for(let H in te)if(te[H].location>=0){let K=ne[H];K===void 0&&(H==="instanceMatrix"&&P.instanceMatrix&&(K=P.instanceMatrix),H==="instanceColor"&&P.instanceColor&&(K=P.instanceColor));let he={};he.attribute=K,K&&K.data&&(he.data=K.data),fe[H]=he,q++}c.attributes=fe,c.attributesNum=q,c.index=ae}(T,U,y,C)}else{let B=S.wireframe===!0;c.geometry===U.id&&c.program===y.id&&c.wireframe===B||(c.geometry=U.id,c.program=y.id,c.wireframe=B,L=!0)}C!==null&&t.update(C,s.ELEMENT_ARRAY_BUFFER),(L||h)&&(h=!1,function(B,P,G,V){if(n.isWebGL2===!1&&(B.isInstancedMesh||V.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;f();let ae=V.attributes,fe=G.getAttributes(),ne=P.defaultAttributeValues;for(let q in fe){let te=fe[q];if(te.location>=0){let H=ae[q];if(H===void 0&&(q==="instanceMatrix"&&B.instanceMatrix&&(H=B.instanceMatrix),q==="instanceColor"&&B.instanceColor&&(H=B.instanceColor)),H!==void 0){let K=H.normalized,he=H.itemSize,A=t.get(H);if(A===void 0)continue;let w=A.buffer,O=A.type,Y=A.bytesPerElement,I=n.isWebGL2===!0&&(O===s.INT||O===s.UNSIGNED_INT||H.gpuType===Pd);if(H.isInterleavedBufferAttribute){let j=H.data,N=j.stride,D=H.offset;if(j.isInstancedInterleavedBuffer){for(let F=0;F<te.locationSize;F++)m(te.location+F,j.meshPerAttribute);B.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let F=0;F<te.locationSize;F++)g(te.location+F);s.bindBuffer(s.ARRAY_BUFFER,w);for(let F=0;F<te.locationSize;F++)v(te.location+F,he/te.locationSize,O,K,N*Y,(D+he/te.locationSize*F)*Y,I)}else{if(H.isInstancedBufferAttribute){for(let j=0;j<te.locationSize;j++)m(te.location+j,H.meshPerAttribute);B.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let j=0;j<te.locationSize;j++)g(te.location+j);s.bindBuffer(s.ARRAY_BUFFER,w);for(let j=0;j<te.locationSize;j++)v(te.location+j,he/te.locationSize,O,K,he*Y,he/te.locationSize*j*Y,I)}}else if(ne!==void 0){let K=ne[q];if(K!==void 0)switch(K.length){case 2:s.vertexAttrib2fv(te.location,K);break;case 3:s.vertexAttrib3fv(te.location,K);break;case 4:s.vertexAttrib4fv(te.location,K);break;default:s.vertexAttrib1fv(te.location,K)}}}}x()}(T,S,y,U),C!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(C).buffer))},reset:_,resetDefaultState:M,dispose:function(){_();for(let T in o){let S=o[T];for(let y in S){let U=S[y];for(let C in U)u(U[C].object),delete U[C];delete S[y]}delete o[T]}},releaseStatesOfGeometry:function(T){if(o[T.id]===void 0)return;let S=o[T.id];for(let y in S){let U=S[y];for(let C in U)u(U[C].object),delete U[C];delete S[y]}delete o[T.id]},releaseStatesOfProgram:function(T){for(let S in o){let y=o[S];if(y[T.id]===void 0)continue;let U=y[T.id];for(let C in U)u(U[C].object),delete U[C];delete y[T.id]}},initAttributes:f,enableAttribute:g,disableUnusedAttributes:x}}function nf(s,e,t,n){let i=n.isWebGL2,r;this.setMode=function(a){r=a},this.render=function(a,o){s.drawArrays(r,a,o),t.update(o,r,1)},this.renderInstances=function(a,o,l){if(l===0)return;let c,h;if(i)c=s,h="drawArraysInstanced";else if(c=e.get("ANGLE_instanced_arrays"),h="drawArraysInstancedANGLE",c===null)return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");c[h](r,a,o,l),t.update(o,r,l)},this.renderMultiDraw=function(a,o,l){if(l===0)return;let c=e.get("WEBGL_multi_draw");if(c===null)for(let h=0;h<l;h++)this.render(a[h],o[h]);else{c.multiDrawArraysWEBGL(r,a,0,o,0,l);let h=0;for(let d=0;d<l;d++)h+=o[d];t.update(h,r,1)}}}function rf(s,e,t){let n;function i(M){if(M==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let r=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",o=i(a);o!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",o,"instead."),a=o);let l=r||e.has("WEBGL_draw_buffers"),c=t.logarithmicDepthBuffer===!0,h=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),d=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),u=s.getParameter(s.MAX_TEXTURE_SIZE),p=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),f=s.getParameter(s.MAX_VERTEX_ATTRIBS),g=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),m=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),v=d>0,_=r||e.has("OES_texture_float");return{isWebGL2:r,drawBuffers:l,getMaxAnisotropy:function(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let M=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n},getMaxPrecision:i,precision:a,logarithmicDepthBuffer:c,maxTextures:h,maxVertexTextures:d,maxTextureSize:u,maxCubemapSize:p,maxAttributes:f,maxVertexUniforms:g,maxVaryings:m,maxFragmentUniforms:x,vertexTextures:v,floatFragmentTextures:_,floatVertexTextures:v&&_,maxSamples:r?s.getParameter(s.MAX_SAMPLES):0}}function sf(s){let e=this,t=null,n=0,i=!1,r=!1,a=new Nn,o=new Ie,l={value:null,needsUpdate:!1};function c(h,d,u,p){let f=h!==null?h.length:0,g=null;if(f!==0){if(g=l.value,p!==!0||g===null){let m=u+4*f,x=d.matrixWorldInverse;o.getNormalMatrix(x),(g===null||g.length<m)&&(g=new Float32Array(m));for(let v=0,_=u;v!==f;++v,_+=4)a.copy(h[v]).applyMatrix4(x,o),a.normal.toArray(g,_),g[_+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=f,e.numIntersection=0,g}this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let u=h.length!==0||d||n!==0||i;return i=d,n=h.length,u},this.beginShadows=function(){r=!0,c(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=c(h,d,0)},this.setState=function(h,d,u){let p=h.clippingPlanes,f=h.clipIntersection,g=h.clipShadows,m=s.get(h);if(!i||p===null||p.length===0||r&&!g)r?c(null):function(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}();else{let x=r?0:n,v=4*x,_=m.clippingState||null;l.value=_,_=c(p,d,v,u);for(let M=0;M!==v;++M)_[M]=t[M];m.clippingState=_,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=x}}}function af(s){let e=new WeakMap;function t(i,r){return r===Il?i.mapping=yr:r===Ul&&(i.mapping=Mr),i}function n(i){let r=i.target;r.removeEventListener("dispose",n);let a=e.get(r);a!==void 0&&(e.delete(r),a.dispose())}return{get:function(i){if(i&&i.isTexture){let r=i.mapping;if(r===Il||r===Ul){if(e.has(i))return t(e.get(i).texture,i.mapping);{let a=i.image;if(a&&a.height>0){let o=new Gl(a.height/2);return o.fromEquirectangularTexture(s,i),e.set(i,o),i.addEventListener("dispose",n),t(o.texture,i.mapping)}return null}}}return i},dispose:function(){e=new WeakMap}}}var $n=class extends hs{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Lu=[.125,.215,.35,.446,.526,.582],Zr=20,pl=new $n,Iu=new xe,fl=null,ml=0,gl=0,yi=(1+Math.sqrt(5))/2,or=1/yi,Uu=[new E(1,1,1),new E(-1,1,1),new E(1,1,-1),new E(-1,1,-1),new E(0,yi,or),new E(0,yi,-or),new E(or,0,yi),new E(-or,0,yi),new E(yi,or,0),new E(-yi,or,0)],us=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){fl=this._renderer.getRenderTarget(),ml=this._renderer.getActiveCubeFace(),gl=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ou(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Du(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(fl,ml,gl),e.scissorTest=!1,ua(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===yr||e.mapping===Mr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),fl=this._renderer.getRenderTarget(),ml=this._renderer.getActiveCubeFace(),gl=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ft,minFilter:Ft,generateMipmaps:!1,type:gn,format:pn,colorSpace:xt,depthBuffer:!1},i=Nu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Nu(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=function(a){let o=[],l=[],c=[],h=a,d=a-4+1+Lu.length;for(let u=0;u<d;u++){let p=Math.pow(2,h);l.push(p);let f=1/p;u>a-4?f=Lu[u-a+4-1]:u===0&&(f=0),c.push(f);let g=1/(p-2),m=-g,x=1+g,v=[m,m,x,m,x,x,m,m,x,x,m,x],_=6,M=6,T=3,S=2,y=1,U=new Float32Array(T*M*_),C=new Float32Array(S*M*_),L=new Float32Array(y*M*_);for(let P=0;P<_;P++){let G=P%3*2/3-1,V=P>2?0:-1,ae=[G,V,0,G+2/3,V,0,G+2/3,V+1,0,G,V,0,G+2/3,V+1,0,G,V+1,0];U.set(ae,T*M*P),C.set(v,S*M*P);let fe=[P,P,P,P,P,P];L.set(fe,y*M*P)}let B=new Ke;B.setAttribute("position",new ft(U,T)),B.setAttribute("uv",new ft(C,S)),B.setAttribute("faceIndex",new ft(L,y)),o.push(B),h>4&&h--}return{lodPlanes:o,sizeLods:l,sigmas:c}}(r)),this._blurMaterial=function(a,o,l){let c=new Float32Array(Zr),h=new E(0,1,0);return new ut({name:"SphericalGaussianBlur",defines:{n:Zr,CUBEUV_TEXEL_WIDTH:1/o,CUBEUV_TEXEL_HEIGHT:1/l,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:c},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:h}},vertexShader:Dc(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}(r,e,t)}return i}_compileMaterial(e){let t=new Ue(this._lodPlanes[0],e);this._renderer.compile(t,pl)}_sceneToCubeUV(e,t,n,i){let r=new pt(90,1,t,n),a=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],l=this._renderer,c=l.autoClear,h=l.toneMapping;l.getClearColor(Iu),l.toneMapping=Jn,l.autoClear=!1;let d=new ht({name:"PMREM.Background",side:Et,depthWrite:!1,depthTest:!1}),u=new Ue(new Me,d),p=!1,f=e.background;f?f.isColor&&(d.color.copy(f),e.background=null,p=!0):(d.color.copy(Iu),p=!0);for(let g=0;g<6;g++){let m=g%3;m===0?(r.up.set(0,a[g],0),r.lookAt(o[g],0,0)):m===1?(r.up.set(0,0,a[g]),r.lookAt(0,o[g],0)):(r.up.set(0,a[g],0),r.lookAt(0,0,o[g]));let x=this._cubeSize;ua(i,m*x,g>2?x:0,x,x),l.setRenderTarget(i),p&&l.render(u,r),l.render(e,r)}u.geometry.dispose(),u.material.dispose(),l.toneMapping=h,l.autoClear=c,e.background=f}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===yr||e.mapping===Mr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ou()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Du());let r=i?this._cubemapMaterial:this._equirectMaterial,a=new Ue(this._lodPlanes[0],r);r.uniforms.envMap.value=e;let o=this._cubeSize;ua(t,0,0,3*o,2*o),n.setRenderTarget(t),n.render(a,pl)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){let r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=Uu[(i-1)%Uu.length];this._blur(e,i-1,i,r,a)}t.autoClear=n}_blur(e,t,n,i,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=new Ue(this._lodPlanes[i],c),d=c.uniforms,u=this._sizeLods[n]-1,p=isFinite(r)?Math.PI/(2*u):2*Math.PI/39,f=r/p,g=isFinite(r)?1+Math.floor(3*f):Zr;g>Zr&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to 20`);let m=[],x=0;for(let M=0;M<Zr;++M){let T=M/f,S=Math.exp(-T*T/2);m.push(S),M===0?x+=S:M<g&&(x+=2*S)}for(let M=0;M<m.length;M++)m[M]=m[M]/x;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=m,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:v}=this;d.dTheta.value=p,d.mipInt.value=v-n;let _=this._sizeLods[i];ua(t,3*_*(i>v-4?i-v+4:0),4*(this._cubeSize-_),3*_,2*_),l.setRenderTarget(t),l.render(h,pl)}};function Nu(s,e,t){let n=new Ot(s,e,t);return n.texture.mapping=po,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ua(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Du(){return new ut({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Dc(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Ou(){return new ut({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Dc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Dc(){return`

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
	`}function of(s){let e=new WeakMap,t=null;function n(i){let r=i.target;r.removeEventListener("dispose",n);let a=e.get(r);a!==void 0&&(e.delete(r),a.dispose())}return{get:function(i){if(i&&i.isTexture){let r=i.mapping,a=r===Il||r===Ul,o=r===yr||r===Mr;if(a||o){if(i.isRenderTargetTexture&&i.needsPMREMUpdate===!0){i.needsPMREMUpdate=!1;let l=e.get(i);return t===null&&(t=new us(s)),l=a?t.fromEquirectangular(i,l):t.fromCubemap(i,l),e.set(i,l),l.texture}if(e.has(i))return e.get(i).texture;{let l=i.image;if(a&&l&&l.height>0||o&&l&&function(c){let h=0,d=6;for(let u=0;u<d;u++)c[u]!==void 0&&h++;return h===d}(l)){t===null&&(t=new us(s));let c=a?t.fromEquirectangular(i):t.fromCubemap(i);return e.set(i,c),i.addEventListener("dispose",n),c.texture}return null}}}return i},dispose:function(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}}}function lf(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function cf(s,e,t,n){let i={},r=new WeakMap;function a(l){let c=l.target;c.index!==null&&e.remove(c.index);for(let d in c.attributes)e.remove(c.attributes[d]);for(let d in c.morphAttributes){let u=c.morphAttributes[d];for(let p=0,f=u.length;p<f;p++)e.remove(u[p])}c.removeEventListener("dispose",a),delete i[c.id];let h=r.get(c);h&&(e.remove(h),r.delete(c)),n.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,t.memory.geometries--}function o(l){let c=[],h=l.index,d=l.attributes.position,u=0;if(h!==null){let g=h.array;u=h.version;for(let m=0,x=g.length;m<x;m+=3){let v=g[m+0],_=g[m+1],M=g[m+2];c.push(v,_,_,M,M,v)}}else{if(d===void 0)return;{let g=d.array;u=d.version;for(let m=0,x=g.length/3-1;m<x;m+=3){let v=m+0,_=m+1,M=m+2;c.push(v,_,_,M,M,v)}}}let p=new(zd(c)?Ha:Fa)(c,1);p.version=u;let f=r.get(l);f&&e.remove(f),r.set(l,p)}return{get:function(l,c){return i[c.id]===!0||(c.addEventListener("dispose",a),i[c.id]=!0,t.memory.geometries++),c},update:function(l){let c=l.attributes;for(let d in c)e.update(c[d],s.ARRAY_BUFFER);let h=l.morphAttributes;for(let d in h){let u=h[d];for(let p=0,f=u.length;p<f;p++)e.update(u[p],s.ARRAY_BUFFER)}},getWireframeAttribute:function(l){let c=r.get(l);if(c){let h=l.index;h!==null&&c.version<h.version&&o(l)}else o(l);return r.get(l)}}}function hf(s,e,t,n){let i=n.isWebGL2,r,a,o;this.setMode=function(l){r=l},this.setIndex=function(l){a=l.type,o=l.bytesPerElement},this.render=function(l,c){s.drawElements(r,c,a,l*o),t.update(c,r,1)},this.renderInstances=function(l,c,h){if(h===0)return;let d,u;if(i)d=s,u="drawElementsInstanced";else if(d=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",d===null)return void console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");d[u](r,c,a,l*o,h),t.update(c,r,h)},this.renderMultiDraw=function(l,c,h){if(h===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let u=0;u<h;u++)this.render(l[u]/o,c[u]);else{d.multiDrawElementsWEBGL(r,c,0,a,l,0,h);let u=0;for(let p=0;p<h;p++)u+=c[p];t.update(u,r,1)}}}function uf(s){let e={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:e,programs:null,autoReset:!0,reset:function(){e.calls=0,e.triangles=0,e.points=0,e.lines=0},update:function(t,n,i){switch(e.calls++,n){case s.TRIANGLES:e.triangles+=i*(t/3);break;case s.LINES:e.lines+=i*(t/2);break;case s.LINE_STRIP:e.lines+=i*(t-1);break;case s.LINE_LOOP:e.lines+=i*t;break;case s.POINTS:e.points+=i*t;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",n)}}}}function df(s,e){return s[0]-e[0]}function pf(s,e){return Math.abs(e[1])-Math.abs(s[1])}function ff(s,e,t){let n={},i=new Float32Array(8),r=new WeakMap,a=new $e,o=[];for(let l=0;l<8;l++)o[l]=[l,0];return{update:function(l,c,h){let d=l.morphTargetInfluences;if(e.isWebGL2===!0){let u=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,p=u!==void 0?u.length:0,f=r.get(c);if(f===void 0||f.count!==p){let G=function(){B.dispose(),r.delete(c),c.removeEventListener("dispose",G)};f!==void 0&&f.texture.dispose();let x=c.morphAttributes.position!==void 0,v=c.morphAttributes.normal!==void 0,_=c.morphAttributes.color!==void 0,M=c.morphAttributes.position||[],T=c.morphAttributes.normal||[],S=c.morphAttributes.color||[],y=0;x===!0&&(y=1),v===!0&&(y=2),_===!0&&(y=3);let U=c.attributes.position.count*y,C=1;U>e.maxTextureSize&&(C=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);let L=new Float32Array(U*C*4*p),B=new Oa(L,U,C,p);B.type=Dn,B.needsUpdate=!0;let P=4*y;for(let V=0;V<p;V++){let ae=M[V],fe=T[V],ne=S[V],q=U*C*4*V;for(let te=0;te<ae.count;te++){let H=te*P;x===!0&&(a.fromBufferAttribute(ae,te),L[q+H+0]=a.x,L[q+H+1]=a.y,L[q+H+2]=a.z,L[q+H+3]=0),v===!0&&(a.fromBufferAttribute(fe,te),L[q+H+4]=a.x,L[q+H+5]=a.y,L[q+H+6]=a.z,L[q+H+7]=0),_===!0&&(a.fromBufferAttribute(ne,te),L[q+H+8]=a.x,L[q+H+9]=a.y,L[q+H+10]=a.z,L[q+H+11]=ne.itemSize===4?a.w:1)}}f={count:p,texture:B,size:new ee(U,C)},r.set(c,f),c.addEventListener("dispose",G)}let g=0;for(let x=0;x<d.length;x++)g+=d[x];let m=c.morphTargetsRelative?1:1-g;h.getUniforms().setValue(s,"morphTargetBaseInfluence",m),h.getUniforms().setValue(s,"morphTargetInfluences",d),h.getUniforms().setValue(s,"morphTargetsTexture",f.texture,t),h.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}else{let u=d===void 0?0:d.length,p=n[c.id];if(p===void 0||p.length!==u){p=[];for(let v=0;v<u;v++)p[v]=[v,0];n[c.id]=p}for(let v=0;v<u;v++){let _=p[v];_[0]=v,_[1]=d[v]}p.sort(pf);for(let v=0;v<8;v++)v<u&&p[v][1]?(o[v][0]=p[v][0],o[v][1]=p[v][1]):(o[v][0]=Number.MAX_SAFE_INTEGER,o[v][1]=0);o.sort(df);let f=c.morphAttributes.position,g=c.morphAttributes.normal,m=0;for(let v=0;v<8;v++){let _=o[v],M=_[0],T=_[1];M!==Number.MAX_SAFE_INTEGER&&T?(f&&c.getAttribute("morphTarget"+v)!==f[M]&&c.setAttribute("morphTarget"+v,f[M]),g&&c.getAttribute("morphNormal"+v)!==g[M]&&c.setAttribute("morphNormal"+v,g[M]),i[v]=T,m+=T):(f&&c.hasAttribute("morphTarget"+v)===!0&&c.deleteAttribute("morphTarget"+v),g&&c.hasAttribute("morphNormal"+v)===!0&&c.deleteAttribute("morphNormal"+v),i[v]=0)}let x=c.morphTargetsRelative?1:1-m;h.getUniforms().setValue(s,"morphTargetBaseInfluence",x),h.getUniforms().setValue(s,"morphTargetInfluences",i)}}}}function mf(s,e,t,n){let i=new WeakMap;function r(a){let o=a.target;o.removeEventListener("dispose",r),t.remove(o.instanceMatrix),o.instanceColor!==null&&t.remove(o.instanceColor)}return{update:function(a){let o=n.render.frame,l=a.geometry,c=e.get(a,l);if(i.get(c)!==o&&(e.update(c),i.set(c,o)),a.isInstancedMesh&&(a.hasEventListener("dispose",r)===!1&&a.addEventListener("dispose",r),i.get(a)!==o&&(t.update(a.instanceMatrix,s.ARRAY_BUFFER),a.instanceColor!==null&&t.update(a.instanceColor,s.ARRAY_BUFFER),i.set(a,o))),a.isSkinnedMesh){let h=a.skeleton;i.get(h)!==o&&(h.update(),i.set(h,o))}return c},dispose:function(){i=new WeakMap}}}var Ga=class extends Rt{constructor(e,t,n,i,r,a,o,l,c,h){if((h=h!==void 0?h:Ei)!==Ei&&h!==Sr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ei&&(n=Yn),n===void 0&&h===Sr&&(n=bi),super(null,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:At,this.minFilter=l!==void 0?l:At,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Wd=new Rt,Xd=new Ga(1,1);Xd.compareFunction=515;var jd=new Oa,qd=new Hl,Yd=new za,Bu=[],Fu=[],Hu=new Float32Array(16),zu=new Float32Array(9),Gu=new Float32Array(4);function Fr(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=Bu[i];if(r===void 0&&(r=new Float32Array(i),Bu[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function yt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Mt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function go(s,e){let t=Fu[e];t===void 0&&(t=new Int32Array(e),Fu[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function gf(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function vf(s,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;s.uniform2fv(this.addr,e),Mt(t,e)}}function _f(s,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)t[0]===e.r&&t[1]===e.g&&t[2]===e.b||(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(yt(t,e))return;s.uniform3fv(this.addr,e),Mt(t,e)}}function xf(s,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;s.uniform4fv(this.addr,e),Mt(t,e)}}function yf(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(yt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Mt(t,e)}else{if(yt(t,n))return;Gu.set(n),s.uniformMatrix2fv(this.addr,!1,Gu),Mt(t,n)}}function Mf(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(yt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Mt(t,e)}else{if(yt(t,n))return;zu.set(n),s.uniformMatrix3fv(this.addr,!1,zu),Mt(t,n)}}function Sf(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(yt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Mt(t,e)}else{if(yt(t,n))return;Hu.set(n),s.uniformMatrix4fv(this.addr,!1,Hu),Mt(t,n)}}function bf(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Ef(s,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;s.uniform2iv(this.addr,e),Mt(t,e)}}function Tf(s,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yt(t,e))return;s.uniform3iv(this.addr,e),Mt(t,e)}}function wf(s,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;s.uniform4iv(this.addr,e),Mt(t,e)}}function Af(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Rf(s,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;s.uniform2uiv(this.addr,e),Mt(t,e)}}function Cf(s,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yt(t,e))return;s.uniform3uiv(this.addr,e),Mt(t,e)}}function Pf(s,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;s.uniform4uiv(this.addr,e),Mt(t,e)}}function Lf(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r=this.type===s.SAMPLER_2D_SHADOW?Xd:Wd;t.setTexture2D(e||r,i)}function If(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||qd,i)}function Uf(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Yd,i)}function Nf(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||jd,i)}function Df(s,e){s.uniform1fv(this.addr,e)}function Of(s,e){let t=Fr(e,this.size,2);s.uniform2fv(this.addr,t)}function Bf(s,e){let t=Fr(e,this.size,3);s.uniform3fv(this.addr,t)}function Ff(s,e){let t=Fr(e,this.size,4);s.uniform4fv(this.addr,t)}function Hf(s,e){let t=Fr(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function zf(s,e){let t=Fr(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Gf(s,e){let t=Fr(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function kf(s,e){s.uniform1iv(this.addr,e)}function Vf(s,e){s.uniform2iv(this.addr,e)}function Wf(s,e){s.uniform3iv(this.addr,e)}function Xf(s,e){s.uniform4iv(this.addr,e)}function jf(s,e){s.uniform1uiv(this.addr,e)}function qf(s,e){s.uniform2uiv(this.addr,e)}function Yf(s,e){s.uniform3uiv(this.addr,e)}function Zf(s,e){s.uniform4uiv(this.addr,e)}function Kf(s,e,t){let n=this.cache,i=e.length,r=go(t,i);yt(n,r)||(s.uniform1iv(this.addr,r),Mt(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Wd,r[a])}function Jf(s,e,t){let n=this.cache,i=e.length,r=go(t,i);yt(n,r)||(s.uniform1iv(this.addr,r),Mt(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||qd,r[a])}function Qf(s,e,t){let n=this.cache,i=e.length,r=go(t,i);yt(n,r)||(s.uniform1iv(this.addr,r),Mt(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Yd,r[a])}function $f(s,e,t){let n=this.cache,i=e.length,r=go(t,i);yt(n,r)||(s.uniform1iv(this.addr,r),Mt(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||jd,r[a])}var kl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=function(i){switch(i){case 5126:return gf;case 35664:return vf;case 35665:return _f;case 35666:return xf;case 35674:return yf;case 35675:return Mf;case 35676:return Sf;case 5124:case 35670:return bf;case 35667:case 35671:return Ef;case 35668:case 35672:return Tf;case 35669:case 35673:return wf;case 5125:return Af;case 36294:return Rf;case 36295:return Cf;case 36296:return Pf;case 35678:case 36198:case 36298:case 36306:case 35682:return Lf;case 35679:case 36299:case 36307:return If;case 35680:case 36300:case 36308:case 36293:return Uf;case 36289:case 36303:case 36311:case 36292:return Nf}}(t.type)}},Vl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=function(i){switch(i){case 5126:return Df;case 35664:return Of;case 35665:return Bf;case 35666:return Ff;case 35674:return Hf;case 35675:return zf;case 35676:return Gf;case 5124:case 35670:return kf;case 35667:case 35671:return Vf;case 35668:case 35672:return Wf;case 35669:case 35673:return Xf;case 5125:return jf;case 36294:return qf;case 36295:return Yf;case 36296:return Zf;case 35678:case 36198:case 36298:case 36306:case 35682:return Kf;case 35679:case 36299:case 36307:return Jf;case 35680:case 36300:case 36308:case 36293:return Qf;case 36289:case 36303:case 36311:case 36292:return $f}}(t.type)}},Wl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,a=i.length;r!==a;++r){let o=i[r];o.setValue(e,t[o.id],n)}}},vl=/(\w+)(\])?(\[|\.)?/g;function ku(s,e){s.seq.push(e),s.map[e.id]=e}function em(s,e,t){let n=s.name,i=n.length;for(vl.lastIndex=0;;){let r=vl.exec(n),a=vl.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o|=0),c===void 0||c==="["&&a+2===i){ku(t,c===void 0?new kl(o,s,e):new Vl(o,s,e));break}{let h=t.map[o];h===void 0&&(h=new Wl(o),ku(t,h)),t=h}}}var xr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=e.getActiveUniform(t,i);em(r,e.getUniformLocation(t,r.name),this)}}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let a=e[i];a.id in t&&n.push(a)}return n}};function Vu(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var tm=37297,nm=0;function Wu(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+function(o,l){let c=o.split(`
`),h=[],d=Math.max(l-6,0),u=Math.min(l+6,c.length);for(let p=d;p<u;p++){let f=p+1;h.push(`${f===l?">":" "} ${f}: ${c[p]}`)}return h.join(`
`)}(s.getShaderSource(e),a)}return i}function im(s,e){let t=function(n){let i=We.getPrimaries(We.workingColorSpace),r=We.getPrimaries(n),a;switch(i===r?a="":i===La&&r===Pa?a="LinearDisplayP3ToLinearSRGB":i===Pa&&r===La&&(a="LinearSRGBToLinearDisplayP3"),n){case xt:case mo:return[a,"LinearTransferOETF"];case qe:case Nc:return[a,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[a,"LinearTransferOETF"]}}(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function rm(s,e){let t;switch(e){case Rc:t="Linear";break;case Cc:t="Reinhard";break;case Pc:t="OptimizedCineon";break;case Br:t="ACESFilmic";break;case Lc:t="AgX";break;case Ip:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function lr(s){return s!==""}function Xu(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ju(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var sm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xl(s){return s.replace(sm,om)}var am=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function om(s,e){let t=Ce[e];if(t===void 0){let n=am.get(e);if(n===void 0)throw new Error("Can not resolve #include <"+e+">");t=Ce[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n)}return Xl(t)}var lm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qu(s){return s.replace(lm,cm)}function cm(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Yu(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function hm(s,e,t,n){let i=s.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=function(P){let G="SHADOWMAP_TYPE_BASIC";return P.shadowMapType===wd?G="SHADOWMAP_TYPE_PCF":P.shadowMapType===uo?G="SHADOWMAP_TYPE_PCF_SOFT":P.shadowMapType===Un&&(G="SHADOWMAP_TYPE_VSM"),G}(t),c=function(P){let G="ENVMAP_TYPE_CUBE";if(P.envMap)switch(P.envMapMode){case yr:case Mr:G="ENVMAP_TYPE_CUBE";break;case po:G="ENVMAP_TYPE_CUBE_UV"}return G}(t),h=function(P){let G="ENVMAP_MODE_REFLECTION";return P.envMap&&P.envMapMode===Mr&&(G="ENVMAP_MODE_REFRACTION"),G}(t),d=function(P){let G="ENVMAP_BLENDING_NONE";if(P.envMap)switch(P.combine){case Rd:G="ENVMAP_BLENDING_MULTIPLY";break;case Pp:G="ENVMAP_BLENDING_MIX";break;case Lp:G="ENVMAP_BLENDING_ADD"}return G}(t),u=function(P){let G=P.envMapCubeUVHeight;if(G===null)return null;let V=Math.log2(G)-2,ae=1/G;return{texelWidth:1/(3*Math.max(Math.pow(2,V),112)),texelHeight:ae,maxMip:V}}(t),p=t.isWebGL2?"":function(P){return[P.extensionDerivatives||P.envMapCubeUVHeight||P.bumpMap||P.normalMapTangentSpace||P.clearcoatNormalMap||P.flatShading||P.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(P.extensionFragDepth||P.logarithmicDepthBuffer)&&P.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",P.extensionDrawBuffers&&P.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(P.extensionShaderTextureLOD||P.envMap||P.transmission)&&P.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(lr).join(`
`)}(t),f=function(P){return[P.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(lr).join(`
`)}(t),g=function(P){let G=[];for(let V in P){let ae=P[V];ae!==!1&&G.push("#define "+V+" "+ae)}return G.join(`
`)}(r),m=i.createProgram(),x,v,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(lr).join(`
`),x.length>0&&(x+=`
`),v=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(lr).join(`
`),v.length>0&&(v+=`
`)):(x=[Yu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(lr).join(`
`),v=[p,Yu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Jn?"#define TONE_MAPPING":"",t.toneMapping!==Jn?Ce.tonemapping_pars_fragment:"",t.toneMapping!==Jn?rm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ce.colorspace_pars_fragment,im("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(lr).join(`
`)),a=Xl(a),a=Xu(a,t),a=ju(a,t),o=Xl(o),o=Xu(o,t),o=ju(o,t),a=qu(a),o=qu(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,x=[f,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,v=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===pu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===pu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);let M=_+x+a,T=_+v+o,S=Vu(i,i.VERTEX_SHADER,M),y=Vu(i,i.FRAGMENT_SHADER,T);function U(P){if(s.debug.checkShaderErrors){let G=i.getProgramInfoLog(m).trim(),V=i.getShaderInfoLog(S).trim(),ae=i.getShaderInfoLog(y).trim(),fe=!0,ne=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(fe=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,m,S,y);else{let q=Wu(i,S,"vertex"),te=Wu(i,y,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Program Info Log: `+G+`
`+q+`
`+te)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):V!==""&&ae!==""||(ne=!1);ne&&(P.diagnostics={runnable:fe,programLog:G,vertexShader:{log:V,prefix:x},fragmentShader:{log:ae,prefix:v}})}i.deleteShader(S),i.deleteShader(y),C=new xr(i,m),L=function(G,V){let ae={},fe=G.getProgramParameter(V,G.ACTIVE_ATTRIBUTES);for(let ne=0;ne<fe;ne++){let q=G.getActiveAttrib(V,ne),te=q.name,H=1;q.type===G.FLOAT_MAT2&&(H=2),q.type===G.FLOAT_MAT3&&(H=3),q.type===G.FLOAT_MAT4&&(H=4),ae[te]={type:q.type,location:G.getAttribLocation(V,te),locationSize:H}}return ae}(i,m)}let C,L;i.attachShader(m,S),i.attachShader(m,y),t.index0AttributeName!==void 0?i.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m),this.getUniforms=function(){return C===void 0&&U(this),C},this.getAttributes=function(){return L===void 0&&U(this),L};let B=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return B===!1&&(B=i.getProgramParameter(m,tm)),B},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=nm++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=S,this.fragmentShader=y,this}var um=0,jl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new ql(e),t.set(e,n)),n}},ql=class{constructor(e){this.id=um++,this.code=e,this.usedTimes=0}};function dm(s,e,t,n,i,r,a){let o=new Ba,l=new jl,c=[],h=i.isWebGL2,d=i.logarithmicDepthBuffer,u=i.vertexTextures,p=i.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(m){return m===0?"uv":`uv${m}`}return{getParameters:function(m,x,v,_,M){let T=_.fog,S=M.geometry,y=m.isMeshStandardMaterial?_.environment:null,U=(m.isMeshStandardMaterial?t:e).get(m.envMap||y),C=U&&U.mapping===po?U.image.height:null,L=f[m.type];m.precision!==null&&(p=i.getMaxPrecision(m.precision),p!==m.precision&&console.warn("THREE.WebGLProgram.getParameters:",m.precision,"not supported, using",p,"instead."));let B=S.morphAttributes.position||S.morphAttributes.normal||S.morphAttributes.color,P=B!==void 0?B.length:0,G,V,ae,fe,ne=0;if(S.morphAttributes.position!==void 0&&(ne=1),S.morphAttributes.normal!==void 0&&(ne=2),S.morphAttributes.color!==void 0&&(ne=3),L){let Pt=yn[L];G=Pt.vertexShader,V=Pt.fragmentShader}else G=m.vertexShader,V=m.fragmentShader,l.update(m),ae=l.getVertexShaderID(m),fe=l.getFragmentShaderID(m);let q=s.getRenderTarget(),te=M.isInstancedMesh===!0,H=M.isBatchedMesh===!0,K=!!m.map,he=!!m.matcap,A=!!U,w=!!m.aoMap,O=!!m.lightMap,Y=!!m.bumpMap,I=!!m.normalMap,j=!!m.displacementMap,N=!!m.emissiveMap,D=!!m.metalnessMap,F=!!m.roughnessMap,$=m.anisotropy>0,J=m.clearcoat>0,b=m.iridescence>0,ie=m.sheen>0,z=m.transmission>0,k=$&&!!m.anisotropyMap,re=J&&!!m.clearcoatMap,ue=J&&!!m.clearcoatNormalMap,pe=J&&!!m.clearcoatRoughnessMap,ve=b&&!!m.iridescenceMap,Re=b&&!!m.iridescenceThicknessMap,_e=ie&&!!m.sheenColorMap,ye=ie&&!!m.sheenRoughnessMap,Pe=!!m.specularMap,St=!!m.specularColorMap,Se=!!m.specularIntensityMap,Ge=z&&!!m.transmissionMap,De=z&&!!m.thicknessMap,Fs=!!m.gradientMap,Xi=!!m.alphaMap,Hs=m.alphaTest>0,Yt=!!m.alphaHash,Wt=!!m.extensions,ji=!!S.attributes.uv1,X=!!S.attributes.uv2,zs=!!S.attributes.uv3,kr=Jn;return m.toneMapped&&(q!==null&&q.isXRRenderTarget!==!0||(kr=s.toneMapping)),{isWebGL2:h,shaderID:L,shaderType:m.type,shaderName:m.name,vertexShader:G,fragmentShader:V,defines:m.defines,customVertexShaderID:ae,customFragmentShaderID:fe,isRawShaderMaterial:m.isRawShaderMaterial===!0,glslVersion:m.glslVersion,precision:p,batching:H,instancing:te,instancingColor:te&&M.instanceColor!==null,supportsVertexTextures:u,outputColorSpace:q===null?s.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:xt,map:K,matcap:he,envMap:A,envMapMode:A&&U.mapping,envMapCubeUVHeight:C,aoMap:w,lightMap:O,bumpMap:Y,normalMap:I,displacementMap:u&&j,emissiveMap:N,normalMapObjectSpace:I&&m.normalMapType===1,normalMapTangentSpace:I&&m.normalMapType===0,metalnessMap:D,roughnessMap:F,anisotropy:$,anisotropyMap:k,clearcoat:J,clearcoatMap:re,clearcoatNormalMap:ue,clearcoatRoughnessMap:pe,iridescence:b,iridescenceMap:ve,iridescenceThicknessMap:Re,sheen:ie,sheenColorMap:_e,sheenRoughnessMap:ye,specularMap:Pe,specularColorMap:St,specularIntensityMap:Se,transmission:z,transmissionMap:Ge,thicknessMap:De,gradientMap:Fs,opaque:m.transparent===!1&&m.blending===1,alphaMap:Xi,alphaTest:Hs,alphaHash:Yt,combine:m.combine,mapUv:K&&g(m.map.channel),aoMapUv:w&&g(m.aoMap.channel),lightMapUv:O&&g(m.lightMap.channel),bumpMapUv:Y&&g(m.bumpMap.channel),normalMapUv:I&&g(m.normalMap.channel),displacementMapUv:j&&g(m.displacementMap.channel),emissiveMapUv:N&&g(m.emissiveMap.channel),metalnessMapUv:D&&g(m.metalnessMap.channel),roughnessMapUv:F&&g(m.roughnessMap.channel),anisotropyMapUv:k&&g(m.anisotropyMap.channel),clearcoatMapUv:re&&g(m.clearcoatMap.channel),clearcoatNormalMapUv:ue&&g(m.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pe&&g(m.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&g(m.iridescenceMap.channel),iridescenceThicknessMapUv:Re&&g(m.iridescenceThicknessMap.channel),sheenColorMapUv:_e&&g(m.sheenColorMap.channel),sheenRoughnessMapUv:ye&&g(m.sheenRoughnessMap.channel),specularMapUv:Pe&&g(m.specularMap.channel),specularColorMapUv:St&&g(m.specularColorMap.channel),specularIntensityMapUv:Se&&g(m.specularIntensityMap.channel),transmissionMapUv:Ge&&g(m.transmissionMap.channel),thicknessMapUv:De&&g(m.thicknessMap.channel),alphaMapUv:Xi&&g(m.alphaMap.channel),vertexTangents:!!S.attributes.tangent&&(I||$),vertexColors:m.vertexColors,vertexAlphas:m.vertexColors===!0&&!!S.attributes.color&&S.attributes.color.itemSize===4,vertexUv1s:ji,vertexUv2s:X,vertexUv3s:zs,pointsUvs:M.isPoints===!0&&!!S.attributes.uv&&(K||Xi),fog:!!T,useFog:m.fog===!0,fogExp2:T&&T.isFogExp2,flatShading:m.flatShading===!0,sizeAttenuation:m.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:M.isSkinnedMesh===!0,morphTargets:S.morphAttributes.position!==void 0,morphNormals:S.morphAttributes.normal!==void 0,morphColors:S.morphAttributes.color!==void 0,morphTargetsCount:P,morphTextureStride:ne,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:m.dithering,shadowMapEnabled:s.shadowMap.enabled&&v.length>0,shadowMapType:s.shadowMap.type,toneMapping:kr,useLegacyLights:s._useLegacyLights,decodeVideoTexture:K&&m.map.isVideoTexture===!0&&We.getTransfer(m.map.colorSpace)===Qe,premultipliedAlpha:m.premultipliedAlpha,doubleSided:m.side===2,flipSided:m.side===Et,useDepthPacking:m.depthPacking>=0,depthPacking:m.depthPacking||0,index0AttributeName:m.index0AttributeName,extensionDerivatives:Wt&&m.extensions.derivatives===!0,extensionFragDepth:Wt&&m.extensions.fragDepth===!0,extensionDrawBuffers:Wt&&m.extensions.drawBuffers===!0,extensionShaderTextureLOD:Wt&&m.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Wt&&m.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:m.customProgramCacheKey()}},getProgramCacheKey:function(m){let x=[];if(m.shaderID?x.push(m.shaderID):(x.push(m.customVertexShaderID),x.push(m.customFragmentShaderID)),m.defines!==void 0)for(let v in m.defines)x.push(v),x.push(m.defines[v]);return m.isRawShaderMaterial===!1&&(function(v,_){v.push(_.precision),v.push(_.outputColorSpace),v.push(_.envMapMode),v.push(_.envMapCubeUVHeight),v.push(_.mapUv),v.push(_.alphaMapUv),v.push(_.lightMapUv),v.push(_.aoMapUv),v.push(_.bumpMapUv),v.push(_.normalMapUv),v.push(_.displacementMapUv),v.push(_.emissiveMapUv),v.push(_.metalnessMapUv),v.push(_.roughnessMapUv),v.push(_.anisotropyMapUv),v.push(_.clearcoatMapUv),v.push(_.clearcoatNormalMapUv),v.push(_.clearcoatRoughnessMapUv),v.push(_.iridescenceMapUv),v.push(_.iridescenceThicknessMapUv),v.push(_.sheenColorMapUv),v.push(_.sheenRoughnessMapUv),v.push(_.specularMapUv),v.push(_.specularColorMapUv),v.push(_.specularIntensityMapUv),v.push(_.transmissionMapUv),v.push(_.thicknessMapUv),v.push(_.combine),v.push(_.fogExp2),v.push(_.sizeAttenuation),v.push(_.morphTargetsCount),v.push(_.morphAttributeCount),v.push(_.numDirLights),v.push(_.numPointLights),v.push(_.numSpotLights),v.push(_.numSpotLightMaps),v.push(_.numHemiLights),v.push(_.numRectAreaLights),v.push(_.numDirLightShadows),v.push(_.numPointLightShadows),v.push(_.numSpotLightShadows),v.push(_.numSpotLightShadowsWithMaps),v.push(_.numLightProbes),v.push(_.shadowMapType),v.push(_.toneMapping),v.push(_.numClippingPlanes),v.push(_.numClipIntersection),v.push(_.depthPacking)}(x,m),function(v,_){o.disableAll(),_.isWebGL2&&o.enable(0),_.supportsVertexTextures&&o.enable(1),_.instancing&&o.enable(2),_.instancingColor&&o.enable(3),_.matcap&&o.enable(4),_.envMap&&o.enable(5),_.normalMapObjectSpace&&o.enable(6),_.normalMapTangentSpace&&o.enable(7),_.clearcoat&&o.enable(8),_.iridescence&&o.enable(9),_.alphaTest&&o.enable(10),_.vertexColors&&o.enable(11),_.vertexAlphas&&o.enable(12),_.vertexUv1s&&o.enable(13),_.vertexUv2s&&o.enable(14),_.vertexUv3s&&o.enable(15),_.vertexTangents&&o.enable(16),_.anisotropy&&o.enable(17),_.alphaHash&&o.enable(18),_.batching&&o.enable(19),v.push(o.mask),o.disableAll(),_.fog&&o.enable(0),_.useFog&&o.enable(1),_.flatShading&&o.enable(2),_.logarithmicDepthBuffer&&o.enable(3),_.skinning&&o.enable(4),_.morphTargets&&o.enable(5),_.morphNormals&&o.enable(6),_.morphColors&&o.enable(7),_.premultipliedAlpha&&o.enable(8),_.shadowMapEnabled&&o.enable(9),_.useLegacyLights&&o.enable(10),_.doubleSided&&o.enable(11),_.flipSided&&o.enable(12),_.useDepthPacking&&o.enable(13),_.dithering&&o.enable(14),_.transmission&&o.enable(15),_.sheen&&o.enable(16),_.opaque&&o.enable(17),_.pointsUvs&&o.enable(18),_.decodeVideoTexture&&o.enable(19),v.push(o.mask)}(x,m),x.push(s.outputColorSpace)),x.push(m.customProgramCacheKey),x.join()},getUniforms:function(m){let x=f[m.type],v;if(x){let _=yn[x];v=ri.clone(_.uniforms)}else v=m.uniforms;return v},acquireProgram:function(m,x){let v;for(let _=0,M=c.length;_<M;_++){let T=c[_];if(T.cacheKey===x){v=T,++v.usedTimes;break}}return v===void 0&&(v=new hm(s,x,m,r),c.push(v)),v},releaseProgram:function(m){if(--m.usedTimes==0){let x=c.indexOf(m);c[x]=c[c.length-1],c.pop(),m.destroy()}},releaseShaderCache:function(m){l.remove(m)},programs:c,dispose:function(){l.dispose()}}}function pm(){let s=new WeakMap;return{get:function(e){let t=s.get(e);return t===void 0&&(t={},s.set(e,t)),t},remove:function(e){s.delete(e)},update:function(e,t,n){s.get(e)[t]=n},dispose:function(){s=new WeakMap}}}function fm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Zu(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Ku(){let s=[],e=0,t=[],n=[],i=[];function r(a,o,l,c,h,d){let u=s[e];return u===void 0?(u={id:a.id,object:a,geometry:o,material:l,groupOrder:c,renderOrder:a.renderOrder,z:h,group:d},s[e]=u):(u.id=a.id,u.object=a,u.geometry=o,u.material=l,u.groupOrder=c,u.renderOrder=a.renderOrder,u.z=h,u.group=d),e++,u}return{opaque:t,transmissive:n,transparent:i,init:function(){e=0,t.length=0,n.length=0,i.length=0},push:function(a,o,l,c,h,d){let u=r(a,o,l,c,h,d);l.transmission>0?n.push(u):l.transparent===!0?i.push(u):t.push(u)},unshift:function(a,o,l,c,h,d){let u=r(a,o,l,c,h,d);l.transmission>0?n.unshift(u):l.transparent===!0?i.unshift(u):t.unshift(u)},finish:function(){for(let a=e,o=s.length;a<o;a++){let l=s[a];if(l.id===null)break;l.id=null,l.object=null,l.geometry=null,l.material=null,l.group=null}},sort:function(a,o){t.length>1&&t.sort(a||fm),n.length>1&&n.sort(o||Zu),i.length>1&&i.sort(o||Zu)}}}function mm(){let s=new WeakMap;return{get:function(e,t){let n=s.get(e),i;return n===void 0?(i=new Ku,s.set(e,[i])):t>=n.length?(i=new Ku,n.push(i)):i=n[t],i},dispose:function(){s=new WeakMap}}}function gm(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new E,color:new xe};break;case"SpotLight":t={position:new E,direction:new E,color:new xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new E,color:new xe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new E,skyColor:new xe,groundColor:new xe};break;case"RectAreaLight":t={color:new xe,position:new E,halfWidth:new E,halfHeight:new E}}return s[e.id]=t,t}}}var vm=0;function _m(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function xm(s,e){let t=new gm,n=function(){let l={};return{get:function(c){if(l[c.id]!==void 0)return l[c.id];let h;switch(c.type){case"DirectionalLight":case"SpotLight":h={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee};break;case"PointLight":h={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee,shadowCameraNear:1,shadowCameraFar:1e3}}return l[c.id]=h,h}}}(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new E);let r=new E,a=new be,o=new be;return{setup:function(l,c){let h=0,d=0,u=0;for(let L=0;L<9;L++)i.probe[L].set(0,0,0);let p=0,f=0,g=0,m=0,x=0,v=0,_=0,M=0,T=0,S=0,y=0;l.sort(_m);let U=c===!0?Math.PI:1;for(let L=0,B=l.length;L<B;L++){let P=l[L],G=P.color,V=P.intensity,ae=P.distance,fe=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=G.r*V*U,d+=G.g*V*U,u+=G.b*V*U;else if(P.isLightProbe){for(let ne=0;ne<9;ne++)i.probe[ne].addScaledVector(P.sh.coefficients[ne],V);y++}else if(P.isDirectionalLight){let ne=t.get(P);if(ne.color.copy(P.color).multiplyScalar(P.intensity*U),P.castShadow){let q=P.shadow,te=n.get(P);te.shadowBias=q.bias,te.shadowNormalBias=q.normalBias,te.shadowRadius=q.radius,te.shadowMapSize=q.mapSize,i.directionalShadow[p]=te,i.directionalShadowMap[p]=fe,i.directionalShadowMatrix[p]=P.shadow.matrix,v++}i.directional[p]=ne,p++}else if(P.isSpotLight){let ne=t.get(P);ne.position.setFromMatrixPosition(P.matrixWorld),ne.color.copy(G).multiplyScalar(V*U),ne.distance=ae,ne.coneCos=Math.cos(P.angle),ne.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),ne.decay=P.decay,i.spot[g]=ne;let q=P.shadow;if(P.map&&(i.spotLightMap[T]=P.map,T++,q.updateMatrices(P),P.castShadow&&S++),i.spotLightMatrix[g]=q.matrix,P.castShadow){let te=n.get(P);te.shadowBias=q.bias,te.shadowNormalBias=q.normalBias,te.shadowRadius=q.radius,te.shadowMapSize=q.mapSize,i.spotShadow[g]=te,i.spotShadowMap[g]=fe,M++}g++}else if(P.isRectAreaLight){let ne=t.get(P);ne.color.copy(G).multiplyScalar(V),ne.halfWidth.set(.5*P.width,0,0),ne.halfHeight.set(0,.5*P.height,0),i.rectArea[m]=ne,m++}else if(P.isPointLight){let ne=t.get(P);if(ne.color.copy(P.color).multiplyScalar(P.intensity*U),ne.distance=P.distance,ne.decay=P.decay,P.castShadow){let q=P.shadow,te=n.get(P);te.shadowBias=q.bias,te.shadowNormalBias=q.normalBias,te.shadowRadius=q.radius,te.shadowMapSize=q.mapSize,te.shadowCameraNear=q.camera.near,te.shadowCameraFar=q.camera.far,i.pointShadow[f]=te,i.pointShadowMap[f]=fe,i.pointShadowMatrix[f]=P.shadow.matrix,_++}i.point[f]=ne,f++}else if(P.isHemisphereLight){let ne=t.get(P);ne.skyColor.copy(P.color).multiplyScalar(V*U),ne.groundColor.copy(P.groundColor).multiplyScalar(V*U),i.hemi[x]=ne,x++}}m>0&&(e.isWebGL2?s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ce.LTC_FLOAT_1,i.rectAreaLTC2=ce.LTC_FLOAT_2):(i.rectAreaLTC1=ce.LTC_HALF_1,i.rectAreaLTC2=ce.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ce.LTC_FLOAT_1,i.rectAreaLTC2=ce.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ce.LTC_HALF_1,i.rectAreaLTC2=ce.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;let C=i.hash;C.directionalLength===p&&C.pointLength===f&&C.spotLength===g&&C.rectAreaLength===m&&C.hemiLength===x&&C.numDirectionalShadows===v&&C.numPointShadows===_&&C.numSpotShadows===M&&C.numSpotMaps===T&&C.numLightProbes===y||(i.directional.length=p,i.spot.length=g,i.rectArea.length=m,i.point.length=f,i.hemi.length=x,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=M+T-S,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=S,i.numLightProbes=y,C.directionalLength=p,C.pointLength=f,C.spotLength=g,C.rectAreaLength=m,C.hemiLength=x,C.numDirectionalShadows=v,C.numPointShadows=_,C.numSpotShadows=M,C.numSpotMaps=T,C.numLightProbes=y,i.version=vm++)},setupView:function(l,c){let h=0,d=0,u=0,p=0,f=0,g=c.matrixWorldInverse;for(let m=0,x=l.length;m<x;m++){let v=l[m];if(v.isDirectionalLight){let _=i.directional[h];_.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(g),h++}else if(v.isSpotLight){let _=i.spot[u];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(g),_.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(g),u++}else if(v.isRectAreaLight){let _=i.rectArea[p];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(g),o.identity(),a.copy(v.matrixWorld),a.premultiply(g),o.extractRotation(a),_.halfWidth.set(.5*v.width,0,0),_.halfHeight.set(0,.5*v.height,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),p++}else if(v.isPointLight){let _=i.point[d];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(g),d++}else if(v.isHemisphereLight){let _=i.hemi[f];_.direction.setFromMatrixPosition(v.matrixWorld),_.direction.transformDirection(g),f++}}},state:i}}function Ju(s,e){let t=new xm(s,e),n=[],i=[];return{init:function(){n.length=0,i.length=0},state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:function(r){t.setup(n,r)},setupLightsView:function(r){t.setupView(n,r)},pushLight:function(r){n.push(r)},pushShadow:function(r){i.push(r)}}}function ym(s,e){let t=new WeakMap;return{get:function(n,i=0){let r=t.get(n),a;return r===void 0?(a=new Ju(s,e),t.set(n,[a])):i>=r.length?(a=new Ju(s,e),r.push(a)):a=r[i],a},dispose:function(){t=new WeakMap}}}var Yl=class extends zt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Zl=class extends zt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Mm(s,e,t){let n=new Cr,i=new ee,r=new ee,a=new $e,o=new Yl({depthPacking:3201}),l=new Zl,c={},h=t.maxTextureSize,d={[bn]:Et,[Et]:bn,2:2},u=new ut({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ee},radius:{value:4}},vertexShader:`void main() {
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
}`}),p=u.clone();p.defines.HORIZONTAL_PASS=1;let f=new Ke;f.setAttribute("position",new ft(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new Ue(f,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wd;let x=this.type;function v(S,y){let U=e.update(g);u.defines.VSM_SAMPLES!==S.blurSamples&&(u.defines.VSM_SAMPLES=S.blurSamples,p.defines.VSM_SAMPLES=S.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Ot(i.x,i.y)),u.uniforms.shadow_pass.value=S.map.texture,u.uniforms.resolution.value=S.mapSize,u.uniforms.radius.value=S.radius,s.setRenderTarget(S.mapPass),s.clear(),s.renderBufferDirect(y,null,U,u,g,null),p.uniforms.shadow_pass.value=S.mapPass.texture,p.uniforms.resolution.value=S.mapSize,p.uniforms.radius.value=S.radius,s.setRenderTarget(S.map),s.clear(),s.renderBufferDirect(y,null,U,p,g,null)}function _(S,y,U,C){let L=null,B=U.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(B!==void 0)L=B;else if(L=U.isPointLight===!0?l:o,s.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0){let P=L.uuid,G=y.uuid,V=c[P];V===void 0&&(V={},c[P]=V);let ae=V[G];ae===void 0&&(ae=L.clone(),V[G]=ae,y.addEventListener("dispose",T)),L=ae}return L.visible=y.visible,L.wireframe=y.wireframe,L.side=C===Un?y.shadowSide!==null?y.shadowSide:y.side:y.shadowSide!==null?y.shadowSide:d[y.side],L.alphaMap=y.alphaMap,L.alphaTest=y.alphaTest,L.map=y.map,L.clipShadows=y.clipShadows,L.clippingPlanes=y.clippingPlanes,L.clipIntersection=y.clipIntersection,L.displacementMap=y.displacementMap,L.displacementScale=y.displacementScale,L.displacementBias=y.displacementBias,L.wireframeLinewidth=y.wireframeLinewidth,L.linewidth=y.linewidth,U.isPointLight===!0&&L.isMeshDistanceMaterial===!0&&(s.properties.get(L).light=U),L}function M(S,y,U,C,L){if(S.visible===!1)return;if(S.layers.test(y.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&L===Un)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,S.matrixWorld);let P=e.update(S),G=S.material;if(Array.isArray(G)){let V=P.groups;for(let ae=0,fe=V.length;ae<fe;ae++){let ne=V[ae],q=G[ne.materialIndex];if(q&&q.visible){let te=_(S,q,C,L);S.onBeforeShadow(s,S,y,U,P,te,ne),s.renderBufferDirect(U,null,P,te,S,ne),S.onAfterShadow(s,S,y,U,P,te,ne)}}}else if(G.visible){let V=_(S,G,C,L);S.onBeforeShadow(s,S,y,U,P,V,null),s.renderBufferDirect(U,null,P,V,S,null),S.onAfterShadow(s,S,y,U,P,V,null)}}let B=S.children;for(let P=0,G=B.length;P<G;P++)M(B[P],y,U,C,L)}function T(S){S.target.removeEventListener("dispose",T);for(let y in c){let U=c[y],C=S.target.uuid;C in U&&(U[C].dispose(),delete U[C])}}this.render=function(S,y,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;let C=s.getRenderTarget(),L=s.getActiveCubeFace(),B=s.getActiveMipmapLevel(),P=s.state;P.setBlending(0),P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);let G=x!==Un&&this.type===Un,V=x===Un&&this.type!==Un;for(let ae=0,fe=S.length;ae<fe;ae++){let ne=S[ae],q=ne.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",ne,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;i.copy(q.mapSize);let te=q.getFrameExtents();if(i.multiply(te),r.copy(q.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/te.x),i.x=r.x*te.x,q.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/te.y),i.y=r.y*te.y,q.mapSize.y=r.y)),q.map===null||G===!0||V===!0){let K=this.type!==Un?{minFilter:At,magFilter:At}:{};q.map!==null&&q.map.dispose(),q.map=new Ot(i.x,i.y,K),q.map.texture.name=ne.name+".shadowMap",q.camera.updateProjectionMatrix()}s.setRenderTarget(q.map),s.clear();let H=q.getViewportCount();for(let K=0;K<H;K++){let he=q.getViewport(K);a.set(r.x*he.x,r.y*he.y,r.x*he.z,r.y*he.w),P.viewport(a),q.updateMatrices(ne,K),n=q.getFrustum(),M(y,U,q.camera,ne,this.type)}q.isPointLightShadow!==!0&&this.type===Un&&v(q,U),q.needsUpdate=!1}x=this.type,m.needsUpdate=!1,s.setRenderTarget(C,L,B)}}function Sm(s,e,t){let n=t.isWebGL2,i=new function(){let b=!1,ie=new $e,z=null,k=new $e(0,0,0,0);return{setMask:function(re){z===re||b||(s.colorMask(re,re,re,re),z=re)},setLocked:function(re){b=re},setClear:function(re,ue,pe,ve,Re){Re===!0&&(re*=ve,ue*=ve,pe*=ve),ie.set(re,ue,pe,ve),k.equals(ie)===!1&&(s.clearColor(re,ue,pe,ve),k.copy(ie))},reset:function(){b=!1,z=null,k.set(-1,0,0,0)}}},r=new function(){let b=!1,ie=null,z=null,k=null;return{setTest:function(re){re?Y(s.DEPTH_TEST):I(s.DEPTH_TEST)},setMask:function(re){ie===re||b||(s.depthMask(re),ie=re)},setFunc:function(re){if(z!==re){switch(re){case 0:s.depthFunc(s.NEVER);break;case 1:s.depthFunc(s.ALWAYS);break;case 2:s.depthFunc(s.LESS);break;case 3:default:s.depthFunc(s.LEQUAL);break;case 4:s.depthFunc(s.EQUAL);break;case 5:s.depthFunc(s.GEQUAL);break;case 6:s.depthFunc(s.GREATER);break;case 7:s.depthFunc(s.NOTEQUAL)}z=re}},setLocked:function(re){b=re},setClear:function(re){k!==re&&(s.clearDepth(re),k=re)},reset:function(){b=!1,ie=null,z=null,k=null}}},a=new function(){let b=!1,ie=null,z=null,k=null,re=null,ue=null,pe=null,ve=null,Re=null;return{setTest:function(_e){b||(_e?Y(s.STENCIL_TEST):I(s.STENCIL_TEST))},setMask:function(_e){ie===_e||b||(s.stencilMask(_e),ie=_e)},setFunc:function(_e,ye,Pe){z===_e&&k===ye&&re===Pe||(s.stencilFunc(_e,ye,Pe),z=_e,k=ye,re=Pe)},setOp:function(_e,ye,Pe){ue===_e&&pe===ye&&ve===Pe||(s.stencilOp(_e,ye,Pe),ue=_e,pe=ye,ve=Pe)},setLocked:function(_e){b=_e},setClear:function(_e){Re!==_e&&(s.clearStencil(_e),Re=_e)},reset:function(){b=!1,ie=null,z=null,k=null,re=null,ue=null,pe=null,ve=null,Re=null}}},o=new WeakMap,l=new WeakMap,c={},h={},d=new WeakMap,u=[],p=null,f=!1,g=null,m=null,x=null,v=null,_=null,M=null,T=null,S=new xe(0,0,0),y=0,U=!1,C=null,L=null,B=null,P=null,G=null,V=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ae=!1,fe=0,ne=s.getParameter(s.VERSION);ne.indexOf("WebGL")!==-1?(fe=parseFloat(/^WebGL (\d)/.exec(ne)[1]),ae=fe>=1):ne.indexOf("OpenGL ES")!==-1&&(fe=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),ae=fe>=2);let q=null,te={},H=s.getParameter(s.SCISSOR_BOX),K=s.getParameter(s.VIEWPORT),he=new $e().fromArray(H),A=new $e().fromArray(K);function w(b,ie,z,k){let re=new Uint8Array(4),ue=s.createTexture();s.bindTexture(b,ue),s.texParameteri(b,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(b,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let pe=0;pe<z;pe++)!n||b!==s.TEXTURE_3D&&b!==s.TEXTURE_2D_ARRAY?s.texImage2D(ie+pe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,re):s.texImage3D(ie,0,s.RGBA,1,1,k,0,s.RGBA,s.UNSIGNED_BYTE,re);return ue}let O={};function Y(b){c[b]!==!0&&(s.enable(b),c[b]=!0)}function I(b){c[b]!==!1&&(s.disable(b),c[b]=!1)}O[s.TEXTURE_2D]=w(s.TEXTURE_2D,s.TEXTURE_2D,1),O[s.TEXTURE_CUBE_MAP]=w(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(O[s.TEXTURE_2D_ARRAY]=w(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),O[s.TEXTURE_3D]=w(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),i.setClear(0,0,0,1),r.setClear(1),a.setClear(0),Y(s.DEPTH_TEST),r.setFunc(3),F(!1),$(1),Y(s.CULL_FACE),D(0);let j={[Mi]:s.FUNC_ADD,101:s.FUNC_SUBTRACT,102:s.FUNC_REVERSE_SUBTRACT};if(n)j[103]=s.MIN,j[104]=s.MAX;else{let b=e.get("EXT_blend_minmax");b!==null&&(j[103]=b.MIN_EXT,j[104]=b.MAX_EXT)}let N={200:s.ZERO,201:s.ONE,202:s.SRC_COLOR,[Pl]:s.SRC_ALPHA,210:s.SRC_ALPHA_SATURATE,208:s.DST_COLOR,206:s.DST_ALPHA,203:s.ONE_MINUS_SRC_COLOR,[Ll]:s.ONE_MINUS_SRC_ALPHA,209:s.ONE_MINUS_DST_COLOR,207:s.ONE_MINUS_DST_ALPHA,211:s.CONSTANT_COLOR,212:s.ONE_MINUS_CONSTANT_COLOR,213:s.CONSTANT_ALPHA,214:s.ONE_MINUS_CONSTANT_ALPHA};function D(b,ie,z,k,re,ue,pe,ve,Re,_e){if(b!==0){if(f===!1&&(Y(s.BLEND),f=!0),b===5)re=re||ie,ue=ue||z,pe=pe||k,ie===m&&re===_||(s.blendEquationSeparate(j[ie],j[re]),m=ie,_=re),z===x&&k===v&&ue===M&&pe===T||(s.blendFuncSeparate(N[z],N[k],N[ue],N[pe]),x=z,v=k,M=ue,T=pe),ve.equals(S)!==!1&&Re===y||(s.blendColor(ve.r,ve.g,ve.b,Re),S.copy(ve),y=Re),g=b,U=!1;else if(b!==g||_e!==U){if(m===Mi&&_===Mi||(s.blendEquation(s.FUNC_ADD),m=Mi,_=Mi),_e)switch(b){case 1:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case 2:s.blendFunc(s.ONE,s.ONE);break;case 3:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case 4:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",b)}else switch(b){case 1:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case 2:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case 3:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case 4:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",b)}x=null,v=null,M=null,T=null,S.set(0,0,0),y=0,g=b,U=_e}}else f===!0&&(I(s.BLEND),f=!1)}function F(b){C!==b&&(b?s.frontFace(s.CW):s.frontFace(s.CCW),C=b)}function $(b){b!==0?(Y(s.CULL_FACE),b!==L&&(b===1?s.cullFace(s.BACK):b===2?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):I(s.CULL_FACE),L=b}function J(b,ie,z){b?(Y(s.POLYGON_OFFSET_FILL),P===ie&&G===z||(s.polygonOffset(ie,z),P=ie,G=z)):I(s.POLYGON_OFFSET_FILL)}return{buffers:{color:i,depth:r,stencil:a},enable:Y,disable:I,bindFramebuffer:function(b,ie){return h[b]!==ie&&(s.bindFramebuffer(b,ie),h[b]=ie,n&&(b===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=ie),b===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=ie)),!0)},drawBuffers:function(b,ie){let z=u,k=!1;if(b)if(z=d.get(ie),z===void 0&&(z=[],d.set(ie,z)),b.isWebGLMultipleRenderTargets){let re=b.texture;if(z.length!==re.length||z[0]!==s.COLOR_ATTACHMENT0){for(let ue=0,pe=re.length;ue<pe;ue++)z[ue]=s.COLOR_ATTACHMENT0+ue;z.length=re.length,k=!0}}else z[0]!==s.COLOR_ATTACHMENT0&&(z[0]=s.COLOR_ATTACHMENT0,k=!0);else z[0]!==s.BACK&&(z[0]=s.BACK,k=!0);k&&(t.isWebGL2?s.drawBuffers(z):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(z))},useProgram:function(b){return p!==b&&(s.useProgram(b),p=b,!0)},setBlending:D,setMaterial:function(b,ie){b.side===2?I(s.CULL_FACE):Y(s.CULL_FACE);let z=b.side===Et;ie&&(z=!z),F(z),b.blending===1&&b.transparent===!1?D(0):D(b.blending,b.blendEquation,b.blendSrc,b.blendDst,b.blendEquationAlpha,b.blendSrcAlpha,b.blendDstAlpha,b.blendColor,b.blendAlpha,b.premultipliedAlpha),r.setFunc(b.depthFunc),r.setTest(b.depthTest),r.setMask(b.depthWrite),i.setMask(b.colorWrite);let k=b.stencilWrite;a.setTest(k),k&&(a.setMask(b.stencilWriteMask),a.setFunc(b.stencilFunc,b.stencilRef,b.stencilFuncMask),a.setOp(b.stencilFail,b.stencilZFail,b.stencilZPass)),J(b.polygonOffset,b.polygonOffsetFactor,b.polygonOffsetUnits),b.alphaToCoverage===!0?Y(s.SAMPLE_ALPHA_TO_COVERAGE):I(s.SAMPLE_ALPHA_TO_COVERAGE)},setFlipSided:F,setCullFace:$,setLineWidth:function(b){b!==B&&(ae&&s.lineWidth(b),B=b)},setPolygonOffset:J,setScissorTest:function(b){b?Y(s.SCISSOR_TEST):I(s.SCISSOR_TEST)},activeTexture:function(b){b===void 0&&(b=s.TEXTURE0+V-1),q!==b&&(s.activeTexture(b),q=b)},bindTexture:function(b,ie,z){z===void 0&&(z=q===null?s.TEXTURE0+V-1:q);let k=te[z];k===void 0&&(k={type:void 0,texture:void 0},te[z]=k),k.type===b&&k.texture===ie||(q!==z&&(s.activeTexture(z),q=z),s.bindTexture(b,ie||O[b]),k.type=b,k.texture=ie)},unbindTexture:function(){let b=te[q];b!==void 0&&b.type!==void 0&&(s.bindTexture(b.type,null),b.type=void 0,b.texture=void 0)},compressedTexImage2D:function(){try{s.compressedTexImage2D.apply(s,arguments)}catch(b){console.error("THREE.WebGLState:",b)}},compressedTexImage3D:function(){try{s.compressedTexImage3D.apply(s,arguments)}catch(b){console.error("THREE.WebGLState:",b)}},texImage2D:function(){try{s.texImage2D.apply(s,arguments)}catch(b){console.error("THREE.WebGLState:",b)}},texImage3D:function(){try{s.texImage3D.apply(s,arguments)}catch(b){console.error("THREE.WebGLState:",b)}},updateUBOMapping:function(b,ie){let z=l.get(ie);z===void 0&&(z=new WeakMap,l.set(ie,z));let k=z.get(b);k===void 0&&(k=s.getUniformBlockIndex(ie,b.name),z.set(b,k))},uniformBlockBinding:function(b,ie){let z=l.get(ie).get(b);o.get(ie)!==z&&(s.uniformBlockBinding(ie,z,b.__bindingPointIndex),o.set(ie,z))},texStorage2D:function(){try{s.texStorage2D.apply(s,arguments)}catch(b){console.error("THREE.WebGLState:",b)}},texStorage3D:function(){try{s.texStorage3D.apply(s,arguments)}catch(b){console.error("THREE.WebGLState:",b)}},texSubImage2D:function(){try{s.texSubImage2D.apply(s,arguments)}catch(b){console.error("THREE.WebGLState:",b)}},texSubImage3D:function(){try{s.texSubImage3D.apply(s,arguments)}catch(b){console.error("THREE.WebGLState:",b)}},compressedTexSubImage2D:function(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(b){console.error("THREE.WebGLState:",b)}},compressedTexSubImage3D:function(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(b){console.error("THREE.WebGLState:",b)}},scissor:function(b){he.equals(b)===!1&&(s.scissor(b.x,b.y,b.z,b.w),he.copy(b))},viewport:function(b){A.equals(b)===!1&&(s.viewport(b.x,b.y,b.z,b.w),A.copy(b))},reset:function(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),c={},q=null,te={},h={},d=new WeakMap,u=[],p=null,f=!1,g=null,m=null,x=null,v=null,_=null,M=null,T=null,S=new xe(0,0,0),y=0,U=!1,C=null,L=null,B=null,P=null,G=null,he.set(0,0,s.canvas.width,s.canvas.height),A.set(0,0,s.canvas.width,s.canvas.height),i.reset(),r.reset(),a.reset()}}}function bm(s,e,t,n,i,r,a){let o=i.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator<"u"&&/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,d,u=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function f(A,w){return p?new OffscreenCanvas(A,w):cs("canvas")}function g(A,w,O,Y){let I=1;if((A.width>Y||A.height>Y)&&(I=Y/Math.max(A.width,A.height)),I<1||w===!0){if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){let j=w?Ua:Math.floor,N=j(I*A.width),D=j(I*A.height);d===void 0&&(d=f(N,D));let F=O?f(N,D):d;return F.width=N,F.height=D,F.getContext("2d").drawImage(A,0,0,N,D),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+N+"x"+D+")."),F}return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A}return A}function m(A){return Bl(A.width)&&Bl(A.height)}function x(A,w){return A.generateMipmaps&&w&&A.minFilter!==At&&A.minFilter!==Ft}function v(A){s.generateMipmap(A)}function _(A,w,O,Y,I=!1){if(o===!1)return w;if(A!==null){if(s[A]!==void 0)return s[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let j=w;if(w===s.RED&&(O===s.FLOAT&&(j=s.R32F),O===s.HALF_FLOAT&&(j=s.R16F),O===s.UNSIGNED_BYTE&&(j=s.R8)),w===s.RED_INTEGER&&(O===s.UNSIGNED_BYTE&&(j=s.R8UI),O===s.UNSIGNED_SHORT&&(j=s.R16UI),O===s.UNSIGNED_INT&&(j=s.R32UI),O===s.BYTE&&(j=s.R8I),O===s.SHORT&&(j=s.R16I),O===s.INT&&(j=s.R32I)),w===s.RG&&(O===s.FLOAT&&(j=s.RG32F),O===s.HALF_FLOAT&&(j=s.RG16F),O===s.UNSIGNED_BYTE&&(j=s.RG8)),w===s.RGBA){let N=I?Ca:We.getTransfer(Y);O===s.FLOAT&&(j=s.RGBA32F),O===s.HALF_FLOAT&&(j=s.RGBA16F),O===s.UNSIGNED_BYTE&&(j=N===Qe?s.SRGB8_ALPHA8:s.RGBA8),O===s.UNSIGNED_SHORT_4_4_4_4&&(j=s.RGBA4),O===s.UNSIGNED_SHORT_5_5_5_1&&(j=s.RGB5_A1)}return j!==s.R16F&&j!==s.R32F&&j!==s.RG16F&&j!==s.RG32F&&j!==s.RGBA16F&&j!==s.RGBA32F||e.get("EXT_color_buffer_float"),j}function M(A,w,O){return x(A,O)===!0||A.isFramebufferTexture&&A.minFilter!==At&&A.minFilter!==Ft?Math.log2(Math.max(w.width,w.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?w.mipmaps.length:1}function T(A){return A===At||A===Aa||A===ns?s.NEAREST:s.LINEAR}function S(A){let w=A.target;w.removeEventListener("dispose",S),function(O){let Y=n.get(O);if(Y.__webglInit===void 0)return;let I=O.source,j=u.get(I);if(j){let N=j[Y.__cacheKey];N.usedTimes--,N.usedTimes===0&&U(O),Object.keys(j).length===0&&u.delete(I)}n.remove(O)}(w),w.isVideoTexture&&h.delete(w)}function y(A){let w=A.target;w.removeEventListener("dispose",y),function(O){let Y=O.texture,I=n.get(O),j=n.get(Y);if(j.__webglTexture!==void 0&&(s.deleteTexture(j.__webglTexture),a.memory.textures--),O.depthTexture&&O.depthTexture.dispose(),O.isWebGLCubeRenderTarget)for(let N=0;N<6;N++){if(Array.isArray(I.__webglFramebuffer[N]))for(let D=0;D<I.__webglFramebuffer[N].length;D++)s.deleteFramebuffer(I.__webglFramebuffer[N][D]);else s.deleteFramebuffer(I.__webglFramebuffer[N]);I.__webglDepthbuffer&&s.deleteRenderbuffer(I.__webglDepthbuffer[N])}else{if(Array.isArray(I.__webglFramebuffer))for(let N=0;N<I.__webglFramebuffer.length;N++)s.deleteFramebuffer(I.__webglFramebuffer[N]);else s.deleteFramebuffer(I.__webglFramebuffer);if(I.__webglDepthbuffer&&s.deleteRenderbuffer(I.__webglDepthbuffer),I.__webglMultisampledFramebuffer&&s.deleteFramebuffer(I.__webglMultisampledFramebuffer),I.__webglColorRenderbuffer)for(let N=0;N<I.__webglColorRenderbuffer.length;N++)I.__webglColorRenderbuffer[N]&&s.deleteRenderbuffer(I.__webglColorRenderbuffer[N]);I.__webglDepthRenderbuffer&&s.deleteRenderbuffer(I.__webglDepthRenderbuffer)}if(O.isWebGLMultipleRenderTargets)for(let N=0,D=Y.length;N<D;N++){let F=n.get(Y[N]);F.__webglTexture&&(s.deleteTexture(F.__webglTexture),a.memory.textures--),n.remove(Y[N])}n.remove(Y),n.remove(O)}(w)}function U(A){let w=n.get(A);s.deleteTexture(w.__webglTexture);let O=A.source;delete u.get(O)[w.__cacheKey],a.memory.textures--}let C=0;function L(A,w){let O=n.get(A);if(A.isVideoTexture&&function(Y){let I=a.render.frame;h.get(Y)!==I&&(h.set(Y,I),Y.update())}(A),A.isRenderTargetTexture===!1&&A.version>0&&O.__version!==A.version){let Y=A.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else{if(Y.complete!==!1)return void fe(O,A,w);console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")}}t.bindTexture(s.TEXTURE_2D,O.__webglTexture,s.TEXTURE0+w)}let B={[mn]:s.REPEAT,[dn]:s.CLAMP_TO_EDGE,[ls]:s.MIRRORED_REPEAT},P={[At]:s.NEAREST,[Aa]:s.NEAREST_MIPMAP_NEAREST,[ns]:s.NEAREST_MIPMAP_LINEAR,[Ft]:s.LINEAR,[Ic]:s.LINEAR_MIPMAP_NEAREST,[wi]:s.LINEAR_MIPMAP_LINEAR},G={512:s.NEVER,519:s.ALWAYS,513:s.LESS,515:s.LEQUAL,514:s.EQUAL,518:s.GEQUAL,516:s.GREATER,517:s.NOTEQUAL};function V(A,w,O){if(O?(s.texParameteri(A,s.TEXTURE_WRAP_S,B[w.wrapS]),s.texParameteri(A,s.TEXTURE_WRAP_T,B[w.wrapT]),A!==s.TEXTURE_3D&&A!==s.TEXTURE_2D_ARRAY||s.texParameteri(A,s.TEXTURE_WRAP_R,B[w.wrapR]),s.texParameteri(A,s.TEXTURE_MAG_FILTER,P[w.magFilter]),s.texParameteri(A,s.TEXTURE_MIN_FILTER,P[w.minFilter])):(s.texParameteri(A,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(A,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),A!==s.TEXTURE_3D&&A!==s.TEXTURE_2D_ARRAY||s.texParameteri(A,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),w.wrapS===dn&&w.wrapT===dn||console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(A,s.TEXTURE_MAG_FILTER,T(w.magFilter)),s.texParameteri(A,s.TEXTURE_MIN_FILTER,T(w.minFilter)),w.minFilter!==At&&w.minFilter!==Ft&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),w.compareFunction&&(s.texParameteri(A,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(A,s.TEXTURE_COMPARE_FUNC,G[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let Y=e.get("EXT_texture_filter_anisotropic");if(w.magFilter===At||w.minFilter!==ns&&w.minFilter!==wi||w.type===Dn&&e.has("OES_texture_float_linear")===!1||o===!1&&w.type===gn&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||n.get(w).__currentAnisotropy)&&(s.texParameterf(A,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy)}}function ae(A,w){let O=!1;A.__webglInit===void 0&&(A.__webglInit=!0,w.addEventListener("dispose",S));let Y=w.source,I=u.get(Y);I===void 0&&(I={},u.set(Y,I));let j=function(N){let D=[];return D.push(N.wrapS),D.push(N.wrapT),D.push(N.wrapR||0),D.push(N.magFilter),D.push(N.minFilter),D.push(N.anisotropy),D.push(N.internalFormat),D.push(N.format),D.push(N.type),D.push(N.generateMipmaps),D.push(N.premultiplyAlpha),D.push(N.flipY),D.push(N.unpackAlignment),D.push(N.colorSpace),D.join()}(w);if(j!==A.__cacheKey){I[j]===void 0&&(I[j]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,O=!0),I[j].usedTimes++;let N=I[A.__cacheKey];N!==void 0&&(I[A.__cacheKey].usedTimes--,N.usedTimes===0&&U(w)),A.__cacheKey=j,A.__webglTexture=I[j].texture}return O}function fe(A,w,O){let Y=s.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(Y=s.TEXTURE_2D_ARRAY),w.isData3DTexture&&(Y=s.TEXTURE_3D);let I=ae(A,w),j=w.source;t.bindTexture(Y,A.__webglTexture,s.TEXTURE0+O);let N=n.get(j);if(j.version!==N.__version||I===!0){t.activeTexture(s.TEXTURE0+O);let D=We.getPrimaries(We.workingColorSpace),F=w.colorSpace===Mn?null:We.getPrimaries(w.colorSpace),$=w.colorSpace===Mn||D===F?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,$);let J=function(ye){return!o&&(ye.wrapS!==dn||ye.wrapT!==dn||ye.minFilter!==At&&ye.minFilter!==Ft)}(w)&&m(w.image)===!1,b=g(w.image,J,!1,i.maxTextureSize);b=he(w,b);let ie=m(b)||o,z=r.convert(w.format,w.colorSpace),k,re=r.convert(w.type),ue=_(w.internalFormat,z,re,w.colorSpace,w.isVideoTexture);V(Y,w,ie);let pe=w.mipmaps,ve=o&&w.isVideoTexture!==!0&&ue!==Od,Re=N.__version===void 0||I===!0,_e=M(w,b,ie);if(w.isDepthTexture)ue=s.DEPTH_COMPONENT,o?ue=w.type===Dn?s.DEPTH_COMPONENT32F:w.type===Yn?s.DEPTH_COMPONENT24:w.type===bi?s.DEPTH24_STENCIL8:s.DEPTH_COMPONENT16:w.type===Dn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===Ei&&ue===s.DEPTH_COMPONENT&&w.type!==Uc&&w.type!==Yn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=Yn,re=r.convert(w.type)),w.format===Sr&&ue===s.DEPTH_COMPONENT&&(ue=s.DEPTH_STENCIL,w.type!==bi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=bi,re=r.convert(w.type))),Re&&(ve?t.texStorage2D(s.TEXTURE_2D,1,ue,b.width,b.height):t.texImage2D(s.TEXTURE_2D,0,ue,b.width,b.height,0,z,re,null));else if(w.isDataTexture)if(pe.length>0&&ie){ve&&Re&&t.texStorage2D(s.TEXTURE_2D,_e,ue,pe[0].width,pe[0].height);for(let ye=0,Pe=pe.length;ye<Pe;ye++)k=pe[ye],ve?t.texSubImage2D(s.TEXTURE_2D,ye,0,0,k.width,k.height,z,re,k.data):t.texImage2D(s.TEXTURE_2D,ye,ue,k.width,k.height,0,z,re,k.data);w.generateMipmaps=!1}else ve?(Re&&t.texStorage2D(s.TEXTURE_2D,_e,ue,b.width,b.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,b.width,b.height,z,re,b.data)):t.texImage2D(s.TEXTURE_2D,0,ue,b.width,b.height,0,z,re,b.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){ve&&Re&&t.texStorage3D(s.TEXTURE_2D_ARRAY,_e,ue,pe[0].width,pe[0].height,b.depth);for(let ye=0,Pe=pe.length;ye<Pe;ye++)k=pe[ye],w.format!==pn?z!==null?ve?t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ye,0,0,0,k.width,k.height,b.depth,z,k.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ye,ue,k.width,k.height,b.depth,0,k.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ve?t.texSubImage3D(s.TEXTURE_2D_ARRAY,ye,0,0,0,k.width,k.height,b.depth,z,re,k.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ye,ue,k.width,k.height,b.depth,0,z,re,k.data)}else{ve&&Re&&t.texStorage2D(s.TEXTURE_2D,_e,ue,pe[0].width,pe[0].height);for(let ye=0,Pe=pe.length;ye<Pe;ye++)k=pe[ye],w.format!==pn?z!==null?ve?t.compressedTexSubImage2D(s.TEXTURE_2D,ye,0,0,k.width,k.height,z,k.data):t.compressedTexImage2D(s.TEXTURE_2D,ye,ue,k.width,k.height,0,k.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ve?t.texSubImage2D(s.TEXTURE_2D,ye,0,0,k.width,k.height,z,re,k.data):t.texImage2D(s.TEXTURE_2D,ye,ue,k.width,k.height,0,z,re,k.data)}else if(w.isDataArrayTexture)ve?(Re&&t.texStorage3D(s.TEXTURE_2D_ARRAY,_e,ue,b.width,b.height,b.depth),t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,b.width,b.height,b.depth,z,re,b.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,ue,b.width,b.height,b.depth,0,z,re,b.data);else if(w.isData3DTexture)ve?(Re&&t.texStorage3D(s.TEXTURE_3D,_e,ue,b.width,b.height,b.depth),t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,b.width,b.height,b.depth,z,re,b.data)):t.texImage3D(s.TEXTURE_3D,0,ue,b.width,b.height,b.depth,0,z,re,b.data);else if(w.isFramebufferTexture){if(Re)if(ve)t.texStorage2D(s.TEXTURE_2D,_e,ue,b.width,b.height);else{let ye=b.width,Pe=b.height;for(let St=0;St<_e;St++)t.texImage2D(s.TEXTURE_2D,St,ue,ye,Pe,0,z,re,null),ye>>=1,Pe>>=1}}else if(pe.length>0&&ie){ve&&Re&&t.texStorage2D(s.TEXTURE_2D,_e,ue,pe[0].width,pe[0].height);for(let ye=0,Pe=pe.length;ye<Pe;ye++)k=pe[ye],ve?t.texSubImage2D(s.TEXTURE_2D,ye,0,0,z,re,k):t.texImage2D(s.TEXTURE_2D,ye,ue,z,re,k);w.generateMipmaps=!1}else ve?(Re&&t.texStorage2D(s.TEXTURE_2D,_e,ue,b.width,b.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,z,re,b)):t.texImage2D(s.TEXTURE_2D,0,ue,z,re,b);x(w,ie)&&v(Y),N.__version=j.version,w.onUpdate&&w.onUpdate(w)}A.__version=w.version}function ne(A,w,O,Y,I,j){let N=r.convert(O.format,O.colorSpace),D=r.convert(O.type),F=_(O.internalFormat,N,D,O.colorSpace);if(!n.get(w).__hasExternalTextures){let $=Math.max(1,w.width>>j),J=Math.max(1,w.height>>j);I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY?t.texImage3D(I,j,F,$,J,w.depth,0,N,D,null):t.texImage2D(I,j,F,$,J,0,N,D,null)}t.bindFramebuffer(s.FRAMEBUFFER,A),K(w)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Y,I,n.get(O).__webglTexture,0,H(w)):(I===s.TEXTURE_2D||I>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&I<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Y,I,n.get(O).__webglTexture,j),t.bindFramebuffer(s.FRAMEBUFFER,null)}function q(A,w,O){if(s.bindRenderbuffer(s.RENDERBUFFER,A),w.depthBuffer&&!w.stencilBuffer){let Y=o===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(O||K(w)){let I=w.depthTexture;I&&I.isDepthTexture&&(I.type===Dn?Y=s.DEPTH_COMPONENT32F:I.type===Yn&&(Y=s.DEPTH_COMPONENT24));let j=H(w);K(w)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,j,Y,w.width,w.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,j,Y,w.width,w.height)}else s.renderbufferStorage(s.RENDERBUFFER,Y,w.width,w.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,A)}else if(w.depthBuffer&&w.stencilBuffer){let Y=H(w);O&&K(w)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Y,s.DEPTH24_STENCIL8,w.width,w.height):K(w)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Y,s.DEPTH24_STENCIL8,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,A)}else{let Y=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let I=0;I<Y.length;I++){let j=Y[I],N=r.convert(j.format,j.colorSpace),D=r.convert(j.type),F=_(j.internalFormat,N,D,j.colorSpace),$=H(w);O&&K(w)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,$,F,w.width,w.height):K(w)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,$,F,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,F,w.width,w.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function te(A){let w=n.get(A),O=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!w.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");(function(Y,I){if(I&&I.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,Y),!I.depthTexture||!I.depthTexture.isDepthTexture)throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");n.get(I.depthTexture).__webglTexture&&I.depthTexture.image.width===I.width&&I.depthTexture.image.height===I.height||(I.depthTexture.image.width=I.width,I.depthTexture.image.height=I.height,I.depthTexture.needsUpdate=!0),L(I.depthTexture,0);let j=n.get(I.depthTexture).__webglTexture,N=H(I);if(I.depthTexture.format===Ei)K(I)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,j,0,N):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,j,0);else{if(I.depthTexture.format!==Sr)throw new Error("Unknown depthTexture format");K(I)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,j,0,N):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,j,0)}})(w.__webglFramebuffer,A)}else if(O){w.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[Y]),w.__webglDepthbuffer[Y]=s.createRenderbuffer(),q(w.__webglDepthbuffer[Y],A,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer=s.createRenderbuffer(),q(w.__webglDepthbuffer,A,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function H(A){return Math.min(i.maxSamples,A.samples)}function K(A){let w=n.get(A);return o&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function he(A,w){let O=A.colorSpace,Y=A.format,I=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===Dl||O!==xt&&O!==Mn&&(We.getTransfer(O)===Qe?o===!1?e.has("EXT_sRGB")===!0&&Y===pn?(A.format=Dl,A.minFilter=Ft,A.generateMipmaps=!1):w=Na.sRGBToLinear(w):Y===pn&&I===Si||console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),w}this.allocateTextureUnit=function(){let A=C;return A>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+i.maxTextures),C+=1,A},this.resetTextureUnits=function(){C=0},this.setTexture2D=L,this.setTexture2DArray=function(A,w){let O=n.get(A);A.version>0&&O.__version!==A.version?fe(O,A,w):t.bindTexture(s.TEXTURE_2D_ARRAY,O.__webglTexture,s.TEXTURE0+w)},this.setTexture3D=function(A,w){let O=n.get(A);A.version>0&&O.__version!==A.version?fe(O,A,w):t.bindTexture(s.TEXTURE_3D,O.__webglTexture,s.TEXTURE0+w)},this.setTextureCube=function(A,w){let O=n.get(A);A.version>0&&O.__version!==A.version?function(Y,I,j){if(I.image.length!==6)return;let N=ae(Y,I),D=I.source;t.bindTexture(s.TEXTURE_CUBE_MAP,Y.__webglTexture,s.TEXTURE0+j);let F=n.get(D);if(D.version!==F.__version||N===!0){t.activeTexture(s.TEXTURE0+j);let $=We.getPrimaries(We.workingColorSpace),J=I.colorSpace===Mn?null:We.getPrimaries(I.colorSpace),b=I.colorSpace===Mn||$===J?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,I.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,I.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,b);let ie=I.isCompressedTexture||I.image[0].isCompressedTexture,z=I.image[0]&&I.image[0].isDataTexture,k=[];for(let Se=0;Se<6;Se++)k[Se]=ie||z?z?I.image[Se].image:I.image[Se]:g(I.image[Se],!1,!0,i.maxCubemapSize),k[Se]=he(I,k[Se]);let re=k[0],ue=m(re)||o,pe=r.convert(I.format,I.colorSpace),ve=r.convert(I.type),Re=_(I.internalFormat,pe,ve,I.colorSpace),_e=o&&I.isVideoTexture!==!0,ye=F.__version===void 0||N===!0,Pe,St=M(I,re,ue);if(V(s.TEXTURE_CUBE_MAP,I,ue),ie){_e&&ye&&t.texStorage2D(s.TEXTURE_CUBE_MAP,St,Re,re.width,re.height);for(let Se=0;Se<6;Se++){Pe=k[Se].mipmaps;for(let Ge=0;Ge<Pe.length;Ge++){let De=Pe[Ge];I.format!==pn?pe!==null?_e?t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ge,0,0,De.width,De.height,pe,De.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ge,Re,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):_e?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ge,0,0,De.width,De.height,pe,ve,De.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ge,Re,De.width,De.height,0,pe,ve,De.data)}}}else{Pe=I.mipmaps,_e&&ye&&(Pe.length>0&&St++,t.texStorage2D(s.TEXTURE_CUBE_MAP,St,Re,k[0].width,k[0].height));for(let Se=0;Se<6;Se++)if(z){_e?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,k[Se].width,k[Se].height,pe,ve,k[Se].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,Re,k[Se].width,k[Se].height,0,pe,ve,k[Se].data);for(let Ge=0;Ge<Pe.length;Ge++){let De=Pe[Ge].image[Se].image;_e?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ge+1,0,0,De.width,De.height,pe,ve,De.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ge+1,Re,De.width,De.height,0,pe,ve,De.data)}}else{_e?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,pe,ve,k[Se]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,Re,pe,ve,k[Se]);for(let Ge=0;Ge<Pe.length;Ge++){let De=Pe[Ge];_e?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ge+1,0,0,pe,ve,De.image[Se]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ge+1,Re,pe,ve,De.image[Se])}}}x(I,ue)&&v(s.TEXTURE_CUBE_MAP),F.__version=D.version,I.onUpdate&&I.onUpdate(I)}Y.__version=I.version}(O,A,w):t.bindTexture(s.TEXTURE_CUBE_MAP,O.__webglTexture,s.TEXTURE0+w)},this.rebindTextures=function(A,w,O){let Y=n.get(A);w!==void 0&&ne(Y.__webglFramebuffer,A,A.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),O!==void 0&&te(A)},this.setupRenderTarget=function(A){let w=A.texture,O=n.get(A),Y=n.get(w);A.addEventListener("dispose",y),A.isWebGLMultipleRenderTargets!==!0&&(Y.__webglTexture===void 0&&(Y.__webglTexture=s.createTexture()),Y.__version=w.version,a.memory.textures++);let I=A.isWebGLCubeRenderTarget===!0,j=A.isWebGLMultipleRenderTargets===!0,N=m(A)||o;if(I){O.__webglFramebuffer=[];for(let D=0;D<6;D++)if(o&&w.mipmaps&&w.mipmaps.length>0){O.__webglFramebuffer[D]=[];for(let F=0;F<w.mipmaps.length;F++)O.__webglFramebuffer[D][F]=s.createFramebuffer()}else O.__webglFramebuffer[D]=s.createFramebuffer()}else{if(o&&w.mipmaps&&w.mipmaps.length>0){O.__webglFramebuffer=[];for(let D=0;D<w.mipmaps.length;D++)O.__webglFramebuffer[D]=s.createFramebuffer()}else O.__webglFramebuffer=s.createFramebuffer();if(j)if(i.drawBuffers){let D=A.texture;for(let F=0,$=D.length;F<$;F++){let J=n.get(D[F]);J.__webglTexture===void 0&&(J.__webglTexture=s.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&A.samples>0&&K(A)===!1){let D=j?w:[w];O.__webglMultisampledFramebuffer=s.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let F=0;F<D.length;F++){let $=D[F];O.__webglColorRenderbuffer[F]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,O.__webglColorRenderbuffer[F]);let J=r.convert($.format,$.colorSpace),b=r.convert($.type),ie=_($.internalFormat,J,b,$.colorSpace,A.isXRRenderTarget===!0),z=H(A);s.renderbufferStorageMultisample(s.RENDERBUFFER,z,ie,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+F,s.RENDERBUFFER,O.__webglColorRenderbuffer[F])}s.bindRenderbuffer(s.RENDERBUFFER,null),A.depthBuffer&&(O.__webglDepthRenderbuffer=s.createRenderbuffer(),q(O.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(I){t.bindTexture(s.TEXTURE_CUBE_MAP,Y.__webglTexture),V(s.TEXTURE_CUBE_MAP,w,N);for(let D=0;D<6;D++)if(o&&w.mipmaps&&w.mipmaps.length>0)for(let F=0;F<w.mipmaps.length;F++)ne(O.__webglFramebuffer[D][F],A,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+D,F);else ne(O.__webglFramebuffer[D],A,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+D,0);x(w,N)&&v(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(j){let D=A.texture;for(let F=0,$=D.length;F<$;F++){let J=D[F],b=n.get(J);t.bindTexture(s.TEXTURE_2D,b.__webglTexture),V(s.TEXTURE_2D,J,N),ne(O.__webglFramebuffer,A,J,s.COLOR_ATTACHMENT0+F,s.TEXTURE_2D,0),x(J,N)&&v(s.TEXTURE_2D)}t.unbindTexture()}else{let D=s.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(o?D=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(D,Y.__webglTexture),V(D,w,N),o&&w.mipmaps&&w.mipmaps.length>0)for(let F=0;F<w.mipmaps.length;F++)ne(O.__webglFramebuffer[F],A,w,s.COLOR_ATTACHMENT0,D,F);else ne(O.__webglFramebuffer,A,w,s.COLOR_ATTACHMENT0,D,0);x(w,N)&&v(D),t.unbindTexture()}A.depthBuffer&&te(A)},this.updateRenderTargetMipmap=function(A){let w=m(A)||o,O=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let Y=0,I=O.length;Y<I;Y++){let j=O[Y];if(x(j,w)){let N=A.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,D=n.get(j).__webglTexture;t.bindTexture(N,D),v(N),t.unbindTexture()}}},this.updateMultisampleRenderTarget=function(A){if(o&&A.samples>0&&K(A)===!1){let w=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],O=A.width,Y=A.height,I=s.COLOR_BUFFER_BIT,j=[],N=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,D=n.get(A),F=A.isWebGLMultipleRenderTargets===!0;if(F)for(let $=0;$<w.length;$++)t.bindFramebuffer(s.FRAMEBUFFER,D.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+$,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,D.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+$,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,D.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,D.__webglFramebuffer);for(let $=0;$<w.length;$++){j.push(s.COLOR_ATTACHMENT0+$),A.depthBuffer&&j.push(N);let J=D.__ignoreDepthValues!==void 0&&D.__ignoreDepthValues;if(J===!1&&(A.depthBuffer&&(I|=s.DEPTH_BUFFER_BIT),A.stencilBuffer&&(I|=s.STENCIL_BUFFER_BIT)),F&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,D.__webglColorRenderbuffer[$]),J===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[N]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[N])),F){let b=n.get(w[$]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,b,0)}s.blitFramebuffer(0,0,O,Y,0,0,O,Y,I,s.NEAREST),c&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,j)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),F)for(let $=0;$<w.length;$++){t.bindFramebuffer(s.FRAMEBUFFER,D.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+$,s.RENDERBUFFER,D.__webglColorRenderbuffer[$]);let J=n.get(w[$]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,D.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+$,s.TEXTURE_2D,J,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,D.__webglMultisampledFramebuffer)}},this.setupDepthRenderbuffer=te,this.setupFrameBufferTexture=ne,this.useMultisampledRTT=K}function Em(s,e,t){let n=t.isWebGL2;return{convert:function(i,r=""){let a,o=We.getTransfer(r);if(i===Si)return s.UNSIGNED_BYTE;if(i===Ld)return s.UNSIGNED_SHORT_4_4_4_4;if(i===Id)return s.UNSIGNED_SHORT_5_5_5_1;if(i===1010)return s.BYTE;if(i===1011)return s.SHORT;if(i===Uc)return s.UNSIGNED_SHORT;if(i===Pd)return s.INT;if(i===Yn)return s.UNSIGNED_INT;if(i===Dn)return s.FLOAT;if(i===gn)return n?s.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(i===1021)return s.ALPHA;if(i===pn)return s.RGBA;if(i===1024)return s.LUMINANCE;if(i===1025)return s.LUMINANCE_ALPHA;if(i===Ei)return s.DEPTH_COMPONENT;if(i===Sr)return s.DEPTH_STENCIL;if(i===Dl)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(i===1028)return s.RED;if(i===Ud)return s.RED_INTEGER;if(i===1030)return s.RG;if(i===Nd)return s.RG_INTEGER;if(i===Dd)return s.RGBA_INTEGER;if(i===Wo||i===Xo||i===jo||i===qo)if(o===Qe){if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a===null)return null;if(i===Wo)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Xo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===jo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===qo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{if(a=e.get("WEBGL_compressed_texture_s3tc"),a===null)return null;if(i===Wo)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Xo)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===jo)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===qo)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(i===kh||i===Vh||i===Wh||i===Xh){if(a=e.get("WEBGL_compressed_texture_pvrtc"),a===null)return null;if(i===kh)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Vh)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Wh)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Xh)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(i===Od)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(i===jh||i===qh){if(a=e.get("WEBGL_compressed_texture_etc"),a===null)return null;if(i===jh)return o===Qe?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===qh)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}if(i===Yh||i===Zh||i===Kh||i===Jh||i===Qh||i===$h||i===eu||i===tu||i===nu||i===iu||i===ru||i===su||i===au||i===ou){if(a=e.get("WEBGL_compressed_texture_astc"),a===null)return null;if(i===Yh)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Zh)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Kh)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Jh)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Qh)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===$h)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===eu)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===tu)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===nu)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===iu)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ru)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===su)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===au)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ou)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}if(i===Yo||i===lu||i===cu){if(a=e.get("EXT_texture_compression_bptc"),a===null)return null;if(i===Yo)return o===Qe?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===lu)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===cu)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}if(i===36283||i===hu||i===uu||i===du){if(a=e.get("EXT_texture_compression_rgtc"),a===null)return null;if(i===Yo)return a.COMPRESSED_RED_RGTC1_EXT;if(i===hu)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===uu)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===du)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}return i===bi?n?s.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[i]!==void 0?s[i]:null}}}var Kl=class extends pt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Ve=class extends tt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Tm={type:"move"},ss=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ve,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ve,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new E,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new E),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ve,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new E,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new E),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let g of e.hand.values()){let m=t.getJointPose(g,n),x=this._getHandJoint(c,g);m!==null&&(x.matrix.fromArray(m.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=m.radius),x.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),p=.02,f=.005;c.inputState.pinching&&u>p+f?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=p-f&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Tm)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Ve;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Jl=class extends On{constructor(e,t){super();let n=this,i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,p=null,f=null,g=t.getContextAttributes(),m=null,x=null,v=[],_=[],M=new ee,T=null,S=new pt;S.layers.enable(1),S.viewport=new $e;let y=new pt;y.layers.enable(2),y.viewport=new $e;let U=[S,y],C=new Kl;C.layers.enable(1),C.layers.enable(2);let L=null,B=null;function P(H){let K=_.indexOf(H.inputSource);if(K===-1)return;let he=v[K];he!==void 0&&(he.update(H.inputSource,H.frame,c||a),he.dispatchEvent({type:H.type,data:H.inputSource}))}function G(){i.removeEventListener("select",P),i.removeEventListener("selectstart",P),i.removeEventListener("selectend",P),i.removeEventListener("squeeze",P),i.removeEventListener("squeezestart",P),i.removeEventListener("squeezeend",P),i.removeEventListener("end",G),i.removeEventListener("inputsourceschange",V);for(let H=0;H<v.length;H++){let K=_[H];K!==null&&(_[H]=null,v[H].disconnect(K))}L=null,B=null,e.setRenderTarget(m),p=null,u=null,d=null,i=null,x=null,te.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(M.width,M.height,!1),n.dispatchEvent({type:"sessionend"})}function V(H){for(let K=0;K<H.removed.length;K++){let he=H.removed[K],A=_.indexOf(he);A>=0&&(_[A]=null,v[A].disconnect(he))}for(let K=0;K<H.added.length;K++){let he=H.added[K],A=_.indexOf(he);if(A===-1){for(let O=0;O<v.length;O++){if(O>=_.length){_.push(he),A=O;break}if(_[O]===null){_[O]=he,A=O;break}}if(A===-1)break}let w=v[A];w&&w.connect(he)}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let K=v[H];return K===void 0&&(K=new ss,v[H]=K),K.getTargetRaySpace()},this.getControllerGrip=function(H){let K=v[H];return K===void 0&&(K=new ss,v[H]=K),K.getGripSpace()},this.getHand=function(H){let K=v[H];return K===void 0&&(K=new ss,v[H]=K),K.getHandSpace()},this.setFramebufferScaleFactor=function(H){r=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){o=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d},this.getFrame=function(){return f},this.getSession=function(){return i},this.setSession=async function(H){if(i=H,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",P),i.addEventListener("selectstart",P),i.addEventListener("selectend",P),i.addEventListener("squeeze",P),i.addEventListener("squeezestart",P),i.addEventListener("squeezeend",P),i.addEventListener("end",G),i.addEventListener("inputsourceschange",V),g.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(M),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let K={antialias:i.renderState.layers!==void 0||g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,t,K),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new Ot(p.framebufferWidth,p.framebufferHeight,{format:pn,type:Si,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let K=null,he=null,A=null;g.depth&&(A=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,K=g.stencil?Sr:Ei,he=g.stencil?bi:Yn);let w={colorFormat:t.RGBA8,depthFormat:A,scaleFactor:r};d=new XRWebGLBinding(i,t),u=d.createProjectionLayer(w),i.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),x=new Ot(u.textureWidth,u.textureHeight,{format:pn,type:Si,depthTexture:new Ga(u.textureWidth,u.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0}),e.properties.get(x).__ignoreDepthValues=u.ignoreDepthValues}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),te.setContext(i),te.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};let ae=new E,fe=new E;function ne(H,K){K===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(K.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(i===null)return;C.near=y.near=S.near=H.near,C.far=y.far=S.far=H.far,L===C.near&&B===C.far||(i.updateRenderState({depthNear:C.near,depthFar:C.far}),L=C.near,B=C.far);let K=H.parent,he=C.cameras;ne(C,K);for(let A=0;A<he.length;A++)ne(he[A],K);he.length===2?function(A,w,O){ae.setFromMatrixPosition(w.matrixWorld),fe.setFromMatrixPosition(O.matrixWorld);let Y=ae.distanceTo(fe),I=w.projectionMatrix.elements,j=O.projectionMatrix.elements,N=I[14]/(I[10]-1),D=I[14]/(I[10]+1),F=(I[9]+1)/I[5],$=(I[9]-1)/I[5],J=(I[8]-1)/I[0],b=(j[8]+1)/j[0],ie=N*J,z=N*b,k=Y/(-J+b),re=k*-J;w.matrixWorld.decompose(A.position,A.quaternion,A.scale),A.translateX(re),A.translateZ(k),A.matrixWorld.compose(A.position,A.quaternion,A.scale),A.matrixWorldInverse.copy(A.matrixWorld).invert();let ue=N+k,pe=D+k,ve=ie-re,Re=z+(Y-re),_e=F*D/pe*ue,ye=$*D/pe*ue;A.projectionMatrix.makePerspective(ve,Re,_e,ye,ue,pe),A.projectionMatrixInverse.copy(A.projectionMatrix).invert()}(C,S,y):C.projectionMatrix.copy(S.projectionMatrix),function(A,w,O){O===null?A.matrix.copy(w.matrixWorld):(A.matrix.copy(O.matrixWorld),A.matrix.invert(),A.matrix.multiply(w.matrixWorld)),A.matrix.decompose(A.position,A.quaternion,A.scale),A.updateMatrixWorld(!0),A.projectionMatrix.copy(w.projectionMatrix),A.projectionMatrixInverse.copy(w.projectionMatrixInverse),A.isPerspectiveCamera&&(A.fov=2*Tr*Math.atan(1/A.projectionMatrix.elements[5]),A.zoom=1)}(H,C,K)},this.getCamera=function(){return C},this.getFoveation=function(){if(u!==null||p!==null)return l},this.setFoveation=function(H){l=H,u!==null&&(u.fixedFoveation=H),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=H)};let q=null,te=new Vd;te.setAnimationLoop(function(H,K){if(h=K.getViewerPose(c||a),f=K,h!==null){let he=h.views;p!==null&&(e.setRenderTargetFramebuffer(x,p.framebuffer),e.setRenderTarget(x));let A=!1;he.length!==C.cameras.length&&(C.cameras.length=0,A=!0);for(let w=0;w<he.length;w++){let O=he[w],Y=null;if(p!==null)Y=p.getViewport(O);else{let j=d.getViewSubImage(u,O);Y=j.viewport,w===0&&(e.setRenderTargetTextures(x,j.colorTexture,u.ignoreDepthValues?void 0:j.depthStencilTexture),e.setRenderTarget(x))}let I=U[w];I===void 0&&(I=new pt,I.layers.enable(w),I.viewport=new $e,U[w]=I),I.matrix.fromArray(O.transform.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale),I.projectionMatrix.fromArray(O.projectionMatrix),I.projectionMatrixInverse.copy(I.projectionMatrix).invert(),I.viewport.set(Y.x,Y.y,Y.width,Y.height),w===0&&(C.matrix.copy(I.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),A===!0&&C.cameras.push(I)}}for(let he=0;he<v.length;he++){let A=_[he],w=v[he];A!==null&&w!==void 0&&w.update(A,K,c||a)}q&&q(H,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),f=null}),this.setAnimationLoop=function(H){q=H},this.dispose=function(){}}};function wm(s,e){function t(i,r){i.matrixAutoUpdate===!0&&i.updateMatrix(),r.value.copy(i.matrix)}function n(i,r){i.opacity.value=r.opacity,r.color&&i.diffuse.value.copy(r.color),r.emissive&&i.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(i.map.value=r.map,t(r.map,i.mapTransform)),r.alphaMap&&(i.alphaMap.value=r.alphaMap,t(r.alphaMap,i.alphaMapTransform)),r.bumpMap&&(i.bumpMap.value=r.bumpMap,t(r.bumpMap,i.bumpMapTransform),i.bumpScale.value=r.bumpScale,r.side===Et&&(i.bumpScale.value*=-1)),r.normalMap&&(i.normalMap.value=r.normalMap,t(r.normalMap,i.normalMapTransform),i.normalScale.value.copy(r.normalScale),r.side===Et&&i.normalScale.value.negate()),r.displacementMap&&(i.displacementMap.value=r.displacementMap,t(r.displacementMap,i.displacementMapTransform),i.displacementScale.value=r.displacementScale,i.displacementBias.value=r.displacementBias),r.emissiveMap&&(i.emissiveMap.value=r.emissiveMap,t(r.emissiveMap,i.emissiveMapTransform)),r.specularMap&&(i.specularMap.value=r.specularMap,t(r.specularMap,i.specularMapTransform)),r.alphaTest>0&&(i.alphaTest.value=r.alphaTest);let a=e.get(r).envMap;if(a&&(i.envMap.value=a,i.flipEnvMap.value=a.isCubeTexture&&a.isRenderTargetTexture===!1?-1:1,i.reflectivity.value=r.reflectivity,i.ior.value=r.ior,i.refractionRatio.value=r.refractionRatio),r.lightMap){i.lightMap.value=r.lightMap;let o=s._useLegacyLights===!0?Math.PI:1;i.lightMapIntensity.value=r.lightMapIntensity*o,t(r.lightMap,i.lightMapTransform)}r.aoMap&&(i.aoMap.value=r.aoMap,i.aoMapIntensity.value=r.aoMapIntensity,t(r.aoMap,i.aoMapTransform))}return{refreshFogUniforms:function(i,r){r.color.getRGB(i.fogColor.value,kd(s)),r.isFog?(i.fogNear.value=r.near,i.fogFar.value=r.far):r.isFogExp2&&(i.fogDensity.value=r.density)},refreshMaterialUniforms:function(i,r,a,o,l){r.isMeshBasicMaterial||r.isMeshLambertMaterial?n(i,r):r.isMeshToonMaterial?(n(i,r),function(c,h){h.gradientMap&&(c.gradientMap.value=h.gradientMap)}(i,r)):r.isMeshPhongMaterial?(n(i,r),function(c,h){c.specular.value.copy(h.specular),c.shininess.value=Math.max(h.shininess,1e-4)}(i,r)):r.isMeshStandardMaterial?(n(i,r),function(c,h){c.metalness.value=h.metalness,h.metalnessMap&&(c.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,c.metalnessMapTransform)),c.roughness.value=h.roughness,h.roughnessMap&&(c.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,c.roughnessMapTransform)),e.get(h).envMap&&(c.envMapIntensity.value=h.envMapIntensity)}(i,r),r.isMeshPhysicalMaterial&&function(c,h,d){c.ior.value=h.ior,h.sheen>0&&(c.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),c.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(c.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,c.sheenColorMapTransform)),h.sheenRoughnessMap&&(c.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,c.sheenRoughnessMapTransform))),h.clearcoat>0&&(c.clearcoat.value=h.clearcoat,c.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(c.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,c.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(c.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,c.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(c.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,c.clearcoatNormalMapTransform),c.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Et&&c.clearcoatNormalScale.value.negate())),h.iridescence>0&&(c.iridescence.value=h.iridescence,c.iridescenceIOR.value=h.iridescenceIOR,c.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],c.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(c.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,c.iridescenceMapTransform)),h.iridescenceThicknessMap&&(c.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,c.iridescenceThicknessMapTransform))),h.transmission>0&&(c.transmission.value=h.transmission,c.transmissionSamplerMap.value=d.texture,c.transmissionSamplerSize.value.set(d.width,d.height),h.transmissionMap&&(c.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,c.transmissionMapTransform)),c.thickness.value=h.thickness,h.thicknessMap&&(c.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,c.thicknessMapTransform)),c.attenuationDistance.value=h.attenuationDistance,c.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(c.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(c.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,c.anisotropyMapTransform))),c.specularIntensity.value=h.specularIntensity,c.specularColor.value.copy(h.specularColor),h.specularColorMap&&(c.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,c.specularColorMapTransform)),h.specularIntensityMap&&(c.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,c.specularIntensityMapTransform))}(i,r,l)):r.isMeshMatcapMaterial?(n(i,r),function(c,h){h.matcap&&(c.matcap.value=h.matcap)}(i,r)):r.isMeshDepthMaterial?n(i,r):r.isMeshDistanceMaterial?(n(i,r),function(c,h){let d=e.get(h).light;c.referencePosition.value.setFromMatrixPosition(d.matrixWorld),c.nearDistance.value=d.shadow.camera.near,c.farDistance.value=d.shadow.camera.far}(i,r)):r.isMeshNormalMaterial?n(i,r):r.isLineBasicMaterial?(function(c,h){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,h.map&&(c.map.value=h.map,t(h.map,c.mapTransform))}(i,r),r.isLineDashedMaterial&&function(c,h){c.dashSize.value=h.dashSize,c.totalSize.value=h.dashSize+h.gapSize,c.scale.value=h.scale}(i,r)):r.isPointsMaterial?function(c,h,d,u){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,c.size.value=h.size*d,c.scale.value=.5*u,h.map&&(c.map.value=h.map,t(h.map,c.uvTransform)),h.alphaMap&&(c.alphaMap.value=h.alphaMap,t(h.alphaMap,c.alphaMapTransform)),h.alphaTest>0&&(c.alphaTest.value=h.alphaTest)}(i,r,a,o):r.isSpriteMaterial?function(c,h){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,c.rotation.value=h.rotation,h.map&&(c.map.value=h.map,t(h.map,c.mapTransform)),h.alphaMap&&(c.alphaMap.value=h.alphaMap,t(h.alphaMap,c.alphaMapTransform)),h.alphaTest>0&&(c.alphaTest.value=h.alphaTest)}(i,r):r.isShadowMaterial?(i.color.value.copy(r.color),i.opacity.value=r.opacity):r.isShaderMaterial&&(r.uniformsNeedUpdate=!1)}}}function Am(s,e,t,n){let i={},r={},a=[],o=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(d,u,p,f){let g=d.value,m=u+"_"+p;if(f[m]===void 0)return f[m]=typeof g=="number"||typeof g=="boolean"?g:g.clone(),!0;{let x=f[m];if(typeof g=="number"||typeof g=="boolean"){if(x!==g)return f[m]=g,!0}else if(x.equals(g)===!1)return x.copy(g),!0}return!1}function c(d){let u={boundary:0,storage:0};return typeof d=="number"||typeof d=="boolean"?(u.boundary=4,u.storage=4):d.isVector2?(u.boundary=8,u.storage=8):d.isVector3||d.isColor?(u.boundary=16,u.storage=12):d.isVector4?(u.boundary=16,u.storage=16):d.isMatrix3?(u.boundary=48,u.storage=48):d.isMatrix4?(u.boundary=64,u.storage=64):d.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",d),u}function h(d){let u=d.target;u.removeEventListener("dispose",h);let p=a.indexOf(u.__bindingPointIndex);a.splice(p,1),s.deleteBuffer(i[u.id]),delete i[u.id],delete r[u.id]}return{bind:function(d,u){let p=u.program;n.uniformBlockBinding(d,p)},update:function(d,u){let p=i[d.id];p===void 0&&(function(m){let x=m.uniforms,v=0,_=16;for(let T=0,S=x.length;T<S;T++){let y=Array.isArray(x[T])?x[T]:[x[T]];for(let U=0,C=y.length;U<C;U++){let L=y[U],B=Array.isArray(L.value)?L.value:[L.value];for(let P=0,G=B.length;P<G;P++){let V=c(B[P]),ae=v%_;ae!==0&&_-ae<V.boundary&&(v+=_-ae),L.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=v,v+=V.storage}}}let M=v%_;M>0&&(v+=_-M),m.__size=v,m.__cache={}}(d),p=function(m){let x=function(){for(let T=0;T<o;T++)if(a.indexOf(T)===-1)return a.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}();m.__bindingPointIndex=x;let v=s.createBuffer(),_=m.__size,M=m.usage;return s.bindBuffer(s.UNIFORM_BUFFER,v),s.bufferData(s.UNIFORM_BUFFER,_,M),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,x,v),v}(d),i[d.id]=p,d.addEventListener("dispose",h));let f=u.program;n.updateUBOMapping(d,f);let g=e.render.frame;r[d.id]!==g&&(function(m){let x=i[m.id],v=m.uniforms,_=m.__cache;s.bindBuffer(s.UNIFORM_BUFFER,x);for(let M=0,T=v.length;M<T;M++){let S=Array.isArray(v[M])?v[M]:[v[M]];for(let y=0,U=S.length;y<U;y++){let C=S[y];if(l(C,M,y,_)===!0){let L=C.__offset,B=Array.isArray(C.value)?C.value:[C.value],P=0;for(let G=0;G<B.length;G++){let V=B[G],ae=c(V);typeof V=="number"||typeof V=="boolean"?(C.__data[0]=V,s.bufferSubData(s.UNIFORM_BUFFER,L+P,C.__data)):V.isMatrix3?(C.__data[0]=V.elements[0],C.__data[1]=V.elements[1],C.__data[2]=V.elements[2],C.__data[3]=0,C.__data[4]=V.elements[3],C.__data[5]=V.elements[4],C.__data[6]=V.elements[5],C.__data[7]=0,C.__data[8]=V.elements[6],C.__data[9]=V.elements[7],C.__data[10]=V.elements[8],C.__data[11]=0):(V.toArray(C.__data,P),P+=ae.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,L,C.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}(d),r[d.id]=g)},dispose:function(){for(let d in i)s.deleteBuffer(i[d]);a=[],i={},r={}}}}var Pr=class{constructor(e={}){let{canvas:t=Op(),context:n=null,depth:i=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=e,u;this.isWebGLRenderer=!0,u=n!==null?n.getContextAttributes().alpha:a;let p=new Uint32Array(4),f=new Int32Array(4),g=null,m=null,x=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=qe,this._useLegacyLights=!1,this.toneMapping=Jn,this.toneMappingExposure=1;let _=this,M=!1,T=0,S=0,y=null,U=-1,C=null,L=new $e,B=new $e,P=null,G=new xe(0),V=0,ae=t.width,fe=t.height,ne=1,q=null,te=null,H=new $e(0,0,ae,fe),K=new $e(0,0,ae,fe),he=!1,A=new Cr,w=!1,O=!1,Y=null,I=new be,j=new ee,N=new E,D={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function F(){return y===null?ne:1}let $,J,b,ie,z,k,re,ue,pe,ve,Re,_e,ye,Pe,St,Se,Ge,De,Fs,Xi,Hs,Yt,Wt,ji,X=n;function zs(R,W){for(let Z=0;Z<R.length;Z++){let se=R[Z],Q=t.getContext(se,W);if(Q!==null)return Q}return null}try{let R={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Cl}`),t.addEventListener("webglcontextlost",Th,!1),t.addEventListener("webglcontextrestored",wh,!1),t.addEventListener("webglcontextcreationerror",Ah,!1),X===null){let W=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&W.shift(),X=zs(W,R),X===null)throw zs(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&X instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),X.getShaderPrecisionFormat===void 0&&(X.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}function kr(){$=new lf(X),J=new rf(X,$,e),$.init(J),Yt=new Em(X,$,J),b=new Sm(X,$,J),ie=new uf(X),z=new pm,k=new bm(X,$,b,z,J,Yt,ie),re=new af(_),ue=new of(_),pe=new $p(X,J),Wt=new tf(X,$,pe,J),ve=new cf(X,pe,ie,Wt),Re=new mf(X,ve,pe,ie),Fs=new ff(X,J,k),Se=new sf(z),_e=new dm(_,re,ue,$,J,Wt,Se),ye=new wm(_,z),Pe=new mm,St=new ym($,J),De=new ef(_,re,ue,b,Re,u,l),Ge=new Mm(_,Re,J),ji=new Am(X,ie,J,b),Xi=new nf(X,$,ie,J),Hs=new hf(X,$,ie,J),ie.programs=_e.programs,_.capabilities=J,_.extensions=$,_.properties=z,_.renderLists=Pe,_.shadowMap=Ge,_.state=b,_.info=ie}kr();let Pt=new Jl(_,X);function Th(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function wh(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;let R=ie.autoReset,W=Ge.enabled,Z=Ge.autoUpdate,se=Ge.needsUpdate,Q=Ge.type;kr(),ie.autoReset=R,Ge.enabled=W,Ge.autoUpdate=Z,Ge.needsUpdate=se,Ge.type=Q}function Ah(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Rh(R){let W=R.target;W.removeEventListener("dispose",Rh),function(Z){(function(se){let Q=z.get(se).programs;Q!==void 0&&(Q.forEach(function(de){_e.releaseProgram(de)}),se.isShaderMaterial&&_e.releaseShaderCache(se))})(Z),z.remove(Z)}(W)}function Ch(R,W,Z){R.transparent===!0&&R.side===2&&R.forceSinglePass===!1?(R.side=Et,R.needsUpdate=!0,ks(R,W,Z),R.side=bn,R.needsUpdate=!0,ks(R,W,Z),R.side=2):ks(R,W,Z)}this.xr=Pt,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){let R=$.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=$.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(R){R!==void 0&&(ne=R,this.setSize(ae,fe,!1))},this.getSize=function(R){return R.set(ae,fe)},this.setSize=function(R,W,Z=!0){Pt.isPresenting?console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting."):(ae=R,fe=W,t.width=Math.floor(R*ne),t.height=Math.floor(W*ne),Z===!0&&(t.style.width=R+"px",t.style.height=W+"px"),this.setViewport(0,0,R,W))},this.getDrawingBufferSize=function(R){return R.set(ae*ne,fe*ne).floor()},this.setDrawingBufferSize=function(R,W,Z){ae=R,fe=W,ne=Z,t.width=Math.floor(R*Z),t.height=Math.floor(W*Z),this.setViewport(0,0,R,W)},this.getCurrentViewport=function(R){return R.copy(L)},this.getViewport=function(R){return R.copy(H)},this.setViewport=function(R,W,Z,se){R.isVector4?H.set(R.x,R.y,R.z,R.w):H.set(R,W,Z,se),b.viewport(L.copy(H).multiplyScalar(ne).floor())},this.getScissor=function(R){return R.copy(K)},this.setScissor=function(R,W,Z,se){R.isVector4?K.set(R.x,R.y,R.z,R.w):K.set(R,W,Z,se),b.scissor(B.copy(K).multiplyScalar(ne).floor())},this.getScissorTest=function(){return he},this.setScissorTest=function(R){b.setScissorTest(he=R)},this.setOpaqueSort=function(R){q=R},this.setTransparentSort=function(R){te=R},this.getClearColor=function(R){return R.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor.apply(De,arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha.apply(De,arguments)},this.clear=function(R=!0,W=!0,Z=!0){let se=0;if(R){let Q=!1;if(y!==null){let de=y.texture.format;Q=de===Dd||de===Nd||de===Ud}if(Q){let de=y.texture.type,we=de===Si||de===Yn||de===Uc||de===bi||de===Ld||de===Id,Ae=De.getClearColor(),Le=De.getClearAlpha(),Ne=Ae.r,Oe=Ae.g,Fe=Ae.b;we?(p[0]=Ne,p[1]=Oe,p[2]=Fe,p[3]=Le,X.clearBufferuiv(X.COLOR,0,p)):(f[0]=Ne,f[1]=Oe,f[2]=Fe,f[3]=Le,X.clearBufferiv(X.COLOR,0,f))}else se|=X.COLOR_BUFFER_BIT}W&&(se|=X.DEPTH_BUFFER_BIT),Z&&(se|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X.clear(se)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Th,!1),t.removeEventListener("webglcontextrestored",wh,!1),t.removeEventListener("webglcontextcreationerror",Ah,!1),Pe.dispose(),St.dispose(),z.dispose(),re.dispose(),ue.dispose(),Re.dispose(),Wt.dispose(),ji.dispose(),_e.dispose(),Pt.dispose(),Pt.removeEventListener("sessionstart",Ph),Pt.removeEventListener("sessionend",Lh),Y&&(Y.dispose(),Y=null),di.stop()},this.renderBufferDirect=function(R,W,Z,se,Q,de){W===null&&(W=D);let we=Q.isMesh&&Q.matrixWorld.determinant()<0,Ae=function(vt,Zt,Bt,He,ke){Zt.isScene!==!0&&(Zt=D),k.resetTextureUnits();let Vr=Zt.fog,zo=He.isMeshStandardMaterial?Zt.environment:null,Mp=y===null?_.outputColorSpace:y.isXRRenderTarget===!0?y.texture.colorSpace:xt,Vs=(He.isMeshStandardMaterial?ue:re).get(He.envMap||zo),Sp=He.vertexColors===!0&&!!Bt.attributes.color&&Bt.attributes.color.itemSize===4,bp=!!Bt.attributes.tangent&&(!!He.normalMap||He.anisotropy>0),Ep=!!Bt.morphAttributes.position,Tp=!!Bt.morphAttributes.normal,wp=!!Bt.morphAttributes.color,Bh=Jn;He.toneMapped&&(y!==null&&y.isXRRenderTarget!==!0||(Bh=_.toneMapping));let Fh=Bt.morphAttributes.position||Bt.morphAttributes.normal||Bt.morphAttributes.color,Ap=Fh!==void 0?Fh.length:0,Xe=z.get(He),Rp=m.state.lights;if(w===!0&&(O===!0||vt!==C)){let Kt=vt===C&&He.id===U;Se.setState(He,vt,Kt)}let on=!1;He.version===Xe.__version?Xe.needsLights&&Xe.lightsStateVersion!==Rp.state.version||Xe.outputColorSpace!==Mp||ke.isBatchedMesh&&Xe.batching===!1?on=!0:ke.isBatchedMesh||Xe.batching!==!0?ke.isInstancedMesh&&Xe.instancing===!1?on=!0:ke.isInstancedMesh||Xe.instancing!==!0?ke.isSkinnedMesh&&Xe.skinning===!1?on=!0:ke.isSkinnedMesh||Xe.skinning!==!0?ke.isInstancedMesh&&Xe.instancingColor===!0&&ke.instanceColor===null||ke.isInstancedMesh&&Xe.instancingColor===!1&&ke.instanceColor!==null||Xe.envMap!==Vs||He.fog===!0&&Xe.fog!==Vr?on=!0:Xe.numClippingPlanes===void 0||Xe.numClippingPlanes===Se.numPlanes&&Xe.numIntersection===Se.numIntersection?(Xe.vertexAlphas!==Sp||Xe.vertexTangents!==bp||Xe.morphTargets!==Ep||Xe.morphNormals!==Tp||Xe.morphColors!==wp||Xe.toneMapping!==Bh||J.isWebGL2===!0&&Xe.morphTargetsCount!==Ap)&&(on=!0):on=!0:on=!0:on=!0:on=!0:(on=!0,Xe.__version=He.version);let fi=Xe.currentProgram;on===!0&&(fi=ks(He,Zt,ke));let Hh=!1,Wr=!1,Go=!1,Lt=fi.getUniforms(),mi=Xe.uniforms;if(b.useProgram(fi.program)&&(Hh=!0,Wr=!0,Go=!0),He.id!==U&&(U=He.id,Wr=!0),Hh||C!==vt){Lt.setValue(X,"projectionMatrix",vt.projectionMatrix),Lt.setValue(X,"viewMatrix",vt.matrixWorldInverse);let Kt=Lt.map.cameraPosition;Kt!==void 0&&Kt.setValue(X,N.setFromMatrixPosition(vt.matrixWorld)),J.logarithmicDepthBuffer&&Lt.setValue(X,"logDepthBufFC",2/(Math.log(vt.far+1)/Math.LN2)),(He.isMeshPhongMaterial||He.isMeshToonMaterial||He.isMeshLambertMaterial||He.isMeshBasicMaterial||He.isMeshStandardMaterial||He.isShaderMaterial)&&Lt.setValue(X,"isOrthographic",vt.isOrthographicCamera===!0),C!==vt&&(C=vt,Wr=!0,Go=!0)}if(ke.isSkinnedMesh){Lt.setOptional(X,ke,"bindMatrix"),Lt.setOptional(X,ke,"bindMatrixInverse");let Kt=ke.skeleton;Kt&&(J.floatVertexTextures?(Kt.boneTexture===null&&Kt.computeBoneTexture(),Lt.setValue(X,"boneTexture",Kt.boneTexture,k)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}ke.isBatchedMesh&&(Lt.setOptional(X,ke,"batchingTexture"),Lt.setValue(X,"batchingTexture",ke._matricesTexture,k));let ko=Bt.morphAttributes;(ko.position!==void 0||ko.normal!==void 0||ko.color!==void 0&&J.isWebGL2===!0)&&Fs.update(ke,Bt,fi),(Wr||Xe.receiveShadow!==ke.receiveShadow)&&(Xe.receiveShadow=ke.receiveShadow,Lt.setValue(X,"receiveShadow",ke.receiveShadow)),He.isMeshGouraudMaterial&&He.envMap!==null&&(mi.envMap.value=Vs,mi.flipEnvMap.value=Vs.isCubeTexture&&Vs.isRenderTargetTexture===!1?-1:1),Wr&&(Lt.setValue(X,"toneMappingExposure",_.toneMappingExposure),Xe.needsLights&&(ln=Go,(xn=mi).ambientLightColor.needsUpdate=ln,xn.lightProbe.needsUpdate=ln,xn.directionalLights.needsUpdate=ln,xn.directionalLightShadows.needsUpdate=ln,xn.pointLights.needsUpdate=ln,xn.pointLightShadows.needsUpdate=ln,xn.spotLights.needsUpdate=ln,xn.spotLightShadows.needsUpdate=ln,xn.rectAreaLights.needsUpdate=ln,xn.hemisphereLights.needsUpdate=ln),Vr&&He.fog===!0&&ye.refreshFogUniforms(mi,Vr),ye.refreshMaterialUniforms(mi,He,ne,fe,Y),xr.upload(X,Dh(Xe),mi,k));var xn,ln;if(He.isShaderMaterial&&He.uniformsNeedUpdate===!0&&(xr.upload(X,Dh(Xe),mi,k),He.uniformsNeedUpdate=!1),He.isSpriteMaterial&&Lt.setValue(X,"center",ke.center),Lt.setValue(X,"modelViewMatrix",ke.modelViewMatrix),Lt.setValue(X,"normalMatrix",ke.normalMatrix),Lt.setValue(X,"modelMatrix",ke.matrixWorld),He.isShaderMaterial||He.isRawShaderMaterial){let Kt=He.uniformsGroups;for(let Vo=0,Cp=Kt.length;Vo<Cp;Vo++)if(J.isWebGL2){let zh=Kt[Vo];ji.update(zh,fi),ji.bind(zh,fi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return fi}(R,W,Z,se,Q);b.setMaterial(se,we);let Le=Z.index,Ne=1;if(se.wireframe===!0){if(Le=ve.getWireframeAttribute(Z),Le===void 0)return;Ne=2}let Oe=Z.drawRange,Fe=Z.attributes.position,at=Oe.start*Ne,an=(Oe.start+Oe.count)*Ne;de!==null&&(at=Math.max(at,de.start*Ne),an=Math.min(an,(de.start+de.count)*Ne)),Le!==null?(at=Math.max(at,0),an=Math.min(an,Le.count)):Fe!=null&&(at=Math.max(at,0),an=Math.min(an,Fe.count));let wn=an-at;if(wn<0||wn===1/0)return;let pi;Wt.setup(Q,se,Ae,Z,Le);let ot=Xi;if(Le!==null&&(pi=pe.get(Le),ot=Hs,ot.setIndex(pi)),Q.isMesh)se.wireframe===!0?(b.setLineWidth(se.wireframeLinewidth*F()),ot.setMode(X.LINES)):ot.setMode(X.TRIANGLES);else if(Q.isLine){let vt=se.linewidth;vt===void 0&&(vt=1),b.setLineWidth(vt*F()),Q.isLineSegments?ot.setMode(X.LINES):Q.isLineLoop?ot.setMode(X.LINE_LOOP):ot.setMode(X.LINE_STRIP)}else Q.isPoints?ot.setMode(X.POINTS):Q.isSprite&&ot.setMode(X.TRIANGLES);if(Q.isBatchedMesh)ot.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else if(Q.isInstancedMesh)ot.renderInstances(at,wn,Q.count);else if(Z.isInstancedBufferGeometry){let vt=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Zt=Math.min(Z.instanceCount,vt);ot.renderInstances(at,wn,Zt)}else ot.render(at,wn)},this.compile=function(R,W,Z=null){Z===null&&(Z=R),m=St.get(Z),m.init(),v.push(m),Z.traverseVisible(function(Q){Q.isLight&&Q.layers.test(W.layers)&&(m.pushLight(Q),Q.castShadow&&m.pushShadow(Q))}),R!==Z&&R.traverseVisible(function(Q){Q.isLight&&Q.layers.test(W.layers)&&(m.pushLight(Q),Q.castShadow&&m.pushShadow(Q))}),m.setupLights(_._useLegacyLights);let se=new Set;return R.traverse(function(Q){let de=Q.material;if(de)if(Array.isArray(de))for(let we=0;we<de.length;we++){let Ae=de[we];Ch(Ae,Z,Q),se.add(Ae)}else Ch(de,Z,Q),se.add(de)}),v.pop(),m=null,se},this.compileAsync=function(R,W,Z=null){let se=this.compile(R,W,Z);return new Promise(Q=>{function de(){se.forEach(function(we){z.get(we).currentProgram.isReady()&&se.delete(we)}),se.size!==0?setTimeout(de,10):Q(R)}$.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let Ho=null;function Ph(){di.stop()}function Lh(){di.start()}let di=new Vd;function Ih(R,W,Z,se){if(R.visible===!1)return;if(R.layers.test(W.layers)){if(R.isGroup)Z=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(W);else if(R.isLight)m.pushLight(R),R.castShadow&&m.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||A.intersectsSprite(R)){se&&N.setFromMatrixPosition(R.matrixWorld).applyMatrix4(I);let de=Re.update(R),we=R.material;we.visible&&g.push(R,de,we,Z,N.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||A.intersectsObject(R))){let de=Re.update(R),we=R.material;if(se&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),N.copy(R.boundingSphere.center)):(de.boundingSphere===null&&de.computeBoundingSphere(),N.copy(de.boundingSphere.center)),N.applyMatrix4(R.matrixWorld).applyMatrix4(I)),Array.isArray(we)){let Ae=de.groups;for(let Le=0,Ne=Ae.length;Le<Ne;Le++){let Oe=Ae[Le],Fe=we[Oe.materialIndex];Fe&&Fe.visible&&g.push(R,de,Fe,Z,N.z,Oe)}}else we.visible&&g.push(R,de,we,Z,N.z,null)}}let Q=R.children;for(let de=0,we=Q.length;de<we;de++)Ih(Q[de],W,Z,se)}function Uh(R,W,Z,se){let Q=R.opaque,de=R.transmissive,we=R.transparent;m.setupLightsView(Z),w===!0&&Se.setGlobalState(_.clippingPlanes,Z),de.length>0&&function(Ae,Le,Ne,Oe){if((Ne.isScene===!0?Ne.overrideMaterial:null)!==null)return;let at=J.isWebGL2;Y===null&&(Y=new Ot(1,1,{generateMipmaps:!0,type:$.has("EXT_color_buffer_half_float")?gn:Si,minFilter:wi,samples:at?4:0})),_.getDrawingBufferSize(j),at?Y.setSize(j.x,j.y):Y.setSize(Ua(j.x),Ua(j.y));let an=_.getRenderTarget();_.setRenderTarget(Y),_.getClearColor(G),V=_.getClearAlpha(),V<1&&_.setClearColor(16777215,.5),_.clear();let wn=_.toneMapping;_.toneMapping=Jn,Gs(Ae,Ne,Oe),k.updateMultisampleRenderTarget(Y),k.updateRenderTargetMipmap(Y);let pi=!1;for(let ot=0,vt=Le.length;ot<vt;ot++){let Zt=Le[ot],Bt=Zt.object,He=Zt.geometry,ke=Zt.material,Vr=Zt.group;if(ke.side===2&&Bt.layers.test(Oe.layers)){let zo=ke.side;ke.side=Et,ke.needsUpdate=!0,Nh(Bt,Ne,Oe,He,ke,Vr),ke.side=zo,ke.needsUpdate=!0,pi=!0}}pi===!0&&(k.updateMultisampleRenderTarget(Y),k.updateRenderTargetMipmap(Y)),_.setRenderTarget(an),_.setClearColor(G,V),_.toneMapping=wn}(Q,de,W,Z),se&&b.viewport(L.copy(se)),Q.length>0&&Gs(Q,W,Z),de.length>0&&Gs(de,W,Z),we.length>0&&Gs(we,W,Z),b.buffers.depth.setTest(!0),b.buffers.depth.setMask(!0),b.buffers.color.setMask(!0),b.setPolygonOffset(!1)}function Gs(R,W,Z){let se=W.isScene===!0?W.overrideMaterial:null;for(let Q=0,de=R.length;Q<de;Q++){let we=R[Q],Ae=we.object,Le=we.geometry,Ne=se===null?we.material:se,Oe=we.group;Ae.layers.test(Z.layers)&&Nh(Ae,W,Z,Le,Ne,Oe)}}function Nh(R,W,Z,se,Q,de){R.onBeforeRender(_,W,Z,se,Q,de),R.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Q.onBeforeRender(_,W,Z,se,R,de),Q.transparent===!0&&Q.side===2&&Q.forceSinglePass===!1?(Q.side=Et,Q.needsUpdate=!0,_.renderBufferDirect(Z,W,se,Q,R,de),Q.side=bn,Q.needsUpdate=!0,_.renderBufferDirect(Z,W,se,Q,R,de),Q.side=2):_.renderBufferDirect(Z,W,se,Q,R,de),R.onAfterRender(_,W,Z,se,Q,de)}function ks(R,W,Z){W.isScene!==!0&&(W=D);let se=z.get(R),Q=m.state.lights,de=m.state.shadowsArray,we=Q.state.version,Ae=_e.getParameters(R,Q.state,de,W,Z),Le=_e.getProgramCacheKey(Ae),Ne=se.programs;se.environment=R.isMeshStandardMaterial?W.environment:null,se.fog=W.fog,se.envMap=(R.isMeshStandardMaterial?ue:re).get(R.envMap||se.environment),Ne===void 0&&(R.addEventListener("dispose",Rh),Ne=new Map,se.programs=Ne);let Oe=Ne.get(Le);if(Oe!==void 0){if(se.currentProgram===Oe&&se.lightsStateVersion===we)return Oh(R,Ae),Oe}else Ae.uniforms=_e.getUniforms(R),R.onBuild(Z,Ae,_),R.onBeforeCompile(Ae,_),Oe=_e.acquireProgram(Ae,Le),Ne.set(Le,Oe),se.uniforms=Ae.uniforms;let Fe=se.uniforms;return(R.isShaderMaterial||R.isRawShaderMaterial)&&R.clipping!==!0||(Fe.clippingPlanes=Se.uniform),Oh(R,Ae),se.needsLights=function(at){return at.isMeshLambertMaterial||at.isMeshToonMaterial||at.isMeshPhongMaterial||at.isMeshStandardMaterial||at.isShadowMaterial||at.isShaderMaterial&&at.lights===!0}(R),se.lightsStateVersion=we,se.needsLights&&(Fe.ambientLightColor.value=Q.state.ambient,Fe.lightProbe.value=Q.state.probe,Fe.directionalLights.value=Q.state.directional,Fe.directionalLightShadows.value=Q.state.directionalShadow,Fe.spotLights.value=Q.state.spot,Fe.spotLightShadows.value=Q.state.spotShadow,Fe.rectAreaLights.value=Q.state.rectArea,Fe.ltc_1.value=Q.state.rectAreaLTC1,Fe.ltc_2.value=Q.state.rectAreaLTC2,Fe.pointLights.value=Q.state.point,Fe.pointLightShadows.value=Q.state.pointShadow,Fe.hemisphereLights.value=Q.state.hemi,Fe.directionalShadowMap.value=Q.state.directionalShadowMap,Fe.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Fe.spotShadowMap.value=Q.state.spotShadowMap,Fe.spotLightMatrix.value=Q.state.spotLightMatrix,Fe.spotLightMap.value=Q.state.spotLightMap,Fe.pointShadowMap.value=Q.state.pointShadowMap,Fe.pointShadowMatrix.value=Q.state.pointShadowMatrix),se.currentProgram=Oe,se.uniformsList=null,Oe}function Dh(R){if(R.uniformsList===null){let W=R.currentProgram.getUniforms();R.uniformsList=xr.seqWithValue(W.seq,R.uniforms)}return R.uniformsList}function Oh(R,W){let Z=z.get(R);Z.outputColorSpace=W.outputColorSpace,Z.batching=W.batching,Z.instancing=W.instancing,Z.instancingColor=W.instancingColor,Z.skinning=W.skinning,Z.morphTargets=W.morphTargets,Z.morphNormals=W.morphNormals,Z.morphColors=W.morphColors,Z.morphTargetsCount=W.morphTargetsCount,Z.numClippingPlanes=W.numClippingPlanes,Z.numIntersection=W.numClipIntersection,Z.vertexAlphas=W.vertexAlphas,Z.vertexTangents=W.vertexTangents,Z.toneMapping=W.toneMapping}di.setAnimationLoop(function(R){Ho&&Ho(R)}),typeof self<"u"&&di.setContext(self),this.setAnimationLoop=function(R){Ho=R,Pt.setAnimationLoop(R),R===null?di.stop():di.start()},Pt.addEventListener("sessionstart",Ph),Pt.addEventListener("sessionend",Lh),this.render=function(R,W){if(W!==void 0&&W.isCamera!==!0)return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");if(M===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Pt.enabled===!0&&Pt.isPresenting===!0&&(Pt.cameraAutoUpdate===!0&&Pt.updateCamera(W),W=Pt.getCamera()),R.isScene===!0&&R.onBeforeRender(_,R,W,y),m=St.get(R,v.length),m.init(),v.push(m),I.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),A.setFromProjectionMatrix(I),O=this.localClippingEnabled,w=Se.init(this.clippingPlanes,O),g=Pe.get(R,x.length),g.init(),x.push(g),Ih(R,W,0,_.sortObjects),g.finish(),_.sortObjects===!0&&g.sort(q,te),this.info.render.frame++,w===!0&&Se.beginShadows();let Z=m.state.shadowsArray;if(Ge.render(Z,R,W),w===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset(),De.render(g,R),m.setupLights(_._useLegacyLights),W.isArrayCamera){let se=W.cameras;for(let Q=0,de=se.length;Q<de;Q++){let we=se[Q];Uh(g,R,we,we.viewport)}}else Uh(g,R,W);y!==null&&(k.updateMultisampleRenderTarget(y),k.updateRenderTargetMipmap(y)),R.isScene===!0&&R.onAfterRender(_,R,W),Wt.resetDefaultState(),U=-1,C=null,v.pop(),m=v.length>0?v[v.length-1]:null,x.pop(),g=x.length>0?x[x.length-1]:null},this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return y},this.setRenderTargetTextures=function(R,W,Z){z.get(R.texture).__webglTexture=W,z.get(R.depthTexture).__webglTexture=Z;let se=z.get(R);se.__hasExternalTextures=!0,se.__hasExternalTextures&&(se.__autoAllocateDepthBuffer=Z===void 0,se.__autoAllocateDepthBuffer||$.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),se.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(R,W){let Z=z.get(R);Z.__webglFramebuffer=W,Z.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(R,W=0,Z=0){y=R,T=W,S=Z;let se=!0,Q=null,de=!1,we=!1;if(R){let Ae=z.get(R);Ae.__useDefaultFramebuffer!==void 0?(b.bindFramebuffer(X.FRAMEBUFFER,null),se=!1):Ae.__webglFramebuffer===void 0?k.setupRenderTarget(R):Ae.__hasExternalTextures&&k.rebindTextures(R,z.get(R.texture).__webglTexture,z.get(R.depthTexture).__webglTexture);let Le=R.texture;(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)&&(we=!0);let Ne=z.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Q=Array.isArray(Ne[W])?Ne[W][Z]:Ne[W],de=!0):Q=J.isWebGL2&&R.samples>0&&k.useMultisampledRTT(R)===!1?z.get(R).__webglMultisampledFramebuffer:Array.isArray(Ne)?Ne[Z]:Ne,L.copy(R.viewport),B.copy(R.scissor),P=R.scissorTest}else L.copy(H).multiplyScalar(ne).floor(),B.copy(K).multiplyScalar(ne).floor(),P=he;if(b.bindFramebuffer(X.FRAMEBUFFER,Q)&&J.drawBuffers&&se&&b.drawBuffers(R,Q),b.viewport(L),b.scissor(B),b.setScissorTest(P),de){let Ae=z.get(R.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+W,Ae.__webglTexture,Z)}else if(we){let Ae=z.get(R.texture),Le=W||0;X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,Ae.__webglTexture,Z||0,Le)}U=-1},this.readRenderTargetPixels=function(R,W,Z,se,Q,de,we){if(!R||!R.isWebGLRenderTarget)return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=z.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&we!==void 0&&(Ae=Ae[we]),Ae){b.bindFramebuffer(X.FRAMEBUFFER,Ae);try{let Le=R.texture,Ne=Le.format,Oe=Le.type;if(Ne!==pn&&Yt.convert(Ne)!==X.getParameter(X.IMPLEMENTATION_COLOR_READ_FORMAT))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");let Fe=Oe===gn&&($.has("EXT_color_buffer_half_float")||J.isWebGL2&&$.has("EXT_color_buffer_float"));if(!(Oe===Si||Yt.convert(Oe)===X.getParameter(X.IMPLEMENTATION_COLOR_READ_TYPE)||Oe===Dn&&(J.isWebGL2||$.has("OES_texture_float")||$.has("WEBGL_color_buffer_float"))||Fe))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");W>=0&&W<=R.width-se&&Z>=0&&Z<=R.height-Q&&X.readPixels(W,Z,se,Q,Yt.convert(Ne),Yt.convert(Oe),de)}finally{let Le=y!==null?z.get(y).__webglFramebuffer:null;b.bindFramebuffer(X.FRAMEBUFFER,Le)}}},this.copyFramebufferToTexture=function(R,W,Z=0){let se=Math.pow(2,-Z),Q=Math.floor(W.image.width*se),de=Math.floor(W.image.height*se);k.setTexture2D(W,0),X.copyTexSubImage2D(X.TEXTURE_2D,Z,0,0,R.x,R.y,Q,de),b.unbindTexture()},this.copyTextureToTexture=function(R,W,Z,se=0){let Q=W.image.width,de=W.image.height,we=Yt.convert(Z.format),Ae=Yt.convert(Z.type);k.setTexture2D(Z,0),X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,Z.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,Z.unpackAlignment),W.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,se,R.x,R.y,Q,de,we,Ae,W.image.data):W.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,se,R.x,R.y,W.mipmaps[0].width,W.mipmaps[0].height,we,W.mipmaps[0].data):X.texSubImage2D(X.TEXTURE_2D,se,R.x,R.y,we,Ae,W.image),se===0&&Z.generateMipmaps&&X.generateMipmap(X.TEXTURE_2D),b.unbindTexture()},this.copyTextureToTexture3D=function(R,W,Z,se,Q=0){if(_.isWebGL1Renderer)return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");let de=R.max.x-R.min.x+1,we=R.max.y-R.min.y+1,Ae=R.max.z-R.min.z+1,Le=Yt.convert(se.format),Ne=Yt.convert(se.type),Oe;if(se.isData3DTexture)k.setTexture3D(se,0),Oe=X.TEXTURE_3D;else{if(!se.isDataArrayTexture&&!se.isCompressedArrayTexture)return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");k.setTexture2DArray(se,0),Oe=X.TEXTURE_2D_ARRAY}X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,se.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,se.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,se.unpackAlignment);let Fe=X.getParameter(X.UNPACK_ROW_LENGTH),at=X.getParameter(X.UNPACK_IMAGE_HEIGHT),an=X.getParameter(X.UNPACK_SKIP_PIXELS),wn=X.getParameter(X.UNPACK_SKIP_ROWS),pi=X.getParameter(X.UNPACK_SKIP_IMAGES),ot=Z.isCompressedTexture?Z.mipmaps[Q]:Z.image;X.pixelStorei(X.UNPACK_ROW_LENGTH,ot.width),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,ot.height),X.pixelStorei(X.UNPACK_SKIP_PIXELS,R.min.x),X.pixelStorei(X.UNPACK_SKIP_ROWS,R.min.y),X.pixelStorei(X.UNPACK_SKIP_IMAGES,R.min.z),Z.isDataTexture||Z.isData3DTexture?X.texSubImage3D(Oe,Q,W.x,W.y,W.z,de,we,Ae,Le,Ne,ot.data):Z.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),X.compressedTexSubImage3D(Oe,Q,W.x,W.y,W.z,de,we,Ae,Le,ot.data)):X.texSubImage3D(Oe,Q,W.x,W.y,W.z,de,we,Ae,Le,Ne,ot),X.pixelStorei(X.UNPACK_ROW_LENGTH,Fe),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,at),X.pixelStorei(X.UNPACK_SKIP_PIXELS,an),X.pixelStorei(X.UNPACK_SKIP_ROWS,wn),X.pixelStorei(X.UNPACK_SKIP_IMAGES,pi),Q===0&&se.generateMipmaps&&X.generateMipmap(Oe),b.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?k.setTextureCube(R,0):R.isData3DTexture?k.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?k.setTexture2DArray(R,0):k.setTexture2D(R,0),b.unbindTexture()},this.resetState=function(){T=0,S=0,y=null,b.reset(),Wt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Er}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===Nc?"display-p3":"srgb",t.unpackColorSpace=We.workingColorSpace===mo?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===qe?Ti:Fd}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Ti?qe:xt}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},Ql=class extends Pr{};Ql.prototype.isWebGL1Renderer=!0;var ds=class s{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new xe(e),this.near=t,this.far=n}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Lr=class extends tt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},Ir=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Nl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Qt()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Qt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Qt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Nt=new E,Ri=class s{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix4(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyNormalMatrix(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.transformDirection(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}setX(e,t){return this.normalized&&(t=Ze(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ze(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ze(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ze(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Sn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Sn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Sn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Sn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ze(t,this.array),n=Ze(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ze(t,this.array),n=Ze(n,this.array),i=Ze(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ze(t,this.array),n=Ze(n,this.array),i=Ze(i,this.array),r=Ze(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new ft(new this.array.constructor(t),this.itemSize,this.normalized)}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},ei=class extends zt{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new xe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},cr,Kr=new E,hr=new E,ur=new E,dr=new ee,Jr=new ee,Zd=new be,da=new E,Qr=new E,pa=new E,Qu=new ee,_l=new ee,$u=new ee,Ci=class extends tt{constructor(e=new ei){if(super(),this.isSprite=!0,this.type="Sprite",cr===void 0){cr=new Ke;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ir(t,5);cr.setIndex([0,1,2,0,2,3]),cr.setAttribute("position",new Ri(n,3,0,!1)),cr.setAttribute("uv",new Ri(n,2,3,!1))}this.geometry=cr,this.material=e,this.center=new ee(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),hr.setFromMatrixScale(this.matrixWorld),Zd.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ur.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&hr.multiplyScalar(-ur.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let a=this.center;fa(da.set(-.5,-.5,0),ur,a,hr,i,r),fa(Qr.set(.5,-.5,0),ur,a,hr,i,r),fa(pa.set(.5,.5,0),ur,a,hr,i,r),Qu.set(0,0),_l.set(1,0),$u.set(1,1);let o=e.ray.intersectTriangle(da,Qr,pa,!1,Kr);if(o===null&&(fa(Qr.set(-.5,.5,0),ur,a,hr,i,r),_l.set(0,1),o=e.ray.intersectTriangle(da,pa,Qr,!1,Kr),o===null))return;let l=e.ray.origin.distanceTo(Kr);l<e.near||l>e.far||t.push({distance:l,point:Kr.clone(),uv:Zn.getInterpolation(Kr,da,Qr,pa,Qu,_l,$u,new ee),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function fa(s,e,t,n,i,r){dr.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(Jr.x=r*dr.x-i*dr.y,Jr.y=i*dr.x+r*dr.y):Jr.copy(dr),s.copy(e),s.x+=Jr.x,s.y+=Jr.y,s.applyMatrix4(Zd)}var Ig=new E,Ug=new E;var ed=new E,td=new $e,nd=new $e,Rm=new E,id=new be,ma=new E,xl=new Ht,rd=new be,yl=new wr,ka=class extends Ue{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Gh,this.bindMatrix=new be,this.bindMatrixInverse=new be,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ct),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ma),this.boundingBox.expandByPoint(ma)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Ht),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ma),this.boundingSphere.expandByPoint(ma)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),xl.copy(this.boundingSphere),xl.applyMatrix4(i),e.ray.intersectsSphere(xl)!==!1&&(rd.copy(i).invert(),yl.copy(e.ray).applyMatrix4(rd),this.boundingBox!==null&&yl.intersectsBox(this.boundingBox)===!1||this._computeIntersections(e,t,yl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new $e,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Gh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Up?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;td.fromBufferAttribute(i.attributes.skinIndex,e),nd.fromBufferAttribute(i.attributes.skinWeight,e),ed.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let a=nd.getComponent(r);if(a!==0){let o=td.getComponent(r);id.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Rm.copy(ed).applyMatrix4(id),a)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}},ps=class extends tt{constructor(){super(),this.isBone=!0,this.type="Bone"}},$l=class extends Rt{constructor(e=null,t=1,n=1,i,r,a,o,l,c=1003,h=1003,d,u){super(null,a,o,l,c,h,i,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},sd=new be,Cm=new be,Va=class s{constructor(e=[],t=[]){this.uuid=Qt(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(16*e.length),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new be)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new be;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:Cm;sd.multiplyMatrices(o,t[r]),sd.toArray(n,16*r)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(4*this.bones.length);e=4*Math.ceil(e/4),e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new $l(t,e,e,pn,Dn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let r=e.bones[n],a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new ps),this.bones.push(a),this.boneInverses.push(new be().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){let a=t[i];e.bones.push(a.uuid);let o=n[i];e.boneInverses.push(o.toArray())}return e}},Pi=class extends ft{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},pr=new be,ad=new be,ga=[],od=new Ct,Pm=new be,$r=new Ue,es=new Ht,Wa=class extends Ue{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Pi(new Float32Array(16*n),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Pm)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ct),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,pr),od.copy(e.boundingBox).applyMatrix4(pr),this.boundingBox.union(od)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ht),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,pr),es.copy(e.boundingSphere).applyMatrix4(pr),this.boundingSphere.union(es)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,3*e)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,16*e)}raycast(e,t){let n=this.matrixWorld,i=this.count;if($r.geometry=this.geometry,$r.material=this.material,$r.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),es.copy(this.boundingSphere),es.applyMatrix4(n),e.ray.intersectsSphere(es)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,pr),ad.multiplyMatrices(n,pr),$r.matrixWorld=ad,$r.raycast(e,ga);for(let a=0,o=ga.length;a<o;a++){let l=ga[a];l.instanceId=r,l.object=this,t.push(l)}ga.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Pi(new Float32Array(3*this.instanceMatrix.count),3)),t.toArray(this.instanceColor.array,3*e)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,16*e)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var ec=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t){let n=this.pool,i=this.list;this.index>=n.length&&n.push({start:-1,count:-1,z:-1});let r=n[this.index];i.push(r),this.index++,r.start=e.start,r.count=e.count,r.z=t}reset(){this.list.length=0,this.index=0}};var Ng=new be,Dg=new be,Og=new be,Bg=new be,Fg=new Cr,Hg=new Ct,zg=new Ht,Gg=new E,kg=new ec,Vg=new Ue;var fs=class extends zt{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new xe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},ld=new E,cd=new E,hd=new be,Ml=new wr,va=new Ht,Ur=class extends tt{constructor(e=new Ke,t=new fs){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)ld.fromBufferAttribute(t,i-1),cd.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=ld.distanceTo(cd);e.setAttribute("lineDistance",new Ee(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),va.copy(n.boundingSphere),va.applyMatrix4(i),va.radius+=r,e.ray.intersectsSphere(va)===!1)return;hd.copy(i).invert(),Ml.copy(e.ray).applyMatrix4(hd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new E,h=new E,d=new E,u=new E,p=this.isLineSegments?2:1,f=n.index,g=n.attributes.position;if(f!==null)for(let m=Math.max(0,a.start),x=Math.min(f.count,a.start+a.count)-1;m<x;m+=p){let v=f.getX(m),_=f.getX(m+1);if(c.fromBufferAttribute(g,v),h.fromBufferAttribute(g,_),Ml.distanceSqToSegment(c,h,u,d)>l)continue;u.applyMatrix4(this.matrixWorld);let M=e.ray.origin.distanceTo(u);M<e.near||M>e.far||t.push({distance:M,point:d.clone().applyMatrix4(this.matrixWorld),index:m,face:null,faceIndex:null,object:this})}else for(let m=Math.max(0,a.start),x=Math.min(g.count,a.start+a.count)-1;m<x;m+=p){if(c.fromBufferAttribute(g,m),h.fromBufferAttribute(g,m+1),Ml.distanceSqToSegment(c,h,u,d)>l)continue;u.applyMatrix4(this.matrixWorld);let v=e.ray.origin.distanceTo(u);v<e.near||v>e.far||t.push({distance:v,point:d.clone().applyMatrix4(this.matrixWorld),index:m,face:null,faceIndex:null,object:this})}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,r=n.length;i<r;i++){let a=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=i}}}}},ud=new E,dd=new E,Xa=class extends Ur{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)ud.fromBufferAttribute(t,i),dd.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+ud.distanceTo(dd);e.setAttribute("lineDistance",new Ee(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},ja=class extends Ur{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},ms=class extends zt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new xe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},pd=new be,tc=new wr,_a=new Ht,xa=new E,qa=class extends tt{constructor(e=new Ke,t=new ms){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),_a.copy(n.boundingSphere),_a.applyMatrix4(i),_a.radius+=r,e.ray.intersectsSphere(_a)===!1)return;pd.copy(i).invert(),tc.copy(e.ray).applyMatrix4(pd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null)for(let d=Math.max(0,a.start),u=Math.min(c.count,a.start+a.count);d<u;d++){let p=c.getX(d);xa.fromBufferAttribute(h,p),fd(xa,p,l,i,e,t,this)}else for(let d=Math.max(0,a.start),u=Math.min(h.count,a.start+a.count);d<u;d++)xa.fromBufferAttribute(h,d),fd(xa,d,l,i,e,t,this)}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,r=n.length;i<r;i++){let a=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=i}}}}};function fd(s,e,t,n,i,r,a){let o=tc.distanceSqToPoint(s);if(o<t){let l=new E;tc.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}var en=class extends Rt{constructor(e,t,n,i,r,a,o,l,c){super(e,t,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},tn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),i=0,r=n.length,a;a=t||e*n[r-1];let o,l=0,c=r-1;for(;l<=c;)if(i=Math.floor(l+(c-l)/2),o=n[i]-a,o<0)l=i+1;else{if(!(o>0)){c=i;break}c=i-1}if(i=c,n[i]===a)return i/(r-1);let h=n[i];return(i+(a-h)/(n[i+1]-h))/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let a=this.getPoint(i),o=this.getPoint(r),l=t||(a.isVector2?new ee:new E);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new E,i=[],r=[],a=[],o=new E,l=new be;for(let p=0;p<=e;p++){let f=p/e;i[p]=this.getTangentAt(f,new E)}r[0]=new E,a[0]=new E;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),d=Math.abs(i[0].y),u=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(i[p-1],i[p]),o.length()>Number.EPSILON){o.normalize();let f=Math.acos(_t(i[p-1].dot(i[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,f))}a[p].crossVectors(i[p],r[p])}if(t===!0){let p=Math.acos(_t(r[0].dot(r[e]),-1,1));p/=e,i[0].dot(o.crossVectors(r[0],r[e]))>0&&(p=-p);for(let f=1;f<=e;f++)r[f].applyMatrix4(l.makeRotationAxis(i[f],p*f)),a[f].crossVectors(i[f],r[f])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},gs=class extends tn{constructor(e=0,t=0,n=1,i=1,r=0,a=2*Math.PI,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t){let n=t||new ee,i=2*Math.PI,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(r=a?0:i),this.aClockwise!==!0||a||(r===i?r=-i:r-=i);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,p=c-this.aY;l=u*h-p*d+this.aX,c=u*d+p*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},nc=class extends gs{constructor(e,t,n,i,r,a){super(e,t,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Oc(){let s=0,e=0,t=0,n=0;function i(r,a,o,l){s=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){i(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,d){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+d)+(l-o)/d;u*=h,p*=h,i(a,o,u,p)},calc:function(r){let a=r*r;return s+e*r+t*a+n*(a*r)}}}var ya=new E,Sl=new Oc,bl=new Oc,El=new Oc,Nr=class extends tn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new E){let n=t,i=this.points,r=i.length,a=(r-(this.closed?0:1))*e,o,l,c=Math.floor(a),h=a-c;this.closed?c+=c>0?0:(Math.floor(Math.abs(c)/r)+1)*r:h===0&&c===r-1&&(c=r-2,h=1),this.closed||c>0?o=i[(c-1)%r]:(ya.subVectors(i[0],i[1]).add(i[0]),o=ya);let d=i[c%r],u=i[(c+1)%r];if(this.closed||c+2<r?l=i[(c+2)%r]:(ya.subVectors(i[r-1],i[r-2]).add(i[r-1]),l=ya),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,f=Math.pow(o.distanceToSquared(d),p),g=Math.pow(d.distanceToSquared(u),p),m=Math.pow(u.distanceToSquared(l),p);g<1e-4&&(g=1),f<1e-4&&(f=g),m<1e-4&&(m=g),Sl.initNonuniformCatmullRom(o.x,d.x,u.x,l.x,f,g,m),bl.initNonuniformCatmullRom(o.y,d.y,u.y,l.y,f,g,m),El.initNonuniformCatmullRom(o.z,d.z,u.z,l.z,f,g,m)}else this.curveType==="catmullrom"&&(Sl.initCatmullRom(o.x,d.x,u.x,l.x,this.tension),bl.initCatmullRom(o.y,d.y,u.y,l.y,this.tension),El.initCatmullRom(o.z,d.z,u.z,l.z,this.tension));return n.set(Sl.calc(h),bl.calc(h),El.calc(h)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new E().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function md(s,e,t,n,i){let r=.5*(n-e),a=.5*(i-t),o=s*s;return(2*t-2*n+r+a)*(s*o)+(-3*t+3*n-2*r-a)*o+r*s+t}function as(s,e,t,n){return function(i,r){let a=1-i;return a*a*r}(s,e)+function(i,r){return 2*(1-i)*i*r}(s,t)+function(i,r){return i*i*r}(s,n)}function os(s,e,t,n,i){return function(r,a){let o=1-r;return o*o*o*a}(s,e)+function(r,a){let o=1-r;return 3*o*o*r*a}(s,t)+function(r,a){return 3*(1-r)*r*r*a}(s,n)+function(r,a){return r*r*r*a}(s,i)}var Ya=class extends tn{constructor(e=new ee,t=new ee,n=new ee,i=new ee){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new ee){let n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(os(e,i.x,r.x,a.x,o.x),os(e,i.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ic=class extends tn{constructor(e=new E,t=new E,n=new E,i=new E){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new E){let n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(os(e,i.x,r.x,a.x,o.x),os(e,i.y,r.y,a.y,o.y),os(e,i.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Za=class extends tn{constructor(e=new ee,t=new ee){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ee){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ee){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},rc=class extends tn{constructor(e=new E,t=new E){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new E){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new E){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ka=class extends tn{constructor(e=new ee,t=new ee,n=new ee){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ee){let n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(as(e,i.x,r.x,a.x),as(e,i.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ja=class extends tn{constructor(e=new E,t=new E,n=new E){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new E){let n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(as(e,i.x,r.x,a.x),as(e,i.y,r.y,a.y),as(e,i.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Qa=class extends tn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ee){let n=t,i=this.points,r=(i.length-1)*e,a=Math.floor(r),o=r-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],d=i[a>i.length-3?i.length-1:a+2];return n.set(md(o,l.x,c.x,h.x,d.x),md(o,l.y,c.y,h.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new ee().fromArray(i))}return this}},$a=Object.freeze({__proto__:null,ArcCurve:nc,CatmullRomCurve3:Nr,CubicBezierCurve:Ya,CubicBezierCurve3:ic,EllipseCurve:gs,LineCurve:Za,LineCurve3:rc,QuadraticBezierCurve:Ka,QuadraticBezierCurve3:Ja,SplineCurve:Qa}),sc=class extends tn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new $a[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let a=i[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let i=0,r=this.curves;i<r.length;i++){let a=r[i],o=a.isEllipseCurve?2*e:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(new $a[i.type]().fromJSON(i))}return this}},vs=class extends sc{constructor(e){super(),this.type="Path",this.currentPoint=new ee,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Za(this.currentPoint.clone(),new ee(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){let r=new Ka(this.currentPoint.clone(),new ee(e,t),new ee(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,a){let o=new Ya(this.currentPoint.clone(),new ee(e,t),new ee(n,i),new ee(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Qa(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,i,r,a),this}absarc(e,t,n,i,r,a){return this.absellipse(e,t,n,n,i,r,a),this}ellipse(e,t,n,i,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,r,a,o,l),this}absellipse(e,t,n,i,r,a,o,l){let c=new gs(e,t,n,i,r,a,o,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},eo=class s extends Ke{constructor(e=[new ee(0,-.5),new ee(.5,0),new ee(0,.5)],t=12,n=0,i=2*Math.PI){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=_t(i,0,2*Math.PI);let r=[],a=[],o=[],l=[],c=[],h=1/t,d=new E,u=new ee,p=new E,f=new E,g=new E,m=0,x=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:m=e[v+1].x-e[v].x,x=e[v+1].y-e[v].y,p.x=1*x,p.y=-m,p.z=0*x,g.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(g.x,g.y,g.z);break;default:m=e[v+1].x-e[v].x,x=e[v+1].y-e[v].y,p.x=1*x,p.y=-m,p.z=0*x,f.copy(p),p.x+=g.x,p.y+=g.y,p.z+=g.z,p.normalize(),l.push(p.x,p.y,p.z),g.copy(f)}for(let v=0;v<=t;v++){let _=n+v*h*i,M=Math.sin(_),T=Math.cos(_);for(let S=0;S<=e.length-1;S++){d.x=e[S].x*M,d.y=e[S].y,d.z=e[S].x*T,a.push(d.x,d.y,d.z),u.x=v/t,u.y=S/(e.length-1),o.push(u.x,u.y);let y=l[3*S+0]*M,U=l[3*S+1],C=l[3*S+0]*T;c.push(y,U,C)}}for(let v=0;v<t;v++)for(let _=0;_<e.length-1;_++){let M=_+v*e.length,T=M,S=M+e.length,y=M+e.length+1,U=M+1;r.push(T,S,U),r.push(y,U,S)}this.setIndex(r),this.setAttribute("position",new Ee(a,3)),this.setAttribute("uv",new Ee(o,2)),this.setAttribute("normal",new Ee(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.points,e.segments,e.phiStart,e.phiLength)}},ac=class s extends eo{constructor(e=1,t=1,n=4,i=8){let r=new vs;r.absarc(0,-t/2,e,1.5*Math.PI,0),r.absarc(0,t/2,e,0,.5*Math.PI),super(r.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:i}}static fromJSON(e){return new s(e.radius,e.length,e.capSegments,e.radialSegments)}},to=class s extends Ke{constructor(e=1,t=32,n=0,i=2*Math.PI){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new E,h=new ee;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){let p=n+d/t*i;c.x=e*Math.cos(p),c.y=e*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/e+1)/2,h.y=(a[u+1]/e+1)/2,l.push(h.x,h.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Ee(a,3)),this.setAttribute("normal",new Ee(o,3)),this.setAttribute("uv",new Ee(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.segments,e.thetaStart,e.thetaLength)}},je=class s extends Ke{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,l=2*Math.PI){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let h=[],d=[],u=[],p=[],f=0,g=[],m=n/2,x=0;function v(_){let M=f,T=new ee,S=new E,y=0,U=_===!0?e:t,C=_===!0?1:-1;for(let B=1;B<=i;B++)d.push(0,m*C,0),u.push(0,C,0),p.push(.5,.5),f++;let L=f;for(let B=0;B<=i;B++){let P=B/i*l+o,G=Math.cos(P),V=Math.sin(P);S.x=U*V,S.y=m*C,S.z=U*G,d.push(S.x,S.y,S.z),u.push(0,C,0),T.x=.5*G+.5,T.y=.5*V*C+.5,p.push(T.x,T.y),f++}for(let B=0;B<i;B++){let P=M+B,G=L+B;_===!0?h.push(G,G+1,P):h.push(G+1,G,P),y+=3}c.addGroup(x,y,_===!0?1:2),x+=y}(function(){let _=new E,M=new E,T=0,S=(t-e)/n;for(let y=0;y<=r;y++){let U=[],C=y/r,L=C*(t-e)+e;for(let B=0;B<=i;B++){let P=B/i,G=P*l+o,V=Math.sin(G),ae=Math.cos(G);M.x=L*V,M.y=-C*n+m,M.z=L*ae,d.push(M.x,M.y,M.z),_.set(V,S,ae).normalize(),u.push(_.x,_.y,_.z),p.push(P,1-C),U.push(f++)}g.push(U)}for(let y=0;y<i;y++)for(let U=0;U<r;U++){let C=g[U][y],L=g[U+1][y],B=g[U+1][y+1],P=g[U][y+1];h.push(C,L,P),h.push(L,B,P),T+=6}c.addGroup(x,T,0),x+=T})(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Ee(d,3)),this.setAttribute("normal",new Ee(u,3)),this.setAttribute("uv",new Ee(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Li=class s extends je{constructor(e=1,t=1,n=32,i=1,r=!1,a=0,o=2*Math.PI){super(0,e,t,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new s(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ii=class s extends Ke{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let r=[],a=[];function o(u,p,f,g){let m=g+1,x=[];for(let v=0;v<=m;v++){x[v]=[];let _=u.clone().lerp(f,v/m),M=p.clone().lerp(f,v/m),T=m-v;for(let S=0;S<=T;S++)x[v][S]=S===0&&v===m?_:_.clone().lerp(M,S/T)}for(let v=0;v<m;v++)for(let _=0;_<2*(m-v)-1;_++){let M=Math.floor(_/2);_%2==0?(l(x[v][M+1]),l(x[v+1][M]),l(x[v][M])):(l(x[v][M+1]),l(x[v+1][M+1]),l(x[v+1][M]))}}function l(u){r.push(u.x,u.y,u.z)}function c(u,p){let f=3*u;p.x=e[f+0],p.y=e[f+1],p.z=e[f+2]}function h(u,p,f,g){g<0&&u.x===1&&(a[p]=u.x-1),f.x===0&&f.z===0&&(a[p]=g/2/Math.PI+.5)}function d(u){return Math.atan2(u.z,-u.x)}(function(u){let p=new E,f=new E,g=new E;for(let m=0;m<t.length;m+=3)c(t[m+0],p),c(t[m+1],f),c(t[m+2],g),o(p,f,g,u)})(i),function(u){let p=new E;for(let f=0;f<r.length;f+=3)p.x=r[f+0],p.y=r[f+1],p.z=r[f+2],p.normalize().multiplyScalar(u),r[f+0]=p.x,r[f+1]=p.y,r[f+2]=p.z}(n),function(){let u=new E;for(let f=0;f<r.length;f+=3){u.x=r[f+0],u.y=r[f+1],u.z=r[f+2];let g=d(u)/2/Math.PI+.5,m=(p=u,Math.atan2(-p.y,Math.sqrt(p.x*p.x+p.z*p.z))/Math.PI+.5);a.push(g,1-m)}var p;(function(){let f=new E,g=new E,m=new E,x=new E,v=new ee,_=new ee,M=new ee;for(let T=0,S=0;T<r.length;T+=9,S+=6){f.set(r[T+0],r[T+1],r[T+2]),g.set(r[T+3],r[T+4],r[T+5]),m.set(r[T+6],r[T+7],r[T+8]),v.set(a[S+0],a[S+1]),_.set(a[S+2],a[S+3]),M.set(a[S+4],a[S+5]),x.copy(f).add(g).add(m).divideScalar(3);let y=d(x);h(v,S+0,f,y),h(_,S+2,g,y),h(M,S+4,m,y)}})(),function(){for(let f=0;f<a.length;f+=6){let g=a[f+0],m=a[f+2],x=a[f+4],v=Math.max(g,m,x),_=Math.min(g,m,x);v>.9&&_<.1&&(g<.2&&(a[f+0]+=1),m<.2&&(a[f+2]+=1),x<.2&&(a[f+4]+=1))}}()}(),this.setAttribute("position",new Ee(r,3)),this.setAttribute("normal",new Ee(r.slice(),3)),this.setAttribute("uv",new Ee(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.vertices,e.indices,e.radius,e.details)}},oc=class s extends Ii{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=1/n;super([-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}},Ma=new E,Sa=new E,Tl=new E,ba=new Zn,lc=class extends Ke{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let i=Math.pow(10,4),r=Math.cos(vr*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],d=new Array(3),u={},p=[];for(let f=0;f<l;f+=3){a?(c[0]=a.getX(f),c[1]=a.getX(f+1),c[2]=a.getX(f+2)):(c[0]=f,c[1]=f+1,c[2]=f+2);let{a:g,b:m,c:x}=ba;if(g.fromBufferAttribute(o,c[0]),m.fromBufferAttribute(o,c[1]),x.fromBufferAttribute(o,c[2]),ba.getNormal(Tl),d[0]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,d[1]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,d[2]=`${Math.round(x.x*i)},${Math.round(x.y*i)},${Math.round(x.z*i)}`,d[0]!==d[1]&&d[1]!==d[2]&&d[2]!==d[0])for(let v=0;v<3;v++){let _=(v+1)%3,M=d[v],T=d[_],S=ba[h[v]],y=ba[h[_]],U=`${M}_${T}`,C=`${T}_${M}`;C in u&&u[C]?(Tl.dot(u[C].normal)<=r&&(p.push(S.x,S.y,S.z),p.push(y.x,y.y,y.z)),u[C]=null):U in u||(u[U]={index0:c[v],index1:c[_],normal:Tl.clone()})}}for(let f in u)if(u[f]){let{index0:g,index1:m}=u[f];Ma.fromBufferAttribute(o,g),Sa.fromBufferAttribute(o,m),p.push(Ma.x,Ma.y,Ma.z),p.push(Sa.x,Sa.y,Sa.z)}this.setAttribute("position",new Ee(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},_s=class extends vs{constructor(e){super(e),this.uuid=Qt(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(new vs().fromJSON(i))}return this}},Lm=function(s,e,t=2){let n=e&&e.length,i=n?e[0]*t:s.length,r=gd(s,0,i,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c,h,d,u,p;if(n&&(r=function(f,g,m,x){let v=[],_,M,T,S,y;for(_=0,M=g.length;_<M;_++)T=g[_]*x,S=_<M-1?g[_+1]*x:f.length,y=gd(f,T,S,x,!1),y===y.next&&(y.steiner=!0),v.push(Hm(y));for(v.sort(Om),_=0;_<v.length;_++)m=Bm(v[_],m);return m}(s,e,r,t)),s.length>80*t){o=c=s[0],l=h=s[1];for(let f=t;f<i;f+=t)d=s[f],u=s[f+1],d<o&&(o=d),u<l&&(l=u),d>c&&(c=d),u>h&&(h=u);p=Math.max(c-o,h-l),p=p!==0?32767/p:0}return xs(r,a,t,o,l,p,0),a};function gd(s,e,t,n,i){let r,a;if(i===function(o,l,c,h){let d=0;for(let u=l,p=c-h;u<c;u+=h)d+=(o[p]-o[u])*(o[u+1]+o[p+1]),p=u;return d}(s,e,t,n)>0)for(r=e;r<t;r+=n)a=vd(r,s[r],s[r+1],a);else for(r=t-n;r>=e;r-=n)a=vd(r,s[r],s[r+1],a);return a&&vo(a,a.next)&&(Ms(a),a=a.next),a}function Ui(s,e){if(!s)return s;e||(e=s);let t,n=s;do if(t=!1,n.steiner||!vo(n,n.next)&&lt(n.prev,n,n.next)!==0)n=n.next;else{if(Ms(n),n=e=n.prev,n===n.next)break;t=!0}while(t||n!==e);return e}function xs(s,e,t,n,i,r,a){if(!s)return;!a&&r&&function(h,d,u,p){let f=h;do f.z===0&&(f.z=cc(f.x,f.y,d,u,p)),f.prevZ=f.prev,f.nextZ=f.next,f=f.next;while(f!==h);f.prevZ.nextZ=null,f.prevZ=null,function(g){let m,x,v,_,M,T,S,y,U=1;do{for(x=g,g=null,M=null,T=0;x;){for(T++,v=x,S=0,m=0;m<U&&(S++,v=v.nextZ,v);m++);for(y=U;S>0||y>0&&v;)S!==0&&(y===0||!v||x.z<=v.z)?(_=x,x=x.nextZ,S--):(_=v,v=v.nextZ,y--),M?M.nextZ=_:g=_,_.prevZ=M,M=_;x=v}M.nextZ=null,U*=2}while(T>1)}(f)}(s,n,i,r);let o,l,c=s;for(;s.prev!==s.next;)if(o=s.prev,l=s.next,r?Um(s,n,i,r):Im(s))e.push(o.i/t|0),e.push(s.i/t|0),e.push(l.i/t|0),Ms(s),s=l.next,c=l.next;else if((s=l)===c){a?a===1?xs(s=Nm(Ui(s),e,t),e,t,n,i,r,2):a===2&&Dm(s,e,t,n,i,r):xs(Ui(s),e,t,n,i,r,1);break}}function Im(s){let e=s.prev,t=s,n=s.next;if(lt(e,t,n)>=0)return!1;let i=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=i<r?i<a?i:a:r<a?r:a,d=o<l?o<c?o:c:l<c?l:c,u=i>r?i>a?i:a:r>a?r:a,p=o>l?o>c?o:c:l>c?l:c,f=n.next;for(;f!==e;){if(f.x>=h&&f.x<=u&&f.y>=d&&f.y<=p&&gr(i,o,r,l,a,c,f.x,f.y)&&lt(f.prev,f,f.next)>=0)return!1;f=f.next}return!0}function Um(s,e,t,n){let i=s.prev,r=s,a=s.next;if(lt(i,r,a)>=0)return!1;let o=i.x,l=r.x,c=a.x,h=i.y,d=r.y,u=a.y,p=o<l?o<c?o:c:l<c?l:c,f=h<d?h<u?h:u:d<u?d:u,g=o>l?o>c?o:c:l>c?l:c,m=h>d?h>u?h:u:d>u?d:u,x=cc(p,f,e,t,n),v=cc(g,m,e,t,n),_=s.prevZ,M=s.nextZ;for(;_&&_.z>=x&&M&&M.z<=v;){if(_.x>=p&&_.x<=g&&_.y>=f&&_.y<=m&&_!==i&&_!==a&&gr(o,h,l,d,c,u,_.x,_.y)&&lt(_.prev,_,_.next)>=0||(_=_.prevZ,M.x>=p&&M.x<=g&&M.y>=f&&M.y<=m&&M!==i&&M!==a&&gr(o,h,l,d,c,u,M.x,M.y)&&lt(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;_&&_.z>=x;){if(_.x>=p&&_.x<=g&&_.y>=f&&_.y<=m&&_!==i&&_!==a&&gr(o,h,l,d,c,u,_.x,_.y)&&lt(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;M&&M.z<=v;){if(M.x>=p&&M.x<=g&&M.y>=f&&M.y<=m&&M!==i&&M!==a&&gr(o,h,l,d,c,u,M.x,M.y)&&lt(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function Nm(s,e,t){let n=s;do{let i=n.prev,r=n.next.next;!vo(i,r)&&Kd(i,n,n.next,r)&&ys(i,r)&&ys(r,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Ms(n),Ms(n.next),n=s=r),n=n.next}while(n!==s);return Ui(n)}function Dm(s,e,t,n,i,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&zm(a,o)){let l=Jd(a,o);return a=Ui(a,a.next),l=Ui(l,l.next),xs(a,e,t,n,i,r,0),void xs(l,e,t,n,i,r,0)}o=o.next}a=a.next}while(a!==s)}function Om(s,e){return s.x-e.x}function Bm(s,e){let t=function(i,r){let a,o=r,l=-1/0,c=i.x,h=i.y;do{if(h<=o.y&&h>=o.next.y&&o.next.y!==o.y){let m=o.x+(h-o.y)*(o.next.x-o.x)/(o.next.y-o.y);if(m<=c&&m>l&&(l=m,a=o.x<o.next.x?o:o.next,m===c))return a}o=o.next}while(o!==r);if(!a)return null;let d=a,u=a.x,p=a.y,f,g=1/0;o=a;do c>=o.x&&o.x>=u&&c!==o.x&&gr(h<p?c:l,h,u,p,h<p?l:c,h,o.x,o.y)&&(f=Math.abs(h-o.y)/(c-o.x),ys(o,i)&&(f<g||f===g&&(o.x>a.x||o.x===a.x&&Fm(a,o)))&&(a=o,g=f)),o=o.next;while(o!==d);return a}(s,e);if(!t)return e;let n=Jd(t,s);return Ui(n,n.next),Ui(t,t.next)}function Fm(s,e){return lt(s.prev,s,e.prev)<0&&lt(e.next,s,s.next)<0}function cc(s,e,t,n,i){return(s=1431655765&((s=858993459&((s=252645135&((s=16711935&((s=(s-t)*i|0)|s<<8))|s<<4))|s<<2))|s<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=(e-n)*i|0)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function Hm(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function gr(s,e,t,n,i,r,a,o){return(i-a)*(e-o)>=(s-a)*(r-o)&&(s-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(i-a)*(n-o)}function zm(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!function(t,n){let i=t;do{if(i.i!==t.i&&i.next.i!==t.i&&i.i!==n.i&&i.next.i!==n.i&&Kd(i,i.next,t,n))return!0;i=i.next}while(i!==t);return!1}(s,e)&&(ys(s,e)&&ys(e,s)&&function(t,n){let i=t,r=!1,a=(t.x+n.x)/2,o=(t.y+n.y)/2;do i.y>o!=i.next.y>o&&i.next.y!==i.y&&a<(i.next.x-i.x)*(o-i.y)/(i.next.y-i.y)+i.x&&(r=!r),i=i.next;while(i!==t);return r}(s,e)&&(lt(s.prev,s,e.prev)||lt(s,e.prev,e))||vo(s,e)&&lt(s.prev,s,s.next)>0&&lt(e.prev,e,e.next)>0)}function lt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function vo(s,e){return s.x===e.x&&s.y===e.y}function Kd(s,e,t,n){let i=Ta(lt(s,e,t)),r=Ta(lt(s,e,n)),a=Ta(lt(t,n,s)),o=Ta(lt(t,n,e));return i!==r&&a!==o||!(i!==0||!Ea(s,t,e))||!(r!==0||!Ea(s,n,e))||!(a!==0||!Ea(t,s,n))||!(o!==0||!Ea(t,e,n))}function Ea(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function Ta(s){return s>0?1:s<0?-1:0}function ys(s,e){return lt(s.prev,s,s.next)<0?lt(s,e,s.next)>=0&&lt(s,s.prev,e)>=0:lt(s,e,s.prev)<0||lt(s,s.next,e)<0}function Jd(s,e){let t=new hc(s.i,s.x,s.y),n=new hc(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function vd(s,e,t,n){let i=new hc(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Ms(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function hc(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}var Qn=class s{static area(e){let t=e.length,n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return .5*n}static isClockWise(e){return s.area(e)<0}static triangulateShape(e,t){let n=[],i=[],r=[];_d(e),xd(n,e);let a=e.length;t.forEach(_d);for(let l=0;l<t.length;l++)i.push(a),a+=t[l].length,xd(n,t[l]);let o=Lm(n,i);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function _d(s){let e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function xd(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}var no=class s extends Ke{constructor(e=new _s([new ee(.5,.5),new ee(-.5,.5),new ee(-.5,-.5),new ee(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,i=[],r=[];for(let o=0,l=e.length;o<l;o++)a(e[o]);function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,u=t.bevelEnabled===void 0||t.bevelEnabled,p=t.bevelThickness!==void 0?t.bevelThickness:.2,f=t.bevelSize!==void 0?t.bevelSize:p-.1,g=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,x=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:Gm,_,M,T,S,y,U=!1;x&&(_=x.getSpacedPoints(h),U=!0,u=!1,M=x.computeFrenetFrames(h,!1),T=new E,S=new E,y=new E),u||(m=0,p=0,f=0,g=0);let C=o.extractPoints(c),L=C.shape,B=C.holes;if(!Qn.isClockWise(L)){L=L.reverse();for(let N=0,D=B.length;N<D;N++){let F=B[N];Qn.isClockWise(F)&&(B[N]=F.reverse())}}let P=Qn.triangulateShape(L,B),G=L;for(let N=0,D=B.length;N<D;N++){let F=B[N];L=L.concat(F)}function V(N,D,F){return D||console.error("THREE.ExtrudeGeometry: vec does not exist"),N.clone().addScaledVector(D,F)}let ae=L.length,fe=P.length;function ne(N,D,F){let $,J,b,ie=N.x-D.x,z=N.y-D.y,k=F.x-N.x,re=F.y-N.y,ue=ie*ie+z*z,pe=ie*re-z*k;if(Math.abs(pe)>Number.EPSILON){let ve=Math.sqrt(ue),Re=Math.sqrt(k*k+re*re),_e=D.x-z/ve,ye=D.y+ie/ve,Pe=((F.x-re/Re-_e)*re-(F.y+k/Re-ye)*k)/(ie*re-z*k);$=_e+ie*Pe-N.x,J=ye+z*Pe-N.y;let St=$*$+J*J;if(St<=2)return new ee($,J);b=Math.sqrt(St/2)}else{let ve=!1;ie>Number.EPSILON?k>Number.EPSILON&&(ve=!0):ie<-Number.EPSILON?k<-Number.EPSILON&&(ve=!0):Math.sign(z)===Math.sign(re)&&(ve=!0),ve?($=-z,J=ie,b=Math.sqrt(ue)):($=ie,J=z,b=Math.sqrt(ue/2))}return new ee($/b,J/b)}let q=[];for(let N=0,D=G.length,F=D-1,$=N+1;N<D;N++,F++,$++)F===D&&(F=0),$===D&&($=0),q[N]=ne(G[N],G[F],G[$]);let te=[],H,K=q.concat();for(let N=0,D=B.length;N<D;N++){let F=B[N];H=[];for(let $=0,J=F.length,b=J-1,ie=$+1;$<J;$++,b++,ie++)b===J&&(b=0),ie===J&&(ie=0),H[$]=ne(F[$],F[b],F[ie]);te.push(H),K=K.concat(H)}for(let N=0;N<m;N++){let D=N/m,F=p*Math.cos(D*Math.PI/2),$=f*Math.sin(D*Math.PI/2)+g;for(let J=0,b=G.length;J<b;J++){let ie=V(G[J],q[J],$);w(ie.x,ie.y,-F)}for(let J=0,b=B.length;J<b;J++){let ie=B[J];H=te[J];for(let z=0,k=ie.length;z<k;z++){let re=V(ie[z],H[z],$);w(re.x,re.y,-F)}}}let he=f+g;for(let N=0;N<ae;N++){let D=u?V(L[N],K[N],he):L[N];U?(S.copy(M.normals[0]).multiplyScalar(D.x),T.copy(M.binormals[0]).multiplyScalar(D.y),y.copy(_[0]).add(S).add(T),w(y.x,y.y,y.z)):w(D.x,D.y,0)}for(let N=1;N<=h;N++)for(let D=0;D<ae;D++){let F=u?V(L[D],K[D],he):L[D];U?(S.copy(M.normals[N]).multiplyScalar(F.x),T.copy(M.binormals[N]).multiplyScalar(F.y),y.copy(_[N]).add(S).add(T),w(y.x,y.y,y.z)):w(F.x,F.y,d/h*N)}for(let N=m-1;N>=0;N--){let D=N/m,F=p*Math.cos(D*Math.PI/2),$=f*Math.sin(D*Math.PI/2)+g;for(let J=0,b=G.length;J<b;J++){let ie=V(G[J],q[J],$);w(ie.x,ie.y,d+F)}for(let J=0,b=B.length;J<b;J++){let ie=B[J];H=te[J];for(let z=0,k=ie.length;z<k;z++){let re=V(ie[z],H[z],$);U?w(re.x,re.y+_[h-1].y,_[h-1].x+F):w(re.x,re.y,d+F)}}}function A(N,D){let F=N.length;for(;--F>=0;){let $=F,J=F-1;J<0&&(J=N.length-1);for(let b=0,ie=h+2*m;b<ie;b++){let z=ae*b,k=ae*(b+1);Y(D+$+z,D+J+z,D+J+k,D+$+k)}}}function w(N,D,F){l.push(N),l.push(D),l.push(F)}function O(N,D,F){I(N),I(D),I(F);let $=i.length/3,J=v.generateTopUV(n,i,$-3,$-2,$-1);j(J[0]),j(J[1]),j(J[2])}function Y(N,D,F,$){I(N),I(D),I($),I(D),I(F),I($);let J=i.length/3,b=v.generateSideWallUV(n,i,J-6,J-3,J-2,J-1);j(b[0]),j(b[1]),j(b[3]),j(b[1]),j(b[2]),j(b[3])}function I(N){i.push(l[3*N+0]),i.push(l[3*N+1]),i.push(l[3*N+2])}function j(N){r.push(N.x),r.push(N.y)}(function(){let N=i.length/3;if(u){let D=0,F=ae*D;for(let $=0;$<fe;$++){let J=P[$];O(J[2]+F,J[1]+F,J[0]+F)}D=h+2*m,F=ae*D;for(let $=0;$<fe;$++){let J=P[$];O(J[0]+F,J[1]+F,J[2]+F)}}else{for(let D=0;D<fe;D++){let F=P[D];O(F[2],F[1],F[0])}for(let D=0;D<fe;D++){let F=P[D];O(F[0]+ae*h,F[1]+ae*h,F[2]+ae*h)}}n.addGroup(N,i.length/3-N,0)})(),function(){let N=i.length/3,D=0;A(G,D),D+=G.length;for(let F=0,$=B.length;F<$;F++){let J=B[F];A(J,D),D+=J.length}n.addGroup(N,i.length/3-N,1)}()}this.setAttribute("position",new Ee(i,3)),this.setAttribute("uv",new Ee(r,2)),this.computeVertexNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return function(t,n,i){if(i.shapes=[],Array.isArray(t))for(let r=0,a=t.length;r<a;r++){let o=t[r];i.shapes.push(o.uuid)}else i.shapes.push(t.uuid);return i.options=Object.assign({},n),n.extrudePath!==void 0&&(i.options.extrudePath=n.extrudePath.toJSON()),i}(this.parameters.shapes,this.parameters.options,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new $a[i.type]().fromJSON(i)),new s(n,e.options)}},Gm={generateTopUV:function(s,e,t,n,i){let r=e[3*t],a=e[3*t+1],o=e[3*n],l=e[3*n+1],c=e[3*i],h=e[3*i+1];return[new ee(r,a),new ee(o,l),new ee(c,h)]},generateSideWallUV:function(s,e,t,n,i,r){let a=e[3*t],o=e[3*t+1],l=e[3*t+2],c=e[3*n],h=e[3*n+1],d=e[3*n+2],u=e[3*i],p=e[3*i+1],f=e[3*i+2],g=e[3*r],m=e[3*r+1],x=e[3*r+2];return Math.abs(o-h)<Math.abs(a-c)?[new ee(a,1-l),new ee(c,1-d),new ee(u,1-f),new ee(g,1-x)]:[new ee(o,1-l),new ee(h,1-d),new ee(p,1-f),new ee(m,1-x)]}},io=class s extends Ii{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2;super([-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}},uc=class s extends Ii{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}},dc=class s extends Ke{constructor(e=.5,t=1,n=32,i=1,r=0,a=2*Math.PI){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n);let o=[],l=[],c=[],h=[],d=e,u=(t-e)/(i=Math.max(1,i)),p=new E,f=new ee;for(let g=0;g<=i;g++){for(let m=0;m<=n;m++){let x=r+m/n*a;p.x=d*Math.cos(x),p.y=d*Math.sin(x),l.push(p.x,p.y,p.z),c.push(0,0,1),f.x=(p.x/t+1)/2,f.y=(p.y/t+1)/2,h.push(f.x,f.y)}d+=u}for(let g=0;g<i;g++){let m=g*(n+1);for(let x=0;x<n;x++){let v=x+m,_=v,M=v+n+1,T=v+n+2,S=v+1;o.push(_,M,S),o.push(M,T,S)}}this.setIndex(o),this.setAttribute("position",new Ee(l,3)),this.setAttribute("normal",new Ee(c,3)),this.setAttribute("uv",new Ee(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},pc=class s extends Ke{constructor(e=new _s([new ee(0,.5),new ee(-.5,-.5),new ee(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],i=[],r=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;function c(h){let d=i.length/3,u=h.extractPoints(t),p=u.shape,f=u.holes;Qn.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,x=f.length;m<x;m++){let v=f[m];Qn.isClockWise(v)===!0&&(f[m]=v.reverse())}let g=Qn.triangulateShape(p,f);for(let m=0,x=f.length;m<x;m++){let v=f[m];p=p.concat(v)}for(let m=0,x=p.length;m<x;m++){let v=p[m];i.push(v.x,v.y,0),r.push(0,0,1),a.push(v.x,v.y)}for(let m=0,x=g.length;m<x;m++){let v=g[m],_=v[0]+d,M=v[1]+d,T=v[2]+d;n.push(_,M,T),l+=3}}this.setIndex(n),this.setAttribute("position",new Ee(i,3)),this.setAttribute("normal",new Ee(r,3)),this.setAttribute("uv",new Ee(a,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return function(t,n){if(n.shapes=[],Array.isArray(t))for(let i=0,r=t.length;i<r;i++){let a=t[i];n.shapes.push(a.uuid)}else n.shapes.push(t.uuid);return n}(this.parameters.shapes,e)}static fromJSON(e,t){let n=[];for(let i=0,r=e.shapes.length;i<r;i++){let a=t[e.shapes[i]];n.push(a)}return new s(n,e.curveSegments)}},kt=class s extends Ke{constructor(e=1,t=32,n=16,i=0,r=2*Math.PI,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],d=new E,u=new E,p=[],f=[],g=[],m=[];for(let x=0;x<=n;x++){let v=[],_=x/n,M=0;x===0&&a===0?M=.5/t:x===n&&l===Math.PI&&(M=-.5/t);for(let T=0;T<=t;T++){let S=T/t;d.x=-e*Math.cos(i+S*r)*Math.sin(a+_*o),d.y=e*Math.cos(a+_*o),d.z=e*Math.sin(i+S*r)*Math.sin(a+_*o),f.push(d.x,d.y,d.z),u.copy(d).normalize(),g.push(u.x,u.y,u.z),m.push(S+M,1-_),v.push(c++)}h.push(v)}for(let x=0;x<n;x++)for(let v=0;v<t;v++){let _=h[x][v+1],M=h[x][v],T=h[x+1][v],S=h[x+1][v+1];(x!==0||a>0)&&p.push(_,M,S),(x!==n-1||l<Math.PI)&&p.push(M,T,S)}this.setIndex(p),this.setAttribute("position",new Ee(f,3)),this.setAttribute("normal",new Ee(g,3)),this.setAttribute("uv",new Ee(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},fc=class s extends Ii{constructor(e=1,t=0){super([1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}},Ni=class s extends Ke{constructor(e=1,t=.4,n=12,i=48,r=2*Math.PI){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);let a=[],o=[],l=[],c=[],h=new E,d=new E,u=new E;for(let p=0;p<=n;p++)for(let f=0;f<=i;f++){let g=f/i*r,m=p/n*Math.PI*2;d.x=(e+t*Math.cos(m))*Math.cos(g),d.y=(e+t*Math.cos(m))*Math.sin(g),d.z=t*Math.sin(m),o.push(d.x,d.y,d.z),h.x=e*Math.cos(g),h.y=e*Math.sin(g),u.subVectors(d,h).normalize(),l.push(u.x,u.y,u.z),c.push(f/i),c.push(p/n)}for(let p=1;p<=n;p++)for(let f=1;f<=i;f++){let g=(i+1)*p+f-1,m=(i+1)*(p-1)+f-1,x=(i+1)*(p-1)+f,v=(i+1)*p+f;a.push(g,m,v),a.push(m,x,v)}this.setIndex(a),this.setAttribute("position",new Ee(o,3)),this.setAttribute("normal",new Ee(l,3)),this.setAttribute("uv",new Ee(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},mc=class s extends Ke{constructor(e=1,t=.4,n=64,i=8,r=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:i,p:r,q:a},n=Math.floor(n),i=Math.floor(i);let o=[],l=[],c=[],h=[],d=new E,u=new E,p=new E,f=new E,g=new E,m=new E,x=new E;for(let _=0;_<=n;++_){let M=_/n*r*Math.PI*2;v(M,r,a,e,p),v(M+.01,r,a,e,f),m.subVectors(f,p),x.addVectors(f,p),g.crossVectors(m,x),x.crossVectors(g,m),g.normalize(),x.normalize();for(let T=0;T<=i;++T){let S=T/i*Math.PI*2,y=-t*Math.cos(S),U=t*Math.sin(S);d.x=p.x+(y*x.x+U*g.x),d.y=p.y+(y*x.y+U*g.y),d.z=p.z+(y*x.z+U*g.z),l.push(d.x,d.y,d.z),u.subVectors(d,p).normalize(),c.push(u.x,u.y,u.z),h.push(_/n),h.push(T/i)}}for(let _=1;_<=n;_++)for(let M=1;M<=i;M++){let T=(i+1)*(_-1)+(M-1),S=(i+1)*_+(M-1),y=(i+1)*_+M,U=(i+1)*(_-1)+M;o.push(T,S,U),o.push(S,y,U)}function v(_,M,T,S,y){let U=Math.cos(_),C=Math.sin(_),L=T/M*_,B=Math.cos(L);y.x=S*(2+B)*.5*U,y.y=S*(2+B)*C*.5,y.z=S*Math.sin(L)*.5}this.setIndex(o),this.setAttribute("position",new Ee(l,3)),this.setAttribute("normal",new Ee(c,3)),this.setAttribute("uv",new Ee(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}},Dr=class s extends Ke{constructor(e=new Ja(new E(-1,-1,0),new E(-1,1,0),new E(1,1,0)),t=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new E,l=new E,c=new ee,h=new E,d=[],u=[],p=[],f=[];function g(m){h=e.getPointAt(m/t,h);let x=a.normals[m],v=a.binormals[m];for(let _=0;_<=i;_++){let M=_/i*Math.PI*2,T=Math.sin(M),S=-Math.cos(M);l.x=S*x.x+T*v.x,l.y=S*x.y+T*v.y,l.z=S*x.z+T*v.z,l.normalize(),u.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,d.push(o.x,o.y,o.z)}}(function(){for(let m=0;m<t;m++)g(m);g(r===!1?t:0),function(){for(let m=0;m<=t;m++)for(let x=0;x<=i;x++)c.x=m/t,c.y=x/i,p.push(c.x,c.y)}(),function(){for(let m=1;m<=t;m++)for(let x=1;x<=i;x++){let v=(i+1)*(m-1)+(x-1),_=(i+1)*m+(x-1),M=(i+1)*m+x,T=(i+1)*(m-1)+x;f.push(v,_,T),f.push(_,M,T)}}()})(),this.setIndex(f),this.setAttribute("position",new Ee(d,3)),this.setAttribute("normal",new Ee(u,3)),this.setAttribute("uv",new Ee(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new s(new $a[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},gc=class extends Ke{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],n=new Set,i=new E,r=new E;if(e.index!==null){let a=e.attributes.position,o=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let d=l[c],u=d.start;for(let p=u,f=u+d.count;p<f;p+=3)for(let g=0;g<3;g++){let m=o.getX(p+g),x=o.getX(p+(g+1)%3);i.fromBufferAttribute(a,m),r.fromBufferAttribute(a,x),yd(i,r,n)===!0&&(t.push(i.x,i.y,i.z),t.push(r.x,r.y,r.z))}}}else{let a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){let h=3*o+c,d=3*o+(c+1)%3;i.fromBufferAttribute(a,h),r.fromBufferAttribute(a,d),yd(i,r,n)===!0&&(t.push(i.x,i.y,i.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new Ee(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function yd(s,e,t){let n=`${s.x},${s.y},${s.z}-${e.x},${e.y},${e.z}`,i=`${e.x},${e.y},${e.z}-${s.x},${s.y},${s.z}`;return t.has(n)!==!0&&t.has(i)!==!0&&(t.add(n),t.add(i),!0)}var Wg=Object.freeze({__proto__:null,BoxGeometry:Me,CapsuleGeometry:ac,CircleGeometry:to,ConeGeometry:Li,CylinderGeometry:je,DodecahedronGeometry:oc,EdgesGeometry:lc,ExtrudeGeometry:no,IcosahedronGeometry:io,LatheGeometry:eo,OctahedronGeometry:uc,PlaneGeometry:Gt,PolyhedronGeometry:Ii,RingGeometry:dc,ShapeGeometry:pc,SphereGeometry:kt,TetrahedronGeometry:fc,TorusGeometry:Ni,TorusKnotGeometry:mc,TubeGeometry:Dr,WireframeGeometry:gc});var ro=class extends ut{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Tt=class extends zt{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},nn=class extends Tt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ee(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return _t(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new xe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new xe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new xe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function wa(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function km(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Vm(s){let e=s.length,t=new Array(e);for(let n=0;n!==e;++n)t[n]=n;return t.sort(function(n,i){return s[n]-s[i]}),t}function Md(s,e,t){let n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let l=0;l!==e;++l)i[a++]=s[o+l]}return i}function Qd(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}var ti=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break t}a=t.length;break n}if(e>=r)break e;{let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break t}a=n,n=0}}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},vc=class extends ti{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:fr,endingEnd:fr}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,a=e+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case mr:r=e,o=2*t-n;break;case Ra:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case mr:a=e,l=2*n-t;break;case Ra:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}let c=.5*(n-t),h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,p=this._weightNext,f=(n-t)/(i-t),g=f*f,m=g*f,x=-u*m+2*u*g-u*f,v=(1+u)*m+(-1.5-2*u)*g+(-.5+u)*f+1,_=(-1-p)*m+(1.5+p)*g+.5*f,M=p*m-p*g;for(let T=0;T!==o;++T)r[T]=x*a[h+T]+v*a[c+T]+_*a[l+T]+M*a[d+T];return r}},so=class extends ti{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(i-t),d=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*d+a[l+u]*h;return r}},_c=class extends ti{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},$t=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=wa(t,this.TimeBufferType),this.values=wa(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:wa(e.times,Array),values:wa(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new _c(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new so(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new vc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case br:t=this.InterpolantFactoryMethodDiscrete;break;case Ai:t=this.InterpolantFactoryMethodLinear;break;case Zo:t=this.InterpolantFactoryMethodSmooth}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0){if(e===this.DefaultInterpolation)throw new Error(n);this.setInterpolation(this.DefaultInterpolation)}return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return br;case this.InterpolantFactoryMethodLinear:return Ai;case this.InterpolantFactoryMethodSmooth:return Zo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!=0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&km(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Zo,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o];if(c!==e[o+1]&&(o!==1||c!==e[0]))if(i)l=!0;else{let h=o*n,d=h-n,u=h+n;for(let p=0;p!==n;++p){let f=t[h+p];if(f!==t[d+p]||f!==t[u+p]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let h=o*n,d=a*n;for(let u=0;u!==n;++u)t[d+u]=t[h+u]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=new this.constructor(this.name,e,t);return n.createInterpolant=this.createInterpolant,n}};$t.prototype.TimeBufferType=Float32Array,$t.prototype.ValueBufferType=Float32Array,$t.prototype.DefaultInterpolation=Ai;var jn=class extends $t{};jn.prototype.ValueTypeName="bool",jn.prototype.ValueBufferType=Array,jn.prototype.DefaultInterpolation=br,jn.prototype.InterpolantFactoryMethodLinear=void 0,jn.prototype.InterpolantFactoryMethodSmooth=void 0;var ao=class extends $t{};ao.prototype.ValueTypeName="color";var Bn=class extends $t{};Bn.prototype.ValueTypeName="number";var xc=class extends ti{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t),c=e*o;for(let h=c+o;c!==h;c+=4)rt.slerpFlat(r,0,a,c-o,a,c,l);return r}},fn=class extends $t{InterpolantFactoryMethodLinear(e){return new xc(this.times,this.values,this.getValueSize(),e)}};fn.prototype.ValueTypeName="quaternion",fn.prototype.DefaultInterpolation=Ai,fn.prototype.InterpolantFactoryMethodSmooth=void 0;var qn=class extends $t{};qn.prototype.ValueTypeName="string",qn.prototype.ValueBufferType=Array,qn.prototype.DefaultInterpolation=br,qn.prototype.InterpolantFactoryMethodLinear=void 0,qn.prototype.InterpolantFactoryMethodSmooth=void 0;var En=class extends $t{};En.prototype.ValueTypeName="vector";var Di=class{constructor(e,t=-1,n,i=2500){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Qt(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Wm(n[a]).scale(i));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=n.length;r!==a;++r)t.push($t.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);let h=Vm(l);l=Md(l,1,h),c=Md(c,1,h),i||l[0]!==0||(l.push(r),c.push(c[0])),a.push(new Bn(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let c=e[o],h=c.name.match(r);if(h&&h.length>1){let d=h[1],u=i[d];u||(i[d]=u=[]),u.push(c)}}let a=[];for(let o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(h,d,u,p,f){if(u.length!==0){let g=[],m=[];Qd(u,g,m,p),g.length!==0&&f.push(new h(d,g,m))}},i=[],r=e.name||"default",a=e.fps||30,o=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let h=0;h<c.length;h++){let d=c[h].keys;if(d&&d.length!==0)if(d[0].morphTargets){let u={},p;for(p=0;p<d.length;p++)if(d[p].morphTargets)for(let f=0;f<d[p].morphTargets.length;f++)u[d[p].morphTargets[f]]=-1;for(let f in u){let g=[],m=[];for(let x=0;x!==d[p].morphTargets.length;++x){let v=d[p];g.push(v.time),m.push(v.morphTarget===f?1:0)}i.push(new Bn(".morphTargetInfluence["+f+"]",g,m))}l=u.length*a}else{let u=".bones["+t[h].name+"]";n(En,u+".position",d,"pos",i),n(fn,u+".quaternion",d,"rot",i),n(En,u+".scale",d,"scl",i)}}return i.length===0?null:new this(r,l,i,o)}resetDuration(){let e=0;for(let t=0,n=this.tracks.length;t!==n;++t){let i=this.tracks[t];e=Math.max(e,i.times[i.times.length-1])}return this.duration=e,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function Wm(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=function(t){switch(t.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Bn;case"vector":case"vector2":case"vector3":case"vector4":return En;case"color":return ao;case"quaternion":return fn;case"bool":case"boolean":return jn;case"string":return qn}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+t)}(s.type);if(s.times===void 0){let t=[],n=[];Qd(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}var Kn={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}},yc=class{constructor(e,t,n){let i=this,r,a=!1,o=0,l=0,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){l++,a===!1&&i.onStart!==void 0&&i.onStart(h,o,l),a=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,l),o===l&&(a=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return r?r(h):h},this.setURLModifier=function(h){return r=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let p=c[d],f=c[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return f}return null}}},Xm=new yc,Fn=class{constructor(e){this.manager=e!==void 0?e:Xm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Fn.DEFAULT_MATERIAL_NAME="__DEFAULT";var In={},Mc=class extends Error{constructor(e,t){super(e),this.response=t}},Ss=class extends Fn{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Kn.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(In[e]!==void 0)return void In[e].push({onLoad:t,onProgress:n,onError:i});In[e]=[],In[e].push({onLoad:t,onProgress:n,onError:i});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=In[e],d=c.body.getReader(),u=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),p=u?parseInt(u):0,f=p!==0,g=0,m=new ReadableStream({start(x){(function v(){d.read().then(({done:_,value:M})=>{if(_)x.close();else{g+=M.byteLength;let T=new ProgressEvent("progress",{lengthComputable:f,loaded:g,total:p});for(let S=0,y=h.length;S<y;S++){let U=h[S];U.onProgress&&U.onProgress(T)}x.enqueue(M),v()}})})()}});return new Response(m)}throw new Mc(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o===void 0)return c.text();{let h=/charset="?([^;"\s]*)"?/i.exec(o),d=h&&h[1]?h[1].toLowerCase():void 0,u=new TextDecoder(d);return c.arrayBuffer().then(p=>u.decode(p))}}}).then(c=>{Kn.add(e,c);let h=In[e];delete In[e];for(let d=0,u=h.length;d<u;d++){let p=h[d];p.onLoad&&p.onLoad(c)}}).catch(c=>{let h=In[e];if(h===void 0)throw this.manager.itemError(e),c;delete In[e];for(let d=0,u=h.length;d<u;d++){let p=h[d];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var Sc=class extends Fn{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Kn.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;let o=cs("img");function l(){h(),Kn.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(d){h(),i&&i(d),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}};var oo=class extends Fn{constructor(e){super(e)}load(e,t,n,i){let r=new Rt,a=new Sc(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}},Or=class extends tt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new xe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},bs=class extends Or{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(tt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new xe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},wl=new be,Sd=new E,bd=new E,Es=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ee(512,512),this.map=null,this.mapPass=null,this.matrix=new be,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Cr,this._frameExtents=new ee(1,1),this._viewportCount=1,this._viewports=[new $e(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Sd.setFromMatrixPosition(e.matrixWorld),t.position.copy(Sd),bd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(bd),t.updateMatrixWorld(),wl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(wl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),this.mapSize.x===512&&this.mapSize.y===512||(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},bc=class extends Es{constructor(){super(new pt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=2*Tr*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;n===t.fov&&i===t.aspect&&r===t.far||(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},lo=class extends Or{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(tt.DEFAULT_UP),this.updateMatrix(),this.target=new tt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new bc}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Ed=new be,ts=new E,Al=new E,Ec=class extends Es{constructor(){super(new pt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ee(4,2),this._viewportCount=6,this._viewports=[new $e(2,1,1,1),new $e(0,1,1,1),new $e(3,1,1,1),new $e(1,1,1,1),new $e(3,0,1,1),new $e(1,0,1,1)],this._cubeDirections=[new E(1,0,0),new E(-1,0,0),new E(0,0,1),new E(0,0,-1),new E(0,1,0),new E(0,-1,0)],this._cubeUps=[new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,0,1),new E(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ts.setFromMatrixPosition(e.matrixWorld),n.position.copy(ts),Al.copy(n.position),Al.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Al),n.updateMatrixWorld(),i.makeTranslation(-ts.x,-ts.y,-ts.z),Ed.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ed)}},ni=class extends Or{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Ec}get power(){return 4*this.intensity*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Tc=class extends Es{constructor(){super(new $n(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Tn=class extends Or{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(tt.DEFAULT_UP),this.updateMatrix(),this.target=new tt,this.shadow=new Tc}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var ii=class{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var co=class extends Fn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Kn.get(e);if(a!==void 0)return r.manager.itemStart(e),a.then?void a.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{i&&i(c)}):(setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a);let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;let l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Kn.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),Kn.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Kn.add(e,l),r.manager.itemStart(e)}};var Xg=new be,jg=new be,qg=new be;var ho=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Td(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Td();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function Td(){return(typeof performance>"u"?Date:performance).now()}var Yg=new E,Zg=new rt,Kg=new E,Jg=new E;var Qg=new E,$g=new rt,e0=new E,t0=new E;var wc=class{constructor(e,t,n){let i,r,a;switch(this.binding=e,this.valueSize=n,t){case"quaternion":i=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(6*n),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(5*n);break;default:i=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(5*n)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,i=this.valueSize,r=e*i+i,a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[r+o]=n[o];a=t}else{a+=t;let o=t/a;this._mixBufferRegion(n,r,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-r,t)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){o.setValue(n,i);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,a=i;r!==a;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=3*this.valueSize;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let a=0;a!==r;++a)e[t+a]=e[n+a]}_slerp(e,t,n,i){rt.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){let a=this._workIndex*r;rt.multiplyQuaternionsFlat(e,a,e,t,e,n),rt.slerpFlat(e,t,e,t,e,a,i)}_lerp(e,t,n,i,r){let a=1-i;for(let o=0;o!==r;++o){let l=t+o;e[l]=e[l]*a+e[n+o]*i}}_lerpAdditive(e,t,n,i,r){for(let a=0;a!==r;++a){let o=t+a;e[o]=e[o]+e[n+a]*i}}},Bc="\\[\\]\\.:\\/",jm=new RegExp("["+Bc+"]","g"),Rl="[^"+Bc+"]",qm="[^"+Bc.replace("\\.","")+"]",Ym=new RegExp("^"+/((?:WC+[\/:])*)/.source.replace("WC",Rl)+/(WCOD+)?/.source.replace("WCOD",qm)+/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Rl)+/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Rl)+"$"),Zm=["material","materials","bones","map"],Je=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(jm,"")}static parseTrackName(e){let t=Ym.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);Zm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e)return void console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.materials)return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);e=e.material.materials;break;case"bones":if(!e.skeleton)return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.map)return void console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);e=e.material.map;break;default:if(e[n]===void 0)return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);e=e[n]}if(c!==void 0){if(e[c]===void 0)return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);e=e[c]}}let a=e[i];if(a===void 0){let c=t.nodeName;return void console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e)}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);if(!e.geometry.morphAttributes)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Je.Composite=class{constructor(s,e,t){let n=t||Je.parseTrackName(e);this._targetGroup=s,this._bindings=s.subscribe_(e,n)}getValue(s,e){this.bind();let t=this._targetGroup.nCachedObjects_,n=this._bindings[t];n!==void 0&&n.getValue(s,e)}setValue(s,e){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].setValue(s,e)}bind(){let s=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=s.length;e!==t;++e)s[e].bind()}unbind(){let s=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=s.length;e!==t;++e)s[e].unbind()}},Je.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Je.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Je.prototype.GetterByBindingType=[Je.prototype._getValue_direct,Je.prototype._getValue_array,Je.prototype._getValue_arrayElement,Je.prototype._getValue_toArray],Je.prototype.SetterByBindingTypeAndVersioning=[[Je.prototype._setValue_direct,Je.prototype._setValue_direct_setNeedsUpdate,Je.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Je.prototype._setValue_array,Je.prototype._setValue_array_setNeedsUpdate,Je.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Je.prototype._setValue_arrayElement,Je.prototype._setValue_arrayElement_setNeedsUpdate,Je.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Je.prototype._setValue_fromArray,Je.prototype._setValue_fromArray_setNeedsUpdate,Je.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Ac=class{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;let r=t.tracks,a=r.length,o=new Array(a),l={endingStart:fr,endingEnd:fr};for(let c=0;c!==a;++c){let h=r[c].createInterpolant(null);o[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=2201,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){let i=this._clip.duration,r=e._clip.duration,a=r/i,o=i/r;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let i=this._mixer,r=i.time,a=this.timeScale,o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);let l=o.parameterPositions,c=o.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/a,c[1]=t/a,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled)return void this._updateWeight(e);let r=this._startTime;if(r!==null){let l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);let a=this._updateTime(t),o=this._updateWeight(e);if(o>0){let l=this._interpolants,c=this._propertyBindings;if(this.blendMode===Dp)for(let h=0,d=l.length;h!==d;++h)l[h].evaluate(a),c[h].accumulateAdditive(o);else for(let h=0,d=l.length;h!==d;++h)l[h].evaluate(a),c[h].accumulate(i,o)}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;n!==null&&(t*=n.evaluate(e)[0],e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t))}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,i=this.time+e,r=this._loopCount,a=n===2202;if(e===0)return r===-1?i:a&&(1&r)==1?t-i:i;if(n===2200){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else{if(!(i<0)){this.time=i;break e}i=0}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=t||i<0){let o=Math.floor(i/t);i-=t*o,r+=Math.abs(o);let l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){let c=e<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=i;if(a&&(1&r)==1)return t-i}return i}_setEndings(e,t,n){let i=this._interpolantSettings;n?(i.endingStart=mr,i.endingEnd=mr):(i.endingStart=e?this.zeroSlopeAtStart?mr:fr:Ra,i.endingEnd=t?this.zeroSlopeAtEnd?mr:fr:Ra)}_scheduleFading(e,t,n){let i=this._mixer,r=i.time,a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);let o=a.parameterPositions,l=a.sampleValues;return o[0]=r,l[0]=t,o[1]=r+e,l[1]=n,this}},Km=new Float32Array(1),Ts=class extends On{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){let n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,a=e._propertyBindings,o=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName,h=c[l];h===void 0&&(h={},c[l]=h);for(let d=0;d!==r;++d){let u=i[d],p=u.name,f=h[p];if(f!==void 0)++f.referenceCount,a[d]=f;else{if(f=a[d],f!==void 0){f._cacheIndex===null&&(++f.referenceCount,this._addInactiveBinding(f,l,p));continue}let g=t&&t._propertyBindings[d].binding.parsedPath;f=new wc(Je.create(n,p,g),u.ValueTypeName,u.getValueSize()),++f.referenceCount,this._addInactiveBinding(f,l,p),a[d]=f}o[d].resultBuffer=f.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];r.useCount++==0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.useCount==0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let i=this._actions,r=this._actionsByClip,a=r[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=a;else{let o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,a=this._actionsByClip,o=a[r],l=o.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null,delete o.actionByRoot[(e._localRoot||this._root).uuid],l.length===0&&delete a[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.referenceCount==0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){let i=this._bindingsByRootAndName,r=this._bindings,a=i[t];a===void 0&&(a={},i[t]=a),a[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,o=a[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete o[r],Object.keys(o).length===0&&delete a[i]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new so(new Float32Array(2),new Float32Array(2),1,Km),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){let i=t||this._root,r=i.uuid,a=typeof e=="string"?Di.findByName(i,e):e,o=a!==null?a.uuid:e,l=this._actionsByClip[o],c=null;if(n===void 0&&(n=a!==null?a.blendMode:Np),l!==void 0){let d=l.actionByRoot[r];if(d!==void 0&&d.blendMode===n)return d;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;let h=new Ac(this,a,t,n);return this._bindAction(h,c),this._addInactiveAction(h,o,r),h}existingAction(e,t){let n=t||this._root,i=n.uuid,r=typeof e=="string"?Di.findByName(n,e):e,a=r?r.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){let e=this._actions;for(let t=this._nActiveActions-1;t>=0;--t)e[t].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),a=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,r,a);let o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){let a=r.knownActions;for(let o=0,l=a.length;o!==l;++o){let c=a[o];this._deactivateAction(c);let h=c._cacheIndex,d=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,d._cacheIndex=h,t[h]=d,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let r in n){let a=n[r].actionByRoot[t];a!==void 0&&(this._deactivateAction(a),this._removeInactiveAction(a))}let i=this._bindingsByRootAndName[t];if(i!==void 0)for(let r in i){let a=i[r];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};var n0=new ee;var i0=new E,r0=new E;var s0=new E;var a0=new E,o0=new be,l0=new be;var c0=new E,h0=new xe,u0=new xe;var d0=new E,p0=new E,f0=new E;var m0=new E,g0=new hs;var v0=new Ct;var _0=new E;typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Cl}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Cl);var As=new E;function rn(s,e,t,n,i,r){let a=2*Math.PI*i/4,o=Math.max(r-2*i,0),l=Math.PI/4;As.copy(e),As[n]=0,As.normalize();let c=.5*a/(a+o),h=1-As.angleTo(s)/l;return Math.sign(As[t])===1?h*c:o/(a+o)+c+c*(1-h)}var Bi=class extends Me{constructor(e=1,t=1,n=1,i=2,r=.1){if(i=i*2+1,r=Math.min(e/2,t/2,n/2,r),super(1,1,1,i,i,i),i===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let o=new E,l=new E,c=new E(e,t,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,d=this.attributes.normal.array,u=this.attributes.uv.array,p=h.length/6,f=new E,g=.5/i;for(let m=0,x=0;m<h.length;m+=3,x+=2)switch(o.fromArray(h,m),l.copy(o),l.x-=Math.sign(l.x)*g,l.y-=Math.sign(l.y)*g,l.z-=Math.sign(l.z)*g,l.normalize(),h[m+0]=c.x*Math.sign(o.x)+l.x*r,h[m+1]=c.y*Math.sign(o.y)+l.y*r,h[m+2]=c.z*Math.sign(o.z)+l.z*r,d[m+0]=l.x,d[m+1]=l.y,d[m+2]=l.z,Math.floor(m/p)){case 0:f.set(1,0,0),u[x+0]=rn(f,l,"z","y",r,n),u[x+1]=1-rn(f,l,"y","z",r,t);break;case 1:f.set(-1,0,0),u[x+0]=1-rn(f,l,"z","y",r,n),u[x+1]=1-rn(f,l,"y","z",r,t);break;case 2:f.set(0,1,0),u[x+0]=1-rn(f,l,"x","z",r,e),u[x+1]=rn(f,l,"z","x",r,n);break;case 3:f.set(0,-1,0),u[x+0]=1-rn(f,l,"x","z",r,e),u[x+1]=1-rn(f,l,"z","x",r,n);break;case 4:f.set(0,0,1),u[x+0]=1-rn(f,l,"x","y",r,e),u[x+1]=1-rn(f,l,"y","x",r,t);break;case 5:f.set(0,0,-1),u[x+0]=rn(f,l,"x","y",r,e),u[x+1]=1-rn(f,l,"y","x",r,t);break}}};function Fc(s,e){if(e===Bd)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===ws||e===fo){let t=s.getIndex();if(t===null){let a=[],o=s.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);s.setIndex(a),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let n=t.count-2,i=[];if(e===ws)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}var Hi=class extends Fn{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Xc(t)}),this.register(function(t){return new eh(t)}),this.register(function(t){return new th(t)}),this.register(function(t){return new nh(t)}),this.register(function(t){return new qc(t)}),this.register(function(t){return new Yc(t)}),this.register(function(t){return new Zc(t)}),this.register(function(t){return new Kc(t)}),this.register(function(t){return new Wc(t)}),this.register(function(t){return new Jc(t)}),this.register(function(t){return new jc(t)}),this.register(function(t){return new $c(t)}),this.register(function(t){return new Qc(t)}),this.register(function(t){return new kc(t)}),this.register(function(t){return new ih(t)}),this.register(function(t){return new rh(t)})}load(e,t,n,i){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let c=ii.extractUrlBase(e);a=ii.resolveURL(c,this.path)}else a=ii.extractUrlBase(e);this.manager.itemStart(e);let o=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Ss(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r,a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===ip){try{a[Be.KHR_BINARY_GLTF]=new sh(e)}catch(d){i&&i(d);return}r=JSON.parse(a[Be.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new dh(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let d=this.pluginCallbacks[h](c);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[d.name]=d,a[d.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let d=r.extensionsUsed[h],u=r.extensionsRequired||[];switch(d){case Be.KHR_MATERIALS_UNLIT:a[d]=new Vc;break;case Be.KHR_DRACO_MESH_COMPRESSION:a[d]=new ah(r,this.dracoLoader);break;case Be.KHR_TEXTURE_TRANSFORM:a[d]=new oh;break;case Be.KHR_MESH_QUANTIZATION:a[d]=new lh;break;default:u.indexOf(d)>=0&&o[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}};function Jm(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}var Be={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},kc=class{constructor(e){this.parser=e,this.name=Be.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,h=new xe(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],xt);let d=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Tn(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new ni(h),c.distance=d;break;case"spot":c=new lo(h),c.distance=d,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,ai(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}},Vc=class{constructor(){this.name=Be.KHR_MATERIALS_UNLIT}getMaterialType(){return ht}extendParams(e,t,n){let i=[];e.color=new xe(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],xt),e.opacity=a[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,qe))}return Promise.all(i)}},Wc=class{constructor(e){this.parser=e,this.name=Be.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},Xc=class{constructor(e){this.parser=e,this.name=Be.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:nn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){let o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ee(o,o)}return Promise.all(r)}},jc=class{constructor(e){this.parser=e,this.name=Be.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:nn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}},qc=class{constructor(e){this.parser=e,this.name=Be.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:nn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new xe(0,0,0),t.sheenRoughness=0,t.sheen=1;let a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){let o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],xt)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,qe)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}},Yc=class{constructor(e){this.parser=e,this.name=Be.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:nn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}},Zc=class{constructor(e){this.parser=e,this.name=Be.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:nn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;let o=a.attenuationColor||[1,1,1];return t.attenuationColor=new xe().setRGB(o[0],o[1],o[2],xt),Promise.all(r)}},Kc=class{constructor(e){this.parser=e,this.name=Be.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:nn}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},Jc=class{constructor(e){this.parser=e,this.name=Be.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:nn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));let o=a.specularColorFactor||[1,1,1];return t.specularColor=new xe().setRGB(o[0],o[1],o[2],xt),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,qe)),Promise.all(r)}},Qc=class{constructor(e){this.parser=e,this.name=Be.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:nn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}},$c=class{constructor(e){this.parser=e,this.name=Be.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:nn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}},eh=class{constructor(e){this.parser=e,this.name=Be.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let r=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},th=class{constructor(e){this.parser=e,this.name=Be.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=i.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},nh=class{constructor(e){this.parser=e,this.name=Be.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=i.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},ih=class{constructor(e){this.name=Be.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let l=i.byteOffset||0,c=i.byteLength||0,h=i.count,d=i.byteStride,u=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,d,u,i.mode,i.filter).then(function(p){return p.buffer}):a.ready.then(function(){let p=new ArrayBuffer(h*d);return a.decodeGltfBuffer(new Uint8Array(p),h,d,u,i.mode,i.filter),p})})}else return null}},rh=class{constructor(e){this.name=Be.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let c of i.primitives)if(c.mode!==sn.TRIANGLES&&c.mode!==sn.TRIANGLE_STRIP&&c.mode!==sn.TRIANGLE_FAN&&c.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],l={};for(let c in a)o.push(this.parser.getDependency("accessor",a[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{let h=c.pop(),d=h.isGroup?h.children:[h],u=c[0].count,p=[];for(let f of d){let g=new be,m=new E,x=new rt,v=new E(1,1,1),_=new Wa(f.geometry,f.material,u);for(let M=0;M<u;M++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,M),l.ROTATION&&x.fromBufferAttribute(l.ROTATION,M),l.SCALE&&v.fromBufferAttribute(l.SCALE,M),_.setMatrixAt(M,g.compose(m,x,v));for(let M in l)if(M==="_COLOR_0"){let T=l[M];_.instanceColor=new Pi(T.array,T.itemSize,T.normalized)}else M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"&&f.geometry.setAttribute(M,l[M]);tt.prototype.copy.call(_,f),this.parser.assignFinalMaterial(_),p.push(_)}return h.isGroup?(h.clear(),h.add(...p),h):p[0]}))}},ip="glTF",Rs=12,$d={JSON:1313821514,BIN:5130562},sh=class{constructor(e){this.name=Be.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Rs),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==ip)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-Rs,r=new DataView(e,Rs),a=0;for(;a<i;){let o=r.getUint32(a,!0);a+=4;let l=r.getUint32(a,!0);if(a+=4,l===$d.JSON){let c=new Uint8Array(e,Rs+a,o);this.content=n.decode(c)}else if(l===$d.BIN){let c=Rs+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},ah=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Be.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(let h in a){let d=hh[h]||h.toLowerCase();o[d]=a[h]}for(let h in e.attributes){let d=hh[h]||h.toLowerCase();if(a[h]!==void 0){let u=n.accessors[e.attributes[h]],p=Hr[u.componentType];c[d]=p.name,l[d]=u.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(d,u){i.decodeDracoFile(h,function(p){for(let f in p.attributes){let g=p.attributes[f],m=l[f];m!==void 0&&(g.normalized=m)}d(p)},o,c,xt,u)})})}},oh=class{constructor(){this.name=Be.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},lh=class{constructor(){this.name=Be.KHR_MESH_QUANTIZATION}},xo=class extends ti{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=i-t,d=(n-t)/h,u=d*d,p=u*d,f=e*c,g=f-c,m=-2*p+3*u,x=p-u,v=1-m,_=x-u+d;for(let M=0;M!==o;M++){let T=a[g+M+o],S=a[g+M+l]*h,y=a[f+M+o],U=a[f+M]*h;r[M]=v*T+_*S+m*y+x*U}return r}},Qm=new rt,ch=class extends xo{interpolate_(e,t,n,i){let r=super.interpolate_(e,t,n,i);return Qm.fromArray(r).normalize().toArray(r),r}},sn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Hr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},ep={9728:At,9729:Ft,9984:Aa,9985:Ic,9986:ns,9987:wi},tp={33071:dn,33648:ls,10497:mn},Hc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},hh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},si={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},$m={CUBICSPLINE:void 0,LINEAR:Ai,STEP:br},zc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function eg(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Tt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:bn})),s.DefaultMaterial}function Fi(s,e,t){for(let n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function ai(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function tg(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,h=e.length;c<h;c++){let d=e[c];if(d.POSITION!==void 0&&(n=!0),d.NORMAL!==void 0&&(i=!0),d.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);let a=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){let d=e[c];if(n){let u=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):s.attributes.position;a.push(u)}if(i){let u=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):s.attributes.normal;o.push(u)}if(r){let u=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):s.attributes.color;l.push(u)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){let h=c[0],d=c[1],u=c[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=d),r&&(s.morphAttributes.color=u),s.morphTargetsRelative=!0,s})}function ng(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function ig(s){let e,t=s.extensions&&s.extensions[Be.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Gc(t.attributes):e=s.indices+":"+Gc(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+Gc(s.targets[n]);return e}function Gc(s){let e="",t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function uh(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function rg(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}var sg=new be,dh=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Jm,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,r=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,r=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&r<98?this.textureLoader=new oo(this.options.manager):this.textureLoader=new co(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Ss(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return Fi(r,o,i),ai(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){let a=t[i].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let i=0,r=e.length;i<r;i++){let a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),r=(a,o)=>{let l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(let[c,h]of a.children.entries())r(h,o.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Be.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(r,a){n.load(ii.resolveURL(t.uri,i.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let a=Hc[i.type],o=Hr[i.componentType],l=i.normalized===!0,c=new o(i.count*a);return Promise.resolve(new ft(c,a,l))}let r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],l=Hc[i.type],c=Hr[i.componentType],h=c.BYTES_PER_ELEMENT,d=h*l,u=i.byteOffset||0,p=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,f=i.normalized===!0,g,m;if(p&&p!==d){let x=Math.floor(u/p),v="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+x+":"+i.count,_=t.cache.get(v);_||(g=new c(o,x*p,i.count*p/h),_=new Ir(g,p/h),t.cache.add(v,_)),m=new Ri(_,l,u%p/h,f)}else o===null?g=new c(i.count*l):g=new c(o,u,i.count*l),m=new ft(g,l,f);if(i.sparse!==void 0){let x=Hc.SCALAR,v=Hr[i.sparse.indices.componentType],_=i.sparse.indices.byteOffset||0,M=i.sparse.values.byteOffset||0,T=new v(a[1],_,i.sparse.count*x),S=new c(a[2],M,i.sparse.count*l);o!==null&&(m=new ft(m.array.slice(),m.itemSize,m.normalized));for(let y=0,U=T.length;y<U;y++){let C=T[y];if(m.setX(C,S[y*l]),l>=2&&m.setY(C,S[y*l+1]),l>=3&&m.setZ(C,S[y*l+2]),l>=4&&m.setW(C,S[y*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let i=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let u=(r.samplers||{})[a.sampler]||{};return h.magFilter=ep[u.magFilter]||Ft,h.minFilter=ep[u.minFilter]||wi,h.wrapS=tp[u.wrapS]||mn,h.wrapT=tp[u.wrapT]||mn,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());let a=i.images[e],o=self.URL||self.webkitURL,l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(d){c=!0;let u=new Blob([d],{type:a.mimeType});return l=o.createObjectURL(u),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(l).then(function(d){return new Promise(function(u,p){let f=u;t.isImageBitmapLoader===!0&&(f=function(g){let m=new Rt(g);m.needsUpdate=!0,u(m)}),t.load(ii.resolveURL(d,r.path),f,void 0,p)})}).then(function(d){return c===!0&&o.revokeObjectURL(l),d.userData.mimeType=a.mimeType||rg(a.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),d});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[Be.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[Be.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let l=r.associations.get(a);a=r.extensions[Be.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new ms,zt.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new fs,zt.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(i||r||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Tt}loadMaterial(e){let t=this,n=this.json,i=this.extensions,r=n.materials[e],a,o={},l=r.extensions||{},c=[];if(l[Be.KHR_MATERIALS_UNLIT]){let d=i[Be.KHR_MATERIALS_UNLIT];a=d.getMaterialType(),c.push(d.extendParams(o,r,t))}else{let d=r.pbrMetallicRoughness||{};if(o.color=new xe(1,1,1),o.opacity=1,Array.isArray(d.baseColorFactor)){let u=d.baseColorFactor;o.color.setRGB(u[0],u[1],u[2],xt),o.opacity=u[3]}d.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",d.baseColorTexture,qe)),o.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,o.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",d.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",d.metallicRoughnessTexture))),a=this._invokeOne(function(u){return u.getMaterialType&&u.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(u){return u.extendMaterialParams&&u.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=Oi);let h=r.alphaMode||zc.OPAQUE;if(h===zc.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===zc.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==ht&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new ee(1,1),r.normalTexture.scale!==void 0)){let d=r.normalTexture.scale;o.normalScale.set(d,d)}if(r.occlusionTexture!==void 0&&a!==ht&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==ht){let d=r.emissiveFactor;o.emissive=new xe().setRGB(d[0],d[1],d[2],xt)}return r.emissiveTexture!==void 0&&a!==ht&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,qe)),Promise.all(c).then(function(){let d=new a(o);return r.name&&(d.name=r.name),ai(d,r),t.associations.set(d,{materials:e}),r.extensions&&Fi(i,d,r),d})}createUniqueName(e){let t=Je.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[Be.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return np(l,o,t)})}let a=[];for(let o=0,l=e.length;o<l;o++){let c=e[o],h=ig(c),d=i[h];if(d)a.push(d.promise);else{let u;c.extensions&&c.extensions[Be.KHR_DRACO_MESH_COMPRESSION]?u=r(c):u=np(new Ke,c,t),i[h]={primitive:c,promise:u},a.push(u)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,i=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){let h=a[l].material===void 0?eg(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],d=[];for(let p=0,f=h.length;p<f;p++){let g=h[p],m=a[p],x,v=c[p];if(m.mode===sn.TRIANGLES||m.mode===sn.TRIANGLE_STRIP||m.mode===sn.TRIANGLE_FAN||m.mode===void 0)x=r.isSkinnedMesh===!0?new ka(g,v):new Ue(g,v),x.isSkinnedMesh===!0&&x.normalizeSkinWeights(),m.mode===sn.TRIANGLE_STRIP?x.geometry=Fc(x.geometry,fo):m.mode===sn.TRIANGLE_FAN&&(x.geometry=Fc(x.geometry,ws));else if(m.mode===sn.LINES)x=new Xa(g,v);else if(m.mode===sn.LINE_STRIP)x=new Ur(g,v);else if(m.mode===sn.LINE_LOOP)x=new ja(g,v);else if(m.mode===sn.POINTS)x=new qa(g,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(x.geometry.morphAttributes).length>0&&ng(x,r),x.name=t.createUniqueName(r.name||"mesh_"+e),ai(x,r),m.extensions&&Fi(i,x,m),t.assignFinalMaterial(x),d.push(x)}for(let p=0,f=d.length;p<f;p++)t.associations.set(d[p],{meshes:e,primitives:p});if(d.length===1)return r.extensions&&Fi(i,d[0],r),d[0];let u=new Ve;r.extensions&&Fi(i,u,r),t.associations.set(u,{meshes:e});for(let p=0,f=d.length;p<f;p++)u.add(d[p]);return u})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new pt(Hd.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new $n(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),ai(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let r=i.pop(),a=i,o=[],l=[];for(let c=0,h=a.length;c<h;c++){let d=a[c];if(d){o.push(d);let u=new be;r!==null&&u.fromArray(r.array,c*16),l.push(u)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Va(o,l)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,a=[],o=[],l=[],c=[],h=[];for(let d=0,u=i.channels.length;d<u;d++){let p=i.channels[d],f=i.samplers[p.sampler],g=p.target,m=g.node,x=i.parameters!==void 0?i.parameters[f.input]:f.input,v=i.parameters!==void 0?i.parameters[f.output]:f.output;g.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",x)),l.push(this.getDependency("accessor",v)),c.push(f),h.push(g))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(d){let u=d[0],p=d[1],f=d[2],g=d[3],m=d[4],x=[];for(let v=0,_=u.length;v<_;v++){let M=u[v],T=p[v],S=f[v],y=g[v],U=m[v];if(M===void 0)continue;M.updateMatrix&&M.updateMatrix();let C=n._createAnimationTracks(M,T,S,y,U);if(C)for(let L=0;L<C.length;L++)x.push(C[L])}return new Di(r,void 0,x)})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=i.weights.length;l<c;l++)o.morphTargetInfluences[l]=i.weights[l]}),a})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=i.children||[];for(let c=0,h=o.length;c<h;c++)a.push(n.getDependency("node",o[c]));let l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){let h=c[0],d=c[1],u=c[2];u!==null&&h.traverse(function(p){p.isSkinnedMesh&&p.bind(u,sg)});for(let p=0,f=d.length;p<f;p++)h.add(d[p]);return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?i.createUniqueName(r.name):"",o=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(r.isBone===!0?h=new ps:c.length>1?h=new Ve:c.length===1?h=c[0]:h=new tt,h!==c[0])for(let d=0,u=c.length;d<u;d++)h.add(c[d]);if(r.name&&(h.userData.name=r.name,h.name=a),ai(h,r),r.extensions&&Fi(n,h,r),r.matrix!==void 0){let d=new be;d.fromArray(r.matrix),h.applyMatrix4(d)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,r=new Ve;n.name&&(r.name=i.createUniqueName(n.name)),ai(r,n),n.extensions&&Fi(t,r,n);let a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(i.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let h=0,d=l.length;h<d;h++)r.add(l[h]);let c=h=>{let d=new Map;for(let[u,p]of i.associations)(u instanceof zt||u instanceof Rt)&&d.set(u,p);return h.traverse(u=>{let p=i.associations.get(u);p!=null&&d.set(u,p)}),d};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){let a=[],o=e.name?e.name:e.uuid,l=[];si[r.path]===si.weights?e.traverse(function(u){u.morphTargetInfluences&&l.push(u.name?u.name:u.uuid)}):l.push(o);let c;switch(si[r.path]){case si.weights:c=Bn;break;case si.rotation:c=fn;break;case si.position:case si.scale:c=En;break;default:switch(n.itemSize){case 1:c=Bn;break;case 2:case 3:default:c=En;break}break}let h=i.interpolation!==void 0?$m[i.interpolation]:Ai,d=this._getArrayFromAccessor(n);for(let u=0,p=l.length;u<p;u++){let f=new c(l[u]+"."+si[r.path],t.array,d,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(f),a.push(f)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=uh(t.constructor),i=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof fn?ch:xo;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function ag(s,e,t){let n=e.attributes,i=new Ct;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(i.set(new E(l[0],l[1],l[2]),new E(c[0],c[1],c[2])),o.normalized){let h=uh(Hr[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new E,l=new E;for(let c=0,h=r.length;c<h;c++){let d=r[c];if(d.POSITION!==void 0){let u=t.json.accessors[d.POSITION],p=u.min,f=u.max;if(p!==void 0&&f!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(f[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(f[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(f[2]))),u.normalized){let g=uh(Hr[u.componentType]);l.multiplyScalar(g)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;let a=new Ht;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=a}function np(s,e,t){let n=e.attributes,i=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){s.setAttribute(o,l)})}for(let a in n){let o=hh[a]||a.toLowerCase();o in s.attributes||i.push(r(n[a],o))}if(e.indices!==void 0&&!s.index){let a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});i.push(a)}return We.workingColorSpace!==xt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${We.workingColorSpace}" not supported.`),ai(s,e),ag(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?tg(s,e.targets,t):s})}var yo={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var qt=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},og=new $n(-1,1,1,-1,0,1),ph=class extends Ke{constructor(){super(),this.setAttribute("position",new Ee([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ee([0,2,0,0,2,0],2))}},lg=new ph,oi=class{constructor(e){this._mesh=new Ue(lg,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,og)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Mo=class extends qt{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof ut?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=ri.clone(e.uniforms),this.material=new ut({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new oi(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Cs=class extends qt{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let i=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}},So=class extends qt{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Ps=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new ee);this._width=n.width,this._height=n.height,t=new Ot(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:gn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Mo(yo),this.copyPass.material.blending=Ad,this.clock=new ho}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let i=0,r=this.passes.length;i<r;i++){let a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Cs!==void 0&&(a instanceof Cs?n=!0:a instanceof So&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new ee);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Ls=class extends qt{constructor(e,t,n=null,i=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new xe}render(e,t,n){let i=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=i}};var rp={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new xe(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var zi=class s extends qt{constructor(e,t,n,i){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new ee(e.x,e.y):new ee(256,256),this.clearColor=new xe(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Ot(r,a,{type:gn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){let u=new Ot(r,a,{type:gn});u.texture.name="UnrealBloomPass.h"+d,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);let p=new Ot(r,a,{type:gn});p.texture.name="UnrealBloomPass.v"+d,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),r=Math.round(r/2),a=Math.round(a/2)}let o=rp;this.highPassUniforms=ri.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ut({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[d])),this.separableBlurMaterials[d].uniforms.invSize.value=new ee(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new E(1,1,1),new E(1,1,1),new E(1,1,1),new E(1,1,1),new E(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=yo;this.copyUniforms=ri.clone(h.uniforms),this.blendMaterial=new ut({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Hn,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new xe,this.oldClearAlpha=1,this.basic=new ht,this.fsQuad=new oi(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new ee(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}getSeperableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new ut({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ee(.5,.5)},direction:{value:new ee(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new ut({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};zi.BlurDirectionX=new ee(1,0);zi.BlurDirectionY=new ee(0,1);var sp={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Is=class extends qt{constructor(){super();let e=sp;this.uniforms=ri.clone(e.uniforms),this.material=new ro({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new oi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},We.getTransfer(this._outputColorSpace)===Qe&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Rc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Cc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Pc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Br?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Lc&&(this.material.defines.AGX_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Ye=(s,e={})=>new Tt(Object.assign({color:s,roughness:.6,metalness:0},e));function me(s,e,t,n,i,r,a=!0){let o=new Ue(s,e);return o.position.set(n,i,r),o.castShadow=a,o.receiveShadow=!0,t.add(o),o}var mt=(s,e,t,n=.12)=>new Bi(s,e,t,3,n);function bo(s,e={}){let t=Object.assign({w:1024,h:256,bg:null,fg:"#ffffff",sub:"",subFg:"#d9f3e8",font:"900",pad:60},e),n=document.createElement("canvas");n.width=t.w,n.height=t.h;let i=n.getContext("2d");t.bg&&(i.fillStyle=t.bg,i.fillRect(0,0,t.w,t.h)),i.fillStyle=t.fg,i.textAlign="center",i.textBaseline="middle";let r=t.h*(t.sub?.44:.6);for(i.font=`${t.font} ${r}px Inter, Arial, sans-serif`;i.measureText(s).width>t.w-t.pad*2&&r>20;)r-=4,i.font=`${t.font} ${r}px Inter, Arial, sans-serif`;i.fillText(s,t.w/2,t.sub?t.h*.4:t.h/2),t.sub&&(i.fillStyle=t.subFg,i.font=`600 ${t.h*.16}px Inter, Arial, sans-serif`,i.fillText(t.sub,t.w/2,t.h*.78));let a=new en(n);return a.colorSpace=qe,a.anisotropy=8,a}function cg(s,e=3116906){let t=new Ve,n=new Ve;t.add(n);let i=Ye(15659507,{roughness:.45,metalness:.05}),r=Ye(2369581,{roughness:.7}),a=Ye(14278114,{roughness:.18,metalness:.9}),o=Ye(1911866,{roughness:.08,metalness:.3}),l=Ye(e,{roughness:.45}),c=Ye(1381911,{roughness:.9});me(new Me(7.4,.35,1.1),r,n,-.2,.85,0),me(mt(2.1,2.05,2.45,.22),i,n,2.5,2.05,0),me(mt(1.25,1.05,2.35,.2),i,n,3.95,1.5,0),me(mt(.12,.75,2.3,.05),a,n,4.58,1.45,0);for(let C=0;C<5;C++)me(new Me(.08,.06,1.9),r,n,4.62,1.18+C*.13,0,!1);me(mt(.35,.35,2.6,.08),r,n,4.55,.85,0);let h=me(new Me(.08,.85,2.2),o,n,3.52,2.5,0);h.rotation.z=.28,[1,-1].forEach(C=>{me(new Me(1.15,.72,.06),o,n,2.75,2.5,C*1.23,!1)}),me(new Me(.06,.7,2.1),o,n,1.44,2.5,0,!1),[1,-1].forEach(C=>{me(new Me(2.12,.16,.04),l,n,2.5,1.62,C*1.235,!1)});let d=bo(s.toUpperCase(),{w:512,h:256,fg:"#"+e.toString(16).padStart(6,"0"),sub:"SEPTIC SERVICE",subFg:"#33413b"});[1,-1].forEach(C=>{let L=me(new Gt(1.5,.75),new Tt({map:d,transparent:!0,roughness:.5}),n,2.55,1.95,C*1.236,!1);C<0&&(L.rotation.y=Math.PI)}),[1,-1].forEach(C=>{me(new Me(.08,.35,.22),r,n,3.3,2.35,C*1.42),me(new Me(.5,.04,.04),r,n,3.4,2.35,C*1.3)});let u=Ye(16774872,{emissive:16773568,emissiveIntensity:0});[.82,-.82].forEach(C=>me(new je(.16,.16,.1,18),u,n,4.6,1.65,C,!1).rotation.z=Math.PI/2);let p=new ht({color:16773576,transparent:!0,opacity:0,depthWrite:!1,blending:Hn,side:Oi}),f=[];[.82,-.82].forEach(C=>{let L=new Ue(new Li(1.6,9,24,1,!0),p);L.rotation.z=Math.PI/2,L.position.set(9.1,1.4,C),n.add(L),f.push(L)});let g=Ye(16726831,{emissive:16719888,emissiveIntensity:.3});[1,-1].forEach(C=>me(new Me(.06,.25,.35),g,n,-3.95,1.05,C*1.05,!1));let m=Ye(16753434,{emissive:16750848,emissiveIntensity:.2,roughness:.3});me(mt(.35,.16,1.5,.06),m,n,2.45,3.15,0);let x=Ye(13883870,{roughness:.42,metalness:.25}),v=me(new je(1.18,1.18,4.3,40),x,n,-1.25,2.25,0);v.rotation.z=Math.PI/2,[-3.4,.9].forEach((C,L)=>{let B=me(new kt(1.18,32,16,0,Math.PI*2,0,Math.PI/2),x,n,C,2.25,0);B.rotation.z=L?-Math.PI/2:Math.PI/2,B.scale.y=.32}),[-2.9,-1.25,.4].forEach(C=>{let L=me(new je(1.2,1.2,.1,40),a,n,C,2.25,0);L.rotation.z=Math.PI/2});let _=bo(s.toUpperCase(),{w:1024,h:220,fg:"#"+e.toString(16).padStart(6,"0")}),M=new Tt({map:_,transparent:!0,roughness:.3,metalness:.2});[0,Math.PI].forEach(C=>{let L=new Ue(new je(1.195,1.195,3.2,40,1,!0,-.45+Math.PI/2,.9),M);L.rotation.z=Math.PI/2,L.rotation.x=C,L.position.set(-1.25,2.25,0),n.add(L)});let T=me(new je(1.192,1.192,4,40,1,!0,Math.PI*.92,Math.PI*.16),l,n,-1.25,2.25,0,!1);T.rotation.z=Math.PI/2,T.material.side=Oi;let S=T.clone();S.rotation.x=Math.PI,n.add(S),me(new je(.32,.32,.25,20),a,n,-1.2,3.5,0),me(new je(.14,.14,.5,14),r,n,-3.75,1.5,.55).rotation.z=Math.PI/2;let y=new Ve;y.position.set(-3.1,1.3,-1.25),n.add(y),me(new Ni(.38,.12,10,28),Ye(2829875,{roughness:.8}),y,0,0,0).rotation.y=0,me(new je(.45,.45,.04,24),Ye(13650474),y,0,0,-.12).rotation.x=Math.PI/2;for(let C=0;C<4;C++)me(new Me(.04,.04,.45),a,n,-3.55,1.3+C*.38,1.05,!1);[-.2,.2].forEach(C=>me(new Me(.05,1.5,.05),a,n,-3.55,1.85,1.05+C,!1)),me(mt(1.2,.55,.6,.06),a,n,.6,1.05,1);let U=[];return[[3.65,1.12],[3.65,-1.12],[-1.7,1.12],[-1.7,-1.12],[-2.95,1.12],[-2.95,-1.12]].forEach(C=>{let L=new Ve;L.position.set(C[0],.55,C[1]),n.add(L);let B=me(new je(.55,.55,.42,28),c,L,0,0,0);B.rotation.x=Math.PI/2;let P=me(new je(.3,.3,.44,18),a,L,0,0,0,!1);P.rotation.x=Math.PI/2,me(new je(.08,.08,.46,8),r,L,0,0,0,!1).rotation.x=Math.PI/2,U.push(L)}),[3.65,-2.3].forEach((C,L)=>[1,-1].forEach(B=>{let P=me(new je(.68,.68,.5,24,1,!0,0,Math.PI),r,n,C,.6,B*1.12);P.rotation.x=Math.PI/2,P.rotation.y=Math.PI/2,L&&P.scale.set(1,1,1),P.material.side=Oi})),me(new je(.08,.08,1.4,12),a,n,1.35,2.6,-1.15),t.userData={wheels:U,hl:u,cones:f,coneMat:p,beacon:m,body:n},t.setLights=C=>{u.emissiveIntensity=C?3:0,p.opacity=C?.09:0,g.emissiveIntensity=C?1.5:.3},t.tick=(C,L,B)=>{U.forEach(P=>{P.rotation.z=-B/.55}),m.emissiveIntensity=L&&Math.sin(C*12)>0?2.5:.2,n.position.y=L?Math.sin(C*17)*.015:0},t}function fh(s,e,t,n,i,r,a,o,l,c){let h=Ye(2369581,{roughness:.7}),d=Ye(14278114,{roughness:.2,metalness:.85}),u=Ye(1381911,{roughness:.9}),p=[];[[a,1],[a,-1],[o,1],[o,-1]].forEach(([v,_])=>{let M=new Ve;M.position.set(v,l,_*1.02),e.add(M);let T=me(new je(l,l,.36,26),u,M,0,0,0);T.rotation.x=Math.PI/2;let S=me(new je(l*.55,l*.55,.38,16),d,M,0,0,0,!1);S.rotation.x=Math.PI/2,p.push(M)});let f=Ye(16774872,{emissive:16773568,emissiveIntensity:0}),g=Ye(16726831,{emissive:16719888,emissiveIntensity:.3}),m=new ht({color:16773576,transparent:!0,opacity:0,depthWrite:!1,blending:Hn,side:Oi});[.72,-.72].forEach(v=>{me(new Me(.08,.22,.38),f,e,r/2+.02,1.05,v,!1);let _=new Ue(new Li(1.5,8,20,1,!0),m);_.rotation.z=Math.PI/2,_.position.set(r/2+4,.95,v),e.add(_)}),[1,-1].forEach(v=>me(new Me(.06,.4,.25),g,e,-r/2-.01,1.05,v*.85,!1));let x=Ye(16753434,{emissive:16750848,emissiveIntensity:.2,roughness:.3});return s.userData={wheels:p,hl:f,coneMat:m,beacon:x,body:e,rear:-r/2},s.setLights=v=>{f.emissiveIntensity=v?3:0,m.opacity=v?.08:0,g.emissiveIntensity=v?1.5:.3},s.tick=(v,_,M)=>{p.forEach(T=>{T.rotation.z=-M/l}),e.position.y=_?Math.sin(v*15)*.015:0},{dark:h,chrome:d,beacon:x}}function mh(s,e,t,n,i,r,a,o,l){let c=bo(e.toUpperCase(),{w:1024,h:300,fg:"#ffffff",bg:"#"+n.toString(16).padStart(6,"0"),sub:t,subFg:"#d9f3e8"}),h=new Tt({map:c,roughness:.45});[1,-1].forEach(d=>{let u=me(new Gt(a,o),h,s,i,r,d*l,!1);d<0&&(u.rotation.y=Math.PI)})}function hg(s,e,t){let n=new Ve,i=new Ve;n.add(i);let r=Ye(15922422,{roughness:.4}),a=Ye(1911866,{roughness:.08,metalness:.3}),o=fh(n,i,e,s,t,6.2,2.1,-1.9,.42,2.7);me(mt(4.6,2.35,2.05,.25),r,i,-.75,1.65,0),me(mt(1.7,1.35,2,.3),r,i,2.3,1.15,0);let l=me(new Me(.06,.85,1.8),a,i,2,2.05,0);return l.rotation.z=.55,[1,-1].forEach(c=>me(new Me(.9,.6,.04),a,i,1.15,2.1,c*1.03,!1)),me(mt(.2,.3,2.1,.06),o.dark,i,3.1,.65,0),me(new Me(3.6,.12,.04),Ye(e),i,-.8,.75,1.035,!1),me(new Me(3.6,.12,.04),Ye(e),i,-.8,.75,-1.035,!1),mh(i,s,t,e,-.95,1.75,3.3,.97,1.04),me(mt(.3,.12,1.2,.05),o.beacon,i,.9,2.88,0),[-2.2,.4].forEach(c=>me(new Me(.08,.12,2),o.chrome,i,c,2.92,0,!1)),[.7,-.7].forEach(c=>me(new Me(3.2,.06,.4),Ye(12107460,{metalness:.6}),i,-.9,3.02,c,!1)),n.scale.setScalar(1),n}function ug(s,e,t){let n=new Ve,i=new Ve;n.add(i);let r=Ye(15922422,{roughness:.35,metalness:.1}),a=Ye(1911866,{roughness:.08,metalness:.3}),o=fh(n,i,e,s,t,6,1.9,-1.8,.46,2);me(mt(2.3,.9,2.05,.2),r,i,1.85,1.05,0),me(mt(2,1.2,2,.22),r,i,.15,1.75,0);let l=me(new Me(.06,.75,1.8),a,i,1.2,2,0);l.rotation.z=.45,[1,-1].forEach(h=>me(new Me(1.4,.55,.04),a,i,.15,2,h*1.005,!1)),me(mt(2.7,.85,2.05,.1),r,i,-1.75,1.05,0),me(new Me(2.5,.1,1.8),o.dark,i,-1.75,1.42,0,!1),mh(i,s,t,e,.35,1.25,1.9,.55,1.01),me(mt(.5,.45,1.9,.05),o.chrome,i,-.4,1.68,0),[-3.1,-.6].forEach(h=>[.75,-.75].forEach(d=>me(new Me(.07,1.2,.07),o.dark,i,h,2,d,!1))),[.75,-.75].forEach(h=>me(new Me(2.6,.07,.07),o.dark,i,-1.85,2.6,h,!1));let c=Ye(14263361,{roughness:.6});[.35,-.35].forEach(h=>me(new Me(4.2,.07,.07),c,i,-1.2,2.68,h,!1));for(let h=0;h<9;h++)me(new Me(.05,.05,.7),c,i,-3.1+h*.47,2.68,0,!1);return me(mt(.3,.12,1.1,.05),o.beacon,i,.15,2.42,0),me(mt(.25,.3,2.1,.06),o.dark,i,3,.7,0),n}function dg(s,e,t){let n=new Ve,i=new Ve;n.add(i);let r=Ye(15922422,{roughness:.4}),a=Ye(1911866,{roughness:.08,metalness:.3}),o=fh(n,i,e,s,t,7.2,2.6,-2.2,.48,3.3);me(mt(1.9,1.9,2.2,.25),r,i,2.55,1.6,0),me(mt(1,1,2.1,.2),r,i,3.45,1.05,0);let l=me(new Me(.06,.7,1.9),a,i,3.3,2.1,0);return l.rotation.z=.3,me(mt(4.9,2.7,2.4,.08),Ye(e,{roughness:.5}),i,-.95,2.05,0),mh(i,s,t,e,-.95,2.1,4.4,1.3,1.215),me(new Me(.05,2.4,2.2),Ye(13620441,{metalness:.4,roughness:.4}),i,-3.42,2.05,0),me(mt(.3,.12,1.2,.05),o.beacon,i,2.55,2.62,0),n}function Us(s,e,t,n){if(s==="van")return hg(e,t,n);if(s==="pickup")return ug(e,t,n);if(s==="box")return dg(e,t,n);let i=cg(e,t);return i.userData.rear=-3.9,i}function ap(s){let e=new Map,t=new Map,n=s.clone();return op(s,n,function(i,r){e.set(r,i),t.set(i,r)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;let r=i,a=e.get(i),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function op(s,e,t){t(s,e);for(let n=0;n<s.children.length;n++)op(s.children[n],e.children[n],t)}var lp="/x3d/assets/people/",zr={models:{},clips:{},ready:null};function _h(s=["owner","sarah","neighbor","jogger"]){let e=new Hi,n=[...s.filter(i=>!zr.models[i]).map(i=>e.loadAsync(lp+i+".glb").then(r=>{zr.models[i]=r.scene})),...Object.keys(zr.clips).length?[]:["anim_a","anim_b"].map(i=>e.loadAsync(lp+i+".glb").then(r=>r.animations.forEach(a=>{zr.clips[a.name]=a})))];return Promise.all(n)}var gh=new Map;function fg(s,e,t){if(gh.has(t))return gh.get(t);let n=s.image,i=document.createElement("canvas");i.width=n.width,i.height=n.height;let r=i.getContext("2d");r.drawImage(n,0,0);let a=r.getImageData(0,0,i.width,i.height),o=a.data;for(let c=0;c<o.length;c+=4){let h=o[c]/255,d=o[c+1]/255,u=o[c+2]/255,p=Math.max(h,d,u),f=Math.min(h,d,u),g=(p+f)/2,m=p-f;if(m<.06)continue;let x=m/(1-Math.abs(2*g-1)),v=p===h?(d-u)/m%6:p===d?(u-h)/m+2:(h-d)/m+4;v=(v*60+360)%360;for(let[_,M,T,S=1,y=1]of e)if(v>=_&&v<=M){let U=Math.min(1,x*S),C=Math.min(1,g*y),L=(1-Math.abs(2*C-1))*U,B=L*(1-Math.abs(T/60%2-1)),P=C-L/2,[G,V,ae]=T<60?[L,B,0]:T<120?[B,L,0]:T<180?[0,L,B]:T<240?[0,B,L]:T<300?[B,0,L]:[L,0,B];o[c]=(G+P)*255,o[c+1]=(V+P)*255,o[c+2]=(ae+P)*255;break}}r.putImageData(a,0,0);let l=new en(i);return l.flipY=s.flipY,l.colorSpace=s.colorSpace,l.magFilter=s.magFilter,l.minFilter=s.minFilter,gh.set(t,l),l}var cp={idle:"Idle",walk:"Walking_A",lookDown:"Idle",lookUp:"Idle",phone:"Holding_A",phoneHappy:"Holding_A",call:"Holding_A",wave:"Idle",happy:"Cheer",point:"Idle",hose:"Holding_B",kneel:"Working_A",climb:"Walking_A",work:"Hammering",carry:"Holding_B",sit:"Sit_Chair_Idle",sitPhone:"Sit_Chair_Idle",sitFloor:"Sit_Floor_Idle",dig:"Digging",pickup:"PickUp",interact:"Interact",run:"Running_A"},zn=(s,e,t)=>new E(s,e,t),mg=(s,e,t)=>Math.max(e,Math.min(t,s)),vh=new E,hp=new E,gg=new E,Gi=new rt,Eo=new rt,To=new rt,ki=class{constructor(e={}){this.o=e=Object.assign({model:e.female?"sarah":"owner",height:1.75},e);let t=zr.models[e.model];if(!t)throw new Error("people not loaded: "+e.model);let n=this.root=new Ve,i=this.model=ap(t);n.add(i),i.scale.setScalar(e.height/2.15),i.traverse(l=>{l.isMesh&&(l.castShadow=!0,l.receiveShadow=!0,l.frustumCulled=!1,e.recolor&&l.material.map&&(l.material=l.material.clone(),l.material.map=fg(l.material.map,e.recolor,e.model+JSON.stringify(e.recolor))),l.material.roughness=.78,l.material.metalness=0)});let r=l=>i.getObjectByName(l);this.b={hips:r("hips"),spine:r("spine"),chest:r("chest"),head:r("head"),uaR:r("upperarmr"),laR:r("lowerarmr"),wrR:r("wristr"),uaL:r("upperarml"),laL:r("lowerarml"),wrL:r("wristl"),handR:r("handslotr"),handL:r("handslotl")},this.j={hips:this.b.hips,spine:this.b.chest,neck:this.b.head,head:this.b.head,rHand:this.b.handR,lHand:this.b.handL},this.rest=["head","chest","uaR","laR","uaL","laL"].map(l=>[this.b[l],this.b[l].quaternion.clone()]),this.mixer=new Ts(i),this.actions={},this.curClip=null;let a=this.phone=new Ve,o=new Ue(new Me(.075,.15,.012),new Tt({color:1118999,roughness:.3,metalness:.4}));a.add(o),this.phoneScreen=new Ue(new Gt(.066,.138),new ht({color:7313083})),this.phoneScreen.position.z=.007,a.add(this.phoneScreen),a.scale.setScalar(1.5),a.visible=!1,n.add(a),(e.hairStyle==="cap"||e.cap)&&this.addCap(e.capColor??2306090,e.capTex),this.mouth=new tt,this.eyes=[],this.brows=[],this.state="idle",this.mood="neutral",this.t=Math.random()*10,this.phase=0,this.speed=0,this.path=null,this.lookYaw=0,this.yaw=0,this.yawTarget=0,this.slump=0,this._w={},this.play("idle",0),this.mixer.update(Math.random()*2)}addCap(e,t){let n=this.b.head,i=new Ve;i.position.set(0,.84,.03),n.add(i);let r=new Tt({color:e,roughness:.7}),a=new Ue(new kt(.54,28,14,0,Math.PI*2,0,Math.PI*.5),r);a.scale.set(1.05,.66,1.05),i.add(a);let o=new Ue(new je(.3,.3,.03,28,1,!1,0,Math.PI),r);o.rotation.y=Math.PI/2,o.rotation.x=.12,o.position.set(0,.02,.4),o.scale.set(1.35,1,1.55),i.add(o);let l=new Ue(new kt(.04,10,8),r);if(l.position.y=.28,i.add(l),t){let c=new Ue(new Gt(.34,.17),new ht({map:t,transparent:!0}));c.position.set(0,.16,.5),c.rotation.x=-.38,c.scale.setScalar(1.3),i.add(c)}i.traverse(c=>{c.isMesh&&(c.castShadow=!0)}),this.cap=i}play(e,t=.25){let n=cp[e]||"Idle";if(this.curClip===n)return;let i=zr.clips[n];if(!i)return;let r=this.actions[n]||(this.actions[n]=this.mixer.clipAction(i)),a=this.curClip&&this.actions[this.curClip];r.reset(),r.enabled=!0,r.setEffectiveWeight(1),r.play(),a&&t?r.crossFadeFrom(a,t,!0):a&&a.stop(),this.curClip=n}setMood(e){this.mood=e}set(e){this.state=e,this.phone.visible=e==="phone"||e==="call"||e==="phoneHappy"||e==="sitPhone",this.play(e)}walkTo(e,t=1.35,n){return this.path=e.map(i=>i.clone?i.clone():new E(i[0],0,i[1])),this.speed=t,this.set(n?"carry":"walk"),new Promise(i=>{this._arrive=i})}face(e,t){this.yawTarget=Math.atan2(e-this.root.position.x,t-this.root.position.z)}aim(e,t,n,i){if(i<=.001)return;e.updateWorldMatrix(!0,!1),t.updateWorldMatrix(!0,!1);let r=vh.setFromMatrixPosition(e.matrixWorld),o=hp.setFromMatrixPosition(t.matrixWorld).sub(r).normalize();this.root.getWorldQuaternion(To);let l=n.clone().normalize().applyQuaternion(To);Gi.setFromUnitVectors(o,l),i<1&&Gi.slerp(Eo.identity(),1-i),e.getWorldQuaternion(Eo),Eo.premultiply(Gi),e.parent.getWorldQuaternion(To),e.quaternion.copy(To.invert().multiply(Eo))}update(e){this.t+=e;let t=this.t;if(this.path&&this.path.length){let T=this.root.position,S=this.path[0],y=S.x-T.x,U=S.z-T.z,C=Math.hypot(y,U);if(C<.08)this.path.shift(),this.path.length||(this.path=null,this.state!=="carry"&&this.set("idle"),this._arrive&&this._arrive());else{let L=Math.min(C,this.speed*e);T.x+=y/C*L,T.z+=U/C*L,this.yawTarget=Math.atan2(y,U),this.phase+=e*this.speed*5.2}}let n=this.yawTarget-this.yaw;for(;n>Math.PI;)n-=Math.PI*2;for(;n<-Math.PI;)n+=Math.PI*2;this.yaw+=n*(1-Math.exp(-e*8)),this.root.rotation.y=this.yaw;let i=this.state,r=this.actions[cp.walk];r&&(r.timeScale=i==="walk"?mg((this.speed||1.35)/(1.05*this.o.height/2.15),.6,1.9):i==="climb"?.7:1),this.rest.forEach(([T,S])=>T.quaternion.copy(S)),this.mixer.update(e);let a=1-Math.exp(-e*7),o=this._w,l=(T,S)=>(o[T]=(o[T]||0)+(S-(o[T]||0))*a,o[T]),c=this.b.uaR.getWorldPosition(vh);this.root.worldToLocal(c);let h=Math.sign(c.x)||-1,d=l("sp",i==="sitPhone"||i==="phone"||i==="phoneHappy"||i==="call"?1:0);d>.01&&(this.aim(this.b.uaR,this.b.laR,zn(h*.25,-.8,.55),d),this.aim(this.b.laR,this.b.wrR,zn(-h*.25,.75,.65),d));let u=l("wave",i==="wave"?1:0),p=l("call",i==="call"?1:0),f=l("point",i==="point"?1:0),g=l("climb",i==="climb"?1:0);if(u>.01&&(this.aim(this.b.uaR,this.b.laR,zn(h*.75,.65,.15),u),this.aim(this.b.laR,this.b.wrR,zn(h*.25+Math.sin(t*9)*.45,1,.2),u)),f>.01&&(this.aim(this.b.uaR,this.b.laR,zn(h*.35,.15,1),f),this.aim(this.b.laR,this.b.wrR,zn(h*.1,.2,1),f)),g>.01){let T=Math.sin(t*5);this.aim(this.b.uaR,this.b.laR,zn(h*.3,1,.35+T*.2),g),this.aim(this.b.uaL,this.b.laL,zn(-h*.3,1,.35-T*.2),g)}let m=l("pitch",(i==="lookDown"?.55:i==="lookUp"?-.45:i==="phone"||i==="phoneHappy"||i==="call"||i==="sitPhone"?.3:0)+(this.mood==="worried"?.14:0)+this.slump*.35),x=l("roll",i==="call"?h*-.12:0)+(i==="idle"?Math.sin(t*.45)*.03:0),v=l("hy",i==="idle"?Math.sin(t*.3)*.14:this.lookYaw);Math.abs(m)+Math.abs(x)+Math.abs(v)>.001&&(Gi.setFromEuler(new Ar(m,v,x)),this.b.head.quaternion.multiply(Gi));let _=l("slump",this.slump);if(_>.01&&(Gi.setFromAxisAngle(zn(1,0,0),_*.35),this.b.chest.quaternion.multiply(Gi)),this.phone.visible){let T=this.b.handR.getWorldPosition(vh),S=this.b.head.getWorldPosition(hp);S.y+=.45*this.model.scale.y;let y=gg.set(Math.sin(this.yaw),0,Math.cos(this.yaw));T.addScaledVector(y,.05*this.o.height).lerp(S,.16),T.y+=.05*this.o.height,this.phone.position.copy(this.root.worldToLocal(T.clone())),this.phone.lookAt(S)}let M=l("bounce",i==="phoneHappy"||this.mood==="happy"&&i==="idle"?1:0);M>.01?this.model.position.y=Math.abs(Math.sin(t*5))*.025*M:this.model.position.y=0}};var vg=matchMedia("(max-width:760px), (pointer:coarse)").matches,wo=(()=>{let s=1234567;return()=>(s=s*16807%2147483647)/2147483647})();var xh={};function up(s,e,t,n,i=1,r=1){if(xh[s])return xh[s];let a=document.createElement("canvas");a.width=e,a.height=t;let o=a.getContext("2d");n(o,e,t);let l=new en(a);return l.colorSpace=qe,l.wrapS=l.wrapT=mn,l.repeat.set(i,r),l.anisotropy=vg?2:8,xh[s]=l}var dp=(s,e,t,n,i,r,a=2)=>{for(let o=0;o<n;o++){let l=i+wo()*(r-i)|0;s.fillStyle=`rgb(${l},${l},${l})`,s.fillRect(wo()*e,wo()*t,a,a)}},pp=()=>up("sid",256,256,(s,e,t)=>{for(let i=0;i<14;i++){let r=i*t/14,a=s.createLinearGradient(0,r,0,r+t/14);a.addColorStop(0,"#bdbdbd"),a.addColorStop(.12,"#fafafa"),a.addColorStop(.9,"#e9e9e9"),a.addColorStop(1,"#d6d6d6"),s.fillStyle=a,s.fillRect(0,r,e,t/14)}dp(s,e,t,900,225,255,1)}),fp=()=>up("shg",256,256,(s,e,t)=>{s.fillStyle="#d8d8d8",s.fillRect(0,0,e,t);let n=4,i=6;for(let r=0;r<n;r++)for(let a=0;a<i+1;a++){let o=180+wo()*75|0;s.fillStyle=`rgb(${o},${o},${o})`;let l=r*e/n,c=(a-r%2*.5)*t/i;s.fillRect(l+2,c+2,e/n-3,t/i-3)}for(let r=0;r<n;r++)s.fillStyle="rgba(0,0,0,.35)",s.fillRect(r*e/n,0,3,t);dp(s,e,t,1400,150,255,1)},.7,.5);var mp=42;Math.random=()=>(mp=mp*16807%2147483647)/2147483647;var gt=1280,hi=720,_g=30,Ro=1/_g,gp=new URLSearchParams(location.search).get("v")||"A",nt=(s,e={})=>new Tt(Object.assign({color:s,roughness:.8,metalness:0},e)),Po=(s,e,t,n=.1)=>new Bi(s,e,t,2,n);function et(s,e,t,n=0,i=0,r=0,a=!0){let o=new Ue(s,e);return o.position.set(n,i,r),o.castShadow=a,o.receiveShadow=!0,t.add(o),o}var wt=(s,e=0,t=1)=>Math.max(e,Math.min(t,s)),ct=s=>(s=wt(s),s*s*(3-2*s)),Te=(s,e,t)=>s+(e-s)*t,le=(s,e,t)=>new E(s,e,t),Uo=document.createElement("canvas");Uo.width=gt;Uo.height=hi;var ui=new Pr({canvas:Uo,antialias:!0,preserveDrawingBuffer:!0});ui.setPixelRatio(1);ui.setSize(gt,hi,!1);ui.shadowMap.enabled=!0;ui.shadowMap.type=uo;ui.toneMapping=Br;ui.toneMappingExposure=1.05;var ze=new Lr,Wi=new pt(35,gt/hi,.02,900);ze.fog=new ds(14214896,60,260);var No=new Ps(ui);No.addPass(new Ls(ze,Wi));var xg=new zi(new ee(gt/2,hi/2),.4,.45,.93);No.addPass(xg);No.addPass(new Is);var vp=`varying vec3 d;float h2(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float n2(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(h2(i),h2(i+vec2(1,0)),f.x),mix(h2(i+vec2(0,1)),h2(i+vec2(1,1)),f.x),f.y);}
float fbm(vec2 p){float v=0.,a=.5;for(int i=0;i<5;i++){v+=a*n2(p);p=p*2.03+vec2(1.7,9.2);a*=.5;}return v;}
vec3 clouds(vec3 c,vec3 cc,vec3 hor){if(d.y<=0.)return c;vec2 uv=d.xz/(d.y+.15)*1.3;float cl=smoothstep(.5,.78,fbm(uv))*smoothstep(0.,.18,d.y)*.8;float lit=smoothstep(.45,.8,fbm(uv+vec2(.04,.03)));return mix(c,mix(cc*.66+hor*.25,cc*1.04,lit),cl);}
`,Mh=new Ue(new kt(500,32,16),new ut({side:Et,depthWrite:!1,fog:!1,vertexShader:"varying vec3 d;void main(){d=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:vp+"void main(){float y=d.y;vec3 top=vec3(.25,.55,.92),hor=vec3(.86,.93,1.),bot=vec3(.85,.9,.82);vec3 c=y>0.?mix(hor,top,pow(smoothstep(0.,.6,y),.8)):bot;vec3 s=normalize(vec3(.5,.45,.6));c+=vec3(1.,.9,.7)*pow(max(dot(d,s),0.),40.)*.5;c=clouds(c,vec3(1.),hor);gl_FragColor=vec4(c,1.);}"}));ze.add(Mh);var Co=new bs(13624319,7178831,1.15);ze.add(Co);var Vt=new Tn(16773596,2.7);Vt.position.set(14,18,12);Vt.castShadow=!0;Vt.shadow.mapSize.set(4096,4096);Object.assign(Vt.shadow.camera,{left:-11,right:11,top:11,bottom:-11,near:1,far:80});Vt.shadow.bias=-5e-4;Vt.shadow.normalBias=.045;ze.add(Vt);var Lo=new Tn(16771280,.55);Lo.position.set(-8,6,14);ze.add(Lo);var _p=new Tn(12572927,.8);_p.position.set(-6,8,-12);ze.add(_p);var yh=(()=>{let s=document.createElement("canvas");s.width=s.height=128;let e=s.getContext("2d"),t=e.createRadialGradient(64,64,0,64,64,64);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.3,"rgba(255,255,255,.45)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),new en(s)})(),Ao=[];async function yg(){let s=new Hi;Ao=(await Promise.all(["Tree_1_A","Tree_1_B","Tree_1_C","Tree_4_A","Tree_4_B"].map(c=>s.loadAsync("/x3d/assets/nature/"+c+"_Color1.gltf").then(h=>h.scene).catch(()=>null)))).filter(Boolean),Ao.forEach(c=>{c.userData.h=new Ct().setFromObject(c).max.y,c.traverse(h=>{h.isMesh&&(h.material.roughness=.9)})});let e=(()=>{let c=document.createElement("canvas");c.width=c.height=256;let h=c.getContext("2d");h.fillStyle="#79ad55",h.fillRect(0,0,256,256);for(let u=0;u<2600;u++)h.fillStyle=`hsl(${92+Math.random()*18},${40+Math.random()*20}%,${36+Math.random()*16}%)`,h.fillRect(Math.random()*256,Math.random()*256,2,3);let d=new en(c);return d.wrapS=d.wrapT=mn,d.repeat.set(60,60),d.colorSpace=qe,d})();et(new Gt(400,400),nt(16777215,{map:e,roughness:.95}),ze,0,0,0).rotation.x=-Math.PI/2;let t=nt(13618372,{roughness:.9});et(new Me(9,.04,5),t,ze,0,.02,-.5),et(new Me(400,.03,6),nt(3948356,{roughness:.95}),ze,0,.015,-9);for(let c=-20;c<20;c++)et(new Me(2,.035,.15),nt(15913547),ze,c*5,.02,-9);et(new Me(400,.08,1.6),t,ze,0,.04,-5.6);let n=[15983555,13623528,15782080,14870736,16117734,14209256],i=[7031354,4871528,8010542,4147770],r=(c,h,d,u)=>{let p=new Ve;p.position.set(c,0,h),p.rotation.y=d,ze.add(p);let f=8+u%3,g=6.5,m=3.2;et(Po(f,m,g,.08),nt(n[u%n.length],{roughness:.85,map:pp()}),p,0,m/2,0);let x=new Ue(new je(.1,g*.62,2.2,4,1),nt(i[u%4],{roughness:.85,map:fp()}));x.rotation.y=Math.PI/4,x.scale.set(f/g*1.05,1,1.05),x.position.y=m+1.1,x.castShadow=!0,p.add(x);let v=nt(3163998,{roughness:.1,metalness:.3}),_=nt(16777215);[-f*.3,f*.3].forEach(M=>{et(new Me(1.3,1.1,.08),_,p,M,1.7,g/2+.02,!1),et(new Me(1.1,.9,.1),v,p,M,1.7,g/2+.03,!1)}),et(new Me(1.1,2.1,.1),nt(9063215),p,0,1.05,g/2+.03,!1);for(let M=0;M<3;M++){let T=et(new kt(.55+Math.random()*.25,14,10),nt(5212732,{roughness:.9}),p,-f/2+1+M*1.1+(M>0?f*.45:0),.45,g/2+.8);T.scale.y=.8}};[-26,-13,0,13,26].forEach((c,h)=>r(c,-18,0,h)),r(-14,4,Math.PI/2,3),r(0,16,Math.PI,1);let a=(c,h,d=1)=>{et(new je(.18*d,.25*d,2.2*d,10),nt(7031347),ze,c,1.1*d,h);let u=et(new kt(1.5*d,18,14),nt(5937726,{roughness:.9}),ze,c,3.1*d,h);u.scale.y=1.1,et(new kt(1.05*d,14,10),nt(6858826,{roughness:.9}),ze,c+.7*d,3.6*d,h+.3*d)},o=(c,h,d=1,u=0)=>{let p=Ao[u%Ao.length];if(!p)return a(c,h,d);let f=p.clone();f.position.set(c,-.15,h),f.scale.setScalar(d*4.8/p.userData.h),f.rotation.y=c*1.7,f.traverse(g=>{g.isMesh&&(g.castShadow=!0,g.receiveShadow=!0)}),ze.add(f)};o(-7,-3.5,1.1,0),o(9.5,-3,1,1),o(-19,-13,1.2,3),o(19,-13.5,1.1,2),o(6,-13,.9,0),o(-6,-13.5,1,1),o(12,6,1.2,2),o(-22,8,1.3,3),o(24,2,1.2,4);let l=nt(16052714);for(let c=0;c<14;c++)et(new Me(.12,1,.06),l,ze,-6.5+c*.5+18,.5,3.6)}function Mg(){let s=new Ve;et(new je(.032,.032,.15,18),nt(14169386,{roughness:.45}),s,0,0,0),et(new je(.0335,.0335,.03,18),nt(15911244,{roughness:.4}),s,0,.03,0),et(new je(.034,.034,.012,18),nt(15658734),s,0,.075,0);let e=[];for(let a=0;a<14;a++){let o=a/13,l=et(new je(.0045,.0045,.012,6),nt(7034422,{roughness:.9}),s,Math.sin(o*3)*.018,.085+o*.11,Math.cos(o*2.4)*.01-.01,!1);e.push(l)}let t=new Ci(new ei({map:yh,color:16757568,blending:Hn,depthWrite:!1,transparent:!0}));t.scale.setScalar(.09),s.add(t);let n=[];for(let a=0;a<14;a++){let o=new Ci(new ei({map:yh,color:16769162,blending:Hn,depthWrite:!1,transparent:!0}));o.scale.setScalar(.022),s.add(o),n.push(o)}let i=[];for(let a=0;a<6;a++){let o=new Ci(new ei({map:yh,color:12303291,transparent:!0,opacity:0,depthWrite:!1}));o.scale.setScalar(.06),s.add(o),i.push(o)}let r=new ni(16752704,0,1.2,2);return s.add(r),s.userData.set=(a,o,l=0)=>{let c=Math.round(a*e.length);e.forEach((p,f)=>p.visible=f<c);let h=c>0?e[c-1].position:le(0,.08,0),d=a>.001,u=.8+.4*Math.sin(o*61)*Math.sin(o*23);t.visible=d,t.position.copy(h),t.scale.setScalar(.055*u),r.position.copy(h),r.intensity=d?.18*u:0,n.forEach((p,f)=>{p.visible=d;let g=(o*3+f*.37)%1,m=f*2.39;p.position.set(h.x+Math.cos(m)*g*.07,h.y+g*.05+Math.sin(m*1.7)*g*.03,h.z+Math.sin(m)*g*.07),p.material.opacity=1-g}),i.forEach((p,f)=>{let g=wt(l*1.4-f*.07);p.visible=l>0,p.position.set(h.x+Math.sin(f)*.03*g,h.y+g*.25,h.z),p.scale.setScalar(.05+g*.14),p.material.opacity=(1-g)*.55*(g>0?1:0)})},s}var ci=document.createElement("canvas");ci.width=300;ci.height=600;var Do=new en(ci);Do.colorSpace=qe;var Oo=new ht({map:Do,toneMapped:!1});function vn(s,e,t,n,i,r){s.beginPath(),s.roundRect(e,t,n,i,r)}function Gr(s,e,t,n=0){let i=ci.getContext("2d"),r=300,a=600,o=i.createLinearGradient(0,0,0,a);if(o.addColorStop(0,"#13233a"),o.addColorStop(1,"#0b1422"),i.fillStyle=o,i.fillRect(0,0,r,a),i.textAlign="center",i.fillStyle="#fff",s==="off"&&(i.fillStyle="#05070a",i.fillRect(0,0,r,a)),s==="talk"){i.font="700 26px Inter",i.fillStyle="#9fd3ff",i.fillText("Booked Jobs Co.",r/2,120);for(let l=0;l<9;l++){let h=14+n*(.35+.65*Math.abs(Math.sin(t*9+l*1.3)))*(1-Math.abs(l-4)/6)*230;i.fillStyle="#ff8a3d",vn(i,34+l*26,a/2-h/2,16,h,8),i.fill()}i.font="600 20px Inter",i.fillStyle="#c9d6e6",i.fillText("talking...",r/2,500)}if(s==="ring"||s==="lost"){let l=s==="lost";if(i.font="700 22px Inter",i.fillStyle=l?"#ff8f8f":"#9fd3ff",i.fillText(l?"Request closed":"New job request",r/2,90),i.fillStyle=l?"#3a1c22":"#1e3a5c",vn(i,24,130,r-48,200,26),i.fill(),i.fillStyle="#fff",i.font="800 30px Inter",i.fillText(l?"Booked with":"Homeowner",r/2,200),i.font="800 30px Inter",i.fillStyle=l?"#ffb3b3":"#ffd36b",i.fillText(l?"another company":"needs help today",r/2,250),l)i.font="700 64px Inter",i.fillStyle="#ff6b6b",i.fillText("\u2715",r/2,470);else{let c=.5+.5*Math.sin(t*18);i.fillStyle=`rgba(46,204,113,${.6+c*.4})`,i.beginPath(),i.arc(r/2,450,48+c*6,0,7),i.fill(),i.fillStyle="#fff",i.font="800 22px Inter",i.fillText("ANSWER",r/2,458)}}if(s==="text"||s==="booked"){i.font="700 20px Inter",i.fillStyle="#9fd3ff",i.fillText("Sarah, homeowner",r/2,60);let l=ct(e*3);i.globalAlpha=l,i.fillStyle="#2f8f6a",vn(i,50,100,226,150,22),i.fill(),i.fillStyle="#fff",i.textAlign="left",i.font="600 19px Inter",["Hi Sarah! Got your","request. We can come","Tuesday at 9am.","Want it?"].forEach((d,u)=>i.fillText(d,66,135+u*27)),i.globalAlpha=1,i.textAlign="right",i.font="600 15px Inter",i.fillStyle="#8fb3a6",l>.5&&i.fillText("sent in 0:52",272,272);let c=ct(e*3-1);i.globalAlpha=c,i.textAlign="left",i.fillStyle="#334155",vn(i,24,300,170,60,22),i.fill(),i.fillStyle="#fff",i.font="600 20px Inter",i.fillText("Yes please!",44,338),i.globalAlpha=1;let h=ct(e*3-2);h>0&&(i.globalAlpha=h,i.fillStyle="#ff8a3d",vn(i,30,400+(1-h)*30,r-60,120,24),i.fill(),i.fillStyle="#fff",i.textAlign="center",i.font="800 30px Inter",i.fillText("BOOKED",r/2,455+(1-h)*30),i.font="600 19px Inter",i.fillText("Tue 9:00 AM",r/2,490+(1-h)*30),i.globalAlpha=1)}Do.needsUpdate=!0}function xp(s=1){let e=new Ve;et(Po(.078,.156,.011,.01),nt(1382429,{roughness:.3,metalness:.5}),e);let t=new Ue(new Gt(.069,.142),Oo);t.position.z=.0062,e.add(t);let n=new ni(8370431,0,1.5,2);return n.position.z=.08,e.add(n),e.userData.glow=n,e.scale.setScalar(s),e}var ge=null,Eh=Us("van","YOUR COMPANY",3116906,"HOME SERVICES");Eh.position.set(-.5,0,-.6);ze.add(Eh);Eh.traverse(s=>{s.isMesh&&(s.castShadow=!0)});function it(s,e,t=35){Wi.position.copy(s),Wi.fov=t,Wi.updateProjectionMatrix(),Wi.lookAt(e)}var _n=(s,e=le(0,0,0))=>(s.updateMatrixWorld(!0),s.localToWorld(e.clone())),Bs=document.createElement("canvas");Bs.width=gt;Bs.height=hi;var oe=Bs.getContext("2d");document.body.appendChild(Bs);var Bo=[],Ns=null,li=99,Ds=null,Sh=null,bh=null;function Sg(s,e){let t=s.split(" "),n=[],i="";return t.forEach(r=>{let a=i?i+" "+r:r;oe.measureText(a).width>e&&i?(n.push(i),i=r):i=a}),i&&n.push(i),n}function bg(s){oe.drawImage(Uo,0,0);let e=Bo.find(t=>s>=t[0]&&s<t[1]);if(e&&s<li){oe.font="800 38px Inter";let t=Sg(e[2],980);oe.textAlign="center",oe.lineJoin="round",t.forEach((n,i)=>{let r=hi-70-(t.length-1-i)*48;oe.lineWidth=9,oe.strokeStyle="rgba(0,0,0,.75)",oe.strokeText(n,gt/2,r),oe.fillStyle="#fff",oe.fillText(n,gt/2,r)})}if(Ds){let t=Ds(s);if(t){oe.globalAlpha=t.a,oe.font="900 46px Inter",oe.textAlign="center",oe.lineWidth=10,oe.strokeStyle="rgba(0,0,0,.7)";let n=Ns?(gt-320)/2:gt/2;oe.font=Ns?"900 40px Inter":oe.font,oe.strokeText(t.s,n,92),oe.fillStyle=t.c||"#ffd36b",oe.fillText(t.s,n,92),oe.globalAlpha=1}}if(Ns){let t=Ns(s);if(t!=null){let n=Math.max(0,Math.ceil(t)),i=n<=10,r="0:"+String(n).padStart(2,"0"),a=i?1+.06*Math.sin(s*20):1;oe.save(),oe.translate(gt-170,110),oe.scale(a,a),oe.fillStyle=i?"rgba(200,30,30,.92)":"rgba(10,15,25,.82)",vn(oe,-120,-62,240,124,30),oe.fill(),oe.fillStyle="#fff",oe.textAlign="center",oe.font="900 70px Inter",oe.fillText(r,0,22),oe.font="700 15px Inter",oe.fillStyle="rgba(255,255,255,.75)",oe.fillText("TO ANSWER",0,48),oe.restore()}}if(Sh&&s<li&&Sh(s),s>=li){let t=ct((s-li)/.5),n=oe.createLinearGradient(0,0,0,hi);n.addColorStop(0,"#0f2a22"),n.addColorStop(1,"#081510"),oe.globalAlpha=t,oe.fillStyle=n,oe.fillRect(0,0,gt,hi),oe.textAlign="center",oe.fillStyle="#9fe3c4",oe.font="700 30px Inter",oe.fillText("Booked Jobs Co.",gt/2,200),oe.fillStyle="#fff",oe.font="900 78px Inter",oe.fillText("See your next 30 days",gt/2,340),oe.font="600 32px Inter",oe.fillStyle="#d6e6df",oe.fillText("Tap the button below to start the demo",gt/2,410);let i=500+Math.sin((s-li)*6)*14;oe.fillStyle="#ff8a3d",oe.beginPath(),oe.moveTo(gt/2-46,i),oe.lineTo(gt/2+46,i),oe.lineTo(gt/2,i+56),oe.closePath(),oe.fill(),oe.fillRect(gt/2-14,i-60,28,62),oe.font="700 32px Inter",oe.fillStyle="#ffb766",oe.fillText("Only one company per area. Claim yours first.",gt/2,652),oe.globalAlpha=1}}var Vi=0,Fo=[],yp=[],st=(s,e)=>yp.push({time:s,fn:e,done:!1}),Os=()=>{},Io=s=>_n(s.j.head,le(0,.5,0));async function Eg(){let s=new ki({model:"kid",height:1.3,recolor:[[190,260,22,1,1.05]]});ze.add(s.root);let e=Mg();e.scale.setScalar(1.6),ze.add(e);let t=xp(1.4);t.visible=!1,ze.add(t),ge.root.position.set(2.6,0,1.6),ge.yaw=ge.yawTarget=Math.PI/2,ge.set("lookDown"),s.root.position.set(-1.2,0,1.6),s.yaw=s.yawTarget=Math.PI/2,s.set("idle"),s.setMood("happy"),ge.phoneScreen.material=Oo;let n=!1,i=le(.13,.46,-.27),r=()=>_n(ge.root,i);Bo=[[11,13.6,"Relax. I'm not a firework. I'm your phone."],[13.9,18,"Referrals are great. But they only reach people who already know you."],[18.3,20.4,"What if new homeowners could find you too?"],[20.6,25.3,"We put your business in front of them, for extra jobs on top of your referrals."],[25.5,29,"I built a 3 minute demo that shows your business, 30 days from now."],[29,32.2,"Tap the button below, and watch it."]],li=32.3,Ds=a=>a>5.4&&a<9.4?{s:"...",a:0}:null,st(2.2,()=>{s.walkTo([le(1.75,0,1.6)],.8)}),st(4.15,()=>{s.set("point")}),st(4.7,()=>{n=!0,s.set("idle")}),st(5,()=>{s.walkTo([le(1.2,0,-.6),le(-9,0,-2.5)],2.6)}),st(8.8,()=>ge.setMood("worried")),st(10.05,()=>{e.visible=!1,t.visible=!0}),st(10.75,()=>{t.visible=!1,ge.set("phone"),ge.setMood("worried")}),st(13.8,()=>ge.setMood("smile")),st(18.6,()=>{ge.setMood("happy"),ge.set("phoneHappy")}),Os=a=>{let o=a<9.3?1-wt((a-.2)/9.1)*.995:0,l=a>9.3?wt((a-9.3)/1.2):0;n?(e.position.copy(r()).add(le(0,.05,0)),e.rotation.set(0,0,.1)):(s.root.updateMatrixWorld(!0),e.position.copy(_n(s.j.rHand)).add(le(0,.05,0)),e.rotation.set(0,0,0)),t.position.copy(r()).add(le(0,.06,0)),t.rotation.set(0,-Math.PI/2,0),e.userData.set(a<9.3?Math.max(o,.01):0,a,l);let c=a<18.6?a>11&&a<13.6||a>13.9&&a<18.4?1:.2:0;a<10.05?Gr("off",0,a):a<18.6?Gr("talk",0,a,c*(.6+.4*Math.abs(Math.sin(a*7)))):Gr("text",(a-18.8)/5.5,a),t.userData.glow.intensity=a>10.05?.12:0;let h=r().add(le(0,.08,0)),d=Io(ge),u=(g,m=1)=>it(h.clone().add(le((-.55+g*.1)*m,.22*m,(.85-g*.1)*m)),h,30),p=(g,m)=>{let x=_n(ge.phoneScreen),v=new rt;ge.phoneScreen.getWorldQuaternion(v);let _=le(0,0,1).applyQuaternion(v);it(x.clone().addScaledVector(_,g).add(le(0,.02,0)),x,m)},f=(g=32)=>it(d.clone().add(le(2.3,-.3,.9)),d.clone().add(le(0,-.12,0)),g);if(ge.model.visible=!(a>=11&&a<13.7||a>=18.6&&a<24.7),a<2.2){let g=e.position.clone(),m=Io(s),x=a/2.2,v=g.clone().lerp(m,.35);it(g.clone().add(le(.75-x*.15,.1,.95-x*.1)),v,36)}else if(a<5.2){let g=(a-2.2)/3;it(le(Te(4.9,4.4,g),1.3,Te(7.4,6.8,g)),le(Te(.8,1.9,g),.85,1.4),34)}else if(a<6.6)u((a-5.2)/1.4);else if(a<7.6)f();else if(a<8.8)u((a-7.6)/1.2,.75);else if(a<9.3)f(28);else if(a<10.75)u(.5,.7);else if(a<11)it(le(5.4,1.6,4.6),le(2.6,1.1,1.6),32);else if(a<13.7){let g=ct((a-11)/2.7);p(Te(.22,.18,g),56)}else if(a<18.6){let g=(a-13.7)/4.9,m=Te(.25,-.35,g),x=le(2.6,1.05,1.6);it(x.clone().add(le(Math.cos(m)*4.4,.5,Math.sin(m)*4.4+1.4)),x.clone().add(le(-.3,0,-.6)),34)}else if(a<24.7){let g=ct((a-18.6)/6);p(Te(.25,.21,g),56)}else{let g=ct((a-24.7)/7);it(le(Te(5.4,9.5,g),Te(1.4,2.8,g),Te(3.6,9,g)),le(Te(2.5,1.2,g),Te(1.1,1,g),Te(1.4,-.2,g)),34)}},Fo.push(s)}async function Tg(){let s=Us("van","RIVAL CO.",12597547,"HOME SERVICES");s.position.set(-40,0,-7.7),ze.add(s);let e=new Ve;e.position.set(-3.4,0,2.6),ze.add(e);let t=nt(11041103,{roughness:.7});et(new Me(1.5,.07,.8),t,e,0,.82,0),[[-.65,-.33],[.65,-.33],[-.65,.33],[.65,.33]].forEach(c=>et(new Me(.07,.82,.07),t,e,c[0],.41,c[1])),et(new Me(.32,.2,.2),nt(13650474),e,.45,.96,-.1);let n=xp(1.6);n.rotation.x=-Math.PI/2,n.position.set(-.15,.87,.05),e.add(n),et(new je(.45,.45,.06,28),nt(3046735,{roughness:.6}),ze,6.6,.03,1.3),ge.root.position.set(5.6,0,1.3),ge.yaw=ge.yawTarget=Math.PI/2,ge.set("hose");let i=new Nr([le(-3.1,1.2,.4),le(-1,.05,1.6),le(3,.05,2.2),le(5.3,.3,1.5),le(5.95,.95,1.3),le(6.4,.25,1.3)]),r=nt(2039583,{roughness:.7}),a=et(new Dr(i,80,.04,8),r,ze),o=new Nr([le(-3.1,1.2,.4),le(-1,.05,1.6),le(3,.05,2.2),le(5,.05,1.9),le(6,.05,2.3),le(6.6,.05,1.8)]),l=et(new Dr(o,80,.04,8),r,ze);l.visible=!1,st(7.9,()=>{a.visible=!1,l.visible=!0}),Bo=[[9,14.8,"Every day, homeowners near you need help. And that job just went to whoever answered first."],[15.1,18,"What if every one of them got a text from you in under 60 seconds,"],[18,21,"and landed right on your calendar?"],[21.3,24.8,"I built a 3 minute demo that shows your business, 30 days from now."],[24.8,28.1,"Tap the button below, and watch it."]],li=28.3,Ns=c=>c<.4||c>9.4?null:60-(c-.4)/7.6*60,Ds=c=>c>1&&c<4?{s:"A homeowner needs help. Right now.",a:ct((c-1)*3)}:c>8&&c<9.4?{s:"Too late.",a:1,c:"#ff7b7b"}:null,ge.phoneScreen.material=Oo,st(7.9,()=>{ge.set("idle"),ge.face(0,-8),ge.setMood("worried")}),st(13.5,()=>{ge.set("phone"),ge.face(-2,6)}),st(15,()=>{ge.setMood("happy"),ge.set("phoneHappy")}),Os=c=>{let h=c<8;c<8?Gr("ring",0,c):c<15?Gr("lost",0,c):Gr("text",(c-15.2)/5.5,c),n.userData.glow.intensity=c<13.5?.3:0,n.visible=c<13.5;let d=h&&c%1.2<.7;n.position.x=-.15+(d?Math.sin(c*90)*.006:0),n.rotation.z=d?Math.sin(c*70)*.05:0;let u=wt((c-7.7)/3);s.position.x=Te(-9,24,u*u*.4+u*.6);let p=_n(n);if(c<1.9){let f=c/1.9;it(p.clone().add(le(.15-f*.05,.42-f*.06,.34)),p.clone().add(le(0,0,-.02)),32)}else if(c<4.6){let f=(c-1.9)/2.7;it(le(Te(-5.4,-5,f),1.25,Te(4.4,4.2,f)),le(Te(1.5,2.6,f),.95,.6),36)}else if(c<6){let f=_n(ge.j.head,le(0,.1,0));it(f.clone().add(le(1.05,-.55,.55)),f.clone().add(le(0,-.1,0)),32)}else if(c<7.8){let f=(c-6)/1.8;it(p.clone().add(le(.1,.36-f*.08,.26)),p,32)}else if(c<10.6)it(le(9.5,1.9,7.5),le(1.5,1,-6),38);else if(c<13.5){let f=_n(ge.j.head,le(0,.1,0)),g=(c-10.6)/2.9;it(f.clone().add(le(-.75-g*.15,-.12,-1.15-g*.2)),f,32)}else if(c<15)it(le(9,1.6,4.6),le(5.6,1.2,1.3),32);else if(c<21.1){let f=_n(ge.phone),g=_n(ge.j.head,le(0,.12,0)),m=(c-15)/6,x=f.clone().sub(g).setY(0).normalize(),v=le(-x.z,0,x.x);it(g.clone().addScaledVector(x,-.42).addScaledVector(v,.6).add(le(0,.2,0)),f,26-m*3)}else{let f=ct((c-21.1)/7);it(le(Te(9.5,11,f),Te(1.6,3,f),Te(5,10,f)),le(Te(5.4,2,f),1.2,Te(1.3,-.5,f)),34)}}}function wg(s,e,t=null,n=0,i=0){ci.width!==600&&(ci.width=600,ci.height=1200);let r=ci.getContext("2d");r.setTransform(2,0,0,2,0,0);let a=300,o=600,l=r.createLinearGradient(0,0,0,o);l.addColorStop(0,"#162236"),l.addColorStop(1,"#0d1522"),r.fillStyle=l,r.fillRect(0,0,a,o),r.fillStyle="#ffffff",r.textAlign="left",r.font="800 30px Inter",r.fillText("Today",22,62),r.font="600 17px Inter",r.fillStyle="#93a3b8",r.fillText("Monday",22,88);let c=Math.floor(s+.001);if(r.textAlign="right",r.font="800 17px Inter",r.fillStyle=c?"#1f8a5b":"#d0453a",vn(r,176,44,104,34,17),r.fillStyle=c?"#1d5c43":"#5c2025",r.fill(),r.fillStyle=c?"#8ff0c0":"#ff8f86",r.textAlign="center",r.fillText(c+(c===1?" job":" jobs"),228,67),["8 AM","9 AM","10 AM","11 AM","12 PM","1 PM","2 PM","3 PM","4 PM","5 PM"].forEach((u,p)=>{let f=130+p*46;r.strokeStyle="#26324a",r.lineWidth=2,r.beginPath(),r.moveTo(70,f),r.lineTo(286,f),r.stroke(),r.fillStyle="#7d8ca3",r.font="600 13px Inter",r.textAlign="right",r.fillText(u,62,f+5)}),[[1,"Sarah M.","Repair, 2 mi"],[3.5,"Mike T.","Install, 4 mi"],[6,"Dana R.","Service, 3 mi"],[8,"Luis P.","Estimate, 5 mi"]].forEach((u,p)=>{let f=wt(s-p);if(f<=0)return;let g=130+u[0]*46+4,m=.7+.3*ct(f);r.save(),r.globalAlpha=ct(f),r.translate(178,g+38),r.scale(m,m),r.translate(-178,-(g+38)),r.fillStyle=["#ff8a3d","#2f8f6a","#3a7bd5","#8e5bd6"][p],vn(r,74,g,210,76,12),r.fill(),r.fillStyle="#fff",r.textAlign="left",r.font="800 19px Inter",r.fillText(u[1],88,g+32),r.font="600 15px Inter",r.globalAlpha*=.9,r.fillText(u[2],88,g+56),r.restore()}),c===0&&s<.05&&(r.fillStyle="#8a97ab",r.textAlign="center",r.font="800 24px Inter",r.fillText("No jobs booked",a/2+30,330),r.font="600 15px Inter",r.fillText("Nothing on the calendar",a/2+30,356)),t&&n>0){let u=-110+ct(n)*120;r.save(),r.shadowColor="rgba(0,0,0,.5)",r.shadowBlur=18,r.fillStyle="#f4f6fa",vn(r,12,u,a-24,92,18),r.fill(),r.restore(),r.fillStyle="#ff8a3d",vn(r,26,u+18,40,40,10),r.fill(),r.fillStyle="#fff",r.font="900 24px Inter",r.textAlign="center",r.fillText("!",46,u+47),r.textAlign="left",r.fillStyle="#1b2a41",r.font="800 18px Inter",r.fillText(t[0],78,u+38),r.fillStyle="#5b6678",r.font="600 15px Inter",r.fillText(t[1],78,u+64)}Do.needsUpdate=!0}function Ag(){let s=new Ve,e=nt(10124111,{roughness:1});for(let t=0;t<9;t++){let n=new Ue(new Ni(.26+Math.random()*.08,.012,5,26),e);n.rotation.set(Math.random()*3,Math.random()*3,Math.random()*3),n.castShadow=!0,s.add(n)}return s}async function Rg(){Vt.color.set(16765600),Vt.intensity=2.5,Vt.position.set(20,11,8),Vt.shadow.bias=-.0012,Vt.shadow.normalBias=.08,Object.assign(Vt.shadow.camera,{left:-16,right:16,top:16,bottom:-16}),Vt.shadow.camera.updateProjectionMatrix(),Co.color.set(16770760),Co.groundColor.set(8030800),Co.intensity=1.05,Lo.color.set(16767408),Lo.intensity=.7,ui.toneMappingExposure=1.1;let s=new Tn(16770764,.9);s.position.set(2,4,-12),ze.add(s),ze.fog.color.set(15785156),Mh.material.fragmentShader=vp+"void main(){float y=d.y;vec3 top=vec3(.36,.56,.86),hor=vec3(1.,.86,.68),bot=vec3(.85,.82,.7);vec3 c=y>0.?mix(hor,top,pow(smoothstep(0.,.55,y),.75)):bot;vec3 s=normalize(vec3(.8,.4,.35));c+=vec3(1.,.75,.45)*pow(max(dot(d,s),0.),24.)*.7;c=clouds(c,vec3(1.,.88,.76),hor);gl_FragColor=vec4(c,1.);}",Mh.material.needsUpdate=!0;let e=4.2,t=-.2,n=new Ve;n.position.set(e,0,t+.12),ze.add(n),et(Po(.62,.4,.42,.05),nt(14239022,{roughness:.5}),n,0,.2,0),et(Po(.64,.06,.44,.03),nt(15921906,{roughness:.5}),n,0,.42,0),ge.root.position.set(e,0,t),ge.yaw=ge.yawTarget=Math.PI,ge.set("sitPhone"),ge.setMood("neutral"),ge.phoneScreen.material=Oo;let i=1,r=1,a=!0;bh=u=>{ge.slump=r*(i>0?1:0),i>0&&!a&&(a=!0),ge.root.position.y=i>0?Pg:0};let o=[["RIVAL CO.",12597547],["OTHER GUYS",2912187],["BIG BRAND",8080324]].map(([u,p])=>{let f=Us("van",u,p,"HOME SERVICES");return f.position.set(-60,0,-7.7),f.traverse(g=>{g.isMesh&&(g.castShadow=!0)}),ze.add(f),f}),l=new ki({model:"sarah",height:1.66,recolor:[[70,170,335,.9,1.05]]});l.root.position.set(12.2,0,-12.6),l.yaw=l.yawTarget=0,l.set("idle"),l.setMood("smile"),ze.add(l.root),Fo.push(l);let c=Ag();ze.add(c),Bo=[[.5,2.4,"Slow week? Phone not ringing?"],[3,5.4,"Meanwhile, the other guys are booked solid."],[5.7,9.9,"Referrals are great. But they only reach people who already know you."],[11.1,14.3,"What if homeowners who've never heard of you could find you too?"],[14.5,19.2,"We put your business in front of them, for extra jobs on top of your referrals."],[19.4,22.8,"I built a 3 minute demo that shows your business, 30 days from now."],[22.8,26.1,"Tap the button below, and watch it."]],li=26.4,Ds=null;let h=u=>(u>5.3)+(u>6.3)+(u>9),d=u=>(u>11.5)+(u>13.9)+(u>14.9);Sh=u=>{if(u<4.6||u>19.3)return;let p=ct((u-4.6)*3)*(1-ct((u-19)*3)),f=h(u),g=d(u);oe.save(),oe.globalAlpha=p,oe.translate(gt-300,34),oe.fillStyle="rgba(12,18,28,.82)",vn(oe,0,0,266,112,22),oe.fill(),oe.textAlign="left",oe.font="800 15px Inter",oe.fillStyle="rgba(255,255,255,.7)",oe.fillText("JOBS BOOKED TODAY",22,32),oe.font="700 22px Inter",oe.fillStyle="#ff9a8a",oe.fillText("The other guys",22,66),oe.fillStyle="#9fe3c4",oe.fillText("You",22,96);let m=(_,M)=>1+.35*wt(1-(u-_)*4);oe.textAlign="right",oe.font="900 28px Inter",oe.fillStyle="#fff";let x=[5.3,6.3,9][f-1]||-9,v=[11.5,13.9,14.9][g-1]||-9;oe.save(),oe.translate(240,66),oe.scale(m(x),m(x)),oe.fillText(String(f),0,0),oe.restore(),oe.save(),oe.translate(240,97),oe.scale(m(v),m(v)),oe.fillStyle=g?"#9fe3c4":"#ff7b7b",oe.fillText(String(g),0,0),oe.restore(),oe.restore()},st(3,()=>ge.setMood("worried")),st(6.4,()=>{ge.set("sit"),r=.35}),st(8.6,()=>{l.set("wave")}),st(10.2,()=>{l.set("idle"),ge.set("sitPhone"),r=1}),st(11.4,()=>ge.setMood("neutral")),st(13.2,()=>{ge.setMood("smile"),r=0}),st(15,()=>{ge.setMood("happy")}),st(15.6,()=>{ge.set("sit")}),st(16.2,()=>{ge.set("idle")}),st(16.9,()=>{ge.walkTo([le(2.9,0,1.2),le(1.4,0,1.25)],1.05)}),st(19,()=>{ge.set("phoneHappy"),ge.face(5,4)}),Os=u=>{i=u<16.2?1:1-wt((u-16.2)/.6);let p=u<11.5?0:u<13.9?wt((u-11.5)/.5):u<14.9?1+wt((u-13.9)/.5):u<15.6?2+wt((u-14.9)/.5):3+wt((u-15.6)/.5),f=null,g=0;u>11.1&&u<13.6?(f=["New request","Sarah, 2 mi away"],g=wt((u-11.1)/.35)*(1-wt((u-13.2)/.4))):u>13.6&&u<16.4&&(f=["3 new leads today","Tap to see who wants a visit"],g=wt((u-13.6)/.35)*(1-wt((u-16)/.4))),wg(p,u,f,g);let m=u>11.1&&u<11.6||u>13.6&&u<14.1;ge.phone.rotation.z=m?Math.sin(u*80)*.06:0;let x=(y,U,C,L,B,P)=>{let G=wt((u-U)/C);y.position.set(Te(L,B,G),0,P),y.visible=G>0&&G<1};x(o[0],4.2,2.6,-14,26,-7.7),x(o[1],5.2,2.6,-14,26,-7.7);{let y=wt((u-7.4)/1.6),U=1-(1-y)*(1-y);o[2].position.set(Te(-6,10.8,U),0,-10.4),o[2].visible=u>7.4}u>20&&x(o[0],20.5,4.2,-14,30,-7.7);{let y=(u-2.7)/2.2;c.visible=y>0&&y<1,c.position.set(Te(10.5,1.5,y),.3+Math.abs(Math.sin(y*9))*.25,-2),c.rotation.z=y*9,c.rotation.x=y*2}let v=_n(ge.phone),_=Io(ge),M=(y,U=.42,C=.55,L=.2)=>{let B=v.clone().sub(_).setY(0).normalize(),P=le(-B.z,0,B.x);it(_.clone().addScaledVector(B,-U).addScaledVector(P,C).add(le(0,L,0)),v,y)},T=(y=1,U=.25,C=30)=>{y*=2.2,U*=2;let L=Io(ge).add(le(0,-.08,0)),B=le(Math.sin(ge.yaw),0,Math.cos(ge.yaw)),P=le(-B.z,0,B.x);it(L.clone().addScaledVector(B,y).addScaledVector(P,U).add(le(0,-.12,0)),L.clone().add(le(0,-.1,0)),C)},S=(y,U,C=0)=>{let L=_n(ge.phoneScreen),B=new rt;ge.phoneScreen.getWorldQuaternion(B);let P=le(0,0,1).applyQuaternion(B),G=le(0,1,0).applyQuaternion(B).lerp(le(0,1,0),.3).normalize(),V=P.clone().cross(G).normalize();Wi.up.copy(G),it(L.clone().addScaledVector(P,y).addScaledVector(V,C),L,U),Wi.up.set(0,1,0)};if(ge.model.visible=!(u<2.8||u>=11.1&&u<15.6),u<2.8){let y=ct(u/2.8);S(Te(.3,.25,y),52,0)}else if(u<4.6){let y=ct((u-2.8)/1.8);it(le(Te(8.6,8.1,y),Te(1.05,1.15,y),Te(-3.4,-3.1,y)),le(Te(4.6,4.2,y),.8,-.3),33)}else if(u<6.5){let y=ct((u-4.6)/1.9);it(le(Te(1.6,3,y),.55,-4.9),le(Te(5,9,y),1.25,-8.3),40)}else if(u<7.9){let y=ct((u-6.5)/1.4);T(Te(1.15,.95,y),.3,30)}else if(u<10.2){let y=ct((u-7.9)/2.3);it(le(Te(5.7,5.9,y),1.85,Te(1.5,1.2,y)),le(Te(9.5,12.2,y),1,Te(-10.5,-12.6,y)),Te(30,24,y))}else if(u<11.1){let y=ct((u-10.2)/.9);it(le(Te(7.4,7.1,y),1.3,Te(1.9,1.6,y)),le(4.2,.95,-.3),32)}else if(u<15.6){let y=ct((u-11.1)/4.5);S(Te(.28,.25,y),52,0)}else if(u<16.4)T(1.05,.2,30);else if(u<19.4){let y=ct((u-16.4)/3),U=ge.root.position;it(le(Te(7.4,6.2,y),Te(1.35,1.5,y),Te(3.4,4.4,y)),le(U.x-.3,1.05,U.z-.3),34)}else{let y=ct((u-19.4)/7);it(le(Te(5.8,10.5,y),Te(1.5,3.4,y),Te(4.6,9.5,y)),le(Te(1.8,2,y),Te(1.2,1.3,y),Te(.6,-1.5,y)),34)}}}var Cg=!1,Pg=0;window.init=async()=>(await _h(["owner","kid","sarah"]),ge=new ki({model:"owner",height:1.82,cap:!0,capColor:3116906}),ze.add(ge.root),await yg(),gp==="A"?await Eg():gp==="C"?await Rg():await Tg(),[ge,...Fo].forEach(s=>s.j.head.traverse(e=>{e.isMesh&&(e.receiveShadow=!1)})),ge.update(Ro),Cg=!0,!0);window.frame=s=>{for(;Vi<s-1e-6;)Vi+=Ro,yp.forEach(e=>{!e.done&&Vi>=e.time&&(e.done=!0,e.fn())}),Os(Vi),ge.update(Ro),Fo.forEach(e=>e.update(Ro)),bh&&bh(Vi);return Os(Vi),ze.updateMatrixWorld(!0),No.render(),bg(Vi),Bs.toDataURL("image/jpeg",.9)};
/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
