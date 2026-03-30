(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const REVISION="183",MOUSE={ROTATE:0,DOLLY:1,PAN:2},TOUCH={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},CullFaceNone=0,CullFaceBack=1,CullFaceFront=2,PCFShadowMap=1,PCFSoftShadowMap=2,VSMShadowMap=3,FrontSide=0,BackSide=1,DoubleSide=2,NoBlending=0,NormalBlending=1,AdditiveBlending=2,SubtractiveBlending=3,MultiplyBlending=4,CustomBlending=5,AddEquation=100,SubtractEquation=101,ReverseSubtractEquation=102,MinEquation=103,MaxEquation=104,ZeroFactor=200,OneFactor=201,SrcColorFactor=202,OneMinusSrcColorFactor=203,SrcAlphaFactor=204,OneMinusSrcAlphaFactor=205,DstAlphaFactor=206,OneMinusDstAlphaFactor=207,DstColorFactor=208,OneMinusDstColorFactor=209,SrcAlphaSaturateFactor=210,ConstantColorFactor=211,OneMinusConstantColorFactor=212,ConstantAlphaFactor=213,OneMinusConstantAlphaFactor=214,NeverDepth=0,AlwaysDepth=1,LessDepth=2,LessEqualDepth=3,EqualDepth=4,GreaterEqualDepth=5,GreaterDepth=6,NotEqualDepth=7,MultiplyOperation=0,MixOperation=1,AddOperation=2,NoToneMapping=0,LinearToneMapping=1,ReinhardToneMapping=2,CineonToneMapping=3,ACESFilmicToneMapping=4,CustomToneMapping=5,AgXToneMapping=6,NeutralToneMapping=7,UVMapping=300,CubeReflectionMapping=301,CubeRefractionMapping=302,EquirectangularReflectionMapping=303,EquirectangularRefractionMapping=304,CubeUVReflectionMapping=306,RepeatWrapping=1e3,ClampToEdgeWrapping=1001,MirroredRepeatWrapping=1002,NearestFilter=1003,NearestMipmapNearestFilter=1004,NearestMipmapLinearFilter=1005,LinearFilter=1006,LinearMipmapNearestFilter=1007,LinearMipmapLinearFilter=1008,UnsignedByteType=1009,ByteType=1010,ShortType=1011,UnsignedShortType=1012,IntType=1013,UnsignedIntType=1014,FloatType=1015,HalfFloatType=1016,UnsignedShort4444Type=1017,UnsignedShort5551Type=1018,UnsignedInt248Type=1020,UnsignedInt5999Type=35902,UnsignedInt101111Type=35899,AlphaFormat=1021,RGBFormat=1022,RGBAFormat=1023,DepthFormat=1026,DepthStencilFormat=1027,RedFormat=1028,RedIntegerFormat=1029,RGFormat=1030,RGIntegerFormat=1031,RGBAIntegerFormat=1033,RGB_S3TC_DXT1_Format=33776,RGBA_S3TC_DXT1_Format=33777,RGBA_S3TC_DXT3_Format=33778,RGBA_S3TC_DXT5_Format=33779,RGB_PVRTC_4BPPV1_Format=35840,RGB_PVRTC_2BPPV1_Format=35841,RGBA_PVRTC_4BPPV1_Format=35842,RGBA_PVRTC_2BPPV1_Format=35843,RGB_ETC1_Format=36196,RGB_ETC2_Format=37492,RGBA_ETC2_EAC_Format=37496,R11_EAC_Format=37488,SIGNED_R11_EAC_Format=37489,RG11_EAC_Format=37490,SIGNED_RG11_EAC_Format=37491,RGBA_ASTC_4x4_Format=37808,RGBA_ASTC_5x4_Format=37809,RGBA_ASTC_5x5_Format=37810,RGBA_ASTC_6x5_Format=37811,RGBA_ASTC_6x6_Format=37812,RGBA_ASTC_8x5_Format=37813,RGBA_ASTC_8x6_Format=37814,RGBA_ASTC_8x8_Format=37815,RGBA_ASTC_10x5_Format=37816,RGBA_ASTC_10x6_Format=37817,RGBA_ASTC_10x8_Format=37818,RGBA_ASTC_10x10_Format=37819,RGBA_ASTC_12x10_Format=37820,RGBA_ASTC_12x12_Format=37821,RGBA_BPTC_Format=36492,RGB_BPTC_SIGNED_Format=36494,RGB_BPTC_UNSIGNED_Format=36495,RED_RGTC1_Format=36283,SIGNED_RED_RGTC1_Format=36284,RED_GREEN_RGTC2_Format=36285,SIGNED_RED_GREEN_RGTC2_Format=36286,BasicDepthPacking=3200,TangentSpaceNormalMap=0,ObjectSpaceNormalMap=1,NoColorSpace="",SRGBColorSpace="srgb",LinearSRGBColorSpace="srgb-linear",LinearTransfer="linear",SRGBTransfer="srgb",KeepStencilOp=7680,AlwaysStencilFunc=519,NeverCompare=512,LessCompare=513,EqualCompare=514,LessEqualCompare=515,GreaterCompare=516,NotEqualCompare=517,GreaterEqualCompare=518,AlwaysCompare=519,StaticDrawUsage=35044,GLSL3="300 es",WebGLCoordinateSystem=2e3,WebGPUCoordinateSystem=2001;function arrayNeedsUint32(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function createElementNS(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function createCanvasElement(){const n=createElementNS("canvas");return n.style.display="block",n}const _cache={};function log(...n){const e="THREE."+n.shift();console.log(e,...n)}function enhanceLogMessage(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function warn(...n){n=enhanceLogMessage(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function error(...n){n=enhanceLogMessage(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function warnOnce(...n){const e=n.join(" ");e in _cache||(_cache[e]=!0,warn(...n))}function probeAsync(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const ReversedDepthFuncs={[NeverDepth]:AlwaysDepth,[LessDepth]:GreaterDepth,[EqualDepth]:NotEqualDepth,[LessEqualDepth]:GreaterEqualDepth,[AlwaysDepth]:NeverDepth,[GreaterDepth]:LessDepth,[NotEqualDepth]:EqualDepth,[GreaterEqualDepth]:LessEqualDepth};class EventDispatcher{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const _lut=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],DEG2RAD=Math.PI/180,RAD2DEG=180/Math.PI;function generateUUID(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(_lut[n&255]+_lut[n>>8&255]+_lut[n>>16&255]+_lut[n>>24&255]+"-"+_lut[e&255]+_lut[e>>8&255]+"-"+_lut[e>>16&15|64]+_lut[e>>24&255]+"-"+_lut[t&63|128]+_lut[t>>8&255]+"-"+_lut[t>>16&255]+_lut[t>>24&255]+_lut[i&255]+_lut[i>>8&255]+_lut[i>>16&255]+_lut[i>>24&255]).toLowerCase()}function clamp(n,e,t){return Math.max(e,Math.min(t,n))}function euclideanModulo(n,e){return(n%e+e)%e}function lerp(n,e,t){return(1-t)*n+t*e}function denormalize(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function normalize(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const MathUtils={DEG2RAD};class Vector2{constructor(e=0,t=0){Vector2.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=clamp(this.x,e.x,t.x),this.y=clamp(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=clamp(this.x,e,t),this.y=clamp(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(clamp(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(clamp(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Quaternion{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,l){let u=i[r+0],h=i[r+1],f=i[r+2],S=i[r+3],p=s[o+0],I=s[o+1],H=s[o+2],Y=s[o+3];if(S!==Y||u!==p||h!==I||f!==H){let R=u*p+h*I+f*H+S*Y;R<0&&(p=-p,I=-I,H=-H,Y=-Y,R=-R);let V=1-l;if(R<.9995){const be=Math.acos(R),ct=Math.sin(be);V=Math.sin(V*be)/ct,l=Math.sin(l*be)/ct,u=u*V+p*l,h=h*V+I*l,f=f*V+H*l,S=S*V+Y*l}else{u=u*V+p*l,h=h*V+I*l,f=f*V+H*l,S=S*V+Y*l;const be=1/Math.sqrt(u*u+h*h+f*f+S*S);u*=be,h*=be,f*=be,S*=be}}e[t]=u,e[t+1]=h,e[t+2]=f,e[t+3]=S}static multiplyQuaternionsFlat(e,t,i,r,s,o){const l=i[r],u=i[r+1],h=i[r+2],f=i[r+3],S=s[o],p=s[o+1],I=s[o+2],H=s[o+3];return e[t]=l*H+f*S+u*I-h*p,e[t+1]=u*H+f*p+h*S-l*I,e[t+2]=h*H+f*I+l*p-u*S,e[t+3]=f*H-l*S-u*p-h*I,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,l=Math.cos,u=Math.sin,h=l(i/2),f=l(r/2),S=l(s/2),p=u(i/2),I=u(r/2),H=u(s/2);switch(o){case"XYZ":this._x=p*f*S+h*I*H,this._y=h*I*S-p*f*H,this._z=h*f*H+p*I*S,this._w=h*f*S-p*I*H;break;case"YXZ":this._x=p*f*S+h*I*H,this._y=h*I*S-p*f*H,this._z=h*f*H-p*I*S,this._w=h*f*S+p*I*H;break;case"ZXY":this._x=p*f*S-h*I*H,this._y=h*I*S+p*f*H,this._z=h*f*H+p*I*S,this._w=h*f*S-p*I*H;break;case"ZYX":this._x=p*f*S-h*I*H,this._y=h*I*S+p*f*H,this._z=h*f*H-p*I*S,this._w=h*f*S+p*I*H;break;case"YZX":this._x=p*f*S+h*I*H,this._y=h*I*S+p*f*H,this._z=h*f*H-p*I*S,this._w=h*f*S-p*I*H;break;case"XZY":this._x=p*f*S-h*I*H,this._y=h*I*S-p*f*H,this._z=h*f*H+p*I*S,this._w=h*f*S+p*I*H;break;default:warn("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],l=t[5],u=t[9],h=t[2],f=t[6],S=t[10],p=i+l+S;if(p>0){const I=.5/Math.sqrt(p+1);this._w=.25/I,this._x=(f-u)*I,this._y=(s-h)*I,this._z=(o-r)*I}else if(i>l&&i>S){const I=2*Math.sqrt(1+i-l-S);this._w=(f-u)/I,this._x=.25*I,this._y=(r+o)/I,this._z=(s+h)/I}else if(l>S){const I=2*Math.sqrt(1+l-i-S);this._w=(s-h)/I,this._x=(r+o)/I,this._y=.25*I,this._z=(u+f)/I}else{const I=2*Math.sqrt(1+S-i-l);this._w=(o-r)/I,this._x=(s+h)/I,this._y=(u+f)/I,this._z=.25*I}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(clamp(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,l=t._x,u=t._y,h=t._z,f=t._w;return this._x=i*f+o*l+r*h-s*u,this._y=r*f+o*u+s*l-i*h,this._z=s*f+o*h+i*u-r*l,this._w=o*f-i*l-r*u-s*h,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,s=e._z,o=e._w,l=this.dot(e);l<0&&(i=-i,r=-r,s=-s,o=-o,l=-l);let u=1-t;if(l<.9995){const h=Math.acos(l),f=Math.sin(h);u=Math.sin(u*h)/f,t=Math.sin(t*h)/f,this._x=this._x*u+i*t,this._y=this._y*u+r*t,this._z=this._z*u+s*t,this._w=this._w*u+o*t,this._onChangeCallback()}else this._x=this._x*u+i*t,this._y=this._y*u+r*t,this._z=this._z*u+s*t,this._w=this._w*u+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Vector3{constructor(e=0,t=0,i=0){Vector3.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(_quaternion$5.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(_quaternion$5.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,l=e.z,u=e.w,h=2*(o*r-l*i),f=2*(l*t-s*r),S=2*(s*i-o*t);return this.x=t+u*h+o*S-l*f,this.y=i+u*f+l*h-s*S,this.z=r+u*S+s*f-o*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=clamp(this.x,e.x,t.x),this.y=clamp(this.y,e.y,t.y),this.z=clamp(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=clamp(this.x,e,t),this.y=clamp(this.y,e,t),this.z=clamp(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(clamp(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,l=t.y,u=t.z;return this.x=r*u-s*l,this.y=s*o-i*u,this.z=i*l-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return _vector$c.copy(this).projectOnVector(e),this.sub(_vector$c)}reflect(e){return this.sub(_vector$c.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(clamp(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const _vector$c=new Vector3,_quaternion$5=new Quaternion;class Matrix3{constructor(e,t,i,r,s,o,l,u,h){Matrix3.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,l,u,h)}set(e,t,i,r,s,o,l,u,h){const f=this.elements;return f[0]=e,f[1]=r,f[2]=l,f[3]=t,f[4]=s,f[5]=u,f[6]=i,f[7]=o,f[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],l=i[3],u=i[6],h=i[1],f=i[4],S=i[7],p=i[2],I=i[5],H=i[8],Y=r[0],R=r[3],V=r[6],be=r[1],ct=r[4],ot=r[7],dt=r[2],pt=r[5],St=r[8];return s[0]=o*Y+l*be+u*dt,s[3]=o*R+l*ct+u*pt,s[6]=o*V+l*ot+u*St,s[1]=h*Y+f*be+S*dt,s[4]=h*R+f*ct+S*pt,s[7]=h*V+f*ot+S*St,s[2]=p*Y+I*be+H*dt,s[5]=p*R+I*ct+H*pt,s[8]=p*V+I*ot+H*St,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],l=e[5],u=e[6],h=e[7],f=e[8];return t*o*f-t*l*h-i*s*f+i*l*u+r*s*h-r*o*u}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],l=e[5],u=e[6],h=e[7],f=e[8],S=f*o-l*h,p=l*u-f*s,I=h*s-o*u,H=t*S+i*p+r*I;if(H===0)return this.set(0,0,0,0,0,0,0,0,0);const Y=1/H;return e[0]=S*Y,e[1]=(r*h-f*i)*Y,e[2]=(l*i-r*o)*Y,e[3]=p*Y,e[4]=(f*t-r*u)*Y,e[5]=(r*s-l*t)*Y,e[6]=I*Y,e[7]=(i*u-h*t)*Y,e[8]=(o*t-i*s)*Y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,l){const u=Math.cos(s),h=Math.sin(s);return this.set(i*u,i*h,-i*(u*o+h*l)+o+e,-r*h,r*u,-r*(-h*o+u*l)+l+t,0,0,1),this}scale(e,t){return this.premultiply(_m3.makeScale(e,t)),this}rotate(e){return this.premultiply(_m3.makeRotation(-e)),this}translate(e,t){return this.premultiply(_m3.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const _m3=new Matrix3,LINEAR_REC709_TO_XYZ=new Matrix3().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),XYZ_TO_LINEAR_REC709=new Matrix3().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function createColorManagement(){const n={enabled:!0,workingColorSpace:LinearSRGBColorSpace,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===SRGBTransfer&&(r.r=SRGBToLinear(r.r),r.g=SRGBToLinear(r.g),r.b=SRGBToLinear(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===SRGBTransfer&&(r.r=LinearToSRGB(r.r),r.g=LinearToSRGB(r.g),r.b=LinearToSRGB(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===NoColorSpace?LinearTransfer:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return warnOnce("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return warnOnce("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[LinearSRGBColorSpace]:{primaries:e,whitePoint:i,transfer:LinearTransfer,toXYZ:LINEAR_REC709_TO_XYZ,fromXYZ:XYZ_TO_LINEAR_REC709,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:SRGBColorSpace},outputColorSpaceConfig:{drawingBufferColorSpace:SRGBColorSpace}},[SRGBColorSpace]:{primaries:e,whitePoint:i,transfer:SRGBTransfer,toXYZ:LINEAR_REC709_TO_XYZ,fromXYZ:XYZ_TO_LINEAR_REC709,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:SRGBColorSpace}}}),n}const ColorManagement=createColorManagement();function SRGBToLinear(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function LinearToSRGB(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let _canvas;class ImageUtils{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{_canvas===void 0&&(_canvas=createElementNS("canvas")),_canvas.width=e.width,_canvas.height=e.height;const r=_canvas.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=_canvas}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=createElementNS("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=SRGBToLinear(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(SRGBToLinear(t[i]/255)*255):t[i]=SRGBToLinear(t[i]);return{data:t,width:e.width,height:e.height}}else return warn("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let _sourceId=0;class Source{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_sourceId++}),this.uuid=generateUUID(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,l=r.length;o<l;o++)r[o].isDataTexture?s.push(serializeImage(r[o].image)):s.push(serializeImage(r[o]))}else s=serializeImage(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function serializeImage(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?ImageUtils.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(warn("Texture: Unable to serialize Texture."),{})}let _textureId=0;const _tempVec3=new Vector3;class Texture extends EventDispatcher{constructor(e=Texture.DEFAULT_IMAGE,t=Texture.DEFAULT_MAPPING,i=ClampToEdgeWrapping,r=ClampToEdgeWrapping,s=LinearFilter,o=LinearMipmapLinearFilter,l=RGBAFormat,u=UnsignedByteType,h=Texture.DEFAULT_ANISOTROPY,f=NoColorSpace){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_textureId++}),this.uuid=generateUUID(),this.name="",this.source=new Source(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=h,this.format=l,this.internalFormat=null,this.type=u,this.offset=new Vector2(0,0),this.repeat=new Vector2(1,1),this.center=new Vector2(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Matrix3,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(_tempVec3).x}get height(){return this.source.getSize(_tempVec3).y}get depth(){return this.source.getSize(_tempVec3).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){warn(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){warn(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==UVMapping)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case RepeatWrapping:e.x=e.x-Math.floor(e.x);break;case ClampToEdgeWrapping:e.x=e.x<0?0:1;break;case MirroredRepeatWrapping:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case RepeatWrapping:e.y=e.y-Math.floor(e.y);break;case ClampToEdgeWrapping:e.y=e.y<0?0:1;break;case MirroredRepeatWrapping:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Texture.DEFAULT_IMAGE=null;Texture.DEFAULT_MAPPING=UVMapping;Texture.DEFAULT_ANISOTROPY=1;class Vector4{constructor(e=0,t=0,i=0,r=1){Vector4.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const u=e.elements,h=u[0],f=u[4],S=u[8],p=u[1],I=u[5],H=u[9],Y=u[2],R=u[6],V=u[10];if(Math.abs(f-p)<.01&&Math.abs(S-Y)<.01&&Math.abs(H-R)<.01){if(Math.abs(f+p)<.1&&Math.abs(S+Y)<.1&&Math.abs(H+R)<.1&&Math.abs(h+I+V-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const ct=(h+1)/2,ot=(I+1)/2,dt=(V+1)/2,pt=(f+p)/4,St=(S+Y)/4,at=(H+R)/4;return ct>ot&&ct>dt?ct<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(ct),r=pt/i,s=St/i):ot>dt?ot<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(ot),i=pt/r,s=at/r):dt<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(dt),i=St/s,r=at/s),this.set(i,r,s,t),this}let be=Math.sqrt((R-H)*(R-H)+(S-Y)*(S-Y)+(p-f)*(p-f));return Math.abs(be)<.001&&(be=1),this.x=(R-H)/be,this.y=(S-Y)/be,this.z=(p-f)/be,this.w=Math.acos((h+I+V-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=clamp(this.x,e.x,t.x),this.y=clamp(this.y,e.y,t.y),this.z=clamp(this.z,e.z,t.z),this.w=clamp(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=clamp(this.x,e,t),this.y=clamp(this.y,e,t),this.z=clamp(this.z,e,t),this.w=clamp(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(clamp(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class RenderTarget extends EventDispatcher{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:LinearFilter,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Vector4(0,0,e,t),this.scissorTest=!1,this.viewport=new Vector4(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:i.depth},s=new Texture(r),o=i.count;for(let l=0;l<o;l++)this.textures[l]=s.clone(),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:LinearFilter,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Source(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class WebGLRenderTarget extends RenderTarget{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class DataArrayTexture extends Texture{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=NearestFilter,this.minFilter=NearestFilter,this.wrapR=ClampToEdgeWrapping,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Data3DTexture extends Texture{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=NearestFilter,this.minFilter=NearestFilter,this.wrapR=ClampToEdgeWrapping,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Matrix4{constructor(e,t,i,r,s,o,l,u,h,f,S,p,I,H,Y,R){Matrix4.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,l,u,h,f,S,p,I,H,Y,R)}set(e,t,i,r,s,o,l,u,h,f,S,p,I,H,Y,R){const V=this.elements;return V[0]=e,V[4]=t,V[8]=i,V[12]=r,V[1]=s,V[5]=o,V[9]=l,V[13]=u,V[2]=h,V[6]=f,V[10]=S,V[14]=p,V[3]=I,V[7]=H,V[11]=Y,V[15]=R,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Matrix4().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,r=1/_v1$7.setFromMatrixColumn(e,0).length(),s=1/_v1$7.setFromMatrixColumn(e,1).length(),o=1/_v1$7.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),l=Math.sin(i),u=Math.cos(r),h=Math.sin(r),f=Math.cos(s),S=Math.sin(s);if(e.order==="XYZ"){const p=o*f,I=o*S,H=l*f,Y=l*S;t[0]=u*f,t[4]=-u*S,t[8]=h,t[1]=I+H*h,t[5]=p-Y*h,t[9]=-l*u,t[2]=Y-p*h,t[6]=H+I*h,t[10]=o*u}else if(e.order==="YXZ"){const p=u*f,I=u*S,H=h*f,Y=h*S;t[0]=p+Y*l,t[4]=H*l-I,t[8]=o*h,t[1]=o*S,t[5]=o*f,t[9]=-l,t[2]=I*l-H,t[6]=Y+p*l,t[10]=o*u}else if(e.order==="ZXY"){const p=u*f,I=u*S,H=h*f,Y=h*S;t[0]=p-Y*l,t[4]=-o*S,t[8]=H+I*l,t[1]=I+H*l,t[5]=o*f,t[9]=Y-p*l,t[2]=-o*h,t[6]=l,t[10]=o*u}else if(e.order==="ZYX"){const p=o*f,I=o*S,H=l*f,Y=l*S;t[0]=u*f,t[4]=H*h-I,t[8]=p*h+Y,t[1]=u*S,t[5]=Y*h+p,t[9]=I*h-H,t[2]=-h,t[6]=l*u,t[10]=o*u}else if(e.order==="YZX"){const p=o*u,I=o*h,H=l*u,Y=l*h;t[0]=u*f,t[4]=Y-p*S,t[8]=H*S+I,t[1]=S,t[5]=o*f,t[9]=-l*f,t[2]=-h*f,t[6]=I*S+H,t[10]=p-Y*S}else if(e.order==="XZY"){const p=o*u,I=o*h,H=l*u,Y=l*h;t[0]=u*f,t[4]=-S,t[8]=h*f,t[1]=p*S+Y,t[5]=o*f,t[9]=I*S-H,t[2]=H*S-I,t[6]=l*f,t[10]=Y*S+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(_zero,e,_one)}lookAt(e,t,i){const r=this.elements;return _z.subVectors(e,t),_z.lengthSq()===0&&(_z.z=1),_z.normalize(),_x.crossVectors(i,_z),_x.lengthSq()===0&&(Math.abs(i.z)===1?_z.x+=1e-4:_z.z+=1e-4,_z.normalize(),_x.crossVectors(i,_z)),_x.normalize(),_y.crossVectors(_z,_x),r[0]=_x.x,r[4]=_y.x,r[8]=_z.x,r[1]=_x.y,r[5]=_y.y,r[9]=_z.y,r[2]=_x.z,r[6]=_y.z,r[10]=_z.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],l=i[4],u=i[8],h=i[12],f=i[1],S=i[5],p=i[9],I=i[13],H=i[2],Y=i[6],R=i[10],V=i[14],be=i[3],ct=i[7],ot=i[11],dt=i[15],pt=r[0],St=r[4],at=r[8],ut=r[12],Gt=r[1],xt=r[5],Lt=r[9],Rt=r[13],Nt=r[2],Dt=r[6],Ut=r[10],Ct=r[14],Ot=r[3],qt=r[7],Zt=r[11],Qt=r[15];return s[0]=o*pt+l*Gt+u*Nt+h*Ot,s[4]=o*St+l*xt+u*Dt+h*qt,s[8]=o*at+l*Lt+u*Ut+h*Zt,s[12]=o*ut+l*Rt+u*Ct+h*Qt,s[1]=f*pt+S*Gt+p*Nt+I*Ot,s[5]=f*St+S*xt+p*Dt+I*qt,s[9]=f*at+S*Lt+p*Ut+I*Zt,s[13]=f*ut+S*Rt+p*Ct+I*Qt,s[2]=H*pt+Y*Gt+R*Nt+V*Ot,s[6]=H*St+Y*xt+R*Dt+V*qt,s[10]=H*at+Y*Lt+R*Ut+V*Zt,s[14]=H*ut+Y*Rt+R*Ct+V*Qt,s[3]=be*pt+ct*Gt+ot*Nt+dt*Ot,s[7]=be*St+ct*xt+ot*Dt+dt*qt,s[11]=be*at+ct*Lt+ot*Ut+dt*Zt,s[15]=be*ut+ct*Rt+ot*Ct+dt*Qt,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],l=e[5],u=e[9],h=e[13],f=e[2],S=e[6],p=e[10],I=e[14],H=e[3],Y=e[7],R=e[11],V=e[15],be=u*I-h*p,ct=l*I-h*S,ot=l*p-u*S,dt=o*I-h*f,pt=o*p-u*f,St=o*S-l*f;return t*(Y*be-R*ct+V*ot)-i*(H*be-R*dt+V*pt)+r*(H*ct-Y*dt+V*St)-s*(H*ot-Y*pt+R*St)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],l=e[5],u=e[6],h=e[7],f=e[8],S=e[9],p=e[10],I=e[11],H=e[12],Y=e[13],R=e[14],V=e[15],be=t*l-i*o,ct=t*u-r*o,ot=t*h-s*o,dt=i*u-r*l,pt=i*h-s*l,St=r*h-s*u,at=f*Y-S*H,ut=f*R-p*H,Gt=f*V-I*H,xt=S*R-p*Y,Lt=S*V-I*Y,Rt=p*V-I*R,Nt=be*Rt-ct*Lt+ot*xt+dt*Gt-pt*ut+St*at;if(Nt===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Dt=1/Nt;return e[0]=(l*Rt-u*Lt+h*xt)*Dt,e[1]=(r*Lt-i*Rt-s*xt)*Dt,e[2]=(Y*St-R*pt+V*dt)*Dt,e[3]=(p*pt-S*St-I*dt)*Dt,e[4]=(u*Gt-o*Rt-h*ut)*Dt,e[5]=(t*Rt-r*Gt+s*ut)*Dt,e[6]=(R*ot-H*St-V*ct)*Dt,e[7]=(f*St-p*ot+I*ct)*Dt,e[8]=(o*Lt-l*Gt+h*at)*Dt,e[9]=(i*Gt-t*Lt-s*at)*Dt,e[10]=(H*pt-Y*ot+V*be)*Dt,e[11]=(S*ot-f*pt-I*be)*Dt,e[12]=(l*ut-o*xt-u*at)*Dt,e[13]=(t*xt-i*ut+r*at)*Dt,e[14]=(Y*ct-H*dt-R*be)*Dt,e[15]=(f*dt-S*ct+p*be)*Dt,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,l=e.y,u=e.z,h=s*o,f=s*l;return this.set(h*o+i,h*l-r*u,h*u+r*l,0,h*l+r*u,f*l+i,f*u-r*o,0,h*u-r*l,f*u+r*o,s*u*u+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,l=t._z,u=t._w,h=s+s,f=o+o,S=l+l,p=s*h,I=s*f,H=s*S,Y=o*f,R=o*S,V=l*S,be=u*h,ct=u*f,ot=u*S,dt=i.x,pt=i.y,St=i.z;return r[0]=(1-(Y+V))*dt,r[1]=(I+ot)*dt,r[2]=(H-ct)*dt,r[3]=0,r[4]=(I-ot)*pt,r[5]=(1-(p+V))*pt,r[6]=(R+be)*pt,r[7]=0,r[8]=(H+ct)*St,r[9]=(R-be)*St,r[10]=(1-(p+Y))*St,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinant();if(s===0)return i.set(1,1,1),t.identity(),this;let o=_v1$7.set(r[0],r[1],r[2]).length();const l=_v1$7.set(r[4],r[5],r[6]).length(),u=_v1$7.set(r[8],r[9],r[10]).length();s<0&&(o=-o),_m1$2.copy(this);const h=1/o,f=1/l,S=1/u;return _m1$2.elements[0]*=h,_m1$2.elements[1]*=h,_m1$2.elements[2]*=h,_m1$2.elements[4]*=f,_m1$2.elements[5]*=f,_m1$2.elements[6]*=f,_m1$2.elements[8]*=S,_m1$2.elements[9]*=S,_m1$2.elements[10]*=S,t.setFromRotationMatrix(_m1$2),i.x=o,i.y=l,i.z=u,this}makePerspective(e,t,i,r,s,o,l=WebGLCoordinateSystem,u=!1){const h=this.elements,f=2*s/(t-e),S=2*s/(i-r),p=(t+e)/(t-e),I=(i+r)/(i-r);let H,Y;if(u)H=s/(o-s),Y=o*s/(o-s);else if(l===WebGLCoordinateSystem)H=-(o+s)/(o-s),Y=-2*o*s/(o-s);else if(l===WebGPUCoordinateSystem)H=-o/(o-s),Y=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return h[0]=f,h[4]=0,h[8]=p,h[12]=0,h[1]=0,h[5]=S,h[9]=I,h[13]=0,h[2]=0,h[6]=0,h[10]=H,h[14]=Y,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,i,r,s,o,l=WebGLCoordinateSystem,u=!1){const h=this.elements,f=2/(t-e),S=2/(i-r),p=-(t+e)/(t-e),I=-(i+r)/(i-r);let H,Y;if(u)H=1/(o-s),Y=o/(o-s);else if(l===WebGLCoordinateSystem)H=-2/(o-s),Y=-(o+s)/(o-s);else if(l===WebGPUCoordinateSystem)H=-1/(o-s),Y=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return h[0]=f,h[4]=0,h[8]=0,h[12]=p,h[1]=0,h[5]=S,h[9]=0,h[13]=I,h[2]=0,h[6]=0,h[10]=H,h[14]=Y,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const _v1$7=new Vector3,_m1$2=new Matrix4,_zero=new Vector3(0,0,0),_one=new Vector3(1,1,1),_x=new Vector3,_y=new Vector3,_z=new Vector3,_matrix$2=new Matrix4,_quaternion$4=new Quaternion;class Euler{constructor(e=0,t=0,i=0,r=Euler.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],l=r[8],u=r[1],h=r[5],f=r[9],S=r[2],p=r[6],I=r[10];switch(t){case"XYZ":this._y=Math.asin(clamp(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,I),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(p,h),this._z=0);break;case"YXZ":this._x=Math.asin(-clamp(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(l,I),this._z=Math.atan2(u,h)):(this._y=Math.atan2(-S,s),this._z=0);break;case"ZXY":this._x=Math.asin(clamp(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-S,I),this._z=Math.atan2(-o,h)):(this._y=0,this._z=Math.atan2(u,s));break;case"ZYX":this._y=Math.asin(-clamp(S,-1,1)),Math.abs(S)<.9999999?(this._x=Math.atan2(p,I),this._z=Math.atan2(u,s)):(this._x=0,this._z=Math.atan2(-o,h));break;case"YZX":this._z=Math.asin(clamp(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-f,h),this._y=Math.atan2(-S,s)):(this._x=0,this._y=Math.atan2(l,I));break;case"XZY":this._z=Math.asin(-clamp(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,h),this._y=Math.atan2(l,s)):(this._x=Math.atan2(-f,I),this._y=0);break;default:warn("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return _matrix$2.makeRotationFromQuaternion(e),this.setFromRotationMatrix(_matrix$2,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return _quaternion$4.setFromEuler(this),this.setFromQuaternion(_quaternion$4,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Euler.DEFAULT_ORDER="XYZ";class Layers{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let _object3DId=0;const _v1$6=new Vector3,_q1=new Quaternion,_m1$1$1=new Matrix4,_target=new Vector3,_position$4=new Vector3,_scale$3=new Vector3,_quaternion$3=new Quaternion,_xAxis=new Vector3(1,0,0),_yAxis=new Vector3(0,1,0),_zAxis=new Vector3(0,0,1),_addedEvent={type:"added"},_removedEvent={type:"removed"},_childaddedEvent={type:"childadded",child:null},_childremovedEvent={type:"childremoved",child:null};class Object3D extends EventDispatcher{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_object3DId++}),this.uuid=generateUUID(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Object3D.DEFAULT_UP.clone();const e=new Vector3,t=new Euler,i=new Quaternion,r=new Vector3(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Matrix4},normalMatrix:{value:new Matrix3}}),this.matrix=new Matrix4,this.matrixWorld=new Matrix4,this.matrixAutoUpdate=Object3D.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Object3D.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Layers,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return _q1.setFromAxisAngle(e,t),this.quaternion.multiply(_q1),this}rotateOnWorldAxis(e,t){return _q1.setFromAxisAngle(e,t),this.quaternion.premultiply(_q1),this}rotateX(e){return this.rotateOnAxis(_xAxis,e)}rotateY(e){return this.rotateOnAxis(_yAxis,e)}rotateZ(e){return this.rotateOnAxis(_zAxis,e)}translateOnAxis(e,t){return _v1$6.copy(e).applyQuaternion(this.quaternion),this.position.add(_v1$6.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(_xAxis,e)}translateY(e){return this.translateOnAxis(_yAxis,e)}translateZ(e){return this.translateOnAxis(_zAxis,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_m1$1$1.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?_target.copy(e):_target.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),_position$4.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_m1$1$1.lookAt(_position$4,_target,this.up):_m1$1$1.lookAt(_target,_position$4,this.up),this.quaternion.setFromRotationMatrix(_m1$1$1),r&&(_m1$1$1.extractRotation(r.matrixWorld),_q1.setFromRotationMatrix(_m1$1$1),this.quaternion.premultiply(_q1.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(error("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(_addedEvent),_childaddedEvent.child=e,this.dispatchEvent(_childaddedEvent),_childaddedEvent.child=null):error("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(_removedEvent),_childremovedEvent.child=e,this.dispatchEvent(_childremovedEvent),_childremovedEvent.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),_m1$1$1.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_m1$1$1.multiply(e.parent.matrixWorld)),e.applyMatrix4(_m1$1$1),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(_addedEvent),_childaddedEvent.child=e,this.dispatchEvent(_childaddedEvent),_childaddedEvent.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_position$4,e,_scale$3),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_position$4,_quaternion$3,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*r,s[13]+=i-s[1]*t-s[5]*i-s[9]*r,s[14]+=r-s[2]*t-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(l=>({...l})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(l,u){return l[u.uuid]===void 0&&(l[u.uuid]=u.toJSON(e)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const u=l.shapes;if(Array.isArray(u))for(let h=0,f=u.length;h<f;h++){const S=u[h];s(e.shapes,S)}else s(e.shapes,u)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let u=0,h=this.material.length;u<h;u++)l.push(s(e.materials,this.material[u]));r.material=l}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let l=0;l<this.children.length;l++)r.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let l=0;l<this.animations.length;l++){const u=this.animations[l];r.animations.push(s(e.animations,u))}}if(t){const l=o(e.geometries),u=o(e.materials),h=o(e.textures),f=o(e.images),S=o(e.shapes),p=o(e.skeletons),I=o(e.animations),H=o(e.nodes);l.length>0&&(i.geometries=l),u.length>0&&(i.materials=u),h.length>0&&(i.textures=h),f.length>0&&(i.images=f),S.length>0&&(i.shapes=S),p.length>0&&(i.skeletons=p),I.length>0&&(i.animations=I),H.length>0&&(i.nodes=H)}return i.object=r,i;function o(l){const u=[];for(const h in l){const f=l[h];delete f.metadata,u.push(f)}return u}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Object3D.DEFAULT_UP=new Vector3(0,1,0);Object3D.DEFAULT_MATRIX_AUTO_UPDATE=!0;Object3D.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Group extends Object3D{constructor(){super(),this.isGroup=!0,this.type="Group"}}const _moveEvent={type:"move"};class WebXRController{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Group,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Group,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Vector3,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Vector3),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Group,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Vector3,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Vector3),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const l=this._targetRay,u=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){o=!0;for(const Y of e.hand.values()){const R=t.getJointPose(Y,i),V=this._getHandJoint(h,Y);R!==null&&(V.matrix.fromArray(R.transform.matrix),V.matrix.decompose(V.position,V.rotation,V.scale),V.matrixWorldNeedsUpdate=!0,V.jointRadius=R.radius),V.visible=R!==null}const f=h.joints["index-finger-tip"],S=h.joints["thumb-tip"],p=f.position.distanceTo(S.position),I=.02,H=.005;h.inputState.pinching&&p>I+H?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&p<=I-H&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else u!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(u.matrix.fromArray(s.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,s.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(s.linearVelocity)):u.hasLinearVelocity=!1,s.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(s.angularVelocity)):u.hasAngularVelocity=!1));l!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(_moveEvent)))}return l!==null&&(l.visible=r!==null),u!==null&&(u.visible=s!==null),h!==null&&(h.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Group;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const _colorKeywords={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_hslA={h:0,s:0,l:0},_hslB={h:0,s:0,l:0};function hue2rgb(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}let Color$1=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=SRGBColorSpace){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ColorManagement.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=ColorManagement.workingColorSpace){return this.r=e,this.g=t,this.b=i,ColorManagement.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=ColorManagement.workingColorSpace){if(e=euclideanModulo(e,1),t=clamp(t,0,1),i=clamp(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=hue2rgb(o,s,e+1/3),this.g=hue2rgb(o,s,e),this.b=hue2rgb(o,s,e-1/3)}return ColorManagement.colorSpaceToWorking(this,r),this}setStyle(e,t=SRGBColorSpace){function i(s){s!==void 0&&parseFloat(s)<1&&warn("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],l=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:warn("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);warn("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=SRGBColorSpace){const i=_colorKeywords[e.toLowerCase()];return i!==void 0?this.setHex(i,t):warn("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=SRGBToLinear(e.r),this.g=SRGBToLinear(e.g),this.b=SRGBToLinear(e.b),this}copyLinearToSRGB(e){return this.r=LinearToSRGB(e.r),this.g=LinearToSRGB(e.g),this.b=LinearToSRGB(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=SRGBColorSpace){return ColorManagement.workingToColorSpace(_color.copy(this),e),Math.round(clamp(_color.r*255,0,255))*65536+Math.round(clamp(_color.g*255,0,255))*256+Math.round(clamp(_color.b*255,0,255))}getHexString(e=SRGBColorSpace){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ColorManagement.workingColorSpace){ColorManagement.workingToColorSpace(_color.copy(this),t);const i=_color.r,r=_color.g,s=_color.b,o=Math.max(i,r,s),l=Math.min(i,r,s);let u,h;const f=(l+o)/2;if(l===o)u=0,h=0;else{const S=o-l;switch(h=f<=.5?S/(o+l):S/(2-o-l),o){case i:u=(r-s)/S+(r<s?6:0);break;case r:u=(s-i)/S+2;break;case s:u=(i-r)/S+4;break}u/=6}return e.h=u,e.s=h,e.l=f,e}getRGB(e,t=ColorManagement.workingColorSpace){return ColorManagement.workingToColorSpace(_color.copy(this),t),e.r=_color.r,e.g=_color.g,e.b=_color.b,e}getStyle(e=SRGBColorSpace){ColorManagement.workingToColorSpace(_color.copy(this),e);const t=_color.r,i=_color.g,r=_color.b;return e!==SRGBColorSpace?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(_hslA),this.setHSL(_hslA.h+e,_hslA.s+t,_hslA.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(_hslA),e.getHSL(_hslB);const i=lerp(_hslA.h,_hslB.h,t),r=lerp(_hslA.s,_hslB.s,t),s=lerp(_hslA.l,_hslB.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};const _color=new Color$1;Color$1.NAMES=_colorKeywords;class Scene extends Object3D{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Euler,this.environmentIntensity=1,this.environmentRotation=new Euler,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const _v0$2=new Vector3,_v1$5=new Vector3,_v2$4=new Vector3,_v3$2=new Vector3,_vab=new Vector3,_vac=new Vector3,_vbc=new Vector3,_vap=new Vector3,_vbp=new Vector3,_vcp=new Vector3,_v40=new Vector4,_v41=new Vector4,_v42=new Vector4;class Triangle{constructor(e=new Vector3,t=new Vector3,i=new Vector3){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),_v0$2.subVectors(e,t),r.cross(_v0$2);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){_v0$2.subVectors(r,t),_v1$5.subVectors(i,t),_v2$4.subVectors(e,t);const o=_v0$2.dot(_v0$2),l=_v0$2.dot(_v1$5),u=_v0$2.dot(_v2$4),h=_v1$5.dot(_v1$5),f=_v1$5.dot(_v2$4),S=o*h-l*l;if(S===0)return s.set(0,0,0),null;const p=1/S,I=(h*u-l*f)*p,H=(o*f-l*u)*p;return s.set(1-I-H,H,I)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,_v3$2)===null?!1:_v3$2.x>=0&&_v3$2.y>=0&&_v3$2.x+_v3$2.y<=1}static getInterpolation(e,t,i,r,s,o,l,u){return this.getBarycoord(e,t,i,r,_v3$2)===null?(u.x=0,u.y=0,"z"in u&&(u.z=0),"w"in u&&(u.w=0),null):(u.setScalar(0),u.addScaledVector(s,_v3$2.x),u.addScaledVector(o,_v3$2.y),u.addScaledVector(l,_v3$2.z),u)}static getInterpolatedAttribute(e,t,i,r,s,o){return _v40.setScalar(0),_v41.setScalar(0),_v42.setScalar(0),_v40.fromBufferAttribute(e,t),_v41.fromBufferAttribute(e,i),_v42.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(_v40,s.x),o.addScaledVector(_v41,s.y),o.addScaledVector(_v42,s.z),o}static isFrontFacing(e,t,i,r){return _v0$2.subVectors(i,t),_v1$5.subVectors(e,t),_v0$2.cross(_v1$5).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return _v0$2.subVectors(this.c,this.b),_v1$5.subVectors(this.a,this.b),_v0$2.cross(_v1$5).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Triangle.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Triangle.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return Triangle.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Triangle.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Triangle.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,l;_vab.subVectors(r,i),_vac.subVectors(s,i),_vap.subVectors(e,i);const u=_vab.dot(_vap),h=_vac.dot(_vap);if(u<=0&&h<=0)return t.copy(i);_vbp.subVectors(e,r);const f=_vab.dot(_vbp),S=_vac.dot(_vbp);if(f>=0&&S<=f)return t.copy(r);const p=u*S-f*h;if(p<=0&&u>=0&&f<=0)return o=u/(u-f),t.copy(i).addScaledVector(_vab,o);_vcp.subVectors(e,s);const I=_vab.dot(_vcp),H=_vac.dot(_vcp);if(H>=0&&I<=H)return t.copy(s);const Y=I*h-u*H;if(Y<=0&&h>=0&&H<=0)return l=h/(h-H),t.copy(i).addScaledVector(_vac,l);const R=f*H-I*S;if(R<=0&&S-f>=0&&I-H>=0)return _vbc.subVectors(s,r),l=(S-f)/(S-f+(I-H)),t.copy(r).addScaledVector(_vbc,l);const V=1/(R+Y+p);return o=Y*V,l=p*V,t.copy(i).addScaledVector(_vab,o).addScaledVector(_vac,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Box3{constructor(e=new Vector3(1/0,1/0,1/0),t=new Vector3(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(_vector$b.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(_vector$b.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=_vector$b.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,l=s.count;o<l;o++)e.isMesh===!0?e.getVertexPosition(o,_vector$b):_vector$b.fromBufferAttribute(s,o),_vector$b.applyMatrix4(e.matrixWorld),this.expandByPoint(_vector$b);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),_box$4.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),_box$4.copy(i.boundingBox)),_box$4.applyMatrix4(e.matrixWorld),this.union(_box$4)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,_vector$b),_vector$b.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_center),_extents.subVectors(this.max,_center),_v0$1.subVectors(e.a,_center),_v1$4.subVectors(e.b,_center),_v2$3.subVectors(e.c,_center),_f0.subVectors(_v1$4,_v0$1),_f1.subVectors(_v2$3,_v1$4),_f2.subVectors(_v0$1,_v2$3);let t=[0,-_f0.z,_f0.y,0,-_f1.z,_f1.y,0,-_f2.z,_f2.y,_f0.z,0,-_f0.x,_f1.z,0,-_f1.x,_f2.z,0,-_f2.x,-_f0.y,_f0.x,0,-_f1.y,_f1.x,0,-_f2.y,_f2.x,0];return!satForAxes(t,_v0$1,_v1$4,_v2$3,_extents)||(t=[1,0,0,0,1,0,0,0,1],!satForAxes(t,_v0$1,_v1$4,_v2$3,_extents))?!1:(_triangleNormal.crossVectors(_f0,_f1),t=[_triangleNormal.x,_triangleNormal.y,_triangleNormal.z],satForAxes(t,_v0$1,_v1$4,_v2$3,_extents))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,_vector$b).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(_vector$b).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(_points[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),_points[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),_points[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),_points[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),_points[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),_points[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),_points[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),_points[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(_points),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const _points=[new Vector3,new Vector3,new Vector3,new Vector3,new Vector3,new Vector3,new Vector3,new Vector3],_vector$b=new Vector3,_box$4=new Box3,_v0$1=new Vector3,_v1$4=new Vector3,_v2$3=new Vector3,_f0=new Vector3,_f1=new Vector3,_f2=new Vector3,_center=new Vector3,_extents=new Vector3,_triangleNormal=new Vector3,_testAxis=new Vector3;function satForAxes(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){_testAxis.fromArray(n,s);const l=r.x*Math.abs(_testAxis.x)+r.y*Math.abs(_testAxis.y)+r.z*Math.abs(_testAxis.z),u=e.dot(_testAxis),h=t.dot(_testAxis),f=i.dot(_testAxis);if(Math.max(-Math.max(u,h,f),Math.min(u,h,f))>l)return!1}return!0}const _vector$a=new Vector3,_vector2$1=new Vector2;let _id$2=0;class BufferAttribute{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:_id$2++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=StaticDrawUsage,this.updateRanges=[],this.gpuType=FloatType,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)_vector2$1.fromBufferAttribute(this,t),_vector2$1.applyMatrix3(e),this.setXY(t,_vector2$1.x,_vector2$1.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)_vector$a.fromBufferAttribute(this,t),_vector$a.applyMatrix3(e),this.setXYZ(t,_vector$a.x,_vector$a.y,_vector$a.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)_vector$a.fromBufferAttribute(this,t),_vector$a.applyMatrix4(e),this.setXYZ(t,_vector$a.x,_vector$a.y,_vector$a.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)_vector$a.fromBufferAttribute(this,t),_vector$a.applyNormalMatrix(e),this.setXYZ(t,_vector$a.x,_vector$a.y,_vector$a.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)_vector$a.fromBufferAttribute(this,t),_vector$a.transformDirection(e),this.setXYZ(t,_vector$a.x,_vector$a.y,_vector$a.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=denormalize(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=normalize(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=denormalize(t,this.array)),t}setX(e,t){return this.normalized&&(t=normalize(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=denormalize(t,this.array)),t}setY(e,t){return this.normalized&&(t=normalize(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=denormalize(t,this.array)),t}setZ(e,t){return this.normalized&&(t=normalize(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=denormalize(t,this.array)),t}setW(e,t){return this.normalized&&(t=normalize(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=normalize(t,this.array),i=normalize(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=normalize(t,this.array),i=normalize(i,this.array),r=normalize(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=normalize(t,this.array),i=normalize(i,this.array),r=normalize(r,this.array),s=normalize(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==StaticDrawUsage&&(e.usage=this.usage),e}}class Uint16BufferAttribute extends BufferAttribute{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Uint32BufferAttribute extends BufferAttribute{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Float32BufferAttribute extends BufferAttribute{constructor(e,t,i){super(new Float32Array(e),t,i)}}const _box$3=new Box3,_v1$3=new Vector3,_v2$2=new Vector3;class Sphere{constructor(e=new Vector3,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):_box$3.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;_v1$3.subVectors(e,this.center);const t=_v1$3.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(_v1$3,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(_v2$2.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(_v1$3.copy(e.center).add(_v2$2)),this.expandByPoint(_v1$3.copy(e.center).sub(_v2$2))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let _id$1=0;const _m1$3=new Matrix4,_obj=new Object3D,_offset=new Vector3,_box$2=new Box3,_boxMorphTargets=new Box3,_vector$9=new Vector3;class BufferGeometry extends EventDispatcher{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_id$1++}),this.uuid=generateUUID(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(arrayNeedsUint32(e)?Uint32BufferAttribute:Uint16BufferAttribute)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Matrix3().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return _m1$3.makeRotationFromQuaternion(e),this.applyMatrix4(_m1$3),this}rotateX(e){return _m1$3.makeRotationX(e),this.applyMatrix4(_m1$3),this}rotateY(e){return _m1$3.makeRotationY(e),this.applyMatrix4(_m1$3),this}rotateZ(e){return _m1$3.makeRotationZ(e),this.applyMatrix4(_m1$3),this}translate(e,t,i){return _m1$3.makeTranslation(e,t,i),this.applyMatrix4(_m1$3),this}scale(e,t,i){return _m1$3.makeScale(e,t,i),this.applyMatrix4(_m1$3),this}lookAt(e){return _obj.lookAt(e),_obj.updateMatrix(),this.applyMatrix4(_obj.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_offset).negate(),this.translate(_offset.x,_offset.y,_offset.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Float32BufferAttribute(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&warn("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Box3);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){error("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Vector3(-1/0,-1/0,-1/0),new Vector3(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];_box$2.setFromBufferAttribute(s),this.morphTargetsRelative?(_vector$9.addVectors(this.boundingBox.min,_box$2.min),this.boundingBox.expandByPoint(_vector$9),_vector$9.addVectors(this.boundingBox.max,_box$2.max),this.boundingBox.expandByPoint(_vector$9)):(this.boundingBox.expandByPoint(_box$2.min),this.boundingBox.expandByPoint(_box$2.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&error('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Sphere);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){error("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Vector3,1/0);return}if(e){const i=this.boundingSphere.center;if(_box$2.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const l=t[s];_boxMorphTargets.setFromBufferAttribute(l),this.morphTargetsRelative?(_vector$9.addVectors(_box$2.min,_boxMorphTargets.min),_box$2.expandByPoint(_vector$9),_vector$9.addVectors(_box$2.max,_boxMorphTargets.max),_box$2.expandByPoint(_vector$9)):(_box$2.expandByPoint(_boxMorphTargets.min),_box$2.expandByPoint(_boxMorphTargets.max))}_box$2.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)_vector$9.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(_vector$9));if(t)for(let s=0,o=t.length;s<o;s++){const l=t[s],u=this.morphTargetsRelative;for(let h=0,f=l.count;h<f;h++)_vector$9.fromBufferAttribute(l,h),u&&(_offset.fromBufferAttribute(e,h),_vector$9.add(_offset)),r=Math.max(r,i.distanceToSquared(_vector$9))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&error('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){error("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new BufferAttribute(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),l=[],u=[];for(let at=0;at<i.count;at++)l[at]=new Vector3,u[at]=new Vector3;const h=new Vector3,f=new Vector3,S=new Vector3,p=new Vector2,I=new Vector2,H=new Vector2,Y=new Vector3,R=new Vector3;function V(at,ut,Gt){h.fromBufferAttribute(i,at),f.fromBufferAttribute(i,ut),S.fromBufferAttribute(i,Gt),p.fromBufferAttribute(s,at),I.fromBufferAttribute(s,ut),H.fromBufferAttribute(s,Gt),f.sub(h),S.sub(h),I.sub(p),H.sub(p);const xt=1/(I.x*H.y-H.x*I.y);isFinite(xt)&&(Y.copy(f).multiplyScalar(H.y).addScaledVector(S,-I.y).multiplyScalar(xt),R.copy(S).multiplyScalar(I.x).addScaledVector(f,-H.x).multiplyScalar(xt),l[at].add(Y),l[ut].add(Y),l[Gt].add(Y),u[at].add(R),u[ut].add(R),u[Gt].add(R))}let be=this.groups;be.length===0&&(be=[{start:0,count:e.count}]);for(let at=0,ut=be.length;at<ut;++at){const Gt=be[at],xt=Gt.start,Lt=Gt.count;for(let Rt=xt,Nt=xt+Lt;Rt<Nt;Rt+=3)V(e.getX(Rt+0),e.getX(Rt+1),e.getX(Rt+2))}const ct=new Vector3,ot=new Vector3,dt=new Vector3,pt=new Vector3;function St(at){dt.fromBufferAttribute(r,at),pt.copy(dt);const ut=l[at];ct.copy(ut),ct.sub(dt.multiplyScalar(dt.dot(ut))).normalize(),ot.crossVectors(pt,ut);const xt=ot.dot(u[at])<0?-1:1;o.setXYZW(at,ct.x,ct.y,ct.z,xt)}for(let at=0,ut=be.length;at<ut;++at){const Gt=be[at],xt=Gt.start,Lt=Gt.count;for(let Rt=xt,Nt=xt+Lt;Rt<Nt;Rt+=3)St(e.getX(Rt+0)),St(e.getX(Rt+1)),St(e.getX(Rt+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new BufferAttribute(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let p=0,I=i.count;p<I;p++)i.setXYZ(p,0,0,0);const r=new Vector3,s=new Vector3,o=new Vector3,l=new Vector3,u=new Vector3,h=new Vector3,f=new Vector3,S=new Vector3;if(e)for(let p=0,I=e.count;p<I;p+=3){const H=e.getX(p+0),Y=e.getX(p+1),R=e.getX(p+2);r.fromBufferAttribute(t,H),s.fromBufferAttribute(t,Y),o.fromBufferAttribute(t,R),f.subVectors(o,s),S.subVectors(r,s),f.cross(S),l.fromBufferAttribute(i,H),u.fromBufferAttribute(i,Y),h.fromBufferAttribute(i,R),l.add(f),u.add(f),h.add(f),i.setXYZ(H,l.x,l.y,l.z),i.setXYZ(Y,u.x,u.y,u.z),i.setXYZ(R,h.x,h.y,h.z)}else for(let p=0,I=t.count;p<I;p+=3)r.fromBufferAttribute(t,p+0),s.fromBufferAttribute(t,p+1),o.fromBufferAttribute(t,p+2),f.subVectors(o,s),S.subVectors(r,s),f.cross(S),i.setXYZ(p+0,f.x,f.y,f.z),i.setXYZ(p+1,f.x,f.y,f.z),i.setXYZ(p+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)_vector$9.fromBufferAttribute(e,t),_vector$9.normalize(),e.setXYZ(t,_vector$9.x,_vector$9.y,_vector$9.z)}toNonIndexed(){function e(l,u){const h=l.array,f=l.itemSize,S=l.normalized,p=new h.constructor(u.length*f);let I=0,H=0;for(let Y=0,R=u.length;Y<R;Y++){l.isInterleavedBufferAttribute?I=u[Y]*l.data.stride+l.offset:I=u[Y]*f;for(let V=0;V<f;V++)p[H++]=h[I++]}return new BufferAttribute(p,f,S)}if(this.index===null)return warn("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new BufferGeometry,i=this.index.array,r=this.attributes;for(const l in r){const u=r[l],h=e(u,i);t.setAttribute(l,h)}const s=this.morphAttributes;for(const l in s){const u=[],h=s[l];for(let f=0,S=h.length;f<S;f++){const p=h[f],I=e(p,i);u.push(I)}t.morphAttributes[l]=u}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const u=this.parameters;for(const h in u)u[h]!==void 0&&(e[h]=u[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const u in i){const h=i[u];e.data.attributes[u]=h.toJSON(e.data)}const r={};let s=!1;for(const u in this.morphAttributes){const h=this.morphAttributes[u],f=[];for(let S=0,p=h.length;S<p;S++){const I=h[S];f.push(I.toJSON(e.data))}f.length>0&&(r[u]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const l=this.boundingSphere;return l!==null&&(e.data.boundingSphere=l.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const h in r){const f=r[h];this.setAttribute(h,f.clone(t))}const s=e.morphAttributes;for(const h in s){const f=[],S=s[h];for(let p=0,I=S.length;p<I;p++)f.push(S[p].clone(t));this.morphAttributes[h]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let h=0,f=o.length;h<f;h++){const S=o[h];this.addGroup(S.start,S.count,S.materialIndex)}const l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());const u=e.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let _materialId=0;class Material extends EventDispatcher{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_materialId++}),this.uuid=generateUUID(),this.name="",this.type="Material",this.blending=NormalBlending,this.side=FrontSide,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=SrcAlphaFactor,this.blendDst=OneMinusSrcAlphaFactor,this.blendEquation=AddEquation,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Color$1(0,0,0),this.blendAlpha=0,this.depthFunc=LessEqualDepth,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=AlwaysStencilFunc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=KeepStencilOp,this.stencilZFail=KeepStencilOp,this.stencilZPass=KeepStencilOp,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){warn(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){warn(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==NormalBlending&&(i.blending=this.blending),this.side!==FrontSide&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==SrcAlphaFactor&&(i.blendSrc=this.blendSrc),this.blendDst!==OneMinusSrcAlphaFactor&&(i.blendDst=this.blendDst),this.blendEquation!==AddEquation&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==LessEqualDepth&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==AlwaysStencilFunc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==KeepStencilOp&&(i.stencilFail=this.stencilFail),this.stencilZFail!==KeepStencilOp&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==KeepStencilOp&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const l in s){const u=s[l];delete u.metadata,o.push(u)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const _vector$7=new Vector3,_segCenter=new Vector3,_segDir=new Vector3,_diff=new Vector3,_edge1=new Vector3,_edge2=new Vector3,_normal$1=new Vector3;class Ray{constructor(e=new Vector3,t=new Vector3(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,_vector$7)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=_vector$7.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(_vector$7.copy(this.origin).addScaledVector(this.direction,t),_vector$7.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){_segCenter.copy(e).add(t).multiplyScalar(.5),_segDir.copy(t).sub(e).normalize(),_diff.copy(this.origin).sub(_segCenter);const s=e.distanceTo(t)*.5,o=-this.direction.dot(_segDir),l=_diff.dot(this.direction),u=-_diff.dot(_segDir),h=_diff.lengthSq(),f=Math.abs(1-o*o);let S,p,I,H;if(f>0)if(S=o*u-l,p=o*l-u,H=s*f,S>=0)if(p>=-H)if(p<=H){const Y=1/f;S*=Y,p*=Y,I=S*(S+o*p+2*l)+p*(o*S+p+2*u)+h}else p=s,S=Math.max(0,-(o*p+l)),I=-S*S+p*(p+2*u)+h;else p=-s,S=Math.max(0,-(o*p+l)),I=-S*S+p*(p+2*u)+h;else p<=-H?(S=Math.max(0,-(-o*s+l)),p=S>0?-s:Math.min(Math.max(-s,-u),s),I=-S*S+p*(p+2*u)+h):p<=H?(S=0,p=Math.min(Math.max(-s,-u),s),I=p*(p+2*u)+h):(S=Math.max(0,-(o*s+l)),p=S>0?s:Math.min(Math.max(-s,-u),s),I=-S*S+p*(p+2*u)+h);else p=o>0?-s:s,S=Math.max(0,-(o*p+l)),I=-S*S+p*(p+2*u)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,S),r&&r.copy(_segCenter).addScaledVector(_segDir,p),I}intersectSphere(e,t){_vector$7.subVectors(e.center,this.origin);const i=_vector$7.dot(this.direction),r=_vector$7.dot(_vector$7)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),l=i-o,u=i+o;return u<0?null:l<0?this.at(u,t):this.at(l,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,l,u;const h=1/this.direction.x,f=1/this.direction.y,S=1/this.direction.z,p=this.origin;return h>=0?(i=(e.min.x-p.x)*h,r=(e.max.x-p.x)*h):(i=(e.max.x-p.x)*h,r=(e.min.x-p.x)*h),f>=0?(s=(e.min.y-p.y)*f,o=(e.max.y-p.y)*f):(s=(e.max.y-p.y)*f,o=(e.min.y-p.y)*f),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),S>=0?(l=(e.min.z-p.z)*S,u=(e.max.z-p.z)*S):(l=(e.max.z-p.z)*S,u=(e.min.z-p.z)*S),i>u||l>r)||((l>i||i!==i)&&(i=l),(u<r||r!==r)&&(r=u),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,_vector$7)!==null}intersectTriangle(e,t,i,r,s){_edge1.subVectors(t,e),_edge2.subVectors(i,e),_normal$1.crossVectors(_edge1,_edge2);let o=this.direction.dot(_normal$1),l;if(o>0){if(r)return null;l=1}else if(o<0)l=-1,o=-o;else return null;_diff.subVectors(this.origin,e);const u=l*this.direction.dot(_edge2.crossVectors(_diff,_edge2));if(u<0)return null;const h=l*this.direction.dot(_edge1.cross(_diff));if(h<0||u+h>o)return null;const f=-l*_diff.dot(_normal$1);return f<0?null:this.at(f/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class MeshBasicMaterial extends Material{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Color$1(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Euler,this.combine=MultiplyOperation,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const _inverseMatrix$3=new Matrix4,_ray$3=new Ray,_sphere$6=new Sphere,_sphereHitAt=new Vector3,_vA=new Vector3,_vB=new Vector3,_vC=new Vector3,_tempA=new Vector3,_morphA=new Vector3,_intersectionPoint=new Vector3,_intersectionPointWorld=new Vector3;class Mesh extends Object3D{constructor(e=new BufferGeometry,t=new MeshBasicMaterial){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const l=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const l=this.morphTargetInfluences;if(s&&l){_morphA.set(0,0,0);for(let u=0,h=s.length;u<h;u++){const f=l[u],S=s[u];f!==0&&(_tempA.fromBufferAttribute(S,e),o?_morphA.addScaledVector(_tempA,f):_morphA.addScaledVector(_tempA.sub(t),f))}t.add(_morphA)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),_sphere$6.copy(i.boundingSphere),_sphere$6.applyMatrix4(s),_ray$3.copy(e.ray).recast(e.near),!(_sphere$6.containsPoint(_ray$3.origin)===!1&&(_ray$3.intersectSphere(_sphere$6,_sphereHitAt)===null||_ray$3.origin.distanceToSquared(_sphereHitAt)>(e.far-e.near)**2))&&(_inverseMatrix$3.copy(s).invert(),_ray$3.copy(e.ray).applyMatrix4(_inverseMatrix$3),!(i.boundingBox!==null&&_ray$3.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,_ray$3)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,l=s.index,u=s.attributes.position,h=s.attributes.uv,f=s.attributes.uv1,S=s.attributes.normal,p=s.groups,I=s.drawRange;if(l!==null)if(Array.isArray(o))for(let H=0,Y=p.length;H<Y;H++){const R=p[H],V=o[R.materialIndex],be=Math.max(R.start,I.start),ct=Math.min(l.count,Math.min(R.start+R.count,I.start+I.count));for(let ot=be,dt=ct;ot<dt;ot+=3){const pt=l.getX(ot),St=l.getX(ot+1),at=l.getX(ot+2);r=checkGeometryIntersection(this,V,e,i,h,f,S,pt,St,at),r&&(r.faceIndex=Math.floor(ot/3),r.face.materialIndex=R.materialIndex,t.push(r))}}else{const H=Math.max(0,I.start),Y=Math.min(l.count,I.start+I.count);for(let R=H,V=Y;R<V;R+=3){const be=l.getX(R),ct=l.getX(R+1),ot=l.getX(R+2);r=checkGeometryIntersection(this,o,e,i,h,f,S,be,ct,ot),r&&(r.faceIndex=Math.floor(R/3),t.push(r))}}else if(u!==void 0)if(Array.isArray(o))for(let H=0,Y=p.length;H<Y;H++){const R=p[H],V=o[R.materialIndex],be=Math.max(R.start,I.start),ct=Math.min(u.count,Math.min(R.start+R.count,I.start+I.count));for(let ot=be,dt=ct;ot<dt;ot+=3){const pt=ot,St=ot+1,at=ot+2;r=checkGeometryIntersection(this,V,e,i,h,f,S,pt,St,at),r&&(r.faceIndex=Math.floor(ot/3),r.face.materialIndex=R.materialIndex,t.push(r))}}else{const H=Math.max(0,I.start),Y=Math.min(u.count,I.start+I.count);for(let R=H,V=Y;R<V;R+=3){const be=R,ct=R+1,ot=R+2;r=checkGeometryIntersection(this,o,e,i,h,f,S,be,ct,ot),r&&(r.faceIndex=Math.floor(R/3),t.push(r))}}}}function checkIntersection$1(n,e,t,i,r,s,o,l){let u;if(e.side===BackSide?u=i.intersectTriangle(o,s,r,!0,l):u=i.intersectTriangle(r,s,o,e.side===FrontSide,l),u===null)return null;_intersectionPointWorld.copy(l),_intersectionPointWorld.applyMatrix4(n.matrixWorld);const h=t.ray.origin.distanceTo(_intersectionPointWorld);return h<t.near||h>t.far?null:{distance:h,point:_intersectionPointWorld.clone(),object:n}}function checkGeometryIntersection(n,e,t,i,r,s,o,l,u,h){n.getVertexPosition(l,_vA),n.getVertexPosition(u,_vB),n.getVertexPosition(h,_vC);const f=checkIntersection$1(n,e,t,i,_vA,_vB,_vC,_intersectionPoint);if(f){const S=new Vector3;Triangle.getBarycoord(_intersectionPoint,_vA,_vB,_vC,S),r&&(f.uv=Triangle.getInterpolatedAttribute(r,l,u,h,S,new Vector2)),s&&(f.uv1=Triangle.getInterpolatedAttribute(s,l,u,h,S,new Vector2)),o&&(f.normal=Triangle.getInterpolatedAttribute(o,l,u,h,S,new Vector3),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const p={a:l,b:u,c:h,normal:new Vector3,materialIndex:0};Triangle.getNormal(_vA,_vB,_vC,p.normal),f.face=p,f.barycoord=S}return f}class DataTexture extends Texture{constructor(e=null,t=1,i=1,r,s,o,l,u,h=NearestFilter,f=NearestFilter,S,p){super(null,o,l,u,h,f,r,s,S,p),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const _vector1=new Vector3,_vector2=new Vector3,_normalMatrix=new Matrix3;class Plane{constructor(e=new Vector3(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=_vector1.subVectors(i,t).cross(_vector2.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(_vector1),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||_normalMatrix.getNormalMatrix(e),r=this.coplanarPoint(_vector1).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _sphere$3=new Sphere,_defaultSpriteCenter=new Vector2(.5,.5),_vector$6=new Vector3;class Frustum{constructor(e=new Plane,t=new Plane,i=new Plane,r=new Plane,s=new Plane,o=new Plane){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(i),l[3].copy(r),l[4].copy(s),l[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=WebGLCoordinateSystem,i=!1){const r=this.planes,s=e.elements,o=s[0],l=s[1],u=s[2],h=s[3],f=s[4],S=s[5],p=s[6],I=s[7],H=s[8],Y=s[9],R=s[10],V=s[11],be=s[12],ct=s[13],ot=s[14],dt=s[15];if(r[0].setComponents(h-o,I-f,V-H,dt-be).normalize(),r[1].setComponents(h+o,I+f,V+H,dt+be).normalize(),r[2].setComponents(h+l,I+S,V+Y,dt+ct).normalize(),r[3].setComponents(h-l,I-S,V-Y,dt-ct).normalize(),i)r[4].setComponents(u,p,R,ot).normalize(),r[5].setComponents(h-u,I-p,V-R,dt-ot).normalize();else if(r[4].setComponents(h-u,I-p,V-R,dt-ot).normalize(),t===WebGLCoordinateSystem)r[5].setComponents(h+u,I+p,V+R,dt+ot).normalize();else if(t===WebGPUCoordinateSystem)r[5].setComponents(u,p,R,ot).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),_sphere$3.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),_sphere$3.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(_sphere$3)}intersectsSprite(e){_sphere$3.center.set(0,0,0);const t=_defaultSpriteCenter.distanceTo(e.center);return _sphere$3.radius=.7071067811865476+t,_sphere$3.applyMatrix4(e.matrixWorld),this.intersectsSphere(_sphere$3)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(_vector$6.x=r.normal.x>0?e.max.x:e.min.x,_vector$6.y=r.normal.y>0?e.max.y:e.min.y,_vector$6.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(_vector$6)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class LineBasicMaterial extends Material{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Color$1(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const _vStart=new Vector3,_vEnd=new Vector3,_inverseMatrix$1=new Matrix4,_ray$1=new Ray,_sphere$1=new Sphere,_intersectPointOnRay=new Vector3,_intersectPointOnSegment=new Vector3;class Line extends Object3D{constructor(e=new BufferGeometry,t=new LineBasicMaterial){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)_vStart.fromBufferAttribute(t,r-1),_vEnd.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=_vStart.distanceTo(_vEnd);e.setAttribute("lineDistance",new Float32BufferAttribute(i,1))}else warn("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),_sphere$1.copy(i.boundingSphere),_sphere$1.applyMatrix4(r),_sphere$1.radius+=s,e.ray.intersectsSphere(_sphere$1)===!1)return;_inverseMatrix$1.copy(r).invert(),_ray$1.copy(e.ray).applyMatrix4(_inverseMatrix$1);const l=s/((this.scale.x+this.scale.y+this.scale.z)/3),u=l*l,h=this.isLineSegments?2:1,f=i.index,p=i.attributes.position;if(f!==null){const I=Math.max(0,o.start),H=Math.min(f.count,o.start+o.count);for(let Y=I,R=H-1;Y<R;Y+=h){const V=f.getX(Y),be=f.getX(Y+1),ct=checkIntersection(this,e,_ray$1,u,V,be,Y);ct&&t.push(ct)}if(this.isLineLoop){const Y=f.getX(H-1),R=f.getX(I),V=checkIntersection(this,e,_ray$1,u,Y,R,H-1);V&&t.push(V)}}else{const I=Math.max(0,o.start),H=Math.min(p.count,o.start+o.count);for(let Y=I,R=H-1;Y<R;Y+=h){const V=checkIntersection(this,e,_ray$1,u,Y,Y+1,Y);V&&t.push(V)}if(this.isLineLoop){const Y=checkIntersection(this,e,_ray$1,u,H-1,I,H-1);Y&&t.push(Y)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const l=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}}function checkIntersection(n,e,t,i,r,s,o){const l=n.geometry.attributes.position;if(_vStart.fromBufferAttribute(l,r),_vEnd.fromBufferAttribute(l,s),t.distanceSqToSegment(_vStart,_vEnd,_intersectPointOnRay,_intersectPointOnSegment)>i)return;_intersectPointOnRay.applyMatrix4(n.matrixWorld);const h=e.ray.origin.distanceTo(_intersectPointOnRay);if(!(h<e.near||h>e.far))return{distance:h,point:_intersectPointOnSegment.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}class CubeTexture extends Texture{constructor(e=[],t=CubeReflectionMapping,i,r,s,o,l,u,h,f){super(e,t,i,r,s,o,l,u,h,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class DepthTexture extends Texture{constructor(e,t,i=UnsignedIntType,r,s,o,l=NearestFilter,u=NearestFilter,h,f=DepthFormat,S=1){if(f!==DepthFormat&&f!==DepthStencilFormat)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const p={width:e,height:t,depth:S};super(p,r,s,o,l,u,f,i,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Source(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class CubeDepthTexture extends DepthTexture{constructor(e,t=UnsignedIntType,i=CubeReflectionMapping,r,s,o=NearestFilter,l=NearestFilter,u,h=DepthFormat){const f={width:e,height:e,depth:1},S=[f,f,f,f,f,f];super(e,e,t,i,r,s,o,l,u,h),this.image=S,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class ExternalTexture extends Texture{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class BoxGeometry extends BufferGeometry{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const l=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const u=[],h=[],f=[],S=[];let p=0,I=0;H("z","y","x",-1,-1,i,t,e,o,s,0),H("z","y","x",1,-1,i,t,-e,o,s,1),H("x","z","y",1,1,e,i,t,r,o,2),H("x","z","y",1,-1,e,i,-t,r,o,3),H("x","y","z",1,-1,e,t,i,r,s,4),H("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(u),this.setAttribute("position",new Float32BufferAttribute(h,3)),this.setAttribute("normal",new Float32BufferAttribute(f,3)),this.setAttribute("uv",new Float32BufferAttribute(S,2));function H(Y,R,V,be,ct,ot,dt,pt,St,at,ut){const Gt=ot/St,xt=dt/at,Lt=ot/2,Rt=dt/2,Nt=pt/2,Dt=St+1,Ut=at+1;let Ct=0,Ot=0;const qt=new Vector3;for(let Zt=0;Zt<Ut;Zt++){const Qt=Zt*xt-Rt;for(let Jt=0;Jt<Dt;Jt++){const un=Jt*Gt-Lt;qt[Y]=un*be,qt[R]=Qt*ct,qt[V]=Nt,h.push(qt.x,qt.y,qt.z),qt[Y]=0,qt[R]=0,qt[V]=pt>0?1:-1,f.push(qt.x,qt.y,qt.z),S.push(Jt/St),S.push(1-Zt/at),Ct+=1}}for(let Zt=0;Zt<at;Zt++)for(let Qt=0;Qt<St;Qt++){const Jt=p+Qt+Dt*Zt,un=p+Qt+Dt*(Zt+1),Tn=p+(Qt+1)+Dt*(Zt+1),dn=p+(Qt+1)+Dt*Zt;u.push(Jt,un,dn),u.push(un,Tn,dn),Ot+=6}l.addGroup(I,Ot,ut),I+=Ot,p+=Ct}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new BoxGeometry(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class PlaneGeometry extends BufferGeometry{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,l=Math.floor(i),u=Math.floor(r),h=l+1,f=u+1,S=e/l,p=t/u,I=[],H=[],Y=[],R=[];for(let V=0;V<f;V++){const be=V*p-o;for(let ct=0;ct<h;ct++){const ot=ct*S-s;H.push(ot,-be,0),Y.push(0,0,1),R.push(ct/l),R.push(1-V/u)}}for(let V=0;V<u;V++)for(let be=0;be<l;be++){const ct=be+h*V,ot=be+h*(V+1),dt=be+1+h*(V+1),pt=be+1+h*V;I.push(ct,ot,pt),I.push(ot,dt,pt)}this.setIndex(I),this.setAttribute("position",new Float32BufferAttribute(H,3)),this.setAttribute("normal",new Float32BufferAttribute(Y,3)),this.setAttribute("uv",new Float32BufferAttribute(R,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new PlaneGeometry(e.width,e.height,e.widthSegments,e.heightSegments)}}class SphereGeometry extends BufferGeometry{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:l},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const u=Math.min(o+l,Math.PI);let h=0;const f=[],S=new Vector3,p=new Vector3,I=[],H=[],Y=[],R=[];for(let V=0;V<=i;V++){const be=[],ct=V/i;let ot=0;V===0&&o===0?ot=.5/t:V===i&&u===Math.PI&&(ot=-.5/t);for(let dt=0;dt<=t;dt++){const pt=dt/t;S.x=-e*Math.cos(r+pt*s)*Math.sin(o+ct*l),S.y=e*Math.cos(o+ct*l),S.z=e*Math.sin(r+pt*s)*Math.sin(o+ct*l),H.push(S.x,S.y,S.z),p.copy(S).normalize(),Y.push(p.x,p.y,p.z),R.push(pt+ot,1-ct),be.push(h++)}f.push(be)}for(let V=0;V<i;V++)for(let be=0;be<t;be++){const ct=f[V][be+1],ot=f[V][be],dt=f[V+1][be],pt=f[V+1][be+1];(V!==0||o>0)&&I.push(ct,ot,pt),(V!==i-1||u<Math.PI)&&I.push(ot,dt,pt)}this.setIndex(I),this.setAttribute("position",new Float32BufferAttribute(H,3)),this.setAttribute("normal",new Float32BufferAttribute(Y,3)),this.setAttribute("uv",new Float32BufferAttribute(R,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new SphereGeometry(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function cloneUniforms(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function mergeUniforms(n){const e={};for(let t=0;t<n.length;t++){const i=cloneUniforms(n[t]);for(const r in i)e[r]=i[r]}return e}function cloneUniformsGroups(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function getUnlitUniformColorSpace(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ColorManagement.workingColorSpace}const UniformsUtils={clone:cloneUniforms,merge:mergeUniforms};var default_vertex=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,default_fragment=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ShaderMaterial extends Material{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=default_vertex,this.fragmentShader=default_fragment,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=cloneUniforms(e.uniforms),this.uniformsGroups=cloneUniformsGroups(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class RawShaderMaterial extends ShaderMaterial{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class MeshStandardMaterial extends Material{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Color$1(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Color$1(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=TangentSpaceNormalMap,this.normalScale=new Vector2(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Euler,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class MeshDepthMaterial extends Material{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=BasicDepthPacking,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class MeshDistanceMaterial extends Material{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Light extends Object3D{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Color$1(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const _position$2=new Vector3,_quaternion$2=new Quaternion,_scale$2=new Vector3;class Camera extends Object3D{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Matrix4,this.projectionMatrix=new Matrix4,this.projectionMatrixInverse=new Matrix4,this.coordinateSystem=WebGLCoordinateSystem,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(_position$2,_quaternion$2,_scale$2),_scale$2.x===1&&_scale$2.y===1&&_scale$2.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(_position$2,_quaternion$2,_scale$2.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(_position$2,_quaternion$2,_scale$2),_scale$2.x===1&&_scale$2.y===1&&_scale$2.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(_position$2,_quaternion$2,_scale$2.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const _v3$1=new Vector3,_minTarget=new Vector2,_maxTarget=new Vector2;class PerspectiveCamera extends Camera{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=RAD2DEG*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(DEG2RAD*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return RAD2DEG*2*Math.atan(Math.tan(DEG2RAD*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){_v3$1.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(_v3$1.x,_v3$1.y).multiplyScalar(-e/_v3$1.z),_v3$1.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(_v3$1.x,_v3$1.y).multiplyScalar(-e/_v3$1.z)}getViewSize(e,t){return this.getViewBounds(e,_minTarget,_maxTarget),t.subVectors(_maxTarget,_minTarget)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(DEG2RAD*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const u=o.fullWidth,h=o.fullHeight;s+=o.offsetX*r/u,t-=o.offsetY*i/h,r*=o.width/u,i*=o.height/h}const l=this.filmOffset;l!==0&&(s+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class OrthographicCamera extends Camera{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,l=r+t,u=r-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=h*this.view.offsetX,o=s+h*this.view.width,l-=f*this.view.offsetY,u=l-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,l,u,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class AmbientLight extends Light{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const fov=-90,aspect=1;class CubeCamera extends Object3D{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new PerspectiveCamera(fov,aspect,e,t);r.layers=this.layers,this.add(r);const s=new PerspectiveCamera(fov,aspect,e,t);s.layers=this.layers,this.add(s);const o=new PerspectiveCamera(fov,aspect,e,t);o.layers=this.layers,this.add(o);const l=new PerspectiveCamera(fov,aspect,e,t);l.layers=this.layers,this.add(l);const u=new PerspectiveCamera(fov,aspect,e,t);u.layers=this.layers,this.add(u);const h=new PerspectiveCamera(fov,aspect,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,l,u]=t;for(const h of t)this.remove(h);if(e===WebGLCoordinateSystem)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),u.up.set(0,1,0),u.lookAt(0,0,-1);else if(e===WebGPUCoordinateSystem)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),u.up.set(0,-1,0),u.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,l,u,h,f]=this.children,S=e.getRenderTarget(),p=e.getActiveCubeFace(),I=e.getActiveMipmapLevel(),H=e.xr.enabled;e.xr.enabled=!1;const Y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let R=!1;e.isWebGLRenderer===!0?R=e.state.buffers.depth.getReversed():R=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),R&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,r),R&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,r),R&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,3,r),R&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(i,4,r),R&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),i.texture.generateMipmaps=Y,e.setRenderTarget(i,5,r),R&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(S,p,I),e.xr.enabled=H,i.texture.needsPMREMUpdate=!0}}class ArrayCamera extends PerspectiveCamera{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}let Timer$1=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=handleVisibilityChange.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function handleVisibilityChange(){this._document.hidden===!1&&this.reset()}class Clock{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,warn("THREE.Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}class Spherical{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=clamp(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(clamp(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Controls extends EventDispatcher{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){warn("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function getByteLength(n,e,t,i){const r=getTextureTypeByteLength(i);switch(t){case AlphaFormat:return n*e;case RedFormat:return n*e/r.components*r.byteLength;case RedIntegerFormat:return n*e/r.components*r.byteLength;case RGFormat:return n*e*2/r.components*r.byteLength;case RGIntegerFormat:return n*e*2/r.components*r.byteLength;case RGBFormat:return n*e*3/r.components*r.byteLength;case RGBAFormat:return n*e*4/r.components*r.byteLength;case RGBAIntegerFormat:return n*e*4/r.components*r.byteLength;case RGB_S3TC_DXT1_Format:case RGBA_S3TC_DXT1_Format:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case RGBA_S3TC_DXT3_Format:case RGBA_S3TC_DXT5_Format:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case RGB_PVRTC_2BPPV1_Format:case RGBA_PVRTC_2BPPV1_Format:return Math.max(n,16)*Math.max(e,8)/4;case RGB_PVRTC_4BPPV1_Format:case RGBA_PVRTC_4BPPV1_Format:return Math.max(n,8)*Math.max(e,8)/2;case RGB_ETC1_Format:case RGB_ETC2_Format:case R11_EAC_Format:case SIGNED_R11_EAC_Format:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case RGBA_ETC2_EAC_Format:case RG11_EAC_Format:case SIGNED_RG11_EAC_Format:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case RGBA_ASTC_4x4_Format:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case RGBA_ASTC_5x4_Format:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case RGBA_ASTC_5x5_Format:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case RGBA_ASTC_6x5_Format:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case RGBA_ASTC_6x6_Format:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case RGBA_ASTC_8x5_Format:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case RGBA_ASTC_8x6_Format:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case RGBA_ASTC_8x8_Format:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case RGBA_ASTC_10x5_Format:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case RGBA_ASTC_10x6_Format:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case RGBA_ASTC_10x8_Format:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case RGBA_ASTC_10x10_Format:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case RGBA_ASTC_12x10_Format:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case RGBA_ASTC_12x12_Format:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case RGBA_BPTC_Format:case RGB_BPTC_SIGNED_Format:case RGB_BPTC_UNSIGNED_Format:return Math.ceil(n/4)*Math.ceil(e/4)*16;case RED_RGTC1_Format:case SIGNED_RED_RGTC1_Format:return Math.ceil(n/4)*Math.ceil(e/4)*8;case RED_GREEN_RGTC2_Format:case SIGNED_RED_GREEN_RGTC2_Format:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function getTextureTypeByteLength(n){switch(n){case UnsignedByteType:case ByteType:return{byteLength:1,components:1};case UnsignedShortType:case ShortType:case HalfFloatType:return{byteLength:2,components:1};case UnsignedShort4444Type:case UnsignedShort5551Type:return{byteLength:2,components:4};case UnsignedIntType:case IntType:case FloatType:return{byteLength:4,components:1};case UnsignedInt5999Type:case UnsignedInt101111Type:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:REVISION}}));typeof window<"u"&&(window.__THREE__?warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=REVISION);function WebGLAnimation(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function WebGLAttributes(n){const e=new WeakMap;function t(l,u){const h=l.array,f=l.usage,S=h.byteLength,p=n.createBuffer();n.bindBuffer(u,p),n.bufferData(u,h,f),l.onUploadCallback();let I;if(h instanceof Float32Array)I=n.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)I=n.HALF_FLOAT;else if(h instanceof Uint16Array)l.isFloat16BufferAttribute?I=n.HALF_FLOAT:I=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)I=n.SHORT;else if(h instanceof Uint32Array)I=n.UNSIGNED_INT;else if(h instanceof Int32Array)I=n.INT;else if(h instanceof Int8Array)I=n.BYTE;else if(h instanceof Uint8Array)I=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)I=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:p,type:I,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version,size:S}}function i(l,u,h){const f=u.array,S=u.updateRanges;if(n.bindBuffer(h,l),S.length===0)n.bufferSubData(h,0,f);else{S.sort((I,H)=>I.start-H.start);let p=0;for(let I=1;I<S.length;I++){const H=S[p],Y=S[I];Y.start<=H.start+H.count+1?H.count=Math.max(H.count,Y.start+Y.count-H.start):(++p,S[p]=Y)}S.length=p+1;for(let I=0,H=S.length;I<H;I++){const Y=S[I];n.bufferSubData(h,Y.start*f.BYTES_PER_ELEMENT,f,Y.start,Y.count)}u.clearUpdateRanges()}u.onUploadCallback()}function r(l){return l.isInterleavedBufferAttribute&&(l=l.data),e.get(l)}function s(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=e.get(l);u&&(n.deleteBuffer(u.buffer),e.delete(l))}function o(l,u){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){const f=e.get(l);(!f||f.version<l.version)&&e.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}const h=e.get(l);if(h===void 0)e.set(l,t(l,u));else if(h.version<l.version){if(h.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(h.buffer,l,u),h.version=l.version}}return{get:r,remove:s,update:o}}var alphahash_fragment=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment=`#ifdef USE_ALPHAHASH
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
#endif`,alphamap_fragment=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment=`#ifdef USE_AOMAP
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
#endif`,aomap_pars_fragment=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iridescence_fragment=`#ifdef USE_IRIDESCENCE
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
#endif`,bumpmap_pars_fragment=`#ifdef USE_BUMPMAP
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
#endif`,clipping_planes_fragment=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,clipping_planes_pars_fragment=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common$1=`#define PI 3.141592653589793
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
} // validated`,cube_uv_reflection_fragment=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,defaultnormal_vertex=`vec3 transformedNormal = objectNormal;
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
#endif`,displacementmap_pars_vertex=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment="gl_FragColor = linearToOutputTexel( gl_FragColor );",colorspace_pars_fragment=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment=`#ifdef USE_ENVMAP
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
#endif`,envmap_pars_vertex=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_vertex=`#ifdef USE_ENVMAP
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
#endif`,fog_vertex=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment=`#ifdef USE_GRADIENTMAP
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
}`,lightmap_pars_fragment=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin=`uniform bool receiveShadow;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif`,envmap_physical_pars_fragment=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
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
#endif`,lights_toon_fragment=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,lights_physical_pars_fragment=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return v;
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,lights_fragment_maps=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
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
#endif`,lights_fragment_end=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,logdepthbuf_fragment=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,map_particle_pars_fragment=`#if defined( USE_POINTS_UV )
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
#endif`,metalnessmap_fragment=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,normal_pars_fragment=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment=`#ifdef USE_NORMALMAP
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
#endif`,clearcoat_normal_fragment_begin=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,shadowmask_pars_fragment=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex=`#ifdef USE_SKINNING
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
#endif`,skinning_vertex=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex=`#ifdef USE_SKINNING
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
#endif`,specularmap_fragment=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_pars_vertex=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_vertex=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,worldpos_vertex=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const vertex$h=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fragment$h=`uniform sampler2D t2D;
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
}`,vertex$g=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fragment$g=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vertex$f=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fragment$f=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vertex$e=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,fragment$e=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,vertex$d=`#define DISTANCE
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
	#include <morphinstance_vertex>
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
}`,fragment$d=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
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
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,vertex$c=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fragment$c=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vertex$b=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fragment$b=`uniform vec3 diffuse;
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
}`,vertex$a=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,fragment$a=`uniform vec3 diffuse;
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
}`,vertex$9=`#define LAMBERT
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
	#include <morphinstance_vertex>
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
}`,fragment$9=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,vertex$8=`#define MATCAP
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
	#include <morphinstance_vertex>
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
}`,fragment$8=`#define MATCAP
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
}`,vertex$7=`#define NORMAL
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
	#include <morphinstance_vertex>
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
}`,fragment$7=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,vertex$6=`#define PHONG
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
	#include <morphinstance_vertex>
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
}`,fragment$6=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,vertex$5=`#define STANDARD
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
	#include <morphinstance_vertex>
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
}`,fragment$5=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,vertex$4=`#define TOON
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
	#include <morphinstance_vertex>
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
}`,fragment$4=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,vertex$3=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,fragment$3=`uniform vec3 diffuse;
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
}`,vertex$2=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,fragment$2=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,vertex$1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,fragment$1=`uniform vec3 diffuse;
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
}`,ShaderChunk={alphahash_fragment,alphahash_pars_fragment,alphamap_fragment,alphamap_pars_fragment,alphatest_fragment,alphatest_pars_fragment,aomap_fragment,aomap_pars_fragment,batching_pars_vertex,batching_vertex,begin_vertex,beginnormal_vertex,bsdfs,iridescence_fragment,bumpmap_pars_fragment,clipping_planes_fragment,clipping_planes_pars_fragment,clipping_planes_pars_vertex,clipping_planes_vertex,color_fragment,color_pars_fragment,color_pars_vertex,color_vertex,common:common$1,cube_uv_reflection_fragment,defaultnormal_vertex,displacementmap_pars_vertex,displacementmap_vertex,emissivemap_fragment,emissivemap_pars_fragment,colorspace_fragment,colorspace_pars_fragment,envmap_fragment,envmap_common_pars_fragment,envmap_pars_fragment,envmap_pars_vertex,envmap_physical_pars_fragment,envmap_vertex,fog_vertex,fog_pars_vertex,fog_fragment,fog_pars_fragment,gradientmap_pars_fragment,lightmap_pars_fragment,lights_lambert_fragment,lights_lambert_pars_fragment,lights_pars_begin,lights_toon_fragment,lights_toon_pars_fragment,lights_phong_fragment,lights_phong_pars_fragment,lights_physical_fragment,lights_physical_pars_fragment,lights_fragment_begin,lights_fragment_maps,lights_fragment_end,logdepthbuf_fragment,logdepthbuf_pars_fragment,logdepthbuf_pars_vertex,logdepthbuf_vertex,map_fragment,map_pars_fragment,map_particle_fragment,map_particle_pars_fragment,metalnessmap_fragment,metalnessmap_pars_fragment,morphinstance_vertex,morphcolor_vertex,morphnormal_vertex,morphtarget_pars_vertex,morphtarget_vertex,normal_fragment_begin,normal_fragment_maps,normal_pars_fragment,normal_pars_vertex,normal_vertex,normalmap_pars_fragment,clearcoat_normal_fragment_begin,clearcoat_normal_fragment_maps,clearcoat_pars_fragment,iridescence_pars_fragment,opaque_fragment,packing,premultiplied_alpha_fragment,project_vertex,dithering_fragment,dithering_pars_fragment,roughnessmap_fragment,roughnessmap_pars_fragment,shadowmap_pars_fragment,shadowmap_pars_vertex,shadowmap_vertex,shadowmask_pars_fragment,skinbase_vertex,skinning_pars_vertex,skinning_vertex,skinnormal_vertex,specularmap_fragment,specularmap_pars_fragment,tonemapping_fragment,tonemapping_pars_fragment,transmission_fragment,transmission_pars_fragment,uv_pars_fragment,uv_pars_vertex,uv_vertex,worldpos_vertex,background_vert:vertex$h,background_frag:fragment$h,backgroundCube_vert:vertex$g,backgroundCube_frag:fragment$g,cube_vert:vertex$f,cube_frag:fragment$f,depth_vert:vertex$e,depth_frag:fragment$e,distance_vert:vertex$d,distance_frag:fragment$d,equirect_vert:vertex$c,equirect_frag:fragment$c,linedashed_vert:vertex$b,linedashed_frag:fragment$b,meshbasic_vert:vertex$a,meshbasic_frag:fragment$a,meshlambert_vert:vertex$9,meshlambert_frag:fragment$9,meshmatcap_vert:vertex$8,meshmatcap_frag:fragment$8,meshnormal_vert:vertex$7,meshnormal_frag:fragment$7,meshphong_vert:vertex$6,meshphong_frag:fragment$6,meshphysical_vert:vertex$5,meshphysical_frag:fragment$5,meshtoon_vert:vertex$4,meshtoon_frag:fragment$4,points_vert:vertex$3,points_frag:fragment$3,shadow_vert:vertex$2,shadow_frag:fragment$2,sprite_vert:vertex$1,sprite_frag:fragment$1},UniformsLib={common:{diffuse:{value:new Color$1(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Matrix3},alphaMap:{value:null},alphaMapTransform:{value:new Matrix3},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Matrix3}},envmap:{envMap:{value:null},envMapRotation:{value:new Matrix3},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Matrix3}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Matrix3}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Matrix3},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Matrix3},normalScale:{value:new Vector2(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Matrix3},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Matrix3}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Matrix3}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Matrix3}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Color$1(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Color$1(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Matrix3},alphaTest:{value:0},uvTransform:{value:new Matrix3}},sprite:{diffuse:{value:new Color$1(16777215)},opacity:{value:1},center:{value:new Vector2(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Matrix3},alphaMap:{value:null},alphaMapTransform:{value:new Matrix3},alphaTest:{value:0}}},ShaderLib={basic:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.specularmap,UniformsLib.envmap,UniformsLib.aomap,UniformsLib.lightmap,UniformsLib.fog]),vertexShader:ShaderChunk.meshbasic_vert,fragmentShader:ShaderChunk.meshbasic_frag},lambert:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.specularmap,UniformsLib.envmap,UniformsLib.aomap,UniformsLib.lightmap,UniformsLib.emissivemap,UniformsLib.bumpmap,UniformsLib.normalmap,UniformsLib.displacementmap,UniformsLib.fog,UniformsLib.lights,{emissive:{value:new Color$1(0)},envMapIntensity:{value:1}}]),vertexShader:ShaderChunk.meshlambert_vert,fragmentShader:ShaderChunk.meshlambert_frag},phong:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.specularmap,UniformsLib.envmap,UniformsLib.aomap,UniformsLib.lightmap,UniformsLib.emissivemap,UniformsLib.bumpmap,UniformsLib.normalmap,UniformsLib.displacementmap,UniformsLib.fog,UniformsLib.lights,{emissive:{value:new Color$1(0)},specular:{value:new Color$1(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ShaderChunk.meshphong_vert,fragmentShader:ShaderChunk.meshphong_frag},standard:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.envmap,UniformsLib.aomap,UniformsLib.lightmap,UniformsLib.emissivemap,UniformsLib.bumpmap,UniformsLib.normalmap,UniformsLib.displacementmap,UniformsLib.roughnessmap,UniformsLib.metalnessmap,UniformsLib.fog,UniformsLib.lights,{emissive:{value:new Color$1(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ShaderChunk.meshphysical_vert,fragmentShader:ShaderChunk.meshphysical_frag},toon:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.aomap,UniformsLib.lightmap,UniformsLib.emissivemap,UniformsLib.bumpmap,UniformsLib.normalmap,UniformsLib.displacementmap,UniformsLib.gradientmap,UniformsLib.fog,UniformsLib.lights,{emissive:{value:new Color$1(0)}}]),vertexShader:ShaderChunk.meshtoon_vert,fragmentShader:ShaderChunk.meshtoon_frag},matcap:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.bumpmap,UniformsLib.normalmap,UniformsLib.displacementmap,UniformsLib.fog,{matcap:{value:null}}]),vertexShader:ShaderChunk.meshmatcap_vert,fragmentShader:ShaderChunk.meshmatcap_frag},points:{uniforms:mergeUniforms([UniformsLib.points,UniformsLib.fog]),vertexShader:ShaderChunk.points_vert,fragmentShader:ShaderChunk.points_frag},dashed:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ShaderChunk.linedashed_vert,fragmentShader:ShaderChunk.linedashed_frag},depth:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.displacementmap]),vertexShader:ShaderChunk.depth_vert,fragmentShader:ShaderChunk.depth_frag},normal:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.bumpmap,UniformsLib.normalmap,UniformsLib.displacementmap,{opacity:{value:1}}]),vertexShader:ShaderChunk.meshnormal_vert,fragmentShader:ShaderChunk.meshnormal_frag},sprite:{uniforms:mergeUniforms([UniformsLib.sprite,UniformsLib.fog]),vertexShader:ShaderChunk.sprite_vert,fragmentShader:ShaderChunk.sprite_frag},background:{uniforms:{uvTransform:{value:new Matrix3},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ShaderChunk.background_vert,fragmentShader:ShaderChunk.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Matrix3}},vertexShader:ShaderChunk.backgroundCube_vert,fragmentShader:ShaderChunk.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ShaderChunk.cube_vert,fragmentShader:ShaderChunk.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ShaderChunk.equirect_vert,fragmentShader:ShaderChunk.equirect_frag},distance:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.displacementmap,{referencePosition:{value:new Vector3},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ShaderChunk.distance_vert,fragmentShader:ShaderChunk.distance_frag},shadow:{uniforms:mergeUniforms([UniformsLib.lights,UniformsLib.fog,{color:{value:new Color$1(0)},opacity:{value:1}}]),vertexShader:ShaderChunk.shadow_vert,fragmentShader:ShaderChunk.shadow_frag}};ShaderLib.physical={uniforms:mergeUniforms([ShaderLib.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Matrix3},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Matrix3},clearcoatNormalScale:{value:new Vector2(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Matrix3},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Matrix3},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Matrix3},sheen:{value:0},sheenColor:{value:new Color$1(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Matrix3},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Matrix3},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Matrix3},transmissionSamplerSize:{value:new Vector2},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Matrix3},attenuationDistance:{value:0},attenuationColor:{value:new Color$1(0)},specularColor:{value:new Color$1(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Matrix3},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Matrix3},anisotropyVector:{value:new Vector2},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Matrix3}}]),vertexShader:ShaderChunk.meshphysical_vert,fragmentShader:ShaderChunk.meshphysical_frag};const _rgb={r:0,b:0,g:0},_e1$1=new Euler,_m1$1=new Matrix4;function WebGLBackground(n,e,t,i,r,s){const o=new Color$1(0);let l=r===!0?0:1,u,h,f=null,S=0,p=null;function I(be){let ct=be.isScene===!0?be.background:null;if(ct&&ct.isTexture){const ot=be.backgroundBlurriness>0;ct=e.get(ct,ot)}return ct}function H(be){let ct=!1;const ot=I(be);ot===null?R(o,l):ot&&ot.isColor&&(R(ot,1),ct=!0);const dt=n.xr.getEnvironmentBlendMode();dt==="additive"?t.buffers.color.setClear(0,0,0,1,s):dt==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(n.autoClear||ct)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function Y(be,ct){const ot=I(ct);ot&&(ot.isCubeTexture||ot.mapping===CubeUVReflectionMapping)?(h===void 0&&(h=new Mesh(new BoxGeometry(1,1,1),new ShaderMaterial({name:"BackgroundCubeMaterial",uniforms:cloneUniforms(ShaderLib.backgroundCube.uniforms),vertexShader:ShaderLib.backgroundCube.vertexShader,fragmentShader:ShaderLib.backgroundCube.fragmentShader,side:BackSide,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(dt,pt,St){this.matrixWorld.copyPosition(St.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),_e1$1.copy(ct.backgroundRotation),_e1$1.x*=-1,_e1$1.y*=-1,_e1$1.z*=-1,ot.isCubeTexture&&ot.isRenderTargetTexture===!1&&(_e1$1.y*=-1,_e1$1.z*=-1),h.material.uniforms.envMap.value=ot,h.material.uniforms.flipEnvMap.value=ot.isCubeTexture&&ot.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=ct.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=ct.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(_m1$1.makeRotationFromEuler(_e1$1)),h.material.toneMapped=ColorManagement.getTransfer(ot.colorSpace)!==SRGBTransfer,(f!==ot||S!==ot.version||p!==n.toneMapping)&&(h.material.needsUpdate=!0,f=ot,S=ot.version,p=n.toneMapping),h.layers.enableAll(),be.unshift(h,h.geometry,h.material,0,0,null)):ot&&ot.isTexture&&(u===void 0&&(u=new Mesh(new PlaneGeometry(2,2),new ShaderMaterial({name:"BackgroundMaterial",uniforms:cloneUniforms(ShaderLib.background.uniforms),vertexShader:ShaderLib.background.vertexShader,fragmentShader:ShaderLib.background.fragmentShader,side:FrontSide,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(u)),u.material.uniforms.t2D.value=ot,u.material.uniforms.backgroundIntensity.value=ct.backgroundIntensity,u.material.toneMapped=ColorManagement.getTransfer(ot.colorSpace)!==SRGBTransfer,ot.matrixAutoUpdate===!0&&ot.updateMatrix(),u.material.uniforms.uvTransform.value.copy(ot.matrix),(f!==ot||S!==ot.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,f=ot,S=ot.version,p=n.toneMapping),u.layers.enableAll(),be.unshift(u,u.geometry,u.material,0,0,null))}function R(be,ct){be.getRGB(_rgb,getUnlitUniformColorSpace(n)),t.buffers.color.setClear(_rgb.r,_rgb.g,_rgb.b,ct,s)}function V(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0)}return{getClearColor:function(){return o},setClearColor:function(be,ct=1){o.set(be),l=ct,R(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(be){l=be,R(o,l)},render:H,addToRenderList:Y,dispose:V}}function WebGLBindingStates(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=p(null);let s=r,o=!1;function l(xt,Lt,Rt,Nt,Dt){let Ut=!1;const Ct=S(xt,Nt,Rt,Lt);s!==Ct&&(s=Ct,h(s.object)),Ut=I(xt,Nt,Rt,Dt),Ut&&H(xt,Nt,Rt,Dt),Dt!==null&&e.update(Dt,n.ELEMENT_ARRAY_BUFFER),(Ut||o)&&(o=!1,ot(xt,Lt,Rt,Nt),Dt!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(Dt).buffer))}function u(){return n.createVertexArray()}function h(xt){return n.bindVertexArray(xt)}function f(xt){return n.deleteVertexArray(xt)}function S(xt,Lt,Rt,Nt){const Dt=Nt.wireframe===!0;let Ut=i[Lt.id];Ut===void 0&&(Ut={},i[Lt.id]=Ut);const Ct=xt.isInstancedMesh===!0?xt.id:0;let Ot=Ut[Ct];Ot===void 0&&(Ot={},Ut[Ct]=Ot);let qt=Ot[Rt.id];qt===void 0&&(qt={},Ot[Rt.id]=qt);let Zt=qt[Dt];return Zt===void 0&&(Zt=p(u()),qt[Dt]=Zt),Zt}function p(xt){const Lt=[],Rt=[],Nt=[];for(let Dt=0;Dt<t;Dt++)Lt[Dt]=0,Rt[Dt]=0,Nt[Dt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Lt,enabledAttributes:Rt,attributeDivisors:Nt,object:xt,attributes:{},index:null}}function I(xt,Lt,Rt,Nt){const Dt=s.attributes,Ut=Lt.attributes;let Ct=0;const Ot=Rt.getAttributes();for(const qt in Ot)if(Ot[qt].location>=0){const Qt=Dt[qt];let Jt=Ut[qt];if(Jt===void 0&&(qt==="instanceMatrix"&&xt.instanceMatrix&&(Jt=xt.instanceMatrix),qt==="instanceColor"&&xt.instanceColor&&(Jt=xt.instanceColor)),Qt===void 0||Qt.attribute!==Jt||Jt&&Qt.data!==Jt.data)return!0;Ct++}return s.attributesNum!==Ct||s.index!==Nt}function H(xt,Lt,Rt,Nt){const Dt={},Ut=Lt.attributes;let Ct=0;const Ot=Rt.getAttributes();for(const qt in Ot)if(Ot[qt].location>=0){let Qt=Ut[qt];Qt===void 0&&(qt==="instanceMatrix"&&xt.instanceMatrix&&(Qt=xt.instanceMatrix),qt==="instanceColor"&&xt.instanceColor&&(Qt=xt.instanceColor));const Jt={};Jt.attribute=Qt,Qt&&Qt.data&&(Jt.data=Qt.data),Dt[qt]=Jt,Ct++}s.attributes=Dt,s.attributesNum=Ct,s.index=Nt}function Y(){const xt=s.newAttributes;for(let Lt=0,Rt=xt.length;Lt<Rt;Lt++)xt[Lt]=0}function R(xt){V(xt,0)}function V(xt,Lt){const Rt=s.newAttributes,Nt=s.enabledAttributes,Dt=s.attributeDivisors;Rt[xt]=1,Nt[xt]===0&&(n.enableVertexAttribArray(xt),Nt[xt]=1),Dt[xt]!==Lt&&(n.vertexAttribDivisor(xt,Lt),Dt[xt]=Lt)}function be(){const xt=s.newAttributes,Lt=s.enabledAttributes;for(let Rt=0,Nt=Lt.length;Rt<Nt;Rt++)Lt[Rt]!==xt[Rt]&&(n.disableVertexAttribArray(Rt),Lt[Rt]=0)}function ct(xt,Lt,Rt,Nt,Dt,Ut,Ct){Ct===!0?n.vertexAttribIPointer(xt,Lt,Rt,Dt,Ut):n.vertexAttribPointer(xt,Lt,Rt,Nt,Dt,Ut)}function ot(xt,Lt,Rt,Nt){Y();const Dt=Nt.attributes,Ut=Rt.getAttributes(),Ct=Lt.defaultAttributeValues;for(const Ot in Ut){const qt=Ut[Ot];if(qt.location>=0){let Zt=Dt[Ot];if(Zt===void 0&&(Ot==="instanceMatrix"&&xt.instanceMatrix&&(Zt=xt.instanceMatrix),Ot==="instanceColor"&&xt.instanceColor&&(Zt=xt.instanceColor)),Zt!==void 0){const Qt=Zt.normalized,Jt=Zt.itemSize,un=e.get(Zt);if(un===void 0)continue;const Tn=un.buffer,dn=un.type,Wt=un.bytesPerElement,Yt=dn===n.INT||dn===n.UNSIGNED_INT||Zt.gpuType===IntType;if(Zt.isInterleavedBufferAttribute){const jt=Zt.data,pn=jt.stride,hn=Zt.offset;if(jt.isInstancedInterleavedBuffer){for(let fn=0;fn<qt.locationSize;fn++)V(qt.location+fn,jt.meshPerAttribute);xt.isInstancedMesh!==!0&&Nt._maxInstanceCount===void 0&&(Nt._maxInstanceCount=jt.meshPerAttribute*jt.count)}else for(let fn=0;fn<qt.locationSize;fn++)R(qt.location+fn);n.bindBuffer(n.ARRAY_BUFFER,Tn);for(let fn=0;fn<qt.locationSize;fn++)ct(qt.location+fn,Jt/qt.locationSize,dn,Qt,pn*Wt,(hn+Jt/qt.locationSize*fn)*Wt,Yt)}else{if(Zt.isInstancedBufferAttribute){for(let jt=0;jt<qt.locationSize;jt++)V(qt.location+jt,Zt.meshPerAttribute);xt.isInstancedMesh!==!0&&Nt._maxInstanceCount===void 0&&(Nt._maxInstanceCount=Zt.meshPerAttribute*Zt.count)}else for(let jt=0;jt<qt.locationSize;jt++)R(qt.location+jt);n.bindBuffer(n.ARRAY_BUFFER,Tn);for(let jt=0;jt<qt.locationSize;jt++)ct(qt.location+jt,Jt/qt.locationSize,dn,Qt,Jt*Wt,Jt/qt.locationSize*jt*Wt,Yt)}}else if(Ct!==void 0){const Qt=Ct[Ot];if(Qt!==void 0)switch(Qt.length){case 2:n.vertexAttrib2fv(qt.location,Qt);break;case 3:n.vertexAttrib3fv(qt.location,Qt);break;case 4:n.vertexAttrib4fv(qt.location,Qt);break;default:n.vertexAttrib1fv(qt.location,Qt)}}}}be()}function dt(){ut();for(const xt in i){const Lt=i[xt];for(const Rt in Lt){const Nt=Lt[Rt];for(const Dt in Nt){const Ut=Nt[Dt];for(const Ct in Ut)f(Ut[Ct].object),delete Ut[Ct];delete Nt[Dt]}}delete i[xt]}}function pt(xt){if(i[xt.id]===void 0)return;const Lt=i[xt.id];for(const Rt in Lt){const Nt=Lt[Rt];for(const Dt in Nt){const Ut=Nt[Dt];for(const Ct in Ut)f(Ut[Ct].object),delete Ut[Ct];delete Nt[Dt]}}delete i[xt.id]}function St(xt){for(const Lt in i){const Rt=i[Lt];for(const Nt in Rt){const Dt=Rt[Nt];if(Dt[xt.id]===void 0)continue;const Ut=Dt[xt.id];for(const Ct in Ut)f(Ut[Ct].object),delete Ut[Ct];delete Dt[xt.id]}}}function at(xt){for(const Lt in i){const Rt=i[Lt],Nt=xt.isInstancedMesh===!0?xt.id:0,Dt=Rt[Nt];if(Dt!==void 0){for(const Ut in Dt){const Ct=Dt[Ut];for(const Ot in Ct)f(Ct[Ot].object),delete Ct[Ot];delete Dt[Ut]}delete Rt[Nt],Object.keys(Rt).length===0&&delete i[Lt]}}}function ut(){Gt(),o=!0,s!==r&&(s=r,h(s.object))}function Gt(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:l,reset:ut,resetDefaultState:Gt,dispose:dt,releaseStatesOfGeometry:pt,releaseStatesOfObject:at,releaseStatesOfProgram:St,initAttributes:Y,enableAttribute:R,disableUnusedAttributes:be}}function WebGLBufferRenderer(n,e,t){let i;function r(h){i=h}function s(h,f){n.drawArrays(i,h,f),t.update(f,i,1)}function o(h,f,S){S!==0&&(n.drawArraysInstanced(i,h,f,S),t.update(f,i,S))}function l(h,f,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,h,0,f,0,S);let I=0;for(let H=0;H<S;H++)I+=f[H];t.update(I,i,1)}function u(h,f,S,p){if(S===0)return;const I=e.get("WEBGL_multi_draw");if(I===null)for(let H=0;H<h.length;H++)o(h[H],f[H],p[H]);else{I.multiDrawArraysInstancedWEBGL(i,h,0,f,0,p,0,S);let H=0;for(let Y=0;Y<S;Y++)H+=f[Y]*p[Y];t.update(H,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=l,this.renderMultiDrawInstances=u}function WebGLCapabilities(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const St=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(St.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(St){return!(St!==RGBAFormat&&i.convert(St)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(St){const at=St===HalfFloatType&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(St!==UnsignedByteType&&i.convert(St)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&St!==FloatType&&!at)}function u(St){if(St==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";St="mediump"}return St==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const f=u(h);f!==h&&(warn("WebGLRenderer:",h,"not supported, using",f,"instead."),h=f);const S=t.logarithmicDepthBuffer===!0,p=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),I=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),H=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),Y=n.getParameter(n.MAX_TEXTURE_SIZE),R=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),V=n.getParameter(n.MAX_VERTEX_ATTRIBS),be=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),ct=n.getParameter(n.MAX_VARYING_VECTORS),ot=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),dt=n.getParameter(n.MAX_SAMPLES),pt=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:u,textureFormatReadable:o,textureTypeReadable:l,precision:h,logarithmicDepthBuffer:S,reversedDepthBuffer:p,maxTextures:I,maxVertexTextures:H,maxTextureSize:Y,maxCubemapSize:R,maxAttributes:V,maxVertexUniforms:be,maxVaryings:ct,maxFragmentUniforms:ot,maxSamples:dt,samples:pt}}function WebGLClipping(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Plane,l=new Matrix3,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(S,p){const I=S.length!==0||p||i!==0||r;return r=p,i=S.length,I},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(S,p){t=f(S,p,0)},this.setState=function(S,p,I){const H=S.clippingPlanes,Y=S.clipIntersection,R=S.clipShadows,V=n.get(S);if(!r||H===null||H.length===0||s&&!R)s?f(null):h();else{const be=s?0:i,ct=be*4;let ot=V.clippingState||null;u.value=ot,ot=f(H,p,ct,I);for(let dt=0;dt!==ct;++dt)ot[dt]=t[dt];V.clippingState=ot,this.numIntersection=Y?this.numPlanes:0,this.numPlanes+=be}};function h(){u.value!==t&&(u.value=t,u.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(S,p,I,H){const Y=S!==null?S.length:0;let R=null;if(Y!==0){if(R=u.value,H!==!0||R===null){const V=I+Y*4,be=p.matrixWorldInverse;l.getNormalMatrix(be),(R===null||R.length<V)&&(R=new Float32Array(V));for(let ct=0,ot=I;ct!==Y;++ct,ot+=4)o.copy(S[ct]).applyMatrix4(be,l),o.normal.toArray(R,ot),R[ot+3]=o.constant}u.value=R,u.needsUpdate=!0}return e.numPlanes=Y,e.numIntersection=0,R}}const LOD_MIN=4,EXTRA_LOD_SIGMA=[.125,.215,.35,.446,.526,.582],MAX_SAMPLES=20,GGX_SAMPLES=256,_flatCamera=new OrthographicCamera,_clearColor=new Color$1;let _oldTarget=null,_oldActiveCubeFace=0,_oldActiveMipmapLevel=0,_oldXrEnabled=!1;const _origin=new Vector3;class PMREMGenerator{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){const{size:o=256,position:l=_origin}=s;_oldTarget=this._renderer.getRenderTarget(),_oldActiveCubeFace=this._renderer.getActiveCubeFace(),_oldActiveMipmapLevel=this._renderer.getActiveMipmapLevel(),_oldXrEnabled=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(e,i,r,u,l),t>0&&this._blur(u,0,0,t),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_getCubemapMaterial(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_getEquirectMaterial(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(_oldTarget,_oldActiveCubeFace,_oldActiveMipmapLevel),this._renderer.xr.enabled=_oldXrEnabled,e.scissorTest=!1,_setViewport(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===CubeReflectionMapping||e.mapping===CubeRefractionMapping?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_oldTarget=this._renderer.getRenderTarget(),_oldActiveCubeFace=this._renderer.getActiveCubeFace(),_oldActiveMipmapLevel=this._renderer.getActiveMipmapLevel(),_oldXrEnabled=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:LinearFilter,minFilter:LinearFilter,generateMipmaps:!1,type:HalfFloatType,format:RGBAFormat,colorSpace:LinearSRGBColorSpace,depthBuffer:!1},r=_createRenderTarget(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_createRenderTarget(e,t,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=_createPlanes(s)),this._blurMaterial=_getBlurShader(s,e,t),this._ggxMaterial=_getGGXShader(s,e,t)}return r}_compileMaterial(e){const t=new Mesh(new BufferGeometry,e);this._renderer.compile(t,_flatCamera)}_sceneToCubeUV(e,t,i,r,s){const u=new PerspectiveCamera(90,1,t,i),h=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],S=this._renderer,p=S.autoClear,I=S.toneMapping;S.getClearColor(_clearColor),S.toneMapping=NoToneMapping,S.autoClear=!1,S.state.buffers.depth.getReversed()&&(S.setRenderTarget(r),S.clearDepth(),S.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Mesh(new BoxGeometry,new MeshBasicMaterial({name:"PMREM.Background",side:BackSide,depthWrite:!1,depthTest:!1})));const Y=this._backgroundBox,R=Y.material;let V=!1;const be=e.background;be?be.isColor&&(R.color.copy(be),e.background=null,V=!0):(R.color.copy(_clearColor),V=!0);for(let ct=0;ct<6;ct++){const ot=ct%3;ot===0?(u.up.set(0,h[ct],0),u.position.set(s.x,s.y,s.z),u.lookAt(s.x+f[ct],s.y,s.z)):ot===1?(u.up.set(0,0,h[ct]),u.position.set(s.x,s.y,s.z),u.lookAt(s.x,s.y+f[ct],s.z)):(u.up.set(0,h[ct],0),u.position.set(s.x,s.y,s.z),u.lookAt(s.x,s.y,s.z+f[ct]));const dt=this._cubeSize;_setViewport(r,ot*dt,ct>2?dt:0,dt,dt),S.setRenderTarget(r),V&&S.render(Y,u),S.render(e,u)}S.toneMapping=I,S.autoClear=p,e.background=be}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===CubeReflectionMapping||e.mapping===CubeRefractionMapping;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=_getCubemapMaterial()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_getEquirectMaterial());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const l=s.uniforms;l.envMap.value=e;const u=this._cubeSize;_setViewport(t,0,0,3*u,2*u),i.setRenderTarget(t),i.render(o,_flatCamera)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,l=this._lodMeshes[i];l.material=o;const u=o.uniforms,h=i/(this._lodMeshes.length-1),f=t/(this._lodMeshes.length-1),S=Math.sqrt(h*h-f*f),p=0+h*1.25,I=S*p,{_lodMax:H}=this,Y=this._sizeLods[i],R=3*Y*(i>H-LOD_MIN?i-H+LOD_MIN:0),V=4*(this._cubeSize-Y);u.envMap.value=e.texture,u.roughness.value=I,u.mipInt.value=H-t,_setViewport(s,R,V,3*Y,2*Y),r.setRenderTarget(s),r.render(l,_flatCamera),u.envMap.value=s.texture,u.roughness.value=0,u.mipInt.value=H-i,_setViewport(e,R,V,3*Y,2*Y),r.setRenderTarget(e),r.render(l,_flatCamera)}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,l){const u=this._renderer,h=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&error("blur direction must be either latitudinal or longitudinal!");const f=3,S=this._lodMeshes[r];S.material=h;const p=h.uniforms,I=this._sizeLods[i]-1,H=isFinite(s)?Math.PI/(2*I):2*Math.PI/(2*MAX_SAMPLES-1),Y=s/H,R=isFinite(s)?1+Math.floor(f*Y):MAX_SAMPLES;R>MAX_SAMPLES&&warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${R} samples when the maximum is set to ${MAX_SAMPLES}`);const V=[];let be=0;for(let St=0;St<MAX_SAMPLES;++St){const at=St/Y,ut=Math.exp(-at*at/2);V.push(ut),St===0?be+=ut:St<R&&(be+=2*ut)}for(let St=0;St<V.length;St++)V[St]=V[St]/be;p.envMap.value=e.texture,p.samples.value=R,p.weights.value=V,p.latitudinal.value=o==="latitudinal",l&&(p.poleAxis.value=l);const{_lodMax:ct}=this;p.dTheta.value=H,p.mipInt.value=ct-i;const ot=this._sizeLods[r],dt=3*ot*(r>ct-LOD_MIN?r-ct+LOD_MIN:0),pt=4*(this._cubeSize-ot);_setViewport(t,dt,pt,3*ot,2*ot),u.setRenderTarget(t),u.render(S,_flatCamera)}}function _createPlanes(n){const e=[],t=[],i=[];let r=n;const s=n-LOD_MIN+1+EXTRA_LOD_SIGMA.length;for(let o=0;o<s;o++){const l=Math.pow(2,r);e.push(l);let u=1/l;o>n-LOD_MIN?u=EXTRA_LOD_SIGMA[o-n+LOD_MIN-1]:o===0&&(u=0),t.push(u);const h=1/(l-2),f=-h,S=1+h,p=[f,f,S,f,S,S,f,f,S,S,f,S],I=6,H=6,Y=3,R=2,V=1,be=new Float32Array(Y*H*I),ct=new Float32Array(R*H*I),ot=new Float32Array(V*H*I);for(let pt=0;pt<I;pt++){const St=pt%3*2/3-1,at=pt>2?0:-1,ut=[St,at,0,St+2/3,at,0,St+2/3,at+1,0,St,at,0,St+2/3,at+1,0,St,at+1,0];be.set(ut,Y*H*pt),ct.set(p,R*H*pt);const Gt=[pt,pt,pt,pt,pt,pt];ot.set(Gt,V*H*pt)}const dt=new BufferGeometry;dt.setAttribute("position",new BufferAttribute(be,Y)),dt.setAttribute("uv",new BufferAttribute(ct,R)),dt.setAttribute("faceIndex",new BufferAttribute(ot,V)),i.push(new Mesh(dt,null)),r>LOD_MIN&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function _createRenderTarget(n,e,t){const i=new WebGLRenderTarget(n,e,t);return i.texture.mapping=CubeUVReflectionMapping,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function _setViewport(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function _getGGXShader(n,e,t){return new ShaderMaterial({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:_getCommonVertexShader(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:NoBlending,depthTest:!1,depthWrite:!1})}function _getBlurShader(n,e,t){const i=new Float32Array(MAX_SAMPLES),r=new Vector3(0,1,0);return new ShaderMaterial({name:"SphericalGaussianBlur",defines:{n:MAX_SAMPLES,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:_getCommonVertexShader(),fragmentShader:`

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
		`,blending:NoBlending,depthTest:!1,depthWrite:!1})}function _getEquirectMaterial(){return new ShaderMaterial({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_getCommonVertexShader(),fragmentShader:`

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
		`,blending:NoBlending,depthTest:!1,depthWrite:!1})}function _getCubemapMaterial(){return new ShaderMaterial({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_getCommonVertexShader(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:NoBlending,depthTest:!1,depthWrite:!1})}function _getCommonVertexShader(){return`

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
	`}class WebGLCubeRenderTarget extends WebGLRenderTarget{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new CubeTexture(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new BoxGeometry(5,5,5),s=new ShaderMaterial({name:"CubemapFromEquirect",uniforms:cloneUniforms(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:BackSide,blending:NoBlending});s.uniforms.tEquirect.value=t;const o=new Mesh(r,s),l=t.minFilter;return t.minFilter===LinearMipmapLinearFilter&&(t.minFilter=LinearFilter),new CubeCamera(1,10,this).update(e,o),t.minFilter=l,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}function WebGLEnvironments(n){let e=new WeakMap,t=new WeakMap,i=null;function r(p,I=!1){return p==null?null:I?o(p):s(p)}function s(p){if(p&&p.isTexture){const I=p.mapping;if(I===EquirectangularReflectionMapping||I===EquirectangularRefractionMapping)if(e.has(p)){const H=e.get(p).texture;return l(H,p.mapping)}else{const H=p.image;if(H&&H.height>0){const Y=new WebGLCubeRenderTarget(H.height);return Y.fromEquirectangularTexture(n,p),e.set(p,Y),p.addEventListener("dispose",h),l(Y.texture,p.mapping)}else return null}}return p}function o(p){if(p&&p.isTexture){const I=p.mapping,H=I===EquirectangularReflectionMapping||I===EquirectangularRefractionMapping,Y=I===CubeReflectionMapping||I===CubeRefractionMapping;if(H||Y){let R=t.get(p);const V=R!==void 0?R.texture.pmremVersion:0;if(p.isRenderTargetTexture&&p.pmremVersion!==V)return i===null&&(i=new PMREMGenerator(n)),R=H?i.fromEquirectangular(p,R):i.fromCubemap(p,R),R.texture.pmremVersion=p.pmremVersion,t.set(p,R),R.texture;if(R!==void 0)return R.texture;{const be=p.image;return H&&be&&be.height>0||Y&&be&&u(be)?(i===null&&(i=new PMREMGenerator(n)),R=H?i.fromEquirectangular(p):i.fromCubemap(p),R.texture.pmremVersion=p.pmremVersion,t.set(p,R),p.addEventListener("dispose",f),R.texture):null}}}return p}function l(p,I){return I===EquirectangularReflectionMapping?p.mapping=CubeReflectionMapping:I===EquirectangularRefractionMapping&&(p.mapping=CubeRefractionMapping),p}function u(p){let I=0;const H=6;for(let Y=0;Y<H;Y++)p[Y]!==void 0&&I++;return I===H}function h(p){const I=p.target;I.removeEventListener("dispose",h);const H=e.get(I);H!==void 0&&(e.delete(I),H.dispose())}function f(p){const I=p.target;I.removeEventListener("dispose",f);const H=t.get(I);H!==void 0&&(t.delete(I),H.dispose())}function S(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:S}}function WebGLExtensions(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&warnOnce("WebGLRenderer: "+i+" extension not supported."),r}}}function WebGLGeometries(n,e,t,i){const r={},s=new WeakMap;function o(S){const p=S.target;p.index!==null&&e.remove(p.index);for(const H in p.attributes)e.remove(p.attributes[H]);p.removeEventListener("dispose",o),delete r[p.id];const I=s.get(p);I&&(e.remove(I),s.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function l(S,p){return r[p.id]===!0||(p.addEventListener("dispose",o),r[p.id]=!0,t.memory.geometries++),p}function u(S){const p=S.attributes;for(const I in p)e.update(p[I],n.ARRAY_BUFFER)}function h(S){const p=[],I=S.index,H=S.attributes.position;let Y=0;if(H===void 0)return;if(I!==null){const be=I.array;Y=I.version;for(let ct=0,ot=be.length;ct<ot;ct+=3){const dt=be[ct+0],pt=be[ct+1],St=be[ct+2];p.push(dt,pt,pt,St,St,dt)}}else{const be=H.array;Y=H.version;for(let ct=0,ot=be.length/3-1;ct<ot;ct+=3){const dt=ct+0,pt=ct+1,St=ct+2;p.push(dt,pt,pt,St,St,dt)}}const R=new(H.count>=65535?Uint32BufferAttribute:Uint16BufferAttribute)(p,1);R.version=Y;const V=s.get(S);V&&e.remove(V),s.set(S,R)}function f(S){const p=s.get(S);if(p){const I=S.index;I!==null&&p.version<I.version&&h(S)}else h(S);return s.get(S)}return{get:l,update:u,getWireframeAttribute:f}}function WebGLIndexedBufferRenderer(n,e,t){let i;function r(p){i=p}let s,o;function l(p){s=p.type,o=p.bytesPerElement}function u(p,I){n.drawElements(i,I,s,p*o),t.update(I,i,1)}function h(p,I,H){H!==0&&(n.drawElementsInstanced(i,I,s,p*o,H),t.update(I,i,H))}function f(p,I,H){if(H===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,I,0,s,p,0,H);let R=0;for(let V=0;V<H;V++)R+=I[V];t.update(R,i,1)}function S(p,I,H,Y){if(H===0)return;const R=e.get("WEBGL_multi_draw");if(R===null)for(let V=0;V<p.length;V++)h(p[V]/o,I[V],Y[V]);else{R.multiDrawElementsInstancedWEBGL(i,I,0,s,p,0,Y,0,H);let V=0;for(let be=0;be<H;be++)V+=I[be]*Y[be];t.update(V,i,1)}}this.setMode=r,this.setIndex=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=f,this.renderMultiDrawInstances=S}function WebGLInfo(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,l){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=l*(s/3);break;case n.LINES:t.lines+=l*(s/2);break;case n.LINE_STRIP:t.lines+=l*(s-1);break;case n.LINE_LOOP:t.lines+=l*s;break;case n.POINTS:t.points+=l*s;break;default:error("WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function WebGLMorphtargets(n,e,t){const i=new WeakMap,r=new Vector4;function s(o,l,u){const h=o.morphTargetInfluences,f=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,S=f!==void 0?f.length:0;let p=i.get(l);if(p===void 0||p.count!==S){let Gt=function(){at.dispose(),i.delete(l),l.removeEventListener("dispose",Gt)};var I=Gt;p!==void 0&&p.texture.dispose();const H=l.morphAttributes.position!==void 0,Y=l.morphAttributes.normal!==void 0,R=l.morphAttributes.color!==void 0,V=l.morphAttributes.position||[],be=l.morphAttributes.normal||[],ct=l.morphAttributes.color||[];let ot=0;H===!0&&(ot=1),Y===!0&&(ot=2),R===!0&&(ot=3);let dt=l.attributes.position.count*ot,pt=1;dt>e.maxTextureSize&&(pt=Math.ceil(dt/e.maxTextureSize),dt=e.maxTextureSize);const St=new Float32Array(dt*pt*4*S),at=new DataArrayTexture(St,dt,pt,S);at.type=FloatType,at.needsUpdate=!0;const ut=ot*4;for(let xt=0;xt<S;xt++){const Lt=V[xt],Rt=be[xt],Nt=ct[xt],Dt=dt*pt*4*xt;for(let Ut=0;Ut<Lt.count;Ut++){const Ct=Ut*ut;H===!0&&(r.fromBufferAttribute(Lt,Ut),St[Dt+Ct+0]=r.x,St[Dt+Ct+1]=r.y,St[Dt+Ct+2]=r.z,St[Dt+Ct+3]=0),Y===!0&&(r.fromBufferAttribute(Rt,Ut),St[Dt+Ct+4]=r.x,St[Dt+Ct+5]=r.y,St[Dt+Ct+6]=r.z,St[Dt+Ct+7]=0),R===!0&&(r.fromBufferAttribute(Nt,Ut),St[Dt+Ct+8]=r.x,St[Dt+Ct+9]=r.y,St[Dt+Ct+10]=r.z,St[Dt+Ct+11]=Nt.itemSize===4?r.w:1)}}p={count:S,texture:at,size:new Vector2(dt,pt)},i.set(l,p),l.addEventListener("dispose",Gt)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)u.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let H=0;for(let R=0;R<h.length;R++)H+=h[R];const Y=l.morphTargetsRelative?1:1-H;u.getUniforms().setValue(n,"morphTargetBaseInfluence",Y),u.getUniforms().setValue(n,"morphTargetInfluences",h)}u.getUniforms().setValue(n,"morphTargetsTexture",p.texture,t),u.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}return{update:s}}function WebGLObjects(n,e,t,i,r){let s=new WeakMap;function o(h){const f=r.render.frame,S=h.geometry,p=e.get(h,S);if(s.get(p)!==f&&(e.update(p),s.set(p,f)),h.isInstancedMesh&&(h.hasEventListener("dispose",u)===!1&&h.addEventListener("dispose",u),s.get(h)!==f&&(t.update(h.instanceMatrix,n.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,n.ARRAY_BUFFER),s.set(h,f))),h.isSkinnedMesh){const I=h.skeleton;s.get(I)!==f&&(I.update(),s.set(I,f))}return p}function l(){s=new WeakMap}function u(h){const f=h.target;f.removeEventListener("dispose",u),i.releaseStatesOfObject(f),t.remove(f.instanceMatrix),f.instanceColor!==null&&t.remove(f.instanceColor)}return{update:o,dispose:l}}const toneMappingMap={[LinearToneMapping]:"LINEAR_TONE_MAPPING",[ReinhardToneMapping]:"REINHARD_TONE_MAPPING",[CineonToneMapping]:"CINEON_TONE_MAPPING",[ACESFilmicToneMapping]:"ACES_FILMIC_TONE_MAPPING",[AgXToneMapping]:"AGX_TONE_MAPPING",[NeutralToneMapping]:"NEUTRAL_TONE_MAPPING",[CustomToneMapping]:"CUSTOM_TONE_MAPPING"};function WebGLOutput(n,e,t,i,r){const s=new WebGLRenderTarget(e,t,{type:n,depthBuffer:i,stencilBuffer:r}),o=new WebGLRenderTarget(e,t,{type:HalfFloatType,depthBuffer:!1,stencilBuffer:!1}),l=new BufferGeometry;l.setAttribute("position",new Float32BufferAttribute([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Float32BufferAttribute([0,2,0,0,2,0],2));const u=new RawShaderMaterial({uniforms:{tDiffuse:{value:null}},vertexShader:`
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

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new Mesh(l,u),f=new OrthographicCamera(-1,1,1,-1,0,1);let S=null,p=null,I=!1,H,Y=null,R=[],V=!1;this.setSize=function(be,ct){s.setSize(be,ct),o.setSize(be,ct);for(let ot=0;ot<R.length;ot++){const dt=R[ot];dt.setSize&&dt.setSize(be,ct)}},this.setEffects=function(be){R=be,V=R.length>0&&R[0].isRenderPass===!0;const ct=s.width,ot=s.height;for(let dt=0;dt<R.length;dt++){const pt=R[dt];pt.setSize&&pt.setSize(ct,ot)}},this.begin=function(be,ct){if(I||be.toneMapping===NoToneMapping&&R.length===0)return!1;if(Y=ct,ct!==null){const ot=ct.width,dt=ct.height;(s.width!==ot||s.height!==dt)&&this.setSize(ot,dt)}return V===!1&&be.setRenderTarget(s),H=be.toneMapping,be.toneMapping=NoToneMapping,!0},this.hasRenderPass=function(){return V},this.end=function(be,ct){be.toneMapping=H,I=!0;let ot=s,dt=o;for(let pt=0;pt<R.length;pt++){const St=R[pt];if(St.enabled!==!1&&(St.render(be,dt,ot,ct),St.needsSwap!==!1)){const at=ot;ot=dt,dt=at}}if(S!==be.outputColorSpace||p!==be.toneMapping){S=be.outputColorSpace,p=be.toneMapping,u.defines={},ColorManagement.getTransfer(S)===SRGBTransfer&&(u.defines.SRGB_TRANSFER="");const pt=toneMappingMap[p];pt&&(u.defines[pt]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=ot.texture,be.setRenderTarget(Y),be.render(h,f),Y=null,I=!1},this.isCompositing=function(){return I},this.dispose=function(){s.dispose(),o.dispose(),l.dispose(),u.dispose()}}const emptyTexture=new Texture,emptyShadowTexture=new DepthTexture(1,1),emptyArrayTexture=new DataArrayTexture,empty3dTexture=new Data3DTexture,emptyCubeTexture=new CubeTexture,arrayCacheF32=[],arrayCacheI32=[],mat4array=new Float32Array(16),mat3array=new Float32Array(9),mat2array=new Float32Array(4);function flatten(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=arrayCacheF32[r];if(s===void 0&&(s=new Float32Array(r),arrayCacheF32[r]=s),e!==0){i.toArray(s,0);for(let o=1,l=0;o!==e;++o)l+=t,n[o].toArray(s,l)}return s}function arraysEqual(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function copyArray(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function allocTexUnits(n,e){let t=arrayCacheI32[e];t===void 0&&(t=new Int32Array(e),arrayCacheI32[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function setValueV1f(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function setValueV2f(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(arraysEqual(t,e))return;n.uniform2fv(this.addr,e),copyArray(t,e)}}function setValueV3f(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(arraysEqual(t,e))return;n.uniform3fv(this.addr,e),copyArray(t,e)}}function setValueV4f(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(arraysEqual(t,e))return;n.uniform4fv(this.addr,e),copyArray(t,e)}}function setValueM2(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(arraysEqual(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),copyArray(t,e)}else{if(arraysEqual(t,i))return;mat2array.set(i),n.uniformMatrix2fv(this.addr,!1,mat2array),copyArray(t,i)}}function setValueM3(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(arraysEqual(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),copyArray(t,e)}else{if(arraysEqual(t,i))return;mat3array.set(i),n.uniformMatrix3fv(this.addr,!1,mat3array),copyArray(t,i)}}function setValueM4(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(arraysEqual(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),copyArray(t,e)}else{if(arraysEqual(t,i))return;mat4array.set(i),n.uniformMatrix4fv(this.addr,!1,mat4array),copyArray(t,i)}}function setValueV1i(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function setValueV2i(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(arraysEqual(t,e))return;n.uniform2iv(this.addr,e),copyArray(t,e)}}function setValueV3i(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(arraysEqual(t,e))return;n.uniform3iv(this.addr,e),copyArray(t,e)}}function setValueV4i(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(arraysEqual(t,e))return;n.uniform4iv(this.addr,e),copyArray(t,e)}}function setValueV1ui(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function setValueV2ui(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(arraysEqual(t,e))return;n.uniform2uiv(this.addr,e),copyArray(t,e)}}function setValueV3ui(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(arraysEqual(t,e))return;n.uniform3uiv(this.addr,e),copyArray(t,e)}}function setValueV4ui(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(arraysEqual(t,e))return;n.uniform4uiv(this.addr,e),copyArray(t,e)}}function setValueT1(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(emptyShadowTexture.compareFunction=t.isReversedDepthBuffer()?GreaterEqualCompare:LessEqualCompare,s=emptyShadowTexture):s=emptyTexture,t.setTexture2D(e||s,r)}function setValueT3D1(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||empty3dTexture,r)}function setValueT6(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||emptyCubeTexture,r)}function setValueT2DArray1(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||emptyArrayTexture,r)}function getSingularSetter(n){switch(n){case 5126:return setValueV1f;case 35664:return setValueV2f;case 35665:return setValueV3f;case 35666:return setValueV4f;case 35674:return setValueM2;case 35675:return setValueM3;case 35676:return setValueM4;case 5124:case 35670:return setValueV1i;case 35667:case 35671:return setValueV2i;case 35668:case 35672:return setValueV3i;case 35669:case 35673:return setValueV4i;case 5125:return setValueV1ui;case 36294:return setValueV2ui;case 36295:return setValueV3ui;case 36296:return setValueV4ui;case 35678:case 36198:case 36298:case 36306:case 35682:return setValueT1;case 35679:case 36299:case 36307:return setValueT3D1;case 35680:case 36300:case 36308:case 36293:return setValueT6;case 36289:case 36303:case 36311:case 36292:return setValueT2DArray1}}function setValueV1fArray(n,e){n.uniform1fv(this.addr,e)}function setValueV2fArray(n,e){const t=flatten(e,this.size,2);n.uniform2fv(this.addr,t)}function setValueV3fArray(n,e){const t=flatten(e,this.size,3);n.uniform3fv(this.addr,t)}function setValueV4fArray(n,e){const t=flatten(e,this.size,4);n.uniform4fv(this.addr,t)}function setValueM2Array(n,e){const t=flatten(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function setValueM3Array(n,e){const t=flatten(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function setValueM4Array(n,e){const t=flatten(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function setValueV1iArray(n,e){n.uniform1iv(this.addr,e)}function setValueV2iArray(n,e){n.uniform2iv(this.addr,e)}function setValueV3iArray(n,e){n.uniform3iv(this.addr,e)}function setValueV4iArray(n,e){n.uniform4iv(this.addr,e)}function setValueV1uiArray(n,e){n.uniform1uiv(this.addr,e)}function setValueV2uiArray(n,e){n.uniform2uiv(this.addr,e)}function setValueV3uiArray(n,e){n.uniform3uiv(this.addr,e)}function setValueV4uiArray(n,e){n.uniform4uiv(this.addr,e)}function setValueT1Array(n,e,t){const i=this.cache,r=e.length,s=allocTexUnits(t,r);arraysEqual(i,s)||(n.uniform1iv(this.addr,s),copyArray(i,s));let o;this.type===n.SAMPLER_2D_SHADOW?o=emptyShadowTexture:o=emptyTexture;for(let l=0;l!==r;++l)t.setTexture2D(e[l]||o,s[l])}function setValueT3DArray(n,e,t){const i=this.cache,r=e.length,s=allocTexUnits(t,r);arraysEqual(i,s)||(n.uniform1iv(this.addr,s),copyArray(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||empty3dTexture,s[o])}function setValueT6Array(n,e,t){const i=this.cache,r=e.length,s=allocTexUnits(t,r);arraysEqual(i,s)||(n.uniform1iv(this.addr,s),copyArray(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||emptyCubeTexture,s[o])}function setValueT2DArrayArray(n,e,t){const i=this.cache,r=e.length,s=allocTexUnits(t,r);arraysEqual(i,s)||(n.uniform1iv(this.addr,s),copyArray(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||emptyArrayTexture,s[o])}function getPureArraySetter(n){switch(n){case 5126:return setValueV1fArray;case 35664:return setValueV2fArray;case 35665:return setValueV3fArray;case 35666:return setValueV4fArray;case 35674:return setValueM2Array;case 35675:return setValueM3Array;case 35676:return setValueM4Array;case 5124:case 35670:return setValueV1iArray;case 35667:case 35671:return setValueV2iArray;case 35668:case 35672:return setValueV3iArray;case 35669:case 35673:return setValueV4iArray;case 5125:return setValueV1uiArray;case 36294:return setValueV2uiArray;case 36295:return setValueV3uiArray;case 36296:return setValueV4uiArray;case 35678:case 36198:case 36298:case 36306:case 35682:return setValueT1Array;case 35679:case 36299:case 36307:return setValueT3DArray;case 35680:case 36300:case 36308:case 36293:return setValueT6Array;case 36289:case 36303:case 36311:case 36292:return setValueT2DArrayArray}}class SingleUniform{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=getSingularSetter(t.type)}}class PureArrayUniform{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=getPureArraySetter(t.type)}}class StructuredUniform{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const l=r[s];l.setValue(e,t[l.id],i)}}}const RePathPart=/(\w+)(\])?(\[|\.)?/g;function addUniform(n,e){n.seq.push(e),n.map[e.id]=e}function parseUniform(n,e,t){const i=n.name,r=i.length;for(RePathPart.lastIndex=0;;){const s=RePathPart.exec(i),o=RePathPart.lastIndex;let l=s[1];const u=s[2]==="]",h=s[3];if(u&&(l=l|0),h===void 0||h==="["&&o+2===r){addUniform(t,h===void 0?new SingleUniform(l,n,e):new PureArrayUniform(l,n,e));break}else{let S=t.map[l];S===void 0&&(S=new StructuredUniform(l),addUniform(t,S)),t=S}}}class WebGLUniforms{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const l=e.getActiveUniform(t,o),u=e.getUniformLocation(t,l.name);parseUniform(l,u,this)}const r=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const l=t[s],u=i[l.id];u.needsUpdate!==!1&&l.setValue(e,u.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function WebGLShader(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const COMPLETION_STATUS_KHR=37297;let programIdCount=0;function handleSource(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const l=o+1;i.push(`${l===e?">":" "} ${l}: ${t[o]}`)}return i.join(`
`)}const _m0=new Matrix3;function getEncodingComponents(n){ColorManagement._getMatrix(_m0,ColorManagement.workingColorSpace,n);const e=`mat3( ${_m0.elements.map(t=>t.toFixed(4))} )`;switch(ColorManagement.getTransfer(n)){case LinearTransfer:return[e,"LinearTransferOETF"];case SRGBTransfer:return[e,"sRGBTransferOETF"];default:return warn("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function getShaderErrors(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const l=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+handleSource(n.getShaderSource(e),l)}else return s}function getTexelEncodingFunction(n,e){const t=getEncodingComponents(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const toneMappingFunctions={[LinearToneMapping]:"Linear",[ReinhardToneMapping]:"Reinhard",[CineonToneMapping]:"Cineon",[ACESFilmicToneMapping]:"ACESFilmic",[AgXToneMapping]:"AgX",[NeutralToneMapping]:"Neutral",[CustomToneMapping]:"Custom"};function getToneMappingFunction(n,e){const t=toneMappingFunctions[e];return t===void 0?(warn("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const _v0=new Vector3;function getLuminanceFunction(){ColorManagement.getLuminanceCoefficients(_v0);const n=_v0.x.toFixed(4),e=_v0.y.toFixed(4),t=_v0.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function generateVertexExtensions(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(filterEmptyLine).join(`
`)}function generateDefines(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function fetchAttributeLocations(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let l=1;s.type===n.FLOAT_MAT2&&(l=2),s.type===n.FLOAT_MAT3&&(l=3),s.type===n.FLOAT_MAT4&&(l=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:l}}return t}function filterEmptyLine(n){return n!==""}function replaceLightNums(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function replaceClippingPlaneNums(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const includePattern=/^[ \t]*#include +<([\w\d./]+)>/gm;function resolveIncludes(n){return n.replace(includePattern,includeReplacer)}const shaderChunkMap=new Map;function includeReplacer(n,e){let t=ShaderChunk[e];if(t===void 0){const i=shaderChunkMap.get(e);if(i!==void 0)t=ShaderChunk[i],warn('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return resolveIncludes(t)}const unrollLoopPattern=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function unrollLoops(n){return n.replace(unrollLoopPattern,loopReplacer)}function loopReplacer(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function generatePrecision(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const shadowMapTypeDefines={[PCFShadowMap]:"SHADOWMAP_TYPE_PCF",[VSMShadowMap]:"SHADOWMAP_TYPE_VSM"};function generateShadowMapTypeDefine(n){return shadowMapTypeDefines[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const envMapTypeDefines={[CubeReflectionMapping]:"ENVMAP_TYPE_CUBE",[CubeRefractionMapping]:"ENVMAP_TYPE_CUBE",[CubeUVReflectionMapping]:"ENVMAP_TYPE_CUBE_UV"};function generateEnvMapTypeDefine(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":envMapTypeDefines[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const envMapModeDefines={[CubeRefractionMapping]:"ENVMAP_MODE_REFRACTION"};function generateEnvMapModeDefine(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":envMapModeDefines[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const envMapBlendingDefines={[MultiplyOperation]:"ENVMAP_BLENDING_MULTIPLY",[MixOperation]:"ENVMAP_BLENDING_MIX",[AddOperation]:"ENVMAP_BLENDING_ADD"};function generateEnvMapBlendingDefine(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":envMapBlendingDefines[n.combine]||"ENVMAP_BLENDING_NONE"}function generateCubeUVSize(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function WebGLProgram(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,l=t.fragmentShader;const u=generateShadowMapTypeDefine(t),h=generateEnvMapTypeDefine(t),f=generateEnvMapModeDefine(t),S=generateEnvMapBlendingDefine(t),p=generateCubeUVSize(t),I=generateVertexExtensions(t),H=generateDefines(s),Y=r.createProgram();let R,V,be=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(R=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,H].filter(filterEmptyLine).join(`
`),R.length>0&&(R+=`
`),V=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,H].filter(filterEmptyLine).join(`
`),V.length>0&&(V+=`
`)):(R=[generatePrecision(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,H,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(filterEmptyLine).join(`
`),V=[generatePrecision(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,H,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",t.envMap?"#define "+S:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==NoToneMapping?"#define TONE_MAPPING":"",t.toneMapping!==NoToneMapping?ShaderChunk.tonemapping_pars_fragment:"",t.toneMapping!==NoToneMapping?getToneMappingFunction("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ShaderChunk.colorspace_pars_fragment,getTexelEncodingFunction("linearToOutputTexel",t.outputColorSpace),getLuminanceFunction(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(filterEmptyLine).join(`
`)),o=resolveIncludes(o),o=replaceLightNums(o,t),o=replaceClippingPlaneNums(o,t),l=resolveIncludes(l),l=replaceLightNums(l,t),l=replaceClippingPlaneNums(l,t),o=unrollLoops(o),l=unrollLoops(l),t.isRawShaderMaterial!==!0&&(be=`#version 300 es
`,R=[I,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+R,V=["#define varying in",t.glslVersion===GLSL3?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===GLSL3?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+V);const ct=be+R+o,ot=be+V+l,dt=WebGLShader(r,r.VERTEX_SHADER,ct),pt=WebGLShader(r,r.FRAGMENT_SHADER,ot);r.attachShader(Y,dt),r.attachShader(Y,pt),t.index0AttributeName!==void 0?r.bindAttribLocation(Y,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(Y,0,"position"),r.linkProgram(Y);function St(xt){if(n.debug.checkShaderErrors){const Lt=r.getProgramInfoLog(Y)||"",Rt=r.getShaderInfoLog(dt)||"",Nt=r.getShaderInfoLog(pt)||"",Dt=Lt.trim(),Ut=Rt.trim(),Ct=Nt.trim();let Ot=!0,qt=!0;if(r.getProgramParameter(Y,r.LINK_STATUS)===!1)if(Ot=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,Y,dt,pt);else{const Zt=getShaderErrors(r,dt,"vertex"),Qt=getShaderErrors(r,pt,"fragment");error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(Y,r.VALIDATE_STATUS)+`

Material Name: `+xt.name+`
Material Type: `+xt.type+`

Program Info Log: `+Dt+`
`+Zt+`
`+Qt)}else Dt!==""?warn("WebGLProgram: Program Info Log:",Dt):(Ut===""||Ct==="")&&(qt=!1);qt&&(xt.diagnostics={runnable:Ot,programLog:Dt,vertexShader:{log:Ut,prefix:R},fragmentShader:{log:Ct,prefix:V}})}r.deleteShader(dt),r.deleteShader(pt),at=new WebGLUniforms(r,Y),ut=fetchAttributeLocations(r,Y)}let at;this.getUniforms=function(){return at===void 0&&St(this),at};let ut;this.getAttributes=function(){return ut===void 0&&St(this),ut};let Gt=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return Gt===!1&&(Gt=r.getProgramParameter(Y,COMPLETION_STATUS_KHR)),Gt},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(Y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=programIdCount++,this.cacheKey=e,this.usedTimes=1,this.program=Y,this.vertexShader=dt,this.fragmentShader=pt,this}let _id=0;class WebGLShaderCache{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new WebGLShaderStage(e),t.set(e,i)),i}}class WebGLShaderStage{constructor(e){this.id=_id++,this.code=e,this.usedTimes=0}}function WebGLPrograms(n,e,t,i,r,s){const o=new Layers,l=new WebGLShaderCache,u=new Set,h=[],f=new Map,S=i.logarithmicDepthBuffer;let p=i.precision;const I={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function H(at){return u.add(at),at===0?"uv":`uv${at}`}function Y(at,ut,Gt,xt,Lt){const Rt=xt.fog,Nt=Lt.geometry,Dt=at.isMeshStandardMaterial||at.isMeshLambertMaterial||at.isMeshPhongMaterial?xt.environment:null,Ut=at.isMeshStandardMaterial||at.isMeshLambertMaterial&&!at.envMap||at.isMeshPhongMaterial&&!at.envMap,Ct=e.get(at.envMap||Dt,Ut),Ot=Ct&&Ct.mapping===CubeUVReflectionMapping?Ct.image.height:null,qt=I[at.type];at.precision!==null&&(p=i.getMaxPrecision(at.precision),p!==at.precision&&warn("WebGLProgram.getParameters:",at.precision,"not supported, using",p,"instead."));const Zt=Nt.morphAttributes.position||Nt.morphAttributes.normal||Nt.morphAttributes.color,Qt=Zt!==void 0?Zt.length:0;let Jt=0;Nt.morphAttributes.position!==void 0&&(Jt=1),Nt.morphAttributes.normal!==void 0&&(Jt=2),Nt.morphAttributes.color!==void 0&&(Jt=3);let un,Tn,dn,Wt;if(qt){const An=ShaderLib[qt];un=An.vertexShader,Tn=An.fragmentShader}else un=at.vertexShader,Tn=at.fragmentShader,l.update(at),dn=l.getVertexShaderID(at),Wt=l.getFragmentShaderID(at);const Yt=n.getRenderTarget(),jt=n.state.buffers.depth.getReversed(),pn=Lt.isInstancedMesh===!0,hn=Lt.isBatchedMesh===!0,fn=!!at.map,Ln=!!at.matcap,vn=!!Ct,Sn=!!at.aoMap,Mn=!!at.lightMap,mn=!!at.bumpMap,Dn=!!at.normalMap,vt=!!at.displacementMap,In=!!at.emissiveMap,yn=!!at.metalnessMap,En=!!at.roughnessMap,rn=at.anisotropy>0,ht=at.clearcoat>0,xe=at.dispersion>0,d=at.iridescence>0,ft=at.sheen>0,_t=at.transmission>0,Mt=rn&&!!at.anisotropyMap,wt=ht&&!!at.clearcoatMap,ee=ht&&!!at.clearcoatNormalMap,gt=ht&&!!at.clearcoatRoughnessMap,Tt=d&&!!at.iridescenceMap,yt=d&&!!at.iridescenceThicknessMap,bt=ft&&!!at.sheenColorMap,Pt=ft&&!!at.sheenRoughnessMap,At=!!at.specularMap,Bt=!!at.specularColorMap,Vt=!!at.specularIntensityMap,mt=_t&&!!at.transmissionMap,$t=_t&&!!at.thicknessMap,zt=!!at.gradientMap,Kt=!!at.alphaMap,Xt=at.alphaTest>0,Ht=!!at.alphaHash,sn=!!at.extensions;let gn=NoToneMapping;at.toneMapped&&(Yt===null||Yt.isXRRenderTarget===!0)&&(gn=n.toneMapping);const Pn={shaderID:qt,shaderType:at.type,shaderName:at.name,vertexShader:un,fragmentShader:Tn,defines:at.defines,customVertexShaderID:dn,customFragmentShaderID:Wt,isRawShaderMaterial:at.isRawShaderMaterial===!0,glslVersion:at.glslVersion,precision:p,batching:hn,batchingColor:hn&&Lt._colorsTexture!==null,instancing:pn,instancingColor:pn&&Lt.instanceColor!==null,instancingMorph:pn&&Lt.morphTexture!==null,outputColorSpace:Yt===null?n.outputColorSpace:Yt.isXRRenderTarget===!0?Yt.texture.colorSpace:LinearSRGBColorSpace,alphaToCoverage:!!at.alphaToCoverage,map:fn,matcap:Ln,envMap:vn,envMapMode:vn&&Ct.mapping,envMapCubeUVHeight:Ot,aoMap:Sn,lightMap:Mn,bumpMap:mn,normalMap:Dn,displacementMap:vt,emissiveMap:In,normalMapObjectSpace:Dn&&at.normalMapType===ObjectSpaceNormalMap,normalMapTangentSpace:Dn&&at.normalMapType===TangentSpaceNormalMap,metalnessMap:yn,roughnessMap:En,anisotropy:rn,anisotropyMap:Mt,clearcoat:ht,clearcoatMap:wt,clearcoatNormalMap:ee,clearcoatRoughnessMap:gt,dispersion:xe,iridescence:d,iridescenceMap:Tt,iridescenceThicknessMap:yt,sheen:ft,sheenColorMap:bt,sheenRoughnessMap:Pt,specularMap:At,specularColorMap:Bt,specularIntensityMap:Vt,transmission:_t,transmissionMap:mt,thicknessMap:$t,gradientMap:zt,opaque:at.transparent===!1&&at.blending===NormalBlending&&at.alphaToCoverage===!1,alphaMap:Kt,alphaTest:Xt,alphaHash:Ht,combine:at.combine,mapUv:fn&&H(at.map.channel),aoMapUv:Sn&&H(at.aoMap.channel),lightMapUv:Mn&&H(at.lightMap.channel),bumpMapUv:mn&&H(at.bumpMap.channel),normalMapUv:Dn&&H(at.normalMap.channel),displacementMapUv:vt&&H(at.displacementMap.channel),emissiveMapUv:In&&H(at.emissiveMap.channel),metalnessMapUv:yn&&H(at.metalnessMap.channel),roughnessMapUv:En&&H(at.roughnessMap.channel),anisotropyMapUv:Mt&&H(at.anisotropyMap.channel),clearcoatMapUv:wt&&H(at.clearcoatMap.channel),clearcoatNormalMapUv:ee&&H(at.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:gt&&H(at.clearcoatRoughnessMap.channel),iridescenceMapUv:Tt&&H(at.iridescenceMap.channel),iridescenceThicknessMapUv:yt&&H(at.iridescenceThicknessMap.channel),sheenColorMapUv:bt&&H(at.sheenColorMap.channel),sheenRoughnessMapUv:Pt&&H(at.sheenRoughnessMap.channel),specularMapUv:At&&H(at.specularMap.channel),specularColorMapUv:Bt&&H(at.specularColorMap.channel),specularIntensityMapUv:Vt&&H(at.specularIntensityMap.channel),transmissionMapUv:mt&&H(at.transmissionMap.channel),thicknessMapUv:$t&&H(at.thicknessMap.channel),alphaMapUv:Kt&&H(at.alphaMap.channel),vertexTangents:!!Nt.attributes.tangent&&(Dn||rn),vertexColors:at.vertexColors,vertexAlphas:at.vertexColors===!0&&!!Nt.attributes.color&&Nt.attributes.color.itemSize===4,pointsUvs:Lt.isPoints===!0&&!!Nt.attributes.uv&&(fn||Kt),fog:!!Rt,useFog:at.fog===!0,fogExp2:!!Rt&&Rt.isFogExp2,flatShading:at.wireframe===!1&&(at.flatShading===!0||Nt.attributes.normal===void 0&&Dn===!1&&(at.isMeshLambertMaterial||at.isMeshPhongMaterial||at.isMeshStandardMaterial||at.isMeshPhysicalMaterial)),sizeAttenuation:at.sizeAttenuation===!0,logarithmicDepthBuffer:S,reversedDepthBuffer:jt,skinning:Lt.isSkinnedMesh===!0,morphTargets:Nt.morphAttributes.position!==void 0,morphNormals:Nt.morphAttributes.normal!==void 0,morphColors:Nt.morphAttributes.color!==void 0,morphTargetsCount:Qt,morphTextureStride:Jt,numDirLights:ut.directional.length,numPointLights:ut.point.length,numSpotLights:ut.spot.length,numSpotLightMaps:ut.spotLightMap.length,numRectAreaLights:ut.rectArea.length,numHemiLights:ut.hemi.length,numDirLightShadows:ut.directionalShadowMap.length,numPointLightShadows:ut.pointShadowMap.length,numSpotLightShadows:ut.spotShadowMap.length,numSpotLightShadowsWithMaps:ut.numSpotLightShadowsWithMaps,numLightProbes:ut.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:at.dithering,shadowMapEnabled:n.shadowMap.enabled&&Gt.length>0,shadowMapType:n.shadowMap.type,toneMapping:gn,decodeVideoTexture:fn&&at.map.isVideoTexture===!0&&ColorManagement.getTransfer(at.map.colorSpace)===SRGBTransfer,decodeVideoTextureEmissive:In&&at.emissiveMap.isVideoTexture===!0&&ColorManagement.getTransfer(at.emissiveMap.colorSpace)===SRGBTransfer,premultipliedAlpha:at.premultipliedAlpha,doubleSided:at.side===DoubleSide,flipSided:at.side===BackSide,useDepthPacking:at.depthPacking>=0,depthPacking:at.depthPacking||0,index0AttributeName:at.index0AttributeName,extensionClipCullDistance:sn&&at.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(sn&&at.extensions.multiDraw===!0||hn)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:at.customProgramCacheKey()};return Pn.vertexUv1s=u.has(1),Pn.vertexUv2s=u.has(2),Pn.vertexUv3s=u.has(3),u.clear(),Pn}function R(at){const ut=[];if(at.shaderID?ut.push(at.shaderID):(ut.push(at.customVertexShaderID),ut.push(at.customFragmentShaderID)),at.defines!==void 0)for(const Gt in at.defines)ut.push(Gt),ut.push(at.defines[Gt]);return at.isRawShaderMaterial===!1&&(V(ut,at),be(ut,at),ut.push(n.outputColorSpace)),ut.push(at.customProgramCacheKey),ut.join()}function V(at,ut){at.push(ut.precision),at.push(ut.outputColorSpace),at.push(ut.envMapMode),at.push(ut.envMapCubeUVHeight),at.push(ut.mapUv),at.push(ut.alphaMapUv),at.push(ut.lightMapUv),at.push(ut.aoMapUv),at.push(ut.bumpMapUv),at.push(ut.normalMapUv),at.push(ut.displacementMapUv),at.push(ut.emissiveMapUv),at.push(ut.metalnessMapUv),at.push(ut.roughnessMapUv),at.push(ut.anisotropyMapUv),at.push(ut.clearcoatMapUv),at.push(ut.clearcoatNormalMapUv),at.push(ut.clearcoatRoughnessMapUv),at.push(ut.iridescenceMapUv),at.push(ut.iridescenceThicknessMapUv),at.push(ut.sheenColorMapUv),at.push(ut.sheenRoughnessMapUv),at.push(ut.specularMapUv),at.push(ut.specularColorMapUv),at.push(ut.specularIntensityMapUv),at.push(ut.transmissionMapUv),at.push(ut.thicknessMapUv),at.push(ut.combine),at.push(ut.fogExp2),at.push(ut.sizeAttenuation),at.push(ut.morphTargetsCount),at.push(ut.morphAttributeCount),at.push(ut.numDirLights),at.push(ut.numPointLights),at.push(ut.numSpotLights),at.push(ut.numSpotLightMaps),at.push(ut.numHemiLights),at.push(ut.numRectAreaLights),at.push(ut.numDirLightShadows),at.push(ut.numPointLightShadows),at.push(ut.numSpotLightShadows),at.push(ut.numSpotLightShadowsWithMaps),at.push(ut.numLightProbes),at.push(ut.shadowMapType),at.push(ut.toneMapping),at.push(ut.numClippingPlanes),at.push(ut.numClipIntersection),at.push(ut.depthPacking)}function be(at,ut){o.disableAll(),ut.instancing&&o.enable(0),ut.instancingColor&&o.enable(1),ut.instancingMorph&&o.enable(2),ut.matcap&&o.enable(3),ut.envMap&&o.enable(4),ut.normalMapObjectSpace&&o.enable(5),ut.normalMapTangentSpace&&o.enable(6),ut.clearcoat&&o.enable(7),ut.iridescence&&o.enable(8),ut.alphaTest&&o.enable(9),ut.vertexColors&&o.enable(10),ut.vertexAlphas&&o.enable(11),ut.vertexUv1s&&o.enable(12),ut.vertexUv2s&&o.enable(13),ut.vertexUv3s&&o.enable(14),ut.vertexTangents&&o.enable(15),ut.anisotropy&&o.enable(16),ut.alphaHash&&o.enable(17),ut.batching&&o.enable(18),ut.dispersion&&o.enable(19),ut.batchingColor&&o.enable(20),ut.gradientMap&&o.enable(21),at.push(o.mask),o.disableAll(),ut.fog&&o.enable(0),ut.useFog&&o.enable(1),ut.flatShading&&o.enable(2),ut.logarithmicDepthBuffer&&o.enable(3),ut.reversedDepthBuffer&&o.enable(4),ut.skinning&&o.enable(5),ut.morphTargets&&o.enable(6),ut.morphNormals&&o.enable(7),ut.morphColors&&o.enable(8),ut.premultipliedAlpha&&o.enable(9),ut.shadowMapEnabled&&o.enable(10),ut.doubleSided&&o.enable(11),ut.flipSided&&o.enable(12),ut.useDepthPacking&&o.enable(13),ut.dithering&&o.enable(14),ut.transmission&&o.enable(15),ut.sheen&&o.enable(16),ut.opaque&&o.enable(17),ut.pointsUvs&&o.enable(18),ut.decodeVideoTexture&&o.enable(19),ut.decodeVideoTextureEmissive&&o.enable(20),ut.alphaToCoverage&&o.enable(21),at.push(o.mask)}function ct(at){const ut=I[at.type];let Gt;if(ut){const xt=ShaderLib[ut];Gt=UniformsUtils.clone(xt.uniforms)}else Gt=at.uniforms;return Gt}function ot(at,ut){let Gt=f.get(ut);return Gt!==void 0?++Gt.usedTimes:(Gt=new WebGLProgram(n,ut,at,r),h.push(Gt),f.set(ut,Gt)),Gt}function dt(at){if(--at.usedTimes===0){const ut=h.indexOf(at);h[ut]=h[h.length-1],h.pop(),f.delete(at.cacheKey),at.destroy()}}function pt(at){l.remove(at)}function St(){l.dispose()}return{getParameters:Y,getProgramCacheKey:R,getUniforms:ct,acquireProgram:ot,releaseProgram:dt,releaseShaderCache:pt,programs:h,dispose:St}}function WebGLProperties(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let l=n.get(o);return l===void 0&&(l={},n.set(o,l)),l}function i(o){n.delete(o)}function r(o,l,u){n.get(o)[l]=u}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function painterSortStable(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function reversePainterSortStable(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function WebGLRenderList(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(p){let I=0;return p.isInstancedMesh&&(I+=2),p.isSkinnedMesh&&(I+=1),I}function l(p,I,H,Y,R,V){let be=n[e];return be===void 0?(be={id:p.id,object:p,geometry:I,material:H,materialVariant:o(p),groupOrder:Y,renderOrder:p.renderOrder,z:R,group:V},n[e]=be):(be.id=p.id,be.object=p,be.geometry=I,be.material=H,be.materialVariant=o(p),be.groupOrder=Y,be.renderOrder=p.renderOrder,be.z=R,be.group=V),e++,be}function u(p,I,H,Y,R,V){const be=l(p,I,H,Y,R,V);H.transmission>0?i.push(be):H.transparent===!0?r.push(be):t.push(be)}function h(p,I,H,Y,R,V){const be=l(p,I,H,Y,R,V);H.transmission>0?i.unshift(be):H.transparent===!0?r.unshift(be):t.unshift(be)}function f(p,I){t.length>1&&t.sort(p||painterSortStable),i.length>1&&i.sort(I||reversePainterSortStable),r.length>1&&r.sort(I||reversePainterSortStable)}function S(){for(let p=e,I=n.length;p<I;p++){const H=n[p];if(H.id===null)break;H.id=null,H.object=null,H.geometry=null,H.material=null,H.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:u,unshift:h,finish:S,sort:f}}function WebGLRenderLists(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new WebGLRenderList,n.set(i,[o])):r>=s.length?(o=new WebGLRenderList,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function UniformsCache(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Vector3,color:new Color$1};break;case"SpotLight":t={position:new Vector3,direction:new Vector3,color:new Color$1,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Vector3,color:new Color$1,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Vector3,skyColor:new Color$1,groundColor:new Color$1};break;case"RectAreaLight":t={color:new Color$1,position:new Vector3,halfWidth:new Vector3,halfHeight:new Vector3};break}return n[e.id]=t,t}}}function ShadowUniformsCache(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vector2};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vector2};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vector2,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let nextVersion=0;function shadowCastingAndTexturingLightsFirst(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function WebGLLights(n){const e=new UniformsCache,t=ShadowUniformsCache(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new Vector3);const r=new Vector3,s=new Matrix4,o=new Matrix4;function l(h){let f=0,S=0,p=0;for(let ut=0;ut<9;ut++)i.probe[ut].set(0,0,0);let I=0,H=0,Y=0,R=0,V=0,be=0,ct=0,ot=0,dt=0,pt=0,St=0;h.sort(shadowCastingAndTexturingLightsFirst);for(let ut=0,Gt=h.length;ut<Gt;ut++){const xt=h[ut],Lt=xt.color,Rt=xt.intensity,Nt=xt.distance;let Dt=null;if(xt.shadow&&xt.shadow.map&&(xt.shadow.map.texture.format===RGFormat?Dt=xt.shadow.map.texture:Dt=xt.shadow.map.depthTexture||xt.shadow.map.texture),xt.isAmbientLight)f+=Lt.r*Rt,S+=Lt.g*Rt,p+=Lt.b*Rt;else if(xt.isLightProbe){for(let Ut=0;Ut<9;Ut++)i.probe[Ut].addScaledVector(xt.sh.coefficients[Ut],Rt);St++}else if(xt.isDirectionalLight){const Ut=e.get(xt);if(Ut.color.copy(xt.color).multiplyScalar(xt.intensity),xt.castShadow){const Ct=xt.shadow,Ot=t.get(xt);Ot.shadowIntensity=Ct.intensity,Ot.shadowBias=Ct.bias,Ot.shadowNormalBias=Ct.normalBias,Ot.shadowRadius=Ct.radius,Ot.shadowMapSize=Ct.mapSize,i.directionalShadow[I]=Ot,i.directionalShadowMap[I]=Dt,i.directionalShadowMatrix[I]=xt.shadow.matrix,be++}i.directional[I]=Ut,I++}else if(xt.isSpotLight){const Ut=e.get(xt);Ut.position.setFromMatrixPosition(xt.matrixWorld),Ut.color.copy(Lt).multiplyScalar(Rt),Ut.distance=Nt,Ut.coneCos=Math.cos(xt.angle),Ut.penumbraCos=Math.cos(xt.angle*(1-xt.penumbra)),Ut.decay=xt.decay,i.spot[Y]=Ut;const Ct=xt.shadow;if(xt.map&&(i.spotLightMap[dt]=xt.map,dt++,Ct.updateMatrices(xt),xt.castShadow&&pt++),i.spotLightMatrix[Y]=Ct.matrix,xt.castShadow){const Ot=t.get(xt);Ot.shadowIntensity=Ct.intensity,Ot.shadowBias=Ct.bias,Ot.shadowNormalBias=Ct.normalBias,Ot.shadowRadius=Ct.radius,Ot.shadowMapSize=Ct.mapSize,i.spotShadow[Y]=Ot,i.spotShadowMap[Y]=Dt,ot++}Y++}else if(xt.isRectAreaLight){const Ut=e.get(xt);Ut.color.copy(Lt).multiplyScalar(Rt),Ut.halfWidth.set(xt.width*.5,0,0),Ut.halfHeight.set(0,xt.height*.5,0),i.rectArea[R]=Ut,R++}else if(xt.isPointLight){const Ut=e.get(xt);if(Ut.color.copy(xt.color).multiplyScalar(xt.intensity),Ut.distance=xt.distance,Ut.decay=xt.decay,xt.castShadow){const Ct=xt.shadow,Ot=t.get(xt);Ot.shadowIntensity=Ct.intensity,Ot.shadowBias=Ct.bias,Ot.shadowNormalBias=Ct.normalBias,Ot.shadowRadius=Ct.radius,Ot.shadowMapSize=Ct.mapSize,Ot.shadowCameraNear=Ct.camera.near,Ot.shadowCameraFar=Ct.camera.far,i.pointShadow[H]=Ot,i.pointShadowMap[H]=Dt,i.pointShadowMatrix[H]=xt.shadow.matrix,ct++}i.point[H]=Ut,H++}else if(xt.isHemisphereLight){const Ut=e.get(xt);Ut.skyColor.copy(xt.color).multiplyScalar(Rt),Ut.groundColor.copy(xt.groundColor).multiplyScalar(Rt),i.hemi[V]=Ut,V++}}R>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=UniformsLib.LTC_FLOAT_1,i.rectAreaLTC2=UniformsLib.LTC_FLOAT_2):(i.rectAreaLTC1=UniformsLib.LTC_HALF_1,i.rectAreaLTC2=UniformsLib.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=S,i.ambient[2]=p;const at=i.hash;(at.directionalLength!==I||at.pointLength!==H||at.spotLength!==Y||at.rectAreaLength!==R||at.hemiLength!==V||at.numDirectionalShadows!==be||at.numPointShadows!==ct||at.numSpotShadows!==ot||at.numSpotMaps!==dt||at.numLightProbes!==St)&&(i.directional.length=I,i.spot.length=Y,i.rectArea.length=R,i.point.length=H,i.hemi.length=V,i.directionalShadow.length=be,i.directionalShadowMap.length=be,i.pointShadow.length=ct,i.pointShadowMap.length=ct,i.spotShadow.length=ot,i.spotShadowMap.length=ot,i.directionalShadowMatrix.length=be,i.pointShadowMatrix.length=ct,i.spotLightMatrix.length=ot+dt-pt,i.spotLightMap.length=dt,i.numSpotLightShadowsWithMaps=pt,i.numLightProbes=St,at.directionalLength=I,at.pointLength=H,at.spotLength=Y,at.rectAreaLength=R,at.hemiLength=V,at.numDirectionalShadows=be,at.numPointShadows=ct,at.numSpotShadows=ot,at.numSpotMaps=dt,at.numLightProbes=St,i.version=nextVersion++)}function u(h,f){let S=0,p=0,I=0,H=0,Y=0;const R=f.matrixWorldInverse;for(let V=0,be=h.length;V<be;V++){const ct=h[V];if(ct.isDirectionalLight){const ot=i.directional[S];ot.direction.setFromMatrixPosition(ct.matrixWorld),r.setFromMatrixPosition(ct.target.matrixWorld),ot.direction.sub(r),ot.direction.transformDirection(R),S++}else if(ct.isSpotLight){const ot=i.spot[I];ot.position.setFromMatrixPosition(ct.matrixWorld),ot.position.applyMatrix4(R),ot.direction.setFromMatrixPosition(ct.matrixWorld),r.setFromMatrixPosition(ct.target.matrixWorld),ot.direction.sub(r),ot.direction.transformDirection(R),I++}else if(ct.isRectAreaLight){const ot=i.rectArea[H];ot.position.setFromMatrixPosition(ct.matrixWorld),ot.position.applyMatrix4(R),o.identity(),s.copy(ct.matrixWorld),s.premultiply(R),o.extractRotation(s),ot.halfWidth.set(ct.width*.5,0,0),ot.halfHeight.set(0,ct.height*.5,0),ot.halfWidth.applyMatrix4(o),ot.halfHeight.applyMatrix4(o),H++}else if(ct.isPointLight){const ot=i.point[p];ot.position.setFromMatrixPosition(ct.matrixWorld),ot.position.applyMatrix4(R),p++}else if(ct.isHemisphereLight){const ot=i.hemi[Y];ot.direction.setFromMatrixPosition(ct.matrixWorld),ot.direction.transformDirection(R),Y++}}}return{setup:l,setupView:u,state:i}}function WebGLRenderState(n){const e=new WebGLLights(n),t=[],i=[];function r(f){h.camera=f,t.length=0,i.length=0}function s(f){t.push(f)}function o(f){i.push(f)}function l(){e.setup(t)}function u(f){e.setupView(t,f)}const h={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:h,setupLights:l,setupLightsView:u,pushLight:s,pushShadow:o}}function WebGLRenderStates(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let l;return o===void 0?(l=new WebGLRenderState(n),e.set(r,[l])):s>=o.length?(l=new WebGLRenderState(n),o.push(l)):l=o[s],l}function i(){e=new WeakMap}return{get:t,dispose:i}}const vertex=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fragment=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,_cubeDirections=[new Vector3(1,0,0),new Vector3(-1,0,0),new Vector3(0,1,0),new Vector3(0,-1,0),new Vector3(0,0,1),new Vector3(0,0,-1)],_cubeUps=[new Vector3(0,-1,0),new Vector3(0,-1,0),new Vector3(0,0,1),new Vector3(0,0,-1),new Vector3(0,-1,0),new Vector3(0,-1,0)],_projScreenMatrix=new Matrix4,_lightPositionWorld=new Vector3,_lookTarget=new Vector3;function WebGLShadowMap(n,e,t){let i=new Frustum;const r=new Vector2,s=new Vector2,o=new Vector4,l=new MeshDepthMaterial,u=new MeshDistanceMaterial,h={},f=t.maxTextureSize,S={[FrontSide]:BackSide,[BackSide]:FrontSide,[DoubleSide]:DoubleSide},p=new ShaderMaterial({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Vector2},radius:{value:4}},vertexShader:vertex,fragmentShader:fragment}),I=p.clone();I.defines.HORIZONTAL_PASS=1;const H=new BufferGeometry;H.setAttribute("position",new BufferAttribute(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const Y=new Mesh(H,p),R=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=PCFShadowMap;let V=this.type;this.render=function(pt,St,at){if(R.enabled===!1||R.autoUpdate===!1&&R.needsUpdate===!1||pt.length===0)return;this.type===PCFSoftShadowMap&&(warn("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=PCFShadowMap);const ut=n.getRenderTarget(),Gt=n.getActiveCubeFace(),xt=n.getActiveMipmapLevel(),Lt=n.state;Lt.setBlending(NoBlending),Lt.buffers.depth.getReversed()===!0?Lt.buffers.color.setClear(0,0,0,0):Lt.buffers.color.setClear(1,1,1,1),Lt.buffers.depth.setTest(!0),Lt.setScissorTest(!1);const Rt=V!==this.type;Rt&&St.traverse(function(Nt){Nt.material&&(Array.isArray(Nt.material)?Nt.material.forEach(Dt=>Dt.needsUpdate=!0):Nt.material.needsUpdate=!0)});for(let Nt=0,Dt=pt.length;Nt<Dt;Nt++){const Ut=pt[Nt],Ct=Ut.shadow;if(Ct===void 0){warn("WebGLShadowMap:",Ut,"has no shadow.");continue}if(Ct.autoUpdate===!1&&Ct.needsUpdate===!1)continue;r.copy(Ct.mapSize);const Ot=Ct.getFrameExtents();r.multiply(Ot),s.copy(Ct.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/Ot.x),r.x=s.x*Ot.x,Ct.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/Ot.y),r.y=s.y*Ot.y,Ct.mapSize.y=s.y));const qt=n.state.buffers.depth.getReversed();if(Ct.camera._reversedDepth=qt,Ct.map===null||Rt===!0){if(Ct.map!==null&&(Ct.map.depthTexture!==null&&(Ct.map.depthTexture.dispose(),Ct.map.depthTexture=null),Ct.map.dispose()),this.type===VSMShadowMap){if(Ut.isPointLight){warn("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Ct.map=new WebGLRenderTarget(r.x,r.y,{format:RGFormat,type:HalfFloatType,minFilter:LinearFilter,magFilter:LinearFilter,generateMipmaps:!1}),Ct.map.texture.name=Ut.name+".shadowMap",Ct.map.depthTexture=new DepthTexture(r.x,r.y,FloatType),Ct.map.depthTexture.name=Ut.name+".shadowMapDepth",Ct.map.depthTexture.format=DepthFormat,Ct.map.depthTexture.compareFunction=null,Ct.map.depthTexture.minFilter=NearestFilter,Ct.map.depthTexture.magFilter=NearestFilter}else Ut.isPointLight?(Ct.map=new WebGLCubeRenderTarget(r.x),Ct.map.depthTexture=new CubeDepthTexture(r.x,UnsignedIntType)):(Ct.map=new WebGLRenderTarget(r.x,r.y),Ct.map.depthTexture=new DepthTexture(r.x,r.y,UnsignedIntType)),Ct.map.depthTexture.name=Ut.name+".shadowMap",Ct.map.depthTexture.format=DepthFormat,this.type===PCFShadowMap?(Ct.map.depthTexture.compareFunction=qt?GreaterEqualCompare:LessEqualCompare,Ct.map.depthTexture.minFilter=LinearFilter,Ct.map.depthTexture.magFilter=LinearFilter):(Ct.map.depthTexture.compareFunction=null,Ct.map.depthTexture.minFilter=NearestFilter,Ct.map.depthTexture.magFilter=NearestFilter);Ct.camera.updateProjectionMatrix()}const Zt=Ct.map.isWebGLCubeRenderTarget?6:1;for(let Qt=0;Qt<Zt;Qt++){if(Ct.map.isWebGLCubeRenderTarget)n.setRenderTarget(Ct.map,Qt),n.clear();else{Qt===0&&(n.setRenderTarget(Ct.map),n.clear());const Jt=Ct.getViewport(Qt);o.set(s.x*Jt.x,s.y*Jt.y,s.x*Jt.z,s.y*Jt.w),Lt.viewport(o)}if(Ut.isPointLight){const Jt=Ct.camera,un=Ct.matrix,Tn=Ut.distance||Jt.far;Tn!==Jt.far&&(Jt.far=Tn,Jt.updateProjectionMatrix()),_lightPositionWorld.setFromMatrixPosition(Ut.matrixWorld),Jt.position.copy(_lightPositionWorld),_lookTarget.copy(Jt.position),_lookTarget.add(_cubeDirections[Qt]),Jt.up.copy(_cubeUps[Qt]),Jt.lookAt(_lookTarget),Jt.updateMatrixWorld(),un.makeTranslation(-_lightPositionWorld.x,-_lightPositionWorld.y,-_lightPositionWorld.z),_projScreenMatrix.multiplyMatrices(Jt.projectionMatrix,Jt.matrixWorldInverse),Ct._frustum.setFromProjectionMatrix(_projScreenMatrix,Jt.coordinateSystem,Jt.reversedDepth)}else Ct.updateMatrices(Ut);i=Ct.getFrustum(),ot(St,at,Ct.camera,Ut,this.type)}Ct.isPointLightShadow!==!0&&this.type===VSMShadowMap&&be(Ct,at),Ct.needsUpdate=!1}V=this.type,R.needsUpdate=!1,n.setRenderTarget(ut,Gt,xt)};function be(pt,St){const at=e.update(Y);p.defines.VSM_SAMPLES!==pt.blurSamples&&(p.defines.VSM_SAMPLES=pt.blurSamples,I.defines.VSM_SAMPLES=pt.blurSamples,p.needsUpdate=!0,I.needsUpdate=!0),pt.mapPass===null&&(pt.mapPass=new WebGLRenderTarget(r.x,r.y,{format:RGFormat,type:HalfFloatType})),p.uniforms.shadow_pass.value=pt.map.depthTexture,p.uniforms.resolution.value=pt.mapSize,p.uniforms.radius.value=pt.radius,n.setRenderTarget(pt.mapPass),n.clear(),n.renderBufferDirect(St,null,at,p,Y,null),I.uniforms.shadow_pass.value=pt.mapPass.texture,I.uniforms.resolution.value=pt.mapSize,I.uniforms.radius.value=pt.radius,n.setRenderTarget(pt.map),n.clear(),n.renderBufferDirect(St,null,at,I,Y,null)}function ct(pt,St,at,ut){let Gt=null;const xt=at.isPointLight===!0?pt.customDistanceMaterial:pt.customDepthMaterial;if(xt!==void 0)Gt=xt;else if(Gt=at.isPointLight===!0?u:l,n.localClippingEnabled&&St.clipShadows===!0&&Array.isArray(St.clippingPlanes)&&St.clippingPlanes.length!==0||St.displacementMap&&St.displacementScale!==0||St.alphaMap&&St.alphaTest>0||St.map&&St.alphaTest>0||St.alphaToCoverage===!0){const Lt=Gt.uuid,Rt=St.uuid;let Nt=h[Lt];Nt===void 0&&(Nt={},h[Lt]=Nt);let Dt=Nt[Rt];Dt===void 0&&(Dt=Gt.clone(),Nt[Rt]=Dt,St.addEventListener("dispose",dt)),Gt=Dt}if(Gt.visible=St.visible,Gt.wireframe=St.wireframe,ut===VSMShadowMap?Gt.side=St.shadowSide!==null?St.shadowSide:St.side:Gt.side=St.shadowSide!==null?St.shadowSide:S[St.side],Gt.alphaMap=St.alphaMap,Gt.alphaTest=St.alphaToCoverage===!0?.5:St.alphaTest,Gt.map=St.map,Gt.clipShadows=St.clipShadows,Gt.clippingPlanes=St.clippingPlanes,Gt.clipIntersection=St.clipIntersection,Gt.displacementMap=St.displacementMap,Gt.displacementScale=St.displacementScale,Gt.displacementBias=St.displacementBias,Gt.wireframeLinewidth=St.wireframeLinewidth,Gt.linewidth=St.linewidth,at.isPointLight===!0&&Gt.isMeshDistanceMaterial===!0){const Lt=n.properties.get(Gt);Lt.light=at}return Gt}function ot(pt,St,at,ut,Gt){if(pt.visible===!1)return;if(pt.layers.test(St.layers)&&(pt.isMesh||pt.isLine||pt.isPoints)&&(pt.castShadow||pt.receiveShadow&&Gt===VSMShadowMap)&&(!pt.frustumCulled||i.intersectsObject(pt))){pt.modelViewMatrix.multiplyMatrices(at.matrixWorldInverse,pt.matrixWorld);const Rt=e.update(pt),Nt=pt.material;if(Array.isArray(Nt)){const Dt=Rt.groups;for(let Ut=0,Ct=Dt.length;Ut<Ct;Ut++){const Ot=Dt[Ut],qt=Nt[Ot.materialIndex];if(qt&&qt.visible){const Zt=ct(pt,qt,ut,Gt);pt.onBeforeShadow(n,pt,St,at,Rt,Zt,Ot),n.renderBufferDirect(at,null,Rt,Zt,pt,Ot),pt.onAfterShadow(n,pt,St,at,Rt,Zt,Ot)}}}else if(Nt.visible){const Dt=ct(pt,Nt,ut,Gt);pt.onBeforeShadow(n,pt,St,at,Rt,Dt,null),n.renderBufferDirect(at,null,Rt,Dt,pt,null),pt.onAfterShadow(n,pt,St,at,Rt,Dt,null)}}const Lt=pt.children;for(let Rt=0,Nt=Lt.length;Rt<Nt;Rt++)ot(Lt[Rt],St,at,ut,Gt)}function dt(pt){pt.target.removeEventListener("dispose",dt);for(const at in h){const ut=h[at],Gt=pt.target.uuid;Gt in ut&&(ut[Gt].dispose(),delete ut[Gt])}}}function WebGLState(n,e){function t(){let mt=!1;const $t=new Vector4;let zt=null;const Kt=new Vector4(0,0,0,0);return{setMask:function(Xt){zt!==Xt&&!mt&&(n.colorMask(Xt,Xt,Xt,Xt),zt=Xt)},setLocked:function(Xt){mt=Xt},setClear:function(Xt,Ht,sn,gn,Pn){Pn===!0&&(Xt*=gn,Ht*=gn,sn*=gn),$t.set(Xt,Ht,sn,gn),Kt.equals($t)===!1&&(n.clearColor(Xt,Ht,sn,gn),Kt.copy($t))},reset:function(){mt=!1,zt=null,Kt.set(-1,0,0,0)}}}function i(){let mt=!1,$t=!1,zt=null,Kt=null,Xt=null;return{setReversed:function(Ht){if($t!==Ht){const sn=e.get("EXT_clip_control");Ht?sn.clipControlEXT(sn.LOWER_LEFT_EXT,sn.ZERO_TO_ONE_EXT):sn.clipControlEXT(sn.LOWER_LEFT_EXT,sn.NEGATIVE_ONE_TO_ONE_EXT),$t=Ht;const gn=Xt;Xt=null,this.setClear(gn)}},getReversed:function(){return $t},setTest:function(Ht){Ht?Yt(n.DEPTH_TEST):jt(n.DEPTH_TEST)},setMask:function(Ht){zt!==Ht&&!mt&&(n.depthMask(Ht),zt=Ht)},setFunc:function(Ht){if($t&&(Ht=ReversedDepthFuncs[Ht]),Kt!==Ht){switch(Ht){case NeverDepth:n.depthFunc(n.NEVER);break;case AlwaysDepth:n.depthFunc(n.ALWAYS);break;case LessDepth:n.depthFunc(n.LESS);break;case LessEqualDepth:n.depthFunc(n.LEQUAL);break;case EqualDepth:n.depthFunc(n.EQUAL);break;case GreaterEqualDepth:n.depthFunc(n.GEQUAL);break;case GreaterDepth:n.depthFunc(n.GREATER);break;case NotEqualDepth:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Kt=Ht}},setLocked:function(Ht){mt=Ht},setClear:function(Ht){Xt!==Ht&&(Xt=Ht,$t&&(Ht=1-Ht),n.clearDepth(Ht))},reset:function(){mt=!1,zt=null,Kt=null,Xt=null,$t=!1}}}function r(){let mt=!1,$t=null,zt=null,Kt=null,Xt=null,Ht=null,sn=null,gn=null,Pn=null;return{setTest:function(An){mt||(An?Yt(n.STENCIL_TEST):jt(n.STENCIL_TEST))},setMask:function(An){$t!==An&&!mt&&(n.stencilMask(An),$t=An)},setFunc:function(An,zn,Hn){(zt!==An||Kt!==zn||Xt!==Hn)&&(n.stencilFunc(An,zn,Hn),zt=An,Kt=zn,Xt=Hn)},setOp:function(An,zn,Hn){(Ht!==An||sn!==zn||gn!==Hn)&&(n.stencilOp(An,zn,Hn),Ht=An,sn=zn,gn=Hn)},setLocked:function(An){mt=An},setClear:function(An){Pn!==An&&(n.clearStencil(An),Pn=An)},reset:function(){mt=!1,$t=null,zt=null,Kt=null,Xt=null,Ht=null,sn=null,gn=null,Pn=null}}}const s=new t,o=new i,l=new r,u=new WeakMap,h=new WeakMap;let f={},S={},p=new WeakMap,I=[],H=null,Y=!1,R=null,V=null,be=null,ct=null,ot=null,dt=null,pt=null,St=new Color$1(0,0,0),at=0,ut=!1,Gt=null,xt=null,Lt=null,Rt=null,Nt=null;const Dt=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Ut=!1,Ct=0;const Ot=n.getParameter(n.VERSION);Ot.indexOf("WebGL")!==-1?(Ct=parseFloat(/^WebGL (\d)/.exec(Ot)[1]),Ut=Ct>=1):Ot.indexOf("OpenGL ES")!==-1&&(Ct=parseFloat(/^OpenGL ES (\d)/.exec(Ot)[1]),Ut=Ct>=2);let qt=null,Zt={};const Qt=n.getParameter(n.SCISSOR_BOX),Jt=n.getParameter(n.VIEWPORT),un=new Vector4().fromArray(Qt),Tn=new Vector4().fromArray(Jt);function dn(mt,$t,zt,Kt){const Xt=new Uint8Array(4),Ht=n.createTexture();n.bindTexture(mt,Ht),n.texParameteri(mt,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(mt,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let sn=0;sn<zt;sn++)mt===n.TEXTURE_3D||mt===n.TEXTURE_2D_ARRAY?n.texImage3D($t,0,n.RGBA,1,1,Kt,0,n.RGBA,n.UNSIGNED_BYTE,Xt):n.texImage2D($t+sn,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Xt);return Ht}const Wt={};Wt[n.TEXTURE_2D]=dn(n.TEXTURE_2D,n.TEXTURE_2D,1),Wt[n.TEXTURE_CUBE_MAP]=dn(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Wt[n.TEXTURE_2D_ARRAY]=dn(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Wt[n.TEXTURE_3D]=dn(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),l.setClear(0),Yt(n.DEPTH_TEST),o.setFunc(LessEqualDepth),mn(!1),Dn(CullFaceBack),Yt(n.CULL_FACE),Sn(NoBlending);function Yt(mt){f[mt]!==!0&&(n.enable(mt),f[mt]=!0)}function jt(mt){f[mt]!==!1&&(n.disable(mt),f[mt]=!1)}function pn(mt,$t){return S[mt]!==$t?(n.bindFramebuffer(mt,$t),S[mt]=$t,mt===n.DRAW_FRAMEBUFFER&&(S[n.FRAMEBUFFER]=$t),mt===n.FRAMEBUFFER&&(S[n.DRAW_FRAMEBUFFER]=$t),!0):!1}function hn(mt,$t){let zt=I,Kt=!1;if(mt){zt=p.get($t),zt===void 0&&(zt=[],p.set($t,zt));const Xt=mt.textures;if(zt.length!==Xt.length||zt[0]!==n.COLOR_ATTACHMENT0){for(let Ht=0,sn=Xt.length;Ht<sn;Ht++)zt[Ht]=n.COLOR_ATTACHMENT0+Ht;zt.length=Xt.length,Kt=!0}}else zt[0]!==n.BACK&&(zt[0]=n.BACK,Kt=!0);Kt&&n.drawBuffers(zt)}function fn(mt){return H!==mt?(n.useProgram(mt),H=mt,!0):!1}const Ln={[AddEquation]:n.FUNC_ADD,[SubtractEquation]:n.FUNC_SUBTRACT,[ReverseSubtractEquation]:n.FUNC_REVERSE_SUBTRACT};Ln[MinEquation]=n.MIN,Ln[MaxEquation]=n.MAX;const vn={[ZeroFactor]:n.ZERO,[OneFactor]:n.ONE,[SrcColorFactor]:n.SRC_COLOR,[SrcAlphaFactor]:n.SRC_ALPHA,[SrcAlphaSaturateFactor]:n.SRC_ALPHA_SATURATE,[DstColorFactor]:n.DST_COLOR,[DstAlphaFactor]:n.DST_ALPHA,[OneMinusSrcColorFactor]:n.ONE_MINUS_SRC_COLOR,[OneMinusSrcAlphaFactor]:n.ONE_MINUS_SRC_ALPHA,[OneMinusDstColorFactor]:n.ONE_MINUS_DST_COLOR,[OneMinusDstAlphaFactor]:n.ONE_MINUS_DST_ALPHA,[ConstantColorFactor]:n.CONSTANT_COLOR,[OneMinusConstantColorFactor]:n.ONE_MINUS_CONSTANT_COLOR,[ConstantAlphaFactor]:n.CONSTANT_ALPHA,[OneMinusConstantAlphaFactor]:n.ONE_MINUS_CONSTANT_ALPHA};function Sn(mt,$t,zt,Kt,Xt,Ht,sn,gn,Pn,An){if(mt===NoBlending){Y===!0&&(jt(n.BLEND),Y=!1);return}if(Y===!1&&(Yt(n.BLEND),Y=!0),mt!==CustomBlending){if(mt!==R||An!==ut){if((V!==AddEquation||ot!==AddEquation)&&(n.blendEquation(n.FUNC_ADD),V=AddEquation,ot=AddEquation),An)switch(mt){case NormalBlending:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case AdditiveBlending:n.blendFunc(n.ONE,n.ONE);break;case SubtractiveBlending:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case MultiplyBlending:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:error("WebGLState: Invalid blending: ",mt);break}else switch(mt){case NormalBlending:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case AdditiveBlending:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case SubtractiveBlending:error("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case MultiplyBlending:error("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:error("WebGLState: Invalid blending: ",mt);break}be=null,ct=null,dt=null,pt=null,St.set(0,0,0),at=0,R=mt,ut=An}return}Xt=Xt||$t,Ht=Ht||zt,sn=sn||Kt,($t!==V||Xt!==ot)&&(n.blendEquationSeparate(Ln[$t],Ln[Xt]),V=$t,ot=Xt),(zt!==be||Kt!==ct||Ht!==dt||sn!==pt)&&(n.blendFuncSeparate(vn[zt],vn[Kt],vn[Ht],vn[sn]),be=zt,ct=Kt,dt=Ht,pt=sn),(gn.equals(St)===!1||Pn!==at)&&(n.blendColor(gn.r,gn.g,gn.b,Pn),St.copy(gn),at=Pn),R=mt,ut=!1}function Mn(mt,$t){mt.side===DoubleSide?jt(n.CULL_FACE):Yt(n.CULL_FACE);let zt=mt.side===BackSide;$t&&(zt=!zt),mn(zt),mt.blending===NormalBlending&&mt.transparent===!1?Sn(NoBlending):Sn(mt.blending,mt.blendEquation,mt.blendSrc,mt.blendDst,mt.blendEquationAlpha,mt.blendSrcAlpha,mt.blendDstAlpha,mt.blendColor,mt.blendAlpha,mt.premultipliedAlpha),o.setFunc(mt.depthFunc),o.setTest(mt.depthTest),o.setMask(mt.depthWrite),s.setMask(mt.colorWrite);const Kt=mt.stencilWrite;l.setTest(Kt),Kt&&(l.setMask(mt.stencilWriteMask),l.setFunc(mt.stencilFunc,mt.stencilRef,mt.stencilFuncMask),l.setOp(mt.stencilFail,mt.stencilZFail,mt.stencilZPass)),In(mt.polygonOffset,mt.polygonOffsetFactor,mt.polygonOffsetUnits),mt.alphaToCoverage===!0?Yt(n.SAMPLE_ALPHA_TO_COVERAGE):jt(n.SAMPLE_ALPHA_TO_COVERAGE)}function mn(mt){Gt!==mt&&(mt?n.frontFace(n.CW):n.frontFace(n.CCW),Gt=mt)}function Dn(mt){mt!==CullFaceNone?(Yt(n.CULL_FACE),mt!==xt&&(mt===CullFaceBack?n.cullFace(n.BACK):mt===CullFaceFront?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):jt(n.CULL_FACE),xt=mt}function vt(mt){mt!==Lt&&(Ut&&n.lineWidth(mt),Lt=mt)}function In(mt,$t,zt){mt?(Yt(n.POLYGON_OFFSET_FILL),(Rt!==$t||Nt!==zt)&&(Rt=$t,Nt=zt,o.getReversed()&&($t=-$t),n.polygonOffset($t,zt))):jt(n.POLYGON_OFFSET_FILL)}function yn(mt){mt?Yt(n.SCISSOR_TEST):jt(n.SCISSOR_TEST)}function En(mt){mt===void 0&&(mt=n.TEXTURE0+Dt-1),qt!==mt&&(n.activeTexture(mt),qt=mt)}function rn(mt,$t,zt){zt===void 0&&(qt===null?zt=n.TEXTURE0+Dt-1:zt=qt);let Kt=Zt[zt];Kt===void 0&&(Kt={type:void 0,texture:void 0},Zt[zt]=Kt),(Kt.type!==mt||Kt.texture!==$t)&&(qt!==zt&&(n.activeTexture(zt),qt=zt),n.bindTexture(mt,$t||Wt[mt]),Kt.type=mt,Kt.texture=$t)}function ht(){const mt=Zt[qt];mt!==void 0&&mt.type!==void 0&&(n.bindTexture(mt.type,null),mt.type=void 0,mt.texture=void 0)}function xe(){try{n.compressedTexImage2D(...arguments)}catch(mt){error("WebGLState:",mt)}}function d(){try{n.compressedTexImage3D(...arguments)}catch(mt){error("WebGLState:",mt)}}function ft(){try{n.texSubImage2D(...arguments)}catch(mt){error("WebGLState:",mt)}}function _t(){try{n.texSubImage3D(...arguments)}catch(mt){error("WebGLState:",mt)}}function Mt(){try{n.compressedTexSubImage2D(...arguments)}catch(mt){error("WebGLState:",mt)}}function wt(){try{n.compressedTexSubImage3D(...arguments)}catch(mt){error("WebGLState:",mt)}}function ee(){try{n.texStorage2D(...arguments)}catch(mt){error("WebGLState:",mt)}}function gt(){try{n.texStorage3D(...arguments)}catch(mt){error("WebGLState:",mt)}}function Tt(){try{n.texImage2D(...arguments)}catch(mt){error("WebGLState:",mt)}}function yt(){try{n.texImage3D(...arguments)}catch(mt){error("WebGLState:",mt)}}function bt(mt){un.equals(mt)===!1&&(n.scissor(mt.x,mt.y,mt.z,mt.w),un.copy(mt))}function Pt(mt){Tn.equals(mt)===!1&&(n.viewport(mt.x,mt.y,mt.z,mt.w),Tn.copy(mt))}function At(mt,$t){let zt=h.get($t);zt===void 0&&(zt=new WeakMap,h.set($t,zt));let Kt=zt.get(mt);Kt===void 0&&(Kt=n.getUniformBlockIndex($t,mt.name),zt.set(mt,Kt))}function Bt(mt,$t){const Kt=h.get($t).get(mt);u.get($t)!==Kt&&(n.uniformBlockBinding($t,Kt,mt.__bindingPointIndex),u.set($t,Kt))}function Vt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},qt=null,Zt={},S={},p=new WeakMap,I=[],H=null,Y=!1,R=null,V=null,be=null,ct=null,ot=null,dt=null,pt=null,St=new Color$1(0,0,0),at=0,ut=!1,Gt=null,xt=null,Lt=null,Rt=null,Nt=null,un.set(0,0,n.canvas.width,n.canvas.height),Tn.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),l.reset()}return{buffers:{color:s,depth:o,stencil:l},enable:Yt,disable:jt,bindFramebuffer:pn,drawBuffers:hn,useProgram:fn,setBlending:Sn,setMaterial:Mn,setFlipSided:mn,setCullFace:Dn,setLineWidth:vt,setPolygonOffset:In,setScissorTest:yn,activeTexture:En,bindTexture:rn,unbindTexture:ht,compressedTexImage2D:xe,compressedTexImage3D:d,texImage2D:Tt,texImage3D:yt,updateUBOMapping:At,uniformBlockBinding:Bt,texStorage2D:ee,texStorage3D:gt,texSubImage2D:ft,texSubImage3D:_t,compressedTexSubImage2D:Mt,compressedTexSubImage3D:wt,scissor:bt,viewport:Pt,reset:Vt}}function WebGLTextures(n,e,t,i,r,s,o){const l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Vector2,f=new WeakMap;let S;const p=new WeakMap;let I=!1;try{I=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function H(ht,xe){return I?new OffscreenCanvas(ht,xe):createElementNS("canvas")}function Y(ht,xe,d){let ft=1;const _t=rn(ht);if((_t.width>d||_t.height>d)&&(ft=d/Math.max(_t.width,_t.height)),ft<1)if(typeof HTMLImageElement<"u"&&ht instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&ht instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&ht instanceof ImageBitmap||typeof VideoFrame<"u"&&ht instanceof VideoFrame){const Mt=Math.floor(ft*_t.width),wt=Math.floor(ft*_t.height);S===void 0&&(S=H(Mt,wt));const ee=xe?H(Mt,wt):S;return ee.width=Mt,ee.height=wt,ee.getContext("2d").drawImage(ht,0,0,Mt,wt),warn("WebGLRenderer: Texture has been resized from ("+_t.width+"x"+_t.height+") to ("+Mt+"x"+wt+")."),ee}else return"data"in ht&&warn("WebGLRenderer: Image in DataTexture is too big ("+_t.width+"x"+_t.height+")."),ht;return ht}function R(ht){return ht.generateMipmaps}function V(ht){n.generateMipmap(ht)}function be(ht){return ht.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:ht.isWebGL3DRenderTarget?n.TEXTURE_3D:ht.isWebGLArrayRenderTarget||ht.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function ct(ht,xe,d,ft,_t=!1){if(ht!==null){if(n[ht]!==void 0)return n[ht];warn("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+ht+"'")}let Mt=xe;if(xe===n.RED&&(d===n.FLOAT&&(Mt=n.R32F),d===n.HALF_FLOAT&&(Mt=n.R16F),d===n.UNSIGNED_BYTE&&(Mt=n.R8)),xe===n.RED_INTEGER&&(d===n.UNSIGNED_BYTE&&(Mt=n.R8UI),d===n.UNSIGNED_SHORT&&(Mt=n.R16UI),d===n.UNSIGNED_INT&&(Mt=n.R32UI),d===n.BYTE&&(Mt=n.R8I),d===n.SHORT&&(Mt=n.R16I),d===n.INT&&(Mt=n.R32I)),xe===n.RG&&(d===n.FLOAT&&(Mt=n.RG32F),d===n.HALF_FLOAT&&(Mt=n.RG16F),d===n.UNSIGNED_BYTE&&(Mt=n.RG8)),xe===n.RG_INTEGER&&(d===n.UNSIGNED_BYTE&&(Mt=n.RG8UI),d===n.UNSIGNED_SHORT&&(Mt=n.RG16UI),d===n.UNSIGNED_INT&&(Mt=n.RG32UI),d===n.BYTE&&(Mt=n.RG8I),d===n.SHORT&&(Mt=n.RG16I),d===n.INT&&(Mt=n.RG32I)),xe===n.RGB_INTEGER&&(d===n.UNSIGNED_BYTE&&(Mt=n.RGB8UI),d===n.UNSIGNED_SHORT&&(Mt=n.RGB16UI),d===n.UNSIGNED_INT&&(Mt=n.RGB32UI),d===n.BYTE&&(Mt=n.RGB8I),d===n.SHORT&&(Mt=n.RGB16I),d===n.INT&&(Mt=n.RGB32I)),xe===n.RGBA_INTEGER&&(d===n.UNSIGNED_BYTE&&(Mt=n.RGBA8UI),d===n.UNSIGNED_SHORT&&(Mt=n.RGBA16UI),d===n.UNSIGNED_INT&&(Mt=n.RGBA32UI),d===n.BYTE&&(Mt=n.RGBA8I),d===n.SHORT&&(Mt=n.RGBA16I),d===n.INT&&(Mt=n.RGBA32I)),xe===n.RGB&&(d===n.UNSIGNED_INT_5_9_9_9_REV&&(Mt=n.RGB9_E5),d===n.UNSIGNED_INT_10F_11F_11F_REV&&(Mt=n.R11F_G11F_B10F)),xe===n.RGBA){const wt=_t?LinearTransfer:ColorManagement.getTransfer(ft);d===n.FLOAT&&(Mt=n.RGBA32F),d===n.HALF_FLOAT&&(Mt=n.RGBA16F),d===n.UNSIGNED_BYTE&&(Mt=wt===SRGBTransfer?n.SRGB8_ALPHA8:n.RGBA8),d===n.UNSIGNED_SHORT_4_4_4_4&&(Mt=n.RGBA4),d===n.UNSIGNED_SHORT_5_5_5_1&&(Mt=n.RGB5_A1)}return(Mt===n.R16F||Mt===n.R32F||Mt===n.RG16F||Mt===n.RG32F||Mt===n.RGBA16F||Mt===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Mt}function ot(ht,xe){let d;return ht?xe===null||xe===UnsignedIntType||xe===UnsignedInt248Type?d=n.DEPTH24_STENCIL8:xe===FloatType?d=n.DEPTH32F_STENCIL8:xe===UnsignedShortType&&(d=n.DEPTH24_STENCIL8,warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):xe===null||xe===UnsignedIntType||xe===UnsignedInt248Type?d=n.DEPTH_COMPONENT24:xe===FloatType?d=n.DEPTH_COMPONENT32F:xe===UnsignedShortType&&(d=n.DEPTH_COMPONENT16),d}function dt(ht,xe){return R(ht)===!0||ht.isFramebufferTexture&&ht.minFilter!==NearestFilter&&ht.minFilter!==LinearFilter?Math.log2(Math.max(xe.width,xe.height))+1:ht.mipmaps!==void 0&&ht.mipmaps.length>0?ht.mipmaps.length:ht.isCompressedTexture&&Array.isArray(ht.image)?xe.mipmaps.length:1}function pt(ht){const xe=ht.target;xe.removeEventListener("dispose",pt),at(xe),xe.isVideoTexture&&f.delete(xe)}function St(ht){const xe=ht.target;xe.removeEventListener("dispose",St),Gt(xe)}function at(ht){const xe=i.get(ht);if(xe.__webglInit===void 0)return;const d=ht.source,ft=p.get(d);if(ft){const _t=ft[xe.__cacheKey];_t.usedTimes--,_t.usedTimes===0&&ut(ht),Object.keys(ft).length===0&&p.delete(d)}i.remove(ht)}function ut(ht){const xe=i.get(ht);n.deleteTexture(xe.__webglTexture);const d=ht.source,ft=p.get(d);delete ft[xe.__cacheKey],o.memory.textures--}function Gt(ht){const xe=i.get(ht);if(ht.depthTexture&&(ht.depthTexture.dispose(),i.remove(ht.depthTexture)),ht.isWebGLCubeRenderTarget)for(let ft=0;ft<6;ft++){if(Array.isArray(xe.__webglFramebuffer[ft]))for(let _t=0;_t<xe.__webglFramebuffer[ft].length;_t++)n.deleteFramebuffer(xe.__webglFramebuffer[ft][_t]);else n.deleteFramebuffer(xe.__webglFramebuffer[ft]);xe.__webglDepthbuffer&&n.deleteRenderbuffer(xe.__webglDepthbuffer[ft])}else{if(Array.isArray(xe.__webglFramebuffer))for(let ft=0;ft<xe.__webglFramebuffer.length;ft++)n.deleteFramebuffer(xe.__webglFramebuffer[ft]);else n.deleteFramebuffer(xe.__webglFramebuffer);if(xe.__webglDepthbuffer&&n.deleteRenderbuffer(xe.__webglDepthbuffer),xe.__webglMultisampledFramebuffer&&n.deleteFramebuffer(xe.__webglMultisampledFramebuffer),xe.__webglColorRenderbuffer)for(let ft=0;ft<xe.__webglColorRenderbuffer.length;ft++)xe.__webglColorRenderbuffer[ft]&&n.deleteRenderbuffer(xe.__webglColorRenderbuffer[ft]);xe.__webglDepthRenderbuffer&&n.deleteRenderbuffer(xe.__webglDepthRenderbuffer)}const d=ht.textures;for(let ft=0,_t=d.length;ft<_t;ft++){const Mt=i.get(d[ft]);Mt.__webglTexture&&(n.deleteTexture(Mt.__webglTexture),o.memory.textures--),i.remove(d[ft])}i.remove(ht)}let xt=0;function Lt(){xt=0}function Rt(){const ht=xt;return ht>=r.maxTextures&&warn("WebGLTextures: Trying to use "+ht+" texture units while this GPU supports only "+r.maxTextures),xt+=1,ht}function Nt(ht){const xe=[];return xe.push(ht.wrapS),xe.push(ht.wrapT),xe.push(ht.wrapR||0),xe.push(ht.magFilter),xe.push(ht.minFilter),xe.push(ht.anisotropy),xe.push(ht.internalFormat),xe.push(ht.format),xe.push(ht.type),xe.push(ht.generateMipmaps),xe.push(ht.premultiplyAlpha),xe.push(ht.flipY),xe.push(ht.unpackAlignment),xe.push(ht.colorSpace),xe.join()}function Dt(ht,xe){const d=i.get(ht);if(ht.isVideoTexture&&yn(ht),ht.isRenderTargetTexture===!1&&ht.isExternalTexture!==!0&&ht.version>0&&d.__version!==ht.version){const ft=ht.image;if(ft===null)warn("WebGLRenderer: Texture marked for update but no image data found.");else if(ft.complete===!1)warn("WebGLRenderer: Texture marked for update but image is incomplete");else{Wt(d,ht,xe);return}}else ht.isExternalTexture&&(d.__webglTexture=ht.sourceTexture?ht.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,d.__webglTexture,n.TEXTURE0+xe)}function Ut(ht,xe){const d=i.get(ht);if(ht.isRenderTargetTexture===!1&&ht.version>0&&d.__version!==ht.version){Wt(d,ht,xe);return}else ht.isExternalTexture&&(d.__webglTexture=ht.sourceTexture?ht.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,d.__webglTexture,n.TEXTURE0+xe)}function Ct(ht,xe){const d=i.get(ht);if(ht.isRenderTargetTexture===!1&&ht.version>0&&d.__version!==ht.version){Wt(d,ht,xe);return}t.bindTexture(n.TEXTURE_3D,d.__webglTexture,n.TEXTURE0+xe)}function Ot(ht,xe){const d=i.get(ht);if(ht.isCubeDepthTexture!==!0&&ht.version>0&&d.__version!==ht.version){Yt(d,ht,xe);return}t.bindTexture(n.TEXTURE_CUBE_MAP,d.__webglTexture,n.TEXTURE0+xe)}const qt={[RepeatWrapping]:n.REPEAT,[ClampToEdgeWrapping]:n.CLAMP_TO_EDGE,[MirroredRepeatWrapping]:n.MIRRORED_REPEAT},Zt={[NearestFilter]:n.NEAREST,[NearestMipmapNearestFilter]:n.NEAREST_MIPMAP_NEAREST,[NearestMipmapLinearFilter]:n.NEAREST_MIPMAP_LINEAR,[LinearFilter]:n.LINEAR,[LinearMipmapNearestFilter]:n.LINEAR_MIPMAP_NEAREST,[LinearMipmapLinearFilter]:n.LINEAR_MIPMAP_LINEAR},Qt={[NeverCompare]:n.NEVER,[AlwaysCompare]:n.ALWAYS,[LessCompare]:n.LESS,[LessEqualCompare]:n.LEQUAL,[EqualCompare]:n.EQUAL,[GreaterEqualCompare]:n.GEQUAL,[GreaterCompare]:n.GREATER,[NotEqualCompare]:n.NOTEQUAL};function Jt(ht,xe){if(xe.type===FloatType&&e.has("OES_texture_float_linear")===!1&&(xe.magFilter===LinearFilter||xe.magFilter===LinearMipmapNearestFilter||xe.magFilter===NearestMipmapLinearFilter||xe.magFilter===LinearMipmapLinearFilter||xe.minFilter===LinearFilter||xe.minFilter===LinearMipmapNearestFilter||xe.minFilter===NearestMipmapLinearFilter||xe.minFilter===LinearMipmapLinearFilter)&&warn("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(ht,n.TEXTURE_WRAP_S,qt[xe.wrapS]),n.texParameteri(ht,n.TEXTURE_WRAP_T,qt[xe.wrapT]),(ht===n.TEXTURE_3D||ht===n.TEXTURE_2D_ARRAY)&&n.texParameteri(ht,n.TEXTURE_WRAP_R,qt[xe.wrapR]),n.texParameteri(ht,n.TEXTURE_MAG_FILTER,Zt[xe.magFilter]),n.texParameteri(ht,n.TEXTURE_MIN_FILTER,Zt[xe.minFilter]),xe.compareFunction&&(n.texParameteri(ht,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(ht,n.TEXTURE_COMPARE_FUNC,Qt[xe.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(xe.magFilter===NearestFilter||xe.minFilter!==NearestMipmapLinearFilter&&xe.minFilter!==LinearMipmapLinearFilter||xe.type===FloatType&&e.has("OES_texture_float_linear")===!1)return;if(xe.anisotropy>1||i.get(xe).__currentAnisotropy){const d=e.get("EXT_texture_filter_anisotropic");n.texParameterf(ht,d.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(xe.anisotropy,r.getMaxAnisotropy())),i.get(xe).__currentAnisotropy=xe.anisotropy}}}function un(ht,xe){let d=!1;ht.__webglInit===void 0&&(ht.__webglInit=!0,xe.addEventListener("dispose",pt));const ft=xe.source;let _t=p.get(ft);_t===void 0&&(_t={},p.set(ft,_t));const Mt=Nt(xe);if(Mt!==ht.__cacheKey){_t[Mt]===void 0&&(_t[Mt]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,d=!0),_t[Mt].usedTimes++;const wt=_t[ht.__cacheKey];wt!==void 0&&(_t[ht.__cacheKey].usedTimes--,wt.usedTimes===0&&ut(xe)),ht.__cacheKey=Mt,ht.__webglTexture=_t[Mt].texture}return d}function Tn(ht,xe,d){return Math.floor(Math.floor(ht/d)/xe)}function dn(ht,xe,d,ft){const Mt=ht.updateRanges;if(Mt.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,xe.width,xe.height,d,ft,xe.data);else{Mt.sort((yt,bt)=>yt.start-bt.start);let wt=0;for(let yt=1;yt<Mt.length;yt++){const bt=Mt[wt],Pt=Mt[yt],At=bt.start+bt.count,Bt=Tn(Pt.start,xe.width,4),Vt=Tn(bt.start,xe.width,4);Pt.start<=At+1&&Bt===Vt&&Tn(Pt.start+Pt.count-1,xe.width,4)===Bt?bt.count=Math.max(bt.count,Pt.start+Pt.count-bt.start):(++wt,Mt[wt]=Pt)}Mt.length=wt+1;const ee=n.getParameter(n.UNPACK_ROW_LENGTH),gt=n.getParameter(n.UNPACK_SKIP_PIXELS),Tt=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,xe.width);for(let yt=0,bt=Mt.length;yt<bt;yt++){const Pt=Mt[yt],At=Math.floor(Pt.start/4),Bt=Math.ceil(Pt.count/4),Vt=At%xe.width,mt=Math.floor(At/xe.width),$t=Bt,zt=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Vt),n.pixelStorei(n.UNPACK_SKIP_ROWS,mt),t.texSubImage2D(n.TEXTURE_2D,0,Vt,mt,$t,zt,d,ft,xe.data)}ht.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,ee),n.pixelStorei(n.UNPACK_SKIP_PIXELS,gt),n.pixelStorei(n.UNPACK_SKIP_ROWS,Tt)}}function Wt(ht,xe,d){let ft=n.TEXTURE_2D;(xe.isDataArrayTexture||xe.isCompressedArrayTexture)&&(ft=n.TEXTURE_2D_ARRAY),xe.isData3DTexture&&(ft=n.TEXTURE_3D);const _t=un(ht,xe),Mt=xe.source;t.bindTexture(ft,ht.__webglTexture,n.TEXTURE0+d);const wt=i.get(Mt);if(Mt.version!==wt.__version||_t===!0){t.activeTexture(n.TEXTURE0+d);const ee=ColorManagement.getPrimaries(ColorManagement.workingColorSpace),gt=xe.colorSpace===NoColorSpace?null:ColorManagement.getPrimaries(xe.colorSpace),Tt=xe.colorSpace===NoColorSpace||ee===gt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,xe.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,xe.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,xe.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);let yt=Y(xe.image,!1,r.maxTextureSize);yt=En(xe,yt);const bt=s.convert(xe.format,xe.colorSpace),Pt=s.convert(xe.type);let At=ct(xe.internalFormat,bt,Pt,xe.colorSpace,xe.isVideoTexture);Jt(ft,xe);let Bt;const Vt=xe.mipmaps,mt=xe.isVideoTexture!==!0,$t=wt.__version===void 0||_t===!0,zt=Mt.dataReady,Kt=dt(xe,yt);if(xe.isDepthTexture)At=ot(xe.format===DepthStencilFormat,xe.type),$t&&(mt?t.texStorage2D(n.TEXTURE_2D,1,At,yt.width,yt.height):t.texImage2D(n.TEXTURE_2D,0,At,yt.width,yt.height,0,bt,Pt,null));else if(xe.isDataTexture)if(Vt.length>0){mt&&$t&&t.texStorage2D(n.TEXTURE_2D,Kt,At,Vt[0].width,Vt[0].height);for(let Xt=0,Ht=Vt.length;Xt<Ht;Xt++)Bt=Vt[Xt],mt?zt&&t.texSubImage2D(n.TEXTURE_2D,Xt,0,0,Bt.width,Bt.height,bt,Pt,Bt.data):t.texImage2D(n.TEXTURE_2D,Xt,At,Bt.width,Bt.height,0,bt,Pt,Bt.data);xe.generateMipmaps=!1}else mt?($t&&t.texStorage2D(n.TEXTURE_2D,Kt,At,yt.width,yt.height),zt&&dn(xe,yt,bt,Pt)):t.texImage2D(n.TEXTURE_2D,0,At,yt.width,yt.height,0,bt,Pt,yt.data);else if(xe.isCompressedTexture)if(xe.isCompressedArrayTexture){mt&&$t&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Kt,At,Vt[0].width,Vt[0].height,yt.depth);for(let Xt=0,Ht=Vt.length;Xt<Ht;Xt++)if(Bt=Vt[Xt],xe.format!==RGBAFormat)if(bt!==null)if(mt){if(zt)if(xe.layerUpdates.size>0){const sn=getByteLength(Bt.width,Bt.height,xe.format,xe.type);for(const gn of xe.layerUpdates){const Pn=Bt.data.subarray(gn*sn/Bt.data.BYTES_PER_ELEMENT,(gn+1)*sn/Bt.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Xt,0,0,gn,Bt.width,Bt.height,1,bt,Pn)}xe.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Xt,0,0,0,Bt.width,Bt.height,yt.depth,bt,Bt.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Xt,At,Bt.width,Bt.height,yt.depth,0,Bt.data,0,0);else warn("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else mt?zt&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Xt,0,0,0,Bt.width,Bt.height,yt.depth,bt,Pt,Bt.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Xt,At,Bt.width,Bt.height,yt.depth,0,bt,Pt,Bt.data)}else{mt&&$t&&t.texStorage2D(n.TEXTURE_2D,Kt,At,Vt[0].width,Vt[0].height);for(let Xt=0,Ht=Vt.length;Xt<Ht;Xt++)Bt=Vt[Xt],xe.format!==RGBAFormat?bt!==null?mt?zt&&t.compressedTexSubImage2D(n.TEXTURE_2D,Xt,0,0,Bt.width,Bt.height,bt,Bt.data):t.compressedTexImage2D(n.TEXTURE_2D,Xt,At,Bt.width,Bt.height,0,Bt.data):warn("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):mt?zt&&t.texSubImage2D(n.TEXTURE_2D,Xt,0,0,Bt.width,Bt.height,bt,Pt,Bt.data):t.texImage2D(n.TEXTURE_2D,Xt,At,Bt.width,Bt.height,0,bt,Pt,Bt.data)}else if(xe.isDataArrayTexture)if(mt){if($t&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Kt,At,yt.width,yt.height,yt.depth),zt)if(xe.layerUpdates.size>0){const Xt=getByteLength(yt.width,yt.height,xe.format,xe.type);for(const Ht of xe.layerUpdates){const sn=yt.data.subarray(Ht*Xt/yt.data.BYTES_PER_ELEMENT,(Ht+1)*Xt/yt.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Ht,yt.width,yt.height,1,bt,Pt,sn)}xe.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,yt.width,yt.height,yt.depth,bt,Pt,yt.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,At,yt.width,yt.height,yt.depth,0,bt,Pt,yt.data);else if(xe.isData3DTexture)mt?($t&&t.texStorage3D(n.TEXTURE_3D,Kt,At,yt.width,yt.height,yt.depth),zt&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,yt.width,yt.height,yt.depth,bt,Pt,yt.data)):t.texImage3D(n.TEXTURE_3D,0,At,yt.width,yt.height,yt.depth,0,bt,Pt,yt.data);else if(xe.isFramebufferTexture){if($t)if(mt)t.texStorage2D(n.TEXTURE_2D,Kt,At,yt.width,yt.height);else{let Xt=yt.width,Ht=yt.height;for(let sn=0;sn<Kt;sn++)t.texImage2D(n.TEXTURE_2D,sn,At,Xt,Ht,0,bt,Pt,null),Xt>>=1,Ht>>=1}}else if(Vt.length>0){if(mt&&$t){const Xt=rn(Vt[0]);t.texStorage2D(n.TEXTURE_2D,Kt,At,Xt.width,Xt.height)}for(let Xt=0,Ht=Vt.length;Xt<Ht;Xt++)Bt=Vt[Xt],mt?zt&&t.texSubImage2D(n.TEXTURE_2D,Xt,0,0,bt,Pt,Bt):t.texImage2D(n.TEXTURE_2D,Xt,At,bt,Pt,Bt);xe.generateMipmaps=!1}else if(mt){if($t){const Xt=rn(yt);t.texStorage2D(n.TEXTURE_2D,Kt,At,Xt.width,Xt.height)}zt&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,bt,Pt,yt)}else t.texImage2D(n.TEXTURE_2D,0,At,bt,Pt,yt);R(xe)&&V(ft),wt.__version=Mt.version,xe.onUpdate&&xe.onUpdate(xe)}ht.__version=xe.version}function Yt(ht,xe,d){if(xe.image.length!==6)return;const ft=un(ht,xe),_t=xe.source;t.bindTexture(n.TEXTURE_CUBE_MAP,ht.__webglTexture,n.TEXTURE0+d);const Mt=i.get(_t);if(_t.version!==Mt.__version||ft===!0){t.activeTexture(n.TEXTURE0+d);const wt=ColorManagement.getPrimaries(ColorManagement.workingColorSpace),ee=xe.colorSpace===NoColorSpace?null:ColorManagement.getPrimaries(xe.colorSpace),gt=xe.colorSpace===NoColorSpace||wt===ee?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,xe.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,xe.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,xe.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt);const Tt=xe.isCompressedTexture||xe.image[0].isCompressedTexture,yt=xe.image[0]&&xe.image[0].isDataTexture,bt=[];for(let Ht=0;Ht<6;Ht++)!Tt&&!yt?bt[Ht]=Y(xe.image[Ht],!0,r.maxCubemapSize):bt[Ht]=yt?xe.image[Ht].image:xe.image[Ht],bt[Ht]=En(xe,bt[Ht]);const Pt=bt[0],At=s.convert(xe.format,xe.colorSpace),Bt=s.convert(xe.type),Vt=ct(xe.internalFormat,At,Bt,xe.colorSpace),mt=xe.isVideoTexture!==!0,$t=Mt.__version===void 0||ft===!0,zt=_t.dataReady;let Kt=dt(xe,Pt);Jt(n.TEXTURE_CUBE_MAP,xe);let Xt;if(Tt){mt&&$t&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Kt,Vt,Pt.width,Pt.height);for(let Ht=0;Ht<6;Ht++){Xt=bt[Ht].mipmaps;for(let sn=0;sn<Xt.length;sn++){const gn=Xt[sn];xe.format!==RGBAFormat?At!==null?mt?zt&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ht,sn,0,0,gn.width,gn.height,At,gn.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ht,sn,Vt,gn.width,gn.height,0,gn.data):warn("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):mt?zt&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ht,sn,0,0,gn.width,gn.height,At,Bt,gn.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ht,sn,Vt,gn.width,gn.height,0,At,Bt,gn.data)}}}else{if(Xt=xe.mipmaps,mt&&$t){Xt.length>0&&Kt++;const Ht=rn(bt[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Kt,Vt,Ht.width,Ht.height)}for(let Ht=0;Ht<6;Ht++)if(yt){mt?zt&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ht,0,0,0,bt[Ht].width,bt[Ht].height,At,Bt,bt[Ht].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ht,0,Vt,bt[Ht].width,bt[Ht].height,0,At,Bt,bt[Ht].data);for(let sn=0;sn<Xt.length;sn++){const Pn=Xt[sn].image[Ht].image;mt?zt&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ht,sn+1,0,0,Pn.width,Pn.height,At,Bt,Pn.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ht,sn+1,Vt,Pn.width,Pn.height,0,At,Bt,Pn.data)}}else{mt?zt&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ht,0,0,0,At,Bt,bt[Ht]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ht,0,Vt,At,Bt,bt[Ht]);for(let sn=0;sn<Xt.length;sn++){const gn=Xt[sn];mt?zt&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ht,sn+1,0,0,At,Bt,gn.image[Ht]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ht,sn+1,Vt,At,Bt,gn.image[Ht])}}}R(xe)&&V(n.TEXTURE_CUBE_MAP),Mt.__version=_t.version,xe.onUpdate&&xe.onUpdate(xe)}ht.__version=xe.version}function jt(ht,xe,d,ft,_t,Mt){const wt=s.convert(d.format,d.colorSpace),ee=s.convert(d.type),gt=ct(d.internalFormat,wt,ee,d.colorSpace),Tt=i.get(xe),yt=i.get(d);if(yt.__renderTarget=xe,!Tt.__hasExternalTextures){const bt=Math.max(1,xe.width>>Mt),Pt=Math.max(1,xe.height>>Mt);_t===n.TEXTURE_3D||_t===n.TEXTURE_2D_ARRAY?t.texImage3D(_t,Mt,gt,bt,Pt,xe.depth,0,wt,ee,null):t.texImage2D(_t,Mt,gt,bt,Pt,0,wt,ee,null)}t.bindFramebuffer(n.FRAMEBUFFER,ht),In(xe)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ft,_t,yt.__webglTexture,0,vt(xe)):(_t===n.TEXTURE_2D||_t>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&_t<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ft,_t,yt.__webglTexture,Mt),t.bindFramebuffer(n.FRAMEBUFFER,null)}function pn(ht,xe,d){if(n.bindRenderbuffer(n.RENDERBUFFER,ht),xe.depthBuffer){const ft=xe.depthTexture,_t=ft&&ft.isDepthTexture?ft.type:null,Mt=ot(xe.stencilBuffer,_t),wt=xe.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;In(xe)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,vt(xe),Mt,xe.width,xe.height):d?n.renderbufferStorageMultisample(n.RENDERBUFFER,vt(xe),Mt,xe.width,xe.height):n.renderbufferStorage(n.RENDERBUFFER,Mt,xe.width,xe.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,wt,n.RENDERBUFFER,ht)}else{const ft=xe.textures;for(let _t=0;_t<ft.length;_t++){const Mt=ft[_t],wt=s.convert(Mt.format,Mt.colorSpace),ee=s.convert(Mt.type),gt=ct(Mt.internalFormat,wt,ee,Mt.colorSpace);In(xe)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,vt(xe),gt,xe.width,xe.height):d?n.renderbufferStorageMultisample(n.RENDERBUFFER,vt(xe),gt,xe.width,xe.height):n.renderbufferStorage(n.RENDERBUFFER,gt,xe.width,xe.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function hn(ht,xe,d){const ft=xe.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,ht),!(xe.depthTexture&&xe.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const _t=i.get(xe.depthTexture);if(_t.__renderTarget=xe,(!_t.__webglTexture||xe.depthTexture.image.width!==xe.width||xe.depthTexture.image.height!==xe.height)&&(xe.depthTexture.image.width=xe.width,xe.depthTexture.image.height=xe.height,xe.depthTexture.needsUpdate=!0),ft){if(_t.__webglInit===void 0&&(_t.__webglInit=!0,xe.depthTexture.addEventListener("dispose",pt)),_t.__webglTexture===void 0){_t.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,_t.__webglTexture),Jt(n.TEXTURE_CUBE_MAP,xe.depthTexture);const Tt=s.convert(xe.depthTexture.format),yt=s.convert(xe.depthTexture.type);let bt;xe.depthTexture.format===DepthFormat?bt=n.DEPTH_COMPONENT24:xe.depthTexture.format===DepthStencilFormat&&(bt=n.DEPTH24_STENCIL8);for(let Pt=0;Pt<6;Pt++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,0,bt,xe.width,xe.height,0,Tt,yt,null)}}else Dt(xe.depthTexture,0);const Mt=_t.__webglTexture,wt=vt(xe),ee=ft?n.TEXTURE_CUBE_MAP_POSITIVE_X+d:n.TEXTURE_2D,gt=xe.depthTexture.format===DepthStencilFormat?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(xe.depthTexture.format===DepthFormat)In(xe)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,gt,ee,Mt,0,wt):n.framebufferTexture2D(n.FRAMEBUFFER,gt,ee,Mt,0);else if(xe.depthTexture.format===DepthStencilFormat)In(xe)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,gt,ee,Mt,0,wt):n.framebufferTexture2D(n.FRAMEBUFFER,gt,ee,Mt,0);else throw new Error("Unknown depthTexture format")}function fn(ht){const xe=i.get(ht),d=ht.isWebGLCubeRenderTarget===!0;if(xe.__boundDepthTexture!==ht.depthTexture){const ft=ht.depthTexture;if(xe.__depthDisposeCallback&&xe.__depthDisposeCallback(),ft){const _t=()=>{delete xe.__boundDepthTexture,delete xe.__depthDisposeCallback,ft.removeEventListener("dispose",_t)};ft.addEventListener("dispose",_t),xe.__depthDisposeCallback=_t}xe.__boundDepthTexture=ft}if(ht.depthTexture&&!xe.__autoAllocateDepthBuffer)if(d)for(let ft=0;ft<6;ft++)hn(xe.__webglFramebuffer[ft],ht,ft);else{const ft=ht.texture.mipmaps;ft&&ft.length>0?hn(xe.__webglFramebuffer[0],ht,0):hn(xe.__webglFramebuffer,ht,0)}else if(d){xe.__webglDepthbuffer=[];for(let ft=0;ft<6;ft++)if(t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglFramebuffer[ft]),xe.__webglDepthbuffer[ft]===void 0)xe.__webglDepthbuffer[ft]=n.createRenderbuffer(),pn(xe.__webglDepthbuffer[ft],ht,!1);else{const _t=ht.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Mt=xe.__webglDepthbuffer[ft];n.bindRenderbuffer(n.RENDERBUFFER,Mt),n.framebufferRenderbuffer(n.FRAMEBUFFER,_t,n.RENDERBUFFER,Mt)}}else{const ft=ht.texture.mipmaps;if(ft&&ft.length>0?t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglFramebuffer),xe.__webglDepthbuffer===void 0)xe.__webglDepthbuffer=n.createRenderbuffer(),pn(xe.__webglDepthbuffer,ht,!1);else{const _t=ht.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Mt=xe.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Mt),n.framebufferRenderbuffer(n.FRAMEBUFFER,_t,n.RENDERBUFFER,Mt)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ln(ht,xe,d){const ft=i.get(ht);xe!==void 0&&jt(ft.__webglFramebuffer,ht,ht.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),d!==void 0&&fn(ht)}function vn(ht){const xe=ht.texture,d=i.get(ht),ft=i.get(xe);ht.addEventListener("dispose",St);const _t=ht.textures,Mt=ht.isWebGLCubeRenderTarget===!0,wt=_t.length>1;if(wt||(ft.__webglTexture===void 0&&(ft.__webglTexture=n.createTexture()),ft.__version=xe.version,o.memory.textures++),Mt){d.__webglFramebuffer=[];for(let ee=0;ee<6;ee++)if(xe.mipmaps&&xe.mipmaps.length>0){d.__webglFramebuffer[ee]=[];for(let gt=0;gt<xe.mipmaps.length;gt++)d.__webglFramebuffer[ee][gt]=n.createFramebuffer()}else d.__webglFramebuffer[ee]=n.createFramebuffer()}else{if(xe.mipmaps&&xe.mipmaps.length>0){d.__webglFramebuffer=[];for(let ee=0;ee<xe.mipmaps.length;ee++)d.__webglFramebuffer[ee]=n.createFramebuffer()}else d.__webglFramebuffer=n.createFramebuffer();if(wt)for(let ee=0,gt=_t.length;ee<gt;ee++){const Tt=i.get(_t[ee]);Tt.__webglTexture===void 0&&(Tt.__webglTexture=n.createTexture(),o.memory.textures++)}if(ht.samples>0&&In(ht)===!1){d.__webglMultisampledFramebuffer=n.createFramebuffer(),d.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,d.__webglMultisampledFramebuffer);for(let ee=0;ee<_t.length;ee++){const gt=_t[ee];d.__webglColorRenderbuffer[ee]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,d.__webglColorRenderbuffer[ee]);const Tt=s.convert(gt.format,gt.colorSpace),yt=s.convert(gt.type),bt=ct(gt.internalFormat,Tt,yt,gt.colorSpace,ht.isXRRenderTarget===!0),Pt=vt(ht);n.renderbufferStorageMultisample(n.RENDERBUFFER,Pt,bt,ht.width,ht.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ee,n.RENDERBUFFER,d.__webglColorRenderbuffer[ee])}n.bindRenderbuffer(n.RENDERBUFFER,null),ht.depthBuffer&&(d.__webglDepthRenderbuffer=n.createRenderbuffer(),pn(d.__webglDepthRenderbuffer,ht,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Mt){t.bindTexture(n.TEXTURE_CUBE_MAP,ft.__webglTexture),Jt(n.TEXTURE_CUBE_MAP,xe);for(let ee=0;ee<6;ee++)if(xe.mipmaps&&xe.mipmaps.length>0)for(let gt=0;gt<xe.mipmaps.length;gt++)jt(d.__webglFramebuffer[ee][gt],ht,xe,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,gt);else jt(d.__webglFramebuffer[ee],ht,xe,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0);R(xe)&&V(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(wt){for(let ee=0,gt=_t.length;ee<gt;ee++){const Tt=_t[ee],yt=i.get(Tt);let bt=n.TEXTURE_2D;(ht.isWebGL3DRenderTarget||ht.isWebGLArrayRenderTarget)&&(bt=ht.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(bt,yt.__webglTexture),Jt(bt,Tt),jt(d.__webglFramebuffer,ht,Tt,n.COLOR_ATTACHMENT0+ee,bt,0),R(Tt)&&V(bt)}t.unbindTexture()}else{let ee=n.TEXTURE_2D;if((ht.isWebGL3DRenderTarget||ht.isWebGLArrayRenderTarget)&&(ee=ht.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ee,ft.__webglTexture),Jt(ee,xe),xe.mipmaps&&xe.mipmaps.length>0)for(let gt=0;gt<xe.mipmaps.length;gt++)jt(d.__webglFramebuffer[gt],ht,xe,n.COLOR_ATTACHMENT0,ee,gt);else jt(d.__webglFramebuffer,ht,xe,n.COLOR_ATTACHMENT0,ee,0);R(xe)&&V(ee),t.unbindTexture()}ht.depthBuffer&&fn(ht)}function Sn(ht){const xe=ht.textures;for(let d=0,ft=xe.length;d<ft;d++){const _t=xe[d];if(R(_t)){const Mt=be(ht),wt=i.get(_t).__webglTexture;t.bindTexture(Mt,wt),V(Mt),t.unbindTexture()}}}const Mn=[],mn=[];function Dn(ht){if(ht.samples>0){if(In(ht)===!1){const xe=ht.textures,d=ht.width,ft=ht.height;let _t=n.COLOR_BUFFER_BIT;const Mt=ht.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,wt=i.get(ht),ee=xe.length>1;if(ee)for(let Tt=0;Tt<xe.length;Tt++)t.bindFramebuffer(n.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Tt,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,wt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Tt,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,wt.__webglMultisampledFramebuffer);const gt=ht.texture.mipmaps;gt&&gt.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,wt.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,wt.__webglFramebuffer);for(let Tt=0;Tt<xe.length;Tt++){if(ht.resolveDepthBuffer&&(ht.depthBuffer&&(_t|=n.DEPTH_BUFFER_BIT),ht.stencilBuffer&&ht.resolveStencilBuffer&&(_t|=n.STENCIL_BUFFER_BIT)),ee){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,wt.__webglColorRenderbuffer[Tt]);const yt=i.get(xe[Tt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,yt,0)}n.blitFramebuffer(0,0,d,ft,0,0,d,ft,_t,n.NEAREST),u===!0&&(Mn.length=0,mn.length=0,Mn.push(n.COLOR_ATTACHMENT0+Tt),ht.depthBuffer&&ht.resolveDepthBuffer===!1&&(Mn.push(Mt),mn.push(Mt),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,mn)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Mn))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ee)for(let Tt=0;Tt<xe.length;Tt++){t.bindFramebuffer(n.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Tt,n.RENDERBUFFER,wt.__webglColorRenderbuffer[Tt]);const yt=i.get(xe[Tt]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,wt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Tt,n.TEXTURE_2D,yt,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,wt.__webglMultisampledFramebuffer)}else if(ht.depthBuffer&&ht.resolveDepthBuffer===!1&&u){const xe=ht.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[xe])}}}function vt(ht){return Math.min(r.maxSamples,ht.samples)}function In(ht){const xe=i.get(ht);return ht.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&xe.__useRenderToTexture!==!1}function yn(ht){const xe=o.render.frame;f.get(ht)!==xe&&(f.set(ht,xe),ht.update())}function En(ht,xe){const d=ht.colorSpace,ft=ht.format,_t=ht.type;return ht.isCompressedTexture===!0||ht.isVideoTexture===!0||d!==LinearSRGBColorSpace&&d!==NoColorSpace&&(ColorManagement.getTransfer(d)===SRGBTransfer?(ft!==RGBAFormat||_t!==UnsignedByteType)&&warn("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):error("WebGLTextures: Unsupported texture color space:",d)),xe}function rn(ht){return typeof HTMLImageElement<"u"&&ht instanceof HTMLImageElement?(h.width=ht.naturalWidth||ht.width,h.height=ht.naturalHeight||ht.height):typeof VideoFrame<"u"&&ht instanceof VideoFrame?(h.width=ht.displayWidth,h.height=ht.displayHeight):(h.width=ht.width,h.height=ht.height),h}this.allocateTextureUnit=Rt,this.resetTextureUnits=Lt,this.setTexture2D=Dt,this.setTexture2DArray=Ut,this.setTexture3D=Ct,this.setTextureCube=Ot,this.rebindTextures=Ln,this.setupRenderTarget=vn,this.updateRenderTargetMipmap=Sn,this.updateMultisampleRenderTarget=Dn,this.setupDepthRenderbuffer=fn,this.setupFrameBufferTexture=jt,this.useMultisampledRTT=In,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function WebGLUtils(n,e){function t(i,r=NoColorSpace){let s;const o=ColorManagement.getTransfer(r);if(i===UnsignedByteType)return n.UNSIGNED_BYTE;if(i===UnsignedShort4444Type)return n.UNSIGNED_SHORT_4_4_4_4;if(i===UnsignedShort5551Type)return n.UNSIGNED_SHORT_5_5_5_1;if(i===UnsignedInt5999Type)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===UnsignedInt101111Type)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===ByteType)return n.BYTE;if(i===ShortType)return n.SHORT;if(i===UnsignedShortType)return n.UNSIGNED_SHORT;if(i===IntType)return n.INT;if(i===UnsignedIntType)return n.UNSIGNED_INT;if(i===FloatType)return n.FLOAT;if(i===HalfFloatType)return n.HALF_FLOAT;if(i===AlphaFormat)return n.ALPHA;if(i===RGBFormat)return n.RGB;if(i===RGBAFormat)return n.RGBA;if(i===DepthFormat)return n.DEPTH_COMPONENT;if(i===DepthStencilFormat)return n.DEPTH_STENCIL;if(i===RedFormat)return n.RED;if(i===RedIntegerFormat)return n.RED_INTEGER;if(i===RGFormat)return n.RG;if(i===RGIntegerFormat)return n.RG_INTEGER;if(i===RGBAIntegerFormat)return n.RGBA_INTEGER;if(i===RGB_S3TC_DXT1_Format||i===RGBA_S3TC_DXT1_Format||i===RGBA_S3TC_DXT3_Format||i===RGBA_S3TC_DXT5_Format)if(o===SRGBTransfer)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===RGB_S3TC_DXT1_Format)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===RGBA_S3TC_DXT1_Format)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===RGBA_S3TC_DXT3_Format)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===RGBA_S3TC_DXT5_Format)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===RGB_S3TC_DXT1_Format)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===RGBA_S3TC_DXT1_Format)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===RGBA_S3TC_DXT3_Format)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===RGBA_S3TC_DXT5_Format)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===RGB_PVRTC_4BPPV1_Format||i===RGB_PVRTC_2BPPV1_Format||i===RGBA_PVRTC_4BPPV1_Format||i===RGBA_PVRTC_2BPPV1_Format)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===RGB_PVRTC_4BPPV1_Format)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===RGB_PVRTC_2BPPV1_Format)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===RGBA_PVRTC_4BPPV1_Format)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===RGBA_PVRTC_2BPPV1_Format)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===RGB_ETC1_Format||i===RGB_ETC2_Format||i===RGBA_ETC2_EAC_Format||i===R11_EAC_Format||i===SIGNED_R11_EAC_Format||i===RG11_EAC_Format||i===SIGNED_RG11_EAC_Format)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===RGB_ETC1_Format||i===RGB_ETC2_Format)return o===SRGBTransfer?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===RGBA_ETC2_EAC_Format)return o===SRGBTransfer?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===R11_EAC_Format)return s.COMPRESSED_R11_EAC;if(i===SIGNED_R11_EAC_Format)return s.COMPRESSED_SIGNED_R11_EAC;if(i===RG11_EAC_Format)return s.COMPRESSED_RG11_EAC;if(i===SIGNED_RG11_EAC_Format)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===RGBA_ASTC_4x4_Format||i===RGBA_ASTC_5x4_Format||i===RGBA_ASTC_5x5_Format||i===RGBA_ASTC_6x5_Format||i===RGBA_ASTC_6x6_Format||i===RGBA_ASTC_8x5_Format||i===RGBA_ASTC_8x6_Format||i===RGBA_ASTC_8x8_Format||i===RGBA_ASTC_10x5_Format||i===RGBA_ASTC_10x6_Format||i===RGBA_ASTC_10x8_Format||i===RGBA_ASTC_10x10_Format||i===RGBA_ASTC_12x10_Format||i===RGBA_ASTC_12x12_Format)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===RGBA_ASTC_4x4_Format)return o===SRGBTransfer?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===RGBA_ASTC_5x4_Format)return o===SRGBTransfer?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===RGBA_ASTC_5x5_Format)return o===SRGBTransfer?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===RGBA_ASTC_6x5_Format)return o===SRGBTransfer?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===RGBA_ASTC_6x6_Format)return o===SRGBTransfer?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===RGBA_ASTC_8x5_Format)return o===SRGBTransfer?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===RGBA_ASTC_8x6_Format)return o===SRGBTransfer?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===RGBA_ASTC_8x8_Format)return o===SRGBTransfer?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===RGBA_ASTC_10x5_Format)return o===SRGBTransfer?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===RGBA_ASTC_10x6_Format)return o===SRGBTransfer?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===RGBA_ASTC_10x8_Format)return o===SRGBTransfer?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===RGBA_ASTC_10x10_Format)return o===SRGBTransfer?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===RGBA_ASTC_12x10_Format)return o===SRGBTransfer?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===RGBA_ASTC_12x12_Format)return o===SRGBTransfer?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===RGBA_BPTC_Format||i===RGB_BPTC_SIGNED_Format||i===RGB_BPTC_UNSIGNED_Format)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===RGBA_BPTC_Format)return o===SRGBTransfer?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===RGB_BPTC_SIGNED_Format)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===RGB_BPTC_UNSIGNED_Format)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===RED_RGTC1_Format||i===SIGNED_RED_RGTC1_Format||i===RED_GREEN_RGTC2_Format||i===SIGNED_RED_GREEN_RGTC2_Format)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===RED_RGTC1_Format)return s.COMPRESSED_RED_RGTC1_EXT;if(i===SIGNED_RED_RGTC1_Format)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===RED_GREEN_RGTC2_Format)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===SIGNED_RED_GREEN_RGTC2_Format)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===UnsignedInt248Type?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const _occlusion_vertex=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_occlusion_fragment=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class WebXRDepthSensing{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new ExternalTexture(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new ShaderMaterial({vertexShader:_occlusion_vertex,fragmentShader:_occlusion_fragment,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Mesh(new PlaneGeometry(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class WebXRManager extends EventDispatcher{constructor(e,t){super();const i=this;let r=null,s=1,o=null,l="local-floor",u=1,h=null,f=null,S=null,p=null,I=null,H=null;const Y=typeof XRWebGLBinding<"u",R=new WebXRDepthSensing,V={},be=t.getContextAttributes();let ct=null,ot=null;const dt=[],pt=[],St=new Vector2;let at=null;const ut=new PerspectiveCamera;ut.viewport=new Vector4;const Gt=new PerspectiveCamera;Gt.viewport=new Vector4;const xt=[ut,Gt],Lt=new ArrayCamera;let Rt=null,Nt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Wt){let Yt=dt[Wt];return Yt===void 0&&(Yt=new WebXRController,dt[Wt]=Yt),Yt.getTargetRaySpace()},this.getControllerGrip=function(Wt){let Yt=dt[Wt];return Yt===void 0&&(Yt=new WebXRController,dt[Wt]=Yt),Yt.getGripSpace()},this.getHand=function(Wt){let Yt=dt[Wt];return Yt===void 0&&(Yt=new WebXRController,dt[Wt]=Yt),Yt.getHandSpace()};function Dt(Wt){const Yt=pt.indexOf(Wt.inputSource);if(Yt===-1)return;const jt=dt[Yt];jt!==void 0&&(jt.update(Wt.inputSource,Wt.frame,h||o),jt.dispatchEvent({type:Wt.type,data:Wt.inputSource}))}function Ut(){r.removeEventListener("select",Dt),r.removeEventListener("selectstart",Dt),r.removeEventListener("selectend",Dt),r.removeEventListener("squeeze",Dt),r.removeEventListener("squeezestart",Dt),r.removeEventListener("squeezeend",Dt),r.removeEventListener("end",Ut),r.removeEventListener("inputsourceschange",Ct);for(let Wt=0;Wt<dt.length;Wt++){const Yt=pt[Wt];Yt!==null&&(pt[Wt]=null,dt[Wt].disconnect(Yt))}Rt=null,Nt=null,R.reset();for(const Wt in V)delete V[Wt];e.setRenderTarget(ct),I=null,p=null,S=null,r=null,ot=null,dn.stop(),i.isPresenting=!1,e.setPixelRatio(at),e.setSize(St.width,St.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Wt){s=Wt,i.isPresenting===!0&&warn("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Wt){l=Wt,i.isPresenting===!0&&warn("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||o},this.setReferenceSpace=function(Wt){h=Wt},this.getBaseLayer=function(){return p!==null?p:I},this.getBinding=function(){return S===null&&Y&&(S=new XRWebGLBinding(r,t)),S},this.getFrame=function(){return H},this.getSession=function(){return r},this.setSession=async function(Wt){if(r=Wt,r!==null){if(ct=e.getRenderTarget(),r.addEventListener("select",Dt),r.addEventListener("selectstart",Dt),r.addEventListener("selectend",Dt),r.addEventListener("squeeze",Dt),r.addEventListener("squeezestart",Dt),r.addEventListener("squeezeend",Dt),r.addEventListener("end",Ut),r.addEventListener("inputsourceschange",Ct),be.xrCompatible!==!0&&await t.makeXRCompatible(),at=e.getPixelRatio(),e.getSize(St),Y&&"createProjectionLayer"in XRWebGLBinding.prototype){let jt=null,pn=null,hn=null;be.depth&&(hn=be.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,jt=be.stencil?DepthStencilFormat:DepthFormat,pn=be.stencil?UnsignedInt248Type:UnsignedIntType);const fn={colorFormat:t.RGBA8,depthFormat:hn,scaleFactor:s};S=this.getBinding(),p=S.createProjectionLayer(fn),r.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),ot=new WebGLRenderTarget(p.textureWidth,p.textureHeight,{format:RGBAFormat,type:UnsignedByteType,depthTexture:new DepthTexture(p.textureWidth,p.textureHeight,pn,void 0,void 0,void 0,void 0,void 0,void 0,jt),stencilBuffer:be.stencil,colorSpace:e.outputColorSpace,samples:be.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{const jt={antialias:be.antialias,alpha:!0,depth:be.depth,stencil:be.stencil,framebufferScaleFactor:s};I=new XRWebGLLayer(r,t,jt),r.updateRenderState({baseLayer:I}),e.setPixelRatio(1),e.setSize(I.framebufferWidth,I.framebufferHeight,!1),ot=new WebGLRenderTarget(I.framebufferWidth,I.framebufferHeight,{format:RGBAFormat,type:UnsignedByteType,colorSpace:e.outputColorSpace,stencilBuffer:be.stencil,resolveDepthBuffer:I.ignoreDepthValues===!1,resolveStencilBuffer:I.ignoreDepthValues===!1})}ot.isXRRenderTarget=!0,this.setFoveation(u),h=null,o=await r.requestReferenceSpace(l),dn.setContext(r),dn.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return R.getDepthTexture()};function Ct(Wt){for(let Yt=0;Yt<Wt.removed.length;Yt++){const jt=Wt.removed[Yt],pn=pt.indexOf(jt);pn>=0&&(pt[pn]=null,dt[pn].disconnect(jt))}for(let Yt=0;Yt<Wt.added.length;Yt++){const jt=Wt.added[Yt];let pn=pt.indexOf(jt);if(pn===-1){for(let fn=0;fn<dt.length;fn++)if(fn>=pt.length){pt.push(jt),pn=fn;break}else if(pt[fn]===null){pt[fn]=jt,pn=fn;break}if(pn===-1)break}const hn=dt[pn];hn&&hn.connect(jt)}}const Ot=new Vector3,qt=new Vector3;function Zt(Wt,Yt,jt){Ot.setFromMatrixPosition(Yt.matrixWorld),qt.setFromMatrixPosition(jt.matrixWorld);const pn=Ot.distanceTo(qt),hn=Yt.projectionMatrix.elements,fn=jt.projectionMatrix.elements,Ln=hn[14]/(hn[10]-1),vn=hn[14]/(hn[10]+1),Sn=(hn[9]+1)/hn[5],Mn=(hn[9]-1)/hn[5],mn=(hn[8]-1)/hn[0],Dn=(fn[8]+1)/fn[0],vt=Ln*mn,In=Ln*Dn,yn=pn/(-mn+Dn),En=yn*-mn;if(Yt.matrixWorld.decompose(Wt.position,Wt.quaternion,Wt.scale),Wt.translateX(En),Wt.translateZ(yn),Wt.matrixWorld.compose(Wt.position,Wt.quaternion,Wt.scale),Wt.matrixWorldInverse.copy(Wt.matrixWorld).invert(),hn[10]===-1)Wt.projectionMatrix.copy(Yt.projectionMatrix),Wt.projectionMatrixInverse.copy(Yt.projectionMatrixInverse);else{const rn=Ln+yn,ht=vn+yn,xe=vt-En,d=In+(pn-En),ft=Sn*vn/ht*rn,_t=Mn*vn/ht*rn;Wt.projectionMatrix.makePerspective(xe,d,ft,_t,rn,ht),Wt.projectionMatrixInverse.copy(Wt.projectionMatrix).invert()}}function Qt(Wt,Yt){Yt===null?Wt.matrixWorld.copy(Wt.matrix):Wt.matrixWorld.multiplyMatrices(Yt.matrixWorld,Wt.matrix),Wt.matrixWorldInverse.copy(Wt.matrixWorld).invert()}this.updateCamera=function(Wt){if(r===null)return;let Yt=Wt.near,jt=Wt.far;R.texture!==null&&(R.depthNear>0&&(Yt=R.depthNear),R.depthFar>0&&(jt=R.depthFar)),Lt.near=Gt.near=ut.near=Yt,Lt.far=Gt.far=ut.far=jt,(Rt!==Lt.near||Nt!==Lt.far)&&(r.updateRenderState({depthNear:Lt.near,depthFar:Lt.far}),Rt=Lt.near,Nt=Lt.far),Lt.layers.mask=Wt.layers.mask|6,ut.layers.mask=Lt.layers.mask&-5,Gt.layers.mask=Lt.layers.mask&-3;const pn=Wt.parent,hn=Lt.cameras;Qt(Lt,pn);for(let fn=0;fn<hn.length;fn++)Qt(hn[fn],pn);hn.length===2?Zt(Lt,ut,Gt):Lt.projectionMatrix.copy(ut.projectionMatrix),Jt(Wt,Lt,pn)};function Jt(Wt,Yt,jt){jt===null?Wt.matrix.copy(Yt.matrixWorld):(Wt.matrix.copy(jt.matrixWorld),Wt.matrix.invert(),Wt.matrix.multiply(Yt.matrixWorld)),Wt.matrix.decompose(Wt.position,Wt.quaternion,Wt.scale),Wt.updateMatrixWorld(!0),Wt.projectionMatrix.copy(Yt.projectionMatrix),Wt.projectionMatrixInverse.copy(Yt.projectionMatrixInverse),Wt.isPerspectiveCamera&&(Wt.fov=RAD2DEG*2*Math.atan(1/Wt.projectionMatrix.elements[5]),Wt.zoom=1)}this.getCamera=function(){return Lt},this.getFoveation=function(){if(!(p===null&&I===null))return u},this.setFoveation=function(Wt){u=Wt,p!==null&&(p.fixedFoveation=Wt),I!==null&&I.fixedFoveation!==void 0&&(I.fixedFoveation=Wt)},this.hasDepthSensing=function(){return R.texture!==null},this.getDepthSensingMesh=function(){return R.getMesh(Lt)},this.getCameraTexture=function(Wt){return V[Wt]};let un=null;function Tn(Wt,Yt){if(f=Yt.getViewerPose(h||o),H=Yt,f!==null){const jt=f.views;I!==null&&(e.setRenderTargetFramebuffer(ot,I.framebuffer),e.setRenderTarget(ot));let pn=!1;jt.length!==Lt.cameras.length&&(Lt.cameras.length=0,pn=!0);for(let vn=0;vn<jt.length;vn++){const Sn=jt[vn];let Mn=null;if(I!==null)Mn=I.getViewport(Sn);else{const Dn=S.getViewSubImage(p,Sn);Mn=Dn.viewport,vn===0&&(e.setRenderTargetTextures(ot,Dn.colorTexture,Dn.depthStencilTexture),e.setRenderTarget(ot))}let mn=xt[vn];mn===void 0&&(mn=new PerspectiveCamera,mn.layers.enable(vn),mn.viewport=new Vector4,xt[vn]=mn),mn.matrix.fromArray(Sn.transform.matrix),mn.matrix.decompose(mn.position,mn.quaternion,mn.scale),mn.projectionMatrix.fromArray(Sn.projectionMatrix),mn.projectionMatrixInverse.copy(mn.projectionMatrix).invert(),mn.viewport.set(Mn.x,Mn.y,Mn.width,Mn.height),vn===0&&(Lt.matrix.copy(mn.matrix),Lt.matrix.decompose(Lt.position,Lt.quaternion,Lt.scale)),pn===!0&&Lt.cameras.push(mn)}const hn=r.enabledFeatures;if(hn&&hn.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&Y){S=i.getBinding();const vn=S.getDepthInformation(jt[0]);vn&&vn.isValid&&vn.texture&&R.init(vn,r.renderState)}if(hn&&hn.includes("camera-access")&&Y){e.state.unbindTexture(),S=i.getBinding();for(let vn=0;vn<jt.length;vn++){const Sn=jt[vn].camera;if(Sn){let Mn=V[Sn];Mn||(Mn=new ExternalTexture,V[Sn]=Mn);const mn=S.getCameraImage(Sn);Mn.sourceTexture=mn}}}}for(let jt=0;jt<dt.length;jt++){const pn=pt[jt],hn=dt[jt];pn!==null&&hn!==void 0&&hn.update(pn,Yt,h||o)}un&&un(Wt,Yt),Yt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Yt}),H=null}const dn=new WebGLAnimation;dn.setAnimationLoop(Tn),this.setAnimationLoop=function(Wt){un=Wt},this.dispose=function(){}}}const _e1=new Euler,_m1=new Matrix4;function WebGLMaterials(n,e){function t(R,V){R.matrixAutoUpdate===!0&&R.updateMatrix(),V.value.copy(R.matrix)}function i(R,V){V.color.getRGB(R.fogColor.value,getUnlitUniformColorSpace(n)),V.isFog?(R.fogNear.value=V.near,R.fogFar.value=V.far):V.isFogExp2&&(R.fogDensity.value=V.density)}function r(R,V,be,ct,ot){V.isMeshBasicMaterial?s(R,V):V.isMeshLambertMaterial?(s(R,V),V.envMap&&(R.envMapIntensity.value=V.envMapIntensity)):V.isMeshToonMaterial?(s(R,V),S(R,V)):V.isMeshPhongMaterial?(s(R,V),f(R,V),V.envMap&&(R.envMapIntensity.value=V.envMapIntensity)):V.isMeshStandardMaterial?(s(R,V),p(R,V),V.isMeshPhysicalMaterial&&I(R,V,ot)):V.isMeshMatcapMaterial?(s(R,V),H(R,V)):V.isMeshDepthMaterial?s(R,V):V.isMeshDistanceMaterial?(s(R,V),Y(R,V)):V.isMeshNormalMaterial?s(R,V):V.isLineBasicMaterial?(o(R,V),V.isLineDashedMaterial&&l(R,V)):V.isPointsMaterial?u(R,V,be,ct):V.isSpriteMaterial?h(R,V):V.isShadowMaterial?(R.color.value.copy(V.color),R.opacity.value=V.opacity):V.isShaderMaterial&&(V.uniformsNeedUpdate=!1)}function s(R,V){R.opacity.value=V.opacity,V.color&&R.diffuse.value.copy(V.color),V.emissive&&R.emissive.value.copy(V.emissive).multiplyScalar(V.emissiveIntensity),V.map&&(R.map.value=V.map,t(V.map,R.mapTransform)),V.alphaMap&&(R.alphaMap.value=V.alphaMap,t(V.alphaMap,R.alphaMapTransform)),V.bumpMap&&(R.bumpMap.value=V.bumpMap,t(V.bumpMap,R.bumpMapTransform),R.bumpScale.value=V.bumpScale,V.side===BackSide&&(R.bumpScale.value*=-1)),V.normalMap&&(R.normalMap.value=V.normalMap,t(V.normalMap,R.normalMapTransform),R.normalScale.value.copy(V.normalScale),V.side===BackSide&&R.normalScale.value.negate()),V.displacementMap&&(R.displacementMap.value=V.displacementMap,t(V.displacementMap,R.displacementMapTransform),R.displacementScale.value=V.displacementScale,R.displacementBias.value=V.displacementBias),V.emissiveMap&&(R.emissiveMap.value=V.emissiveMap,t(V.emissiveMap,R.emissiveMapTransform)),V.specularMap&&(R.specularMap.value=V.specularMap,t(V.specularMap,R.specularMapTransform)),V.alphaTest>0&&(R.alphaTest.value=V.alphaTest);const be=e.get(V),ct=be.envMap,ot=be.envMapRotation;ct&&(R.envMap.value=ct,_e1.copy(ot),_e1.x*=-1,_e1.y*=-1,_e1.z*=-1,ct.isCubeTexture&&ct.isRenderTargetTexture===!1&&(_e1.y*=-1,_e1.z*=-1),R.envMapRotation.value.setFromMatrix4(_m1.makeRotationFromEuler(_e1)),R.flipEnvMap.value=ct.isCubeTexture&&ct.isRenderTargetTexture===!1?-1:1,R.reflectivity.value=V.reflectivity,R.ior.value=V.ior,R.refractionRatio.value=V.refractionRatio),V.lightMap&&(R.lightMap.value=V.lightMap,R.lightMapIntensity.value=V.lightMapIntensity,t(V.lightMap,R.lightMapTransform)),V.aoMap&&(R.aoMap.value=V.aoMap,R.aoMapIntensity.value=V.aoMapIntensity,t(V.aoMap,R.aoMapTransform))}function o(R,V){R.diffuse.value.copy(V.color),R.opacity.value=V.opacity,V.map&&(R.map.value=V.map,t(V.map,R.mapTransform))}function l(R,V){R.dashSize.value=V.dashSize,R.totalSize.value=V.dashSize+V.gapSize,R.scale.value=V.scale}function u(R,V,be,ct){R.diffuse.value.copy(V.color),R.opacity.value=V.opacity,R.size.value=V.size*be,R.scale.value=ct*.5,V.map&&(R.map.value=V.map,t(V.map,R.uvTransform)),V.alphaMap&&(R.alphaMap.value=V.alphaMap,t(V.alphaMap,R.alphaMapTransform)),V.alphaTest>0&&(R.alphaTest.value=V.alphaTest)}function h(R,V){R.diffuse.value.copy(V.color),R.opacity.value=V.opacity,R.rotation.value=V.rotation,V.map&&(R.map.value=V.map,t(V.map,R.mapTransform)),V.alphaMap&&(R.alphaMap.value=V.alphaMap,t(V.alphaMap,R.alphaMapTransform)),V.alphaTest>0&&(R.alphaTest.value=V.alphaTest)}function f(R,V){R.specular.value.copy(V.specular),R.shininess.value=Math.max(V.shininess,1e-4)}function S(R,V){V.gradientMap&&(R.gradientMap.value=V.gradientMap)}function p(R,V){R.metalness.value=V.metalness,V.metalnessMap&&(R.metalnessMap.value=V.metalnessMap,t(V.metalnessMap,R.metalnessMapTransform)),R.roughness.value=V.roughness,V.roughnessMap&&(R.roughnessMap.value=V.roughnessMap,t(V.roughnessMap,R.roughnessMapTransform)),V.envMap&&(R.envMapIntensity.value=V.envMapIntensity)}function I(R,V,be){R.ior.value=V.ior,V.sheen>0&&(R.sheenColor.value.copy(V.sheenColor).multiplyScalar(V.sheen),R.sheenRoughness.value=V.sheenRoughness,V.sheenColorMap&&(R.sheenColorMap.value=V.sheenColorMap,t(V.sheenColorMap,R.sheenColorMapTransform)),V.sheenRoughnessMap&&(R.sheenRoughnessMap.value=V.sheenRoughnessMap,t(V.sheenRoughnessMap,R.sheenRoughnessMapTransform))),V.clearcoat>0&&(R.clearcoat.value=V.clearcoat,R.clearcoatRoughness.value=V.clearcoatRoughness,V.clearcoatMap&&(R.clearcoatMap.value=V.clearcoatMap,t(V.clearcoatMap,R.clearcoatMapTransform)),V.clearcoatRoughnessMap&&(R.clearcoatRoughnessMap.value=V.clearcoatRoughnessMap,t(V.clearcoatRoughnessMap,R.clearcoatRoughnessMapTransform)),V.clearcoatNormalMap&&(R.clearcoatNormalMap.value=V.clearcoatNormalMap,t(V.clearcoatNormalMap,R.clearcoatNormalMapTransform),R.clearcoatNormalScale.value.copy(V.clearcoatNormalScale),V.side===BackSide&&R.clearcoatNormalScale.value.negate())),V.dispersion>0&&(R.dispersion.value=V.dispersion),V.iridescence>0&&(R.iridescence.value=V.iridescence,R.iridescenceIOR.value=V.iridescenceIOR,R.iridescenceThicknessMinimum.value=V.iridescenceThicknessRange[0],R.iridescenceThicknessMaximum.value=V.iridescenceThicknessRange[1],V.iridescenceMap&&(R.iridescenceMap.value=V.iridescenceMap,t(V.iridescenceMap,R.iridescenceMapTransform)),V.iridescenceThicknessMap&&(R.iridescenceThicknessMap.value=V.iridescenceThicknessMap,t(V.iridescenceThicknessMap,R.iridescenceThicknessMapTransform))),V.transmission>0&&(R.transmission.value=V.transmission,R.transmissionSamplerMap.value=be.texture,R.transmissionSamplerSize.value.set(be.width,be.height),V.transmissionMap&&(R.transmissionMap.value=V.transmissionMap,t(V.transmissionMap,R.transmissionMapTransform)),R.thickness.value=V.thickness,V.thicknessMap&&(R.thicknessMap.value=V.thicknessMap,t(V.thicknessMap,R.thicknessMapTransform)),R.attenuationDistance.value=V.attenuationDistance,R.attenuationColor.value.copy(V.attenuationColor)),V.anisotropy>0&&(R.anisotropyVector.value.set(V.anisotropy*Math.cos(V.anisotropyRotation),V.anisotropy*Math.sin(V.anisotropyRotation)),V.anisotropyMap&&(R.anisotropyMap.value=V.anisotropyMap,t(V.anisotropyMap,R.anisotropyMapTransform))),R.specularIntensity.value=V.specularIntensity,R.specularColor.value.copy(V.specularColor),V.specularColorMap&&(R.specularColorMap.value=V.specularColorMap,t(V.specularColorMap,R.specularColorMapTransform)),V.specularIntensityMap&&(R.specularIntensityMap.value=V.specularIntensityMap,t(V.specularIntensityMap,R.specularIntensityMapTransform))}function H(R,V){V.matcap&&(R.matcap.value=V.matcap)}function Y(R,V){const be=e.get(V).light;R.referencePosition.value.setFromMatrixPosition(be.matrixWorld),R.nearDistance.value=be.shadow.camera.near,R.farDistance.value=be.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function WebGLUniformsGroups(n,e,t,i){let r={},s={},o=[];const l=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function u(be,ct){const ot=ct.program;i.uniformBlockBinding(be,ot)}function h(be,ct){let ot=r[be.id];ot===void 0&&(H(be),ot=f(be),r[be.id]=ot,be.addEventListener("dispose",R));const dt=ct.program;i.updateUBOMapping(be,dt);const pt=e.render.frame;s[be.id]!==pt&&(p(be),s[be.id]=pt)}function f(be){const ct=S();be.__bindingPointIndex=ct;const ot=n.createBuffer(),dt=be.__size,pt=be.usage;return n.bindBuffer(n.UNIFORM_BUFFER,ot),n.bufferData(n.UNIFORM_BUFFER,dt,pt),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,ct,ot),ot}function S(){for(let be=0;be<l;be++)if(o.indexOf(be)===-1)return o.push(be),be;return error("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(be){const ct=r[be.id],ot=be.uniforms,dt=be.__cache;n.bindBuffer(n.UNIFORM_BUFFER,ct);for(let pt=0,St=ot.length;pt<St;pt++){const at=Array.isArray(ot[pt])?ot[pt]:[ot[pt]];for(let ut=0,Gt=at.length;ut<Gt;ut++){const xt=at[ut];if(I(xt,pt,ut,dt)===!0){const Lt=xt.__offset,Rt=Array.isArray(xt.value)?xt.value:[xt.value];let Nt=0;for(let Dt=0;Dt<Rt.length;Dt++){const Ut=Rt[Dt],Ct=Y(Ut);typeof Ut=="number"||typeof Ut=="boolean"?(xt.__data[0]=Ut,n.bufferSubData(n.UNIFORM_BUFFER,Lt+Nt,xt.__data)):Ut.isMatrix3?(xt.__data[0]=Ut.elements[0],xt.__data[1]=Ut.elements[1],xt.__data[2]=Ut.elements[2],xt.__data[3]=0,xt.__data[4]=Ut.elements[3],xt.__data[5]=Ut.elements[4],xt.__data[6]=Ut.elements[5],xt.__data[7]=0,xt.__data[8]=Ut.elements[6],xt.__data[9]=Ut.elements[7],xt.__data[10]=Ut.elements[8],xt.__data[11]=0):(Ut.toArray(xt.__data,Nt),Nt+=Ct.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,Lt,xt.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function I(be,ct,ot,dt){const pt=be.value,St=ct+"_"+ot;if(dt[St]===void 0)return typeof pt=="number"||typeof pt=="boolean"?dt[St]=pt:dt[St]=pt.clone(),!0;{const at=dt[St];if(typeof pt=="number"||typeof pt=="boolean"){if(at!==pt)return dt[St]=pt,!0}else if(at.equals(pt)===!1)return at.copy(pt),!0}return!1}function H(be){const ct=be.uniforms;let ot=0;const dt=16;for(let St=0,at=ct.length;St<at;St++){const ut=Array.isArray(ct[St])?ct[St]:[ct[St]];for(let Gt=0,xt=ut.length;Gt<xt;Gt++){const Lt=ut[Gt],Rt=Array.isArray(Lt.value)?Lt.value:[Lt.value];for(let Nt=0,Dt=Rt.length;Nt<Dt;Nt++){const Ut=Rt[Nt],Ct=Y(Ut),Ot=ot%dt,qt=Ot%Ct.boundary,Zt=Ot+qt;ot+=qt,Zt!==0&&dt-Zt<Ct.storage&&(ot+=dt-Zt),Lt.__data=new Float32Array(Ct.storage/Float32Array.BYTES_PER_ELEMENT),Lt.__offset=ot,ot+=Ct.storage}}}const pt=ot%dt;return pt>0&&(ot+=dt-pt),be.__size=ot,be.__cache={},this}function Y(be){const ct={boundary:0,storage:0};return typeof be=="number"||typeof be=="boolean"?(ct.boundary=4,ct.storage=4):be.isVector2?(ct.boundary=8,ct.storage=8):be.isVector3||be.isColor?(ct.boundary=16,ct.storage=12):be.isVector4?(ct.boundary=16,ct.storage=16):be.isMatrix3?(ct.boundary=48,ct.storage=48):be.isMatrix4?(ct.boundary=64,ct.storage=64):be.isTexture?warn("WebGLRenderer: Texture samplers can not be part of an uniforms group."):warn("WebGLRenderer: Unsupported uniform value type.",be),ct}function R(be){const ct=be.target;ct.removeEventListener("dispose",R);const ot=o.indexOf(ct.__bindingPointIndex);o.splice(ot,1),n.deleteBuffer(r[ct.id]),delete r[ct.id],delete s[ct.id]}function V(){for(const be in r)n.deleteBuffer(r[be]);o=[],r={},s={}}return{bind:u,update:h,dispose:V}}const DATA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let lut=null;function getDFGLUT(){return lut===null&&(lut=new DataTexture(DATA,16,16,RGFormat,HalfFloatType),lut.name="DFG_LUT",lut.minFilter=LinearFilter,lut.magFilter=LinearFilter,lut.wrapS=ClampToEdgeWrapping,lut.wrapT=ClampToEdgeWrapping,lut.generateMipmaps=!1,lut.needsUpdate=!0),lut}class WebGLRenderer{constructor(e={}){const{canvas:t=createCanvasElement(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:l=!1,premultipliedAlpha:u=!0,preserveDrawingBuffer:h=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:S=!1,reversedDepthBuffer:p=!1,outputBufferType:I=UnsignedByteType}=e;this.isWebGLRenderer=!0;let H;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");H=i.getContextAttributes().alpha}else H=o;const Y=I,R=new Set([RGBAIntegerFormat,RGIntegerFormat,RedIntegerFormat]),V=new Set([UnsignedByteType,UnsignedIntType,UnsignedShortType,UnsignedInt248Type,UnsignedShort4444Type,UnsignedShort5551Type]),be=new Uint32Array(4),ct=new Int32Array(4);let ot=null,dt=null;const pt=[],St=[];let at=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=NoToneMapping,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const ut=this;let Gt=!1;this._outputColorSpace=SRGBColorSpace;let xt=0,Lt=0,Rt=null,Nt=-1,Dt=null;const Ut=new Vector4,Ct=new Vector4;let Ot=null;const qt=new Color$1(0);let Zt=0,Qt=t.width,Jt=t.height,un=1,Tn=null,dn=null;const Wt=new Vector4(0,0,Qt,Jt),Yt=new Vector4(0,0,Qt,Jt);let jt=!1;const pn=new Frustum;let hn=!1,fn=!1;const Ln=new Matrix4,vn=new Vector3,Sn=new Vector4,Mn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let mn=!1;function Dn(){return Rt===null?un:1}let vt=i;function In(lt,Et){return t.getContext(lt,Et)}try{const lt={alpha:!0,depth:r,stencil:s,antialias:l,premultipliedAlpha:u,preserveDrawingBuffer:h,powerPreference:f,failIfMajorPerformanceCaveat:S};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${REVISION}`),t.addEventListener("webglcontextlost",sn,!1),t.addEventListener("webglcontextrestored",gn,!1),t.addEventListener("webglcontextcreationerror",Pn,!1),vt===null){const Et="webgl2";if(vt=In(Et,lt),vt===null)throw In(Et)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(lt){throw error("WebGLRenderer: "+lt.message),lt}let yn,En,rn,ht,xe,d,ft,_t,Mt,wt,ee,gt,Tt,yt,bt,Pt,At,Bt,Vt,mt,$t,zt,Kt;function Xt(){yn=new WebGLExtensions(vt),yn.init(),$t=new WebGLUtils(vt,yn),En=new WebGLCapabilities(vt,yn,e,$t),rn=new WebGLState(vt,yn),En.reversedDepthBuffer&&p&&rn.buffers.depth.setReversed(!0),ht=new WebGLInfo(vt),xe=new WebGLProperties,d=new WebGLTextures(vt,yn,rn,xe,En,$t,ht),ft=new WebGLEnvironments(ut),_t=new WebGLAttributes(vt),zt=new WebGLBindingStates(vt,_t),Mt=new WebGLGeometries(vt,_t,ht,zt),wt=new WebGLObjects(vt,Mt,_t,zt,ht),Bt=new WebGLMorphtargets(vt,En,d),bt=new WebGLClipping(xe),ee=new WebGLPrograms(ut,ft,yn,En,zt,bt),gt=new WebGLMaterials(ut,xe),Tt=new WebGLRenderLists,yt=new WebGLRenderStates(yn),At=new WebGLBackground(ut,ft,rn,wt,H,u),Pt=new WebGLShadowMap(ut,wt,En),Kt=new WebGLUniformsGroups(vt,ht,En,rn),Vt=new WebGLBufferRenderer(vt,yn,ht),mt=new WebGLIndexedBufferRenderer(vt,yn,ht),ht.programs=ee.programs,ut.capabilities=En,ut.extensions=yn,ut.properties=xe,ut.renderLists=Tt,ut.shadowMap=Pt,ut.state=rn,ut.info=ht}Xt(),Y!==UnsignedByteType&&(at=new WebGLOutput(Y,t.width,t.height,r,s));const Ht=new WebXRManager(ut,vt);this.xr=Ht,this.getContext=function(){return vt},this.getContextAttributes=function(){return vt.getContextAttributes()},this.forceContextLoss=function(){const lt=yn.get("WEBGL_lose_context");lt&&lt.loseContext()},this.forceContextRestore=function(){const lt=yn.get("WEBGL_lose_context");lt&&lt.restoreContext()},this.getPixelRatio=function(){return un},this.setPixelRatio=function(lt){lt!==void 0&&(un=lt,this.setSize(Qt,Jt,!1))},this.getSize=function(lt){return lt.set(Qt,Jt)},this.setSize=function(lt,Et,kt=!0){if(Ht.isPresenting){warn("WebGLRenderer: Can't change size while VR device is presenting.");return}Qt=lt,Jt=Et,t.width=Math.floor(lt*un),t.height=Math.floor(Et*un),kt===!0&&(t.style.width=lt+"px",t.style.height=Et+"px"),at!==null&&at.setSize(t.width,t.height),this.setViewport(0,0,lt,Et)},this.getDrawingBufferSize=function(lt){return lt.set(Qt*un,Jt*un).floor()},this.setDrawingBufferSize=function(lt,Et,kt){Qt=lt,Jt=Et,un=kt,t.width=Math.floor(lt*kt),t.height=Math.floor(Et*kt),this.setViewport(0,0,lt,Et)},this.setEffects=function(lt){if(Y===UnsignedByteType){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(lt){for(let Et=0;Et<lt.length;Et++)if(lt[Et].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}at.setEffects(lt||[])},this.getCurrentViewport=function(lt){return lt.copy(Ut)},this.getViewport=function(lt){return lt.copy(Wt)},this.setViewport=function(lt,Et,kt,Ft){lt.isVector4?Wt.set(lt.x,lt.y,lt.z,lt.w):Wt.set(lt,Et,kt,Ft),rn.viewport(Ut.copy(Wt).multiplyScalar(un).round())},this.getScissor=function(lt){return lt.copy(Yt)},this.setScissor=function(lt,Et,kt,Ft){lt.isVector4?Yt.set(lt.x,lt.y,lt.z,lt.w):Yt.set(lt,Et,kt,Ft),rn.scissor(Ct.copy(Yt).multiplyScalar(un).round())},this.getScissorTest=function(){return jt},this.setScissorTest=function(lt){rn.setScissorTest(jt=lt)},this.setOpaqueSort=function(lt){Tn=lt},this.setTransparentSort=function(lt){dn=lt},this.getClearColor=function(lt){return lt.copy(At.getClearColor())},this.setClearColor=function(){At.setClearColor(...arguments)},this.getClearAlpha=function(){return At.getClearAlpha()},this.setClearAlpha=function(){At.setClearAlpha(...arguments)},this.clear=function(lt=!0,Et=!0,kt=!0){let Ft=0;if(lt){let It=!1;if(Rt!==null){const en=Rt.texture.format;It=R.has(en)}if(It){const en=Rt.texture.type,nn=V.has(en),tn=At.getClearColor(),an=At.getClearAlpha(),ln=tn.r,_n=tn.g,xn=tn.b;nn?(be[0]=ln,be[1]=_n,be[2]=xn,be[3]=an,vt.clearBufferuiv(vt.COLOR,0,be)):(ct[0]=ln,ct[1]=_n,ct[2]=xn,ct[3]=an,vt.clearBufferiv(vt.COLOR,0,ct))}else Ft|=vt.COLOR_BUFFER_BIT}Et&&(Ft|=vt.DEPTH_BUFFER_BIT),kt&&(Ft|=vt.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Ft!==0&&vt.clear(Ft)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",sn,!1),t.removeEventListener("webglcontextrestored",gn,!1),t.removeEventListener("webglcontextcreationerror",Pn,!1),At.dispose(),Tt.dispose(),yt.dispose(),xe.dispose(),ft.dispose(),wt.dispose(),zt.dispose(),Kt.dispose(),ee.dispose(),Ht.dispose(),Ht.removeEventListener("sessionstart",ii),Ht.removeEventListener("sessionend",ri),qn.stop()};function sn(lt){lt.preventDefault(),log("WebGLRenderer: Context Lost."),Gt=!0}function gn(){log("WebGLRenderer: Context Restored."),Gt=!1;const lt=ht.autoReset,Et=Pt.enabled,kt=Pt.autoUpdate,Ft=Pt.needsUpdate,It=Pt.type;Xt(),ht.autoReset=lt,Pt.enabled=Et,Pt.autoUpdate=kt,Pt.needsUpdate=Ft,Pt.type=It}function Pn(lt){error("WebGLRenderer: A WebGL context could not be created. Reason: ",lt.statusMessage)}function An(lt){const Et=lt.target;Et.removeEventListener("dispose",An),zn(Et)}function zn(lt){Hn(lt),xe.remove(lt)}function Hn(lt){const Et=xe.get(lt).programs;Et!==void 0&&(Et.forEach(function(kt){ee.releaseProgram(kt)}),lt.isShaderMaterial&&ee.releaseShaderCache(lt))}this.renderBufferDirect=function(lt,Et,kt,Ft,It,en){Et===null&&(Et=Mn);const nn=It.isMesh&&It.matrixWorld.determinant()<0,tn=fi(lt,Et,kt,Ft,It);rn.setMaterial(Ft,nn);let an=kt.index,ln=1;if(Ft.wireframe===!0){if(an=Mt.getWireframeAttribute(kt),an===void 0)return;ln=2}const _n=kt.drawRange,xn=kt.attributes.position;let cn=_n.start*ln,wn=(_n.start+_n.count)*ln;en!==null&&(cn=Math.max(cn,en.start*ln),wn=Math.min(wn,(en.start+en.count)*ln)),an!==null?(cn=Math.max(cn,0),wn=Math.min(wn,an.count)):xn!=null&&(cn=Math.max(cn,0),wn=Math.min(wn,xn.count));const Nn=wn-cn;if(Nn<0||Nn===1/0)return;zt.setup(It,Ft,tn,kt,an);let Fn,Cn=Vt;if(an!==null&&(Fn=_t.get(an),Cn=mt,Cn.setIndex(Fn)),It.isMesh)Ft.wireframe===!0?(rn.setLineWidth(Ft.wireframeLinewidth*Dn()),Cn.setMode(vt.LINES)):Cn.setMode(vt.TRIANGLES);else if(It.isLine){let Bn=Ft.linewidth;Bn===void 0&&(Bn=1),rn.setLineWidth(Bn*Dn()),It.isLineSegments?Cn.setMode(vt.LINES):It.isLineLoop?Cn.setMode(vt.LINE_LOOP):Cn.setMode(vt.LINE_STRIP)}else It.isPoints?Cn.setMode(vt.POINTS):It.isSprite&&Cn.setMode(vt.TRIANGLES);if(It.isBatchedMesh)if(It._multiDrawInstances!==null)warnOnce("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Cn.renderMultiDrawInstances(It._multiDrawStarts,It._multiDrawCounts,It._multiDrawCount,It._multiDrawInstances);else if(yn.get("WEBGL_multi_draw"))Cn.renderMultiDraw(It._multiDrawStarts,It._multiDrawCounts,It._multiDrawCount);else{const Bn=It._multiDrawStarts,on=It._multiDrawCounts,kn=It._multiDrawCount,bn=an?_t.get(an).bytesPerElement:1,Gn=xe.get(Ft).currentProgram.getUniforms();for(let Vn=0;Vn<kn;Vn++)Gn.setValue(vt,"_gl_DrawID",Vn),Cn.render(Bn[Vn]/bn,on[Vn])}else if(It.isInstancedMesh)Cn.renderInstances(cn,Nn,It.count);else if(kt.isInstancedBufferGeometry){const Bn=kt._maxInstanceCount!==void 0?kt._maxInstanceCount:1/0,on=Math.min(kt.instanceCount,Bn);Cn.renderInstances(cn,Nn,on)}else Cn.render(cn,Nn)};function ni(lt,Et,kt){lt.transparent===!0&&lt.side===DoubleSide&&lt.forceSinglePass===!1?(lt.side=BackSide,lt.needsUpdate=!0,Zn(lt,Et,kt),lt.side=FrontSide,lt.needsUpdate=!0,Zn(lt,Et,kt),lt.side=DoubleSide):Zn(lt,Et,kt)}this.compile=function(lt,Et,kt=null){kt===null&&(kt=lt),dt=yt.get(kt),dt.init(Et),St.push(dt),kt.traverseVisible(function(It){It.isLight&&It.layers.test(Et.layers)&&(dt.pushLight(It),It.castShadow&&dt.pushShadow(It))}),lt!==kt&&lt.traverseVisible(function(It){It.isLight&&It.layers.test(Et.layers)&&(dt.pushLight(It),It.castShadow&&dt.pushShadow(It))}),dt.setupLights();const Ft=new Set;return lt.traverse(function(It){if(!(It.isMesh||It.isPoints||It.isLine||It.isSprite))return;const en=It.material;if(en)if(Array.isArray(en))for(let nn=0;nn<en.length;nn++){const tn=en[nn];ni(tn,kt,It),Ft.add(tn)}else ni(en,kt,It),Ft.add(en)}),dt=St.pop(),Ft},this.compileAsync=function(lt,Et,kt=null){const Ft=this.compile(lt,Et,kt);return new Promise(It=>{function en(){if(Ft.forEach(function(nn){xe.get(nn).currentProgram.isReady()&&Ft.delete(nn)}),Ft.size===0){It(lt);return}setTimeout(en,10)}yn.get("KHR_parallel_shader_compile")!==null?en():setTimeout(en,10)})};let Jn=null;function hi(lt){Jn&&Jn(lt)}function ii(){qn.stop()}function ri(){qn.start()}const qn=new WebGLAnimation;qn.setAnimationLoop(hi),typeof self<"u"&&qn.setContext(self),this.setAnimationLoop=function(lt){Jn=lt,Ht.setAnimationLoop(lt),lt===null?qn.stop():qn.start()},Ht.addEventListener("sessionstart",ii),Ht.addEventListener("sessionend",ri),this.render=function(lt,Et){if(Et!==void 0&&Et.isCamera!==!0){error("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(Gt===!0)return;const kt=Ht.enabled===!0&&Ht.isPresenting===!0,Ft=at!==null&&(Rt===null||kt)&&at.begin(ut,Rt);if(lt.matrixWorldAutoUpdate===!0&&lt.updateMatrixWorld(),Et.parent===null&&Et.matrixWorldAutoUpdate===!0&&Et.updateMatrixWorld(),Ht.enabled===!0&&Ht.isPresenting===!0&&(at===null||at.isCompositing()===!1)&&(Ht.cameraAutoUpdate===!0&&Ht.updateCamera(Et),Et=Ht.getCamera()),lt.isScene===!0&&lt.onBeforeRender(ut,lt,Et,Rt),dt=yt.get(lt,St.length),dt.init(Et),St.push(dt),Ln.multiplyMatrices(Et.projectionMatrix,Et.matrixWorldInverse),pn.setFromProjectionMatrix(Ln,WebGLCoordinateSystem,Et.reversedDepth),fn=this.localClippingEnabled,hn=bt.init(this.clippingPlanes,fn),ot=Tt.get(lt,pt.length),ot.init(),pt.push(ot),Ht.enabled===!0&&Ht.isPresenting===!0){const nn=ut.xr.getDepthSensingMesh();nn!==null&&Qn(nn,Et,-1/0,ut.sortObjects)}Qn(lt,Et,0,ut.sortObjects),ot.finish(),ut.sortObjects===!0&&ot.sort(Tn,dn),mn=Ht.enabled===!1||Ht.isPresenting===!1||Ht.hasDepthSensing()===!1,mn&&At.addToRenderList(ot,lt),this.info.render.frame++,hn===!0&&bt.beginShadows();const It=dt.state.shadowsArray;if(Pt.render(It,lt,Et),hn===!0&&bt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Ft&&at.hasRenderPass())===!1){const nn=ot.opaque,tn=ot.transmissive;if(dt.setupLights(),Et.isArrayCamera){const an=Et.cameras;if(tn.length>0)for(let ln=0,_n=an.length;ln<_n;ln++){const xn=an[ln];ai(nn,tn,lt,xn)}mn&&At.render(lt);for(let ln=0,_n=an.length;ln<_n;ln++){const xn=an[ln];si(ot,lt,xn,xn.viewport)}}else tn.length>0&&ai(nn,tn,lt,Et),mn&&At.render(lt),si(ot,lt,Et)}Rt!==null&&Lt===0&&(d.updateMultisampleRenderTarget(Rt),d.updateRenderTargetMipmap(Rt)),Ft&&at.end(ut),lt.isScene===!0&&lt.onAfterRender(ut,lt,Et),zt.resetDefaultState(),Nt=-1,Dt=null,St.pop(),St.length>0?(dt=St[St.length-1],hn===!0&&bt.setGlobalState(ut.clippingPlanes,dt.state.camera)):dt=null,pt.pop(),pt.length>0?ot=pt[pt.length-1]:ot=null};function Qn(lt,Et,kt,Ft){if(lt.visible===!1)return;if(lt.layers.test(Et.layers)){if(lt.isGroup)kt=lt.renderOrder;else if(lt.isLOD)lt.autoUpdate===!0&&lt.update(Et);else if(lt.isLight)dt.pushLight(lt),lt.castShadow&&dt.pushShadow(lt);else if(lt.isSprite){if(!lt.frustumCulled||pn.intersectsSprite(lt)){Ft&&Sn.setFromMatrixPosition(lt.matrixWorld).applyMatrix4(Ln);const nn=wt.update(lt),tn=lt.material;tn.visible&&ot.push(lt,nn,tn,kt,Sn.z,null)}}else if((lt.isMesh||lt.isLine||lt.isPoints)&&(!lt.frustumCulled||pn.intersectsObject(lt))){const nn=wt.update(lt),tn=lt.material;if(Ft&&(lt.boundingSphere!==void 0?(lt.boundingSphere===null&&lt.computeBoundingSphere(),Sn.copy(lt.boundingSphere.center)):(nn.boundingSphere===null&&nn.computeBoundingSphere(),Sn.copy(nn.boundingSphere.center)),Sn.applyMatrix4(lt.matrixWorld).applyMatrix4(Ln)),Array.isArray(tn)){const an=nn.groups;for(let ln=0,_n=an.length;ln<_n;ln++){const xn=an[ln],cn=tn[xn.materialIndex];cn&&cn.visible&&ot.push(lt,nn,cn,kt,Sn.z,xn)}}else tn.visible&&ot.push(lt,nn,tn,kt,Sn.z,null)}}const en=lt.children;for(let nn=0,tn=en.length;nn<tn;nn++)Qn(en[nn],Et,kt,Ft)}function si(lt,Et,kt,Ft){const{opaque:It,transmissive:en,transparent:nn}=lt;dt.setupLightsView(kt),hn===!0&&bt.setGlobalState(ut.clippingPlanes,kt),Ft&&rn.viewport(Ut.copy(Ft)),It.length>0&&Kn(It,Et,kt),en.length>0&&Kn(en,Et,kt),nn.length>0&&Kn(nn,Et,kt),rn.buffers.depth.setTest(!0),rn.buffers.depth.setMask(!0),rn.buffers.color.setMask(!0),rn.setPolygonOffset(!1)}function ai(lt,Et,kt,Ft){if((kt.isScene===!0?kt.overrideMaterial:null)!==null)return;if(dt.state.transmissionRenderTarget[Ft.id]===void 0){const cn=yn.has("EXT_color_buffer_half_float")||yn.has("EXT_color_buffer_float");dt.state.transmissionRenderTarget[Ft.id]=new WebGLRenderTarget(1,1,{generateMipmaps:!0,type:cn?HalfFloatType:UnsignedByteType,minFilter:LinearMipmapLinearFilter,samples:Math.max(4,En.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ColorManagement.workingColorSpace})}const en=dt.state.transmissionRenderTarget[Ft.id],nn=Ft.viewport||Ut;en.setSize(nn.z*ut.transmissionResolutionScale,nn.w*ut.transmissionResolutionScale);const tn=ut.getRenderTarget(),an=ut.getActiveCubeFace(),ln=ut.getActiveMipmapLevel();ut.setRenderTarget(en),ut.getClearColor(qt),Zt=ut.getClearAlpha(),Zt<1&&ut.setClearColor(16777215,.5),ut.clear(),mn&&At.render(kt);const _n=ut.toneMapping;ut.toneMapping=NoToneMapping;const xn=Ft.viewport;if(Ft.viewport!==void 0&&(Ft.viewport=void 0),dt.setupLightsView(Ft),hn===!0&&bt.setGlobalState(ut.clippingPlanes,Ft),Kn(lt,kt,Ft),d.updateMultisampleRenderTarget(en),d.updateRenderTargetMipmap(en),yn.has("WEBGL_multisampled_render_to_texture")===!1){let cn=!1;for(let wn=0,Nn=Et.length;wn<Nn;wn++){const Fn=Et[wn],{object:Cn,geometry:Bn,material:on,group:kn}=Fn;if(on.side===DoubleSide&&Cn.layers.test(Ft.layers)){const bn=on.side;on.side=BackSide,on.needsUpdate=!0,oi(Cn,kt,Ft,Bn,on,kn),on.side=bn,on.needsUpdate=!0,cn=!0}}cn===!0&&(d.updateMultisampleRenderTarget(en),d.updateRenderTargetMipmap(en))}ut.setRenderTarget(tn,an,ln),ut.setClearColor(qt,Zt),xn!==void 0&&(Ft.viewport=xn),ut.toneMapping=_n}function Kn(lt,Et,kt){const Ft=Et.isScene===!0?Et.overrideMaterial:null;for(let It=0,en=lt.length;It<en;It++){const nn=lt[It],{object:tn,geometry:an,group:ln}=nn;let _n=nn.material;_n.allowOverride===!0&&Ft!==null&&(_n=Ft),tn.layers.test(kt.layers)&&oi(tn,Et,kt,an,_n,ln)}}function oi(lt,Et,kt,Ft,It,en){lt.onBeforeRender(ut,Et,kt,Ft,It,en),lt.modelViewMatrix.multiplyMatrices(kt.matrixWorldInverse,lt.matrixWorld),lt.normalMatrix.getNormalMatrix(lt.modelViewMatrix),It.onBeforeRender(ut,Et,kt,Ft,lt,en),It.transparent===!0&&It.side===DoubleSide&&It.forceSinglePass===!1?(It.side=BackSide,It.needsUpdate=!0,ut.renderBufferDirect(kt,Et,Ft,It,lt,en),It.side=FrontSide,It.needsUpdate=!0,ut.renderBufferDirect(kt,Et,Ft,It,lt,en),It.side=DoubleSide):ut.renderBufferDirect(kt,Et,Ft,It,lt,en),lt.onAfterRender(ut,Et,kt,Ft,It,en)}function Zn(lt,Et,kt){Et.isScene!==!0&&(Et=Mn);const Ft=xe.get(lt),It=dt.state.lights,en=dt.state.shadowsArray,nn=It.state.version,tn=ee.getParameters(lt,It.state,en,Et,kt),an=ee.getProgramCacheKey(tn);let ln=Ft.programs;Ft.environment=lt.isMeshStandardMaterial||lt.isMeshLambertMaterial||lt.isMeshPhongMaterial?Et.environment:null,Ft.fog=Et.fog;const _n=lt.isMeshStandardMaterial||lt.isMeshLambertMaterial&&!lt.envMap||lt.isMeshPhongMaterial&&!lt.envMap;Ft.envMap=ft.get(lt.envMap||Ft.environment,_n),Ft.envMapRotation=Ft.environment!==null&&lt.envMap===null?Et.environmentRotation:lt.envMapRotation,ln===void 0&&(lt.addEventListener("dispose",An),ln=new Map,Ft.programs=ln);let xn=ln.get(an);if(xn!==void 0){if(Ft.currentProgram===xn&&Ft.lightsStateVersion===nn)return ci(lt,tn),xn}else tn.uniforms=ee.getUniforms(lt),lt.onBeforeCompile(tn,ut),xn=ee.acquireProgram(tn,an),ln.set(an,xn),Ft.uniforms=tn.uniforms;const cn=Ft.uniforms;return(!lt.isShaderMaterial&&!lt.isRawShaderMaterial||lt.clipping===!0)&&(cn.clippingPlanes=bt.uniform),ci(lt,tn),Ft.needsLights=pi(lt),Ft.lightsStateVersion=nn,Ft.needsLights&&(cn.ambientLightColor.value=It.state.ambient,cn.lightProbe.value=It.state.probe,cn.directionalLights.value=It.state.directional,cn.directionalLightShadows.value=It.state.directionalShadow,cn.spotLights.value=It.state.spot,cn.spotLightShadows.value=It.state.spotShadow,cn.rectAreaLights.value=It.state.rectArea,cn.ltc_1.value=It.state.rectAreaLTC1,cn.ltc_2.value=It.state.rectAreaLTC2,cn.pointLights.value=It.state.point,cn.pointLightShadows.value=It.state.pointShadow,cn.hemisphereLights.value=It.state.hemi,cn.directionalShadowMatrix.value=It.state.directionalShadowMatrix,cn.spotLightMatrix.value=It.state.spotLightMatrix,cn.spotLightMap.value=It.state.spotLightMap,cn.pointShadowMatrix.value=It.state.pointShadowMatrix),Ft.currentProgram=xn,Ft.uniformsList=null,xn}function li(lt){if(lt.uniformsList===null){const Et=lt.currentProgram.getUniforms();lt.uniformsList=WebGLUniforms.seqWithValue(Et.seq,lt.uniforms)}return lt.uniformsList}function ci(lt,Et){const kt=xe.get(lt);kt.outputColorSpace=Et.outputColorSpace,kt.batching=Et.batching,kt.batchingColor=Et.batchingColor,kt.instancing=Et.instancing,kt.instancingColor=Et.instancingColor,kt.instancingMorph=Et.instancingMorph,kt.skinning=Et.skinning,kt.morphTargets=Et.morphTargets,kt.morphNormals=Et.morphNormals,kt.morphColors=Et.morphColors,kt.morphTargetsCount=Et.morphTargetsCount,kt.numClippingPlanes=Et.numClippingPlanes,kt.numIntersection=Et.numClipIntersection,kt.vertexAlphas=Et.vertexAlphas,kt.vertexTangents=Et.vertexTangents,kt.toneMapping=Et.toneMapping}function fi(lt,Et,kt,Ft,It){Et.isScene!==!0&&(Et=Mn),d.resetTextureUnits();const en=Et.fog,nn=Ft.isMeshStandardMaterial||Ft.isMeshLambertMaterial||Ft.isMeshPhongMaterial?Et.environment:null,tn=Rt===null?ut.outputColorSpace:Rt.isXRRenderTarget===!0?Rt.texture.colorSpace:LinearSRGBColorSpace,an=Ft.isMeshStandardMaterial||Ft.isMeshLambertMaterial&&!Ft.envMap||Ft.isMeshPhongMaterial&&!Ft.envMap,ln=ft.get(Ft.envMap||nn,an),_n=Ft.vertexColors===!0&&!!kt.attributes.color&&kt.attributes.color.itemSize===4,xn=!!kt.attributes.tangent&&(!!Ft.normalMap||Ft.anisotropy>0),cn=!!kt.morphAttributes.position,wn=!!kt.morphAttributes.normal,Nn=!!kt.morphAttributes.color;let Fn=NoToneMapping;Ft.toneMapped&&(Rt===null||Rt.isXRRenderTarget===!0)&&(Fn=ut.toneMapping);const Cn=kt.morphAttributes.position||kt.morphAttributes.normal||kt.morphAttributes.color,Bn=Cn!==void 0?Cn.length:0,on=xe.get(Ft),kn=dt.state.lights;if(hn===!0&&(fn===!0||lt!==Dt)){const Un=lt===Dt&&Ft.id===Nt;bt.setState(Ft,lt,Un)}let bn=!1;Ft.version===on.__version?(on.needsLights&&on.lightsStateVersion!==kn.state.version||on.outputColorSpace!==tn||It.isBatchedMesh&&on.batching===!1||!It.isBatchedMesh&&on.batching===!0||It.isBatchedMesh&&on.batchingColor===!0&&It.colorTexture===null||It.isBatchedMesh&&on.batchingColor===!1&&It.colorTexture!==null||It.isInstancedMesh&&on.instancing===!1||!It.isInstancedMesh&&on.instancing===!0||It.isSkinnedMesh&&on.skinning===!1||!It.isSkinnedMesh&&on.skinning===!0||It.isInstancedMesh&&on.instancingColor===!0&&It.instanceColor===null||It.isInstancedMesh&&on.instancingColor===!1&&It.instanceColor!==null||It.isInstancedMesh&&on.instancingMorph===!0&&It.morphTexture===null||It.isInstancedMesh&&on.instancingMorph===!1&&It.morphTexture!==null||on.envMap!==ln||Ft.fog===!0&&on.fog!==en||on.numClippingPlanes!==void 0&&(on.numClippingPlanes!==bt.numPlanes||on.numIntersection!==bt.numIntersection)||on.vertexAlphas!==_n||on.vertexTangents!==xn||on.morphTargets!==cn||on.morphNormals!==wn||on.morphColors!==Nn||on.toneMapping!==Fn||on.morphTargetsCount!==Bn)&&(bn=!0):(bn=!0,on.__version=Ft.version);let Gn=on.currentProgram;bn===!0&&(Gn=Zn(Ft,Et,It));let Vn=!1,Xn=!1,Yn=!1;const Rn=Gn.getUniforms(),On=on.uniforms;if(rn.useProgram(Gn.program)&&(Vn=!0,Xn=!0,Yn=!0),Ft.id!==Nt&&(Nt=Ft.id,Xn=!0),Vn||Dt!==lt){rn.buffers.depth.getReversed()&&lt.reversedDepth!==!0&&(lt._reversedDepth=!0,lt.updateProjectionMatrix()),Rn.setValue(vt,"projectionMatrix",lt.projectionMatrix),Rn.setValue(vt,"viewMatrix",lt.matrixWorldInverse);const $n=Rn.map.cameraPosition;$n!==void 0&&$n.setValue(vt,vn.setFromMatrixPosition(lt.matrixWorld)),En.logarithmicDepthBuffer&&Rn.setValue(vt,"logDepthBufFC",2/(Math.log(lt.far+1)/Math.LN2)),(Ft.isMeshPhongMaterial||Ft.isMeshToonMaterial||Ft.isMeshLambertMaterial||Ft.isMeshBasicMaterial||Ft.isMeshStandardMaterial||Ft.isShaderMaterial)&&Rn.setValue(vt,"isOrthographic",lt.isOrthographicCamera===!0),Dt!==lt&&(Dt=lt,Xn=!0,Yn=!0)}if(on.needsLights&&(kn.state.directionalShadowMap.length>0&&Rn.setValue(vt,"directionalShadowMap",kn.state.directionalShadowMap,d),kn.state.spotShadowMap.length>0&&Rn.setValue(vt,"spotShadowMap",kn.state.spotShadowMap,d),kn.state.pointShadowMap.length>0&&Rn.setValue(vt,"pointShadowMap",kn.state.pointShadowMap,d)),It.isSkinnedMesh){Rn.setOptional(vt,It,"bindMatrix"),Rn.setOptional(vt,It,"bindMatrixInverse");const Un=It.skeleton;Un&&(Un.boneTexture===null&&Un.computeBoneTexture(),Rn.setValue(vt,"boneTexture",Un.boneTexture,d))}It.isBatchedMesh&&(Rn.setOptional(vt,It,"batchingTexture"),Rn.setValue(vt,"batchingTexture",It._matricesTexture,d),Rn.setOptional(vt,It,"batchingIdTexture"),Rn.setValue(vt,"batchingIdTexture",It._indirectTexture,d),Rn.setOptional(vt,It,"batchingColorTexture"),It._colorsTexture!==null&&Rn.setValue(vt,"batchingColorTexture",It._colorsTexture,d));const Wn=kt.morphAttributes;if((Wn.position!==void 0||Wn.normal!==void 0||Wn.color!==void 0)&&Bt.update(It,kt,Gn),(Xn||on.receiveShadow!==It.receiveShadow)&&(on.receiveShadow=It.receiveShadow,Rn.setValue(vt,"receiveShadow",It.receiveShadow)),(Ft.isMeshStandardMaterial||Ft.isMeshLambertMaterial||Ft.isMeshPhongMaterial)&&Ft.envMap===null&&Et.environment!==null&&(On.envMapIntensity.value=Et.environmentIntensity),On.dfgLUT!==void 0&&(On.dfgLUT.value=getDFGLUT()),Xn&&(Rn.setValue(vt,"toneMappingExposure",ut.toneMappingExposure),on.needsLights&&di(On,Yn),en&&Ft.fog===!0&&gt.refreshFogUniforms(On,en),gt.refreshMaterialUniforms(On,Ft,un,Jt,dt.state.transmissionRenderTarget[lt.id]),WebGLUniforms.upload(vt,li(on),On,d)),Ft.isShaderMaterial&&Ft.uniformsNeedUpdate===!0&&(WebGLUniforms.upload(vt,li(on),On,d),Ft.uniformsNeedUpdate=!1),Ft.isSpriteMaterial&&Rn.setValue(vt,"center",It.center),Rn.setValue(vt,"modelViewMatrix",It.modelViewMatrix),Rn.setValue(vt,"normalMatrix",It.normalMatrix),Rn.setValue(vt,"modelMatrix",It.matrixWorld),Ft.isShaderMaterial||Ft.isRawShaderMaterial){const Un=Ft.uniformsGroups;for(let $n=0,jn=Un.length;$n<jn;$n++){const ui=Un[$n];Kt.update(ui,Gn),Kt.bind(ui,Gn)}}return Gn}function di(lt,Et){lt.ambientLightColor.needsUpdate=Et,lt.lightProbe.needsUpdate=Et,lt.directionalLights.needsUpdate=Et,lt.directionalLightShadows.needsUpdate=Et,lt.pointLights.needsUpdate=Et,lt.pointLightShadows.needsUpdate=Et,lt.spotLights.needsUpdate=Et,lt.spotLightShadows.needsUpdate=Et,lt.rectAreaLights.needsUpdate=Et,lt.hemisphereLights.needsUpdate=Et}function pi(lt){return lt.isMeshLambertMaterial||lt.isMeshToonMaterial||lt.isMeshPhongMaterial||lt.isMeshStandardMaterial||lt.isShadowMaterial||lt.isShaderMaterial&&lt.lights===!0}this.getActiveCubeFace=function(){return xt},this.getActiveMipmapLevel=function(){return Lt},this.getRenderTarget=function(){return Rt},this.setRenderTargetTextures=function(lt,Et,kt){const Ft=xe.get(lt);Ft.__autoAllocateDepthBuffer=lt.resolveDepthBuffer===!1,Ft.__autoAllocateDepthBuffer===!1&&(Ft.__useRenderToTexture=!1),xe.get(lt.texture).__webglTexture=Et,xe.get(lt.depthTexture).__webglTexture=Ft.__autoAllocateDepthBuffer?void 0:kt,Ft.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(lt,Et){const kt=xe.get(lt);kt.__webglFramebuffer=Et,kt.__useDefaultFramebuffer=Et===void 0};const mi=vt.createFramebuffer();this.setRenderTarget=function(lt,Et=0,kt=0){Rt=lt,xt=Et,Lt=kt;let Ft=null,It=!1,en=!1;if(lt){const tn=xe.get(lt);if(tn.__useDefaultFramebuffer!==void 0){rn.bindFramebuffer(vt.FRAMEBUFFER,tn.__webglFramebuffer),Ut.copy(lt.viewport),Ct.copy(lt.scissor),Ot=lt.scissorTest,rn.viewport(Ut),rn.scissor(Ct),rn.setScissorTest(Ot),Nt=-1;return}else if(tn.__webglFramebuffer===void 0)d.setupRenderTarget(lt);else if(tn.__hasExternalTextures)d.rebindTextures(lt,xe.get(lt.texture).__webglTexture,xe.get(lt.depthTexture).__webglTexture);else if(lt.depthBuffer){const _n=lt.depthTexture;if(tn.__boundDepthTexture!==_n){if(_n!==null&&xe.has(_n)&&(lt.width!==_n.image.width||lt.height!==_n.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");d.setupDepthRenderbuffer(lt)}}const an=lt.texture;(an.isData3DTexture||an.isDataArrayTexture||an.isCompressedArrayTexture)&&(en=!0);const ln=xe.get(lt).__webglFramebuffer;lt.isWebGLCubeRenderTarget?(Array.isArray(ln[Et])?Ft=ln[Et][kt]:Ft=ln[Et],It=!0):lt.samples>0&&d.useMultisampledRTT(lt)===!1?Ft=xe.get(lt).__webglMultisampledFramebuffer:Array.isArray(ln)?Ft=ln[kt]:Ft=ln,Ut.copy(lt.viewport),Ct.copy(lt.scissor),Ot=lt.scissorTest}else Ut.copy(Wt).multiplyScalar(un).floor(),Ct.copy(Yt).multiplyScalar(un).floor(),Ot=jt;if(kt!==0&&(Ft=mi),rn.bindFramebuffer(vt.FRAMEBUFFER,Ft)&&rn.drawBuffers(lt,Ft),rn.viewport(Ut),rn.scissor(Ct),rn.setScissorTest(Ot),It){const tn=xe.get(lt.texture);vt.framebufferTexture2D(vt.FRAMEBUFFER,vt.COLOR_ATTACHMENT0,vt.TEXTURE_CUBE_MAP_POSITIVE_X+Et,tn.__webglTexture,kt)}else if(en){const tn=Et;for(let an=0;an<lt.textures.length;an++){const ln=xe.get(lt.textures[an]);vt.framebufferTextureLayer(vt.FRAMEBUFFER,vt.COLOR_ATTACHMENT0+an,ln.__webglTexture,kt,tn)}}else if(lt!==null&&kt!==0){const tn=xe.get(lt.texture);vt.framebufferTexture2D(vt.FRAMEBUFFER,vt.COLOR_ATTACHMENT0,vt.TEXTURE_2D,tn.__webglTexture,kt)}Nt=-1},this.readRenderTargetPixels=function(lt,Et,kt,Ft,It,en,nn,tn=0){if(!(lt&&lt.isWebGLRenderTarget)){error("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let an=xe.get(lt).__webglFramebuffer;if(lt.isWebGLCubeRenderTarget&&nn!==void 0&&(an=an[nn]),an){rn.bindFramebuffer(vt.FRAMEBUFFER,an);try{const ln=lt.textures[tn],_n=ln.format,xn=ln.type;if(lt.textures.length>1&&vt.readBuffer(vt.COLOR_ATTACHMENT0+tn),!En.textureFormatReadable(_n)){error("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!En.textureTypeReadable(xn)){error("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Et>=0&&Et<=lt.width-Ft&&kt>=0&&kt<=lt.height-It&&vt.readPixels(Et,kt,Ft,It,$t.convert(_n),$t.convert(xn),en)}finally{const ln=Rt!==null?xe.get(Rt).__webglFramebuffer:null;rn.bindFramebuffer(vt.FRAMEBUFFER,ln)}}},this.readRenderTargetPixelsAsync=async function(lt,Et,kt,Ft,It,en,nn,tn=0){if(!(lt&&lt.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let an=xe.get(lt).__webglFramebuffer;if(lt.isWebGLCubeRenderTarget&&nn!==void 0&&(an=an[nn]),an)if(Et>=0&&Et<=lt.width-Ft&&kt>=0&&kt<=lt.height-It){rn.bindFramebuffer(vt.FRAMEBUFFER,an);const ln=lt.textures[tn],_n=ln.format,xn=ln.type;if(lt.textures.length>1&&vt.readBuffer(vt.COLOR_ATTACHMENT0+tn),!En.textureFormatReadable(_n))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!En.textureTypeReadable(xn))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const cn=vt.createBuffer();vt.bindBuffer(vt.PIXEL_PACK_BUFFER,cn),vt.bufferData(vt.PIXEL_PACK_BUFFER,en.byteLength,vt.STREAM_READ),vt.readPixels(Et,kt,Ft,It,$t.convert(_n),$t.convert(xn),0);const wn=Rt!==null?xe.get(Rt).__webglFramebuffer:null;rn.bindFramebuffer(vt.FRAMEBUFFER,wn);const Nn=vt.fenceSync(vt.SYNC_GPU_COMMANDS_COMPLETE,0);return vt.flush(),await probeAsync(vt,Nn,4),vt.bindBuffer(vt.PIXEL_PACK_BUFFER,cn),vt.getBufferSubData(vt.PIXEL_PACK_BUFFER,0,en),vt.deleteBuffer(cn),vt.deleteSync(Nn),en}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(lt,Et=null,kt=0){const Ft=Math.pow(2,-kt),It=Math.floor(lt.image.width*Ft),en=Math.floor(lt.image.height*Ft),nn=Et!==null?Et.x:0,tn=Et!==null?Et.y:0;d.setTexture2D(lt,0),vt.copyTexSubImage2D(vt.TEXTURE_2D,kt,0,0,nn,tn,It,en),rn.unbindTexture()};const gi=vt.createFramebuffer(),_i=vt.createFramebuffer();this.copyTextureToTexture=function(lt,Et,kt=null,Ft=null,It=0,en=0){let nn,tn,an,ln,_n,xn,cn,wn,Nn;const Fn=lt.isCompressedTexture?lt.mipmaps[en]:lt.image;if(kt!==null)nn=kt.max.x-kt.min.x,tn=kt.max.y-kt.min.y,an=kt.isBox3?kt.max.z-kt.min.z:1,ln=kt.min.x,_n=kt.min.y,xn=kt.isBox3?kt.min.z:0;else{const On=Math.pow(2,-It);nn=Math.floor(Fn.width*On),tn=Math.floor(Fn.height*On),lt.isDataArrayTexture?an=Fn.depth:lt.isData3DTexture?an=Math.floor(Fn.depth*On):an=1,ln=0,_n=0,xn=0}Ft!==null?(cn=Ft.x,wn=Ft.y,Nn=Ft.z):(cn=0,wn=0,Nn=0);const Cn=$t.convert(Et.format),Bn=$t.convert(Et.type);let on;Et.isData3DTexture?(d.setTexture3D(Et,0),on=vt.TEXTURE_3D):Et.isDataArrayTexture||Et.isCompressedArrayTexture?(d.setTexture2DArray(Et,0),on=vt.TEXTURE_2D_ARRAY):(d.setTexture2D(Et,0),on=vt.TEXTURE_2D),vt.pixelStorei(vt.UNPACK_FLIP_Y_WEBGL,Et.flipY),vt.pixelStorei(vt.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Et.premultiplyAlpha),vt.pixelStorei(vt.UNPACK_ALIGNMENT,Et.unpackAlignment);const kn=vt.getParameter(vt.UNPACK_ROW_LENGTH),bn=vt.getParameter(vt.UNPACK_IMAGE_HEIGHT),Gn=vt.getParameter(vt.UNPACK_SKIP_PIXELS),Vn=vt.getParameter(vt.UNPACK_SKIP_ROWS),Xn=vt.getParameter(vt.UNPACK_SKIP_IMAGES);vt.pixelStorei(vt.UNPACK_ROW_LENGTH,Fn.width),vt.pixelStorei(vt.UNPACK_IMAGE_HEIGHT,Fn.height),vt.pixelStorei(vt.UNPACK_SKIP_PIXELS,ln),vt.pixelStorei(vt.UNPACK_SKIP_ROWS,_n),vt.pixelStorei(vt.UNPACK_SKIP_IMAGES,xn);const Yn=lt.isDataArrayTexture||lt.isData3DTexture,Rn=Et.isDataArrayTexture||Et.isData3DTexture;if(lt.isDepthTexture){const On=xe.get(lt),Wn=xe.get(Et),Un=xe.get(On.__renderTarget),$n=xe.get(Wn.__renderTarget);rn.bindFramebuffer(vt.READ_FRAMEBUFFER,Un.__webglFramebuffer),rn.bindFramebuffer(vt.DRAW_FRAMEBUFFER,$n.__webglFramebuffer);for(let jn=0;jn<an;jn++)Yn&&(vt.framebufferTextureLayer(vt.READ_FRAMEBUFFER,vt.COLOR_ATTACHMENT0,xe.get(lt).__webglTexture,It,xn+jn),vt.framebufferTextureLayer(vt.DRAW_FRAMEBUFFER,vt.COLOR_ATTACHMENT0,xe.get(Et).__webglTexture,en,Nn+jn)),vt.blitFramebuffer(ln,_n,nn,tn,cn,wn,nn,tn,vt.DEPTH_BUFFER_BIT,vt.NEAREST);rn.bindFramebuffer(vt.READ_FRAMEBUFFER,null),rn.bindFramebuffer(vt.DRAW_FRAMEBUFFER,null)}else if(It!==0||lt.isRenderTargetTexture||xe.has(lt)){const On=xe.get(lt),Wn=xe.get(Et);rn.bindFramebuffer(vt.READ_FRAMEBUFFER,gi),rn.bindFramebuffer(vt.DRAW_FRAMEBUFFER,_i);for(let Un=0;Un<an;Un++)Yn?vt.framebufferTextureLayer(vt.READ_FRAMEBUFFER,vt.COLOR_ATTACHMENT0,On.__webglTexture,It,xn+Un):vt.framebufferTexture2D(vt.READ_FRAMEBUFFER,vt.COLOR_ATTACHMENT0,vt.TEXTURE_2D,On.__webglTexture,It),Rn?vt.framebufferTextureLayer(vt.DRAW_FRAMEBUFFER,vt.COLOR_ATTACHMENT0,Wn.__webglTexture,en,Nn+Un):vt.framebufferTexture2D(vt.DRAW_FRAMEBUFFER,vt.COLOR_ATTACHMENT0,vt.TEXTURE_2D,Wn.__webglTexture,en),It!==0?vt.blitFramebuffer(ln,_n,nn,tn,cn,wn,nn,tn,vt.COLOR_BUFFER_BIT,vt.NEAREST):Rn?vt.copyTexSubImage3D(on,en,cn,wn,Nn+Un,ln,_n,nn,tn):vt.copyTexSubImage2D(on,en,cn,wn,ln,_n,nn,tn);rn.bindFramebuffer(vt.READ_FRAMEBUFFER,null),rn.bindFramebuffer(vt.DRAW_FRAMEBUFFER,null)}else Rn?lt.isDataTexture||lt.isData3DTexture?vt.texSubImage3D(on,en,cn,wn,Nn,nn,tn,an,Cn,Bn,Fn.data):Et.isCompressedArrayTexture?vt.compressedTexSubImage3D(on,en,cn,wn,Nn,nn,tn,an,Cn,Fn.data):vt.texSubImage3D(on,en,cn,wn,Nn,nn,tn,an,Cn,Bn,Fn):lt.isDataTexture?vt.texSubImage2D(vt.TEXTURE_2D,en,cn,wn,nn,tn,Cn,Bn,Fn.data):lt.isCompressedTexture?vt.compressedTexSubImage2D(vt.TEXTURE_2D,en,cn,wn,Fn.width,Fn.height,Cn,Fn.data):vt.texSubImage2D(vt.TEXTURE_2D,en,cn,wn,nn,tn,Cn,Bn,Fn);vt.pixelStorei(vt.UNPACK_ROW_LENGTH,kn),vt.pixelStorei(vt.UNPACK_IMAGE_HEIGHT,bn),vt.pixelStorei(vt.UNPACK_SKIP_PIXELS,Gn),vt.pixelStorei(vt.UNPACK_SKIP_ROWS,Vn),vt.pixelStorei(vt.UNPACK_SKIP_IMAGES,Xn),en===0&&Et.generateMipmaps&&vt.generateMipmap(on),rn.unbindTexture()},this.initRenderTarget=function(lt){xe.get(lt).__webglFramebuffer===void 0&&d.setupRenderTarget(lt)},this.initTexture=function(lt){lt.isCubeTexture?d.setTextureCube(lt,0):lt.isData3DTexture?d.setTexture3D(lt,0):lt.isDataArrayTexture||lt.isCompressedArrayTexture?d.setTexture2DArray(lt,0):d.setTexture2D(lt,0),rn.unbindTexture()},this.resetState=function(){xt=0,Lt=0,Rt=null,rn.reset(),zt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return WebGLCoordinateSystem}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ColorManagement._getDrawingBufferColorSpace(e),t.unpackColorSpace=ColorManagement._getUnpackColorSpace()}}const _changeEvent={type:"change"},_startEvent={type:"start"},_endEvent={type:"end"},_ray=new Ray,_plane=new Plane,_TILT_LIMIT=Math.cos(70*MathUtils.DEG2RAD),_v=new Vector3,_twoPI=2*Math.PI,_STATE={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},_EPS=1e-6;class OrbitControls extends Controls{constructor(e,t=null){super(e,t),this.state=_STATE.NONE,this.target=new Vector3,this.cursor=new Vector3,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:MOUSE.ROTATE,MIDDLE:MOUSE.DOLLY,RIGHT:MOUSE.PAN},this.touches={ONE:TOUCH.ROTATE,TWO:TOUCH.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new Vector3,this._lastQuaternion=new Quaternion,this._lastTargetPosition=new Vector3,this._quat=new Quaternion().setFromUnitVectors(e.up,new Vector3(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Spherical,this._sphericalDelta=new Spherical,this._scale=1,this._panOffset=new Vector3,this._rotateStart=new Vector2,this._rotateEnd=new Vector2,this._rotateDelta=new Vector2,this._panStart=new Vector2,this._panEnd=new Vector2,this._panDelta=new Vector2,this._dollyStart=new Vector2,this._dollyEnd=new Vector2,this._dollyDelta=new Vector2,this._dollyDirection=new Vector3,this._mouse=new Vector2,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=onPointerMove.bind(this),this._onPointerDown=onPointerDown.bind(this),this._onPointerUp=onPointerUp.bind(this),this._onContextMenu=onContextMenu.bind(this),this._onMouseWheel=onMouseWheel.bind(this),this._onKeyDown=onKeyDown.bind(this),this._onTouchStart=onTouchStart.bind(this),this._onTouchMove=onTouchMove.bind(this),this._onMouseDown=onMouseDown.bind(this),this._onMouseMove=onMouseMove.bind(this),this._interceptControlDown=interceptControlDown.bind(this),this._interceptControlUp=interceptControlUp.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(_changeEvent),this.update(),this.state=_STATE.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const t=this.object.position;_v.copy(t).sub(this.target),_v.applyQuaternion(this._quat),this._spherical.setFromVector3(_v),this.autoRotate&&this.state===_STATE.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=_twoPI:i>Math.PI&&(i-=_twoPI),r<-Math.PI?r+=_twoPI:r>Math.PI&&(r-=_twoPI),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(_v.setFromSpherical(this._spherical),_v.applyQuaternion(this._quatInverse),t.copy(this.target).add(_v),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const l=_v.length();o=this._clampDistance(l*this._scale);const u=l-o;this.object.position.addScaledVector(this._dollyDirection,u),this.object.updateMatrixWorld(),s=!!u}else if(this.object.isOrthographicCamera){const l=new Vector3(this._mouse.x,this._mouse.y,0);l.unproject(this.object);const u=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=u!==this.object.zoom;const h=new Vector3(this._mouse.x,this._mouse.y,0);h.unproject(this.object),this.object.position.sub(h).add(l),this.object.updateMatrixWorld(),o=_v.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(_ray.origin.copy(this.object.position),_ray.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(_ray.direction))<_TILT_LIMIT?this.object.lookAt(this.target):(_plane.setFromNormalAndCoplanarPoint(this.object.up,this.target),_ray.intersectPlane(_plane,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>_EPS||8*(1-this._lastQuaternion.dot(this.object.quaternion))>_EPS||this._lastTargetPosition.distanceToSquared(this.target)>_EPS?(this.dispatchEvent(_changeEvent),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?_twoPI/60*this.autoRotateSpeed*e:_twoPI/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){_v.setFromMatrixColumn(t,0),_v.multiplyScalar(-e),this._panOffset.add(_v)}_panUp(e,t){this.screenSpacePanning===!0?_v.setFromMatrixColumn(t,1):(_v.setFromMatrixColumn(t,0),_v.crossVectors(this.object.up,_v)),_v.multiplyScalar(e),this._panOffset.add(_v)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;_v.copy(r).sub(this.target);let s=_v.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*t*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=e-i.left,s=t-i.top,o=i.width,l=i.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/l)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(_twoPI*this._rotateDelta.x/t.clientHeight),this._rotateUp(_twoPI*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(_twoPI*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-_twoPI*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(_twoPI*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-_twoPI*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(_twoPI*this._rotateDelta.x/t.clientHeight),this._rotateUp(_twoPI*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,l=(e.pageY+t.y)*.5;this._updateZoomParameters(o,l)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Vector2,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function onPointerDown(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function onPointerMove(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function onPointerUp(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(_endEvent),this.state=_STATE.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function onMouseDown(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case MOUSE.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=_STATE.DOLLY;break;case MOUSE.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=_STATE.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=_STATE.ROTATE}break;case MOUSE.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=_STATE.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=_STATE.PAN}break;default:this.state=_STATE.NONE}this.state!==_STATE.NONE&&this.dispatchEvent(_startEvent)}function onMouseMove(n){switch(this.state){case _STATE.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case _STATE.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case _STATE.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function onMouseWheel(n){this.enabled===!1||this.enableZoom===!1||this.state!==_STATE.NONE||(n.preventDefault(),this.dispatchEvent(_startEvent),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(_endEvent))}function onKeyDown(n){this.enabled!==!1&&this._handleKeyDown(n)}function onTouchStart(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case TOUCH.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=_STATE.TOUCH_ROTATE;break;case TOUCH.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=_STATE.TOUCH_PAN;break;default:this.state=_STATE.NONE}break;case 2:switch(this.touches.TWO){case TOUCH.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=_STATE.TOUCH_DOLLY_PAN;break;case TOUCH.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=_STATE.TOUCH_DOLLY_ROTATE;break;default:this.state=_STATE.NONE}break;default:this.state=_STATE.NONE}this.state!==_STATE.NONE&&this.dispatchEvent(_startEvent)}function onTouchMove(n){switch(this._trackPointer(n),this.state){case _STATE.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case _STATE.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case _STATE.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case _STATE.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=_STATE.NONE}}function onContextMenu(n){this.enabled!==!1&&n.preventDefault()}function interceptControlDown(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function interceptControlUp(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const CopyShader={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Pass{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const _camera=new OrthographicCamera(-1,1,1,-1,0,1);class FullscreenTriangleGeometry extends BufferGeometry{constructor(){super(),this.setAttribute("position",new Float32BufferAttribute([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Float32BufferAttribute([0,2,0,0,2,0],2))}}const _geometry=new FullscreenTriangleGeometry;class FullScreenQuad{constructor(e){this._mesh=new Mesh(_geometry,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,_camera)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class ShaderPass extends Pass{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof ShaderMaterial?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=UniformsUtils.clone(e.uniforms),this.material=new ShaderMaterial({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new FullScreenQuad(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class MaskPass extends Pass{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,l;this.inverse?(o=0,l=1):(o=1,l=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,o,4294967295),s.buffers.stencil.setClear(l),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class ClearMaskPass extends Pass{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class EffectComposer{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new Vector2);this._width=i.width,this._height=i.height,t=new WebGLRenderTarget(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:HalfFloatType}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ShaderPass(CopyShader),this.copyPass.material.blending=NoBlending,this.timer=new Timer$1}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let r=0,s=this.passes.length;r<s;r++){const o=this.passes[r];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){const l=this.renderer.getContext(),u=this.renderer.state.buffers.stencil;u.setFunc(l.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),u.setFunc(l.EQUAL,1,4294967295)}this.swapBuffers()}MaskPass!==void 0&&(o instanceof MaskPass?i=!0:o instanceof ClearMaskPass&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Vector2);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class RenderPass extends Pass{constructor(e,t,i=null,r=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Color$1}render(e,t,i){const r=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=r}}const LuminosityHighPassShader={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Color$1(0)},defaultOpacity:{value:0}},vertexShader:`

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

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class UnrealBloomPass extends Pass{constructor(e,t=1,i,r){super(),this.strength=t,this.radius=i,this.threshold=r,this.resolution=e!==void 0?new Vector2(e.x,e.y):new Vector2(256,256),this.clearColor=new Color$1(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new WebGLRenderTarget(s,o,{type:HalfFloatType}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let f=0;f<this.nMips;f++){const S=new WebGLRenderTarget(s,o,{type:HalfFloatType});S.texture.name="UnrealBloomPass.h"+f,S.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(S);const p=new WebGLRenderTarget(s,o,{type:HalfFloatType});p.texture.name="UnrealBloomPass.v"+f,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),s=Math.round(s/2),o=Math.round(o/2)}const l=LuminosityHighPassShader;this.highPassUniforms=UniformsUtils.clone(l.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ShaderMaterial({uniforms:this.highPassUniforms,vertexShader:l.vertexShader,fragmentShader:l.fragmentShader}),this.separableBlurMaterials=[];const u=[6,10,14,18,22];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let f=0;f<this.nMips;f++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(u[f])),this.separableBlurMaterials[f].uniforms.invSize.value=new Vector2(1/s,1/o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const h=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=h,this.bloomTintColors=[new Vector3(1,1,1),new Vector3(1,1,1),new Vector3(1,1,1),new Vector3(1,1,1),new Vector3(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=UniformsUtils.clone(CopyShader.uniforms),this.blendMaterial=new ShaderMaterial({uniforms:this.copyUniforms,vertexShader:CopyShader.vertexShader,fragmentShader:CopyShader.fragmentShader,premultipliedAlpha:!0,blending:AdditiveBlending,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Color$1,this._oldClearAlpha=1,this._basic=new MeshBasicMaterial,this._fsQuad=new FullScreenQuad(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(i,r);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,r),this.renderTargetsVertical[s].setSize(i,r),this.separableBlurMaterials[s].uniforms.invSize.value=new Vector2(1/i,1/r),i=Math.round(i/2),r=Math.round(r/2)}render(e,t,i,r,s){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let l=this.renderTargetBright;for(let u=0;u<this.nMips;u++)this._fsQuad.material=this.separableBlurMaterials[u],this.separableBlurMaterials[u].uniforms.colorTexture.value=l.texture,this.separableBlurMaterials[u].uniforms.direction.value=UnrealBloomPass.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[u]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[u].uniforms.colorTexture.value=this.renderTargetsHorizontal[u].texture,this.separableBlurMaterials[u].uniforms.direction.value=UnrealBloomPass.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[u]),e.clear(),this._fsQuad.render(e),l=this.renderTargetsVertical[u];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){const t=[],i=e/3;for(let r=0;r<e;r++)t.push(.39894*Math.exp(-.5*r*r/(i*i))/i);return new ShaderMaterial({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Vector2(.5,.5)},direction:{value:new Vector2(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {

					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;

					for ( int i = 1; i < KERNEL_RADIUS; i ++ ) {

						float x = float( i );
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * w;

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new ShaderMaterial({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}}UnrealBloomPass.BlurDirectionX=new Vector2(1,0);UnrealBloomPass.BlurDirectionY=new Vector2(0,1);class CSS2DObject extends Object3D{constructor(e=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=e,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new Vector2(.5,.5),this.addEventListener("removed",function(){this.traverse(function(t){t.element&&t.element instanceof t.element.ownerDocument.defaultView.Element&&t.element.parentNode!==null&&t.element.remove()})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this.center=e.center,this}}const _vector=new Vector3,_viewMatrix=new Matrix4,_viewProjectionMatrix=new Matrix4,_a=new Vector3,_b=new Vector3;class CSS2DRenderer{constructor(e={}){const t=this;let i,r,s,o;const l={objects:new WeakMap},u=e.element!==void 0?e.element:document.createElement("div");u.style.overflow="hidden",this.domElement=u,this.sortObjects=!0,this.getSize=function(){return{width:i,height:r}},this.render=function(H,Y){H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),_viewMatrix.copy(Y.matrixWorldInverse),_viewProjectionMatrix.multiplyMatrices(Y.projectionMatrix,_viewMatrix),f(H,H,Y),this.sortObjects&&I(H)},this.setSize=function(H,Y){i=H,r=Y,s=i/2,o=r/2,u.style.width=H+"px",u.style.height=Y+"px"};function h(H){H.isCSS2DObject&&(H.element.style.display="none");for(let Y=0,R=H.children.length;Y<R;Y++)h(H.children[Y])}function f(H,Y,R){if(H.visible===!1){h(H);return}if(H.isCSS2DObject){_vector.setFromMatrixPosition(H.matrixWorld),_vector.applyMatrix4(_viewProjectionMatrix);const V=_vector.z>=-1&&_vector.z<=1&&H.layers.test(R.layers)===!0,be=H.element;be.style.display=V===!0?"":"none",V===!0&&(H.onBeforeRender(t,Y,R),be.style.transform="translate("+-100*H.center.x+"%,"+-100*H.center.y+"%)translate("+(_vector.x*s+s)+"px,"+(-_vector.y*o+o)+"px)",be.parentNode!==u&&u.appendChild(be),H.onAfterRender(t,Y,R));const ct={distanceToCameraSquared:S(R,H)};l.objects.set(H,ct)}for(let V=0,be=H.children.length;V<be;V++)f(H.children[V],Y,R)}function S(H,Y){return _a.setFromMatrixPosition(H.matrixWorld),_b.setFromMatrixPosition(Y.matrixWorld),_a.distanceToSquared(_b)}function p(H){const Y=[];return H.traverseVisible(function(R){R.isCSS2DObject&&Y.push(R)}),Y}function I(H){const Y=p(H).sort(function(V,be){if(V.renderOrder!==be.renderOrder)return be.renderOrder-V.renderOrder;const ct=l.objects.get(V).distanceToCameraSquared,ot=l.objects.get(be).distanceToCameraSquared;return ct-ot}),R=Y.length;for(let V=0,be=Y.length;V<be;V++)Y[V].element.style.zIndex=R-V}}}class MoleculeRenderer{constructor(e,t){this.container=e,this.config=t,this.labelElements=new Map,this.nodeHands=new Map,this.connectedMap=new Map,this.dotMeshes=new Map,this.dotBaseScales=new Map,this.nodePositions=new Map,this.edgeGroups=new Map,this.edgeTraceProgress=new Map,this.allEdgeLines=[],this.particles=[],this.particleMaterial=null,this.particleGeo=null,this.lastParticleSpawn=0,this.particleSpawnInterval=.4,this.clusterCenters={},this.activeCluster="",this.travelStart=null,this.travelEnd=null,this.travelTargetStart=null,this.travelTargetEnd=null,this.travelProgress=1,this.travelDuration=2,this.travelStartTime=0,this.nodeClusterMap=new Map,this.ghostNodeIds=new Set,this.ghostColor=0,this.ghostColorBoth=0,this.ghostSiteUrl="",this.highlightedNodeId=null,this.currentPulse=0,this.onNodeClick=null,this.animationId=null;const i=e.getBoundingClientRect(),r=i.width,s=i.height;this.activeCluster=t.name,this.scene=new Scene,this.scene.background=new Color$1(657930),this.camera=new PerspectiveCamera(50,r/s,.1,2e3),this.camera.position.set(0,0,280),this.webglRenderer=new WebGLRenderer({antialias:!0}),this.webglRenderer.setSize(r,s),this.webglRenderer.setPixelRatio(window.devicePixelRatio),this.webglRenderer.toneMapping=ReinhardToneMapping,e.appendChild(this.webglRenderer.domElement),this.css2dRenderer=new CSS2DRenderer,this.css2dRenderer.setSize(r,s),this.css2dRenderer.domElement.style.position="absolute",this.css2dRenderer.domElement.style.top="0",this.css2dRenderer.domElement.style.left="0",this.css2dRenderer.domElement.style.pointerEvents="none",e.appendChild(this.css2dRenderer.domElement);const o=new RenderPass(this.scene,this.camera),l=new UnrealBloomPass(new Vector2(r,s),t.bloom.strength,t.bloom.threshold,t.bloom.radius);this.composer=new EffectComposer(this.webglRenderer),this.composer.addPass(o),this.composer.addPass(l),this.controls=new OrbitControls(this.camera,this.webglRenderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.05,this.controls.autoRotate=!0,this.controls.autoRotateSpeed=.5,this.controls.enableZoom=!1,this.controls.enablePan=!1,this.scene.add(new AmbientLight(4210752,.3)),this.clock=new Clock,window.addEventListener("resize",()=>this.resize()),this.particleGeo=new SphereGeometry(.6,8,8),this.particleMaterial=new MeshBasicMaterial({color:t.color,transparent:!0,opacity:.8,blending:AdditiveBlending})}handColor(e){return e==="both"?this.config.colorBoth:this.config.color}nodeColorForId(e){return this.ghostNodeIds.has(e)?this.ghostColor:this.config.color}nodeColorBothForId(e){return this.ghostNodeIds.has(e)?this.ghostColorBoth:this.config.colorBoth}resize(){const e=this.container.getBoundingClientRect(),t=e.width,i=e.height;this.camera.aspect=t/i,this.camera.updateProjectionMatrix(),this.webglRenderer.setSize(t,i),this.css2dRenderer.setSize(t,i),this.composer.setSize(t,i)}buildNodeVisuals(e,t,i,r){const s=t?3.5:2,o=new SphereGeometry(s,16,16),l=new MeshStandardMaterial({color:i,emissive:i,emissiveIntensity:t?1.2:.8,roughness:.3,metalness:.1}),u=new Mesh(o,l);u.position.set(e.x,e.y,e.z),this.scene.add(u),this.dotMeshes.set(e.id,u),this.dotBaseScales.set(e.id,1),this.nodePositions.set(e.id,new Vector3(e.x,e.y,e.z));const h=document.createElement("div");h.className="node-text",h.textContent=e.title,h.dataset.nodeId=e.id;const f=t?20:Math.min(16,Math.max(9,7+e.connectionCount*1.2));h.style.fontSize=`${f}px`,h.style.color=r,h.style.opacity=t?"0.9":"0.45",h.style.fontWeight=t?"500":"300",h.addEventListener("click",()=>{this.onNodeClick&&this.onNodeClick(e.id)}),h.addEventListener("mouseenter",()=>{this.resetTrace(e.id),this.highlightedNodeId=e.id}),h.addEventListener("mouseleave",()=>{this.highlightedNodeId=null});const S=new CSS2DObject(h);S.position.set(e.x,e.y,e.z),this.scene.add(S),this.labelElements.set(e.id,h)}buildEdgeVisuals(e,t,i){for(const r of e){const s=t.find(I=>I.id===r.source),o=t.find(I=>I.id===r.target);if(!s||!o)continue;const{color:l,opacity:u}=i(s,o),h=new BufferGeometry,f=new Float32Array(6);f[0]=s.x,f[1]=s.y,f[2]=s.z,f[3]=s.x,f[4]=s.y,f[5]=s.z,h.setAttribute("position",new BufferAttribute(f,3));const S=new LineBasicMaterial({color:l,transparent:!0,opacity:u}),p=new Line(h,S);p.userData={srcX:s.x,srcY:s.y,srcZ:s.z,tgtX:o.x,tgtY:o.y,tgtZ:o.z,sourceId:r.source,targetId:r.target},this.scene.add(p),this.allEdgeLines.push(p),this.edgeGroups.has(r.source)||this.edgeGroups.set(r.source,[]),this.edgeGroups.has(r.target)||this.edgeGroups.set(r.target,[]),this.edgeGroups.get(r.source).push(p),this.edgeGroups.get(r.target).push(p)}for(const r of this.allEdgeLines){const s=r.userData,o=r.geometry.getAttribute("position").array;o[3]=s.tgtX,o[4]=s.tgtY,o[5]=s.tgtZ,r.geometry.getAttribute("position").needsUpdate=!0}}computeClusterCentroids(e){const t={};for(const i of e)t[i.cluster]||(t[i.cluster]={x:0,y:0,z:0,count:0}),t[i.cluster].x+=i.x,t[i.cluster].y+=i.y,t[i.cluster].z+=i.z,t[i.cluster].count++;for(const[i,r]of Object.entries(t))this.clusterCenters[i]=new Vector3(r.x/r.count,r.y/r.count,r.z/r.count)}buildScene(e,t){for(const i of e)this.connectedMap.set(i.id,new Set),this.nodeHands.set(i.id,i.hand),this.nodeClusterMap.set(i.id,i.cluster);for(const i of t)this.connectedMap.get(i.source)?.add(i.target),this.connectedMap.get(i.target)?.add(i.source);for(const i of e){const r=i.id===this.config.featuredNode,s=this.handColor(i.hand),o="#"+s.toString(16).padStart(6,"0");this.buildNodeVisuals(i,r,s,o)}this.buildEdgeVisuals(t,e,i=>({color:this.handColor(i.hand),opacity:.08})),this.computeClusterCentroids(e)}start(){const e=()=>{this.updateHighlight(),this.updateBreathing(),this.updatePulse(),this.updateEdgeTrace(),this.updateParticles(),this.updateCameraTravel(),this.controls.update(),this.composer.render(),this.css2dRenderer.render(this.scene,this.camera),this.animationId=requestAnimationFrame(e)};this.animationId=requestAnimationFrame(e)}updateHighlight(){const e=this.highlightedNodeId,t=e?this.connectedMap.get(e):null;for(const[r,s]of this.labelElements){const o=r===this.config.featuredNode,l=this.ghostNodeIds.has(r);e?r===e?(s.style.opacity=l?"0.5":"1",s.classList.add("highlighted"),s.classList.remove("connected","dimmed")):t?.has(r)?(s.style.opacity=l?"0.35":"0.7",s.classList.add("connected"),s.classList.remove("highlighted","dimmed")):(s.style.opacity="0.04",s.classList.add("dimmed"),s.classList.remove("highlighted","connected")):(l?s.style.opacity="0.20":s.style.opacity=o?"0.9":"0.45",s.classList.remove("highlighted","connected","dimmed"))}for(const[r,s]of this.dotMeshes){const o=s.material;e?r===e?o.emissiveIntensity=1.8:t?.has(r)?o.emissiveIntensity=1:o.emissiveIntensity=.1:(o.emissiveIntensity=r===this.config.featuredNode?1.2:.8,o.opacity=1)}const i=e?this.isBridgeNode(e):!1;for(const r of this.allEdgeLines){const s=r.material,o=r.userData;if(!e)s.opacity=.08;else if(o.sourceId===e||o.targetId===e){const l=this.nodeClusterMap.get(o.sourceId),u=this.nodeClusterMap.get(o.targetId),h=l!==u;s.opacity=i&&h?.7:.5}else if(i){const l=this.nodeClusterMap.get(o.sourceId),u=this.nodeClusterMap.get(o.targetId);s.opacity=l!==u?.3:.01}else s.opacity=.01}}updateBreathing(){const e=this.clock.getElapsedTime();for(const[t,i]of this.dotMeshes){if(this.ghostNodeIds.has(t))continue;const r=this.hashId(t)*6.28,s=1+.15*Math.sin(e*.8+r),o=this.dotBaseScales.get(t)??1;i.scale.setScalar(o*s)}if(!this.highlightedNodeId)for(const[t,i]of this.labelElements){if(this.ghostNodeIds.has(t))continue;const r=t===this.config.featuredNode,s=this.hashId(t)*6.28,o=Math.sin(e*.8+s);r?i.style.opacity=String(.85+.1*o):i.style.opacity=String(.4+.08*o)}}hashId(e){let t=0;for(let i=0;i<e.length;i++)t=(t<<5)-t+e.charCodeAt(i)|0;return Math.abs(t)%1e3/1e3}updatePulse(){const e=this.clock.getElapsedTime();if(this.currentPulse=.5+.5*Math.sin(e*1.5),!this.highlightedNodeId)for(const[t,i]of this.labelElements){if((this.nodeHands.get(t)||"left")==="both"){const s=.5+.5*Math.sin(e*.8+t.length),o=this.nodeColorForId(t),l=this.nodeColorBothForId(t),u=Math.round((o>>16&255)+((l>>16&255)-(o>>16&255))*s*.4),h=Math.round((o>>8&255)+((l>>8&255)-(o>>8&255))*s*.4),f=Math.round((o&255)+((l&255)-(o&255))*s*.4);i.style.color=`rgb(${u}, ${h}, ${f})`}if(this.ghostNodeIds.has(t)&&!this.highlightedNodeId){const s=.15+.08*Math.sin(e*.7+t.length*.5);i.style.opacity=String(s)}}}updateParticles(){const e=this.clock.getElapsedTime();if(e-this.lastParticleSpawn>this.particleSpawnInterval&&this.allEdgeLines.length>0){this.lastParticleSpawn=e;const t=this.highlightedNodeId;let i;if(t){i=this.edgeGroups.get(t)||[];const r=Math.min(3,i.length);for(let s=0;s<r;s++){const o=i[Math.floor(Math.random()*i.length)];this.spawnParticle(o.userData,.015+Math.random()*.01)}}else{const r=this.allEdgeLines[Math.floor(Math.random()*this.allEdgeLines.length)];r.userData.isGhostEdge||this.spawnParticle(r.userData,.006+Math.random()*.006)}}for(const t of this.particles){if(!t.active)continue;if(t.progress+=t.speed,t.progress>=1){t.active=!1,t.mesh.visible=!1;continue}const i=t.edgeData;t.mesh.position.set(i.srcX+(i.tgtX-i.srcX)*t.progress,i.srcY+(i.tgtY-i.srcY)*t.progress,i.srcZ+(i.tgtZ-i.srcZ)*t.progress);const r=Math.min(t.progress*5,(1-t.progress)*5,1);t.mesh.material.opacity=r*.7}}spawnParticle(e,t){let i=this.particles.find(s=>!s.active);if(!i){if(this.particles.length>=40)return;const s=new Mesh(this.particleGeo,this.particleMaterial.clone());s.visible=!1,this.scene.add(s),i={mesh:s,edgeData:e,progress:0,speed:t,active:!1},this.particles.push(i)}const r=Math.random()>.5;i.edgeData=r?{srcX:e.tgtX,srcY:e.tgtY,srcZ:e.tgtZ,tgtX:e.srcX,tgtY:e.srcY,tgtZ:e.srcZ}:{srcX:e.srcX,srcY:e.srcY,srcZ:e.srcZ,tgtX:e.tgtX,tgtY:e.tgtY,tgtZ:e.tgtZ},i.progress=0,i.speed=t,i.active=!0,i.mesh.visible=!0,i.mesh.position.set(i.edgeData.srcX,i.edgeData.srcY,i.edgeData.srcZ)}updateEdgeTrace(){const e=this.highlightedNodeId;if(!e){for(const[i,r]of this.edgeTraceProgress)r<1&&this.edgeTraceProgress.set(i,Math.min(r+.05,1));return}const t=this.edgeTraceProgress.get(e)??0;if(t<1){this.edgeTraceProgress.set(e,Math.min(t+.04,1));const i=this.edgeTraceProgress.get(e),r=this.edgeGroups.get(e)||[];for(const s of r){const o=s.userData;if(o.sourceId!==e&&o.targetId!==e)continue;const l=s.geometry.getAttribute("position").array,u=o.sourceId===e,h=u?o.srcX:o.tgtX,f=u?o.srcY:o.tgtY,S=u?o.srcZ:o.tgtZ,p=u?o.tgtX:o.srcX,I=u?o.tgtY:o.srcY,H=u?o.tgtZ:o.srcZ;l[0]=h,l[1]=f,l[2]=S,l[3]=h+(p-h)*i,l[4]=f+(I-f)*i,l[5]=S+(H-S)*i,s.geometry.getAttribute("position").needsUpdate=!0}}}isBridgeNode(e){const t=this.nodeClusterMap.get(e),i=this.edgeGroups.get(e)||[];for(const r of i){const s=r.userData,o=s.sourceId===e?s.targetId:s.sourceId;if(this.nodeClusterMap.get(o)!==t)return!0}return!1}easeInOutCubic(e){return e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2}updateCameraTravel(){if(this.travelProgress>=1||!this.travelStart||!this.travelEnd||!this.travelTargetStart||!this.travelTargetEnd)return;const e=this.clock.getElapsedTime()-this.travelStartTime;this.travelProgress=Math.min(e/this.travelDuration,1);const t=this.easeInOutCubic(this.travelProgress);this.camera.position.lerpVectors(this.travelStart,this.travelEnd,t),this.controls.target.lerpVectors(this.travelTargetStart,this.travelTargetEnd,t),this.travelProgress>=1&&(this.travelStart=null,this.travelEnd=null,this.travelTargetStart=null,this.travelTargetEnd=null)}focusNode(e){const t=this.nodePositions.get(e);if(!t)return;const i=this.camera.position.clone().sub(this.controls.target);i.multiplyScalar(.8),this.travelStart=this.camera.position.clone(),this.travelEnd=t.clone().add(i),this.travelTargetStart=this.controls.target.clone(),this.travelTargetEnd=t.clone(),this.travelProgress=0,this.travelDuration=1.5,this.travelStartTime=this.clock.getElapsedTime()}travelToCluster(e){const t=this.clusterCenters[e];if(!t){console.warn(`Unknown cluster: ${e}`);return}const i=this.camera.position.clone().sub(this.controls.target);this.travelStart=this.camera.position.clone(),this.travelEnd=t.clone().add(i),this.travelTargetStart=this.controls.target.clone(),this.travelTargetEnd=t.clone(),this.travelProgress=0,this.travelDuration=2,this.travelStartTime=this.clock.getElapsedTime(),this.activeCluster=e}getActiveCluster(){return this.activeCluster}getNodePosition(e){const t=this.nodePositions.get(e);if(t)return{x:t.x,y:t.y,z:t.z};for(const i of this.scene.children)if(i instanceof CSS2DObject&&i.element.dataset?.nodeId===e)return{x:i.position.x,y:i.position.y,z:i.position.z};return null}addGhostNodes(e,t,i,r,s){this.ghostColor=i,this.ghostColorBoth=r,this.ghostSiteUrl=s;for(const l of e)this.ghostNodeIds.add(l.id),this.connectedMap.set(l.id,new Set),this.nodeHands.set(l.id,l.hand),this.nodeClusterMap.set(l.id,l.cluster);for(const l of t)this.connectedMap.has(l.source)||this.connectedMap.set(l.source,new Set),this.connectedMap.has(l.target)||this.connectedMap.set(l.target,new Set),this.connectedMap.get(l.source)?.add(l.target),this.connectedMap.get(l.target)?.add(l.source);const o="#"+i.toString(16).padStart(6,"0");for(const l of e){const u=Math.min(12,Math.max(9,7+l.connectionCount*1.2)),h=document.createElement("div");h.className="node-text ghost-node",h.textContent=l.title,h.dataset.nodeId=l.id,h.dataset.ghostSite=s,h.style.fontSize=`${u}px`,h.style.color=o,h.style.opacity="0.20",h.style.fontWeight="300",h.style.pointerEvents="auto",h.style.cursor="pointer",h.addEventListener("click",()=>{window.location.href=`${s}#${l.id}`});const f=new CSS2DObject(h);f.position.set(l.x,l.y,l.z),this.scene.add(f),this.labelElements.set(l.id,h)}for(const l of t){const u=e.find(R=>R.id===l.source),h=e.find(R=>R.id===l.target),f=u?{x:u.x,y:u.y,z:u.z}:this.getNodePosition(l.source),S=h?{x:h.x,y:h.y,z:h.z}:this.getNodePosition(l.target);if(!f||!S)continue;const p=new BufferGeometry,I=new Float32Array(6);I[0]=f.x,I[1]=f.y,I[2]=f.z,I[3]=S.x,I[4]=S.y,I[5]=S.z,p.setAttribute("position",new BufferAttribute(I,3));const H=new LineBasicMaterial({color:i,transparent:!0,opacity:.05}),Y=new Line(p,H);Y.userData={srcX:f.x,srcY:f.y,srcZ:f.z,tgtX:S.x,tgtY:S.y,tgtZ:S.z,sourceId:l.source,targetId:l.target,isGhostEdge:!0},this.scene.add(Y),this.allEdgeLines.push(Y),this.edgeGroups.has(l.source)||this.edgeGroups.set(l.source,[]),this.edgeGroups.has(l.target)||this.edgeGroups.set(l.target,[]),this.edgeGroups.get(l.source).push(Y),this.edgeGroups.get(l.target).push(Y)}}clearScene(){const e=[];for(const t of this.scene.children)t instanceof AmbientLight||e.push(t);for(const t of e)this.scene.remove(t),t.geometry&&t.geometry.dispose(),t.material&&t.material.dispose();this.labelElements.clear(),this.nodeHands.clear(),this.connectedMap.clear(),this.edgeGroups.clear(),this.edgeTraceProgress.clear(),this.allEdgeLines=[],this.nodeClusterMap.clear(),this.clusterCenters={},this.ghostNodeIds.clear(),this.dotMeshes.clear(),this.dotBaseScales.clear(),this.nodePositions.clear(),this.particles=[]}buildAtlasScene(e,t,i){const r=new Map;for(const s of i)r.set(s.name,s);for(const s of e)this.connectedMap.set(s.id,new Set),this.nodeHands.set(s.id,s.hand),this.nodeClusterMap.set(s.id,s.cluster);for(const s of t)this.connectedMap.get(s.source)?.add(s.target),this.connectedMap.get(s.target)?.add(s.source);for(const s of e){const o=r.get(s.cluster)||this.config,l=i.some(f=>f.featuredNode===s.id),u=s.hand==="both"?o.colorBoth:o.color,h="#"+u.toString(16).padStart(6,"0");this.buildNodeVisuals(s,l,u,h)}this.buildEdgeVisuals(t,e,(s,o)=>{const l=r.get(s.cluster)||this.config,u=r.get(o.cluster)||this.config;if(s.cluster!==o.cluster){const f=(l.color>>16&255)+(u.color>>16&255)>>1,S=(l.color>>8&255)+(u.color>>8&255)>>1,p=(l.color&255)+(u.color&255)>>1;return{color:f<<16|S<<8|p,opacity:.15}}return{color:l.color,opacity:.08}}),this.computeClusterCentroids(e)}pullBackCamera(){const t=this.camera.position.clone().sub(this.controls.target).normalize();this.travelStart=this.camera.position.clone(),this.travelEnd=t.multiplyScalar(400),this.travelTargetStart=this.controls.target.clone(),this.travelTargetEnd=new Vector3(0,0,0),this.travelProgress=0,this.travelStartTime=this.clock.getElapsedTime()}resetTrace(e){if(e){this.edgeTraceProgress.set(e,0);const t=this.edgeGroups.get(e)||[];for(const i of t){const r=i.userData;if(r.sourceId!==e&&r.targetId!==e)continue;const s=i.geometry.getAttribute("position").array,o=r.sourceId===e,l=o?r.srcX:r.tgtX,u=o?r.srcY:r.tgtY,h=o?r.srcZ:r.tgtZ;s[0]=l,s[1]=u,s[2]=h,s[3]=l,s[4]=u,s[5]=h,i.geometry.getAttribute("position").needsUpdate=!0}}}}var noop={value:()=>{}};function dispatch(){for(var n=0,e=arguments.length,t={},i;n<e;++n){if(!(i=arguments[n]+"")||i in t||/[\s.]/.test(i))throw new Error("illegal type: "+i);t[i]=[]}return new Dispatch(t)}function Dispatch(n){this._=n}function parseTypenames$1(n,e){return n.trim().split(/^|\s+/).map(function(t){var i="",r=t.indexOf(".");if(r>=0&&(i=t.slice(r+1),t=t.slice(0,r)),t&&!e.hasOwnProperty(t))throw new Error("unknown type: "+t);return{type:t,name:i}})}Dispatch.prototype=dispatch.prototype={constructor:Dispatch,on:function(n,e){var t=this._,i=parseTypenames$1(n+"",t),r,s=-1,o=i.length;if(arguments.length<2){for(;++s<o;)if((r=(n=i[s]).type)&&(r=get$1(t[r],n.name)))return r;return}if(e!=null&&typeof e!="function")throw new Error("invalid callback: "+e);for(;++s<o;)if(r=(n=i[s]).type)t[r]=set$2(t[r],n.name,e);else if(e==null)for(r in t)t[r]=set$2(t[r],n.name,null);return this},copy:function(){var n={},e=this._;for(var t in e)n[t]=e[t].slice();return new Dispatch(n)},call:function(n,e){if((r=arguments.length-2)>0)for(var t=new Array(r),i=0,r,s;i<r;++i)t[i]=arguments[i+2];if(!this._.hasOwnProperty(n))throw new Error("unknown type: "+n);for(s=this._[n],i=0,r=s.length;i<r;++i)s[i].value.apply(e,t)},apply:function(n,e,t){if(!this._.hasOwnProperty(n))throw new Error("unknown type: "+n);for(var i=this._[n],r=0,s=i.length;r<s;++r)i[r].value.apply(e,t)}};function get$1(n,e){for(var t=0,i=n.length,r;t<i;++t)if((r=n[t]).name===e)return r.value}function set$2(n,e,t){for(var i=0,r=n.length;i<r;++i)if(n[i].name===e){n[i]=noop,n=n.slice(0,i).concat(n.slice(i+1));break}return t!=null&&n.push({name:e,value:t}),n}var xhtml="http://www.w3.org/1999/xhtml";const namespaces={svg:"http://www.w3.org/2000/svg",xhtml,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function namespace(n){var e=n+="",t=e.indexOf(":");return t>=0&&(e=n.slice(0,t))!=="xmlns"&&(n=n.slice(t+1)),namespaces.hasOwnProperty(e)?{space:namespaces[e],local:n}:n}function creatorInherit(n){return function(){var e=this.ownerDocument,t=this.namespaceURI;return t===xhtml&&e.documentElement.namespaceURI===xhtml?e.createElement(n):e.createElementNS(t,n)}}function creatorFixed(n){return function(){return this.ownerDocument.createElementNS(n.space,n.local)}}function creator(n){var e=namespace(n);return(e.local?creatorFixed:creatorInherit)(e)}function none(){}function selector(n){return n==null?none:function(){return this.querySelector(n)}}function selection_select(n){typeof n!="function"&&(n=selector(n));for(var e=this._groups,t=e.length,i=new Array(t),r=0;r<t;++r)for(var s=e[r],o=s.length,l=i[r]=new Array(o),u,h,f=0;f<o;++f)(u=s[f])&&(h=n.call(u,u.__data__,f,s))&&("__data__"in u&&(h.__data__=u.__data__),l[f]=h);return new Selection$1(i,this._parents)}function array(n){return n==null?[]:Array.isArray(n)?n:Array.from(n)}function empty(){return[]}function selectorAll(n){return n==null?empty:function(){return this.querySelectorAll(n)}}function arrayAll(n){return function(){return array(n.apply(this,arguments))}}function selection_selectAll(n){typeof n=="function"?n=arrayAll(n):n=selectorAll(n);for(var e=this._groups,t=e.length,i=[],r=[],s=0;s<t;++s)for(var o=e[s],l=o.length,u,h=0;h<l;++h)(u=o[h])&&(i.push(n.call(u,u.__data__,h,o)),r.push(u));return new Selection$1(i,r)}function matcher(n){return function(){return this.matches(n)}}function childMatcher(n){return function(e){return e.matches(n)}}var find$1=Array.prototype.find;function childFind(n){return function(){return find$1.call(this.children,n)}}function childFirst(){return this.firstElementChild}function selection_selectChild(n){return this.select(n==null?childFirst:childFind(typeof n=="function"?n:childMatcher(n)))}var filter=Array.prototype.filter;function children(){return Array.from(this.children)}function childrenFilter(n){return function(){return filter.call(this.children,n)}}function selection_selectChildren(n){return this.selectAll(n==null?children:childrenFilter(typeof n=="function"?n:childMatcher(n)))}function selection_filter(n){typeof n!="function"&&(n=matcher(n));for(var e=this._groups,t=e.length,i=new Array(t),r=0;r<t;++r)for(var s=e[r],o=s.length,l=i[r]=[],u,h=0;h<o;++h)(u=s[h])&&n.call(u,u.__data__,h,s)&&l.push(u);return new Selection$1(i,this._parents)}function sparse(n){return new Array(n.length)}function selection_enter(){return new Selection$1(this._enter||this._groups.map(sparse),this._parents)}function EnterNode(n,e){this.ownerDocument=n.ownerDocument,this.namespaceURI=n.namespaceURI,this._next=null,this._parent=n,this.__data__=e}EnterNode.prototype={constructor:EnterNode,appendChild:function(n){return this._parent.insertBefore(n,this._next)},insertBefore:function(n,e){return this._parent.insertBefore(n,e)},querySelector:function(n){return this._parent.querySelector(n)},querySelectorAll:function(n){return this._parent.querySelectorAll(n)}};function constant$2(n){return function(){return n}}function bindIndex(n,e,t,i,r,s){for(var o=0,l,u=e.length,h=s.length;o<h;++o)(l=e[o])?(l.__data__=s[o],i[o]=l):t[o]=new EnterNode(n,s[o]);for(;o<u;++o)(l=e[o])&&(r[o]=l)}function bindKey(n,e,t,i,r,s,o){var l,u,h=new Map,f=e.length,S=s.length,p=new Array(f),I;for(l=0;l<f;++l)(u=e[l])&&(p[l]=I=o.call(u,u.__data__,l,e)+"",h.has(I)?r[l]=u:h.set(I,u));for(l=0;l<S;++l)I=o.call(n,s[l],l,s)+"",(u=h.get(I))?(i[l]=u,u.__data__=s[l],h.delete(I)):t[l]=new EnterNode(n,s[l]);for(l=0;l<f;++l)(u=e[l])&&h.get(p[l])===u&&(r[l]=u)}function datum(n){return n.__data__}function selection_data(n,e){if(!arguments.length)return Array.from(this,datum);var t=e?bindKey:bindIndex,i=this._parents,r=this._groups;typeof n!="function"&&(n=constant$2(n));for(var s=r.length,o=new Array(s),l=new Array(s),u=new Array(s),h=0;h<s;++h){var f=i[h],S=r[h],p=S.length,I=arraylike(n.call(f,f&&f.__data__,h,i)),H=I.length,Y=l[h]=new Array(H),R=o[h]=new Array(H),V=u[h]=new Array(p);t(f,S,Y,R,V,I,e);for(var be=0,ct=0,ot,dt;be<H;++be)if(ot=Y[be]){for(be>=ct&&(ct=be+1);!(dt=R[ct])&&++ct<H;);ot._next=dt||null}}return o=new Selection$1(o,i),o._enter=l,o._exit=u,o}function arraylike(n){return typeof n=="object"&&"length"in n?n:Array.from(n)}function selection_exit(){return new Selection$1(this._exit||this._groups.map(sparse),this._parents)}function selection_join(n,e,t){var i=this.enter(),r=this,s=this.exit();return typeof n=="function"?(i=n(i),i&&(i=i.selection())):i=i.append(n+""),e!=null&&(r=e(r),r&&(r=r.selection())),t==null?s.remove():t(s),i&&r?i.merge(r).order():r}function selection_merge(n){for(var e=n.selection?n.selection():n,t=this._groups,i=e._groups,r=t.length,s=i.length,o=Math.min(r,s),l=new Array(r),u=0;u<o;++u)for(var h=t[u],f=i[u],S=h.length,p=l[u]=new Array(S),I,H=0;H<S;++H)(I=h[H]||f[H])&&(p[H]=I);for(;u<r;++u)l[u]=t[u];return new Selection$1(l,this._parents)}function selection_order(){for(var n=this._groups,e=-1,t=n.length;++e<t;)for(var i=n[e],r=i.length-1,s=i[r],o;--r>=0;)(o=i[r])&&(s&&o.compareDocumentPosition(s)^4&&s.parentNode.insertBefore(o,s),s=o);return this}function selection_sort(n){n||(n=ascending);function e(S,p){return S&&p?n(S.__data__,p.__data__):!S-!p}for(var t=this._groups,i=t.length,r=new Array(i),s=0;s<i;++s){for(var o=t[s],l=o.length,u=r[s]=new Array(l),h,f=0;f<l;++f)(h=o[f])&&(u[f]=h);u.sort(e)}return new Selection$1(r,this._parents).order()}function ascending(n,e){return n<e?-1:n>e?1:n>=e?0:NaN}function selection_call(){var n=arguments[0];return arguments[0]=this,n.apply(null,arguments),this}function selection_nodes(){return Array.from(this)}function selection_node(){for(var n=this._groups,e=0,t=n.length;e<t;++e)for(var i=n[e],r=0,s=i.length;r<s;++r){var o=i[r];if(o)return o}return null}function selection_size(){let n=0;for(const e of this)++n;return n}function selection_empty(){return!this.node()}function selection_each(n){for(var e=this._groups,t=0,i=e.length;t<i;++t)for(var r=e[t],s=0,o=r.length,l;s<o;++s)(l=r[s])&&n.call(l,l.__data__,s,r);return this}function attrRemove$1(n){return function(){this.removeAttribute(n)}}function attrRemoveNS$1(n){return function(){this.removeAttributeNS(n.space,n.local)}}function attrConstant$1(n,e){return function(){this.setAttribute(n,e)}}function attrConstantNS$1(n,e){return function(){this.setAttributeNS(n.space,n.local,e)}}function attrFunction$1(n,e){return function(){var t=e.apply(this,arguments);t==null?this.removeAttribute(n):this.setAttribute(n,t)}}function attrFunctionNS$1(n,e){return function(){var t=e.apply(this,arguments);t==null?this.removeAttributeNS(n.space,n.local):this.setAttributeNS(n.space,n.local,t)}}function selection_attr(n,e){var t=namespace(n);if(arguments.length<2){var i=this.node();return t.local?i.getAttributeNS(t.space,t.local):i.getAttribute(t)}return this.each((e==null?t.local?attrRemoveNS$1:attrRemove$1:typeof e=="function"?t.local?attrFunctionNS$1:attrFunction$1:t.local?attrConstantNS$1:attrConstant$1)(t,e))}function defaultView(n){return n.ownerDocument&&n.ownerDocument.defaultView||n.document&&n||n.defaultView}function styleRemove$1(n){return function(){this.style.removeProperty(n)}}function styleConstant$1(n,e,t){return function(){this.style.setProperty(n,e,t)}}function styleFunction$1(n,e,t){return function(){var i=e.apply(this,arguments);i==null?this.style.removeProperty(n):this.style.setProperty(n,i,t)}}function selection_style(n,e,t){return arguments.length>1?this.each((e==null?styleRemove$1:typeof e=="function"?styleFunction$1:styleConstant$1)(n,e,t??"")):styleValue(this.node(),n)}function styleValue(n,e){return n.style.getPropertyValue(e)||defaultView(n).getComputedStyle(n,null).getPropertyValue(e)}function propertyRemove(n){return function(){delete this[n]}}function propertyConstant(n,e){return function(){this[n]=e}}function propertyFunction(n,e){return function(){var t=e.apply(this,arguments);t==null?delete this[n]:this[n]=t}}function selection_property(n,e){return arguments.length>1?this.each((e==null?propertyRemove:typeof e=="function"?propertyFunction:propertyConstant)(n,e)):this.node()[n]}function classArray(n){return n.trim().split(/^|\s+/)}function classList(n){return n.classList||new ClassList(n)}function ClassList(n){this._node=n,this._names=classArray(n.getAttribute("class")||"")}ClassList.prototype={add:function(n){var e=this._names.indexOf(n);e<0&&(this._names.push(n),this._node.setAttribute("class",this._names.join(" ")))},remove:function(n){var e=this._names.indexOf(n);e>=0&&(this._names.splice(e,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(n){return this._names.indexOf(n)>=0}};function classedAdd(n,e){for(var t=classList(n),i=-1,r=e.length;++i<r;)t.add(e[i])}function classedRemove(n,e){for(var t=classList(n),i=-1,r=e.length;++i<r;)t.remove(e[i])}function classedTrue(n){return function(){classedAdd(this,n)}}function classedFalse(n){return function(){classedRemove(this,n)}}function classedFunction(n,e){return function(){(e.apply(this,arguments)?classedAdd:classedRemove)(this,n)}}function selection_classed(n,e){var t=classArray(n+"");if(arguments.length<2){for(var i=classList(this.node()),r=-1,s=t.length;++r<s;)if(!i.contains(t[r]))return!1;return!0}return this.each((typeof e=="function"?classedFunction:e?classedTrue:classedFalse)(t,e))}function textRemove(){this.textContent=""}function textConstant$1(n){return function(){this.textContent=n}}function textFunction$1(n){return function(){var e=n.apply(this,arguments);this.textContent=e??""}}function selection_text(n){return arguments.length?this.each(n==null?textRemove:(typeof n=="function"?textFunction$1:textConstant$1)(n)):this.node().textContent}function htmlRemove(){this.innerHTML=""}function htmlConstant(n){return function(){this.innerHTML=n}}function htmlFunction(n){return function(){var e=n.apply(this,arguments);this.innerHTML=e??""}}function selection_html(n){return arguments.length?this.each(n==null?htmlRemove:(typeof n=="function"?htmlFunction:htmlConstant)(n)):this.node().innerHTML}function raise(){this.nextSibling&&this.parentNode.appendChild(this)}function selection_raise(){return this.each(raise)}function lower(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function selection_lower(){return this.each(lower)}function selection_append(n){var e=typeof n=="function"?n:creator(n);return this.select(function(){return this.appendChild(e.apply(this,arguments))})}function constantNull(){return null}function selection_insert(n,e){var t=typeof n=="function"?n:creator(n),i=e==null?constantNull:typeof e=="function"?e:selector(e);return this.select(function(){return this.insertBefore(t.apply(this,arguments),i.apply(this,arguments)||null)})}function remove(){var n=this.parentNode;n&&n.removeChild(this)}function selection_remove(){return this.each(remove)}function selection_cloneShallow(){var n=this.cloneNode(!1),e=this.parentNode;return e?e.insertBefore(n,this.nextSibling):n}function selection_cloneDeep(){var n=this.cloneNode(!0),e=this.parentNode;return e?e.insertBefore(n,this.nextSibling):n}function selection_clone(n){return this.select(n?selection_cloneDeep:selection_cloneShallow)}function selection_datum(n){return arguments.length?this.property("__data__",n):this.node().__data__}function contextListener(n){return function(e){n.call(this,e,this.__data__)}}function parseTypenames(n){return n.trim().split(/^|\s+/).map(function(e){var t="",i=e.indexOf(".");return i>=0&&(t=e.slice(i+1),e=e.slice(0,i)),{type:e,name:t}})}function onRemove(n){return function(){var e=this.__on;if(e){for(var t=0,i=-1,r=e.length,s;t<r;++t)s=e[t],(!n.type||s.type===n.type)&&s.name===n.name?this.removeEventListener(s.type,s.listener,s.options):e[++i]=s;++i?e.length=i:delete this.__on}}}function onAdd(n,e,t){return function(){var i=this.__on,r,s=contextListener(e);if(i){for(var o=0,l=i.length;o<l;++o)if((r=i[o]).type===n.type&&r.name===n.name){this.removeEventListener(r.type,r.listener,r.options),this.addEventListener(r.type,r.listener=s,r.options=t),r.value=e;return}}this.addEventListener(n.type,s,t),r={type:n.type,name:n.name,value:e,listener:s,options:t},i?i.push(r):this.__on=[r]}}function selection_on(n,e,t){var i=parseTypenames(n+""),r,s=i.length,o;if(arguments.length<2){var l=this.node().__on;if(l){for(var u=0,h=l.length,f;u<h;++u)for(r=0,f=l[u];r<s;++r)if((o=i[r]).type===f.type&&o.name===f.name)return f.value}return}for(l=e?onAdd:onRemove,r=0;r<s;++r)this.each(l(i[r],e,t));return this}function dispatchEvent(n,e,t){var i=defaultView(n),r=i.CustomEvent;typeof r=="function"?r=new r(e,t):(r=i.document.createEvent("Event"),t?(r.initEvent(e,t.bubbles,t.cancelable),r.detail=t.detail):r.initEvent(e,!1,!1)),n.dispatchEvent(r)}function dispatchConstant(n,e){return function(){return dispatchEvent(this,n,e)}}function dispatchFunction(n,e){return function(){return dispatchEvent(this,n,e.apply(this,arguments))}}function selection_dispatch(n,e){return this.each((typeof e=="function"?dispatchFunction:dispatchConstant)(n,e))}function*selection_iterator(){for(var n=this._groups,e=0,t=n.length;e<t;++e)for(var i=n[e],r=0,s=i.length,o;r<s;++r)(o=i[r])&&(yield o)}var root=[null];function Selection$1(n,e){this._groups=n,this._parents=e}function selection(){return new Selection$1([[document.documentElement]],root)}function selection_selection(){return this}Selection$1.prototype=selection.prototype={constructor:Selection$1,select:selection_select,selectAll:selection_selectAll,selectChild:selection_selectChild,selectChildren:selection_selectChildren,filter:selection_filter,data:selection_data,enter:selection_enter,exit:selection_exit,join:selection_join,merge:selection_merge,selection:selection_selection,order:selection_order,sort:selection_sort,call:selection_call,nodes:selection_nodes,node:selection_node,size:selection_size,empty:selection_empty,each:selection_each,attr:selection_attr,style:selection_style,property:selection_property,classed:selection_classed,text:selection_text,html:selection_html,raise:selection_raise,lower:selection_lower,append:selection_append,insert:selection_insert,remove:selection_remove,clone:selection_clone,datum:selection_datum,on:selection_on,dispatch:selection_dispatch,[Symbol.iterator]:selection_iterator};function define(n,e,t){n.prototype=e.prototype=t,t.constructor=n}function extend(n,e){var t=Object.create(n.prototype);for(var i in e)t[i]=e[i];return t}function Color(){}var darker=.7,brighter=1/darker,reI="\\s*([+-]?\\d+)\\s*",reN="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",reP="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",reHex=/^#([0-9a-f]{3,8})$/,reRgbInteger=new RegExp(`^rgb\\(${reI},${reI},${reI}\\)$`),reRgbPercent=new RegExp(`^rgb\\(${reP},${reP},${reP}\\)$`),reRgbaInteger=new RegExp(`^rgba\\(${reI},${reI},${reI},${reN}\\)$`),reRgbaPercent=new RegExp(`^rgba\\(${reP},${reP},${reP},${reN}\\)$`),reHslPercent=new RegExp(`^hsl\\(${reN},${reP},${reP}\\)$`),reHslaPercent=new RegExp(`^hsla\\(${reN},${reP},${reP},${reN}\\)$`),named={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};define(Color,color,{copy(n){return Object.assign(new this.constructor,this,n)},displayable(){return this.rgb().displayable()},hex:color_formatHex,formatHex:color_formatHex,formatHex8:color_formatHex8,formatHsl:color_formatHsl,formatRgb:color_formatRgb,toString:color_formatRgb});function color_formatHex(){return this.rgb().formatHex()}function color_formatHex8(){return this.rgb().formatHex8()}function color_formatHsl(){return hslConvert(this).formatHsl()}function color_formatRgb(){return this.rgb().formatRgb()}function color(n){var e,t;return n=(n+"").trim().toLowerCase(),(e=reHex.exec(n))?(t=e[1].length,e=parseInt(e[1],16),t===6?rgbn(e):t===3?new Rgb(e>>8&15|e>>4&240,e>>4&15|e&240,(e&15)<<4|e&15,1):t===8?rgba(e>>24&255,e>>16&255,e>>8&255,(e&255)/255):t===4?rgba(e>>12&15|e>>8&240,e>>8&15|e>>4&240,e>>4&15|e&240,((e&15)<<4|e&15)/255):null):(e=reRgbInteger.exec(n))?new Rgb(e[1],e[2],e[3],1):(e=reRgbPercent.exec(n))?new Rgb(e[1]*255/100,e[2]*255/100,e[3]*255/100,1):(e=reRgbaInteger.exec(n))?rgba(e[1],e[2],e[3],e[4]):(e=reRgbaPercent.exec(n))?rgba(e[1]*255/100,e[2]*255/100,e[3]*255/100,e[4]):(e=reHslPercent.exec(n))?hsla(e[1],e[2]/100,e[3]/100,1):(e=reHslaPercent.exec(n))?hsla(e[1],e[2]/100,e[3]/100,e[4]):named.hasOwnProperty(n)?rgbn(named[n]):n==="transparent"?new Rgb(NaN,NaN,NaN,0):null}function rgbn(n){return new Rgb(n>>16&255,n>>8&255,n&255,1)}function rgba(n,e,t,i){return i<=0&&(n=e=t=NaN),new Rgb(n,e,t,i)}function rgbConvert(n){return n instanceof Color||(n=color(n)),n?(n=n.rgb(),new Rgb(n.r,n.g,n.b,n.opacity)):new Rgb}function rgb(n,e,t,i){return arguments.length===1?rgbConvert(n):new Rgb(n,e,t,i??1)}function Rgb(n,e,t,i){this.r=+n,this.g=+e,this.b=+t,this.opacity=+i}define(Rgb,rgb,extend(Color,{brighter(n){return n=n==null?brighter:Math.pow(brighter,n),new Rgb(this.r*n,this.g*n,this.b*n,this.opacity)},darker(n){return n=n==null?darker:Math.pow(darker,n),new Rgb(this.r*n,this.g*n,this.b*n,this.opacity)},rgb(){return this},clamp(){return new Rgb(clampi(this.r),clampi(this.g),clampi(this.b),clampa(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:rgb_formatHex,formatHex:rgb_formatHex,formatHex8:rgb_formatHex8,formatRgb:rgb_formatRgb,toString:rgb_formatRgb}));function rgb_formatHex(){return`#${hex(this.r)}${hex(this.g)}${hex(this.b)}`}function rgb_formatHex8(){return`#${hex(this.r)}${hex(this.g)}${hex(this.b)}${hex((isNaN(this.opacity)?1:this.opacity)*255)}`}function rgb_formatRgb(){const n=clampa(this.opacity);return`${n===1?"rgb(":"rgba("}${clampi(this.r)}, ${clampi(this.g)}, ${clampi(this.b)}${n===1?")":`, ${n})`}`}function clampa(n){return isNaN(n)?1:Math.max(0,Math.min(1,n))}function clampi(n){return Math.max(0,Math.min(255,Math.round(n)||0))}function hex(n){return n=clampi(n),(n<16?"0":"")+n.toString(16)}function hsla(n,e,t,i){return i<=0?n=e=t=NaN:t<=0||t>=1?n=e=NaN:e<=0&&(n=NaN),new Hsl(n,e,t,i)}function hslConvert(n){if(n instanceof Hsl)return new Hsl(n.h,n.s,n.l,n.opacity);if(n instanceof Color||(n=color(n)),!n)return new Hsl;if(n instanceof Hsl)return n;n=n.rgb();var e=n.r/255,t=n.g/255,i=n.b/255,r=Math.min(e,t,i),s=Math.max(e,t,i),o=NaN,l=s-r,u=(s+r)/2;return l?(e===s?o=(t-i)/l+(t<i)*6:t===s?o=(i-e)/l+2:o=(e-t)/l+4,l/=u<.5?s+r:2-s-r,o*=60):l=u>0&&u<1?0:o,new Hsl(o,l,u,n.opacity)}function hsl(n,e,t,i){return arguments.length===1?hslConvert(n):new Hsl(n,e,t,i??1)}function Hsl(n,e,t,i){this.h=+n,this.s=+e,this.l=+t,this.opacity=+i}define(Hsl,hsl,extend(Color,{brighter(n){return n=n==null?brighter:Math.pow(brighter,n),new Hsl(this.h,this.s,this.l*n,this.opacity)},darker(n){return n=n==null?darker:Math.pow(darker,n),new Hsl(this.h,this.s,this.l*n,this.opacity)},rgb(){var n=this.h%360+(this.h<0)*360,e=isNaN(n)||isNaN(this.s)?0:this.s,t=this.l,i=t+(t<.5?t:1-t)*e,r=2*t-i;return new Rgb(hsl2rgb(n>=240?n-240:n+120,r,i),hsl2rgb(n,r,i),hsl2rgb(n<120?n+240:n-120,r,i),this.opacity)},clamp(){return new Hsl(clamph(this.h),clampt(this.s),clampt(this.l),clampa(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const n=clampa(this.opacity);return`${n===1?"hsl(":"hsla("}${clamph(this.h)}, ${clampt(this.s)*100}%, ${clampt(this.l)*100}%${n===1?")":`, ${n})`}`}}));function clamph(n){return n=(n||0)%360,n<0?n+360:n}function clampt(n){return Math.max(0,Math.min(1,n||0))}function hsl2rgb(n,e,t){return(n<60?e+(t-e)*n/60:n<180?t:n<240?e+(t-e)*(240-n)/60:e)*255}const constant$1=n=>()=>n;function linear(n,e){return function(t){return n+t*e}}function exponential(n,e,t){return n=Math.pow(n,t),e=Math.pow(e,t)-n,t=1/t,function(i){return Math.pow(n+i*e,t)}}function gamma(n){return(n=+n)==1?nogamma:function(e,t){return t-e?exponential(e,t,n):constant$1(isNaN(e)?t:e)}}function nogamma(n,e){var t=e-n;return t?linear(n,t):constant$1(isNaN(n)?e:n)}const interpolateRgb=(function n(e){var t=gamma(e);function i(r,s){var o=t((r=rgb(r)).r,(s=rgb(s)).r),l=t(r.g,s.g),u=t(r.b,s.b),h=nogamma(r.opacity,s.opacity);return function(f){return r.r=o(f),r.g=l(f),r.b=u(f),r.opacity=h(f),r+""}}return i.gamma=n,i})(1);function interpolateNumber(n,e){return n=+n,e=+e,function(t){return n*(1-t)+e*t}}var reA=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,reB=new RegExp(reA.source,"g");function zero(n){return function(){return n}}function one(n){return function(e){return n(e)+""}}function interpolateString(n,e){var t=reA.lastIndex=reB.lastIndex=0,i,r,s,o=-1,l=[],u=[];for(n=n+"",e=e+"";(i=reA.exec(n))&&(r=reB.exec(e));)(s=r.index)>t&&(s=e.slice(t,s),l[o]?l[o]+=s:l[++o]=s),(i=i[0])===(r=r[0])?l[o]?l[o]+=r:l[++o]=r:(l[++o]=null,u.push({i:o,x:interpolateNumber(i,r)})),t=reB.lastIndex;return t<e.length&&(s=e.slice(t),l[o]?l[o]+=s:l[++o]=s),l.length<2?u[0]?one(u[0].x):zero(e):(e=u.length,function(h){for(var f=0,S;f<e;++f)l[(S=u[f]).i]=S.x(h);return l.join("")})}var degrees=180/Math.PI,identity={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function decompose(n,e,t,i,r,s){var o,l,u;return(o=Math.sqrt(n*n+e*e))&&(n/=o,e/=o),(u=n*t+e*i)&&(t-=n*u,i-=e*u),(l=Math.sqrt(t*t+i*i))&&(t/=l,i/=l,u/=l),n*i<e*t&&(n=-n,e=-e,u=-u,o=-o),{translateX:r,translateY:s,rotate:Math.atan2(e,n)*degrees,skewX:Math.atan(u)*degrees,scaleX:o,scaleY:l}}var svgNode;function parseCss(n){const e=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(n+"");return e.isIdentity?identity:decompose(e.a,e.b,e.c,e.d,e.e,e.f)}function parseSvg(n){return n==null||(svgNode||(svgNode=document.createElementNS("http://www.w3.org/2000/svg","g")),svgNode.setAttribute("transform",n),!(n=svgNode.transform.baseVal.consolidate()))?identity:(n=n.matrix,decompose(n.a,n.b,n.c,n.d,n.e,n.f))}function interpolateTransform(n,e,t,i){function r(h){return h.length?h.pop()+" ":""}function s(h,f,S,p,I,H){if(h!==S||f!==p){var Y=I.push("translate(",null,e,null,t);H.push({i:Y-4,x:interpolateNumber(h,S)},{i:Y-2,x:interpolateNumber(f,p)})}else(S||p)&&I.push("translate("+S+e+p+t)}function o(h,f,S,p){h!==f?(h-f>180?f+=360:f-h>180&&(h+=360),p.push({i:S.push(r(S)+"rotate(",null,i)-2,x:interpolateNumber(h,f)})):f&&S.push(r(S)+"rotate("+f+i)}function l(h,f,S,p){h!==f?p.push({i:S.push(r(S)+"skewX(",null,i)-2,x:interpolateNumber(h,f)}):f&&S.push(r(S)+"skewX("+f+i)}function u(h,f,S,p,I,H){if(h!==S||f!==p){var Y=I.push(r(I)+"scale(",null,",",null,")");H.push({i:Y-4,x:interpolateNumber(h,S)},{i:Y-2,x:interpolateNumber(f,p)})}else(S!==1||p!==1)&&I.push(r(I)+"scale("+S+","+p+")")}return function(h,f){var S=[],p=[];return h=n(h),f=n(f),s(h.translateX,h.translateY,f.translateX,f.translateY,S,p),o(h.rotate,f.rotate,S,p),l(h.skewX,f.skewX,S,p),u(h.scaleX,h.scaleY,f.scaleX,f.scaleY,S,p),h=f=null,function(I){for(var H=-1,Y=p.length,R;++H<Y;)S[(R=p[H]).i]=R.x(I);return S.join("")}}}var interpolateTransformCss=interpolateTransform(parseCss,"px, ","px)","deg)"),interpolateTransformSvg=interpolateTransform(parseSvg,", ",")",")"),frame=0,timeout$1=0,interval=0,pokeDelay=1e3,taskHead,taskTail,clockLast=0,clockNow=0,clockSkew=0,clock=typeof performance=="object"&&performance.now?performance:Date,setFrame=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(n){setTimeout(n,17)};function now(){return clockNow||(setFrame(clearNow),clockNow=clock.now()+clockSkew)}function clearNow(){clockNow=0}function Timer(){this._call=this._time=this._next=null}Timer.prototype=timer.prototype={constructor:Timer,restart:function(n,e,t){if(typeof n!="function")throw new TypeError("callback is not a function");t=(t==null?now():+t)+(e==null?0:+e),!this._next&&taskTail!==this&&(taskTail?taskTail._next=this:taskHead=this,taskTail=this),this._call=n,this._time=t,sleep()},stop:function(){this._call&&(this._call=null,this._time=1/0,sleep())}};function timer(n,e,t){var i=new Timer;return i.restart(n,e,t),i}function timerFlush(){now(),++frame;for(var n=taskHead,e;n;)(e=clockNow-n._time)>=0&&n._call.call(void 0,e),n=n._next;--frame}function wake(){clockNow=(clockLast=clock.now())+clockSkew,frame=timeout$1=0;try{timerFlush()}finally{frame=0,nap(),clockNow=0}}function poke(){var n=clock.now(),e=n-clockLast;e>pokeDelay&&(clockSkew-=e,clockLast=n)}function nap(){for(var n,e=taskHead,t,i=1/0;e;)e._call?(i>e._time&&(i=e._time),n=e,e=e._next):(t=e._next,e._next=null,e=n?n._next=t:taskHead=t);taskTail=n,sleep(i)}function sleep(n){if(!frame){timeout$1&&(timeout$1=clearTimeout(timeout$1));var e=n-clockNow;e>24?(n<1/0&&(timeout$1=setTimeout(wake,n-clock.now()-clockSkew)),interval&&(interval=clearInterval(interval))):(interval||(clockLast=clock.now(),interval=setInterval(poke,pokeDelay)),frame=1,setFrame(wake))}}function timeout(n,e,t){var i=new Timer;return e=e==null?0:+e,i.restart(r=>{i.stop(),n(r+e)},e,t),i}var emptyOn=dispatch("start","end","cancel","interrupt"),emptyTween=[],CREATED=0,SCHEDULED=1,STARTING=2,STARTED=3,RUNNING=4,ENDING=5,ENDED=6;function schedule(n,e,t,i,r,s){var o=n.__transition;if(!o)n.__transition={};else if(t in o)return;create(n,t,{name:e,index:i,group:r,on:emptyOn,tween:emptyTween,time:s.time,delay:s.delay,duration:s.duration,ease:s.ease,timer:null,state:CREATED})}function init$1(n,e){var t=get(n,e);if(t.state>CREATED)throw new Error("too late; already scheduled");return t}function set$1(n,e){var t=get(n,e);if(t.state>STARTED)throw new Error("too late; already running");return t}function get(n,e){var t=n.__transition;if(!t||!(t=t[e]))throw new Error("transition not found");return t}function create(n,e,t){var i=n.__transition,r;i[e]=t,t.timer=timer(s,0,t.time);function s(h){t.state=SCHEDULED,t.timer.restart(o,t.delay,t.time),t.delay<=h&&o(h-t.delay)}function o(h){var f,S,p,I;if(t.state!==SCHEDULED)return u();for(f in i)if(I=i[f],I.name===t.name){if(I.state===STARTED)return timeout(o);I.state===RUNNING?(I.state=ENDED,I.timer.stop(),I.on.call("interrupt",n,n.__data__,I.index,I.group),delete i[f]):+f<e&&(I.state=ENDED,I.timer.stop(),I.on.call("cancel",n,n.__data__,I.index,I.group),delete i[f])}if(timeout(function(){t.state===STARTED&&(t.state=RUNNING,t.timer.restart(l,t.delay,t.time),l(h))}),t.state=STARTING,t.on.call("start",n,n.__data__,t.index,t.group),t.state===STARTING){for(t.state=STARTED,r=new Array(p=t.tween.length),f=0,S=-1;f<p;++f)(I=t.tween[f].value.call(n,n.__data__,t.index,t.group))&&(r[++S]=I);r.length=S+1}}function l(h){for(var f=h<t.duration?t.ease.call(null,h/t.duration):(t.timer.restart(u),t.state=ENDING,1),S=-1,p=r.length;++S<p;)r[S].call(n,f);t.state===ENDING&&(t.on.call("end",n,n.__data__,t.index,t.group),u())}function u(){t.state=ENDED,t.timer.stop(),delete i[e];for(var h in i)return;delete n.__transition}}function interrupt(n,e){var t=n.__transition,i,r,s=!0,o;if(t){e=e==null?null:e+"";for(o in t){if((i=t[o]).name!==e){s=!1;continue}r=i.state>STARTING&&i.state<ENDING,i.state=ENDED,i.timer.stop(),i.on.call(r?"interrupt":"cancel",n,n.__data__,i.index,i.group),delete t[o]}s&&delete n.__transition}}function selection_interrupt(n){return this.each(function(){interrupt(this,n)})}function tweenRemove(n,e){var t,i;return function(){var r=set$1(this,n),s=r.tween;if(s!==t){i=t=s;for(var o=0,l=i.length;o<l;++o)if(i[o].name===e){i=i.slice(),i.splice(o,1);break}}r.tween=i}}function tweenFunction(n,e,t){var i,r;if(typeof t!="function")throw new Error;return function(){var s=set$1(this,n),o=s.tween;if(o!==i){r=(i=o).slice();for(var l={name:e,value:t},u=0,h=r.length;u<h;++u)if(r[u].name===e){r[u]=l;break}u===h&&r.push(l)}s.tween=r}}function transition_tween(n,e){var t=this._id;if(n+="",arguments.length<2){for(var i=get(this.node(),t).tween,r=0,s=i.length,o;r<s;++r)if((o=i[r]).name===n)return o.value;return null}return this.each((e==null?tweenRemove:tweenFunction)(t,n,e))}function tweenValue(n,e,t){var i=n._id;return n.each(function(){var r=set$1(this,i);(r.value||(r.value={}))[e]=t.apply(this,arguments)}),function(r){return get(r,i).value[e]}}function interpolate(n,e){var t;return(typeof e=="number"?interpolateNumber:e instanceof color?interpolateRgb:(t=color(e))?(e=t,interpolateRgb):interpolateString)(n,e)}function attrRemove(n){return function(){this.removeAttribute(n)}}function attrRemoveNS(n){return function(){this.removeAttributeNS(n.space,n.local)}}function attrConstant(n,e,t){var i,r=t+"",s;return function(){var o=this.getAttribute(n);return o===r?null:o===i?s:s=e(i=o,t)}}function attrConstantNS(n,e,t){var i,r=t+"",s;return function(){var o=this.getAttributeNS(n.space,n.local);return o===r?null:o===i?s:s=e(i=o,t)}}function attrFunction(n,e,t){var i,r,s;return function(){var o,l=t(this),u;return l==null?void this.removeAttribute(n):(o=this.getAttribute(n),u=l+"",o===u?null:o===i&&u===r?s:(r=u,s=e(i=o,l)))}}function attrFunctionNS(n,e,t){var i,r,s;return function(){var o,l=t(this),u;return l==null?void this.removeAttributeNS(n.space,n.local):(o=this.getAttributeNS(n.space,n.local),u=l+"",o===u?null:o===i&&u===r?s:(r=u,s=e(i=o,l)))}}function transition_attr(n,e){var t=namespace(n),i=t==="transform"?interpolateTransformSvg:interpolate;return this.attrTween(n,typeof e=="function"?(t.local?attrFunctionNS:attrFunction)(t,i,tweenValue(this,"attr."+n,e)):e==null?(t.local?attrRemoveNS:attrRemove)(t):(t.local?attrConstantNS:attrConstant)(t,i,e))}function attrInterpolate(n,e){return function(t){this.setAttribute(n,e.call(this,t))}}function attrInterpolateNS(n,e){return function(t){this.setAttributeNS(n.space,n.local,e.call(this,t))}}function attrTweenNS(n,e){var t,i;function r(){var s=e.apply(this,arguments);return s!==i&&(t=(i=s)&&attrInterpolateNS(n,s)),t}return r._value=e,r}function attrTween(n,e){var t,i;function r(){var s=e.apply(this,arguments);return s!==i&&(t=(i=s)&&attrInterpolate(n,s)),t}return r._value=e,r}function transition_attrTween(n,e){var t="attr."+n;if(arguments.length<2)return(t=this.tween(t))&&t._value;if(e==null)return this.tween(t,null);if(typeof e!="function")throw new Error;var i=namespace(n);return this.tween(t,(i.local?attrTweenNS:attrTween)(i,e))}function delayFunction(n,e){return function(){init$1(this,n).delay=+e.apply(this,arguments)}}function delayConstant(n,e){return e=+e,function(){init$1(this,n).delay=e}}function transition_delay(n){var e=this._id;return arguments.length?this.each((typeof n=="function"?delayFunction:delayConstant)(e,n)):get(this.node(),e).delay}function durationFunction(n,e){return function(){set$1(this,n).duration=+e.apply(this,arguments)}}function durationConstant(n,e){return e=+e,function(){set$1(this,n).duration=e}}function transition_duration(n){var e=this._id;return arguments.length?this.each((typeof n=="function"?durationFunction:durationConstant)(e,n)):get(this.node(),e).duration}function easeConstant(n,e){if(typeof e!="function")throw new Error;return function(){set$1(this,n).ease=e}}function transition_ease(n){var e=this._id;return arguments.length?this.each(easeConstant(e,n)):get(this.node(),e).ease}function easeVarying(n,e){return function(){var t=e.apply(this,arguments);if(typeof t!="function")throw new Error;set$1(this,n).ease=t}}function transition_easeVarying(n){if(typeof n!="function")throw new Error;return this.each(easeVarying(this._id,n))}function transition_filter(n){typeof n!="function"&&(n=matcher(n));for(var e=this._groups,t=e.length,i=new Array(t),r=0;r<t;++r)for(var s=e[r],o=s.length,l=i[r]=[],u,h=0;h<o;++h)(u=s[h])&&n.call(u,u.__data__,h,s)&&l.push(u);return new Transition(i,this._parents,this._name,this._id)}function transition_merge(n){if(n._id!==this._id)throw new Error;for(var e=this._groups,t=n._groups,i=e.length,r=t.length,s=Math.min(i,r),o=new Array(i),l=0;l<s;++l)for(var u=e[l],h=t[l],f=u.length,S=o[l]=new Array(f),p,I=0;I<f;++I)(p=u[I]||h[I])&&(S[I]=p);for(;l<i;++l)o[l]=e[l];return new Transition(o,this._parents,this._name,this._id)}function start(n){return(n+"").trim().split(/^|\s+/).every(function(e){var t=e.indexOf(".");return t>=0&&(e=e.slice(0,t)),!e||e==="start"})}function onFunction(n,e,t){var i,r,s=start(e)?init$1:set$1;return function(){var o=s(this,n),l=o.on;l!==i&&(r=(i=l).copy()).on(e,t),o.on=r}}function transition_on(n,e){var t=this._id;return arguments.length<2?get(this.node(),t).on.on(n):this.each(onFunction(t,n,e))}function removeFunction(n){return function(){var e=this.parentNode;for(var t in this.__transition)if(+t!==n)return;e&&e.removeChild(this)}}function transition_remove(){return this.on("end.remove",removeFunction(this._id))}function transition_select(n){var e=this._name,t=this._id;typeof n!="function"&&(n=selector(n));for(var i=this._groups,r=i.length,s=new Array(r),o=0;o<r;++o)for(var l=i[o],u=l.length,h=s[o]=new Array(u),f,S,p=0;p<u;++p)(f=l[p])&&(S=n.call(f,f.__data__,p,l))&&("__data__"in f&&(S.__data__=f.__data__),h[p]=S,schedule(h[p],e,t,p,h,get(f,t)));return new Transition(s,this._parents,e,t)}function transition_selectAll(n){var e=this._name,t=this._id;typeof n!="function"&&(n=selectorAll(n));for(var i=this._groups,r=i.length,s=[],o=[],l=0;l<r;++l)for(var u=i[l],h=u.length,f,S=0;S<h;++S)if(f=u[S]){for(var p=n.call(f,f.__data__,S,u),I,H=get(f,t),Y=0,R=p.length;Y<R;++Y)(I=p[Y])&&schedule(I,e,t,Y,p,H);s.push(p),o.push(f)}return new Transition(s,o,e,t)}var Selection=selection.prototype.constructor;function transition_selection(){return new Selection(this._groups,this._parents)}function styleNull(n,e){var t,i,r;return function(){var s=styleValue(this,n),o=(this.style.removeProperty(n),styleValue(this,n));return s===o?null:s===t&&o===i?r:r=e(t=s,i=o)}}function styleRemove(n){return function(){this.style.removeProperty(n)}}function styleConstant(n,e,t){var i,r=t+"",s;return function(){var o=styleValue(this,n);return o===r?null:o===i?s:s=e(i=o,t)}}function styleFunction(n,e,t){var i,r,s;return function(){var o=styleValue(this,n),l=t(this),u=l+"";return l==null&&(u=l=(this.style.removeProperty(n),styleValue(this,n))),o===u?null:o===i&&u===r?s:(r=u,s=e(i=o,l))}}function styleMaybeRemove(n,e){var t,i,r,s="style."+e,o="end."+s,l;return function(){var u=set$1(this,n),h=u.on,f=u.value[s]==null?l||(l=styleRemove(e)):void 0;(h!==t||r!==f)&&(i=(t=h).copy()).on(o,r=f),u.on=i}}function transition_style(n,e,t){var i=(n+="")=="transform"?interpolateTransformCss:interpolate;return e==null?this.styleTween(n,styleNull(n,i)).on("end.style."+n,styleRemove(n)):typeof e=="function"?this.styleTween(n,styleFunction(n,i,tweenValue(this,"style."+n,e))).each(styleMaybeRemove(this._id,n)):this.styleTween(n,styleConstant(n,i,e),t).on("end.style."+n,null)}function styleInterpolate(n,e,t){return function(i){this.style.setProperty(n,e.call(this,i),t)}}function styleTween(n,e,t){var i,r;function s(){var o=e.apply(this,arguments);return o!==r&&(i=(r=o)&&styleInterpolate(n,o,t)),i}return s._value=e,s}function transition_styleTween(n,e,t){var i="style."+(n+="");if(arguments.length<2)return(i=this.tween(i))&&i._value;if(e==null)return this.tween(i,null);if(typeof e!="function")throw new Error;return this.tween(i,styleTween(n,e,t??""))}function textConstant(n){return function(){this.textContent=n}}function textFunction(n){return function(){var e=n(this);this.textContent=e??""}}function transition_text(n){return this.tween("text",typeof n=="function"?textFunction(tweenValue(this,"text",n)):textConstant(n==null?"":n+""))}function textInterpolate(n){return function(e){this.textContent=n.call(this,e)}}function textTween(n){var e,t;function i(){var r=n.apply(this,arguments);return r!==t&&(e=(t=r)&&textInterpolate(r)),e}return i._value=n,i}function transition_textTween(n){var e="text";if(arguments.length<1)return(e=this.tween(e))&&e._value;if(n==null)return this.tween(e,null);if(typeof n!="function")throw new Error;return this.tween(e,textTween(n))}function transition_transition(){for(var n=this._name,e=this._id,t=newId(),i=this._groups,r=i.length,s=0;s<r;++s)for(var o=i[s],l=o.length,u,h=0;h<l;++h)if(u=o[h]){var f=get(u,e);schedule(u,n,t,h,o,{time:f.time+f.delay+f.duration,delay:0,duration:f.duration,ease:f.ease})}return new Transition(i,this._parents,n,t)}function transition_end(){var n,e,t=this,i=t._id,r=t.size();return new Promise(function(s,o){var l={value:o},u={value:function(){--r===0&&s()}};t.each(function(){var h=set$1(this,i),f=h.on;f!==n&&(e=(n=f).copy(),e._.cancel.push(l),e._.interrupt.push(l),e._.end.push(u)),h.on=e}),r===0&&s()})}var id=0;function Transition(n,e,t,i){this._groups=n,this._parents=e,this._name=t,this._id=i}function newId(){return++id}var selection_prototype=selection.prototype;Transition.prototype={constructor:Transition,select:transition_select,selectAll:transition_selectAll,selectChild:selection_prototype.selectChild,selectChildren:selection_prototype.selectChildren,filter:transition_filter,merge:transition_merge,selection:transition_selection,transition:transition_transition,call:selection_prototype.call,nodes:selection_prototype.nodes,node:selection_prototype.node,size:selection_prototype.size,empty:selection_prototype.empty,each:selection_prototype.each,on:transition_on,attr:transition_attr,attrTween:transition_attrTween,style:transition_style,styleTween:transition_styleTween,text:transition_text,textTween:transition_textTween,remove:transition_remove,tween:transition_tween,delay:transition_delay,duration:transition_duration,ease:transition_ease,easeVarying:transition_easeVarying,end:transition_end,[Symbol.iterator]:selection_prototype[Symbol.iterator]};function cubicInOut(n){return((n*=2)<=1?n*n*n:(n-=2)*n*n+2)/2}var defaultTiming={time:null,delay:0,duration:250,ease:cubicInOut};function inherit(n,e){for(var t;!(t=n.__transition)||!(t=t[e]);)if(!(n=n.parentNode))throw new Error(`transition ${e} not found`);return t}function selection_transition(n){var e,t;n instanceof Transition?(e=n._id,n=n._name):(e=newId(),(t=defaultTiming).time=now(),n=n==null?null:n+"");for(var i=this._groups,r=i.length,s=0;s<r;++s)for(var o=i[s],l=o.length,u,h=0;h<l;++h)(u=o[h])&&schedule(u,n,e,h,o,t||inherit(u,e));return new Transition(i,this._parents,n,e)}selection.prototype.interrupt=selection_interrupt;selection.prototype.transition=selection_transition;function center(n,e){var t,i=1;n==null&&(n=0),e==null&&(e=0);function r(){var s,o=t.length,l,u=0,h=0;for(s=0;s<o;++s)l=t[s],u+=l.x,h+=l.y;for(u=(u/o-n)*i,h=(h/o-e)*i,s=0;s<o;++s)l=t[s],l.x-=u,l.y-=h}return r.initialize=function(s){t=s},r.x=function(s){return arguments.length?(n=+s,r):n},r.y=function(s){return arguments.length?(e=+s,r):e},r.strength=function(s){return arguments.length?(i=+s,r):i},r}function tree_add(n){const e=+this._x.call(null,n),t=+this._y.call(null,n);return add(this.cover(e,t),e,t,n)}function add(n,e,t,i){if(isNaN(e)||isNaN(t))return n;var r,s=n._root,o={data:i},l=n._x0,u=n._y0,h=n._x1,f=n._y1,S,p,I,H,Y,R,V,be;if(!s)return n._root=o,n;for(;s.length;)if((Y=e>=(S=(l+h)/2))?l=S:h=S,(R=t>=(p=(u+f)/2))?u=p:f=p,r=s,!(s=s[V=R<<1|Y]))return r[V]=o,n;if(I=+n._x.call(null,s.data),H=+n._y.call(null,s.data),e===I&&t===H)return o.next=s,r?r[V]=o:n._root=o,n;do r=r?r[V]=new Array(4):n._root=new Array(4),(Y=e>=(S=(l+h)/2))?l=S:h=S,(R=t>=(p=(u+f)/2))?u=p:f=p;while((V=R<<1|Y)===(be=(H>=p)<<1|I>=S));return r[be]=s,r[V]=o,n}function addAll(n){var e,t,i=n.length,r,s,o=new Array(i),l=new Array(i),u=1/0,h=1/0,f=-1/0,S=-1/0;for(t=0;t<i;++t)isNaN(r=+this._x.call(null,e=n[t]))||isNaN(s=+this._y.call(null,e))||(o[t]=r,l[t]=s,r<u&&(u=r),r>f&&(f=r),s<h&&(h=s),s>S&&(S=s));if(u>f||h>S)return this;for(this.cover(u,h).cover(f,S),t=0;t<i;++t)add(this,o[t],l[t],n[t]);return this}function tree_cover(n,e){if(isNaN(n=+n)||isNaN(e=+e))return this;var t=this._x0,i=this._y0,r=this._x1,s=this._y1;if(isNaN(t))r=(t=Math.floor(n))+1,s=(i=Math.floor(e))+1;else{for(var o=r-t||1,l=this._root,u,h;t>n||n>=r||i>e||e>=s;)switch(h=(e<i)<<1|n<t,u=new Array(4),u[h]=l,l=u,o*=2,h){case 0:r=t+o,s=i+o;break;case 1:t=r-o,s=i+o;break;case 2:r=t+o,i=s-o;break;case 3:t=r-o,i=s-o;break}this._root&&this._root.length&&(this._root=l)}return this._x0=t,this._y0=i,this._x1=r,this._y1=s,this}function tree_data(){var n=[];return this.visit(function(e){if(!e.length)do n.push(e.data);while(e=e.next)}),n}function tree_extent(n){return arguments.length?this.cover(+n[0][0],+n[0][1]).cover(+n[1][0],+n[1][1]):isNaN(this._x0)?void 0:[[this._x0,this._y0],[this._x1,this._y1]]}function Quad(n,e,t,i,r){this.node=n,this.x0=e,this.y0=t,this.x1=i,this.y1=r}function tree_find(n,e,t){var i,r=this._x0,s=this._y0,o,l,u,h,f=this._x1,S=this._y1,p=[],I=this._root,H,Y;for(I&&p.push(new Quad(I,r,s,f,S)),t==null?t=1/0:(r=n-t,s=e-t,f=n+t,S=e+t,t*=t);H=p.pop();)if(!(!(I=H.node)||(o=H.x0)>f||(l=H.y0)>S||(u=H.x1)<r||(h=H.y1)<s))if(I.length){var R=(o+u)/2,V=(l+h)/2;p.push(new Quad(I[3],R,V,u,h),new Quad(I[2],o,V,R,h),new Quad(I[1],R,l,u,V),new Quad(I[0],o,l,R,V)),(Y=(e>=V)<<1|n>=R)&&(H=p[p.length-1],p[p.length-1]=p[p.length-1-Y],p[p.length-1-Y]=H)}else{var be=n-+this._x.call(null,I.data),ct=e-+this._y.call(null,I.data),ot=be*be+ct*ct;if(ot<t){var dt=Math.sqrt(t=ot);r=n-dt,s=e-dt,f=n+dt,S=e+dt,i=I.data}}return i}function tree_remove(n){if(isNaN(f=+this._x.call(null,n))||isNaN(S=+this._y.call(null,n)))return this;var e,t=this._root,i,r,s,o=this._x0,l=this._y0,u=this._x1,h=this._y1,f,S,p,I,H,Y,R,V;if(!t)return this;if(t.length)for(;;){if((H=f>=(p=(o+u)/2))?o=p:u=p,(Y=S>=(I=(l+h)/2))?l=I:h=I,e=t,!(t=t[R=Y<<1|H]))return this;if(!t.length)break;(e[R+1&3]||e[R+2&3]||e[R+3&3])&&(i=e,V=R)}for(;t.data!==n;)if(r=t,!(t=t.next))return this;return(s=t.next)&&delete t.next,r?(s?r.next=s:delete r.next,this):e?(s?e[R]=s:delete e[R],(t=e[0]||e[1]||e[2]||e[3])&&t===(e[3]||e[2]||e[1]||e[0])&&!t.length&&(i?i[V]=t:this._root=t),this):(this._root=s,this)}function removeAll(n){for(var e=0,t=n.length;e<t;++e)this.remove(n[e]);return this}function tree_root(){return this._root}function tree_size(){var n=0;return this.visit(function(e){if(!e.length)do++n;while(e=e.next)}),n}function tree_visit(n){var e=[],t,i=this._root,r,s,o,l,u;for(i&&e.push(new Quad(i,this._x0,this._y0,this._x1,this._y1));t=e.pop();)if(!n(i=t.node,s=t.x0,o=t.y0,l=t.x1,u=t.y1)&&i.length){var h=(s+l)/2,f=(o+u)/2;(r=i[3])&&e.push(new Quad(r,h,f,l,u)),(r=i[2])&&e.push(new Quad(r,s,f,h,u)),(r=i[1])&&e.push(new Quad(r,h,o,l,f)),(r=i[0])&&e.push(new Quad(r,s,o,h,f))}return this}function tree_visitAfter(n){var e=[],t=[],i;for(this._root&&e.push(new Quad(this._root,this._x0,this._y0,this._x1,this._y1));i=e.pop();){var r=i.node;if(r.length){var s,o=i.x0,l=i.y0,u=i.x1,h=i.y1,f=(o+u)/2,S=(l+h)/2;(s=r[0])&&e.push(new Quad(s,o,l,f,S)),(s=r[1])&&e.push(new Quad(s,f,l,u,S)),(s=r[2])&&e.push(new Quad(s,o,S,f,h)),(s=r[3])&&e.push(new Quad(s,f,S,u,h))}t.push(i)}for(;i=t.pop();)n(i.node,i.x0,i.y0,i.x1,i.y1);return this}function defaultX(n){return n[0]}function tree_x(n){return arguments.length?(this._x=n,this):this._x}function defaultY(n){return n[1]}function tree_y(n){return arguments.length?(this._y=n,this):this._y}function quadtree(n,e,t){var i=new Quadtree(e??defaultX,t??defaultY,NaN,NaN,NaN,NaN);return n==null?i:i.addAll(n)}function Quadtree(n,e,t,i,r,s){this._x=n,this._y=e,this._x0=t,this._y0=i,this._x1=r,this._y1=s,this._root=void 0}function leaf_copy(n){for(var e={data:n.data},t=e;n=n.next;)t=t.next={data:n.data};return e}var treeProto=quadtree.prototype=Quadtree.prototype;treeProto.copy=function(){var n=new Quadtree(this._x,this._y,this._x0,this._y0,this._x1,this._y1),e=this._root,t,i;if(!e)return n;if(!e.length)return n._root=leaf_copy(e),n;for(t=[{source:e,target:n._root=new Array(4)}];e=t.pop();)for(var r=0;r<4;++r)(i=e.source[r])&&(i.length?t.push({source:i,target:e.target[r]=new Array(4)}):e.target[r]=leaf_copy(i));return n};treeProto.add=tree_add;treeProto.addAll=addAll;treeProto.cover=tree_cover;treeProto.data=tree_data;treeProto.extent=tree_extent;treeProto.find=tree_find;treeProto.remove=tree_remove;treeProto.removeAll=removeAll;treeProto.root=tree_root;treeProto.size=tree_size;treeProto.visit=tree_visit;treeProto.visitAfter=tree_visitAfter;treeProto.x=tree_x;treeProto.y=tree_y;function constant(n){return function(){return n}}function jiggle(n){return(n()-.5)*1e-6}function x$2(n){return n.x+n.vx}function y$2(n){return n.y+n.vy}function collide(n){var e,t,i,r=1,s=1;typeof n!="function"&&(n=constant(n==null?1:+n));function o(){for(var h,f=e.length,S,p,I,H,Y,R,V=0;V<s;++V)for(S=quadtree(e,x$2,y$2).visitAfter(l),h=0;h<f;++h)p=e[h],Y=t[p.index],R=Y*Y,I=p.x+p.vx,H=p.y+p.vy,S.visit(be);function be(ct,ot,dt,pt,St){var at=ct.data,ut=ct.r,Gt=Y+ut;if(at){if(at.index>p.index){var xt=I-at.x-at.vx,Lt=H-at.y-at.vy,Rt=xt*xt+Lt*Lt;Rt<Gt*Gt&&(xt===0&&(xt=jiggle(i),Rt+=xt*xt),Lt===0&&(Lt=jiggle(i),Rt+=Lt*Lt),Rt=(Gt-(Rt=Math.sqrt(Rt)))/Rt*r,p.vx+=(xt*=Rt)*(Gt=(ut*=ut)/(R+ut)),p.vy+=(Lt*=Rt)*Gt,at.vx-=xt*(Gt=1-Gt),at.vy-=Lt*Gt)}return}return ot>I+Gt||pt<I-Gt||dt>H+Gt||St<H-Gt}}function l(h){if(h.data)return h.r=t[h.data.index];for(var f=h.r=0;f<4;++f)h[f]&&h[f].r>h.r&&(h.r=h[f].r)}function u(){if(e){var h,f=e.length,S;for(t=new Array(f),h=0;h<f;++h)S=e[h],t[S.index]=+n(S,h,e)}}return o.initialize=function(h,f){e=h,i=f,u()},o.iterations=function(h){return arguments.length?(s=+h,o):s},o.strength=function(h){return arguments.length?(r=+h,o):r},o.radius=function(h){return arguments.length?(n=typeof h=="function"?h:constant(+h),u(),o):n},o}function index(n){return n.index}function find(n,e){var t=n.get(e);if(!t)throw new Error("node not found: "+e);return t}function link(n){var e=index,t=S,i,r=constant(30),s,o,l,u,h,f=1;n==null&&(n=[]);function S(R){return 1/Math.min(l[R.source.index],l[R.target.index])}function p(R){for(var V=0,be=n.length;V<f;++V)for(var ct=0,ot,dt,pt,St,at,ut,Gt;ct<be;++ct)ot=n[ct],dt=ot.source,pt=ot.target,St=pt.x+pt.vx-dt.x-dt.vx||jiggle(h),at=pt.y+pt.vy-dt.y-dt.vy||jiggle(h),ut=Math.sqrt(St*St+at*at),ut=(ut-s[ct])/ut*R*i[ct],St*=ut,at*=ut,pt.vx-=St*(Gt=u[ct]),pt.vy-=at*Gt,dt.vx+=St*(Gt=1-Gt),dt.vy+=at*Gt}function I(){if(o){var R,V=o.length,be=n.length,ct=new Map(o.map((dt,pt)=>[e(dt,pt,o),dt])),ot;for(R=0,l=new Array(V);R<be;++R)ot=n[R],ot.index=R,typeof ot.source!="object"&&(ot.source=find(ct,ot.source)),typeof ot.target!="object"&&(ot.target=find(ct,ot.target)),l[ot.source.index]=(l[ot.source.index]||0)+1,l[ot.target.index]=(l[ot.target.index]||0)+1;for(R=0,u=new Array(be);R<be;++R)ot=n[R],u[R]=l[ot.source.index]/(l[ot.source.index]+l[ot.target.index]);i=new Array(be),H(),s=new Array(be),Y()}}function H(){if(o)for(var R=0,V=n.length;R<V;++R)i[R]=+t(n[R],R,n)}function Y(){if(o)for(var R=0,V=n.length;R<V;++R)s[R]=+r(n[R],R,n)}return p.initialize=function(R,V){o=R,h=V,I()},p.links=function(R){return arguments.length?(n=R,I(),p):n},p.id=function(R){return arguments.length?(e=R,p):e},p.iterations=function(R){return arguments.length?(f=+R,p):f},p.strength=function(R){return arguments.length?(t=typeof R=="function"?R:constant(+R),H(),p):t},p.distance=function(R){return arguments.length?(r=typeof R=="function"?R:constant(+R),Y(),p):r},p}const a=1664525,c=1013904223,m$1=4294967296;function lcg(){let n=1;return()=>(n=(a*n+c)%m$1)/m$1}function x$1(n){return n.x}function y$1(n){return n.y}var initialRadius=10,initialAngle=Math.PI*(3-Math.sqrt(5));function simulation(n){var e,t=1,i=.001,r=1-Math.pow(i,1/300),s=0,o=.6,l=new Map,u=timer(S),h=dispatch("tick","end"),f=lcg();n==null&&(n=[]);function S(){p(),h.call("tick",e),t<i&&(u.stop(),h.call("end",e))}function p(Y){var R,V=n.length,be;Y===void 0&&(Y=1);for(var ct=0;ct<Y;++ct)for(t+=(s-t)*r,l.forEach(function(ot){ot(t)}),R=0;R<V;++R)be=n[R],be.fx==null?be.x+=be.vx*=o:(be.x=be.fx,be.vx=0),be.fy==null?be.y+=be.vy*=o:(be.y=be.fy,be.vy=0);return e}function I(){for(var Y=0,R=n.length,V;Y<R;++Y){if(V=n[Y],V.index=Y,V.fx!=null&&(V.x=V.fx),V.fy!=null&&(V.y=V.fy),isNaN(V.x)||isNaN(V.y)){var be=initialRadius*Math.sqrt(.5+Y),ct=Y*initialAngle;V.x=be*Math.cos(ct),V.y=be*Math.sin(ct)}(isNaN(V.vx)||isNaN(V.vy))&&(V.vx=V.vy=0)}}function H(Y){return Y.initialize&&Y.initialize(n,f),Y}return I(),e={tick:p,restart:function(){return u.restart(S),e},stop:function(){return u.stop(),e},nodes:function(Y){return arguments.length?(n=Y,I(),l.forEach(H),e):n},alpha:function(Y){return arguments.length?(t=+Y,e):t},alphaMin:function(Y){return arguments.length?(i=+Y,e):i},alphaDecay:function(Y){return arguments.length?(r=+Y,e):+r},alphaTarget:function(Y){return arguments.length?(s=+Y,e):s},velocityDecay:function(Y){return arguments.length?(o=1-Y,e):1-o},randomSource:function(Y){return arguments.length?(f=Y,l.forEach(H),e):f},force:function(Y,R){return arguments.length>1?(R==null?l.delete(Y):l.set(Y,H(R)),e):l.get(Y)},find:function(Y,R,V){var be=0,ct=n.length,ot,dt,pt,St,at;for(V==null?V=1/0:V*=V,be=0;be<ct;++be)St=n[be],ot=Y-St.x,dt=R-St.y,pt=ot*ot+dt*dt,pt<V&&(at=St,V=pt);return at},on:function(Y,R){return arguments.length>1?(h.on(Y,R),e):h.on(Y)}}}function manyBody(){var n,e,t,i,r=constant(-30),s,o=1,l=1/0,u=.81;function h(I){var H,Y=n.length,R=quadtree(n,x$1,y$1).visitAfter(S);for(i=I,H=0;H<Y;++H)e=n[H],R.visit(p)}function f(){if(n){var I,H=n.length,Y;for(s=new Array(H),I=0;I<H;++I)Y=n[I],s[Y.index]=+r(Y,I,n)}}function S(I){var H=0,Y,R,V=0,be,ct,ot;if(I.length){for(be=ct=ot=0;ot<4;++ot)(Y=I[ot])&&(R=Math.abs(Y.value))&&(H+=Y.value,V+=R,be+=R*Y.x,ct+=R*Y.y);I.x=be/V,I.y=ct/V}else{Y=I,Y.x=Y.data.x,Y.y=Y.data.y;do H+=s[Y.data.index];while(Y=Y.next)}I.value=H}function p(I,H,Y,R){if(!I.value)return!0;var V=I.x-e.x,be=I.y-e.y,ct=R-H,ot=V*V+be*be;if(ct*ct/u<ot)return ot<l&&(V===0&&(V=jiggle(t),ot+=V*V),be===0&&(be=jiggle(t),ot+=be*be),ot<o&&(ot=Math.sqrt(o*ot)),e.vx+=V*I.value*i/ot,e.vy+=be*I.value*i/ot),!0;if(I.length||ot>=l)return;(I.data!==e||I.next)&&(V===0&&(V=jiggle(t),ot+=V*V),be===0&&(be=jiggle(t),ot+=be*be),ot<o&&(ot=Math.sqrt(o*ot)));do I.data!==e&&(ct=s[I.data.index]*i/ot,e.vx+=V*ct,e.vy+=be*ct);while(I=I.next)}return h.initialize=function(I,H){n=I,t=H,f()},h.strength=function(I){return arguments.length?(r=typeof I=="function"?I:constant(+I),f(),h):r},h.distanceMin=function(I){return arguments.length?(o=I*I,h):Math.sqrt(o)},h.distanceMax=function(I){return arguments.length?(l=I*I,h):Math.sqrt(l)},h.theta=function(I){return arguments.length?(u=I*I,h):Math.sqrt(u)},h}function Transform(n,e,t){this.k=n,this.x=e,this.y=t}Transform.prototype={constructor:Transform,scale:function(n){return n===1?this:new Transform(this.k*n,this.x,this.y)},translate:function(n,e){return n===0&e===0?this:new Transform(this.k,this.x+this.k*n,this.y+this.k*e)},apply:function(n){return[n[0]*this.k+this.x,n[1]*this.k+this.y]},applyX:function(n){return n*this.k+this.x},applyY:function(n){return n*this.k+this.y},invert:function(n){return[(n[0]-this.x)/this.k,(n[1]-this.y)/this.k]},invertX:function(n){return(n-this.x)/this.k},invertY:function(n){return(n-this.y)/this.k},rescaleX:function(n){return n.copy().domain(n.range().map(this.invertX,this).map(n.invert,n))},rescaleY:function(n){return n.copy().domain(n.range().map(this.invertY,this).map(n.invert,n))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};Transform.prototype;function computeLayout(n,e){const t={},i=new Set,r={};for(const R of e)t[R.name]=R.clusterCenter,i.add(R.featuredNode),r[R.name]=R.readingOrder;const s=n.nodes.some(R=>R.hint!=null);let o=42;function l(){return o=(o*16807+0)%2147483647,(o-1)/2147483646}const u=n.nodes.map(R=>{const V=t[R.cluster]??{x:0,y:0};let be,ct;return R.hint?(be=V.x+R.hint.x+(l()-.5)*4,ct=V.y+R.hint.y+(l()-.5)*4):(be=V.x+(l()-.5)*100,ct=V.y+(l()-.5)*100),{...R,x:be,y:ct,vx:0,vy:0}});for(const R of u)if(i.has(R.id)){const V=t[R.cluster]??{x:0,y:0};R.x=V.x,R.y=V.y,R.fx=V.x,R.fy=V.y}const h=n.edges.map(R=>({...R})),f=new Map;for(const R of u)f.set(R.id,R.cluster);const S=new Map;if(s){for(const R of n.nodes)if(R.hint){const V=t[R.cluster]??{x:0,y:0};S.set(R.id,{x:V.x+R.hint.x,y:V.y+R.hint.y})}}const p=s?-120:-180,I=s?180:400,H=.08,Y=simulation(u).force("link",link(h).id(R=>R.id).distance(R=>{const V=R,be=f.get(V.source),ct=f.get(V.target);return be!==ct?150:V.weight>=3?35:55})).force("charge",manyBody().strength(p)).force("center",center(0,0).strength(.02)).force("collision",collide().radius(R=>(2+R.connectionCount*.8)*3+12).strength(.8)).force("cluster",()=>{for(const R of u){const V=t[R.cluster];V&&R.fx==null&&(R.vx+=(V.x-R.x)*.03,R.vy+=(V.y-R.y)*.03)}});s&&Y.force("anchor",()=>{for(const R of u){if(R.fx!=null)continue;const V=S.get(R.id);V&&(R.vx+=(V.x-R.x)*H,R.vy+=(V.y-R.y)*H)}}),Y.stop();for(let R=0;R<I;R++)Y.tick();for(const R of u)i.has(R.id)&&(R.fx=null,R.fy=null);return u.map(R=>{const V=i.has(R.id),ct=(r[R.cluster]??[]).indexOf(R.id),ot=2+R.connectionCount*.8,dt=V?ot*1.5:ot;let pt=(l()-.5)*20;return V||(R.hand==="left"?pt-=25:R.hand==="right"&&(pt+=25)),{...R,z:pt,radius:dt,bookOrder:ct>=0?ct+1:99}})}function identifyGhosts(n,e,t){const i=new Set(n.nodes.map(f=>f.id)),r=new Set(e.nodes.map(f=>f.id)),s=[],o=new Set,l=new Set,u=(f,S)=>[f,S].sort().join("::");for(const f of e.edges){const S=i.has(f.source),p=i.has(f.target),I=r.has(f.source)&&!S,H=r.has(f.target)&&!p;if(S&&H){o.add(f.target);const Y=u(f.source,f.target);l.has(Y)||(l.add(Y),s.push(f))}else if(p&&I){o.add(f.source);const Y=u(f.source,f.target);l.has(Y)||(l.add(Y),s.push(f))}}for(const f of n.edges){const S=!i.has(f.source)&&r.has(f.source),p=!i.has(f.target)&&r.has(f.target);if(S){o.add(f.source);const I=u(f.source,f.target);l.has(I)||(l.add(I),s.push(f))}if(p){o.add(f.target);const I=u(f.source,f.target);l.has(I)||(l.add(I),s.push(f))}}return{ghostNodes:e.nodes.filter(f=>o.has(f.id)).map(f=>({...f,ghost:!0,cluster:t.remoteName})),ghostEdges:s}}async function fetchRemoteGraph(n){try{const e=await fetch(n);return e.ok?await e.json():null}catch{return null}}function mergeForAtlas(n,e){const t=new Set(n.nodes.map(l=>l.id)),i=[...n.nodes.map(l=>({...l,ghost:!1})),...e.nodes.filter(l=>!t.has(l.id)).map(l=>({...l,ghost:!1}))],r=new Set,s=[],o=(l,u)=>[l,u].sort().join("::");for(const l of[...n.edges,...e.edges]){const u=o(l.source,l.target);r.has(u)||(r.add(u),s.push(l))}return{nodes:i,edges:s}}function getAugmentedNamespace(n){if(Object.prototype.hasOwnProperty.call(n,"__esModule"))return n;var e=n.default;if(typeof e=="function"){var t=function i(){var r=!1;try{r=this instanceof i}catch{}return r?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(n).forEach(function(i){var r=Object.getOwnPropertyDescriptor(n,i);Object.defineProperty(t,i,r.get?r:{enumerable:!0,get:function(){return n[i]}})}),t}const __viteBrowserExternal={},__viteBrowserExternal$1=Object.freeze(Object.defineProperty({__proto__:null,default:__viteBrowserExternal},Symbol.toStringTag,{value:"Module"})),require$$0=getAugmentedNamespace(__viteBrowserExternal$1);var kindOf,hasRequiredKindOf;function requireKindOf(){if(hasRequiredKindOf)return kindOf;hasRequiredKindOf=1;var n=Object.prototype.toString;kindOf=function(S){if(S===void 0)return"undefined";if(S===null)return"null";var p=typeof S;if(p==="boolean")return"boolean";if(p==="string")return"string";if(p==="number")return"number";if(p==="symbol")return"symbol";if(p==="function")return o(S)?"generatorfunction":"function";if(t(S))return"array";if(h(S))return"buffer";if(u(S))return"arguments";if(r(S))return"date";if(i(S))return"error";if(s(S))return"regexp";switch(e(S)){case"Symbol":return"symbol";case"Promise":return"promise";case"WeakMap":return"weakmap";case"WeakSet":return"weakset";case"Map":return"map";case"Set":return"set";case"Int8Array":return"int8array";case"Uint8Array":return"uint8array";case"Uint8ClampedArray":return"uint8clampedarray";case"Int16Array":return"int16array";case"Uint16Array":return"uint16array";case"Int32Array":return"int32array";case"Uint32Array":return"uint32array";case"Float32Array":return"float32array";case"Float64Array":return"float64array"}if(l(S))return"generator";switch(p=n.call(S),p){case"[object Object]":return"object";case"[object Map Iterator]":return"mapiterator";case"[object Set Iterator]":return"setiterator";case"[object String Iterator]":return"stringiterator";case"[object Array Iterator]":return"arrayiterator"}return p.slice(8,-1).toLowerCase().replace(/\s/g,"")};function e(f){return typeof f.constructor=="function"?f.constructor.name:null}function t(f){return Array.isArray?Array.isArray(f):f instanceof Array}function i(f){return f instanceof Error||typeof f.message=="string"&&f.constructor&&typeof f.constructor.stackTraceLimit=="number"}function r(f){return f instanceof Date?!0:typeof f.toDateString=="function"&&typeof f.getDate=="function"&&typeof f.setDate=="function"}function s(f){return f instanceof RegExp?!0:typeof f.flags=="string"&&typeof f.ignoreCase=="boolean"&&typeof f.multiline=="boolean"&&typeof f.global=="boolean"}function o(f,S){return e(f)==="GeneratorFunction"}function l(f){return typeof f.throw=="function"&&typeof f.return=="function"&&typeof f.next=="function"}function u(f){try{if(typeof f.length=="number"&&typeof f.callee=="function")return!0}catch(S){if(S.message.indexOf("callee")!==-1)return!0}return!1}function h(f){return f.constructor&&typeof f.constructor.isBuffer=="function"?f.constructor.isBuffer(f):!1}return kindOf}var isExtendable,hasRequiredIsExtendable;function requireIsExtendable(){return hasRequiredIsExtendable||(hasRequiredIsExtendable=1,isExtendable=function(e){return typeof e<"u"&&e!==null&&(typeof e=="object"||typeof e=="function")}),isExtendable}var extendShallow,hasRequiredExtendShallow;function requireExtendShallow(){if(hasRequiredExtendShallow)return extendShallow;hasRequiredExtendShallow=1;var n=requireIsExtendable();extendShallow=function(r){n(r)||(r={});for(var s=arguments.length,o=1;o<s;o++){var l=arguments[o];n(l)&&e(r,l)}return r};function e(i,r){for(var s in r)t(r,s)&&(i[s]=r[s])}function t(i,r){return Object.prototype.hasOwnProperty.call(i,r)}return extendShallow}var sectionMatter,hasRequiredSectionMatter;function requireSectionMatter(){if(hasRequiredSectionMatter)return sectionMatter;hasRequiredSectionMatter=1;var n=requireKindOf(),e=requireExtendShallow();sectionMatter=function(u,h){typeof h=="function"&&(h={parse:h});var f=i(u),S={section_delimiter:"---",parse:o},p=e({},S,h),I=p.section_delimiter,H=f.content.split(/\r?\n/),Y=null,R=s(),V=[],be=[];function ct(ut){f.content=ut,Y=[],V=[]}function ot(ut){be.length&&(R.key=r(be[0],I),R.content=ut,p.parse(R,Y),Y.push(R),R=s(),V=[],be=[])}for(var dt=0;dt<H.length;dt++){var pt=H[dt],St=be.length,at=pt.trim();if(t(at,I)){if(at.length===3&&dt!==0){if(St===0||St===2){V.push(pt);continue}be.push(at),R.data=V.join(`
`),V=[];continue}Y===null&&ct(V.join(`
`)),St===2&&ot(V.join(`
`)),be.push(at);continue}V.push(pt)}return Y===null?ct(V.join(`
`)):ot(V.join(`
`)),f.sections=Y,f};function t(u,h){return!(u.slice(0,h.length)!==h||u.charAt(h.length+1)===h.slice(-1))}function i(u){if(n(u)!=="object"&&(u={content:u}),typeof u.content!="string"&&!l(u.content))throw new TypeError("expected a buffer or string");return u.content=u.content.toString(),u.sections=[],u}function r(u,h){return u?u.slice(h.length).trim():""}function s(){return{key:"",data:"",content:""}}function o(u){return u}function l(u){return u&&u.constructor&&typeof u.constructor.isBuffer=="function"?u.constructor.isBuffer(u):!1}return sectionMatter}var engines={exports:{}},jsYaml$1={},loader={},common={},hasRequiredCommon;function requireCommon(){if(hasRequiredCommon)return common;hasRequiredCommon=1;function n(o){return typeof o>"u"||o===null}function e(o){return typeof o=="object"&&o!==null}function t(o){return Array.isArray(o)?o:n(o)?[]:[o]}function i(o,l){var u,h,f,S;if(l)for(S=Object.keys(l),u=0,h=S.length;u<h;u+=1)f=S[u],o[f]=l[f];return o}function r(o,l){var u="",h;for(h=0;h<l;h+=1)u+=o;return u}function s(o){return o===0&&Number.NEGATIVE_INFINITY===1/o}return common.isNothing=n,common.isObject=e,common.toArray=t,common.repeat=r,common.isNegativeZero=s,common.extend=i,common}var exception,hasRequiredException;function requireException(){if(hasRequiredException)return exception;hasRequiredException=1;function n(e,t){Error.call(this),this.name="YAMLException",this.reason=e,this.mark=t,this.message=(this.reason||"(unknown reason)")+(this.mark?" "+this.mark.toString():""),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}return n.prototype=Object.create(Error.prototype),n.prototype.constructor=n,n.prototype.toString=function(t){var i=this.name+": ";return i+=this.reason||"(unknown reason)",!t&&this.mark&&(i+=" "+this.mark.toString()),i},exception=n,exception}var mark,hasRequiredMark;function requireMark(){if(hasRequiredMark)return mark;hasRequiredMark=1;var n=requireCommon();function e(t,i,r,s,o){this.name=t,this.buffer=i,this.position=r,this.line=s,this.column=o}return e.prototype.getSnippet=function(i,r){var s,o,l,u,h;if(!this.buffer)return null;for(i=i||4,r=r||75,s="",o=this.position;o>0&&`\0\r
\u2028\u2029`.indexOf(this.buffer.charAt(o-1))===-1;)if(o-=1,this.position-o>r/2-1){s=" ... ",o+=5;break}for(l="",u=this.position;u<this.buffer.length&&`\0\r
\u2028\u2029`.indexOf(this.buffer.charAt(u))===-1;)if(u+=1,u-this.position>r/2-1){l=" ... ",u-=5;break}return h=this.buffer.slice(o,u),n.repeat(" ",i)+s+h+l+`
`+n.repeat(" ",i+this.position-o+s.length)+"^"},e.prototype.toString=function(i){var r,s="";return this.name&&(s+='in "'+this.name+'" '),s+="at line "+(this.line+1)+", column "+(this.column+1),i||(r=this.getSnippet(),r&&(s+=`:
`+r)),s},mark=e,mark}var type,hasRequiredType;function requireType(){if(hasRequiredType)return type;hasRequiredType=1;var n=requireException(),e=["kind","resolve","construct","instanceOf","predicate","represent","defaultStyle","styleAliases"],t=["scalar","sequence","mapping"];function i(s){var o={};return s!==null&&Object.keys(s).forEach(function(l){s[l].forEach(function(u){o[String(u)]=l})}),o}function r(s,o){if(o=o||{},Object.keys(o).forEach(function(l){if(e.indexOf(l)===-1)throw new n('Unknown option "'+l+'" is met in definition of "'+s+'" YAML type.')}),this.tag=s,this.kind=o.kind||null,this.resolve=o.resolve||function(){return!0},this.construct=o.construct||function(l){return l},this.instanceOf=o.instanceOf||null,this.predicate=o.predicate||null,this.represent=o.represent||null,this.defaultStyle=o.defaultStyle||null,this.styleAliases=i(o.styleAliases||null),t.indexOf(this.kind)===-1)throw new n('Unknown kind "'+this.kind+'" is specified for "'+s+'" YAML type.')}return type=r,type}var schema,hasRequiredSchema;function requireSchema(){if(hasRequiredSchema)return schema;hasRequiredSchema=1;var n=requireCommon(),e=requireException(),t=requireType();function i(o,l,u){var h=[];return o.include.forEach(function(f){u=i(f,l,u)}),o[l].forEach(function(f){u.forEach(function(S,p){S.tag===f.tag&&S.kind===f.kind&&h.push(p)}),u.push(f)}),u.filter(function(f,S){return h.indexOf(S)===-1})}function r(){var o={scalar:{},sequence:{},mapping:{},fallback:{}},l,u;function h(f){o[f.kind][f.tag]=o.fallback[f.tag]=f}for(l=0,u=arguments.length;l<u;l+=1)arguments[l].forEach(h);return o}function s(o){this.include=o.include||[],this.implicit=o.implicit||[],this.explicit=o.explicit||[],this.implicit.forEach(function(l){if(l.loadKind&&l.loadKind!=="scalar")throw new e("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.")}),this.compiledImplicit=i(this,"implicit",[]),this.compiledExplicit=i(this,"explicit",[]),this.compiledTypeMap=r(this.compiledImplicit,this.compiledExplicit)}return s.DEFAULT=null,s.create=function(){var l,u;switch(arguments.length){case 1:l=s.DEFAULT,u=arguments[0];break;case 2:l=arguments[0],u=arguments[1];break;default:throw new e("Wrong number of arguments for Schema.create function")}if(l=n.toArray(l),u=n.toArray(u),!l.every(function(h){return h instanceof s}))throw new e("Specified list of super schemas (or a single Schema object) contains a non-Schema object.");if(!u.every(function(h){return h instanceof t}))throw new e("Specified list of YAML types (or a single Type object) contains a non-Type object.");return new s({include:l,explicit:u})},schema=s,schema}var str,hasRequiredStr;function requireStr(){if(hasRequiredStr)return str;hasRequiredStr=1;var n=requireType();return str=new n("tag:yaml.org,2002:str",{kind:"scalar",construct:function(e){return e!==null?e:""}}),str}var seq,hasRequiredSeq;function requireSeq(){if(hasRequiredSeq)return seq;hasRequiredSeq=1;var n=requireType();return seq=new n("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(e){return e!==null?e:[]}}),seq}var map,hasRequiredMap;function requireMap(){if(hasRequiredMap)return map;hasRequiredMap=1;var n=requireType();return map=new n("tag:yaml.org,2002:map",{kind:"mapping",construct:function(e){return e!==null?e:{}}}),map}var failsafe,hasRequiredFailsafe;function requireFailsafe(){if(hasRequiredFailsafe)return failsafe;hasRequiredFailsafe=1;var n=requireSchema();return failsafe=new n({explicit:[requireStr(),requireSeq(),requireMap()]}),failsafe}var _null,hasRequired_null;function require_null(){if(hasRequired_null)return _null;hasRequired_null=1;var n=requireType();function e(r){if(r===null)return!0;var s=r.length;return s===1&&r==="~"||s===4&&(r==="null"||r==="Null"||r==="NULL")}function t(){return null}function i(r){return r===null}return _null=new n("tag:yaml.org,2002:null",{kind:"scalar",resolve:e,construct:t,predicate:i,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"}},defaultStyle:"lowercase"}),_null}var bool,hasRequiredBool;function requireBool(){if(hasRequiredBool)return bool;hasRequiredBool=1;var n=requireType();function e(r){if(r===null)return!1;var s=r.length;return s===4&&(r==="true"||r==="True"||r==="TRUE")||s===5&&(r==="false"||r==="False"||r==="FALSE")}function t(r){return r==="true"||r==="True"||r==="TRUE"}function i(r){return Object.prototype.toString.call(r)==="[object Boolean]"}return bool=new n("tag:yaml.org,2002:bool",{kind:"scalar",resolve:e,construct:t,predicate:i,represent:{lowercase:function(r){return r?"true":"false"},uppercase:function(r){return r?"TRUE":"FALSE"},camelcase:function(r){return r?"True":"False"}},defaultStyle:"lowercase"}),bool}var int,hasRequiredInt;function requireInt(){if(hasRequiredInt)return int;hasRequiredInt=1;var n=requireCommon(),e=requireType();function t(u){return 48<=u&&u<=57||65<=u&&u<=70||97<=u&&u<=102}function i(u){return 48<=u&&u<=55}function r(u){return 48<=u&&u<=57}function s(u){if(u===null)return!1;var h=u.length,f=0,S=!1,p;if(!h)return!1;if(p=u[f],(p==="-"||p==="+")&&(p=u[++f]),p==="0"){if(f+1===h)return!0;if(p=u[++f],p==="b"){for(f++;f<h;f++)if(p=u[f],p!=="_"){if(p!=="0"&&p!=="1")return!1;S=!0}return S&&p!=="_"}if(p==="x"){for(f++;f<h;f++)if(p=u[f],p!=="_"){if(!t(u.charCodeAt(f)))return!1;S=!0}return S&&p!=="_"}for(;f<h;f++)if(p=u[f],p!=="_"){if(!i(u.charCodeAt(f)))return!1;S=!0}return S&&p!=="_"}if(p==="_")return!1;for(;f<h;f++)if(p=u[f],p!=="_"){if(p===":")break;if(!r(u.charCodeAt(f)))return!1;S=!0}return!S||p==="_"?!1:p!==":"?!0:/^(:[0-5]?[0-9])+$/.test(u.slice(f))}function o(u){var h=u,f=1,S,p,I=[];return h.indexOf("_")!==-1&&(h=h.replace(/_/g,"")),S=h[0],(S==="-"||S==="+")&&(S==="-"&&(f=-1),h=h.slice(1),S=h[0]),h==="0"?0:S==="0"?h[1]==="b"?f*parseInt(h.slice(2),2):h[1]==="x"?f*parseInt(h,16):f*parseInt(h,8):h.indexOf(":")!==-1?(h.split(":").forEach(function(H){I.unshift(parseInt(H,10))}),h=0,p=1,I.forEach(function(H){h+=H*p,p*=60}),f*h):f*parseInt(h,10)}function l(u){return Object.prototype.toString.call(u)==="[object Number]"&&u%1===0&&!n.isNegativeZero(u)}return int=new e("tag:yaml.org,2002:int",{kind:"scalar",resolve:s,construct:o,predicate:l,represent:{binary:function(u){return u>=0?"0b"+u.toString(2):"-0b"+u.toString(2).slice(1)},octal:function(u){return u>=0?"0"+u.toString(8):"-0"+u.toString(8).slice(1)},decimal:function(u){return u.toString(10)},hexadecimal:function(u){return u>=0?"0x"+u.toString(16).toUpperCase():"-0x"+u.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),int}var float,hasRequiredFloat;function requireFloat(){if(hasRequiredFloat)return float;hasRequiredFloat=1;var n=requireCommon(),e=requireType(),t=new RegExp("^(?:[-+]?(?:0|[1-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\\.[0-9_]*|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function i(u){return!(u===null||!t.test(u)||u[u.length-1]==="_")}function r(u){var h,f,S,p;return h=u.replace(/_/g,"").toLowerCase(),f=h[0]==="-"?-1:1,p=[],"+-".indexOf(h[0])>=0&&(h=h.slice(1)),h===".inf"?f===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:h===".nan"?NaN:h.indexOf(":")>=0?(h.split(":").forEach(function(I){p.unshift(parseFloat(I,10))}),h=0,S=1,p.forEach(function(I){h+=I*S,S*=60}),f*h):f*parseFloat(h,10)}var s=/^[-+]?[0-9]+e/;function o(u,h){var f;if(isNaN(u))switch(h){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===u)switch(h){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===u)switch(h){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(n.isNegativeZero(u))return"-0.0";return f=u.toString(10),s.test(f)?f.replace("e",".e"):f}function l(u){return Object.prototype.toString.call(u)==="[object Number]"&&(u%1!==0||n.isNegativeZero(u))}return float=new e("tag:yaml.org,2002:float",{kind:"scalar",resolve:i,construct:r,predicate:l,represent:o,defaultStyle:"lowercase"}),float}var json,hasRequiredJson;function requireJson(){if(hasRequiredJson)return json;hasRequiredJson=1;var n=requireSchema();return json=new n({include:[requireFailsafe()],implicit:[require_null(),requireBool(),requireInt(),requireFloat()]}),json}var core,hasRequiredCore;function requireCore(){if(hasRequiredCore)return core;hasRequiredCore=1;var n=requireSchema();return core=new n({include:[requireJson()]}),core}var timestamp,hasRequiredTimestamp;function requireTimestamp(){if(hasRequiredTimestamp)return timestamp;hasRequiredTimestamp=1;var n=requireType(),e=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),t=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function i(o){return o===null?!1:e.exec(o)!==null||t.exec(o)!==null}function r(o){var l,u,h,f,S,p,I,H=0,Y=null,R,V,be;if(l=e.exec(o),l===null&&(l=t.exec(o)),l===null)throw new Error("Date resolve error");if(u=+l[1],h=+l[2]-1,f=+l[3],!l[4])return new Date(Date.UTC(u,h,f));if(S=+l[4],p=+l[5],I=+l[6],l[7]){for(H=l[7].slice(0,3);H.length<3;)H+="0";H=+H}return l[9]&&(R=+l[10],V=+(l[11]||0),Y=(R*60+V)*6e4,l[9]==="-"&&(Y=-Y)),be=new Date(Date.UTC(u,h,f,S,p,I,H)),Y&&be.setTime(be.getTime()-Y),be}function s(o){return o.toISOString()}return timestamp=new n("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:i,construct:r,instanceOf:Date,represent:s}),timestamp}var merge,hasRequiredMerge;function requireMerge(){if(hasRequiredMerge)return merge;hasRequiredMerge=1;var n=requireType();function e(t){return t==="<<"||t===null}return merge=new n("tag:yaml.org,2002:merge",{kind:"scalar",resolve:e}),merge}function commonjsRequire(n){throw new Error('Could not dynamically require "'+n+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var binary,hasRequiredBinary;function requireBinary(){if(hasRequiredBinary)return binary;hasRequiredBinary=1;var n;try{var e=commonjsRequire;n=e("buffer").Buffer}catch{}var t=requireType(),i=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function r(u){if(u===null)return!1;var h,f,S=0,p=u.length,I=i;for(f=0;f<p;f++)if(h=I.indexOf(u.charAt(f)),!(h>64)){if(h<0)return!1;S+=6}return S%8===0}function s(u){var h,f,S=u.replace(/[\r\n=]/g,""),p=S.length,I=i,H=0,Y=[];for(h=0;h<p;h++)h%4===0&&h&&(Y.push(H>>16&255),Y.push(H>>8&255),Y.push(H&255)),H=H<<6|I.indexOf(S.charAt(h));return f=p%4*6,f===0?(Y.push(H>>16&255),Y.push(H>>8&255),Y.push(H&255)):f===18?(Y.push(H>>10&255),Y.push(H>>2&255)):f===12&&Y.push(H>>4&255),n?n.from?n.from(Y):new n(Y):Y}function o(u){var h="",f=0,S,p,I=u.length,H=i;for(S=0;S<I;S++)S%3===0&&S&&(h+=H[f>>18&63],h+=H[f>>12&63],h+=H[f>>6&63],h+=H[f&63]),f=(f<<8)+u[S];return p=I%3,p===0?(h+=H[f>>18&63],h+=H[f>>12&63],h+=H[f>>6&63],h+=H[f&63]):p===2?(h+=H[f>>10&63],h+=H[f>>4&63],h+=H[f<<2&63],h+=H[64]):p===1&&(h+=H[f>>2&63],h+=H[f<<4&63],h+=H[64],h+=H[64]),h}function l(u){return n&&n.isBuffer(u)}return binary=new t("tag:yaml.org,2002:binary",{kind:"scalar",resolve:r,construct:s,predicate:l,represent:o}),binary}var omap,hasRequiredOmap;function requireOmap(){if(hasRequiredOmap)return omap;hasRequiredOmap=1;var n=requireType(),e=Object.prototype.hasOwnProperty,t=Object.prototype.toString;function i(s){if(s===null)return!0;var o=[],l,u,h,f,S,p=s;for(l=0,u=p.length;l<u;l+=1){if(h=p[l],S=!1,t.call(h)!=="[object Object]")return!1;for(f in h)if(e.call(h,f))if(!S)S=!0;else return!1;if(!S)return!1;if(o.indexOf(f)===-1)o.push(f);else return!1}return!0}function r(s){return s!==null?s:[]}return omap=new n("tag:yaml.org,2002:omap",{kind:"sequence",resolve:i,construct:r}),omap}var pairs,hasRequiredPairs;function requirePairs(){if(hasRequiredPairs)return pairs;hasRequiredPairs=1;var n=requireType(),e=Object.prototype.toString;function t(r){if(r===null)return!0;var s,o,l,u,h,f=r;for(h=new Array(f.length),s=0,o=f.length;s<o;s+=1){if(l=f[s],e.call(l)!=="[object Object]"||(u=Object.keys(l),u.length!==1))return!1;h[s]=[u[0],l[u[0]]]}return!0}function i(r){if(r===null)return[];var s,o,l,u,h,f=r;for(h=new Array(f.length),s=0,o=f.length;s<o;s+=1)l=f[s],u=Object.keys(l),h[s]=[u[0],l[u[0]]];return h}return pairs=new n("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:t,construct:i}),pairs}var set,hasRequiredSet;function requireSet(){if(hasRequiredSet)return set;hasRequiredSet=1;var n=requireType(),e=Object.prototype.hasOwnProperty;function t(r){if(r===null)return!0;var s,o=r;for(s in o)if(e.call(o,s)&&o[s]!==null)return!1;return!0}function i(r){return r!==null?r:{}}return set=new n("tag:yaml.org,2002:set",{kind:"mapping",resolve:t,construct:i}),set}var default_safe,hasRequiredDefault_safe;function requireDefault_safe(){if(hasRequiredDefault_safe)return default_safe;hasRequiredDefault_safe=1;var n=requireSchema();return default_safe=new n({include:[requireCore()],implicit:[requireTimestamp(),requireMerge()],explicit:[requireBinary(),requireOmap(),requirePairs(),requireSet()]}),default_safe}var _undefined,hasRequired_undefined;function require_undefined(){if(hasRequired_undefined)return _undefined;hasRequired_undefined=1;var n=requireType();function e(){return!0}function t(){}function i(){return""}function r(s){return typeof s>"u"}return _undefined=new n("tag:yaml.org,2002:js/undefined",{kind:"scalar",resolve:e,construct:t,predicate:r,represent:i}),_undefined}var regexp,hasRequiredRegexp;function requireRegexp(){if(hasRequiredRegexp)return regexp;hasRequiredRegexp=1;var n=requireType();function e(s){if(s===null||s.length===0)return!1;var o=s,l=/\/([gim]*)$/.exec(s),u="";return!(o[0]==="/"&&(l&&(u=l[1]),u.length>3||o[o.length-u.length-1]!=="/"))}function t(s){var o=s,l=/\/([gim]*)$/.exec(s),u="";return o[0]==="/"&&(l&&(u=l[1]),o=o.slice(1,o.length-u.length-1)),new RegExp(o,u)}function i(s){var o="/"+s.source+"/";return s.global&&(o+="g"),s.multiline&&(o+="m"),s.ignoreCase&&(o+="i"),o}function r(s){return Object.prototype.toString.call(s)==="[object RegExp]"}return regexp=new n("tag:yaml.org,2002:js/regexp",{kind:"scalar",resolve:e,construct:t,predicate:r,represent:i}),regexp}var _function,hasRequired_function;function require_function(){if(hasRequired_function)return _function;hasRequired_function=1;var n;try{var e=commonjsRequire;n=e("esprima")}catch{typeof window<"u"&&(n=window.esprima)}var t=requireType();function i(l){if(l===null)return!1;try{var u="("+l+")",h=n.parse(u,{range:!0});return!(h.type!=="Program"||h.body.length!==1||h.body[0].type!=="ExpressionStatement"||h.body[0].expression.type!=="ArrowFunctionExpression"&&h.body[0].expression.type!=="FunctionExpression")}catch{return!1}}function r(l){var u="("+l+")",h=n.parse(u,{range:!0}),f=[],S;if(h.type!=="Program"||h.body.length!==1||h.body[0].type!=="ExpressionStatement"||h.body[0].expression.type!=="ArrowFunctionExpression"&&h.body[0].expression.type!=="FunctionExpression")throw new Error("Failed to resolve function");return h.body[0].expression.params.forEach(function(p){f.push(p.name)}),S=h.body[0].expression.body.range,h.body[0].expression.body.type==="BlockStatement"?new Function(f,u.slice(S[0]+1,S[1]-1)):new Function(f,"return "+u.slice(S[0],S[1]))}function s(l){return l.toString()}function o(l){return Object.prototype.toString.call(l)==="[object Function]"}return _function=new t("tag:yaml.org,2002:js/function",{kind:"scalar",resolve:i,construct:r,predicate:o,represent:s}),_function}var default_full,hasRequiredDefault_full;function requireDefault_full(){if(hasRequiredDefault_full)return default_full;hasRequiredDefault_full=1;var n=requireSchema();return default_full=n.DEFAULT=new n({include:[requireDefault_safe()],explicit:[require_undefined(),requireRegexp(),require_function()]}),default_full}var hasRequiredLoader;function requireLoader(){if(hasRequiredLoader)return loader;hasRequiredLoader=1;var n=requireCommon(),e=requireException(),t=requireMark(),i=requireDefault_safe(),r=requireDefault_full(),s=Object.prototype.hasOwnProperty,o=1,l=2,u=3,h=4,f=1,S=2,p=3,I=/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,H=/[\x85\u2028\u2029]/,Y=/[,\[\]\{\}]/,R=/^(?:!|!!|![a-z\-]+!)$/i,V=/^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;function be(d){return Object.prototype.toString.call(d)}function ct(d){return d===10||d===13}function ot(d){return d===9||d===32}function dt(d){return d===9||d===32||d===10||d===13}function pt(d){return d===44||d===91||d===93||d===123||d===125}function St(d){var ft;return 48<=d&&d<=57?d-48:(ft=d|32,97<=ft&&ft<=102?ft-97+10:-1)}function at(d){return d===120?2:d===117?4:d===85?8:0}function ut(d){return 48<=d&&d<=57?d-48:-1}function Gt(d){return d===48?"\0":d===97?"\x07":d===98?"\b":d===116||d===9?"	":d===110?`
`:d===118?"\v":d===102?"\f":d===114?"\r":d===101?"\x1B":d===32?" ":d===34?'"':d===47?"/":d===92?"\\":d===78?"":d===95?" ":d===76?"\u2028":d===80?"\u2029":""}function xt(d){return d<=65535?String.fromCharCode(d):String.fromCharCode((d-65536>>10)+55296,(d-65536&1023)+56320)}function Lt(d,ft,_t){ft==="__proto__"?Object.defineProperty(d,ft,{configurable:!0,enumerable:!0,writable:!0,value:_t}):d[ft]=_t}for(var Rt=new Array(256),Nt=new Array(256),Dt=0;Dt<256;Dt++)Rt[Dt]=Gt(Dt)?1:0,Nt[Dt]=Gt(Dt);function Ut(d,ft){this.input=d,this.filename=ft.filename||null,this.schema=ft.schema||r,this.onWarning=ft.onWarning||null,this.legacy=ft.legacy||!1,this.json=ft.json||!1,this.listener=ft.listener||null,this.implicitTypes=this.schema.compiledImplicit,this.typeMap=this.schema.compiledTypeMap,this.length=d.length,this.position=0,this.line=0,this.lineStart=0,this.lineIndent=0,this.documents=[]}function Ct(d,ft){return new e(ft,new t(d.filename,d.input,d.position,d.line,d.position-d.lineStart))}function Ot(d,ft){throw Ct(d,ft)}function qt(d,ft){d.onWarning&&d.onWarning.call(null,Ct(d,ft))}var Zt={YAML:function(ft,_t,Mt){var wt,ee,gt;ft.version!==null&&Ot(ft,"duplication of %YAML directive"),Mt.length!==1&&Ot(ft,"YAML directive accepts exactly one argument"),wt=/^([0-9]+)\.([0-9]+)$/.exec(Mt[0]),wt===null&&Ot(ft,"ill-formed argument of the YAML directive"),ee=parseInt(wt[1],10),gt=parseInt(wt[2],10),ee!==1&&Ot(ft,"unacceptable YAML version of the document"),ft.version=Mt[0],ft.checkLineBreaks=gt<2,gt!==1&&gt!==2&&qt(ft,"unsupported YAML version of the document")},TAG:function(ft,_t,Mt){var wt,ee;Mt.length!==2&&Ot(ft,"TAG directive accepts exactly two arguments"),wt=Mt[0],ee=Mt[1],R.test(wt)||Ot(ft,"ill-formed tag handle (first argument) of the TAG directive"),s.call(ft.tagMap,wt)&&Ot(ft,'there is a previously declared suffix for "'+wt+'" tag handle'),V.test(ee)||Ot(ft,"ill-formed tag prefix (second argument) of the TAG directive"),ft.tagMap[wt]=ee}};function Qt(d,ft,_t,Mt){var wt,ee,gt,Tt;if(ft<_t){if(Tt=d.input.slice(ft,_t),Mt)for(wt=0,ee=Tt.length;wt<ee;wt+=1)gt=Tt.charCodeAt(wt),gt===9||32<=gt&&gt<=1114111||Ot(d,"expected valid JSON character");else I.test(Tt)&&Ot(d,"the stream contains non-printable characters");d.result+=Tt}}function Jt(d,ft,_t,Mt){var wt,ee,gt,Tt;for(n.isObject(_t)||Ot(d,"cannot merge mappings; the provided source object is unacceptable"),wt=Object.keys(_t),gt=0,Tt=wt.length;gt<Tt;gt+=1)ee=wt[gt],s.call(ft,ee)||(Lt(ft,ee,_t[ee]),Mt[ee]=!0)}function un(d,ft,_t,Mt,wt,ee,gt,Tt){var yt,bt;if(Array.isArray(wt))for(wt=Array.prototype.slice.call(wt),yt=0,bt=wt.length;yt<bt;yt+=1)Array.isArray(wt[yt])&&Ot(d,"nested arrays are not supported inside keys"),typeof wt=="object"&&be(wt[yt])==="[object Object]"&&(wt[yt]="[object Object]");if(typeof wt=="object"&&be(wt)==="[object Object]"&&(wt="[object Object]"),wt=String(wt),ft===null&&(ft={}),Mt==="tag:yaml.org,2002:merge")if(Array.isArray(ee))for(yt=0,bt=ee.length;yt<bt;yt+=1)Jt(d,ft,ee[yt],_t);else Jt(d,ft,ee,_t);else!d.json&&!s.call(_t,wt)&&s.call(ft,wt)&&(d.line=gt||d.line,d.position=Tt||d.position,Ot(d,"duplicated mapping key")),Lt(ft,wt,ee),delete _t[wt];return ft}function Tn(d){var ft;ft=d.input.charCodeAt(d.position),ft===10?d.position++:ft===13?(d.position++,d.input.charCodeAt(d.position)===10&&d.position++):Ot(d,"a line break is expected"),d.line+=1,d.lineStart=d.position}function dn(d,ft,_t){for(var Mt=0,wt=d.input.charCodeAt(d.position);wt!==0;){for(;ot(wt);)wt=d.input.charCodeAt(++d.position);if(ft&&wt===35)do wt=d.input.charCodeAt(++d.position);while(wt!==10&&wt!==13&&wt!==0);if(ct(wt))for(Tn(d),wt=d.input.charCodeAt(d.position),Mt++,d.lineIndent=0;wt===32;)d.lineIndent++,wt=d.input.charCodeAt(++d.position);else break}return _t!==-1&&Mt!==0&&d.lineIndent<_t&&qt(d,"deficient indentation"),Mt}function Wt(d){var ft=d.position,_t;return _t=d.input.charCodeAt(ft),!!((_t===45||_t===46)&&_t===d.input.charCodeAt(ft+1)&&_t===d.input.charCodeAt(ft+2)&&(ft+=3,_t=d.input.charCodeAt(ft),_t===0||dt(_t)))}function Yt(d,ft){ft===1?d.result+=" ":ft>1&&(d.result+=n.repeat(`
`,ft-1))}function jt(d,ft,_t){var Mt,wt,ee,gt,Tt,yt,bt,Pt,At=d.kind,Bt=d.result,Vt;if(Vt=d.input.charCodeAt(d.position),dt(Vt)||pt(Vt)||Vt===35||Vt===38||Vt===42||Vt===33||Vt===124||Vt===62||Vt===39||Vt===34||Vt===37||Vt===64||Vt===96||(Vt===63||Vt===45)&&(wt=d.input.charCodeAt(d.position+1),dt(wt)||_t&&pt(wt)))return!1;for(d.kind="scalar",d.result="",ee=gt=d.position,Tt=!1;Vt!==0;){if(Vt===58){if(wt=d.input.charCodeAt(d.position+1),dt(wt)||_t&&pt(wt))break}else if(Vt===35){if(Mt=d.input.charCodeAt(d.position-1),dt(Mt))break}else{if(d.position===d.lineStart&&Wt(d)||_t&&pt(Vt))break;if(ct(Vt))if(yt=d.line,bt=d.lineStart,Pt=d.lineIndent,dn(d,!1,-1),d.lineIndent>=ft){Tt=!0,Vt=d.input.charCodeAt(d.position);continue}else{d.position=gt,d.line=yt,d.lineStart=bt,d.lineIndent=Pt;break}}Tt&&(Qt(d,ee,gt,!1),Yt(d,d.line-yt),ee=gt=d.position,Tt=!1),ot(Vt)||(gt=d.position+1),Vt=d.input.charCodeAt(++d.position)}return Qt(d,ee,gt,!1),d.result?!0:(d.kind=At,d.result=Bt,!1)}function pn(d,ft){var _t,Mt,wt;if(_t=d.input.charCodeAt(d.position),_t!==39)return!1;for(d.kind="scalar",d.result="",d.position++,Mt=wt=d.position;(_t=d.input.charCodeAt(d.position))!==0;)if(_t===39)if(Qt(d,Mt,d.position,!0),_t=d.input.charCodeAt(++d.position),_t===39)Mt=d.position,d.position++,wt=d.position;else return!0;else ct(_t)?(Qt(d,Mt,wt,!0),Yt(d,dn(d,!1,ft)),Mt=wt=d.position):d.position===d.lineStart&&Wt(d)?Ot(d,"unexpected end of the document within a single quoted scalar"):(d.position++,wt=d.position);Ot(d,"unexpected end of the stream within a single quoted scalar")}function hn(d,ft){var _t,Mt,wt,ee,gt,Tt;if(Tt=d.input.charCodeAt(d.position),Tt!==34)return!1;for(d.kind="scalar",d.result="",d.position++,_t=Mt=d.position;(Tt=d.input.charCodeAt(d.position))!==0;){if(Tt===34)return Qt(d,_t,d.position,!0),d.position++,!0;if(Tt===92){if(Qt(d,_t,d.position,!0),Tt=d.input.charCodeAt(++d.position),ct(Tt))dn(d,!1,ft);else if(Tt<256&&Rt[Tt])d.result+=Nt[Tt],d.position++;else if((gt=at(Tt))>0){for(wt=gt,ee=0;wt>0;wt--)Tt=d.input.charCodeAt(++d.position),(gt=St(Tt))>=0?ee=(ee<<4)+gt:Ot(d,"expected hexadecimal character");d.result+=xt(ee),d.position++}else Ot(d,"unknown escape sequence");_t=Mt=d.position}else ct(Tt)?(Qt(d,_t,Mt,!0),Yt(d,dn(d,!1,ft)),_t=Mt=d.position):d.position===d.lineStart&&Wt(d)?Ot(d,"unexpected end of the document within a double quoted scalar"):(d.position++,Mt=d.position)}Ot(d,"unexpected end of the stream within a double quoted scalar")}function fn(d,ft){var _t=!0,Mt,wt=d.tag,ee,gt=d.anchor,Tt,yt,bt,Pt,At,Bt={},Vt,mt,$t,zt;if(zt=d.input.charCodeAt(d.position),zt===91)yt=93,At=!1,ee=[];else if(zt===123)yt=125,At=!0,ee={};else return!1;for(d.anchor!==null&&(d.anchorMap[d.anchor]=ee),zt=d.input.charCodeAt(++d.position);zt!==0;){if(dn(d,!0,ft),zt=d.input.charCodeAt(d.position),zt===yt)return d.position++,d.tag=wt,d.anchor=gt,d.kind=At?"mapping":"sequence",d.result=ee,!0;_t||Ot(d,"missed comma between flow collection entries"),mt=Vt=$t=null,bt=Pt=!1,zt===63&&(Tt=d.input.charCodeAt(d.position+1),dt(Tt)&&(bt=Pt=!0,d.position++,dn(d,!0,ft))),Mt=d.line,vt(d,ft,o,!1,!0),mt=d.tag,Vt=d.result,dn(d,!0,ft),zt=d.input.charCodeAt(d.position),(Pt||d.line===Mt)&&zt===58&&(bt=!0,zt=d.input.charCodeAt(++d.position),dn(d,!0,ft),vt(d,ft,o,!1,!0),$t=d.result),At?un(d,ee,Bt,mt,Vt,$t):bt?ee.push(un(d,null,Bt,mt,Vt,$t)):ee.push(Vt),dn(d,!0,ft),zt=d.input.charCodeAt(d.position),zt===44?(_t=!0,zt=d.input.charCodeAt(++d.position)):_t=!1}Ot(d,"unexpected end of the stream within a flow collection")}function Ln(d,ft){var _t,Mt,wt=f,ee=!1,gt=!1,Tt=ft,yt=0,bt=!1,Pt,At;if(At=d.input.charCodeAt(d.position),At===124)Mt=!1;else if(At===62)Mt=!0;else return!1;for(d.kind="scalar",d.result="";At!==0;)if(At=d.input.charCodeAt(++d.position),At===43||At===45)f===wt?wt=At===43?p:S:Ot(d,"repeat of a chomping mode identifier");else if((Pt=ut(At))>=0)Pt===0?Ot(d,"bad explicit indentation width of a block scalar; it cannot be less than one"):gt?Ot(d,"repeat of an indentation width identifier"):(Tt=ft+Pt-1,gt=!0);else break;if(ot(At)){do At=d.input.charCodeAt(++d.position);while(ot(At));if(At===35)do At=d.input.charCodeAt(++d.position);while(!ct(At)&&At!==0)}for(;At!==0;){for(Tn(d),d.lineIndent=0,At=d.input.charCodeAt(d.position);(!gt||d.lineIndent<Tt)&&At===32;)d.lineIndent++,At=d.input.charCodeAt(++d.position);if(!gt&&d.lineIndent>Tt&&(Tt=d.lineIndent),ct(At)){yt++;continue}if(d.lineIndent<Tt){wt===p?d.result+=n.repeat(`
`,ee?1+yt:yt):wt===f&&ee&&(d.result+=`
`);break}for(Mt?ot(At)?(bt=!0,d.result+=n.repeat(`
`,ee?1+yt:yt)):bt?(bt=!1,d.result+=n.repeat(`
`,yt+1)):yt===0?ee&&(d.result+=" "):d.result+=n.repeat(`
`,yt):d.result+=n.repeat(`
`,ee?1+yt:yt),ee=!0,gt=!0,yt=0,_t=d.position;!ct(At)&&At!==0;)At=d.input.charCodeAt(++d.position);Qt(d,_t,d.position,!1)}return!0}function vn(d,ft){var _t,Mt=d.tag,wt=d.anchor,ee=[],gt,Tt=!1,yt;for(d.anchor!==null&&(d.anchorMap[d.anchor]=ee),yt=d.input.charCodeAt(d.position);yt!==0&&!(yt!==45||(gt=d.input.charCodeAt(d.position+1),!dt(gt)));){if(Tt=!0,d.position++,dn(d,!0,-1)&&d.lineIndent<=ft){ee.push(null),yt=d.input.charCodeAt(d.position);continue}if(_t=d.line,vt(d,ft,u,!1,!0),ee.push(d.result),dn(d,!0,-1),yt=d.input.charCodeAt(d.position),(d.line===_t||d.lineIndent>ft)&&yt!==0)Ot(d,"bad indentation of a sequence entry");else if(d.lineIndent<ft)break}return Tt?(d.tag=Mt,d.anchor=wt,d.kind="sequence",d.result=ee,!0):!1}function Sn(d,ft,_t){var Mt,wt,ee,gt,Tt=d.tag,yt=d.anchor,bt={},Pt={},At=null,Bt=null,Vt=null,mt=!1,$t=!1,zt;for(d.anchor!==null&&(d.anchorMap[d.anchor]=bt),zt=d.input.charCodeAt(d.position);zt!==0;){if(Mt=d.input.charCodeAt(d.position+1),ee=d.line,gt=d.position,(zt===63||zt===58)&&dt(Mt))zt===63?(mt&&(un(d,bt,Pt,At,Bt,null),At=Bt=Vt=null),$t=!0,mt=!0,wt=!0):mt?(mt=!1,wt=!0):Ot(d,"incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"),d.position+=1,zt=Mt;else if(vt(d,_t,l,!1,!0))if(d.line===ee){for(zt=d.input.charCodeAt(d.position);ot(zt);)zt=d.input.charCodeAt(++d.position);if(zt===58)zt=d.input.charCodeAt(++d.position),dt(zt)||Ot(d,"a whitespace character is expected after the key-value separator within a block mapping"),mt&&(un(d,bt,Pt,At,Bt,null),At=Bt=Vt=null),$t=!0,mt=!1,wt=!1,At=d.tag,Bt=d.result;else if($t)Ot(d,"can not read an implicit mapping pair; a colon is missed");else return d.tag=Tt,d.anchor=yt,!0}else if($t)Ot(d,"can not read a block mapping entry; a multiline key may not be an implicit key");else return d.tag=Tt,d.anchor=yt,!0;else break;if((d.line===ee||d.lineIndent>ft)&&(vt(d,ft,h,!0,wt)&&(mt?Bt=d.result:Vt=d.result),mt||(un(d,bt,Pt,At,Bt,Vt,ee,gt),At=Bt=Vt=null),dn(d,!0,-1),zt=d.input.charCodeAt(d.position)),d.lineIndent>ft&&zt!==0)Ot(d,"bad indentation of a mapping entry");else if(d.lineIndent<ft)break}return mt&&un(d,bt,Pt,At,Bt,null),$t&&(d.tag=Tt,d.anchor=yt,d.kind="mapping",d.result=bt),$t}function Mn(d){var ft,_t=!1,Mt=!1,wt,ee,gt;if(gt=d.input.charCodeAt(d.position),gt!==33)return!1;if(d.tag!==null&&Ot(d,"duplication of a tag property"),gt=d.input.charCodeAt(++d.position),gt===60?(_t=!0,gt=d.input.charCodeAt(++d.position)):gt===33?(Mt=!0,wt="!!",gt=d.input.charCodeAt(++d.position)):wt="!",ft=d.position,_t){do gt=d.input.charCodeAt(++d.position);while(gt!==0&&gt!==62);d.position<d.length?(ee=d.input.slice(ft,d.position),gt=d.input.charCodeAt(++d.position)):Ot(d,"unexpected end of the stream within a verbatim tag")}else{for(;gt!==0&&!dt(gt);)gt===33&&(Mt?Ot(d,"tag suffix cannot contain exclamation marks"):(wt=d.input.slice(ft-1,d.position+1),R.test(wt)||Ot(d,"named tag handle cannot contain such characters"),Mt=!0,ft=d.position+1)),gt=d.input.charCodeAt(++d.position);ee=d.input.slice(ft,d.position),Y.test(ee)&&Ot(d,"tag suffix cannot contain flow indicator characters")}return ee&&!V.test(ee)&&Ot(d,"tag name cannot contain such characters: "+ee),_t?d.tag=ee:s.call(d.tagMap,wt)?d.tag=d.tagMap[wt]+ee:wt==="!"?d.tag="!"+ee:wt==="!!"?d.tag="tag:yaml.org,2002:"+ee:Ot(d,'undeclared tag handle "'+wt+'"'),!0}function mn(d){var ft,_t;if(_t=d.input.charCodeAt(d.position),_t!==38)return!1;for(d.anchor!==null&&Ot(d,"duplication of an anchor property"),_t=d.input.charCodeAt(++d.position),ft=d.position;_t!==0&&!dt(_t)&&!pt(_t);)_t=d.input.charCodeAt(++d.position);return d.position===ft&&Ot(d,"name of an anchor node must contain at least one character"),d.anchor=d.input.slice(ft,d.position),!0}function Dn(d){var ft,_t,Mt;if(Mt=d.input.charCodeAt(d.position),Mt!==42)return!1;for(Mt=d.input.charCodeAt(++d.position),ft=d.position;Mt!==0&&!dt(Mt)&&!pt(Mt);)Mt=d.input.charCodeAt(++d.position);return d.position===ft&&Ot(d,"name of an alias node must contain at least one character"),_t=d.input.slice(ft,d.position),s.call(d.anchorMap,_t)||Ot(d,'unidentified alias "'+_t+'"'),d.result=d.anchorMap[_t],dn(d,!0,-1),!0}function vt(d,ft,_t,Mt,wt){var ee,gt,Tt,yt=1,bt=!1,Pt=!1,At,Bt,Vt,mt,$t;if(d.listener!==null&&d.listener("open",d),d.tag=null,d.anchor=null,d.kind=null,d.result=null,ee=gt=Tt=h===_t||u===_t,Mt&&dn(d,!0,-1)&&(bt=!0,d.lineIndent>ft?yt=1:d.lineIndent===ft?yt=0:d.lineIndent<ft&&(yt=-1)),yt===1)for(;Mn(d)||mn(d);)dn(d,!0,-1)?(bt=!0,Tt=ee,d.lineIndent>ft?yt=1:d.lineIndent===ft?yt=0:d.lineIndent<ft&&(yt=-1)):Tt=!1;if(Tt&&(Tt=bt||wt),(yt===1||h===_t)&&(o===_t||l===_t?mt=ft:mt=ft+1,$t=d.position-d.lineStart,yt===1?Tt&&(vn(d,$t)||Sn(d,$t,mt))||fn(d,mt)?Pt=!0:(gt&&Ln(d,mt)||pn(d,mt)||hn(d,mt)?Pt=!0:Dn(d)?(Pt=!0,(d.tag!==null||d.anchor!==null)&&Ot(d,"alias node should not have any properties")):jt(d,mt,o===_t)&&(Pt=!0,d.tag===null&&(d.tag="?")),d.anchor!==null&&(d.anchorMap[d.anchor]=d.result)):yt===0&&(Pt=Tt&&vn(d,$t))),d.tag!==null&&d.tag!=="!")if(d.tag==="?"){for(d.result!==null&&d.kind!=="scalar"&&Ot(d,'unacceptable node kind for !<?> tag; it should be "scalar", not "'+d.kind+'"'),At=0,Bt=d.implicitTypes.length;At<Bt;At+=1)if(Vt=d.implicitTypes[At],Vt.resolve(d.result)){d.result=Vt.construct(d.result),d.tag=Vt.tag,d.anchor!==null&&(d.anchorMap[d.anchor]=d.result);break}}else s.call(d.typeMap[d.kind||"fallback"],d.tag)?(Vt=d.typeMap[d.kind||"fallback"][d.tag],d.result!==null&&Vt.kind!==d.kind&&Ot(d,"unacceptable node kind for !<"+d.tag+'> tag; it should be "'+Vt.kind+'", not "'+d.kind+'"'),Vt.resolve(d.result)?(d.result=Vt.construct(d.result),d.anchor!==null&&(d.anchorMap[d.anchor]=d.result)):Ot(d,"cannot resolve a node with !<"+d.tag+"> explicit tag")):Ot(d,"unknown tag !<"+d.tag+">");return d.listener!==null&&d.listener("close",d),d.tag!==null||d.anchor!==null||Pt}function In(d){var ft=d.position,_t,Mt,wt,ee=!1,gt;for(d.version=null,d.checkLineBreaks=d.legacy,d.tagMap={},d.anchorMap={};(gt=d.input.charCodeAt(d.position))!==0&&(dn(d,!0,-1),gt=d.input.charCodeAt(d.position),!(d.lineIndent>0||gt!==37));){for(ee=!0,gt=d.input.charCodeAt(++d.position),_t=d.position;gt!==0&&!dt(gt);)gt=d.input.charCodeAt(++d.position);for(Mt=d.input.slice(_t,d.position),wt=[],Mt.length<1&&Ot(d,"directive name must not be less than one character in length");gt!==0;){for(;ot(gt);)gt=d.input.charCodeAt(++d.position);if(gt===35){do gt=d.input.charCodeAt(++d.position);while(gt!==0&&!ct(gt));break}if(ct(gt))break;for(_t=d.position;gt!==0&&!dt(gt);)gt=d.input.charCodeAt(++d.position);wt.push(d.input.slice(_t,d.position))}gt!==0&&Tn(d),s.call(Zt,Mt)?Zt[Mt](d,Mt,wt):qt(d,'unknown document directive "'+Mt+'"')}if(dn(d,!0,-1),d.lineIndent===0&&d.input.charCodeAt(d.position)===45&&d.input.charCodeAt(d.position+1)===45&&d.input.charCodeAt(d.position+2)===45?(d.position+=3,dn(d,!0,-1)):ee&&Ot(d,"directives end mark is expected"),vt(d,d.lineIndent-1,h,!1,!0),dn(d,!0,-1),d.checkLineBreaks&&H.test(d.input.slice(ft,d.position))&&qt(d,"non-ASCII line breaks are interpreted as content"),d.documents.push(d.result),d.position===d.lineStart&&Wt(d)){d.input.charCodeAt(d.position)===46&&(d.position+=3,dn(d,!0,-1));return}if(d.position<d.length-1)Ot(d,"end of the stream or a document separator is expected");else return}function yn(d,ft){d=String(d),ft=ft||{},d.length!==0&&(d.charCodeAt(d.length-1)!==10&&d.charCodeAt(d.length-1)!==13&&(d+=`
`),d.charCodeAt(0)===65279&&(d=d.slice(1)));var _t=new Ut(d,ft),Mt=d.indexOf("\0");for(Mt!==-1&&(_t.position=Mt,Ot(_t,"null byte is not allowed in input")),_t.input+="\0";_t.input.charCodeAt(_t.position)===32;)_t.lineIndent+=1,_t.position+=1;for(;_t.position<_t.length-1;)In(_t);return _t.documents}function En(d,ft,_t){ft!==null&&typeof ft=="object"&&typeof _t>"u"&&(_t=ft,ft=null);var Mt=yn(d,_t);if(typeof ft!="function")return Mt;for(var wt=0,ee=Mt.length;wt<ee;wt+=1)ft(Mt[wt])}function rn(d,ft){var _t=yn(d,ft);if(_t.length!==0){if(_t.length===1)return _t[0];throw new e("expected a single document in the stream, but found more")}}function ht(d,ft,_t){return typeof ft=="object"&&ft!==null&&typeof _t>"u"&&(_t=ft,ft=null),En(d,ft,n.extend({schema:i},_t))}function xe(d,ft){return rn(d,n.extend({schema:i},ft))}return loader.loadAll=En,loader.load=rn,loader.safeLoadAll=ht,loader.safeLoad=xe,loader}var dumper={},hasRequiredDumper;function requireDumper(){if(hasRequiredDumper)return dumper;hasRequiredDumper=1;var n=requireCommon(),e=requireException(),t=requireDefault_full(),i=requireDefault_safe(),r=Object.prototype.toString,s=Object.prototype.hasOwnProperty,o=9,l=10,u=13,h=32,f=33,S=34,p=35,I=37,H=38,Y=39,R=42,V=44,be=45,ct=58,ot=61,dt=62,pt=63,St=64,at=91,ut=93,Gt=96,xt=123,Lt=124,Rt=125,Nt={};Nt[0]="\\0",Nt[7]="\\a",Nt[8]="\\b",Nt[9]="\\t",Nt[10]="\\n",Nt[11]="\\v",Nt[12]="\\f",Nt[13]="\\r",Nt[27]="\\e",Nt[34]='\\"',Nt[92]="\\\\",Nt[133]="\\N",Nt[160]="\\_",Nt[8232]="\\L",Nt[8233]="\\P";var Dt=["y","Y","yes","Yes","YES","on","On","ON","n","N","no","No","NO","off","Off","OFF"];function Ut(ee,gt){var Tt,yt,bt,Pt,At,Bt,Vt;if(gt===null)return{};for(Tt={},yt=Object.keys(gt),bt=0,Pt=yt.length;bt<Pt;bt+=1)At=yt[bt],Bt=String(gt[At]),At.slice(0,2)==="!!"&&(At="tag:yaml.org,2002:"+At.slice(2)),Vt=ee.compiledTypeMap.fallback[At],Vt&&s.call(Vt.styleAliases,Bt)&&(Bt=Vt.styleAliases[Bt]),Tt[At]=Bt;return Tt}function Ct(ee){var gt,Tt,yt;if(gt=ee.toString(16).toUpperCase(),ee<=255)Tt="x",yt=2;else if(ee<=65535)Tt="u",yt=4;else if(ee<=4294967295)Tt="U",yt=8;else throw new e("code point within a string may not be greater than 0xFFFFFFFF");return"\\"+Tt+n.repeat("0",yt-gt.length)+gt}function Ot(ee){this.schema=ee.schema||t,this.indent=Math.max(1,ee.indent||2),this.noArrayIndent=ee.noArrayIndent||!1,this.skipInvalid=ee.skipInvalid||!1,this.flowLevel=n.isNothing(ee.flowLevel)?-1:ee.flowLevel,this.styleMap=Ut(this.schema,ee.styles||null),this.sortKeys=ee.sortKeys||!1,this.lineWidth=ee.lineWidth||80,this.noRefs=ee.noRefs||!1,this.noCompatMode=ee.noCompatMode||!1,this.condenseFlow=ee.condenseFlow||!1,this.implicitTypes=this.schema.compiledImplicit,this.explicitTypes=this.schema.compiledExplicit,this.tag=null,this.result="",this.duplicates=[],this.usedDuplicates=null}function qt(ee,gt){for(var Tt=n.repeat(" ",gt),yt=0,bt=-1,Pt="",At,Bt=ee.length;yt<Bt;)bt=ee.indexOf(`
`,yt),bt===-1?(At=ee.slice(yt),yt=Bt):(At=ee.slice(yt,bt+1),yt=bt+1),At.length&&At!==`
`&&(Pt+=Tt),Pt+=At;return Pt}function Zt(ee,gt){return`
`+n.repeat(" ",ee.indent*gt)}function Qt(ee,gt){var Tt,yt,bt;for(Tt=0,yt=ee.implicitTypes.length;Tt<yt;Tt+=1)if(bt=ee.implicitTypes[Tt],bt.resolve(gt))return!0;return!1}function Jt(ee){return ee===h||ee===o}function un(ee){return 32<=ee&&ee<=126||161<=ee&&ee<=55295&&ee!==8232&&ee!==8233||57344<=ee&&ee<=65533&&ee!==65279||65536<=ee&&ee<=1114111}function Tn(ee){return un(ee)&&!Jt(ee)&&ee!==65279&&ee!==u&&ee!==l}function dn(ee,gt){return un(ee)&&ee!==65279&&ee!==V&&ee!==at&&ee!==ut&&ee!==xt&&ee!==Rt&&ee!==ct&&(ee!==p||gt&&Tn(gt))}function Wt(ee){return un(ee)&&ee!==65279&&!Jt(ee)&&ee!==be&&ee!==pt&&ee!==ct&&ee!==V&&ee!==at&&ee!==ut&&ee!==xt&&ee!==Rt&&ee!==p&&ee!==H&&ee!==R&&ee!==f&&ee!==Lt&&ee!==ot&&ee!==dt&&ee!==Y&&ee!==S&&ee!==I&&ee!==St&&ee!==Gt}function Yt(ee){var gt=/^\n* /;return gt.test(ee)}var jt=1,pn=2,hn=3,fn=4,Ln=5;function vn(ee,gt,Tt,yt,bt){var Pt,At,Bt,Vt=!1,mt=!1,$t=yt!==-1,zt=-1,Kt=Wt(ee.charCodeAt(0))&&!Jt(ee.charCodeAt(ee.length-1));if(gt)for(Pt=0;Pt<ee.length;Pt++){if(At=ee.charCodeAt(Pt),!un(At))return Ln;Bt=Pt>0?ee.charCodeAt(Pt-1):null,Kt=Kt&&dn(At,Bt)}else{for(Pt=0;Pt<ee.length;Pt++){if(At=ee.charCodeAt(Pt),At===l)Vt=!0,$t&&(mt=mt||Pt-zt-1>yt&&ee[zt+1]!==" ",zt=Pt);else if(!un(At))return Ln;Bt=Pt>0?ee.charCodeAt(Pt-1):null,Kt=Kt&&dn(At,Bt)}mt=mt||$t&&Pt-zt-1>yt&&ee[zt+1]!==" "}return!Vt&&!mt?Kt&&!bt(ee)?jt:pn:Tt>9&&Yt(ee)?Ln:mt?fn:hn}function Sn(ee,gt,Tt,yt){ee.dump=(function(){if(gt.length===0)return"''";if(!ee.noCompatMode&&Dt.indexOf(gt)!==-1)return"'"+gt+"'";var bt=ee.indent*Math.max(1,Tt),Pt=ee.lineWidth===-1?-1:Math.max(Math.min(ee.lineWidth,40),ee.lineWidth-bt),At=yt||ee.flowLevel>-1&&Tt>=ee.flowLevel;function Bt(Vt){return Qt(ee,Vt)}switch(vn(gt,At,ee.indent,Pt,Bt)){case jt:return gt;case pn:return"'"+gt.replace(/'/g,"''")+"'";case hn:return"|"+Mn(gt,ee.indent)+mn(qt(gt,bt));case fn:return">"+Mn(gt,ee.indent)+mn(qt(Dn(gt,Pt),bt));case Ln:return'"'+In(gt)+'"';default:throw new e("impossible error: invalid scalar style")}})()}function Mn(ee,gt){var Tt=Yt(ee)?String(gt):"",yt=ee[ee.length-1]===`
`,bt=yt&&(ee[ee.length-2]===`
`||ee===`
`),Pt=bt?"+":yt?"":"-";return Tt+Pt+`
`}function mn(ee){return ee[ee.length-1]===`
`?ee.slice(0,-1):ee}function Dn(ee,gt){for(var Tt=/(\n+)([^\n]*)/g,yt=(function(){var mt=ee.indexOf(`
`);return mt=mt!==-1?mt:ee.length,Tt.lastIndex=mt,vt(ee.slice(0,mt),gt)})(),bt=ee[0]===`
`||ee[0]===" ",Pt,At;At=Tt.exec(ee);){var Bt=At[1],Vt=At[2];Pt=Vt[0]===" ",yt+=Bt+(!bt&&!Pt&&Vt!==""?`
`:"")+vt(Vt,gt),bt=Pt}return yt}function vt(ee,gt){if(ee===""||ee[0]===" ")return ee;for(var Tt=/ [^ ]/g,yt,bt=0,Pt,At=0,Bt=0,Vt="";yt=Tt.exec(ee);)Bt=yt.index,Bt-bt>gt&&(Pt=At>bt?At:Bt,Vt+=`
`+ee.slice(bt,Pt),bt=Pt+1),At=Bt;return Vt+=`
`,ee.length-bt>gt&&At>bt?Vt+=ee.slice(bt,At)+`
`+ee.slice(At+1):Vt+=ee.slice(bt),Vt.slice(1)}function In(ee){for(var gt="",Tt,yt,bt,Pt=0;Pt<ee.length;Pt++){if(Tt=ee.charCodeAt(Pt),Tt>=55296&&Tt<=56319&&(yt=ee.charCodeAt(Pt+1),yt>=56320&&yt<=57343)){gt+=Ct((Tt-55296)*1024+yt-56320+65536),Pt++;continue}bt=Nt[Tt],gt+=!bt&&un(Tt)?ee[Pt]:bt||Ct(Tt)}return gt}function yn(ee,gt,Tt){var yt="",bt=ee.tag,Pt,At;for(Pt=0,At=Tt.length;Pt<At;Pt+=1)d(ee,gt,Tt[Pt],!1,!1)&&(Pt!==0&&(yt+=","+(ee.condenseFlow?"":" ")),yt+=ee.dump);ee.tag=bt,ee.dump="["+yt+"]"}function En(ee,gt,Tt,yt){var bt="",Pt=ee.tag,At,Bt;for(At=0,Bt=Tt.length;At<Bt;At+=1)d(ee,gt+1,Tt[At],!0,!0)&&((!yt||At!==0)&&(bt+=Zt(ee,gt)),ee.dump&&l===ee.dump.charCodeAt(0)?bt+="-":bt+="- ",bt+=ee.dump);ee.tag=Pt,ee.dump=bt||"[]"}function rn(ee,gt,Tt){var yt="",bt=ee.tag,Pt=Object.keys(Tt),At,Bt,Vt,mt,$t;for(At=0,Bt=Pt.length;At<Bt;At+=1)$t="",At!==0&&($t+=", "),ee.condenseFlow&&($t+='"'),Vt=Pt[At],mt=Tt[Vt],d(ee,gt,Vt,!1,!1)&&(ee.dump.length>1024&&($t+="? "),$t+=ee.dump+(ee.condenseFlow?'"':"")+":"+(ee.condenseFlow?"":" "),d(ee,gt,mt,!1,!1)&&($t+=ee.dump,yt+=$t));ee.tag=bt,ee.dump="{"+yt+"}"}function ht(ee,gt,Tt,yt){var bt="",Pt=ee.tag,At=Object.keys(Tt),Bt,Vt,mt,$t,zt,Kt;if(ee.sortKeys===!0)At.sort();else if(typeof ee.sortKeys=="function")At.sort(ee.sortKeys);else if(ee.sortKeys)throw new e("sortKeys must be a boolean or a function");for(Bt=0,Vt=At.length;Bt<Vt;Bt+=1)Kt="",(!yt||Bt!==0)&&(Kt+=Zt(ee,gt)),mt=At[Bt],$t=Tt[mt],d(ee,gt+1,mt,!0,!0,!0)&&(zt=ee.tag!==null&&ee.tag!=="?"||ee.dump&&ee.dump.length>1024,zt&&(ee.dump&&l===ee.dump.charCodeAt(0)?Kt+="?":Kt+="? "),Kt+=ee.dump,zt&&(Kt+=Zt(ee,gt)),d(ee,gt+1,$t,!0,zt)&&(ee.dump&&l===ee.dump.charCodeAt(0)?Kt+=":":Kt+=": ",Kt+=ee.dump,bt+=Kt));ee.tag=Pt,ee.dump=bt||"{}"}function xe(ee,gt,Tt){var yt,bt,Pt,At,Bt,Vt;for(bt=Tt?ee.explicitTypes:ee.implicitTypes,Pt=0,At=bt.length;Pt<At;Pt+=1)if(Bt=bt[Pt],(Bt.instanceOf||Bt.predicate)&&(!Bt.instanceOf||typeof gt=="object"&&gt instanceof Bt.instanceOf)&&(!Bt.predicate||Bt.predicate(gt))){if(ee.tag=Tt?Bt.tag:"?",Bt.represent){if(Vt=ee.styleMap[Bt.tag]||Bt.defaultStyle,r.call(Bt.represent)==="[object Function]")yt=Bt.represent(gt,Vt);else if(s.call(Bt.represent,Vt))yt=Bt.represent[Vt](gt,Vt);else throw new e("!<"+Bt.tag+'> tag resolver accepts not "'+Vt+'" style');ee.dump=yt}return!0}return!1}function d(ee,gt,Tt,yt,bt,Pt){ee.tag=null,ee.dump=Tt,xe(ee,Tt,!1)||xe(ee,Tt,!0);var At=r.call(ee.dump);yt&&(yt=ee.flowLevel<0||ee.flowLevel>gt);var Bt=At==="[object Object]"||At==="[object Array]",Vt,mt;if(Bt&&(Vt=ee.duplicates.indexOf(Tt),mt=Vt!==-1),(ee.tag!==null&&ee.tag!=="?"||mt||ee.indent!==2&&gt>0)&&(bt=!1),mt&&ee.usedDuplicates[Vt])ee.dump="*ref_"+Vt;else{if(Bt&&mt&&!ee.usedDuplicates[Vt]&&(ee.usedDuplicates[Vt]=!0),At==="[object Object]")yt&&Object.keys(ee.dump).length!==0?(ht(ee,gt,ee.dump,bt),mt&&(ee.dump="&ref_"+Vt+ee.dump)):(rn(ee,gt,ee.dump),mt&&(ee.dump="&ref_"+Vt+" "+ee.dump));else if(At==="[object Array]"){var $t=ee.noArrayIndent&&gt>0?gt-1:gt;yt&&ee.dump.length!==0?(En(ee,$t,ee.dump,bt),mt&&(ee.dump="&ref_"+Vt+ee.dump)):(yn(ee,$t,ee.dump),mt&&(ee.dump="&ref_"+Vt+" "+ee.dump))}else if(At==="[object String]")ee.tag!=="?"&&Sn(ee,ee.dump,gt,Pt);else{if(ee.skipInvalid)return!1;throw new e("unacceptable kind of an object to dump "+At)}ee.tag!==null&&ee.tag!=="?"&&(ee.dump="!<"+ee.tag+"> "+ee.dump)}return!0}function ft(ee,gt){var Tt=[],yt=[],bt,Pt;for(_t(ee,Tt,yt),bt=0,Pt=yt.length;bt<Pt;bt+=1)gt.duplicates.push(Tt[yt[bt]]);gt.usedDuplicates=new Array(Pt)}function _t(ee,gt,Tt){var yt,bt,Pt;if(ee!==null&&typeof ee=="object")if(bt=gt.indexOf(ee),bt!==-1)Tt.indexOf(bt)===-1&&Tt.push(bt);else if(gt.push(ee),Array.isArray(ee))for(bt=0,Pt=ee.length;bt<Pt;bt+=1)_t(ee[bt],gt,Tt);else for(yt=Object.keys(ee),bt=0,Pt=yt.length;bt<Pt;bt+=1)_t(ee[yt[bt]],gt,Tt)}function Mt(ee,gt){gt=gt||{};var Tt=new Ot(gt);return Tt.noRefs||ft(ee,Tt),d(Tt,0,ee,!0,!0)?Tt.dump+`
`:""}function wt(ee,gt){return Mt(ee,n.extend({schema:i},gt))}return dumper.dump=Mt,dumper.safeDump=wt,dumper}var hasRequiredJsYaml$1;function requireJsYaml$1(){if(hasRequiredJsYaml$1)return jsYaml$1;hasRequiredJsYaml$1=1;var n=requireLoader(),e=requireDumper();function t(i){return function(){throw new Error("Function "+i+" is deprecated and cannot be used.")}}return jsYaml$1.Type=requireType(),jsYaml$1.Schema=requireSchema(),jsYaml$1.FAILSAFE_SCHEMA=requireFailsafe(),jsYaml$1.JSON_SCHEMA=requireJson(),jsYaml$1.CORE_SCHEMA=requireCore(),jsYaml$1.DEFAULT_SAFE_SCHEMA=requireDefault_safe(),jsYaml$1.DEFAULT_FULL_SCHEMA=requireDefault_full(),jsYaml$1.load=n.load,jsYaml$1.loadAll=n.loadAll,jsYaml$1.safeLoad=n.safeLoad,jsYaml$1.safeLoadAll=n.safeLoadAll,jsYaml$1.dump=e.dump,jsYaml$1.safeDump=e.safeDump,jsYaml$1.YAMLException=requireException(),jsYaml$1.MINIMAL_SCHEMA=requireFailsafe(),jsYaml$1.SAFE_SCHEMA=requireDefault_safe(),jsYaml$1.DEFAULT_SCHEMA=requireDefault_full(),jsYaml$1.scan=t("scan"),jsYaml$1.parse=t("parse"),jsYaml$1.compose=t("compose"),jsYaml$1.addConstructor=t("addConstructor"),jsYaml$1}var jsYaml,hasRequiredJsYaml;function requireJsYaml(){if(hasRequiredJsYaml)return jsYaml;hasRequiredJsYaml=1;var n=requireJsYaml$1();return jsYaml=n,jsYaml}var hasRequiredEngines;function requireEngines(){return hasRequiredEngines||(hasRequiredEngines=1,(function(module,exports$1){const yaml=requireJsYaml(),engines=module.exports;engines.yaml={parse:yaml.safeLoad.bind(yaml),stringify:yaml.safeDump.bind(yaml)},engines.json={parse:JSON.parse.bind(JSON),stringify:function(n,e){const t=Object.assign({replacer:null,space:2},e);return JSON.stringify(n,t.replacer,t.space)}},engines.javascript={parse:function parse(str,options,wrap){try{return wrap!==!1&&(str=`(function() {
return `+str.trim()+`;
}());`),eval(str)||{}}catch(n){if(wrap!==!1&&/(unexpected|identifier)/i.test(n.message))return parse(str,options,!1);throw new SyntaxError(n)}},stringify:function(){throw new Error("stringifying JavaScript is not supported")}}})(engines)),engines.exports}var utils={};var stripBomString,hasRequiredStripBomString;function requireStripBomString(){return hasRequiredStripBomString||(hasRequiredStripBomString=1,stripBomString=function(n){return typeof n=="string"&&n.charAt(0)==="\uFEFF"?n.slice(1):n}),stripBomString}var hasRequiredUtils;function requireUtils(){return hasRequiredUtils||(hasRequiredUtils=1,(function(n){const e=requireStripBomString(),t=requireKindOf();n.define=function(i,r,s){Reflect.defineProperty(i,r,{enumerable:!1,configurable:!0,writable:!0,value:s})},n.isBuffer=function(i){return t(i)==="buffer"},n.isObject=function(i){return t(i)==="object"},n.toBuffer=function(i){return typeof i=="string"?Buffer.from(i):i},n.toString=function(i){if(n.isBuffer(i))return e(String(i));if(typeof i!="string")throw new TypeError("expected input to be a string or buffer");return e(i)},n.arrayify=function(i){return i?Array.isArray(i)?i:[i]:[]},n.startsWith=function(i,r,s){return typeof s!="number"&&(s=r.length),i.slice(0,s)===r}})(utils)),utils}var defaults,hasRequiredDefaults;function requireDefaults(){if(hasRequiredDefaults)return defaults;hasRequiredDefaults=1;const n=requireEngines(),e=requireUtils();return defaults=function(t){const i=Object.assign({},t);return i.delimiters=e.arrayify(i.delims||i.delimiters||"---"),i.delimiters.length===1&&i.delimiters.push(i.delimiters[0]),i.language=(i.language||i.lang||"yaml").toLowerCase(),i.engines=Object.assign({},n,i.parsers,i.engines),i},defaults}var engine,hasRequiredEngine;function requireEngine(){if(hasRequiredEngine)return engine;hasRequiredEngine=1,engine=function(e,t){let i=t.engines[e]||t.engines[n(e)];if(typeof i>"u")throw new Error('gray-matter engine "'+e+'" is not registered');return typeof i=="function"&&(i={parse:i}),i};function n(e){switch(e.toLowerCase()){case"js":case"javascript":return"javascript";case"coffee":case"coffeescript":case"cson":return"coffee";case"yaml":case"yml":return"yaml";default:return e}}return engine}var stringify,hasRequiredStringify;function requireStringify(){if(hasRequiredStringify)return stringify;hasRequiredStringify=1;const n=requireKindOf(),e=requireEngine(),t=requireDefaults();stringify=function(r,s,o){if(s==null&&o==null)switch(n(r)){case"object":s=r.data,o={};break;case"string":return r;default:throw new TypeError("expected file to be a string or object")}const l=r.content,u=t(o);if(s==null){if(!u.data)return r;s=u.data}const h=r.language||u.language,f=e(h,u);if(typeof f.stringify!="function")throw new TypeError('expected "'+h+'.stringify" to be a function');s=Object.assign({},r.data,s);const S=u.delimiters[0],p=u.delimiters[1],I=f.stringify(s,o).trim();let H="";return I!=="{}"&&(H=i(S)+i(I)+i(p)),typeof r.excerpt=="string"&&r.excerpt!==""&&l.indexOf(r.excerpt.trim())===-1&&(H+=i(r.excerpt)+i(p)),H+i(l)};function i(r){return r.slice(-1)!==`
`?r+`
`:r}return stringify}var excerpt,hasRequiredExcerpt;function requireExcerpt(){if(hasRequiredExcerpt)return excerpt;hasRequiredExcerpt=1;const n=requireDefaults();return excerpt=function(e,t){const i=n(t);if(e.data==null&&(e.data={}),typeof i.excerpt=="function")return i.excerpt(e,i);const r=e.data.excerpt_separator||i.excerpt_separator;if(r==null&&(i.excerpt===!1||i.excerpt==null))return e;const s=typeof i.excerpt=="string"?i.excerpt:r||i.delimiters[0],o=e.content.indexOf(s);return o!==-1&&(e.excerpt=e.content.slice(0,o)),e},excerpt}var toFile,hasRequiredToFile;function requireToFile(){if(hasRequiredToFile)return toFile;hasRequiredToFile=1;const n=requireKindOf(),e=requireStringify(),t=requireUtils();return toFile=function(i){return n(i)!=="object"&&(i={content:i}),n(i.data)!=="object"&&(i.data={}),i.contents&&i.content==null&&(i.content=i.contents),t.define(i,"orig",t.toBuffer(i.content)),t.define(i,"language",i.language||""),t.define(i,"matter",i.matter||""),t.define(i,"stringify",function(r,s){return s&&s.language&&(i.language=s.language),e(i,r,s)}),i.content=t.toString(i.content),i.isEmpty=!1,i.excerpt="",i},toFile}var parse,hasRequiredParse;function requireParse(){if(hasRequiredParse)return parse;hasRequiredParse=1;const n=requireEngine(),e=requireDefaults();return parse=function(t,i,r){const s=e(r),o=n(t,s);if(typeof o.parse!="function")throw new TypeError('expected "'+t+'.parse" to be a function');return o.parse(i,s)},parse}var grayMatter,hasRequiredGrayMatter;function requireGrayMatter(){if(hasRequiredGrayMatter)return grayMatter;hasRequiredGrayMatter=1;const n=require$$0,e=requireSectionMatter(),t=requireDefaults(),i=requireStringify(),r=requireExcerpt(),s=requireEngines(),o=requireToFile(),l=requireParse(),u=requireUtils();function h(S,p){if(S==="")return{data:{},content:S,excerpt:"",orig:S};let I=o(S);const H=h.cache[I.content];if(!p){if(H)return I=Object.assign({},H),I.orig=H.orig,I;h.cache[I.content]=I}return f(I,p)}function f(S,p){const I=t(p),H=I.delimiters[0],Y=`
`+I.delimiters[1];let R=S.content;I.language&&(S.language=I.language);const V=H.length;if(!u.startsWith(R,H,V))return r(S,I),S;if(R.charAt(V)===H.slice(-1))return S;R=R.slice(V);const be=R.length,ct=h.language(R,I);ct.name&&(S.language=ct.name,R=R.slice(ct.raw.length));let ot=R.indexOf(Y);return ot===-1&&(ot=be),S.matter=R.slice(0,ot),S.matter.replace(/^\s*#[^\n]+/gm,"").trim()===""?(S.isEmpty=!0,S.empty=S.content,S.data={}):S.data=l(S.language,S.matter,I),ot===be?S.content="":(S.content=R.slice(ot+Y.length),S.content[0]==="\r"&&(S.content=S.content.slice(1)),S.content[0]===`
`&&(S.content=S.content.slice(1))),r(S,I),(I.sections===!0||typeof I.section=="function")&&e(S,I.section),S}return h.engines=s,h.stringify=function(S,p,I){return typeof S=="string"&&(S=h(S,I)),i(S,p,I)},h.read=function(S,p){const I=n.readFileSync(S,"utf8"),H=h(I,p);return H.path=S,H},h.test=function(S,p){return u.startsWith(S,t(p).delimiters[0])},h.language=function(S,p){const H=t(p).delimiters[0];h.test(S)&&(S=S.slice(H.length));const Y=S.slice(0,S.search(/\r?\n/));return{raw:Y,name:Y?Y.trim():""}},h.cache={},h.clearCache=function(){h.cache={}},grayMatter=h,grayMatter}requireGrayMatter();function M(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var T=M();function G(n){T=n}var _={exec:()=>null};function k(n,e=""){let t=typeof n=="string"?n:n.source,i={replace:(r,s)=>{let o=typeof s=="string"?s:s.source;return o=o.replace(m.caret,"$1"),t=t.replace(r,o),i},getRegex:()=>new RegExp(t,e)};return i}var Re=(()=>{try{return!!new RegExp("(?<=1)(?<!1)")}catch{return!1}})(),m={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:n=>new RegExp(`^( {0,3}${n})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:n=>new RegExp(`^ {0,${Math.min(3,n-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:n=>new RegExp(`^ {0,${Math.min(3,n-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:n=>new RegExp(`^ {0,${Math.min(3,n-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:n=>new RegExp(`^ {0,${Math.min(3,n-1)}}#`),htmlBeginRegex:n=>new RegExp(`^ {0,${Math.min(3,n-1)}}<(?:[a-z].*>|!--)`,"i"),blockquoteBeginRegex:n=>new RegExp(`^ {0,${Math.min(3,n-1)}}>`)},Te=/^(?:[ \t]*(?:\n|$))+/,Oe=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,we=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,A=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,ye=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,N=/ {0,3}(?:[*+-]|\d{1,9}[.)])/,re=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,se=k(re).replace(/bull/g,N).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),Pe=k(re).replace(/bull/g,N).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),Q=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,Se=/^[^\n]+/,j=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,$e=k(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",j).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),_e=k(/^(bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,N).getRegex(),q="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",F=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,Le=k("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",F).replace("tag",q).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),ie=k(Q).replace("hr",A).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",q).getRegex(),Me=k(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",ie).getRegex(),U={blockquote:Me,code:Oe,def:$e,fences:we,heading:ye,hr:A,html:Le,lheading:se,list:_e,newline:Te,paragraph:ie,table:_,text:Se},te=k("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",A).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",q).getRegex(),ze={...U,lheading:Pe,table:te,paragraph:k(Q).replace("hr",A).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",te).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",q).getRegex()},Ee={...U,html:k(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",F).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:_,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:k(Q).replace("hr",A).replace("heading",` *#{1,6} *[^
]`).replace("lheading",se).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},Ie=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,Ae=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,oe=/^( {2,}|\\)\n(?!\s*$)/,Ce=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,v=/[\p{P}\p{S}]/u,K=/[\s\p{P}\p{S}]/u,ae=/[^\s\p{P}\p{S}]/u,Be=k(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,K).getRegex(),le=/(?!~)[\p{P}\p{S}]/u,De=/(?!~)[\s\p{P}\p{S}]/u,qe=/(?:[^\s\p{P}\p{S}]|~)/u,ue=/(?![*_])[\p{P}\p{S}]/u,ve=/(?![*_])[\s\p{P}\p{S}]/u,He=/(?:[^\s\p{P}\p{S}]|[*_])/u,Ge=k(/link|precode-code|html/,"g").replace("link",/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-",Re?"(?<!`)()":"(^^|[^`])").replace("code",/(?<b>`+)[^`]+\k<b>(?!`)/).replace("html",/<(?! )[^<>]*?>/).getRegex(),pe=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,Ze=k(pe,"u").replace(/punct/g,v).getRegex(),Ne=k(pe,"u").replace(/punct/g,le).getRegex(),ce="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",Qe=k(ce,"gu").replace(/notPunctSpace/g,ae).replace(/punctSpace/g,K).replace(/punct/g,v).getRegex(),je=k(ce,"gu").replace(/notPunctSpace/g,qe).replace(/punctSpace/g,De).replace(/punct/g,le).getRegex(),Fe=k("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,ae).replace(/punctSpace/g,K).replace(/punct/g,v).getRegex(),Ue=k(/^~~?(?:((?!~)punct)|[^\s~])/,"u").replace(/punct/g,ue).getRegex(),Ke="^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)",We=k(Ke,"gu").replace(/notPunctSpace/g,He).replace(/punctSpace/g,ve).replace(/punct/g,ue).getRegex(),Xe=k(/\\(punct)/,"gu").replace(/punct/g,v).getRegex(),Je=k(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),Ve=k(F).replace("(?:-->|$)","-->").getRegex(),Ye=k("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",Ve).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),D=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+[^`]*?`+(?!`)|[^\[\]\\`])*?/,et=k(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?\s*\)/).replace("label",D).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),he=k(/^!?\[(label)\]\[(ref)\]/).replace("label",D).replace("ref",j).getRegex(),ke=k(/^!?\[(ref)\](?:\[\])?/).replace("ref",j).getRegex(),tt=k("reflink|nolink(?!\\()","g").replace("reflink",he).replace("nolink",ke).getRegex(),ne=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,W={_backpedal:_,anyPunctuation:Xe,autolink:Je,blockSkip:Ge,br:oe,code:Ae,del:_,delLDelim:_,delRDelim:_,emStrongLDelim:Ze,emStrongRDelimAst:Qe,emStrongRDelimUnd:Fe,escape:Ie,link:et,nolink:ke,punctuation:Be,reflink:he,reflinkSearch:tt,tag:Ye,text:Ce,url:_},nt={...W,link:k(/^!?\[(label)\]\((.*?)\)/).replace("label",D).getRegex(),reflink:k(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",D).getRegex()},Z={...W,emStrongRDelimAst:je,emStrongLDelim:Ne,delLDelim:Ue,delRDelim:We,url:k(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol",ne).replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:k(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol",ne).getRegex()},rt={...Z,br:k(oe).replace("{2,}","*").getRegex(),text:k(Z.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},C={normal:U,gfm:ze,pedantic:Ee},z={normal:W,gfm:Z,breaks:rt,pedantic:nt},st={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},de=n=>st[n];function O(n,e){if(e){if(m.escapeTest.test(n))return n.replace(m.escapeReplace,de)}else if(m.escapeTestNoEncode.test(n))return n.replace(m.escapeReplaceNoEncode,de);return n}function X(n){try{n=encodeURI(n).replace(m.percentDecode,"%")}catch{return null}return n}function J(n,e){let t=n.replace(m.findPipe,(s,o,l)=>{let u=!1,h=o;for(;--h>=0&&l[h]==="\\";)u=!u;return u?"|":" |"}),i=t.split(m.splitPipe),r=0;if(i[0].trim()||i.shift(),i.length>0&&!i.at(-1)?.trim()&&i.pop(),e)if(i.length>e)i.splice(e);else for(;i.length<e;)i.push("");for(;r<i.length;r++)i[r]=i[r].trim().replace(m.slashPipe,"|");return i}function E(n,e,t){let i=n.length;if(i===0)return"";let r=0;for(;r<i&&n.charAt(i-r-1)===e;)r++;return n.slice(0,i-r)}function ge(n,e){if(n.indexOf(e[1])===-1)return-1;let t=0;for(let i=0;i<n.length;i++)if(n[i]==="\\")i++;else if(n[i]===e[0])t++;else if(n[i]===e[1]&&(t--,t<0))return i;return t>0?-2:-1}function fe(n,e=0){let t=e,i="";for(let r of n)if(r==="	"){let s=4-t%4;i+=" ".repeat(s),t+=s}else i+=r,t++;return i}function me(n,e,t,i,r){let s=e.href,o=e.title||null,l=n[1].replace(r.other.outputLinkReplace,"$1");i.state.inLink=!0;let u={type:n[0].charAt(0)==="!"?"image":"link",raw:t,href:s,title:o,text:l,tokens:i.inlineTokens(l)};return i.state.inLink=!1,u}function it(n,e,t){let i=n.match(t.other.indentCodeCompensation);if(i===null)return e;let r=i[1];return e.split(`
`).map(s=>{let o=s.match(t.other.beginningSpace);if(o===null)return s;let[l]=o;return l.length>=r.length?s.slice(r.length):s}).join(`
`)}var w=class{options;rules;lexer;constructor(n){this.options=n||T}space(n){let e=this.rules.block.newline.exec(n);if(e&&e[0].length>0)return{type:"space",raw:e[0]}}code(n){let e=this.rules.block.code.exec(n);if(e){let t=e[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:e[0],codeBlockStyle:"indented",text:this.options.pedantic?t:E(t,`
`)}}}fences(n){let e=this.rules.block.fences.exec(n);if(e){let t=e[0],i=it(t,e[3]||"",this.rules);return{type:"code",raw:t,lang:e[2]?e[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):e[2],text:i}}}heading(n){let e=this.rules.block.heading.exec(n);if(e){let t=e[2].trim();if(this.rules.other.endingHash.test(t)){let i=E(t,"#");(this.options.pedantic||!i||this.rules.other.endingSpaceChar.test(i))&&(t=i.trim())}return{type:"heading",raw:e[0],depth:e[1].length,text:t,tokens:this.lexer.inline(t)}}}hr(n){let e=this.rules.block.hr.exec(n);if(e)return{type:"hr",raw:E(e[0],`
`)}}blockquote(n){let e=this.rules.block.blockquote.exec(n);if(e){let t=E(e[0],`
`).split(`
`),i="",r="",s=[];for(;t.length>0;){let o=!1,l=[],u;for(u=0;u<t.length;u++)if(this.rules.other.blockquoteStart.test(t[u]))l.push(t[u]),o=!0;else if(!o)l.push(t[u]);else break;t=t.slice(u);let h=l.join(`
`),f=h.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");i=i?`${i}
${h}`:h,r=r?`${r}
${f}`:f;let S=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(f,s,!0),this.lexer.state.top=S,t.length===0)break;let p=s.at(-1);if(p?.type==="code")break;if(p?.type==="blockquote"){let I=p,H=I.raw+`
`+t.join(`
`),Y=this.blockquote(H);s[s.length-1]=Y,i=i.substring(0,i.length-I.raw.length)+Y.raw,r=r.substring(0,r.length-I.text.length)+Y.text;break}else if(p?.type==="list"){let I=p,H=I.raw+`
`+t.join(`
`),Y=this.list(H);s[s.length-1]=Y,i=i.substring(0,i.length-p.raw.length)+Y.raw,r=r.substring(0,r.length-I.raw.length)+Y.raw,t=H.substring(s.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:i,tokens:s,text:r}}}list(n){let e=this.rules.block.list.exec(n);if(e){let t=e[1].trim(),i=t.length>1,r={type:"list",raw:"",ordered:i,start:i?+t.slice(0,-1):"",loose:!1,items:[]};t=i?`\\d{1,9}\\${t.slice(-1)}`:`\\${t}`,this.options.pedantic&&(t=i?t:"[*+-]");let s=this.rules.other.listItemRegex(t),o=!1;for(;n;){let u=!1,h="",f="";if(!(e=s.exec(n))||this.rules.block.hr.test(n))break;h=e[0],n=n.substring(h.length);let S=fe(e[2].split(`
`,1)[0],e[1].length),p=n.split(`
`,1)[0],I=!S.trim(),H=0;if(this.options.pedantic?(H=2,f=S.trimStart()):I?H=e[1].length+1:(H=S.search(this.rules.other.nonSpaceChar),H=H>4?1:H,f=S.slice(H),H+=e[1].length),I&&this.rules.other.blankLine.test(p)&&(h+=p+`
`,n=n.substring(p.length+1),u=!0),!u){let Y=this.rules.other.nextBulletRegex(H),R=this.rules.other.hrRegex(H),V=this.rules.other.fencesBeginRegex(H),be=this.rules.other.headingBeginRegex(H),ct=this.rules.other.htmlBeginRegex(H),ot=this.rules.other.blockquoteBeginRegex(H);for(;n;){let dt=n.split(`
`,1)[0],pt;if(p=dt,this.options.pedantic?(p=p.replace(this.rules.other.listReplaceNesting,"  "),pt=p):pt=p.replace(this.rules.other.tabCharGlobal,"    "),V.test(p)||be.test(p)||ct.test(p)||ot.test(p)||Y.test(p)||R.test(p))break;if(pt.search(this.rules.other.nonSpaceChar)>=H||!p.trim())f+=`
`+pt.slice(H);else{if(I||S.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||V.test(S)||be.test(S)||R.test(S))break;f+=`
`+p}I=!p.trim(),h+=dt+`
`,n=n.substring(dt.length+1),S=pt.slice(H)}}r.loose||(o?r.loose=!0:this.rules.other.doubleBlankLine.test(h)&&(o=!0)),r.items.push({type:"list_item",raw:h,task:!!this.options.gfm&&this.rules.other.listIsTask.test(f),loose:!1,text:f,tokens:[]}),r.raw+=h}let l=r.items.at(-1);if(l)l.raw=l.raw.trimEnd(),l.text=l.text.trimEnd();else return;r.raw=r.raw.trimEnd();for(let u of r.items){if(this.lexer.state.top=!1,u.tokens=this.lexer.blockTokens(u.text,[]),u.task){if(u.text=u.text.replace(this.rules.other.listReplaceTask,""),u.tokens[0]?.type==="text"||u.tokens[0]?.type==="paragraph"){u.tokens[0].raw=u.tokens[0].raw.replace(this.rules.other.listReplaceTask,""),u.tokens[0].text=u.tokens[0].text.replace(this.rules.other.listReplaceTask,"");for(let f=this.lexer.inlineQueue.length-1;f>=0;f--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[f].src)){this.lexer.inlineQueue[f].src=this.lexer.inlineQueue[f].src.replace(this.rules.other.listReplaceTask,"");break}}let h=this.rules.other.listTaskCheckbox.exec(u.raw);if(h){let f={type:"checkbox",raw:h[0]+" ",checked:h[0]!=="[ ]"};u.checked=f.checked,r.loose?u.tokens[0]&&["paragraph","text"].includes(u.tokens[0].type)&&"tokens"in u.tokens[0]&&u.tokens[0].tokens?(u.tokens[0].raw=f.raw+u.tokens[0].raw,u.tokens[0].text=f.raw+u.tokens[0].text,u.tokens[0].tokens.unshift(f)):u.tokens.unshift({type:"paragraph",raw:f.raw,text:f.raw,tokens:[f]}):u.tokens.unshift(f)}}if(!r.loose){let h=u.tokens.filter(S=>S.type==="space"),f=h.length>0&&h.some(S=>this.rules.other.anyLine.test(S.raw));r.loose=f}}if(r.loose)for(let u of r.items){u.loose=!0;for(let h of u.tokens)h.type==="text"&&(h.type="paragraph")}return r}}html(n){let e=this.rules.block.html.exec(n);if(e)return{type:"html",block:!0,raw:e[0],pre:e[1]==="pre"||e[1]==="script"||e[1]==="style",text:e[0]}}def(n){let e=this.rules.block.def.exec(n);if(e){let t=e[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),i=e[2]?e[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",r=e[3]?e[3].substring(1,e[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):e[3];return{type:"def",tag:t,raw:e[0],href:i,title:r}}}table(n){let e=this.rules.block.table.exec(n);if(!e||!this.rules.other.tableDelimiter.test(e[2]))return;let t=J(e[1]),i=e[2].replace(this.rules.other.tableAlignChars,"").split("|"),r=e[3]?.trim()?e[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],s={type:"table",raw:e[0],header:[],align:[],rows:[]};if(t.length===i.length){for(let o of i)this.rules.other.tableAlignRight.test(o)?s.align.push("right"):this.rules.other.tableAlignCenter.test(o)?s.align.push("center"):this.rules.other.tableAlignLeft.test(o)?s.align.push("left"):s.align.push(null);for(let o=0;o<t.length;o++)s.header.push({text:t[o],tokens:this.lexer.inline(t[o]),header:!0,align:s.align[o]});for(let o of r)s.rows.push(J(o,s.header.length).map((l,u)=>({text:l,tokens:this.lexer.inline(l),header:!1,align:s.align[u]})));return s}}lheading(n){let e=this.rules.block.lheading.exec(n);if(e)return{type:"heading",raw:e[0],depth:e[2].charAt(0)==="="?1:2,text:e[1],tokens:this.lexer.inline(e[1])}}paragraph(n){let e=this.rules.block.paragraph.exec(n);if(e){let t=e[1].charAt(e[1].length-1)===`
`?e[1].slice(0,-1):e[1];return{type:"paragraph",raw:e[0],text:t,tokens:this.lexer.inline(t)}}}text(n){let e=this.rules.block.text.exec(n);if(e)return{type:"text",raw:e[0],text:e[0],tokens:this.lexer.inline(e[0])}}escape(n){let e=this.rules.inline.escape.exec(n);if(e)return{type:"escape",raw:e[0],text:e[1]}}tag(n){let e=this.rules.inline.tag.exec(n);if(e)return!this.lexer.state.inLink&&this.rules.other.startATag.test(e[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(e[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(e[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(e[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:e[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:e[0]}}link(n){let e=this.rules.inline.link.exec(n);if(e){let t=e[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(t)){if(!this.rules.other.endAngleBracket.test(t))return;let s=E(t.slice(0,-1),"\\");if((t.length-s.length)%2===0)return}else{let s=ge(e[2],"()");if(s===-2)return;if(s>-1){let o=(e[0].indexOf("!")===0?5:4)+e[1].length+s;e[2]=e[2].substring(0,s),e[0]=e[0].substring(0,o).trim(),e[3]=""}}let i=e[2],r="";if(this.options.pedantic){let s=this.rules.other.pedanticHrefTitle.exec(i);s&&(i=s[1],r=s[3])}else r=e[3]?e[3].slice(1,-1):"";return i=i.trim(),this.rules.other.startAngleBracket.test(i)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(t)?i=i.slice(1):i=i.slice(1,-1)),me(e,{href:i&&i.replace(this.rules.inline.anyPunctuation,"$1"),title:r&&r.replace(this.rules.inline.anyPunctuation,"$1")},e[0],this.lexer,this.rules)}}reflink(n,e){let t;if((t=this.rules.inline.reflink.exec(n))||(t=this.rules.inline.nolink.exec(n))){let i=(t[2]||t[1]).replace(this.rules.other.multipleSpaceGlobal," "),r=e[i.toLowerCase()];if(!r){let s=t[0].charAt(0);return{type:"text",raw:s,text:s}}return me(t,r,t[0],this.lexer,this.rules)}}emStrong(n,e,t=""){let i=this.rules.inline.emStrongLDelim.exec(n);if(!(!i||i[3]&&t.match(this.rules.other.unicodeAlphaNumeric))&&(!(i[1]||i[2])||!t||this.rules.inline.punctuation.exec(t))){let r=[...i[0]].length-1,s,o,l=r,u=0,h=i[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(h.lastIndex=0,e=e.slice(-1*n.length+r);(i=h.exec(e))!=null;){if(s=i[1]||i[2]||i[3]||i[4]||i[5]||i[6],!s)continue;if(o=[...s].length,i[3]||i[4]){l+=o;continue}else if((i[5]||i[6])&&r%3&&!((r+o)%3)){u+=o;continue}if(l-=o,l>0)continue;o=Math.min(o,o+l+u);let f=[...i[0]][0].length,S=n.slice(0,r+i.index+f+o);if(Math.min(r,o)%2){let I=S.slice(1,-1);return{type:"em",raw:S,text:I,tokens:this.lexer.inlineTokens(I)}}let p=S.slice(2,-2);return{type:"strong",raw:S,text:p,tokens:this.lexer.inlineTokens(p)}}}}codespan(n){let e=this.rules.inline.code.exec(n);if(e){let t=e[2].replace(this.rules.other.newLineCharGlobal," "),i=this.rules.other.nonSpaceChar.test(t),r=this.rules.other.startingSpaceChar.test(t)&&this.rules.other.endingSpaceChar.test(t);return i&&r&&(t=t.substring(1,t.length-1)),{type:"codespan",raw:e[0],text:t}}}br(n){let e=this.rules.inline.br.exec(n);if(e)return{type:"br",raw:e[0]}}del(n,e,t=""){let i=this.rules.inline.delLDelim.exec(n);if(i&&(!i[1]||!t||this.rules.inline.punctuation.exec(t))){let r=[...i[0]].length-1,s,o,l=r,u=this.rules.inline.delRDelim;for(u.lastIndex=0,e=e.slice(-1*n.length+r);(i=u.exec(e))!=null;){if(s=i[1]||i[2]||i[3]||i[4]||i[5]||i[6],!s||(o=[...s].length,o!==r))continue;if(i[3]||i[4]){l+=o;continue}if(l-=o,l>0)continue;o=Math.min(o,o+l);let h=[...i[0]][0].length,f=n.slice(0,r+i.index+h+o),S=f.slice(r,-r);return{type:"del",raw:f,text:S,tokens:this.lexer.inlineTokens(S)}}}}autolink(n){let e=this.rules.inline.autolink.exec(n);if(e){let t,i;return e[2]==="@"?(t=e[1],i="mailto:"+t):(t=e[1],i=t),{type:"link",raw:e[0],text:t,href:i,tokens:[{type:"text",raw:t,text:t}]}}}url(n){let e;if(e=this.rules.inline.url.exec(n)){let t,i;if(e[2]==="@")t=e[0],i="mailto:"+t;else{let r;do r=e[0],e[0]=this.rules.inline._backpedal.exec(e[0])?.[0]??"";while(r!==e[0]);t=e[0],e[1]==="www."?i="http://"+e[0]:i=e[0]}return{type:"link",raw:e[0],text:t,href:i,tokens:[{type:"text",raw:t,text:t}]}}}inlineText(n){let e=this.rules.inline.text.exec(n);if(e){let t=this.lexer.state.inRawBlock;return{type:"text",raw:e[0],text:e[0],escaped:t}}}},x=class ei{tokens;options;state;inlineQueue;tokenizer;constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||T,this.options.tokenizer=this.options.tokenizer||new w,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let t={other:m,block:C.normal,inline:z.normal};this.options.pedantic?(t.block=C.pedantic,t.inline=z.pedantic):this.options.gfm&&(t.block=C.gfm,this.options.breaks?t.inline=z.breaks:t.inline=z.gfm),this.tokenizer.rules=t}static get rules(){return{block:C,inline:z}}static lex(e,t){return new ei(t).lex(e)}static lexInline(e,t){return new ei(t).inlineTokens(e)}lex(e){e=e.replace(m.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let t=0;t<this.inlineQueue.length;t++){let i=this.inlineQueue[t];this.inlineTokens(i.src,i.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,t=[],i=!1){for(this.options.pedantic&&(e=e.replace(m.tabCharGlobal,"    ").replace(m.spaceLine,""));e;){let r;if(this.options.extensions?.block?.some(o=>(r=o.call({lexer:this},e,t))?(e=e.substring(r.raw.length),t.push(r),!0):!1))continue;if(r=this.tokenizer.space(e)){e=e.substring(r.raw.length);let o=t.at(-1);r.raw.length===1&&o!==void 0?o.raw+=`
`:t.push(r);continue}if(r=this.tokenizer.code(e)){e=e.substring(r.raw.length);let o=t.at(-1);o?.type==="paragraph"||o?.type==="text"?(o.raw+=(o.raw.endsWith(`
`)?"":`
`)+r.raw,o.text+=`
`+r.text,this.inlineQueue.at(-1).src=o.text):t.push(r);continue}if(r=this.tokenizer.fences(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.heading(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.hr(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.blockquote(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.list(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.html(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.def(e)){e=e.substring(r.raw.length);let o=t.at(-1);o?.type==="paragraph"||o?.type==="text"?(o.raw+=(o.raw.endsWith(`
`)?"":`
`)+r.raw,o.text+=`
`+r.raw,this.inlineQueue.at(-1).src=o.text):this.tokens.links[r.tag]||(this.tokens.links[r.tag]={href:r.href,title:r.title},t.push(r));continue}if(r=this.tokenizer.table(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.lheading(e)){e=e.substring(r.raw.length),t.push(r);continue}let s=e;if(this.options.extensions?.startBlock){let o=1/0,l=e.slice(1),u;this.options.extensions.startBlock.forEach(h=>{u=h.call({lexer:this},l),typeof u=="number"&&u>=0&&(o=Math.min(o,u))}),o<1/0&&o>=0&&(s=e.substring(0,o+1))}if(this.state.top&&(r=this.tokenizer.paragraph(s))){let o=t.at(-1);i&&o?.type==="paragraph"?(o.raw+=(o.raw.endsWith(`
`)?"":`
`)+r.raw,o.text+=`
`+r.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=o.text):t.push(r),i=s.length!==e.length,e=e.substring(r.raw.length);continue}if(r=this.tokenizer.text(e)){e=e.substring(r.raw.length);let o=t.at(-1);o?.type==="text"?(o.raw+=(o.raw.endsWith(`
`)?"":`
`)+r.raw,o.text+=`
`+r.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=o.text):t.push(r);continue}if(e){let o="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(o);break}else throw new Error(o)}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){let i=e,r=null;if(this.tokens.links){let u=Object.keys(this.tokens.links);if(u.length>0)for(;(r=this.tokenizer.rules.inline.reflinkSearch.exec(i))!=null;)u.includes(r[0].slice(r[0].lastIndexOf("[")+1,-1))&&(i=i.slice(0,r.index)+"["+"a".repeat(r[0].length-2)+"]"+i.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(r=this.tokenizer.rules.inline.anyPunctuation.exec(i))!=null;)i=i.slice(0,r.index)+"++"+i.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);let s;for(;(r=this.tokenizer.rules.inline.blockSkip.exec(i))!=null;)s=r[2]?r[2].length:0,i=i.slice(0,r.index+s)+"["+"a".repeat(r[0].length-s-2)+"]"+i.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);i=this.options.hooks?.emStrongMask?.call({lexer:this},i)??i;let o=!1,l="";for(;e;){o||(l=""),o=!1;let u;if(this.options.extensions?.inline?.some(f=>(u=f.call({lexer:this},e,t))?(e=e.substring(u.raw.length),t.push(u),!0):!1))continue;if(u=this.tokenizer.escape(e)){e=e.substring(u.raw.length),t.push(u);continue}if(u=this.tokenizer.tag(e)){e=e.substring(u.raw.length),t.push(u);continue}if(u=this.tokenizer.link(e)){e=e.substring(u.raw.length),t.push(u);continue}if(u=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(u.raw.length);let f=t.at(-1);u.type==="text"&&f?.type==="text"?(f.raw+=u.raw,f.text+=u.text):t.push(u);continue}if(u=this.tokenizer.emStrong(e,i,l)){e=e.substring(u.raw.length),t.push(u);continue}if(u=this.tokenizer.codespan(e)){e=e.substring(u.raw.length),t.push(u);continue}if(u=this.tokenizer.br(e)){e=e.substring(u.raw.length),t.push(u);continue}if(u=this.tokenizer.del(e,i,l)){e=e.substring(u.raw.length),t.push(u);continue}if(u=this.tokenizer.autolink(e)){e=e.substring(u.raw.length),t.push(u);continue}if(!this.state.inLink&&(u=this.tokenizer.url(e))){e=e.substring(u.raw.length),t.push(u);continue}let h=e;if(this.options.extensions?.startInline){let f=1/0,S=e.slice(1),p;this.options.extensions.startInline.forEach(I=>{p=I.call({lexer:this},S),typeof p=="number"&&p>=0&&(f=Math.min(f,p))}),f<1/0&&f>=0&&(h=e.substring(0,f+1))}if(u=this.tokenizer.inlineText(h)){e=e.substring(u.raw.length),u.raw.slice(-1)!=="_"&&(l=u.raw.slice(-1)),o=!0;let f=t.at(-1);f?.type==="text"?(f.raw+=u.raw,f.text+=u.text):t.push(u);continue}if(e){let f="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(f);break}else throw new Error(f)}}return t}},y=class{options;parser;constructor(n){this.options=n||T}space(n){return""}code({text:n,lang:e,escaped:t}){let i=(e||"").match(m.notSpaceStart)?.[0],r=n.replace(m.endingNewline,"")+`
`;return i?'<pre><code class="language-'+O(i)+'">'+(t?r:O(r,!0))+`</code></pre>
`:"<pre><code>"+(t?r:O(r,!0))+`</code></pre>
`}blockquote({tokens:n}){return`<blockquote>
${this.parser.parse(n)}</blockquote>
`}html({text:n}){return n}def(n){return""}heading({tokens:n,depth:e}){return`<h${e}>${this.parser.parseInline(n)}</h${e}>
`}hr(n){return`<hr>
`}list(n){let e=n.ordered,t=n.start,i="";for(let o=0;o<n.items.length;o++){let l=n.items[o];i+=this.listitem(l)}let r=e?"ol":"ul",s=e&&t!==1?' start="'+t+'"':"";return"<"+r+s+`>
`+i+"</"+r+`>
`}listitem(n){return`<li>${this.parser.parse(n.tokens)}</li>
`}checkbox({checked:n}){return"<input "+(n?'checked="" ':"")+'disabled="" type="checkbox"> '}paragraph({tokens:n}){return`<p>${this.parser.parseInline(n)}</p>
`}table(n){let e="",t="";for(let r=0;r<n.header.length;r++)t+=this.tablecell(n.header[r]);e+=this.tablerow({text:t});let i="";for(let r=0;r<n.rows.length;r++){let s=n.rows[r];t="";for(let o=0;o<s.length;o++)t+=this.tablecell(s[o]);i+=this.tablerow({text:t})}return i&&(i=`<tbody>${i}</tbody>`),`<table>
<thead>
`+e+`</thead>
`+i+`</table>
`}tablerow({text:n}){return`<tr>
${n}</tr>
`}tablecell(n){let e=this.parser.parseInline(n.tokens),t=n.header?"th":"td";return(n.align?`<${t} align="${n.align}">`:`<${t}>`)+e+`</${t}>
`}strong({tokens:n}){return`<strong>${this.parser.parseInline(n)}</strong>`}em({tokens:n}){return`<em>${this.parser.parseInline(n)}</em>`}codespan({text:n}){return`<code>${O(n,!0)}</code>`}br(n){return"<br>"}del({tokens:n}){return`<del>${this.parser.parseInline(n)}</del>`}link({href:n,title:e,tokens:t}){let i=this.parser.parseInline(t),r=X(n);if(r===null)return i;n=r;let s='<a href="'+n+'"';return e&&(s+=' title="'+O(e)+'"'),s+=">"+i+"</a>",s}image({href:n,title:e,text:t,tokens:i}){i&&(t=this.parser.parseInline(i,this.parser.textRenderer));let r=X(n);if(r===null)return O(t);n=r;let s=`<img src="${n}" alt="${O(t)}"`;return e&&(s+=` title="${O(e)}"`),s+=">",s}text(n){return"tokens"in n&&n.tokens?this.parser.parseInline(n.tokens):"escaped"in n&&n.escaped?n.text:O(n.text)}},$=class{strong({text:n}){return n}em({text:n}){return n}codespan({text:n}){return n}del({text:n}){return n}html({text:n}){return n}text({text:n}){return n}link({text:n}){return""+n}image({text:n}){return""+n}br(){return""}checkbox({raw:n}){return n}},b=class ti{options;renderer;textRenderer;constructor(e){this.options=e||T,this.options.renderer=this.options.renderer||new y,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new $}static parse(e,t){return new ti(t).parse(e)}static parseInline(e,t){return new ti(t).parseInline(e)}parse(e){let t="";for(let i=0;i<e.length;i++){let r=e[i];if(this.options.extensions?.renderers?.[r.type]){let o=r,l=this.options.extensions.renderers[o.type].call({parser:this},o);if(l!==!1||!["space","hr","heading","code","table","blockquote","list","html","def","paragraph","text"].includes(o.type)){t+=l||"";continue}}let s=r;switch(s.type){case"space":{t+=this.renderer.space(s);break}case"hr":{t+=this.renderer.hr(s);break}case"heading":{t+=this.renderer.heading(s);break}case"code":{t+=this.renderer.code(s);break}case"table":{t+=this.renderer.table(s);break}case"blockquote":{t+=this.renderer.blockquote(s);break}case"list":{t+=this.renderer.list(s);break}case"checkbox":{t+=this.renderer.checkbox(s);break}case"html":{t+=this.renderer.html(s);break}case"def":{t+=this.renderer.def(s);break}case"paragraph":{t+=this.renderer.paragraph(s);break}case"text":{t+=this.renderer.text(s);break}default:{let o='Token with "'+s.type+'" type was not found.';if(this.options.silent)return console.error(o),"";throw new Error(o)}}}return t}parseInline(e,t=this.renderer){let i="";for(let r=0;r<e.length;r++){let s=e[r];if(this.options.extensions?.renderers?.[s.type]){let l=this.options.extensions.renderers[s.type].call({parser:this},s);if(l!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(s.type)){i+=l||"";continue}}let o=s;switch(o.type){case"escape":{i+=t.text(o);break}case"html":{i+=t.html(o);break}case"link":{i+=t.link(o);break}case"image":{i+=t.image(o);break}case"checkbox":{i+=t.checkbox(o);break}case"strong":{i+=t.strong(o);break}case"em":{i+=t.em(o);break}case"codespan":{i+=t.codespan(o);break}case"br":{i+=t.br(o);break}case"del":{i+=t.del(o);break}case"text":{i+=t.text(o);break}default:{let l='Token with "'+o.type+'" type was not found.';if(this.options.silent)return console.error(l),"";throw new Error(l)}}}return i}},P=class{options;block;constructor(n){this.options=n||T}static passThroughHooks=new Set(["preprocess","postprocess","processAllTokens","emStrongMask"]);static passThroughHooksRespectAsync=new Set(["preprocess","postprocess","processAllTokens"]);preprocess(n){return n}postprocess(n){return n}processAllTokens(n){return n}emStrongMask(n){return n}provideLexer(){return this.block?x.lex:x.lexInline}provideParser(){return this.block?b.parse:b.parseInline}},B=class{defaults=M();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=b;Renderer=y;TextRenderer=$;Lexer=x;Tokenizer=w;Hooks=P;constructor(...n){this.use(...n)}walkTokens(n,e){let t=[];for(let i of n)switch(t=t.concat(e.call(this,i)),i.type){case"table":{let r=i;for(let s of r.header)t=t.concat(this.walkTokens(s.tokens,e));for(let s of r.rows)for(let o of s)t=t.concat(this.walkTokens(o.tokens,e));break}case"list":{let r=i;t=t.concat(this.walkTokens(r.items,e));break}default:{let r=i;this.defaults.extensions?.childTokens?.[r.type]?this.defaults.extensions.childTokens[r.type].forEach(s=>{let o=r[s].flat(1/0);t=t.concat(this.walkTokens(o,e))}):r.tokens&&(t=t.concat(this.walkTokens(r.tokens,e)))}}return t}use(...n){let e=this.defaults.extensions||{renderers:{},childTokens:{}};return n.forEach(t=>{let i={...t};if(i.async=this.defaults.async||i.async||!1,t.extensions&&(t.extensions.forEach(r=>{if(!r.name)throw new Error("extension name required");if("renderer"in r){let s=e.renderers[r.name];s?e.renderers[r.name]=function(...o){let l=r.renderer.apply(this,o);return l===!1&&(l=s.apply(this,o)),l}:e.renderers[r.name]=r.renderer}if("tokenizer"in r){if(!r.level||r.level!=="block"&&r.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let s=e[r.level];s?s.unshift(r.tokenizer):e[r.level]=[r.tokenizer],r.start&&(r.level==="block"?e.startBlock?e.startBlock.push(r.start):e.startBlock=[r.start]:r.level==="inline"&&(e.startInline?e.startInline.push(r.start):e.startInline=[r.start]))}"childTokens"in r&&r.childTokens&&(e.childTokens[r.name]=r.childTokens)}),i.extensions=e),t.renderer){let r=this.defaults.renderer||new y(this.defaults);for(let s in t.renderer){if(!(s in r))throw new Error(`renderer '${s}' does not exist`);if(["options","parser"].includes(s))continue;let o=s,l=t.renderer[o],u=r[o];r[o]=(...h)=>{let f=l.apply(r,h);return f===!1&&(f=u.apply(r,h)),f||""}}i.renderer=r}if(t.tokenizer){let r=this.defaults.tokenizer||new w(this.defaults);for(let s in t.tokenizer){if(!(s in r))throw new Error(`tokenizer '${s}' does not exist`);if(["options","rules","lexer"].includes(s))continue;let o=s,l=t.tokenizer[o],u=r[o];r[o]=(...h)=>{let f=l.apply(r,h);return f===!1&&(f=u.apply(r,h)),f}}i.tokenizer=r}if(t.hooks){let r=this.defaults.hooks||new P;for(let s in t.hooks){if(!(s in r))throw new Error(`hook '${s}' does not exist`);if(["options","block"].includes(s))continue;let o=s,l=t.hooks[o],u=r[o];P.passThroughHooks.has(s)?r[o]=h=>{if(this.defaults.async&&P.passThroughHooksRespectAsync.has(s))return(async()=>{let S=await l.call(r,h);return u.call(r,S)})();let f=l.call(r,h);return u.call(r,f)}:r[o]=(...h)=>{if(this.defaults.async)return(async()=>{let S=await l.apply(r,h);return S===!1&&(S=await u.apply(r,h)),S})();let f=l.apply(r,h);return f===!1&&(f=u.apply(r,h)),f}}i.hooks=r}if(t.walkTokens){let r=this.defaults.walkTokens,s=t.walkTokens;i.walkTokens=function(o){let l=[];return l.push(s.call(this,o)),r&&(l=l.concat(r.call(this,o))),l}}this.defaults={...this.defaults,...i}}),this}setOptions(n){return this.defaults={...this.defaults,...n},this}lexer(n,e){return x.lex(n,e??this.defaults)}parser(n,e){return b.parse(n,e??this.defaults)}parseMarkdown(n){return(e,t)=>{let i={...t},r={...this.defaults,...i},s=this.onError(!!r.silent,!!r.async);if(this.defaults.async===!0&&i.async===!1)return s(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof e>"u"||e===null)return s(new Error("marked(): input parameter is undefined or null"));if(typeof e!="string")return s(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected"));if(r.hooks&&(r.hooks.options=r,r.hooks.block=n),r.async)return(async()=>{let o=r.hooks?await r.hooks.preprocess(e):e,l=await(r.hooks?await r.hooks.provideLexer():n?x.lex:x.lexInline)(o,r),u=r.hooks?await r.hooks.processAllTokens(l):l;r.walkTokens&&await Promise.all(this.walkTokens(u,r.walkTokens));let h=await(r.hooks?await r.hooks.provideParser():n?b.parse:b.parseInline)(u,r);return r.hooks?await r.hooks.postprocess(h):h})().catch(s);try{r.hooks&&(e=r.hooks.preprocess(e));let o=(r.hooks?r.hooks.provideLexer():n?x.lex:x.lexInline)(e,r);r.hooks&&(o=r.hooks.processAllTokens(o)),r.walkTokens&&this.walkTokens(o,r.walkTokens);let l=(r.hooks?r.hooks.provideParser():n?b.parse:b.parseInline)(o,r);return r.hooks&&(l=r.hooks.postprocess(l)),l}catch(o){return s(o)}}}onError(n,e){return t=>{if(t.message+=`
Please report this to https://github.com/markedjs/marked.`,n){let i="<p>An error occurred:</p><pre>"+O(t.message+"",!0)+"</pre>";return e?Promise.resolve(i):i}if(e)return Promise.reject(t);throw t}}},L=new B;function g(n,e){return L.parse(n,e)}g.options=g.setOptions=function(n){return L.setOptions(n),g.defaults=L.defaults,G(g.defaults),g};g.getDefaults=M;g.defaults=T;g.use=function(...n){return L.use(...n),g.defaults=L.defaults,G(g.defaults),g};g.walkTokens=function(n,e){return L.walkTokens(n,e)};g.parseInline=L.parseInline;g.Parser=b;g.parser=b.parse;g.Renderer=y;g.TextRenderer=$;g.Lexer=x;g.lexer=x.lex;g.Tokenizer=w;g.Hooks=P;g.parse=g;g.options;g.setOptions;g.use;g.walkTokens;g.parseInline;b.parse;x.lex;const CRYPTO_CONFIG={name:"cryptosovereignty",color:46296,colorDim:38599,colorCSS:"#00B4D8",colorBoth:5164484,colorBothCSS:"#4ECDC4",featuredNode:"01-cryptosovereignty",readingOrder:["01-cryptosovereignty","02-the-encrypted-meaning-of-crypto","03-the-new-form-of-power","04-crypto-truth-and-power","05-the-political-theology-of-crypto","06-crypto-without-criticisms","07-the-sovereign-the-subject","08-the-theological-conquest-of-money","09-the-legend-of-satoshi-nakamoto","10-the-concept-of-the-political","11-the-oath-of-machines","12-messianic-bitcoin","13-the-pedagogy-of-bitcoin","14-the-political-theology-of-bitcoin","15-bitcoin-and-the-state-of-emergency","16-theory-of-the-crypto-partisan","17-to-my-crypto-comrades","18-the-hope-of-bitcoin","19-bitcoin-and-the-conquest-of-privacy","20-the-question-concerning-bitcoin"],clusterCenter:{x:0,y:0},bloom:{strength:1.2,threshold:.5,radius:.8}},GHOST_CONFIG={remoteGraphUrl:"https://coindork.github.io/mycelial-tree/graph.json",remoteColor:16225050,remoteName:"chirality",remoteSiteUrl:"https://coindork.github.io/mycelial-tree/"},CHIRALITY_REMOTE_CONFIG={name:"chirality",color:16225050,colorDim:12875029,colorCSS:"#F7931A",colorBoth:13936723,colorBothCSS:"#D4A853",featuredNode:"the-constellation",readingOrder:["the-constellation","the-handedness-of-being","theses-on-chirality","the-five-completions","05-the-filter","chirality-agamben","care-can-now-be-proved","chirality","the-chiral-completion","chiral-pedagogy","06-dwelling-in-the-digital-age","the-proof-of-love","11-the-event-of-logic","the-passage","tuesday-in-the-clearing","the-cete"],clusterCenter:{x:200,y:0},bloom:{strength:1.2,threshold:.5,radius:.8}},TERM_DATA={cryptosovereignty:{essay:"01-cryptosovereignty",gloss:"The sovereign power of cryptography — legitimacy grounded in mathematical truth"},"veritas non auctoritas":{essay:"01-cryptosovereignty",gloss:"Truth, not authority, makes law — the inversion of Hobbes"},"veritas, non auctoritas, facit legem":{essay:"01-cryptosovereignty",gloss:"Truth, not authority, makes law"},"veritas, non auctoritas, facit legem.":{essay:"01-cryptosovereignty",gloss:"Truth, not authority, makes law"},"veritas, non auctoritas.":{essay:"01-cryptosovereignty",gloss:"Truth, not authority"},leviathan:{essay:"07-the-sovereign-the-subject",gloss:"Hobbes' absolute sovereign — the political form Bitcoin replaces"},partisan:{essay:"16-theory-of-the-crypto-partisan",gloss:"The irregular fighter — the crypto-partisan operates in deterritorialized digital space"},messianic:{essay:"12-messianic-bitcoin",gloss:"Benjamin's weak messianic power — the redemptive force hidden in Bitcoin"},eidgenossenschaft:{essay:"03-the-new-form-of-power",gloss:"Oath-fellowship — sovereign beings swearing mutual aid without surrendering sovereignty"},"sovereign mutualism":{essay:"ext-sovereign-mutualism",gloss:"Federation of sovereign clearings, each strengthened by every other"},"the clearing":{essay:"ext-first-philosophy",gloss:"Heidegger's Lichtung — the space where truth presences"},"sovereign stack":{essay:"ext-first-philosophy",gloss:"Value → Communication → Cognition → Peoplehood — the four clearings"},ereignis:{essay:"ext-the-event-and-the-clearing",gloss:"The Event of Appropriation — the happening through which Being and beings are brought into their own"},gestell:{essay:"20-the-question-concerning-bitcoin",gloss:"Enframing — the essence of modern technology that reduces everything to standing-reserve"},lichtung:{essay:"ext-first-philosophy",gloss:"The Clearing — the open space where beings can appear and truth can happen"},aletheia:{essay:"ext-first-philosophy",gloss:"Un-concealment — truth as the process of bringing into the open"},dasein:{essay:"ext-the-event-and-the-clearing",gloss:"Being-there — the human being as the entity that questions its own Being"},"homo sacer":{essay:"05-the-political-theology-of-crypto",gloss:"Sacred man — the figure stripped of political life, killed but not sacrificed"},sorge:{essay:"18-the-hope-of-bitcoin",gloss:"Care — the ontological ground of human existence in Heidegger"},"the question concerning technology":{essay:"20-the-question-concerning-bitcoin",gloss:"Heidegger's 1953 lecture on technology as a mode of revealing"},"sapere aude":{gloss:"Dare to know — Kant's motto for Enlightenment"},cete:{essay:"ext-the-solitary-sovereign",gloss:"A gathering of badgers — here, a federation of sovereign nodes"},"foedus pacificum":{essay:"ext-sovereign-mutualism",gloss:"Kant's pacific federation — sovereignty preserved through voluntary cooperation"},geviert:{essay:"ext-first-philosophy",gloss:"The Fourfold — earth, sky, divinities, mortals gathered in the thing"},"the fourfold":{essay:"ext-first-philosophy",gloss:"Earth, sky, divinities, mortals — the four gathered in every genuine thing"},poiesis:{essay:"ext-first-philosophy",gloss:"Bringing-forth — the mode of revealing that lets things come into presence"},"the event and the clearing":{essay:"ext-the-event-and-the-clearing"},"first philosophy":{essay:"ext-first-philosophy"},"the solitary sovereign":{essay:"ext-the-solitary-sovereign"},"the question concerning bitcoin":{essay:"20-the-question-concerning-bitcoin"},"the concept of the political":{essay:"10-the-concept-of-the-political"},"the pedagogy of bitcoin":{essay:"13-the-pedagogy-of-bitcoin"},"theory of the crypto partisan":{essay:"16-theory-of-the-crypto-partisan"},"the encrypted meaning of crypto":{essay:"02-the-encrypted-meaning-of-crypto"},"the new form of power":{essay:"03-the-new-form-of-power"},"crypto truth and power":{essay:"04-crypto-truth-and-power"},"the political theology of crypto":{essay:"05-the-political-theology-of-crypto"},"crypto without criticisms":{essay:"06-crypto-without-criticisms"},"the sovereign and the subject":{essay:"07-the-sovereign-the-subject"},"the theological conquest of money":{essay:"08-the-theological-conquest-of-money"},"the legend of satoshi nakamoto":{essay:"09-the-legend-of-satoshi-nakamoto"},"the oath of machines":{essay:"11-the-oath-of-machines"},"messianic bitcoin":{essay:"12-messianic-bitcoin"},"the political theology of bitcoin":{essay:"14-the-political-theology-of-bitcoin"},"bitcoin and the state of emergency":{essay:"15-bitcoin-and-the-state-of-emergency"},"to my crypto comrades":{essay:"17-to-my-crypto-comrades"},"the hope of bitcoin":{essay:"18-the-hope-of-bitcoin"},"bitcoin and the conquest of privacy":{essay:"19-bitcoin-and-the-conquest-of-privacy"},chirality:{external:"https://coindork.github.io/mycelial-tree/",essay:"chirality",gloss:"Handedness — the irreducible asymmetry that makes encounter possible"},"the handiness of being":{external:"https://coindork.github.io/mycelial-tree/",essay:"the-handedness-of-being",gloss:"The Heidegger constellation — chirality, dwelling, and the encounter"},"the handedness of being":{external:"https://coindork.github.io/mycelial-tree/",essay:"the-handedness-of-being"},"the constellation":{external:"https://coindork.github.io/mycelial-tree/",essay:"the-constellation"}},matrixChars="01アイウエオカキクケコサシスセソ₿∞∮∇∂λΣΩ";let matrixOpacity=.035,matrixCanvas,matrixCtx,matrixDrops=[];function initMatrix(){matrixCanvas=document.getElementById("matrix-canvas"),matrixCtx=matrixCanvas.getContext("2d");function n(){matrixCanvas.width=window.innerWidth*devicePixelRatio,matrixCanvas.height=window.innerHeight*devicePixelRatio,matrixCanvas.style.width=window.innerWidth+"px",matrixCanvas.style.height=window.innerHeight+"px",matrixCtx.setTransform(devicePixelRatio,0,0,devicePixelRatio,0,0);const t=Math.floor(window.innerWidth/18);matrixDrops=Array.from({length:t},()=>Math.random()*-100)}n(),window.addEventListener("resize",n);function e(){matrixCtx.fillStyle="rgba(3, 3, 3, 0.12)",matrixCtx.fillRect(0,0,window.innerWidth,window.innerHeight),matrixCtx.font="12px JetBrains Mono, monospace";for(let t=0;t<matrixDrops.length;t++){const i=matrixChars[Math.floor(Math.random()*matrixChars.length)],r=t*18,s=matrixDrops[t]*16;matrixCtx.fillStyle=Math.random()>.85?`rgba(0, 180, 216, ${matrixOpacity*1.5})`:`rgba(0, 255, 65, ${matrixOpacity})`,matrixCtx.fillText(i,r,s),s>window.innerHeight&&Math.random()>.975&&(matrixDrops[t]=0),matrixDrops[t]+=.5+Math.random()*.3}requestAnimationFrame(e)}e()}let bursts=[];function spawnBurst(){const n=window.innerWidth/2,e=window.innerHeight/2;for(let t=0;t<300;t++){const i=Math.random()*Math.PI*2,r=Math.random()*8+3;bursts.push({x:n,y:e,vx:Math.cos(i)*r,vy:Math.sin(i)*r,life:1,decay:Math.random()*.02+.008,size:Math.random()*3+1,cerulean:Math.random()>.3})}}function drawBursts(){bursts=bursts.filter(n=>n.life>0);for(const n of bursts)n.x+=n.vx,n.y+=n.vy,n.vx*=.97,n.vy*=.97,n.life-=n.decay,!(n.life<=0)&&(matrixCtx.beginPath(),matrixCtx.arc(n.x,n.y,n.size*n.life,0,Math.PI*2),n.cerulean?(matrixCtx.fillStyle=`rgba(0, 180, 216, ${n.life*.9})`,matrixCtx.shadowColor="rgba(0, 180, 216, 0.6)"):(matrixCtx.fillStyle=`rgba(255, 43, 43, ${n.life*.7})`,matrixCtx.shadowColor="rgba(255, 43, 43, 0.4)"),matrixCtx.shadowBlur=10,matrixCtx.fill(),matrixCtx.shadowBlur=0);requestAnimationFrame(drawBursts)}const GENESIS_HASH="000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f";function showAmbientData(){const n=document.getElementById("hash-readout"),e=document.getElementById("block-height");n.innerHTML=`genesis<br>${GENESIS_HASH.slice(0,32)}<br>${GENESIS_HASH.slice(32)}`,n.classList.add("visible");let t=89e4;e.textContent=`blk ${t.toLocaleString()}`,e.classList.add("visible"),setInterval(()=>{t+=Math.floor(Math.random()*3),e.textContent=`blk ${t.toLocaleString()}`},8e3)}function wait(n){return new Promise(e=>setTimeout(e,n))}function addBootLine(n,e=""){const t=document.getElementById("boot"),i=document.createElement("div");i.className="boot-line "+e,i.innerHTML=n,t.appendChild(i),requestAnimationFrame(()=>i.classList.add("visible"))}async function typeInto(n,e,t=50){for(let i=0;i<e.length;i++)n.textContent+=e[i],n.setAttribute("data-text",n.textContent||""),await wait(t)}function glitchFlash(n=5,e=70){return new Promise(t=>{const i=document.getElementById("glitch-overlay");let r=0;const s=[];function o(){if(s.forEach(l=>l.remove()),s.length=0,r>=n){t();return}i.style.opacity="1";for(let l=0;l<4+Math.floor(Math.random()*6);l++){const u=document.createElement("div");u.className="glitch-bar",u.style.top=Math.random()*100+"%",u.style.height=Math.random()*4+1+"px",u.style.opacity=String(Math.random()*.8+.2),u.style.background=Math.random()>.5?"var(--cerulean)":"var(--red)",i.appendChild(u),s.push(u)}r++,setTimeout(o,e)}o()})}async function runOpeningSequence(n){const e=document.getElementById("boot"),t=document.getElementById("act-1"),i=document.getElementById("act-2"),r=document.getElementById("old-latin"),s=document.getElementById("old-translation"),o=document.getElementById("old-source"),l=document.getElementById("new-law"),u=document.getElementById("glitch-overlay"),h=document.getElementById("graph-container");h.style.opacity="0",h.style.transition="opacity 1.5s ease",await wait(400),addBootLine("> initializing cryptographic verification layer...","bright"),await wait(250),addBootLine('[  <span class="dim">OK</span>  ] sha256 hash engine loaded'),await wait(180),addBootLine('[  <span class="dim">OK</span>  ] elliptic curve secp256k1 ready'),await wait(180),addBootLine('[  <span class="dim">OK</span>  ] merkle tree verification active'),await wait(150),addBootLine('[  <span class="dim">OK</span>  ] genesis block hash validated'),await wait(150),addBootLine('[  <span class="dim">OK</span>  ] peer-to-peer consensus: 24 nodes connected'),await wait(280),addBootLine(""),addBootLine("> scanning for sovereign authority...","bright"),await wait(500),addBootLine('[ <span class="fail">FAIL</span> ] no central authority found'),await wait(180),addBootLine('[ <span class="fail">FAIL</span> ] no trusted third party detected'),await wait(180),addBootLine('[ <span class="fail">FAIL</span> ] no state monopoly on violence'),await wait(350),addBootLine(""),addBootLine('[ <span class="warn">WARN</span> ] sovereignty source: <span class="warn">CRYPTOGRAPHIC PROOF</span>',"bright"),await wait(250),addBootLine('[ <span class="warn">WARN</span> ] authority model: <span class="warn">INVERTED</span>',"bright"),await wait(500),addBootLine(""),addBootLine("> loading philosophical payload...","bright"),await wait(700),e.classList.add("hidden"),showAmbientData(),await wait(500),t.classList.add("visible"),await wait(400),r.classList.add("visible"),await typeInto(r,"Auctoritas, non veritas, facit legem.",55),await wait(500),s.classList.add("visible"),o.classList.add("visible"),await wait(3e3),r.classList.add("active"),await wait(250),await glitchFlash(5,70),spawnBurst(),matrixOpacity=.08,matrixCtx.fillStyle="rgba(0, 180, 216, 0.12)",matrixCtx.fillRect(0,0,window.innerWidth,window.innerHeight),await wait(120),u.innerHTML="",u.style.opacity="0",t.classList.remove("visible"),t.classList.add("hidden"),await wait(250),matrixOpacity=.025,i.classList.add("visible"),await wait(80),l.classList.add("visible"),await wait(4500),i.style.transition="opacity 1.5s ease",i.style.opacity="0",h.style.opacity="1",await wait(800),document.body.classList.add("graph-active"),i.style.display="none",n()}function buildSidebar(n,e){const t=document.querySelector(".sidebar-list");t.innerHTML="";const i=CRYPTO_CONFIG.readingOrder,r=new Map(i.map((o,l)=>[o,l+1])),s=n.filter(o=>r.has(o.id)).sort((o,l)=>(r.get(o.id)??99)-(r.get(l.id)??99));for(const o of s){const l=r.get(o.id)??99,u=document.createElement("div");u.className="sidebar-item",u.dataset.nodeId=o.id,u.innerHTML=`<span class="item-num">${String(l).padStart(2,"0")}</span><span class="item-title">${o.title.toLowerCase()}</span>`,u.addEventListener("mouseenter",()=>{e.resetTrace(o.id),e.highlightedNodeId=o.id,t.querySelectorAll(".sidebar-item").forEach(h=>h.classList.remove("active")),u.classList.add("active")}),u.addEventListener("mouseleave",()=>{e.highlightedNodeId=null,u.classList.remove("active")}),u.addEventListener("click",()=>openEssay(o.id)),t.appendChild(u)}}let currentRenderer=null,currentEssayId=null,essayAbort=null;async function openEssay(n){const e=document.getElementById("essay-reader"),t=e.querySelector(".reader-content"),i=document.getElementById("reader-chapter");essayAbort&&essayAbort.abort(),essayAbort=new AbortController;const r=essayAbort.signal;currentEssayId=n;const s=CRYPTO_CONFIG.readingOrder,o=s.indexOf(n);o>=0?i.textContent=`chapter ${String(o+1).padStart(2,"0")} / ${s.length}`:i.textContent="",updateEssayNav(o,s),t.innerHTML='<p style="color: var(--text-dim); font-family: var(--mono); font-size: 0.8rem;">loading...</p>',e.classList.add("open");try{const u=await fetch(`/cryptosovereignty/essays/${n}.html`,{signal:r});if(currentEssayId!==n)return;u.ok?(t.innerHTML=await u.text(),t.scrollTop=0,linkifyTerms(t)):t.innerHTML='<p style="color: var(--red); font-family: var(--mono); font-size: 0.8rem;">[ ERROR ] essay not found</p>'}catch(l){if(l.name==="AbortError"||currentEssayId!==n)return;t.innerHTML='<p style="color: var(--red); font-family: var(--mono); font-size: 0.8rem;">[ ERROR ] failed to load essay</p>'}}function updateEssayNav(n,e){const t=document.getElementById("essay-prev"),i=document.getElementById("essay-next");n<=0?t.classList.add("disabled"):(t.classList.remove("disabled"),t.onclick=()=>openEssay(e[n-1])),n<0||n>=e.length-1?i.classList.add("disabled"):(i.classList.remove("disabled"),i.onclick=()=>openEssay(e[n+1]))}function closeReader(){document.getElementById("essay-reader").classList.remove("open"),currentEssayId=null}function linkifyTerms(n){const e=n.querySelectorAll("em");for(const t of e){const i=t.textContent?.trim()||"",r=i.toLowerCase().replace(/[\u201C\u201D]/g,'"').replace(/[\u2018\u2019]/g,"'");let s=TERM_DATA[r];if(!s){const l=r.replace(/[.,;:!?]$/,"").trim();s=TERM_DATA[l]}if(!s)continue;const o=s.essay;if(o){const l=document.createElement("a");l.className="term-link",l.textContent=i,l.href="#",l.dataset.essayId=o,s.gloss&&(l.title=s.gloss),l.addEventListener("mouseenter",()=>{currentRenderer&&(currentRenderer.resetTrace(o),currentRenderer.highlightedNodeId=o)}),l.addEventListener("mouseleave",()=>{currentRenderer&&(currentRenderer.highlightedNodeId=null)}),l.addEventListener("click",u=>{u.preventDefault(),s.external?window.location.href=s.external+"#"+o:openEssay(o)}),t.replaceWith(l)}else if(s.gloss){const l=document.createElement("span");l.className="term-gloss",l.textContent=i,l.title=s.gloss,t.replaceWith(l)}}}function setupReader(){document.getElementById("reader-back").addEventListener("click",closeReader),document.getElementById("reader-close").addEventListener("click",closeReader),document.addEventListener("keydown",n=>{n.key==="Escape"&&closeReader()})}function showUI(){setTimeout(()=>{document.getElementById("sidebar").classList.add("visible"),document.getElementById("cluster-nav")?.classList.add("visible"),document.getElementById("prompt-bar")?.classList.add("visible")},1500)}function setupClusterNav(n,e,t){let i="cryptosovereignty";const s=document.getElementById("cluster-nav").querySelectorAll(".cluster-label[data-cluster]");s.forEach(o=>{o.addEventListener("click",async()=>{const l=o.dataset.cluster;if(l!==i){if(l==="cryptosovereignty"){const u=computeLayout(t,[CRYPTO_CONFIG]);e.clearScene(),e.buildScene(u,t.edges),e.travelToCluster("cryptosovereignty"),buildSidebar(u,e),i=l}else if(l==="atlas"){const u=await fetchRemoteGraph(GHOST_CONFIG.remoteGraphUrl);if(!u)return;const h=mergeForAtlas(t,u),f=[{...CRYPTO_CONFIG,clusterCenter:{x:-200,y:0}},{...CHIRALITY_REMOTE_CONFIG,clusterCenter:{x:200,y:0}}],S=computeLayout(h,f);e.clearScene(),e.buildAtlasScene(S,h.edges,f),e.pullBackCamera(),buildSidebar(S,e),i=l}s.forEach(u=>u.classList.remove("active")),o.classList.add("active")}})})}async function init(){initMatrix(),requestAnimationFrame(drawBursts);const t=await(await fetch("/cryptosovereignty/graph.json")).json(),i=document.getElementById("graph-container"),r=new MoleculeRenderer(i,CRYPTO_CONFIG);currentRenderer=r;const s=computeLayout(t,[CRYPTO_CONFIG]);r.buildScene(s,t.edges);const o=new Set;r.onNodeClick=u=>{if(o.has(u)){window.location.href=`${GHOST_CONFIG.remoteSiteUrl}#${u}`;return}r.focusNode(u),openEssay(u)},buildSidebar(s,r),setupReader(),setupClusterNav(s,r,t),fetchRemoteGraph(GHOST_CONFIG.remoteGraphUrl).then(u=>{if(!u)return;const{ghostNodes:h,ghostEdges:f}=identifyGhosts(t,u,GHOST_CONFIG);if(h.length===0)return;for(const Y of h)o.add(Y.id);const S=[...t.nodes,...h],p=[...t.edges,...f],H=computeLayout({nodes:S,edges:p},[CRYPTO_CONFIG]).filter(Y=>h.some(R=>R.id===Y.id));for(const Y of H)Y.z-=40;r.addGhostNodes(H,f,GHOST_CONFIG.remoteColor,13936723,GHOST_CONFIG.remoteSiteUrl)});function l(){const u=document.querySelector(".sidebar-item.active .item-num");if(u){const h=r.currentPulse;u.style.textShadow=`0 0 ${4+h*8}px var(--cerulean)`}requestAnimationFrame(l)}if(requestAnimationFrame(l),window.location.hash.length>1){const u=window.location.hash.slice(1);document.getElementById("boot").style.display="none",document.getElementById("act-1").style.display="none",document.getElementById("act-2").style.display="none",i.style.opacity="1",document.body.classList.add("graph-active"),showAmbientData(),r.start(),showUI(),r.highlightedNodeId=u,openEssay(u);return}runOpeningSequence(()=>{r.start(),showUI()})}init();
