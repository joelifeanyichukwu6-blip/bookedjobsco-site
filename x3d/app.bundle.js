var Ec="160";var Mp=1,_h=2,ri=3,qn=0,Vt=1,Hn=2;var bp=0;var Ct=2;var or=100;var Sc=204,Tc=205;var Ep=0,Lf=1,If=2,Ri=0,Mh=1,bh=2,Eh=3,xa=4,Df=5,Sh=6,Du="attached",Nf="detached",Sp=300,ls=301,cs=302,wc=303,Ac=304,nl=306,dr=1e3,Un=1001,aa=1002,Xt=1003,So=1004;var ea=1005;var rn=1006,Th=1007;var pr=1008;var lr=1009;var wh=1012,Tp=1013,Ti=1014,ai=1015,Bn=1016,wp=1017,Ap=1018,cr=1020;var On=1023;var hr=1026,hs=1027;var Rp=1029;var Cp=1031,Pp=1033,kl=33776,Fl=33777,Hl=33778,zl=33779,Nu=35840,Uu=35841,Ou=35842,Bu=35843,Lp=36196,ku=37492,Fu=37496,Hu=37808,zu=37809,Gu=37810,Vu=37811,Wu=37812,Xu=37813,ju=37814,qu=37815,Yu=37816,Zu=37817,Ku=37818,Ju=37819,$u=37820,Qu=37821,Gl=36492,ed=36494,td=36495;var nd=36284,id=36285,rd=36286;var us=2300,fr=2301,Vl=2302,sd=2400,ad=2401,od=2402;var Ip=0,il=1,_a=2,Dp=3e3,ur=3001;var Wn="",st="srgb",Bt="srgb-linear",Ah="display-p3",rl="display-p3-linear",To="linear",ht="srgb",wo="rec709",Ao="p3";var Br=7680;var Rc=35044;var ld="300 es",Cc=1035,ds=2e3,Ro=2001,Pi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let n=this._listeners[e];if(n!==void 0){let i=n.indexOf(t);i!==-1&&n.splice(i,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let t=this._listeners[e.type];if(t!==void 0){e.target=this;let n=t.slice(0);for(let i=0,s=n.length;i<s;i++)n[i].call(this,e);e.target=null}}},Zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],cd=1234567,ss=Math.PI/180,ps=180/Math.PI;function yn(){let r=4294967295*Math.random()|0,e=4294967295*Math.random()|0,t=4294967295*Math.random()|0,n=4294967295*Math.random()|0;return(Zt[255&r]+Zt[r>>8&255]+Zt[r>>16&255]+Zt[r>>24&255]+"-"+Zt[255&e]+Zt[e>>8&255]+"-"+Zt[e>>16&15|64]+Zt[e>>24&255]+"-"+Zt[63&t|128]+Zt[t>>8&255]+"-"+Zt[t>>16&255]+Zt[t>>24&255]+Zt[255&n]+Zt[n>>8&255]+Zt[n>>16&255]+Zt[n>>24&255]).toLowerCase()}function Ot(r,e,t){return Math.max(e,Math.min(t,r))}function Pc(r,e){return(r%e+e)%e}function ta(r,e,t){return(1-t)*r+t*e}function Lc(r){return(r&r-1)==0&&r!==0}function Co(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Xn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function ot(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(4294967295*r);case Uint16Array:return Math.round(65535*r);case Uint8Array:return Math.round(255*r);case Int32Array:return Math.round(2147483647*r);case Int16Array:return Math.round(32767*r);case Int8Array:return Math.round(127*r);default:throw new Error("Invalid component type.")}}var Np={DEG2RAD:ss,RAD2DEG:ps,generateUUID:yn,clamp:Ot,euclideanModulo:Pc,mapLinear:function(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)},inverseLerp:function(r,e,t){return r!==e?(t-r)/(e-r):0},lerp:ta,damp:function(r,e,t,n){return ta(r,e,1-Math.exp(-t*n))},pingpong:function(r,e=1){return e-Math.abs(Pc(r,2*e)-e)},smoothstep:function(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e))*r*(3-2*r)},smootherstep:function(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e))*r*r*(r*(6*r-15)+10)},randInt:function(r,e){return r+Math.floor(Math.random()*(e-r+1))},randFloat:function(r,e){return r+Math.random()*(e-r)},randFloatSpread:function(r){return r*(.5-Math.random())},seededRandom:function(r){r!==void 0&&(cd=r);let e=cd+=1831565813;return e=Math.imul(e^e>>>15,1|e),e^=e+Math.imul(e^e>>>7,61|e),((e^e>>>14)>>>0)/4294967296},degToRad:function(r){return r*ss},radToDeg:function(r){return r*ps},isPowerOfTwo:Lc,ceilPowerOfTwo:function(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))},floorPowerOfTwo:Co,setQuaternionFromProperEuler:function(r,e,t,n,i){let s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+n)/2),h=a((e+n)/2),u=s((e-n)/2),d=a((e-n)/2),p=s((n-e)/2),m=a((n-e)/2);switch(i){case"XYX":r.set(o*h,l*u,l*d,o*c);break;case"YZY":r.set(l*d,o*h,l*u,o*c);break;case"ZXZ":r.set(l*u,l*d,o*h,o*c);break;case"XZX":r.set(o*h,l*m,l*p,o*c);break;case"YXY":r.set(l*p,o*h,l*m,o*c);break;case"ZYZ":r.set(l*m,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}},normalize:ot,denormalize:Xn},re=class r{constructor(e=0,t=0){r.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ot(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ke=class r{constructor(e,t,n,i,s,a,o,l,c){r.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c)}set(e,t,n,i,s,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],m=n[8],v=i[0],f=i[3],x=i[6],g=i[1],y=i[4],_=i[7],R=i[2],b=i[5],S=i[8];return s[0]=a*v+o*g+l*R,s[3]=a*f+o*y+l*b,s[6]=a*x+o*_+l*S,s[1]=c*v+h*g+u*R,s[4]=c*f+h*y+u*b,s[7]=c*x+h*_+u*S,s[2]=d*v+p*g+m*R,s[5]=d*f+p*y+m*b,s[8]=d*x+p*_+m*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*s*h+n*o*l+i*s*c-i*a*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*s,p=c*s-a*l,m=t*u+n*d+i*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/m;return e[0]=u*v,e[1]=(i*c-h*n)*v,e[2]=(o*n-i*a)*v,e[3]=d*v,e[4]=(h*t-i*l)*v,e[5]=(i*s-o*t)*v,e[6]=p*v,e[7]=(n*l-c*t)*v,e[8]=(a*t-n*s)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Wl.makeScale(e,t)),this}rotate(e){return this.premultiply(Wl.makeRotation(-e)),this}translate(e,t){return this.premultiply(Wl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Wl=new ke;function Up(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function oa(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Uf(){let r=oa("canvas");return r.style.display="block",r}var hd={};function na(r){r in hd||(hd[r]=!0,console.warn(r))}var ud=new ke().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),dd=new ke().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ha={[Bt]:{transfer:To,primaries:wo,toReference:r=>r,fromReference:r=>r},[st]:{transfer:ht,primaries:wo,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[rl]:{transfer:To,primaries:Ao,toReference:r=>r.applyMatrix3(dd),fromReference:r=>r.applyMatrix3(ud)},[Ah]:{transfer:ht,primaries:Ao,toReference:r=>r.convertSRGBToLinear().applyMatrix3(dd),fromReference:r=>r.applyMatrix3(ud).convertLinearToSRGB()}},Of=new Set([Bt,rl]),Qe={enabled:!0,_workingColorSpace:Bt,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!Of.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;let n=Ha[e].toReference;return(0,Ha[t].fromReference)(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return Ha[r].primaries},getTransfer:function(r){return r===Wn?To:Ha[r].transfer}};function as(r){return r<.04045?.0773993808*r:Math.pow(.9478672986*r+.0521327014,2.4)}function Xl(r){return r<.0031308?12.92*r:1.055*Math.pow(r,.41666)-.055}var kr,Po=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{kr===void 0&&(kr=oa("canvas")),kr.width=e.width,kr.height=e.height;let n=kr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=kr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=oa("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=255*as(s[a]/255);return n.putImageData(i,0,0),t}if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(255*as(t[n]/255)):t[n]=as(t[n]);return{data:t,width:e.width,height:e.height}}return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Bf=0,Lo=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Bf++}),this.uuid=yn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(jl(i[a].image)):s.push(jl(i[a]))}else s=jl(i);n.url=s}return t||(e.images[this.uuid]=n),n}};function jl(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Po.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var kf=0,jt=class r extends Pi{constructor(e=r.DEFAULT_IMAGE,t=r.DEFAULT_MAPPING,n=1001,i=1001,s=1006,a=1008,o=1023,l=1009,c=r.DEFAULT_ANISOTROPY,h=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kf++}),this.uuid=yn(),this.name="",this.source=new Lo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new re(0,0),this.repeat=new re(1,1),this.center=new re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(na("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===ur?st:Wn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Sp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case dr:e.x=e.x-Math.floor(e.x);break;case Un:e.x=e.x<0?0:1;break;case aa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case dr:e.y=e.y-Math.floor(e.y);break;case Un:e.y=e.y<0?0:1;break;case aa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return na("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===st?ur:Dp}set encoding(e){na("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===ur?st:Wn}};jt.DEFAULT_IMAGE=null,jt.DEFAULT_MAPPING=Sp,jt.DEFAULT_ANISOTROPY=1;var ut=class r{constructor(e=0,t=0,n=0,i=1){r.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],m=l[9],v=l[2],f=l[6],x=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(m-f)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(m+f)<.1&&Math.abs(c+p+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(c+1)/2,_=(p+1)/2,R=(x+1)/2,b=(h+d)/4,S=(u+v)/4,D=(m+f)/4;return y>_&&y>R?y<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(y),i=b/n,s=S/n):_>R?_<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(_),n=b/i,s=D/i):R<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(R),n=S/s,i=D/s),this.set(n,i,s,t),this}let g=Math.sqrt((f-m)*(f-m)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(g)<.001&&(g=1),this.x=(f-m)/g,this.y=(u-v)/g,this.z=(d-h)/g,this.w=Math.acos((c+p+x-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ic=class extends Pi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ut(0,0,e,t),this.scissorTest=!1,this.viewport=new ut(0,0,e,t);let i={width:e,height:t,depth:1};n.encoding!==void 0&&(na("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===ur?st:Wn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:rn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new jt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){this.width===e&&this.height===t&&this.depth===n||(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Lo(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},en=class extends Ic{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Io=class extends jt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=Un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Dc=class extends jt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=Un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var un=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],d=s[a+0],p=s[a+1],m=s[a+2],v=s[a+3];if(o===0)return e[t+0]=l,e[t+1]=c,e[t+2]=h,void(e[t+3]=u);if(o===1)return e[t+0]=d,e[t+1]=p,e[t+2]=m,void(e[t+3]=v);if(u!==v||l!==d||c!==p||h!==m){let f=1-o,x=l*d+c*p+h*m+u*v,g=x>=0?1:-1,y=1-x*x;if(y>Number.EPSILON){let R=Math.sqrt(y),b=Math.atan2(R,x*g);f=Math.sin(f*b)/R,o=Math.sin(o*b)/R}let _=o*g;if(l=l*f+d*_,c=c*f+p*_,h=h*f+m*_,u=u*f+v*_,f===1-o){let R=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=R,c*=R,h*=R,u*=R}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,a){let o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[a],d=s[a+1],p=s[a+2],m=s[a+3];return e[t]=o*m+h*u+l*p-c*d,e[t+1]=l*m+h*d+c*u-o*p,e[t+2]=c*m+h*p+o*d-l*u,e[t+3]=h*m-o*u-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(s/2),d=l(n/2),p=l(i/2),m=l(s/2);switch(a){case"XYZ":this._x=d*h*u+c*p*m,this._y=c*p*u-d*h*m,this._z=c*h*m+d*p*u,this._w=c*h*u-d*p*m;break;case"YXZ":this._x=d*h*u+c*p*m,this._y=c*p*u-d*h*m,this._z=c*h*m-d*p*u,this._w=c*h*u+d*p*m;break;case"ZXY":this._x=d*h*u-c*p*m,this._y=c*p*u+d*h*m,this._z=c*h*m+d*p*u,this._w=c*h*u-d*p*m;break;case"ZYX":this._x=d*h*u-c*p*m,this._y=c*p*u+d*h*m,this._z=c*h*m-d*p*u,this._w=c*h*u+d*p*m;break;case"YZX":this._x=d*h*u+c*p*m,this._y=c*p*u+d*h*m,this._z=c*h*m-d*p*u,this._w=c*h*u-d*p*m;break;case"XZY":this._x=d*h*u-c*p*m,this._y=c*p*u-d*h*m,this._z=c*h*m+d*p*u,this._w=c*h*u+d*p*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(a-i)*p}else if(n>o&&n>u){let p=2*Math.sqrt(1+n-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(s+c)/p}else if(o>u){let p=2*Math.sqrt(1+o-n-u);this._w=(s-c)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-n-o);this._w=(a-i)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ot(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+i*c-s*l,this._y=i*h+a*l+s*o-n*c,this._z=s*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,s=this._z,a=this._w,o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},E=class r{constructor(e=0,t=0,n=0){r.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(pd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(pd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),h=2*(o*t-s*i),u=2*(s*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-s*u,this.z=i+l*u+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ql.copy(this).projectOnVector(e),this.sub(ql)}reflect(e){return this.sub(ql.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ot(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,4*t)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,3*t)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=2*(Math.random()-.5),t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ql=new E,pd=new un,sn=class{constructor(e=new E(1/0,1/0,1/0),t=new E(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(In.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(In.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=In.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,In):In.fromBufferAttribute(s,a),In.applyMatrix4(e.matrixWorld),this.expandByPoint(In);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),za.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),za.copy(n.boundingBox)),za.applyMatrix4(e.matrixWorld),this.union(za)}let i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,In),In.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Vs),Ga.subVectors(this.max,Vs),Fr.subVectors(e.a,Vs),Hr.subVectors(e.b,Vs),zr.subVectors(e.c,Vs),yi.subVectors(Hr,Fr),xi.subVectors(zr,Hr),nr.subVectors(Fr,zr);let t=[0,-yi.z,yi.y,0,-xi.z,xi.y,0,-nr.z,nr.y,yi.z,0,-yi.x,xi.z,0,-xi.x,nr.z,0,-nr.x,-yi.y,yi.x,0,-xi.y,xi.x,0,-nr.y,nr.x,0];return!!Yl(t,Fr,Hr,zr,Ga)&&(t=[1,0,0,0,1,0,0,0,1],!!Yl(t,Fr,Hr,zr,Ga)&&(Va.crossVectors(yi,xi),t=[Va.x,Va.y,Va.z],Yl(t,Fr,Hr,zr,Ga)))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,In).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=.5*this.getSize(In).length()),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||($n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),$n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),$n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),$n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),$n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),$n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),$n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),$n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints($n)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},$n=[new E,new E,new E,new E,new E,new E,new E,new E],In=new E,za=new sn,Fr=new E,Hr=new E,zr=new E,yi=new E,xi=new E,nr=new E,Vs=new E,Ga=new E,Va=new E,ir=new E;function Yl(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){ir.fromArray(r,s);let o=i.x*Math.abs(ir.x)+i.y*Math.abs(ir.y)+i.z*Math.abs(ir.z),l=e.dot(ir),c=t.dot(ir),h=n.dot(ir);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Ff=new sn,Ws=new E,Zl=new E,an=class{constructor(e=new E,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Ff.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ws.subVectors(e,this.center);let t=Ws.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=.5*(n-this.radius);this.center.addScaledVector(Ws,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Zl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ws.copy(e.center).add(Zl)),this.expandByPoint(Ws.copy(e.center).sub(Zl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Qn=new E,Kl=new E,Wa=new E,_i=new E,Jl=new E,Xa=new E,$l=new E,fs=class{constructor(e=new E,t=new E(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Qn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Qn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Qn.copy(this.origin).addScaledVector(this.direction,t),Qn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Kl.copy(e).add(t).multiplyScalar(.5),Wa.copy(t).sub(e).normalize(),_i.copy(this.origin).sub(Kl);let s=.5*e.distanceTo(t),a=-this.direction.dot(Wa),o=_i.dot(this.direction),l=-_i.dot(Wa),c=_i.lengthSq(),h=Math.abs(1-a*a),u,d,p,m;if(h>0)if(u=a*l-o,d=a*o-l,m=s*h,u>=0)if(d>=-m)if(d<=m){let v=1/h;u*=v,d*=v,p=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d<=-m?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c):d<=m?(u=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Kl).addScaledVector(Wa,d),p}intersectSphere(e,t){Qn.subVectors(e.center,this.origin);let n=Qn.dot(this.direction),i=Qn.dot(Qn)-n*n,s=e.radius*e.radius;if(i>s)return null;let a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0?!0:e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||s>i?null:((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>i?null:((o>n||n!=n)&&(n=o),(l<i||i!=i)&&(i=l),i<0?null:this.at(n>=0?n:i,t)))}intersectsBox(e){return this.intersectBox(e,Qn)!==null}intersectTriangle(e,t,n,i,s){Jl.subVectors(t,e),Xa.subVectors(n,e),$l.crossVectors(Jl,Xa);let a,o=this.direction.dot($l);if(o>0){if(i)return null;a=1}else{if(!(o<0))return null;a=-1,o=-o}_i.subVectors(this.origin,e);let l=a*this.direction.dot(Xa.crossVectors(_i,Xa));if(l<0)return null;let c=a*this.direction.dot(Jl.cross(_i));if(c<0||l+c>o)return null;let h=-a*_i.dot($l);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Le=class r{constructor(e,t,n,i,s,a,o,l,c,h,u,d,p,m,v,f){r.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c,h,u,d,p,m,v,f)}set(e,t,n,i,s,a,o,l,c,h,u,d,p,m,v,f){let x=this.elements;return x[0]=e,x[4]=t,x[8]=n,x[12]=i,x[1]=s,x[5]=a,x[9]=o,x[13]=l,x[2]=c,x[6]=h,x[10]=u,x[14]=d,x[3]=p,x[7]=m,x[11]=v,x[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/Gr.setFromMatrixColumn(e,0).length(),s=1/Gr.setFromMatrixColumn(e,1).length(),a=1/Gr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){let d=a*h,p=a*u,m=o*h,v=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+m*c,t[5]=d-v*c,t[9]=-o*l,t[2]=v-d*c,t[6]=m+p*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*h,p=l*u,m=c*h,v=c*u;t[0]=d+v*o,t[4]=m*o-p,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=p*o-m,t[6]=v+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*h,p=l*u,m=c*h,v=c*u;t[0]=d-v*o,t[4]=-a*u,t[8]=m+p*o,t[1]=p+m*o,t[5]=a*h,t[9]=v-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*h,p=a*u,m=o*h,v=o*u;t[0]=l*h,t[4]=m*c-p,t[8]=d*c+v,t[1]=l*u,t[5]=v*c+d,t[9]=p*c-m,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,p=a*c,m=o*l,v=o*c;t[0]=l*h,t[4]=v-d*u,t[8]=m*u+p,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*u+m,t[10]=d-v*u}else if(e.order==="XZY"){let d=a*l,p=a*c,m=o*l,v=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+v,t[5]=a*h,t[9]=p*u-m,t[2]=m*u-p,t[6]=o*h,t[10]=v*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Hf,e,zf)}lookAt(e,t,n){let i=this.elements;return cn.subVectors(e,t),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),Mi.crossVectors(n,cn),Mi.lengthSq()===0&&(Math.abs(n.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),Mi.crossVectors(n,cn)),Mi.normalize(),ja.crossVectors(cn,Mi),i[0]=Mi.x,i[4]=ja.x,i[8]=cn.x,i[1]=Mi.y,i[5]=ja.y,i[9]=cn.y,i[2]=Mi.z,i[6]=ja.z,i[10]=cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],m=n[2],v=n[6],f=n[10],x=n[14],g=n[3],y=n[7],_=n[11],R=n[15],b=i[0],S=i[4],D=i[8],M=i[12],L=i[1],N=i[5],C=i[9],k=i[13],U=i[2],Q=i[6],he=i[10],ie=i[14],G=i[3],J=i[7],H=i[11],Z=i[15];return s[0]=a*b+o*L+l*U+c*G,s[4]=a*S+o*N+l*Q+c*J,s[8]=a*D+o*C+l*he+c*H,s[12]=a*M+o*k+l*ie+c*Z,s[1]=h*b+u*L+d*U+p*G,s[5]=h*S+u*N+d*Q+p*J,s[9]=h*D+u*C+d*he+p*H,s[13]=h*M+u*k+d*ie+p*Z,s[2]=m*b+v*L+f*U+x*G,s[6]=m*S+v*N+f*Q+x*J,s[10]=m*D+v*C+f*he+x*H,s[14]=m*M+v*k+f*ie+x*Z,s[3]=g*b+y*L+_*U+R*G,s[7]=g*S+y*N+_*Q+R*J,s[11]=g*D+y*C+_*he+R*H,s[15]=g*M+y*k+_*ie+R*Z,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],p=e[14];return e[3]*(+s*l*u-i*c*u-s*o*d+n*c*d+i*o*p-n*l*p)+e[7]*(+t*l*p-t*c*d+s*a*d-i*a*p+i*c*h-s*l*h)+e[11]*(+t*c*u-t*o*p-s*a*u+n*a*p+s*o*h-n*c*h)+e[15]*(-i*o*h-t*l*u+t*o*d+i*a*u-n*a*d+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],p=e[11],m=e[12],v=e[13],f=e[14],x=e[15],g=u*f*c-v*d*c+v*l*p-o*f*p-u*l*x+o*d*x,y=m*d*c-h*f*c-m*l*p+a*f*p+h*l*x-a*d*x,_=h*v*c-m*u*c+m*o*p-a*v*p-h*o*x+a*u*x,R=m*u*l-h*v*l-m*o*d+a*v*d+h*o*f-a*u*f,b=t*g+n*y+i*_+s*R;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let S=1/b;return e[0]=g*S,e[1]=(v*d*s-u*f*s-v*i*p+n*f*p+u*i*x-n*d*x)*S,e[2]=(o*f*s-v*l*s+v*i*c-n*f*c-o*i*x+n*l*x)*S,e[3]=(u*l*s-o*d*s-u*i*c+n*d*c+o*i*p-n*l*p)*S,e[4]=y*S,e[5]=(h*f*s-m*d*s+m*i*p-t*f*p-h*i*x+t*d*x)*S,e[6]=(m*l*s-a*f*s-m*i*c+t*f*c+a*i*x-t*l*x)*S,e[7]=(a*d*s-h*l*s+h*i*c-t*d*c-a*i*p+t*l*p)*S,e[8]=_*S,e[9]=(m*u*s-h*v*s-m*n*p+t*v*p+h*n*x-t*u*x)*S,e[10]=(a*v*s-m*o*s+m*n*c-t*v*c-a*n*x+t*o*x)*S,e[11]=(h*o*s-a*u*s-h*n*c+t*u*c+a*n*p-t*o*p)*S,e[12]=R*S,e[13]=(h*v*i-m*u*i+m*n*d-t*v*d-h*n*f+t*u*f)*S,e[14]=(m*o*i-a*v*i-m*n*l+t*v*l+a*n*f-t*o*f)*S,e[15]=(a*u*i-h*o*i+h*n*l-t*u*l-a*n*d+t*o*d)*S,this}scale(e){let t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,u=o+o,d=s*c,p=s*h,m=s*u,v=a*h,f=a*u,x=o*u,g=l*c,y=l*h,_=l*u,R=n.x,b=n.y,S=n.z;return i[0]=(1-(v+x))*R,i[1]=(p+_)*R,i[2]=(m-y)*R,i[3]=0,i[4]=(p-_)*b,i[5]=(1-(d+x))*b,i[6]=(f+g)*b,i[7]=0,i[8]=(m+y)*S,i[9]=(f-g)*S,i[10]=(1-(d+v))*S,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,s=Gr.set(i[0],i[1],i[2]).length(),a=Gr.set(i[4],i[5],i[6]).length(),o=Gr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Dn.copy(this);let l=1/s,c=1/a,h=1/o;return Dn.elements[0]*=l,Dn.elements[1]*=l,Dn.elements[2]*=l,Dn.elements[4]*=c,Dn.elements[5]*=c,Dn.elements[6]*=c,Dn.elements[8]*=h,Dn.elements[9]*=h,Dn.elements[10]*=h,t.setFromRotationMatrix(Dn),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a,o=2e3){let l=this.elements,c=2*s/(t-e),h=2*s/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i),p,m;if(o===ds)p=-(a+s)/(a-s),m=-2*a*s/(a-s);else{if(o!==Ro)throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);p=-a/(a-s),m=-a*s/(a-s)}return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=2e3){let l=this.elements,c=1/(t-e),h=1/(n-i),u=1/(a-s),d=(t+e)*c,p=(n+i)*h,m,v;if(o===ds)m=(a+s)*u,v=-2*u;else{if(o!==Ro)throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);m=s*u,v=-1*u}return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Gr=new E,Dn=new Le,Hf=new E(0,0,0),zf=new E(1,1,1),Mi=new E,ja=new E,cn=new E,fd=new Le,md=new un,Do=class r{constructor(e=0,t=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(Ot(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ot(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ot(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ot(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ot(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ot(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return fd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(fd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return md.setFromEuler(this),this.setFromQuaternion(md,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Do.DEFAULT_ORDER="XYZ";var No=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!=0}isEnabled(e){return(this.mask&(1<<e|0))!=0}},Gf=0,gd=new E,Vr=new un,ei=new Le,qa=new E,Xs=new E,Vf=new E,Wf=new un,vd=new E(1,0,0),yd=new E(0,1,0),xd=new E(0,0,1),Xf={type:"added"},jf={type:"removed"},mt=class r extends Pi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Gf++}),this.uuid=yn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let e=new E,t=new Do,n=new un,i=new E(1,1,1);t._onChange(function(){n.setFromEuler(t,!1)}),n._onChange(function(){t.setFromQuaternion(n,void 0,!1)}),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Le},normalMatrix:{value:new ke}}),this.matrix=new Le,this.matrixWorld=new Le,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new No,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Vr.setFromAxisAngle(e,t),this.quaternion.multiply(Vr),this}rotateOnWorldAxis(e,t){return Vr.setFromAxisAngle(e,t),this.quaternion.premultiply(Vr),this}rotateX(e){return this.rotateOnAxis(vd,e)}rotateY(e){return this.rotateOnAxis(yd,e)}rotateZ(e){return this.rotateOnAxis(xd,e)}translateOnAxis(e,t){return gd.copy(e).applyQuaternion(this.quaternion),this.position.add(gd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(vd,e)}translateY(e){return this.translateOnAxis(yd,e)}translateZ(e){return this.translateOnAxis(xd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ei.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?qa.copy(e):qa.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Xs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ei.lookAt(Xs,qa,this.up):ei.lookAt(qa,Xs,this.up),this.quaternion.setFromRotationMatrix(ei),i&&(ei.extractRotation(i.matrixWorld),Vr.setFromRotationMatrix(ei),this.quaternion.premultiply(Vr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Xf)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(jf)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ei.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ei.multiply(e.parent.matrixWorld)),e.applyMatrix4(ei),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xs,e,Vf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xs,Wf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++){let s=t[n];s.matrixWorldAutoUpdate!==!0&&e!==!0||s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let i=this.children;for(let s=0,a=i.length;s<a;s++){let o=i[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()})),this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),p=a(e.animations),m=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),m.length>0&&(n.nodes=m)}return n.object=i,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};mt.DEFAULT_UP=new E(0,1,0),mt.DEFAULT_MATRIX_AUTO_UPDATE=!0,mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Nn=new E,ti=new E,Ql=new E,ni=new E,Wr=new E,Xr=new E,_d=new E,ec=new E,tc=new E,nc=new E,Ya=!1,wi=class r{constructor(e=new E,t=new E,n=new E){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Nn.subVectors(e,t),i.cross(Nn);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Nn.subVectors(i,t),ti.subVectors(n,t),Ql.subVectors(e,t);let a=Nn.dot(Nn),o=Nn.dot(ti),l=Nn.dot(Ql),c=ti.dot(ti),h=ti.dot(Ql),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;let d=1/u,p=(c*l-o*h)*d,m=(a*h-o*l)*d;return s.set(1-p-m,m,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,ni)!==null&&ni.x>=0&&ni.y>=0&&ni.x+ni.y<=1}static getUV(e,t,n,i,s,a,o,l){return Ya===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ya=!0),this.getInterpolation(e,t,n,i,s,a,o,l)}static getInterpolation(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,ni)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ni.x),l.addScaledVector(a,ni.y),l.addScaledVector(o,ni.z),l)}static isFrontFacing(e,t,n,i){return Nn.subVectors(n,t),ti.subVectors(e,t),Nn.cross(ti).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Nn.subVectors(this.c,this.b),ti.subVectors(this.a,this.b),.5*Nn.cross(ti).length()}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return r.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return r.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return Ya===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ya=!0),r.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}getInterpolation(e,t,n,i,s){return r.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return r.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return r.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,s=this.c,a,o;Wr.subVectors(i,n),Xr.subVectors(s,n),ec.subVectors(e,n);let l=Wr.dot(ec),c=Xr.dot(ec);if(l<=0&&c<=0)return t.copy(n);tc.subVectors(e,i);let h=Wr.dot(tc),u=Xr.dot(tc);if(h>=0&&u<=h)return t.copy(i);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(Wr,a);nc.subVectors(e,s);let p=Wr.dot(nc),m=Xr.dot(nc);if(m>=0&&p<=m)return t.copy(s);let v=p*c-l*m;if(v<=0&&c>=0&&m<=0)return o=c/(c-m),t.copy(n).addScaledVector(Xr,o);let f=h*m-p*u;if(f<=0&&u-h>=0&&p-m>=0)return _d.subVectors(s,i),o=(u-h)/(u-h+(p-m)),t.copy(i).addScaledVector(_d,o);let x=1/(f+v+d);return a=v*x,o=d*x,t.copy(n).addScaledVector(Wr,a).addScaledVector(Xr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Op={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bi={h:0,s:0,l:0},Za={h:0,s:0,l:0};function ic(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+6*(e-r)*t:t<.5?e:t<2/3?r+6*(e-r)*(2/3-t):r}var _e=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=st){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255,Qe.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Qe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Qe.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Qe.workingColorSpace){if(e=Pc(e,1),t=Ot(t,0,1),n=Ot(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=ic(a,s,e+1/3),this.g=ic(a,s,e),this.b=ic(a,s,e-1/3)}return Qe.toWorkingColorSpace(this,i),this}setStyle(e,t=st){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=st){let n=Op[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=as(e.r),this.g=as(e.g),this.b=as(e.b),this}copyLinearToSRGB(e){return this.r=Xl(e.r),this.g=Xl(e.g),this.b=Xl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=st){return Qe.fromWorkingColorSpace(Kt.copy(this),e),65536*Math.round(Ot(255*Kt.r,0,255))+256*Math.round(Ot(255*Kt.g,0,255))+Math.round(Ot(255*Kt.b,0,255))}getHexString(e=st){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qe.workingColorSpace){Qe.fromWorkingColorSpace(Kt.copy(this),t);let n=Kt.r,i=Kt.g,s=Kt.b,a=Math.max(n,i,s),o=Math.min(n,i,s),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Qe.workingColorSpace){return Qe.fromWorkingColorSpace(Kt.copy(this),t),e.r=Kt.r,e.g=Kt.g,e.b=Kt.b,e}getStyle(e=st){Qe.fromWorkingColorSpace(Kt.copy(this),e);let t=Kt.r,n=Kt.g,i=Kt.b;return e!==st?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(255*t)},${Math.round(255*n)},${Math.round(255*i)})`}offsetHSL(e,t,n){return this.getHSL(bi),this.setHSL(bi.h+e,bi.s+t,bi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(bi),e.getHSL(Za);let n=ta(bi.h,Za.h,t),i=ta(bi.s,Za.s,t),s=ta(bi.l,Za.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Kt=new _e;_e.NAMES=Op;var qf=0,on=class extends Pi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qf++}),this.uuid=yn(),this.name="",this.type="Material",this.blending=1,this.side=qn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sc,this.blendDst=Tc,this.blendEquation=or,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new _e(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Br,this.stencilZFail=Br,this.stencilZPass=Br,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];i!==void 0?i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n:console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`)}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};function i(s){let a=[];for(let o in s){let l=s[o];delete l.metadata,a.push(l)}return a}if(n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==qn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Sc&&(n.blendSrc=this.blendSrc),this.blendDst!==Tc&&(n.blendDst=this.blendDst),this.blendEquation!==or&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Br&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Br&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Br&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData),t){let s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},et=class extends on{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new _e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ep,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},z0=Yf();function Yf(){let r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(n[l]=0,n[256|l]=32768,i[l]=24,i[256|l]=24):c<-14?(n[l]=1024>>-c-14,n[256|l]=1024>>-c-14|32768,i[l]=-c-1,i[256|l]=-c-1):c<=15?(n[l]=c+15<<10,n[256|l]=c+15<<10|32768,i[l]=13,i[256|l]=13):c<128?(n[l]=31744,n[256|l]=64512,i[l]=24,i[256|l]=24):(n[l]=31744,n[256|l]=64512,i[l]=13,i[256|l]=13)}let s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;!(8388608&c);)c<<=1,h-=8388608;c&=-8388609,h+=947912704,s[l]=c|h}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:s,exponentTable:a,offsetTable:o}}var wt=new E,Ka=new re,dt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Rc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ai,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ka.fromBufferAttribute(this,t),Ka.applyMatrix3(e),this.setXY(t,Ka.x,Ka.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix3(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix4(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyNormalMatrix(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.transformDirection(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Xn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ot(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Xn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Xn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Xn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Xn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array),i=ot(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array),i=ot(i,this.array),s=ot(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Rc&&(e.usage=this.usage),e}};var Uo=class extends dt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Oo=class extends dt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Ce=class extends dt{constructor(e,t,n){super(new Float32Array(e),t,n)}};var Zf=0,vn=new Le,rc=new mt,jr=new E,hn=new sn,js=new sn,Gt=new E,tt=class r extends Pi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Zf++}),this.uuid=yn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Up(e)?Oo:Uo)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new ke().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return vn.makeRotationFromQuaternion(e),this.applyMatrix4(vn),this}rotateX(e){return vn.makeRotationX(e),this.applyMatrix4(vn),this}rotateY(e){return vn.makeRotationY(e),this.applyMatrix4(vn),this}rotateZ(e){return vn.makeRotationZ(e),this.applyMatrix4(vn),this}translate(e,t,n){return vn.makeTranslation(e,t,n),this.applyMatrix4(vn),this}scale(e,t,n){return vn.makeScale(e,t,n),this.applyMatrix4(vn),this}lookAt(e){return rc.lookAt(e),rc.updateMatrix(),this.applyMatrix4(rc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(jr).negate(),this.translate(jr.x,jr.y,jr.z),this}setFromPoints(e){let t=[];for(let n=0,i=e.length;n<i;n++){let s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ce(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new sn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),void this.boundingBox.set(new E(-1/0,-1/0,-1/0),new E(1/0,1/0,1/0));if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let s=t[n];hn.setFromBufferAttribute(s),this.morphTargetsRelative?(Gt.addVectors(this.boundingBox.min,hn.min),this.boundingBox.expandByPoint(Gt),Gt.addVectors(this.boundingBox.max,hn.max),this.boundingBox.expandByPoint(Gt)):(this.boundingBox.expandByPoint(hn.min),this.boundingBox.expandByPoint(hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new an);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),void this.boundingSphere.set(new E,1/0);if(e){let n=this.boundingSphere.center;if(hn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];js.setFromBufferAttribute(o),this.morphTargetsRelative?(Gt.addVectors(hn.min,js.min),hn.expandByPoint(Gt),Gt.addVectors(hn.max,js.max),hn.expandByPoint(Gt)):(hn.expandByPoint(js.min),hn.expandByPoint(js.max))}hn.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)Gt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Gt));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Gt.fromBufferAttribute(o,c),l&&(jr.fromBufferAttribute(e,c),Gt.add(jr)),i=Math.max(i,n.distanceToSquared(Gt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0)return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");let n=e.array,i=t.position.array,s=t.normal.array,a=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new dt(new Float32Array(4*o),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let L=0;L<o;L++)c[L]=new E,h[L]=new E;let u=new E,d=new E,p=new E,m=new re,v=new re,f=new re,x=new E,g=new E;function y(L,N,C){u.fromArray(i,3*L),d.fromArray(i,3*N),p.fromArray(i,3*C),m.fromArray(a,2*L),v.fromArray(a,2*N),f.fromArray(a,2*C),d.sub(u),p.sub(u),v.sub(m),f.sub(m);let k=1/(v.x*f.y-f.x*v.y);isFinite(k)&&(x.copy(d).multiplyScalar(f.y).addScaledVector(p,-v.y).multiplyScalar(k),g.copy(p).multiplyScalar(v.x).addScaledVector(d,-f.x).multiplyScalar(k),c[L].add(x),c[N].add(x),c[C].add(x),h[L].add(g),h[N].add(g),h[C].add(g))}let _=this.groups;_.length===0&&(_=[{start:0,count:n.length}]);for(let L=0,N=_.length;L<N;++L){let C=_[L],k=C.start;for(let U=k,Q=k+C.count;U<Q;U+=3)y(n[U+0],n[U+1],n[U+2])}let R=new E,b=new E,S=new E,D=new E;function M(L){S.fromArray(s,3*L),D.copy(S);let N=c[L];R.copy(N),R.sub(S.multiplyScalar(S.dot(N))).normalize(),b.crossVectors(D,N);let C=b.dot(h[L])<0?-1:1;l[4*L]=R.x,l[4*L+1]=R.y,l[4*L+2]=R.z,l[4*L+3]=C}for(let L=0,N=_.length;L<N;++L){let C=_[L],k=C.start;for(let U=k,Q=k+C.count;U<Q;U+=3)M(n[U+0]),M(n[U+1]),M(n[U+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new dt(new Float32Array(3*t.count),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let i=new E,s=new E,a=new E,o=new E,l=new E,c=new E,h=new E,u=new E;if(e)for(let d=0,p=e.count;d<p;d+=3){let m=e.getX(d+0),v=e.getX(d+1),f=e.getX(d+2);i.fromBufferAttribute(t,m),s.fromBufferAttribute(t,v),a.fromBufferAttribute(t,f),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,f),o.add(h),l.add(h),c.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Gt.fromBufferAttribute(e,t),Gt.normalize(),e.setXYZ(t,Gt.x,Gt.y,Gt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),p=0,m=0;for(let v=0,f=l.length;v<f;v++){p=o.isInterleavedBufferAttribute?l[v]*o.data.stride+o.offset:l[v]*h;for(let x=0;x<h;x++)d[m++]=c[p++]}return new dt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new r,n=this.index.array,i=this.attributes;for(let o in i){let l=e(i[o],n);t.setAttribute(o,l)}let s=this.morphAttributes;for(let o in s){let l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){let d=e(c[h],n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(i[l]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let i=e.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(t))}let s=e.morphAttributes;for(let c in s){let h=[],u=s[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Md=new Le,rr=new fs,Ja=new an,bd=new E,qr=new E,Yr=new E,Zr=new E,sc=new E,$a=new E,Qa=new re,eo=new re,to=new re,Ed=new E,Sd=new E,Td=new E,no=new E,io=new E,Se=class extends mt{constructor(e=new tt,t=new et){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,s=n.length;i<s;i++){let a=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=i}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(s&&o){$a.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=o[l],u=s[l];h!==0&&(sc.fromBufferAttribute(u,e),a?$a.addScaledVector(sc,h):$a.addScaledVector(sc.sub(t),h))}t.add($a)}return t}raycast(e,t){let n=this.geometry,i=this.material,s=this.matrixWorld;if(i!==void 0){if(n.boundingSphere===null&&n.computeBoundingSphere(),Ja.copy(n.boundingSphere),Ja.applyMatrix4(s),rr.copy(e.ray).recast(e.near),Ja.containsPoint(rr.origin)===!1&&(rr.intersectSphere(Ja,bd)===null||rr.origin.distanceToSquared(bd)>(e.far-e.near)**2))return;Md.copy(s).invert(),rr.copy(e.ray).applyMatrix4(Md),n.boundingBox!==null&&rr.intersectsBox(n.boundingBox)===!1||this._computeIntersections(e,t,rr)}}_computeIntersections(e,t,n){let i,s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,v=d.length;m<v;m++){let f=d[m],x=a[f.materialIndex];for(let g=Math.max(f.start,p.start),y=Math.min(o.count,Math.min(f.start+f.count,p.start+p.count));g<y;g+=3)i=ro(this,x,e,n,c,h,u,o.getX(g),o.getX(g+1),o.getX(g+2)),i&&(i.faceIndex=Math.floor(g/3),i.face.materialIndex=f.materialIndex,t.push(i))}else for(let m=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);m<v;m+=3)i=ro(this,a,e,n,c,h,u,o.getX(m),o.getX(m+1),o.getX(m+2)),i&&(i.faceIndex=Math.floor(m/3),t.push(i));else if(l!==void 0)if(Array.isArray(a))for(let m=0,v=d.length;m<v;m++){let f=d[m],x=a[f.materialIndex];for(let g=Math.max(f.start,p.start),y=Math.min(l.count,Math.min(f.start+f.count,p.start+p.count));g<y;g+=3)i=ro(this,x,e,n,c,h,u,g,g+1,g+2),i&&(i.faceIndex=Math.floor(g/3),i.face.materialIndex=f.materialIndex,t.push(i))}else for(let m=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);m<v;m+=3)i=ro(this,a,e,n,c,h,u,m,m+1,m+2),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}};function ro(r,e,t,n,i,s,a,o,l,c){r.getVertexPosition(o,qr),r.getVertexPosition(l,Yr),r.getVertexPosition(c,Zr);let h=function(u,d,p,m,v,f,x,g){let y;if(y=d.side===Vt?m.intersectTriangle(x,f,v,!0,g):m.intersectTriangle(v,f,x,d.side===qn,g),y===null)return null;io.copy(g),io.applyMatrix4(u.matrixWorld);let _=p.ray.origin.distanceTo(io);return _<p.near||_>p.far?null:{distance:_,point:io.clone(),object:u}}(r,e,t,n,qr,Yr,Zr,no);if(h){i&&(Qa.fromBufferAttribute(i,o),eo.fromBufferAttribute(i,l),to.fromBufferAttribute(i,c),h.uv=wi.getInterpolation(no,qr,Yr,Zr,Qa,eo,to,new re)),s&&(Qa.fromBufferAttribute(s,o),eo.fromBufferAttribute(s,l),to.fromBufferAttribute(s,c),h.uv1=wi.getInterpolation(no,qr,Yr,Zr,Qa,eo,to,new re),h.uv2=h.uv1),a&&(Ed.fromBufferAttribute(a,o),Sd.fromBufferAttribute(a,l),Td.fromBufferAttribute(a,c),h.normal=wi.getInterpolation(no,qr,Yr,Zr,Ed,Sd,Td,new E),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new E,materialIndex:0};wi.getNormal(qr,Yr,Zr,u.normal),h.face=u}return h}var ae=class r extends tt{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};let o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,p=0;function m(v,f,x,g,y,_,R,b,S,D,M){let L=_/S,N=R/D,C=_/2,k=R/2,U=b/2,Q=S+1,he=D+1,ie=0,G=0,J=new E;for(let H=0;H<he;H++){let Z=H*N-k;for(let ye=0;ye<Q;ye++){let w=ye*L-C;J[v]=w*g,J[f]=Z*y,J[x]=U,c.push(J.x,J.y,J.z),J[v]=0,J[f]=0,J[x]=b>0?1:-1,h.push(J.x,J.y,J.z),u.push(ye/S),u.push(1-H/D),ie+=1}}for(let H=0;H<D;H++)for(let Z=0;Z<S;Z++){let ye=d+Z+Q*H,w=d+Z+Q*(H+1),A=d+(Z+1)+Q*(H+1),F=d+(Z+1)+Q*H;l.push(ye,w,F),l.push(w,A,F),G+=6}o.addGroup(p,G,M),p+=G,d+=ie}m("z","y","x",-1,-1,n,t,e,a,s,0),m("z","y","x",1,-1,n,t,-e,a,s,1),m("x","z","y",1,1,e,n,t,i,a,2),m("x","z","y",1,-1,e,n,-t,i,a,3),m("x","y","z",1,-1,e,t,n,i,s,4),m("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Ce(c,3)),this.setAttribute("normal",new Ce(h,3)),this.setAttribute("uv",new Ce(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function ms(r){let e={};for(let t in r){e[t]={};for(let n in r[t]){let i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Qt(r){let e={};for(let t=0;t<r.length;t++){let n=ms(r[t]);for(let i in n)e[i]=n[i]}return e}function Bp(r){return r.getRenderTarget()===null?r.outputColorSpace:Qe.workingColorSpace}var ki={clone:ms,merge:Qt},At=class extends on{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,this.fragmentShader=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ms(e.uniforms),this.uniformsGroups=function(t){let n=[];for(let i=0;i<t.length;i++)n.push(t[i].clone());return n}(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let s=this.uniforms[i].value;s&&s.isTexture?t.uniforms[i]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[i]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[i]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[i]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[i]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[i]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[i]={type:"m4",value:s.toArray()}:t.uniforms[i]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},la=class extends mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Le,this.projectionMatrix=new Le,this.projectionMatrixInverse=new Le,this.coordinateSystem=ds}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Tt=class extends la{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=2*ps*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(.5*ss*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return 2*ps*Math.atan(Math.tan(.5*ss*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(.5*ss*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Kr=-90,Nc=class extends mt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Tt(Kr,1,e,t);i.layers=this.layers,this.add(i);let s=new Tt(Kr,1,e,t);s.layers=this.layers,this.add(s);let a=new Tt(Kr,1,e,t);a.layers=this.layers,this.add(a);let o=new Tt(Kr,1,e,t);o.layers=this.layers,this.add(o);let l=new Tt(Kr,1,e,t);l.layers=this.layers,this.add(l);let c=new Tt(Kr,1,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,l]=t;for(let c of t)this.remove(c);if(e===ds)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else{if(e!==Ro)throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1)}for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Bo=class extends jt{constructor(e,t,n,i,s,a,o,l,c,h){super(e=e!==void 0?e:[],t=t!==void 0?t:ls,n,i,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Uc=class extends en{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(na("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===ur?st:Wn),this.texture=new Bo(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0&&t.generateMipmaps,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:rn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new ae(5,5,5),s=new At({name:"CubemapFromEquirect",uniforms:ms(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Vt,blending:0});s.uniforms.tEquirect.value=t;let a=new Se(i,s),o=t.minFilter;return t.minFilter===pr&&(t.minFilter=rn),new Nc(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}},ac=new E,Kf=new E,Jf=new ke,si=class{constructor(e=new E(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=ac.subVectors(n,t).cross(Kf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(ac),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Jf.getNormalMatrix(e),i=this.coplanarPoint(ac).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},sr=new an,so=new E,gs=class{constructor(e=new si,t=new si,n=new si,i=new si,s=new si,a=new si){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=2e3){let n=this.planes,i=e.elements,s=i[0],a=i[1],o=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],p=i[8],m=i[9],v=i[10],f=i[11],x=i[12],g=i[13],y=i[14],_=i[15];if(n[0].setComponents(l-s,d-c,f-p,_-x).normalize(),n[1].setComponents(l+s,d+c,f+p,_+x).normalize(),n[2].setComponents(l+a,d+h,f+m,_+g).normalize(),n[3].setComponents(l-a,d-h,f-m,_-g).normalize(),n[4].setComponents(l-o,d-u,f-v,_-y).normalize(),t===ds)n[5].setComponents(l+o,d+u,f+v,_+y).normalize();else{if(t!==Ro)throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);n[5].setComponents(o,u,v,y).normalize()}return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),sr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),sr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(sr)}intersectsSprite(e){return sr.center.set(0,0,0),sr.radius=.7071067811865476,sr.applyMatrix4(e.matrixWorld),this.intersectsSphere(sr)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(so.x=i.normal.x>0?e.max.x:e.min.x,so.y=i.normal.y>0?e.max.y:e.min.y,so.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(so)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function kp(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function $f(r,e){let t=e.isWebGL2,n=new WeakMap;return{get:function(i){return i.isInterleavedBufferAttribute&&(i=i.data),n.get(i)},remove:function(i){i.isInterleavedBufferAttribute&&(i=i.data);let s=n.get(i);s&&(r.deleteBuffer(s.buffer),n.delete(i))},update:function(i,s){if(i.isGLBufferAttribute){let o=n.get(i);return void((!o||o.version<i.version)&&n.set(i,{buffer:i.buffer,type:i.type,bytesPerElement:i.elementSize,version:i.version}))}i.isInterleavedBufferAttribute&&(i=i.data);let a=n.get(i);if(a===void 0)n.set(i,function(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=r.createBuffer(),p;if(r.bindBuffer(l,d),r.bufferData(l,c,h),o.onUploadCallback(),c instanceof Float32Array)p=r.FLOAT;else if(c instanceof Uint16Array)if(o.isFloat16BufferAttribute){if(!t)throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");p=r.HALF_FLOAT}else p=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=r.SHORT;else if(c instanceof Uint32Array)p=r.UNSIGNED_INT;else if(c instanceof Int32Array)p=r.INT;else if(c instanceof Int8Array)p=r.BYTE;else if(c instanceof Uint8Array)p=r.UNSIGNED_BYTE;else{if(!(c instanceof Uint8ClampedArray))throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);p=r.UNSIGNED_BYTE}return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}(i,s));else if(a.version<i.version){if(a.size!==i.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");(function(o,l,c){let h=l.array,u=l._updateRange,d=l.updateRanges;if(r.bindBuffer(c,o),u.count===-1&&d.length===0&&r.bufferSubData(c,0,h),d.length!==0){for(let p=0,m=d.length;p<m;p++){let v=d[p];t?r.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count):r.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h.subarray(v.start,v.start+v.count))}l.clearUpdateRanges()}u.count!==-1&&(t?r.bufferSubData(c,u.offset*h.BYTES_PER_ELEMENT,h,u.offset,u.count):r.bufferSubData(c,u.offset*h.BYTES_PER_ELEMENT,h.subarray(u.offset,u.offset+u.count)),u.count=-1),l.onUploadCallback()})(a.buffer,i,s),a.version=i.version}}}}var Rt=class r extends tt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=e/o,d=t/l,p=[],m=[],v=[],f=[];for(let x=0;x<h;x++){let g=x*d-a;for(let y=0;y<c;y++){let _=y*u-s;m.push(_,-g,0),v.push(0,0,1),f.push(y/o),f.push(1-x/l)}}for(let x=0;x<l;x++)for(let g=0;g<o;g++){let y=g+c*x,_=g+c*(x+1),R=g+1+c*(x+1),b=g+1+c*x;p.push(y,_,b),p.push(_,R,b)}this.setIndex(p),this.setAttribute("position",new Ce(m,3)),this.setAttribute("normal",new Ce(v,3)),this.setAttribute("uv",new Ce(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.widthSegments,e.heightSegments)}},Ue={alphahash_fragment:`#ifdef USE_ALPHAHASH
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
}`},ge={common:{diffuse:{value:new _e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new _e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new _e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new _e(16777215)},opacity:{value:1},center:{value:new re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},Vn={basic:{uniforms:Qt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:Ue.meshbasic_vert,fragmentShader:Ue.meshbasic_frag},lambert:{uniforms:Qt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new _e(0)}}]),vertexShader:Ue.meshlambert_vert,fragmentShader:Ue.meshlambert_frag},phong:{uniforms:Qt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new _e(0)},specular:{value:new _e(1118481)},shininess:{value:30}}]),vertexShader:Ue.meshphong_vert,fragmentShader:Ue.meshphong_frag},standard:{uniforms:Qt([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new _e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag},toon:{uniforms:Qt([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new _e(0)}}]),vertexShader:Ue.meshtoon_vert,fragmentShader:Ue.meshtoon_frag},matcap:{uniforms:Qt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:Ue.meshmatcap_vert,fragmentShader:Ue.meshmatcap_frag},points:{uniforms:Qt([ge.points,ge.fog]),vertexShader:Ue.points_vert,fragmentShader:Ue.points_frag},dashed:{uniforms:Qt([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ue.linedashed_vert,fragmentShader:Ue.linedashed_frag},depth:{uniforms:Qt([ge.common,ge.displacementmap]),vertexShader:Ue.depth_vert,fragmentShader:Ue.depth_frag},normal:{uniforms:Qt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:Ue.meshnormal_vert,fragmentShader:Ue.meshnormal_frag},sprite:{uniforms:Qt([ge.sprite,ge.fog]),vertexShader:Ue.sprite_vert,fragmentShader:Ue.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ue.background_vert,fragmentShader:Ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ue.backgroundCube_vert,fragmentShader:Ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ue.cube_vert,fragmentShader:Ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ue.equirect_vert,fragmentShader:Ue.equirect_frag},distanceRGBA:{uniforms:Qt([ge.common,ge.displacementmap,{referencePosition:{value:new E},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ue.distanceRGBA_vert,fragmentShader:Ue.distanceRGBA_frag},shadow:{uniforms:Qt([ge.lights,ge.fog,{color:{value:new _e(0)},opacity:{value:1}}]),vertexShader:Ue.shadow_vert,fragmentShader:Ue.shadow_frag}};Vn.physical={uniforms:Qt([Vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new _e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new _e(0)},specularColor:{value:new _e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag};var ao={r:0,b:0,g:0};function Qf(r,e,t,n,i,s,a){let o=new _e(0),l,c,h=s===!0?0:1,u=null,d=0,p=null;function m(v,f){v.getRGB(ao,Bp(r)),n.buffers.color.setClear(ao.r,ao.g,ao.b,f,a)}return{getClearColor:function(){return o},setClearColor:function(v,f=1){o.set(v),h=f,m(o,h)},getClearAlpha:function(){return h},setClearAlpha:function(v){h=v,m(o,h)},render:function(v,f){let x=!1,g=f.isScene===!0?f.background:null;g&&g.isTexture&&(g=(f.backgroundBlurriness>0?t:e).get(g)),g===null?m(o,h):g&&g.isColor&&(m(g,1),x=!0);let y=r.xr.getEnvironmentBlendMode();y==="additive"?n.buffers.color.setClear(0,0,0,1,a):y==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||x)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),g&&(g.isCubeTexture||g.mapping===nl)?(c===void 0&&(c=new Se(new ae(1,1,1),new At({name:"BackgroundCubeMaterial",uniforms:ms(Vn.backgroundCube.uniforms),vertexShader:Vn.backgroundCube.vertexShader,fragmentShader:Vn.backgroundCube.fragmentShader,side:Vt,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(_,R,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=g,c.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=Qe.getTransfer(g.colorSpace)!==ht,u===g&&d===g.version&&p===r.toneMapping||(c.material.needsUpdate=!0,u=g,d=g.version,p=r.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):g&&g.isTexture&&(l===void 0&&(l=new Se(new Rt(2,2),new At({name:"BackgroundMaterial",uniforms:ms(Vn.background.uniforms),vertexShader:Vn.background.vertexShader,fragmentShader:Vn.background.fragmentShader,side:qn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=g,l.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,l.material.toneMapped=Qe.getTransfer(g.colorSpace)!==ht,g.matrixAutoUpdate===!0&&g.updateMatrix(),l.material.uniforms.uvTransform.value.copy(g.matrix),u===g&&d===g.version&&p===r.toneMapping||(l.material.needsUpdate=!0,u=g,d=g.version,p=r.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}}}function em(r,e,t,n){let i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},l=p(null),c=l,h=!1;function u(R){return n.isWebGL2?r.bindVertexArray(R):s.bindVertexArrayOES(R)}function d(R){return n.isWebGL2?r.deleteVertexArray(R):s.deleteVertexArrayOES(R)}function p(R){let b=[],S=[],D=[];for(let M=0;M<i;M++)b[M]=0,S[M]=0,D[M]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:S,attributeDivisors:D,object:R,attributes:{},index:null}}function m(){let R=c.newAttributes;for(let b=0,S=R.length;b<S;b++)R[b]=0}function v(R){f(R,0)}function f(R,b){let S=c.newAttributes,D=c.enabledAttributes,M=c.attributeDivisors;S[R]=1,D[R]===0&&(r.enableVertexAttribArray(R),D[R]=1),M[R]!==b&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](R,b),M[R]=b)}function x(){let R=c.newAttributes,b=c.enabledAttributes;for(let S=0,D=b.length;S<D;S++)b[S]!==R[S]&&(r.disableVertexAttribArray(S),b[S]=0)}function g(R,b,S,D,M,L,N){N===!0?r.vertexAttribIPointer(R,b,S,M,L):r.vertexAttribPointer(R,b,S,D,M,L)}function y(){_(),h=!0,c!==l&&(c=l,u(c.object))}function _(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:function(R,b,S,D,M){let L=!1;if(a){let N=function(C,k,U){let Q=U.wireframe===!0,he=o[C.id];he===void 0&&(he={},o[C.id]=he);let ie=he[k.id];ie===void 0&&(ie={},he[k.id]=ie);let G=ie[Q];return G===void 0&&(G=p(n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()),ie[Q]=G),G}(D,S,b);c!==N&&(c=N,u(c.object)),L=function(C,k,U,Q){let he=c.attributes,ie=k.attributes,G=0,J=U.getAttributes();for(let H in J)if(J[H].location>=0){let Z=he[H],ye=ie[H];if(ye===void 0&&(H==="instanceMatrix"&&C.instanceMatrix&&(ye=C.instanceMatrix),H==="instanceColor"&&C.instanceColor&&(ye=C.instanceColor)),Z===void 0||Z.attribute!==ye||ye&&Z.data!==ye.data)return!0;G++}return c.attributesNum!==G||c.index!==Q}(R,D,S,M),L&&function(C,k,U,Q){let he={},ie=k.attributes,G=0,J=U.getAttributes();for(let H in J)if(J[H].location>=0){let Z=ie[H];Z===void 0&&(H==="instanceMatrix"&&C.instanceMatrix&&(Z=C.instanceMatrix),H==="instanceColor"&&C.instanceColor&&(Z=C.instanceColor));let ye={};ye.attribute=Z,Z&&Z.data&&(ye.data=Z.data),he[H]=ye,G++}c.attributes=he,c.attributesNum=G,c.index=Q}(R,D,S,M)}else{let N=b.wireframe===!0;c.geometry===D.id&&c.program===S.id&&c.wireframe===N||(c.geometry=D.id,c.program=S.id,c.wireframe=N,L=!0)}M!==null&&t.update(M,r.ELEMENT_ARRAY_BUFFER),(L||h)&&(h=!1,function(N,C,k,U){if(n.isWebGL2===!1&&(N.isInstancedMesh||U.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;m();let Q=U.attributes,he=k.getAttributes(),ie=C.defaultAttributeValues;for(let G in he){let J=he[G];if(J.location>=0){let H=Q[G];if(H===void 0&&(G==="instanceMatrix"&&N.instanceMatrix&&(H=N.instanceMatrix),G==="instanceColor"&&N.instanceColor&&(H=N.instanceColor)),H!==void 0){let Z=H.normalized,ye=H.itemSize,w=t.get(H);if(w===void 0)continue;let A=w.buffer,F=w.type,K=w.bytesPerElement,I=n.isWebGL2===!0&&(F===r.INT||F===r.UNSIGNED_INT||H.gpuType===Tp);if(H.isInterleavedBufferAttribute){let Y=H.data,O=Y.stride,B=H.offset;if(Y.isInstancedInterleavedBuffer){for(let z=0;z<J.locationSize;z++)f(J.location+z,Y.meshPerAttribute);N.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let z=0;z<J.locationSize;z++)v(J.location+z);r.bindBuffer(r.ARRAY_BUFFER,A);for(let z=0;z<J.locationSize;z++)g(J.location+z,ye/J.locationSize,F,Z,O*K,(B+ye/J.locationSize*z)*K,I)}else{if(H.isInstancedBufferAttribute){for(let Y=0;Y<J.locationSize;Y++)f(J.location+Y,H.meshPerAttribute);N.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let Y=0;Y<J.locationSize;Y++)v(J.location+Y);r.bindBuffer(r.ARRAY_BUFFER,A);for(let Y=0;Y<J.locationSize;Y++)g(J.location+Y,ye/J.locationSize,F,Z,ye*K,ye/J.locationSize*Y*K,I)}}else if(ie!==void 0){let Z=ie[G];if(Z!==void 0)switch(Z.length){case 2:r.vertexAttrib2fv(J.location,Z);break;case 3:r.vertexAttrib3fv(J.location,Z);break;case 4:r.vertexAttrib4fv(J.location,Z);break;default:r.vertexAttrib1fv(J.location,Z)}}}}x()}(R,b,S,D),M!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(M).buffer))},reset:y,resetDefaultState:_,dispose:function(){y();for(let R in o){let b=o[R];for(let S in b){let D=b[S];for(let M in D)d(D[M].object),delete D[M];delete b[S]}delete o[R]}},releaseStatesOfGeometry:function(R){if(o[R.id]===void 0)return;let b=o[R.id];for(let S in b){let D=b[S];for(let M in D)d(D[M].object),delete D[M];delete b[S]}delete o[R.id]},releaseStatesOfProgram:function(R){for(let b in o){let S=o[b];if(S[R.id]===void 0)continue;let D=S[R.id];for(let M in D)d(D[M].object),delete D[M];delete S[R.id]}},initAttributes:m,enableAttribute:v,disableUnusedAttributes:x}}function tm(r,e,t,n){let i=n.isWebGL2,s;this.setMode=function(a){s=a},this.render=function(a,o){r.drawArrays(s,a,o),t.update(o,s,1)},this.renderInstances=function(a,o,l){if(l===0)return;let c,h;if(i)c=r,h="drawArraysInstanced";else if(c=e.get("ANGLE_instanced_arrays"),h="drawArraysInstancedANGLE",c===null)return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");c[h](s,a,o,l),t.update(o,s,l)},this.renderMultiDraw=function(a,o,l){if(l===0)return;let c=e.get("WEBGL_multi_draw");if(c===null)for(let h=0;h<l;h++)this.render(a[h],o[h]);else{c.multiDrawArraysWEBGL(s,a,0,o,0,l);let h=0;for(let u=0;u<l;u++)h+=o[u];t.update(h,s,1)}}}function nm(r,e,t){let n;function i(_){if(_==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let s=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",o=i(a);o!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",o,"instead."),a=o);let l=s||e.has("WEBGL_draw_buffers"),c=t.logarithmicDepthBuffer===!0,h=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),u=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=r.getParameter(r.MAX_TEXTURE_SIZE),p=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),m=r.getParameter(r.MAX_VERTEX_ATTRIBS),v=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),f=r.getParameter(r.MAX_VARYING_VECTORS),x=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),g=u>0,y=s||e.has("OES_texture_float");return{isWebGL2:s,drawBuffers:l,getMaxAnisotropy:function(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let _=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n},getMaxPrecision:i,precision:a,logarithmicDepthBuffer:c,maxTextures:h,maxVertexTextures:u,maxTextureSize:d,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:v,maxVaryings:f,maxFragmentUniforms:x,vertexTextures:g,floatFragmentTextures:y,floatVertexTextures:g&&y,maxSamples:s?r.getParameter(r.MAX_SAMPLES):0}}function im(r){let e=this,t=null,n=0,i=!1,s=!1,a=new si,o=new ke,l={value:null,needsUpdate:!1};function c(h,u,d,p){let m=h!==null?h.length:0,v=null;if(m!==0){if(v=l.value,p!==!0||v===null){let f=d+4*m,x=u.matrixWorldInverse;o.getNormalMatrix(x),(v===null||v.length<f)&&(v=new Float32Array(f));for(let g=0,y=d;g!==m;++g,y+=4)a.copy(h[g]).applyMatrix4(x,o),a.normal.toArray(v,y),v[y+3]=a.constant}l.value=v,l.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,v}this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){let d=h.length!==0||u||n!==0||i;return i=u,n=h.length,d},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,u){t=c(h,u,0)},this.setState=function(h,u,d){let p=h.clippingPlanes,m=h.clipIntersection,v=h.clipShadows,f=r.get(h);if(!i||p===null||p.length===0||s&&!v)s?c(null):function(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}();else{let x=s?0:n,g=4*x,y=f.clippingState||null;l.value=y,y=c(p,u,g,d);for(let _=0;_!==g;++_)y[_]=t[_];f.clippingState=y,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=x}}}function rm(r){let e=new WeakMap;function t(i,s){return s===wc?i.mapping=ls:s===Ac&&(i.mapping=cs),i}function n(i){let s=i.target;s.removeEventListener("dispose",n);let a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(i){if(i&&i.isTexture){let s=i.mapping;if(s===wc||s===Ac){if(e.has(i))return t(e.get(i).texture,i.mapping);{let a=i.image;if(a&&a.height>0){let o=new Uc(a.height/2);return o.fromEquirectangularTexture(r,i),e.set(i,o),i.addEventListener("dispose",n),t(o.texture,i.mapping)}return null}}}return i},dispose:function(){e=new WeakMap}}}var Li=class extends la{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},wd=[.125,.215,.35,.446,.526,.582],qs=20,oc=new Li,Ad=new _e,lc=null,cc=0,hc=0,ar=(1+Math.sqrt(5))/2,Jr=1/ar,Rd=[new E(1,1,1),new E(-1,1,1),new E(1,1,-1),new E(-1,1,-1),new E(0,ar,Jr),new E(0,ar,-Jr),new E(Jr,0,ar),new E(-Jr,0,ar),new E(ar,Jr,0),new E(-ar,Jr,0)],vs=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){lc=this._renderer.getRenderTarget(),cc=this._renderer.getActiveCubeFace(),hc=this._renderer.getActiveMipmapLevel(),this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ld(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Pd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(lc,cc,hc),e.scissorTest=!1,oo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ls||e.mapping===cs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),lc=this._renderer.getRenderTarget(),cc=this._renderer.getActiveCubeFace(),hc=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:rn,minFilter:rn,generateMipmaps:!1,type:Bn,format:On,colorSpace:Bt,depthBuffer:!1},i=Cd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Cd(e,t,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=function(a){let o=[],l=[],c=[],h=a,u=a-4+1+wd.length;for(let d=0;d<u;d++){let p=Math.pow(2,h);l.push(p);let m=1/p;d>a-4?m=wd[d-a+4-1]:d===0&&(m=0),c.push(m);let v=1/(p-2),f=-v,x=1+v,g=[f,f,x,f,x,x,f,f,x,x,f,x],y=6,_=6,R=3,b=2,S=1,D=new Float32Array(R*_*y),M=new Float32Array(b*_*y),L=new Float32Array(S*_*y);for(let C=0;C<y;C++){let k=C%3*2/3-1,U=C>2?0:-1,Q=[k,U,0,k+2/3,U,0,k+2/3,U+1,0,k,U,0,k+2/3,U+1,0,k,U+1,0];D.set(Q,R*_*C),M.set(g,b*_*C);let he=[C,C,C,C,C,C];L.set(he,S*_*C)}let N=new tt;N.setAttribute("position",new dt(D,R)),N.setAttribute("uv",new dt(M,b)),N.setAttribute("faceIndex",new dt(L,S)),o.push(N),h>4&&h--}return{lodPlanes:o,sizeLods:l,sigmas:c}}(s)),this._blurMaterial=function(a,o,l){let c=new Float32Array(qs),h=new E(0,1,0);return new At({name:"SphericalGaussianBlur",defines:{n:qs,CUBEUV_TEXEL_WIDTH:1/o,CUBEUV_TEXEL_HEIGHT:1/l,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:c},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:h}},vertexShader:Rh(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}(s,e,t)}return i}_compileMaterial(e){let t=new Se(this._lodPlanes[0],e);this._renderer.compile(t,oc)}_sceneToCubeUV(e,t,n,i){let s=new Tt(90,1,t,n),a=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],l=this._renderer,c=l.autoClear,h=l.toneMapping;l.getClearColor(Ad),l.toneMapping=Ri,l.autoClear=!1;let u=new et({name:"PMREM.Background",side:Vt,depthWrite:!1,depthTest:!1}),d=new Se(new ae,u),p=!1,m=e.background;m?m.isColor&&(u.color.copy(m),e.background=null,p=!0):(u.color.copy(Ad),p=!0);for(let v=0;v<6;v++){let f=v%3;f===0?(s.up.set(0,a[v],0),s.lookAt(o[v],0,0)):f===1?(s.up.set(0,0,a[v]),s.lookAt(0,o[v],0)):(s.up.set(0,a[v],0),s.lookAt(0,0,o[v]));let x=this._cubeSize;oo(i,f*x,v>2?x:0,x,x),l.setRenderTarget(i),p&&l.render(d,s),l.render(e,s)}d.geometry.dispose(),d.material.dispose(),l.toneMapping=h,l.autoClear=c,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===ls||e.mapping===cs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ld()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Pd());let s=i?this._cubemapMaterial:this._equirectMaterial,a=new Se(this._lodPlanes[0],s);s.uniforms.envMap.value=e;let o=this._cubeSize;oo(t,0,0,3*o,2*o),n.setRenderTarget(t),n.render(a,oc)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){let s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=Rd[(i-1)%Rd.length];this._blur(e,i-1,i,s,a)}t.autoClear=n}_blur(e,t,n,i,s){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=new Se(this._lodPlanes[i],c),u=c.uniforms,d=this._sizeLods[n]-1,p=isFinite(s)?Math.PI/(2*d):2*Math.PI/39,m=s/p,v=isFinite(s)?1+Math.floor(3*m):qs;v>qs&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${v} samples when the maximum is set to 20`);let f=[],x=0;for(let _=0;_<qs;++_){let R=_/m,b=Math.exp(-R*R/2);f.push(b),_===0?x+=b:_<v&&(x+=2*b)}for(let _=0;_<f.length;_++)f[_]=f[_]/x;u.envMap.value=e.texture,u.samples.value=v,u.weights.value=f,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:g}=this;u.dTheta.value=p,u.mipInt.value=g-n;let y=this._sizeLods[i];oo(t,3*y*(i>g-4?i-g+4:0),4*(this._cubeSize-y),3*y,2*y),l.setRenderTarget(t),l.render(h,oc)}};function Cd(r,e,t){let n=new en(r,e,t);return n.texture.mapping=nl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function oo(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function Pd(){return new At({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Rh(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Ld(){return new At({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Rh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Rh(){return`

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
	`}function sm(r){let e=new WeakMap,t=null;function n(i){let s=i.target;s.removeEventListener("dispose",n);let a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(i){if(i&&i.isTexture){let s=i.mapping,a=s===wc||s===Ac,o=s===ls||s===cs;if(a||o){if(i.isRenderTargetTexture&&i.needsPMREMUpdate===!0){i.needsPMREMUpdate=!1;let l=e.get(i);return t===null&&(t=new vs(r)),l=a?t.fromEquirectangular(i,l):t.fromCubemap(i,l),e.set(i,l),l.texture}if(e.has(i))return e.get(i).texture;{let l=i.image;if(a&&l&&l.height>0||o&&l&&function(c){let h=0,u=6;for(let d=0;d<u;d++)c[d]!==void 0&&h++;return h===u}(l)){t===null&&(t=new vs(r));let c=a?t.fromEquirectangular(i):t.fromCubemap(i);return e.set(i,c),i.addEventListener("dispose",n),c.texture}return null}}}return i},dispose:function(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}}}function am(r){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function om(r,e,t,n){let i={},s=new WeakMap;function a(l){let c=l.target;c.index!==null&&e.remove(c.index);for(let u in c.attributes)e.remove(c.attributes[u]);for(let u in c.morphAttributes){let d=c.morphAttributes[u];for(let p=0,m=d.length;p<m;p++)e.remove(d[p])}c.removeEventListener("dispose",a),delete i[c.id];let h=s.get(c);h&&(e.remove(h),s.delete(c)),n.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,t.memory.geometries--}function o(l){let c=[],h=l.index,u=l.attributes.position,d=0;if(h!==null){let v=h.array;d=h.version;for(let f=0,x=v.length;f<x;f+=3){let g=v[f+0],y=v[f+1],_=v[f+2];c.push(g,y,y,_,_,g)}}else{if(u===void 0)return;{let v=u.array;d=u.version;for(let f=0,x=v.length/3-1;f<x;f+=3){let g=f+0,y=f+1,_=f+2;c.push(g,y,y,_,_,g)}}}let p=new(Up(c)?Oo:Uo)(c,1);p.version=d;let m=s.get(l);m&&e.remove(m),s.set(l,p)}return{get:function(l,c){return i[c.id]===!0||(c.addEventListener("dispose",a),i[c.id]=!0,t.memory.geometries++),c},update:function(l){let c=l.attributes;for(let u in c)e.update(c[u],r.ARRAY_BUFFER);let h=l.morphAttributes;for(let u in h){let d=h[u];for(let p=0,m=d.length;p<m;p++)e.update(d[p],r.ARRAY_BUFFER)}},getWireframeAttribute:function(l){let c=s.get(l);if(c){let h=l.index;h!==null&&c.version<h.version&&o(l)}else o(l);return s.get(l)}}}function lm(r,e,t,n){let i=n.isWebGL2,s,a,o;this.setMode=function(l){s=l},this.setIndex=function(l){a=l.type,o=l.bytesPerElement},this.render=function(l,c){r.drawElements(s,c,a,l*o),t.update(c,s,1)},this.renderInstances=function(l,c,h){if(h===0)return;let u,d;if(i)u=r,d="drawElementsInstanced";else if(u=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",u===null)return void console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");u[d](s,c,a,l*o,h),t.update(c,s,h)},this.renderMultiDraw=function(l,c,h){if(h===0)return;let u=e.get("WEBGL_multi_draw");if(u===null)for(let d=0;d<h;d++)this.render(l[d]/o,c[d]);else{u.multiDrawElementsWEBGL(s,c,0,a,l,0,h);let d=0;for(let p=0;p<h;p++)d+=c[p];t.update(d,s,1)}}}function cm(r){let e={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:e,programs:null,autoReset:!0,reset:function(){e.calls=0,e.triangles=0,e.points=0,e.lines=0},update:function(t,n,i){switch(e.calls++,n){case r.TRIANGLES:e.triangles+=i*(t/3);break;case r.LINES:e.lines+=i*(t/2);break;case r.LINE_STRIP:e.lines+=i*(t-1);break;case r.LINE_LOOP:e.lines+=i*t;break;case r.POINTS:e.points+=i*t;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",n)}}}}function hm(r,e){return r[0]-e[0]}function um(r,e){return Math.abs(e[1])-Math.abs(r[1])}function dm(r,e,t){let n={},i=new Float32Array(8),s=new WeakMap,a=new ut,o=[];for(let l=0;l<8;l++)o[l]=[l,0];return{update:function(l,c,h){let u=l.morphTargetInfluences;if(e.isWebGL2===!0){let d=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,p=d!==void 0?d.length:0,m=s.get(c);if(m===void 0||m.count!==p){let k=function(){N.dispose(),s.delete(c),c.removeEventListener("dispose",k)};m!==void 0&&m.texture.dispose();let x=c.morphAttributes.position!==void 0,g=c.morphAttributes.normal!==void 0,y=c.morphAttributes.color!==void 0,_=c.morphAttributes.position||[],R=c.morphAttributes.normal||[],b=c.morphAttributes.color||[],S=0;x===!0&&(S=1),g===!0&&(S=2),y===!0&&(S=3);let D=c.attributes.position.count*S,M=1;D>e.maxTextureSize&&(M=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);let L=new Float32Array(D*M*4*p),N=new Io(L,D,M,p);N.type=ai,N.needsUpdate=!0;let C=4*S;for(let U=0;U<p;U++){let Q=_[U],he=R[U],ie=b[U],G=D*M*4*U;for(let J=0;J<Q.count;J++){let H=J*C;x===!0&&(a.fromBufferAttribute(Q,J),L[G+H+0]=a.x,L[G+H+1]=a.y,L[G+H+2]=a.z,L[G+H+3]=0),g===!0&&(a.fromBufferAttribute(he,J),L[G+H+4]=a.x,L[G+H+5]=a.y,L[G+H+6]=a.z,L[G+H+7]=0),y===!0&&(a.fromBufferAttribute(ie,J),L[G+H+8]=a.x,L[G+H+9]=a.y,L[G+H+10]=a.z,L[G+H+11]=ie.itemSize===4?a.w:1)}}m={count:p,texture:N,size:new re(D,M)},s.set(c,m),c.addEventListener("dispose",k)}let v=0;for(let x=0;x<u.length;x++)v+=u[x];let f=c.morphTargetsRelative?1:1-v;h.getUniforms().setValue(r,"morphTargetBaseInfluence",f),h.getUniforms().setValue(r,"morphTargetInfluences",u),h.getUniforms().setValue(r,"morphTargetsTexture",m.texture,t),h.getUniforms().setValue(r,"morphTargetsTextureSize",m.size)}else{let d=u===void 0?0:u.length,p=n[c.id];if(p===void 0||p.length!==d){p=[];for(let g=0;g<d;g++)p[g]=[g,0];n[c.id]=p}for(let g=0;g<d;g++){let y=p[g];y[0]=g,y[1]=u[g]}p.sort(um);for(let g=0;g<8;g++)g<d&&p[g][1]?(o[g][0]=p[g][0],o[g][1]=p[g][1]):(o[g][0]=Number.MAX_SAFE_INTEGER,o[g][1]=0);o.sort(hm);let m=c.morphAttributes.position,v=c.morphAttributes.normal,f=0;for(let g=0;g<8;g++){let y=o[g],_=y[0],R=y[1];_!==Number.MAX_SAFE_INTEGER&&R?(m&&c.getAttribute("morphTarget"+g)!==m[_]&&c.setAttribute("morphTarget"+g,m[_]),v&&c.getAttribute("morphNormal"+g)!==v[_]&&c.setAttribute("morphNormal"+g,v[_]),i[g]=R,f+=R):(m&&c.hasAttribute("morphTarget"+g)===!0&&c.deleteAttribute("morphTarget"+g),v&&c.hasAttribute("morphNormal"+g)===!0&&c.deleteAttribute("morphNormal"+g),i[g]=0)}let x=c.morphTargetsRelative?1:1-f;h.getUniforms().setValue(r,"morphTargetBaseInfluence",x),h.getUniforms().setValue(r,"morphTargetInfluences",i)}}}}function pm(r,e,t,n){let i=new WeakMap;function s(a){let o=a.target;o.removeEventListener("dispose",s),t.remove(o.instanceMatrix),o.instanceColor!==null&&t.remove(o.instanceColor)}return{update:function(a){let o=n.render.frame,l=a.geometry,c=e.get(a,l);if(i.get(c)!==o&&(e.update(c),i.set(c,o)),a.isInstancedMesh&&(a.hasEventListener("dispose",s)===!1&&a.addEventListener("dispose",s),i.get(a)!==o&&(t.update(a.instanceMatrix,r.ARRAY_BUFFER),a.instanceColor!==null&&t.update(a.instanceColor,r.ARRAY_BUFFER),i.set(a,o))),a.isSkinnedMesh){let h=a.skeleton;i.get(h)!==o&&(h.update(),i.set(h,o))}return c},dispose:function(){i=new WeakMap}}}var ko=class extends jt{constructor(e,t,n,i,s,a,o,l,c,h){if((h=h!==void 0?h:hr)!==hr&&h!==hs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===hr&&(n=Ti),n===void 0&&h===hs&&(n=cr),super(null,i,s,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Xt,this.minFilter=l!==void 0?l:Xt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Fp=new jt,Hp=new ko(1,1);Hp.compareFunction=515;var zp=new Io,Gp=new Dc,Vp=new Bo,Id=[],Dd=[],Nd=new Float32Array(16),Ud=new Float32Array(9),Od=new Float32Array(4);function Rs(r,e,t){let n=r[0];if(n<=0||n>0)return r;let i=e*t,s=Id[i];if(s===void 0&&(s=new Float32Array(i),Id[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function kt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Ft(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function sl(r,e){let t=Dd[e];t===void 0&&(t=new Int32Array(e),Dd[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function fm(r,e){let t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function mm(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;r.uniform2fv(this.addr,e),Ft(t,e)}}function gm(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)t[0]===e.r&&t[1]===e.g&&t[2]===e.b||(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(kt(t,e))return;r.uniform3fv(this.addr,e),Ft(t,e)}}function vm(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;r.uniform4fv(this.addr,e),Ft(t,e)}}function ym(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Ft(t,e)}else{if(kt(t,n))return;Od.set(n),r.uniformMatrix2fv(this.addr,!1,Od),Ft(t,n)}}function xm(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Ft(t,e)}else{if(kt(t,n))return;Ud.set(n),r.uniformMatrix3fv(this.addr,!1,Ud),Ft(t,n)}}function _m(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Ft(t,e)}else{if(kt(t,n))return;Nd.set(n),r.uniformMatrix4fv(this.addr,!1,Nd),Ft(t,n)}}function Mm(r,e){let t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function bm(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;r.uniform2iv(this.addr,e),Ft(t,e)}}function Em(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;r.uniform3iv(this.addr,e),Ft(t,e)}}function Sm(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;r.uniform4iv(this.addr,e),Ft(t,e)}}function Tm(r,e){let t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function wm(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;r.uniform2uiv(this.addr,e),Ft(t,e)}}function Am(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;r.uniform3uiv(this.addr,e),Ft(t,e)}}function Rm(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;r.uniform4uiv(this.addr,e),Ft(t,e)}}function Cm(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s=this.type===r.SAMPLER_2D_SHADOW?Hp:Fp;t.setTexture2D(e||s,i)}function Pm(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Gp,i)}function Lm(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Vp,i)}function Im(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||zp,i)}function Dm(r,e){r.uniform1fv(this.addr,e)}function Nm(r,e){let t=Rs(e,this.size,2);r.uniform2fv(this.addr,t)}function Um(r,e){let t=Rs(e,this.size,3);r.uniform3fv(this.addr,t)}function Om(r,e){let t=Rs(e,this.size,4);r.uniform4fv(this.addr,t)}function Bm(r,e){let t=Rs(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function km(r,e){let t=Rs(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Fm(r,e){let t=Rs(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Hm(r,e){r.uniform1iv(this.addr,e)}function zm(r,e){r.uniform2iv(this.addr,e)}function Gm(r,e){r.uniform3iv(this.addr,e)}function Vm(r,e){r.uniform4iv(this.addr,e)}function Wm(r,e){r.uniform1uiv(this.addr,e)}function Xm(r,e){r.uniform2uiv(this.addr,e)}function jm(r,e){r.uniform3uiv(this.addr,e)}function qm(r,e){r.uniform4uiv(this.addr,e)}function Ym(r,e,t){let n=this.cache,i=e.length,s=sl(t,i);kt(n,s)||(r.uniform1iv(this.addr,s),Ft(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Fp,s[a])}function Zm(r,e,t){let n=this.cache,i=e.length,s=sl(t,i);kt(n,s)||(r.uniform1iv(this.addr,s),Ft(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Gp,s[a])}function Km(r,e,t){let n=this.cache,i=e.length,s=sl(t,i);kt(n,s)||(r.uniform1iv(this.addr,s),Ft(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Vp,s[a])}function Jm(r,e,t){let n=this.cache,i=e.length,s=sl(t,i);kt(n,s)||(r.uniform1iv(this.addr,s),Ft(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||zp,s[a])}var Oc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=function(i){switch(i){case 5126:return fm;case 35664:return mm;case 35665:return gm;case 35666:return vm;case 35674:return ym;case 35675:return xm;case 35676:return _m;case 5124:case 35670:return Mm;case 35667:case 35671:return bm;case 35668:case 35672:return Em;case 35669:case 35673:return Sm;case 5125:return Tm;case 36294:return wm;case 36295:return Am;case 36296:return Rm;case 35678:case 36198:case 36298:case 36306:case 35682:return Cm;case 35679:case 36299:case 36307:return Pm;case 35680:case 36300:case 36308:case 36293:return Lm;case 36289:case 36303:case 36311:case 36292:return Im}}(t.type)}},Bc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=function(i){switch(i){case 5126:return Dm;case 35664:return Nm;case 35665:return Um;case 35666:return Om;case 35674:return Bm;case 35675:return km;case 35676:return Fm;case 5124:case 35670:return Hm;case 35667:case 35671:return zm;case 35668:case 35672:return Gm;case 35669:case 35673:return Vm;case 5125:return Wm;case 36294:return Xm;case 36295:return jm;case 36296:return qm;case 35678:case 36198:case 36298:case 36306:case 35682:return Ym;case 35679:case 36299:case 36307:return Zm;case 35680:case 36300:case 36308:case 36293:return Km;case 36289:case 36303:case 36311:case 36292:return Jm}}(t.type)}},kc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let s=0,a=i.length;s!==a;++s){let o=i[s];o.setValue(e,t[o.id],n)}}},uc=/(\w+)(\])?(\[|\.)?/g;function Bd(r,e){r.seq.push(e),r.map[e.id]=e}function $m(r,e,t){let n=r.name,i=n.length;for(uc.lastIndex=0;;){let s=uc.exec(n),a=uc.lastIndex,o=s[1],l=s[2]==="]",c=s[3];if(l&&(o|=0),c===void 0||c==="["&&a+2===i){Bd(t,c===void 0?new Oc(o,r,e):new Bc(o,r,e));break}{let h=t.map[o];h===void 0&&(h=new kc(o),Bd(t,h)),t=h}}}var os=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let s=e.getActiveUniform(t,i);$m(s,e.getUniformLocation(t,s.name),this)}}setValue(e,t,n,i){let s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){let o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,s=e.length;i!==s;++i){let a=e[i];a.id in t&&n.push(a)}return n}};function kd(r,e,t){let n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}var Qm=37297,eg=0;function Fd(r,e,t){let n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";let s=/ERROR: 0:(\d+)/.exec(i);if(s){let a=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+function(o,l){let c=o.split(`
`),h=[],u=Math.max(l-6,0),d=Math.min(l+6,c.length);for(let p=u;p<d;p++){let m=p+1;h.push(`${m===l?">":" "} ${m}: ${c[p]}`)}return h.join(`
`)}(r.getShaderSource(e),a)}return i}function tg(r,e){let t=function(n){let i=Qe.getPrimaries(Qe.workingColorSpace),s=Qe.getPrimaries(n),a;switch(i===s?a="":i===Ao&&s===wo?a="LinearDisplayP3ToLinearSRGB":i===wo&&s===Ao&&(a="LinearSRGBToLinearDisplayP3"),n){case Bt:case rl:return[a,"LinearTransferOETF"];case st:case Ah:return[a,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[a,"LinearTransferOETF"]}}(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function ng(r,e){let t;switch(e){case Mh:t="Linear";break;case bh:t="Reinhard";break;case Eh:t="OptimizedCineon";break;case xa:t="ACESFilmic";break;case Sh:t="AgX";break;case Df:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function $r(r){return r!==""}function Hd(r,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function zd(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var ig=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fc(r){return r.replace(ig,sg)}var rg=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function sg(r,e){let t=Ue[e];if(t===void 0){let n=rg.get(e);if(n===void 0)throw new Error("Can not resolve #include <"+e+">");t=Ue[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n)}return Fc(t)}var ag=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gd(r){return r.replace(ag,og)}function og(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Vd(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function lg(r,e,t,n){let i=r.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,l=function(C){let k="SHADOWMAP_TYPE_BASIC";return C.shadowMapType===Mp?k="SHADOWMAP_TYPE_PCF":C.shadowMapType===_h?k="SHADOWMAP_TYPE_PCF_SOFT":C.shadowMapType===ri&&(k="SHADOWMAP_TYPE_VSM"),k}(t),c=function(C){let k="ENVMAP_TYPE_CUBE";if(C.envMap)switch(C.envMapMode){case ls:case cs:k="ENVMAP_TYPE_CUBE";break;case nl:k="ENVMAP_TYPE_CUBE_UV"}return k}(t),h=function(C){let k="ENVMAP_MODE_REFLECTION";return C.envMap&&C.envMapMode===cs&&(k="ENVMAP_MODE_REFRACTION"),k}(t),u=function(C){let k="ENVMAP_BLENDING_NONE";if(C.envMap)switch(C.combine){case Ep:k="ENVMAP_BLENDING_MULTIPLY";break;case Lf:k="ENVMAP_BLENDING_MIX";break;case If:k="ENVMAP_BLENDING_ADD"}return k}(t),d=function(C){let k=C.envMapCubeUVHeight;if(k===null)return null;let U=Math.log2(k)-2,Q=1/k;return{texelWidth:1/(3*Math.max(Math.pow(2,U),112)),texelHeight:Q,maxMip:U}}(t),p=t.isWebGL2?"":function(C){return[C.extensionDerivatives||C.envMapCubeUVHeight||C.bumpMap||C.normalMapTangentSpace||C.clearcoatNormalMap||C.flatShading||C.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(C.extensionFragDepth||C.logarithmicDepthBuffer)&&C.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",C.extensionDrawBuffers&&C.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(C.extensionShaderTextureLOD||C.envMap||C.transmission)&&C.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter($r).join(`
`)}(t),m=function(C){return[C.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter($r).join(`
`)}(t),v=function(C){let k=[];for(let U in C){let Q=C[U];Q!==!1&&k.push("#define "+U+" "+Q)}return k.join(`
`)}(s),f=i.createProgram(),x,g,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter($r).join(`
`),x.length>0&&(x+=`
`),g=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter($r).join(`
`),g.length>0&&(g+=`
`)):(x=[Vd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($r).join(`
`),g=[p,Vd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ri?"#define TONE_MAPPING":"",t.toneMapping!==Ri?Ue.tonemapping_pars_fragment:"",t.toneMapping!==Ri?ng("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ue.colorspace_pars_fragment,tg("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter($r).join(`
`)),a=Fc(a),a=Hd(a,t),a=zd(a,t),o=Fc(o),o=Hd(o,t),o=zd(o,t),a=Gd(a),o=Gd(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,x=[m,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,g=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===ld?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ld?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let _=y+x+a,R=y+g+o,b=kd(i,i.VERTEX_SHADER,_),S=kd(i,i.FRAGMENT_SHADER,R);function D(C){if(r.debug.checkShaderErrors){let k=i.getProgramInfoLog(f).trim(),U=i.getShaderInfoLog(b).trim(),Q=i.getShaderInfoLog(S).trim(),he=!0,ie=!0;if(i.getProgramParameter(f,i.LINK_STATUS)===!1)if(he=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,f,b,S);else{let G=Fd(i,b,"vertex"),J=Fd(i,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(f,i.VALIDATE_STATUS)+`

Program Info Log: `+k+`
`+G+`
`+J)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):U!==""&&Q!==""||(ie=!1);ie&&(C.diagnostics={runnable:he,programLog:k,vertexShader:{log:U,prefix:x},fragmentShader:{log:Q,prefix:g}})}i.deleteShader(b),i.deleteShader(S),M=new os(i,f),L=function(k,U){let Q={},he=k.getProgramParameter(U,k.ACTIVE_ATTRIBUTES);for(let ie=0;ie<he;ie++){let G=k.getActiveAttrib(U,ie),J=G.name,H=1;G.type===k.FLOAT_MAT2&&(H=2),G.type===k.FLOAT_MAT3&&(H=3),G.type===k.FLOAT_MAT4&&(H=4),Q[J]={type:G.type,location:k.getAttribLocation(U,J),locationSize:H}}return Q}(i,f)}let M,L;i.attachShader(f,b),i.attachShader(f,S),t.index0AttributeName!==void 0?i.bindAttribLocation(f,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(f,0,"position"),i.linkProgram(f),this.getUniforms=function(){return M===void 0&&D(this),M},this.getAttributes=function(){return L===void 0&&D(this),L};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=i.getProgramParameter(f,Qm)),N},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(f),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=eg++,this.cacheKey=e,this.usedTimes=1,this.program=f,this.vertexShader=b,this.fragmentShader=S,this}var cg=0,Hc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new zc(e),t.set(e,n)),n}},zc=class{constructor(e){this.id=cg++,this.code=e,this.usedTimes=0}};function hg(r,e,t,n,i,s,a){let o=new No,l=new Hc,c=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,d=i.vertexTextures,p=i.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(f){return f===0?"uv":`uv${f}`}return{getParameters:function(f,x,g,y,_){let R=y.fog,b=_.geometry,S=f.isMeshStandardMaterial?y.environment:null,D=(f.isMeshStandardMaterial?t:e).get(f.envMap||S),M=D&&D.mapping===nl?D.image.height:null,L=m[f.type];f.precision!==null&&(p=i.getMaxPrecision(f.precision),p!==f.precision&&console.warn("THREE.WebGLProgram.getParameters:",f.precision,"not supported, using",p,"instead."));let N=b.morphAttributes.position||b.morphAttributes.normal||b.morphAttributes.color,C=N!==void 0?N.length:0,k,U,Q,he,ie=0;if(b.morphAttributes.position!==void 0&&(ie=1),b.morphAttributes.normal!==void 0&&(ie=2),b.morphAttributes.color!==void 0&&(ie=3),L){let Et=Vn[L];k=Et.vertexShader,U=Et.fragmentShader}else k=f.vertexShader,U=f.fragmentShader,l.update(f),Q=l.getVertexShaderID(f),he=l.getFragmentShaderID(f);let G=r.getRenderTarget(),J=_.isInstancedMesh===!0,H=_.isBatchedMesh===!0,Z=!!f.map,ye=!!f.matcap,w=!!D,A=!!f.aoMap,F=!!f.lightMap,K=!!f.bumpMap,I=!!f.normalMap,Y=!!f.displacementMap,O=!!f.emissiveMap,B=!!f.metalnessMap,z=!!f.roughnessMap,te=f.anisotropy>0,ee=f.clearcoat>0,T=f.iridescence>0,se=f.sheen>0,V=f.transmission>0,X=te&&!!f.anisotropyMap,oe=ee&&!!f.clearcoatMap,xe=ee&&!!f.clearcoatNormalMap,ue=ee&&!!f.clearcoatRoughnessMap,Ee=T&&!!f.iridescenceMap,Pe=T&&!!f.iridescenceThicknessMap,W=se&&!!f.sheenColorMap,le=se&&!!f.sheenRoughnessMap,ve=!!f.specularMap,Fe=!!f.specularColorMap,pe=!!f.specularIntensityMap,de=V&&!!f.transmissionMap,be=V&&!!f.thicknessMap,rt=!!f.gradientMap,bt=!!f.alphaMap,Dt=f.alphaTest>0,Je=!!f.alphaHash,nt=!!f.extensions,Jt=!!b.attributes.uv1,q=!!b.attributes.uv2,vi=!!b.attributes.uv3,zn=Ri;return f.toneMapped&&(G!==null&&G.isXRRenderTarget!==!0||(zn=r.toneMapping)),{isWebGL2:h,shaderID:L,shaderType:f.type,shaderName:f.name,vertexShader:k,fragmentShader:U,defines:f.defines,customVertexShaderID:Q,customFragmentShaderID:he,isRawShaderMaterial:f.isRawShaderMaterial===!0,glslVersion:f.glslVersion,precision:p,batching:H,instancing:J,instancingColor:J&&_.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:G===null?r.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:Bt,map:Z,matcap:ye,envMap:w,envMapMode:w&&D.mapping,envMapCubeUVHeight:M,aoMap:A,lightMap:F,bumpMap:K,normalMap:I,displacementMap:d&&Y,emissiveMap:O,normalMapObjectSpace:I&&f.normalMapType===1,normalMapTangentSpace:I&&f.normalMapType===0,metalnessMap:B,roughnessMap:z,anisotropy:te,anisotropyMap:X,clearcoat:ee,clearcoatMap:oe,clearcoatNormalMap:xe,clearcoatRoughnessMap:ue,iridescence:T,iridescenceMap:Ee,iridescenceThicknessMap:Pe,sheen:se,sheenColorMap:W,sheenRoughnessMap:le,specularMap:ve,specularColorMap:Fe,specularIntensityMap:pe,transmission:V,transmissionMap:de,thicknessMap:be,gradientMap:rt,opaque:f.transparent===!1&&f.blending===1,alphaMap:bt,alphaTest:Dt,alphaHash:Je,combine:f.combine,mapUv:Z&&v(f.map.channel),aoMapUv:A&&v(f.aoMap.channel),lightMapUv:F&&v(f.lightMap.channel),bumpMapUv:K&&v(f.bumpMap.channel),normalMapUv:I&&v(f.normalMap.channel),displacementMapUv:Y&&v(f.displacementMap.channel),emissiveMapUv:O&&v(f.emissiveMap.channel),metalnessMapUv:B&&v(f.metalnessMap.channel),roughnessMapUv:z&&v(f.roughnessMap.channel),anisotropyMapUv:X&&v(f.anisotropyMap.channel),clearcoatMapUv:oe&&v(f.clearcoatMap.channel),clearcoatNormalMapUv:xe&&v(f.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ue&&v(f.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&v(f.iridescenceMap.channel),iridescenceThicknessMapUv:Pe&&v(f.iridescenceThicknessMap.channel),sheenColorMapUv:W&&v(f.sheenColorMap.channel),sheenRoughnessMapUv:le&&v(f.sheenRoughnessMap.channel),specularMapUv:ve&&v(f.specularMap.channel),specularColorMapUv:Fe&&v(f.specularColorMap.channel),specularIntensityMapUv:pe&&v(f.specularIntensityMap.channel),transmissionMapUv:de&&v(f.transmissionMap.channel),thicknessMapUv:be&&v(f.thicknessMap.channel),alphaMapUv:bt&&v(f.alphaMap.channel),vertexTangents:!!b.attributes.tangent&&(I||te),vertexColors:f.vertexColors,vertexAlphas:f.vertexColors===!0&&!!b.attributes.color&&b.attributes.color.itemSize===4,vertexUv1s:Jt,vertexUv2s:q,vertexUv3s:vi,pointsUvs:_.isPoints===!0&&!!b.attributes.uv&&(Z||bt),fog:!!R,useFog:f.fog===!0,fogExp2:R&&R.isFogExp2,flatShading:f.flatShading===!0,sizeAttenuation:f.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:_.isSkinnedMesh===!0,morphTargets:b.morphAttributes.position!==void 0,morphNormals:b.morphAttributes.normal!==void 0,morphColors:b.morphAttributes.color!==void 0,morphTargetsCount:C,morphTextureStride:ie,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:f.dithering,shadowMapEnabled:r.shadowMap.enabled&&g.length>0,shadowMapType:r.shadowMap.type,toneMapping:zn,useLegacyLights:r._useLegacyLights,decodeVideoTexture:Z&&f.map.isVideoTexture===!0&&Qe.getTransfer(f.map.colorSpace)===ht,premultipliedAlpha:f.premultipliedAlpha,doubleSided:f.side===2,flipSided:f.side===Vt,useDepthPacking:f.depthPacking>=0,depthPacking:f.depthPacking||0,index0AttributeName:f.index0AttributeName,extensionDerivatives:nt&&f.extensions.derivatives===!0,extensionFragDepth:nt&&f.extensions.fragDepth===!0,extensionDrawBuffers:nt&&f.extensions.drawBuffers===!0,extensionShaderTextureLOD:nt&&f.extensions.shaderTextureLOD===!0,extensionClipCullDistance:nt&&f.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:f.customProgramCacheKey()}},getProgramCacheKey:function(f){let x=[];if(f.shaderID?x.push(f.shaderID):(x.push(f.customVertexShaderID),x.push(f.customFragmentShaderID)),f.defines!==void 0)for(let g in f.defines)x.push(g),x.push(f.defines[g]);return f.isRawShaderMaterial===!1&&(function(g,y){g.push(y.precision),g.push(y.outputColorSpace),g.push(y.envMapMode),g.push(y.envMapCubeUVHeight),g.push(y.mapUv),g.push(y.alphaMapUv),g.push(y.lightMapUv),g.push(y.aoMapUv),g.push(y.bumpMapUv),g.push(y.normalMapUv),g.push(y.displacementMapUv),g.push(y.emissiveMapUv),g.push(y.metalnessMapUv),g.push(y.roughnessMapUv),g.push(y.anisotropyMapUv),g.push(y.clearcoatMapUv),g.push(y.clearcoatNormalMapUv),g.push(y.clearcoatRoughnessMapUv),g.push(y.iridescenceMapUv),g.push(y.iridescenceThicknessMapUv),g.push(y.sheenColorMapUv),g.push(y.sheenRoughnessMapUv),g.push(y.specularMapUv),g.push(y.specularColorMapUv),g.push(y.specularIntensityMapUv),g.push(y.transmissionMapUv),g.push(y.thicknessMapUv),g.push(y.combine),g.push(y.fogExp2),g.push(y.sizeAttenuation),g.push(y.morphTargetsCount),g.push(y.morphAttributeCount),g.push(y.numDirLights),g.push(y.numPointLights),g.push(y.numSpotLights),g.push(y.numSpotLightMaps),g.push(y.numHemiLights),g.push(y.numRectAreaLights),g.push(y.numDirLightShadows),g.push(y.numPointLightShadows),g.push(y.numSpotLightShadows),g.push(y.numSpotLightShadowsWithMaps),g.push(y.numLightProbes),g.push(y.shadowMapType),g.push(y.toneMapping),g.push(y.numClippingPlanes),g.push(y.numClipIntersection),g.push(y.depthPacking)}(x,f),function(g,y){o.disableAll(),y.isWebGL2&&o.enable(0),y.supportsVertexTextures&&o.enable(1),y.instancing&&o.enable(2),y.instancingColor&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),g.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.skinning&&o.enable(4),y.morphTargets&&o.enable(5),y.morphNormals&&o.enable(6),y.morphColors&&o.enable(7),y.premultipliedAlpha&&o.enable(8),y.shadowMapEnabled&&o.enable(9),y.useLegacyLights&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),g.push(o.mask)}(x,f),x.push(r.outputColorSpace)),x.push(f.customProgramCacheKey),x.join()},getUniforms:function(f){let x=m[f.type],g;if(x){let y=Vn[x];g=ki.clone(y.uniforms)}else g=f.uniforms;return g},acquireProgram:function(f,x){let g;for(let y=0,_=c.length;y<_;y++){let R=c[y];if(R.cacheKey===x){g=R,++g.usedTimes;break}}return g===void 0&&(g=new lg(r,x,f,s),c.push(g)),g},releaseProgram:function(f){if(--f.usedTimes==0){let x=c.indexOf(f);c[x]=c[c.length-1],c.pop(),f.destroy()}},releaseShaderCache:function(f){l.remove(f)},programs:c,dispose:function(){l.dispose()}}}function ug(){let r=new WeakMap;return{get:function(e){let t=r.get(e);return t===void 0&&(t={},r.set(e,t)),t},remove:function(e){r.delete(e)},update:function(e,t,n){r.get(e)[t]=n},dispose:function(){r=new WeakMap}}}function dg(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Wd(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Xd(){let r=[],e=0,t=[],n=[],i=[];function s(a,o,l,c,h,u){let d=r[e];return d===void 0?(d={id:a.id,object:a,geometry:o,material:l,groupOrder:c,renderOrder:a.renderOrder,z:h,group:u},r[e]=d):(d.id=a.id,d.object=a,d.geometry=o,d.material=l,d.groupOrder=c,d.renderOrder=a.renderOrder,d.z=h,d.group=u),e++,d}return{opaque:t,transmissive:n,transparent:i,init:function(){e=0,t.length=0,n.length=0,i.length=0},push:function(a,o,l,c,h,u){let d=s(a,o,l,c,h,u);l.transmission>0?n.push(d):l.transparent===!0?i.push(d):t.push(d)},unshift:function(a,o,l,c,h,u){let d=s(a,o,l,c,h,u);l.transmission>0?n.unshift(d):l.transparent===!0?i.unshift(d):t.unshift(d)},finish:function(){for(let a=e,o=r.length;a<o;a++){let l=r[a];if(l.id===null)break;l.id=null,l.object=null,l.geometry=null,l.material=null,l.group=null}},sort:function(a,o){t.length>1&&t.sort(a||dg),n.length>1&&n.sort(o||Wd),i.length>1&&i.sort(o||Wd)}}}function pg(){let r=new WeakMap;return{get:function(e,t){let n=r.get(e),i;return n===void 0?(i=new Xd,r.set(e,[i])):t>=n.length?(i=new Xd,n.push(i)):i=n[t],i},dispose:function(){r=new WeakMap}}}function fg(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new E,color:new _e};break;case"SpotLight":t={position:new E,direction:new E,color:new _e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new E,color:new _e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new E,skyColor:new _e,groundColor:new _e};break;case"RectAreaLight":t={color:new _e,position:new E,halfWidth:new E,halfHeight:new E}}return r[e.id]=t,t}}}var mg=0;function gg(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function vg(r,e){let t=new fg,n=function(){let l={};return{get:function(c){if(l[c.id]!==void 0)return l[c.id];let h;switch(c.type){case"DirectionalLight":case"SpotLight":h={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"PointLight":h={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re,shadowCameraNear:1,shadowCameraFar:1e3}}return l[c.id]=h,h}}}(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new E);let s=new E,a=new Le,o=new Le;return{setup:function(l,c){let h=0,u=0,d=0;for(let L=0;L<9;L++)i.probe[L].set(0,0,0);let p=0,m=0,v=0,f=0,x=0,g=0,y=0,_=0,R=0,b=0,S=0;l.sort(gg);let D=c===!0?Math.PI:1;for(let L=0,N=l.length;L<N;L++){let C=l[L],k=C.color,U=C.intensity,Q=C.distance,he=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=k.r*U*D,u+=k.g*U*D,d+=k.b*U*D;else if(C.isLightProbe){for(let ie=0;ie<9;ie++)i.probe[ie].addScaledVector(C.sh.coefficients[ie],U);S++}else if(C.isDirectionalLight){let ie=t.get(C);if(ie.color.copy(C.color).multiplyScalar(C.intensity*D),C.castShadow){let G=C.shadow,J=n.get(C);J.shadowBias=G.bias,J.shadowNormalBias=G.normalBias,J.shadowRadius=G.radius,J.shadowMapSize=G.mapSize,i.directionalShadow[p]=J,i.directionalShadowMap[p]=he,i.directionalShadowMatrix[p]=C.shadow.matrix,g++}i.directional[p]=ie,p++}else if(C.isSpotLight){let ie=t.get(C);ie.position.setFromMatrixPosition(C.matrixWorld),ie.color.copy(k).multiplyScalar(U*D),ie.distance=Q,ie.coneCos=Math.cos(C.angle),ie.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),ie.decay=C.decay,i.spot[v]=ie;let G=C.shadow;if(C.map&&(i.spotLightMap[R]=C.map,R++,G.updateMatrices(C),C.castShadow&&b++),i.spotLightMatrix[v]=G.matrix,C.castShadow){let J=n.get(C);J.shadowBias=G.bias,J.shadowNormalBias=G.normalBias,J.shadowRadius=G.radius,J.shadowMapSize=G.mapSize,i.spotShadow[v]=J,i.spotShadowMap[v]=he,_++}v++}else if(C.isRectAreaLight){let ie=t.get(C);ie.color.copy(k).multiplyScalar(U),ie.halfWidth.set(.5*C.width,0,0),ie.halfHeight.set(0,.5*C.height,0),i.rectArea[f]=ie,f++}else if(C.isPointLight){let ie=t.get(C);if(ie.color.copy(C.color).multiplyScalar(C.intensity*D),ie.distance=C.distance,ie.decay=C.decay,C.castShadow){let G=C.shadow,J=n.get(C);J.shadowBias=G.bias,J.shadowNormalBias=G.normalBias,J.shadowRadius=G.radius,J.shadowMapSize=G.mapSize,J.shadowCameraNear=G.camera.near,J.shadowCameraFar=G.camera.far,i.pointShadow[m]=J,i.pointShadowMap[m]=he,i.pointShadowMatrix[m]=C.shadow.matrix,y++}i.point[m]=ie,m++}else if(C.isHemisphereLight){let ie=t.get(C);ie.skyColor.copy(C.color).multiplyScalar(U*D),ie.groundColor.copy(C.groundColor).multiplyScalar(U*D),i.hemi[x]=ie,x++}}f>0&&(e.isWebGL2?r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ge.LTC_FLOAT_1,i.rectAreaLTC2=ge.LTC_FLOAT_2):(i.rectAreaLTC1=ge.LTC_HALF_1,i.rectAreaLTC2=ge.LTC_HALF_2):r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ge.LTC_FLOAT_1,i.rectAreaLTC2=ge.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ge.LTC_HALF_1,i.rectAreaLTC2=ge.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;let M=i.hash;M.directionalLength===p&&M.pointLength===m&&M.spotLength===v&&M.rectAreaLength===f&&M.hemiLength===x&&M.numDirectionalShadows===g&&M.numPointShadows===y&&M.numSpotShadows===_&&M.numSpotMaps===R&&M.numLightProbes===S||(i.directional.length=p,i.spot.length=v,i.rectArea.length=f,i.point.length=m,i.hemi.length=x,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=_+R-b,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=S,M.directionalLength=p,M.pointLength=m,M.spotLength=v,M.rectAreaLength=f,M.hemiLength=x,M.numDirectionalShadows=g,M.numPointShadows=y,M.numSpotShadows=_,M.numSpotMaps=R,M.numLightProbes=S,i.version=mg++)},setupView:function(l,c){let h=0,u=0,d=0,p=0,m=0,v=c.matrixWorldInverse;for(let f=0,x=l.length;f<x;f++){let g=l[f];if(g.isDirectionalLight){let y=i.directional[h];y.direction.setFromMatrixPosition(g.matrixWorld),s.setFromMatrixPosition(g.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(v),h++}else if(g.isSpotLight){let y=i.spot[d];y.position.setFromMatrixPosition(g.matrixWorld),y.position.applyMatrix4(v),y.direction.setFromMatrixPosition(g.matrixWorld),s.setFromMatrixPosition(g.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(v),d++}else if(g.isRectAreaLight){let y=i.rectArea[p];y.position.setFromMatrixPosition(g.matrixWorld),y.position.applyMatrix4(v),o.identity(),a.copy(g.matrixWorld),a.premultiply(v),o.extractRotation(a),y.halfWidth.set(.5*g.width,0,0),y.halfHeight.set(0,.5*g.height,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),p++}else if(g.isPointLight){let y=i.point[u];y.position.setFromMatrixPosition(g.matrixWorld),y.position.applyMatrix4(v),u++}else if(g.isHemisphereLight){let y=i.hemi[m];y.direction.setFromMatrixPosition(g.matrixWorld),y.direction.transformDirection(v),m++}}},state:i}}function jd(r,e){let t=new vg(r,e),n=[],i=[];return{init:function(){n.length=0,i.length=0},state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:function(s){t.setup(n,s)},setupLightsView:function(s){t.setupView(n,s)},pushLight:function(s){n.push(s)},pushShadow:function(s){i.push(s)}}}function yg(r,e){let t=new WeakMap;return{get:function(n,i=0){let s=t.get(n),a;return s===void 0?(a=new jd(r,e),t.set(n,[a])):i>=s.length?(a=new jd(r,e),s.push(a)):a=s[i],a},dispose:function(){t=new WeakMap}}}var Gc=class extends on{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Vc=class extends on{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function xg(r,e,t){let n=new gs,i=new re,s=new re,a=new ut,o=new Gc({depthPacking:3201}),l=new Vc,c={},h=t.maxTextureSize,u={[qn]:Vt,[Vt]:qn,2:2},d=new At({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new re},radius:{value:4}},vertexShader:`void main() {
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
}`}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let m=new tt;m.setAttribute("position",new dt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Se(m,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Mp;let x=this.type;function g(b,S){let D=e.update(v);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new en(i.x,i.y)),d.uniforms.shadow_pass.value=b.map.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,r.setRenderTarget(b.mapPass),r.clear(),r.renderBufferDirect(S,null,D,d,v,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,r.setRenderTarget(b.map),r.clear(),r.renderBufferDirect(S,null,D,p,v,null)}function y(b,S,D,M){let L=null,N=D.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(N!==void 0)L=N;else if(L=D.isPointLight===!0?l:o,r.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){let C=L.uuid,k=S.uuid,U=c[C];U===void 0&&(U={},c[C]=U);let Q=U[k];Q===void 0&&(Q=L.clone(),U[k]=Q,S.addEventListener("dispose",R)),L=Q}return L.visible=S.visible,L.wireframe=S.wireframe,L.side=M===ri?S.shadowSide!==null?S.shadowSide:S.side:S.shadowSide!==null?S.shadowSide:u[S.side],L.alphaMap=S.alphaMap,L.alphaTest=S.alphaTest,L.map=S.map,L.clipShadows=S.clipShadows,L.clippingPlanes=S.clippingPlanes,L.clipIntersection=S.clipIntersection,L.displacementMap=S.displacementMap,L.displacementScale=S.displacementScale,L.displacementBias=S.displacementBias,L.wireframeLinewidth=S.wireframeLinewidth,L.linewidth=S.linewidth,D.isPointLight===!0&&L.isMeshDistanceMaterial===!0&&(r.properties.get(L).light=D),L}function _(b,S,D,M,L){if(b.visible===!1)return;if(b.layers.test(S.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&L===ri)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,b.matrixWorld);let C=e.update(b),k=b.material;if(Array.isArray(k)){let U=C.groups;for(let Q=0,he=U.length;Q<he;Q++){let ie=U[Q],G=k[ie.materialIndex];if(G&&G.visible){let J=y(b,G,M,L);b.onBeforeShadow(r,b,S,D,C,J,ie),r.renderBufferDirect(D,null,C,J,b,ie),b.onAfterShadow(r,b,S,D,C,J,ie)}}}else if(k.visible){let U=y(b,k,M,L);b.onBeforeShadow(r,b,S,D,C,U,null),r.renderBufferDirect(D,null,C,U,b,null),b.onAfterShadow(r,b,S,D,C,U,null)}}let N=b.children;for(let C=0,k=N.length;C<k;C++)_(N[C],S,D,M,L)}function R(b){b.target.removeEventListener("dispose",R);for(let S in c){let D=c[S],M=b.target.uuid;M in D&&(D[M].dispose(),delete D[M])}}this.render=function(b,S,D){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||b.length===0)return;let M=r.getRenderTarget(),L=r.getActiveCubeFace(),N=r.getActiveMipmapLevel(),C=r.state;C.setBlending(0),C.buffers.color.setClear(1,1,1,1),C.buffers.depth.setTest(!0),C.setScissorTest(!1);let k=x!==ri&&this.type===ri,U=x===ri&&this.type!==ri;for(let Q=0,he=b.length;Q<he;Q++){let ie=b[Q],G=ie.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",ie,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;i.copy(G.mapSize);let J=G.getFrameExtents();if(i.multiply(J),s.copy(G.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/J.x),i.x=s.x*J.x,G.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/J.y),i.y=s.y*J.y,G.mapSize.y=s.y)),G.map===null||k===!0||U===!0){let Z=this.type!==ri?{minFilter:Xt,magFilter:Xt}:{};G.map!==null&&G.map.dispose(),G.map=new en(i.x,i.y,Z),G.map.texture.name=ie.name+".shadowMap",G.camera.updateProjectionMatrix()}r.setRenderTarget(G.map),r.clear();let H=G.getViewportCount();for(let Z=0;Z<H;Z++){let ye=G.getViewport(Z);a.set(s.x*ye.x,s.y*ye.y,s.x*ye.z,s.y*ye.w),C.viewport(a),G.updateMatrices(ie,Z),n=G.getFrustum(),_(S,D,G.camera,ie,this.type)}G.isPointLightShadow!==!0&&this.type===ri&&g(G,D),G.needsUpdate=!1}x=this.type,f.needsUpdate=!1,r.setRenderTarget(M,L,N)}}function _g(r,e,t){let n=t.isWebGL2,i=new function(){let T=!1,se=new ut,V=null,X=new ut(0,0,0,0);return{setMask:function(oe){V===oe||T||(r.colorMask(oe,oe,oe,oe),V=oe)},setLocked:function(oe){T=oe},setClear:function(oe,xe,ue,Ee,Pe){Pe===!0&&(oe*=Ee,xe*=Ee,ue*=Ee),se.set(oe,xe,ue,Ee),X.equals(se)===!1&&(r.clearColor(oe,xe,ue,Ee),X.copy(se))},reset:function(){T=!1,V=null,X.set(-1,0,0,0)}}},s=new function(){let T=!1,se=null,V=null,X=null;return{setTest:function(oe){oe?K(r.DEPTH_TEST):I(r.DEPTH_TEST)},setMask:function(oe){se===oe||T||(r.depthMask(oe),se=oe)},setFunc:function(oe){if(V!==oe){switch(oe){case 0:r.depthFunc(r.NEVER);break;case 1:r.depthFunc(r.ALWAYS);break;case 2:r.depthFunc(r.LESS);break;case 3:default:r.depthFunc(r.LEQUAL);break;case 4:r.depthFunc(r.EQUAL);break;case 5:r.depthFunc(r.GEQUAL);break;case 6:r.depthFunc(r.GREATER);break;case 7:r.depthFunc(r.NOTEQUAL)}V=oe}},setLocked:function(oe){T=oe},setClear:function(oe){X!==oe&&(r.clearDepth(oe),X=oe)},reset:function(){T=!1,se=null,V=null,X=null}}},a=new function(){let T=!1,se=null,V=null,X=null,oe=null,xe=null,ue=null,Ee=null,Pe=null;return{setTest:function(W){T||(W?K(r.STENCIL_TEST):I(r.STENCIL_TEST))},setMask:function(W){se===W||T||(r.stencilMask(W),se=W)},setFunc:function(W,le,ve){V===W&&X===le&&oe===ve||(r.stencilFunc(W,le,ve),V=W,X=le,oe=ve)},setOp:function(W,le,ve){xe===W&&ue===le&&Ee===ve||(r.stencilOp(W,le,ve),xe=W,ue=le,Ee=ve)},setLocked:function(W){T=W},setClear:function(W){Pe!==W&&(r.clearStencil(W),Pe=W)},reset:function(){T=!1,se=null,V=null,X=null,oe=null,xe=null,ue=null,Ee=null,Pe=null}}},o=new WeakMap,l=new WeakMap,c={},h={},u=new WeakMap,d=[],p=null,m=!1,v=null,f=null,x=null,g=null,y=null,_=null,R=null,b=new _e(0,0,0),S=0,D=!1,M=null,L=null,N=null,C=null,k=null,U=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Q=!1,he=0,ie=r.getParameter(r.VERSION);ie.indexOf("WebGL")!==-1?(he=parseFloat(/^WebGL (\d)/.exec(ie)[1]),Q=he>=1):ie.indexOf("OpenGL ES")!==-1&&(he=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),Q=he>=2);let G=null,J={},H=r.getParameter(r.SCISSOR_BOX),Z=r.getParameter(r.VIEWPORT),ye=new ut().fromArray(H),w=new ut().fromArray(Z);function A(T,se,V,X){let oe=new Uint8Array(4),xe=r.createTexture();r.bindTexture(T,xe),r.texParameteri(T,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(T,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ue=0;ue<V;ue++)!n||T!==r.TEXTURE_3D&&T!==r.TEXTURE_2D_ARRAY?r.texImage2D(se+ue,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,oe):r.texImage3D(se,0,r.RGBA,1,1,X,0,r.RGBA,r.UNSIGNED_BYTE,oe);return xe}let F={};function K(T){c[T]!==!0&&(r.enable(T),c[T]=!0)}function I(T){c[T]!==!1&&(r.disable(T),c[T]=!1)}F[r.TEXTURE_2D]=A(r.TEXTURE_2D,r.TEXTURE_2D,1),F[r.TEXTURE_CUBE_MAP]=A(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(F[r.TEXTURE_2D_ARRAY]=A(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),F[r.TEXTURE_3D]=A(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),i.setClear(0,0,0,1),s.setClear(1),a.setClear(0),K(r.DEPTH_TEST),s.setFunc(3),z(!1),te(1),K(r.CULL_FACE),B(0);let Y={[or]:r.FUNC_ADD,101:r.FUNC_SUBTRACT,102:r.FUNC_REVERSE_SUBTRACT};if(n)Y[103]=r.MIN,Y[104]=r.MAX;else{let T=e.get("EXT_blend_minmax");T!==null&&(Y[103]=T.MIN_EXT,Y[104]=T.MAX_EXT)}let O={200:r.ZERO,201:r.ONE,202:r.SRC_COLOR,[Sc]:r.SRC_ALPHA,210:r.SRC_ALPHA_SATURATE,208:r.DST_COLOR,206:r.DST_ALPHA,203:r.ONE_MINUS_SRC_COLOR,[Tc]:r.ONE_MINUS_SRC_ALPHA,209:r.ONE_MINUS_DST_COLOR,207:r.ONE_MINUS_DST_ALPHA,211:r.CONSTANT_COLOR,212:r.ONE_MINUS_CONSTANT_COLOR,213:r.CONSTANT_ALPHA,214:r.ONE_MINUS_CONSTANT_ALPHA};function B(T,se,V,X,oe,xe,ue,Ee,Pe,W){if(T!==0){if(m===!1&&(K(r.BLEND),m=!0),T===5)oe=oe||se,xe=xe||V,ue=ue||X,se===f&&oe===y||(r.blendEquationSeparate(Y[se],Y[oe]),f=se,y=oe),V===x&&X===g&&xe===_&&ue===R||(r.blendFuncSeparate(O[V],O[X],O[xe],O[ue]),x=V,g=X,_=xe,R=ue),Ee.equals(b)!==!1&&Pe===S||(r.blendColor(Ee.r,Ee.g,Ee.b,Pe),b.copy(Ee),S=Pe),v=T,D=!1;else if(T!==v||W!==D){if(f===or&&y===or||(r.blendEquation(r.FUNC_ADD),f=or,y=or),W)switch(T){case 1:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case 2:r.blendFunc(r.ONE,r.ONE);break;case 3:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case 4:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",T)}else switch(T){case 1:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case 2:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case 3:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case 4:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",T)}x=null,g=null,_=null,R=null,b.set(0,0,0),S=0,v=T,D=W}}else m===!0&&(I(r.BLEND),m=!1)}function z(T){M!==T&&(T?r.frontFace(r.CW):r.frontFace(r.CCW),M=T)}function te(T){T!==0?(K(r.CULL_FACE),T!==L&&(T===1?r.cullFace(r.BACK):T===2?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):I(r.CULL_FACE),L=T}function ee(T,se,V){T?(K(r.POLYGON_OFFSET_FILL),C===se&&k===V||(r.polygonOffset(se,V),C=se,k=V)):I(r.POLYGON_OFFSET_FILL)}return{buffers:{color:i,depth:s,stencil:a},enable:K,disable:I,bindFramebuffer:function(T,se){return h[T]!==se&&(r.bindFramebuffer(T,se),h[T]=se,n&&(T===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=se),T===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=se)),!0)},drawBuffers:function(T,se){let V=d,X=!1;if(T)if(V=u.get(se),V===void 0&&(V=[],u.set(se,V)),T.isWebGLMultipleRenderTargets){let oe=T.texture;if(V.length!==oe.length||V[0]!==r.COLOR_ATTACHMENT0){for(let xe=0,ue=oe.length;xe<ue;xe++)V[xe]=r.COLOR_ATTACHMENT0+xe;V.length=oe.length,X=!0}}else V[0]!==r.COLOR_ATTACHMENT0&&(V[0]=r.COLOR_ATTACHMENT0,X=!0);else V[0]!==r.BACK&&(V[0]=r.BACK,X=!0);X&&(t.isWebGL2?r.drawBuffers(V):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(V))},useProgram:function(T){return p!==T&&(r.useProgram(T),p=T,!0)},setBlending:B,setMaterial:function(T,se){T.side===2?I(r.CULL_FACE):K(r.CULL_FACE);let V=T.side===Vt;se&&(V=!V),z(V),T.blending===1&&T.transparent===!1?B(0):B(T.blending,T.blendEquation,T.blendSrc,T.blendDst,T.blendEquationAlpha,T.blendSrcAlpha,T.blendDstAlpha,T.blendColor,T.blendAlpha,T.premultipliedAlpha),s.setFunc(T.depthFunc),s.setTest(T.depthTest),s.setMask(T.depthWrite),i.setMask(T.colorWrite);let X=T.stencilWrite;a.setTest(X),X&&(a.setMask(T.stencilWriteMask),a.setFunc(T.stencilFunc,T.stencilRef,T.stencilFuncMask),a.setOp(T.stencilFail,T.stencilZFail,T.stencilZPass)),ee(T.polygonOffset,T.polygonOffsetFactor,T.polygonOffsetUnits),T.alphaToCoverage===!0?K(r.SAMPLE_ALPHA_TO_COVERAGE):I(r.SAMPLE_ALPHA_TO_COVERAGE)},setFlipSided:z,setCullFace:te,setLineWidth:function(T){T!==N&&(Q&&r.lineWidth(T),N=T)},setPolygonOffset:ee,setScissorTest:function(T){T?K(r.SCISSOR_TEST):I(r.SCISSOR_TEST)},activeTexture:function(T){T===void 0&&(T=r.TEXTURE0+U-1),G!==T&&(r.activeTexture(T),G=T)},bindTexture:function(T,se,V){V===void 0&&(V=G===null?r.TEXTURE0+U-1:G);let X=J[V];X===void 0&&(X={type:void 0,texture:void 0},J[V]=X),X.type===T&&X.texture===se||(G!==V&&(r.activeTexture(V),G=V),r.bindTexture(T,se||F[T]),X.type=T,X.texture=se)},unbindTexture:function(){let T=J[G];T!==void 0&&T.type!==void 0&&(r.bindTexture(T.type,null),T.type=void 0,T.texture=void 0)},compressedTexImage2D:function(){try{r.compressedTexImage2D.apply(r,arguments)}catch(T){console.error("THREE.WebGLState:",T)}},compressedTexImage3D:function(){try{r.compressedTexImage3D.apply(r,arguments)}catch(T){console.error("THREE.WebGLState:",T)}},texImage2D:function(){try{r.texImage2D.apply(r,arguments)}catch(T){console.error("THREE.WebGLState:",T)}},texImage3D:function(){try{r.texImage3D.apply(r,arguments)}catch(T){console.error("THREE.WebGLState:",T)}},updateUBOMapping:function(T,se){let V=l.get(se);V===void 0&&(V=new WeakMap,l.set(se,V));let X=V.get(T);X===void 0&&(X=r.getUniformBlockIndex(se,T.name),V.set(T,X))},uniformBlockBinding:function(T,se){let V=l.get(se).get(T);o.get(se)!==V&&(r.uniformBlockBinding(se,V,T.__bindingPointIndex),o.set(se,V))},texStorage2D:function(){try{r.texStorage2D.apply(r,arguments)}catch(T){console.error("THREE.WebGLState:",T)}},texStorage3D:function(){try{r.texStorage3D.apply(r,arguments)}catch(T){console.error("THREE.WebGLState:",T)}},texSubImage2D:function(){try{r.texSubImage2D.apply(r,arguments)}catch(T){console.error("THREE.WebGLState:",T)}},texSubImage3D:function(){try{r.texSubImage3D.apply(r,arguments)}catch(T){console.error("THREE.WebGLState:",T)}},compressedTexSubImage2D:function(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(T){console.error("THREE.WebGLState:",T)}},compressedTexSubImage3D:function(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(T){console.error("THREE.WebGLState:",T)}},scissor:function(T){ye.equals(T)===!1&&(r.scissor(T.x,T.y,T.z,T.w),ye.copy(T))},viewport:function(T){w.equals(T)===!1&&(r.viewport(T.x,T.y,T.z,T.w),w.copy(T))},reset:function(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),n===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),c={},G=null,J={},h={},u=new WeakMap,d=[],p=null,m=!1,v=null,f=null,x=null,g=null,y=null,_=null,R=null,b=new _e(0,0,0),S=0,D=!1,M=null,L=null,N=null,C=null,k=null,ye.set(0,0,r.canvas.width,r.canvas.height),w.set(0,0,r.canvas.width,r.canvas.height),i.reset(),s.reset(),a.reset()}}}function Mg(r,e,t,n,i,s,a){let o=i.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator<"u"&&/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(w,A){return p?new OffscreenCanvas(w,A):oa("canvas")}function v(w,A,F,K){let I=1;if((w.width>K||w.height>K)&&(I=K/Math.max(w.width,w.height)),I<1||A===!0){if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap){let Y=A?Co:Math.floor,O=Y(I*w.width),B=Y(I*w.height);u===void 0&&(u=m(O,B));let z=F?m(O,B):u;return z.width=O,z.height=B,z.getContext("2d").drawImage(w,0,0,O,B),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+O+"x"+B+")."),z}return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),w}return w}function f(w){return Lc(w.width)&&Lc(w.height)}function x(w,A){return w.generateMipmaps&&A&&w.minFilter!==Xt&&w.minFilter!==rn}function g(w){r.generateMipmap(w)}function y(w,A,F,K,I=!1){if(o===!1)return A;if(w!==null){if(r[w]!==void 0)return r[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let Y=A;if(A===r.RED&&(F===r.FLOAT&&(Y=r.R32F),F===r.HALF_FLOAT&&(Y=r.R16F),F===r.UNSIGNED_BYTE&&(Y=r.R8)),A===r.RED_INTEGER&&(F===r.UNSIGNED_BYTE&&(Y=r.R8UI),F===r.UNSIGNED_SHORT&&(Y=r.R16UI),F===r.UNSIGNED_INT&&(Y=r.R32UI),F===r.BYTE&&(Y=r.R8I),F===r.SHORT&&(Y=r.R16I),F===r.INT&&(Y=r.R32I)),A===r.RG&&(F===r.FLOAT&&(Y=r.RG32F),F===r.HALF_FLOAT&&(Y=r.RG16F),F===r.UNSIGNED_BYTE&&(Y=r.RG8)),A===r.RGBA){let O=I?To:Qe.getTransfer(K);F===r.FLOAT&&(Y=r.RGBA32F),F===r.HALF_FLOAT&&(Y=r.RGBA16F),F===r.UNSIGNED_BYTE&&(Y=O===ht?r.SRGB8_ALPHA8:r.RGBA8),F===r.UNSIGNED_SHORT_4_4_4_4&&(Y=r.RGBA4),F===r.UNSIGNED_SHORT_5_5_5_1&&(Y=r.RGB5_A1)}return Y!==r.R16F&&Y!==r.R32F&&Y!==r.RG16F&&Y!==r.RG32F&&Y!==r.RGBA16F&&Y!==r.RGBA32F||e.get("EXT_color_buffer_float"),Y}function _(w,A,F){return x(w,F)===!0||w.isFramebufferTexture&&w.minFilter!==Xt&&w.minFilter!==rn?Math.log2(Math.max(A.width,A.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?A.mipmaps.length:1}function R(w){return w===Xt||w===So||w===ea?r.NEAREST:r.LINEAR}function b(w){let A=w.target;A.removeEventListener("dispose",b),function(F){let K=n.get(F);if(K.__webglInit===void 0)return;let I=F.source,Y=d.get(I);if(Y){let O=Y[K.__cacheKey];O.usedTimes--,O.usedTimes===0&&D(F),Object.keys(Y).length===0&&d.delete(I)}n.remove(F)}(A),A.isVideoTexture&&h.delete(A)}function S(w){let A=w.target;A.removeEventListener("dispose",S),function(F){let K=F.texture,I=n.get(F),Y=n.get(K);if(Y.__webglTexture!==void 0&&(r.deleteTexture(Y.__webglTexture),a.memory.textures--),F.depthTexture&&F.depthTexture.dispose(),F.isWebGLCubeRenderTarget)for(let O=0;O<6;O++){if(Array.isArray(I.__webglFramebuffer[O]))for(let B=0;B<I.__webglFramebuffer[O].length;B++)r.deleteFramebuffer(I.__webglFramebuffer[O][B]);else r.deleteFramebuffer(I.__webglFramebuffer[O]);I.__webglDepthbuffer&&r.deleteRenderbuffer(I.__webglDepthbuffer[O])}else{if(Array.isArray(I.__webglFramebuffer))for(let O=0;O<I.__webglFramebuffer.length;O++)r.deleteFramebuffer(I.__webglFramebuffer[O]);else r.deleteFramebuffer(I.__webglFramebuffer);if(I.__webglDepthbuffer&&r.deleteRenderbuffer(I.__webglDepthbuffer),I.__webglMultisampledFramebuffer&&r.deleteFramebuffer(I.__webglMultisampledFramebuffer),I.__webglColorRenderbuffer)for(let O=0;O<I.__webglColorRenderbuffer.length;O++)I.__webglColorRenderbuffer[O]&&r.deleteRenderbuffer(I.__webglColorRenderbuffer[O]);I.__webglDepthRenderbuffer&&r.deleteRenderbuffer(I.__webglDepthRenderbuffer)}if(F.isWebGLMultipleRenderTargets)for(let O=0,B=K.length;O<B;O++){let z=n.get(K[O]);z.__webglTexture&&(r.deleteTexture(z.__webglTexture),a.memory.textures--),n.remove(K[O])}n.remove(K),n.remove(F)}(A)}function D(w){let A=n.get(w);r.deleteTexture(A.__webglTexture);let F=w.source;delete d.get(F)[A.__cacheKey],a.memory.textures--}let M=0;function L(w,A){let F=n.get(w);if(w.isVideoTexture&&function(K){let I=a.render.frame;h.get(K)!==I&&(h.set(K,I),K.update())}(w),w.isRenderTargetTexture===!1&&w.version>0&&F.__version!==w.version){let K=w.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else{if(K.complete!==!1)return void he(F,w,A);console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")}}t.bindTexture(r.TEXTURE_2D,F.__webglTexture,r.TEXTURE0+A)}let N={[dr]:r.REPEAT,[Un]:r.CLAMP_TO_EDGE,[aa]:r.MIRRORED_REPEAT},C={[Xt]:r.NEAREST,[So]:r.NEAREST_MIPMAP_NEAREST,[ea]:r.NEAREST_MIPMAP_LINEAR,[rn]:r.LINEAR,[Th]:r.LINEAR_MIPMAP_NEAREST,[pr]:r.LINEAR_MIPMAP_LINEAR},k={512:r.NEVER,519:r.ALWAYS,513:r.LESS,515:r.LEQUAL,514:r.EQUAL,518:r.GEQUAL,516:r.GREATER,517:r.NOTEQUAL};function U(w,A,F){if(F?(r.texParameteri(w,r.TEXTURE_WRAP_S,N[A.wrapS]),r.texParameteri(w,r.TEXTURE_WRAP_T,N[A.wrapT]),w!==r.TEXTURE_3D&&w!==r.TEXTURE_2D_ARRAY||r.texParameteri(w,r.TEXTURE_WRAP_R,N[A.wrapR]),r.texParameteri(w,r.TEXTURE_MAG_FILTER,C[A.magFilter]),r.texParameteri(w,r.TEXTURE_MIN_FILTER,C[A.minFilter])):(r.texParameteri(w,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(w,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),w!==r.TEXTURE_3D&&w!==r.TEXTURE_2D_ARRAY||r.texParameteri(w,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),A.wrapS===Un&&A.wrapT===Un||console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(w,r.TEXTURE_MAG_FILTER,R(A.magFilter)),r.texParameteri(w,r.TEXTURE_MIN_FILTER,R(A.minFilter)),A.minFilter!==Xt&&A.minFilter!==rn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),A.compareFunction&&(r.texParameteri(w,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(w,r.TEXTURE_COMPARE_FUNC,k[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let K=e.get("EXT_texture_filter_anisotropic");if(A.magFilter===Xt||A.minFilter!==ea&&A.minFilter!==pr||A.type===ai&&e.has("OES_texture_float_linear")===!1||o===!1&&A.type===Bn&&e.has("OES_texture_half_float_linear")===!1)return;(A.anisotropy>1||n.get(A).__currentAnisotropy)&&(r.texParameterf(w,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,i.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy)}}function Q(w,A){let F=!1;w.__webglInit===void 0&&(w.__webglInit=!0,A.addEventListener("dispose",b));let K=A.source,I=d.get(K);I===void 0&&(I={},d.set(K,I));let Y=function(O){let B=[];return B.push(O.wrapS),B.push(O.wrapT),B.push(O.wrapR||0),B.push(O.magFilter),B.push(O.minFilter),B.push(O.anisotropy),B.push(O.internalFormat),B.push(O.format),B.push(O.type),B.push(O.generateMipmaps),B.push(O.premultiplyAlpha),B.push(O.flipY),B.push(O.unpackAlignment),B.push(O.colorSpace),B.join()}(A);if(Y!==w.__cacheKey){I[Y]===void 0&&(I[Y]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,F=!0),I[Y].usedTimes++;let O=I[w.__cacheKey];O!==void 0&&(I[w.__cacheKey].usedTimes--,O.usedTimes===0&&D(A)),w.__cacheKey=Y,w.__webglTexture=I[Y].texture}return F}function he(w,A,F){let K=r.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(K=r.TEXTURE_2D_ARRAY),A.isData3DTexture&&(K=r.TEXTURE_3D);let I=Q(w,A),Y=A.source;t.bindTexture(K,w.__webglTexture,r.TEXTURE0+F);let O=n.get(Y);if(Y.version!==O.__version||I===!0){t.activeTexture(r.TEXTURE0+F);let B=Qe.getPrimaries(Qe.workingColorSpace),z=A.colorSpace===Wn?null:Qe.getPrimaries(A.colorSpace),te=A.colorSpace===Wn||B===z?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,A.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,A.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);let ee=function(le){return!o&&(le.wrapS!==Un||le.wrapT!==Un||le.minFilter!==Xt&&le.minFilter!==rn)}(A)&&f(A.image)===!1,T=v(A.image,ee,!1,i.maxTextureSize);T=ye(A,T);let se=f(T)||o,V=s.convert(A.format,A.colorSpace),X,oe=s.convert(A.type),xe=y(A.internalFormat,V,oe,A.colorSpace,A.isVideoTexture);U(K,A,se);let ue=A.mipmaps,Ee=o&&A.isVideoTexture!==!0&&xe!==Lp,Pe=O.__version===void 0||I===!0,W=_(A,T,se);if(A.isDepthTexture)xe=r.DEPTH_COMPONENT,o?xe=A.type===ai?r.DEPTH_COMPONENT32F:A.type===Ti?r.DEPTH_COMPONENT24:A.type===cr?r.DEPTH24_STENCIL8:r.DEPTH_COMPONENT16:A.type===ai&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),A.format===hr&&xe===r.DEPTH_COMPONENT&&A.type!==wh&&A.type!==Ti&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),A.type=Ti,oe=s.convert(A.type)),A.format===hs&&xe===r.DEPTH_COMPONENT&&(xe=r.DEPTH_STENCIL,A.type!==cr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),A.type=cr,oe=s.convert(A.type))),Pe&&(Ee?t.texStorage2D(r.TEXTURE_2D,1,xe,T.width,T.height):t.texImage2D(r.TEXTURE_2D,0,xe,T.width,T.height,0,V,oe,null));else if(A.isDataTexture)if(ue.length>0&&se){Ee&&Pe&&t.texStorage2D(r.TEXTURE_2D,W,xe,ue[0].width,ue[0].height);for(let le=0,ve=ue.length;le<ve;le++)X=ue[le],Ee?t.texSubImage2D(r.TEXTURE_2D,le,0,0,X.width,X.height,V,oe,X.data):t.texImage2D(r.TEXTURE_2D,le,xe,X.width,X.height,0,V,oe,X.data);A.generateMipmaps=!1}else Ee?(Pe&&t.texStorage2D(r.TEXTURE_2D,W,xe,T.width,T.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,T.width,T.height,V,oe,T.data)):t.texImage2D(r.TEXTURE_2D,0,xe,T.width,T.height,0,V,oe,T.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Ee&&Pe&&t.texStorage3D(r.TEXTURE_2D_ARRAY,W,xe,ue[0].width,ue[0].height,T.depth);for(let le=0,ve=ue.length;le<ve;le++)X=ue[le],A.format!==On?V!==null?Ee?t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,le,0,0,0,X.width,X.height,T.depth,V,X.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,le,xe,X.width,X.height,T.depth,0,X.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ee?t.texSubImage3D(r.TEXTURE_2D_ARRAY,le,0,0,0,X.width,X.height,T.depth,V,oe,X.data):t.texImage3D(r.TEXTURE_2D_ARRAY,le,xe,X.width,X.height,T.depth,0,V,oe,X.data)}else{Ee&&Pe&&t.texStorage2D(r.TEXTURE_2D,W,xe,ue[0].width,ue[0].height);for(let le=0,ve=ue.length;le<ve;le++)X=ue[le],A.format!==On?V!==null?Ee?t.compressedTexSubImage2D(r.TEXTURE_2D,le,0,0,X.width,X.height,V,X.data):t.compressedTexImage2D(r.TEXTURE_2D,le,xe,X.width,X.height,0,X.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ee?t.texSubImage2D(r.TEXTURE_2D,le,0,0,X.width,X.height,V,oe,X.data):t.texImage2D(r.TEXTURE_2D,le,xe,X.width,X.height,0,V,oe,X.data)}else if(A.isDataArrayTexture)Ee?(Pe&&t.texStorage3D(r.TEXTURE_2D_ARRAY,W,xe,T.width,T.height,T.depth),t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,T.width,T.height,T.depth,V,oe,T.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,xe,T.width,T.height,T.depth,0,V,oe,T.data);else if(A.isData3DTexture)Ee?(Pe&&t.texStorage3D(r.TEXTURE_3D,W,xe,T.width,T.height,T.depth),t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,T.width,T.height,T.depth,V,oe,T.data)):t.texImage3D(r.TEXTURE_3D,0,xe,T.width,T.height,T.depth,0,V,oe,T.data);else if(A.isFramebufferTexture){if(Pe)if(Ee)t.texStorage2D(r.TEXTURE_2D,W,xe,T.width,T.height);else{let le=T.width,ve=T.height;for(let Fe=0;Fe<W;Fe++)t.texImage2D(r.TEXTURE_2D,Fe,xe,le,ve,0,V,oe,null),le>>=1,ve>>=1}}else if(ue.length>0&&se){Ee&&Pe&&t.texStorage2D(r.TEXTURE_2D,W,xe,ue[0].width,ue[0].height);for(let le=0,ve=ue.length;le<ve;le++)X=ue[le],Ee?t.texSubImage2D(r.TEXTURE_2D,le,0,0,V,oe,X):t.texImage2D(r.TEXTURE_2D,le,xe,V,oe,X);A.generateMipmaps=!1}else Ee?(Pe&&t.texStorage2D(r.TEXTURE_2D,W,xe,T.width,T.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,V,oe,T)):t.texImage2D(r.TEXTURE_2D,0,xe,V,oe,T);x(A,se)&&g(K),O.__version=Y.version,A.onUpdate&&A.onUpdate(A)}w.__version=A.version}function ie(w,A,F,K,I,Y){let O=s.convert(F.format,F.colorSpace),B=s.convert(F.type),z=y(F.internalFormat,O,B,F.colorSpace);if(!n.get(A).__hasExternalTextures){let te=Math.max(1,A.width>>Y),ee=Math.max(1,A.height>>Y);I===r.TEXTURE_3D||I===r.TEXTURE_2D_ARRAY?t.texImage3D(I,Y,z,te,ee,A.depth,0,O,B,null):t.texImage2D(I,Y,z,te,ee,0,O,B,null)}t.bindFramebuffer(r.FRAMEBUFFER,w),Z(A)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,K,I,n.get(F).__webglTexture,0,H(A)):(I===r.TEXTURE_2D||I>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&I<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,K,I,n.get(F).__webglTexture,Y),t.bindFramebuffer(r.FRAMEBUFFER,null)}function G(w,A,F){if(r.bindRenderbuffer(r.RENDERBUFFER,w),A.depthBuffer&&!A.stencilBuffer){let K=o===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(F||Z(A)){let I=A.depthTexture;I&&I.isDepthTexture&&(I.type===ai?K=r.DEPTH_COMPONENT32F:I.type===Ti&&(K=r.DEPTH_COMPONENT24));let Y=H(A);Z(A)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Y,K,A.width,A.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,Y,K,A.width,A.height)}else r.renderbufferStorage(r.RENDERBUFFER,K,A.width,A.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,w)}else if(A.depthBuffer&&A.stencilBuffer){let K=H(A);F&&Z(A)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,K,r.DEPTH24_STENCIL8,A.width,A.height):Z(A)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,K,r.DEPTH24_STENCIL8,A.width,A.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,A.width,A.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,w)}else{let K=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let I=0;I<K.length;I++){let Y=K[I],O=s.convert(Y.format,Y.colorSpace),B=s.convert(Y.type),z=y(Y.internalFormat,O,B,Y.colorSpace),te=H(A);F&&Z(A)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,te,z,A.width,A.height):Z(A)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,te,z,A.width,A.height):r.renderbufferStorage(r.RENDERBUFFER,z,A.width,A.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function J(w){let A=n.get(w),F=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!A.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");(function(K,I){if(I&&I.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,K),!I.depthTexture||!I.depthTexture.isDepthTexture)throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");n.get(I.depthTexture).__webglTexture&&I.depthTexture.image.width===I.width&&I.depthTexture.image.height===I.height||(I.depthTexture.image.width=I.width,I.depthTexture.image.height=I.height,I.depthTexture.needsUpdate=!0),L(I.depthTexture,0);let Y=n.get(I.depthTexture).__webglTexture,O=H(I);if(I.depthTexture.format===hr)Z(I)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Y,0,O):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Y,0);else{if(I.depthTexture.format!==hs)throw new Error("Unknown depthTexture format");Z(I)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Y,0,O):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Y,0)}})(A.__webglFramebuffer,w)}else if(F){A.__webglDepthbuffer=[];for(let K=0;K<6;K++)t.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer[K]),A.__webglDepthbuffer[K]=r.createRenderbuffer(),G(A.__webglDepthbuffer[K],w,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=r.createRenderbuffer(),G(A.__webglDepthbuffer,w,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function H(w){return Math.min(i.maxSamples,w.samples)}function Z(w){let A=n.get(w);return o&&w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function ye(w,A){let F=w.colorSpace,K=w.format,I=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||w.format===Cc||F!==Bt&&F!==Wn&&(Qe.getTransfer(F)===ht?o===!1?e.has("EXT_sRGB")===!0&&K===On?(w.format=Cc,w.minFilter=rn,w.generateMipmaps=!1):A=Po.sRGBToLinear(A):K===On&&I===lr||console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),A}this.allocateTextureUnit=function(){let w=M;return w>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+i.maxTextures),M+=1,w},this.resetTextureUnits=function(){M=0},this.setTexture2D=L,this.setTexture2DArray=function(w,A){let F=n.get(w);w.version>0&&F.__version!==w.version?he(F,w,A):t.bindTexture(r.TEXTURE_2D_ARRAY,F.__webglTexture,r.TEXTURE0+A)},this.setTexture3D=function(w,A){let F=n.get(w);w.version>0&&F.__version!==w.version?he(F,w,A):t.bindTexture(r.TEXTURE_3D,F.__webglTexture,r.TEXTURE0+A)},this.setTextureCube=function(w,A){let F=n.get(w);w.version>0&&F.__version!==w.version?function(K,I,Y){if(I.image.length!==6)return;let O=Q(K,I),B=I.source;t.bindTexture(r.TEXTURE_CUBE_MAP,K.__webglTexture,r.TEXTURE0+Y);let z=n.get(B);if(B.version!==z.__version||O===!0){t.activeTexture(r.TEXTURE0+Y);let te=Qe.getPrimaries(Qe.workingColorSpace),ee=I.colorSpace===Wn?null:Qe.getPrimaries(I.colorSpace),T=I.colorSpace===Wn||te===ee?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,I.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,I.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,T);let se=I.isCompressedTexture||I.image[0].isCompressedTexture,V=I.image[0]&&I.image[0].isDataTexture,X=[];for(let pe=0;pe<6;pe++)X[pe]=se||V?V?I.image[pe].image:I.image[pe]:v(I.image[pe],!1,!0,i.maxCubemapSize),X[pe]=ye(I,X[pe]);let oe=X[0],xe=f(oe)||o,ue=s.convert(I.format,I.colorSpace),Ee=s.convert(I.type),Pe=y(I.internalFormat,ue,Ee,I.colorSpace),W=o&&I.isVideoTexture!==!0,le=z.__version===void 0||O===!0,ve,Fe=_(I,oe,xe);if(U(r.TEXTURE_CUBE_MAP,I,xe),se){W&&le&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Fe,Pe,oe.width,oe.height);for(let pe=0;pe<6;pe++){ve=X[pe].mipmaps;for(let de=0;de<ve.length;de++){let be=ve[de];I.format!==On?ue!==null?W?t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,de,0,0,be.width,be.height,ue,be.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,de,Pe,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,de,0,0,be.width,be.height,ue,Ee,be.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,de,Pe,be.width,be.height,0,ue,Ee,be.data)}}}else{ve=I.mipmaps,W&&le&&(ve.length>0&&Fe++,t.texStorage2D(r.TEXTURE_CUBE_MAP,Fe,Pe,X[0].width,X[0].height));for(let pe=0;pe<6;pe++)if(V){W?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,X[pe].width,X[pe].height,ue,Ee,X[pe].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,Pe,X[pe].width,X[pe].height,0,ue,Ee,X[pe].data);for(let de=0;de<ve.length;de++){let be=ve[de].image[pe].image;W?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,de+1,0,0,be.width,be.height,ue,Ee,be.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,de+1,Pe,be.width,be.height,0,ue,Ee,be.data)}}else{W?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,ue,Ee,X[pe]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,Pe,ue,Ee,X[pe]);for(let de=0;de<ve.length;de++){let be=ve[de];W?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,de+1,0,0,ue,Ee,be.image[pe]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,de+1,Pe,ue,Ee,be.image[pe])}}}x(I,xe)&&g(r.TEXTURE_CUBE_MAP),z.__version=B.version,I.onUpdate&&I.onUpdate(I)}K.__version=I.version}(F,w,A):t.bindTexture(r.TEXTURE_CUBE_MAP,F.__webglTexture,r.TEXTURE0+A)},this.rebindTextures=function(w,A,F){let K=n.get(w);A!==void 0&&ie(K.__webglFramebuffer,w,w.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),F!==void 0&&J(w)},this.setupRenderTarget=function(w){let A=w.texture,F=n.get(w),K=n.get(A);w.addEventListener("dispose",S),w.isWebGLMultipleRenderTargets!==!0&&(K.__webglTexture===void 0&&(K.__webglTexture=r.createTexture()),K.__version=A.version,a.memory.textures++);let I=w.isWebGLCubeRenderTarget===!0,Y=w.isWebGLMultipleRenderTargets===!0,O=f(w)||o;if(I){F.__webglFramebuffer=[];for(let B=0;B<6;B++)if(o&&A.mipmaps&&A.mipmaps.length>0){F.__webglFramebuffer[B]=[];for(let z=0;z<A.mipmaps.length;z++)F.__webglFramebuffer[B][z]=r.createFramebuffer()}else F.__webglFramebuffer[B]=r.createFramebuffer()}else{if(o&&A.mipmaps&&A.mipmaps.length>0){F.__webglFramebuffer=[];for(let B=0;B<A.mipmaps.length;B++)F.__webglFramebuffer[B]=r.createFramebuffer()}else F.__webglFramebuffer=r.createFramebuffer();if(Y)if(i.drawBuffers){let B=w.texture;for(let z=0,te=B.length;z<te;z++){let ee=n.get(B[z]);ee.__webglTexture===void 0&&(ee.__webglTexture=r.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&w.samples>0&&Z(w)===!1){let B=Y?A:[A];F.__webglMultisampledFramebuffer=r.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let z=0;z<B.length;z++){let te=B[z];F.__webglColorRenderbuffer[z]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,F.__webglColorRenderbuffer[z]);let ee=s.convert(te.format,te.colorSpace),T=s.convert(te.type),se=y(te.internalFormat,ee,T,te.colorSpace,w.isXRRenderTarget===!0),V=H(w);r.renderbufferStorageMultisample(r.RENDERBUFFER,V,se,w.width,w.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+z,r.RENDERBUFFER,F.__webglColorRenderbuffer[z])}r.bindRenderbuffer(r.RENDERBUFFER,null),w.depthBuffer&&(F.__webglDepthRenderbuffer=r.createRenderbuffer(),G(F.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(I){t.bindTexture(r.TEXTURE_CUBE_MAP,K.__webglTexture),U(r.TEXTURE_CUBE_MAP,A,O);for(let B=0;B<6;B++)if(o&&A.mipmaps&&A.mipmaps.length>0)for(let z=0;z<A.mipmaps.length;z++)ie(F.__webglFramebuffer[B][z],w,A,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+B,z);else ie(F.__webglFramebuffer[B],w,A,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+B,0);x(A,O)&&g(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Y){let B=w.texture;for(let z=0,te=B.length;z<te;z++){let ee=B[z],T=n.get(ee);t.bindTexture(r.TEXTURE_2D,T.__webglTexture),U(r.TEXTURE_2D,ee,O),ie(F.__webglFramebuffer,w,ee,r.COLOR_ATTACHMENT0+z,r.TEXTURE_2D,0),x(ee,O)&&g(r.TEXTURE_2D)}t.unbindTexture()}else{let B=r.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(o?B=w.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(B,K.__webglTexture),U(B,A,O),o&&A.mipmaps&&A.mipmaps.length>0)for(let z=0;z<A.mipmaps.length;z++)ie(F.__webglFramebuffer[z],w,A,r.COLOR_ATTACHMENT0,B,z);else ie(F.__webglFramebuffer,w,A,r.COLOR_ATTACHMENT0,B,0);x(A,O)&&g(B),t.unbindTexture()}w.depthBuffer&&J(w)},this.updateRenderTargetMipmap=function(w){let A=f(w)||o,F=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let K=0,I=F.length;K<I;K++){let Y=F[K];if(x(Y,A)){let O=w.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,B=n.get(Y).__webglTexture;t.bindTexture(O,B),g(O),t.unbindTexture()}}},this.updateMultisampleRenderTarget=function(w){if(o&&w.samples>0&&Z(w)===!1){let A=w.isWebGLMultipleRenderTargets?w.texture:[w.texture],F=w.width,K=w.height,I=r.COLOR_BUFFER_BIT,Y=[],O=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,B=n.get(w),z=w.isWebGLMultipleRenderTargets===!0;if(z)for(let te=0;te<A.length;te++)t.bindFramebuffer(r.FRAMEBUFFER,B.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+te,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,B.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+te,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,B.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,B.__webglFramebuffer);for(let te=0;te<A.length;te++){Y.push(r.COLOR_ATTACHMENT0+te),w.depthBuffer&&Y.push(O);let ee=B.__ignoreDepthValues!==void 0&&B.__ignoreDepthValues;if(ee===!1&&(w.depthBuffer&&(I|=r.DEPTH_BUFFER_BIT),w.stencilBuffer&&(I|=r.STENCIL_BUFFER_BIT)),z&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,B.__webglColorRenderbuffer[te]),ee===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[O]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[O])),z){let T=n.get(A[te]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,T,0)}r.blitFramebuffer(0,0,F,K,0,0,F,K,I,r.NEAREST),c&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Y)}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),z)for(let te=0;te<A.length;te++){t.bindFramebuffer(r.FRAMEBUFFER,B.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+te,r.RENDERBUFFER,B.__webglColorRenderbuffer[te]);let ee=n.get(A[te]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,B.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+te,r.TEXTURE_2D,ee,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,B.__webglMultisampledFramebuffer)}},this.setupDepthRenderbuffer=J,this.setupFrameBufferTexture=ie,this.useMultisampledRTT=Z}function bg(r,e,t){let n=t.isWebGL2;return{convert:function(i,s=""){let a,o=Qe.getTransfer(s);if(i===lr)return r.UNSIGNED_BYTE;if(i===wp)return r.UNSIGNED_SHORT_4_4_4_4;if(i===Ap)return r.UNSIGNED_SHORT_5_5_5_1;if(i===1010)return r.BYTE;if(i===1011)return r.SHORT;if(i===wh)return r.UNSIGNED_SHORT;if(i===Tp)return r.INT;if(i===Ti)return r.UNSIGNED_INT;if(i===ai)return r.FLOAT;if(i===Bn)return n?r.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(i===1021)return r.ALPHA;if(i===On)return r.RGBA;if(i===1024)return r.LUMINANCE;if(i===1025)return r.LUMINANCE_ALPHA;if(i===hr)return r.DEPTH_COMPONENT;if(i===hs)return r.DEPTH_STENCIL;if(i===Cc)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(i===1028)return r.RED;if(i===Rp)return r.RED_INTEGER;if(i===1030)return r.RG;if(i===Cp)return r.RG_INTEGER;if(i===Pp)return r.RGBA_INTEGER;if(i===kl||i===Fl||i===Hl||i===zl)if(o===ht){if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a===null)return null;if(i===kl)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Fl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Hl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===zl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{if(a=e.get("WEBGL_compressed_texture_s3tc"),a===null)return null;if(i===kl)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Fl)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Hl)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===zl)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(i===Nu||i===Uu||i===Ou||i===Bu){if(a=e.get("WEBGL_compressed_texture_pvrtc"),a===null)return null;if(i===Nu)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Uu)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ou)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Bu)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(i===Lp)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(i===ku||i===Fu){if(a=e.get("WEBGL_compressed_texture_etc"),a===null)return null;if(i===ku)return o===ht?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===Fu)return o===ht?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}if(i===Hu||i===zu||i===Gu||i===Vu||i===Wu||i===Xu||i===ju||i===qu||i===Yu||i===Zu||i===Ku||i===Ju||i===$u||i===Qu){if(a=e.get("WEBGL_compressed_texture_astc"),a===null)return null;if(i===Hu)return o===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===zu)return o===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Gu)return o===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Vu)return o===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Wu)return o===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Xu)return o===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ju)return o===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===qu)return o===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Yu)return o===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Zu)return o===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ku)return o===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ju)return o===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===$u)return o===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Qu)return o===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}if(i===Gl||i===ed||i===td){if(a=e.get("EXT_texture_compression_bptc"),a===null)return null;if(i===Gl)return o===ht?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ed)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===td)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}if(i===36283||i===nd||i===id||i===rd){if(a=e.get("EXT_texture_compression_rgtc"),a===null)return null;if(i===Gl)return a.COMPRESSED_RED_RGTC1_EXT;if(i===nd)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===id)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===rd)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}return i===cr?n?r.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[i]!==void 0?r[i]:null}}}var Wc=class extends Tt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Ae=class extends mt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Eg={type:"move"},ia=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ae,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ae,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new E,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new E),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ae,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new E,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new E),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let v of e.hand.values()){let f=t.getJointPose(v,n),x=this._getHandJoint(c,v);f!==null&&(x.matrix.fromArray(f.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=f.radius),x.visible=f!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,m=.005;c.inputState.pinching&&d>p+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Eg)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Ae;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Xc=class extends Pi{constructor(e,t){super();let n=this,i=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,m=null,v=t.getContextAttributes(),f=null,x=null,g=[],y=[],_=new re,R=null,b=new Tt;b.layers.enable(1),b.viewport=new ut;let S=new Tt;S.layers.enable(2),S.viewport=new ut;let D=[b,S],M=new Wc;M.layers.enable(1),M.layers.enable(2);let L=null,N=null;function C(H){let Z=y.indexOf(H.inputSource);if(Z===-1)return;let ye=g[Z];ye!==void 0&&(ye.update(H.inputSource,H.frame,c||a),ye.dispatchEvent({type:H.type,data:H.inputSource}))}function k(){i.removeEventListener("select",C),i.removeEventListener("selectstart",C),i.removeEventListener("selectend",C),i.removeEventListener("squeeze",C),i.removeEventListener("squeezestart",C),i.removeEventListener("squeezeend",C),i.removeEventListener("end",k),i.removeEventListener("inputsourceschange",U);for(let H=0;H<g.length;H++){let Z=y[H];Z!==null&&(y[H]=null,g[H].disconnect(Z))}L=null,N=null,e.setRenderTarget(f),p=null,d=null,u=null,i=null,x=null,J.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(_.width,_.height,!1),n.dispatchEvent({type:"sessionend"})}function U(H){for(let Z=0;Z<H.removed.length;Z++){let ye=H.removed[Z],w=y.indexOf(ye);w>=0&&(y[w]=null,g[w].disconnect(ye))}for(let Z=0;Z<H.added.length;Z++){let ye=H.added[Z],w=y.indexOf(ye);if(w===-1){for(let F=0;F<g.length;F++){if(F>=y.length){y.push(ye),w=F;break}if(y[F]===null){y[F]=ye,w=F;break}}if(w===-1)break}let A=g[w];A&&A.connect(ye)}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let Z=g[H];return Z===void 0&&(Z=new ia,g[H]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(H){let Z=g[H];return Z===void 0&&(Z=new ia,g[H]=Z),Z.getGripSpace()},this.getHand=function(H){let Z=g[H];return Z===void 0&&(Z=new ia,g[H]=Z),Z.getHandSpace()},this.setFramebufferScaleFactor=function(H){s=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){o=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(H){if(i=H,i!==null){if(f=e.getRenderTarget(),i.addEventListener("select",C),i.addEventListener("selectstart",C),i.addEventListener("selectend",C),i.addEventListener("squeeze",C),i.addEventListener("squeezestart",C),i.addEventListener("squeezeend",C),i.addEventListener("end",k),i.addEventListener("inputsourceschange",U),v.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(_),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let Z={antialias:i.renderState.layers!==void 0||v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(i,t,Z),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new en(p.framebufferWidth,p.framebufferHeight,{format:On,type:lr,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let Z=null,ye=null,w=null;v.depth&&(w=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Z=v.stencil?hs:hr,ye=v.stencil?cr:Ti);let A={colorFormat:t.RGBA8,depthFormat:w,scaleFactor:s};u=new XRWebGLBinding(i,t),d=u.createProjectionLayer(A),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new en(d.textureWidth,d.textureHeight,{format:On,type:lr,depthTexture:new ko(d.textureWidth,d.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0}),e.properties.get(x).__ignoreDepthValues=d.ignoreDepthValues}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),J.setContext(i),J.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};let Q=new E,he=new E;function ie(H,Z){Z===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(Z.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(i===null)return;M.near=S.near=b.near=H.near,M.far=S.far=b.far=H.far,L===M.near&&N===M.far||(i.updateRenderState({depthNear:M.near,depthFar:M.far}),L=M.near,N=M.far);let Z=H.parent,ye=M.cameras;ie(M,Z);for(let w=0;w<ye.length;w++)ie(ye[w],Z);ye.length===2?function(w,A,F){Q.setFromMatrixPosition(A.matrixWorld),he.setFromMatrixPosition(F.matrixWorld);let K=Q.distanceTo(he),I=A.projectionMatrix.elements,Y=F.projectionMatrix.elements,O=I[14]/(I[10]-1),B=I[14]/(I[10]+1),z=(I[9]+1)/I[5],te=(I[9]-1)/I[5],ee=(I[8]-1)/I[0],T=(Y[8]+1)/Y[0],se=O*ee,V=O*T,X=K/(-ee+T),oe=X*-ee;A.matrixWorld.decompose(w.position,w.quaternion,w.scale),w.translateX(oe),w.translateZ(X),w.matrixWorld.compose(w.position,w.quaternion,w.scale),w.matrixWorldInverse.copy(w.matrixWorld).invert();let xe=O+X,ue=B+X,Ee=se-oe,Pe=V+(K-oe),W=z*B/ue*xe,le=te*B/ue*xe;w.projectionMatrix.makePerspective(Ee,Pe,W,le,xe,ue),w.projectionMatrixInverse.copy(w.projectionMatrix).invert()}(M,b,S):M.projectionMatrix.copy(b.projectionMatrix),function(w,A,F){F===null?w.matrix.copy(A.matrixWorld):(w.matrix.copy(F.matrixWorld),w.matrix.invert(),w.matrix.multiply(A.matrixWorld)),w.matrix.decompose(w.position,w.quaternion,w.scale),w.updateMatrixWorld(!0),w.projectionMatrix.copy(A.projectionMatrix),w.projectionMatrixInverse.copy(A.projectionMatrixInverse),w.isPerspectiveCamera&&(w.fov=2*ps*Math.atan(1/w.projectionMatrix.elements[5]),w.zoom=1)}(H,M,Z)},this.getCamera=function(){return M},this.getFoveation=function(){if(d!==null||p!==null)return l},this.setFoveation=function(H){l=H,d!==null&&(d.fixedFoveation=H),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=H)};let G=null,J=new kp;J.setAnimationLoop(function(H,Z){if(h=Z.getViewerPose(c||a),m=Z,h!==null){let ye=h.views;p!==null&&(e.setRenderTargetFramebuffer(x,p.framebuffer),e.setRenderTarget(x));let w=!1;ye.length!==M.cameras.length&&(M.cameras.length=0,w=!0);for(let A=0;A<ye.length;A++){let F=ye[A],K=null;if(p!==null)K=p.getViewport(F);else{let Y=u.getViewSubImage(d,F);K=Y.viewport,A===0&&(e.setRenderTargetTextures(x,Y.colorTexture,d.ignoreDepthValues?void 0:Y.depthStencilTexture),e.setRenderTarget(x))}let I=D[A];I===void 0&&(I=new Tt,I.layers.enable(A),I.viewport=new ut,D[A]=I),I.matrix.fromArray(F.transform.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale),I.projectionMatrix.fromArray(F.projectionMatrix),I.projectionMatrixInverse.copy(I.projectionMatrix).invert(),I.viewport.set(K.x,K.y,K.width,K.height),A===0&&(M.matrix.copy(I.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),w===!0&&M.cameras.push(I)}}for(let ye=0;ye<g.length;ye++){let w=y[ye],A=g[ye];w!==null&&A!==void 0&&A.update(w,Z,c||a)}G&&G(H,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),m=null}),this.setAnimationLoop=function(H){G=H},this.dispose=function(){}}};function Sg(r,e){function t(i,s){i.matrixAutoUpdate===!0&&i.updateMatrix(),s.value.copy(i.matrix)}function n(i,s){i.opacity.value=s.opacity,s.color&&i.diffuse.value.copy(s.color),s.emissive&&i.emissive.value.copy(s.emissive).multiplyScalar(s.emissiveIntensity),s.map&&(i.map.value=s.map,t(s.map,i.mapTransform)),s.alphaMap&&(i.alphaMap.value=s.alphaMap,t(s.alphaMap,i.alphaMapTransform)),s.bumpMap&&(i.bumpMap.value=s.bumpMap,t(s.bumpMap,i.bumpMapTransform),i.bumpScale.value=s.bumpScale,s.side===Vt&&(i.bumpScale.value*=-1)),s.normalMap&&(i.normalMap.value=s.normalMap,t(s.normalMap,i.normalMapTransform),i.normalScale.value.copy(s.normalScale),s.side===Vt&&i.normalScale.value.negate()),s.displacementMap&&(i.displacementMap.value=s.displacementMap,t(s.displacementMap,i.displacementMapTransform),i.displacementScale.value=s.displacementScale,i.displacementBias.value=s.displacementBias),s.emissiveMap&&(i.emissiveMap.value=s.emissiveMap,t(s.emissiveMap,i.emissiveMapTransform)),s.specularMap&&(i.specularMap.value=s.specularMap,t(s.specularMap,i.specularMapTransform)),s.alphaTest>0&&(i.alphaTest.value=s.alphaTest);let a=e.get(s).envMap;if(a&&(i.envMap.value=a,i.flipEnvMap.value=a.isCubeTexture&&a.isRenderTargetTexture===!1?-1:1,i.reflectivity.value=s.reflectivity,i.ior.value=s.ior,i.refractionRatio.value=s.refractionRatio),s.lightMap){i.lightMap.value=s.lightMap;let o=r._useLegacyLights===!0?Math.PI:1;i.lightMapIntensity.value=s.lightMapIntensity*o,t(s.lightMap,i.lightMapTransform)}s.aoMap&&(i.aoMap.value=s.aoMap,i.aoMapIntensity.value=s.aoMapIntensity,t(s.aoMap,i.aoMapTransform))}return{refreshFogUniforms:function(i,s){s.color.getRGB(i.fogColor.value,Bp(r)),s.isFog?(i.fogNear.value=s.near,i.fogFar.value=s.far):s.isFogExp2&&(i.fogDensity.value=s.density)},refreshMaterialUniforms:function(i,s,a,o,l){s.isMeshBasicMaterial||s.isMeshLambertMaterial?n(i,s):s.isMeshToonMaterial?(n(i,s),function(c,h){h.gradientMap&&(c.gradientMap.value=h.gradientMap)}(i,s)):s.isMeshPhongMaterial?(n(i,s),function(c,h){c.specular.value.copy(h.specular),c.shininess.value=Math.max(h.shininess,1e-4)}(i,s)):s.isMeshStandardMaterial?(n(i,s),function(c,h){c.metalness.value=h.metalness,h.metalnessMap&&(c.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,c.metalnessMapTransform)),c.roughness.value=h.roughness,h.roughnessMap&&(c.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,c.roughnessMapTransform)),e.get(h).envMap&&(c.envMapIntensity.value=h.envMapIntensity)}(i,s),s.isMeshPhysicalMaterial&&function(c,h,u){c.ior.value=h.ior,h.sheen>0&&(c.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),c.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(c.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,c.sheenColorMapTransform)),h.sheenRoughnessMap&&(c.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,c.sheenRoughnessMapTransform))),h.clearcoat>0&&(c.clearcoat.value=h.clearcoat,c.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(c.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,c.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(c.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,c.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(c.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,c.clearcoatNormalMapTransform),c.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Vt&&c.clearcoatNormalScale.value.negate())),h.iridescence>0&&(c.iridescence.value=h.iridescence,c.iridescenceIOR.value=h.iridescenceIOR,c.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],c.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(c.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,c.iridescenceMapTransform)),h.iridescenceThicknessMap&&(c.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,c.iridescenceThicknessMapTransform))),h.transmission>0&&(c.transmission.value=h.transmission,c.transmissionSamplerMap.value=u.texture,c.transmissionSamplerSize.value.set(u.width,u.height),h.transmissionMap&&(c.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,c.transmissionMapTransform)),c.thickness.value=h.thickness,h.thicknessMap&&(c.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,c.thicknessMapTransform)),c.attenuationDistance.value=h.attenuationDistance,c.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(c.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(c.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,c.anisotropyMapTransform))),c.specularIntensity.value=h.specularIntensity,c.specularColor.value.copy(h.specularColor),h.specularColorMap&&(c.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,c.specularColorMapTransform)),h.specularIntensityMap&&(c.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,c.specularIntensityMapTransform))}(i,s,l)):s.isMeshMatcapMaterial?(n(i,s),function(c,h){h.matcap&&(c.matcap.value=h.matcap)}(i,s)):s.isMeshDepthMaterial?n(i,s):s.isMeshDistanceMaterial?(n(i,s),function(c,h){let u=e.get(h).light;c.referencePosition.value.setFromMatrixPosition(u.matrixWorld),c.nearDistance.value=u.shadow.camera.near,c.farDistance.value=u.shadow.camera.far}(i,s)):s.isMeshNormalMaterial?n(i,s):s.isLineBasicMaterial?(function(c,h){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,h.map&&(c.map.value=h.map,t(h.map,c.mapTransform))}(i,s),s.isLineDashedMaterial&&function(c,h){c.dashSize.value=h.dashSize,c.totalSize.value=h.dashSize+h.gapSize,c.scale.value=h.scale}(i,s)):s.isPointsMaterial?function(c,h,u,d){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,c.size.value=h.size*u,c.scale.value=.5*d,h.map&&(c.map.value=h.map,t(h.map,c.uvTransform)),h.alphaMap&&(c.alphaMap.value=h.alphaMap,t(h.alphaMap,c.alphaMapTransform)),h.alphaTest>0&&(c.alphaTest.value=h.alphaTest)}(i,s,a,o):s.isSpriteMaterial?function(c,h){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,c.rotation.value=h.rotation,h.map&&(c.map.value=h.map,t(h.map,c.mapTransform)),h.alphaMap&&(c.alphaMap.value=h.alphaMap,t(h.alphaMap,c.alphaMapTransform)),h.alphaTest>0&&(c.alphaTest.value=h.alphaTest)}(i,s):s.isShadowMaterial?(i.color.value.copy(s.color),i.opacity.value=s.opacity):s.isShaderMaterial&&(s.uniformsNeedUpdate=!1)}}}function Tg(r,e,t,n){let i={},s={},a=[],o=t.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(u,d,p,m){let v=u.value,f=d+"_"+p;if(m[f]===void 0)return m[f]=typeof v=="number"||typeof v=="boolean"?v:v.clone(),!0;{let x=m[f];if(typeof v=="number"||typeof v=="boolean"){if(x!==v)return m[f]=v,!0}else if(x.equals(v)===!1)return x.copy(v),!0}return!1}function c(u){let d={boundary:0,storage:0};return typeof u=="number"||typeof u=="boolean"?(d.boundary=4,d.storage=4):u.isVector2?(d.boundary=8,d.storage=8):u.isVector3||u.isColor?(d.boundary=16,d.storage=12):u.isVector4?(d.boundary=16,d.storage=16):u.isMatrix3?(d.boundary=48,d.storage=48):u.isMatrix4?(d.boundary=64,d.storage=64):u.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",u),d}function h(u){let d=u.target;d.removeEventListener("dispose",h);let p=a.indexOf(d.__bindingPointIndex);a.splice(p,1),r.deleteBuffer(i[d.id]),delete i[d.id],delete s[d.id]}return{bind:function(u,d){let p=d.program;n.uniformBlockBinding(u,p)},update:function(u,d){let p=i[u.id];p===void 0&&(function(f){let x=f.uniforms,g=0,y=16;for(let R=0,b=x.length;R<b;R++){let S=Array.isArray(x[R])?x[R]:[x[R]];for(let D=0,M=S.length;D<M;D++){let L=S[D],N=Array.isArray(L.value)?L.value:[L.value];for(let C=0,k=N.length;C<k;C++){let U=c(N[C]),Q=g%y;Q!==0&&y-Q<U.boundary&&(g+=y-Q),L.__data=new Float32Array(U.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=g,g+=U.storage}}}let _=g%y;_>0&&(g+=y-_),f.__size=g,f.__cache={}}(u),p=function(f){let x=function(){for(let R=0;R<o;R++)if(a.indexOf(R)===-1)return a.push(R),R;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}();f.__bindingPointIndex=x;let g=r.createBuffer(),y=f.__size,_=f.usage;return r.bindBuffer(r.UNIFORM_BUFFER,g),r.bufferData(r.UNIFORM_BUFFER,y,_),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,x,g),g}(u),i[u.id]=p,u.addEventListener("dispose",h));let m=d.program;n.updateUBOMapping(u,m);let v=e.render.frame;s[u.id]!==v&&(function(f){let x=i[f.id],g=f.uniforms,y=f.__cache;r.bindBuffer(r.UNIFORM_BUFFER,x);for(let _=0,R=g.length;_<R;_++){let b=Array.isArray(g[_])?g[_]:[g[_]];for(let S=0,D=b.length;S<D;S++){let M=b[S];if(l(M,_,S,y)===!0){let L=M.__offset,N=Array.isArray(M.value)?M.value:[M.value],C=0;for(let k=0;k<N.length;k++){let U=N[k],Q=c(U);typeof U=="number"||typeof U=="boolean"?(M.__data[0]=U,r.bufferSubData(r.UNIFORM_BUFFER,L+C,M.__data)):U.isMatrix3?(M.__data[0]=U.elements[0],M.__data[1]=U.elements[1],M.__data[2]=U.elements[2],M.__data[3]=0,M.__data[4]=U.elements[3],M.__data[5]=U.elements[4],M.__data[6]=U.elements[5],M.__data[7]=0,M.__data[8]=U.elements[6],M.__data[9]=U.elements[7],M.__data[10]=U.elements[8],M.__data[11]=0):(U.toArray(M.__data,C),C+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,L,M.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}(u),s[u.id]=v)},dispose:function(){for(let u in i)r.deleteBuffer(i[u]);a=[],i={},s={}}}}var ca=class{constructor(e={}){let{canvas:t=Uf(),context:n=null,depth:i=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e,d;this.isWebGLRenderer=!0,d=n!==null?n.getContextAttributes().alpha:a;let p=new Uint32Array(4),m=new Int32Array(4),v=null,f=null,x=[],g=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=st,this._useLegacyLights=!1,this.toneMapping=Ri,this.toneMappingExposure=1;let y=this,_=!1,R=0,b=0,S=null,D=-1,M=null,L=new ut,N=new ut,C=null,k=new _e(0),U=0,Q=t.width,he=t.height,ie=1,G=null,J=null,H=new ut(0,0,Q,he),Z=new ut(0,0,Q,he),ye=!1,w=new gs,A=!1,F=!1,K=null,I=new Le,Y=new re,O=new E,B={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function z(){return S===null?ie:1}let te,ee,T,se,V,X,oe,xe,ue,Ee,Pe,W,le,ve,Fe,pe,de,be,rt,bt,Dt,Je,nt,Jt,q=n;function vi(P,j){for(let $=0;$<P.length;$++){let ce=P[$],ne=t.getContext(ce,j);if(ne!==null)return ne}return null}try{let P={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ec}`),t.addEventListener("webglcontextlost",Rn,!1),t.addEventListener("webglcontextrestored",Ur,!1),t.addEventListener("webglcontextcreationerror",Or,!1),q===null){let j=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&j.shift(),q=vi(j,P),q===null)throw vi(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&q instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),q.getShaderPrecisionFormat===void 0&&(q.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}function zn(){te=new am(q),ee=new nm(q,te,e),te.init(ee),Je=new bg(q,te,ee),T=new _g(q,te,ee),se=new cm(q),V=new ug,X=new Mg(q,te,T,V,ee,Je,se),oe=new rm(y),xe=new sm(y),ue=new $f(q,ee),nt=new em(q,te,ue,ee),Ee=new om(q,ue,se,nt),Pe=new pm(q,Ee,ue,se),rt=new dm(q,ee,X),pe=new im(V),W=new hg(y,oe,xe,te,ee,nt,pe),le=new Sg(y,V),ve=new pg,Fe=new yg(te,ee),be=new Qf(y,oe,xe,T,Pe,d,l),de=new xg(y,Pe,ee),Jt=new Tg(q,se,ee,T),bt=new tm(q,te,se,ee),Dt=new lm(q,te,se,ee),se.programs=W.programs,y.capabilities=ee,y.extensions=te,y.properties=V,y.renderLists=ve,y.shadowMap=de,y.state=T,y.info=se}zn();let Et=new Xc(y,q);function Rn(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),_=!0}function Ur(){console.log("THREE.WebGLRenderer: Context Restored."),_=!1;let P=se.autoReset,j=de.enabled,$=de.autoUpdate,ce=de.needsUpdate,ne=de.type;zn(),se.autoReset=P,de.enabled=j,de.autoUpdate=$,de.needsUpdate=ce,de.type=ne}function Or(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function $e(P){let j=P.target;j.removeEventListener("dispose",$e),function($){(function(ce){let ne=V.get(ce).programs;ne!==void 0&&(ne.forEach(function(Me){W.releaseProgram(Me)}),ce.isShaderMaterial&&W.releaseShaderCache(ce))})($),V.remove($)}(j)}function Nt(P,j,$){P.transparent===!0&&P.side===2&&P.forceSinglePass===!1?(P.side=Vt,P.needsUpdate=!0,ka(P,j,$),P.side=qn,P.needsUpdate=!0,ka(P,j,$),P.side=2):ka(P,j,$)}this.xr=Et,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){let P=te.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){let P=te.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return ie},this.setPixelRatio=function(P){P!==void 0&&(ie=P,this.setSize(Q,he,!1))},this.getSize=function(P){return P.set(Q,he)},this.setSize=function(P,j,$=!0){Et.isPresenting?console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting."):(Q=P,he=j,t.width=Math.floor(P*ie),t.height=Math.floor(j*ie),$===!0&&(t.style.width=P+"px",t.style.height=j+"px"),this.setViewport(0,0,P,j))},this.getDrawingBufferSize=function(P){return P.set(Q*ie,he*ie).floor()},this.setDrawingBufferSize=function(P,j,$){Q=P,he=j,ie=$,t.width=Math.floor(P*$),t.height=Math.floor(j*$),this.setViewport(0,0,P,j)},this.getCurrentViewport=function(P){return P.copy(L)},this.getViewport=function(P){return P.copy(H)},this.setViewport=function(P,j,$,ce){P.isVector4?H.set(P.x,P.y,P.z,P.w):H.set(P,j,$,ce),T.viewport(L.copy(H).multiplyScalar(ie).floor())},this.getScissor=function(P){return P.copy(Z)},this.setScissor=function(P,j,$,ce){P.isVector4?Z.set(P.x,P.y,P.z,P.w):Z.set(P,j,$,ce),T.scissor(N.copy(Z).multiplyScalar(ie).floor())},this.getScissorTest=function(){return ye},this.setScissorTest=function(P){T.setScissorTest(ye=P)},this.setOpaqueSort=function(P){G=P},this.setTransparentSort=function(P){J=P},this.getClearColor=function(P){return P.copy(be.getClearColor())},this.setClearColor=function(){be.setClearColor.apply(be,arguments)},this.getClearAlpha=function(){return be.getClearAlpha()},this.setClearAlpha=function(){be.setClearAlpha.apply(be,arguments)},this.clear=function(P=!0,j=!0,$=!0){let ce=0;if(P){let ne=!1;if(S!==null){let Me=S.texture.format;ne=Me===Pp||Me===Cp||Me===Rp}if(ne){let Me=S.texture.type,Ie=Me===lr||Me===Ti||Me===wh||Me===cr||Me===wp||Me===Ap,De=be.getClearColor(),Be=be.getClearAlpha(),He=De.r,We=De.g,je=De.b;Ie?(p[0]=He,p[1]=We,p[2]=je,p[3]=Be,q.clearBufferuiv(q.COLOR,0,p)):(m[0]=He,m[1]=We,m[2]=je,m[3]=Be,q.clearBufferiv(q.COLOR,0,m))}else ce|=q.COLOR_BUFFER_BIT}j&&(ce|=q.DEPTH_BUFFER_BIT),$&&(ce|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q.clear(ce)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Rn,!1),t.removeEventListener("webglcontextrestored",Ur,!1),t.removeEventListener("webglcontextcreationerror",Or,!1),ve.dispose(),Fe.dispose(),V.dispose(),oe.dispose(),xe.dispose(),Pe.dispose(),nt.dispose(),Jt.dispose(),W.dispose(),Et.dispose(),Et.removeEventListener("sessionstart",Ji),Et.removeEventListener("sessionend",Eu),K&&(K.dispose(),K=null),$i.stop()},this.renderBufferDirect=function(P,j,$,ce,ne,Me){j===null&&(j=B);let Ie=ne.isMesh&&ne.matrixWorld.determinant()<0,De=function(Ut,mn,nn,qe,Ze){mn.isScene!==!0&&(mn=B),X.resetTextureUnits();let zs=mn.fog,Nl=qe.isMeshStandardMaterial?mn.environment:null,bf=S===null?y.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:Bt,Fa=(qe.isMeshStandardMaterial?xe:oe).get(qe.envMap||Nl),Ef=qe.vertexColors===!0&&!!nn.attributes.color&&nn.attributes.color.itemSize===4,Sf=!!nn.attributes.tangent&&(!!qe.normalMap||qe.anisotropy>0),Tf=!!nn.morphAttributes.position,wf=!!nn.morphAttributes.normal,Af=!!nn.morphAttributes.color,Cu=Ri;qe.toneMapped&&(S!==null&&S.isXRRenderTarget!==!0||(Cu=y.toneMapping));let Pu=nn.morphAttributes.position||nn.morphAttributes.normal||nn.morphAttributes.color,Rf=Pu!==void 0?Pu.length:0,it=V.get(qe),Cf=f.state.lights;if(A===!0&&(F===!0||Ut!==M)){let gn=Ut===M&&qe.id===D;pe.setState(qe,Ut,gn)}let Pn=!1;qe.version===it.__version?it.needsLights&&it.lightsStateVersion!==Cf.state.version||it.outputColorSpace!==bf||Ze.isBatchedMesh&&it.batching===!1?Pn=!0:Ze.isBatchedMesh||it.batching!==!0?Ze.isInstancedMesh&&it.instancing===!1?Pn=!0:Ze.isInstancedMesh||it.instancing!==!0?Ze.isSkinnedMesh&&it.skinning===!1?Pn=!0:Ze.isSkinnedMesh||it.skinning!==!0?Ze.isInstancedMesh&&it.instancingColor===!0&&Ze.instanceColor===null||Ze.isInstancedMesh&&it.instancingColor===!1&&Ze.instanceColor!==null||it.envMap!==Fa||qe.fog===!0&&it.fog!==zs?Pn=!0:it.numClippingPlanes===void 0||it.numClippingPlanes===pe.numPlanes&&it.numIntersection===pe.numIntersection?(it.vertexAlphas!==Ef||it.vertexTangents!==Sf||it.morphTargets!==Tf||it.morphNormals!==wf||it.morphColors!==Af||it.toneMapping!==Cu||ee.isWebGL2===!0&&it.morphTargetsCount!==Rf)&&(Pn=!0):Pn=!0:Pn=!0:Pn=!0:Pn=!0:(Pn=!0,it.__version=qe.version);let er=it.currentProgram;Pn===!0&&(er=ka(qe,mn,Ze));let Lu=!1,Gs=!1,Ul=!1,Yt=er.getUniforms(),tr=it.uniforms;if(T.useProgram(er.program)&&(Lu=!0,Gs=!0,Ul=!0),qe.id!==D&&(D=qe.id,Gs=!0),Lu||M!==Ut){Yt.setValue(q,"projectionMatrix",Ut.projectionMatrix),Yt.setValue(q,"viewMatrix",Ut.matrixWorldInverse);let gn=Yt.map.cameraPosition;gn!==void 0&&gn.setValue(q,O.setFromMatrixPosition(Ut.matrixWorld)),ee.logarithmicDepthBuffer&&Yt.setValue(q,"logDepthBufFC",2/(Math.log(Ut.far+1)/Math.LN2)),(qe.isMeshPhongMaterial||qe.isMeshToonMaterial||qe.isMeshLambertMaterial||qe.isMeshBasicMaterial||qe.isMeshStandardMaterial||qe.isShaderMaterial)&&Yt.setValue(q,"isOrthographic",Ut.isOrthographicCamera===!0),M!==Ut&&(M=Ut,Gs=!0,Ul=!0)}if(Ze.isSkinnedMesh){Yt.setOptional(q,Ze,"bindMatrix"),Yt.setOptional(q,Ze,"bindMatrixInverse");let gn=Ze.skeleton;gn&&(ee.floatVertexTextures?(gn.boneTexture===null&&gn.computeBoneTexture(),Yt.setValue(q,"boneTexture",gn.boneTexture,X)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}Ze.isBatchedMesh&&(Yt.setOptional(q,Ze,"batchingTexture"),Yt.setValue(q,"batchingTexture",Ze._matricesTexture,X));let Ol=nn.morphAttributes;(Ol.position!==void 0||Ol.normal!==void 0||Ol.color!==void 0&&ee.isWebGL2===!0)&&rt.update(Ze,nn,er),(Gs||it.receiveShadow!==Ze.receiveShadow)&&(it.receiveShadow=Ze.receiveShadow,Yt.setValue(q,"receiveShadow",Ze.receiveShadow)),qe.isMeshGouraudMaterial&&qe.envMap!==null&&(tr.envMap.value=Fa,tr.flipEnvMap.value=Fa.isCubeTexture&&Fa.isRenderTargetTexture===!1?-1:1),Gs&&(Yt.setValue(q,"toneMappingExposure",y.toneMappingExposure),it.needsLights&&(Ln=Ul,(Gn=tr).ambientLightColor.needsUpdate=Ln,Gn.lightProbe.needsUpdate=Ln,Gn.directionalLights.needsUpdate=Ln,Gn.directionalLightShadows.needsUpdate=Ln,Gn.pointLights.needsUpdate=Ln,Gn.pointLightShadows.needsUpdate=Ln,Gn.spotLights.needsUpdate=Ln,Gn.spotLightShadows.needsUpdate=Ln,Gn.rectAreaLights.needsUpdate=Ln,Gn.hemisphereLights.needsUpdate=Ln),zs&&qe.fog===!0&&le.refreshFogUniforms(tr,zs),le.refreshMaterialUniforms(tr,qe,ie,he,K),os.upload(q,Au(it),tr,X));var Gn,Ln;if(qe.isShaderMaterial&&qe.uniformsNeedUpdate===!0&&(os.upload(q,Au(it),tr,X),qe.uniformsNeedUpdate=!1),qe.isSpriteMaterial&&Yt.setValue(q,"center",Ze.center),Yt.setValue(q,"modelViewMatrix",Ze.modelViewMatrix),Yt.setValue(q,"normalMatrix",Ze.normalMatrix),Yt.setValue(q,"modelMatrix",Ze.matrixWorld),qe.isShaderMaterial||qe.isRawShaderMaterial){let gn=qe.uniformsGroups;for(let Bl=0,Pf=gn.length;Bl<Pf;Bl++)if(ee.isWebGL2){let Iu=gn[Bl];Jt.update(Iu,er),Jt.bind(Iu,er)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return er}(P,j,$,ce,ne);T.setMaterial(ce,Ie);let Be=$.index,He=1;if(ce.wireframe===!0){if(Be=Ee.getWireframeAttribute($),Be===void 0)return;He=2}let We=$.drawRange,je=$.attributes.position,vt=We.start*He,Cn=(We.start+We.count)*He;Me!==null&&(vt=Math.max(vt,Me.start*He),Cn=Math.min(Cn,(Me.start+Me.count)*He)),Be!==null?(vt=Math.max(vt,0),Cn=Math.min(Cn,Be.count)):je!=null&&(vt=Math.max(vt,0),Cn=Math.min(Cn,je.count));let Jn=Cn-vt;if(Jn<0||Jn===1/0)return;let Qi;nt.setup(ne,ce,De,$,Be);let yt=bt;if(Be!==null&&(Qi=ue.get(Be),yt=Dt,yt.setIndex(Qi)),ne.isMesh)ce.wireframe===!0?(T.setLineWidth(ce.wireframeLinewidth*z()),yt.setMode(q.LINES)):yt.setMode(q.TRIANGLES);else if(ne.isLine){let Ut=ce.linewidth;Ut===void 0&&(Ut=1),T.setLineWidth(Ut*z()),ne.isLineSegments?yt.setMode(q.LINES):ne.isLineLoop?yt.setMode(q.LINE_LOOP):yt.setMode(q.LINE_STRIP)}else ne.isPoints?yt.setMode(q.POINTS):ne.isSprite&&yt.setMode(q.TRIANGLES);if(ne.isBatchedMesh)yt.renderMultiDraw(ne._multiDrawStarts,ne._multiDrawCounts,ne._multiDrawCount);else if(ne.isInstancedMesh)yt.renderInstances(vt,Jn,ne.count);else if($.isInstancedBufferGeometry){let Ut=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,mn=Math.min($.instanceCount,Ut);yt.renderInstances(vt,Jn,mn)}else yt.render(vt,Jn)},this.compile=function(P,j,$=null){$===null&&($=P),f=Fe.get($),f.init(),g.push(f),$.traverseVisible(function(ne){ne.isLight&&ne.layers.test(j.layers)&&(f.pushLight(ne),ne.castShadow&&f.pushShadow(ne))}),P!==$&&P.traverseVisible(function(ne){ne.isLight&&ne.layers.test(j.layers)&&(f.pushLight(ne),ne.castShadow&&f.pushShadow(ne))}),f.setupLights(y._useLegacyLights);let ce=new Set;return P.traverse(function(ne){let Me=ne.material;if(Me)if(Array.isArray(Me))for(let Ie=0;Ie<Me.length;Ie++){let De=Me[Ie];Nt(De,$,ne),ce.add(De)}else Nt(Me,$,ne),ce.add(Me)}),g.pop(),f=null,ce},this.compileAsync=function(P,j,$=null){let ce=this.compile(P,j,$);return new Promise(ne=>{function Me(){ce.forEach(function(Ie){V.get(Ie).currentProgram.isReady()&&ce.delete(Ie)}),ce.size!==0?setTimeout(Me,10):ne(P)}te.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let fn=null;function Ji(){$i.stop()}function Eu(){$i.start()}let $i=new kp;function Su(P,j,$,ce){if(P.visible===!1)return;if(P.layers.test(j.layers)){if(P.isGroup)$=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(j);else if(P.isLight)f.pushLight(P),P.castShadow&&f.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||w.intersectsSprite(P)){ce&&O.setFromMatrixPosition(P.matrixWorld).applyMatrix4(I);let Me=Pe.update(P),Ie=P.material;Ie.visible&&v.push(P,Me,Ie,$,O.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||w.intersectsObject(P))){let Me=Pe.update(P),Ie=P.material;if(ce&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),O.copy(P.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),O.copy(Me.boundingSphere.center)),O.applyMatrix4(P.matrixWorld).applyMatrix4(I)),Array.isArray(Ie)){let De=Me.groups;for(let Be=0,He=De.length;Be<He;Be++){let We=De[Be],je=Ie[We.materialIndex];je&&je.visible&&v.push(P,Me,je,$,O.z,We)}}else Ie.visible&&v.push(P,Me,Ie,$,O.z,null)}}let ne=P.children;for(let Me=0,Ie=ne.length;Me<Ie;Me++)Su(ne[Me],j,$,ce)}function Tu(P,j,$,ce){let ne=P.opaque,Me=P.transmissive,Ie=P.transparent;f.setupLightsView($),A===!0&&pe.setGlobalState(y.clippingPlanes,$),Me.length>0&&function(De,Be,He,We){if((He.isScene===!0?He.overrideMaterial:null)!==null)return;let vt=ee.isWebGL2;K===null&&(K=new en(1,1,{generateMipmaps:!0,type:te.has("EXT_color_buffer_half_float")?Bn:lr,minFilter:pr,samples:vt?4:0})),y.getDrawingBufferSize(Y),vt?K.setSize(Y.x,Y.y):K.setSize(Co(Y.x),Co(Y.y));let Cn=y.getRenderTarget();y.setRenderTarget(K),y.getClearColor(k),U=y.getClearAlpha(),U<1&&y.setClearColor(16777215,.5),y.clear();let Jn=y.toneMapping;y.toneMapping=Ri,Ba(De,He,We),X.updateMultisampleRenderTarget(K),X.updateRenderTargetMipmap(K);let Qi=!1;for(let yt=0,Ut=Be.length;yt<Ut;yt++){let mn=Be[yt],nn=mn.object,qe=mn.geometry,Ze=mn.material,zs=mn.group;if(Ze.side===2&&nn.layers.test(We.layers)){let Nl=Ze.side;Ze.side=Vt,Ze.needsUpdate=!0,wu(nn,He,We,qe,Ze,zs),Ze.side=Nl,Ze.needsUpdate=!0,Qi=!0}}Qi===!0&&(X.updateMultisampleRenderTarget(K),X.updateRenderTargetMipmap(K)),y.setRenderTarget(Cn),y.setClearColor(k,U),y.toneMapping=Jn}(ne,Me,j,$),ce&&T.viewport(L.copy(ce)),ne.length>0&&Ba(ne,j,$),Me.length>0&&Ba(Me,j,$),Ie.length>0&&Ba(Ie,j,$),T.buffers.depth.setTest(!0),T.buffers.depth.setMask(!0),T.buffers.color.setMask(!0),T.setPolygonOffset(!1)}function Ba(P,j,$){let ce=j.isScene===!0?j.overrideMaterial:null;for(let ne=0,Me=P.length;ne<Me;ne++){let Ie=P[ne],De=Ie.object,Be=Ie.geometry,He=ce===null?Ie.material:ce,We=Ie.group;De.layers.test($.layers)&&wu(De,j,$,Be,He,We)}}function wu(P,j,$,ce,ne,Me){P.onBeforeRender(y,j,$,ce,ne,Me),P.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),ne.onBeforeRender(y,j,$,ce,P,Me),ne.transparent===!0&&ne.side===2&&ne.forceSinglePass===!1?(ne.side=Vt,ne.needsUpdate=!0,y.renderBufferDirect($,j,ce,ne,P,Me),ne.side=qn,ne.needsUpdate=!0,y.renderBufferDirect($,j,ce,ne,P,Me),ne.side=2):y.renderBufferDirect($,j,ce,ne,P,Me),P.onAfterRender(y,j,$,ce,ne,Me)}function ka(P,j,$){j.isScene!==!0&&(j=B);let ce=V.get(P),ne=f.state.lights,Me=f.state.shadowsArray,Ie=ne.state.version,De=W.getParameters(P,ne.state,Me,j,$),Be=W.getProgramCacheKey(De),He=ce.programs;ce.environment=P.isMeshStandardMaterial?j.environment:null,ce.fog=j.fog,ce.envMap=(P.isMeshStandardMaterial?xe:oe).get(P.envMap||ce.environment),He===void 0&&(P.addEventListener("dispose",$e),He=new Map,ce.programs=He);let We=He.get(Be);if(We!==void 0){if(ce.currentProgram===We&&ce.lightsStateVersion===Ie)return Ru(P,De),We}else De.uniforms=W.getUniforms(P),P.onBuild($,De,y),P.onBeforeCompile(De,y),We=W.acquireProgram(De,Be),He.set(Be,We),ce.uniforms=De.uniforms;let je=ce.uniforms;return(P.isShaderMaterial||P.isRawShaderMaterial)&&P.clipping!==!0||(je.clippingPlanes=pe.uniform),Ru(P,De),ce.needsLights=function(vt){return vt.isMeshLambertMaterial||vt.isMeshToonMaterial||vt.isMeshPhongMaterial||vt.isMeshStandardMaterial||vt.isShadowMaterial||vt.isShaderMaterial&&vt.lights===!0}(P),ce.lightsStateVersion=Ie,ce.needsLights&&(je.ambientLightColor.value=ne.state.ambient,je.lightProbe.value=ne.state.probe,je.directionalLights.value=ne.state.directional,je.directionalLightShadows.value=ne.state.directionalShadow,je.spotLights.value=ne.state.spot,je.spotLightShadows.value=ne.state.spotShadow,je.rectAreaLights.value=ne.state.rectArea,je.ltc_1.value=ne.state.rectAreaLTC1,je.ltc_2.value=ne.state.rectAreaLTC2,je.pointLights.value=ne.state.point,je.pointLightShadows.value=ne.state.pointShadow,je.hemisphereLights.value=ne.state.hemi,je.directionalShadowMap.value=ne.state.directionalShadowMap,je.directionalShadowMatrix.value=ne.state.directionalShadowMatrix,je.spotShadowMap.value=ne.state.spotShadowMap,je.spotLightMatrix.value=ne.state.spotLightMatrix,je.spotLightMap.value=ne.state.spotLightMap,je.pointShadowMap.value=ne.state.pointShadowMap,je.pointShadowMatrix.value=ne.state.pointShadowMatrix),ce.currentProgram=We,ce.uniformsList=null,We}function Au(P){if(P.uniformsList===null){let j=P.currentProgram.getUniforms();P.uniformsList=os.seqWithValue(j.seq,P.uniforms)}return P.uniformsList}function Ru(P,j){let $=V.get(P);$.outputColorSpace=j.outputColorSpace,$.batching=j.batching,$.instancing=j.instancing,$.instancingColor=j.instancingColor,$.skinning=j.skinning,$.morphTargets=j.morphTargets,$.morphNormals=j.morphNormals,$.morphColors=j.morphColors,$.morphTargetsCount=j.morphTargetsCount,$.numClippingPlanes=j.numClippingPlanes,$.numIntersection=j.numClipIntersection,$.vertexAlphas=j.vertexAlphas,$.vertexTangents=j.vertexTangents,$.toneMapping=j.toneMapping}$i.setAnimationLoop(function(P){fn&&fn(P)}),typeof self<"u"&&$i.setContext(self),this.setAnimationLoop=function(P){fn=P,Et.setAnimationLoop(P),P===null?$i.stop():$i.start()},Et.addEventListener("sessionstart",Ji),Et.addEventListener("sessionend",Eu),this.render=function(P,j){if(j!==void 0&&j.isCamera!==!0)return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");if(_===!0)return;P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),Et.enabled===!0&&Et.isPresenting===!0&&(Et.cameraAutoUpdate===!0&&Et.updateCamera(j),j=Et.getCamera()),P.isScene===!0&&P.onBeforeRender(y,P,j,S),f=Fe.get(P,g.length),f.init(),g.push(f),I.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),w.setFromProjectionMatrix(I),F=this.localClippingEnabled,A=pe.init(this.clippingPlanes,F),v=ve.get(P,x.length),v.init(),x.push(v),Su(P,j,0,y.sortObjects),v.finish(),y.sortObjects===!0&&v.sort(G,J),this.info.render.frame++,A===!0&&pe.beginShadows();let $=f.state.shadowsArray;if(de.render($,P,j),A===!0&&pe.endShadows(),this.info.autoReset===!0&&this.info.reset(),be.render(v,P),f.setupLights(y._useLegacyLights),j.isArrayCamera){let ce=j.cameras;for(let ne=0,Me=ce.length;ne<Me;ne++){let Ie=ce[ne];Tu(v,P,Ie,Ie.viewport)}}else Tu(v,P,j);S!==null&&(X.updateMultisampleRenderTarget(S),X.updateRenderTargetMipmap(S)),P.isScene===!0&&P.onAfterRender(y,P,j),nt.resetDefaultState(),D=-1,M=null,g.pop(),f=g.length>0?g[g.length-1]:null,x.pop(),v=x.length>0?x[x.length-1]:null},this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(P,j,$){V.get(P.texture).__webglTexture=j,V.get(P.depthTexture).__webglTexture=$;let ce=V.get(P);ce.__hasExternalTextures=!0,ce.__hasExternalTextures&&(ce.__autoAllocateDepthBuffer=$===void 0,ce.__autoAllocateDepthBuffer||te.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ce.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(P,j){let $=V.get(P);$.__webglFramebuffer=j,$.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(P,j=0,$=0){S=P,R=j,b=$;let ce=!0,ne=null,Me=!1,Ie=!1;if(P){let De=V.get(P);De.__useDefaultFramebuffer!==void 0?(T.bindFramebuffer(q.FRAMEBUFFER,null),ce=!1):De.__webglFramebuffer===void 0?X.setupRenderTarget(P):De.__hasExternalTextures&&X.rebindTextures(P,V.get(P.texture).__webglTexture,V.get(P.depthTexture).__webglTexture);let Be=P.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(Ie=!0);let He=V.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(ne=Array.isArray(He[j])?He[j][$]:He[j],Me=!0):ne=ee.isWebGL2&&P.samples>0&&X.useMultisampledRTT(P)===!1?V.get(P).__webglMultisampledFramebuffer:Array.isArray(He)?He[$]:He,L.copy(P.viewport),N.copy(P.scissor),C=P.scissorTest}else L.copy(H).multiplyScalar(ie).floor(),N.copy(Z).multiplyScalar(ie).floor(),C=ye;if(T.bindFramebuffer(q.FRAMEBUFFER,ne)&&ee.drawBuffers&&ce&&T.drawBuffers(P,ne),T.viewport(L),T.scissor(N),T.setScissorTest(C),Me){let De=V.get(P.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+j,De.__webglTexture,$)}else if(Ie){let De=V.get(P.texture),Be=j||0;q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,De.__webglTexture,$||0,Be)}D=-1},this.readRenderTargetPixels=function(P,j,$,ce,ne,Me,Ie){if(!P||!P.isWebGLRenderTarget)return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=V.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Ie!==void 0&&(De=De[Ie]),De){T.bindFramebuffer(q.FRAMEBUFFER,De);try{let Be=P.texture,He=Be.format,We=Be.type;if(He!==On&&Je.convert(He)!==q.getParameter(q.IMPLEMENTATION_COLOR_READ_FORMAT))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");let je=We===Bn&&(te.has("EXT_color_buffer_half_float")||ee.isWebGL2&&te.has("EXT_color_buffer_float"));if(!(We===lr||Je.convert(We)===q.getParameter(q.IMPLEMENTATION_COLOR_READ_TYPE)||We===ai&&(ee.isWebGL2||te.has("OES_texture_float")||te.has("WEBGL_color_buffer_float"))||je))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");j>=0&&j<=P.width-ce&&$>=0&&$<=P.height-ne&&q.readPixels(j,$,ce,ne,Je.convert(He),Je.convert(We),Me)}finally{let Be=S!==null?V.get(S).__webglFramebuffer:null;T.bindFramebuffer(q.FRAMEBUFFER,Be)}}},this.copyFramebufferToTexture=function(P,j,$=0){let ce=Math.pow(2,-$),ne=Math.floor(j.image.width*ce),Me=Math.floor(j.image.height*ce);X.setTexture2D(j,0),q.copyTexSubImage2D(q.TEXTURE_2D,$,0,0,P.x,P.y,ne,Me),T.unbindTexture()},this.copyTextureToTexture=function(P,j,$,ce=0){let ne=j.image.width,Me=j.image.height,Ie=Je.convert($.format),De=Je.convert($.type);X.setTexture2D($,0),q.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,$.flipY),q.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),q.pixelStorei(q.UNPACK_ALIGNMENT,$.unpackAlignment),j.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,ce,P.x,P.y,ne,Me,Ie,De,j.image.data):j.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,ce,P.x,P.y,j.mipmaps[0].width,j.mipmaps[0].height,Ie,j.mipmaps[0].data):q.texSubImage2D(q.TEXTURE_2D,ce,P.x,P.y,Ie,De,j.image),ce===0&&$.generateMipmaps&&q.generateMipmap(q.TEXTURE_2D),T.unbindTexture()},this.copyTextureToTexture3D=function(P,j,$,ce,ne=0){if(y.isWebGL1Renderer)return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");let Me=P.max.x-P.min.x+1,Ie=P.max.y-P.min.y+1,De=P.max.z-P.min.z+1,Be=Je.convert(ce.format),He=Je.convert(ce.type),We;if(ce.isData3DTexture)X.setTexture3D(ce,0),We=q.TEXTURE_3D;else{if(!ce.isDataArrayTexture&&!ce.isCompressedArrayTexture)return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");X.setTexture2DArray(ce,0),We=q.TEXTURE_2D_ARRAY}q.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,ce.flipY),q.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ce.premultiplyAlpha),q.pixelStorei(q.UNPACK_ALIGNMENT,ce.unpackAlignment);let je=q.getParameter(q.UNPACK_ROW_LENGTH),vt=q.getParameter(q.UNPACK_IMAGE_HEIGHT),Cn=q.getParameter(q.UNPACK_SKIP_PIXELS),Jn=q.getParameter(q.UNPACK_SKIP_ROWS),Qi=q.getParameter(q.UNPACK_SKIP_IMAGES),yt=$.isCompressedTexture?$.mipmaps[ne]:$.image;q.pixelStorei(q.UNPACK_ROW_LENGTH,yt.width),q.pixelStorei(q.UNPACK_IMAGE_HEIGHT,yt.height),q.pixelStorei(q.UNPACK_SKIP_PIXELS,P.min.x),q.pixelStorei(q.UNPACK_SKIP_ROWS,P.min.y),q.pixelStorei(q.UNPACK_SKIP_IMAGES,P.min.z),$.isDataTexture||$.isData3DTexture?q.texSubImage3D(We,ne,j.x,j.y,j.z,Me,Ie,De,Be,He,yt.data):$.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),q.compressedTexSubImage3D(We,ne,j.x,j.y,j.z,Me,Ie,De,Be,yt.data)):q.texSubImage3D(We,ne,j.x,j.y,j.z,Me,Ie,De,Be,He,yt),q.pixelStorei(q.UNPACK_ROW_LENGTH,je),q.pixelStorei(q.UNPACK_IMAGE_HEIGHT,vt),q.pixelStorei(q.UNPACK_SKIP_PIXELS,Cn),q.pixelStorei(q.UNPACK_SKIP_ROWS,Jn),q.pixelStorei(q.UNPACK_SKIP_IMAGES,Qi),ne===0&&ce.generateMipmaps&&q.generateMipmap(We),T.unbindTexture()},this.initTexture=function(P){P.isCubeTexture?X.setTextureCube(P,0):P.isData3DTexture?X.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?X.setTexture2DArray(P,0):X.setTexture2D(P,0),T.unbindTexture()},this.resetState=function(){R=0,b=0,S=null,T.reset(),nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ds}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===Ah?"display-p3":"srgb",t.unpackColorSpace=Qe.workingColorSpace===rl?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===st?ur:Dp}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===ur?st:Bt}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},jc=class extends ca{};jc.prototype.isWebGL1Renderer=!0;var Fo=class r{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new _e(e),this.near=t,this.far=n}clone(){return new r(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ii=class extends mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},ys=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Rc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=yn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=yn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=yn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},$t=new E,mr=class r{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix4(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyNormalMatrix(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.transformDirection(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}setX(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Xn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Xn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Xn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Xn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array),i=ot(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array),i=ot(i,this.array),s=ot(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new dt(new this.array.constructor(t),this.itemSize,this.normalized)}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new r(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},tn=class extends on{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new _e(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Qr,Ys=new E,es=new E,ts=new E,ns=new re,Zs=new re,Wp=new Le,lo=new E,Ks=new E,co=new E,qd=new re,dc=new re,Yd=new re,ln=class extends mt{constructor(e=new tn){if(super(),this.isSprite=!0,this.type="Sprite",Qr===void 0){Qr=new tt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ys(t,5);Qr.setIndex([0,1,2,0,2,3]),Qr.setAttribute("position",new mr(n,3,0,!1)),Qr.setAttribute("uv",new mr(n,2,3,!1))}this.geometry=Qr,this.material=e,this.center=new re(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),es.setFromMatrixScale(this.matrixWorld),Wp.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ts.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&es.multiplyScalar(-ts.z);let n=this.material.rotation,i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));let a=this.center;ho(lo.set(-.5,-.5,0),ts,a,es,i,s),ho(Ks.set(.5,-.5,0),ts,a,es,i,s),ho(co.set(.5,.5,0),ts,a,es,i,s),qd.set(0,0),dc.set(1,0),Yd.set(1,1);let o=e.ray.intersectTriangle(lo,Ks,co,!1,Ys);if(o===null&&(ho(Ks.set(-.5,.5,0),ts,a,es,i,s),dc.set(0,1),o=e.ray.intersectTriangle(lo,co,Ks,!1,Ys),o===null))return;let l=e.ray.origin.distanceTo(Ys);l<e.near||l>e.far||t.push({distance:l,point:Ys.clone(),uv:wi.getInterpolation(Ys,lo,Ks,co,qd,dc,Yd,new re),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function ho(r,e,t,n,i,s){ns.subVectors(r,t).addScalar(.5).multiply(n),i!==void 0?(Zs.x=s*ns.x-i*ns.y,Zs.y=i*ns.x+s*ns.y):Zs.copy(ns),r.copy(e),r.x+=Zs.x,r.y+=Zs.y,r.applyMatrix4(Wp)}var G0=new E,V0=new E;var Zd=new E,Kd=new ut,Jd=new ut,wg=new E,$d=new Le,uo=new E,pc=new an,Qd=new Le,fc=new fs,Ho=class extends Se{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Du,this.bindMatrix=new Le,this.bindMatrixInverse=new Le,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new sn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,uo),this.boundingBox.expandByPoint(uo)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new an),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,uo),this.boundingSphere.expandByPoint(uo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),pc.copy(this.boundingSphere),pc.applyMatrix4(i),e.ray.intersectsSphere(pc)!==!1&&(Qd.copy(i).invert(),fc.copy(e.ray).applyMatrix4(Qd),this.boundingBox!==null&&fc.intersectsBox(this.boundingBox)===!1||this._computeIntersections(e,t,fc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new ut,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Du?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Nf?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;Kd.fromBufferAttribute(i.attributes.skinIndex,e),Jd.fromBufferAttribute(i.attributes.skinWeight,e),Zd.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){let a=Jd.getComponent(s);if(a!==0){let o=Kd.getComponent(s);$d.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(wg.copy(Zd).applyMatrix4($d),a)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}},ha=class extends mt{constructor(){super(),this.isBone=!0,this.type="Bone"}},qc=class extends jt{constructor(e=null,t=1,n=1,i,s,a,o,l,c=1003,h=1003,u,d){super(null,a,o,l,c,h,i,s,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},ep=new Le,Ag=new Le,zo=class r{constructor(e=[],t=[]){this.uuid=yn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(16*e.length),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Le)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Le;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,a=e.length;s<a;s++){let o=e[s]?e[s].matrixWorld:Ag;ep.multiplyMatrices(o,t[s]),ep.toArray(n,16*s)}i!==null&&(i.needsUpdate=!0)}clone(){return new r(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(4*this.bones.length);e=4*Math.ceil(e/4),e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new qc(t,e,e,On,ai);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let s=e.bones[n],a=t[s];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),a=new ha),this.bones.push(a),this.boneInverses.push(new Le().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){let a=t[i];e.bones.push(a.uuid);let o=n[i];e.boneInverses.push(o.toArray())}return e}},gr=class extends dt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},is=new Le,tp=new Le,po=[],np=new sn,Rg=new Le,Js=new Se,$s=new an,xs=class extends Se{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new gr(new Float32Array(16*n),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Rg)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new sn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,is),np.copy(e.boundingBox).applyMatrix4(is),this.boundingBox.union(np)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new an),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,is),$s.copy(e.boundingSphere).applyMatrix4(is),this.boundingSphere.union($s)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,3*e)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,16*e)}raycast(e,t){let n=this.matrixWorld,i=this.count;if(Js.geometry=this.geometry,Js.material=this.material,Js.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),$s.copy(this.boundingSphere),$s.applyMatrix4(n),e.ray.intersectsSphere($s)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,is),tp.multiplyMatrices(n,is),Js.matrixWorld=tp,Js.raycast(e,po);for(let a=0,o=po.length;a<o;a++){let l=po[a];l.instanceId=s,l.object=this,t.push(l)}po.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new gr(new Float32Array(3*this.instanceMatrix.count),3)),t.toArray(this.instanceColor.array,3*e)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,16*e)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var Yc=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t){let n=this.pool,i=this.list;this.index>=n.length&&n.push({start:-1,count:-1,z:-1});let s=n[this.index];i.push(s),this.index++,s.start=e.start,s.count=e.count,s.z=t}reset(){this.list.length=0,this.index=0}};var W0=new Le,X0=new Le,j0=new Le,q0=new Le,Y0=new gs,Z0=new sn,K0=new an,J0=new E,$0=new Yc,Q0=new Se;var vr=class extends on{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new _e(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},ip=new E,rp=new E,sp=new Le,mc=new fs,fo=new an,_s=class extends mt{constructor(e=new tt,t=new vr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)ip.fromBufferAttribute(t,i-1),rp.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=ip.distanceTo(rp);e.setAttribute("lineDistance",new Ce(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),fo.copy(n.boundingSphere),fo.applyMatrix4(i),fo.radius+=s,e.ray.intersectsSphere(fo)===!1)return;sp.copy(i).invert(),mc.copy(e.ray).applyMatrix4(sp);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new E,h=new E,u=new E,d=new E,p=this.isLineSegments?2:1,m=n.index,v=n.attributes.position;if(m!==null)for(let f=Math.max(0,a.start),x=Math.min(m.count,a.start+a.count)-1;f<x;f+=p){let g=m.getX(f),y=m.getX(f+1);if(c.fromBufferAttribute(v,g),h.fromBufferAttribute(v,y),mc.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);let _=e.ray.origin.distanceTo(d);_<e.near||_>e.far||t.push({distance:_,point:u.clone().applyMatrix4(this.matrixWorld),index:f,face:null,faceIndex:null,object:this})}else for(let f=Math.max(0,a.start),x=Math.min(v.count,a.start+a.count)-1;f<x;f+=p){if(c.fromBufferAttribute(v,f),h.fromBufferAttribute(v,f+1),mc.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);let g=e.ray.origin.distanceTo(d);g<e.near||g>e.far||t.push({distance:g,point:u.clone().applyMatrix4(this.matrixWorld),index:f,face:null,faceIndex:null,object:this})}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,s=n.length;i<s;i++){let a=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=i}}}}},ap=new E,op=new E,Ms=class extends _s{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)ap.fromBufferAttribute(t,i),op.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+ap.distanceTo(op);e.setAttribute("lineDistance",new Ce(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Go=class extends _s{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},yr=class extends on{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new _e(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},lp=new Le,Zc=new fs,mo=new an,go=new E,bs=class extends mt{constructor(e=new tt,t=new yr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),mo.copy(n.boundingSphere),mo.applyMatrix4(i),mo.radius+=s,e.ray.intersectsSphere(mo)===!1)return;lp.copy(i).invert(),Zc.copy(e.ray).applyMatrix4(lp);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null)for(let u=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);u<d;u++){let p=c.getX(u);go.fromBufferAttribute(h,p),cp(go,p,l,i,e,t,this)}else for(let u=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);u<d;u++)go.fromBufferAttribute(h,u),cp(go,u,l,i,e,t,this)}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,s=n.length;i<s;i++){let a=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=i}}}}};function cp(r,e,t,n,i,s,a){let o=Zc.distanceSqToPoint(r);if(o<t){let l=new E;Zc.closestPointToPoint(r,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}var _n=class extends jt{constructor(e,t,n,i,s,a,o,l,c){super(e,t,n,i,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Mn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),i=0,s=n.length,a;a=t||e*n[s-1];let o,l=0,c=s-1;for(;l<=c;)if(i=Math.floor(l+(c-l)/2),o=n[i]-a,o<0)l=i+1;else{if(!(o>0)){c=i;break}c=i-1}if(i=c,n[i]===a)return i/(s-1);let h=n[i];return(i+(a-h)/(n[i+1]-h))/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);let a=this.getPoint(i),o=this.getPoint(s),l=t||(a.isVector2?new re:new E);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new E,i=[],s=[],a=[],o=new E,l=new Le;for(let p=0;p<=e;p++){let m=p/e;i[p]=this.getTangentAt(m,new E)}s[0]=new E,a[0]=new E;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),a[0].crossVectors(i[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(i[p-1],i[p]),o.length()>Number.EPSILON){o.normalize();let m=Math.acos(Ot(i[p-1].dot(i[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(o,m))}a[p].crossVectors(i[p],s[p])}if(t===!0){let p=Math.acos(Ot(s[0].dot(s[e]),-1,1));p/=e,i[0].dot(o.crossVectors(s[0],s[e]))>0&&(p=-p);for(let m=1;m<=e;m++)s[m].applyMatrix4(l.makeRotationAxis(i[m],p*m)),a[m].crossVectors(i[m],s[m])}return{tangents:i,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},ua=class extends Mn{constructor(e=0,t=0,n=1,i=1,s=0,a=2*Math.PI,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t){let n=t||new re,i=2*Math.PI,s=this.aEndAngle-this.aStartAngle,a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(s=a?0:i),this.aClockwise!==!0||a||(s===i?s=-i:s-=i);let o=this.aStartAngle+e*s,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*u+this.aX,c=d*u+p*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Kc=class extends ua{constructor(e,t,n,i,s,a){super(e,t,n,n,i,s,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Ch(){let r=0,e=0,t=0,n=0;function i(s,a,o,l){r=s,e=o,t=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){i(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,h,u){let d=(a-s)/c-(o-s)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,p*=h,i(a,o,d,p)},calc:function(s){let a=s*s;return r+e*s+t*a+n*(a*s)}}}var vo=new E,gc=new Ch,vc=new Ch,yc=new Ch,Di=class extends Mn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new E){let n=t,i=this.points,s=i.length,a=(s-(this.closed?0:1))*e,o,l,c=Math.floor(a),h=a-c;this.closed?c+=c>0?0:(Math.floor(Math.abs(c)/s)+1)*s:h===0&&c===s-1&&(c=s-2,h=1),this.closed||c>0?o=i[(c-1)%s]:(vo.subVectors(i[0],i[1]).add(i[0]),o=vo);let u=i[c%s],d=i[(c+1)%s];if(this.closed||c+2<s?l=i[(c+2)%s]:(vo.subVectors(i[s-1],i[s-2]).add(i[s-1]),l=vo),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,m=Math.pow(o.distanceToSquared(u),p),v=Math.pow(u.distanceToSquared(d),p),f=Math.pow(d.distanceToSquared(l),p);v<1e-4&&(v=1),m<1e-4&&(m=v),f<1e-4&&(f=v),gc.initNonuniformCatmullRom(o.x,u.x,d.x,l.x,m,v,f),vc.initNonuniformCatmullRom(o.y,u.y,d.y,l.y,m,v,f),yc.initNonuniformCatmullRom(o.z,u.z,d.z,l.z,m,v,f)}else this.curveType==="catmullrom"&&(gc.initCatmullRom(o.x,u.x,d.x,l.x,this.tension),vc.initCatmullRom(o.y,u.y,d.y,l.y,this.tension),yc.initCatmullRom(o.z,u.z,d.z,l.z,this.tension));return n.set(gc.calc(h),vc.calc(h),yc.calc(h)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new E().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function hp(r,e,t,n,i){let s=.5*(n-e),a=.5*(i-t),o=r*r;return(2*t-2*n+s+a)*(r*o)+(-3*t+3*n-2*s-a)*o+s*r+t}function ra(r,e,t,n){return function(i,s){let a=1-i;return a*a*s}(r,e)+function(i,s){return 2*(1-i)*i*s}(r,t)+function(i,s){return i*i*s}(r,n)}function sa(r,e,t,n,i){return function(s,a){let o=1-s;return o*o*o*a}(r,e)+function(s,a){let o=1-s;return 3*o*o*s*a}(r,t)+function(s,a){return 3*(1-s)*s*s*a}(r,n)+function(s,a){return s*s*s*a}(r,i)}var Vo=class extends Mn{constructor(e=new re,t=new re,n=new re,i=new re){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new re){let n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(sa(e,i.x,s.x,a.x,o.x),sa(e,i.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Jc=class extends Mn{constructor(e=new E,t=new E,n=new E,i=new E){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new E){let n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(sa(e,i.x,s.x,a.x,o.x),sa(e,i.y,s.y,a.y,o.y),sa(e,i.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Wo=class extends Mn{constructor(e=new re,t=new re){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new re){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new re){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},$c=class extends Mn{constructor(e=new E,t=new E){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new E){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new E){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Xo=class extends Mn{constructor(e=new re,t=new re,n=new re){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new re){let n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(ra(e,i.x,s.x,a.x),ra(e,i.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Es=class extends Mn{constructor(e=new E,t=new E,n=new E){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new E){let n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(ra(e,i.x,s.x,a.x),ra(e,i.y,s.y,a.y),ra(e,i.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},jo=class extends Mn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new re){let n=t,i=this.points,s=(i.length-1)*e,a=Math.floor(s),o=s-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(hp(o,l.x,c.x,h.x,u.x),hp(o,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new re().fromArray(i))}return this}},qo=Object.freeze({__proto__:null,ArcCurve:Kc,CatmullRomCurve3:Di,CubicBezierCurve:Vo,CubicBezierCurve3:Jc,EllipseCurve:ua,LineCurve:Wo,LineCurve3:$c,QuadraticBezierCurve:Xo,QuadraticBezierCurve3:Es,SplineCurve:jo}),Qc=class extends Mn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new qo[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),i=this.getCurveLengths(),s=0;for(;s<i.length;){if(i[s]>=n){let a=i[s]-n,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let i=0,s=this.curves;i<s.length;i++){let a=s[i],o=a.isEllipseCurve?2*e:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(new qo[i.type]().fromJSON(i))}return this}},da=class extends Qc{constructor(e){super(),this.type="Path",this.currentPoint=new re,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Wo(this.currentPoint.clone(),new re(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){let s=new Xo(this.currentPoint.clone(),new re(e,t),new re(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,a){let o=new Vo(this.currentPoint.clone(),new re(e,t),new re(n,i),new re(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new jo(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,i,s,a),this}absarc(e,t,n,i,s,a){return this.absellipse(e,t,n,n,i,s,a),this}ellipse(e,t,n,i,s,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,s,a,o,l),this}absellipse(e,t,n,i,s,a,o,l){let c=new ua(e,t,n,i,s,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Yo=class r extends tt{constructor(e=[new re(0,-.5),new re(.5,0),new re(0,.5)],t=12,n=0,i=2*Math.PI){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=Ot(i,0,2*Math.PI);let s=[],a=[],o=[],l=[],c=[],h=1/t,u=new E,d=new re,p=new E,m=new E,v=new E,f=0,x=0;for(let g=0;g<=e.length-1;g++)switch(g){case 0:f=e[g+1].x-e[g].x,x=e[g+1].y-e[g].y,p.x=1*x,p.y=-f,p.z=0*x,v.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(v.x,v.y,v.z);break;default:f=e[g+1].x-e[g].x,x=e[g+1].y-e[g].y,p.x=1*x,p.y=-f,p.z=0*x,m.copy(p),p.x+=v.x,p.y+=v.y,p.z+=v.z,p.normalize(),l.push(p.x,p.y,p.z),v.copy(m)}for(let g=0;g<=t;g++){let y=n+g*h*i,_=Math.sin(y),R=Math.cos(y);for(let b=0;b<=e.length-1;b++){u.x=e[b].x*_,u.y=e[b].y,u.z=e[b].x*R,a.push(u.x,u.y,u.z),d.x=g/t,d.y=b/(e.length-1),o.push(d.x,d.y);let S=l[3*b+0]*_,D=l[3*b+1],M=l[3*b+0]*R;c.push(S,D,M)}}for(let g=0;g<t;g++)for(let y=0;y<e.length-1;y++){let _=y+g*e.length,R=_,b=_+e.length,S=_+e.length+1,D=_+1;s.push(R,b,D),s.push(S,D,b)}this.setIndex(s),this.setAttribute("position",new Ce(a,3)),this.setAttribute("uv",new Ce(o,2)),this.setAttribute("normal",new Ce(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.points,e.segments,e.phiStart,e.phiLength)}},Ss=class r extends Yo{constructor(e=1,t=1,n=4,i=8){let s=new da;s.absarc(0,-t/2,e,1.5*Math.PI,0),s.absarc(0,t/2,e,0,.5*Math.PI),super(s.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:i}}static fromJSON(e){return new r(e.radius,e.length,e.capSegments,e.radialSegments)}},kn=class r extends tt{constructor(e=1,t=32,n=0,i=2*Math.PI){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let s=[],a=[],o=[],l=[],c=new E,h=new re;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let p=n+u/t*i;c.x=e*Math.cos(p),c.y=e*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new Ce(a,3)),this.setAttribute("normal",new Ce(o,3)),this.setAttribute("uv",new Ce(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Oe=class r extends tt{constructor(e=1,t=1,n=1,i=32,s=1,a=!1,o=0,l=2*Math.PI){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};let c=this;i=Math.floor(i),s=Math.floor(s);let h=[],u=[],d=[],p=[],m=0,v=[],f=n/2,x=0;function g(y){let _=m,R=new re,b=new E,S=0,D=y===!0?e:t,M=y===!0?1:-1;for(let N=1;N<=i;N++)u.push(0,f*M,0),d.push(0,M,0),p.push(.5,.5),m++;let L=m;for(let N=0;N<=i;N++){let C=N/i*l+o,k=Math.cos(C),U=Math.sin(C);b.x=D*U,b.y=f*M,b.z=D*k,u.push(b.x,b.y,b.z),d.push(0,M,0),R.x=.5*k+.5,R.y=.5*U*M+.5,p.push(R.x,R.y),m++}for(let N=0;N<i;N++){let C=_+N,k=L+N;y===!0?h.push(k,k+1,C):h.push(k+1,k,C),S+=3}c.addGroup(x,S,y===!0?1:2),x+=S}(function(){let y=new E,_=new E,R=0,b=(t-e)/n;for(let S=0;S<=s;S++){let D=[],M=S/s,L=M*(t-e)+e;for(let N=0;N<=i;N++){let C=N/i,k=C*l+o,U=Math.sin(k),Q=Math.cos(k);_.x=L*U,_.y=-M*n+f,_.z=L*Q,u.push(_.x,_.y,_.z),y.set(U,b,Q).normalize(),d.push(y.x,y.y,y.z),p.push(C,1-M),D.push(m++)}v.push(D)}for(let S=0;S<i;S++)for(let D=0;D<s;D++){let M=v[D][S],L=v[D+1][S],N=v[D+1][S+1],C=v[D][S+1];h.push(M,L,C),h.push(L,N,C),R+=6}c.addGroup(x,R,0),x+=R})(),a===!1&&(e>0&&g(!0),t>0&&g(!1)),this.setIndex(h),this.setAttribute("position",new Ce(u,3)),this.setAttribute("normal",new Ce(d,3)),this.setAttribute("uv",new Ce(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ni=class r extends Oe{constructor(e=1,t=1,n=32,i=1,s=!1,a=0,o=2*Math.PI){super(0,e,t,n,i,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new r(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},xr=class r extends tt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let s=[],a=[];function o(d,p,m,v){let f=v+1,x=[];for(let g=0;g<=f;g++){x[g]=[];let y=d.clone().lerp(m,g/f),_=p.clone().lerp(m,g/f),R=f-g;for(let b=0;b<=R;b++)x[g][b]=b===0&&g===f?y:y.clone().lerp(_,b/R)}for(let g=0;g<f;g++)for(let y=0;y<2*(f-g)-1;y++){let _=Math.floor(y/2);y%2==0?(l(x[g][_+1]),l(x[g+1][_]),l(x[g][_])):(l(x[g][_+1]),l(x[g+1][_+1]),l(x[g+1][_]))}}function l(d){s.push(d.x,d.y,d.z)}function c(d,p){let m=3*d;p.x=e[m+0],p.y=e[m+1],p.z=e[m+2]}function h(d,p,m,v){v<0&&d.x===1&&(a[p]=d.x-1),m.x===0&&m.z===0&&(a[p]=v/2/Math.PI+.5)}function u(d){return Math.atan2(d.z,-d.x)}(function(d){let p=new E,m=new E,v=new E;for(let f=0;f<t.length;f+=3)c(t[f+0],p),c(t[f+1],m),c(t[f+2],v),o(p,m,v,d)})(i),function(d){let p=new E;for(let m=0;m<s.length;m+=3)p.x=s[m+0],p.y=s[m+1],p.z=s[m+2],p.normalize().multiplyScalar(d),s[m+0]=p.x,s[m+1]=p.y,s[m+2]=p.z}(n),function(){let d=new E;for(let m=0;m<s.length;m+=3){d.x=s[m+0],d.y=s[m+1],d.z=s[m+2];let v=u(d)/2/Math.PI+.5,f=(p=d,Math.atan2(-p.y,Math.sqrt(p.x*p.x+p.z*p.z))/Math.PI+.5);a.push(v,1-f)}var p;(function(){let m=new E,v=new E,f=new E,x=new E,g=new re,y=new re,_=new re;for(let R=0,b=0;R<s.length;R+=9,b+=6){m.set(s[R+0],s[R+1],s[R+2]),v.set(s[R+3],s[R+4],s[R+5]),f.set(s[R+6],s[R+7],s[R+8]),g.set(a[b+0],a[b+1]),y.set(a[b+2],a[b+3]),_.set(a[b+4],a[b+5]),x.copy(m).add(v).add(f).divideScalar(3);let S=u(x);h(g,b+0,m,S),h(y,b+2,v,S),h(_,b+4,f,S)}})(),function(){for(let m=0;m<a.length;m+=6){let v=a[m+0],f=a[m+2],x=a[m+4],g=Math.max(v,f,x),y=Math.min(v,f,x);g>.9&&y<.1&&(v<.2&&(a[m+0]+=1),f<.2&&(a[m+2]+=1),x<.2&&(a[m+4]+=1))}}()}(),this.setAttribute("position",new Ce(s,3)),this.setAttribute("normal",new Ce(s.slice(),3)),this.setAttribute("uv",new Ce(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.vertices,e.indices,e.radius,e.details)}},eh=class r extends xr{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=1/n;super([-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},yo=new E,xo=new E,xc=new E,_o=new wi,th=class extends tt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let i=Math.pow(10,4),s=Math.cos(ss*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d={},p=[];for(let m=0;m<l;m+=3){a?(c[0]=a.getX(m),c[1]=a.getX(m+1),c[2]=a.getX(m+2)):(c[0]=m,c[1]=m+1,c[2]=m+2);let{a:v,b:f,c:x}=_o;if(v.fromBufferAttribute(o,c[0]),f.fromBufferAttribute(o,c[1]),x.fromBufferAttribute(o,c[2]),_o.getNormal(xc),u[0]=`${Math.round(v.x*i)},${Math.round(v.y*i)},${Math.round(v.z*i)}`,u[1]=`${Math.round(f.x*i)},${Math.round(f.y*i)},${Math.round(f.z*i)}`,u[2]=`${Math.round(x.x*i)},${Math.round(x.y*i)},${Math.round(x.z*i)}`,u[0]!==u[1]&&u[1]!==u[2]&&u[2]!==u[0])for(let g=0;g<3;g++){let y=(g+1)%3,_=u[g],R=u[y],b=_o[h[g]],S=_o[h[y]],D=`${_}_${R}`,M=`${R}_${_}`;M in d&&d[M]?(xc.dot(d[M].normal)<=s&&(p.push(b.x,b.y,b.z),p.push(S.x,S.y,S.z)),d[M]=null):D in d||(d[D]={index0:c[g],index1:c[y],normal:xc.clone()})}}for(let m in d)if(d[m]){let{index0:v,index1:f}=d[m];yo.fromBufferAttribute(o,v),xo.fromBufferAttribute(o,f),p.push(yo.x,yo.y,yo.z),p.push(xo.x,xo.y,xo.z)}this.setAttribute("position",new Ce(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},Ui=class extends da{constructor(e){super(e),this.uuid=yn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(new da().fromJSON(i))}return this}},Cg=function(r,e,t=2){let n=e&&e.length,i=n?e[0]*t:r.length,s=up(r,0,i,t,!0),a=[];if(!s||s.next===s.prev)return a;let o,l,c,h,u,d,p;if(n&&(s=function(m,v,f,x){let g=[],y,_,R,b,S;for(y=0,_=v.length;y<_;y++)R=v[y]*x,b=y<_-1?v[y+1]*x:m.length,S=up(m,R,b,x,!1),S===S.next&&(S.steiner=!0),g.push(Bg(S));for(g.sort(Ng),y=0;y<g.length;y++)f=Ug(g[y],f);return f}(r,e,s,t)),r.length>80*t){o=c=r[0],l=h=r[1];for(let m=t;m<i;m+=t)u=r[m],d=r[m+1],u<o&&(o=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);p=Math.max(c-o,h-l),p=p!==0?32767/p:0}return pa(s,a,t,o,l,p,0),a};function up(r,e,t,n,i){let s,a;if(i===function(o,l,c,h){let u=0;for(let d=l,p=c-h;d<c;d+=h)u+=(o[p]-o[d])*(o[d+1]+o[p+1]),p=d;return u}(r,e,t,n)>0)for(s=e;s<t;s+=n)a=dp(s,r[s],r[s+1],a);else for(s=t-n;s>=e;s-=n)a=dp(s,r[s],r[s+1],a);return a&&al(a,a.next)&&(ma(a),a=a.next),a}function _r(r,e){if(!r)return r;e||(e=r);let t,n=r;do if(t=!1,n.steiner||!al(n,n.next)&&xt(n.prev,n,n.next)!==0)n=n.next;else{if(ma(n),n=e=n.prev,n===n.next)break;t=!0}while(t||n!==e);return e}function pa(r,e,t,n,i,s,a){if(!r)return;!a&&s&&function(h,u,d,p){let m=h;do m.z===0&&(m.z=nh(m.x,m.y,u,d,p)),m.prevZ=m.prev,m.nextZ=m.next,m=m.next;while(m!==h);m.prevZ.nextZ=null,m.prevZ=null,function(v){let f,x,g,y,_,R,b,S,D=1;do{for(x=v,v=null,_=null,R=0;x;){for(R++,g=x,b=0,f=0;f<D&&(b++,g=g.nextZ,g);f++);for(S=D;b>0||S>0&&g;)b!==0&&(S===0||!g||x.z<=g.z)?(y=x,x=x.nextZ,b--):(y=g,g=g.nextZ,S--),_?_.nextZ=y:v=y,y.prevZ=_,_=y;x=g}_.nextZ=null,D*=2}while(R>1)}(m)}(r,n,i,s);let o,l,c=r;for(;r.prev!==r.next;)if(o=r.prev,l=r.next,s?Lg(r,n,i,s):Pg(r))e.push(o.i/t|0),e.push(r.i/t|0),e.push(l.i/t|0),ma(r),r=l.next,c=l.next;else if((r=l)===c){a?a===1?pa(r=Ig(_r(r),e,t),e,t,n,i,s,2):a===2&&Dg(r,e,t,n,i,s):pa(_r(r),e,t,n,i,s,1);break}}function Pg(r){let e=r.prev,t=r,n=r.next;if(xt(e,t,n)>=0)return!1;let i=e.x,s=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=i<s?i<a?i:a:s<a?s:a,u=o<l?o<c?o:c:l<c?l:c,d=i>s?i>a?i:a:s>a?s:a,p=o>l?o>c?o:c:l>c?l:c,m=n.next;for(;m!==e;){if(m.x>=h&&m.x<=d&&m.y>=u&&m.y<=p&&rs(i,o,s,l,a,c,m.x,m.y)&&xt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Lg(r,e,t,n){let i=r.prev,s=r,a=r.next;if(xt(i,s,a)>=0)return!1;let o=i.x,l=s.x,c=a.x,h=i.y,u=s.y,d=a.y,p=o<l?o<c?o:c:l<c?l:c,m=h<u?h<d?h:d:u<d?u:d,v=o>l?o>c?o:c:l>c?l:c,f=h>u?h>d?h:d:u>d?u:d,x=nh(p,m,e,t,n),g=nh(v,f,e,t,n),y=r.prevZ,_=r.nextZ;for(;y&&y.z>=x&&_&&_.z<=g;){if(y.x>=p&&y.x<=v&&y.y>=m&&y.y<=f&&y!==i&&y!==a&&rs(o,h,l,u,c,d,y.x,y.y)&&xt(y.prev,y,y.next)>=0||(y=y.prevZ,_.x>=p&&_.x<=v&&_.y>=m&&_.y<=f&&_!==i&&_!==a&&rs(o,h,l,u,c,d,_.x,_.y)&&xt(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;y&&y.z>=x;){if(y.x>=p&&y.x<=v&&y.y>=m&&y.y<=f&&y!==i&&y!==a&&rs(o,h,l,u,c,d,y.x,y.y)&&xt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;_&&_.z<=g;){if(_.x>=p&&_.x<=v&&_.y>=m&&_.y<=f&&_!==i&&_!==a&&rs(o,h,l,u,c,d,_.x,_.y)&&xt(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function Ig(r,e,t){let n=r;do{let i=n.prev,s=n.next.next;!al(i,s)&&Xp(i,n,n.next,s)&&fa(i,s)&&fa(s,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),ma(n),ma(n.next),n=r=s),n=n.next}while(n!==r);return _r(n)}function Dg(r,e,t,n,i,s){let a=r;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&kg(a,o)){let l=jp(a,o);return a=_r(a,a.next),l=_r(l,l.next),pa(a,e,t,n,i,s,0),void pa(l,e,t,n,i,s,0)}o=o.next}a=a.next}while(a!==r)}function Ng(r,e){return r.x-e.x}function Ug(r,e){let t=function(i,s){let a,o=s,l=-1/0,c=i.x,h=i.y;do{if(h<=o.y&&h>=o.next.y&&o.next.y!==o.y){let f=o.x+(h-o.y)*(o.next.x-o.x)/(o.next.y-o.y);if(f<=c&&f>l&&(l=f,a=o.x<o.next.x?o:o.next,f===c))return a}o=o.next}while(o!==s);if(!a)return null;let u=a,d=a.x,p=a.y,m,v=1/0;o=a;do c>=o.x&&o.x>=d&&c!==o.x&&rs(h<p?c:l,h,d,p,h<p?l:c,h,o.x,o.y)&&(m=Math.abs(h-o.y)/(c-o.x),fa(o,i)&&(m<v||m===v&&(o.x>a.x||o.x===a.x&&Og(a,o)))&&(a=o,v=m)),o=o.next;while(o!==u);return a}(r,e);if(!t)return e;let n=jp(t,r);return _r(n,n.next),_r(t,t.next)}function Og(r,e){return xt(r.prev,r,e.prev)<0&&xt(e.next,r,r.next)<0}function nh(r,e,t,n,i){return(r=1431655765&((r=858993459&((r=252645135&((r=16711935&((r=(r-t)*i|0)|r<<8))|r<<4))|r<<2))|r<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=(e-n)*i|0)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function Bg(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function rs(r,e,t,n,i,s,a,o){return(i-a)*(e-o)>=(r-a)*(s-o)&&(r-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(i-a)*(n-o)}function kg(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!function(t,n){let i=t;do{if(i.i!==t.i&&i.next.i!==t.i&&i.i!==n.i&&i.next.i!==n.i&&Xp(i,i.next,t,n))return!0;i=i.next}while(i!==t);return!1}(r,e)&&(fa(r,e)&&fa(e,r)&&function(t,n){let i=t,s=!1,a=(t.x+n.x)/2,o=(t.y+n.y)/2;do i.y>o!=i.next.y>o&&i.next.y!==i.y&&a<(i.next.x-i.x)*(o-i.y)/(i.next.y-i.y)+i.x&&(s=!s),i=i.next;while(i!==t);return s}(r,e)&&(xt(r.prev,r,e.prev)||xt(r,e.prev,e))||al(r,e)&&xt(r.prev,r,r.next)>0&&xt(e.prev,e,e.next)>0)}function xt(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function al(r,e){return r.x===e.x&&r.y===e.y}function Xp(r,e,t,n){let i=bo(xt(r,e,t)),s=bo(xt(r,e,n)),a=bo(xt(t,n,r)),o=bo(xt(t,n,e));return i!==s&&a!==o||!(i!==0||!Mo(r,t,e))||!(s!==0||!Mo(r,n,e))||!(a!==0||!Mo(t,r,n))||!(o!==0||!Mo(t,e,n))}function Mo(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function bo(r){return r>0?1:r<0?-1:0}function fa(r,e){return xt(r.prev,r,r.next)<0?xt(r,e,r.next)>=0&&xt(r,r.prev,e)>=0:xt(r,e,r.prev)<0||xt(r,r.next,e)<0}function jp(r,e){let t=new ih(r.i,r.x,r.y),n=new ih(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function dp(r,e,t,n){let i=new ih(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function ma(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function ih(r,e,t){this.i=r,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}var Ci=class r{static area(e){let t=e.length,n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return .5*n}static isClockWise(e){return r.area(e)<0}static triangulateShape(e,t){let n=[],i=[],s=[];pp(e),fp(n,e);let a=e.length;t.forEach(pp);for(let l=0;l<t.length;l++)i.push(a),a+=t[l].length,fp(n,t[l]);let o=Cg(n,i);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}};function pp(r){let e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function fp(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}var Mr=class r extends tt{constructor(e=new Ui([new re(.5,.5),new re(-.5,.5),new re(-.5,-.5),new re(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,i=[],s=[];for(let o=0,l=e.length;o<l;o++)a(e[o]);function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled===void 0||t.bevelEnabled,p=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:p-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,f=t.bevelSegments!==void 0?t.bevelSegments:3,x=t.extrudePath,g=t.UVGenerator!==void 0?t.UVGenerator:Fg,y,_,R,b,S,D=!1;x&&(y=x.getSpacedPoints(h),D=!0,d=!1,_=x.computeFrenetFrames(h,!1),R=new E,b=new E,S=new E),d||(f=0,p=0,m=0,v=0);let M=o.extractPoints(c),L=M.shape,N=M.holes;if(!Ci.isClockWise(L)){L=L.reverse();for(let O=0,B=N.length;O<B;O++){let z=N[O];Ci.isClockWise(z)&&(N[O]=z.reverse())}}let C=Ci.triangulateShape(L,N),k=L;for(let O=0,B=N.length;O<B;O++){let z=N[O];L=L.concat(z)}function U(O,B,z){return B||console.error("THREE.ExtrudeGeometry: vec does not exist"),O.clone().addScaledVector(B,z)}let Q=L.length,he=C.length;function ie(O,B,z){let te,ee,T,se=O.x-B.x,V=O.y-B.y,X=z.x-O.x,oe=z.y-O.y,xe=se*se+V*V,ue=se*oe-V*X;if(Math.abs(ue)>Number.EPSILON){let Ee=Math.sqrt(xe),Pe=Math.sqrt(X*X+oe*oe),W=B.x-V/Ee,le=B.y+se/Ee,ve=((z.x-oe/Pe-W)*oe-(z.y+X/Pe-le)*X)/(se*oe-V*X);te=W+se*ve-O.x,ee=le+V*ve-O.y;let Fe=te*te+ee*ee;if(Fe<=2)return new re(te,ee);T=Math.sqrt(Fe/2)}else{let Ee=!1;se>Number.EPSILON?X>Number.EPSILON&&(Ee=!0):se<-Number.EPSILON?X<-Number.EPSILON&&(Ee=!0):Math.sign(V)===Math.sign(oe)&&(Ee=!0),Ee?(te=-V,ee=se,T=Math.sqrt(xe)):(te=se,ee=V,T=Math.sqrt(xe/2))}return new re(te/T,ee/T)}let G=[];for(let O=0,B=k.length,z=B-1,te=O+1;O<B;O++,z++,te++)z===B&&(z=0),te===B&&(te=0),G[O]=ie(k[O],k[z],k[te]);let J=[],H,Z=G.concat();for(let O=0,B=N.length;O<B;O++){let z=N[O];H=[];for(let te=0,ee=z.length,T=ee-1,se=te+1;te<ee;te++,T++,se++)T===ee&&(T=0),se===ee&&(se=0),H[te]=ie(z[te],z[T],z[se]);J.push(H),Z=Z.concat(H)}for(let O=0;O<f;O++){let B=O/f,z=p*Math.cos(B*Math.PI/2),te=m*Math.sin(B*Math.PI/2)+v;for(let ee=0,T=k.length;ee<T;ee++){let se=U(k[ee],G[ee],te);A(se.x,se.y,-z)}for(let ee=0,T=N.length;ee<T;ee++){let se=N[ee];H=J[ee];for(let V=0,X=se.length;V<X;V++){let oe=U(se[V],H[V],te);A(oe.x,oe.y,-z)}}}let ye=m+v;for(let O=0;O<Q;O++){let B=d?U(L[O],Z[O],ye):L[O];D?(b.copy(_.normals[0]).multiplyScalar(B.x),R.copy(_.binormals[0]).multiplyScalar(B.y),S.copy(y[0]).add(b).add(R),A(S.x,S.y,S.z)):A(B.x,B.y,0)}for(let O=1;O<=h;O++)for(let B=0;B<Q;B++){let z=d?U(L[B],Z[B],ye):L[B];D?(b.copy(_.normals[O]).multiplyScalar(z.x),R.copy(_.binormals[O]).multiplyScalar(z.y),S.copy(y[O]).add(b).add(R),A(S.x,S.y,S.z)):A(z.x,z.y,u/h*O)}for(let O=f-1;O>=0;O--){let B=O/f,z=p*Math.cos(B*Math.PI/2),te=m*Math.sin(B*Math.PI/2)+v;for(let ee=0,T=k.length;ee<T;ee++){let se=U(k[ee],G[ee],te);A(se.x,se.y,u+z)}for(let ee=0,T=N.length;ee<T;ee++){let se=N[ee];H=J[ee];for(let V=0,X=se.length;V<X;V++){let oe=U(se[V],H[V],te);D?A(oe.x,oe.y+y[h-1].y,y[h-1].x+z):A(oe.x,oe.y,u+z)}}}function w(O,B){let z=O.length;for(;--z>=0;){let te=z,ee=z-1;ee<0&&(ee=O.length-1);for(let T=0,se=h+2*f;T<se;T++){let V=Q*T,X=Q*(T+1);K(B+te+V,B+ee+V,B+ee+X,B+te+X)}}}function A(O,B,z){l.push(O),l.push(B),l.push(z)}function F(O,B,z){I(O),I(B),I(z);let te=i.length/3,ee=g.generateTopUV(n,i,te-3,te-2,te-1);Y(ee[0]),Y(ee[1]),Y(ee[2])}function K(O,B,z,te){I(O),I(B),I(te),I(B),I(z),I(te);let ee=i.length/3,T=g.generateSideWallUV(n,i,ee-6,ee-3,ee-2,ee-1);Y(T[0]),Y(T[1]),Y(T[3]),Y(T[1]),Y(T[2]),Y(T[3])}function I(O){i.push(l[3*O+0]),i.push(l[3*O+1]),i.push(l[3*O+2])}function Y(O){s.push(O.x),s.push(O.y)}(function(){let O=i.length/3;if(d){let B=0,z=Q*B;for(let te=0;te<he;te++){let ee=C[te];F(ee[2]+z,ee[1]+z,ee[0]+z)}B=h+2*f,z=Q*B;for(let te=0;te<he;te++){let ee=C[te];F(ee[0]+z,ee[1]+z,ee[2]+z)}}else{for(let B=0;B<he;B++){let z=C[B];F(z[2],z[1],z[0])}for(let B=0;B<he;B++){let z=C[B];F(z[0]+Q*h,z[1]+Q*h,z[2]+Q*h)}}n.addGroup(O,i.length/3-O,0)})(),function(){let O=i.length/3,B=0;w(k,B),B+=k.length;for(let z=0,te=N.length;z<te;z++){let ee=N[z];w(ee,B),B+=ee.length}n.addGroup(O,i.length/3-O,1)}()}this.setAttribute("position",new Ce(i,3)),this.setAttribute("uv",new Ce(s,2)),this.computeVertexNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return function(t,n,i){if(i.shapes=[],Array.isArray(t))for(let s=0,a=t.length;s<a;s++){let o=t[s];i.shapes.push(o.uuid)}else i.shapes.push(t.uuid);return i.options=Object.assign({},n),n.extrudePath!==void 0&&(i.options.extrudePath=n.extrudePath.toJSON()),i}(this.parameters.shapes,this.parameters.options,e)}static fromJSON(e,t){let n=[];for(let s=0,a=e.shapes.length;s<a;s++){let o=t[e.shapes[s]];n.push(o)}let i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new qo[i.type]().fromJSON(i)),new r(n,e.options)}},Fg={generateTopUV:function(r,e,t,n,i){let s=e[3*t],a=e[3*t+1],o=e[3*n],l=e[3*n+1],c=e[3*i],h=e[3*i+1];return[new re(s,a),new re(o,l),new re(c,h)]},generateSideWallUV:function(r,e,t,n,i,s){let a=e[3*t],o=e[3*t+1],l=e[3*t+2],c=e[3*n],h=e[3*n+1],u=e[3*n+2],d=e[3*i],p=e[3*i+1],m=e[3*i+2],v=e[3*s],f=e[3*s+1],x=e[3*s+2];return Math.abs(o-h)<Math.abs(a-c)?[new re(a,1-l),new re(c,1-u),new re(d,1-m),new re(v,1-x)]:[new re(o,1-l),new re(h,1-u),new re(p,1-m),new re(f,1-x)]}},Yn=class r extends xr{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2;super([-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},rh=class r extends xr{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},sh=class r extends tt{constructor(e=.5,t=1,n=32,i=1,s=0,a=2*Math.PI){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:a},n=Math.max(3,n);let o=[],l=[],c=[],h=[],u=e,d=(t-e)/(i=Math.max(1,i)),p=new E,m=new re;for(let v=0;v<=i;v++){for(let f=0;f<=n;f++){let x=s+f/n*a;p.x=u*Math.cos(x),p.y=u*Math.sin(x),l.push(p.x,p.y,p.z),c.push(0,0,1),m.x=(p.x/t+1)/2,m.y=(p.y/t+1)/2,h.push(m.x,m.y)}u+=d}for(let v=0;v<i;v++){let f=v*(n+1);for(let x=0;x<n;x++){let g=x+f,y=g,_=g+n+1,R=g+n+2,b=g+1;o.push(y,_,b),o.push(_,R,b)}}this.setIndex(o),this.setAttribute("position",new Ce(l,3)),this.setAttribute("normal",new Ce(c,3)),this.setAttribute("uv",new Ce(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},ah=class r extends tt{constructor(e=new Ui([new re(0,.5),new re(-.5,-.5),new re(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],i=[],s=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;function c(h){let u=i.length/3,d=h.extractPoints(t),p=d.shape,m=d.holes;Ci.isClockWise(p)===!1&&(p=p.reverse());for(let f=0,x=m.length;f<x;f++){let g=m[f];Ci.isClockWise(g)===!0&&(m[f]=g.reverse())}let v=Ci.triangulateShape(p,m);for(let f=0,x=m.length;f<x;f++){let g=m[f];p=p.concat(g)}for(let f=0,x=p.length;f<x;f++){let g=p[f];i.push(g.x,g.y,0),s.push(0,0,1),a.push(g.x,g.y)}for(let f=0,x=v.length;f<x;f++){let g=v[f],y=g[0]+u,_=g[1]+u,R=g[2]+u;n.push(y,_,R),l+=3}}this.setIndex(n),this.setAttribute("position",new Ce(i,3)),this.setAttribute("normal",new Ce(s,3)),this.setAttribute("uv",new Ce(a,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return function(t,n){if(n.shapes=[],Array.isArray(t))for(let i=0,s=t.length;i<s;i++){let a=t[i];n.shapes.push(a.uuid)}else n.shapes.push(t.uuid);return n}(this.parameters.shapes,e)}static fromJSON(e,t){let n=[];for(let i=0,s=e.shapes.length;i<s;i++){let a=t[e.shapes[i]];n.push(a)}return new r(n,e.curveSegments)}},qt=class r extends tt{constructor(e=1,t=32,n=16,i=0,s=2*Math.PI,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new E,d=new E,p=[],m=[],v=[],f=[];for(let x=0;x<=n;x++){let g=[],y=x/n,_=0;x===0&&a===0?_=.5/t:x===n&&l===Math.PI&&(_=-.5/t);for(let R=0;R<=t;R++){let b=R/t;u.x=-e*Math.cos(i+b*s)*Math.sin(a+y*o),u.y=e*Math.cos(a+y*o),u.z=e*Math.sin(i+b*s)*Math.sin(a+y*o),m.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),f.push(b+_,1-y),g.push(c++)}h.push(g)}for(let x=0;x<n;x++)for(let g=0;g<t;g++){let y=h[x][g+1],_=h[x][g],R=h[x+1][g],b=h[x+1][g+1];(x!==0||a>0)&&p.push(y,_,b),(x!==n-1||l<Math.PI)&&p.push(_,R,b)}this.setIndex(p),this.setAttribute("position",new Ce(m,3)),this.setAttribute("normal",new Ce(v,3)),this.setAttribute("uv",new Ce(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},oh=class r extends xr{constructor(e=1,t=0){super([1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},Fn=class r extends tt{constructor(e=1,t=.4,n=12,i=48,s=2*Math.PI){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);let a=[],o=[],l=[],c=[],h=new E,u=new E,d=new E;for(let p=0;p<=n;p++)for(let m=0;m<=i;m++){let v=m/i*s,f=p/n*Math.PI*2;u.x=(e+t*Math.cos(f))*Math.cos(v),u.y=(e+t*Math.cos(f))*Math.sin(v),u.z=t*Math.sin(f),o.push(u.x,u.y,u.z),h.x=e*Math.cos(v),h.y=e*Math.sin(v),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(m/i),c.push(p/n)}for(let p=1;p<=n;p++)for(let m=1;m<=i;m++){let v=(i+1)*p+m-1,f=(i+1)*(p-1)+m-1,x=(i+1)*(p-1)+m,g=(i+1)*p+m;a.push(v,f,g),a.push(f,x,g)}this.setIndex(a),this.setAttribute("position",new Ce(o,3)),this.setAttribute("normal",new Ce(l,3)),this.setAttribute("uv",new Ce(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},lh=class r extends tt{constructor(e=1,t=.4,n=64,i=8,s=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:i,p:s,q:a},n=Math.floor(n),i=Math.floor(i);let o=[],l=[],c=[],h=[],u=new E,d=new E,p=new E,m=new E,v=new E,f=new E,x=new E;for(let y=0;y<=n;++y){let _=y/n*s*Math.PI*2;g(_,s,a,e,p),g(_+.01,s,a,e,m),f.subVectors(m,p),x.addVectors(m,p),v.crossVectors(f,x),x.crossVectors(v,f),v.normalize(),x.normalize();for(let R=0;R<=i;++R){let b=R/i*Math.PI*2,S=-t*Math.cos(b),D=t*Math.sin(b);u.x=p.x+(S*x.x+D*v.x),u.y=p.y+(S*x.y+D*v.y),u.z=p.z+(S*x.z+D*v.z),l.push(u.x,u.y,u.z),d.subVectors(u,p).normalize(),c.push(d.x,d.y,d.z),h.push(y/n),h.push(R/i)}}for(let y=1;y<=n;y++)for(let _=1;_<=i;_++){let R=(i+1)*(y-1)+(_-1),b=(i+1)*y+(_-1),S=(i+1)*y+_,D=(i+1)*(y-1)+_;o.push(R,b,D),o.push(b,S,D)}function g(y,_,R,b,S){let D=Math.cos(y),M=Math.sin(y),L=R/_*y,N=Math.cos(L);S.x=b*(2+N)*.5*D,S.y=b*(2+N)*M*.5,S.z=b*Math.sin(L)*.5}this.setIndex(o),this.setAttribute("position",new Ce(l,3)),this.setAttribute("normal",new Ce(c,3)),this.setAttribute("uv",new Ce(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}},ga=class r extends tt{constructor(e=new Es(new E(-1,-1,0),new E(-1,1,0),new E(1,1,0)),t=64,n=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:s};let a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new E,l=new E,c=new re,h=new E,u=[],d=[],p=[],m=[];function v(f){h=e.getPointAt(f/t,h);let x=a.normals[f],g=a.binormals[f];for(let y=0;y<=i;y++){let _=y/i*Math.PI*2,R=Math.sin(_),b=-Math.cos(_);l.x=b*x.x+R*g.x,l.y=b*x.y+R*g.y,l.z=b*x.z+R*g.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,u.push(o.x,o.y,o.z)}}(function(){for(let f=0;f<t;f++)v(f);v(s===!1?t:0),function(){for(let f=0;f<=t;f++)for(let x=0;x<=i;x++)c.x=f/t,c.y=x/i,p.push(c.x,c.y)}(),function(){for(let f=1;f<=t;f++)for(let x=1;x<=i;x++){let g=(i+1)*(f-1)+(x-1),y=(i+1)*f+(x-1),_=(i+1)*f+x,R=(i+1)*(f-1)+x;m.push(g,y,R),m.push(y,_,R)}}()})(),this.setIndex(m),this.setAttribute("position",new Ce(u,3)),this.setAttribute("normal",new Ce(d,3)),this.setAttribute("uv",new Ce(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new r(new qo[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},ch=class extends tt{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],n=new Set,i=new E,s=new E;if(e.index!==null){let a=e.attributes.position,o=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let u=l[c],d=u.start;for(let p=d,m=d+u.count;p<m;p+=3)for(let v=0;v<3;v++){let f=o.getX(p+v),x=o.getX(p+(v+1)%3);i.fromBufferAttribute(a,f),s.fromBufferAttribute(a,x),mp(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}}else{let a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){let h=3*o+c,u=3*o+(c+1)%3;i.fromBufferAttribute(a,h),s.fromBufferAttribute(a,u),mp(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new Ce(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function mp(r,e,t){let n=`${r.x},${r.y},${r.z}-${e.x},${e.y},${e.z}`,i=`${e.x},${e.y},${e.z}-${r.x},${r.y},${r.z}`;return t.has(n)!==!0&&t.has(i)!==!0&&(t.add(n),t.add(i),!0)}var ev=Object.freeze({__proto__:null,BoxGeometry:ae,CapsuleGeometry:Ss,CircleGeometry:kn,ConeGeometry:Ni,CylinderGeometry:Oe,DodecahedronGeometry:eh,EdgesGeometry:th,ExtrudeGeometry:Mr,IcosahedronGeometry:Yn,LatheGeometry:Yo,OctahedronGeometry:rh,PlaneGeometry:Rt,PolyhedronGeometry:xr,RingGeometry:sh,ShapeGeometry:ah,SphereGeometry:qt,TetrahedronGeometry:oh,TorusGeometry:Fn,TorusKnotGeometry:lh,TubeGeometry:ga,WireframeGeometry:ch});var Zo=class extends At{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},lt=class extends on{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new _e(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},bn=class extends lt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new re(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ot(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new _e(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new _e(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new _e(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function Eo(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function Hg(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function zg(r){let e=r.length,t=new Array(e);for(let n=0;n!==e;++n)t[n]=n;return t.sort(function(n,i){return r[n]-r[i]}),t}function gp(r,e,t){let n=r.length,i=new r.constructor(n);for(let s=0,a=0;a!==n;++s){let o=t[s]*e;for(let l=0;l!==e;++l)i[a++]=r[o+l]}return i}function qp(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push.apply(t,a)),s=r[i++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=r[i++];while(s!==void 0)}var Oi=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],s=t[n-1];t:{e:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break e}a=t.length;break n}if(e>=s)break t;{let o=t[1];e<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}a=n,n=0}}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},hh=class extends Oi{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:sd,endingEnd:sd}}intervalChanged_(e,t,n){let i=this.parameterPositions,s=e-2,a=e+1,o=i[s],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case ad:s=e,o=2*t-n;break;case od:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case ad:a=e,l=2*n-t;break;case od:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}let c=.5*(n-t),h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,m=(n-t)/(i-t),v=m*m,f=v*m,x=-d*f+2*d*v-d*m,g=(1+d)*f+(-1.5-2*d)*v+(-.5+d)*m+1,y=(-1-p)*f+(1.5+p)*v+.5*m,_=p*f-p*v;for(let R=0;R!==o;++R)s[R]=x*a[h+R]+g*a[c+R]+y*a[l+R]+_*a[u+R];return s}},uh=class extends Oi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==o;++d)s[d]=a[c+d]*u+a[l+d]*h;return s}},dh=class extends Oi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},xn=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Eo(t,this.TimeBufferType),this.values=Eo(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Eo(e.times,Array),values:Eo(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new dh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new uh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new hh(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case us:t=this.InterpolantFactoryMethodDiscrete;break;case fr:t=this.InterpolantFactoryMethodLinear;break;case Vl:t=this.InterpolantFactoryMethodSmooth}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0){if(e===this.DefaultInterpolation)throw new Error(n);this.setInterpolation(this.DefaultInterpolation)}return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return us;case this.InterpolantFactoryMethodLinear:return fr;case this.InterpolantFactoryMethodSmooth:return Vl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!=0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&Hg(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Vl,s=e.length-1,a=1;for(let o=1;o<s;++o){let l=!1,c=e[o];if(c!==e[o+1]&&(o!==1||c!==e[0]))if(i)l=!0;else{let h=o*n,u=h-n,d=h+n;for(let p=0;p!==n;++p){let m=t[h+p];if(m!==t[u+p]||m!==t[d+p]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let h=o*n,u=a*n;for(let d=0;d!==n;++d)t[u+d]=t[h+d]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=new this.constructor(this.name,e,t);return n.createInterpolant=this.createInterpolant,n}};xn.prototype.TimeBufferType=Float32Array,xn.prototype.ValueBufferType=Float32Array,xn.prototype.DefaultInterpolation=fr;var Ei=class extends xn{};Ei.prototype.ValueTypeName="bool",Ei.prototype.ValueBufferType=Array,Ei.prototype.DefaultInterpolation=us,Ei.prototype.InterpolantFactoryMethodLinear=void 0,Ei.prototype.InterpolantFactoryMethodSmooth=void 0;var Ko=class extends xn{};Ko.prototype.ValueTypeName="color";var oi=class extends xn{};oi.prototype.ValueTypeName="number";var ph=class extends Oi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t),c=e*o;for(let h=c+o;c!==h;c+=4)un.slerpFlat(s,0,a,c-o,a,c,l);return s}},jn=class extends xn{InterpolantFactoryMethodLinear(e){return new ph(this.times,this.values,this.getValueSize(),e)}};jn.prototype.ValueTypeName="quaternion",jn.prototype.DefaultInterpolation=fr,jn.prototype.InterpolantFactoryMethodSmooth=void 0;var Si=class extends xn{};Si.prototype.ValueTypeName="string",Si.prototype.ValueBufferType=Array,Si.prototype.DefaultInterpolation=us,Si.prototype.InterpolantFactoryMethodLinear=void 0,Si.prototype.InterpolantFactoryMethodSmooth=void 0;var li=class extends xn{};li.prototype.ValueTypeName="vector";var Jo=class{constructor(e,t=-1,n,i=2500){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=yn(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Gg(n[a]).scale(i));let s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,a=n.length;s!==a;++s)t.push(xn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let s=t.length,a=[];for(let o=0;o<s;o++){let l=[],c=[];l.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);let h=zg(l);l=gp(l,1,h),c=gp(c,1,h),i||l[0]!==0||(l.push(s),c.push(c[0])),a.push(new oi(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let c=e[o],h=c.name.match(s);if(h&&h.length>1){let u=h[1],d=i[u];d||(i[u]=d=[]),d.push(c)}}let a=[];for(let o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(h,u,d,p,m){if(d.length!==0){let v=[],f=[];qp(d,v,f,p),v.length!==0&&m.push(new h(u,v,f))}},i=[],s=e.name||"default",a=e.fps||30,o=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let h=0;h<c.length;h++){let u=c[h].keys;if(u&&u.length!==0)if(u[0].morphTargets){let d={},p;for(p=0;p<u.length;p++)if(u[p].morphTargets)for(let m=0;m<u[p].morphTargets.length;m++)d[u[p].morphTargets[m]]=-1;for(let m in d){let v=[],f=[];for(let x=0;x!==u[p].morphTargets.length;++x){let g=u[p];v.push(g.time),f.push(g.morphTarget===m?1:0)}i.push(new oi(".morphTargetInfluence["+m+"]",v,f))}l=d.length*a}else{let d=".bones["+t[h].name+"]";n(li,d+".position",u,"pos",i),n(jn,d+".quaternion",u,"rot",i),n(li,d+".scale",u,"scl",i)}}return i.length===0?null:new this(s,l,i,o)}resetDuration(){let e=0;for(let t=0,n=this.tracks.length;t!==n;++t){let i=this.tracks[t];e=Math.max(e,i.times[i.times.length-1])}return this.duration=e,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function Gg(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=function(t){switch(t.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return oi;case"vector":case"vector2":case"vector3":case"vector4":return li;case"color":return Ko;case"quaternion":return jn;case"bool":case"boolean":return Ei;case"string":return Si}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+t)}(r.type);if(r.times===void 0){let t=[],n=[];qp(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}var Ai={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}},fh=class{constructor(e,t,n){let i=this,s,a=!1,o=0,l=0,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){l++,a===!1&&i.onStart!==void 0&&i.onStart(h,o,l),a=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,l),o===l&&(a=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return s?s(h):h},this.setURLModifier=function(h){return s=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let p=c[u],m=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return m}return null}}},Vg=new fh,ci=class{constructor(e){this.manager=e!==void 0?e:Vg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};ci.DEFAULT_MATERIAL_NAME="__DEFAULT";var ii={},mh=class extends Error{constructor(e,t){super(e),this.response=t}},va=class extends ci{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=Ai.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(ii[e]!==void 0)return void ii[e].push({onLoad:t,onProgress:n,onError:i});ii[e]=[],ii[e].push({onLoad:t,onProgress:n,onError:i});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=ii[e],u=c.body.getReader(),d=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),p=d?parseInt(d):0,m=p!==0,v=0,f=new ReadableStream({start(x){(function g(){u.read().then(({done:y,value:_})=>{if(y)x.close();else{v+=_.byteLength;let R=new ProgressEvent("progress",{lengthComputable:m,loaded:v,total:p});for(let b=0,S=h.length;b<S;b++){let D=h[b];D.onProgress&&D.onProgress(R)}x.enqueue(_),g()}})})()}});return new Response(f)}throw new mh(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o===void 0)return c.text();{let h=/charset="?([^;"\s]*)"?/i.exec(o),u=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(u);return c.arrayBuffer().then(p=>d.decode(p))}}}).then(c=>{Ai.add(e,c);let h=ii[e];delete ii[e];for(let u=0,d=h.length;u<d;u++){let p=h[u];p.onLoad&&p.onLoad(c)}}).catch(c=>{let h=ii[e];if(h===void 0)throw this.manager.itemError(e),c;delete ii[e];for(let u=0,d=h.length;u<d;u++){let p=h[u];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var gh=class extends ci{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=Ai.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;let o=oa("img");function l(){h(),Ai.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(u){h(),i&&i(u),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}};var $o=class extends ci{constructor(e){super(e)}load(e,t,n,i){let s=new jt,a=new gh(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}},Ts=class extends mt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new _e(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},Qo=class extends Ts{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new _e(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},_c=new Le,vp=new E,yp=new E,ya=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new re(512,512),this.map=null,this.mapPass=null,this.matrix=new Le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new gs,this._frameExtents=new re(1,1),this._viewportCount=1,this._viewports=[new ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;vp.setFromMatrixPosition(e.matrixWorld),t.position.copy(vp),yp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(yp),t.updateMatrixWorld(),_c.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_c),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(_c)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),this.mapSize.x===512&&this.mapSize.y===512||(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},vh=class extends ya{constructor(){super(new Tt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=2*ps*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;n===t.fov&&i===t.aspect&&s===t.far||(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},el=class extends Ts{constructor(e,t,n=0,i=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.target=new mt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new vh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},xp=new Le,Qs=new E,Mc=new E,yh=class extends ya{constructor(){super(new Tt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new re(4,2),this._viewportCount=6,this._viewports=[new ut(2,1,1,1),new ut(0,1,1,1),new ut(3,1,1,1),new ut(1,1,1,1),new ut(3,0,1,1),new ut(1,0,1,1)],this._cubeDirections=[new E(1,0,0),new E(-1,0,0),new E(0,0,1),new E(0,0,-1),new E(0,1,0),new E(0,-1,0)],this._cubeUps=[new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,0,1),new E(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Qs.setFromMatrixPosition(e.matrixWorld),n.position.copy(Qs),Mc.copy(n.position),Mc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Mc),n.updateMatrixWorld(),i.makeTranslation(-Qs.x,-Qs.y,-Qs.z),xp.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xp)}},ws=class extends Ts{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new yh}get power(){return 4*this.intensity*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},xh=class extends ya{constructor(){super(new Li(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},br=class extends Ts{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.target=new mt,this.shadow=new xh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Bi=class{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var tl=class extends ci{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=Ai.get(e);if(a!==void 0)return s.manager.itemStart(e),a.then?void a.then(c=>{t&&t(c),s.manager.itemEnd(e)}).catch(c=>{i&&i(c)}):(setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a);let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;let l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return Ai.add(e,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){i&&i(c),Ai.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});Ai.add(e,l),s.manager.itemStart(e)}};var tv=new Le,nv=new Le,iv=new Le;var As=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=_p(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=_p();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function _p(){return(typeof performance>"u"?Date:performance).now()}var rv=new E,sv=new un,av=new E,ov=new E;var lv=new E,cv=new un,hv=new E,uv=new E;var Ph="\\[\\]\\.:\\/",Wg=new RegExp("["+Ph+"]","g"),bc="[^"+Ph+"]",Xg="[^"+Ph.replace("\\.","")+"]",jg=new RegExp("^"+/((?:WC+[\/:])*)/.source.replace("WC",bc)+/(WCOD+)?/.source.replace("WCOD",Xg)+/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",bc)+/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",bc)+"$"),qg=["material","materials","bones","map"],ft=class r{constructor(e,t,n){this.path=t,this.parsedPath=n||r.parseTrackName(t),this.node=r.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new r.Composite(e,t,n):new r(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Wg,"")}static parseTrackName(e){let t=jg.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);qg.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,s=t.propertyIndex;if(e||(e=r.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e)return void console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.materials)return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);e=e.material.materials;break;case"bones":if(!e.skeleton)return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.map)return void console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);e=e.material.map;break;default:if(e[n]===void 0)return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);e=e[n]}if(c!==void 0){if(e[c]===void 0)return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);e=e[c]}}let a=e[i];if(a===void 0){let c=t.nodeName;return void console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e)}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);if(!e.geometry.morphAttributes)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ft.Composite=class{constructor(r,e,t){let n=t||ft.parseTrackName(e);this._targetGroup=r,this._bindings=r.subscribe_(e,n)}getValue(r,e){this.bind();let t=this._targetGroup.nCachedObjects_,n=this._bindings[t];n!==void 0&&n.getValue(r,e)}setValue(r,e){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].setValue(r,e)}bind(){let r=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=r.length;e!==t;++e)r[e].bind()}unbind(){let r=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=r.length;e!==t;++e)r[e].unbind()}},ft.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},ft.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},ft.prototype.GetterByBindingType=[ft.prototype._getValue_direct,ft.prototype._getValue_array,ft.prototype._getValue_arrayElement,ft.prototype._getValue_toArray],ft.prototype.SetterByBindingTypeAndVersioning=[[ft.prototype._setValue_direct,ft.prototype._setValue_direct_setNeedsUpdate,ft.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_array,ft.prototype._setValue_array_setNeedsUpdate,ft.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_arrayElement,ft.prototype._setValue_arrayElement_setNeedsUpdate,ft.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_fromArray,ft.prototype._setValue_fromArray_setNeedsUpdate,ft.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var dv=new Float32Array(1);var pv=new re;var fv=new E,mv=new E;var gv=new E;var vv=new E,yv=new Le,xv=new Le;var _v=new E,Mv=new _e,bv=new _e;var Ev=new E,Sv=new E,Tv=new E;var wv=new E,Av=new la;var Rv=new sn;var Cv=new E;typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ec}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ec);var Ma=new E;function En(r,e,t,n,i,s){let a=2*Math.PI*i/4,o=Math.max(s-2*i,0),l=Math.PI/4;Ma.copy(e),Ma[n]=0,Ma.normalize();let c=.5*a/(a+o),h=1-Ma.angleTo(r)/l;return Math.sign(Ma[t])===1?h*c:o/(a+o)+c+c*(1-h)}var Ps=class extends ae{constructor(e=1,t=1,n=1,i=2,s=.1){if(i=i*2+1,s=Math.min(e/2,t/2,n/2,s),super(1,1,1,i,i,i),i===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let o=new E,l=new E,c=new E(e,t,n).divideScalar(2).subScalar(s),h=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,p=h.length/6,m=new E,v=.5/i;for(let f=0,x=0;f<h.length;f+=3,x+=2)switch(o.fromArray(h,f),l.copy(o),l.x-=Math.sign(l.x)*v,l.y-=Math.sign(l.y)*v,l.z-=Math.sign(l.z)*v,l.normalize(),h[f+0]=c.x*Math.sign(o.x)+l.x*s,h[f+1]=c.y*Math.sign(o.y)+l.y*s,h[f+2]=c.z*Math.sign(o.z)+l.z*s,u[f+0]=l.x,u[f+1]=l.y,u[f+2]=l.z,Math.floor(f/p)){case 0:m.set(1,0,0),d[x+0]=En(m,l,"z","y",s,n),d[x+1]=1-En(m,l,"y","z",s,t);break;case 1:m.set(-1,0,0),d[x+0]=1-En(m,l,"z","y",s,n),d[x+1]=1-En(m,l,"y","z",s,t);break;case 2:m.set(0,1,0),d[x+0]=1-En(m,l,"x","z",s,e),d[x+1]=En(m,l,"z","x",s,n);break;case 3:m.set(0,-1,0),d[x+0]=1-En(m,l,"x","z",s,e),d[x+1]=1-En(m,l,"z","x",s,n);break;case 4:m.set(0,0,1),d[x+0]=1-En(m,l,"x","y",s,e),d[x+1]=1-En(m,l,"y","x",s,t);break;case 5:m.set(0,0,-1),d[x+0]=En(m,l,"x","y",s,e),d[x+1]=1-En(m,l,"y","x",s,t);break}}};function Zp(r,e=!1){let t=r[0].index!==null,n=new Set(Object.keys(r[0].attributes)),i=new Set(Object.keys(r[0].morphAttributes)),s={},a={},o=r[0].morphTargetsRelative,l=new tt,c=0;for(let h=0;h<r.length;++h){let u=r[h],d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in u.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;s[p]===void 0&&(s[p]=[]),s[p].push(u.attributes[p]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in u.morphAttributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[p]===void 0&&(a[p]=[]),a[p].push(u.morphAttributes[p])}if(e){let p;if(t)p=u.index.count;else if(u.attributes.position!==void 0)p=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,h),c+=p}}if(t){let h=0,u=[];for(let d=0;d<r.length;++d){let p=r[d].index;for(let m=0;m<p.count;++m)u.push(p.getX(m)+h);h+=r[d].attributes.position.count}l.setIndex(u)}for(let h in s){let u=Yp(s[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in a){let u=a[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){let p=[];for(let v=0;v<a[h].length;++v)p.push(a[h][v][d]);let m=Yp(p);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(m)}}return l}function Yp(r){let e,t,n,i=-1,s=0;for(let c=0;c<r.length;++c){let h=r[c];if(h.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.array.length}let a=new e(s),o=0;for(let c=0;c<r.length;++c)a.set(r[c].array,o),o+=r[c].array.length;let l=new dt(a,t,n);return i!==void 0&&(l.gpuType=i),l}function Lh(r,e){if(e===Ip)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===_a||e===il){let t=r.getIndex();if(t===null){let a=[],o=r.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);r.setIndex(a),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}let n=t.count-2,i=[];if(e===_a)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}var ol=class extends ci{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new kh(t)}),this.register(function(t){return new qh(t)}),this.register(function(t){return new Yh(t)}),this.register(function(t){return new Zh(t)}),this.register(function(t){return new Hh(t)}),this.register(function(t){return new zh(t)}),this.register(function(t){return new Gh(t)}),this.register(function(t){return new Vh(t)}),this.register(function(t){return new Bh(t)}),this.register(function(t){return new Wh(t)}),this.register(function(t){return new Fh(t)}),this.register(function(t){return new jh(t)}),this.register(function(t){return new Xh(t)}),this.register(function(t){return new Uh(t)}),this.register(function(t){return new Kh(t)}),this.register(function(t){return new Jh(t)})}load(e,t,n,i){let s=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let c=Bi.extractUrlBase(e);a=Bi.resolveURL(c,this.path)}else a=Bi.extractUrlBase(e);this.manager.itemStart(e);let o=function(c){i?i(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new va(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,a,function(h){t(h),s.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s,a={},o={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===ef){try{a[Xe.KHR_BINARY_GLTF]=new $h(e)}catch(u){i&&i(u);return}s=JSON.parse(a[Xe.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new su(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){let u=s.extensionsUsed[h],d=s.extensionsRequired||[];switch(u){case Xe.KHR_MATERIALS_UNLIT:a[u]=new Oh;break;case Xe.KHR_DRACO_MESH_COMPRESSION:a[u]=new Qh(s,this.dracoLoader);break;case Xe.KHR_TEXTURE_TRANSFORM:a[u]=new eu;break;case Xe.KHR_MESH_QUANTIZATION:a[u]=new tu;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}};function Yg(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}var Xe={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Uh=class{constructor(e){this.parser=e,this.name=Xe.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e],c,h=new _e(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],Bt);let u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new br(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new ws(h),c.distance=u;break;case"spot":c=new el(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Hi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,s=n.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}},Oh=class{constructor(){this.name=Xe.KHR_MATERIALS_UNLIT}getMaterialType(){return et}extendParams(e,t,n){let i=[];e.color=new _e(1,1,1),e.opacity=1;let s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){let a=s.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Bt),e.opacity=a[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,st))}return Promise.all(i)}},Bh=class{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}},kh=class{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){let o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new re(o,o)}return Promise.all(s)}},Fh=class{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(s)}},Hh=class{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[];t.sheenColor=new _e(0,0,0),t.sheenRoughness=0,t.sheen=1;let a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){let o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],Bt)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,st)),a.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(s)}},zh=class{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(s)}},Gh=class{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;let o=a.attenuationColor||[1,1,1];return t.attenuationColor=new _e().setRGB(o[0],o[1],o[2],Bt),Promise.all(s)}},Vh=class{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bn}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}},Wh=class{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));let o=a.specularColorFactor||[1,1,1];return t.specularColor=new _e().setRGB(o[0],o[1],o[2],Bt),a.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,st)),Promise.all(s)}},Xh=class{constructor(e){this.parser=e,this.name=Xe.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(s)}},jh=class{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(s)}},qh=class{constructor(e){this.parser=e,this.name=Xe.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let s=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,a)}},Yh=class{constructor(e){this.parser=e,this.name=Xe.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;let a=s.extensions[t],o=i.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Zh=class{constructor(e){this.parser=e,this.name=Xe.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;let a=s.extensions[t],o=i.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Kh=class{constructor(e){this.name=Xe.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){let l=i.byteOffset||0,c=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(p){return p.buffer}):a.ready.then(function(){let p=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(p),h,u,d,i.mode,i.filter),p})})}else return null}},Jh=class{constructor(e){this.name=Xe.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let c of i.primitives)if(c.mode!==Sn.TRIANGLES&&c.mode!==Sn.TRIANGLE_STRIP&&c.mode!==Sn.TRIANGLE_FAN&&c.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],l={};for(let c in a)o.push(this.parser.getDependency("accessor",a[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{let h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,p=[];for(let m of u){let v=new Le,f=new E,x=new un,g=new E(1,1,1),y=new xs(m.geometry,m.material,d);for(let _=0;_<d;_++)l.TRANSLATION&&f.fromBufferAttribute(l.TRANSLATION,_),l.ROTATION&&x.fromBufferAttribute(l.ROTATION,_),l.SCALE&&g.fromBufferAttribute(l.SCALE,_),y.setMatrixAt(_,v.compose(f,x,g));for(let _ in l)if(_==="_COLOR_0"){let R=l[_];y.instanceColor=new gr(R.array,R.itemSize,R.normalized)}else _!=="TRANSLATION"&&_!=="ROTATION"&&_!=="SCALE"&&m.geometry.setAttribute(_,l[_]);mt.prototype.copy.call(y,m),this.parser.assignFinalMaterial(y),p.push(y)}return h.isGroup?(h.clear(),h.add(...p),h):p[0]}))}},ef="glTF",ba=12,Kp={JSON:1313821514,BIN:5130562},$h=class{constructor(e){this.name=Xe.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,ba),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==ef)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-ba,s=new DataView(e,ba),a=0;for(;a<i;){let o=s.getUint32(a,!0);a+=4;let l=s.getUint32(a,!0);if(a+=4,l===Kp.JSON){let c=new Uint8Array(e,ba+a,o);this.content=n.decode(c)}else if(l===Kp.BIN){let c=ba+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Qh=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Xe.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(let h in a){let u=iu[h]||h.toLowerCase();o[u]=a[h]}for(let h in e.attributes){let u=iu[h]||h.toLowerCase();if(a[h]!==void 0){let d=n.accessors[e.attributes[h]],p=Ls[d.componentType];c[u]=p.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(p){for(let m in p.attributes){let v=p.attributes[m],f=l[m];f!==void 0&&(v.normalized=f)}u(p)},o,c,Bt,d)})})}},eu=class{constructor(){this.name=Xe.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},tu=class{constructor(){this.name=Xe.KHR_MESH_QUANTIZATION}},ll=class extends Oi{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[s+a];return t}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=i-t,u=(n-t)/h,d=u*u,p=d*u,m=e*c,v=m-c,f=-2*p+3*d,x=p-d,g=1-f,y=x-d+u;for(let _=0;_!==o;_++){let R=a[v+_+o],b=a[v+_+l]*h,S=a[m+_+o],D=a[m+_]*h;s[_]=g*R+y*b+f*S+x*D}return s}},Zg=new un,nu=class extends ll{interpolate_(e,t,n,i){let s=super.interpolate_(e,t,n,i);return Zg.fromArray(s).normalize().toArray(s),s}},Sn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Ls={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Jp={9728:Xt,9729:rn,9984:So,9985:Th,9986:ea,9987:pr},$p={33071:Un,33648:aa,10497:dr},Ih={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},iu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Fi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Kg={CUBICSPLINE:void 0,LINEAR:fr,STEP:us},Dh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Jg(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new lt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:qn})),r.DefaultMaterial}function Er(r,e,t){for(let n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Hi(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function $g(r,e,t){let n=!1,i=!1,s=!1;for(let c=0,h=e.length;c<h;c++){let u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);let a=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){let u=e[c];if(n){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):r.attributes.position;a.push(d)}if(i){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):r.attributes.normal;o.push(d)}if(s){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):r.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){let h=c[0],u=c[1],d=c[2];return n&&(r.morphAttributes.position=h),i&&(r.morphAttributes.normal=u),s&&(r.morphAttributes.color=d),r.morphTargetsRelative=!0,r})}function Qg(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function e0(r){let e,t=r.extensions&&r.extensions[Xe.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Nh(t.attributes):e=r.indices+":"+Nh(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+Nh(r.targets[n]);return e}function Nh(r){let e="",t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function ru(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function t0(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}var n0=new Le,su=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Yg,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,s=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,s=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&s<98?this.textureLoader=new $o(this.options.manager):this.textureLoader=new tl(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new va(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return Er(s,o,i),Hi(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){let a=t[i].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let i=0,s=e.length;i<s;i++){let a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),s=(a,o)=>{let l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(let[c,h]of a.children.entries())s(h,o.children[c])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Xe.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(s,a){n.load(Bi.resolveURL(t.uri,i.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let a=Ih[i.type],o=Ls[i.componentType],l=i.normalized===!0,c=new o(i.count*a);return Promise.resolve(new dt(c,a,l))}let s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(a){let o=a[0],l=Ih[i.type],c=Ls[i.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=i.byteOffset||0,p=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,m=i.normalized===!0,v,f;if(p&&p!==u){let x=Math.floor(d/p),g="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+x+":"+i.count,y=t.cache.get(g);y||(v=new c(o,x*p,i.count*p/h),y=new ys(v,p/h),t.cache.add(g,y)),f=new mr(y,l,d%p/h,m)}else o===null?v=new c(i.count*l):v=new c(o,d,i.count*l),f=new dt(v,l,m);if(i.sparse!==void 0){let x=Ih.SCALAR,g=Ls[i.sparse.indices.componentType],y=i.sparse.indices.byteOffset||0,_=i.sparse.values.byteOffset||0,R=new g(a[1],y,i.sparse.count*x),b=new c(a[2],_,i.sparse.count*l);o!==null&&(f=new dt(f.array.slice(),f.itemSize,f.normalized));for(let S=0,D=R.length;S<D;S++){let M=R[S];if(f.setX(M,b[S*l]),l>=2&&f.setY(M,b[S*l+1]),l>=3&&f.setZ(M,b[S*l+2]),l>=4&&f.setW(M,b[S*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return f})}loadTexture(e){let t=this.json,n=this.options,s=t.textures[e].source,a=t.images[s],o=this.textureLoader;if(a.uri){let l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,n){let i=this,s=this.json,a=s.textures[e],o=s.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let d=(s.samplers||{})[a.sampler]||{};return h.magFilter=Jp[d.magFilter]||rn,h.minFilter=Jp[d.minFilter]||pr,h.wrapS=$p[d.wrapS]||dr,h.wrapT=$p[d.wrapT]||dr,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let a=i.images[e],o=self.URL||self.webkitURL,l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(u){c=!0;let d=new Blob([u],{type:a.mimeType});return l=o.createObjectURL(d),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(l).then(function(u){return new Promise(function(d,p){let m=d;t.isImageBitmapLoader===!0&&(m=function(v){let f=new jt(v);f.needsUpdate=!0,d(f)}),t.load(Bi.resolveURL(u,s.path),m,void 0,p)})}).then(function(u){return c===!0&&o.revokeObjectURL(l),u.userData.mimeType=a.mimeType||t0(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){let s=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),s.extensions[Xe.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[Xe.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let l=s.associations.get(a);a=s.extensions[Xe.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,l)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new yr,on.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new vr,on.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(i||s||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),s&&(l.vertexColors=!0),a&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return lt}loadMaterial(e){let t=this,n=this.json,i=this.extensions,s=n.materials[e],a,o={},l=s.extensions||{},c=[];if(l[Xe.KHR_MATERIALS_UNLIT]){let u=i[Xe.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),c.push(u.extendParams(o,s,t))}else{let u=s.pbrMetallicRoughness||{};if(o.color=new _e(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],Bt),o.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",u.baseColorTexture,st)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=Hn);let h=s.alphaMode||Dh.OPAQUE;if(h===Dh.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===Dh.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==et&&(c.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new re(1,1),s.normalTexture.scale!==void 0)){let u=s.normalTexture.scale;o.normalScale.set(u,u)}if(s.occlusionTexture!==void 0&&a!==et&&(c.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==et){let u=s.emissiveFactor;o.emissive=new _e().setRGB(u[0],u[1],u[2],Bt)}return s.emissiveTexture!==void 0&&a!==et&&c.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,st)),Promise.all(c).then(function(){let u=new a(o);return s.name&&(u.name=s.name),Hi(u,s),t.associations.set(u,{materials:e}),s.extensions&&Er(i,u,s),u})}createUniqueName(e){let t=ft.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function s(o){return n[Xe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Qp(l,o,t)})}let a=[];for(let o=0,l=e.length;o<l;o++){let c=e[o],h=e0(c),u=i[h];if(u)a.push(u.promise);else{let d;c.extensions&&c.extensions[Xe.KHR_DRACO_MESH_COMPRESSION]?d=s(c):d=Qp(new tt,c,t),i[h]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,i=this.extensions,s=n.meshes[e],a=s.primitives,o=[];for(let l=0,c=a.length;l<c;l++){let h=a[l].material===void 0?Jg(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let p=0,m=h.length;p<m;p++){let v=h[p],f=a[p],x,g=c[p];if(f.mode===Sn.TRIANGLES||f.mode===Sn.TRIANGLE_STRIP||f.mode===Sn.TRIANGLE_FAN||f.mode===void 0)x=s.isSkinnedMesh===!0?new Ho(v,g):new Se(v,g),x.isSkinnedMesh===!0&&x.normalizeSkinWeights(),f.mode===Sn.TRIANGLE_STRIP?x.geometry=Lh(x.geometry,il):f.mode===Sn.TRIANGLE_FAN&&(x.geometry=Lh(x.geometry,_a));else if(f.mode===Sn.LINES)x=new Ms(v,g);else if(f.mode===Sn.LINE_STRIP)x=new _s(v,g);else if(f.mode===Sn.LINE_LOOP)x=new Go(v,g);else if(f.mode===Sn.POINTS)x=new bs(v,g);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+f.mode);Object.keys(x.geometry.morphAttributes).length>0&&Qg(x,s),x.name=t.createUniqueName(s.name||"mesh_"+e),Hi(x,s),f.extensions&&Er(i,x,f),t.assignFinalMaterial(x),u.push(x)}for(let p=0,m=u.length;p<m;p++)t.associations.set(u[p],{meshes:e,primitives:p});if(u.length===1)return s.extensions&&Er(i,u[0],s),u[0];let d=new Ae;s.extensions&&Er(i,d,s),t.associations.set(d,{meshes:e});for(let p=0,m=u.length;p<m;p++)d.add(u[p]);return d})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Tt(Np.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Li(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Hi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let s=i.pop(),a=i,o=[],l=[];for(let c=0,h=a.length;c<h;c++){let u=a[c];if(u){o.push(u);let d=new Le;s!==null&&d.fromArray(s.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new zo(o,l)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,a=[],o=[],l=[],c=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){let p=i.channels[u],m=i.samplers[p.sampler],v=p.target,f=v.node,x=i.parameters!==void 0?i.parameters[m.input]:m.input,g=i.parameters!==void 0?i.parameters[m.output]:m.output;v.node!==void 0&&(a.push(this.getDependency("node",f)),o.push(this.getDependency("accessor",x)),l.push(this.getDependency("accessor",g)),c.push(m),h.push(v))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){let d=u[0],p=u[1],m=u[2],v=u[3],f=u[4],x=[];for(let g=0,y=d.length;g<y;g++){let _=d[g],R=p[g],b=m[g],S=v[g],D=f[g];if(_===void 0)continue;_.updateMatrix&&_.updateMatrix();let M=n._createAnimationTracks(_,R,b,S,D);if(M)for(let L=0;L<M.length;L++)x.push(M[L])}return new Jo(s,void 0,x)})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){let a=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=i.weights.length;l<c;l++)o.morphTargetInfluences[l]=i.weights[l]}),a})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),a=[],o=i.children||[];for(let c=0,h=o.length;c<h;c++)a.push(n.getDependency("node",o[c]));let l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(a),l]).then(function(c){let h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(p){p.isSkinnedMesh&&p.bind(d,n0)});for(let p=0,m=u.length;p<m;p++)h.add(u[p]);return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let s=t.nodes[e],a=s.name?i.createUniqueName(s.name):"",o=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),s.camera!==void 0&&o.push(i.getDependency("camera",s.camera).then(function(c){return i._getNodeRef(i.cameraCache,s.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(s.isBone===!0?h=new ha:c.length>1?h=new Ae:c.length===1?h=c[0]:h=new mt,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(s.name&&(h.userData.name=s.name,h.name=a),Hi(h,s),s.extensions&&Er(n,h,s),s.matrix!==void 0){let u=new Le;u.fromArray(s.matrix),h.applyMatrix4(u)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,s=new Ae;n.name&&(s.name=i.createUniqueName(n.name)),Hi(s,n),n.extensions&&Er(t,s,n);let a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(i.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let h=0,u=l.length;h<u;h++)s.add(l[h]);let c=h=>{let u=new Map;for(let[d,p]of i.associations)(d instanceof on||d instanceof jt)&&u.set(d,p);return h.traverse(d=>{let p=i.associations.get(d);p!=null&&u.set(d,p)}),u};return i.associations=c(s),s})}_createAnimationTracks(e,t,n,i,s){let a=[],o=e.name?e.name:e.uuid,l=[];Fi[s.path]===Fi.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(o);let c;switch(Fi[s.path]){case Fi.weights:c=oi;break;case Fi.rotation:c=jn;break;case Fi.position:case Fi.scale:c=li;break;default:switch(n.itemSize){case 1:c=oi;break;case 2:case 3:default:c=li;break}break}let h=i.interpolation!==void 0?Kg[i.interpolation]:fr,u=this._getArrayFromAccessor(n);for(let d=0,p=l.length;d<p;d++){let m=new c(l[d]+"."+Fi[s.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(m),a.push(m)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=ru(t.constructor),i=new Float32Array(t.length);for(let s=0,a=t.length;s<a;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof jn?nu:ll;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function i0(r,e,t){let n=e.attributes,i=new sn;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(i.set(new E(l[0],l[1],l[2]),new E(c[0],c[1],c[2])),o.normalized){let h=ru(Ls[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let s=e.targets;if(s!==void 0){let o=new E,l=new E;for(let c=0,h=s.length;c<h;c++){let u=s[c];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],p=d.min,m=d.max;if(p!==void 0&&m!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(m[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(m[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(m[2]))),d.normalized){let v=ru(Ls[d.componentType]);l.multiplyScalar(v)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}r.boundingBox=i;let a=new an;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=a}function Qp(r,e,t){let n=e.attributes,i=[];function s(a,o){return t.getDependency("accessor",a).then(function(l){r.setAttribute(o,l)})}for(let a in n){let o=iu[a]||a.toLowerCase();o in r.attributes||i.push(s(n[a],o))}if(e.indices!==void 0&&!r.index){let a=t.getDependency("accessor",e.indices).then(function(o){r.setIndex(o)});i.push(a)}return Qe.workingColorSpace!==Bt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Qe.workingColorSpace}" not supported.`),Hi(r,e),i0(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?$g(r,e.targets,t):r})}var cl=class extends Ii{constructor(e=null){super();let t=new ae;t.deleteAttribute("uv");let n=new lt({side:Vt}),i=new lt,s=5;e!==null&&e._useLegacyLights===!1&&(s=900);let a=new ws(16777215,s,28,2);a.position.set(.418,16.199,.3),this.add(a);let o=new Se(t,n);o.position.set(-.757,13.219,.717),o.scale.set(31.713,28.305,28.591),this.add(o);let l=new Se(t,i);l.position.set(-10.906,2.009,1.846),l.rotation.set(0,-.195,0),l.scale.set(2.328,7.905,4.651),this.add(l);let c=new Se(t,i);c.position.set(-5.607,-.754,-.758),c.rotation.set(0,.994,0),c.scale.set(1.97,1.534,3.955),this.add(c);let h=new Se(t,i);h.position.set(6.167,.857,7.803),h.rotation.set(0,.561,0),h.scale.set(3.927,6.285,3.687),this.add(h);let u=new Se(t,i);u.position.set(-2.017,.018,6.124),u.rotation.set(0,.333,0),u.scale.set(2.002,4.566,2.064),this.add(u);let d=new Se(t,i);d.position.set(2.291,-.756,-2.621),d.rotation.set(0,-.286,0),d.scale.set(1.546,1.552,1.496),this.add(d);let p=new Se(t,i);p.position.set(-2.193,-.369,-5.547),p.rotation.set(0,.516,0),p.scale.set(3.875,3.487,2.986),this.add(p);let m=new Se(t,Is(50));m.position.set(-16.116,14.37,8.208),m.scale.set(.1,2.428,2.739),this.add(m);let v=new Se(t,Is(50));v.position.set(-16.109,18.021,-8.207),v.scale.set(.1,2.425,2.751),this.add(v);let f=new Se(t,Is(17));f.position.set(14.904,12.198,-1.832),f.scale.set(.15,4.265,6.331),this.add(f);let x=new Se(t,Is(43));x.position.set(-.462,8.89,14.52),x.scale.set(4.38,5.441,.088),this.add(x);let g=new Se(t,Is(20));g.position.set(3.235,11.486,-12.541),g.scale.set(2.5,2,.1),this.add(g);let y=new Se(t,Is(100));y.position.set(0,20,0),y.scale.set(1,.1,1),this.add(y)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Is(r){let e=new et;return e.color.setScalar(r),e}var hl={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var dn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},r0=new Li(-1,1,1,-1,0,1),au=class extends tt{constructor(){super(),this.setAttribute("position",new Ce([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ce([0,2,0,0,2,0],2))}},s0=new au,zi=class{constructor(e){this._mesh=new Se(s0,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,r0)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var ul=class extends dn{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof At?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=ki.clone(e.uniforms),this.material=new At({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new zi(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Ea=class extends dn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let i=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}},dl=class extends dn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var pl=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new re);this._width=n.width,this._height=n.height,t=new en(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Bn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ul(hl),this.copyPass.material.blending=bp,this.clock=new As}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let i=0,s=this.passes.length;i<s;i++){let a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Ea!==void 0&&(a instanceof Ea?n=!0:a instanceof dl&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new re);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var fl=class extends dn{constructor(e,t,n=null,i=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new _e}render(e,t,n){let i=e.autoClear;e.autoClear=!1;let s,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=i}};var tf={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new _e(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Ds=class r extends dn{constructor(e,t,n,i){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new re(e.x,e.y):new re(256,256),this.clearColor=new _e(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new en(s,a,{type:Bn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let d=new en(s,a,{type:Bn});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let p=new en(s,a,{type:Bn});p.texture.name="UnrealBloomPass.v"+u,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),s=Math.round(s/2),a=Math.round(a/2)}let o=tf;this.highPassUniforms=ki.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new At({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new re(1/s,1/a),s=Math.round(s/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new E(1,1,1),new E(1,1,1),new E(1,1,1),new E(1,1,1),new E(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=hl;this.copyUniforms=ki.clone(h.uniforms),this.blendMaterial=new At({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Ct,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new _e,this.oldClearAlpha=1,this.basic=new et,this.fsQuad=new zi(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,i),this.renderTargetsVertical[s].setSize(n,i),this.separableBlurMaterials[s].uniforms.invSize.value=new re(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=r.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=r.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}getSeperableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new At({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new re(.5,.5)},direction:{value:new re(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new At({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};Ds.BlurDirectionX=new re(1,0);Ds.BlurDirectionY=new re(0,1);var nf={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var ml=class extends dn{constructor(){super();let e=nf;this.uniforms=ki.clone(e.uniforms),this.material=new Zo({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new zi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Qe.getTransfer(this._outputColorSpace)===ht&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Mh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===bh?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Eh?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===xa?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Sh&&(this.material.defines.AGX_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var at=(r,e={})=>new lt(Object.assign({color:r,roughness:.6,metalness:0},e));function Te(r,e,t,n,i,s,a=!0){let o=new Se(r,e);return o.position.set(n,i,s),o.castShadow=a,o.receiveShadow=!0,t.add(o),o}var Pt=(r,e,t,n=.12)=>new Ps(r,e,t,3,n);function Sr(r,e={}){let t=Object.assign({w:1024,h:256,bg:null,fg:"#ffffff",sub:"",subFg:"#d9f3e8",font:"900",pad:60},e),n=document.createElement("canvas");n.width=t.w,n.height=t.h;let i=n.getContext("2d");t.bg&&(i.fillStyle=t.bg,i.fillRect(0,0,t.w,t.h)),i.fillStyle=t.fg,i.textAlign="center",i.textBaseline="middle";let s=t.h*(t.sub?.44:.6);for(i.font=`${t.font} ${s}px Inter, Arial, sans-serif`;i.measureText(r).width>t.w-t.pad*2&&s>20;)s-=4,i.font=`${t.font} ${s}px Inter, Arial, sans-serif`;i.fillText(r,t.w/2,t.sub?t.h*.4:t.h/2),t.sub&&(i.fillStyle=t.subFg,i.font=`600 ${t.h*.16}px Inter, Arial, sans-serif`,i.fillText(t.sub,t.w/2,t.h*.78));let a=new _n(n);return a.colorSpace=st,a.anisotropy=8,a}function a0(r,e=3116906){let t=new Ae,n=new Ae;t.add(n);let i=at(15659507,{roughness:.45,metalness:.05}),s=at(2369581,{roughness:.7}),a=at(14278114,{roughness:.18,metalness:.9}),o=at(1911866,{roughness:.08,metalness:.3}),l=at(e,{roughness:.45}),c=at(1381911,{roughness:.9});Te(new ae(7.4,.35,1.1),s,n,-.2,.85,0),Te(Pt(2.1,2.05,2.45,.22),i,n,2.5,2.05,0),Te(Pt(1.25,1.05,2.35,.2),i,n,3.95,1.5,0),Te(Pt(.12,.75,2.3,.05),a,n,4.58,1.45,0);for(let M=0;M<5;M++)Te(new ae(.08,.06,1.9),s,n,4.62,1.18+M*.13,0,!1);Te(Pt(.35,.35,2.6,.08),s,n,4.55,.85,0);let h=Te(new ae(.08,.85,2.2),o,n,3.52,2.5,0);h.rotation.z=.28,[1,-1].forEach(M=>{Te(new ae(1.15,.72,.06),o,n,2.75,2.5,M*1.23,!1)}),Te(new ae(.06,.7,2.1),o,n,1.44,2.5,0,!1),[1,-1].forEach(M=>{Te(new ae(2.12,.16,.04),l,n,2.5,1.62,M*1.235,!1)});let u=Sr(r.toUpperCase(),{w:512,h:256,fg:"#"+e.toString(16).padStart(6,"0"),sub:"SEPTIC SERVICE",subFg:"#33413b"});[1,-1].forEach(M=>{let L=Te(new Rt(1.5,.75),new lt({map:u,transparent:!0,roughness:.5}),n,2.55,1.95,M*1.236,!1);M<0&&(L.rotation.y=Math.PI)}),[1,-1].forEach(M=>{Te(new ae(.08,.35,.22),s,n,3.3,2.35,M*1.42),Te(new ae(.5,.04,.04),s,n,3.4,2.35,M*1.3)});let d=at(16774872,{emissive:16773568,emissiveIntensity:0});[.82,-.82].forEach(M=>Te(new Oe(.16,.16,.1,18),d,n,4.6,1.65,M,!1).rotation.z=Math.PI/2);let p=new et({color:16773576,transparent:!0,opacity:0,depthWrite:!1,blending:Ct,side:Hn}),m=[];[.82,-.82].forEach(M=>{let L=new Se(new Ni(1.6,9,24,1,!0),p);L.rotation.z=Math.PI/2,L.position.set(9.1,1.4,M),n.add(L),m.push(L)});let v=at(16726831,{emissive:16719888,emissiveIntensity:.3});[1,-1].forEach(M=>Te(new ae(.06,.25,.35),v,n,-3.95,1.05,M*1.05,!1));let f=at(16753434,{emissive:16750848,emissiveIntensity:.2,roughness:.3});Te(Pt(.35,.16,1.5,.06),f,n,2.45,3.15,0);let x=at(13883870,{roughness:.42,metalness:.25}),g=Te(new Oe(1.18,1.18,4.3,40),x,n,-1.25,2.25,0);g.rotation.z=Math.PI/2,[-3.4,.9].forEach((M,L)=>{let N=Te(new qt(1.18,32,16,0,Math.PI*2,0,Math.PI/2),x,n,M,2.25,0);N.rotation.z=L?-Math.PI/2:Math.PI/2,N.scale.y=.32}),[-2.9,-1.25,.4].forEach(M=>{let L=Te(new Oe(1.2,1.2,.1,40),a,n,M,2.25,0);L.rotation.z=Math.PI/2});let y=Sr(r.toUpperCase(),{w:1024,h:220,fg:"#"+e.toString(16).padStart(6,"0")}),_=new lt({map:y,transparent:!0,roughness:.3,metalness:.2});[0,Math.PI].forEach(M=>{let L=new Se(new Oe(1.195,1.195,3.2,40,1,!0,-.45+Math.PI/2,.9),_);L.rotation.z=Math.PI/2,L.rotation.x=M,L.position.set(-1.25,2.25,0),n.add(L)});let R=Te(new Oe(1.192,1.192,4,40,1,!0,Math.PI*.92,Math.PI*.16),l,n,-1.25,2.25,0,!1);R.rotation.z=Math.PI/2,R.material.side=Hn;let b=R.clone();b.rotation.x=Math.PI,n.add(b),Te(new Oe(.32,.32,.25,20),a,n,-1.2,3.5,0),Te(new Oe(.14,.14,.5,14),s,n,-3.75,1.5,.55).rotation.z=Math.PI/2;let S=new Ae;S.position.set(-3.1,1.3,-1.25),n.add(S),Te(new Fn(.38,.12,10,28),at(2829875,{roughness:.8}),S,0,0,0).rotation.y=0,Te(new Oe(.45,.45,.04,24),at(13650474),S,0,0,-.12).rotation.x=Math.PI/2;for(let M=0;M<4;M++)Te(new ae(.04,.04,.45),a,n,-3.55,1.3+M*.38,1.05,!1);[-.2,.2].forEach(M=>Te(new ae(.05,1.5,.05),a,n,-3.55,1.85,1.05+M,!1)),Te(Pt(1.2,.55,.6,.06),a,n,.6,1.05,1);let D=[];return[[3.65,1.12],[3.65,-1.12],[-1.7,1.12],[-1.7,-1.12],[-2.95,1.12],[-2.95,-1.12]].forEach(M=>{let L=new Ae;L.position.set(M[0],.55,M[1]),n.add(L);let N=Te(new Oe(.55,.55,.42,28),c,L,0,0,0);N.rotation.x=Math.PI/2;let C=Te(new Oe(.3,.3,.44,18),a,L,0,0,0,!1);C.rotation.x=Math.PI/2,Te(new Oe(.08,.08,.46,8),s,L,0,0,0,!1).rotation.x=Math.PI/2,D.push(L)}),[3.65,-2.3].forEach((M,L)=>[1,-1].forEach(N=>{let C=Te(new Oe(.68,.68,.5,24,1,!0,0,Math.PI),s,n,M,.6,N*1.12);C.rotation.x=Math.PI/2,C.rotation.y=Math.PI/2,L&&C.scale.set(1,1,1),C.material.side=Hn})),Te(new Oe(.08,.08,1.4,12),a,n,1.35,2.6,-1.15),t.userData={wheels:D,hl:d,cones:m,coneMat:p,beacon:f,body:n},t.setLights=M=>{d.emissiveIntensity=M?3:0,p.opacity=M?.09:0,v.emissiveIntensity=M?1.5:.3},t.tick=(M,L,N)=>{D.forEach(C=>{C.rotation.z=-N/.55}),f.emissiveIntensity=L&&Math.sin(M*12)>0?2.5:.2,n.position.y=L?Math.sin(M*17)*.015:0},t}function ou(r,e,t,n,i,s,a,o,l,c){let h=at(2369581,{roughness:.7}),u=at(14278114,{roughness:.2,metalness:.85}),d=at(1381911,{roughness:.9}),p=[];[[a,1],[a,-1],[o,1],[o,-1]].forEach(([g,y])=>{let _=new Ae;_.position.set(g,l,y*1.02),e.add(_);let R=Te(new Oe(l,l,.36,26),d,_,0,0,0);R.rotation.x=Math.PI/2;let b=Te(new Oe(l*.55,l*.55,.38,16),u,_,0,0,0,!1);b.rotation.x=Math.PI/2,p.push(_)});let m=at(16774872,{emissive:16773568,emissiveIntensity:0}),v=at(16726831,{emissive:16719888,emissiveIntensity:.3}),f=new et({color:16773576,transparent:!0,opacity:0,depthWrite:!1,blending:Ct,side:Hn});[.72,-.72].forEach(g=>{Te(new ae(.08,.22,.38),m,e,s/2+.02,1.05,g,!1);let y=new Se(new Ni(1.5,8,20,1,!0),f);y.rotation.z=Math.PI/2,y.position.set(s/2+4,.95,g),e.add(y)}),[1,-1].forEach(g=>Te(new ae(.06,.4,.25),v,e,-s/2-.01,1.05,g*.85,!1));let x=at(16753434,{emissive:16750848,emissiveIntensity:.2,roughness:.3});return r.userData={wheels:p,hl:m,coneMat:f,beacon:x,body:e,rear:-s/2},r.setLights=g=>{m.emissiveIntensity=g?3:0,f.opacity=g?.08:0,v.emissiveIntensity=g?1.5:.3},r.tick=(g,y,_)=>{p.forEach(R=>{R.rotation.z=-_/l}),e.position.y=y?Math.sin(g*15)*.015:0},{dark:h,chrome:u,beacon:x}}function lu(r,e,t,n,i,s,a,o,l){let c=Sr(e.toUpperCase(),{w:1024,h:300,fg:"#ffffff",bg:"#"+n.toString(16).padStart(6,"0"),sub:t,subFg:"#d9f3e8"}),h=new lt({map:c,roughness:.45});[1,-1].forEach(u=>{let d=Te(new Rt(a,o),h,r,i,s,u*l,!1);u<0&&(d.rotation.y=Math.PI)})}function o0(r,e,t){let n=new Ae,i=new Ae;n.add(i);let s=at(15922422,{roughness:.4}),a=at(1911866,{roughness:.08,metalness:.3}),o=ou(n,i,e,r,t,6.2,2.1,-1.9,.42,2.7);Te(Pt(4.6,2.35,2.05,.25),s,i,-.75,1.65,0),Te(Pt(1.7,1.35,2,.3),s,i,2.3,1.15,0);let l=Te(new ae(.06,.85,1.8),a,i,2,2.05,0);return l.rotation.z=.55,[1,-1].forEach(c=>Te(new ae(.9,.6,.04),a,i,1.15,2.1,c*1.03,!1)),Te(Pt(.2,.3,2.1,.06),o.dark,i,3.1,.65,0),Te(new ae(3.6,.12,.04),at(e),i,-.8,.75,1.035,!1),Te(new ae(3.6,.12,.04),at(e),i,-.8,.75,-1.035,!1),lu(i,r,t,e,-.95,1.75,3.3,.97,1.04),Te(Pt(.3,.12,1.2,.05),o.beacon,i,.9,2.88,0),[-2.2,.4].forEach(c=>Te(new ae(.08,.12,2),o.chrome,i,c,2.92,0,!1)),[.7,-.7].forEach(c=>Te(new ae(3.2,.06,.4),at(12107460,{metalness:.6}),i,-.9,3.02,c,!1)),n.scale.setScalar(1),n}function l0(r,e,t){let n=new Ae,i=new Ae;n.add(i);let s=at(15922422,{roughness:.35,metalness:.1}),a=at(1911866,{roughness:.08,metalness:.3}),o=ou(n,i,e,r,t,6,1.9,-1.8,.46,2);Te(Pt(2.3,.9,2.05,.2),s,i,1.85,1.05,0),Te(Pt(2,1.2,2,.22),s,i,.15,1.75,0);let l=Te(new ae(.06,.75,1.8),a,i,1.2,2,0);l.rotation.z=.45,[1,-1].forEach(h=>Te(new ae(1.4,.55,.04),a,i,.15,2,h*1.005,!1)),Te(Pt(2.7,.85,2.05,.1),s,i,-1.75,1.05,0),Te(new ae(2.5,.1,1.8),o.dark,i,-1.75,1.42,0,!1),lu(i,r,t,e,.35,1.25,1.9,.55,1.01),Te(Pt(.5,.45,1.9,.05),o.chrome,i,-.4,1.68,0),[-3.1,-.6].forEach(h=>[.75,-.75].forEach(u=>Te(new ae(.07,1.2,.07),o.dark,i,h,2,u,!1))),[.75,-.75].forEach(h=>Te(new ae(2.6,.07,.07),o.dark,i,-1.85,2.6,h,!1));let c=at(14263361,{roughness:.6});[.35,-.35].forEach(h=>Te(new ae(4.2,.07,.07),c,i,-1.2,2.68,h,!1));for(let h=0;h<9;h++)Te(new ae(.05,.05,.7),c,i,-3.1+h*.47,2.68,0,!1);return Te(Pt(.3,.12,1.1,.05),o.beacon,i,.15,2.42,0),Te(Pt(.25,.3,2.1,.06),o.dark,i,3,.7,0),n}function c0(r,e,t){let n=new Ae,i=new Ae;n.add(i);let s=at(15922422,{roughness:.4}),a=at(1911866,{roughness:.08,metalness:.3}),o=ou(n,i,e,r,t,7.2,2.6,-2.2,.48,3.3);Te(Pt(1.9,1.9,2.2,.25),s,i,2.55,1.6,0),Te(Pt(1,1,2.1,.2),s,i,3.45,1.05,0);let l=Te(new ae(.06,.7,1.9),a,i,3.3,2.1,0);return l.rotation.z=.3,Te(Pt(4.9,2.7,2.4,.08),at(e,{roughness:.5}),i,-.95,2.05,0),lu(i,r,t,e,-.95,2.1,4.4,1.3,1.215),Te(new ae(.05,2.4,2.2),at(13620441,{metalness:.4,roughness:.4}),i,-3.42,2.05,0),Te(Pt(.3,.12,1.2,.05),o.beacon,i,2.55,2.62,0),n}function rf(r,e,t,n){if(r==="van")return o0(e,t,n);if(r==="pickup")return l0(e,t,n);if(r==="box")return c0(e,t,n);let i=a0(e,t);return i.userData.rear=-3.9,i}var pn=(r,e={})=>new lt(Object.assign({color:r,roughness:.72,metalness:0},e));function Ke(r,e,t,n=0,i=0,s=0){let a=new Se(r,e);return a.position.set(n,i,s),a.castShadow=!0,a.receiveShadow=!0,t.add(a),a}var Ns=(r,e)=>new Ss(r,e,6,14),Lt=(r,e=22,t=16)=>new qt(r,e,t),Tr=(r,e,t)=>r+(e-r)*t,wr=class{constructor(e={}){this.o=e=Object.assign({skin:15778720,hair:4861727,hairStyle:"short",shirt:3832789,sleeve:"short",pants:3095372,shoes:2762018,height:1.75,female:!1,capColor:3116906,lips:10701372},e);let t=this.root=new Ae;t.scale.setScalar(e.height/1.75);let n=pn(e.skin,{roughness:.5}),i=pn(e.shirt,{roughness:.85}),s=pn(e.pants,{roughness:.9}),a=pn(e.shoes,{roughness:.45}),o=pn(e.hair,{roughness:.6});this.mats={skin:n,shirt:i,pants:s,shoe:a,hair:o};let l=this.j={};l.hips=new Ae,l.hips.position.y=.74,t.add(l.hips),Ke(Lt(.16),s,l.hips).scale.set(e.female?1.12:1.08,.72,.82),l.spine=new Ae,l.spine.position.y=.04,l.hips.add(l.spine),Ke(Ns(.17,.25),i,l.spine,0,.22,0).scale.set(e.female?1.04:1.16,1,.8),Ke(Lt(.17,20,14),i,l.spine,0,.4,0).scale.set(e.female?1.08:1.22,.62,.82),e.belly&&Ke(Lt(.15),i,l.spine,0,.17,.05).scale.set(1.1,.9,1);let d=Ke(new Fn(.07,.022,8,18),i,l.spine,0,.5,0);d.rotation.x=Math.PI/2,l.neck=new Ae,l.neck.position.y=.5,l.spine.add(l.neck),Ke(Ns(.052,.05),n,l.neck,0,.04,0),l.head=new Ae,l.head.position.y=.09,l.neck.add(l.head),Ke(Lt(.17,30,24),n,l.head,0,.14,0).scale.set(1,1.05,1.02),Ke(Lt(.13,22,14),n,l.head,0,.075,.03).scale.set(1.08,.8,.95),[-1,1].forEach(S=>{Ke(Lt(.034,12,10),n,l.head,S*.168,.13,-.005).scale.set(.55,1,.8)});let v=pn(16777215,{roughness:.25}),f=pn(e.eyes||3877406,{roughness:.2}),x=pn(657930,{roughness:.2}),g=new et({color:16777215});this.eyes=[],[-1,1].forEach(S=>{let D=new Ae;D.position.set(S*.062,.155,.14),l.head.add(D);let M=Ke(Lt(.04,20,16),v,D);M.scale.set(.95,1.1,.62),M.castShadow=!1;let L=Ke(Lt(.025,14,12),f,D,0,-.003,.021);L.scale.z=.5,L.castShadow=!1;let N=Ke(Lt(.013,10,8),x,D,0,-.003,.03);N.castShadow=!1;let C=Ke(Lt(.0065,8,6),g,D,.006,.01,.036);C.castShadow=!1,this.eyes.push(D)}),this.brows=[],[-1,1].forEach(S=>{let D=Ke(new Ss(.008,.042,4,8),o,l.head,S*.064,.207,.155);D.rotation.z=Math.PI/2,D.castShadow=!1,this.brows.push(D)}),Ke(Lt(.024,14,10),pn(e.skin,{roughness:.45}),l.head,0,.118,.172).scale.set(1,.85,.9);let _=pn(15899274,{roughness:.6,transparent:!0,opacity:.55});[-1,1].forEach(S=>{let D=Ke(Lt(.026,12,8),_,l.head,S*.098,.1,.13);D.scale.set(1,.6,.4),D.castShadow=!1}),this.mouth=Ke(new Fn(.034,.0095,8,18,Math.PI),pn(8007210,{roughness:.4}),l.head,0,.072,.158),this.mouth.castShadow=!1,this.buildHair(e.hairStyle,o,e);let R=e.sleeve==="long"?i:n;["l","r"].forEach(S=>{let D=S==="l"?1:-1,M=l[S+"Sh"]=new Ae;M.position.set(D*(e.female?.175:.2),.41,0),l.spine.add(M),Ke(Lt(.058,14,10),i,M),Ke(Ns(.054,.13),i,M,0,-.11,0);let L=l[S+"El"]=new Ae;L.position.y=-.23,M.add(L),Ke(Lt(.048,12,10),R,L),Ke(Ns(.046,.13),R,L,0,-.1,0);let N=l[S+"Hand"]=new Ae;N.position.y=-.22,L.add(N),Ke(Lt(.05,14,10),n,N).scale.set(.85,1.05,.7)}),["l","r"].forEach(S=>{let D=S==="l"?1:-1,M=l[S+"Hip"]=new Ae;M.position.set(D*.085,-.04,0),l.hips.add(M),Ke(Ns(.078,.2),s,M,0,-.17,0);let L=l[S+"Kn"]=new Ae;L.position.y=-.35,M.add(L),Ke(Lt(.068,12,10),s,L),Ke(Ns(.064,.2),s,L,0,-.15,0);let N=new Ae;N.position.y=-.33,L.add(N),Ke(Lt(.075,16,10),a,N,0,-.005,.045).scale.set(.85,.55,1.55)});let b=this.phone=new Ae;Ke(new ae(.075,.15,.012),pn(1118999,{roughness:.3,metalness:.4}),b),this.phoneScreen=new Se(new Rt(.066,.138),new et({color:7313083})),this.phoneScreen.position.z=.007,b.add(this.phoneScreen),b.position.set(0,-.06,.04),b.rotation.x=-1.2,b.visible=!1,l.rHand.add(b),this.state="idle",this.mood="neutral",this.t=Math.random()*10,this.phase=0,this.speed=0,this.blinkT=2+Math.random()*3,this.path=null,this.lookYaw=0,this.cur={},this.yaw=0,this.yawTarget=0}buildHair(e,t,n){let i=this.j,s=(a,o,l)=>{a*=1.1;let c=Ke(new qt(a,26,16,0,Math.PI*2,0,Math.PI*o),t,i.head,0,.145,-.006);return c.rotation.x=l,c};if(e==="short"&&s(.165,.5,-.38).scale.set(1.02,1.05,1.05),e==="bob"||e==="pony"){s(.168,.52,-.42).scale.set(1.04,1.06,1.06);let o=1.7;Ke(new qt(.19,26,18,Math.PI/2+o/2,Math.PI*2-o,.2,Math.PI*.58),t,i.head,0,.12,-.012).scale.set(1.1,1.12,1.08);let c=Ke(Lt(.16,20,12),t,i.head,.01,.262,.07);c.scale.set(1.02,.32,.72),c.rotation.z=-.08,e==="pony"&&Ke(Lt(.08,14,12),t,i.head,0,.13,-.22).scale.set(.8,1.4,.8)}if(e==="cap"){s(.162,.55,-.1).scale.set(1.02,.98,1.03);let o=pn(n.capColor,{roughness:.7});Ke(new qt(.188,26,14,0,Math.PI*2,0,Math.PI*.5),o,i.head,0,.17,-.004).scale.set(1.02,.82,1.06);let c=Ke(new Oe(.12,.12,.014,24,1,!1,0,Math.PI),o,i.head,0,.19,.115);c.rotation.y=Math.PI/2,c.rotation.x=.15,c.scale.set(1,1,1.15);let h=Ke(Lt(.018,8,6),o,i.head,0,.325,0);if(n.capTex){let u=new Se(new Rt(.12,.06),new et({map:n.capTex,transparent:!0}));u.position.set(0,.245,.168),u.rotation.x=-.42,i.head.add(u)}}}setMood(e){this.mood=e}set(e){this.state=e,this.phone.visible=e==="phone"||e==="call"||e==="phoneHappy"}walkTo(e,t=1.35,n){return this.path=e.map(i=>i.clone?i.clone():new E(i[0],0,i[1])),this.speed=t,this.set(n?"carry":"walk"),new Promise(i=>{this._arrive=i})}face(e,t){this.yawTarget=Math.atan2(e-this.root.position.x,t-this.root.position.z)}update(e){this.t+=e;let t=this.t,n=this.j;if(this.path&&this.path.length){let f=this.root.position,x=this.path[0],g=x.x-f.x,y=x.z-f.z,_=Math.hypot(g,y);if(_<.08)this.path.shift(),this.path.length||(this.path=null,this.state!=="carry"&&this.set("idle"),this._arrive&&this._arrive());else{let R=Math.min(_,this.speed*e);f.x+=g/_*R,f.z+=y/_*R,this.yawTarget=Math.atan2(g,y),this.phase+=e*this.speed*5.2}}let i=this.yawTarget-this.yaw;for(;i>Math.PI;)i-=Math.PI*2;for(;i<-Math.PI;)i+=Math.PI*2;this.yaw+=i*(1-Math.exp(-e*8)),this.root.rotation.y=this.yaw;let s={hipsY:.74,spineX:0,spineZ:0,neckX:0,neckY:0,headZ:0,lShX:0,lShZ:.1,rShX:0,rShZ:-.1,lElX:-.15,rElX:-.15,lHipX:0,rHipX:0,lKnX:0,rKnX:0,lHipZ:0,rHipZ:0},a=Math.sin(t*1.6);s.spineX=a*.015,s.lShZ=.09+a*.01,s.rShZ=-.09-a*.01;let o=this.state;if(o==="walk"){let f=Math.sin(this.phase),x=Math.cos(this.phase);s.lHipX=-f*.55,s.rHipX=f*.55,s.lKnX=Math.max(0,x)*.9+.05,s.rKnX=Math.max(0,-x)*.9+.05,s.lShX=f*.45,s.rShX=-f*.45,s.lElX=-.35-Math.max(0,f)*.3,s.rElX=-.35-Math.max(0,-f)*.3,s.hipsY=.74-.02+Math.abs(Math.cos(this.phase))*.03,s.spineX=.06,s.spineZ=f*.03,s.neckX=-.03}if(o==="lookDown"&&(s.neckX=.55,s.spineX=.12,s.lShZ=.55,s.rShZ=-.55,s.lShX=.25,s.rShX=.25,s.lElX=-1.7,s.rElX=-1.7,s.lKnX=.12,s.rKnX=.12,s.lHipX=-.06,s.rHipX=-.06,s.headZ=Math.sin(t*.8)*.08),(o==="phone"||o==="phoneHappy")&&(s.rShX=-.75,s.rShZ=-.05,s.rElX=-1.35,s.neckX=.38,s.lShX=-.3,s.lElX=-1.1,s.lShZ=.25),o==="call"&&(s.rShX=-.2,s.rShZ=-.55,s.rElX=-2.35,s.neckX=.05,s.headZ=-.12,s.lShZ=.12),o==="wave"&&(s.rShZ=-2.55+Math.sin(t*9)*.22,s.rElX=-.2,s.rShX=-.2,s.neckX=-.05),o==="happy"&&(s.hipsY=.74+Math.abs(Math.sin(t*6))*.05,s.lShZ=.5,s.rShZ=-.5,s.lElX=-.6,s.rElX=-.6),o==="point"&&(s.rShX=-1.45,s.rShZ=-.15,s.rElX=-.1),o==="hose"&&(s.rShX=-.9,s.lShX=-.9,s.rElX=-.8,s.lElX=-.8,s.spineX=.25,s.neckX=.35,s.lKnX=.3,s.rKnX=.3,s.lHipX=-.2,s.rHipX=-.2,s.hipsY=.7),o==="phoneHappy"&&(s.hipsY=.74+Math.abs(Math.sin(t*5))*.025),o==="lookUp"&&(s.neckX=-.5,s.spineX=-.08,s.lShZ=.2,s.rShZ=-.2,s.rShX=-.5,s.rElX=-1.9,s.headZ=Math.sin(t*.7)*.05),o==="kneel"&&(s.hipsY=.42,s.lHipX=-1.5,s.lKnX=1.6,s.rHipX=-.2,s.rKnX=1.9,s.spineX=.35,s.neckX=.3,s.rShX=-1.1+Math.sin(t*4)*.2,s.rElX=-.6,s.lShX=-.8,s.lElX=-.9),o==="climb"){let f=Math.sin(t*5);s.lShX=-2.6+f*.3,s.rShX=-2.6-f*.3,s.lElX=-.4,s.rElX=-.4,s.lHipX=-.6-f*.4,s.rHipX=-.6+f*.4,s.lKnX=.9+f*.3,s.rKnX=.9-f*.3,s.neckX=-.2}if(o==="work"&&(s.rShX=-1.7+Math.sin(t*5)*.25,s.lShX=-1.5,s.rElX=-.5,s.lElX=-.6,s.neckX=-.35),o==="carry"){s.lShX=-.9,s.rShX=-.9,s.lElX=-1.2,s.rElX=-1.2,s.lShZ=.3,s.rShZ=-.3;let f=Math.sin(this.phase);s.lHipX=-f*.5,s.rHipX=f*.5,s.lKnX=Math.max(0,Math.cos(this.phase))*.8,s.rKnX=Math.max(0,-Math.cos(this.phase))*.8}o==="idle"&&(s.spineZ=Math.sin(t*.45)*.025,s.hipsY=.74+Math.sin(t*.45)*.004,s.neckY=Math.sin(t*.3)*.12),o!=="idle"&&(s.neckY=this.lookYaw);let l=1-Math.exp(-e*(o==="walk"?14:7));for(let f in s)this.cur[f]=this.cur[f]===void 0?s[f]:Tr(this.cur[f],s[f],l);let c=this.cur;n.hips.position.y=c.hipsY,n.spine.rotation.x=c.spineX,n.spine.rotation.z=c.spineZ,n.neck.rotation.x=c.neckX,n.neck.rotation.y=c.neckY,n.head.rotation.z=c.headZ,n.lSh.rotation.x=c.lShX,n.lSh.rotation.z=c.lShZ,n.rSh.rotation.x=c.rShX,n.rSh.rotation.z=c.rShZ,n.lEl.rotation.x=c.lElX,n.rEl.rotation.x=c.rElX,n.lHip.rotation.x=c.lHipX,n.rHip.rotation.x=c.rHipX,n.lKn.rotation.x=c.lKnX,n.rKn.rotation.x=c.rKnX,this.blinkT-=e;let h=1;this.blinkT<0&&(h=.08,this.blinkT<-.12&&(this.blinkT=2.5+Math.random()*3.5)),this.eyes.forEach(f=>{f.scale.y=Tr(f.scale.y,h,h<1?1:.35)});let u=this.mood,d=u==="happy"||u==="smile"?Math.PI:u==="worried"?0:Math.PI,p=u==="happy"?1.3:u==="smile"?1.05:u==="worried"?.8:.7;this.mouth.rotation.z=Tr(this.mouth.rotation.z,d,.15),this.mouth.scale.x=Tr(this.mouth.scale.x,p,.15),this.mouth.scale.y=Tr(this.mouth.scale.y,(u==="neutral"?.45:1)*(o==="call"?.55+Math.abs(Math.sin(t*11)*Math.sin(t*3.1))*1.3:1),.35);let m=u==="worried"?.28:u==="happy"?-.12:0,v=u==="worried"?.216:u==="happy"?.22:.207;this.brows.forEach((f,x)=>{let g=x?1:-1;f.rotation.z=Tr(f.rotation.z,Math.PI/2+g*-m,.15),f.position.y=Tr(f.position.y,v,.15)})}};var gl=matchMedia("(max-width:760px), (pointer:coarse)").matches,Zn=(()=>{let r=1234567;return()=>(r=r*16807%2147483647)/2147483647})(),Ye=(r,e={})=>new lt(Object.assign({color:r,roughness:.8,metalness:0},e)),Ht=(r,e,t,n=.12,i=2)=>new Ps(r,e,t,i,n);function we(r,e,t,n=0,i=0,s=0,a=!0){let o=new Se(r,e);return o.position.set(n,i,s),o.castShadow=a,o.receiveShadow=!0,t.add(o),o}var Sa={day:{fill:.25,sun:[.45,.8,.35],sunC:16774114,sunI:2.8,hemiS:12573183,hemiG:7178831,hemiI:1.1,top:4032224,hor:13625087,bot:14674390,fog:13623534,win:0,lamps:0,stars:0,exp:1},dusk:{sun:[.7,.16,.6],sunC:16751189,sunI:2.3,hemiS:10129616,hemiG:4864558,hemiI:.85,top:2767480,hor:16751200,bot:5980752,fog:11569810,win:1.2,lamps:1,stars:.2,exp:1.08,fill:.7},night:{fill:.5,sun:[-.4,.5,.3],sunC:10335487,sunI:.5,hemiS:3820160,hemiG:1381919,hemiI:.45,top:395804,hor:1911642,bot:724764,fog:1712704,win:1.6,lamps:1.4,stars:1,exp:1.15},dawn:{fill:.4,sun:[.85,.2,.3],sunC:16761738,sunI:2,hemiS:11125999,hemiG:5918784,hemiI:.65,top:6063824,hor:16765088,bot:10260362,fog:14468020,win:.6,lamps:.3,stars:0,exp:1}};function sf(r){let e=new ca({canvas:r,antialias:!gl,powerPreference:"high-performance"});e.setPixelRatio(Math.min(devicePixelRatio,gl?1.25:1.5)),e.shadowMap.enabled=!0,e.shadowMap.type=_h,e.toneMapping=xa,e.toneMappingExposure=1;let t=new Ii,n=new Tt(40,1,.1,2500),s=new vs(e).fromScene(new cl,.04).texture;t.fog=new Fo(13623534,120,520);let a={top:{value:new _e},hor:{value:new _e},bot:{value:new _e},sunDir:{value:new E(0,1,0)},sunC:{value:new _e},stars:{value:0}},o=new Se(new qt(1500,48,24),new At({side:Vt,depthWrite:!1,fog:!1,uniforms:a,vertexShader:"varying vec3 vD;void main(){vD=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`uniform vec3 top,hor,bot,sunC,sunDir;uniform float stars;varying vec3 vD;
      float h(vec3 p){return fract(sin(dot(p,vec3(12.9898,78.233,45.164)))*43758.5453);}
      void main(){float y=vD.y;vec3 c=y>0.?mix(hor,top,pow(smoothstep(0.,.55,y),.8)):mix(hor,bot,smoothstep(0.,-.2,y));
      float sd=max(dot(vD,normalize(sunDir)),0.);c+=sunC*(pow(sd,700.)*4.+pow(sd,12.)*.35+pow(sd,3.)*.12)*smoothstep(-.05,.05,y+.02);
      vec3 q=floor(vD*420.);float s=step(.9975,h(q))*stars*smoothstep(.05,.3,y);c+=vec3(s);
      gl_FragColor=vec4(c,1.);}`}));o.renderOrder=-1,t.add(o);let l=new Qo(16777215,5596740,.8);t.add(l);let c=new br(16777215,2);c.castShadow=!0;let h=gl?512:1024;c.shadow.mapSize.set(h,h),Object.assign(c.shadow.camera,{left:-55,right:55,top:55,bottom:-55,near:1,far:400}),c.shadow.bias=-4e-4,c.shadow.normalBias=.03,t.add(c),t.add(c.target);let u=new br(16773344,.5);t.add(u),t.add(u.target);let d=null,p=null;gl||(d=new pl(e),d.addPass(new fl(t,n)),p=new Ds(new re(512,512),.5,.45,.92),d.addPass(p),d.addPass(new ml));let m={win:Ye(3878951,{emissive:16757591,emissiveIntensity:0,roughness:.2,metalness:.2}),lamp:Ye(16773836,{emissive:16765578,emissiveIntensity:0}),signGlow:null},v=JSON.parse(JSON.stringify(Sa.day)),f=null,x=Sa.day,g=1,y=1,_=(M,L,N)=>new _e(M).lerp(new _e(L),N);function R(M){let L=f||x,N=x,C=(U,Q)=>U+(Q-U)*M,k=new E(...L.sun).lerp(new E(...N.sun),M).normalize();c.position.copy(b).addScaledVector(k,200),c.target.position.copy(b),c.color.copy(_(L.sunC,N.sunC,M)),c.intensity=C(L.sunI,N.sunI),l.color.copy(_(L.hemiS,N.hemiS,M)),l.groundColor.copy(_(L.hemiG,N.hemiG,M)),l.intensity=C(L.hemiI,N.hemiI),a.top.value.copy(_(L.top,N.top,M)),a.hor.value.copy(_(L.hor,N.hor,M)),a.bot.value.copy(_(L.bot,N.bot,M)),a.sunDir.value.copy(k),a.sunC.value.copy(_(L.sunC,N.sunC,M)),a.stars.value=C(L.stars,N.stars),t.fog.color.copy(_(L.fog,N.fog,M)),m.win.emissiveIntensity=C(L.win,N.win),m.lamp.emissiveIntensity=C(L.lamps,N.lamps)*3,m.signGlow&&(m.signGlow.emissiveIntensity=C(L.lamps,N.lamps)*1.2+.15),e.toneMappingExposure=C(L.exp,N.exp),u.intensity=C(L.fill??.4,N.fill??.4),u.position.copy(n.position).add(new E(0,6,0)),u.target.position.copy(b),v.lamps=C(L.lamps,N.lamps),v.name=M>.5?N.name:L.name}Object.keys(Sa).forEach(M=>Sa[M].name=M);let b=new E,S={renderer:e,scene:t,camera:n,sun:c,hemi:l,composer:d,shared:m,TOD:v,envTex:s,setTOD(M,L=0){f=D(),x=Sa[M],y=Math.max(.001,L),g=0,L||(g=1,R(1))},lamps:()=>v.lamps||0,update(M){g<1?(g=Math.min(1,g+M/y),R(g*g*(3-2*g))):R(1),o.position.copy(n.position)},setFocus(M){b.copy(M)},resize(){let M=innerWidth,L=innerHeight;e.setSize(M,L,!1),n.aspect=M/L,n.updateProjectionMatrix(),d&&(d.setSize(M,L),p.resolution.set(M/2,L/2))},degrade(M){M>=1&&d&&(d=null),M>=1&&e.setPixelRatio(1),M>=2&&(c.castShadow=!1)},render(M,L){if(M&&M!==t){e.render(M,L);return}d?d.render():e.render(t,n)}};function D(){let M=a.sunDir.value;return{sun:[M.x,M.y,M.z],sunC:c.color.getHex(),sunI:c.intensity,hemiS:l.color.getHex(),hemiG:l.groundColor.getHex(),hemiI:l.intensity,top:a.top.value.getHex(),hor:a.hor.value.getHex(),bot:a.bot.value.getHex(),fog:t.fog.color.getHex(),win:m.win.emissiveIntensity,lamps:v.lamps||0,stars:a.stars.value,exp:e.toneMappingExposure,fill:u.intensity,name:v.name}}return R(1),S}function h0(r,e){r.updateMatrixWorld(!0);let t=new Map;r.traverse(n=>{if(!n.isMesh)return;let i=n.geometry.index?n.geometry.toNonIndexed():n.geometry.clone();i.applyMatrix4(n.matrixWorld),["uv1","uv2","color","tangent"].forEach(a=>i.deleteAttribute&&i.getAttribute(a)&&i.deleteAttribute(a)),i.getAttribute("uv")||i.setAttribute("uv",new dt(new Float32Array(i.getAttribute("position").count*2),2));let s=n.material.uuid+(n.castShadow?"s":"n");t.has(s)||t.set(s,{mat:n.material,shadow:n.castShadow,geos:[]}),t.get(s).geos.push(i)}),t.forEach(n=>{let i=new Se(Zp(n.geos,!1),n.mat);i.castShadow=n.shadow,i.receiveShadow=!0,e.add(i)})}async function af(r,e,t,n={}){let i=n.brand||3116906,s=new Ae;r.scene.add(s);let a={people:{},cars:[],anims:[],root:s,timers:[]},o=new Ae,l=new Rt(900,900,40,40);l.rotateX(-Math.PI/2);let c=[],h=l.getAttribute("position"),u=new _e(8370254),d=new _e(6989123),p=new _e(9684060);for(let W=0;W<h.count;W++){let le=h.getX(W),ve=h.getZ(W),Fe=Math.hypot(le,ve);Fe>170&&h.setY(W,Math.max(0,(Math.sin(le*.02)+Math.cos(ve*.017))*6+(Fe-170)*.08));let pe=(Math.sin(le*.09)*Math.cos(ve*.07)+Math.sin(le*.023+ve*.031))*.5+.5,de=u.clone().lerp(pe>.5?p:d,Math.abs(pe-.5)*1.4);c.push(de.r,de.g,de.b)}l.setAttribute("color",new Ce(c,3)),l.computeVertexNormals();let m=new Se(l,Ye(16777215,{vertexColors:!0,roughness:1}));m.receiveShadow=!0,s.add(m);let v=Ye(3817028,{roughness:.95}),f=Ye(15979371,{roughness:.7}),x=Ye(15921902,{roughness:.7}),g=Ye(11773580,{roughness:1});we(new ae(460,.08,8),v,o,0,.04,0,!1),we(new ae(460,.05,1.4),g,o,0,.025,4.7,!1),we(new ae(460,.05,1.4),g,o,0,.025,-4.7,!1);for(let W=-228;W<228;W+=6)we(new ae(3,.09,.16),f,o,W,.045,0,!1);we(new ae(460,.09,.14),x,o,0,.045,3.7,!1),we(new ae(460,.09,.14),x,o,0,.045,-3.7,!1),we(new ae(8,.08,300),v,o,-45,.041,0,!1);for(let W=-148;W<148;W+=6)Math.abs(W)>5&&we(new ae(.16,.09,3),f,o,-45,.046,W,!1);let y=[15983555,14674415,16176836,15200217,15855592,14278632,16048824,15259372],_=[8014650,5070192,5981750,7040885,9062975,4150599],R=[12597547,2781079,3112271,7091331,2046559,14059792],b=Ye(16514039,{roughness:.6}),S=Ye(13617856,{roughness:.95}),D=Ye(3037763,{roughness:.6});function M(W,le,ve,Fe,pe={}){let de=new Ae;de.position.set(W,0,le),de.rotation.y=ve>0?0:Math.PI;let be=Ye(pe.siding||y[Fe%y.length],{roughness:.85}),rt=Ye(_[Fe%_.length],{roughness:.9}),bt=Ye(R[Fe%R.length],{roughness:.5}),Dt=pe.two??Fe%3===1,Je=10,nt=8,Jt=3.1;we(new ae(Je+.3,.5,nt+.3),S,de,0,.25,0),we(Ht(Je,Jt,nt,.1),be,de,0,.5+Jt/2,0);let q=.5+Jt,vi=Je,zn=nt;Dt&&(we(Ht(Je*.72,2.8,nt,.1),be,de,-Je*.14,q+1.4,0),q+=2.8,vi=Je*.72);let Et=new Ui,Rn=.55;Et.moveTo(-zn/2-Rn,0),Et.lineTo(zn/2+Rn,0),Et.lineTo(0,Dt?2.4:2.9),Et.closePath();let Ur=new Mr(Et,{depth:vi+Rn*2,bevelEnabled:!0,bevelThickness:.08,bevelSize:.08,bevelSegments:1});if(Ur.translate(0,0,-(vi+Rn*2)/2),Ur.rotateY(Math.PI/2),we(Ur,rt,de,Dt?-Je*.14:0,q-.05,0),Dt){let $e=new Ui;$e.moveTo(-zn/2-Rn,0),$e.lineTo(zn/2+Rn,0),$e.lineTo(0,1.8),$e.closePath();let Nt=new Mr($e,{depth:Je*.3+Rn,bevelEnabled:!1});Nt.translate(0,0,-(Je*.3+Rn)/2),Nt.rotateY(Math.PI/2),we(Nt,rt,de,Je*.36,.5+Jt-.05,0)}if(pe.garage!==!1){we(Ht(4.6,2.9,6.6,.08),be,de,Je/2+2.3,.5+1.45-.05,-.6);let $e=new Ui;$e.moveTo(-3.6,0),$e.lineTo(3.6,0),$e.lineTo(0,1.6),$e.closePath();let Nt=new Mr($e,{depth:5.3,bevelEnabled:!1});Nt.translate(0,0,-2.65),Nt.rotateY(Math.PI/2),we(Nt,rt,de,Je/2+2.3,.5+2.85,-.6),we(Ht(3.6,2.3,.12,.04),b,de,Je/2+2.3,.5+1.2,2.72);for(let fn=0;fn<4;fn++)we(new ae(3.5,.04,.05),Ye(14211282),de,Je/2+2.3,.5+.4+fn*.55,2.79,!1);we(new ae(4.2,.06,ve*0+9),S,de,Je/2+2.3,.03,2.7+4.5,!1)}we(new ae(4.2,.45,1.8),S,de,-1.2,.22,nt/2+.9),we(Ht(4.4,.18,2.2,.05),b,de,-1.2,.5+Jt-.3,nt/2+1),[-3.2,.8].forEach($e=>we(new Oe(.09,.09,Jt-.3,10),b,de,$e,.45+(Jt-.3)/2,nt/2+1.9)),we(Ht(1.05,2.15,.12,.03),bt,de,-1.2,.5+1.08,nt/2+.02),we(new qt(.05,8,6),Ye(13938487,{metalness:.8,roughness:.3}),de,-.82,.5+1.05,nt/2+.1,!1),we(new ae(1.3,.08,6),S,de,-1.2,.03,nt/2+4.8,!1);let Or=($e,Nt,fn,Ji)=>{we(Ht(1.5,1.35,.1,.03),b,de,$e,Nt,fn+(Ji?-.03:.03)),we(new ae(1.25,1.1,.06),r.shared.win,de,$e,Nt,fn+(Ji?-.07:.07),!1),we(new ae(.06,1.1,.08),b,de,$e,Nt,fn+(Ji?-.09:.09),!1),we(new ae(1.25,.06,.08),b,de,$e,Nt,fn+(Ji?-.09:.09),!1)};[-3.6,1.7,3.6].forEach(($e,Nt)=>{Or($e,.5+1.65,nt/2,!1)}),[-3,0,3].forEach($e=>Or($e,.5+1.65,-nt/2,!0)),Dt&&[-3.2,-.6].forEach($e=>Or($e,.5+Jt+1.4,nt/2,!1)),Fe%2===0&&we(Ht(.8,2.4,.8,.05),Ye(10115910,{roughness:.95}),de,Dt?-3:2.6,q+1.2,-1.4),we(new ae(.08,1.1,.08),Ye(5981750),de,2.8,.55,nt/2+9.6),we(Ht(.3,.3,.55,.08),Ye(2303787,{metalness:.4,roughness:.4}),de,2.8,1.2,nt/2+9.6),we(new Oe(.42,.42,.12,20),D,de,-2,.06,-nt/2-7),we(new Oe(.42,.42,.12,20),D,de,-.6,.06,-nt/2-7.2);for(let $e=0;$e<4;$e++){let Nt=we(new Yn(.55+Zn()*.25,1),Ye([4164154,5020229,5941322][$e%3],{roughness:.9}),de,-4.4+$e*.9+($e>1?4.4:0),.5,nt/2+.6);Nt.scale.y=.8}return o.add(de),de}let L=[],N=[-150,-112,-80,12,44,100,135],C=[-150,-112,-80,-12,20,140];N.forEach((W,le)=>L.push(M(W,21,-1,le))),C.forEach((W,le)=>L.push(M(W,-21,1,le+3))),[-40,-75].forEach((W,le)=>{let ve=M(-62,W,1,le+7);ve.rotation.y=Math.PI/2,ve.position.set(-62,0,W)}),[40,75].forEach((W,le)=>{let ve=M(-28,W,1,le+9);ve.rotation.y=-Math.PI/2,ve.position.set(-28,0,W)});let k=M(-20,21,-1,4,{siding:15918799,two:!1});a.sarahHouse={pos:new E(-20,0,21),backDoor:new E(-18.6,0,25.6),soggy:new E(-15.5,0,34.5),lids:new E(-18.7,0,32.1),porch:new E(-18.8,0,14.3),drive:new E(-27.3,0,13)},we(Ht(1.05,2.15,.12,.03),Ye(16514039),o,-18.6,.5+1.08,25.03),we(new ae(5,.3,3),Ye(10975826,{roughness:.9}),o,-18.6,.15,26.6);let U=Ye(16514039,{roughness:.7}),Q=(W,le,ve,Fe)=>{let pe=Math.hypot(ve-W,Fe-le),de=Math.floor(pe/.35),be=Math.atan2(Fe-le,ve-W);for(let rt=0;rt<=de;rt++){let bt=rt/de,Dt=we(new ae(.1,1.05,.1),U,o,W+(ve-W)*bt,.52,le+(Fe-le)*bt,!1);Dt.rotation.y=-be}[.35,.8].forEach(rt=>{let bt=we(new ae(pe,.08,.05),U,o,(W+ve)/2,rt,(le+Fe)/2,!1);bt.rotation.y=-be})};Q(-31,25,-31,44),Q(-31,44,-6,44),Q(-6,44,-6,25);let he=new Se(new kn(3.6,40),Ye(5073715,{roughness:.35}));he.rotation.x=-Math.PI/2,he.position.set(-15.5,.02,34.5),he.scale.set(1.3,.9,1),he.receiveShadow=!0,s.add(he),a.soggy=[he],he.visible=!1;let ie=Ye(7311272,{roughness:.05,metalness:.6,envMap:r.envTex,envMapIntensity:1.2});[[-15.5,34.5,1.4],[-13.6,35.6,.8],[-17.2,33.4,.6]].forEach(W=>{let le=new Se(new kn(W[2],28),ie);le.rotation.x=-Math.PI/2,le.position.set(W[0],.035,W[1]),le.scale.y=.7,s.add(le),le.visible=!1,a.soggy.push(le)});let G=new Ae;G.position.set(70,0,-24),o.add(G);let J=Ye(15330543,{roughness:.5,metalness:.3}),H=Ye(i,{roughness:.55});we(new ae(30,.1,20),S,G,0,.05,6,!1),we(Ht(12,5.6,11,.1),J,G,5,2.8,-2),we(Ht(12.4,.4,11.4,.1),H,G,5,5.7,-2),we(Ht(4.6,4.4,.15,.05),Ye(13620441,{metalness:.5,roughness:.45}),G,5,2.3,3.55);for(let W=0;W<9;W++)we(new ae(4.5,.04,.06),Ye(12041925),G,5,.4+W*.48,3.65,!1);we(Ht(9,3.6,8,.1),Ye(16052198),G,-6,1.8,-.5),we(Ht(9.4,.35,8.4,.08),Ye(3885636),G,-6,3.75,-.5),we(Ht(1.1,2.2,.12,.03),H,G,-8.5,1.1,3.52),[-5.6,-3.1].forEach(W=>{we(Ht(1.8,1.3,.1,.03),b,G,W,2,3.52),we(new ae(1.6,1.1,.06),r.shared.win,G,W,2,3.58,!1)});let Z=Sr(e.toUpperCase(),{w:1024,h:200,bg:null,fg:"#ffffff",sub:n.sub||"SEPTIC  \xB7  PUMPING  \xB7  INSPECTIONS",subFg:"#cfeee0"});r.shared.signGlow=new lt({color:i,roughness:.5}),we(Ht(10.5,2.1,.3,.08),r.shared.signGlow,G,2,6.9,3.4);let ye=new Se(new Rt(10,1.95),new lt({map:Z,transparent:!0,emissive:16777215,emissiveMap:Z,emissiveIntensity:.6}));ye.position.set(72,6.9,-20.43),s.add(ye),a.shop={pos:new E(70,0,-24),door:new E(61.5,0,-19.5),truckSpot:new E(76,0,-12.5)};let w=new Ae;w.position.set(-118,0,-8.5),w.rotation.y=.35,o.add(w);let A=Ye(8016180,{roughness:.9});[-2.6,2.6].forEach(W=>we(new ae(.3,3,.3),A,w,W,1.5,0)),we(Ht(6.2,2,.3,.08),Ye(2968377),w,0,2.2,0);let F=Sr(t.split(",")[0],{w:1024,h:330,fg:"#ffffff",sub:"WELCOME TO "+t.toUpperCase(),subFg:"#ffd29a"}),K=document.createElement("canvas");K.width=1024,K.height=330;let I=K.getContext("2d");I.textAlign="center",I.fillStyle="#ffd29a",I.font="700 54px Inter, Arial",I.fillText("WELCOME TO",512,90);let Y=150;I.font=`900 ${Y}px Fraunces, Georgia, serif`;let O=t.split(",")[0];for(;I.measureText(O).width>940&&Y>40;)Y-=6,I.font=`900 ${Y}px Fraunces, Georgia, serif`;I.fillStyle="#fff",I.fillText(O,512,225);let B=(t.split(",")[1]||"").trim();B&&(I.fillStyle="#cfe8d8",I.font="600 44px Inter, Arial",I.fillText(B.toUpperCase(),512,300));let z=new _n(K);z.colorSpace=st;let te=new Se(new Rt(5.9,1.9),new lt({map:z,transparent:!0}));te.position.set(0,2.2,.16),w.add(te);for(let W=0;W<9;W++)we(new Yn(.3,1),Ye([15167313,16032353,15320170,16777215][W%4]),w,-2.6+W*.65,.3,.7,!1);let ee=Ye(7227950,{roughness:.95}),T=[5216831,4164154,6532428,3111482,8107342].map(W=>Ye(W,{roughness:.85})),se=(W,le,ve=1,Fe=0)=>{let pe=new Ae;if(pe.position.set(W,0,le),pe.scale.setScalar(ve),o.add(pe),we(new Oe(.22,.32,3,8),ee,pe,0,1.5,0),Fe===1)for(let de=0;de<3;de++)we(new Ni(2.2-de*.55,2.6,10),T[3],pe,0,3+de*1.4,0);else{let de=T[Math.floor(Zn()*5)],be=1;we(new Yn(2,be),de,pe,0,4.2,0),we(new Yn(1.4,be),de,pe,1.2,3.6,.4),we(new Yn(1.5,be),de,pe,-1.1,3.8,-.5),be>1&&we(new Yn(1.2,1),de,pe,.2,5.4,.2)}};for(let W=0;W<75;W++){let le=(Zn()-.5)*300,ve=(Zn()-.5)*300;Math.abs(ve)<12||Math.abs(le+45)<8||[...N.map(pe=>[pe,21]),...C.map(pe=>[pe,-21]),[70,-24],[-20,21],[-62,-40],[-62,-75],[-28,40],[-28,75]].some(pe=>Math.abs(pe[0]-le)<14&&Math.abs(pe[1]-ve)<12)||le>-32&&le<-5&&ve>24&&ve<45||se(le,ve,.8+Zn()*.7,Zn()<.35?1:0)}se(-28,40.5,1.1,0),se(-8.5,41,.9,1);for(let W=0;W<55;W++){let le=Zn()*Math.PI*2,ve=190+Zn()*60;se(Math.cos(le)*ve,Math.sin(le)*ve,1.4+Zn(),Zn()<.5?1:0)}h0(o,s);let V=new ol,X=W=>new Promise(le=>V.load("/x3d/assets/"+W+".gltf",ve=>le(ve.scene),void 0,()=>le(null)));Promise.all(["streetlight","car_sedan","car_stationwagon","car_hatchback"].map(X)).then(([W,le,ve,Fe])=>{let pe=be=>(be.traverse(rt=>{rt.isMesh&&(rt.castShadow=!0,rt.receiveShadow=!0)}),be);if(W)for(let be=-140;be<=140;be+=32){let rt=pe(W.clone());rt.scale.setScalar(6.6),rt.position.set(be,0,-6.2),rt.rotation.y=Math.PI,s.add(rt);let bt=we(new qt(.28,12,8),r.shared.lamp,s,be,6.15,-4.6,!1),Dt=new ln(new tn({map:Gi(),color:16764810,transparent:!0,depthWrite:!1,blending:Ct,opacity:0}));Dt.scale.set(5,5,1),Dt.position.copy(bt.position),s.add(Dt),a.anims.push(()=>Dt.material.opacity=r.lamps()*.5);let Je=new Se(new kn(5,24),new et({map:Gi(),color:16760938,transparent:!0,depthWrite:!1,opacity:0,blending:Ct}));Je.rotation.x=-Math.PI/2,Je.position.set(be,.1,-3.6),s.add(Je),a.anims.push(()=>Je.material.opacity=r.lamps()*.35)}let de=[le,ve,Fe].filter(Boolean);if([[-27.3,13,0],[17.3,13,1],[-87.3,13,2],[-7,-13,0],[27,-13,2],[-105,-13,1]].forEach(be=>{let rt=de[be[2]%de.length];if(!rt)return;let bt=pe(rt.clone());bt.scale.setScalar(4.6),bt.position.set(be[0],0,be[1]),bt.rotation.y=be[1]>0?Math.PI:0,s.add(bt)}),le){let be=pe((ve||le).clone());be.scale.setScalar(4.6),s.add(be);let rt=-200;a.anims.push(bt=>{if(a.noTraffic){be.visible=!1;return}be.visible=!0,rt+=bt*13,rt>220&&(rt=-220),be.position.set(rt,0,n.leftDrive?-1.9:1.9),be.rotation.y=Math.PI/2})}});let oe=rf(n.vehicle||"pump",e,i,n.sub||"");oe.traverse(W=>{W.isMesh&&W.material.metalness>.1&&(W.material.envMap=r.envTex,W.material.envMapIntensity=.45)}),oe.position.copy(a.shop.truckSpot),oe.rotation.y=Math.PI,s.add(oe),a.truck=oe,oe.traverse(W=>{W.isMesh&&(W.castShadow=!0)});let xe=Sr(e.split(" ")[0].toUpperCase(),{w:256,h:128,fg:"#ffffff"}),ue=a.people;ue.sarah=new wr({hairStyle:"bob",female:!0,shirt:2792847,sleeve:"long",pants:3426654,hair:7028262,skin:15910562,height:1.66,eyes:3960391}),ue.owner=new wr({hairStyle:"cap",shirt:i,pants:4012597,skin:14724230,belly:!0,height:1.8,capColor:2306090,capTex:xe,eyes:4877194}),ue.jogger=new wr({hairStyle:"pony",female:!0,shirt:16032353,skin:9263675,hair:2037008,height:1.64}),ue.neighbor=new wr({hairStyle:"short",shirt:15167313,skin:16767165,hair:12105912,height:1.74,belly:!0}),Object.values(ue).forEach(W=>s.add(W.root)),ue.sarah.root.position.set(-18.6,0,26.2),ue.owner.root.position.set(73,0,-9.4),ue.owner.yawTarget=ue.owner.yaw=-.6,ue.neighbor.root.position.set(14.8,0,-17),ue.neighbor.set("wave"),ue.neighbor.yawTarget=ue.neighbor.yaw=0;let Ee=-120,Pe=1;return ue.jogger.root.position.set(Ee,0,6.2),ue.jogger.set("walk"),ue.jogger.speed=1.9,a.anims.push(W=>{Ee+=W*1.9*Pe,Ee>120&&(Pe=-1),Ee<-120&&(Pe=1),ue.jogger.root.position.x=Ee,ue.jogger.yawTarget=Pe>0?Math.PI/2:-Math.PI/2,ue.jogger.phase+=W*10}),a.timers.push(setInterval(()=>{ue.neighbor.set(ue.neighbor.state==="wave"?"idle":"wave")},4e3)),a.dispose=()=>{a.timers.forEach(clearInterval),r.scene.remove(s)},a.update=(W,le)=>{Object.values(ue).forEach(ve=>ve.update(W)),a.anims.forEach(ve=>ve(W,le))},a}var vl=null;function Gi(){if(vl)return vl;let r=document.createElement("canvas");r.width=r.height=128;let e=r.getContext("2d"),t=e.createRadialGradient(64,64,0,64,64,64);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.3,"rgba(255,255,255,.45)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),vl=new _n(r),vl}function of(r,e){let t=new Ii;t.background=new _e(131850);let n=new Tt(70,1,.1,3e3),i=matchMedia("(max-width:760px)").matches?1100:2e3,s=1e3,a=[],o=new Float32Array(i*6),l=new Float32Array(i*6),c=[[.7,.85,1],[1,1,1],[.55,1,.85],[1,.8,.5],[.85,.7,1]],h=(N,C)=>{let k=Math.random()*6.283,U=3+Math.pow(Math.random(),.55)*80;N.x=Math.cos(k)*U,N.y=Math.sin(k)*U,N.z=C,N.c=c[Math.random()*5|0]};for(let N=0;N<i;N++){let C={};h(C,-Math.random()*s),a.push(C)}let u=new tt;u.setAttribute("position",new dt(o,3)),u.setAttribute("color",new dt(l,3)),t.add(new Ms(u,new vr({vertexColors:!0,transparent:!0,blending:Ct,depthWrite:!1})));let d=document.createElement("canvas");d.width=d.height=256;let p=d.getContext("2d"),m=p.createRadialGradient(128,128,0,128,128,128);m.addColorStop(0,"rgba(255,255,255,1)"),m.addColorStop(.2,"rgba(140,190,255,.5)"),m.addColorStop(.6,"rgba(90,60,180,.15)"),m.addColorStop(1,"rgba(0,0,0,0)"),p.fillStyle=m,p.fillRect(0,0,256,256);let v=new _n(d),f=new ln(new tn({map:v,transparent:!0,blending:Ct,depthWrite:!1,opacity:.5}));f.position.z=-900,f.scale.set(900,900,1),t.add(f);let x=[];for(let N=1;N<=30;N++){let C=new Date(r);C.setDate(C.getDate()+N);let k=document.createElement("canvas");k.width=300,k.height=360;let U=k.getContext("2d");U.fillStyle="#fbf8f1",U.fillRect(0,0,300,360),U.fillStyle="#d9483b",U.fillRect(0,0,300,78),U.fillStyle="#fff",U.font="800 40px Inter, Arial",U.textAlign="center",U.fillText(C.toLocaleDateString("en-US",{month:"long"}).toUpperCase(),150,54),U.fillStyle="#1b1f24",U.font="900 150px Fraunces, Georgia, serif",U.fillText(C.getDate(),150,235),U.fillStyle="#7a8580",U.font="700 30px Inter, Arial",U.fillText(C.toLocaleDateString("en-US",{weekday:"long"}).toUpperCase(),150,290),U.fillStyle="#2f8f6a",U.font="800 28px Inter, Arial",U.fillText("DAY "+N,150,335);for(let J=0;J<8;J++)U.fillStyle="#bdb6a6",U.beginPath(),U.arc(30+J*34,10,6,0,7),U.fill();let Q=new _n(k);Q.colorSpace=st;let he=new Se(new Rt(4.2,5,8,8),new et({map:Q,side:Hn,transparent:!0})),ie=N*2.4,G=9+N*37%7;he.userData={i:N,a:ie,r:G,spin:(Math.random()-.5)*4,tilt:(Math.random()-.5)*1.2,date:C},he.visible=!1,t.add(he),x.push(he)}let g=new Ae;g.position.z=-400,t.add(g);let y=new et({color:10478533,transparent:!0,opacity:.9,blending:Ct});g.add(new Se(new Fn(26,.35,12,120),y)),g.add(new Se(new Fn(28.5,.12,8,120),new et({color:16761466,transparent:!0,opacity:.8,blending:Ct})));for(let N=0;N<60;N++){let C=new Se(new ae(N%5?.25:.6,N%5?1.4:3.2,.2),y),k=N/60*Math.PI*2;C.position.set(Math.sin(k)*23.5,Math.cos(k)*23.5,0),C.rotation.z=-k,g.add(C)}let _=new et({color:16777215,transparent:!0,opacity:.9,blending:Ct}),R=new Se(new ae(1,13,.3),_);R.geometry.translate(0,6.5,0),g.add(R);let b=new Se(new ae(.6,20,.3),_);b.geometry.translate(0,10,0),g.add(b);let S=new ln(new tn({map:v,transparent:!0,blending:Ct,depthWrite:!1}));S.scale.set(60,60,1),g.add(S);let D=12,M=-1;return{scene:t,cam:n,running:!1,onDate:null,onDone:null,start(){M=0,this.running=!0},resize(){n.aspect=innerWidth/innerHeight,n.updateProjectionMatrix()},update(N){if(this.running){M+=N,D=M<.6?12+M*60:M<4.4?48+Math.pow((M-.6)/3.8,2)*700:750+(M-4.4)*2600,n.rotation.z=Math.sin(M*.7)*.14*Math.min(1,M/2),n.fov=70+Math.max(0,Math.min(1,(M-3)/2))*38,n.updateProjectionMatrix();let k=0;if(x.forEach((U,Q)=>{let he=U.userData,G=-(.9+Q*(3.4/30)-M)*120;U.visible=G>-320&&G<6,G>0&&(k=Q+1);let J=Math.max(0,(G+40)/40);U.position.set(Math.cos(he.a)*(he.r+J*6),Math.sin(he.a)*(he.r*.75+J*4),G),U.rotation.set(he.tilt+J*1.4,Math.sin(M*3+Q)*.35+J*he.spin,Math.sin(M*2+Q)*.25+J*he.spin*.5);let H=U.geometry.attributes.position;for(let Z=0;Z<H.count;Z++){let ye=Z%9/8-.5,w=Math.floor(Z/9)/8-.5;H.setZ(Z,Math.sin(ye*3+M*9+Q)*.25*(w+.5)+J*w*w*2)}H.needsUpdate=!0}),this.onDate&&this.onDate(k,k?x[k-1].userData.date:null,Math.min(1,M/5.2)),g.position.z=-400+Math.max(0,M-3.2)*260,R.rotation.z-=N*(2+M*3),b.rotation.z-=N*(12+M*25),g.rotation.z+=N*.2,S.material.opacity=Math.min(1,Math.max(0,(M-3.6)/1.2)),M>5.2&&this.onDone){let U=this.onDone;this.onDone=null,this.running=!1,U()}}else D=12+Math.sin(performance.now()/2500)*4;let C=Math.min(150,Math.max(.4,D*.06));for(let k=0;k<i;k++){let U=a[k];U.z+=D*N,U.z>2&&h(U,U.z-s);let Q=k*6;o[Q]=U.x,o[Q+1]=U.y,o[Q+2]=U.z,o[Q+3]=U.x,o[Q+4]=U.y,o[Q+5]=U.z-C;let he=Math.min(1,(U.z+s)/s)*1.2;l[Q]=U.c[0]*he,l[Q+1]=U.c[1]*he,l[Q+2]=U.c[2]*he,l[Q+3]=l[Q+4]=l[Q+5]=0}u.attributes.position.needsUpdate=!0,u.attributes.color.needsUpdate=!0,f.material.opacity=.35+Math.min(1,D/1500)*.5}}}var yl={us:{name:"United States",cur:"USD",sym:"$",locale:"en-US",town:"Monroe, NC",phone:"(555) 014-2290",leftDrive:!1,mult:1},ca:{name:"Canada",cur:"CAD",sym:"C$",locale:"en-CA",town:"Kelowna, BC",phone:"(555) 014-2290",leftDrive:!1,mult:1.3},uk:{name:"United Kingdom",cur:"GBP",sym:"\xA3",locale:"en-GB",town:"Guildford, Surrey",phone:"07700 900123",leftDrive:!0,mult:.8},au:{name:"Australia",cur:"AUD",sym:"A$",locale:"en-AU",town:"Geelong, VIC",phone:"0491 570 110",leftDrive:!0,mult:1.5},ch:{name:"Switzerland",cur:"CHF",sym:"CHF ",locale:"de-CH",town:"Winterthur",phone:"079 000 00 00",leftDrive:!1,mult:.9},nl:{name:"Netherlands",cur:"EUR",sym:"\u20AC",locale:"nl-NL",town:"Amersfoort",phone:"06 12345678",leftDrive:!1,mult:.9}},Ar={septic:{name:"Septic",trade:"septic",vehicle:"pump",work:"hose",prop:"soggy",look:"down",problem:"But the yard is soggy again, and the sinks are draining slow.",adHead:"Slow drains or a soggy spot in the yard?",adCta:"Book a septic check",btn:"Get quote",opts:["Septic pumping","Slow drains or backup","Wet or smelly spot in the yard"],pick:1,job:"Septic check",busy:["Pump-out","Inspection","Riser install","Pump-out","Repair","Pump-out","Inspection","Pump-out","Pump-out"],work_line:"The tank gets pumped. The soggy yard finally gets fixed.",done:"Tank pumped",avg:450,cpl:40,sub:"SEPTIC \xB7 PUMPING \xB7 INSPECTIONS"},roofing:{name:"Roofing",trade:"roofing",vehicle:"pickup",work:"ladder",prop:"roof",look:"up",problem:"After last night's storm, there's a water stain on the ceiling, and shingles in the yard.",adHead:"Storm damage or a leaky roof?",adCta:"Book a free roof inspection",btn:"Get quote",opts:["Leak or water stain","Missing or damaged shingles","Full roof replacement"],pick:1,job:"Roof inspection",busy:["Re-roof","Inspection","Leak repair","Estimate","Re-roof","Gutter tie-in","Inspection","Repair","Estimate"],work_line:"The damaged section gets repaired, and the roof is sealed up before the next rain.",done:"Roof repaired",avg:9500,cpl:70,sub:"ROOFING \xB7 REPAIRS \xB7 REPLACEMENTS"},hvac:{name:"HVAC",trade:"HVAC",vehicle:"van",work:"kneel",prop:"ac",look:"down",problem:"It's eighty-five degrees inside, and the air conditioner is blowing warm air.",adHead:"AC blowing warm air?",adCta:"Book an AC repair visit",btn:"Book now",opts:["AC not cooling","Furnace or heat pump problem","New system quote"],pick:0,job:"AC repair",busy:["Tune-up","Install","Repair","Tune-up","Quote","Repair","Install","Tune-up","Repair"],work_line:"The unit gets fixed, and cool air is flowing again within the hour.",done:"AC running again",avg:650,cpl:45,sub:"HEATING \xB7 COOLING \xB7 REPAIRS"},plumbing:{name:"Plumbing",trade:"plumbing",vehicle:"van",work:"kneel",prop:"leak",look:"down",problem:"There's water spraying from a pipe by the back wall, and it's pooling fast.",adHead:"Leak, clog or no hot water?",adCta:"Book a local plumber",btn:"Book now",opts:["Leak or burst pipe","Clogged drain","Water heater problem"],pick:0,job:"Leak repair",busy:["Water heater","Drain clear","Repipe","Leak repair","Fixture","Drain clear","Estimate","Water heater","Repair"],work_line:"The pipe gets replaced, the water is shut off, and the leak is gone for good.",done:"Leak fixed",avg:550,cpl:45,sub:"PLUMBING \xB7 DRAINS \xB7 WATER HEATERS"},electrical:{name:"Electrician",trade:"electrical",vehicle:"van",work:"kneel",prop:"flicker",look:"up",problem:"The lights keep flickering, and the breaker trips every time the dryer runs.",adHead:"Flickering lights or an old panel?",adCta:"Book a licensed electrician",btn:"Get quote",opts:["Flickering lights or tripping breaker","Panel upgrade","EV charger install"],pick:1,job:"Panel check",busy:["Panel upgrade","EV charger","Rewire","Inspection","Lighting","Panel upgrade","Repair","Estimate","EV charger"],work_line:"The old panel gets upgraded, and the lights stay steady.",done:"Panel upgraded",avg:2800,cpl:55,sub:"ELECTRICAL \xB7 PANELS \xB7 EV CHARGERS"},garage:{name:"Garage door repair",trade:"garage door",vehicle:"van",work:"kneel",prop:"garage",look:"up",front:!0,problem:"The garage door is stuck halfway, and her car is trapped inside.",adHead:"Garage door stuck or off track?",adCta:"Book same-day garage door repair",btn:"Book now",opts:["Door stuck or off track","Broken spring","New garage door"],pick:1,job:"Garage door repair",busy:["Spring repair","New door","Opener","Repair","Tune-up","Spring repair","Estimate","Opener","Repair"],work_line:"A new spring goes in, the door gets balanced, and it opens smoothly again.",done:"Door fixed",avg:450,cpl:35,sub:"GARAGE DOORS \xB7 SPRINGS \xB7 OPENERS"},tree:{name:"Tree removal",trade:"tree service",vehicle:"pickup",work:"haul",prop:"tree",look:"up",problem:"A big dead tree is leaning toward the house, and the wind is picking up.",adHead:"Dead or leaning tree near your house?",adCta:"Book a free tree estimate",btn:"Get quote",opts:["Leaning or dead tree","Storm damage cleanup","Trimming and pruning"],pick:0,job:"Tree removal",busy:["Removal","Trimming","Stump grind","Estimate","Removal","Storm clean-up","Trimming","Removal","Estimate"],work_line:"The tree comes down safely, and the yard gets cleaned up.",done:"Tree removed",avg:1800,cpl:50,sub:"TREE REMOVAL \xB7 TRIMMING \xB7 STUMPS"},pest:{name:"Pest control",trade:"pest control",vehicle:"van",work:"kneel",prop:"pests",look:"down",problem:"There are ants all over the patio, and now they're getting into the kitchen.",adHead:"Ants, mice or wasps moving in?",adCta:"Book a pest inspection",btn:"Book now",opts:["Ants or roaches","Mice or rats","Wasps or bees"],pick:0,job:"Pest treatment",busy:["Treatment","Inspection","Rodent","Treatment","Termite","Follow-up","Wasps","Treatment","Inspection"],work_line:"The house gets treated, inside and out, and the problem is handled.",done:"Treated",avg:300,cpl:30,sub:"PEST CONTROL \xB7 RODENTS \xB7 TERMITES"},waterdamage:{name:"Water damage restoration",trade:"water damage",vehicle:"van",work:"hose",prop:"flood",look:"down",problem:"Water is coming up through the basement window well, and the floor is soaked.",adHead:"Flooded basement or water damage?",adCta:"Get 24/7 water damage help",btn:"Call me",opts:["Flooded basement","Burst pipe damage","Ceiling or wall damage"],pick:0,job:"Water extraction",busy:["Dry-out","Extraction","Inspection","Dry-out","Rebuild","Extraction","Mold check","Dry-out","Estimate"],work_line:"The water gets pumped out, and the dryers go in to stop mold before it starts.",done:"Water extracted",avg:3500,cpl:60,sub:"WATER DAMAGE \xB7 24/7 \xB7 RESTORATION"},mold:{name:"Mold remediation",trade:"mold remediation",vehicle:"van",work:"kneel",prop:"mold",look:"down",problem:"There's a musty smell, and dark spots are spreading along the wall.",adHead:"Musty smell or dark spots on the wall?",adCta:"Book a mold inspection",btn:"Get quote",opts:["Visible mold","Musty smell","Mold test for a home sale"],pick:0,job:"Mold inspection",busy:["Remediation","Testing","Inspection","Remediation","Estimate","Air test","Remediation","Inspection","Estimate"],work_line:"The mold gets removed safely, and the source of the moisture gets fixed.",done:"Mold removed",avg:2500,cpl:55,sub:"MOLD TESTING \xB7 REMOVAL \xB7 PREVENTION"},foundation:{name:"Foundation repair",trade:"foundation repair",vehicle:"pickup",work:"kneel",prop:"crack",look:"down",problem:"There's a new crack running up the foundation, and the back door is sticking.",adHead:"Cracks in your foundation?",adCta:"Book a free foundation inspection",btn:"Get quote",opts:["Cracks in walls or foundation","Sticking doors or sloping floors","Inspection for a home sale"],pick:0,job:"Foundation inspection",busy:["Piering","Inspection","Crack repair","Estimate","Piering","Inspection","Wall brace","Estimate","Inspection"],work_line:"The crack gets sealed and the wall is stabilized, so it stops moving.",done:"Foundation repaired",avg:6e3,cpl:70,sub:"FOUNDATIONS \xB7 CRACKS \xB7 PIERING"},waterproofing:{name:"Basement waterproofing",trade:"waterproofing",vehicle:"pickup",work:"kneel",prop:"pooling",look:"down",problem:"Rain water is pooling against the house, and the basement smells damp again.",adHead:"Wet basement every time it rains?",adCta:"Book a free waterproofing quote",btn:"Get quote",opts:["Water in the basement","Pooling by the foundation","Sump pump problem"],pick:0,job:"Waterproofing quote",busy:["Drain install","Sump pump","Inspection","Sealing","Estimate","Drain install","Inspection","Sump pump","Estimate"],work_line:"A new drain line goes in, and the water is carried away from the house.",done:"Drain installed",avg:4500,cpl:60,sub:"WATERPROOFING \xB7 DRAINS \xB7 SUMP PUMPS"},gutters:{name:"Gutter cleaning and guards",trade:"gutter",vehicle:"pickup",work:"ladder",prop:"gutter",look:"up",problem:"The gutters are overflowing, and water is pouring down right by the foundation.",adHead:"Overflowing gutters?",adCta:"Book gutter cleaning or guards",btn:"Get quote",opts:["Gutter cleaning","Gutter guards","New gutters"],pick:1,job:"Gutter guards",busy:["Cleaning","Guards","Cleaning","Repair","Cleaning","Guards","Estimate","Cleaning","Guards"],work_line:"The gutters get cleaned out, and new guards keep the leaves out for good.",done:"Guards installed",avg:1200,cpl:35,sub:"GUTTERS \xB7 CLEANING \xB7 GUARDS"},pressure:{name:"Pressure washing",trade:"pressure washing",vehicle:"pickup",work:"hose",prop:"grime",look:"down",front:!0,problem:"The driveway is stained black, and family is coming this weekend.",adHead:"Grimy driveway or siding?",adCta:"Book a pressure washing quote",btn:"Get quote",opts:["Driveway and walkways","House siding","Deck or patio"],pick:0,job:"Driveway wash",busy:["House wash","Driveway","Deck","House wash","Roof wash","Driveway","Patio","House wash","Estimate"],work_line:"The driveway gets washed clean, and it looks brand new again.",done:"Driveway clean",avg:350,cpl:25,sub:"PRESSURE WASHING \xB7 SOFT WASH"},chimney:{name:"Chimney sweep",trade:"chimney",vehicle:"pickup",work:"ladder",prop:"chimney",look:"up",problem:"Smoke came back into the living room last night, and the chimney cap is gone.",adHead:"Smoky fireplace or a damaged chimney?",adCta:"Book a chimney sweep",btn:"Book now",opts:["Chimney sweep","Smoke or draft problem","Chimney cap or masonry repair"],pick:1,job:"Chimney sweep",busy:["Sweep","Inspection","Cap install","Sweep","Repair","Sweep","Inspection","Liner","Sweep"],work_line:"The chimney gets swept, and a new cap goes on to keep it safe.",done:"Chimney swept",avg:350,cpl:30,sub:"CHIMNEY SWEEP \xB7 CAPS \xB7 REPAIRS"},junk:{name:"Junk removal",trade:"junk removal",vehicle:"box",work:"haul",prop:"junk",look:"down",problem:"The old couch, the boxes, the broken grill. The backyard has turned into a junk pile.",adHead:"Need junk gone this weekend?",adCta:"Book a junk pickup",btn:"Get price",opts:["Furniture and appliances","Yard or garage clean-out","Whole house clean-out"],pick:1,job:"Junk pickup",busy:["Clean-out","Pickup","Furniture","Pickup","Estate","Pickup","Clean-out","Pickup","Appliances"],work_line:"Everything gets loaded up and hauled away in under an hour.",done:"Junk hauled",avg:400,cpl:25,sub:"JUNK REMOVAL \xB7 CLEAN-OUTS"},carpet:{name:"Carpet cleaning",trade:"carpet cleaning",vehicle:"van",work:"hose",prop:"rug",look:"down",problem:"The dog had an accident on the good rug, and the stain won't come out.",adHead:"Stains that won't come out?",adCta:"Book a carpet cleaning",btn:"Book now",opts:["Pet stains and odors","Whole house carpet","Rugs and upholstery"],pick:0,job:"Carpet cleaning",busy:["Whole house","Rugs","Upholstery","Whole house","Stairs","Rugs","Pet treatment","Whole house","Tile"],work_line:"The carpet gets deep cleaned, and the stain and the smell are gone.",done:"Carpet cleaned",avg:280,cpl:25,sub:"CARPET \xB7 RUGS \xB7 UPHOLSTERY"},pool:{name:"Pool service",trade:"pool",vehicle:"pickup",work:"hose",prop:"pool",look:"down",problem:"The pool turned green, and the kids want to swim this weekend.",adHead:"Green pool or broken pump?",adCta:"Book a pool service visit",btn:"Book now",opts:["Green or cloudy water","Pump or filter problem","Weekly pool service"],pick:0,job:"Green pool clean-up",busy:["Weekly service","Opening","Repair","Weekly service","Clean-up","Weekly service","Filter","Weekly service","Repair"],work_line:"The pool gets shocked, cleaned and balanced, and it's clear blue again.",done:"Pool clear again",avg:400,cpl:30,sub:"POOL SERVICE \xB7 REPAIRS \xB7 CLEANING"},fencing:{name:"Fencing",trade:"fence",vehicle:"pickup",work:"kneel",prop:"fence",look:"down",problem:"The wind knocked a section of fence down, and the dog keeps getting out.",adHead:"Broken or leaning fence?",adCta:"Book a free fence quote",btn:"Get quote",opts:["Repair a section","New fence","Gate repair"],pick:0,job:"Fence repair",busy:["New fence","Repair","Gate","Estimate","New fence","Repair","Staining","Estimate","New fence"],work_line:"New posts and boards go in, and the fence is solid again.",done:"Fence fixed",avg:3500,cpl:45,sub:"FENCES \xB7 GATES \xB7 REPAIRS"},generator:{name:"Generator installation",trade:"generator",vehicle:"van",work:"kneel",prop:"outage",look:"down",problem:"The power went out again last night, and everything in the freezer spoiled.",adHead:"Tired of losing power?",adCta:"Book a home generator quote",btn:"Get quote",opts:["Whole home standby generator","Portable generator hookup","Generator service"],pick:0,job:"Generator quote",busy:["Install","Service","Quote","Install","Service","Transfer switch","Quote","Service","Install"],work_line:"A standby generator goes in, so the next outage switches over automatically.",done:"Generator installed",avg:11e3,cpl:80,sub:"HOME GENERATORS \xB7 INSTALL \xB7 SERVICE"},appliance:{name:"Appliance repair",trade:"appliance repair",vehicle:"van",work:"kneel",prop:"washer",look:"down",problem:"The washer stopped mid-cycle, and there's water all over the laundry room.",adHead:"Washer, fridge or oven broken?",adCta:"Book an appliance repair",btn:"Book now",opts:["Washer or dryer","Fridge or freezer","Oven or dishwasher"],pick:0,job:"Washer repair",busy:["Fridge","Dryer","Oven","Washer","Dishwasher","Fridge","Washer","Dryer","Oven"],work_line:"The part gets replaced on the spot, and the washer runs like new.",done:"Washer fixed",avg:250,cpl:25,sub:"APPLIANCE REPAIR \xB7 ALL BRANDS"}},cf=["septic","roofing","hvac","plumbing","electrical","garage","tree","pest","waterdamage","mold","foundation","waterproofing","gutters","pressure","chimney","junk","carpet","pool","fencing","generator","appliance"],lf={g_meet:"Meet Sarah. She lives just a few streets from your shop. She's never heard of you.",g_evening:"It's a normal Tuesday evening. Dinner's done.",g_phone:"So she does what everyone does now. She grabs her phone.",g_fb:"She opens Facebook. She's never heard of you. But there you are.",g_tap:"This is your ad. Go ahead, tap it, just like Sarah would.",g_form:"Three taps. About twenty seconds. That's all it takes.",g_sent:"Request sent. Now watch where it goes.",g_flies:"Her request flies across town, straight to you.",g_phone2:"Name, address, the problem. Right on your phone. A brand-new customer.",g_text:"She's not a referral. She's not a repeat customer. She found you on her own.",g_call:"Then you call her back, and talk about the job.",g_52:"That's how your calendar fills up. New homeowners finding you, on top of your referrals, every single week.",g_drag:"On the call, you pick a time together. Drag Sarah's job onto your calendar.",g_booked:"Booked. She gets a confirmation text right away.",g_morning:"Thursday morning. You head out.",g_truck:"Your name on the side, rolling through town.",g_ontime:"Right on time. Sarah sees you pull up.",g_done:"Job done. And Sarah now has a company she'll call again, and tell her neighbors about.",g_report:"Every Friday, a plain-English report lands in your inbox. New customers, booked jobs, and what they're worth. These are example numbers.",g_day30:"Thirty days later. Every light is a booked job from someone who found you on Facebook. People who had never heard your name.",g_final:"This could be your next thirty days. Extra jobs on top of your referrals, and more money coming in. Keep going, or walk away. Your call."};for(let r in Ar)lf["p_"+r]=Ar[r].problem,lf["w_"+r]=Ar[r].work_line;var ze=(r,e={})=>new lt(Object.assign({color:r,roughness:.8},e));function Ne(r,e,t,n=0,i=0,s=0,a=!0){let o=new Se(r,e);return o.position.set(n,i,s),o.castShadow=a,o.receiveShadow=!0,t.add(o),o}var Ta=(r,e,t,n,i,s,a=1,o=1)=>{let l=new Se(new kn(r,32),e);return l.rotation.x=-Math.PI/2,l.position.set(n,i,s),l.scale.set(a,o,1),t.add(l),l.receiveShadow=!0,l},wa=()=>ze(6260648,{roughness:.06,metalness:.55,transparent:!0,opacity:.9}),Aa=(r,e,t,n,i,s,a=1)=>{let o=new ln(new tn({map:Gi(),color:r,transparent:!0,depthWrite:!1,opacity:a}));return o.scale.set(e,e,1),o.position.set(n,i,s),t.add(o),o};function xl(r,e,t,n){let i=new tt;i.setAttribute("position",new dt(new Float32Array(r*3),3));let s=new bs(i,new yr({color:e,size:t,transparent:!0,opacity:.9,depthWrite:!1}));return n.add(s),s.userData.v=Array.from({length:r},()=>Math.random()),s}var hf={soggy:{spot:[-16.7,32.3],look:[-15.5,0,34.5],work:[-16.2,31.5],ins:[-12.4,2.2,37.6],build(r,e){return e.soggy.forEach(t=>t.visible=!0),{fix(t){e.soggy.forEach(n=>{n.material.opacity=1-t*.85,n.material.transparent=!0})}}}},roof:{spot:[-17.5,30],look:[-17.6,5,23.3],work:[-15.9,26],ladder:{x:-15.9,z:25.15,top:3.1},ins:[-13.5,6.5,30],build(r){let e=Ne(new ae(2.4,.06,1.7),ze(2761760),r,-17.6,5.08,23.3);e.rotation.x=.567;let t=Ne(new ae(2.5,.02,1.8),ze(5981750,{roughness:.9}),r,-17.6,5.12,23.3);t.rotation.x=.567,t.visible=!1;let n=[];for(let s=0;s<9;s++){let a=Ne(new ae(.5,.04,.3),ze(4864560),r,-19+Math.random()*4,.05,27+Math.random()*3.5);a.rotation.y=Math.random()*3,n.push(a)}let i=xl(30,10274794,.12,r);return{fix(s){t.visible=s>.5,e.visible=s<=.5,n.forEach((a,o)=>a.visible=s<(o+1)/10),i.visible=s<.3},update(s,a){let o=i.geometry.attributes.position;i.userData.v.forEach((l,c)=>{let h=3.5-(a*2+l*3)%3.4;o.setXYZ(c,-18.6+l*2.2,h,25.7)}),o.needsUpdate=!0}}}},ac:{spot:[-22.4,28.6],look:[-24.2,.5,26.6],work:[-23.4,27.7],ins:[-21,2.2,29.6],build(r){let e=new Ae;e.position.set(-24.2,0,26.6),r.add(e),Ne(new ae(1.1,.95,1.1),ze(12172995,{roughness:.5,metalness:.3}),e,0,.5,0),Ne(new ae(1.2,.08,1.2),ze(6120040),e,0,1,0);let t=new Ae;t.position.y=1.05,e.add(t);for(let a=0;a<3;a++){let o=Ne(new ae(.9,.02,.16),ze(2895924),t);o.rotation.y=a*2.09}Ne(new Oe(.06,.06,1.2,8),ze(12088115,{metalness:.7,roughness:.3}),e,-.6,.6,-.4).rotation.z=1.2;let n=Aa(16738858,2.4,e,0,1.6,0,.6),i=Aa(7327999,2.6,e,0,1.5,0,0),s=0;return{fix(a){s=a,n.material.opacity=(1-a)*.6,i.material.opacity=a*.55},update(a,o){t.rotation.y+=a*s*25,n.scale.setScalar(2.2+Math.sin(o*6)*.3)}}}},leak:{spot:[-20.3,28.4],look:[-21.6,.7,25.3],work:[-21.4,26.1],ins:[-18.6,1.6,29],build(r){let e=Ne(new Oe(.07,.07,1.6,10),ze(10133928,{metalness:.6,roughness:.3}),r,-21.6,.9,25.12);e.rotation.z=Math.PI/2;let t=Ta(1.4,wa(),r,-21.3,.04,26.6,1.3,.8),n=xl(80,12575743,.09,r),i=0;return{fix(s){i=s,e.material.color.setHex(s>.5?12088115:10133928),n.visible=s<.5,t.scale.set(1.3*(1-s*.9),.8*(1-s*.9),1)},update(s,a){let o=n.geometry.attributes.position;n.userData.v.forEach((l,c)=>{let h=(a*1.3+l)%1;o.setXYZ(c,-21.4+l*.2,.9+h*.9-h*h*1.6,25.2+h*1.8)}),o.needsUpdate=!0}}}},flicker:{spot:[-18.2,29.6],look:[-17,2.2,25],work:[-15.6,25.9],ins:[-14.2,2.4,29.8],build(r){let e=[-17,-20,-23].map(a=>Ne(new Rt(1.25,1.1),new et({color:16762746,transparent:!0,opacity:.9}),r,a,2.15,25.12,!1)),t=Ne(new ae(.5,.7,.14),ze(8159880,{metalness:.4}),r,-15.6,1.4,25.1),n=Aa(16773536,1,r,-15.6,1.2,25.3,0),i=Ne(new ae(.6,.85,.16),ze(14672870,{metalness:.3}),r,-15.6,1.4,25.12);i.visible=!1;let s=0;return{fix(a){s=a,i.visible=a>.6,t.visible=!i.visible},update(a,o){let l=s>.6||Math.sin(o*23)*Math.sin(o*7.3)>.1?1:.15;e.forEach(c=>c.material.opacity=l*.85),n.material.opacity=s>.6?0:Math.random()<.12?1:0}}}},garage:{front:!0,spot:[-24.4,12.6],look:[-27.3,1.6,18.2],work:[-27.3,16.8],ins:[-23.4,1.8,12],build(r){let e=Ne(new ae(3.7,1.25,.14),ze(16053488),r,-27.3,2.6,18.12),t=Ne(new ae(3.6,1.6,.05),ze(1382170),r,-27.3,1.25,18.2,!1);return{fix(n){let i=Math.min(1,n*1.4);e.rotation.z=(1-i)*.14,e.scale.y=1+i*.9,e.position.y=2.6-i*1.25,t.visible=i<.95}}}},tree:{spot:[-14.8,30.4],look:[-11.8,6,32],work:[-11.2,31.2],ins:[-9,3,37.5],build(r){let e=new Ae;e.position.set(-11,0,33),e.rotation.z=.32,e.rotation.y=.5,r.add(e);let t=ze(7035466,{roughness:1});Ne(new Oe(.35,.55,9,9),t,e,0,4.5,0),[[1.2,7,.3,.9],[-1,6,-.2,-.8],[.5,8.4,.6,.4]].forEach(s=>{let a=Ne(new Oe(.08,.16,3,6),t,e,s[0],s[1],s[2]);a.rotation.z=s[3]});let n=Ne(new Oe(.55,.6,.5,10),t,r,-11,.25,33);n.visible=!1;let i=[];for(let s=0;s<3;s++){let a=Ne(new Oe(.35,.35,1.6,9),t,r,-8.4,.35,31+s*.8);a.rotation.z=Math.PI/2,a.visible=!1,i.push(a)}return{fix(s){e.visible=s<.5,n.visible=s>=.5,i.forEach(a=>a.visible=s>=.5)}}}},pests:{spot:[-17,28.8],look:[-18.6,.3,26.8],work:[-18.2,27.6],ins:[-16.2,1.6,29.6],build(r){let t=new xs(new qt(.05,6,4),ze(1709072),70);r.add(t);let n=new mt,i=1;return{fix(s){i=1-s},update(s,a){for(let o=0;o<70;o++){let l=(a*.08+o/70)%1,c=o/70<i;n.position.set(c?-21+l*6:0,c?.33:-5,26.5+Math.sin(l*12+o)*.25),n.scale.set(1.4,.6,.8),n.updateMatrix(),t.setMatrixAt(o,n.matrix)}t.instanceMatrix.needsUpdate=!0}}}},flood:{spot:[-20.6,29],look:[-22.4,.2,26],work:[-22.2,27.3],ins:[-19.4,2,30],build(r){Ne(new ae(1.6,.5,.9),ze(9407106),r,-22.4,.1,25.5);let e=Ta(1,wa(),r,-22.4,.3,25.6,.75,.4),t=Ta(2.6,wa(),r,-21.6,.03,27.4,1.4,.8),n=Ne(new ae(.7,.6,.5),ze(3116906,{roughness:.5}),r,-20.4,.3,26.8);return n.visible=!1,{fix(i){t.scale.set(1.4*(1-i),.8*(1-i),1),t.visible=i<.98,e.visible=i<.7,n.visible=i>.5}}}},mold:{spot:[-21.2,28.6],look:[-22.4,1.5,25],work:[-22.2,25.9],ins:[-19.6,2,29],build(r){let e=ze(2042394,{transparent:!0,opacity:.85,roughness:1}),t=[];for(let n=0;n<16;n++){let i=.15+Math.random()*.35,s=Ne(new kn(i,16),e,r,-23.8+Math.random()*2.6,.7+Math.random()*1.6,25.11,!1);t.push(s)}return{fix(n){e.opacity=.85*(1-n)}}}},crack:{spot:[-16.4,28.4],look:[-16,1.2,25],work:[-16,25.9],ins:[-14.2,1.6,28.8],build(r){let e=ze(1315860,{transparent:!0}),t=-16.6,n=.25;for(let s=0;s<9;s++){let a=Ne(new ae(.06,.34,.02),e,r,t,n,25.11,!1);a.rotation.z=s%2?.5:-.4,t+=s%2?.12:.05,n+=.26}let i=Ne(new ae(.5,2.5,.03),ze(13617598),r,-16.25,1.3,25.12,!1);return i.visible=!1,{fix(s){e.opacity=1-s,i.visible=s>.6}}}},pooling:{spot:[-19,29.2],look:[-18,.1,26.6],work:[-17.2,26.9],ins:[-15.4,2,30.6],build(r){let e=Ta(1,wa(),r,-18.6,.04,26.5,3.4,.9),t=Ne(new ae(.18,3.4,.14),ze(15921902),r,-15.2,1.8,25.15),n=xl(30,12575743,.1,r),i=Ne(new Oe(.12,.12,6,10),ze(1908514),r,-15.2,.06,28.4);i.rotation.x=Math.PI/2,i.visible=!1;let s=0;return{fix(a){s=a,e.scale.set(3.4*(1-a),.9*(1-a),1),e.visible=a<.98,i.visible=a>.4},update(a,o){let l=n.geometry.attributes.position;n.userData.v.forEach((c,h)=>{let u=(o*1.5+c)%1;l.setXYZ(h,-15.2,s>.4?-5:.2+u*.3,25.4+u*.9)}),l.needsUpdate=!0}}}},gutter:{spot:[-19,29.6],look:[-19,3.6,25.6],work:[-15.9,26],ladder:{x:-15.9,z:25.6,top:2.6},ins:[-15,3.4,30.5],build(r){Ne(new ae(10.6,.22,.3),ze(15921902),r,-20,3.62,25.75);let e=[];for(let s=0;s<26;s++){let a=Ne(new qt(.12,6,4),ze([9071151,6257198,10506797][s%3]),r,-25+Math.random()*10,3.78,25.75,!1);a.scale.y=.5,e.push(a)}let t=Ne(new ae(10.6,.03,.34),ze(14278114,{metalness:.6,roughness:.3}),r,-20,3.75,25.75);t.visible=!1;let n=xl(90,12575743,.1,r),i=0;return{fix(s){i=s,e.forEach((a,o)=>a.visible=s<(o+1)/27),t.visible=s>.9,n.visible=s<.6},update(s,a){let o=n.geometry.attributes.position;n.userData.v.forEach((l,c)=>{let h=(a*.9+l)%1;o.setXYZ(c,-24+l*8,3.6-h*3.5,26+h*.15)}),o.needsUpdate=!0}}}},grime:{front:!0,spot:[-24.6,11.4],look:[-27.3,0,12.5],work:[-26.4,11.8],ins:[-22.6,2.2,9.6],build(r){let e=new lt({color:2828836,transparent:!0,opacity:.75,roughness:1}),t=Ne(new Rt(4.1,8.8),e,r,-27.3,.075,13.8,!1);return t.rotation.x=-Math.PI/2,{fix(n){t.scale.y=Math.max(.001,1-n),t.position.z=13.8-n*4.4}}}},chimney:{spot:[-21,30],look:[-22.6,6,22.4],work:[-21.6,26],ladder:{x:-21.6,z:25.4,top:3.1},ins:[-17.5,6.5,30],build(r){let e=[];for(let s=0;s<8;s++)e.push(Aa(3815994,1.5,r,-22.6,6,22.4,.5));let t=Ne(new ae(1.1,.12,1.1),ze(2961716,{metalness:.6,roughness:.3}),r,-22.6,6.35,22.4);t.visible=!1;let n=[Ne(new ae(.3,.2,.05),ze(1710618),r,-22.4,5.4,22.82,!1),Ne(new ae(.25,.18,.05),ze(1710618),r,-22.9,5.1,22.82,!1)],i=0;return{fix(s){i=s,t.visible=s>.6,n.forEach(a=>a.visible=s<.6)},update(s,a){e.forEach((o,l)=>{let c=(a*.25+l/8)%1;o.position.set(-22.6+Math.sin(c*5+l)*.4,6.2+c*4,22.4+c*1.5),o.scale.setScalar(1+c*3),o.material.opacity=(1-c)*.55*(i>.6?.15:1),o.material.color.setHex(i>.6?14540253:3815994)})}}}},junk:{spot:[-15.2,32.6],look:[-12.6,.5,36],work:[-13.4,35],ins:[-10,2.6,39.6],build(r){let e=[],t=(n,i,s,a,o,l)=>{let c=Ne(n,ze(i),r,s,a,o);c.rotation.y=l||0,e.push(c)};return t(new ae(2.2,.8,.9),9132604,-12.6,.4,36.4,.3),t(new ae(2,.25,1.4),15262422,-11.8,.95,36.2,-.2),t(new ae(.6,.5,.6),13214315,-14,.25,35.4,.4),t(new ae(.5,.45,.5),13214315,-13.8,.75,35.5,.1),t(new Oe(.4,.4,.25,16),1776411,-10.8,.14,35,0),t(new ae(.7,.9,.5),3159098,-11,.45,37.6,.6),t(new ae(.6,.4,.8),13214315,-13.2,.2,37.4,.9),{fix(n){e.forEach((i,s)=>i.visible=n<1-(s+1)/(e.length+1))}}}},rug:{spot:[-17,29],look:[-18.6,.3,27],work:[-18.2,27.8],ins:[-15.8,2,29.8],build(r){let e=Ne(new ae(2.4,.03,1.6),ze(10701372,{roughness:1}),r,-18.6,.32,26.9,!1),t=Ne(new kn(.45,18),new lt({color:4863008,transparent:!0,opacity:.85}),r,-18.3,.34,26.8,!1);return t.rotation.x=-Math.PI/2,{fix(n){t.material.opacity=.85*(1-n)}}}},pool:{spot:[-16.2,33.4],look:[-14,.2,37],work:[-15.2,34.6],ins:[-10.4,3,41.4],build(r){Ne(new ae(7.6,.2,4.6),ze(15394524),r,-14,.1,37.2);let e=ze(5208618,{roughness:.1,metalness:.3});Ne(new ae(7,.05,4),e,r,-14,.19,37.2,!1);let t=new _e(5208618),n=new _e(3122904);return{fix(i){e.color.copy(t).lerp(n,i)}}}},fence:{spot:[-10.4,33.4],look:[-7.6,.6,35.6],work:[-8.4,35],ins:[-10.6,2.2,38.6],build(r){let e=ze(10251074,{roughness:.9}),t=new Ae;t.position.set(-7.2,0,35.2),r.add(t);for(let n=0;n<9;n++)Ne(new ae(.12,1.8,.2),e,t,0,.9,-1.6+n*.4);return Ne(new ae(.06,.1,3.6),e,t,-.08,.5,0),Ne(new ae(.06,.1,3.6),e,t,-.08,1.4,0),[-1.9,1.9].forEach(n=>Ne(new ae(.16,2,.16),e,r,-7.2,1,35.2+n)),{fix(n){t.rotation.z=(1-n)*1.2,t.position.y=0}}}},outage:{spot:[-22.2,28.8],look:[-20,2.2,25],work:[-23.6,27.2],ins:[-19.6,2.4,30.4],build(r){let e=new et({color:724242,transparent:!0,opacity:.92});[-17,-20,-23].forEach(i=>Ne(new Rt(1.3,1.15),e,r,i,2.15,25.12,!1));let t=new Ae;t.position.set(-24.3,0,26.7),r.add(t),Ne(new ae(1.4,1,.8),ze(14014683,{metalness:.2}),t,0,.5,0);for(let i=0;i<5;i++)Ne(new ae(1.1,.04,.02),ze(8159880),t,0,.3+i*.12,.41,!1);let n=Aa(8257478,.5,t,.5,.9,.42,1);return t.visible=!1,{fix(i){e.opacity=.92*(1-i),t.visible=i>.3,t.scale.setScalar(Math.min(1,(i-.3)*3))}}}},washer:{spot:[-18.3,28.6],look:[-20.4,.5,26.6],work:[-19.6,27.6],ins:[-17,1.8,29.6],build(r){let e=new Ae;e.position.set(-20.4,.3,26.4),r.add(e),Ne(new ae(.75,.9,.7),ze(16054007,{roughness:.3}),e,0,.45,0);let t=Ne(new Oe(.24,.24,.05,20),ze(3820122,{roughness:.1,metalness:.4}),e,0,.45,.36,!1);t.rotation.x=Math.PI/2;let n=Ta(1.2,wa(),r,-20,.33,27.2,1.2,.7),i=0;return{fix(s){i=s,n.scale.set(1.2*(1-s),.7*(1-s),1),n.visible=s<.98},update(s,a){t.rotation.y+=s*i*8}}}}};var fe=r=>document.querySelector(r),Ki=r=>[...document.querySelectorAll(r)],me=(r,e,t)=>new E(r,e,t),La=(r,e,t)=>Math.max(e,Math.min(t,r)),Ll=r=>r<.5?4*r*r*r:1-Math.pow(-2*r+2,3)/2,pt=r=>String(r).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),ff=window.REP||{cal:"https://calendly.com/joel-nnamani-bookedjobshq/pilot-chat",base:""},mf=ff.cal;Ki(".book").forEach(r=>r.href=mf);var hu=document.body.dataset.mode==="any",Zi=new URLSearchParams(location.search),Nr=(Zi.get("co")||"").trim().slice(0,30),Ia=(Zi.get("town")||"").trim().slice(0,30),fi=Ar[Zi.get("niche")]?Zi.get("niche"):"septic",Fs=yl[Zi.get("country")]?Zi.get("country"):"us",Mt=()=>Ar[fi],An=()=>yl[Fs],wn=()=>Nr||(fi==="septic"?"Laney Septic":"Your Company"),uu=()=>Ia||An().town,Pr=()=>uu().split(",")[0],bl=r=>An().sym+Math.round(r).toLocaleString("en-US"),Rr=r=>{let e=Math.pow(10,Math.max(0,Math.floor(Math.log10(Math.max(1,r)))-1));return Math.round(r/e)*e};fe("#iNiche")&&(fe("#iNiche").innerHTML=cf.map(r=>`<option value="${r}">${pt(Ar[r].name)}</option>`).join(""),fe("#iNiche").value=fi,fe("#iNiche").onchange=r=>{fi=r.target.value,yu()});fe("#iCountry")&&(fe("#iCountry").innerHTML=Object.entries(yl).map(([r,e])=>`<option value="${r}">${pt(e.name)}</option>`).join(""),fe("#iCountry").value=Fs,fe("#iCountry").onchange=r=>{Fs=r.target.value,fe("#iTown").placeholder="e.g. "+An().town});fe("#iCo").value=Nr;fe("#iTown").value=Ia;fe("#iTown").placeholder="e.g. "+An().town;function yu(){fe("#hCo").textContent=Nr||(hu?"Your business":"Your company"),document.title=(Nr||"Your business")+", 30 Days From Now | Booked Jobs Co.";let r=fe("#hTrade");if(r){let e=Mt().name;r.textContent=/^[A-Z]{2,}/.test(e)?e:e.toLowerCase()}}yu();fe("#iCo").addEventListener("input",r=>{Nr=r.target.value.trim(),yu()});fe("#iTown").addEventListener("input",r=>{Ia=r.target.value.trim()});var u0=new Date,Da=r=>r.toLocaleDateString(An().locale==="en-US"||An().locale==="en-CA"?"en-US":"en-GB",{weekday:"short",month:"short",day:"numeric"}),wl=new Date(u0);wl.setDate(wl.getDate()+3);var xu=r=>{let e=new Date(wl);return e.setDate(e.getDate()+r),e},Al=()=>{let r=new URL(location.origin+(ff.base||"")+(hu?"/try":"/demo"));return Nr&&r.searchParams.set("co",Nr),Ia&&r.searchParams.set("town",Ia),(hu||fi!=="septic")&&r.searchParams.set("niche",fi),Fs!=="us"&&r.searchParams.set("country",Fs),r.toString()},Cr=null,pi=!1,Hs=()=>{if(!Cr)try{Cr=new(window.AudioContext||window.webkitAudioContext)}catch{}return Cr&&Cr.state==="suspended"&&Cr.resume(),Cr};function hi(r,e,t="sine",n=.1,i=0){let s=Hs();if(!s||pi)return;let a=s.currentTime+i,o=s.createOscillator(),l=s.createGain();o.type=t,o.frequency.setValueAtTime(r,a),l.gain.setValueAtTime(1e-4,a),l.gain.exponentialRampToValueAtTime(n,a+.015),l.gain.exponentialRampToValueAtTime(1e-4,a+e),o.connect(l),l.connect(s.destination),o.start(a),o.stop(a+e+.05)}function uf(r,e,t,n){let i=Hs();if(!i||pi)return;let s=i.currentTime,a=i.sampleRate*r|0,o=i.createBuffer(1,a,i.sampleRate),l=o.getChannelData(0);for(let d=0;d<a;d++)l[d]=Math.random()*2-1;let c=i.createBufferSource();c.buffer=o;let h=i.createBiquadFilter();h.type="bandpass",h.Q.value=.8,h.frequency.setValueAtTime(e,s),h.frequency.exponentialRampToValueAtTime(t,s+r*.9);let u=i.createGain();u.gain.setValueAtTime(1e-4,s),u.gain.exponentialRampToValueAtTime(n,s+r*.85),u.gain.exponentialRampToValueAtTime(1e-4,s+r),c.connect(h),h.connect(u),u.connect(i.destination),c.start(s),c.stop(s+r)}var It={warp(){uf(5.4,160,3e3,.25);let r=Hs();if(!r||pi)return;let e=r.currentTime,t=r.createOscillator(),n=r.createGain(),i=r.createBiquadFilter();i.type="lowpass",i.frequency.value=500,t.type="sawtooth",t.frequency.setValueAtTime(50,e),t.frequency.exponentialRampToValueAtTime(240,e+5.3),n.gain.setValueAtTime(1e-4,e),n.gain.exponentialRampToValueAtTime(.08,e+4.6),n.gain.exponentialRampToValueAtTime(1e-4,e+5.5),t.connect(i),i.connect(n),n.connect(r.destination),t.start(e),t.stop(e+5.6)},arrive(){[392,523,659,784,1047].forEach((r,e)=>hi(r,1.2,"sine",.06,e*.07))},tap(){hi(1400,.05,"square",.03)},ping(){hi(880,.25,"sine",.08),hi(1320,.35,"sine",.06,.09)},chime(){[523,659,784,1047].forEach((r,e)=>hi(r,.5,"sine",.06,e*.08))},whoosh(){uf(.9,400,2400,.1)},ring(){for(let r=0;r<2;r++)hi(1180,.12,"square",.025,r*.6),hi(1480,.12,"square",.025,r*.6+.14)},engine(r){let e=Hs();if(!e||pi)return;let t=e.currentTime,n=e.createOscillator(),i=e.createGain(),s=e.createBiquadFilter();s.type="lowpass",s.frequency.value=260,n.type="sawtooth",n.frequency.setValueAtTime(48,t),n.frequency.linearRampToValueAtTime(70,t+r*.4),n.frequency.linearRampToValueAtTime(52,t+r),i.gain.setValueAtTime(1e-4,t),i.gain.exponentialRampToValueAtTime(.05,t+.6),i.gain.setValueAtTime(.05,t+r-.8),i.gain.exponentialRampToValueAtTime(1e-4,t+r),n.connect(s),s.connect(i),i.connect(e.destination),n.start(t),n.stop(t+r+.1)},tick(){hi(1900,.03,"square",.02)}},du=null,Rl=null,pu=null,El=null,Ra=null;fetch("/x3d/assets/voice.json?v=2").then(r=>r.json()).then(r=>du=r).catch(()=>{});fetch("/x3d/assets/voice.mp3?v=2").then(r=>r.arrayBuffer()).then(r=>{pu=r,gf()}).catch(()=>{});function gf(){let r=Cr;!r||!pu||Rl||r.decodeAudioData(pu.slice(0)).then(e=>Rl=e).catch(()=>{})}function Il(){try{El&&El.stop()}catch{}El=null;try{window.speechSynthesis&&speechSynthesis.cancel()}catch{}}function d0(r,e){if(Il(),pi||Kn!=="story")return 0;let t=Hs(),n=du&&du[r];if(t&&Rl&&n){let i=t.createBufferSource();return i.buffer=Rl,Ra||(Ra=t.createGain(),Ra.gain.value=1.15,Ra.connect(t.destination)),i.connect(Ra),i.start(0,n[0],n[1]),El=i,n[1]*1e3}if(window.speechSynthesis&&e){let i=new SpeechSynthesisUtterance(e);return i.lang="en-US",i.rate=1,i.pitch=.92,speechSynthesis.speak(i),e.split(" ").length*380}return 0}fe("#mute").onclick=()=>{pi=!pi,fe("#mute").textContent=pi?"\xD7":"\u266A",pi&&Il()};var Na=fe("#gl"),ct=sf(Na),ui=ct.camera;ct.setTOD("dusk");var Dr=of(wl,Da),Ve=null,df="",vf="",mi=null,Re=null,ji=null,di=0,Wi=0;async function p0(){let r=[wn(),uu(),fi,Fs].join("|");Ve&&df===r||(Ve&&Ve.dispose(),Ve=await af(ct,wn(),uu(),{vehicle:Mt().vehicle,sub:Mt().sub,leftDrive:An().leftDrive}),df=r,S0(),vf=f0(),mi=g0())}function Dl(){ct.resize(),Dr.resize()}addEventListener("resize",Dl);Dl();function f0(){try{ct.setTOD("day"),ct.update(0),ji&&ji.fix(0);let r=ui.clone();r.fov=38,r.aspect=1.25,r.updateProjectionMatrix(),r.position.set(62.5,2.2,-3.6),r.lookAt(74,2.2,-14.5);let e=ct.renderer,t=new re;e.getSize(t);let n=e.getPixelRatio();e.setPixelRatio(1),e.setSize(1e3,800,!1),e.render(ct.scene,r);let i=e.domElement.toDataURL("image/jpeg",.85);return e.setPixelRatio(n),e.setSize(t.x,t.y,!1),ct.setTOD("dusk"),ct.update(0),Dl(),i}catch{return""}}function _l(r,e={}){e=Object.assign({bg:"#ffffff",fg:"#0b1a14",sub:"#4a5d55",accent:"#f39a3d",h:.8},e);let t=[44,32,30],n=30,i=document.createElement("canvas").getContext("2d"),s=0;r.forEach((p,m)=>{i.font=`${m?600:800} ${t[Math.min(m,2)]}px Inter, Arial`,s=Math.max(s,i.measureText(p).width)}),s=Math.ceil(s+n*2+44);let a=Math.ceil(n*1.5+r.reduce((p,m,v)=>p+t[Math.min(v,2)]*1.3,0)),o=document.createElement("canvas");o.width=s,o.height=a+12;let l=o.getContext("2d");l.shadowColor="rgba(0,0,0,.3)",l.shadowBlur=12,l.fillStyle=e.bg,l.beginPath(),l.roundRect?l.roundRect(4,4,s-8,a-2,30):l.rect(4,4,s-8,a-2),l.fill(),l.shadowColor="transparent";let c=n*.75;r.forEach((p,m)=>{let v=t[Math.min(m,2)];l.font=`${m?600:800} ${v}px Inter, Arial`,l.textBaseline="top",m===0&&(l.fillStyle=e.accent,l.beginPath(),l.arc(n+12,c+v*.55,12,0,7),l.fill()),l.fillStyle=m?e.sub:e.fg,l.fillText(p,n+44,c),c+=v*1.3});let h=new _n(o);h.colorSpace=st;let u=new ln(new tn({map:h,depthTest:!1,transparent:!0}));u.renderOrder=20;let d=e.h/(a+12)*(r.length>1?1.6:1);return u.userData.base=me(s*d,(a+12)*d,1),u.scale.set(.001,.001,1),u.userData.on=0,u.userData.cur=0,u}var Us=[];function qi(r,e){r.userData.on=e?1:0}function m0(r){Us.forEach(e=>{let t=e.userData;t.cur+=(t.on-t.cur)*(1-Math.exp(-r*10));let n=Math.max(1e-4,t.cur*(1+Math.sin(Math.min(1,t.cur)*Math.PI)*.12*t.on));e.scale.set(t.base.x*n,t.base.y*n,1),e.visible=t.cur>.01})}function g0(){Us.length=0;let r=new Ae;Ve.root.add(r);let e={g:r};Re=hf[Mt().prop];let t=new Ae;if(r.add(t),ji=Re.build(t,Ve),ji.fix(0),di=0,Wi=0,e.notif=_l(["NEW LEAD \xB7 Sarah M.",Mt().opts[Mt().pick],Pr()+" \xB7 0.4 mi away"],{h:1.1}),r.add(e.notif),Us.push(e.notif),e.call=_l(["Calling Sarah M.","from your business line"],{accent:"#2fbf7f",h:.9}),r.add(e.call),Us.push(e.call),e.booked=_l(["Job done \xB7 Sarah M.",Mt().done],{accent:"#2fbf7f",h:1}),e.booked.position.set(Re.spot[0],4.4,Re.spot[1]),r.add(e.booked),Us.push(e.booked),e.hose=null,Re.ladder){let n=new Ae,i=new lt({color:14263361,roughness:.6});[-.28,.28].forEach(s=>{let a=new Se(new ae(.07,4.6,.07),i);a.position.set(s,2.3,0),a.castShadow=!0,n.add(a)});for(let s=0;s<12;s++){let a=new Se(new ae(.56,.05,.05),i);a.position.y=.3+s*.36,n.add(a)}n.position.set(Re.ladder.x,0,Re.ladder.z+.9),n.rotation.x=-.2,n.visible=!1,r.add(n),e.ladder=n}return e.pins=[],[[-20,21],[12,21],[-12,-21],[44,21],[-80,21],[20,-21],[-80,-21],[100,21],[-112,-21]].forEach(([n,i],s)=>{let a=new Ae;a.position.set(n,0,i),r.add(a);let o=new Se(new Oe(.5,1.4,40,16,1,!0),new et({color:6090928,transparent:!0,opacity:0,blending:Ct,depthWrite:!1,side:Hn}));o.position.y=20,a.add(o);let l=new ln(new tn({map:Gi(),color:8257478,transparent:!0,depthWrite:!1,blending:Ct,opacity:0}));l.scale.set(9,9,1),l.position.y=14,a.add(l);let c=_l([s===0?"Sarah M. \xB7 booked":"Booked job "+(s+1)],{accent:"#2fbf7f",h:1.6});c.position.y=17,a.add(c),Us.push(c),a.userData={beam:o,orb:l,lab:c,on:0,cur:0},e.pins.push(a)}),e}function v0(r){let e=mi;e.hose&&(e.g.remove(e.hose),e.hose.geometry.dispose());let t=new Di(r);e.hose=new Se(new ga(t,180,.08,8),new lt({color:2829875,roughness:.7})),e.hose.castShadow=!0,e.hose.geometry.setDrawRange(0,0),e.hoseLen=e.hose.geometry.index.count,e.hoseT=.001,e.g.add(e.hose)}var Ge={p:me(-80,70,140),t:me(0,0,0),shot:null,T:0,yaw:0,yawT:0,pitch:0,pitchT:0,fovT:40,cut:!1,shake:0};function St(r,e=4,t={}){Ge.shot={fn:r,dur:e,t0:Ge.T,ease:t.linear?n=>n:Ll},Ge.fovT=t.fov||40,Ge.cut=!!t.cut,Ge.shake=t.shake||0}var fu=(r,e,t)=>r.clone().lerp(e,t),Lr=(r,e,t,n)=>i=>[fu(me(...r),me(...t),i),fu(me(...e),me(...n),i)];function y0(r,e){let t=new Di(r.map(i=>i.isVector3?i:me(...i))),n=new Di(e.map(i=>i.isVector3?i:me(...i)));return i=>[t.getPoint(i),n.getPoint(i)]}var pf=me(0,0,0);function x0(r){let e=Ge.p,t=Ge.t;if(Ge.shot){let l=Ge.shot,c=La((Ge.T-l.t0)/l.dur,0,1),h=l.fn(l.ease(c),r);e=h[0],t=h[1]}Ge.yaw+=(Ge.yawT-Ge.yaw)*(1-Math.exp(-r*5)),Ge.pitch+=(Ge.pitchT-Ge.pitch)*(1-Math.exp(-r*5)),Ir||(Ge.yawT*=Math.exp(-r*.9),Ge.pitchT*=Math.exp(-r*.9));let n=e.clone().sub(t),i=ui.aspect<.8;n.applyAxisAngle(me(0,1,0),Ge.yaw),n.y*=1+Ge.pitch;let s=t.clone().add(n);Ge.shake&&s.add(me(Math.sin(Ge.T*1.7)*.03,Math.sin(Ge.T*2.3)*.025,Math.cos(Ge.T*1.3)*.03).multiplyScalar(Ge.shake));let a=Ge.cut?1:1-Math.exp(-r*7);Ge.cut=!1,ui.position.lerp(s,a),pf.lerp(t,a),ui.lookAt(pf);let o=Ge.fovT*(i?1.45:ui.aspect<1.2?1.15:1);Math.abs(ui.fov-o)>.01&&(ui.fov+=(o-ui.fov)*Math.max(a,.1),ui.updateProjectionMatrix()),ct.setFocus(t)}var Ir=null;Na.addEventListener("pointerdown",r=>{Kn==="story"&&(Ir={x:r.clientX,y:r.clientY},Na.setPointerCapture(r.pointerId),fe("#hint").style.opacity=0)});Na.addEventListener("pointermove",r=>{Ir&&(Ge.yawT=La(Ge.yawT-(r.clientX-Ir.x)*.004,-.9,.9),Ge.pitchT=La(Ge.pitchT+(r.clientY-Ir.y)*.003,-.4,.6),Ir={x:r.clientX,y:r.clientY})});["pointerup","pointercancel"].forEach(r=>Na.addEventListener(r,()=>Ir=null));var _0=(r,e=1.5)=>r.root.position.clone().add(me(0,e*(r.o.height/1.75),0)),_u=r=>me(Math.sin(r.yaw),0,Math.cos(r.yaw));function Bs(r,e=2.6,t=.6,n=1.55,i=1.5){return()=>{let s=_u(r),a=me(s.z,0,-s.x),o=_0(r,i);return[o.clone().addScaledVector(s,e).addScaledVector(a,t).add(me(0,n-i,0)),o]}}var Kn="landing";async function Mu(){if(Kn!=="landing")return;Kn="loading",Hs(),gf();try{let e=document.documentElement;(e.requestFullscreen||e.webkitRequestFullscreen||(()=>{})).call(e)}catch{}let r=fe("#blackout");r.innerHTML='<div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:#6d8a7e;font-size:13px;letter-spacing:.2em">LOADING YOUR TOWN</div>',r.classList.add("on"),await new Promise(e=>setTimeout(e,480)),document.body.classList.add("in-show","locked"),scrollTo(0,0),await p0(),r.innerHTML="",Kn="warp",Dr.start(),fe("#warpHud").classList.add("on"),It.warp(),r.classList.remove("on"),Dr.onDate=(e,t,n)=>{fe("#wFill").style.width=n*100+"%",t&&(fe("#wDate").textContent=Da(t),fe("#wDay").textContent="DAY "+e+(e===30?" \xB7 YOUR FUTURE":""))},Dr.onDone=()=>{let e=fe("#flash");e.style.transition="none",e.style.opacity=1,fe("#warpHud").classList.remove("on"),document.body.classList.add("in-story"),Kn="story",It.arrive(),ct.setTOD("dusk"),Tn.t=0,Tn.n=0,requestAnimationFrame(()=>{e.style.transition="opacity 1.4s ease",e.style.opacity=0});try{history.replaceState(null,"",Al().replace(location.origin,""))}catch{}gi(0,!0)}}fe("#start").addEventListener("click",Mu);Ki("[data-start]").forEach(r=>r.addEventListener("click",Mu));fe("#who").addEventListener("submit",r=>{r.preventDefault(),Mu()});fe("#exit").onclick=()=>{Il();try{document.fullscreenElement&&document.exitFullscreen()}catch{}location.href=Al()};var Yi=0,mu=0,Xi=!0,Oa=0,gt=r=>r===mu,zt=(r,e)=>new Promise(t=>setTimeout(()=>t(gt(e)),r)),Wt=(r,e)=>zt(Math.max(r,Oa-performance.now()+350),e);function _t(r,e,t){let n=t?d0(t,e):0;Oa=performance.now()+n,fe("#cMeta").textContent=r;let i=fe("#cText");i.innerHTML=e.split(" ").map(a=>`<span>${pt(a)}</span>`).join(" ");let s=n?Math.min(90,n/Math.max(1,i.children.length)*.85):55;[...i.children].forEach((a,o)=>setTimeout(()=>a.classList.add("on"),60+o*s))}function yf(r){let e=fe("#prompt");if(!r){e.classList.remove("on");return}e.textContent=r,e.classList.add("on")}var Pa=0,gu=0,M0=0;function Cl(r,e,t){let n=fe("#timer");n.classList.toggle("on",!!r),n.classList.toggle("done",!!t),e!==void 0&&(Pa=e,gu=e,fe("#tClock").textContent="0:"+String(Math.floor(e)).padStart(2,"0"))}function Sl(r,e,t,n){let i=document.createElement("div");for(i.className="card "+r,i.innerHTML=`<small><span>${pt(e)}</span><span>${pt(n||"now")}</span></small>${t}`,fe("#sms").appendChild(i);fe("#sms").children.length>3;)fe("#sms").firstChild.remove()}function Ua(r){let e=fe("#panel");if(!r){e.classList.remove("on");return}e.innerHTML=`<div class="glass">${r}</div>`,e.classList.add("on")}var Os=[{name:"The problem",run:A0},{name:"Your ad",run:R0},{name:"The lead",run:C0},{name:"She found you",run:P0},{name:"Booked",run:L0},{name:"The job",run:D0},{name:"Friday report",run:N0},{name:"Day 30",run:O0}];Os.forEach((r,e)=>{let t=document.createElement("button");t.title=e+1+". "+r.name,t.onclick=()=>gi(e),fe("#dots").appendChild(t)});function gi(r,e){r=La(r,0,Os.length-1),mu++;let t=mu;Il(),Oa=0;let n=()=>{gt(t)&&(Yi=r,Ki("#dots button").forEach((s,a)=>{s.classList.toggle("on",a===r),s.classList.toggle("past",a<r)}),fe("#bNext").classList.remove("pulse"),fe("#bNext").textContent=r===Os.length-1?"Replay \u21BA":"Next scene \u25B6",yf(""),_f(!0),Ua(""),fe("#endcard").classList.remove("on"),fe("#sms").innerHTML="",Cl(!1),w0(r),Os[r].run(t,e).then(s=>{!gt(t)||!s||(Xi&&Yi<Os.length-1?setTimeout(()=>gt(t)&&gi(Yi+1),700):fe("#bNext").classList.add("pulse"))}))};if(e)return n();let i=fe("#dip");i.classList.add("on"),setTimeout(()=>{n(),setTimeout(()=>i.classList.remove("on"),120)},320)}fe("#bNext").onclick=()=>gi(Yi===Os.length-1?0:Yi+1);fe("#bPrev").onclick=()=>gi(Yi-1);fe("#bPlay").onclick=()=>{Xi=!Xi,fe("#bPlay").textContent=Xi?"\u275A\u275A":"\u25B6",fe("#bPlay").title=Xi?"Movie mode on":"Movie mode off"};addEventListener("keydown",r=>{Kn!=="story"||r.target.tagName==="INPUT"||r.target.tagName==="SELECT"||((r.key==="ArrowRight"||r.key===" ")&&(r.preventDefault(),gi(Yi+1)),r.key==="ArrowLeft"&&gi(Yi-1))});var b0=me(76,0,-12.5),E0=me(73,0,-9.4),Pl=null,xf=.985,Vi=0,ks=0;function S0(){let r=An().leftDrive?1.9:-1.9;Pl=new Di([me(76,0,-12.5),me(70,0,-12),me(64,0,-8.5),me(60,0,r-1.6),me(52,0,r),me(10,0,r),me(-6,0,r),me(-13.5,0,1.6),me(-20,0,3.4),me(-23,0,3.6)])}function vu(r){r=La(r,0,1);let e=Pl.getPointAt(r),t=Pl.getPointAt(Math.min(1,r+.004));Ve.truck.position.copy(e);let n=t.x-e.x,i=t.z-e.z;n*n+i*i>1e-8&&(Ve.truck.rotation.y=Math.atan2(-i,n)),Vi=r}var T0=()=>{let r=Ve.truck,e=me(Math.cos(r.rotation.y),0,-Math.sin(r.rotation.y));return r.position.clone().addScaledVector(e,(r.userData.rear||-3)+.3).add(me(0,.9,0)).addScaledVector(me(-e.z,0,e.x),0)},Ca=[me(-12.5,0,9),me(-10.8,0,21),me(-11.8,0,28)];function bu(){return Re.front?{p:me(-18.8,0,15.6),yaw:Math.PI}:{p:me(-18.6,0,26.2),yaw:0}}function w0(r){let e=Ve.people.sarah,t=Ve.people.owner,n=mi;e.path=null,t.path=null,e.root.visible=!0,t.root.visible=!0,t.root.position.y=0,ks=0,Ve.noTraffic=!1,[n.notif,n.call,n.booked].forEach(a=>qi(a,0)),n.hose&&(n.hose.geometry.setDrawRange(0,0),n.hoseT=0),n.ladder&&(n.ladder.visible=!1),n.pins.forEach(a=>{a.userData.on=0,qi(a.userData.lab,0)}),Wi=r>=6?1:0,di=Wi,ji.fix(di),Ve.truck.position.copy(b0),Ve.truck.rotation.y=Math.PI,Vi=0,t.root.position.copy(E0),t.yaw=t.yawTarget=.5,t.set("idle"),t.setMood("neutral");let i=bu(),s=me(Re.spot[0],0,Re.spot[1]);r<=1&&(e.root.position.copy(i.p),e.yaw=e.yawTarget=i.yaw,e.set("idle"),e.setMood("neutral")),r>=2&&r<=4&&(e.root.position.copy(s),e.face(Re.look[0],Re.look[2]),e.yaw=e.yawTarget,e.set("phoneHappy"),e.setMood("smile")),r===5&&(e.root.visible=!1,vu(0)),r>=6&&(e.root.position.copy(s),e.yaw=e.yawTarget=Math.PI,e.set("idle"),e.setMood("happy"),vu(0)),r===6&&(t.root.position.set(66,0,-12),t.yaw=t.yawTarget=.35,t.set("phoneHappy"),t.setMood("happy"))}var Ml=()=>`Day 4 \xB7 7:38 PM \xB7 ${Pr()}`;async function A0(r,e){ct.setTOD("dusk",e?0:1.5);let t=Ve.people.sarah,n=me(Re.spot[0],0,Re.spot[1]),i=me(...Re.look),s=n.clone().sub(me(i.x,0,i.z)).normalize(),a=n.clone().addScaledVector(s,7).add(me(s.z*3,5,-s.x*3)),o=n.clone().lerp(i,.5).add(me(0,.8,0));if(St(y0([me(-95,62,-70),me(-60,36,8),me(-30,18,Re.front?-18:52),a],[me(-20,0,0),me(-18,2,22),o,o]),e?8:6.5),_t(Ml(),`Meet Sarah. She lives a few streets from ${wn()}. She's never heard of you.`,"g_meet"),!await Wt(e?3800:2600,r))return;_t(Ml(),"It's a normal Tuesday evening. Dinner is done.","g_evening");let l=bu();if(await t.walkTo([l.p.clone().addScaledVector(me(Math.sin(l.yaw),0,Math.cos(l.yaw)),1.6),n],1.05),!gt(r)||(t.face(i.x,i.z),t.set(Re.look===void 0||Mt().look==="down"?"lookDown":"lookUp"),t.setMood("worried"),await Wt(600,r),!gt(r)))return;let c=me(...Re.ins);if(Mt().look==="down"){let h=n.clone().sub(me(i.x,0,i.z)).normalize(),u=me(h.z,0,-h.x);c=me(i.x,0,i.z).addScaledVector(u,3.4).addScaledVector(h,1.6).add(me(0,1.7+i.y*.4,0))}if(St(Lr(c.toArray(),[i.x,i.y,i.z],c.clone().lerp(i,.08).toArray(),[i.x,i.y,i.z]),4.5,{cut:!0,shake:1}),_t(Ml(),Mt().problem,"p_"+fi),!!await Wt(3800,r)&&(St(Bs(t,2.5,.7,1.55,1.45),3,{cut:!0,shake:1,fov:36}),!!await zt(1600,r)))return t.set("phone"),St(h=>{let u=t.root,d=_u(t),p=me(d.z,0,-d.x),m=new E;return t.phone.getWorldPosition(m),[u.position.clone().addScaledVector(d,-2.3+h*.4).addScaledVector(p,-1).add(me(0,2.15,0)),m]},4,{cut:!0,shake:1}),_t(Ml(),"So she does what everyone does now. She grabs her phone.","g_phone"),await Wt(3600,r)}async function R0(r){ct.setTOD("dusk",.8);let e=Ve.people.sarah;if(e.state!=="phone"&&(e.root.position.set(Re.spot[0],0,Re.spot[1]),e.face(Re.look[0],Re.look[2]),e.yaw=e.yawTarget,e.set("phone"),e.setMood("worried")),St(n=>{let i=new E;e.phone.getWorldPosition(i);let s=_u(e),a=me(s.z,0,-s.x),o=e.root.position.clone().addScaledVector(s,-2).addScaledVector(a,-.9).add(me(0,2.1,0)),l=i.clone().addScaledVector(s,-.22).addScaledVector(a,-.05).add(me(0,.16,0));return[o.lerp(l,n),i]},2.2),_t("7:39 PM \xB7 Sarah's phone","She opens Facebook. She's never heard of you. But there you are.","g_fb"),It.whoosh(),!await zt(2e3,r)||(B0(),!await zt(1300,r))||(fe("#feedIn").style.transform=`translateY(-${fe("#adPost").offsetTop-8}px)`,!await Wt(2300,r))||(_t("Your move","This is your ad. Tap it, like Sarah would.","g_tap"),fe("#adBtn").classList.add("hl"),fe("#pTip").style.visibility="visible",await cu("#adBtn",r,8e3),!gt(r)))return;It.tap(),fe("#adBtn").classList.remove("hl"),fe("#pTip").textContent="Pick what's going on.",fe("#sheet").classList.add("on"),_t("The form","Three taps. About 20 seconds. That's all it takes.","g_form");let t=await cu(".opt",r,4800,!0);if(gt(r)&&(It.tap(),(t||Ki(".opt")[Mt().pick]).classList.add("sel"),fe("#send").classList.add("ok"),fe("#pTip").textContent="Now send it.",await cu("#send",r,3e3),!!gt(r)&&(It.tap(),fe("#done").classList.add("on"),fe("#pTip").style.visibility="hidden",It.chime(),_t("7:41 PM","Request sent. Now watch where it goes.","g_sent"),!!await Wt(2e3,r))))return _f(),e.set("phoneHappy"),e.setMood("smile"),St(Bs(e,3,-.8,1.7,1.45),2.5,{cut:!0}),await zt(2200,r)}async function C0(r){ct.setTOD("dusk",.6);let e=Ve.people.sarah,t=Ve.people.owner,n=mi,i=k0(e,me(73,2.2,-9.4));if(Cl(!1),St(s=>[fu(me(Re.spot[0]+10,14,Re.spot[1]+16),me(46,18,22),s),i.core.position.clone()],3.6,{linear:!0}),_t("7:41 PM \xB7 Across town","Her request flies across town, straight to you.","g_flies"),It.whoosh(),!!await Wt(3500,r)&&(t.set("phone"),t.setMood("neutral"),t.face(66,0),St(Lr([64.5,2.4,-2.4],[72.4,1.6,-9.4],[67.4,2.15,-5.2],[72.8,1.75,-9.4]),4,{cut:!0,shake:1}),It.ping(),n.notif.position.set(73,3.3,-9.4),qi(n.notif,1),_t("7:41 PM \xB7 Your phone","Name, address, the problem. Right on your phone. A brand-new customer.","g_phone2"),!!await zt(1200,r)))return t.setMood("smile"),await Wt(4e3,r)}async function P0(r){ct.setTOD("dusk",.5);let e=Ve.people.sarah,t=Ve.people.owner,n=mi;if(Cl(!1),e.set("phone"),e.setMood("neutral"),St(Bs(e,2.4,.7,1.6,1.42),3,{cut:!0,shake:1}),_t("7:41 PM \xB7 A new customer","She's not a referral. She's not a repeat customer. She found you on her own.","g_text"),!!await zt(900,r)&&(It.ping(),Sl("me",wn()+" (auto-text)",`Hi Sarah, it's ${pt(wn())}. Thanks for reaching out about the ${pt(Mt().opts[Mt().pick].toLowerCase())}. I'll give you a call shortly.`,"7:41 PM"),e.setMood("smile"),!!await Wt(2600,r)&&(Sl("","Sarah","Thank you! So glad I found you \u{1F64F}","7:41 PM"),e.set("phoneHappy"),e.setMood("happy"),It.tick(),!!await zt(1800,r)&&(t.set("call"),t.setMood("smile"),qi(n.notif,0),n.call.position.set(73,3.2,-9.4),qi(n.call,1),It.ring(),St(Bs(t,2.6,-.8,1.7,1.55),4,{cut:!0,shake:1}),_t("Then a real call","Then you call her back, and talk about the job.","g_call"),!!await Wt(4200,r)))))return e.set("call"),e.setMood("happy"),qi(n.call,0),Cl(!1),It.chime(),Sl("sys","Your phone","\u2713 New customer: Sarah M. \xB7 found you on Facebook","7:42 PM"),St(Bs(e,2.5,-.6,1.6,1.45),4,{cut:!0,shake:1}),_t("A fuller calendar","That's how your calendar fills up. New homeowners finding you, on top of your referrals, every single week.","g_52"),await Wt(4500,r)}async function L0(r){ct.setTOD("night",2.5);let e=Ve.people.sarah,t=Ve.people.owner;if(e.set("call"),e.setMood("happy"),t.set("call"),t.setMood("smile"),St(p=>{let m=2.2+p*.5;return[me(-20+Math.cos(m)*70,34,10+Math.sin(m)*70),me(10,0,0)]},16,{linear:!0}),_t("7:44 PM \xB7 On the call","You pick a time together. Drag Sarah's job onto your calendar.","g_drag"),!await zt(1400,r))return;let n=[1,2,3,4,5].map(p=>xu(p+2)),i=["8 AM","10 AM","1 PM","3 PM"],s=["Ellis","Park St","Gray","Webb","Diaz","Cole","Hwy 74","Reyes","Patel"],a=["0,0","0,2","1,1","2,0","2,3","3,0","4,1","4,2","1,3"],o={};a.forEach((p,m)=>o[p]=`${Mt().busy[m]} \xB7 ${s[m]}`);let l=`<h3>Your calendar \xB7 next week</h3><div class="sub">Busy slots are already blocked. Example jobs.</div>
   <div class="tray"><div class="jobcard" id="job"><span class="dot"></span><div><b>Sarah M. \xB7 ${pt(Mt().job)}</b>${pt(Mt().opts[Mt().pick])}</div></div><span class="arrow">\u2190 drag onto an open slot</span></div>
   <div class="cal"><div></div>${n.map(p=>`<div class="hd">${p.toLocaleDateString("en-US",{weekday:"short"}).toUpperCase()} ${p.getDate()}</div>`).join("")}`;i.forEach((p,m)=>{l+=`<div class="tm">${p}</div>`;for(let v=0;v<5;v++){let f=v+","+m;l+=o[f]?`<div class="slot busy">${pt(o[f])}</div>`:`<div class="slot open" data-k="${f}">open</div>`}}),l+="</div>",Ua(l);let c=await I0(r,Xi?Math.max(6e3,Oa-performance.now()+1200):0);if(!gt(r)||!c)return;let[h,u]=c.dataset.k.split(",").map(Number),d=`${n[h].toLocaleDateString("en-US",{weekday:"long"})} ${i[u].replace(" ",":00 ")}`;if(c.classList.add("booked"),c.textContent="Sarah M. \u2713",It.chime(),_t("Booked",`Booked for ${d}. She gets a confirmation text right away.`,"g_booked"),!!await zt(1800,r))return Ua(""),Sl("me",wn(),`You're booked for ${pt(d)}. We'll text you when we're on the way.`,"7:45 PM"),It.ping(),e.set("phoneHappy"),await Wt(3600,r)}function I0(r,e){return new Promise(t=>{let n=fe("#job"),i=!1,s=0,a=0,o=!1,l=Ki(".slot.open"),c=(d,p)=>l.find(m=>{let v=m.getBoundingClientRect();return d>v.left&&d<v.right&&p>v.top&&p<v.bottom}),h=d=>{i||!d||(i=!0,n.style.visibility="hidden",t(d))};n.addEventListener("pointerdown",d=>{o=!0,s=d.clientX,a=d.clientY,n.setPointerCapture(d.pointerId),n.classList.add("drag"),n.style.transition="none"}),n.addEventListener("pointermove",d=>{o&&(n.style.transform=`translate(${d.clientX-s}px,${d.clientY-a}px) scale(1.05)`,l.forEach(p=>p.classList.toggle("hot",p===c(d.clientX,d.clientY))))}),n.addEventListener("pointerup",d=>{o=!1,n.classList.remove("drag");let p=c(d.clientX,d.clientY);p?(It.tap(),h(p)):(n.style.transition="transform .3s",n.style.transform="")}),l.forEach(d=>d.addEventListener("click",()=>{It.tap(),h(d)})),e&&setTimeout(()=>{if(i||o||!gt(r))return;let d=l.find(v=>v.dataset.k==="3,1")||l[0],p=n.getBoundingClientRect(),m=d.getBoundingClientRect();n.style.transition="transform 1.1s cubic-bezier(.4,0,.2,1)",n.style.transform=`translate(${m.left+m.width/2-p.left-p.width/2}px,${m.top+m.height/2-p.top-p.height/2}px) scale(.8)`,d.classList.add("hot"),setTimeout(()=>h(d),1150)},e);let u=setInterval(()=>{gt(r)?i&&clearInterval(u):(clearInterval(u),t(null))},300)})}async function D0(r){ct.setTOD("dawn"),ct.setTOD("day",9);let e=Ve.people.sarah,t=Ve.people.owner,n=mi;Ve.noTraffic=!0;let i=xu(5),s=Mt().work,a=me(Re.spot[0],0,Re.spot[1]),o=me(Re.work[0],0,Re.work[1]),l=me(...Re.look);if(_t(`${Da(i)} \xB7 9:48 AM`,"Thursday morning. You head out.","g_morning"),St(Lr([66,3,-1],[74,1.4,-10],[64,4,1],[74,1.6,-11]),3),await t.walkTo([me(73.5,0,-10.6)],1.4),!gt(r)||(t.root.visible=!1,It.engine(9),ks=1,Ve.truck.setLights(!0),St(()=>{let y=Ve.truck,_=me(Math.cos(y.rotation.y),0,-Math.sin(y.rotation.y)),R=me(-_.z,0,_.x);return[y.position.clone().addScaledVector(_,-13).addScaledVector(R,An().leftDrive?6:-6).add(me(0,7.5,0)),y.position.clone().addScaledVector(_,6).add(me(0,1.5,0))]},1),await Wt(1200,r),!gt(r)))return;for(_t(`${Da(i)} \xB7 9:52 AM`,`Your name on the side, rolling through ${Pr()}.`,"g_truck");gt(r)&&Vi<xf;)await zt(200,r);if(!gt(r)||(ks=0,Ve.truck.setLights(!1),St(Lr([-6,6,14],[-18,1.5,4],[-4,8,18],[-14,1,14]),3),await Wt(200,r),!gt(r)))return;_t("10:00 AM sharp","Right on time. Sarah sees you pull up.","g_ontime"),t.root.visible=!0,t.root.position.set(-16.5,0,5.4),t.set("idle"),t.setMood("smile");let c=bu();e.root.visible=!0,e.root.position.copy(c.p),e.yaw=e.yawTarget=c.yaw;let h=Re.front?me(-21.5,0,12.8):a.clone().add(me(1.6,0,1.2));if(e.walkTo([c.p.clone().addScaledVector(me(Math.sin(c.yaw),0,Math.cos(c.yaw)),1.4),h],1.1).then(()=>{gt(r)&&(e.face(o.x,o.z),e.set("wave"),e.setMood("happy"))}),!await zt(1400,r))return;let u=Re.front?[o]:[...Ca,o];s==="hose"&&v0([T0(),...Re.front?[]:Ca.map(y=>y.clone().setY(.1)),o.clone().setY(.15),l.clone().setY(Math.min(l.y,.4))]);let d=Re.ladder?me(Re.ladder.x,0,Re.ladder.z+1.25):o,m=(Re.front?d:Ca[0]).clone().sub(t.root.position).setY(0),v=t.root.position.clone().addScaledVector(m.normalize(),Math.min(1.6,m.length()||1.6));if(St(()=>{let y=t.root.position;return[y.clone().add(me(6,4.5,6)),y.clone().add(me(0,1,0))]},.6),await Promise.race([t.walkTo([v],1.6),zt(1e3,r)]),!gt(r))return;let f=Re.front?t.root.position.clone():Ca[Ca.length-1].clone(),x=d.clone().sub(f).setY(0),g=x.length();if(x.normalize(),t.root.position.copy(d.clone().addScaledVector(x,-Math.min(3,Math.max(1.2,g)))),t.face(d.x,d.z),St(()=>[t.root.position.clone().addScaledVector(x,-4.2).add(me(1.6,2.4,0)),d.clone().add(me(0,1,0))],.3,{cut:!0}),await Promise.race([t.walkTo([d],1.6),zt(2200,r)]),!!gt(r)){if(t.root.position.copy(d),Re.ladder){n.ladder.visible=!0,t.face(Re.ladder.x,Re.ladder.z-3),t.set("climb");let y=performance.now();for(St(Lr([Re.ladder.x+4.5,3.2,Re.ladder.z+7],[Re.ladder.x-.8,3,Re.ladder.z],[Re.ladder.x+3.6,4,Re.ladder.z+6.2],[Re.ladder.x-1,3.6,Re.ladder.z]),6,{shake:1});gt(r)&&performance.now()-y<2400;)t.root.position.y=Math.min(Re.ladder.top,(performance.now()-y)/2400*Re.ladder.top),t.root.position.z=Re.ladder.z+1.25-t.root.position.y*.2,await zt(40,r);t.set("work")}else t.face(l.x,l.z),t.set("kneel"),St(Lr(Re.ins,[l.x,Math.max(.6,l.y),l.z],[Re.ins[0]*.98+o.x*.02,Re.ins[1]*.9,Re.ins[2]*.98+o.z*.02],[l.x,Math.max(.6,l.y),l.z]),6,{shake:1});if(gt(r)&&(Wi=1,_t("10:06 AM",Mt().work_line,"w_"+fi),!!await Wt(5200,r))){if(Re.ladder){t.set("climb");let y=performance.now();for(;gt(r)&&performance.now()-y<1600;)t.root.position.y=Math.max(0,Re.ladder.top*(1-(performance.now()-y)/1600)),await zt(40,r);t.root.position.y=0}return t.set("idle"),t.face(h.x,h.z),t.setMood("happy"),qi(n.booked,1),It.chime(),St(Bs(e,3.2,.9,1.7,1.45),4,{cut:!0,shake:1}),_t("10:41 AM",`Job done. And Sarah now has a ${Mt().trade} company she'll call again, and tell her neighbors about.`,"g_done"),await Wt(4200,r)}}}async function N0(r){if(ct.setTOD("day",1.2),St(Lr([58,3,0],[66,1.6,-12],[61,2.4,-4.5],[66,1.7,-12]),6,{shake:1}),_t("Friday \xB7 4:00 PM","Every Friday, a plain-English report lands in your inbox. New customers, booked jobs, and what they're worth. These are example numbers.","g_report"),!await zt(1500,r))return;let e=[[3,1],[5,2],[6,3],[7,3]];return Ua(`<h3>${pt(wn())} \xB7 Pilot report</h3><div class="sub">Weeks 1 to 4 \xB7 <b style="color:#ffd29a">Example numbers</b> to show the format</div>
   <div class="kp"><div><b data-n="21">0</b><span>new people reached out</span></div><div><b data-n="9">0</b><span>jobs booked</span></div><div><b data-n="${Rr(Mt().avg*An().mult*9*.6)}" data-m="1">0</b><span>revenue booked</span></div><div><b data-n="9">0</b><span>new customers, not referrals</span></div></div>
   <div class="legend"><span><i style="background:#45b386"></i>New requests</span><span><i style="background:#f39a3d"></i>Booked</span></div>
   <div class="bars">${e.map((t,n)=>`<div class="col"><div class="stack" data-h="${t[0]/7*100}"><div class="bk" style="flex:${t[1]}"></div><div class="l" style="flex:${t[0]-t[1]}"></div></div><small>Wk ${n+1} \xB7 ${t[0]} / ${t[1]}</small></div>`).join("")}</div>
   <div class="ex">Your real numbers depend on your area and your prices. You'll see them every Friday, good or bad.</div>`),setTimeout(()=>{Ki(".stack").forEach(t=>t.style.height=t.dataset.h+"%"),U0(),It.chime()},300),await Wt(9e3,r)}function U0(){Ki("[data-n]").forEach(r=>{let e=+r.dataset.n,t=r.dataset.m,n=r.dataset.s||"",i=performance.now(),s=()=>{let a=Math.min(1,(performance.now()-i)/1400),o=Math.round(e*Ll(a));r.textContent=t?bl(o):o+n,a<1&&requestAnimationFrame(s)};s()})}async function O0(r){ct.setTOD("dusk",3);let e=mi;Ve.noTraffic=!1,St(s=>{let a=-.4+s*1.2;return[me(-10+Math.cos(a)*125,70-s*12,Math.sin(a)*125),me(-10,0,0)]},24,{linear:!0}),_t(`Day 30 \xB7 ${Da(xu(30))}`,"Thirty days later. Every light is a booked job from someone who found you on Facebook. People who had never heard your name.","g_day30");for(let s=0;s<e.pins.length;s++){if(!await zt(s?650:1500,r))return;e.pins[s].userData.on=1,qi(e.pins[s].userData.lab,1),hi(660+s*60,.3,"sine",.06)}if(!await Wt(1800,r)||(_t("Your call",`${wn()}, this could be your next 30 days. Extra jobs on top of your referrals, and more money coming in. Keep going, or walk away.`,"g_final"),!await zt(1800,r)))return;let t=An().mult,n=Rr(Mt().avg*t);Ua(`<div class="fin"><div class="kicker">Day 30 \xB7 you decide</div><h2>Keep going, or walk away.</h2><div class="sub">No setup fee. No long contract. Play with the numbers:</div></div>
   <div class="roi"><div><label>Extra jobs a month <b id="rb"></b></label><input type="range" id="rB" min="1" max="15" step="1" value="4"><label>Average job value <b id="rj"></b></label><input type="range" id="rJ" min="${Rr(n*.3)}" max="${Rr(n*3)}" step="${Rr(n*.05)}" value="${n}"></div>
   <div class="out"><div><b id="oV">0</b><span>extra jobs a year</span></div><div><b id="oJ">0</b><span>extra a month</span></div><div><b id="oR">0</b><span>extra a year</span></div></div></div>
   <div class="ex">Example math only, on top of your referrals. Not a promise. Real results depend on your area and your prices.</div>
   <div class="ctas"><a class="pill-btn big" href="${mf}" target="_blank" rel="noopener">Book a 15-min call</a><button class="pill-btn ghost big" id="replay">\u21BA Watch again</button><button class="pill-btn ghost big" id="copy">Copy this demo link</button></div>`);let i=()=>{let s=+fe("#rB").value,a=+fe("#rJ").value;fe("#rb").textContent=s,fe("#rj").textContent=bl(a),fe("#oV").textContent=s*12,fe("#oJ").textContent=bl(Rr(s*a)),fe("#oR").textContent=bl(Rr(s*a*12))};return fe("#rB").oninput=i,fe("#rJ").oninput=i,i(),fe("#replay").onclick=()=>gi(0),fe("#copy").onclick=async()=>{try{await navigator.clipboard.writeText(Al()),fe("#copy").textContent="Link copied \u2713"}catch{yf(Al())}},!1}function cu(r,e,t,n){return new Promise(i=>{let s=!1,a=n?Ki(r):[fe(r)],o=h=>{s||(s=!0,a.forEach(u=>u.removeEventListener("click",l)),i(h))},l=h=>o(h.currentTarget);a.forEach(h=>h.addEventListener("click",l)),Xi&&setTimeout(()=>o(null),Math.max(t,Oa-performance.now()+600));let c=setInterval(()=>{gt(e)?s&&clearInterval(c):(clearInterval(c),o(null))},300)})}function B0(){let r=wn().split(" ").map(t=>t[0]).join("").slice(0,2).toUpperCase(),e=Mt();fe("#pScreen").innerHTML=`
  <div class="fb-top"><b>facebook</b><span><i></i><i></i></span></div>
  <div class="feed"><div class="feed-in" id="feedIn">
    <div class="post"><div class="ph"><div class="av" style="background:#8e6bbf">${pt(Pr()[0]||"T")}</div><div><b>${pt(Pr())} Community Board</b><small>2h \xB7 Group</small></div></div><div class="pt">Fall festival this Saturday at the park! Bring a chair \u{1F342}</div><div class="pimg" style="background:linear-gradient(135deg,#f6b26b,#e06666)"></div><div class="pact"><span>Like</span><span>Comment</span><span>Share</span></div></div>
    <div class="post"><div class="ph"><div class="av" style="background:#3d85c6">JM</div><div><b>Jen Miller</b><small>5h</small></div></div><div class="pt">First pumpkin pie of the season, if anyone needs me I'll be here.</div><div class="pimg" style="background:linear-gradient(135deg,#ffd966,#e69138)"></div></div>
    <div class="post" id="adPost"><div class="ph"><div class="av" style="background:#2f8f6a">${pt(r)}</div><div><b>${pt(wn())}</b><small>Sponsored</small></div></div>
      <div class="pt">${pt(e.adHead)} ${pt(Pr())} homeowners, we can help this week. Local, licensed, on time.</div>
      <div class="pimg" style="background-image:url(${vf||""});background-color:#9fc7e8"></div>
      <div class="adbar"><div><small>${pt(Pr())} \xB7 Local ${pt(e.trade)}</small><b>${pt(e.adCta)}</b></div><button class="adbtn" id="adBtn">${pt(e.btn)}</button></div></div>
    <div class="post"><div class="pt" style="padding-top:12px">\u2026</div></div>
  </div></div>
  <div class="sheet" id="sheet"><h4>${pt(wn())}</h4><p>${pt(e.adCta)}. We'll text you in under a minute.</p>
    ${e.opts.map(t=>`<button class="opt">${pt(t)}</button>`).join("")}
    <div class="fld"><span>Name</span><b>Sarah M.</b></div><div class="fld"><span>Phone</span><b>${pt(An().phone)}</b></div>
    <button class="send" id="send">Send request</button></div>
  <div class="done" id="done"><div class="ck">\u2713</div><h4>Request sent</h4><p>${pt(wn())} will text you in under a minute.</p></div>`,fe("#pTip").textContent="Tap the ad, like Sarah would.",fe("#pTip").style.visibility="hidden",fe("#phoneUI").classList.remove("leave"),fe("#phoneUI").classList.add("on"),document.body.classList.add("phone-open")}function _f(r){let e=fe("#phoneUI");if(document.body.classList.remove("phone-open"),!!e.classList.contains("on")){if(r){e.classList.remove("on","leave");return}e.classList.add("leave"),setTimeout(()=>e.classList.remove("on","leave"),650)}}var Tl=[];function k0(r,e){let t=new Ae;ct.scene.add(t);let n=new ln(new tn({map:Gi(),color:16760938,transparent:!0,depthWrite:!1,blending:Ct}));n.scale.set(2.2,2.2,1),t.add(n);let i=[];for(let l=0;l<24;l++){let c=new ln(new tn({map:Gi(),color:16754250,transparent:!0,depthWrite:!1,blending:Ct,opacity:1-l/24}));c.scale.setScalar(1.6*(1-l/26)),t.add(c),i.push(c)}let s=new E;r.phone.getWorldPosition(s),n.position.copy(s);let a=new Es(s,me(25,42,10),e),o={g:t,core:n,trail:i,curve:a,hist:[],t:0};return Tl.push(o),o}function F0(r){for(let e=Tl.length-1;e>=0;e--){let t=Tl[e];t.t+=r/3.2;let n=t.curve.getPoint(Ll(Math.min(1,t.t)));t.core.position.copy(n),t.hist.unshift(n.clone()),t.hist.length=Math.min(t.hist.length,48),t.trail.forEach((i,s)=>{let a=t.hist[s*2];a&&i.position.copy(a)}),t.t>1.15&&(ct.scene.remove(t.g),Tl.splice(e,1))}}var H0=new As,Tn={t:0,n:0,level:0};function Mf(){requestAnimationFrame(Mf);let r=H0.getDelta(),e=Math.min(r,Zi.has("test")?.6:.1);if(Ge.T+=e,Kn==="landing"||Kn==="loading"||Kn==="warp"){Dr.update(e),ct.renderer.render(Dr.scene,Dr.cam);return}if(Ve){if(Tn.level<2&&!Zi.has("test")&&(Tn.t+=r,Tn.n++,Tn.t>4&&(Tn.n/Tn.t<38&&(Tn.level++,ct.degrade(Tn.level),Dl()),Tn.t=0,Tn.n=0)),x0(e),Ve.update(e,Ge.T),F0(e),m0(e),ct.update(e),Pa<gu&&(Pa=Math.min(gu,Pa+M0*e),fe("#tClock").textContent="0:"+String(Math.floor(Pa)).padStart(2,"0")),ks){let t=Pl.getLength(),n=Vi;vu(Math.min(xf,Vi+e*12/t*(Vi<.05?.5:Vi>.92?.55:1))),Ve.truck.userData.dist=(Ve.truck.userData.dist||0)+(Vi-n)*t}if(Ve.truck.tick(Ge.T,!!ks,Ve.truck.userData.dist||0),ks||Ve.truck.setLights(ct.lamps()>.5),mi){let t=mi;t.hose&&t.hoseT>0&&t.hoseT<1&&(t.hoseT=Math.min(1,t.hoseT+e/4.5),t.hose.geometry.setDrawRange(0,Math.floor(t.hoseLen*t.hoseT/3)*3)),di!==Wi&&(di=Wi>di?Math.min(Wi,di+e/4.5):Wi,ji.fix(Ll(di))),ji.update&&ji.update(e,Ge.T,di),t.pins.forEach((n,i)=>{let s=n.userData;s.cur+=(s.on-s.cur)*(1-Math.exp(-e*3)),s.beam.material.opacity=s.cur*(.22+Math.sin(Ge.T*3+i)*.05),s.orb.material.opacity=s.cur*.9,s.beam.scale.y=Math.max(.01,s.cur),s.beam.position.y=20*s.cur})}ct.render()}}window.__demo={goScene:r=>gi(r),get W(){return Ve},setAuto:r=>{Xi=r}};Mf();
/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
